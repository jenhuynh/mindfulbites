import { NavLink } from "react-router-dom";

import { Logout } from "../auth/widgets";

import styles from "./styles.module.scss";

const Nav = () => (
  <div className={styles.nav}>
    <h3 className={styles.navh3}>Mindful Bites</h3>
    <NavLink to="/about" className={styles.historynav}>
      About
    </NavLink>
    <NavLink to="/" className={styles.historynav}>
      Add Mood |
    </NavLink>

    <NavLink to="/history" className={styles.historynav}>
      Mood History |
    </NavLink>
    <Logout />
  </div>
);

export default Nav;
