import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import LoginPage from "./pages/loginPages.jsx";
import RegisterPage from "./pages/registerPages.jsx";
import BookPage from "./pages/bookPages.jsx";
import UserPage from "./pages/userPages.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/global.css";
import TodoApp from "./components/todo/TodoApp.jsx";
import ErrorPage from "./pages/errorPage.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <TodoApp /> },
      {
        path: "/book",
        element: <BookPage />,
      },
      {
        path: "/user",
        element: <UserPage />,
      },
    ],
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
