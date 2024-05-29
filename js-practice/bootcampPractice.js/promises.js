// Promises provide a cleaner and more manageable approach to handle asynchronous operations in JavaScript,
//  avoiding the so-called "callback hell

function receiveGift() {
    return true;
}

function partyTime() {
    return new Promise((resolve) => {
        resolve('lets enjoy party');
    });
}

function noParty() {
    return new Promise((resolve, reject) => {
        reject('no party');
    });
}
let treet = new Promise(function(resolve, reject) {
    let gift = receiveGift();
    if (gift) {
        partyTime().then(resolve).catch(reject);
    } else {
        noParty().then(resolve).catch(reject);
    }
});

treet.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
});




