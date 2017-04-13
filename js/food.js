var foodObj = function()
{
    this.liveflag = []
    this.x = []
    this.y = []
    this.upspeed=[]
    this.area=[]
    this.foodimg=[]
}
foodObj.prototype.num = 30;
foodObj.prototype.bluefood = new Image();
foodObj.prototype.orangefood = new Image();
foodObj.prototype.init = function()
{
    for(var i=0;i<this.num;i++)
    {
        this.liveflag[i] = true;
        this.area[i]=0;
        this.born(i);
    }
    this.bluefood.src ="./src/blue.png";
    this.orangefood.src="./src/fruit.png"
    
}

foodObj.prototype.draw = function()
{
    for(var i=0;i<this.num;i++)
    {
        if(this.liveflag[i])
        {
            if(this.area[i]<10){
                this.area[i] +=this.upspeed[i]*deltaTime*0.8;
            }
            else
            {
                this.y[i] -= this.upspeed[i];
            }
            ctx2.drawImage(this.foodimg[i],this.x[i] - this.foodimg[i].width/2,this.y[i],this.area[i],this.area[i]);
            if(this.y[i]<0){
                this.area[i]=0;
                this.born(i)}
        }
    }
}
foodObj.prototype.born = function(i)
{
    var aneId = Math.floor(Math.random()*aneobj.num);
    this.x[i] = aneobj.x[aneId];
    this.y[i] = canHeight-aneobj.len[i]+20;
    this.upspeed[i] = Math.random()+0.005;
    this.foodimg[i] = Math.random()>0.3?this.bluefood:this.orangefood;
    this.liveflag[i] = true;
}