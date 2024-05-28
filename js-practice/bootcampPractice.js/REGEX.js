// REGEX:--
// regex is just like a pattern that contains a sequence of character. That we used to to search in String.
// regex is written between two slashes `/pattern/` or using regex constructor.
// REGEX is object that has property and method

// Metacharacters:---
// . (dot)
// ^ (caret)
// $ (dollar sign)
// * (asterisk)
// + (plus)
// ? (question mark)
// [] (square brackets)
// | (pipe)
// \ :-special note on escaping

// Regex object method:--
// exec()	Tests for a match in a string. Returns the first match
// test()	Tests for a match in a string. Returns true or false
// syntax:--
// RegExp.test(string);
// RegExp.exec(string);

// 1) . dot:--
// dot matlab patteren ke undar dot ke place pr konsabhi sirf ek character allow he.allow
// at the place of dot it allow any character but only one single character whatever from a-z A-Z 
// let text='welcome to all';
// let regex=/wel.ome/;
// let k=regex.test(text);
// console.log(k);

// 2) ^ (caret):--
// this indecate that string start from. it returns true or false 
// let text='hello world';
// let regex = /^hello/;
// console.log(regex.test("hello world")); // true
// console.log(regex.test("world hello")); // false

// 3) $ dollar sing:--
// this specify that string end with.
// let text='hello world';
// let regex = /world$/;
// console.log(regex.test("hello world")); // true
// console.log(regex.test("world hello")); // false

// 4) * Asteric :--
// // this spacify that 
// let regex = /hel*o/;
// console.log(regex.test("hello")); // true
// console.log(regex.test("heo")); // true

// * means the character befor asteric can be appear or not 
// in above example we are searching l it can be in our pattern 0 times or more. it can not be means 0 times. 
// Matches 0 or more occurrences of the preceding character.

// 5) + plus:--
// Matches 1 or more occurrences of the preceding character.
// preceding character means the charactor that appear exactly befor using metacharacter 
// let regex = /hel+o/;
// console.log(regex.test("hello")); // true
// console.log(regex.test("heo")); //false

// 6) ? question mark:--
// Matches 0 or 1 occurrence of the preceding character.
// let regex = /hel?o/;
// console.log(regex.test("hello")); // false
// console.log(regex.test("heo")); // true

// 7) [] square bracket:--
//  Matches any one of the characters inside the brackets.
// let regex = /[eh]/;
// console.log(regex.test("hello")); // true
// console.log(regex.test("good morning")); // false

// 8) | pipe metacharacter:-- 
//  | acts like an OR operator.
// let regex = /[he]|[rw]/;
// console.log(regex.test("hello")); // true
// console.log(regex.test("world")); // true


// Flags:---
// g (global flag) :-search for all matches rather then stopping after the first match
// i (case insensitive) :- search case insensitively. 
// m (multiline flag):- search for multiline. 
// s (allow dot) :- this flag allow to treated dot as a newline character \n and search. 


// Methods:--
// string method that allow regex:-
// 1) search()
// 2) replace()
// 3) replaceAll()
// 4) match ()
// 5) matchAll()

// syntax for abouve method :--
// String.method(/regex/);

// ex:--
// search() method
// search method returns index of pattern that found in String. return -1 if not found.String
// let text = "hello world";
// let regex = /world/;
// console.log(text.search(regex)); // 6

// match () method 
// it returns array of matches if found othrewise return null if not found
// match method without g flag it returns only first occurance.first
// in case of g flag it returns all matches just like matchAll method.all
// let text='hello hello';
// let regex=/hello/g;
// let k=text.matchAll(regex);
// for(let i of k){
//     console.log(i);
// }
// console.log(k);

// replace() method 
// replace the part of a string that match with regex 
// syntax:- string.replace(regex, newsubstring);
// let text='welcome to all. welcome guys';
// let regex=/welcome/g;
// let newstring=text.replace(regex,'good morning');
// console.log(newstring);

// replaceAll() method 
// replace all the matches with new pattern or substring
// note:- we always need to use global flag with the replaceall othrewise it throw console.error 

// but if we are using replace methd with the global flag then we dont need to use replaceAll it work same .

// *****inshort****
// . (dot) - Matches any single character except newline.
// * - Matches zero or more occurrences of the preceding character.
// + - Matches one or more occurrences of the preceding character.
// ? - Matches zero or one occurrence of the preceding character.
// ^ - Matches the start of the string.
// $ - Matches the end of the string.
// | - Acts like an OR operator.
// [ and ] - Denote a character class. Matches any one character within the brackets.
// { and } - Denote a quantifier. Specifies the number of occurrences.


// To escape any of these characters in regex, you simply prefix them with a backslash \. For example:

// \. matches a literal dot character.
// \* matches a literal asterisk character.
// \+ matches a literal plus character.
// \? matches a literal question mark character.
// \^ matches a literal caret character.
// \$ matches a literal dollar sign character.
// \| matches a literal vertical bar character.
// \[ matches a literal opening bracket character.
// \] matches a literal closing bracket character.
// \{ matches a literal opening curly brace character.
// \} matches a literal closing curly brace character.
// Using the backslash to escape special characters allows you to search for these characters in the input text as literal characters, rather than as part of the regex syntax.



// 1. Write a JavaScript program to test whether the first character of a string is uppercase or not.
// let str1='Javascript';
// let regex=/^[A-Z]/;
// let check=regex.test(str1);
// console.log(check);

// 2) Write a JavaScript function to check whether a given value is HTML or not.
function isHTML(str) {
    const regex = /<\/?[a-z][\s\S]*>/i;
    return regex.test(str);
}
// let str1 = '<html> </html>';
// let str2 = 'This is not HTML';
// console.log(isHTML(str1)); // true
// console.log(isHTML(str2)); // false

// 3) check the input value is hexadecimal or not
let str='fff40gj0';
let regex=/^[0-9a-fA-F]+$/i;
let check=regex.test(str);
// console.log(check);