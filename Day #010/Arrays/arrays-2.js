//concat array
let arr1=[10];
let arr2=[20];
let arr3=arr1.concat(arr2);
console.log(arr3);


//print partial string or store partial string or if wanted full string, we can mention only staring index and no last index for everything after start index or we can mention nothing to get exact copy of the arr or mention first and last index. --> only works with primitive while wrt objects the reference is copied
console.log(arr1.slice(1,3));

//another of combining using spread operator
 let arr4=[...arr1,...arr2,...arr3];
 console.log(arr4);

 //join method
 let join1=[1,2,3].join('*');
 console.log(join1);
 //string method:split 
 console.log(join1.split('*'));

 //to lower case  and uppercase
 let str="Temp";
 console.log(str.toLowerCase());
 console.log(str.toUpperCase());

 //sort array
 let arr5=[6,7,1,5,8,9];
 console.log(arr5.sort());

 //reverse array
 console.log(arr5.reverse())

 //wrt objects we can use a function to sort
 let objectSort=[
    {name:"Beta"},
    {name:"Alpha"}
 ];
 objectSort.sort((a,b)=>{
     if(a.name>b.name) return 1;
     if(a.name<b.name) return -1;
    return 0;
 })

 console.log(objectSort); //sorted but its case sensitive so we can use toUpperCase or toLowerCase and then sort


 //every: method to go through array and it return boolean value, we can use it to check if all of it positive or negative
 let boolVal=arr5.every(val=>val>=0); //all are positive
 console.log(boolVal);

 //some: method see/checks if atleast one falls under the condition

boolVal=arr5.some(val=>val<0);
console.log(boolVal);

//filter: method to filter an array
console.log(arr5.filter(val=>val>5));//a new array following the condition is returned

//map:this allows mapping each element to something
let arr6=arr5.map(val=>`#${val}#`);
console.log(arr6); // ['#9#', '#8#', '#7#', '#6#', '#5#', '#1#']

//same with objects:
let objMap= arr6.map(val=>({value: val})); //we put in a () because {} will be considered as function block
console.log(objMap);

//reduce method: if we want to get a sum we can loop it or use the reduce method

const sum=arr5.reduce((accumulator,currentCalue)=> accumulator+currentCalue,0);
console.log(sum);

//to check if any element is present
console.log(arr5.includes(10));