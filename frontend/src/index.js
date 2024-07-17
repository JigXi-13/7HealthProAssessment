import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import Error from "./components/Error";
import BlogPostList from "./components/BlogPostList";
import BlogPostDetails from "./components/BlogPostDetails";

const AppLayout = () => {
  return (
    <React.Fragment>
      {/* we can define Header over here! */}
      <Outlet />
      {/* we can define Footer over here! */}
    </React.Fragment>
  );
};

const appRouter = createBrowserRouter([
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
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

//Providing router configuration(appRouter) to the AppLayout
root.render(<RouterProvider router={appRouter} />);
