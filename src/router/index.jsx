import { createBrowserRouter, redirect } from "react-router-dom";
import App from "../App";
import Dashboard from "../views/Dashboard";
import LoginPage from "../views/LoginPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    loader: () => {
      let user = localStorage.user;
      if (!user) {
        return redirect("/login");
      }
      return null;
    },
    children: [
      {
        path: "/dashboard",
        element: <Dashboard />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
    loader: () => {
      let user = localStorage.user;
      if (user) {
        return redirect("/dashboard");
      }
      return null;
    },
  },
]);

export default router;
