//CHAPTER-8 ARRAYS IN JAVASCRIPT


/* A. INTRODUCTION TO ARRAY
  1. An array is a special variable, which can hold more than one value. The first Data Structure, 
     which can store multi values of different data type (Java-Same DataType). Arrays are Non-
     Primitive Data Types.
  
  2. Creating an Array: Using an array literal is the easiest way to create a JavaScript Array.
     We can also create array using the JavaScript Keyword new. Spaces and line breaks are not
     important. A declaration can span multiple line. 
  
  3. Accessing an Array: We can also create an array, and then provide the elements, or we can may
     change it also.
     
  4. Arrays are a special type of objects. "The typeof" operator in JavaScript returns "object" for 
     arrays. But, JavaScript arrays are best described as arrays.
     
  5. Array Elements Can Be Objects, Function and Array itself. Arrays are mutable unlike Strings. */




/* B. ARARY LITERAL VS NEW KEYWORD
  1. The primary difference between array literals and using new Array() is that array literals allow
     us to initialize arrays with elements directly, while new Array() allows us to specify the length
     or initialize the array with provided elements.
     
  2. When using array literals, the array is created as a new object each time the literal is 
     evaluated. However, when using new Array(), we're explicitly invoking the Array constructor to 
     create the array object. */


  //Example-1
  let marks = [92, 93, 94, 95, null];
  console.log(marks);

  //Example-2
  const cars = new Array("Saab", "Volvo", "BMW");
  cars[3] = "Audi";
  console.log(cars);

  //Example-3
  const points1= [40];
  const points2 = new Array(40);
  /* Note: Here the points1 will craete an array of length 1, and the points2 will create an array of 
     length 40. */

  const points3 = [40, 50, 60];
  const points4 = new Array(40, 50, 60);
  /* Note: Here the points3 will craete an array of length 3, and the points2 will create an array of 
   length 3. */
  
  //Example-4
  const cars2 = [];
  cars2[0]= "Saab";
  cars2[1]= "Volvo";
  cars2[2]= "BMW";
  console.log(cars2[0]);
  console.log(cars2[5]);
  //Note: Returns undefined data type when accessed the index not present. (Java- Runtime Error).

  //Example-5
  marks[5] = 76;
  console.log(marks);
  //Note: We can increase the size of arrays by accessing the undeclared index.

  //Example-6
  marks[20] = 23;
  console.log(marks); //Output- [92, 93, 94, 62, null, 76, <14 empty item>, 23]
  /*Note: If you skip some indices and access a index and declare a value, then for the missed 
    indices it will return <14 empty item>. */

  //Example-7
  console.log(typeof marks);  //Output- object



/* C. ARRAYS ITERATION
  1. Classical for Loop- Refer ControlStatement.js
  
  2. For-In Loop- In for-in loop the variable(index) stores the index number.
  
  3. For-Of Loop- In for-of loop the variable(value) stores the index value.
  
  4. For-Each Loop- The forEach() method calls a function (a callback function) once for each array 
     element. Unlike for loops, forEach() does not create a new scope for each iteration, meaning 
     variables defined within the callback function are accessible outside of it. The forEach() method 
     does not return a value. It simply iterates over each element of the array and executes the  
     callback function for each element. */


  //Example-1 Classical For Loop
  let arrayForLoop = [1,2,3,4];
  for(let i=0; i<arrayForLoop.length; i++){
    console.log(arrayForLoop[i]);
  }

  //Example-2 For-In Loop
  let arrayForInLoop = [1,2,3,4];
  for(let index in arrayForInLoop){
    console.log(index); //Output- 0,1,2,3
  }

  //Example-3 For-Of Loop
  let arrayForOfLoop = [1,2,3,4];
  for(let elementValue of arrayForOfLoop){
    console.log(elementValue); //Output- 1 2 3 4
  }

  //Example-4 For-Each Loop
  let arrayForEachLoop = [1,2,3,4];
  arrayForEachLoop.forEach((e)=>{
    console.log(e*e)
  });
  /* Note: In for-each loop the variable(e) stores the element of each index. VIA-> Index and Array are 
    optional in Parameter. */



