"use client";

import {
  AppShell,
  Container,
  Stack,
  Group,
  Title,
  Text,
  Button,
  Badge,
  SimpleGrid,
  Paper,
  Box,
  ThemeIcon,
} from "@mantine/core";
import {
  IconCalendarEvent,
  IconBellRinging,
  IconUsers,
  IconSettings,
  IconMapPin,
} from "@tabler/icons-react";
import Link from "next/link";

export default function LandingPage() {
  const accentColor = "#5dfeca";

  return (
    <AppShell header={{ height: 60 }} padding="md">
      <AppShell.Header
        px="md"
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.05)",
          backdropFilter: "blur(12px)",
          WebkitBackdropFilter: "blur(12px)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
        }}
      >
        <Group justify="space-between" h="100%">
          <Group>
            <Title order={3} c="#5dfeca">
              DevEvents
            </Title>
          </Group>
          <Group gap="sm">
            <Button component={Link} href="/login" variant="subtle">
              Log in
            </Button>
            <Button
              component={Link}
              href="/signup"
              style={{ backgroundColor: accentColor, color: "#000" }}
            >
              Sign up
            </Button>
          </Group>
        </Group>
      </AppShell.Header>

      <AppShell.Main>
        <Container size="lg" py={120}>
          <Stack align="center" gap="md">
            <Badge
              size="lg"
              variant="light"
              radius="xl"
              style={{
                backgroundColor: `${accentColor}20`,
                color: accentColor,
              }}
            >
              Live across Kenya
            </Badge>

            <Title
              order={1}
              size="4rem"
              ta="center"
              fw={900}
              style={{ lineHeight: 1.1 }}
            >
              The Hub for Every Dev Event <br />
              <Text component="span" inherit style={{ color: accentColor }}>
                You Can't Miss
              </Text>
            </Title>

            <Text size="xl" c="dimmed" ta="center" maw={600}>
              Discover, track, and attend the best tech events around you. From
              Hackathons to Conferences and Meetups.
            </Text>

            <Group mt="xl">
              <Button
                component={Link}
                href="/signup"
                size="lg"
                radius="md"
                style={{ backgroundColor: accentColor, color: "#000" }}
              >
                Get Started
              </Button>
              <Button
                component={Link}
                href="/login"
                size="lg"
                variant="default"
                radius="md"
              >
                Explore Events
              </Button>
            </Group>
          </Stack>
        </Container>

        <Container size="lg" py={100}>
          <Title order={2} ta="center" mb={50}>
            Everything you need to experience tech
          </Title>
          <SimpleGrid cols={{ base: 1, sm: 2, md: 4 }} spacing="lg">
            {[
              {
                title: "Discover Local Tech Events",
                desc: "Find events happening near you with smart geolocation.",
                icon: IconMapPin,
              },
              {
                title: "RSVP & Set Reminders",
                desc: "Never miss an event again. Get notified before it starts.",
                icon: IconBellRinging,
              },
              {
                title: "Host & Manage Events",
                desc: "Powerful admin tools to create and manage your own events.",
                icon: IconSettings,
              },
              {
                title: "Community Networking",
                desc: "Connect with fellow developers and grow your network.",
                icon: IconUsers,
              },
            ].map((feature, i) => (
              <Paper key={i} p="xl" radius="md" withBorder shadow="sm">
                <ThemeIcon
                  size={50}
                  radius="md"
                  variant="light"
                  style={{
                    backgroundColor: `${accentColor}20`,
                    color: accentColor,
                  }}
                  mb="md"
                >
                  <feature.icon size={26} stroke={1.5} />
                </ThemeIcon>
                <Title order={4} mb="sm">
                  {feature.title}
                </Title>
                <Text size="sm" c="dimmed">
                  {feature.desc}
                </Text>
              </Paper>
            ))}
          </SimpleGrid>
        </Container>

        <Container size="lg" py={120}>
          <Paper
            p={{ base: 40, md: 80 }}
            radius="xl"
            bg="dark.8"
            style={{ border: `1px solid ${accentColor}40` }}
          >
            <Stack align="center" gap="lg">
              <Title order={2} size="2.5rem" ta="center" c="white">
                Ready to elevate your tech journey?
              </Title>
              <Text size="lg" c="dimmed" ta="center" maw={600}>
                Join thousands of developers across Kenya. Attend amazing
                events, connect with peers, and grow your career.
              </Text>
              <Button
                component={Link}
                href="/signup"
                size="xl"
                radius="md"
                mt="md"
                style={{ backgroundColor: accentColor, color: "#000" }}
              >
                Join the platform today
              </Button>
            </Stack>
          </Paper>
        </Container>

        <Box
          py="xl"
          style={{ borderTop: "1px solid var(--mantine-color-default-border)" }}
        >
          <Container size="lg">
            <Group justify="space-between" align="center">
              <Group gap="xs">
                <ThemeIcon
                  size={32}
                  radius="md"
                  style={{ backgroundColor: accentColor, color: "#000" }}
                >
                  <IconCalendarEvent size={20} />
                </ThemeIcon>
                <Text size="xl" fw={700}>
                  DevEvents
                </Text>
              </Group>
              <Text ta="center" size="sm" c="dimmed">
                © {new Date().getFullYear()} DevEvents. All rights reserved.
              </Text>
            </Group>
          </Container>
        </Box>
      </AppShell.Main>
    </AppShell>
  );
}
