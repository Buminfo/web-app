"use client";
import {
  TextInput,
  TextInputProps,
  ActionIcon,
  useMantineTheme,
  rem,
} from "@mantine/core";
import { IconSearch, IconArrowRight } from "@tabler/icons-react";

export function InputSearch(props: TextInputProps) {
  const theme = useMantineTheme();

  return (
    <TextInput
      w={500}
      miw={100}
      radius="xl"
      size="md"
      placeholder="Search topics"
      rightSectionWidth={42}
      leftSection={
        <IconSearch style={{ width: rem(18), height: rem(18) }} stroke={1.5} />
      }
      rightSection={
        <ActionIcon
          size={32}
          radius="xl"
          color={theme.primaryColor}
          variant="filled"
        >
          <IconArrowRight
            style={{ width: rem(18), height: rem(18) }}
            stroke={1.5}
          />
        </ActionIcon>
      }
      {...props}
    />
  );
}
