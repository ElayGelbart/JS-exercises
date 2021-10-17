const path = require('path');

module.exports = {
  entry: "./Cyber4s/Submission/main.js",
  output: {
    filename: "app.js",
    path: path.resolve(__dirname, "dist"),
  },
}