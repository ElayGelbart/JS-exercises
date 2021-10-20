'use strict'

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", async () => {
  const nameValue = document.getElementById("studentName").value;
  const ageValue = document.getElementById("studentAge").value;
  const abiltiValue = document.getElementById("studentAbilities").value;
  const response = await axios.get(`http://localhost:8080?name=${nameValue}&age=${ageValue}&ability=${abiltiValue}`);
  if (response.data) {
    document.getElementById("passOrNot").innerHTML =
      `<div class="alert alert-danger" role="alert"> ${response.data} </div >`
  }
  else {
    document.getElementById("passOrNot").innerHTML =
      '<div class="alert alert-info" role="alert"> valid input! good work! </div >'
  }
});