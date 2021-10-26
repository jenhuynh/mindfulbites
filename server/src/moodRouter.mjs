import express from "express";

import * as db from "./db.mjs";

const moodRouter = express.Router();

moodRouter.get("/", async (request, response) => {
  const moods = await db.getMoods(request.user.sub);
  response.json(moods);
});

moodRouter.get("/latest", async (request, response) => {
  const latestMood = await db.getLatestMood(request.user.sub);
  response.json(latestMood);
  console.log(request.user.sub);
});

moodRouter.use(express.json());
moodRouter.post("/", async (request, response) => {
  //saves a mood to the database
  const mood = await db.addMood(request.user.sub, request.body);
  //find an appropriate resource object that has a correct mood (make one at random) -- write a new method in db.mjs
  //use resource object to create a new result
  console.log(request.body);
  console.log(request.user.sub);
  response.status(201).json(mood);
});

export default moodRouter;
