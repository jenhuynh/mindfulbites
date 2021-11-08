import { NavLink } from "react-router-dom";

import { Logout } from "../auth/widgets";

import styles from "./styles.module.scss";

const Nav = () => (
  <nav className={styles.nav}>
    <NavLink to="/about" className={styles.historynav}>
      About |
    </NavLink>
    <NavLink to="/" className={styles.historynav}>
      Add Mood |
    </NavLink>

    <NavLink to="/history" className={styles.historynav}>
      Mood History |
    </NavLink>
    <Logout />
  </nav>
);

export default Nav;
