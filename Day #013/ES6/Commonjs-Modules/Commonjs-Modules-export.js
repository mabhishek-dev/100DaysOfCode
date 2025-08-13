const _radius= new WeakMap(); //so by creating a weak map your key's refernce will be collected by garbage collector hence wont be accessed my anyone

class Circle{
    constructor(radius){
        _radius.set(this,radius);
    }

    draw(){
        console.log(_radius.get(this));
    }
}

module.exports=Circle;  //we export the Circle object from here and we can see that _radius is not going to be accessed my the importing file by this we encampsulate the data.