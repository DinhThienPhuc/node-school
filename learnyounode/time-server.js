const net = require('net');

const format = (time) => {
    return (10 <= time ? '' : '0') + time;
}

const server = net.createServer(socket => {
    const date = new Date();
    let year = +date.getFullYear().toString();
    let month = +date.getMonth().toString() + 1;
    month = format(month);

    let day = +date.getDate().toString();
    day = format(day);

    let hour = +date.getHours().toString();
    hour = format(hour);

    let minute = +date.getMinutes().toString();
    minute = format(minute);

    let formatedTime = `${year}-${month}-${day} ${hour}:${minute}\n`;

    socket.end(formatedTime);
});

server.listen(process.argv[2]);