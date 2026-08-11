"use client";

import {
  AppShell,
  Group,
  Title,
  Button,
  Avatar,
} from "@mantine/core";

import {
  IconLogout,
  IconUser,
} from "@tabler/icons-react";

import { useRouter } from "next/navigation";


export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const router = useRouter();

  const handleLogout = () => {
    document.cookie = "auth_session=; max-age=0; path=/";
    document.cookie = "user_role=; max-age=0; path=/";
    router.push("/login");
  };

  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header
        p="md"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.05)", // Semi-transparent overlay
          backdropFilter: "blur(12px)", // Glassmorphism blur effect
          WebkitBackdropFilter: "blur(12px)", // Safari support
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)", // Subtle translucent border
        }}
      >
        <Group justify="space-between" h="100%">
          <Group>
            <Title order={3} c="#5dfeca">
              DevEvents
            </Title>
          </Group>
          <Group gap="sm">
            <Avatar color="#5dfeca" radius="xl">
              <IconUser size={18} />
            </Avatar>
            <Button
              variant="subtle"
              color="#5dfeca"
              leftSection={<IconLogout size={16} />}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Main>{children}</AppShell.Main>
    </AppShell>
  );
}
