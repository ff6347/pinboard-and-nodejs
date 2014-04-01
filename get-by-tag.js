// see https://pinboard.in/api/
//
//
// https://github.com/frozzare/node-pinboard
//
var fs = require('fs');
var pinboard = require('pinboard');
var auth = require('./auth.js');
pinboard.config(auth.login);


pinboard.get('posts/all', function (data) {
    for (var i = 0; i < data.length; i++) {
        var tagarr = data[i].tags.split(" ");
        for (var j = 0; j < tagarr.length; j++) {
            if (tagarr[j].localeCompare('D3') === 0) {
                console.log(data[i]);
                var resstring = "- [" + data[i].description + "](" + data[i].href + ")  \n";
                fs.appendFile('result.md', resstring, function (err) {});
            }
        }
        // console.log(data); // => xml or json output of all your bookmarks
    }
});