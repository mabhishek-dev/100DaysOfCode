//DayJS is an external library, so it actually makes our job easy, by allowing us to use pre-written code

const today = dayjs();
const tommorow = today.add(1, "days");

console.log(today);
console.log(tommorow);

//printing directly will give all information but if we want to format it to print, the only things we need we can use format

const todayFormatted = today.format("dddd, MMMM D"); // we can comma space as we want but the terms dddd or MMMM or D can not be random, we can check out there documentation for checking out all the different methods and this thats offered there
console.log(todayFormatted); //Sunday, August 17 --> this will change based on when this code is executed

const tommorowFormatted = tommorow.format("dddd, MMMM D");
console.log(tommorowFormatted); //Monday, August 18 --> this will change based on when this code is executed

//DayJs without ESM: https://unpkg.com/dayjs@1.11.10/dayjs.min.js so this must me imported at the html file where the src of script is set to link
//But if we want to import via ES modules (ESM) then we can import from: https://unpkg.com/dayjs@1.11.10/esm/index.js as import dayjs from 'https://unpkg.com/dayjs@1.11.10/esm/index.js'; notice that we havents used {} with dayjs when import from the internet i.e an external library

//this is called default export where if a person just wants to export a single thing such as obj or function etc, then we can export as default export where we can have 1 single default export for a file and it needs to be as: export default default_function_obj_something; by doing this we can import without the {}
