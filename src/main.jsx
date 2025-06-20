import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import LoginPage from "./pages/loginPages.jsx";
import UserPage from "./pages/userPages.jsx";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./styles/global.css";
import TodoApp from "./components/todo/TodoApp.jsx";
import ErrorPage from "./pages/errorPage.jsx";
import RegisterPage from "./pages/register.jsx";
import { AuthWrapper } from "./components/context/auth.context.jsx";
import PrivateRouter from "./pages/private.router.jsx";
import BookPages from "./pages/bookPages.jsx";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <TodoApp /> },
      {
        path: "/book",
        element: (
          //<BookPages />
          <PrivateRouter>
            <BookPages />
          </PrivateRouter>
        ),
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
  //<React.StrictMode>
  <AuthWrapper>
    <RouterProvider router={router} />
  </AuthWrapper>
  //</React.StrictMode>
);
