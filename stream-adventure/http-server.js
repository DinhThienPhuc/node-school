const through = require('through2')
const http = require('http')

function write(buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase())
    next()
}

function end(done) {
    done()
}

const stream = through(write, end)

const server = http.createServer((req, res) => {
    if ('POST' !== req.method) {
        res.end('You need to send a POST request!')
    }
    req.pipe(stream).pipe(res)
})

server.listen(process.argv[2])