"use client";

import { Center, Container, Paper } from "@mantine/core";

export default function AuthLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Container
      size="xs"
      style={{ minHeight: "100vh", display: "flex", alignItems: "center" }}
    >
      <Center style={{ width: "100%" }}>
        <Paper
          radius="md"
          p="xl"
          withBorder
          style={{ width: "100%", maxWidth: 420 }}
        >
          {children}
        </Paper>
      </Center>
    </Container>
  );
}
