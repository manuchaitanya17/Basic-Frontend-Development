//CHAPTER-11 STRICT MODE IN JAVASCRIPT

/* A. WHAT IS STRICT MODE 
  1.The purpose of "use strict" is to indicate that the code should be executed in "strict mode". Strict 
    mode is declared by adding "use strict"; to the beginning of a script or a function.
    
  2. Declared at the beginning of a script, it has global scope, all code in the script will execute in
     strict mode.
     
  3. In 'Strict mode,' however, all forms of errors, including silent errors, will be thrown. As a result,
     debugging becomes a lot simpler. Thus programmer's chances of making an error are lowered. */


  //Example-1
  "use strict";
  x = 3.14;  //Output: Uncaught ReferenceError: y is not defined.

  myFunction();
  function myFunction() {
    y = 3.14;   //Output: Uncaught ReferenceError: y is not defined.
  }


  //Example-2
  x = 3.14;  //Output: 3.14
  myFunction();

  function myFunction() {
    "use strict";
    y = 3.14;   //Output: Uncaught ReferenceError: y is not defined.
  }



/* B. NOT ALLOWED IN STRICT MODE
  1. Using a Variable, without declaring it, is not allowed. Using an object, without declaring it, is not
     allowed.''
  2. Deleting a variable (or object) is not allowed. Deleting a function is not allowed. Deleting an 
     undeletable property is not allowed.
     
  3. Duplicating a parameter name is not allowed.
  
  4. Octal numeric literals are not allowed. Octal escape characters are not allowed.
  
  5. Writing to a read-only property is not allowed. Writing to a get-only property is not allowed.

  6. The word eval cannot be used as a variable.
  
  7. The this keyword in functions behaves differently in strict mode. The this keyword refers to the 
      object that called the function. If the object is not specified, functions in strict mode will return
      undefined and functions in normal mode will return the global object (window).
      
  8. In strict mode, we won't be able to use the JavaScript keyword as a parameter or function name. */


  //Example-1
  "use strict";
   let c = 3.14;
   // delete c; //Output: SyntaxError: Delete of an unqualified identifier in strict mode.


   //Example-2
   "use strict";
   // let x = 010; //Output: SyntaxError: Invalid octal literal.


   //Example-3
   "use strict";
   // let x = "\010";  //Output: SyntaxError: Escape Characters are not allowed in strict mode.

