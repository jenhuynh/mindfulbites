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
      <div className={styles.latestresultform}>
        <ul>
          <p className={styles.resultMood}>
            You are feeling {latestResult.mood}.
          </p>
          <p className={styles.resultNotes}>
            {latestResult.notes ? <p>Notes: {latestResult.notes}</p> : null}
          </p>
          <p className={styles.resultPhoto}>
            {latestResult.photo ? (
              <img src={latestResult.photo} alt="latest by the user" />
            ) : null}
          </p>
        </ul>
        <h3 className={styles.latestresulth3}>
          Based on how you are feeling, here's what we suggest
        </h3>
        <div className={styles.ytvideo}>
          <iframe
            title="meditation video"
            width="420"
            height="315"
            src={latestResult.result.resource.link}
            frameborder="0"
          ></iframe>
        </div>
        {/* <div>
          <p className={styles.quote}>
            Quote of the day:
            <blockquote>{latestResult.result.quote}</blockquote>
          </p>
        </div> */}
        <div>
          <p dangerouslySetInnerHTML={{ __html: latestResult.result.quote }} />
          {/* <p>Quote of the day: {latestResult.result.quote}</p> */}
          <p className={styles.zenquotes}>
            Inspirational quotes provided by{" "}
            <a
              href="https://zenquotes.io/"
              target="_blank"
              rel="noreferrer"
              className={styles.zenquotes}
            >
              ZenQuotes API
            </a>
            .
          </p>
        </div>

        <Link to="/history" className={styles.historybtn}>
          Done
        </Link>
      </div>
    </div>
  </>
);

export default LatestResult;
