/* Count the number of Duplicates
Write a function that will return the count of distinct case-insensitive alphabetic characters and numeric digits that occur more than once in the input string. The input string can be assumed to contain only alphabets (both uppercase and lowercase) and numeric digits.

Example
"abcde" -> 0 # no characters repeats more than once
"aabbcde" -> 2 # 'a' and 'b'
"aabBcde" -> 2 # 'a' occurs twice and 'b' twice (`b` and `B`)
"indivisibility" -> 1 # 'i' occurs six times
"Indivisibilities" -> 2 # 'i' occurs seven times and 's' occurs twice
"aA11" -> 2 # 'a' and '1'
"ABBA" -> 2 # 'A' and 'B' each occur twice
6kyu
https://www.codewars.com/kata/54bf1c2cd5b56cc47f0007a1/javascript */

function duplicateCount(text){
    let count = [] 
    const sortedArr = text.toLowerCase().split('').sort()
    for(let i = 0; i<sortedArr.length;i++ ){
      if(sortedArr[i] === sortedArr[i+1]){
        count.push(sortedArr[i])
      }
    }
    return [... new Set(count)].length
  }
  
  duplicateCount("")//, 0);
  duplicateCount("abcde")//, 0);
  duplicateCount("aabbcde")//, 2);
  duplicateCount("aabBcde")//, 2,"should ignore case");
  duplicateCount("Indivisibility")//, 1)
  duplicateCount("Indivisibilities")//, 2, "characters may not be adjacent")