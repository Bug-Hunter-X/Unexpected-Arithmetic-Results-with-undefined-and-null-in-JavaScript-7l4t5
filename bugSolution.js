function foo(a, b) {
  // Handle undefined and null values
  a = typeof a === 'undefined' ? 0 : a;
  b = typeof b === 'undefined' ? 0 : b;
  
  //Use a safer way to convert to number
  a = Number(a);
  b = Number(b);

  //Check for NaN before performing arithmetic operation
  if(isNaN(a) || isNaN(b)){
    return 0; // or handle the error as needed
  }
  return a + b; 
}

console.log(foo(undefined, 1)); // 1
console.log(foo(null, 1)); // 1
console.log(foo(NaN,1)); //0
console.log(foo(1,NaN)); //0