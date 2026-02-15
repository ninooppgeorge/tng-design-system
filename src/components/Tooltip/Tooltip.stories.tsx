import type { Meta, StoryObj } from "@storybook/react";
import { Tooltip } from "./Tooltip";
import { Button } from "../Button";
import "../../../theme.css";

const meta: Meta<typeof Tooltip> = {
  title: "Components/Tooltip",
  component: Tooltip,
  argTypes: {
    side: { control: "select", options: ["top", "bottom", "left", "right"] },
  },
  decorators: [(Story) => <div style={{ padding: 80, display: "flex", justifyContent: "center" }}><Story /></div>],
};
export default meta;

type Story = StoryObj<typeof Tooltip>;

export const Top: Story = {
  args: { content: "This is a tooltip", side: "top" },
  render: (args) => (
    <Tooltip {...args}>
      <Button variant="outline">Hover me</Button>
    </Tooltip>
  ),
};

export const Bottom: Story = {
  args: { content: "Bottom tooltip", side: "bottom" },
  render: (args) => (
    <Tooltip {...args}>
      <Button variant="outline">Hover me</Button>
    </Tooltip>
  ),
};

export const Left: Story = {
  args: { content: "Left tooltip", side: "left" },
  render: (args) => (
    <Tooltip {...args}>
      <Button variant="outline">Hover me</Button>
    </Tooltip>
  ),
};

export const Right: Story = {
  args: { content: "Right tooltip", side: "right" },
  render: (args) => (
    <Tooltip {...args}>
      <Button variant="outline">Hover me</Button>
    </Tooltip>
  ),
};

export const AllSides: Story = {
  render: () => (
    <div style={{ display: "flex", gap: 24 }}>
      <Tooltip content="Top" side="top"><Button variant="outline">Top</Button></Tooltip>
      <Tooltip content="Bottom" side="bottom"><Button variant="outline">Bottom</Button></Tooltip>
      <Tooltip content="Left" side="left"><Button variant="outline">Left</Button></Tooltip>
      <Tooltip content="Right" side="right"><Button variant="outline">Right</Button></Tooltip>
    </div>
  ),
};
