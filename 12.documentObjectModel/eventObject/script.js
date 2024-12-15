//CHAPTER-6 EVENT OBJECT

/* A. INTRODUCTION TO EVENTS
  1. HTML DOM allows JavaScript to react to HTML Events. A JavaScript can be executed when an event 
     occurs, like when a user clicks on an HTML Element.
  2. These are the top 8 types of JavaScript Event:
     - Mouse Events
     - Keyboard Events  
     - Form Events
     - HTML5 Events
     - CSS Events
     - Focus and Blur Events
     - User-Interface Events
     - Mutaion Events and Observer Events */




/* B. HOW EVENTS WORKS INTERNALLY 
  1. HTML Parsing: The browser parses the HTML and encounters an element that has an EVENTS in two
     ways:
     - Event-Related Attribute, such as onclick or onkeydown etc are detected.
     - An addEvenListener() is invoked while parsing JS for that particular element.
     
  2. Event Listener Registration: 
     - If the JavaScript code has set up an Event Listener for the specific event type on the target
       DOM element, the browser associates the Event Listener with the element.
     - Here addEventListener() which takes the EVENT and the EVENT HANDLER FUNCTION as arguments.
     - The Event Listener is responsible for monitoring the target DOM element for the specified event 
       to occur.
     - The Event Listener is notified when the event occurs.
     
  3. Event Triggering: When the user interacts with the web page and triggers the event (e.g., clicks
     the button, presses a key), the browser detects the event on the target DOM element.
     
  4. Event Propagation: 
     - The event starts at the target element and then bubbles up through the DOM tree, following the 
       event propagation model either BUBBLING or CAPTURING.
     - For the given example(index.html), the event is triggered when the user clicks on the button.
       After the event is triggered on the button, it starts to "bubble up" through the DOM tree. 
       First, it reaches the <div> (the container), and then it reaches the <body> element. At every 
       level it check the same eventtype has been registered or not. If not, it will not trigger the 
       event at those levels. But if it has been registered, it will trigger the event at those levels
       also.
       
  5. Event Object Creation: The Browser Renderer Engine creates an "Event Object". This object contains
     information about the event, like what type of event it is (click, key press, etc.) and which
     element on the web page was involved.
     
  6. Passing the Event Object: The browser then passes this Event Object as a parameter to the Event 
     Handler Function. This allows the function to access all the information about the event that just
     happened. Event object is passed to the event handler function, even though the function already
     has access to information like the target element, is to provide more detailed and comprehensive 
     information about the event.
     
  7. Handling the Event: The Event Handler function can now use the information in the Event Object to 
     do something in response to the event, like updating the web page or making an API call. */




/* C. EVENT OBJECTS
  1. The event object contains information about the event that was triggered, and it is created by 
     the browser at the time after propagation when the event is triggered.
     
  2. Event Object contains information about the event like:
     - Event Type: The type of event that was triggered, such as "click", "keydown", "submit", etc.
     - Target Element: The specific DOM element that the event was triggered on.
     - Event Coordinates: The position of the event, such as the mouse coordinates for a click event.
     - Keyboard Information: If the event was triggered by a keyboard action, the event object will 
       contain information about the key that was pressed.
     - Mouse Information: If the event was triggered by a mouse action, the event object will contain 
       information about the mouse button and movement.
       
   3. This Event Object is then passed to Event Handler Function(CallBack) created by the developer. */




