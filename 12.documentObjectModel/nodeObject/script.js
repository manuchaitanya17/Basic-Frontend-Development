//CHAPTER-7 NODE INTERFACE

/* A. INTRODUCTION TO NODE OBJECT
  1. In the context of the Document Object Model (DOM), a Node is the fundamental building block that
     represents a single component in the document tree. 
     
  2. The DOM treats the entire document as a tree structure composed of nodes, including elements (like
     <div>, <p>, <a>), text nodes (the actual text content), comments, and other types of nodes. Document,
     CharacterData and Element all three are inherited by Node. 
     
  3. The Node interface defines several properties that provide information about the node and its
     relationship with other nodes in the DOM tree.
     
  4. With the HTML DOM, we can navigate the node tree using node relationships. The entire document is 
     a document node. Every HTML element is an element node. The text inside HTML elements are text  
     nodes. All comments are comment nodes.
     
  5. With the HTML DOM, all nodes in the node tree can be accessed by JavaScript. New nodes can be 
     created, and all nodes can be modified or deleted. */





/* B. PROPETIES OF NODE OBJECT
  1. nodeType(R): This property returns an integer value representing the type of the node (e.g., 1   
     for Element Node, 3 for a Text Node, 8 for a Comment Node, 9 for Document Node). 
     
  2. nodeName(R): This property returns the name of the node (e.g., the tag name for an element node, 
    '#text' for a text node, '#comment' for a comment node, #document for document node, H1 for 
     heading node) as string.
     
  3. nodeValue(R/W): The nodeValue property returns the text content of a node, but its behavior  
     varies depending on the type of node. Returns null for Element Nodes and Document Nodes. Text of
     the CharacterData Nodes as String.
     
  4. ownerDocument(R): This property returns the document object(root) associated with the current 
     node.*/


   //Example-1
   const firstChildNode = document.body.firstChild;
   console.log(firstChildNode.nodeType);  //Output: 1 for a Heading Element Node.


   //Example-2
   console.log(firstChildNode.nodeName);  //Output: e.g. H1, H2, H3, H4, H5, H6, P, A, SPAN, ...
   document.getElementById("id02").innerHTML = document.getElementById("id01").nodeName;

   console.log(document.getElementById("id02").innerHTML);
   //Note: Remember don't get confused that h1 as tag will be inserted in the id02, "H1" will be inserted.
   
   
   //Example-3
   console.log(firstChildNode.nodeValue); //Output: e.g. "Hello World".


   //Example-4
   document.getElementById("id02").innerHTML = document.getElementById("id01").firstChild.nodeValue;
   document.getElementById("id02").innerHTML = document.getElementById("id01").childNodes[0].nodeValue;




/* C. PROPERTIES OF NODE OBJECT FOR NAVIGATION
  1. parentNode: This property returns the reference of parent node of the current node or null if the 
     node has no parent. This property allows you to navigate up the document tree.
  
  2. childNodes: This property returns a live NodeList collection of child nodes (including text nodes 
     and comments).
  
  3. firstChild and lastChild: The firstChild property returns the first child node of the current  
     node, or null if the node has no children. The lastChild property returns the last child node of 
     the current node, or null if the node has no children.
     
  4. nextSibling and previousSibling: The nextSibling property returns the next sibling node of the
     current node, or null if there is no next sibling. The previousSibling property returns the  
     previous sibling node of the current node, or null if there is no previous sibling. */



   //Example-1
   const bodyElement1 = document.body;
   const parentOfBody = bodyElement1.parentNode; 
   console.log(parentOfBody);  //Output: <html> ... </html>
   
   
   //Example-2
   const bodyElement2 = document.body;
   const childNodesOfBody = bodyElement2.childNodes;
   console.log(childNodesOfBody);  //Output: NodeList(8) 

   console.log(childNodesOfBody.length); //Output:8

   for (let i = 0; i < childNodesOfBody.length; i++) {
     const childNode = childNodesOfBody[i];
     console.log(childNode.nodeName); //Output: The name of each Child Node.
   }


   //Example-3
   const bodyElement3 = document.body;
   const firstChildOfBody = bodyElement3.firstChild;
   const lastChildOfBody = bodyElement3.lastChild;
   
   console.log(firstChildOfBody.nodeName); //Output: The name of the First Child Node
   console.log(lastChildOfBody.nodeName);  //Output: The name of the Last Child Node
   
   
   //Example-6
   const bodyElement4 = document.body;

   const nextSiblingOfBody = bodyElement4.nextSibling;
   const previousSiblingOfBody = bodyElement4.previousSibling;
   
   console.log(nextSiblingOfBody.nodeName); //Output: The name of the next Sibling Node.




