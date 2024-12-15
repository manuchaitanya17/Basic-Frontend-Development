//CHAPTER-3 DATA TYPES IN JAVASCRIPT

/* A. INTRODUCTION TO DATATYPES
  1. There are two types of Data Type in JS.
    a) Primitive Data Type   
    b) Non-Primitive/Object Data Type */



/* B. PRIMITIVE DATA TYPES 
  1. Fundamental and Built-in.
  2. There are SEVEN Primitive Data Type.
    a) String: A string (or a text string) is a series of characters like "John Doe". We can use
               single or double quotes. String in JS are Primitive and Non-Primitive both. It depends 
               on how it is declared. 
               
    b) Number: Numbers can be written with, or without decimals. Extra large or extra small numbers
               can be written with scientific (exponential) notation. Javascript numbers are always
               one type -> double (64-bit floating point).

    c) BigInt: JavaScript BigInt is a new datatype (ES2020) that can be used to store integer values
               that are too big to be represented by a normal JavaScript Number.
               
    d) Boolean: Booleans can only have two values: true or false.
    
    e) Undefined: In JavaScript, a variable without a value, has the value undefined. The type is
                  also undefined. Any variable can be emptied, by setting the value to undefined. 
                  The type will also be undefined.
                  
    f) Null: A null value in JavaScript is used for referring absence of any object value. It is 
             often used to initialize variables that are meant to later hold an object reference.
             Using typeof null returns "object", which is often surprising but is a well-known quirk 
             in JavaScript.
             
             
    g) Symbol: Symbol is a built-in object whose constructor returns a symbol primitive — also called
               Symbol — that's guaranteed to be unique. Note that Symbol does not coerce the 
               string into a Symbol. It creates a new Symbol each time.
    
  3. typeof Field is used to check the datatype of any variable. */

  
  //Example-1 Strings
  let color = "Yellow";
  let lastName = "Johnson";


  //Example-2 Numbers
  let length = 16;
  let weight = 7.5;
  let a = 123e5;    //For- 12300000 = 123 * 10^5
  let z = 123e-5;   //For- 0.00123  = 123 * 10^-5


  //Example-3 BigInt
  let t = BigInt("123456789012345678901234567890");


  //Example-4 Booleans
  let x = true;
  let y = false;


  //Example-5 Undefined
  let car;            //Note- Value is undefined, type is undefined
  car = undefined;    //Note- Value is undefined, type is undefined


  //Example-6 Null
  let obj = null;
  console.log(typeof obj) //Output- object


  //Example-7 Symbol
  const sym1 = Symbol();
  const sym2 = Symbol("foo");
  const sym3 = Symbol("foo");
  Symbol("foo") === Symbol("foo"); 
  console.log(typeof x);



/* C. NON-PRIMITIVE DATA TYPES 
  1. The object data type can contain:
    a) An Object
    b) An Array
    c) A Date */

  //Example-1 Object
  const person = { firstName: "John", lastName: "Doe" };


  //Example-2 Array Oject
  const cars = ["Saab", "Volvo", "BMW"];


  //Example-3 Date Object
  const date = new Date("2022-03-25");



/* D. PASS BY VALUE VS PASS BY REFERENCE- Same as JAVA */



