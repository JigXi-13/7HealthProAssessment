import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { BlogState } from "../context/BlogsProvider";
import { Container, Typography, Box, Link, Button } from "@mui/material";

function BlogPostDetails() {
  const { id } = useParams();
  const navigate = useNavigate();

  const { blogPosts } = BlogState();
  console.log("here: ", id, blogPosts);

  // Find the blog post by id
  const post = blogPosts.at(id);

  if (!post) {
    return <div>Article not found</div>;
  }

  return (
    <Container maxWidth="md" sx={{ marginTop: 4 }}>
      <Button
        variant="contained"
        onClick={() => navigate("/")}
        sx={{
          top: 8,
          left: 8,
          position: "absolute",
          backgroundColor: "black",
          color: "white",
          "&:hover": {
            backgroundColor: "lightgray",
            color: "black",
          },
        }}
      >
        Back
      </Button>
      <Box sx={{ marginBottom: 4 }}>
        <img
          src={post.urlToImage}
          alt={post.title}
          style={{ width: "100%", height: "auto", borderRadius: 8 }}
        />
      </Box>
      <Typography variant="h4" component="div" gutterBottom>
        {post.title}
      </Typography>
      <Box display="flex" justifyContent="space-between" mb={2}>
        <Typography variant="subtitle1" color="textSecondary">
          By {post.author}
        </Typography>
        <Typography variant="subtitle1" color="textSecondary">
          {new Date(post.publishedAt).toLocaleDateString()}
        </Typography>
      </Box>
      <Typography variant="body1" paragraph>
        {post.description}
      </Typography>
      <Typography variant="body2" color="textSecondary">
        {post.content}
      </Typography>
      <Box sx={{ marginTop: 2 }}>
        <Link
          href={post.url}
          target="_blank"
          rel="noopener"
          variant="body1"
          color="primary"
          sx={{ fontSize: "1.2rem", display: "block", textAlign: "right" }}
        >
          Read the full article
        </Link>
      </Box>
    </Container>
  );
}

export default BlogPostDetails;
