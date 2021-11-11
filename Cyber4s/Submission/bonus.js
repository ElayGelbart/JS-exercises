// const express = require("express");
const mongoose = require("mongoose");

// const app = express();

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

const q1 = {
  title: 'What is nodejs',
  correctAnswer: 'A JavaScript runtime environment',
  answers: [
    'A JavaScript runtime environment',
    'A c# extension',
    'Irish childrens story'
  ],
  difficulty: 4
}
const q2 = {
  title: 'What is recursion in a programming language',
  correctAnswer: 'A technique to iterate over an operation by having a function call itself repeatedly until it arrives at a result.',
  answers: [
    'When a senior tells you to rewrite your function',
    'A technique to iterate over an operation by having a function call itself repeatedly until it arrives at a result',
    'When you get up in the morning and miraculously your bug is fixed'
  ],
  difficulty: 3
}
const q3 = {
  title: 'What is DOM',
  correctAnswer: 'Document Object Model is a programming interface for HTML and XML documents',
  answers: [
    'Done On Morning A technique to a healthy work life',
    'Document Object Maintain is a design pattern to save your front the correct way',
    'Document Object Model is a programming interface for HTML and XML documents'
  ],
  difficulty: 7
}
const q4 = {
  title: 'What is Object Destructuring',
  correctAnswer: 'A new way to extract elements from an object or an array.',
  answers: [
    'A new way to extract elements from an object or an array',
    'A Memory Management feature that helps the garbage collector in js',
    'Document Object Model is a programming interface for HTML and XML documents'
  ],
  difficulty: 8
}

QuestionModel.insertMany([q1, q2, q3, q4]).then(() => {
  console.log('inserted')
  QuestionModel.find({}).then((res) => {
    console.log(res);
  })
}
)