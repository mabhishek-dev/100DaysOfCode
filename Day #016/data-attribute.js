//Syntax for Data Attribute:
//-is just an HTML attribute
//-have to start with "data-"
//-then give it a name
//ex: data-product-name="${product.name}" (also it follows kebab case)

const obj=[{
    name:1,
    title:'first'
},{
    name:2,
    title:'second'
}];

objHTML='';

obj.forEach(o=>{
   objHTML+= `<button class="data-button js-data-button"  data-obj-name="${o.name}">Click Me</button>`
})

//Note that data- is not part of class and all its just as a separate attribute

document.querySelector('.data-attribute').innerHTML=objHTML;

document.querySelectorAll('.js-data-button').forEach(button=>{
    button.addEventListener('click',()=>{
        console.log(button.dataset) //so the dataset return all the data attributes that are attached to the element i.e here obj is connected

        console.log(button.dataset.objName);  // see the data-obj-name we set is not stored in dataset as obj-name -> objName ,see it converted kebeb-case to camelCase
})
    }
);