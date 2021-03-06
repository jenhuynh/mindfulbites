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
    <div className={styles.addmoodbody}>
      <h3 className={styles.addmoodh3}>How are you feeling today?</h3>
      <div className={styles.form}>
        <form {...{ onSubmit }}>
          <div className={styles.moodcontainer}>
            <div>
              <label htmlFor="Timestamp">Timestamp</label>
              <input
                id="timestamp"
                type="datetime-local"
                name="timestamp"
                value={timestamp}
                placeholder="Enter timestamp"
                onChange={(e) => setTimestamp(e.target.value)}
              />
            </div>
            <p>Choose your mood:</p>
            {/* <form
              className={styles.moodbtn}
              name="current_mood"
              id="current_mood"
              value={current_mood}
              onChange={(e) => setCurrent_Mood(e.target.value)}
            > */}
            <button className={styles.moodbtn1}>
              <input
                type="radio"
                id="wonderful"
                name="current_mood"
                value="wonderful"
                onChange={(e) => setCurrent_Mood(e.target.value)}
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
                onChange={(e) => setCurrent_Mood(e.target.value)}
              />
              <label htmlFor="great">Great</label>
            </button>
            <button className={styles.moodbtn3}>
              <input
                type="radio"
                id="meh"
                name="current_mood"
                value="meh"
                onChange={(e) => setCurrent_Mood(e.target.value)}
              />
              <label htmlFor="meh">Meh</label>
            </button>
            <button className={styles.moodbtn4}>
              <input
                type="radio"
                id="great"
                name="current_mood"
                value="not great"
                onChange={(e) => setCurrent_Mood(e.target.value)}
              />
              <label htmlFor="not great">Not Great</label>
            </button>
            <button className={styles.moodbtn5}>
              <input
                type="radio"
                id="awful"
                name="current_mood"
                value="awful"
                onChange={(e) => setCurrent_Mood(e.target.value)}
              />
              <label htmlFor="awful">Awful</label>
            </button>
            {/* </form> */}
            {/* <button className={styles.moodbtn1}>
              <input
                type="radio"
                id="wonderful"
                name="current_mood"
                placeholder="Select your mood"
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
                placeholder="Select your mood"
                value="great"
              />
              <label htmlFor="great">Great</label>
            </button>
            <button className={styles.moodbtn3}>
              <input
                type="radio"
                id="meh"
                name="current_mood"
                placeholder="Select your mood"
                value="meh"
              />
              <label htmlFor="meh">Meh</label>
            </button>
            <button className={styles.moodbtn4}>
              <input
                type="radio"
                id="great"
                name="current_mood"
                placeholder="Select your mood"
                value="not great"
              />
              <label htmlFor="not great">Not Great</label>
            </button>
            <button className={styles.moodbtn5}>
              <input
                type="radio"
                id="awful"
                name="current_mood"
                placeholder="Select your mood"
                value="awful"
              />
              <label htmlFor="awful">Awful</label>
            </button> */}
            {/* </form> */}
            <div>
              <label htmlFor="notes">Notes</label>
              <input
                id="notes"
                type="text"
                name="notes"
                value={notes}
                placeholder="Add notes"
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
                placeholder="Insert url link of photo"
                onChange={(e) => setPhoto(e.target.value)}
              />
            </div>
            <div className={styles.addbtns}>
              <button className={styles.addmoodtbtn} disabled={!canAdd}>
                Submit
              </button>
              <Link to="/history" className={styles.cancelbtn}>
                Cancel
              </Link>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddMood;
