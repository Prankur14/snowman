class Snow {
    constructor(x, y) {
        this.x = x;
        this.y = y;
        this.body = bodies.circle(x, y, 50, options);
        var options = {
            restitution: 0.5,
        }
        this.snowImage = loadImage('snow4.webp');
        World.add(world ,this.body);
    }
    display(){
        imageMode(CENTER)
        image(this.snowImage, this.x, this.y, 50, 50);
        if(this.y>height){
            Matter.Body.setPosition(this.body, {x: random(0, 800), y: random(-400, 0)})
        }
        this.x = this.x+(random(-5, 5))

this.y +=1

    }



}