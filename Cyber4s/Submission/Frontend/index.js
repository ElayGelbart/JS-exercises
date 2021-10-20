'use strict'
const axios = require('axios');

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", () => {
  const nameValue = document.getElementById("studentName").value;
  const ageValue = document.getElementById("studentAge").value;
  const abiltiValue = document.getElementById("studentAbilities").value;

  const response = axios.get(/*url to server*/);
  if (response == true) {
    // write sucsses message to user
  }
  else {
    // write error message to user
  }

})