function Shape(){}

Shape.prototype.print=function(){
    console.log(this.name);
}
Shape.prototype.getSize=function(){
    console.log(this.size);
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
c.print();

function Square(name,size){
    this.name=name;
    this.size=size;
}

extend(Square,Shape);
Shape.prototype.print=function(){
    console.log("Method Overring"); //Method overiding and note it has been defined after it inherited properties of shape
}
let d=new Square("square",10);
d.print();
d.getSize();


//Same code as inheritance.js but we use extend function to reuse the code.
