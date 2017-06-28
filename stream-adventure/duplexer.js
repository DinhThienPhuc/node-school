const spawn = require('child_process').spawn;
const duplexer = require('duplexer2')

module.exports = (cmd, args) => {
    const ahihi = spawn(cmd, args)
    return duplexer(ahihi.stdin, ahihi.stdout)
};
