const websocket = require('websocket-stream')
const stream = websocket('ws://localhost:8099')

stream.write('hello\n')