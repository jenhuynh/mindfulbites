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
  db.any(
    "SELECT moodrecord.* FROM moodrecord LEFT JOIN users on user_id=users.id WHERE sub=$<sub> ORDER BY timestamp DESC LIMIT 1;",
    { sub },
  );

//display the resource based on users id and mood??
//this query returns resource id 2 with mood wonderful
export const getResource = (sub, { link, mood }) =>
  db.any(
    "SELECT resource.* FROM resource LEFT JOIN users on user_id=users.id WHERE sub=$<sub> ORDER BY timestamp DESC LIMIT 1;",
    { sub, link, mood },
  );

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