/* D. ARRAY METHODS AND PROPERTIES
  1. length: The length property returns the length of an array. The length is a read-only. 
  
  2. toString(): The toString() method returns an array as a comma separated string, with no brackets.
  
  3. at(): The at() method returns the element at the specified index given as argument.
  
  4. join(): The join() method returns an array as a string with sepreater. It takes an optional parameter
     STRING, that specifies how the array elements are separated in the resulting string. If omitted, the
     array elements are joined with a comma , by default. **
  
  5. pop(): In JavaScript, the pop() method is used to remove the last element from an array and returns 
     that element. It mutates (modifies) the original array by removing the last element from it.
  
  6. push(): In JavaScript, the push() method is used to add one or more elements to the end of an array
     and returns the new length of the array after the elements have been added.
  
  7. shift(): The shift() method removes the first array element and "shifts" all other elements to a 
     lower index. Return value removed.
     
  8. unshift():The unshift() method adds one or more elements to the beginning of an array and returns
     the new length of the array after adding the elements.
     
  9. concat(): Concatenating arrays means joining arrays end-to-end. The concat() method creates a new
     array by merging (concatenating) existing arrays. Returns the newly created Array. The concat()
     method can take any number of array arguments.
      
  10. copyWithin(): The copyWithin() method in JavaScript is used to shallow copy a portion of an array
      to another location within the same array. It allows us to modify an array by copying a sequence
      of elements to a specified start index, overwriting existing elements if necessary. Returns the 
      same array. **
  
  11. flat(): The flat() method creates a new array with sub-array elements concatenated to a specified
      depth. Flattening an array is the process of reducing the dimensionality of an array. Flattening 
      is useful when we want to convert a multi-dimensional array into a one-dimensional array.

  12. splice(): The splice() method adds/removes elements from an array. The first parameter (2) 
      defines the position where new elements should be added (spliced in). The second parameter (0) 
      defines how many elements should be removed. The rest of the parameters define the new elements 
      to be added. The splice() method returns an Array with the deleted items. It is used to remove 
      elements from the Array by using the first and second parameter only. **
  
  13. slice(): The slice() method slices out a piece of an array. The method takes two parameters: the 
      starting index, and the ending index+1. The slice() method creates a new array. It can also take 
      one parameter, the end index+1. By default the start index becomes 0. **
  
  14. indexOf(): The indexOf() method returns the first index at which a given element can be found in
      the array. If the element is not present, the method returns -1. First Parameter is item. Second
      parameter is the starting index, where to start the search.
  
  15. lastIndexOf(): The lastIndexOf() method returns the last index at which a given element can be
      found in the array. If the element is not present, the method returns -1. First Parameter is item.
      Second parameter is the starting index, where to start the search.
  
  16. includes(): This allows us to check if an element is present in an array (including NaN, unlike 
      indexOf). Array.includes() allows to check for NaN values. It returns boolean value.
  
  17. find(): The find() method returns the value of the first array element that passes a test 
      function. The Test Function takes parameter as value, index, array.{VIA}
  
  18. findIndex(): The findIndex() method returns the index of the first array element that passes
      a test function. The Test Function takes parameter as value, index, array.{VIA} 
  
  19. findLast(): ES2023 added the findLast() method that will start from the end of an array and 
      return the value of the first element that satisfies a condition.
  
  20. findLastIndex(): The findLastIndex() method finds the index of the last element that satisfies a
      condition.
  
  21. sort(): The sort() method sorts an array alphabetically inplace. Dictionary Arrangement.
  
  22. reverse(): The reverse() method reverses the elements in an array.  */


   //Example-1
   let array = [1,2,3,4,5];
   console.log(array.length); //Output- 5

   //Example-2
   console.log(array.toString()); //Output- 1,2,3,4,5

   //Example-3
   console.log(array.at(2)); //Output- 3

   //Example-4
   console.log(array.join(" and ")); //Output- 1 and 2 and 3 and 4 and 5

   //Example-5
   console.log(array.pop()); //Output- 5
   console.log(array); //Output- [1,2,3,4]

   //Example-6
   console.log(array.push(6)); //Output- 5(New Length of Mutated Array)
   console.log(array); //Output- [1,2,3,4,6]

   //Example-7
   console.log(array.shift()); //Output- 1
   console.log(array); //Output- [2,3,4,6]

   //Example-8
   console.log(array.unshift(1)); //Output- 5(New Length of Mutated Array)
   console.log(array); //Output- [1,2,3,4,6]
   console.log(array.unshift(-1, -2)); //Output- 7(New Length of Mutated Array)
   console.log(array); //Output- [-1, -2, 1, 2, 3, 4, 6]

   //Example-9
   let concatArray1 = [1,2,3,4];
   let concatArray2 = [5,6,7,8];
   let concatArray3 = [9,10,11,12];
   console.log(concatArray1.concat(concatArray2, concatArray3)); //Output- [1,2,3,4,5,6,7,8,9,10,11,12]

   //Example-10
   console.log(array.copyWithin(1, 3, 5)); //Output- [-1, 2, 3, 2, 3, 4, 6] {target, start, end+1}

   //Example-11
   console.log(array.splice(2, 2, 23, 24)); //Output- [3,2]  {Target to Add, Numbers of Elements Removed from Target, ...Elements to Add}}
   console.log(array); //Output- [-1, 2, 23, 24, 3, 4, 6]

   //Example-12
   console.log(array.slice(2, 4)); //Output- [23,24] {start, end+1}

   //Example-13
   console.log(array.indexOf(2)); //Output- 1

   //Example-14
   console.log(array.lastIndexOf(2)); //Output- 1

   //Example-15
   console.log(array.includes(2)); //Output- true

   //Example-16
   console.log(array.find((e)=>{return e>2})); //Output- 3

   //Example-17
   console.log(array.findIndex((e)=>{return e>2})); //Output- 2

   //Example-18
   console.log(array.findLast((e)=>{return e>2})); //Output- 3

   //Example-19
   console.log(array.findLastIndex((e)=>{return e>2})); //Output- 2

   //Example-20
   console.log(array.sort()); //Output- [-1, 2, 23, 24,3, 4,  6]
   console.log(["Manu", "Arsala", "Vaishnavi"].sort()); //Output- [ 'Arsala', 'Manu', 'Vaishnavi' ]

   //Example-21
   console.log(array.reverse()); //Output- [6, 4, 3, 24, 23, 2, -1]
   console.log(["Manu", "Arsala", "Vaishnavi"].reverse()); //Output- [ 'Vaishnavi', 'Arsala', 'Manu' ]

   


