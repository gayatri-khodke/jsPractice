// Sum of Array Elements: Write a function to calculate the sum of all elements in an array of integers.
// let arr=[1,2,3,4];
// let k=arr.reduce((a,current)=>{
//    return a+current;
// })
// console.log(`sum of arry element :- ${k}`);

//  Average of Array Elements: Write a function to calculate the average of all elements in an array of integers.
// let brr=[1,2,3,4,5];
// let total=brr.reduce((a,current)=>{
//     return a+current;
//  })
//  let average=parseInt(total/brr.length);
//  console.log(`average of array element:- ${average}`);



//  Find Maximum Element: Write a function to find the maximum element in an array of integers.
let crr=[10,90,67,37];
// function findMax(ele){
//     let max=0;
//     for(let i=0;i<ele.length-1;i++){
//         if(ele[i]>max){
//             max=ele[i];
//         }
//     }
//     return max;
// }
// console.log(`max element is:-${findMax(crr)}`);

// Find Minimum Element: Write a function to find the minimum element in an array of integers.
// function minNum(arr){
//     let min=arr[0];
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]<min){
//             min=arr[i];
//         }
//     }
//     return min;
// }
// console.log(`min Number :- ${minNum(crr)}`);

//  Array Search: Write a function to search for a given element in an array and return its index if found, otherwise return -1.
// let myarr=[44,5,75,2,3];
// function searchElement(arr){
//     let findelement=arr.findIndex((e,i)=>{
//          return e<5;
//     });
//     return findelement;
// }
// console.log(`return index of element if found:- ${searchElement(myarr)}`);



//  Array Filtering: Write a function to filter out even numbers from an array of integers and return a new array containing only the even numbers.

// let A=[1,2,3,4,5,6,7,8,9,10];
// function sortArr(arr){
//     let newArr=arr.filter((e,i)=>{
//       return  e%2==0;
//     });
//     return newArr;
// }
// console.log(`filter out arr element divisible by 2 :- ${sortArr(A)}`);


// Array Sorting: Write a function to sort an array of integers in non-decreasing order (ascending).
// let a=[20,30,1,40,56,100];
// function sortArr(arr){
//     return arr.sort();
// }
// console.log(`assending order of array:- ${sortArr(a)}`);

//Descending order
// let a = [2, 8, 7, 2, 6];
// let newArr = [];
// function sortArr(arr) {
//     let arrlen = arr.length;
//     for (let i = 0; i < arrlen; i++) {
//         let minindex = arr.findIndex((e) => e === Math.max(...arr));
//         newArr.push(arr[minindex]);
//         arr.splice(minindex, 1);
//     }
//     return newArr;
// }
// console.log(`ascending order of array: ${sortArr(a)}`);


// Assending order
// let myarr=[773,2,6,263,800];
// let newArry = [];
// function sortArry(arr) {
//     let arrlen = arr.length;
//     for (let i = 0; i < arrlen; i++) {
//         let maxindex = arr.findIndex((e) => e === Math.max(...arr));
//         newArry.unshift(arr[maxindex]);
//         arr.splice(maxindex, 1);
//     }
//     return newArry;
// }
// console.log(`descending  order of array: ${sortArry(myarr)}`);



// using selection sort
// function sortarr(arr){
//     for(let i=0;i<arr.length;i++){
//         let minIndex=i;
//        for(let j=i;j<arr.length;j++){
//           if(arr[j]<arr[minIndex]){
//             minIndex=j;
//           }
//        }
//        temp=arr[i];
//        arr[i]=arr[minIndex];
//        arr[minIndex]=temp;
//     }
//     return arr;
// }
// console.log(sortarr([2,5,8,1,4]));


// You are given two arrays arr1 and arr2, concatenate arr1 and arr2, and return the resulting array.
let arr1=[1, 3]
let arr2=[2, 5]
// // [1, 3, 2, 5]
// let k=[...arr1,...arr2];
// console.log(k.flat());
// console.log(arr1.concate(arr2));


// Convert array to string sepearted by - (hyphen) and return the string.
let arr= [1, 2, 3]
// '1-2-3'
let k=arr.join("-");
console.log(`'${k}'`);