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
    <p className={styles.table}>
      {latestMood.map(
        ({ id, user_id, current_mood, notes, photo, timestamp }) => (
          <p key={id}>
            <p>Date: {timestamp}</p>
            <p>{current_mood}</p>
            <p>{notes}</p>
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
          </p>
        ),
      )}
    </p>
    <p>Based on how you are feeling, here's what we suggest</p>
  </>
);

export default LatestMood;
