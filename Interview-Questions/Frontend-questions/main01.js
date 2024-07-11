// Question 1:

// let a = { name: "JP", total: 0}
// let b = a;
// b.total = 90;

// console.log(a);
// console.log(b);


//Output---
//{ name: "JP", total: 90 }
// { name: "JP", total: 90 }

//Why This Happens------------->
 
// In JavaScript, objects are assigned by reference. 
// When you assign a to b, you are copying the reference, 
// not the actual object. Therefore, any changes made 
// through b will also affect a because they refer to the 
// same object in memory.

/*-----------------------------------------------------------*/

// Question 2:

// let a = { name: "JP", total: 0}
// let b = {...a};
// b.total = 90;

// console.log(a);
// console.log(b);

//Output---
//{ name: "JP", total: 0 }
// { name: "JP", total: 90 }


//Why This Happens
// By using the spread operator { ...a }, you create a 
// shallow copy of the object a. This means b is a new 
// object that has the same properties as a initially 
// but is a distinct object in memory. Therefore, changes 
// to b do not affect a, and vice versa.

/*-----------------------------------------------------------*/

// // Question 3:

// let a = { name: "JP", total: 0, balls: {type: "leather"}}
// let b = {...a};
// b.balls.type = "tennis";

// console.log(a);
// console.log(b);

//Output:-
// { name: "JP", total: 0, balls: { type: "tennis" } }
// { name: "JP", total: 0, balls: { type: "tennis" } }


// Why This Happens

// The spread operator ({ ...a }) creates a shallow copy 
// of the object a. This means that the top-level properties 
// are copied, but nested objects are still referenced. 
// Therefore, both a and b reference the same balls object. 
// When you modify b.balls.type, it affects both a and b 
// because balls is the same object in memory.


// How to Create a Deep Copy

// If you want to create a completely independent copy of 
// the object, including all nested objects, you need to 
// perform a deep copy. One way to do this is using JSON.parse 
// and JSON.stringify:

// let a = { name: "Anu", total: 0, balls: { type: "leather" } };
// let b = JSON.parse(JSON.stringify(a));
// b.balls.type = "tennis";

// console.log(a); // { name: "Anu", total: 0, balls: { type: "leather" } }
// console.log(b); // { name: "Anu", total: 0, balls: { type: "tennis" } }

// Now, a and b are completely independent objects, including their nested objects.


/*-----------------------------------------------------------*/

// // Question 4: Implement a deepCopy function

// let a = { name: "JP", total: 0, balls: {type: "leather"}}
// let b = deepCopy(a);
// b.balls.type = "tennis";

// //Implementation
// function deepCopy(a){
//     let res = JSON.parse(JSON.stringify(a));
//     return res;
// }

// console.log(a);
// console.log(b);

/*-----------------------------------------------------------*/

// //Question 5: 

// var myObj = {
//     foo: "bar",
//     func: function() {
//         var self = this;
//         console.log("Outer Func: this.foo = " + this.foo);
//         console.log("Inter Func: self.foo = " + self.foo);
//         (
//             function() {
//                 console.log("Outer Func: this.foo = " + this.foo);
//                 console.log("Inter Func: self.foo = " + self.foo);
//             }
//         ());
//     }
// }
// myObj.func();


/*-----------------------------------------------------------*/

//Question 6: Reverse the string
// let name = "Aishwarya";

//Implementation--->

//with method
// function reverseString(str){
//     let reverse = str.split('').reverse().join('');
//     console.log(reverse);
// }

// reverseString(name);

//without method
// function reverseString(str) {
//     let reversed = '';  // Initialize an empty string to hold the reversed string
//     for (let i = str.length - 1; i >= 0; i--) {  // Loop from the last character to the first
//         reversed += str[i];  // Add each character to the reversed string
//     }
//     return reversed;  
// }

// console.log(reverseString(name));  


/*-----------------------------------------------------------*/

function createCounter() {
    let count = 0;

    return function(){
        count++;
        return count;
    };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1());
console.log(counter1());
console.log(counter2());


