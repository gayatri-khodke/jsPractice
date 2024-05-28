// 1) Write a recursive function that takes a number as an input and returns the factorial of that number.
function factor(num){
    if(num==1 || num==0){
        return 1;
    }
    return num*factor(num-1)
}
// console.log(factor(5));


// 2) create function to print 1 to 10 using recursion
function counter(num){
    if(num==1){
        return;
    }
    console.log(num);
    counter(num-1);
}
// counter(10);


// 3) Write a JavaScript program to print integers in the range (x, y) using recursion.  
function numRange(a,b){
    if(a==b){
        return;
    }
    console.log(a);
    return numRange(a+1,b);
}
// numRange(2,8);


// 4) print the array elemnt using recursion
let arr = ['apple','banana','mango','kiwi'];
function printarr(arr,index){
    if (index===arr.length){
        return;
    }
    console.log(arr[index]); 
   return  printarr(arr,index+1);
}
// printarr(arr,0);


// 5) Write a recursive function that takes a number and returns the sum of all the numbers from zero to that number.
function printSum(num){
    if(num == 0){
        return num;
    }
    return num+printSum(num - 1);
}
// console.log(printSum(5));

// 6) Write a recursive function that takes a number ‘n’ and returns the nth number of the Fibonacci number.
function fibonacci(n) {
    if (n <= 1) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}
// console.log('fibonacci:-',fibonacci(0)); // Output: 0
console.log('fibonacci:-',fibonacci(5)); // Output: 1


//7)  Write a recursive function that takes a list of numbers as an input and returns the product of all the numbers in the list.
function printProduct(arr,pro=1) {
    if (arr.length===0) {
        return pro;
    }
    return printProduct(arr.slice(1), pro * arr[0]);
}
let array = [1,3,7,5];
// console.log('product:', printProduct(array));


//8) Write a recursive function that takes a string and reverse the string.
let str='reverse';
let m='';
let i=0;
function reversestr(str,m,i){
    if(i==str.length){
        return m;
    }
    return reversestr(str,m+str[str.length-1-i],i+1);
}
// console.log(reversestr(str,m,i));

function reversestr(str) {
    if (str==='') {
        return '';
    }
    return reversestr(str.substr(1)) + str.charAt(0);
}
// let str = 'reverse';
// console.log(reversestr(str));

// let str = 'reverse';
// function reversestr(str, m, i) {
//     if (i == str.length) {
//         return m;
//     }
//     console.log(m);
//     return reversestr(str, str[i] + m, i + 1);
// }
// console.log(reversestr(str, '', 0));


//9 Write a recursive function that takes an array of words and returns an array that contains all the words capitalized.
let words=['apple','orange','kiwi','banana'];
function capitalizeword(words,i=0){
    if(i==words.length){
        return words;
    }
    words[i]=words[i].toUpperCase();
    return capitalizeword(words,i+1);
}
// console.log(capitalizeword(words));

//10) Write a recursive function to find sum of range a-b numbers.
// 	example - [5,8]
// 	sum = 26

function sumofRange(a,b) {
    if (a>b){
        return 0;
    }
    return a+sumofRange(a+1,b);
}
console.log(sumofRange(5,8));
// 5+6=11
// 11+7=18
// 18+8=26

// 11) check string is palindrom or not using recursion
// it work for both string and number also
function isPalindromeNumber(num) {
    function helper(s,start,end) {
        if(start>=end) {
            return true;
        }
        if(s[start]!== s[end]){
            return false;
        }
        return helper(s,start+1, end-1);
    }
    let numStr = num.toString();
    return helper(numStr, 0, numStr.length - 1);
}
// console.log(isPalindromeNumber(121));   
// console.log(isPalindromeNumber('madam')); 
// console.log(isPalindromeNumber('dodkod')); 
