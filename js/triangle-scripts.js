var triangle = function(input) {
  input.sort(function(a, b) {
    return a - b;
  });

  var side1 = input.shift();
  var side2 = input.shift();
  var side3 = input.shift();

  if (side3 < (side2 + side1)) {
    if ((side2 === side3) || (side2 === side1)) {
      if(side3 === side1){
        return "equilateral"
      } else {
        return "isosceles"
      }
    }
  } else {
    return false
  }

}
