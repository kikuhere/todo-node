const express = require("express");
const ejs = require("ejs");
const date = require(__dirname + "/date.js");

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.static("public"));
app.set("view engine", "ejs");

const today = date.getDate();
const lists = ["First", "Second", "Third"];

app.get("/", (req, res) => {
  res.render("list", { date: today, allLists: lists });
});

app.post("/", (req, res) => {
  const list = req.body.list;
  lists.unshift(list);
  res.redirect("/");
});

app.listen(3000, () => {
  console.log("server started successfully @ port 3000");
});
