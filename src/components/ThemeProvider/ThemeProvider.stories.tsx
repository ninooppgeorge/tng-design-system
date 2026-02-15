import type { Meta, StoryObj } from "@storybook/react";
import { ThemeProvider, useTheme } from "./ThemeProvider";
import type { AccentColor } from "./ThemeProvider";
import { Button } from "../Button";
import "../../../theme.css";

function ThemeControls() {
  const { theme, resolvedTheme, accentColor, setTheme, setAccentColor } = useTheme();
  const accents: AccentColor[] = ["blue", "purple", "red", "green", "orange", "pink", "teal"];

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <div>
        <strong>Current theme:</strong> {theme} (resolved: {resolvedTheme})
      </div>
      <div style={{ display: "flex", gap: 8 }}>
        <Button variant="outline" size="sm" onClick={() => setTheme("light")}>Light</Button>
        <Button variant="outline" size="sm" onClick={() => setTheme("dark")}>Dark</Button>
        <Button variant="outline" size="sm" onClick={() => setTheme("system")}>System</Button>
      </div>
      <div>
        <strong>Accent color:</strong> {accentColor}
      </div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap" }}>
        {accents.map((color) => (
          <button
            key={color}
            onClick={() => setAccentColor(color)}
            style={{
              padding: "4px 12px",
              borderRadius: 6,
              border: color === accentColor ? "2px solid var(--ui-primary)" : "1px solid var(--ui-border)",
              background: "var(--ui-bg-subtle)",
              color: "var(--ui-text)",
              cursor: "pointer",
              textTransform: "capitalize",
            }}
          >
            {color}
          </button>
        ))}
      </div>
      <div style={{ display: "flex", gap: 8, flexWrap: "wrap", marginTop: 8 }}>
        <Button variant="solid">Solid Button</Button>
        <Button variant="soft">Soft Button</Button>
        <Button variant="outline">Outline Button</Button>
        <Button variant="ghost">Ghost Button</Button>
      </div>
    </div>
  );
}

const meta: Meta<typeof ThemeProvider> = {
  title: "Theme/ThemeProvider",
  component: ThemeProvider,
  parameters: { layout: "padded" },
};
export default meta;

type Story = StoryObj<typeof ThemeProvider>;

export const Playground: Story = {
  render: (args) => (
    <ThemeProvider {...args}>
      <ThemeControls />
    </ThemeProvider>
  ),
  args: {
    defaultTheme: "light",
    defaultAccent: "blue",
  },
};
