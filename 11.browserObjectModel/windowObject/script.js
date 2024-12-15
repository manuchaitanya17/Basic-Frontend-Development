//CHAPTER-2 WINDOW OBJECT

/* A. INTRODUCTION TO WINDOW OBJECT
  1.The window object is supported by all browsers. It represents the browser's window.
  
  2. All Global JavaScript Objects, functions, and variables automatically become members of the
     window object.
     
  3. Global variables are properties of the window object. For example, if you declare a global
     variable x, it becomes a property of the window object (window.x). Global functions are
     methods of the window object.
  
  4. Document Object itself is a property of the window object. It offers access to the document
     object, allowing manipulation of the document structure, handling events, and accessing ele-
     ments within the DOM (window.document).
     
  5. All the other BOM Obejcts are properties of the window object.
  
  6. The window object provides methods and properties for controlling the browser window, such as 
     resizing, moving, opening, and closing windows or tabs (window.resizeTo(), window.moveTo(),
     window.open(), window.close()).
     
  7. The window object provides methods for setting timers and intervals, allowing code execution
     at specified intervals (setTimeout(), setInterval()). The window object provides an interface 
     for handling JavaScript errors (window.onerror). */


  //Example-1
  let someObject = window.document.getElementById("header");




/* B. WINDOW OBJECT PROPERTIES
  1. window.innerHeight -The inner height of the browser window where webpage is displayed (in pixels).
  
  2. window.innerWidth - The inner width of the browser window where webpage is diplayed (in pixels).
  
  3. window.outerWidth / window.outerHeight - The outer width / outer height of the browser window where
     webpage is diplayed. They includes the height and width of the browser's toolbars and scrollbars.
  
  4. window.localStorage / window.sessionStorage - Provide access to the browser's local storage 
     and session storage mechanisms, respectively.
     
  5. Browser's window typically includes a Tiltlebar, Toolbar and Scrollbar as part of its user interface. */


  //Example-1
  let innerHeight = window.innerHeight;


  //Example-2
  let innerWidth = window.innerWidth;


  //Example-3
  let outerWidth = window.outerWidth;
  let outerHeight = window.outerHeight;


  //Example-4
  let localStorage = window.localStorage;
  let sessionStorage = window.sessionStorage;




/* C. WINDOW OBJECT METHODS
  1. window.open() - Open a new window. Returns a reference to the newly opened window/tab as a
     Window object.
  
  2. window.close() - Close the current window. In most modern browsers, if window.close() is
     called from a script within a tab (not in a standalone window opened with window.open()), it
     typically closes the current tab instead of the entire browser window. This method does not 
     return a value. It simply closes the window or tab from which it was called.
  
  3. window.moveTo()
   - The window.moveTo() method is a part of the window object in JavaScript, and it 
     allows us to move the current browser window to a specified position on the screen. This 
     method is typically used to reposition the browser window programmatically.
   - The moveTo() method takes two parameters: the x-coordinate and y-coordinate of the new position 
     for the top-left corner of the window, relative to the screen. window.moveTo(x, y). 
   - x: The horizontal coordinate (in pixels) of the new position for the top-left corner of the 
     window. This parameter is optional. If not specified, the window will remain in its current hor-
     izontal position.
   - y: The vertical coordinate (in pixels) of the new position for the top-left corner of the window. 
     This parameter is optional. If not specified, the window will remain in its current vertical
     position.
   - The coordinates (0, 0) represent the top-left corner of the screen.
   - Coordinates are relative to the screen, not the browser viewport or any specific element on the
     webpage.
   - The ability to move the window programmatically may be restricted or blocked by browser settings,
     security policies, or user preferences, especially in modern browsers where user experience and
     security are prioritized. 
   - window.moveTo() repositions the window to the specified coordinates on the user's screen. It does 
     not return anything as it directly modifies the window's position.
     
  4. window.resizeTo() 
   - The window.resizeTo() method is used to resize the current browser window to a specified width
     height.
   - Here's how it works: window.resizeTo(width, height); 
     width: The new width (in pixels) of the browser window.
     height: The new height (in pixels) of the browser window.
   - Some browsers may restrict the ability to resize windows programmatically, especially if the 
     script is not running in a trusted context or if the user's browser settings disallow it.
   - Attempting to resize the window to dimensions larger than the user's screen resolution may be
     prevented by the browser for security and usability reasons.
   - It's generally considered bad practice to resize the browser window without the user's consent,
     as it can interfere with their browsing experience and may be perceived as intrusive. This method 
     does not return a value. */


  
  //Example-1
  let openWindow = window.open("https://www.google.com");
  /* Output: Opens a new window with the specified URL. Popups may be blocked by browser settings or
    security policies. */
  
  
  //Example-2
  let closeWindow = window.close();
  /* Output: Closes the current window. */
  
  
  //Example-3
  let moveWindow = window.moveTo(100, 100);
  /* Output: Here the top-left corner of the browser window will be moved to the coordinates (100, 
     100) on the screen. */
  
  
  //Example-4
  let resizeWindow = window.resizeTo(500, 500);
  /* Output: Here the browser window will be resized to a width of 500 pixels and a height of 500
     pixels. */




