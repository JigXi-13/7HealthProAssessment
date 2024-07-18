import React, { useState, useEffect } from "react";

import axios from "axios";
import BlogPostItem from "./BlogPostItem";

import Grid from "@mui/material/Grid";

import Pagination from "@mui/material/Pagination";

import { Link } from "react-router-dom";
import { BlogState } from "../context/BlogsProvider";
import ShimmerUI from "./ShimmerUI";

function BlogPostList() {
  const [loading, setLoading] = useState(true);

  const PAGE_SIZE = 12;

  const { blogPosts, setBlogPosts } = BlogState();

  const [totalBlogs, setTotalBlogs] = useState(0);

  const [page, setPage] = React.useState(1);
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  useEffect(() => {
    fetchBlogs();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const fetchBlogs = async () => {
    try {
      setLoading(true);
      const { data } = await axios.get(
        `https://newsapi.org/v2/everything?domains=techcrunch.com,thenextweb.com&pageSize=${PAGE_SIZE}&page=${page}`,
        {
          headers: {
            Authorization: `c06f9c3e988c49059622c6ef7ffbf159`,
          },
        }
      );
      console.log(data);
      setBlogPosts(data?.articles);
      setTotalBlogs(data?.totalResults);
    } catch (error) {
      console.error("Failed to Load the blogs");
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <ShimmerUI count={PAGE_SIZE} />;
  }

  return (
    <div className="blog-post-list">
      <div className="blog-post-list-top">
        <Grid container spacing={4} sx={{ padding: 5 }}>
          {blogPosts.map((post: any, index: number) => (
            <Grid item sm={12} md={6} lg={4} xl={3} key={index}>
              <Link to={"/post/" + index} style={{ textDecoration: "none" }}>
                <BlogPostItem post={post} />
              </Link>
            </Grid>
          ))}
        </Grid>
      </div>
      <div className="blog-post-list-bottom">
        {totalBlogs > 0 && (
          <Pagination
            count={Math.ceil(totalBlogs / PAGE_SIZE)}
            page={page}
            onChange={handleChange}
          />
        )}
      </div>
    </div>
  );
}

export default BlogPostList;
