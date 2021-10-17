import { add, sub, multiply, divide, equals } from './helpers/math.js';

/// select callback ///
const selectCallbackAction = (ActionString) => {
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

/// DOM ///
let number1, number2, currentCallback;
const action = (kindOfAction) => {
  number1 = parseInt(document.getElementById("NumberInput").value);
  currentCallback = selectCallbackAction(kindOfAction);
  document.getElementById("NumberInput").value = '';
}

const sum = () => {
  number2 = parseInt(document.getElementById("NumberInput").value);
  document.getElementById("NumberInput").value = equals(number1, number2, currentCallback);
}

/// EventListeners ///
document.getElementById("btnDivide").addEventListener("click", () => {
  action("/")
});
document.getElementById("btnMultiply").addEventListener("click", () => {
  action("*")
});
document.getElementById("btnMinus").addEventListener("click", () => {
  action("-")
});
document.getElementById("btnPlus").addEventListener("click", () => {
  action("+")
});
document.getElementById("btnEqual").addEventListener("click", sum);
