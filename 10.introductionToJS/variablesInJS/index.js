// CHAPTER-2- VARIABLES IN JAVASCRIPT

/* A. VARIABLES- INTRODUCTION
  1. Variables are containers for storing values.
  2. JavaScript Variables can be DECLARED in FOUR Ways:
    a) Automatically
    b) Using var
    c) Using let
    d) Using const
  3. It is considered good programming practice to always declare variables before use.
  4. The var keyword was used in all JavaScript code from 1995 to 2015. The let and const 
     keywords were added to JavaScript in 2015. */


  //Example-1
  var a = 4;
  let b = 5;
  const c = 6;
      



/* B. CONST
  1. Variables defined with const cannot be Redeclared.
  2. Variables defined with const cannot be Reassigned.
  3. Variables defined with const have Block Scope. They are not attached to the Window Object 
     as property.
  4. JavaScript const variables must be assigned a value when they are declared.
  5. Always declare a variable with const when you know that the value should not be changed. */


  //Example-1
  const d =4;
  // const d = 5; Error-1
  // d = 5;       Error-2
  // const e;     Error-4
  // e =4;




/* C. LET
  1. Variables defined with let cannot be Redeclared.
  2. Variables defined with let can be Reassigned.
  3. Variables defined with let have Block Scope. They are not attached to the Window Object 
     as property.
  4. Variables defined with let must be Declared before use. */


   //Example-1
   let f;
   f=3;
   // let f = 5;   Error-2
   f = f + 1;        
   console.log(f);




/* D. VAR
  1. Variables defined with var can be Redeclared.
  2. Variables defined with var can be Reassigned.
  3. Variables defined with var have Global Scope. Unlike let and const, var declarations
     are not Block-Scoped. This means they are not confined to the nearest enclosing curly
     braces, which can lead to unintended VARIABLE LEAKS. Variables declared with var are
     function-scoped, meaning they are only accessible within the function in which they 
     are defined or globally if not defined within a function. This can lead to unexpected 
     behavior. They are attached to the Window Object as property.
  4. Variables defined with var need not be Declared before use. */


  //Example-1
  var g = 4;
  var g = 5;   
  g =9;

  if (true) {
    var z = 100;
  }
  console.log(z); // Output-> 100

  var v;
  console.log(v); // Output-> undefined




/* E. COMPARISON BETWEEN LET, CONST AND VAR  [LT]][DASH]
  1. let and const have block scope.
  2. let and const can not be redeclared.
  3. let and const must be declared before use.
  4. let and const does not bind to this.
  5. let and const are not hoisted.
  6. var does not have to be declared.
  7. var is hoisted.
  8. var binds to this. */
  //Note: To Learn Differences Refer- learnDifference.png


  //Example-1 Global scope
  var globalVar = 10;                //Global Memory and a property of window.
  let blockVar = 20;                 //Global Memory but not a property of window.
    
  console.log(window.globalVar);     // Output->10
  console.log(window.blockVar);      // Output-> undefined (Not attached to Window Object)

   //Example-2 Block scope
  {
   
    let blockVar2 = 30;
    console.log(blockVar);         // Output->20 (Accessible in the Same Block)
  }
    
  console.log(blockVar2);          // Output-> ReferenceError: [blockVar2 is not defined (Outside the Block)]


  //Example-3 Allowed/NotAllowed
  var x = 2;   // Allowed
  let x = 3;   // Not allowed
      
  {
    let x = 2;  // Allowed
    var x = 3;  // Not allowed
  }
      
  let y = 2;    // Allowed
      
  {
    let y = 3;  // Allowed
  }
      
  {
    let y = 4;   // Allowed
  }




/* F. DYNAMIC TYPING VS STATIC TYPING
  1. JavaScript is primarily a dynamically typed language, but it also exhibits some static typing 
     features in certain contexts.
  2. Dynamic Typing (JavaScript's Default): 
     - In a dynamically typed language like JavaScript, we don't need to explicitly declare the data
       types of variables. 
     - JavaScript determines the data type of a variable at runtime based on the value it currently holds.
     - This allows for flexibility but can lead to TYPE-RELATED RUNNTIME ERRORS.
  3. Static Typing (TypeScript):
     - In a statically typed language, we must explicitly declare the data type of a variable before
       using it. 
     - This is usually done using type annotations. Statically typed languages perform type
       checking at compile time. If there's a type mismatch, the code won't compile, preventing many 
       common type-related errors. 
  4. TypeScript: Although JavaScript itself is dynamically typed, TypeScript is a statically typed 
     superset of JavaScript. */


  //Example-1  
  let i =67;
  console.log(i);    //At Runntime it was decided the datatype was integer.
    
  i = "Soumya";      //At Runntime it was decided the datatype was String.
  console.log(a);




/* G. RULES- VARIABLE NAME
  1. Variable names must start with a letter, an underscore (_) or a dollar sign ($).
  2. Variable names cannot contain spaces.
  3. Variables cannot be the same as reserved keywords such as if or const.
  4.By convention, JavaScript variable names are written in camelCase.
  5. Variables should be given descriptive names that indicate their content and usage 
     (e.g. sellingPrice and costPrice rather than x and y).
  6. As JavaScript variables do not have set types, it can be useful to include an indication of the 
     type in the name (e.g. orderNumber is obviously a numeric ID, whereas order could be an object, 
     a string or anything else). */




/* H. VARIABLE VS IDENTIFIER
  1. Identifier: An identifier in JavaScript is a name given to a variable, function, class, object 
     property, or function parameter. It's essentially a label used to reference some entity in your
     code. Identifiers are used to uniquely identify and access these entities within the program.
  2. Variable: A variable is a specific type of identifier in JavaScript that represents a storage
     location in memory where you can store and retrieve values. Variables are used to store data 
     that can change or vary  during the execution of a program. */



