import { NavLink, Outlet } from "react-router";
import styles from "./AppLayout.module.css";

function AppLayout() {
  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <h1 className={styles.title}>Member Enrollment App</h1>
      </header>

      <nav className={styles.nav} aria-label="Primary">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.linkActive}` : styles.link
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/members"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.linkActive}` : styles.link
          }
        >
          Members
        </NavLink>
        <NavLink
          to="/enrollment"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.linkActive}` : styles.link
          }
        >
          New Enrollment
        </NavLink>
      </nav>

      <main className={styles.main}>
        <Outlet />
      </main>
    </div>
  );
}

export default AppLayout;
