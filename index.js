const http = require('http')
const fs = require('fs')
const path = require('path')

const server = http.createServer((req, res) => {
  res.writeHead(200)
  if (req.url === '/') {
    fs.readFile(path.resolve(__dirname, 'pages', 'index.html'),(err, data) => {
      res.write(data.toString())
      res.end()
    })
  } else if (req.url === '/about') {
    fs.readFile(path.resolve(__dirname, 'pages', 'about.html'), (err, data) => {
      res.write(data.toString())
      res.end()
    })
  } else {
    res.writeHead('404')
    res.write('страница боь1')
    res.end()
  }
})
server.listen(3000)