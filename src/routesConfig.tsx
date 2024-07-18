import React from "react";
import BlogPostList from "./components/BlogPostList";
import BlogPostDetails from "./components/BlogPostDetails";
import Error from "./components/Error";
import BlogsProvider from "./context/BlogsProvider";

import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <React.Fragment>
      <BlogsProvider>
        {/* we can define Header over here! */}
        <Outlet />
        {/* we can define Footer over here! */}
      </BlogsProvider>
    </React.Fragment>
  );
};

const routesConfig = [
  {
    path: "/",
    element: <AppLayout />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <BlogPostList />,
      },
      {
        path: "/post/:id",
        element: <BlogPostDetails />,
      },
    ],
  },
];

export default routesConfig;
