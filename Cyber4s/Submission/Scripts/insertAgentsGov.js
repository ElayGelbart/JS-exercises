const mongoose = require('mongoose');
const csv = require('csvtojson');

const Agents = require('../Submission/Models/Realetes');

const MongoUrl = `mongodb+srv://elaygelbart:${MongoPass}@elaygelbart.qhmbq.mongodb.net/ElayGelbart?retryWrites=true&w=majority`;

mongoose.connect(MongoUrl);

csv().fromFile(csvFilePath).then((jsonObj) => {
  const agentCollection = jsonObj.map(agentObj => {

  })
});
console.log(agentCollection);
// Agents.insertMany(agentCollection)
//   .then(() => {
//     console.log("Data inserted"); // Success
//   }).catch((error) => {
//     console.log(error)      // Failure
//   });