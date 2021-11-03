import * as React from "react";

import Nav from "../Nav";
import useApi from "../auth/useApi";

import styles from "./styles.module.scss";

const MoodHistory = () => {
  const [moodHistory, setMoodHistory] = React.useState([]);
  const { loading, apiClient } = useApi();

  const loadMoods = React.useCallback(
    async () => setMoodHistory(await apiClient.getMoods()),
    [apiClient],
  );

  React.useEffect(() => {
    !loading && loadMoods();
  }, [loading, loadMoods]);

  return loading ? null : (
    <>
      <Nav />
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
            <td>Date Made: {timestamp}</td>
            <td>{current_mood}</td>
            <td>{notes}</td>
            <td>
              {photo ? (
                <img
                  src={photo}
                  aria-hidden
                  alt="latest image by user"
                  className="latestImg"
                />
              ) : null}
            </td>
          </tr>
        ),
      )}
    </tbody>
  </table>
);

export default MoodHistory;
