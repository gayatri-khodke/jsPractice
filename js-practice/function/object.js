//create object      *****************************************
// const person={
//     firstName:'Gayatri',
//     lastName:'khodke',
//     fullName: function(){
//       return  this.firstName+" "+this.lastName;
//     }
// }
// console.log(person.firstName);

// using call() method object can use a method belong to another object   ********************************
// const myFamily={
//     familyName:"khodke",
//     member:"6",
//     myName:'poojs',
//     sisterName:'kalvyani',
//     totalSister: function(){
//         this.myName+" "+this.sisterName;
//     }
// }
// console.log(myFamily.totalSister);
// console.log(myFamily.member);

// const person1={
//     firstName:'samiksha',
//     lastName:'mohekar',
//     fullName:function(){
//         return this.firstName+" "+this.lastName;
//     }
// }
// const person2={
//     firstName:'radha',
//     lastName:'chaudhari'
// }
// console.log(person1.fullName.call(person2));

// 3) iterate over object  ///////////////////////////////////////////////////////////////
// way to convert object into array 1) Object.values() 2) Object.entries() 3) Object.keys() method
// const collageData={
//     professor:'mahajan',
//     pueon:'supe',
//     classnum:15,
// }
// const myarr = Object.values(collageData);
// let text="";
// for(let x in myarr){
//     text+=myarr[x]+" ";
// }
// console.log(text);

//iterator using Object.keys() method  *****************************
//this method returns array of objects propety with key and index pare not key value pare 
// we have to use this index to get value of key mens property's value
// const collageData={
//         professor:'mahajan',
//         pueon:'supe',
//         classnum:15,
//     }
//     let text=" ";
//     const myarr = Object.keys(collageData);
//     myarr.forEach((key,index)=>{
//         text+=key+" "+myarr[index]+" ";
//     })
//     console.log(text);

//Object.entries() returns array of object's key value pare   ***********************
// const mobile={
//     price:20000,
//     type:'oppo',
//     color:'skyblue'
// }
// const myarr = Object.entries(mobile);
// let text=" ";
// myarr.forEach((key, value)=>{
//      text+=key+" "+value+" ";
// })
// console.log(text);

// //create object constructor       ********************************
 
// function Person(name,age,city){
//     this.name=name,
//     this.age=age,
//     this.city=city
// }
// //now using object constructor create object
// const myobj = new Person("gayatri",21,'amravati');
// const myArr = Object.values(myobj);
// console.log(myArr[1]);

//we can not add property or method to constructor function diractly     **************************
//but we can add using prototype propoerty instead to add 
// function Myfamily(me,mother,fother){
//     this.me=me;
//     this.mother=mother;
//     this.fother=fother;
// }
// Myfamily.prototype.lastname = "kpatil";
// Myfamily.prototype.fullname = function(){
//    return this.me+" "+this.mother;
// }
// const myobj = new Myfamily('gayu','gajanan','surekha','khodke');
// console.log(myobj.me);
// console.log(myobj.fullname());


//iterate over object using Object.entries() method
//Object.entries() returns a array with key value pare of each property and value of object

// const myobj={
//     name:'gayu',
//     age:'22',
//     city:'Amravati'
// }
// const myarray = Object.entries(myobj);
// for(let key in myarray){
//     console.log(myarray[key]);
// }




