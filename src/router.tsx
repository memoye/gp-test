import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./components/layout";

// pages
import Dashboard from "./pages/Dashboard";
import Overview from "./pages/Overview";
import Team from "./pages/Team";
import Chat from "./pages/Chat";
import Tasks from "./pages/shortcut/Tasks";
import Reports from "./pages/shortcut/Reports";
import Settings from "./pages/shortcut/Settings";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
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
]);

export default router;
