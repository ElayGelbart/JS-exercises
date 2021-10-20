const http = require("http");
const url = require('url');
const validStudent = require("./db");


const server = http.createServer((request, response) => {
  response.writeHead(200, {
    'Access-Control-Allow-Origin': '*'
  });
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
    response.write(stringOfBad);
    response.end()
  }
});

server.listen(8080, (error) => {
  if (error) {
    console.log("error");
  }
  else {
    console.log("server listining port 8080")
  }
})















