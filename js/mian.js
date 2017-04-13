var can1;
var can2;

var ctx1;
var ctx2;

var deltaTime;
var lasttime =0 ; 

var canWidth;
var canHeight;

var backgroundimg = new Image();

var aneobj;
var food;
var bigfish;
var baby;

var mx;
var my;
var dataobj;

var oEvent
var oLeft
var oTop

function game()
{
    init()
    gameloop();
}

function init()
{
    can1=document.getElementById("canvas1");
    ctx1=can1.getContext('2d');
    can2=document.getElementById("canvas2");
    ctx2=can2.getContext('2d');

    backgroundimg.src = "./src/background.jpg"
    canWidth=can1.width;
    canHeight=can1.height;

    aneobj= new aneObj();
    aneobj.init();

    food = new foodObj();
    food.init();

    bigfish = new bigfishObj();
    bigfish.init();

    mx=canWidth/2;
    my=canHeight/2;

    baby = new babyObj();
    baby.init();

    can1.addEventListener('mousemove',onMouseMove,false)
    can1.addEventListener('click',MouseClick,false)

    for(var i=0;i<8;i++){
        bigfish.bigTail.src = "./src/bigTail"+i+".png";
    }

    dataobj = new dataObj();

}

function gameloop()
{
    window.requestAnimFrame(gameloop);
    var nowtime = Date.now();
    drawbackground();
    deltaTime=nowtime-lasttime;
    lasttime = nowtime;
    deltaTime = deltaTime>50?50:deltaTime;
    //console.log(deltaTime);
    aneobj.draw();

    food.draw();

    ctx1.clearRect(0,0,canWidth,canHeight);
    bigfish.draw();
    firshFoodCollision();

    baby.draw();

    dataobj.draw();

}

function onMouseMove(e){
    if(e.offset || e.layerX)
    {
        mx= e.offSetX == undefined?e.layerX:e.offsetX;
        my= e.offSetY == undefined?e.layerY:e.offsetY;
    }
}

function MouseClick(ev){
    oEvent=ev||event;
    oLeft=oEvent.clientX
    oTop=oEvent.clientY
}

