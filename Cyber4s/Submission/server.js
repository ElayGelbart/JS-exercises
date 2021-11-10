const express = require('express')
const mongoose = require('mongoose');
const csv = require('csvtojson');
const Agents = require('../Submission/Models/Realetes')
const csvFilePath = `${__dirname}/../../Assests/Agents.csv`

const port = process.env.PORT || 8080;
const app = new express();

const MongoPass = process.argv[2];

const MongoUrl = `mongodb+srv://elaygelbart:${MongoPass}@elaygelbart.qhmbq.mongodb.net/ElayGelbart?retryWrites=true&w=majority`;

mongoose.connect(MongoUrl);


csv().fromFile(csvFilePath).then((jsonObj) => {
  console.log(jsonObj);
  /**
   * [
   * 	{a:"1", b:"2", c:"3"},
   * 	{a:"4", b:"5". c:"6"}
   * ]
   */
})


app.listen(port, () => {
  console.log(`listning to ${port}`);
})