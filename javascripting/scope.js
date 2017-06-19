var a = 1, b = 2, c = 3;

(function firstFunction() {
    var b = 5, c = 6;

    (function secondFunction() {
        var b = 8;

        console.log("a: " + a + ", b: " + b + ", c: " + c); //1,8,6

        (function thirdFunction() {
            var a = 7, c = 9;
            console.log('ao');

            (function fourthFunction() {
                var a = 1, c = 8;

            })();
        })();
    })();
})();