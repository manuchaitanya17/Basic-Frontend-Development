//CHAPTER-4 LOCATION OBJECT

/* A. INTRODUCTION TO LOCATION OBJECT
  1. The location object in JavaScript represents the current URL of the web page being displayed
     in the browser. It provides information about the URL's components, such as the protocol,
     hostname, pathname, search parameters, and hash fragment.
     
  2. When a web page is loaded into the browser, the browser parses the URL specified in the address
     bar or provided through navigation actions (e.g., clicking a link or submitting a form).
     
  3. As part of the web page loading process, the browser dynamically creates the location object to
     represent the URL of the currently loaded document.
     
  4. The URL information obtained by the location object comes directly from the address bar of the
     browser or from the navigation context of the browser.
     
  5. Developers can also modify the URL using the location object to navigate to a different page or
     modify parts of the URL. When this line of code is executed in a web page, the browser will
     immediately navigate to the URL "https://example.com". The current web page will be replaced by
     the content of the new URL. This action is equivalent to clicking on a hyperlink that points to
     "https://example.com".*/




/* B. PROPERTIES OF LOCATION OBJECT
  1. location.href: Returns the entire URL as a string.
  2. location.protocol: Returns the protocol (e.g., "http:", "https:") of the URL.
  3. location.hostname: Returns the hostname of the URL.
  4. location.pathname: Returns the pathname of the URL.
  5. location.search: Returns the query string parameters of the URL.
  6. location.hash: Returns the hash fragment of the URL. */


   //Example-1(R/W)
   console.log(location.href);
   // location.href = "https://example.com";


   //Example-2(R/W)
   console.log(location.protocol);
   


   //Example-3(R/W)
   console.log(location.hostname);


   //Example-4(R/W)
   console.log(location.pathname);


   //Example-5(R/W)
   console.log(location.search);
   // location.href = "https://example.com?q=searchTerm";


   //Example-6(R/W)
   console.log(location.hash);
   // location.href = "https://example.com#section";




/* D. METHODS OF LOCATION OBJECT
  1. location.reload(): The reload() method reloads the current document (web page), optionally forcing
     a reload from the server. It essentially behaves like clicking the browser's refresh button or
     pressing F5. Method does not return anything.
     
  2. location.assign(): The assign() method loads a new document or URL, replacing the current document
     in the browser's history stack. This means the user can use the browser's "back" button to navigate
     back to the original document. location.href does not return a value; it simply assigns the new URL
     and triggers navigation whereas assign() returns undefined after navigation.
     
  3. location.replace(): replace() method replaces the current document with a new one, without adding
     an entry to the browser's history stack. This means the user can't use the browser's "back" button to
     navigate back to the original document. */


   //Example-1
   // location.reload();


   //Example-2
   // location.assign("https://example.com");


   //Example-3
   // location.replace("https://example.com");




/* E. EVENTS IN LOCATION OBJECT
  1. Changes to the location object, such as navigation to a new URL, trigger various events, such as the
     beforeunload event or the hashchange event, which developers can listen to and handle in JavaScript code. */

