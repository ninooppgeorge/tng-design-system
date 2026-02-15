import type { Meta, StoryObj } from "@storybook/react";
import { Spinner } from "./Spinner";
import "../../../theme.css";

const meta: Meta<typeof Spinner> = {
  title: "Components/Spinner",
  component: Spinner,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    color: { control: "select", options: ["primary", "current"] },
  },
};
export default meta;

type Story = StoryObj<typeof Spinner>;

export const Default: Story = {};
export const Small: Story = { args: { size: "sm" } };
export const Large: Story = { args: { size: "lg" } };
export const CurrentColor: Story = {
  args: {
    color: "current",
    size: "md",
    label: ""
  },
  decorators: [(Story) => <div style={{ color: "var(--ui-danger)" }}><Story /></div>],
};

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
      <Spinner size="sm" />
      <Spinner size="md" />
      <Spinner size="lg" />
    </div>
  ),
};