/* D. TYPES OF EVENTS 
  1. Mouse Events: These events fire when the mouse MOVES or the USER-CLICK  a button. All the   
     elements of the page support these events and use the bubbling approach. The various mouse events
     of JavaScript are as follows:
     
     - click: This event fires when the user clicks on the primary mouse button (usually the left
       button). This event also fires if the user presses the Enter key on the keyboard when an 
       element has focus. Refer- https://www.youtube.com/watch?v=IrK6wCACX1k
       
     - dblclick: This event fires when the user clicks the primary mouse button, in quick succession, 
       twice. Refer- https://www.youtube.com/watch?v=tr1yzveiArs
     
     - mousedown: It fires when the user clicks down on any mouse button.
       Refer- https://www.youtube.com/watch?v=n_yC_Jlo_LE
       
     - mouseup: This event fires when the user releases the mouse button. 
       Refer- https://www.youtube.com/watch?v=pPxSamJx5yk
       
     - mouseover: This event fires when the user moves the mouse over an element. It fires when the 
       user moves the cursor, which was outside an element before, inside the element. 
       Refer mouseOutmouseOver.png
       
     - mouseout: This event fires when the user moves the mouse away from an element. It fires when 
       the user moves the cursor, which was inside an element before, outside the element. 
       Refer mouseOutmouseOver.png
       
     - mousemove: It fires when the user moves the cursor around the element. This event is frequently
       triggered.
  
  2. Keyboard Events: These events fire when the user PRESSES a key on the keyboard. 
     - input: This event fires when the value of an <input> or a <textarea> changes. 
     
     - keydown: This event fires when the user presses a key on the keyboard. If the user holds down 
       the key, this event fires repeatedly.
       
     - keyup: This event fires when the user releases a key on the keyboard.
     
     - keypress: It fires when the user presses a key that results in printing a character on the
       screen. This event fires repeatedly if the user holds down the key. This event will not fire
       for the enter, tab, or arrow keys; the keydown event would. To know the key pressed when you 
       use the keydown and keypress events, the event object has a keyCode property. This property,
       instead of returning the letter for that key, returns the ASCII code of the lowercase for 
       that key.

   3. Form Events: These events are common while using forms on a webpage. In particular, we see the 
      submit event mostly in form of validation (checking form values). If the users miss any
      required information or enter incorrect input, validation before sending the data to the server
      is faster. The list below explains the different form of events available to the user.
      
      - submit: This event fires on the node representing the <form> element when a user submits a
        form.
      
      - change: It fires when the status of various form elements change. This is a better option 
        than using the click event because clicking is not the only way users interact with the form.
        
      - input: The input event is very common with the <input> and the <textarea> elements.
      
   4. HTML5 Events: These are the page-level events included in the versions of the HTML5 special-
      ization. New events support more recent devices like phones and tablets. They respond to events
      such as gestures and movements. You will understand them better after you master the above 
      concepts, thus they are not discussed for now. Work with the events below for now and when you 
      are a better developer, you can search for other events available. The three HTML5 events we 
      will learn are as follows:
      
      - DOMContentLoaded: This event triggers when the DOM tree forms i.e. the script is loading. 
        Scripts start to run before all the resources like images, CSS, and JavaScript loads. You can
        attach this event either to the window or the document objects.
        
      - hashchange: It fires when the URL hash changes without refreshing the entire window. Hashes
        (#) link specific parts (known as anchors) within a page. It works on the window object; the 
        event object contains both the oldURL and the newURL properties holding the URLs before and 
        after the hashchange.
        
      - beforeunload: This event fires on the window object just before the page unloads. This event
        should only be helpful for the user, not encouraging them to stay on the page. You can add a 
        dialog box to your event, showing a message alerting the users like their changes are not 
        saved.
        
    5. CSS Events: These events trigger when the script encounters a CSS element. As CSS is a cruc-
       ial part of web development, the developers decided to add these events to js to make working
       with CSS easier. Some of the most common CSS events are as follows:
       
       - transitionend: This event fires when a CSS transition ends in a program. It is useful to 
         notify the script of the end of transition so that it can take further action.
         
       - animationstart: These events fire when CSS animation starts in the program.
       
       - animationiteration: This event occurs when any CSS animation repeats itself. With this event, we can 
         determine the number of times an animation iterates in the script.
         
       - animationend: It fires when the CSS animation comes to an end in the program. This is useful when we
         want to act just after the animation process finishes.
         
    6.  Focus and Blur Events: These events fire when the HTML elements you can interact with gain/ lose focus.
        They are most commonly used in forms and especially helpful when you want to do the following tasks:
        To show tips or feedback to users as they interact with an element within a form. The tips are usually 
        shown in the elements other than the one the user is interacting with. To trigger form validation as a 
        user moves from one control to the next without waiting to submit the form.
        
        - focus: This event fires, for a specific DOM node, when an element gains focus. The focus event occurs
          when an element becomes the target of keyboard input or when a user interacts with it in a way that
          requires it to be the active element (e.g., by clicking on it or using the tab key to navigate to it).

        - blur: This fires, for a specific DOM node, when an element loses focus. Triggered when an element loses
          focus. This event is fired when the user navigates away from the element, either by clicking away,
          tabbing to another element, or programmatically changing focus.
        
        - focusin: This event is the same as the focus event. But Firefox doesn’t yet support the focusin event.
        
        - focusout: This is the same event as the blur event. This is a new event type in JavaScript, thus not
          supported in Firefox right now.

    7. User Interface Events: These occur as the result of any interaction with the browser window rather than 
       the HTML page. In these events, we attach the event listener to the window object, not the document 
       object.  
       
       - load: The load event fires when the webpage finishes loading. It can also fire on nodes of elements
         like images, scripts, or objects.
         
       - unload: This event fires before the users leave the page, i.e., the webpage is unloading. Page
         unloading usually happens because a new page has been requested.
         
       - error: This event fires when the browser encounters a JavaScript Error or an asset that doesn’t exist.
       
       - resize: It fires when we resize the browser window. But browsers repeatedly fire this event, so avoid
         using this event to trigger complicated code; it might make the page less responsive.
         
       - scroll: This event fires when the user scrolls up/down on the browser window. It can relate to the 
         entire page or a specific element on the page.
         
     8. Mutation Events and Observers: Whenever the structure of the DOM tree changes, it triggers a mutation 
        event. The change in the tree may be due to the addition or removal of a DOM node through your script. 
        But these have an alternative that will replace them: mutation observers. 
        The problem with the mutation eveßnts is that lots of changes to your page can make your page feel slow 
        or unresponsive. These can also trigger other event listeners, modifying DOM and leading to more 
        mutation events firing. This is the reason for introducing mutation observers to the script.
        Mutation observers wait until the script finishes its current task before reacting, then reports the 
        changes in a batch (not one at a time). This reduces the number of events that fire when you change the 
        DOM tree through your script. You can also specify which changes in the DOM you want them to react to.
        The following are the numerous mutation events in JavaScript.
        
        - DOMNodeInserted: It fires when the script inserts a new node in the DOM tree using appendChild(), 
          replaceChild(), insertBefore(), etc.
          
        - DOMNodeRemoved: This event fires when the script removes an existing node from the tree using 
          removeChild(), replaceChild(), etc.
          
        - DOMSubtreeModified: It fires when the structure of the DOM tree changes i.e. the above two events
          occur.
        
        - DOMNodeInsertedIntoDocument: This event fires when the script inserts a node in the DOM tree as the 
          descendant of another node already in the document.
          
        - DOMNodeRemovedFromDocument: This event fires when the script removes a node from the DOM tree as the 
          descendant of another node already in the document. */


  //Example-1 Mouse Events
  let element = document.getElementById("myButton");
  
  //Method-1
  element.addEventListener('click', function(event) {
    element.innerHTML = "I am Triggered!"
  });
  
  //Method-2
  element.onclick = function(event) {
    console.log('Element was clicked!');
  };
  
  
  //Example-2
  element.addEventListener('dblclick', function(event) {
    element.innerHTML = "I am Triggered!"
  });
  
  element.ondblclick = function(event) {
    console.log('Element was double-clicked!');
  };
  
  
  //Example-3
  element.addEventListener('mousedown', function(event) {
    element.innerHTML = "I am Triggered!"
  });
  
  element.onmousedown = function(event) {
    console.log('Mouse button was pressed!');
  };
  
  
  //Example-4
  element.addEventListener('mouseup', function(event) {
    element.innerHTML = "I am Triggered!"
  });
  
  element.onmouseup = function(event) {
    console.log('Mouse button was released!');
  };
  
  
  //Example-5
  element.addEventListener('mouseover', function(event) {
    element.innerHTML = "I am Triggered!"
  });
  
  element.onmouseover = function(event) {
    console.log('Pointer moved onto the element!');
  };
  
  
  //Example-6 Keyboad Events
  const outputElement = document.getElementById('output');
  
  outputElement.addEventListener('keyup', function(event) {
    const key = event.key.toUpperCase();
    const keyCode = event.keyCode;
  
    outputElement.textContent = `Key pressed: ${key} (keyCode: ${keyCode})`;
  });  //Here KeyCode=65
  

  //Example-7
  outputElement.addEventListener('keydown', function(event) {
  const key = event.key.toUpperCase();
  const keyCode = event.keyCode;

  outputElement.textContent = `Key released: ${key} (keyCode: ${keyCode})`;
  });  //Here KeyCode=65

 
  //Example-8
  outputElement.addEventListener('keypress', function(event) {
  const key = event.key.toUpperCase();
  const keyCode = event.keyCode;

  outputElement.textContent = `Key pressed: ${key} (keyCode: ${keyCode})`;
  });  //Here KeyCode=97


  //Example-9 Form Events
  const form = document.getElementById('myForm');
  form.addEventListener('submit', function(event) {
    event.preventDefault();
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    console.log('Form submitted:', name, email);
  });
  
  
  //Example-10
  const inputElement = document.getElementById('myInput');
  
  inputElement.addEventListener('change', function(event) {
    const value = inputElement.value;
    console.log('Input value changed:', value);
  });
  
  
  //Example-11
  const textareaElement = document.getElementById('myTextarea');
  textareaElement.addEventListener('input', function(event) {
    const value = textareaElement.value;
    console.log('Textarea value changed:', value);
  });
  
  
  //Example-12 User Interface Events
  window.addEventListener('load', function(event) {
    console.log('Page loaded!');
  });
  
  
  //Example-13
  window.addEventListener('unload', function(event) {
    console.log('Page unloaded!');
  });
  
  


