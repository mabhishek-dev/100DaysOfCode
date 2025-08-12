function Shape(){}

Shape.prototype.print=function(){
    console.log(this.name);
}
Shape.prototype.getSize=function(){
    console.log(this.size);
}

function Circle(name){
    this.name=name;
}

Circle.prototype=Object.create(Shape.prototype);
Circle.prototype.constructor = Circle;
let c=new Circle("circle");
c.print();

function Square(name,size){
    this.name=name;
    this.size=size;
}

Square.prototype=Object.create(Shape.prototype);
Square.prototype.constructor = Square;
let d=new Square("square",10);
d.print();
d.getSize();

// Note:Circle.prototype.constructor = Circle -->needs to be set becuse when we do: 
// Circle.prototype=Object.create(Shape.prototype); we actually inherit everyrhing including the constructor so when we try creating a new object of circle we wont be creating for circle rather for shape because: new Circle.prototype.constructor() (equivalent to)=> new Circle();