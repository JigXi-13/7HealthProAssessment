import React from "react";

import Grid from "@mui/material/Grid";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
// @ts-ignore
import { formatDate } from "../utils/helper";

interface FeaturedPostProps {
  post: {
    source?: {
      id?: string;
      name?: string;
    };
    url?: string; // this is a URL to Blog Post
    content?: string;
    author?: string;
    publishedAt: string;
    title: string;
    description: string;
    urlToImage: string;
  };
}

function BlogPostItem(props: FeaturedPostProps) {
  const { post } = props;

  return (
    <Card sx={{ height: 230 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {post.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {"Publication Date: " + formatDate(post.publishedAt)}
        </Typography>
        <Typography
          sx={{
            overflow: "hidden",
            textOverflow: "ellipsis",
            whiteSpace: "nowrap",
          }}
          variant="subtitle1"
          paragraph
        >
          {post.description}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default BlogPostItem;
