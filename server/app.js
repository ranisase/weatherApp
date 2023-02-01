const express = require("express");
const mongoose = require("mongoose");
// const dotenv = require("dotenv");
// const PORT = process.env.PORT;
// require('./db/conn')
// const User = require ('./model/userSchema')
const path = require('path')
const app = express();
// dotenv.config({path:`./.env`});
// const DB = process.env.DATABASE;
const DB =
  "mongodb+srv://RaniSase:Jijarambhausase@cluster0.h42ycph.mongodb.net/mernstack?retryWrites=true&w=majority"

// mongoose
//   .connect(DB, {
//     useNewUrlParser: true,
//     useCreateIndex: true,
//     useUnifiedTopology: true,
//     useFindAndModify: false,
//   }).then(() =>{
//     console.log("connection successful");
//   })
//   .catch((err) => console.log("no connection"));

mongoose.set('strictQuery', false);

mongoose
  .connect(DB, {
        useNewUrlParser: true,
        // useCreateIndex: true,
        useUnifiedTopology: true,
        // useFindAndModify: false,
  })
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => console.log(err));

const middleware = (req, res, next) => {
  console.log("Hello my Middleware");
  next();
};
//middleware();

app.get("/", (req, res) => {
  res.send("Hello From Server");
});
console.log("subscribe");


app.get("/about", middleware, (req, res) => {
  res.send("Hello About");
});


// app.get("/login", () => {
//   console.log("sign in");
// });
// app.get("/register", () => {
//   console.log("sign up");
// });
// app.get("/contact", () => {
//   console.log("contact");
// });
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
})
