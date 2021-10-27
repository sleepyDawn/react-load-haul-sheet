const path = require("path");
const http = require("http");
const express = require("express");
const app = express();

const publicPath = path.join(__dirname, "..", "public");
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));
app.get("*", (req, res) => {
  res.sendFile(path.join(publicPath, "index.html"));
});

setInterval(() => {
  http.get("https://firebase-load-haul-sheet.herokuapp.com/")
}, 300000)





app.listen(port, () => {
  console.log("server is up at port- ", port);
});
