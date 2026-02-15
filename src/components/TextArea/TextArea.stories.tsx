import type { Meta, StoryObj } from "@storybook/react";
import { TextArea } from "./TextArea";
import "../../../theme.css";

const meta: Meta<typeof TextArea> = {
  title: "Components/TextArea",
  component: TextArea,
  args: { placeholder: "Type something..." },
  argTypes: {
    textAreaSize: { control: "select", options: ["sm", "md", "lg"] },
    resize: { control: "select", options: ["none", "vertical", "horizontal", "both"] },
  },
};
export default meta;

type Story = StoryObj<typeof TextArea>;

export const Default: Story = {};
export const Small: Story = { args: { textAreaSize: "sm" } };
export const Large: Story = { args: { textAreaSize: "lg" } };
export const WithError: Story = { args: { error: true, defaultValue: "Invalid content" } };
export const Disabled: Story = { args: { disabled: true, defaultValue: "Cannot edit" } };
export const NoResize: Story = { args: { resize: "none" } };
