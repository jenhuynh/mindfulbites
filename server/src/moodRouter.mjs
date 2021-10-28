import express from "express";

import * as db from "./db.mjs";

const moodRouter = express.Router();

moodRouter.get("/", async (request, response) => {
  const moods = await db.getMoods(request.user.sub);
  response.json(moods);
});

moodRouter.get("/latest", async (request, response) => {
  //getting mood from the database
  const latestMood = await db.getLatestMood(request.user.sub);
  console.log("=====");
  // console.log(latestMood);
  //get result from the database that displays a quote
  const result = await db.getResult({ mood_id: latestMood.id });
  // console.log(result);
  //get resource from the database that display a link
  const resource = await db.getResourceById({ id: result.resource_id });
  // console.log(resource);
  const latestResult = {
    mood: latestMood.current_mood,
    notes: latestMood.notes,
    photo: latestMood.photos,
    result: {
      quote: result.quote,
      resource: {
        link: resource.link,
      },
    },
  };
  console.log(latestResult);
  console.log("*****");
  response.json(latestResult);
  console.log(request.user.sub);
});

//creation time
moodRouter.use(express.json());
moodRouter.post("/", async (request, response) => {
  //saves a mood to the database
  const mood = await db.addMood(request.user.sub, request.body);
  //when the user produces a mood, it should auto populate a video link and quote based on that mood
  const resource = await db.getResource({ mood: mood.current_mood });
  console.log(resource);
  await db.addResult({
    mood_id: mood.id,
    //use resource object to create a new result
    resource_id: resource.id,
    quote: "Hello",
  });
  //end result we need to insert a new result into the result table

  //find an appropriate resource object that has a correct mood (pick one at random) -- write a new method in db.mjs

  console.log(request.body);
  console.log(request.user.sub);
  response.status(201).json(mood);
});

export default moodRouter;
