import { createBrowserRouter } from "react-router-dom";

import LayoutPublic from "../Layout/LayoutPublic";
import Home from "../Pages/Home";
import About from "../Pages/About";
import Blog, { loaderBlog } from "../Pages/Blog";
import Post, { loaderPost } from "../Pages/Post";
import NotFound from "../Pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <LayoutPublic />,
    errorElement: <NotFound />,
    children: [
      {
        errorElement: <NotFound />,
        children: [
          {
            index: true,
            element: <Home />,
          },
          {
            path: "/about",
            element: <About />,
          },
          {
            path: "/blog",
            element: <Blog />,
            loader: loaderBlog,
          },
          {
            path: "/blog/:id",
            element: <Post />,
            loader: loaderPost,
          },
        ],
      },
    ],
  },
]);
