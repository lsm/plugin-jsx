var fs = require('fs')
var plugin = require('./index.js')
var jsxCode = fs.readFileSync('./example.jsx')

var load = {
  source: jsxCode,
  metadata: {}
}

plugin.translate(load)

console.log(load.source);
console.log(load.metadata.sourceMap);
