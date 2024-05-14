//take input from usere and print it
// const readlineSync=require('readline-sync');
// const num=readlineSync.questionInt("Enter your input: ");
// console.log(num);


function printreverse(num){
    let reversenum=0;
    let number=Math.abs(num);
    while(number>1){
     let reminder=number%10;
     reversenum=(reversenum*10)+reminder;
     number=Math.floor(number/10);
    }
    if(num<0){
        return `-${reversenum}`;
    }
    else{
        return reversenum;
    }
}
console.log(`reverse number is ${printreverse(-279)}`);
