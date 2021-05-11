class Drop{
    constructor(xInput, yInput){
        var options = {
            friction : 0.1
        }
        this.body = Bodies.circle(xInput,yInput,5,options);
        World.add(userWorld,this.body);
        
    }
    display(){
       var x = this.body.position.x;
       var y = this.body.position.y;
       fill("blue");
        ellipse(x,y,10,10);
    }
    update(){
        if(this.body.position.y> 800){
            Matter.Body.setPosition(this.body,{x:random(0,800), y: random(0,5)});
        }
    }
}