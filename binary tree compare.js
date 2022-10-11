/* 
Given the node object:

Node:
  val: <int>,
  left: <Node> or null,
  right: <Node> or null
write a function compare(a, b) which compares the two trees defined by Nodes a and b and returns true if they are equal in structure and in value and false otherwise.

Examples:

1       1
| \     | \
2  3    2  3
=> true

1       1
| \     | \
3  3    2  3
=> false (values not the same 2 != 3)

1       1
| \     |
2  3    2
        |
        3
=> false (structure not the same)

https://www.codewars.com/kata/55847fcd3e7dadc9f800005f/javascript
6kyu*/

function compare(a, b) {
    if (a === null && b === null) return true;
    if (a === null || b === null) return false;
    if (a.val !== b.val) return false;
    return compare(a.left, b.left) && compare(a.right, b.right);
  }

var aNode = {val: 1, left: null, right: null};
var bNode = {val: 1, left: null, right: null};
var cNode = {val: 2, left: null, right: null};
  
compare(aNode, bNode); //true
compare(aNode, cNode); //false  