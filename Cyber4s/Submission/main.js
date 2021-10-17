import css from './style.css';
// import html from "./index.html";
import { selectCallbackAction } from './helpers/callback.js';
import { equals } from './helpers/math.js';


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
