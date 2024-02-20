import { Grid, Skeleton } from "@mantine/core";

// import React from "react";
import React from "react";

export function Card({ col }: any) {
  return (
    <Grid.Col span={{ base: 12, xs: col }}>
      <Skeleton height={160} />
      <Skeleton width="50%" height={16} mt={6} />
      <Skeleton height={40} mt={6} />
      <div style={{ display: "flex", marginTop: 6 }}>
        <Skeleton width="10%" ml={2} height={30} circle />
        <Skeleton width="20%" ml={2} height={30} />
        <Skeleton width="20%" ml={2} height={30} />
      </div>
      <Skeleton height={40} mt={6} />
    </Grid.Col>
  );
}

export function MainSkeleton() {
  return (
    <>
      <Grid>
        <Card col={3} />
        <Card col={3} />
        <Card col={3} />
        <Card col={3} />
      </Grid>
    </>
  );
}

export default function SinglePageSkeleton() {
  // You can add any UI inside Loading, including a Skeleton.

  return (
    <>
      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Skeleton height={40} mt={6} />
          <Skeleton height={40} mt={2} />
          <Skeleton height={40} mt={2} mb={6} />
          <div style={{ display: "flex" }}>
            <Skeleton width="10%" ml={2} height={30} circle mt={6} />
            <Skeleton width="20%" ml={2} height={30} />
            <Skeleton width="20%" ml={2} height={30} />
          </div>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Skeleton height={250} />
        </Grid.Col>
      </Grid>
      <Skeleton height={80} mt={6} />
      <Skeleton height={40} mt={2} />
      <Skeleton height={80} mt={6} />

      {/* <Skeleton height={50} circle mb="xl" />
      <Skeleton height={8} radius="xl" />
      <Skeleton height={8} mt={6} radius="xl" />
      <Skeleton height={8} mt={6} width="50%" radius="xl" /> */}
    </>
  );
}

export function CategorySkeleton() {
  // You can add any UI inside Loading, including a Skeleton.

  return (
    <>
      <Grid>
        <Card col={4} />
        <Card col={4} />
        <Card col={4} />
      </Grid>
      {/* <Skeleton height={50} circle mb="xl" />
      <Skeleton height={8} radius="xl" />
      <Skeleton height={8} mt={6} radius="xl" />
      <Skeleton height={8} mt={6} width="50%" radius="xl" /> */}
    </>
  );
}
