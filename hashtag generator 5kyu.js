/* The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

It must start with a hashtag (#).
All words must have their first letter capitalized.
If the final result is longer than 140 chars it must return false.
If the input or the result is an empty string it must return false.
https://www.codewars.com/kata/52449b062fb80683ec000024/train/javascript 
5kyu */

function generateHashtag (str) {
    let result = '#' + str.split(' ').map(e => e.charAt(0).toUpperCase()  + e.slice(1)).join('')
    if (str.length === 0 || result.length > 140 || result.length === 0 || result === '#'){
      return false
     }
    return result
  }
  
  generateHashtag("Do We have A Hashtag") // "#DoWeHaveAHashtag"
  generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat") // false
  generateHashtag("Codewars") // "#Codewars"
  generateHashtag("code" + " ".repeat(140) + "wars") //"#CodeWars"
  generateHashtag("")
  generateHashtag(" ".repeat(200)) //false