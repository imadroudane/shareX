import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 4000;
var blogs = [];
var modify;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.post("/updated", (req,res) => {
  if (!req.body.updatedTitle && !req.body.updatedText) {
    res.render("missedTitleAndText.ejs");
  }
  if (!req.body.updatedTitle) {
    res.render("missedTitle.ejs");
  }
  if (!req.body.updatedText) {
    res.render("missedText.ejs");
  }
  let unformed = req.body.updatedText;
  let format = unformed.replace(/\n/g, "<br>");
  blogs.splice(modify, 1);
  blogs.unshift({
    title: req.body.updatedTitle,
    text: format
  });
  res.redirect("/blogs");
});

app.post("/modify", (req,res) => {
  const indexk = req.body.indexk;
  modify = indexk;
  res.render("modify.ejs", { blogs : blogs[indexk] });
});

app.post("/delete", (req,res) => {
  const indexJ = req.body.indexJ;
  blogs.splice(indexJ, 1);
  res.redirect("/blogs");
});

app.post("/save", (req,res) => {
  if (!req.body.title && !req.body.text) {
    res.render("missedTitleAndText.ejs");
  }
  if (!req.body.title) {
    res.render("missedTitle.ejs");
  }
  if (!req.body.text) {
    res.render("missedText.ejs");
  }
  let unformed = req.body.text;
  let format = unformed.replace(/\n/g, "<br>");
  blogs.unshift({
    title: req.body.title,
    text: format
  });
  res.redirect("/blogs");
});

app.post("/view", (req,res) => {
  var index = req.body.index;
  res.render("view.ejs", {blogs : blogs[index]});
});

app.get("/write", (req,res) => {
  res.render("write.ejs");
});

app.get("/about", (req,res) => {
  res.render("about.ejs");
});

app.get("/contact", (req,res) => {
  res.render("contact.ejs");
});

app.get("/posts", (req,res) => {
  res.render("post.ejs", { blogs : blogs });
});

app.get("/blogs", (req,res) => {
  res.render("blog.ejs", { blogs : blogs});
});

app.get("/", (req,res) => {
  res.render("index.ejs");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});