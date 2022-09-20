import { Card, Skeleton } from "@mantine/core";

export default function SidebarSkeleton() {
  return (
    <Card shadow={"sm"}>
      <Skeleton height={8} mt={6} radius="xl" />
      <Skeleton height={12} mt={6} width="80%" radius="sm" />
      <Skeleton height={8} mt={6} width="60%" radius="xl" />
      <Skeleton height={8} mt={6} radius="xl" />
      <Skeleton height={12} mt={6} width="80%" radius="sm" />
      <Skeleton height={8} mt={6} width="60%" radius="xl" />
      <Skeleton height={8} mt={6} radius="xl" />
      <Skeleton height={12} mt={6} width="80%" radius="sm" />
      <Skeleton height={8} mt={6} width="60%" radius="xl" />
      <Skeleton height={8} mt={6} radius="xl" />
      <Skeleton height={12} mt={6} width="80%" radius="sm" />
      <Skeleton height={8} mt={6} width="60%" radius="xl" />
    </Card>
  );
}
