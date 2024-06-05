// let arr = [1, 2, 3];

// let result = arr.map((arrEle) => {
//     return arrEle * 2;
// });

// console.log(result);

// const numbers = [1, 2, 3, 4, 5];
// let ans = numbers.forEach((num, index) => {
//   console.log(`Index: ${index}, Value: ${num}`);
// });
// console.log(ans);
// console.log(numbers);


// const numbers = [1, 2, 3, 4, 5];
// const doubled = numbers.map((num) => num * 2);
// console.log(doubled); // [2, 4, 6, 8, 10]
// console.log(numbers);

// var x = 1;
// function outer(){
//     console.log(x);
//     function inner(){
//         console.log(x);
//     }
//     inner();
//     var x = 2;
// }
// outer();

//-----------------Polyfils----------------------------->

// let arr = [1, 2, 3]

// Array.prototype.myMap = function (arr) {
//     let res = []
//     for(let i in arr){
//         res.push(arr[i]);
//     }
//     return arr;
// }

// let multiplyByTwo = arr.myMap((item) => {
//     console.log(item);
// });

// console.log(multiplyByTwo());

//---------------------------------------SumOfAllExceptSelf---------------------->

//Question:
// You have an array of numbers. For each element in the array, 
// create a new array where each element at index i is the sum 
// of all elements in the original array except the element at index i.


// const input = [2, 7, 11, 4, -2];
// // const output = [20, 15, 11, 18, 24];

// const sum = input.reduce((a, b) => a + b, 0);
// const output = input.map((e) => sum - e);
// console.log(output);


// the most basic way to do without map and reduce

// let arr = [2,7,11,4,-2];

// let sumArr = [];
// for(let i=0;i<arr.length;i++){
//     let sum = 0;
//     let index = i
//     let copiedArr = [...arr]; 
//     copiedArr.splice(index,1);
//     for(let i of copiedArr){
//         sum += i;
//     }
//     sumArr.push(sum);
// }

// console.log(sumArr);

// const input = [2, 7, 11, 4, -2]
// const output = [20, 15, 11, 18, 24]

// let sum = 0;
// let result = []
// let currIndex = 0
// for (let i=0; i<input.length; i++){
//     const sum = input.filter(num => {
//         if(input.indexOf(num) !== i){
//             return num
//         }
//     }).reduce((acc, curr) => {
//         acc = acc + curr;
//         return acc
//     }, 0)
//     result.push(sum)
     
// }
// console.log(result);


// let arr = [2,7,11,4,-2];
// let resArr = [...arr];
// resArr.reverse();
// let left = [0];
// let right = [0];
// let output = [];

// for(let i = 1 ; i< arr.length;i++){
// 	left[i] = left[i-1] + arr[i-1];
//   right[i] = right[i-1] + resArr[i-1];
// }

// for(let i = 0 ; i < arr.length;i++){
// 	output.push(left[i]+right[arr.length-1-i])
// }

// console.log(output)

const input = [2,7,11,4,-2];
let output = []

input.indexOf(5);

input.forEach((num,i) =>{
    let sum = 0;
    input.forEach(n => {
        if(n !== num){
            sum += n;
        }
    })
    output[i] = sum;
}); 

console.log(output)