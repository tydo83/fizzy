function fizzy(num) {
//Simplest approach.
  if (num % 3 === 0 && num % 5 === 0) {
    return "FizzBuzz";
  }
  else if (num % 3 === 0) {
    return "Fizz";
  }
  else if (num % 5 === 0) {
    return "Buzz";
  }
  else {
    return num;
  }
}

// //Why B in Buzz is capitalized? (I don't know how to approach this)
// function fizzy(num) {
//   let Fizz = "Fizz"
//   let Buzz = "Buzz"
  
//   if (num % 3 == 0 && num %5 == 0) {
//     return Fizz+Buzz;
//   }
//   else if (num % 3 == 0) {
//     return Fizz;
//   }
//   else if (num % 5 == 0) {
//     return Buzz;
//   }
//   else {
//     return num;
//   }
// }

module.exports = {
  fizzy,
}