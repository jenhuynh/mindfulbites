import * as React from "react";

import useApi from "../auth/useApi";

const MoodResult = () => {
  const [moodResult, setMoodResult] = React.useState([]);

  const { loading, apiClient } = useApi();

  const loadMoodResults = React.useCallback(
    async () => setMoodResult(await apiClient.getMoods()),
    [apiClient],
  );

  React.useEffect(() => {
    !loading && loadMoodResults();
  }, [loading, loadMoodResults]);

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
  <p>Based on how you are feeling, here's what we suggest</p>

  // fetch(
  //   https://zenquotes.io/api/today
  // )
);

export default MoodResult;
