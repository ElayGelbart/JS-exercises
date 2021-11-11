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
// insertFakerStudents();

const getAllStudents = async () => {
  const allStud = await StudentModel.find({});
  console.log(allStud);
  mongoose.connection.close();
}
// get all Students
// getAllStudents();

const getRobertsStudent = async () => {
  const Idos = await StudentModel.find({ name: "Robert" })
  console.log(Idos);
  mongoose.connection.close();
}
// get Roberts because Faker
// getRobertsStudent();

const getLawCoursesStudents = async () => {
  const lawStudents = await StudentModel.find({ courses: { $elemMatch: { $eq: 'Frozen' } } })
  console.log(lawStudents);
  mongoose.connection.close();
}
// get all law Student, but Frozen Because Faker
// getLawCoursesStudents();

const getFemaleJaveStudents = async () => {
  const femaleJaveStudents = await StudentModel.find({ courses: { $elemMatch: { $eq: 'Frozen' } }, gender: 'Cis' })
  console.log(femaleJaveStudents);
  mongoose.connection.close();
}
// get all femaleJavaStudents, but Frozen and Cis Gender Because Faker
// getFemaleJaveStudents();

const get1998greaterStudents = async () => {
  const oldStudents = await StudentModel.find({ birth: { $gt: new Date("1998/05/05") } });
  console.log(oldStudents);
  mongoose.connection.close();
}
// get 1998 greater Students
// get1998greaterStudents();

const getPhone054Students = async () => {
  const phone054Students = await StudentModel.find({ phone: { $regex: /^542/ } });
  console.log(phone054Students);
  mongoose.connection.close();
}
//get 054 Students Phone Obj but start with 542 because Faker
// getPhone054Students();

const updateYahalomStudentToJS = async () => {
  await StudentModel.updateMany({ name: "Jaren" }, { $addToSet: { courses: "JavaScript" } });
  mongoose.connection.close();
}
// Update JS TO JARAEN BECAUSE FAKER
// updateYahalomStudentToJS();

const updateKorenStudentToNewBirth = async () => {
  await StudentModel.updateMany({ name: "Jaren" }, { $set: { birth: new Date("1998/12/02") } });
  mongoose.connection.close();
}
// Update Birth Of Jaren Beacause Faker
// updateKorenStudentToNewBirth();

const findoOostudents = async () => {
  const Ostudents = await StudentModel.find({ name: { $regex: /o/i } });
  console.log(Ostudents);
  mongoose.connection.close();
}
// findind O Students !
// findoOostudents();

const findHYstudents = async () => {
  const HYstudents = await StudentModel.find({ name: { $regex: /[hHyY]/ } });
  console.log(HYstudents);
  mongoose.connection.close();
}
// finding HY stdents
// findHYstudents();

const deleteIdoStudents = async () => {
  await StudentModel.deleteMany({ name: "Haskell" });
  mongoose.connection.close();
}
//deleting Haskeel because Faker
// deleteIdoStudents();

const delete1998Students = async () => {


  await StudentModel.deleteMany({
    date: {
      birth: {
        $gt: new Date("1998-02-03T00:00:00.000Z"),
        $lt: new Date("1998-02-05T00:00:00.000Z")
      }
    }
  });
  mongoose.connection.close();
}
// deleting 19980402 date
// delete1998Students();




