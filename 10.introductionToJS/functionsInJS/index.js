//CHAPTER-6 FUNCTIONS IN JAVASCRIPT

/* A. INTRODUCTION TO FUNCTIONS
  1. A JavaScript function is a block of code designed to perform a particular task.
  
  2. A JavaScript function is executed when "something" invokes it (calls it). 
  
  3. JavaScript functions are defined with the function keyword.
  
  4. Using function KEYWORD either we can (I)DECALRE a Function or write a (II)Function EXPRESSION.
  
  5. More over we can also write a function as (III)FUNCTION CONSTRUCTOR and (IV)SELF ENVOKING 
     FUNCTION.
     
  6. The functions that does not belong to any object. But in JavaScript there is always a default 
     global object.In HTML the default global object is the HTML page itself, so the function above
     "belongs" to the HTML page. In a browser the page object is the browser window. The function 
     above automatically becomes a window function. */



/* B. FUNCTION DECLARATION
  1. Declared functions are not executed immediately. They are "saved for later use", and will be 
     executed later, when they are invoked (called upon).
  
  2. Semicolons are used to separate executable JavaScript statements. Since a function declaration
     is not an executable statement, it is not common to end it with a semicolon. 
     
  3. Variables declared within a JavaScript function, become LOCAL to the function. Local variables 
     can only be accessed from within the function. Much discussed how it works internally. Local 
     variables are created when a function starts, and deleted when the function is completed.
  
  4. A JavaScript function is defined with the function keyword, followed by a name, followed by 
     parentheses. 
     
  5. Function PARAMETERS are listed inside the parentheses () in the function definition. Function 
     ARGUMENTS are the values received by the function when it is invoked.
  
  6. Inside the function, the arguments (the parameters) behave as local variables.
  
  7. When JavaScript reaches a return statement, the function will stop executing. Functions often 
      compute a return value. The return value is "returned" back to the "caller".
  
  8. The () operator invokes (calls) the function. Accessing a function without () returns the 
     function and not the function result. Function Called can be used the same way as you use 
     variables, in all types of formulas, assignments, calculations. */


    //Example-1
    function myFunction(a, b) {
      return a * b;
    }
    myFunction(1,2);

    //Example-2
    function toCelsius(fahrenheit) {
      return (5/9) * (fahrenheit-32);
    }
    console.log(toCelsius);  
    let x = toCelsius();
    let text = "The temperature is " + x + " Celsius";




/* C. FUNCTION EXPRESSION
  1. A JavaScript function can also be defined using an expression. A function expression can be 
     stored in a variable.
     
  2. After a function expression has been stored in a variable, the variable can be used as a function.
  
  3. The function above is actually an anonymous function (a function without a name).
  
  4. Functions stored in variables do not need function names. They are always invoked (called) using
     the variable name.
     
  5. The function ends with a semicolon because it is a part of an executable statement. Whenever we
     write function inside an object then write it as function expression. */


    //Example-1
    const x1 = function (a, b) {
      return a * b};
    let z = x1(4, 3);



/* D. FUNCTION CONSTRUCTOR
  1. Functions can also be defined with a built-in JavaScript function constructor called Function(). */


    //Example-1
    const myFunction3 = new Function("a", "b", "return a * b");
    
    let x2 = myFunction2(4, 3);




/* E. SELF/IMMEDIATELY INVOKING FUNCTION(IIFE)
  1. Function expressions can be made "self-invoking". A self-invoking expression is invoked (started) 
     automatically, without being called. Function expressions will execute automatically if the expression
     is followed by (). 
     
  2. We cannot self-invoke a function declaration. We have to add parentheses around the function to
     indicate that it is a function expression. The function above is actually an anonymous self-invoking 
     function (function without name).
     
  3. While executing javascript code, whenever the compiler sees the word “function”, it assumes that 
     we are declaring a function in the code. Therefore, if we do not use the first set of parentheses, 
     the compiler throws an error because it thinks we are declaring a function, and by the syntax of
     declaring a function, a function should always have a name. To remove this error, we add the first
     set of parenthesis that tells the compiler that the function is not a function declaration, instead,
     it’s a function expression.
     
  4. From the definition of an IIFE, we know that our code should run as soon as it is defined. A func-
     tion runs only when it is invoked. If we do not invoke the function, the function declaration is 
     returned. */


    //Example-1
    (function () {
      console.log("I am Self Envoked Function"); 
    })();



