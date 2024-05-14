// const prompt=require("prompt-sync")();
// let length;
// length=prompt("enter the length");
// length=parseInt(length);
// const q=[];
// for(let i=0;i<length;i++){
//     q.push(prompt(parseInt("enter arr "+i )));

// }
// console.log(q);




// const prompt = require("prompt-sync")();
// let length = prompt("Enter the length: ");
// length = parseInt(length);
// let q = [];
// for (let i = 0; i < length; i++) {
//     q.push(parseInt(prompt("Enter arr[" + i + "]: ")));
// }
// console.log(q);

//take a string and print it
// let str = prompt("enter a string");
// console.log("your input string:",str);

//sort the array in assending order
// const array = [23,434,5,2,6,43];
// array.sort((a,b)=>a-b);
// console.log(array);

//sort the array in descending order
// const array = [43,7,8,0,2,3];
// array.sort((a,b)=>b-a);
// console.log(array);

//sort array of string in alphabetacaly order
// const mystringarray = ["gayatri","pooja","seema","amit","radha"];
// mystringarray.sort((a,b)=>a.localeCompare(b));
// console.log(mystringarray);

//sort the array of string in descending order
// const mystring = ["gayatri","poojs","seema","amit","radha"];
// mystring.sort((a,b)=>b.localeCompare(a));
// console.log(mystring);

//use of array.flat() method 
//used to create new array with sub array element
// const myarray = [[1,2],[3,4],[6,8,2,1]];
// const newarray =myarray.flat();
// console.log(newarray);


//splice() is used to add array element to the sertain opsition
// const array = ["gayatri","poojs","gaurav","surekha"];
// array.splice(2,0,"rekha","prabhita");
// console.log(array);

//we can delete array element using splice method 
// const array =["gayatri","poojs","gaurav","surekha"];
// array.splice(2,1);
// console.log(array, array.length);

//array.toString() method convert array into string
// const myarray = ["gayatri","poojs","gaurav","surekha"];
// console.log(typeof myarray);
// console.log(Array.isArray(myarray));
// const newstr = myarray.toString();
// console.log(typeof newstr);

//arrau reduce() method
//used to reduce all array element into one single number
// const array = [3,4,6,67,5,8,2,1];
//  const newarray = array.reduce((pre,cur)=>{
//     return pre+cur;
// })
// console.log(newarray,typeof newarray);
