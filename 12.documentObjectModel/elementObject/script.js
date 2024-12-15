//CHAPTER-5 ELEMENT OBJECT

/* A. INTRODUCTION TO ELEMENT OBJECT
  1. The Element Object in the DOM (Document Object Model) represents a single HTML or XML element.
  
  2. The Element objects in the DOM (Document Object Model) are created dynamically as the web page is loaded 
     and parsed by the browser. As the browser starts parsing the HTML code of the web page, it creates Element
     objects for each HTML tag it encounters. For example, when the browser sees an <h1> tag, it creates an
     HTMLHeadingElement object (a specialized type of Element) to represent that heading element. Here Element 
     remains parent of HTMLHeadingElement. The object connected as child of document is HTMLHeadingElement.
     
  3. In some cases, new Element objects may be created dynamically during the page's lifetime, for example,
     when the user interacts with the page or when JavaScript code adds new elements to the DOM. These 
     dynamically created Element objects are also added to the existing DOM tree. 
     
  4. It provides a wide range of PROPERTIES and METHODS that allow us to ACCESS and MANIPULATE the ATTRIBUTES,
     CONTENT, and STYLES of the element. */




/* B. PROPETIES OF ELEMENT OBJECT
  1. tagName: Returns the name of the element's tag as String in uppercase (e.g., "DIV", "A", "H1").
  
  2. id: Gets or sets the element's unique identifier. id attribute is not set on that element, it will return 
     an empty string ("").
     
  3. className: Gets or sets the element's CSS class name(s). className attribute is not set on that element, it
     will return an empty string ("").
     
  4. otherAttribute: Returns the Value as String.
  
  5. attributes: Returns a HTMLCollection of the element's attributes.
  
  6. innerHTML: Gets or sets the HTML Content inside the element. Returns the HTML content inside the selected
     element, including nested elements and their content as a STRING.
     
  7. outerHTML: Gets or sets the HTML Content including the element itself.  Returns the HTML content of the selected
     element, including nested elements and their content as a STRING.
     
  8. textContent: Gets or sets the text content(with White Spaces) inside the element. The textContent property 
     returns the combined text content of all the child/descandants nodes of the specified element, without any 
     HTML tags. It selects like innerHTML, but it does not include HTML tags. When we Write then it changes like 
     innerHTML.
     
  9. style: The style property of an element in the Document Object Model (DOM) provides access to the INLINE
     CSS STYLES applied to that element. It allows us to manipulate the presentation of the element directly 
     through JavaScript. It returns a CSSStyleDeclaration Object.
     
  10. offsetWidth and offsetHeight: Return the element's size, including any borders, padding, and scrollbars.
  
  11. offsetLeft and offsetTop: Return the element's position relative to its offset parent.
  
  12. classList: The classList property is a read-only property that provides access to the list of classes 
      applied to an HTML element. The classList property return DOMTokenList Object is a built-in JavaScript
      object that represents a collection of DOMString (token) elements. This is String, we can't use className 
      Property as it is indivisually accessible.This Object provides several methods to add, remove, toggle, 
      replace, and check class names. 
      - value(): Returns the concatenated value of all the classes in the list.
      - remove(): Used to remove any of the existing class using its name in parameter.
      - add(): Used to add any of the existing class using its name in parameter.
      - toggle(): Used to add or remove any of the existing class using its name in parameter.
      - contains(): Used to check if the element contains the specified class name. */


  //Example-1(R):
  const exampleDiv = document.getElementById('exampleDiv');
  console.log('Tag name:', exampleDiv.tagName); // Output: "DIV"


  //Example-2(R/W):
  console.log('ID:', exampleDiv.id); // Output: "exampleDiv"


  //Example-3(R/W):
  console.log('Class name:', exampleDiv.className); // Output: "highlight"


  //Example-4(R/W):
  console.log('Value of attribute:', exampleDiv.title); // Output: "My Dream"
  exampleDiv.title = "My NEW Dream";  


  //Example-5(R):
  console.log('Attributes:', exampleDiv.attributes); // Output: HTMLCollection(3) [id, class, style]
  console.log(exampleDiv.attributes[0]); // Output: id

  
  //Example-6(R/W):
  console.log('Inner HTML:', exampleDiv.innerHTML); // Output: "<p>This is a paragraph inside the div.</p>"
  exampleDiv.innerHTML = "Hello, World!";
  console.log(exampleDiv.innerHTML); // Output: "Hello, World!" 


  //Example-7(R/W):
  console.log('Outer HTML:', exampleDiv.outerHTML); 
  exampleDiv.outerHTML = "<p>This is a paragraph outside the div.</p>";
  console.log(exampleDiv.outerHTML); // Output: "<p>This is a paragraph outside the div.</p>"


  //Example-8(R/W):
  console.log('Text content:', exampleDiv.textContent) // Output: "This is a paragraph inside the div."
  exampleDiv.textContent = 'New content'; 
  console.log("New Content: " + exampleDiv.textContent); // Output: "New Content: New content"


  //Example-9(R/W):
  const exampleDiv2 = document.getElementById('exampleDiv2');
  console.log('Text content:', exampleDiv2.textContent); 
  /* Output: This is a paragraph1 inside the div This is a paragraph2 inside the div. This is Child's Child.
     This is a paragraph3 inside the div. */


  //Example-10(R/W):
  console.log('Style:', exampleDiv.style); // Output: CSSStyleDeclaration Object {color:red; background-color: yellow;}
  console.log('Style:', exampleDiv.style.color); // Output: red
  console.log('Style:', exampleDiv.style.backgroundColor); // Output: yellow
  exampleDiv.style.color = 'green'; 
  exampleDiv.style.fontSize = '24px'; 


  //Example-11(R):
  console.log('Offset width:', exampleDiv.offsetWidth); // Output: 20
  console.log('Offset height:', exampleDiv.offsetHeight); // Output: 50


  //Example-12(R):
  console.log('Offset left:', exampleDiv.offsetLeft); // Output: 0
  console.log('Offset top:', exampleDiv.offsetTop); // Output: 0


  //Example-13:
  let first = document.getElementById('first');
  first.className = "yellow size";   

  console.log(first.classList); // Output: DOMTokenList(2) ["yellow", "size"]
  first.classList.value; // Output: "yellow size"
  first.classList.remove("size");
  first.classList.add("size");
  first.classList.toggle("size");
  console.log(first.classList.contains("size"));




