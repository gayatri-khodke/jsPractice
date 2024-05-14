// var test=10>4;
// console.log(test);

//undefine variable is declare but not assing any value to it
//null variable is declare but assign null value

//dynamically type language means we dont need to specify data type. js will check variable value and consider data type acording it value
//closely type language
// calculate total second in march 
// let a=31;
// let b=a*24*60*60;
// console.log(b);

// let days=360;
// let hour=days*24;
// console.log(hour);

//post increment
//it return the value and then increment the value of variable
// num++
// num--

//pre increment
//increment value first and then return it 
//++num
//--num


//string + number = string
//number + string = string

//operator precidence work left to write
// console.log(9+9-5*5);

// let x=5;
// console.log(x*=2);
//arathmathic operator  + - % / * **
// assignment operator    =, += , -= , %= , /= ,
// assignment operator assign the value to the variable
// comparison operators   == , ===, !== , > , < , >= , <= 
// comparison return the answer in boolean value
//logical operator     && || !  

// let a="sdva";
// let b="script";
// let k="A";
//unicode value of a=97 z=122 A=65 Z=90
// console.log(a<b);
//it compare its ascii unicode value
// console.log("a">"b");
// console.log(a>b);
// console.log(k.charCodeAt(0));

// premetive data type number string boolean undefined null Symbol BigInt
// non premetive data tyep =  object array function

// premetive can store only one value and non premetive can store multiple values 
// premetive create memory location and store it  in stack memory and non premetive store memory address in hit memory

// let day=3;
// if(day===1){
//     console.log("sunday");
// }
// else if(day===2){
//     console.log("Monday");
// }
// else if(day===3){
//     console.log("tuesday");
// }else if(day===4){
//     console.log("Wednasday");
// }else if(day===5){
//     console.log("Thusday");
// }else if(day===6){
//     console.log("Friday");
// }else if(day===7){
//     console.log("Saturday");
// }

// switch(day){
//     case 1:
//         console.log("sunday");
//         break;
//     case 2:
//         console.log("Monday");
//         break;
//     case 3:
//          console.log("Tuesday");
//          break;
//     case 4:
//          console.log("Wanesday"); 
//          break;
//     case 5:
//         console.log("Thrusday");
//         break;
//     case 6:
//          console.log("Frinday");
//          break;
// }


//nulish coaliescian operator  "??"    most similar or operator a||b
// if a is defined, then a
// if a is undefined then b

// let k=5;
// console.log(k ?? 10);

// let b=null;
// console.log(b ?? 10);
// in case of or operator it assign second value if variable is initialise

let a="";
let b=undefined;
let c=b ?? 5;
let d=a || 10;
console.log(c, d);

// console.log(Boolean(false));
// console.log(Boolean(null));
// console.log(Boolean(undefined));
// console.log(Boolean(""));
// console.log(Boolean(0));
// console.log(Boolean(NaN));

// or operator check the variable is defined or not defined 
// or operator check whether the value is false or true or always print truthey value



