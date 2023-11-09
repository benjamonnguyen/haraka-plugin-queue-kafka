
// node.js built-in modules
const assert   = require('assert')

// npm modules
const fixtures = require('haraka-test-fixtures')

// start of tests
//    assert: https://nodejs.org/api/assert.html
//    mocha: http://mochajs.org

beforeEach(function (done) {
  this.plugin = new fixtures.plugin('haraka-plugin-queue-kafka')
  done()  // if a test hangs, assure you called done()
})

describe('haraka-plugin-queue-kafka', function () {
  it('loads', function (done) {
    assert.ok(this.plugin)
    done()
  })
})

describe('load_kafka_config', function () {
  it('loads config/kafka.ini config into kafkajs.KafkaConfig object', function (done) {
    this.plugin.load_kafka_config()
    assert.ok(this.plugin.kCfg)
    const kCfg = this.plugin.kCfg
    assert.strictEqual(kCfg.clientId, 'haraka')
    assert.strictEqual(kCfg.brokers.length, 1)
    assert.strictEqual(kCfg.brokers[0], '')
    assert.strictEqual(kCfg.connectionTimeout, 30000)
    assert.strictEqual(this.plugin.produceTimeout, 30000)
    assert.strictEqual(this.plugin.topic, '')
    assert.strictEqual(kCfg.logLevel, 4)
    assert.ok(!kCfg.sasl)
    assert.ok(!kCfg.ssl)
    done()
  })
})

describe('uses text fixtures', function () {
  it('sets up a connection', function (done) {
    this.connection = fixtures.connection.createConnection({})
    assert.ok(this.connection.server)
    done()
  })

  it('sets up a transaction', function (done) {
    this.connection = fixtures.connection.createConnection({})
    this.connection.transaction = fixtures.transaction.createTransaction({})
    // console.log(this.connection.transaction)
    assert.ok(this.connection.transaction.header)
    done()
  })
})