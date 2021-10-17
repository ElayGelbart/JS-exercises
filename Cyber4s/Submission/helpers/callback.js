import { add, sub, multiply, divide } from './math.js';
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
}
