//using call() method in js we can write method that can use wiht othere object
// call()  method allow us to borrow method from one object ot another object
//call() aplly() bind() this are used for same purpose but only the miner different in that
//call and apply method diractly invoke where we use it to all or apply
//but bind method dose not invoke innediately it can be used later


//call() method allow us to write method that can be used on other object
//this is name method                *********************
// const name={
//     firstname:"gayatri",
//     lastname:'khodke'
// }
// //this is name2 method
// const name2={
//     firstname:'poojs',
//     lastname:'patil'
// }
// //this is function (all function in js are method)
// function Myfullname(){
//     console.log(this.firstname+" "+this.lastname);
// }
// //now i used thid method with came2 object
// Myfullname.call(name2);

//borrow function (method) from other object to other object   *********
// let name={
//     firstname:'sujata',
//     lastname:'khodke',
//     fullname:function(){
//         console.log(this.firstname+" "+this.lastname);
//     }
// }
// let name2={
//     firstname:'sachin',
//     lastname:'tendulkar'
// }
// name.fullname.call(name2);
//we can pass argument also with call method just comma separated with function pass by reference



//apply() method   ////////////////////////////////////////////////////////////////
//only different between call and apply is how we pass the argument
//we need to wrap the second argument into the square bracket 
//  let name={
//     firstname:'gaurav',
//     lastname:'khodke'
//  }
//  let name2={
//     firstname:'surekha',
//     lastname:'khodke'
//  }
//  function fullname(city,age){
//     console.log(this.firstname+" "+this.lastname+" " +city);
//  }
// //  fullname.call(name2,"amravati","25");   
// //it is valid with call method to pass argument as a comma saperated
// //but in apply method we need to wrap into square bracket. it specify as a array of argument

// fullname.apply(name,["Maharashtra","21"]);


//bind() method 
let name={
    firstname:'seema',
    lastname:'mohekar'
}
let name2={
    firstname:'samiksha',
    lastname:'shitre'
}
function fullname(){
   return this.firstname+" "+this.lastname;
}
let printfullname = fullname.bind(name);
console.log(printfullname());
// console.log(fullname.bind(name2)());
//bind method just bind that method's result into a variable
//when we need this result then we have to call that variable with () parenthatics just like function call
