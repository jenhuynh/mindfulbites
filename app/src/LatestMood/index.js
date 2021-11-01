import * as React from "react";

import useApi from "../auth/useApi";

import styles from "./styles.module.scss";

const LatestMood = () => {
  const [latestMood, setLatestMood] = React.useState([]);

  const { loading, apiClient } = useApi();

  const loadLatestMood = React.useCallback(
    async () => setLatestMood(await apiClient.getLatestMood()),
    [apiClient],
  );

  React.useEffect(() => {
    !loading && loadLatestMood();
  }, [loading, loadLatestMood]);

  return loading ? null : (
    <>
      <h1>Mood Results</h1>
      <section>
        <LatestMoodList {...{ latestMood }} />
      </section>
    </>
  );
};

const LatestMoodList = ({ latestMood }) => (
  <>
    <ul className={styles.table}>
      {latestMood.map(
        ({ id, user_id, current_mood, notes, photo, timestamp }) => (
          <li key={id}>
            <li>Date: {timestamp}</li>
            <h3>You reported that you are feeling ... {current_mood}</h3>
            <p>Notes: {notes}</p>
            <p>
              {photo ? (
                <img
                  src={photo}
                  aria-hidden
                  alt="image of the beach"
                  className="beachImg"
                />
              ) : null}
            </p>
          </li>
        ),
      )}
    </ul>
    <p>Based on how you are feeling, here's what we suggest</p>
  </>
);

export default LatestMood;
