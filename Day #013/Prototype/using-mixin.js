function mixin(target,...sources){ //rest
    Object.assign(target,...sources); //spread
}

const canWalk={
    walk:function(){
        console.log("Can walk");
    }
}
const canEat={
    eat:function(){
        console.log("Can eat");
    }
}
const canSwim={
    swim:function(){
        console.log("Can swim");
    }
}

const person=mixin({},canWalk,canSwim,canEat);
person.walk()
person.swim();
person.eat();


const fish=mixin({},canSwim,canEat);
fish.swim();
fish.eat();

//fish.walk() -->error that fish does not have a walk property
// let p1=new person();
// console.log(p1); -->error that person is not constructor, to overcome this:
function Person(){}
mixin(Person.prototype,canWalk,canSwim,canEat);
let p1=new Person();
p1.walk(); //can create multiple objects