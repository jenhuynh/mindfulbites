/* eslint-disable jsx-a11y/media-has-caption */
import * as React from "react";

// import MoodResult from "../MoodResult";
import useApi from "../auth/useApi";

import styles from "./styles.module.scss";

const LatestResult = () => {
  const [latestResult, setLatestResult] = React.useState([]);
  const [latestMood, setLatestMood] = React.useState([]);
  const { loading, apiClient } = useApi();

  const loadLatestResult = React.useCallback(
    async () => setLatestResult(await apiClient.getLatestMood()),
    [apiClient],
  );

  React.useEffect(() => {
    !loading && loadLatestResult();
  }, [loading, loadLatestResult]);

  if (latestMood == null) {
    return null;
  } else {
    return loading ? null : (
      <>
        <h1>Latest Result</h1>
        <section>
          <LatestResultist {...{ latestResult }} />
        </section>
      </>
    );
  }
};

const LatestResultist = ({ latestResult }) => (
  <>
    <div>
      <ul>
        <p>You are feeling ...{latestResult.mood}</p>
        <p>Notes: {latestResult.notes}</p>
        <p>
          <img src={latestResult.photo} alt="latest by the user"></img>
        </p>
      </ul>

      <h3>Based on how you are feeling, here's what we suggest</h3>
      <div>
        <iframe
          title="meditation video"
          width="420"
          height="315"
          src={latestResult.result.resource.link}
          frameborder="0"
        ></iframe>
      </div>
      <div>
        <p>Quote of the day: {latestResult.result.quote}</p>
      </div>
    </div>
  </>
);

export default LatestResult;
