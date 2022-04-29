function even_or_odd(number) {
  let OddOrEven = "";
  if (number % 2 == 0) {
    OddOrEven = "Even";
  } else {
    OddOrEven = "Odd";
  }
  return OddOrEven;
}
console.log(even_or_odd(2));
