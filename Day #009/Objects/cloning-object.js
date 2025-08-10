const obj={
    name: 'Alpha',
    fun(){
        console.log(this.name);
    }
};
obj.fun();


// 1st way using for....of or for....in -->both of these do shallow copy and not deep copy so the fun() inside is copied as reference and not cloned also for...in works with objects while for....of works with arrays
const obj1={};
for(let key in obj) obj1[key]=obj[key];

const obj2={};
for(let key of Object.keys(obj)) obj2[key]=obj[key];
//or
const obj3={};
for(const [key,value] of Object.entries(obj)) obj3[key]=value;

obj1.fun();
obj2.fun();
obj3.fun();



//2nd way--> This proper cloning and here we can also add custom key:value pairs too also this does shallow clone only

const obj4= Object.assign({},obj);
obj4.fun();
//by adding custom k:v
const obj5= Object.assign({name2:'Beta',fun2(){console.log(this.name2)}},obj);
obj5.fun();
obj5.fun2();



//3rd way--> Spread operator --> shallow copy
const obj6= {...obj};
obj6.fun();