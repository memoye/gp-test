import { createBrowserRouter } from "react-router-dom";
import { InAppLayout } from "./components/layouts/in-app-layout";

// pages
import Dashboard from "./pages/Dashboard";
import Overview from "./pages/Overview";
import Team from "./pages/Team";
import Chat from "./pages/Chat";
import Tasks from "./pages/shortcut/Tasks";
import Reports from "./pages/shortcut/Reports";
import Settings from "./pages/shortcut/Settings";
import { AuthLayout } from "./components/layouts/auth-layout";
import Login from "./pages/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <InAppLayout />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "/overview", element: <Overview /> },
      { path: "/chat", element: <Chat /> },
      { path: "/team", element: <Team /> },
      { path: "/tasks", element: <Tasks /> },
      { path: "/reports", element: <Reports /> },
      { path: "/settings", element: <Settings /> },
    ],
  },
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
    ],
  },
]);

export default router;
