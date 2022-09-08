/*Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

https://www.codewars.com/kata/55908aad6620c066bc00002a/typescript
 */

function xo(str: string) { 
    const xlength = str.toLowerCase().split('').filter(x => x === 'x').length;
    const olength = str.toLowerCase().split('').filter(o => o === 'o').length;
    return xlength === olength;
    
   
  }
  
  xo('xo') //,true);
  xo("xxOo") //,true);
  xo("xxxm") //,false);
  xo("Oo") //,false);
  xo("ooxx") //=> true
  xo("xooxx") //=> false
  xo("ooxXm") //=> true
  xo("zpzpzpp") //=> true // when no 'x' and 'o' is present should return true
  xo("zzoo") //=> false