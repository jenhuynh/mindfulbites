import * as React from "react";

import { useNavigate, Link } from "react-router-dom";

import useApi from "../auth/useApi";

import styles from "./styles.module.scss";

const AddMood = () => {
  const [current_mood, setCurrent_Mood] = React.useState("");
  const [notes, setNotes] = React.useState("");
  const [photo, setPhoto] = React.useState("");
  const [timestamp, setTimestamp] = React.useState("");
  const navigate = useNavigate();
  const { apiClient } = useApi();
  const addMood = (mood) =>
    apiClient.addMood(mood).then(() => navigate("/latest"));

  //making sure required input fields can be added
  const canAdd = current_mood !== "" && timestamp !== "";

  const onSubmit = (e) => {
    e.preventDefault();
    const newMood = {
      current_mood: current_mood,
      timestamp: timestamp,
      notes: notes,
      photo: photo,
    };
    console.log("***");
    console.log(newMood);
    if (canAdd) {
      addMood(newMood);
      setCurrent_Mood("");
    }
  };
  console.log(current_mood, timestamp, notes, photo);
  return (
    <>
      <div className={styles.addmoodbody}>
        <h3>How are you feeling today?</h3>
        <div className={styles.form}>
          <form {...{ onSubmit }}>
            <div>
              <label htmlFor="timestamp">Timestamp | Date </label>
              <input
                id="timestamp"
                type="datetime-local"
                name="timestamp"
                value={timestamp}
                onChange={(e) => setTimestamp(e.target.value)}
              />
            </div>
            {/* ///does not work//// */}
            {/* {/* <div>
              <label htmlFor="current_mood">Select your mood </label>
             /*} */}
            <p>Choose your mood:</p>
            <form
              className={styles.moodbtn}
              name="current_mood"
              id="current_mood"
              value={current_mood}
              onChange={(e) => setCurrent_Mood(e.target.value)}
            >
              <button className={styles.moodbtn1}>
                <input
                  type="radio"
                  id="wonderful"
                  name="current_mood"
                  value="wonderful"
                />
                <label htmlFor="wonderful" className="moodmenu">
                  Wonderful
                </label>
              </button>
              <button className={styles.moodbtn2}>
                <input
                  type="radio"
                  id="great"
                  name="current_mood"
                  value="great"
                />
                <label htmlFor="great">Great</label>
              </button>
              <button className={styles.moodbtn3}>
                <input type="radio" id="meh" name="current_mood" value="meh" />
                <label htmlFor="meh">Meh</label>
              </button>
              <button className={styles.moodbtn4}>
                <input
                  type="radio"
                  id="great"
                  name="current_mood"
                  value="not great"
                />
                <label htmlFor="not great">Not Great</label>
              </button>
              <button className={styles.moodbtn5}>
                <input
                  type="radio"
                  id="awful"
                  name="current_mood"
                  value="awful"
                />
                <label htmlFor="awful">Awful</label>
              </button>
            </form>
            {/* ////working select form///// */}
            {/* <div>
              <label htmlFor="current_mood">Select your mood </label>
              <select
                name="current_mood"
                id="current_mood"
                value={current_mood}
                onChange={(e) => setCurrent_Mood(e.target.value)}
              >
                <option className="optionBtn">
                  Please choose how you are feeling:
                </option>
                <option value="wonderful">wonderful</option>
                <option value="great">great</option>
                <option value="meh">meh</option>
                <option value="not great">not great</option>
                <option value="awful">awful</option>
              </select>
            </div> */}
            <div>
              <label htmlFor="notes">Notes</label>
              <input
                id="notes"
                type="text"
                name="notes"
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
              />
            </div>
            <div>
              <label htmlFor="photo">Photos</label>
              <input
                id="photo"
                type="text"
                name="photo"
                value={photo}
                onChange={(e) => setPhoto(e.target.value)}
              />
            </div>

            <button className={styles.addmoodtbtn} disabled={!canAdd}>
              Submit
            </button>
            <Link to="/history" className={styles.cancelbtn}>
              Cancel
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default AddMood;