/* F. FUNCTION PARAMETERS AND ARGUMENTS
  1. A JavaScript function does not perform any checking on parameter values. Function parameters are
     the names listed in the function definition.
  
  2. Function arguments are the real values passed to (and received by) the function.  JavaScript 
     function definitions do not specify data types for parameters.  JavaScript functions do not perform 
     type checking on the passed arguments.
  
  3. JavaScript functions do not check the number of arguments received. If a function is called with
     missing arguments (less than declared), the missing values are set to "undefined". Sometimes this
     is acceptable, but sometimes it is better to assign a default value to the parameter. [n(P) > n(A)]
     
  4. ES6 allows function parameters to have default values.
  
  5. The Rest Parameter (...) allows a function to treat an indefinite number of arguments as an array.
     JavaScript arguments are passed by value. The function only gets to know the values, not the 
     argument's locations. If a function changes an argument's value, it does not change the 
     parameter's original value. [n(P) < n(A)]
      
  6. In JavaScript, object references/address are values. Because of this, objects will behave like
      they are passed by reference. If a function changes an object property, it changes the original
      value. */


    //Example-1
    function myFunction1(x, y) {   //Note: y is undefined.
      if (y === undefined) {
        y = 2;
      }
    }
    myFunction1(5);

    //Example-2
    function myFunction2(x, y = 10) {  //Note: Here y has a default value.
      return x + y;
    }
    myFunction2(5);

    //Example-3
    function sum(x, y, ...args) {
      let sum = 0;
      for (let arg of args) 
        sum += arg;
      return sum;
    }
    
    let x5 = sum(4, 9, 16, 25, 29, 100, 66, 77);


    //Example-4
    function test(...args) {
      console.log(typeof args);
    }
    test(12);  //Object


    //Example-5
    function swap(a, b){
      let temp = a;
      a = b;
      b = temp;
    }
    let s1 = 2;
    let s2 = 3;
    swap(s1, s2);
    console.log(s1); //Output: 2
    console.log(s2); //Output: 3


    //Example-6
    function changeObjectValue(arr){
      arr[0] = 33;
    }
    let nums =[1,2,3,4,5];
    changeObjectValue(nums);
    console.log(nums); //Output: [33, 2, 3, 4, 5];




/* H. FUNCTION ARE OBJECTS 
  1. The typeof operator in JavaScript returns "function" for functions. But, JavaScript functions can
     best be described as objects.
     
  2. JavaScript functions have both properties and methods. The arguments.length property returns the 
     number of parameters provided when the function was declared. */

    //Example-1
    function myFunction4(a, b) {
      return arguments.length;
    }
    let c = myFunction4(1);
    let d = myFunction.toString();
    let e = myFunction.length;  //Output: 2
    console.log(d);


    //Example-2 What happens when we run this code?
    function dog() {
      console.log("I am a dog.");
    }
    dog.sound = "Bark"; //Output: No Error!




/* I. FUNCTION INVOKING 
  1. The code inside a JavaScript function will execute when "something" invokes it. The code inside a 
     function is executed when the function is invoked.  */


    //Example-1
    function myFunction5(a, b) {
      return a * b;
    }
    myFunction5(10, 2);



/* J. ARROW FUNCTION
  1. Arrow functions were introduced in ES6. Arrow functions allow us to write shorter function syntax.
     It gets shorter! If the function has only one statement, and the statement returns a value, we can
     remove the brackets and the return keyword. */


    //Example-1
    let myFunction7 = (a, b) => {
      return a * b;  
    }

    //Example-2
    let myFunction8 = (a, b) => a * b;  //Same as myFunction7
  
    //Example-3
    let hello3 = () => {
      return "Hello World!";
    }




/* K. MEMORY MANAGEMENT OF FUNCTIONS  
  1. Global Execution Context Creation: The JavaScript engine creates the Global Execution Context.
     It hoists the variable declarations (var xV;) and function declarations (function a() { ... } and
     function b() { ... }) to the left of the Global Execution Context in first phase.The Global Execution 
     Context is pushed onto the Call Stack.

  2. Variable Initialization: The variable xV is initialized with the value 1 in phase 2 in GEC. The Call 
     Stack currently has only the Global Execution Context.

  3. Function a() Call: The engine encounters the function call a(). A new Execution Context for the a 
     function is created and pushed onto the Call Stack. Inside the a function's Execution Context, the
     variable xV is hoisted and initialized with undefined. The line var xV = 10; is executed, and the 
     local variable xV is assigned the value 10. The console.log(xV) statement outputs 10 to the console.
     The a function's Execution Context is removed from the Call Stack after execution completes.

  4. Function b() Call: The engine encounters the function call b(). A new Execution Context for the b
     function is created and pushed onto the Call Stack. Inside the b function's Execution Context, the 
     variable xV is hoisted and initialized with undefined. The line var xV = 100; is executed, and the 
     local variable xV is assigned the value 100. The console.log(xV) statement outputs 100 to the console.
     The b function's Execution Context is removed from the Call Stack after execution completes.

  5. Global Execution Context Continuation: The engine returns to the Global Execution Context, which is 
     still on the Call Stack. The console.log(xV) statement outputs 1 to the console, as the global 
     variable xV was initialized with 1 at the beginning. The Global Execution Context is removed from the
     Call Stack, and the program execution completes. */


  //Example-1
  var xV = 1;
  a(); //Output: 10
  b(); //Output: 100
               
   function a(){
     var xV = 10;
     console. log(xV); 
   }

  
   function b() {
      var xV = 100;
      console. log(xV);
   }

   console.log(xV); //Output: 1
