//adding at end
let arr=[10,20];
arr.push(30);
console.log(arr);

//adding at start
arr.unshift(0);
console.log(arr);

//add at end using splice
arr.splice(4,0,40,50,10);
console.log(arr);

//indexOf
console.log(arr.indexOf(10));
console.log(arr.indexOf(1)); //-1
console.log(arr.lastIndexOf(10));
console.log(arr.includes(10)); //true


//includes --> for primitive types
console.log(arr.includes(10));
console.log(arr.includes(10000));

//removing last element
arr.pop()
console.log(arr);

//remove start element
arr.shift();
console.log(arr);

//remove at specific index
arr.splice(0,2);
console.log(arr);
//print partial string or store partial string or if wanted full string
console.log(arr.slice(1,3));



//how to find if reference types?
const obj=[
    {name:"Alpha",fun(){this.name}},
    {name:"Beta",fun(){this.name}}
]

console.log(obj.includes({name:"Alpha",fun(){this.name}})); //false as the object here is diffrent
//correct way: we use find:
console.log(obj.find((obj)=>{return obj.name==="Alpha"})); 
//this will return the first matching the element
//or if we want index: also as its 1 lined we can write:
const found=obj.findIndex((obj)=>{return obj.name==="Alpha"});
console.log(obj.findIndex(obj => obj.name === "Alpha"));