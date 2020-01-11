var fs = require('fs');
var atob = require('atob');

var data = atob(fs.readFileSync('musig.wasm.b64').toString());

fs.writeFileSync('musig.wasm', data);
