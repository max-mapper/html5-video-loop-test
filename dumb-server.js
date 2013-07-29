// purposely doesn't set correct content-types
// or respond properly to range header requests
var fs = require('fs')
var mp4 = fs.readFileSync('flythrough.mp4')
var webm = fs.readFileSync('flythrough.webm')
var index = fs.readFileSync('index.html')
require('http').createServer(function(req, res) {
  if (req.url === '/') return res.end(index)
  if (req.url.match(/mp4/)) return res.end(mp4)
  if (req.url.match(/webm/)) return res.end(webm)
  res.end('')
}).listen(8080)
console.log('open http://localhost:8080')