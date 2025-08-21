import formatCurrency from "./money.js";

//A group of test cases is called test suite
console.log("test suite: formatcurrency"); //here its formatcurrency in future if we want to calculate some other test cases like calculating tax then it could be grouped another test suite as calculateTax

console.log("Coverts Paisa to Rupees:");

//Basic, another could be 2067 etc
if (formatCurrency(1060) === "10.60") console.log("passed");
else console.log("failed");

console.log("Works with 0:");

//Edge case
if (formatCurrency(0) === "0.00") console.log("passed");
else console.log("failed");

console.log("Rounds up to the nearest Paisa:");

//Edge case
if (formatCurrency(2000.5) === "20.01") console.log("passed");
else console.log("failed");

console.log("Rounds down to the nearest Paisa:");

//Edge case
if (formatCurrency(2000.4) === "20.00") console.log("passed");
else console.log("failed");

/*
When we do manual testing it becomes hard because:
1.Hard to test every situation. -->so the above test cases give as passed 
2.Hard to re-test. --> As code will or may change -->Lets say we removed the round method then if we had to retest the code it'll take a lot of time but because of this everything is automated.


So automated testing is nothing but testing code with code
Automated Tests=using code to test code
*/

/*
These situations are termed as test cases, and there are mainly 2 types:
1.Basic test cases = tests if the code is working
2.Edge cases=test with values that are tricky
*/
