//CHAPTER-5 HISTORY OBJECT

/* A. INTRDUCTION TO HISTORY OBJECT
  1. The window.history object contains the browsers history. It contains two Stack DS.
     Backward History Stack and Forward History Stack.
  
  2. To protect the privacy of the users, there are limitations to how JavaScript/Developers
     can access this object.
     
  3. The history object in JavaScript represents the browsing history of the current tab or
     window. It allows us to navigate backward and forward through the history stack, manip-
     ulate the browsing history, and access information about previously visited pages.
     
  4. The history object is created by the browser during the initialization process when a new
     browsing session begins.*/



/* B. PROPERTIES AND METHODS OF HISTORY OBJECT
  1. length: Returns the number of entries in the history stack.
  
  2. state: Returns the state object associated with the current entry in the history stack.
  
  3. back(): Moves the browser back one entry in the history stack. Equivalent to clicking the
     browser's "back" button. Push the Peek(Current Page) into Forward Stack/History. Now the
     Peek is the page before the current page, so that become the new current page.
     
  4. forward(): Moves the browser forward one entry in the history stack. Equivalent to clicking
     the browser's "forward" button.
     
  5. go(delta): Moves the browser delta entries in the history stack. Positive values for delta
     move forward, and negative values move backward. */


   //Example-1
   console.log(history.length);
   
   //Example-2
   console.log(history.state);
   
   //Example-3
   // history.back();
   
   //Example-4
   // history.forward();
   
   //Example-5
   // history.go(2);


