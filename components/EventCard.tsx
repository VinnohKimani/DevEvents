'use client';

import { Card, Image, Text, Group, Badge, Button } from "@mantine/core";
import { CalendarBlank, Clock, MapPin } from "@phosphor-icons/react";
import Link from "next/link";

interface Props {
  title: string;
  image: string;
  slug: string;
  location: string;
  date: string;
  time: string;
  description: string;
}

const EventCard = ({ title, image, slug, location, date, time, description }: Props) => {
  return (
    <Card
      shadow="sm"
      padding="lg"
      radius="md"
      withBorder
      display="flex"
      style={{ flexDirection: "column", height: "100%", cursor: "pointer" }}
    >
      <Card.Section>
        <Image
          src={image}
          alt={title}
          height={160}
          fallbackSrc="https://placehold.co/600x400?text=Placeholder"
        />
      </Card.Section>

      <Group justify="space-between" mt="md" mb="xs">
        <Text fw={700} size="lg" lineClamp={1} c="#5dfeca">
          {title}
        </Text>
        <Badge  color="#5dfeca" variant="light">
          Upcoming
        </Badge>
      </Group>

      <Text size="sm" lineClamp={2} style={{ flexGrow: 1, color: "var(--mantine-color-gray-3)" }}>
        {description}
      </Text>

      <Group gap="xs" mt="md">
        <MapPin size={16} color="var(--mantine-color-dimmed)" />
        <Text size="sm" c="dimmed" lineClamp={1}>
          {location}
        </Text>
      </Group>

      <Group gap="xs" mt="xs">
        <CalendarBlank size={16} color="var(--mantine-color-dimmed)" />
        <Text size="sm" c="dimmed">
          {date}
        </Text>
        <Clock
          size={16}
          color="var(--mantine-color-dimmed)"
          style={{ marginLeft: 8 }}
        />
        <Text size="sm" c="dimmed">
          {time}
        </Text>
      </Group>

      <Button
        component={Link}
        href={`/events/${slug}`}
        color="#5dfeca"
        c="black"
        fw={700}
        fullWidth
        mt="md"
        radius="md"
      >
        View Details
      </Button>
    </Card>
  );
};

export default EventCard;