/* D. BROWSER'S USER INTERFACE
  1. The browser's user interface (UI) refers to the visual and interactive components that make up 
     the browser's graphical user interface (GUI). It's the part of the browser that the user dir-
     ectly interacts with.

  2. The browser's user interface (UI) typically includes the following key elements:
   - Address Bar: This is the area where the user can enter website URLs or search queries.
   - Navigation Buttons: These are the buttons that allow the user to navigate between web pages, 
     such as the Back, Forward, Refresh, and Home buttons.
   - Tabs: Most modern browsers allow the user to open multiple web pages in different tabs within 
     the same browser window.
   - Menus and Settings: The browser provides various menus and settings that allow the user to cus-
     tomize the browser behavior, manage bookmarks, clear browsing data, and more.
   - Scrollbars: These are the visual elements that allow the user to scroll through web pages that
     are longer than the browser window.
   - Status Bar: This area at the bottom of the browser window displays information about the current
     web page, such as the loading progress or the URL of the link under the mouse cursor.
   - Extensions/Add-ons: Many browsers also allow users to install additional extensions or add-ons 
     that enhance the browser's functionality and user interface.
     
  3. The browser's user interface is typically implemented using a combination of HTML, CSS, and JS. 
     The browse rendering engine (e.g., Blink, Gecko) is responsible for displaying the user interface
     elements, while the browser's JavaScript engine handles the interactive behavior and functionality. */




/* E. WINDOW POPUP METHODS 
  1. The JavaScript popup boxes, such as alert(), confirm(), and prompt(), are provided by the browser
     built-in JavaScript Engine, UI Layer and Browser's Rendering Engine. 
     
  2. The Browser's UI Layer refers to the component(s) within the Browser's Architecture that are res-
     ponsible for rendering and managing the user interface (UI) elements of the Browser.

  3. This rendering process involves parsing the HTML, CSS, and JavaScript that define the structure
     and appearance of the UI from the inbuilt codes and then producing the visual representation of 
     these elements.
     
  4. Here's a step-by-step explanation of how they work internally:
   - Function Invocation: When the web application or JavaScript code calls one of the popup box fun-
     ctions alert("Hello,world!")), the browser's JavaScript engine receives the function call. The JS
     Engine checks the window prompt method in the heap, collects the script and passes it to UI Layer.
     
   - Browser Integration: The JavaScript engine is integrated with the browser's user interface (UI)
     components, which allows it to create and display the popup boxes.
     
   - UI Element Creation: The JavaScript engine instructs the browser's UI layer to create the appr-
     opriate popup box element based on the function called (e.g., an alert box, a confirm dialog, or
     a prompt dialog).
     
   - Element Styling and Layout: The browser's layout engine takes the generated UI elements and app-
     lies the appropriate styling and positioning to make the popup box visually appealing and properly
     placed on the screen.
     
   - Event Handling: The browser's UI layer also sets up event listeners and handlers for the popup box, 
     such as handling user interactions (e.g., clicking the "OK" button, closing the dialog).
     
   - Synchronous Execution: The JavaScript engine that invoked the popup box function continues to 
     execute synchronously, waiting for the user's interaction with the popup box. This means that the 
     execution of the JavaScript code is paused until the user dismisses the popup box.
     
   - User Interaction: When the user interacts with the popup box (e.g., clicks a button, closes the 
     dialog), the browser's UI layer triggers the corresponding event handlers.
     
   - Return Value: Depending on the type of popup box, the JavaScript Engine will receive a value based
     on the user's interaction (e.g., true or false for confirm(), the user's input for prompt()). This
     value is then returned to the original JavaScript code that called the popup box function.

  5. In JavaScript, there are three main popup methods that are used to display dialog boxes or alerts
     to the user:
  
  6. window.alert() - The alert() function displays a dialog box with a message and an "OK" button. It
     is typically used to display important information or to notify the user of an event or error. 
     
   - It returns nothing. Message is the string or value that will be displayed in the alert dialog box.
   
   - The alert() function is a blocking operation, meaning that it pauses the execution of the JS code
     until the user dismisses the alert dialog by clicking the "OK" button. 
     
   - This can have an impact on the user experience, so it's generally recommended to use alert() 
     sparingly and only for critical information.
     
  7. window.confirm() - The confirm() function in JavaScript is used to display a modal dialog box that
     presents a message and two buttons: "OK" and "Cancel".
     
   - The confirm() function returns a boolean value: If the user clicks the "OK" button, the function 
     returns true. If the user clicks the "Cancel" button or closes the dialog, the function returns 
     false. Message is the string or value that will be displayed in the confirm dialog box.
     
   - The confirm() function is useful when you need to get a confirmation from the user before perfo-
     rming a potentially destructive or irreversible action, such as deleting data, submitting a form,
     or navigating away from the current page.
     
   - Like the alert() function, confirm() is a blocking operation, meaning that it pauses the execution
     of the JavaScript code until the user interacts with the dialog box. This can impact the user expe-
     rience, so it'sgenerally recommended to use confirm() sparingly and only for important user 
     interactions.
     
  8. window.prompt() - The prompt() function in JavaScript is used to display a modal dialog box that 
     prompts the user to enter a value.
     
   - Message is the string or value that will be displayed as the prompt message. [default] (optional) 
     is initial value that will be displayed in the input field. Ex: prompt(message, [default]). It return
     the value entered by the user. 
     
   - The user can enter a value, and when they click the "OK" button, the entered value is stored in the
     userName variable. If the user clicks the "Cancel" button or closes the dialog, the userName variable 
     is set to null.
     
   - The prompt() function is useful when you need to gather input from the user, such as their name, email,
     or other information.
     
   - However, like the alert() and confirm() functions, prompt() is a blocking operation that can disrupt 
     the user's workflow. It's generally recommended to use more user-friendly input methods, such as custom
     forms or modals, for gathering user input in modern web applications.  */



  //Example-1
  alert("Hello, world!");
  alert(42); // Displays the number 42
  alert(true); // Displays the boolean value "true"
  alert(`The current time is ${new Date().toLocaleTimeString()}`); 


  //Example-2
  const result = confirm("Are you sure you want to delete this item?");
  if (result) {
    console.log("Deleting item...");
  } else {
    console.log("Deletion canceled.");
  }


  //Example-3
  let c = prompt("Enter the secret code to enter: ");
  let write = confirm("Do you want to the enterd value on the page");
  if(write){
    document.write(c);
  }
  else{
    document.write("Please confirm to write it on the page.");
  }


  //Example-4
  const userName = prompt("Please enter your name:");
  if (userName !== null) {
    console.log(`Hello, ${userName}!`);
  } else {
    console.log("You didn't enter a name.");
  }




