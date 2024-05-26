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
let current=new Date();
let beforeoneHour=new Date(2024,4,25,21,33,40);
let chour=current.getHours()-1;
let bhour=beforeoneHour.getHours();
// if (bhour==chour){
//     console.log('YES');
// }
// else{
//     console.log('NO');
// }


// check date is valid or not 
function checkDate(cdate) {
    let year = cdate.getFullYear();
    let month = cdate.getMonth() + 1;
    let day = cdate.getDate();
    if (year <= 0) {
        return 'Invalid year';
    }
    if (month < 1 || month > 12) {
        return 'Invalid month';
    }
    if ((month==4 || month==6 || month==9 || month==11) && (day>=1 && day<=30)) {
        return 'Valid date';
    } else if ((month==1 || month==3 || month==5 || month==7 || month==8 || month==10|| month==12) && (day >= 1 && day <= 31)) {
        return 'Valid date';
    } else if (month == 2) {
        if (day >= 1 && day <= 28) {
            return 'Valid date';
        } else if (day == 29) {
            // Check for leap year
            if ((year % 4 == 0 && year % 100 != 0) || (year % 400 == 0)) {
                return 'Valid date';
            } else {
                return 'Invalid date';
            }
        } else {
            return 'Invalid date';
        }
    } else {
        return 'Invalid date';
    }
}

// Example usage:
let cdate = new Date();
// console.log(checkDate(cdate));
// console.log(checkDate(new Date('2023-04-31'))); 

// 0 1 2 3 4 5 6 7 8 9 10 11
// 0 2 4 6 7 9 12 :--- 31 days  
// January
// March
// May
// July
// August
// October
// December
// 3 5 8 11  :--- 30 days 
// April
// June
// September
// November

// 12	How to get the day and month of a year using JavaScript?
let currentdate=new Date();
let day=currentdate.getDay()+1;
let month=currentdate.getMonth()+1;
// console.log(`day number 1 to 7 :- ${day} month number 1 to 12 :- ${month}`);
// day is in range 0 to 6 
// month is in range 0 to 11 


// 13	How to store all dates in an array present in between given two dates in JavaScript?



// 14	How to convert seconds to time string format hh:mm:ss using JavaScript?
// 15	How to calculate the date three months prior using JavaScript?
// 16	How to calculate the yesterday’s date in JavaScript?
// 17	How to calculate minutes between two dates in JavaScript?
// 18	How to get the first day of the year in JavaScript?
// 19	How to get the first and last date of current month using JavaScript?
// 20	How to get the number of days in a specified month using JavaScript?
// 21	How to remove time from date using JavaScript?
function removeTime(date) {
    return new Date(date.getFullYear(), date.getMonth(), date.getDate());
}
let originalDate = new Date(); 
// console.log("Original Date:", originalDate);
let dateWithoutTime = removeTime(originalDate);
// console.log("Date Without Time:", dateWithoutTime);


// 22	How to get the current date and time in seconds?
let cdateinMilisecond=Date.now();
let dateinFormate=new Date(cdateinMilisecond).toString();
// console.log(dateinFormate);
// console.log(Date.now(dateinFormate))
// Date.now() returns a date in miliseconds 


// 23	How to get Month and Date of JavaScript in two digit format?
// 24	How to check whether an object is a date?
function isDate(cdate){
    return cdate instanceof Date;
}
// console.log(isDate(new Date()));


// 25	How to get the current date in JavaScript ?
// console.log(new Date());
// console.log(new Date().toISOString());           //2024-05-26T17:51:49.672Z
// console.log(new Date().toJSON());                //2024-05-26T17:51:49.691Z
// console.log(new Date().toLocaleDateString());    //5/26/2024
// console.log(new Date().toLocaleString());        //5/26/2024, 11:21:49 PM
// console.log(new Date().toLocaleTimeString());    //11:23:33 PM


// 26	How do you display JavaScript datetime in 12 hour AM/PM format?
// console.log(new Date().toLocaleString());        //5/26/2024, 11:21:49 PM


// 27	How to compare date part only without comparing time in JavaScript?
// 29	How to convert a JavaScript date to UTC?