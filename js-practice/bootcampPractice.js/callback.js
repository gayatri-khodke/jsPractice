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
//means each and every statement execute at a one time. It does not wait for anything


// //syncronous sequence is deciaded to executation step by step 1 2 3 4 
// //asynchronous sequesce is not deciaded. it will not wait for anyone.


// hotel example :-
// function preparedFood(foodDelivered){
//     setTimeout(()=>{
//         console.log("Food is being prepared");
//         console.log("Food is ready");
//         foodDelivered();
//     }, 10000);
// }
// function deliveredFood(){
//     setTimeout(()=>{
//         console.log("Food is delivered to your table");
//         eatingFood();
//     }, 5000)

// }
// function eatingFood(){
//     setTimeout(()=>{
//         console.log("Eating Food");
//         payment();
//     }, 2000)
// }

// function payment(){
//     setTimeout(()=>{
//         console.log("Payment");
//         leaveHotel();
//     }, 1000)
// }
// function leaveHotel(){
//     console.log("Leave the Hotel");
// }

// function visitingHotel(){
//     console.log("Entering the Hotel");
//     console.log("Order Food - Biryani ");
//     preparedFood(deliveredFood);   
// }
// visitingHotel();



// *********************using callback :***********************

function preparedFood(foodDelivered){
    setTimeout(()=>{
        console.log("Food is being prepared");
        console.log("Food is ready");
        foodDelivered(eatingFood);
    }, 10000);
}
function deliveredFood(eatingFood){
    setTimeout(()=>{
        console.log("Food is delivered to your table");
        eatingFood(payment);
    }, 5000)

}
function eatingFood(payment){
    setTimeout(()=>{
        console.log("Eating Food");
        payment(leaveHotel);
    }, 2000)
}

function payment(leaveHotel){
    setTimeout(()=>{
        console.log("Payment");
        leaveHotel(leaveHotel);
    }, 1000)
}
function leaveHotel(){
    console.log("Leave the Hotel");
}

function visitingHotel(preparedFood){
    console.log("Entering the Hotel");
    console.log("Order Food - Biryani ");
    preparedFood(deliveredFood);   
}
visitingHotel(preparedFood);    
    

