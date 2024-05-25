// How to get tomorrow’s date in a string format in JavaScript?
// let currentdate=new Date();
// currentdate.setDate(currentdate.getDate()+1);
// console.log(currentdate);


//  2	How to convert UTC date time into local date time using JavaScript?
// let cdate=new Date();
// console.log(cdate);
// cdate.toLocaleTimeString();
// console.log(cdate);


//  3 How to check  two date are same or not?
// let d1=new Date(2023,4,21,11,30,14);
// let d2=new Date(2023,5,21,11,30,14);
// function checkDate(a,b){
//     if (a.getDate()===b.getDate()
//        && a.getMonth()==b.getMonth()
//       && a.getFullYear()==b.getFullYear()){
//         return `both are same`;
//       }
//       else{
//         return `Not same date`;
//       }
// }
// console.log(checkDate(d1,d2));


// 4	How to get seconds since epoch in JavaScript?
// 5	How to check the input date is equal to today’s date or not using JavaScript?
// let inputdate=new Date(2024,5,25);
// let current=new Date();
// function checkDate(a,b){
//     let day=a.getDate();
//     let year=a.getFullYear();
//     let month=a.getMonth();
//     let cday=b.getDate();
//     let cyear=b.getFullYear();
//     let cmonth=b.getMonth()+1;
//     let inputd=`${year}${month}${day}`;
//     let currentd=`${cyear}${cmonth}${cday}`;
//     console.log(day,year,month ,"+++",cday,cyear,cmonth);
//     console.log(inputd, currentd);
//     if(inputd===currentd){
//         return `same date`;
//     }
//     else{
//         return `not same date`;
//     }

// }
// console.log(checkDate(inputdate,current));



// 6 How to check if one date is between two dates in JavaScript?
// let start=new Date(2020,6,13);
// let end=new Date(2023,8,19);
// let d3=new Date(2025,4,3);
// if (d3>=start && d3<=end){
//     console.log(`d3 is between start and end date`);
// }
// else{
//     console.log(`d3 is not between start and end date`);
// }


// 7	How to check if the given date is weekend?
// let d=new Date();
// let day=d.getDay();
// // d.setDate(26);
// // let day=d.getDay();
// if (day==0 || day==6){
//     console.log(`weekend`)
// }
// else{
//     console.log(`not weekend`)
// }



// 8 How to format current date in MM/DD/YYYY HH:MM:SS AM/PM format using JavaScript?
// let d=new Date();
// console.log(d.toLocaleString());


// 9	How to convert date to another timezone in JavaScript?
// 10	How to check if date is less than 1 hour ago using JavaScript ?
// 11	How to check a date is valid or not using JavaScript?
// 12	How to get the day and month of a year using JavaScript?
// 13	How to store all dates in an array present in between given two dates in JavaScript?
// 14	How to convert seconds to time string format hh:mm:ss using JavaScript?
// 15	How to calculate the date three months prior using JavaScript?
// 16	How to calculate the yesterday’s date in JavaScript?
// 17	How to calculate minutes between two dates in JavaScript?
// 18	How to get the first day of the year in JavaScript?
// 19	How to get the first and last date of current month using JavaScript?
// 20	How to get the number of days in a specified month using JavaScript?
// 21	How to remove time from date using JavaScript?
// 22	How to get the current date and time in seconds?
// 23	How to get Month and Date of JavaScript in two digit format?
// 24	How to check whether an object is a date?
// 25	How to get the current date in JavaScript ?
// 26	How do you display JavaScript datetime in 12 hour AM/PM format?
// 27	How to compare date part only without comparing time in JavaScript?
// 28	How to calculate days left until next Christmas using JavaScript?
// 29	How to convert a JavaScript date to UTC?