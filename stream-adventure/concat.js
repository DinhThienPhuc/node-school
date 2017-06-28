const concat = require('concat-stream')

process.stdin.pipe(concat(str => {
    const rts = str.toString().split('').reverse().join('')
    process.stdout.write(rts)
}))