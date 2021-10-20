'use strict'

const submitBtn = document.getElementById("submit");
submitBtn.addEventListener("click", async () => {
  const nameValue = document.getElementById("studentName").value;
  const ageValue = document.getElementById("studentAge").value;
  const abiltiValue = document.getElementById("studentAbilities").value;
  const studentObj = JSON.stringify({ 'name': nameValue, 'age': ageValue, 'ability': abiltiValue });
  const response = await axios.post(`http://localhost:8080`, { studentObj });
  console.log(response);
  if (response.data) {
    document.getElementById("passOrNot").innerHTML =
      `<div class="alert alert-danger" role="alert"> ${response.data} </div >`
  }
  else {
    document.getElementById("passOrNot").innerHTML =
      '<div class="alert alert-info" role="alert"> valid input! good work! </div >'
  }
});