import React, { useState, useEffect } from "react";

import axios from "axios";

function BlogPostList() {
  useEffect(() => {
    fetchBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const fetchBlogs = async () => {
    try {
      const { data } = await axios.get(
        "https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com",
        {
          headers: {
            Authorization: `c06f9c3e988c49059622c6ef7ffbf159`,
          },
        }
      );
      console.log(data);
    } catch (error) {
      //   toast({
      //     title: "Error Occured!",
      //     description: "Failed to Load the blogs",
      //     status: "error",
      //     duration: 5000,
      //     isClosable: true,
      //     position: "bottom-left",
      //   });
    }
  };
  return <>Render list of blogs...</>;
}

export default BlogPostList;
