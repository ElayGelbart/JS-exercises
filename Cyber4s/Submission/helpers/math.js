export const addNumberToValue = (btnValue) => {
  let stringValue = document.getElementById("NumberInput").value;
  stringValue += btnValue;
  document.getElementById("NumberInput").value = stringValue;
}

export const deleteNumber = () => {
  let stringValue = document.getElementById("NumberInput").value;
  stringValue = stringValue.replace(/[\d]$/, '');
  document.getElementById("NumberInput").value = stringValue;
}

export const add = (n1, n2) => {
  return n1 + n2
}

export const sub = (n1, n2) => {
  return n1 - n2
}

export const multiply = (n1, n2) => {
  return n1 * n2
}

export const divide = (n1, n2) => {
  return n1 / n2
}

export const persentage = (n1, n2) => {
  return n1 % n2;
}

export const sqrt = (n1, n2) => {
  return n1 * (1 / n2);
}

export const equals = (n1, n2, callback) => {
  return callback(n1, n2)
}

