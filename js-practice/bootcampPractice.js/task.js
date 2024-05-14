// function printOdd(arr){
//     for(let i=0;i<arr.length-1;i+=2){
//         console.log(arr[i]);
//     }
// };
// let arr1=[1,2,3,4,5,6,7,8,9,10];
// printOdd(arr1);


// function printEven(arr){
//     for(let i=0;i<arr.length-1;i++){
//         if(arr[i]%2===0){
//             console.log(arr[i]);
//         }
//     }
// };
// let arr2=[1,2,3,4,5,6,7,8,9,10];
// printEven(arr2);


// function printEven(arr){
//     for(let i=1;i<arr.length;i+=2){
//         console.log(arr[i]);
//     }
// };
// let arr2=[1,2,3,4,5,6,7,8,9,10];
// printEven(arr2);
    

// let arr=[1,2,3];
// console.log(String(arr)==="1,2,3");


// console.log([1,2,,]);
// console.log([1,2]+[3,4]);
// console.log([1,2,,]+[3,4]);
// console.log([1,2]+[,3,4]);
// console.log(typeof([1,2]+"3"));
// console.log([1,2]+"3");
// console.log([]+"3");     //[] it will convert into empty string and 1 will also convert into string

// console.log([7]+1+2);
// console.log(1+2+[5]);
// console.log(""=="");
// console.log([]==[]);

// let arr=[1,2,3,4,5];
// arr.push(6);
// console.log(arr.length);

// let arr=['riya','raj'];
// delete arr[1];
// console.log(arr);
// let k=arr.splice(1,1,"gayatri");
// console.log(k);
// let a=[1,2,3,4,5];
// a.splice(-1,0,10);
// console.log(a);

// 20/04/2023
// 1) reverse the array of string's element
// using inbuilt method
// let arr=["gayatri","pooja","seema","surekha"];
// let newArr=arr.map((e,i,arr)=>{
//    return e.split("").reverse().join("");
// })
// console.log(newArr);


let arr = ["gayatri", "pooja", "seema", "surekha"];
let sarr = [];

for (let i = 0; i < arr.length; i++) {
    let myarr = ""; 
    for (let j = arr[i].length - 1; j >= 0; j--) { 
        myarr = myarr + arr[i][j]; 
    }
    sarr.push(myarr); 
}
console.log(sarr);


// 2)reverse staring 
// let astring="welcome";
// let mystr="";
// for(let i=astring.length-1;i>=0;i--){
//     mystr+=astring[i];
// }
// console.log(mystr);


