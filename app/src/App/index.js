import * as React from "react";

import { Routes, Route } from "react-router-dom";

import About from "../About";
import AddMood from "../AddMood";
import LatestResult from "../LatestResult";
import Main from "../Main";
import MoodHistory from "../MoodHistory";
// import Tasks from "../Tasks";
import useApi from "../auth/useApi";
import useAuth0 from "../auth/useAuth0";

import styles from "./styles.module.scss";

const App = () => {
  const { isAuthenticated, user } = useAuth0();
  const { loading, apiClient } = useApi();

  React.useEffect(() => {
    if (isAuthenticated && !loading) {
      apiClient.addOrUpdateUser(user);
    }
  }, [isAuthenticated, user, loading, apiClient]);

  const routes = (
    <Routes>
      {/* <Route path="/" element={<Home />} /> */}
      <Route path="/" element={<AddMood />} />
      <Route path="/latest" element={<LatestResult />} />
      <Route
        className="{styles.donebtn}"
        path="/history"
        element={<MoodHistory />}
      />
      <Route path="/about" element={<About />} />
    </Routes>
  );
  return (
    <>
      {/* if user is authenticated, show all the real routes, if not just show the main */}
      <main>{isAuthenticated ? routes : <Main />}</main>
    </>
  );
};

const Home = () => {
  const { isAuthenticated } = useAuth0();

  return (
    <>
      <header className={styles.header}>
        {/* <h1>{process.env.REACT_APP_TITLE}</h1>
        <p>{process.env.REACT_APP_SUBTITLE}</p> */}
      </header>
      {isAuthenticated ? <AddMood /> : null}
      {isAuthenticated ? <LatestResult /> : null}
      {isAuthenticated ? <MoodHistory /> : null}
      {isAuthenticated ? <About /> : null}
    </>
  );
};

export default App;
