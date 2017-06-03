var summerready = function(){
    // here is your code...
    var top = $summer.offset($summer.byId('header')).h;
    var bottom = $summer.offset($summer.byId("footer")).h;
    alert(1+"ab");
    for (let i = 0; i < 5; i++) {
      console.log(i);
    }
    let cat = 'ken'
    let dog = 'lili'
    let zoo = {cat, dog}
    console.log(zoo)

    summer.openCamera({
        callback: (args)=>{
            console.log(args.imgPath)
        }
    })
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
}
//fff