/* D. EVENT ATTRIBUTES
  1. Event Attributes: These are the attributes that are commonly used with events. They are used to specify
     the behavior of the event. They are usually used in conjunction with the event listener. */
  
  //Example-1
  //Method-1 OnClick- Event Attribute Refer: index.html
  
  
  //Method-2 OnClick- Event Atttribute
  // Event Handler Function:
  function changeText(e) {
    e.innerHTML = "Ooops!";
  }


  //Method-3 OnClick- Element's Property
  let evntelement = document.getElementById("eventAttribute");
  evntelement.onclick = changeSomething(evntelement);

  function changeSomething(id) {
    id.innerHTML = "Ooops!";
  }
  
  
  
  
/* E. MULTIPLE EVENTS ON SAME ELEMENT
  1. Multiple Event Listeners gets registered by addEventListener() method but are invoked synchronously. */

  //Example-1
  var x = document.getElementById("myBtn");
  x.addEventListener("click", myFunction);
  x.addEventListener("click", someOtherFunction);
  
  function myFunction() {
    alert("Hello World!");
  }
  
  function someOtherFunction() {
    alert("This function was also executed!");
  }
  
  


/* F. WINDOW OBJECT EVENTS
1. Window object indeed implements the EventTarget interface. This means that the window object can be used 
   as an event target, allowing us to attach event listeners to it and handle various types of events. */


  //Example-1
  window.addEventListener("resize", function() {
    document.getElementById("demo").innerHTML = Math.random();
  });




