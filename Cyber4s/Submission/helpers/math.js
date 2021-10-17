const add = (n1, n2) => {
  return n1 + n2
}

sub = (n1, n2) => {
  return n1 - n2
}

multiply = (n1, n2) => {
  return n1 * n2
}

divide = (n1, n2) => {
  return n1 / n2
}

equals = (n1, n2, callback) => {
  if (n1 === n2) {
    return true;
  }
  return false;
}