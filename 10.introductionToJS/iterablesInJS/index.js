//CHAPTER-10 ITERABLES

/* A. WHAT ARE ITERABLES?
  1. Iterables are iterable objects like Arrays, String, Maps, Sets, HTMLCollection, NodeList etc.
  2. Iterables are objects that have a Symbol.iterator method. The Symbol.iterator method returns an 
     object that has a next method. 
  3. Iterables can be accessed with simple and efficient code.
  4. Iterables can be iterated over with for..of loops. */


  //Example-1 Array
  const arr = [3, 5, 7];

  for(let i of arr){
    console.log(i);
  }


  //Example-2 String
  const name = "Manu Chaitanya";

  for (let x of name) {
    console.log(x);
  }


  //Example-3 Map
  const fruits = new Map();
  fruits.set("apple", 500);
  fruits.set("banana", 300);
  fruits.set("orange", 200);

  for (let x of fruits){
    console.log(x);
  }


  //Example-4 Set
  const letters = new Set();
  letters.add("a");
  letters.add("b");
  letters.add("c");

  for (let x of letters){
    console.log(x);
  }



/* B. SETS 
  1. A JavaScript Set is a collection of unique values. Each value can only occur once in a Set.
  
  2. How to Create a Set:
   - Passing an Array to new Set().
   - Create a new Set and use add() to add values.
   - Create a new Set and use add() to add variables.
  
  3. Properties and Methods of Set:
   - size: Returns the number of elements in a Set.
   - values(): Returns an iterator object(Set Iterator) that contains all the values in a Set.
   - add(): Adds a value to a Set. Returns Boolean.
   - delete(): Removes a value from a Set.
   - clear(): Removes all values from a Set.
   - has(): Checks if a value exists in a Set. Returns Boolean.
   - keys(): Returns the Iterator Object. Same as values(). 
   - entries(): Returns an Iterator Object with the [value,value] Array from a Set. */


  //Example-1
  const letter = new Set();
  letter.add("a");
  letter.add("b");
  letter.add("c");
  letter.add("a"); //Note: Duplicate values are ignored, returns false.

  //Example-2
  const alternative = new Set(["a","b","c"]);

  //Example-3
  console.log(letter);  //Output: Set(3) {"a", "b", "c"}

  //Example-4
  console.log(letter.size);  //Output: 3

  //Example-5
  console.log(letter.has("a")); // Output: true

  //Example-6
  letter.delete("a");
  console.log(letter);  // Output: Set(2) {"b", "c"}

  //Example-7
  letter.clear();
  console.log(letter);  // Output: Set(0) {}

  //Example-8
  console.log(letter.values()); // Output: SetIterator {"a", "b", "c"}

  //Example-9
  console.log(letter.keys());  // Output: SetIterator {"a", "b", "c"}

  //Example-10
  console.log(letter.entries());  // Output: [Set Entries] { [ 'a', 'a' ], [ 'b', 'b' ], [ 'c', 'c' ] }




/* C. MAPS
  1. Maps in JavaScript are collections of key-value pairs where each key can be any value (including 
     objects and primitive types), and each value can also be any value.
  
  2. How to Create a Map:
   - Pass an Array to new Map().
   - Create a new Map and use set() to add key-value pairs. If the key already exists, the value will
     be updated.
   - Create a new Map and use set() to add variables.
   
  3. Maps are Iterable Objects.
  
  4. Properties and Methods of Map:
   - size: Returns the number of key-value pairs in a Map.
   - get(key): Returns the value associated with the specified key, or undefined if the key does not
     exist.
   - keys(): Returns an iterator object that contains all the keys in a Map.
   - values(): Returns an iterator object that contains all the values in a Map.
   - entries(): Returns an iterator object that contains all the key-value pairs in a Map.
   - has(): Checks if a key exists in a Map.
   - delete(): Removes a key-value pair from a Map.
   - clear(): Removes all key-value pairs from a Map. */


  //Example-1
  const cars = new Map();
  cars.set("volvo", "XC90");
  cars.set("saab", "9-5");
  cars.set("mercedes", "S-Class");
  cars.set("audi", "A8");

  //Example-2
  console.log(cars.get("volvo")); // Output: XC90

  //Example-3
  console.log(cars);  /* Output: Map(4) {"volvo" => "XC90", "saab" => "9-5", "mercedes" => "S-Class", 
  "audi" => "A8"} */

  //Example-4
  console.log(cars.size);  // Output: 4

  //Example-5
  console.log(cars.has("volvo"));  // Output: true

  //Example-6
  cars.delete("saab");
  console.log(cars);  // Output: Map(3) {"volvo" => "XC90", "mercedes" => "S-Class", "audi" => "A8"}

  //Example-7
  cars.clear();
  console.log(cars);  // Output: Map(0) {}

  //Example-8
  console.log(cars.values()); // Output: Map Iterator {"XC90", "9-5", "S-Class", "A8"}

  //Example-9
  console.log(cars.keys());  // Output: Map Iterator {"volvo", "saab", "mercedes", "audi"}

  //Example-10
  console.log(cars.entries()); /* Output: Map Entries { [ 'volvo', 'XC90' ], [ 'saab', '9-5'], [ 
  'mercedes', 'S-Class' ], [ 'audi', 'A8' ] } */


 

   