/* E. ARRAY ITERATION METHODS
  1. Spread (...): The spread operator (...) in JavaScript allows an iterable, such as an array or a 
     string, to be expanded or spread into individual elements. It can be useful for expanding arrays, 
     copying element of an array, cocantenating two or more arrays, passing function arguments etc.
  
  2. map(): The map() method creates a new array by performing a function on each array element. The 
     map() method does not execute the function for array elements without values. It does not change the
     original array. The map method sends the value index and array to crete change in the value of index
     and give the return value to the new array.
     
  3. flatMap(): The flatMap() method first maps all elements of an array using map() and then creates a   
     new array by flattening the array.

  4. filter(): The filter() method iterates over each element in the array. For each element, it calls 
     the provided callback function with three arguments: the current element, the index of the current 
     element, and the array itself. The callback function returns true to include the element in the new
     array, or false to exclude it. The filter() method then returns a new array containing only the
     elements for which the callback function returned true. The callback method provided to the filter()
     function should always return a boolean value. 
     
  5. reduce(): In JavaScript, the reduce() method is used to reduce an array to a single value. It 
     executes a provided callback function once for each element in the array, resulting in a single 
     output value. The callback function accumulates a result by iterating through the array, updating 
     the accumulator value with each iteration. The reduce() method takes two main arguments: a callback
     function and an initial value for the accumulator. The callback function accepts four arguments: an
     accumulator, the current element, the current index, and the array itself. The callback function is
     called for each element in the array, starting from the first element. The accumulator stores the 
     accumulated result of the callback function's operations. The result of the reduce() method is the 
     final value of the accumulator after iterating through all elements of the array. The callback 
     function provided to the reduce() method can return any value. However, it's important to note that
     the return value of the callback function determines the value of the accumulator for the next 
     iteration. 
     
  6. reduceRight(): Same as reduce(). The reduceRight() works from right-to-left in the array. 
  
  7. every(): The every() method checks if all array values pass a test.
  
  8. some(): The some() method checks if some array values pass a test.

  9. from(): The Array.from() method returns an Array object from any object with a length property or 
     any iterable object. */


  //Example-1 Expand Array
  let arraySpread = [1,2,3,4];
  let expandedArray = [...arraySpread, 4,5];
  console.log(expandedArray);


  //Example-2 Copy Array
  let arraySpreadCopy = [1,2,3,4];
  let copiedArray = [...arraySpreadCopy];
  console.log(copiedArray);


  //Example-3 Concatenate Array
  let arraySpreadConcat1 = [1,2,3,4];
  let arraySpradeConcat2 = [5,6,7,8];
  let concatenatedArray = [...arraySpreadConcat1, ...arraySpradeConcat2];
  console.log(concatenatedArray);


  //Example-4 Passing Function Arguments
  let arraySpreadFunction = [1,2,3,4];

  function spreadingFunction(a,b,c,d){
    return a+b+c+d;
  }
  console.log(spreadingFunction(...arraySpreadFunction));


  //Example-5 
  const numbers1 = [45, 4, 9, 16, 25];
  const numbers2 = numbers1.map(myFunction);

  function myFunction(value, index, array) {
    return value * 2;
  }
  console.log(numbers2);  //Output- [90, 8, 18, 32, 50]


  //Example-6
  const array3 = [45, 4, 9, 16, 25];
  const array4 = array3.map((value)=> [value, value*2]);

  console.log(array4); //Output- [[45, 90], [4, 8], [9, 18], [16, 32], [25, 50]]

 
  //Example-7
  const numbers3 = [45, 4, 9, 16, 25];
  const numbers4 = numbers3.flatMap(myFunction);
  
  function myFunction(value, index, array) {
    return [value, value*2]
  }

  console.log(numbers4);   //Output: [45, 90, 4, 18, 9, 36, 16, 32, 25, 50]


  //Example-8
  const ages = [32, 33, 16, 40];
  const oldAges = ages.filter(age=> age>30);
  
  console.log(oldAges);  //Output: [32, 33, 40]


  //Example-9 Remove Duplicates
  let array1 = [1,1,1,2,3,3,4,4];
  let ans = array1.filter(removeDuplicate);

  function removeDuplicate(value, index, array1){
    return array1.indexOf(value) == index;
  }
  console.log(ans);  //Output: [1,2,3,4]


  //Example-10
  const votesByState = [24, 34, 12, 56, 23, 45, 67, 89, 90, 23, 45, 56, 67];
  const totalVote = votesByState.reduce(myFunction41, 0);

  function myFunction41(total, value){
    return total + value;
  }
  console.log(totalVote); //Output- 631


  //Example-11
  const votesByState1 = [24, 34, 12, 56, 23, 45, 67, 89, 90, 23, 45, 56, 67];
  const totalVote1 = votesByState1.reduceRight(myFunction51, 0);

  function myFunction51(total, value){
    return total + value;
  }
  console.log(totalVote1); //Output- 631


  //Example-12
  const agesOfPeople = [45, 21, 90, 98, 25];
  let allOver18 = agesOfPeople.every(myFunction);
  function myFunction(value, index, array) {
    return value > 18;
  }
  console.log(`All of them are over 18: ${allOver18}`);  //Output- All of them are over 18: true


  //Example-13
  const allAges = [32, 33, 16, 40];
  const allAges1 = allAges.every((age)=> age>30);
  console.log(allAges1);  //Output- false


  //Example-14
  const allAges2 = [32, 33, 16, 40];
  const allAges3 = allAges2.some((age)=> age>30);
  console.log(allAges3); //Output- true


  //Example-15
  const arr = Array.from("ABCDEFG");
  console.log(arr); //Output- [ 'A', 'B', 'C', 'D', 'E', 'F', 'G' ]




