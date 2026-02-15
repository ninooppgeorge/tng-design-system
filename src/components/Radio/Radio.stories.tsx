import type { Meta, StoryObj } from "@storybook/react";
import { Radio } from "./Radio";
import "../../../theme.css";

const meta: Meta<typeof Radio> = {
  title: "Components/Radio",
  component: Radio,
  args: { label: "Option", name: "demo" },
  argTypes: {
    radioSize: { control: "select", options: ["sm", "md", "lg"] },
  },
};
export default meta;

type Story = StoryObj<typeof Radio>;

export const Default: Story = {};
export const Checked: Story = { args: { defaultChecked: true } };
export const Disabled: Story = { args: { disabled: true } };
export const Small: Story = { args: { radioSize: "sm", label: "Small radio" } };
export const Large: Story = { args: { radioSize: "lg", label: "Large radio" } };

export const Group: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Radio name="plan" label="Free" defaultChecked />
      <Radio name="plan" label="Pro" />
      <Radio name="plan" label="Enterprise" />
      <Radio name="plan" label="Custom" disabled />
    </div>
  ),
};
