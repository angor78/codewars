function basicOp(operation, value1, value2) {
  let result = eval(String(value1) + operation + String(value2)); //Danger eval!
  return result;
}
