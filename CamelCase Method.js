/* 
Write simple .camelCase method (camel_case function in PHP, CamelCase in C# or camelCase in Java) for strings. All words must have their first letter capitalized without spaces.

For instance:

"hello case".camelCase() => HelloCase
"camel case word".camelCase() => CamelCaseWord
6kyu
https://www.codewars.com/kata/587731fda577b3d1b0001196/javascript */

String.prototype.camelCase=function(){
    return this.split(' ').map(e => e.charAt(0).toUpperCase() + e.slice(1)).join('')
  }
  
  "test case".camelCase()//, "TestCase");
  "camel case method".camelCase()//, "CamelCaseMethod");
  "say hello ".camelCase()//, "SayHello");
  "camel case word".camelCase()//, "CamelCaseWord");
  "".camelCase()//, "");