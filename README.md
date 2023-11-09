[![CI Test Status][ci-img]][ci-url]
[![Code Climate][clim-img]][clim-url]
[![NPM][npm-img]][npm-url]

# haraka-plugin-queue-kafka
========

Queue inbound mail to a Kafka topic.

Configuration
-------------

* `config/kafka.ini`
    This config file provides brokers, topic, and SASL authentication options.

## INSTALL

```sh
cd /path/to/local/haraka
npm install haraka-plugin-queue-kafka
echo "haraka-plugin-queue-kafka" >> config/plugins
service haraka restart
```

### Configuration

```sh
cp node_modules/haraka-plugin-queue-kafka/config/kafka.ini config/kafka.ini
$EDITOR kafka.ini
```

<!-- leave these buried at the bottom of the document -->
[ci-img]: https://github.com/haraka/haraka-plugin-haraka-plugin-queue-kafka/actions/workflows/ci.yml/badge.svg
[ci-url]: https://github.com/haraka/haraka-plugin-haraka-plugin-queue-kafka/actions/workflows/ci.yml
[clim-img]: https://codeclimate.com/github/haraka/haraka-plugin-haraka-plugin-queue-kafka/badges/gpa.svg
[clim-url]: https://codeclimate.com/github/haraka/haraka-plugin-haraka-plugin-queue-kafka
[npm-img]: https://nodei.co/npm/haraka-plugin-haraka-plugin-queue-kafka.png
[npm-url]: https://www.npmjs.com/package/haraka-plugin-haraka-plugin-queue-kafka
