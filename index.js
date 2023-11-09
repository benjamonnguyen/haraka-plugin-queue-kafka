'use strict'

const { Kafka, logLevel} = require('kafkajs');

exports.register = function () {
  this.load_kafka_config();
  this.init_producer();
}

exports.hook_queue = function (next, connection) {
  if (!connection?.transaction) return next();

  connection.transaction.message_stream.get_data(value => {
    this.producer.send({
      topic: this.topic,
      timeout: this.timeout,
      messages: [
        {
          key: connection.transaction.header.get("Message-ID"),
          value,
        }
      ],
    }).then((record) => {
      this.logdebug("Queued to kafka:", record);
      return next(OK);
    }).catch((e) => {
      this.logerror("Failed to queue to kafka:", e);
      return next();
    });
  });
}

exports.init_producer = function () {
  const kafka = new Kafka(this.kCfg);

  this.producer = kafka.producer();
  this.producer.connect();
}

exports.shutdown = function () {
  this.producer.disconnect();
}

exports.load_kafka_config = function () {
  const cfg = this.config.get("kafka.ini").main;

  const clientId = cfg.clientId || "haraka";
  const brokers = cfg.brokers.split(",");
  this.topic = cfg.topic;
  this.produceTimeout = parseInt(cfg.timeout) || 30000;
  const connectionTimeout = parseInt(cfg.connectTimeout) || 30000;
  const lvl = parseInt(cfg.logLevel) || logLevel.INFO;

  this.kCfg = {
    clientId,
    brokers,
    connectionTimeout,
    logLevel: lvl,
  };
  if (cfg.mechanism) {
    this.kCfg.sasl = {
      mechanism: cfg.mechanism,
      username: cfg.username,
      password: cfg.password,
    };
    this.kCfg.ssl = true;
  }
}
