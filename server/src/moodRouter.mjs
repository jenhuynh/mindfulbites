import express from "express";

import * as db from "./db.mjs";

const moodRouter = express.Router();
console.log("hey inside mood router");
moodRouter.get("/", async (request, response) => {
  const moods = await db.getMoods(request.user.sub);
  response.json(moods);
});

moodRouter.use(express.json());
moodRouter.post("/", async (request, response) => {
  const mood = await db.addMood(request.user.sub, request.body);
  console.log(request.user.sub);
  console.log(request.body);
  response.status(201).json(mood);
});

export default moodRouter;
