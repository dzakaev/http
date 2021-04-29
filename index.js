const http = require('http')

const server =http.createServer((req, res) => {
  res.writeHead(200, {
    'Content-type': 'text/html'
  })
  res.write('<h1>Hello from intocode coding bootcamp</h1>')

  res.end()

})

server.listen(3000)