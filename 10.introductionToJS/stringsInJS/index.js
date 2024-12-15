//CHAPTER-7 STRINGS IN JAVASCRIPT

//THEORY
/* A. INTRODUCTION TO STRINGS
  1. JavaScript strings are for storing and manipulating text.
  2. A JavaScript string is zero or more characters written inside quotes.
  3. We can use single or double quotes.
  4. We can use quotes inside a string, as long as they don't match the quotes surrounding the string.
  5. To find the length of a string, use the built-in length property.
  6. Escape Characters- Refer escapeCharacters-I.png and escapeCharacters-II.png  
  7. Breaking Long Code Lines: For best readability, programmers often like to avoid code lines longer 
     than 80 characters. If a JavaScript statement does not fit on one line, the best place to break it
     using backslash.
  8. Primitive String are Immutable. */

   let a = "Manu Chaitanya";
   
   let answer1 = "It's alright";
   let answer2 = "He is called 'Johnny'";
   let answer3 = 'He is called "Johnny"';
   
   let text1 = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   let length = text1.length;
   
   // let text2 = "We are the so-called "Vikings" from the north.";    // -> Error
   let text3 = "We are the so-called \"Vikings\" from the north.";  // -> Using Escape Characters
   let line = "Manu\nChaitanya";
   
   let text4 = "My name is Manu Chaitanya, my father is a \
           business man and a land broker";
   
   console.log(text4);
   


/* B. STRINGS AS OBJECT
  1. Normally, JavaScript strings are primitive values, created from literals.
  2. But strings can also be defined as objects with the keyword new. 
  3. The new keyword complicates the code and slows down execution speed.
  4. Comparing two JavaScript objects always returns false. 
  5. The expression x == y evaluates to true in JavaScript because of automatic type coercion that
     occurs when using the loose equality operator (==). Let's break down why this comparison retu-
     rns true:
    - Automatic Type Conversion:
      When comparing values of different types using loose equality (==), JavaScript performs type 
      coercion to try to make the comparison valid. In this case, since x is a string primitive John
      and y is a string object (created using the new String() constructor), JavaScript will attempt to
      convert one of the operands to match the other.
    - Object-to-Primitive Conversion: When comparing a string primitive (x) to a string object (y), JS
      performs object-to-primitive conversion on the string object (y) to coerce it into a string primitive.
      This conversion involves calling the toString method of the object, valueOf if toString is not present
      to obtain the primitive representation of the object.
    - Comparison of Primitives: After the conversion, both operands (x and y) are now string primitives. 
      JavaScript then compares the values of the two primitives. Since they both represent the same string,
      "John" the comparison evaluates to true. 
  6. Object Strings are Mutable. */


   let ex1 = new String("Manaswani Mukta");
   let ex2 = new String("Manaswani Mukta");
   
   let ex3 = "Manaswani Mukta";
   
   console.log(ex1 == ex2);   //False
   console.log(ex1 === ex2);  //False
   
   console.log(ex1 == ex3);   //True
   console.log(ex1 === ex3);  //False
   
   
   let strObject1 = new String("Hello");
   let strObject2 = new String("Hello");
   console.log(strObject1.valueOf() === strObject2.valueOf()); // Output: true




