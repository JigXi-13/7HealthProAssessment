import React from "react";
import Skeleton from "@mui/material/Skeleton";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Grid from "@mui/material/Grid";

const ShimmerBlogPostItem = () => {
  return (
    <Grid item sm={12} md={6} lg={4} xl={3}>
      <Card sx={{ height: 230 }}>
        <CardContent>
          <Skeleton variant="text" width="80%" height={30} />
          <Skeleton variant="text" width="60%" height={20} />
          <Skeleton variant="rectangular" width="100%" height={60} />
        </CardContent>
      </Card>
    </Grid>
  );
};

const ShimmerUI = (props: any) => {
  return (
    <Grid container spacing={4} sx={{ padding: 5 }}>
      {Array.from(new Array(props?.count)).map((_, index) => (
        <ShimmerBlogPostItem key={index} />
      ))}
    </Grid>
  );
};

export default ShimmerUI;
