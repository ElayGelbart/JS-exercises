import css from './style.css';
import html from "./index.html";
import { selectCallbackAction } from './helpers/callback.js';
import { equals, addNumberToValue, deleteNumber } from './helpers/math.js';


/// DOM ///
let number1, number2, currentCallback;
const action = (kindOfAction) => {
  number1 = Number(document.getElementById("NumberInput").value);
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
document.getElementById("btnPreste").addEventListener("click", () => {
  action("%")
});
document.getElementById("btnSqrt").addEventListener("click", () => {
  action("sqrt")
});
document.getElementById("btnEqual").addEventListener("click", sum);

document.getElementById("deleteBtn").addEventListener("click", deleteNumber);

const numberBtn = document.getElementsByClassName("num");
for (let btn of numberBtn) {
  btn.addEventListener("click", () => {
    addNumberToValue(btn.value)
  });
}