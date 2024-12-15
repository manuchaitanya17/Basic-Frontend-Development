//CHAPTER-4 NUMBERS IN JAVASCRIPT

/* A. INTRODUCTION TO NUMBERS
  1. JavaScript has only one type of number. Numbers can be written with or without decimals.
     Extra large or extra small numbers can be written with scientific (exponent) notation.
     
  2. JavaScript Numbers are Always 64-bit Floating Point. Unlike many other programming languages,
     JavaScript does not define different types of numbers, like integers, short, long, floating-
     point etc. */




/* B. OPERTAIONS BETWEEN NUMBERS AND STRING
  1. When adding a number and a string, JavaScript will treat the number as a string.
  
  2. At the same precedence level, calculation/concatenation starts from left to right.
  
  3. Any other opeartion between number and string results into number but remember the opearnds 
     should be legal otherwise it will return NaN.
     
  4. NaN is a JavaScript reserved word indicating that a number is not a legal number.
  
  5. We can use the global JavaScript function isNaN() to find out if a value is a not a number.
     It retruns false when there is a argument which can implicitly be converted into number.
     
  6. If we use NaN in a mathematical operation as operand, the result will also be NaN.
  
  7. NaN is a number: typeof NaN returns number. In Javascript, NaN is not considered to be equal 
     to NaN even after using the strict equality operator. */


  // Example-1
  let x1 = 10;
  let y1 = "20";
  let z1 = x1 + y1;  // Output: 1020

  let x2 = 10;
  let y2 = 20;
  let z2 = "The result is: " + x2 + y2; // Output: The result is: 1020

  let x3 = 10;
  let y3 = 20;
  let z3 = "30";
  let result = x3 + y3 + z3;  // Output: 3030
  console.log(z3 + x3 + y3);  // Output: 301020

  console.log({ name: 'Scaler' } + 6); //Output: [object Object]6
  console.log([1,2,3] + 6);  //Output: 1,2, 36


  //Example-2
  let x4 = "100";
  let y4 = "10";
  let z4 = x4 / y4; // Output: 10

  let x5 = "100";
  let y5 = "10";
  let z5 = x5 - y5; // Output: 90

  let x6 = "100";
  let y6 = "Apple";
  let z6 = x6 - y6;   // Output: NaN
  console.log(isNaN(z6));   // Output: true

  let x7 = NaN;
  let y7 = 5;
  let z7 = x7 + y7;  // Output: NaN

  let x8 = NaN;
  console.log(typeof x8);  // Output: number


  //Example-3
  console.log(isNaN("Hello"))   //Output: true
  console.log(isNaN(345))       //Output: false
  console.log(isNaN('1'))       //Output: false 
  console.log(isNaN(true))      //Output: false,
  console.log(isNaN(false))     //Output: false
  console.log(isNaN(undefined)) //Output: true
  console.log(NaN == NaN)       //Output: false
  console.log(NaN === NaN)      //Output: false**




/* C. INFINITY AND -INFINITY
  1. Infinity (or -Infinity) is the value JavaScript will return if you calculate a number outside
     the largest possible number.
  2. Infinity is the only JavaScript number type that is not equal to itself.
  3. Division by 0 (zero) also generates Infinity.
  4. Infinity is a number: typeof Infinity returns number.  */


  //Example-1
  let myNumber = 2;
  while (myNumber != Infinity) {
    myNumber = myNumber * myNumber;
  }

  let a =  2 / 0;
  let b = -2 / 0;
  console.log(a, b);  // Output: Infinity -Infinity
 
  
  let c = 0 / 0;
  console.log(c);  // Output: NaN

  console.log(typeof Infinity);  // Output: number
  console.log(2/0 == Infinity);  // Output: true




/* D. HEXADECIMAL NUMBERS
  1. JavaScript interprets numeric constants as hexadecimal if they are preceded by 0x. */

  //Example-1
  let d = 0xff;
  console.log(d);  // Output: 255




/* E. NUMBERS AS OBJECT
  1. Normally JavaScript numbers are primitive values created from literals. 
  2. But numbers can also be defined as objects with the keyword new.
  3. Do not create Number objects. The new keyword complicates the code and slows down execution 
     speed. Number Objects can produce unexpected results. */

  //Example-1
  let x9 = new Number(123);

  let x10 = 123;
  let y10 = new Number(500);
  console.log(x9 == x10);   // Output: false
  console.log(x9 === x10);  // Output: false
  console.log(typeof y10);  // Output: object




