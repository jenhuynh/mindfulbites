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
    <div className={styles.historybody}>
      <Nav />
      <h1 className={styles.historyh1}>Mood History</h1>
      <p className={styles.historyp}>
        View how you been feeling from the first day you entered your first
        mood!
      </p>
      <section>
        <MoodList {...{ moodHistory }} />
      </section>
    </div>
  );
};
const MoodList = ({ moodHistory }) => (
  <table className={styles.moodhistorytable}>
    <tbody className={styles.moodhistorycontent}>
      {moodHistory.map(
        ({ id, user_id, current_mood, notes, photo, timestamp }) => {
          const convertedTimestamp = new Date(timestamp).toLocaleString();
          return (
            <>
              <div className={styles.historyOuterContainer}>
                <tr key={id}>
                  <td className={styles.historytimestamp}>
                    {convertedTimestamp}
                  </td>
                  <div className={styles.historyresults}>
                    <td>Mood: {current_mood}</td>
                    <td> {notes}</td>
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
                  </div>
                </tr>
              </div>
            </>
          );
        },
      )}
    </tbody>
  </table>
);

export default MoodHistory;