/* D. METHODS OF ELEMENT OBJECT
  1. getAttribute(name): Returns the value of the specified attribute. Argument as String. If the particular 
     attribute is not there, it will return null.
     
  2. setAttribute(name, value): Sets the value of the specified attribute. Even if the attribute is not initi-
     alised in HTML Element, it will be created here. Returns nothing.
  
  3. hasAttribute(name): Returns a boolean indicating whether the element has the specified attribute.
  
  4. removeAttribute(name): Removes the specified attribute from the element. Returns nothing.
  
  5. matches(cssSelector): Checks if an element matches a given CSS selector. A string representing a CSS 
     selector. This can be any valid CSS selector, such as a class name, ID, tag name, or more complex select-
     ors. Returns a boolean indicating whether the element matches the selector. Although it hasn't been used
     as CSS Selector either in Internal CSS or External cSS.
     
  6. closest(cssSelector): Finds the closest ancestor element (including the element itself) that matches a 
     given CSS selector. A string representing a CSS selector. The method will Traverse Up(Bubbling) the DOM 
     tree, checking each ancestor (and the element itself) to see if it matches the selector. Returns closest 
     ancestor element that matches the selector and null if no matching ancestor is found. */


  //Example-1
  console.log(exampleDiv.getAttribute('id')) //Output: "exampleDiv"


  //Example-2
  exampleDiv.setAttribute('id', 'newNameOfId')
  console.log(exampleDiv.getAttribute('id'))  //Output: "newNameOfId"
  console.log(typeof exampleDiv.getAttribute('id'))  //Output: "string"


  //Example-3
  exampleDiv2.setAttribute('title', 'Title');
  console.log(exampleDiv2.getAttribute('title'))  //Output: "Title"


  //Example-4
  console.log(exampleDiv.hasAttribute('id'))  //Output: true


  //Example-5
  exampleDiv.removeAttribute('id');  
  console.log(exampleDiv.getAttribute('id'))  //Output: null


  //Example-6
  const element1 = document.getElementById('myElement');
  console.log(element1.matches('.myClass'));  //Output: true
  console.log(element1.matches('#myElement'));  //Output: true
  console.log(element1.matches('div'));  //Output: true
  console.log(element1.matches('span'));  //Output: false


  //Example-7
  const element2 = document.getElementById('myElement');
  console.log(element2.closest('.child'));  //Output: <div class="child">...</div>
  console.log(element2.closest('.container'));  //Output: <div class="container">...</div>
  console.log(element2.closest('body'));  //Output: <body>...</body>
  console.log(element2.closest('span'));  //Output: null

  


/* E. SPECIAL ELEMENTS AND ITS METHODS
   1. Audio Element: When we create an Audio object using let audioElement = new Audio('songs/1.mp3');, this
      object inherits from the built-in HTMLAudioElement interface in the browser's Web API. The 
      HTMLAudioElement interface is part of the HTML specification and provides properties, methods, and 
      events for controlling audio playback in web browsers. */

   
  //Example-1 Reference <audio> Element
   const audioElement = document.getElementById('myAudio');
   
   
  //Example-2 Play
   audioElement.play();
   
   
  //Example-3 Pause
   audioElement.pause();
   
   
  //Example-4 Get the Current Playback Time (in seconds)
   const currentTime = audioElement.currentTime;
   
   
  //Example-5 Set the Current Playback Time (in seconds)
   audioElement.currentTime = 10; 
   
   
  //Example-6 Set the Volume (between 0 and 1)
   audioElement.volume = 0.5; // Set the volume to 50%
   
   
  //Example-7 Check if the Audio is Playing
   const isPlaying = !audioElement.paused;
   
   
  //Example-8 Listen for Events
   audioElement.addEventListener('ended', function() {
     console.log('Audio has finished playing');
   });
   
   audioElement.addEventListener('timeupdate', function() {
     console.log('Current playback time:', audioElement.currentTime);
   });

   /* Note: When an audio file is playing in the browser, the timeupdate event is fired repeatedly at regular 
      intervals. Think of it as a periodic update or a notification from the browser, saying, "Hey, this is
      the current playback time of the audio." */
   
   
   
   
     
   
   
   
   








