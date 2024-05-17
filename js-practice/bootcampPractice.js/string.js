// Input: “The quick brown fox jumps over the lazy dog” 
// Output: is a Pangram 
// Explanation: Contains all the characters from ‘a’ to ‘z’] 

let mystr='The quick brown fox jumps over the lazy dog';
let myarr=mystr.split('');
let characterarray=myarr.map(e=>{
    e.split('');
});
let sortarr=characterarray.sort();
console.log(sortarr);