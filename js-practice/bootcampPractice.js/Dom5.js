// Class Questions - 
// 1 . Given a sentence, capitalize the first character of each word.
let str='this is javascript';
let substr=str.split(" ");
    let finalstr=substr.map(word => {
    return word.charAt(0).toUpperCase() + word.slice(1);
});
// console.log(finalstr.join(' '));

let arrstr=str.split(' ');
for(let i=0;i<arrstr.length;i++){
    arrstr[i]=arrstr[i][0].toUpperCase()+arrstr[i].substring(1);
}
// console.log(arrstr.join(' '));


// 2. Given an array of string. Return a new boolean array. If the item at each index contains the word javascript in it. It should be true else it should be false.
let input=["javascript", "react", "node"]
for(let i=0;i<input.length;i++){
    if(input[i]==='javascript'){
        input[i]='true';
    }
    else{
        input[i]='false';
    }
}
// console.log(input);

// 3. Given a string which contains an email address, return true if the given email is valid, else return false.
// let email='puran@navgurukul.org';
let email='puran@gmail.org';
// 	output - true	
// 	input - puran@navgurukul
// 	output - false
function checkvalid(gmail){
    if(gmail.includes('@') && (gmail.endsWith('gmail.com') || gmail.endsWith('.org') || gmail.endsWith('.in')) && gmail.length>12){
        return `valid email`;
    }
    else{
        return `Invalid email`;
    }
}
// console.log(checkvalid(email));

// 4. Given two strings, check if they are anagrams or not. If they are anagrams return true else return false.
// 	input - below, elbow
// 	output - true
// 	input - night, thin
// 	output - true
let str1='below';
let str2='elbow';
function checkanagram(str1,str2){
    let s1=str1.split('').sort().toString();
    let s2=str2.split('').sort().toString();
    console.log(s1,s2);
    if(s1===s2){
        return `anagram string`;
    }
    else{
        return `not anagram`;
    }   
}
// let count=0;
// if(str1.length==str2.length){
//     for(let i=0;i<str1.length;i++){
//         if(str1.includes(str2[i])){
//             count+=1;
//         }
//     }
// }
// else{
//     console.log('not anagram');
// }
// if(count==str1.length){
//     console.log('anagram');
// }
// else{
//     console.log('not anagram');
// }
// console.log(checkanagram(str1,str2));


// 5. Reverse the given sentence.
let sentence='i am learning javascript';
// 	output - tpircsavaj gninrael ma i
let reverse=sentence.split('').reverse().join('');
// console.log(reverse);


// 6. Reveres the given string word by word then return the reversed string.
let str3='Success comes to those who work hard';
	// output - hard work who those to comes Success
let strarray=str3.split(' ').reverse();
for(let i=0;i<strarray.length;i++){
    strarray[i].split('').reverse().join('');
}
console.log(strarray.join(' '));



