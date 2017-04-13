var babyObj = function(){
    this.x=0;
    this.y=0;
    this.bigEye = new Image();
    this.bigBody = new Image();
    this.bigTail = new Image();
    this.angle = 0;
    this.imgindex = 0;
}
babyObj.prototype.init = function()
{
    this.x = canWidth *0.5 -50;
    this.y = canHeight*0.3 - 50;
    this.bigEye.src = "./src/babyEye0.png";
    this.bigBody.src = "./src/babyFade0.png";
    this.bigTail.src = "./src/babyTail0.png";
}
babyObj.prototype.draw = function()
{
    this.x = lerpDistance(bigfish.x - 50,this.x,0.99);
    this.y = lerpDistance(bigfish.y - 50,this.y,0.99);

    var deltaX =bigfish.x - this.x;
    var deltaY =bigfish.y - this.y;
    var beta =Math.atan2(deltaY,deltaX)+Math.PI

    this.angle = lerpAngle(beta,this.angle,0.9);
    
    ctx1.save();
    ctx1.translate(this.x,this.y);
    ctx1.rotate(this.angle);
    ctx1.drawImage(this.bigEye,-this.bigEye.width*0.5,-this.bigEye.height*0.5);
    ctx1.drawImage(this.bigBody,-this.bigBody.width*0.5,-this.bigBody.height*0.5);
    ctx1.drawImage(this.bigTail,-this.bigTail.width*0.5+25,-this.bigTail.height*0.5);
    ctx1.restore();
}