import dotenv from "dotenv";
import pgp from "pg-promise";

import { DOTENV_FILE } from "./constants.mjs";

const db = initDb();

export const getTasks = (sub) =>
  db.any(
    "SELECT tasks.* FROM tasks LEFT JOIN users on user_id=users.id WHERE sub=$<sub>",
    { sub },
  );

//displays all moods of user mood history
export const getMoods = (sub) =>
  db.any(
    "SELECT moodrecord.* FROM moodrecord LEFT JOIN users on user_id=users.id WHERE sub=$<sub> ORDER BY timestamp DESC",
    { sub },
  );

//displays single mood they selected for the day - working
export const getLatestMood = (sub) =>
  db.one(
    "SELECT moodrecord.* FROM moodrecord LEFT JOIN users on user_id=users.id WHERE sub=$<sub> ORDER BY timestamp DESC LIMIT 1;",
    { sub },
  );

//when the user produces a mood, it should auto populate a video link and quote based on that mood
export const getResource = ({ mood }) =>
  db.one(
    "SELECT * FROM resource WHERE mood=$<mood> ORDER BY RANDOM() LIMIT 1",
    { mood },
  );

//get resource from database that displays a link
export const getResourceById = ({ id }) =>
  db.one("SELECT * FROM resource WHERE id=$<id> LIMIT 1", {
    id,
  });

//displays a quote
export const getResult = ({ mood_id }) =>
  db.one("SELECT * FROM result WHERE mood_id=$<mood_id> LIMIT 1", { mood_id });

//display all resources
export const addTask = (sub, name) =>
  db.one(
    `INSERT INTO tasks(user_id, name)
      VALUES((SELECT id FROM users WHERE sub=$<sub>), $<name>)
      RETURNING *`,
    { sub, name },
  );

//addmood from form to db
export const addMood = (sub, { current_mood, notes, photo, timestamp }) =>
  db.one(
    `INSERT INTO moodrecord( user_id, current_mood, notes, photo, timestamp)
      VALUES((SELECT id FROM users WHERE sub=$<sub>), $<current_mood>, $<notes>, $<photo>, $<timestamp>)
      RETURNING *`,
    { sub, current_mood, notes, photo, timestamp },
  );

//when the user produces a mood, it should auto populate a video link and quote based on that moodß
export const addResult = ({ mood_id, resource_id, quote }) =>
  db.one(
    `INSERT INTO result (mood_id, resource_id, quote) VALUES ($<mood_id>, $<resource_id>, $<quote>)
    RETURNING *`,
    { mood_id, resource_id, quote },
  );
//shows results from result table based on mood
// export const addResult = (sub, {mood_id, resource_id, quote }) =>
// db.one(`INSERT INTO resource ()`{})

export const addOrUpdateUser = (user) =>
  db.one(
    `INSERT INTO users(given_name, family_name, picture, email, sub)
      VALUES($<given_name>, $<family_name>, $<picture>, $<email>, $<sub>)
      ON CONFLICT (sub) DO
        UPDATE SET given_name = $<given_name>, family_name = $<family_name>,
          picture = $<picture>, email=$<email>
      RETURNING *`,
    user,
  );

function initDb() {
  let connection;

  if (process.env.DATABASE_URL === undefined) {
    dotenv.config({ path: DOTENV_FILE });
    connection = {
      user: "postgres",
      database: process.env.POSTGRES_DB,
      password: process.env.POSTGRES_PASSWORD,
      port: 5442,
    };
  } else {
    connection = {
      connectionString: process.env.DATABASE_URL,
      ssl: { rejectUnauthorized: false },
    };
  }

  return pgp()(connection);
}
