// import React from "react";
// import { render, screen } from "@testing-library/react";
// import { MemoryRouter } from "react-router-dom";

// test("renders BlogPostList component for home route", () => {
//   render(
//     <MemoryRouter initialEntries={["/"]}>
//       <AppLayout />
//     </MemoryRouter>
//   );
//   expect(screen.getByText(/BlogPostList/i)).toBeInTheDocument();
// });

import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { render } from "@testing-library/react";
import routesConfig from "./routesConfig";

test("click post goes to /post/:postId", async () => {
  const router = createMemoryRouter(routesConfig, {
    initialEntries: ["/posts"],
  });

  render(<RouterProvider router={router} />);

  // make assertions, await changes, etc...
});
