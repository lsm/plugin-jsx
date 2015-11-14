'use strict'

var babel = require('babel-core')

exports.translate = function(load) {
  var output = babel.transform(load.source, {
    presets: ['react'],
    sourceMaps: true
  })
  load.source = output.code;
  load.metadata.sourceMap = output.map;
}
