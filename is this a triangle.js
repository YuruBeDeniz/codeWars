function isTriangle(a,b,c) {
    return (a + b > c) & (b + c > a) & (c + a > b) ? true : false
 }
 
 isTriangle(1,2,2)//, true);
 isTriangle(7,2,2) //, false);