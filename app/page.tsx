'use client';

import EventBtn from "@/components/EventsBtn";
import EventCard from "@/components/EventCard";
import { events } from "@/lib/constants";
import { Container, Title, Text, SimpleGrid } from "@mantine/core";

const Home = () => {
  return (
    <Container size="xl" py="xl">
      <section style={{ textAlign: "center", marginBottom: "4rem", marginTop: "2rem" }}>
        <Title order={1} size="h1" fw={900}>
          The Hub for Every Dev <br /> Events You Can't Miss
        </Title>
        <Text size="lg" c="dimmed" mt="md" mb="xl">
          Hackathons, Meetups, Conferences. All In One Place
        </Text>
        <EventBtn />
      </section>

      <section>
        <Title order={2} mb="xl">Featured Events</Title>
        <SimpleGrid cols={{ base: 1, sm: 2, md: 3, lg: 4 }} spacing="lg">
          {events.map((event) => (
            <EventCard key={event.slug} {...event} />
          ))}
        </SimpleGrid>
      </section>
    </Container>
  );
};

export default Home;
