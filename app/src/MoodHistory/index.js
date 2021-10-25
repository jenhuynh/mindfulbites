import * as React from "react";

import useApi from "../auth/useApi";

// import styles from "./styles.module.scss";

const MoodHistory = () => {
  const [moodHistory, setMoodHistory] = React.useState([]);
  const { loading, apiClient } = useApi();

  const loadMoods = React.useCallback(
    async () => setMoodHistory(await apiClient.getMoods()),
    [apiClient],
  );

  const addMood = (current_mood, notes, photo, timestamp) =>
    apiClient.addMood(current_mood, notes, photo, timestamp).then(loadMoods);

  React.useEffect(() => {
    !loading && loadMoods();
  }, [loading, loadMoods]);

  return loading ? null : (
    <>
      <h1>Mood Tracker</h1>
      <h3>How are you feeling today?</h3>
      <section>
        <AddMood {...{ addMood }} />
      </section>
      <h1>Mood History</h1>
      <p>
        View how you been feeling from the first day you entered your first
        mood!
      </p>
      <section>
        <MoodList {...{ moodHistory }} />
      </section>
    </>
  );
};
const MoodList = ({ moodHistory }) => (
  <table className="moodhistory-table">
    <tbody>
      {moodHistory.map(
        ({ id, user_id, current_mood, notes, photo, timestamp }) => (
          <tr key={id}>
            <td>Date: {timestamp}</td>
            <td>{current_mood}</td>
            <td>{notes}</td>
            <td>
              {photo ? (
                <img
                  src={photo}
                  aria-hidden
                  alt="image of the beach"
                  className="beachImg"
                />
              ) : null}
            </td>
          </tr>
        ),
      )}
    </tbody>
  </table>
);

const AddMood = ({ addMood }) => {
  const [current_mood, setCurrent_Mood] = React.useState("");
  const [notes, setNotes] = React.useState("");
  const [photo, setPhoto] = React.useState("");
  const [timestamp, setTimestamp] = React.useState("");

  //making sure required input fields can be added
  const canAdd =
    current_mood !== "" && notes !== "" && photo !== "" && timestamp !== "";

  const onSubmit = (e) => {
    e.preventDefault();
    const newMood = {
      current_mood: current_mood,
      timestamp: timestamp,
      notes: notes,
      photo: photo,
    };
    console.log(newMood);
    if (canAdd) {
      addMood(newMood);
      setCurrent_Mood("");
    }
  };
  console.log(current_mood, timestamp, notes, photo);
  return (
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
          <option value="Great">Great</option>
          <option value="Meh">Meh</option>
          <option value="Not Great">Not Great</option>
          <option value="Awlful">Awlful</option>
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
  );
};
export default MoodHistory;
