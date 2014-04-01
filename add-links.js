// see https://pinboard.in/api/
// https://github.com/maxmechanic/node-pinboard
//
   var Pinboard = require('node-pinboard');
   var auth = require('./auth.js');
   console.log(auth.api_token);
    var api_token = auth.api_token;

    var pinboard = new Pinboard(auth.api_token);

var bookmarks = [{url: 'http://www.example.com/', description: 'just testing',tags:'test',shared:'no'}];


for(var i = 0; i < bookmarks.length;i++){
    pinboard.add(bookmarks[i], function(res) {
        console.log(res);
        //{ result_code: 'done' }
    });

}

    // pinboard.get({tag: 'node-pinboard'}, function(res) {
    //     console.log(res);
    //         //date: date,
    //         //user: 'user',
    //         //posts:
    //         //[ { href: 'https://github.com/mikeal/request',
    //         //description: 'mikeal / request',
    //         //extended: '',
    //         //meta: 'meta',
    //         //hash: 'hash',
    //         //time: 'time',
    //         //shared: 'no',
    //         //toread: 'yes',
    //         //tags: 'git node-pinboard test' } ] }
    // });