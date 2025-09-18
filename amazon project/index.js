let express = require("express");
let app = express();
let path = require("path");
const port = 3000;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, "assets")));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "indexAMAZON.html"));
});
app.listen(3000, () => {
  console.log("server is running at port 3000 http://localhost:3000");
});

app.get("/sign-in", (req, res) => {
  res.render("signin");
});
