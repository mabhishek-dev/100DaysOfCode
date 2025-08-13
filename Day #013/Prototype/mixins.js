//If we try implementing inheritance over 1 level then it will complicated so handle that we can actually implement mixins/composition.
//Like if object has walk,sleep,eat and swim and we cretae 2 objects which inherit them like person and fish, the fish cant walk so we ma have to create a 2nd level where the 1st level has only common properties and secomd level has specific properties, but when we are dealing lets say 100 different type of objects then its problametic so we use mixins, where we can define diffrent functions and then inherit only those functions to the object.

//assign allows us to create an empty or an object with some properties and also allows us to assign properties to the object.

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

const person=Object.assign({},canWalk,canSwim,canEat);
person.walk()
person.swim();
person.eat();


const fish=Object.assign({},canSwim,canEat);
fish.swim();
fish.eat();

//fish.walk() -->error that fish does not have a walk property
// let p1=new person();
// console.log(p1); -->error that person is not constructor, to overcome this:
function Person(){}
Object.assign(Person.prototype,canWalk,canSwim,canEat);
let p1=new Person();
p1.walk(); //can create multiple objects