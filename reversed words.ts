function reverseWords(str: string): string {
    let splitted  = str.split(' ');
    let newArr: string[] = []
    for(let i: number = splitted.length; i > 0; i--){
      newArr.push(splitted[i])
    }
      return newArr.join(''); // reverse those words
    }