/* D. METHODS OF NODE OBJECT
  1. append(): The appendChild() method is used to add a new child node to the end of the list of
     children of a specified parent node. It takes the newly created node as an argument. When 
     appendChild(newChild) is called, it adds the newChild node as the last child of the parent node.
     If the newChild node is already part of the DOM tree (i.e., it has a parent node), appendChild() 
     removes it from its current parent before appending it to the new parent. If newChild is a document
     fragment, its children are appended individually to the parent node. The appendChild() method  
     returns the newly appended child node.

  2. prepend(): The prependChild() method is used to add a new child node to the beginning of the
     list of children of a specified parent node. It takes the newly created node as an argument. When
     prependChild(newChild) is called, it adds the newChild node as the first child of the parent node.
     
  2. insertBefore(): The insertBefore() method in JavaScript is used to insert a new node before a 
     specified reference node within the child nodes of a parent node. parent. The parent node where the
     new node will be inserted. newNode, the node to be inserted. referenceNode, the node before which 
     newNode will be inserted. If referenceNode is null, newNode is inserted at the end of the list of
     child nodes. When insertBefore(newNode, referenceNode) is called, it inserts the newNode node as a 
     child of the parent node, before the referenceNode node. If referenceNode is null or not found in 
     the parent's child nodes, newNode is appended to the end of the list of child nodes. If the newNode
     node is already part of the DOM tree, insertBefore() moves it to its new position rather than 
     creating a new instance of the node. If newNode is a document fragment, its children are inserted 
     individually before the referenceNode. The insertBefore() method returns the inserted node 
     (newNode).

  3. removeChild(): The removeChild() method in JavaScript is used to remove a specified child node from
     its parent node. Parameters are the parent node: from which the child node will be removed.
     childNode: The node to be removed from the parent node. When removeChild(childNode) is called on a 
     parent node, it removes the specified childNode from the list of child nodes belonging to that 
     parent node. If childNode is not a child of parent, or if it is null, removeChild() throws a 
     DOMException error. After removal, childNode is no longer part of the DOM tree and is effectively
     disconnected from the document. The removeChild() method does not return any value. It modifies the 
     DOM tree by removing the specified child node from its parent node. The removeChild() method is 
     designed to remove a single child node from its parent node. It doesn't accept a NodeList as an 
     argument.

  4. remove(): In JavaScript, there is no built-in remove() method for removing elements from the DOM 
     directly. However, starting from ECMAScript 2015 (ES6), the remove() method was introduced as a 
     standard method for removing elements from the DOM. This method is available on DOM elements and 
     allows you to remove the element from its parent node. When remove() is called on a DOM element, it 
     removes the element from the DOM tree. This method removes the element from its parent node, 
     effectively disconnecting it from the document. Unlike removeChild(), you do not need to specify 
     the parent node; remove() automatically removes the element from its parent node. If the element 
     has no parent node (e.g., it's not attached to the document), calling remove() has no effect. 
     The remove() method is designed to remove a single child node from its parent node. It doesn't 
     accept a NodeList as an argument.
    
  5. replaceChild(): The replaceChild() method in JavaScript is used to replace a child node of a 
     specified parent node with a new node. Parameters are parent: The parent node containing the child 
     node to be replaced. newNode: The new node that will replace the old node. oldNode: The existing 
     child node that will be replaced by the new node. When replaceChild(newNode, oldNode) is called, it 
     replaces the oldNode with the newNode within the list of child nodes belonging to the parent node.
     The oldNode is removed from the DOM tree, and the newNode is inserted in its place. If oldNode is
     not a child of parent, or if it is null, replaceChild() throws a DOMException error. If newNode is 
     already part of the DOM tree, replaceChild() moves it to its new position rather than creating a 
     new instance of the node. The replaceChild() method returns the replaced node (oldNode). However, 
     since the oldNode is removed from the DOM tree, it is effectively disconnected from the document.

  6. cloneNode(): The cloneNode() method in JavaScript is used to create a shallow copy of a node. It 
     creates a new node that is an exact duplicate of the original node, including all its attributes 
     and their values. Parameters are deep (optional): A boolean value indicating whether to clone all
     descendants of the node as well. If true, it creates a deep copy including all descendants 
     (children, grandchildren, etc.). If false or omitted, it creates a shallow copy without any 
     descendants. When cloneNode(deep) is called on a node, it creates and returns a new node that is an
     exact duplicate of the original node. If the node being cloned is a text node, comment node, or 
     other non-element node, it creates a copy of the node with its content but no children. The 
     cloneNode() method returns the newly created cloned node.

  7. isEqualNode(node): The isEqualNode() method in JavaScript is used to compare two nodes for
     equality. It returns a boolean value indicating whether the two nodes are equal. 

  8. hasChildNodes(): This method returns true if the current node has any child nodes, otherwise false.

  9. normalize(): This method merges adjacent text nodes and removes empty text nodes within the current
     node.

  10. contains(node): This method returns true if the current node contains the specified node as a 
      descendant, otherwise false. 
  
  11. insertAdjacentHTML():  */



  //Example-1 Create Element Node
  //Step-1 Select the Parent
  var parent = document.getElementById("parent");
  
  //Step-2 Create the New Node
  var newChild = document.createElement("span");
  
  //Step-3 Insert a Text Node
  newChild.textContent = "New Child";
  
  //Step-4 Append the New Node to the Parent Node:
  parent.appendChild(newChild);
  
  
  //Examle-2 Create Text Node
  //Step-1 Select the Parent
  var parent2 = document.getElementById("parent2");
  
  //Step-2 Create the New Node
  var newChild2 = document.createTextNode("New Child");
  
  //Step-3 Append the New Node to the Parent Node
  parent2.appendChild(newChild2);
  
  
  //Example-3
  //Step-1 Select the Parent
  var parent33 = document.getElementById("parent33");
  
  //Step-2 Create the New Node:
  var newChild33 = document.createElement("span");
  
  //Step-3 Insert a Text Node:
  newChild33.textContent = "New Child";
  
  //Step-4 Prepend the New Node to the Parent Node
  parent33.prepend(newChild33);
  
  
  //Example-4
  let parent3 = document.getElementById("id03");
  let childElement3 = document.createElement("span");
  parent3.insertBefore(childElement3, parent3.childNode[3]);
  
  
  //Example-5
  //Step-1 Get the reference of Parent Node
  let parent4 = document.getElementById("id04");
  
  //Step-2 Get the reference of Child Node
  let childElement4 = document.getElementById("childElement4");
  
  //Step-3 Remove the Child Node from the Parent Node
  parent4.removeChild(childElement4);
  
  
  //Example-6
  //Step-1 Get the reference of Child Node
  let childElement5 = document.getElementById("childElement5");
  
  //Step-2 Remove the Child Node from the Parent Node
  childElement5.remove();
  

  //Example-7
  //Step-1 Get the reference of Parent Node
  let parent5 = document.getElementById("id05");
  
  //Step-2 Get the reference of Child Node
  let childElement6 = document.getElementById("childElement6");
  
  //Step-3 Get the reference of New Child Node
  let newChild6 = document.createElement("span");
  
  //Step-4 Replace the Child Node with the New Child Node
  parent5.replaceChild(newChild6, childElement6);
  
  
  //Example-8
  var originalNode = document.getElementById("original");
  var clonedNode = originalNode.cloneNode(true);
  
  
  //Example-9
  var node1 = document.getElementById("node1");
  var node2 = document.getElementById("node2");
  var isEqual = node1.isEqualNode(node2);
  

  //Example-10
  var parent = document.getElementById("parent");
  var hasChildren = parent.hasChildNodes();
  

  //Example-11
  var parent = document.getElementById("parent");
  parent.normalize();
  
  
  //Example-12
  var parent = document.getElementById("parent");
  var child = document.getElementById("child");
  var containsChild = parent.contains(child);
  
  
  
  
  














