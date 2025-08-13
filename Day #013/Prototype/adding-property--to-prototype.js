function Shape(length){
    this.length=length;
}
Shape.prototype.draw=function(){ //arrow funstion wont work as it it will point to this i.e window not where its called also it does not matter where the prototype is defined as it based on refernce ,like here when the draw property is called it will be applicable
    console.log(this.length);
}

const shape1=new Shape(10);
shape1.draw();