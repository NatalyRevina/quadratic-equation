module.exports = function solveEquation(equation) {
 var a;
 var b;
 var c;
 var d;
 var x1;
 var x2;
 var result =  equation.split(' ');
 a = result[0];
 b = result[3] + result[4];
 c = result[7] + result[8];
 console.log (result, a, b, c, d);
 d = b*b-4*a*c;
 if( d < 0 ) {
console.log("Нет ответа");
  }
  if ( d == 0 ){
    x1 = -b/(2*a);
     }
  if ( d > 0 ) {
    x1 = Math.round((-b + Math.sqrt(d))/(2*a));
    x2 = Math.round((-b - Math.sqrt(d))/(2*a));
    var solution = [];
    solution.push(x1, x2);
    console.log (solution);
  }
  if (solution[0] > solution[1]){
    var n = solution[0];
    solution[0] = solution[1];
    solution[1] = n;
  }
    return  solution;
      }
    


