var bigfishObj = function(){
    this.x=0;
    this.y=0;
    this.bigEye = new Image();
    this.bigBody = new Image();
    this.bigTail = new Image();
    this.angle = 0;
    this.bigfishTime=0;
    this.bigfishTailCount=0;
    this.bigTailimgArr = [];
}
bigfishObj.prototype.init = function()
{
    this.x = canWidth *0.5;
    this.y = canHeight*0.3;
    this.bigEye.src = "./src/bigEye0.png";
    this.bigBody.src = "./src/bigSwim0.png";
    this.bigTail.src = "./src/bigTail0.png";

    for(var i=0;i<8;i++)
    {
        this.bigTailimgArr[i] = new Image();
        this.bigTailimgArr[i].src = "./src/bigTail"+i+".png";
    }
}
bigfishObj.prototype.draw = function()
{
    this.bigfishTime += deltaTime;
    if (this.bigfishTime > 50) 
    {
        this.bigfishTailCount = (this.bigfishTailCount + 1) % 8;
        this.bigfishTime %= 50;
        this.bigTail = this.bigTailimgArr[this.bigfishTailCount];
    }
    // this.bigTail.src = "./src/bigTail"+this.imgindex+".png";
    // if (this.imgindex>=7) 
    // {this.imgindex = 0}
    // else
    // {this.imgindex++;}

    this.x = lerpDistance(mx,this.x,0.99);
    this.y = lerpDistance(my,this.y,0.99);

    var deltaX =mx - this.x;
    var deltaY =my - this.y;
    var beta =Math.atan2(deltaY,deltaX)+Math.PI

    this.angle = lerpAngle(beta,this.angle,0.9);
    
    ctx1.save();
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);
    ctx1.drawImage(this.bigEye,-this.bigEye.width*0.5,-this.bigEye.height*0.5);
    ctx1.drawImage(this.bigBody,-this.bigBody.width*0.5,-this.bigBody.height*0.5);
    ctx1.drawImage(this.bigTail,-this.bigTail.width*0.5+30,-this.bigTail.height*0.5);
    ctx1.restore();
}