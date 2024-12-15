//CHAPTER-1- INTRODUCTION TO JAVASCRIPT


/* A. INTRODUCTION AND HISTORY
  1. JavaScript was introduced in the mid-1990s as a scripting language designed to add interactivity 
     and DYNAMIC BEHAVIOUR OF WEBPAGES. It was created by BRENDAN EICH, then working at Netscape 
     Communications Corporation. The initial version of JavaScript, called "Mocha," was later renamed 
     to "LiveScript," and finally to "JavaScript" as a strategic move to align it with the popularity 
     of Java at the time.

  2. JavaScript's primary purpose was to allow developers to manipulate the Document Object Model 
     (DOM) of web pages, enabling dynamic updates to content without requiring a full page reload. 
     Its lightweight nature and the fact that it could be executed directly within web browsers made 
     it a powerful tool for enhancing user experiences on the web. */




/* B. EVOLUTION OF JAVASCRIPT
  1. JavaScript 1.0 (1995): The first version of JavaScript was released in Netscape Navigator 2.0.  
     It included basic scripting capabilities, event handling, and interaction with the DOM.

  2. JavaScript 1.1 (1996): Introduced improvements to the language, including better function 
     support, error handling, and regular expressions.

  3. JavaScript 1.2 (1997): Added support for frames and the ability to run scripts in the 
     background. This version was also known as ECMAScript 1, marking the beginning of 
     standardization efforts.

  4. ECMAScript 2 (1998): The first official version of the ECMAScript specification was released, 
     which aligned JavaScript with a standardized specification for scripting languages.

  5. ECMAScript 3 (1999): This version introduced significant enhancements to the language, including 
     better support for structured programming, regular expressions, exception handling, and more.

  6. ECMAScript 4 (2003, Abandoned): An attempt to create a major update to the specification faced 
     challenges and disagreements, leading to its abandonment.

  7. ECMAScript 5 (2009): This version brought substantial improvements to the language, including 
     new methods for arrays and strings, JSON support, strict mode, and more. ES5 laid the foundation 
     for modern JavaScript development.

  8. ECMAScript 6 (2015, ES6 or ES2015): A groundbreaking release that introduced numerous features 
     like arrow functions, classes, template literals, and destructuring. It transformed JavaScript 
     into a more powerful and expressive language.

  9. ECMAScript 2016 (ES7 or ES2016) and Beyond: Subsequent versions of ECMAScript continued to 
     introduce new features and improvements, released on a yearly basis. Some notable features 
     include async/await, spread/rest operators, enhanced object literals, and more.

  10. More Updates: https://en.wikipedia.org/wiki/ECMAScript_version_history#:~:text=ECMAScript%202023%2C%20the%2014th%20and,was%20released%20in%20June%202023. */



/* C. WEB DEVELOPMENT BEFORE JAVASCRIPT
  1. Before JavaScript became widely used for client-side scripting, web development relied on a 
     simpler model where the server was responsible for rendering and generating the entire web page. 
     Here's an overview of how client and server interactions were managed before JavaScript.


  2. HTML Generation on the Server: In the early days of the web, when a user requested a web page, 
     the server would generate the entire HTML content of the page on the server side. This included 
     all the necessary markup, content, and styles. (SSR)

  3. Static Web Pages(Client Side): The content was usually static and didn't change based on user inter-
     actions. Each time a user wanted to view a change in that particular page , a new request was sent 
     to the server.

  4. Limited Interactivity: The interactivity on web pages was minimal, and any form submissions or 
     user interactions required a full page reload. For example, submitting a form would result in 
     the server processing the data and sending a completely new page back to the user.

  5. Server Load: Since the server was responsible for generating every aspect of the page, it had a 
     significant load to handle, especially as the number of users increased. */




