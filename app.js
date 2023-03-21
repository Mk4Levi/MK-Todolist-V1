const express = require("express");
const bodyParser = require("body-parser");

const app = express();
const port = process.env.PORT || 3000;

let mkItemArray = [/* "Item-1", "Item-2" */];

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static("public"));

app.set("view engine", "ejs");

app.get("/", function (req, res) {
  let currentDate = new Date();

  let options = {
    weekday: "long",
    day: "numeric",
    month: "long",
  };

  let day = currentDate.toLocaleDateString("en-US", options);

  res.render("list", {
    dayName: day,
    newListItems: mkItemArray,
  });
});

app.post("/", function (req, res) {
  let mkItem = req.body.newItem;

  mkItemArray.push(mkItem);

  console.log(mkItem);

  res.redirect("/");
});

app.listen(port, function () {
  console.log("Server started on port " + port);
});
