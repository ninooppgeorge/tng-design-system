import type { Meta, StoryObj } from "@storybook/react";
import { Dropdown } from "./Dropdown";
import "../../../theme.css";

const fruits = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "date", label: "Date" },
  { value: "elderberry", label: "Elderberry", disabled: true },
  { value: "fig", label: "Fig" },
];

const meta: Meta<typeof Dropdown> = {
  title: "Components/Dropdown",
  component: Dropdown,
  args: { options: fruits, placeholder: "Choose a fruit..." },
  argTypes: {
    dropdownSize: { control: "select", options: ["sm", "md", "lg"] },
  },
  decorators: [(Story) => <div style={{ minHeight: 300, maxWidth: 300 }}><Story /></div>],
};
export default meta;

type Story = StoryObj<typeof Dropdown>;

export const Default: Story = {};
export const WithDefault: Story = { args: { defaultValue: "banana" } };
export const Small: Story = { args: { dropdownSize: "sm" } };
export const Large: Story = { args: { dropdownSize: "lg" } };
export const WithError: Story = { args: { error: true } };
export const Disabled: Story = { args: { disabled: true } };
