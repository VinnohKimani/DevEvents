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
        rightSection={<ArrowDownIcon size={14} />}
      >
        Hackathons
      </Button>

      <Button rightSection={<ArrowDownIcon size={14}  />}>Meetups</Button>

      <Button
        // variant="light"
        rightSection={<ArrowDownIcon size={14} />}
      >
        Conferences
      </Button>
    </Group>
  );
}
export default EvnetBtn;
