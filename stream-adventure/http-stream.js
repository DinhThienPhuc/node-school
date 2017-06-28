const trumpet = require('trumpet')()
const through = require('through2')

function write(buffer, encoding, next) {
    this.push(buffer.toString().toUpperCase())
    next()
}

function end(done) {
    done()
}

const stream = trumpet.select('.loud').createStream()

stream.pipe(through(write, end)).pipe(stream)

process.stdin.pipe(trumpet).pipe(process.stdout)