import { NavLink } from "react-router-dom";

import { Logout } from "../auth/widgets";

import styles from "./styles.module.scss";

const Nav = () => (
  <nav className={styles.nav}>
    <NavLink to="/">Add Mood</NavLink>
    <NavLink to="/about">About</NavLink>
    <NavLink to="/history">Mood History</NavLink>
    <Logout />
  </nav>
);

export default Nav;