/* E. ARRAY DESTRUCTURING 
   1. Array destructuring is a feature in JavaScript that allows you to extract values from arrays or
      iterable objects (such as arrays, strings, or Sets) and assign them to variables in a concise and 
      readable way. It provides a more convenient syntax for extracting multiple values from arrays and 
      objects into distinct variables.
      
   2. Array destructuring can also be applied to nested arrays, allowing you to destructure arrays
      within arrays.
      
   3. We can skip array values using two or more commas.

   4. We can pick up values from specific index locations of an array. */


   //Example-1
   let numbers = [1, 2, 3];
   let [a, b, c] = numbers;
   console.log(a); // Output: 1
   console.log(b); // Output: 2
   console.log(c); // Output: 3
    

   //Example-2
   let [head, ...tail] = numbers;
   console.log(head); // Output: 1
   console.log(tail); // Output: [2, 3]


   //Example-3
   let nestedArray = [1, [2, 3], 4];
   let [x, [y, z], w] = nestedArray;
   console.log(x); // Output: 1
   console.log(y); // Output: 2
   console.log(z); // Output: 3
   console.log(w); // Output: 4 


   //Example-4
   let [m, n] = numbers;
   console.log(m); // Output: 1
   console.log(n); // Output: 2


   //Example-5
   let [p, , r] = numbers;
   console.log(p); // Output: 1
   console.log(r); // Output: 3


    //Example-6
    const fruits = ["Bananas", "Oranges", "Apples", "Mangos"];
    let [i, , , l] = fruits;
    console.log(i); // Output: Bananas
    console.log(l); // Output: Mangos


    //Example-7
    let {[0]:f ,[1]:g} = fruits;
    console.log(f); // Output: Bananas
    console.log(g); // Output: Oranges



