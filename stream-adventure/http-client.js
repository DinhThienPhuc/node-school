const request = require('request')

const rw = request.post('http://localhost:8099')

process.stdin.pipe(rw).pipe(process.stdout)