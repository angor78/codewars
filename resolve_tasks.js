function fakeBin(x) {
  let array = x.split("");
  let fakeBinary = array.map((el) => (el >= 5 ? "1" : "0")).join("");

  return fakeBinary;
}
