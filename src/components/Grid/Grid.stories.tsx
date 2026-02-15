import type { Meta, StoryObj } from "@storybook/react";
import { Grid } from "./Grid";
import "../../../theme.css";

const meta: Meta<typeof Grid> = {
  title: "Components/Grid",
  component: Grid,
  argTypes: {
    columns: { control: "number" },
    gap: { control: "select", options: ["none", "sm", "md", "lg", "xl"] },
    align: { control: "select", options: ["start", "center", "end", "stretch"] },
  },
};
export default meta;

type Story = StoryObj<typeof Grid>;

const Box = ({ children }: { children: React.ReactNode }) => (
  <div
    style={{
      background: "var(--ui-primary-soft)",
      color: "var(--ui-primary-text)",
      padding: "16px",
      borderRadius: "var(--ui-radius-md)",
      textAlign: "center",
      fontFamily: "var(--ui-font)",
      fontWeight: 500,
    }}
  >
    {children}
  </div>
);

export const ThreeColumns: Story = {
  args: { columns: 3, gap: "md" },
  render: (args) => (
    <Grid {...args}>
      {Array.from({ length: 6 }, (_, i) => (
        <Box key={i}>Item {i + 1}</Box>
      ))}
    </Grid>
  ),
};

export const FourColumns: Story = {
  args: { columns: 4, gap: "md" },
  render: (args) => (
    <Grid {...args}>
      {Array.from({ length: 8 }, (_, i) => (
        <Box key={i}>Item {i + 1}</Box>
      ))}
    </Grid>
  ),
};

export const AutoFill: Story = {
  args: { columns: "auto-fill" as const, minChildWidth: "150px", gap: "md" },
  render: (args) => (
    <Grid {...args}>
      {Array.from({ length: 10 }, (_, i) => (
        <Box key={i}>Item {i + 1}</Box>
      ))}
    </Grid>
  ),
};
