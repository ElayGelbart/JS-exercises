const http = require("http");
const url = require('url');
const validStudent = require("./db");


const server = http.createServer(async (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Credentials", "true");
  response.setHeader("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
  response.setHeader("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
  let stringOfBad = "";

  if (request.method == 'GET') {
    const current_url_params = new URL(`http://blahblah${request.url}`).searchParams
    const name = current_url_params.get("name");
    const age = current_url_params.get("age");
    const ability = current_url_params.get("ability");
    let stringOfBad = "";
    if (!validStudent.checkName(name)) {
      stringOfBad += 'Bad Name '
    }
    if (!validStudent.checkAge(age)) {
      stringOfBad += 'Bad Age '
    }
    if (!validStudent.checkAbiliti(ability)) {
      stringOfBad += 'Bad Ability '
    }
    response.end();
  }
  request.on('data', chunk => {
    let studentOBJ = JSON.parse(JSON.parse(chunk).studentObj);
    if (!validStudent.checkName(studentOBJ.name)) {
      stringOfBad += 'Bad Name ';
    }
    if (!validStudent.checkAge(studentOBJ.age)) {
      stringOfBad += 'Bad Age ';
      console.log(stringOfBad);
    }
    if (!validStudent.checkAbiliti(studentOBJ.ability)) {
      stringOfBad += 'Bad Ability ';
    }
  });
  request.on('end', () => {
    console.log(stringOfBad);
    response.end(stringOfBad);

  });
});
server.listen(8080, (error) => {
  if (error) {
    console.log("error");
  }
  else {
    console.log("server listining port 8080")
  }
})