/* D. CHALLENGES FOR DEVELOPERS BEFORE JS
  1. Limited User Experience: The lack of interactivity and dynamic content made for a more static 
     and less engaging user experience. User actions often required waiting for full page reloads.

  2. Scalability Issues: As websites grew in popularity, the server load increased due to the need to 
     generate and deliver complete HTML for each request. This made scaling challenging.

  3. Slow Load Times: With every interaction requiring a full page reload, load times were slower as 
     users had to wait for the server to generate and deliver the entire page.

  4. Complex Updates: Even minor updates or changes to the page required manual intervention on the 
     server side, leading to maintenance challenges.

  5. Resource Efficiency: Re-downloading all resources (images, stylesheets, etc.) with each request 
     consumed more bandwidth and server resources.




/* E. JAVASCRIPT AND IT'S FUNCTION
    1. JavaScript is a versatile programming language that is primarily used for front-end web
       development, but it can also be used for back-end development and other application development
       scenarios. Its main purpose in development is to enhance the interactivity and functionality of
       websites and web applications. 
       
    2. Here are some key purposes of JavaScript in development:
       User Interaction through DOM Manipulation: JavaScript enables websites to respond to user actions
       in real time in the same page. It can capture user clicks, mouse movements, keyboard inputs, and touch
       gestures, allowing developers to create interactive and engaging user interfaces. JavaScript allows
       developers to manipulate the Document Object Model (DOM) of a web page. This means you can dynamically
       add, remove, or modify elements and content on the page without needing to reload the entire page. */




/* F. WHY ECMA SCRIPT
  1. ECMAScript is a scripting language specification that was designed to 
     standardize the behavior of scripting languages that target web browsers. It was 
     initially introduced to standardize JavaScript, which was developed by Netscape 
     Communications Corporation in the mid-1990s. JavaScript's popularity led to the 
     need for a formal specification that would define its syntax, semantics, and 
     core features.

  2. What happenned is as JS was developed by Netscape Browser, seeing this all other
     browsers started making their own JS Language, as per its complier also. But the
     problem was if a developer codes JS(any) that works on some browser and not to some.
     So, the solution was to create a new language standards called ECMAScript.

  3. In 1996, Netscape approached the European Computer Manufacturers Association 
     (ECMA) to create a standardized specification for JavaScript. This effort 
     resulted in the creation of the ECMAScript standard. The first official version, 
     ECMAScript 1 (ES1), was published in June 1997 as ECMA-262, the technical name 
     for the ECMAScript standard.

  4. The primary purpose of ECMAScript is to provide a standardized specification for 
     scripting languages used for web development, ensuring consistent behavior 
     across different implementations and browsers. */




/* G. SERVER-SIDE RENDERING
  1. Before JavaScript became prevalent in web development, Server-Side Rendering (SSR) was
     the dominant approach for rendering web pages.
     
  2. Here's how the process typically worked:
  
  3. User Request: When a user requested a web page by entering a URL or clicking a link, the
     request was sent to the server.
     
  4. Server-Side Processing: The server received the request and executed server-side code, which 
     could involve fetching data from a database, processing user input, applying business logic,
     and generating HTML content dynamically. 
     
  5. HTML Generation: After processing the request, the server generated the complete HTML content
     of the web page, including markup, content, and styles, media. This HTML content was then sent back
     to the client's browser where these files are downloaded and stored to cache as the response to the
     user's request.
     
  6. SSR typically results in faster INITIAL PAGE LOADS, as the server sends fully rendered HTML content
     to the client. However, SUBSEQUENT PAGE LOADS navigations may be slower as data needs to be refetched
     and the page re-rendered on the server.
     
  7. SSR is better for search engine optimization (SEO) because search engine crawlers can easily parse 
     the fully rendered HTML content sent by the server.
     
  8. Browser Rendering: The client's browser received the HTML response from the server and rendered
     the web page based on the provided HTML content. The browser would parse the HTML, apply an st-
     yles (CSS), and display the final layout to the user. */




/* H. INITIAL PAGE LOADS VS SUBSEQUENT PAGE LOADS
  1. The Initial Page Load Time refers to the duration it takes for a web page to fully load and becomes
     usable for the user after they've made a request to view that page. It's essentially the time it takes
     for the browser to download all the necessary resources (HTML, CSS, JavaScript, images, etc.), render 
     the content, and make it interactive. 
     
  2. This occurs when a user first visits a website or enters a specific URL into the browser's address bar.
  
  3. The components that contribute to the initial page load time include:
     HTML, CSs, JavaScript, Images and Media, External Files.
     
  4. Subsequent page load refers to any page loads that occur after the initial page load, such as when a
     user navigates to another page within the same website or returns to the same page after navigating          away.
     
  5. During subsequent page loads, some resources may already be cached by the browser, such as CSS files, 
     JavaScript files, and images.
     
  6. Depending on the website's architecture and whether caching mechanisms are employed, subsequent page 
     loads may be faster than the initial page load because the browser can reuse cached resources. */





