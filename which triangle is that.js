function typeOfTriangle(a, b, c) {
    if ((a + b > c) & (b + c > a) & (c + a > b) & (typeof a === 'number' || typeof b === 'number' || typeof c === 'number')) {
      if(a === b & b === c & a === c){
      return 'Equilateral'
    } else if(a === b || b === c || a === c) {
      return 'Isosceles'
    } else {
      return "Scalene"
    }
    } else {
      return "Not a valid triangle"
    } 
    }

    typeOfTriangle(1,1,1)//, "Equilateral");
typeOfTriangle(3,2,4)//, "Scalene");
typeOfTriangle(2,2,1)//, "Isosceles");
typeOfTriangle('.',5,82)//, "Not a valid triangle")
typeOfTriangle(123, 6, 7)//, "Not a valid triangle")