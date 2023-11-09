'use strict'

exports.register = function () {
  this.load_haraka-plugin-queue-kafka_ini()
}

exports.load_haraka-plugin-queue-kafka_ini = function () {
  const plugin = this

  plugin.cfg = plugin.config.get('haraka-plugin-queue-kafka.ini', {
    booleans: [
      '+enabled',               // plugin.cfg.main.enabled=true
      '-disabled',              // plugin.cfg.main.disabled=false
      '+feature_section.yes'    // plugin.cfg.feature_section.yes=true
    ]
  },
  function () {
    plugin.load_example_ini()
  })
}
