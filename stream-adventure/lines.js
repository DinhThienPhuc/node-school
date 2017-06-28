const through = require('through2')
const split = require('split')
var count = 0

function write(buffer, encoding, next) {
    count++;
    if (1 === count) this.push(buffer.toString().toLowerCase())
    else {
        if (0 !== count % 2) {
            this.push('\n' + buffer.toString().toLowerCase())
        } else {
            this.push('\n' + buffer.toString().toUpperCase());
        }
    }
    next()
}

function end(done) {
    done()
}

const stream = through(write, end)

process.stdin
    .pipe(split())
    .pipe(stream)
    .pipe(process.stdout)