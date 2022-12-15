/* Given two Arrays in which values are the power of each soldier, return true if you survive the attack or false if you perish.

CONDITIONS

Each soldier attacks the opposing soldier in the same index of the array. The survivor is the number with the highest value.
If the value is the same they both perish
If one of the values is empty(different array lengths) the non-empty value soldier survives.
To survive the defending side must have more survivors than the attacking side.
In case there are the same number of survivors in both sides, the winner is the team with the highest initial attack power. If the total attack power of both sides is the same return true.
The initial attack power is the sum of all the values in each array.
EXAMPLES

attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 6, 8 ]  
//0 survivors                4 survivors
//return true


attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4 ]  
//2 survivors  (16 damage)   2 survivors (6 damage)
//return false

attackers=[ 1, 3, 5, 7 ]   defenders=[ 2, 4, 0, 8 ]  
//1 survivors                3 survivors 
//return true
7kyu
https://www.codewars.com/kata/634d0f7c562caa0016debac5/javascript */

 const hasSurvived = (attackers, defenders) => {
    let attackersCount = 0;
    let defendersCount = 0;
    if(defenders.length === 0) return false;
    if(attackers.length === 0) return true;
    for(let i = 0; i < attackers.length || i < defenders.length; i++){
      if(attackers[i] > defenders[i]){
        attackersCount++;
      } else if(attackers[i] < defenders[i]){
        defendersCount++;
      }
    }
    if(attackersCount === defendersCount){
      let sumAttackers = attackers.reduce((acc,cur) => (acc + cur), 0);
      let sumDefenders = defenders.reduce((acc,cur) => (acc + cur), 0);
      if(sumAttackers > sumDefenders){
        return false;
      }
      return true
    } 
    return defendersCount>attackersCount;
  }
  
  hasSurvived([2, 9, 9, 7], [1, 1, 3, 8])//, false);
  hasSurvived([1, 3, 5, 7], [2, 4, 6, 8])//, true);
  hasSurvived([10, 10, 1, 1], [4, 4, 7, 7])//, true);
  hasSurvived([], [1, 2, 3])//, true);
  hasSurvived([1, 2, 3], [])//, false);
  hasSurvived([32, 65, 21, 83, 85, 7, 71, 45, 20, 63], [83, 44, 38, 55, 84, 80, 58, 20, 4, 74])//, false);
  