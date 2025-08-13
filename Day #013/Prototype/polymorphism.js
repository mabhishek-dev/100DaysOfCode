function Shape(){}

Shape.prototype.print=function(){
    console.log(this.name);
}
function extend(Child,Parent){
    Child.prototype=Object.create(Parent.prototype);
    Child.prototype.constructor = Child;
}
function Circle(name){
    this.name=name;
}

extend(Circle,Shape);
let c=new Circle("circle");
c.print(); //Inheritated from shape
Circle.prototype.print=function(){
    console.log("Polymorphism-Circle:",this.name); 
}
c.print(); //printed frrom custom function

function Square(name){
    this.name=name;
}

extend(Square,Shape);
let d=new Square("square");
d.print(); //Inheritated from shape
Square.prototype.print=function(){
    console.log("Polymorphism-Square"); 
}
d.print(); //printed frrom custom function

// Note:We can see that for Shape,Circle and Square there exists a print function and each of them can be accessed dhis is because of polymorphism, where the same function or content has different meaning.

let shapes=[
    new Circle("new circle"),
    new Square()
];

for(let shape of shapes){
    shape.print();
}
