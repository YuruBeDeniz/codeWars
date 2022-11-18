/* 
Write a program to determine if a string contains only unique characters. Return true if it does and false otherwise.

The string may contain any of the 128 ASCII characters. Characters are case-sensitive, e.g. 'a' and 'A' are considered different characters.
7kyu
https://www.codewars.com/kata/553e8b195b853c6db4000048/javascript */

function hasUniqueChars(str){
    return [... new Set(str)].length === str.length
}

function hasUniqueChars(str){
    let sorted = str.split('').sort();

    for (let i = 0; i < sorted.length; i++) {
       if(sorted[i] === sorted[i+1]) {
          return false;
       }
   }
   return true;
}
    
hasUniqueChars("  nAa")//,false) // because there are two spaces ' '
hasUniqueChars("abcdef")//,true)
hasUniqueChars("aA")//,true) // case - sensitivity
hasUniqueChars("++-")//,false
hasUniqueChars('LrA[4Pa-\o]w(v">D1e?CIVj=')// false