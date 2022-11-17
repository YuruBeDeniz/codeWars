//find the longest substring

function SearchingChallenge(str) { 
  let numberOfUniques = +str.slice(0,1);
  let newArr = str.slice(1).split('');
  let uniqueArr = [... new Set(str.slice(1))];
  if(numberOfUniques === 1){
    for(let i = 0; i<newArr.length; i++){
      if(newArr.indexOf(newArr[i]) === i){
        result.push(newArr[i])
      }
    }
  }
  return result;
  }
     
  SearchingChallenge('3aabacbebebe') //cbebebe
  
  //let a = ["1", "1", "2", "3", "3", "1"];
  //let unique = a.filter((item, i, ar) => ar.indexOf(item) === i);
  //console.log(unique);
  
  //let uniqueArr = [... new Set(str.slice(1))]   let result = [];
  