/* E. DATA TYPE COERCION  [LT][SBLEN]
  1. Implicit type coercion in javascript is the automatic conversion of value from one data type to another. It takes
     place when the operands of an expression are of different data types.
  2. String coercion takes place while using the ‘ + ‘ operator. When a number is added to a string, the number type 
     is always converted to the string type. ‘ + ‘ operator when used to add two numbers, outputs a number. The same
     ‘ + ‘ operator when used to add two strings, outputs the concatenated string. [STRING >>> NUMBER]
  3. Type coercion also takes place when using the ‘ - ‘ operator, but the difference while using ‘ - ‘ operator is that,
     a string is converted to a number and then subtraction takes place. 
  4. When using the ‘ * ‘ operator, the string is converted to a number and then multiplication takes place. 
  5. When using the ‘ / ‘ operator, the string is converted to a number and then division takes place. For every other 
     operator, the string is converted to a number and then the operation takes place. [STRING <<< NUMBER]
  6. Boolean coercion takes place when using logical operators, ternary operators, if statements, and loop checks. To 
     understand boolean coercion in if statements and operators, we need to understand truthy and falsy values. Truthy
     values are those which will be converted (coerced) to true. Falsy values are those which will be converted to false.
     All values except false, 0, 0n, -0, “”, null, undefined, [] and NaN are truthy values.
  7. Logical operators in javascript, unlike operators in other programming languages, do not return true or false. They
     always return one of the operands. OR ( | | ) operator - If the first value is truthy, then the first value is 
     returned. Otherwise, always the second value gets returned. AND ( && ) operator - If both the values are truthy,
     always the second value is returned. If the first value is falsy then the first value is returned or if the second 
     value is falsy then the second value is returned.
  8. Equality coercion takes place when using ‘ == ‘ operator. As we have stated before. The ‘ == ‘ operator compares values
     and not types. While the above statement is a simple way to explain == operator, it’s not completely true. The reality
     is that while using the ‘==’ operator, coercion takes place. The ‘==’ operator, converts both the operands to the same
     type and then compares them.
  9. Coercion does not take place when using the ‘===’ operator. Both operands are not converted to the same type in the
     case of ‘===’ operator. 
  10. null is loosely equal to both undefined and false.  */


  //Example-1 String Coercion
  var x8 = 3;
  var y8 = "3";
  console.log(x8 + y8); // Outputs: 33

  var x9 = 3;
  var y9 = "3";
  console.log(x9 - y9); // Outputs: 0


  //Example-2 Boolean Coercion
  var x3 = 0;
  var y3 = 23;
  console.log("1" == true); // Output: true

  if(x3) { console.log(x3) }   // The code inside this block will not run since the value of x is 0(Falsy)  

  if(y3) { console.log(y3) }   // The code inside this block will run since the value of y is 23 (Truthy)


  //Example-3 Logical Operators
  var x4 = 220;
  var y4 = "Hello";
  var z4 = undefined;

  console.log(x4 || y4); // Outputs: 220
  console.log(x4 || z4); // Outputs: 220
  console.log(y4 && z4); // Outputs: undefined


  //Example-4 Equality Coercion
  var a3 = 12;
  var b3 = "12";
  console.log(a3 == b3); // Outputs: true



/* F. INTRODUCTION TO OPERATORS
  1. 7(Operand) +(Operator) 8(Operand) = 15(Result).
  2. There are different types of JavaScript operators: Refer png files.
     a) Arithmetic Operators
     b) Assignment Operators
     c) Comparison Operators
     d) String Operators
     e) Logical Operators
     f) Bitwise Operators
     g) Ternary Operators
     h) Type Operators */


  //Example-1 Type Operators
  let x1 = 10;
  let y1 = 'Hello';
  let z1 = true;
  let b1 = null;
  var c1;
  let d1 = 123n;
  let e1 = Symbol("foo");
  let f1 = {key: "value"};
  let g1 = [1, 2, 3];
  function h1() {
      return "Function";
  }
  let i1 = new Date();
  let j1 = ()=>{
    return "Arrow Function";
  }
  let k1 = function(){
    return "Function Expression";
  }

  console.log(typeof x1); // Output: "number"
  console.log(typeof y1); // Output: "string"
  console.log(typeof z1); // Output: "boolean"
  console.log(typeof b1); // Output: "object" **
  console.log(typeof c1); // Output: "undefined"
  console.log(typeof d1); // Output: "bigint"
  console.log(typeof e1); // Output: "symbol" **
  console.log(typeof f1); // Output: "object"
  console.log(typeof g1); // Output: "object" **
  console.log(typeof h1); // Output: "function" **
  console.log(typeof i1); // Output: "object" **
  console.log(typeof j1); // Output: "function" **
  console.log(typeof k1); // Output: "function" **




/* G. == VS ===
  1. Both are comparison operators. The difference between both the operators is that “==” is used to 
     compare VALUES whereas, “ === “ is used to compare both VALUES and TYPES. 
  2. Loosely Compared Data Types: 
    - null and undefined: When using loose equality (==), null and undefined are considered equal to
      each other but not to any other value. */


  //Example-1 
  var x5 = 2;
  var y5 = "2";
  console.log(x5 == y5)  // Ouput: true
  console.log(x5 === y5) // Ouput: false
  

  //Example-2 undefined and null
  console.log(null == undefined); // Output: true
  console.log(null == 0); // Output: false
  console.log(undefined == 0); // Output: false



  /* H. DEBUGGER IN JAVASCRIPT
  1. The debugger for the browser must be activated in order to debug the code. 
  2. The remaining section of the code should stop execution before moving on to the next line while
     debugging. */