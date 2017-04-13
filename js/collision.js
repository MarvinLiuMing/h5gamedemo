function firshFoodCollision()
{
    for(var i=0;i<food.num;i++)
    {
        if (food.liveflag[i]&&distance(food.x[i],food.y[i],bigfish.x,bigfish.y,30)) 
        {
            dataobj.eatfood();
            food.liveflag[i]=false;
            food.born(i);
        }
    }
}