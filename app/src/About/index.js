import * as React from "react";

import Nav from "../Nav";

import styles from "./styles.module.scss";

const About = () => {
  return (
    <>
      <div className={styles.aboutbody}>
        <Nav />
        <h1 className={styles.abouth1}>About</h1>
        <div className={styles.aboutsec1}>
          <div className={styles.trackmoodsection}>
            <h3 className={styles.abouth3}>Why track your mood?</h3>
            <ul>
              <li>
                Allows you to connect your feelings to what happened during the
                day
              </li>
              <li>
                Charting your mood allows you to see patterns in your life
              </li>
              <li>It allows you to better understand your triggers</li>
              <li>
                Keeping track of your moods can tell you a lot about the timing
                of your different mood states
              </li>
              <li>
                Mood charts can help your physician, therapist, or psychiatrist
                give you a more accurate diagnosis.
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.aboutsec2}>
          <div className={styles.benefitssection}>
            <h3 className={styles.abouth3}>Benefits of Meditation</h3>
            <ul>
              <li>Gaining a new perspective on stressful situations</li>
              <li>Building skills to manage your stress</li>
              <li>Increasing self-awareness</li>
              <li>Focusing on the present</li>
              <li>Reducing negative emotions</li>
              <li>Increasing imagination and creativity</li>
              <li>Increasing patience and tolerance</li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
