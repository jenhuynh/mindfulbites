import * as React from "react";

// import MoodResult from "../MoodResult";
import { Link } from "react-router-dom";

import useApi from "../auth/useApi";

import styles from "./styles.module.scss";

const LatestResult = () => {
  const [latestResult, setLatestResult] = React.useState(null);
  const { loading, apiClient } = useApi();

  const loadLatestResult = React.useCallback(
    async () => setLatestResult(await apiClient.getLatestMood()),
    [apiClient],
  );

  React.useEffect(() => {
    !loading && loadLatestResult();
  }, [loading, loadLatestResult]);

  if (latestResult == null) {
    return null;
  } else {
    return loading ? null : (
      <>
        <h1>Latest Result</h1>
        <section>
          <LatestResultDetail {...{ latestResult }} />
        </section>
      </>
    );
  }
};

const LatestResultDetail = ({ latestResult }) => (
  <>
    <div>
      <ul>
        <p>You are feeling ...{latestResult.mood}</p>
        <p>{latestResult.notes ? <p>Notes: {latestResult.notes}</p> : null}</p>
        <p>
          {latestResult.photo ? (
            <img src={latestResult.photo} alt="latest by the user" />
          ) : null}
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
      <Link to="/history">Done</Link>
    </div>
  </>
);

export default LatestResult;
