import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import "../../../theme.css"; // so tokens apply in stories

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: { children: "Button" },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Primary: Story = { args: { variant: "primary" } };
export const Ghost: Story = { args: { variant: "ghost" } };
