//Fcatory Function ->camelCase

function factoryFun(name){
    return name;
}

const factoryFunction=factoryFun("Alpha");
console.log(factoryFunction);


//Constructor Function -->PascalCase

function ConstructorFun(name){
    this.name=name;
}

const constructorFunction =new ConstructorFun("Alpha");
console.log(constructorFunction.name);