/* G. PASSING PARAMETERS TO EVENT HANDLER FUNCTION
  1. When passing parameter values, use an "anonymous function" that calls the specified function with the 
     parameters. 

  2. We can't directly pass parameters to the event handler function. The event handler functions expected by
     addEventListener and other similar methods have a specific signature. They typically accept an Event object
     as the only parameter, representing the event that occurred. */


  //Example-1
  let p1 = 5;
  let p2 = 7;
  document.getElementById("myBtn").addEventListener("click", function() {
    myFunction(p1, p2);
  });
  
  function myFunction(a, b) {
    document.getElementById("demo").innerHTML = a * b;
  }



/* H. BUBBLING AND CAPTURING PHASES
  1. There are two ways of event propagation in the HTML DOM, bubbling and capturing.

  2. Event propagation is a way of defining the element order when an event occurs. If we have a <p> element 
     inside a <div> element, and the user clicks on the <p> element, which element's "click" event should be 
     handled first?

  3. In bubbling the inner most element's event is handled first and then the outer: the <p> element's click 
     event is handled first, then the <div> element's click event.

  4. In capturing the outer most element's event is handled first and then the inner: the <div> element's click 
     event will be handled first, then the <p> element's click event.

  5. With the addEventListener() method we can specify the propagation type by using the "useCapture" parameter:
     addEventListener(event, function, useCapture);
     
  6. The default value is false, which will use the bubbling propagation, when the value is set to true, the 
     event uses the capturing propagation. */


  //Example-1
  document.getElementById("myP1").addEventListener("click", function() {
    alert("You clicked the white element!");
  }, false);
  
  document.getElementById("myDiv1").addEventListener("click", function() {
    alert("You clicked the orange element!");
  }, false);
  
  document.getElementById("myP2").addEventListener("click", function() {
    alert("You clicked the white element!");
  }, true);
  
  document.getElementById("myDiv2").addEventListener("click", function() {
    alert("You clicked the orange element!");
  }, true);



/* I. REMOVE addEventListener() METHOD
  1. The removeEventListener() method is used to remove an event listener from an element.
  2. We are passing event handler function so that the removeEventListener can understand which event to remove
     in case of multiple events on same element.    */

  
  //Example-1:
  function handleClick(event) {
    console.log("Button clicked");
  }
  
  var button = document.getElementById("myButton");
  button.addEventListener("click", handleClick);
  
  button.removeEventListener("click", handleClick);
  
  
  
  //Example-2:
  document.getElementById("myDIV").addEventListener("mousemove", myFunction);
  function myFunction() {
    document.getElementById("demox").innerHTML = Math.random();
  }

  document.getElementById("myDIV").removeEventListener("mousemove", myFunction);
  
  /* Note: Whenever we have to Remove EventListener from an Element using some other Element, we have to use
     another addListener() for that element. */