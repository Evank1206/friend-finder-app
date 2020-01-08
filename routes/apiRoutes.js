const express = require("express");
const router = express.Router();
// const axios = require('axios');

const Message = {
  text: "This was sent from our apps backend",
  sender: "Fullstack developer"
};

const users = [];

// router.get("/", (req, res) => {
//   console.log("Our server was hit");
//   res.send(Message);
// });

router.post("/signUp", (req, res) => {
  console.log("Our server was hit");
  // console.log(req.body);
  const currentUser = req.body;
  const matches = users.filter((user) => user.city == currentUser.city && user.likeAnimals === currentUser.likeAnimals);
  users.push(currentUser);
  console.log(users);
  res.send({"matches": matches});
});

module.exports = router;
