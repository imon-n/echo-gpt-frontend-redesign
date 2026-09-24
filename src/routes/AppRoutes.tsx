import { createBrowserRouter } from "react-router-dom";

import Layout from "../layouts/Layout";
import AuthLayout from "../layouts/AuthLayout";
import DashboardLayout from "../layouts/DashboardLayout";

import Landing from "../pages/Landing";
import Login from "../pages/auth/Login";
import Register from "../pages/auth/Register";
import ForgotPassword from "../pages/auth/ForgotPassword";

import Chat from "../pages/Chat";
import History from "../pages/History";
import ImageStudio from "../pages/ImageStudio";
import Settings from "../pages/Settings";
import Support from "../pages/Support";
import Subscriptions from "../pages/Subscriptions";

import Extension from "../pages/Extension";
import NotFound from "../pages/NotFound";

import ProtectedRoute from "../components/auth/ProtectedRoute";

const router = createBrowserRouter([
  // =========================
  // PUBLIC ROUTES
  // =========================
  {
    path: "/",
    Component: Layout,
    children: [
      {
        index: true,
        Component: Landing,
      },
      {
        path: "extension",
        Component: Extension,
      },
    ],
  },

  // =========================
  // AUTH ROUTES
  // =========================
  {
    path: "/",
    Component: AuthLayout,
    children: [
      {
        path: "login",
        Component: Login,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "forgot-password",
        Component: ForgotPassword,
      },
    ],
  },

  // =========================
  // PROTECTED ROUTES
  // =========================
  {
    path: "/",
    element: <ProtectedRoute />,
    children: [
      {
        element: <DashboardLayout />,
        children: [
          // =========================
          // CHAT
          // =========================
          {
            path: "app",
            children: [
              {
                index: true,
                Component: Chat,
              },
              {
                path: "history",
                Component: History,
              },
              {
                path: "image-studio",
                Component: ImageStudio,
              },
            ],
          },

          // =========================
          // ACCOUNT
          // =========================
          {
            path: "settings",
            Component: Settings,
          },
          {
            path: "support",
            Component: Support,
          },
          {
            path: "subscriptions",
            Component: Subscriptions,
          },
        ],
      },
    ],
  },

  // =========================
  // 404
  // =========================
  {
    path: "*",
    Component: NotFound,
  },
]);

export default router;