import express from "express";

import * as db from "./db.mjs";

const moodRouter = express.Router();

moodRouter.get("/", async (request, response) => {
  const moods = await db.getMoods(request.user.sub);
  response.json(moods);
});

moodRouter.get("/moodresult", async (request, response) => {
  const moodResult = await db.getMood(request.user.sub);
  response.json(moodResult);
  console.log(request.user.sub);
});

moodRouter.use(express.json());
moodRouter.post("/", async (request, response) => {
  const mood = await db.addMood(request.user.sub, request.body);
  console.log(request.body);
  console.log(request.user.sub);
  response.status(201).json(mood);
});

export default moodRouter;
