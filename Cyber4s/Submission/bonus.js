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

app.post("/create", async (req, res) => {
  const questionTitle = req.body.title;
  const questionAnswers = req.body.answers;
  const questionCorrect = req.body.correct;
  const questionDifficulty = req.body.difficulty;
  for (let answer of questionAnswers) {
    if (answer == questionCorrect) {
      break;
    }
    if (questionAnswers.indexOf(answer) == questionAnswers.length - 1) {
      return;
    }
  }
  await QuestionModel.insertMany({ title: questionTitle, correctAnswer: questionCorrect, answers: questionAnswers, difficulty: questionDifficulty });
  res.send("got it");
});

app.delete("/remove/:id", async (req, res) => {
  const questionId = req.params.id;
  await QuestionModel.deleteMany({ _id: questionId });
  console.log(await QuestionModel.find({}));
  res.send({});
});

app.get("/read/by/difficulty/:difficulty", async (req, res) => {
  const questionDifficulty = req.params.difficulty;
  const questionList = await QuestionModel.find({ difficulty: { $gt: questionDifficulty } }).select({ title: 1, _id: 0, difficulty: 1 });
  console.log(questionList);
  res.send(questionList);
})

app.listen(8080, () => {
  console.log('listening to 8080');
})