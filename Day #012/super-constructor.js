function Shape(size){
    this.size=size;
}

Shape.prototype.print=function(){
    console.log(this.name);
    console.log(this.size);
}

function Circle(name,size){
    Shape.call(this,size);
    this.name=name;
}

Circle.prototype=Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
let c=new Circle("circle",10);
c.print();


//here we are implementing super constructor by using call method on shape, if we directly create an object of shape and pass the color this will add the property directly to the window and no to 
// this obj i.e present circle objecct.