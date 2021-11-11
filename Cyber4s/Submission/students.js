const mongoose = require("mongoose");
const faker = require('faker');

const mongoPass = process.argv[2];
const mongoUrl = `mongodb+srv://elaygelbart:${mongoPass}@elaygelbart.qhmbq.mongodb.net/Ofer?retryWrites=true&w=majority`;

mongoose.connect(mongoUrl).then(() => {
  console.log("DB CONNECTED");
}).catch(err => {
  console.log(err);
});

const studentSchema = mongoose.Schema({
  name: String,
  surName: String,
  birth: Date,
  phone: String,
  gender: String,
  courses: Array,
});

const StudentModel = mongoose.model("Student", studentSchema);

const insertFakerStudents = async () => {
  const fakerStudentsArr = [];
  for (let i = 0; i < 2000; i++) {
    const studentObj = {
      name: faker.name.firstName(),
      surName: faker.name.lastName(),
      birth: faker.date.between('1980-01-01', '2000-12-30'),
      phone: faker.phone.phoneNumber(),
      gender: faker.name.gender(),
      courses: [faker.random.word(), faker.random.word(), faker.random.word()]
    }
    fakerStudentsArr.push(studentObj);
  }
  console.log(fakerStudentsArr);
  try {
    const res = await StudentModel.insertMany(fakerStudentsArr);
  } catch (err) {
    console.log(err);
  }
  mongoose.connection.close();
}
//  inserting Fake Information to DB;
insertFakerStudents();

const getAllStudents = async () => {
  const allStud = await StudentModel.find({});
  console.log(allStud);
}
// get all Students
// getAllStudents();