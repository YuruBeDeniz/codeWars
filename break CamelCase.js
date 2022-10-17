/* Complete the solution so that the function will break up camel casing, using a space between words.

Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
https://www.codewars.com/kata/5208f99aee097e6552000148/javascript
6kyu */

function solution(string) {
    string = string.split('').map(function(e) {
      if(e === e.toUpperCase()){
        e = ' ' + e
      }
      return e
    })
    return string.join('')
}

/* 
function solution(string) {
 return string.split(/(?=[A-Z])/).join(" ");
}
 */

solution('camelCasing')//, 'camel Casing'
solution('camelCasingTest')//, 'camel Casing Test'
solution('identifier') //"identifier"