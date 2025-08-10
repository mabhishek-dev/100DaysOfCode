//functions are hoisted but not function expressions
//function expressions can be anonymous or named

//if we dont know the num of arugents and lets say we want to perform addition then we can use the arguments method or the better way would be the rest oprtator(note: rest looks same as spread but its functionality is diffrent when used in functions as parameters)

function sumArg(){
    console.log(arguments);
    let sum= [...arguments].reduce(val=>val+=val); //here ... is spread
    console.log(sum);
}
sumArg(1,2);

function sumRest(...args){ //this is rest operatormthe reason iys called that is because we can i have other parameters before it and that will be considered here the args will only take the remaining which havent been passed as parameter
    let sum=args.reduce((a,b)=> a+b); //here a is prev ele and b is crr ele as we havent given the starting value of accumulator
    console.log(sum);
}
sumRest(1,2,3,4);

//default operator

function defaultOp(name,age=10){ //age is not passed so a default value 10 is set.Note: if any parameter is set default then all parameter after it needs to have default values
    console.log(name);
    console.log(age);
}

defaultOp("Alpha");//I havent passed the age


//getters and setters: if we want to make it dynammic like getting persons name and setting the persons name--> the key:value pair also gets updated


let getSetFun={
    firstName:"Beta",
    lastName:"Gama",
    get fullName(){
        return `${this.firstName} ${this.lastName}`;
    },
    set fullName(val){
        const splitParts= val.split(' ');
        this.firstName=splitParts[0];
        this.lastName=splitParts[1];
    }
}

console.log(getSetFun.fullName);// access properties
console.log(getSetFun.firstName);
getSetFun.fullName="Gama Delta";// change/mutate properties
console.log(getSetFun.fullName);
console.log(getSetFun.firstName);
