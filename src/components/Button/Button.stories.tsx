import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "./Button";
import "../../../theme.css";

const meta: Meta<typeof Button> = {
  title: "Components/Button",
  component: Button,
  args: { children: "Button" },
  argTypes: {
    variant: { control: "select", options: ["solid", "soft", "outline", "ghost"] },
    size: { control: "select", options: ["sm", "md", "lg"] },
  },
};
export default meta;

type Story = StoryObj<typeof Button>;

export const Solid: Story = { args: { variant: "solid" } };
export const Soft: Story = { args: { variant: "soft" } };
export const Outline: Story = { args: { variant: "outline" } };
export const Ghost: Story = { args: { variant: "ghost" } };

export const Small: Story = { args: { size: "sm" } };
export const Medium: Story = { args: { size: "md" } };
export const Large: Story = { args: { size: "lg" } };

export const Loading: Story = { args: { loading: true } };
export const Disabled: Story = { args: { disabled: true } };

export const AllVariants: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, alignItems: "center", flexWrap: "wrap" }}>
      <Button variant="solid">Solid</Button>
      <Button variant="soft">Soft</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button loading>Loading</Button>
      <Button disabled>Disabled</Button>
    </div>
  ),
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
    </div>
  ),
};
