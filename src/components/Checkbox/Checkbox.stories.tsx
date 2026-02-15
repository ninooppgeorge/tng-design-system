import type { Meta, StoryObj } from "@storybook/react";
import { Checkbox } from "./Checkbox";
import "../../../theme.css";

const meta: Meta<typeof Checkbox> = {
  title: "Components/Checkbox",
  component: Checkbox,
  args: { label: "Accept terms" },
  argTypes: {
    checkboxSize: { control: "select", options: ["sm", "md", "lg"] },
  },
};
export default meta;

type Story = StoryObj<typeof Checkbox>;

export const Default: Story = {};
export const Checked: Story = { args: { defaultChecked: true } };
export const Disabled: Story = { args: { disabled: true } };
export const DisabledChecked: Story = { args: { disabled: true, defaultChecked: true } };
export const Small: Story = { args: { checkboxSize: "sm", label: "Small checkbox" } };
export const Large: Story = { args: { checkboxSize: "lg", label: "Large checkbox" } };
export const NoLabel: Story = { args: { label: undefined } };

export const Group: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Checkbox label="Option A" defaultChecked />
      <Checkbox label="Option B" />
      <Checkbox label="Option C" />
      <Checkbox label="Disabled" disabled />
    </div>
  ),
};
