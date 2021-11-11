const mongoose = require("mongoose");
const faker = require('faker');

const mongoPass = process.argv[2];
const mongoUrl = `mongodb+srv://elaygelbart:${mongoPass}@elaygelbart.qhmbq.mongodb.net/Ofer?retryWrites=true&w=majority`;

mongoose.connect(mongoUrl).then(() => {
  console.log("DB CONNECTED");
}).catch(err => {
  console.log(err);
});

const usersSchema = mongoose.Schema({
  username: String,
  firstName: String,
  lastName: String
});

const postSchema = mongoose.Schema({
  username: String,
  title: String,
  body: String,
});

const commentsSchema = mongoose.Schema({
  username: String,
  comment: String,
  post: String
});




const UsersModel = mongoose.model("User", usersSchema);
const PostsModel = mongoose.model("Post", postSchema);
const CommentsModel = mongoose.model("Comment", commentsSchema);

const insertFakerUsers = async () => {
  const fakerUsersArr = [];
  for (let i = 0; i < 500; i++) {
    const fakerPostsArr = [];
    const newusername = faker.internet.userName();
    const userObj = {
      username: newusername,
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName()
    }
    fakerUsersArr.push(userObj);
    for (let j = 0; j < 5; j++) {
      const fakerCommentsArr = [];
      const ranNumber = mongoose.Types.ObjectId();
      const postObj = {
        username: newusername,
        title: faker.random.word(),
        body: faker.random.words(),
        _id: ranNumber
      }
      fakerPostsArr.push(postObj);

      for (let k = 0; k < 7; k++) {
        const commentObj = {
          username: newusername,
          comment: faker.random.words(),
          post: ranNumber
        }
        fakerCommentsArr.push(commentObj);
      }
      await CommentsModel.insertMany(fakerCommentsArr)
    }
    await PostsModel.insertMany(fakerPostsArr);
  }


  try {
    await UsersModel.insertMany(fakerUsersArr);
  } catch (err) {
    console.log(err);
  }
  console.log("done");
  mongoose.connection.close();
}
//  inserting Fake Information to DB;
// insertFakerUsers(); i should get +10 pts on this func with Faker

const findAllUsers = async () => {
  const allUsers = await UsersModel.find({});
  console.log(allUsers);
  mongoose.connection.close();
}
//FIND ALL USERS
// findAllUsers();

const findAllPosts = async () => {
  const allPosts = await PostsModel.find({});
  console.log(allPosts);
  mongoose.connection.close();
}
// find all post
// findAllPosts();

const findPostsFernnado = async () => {
  const allPostsByFernnado = await PostsModel.find({ username: "Fernando32" });
  console.log(allPostsByFernnado);
  mongoose.connection.close();
}
//find all posts by Fernando32 because Faker
// findPostsFernnado();

// move to last mission they all the same 

const findallcomments = async () => {
  const allCommentsBySomeone = await CommentsModel.find({ post: "618d5f5ae4d6cdfd7e884a6f" });
  console.log(allCommentsBySomeone);
  mongoose.connection.close();
}
// ALL COMMENTS to "handcrafted index" because Faker
// findallcomments();