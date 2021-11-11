const express = require("express");
const mongoose = require("mongoose");

const app = express();

const mongoPass = process.argv[2];
const mongoUrl = `mongodb+srv://elaygelbart:${mongoPass}@elaygelbart.qhmbq.mongodb.net/Ofer?retryWrites=true&w=majority`;

mongoose.connect(mongoUrl).then(() => {
  console.log("DB CONNECTED");
}).catch(err => {
  console.log(err);
});

const questionScheme = mongoose.Schema({
  title: String,
  correctAnswer: String,
  answers: [String],
  difficulty: {
    type: Number,
    min: 1,
    max: 10,
  }
});

const QuestionModel = mongoose.model("Qeustion", questionScheme);

app.use(express.json());

app.get("/list", async (req, res) => {
  const questionList = await QuestionModel.aggregate([{ $project: { _id: 0, title: 1 } }])
  res.send(questionList);
});

app.put("/update", async (req, res) => {
  const questionId = req.body.id;
  const questionTitle = req.body.title;
  await QuestionModel.updateMany({ _id: questionId }, { $set: { title: questionTitle } });
  res.send("sucssed");
})

app.listen(8080, () => {
  console.log('listening to 8080');
})