/* F. CONST WITH ARRAY
   1. It has become a common practice to declare arrays using const. An array declared with const
      cannot be reassigned. However, elements of the array can be modified. It does NOT define a
      constant array. It defines a constant reference to an array.
      
   2. An array declared with const must be initialized when it is declared.

   3. An array declared with const has Block Scope. An array declared in a block is not the same as
      an array declared outside the block.

   4. Redeclaring an array declared with var is allowed anywhere in a program. Redeclaring or 
      reassigning an array to const, in the same scope, or in the same block, is not allowed. 
      Redeclaring or reassigning an existing const array, in the same scope, or in the same block, is
      not allowed. Redeclaring an array with const, in another scope, or in another block, is allowed. */


   //Example-1
   const cars = ["Saab", "Volvo", "BMW"];
   // cars = ["Toyota", "Volvo", "Audi"];    //Output: Syntax Error

   cars[0] = "Toyota";
   cars.push("Audi");   //Output: ["Toyota", "Volvo", "BMW", "Audi"]


   //Example-2
   const cars = ["Saab", "Volvo", "BMW"];

   {
     const cars = ["Toyota", "Volvo", "BMW"];
     console.log(cars[0]); // Output: Toyota
   }
   console.log(cars[0]); //Output: Saab


   //Example-3
   var cars = ["Saab", "Volvo", "BMW"];
 
   {
     var cars = ["Toyota", "Volvo", "BMW"];
      console.log(cars[0]); // Output: Toyota
   }
   console.log(cars[0]); // Output: Toyota

   
   
   







  













