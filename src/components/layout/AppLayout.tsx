import { Link } from "react-router";
import { logout } from "../../features/auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/redux";
import styles from "./AppLayout.module.css";
import { selectIsAuthenticated, selectUserName } from "../../features/auth/authSelectors";

type Props = {
  children: React.ReactNode;
};

function AppLayout({ children }: Props) {
  const dispatch = useAppDispatch();

  const isAuthenticated = useAppSelector(selectIsAuthenticated);
  const userName = useAppSelector(selectUserName);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.container}>
      <header className={styles.header}>
        <div className={styles.headerTopRow}>
          <h2 className={styles.title}>Member Enrollment App</h2>

          <div className={styles.userSection}>
            <span className={styles.userStatus}>
              {isAuthenticated
                ? `Logged in as ${userName}`
                : "Not logged in"}
            </span>

            {isAuthenticated && (
              <button className={styles.logoutButton} onClick={handleLogout}>
                Logout
              </button>
            )}
          </div>
        </div>
      </header>

      <nav className={styles.nav}>
        <Link className={styles.link} to="/">
          Dashboard
        </Link>
        <Link className={styles.link} to="/members">
          Members
        </Link>
        <Link className={styles.link} to="/enrollment">
          New Enrollment
        </Link>
      </nav>

      <main className={styles.main}>{children}</main>
    </div>
  );
}

export default AppLayout;