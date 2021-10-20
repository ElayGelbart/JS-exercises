const validStudent = {
  nameNotEqual: ["Shaul", "Nina", "Superman", "Robinhood"],
  minAge: 18,
  maxAge: 35,
  ability: [
    "time management",
    "Self-motivation",
    "quick learner",
    "Critical thinking",
    "Good communication",
  ],
};

const checkName = (name) => {
  for (let value of validStudent.nameNotEqual) {
    if (name == value) {
      return false;
    }
  }
  return true;
}

const checkAge = (age) => {
  if (age > validStudent.minAge && age < validStudent.maxAge) {
    return true;
  }
  return false;
}

const checkAbiliti = (ability) => {
  for (let value of validStudent.ability) {
    if (ability == value) {
      return true;
    }
  }
  return false;
}

module.exports.checkAbiliti = checkAbiliti;
module.exports.checkAge = checkAge;
module.exports.checkName = checkName;