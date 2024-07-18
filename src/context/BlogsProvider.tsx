import { createContext, useContext, useState } from "react";
import * as React from "react";

const BlogsContext = createContext<any | null>(null);

const BlogsProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [blogPosts, setBlogPosts] = useState([]);

  return (
    <BlogsContext.Provider
      value={{
        blogPosts,
        setBlogPosts,
      }}
    >
      {children}
    </BlogsContext.Provider>
  );
};

export const BlogState = () => {
  return useContext(BlogsContext);
};

export default BlogsProvider;
