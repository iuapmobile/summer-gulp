"use strict";

var summerready = function summerready() {
    // here is your code...
    var top = $summer.offset($summer.byId('header')).h;
    var bottom = $summer.offset($summer.byId("footer")).h;
    alert(1 + "ab");
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
    var cat = 'ken';
    var dog = 'lili';
    var zoo = { cat: cat, dog: dog };
    console.log(zoo);

    summer.openCamera({
        callback: function callback(args) {
            console.log(args.imgPath);
        }
    });
    summer.openFrame({
        name: 'main',
        url: 'html/main.html',
        bounces: true,
        position: {
            top: top,
            bottom: bottom,
            left: 0,
            right: 0
        }
    });
};
//fff