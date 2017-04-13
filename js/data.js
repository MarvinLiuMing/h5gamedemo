var dataObj = function()
{
	this.score = 0;
}
dataObj.prototype.reset = function()
{

}
dataObj.prototype.draw=function()
{
	ctx1.fillStyle = "White";
	ctx1.font = "20px Verdana";
	ctx1.textAlign = "center";
	ctx1.fillText("socre: "+this.score,canWidth/2,80);
}
dataObj.prototype.eatfood = function()
{
	this.score += 100;
}