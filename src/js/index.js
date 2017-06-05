var summerready = function(){
    // here is your code...
    var top = $summer.offset($summer.byId('header')).h;
    var bottom = $summer.offset($summer.byId("footer")).h;
    //alert(1+"ab");
    for (let i = 0; i < 5; i++) {
      console.log(i);
    }
    let cat = 'ken'
    let dog = 'lili'
    let zoo = {cat, dog}
    console.log(zoo)

    summer.openFrame({
        id: 'main',
        url: 'html/main.html',
        bounces: true,
        position: {
            top: top,
            bottom: bottom,
            left: 0,
            right: 0
        }
    });
}

function opencamera(){ 
    summer.openCamera({
        callback: (args)=>{
            console.log(args.imgPath)
            //alert(args.imgPath);
            summer.execScript({
                frameId:'main',
                script:"showPhoto('"+args.imgPath+"')"
            })
        }
    })
}
