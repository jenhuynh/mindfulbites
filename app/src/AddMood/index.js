import * as React from "react";

import styles from "./styles.module.scss";

const AddMood = ({ addMood }) => {
  const [current_mood, setCurrent_Mood] = React.useState("");
  const [notes, setNotes] = React.useState("");
  const [photo, setPhoto] = React.useState("");
  const [timestamp, setTimestamp] = React.useState("");

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
      <h1>Mood Tracker</h1>
      <h3>How are you feeling today?</h3>
      <form {...{ onSubmit }}>
        <div>
          <label htmlFor="timestamp"> </label>
          <input
            id="timestamp"
            type="datetime-local"
            name="timestamp"
            value={timestamp}
            onChange={(e) => setTimestamp(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="current_mood">Select your mood: </label>

          <select
            name="current_mood"
            id="current_mood"
            value={current_mood}
            onChange={(e) => setCurrent_Mood(e.target.value)}
          >
            <option>Please choose how you are feeling:</option>
            <option value="wonderful">wonderful</option>
            <option value="great">great</option>
            <option value="meh">meh</option>
            <option value="not great">not great</option>
            <option value="awlful">awful</option>
          </select>
        </div>
        <div>
          <label htmlFor="notes">Add a Note:</label>
          <input
            id="notes"
            type="text"
            name="notes"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="photo">Add a Photo:</label>
          <input
            id="photo"
            type="text"
            name="photo"
            value={photo}
            onChange={(e) => setPhoto(e.target.value)}
          />
        </div>
        <button disabled={!canAdd}>Submit</button>
      </form>
    </>
  );
};

export default AddMood;
