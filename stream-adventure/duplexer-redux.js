'use strict'
var duplex = require('duplexer')
var through = require('through')

module.exports = function (counter) {
    var counts = {}
    return duplex(through(record_count, set_count), counter)

    function record_count(obj) {
        var country = obj.country
        var count = counts[country] || 0
        counts[country] = count + 1
    }

    function set_count() {
        counter.setCounts(counts)
        counts = {}
    }
}