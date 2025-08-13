const _radius= new WeakMap(); //so by creating a weak map your key's refernce will be collected by garbage collector hence wont be accessed my anyone

export class Circle{ //we export it, this is by using ES6 modules
    constructor(radius){
        _radius.set(this,radius);
    }

    draw(){
        console.log(_radius.get(this));
    }
}
