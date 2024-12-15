//CHAPTER-9 DATES IN JAVASCRIPT

/* A. INTRODUCTION TO DATES
  1. JavaScript Date objects represent a single moment in time in a platform-independent format.
     Date objects are static. The "clock" is not "running". The computer clock is ticking, date
     objects are not.

  2. By default, JavaScript will use the browser's time zone and display a date as a full text 
     string. "Sat Jul 20 2024 17:05:23 GMT+0530 (India Standard Time)".

  3. JavaScript Date objects are created with the new Date() constructor. JavaScript counts months 
     from 0 to 11: January = 0. December = 11. Specifying a month higher than 11, will not result 
     in an error but add the overflow to the next year. If we supply only one parameter it will be 
     treated as milliseconds.
     
  4. There are 9 ways to create a new date object:
     - new Date()
     - new Date(date string)
     - new Date(year,month)
     - new Date(year,month,day)
     - new Date(year,month,day,hours)
     - new Date(year,month,day,hours,minutes)
     - new Date(year,month,day,hours,minutes,seconds)
     - new Date(year,month,day,hours,minutes,seconds,ms)
     - new Date(milliseconds) */


  //Example-1
  const a = new Date();
  console.log(a); //Output: 2024-07-20T11:41:34.412Z

  //Example-2
  const b = new Date("2024-10-17");
  const c = new Date("October 13, 2014 11:13:00");
  console.log(b); //Output: 2024-07-20T00:00:00.000Z
  console.log(c); //Output: 2014-10-13T11:13:00.000Z

  //Example-3 
  const d = new Date(2018, 11, 24, 10, 33, 30, 0);
  console.log(d); //Output: 2018-12-24T10:33:30.000Z

  //Example-4
  const e = new Date(2018);
  console.log(e); //Output: 1970-01-01T00:00:02.018Z




/* B. METHODS OF DATE OBJECT
  1. new Date() returns a date object with the current date and time. There are some GET Functions:
     - getFullYear(): Get year as a four digit number (yyyy)
     - getMonth(): Get month as a number (0-11)
     - getDate(): Get day as a number (1-31)
     - getDay(): Get weekday as a number (0-6)
     - getHours(): Get hour (0-23)
     - getMinutes(): Get minute (0-59)
     - getSeconds(): Get second (0-59)
     - getMilliseconds():	Get millisecond (0-999)
     - getTime():	Get time (milliseconds since January 1, 1970)
     
  2. Set Date methods let you set date values (years, months, days, hours, minutes, seconds,
     milliseconds) for a Date Object.
     - setDate():	Set the day as a number (1-31)
     - setFullYear():	Set the year (optionally month and day)
     - setHours():	Set the hour (0-23)
     - setMilliseconds():	Set the milliseconds (0-999)
     - setMinutes():	Set the minutes (0-59)
     - setMonth():	Set the month (0-11)
     - setSeconds():	Set the seconds (0-59)
     - setTime():	Set the time (milliseconds since January 1, 1970) */



  //Example-1
  const f = new Date();
  console.log(f.getFullYear()); //Output: 2024
  console.log(f.getMonth()); //Output: 6
  console.log(f.getDate()); //Output: 20
  console.log(f.getDay()); //Output: 6** 
  console.log(f.getHours()); //Output: 17
  console.log(f.getMinutes()); //Output: 41
  console.log(f.getSeconds()); //Output: 34
  console.log(f.getMilliseconds()); //Output: 412
  console.log(f.getTime()); //Output: 1675293474312


  //Example-2
  const g = new Date();
  g.setFullYear(2024);
  g.setMonth(6);
  g.setDate(20);
  g.setHours(17);
  g.setMinutes(41);
  g.setSeconds(34);
  g.setMilliseconds(412);
  console.log(g);

     


  