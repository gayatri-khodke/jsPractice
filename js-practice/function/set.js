// const b=[1,1,2,2,3,3];
// let k=new Set(b);
// console.log(k);

// console.log(k.has(2))
// console.log(k.add(4))
// k.delete(2)

// console.log(k)

// obj ={
//     key:10,
//     key1:function(){return k=3},
//     key3:{
//         abc:23,
//         xyz:function(){return b=50}
//     }
// }
// obj.key=20;
// console.log(obj.key3.xyz());
// console.log(obj.key);
// console.log(obj["key"]);
// console.log(obj.key1());

const input=require("readline-sync");
 let obj={ };
obj['fname']= input.question("enter name:");
obj['number']=input.questionInt("enter number:");
obj.password=input.question("enter password:");

console.log(obj.fname);


// const input = require("readline-sync");
// let obj = {};
// obj['fname'] = input.question("Enter name: ");
// obj['number'] = input.questionInt("Enter number: ");
// obj['password'] = input.question("Enter password: ");


// , {
//   hideEchoBack: true // This hides the user input
// });

console.log(obj);
