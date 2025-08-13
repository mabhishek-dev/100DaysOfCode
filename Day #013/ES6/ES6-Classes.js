function Circle(radius){
    this.radius=radius;
    this.draw=function(){
        console.log(this.radius);
    }
}
let c1=new Circle(10);
c1.draw();

// The above code is valid but in ES6 we brought in a new wayx which does the same stuff

class circle{
    constructor(radius){
        this.radius=radius;
        this.draw=function(){console.log(this.radius)}; //this is a method does not end up under prototype 
    }

    print(){
        console.log("Prints: "+this.radius);
    }
}

let c2=new Circle(20);
c2.draw();
c2.print;