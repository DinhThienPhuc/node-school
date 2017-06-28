function foo() {
    var bar;
    quux = 3;
    function zip() {
        var quux;
        bar = true;
    }
    return zip;
}