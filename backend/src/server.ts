import express from "express";
const app = express();
const port = 8080;

app.get("/", (req, res) => {
  res.send("Hello shiran, leraning MERN speedly");
});

app.listen(port!, () => {
  console.log("Server running on port: " + port);
});