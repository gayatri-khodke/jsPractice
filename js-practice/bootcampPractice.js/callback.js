//use callback ot solve asynchronous code problem
//bellow is asynchronous code because we use setTimeout function
//in this code our code is executiong following synchronous manner
//first function finish executiong after that second start exectuing

// const myarray = ["gayatri", "poojs", "arti"];
// function getData(){
//     setTimeout(()=>{
//         let output = '';
//         myarray.forEach((data,index)=>{
//             output+= `<li>${data}</li>`;
//         })
//         console.log(myarray);
//         document.body.innerHTML=output;
//     },2000);
//  }

// function additem(newname){
//     setTimeout(()=>{
//         myarray.push(newname);
//         console.log(myarray);
//     },3000);
   
// }
// getData();
// additem("swati");



//problem is that in above syncronous code js by default execute code in synchronous manner. 
// but if we want to do some operation with asynchronous. it is possible using callback


// const myarray = ["gayatri", "poojs", "arti"];
// function getData(){
//     setTimeout(()=>{
//         let output = '';
//         myarray.forEach((data,index)=>{
//             output+= `<li>${data}</li>`;
//         })
//         console.log(myarray);
//         document.body.innerHTML=output;
//     },2000);
//  }

// function additem(newname,myfunction){
//     setTimeout(()=>{
//         myarray.push(newname);
//         console.log(myarray);
//         myfunction();
//     },5000);
   
// }
// additem("swati",getData);

//here i pass getData function as a argument it is called callback
//using callback execution goes to the asynchronous manner
//means each and every statement execute indeguily. It does not wait for anything




//syncronous sequence is deciaded to executation step by step 1 2 3 4 
//asynchronous sequesce is not deciaded. it will not wait for anyone.
