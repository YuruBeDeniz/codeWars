/* A palindrome is a word, phrase, number, or other sequence of symbols or elements, whose meaning may be interpreted the same way in either forward or reverse direction. Famous examples include "Amore, Roma", "A man, a plan, a canal: Panama" and "No 'x' in 'Nixon'". - wikipedia

Our goal is to determine whether or not a given string is a valid palindrome or not.

Like the above examples, here are a few test cases which are also populated:

"Amore, Roma" => valid
"A man, a plan, a canal: Panama" => valid
"No 'x' in 'Nixon'" => valid
"Abba Zabba, you're my only friend" => invalid
You can see that they are case insensitive and disregards non alphanumeric characters. In addition to a few predefined tests, your function will also be tested against a random string generator 50 times which are guaranteed to produce valid palindromes.

Notes:

The empty string "" can be read forward or backward the same, it's a palindrome in our case.

https://www.codewars.com/kata/53046ceefe87e4905e00072a/javascript
6kyu*/

function palindrome(string) {
    let purified = string.replace(/[^A-Za-z0-9]/g, "").toLowerCase();
   for(let i = 0; i < purified.length/2; i++){
      
     if(purified[i] === purified[purified.length-i-1]){
       return true
     } else {
       return false
     }
    }
  }
  
  palindrome("Amore, Roma")//, true)
  palindrome("A man, a plan, a canal: Panama")//, true)
  palindrome("No 'x' in 'Nixon'")//, true)
  palindrome("Abba Zabba, you're my only friend")//, false

  /* function palindrome(string) {
  let newArr = string.replace(/[^A-Za-z]/g, "").toLowerCase()
  console.log(newArr.split("").reverse().join(""))
  return newArr === newArr.split("").reverse().join("")
} */