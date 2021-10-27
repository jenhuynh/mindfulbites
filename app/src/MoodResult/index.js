import * as React from "react";

import useApi from "../auth/useApi";

import styles from "./styles.module.scss";

const MoodResult = () => {
  const [moodResult, setMoodResult] = React.useState([]);

  const { loading, apiClient } = useApi();

  const loadMoodResult = React.useCallback(
    async () => setMoodResult(await apiClient.getMood()),
    [apiClient],
  );

  React.useEffect(() => {
    !loading && loadMoodResult();
  }, [loading, loadMoodResult]);

  return loading ? null : (
    <>
      <h1>Mood Results</h1>
      <section>
        <MoodResultList {...{ moodResult }} />
      </section>
    </>
  );
};

const MoodResultList = ({ moodResult }) => (
  <>
    <p className={styles.table}>
      {moodResult.map(
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
  </>
);

export default MoodResult;