/* F. WINDOW TIMING METHODS
  1. The window timing events in JavaScript refer to a set of built-in functions that allow us to
     schedule the execution of code at specific times or intervals.
     
  2. setTimeout():
   - Function in JavaScript is used to execute a specified function or code snippet 
     after a specified delay, measured in milliseconds.
   - Callback Function or Code: The first parameter is the function to be executed or the code 
     snippet to be evaluated after the specified delay. This can be either a function reference or
     an anonymous function.
   - Delay in milliseconds: The second parameter is the delay, specified in milliseconds, after 
     which the callback function should be executed.
   - Additionally, setTimeout() returns a unique identifier (a numerical value) representing the
     timer that can be used to cancel the timeout using clearTimeout() if necessary.
   - In JavaScript, the code written after a setTimeout() function call will continue to execute
     immediately after the setTimeout() function is called, regardless of the specified timeout 
     duration. The callback function provided to setTimeout() is scheduled to execute after the
     specified delay, but the execution of the code after setTimeout() is not blocked or delayed 
     by the timer. If 0 second is passed to delay then the Callback or Code is executed in the end
     after every synchronous program is run.
     
  3. setInteval():
   - The setInterval() function in JavaScript is used to repeatedly execute a specified function or
     code snippet at a specified interval, measured in milliseconds.
   - Callback Function or Code: The first parameter is the function to be executed or the code 
     snippet to be evaluated at each interval. This can be either a function reference or an anon-
     ymous function.
   - Interval in milliseconds: The second parameter is the interval, specified in milliseconds, 
     between each execution of the callback function.
   - Additionally, setInterval() returns a unique identifier (a numerical value) representing the
     interval timer that can be used to cancel the interval using clearInterval() if necessary.
   - Similar to setTimeout(), the code written after a setInterval() function call will continue to
     execute immediately after setInterval() is called, regardless of the specified interval dura-
     tion. The callback function provided to setInterval() is scheduled to execute repeatedly at
     the specified interval, but the execution of the code after setInterval() is not blocked or 
     delayed by the timer.
     
  4. clearTimeout():
   - Is used to cancel a timer created by setTimeout() before it executes.
   - The parameter is the timer identifier returned by setTimeout().  
   - This removes the timeout from the execution queue, preventing the callback function from 
     being executed. Codes after the cancelTimeout() will start executing. 

  5. clearInterval():
   - Is used to cancel an interval created by setInterval() before it executes.
   - The parameter is the interval timer identifier returned by setInterval().
   - This removes the interval from the execution queue, preventing the callback function from
     being executed. Codes after the clearInterval() will start executing. */


  //Example-1
  function delayCallBack() {
    console.log("Delayed message");
  }
  
  let timerId1 = setTimeout(delayCallBack, 10000);
  let timerId2 = setTimeout(console.log("I will be also executed through Code Execution"), 15000);
  let timerId3 = setTimeout(()=>(console.log("I will be also executed through Callback")), 20000);
  let timerId4 = setTimeout(delayCallBack, 0);


  //Example-2
  function intervalCallBack(){
    console.log("Interval message");
  }
  let intervalId = setInterval(intervalCallBack, 20000);
  
  
  //Example-3
  clearTimeout(timerId1);
  
  
  //Example-4
  clearInterval(intervalId);

  //Example-5
  (function(){
   setTimeout(()=> console.log(1),2000);
   console.log(2);
   setTimeout(()=> console.log(3),0);
   console.log(4);
  })(); // Output: 2 4 3 1
