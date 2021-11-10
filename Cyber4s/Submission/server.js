const express = require('express')
const mongoose = require('mongoose');
// const csv = require('csvtojson');
// const csvFilePath = `${__dirname}/../../Assests/Agents.csv`
const Agents = require(`${__dirname}/Models/Realetes`)

const port = process.env.PORT || 8080;
const app = new express();

const MongoPass = process.argv[2];

const MongoUrl = `mongodb+srv://elaygelbart:${MongoPass}@elaygelbart.qhmbq.mongodb.net/ElayGelbart?retryWrites=true&w=majority`;

mongoose.connect(MongoUrl).then(() => {
  console.log("Mongo In");
});

app.get("/cities", async (req, res) => {
  const cityArr = await Agents.aggregate([{ $project: { agentCity: 1, _id: 0 } }]);
  const cityonlyARR = cityArr.map(Obj => { return Object.values(Obj)[0] }).flat().filter((city, i, arr) => arr.indexOf(city) === i);
  res.send(cityonlyARR);
});

app.get("/agents/:city", async (req, res) => {
  try {
    const agentFromCity = await Agents.find({ agentCity: req.params.city });
    res.send(agentFromCity);
  } catch (err) {
    res.send("city not found")
  }
});

app.listen(port, () => {
  console.log(`listning to ${port}`);
})