/* Given an array (arr) as an argument complete the function countSmileys that should return the total number of smiling faces.

Rules for a smiling face:

Each smiley face must contain a valid pair of eyes. Eyes can be marked as : or ;
A smiley face can have a nose but it does not have to. Valid characters for a nose are - or ~
Every smiling face must have a smiling mouth that should be marked with either ) or D
No additional characters are allowed except for those mentioned.

Valid smiley face examples: :) :D ;-D :~)
Invalid smiley faces: ;( :> :} :]
    6kyu
    https://www.codewars.com/kata/583203e6eb35d7980400002a/javascript */

function countSmileys(arr) {
    console.log(arr)
    let result = []
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] == ':D' || arr[i] == ';D' || arr[i] == ':-D' || arr[i] == ':~D' || arr[i] == ';-D' || arr[i] == ';~D') {
        result.push(arr[i])
      } else if (arr[i] == ':)' || arr[i] == ';)' || arr[i] == ':-)' || arr[i] == ':~)' || arr[i] == ';-)' || arr[i] == ';~)') {
        result.push(arr[i])
      }
    }
    return result.length
  }

console.log(countSmileys([':)', ';(', ';}', ':-D']));       // should return 2;
console.log(countSmileys([';D', ':-(', ':-)', ';~)']));     // should return 3;
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D'])); // should return 1;