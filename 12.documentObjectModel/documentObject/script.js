//CHAPTER-3 DOCUMENT OBJECT

/* A. INTRODUCTION TO DOCUMENT OBJECT
  1. If we want to access any element in an HTML page, we always start with accessing the document object.
  
  2. The Document Object is the root of the DOM (Document Object Model) hierarchy and represents the entire
     HTML or XML document. It serves as the entry point for accessing and manipulating the web page's content 
     and structure.
     
  3. When a web page is loaded, the browser's rendering engine parses the HTML and constructs the DOM tree. The
     Document object serves as the entry point to this tree, allowing JavaScript to access and manipulate the   
     web page's content and structure through the various methods and properties provided by the Document Obj.
     
  4. Here's a brief overview of how the Document object works:
     - Representation of the Document: The Document Object represents the entire HTML or XML document,   
       including the <html>, <head>, and <body> elements, as well as all other elements, text, and comments 
       within the document. Its the root of Tree Data Structure. And the HTML elements are the child of the
       root object.

     - Document Properties: The Document object has various properties that provide information about the  
       document, such as document.title, document.URL, document.domain, and document.characterSet.
       
     - Document Methods: The Document object provides methods to access and select specific elements
       within the document, such as document.getElementById(), document.getElementsByTagName(), 
       document.querySelector(), and document.querySelectorAll(). These methods don't traverse the DOM tree in 
       the traditional sense. Instead, they directly access elements based on their IDs, classes, or tag names.
       
     - Event Handling: The Document Object can listen for and handle events that occur within the document, 
       such as click, keypress, and submit events, using methods like document.addEventListener() and 
       document.removeEventListener(). */




/* B. DOCUMENT PROPERTIES
  1. documentElement: Returns the <html> document's reference which is the root of the DOM.
  
  2. body: Returns the <body> element's reference which contains the main content of the page.
  
  3. head: Returns the <head> element's reference which contains metadata and other information about the page.
  
  4. title: GET or SET the title of the document, which is displayed in the browser's title bar or tab.
  
  5. URL: Returns the String as full URL of the current document.
  
  6. lastModified: Returns the String as date and time the document was last modified.
  
  7. forms: Returns a HTMLCollection of all the <form> elements' reference in the document.
  
  8. images: Returns a HTMLCollection of all the <img> elements' reference in the document.
  
  9. links: Returns a HTMLCollection of all the <a> and <area> elements' reference in the document that have an 
     href attribute.
     
  10. referrer: The document.referrer property in JavaScript returns the URL of the document that loaded the 
      current document. It is typically used to determine the URL of the previous page from which the user navi-
      gated to the current page.
      
  11. cookie: Gets or sets the cookies associated with the current document. */



  //Example-1(R)
  const htmlElement = document.documentElement;
  console.log("HTML Element:", htmlElement); //Output: HTML Element: <html>


  //Example-2(R)
  const bodyElement = document.body;
  console.log("Body Element:", bodyElement);  //Output: Body Element: <body>


  //Example-3(R)
  const headElement = document.head;
  console.log("Head Element:", headElement);  //Output: Head Element: <head>


  //Example-4(R/W):
  const titleElement = document.title;
  console.log("Title Element:", titleElement);  //Output: Title Element: replit

  document.title= "New Title";
  console.log(document.title);  //Output: New Title
 

  //Example-5(R):
  const url = document.URL;
  console.log("URL:", url);  //Output: URL: https://eb9fa155-cea3-4420-b454-8f9e049c9343-00-1ql2xk8sqc6jm.sisko.replit.dev/


  //Example-6(R):
  const lastModified = document.lastModified;
  console.log("Last Modified:", lastModified);  //Output: Last Modified: Sat, 01 May 2023 17:18:32 GMT


  //Example-7(R):
  const forms = document.forms;
  console.log("Forms:", forms);  //Output: Forms: HTMLCollection(2) [form#myForm, form#myForm2]


  //Example-8(R):
  const images = document.images;
  console.log("Images:", images);  //Output: Images: HTMLCollection(0) []


  //Example-9(R):
  const links = document.links;
  console.log("Links:", links);  //Output: Links: HTMLCollection(0) []


  //Example-10(R):
  const referrer = document.referrer;  // Output: referrer: https://eb9fa155-cea3-4420-b454-8f9e049c9343-00-1ql2xk8sqc6jm.sisko.replit.dev/
  console.log("Referrer:", referrer);




/* C. DOCUMENT METHODS-I(SEARCHING METHODS)
  1. There are several methods available to FIND elements in the Document Obejct.
     - Using ID of the Element.
     - Using Class of the Element.
     - Using Tag of the Element.
     - Using CSS Selector.
     - Using Object Collections.

  2. getElementById(id): Returns the element with the specified ID. Example: document.getElementById("id").
     If an element with the given ID exists in the document, the method returns a reference to that element
     as an object. If no matching element is found, the method returns null.

  3. getElementsByTagName(tagName): Returns a NodeList of all elements with the specified tag name. Example: 
     document.getElementsByTagName("p"). 

  4. getElementsByClassName(className): Returns a NodeList of all elements with the specified class name. 
     Example: document.getElementsByClassName("myClass").

  5. querySelector(CssSelector): Returns the first element that matches the specified CSS selector. Example: 
     document.querySelector("div.myClass").

  6. querySelectorAll(CssSelector): Returns a NodeList of all elements that match the specified CSS selector.
     Example: document.querySelectorAll("a.external").

  7. getElementsByName(name): Returns a NodeList of all elements with the specified name attribute. Example:
     document.getElementsByName("myInput"). */


  //Example-1
  const elementById = document.getElementById("myId");
  console.log(elementById);


  //Example-2
  const elementByTagName = document.getElementsByTagName("h1");

  for (let i = 0; i < elementByTagName.length; i++) {
      console.log("Element:", elementByTagName[i]);
  }


  //Example-3
   const x = document.getElementById("main");
   const y = x.getElementsByTagName("p"); 
   //Note: Return NodeList of all elements with the specified tag name, inside the element with the specified ID.


  //Example-4
  const elementByClassName = document.getElementsByClassName("myClass");

  for (let i = 0; i < elementByClassName.length; i++){
      console.log("Element:", elementByClassName[i]);
  }


  //Example-5
  const firstMatchingElement = document.querySelector("#myElementId .myClassName");
  console.log(firstMatchingElement);


  //Example-6
  const allMatchingElements = document.querySelectorAll(".myClassName");

  for (let i = 0; i < allMatchingElements.length; i++){
      console.log("Element:", allMatchingElements[i]);
  }


  //Example-7
  const elemenstByName = document.getElementsByName("myElementName");

  for (let i = 0; i < elemenstByName.length; i++) {
      console.log("Matching element:", elemenstByName[i]);
  }