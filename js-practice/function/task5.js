//1)snake game object  

// const snakeGame={
//     value:0,
//     ladder(){
//         return this.value;
//     },
//     snake(){
//         return this.value=0;
//     },
//     move(){
//         let k = Math.floor(Math.random() * 6) + 1;
//         return this.value=this.value+k;
//     },
// }
// console.log(snakeGame.move());
// console.log(snakeGame.ladder());
// console.log(snakeGame.snake());


//2) shallow copy and deep copy in case of non primitive data type 
// const _ = require('lodash');
// const obj={
//     name:'gauri',
//     info:{
//         class:12,
//         year:2023
//     },
//     job(){
//         return 'will get soon';
//     },
// };

// shallow copy using for loop. iterate over obj and copy each key value manually
// there is also limitation in case of nastade Object. it store nastade object reference not value
// let p={};
// for(let key in obj){
//     p[key]=obj[key];
// }
// p.info.year=2002;
// console.log(p);
// console.log(obj);

// using Object.assign method create shallow copy
// const k=Object.assign({},obj);
// k.info.class=10;
// k.name="pooja";
// console.log(obj);
// console.log(k);

// using object destructiong {...obj} create shallow copy
// const k={...obj};

// using stringify and parse function create deep copy
// there is limitation in case of function and date
// const k=JSON.parse(JSON.stringify(obj));

// using lodash library  create deep copy
// const k=_.cloneDeep(obj);

// 02/05/203
// // create prototype using Object.create()
const sayHello = {
    printhello() {
        return `Hello`;
    },
};

const sayBy = {
    printBy() {
        return `By`;
    },
};

function myfactory(name, age) {
    // let newPrototypeObj = Object.create(sayHello);
    let myobj=Object.assign({},sayHello,sayBy);
    let newPrototypeObj=Object.create(myobj);
    newPrototypeObj.name = name;
    newPrototypeObj.age = age;

    return newPrototypeObj;
}

const person1 = myfactory('pooja', 10);
console.log(person1);

let a={
    name:'seema',
};
let k=a.hasOwnproperty();
if(k){
    console.log("yes");
}
else{
    console.log("NO");
}