/* F. PROPERTIES OF NUMBERS OBJECT
  1. Number properties belong to the JavaScript Number Object. These properties can only be 
     accessed as Number.MAX_VALUE. Using x.MAX_VALUE, where x is a variable or a value, will
     return undefined.
     - EPSILON- The difference between 1 and the smallest number > 1.
     - MAX_VALUE- The largest number possible in JavaScript
     - MIN_VALUE- The smallest number possible in JavaScript
     - MAX_SAFE_INTEGER- The maximum safe integer (2^53 - 1)
     - MIN_SAFE_INTEGER- The minimum safe integer -(2^53 - 1)
     - POSITIVE_INFINITY- Infinity (returned on overflow)
     - NEGATIVE_INFINITY- Returns Negative infinity (returned on overflow)
     - NaN- Returns NaN */


  //Example-1
  let m11 = Number.EPSILON;   // Output: 2.220446049250313e-16
  let m12 = Number.MAX_VALUE; // Output: 1.7976931348623157e+308
  let m13 = Number.MIN_VALUE; // Output: 5e-324
  let m14 = Number.MAX_SAFE_INTEGER; // Output: 9007199254740991
  let m15 = Number.MIN_SAFE_INTEGER; // Output: -9007199254740991
  let m16 = Number.POSITIVE_INFINITY; // Output: Infinity
  let m17 = Number.NEGATIVE_INFINITY; // Output: -Infinity
  let m18 = Number.NaN; // Output: NaN

  let m19 = 2;
  console.log(m19.MAX_VALUE); // Output: undefined ***




/* G. METHODS OF NUMBER OBJECT 
  1. These object methods belong to the Number Object. These methods can only be accessed like
     Number.isInteger(). Using X.isInteger() where X is a variable, will result in an error.
  2. Here are four methods of Number Object:
   - Number.isInteger()- Returns true if the argument is an integer. 
   - Number.isSafeInteger()- Returns true if the argument is a safe integer.
   - Number.parseFloat()- Converts a string to a number.
   - Number.parseInt()- Converts a string to a whole number. */


  //Example-1
  console.log(Number.isInteger(10));          // Output: true
  console.log(Number.isInteger(10.5));        // Output: false
  console.log(Number.isSafeInteger(10));      // Output: true
  console.log(Number.parseInt("10"))          // Output: 10
  console.log(Number.parseInt("10.33"))       // Output: 10
  console.log(Number.parseInt("10 20 30"))    // Output: 10
  console.log(Number.parseInt("10 years"))    // Output: 10
  console.log(Number.parseInt("years 10"))    // Output: NaN
  console.log(Number.parseFloat("10"))        // Output: 10
  console.log(Number.parseFloat("10.33"))     // Output: 10.33





/* H. METHODS OF NUMBERS LITERAL
  1. toString()- Returns a number as a string.
  2. toExponential()- Returns a number written in exponential notation.
  3. toFixed()- Returns a number after decimal written with a specified length. Rounding off
     according to that.
  4. toPrecision()- Returns a complete number written with a specified length. Rounding off
     according to that.
  5. valueOf()- The valueOf() method is used internally in JavaScript to convert Number Objects to
     Primitive Values. */

  //Example-1
  let x11 = 123;
  let y11 = x11.toString(); 
  console.log(typeof y11); // Output: string

  let x12 = 9.656;
  let y12 = x12.toFixed(0); // Output: 10
  let z12 = (x12).toFixed(2); // Output: 9.66
  let a12 = (x12).toFixed(4); // Output: 9.6560

  let x13 = 12345;
  let y13 = x13.toExponential(); // Output: 1.2345e+4

  let x14 = 9.656;
  let y14 = x14.toPrecision(2); // Output: 9.7
  let x16 = 9656;
  console.log(x16.toPrecision(1)); // Output: 9.6
  
  let x15 = new Number(123);;
  let y15 = x15.valueOf();
  console.log(typeof y15); // Output: number




/* I. EXPLICIT TYPE CONVERSION USING METHODS
  1. There are 3 JavaScript methods that can be used to convert a variable to a number.
    - Number(): Converts a Numeric Variable to a number. If it's not Numeric Variable it will 
      return NaN. Number() can also convert a date to a number. The Date() method returns the
      number of milliseconds since 1.1.1970. Spaces are not allowed in between.
    - parseInt(): parseInt() parses a string and returns a whole number. Spaces are allowed.
      Only the first number(if it is) is returned. If the number cannot be converted, NaN 
      (Not a Number) is returned.
    - parseFloat() parses a string and returns a number. Spaces are allowed. Only the first 
      number is returned. If the number cannot be converted, NaN (Not a Number) is returned. */


  //Example-1
  console.log(Number(true))     // Output: 1 **
  console.log(Number(false))    // Output: 0 **
  console.log(Number("10"))     // Output: 10
  console.log(Number("  10"))   // Output: 10
  console.log(Number("10  "))   // Output: 10
  console.log(Number(" 10  "))  // Output: 10
  console.log(Number("10.33"))  // Output: 10.33
  console.log(Number("10,33"))  // Output: NaN **
  console.log(Number("10 33"))  // Output: NaN **
  console.log(Number("John"))   // Output: NaN **
  console.log(Number(null))     // Output: 0 **
  console.log(Number(new Date("2024-01-01")))  // Output: 1704067200000 **
  console.log(typeof Number(true))     // Output: number **
  
  
  //Example-2
  parseInt("-10");      // Output: -10
  parseInt("-10.33");   // Output: -10
  parseInt("10");       // Output: 10
  parseInt("10.33");    // Output: 10
  parseInt("10 20 30"); // Output: 10
  parseInt("10 years"); // Output: 10
  parseInt("years 10"); // Output: NaN
  
  
  //Example-3
  parseFloat("10");       // Output: 10
  parseFloat("10.33");    // Output: 10.33
  parseFloat("10 20 30"); // Output: 10
  parseFloat("10 years"); // Output: 10
  parseFloat("years 10"); // Output: NaN


