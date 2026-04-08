import { Outlet, Route, Routes } from "react-router";
import NotFoundPage from "../components/common/NotFoundPage";
import AppLayout from "../components/layout/AppLayout";
import DashboardPage from "../features/dashboard/pages/DashboardPage";
import EnrollmentPage from "../features/enrollment/pages/EnrollmentPage";
import MembersPage from "../features/members/pages/MembersPage";

function AppRoutes() {
  return (
    <Routes>
      <Route
        element={
          <AppLayout>
            <Outlet />
          </AppLayout>
        }
      >
        <Route index element={<DashboardPage />} />
        <Route path="members" element={<MembersPage />} />
        <Route path="enrollment" element={<EnrollmentPage />} />
      </Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
