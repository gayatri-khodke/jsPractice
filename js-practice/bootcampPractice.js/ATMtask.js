// Atm task 
// **************using callback*************
// function enterAtm(insert){
//         console.log('Enter ATM');
//         insert(processing);
// }
// enterAtm(insertCard);
// function insertCard(process){
//         console.log('insert ATM');
//         process(enterPin);
// }
// function processing(entercode){
//     setTimeout(()=>{
//         console.log('Processing');
//         entercode(withdrawMoney);
//     },5000);
// }
// function enterPin(getmoney){
//     setTimeout(()=>{
//         console.log('Enter pin code');
//         getmoney(collectCash);
//     },2000);
// }
// function withdrawMoney(collect){
//     setTimeout(()=>{
//         console.log('withdraw money');
//         collect(leaveAtm);
//     },5000);
// }
// function collectCash(leave){
//     setTimeout(()=>{
//         console.log('collect cash');
//         leave();
//     },1000);
// }
// function leaveAtm(){
//         console.log('leave ATM');
// }



// *********using callback hell**********

// function enterAtm(insert){
//             console.log('Enter ATM');
//             insert(processing);
//     }
//     function insertCard(process){
//             console.log('insert ATM');
//             process(enterPin);
//     }
//     function processing(entercode){
//         setTimeout(()=>{
//             console.log('Processing');
//             entercode(withdrawMoney);
//         },5000);
//     }
//     function enterPin(getmoney){
//         setTimeout(()=>{
//             console.log('Enter pin code');
//             getmoney(collectCash);
//         },2000);
//     }
//     function withdrawMoney(collect){
//         setTimeout(()=>{
//             console.log('withdraw money');
//             collect(leaveAtm);
//         },5000);
//     }
//     function collectCash(leave){
//         setTimeout(()=>{
//             console.log('collect cash');
//             leave();
//         },1000);
//     }
//     function leaveAtm(){
//             console.log('leave ATM');
//     }
//     enterAtm(()=>{
//         insertCard(()=>{
//             processing(()=>{
//                 enterPin(()=>{
//                     withdrawMoney(()=>{
//                         collectCash(()=>{
//                             leaveAtm()
//                         })
//                     })
//                 })
//             })
//         })
//     })


//***********/ using promises:************

// function enterAtm() {
//     console.log('Enter ATM');
//     return insertCard();
// }

// function insertCard() {
//     return new Promise((resolve) => {
//         console.log('insert ATM');
//         resolve();
//     }).then(() => processing());
// }

// function processing() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('Processing');
//             resolve();
//         }, 5000);
//     }).then(() => enterPin());
// }

// function enterPin() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('Enter pin code');
//             resolve();
//         }, 2000);
//     }).then(() => withdrawMoney());
// }

// function withdrawMoney() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('withdraw money');
//             resolve();
//         }, 5000);
//     }).then(() => collectCash());
// }

// function collectCash() {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             console.log('collect cash');
//             resolve();
//         }, 1000);
//     }).then(() => leaveAtm());
// }

// function leaveAtm() {
//     console.log('leave ATM');
// }
// enterAtm();


// ****************another approach promise chaining******************
function enterAtm() {
    return new Promise((resolve)=>{
        resolve('Enter ATM');
    })
    }
    
    function insertCard() {
        return new Promise((resolve)=>{
            setTimeout(()=>{
                resolve('Insert ATM');
            },1000)
        })
    }
    
    function processing() {
        return new Promise((resolve,reject)=>{
            setTimeout(() => {
                resolve('Processing');
                // reject('rejected');
            }, 5000);
        })
    }
    
    function enterPin() {
        return new Promise((resolve)=>{
            setTimeout(() => {
               resolve('Enter pin code');
            }, 2000);
        })
    }
    
    function withdrawMoney() {
        return new Promise((resolve)=>{
            setTimeout(() => {
                resolve('withdraw money');
            }, 5000);
        })
    }
    
    function collectCash() {
        return new Promise((resolve)=>{
            setTimeout(() => {
                resolve('collect cash');
            }, 1000);
        })
    }
    
    function leaveAtm() {
        return new Promise((resolve)=>{
            resolve('leave ATM');
        })
    }
    enterAtm()
    .then((result)=>{
        console.log(result);
        return insertCard();
    })
    .then((result)=>{
        console.log(result);
        return processing();
    })
    .then((result)=>{
        console.log(result);
        return enterPin();
    })
    .then((result)=>{
        console.log(result);
        return withdrawMoney();
    })
    .then((result)=>{
        console.log(result);
        return collectCash();
    })
    .then((result)=>{
        console.log(result);
        return leaveAtm();
    })
    .then((result)=>{
        console.log(result);
    })
    .catch((error)=>{
        console.log(error);
    })























// learn callstack
    // function printFun(test) 
    // { 
    //     if (test < 1) 
    //         return 0; 
    //     else { 
    //         console.log(test + " "); 
    //         printFun(test - 1); // statement 2 
    //         console.log(test + " "); 
    //         return; 
    //     } 
    // } 
    // let test = 3; 
    // printFun(test);