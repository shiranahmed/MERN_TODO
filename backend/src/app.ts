import "dotenv/config";
import express from "express";
import noteModel from "./models/note";
const app = express();

app.get("/", async (req, res) => {
  const notes = await noteModel.find().exec();
  res.status(200).json(notes);
});

export default app;
