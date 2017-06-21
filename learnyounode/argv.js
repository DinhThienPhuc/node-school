var sum = 0;
for (let i = 2, length = process.argv.length; i < length; i++) {
    sum += +process.argv[i];
}

console.log(sum);