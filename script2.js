// 2. Write code that prints all of the numbers from 1 to 100 with three exceptions: [1] For numbers that are divisible by 3, print “Fizz” instead of the number,
//[2] for numbers that are divisible by 5, print “Buzz” instead of the number, and [3] for numbers that are divisible by both 3 and 5, print “FizzBuzz” instead of the number.
// Example output:
// 1
// 2
// Fizz
// 4
// Buzz
// ...
// 14
// FizzBuzz
// ...

let i = 1


  if (i % 3) {
    console.log("Fizz");
  } else if (i % 5) {
    console.log("Buzz");
  } else if (i % 3 && 5) {
    console.log("FizzBuzz");
  } else {
    console.log(i);
  }
}
