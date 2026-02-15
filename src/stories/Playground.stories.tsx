import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { TextArea } from "../components/TextArea";
import { Checkbox } from "../components/Checkbox";
import { Radio } from "../components/Radio";
import { Dropdown } from "../components/Dropdown";
import { Table, TableHead, TableBody, TableRow, TableHeaderCell, TableCell } from "../components/Table";
import { Grid } from "../components/Grid";
import { Dialog, DialogTitle, DialogDescription, DialogFooter } from "../components/Dialog";
import { Spinner } from "../components/Spinner";
import { Tabs, TabList, TabTrigger, TabContent } from "../components/Tabs";
import { Tooltip } from "../components/Tooltip";
import "../../theme.css";

const meta: Meta = {
  title: "Playground",
  parameters: { layout: "padded" },
};
export default meta;

type Story = StoryObj;

function Section({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section style={{ marginBottom: 32 }}>
      <h3 style={{ fontFamily: "var(--ui-font)", fontSize: "var(--ui-font-lg)", fontWeight: 600, color: "var(--ui-text)", marginBottom: 12 }}>
        {title}
      </h3>
      {children}
    </section>
  );
}

function AllComponents() {
  const [dialogOpen, setDialogOpen] = React.useState(false);

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
      <Section title="Button">
        <div style={{ display: "flex", gap: 8, flexWrap: "wrap", alignItems: "center" }}>
          <Button variant="solid">Solid</Button>
          <Button variant="soft">Soft</Button>
          <Button variant="outline">Outline</Button>
          <Button variant="ghost">Ghost</Button>
          <Button loading>Loading</Button>
          <Button disabled>Disabled</Button>
          <Button size="sm">Small</Button>
          <Button size="lg">Large</Button>
        </div>
      </Section>

      <Section title="Input">
        <div style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth: 320 }}>
          <Input placeholder="Default input" />
          <Input placeholder="Error state" error />
          <Input placeholder="Disabled" disabled />
        </div>
      </Section>

      <Section title="TextArea">
        <div style={{ maxWidth: 320 }}>
          <TextArea placeholder="Write something..." rows={3} />
        </div>
      </Section>

      <Section title="Checkbox & Radio">
        <div style={{ display: "flex", gap: 32 }}>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Checkbox label="Option A" defaultChecked />
            <Checkbox label="Option B" />
            <Checkbox label="Disabled" disabled />
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <Radio name="pg-plan" label="Free" defaultChecked />
            <Radio name="pg-plan" label="Pro" />
            <Radio name="pg-plan" label="Enterprise" />
          </div>
        </div>
      </Section>

      <Section title="Dropdown">
        <div style={{ maxWidth: 280 }}>
          <Dropdown
            options={[
              { value: "react", label: "React" },
              { value: "vue", label: "Vue" },
              { value: "svelte", label: "Svelte" },
              { value: "angular", label: "Angular" },
            ]}
            placeholder="Pick a framework..."
          />
        </div>
      </Section>

      <Section title="Tabs">
        <Tabs defaultValue="tab1" variant="underline">
          <TabList>
            <TabTrigger value="tab1">Overview</TabTrigger>
            <TabTrigger value="tab2">Settings</TabTrigger>
            <TabTrigger value="tab3">Members</TabTrigger>
          </TabList>
          <TabContent value="tab1">Overview content goes here.</TabContent>
          <TabContent value="tab2">Settings content goes here.</TabContent>
          <TabContent value="tab3">Members content goes here.</TabContent>
        </Tabs>
      </Section>

      <Section title="Table">
        <Table variant="striped">
          <TableHead>
            <TableRow>
              <TableHeaderCell>Name</TableHeaderCell>
              <TableHeaderCell>Status</TableHeaderCell>
              <TableHeaderCell>Role</TableHeaderCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow><TableCell>Alice</TableCell><TableCell>Active</TableCell><TableCell>Admin</TableCell></TableRow>
            <TableRow><TableCell>Bob</TableCell><TableCell>Inactive</TableCell><TableCell>User</TableCell></TableRow>
            <TableRow><TableCell>Carol</TableCell><TableCell>Active</TableCell><TableCell>Editor</TableCell></TableRow>
          </TableBody>
        </Table>
      </Section>

      <Section title="Grid">
        <Grid columns={3} gap="md">
          {[1, 2, 3, 4, 5, 6].map((n) => (
            <div
              key={n}
              style={{
                background: "var(--ui-primary-soft)",
                color: "var(--ui-primary-text)",
                padding: 16,
                borderRadius: "var(--ui-radius-md)",
                textAlign: "center",
                fontFamily: "var(--ui-font)",
                fontWeight: 500,
              }}
            >
              Cell {n}
            </div>
          ))}
        </Grid>
      </Section>

      <Section title="Spinner">
        <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
          <Spinner size="sm" />
          <Spinner size="md" />
          <Spinner size="lg" />
        </div>
      </Section>

      <Section title="Tooltip">
        <div style={{ display: "flex", gap: 16 }}>
          <Tooltip content="Hello from tooltip!" side="top">
            <Button variant="outline">Hover me</Button>
          </Tooltip>
          <Tooltip content="Right side" side="right">
            <Button variant="outline">Right</Button>
          </Tooltip>
        </div>
      </Section>

      <Section title="Dialog">
        <Button onClick={() => setDialogOpen(true)}>Open Dialog</Button>
        <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
          <DialogTitle>Confirm action</DialogTitle>
          <DialogDescription>Are you sure you want to proceed? This is a demo dialog.</DialogDescription>
          <DialogFooter>
            <Button variant="outline" onClick={() => setDialogOpen(false)}>Cancel</Button>
            <Button variant="solid" onClick={() => setDialogOpen(false)}>Confirm</Button>
          </DialogFooter>
        </Dialog>
      </Section>
    </div>
  );
}

export const AllComponentsPlayground: Story = {
  render: () => <AllComponents />,
};
