import * as React from "react";

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
    <section>
      <MoodList {...{ moodHistory }} />
    </section>
  );
};
const MoodList = ({ moodHistory }) => (
  <ul className={styles.list}>
    {moodHistory.map(
      ({ id, user_id, current_mood, notes, photo, timestamp }) => (
        <li key={id}>
          {user_id}
          {current_mood}
          {notes}
          {photo}
          {timestamp}
        </li>
      ),
    )}
  </ul>
);

export default MoodHistory;
