//CHAPTER-2 OBJECTS IN DOM

/* A. INTRODUCTION TO OBJECTS
1. In JavaScript, Objects are divided into two categories:
  a) Language Based Objects(Core JS Functionalities)   
     - Language-based objects, such as those defined by JavaScript itself, are created during the execution
       of JavaScript code. These objects include fundamental language constructs like arrays, functions, 
       and objects, as well as objects created by developers during the execution of their scripts.

  b) Browser Based Objects(Browser-Specific Functionalities)
     - Browser-specific functionalities are specific to the web browser environment in which JavaScript is
       running. The browser creates objects related to the DOM and BOM are knwon as Browser Based Objects. These  
       objects, such as the window object, location, naviagtor, document, and history objects, are created
       when the browser loads a web page or at the time of browser's initialisation. */




/* B. DOCUMENT OBJECT MODEL OBEJCTS
  1. Document: The Document Object represents the entire HTML or XML Document. It serves as the entry point
     to the web page's content and provides methods and properties to search and access the DOM element.   
     It also provides some properties which gives information about the document itself.
     Examples: document.getElementById(), document.createElement(), document.title, document.URL.
     
  2. Element: The Element object represents a single HTML or XML element. It provides access to the element's
     tag name, attributes, and child nodes. Examples: element.tagName, element.getAttribute(),  
     element.classList, element.innerHTML. 

  3. CharacterData: The CharacterData object represents a Text Node or a Comment Node in the DOM Tree.      
     The Text object is a specific type of CharacterData that represents the actual text content. The Comment
     object is a specific type of CharacterData that represents a comment node in the DOM tree. 

  4. Node: The Node object is the PARENT OBJECT for all the nodes in the DOM Tree, including Elements, Text, 
     Comments, and Document. It provides common methods and properties shared by all node types. Examples:  
     node.parentNode, node.childNodes, node.nodeName, node.nodeType.
     
  5. Event: The Event object represents an event that has occurred in the DOM, such as a click, keypress, or
     form submission. It provides information about the event and allows you to handle it. Examples:   
     event.type, event.target, event.preventDefault(), event.stopPropagation(). */


 

/* C. HOW DOM OBJECT ARE CREATED IN MEMORY
  1. Document Object is created in the memory at the time of Browser's Initialisation. But the root
     (HTMLDocument Object) of the DOM Tree is not created until the webpage is loaded.
     
  2. Now when the web page is loaded, the Renderer Engine starts parsing HTML Elements one by one. 
     
  3. The two Objects HTMLHeadElement and HTMLBodyElement are created and connected to the root of the Tree
     DS. Similarly Element and Node Objects are created for HTMLHeadElement and HTMLBodyElement.
     
  4. Say, there is a Heading Element in the HTML Body. The Heading Element is created and connected to the
     HTMLBodyElement as child. Similarly, Element and Node Objects are created for Heading. Now say there is a
     text inside the Heading Element. The Text CharacterData/Text Node is created and connected to the Heading 
     Element as child.
     
  5. This hierarchical structure allows the DOM to provide a rich API for accessing, manipulating, and 
     traversing the text content of a web page using JavaScript. The Text object exposes methods and properties
     specifically designed for working with textual data, built upon the more general Node and CharacterData
     interfaces. */


