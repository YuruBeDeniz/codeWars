function missingWords(s, t) {
    let result = [];
  let sArr = s.split(' ')
  let tArr = t.split(' ')
  for(let i=0, j = 0; i<sArr.length; i++){
		if(sArr[i] !== tArr[j]){
      result.push(sArr)
    } else{
      j++
    }
  }
return result
}

let  s = 'I am using HackerRank to improve programming'
let  t = 'am HackerRank to improve'

missingWords(s,t) // ['I', 'using', 'programming']