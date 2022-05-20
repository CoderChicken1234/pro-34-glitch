class chopper{
    constructor(x,y,w,h){
        let options={
        isStatic:true
        }
        this.body = Bodies.rectangle(x,y,w,h,options)

        this.h = h
        this.w = w
        this.image = loadImage("HALIKOPTER.png")
       
        World.add(world, this.body)
    }
    show(){ 
        var pos = this.body.position
        push()
        rectMode(CENTER)
        stroke("grey")
        fill("brown")
        image(this.image,pos.x, pos.y, this.w, this.h)
        pop()
    }
}