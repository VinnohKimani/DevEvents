"use client";

import { Group, Button } from "@mantine/core";
import {
  ArrowDownIcon,
} from "@phosphor-icons/react";

function EvnetBtn() {
  return (
    <Group justify="center">
      <Button
        // variant="default"
        color="#5dfeca"
        rightSection={<ArrowDownIcon size={14} />}
      >
        Hackathons
      </Button>

      <Button color="#5dfeca" rightSection={<ArrowDownIcon size={14} />}>
        Meetups
      </Button>

      <Button
        // variant="light"
        color="#5dfeca"
        rightSection={<ArrowDownIcon size={14} />}
      >
        Conferences
      </Button>
    </Group>
  );
}
export default EvnetBtn;
