let person={name:"Alpha"};

let objPrototype=Object.getPrototypeOf(person);
console.log(person);

// In JavaScript, most objects have a prototype.
// A prototype is also an object, and it can have its own prototype, forming a chain.
// At the top of this chain is Object.prototype, which has no prototype (its prototype is null).
// Built-in objects like String and Array have their own prototypes with shared properties and methods.
// For example, the 'length' property on strings and arrays is defined in their respective prototypes.
// That's why we can do things like: "Hello".length or [1, 2, 3].length.

//when we lets say print all the properties of an obj it usually doesnt print these properties because
//the enumerable property is set false.
//Also sometimes we can not change the property value becuae writable is set false, but both by defult
//are set true unless changed.

Object.defineProperty(person,'name',{
    writable: true,
    enumerable:true
});

console.log(Object.keys(person));//prints

Object.defineProperty(person,'name',{
    writable: true,
    enumerable:false
});

console.log(Object.keys(person));//does not print because enumerable set to false

Object.defineProperty(person,'name',{
    writable: false,
    enumerable:true
});

person.name="Beta"

console.log(Object.keys(person));//Name not chnaged even after set to Beta

//configurable->allows us to set if object can be condigured or not

Object.defineProperty(person,'name',{
    writable: true,
    enumerable:true,
    configurable:false
});
delete person.name; //does not delete as configurable is set to false;
console.log(Object.keys(person));