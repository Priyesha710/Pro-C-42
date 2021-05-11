class Umbrella{
    constructor(xInput,yInput){
    var options = {
        isStatic: true 
    }
    this.body = Bodies.circle(xInput,yInput,80,options);    
    World.add(userWorld, this.body);
    }

}