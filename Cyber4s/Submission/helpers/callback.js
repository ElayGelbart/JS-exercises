import { add, sub, multiply, divide, persentage, sqrt } from './math.js';
export const selectCallbackAction = (ActionString) => {
  if (ActionString === "/") {
    return divide;
  }
  else if (ActionString === "*") {
    return multiply;
  }
  else if (ActionString === "+") {
    return add;
  }
  else if (ActionString === "-") {
    return sub;
  }
  else if (ActionString === "%") {
    return persentage;
  }
  else if (ActionString === "sqrt") {
    return sqrt;
  }
}
