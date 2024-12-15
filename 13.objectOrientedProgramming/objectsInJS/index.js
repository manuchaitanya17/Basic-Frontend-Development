//CHAPTER-1 OBJECT IN JAVASCRIPT

/* A. INTRODUCTION TO OBJECTS
  1. In JavaScript, almost "everything" is an object. Booleans, Numbers, Strings are Objects if defined
     with the new keyword. Dates, Maths, Regular Expressions, Arrays, Functions, and Objects are all
     Objects.
     
  2. Primitive values are immutable (they are hardcoded and cannot be changed). if x = 3.14, you can
     change the value of x, but you cannot change the value of 3.14.
     
  3. Object values are written as name : value pairs (name and value separated by a colon).
  
  4. It is a common practice to declare objects with the const keyword.
  
  5. The named values, in JavaScript objects, are called properties. Object properties can be both 
     primitive values, other objects, and functions.

  6. Methods are actions that can be performed on objects. An object method is an object property 
     containing a function definition. */




/* B. CREATING OBJECTS
  1. There are different ways to create new objects:
   - Create a single object, using an object literal- Using an object literal, we both DEFINE and 
     CREATE an object in one statement.
   - Create a single object, with the keyword new.
   - Define an object constructor, and then create objects of the constructed type.
   - Create an object using Object.create(). */


  // 1. Object Literal
  const person = {firstName:"John", lastName:"Doe", age:50, eyeColor:"blue"};


  // 2. New Keyword
  const players = new Object();
  players.player1 = "Ronaldo";
  players.player2 = "Messi";
  players.player3 = "Neymar";





/* C. MUATBILITY AND PASS BY REFERENCE IN JAVASCRIPT
  1. Objects are mutable. Accessing the propeties of object we can change the values.
  2. They are addressed by reference, not by value. The variables don't store the object but the 
     reference to the object as value. */


  // 1. Mtuability and Pass By Reference
  const person1 = {
    firstName:"John",
    lastName:"Doe",
    age:50, eyeColor:"blue"
  }

  const x = person1;
  x.age = 10;   //Note: Here it will change the value of age in person1 as well.





/* D. PROPERTIES OF OBJECTS 
  1. A JavaScript object is a collection of unordered properties. 
  
  2. Properties can usually be CHANGED, ADDED, and DELETED, but some are READ only.
  
  3. Accessing JavaScript Properties: 
   - objectName.property 
   - objectName["property"]
   - objectName[expression]
   
  4. Iteration on Objects- The JavaScript for...in statement loops through the properties of an object.
  
  5. Object propertyName can be of any type, including strings, numbers, symbols, and even objects. 
     When non-string keys are used, they are automatically converted to strings.

  6. Adding New Properties: We can add new properties to an existing object by simply giving it a 
     value.

  7. Deleting Properties: The delete keyword deletes a property from an object. The delete keyword 
     deletes both the value of the property and the property itself. The delete operator is designed 
     to be used on object properties. It has no effect on variables or functions. The delete operator 
     should not be used on predefined JavaScript object properties. It can crash your application.

  8. Nested Objects: Objects can be nested inside other objects.
  
  9. All properties have a name. In addition they also have a value. The value is one of the  
     property's attributes. Other attributes are: enumerable, configurable, and writable. These 
     attributes define how the property can be accessed (is it readable?, is it writable?). In 
     JavaScript, all attributes can be read, but only the value attribute can be changed (and only if 
     the property is writable).
    - Enumerable: Determines if the property can be iterated over using a for...in loop or included in
      functions like Object.keys(). If set to true, the property is enumerable; if set to false, it is
      not.
    - Writable: Specifies whether the value of the property can be changed. If set to true, the 
      property value can be modified; if set to false, it is read-only.
    - Configurable: Controls whether the property's attributes (enumerable, writable, and 
      configurable) can be changed or if the property can be deleted. If set to true, the property can
      be modified or deleted; if set to false, it cannot. 
      
  10. Object.getOwnPropertyDescriptor(obj, prop): Returns the descriptor for the specified property of
      the given object. 
      
  11. Object.defineProperty(obj, prop, descriptor): Defines a new property or modifies an existing 
      property on the specified object. Object.defineProperty() contains the following properties:
    - value: The value of the property.
    - writable: A boolean indicating if the property is writable.
    - enumerable: A boolean indicating if the property is enumerable.
    - configurable: A boolean indicating if t    - he property is configurable.
    - get: A function to retrieve the property value (for accessor properties).
    - set: A function to set the property value (for accessor properties). */
     


  
  const person3 = {fname:" John",lname:" Doe",age: 25};

  // 1. Accessing Properties of Objects
  const firstName = person3.fname;

  const lastName = person3["lname"];

  const x = "age";
  const y = person3[x];



  // 2. Iteration on Objects
  for (let x in person) {
    console.log(person3.x); // Output: undefined * 3, x stores string value of property name.
  }

  for (let x in person3){
    console.log(person3[x]); // Output: John Doe 25
  }



  // 3. Property Name of Object
  const obj = {};
  const key1 = 1;
  const key2 = {name: 'John'};

  obj[key1] = 'value1'; // Note: key1 is converted to a string '1'
  obj[key2] = 'value2'; // Note: key2 is converted to a string '[object Object]'

  console.log(obj); // Output: { '1': 'value1', '[object Object]': 'value2' }



  // 4. Adding New Properties
   person3.city = "New York";



  // 5. Delete a Property
  delete person3.age;



  // 6. Nested Objects

  //Example-1
  myObj = {name: "John" , age:30, cars: { car1:"Ford", car2:"BMW", car3:"Fiat"}};
  myObj.cars.car1 = "Toyota";
  myObj.cars["car1"] = "Mahindra";
  myObj["cars"]["car1"] = "Tata";
  myObj["cars"].car1 = "Honda";


  //Example-2
  const myObj2 = {name: "John", age: 30, cars: [ {name:"Ford", models:["Fiesta", "Focus", "Mustang"]},
      {name:"BMW", models:["320", "X3", "X5"]}, {name:"Fiat", models:["500", "Panda"]} ]};
  myObj2.cars[1].name = "Mercedes";
  myObj2.cars[1].models[0] = "E-Class";



  // 7. Attributes of Object
  const obj = {name: 'John', age: 20};

  //Example-1 getOwenersPropertDescriptor();
  const descriptor = Object.getOwnPropertyDescriptor(obj, 'name');
  console.log(descriptor);


  //Example-2 defineProperty();
  Object.defineProperty(obj, 'name', {
    value: 'Manu',
    writable: false,
    enumerable: true,
    configurable: true
  });

  obj.name = "Arsala"; //Note: No Change as writable is false.




