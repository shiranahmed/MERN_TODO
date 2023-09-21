import "dotenv/config";
import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("Hello shiran, leraning MERN speedly");
});

export default app;
