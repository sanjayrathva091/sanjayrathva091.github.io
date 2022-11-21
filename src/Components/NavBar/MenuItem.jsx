import { NavLink } from "react-router-dom";
import styles from "./MenuItem.module.css";

function MenuItem() {
  return (
    <div className={styles.menus}>
      <ul>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
            to="/"
            end
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
            to="/about"
          >
            About
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
            to="/skills"
          >
            Skills
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
            to="/projects"
          >
            Projects
          </NavLink>
        </li>
        <li>
          <NavLink
            className={({ isActive }) =>
              isActive ? styles.active : styles.inactive
            }
            to="/contact"
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </div>
  );
}

export default MenuItem;
