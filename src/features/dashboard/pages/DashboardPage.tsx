import { login, logout } from "../../auth/authSlice";
import { useAppDispatch, useAppSelector } from "../../../hooks/redux";
import styles from "./DashboardPage.module.css";

function DashboardPage() {
  const dispatch = useAppDispatch();

  const isAuthenticated = useAppSelector(
    (state) => state.auth.isAuthenticated
  );
  const userName = useAppSelector((state) => state.auth.userName);

  const handleLogin = () => {
    dispatch(login("Srinivas"));
  };

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h1>Dashboard</h1>

      <p>Welcome to the Member Enrollment App dashboard.</p>

      <p>
        <strong>Authentication Status:</strong>{" "}
        {isAuthenticated ? "Logged In" : "Logged Out"}
      </p>

      <p>
        <strong>User Name:</strong> {userName || "No user logged in"}
      </p>

      <div className={styles.actions}>
        <button onClick={handleLogin}>Login</button>
        <button onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default DashboardPage;