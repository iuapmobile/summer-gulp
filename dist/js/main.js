"use strict";

var summerready = function summerready() {
    // here is your code...
    /*
    summer.openCamera({
        callback: (args)=>{
            console.log(args.imgPath)
    alert(args.imgPath);
        }
    })
    */
};

function showPhoto(path) {
    //alert(path);
    $summer.byId("myphoto").src = path;
}