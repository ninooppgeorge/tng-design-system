import type { Meta, StoryObj } from "@storybook/react";
import { Input } from "./Input";
import "../../../theme.css";

const meta: Meta<typeof Input> = {
  title: "Components/Input",
  component: Input,
  args: { placeholder: "Enter text..." },
  argTypes: {
    inputSize: { control: "select", options: ["sm", "md", "lg"] },
  },
};
export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};
export const Small: Story = { args: { inputSize: "sm" } };
export const Large: Story = { args: { inputSize: "lg" } };
export const WithError: Story = { args: { error: true, defaultValue: "Invalid input" } };
export const Disabled: Story = { args: { disabled: true, defaultValue: "Disabled" } };
export const Password: Story = { args: { type: "password", placeholder: "Enter password..." } };

export const AllSizes: Story = {
  render: () => (
    <div style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth: 320 }}>
      <Input inputSize="sm" placeholder="Small" />
      <Input inputSize="md" placeholder="Medium" />
      <Input inputSize="lg" placeholder="Large" />
    </div>
  ),
};
