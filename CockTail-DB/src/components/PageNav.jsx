import Logo from "./Logo";
import styles from "./PageNav.module.css";
import { NavLink } from "react-router-dom";

export default function PageNav() {
  return (
    <nav className={styles.nav}>
      <Logo />
      <ul className={styles.list}>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/about">About</NavLink>
        </li>
        <li>
          <NavLink to="/newsletter">Newsletter</NavLink>
        </li>
      </ul>
    </nav>
  );
}