/* E. METHODS OF OBJETS
  1. An object method is an object's property containing a function definition.
  
  2. this: In an object method, this refers to the object. Alone, this refers to the global object.  
     In a function, this refers to the global object. In a function, in strict mode, this is undefined.
     In an event, this refers to the element that received the event. Methods like call(), apply(), 
     and bind() can refer this to any object. this is not a variable. It is a keyword. We cannot 
     change the value of this.
     
  3. Accessing Object Methods: We access an object method with the following syntax:
     objectName.methodName(). If we access the fullName property, without (), it will return the 
     function definition, generally an Iterable.
     
  4. Adding a Method to an Object: We can add a method to an object by assigning a property with a
     function definition. */



  // 1. Accessing Object Methods
  const person5 = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };
  console.log(person5.fullName);   // Output: [Function: fullName]
  console.log(person5.fullName()); // Output: John Doe


  // 2. Adding a Method to an Object
  person5.idNo = function () {
    return this.id;
  };




/* F. DISPLAYING OBJECTS
  1. Displaying a JavaScript object will output [object Object]. When we attempt to display an object
     directly in the DOM or in a string context, such as using console.log(), JavaScript calls the 
     object's toString() method to convert it to a string representation. 
     
  2. By default, the toString() method of an object returns "[object Object]". This behavior is a 
     result of how the toString() method is implemented in the Object.prototype. The behavior may vary
     depending on the console implementation and the environment in which the code is running. Thats 
     why in console toString() returns the Object Definition but on Webpage it displays [object, 
     Object]. 
     
  3. Arrays have their own toString() method that joins the elements into a string separated by 
     commas in both the console and the Webpage. 
     
  4. Some common solutions to display JavaScript objects are:
    - Displaying the Object Properties by NAME
    - Displaying the Object Properties in a LOOP
    - Displaying the Object using Object.values(): Any JavaScript object can be converted to an array
      using Object.values().
    - Displaying the Object using JSON.stringify(): Any JavaScript object can be stringified 
      (converted to a string) with the JavaScript function JSON.stringify(). */ 




  // 1. Direct Display on WebPage
  const person = {
    name: "John",
    age: 30,
    city: "New York"
  };

  console.log(person); // Output: { name: 'John', age: 30, city: 'New York' }
  document.getElementById("demo").innerHTML = person; // Output: [object Object]

  const array = [1, 2, 3, 4, 5];
  document.getElementById("demo").innerHTML = array; // Output: [1, 2, 3, 4, 5]



  // 2. Displaying the Object Properties by NAME
  document.getElementById("demo").innerHTML =
  person.name + "," + person.age + "," + person.city;



  //3. Displaying the Object Properties in a LOOP
  for(let i in person){
    document.getElementById("demo").innerHTML += person[i] + ", ";
  }

  //OR

  let text = "";
  for(let i in person){
    text += person[i] + ", ";
  }
  document.getElementById("demo").innerHTML = text;



  // 4. Displaying the Object using Object.values()
  const person6 = {
    name: "John",
    age: 30,
    city: "New York"
  };

  let array2 = Object.values(person6)
  document.getElementById("demo").innerHTML = array2;



  // 5. Displaying the Object using JSON.stringify()
  let stringAns = JSON.stringify(person6);
  document.getElemenById("demo").innerHTML = stringAns;



/* G. ACCESSORS IN OBJECTS
  1. Accessors are methods that get and set the value of an object's property. Accessors are
     automatically called when there is an attempt to read or write the property. */



/* H. CONSTRUCTORS OF OBJECTS */

/* I. PROTOTYPES IN OBJECTS */

/* J. MANAGEMENT IN OBJECTS */

/* K. PROTECTION IN OBJECTS */
  
  
  



  

  


  










  