//CHAPTER-8 HTMLCollection OBJECT

/*A. INTRODUCTION TO HTML COLLECTION OBJECT
  1. An HTMLCollection object in JavaScript represents a collection of HTML elements. It's similar to a 
     NodeList, but it specifically contains elements that are matched by methods like                        getElementsByTagName(), getElementsByClassName(), getElementsByName().
  2. Creation- HTMLCollection objects are typically obtained from methods like getElementsByTagName(), 
     getElementsByClassName(), or children property of DOM elements.
  3. Live Collection- HTMLCollection objects are live collections, meaning they are automatically 
     updated when the underlying DOM changes. If new elements that match the criteria are added or 
     removed from the document, the HTMLCollection is automatically updated to reflect these changes.
  4. Access- We can access individual elements in an HTMLCollection using square bracket notation or by
     using the item() method.
  5. HTMLCollection objects are not true arrays; they don't have array methods like forEach() or map().
     However, us can convert them to arrays using methods like Array.from() or the spread operator 
     (...). */



// 1. Accessing the HTMLCollection Object:
var firstElement = elementsByTagName[0];

//OR 

var secondElement = elementsByClassName.item(1);




/* B. PROPETIES AND METHODS OF HTMLCollection OBJECT
  1. length- The length property of an HTMLCollection object represents the number of elements in the
     collection.
  2. item()- The item() method of an HTMLCollection object allows us to access individual elements by
     their index. The index starts from 0 and goes up to length - 1. */


// 1. Length of HTMLCollection Object:
console.log(elementsByTagName.length);        //Output: Number of Elements in the Collection

// 2. Accessing individual elements using item():
console.log(elementsByClassName.item(0));    //Output: First element in the Collection

