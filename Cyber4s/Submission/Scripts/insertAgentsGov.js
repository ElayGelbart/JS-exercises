const mongoose = require('mongoose');
const csv = require('csvtojson');
const csvFilePath = `${__dirname}/../../../Assests/Agents.csv`

const Agents = require(`${__dirname}/../Models/Realetes`);

const MongoPass = process.argv[2];

const MongoUrl = `mongodb+srv://elaygelbart:${MongoPass}@elaygelbart.qhmbq.mongodb.net/ElayGelbart?retryWrites=true&w=majority`;

mongoose.connect(MongoUrl);

csv().fromFile(csvFilePath).then((jsonObj) => {
  const agentCollection = jsonObj.map(agentObj => {
    // let newAgentObj;
    const _id = Number(Object.values(agentObj)[0]);
    const agentName = Object.values(agentObj)[1].trim();
    const agentCity = Object.values(agentObj)[2].trim();
    return {
      _id: _id,
      agentName: agentName,
      agentCity: agentCity
    };
  });
  Agents.insertMany(agentCollection)
    .then(() => {
      console.log("Data inserted"); // Success
    }).catch((error) => {
      console.log(error)      // Failure
    });
});