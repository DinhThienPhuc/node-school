const func = require('./handle-filter');
const directory = process.argv[2];
const extension = process.argv[3];

const printResult = (err, data) => {
    if (err)
        throw new Error(err);
    data.map(file => {
        console.log(file);
    });
}

func(directory, extension, printResult);