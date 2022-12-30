import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import Home from "../pages/Home/Home/Home";
import Register from "../pages/Register/Register";
import Login from "../pages/Login/Login";
import Media from "../pages/Media/Media/Media";
import Message from "../pages/Message/Message";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/message",
        element: <Message />,
      },
      {
        path: "/media",
        element: <Media />,
        loader: () => fetch("https://secret-chat-server.vercel.app/post"),
      },
    ],
  },
]);
