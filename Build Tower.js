/* Build a pyramid-shaped tower, as an array/list of strings, given a positive integer number of floors. A tower block is represented with "*" character.

6kyu
https://www.codewars.com/kata/576757b1df89ecf5bd00073b/solutions/javascript*/

function towerBuilder(nFloors) {
    let newArr = [];
      for(let i = 1; i <= nFloors; i++){
        let star = i * 2 - 1;
        let space = nFloors - i;
        newArr.push(' '.repeat(space) + '*'.repeat(star) + ' '.repeat(space))
      }
      return newArr
    }
    
    towerBuilder(1)//, ["*"]);
    towerBuilder(2)//, [" * ","***"]);
    towerBuilder(3)//, ["  *  "," *** ","*****"])
    towerBuilder(6)//, ["     *     ","    ***    ","   *****   ","  *******  "," ********* ","***********"])