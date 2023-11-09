[![CI Test Status][ci-img]][ci-url]
[![Code Climate][clim-img]][clim-url]
[![NPM][npm-img]][npm-url]

# haraka-plugin-queue-kafka
========

This plugin delivers mails to kafka topic for further processing.

Configuration
-------------

* `config/kafka.ini`
    This config file provides brokers, topic, and SASL authentication options.

Replaces all uses of the word `haraka-plugin-queue-kafka` with your plugin's name.

./redress.sh [something]

You'll then be prompted to update package.json and then force push this repo onto the GitHub repo you've created earlier.


# Add your content here

## INSTALL

```sh
cd /path/to/local/haraka
npm install haraka-plugin-haraka-plugin-queue-kafka
echo "haraka-plugin-queue-kafka" >> config/plugins
service haraka restart
```

### Configuration

If the default configuration is not sufficient, copy the config file from the distribution into your haraka config dir and then modify it:

```sh
cp node_modules/haraka-plugin-haraka-plugin-queue-kafka/config/haraka-plugin-queue-kafka.ini config/haraka-plugin-queue-kafka.ini
$EDITOR config/haraka-plugin-queue-kafka.ini
```

## USAGE


<!-- leave these buried at the bottom of the document -->
[ci-img]: https://github.com/haraka/haraka-plugin-haraka-plugin-queue-kafka/actions/workflows/ci.yml/badge.svg
[ci-url]: https://github.com/haraka/haraka-plugin-haraka-plugin-queue-kafka/actions/workflows/ci.yml
[clim-img]: https://codeclimate.com/github/haraka/haraka-plugin-haraka-plugin-queue-kafka/badges/gpa.svg
[clim-url]: https://codeclimate.com/github/haraka/haraka-plugin-haraka-plugin-queue-kafka
[npm-img]: https://nodei.co/npm/haraka-plugin-haraka-plugin-queue-kafka.png
[npm-url]: https://www.npmjs.com/package/haraka-plugin-haraka-plugin-queue-kafka