/* C. STRING METHODS
  1. JavaScript provides several built-in methods for Primitive Strings and Object Strings.
  2. Primitive strings are immutable, meaning their values cannot be changed after they are created. When we 
     apply a string method to a primitive string, JavaScript automatically converts the primitive string to
     a TEMPORARY STRING OBJECT, applies the method, and then returns the result as a primitive value. This 
     process is known as "boxing" or "wrapping" the primitive value with an object wrapper temporarily to access
     the method, and then "unboxing" the result back as a primitive value.
  3. String objects are mutable, meaning their values can be changed. When we apply a string method to a str-
     ing object, JavaScript directly invokes the method on the object without any conversion. Since string obje-
     cts are already objects, there's no need for boxing or unboxing.
  4. Refer- https://www.w3schools.com/js/js_string_methods.asp 
  5. Some new methods than Java:
     a) slice(start, end): Extracts a part of a string and returns the extracted part in a new string.
     b) padStart(length, what to pad): Pads a string from the start. It pads a string with another string
        (multiple times) until it reaches a given length(final string length).
     c) split(): A string can be converted to an array with the split() method.
     d) match(): The match() method returns an array containing the first results of matching a string against
        a string.
     e) includes(): method returns true if a string contains a specified value. Otherwise it returns false.
     f) join(): The join() method joins all elements of an array into a string. */

   
   let text5 = "Apple, Banana, Kiwi";
   let part5 = text5.slice(7, 13);
   console.log(part5);
   
   let text6 = "5";
   text6 = text6.padStart(4, " ");
   console.log(text6);
   
   let details = "Manu Chaitanya, 2, 21, Fair";
   let arr = details.split(",");
   console.log(arr);
   
   
   let text7 = "The rain in SPAIN stays mainly in the plain";
   let arr2 = text7.match("ain");
   let arr3 = text7.match(/ain/g);
   let arr4 = text7.match(/ain/);
   console.log(arr2);
   console.log(arr3);
   console.log(arr4);
   
   
   let text8 = "Hello world, welcome to the universe.";
   let f = text8.includes("world");
   console.log(f);
   




/* C. STRING TEMPLATES
  1. Back-Tics Syntax- Template Strings use back-ticks (``) rather than the quotes ("") to define a string.
     Template Strings allow both single and double quotes inside a string. Template Strings allow multiline
     strings. 
  2. Interpolation- Template String provide an easy way to interpolate variables and expressions into strings.
     The method is called string interpolation. We write this in back-tick only. Automatic replacing of variables
    with real values is called string interpolation. */
   
   
   //Example-1 Back-Tick Syntax
   let text =
      `The quick "brown" fox
     jumps 'over'
     the lazy dog`;
   console.log(text);
   
   
   
   //Example-2 Interpolation
   
   let firstName = "Manu";
   let address = `${firstName}'s address is Bennett University`;
   
   
   let ans = `${2 == 4}'s address is Bennett University`;
   console.log(address);
   
   
   


//EXERCISE
   //QUETSION-1 Trim Method
   let name = "   Manu Chaitanya   ";
   let trimmedName = name.trim();
   console.log(trimmedName);
   
   
   
   //QUETSION-2 Masking Debit Card Number
   let cardNumber = "1234-5678-9012-3456";
   let maskCardNumber = cardNumber.slice(0, 4).padEnd(16, "*");;
   console.log(maskCardNumber);
   
   
   
   //QUETSION-3 Generate Random Password
   function generatePassword(length) {
      const charSet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
      let password = "";
   
      for (let i = 0; i < length; i++) {
         const ranIndex = Math.floor(Math.random() * charSet.length);
         password += charSet[ranIndex];
      }
      return password;
   }
   console.log(generatePassword(8));
   
   
   
   //QUETSION-4 Program for Print Capital and Small Letters
   let smallLetters = "";
   let capitalLetters = "";
   
   for (let i = 97; i <= 122; i++) {
      smallLetters += String.fromCharCode(i) + ", ";
   }
   console.log(smallLetters);
   
   for (let i = 65; i <= 90; i++) {
      capitalLetters += String.fromCharCode(i) + ", ";
   }
   console.log(capitalLetters);
   
   /* T1: The String.fromCharCode() static method returns a STRING created from the specified sequence of UTF-16 code 
      units. */
   
   
   
   //QUETSION-5 Replace the Text from Another String
   let string = "Hello World World";
   let replacedString = string.replace("World", "Universe");
   let updatedString = string.replaceAll("World", "Manu");
   console.log(replacedString);
   console.log(updatedString);


   
   //QUESTION-6 Reverse the String
   let str = "Hello World";
   let reversedStr = str.split("").reverse().join("");
   console.log(reversedStr);


   //QUETSION-7 Convert String Into Object
   let personDetails = `{"name": "Manu", "age" :21}`;
   let object1 = JSON.parse(personDetails);
   console.log(object1);

   
   
   
   
   
   
   
   
   
   