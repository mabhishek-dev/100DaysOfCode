//in ES6 we dont need to manually make an object inherit properties , rather we can use the extend keyword and inherit the properties.

class parent{
    constructor(name){this.name=name;}
    print(){
        console.log(this.name);
    }
}

class child1 extends parent{
    constructor(name){
        //this.name=name; //not valid
        super();//we need to first call the super class before we initialize this object's constructor
        //super(); we can call like this too but the super class this.name will be undefined
        this.name=name;
    }
}

let c1=new child1("Alpha");
c1.print();