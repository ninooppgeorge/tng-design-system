import type { Meta, StoryObj } from "@storybook/react";
import { Table, TableHead, TableBody, TableRow, TableHeaderCell, TableCell } from "./Table";
import "../../../theme.css";

const meta: Meta<typeof Table> = {
  title: "Components/Table",
  component: Table,
  argTypes: {
    variant: { control: "select", options: ["default", "striped"] },
  },
};
export default meta;

type Story = StoryObj<typeof Table>;

const people = [
  { name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
  { name: "Bob Smith", email: "bob@example.com", role: "Editor" },
  { name: "Carol White", email: "carol@example.com", role: "Viewer" },
  { name: "Dan Brown", email: "dan@example.com", role: "Editor" },
  { name: "Eve Davis", email: "eve@example.com", role: "Admin" },
];

const renderTable = (variant?: "default" | "striped") => (
  <Table variant={variant}>
    <TableHead>
      <TableRow>
        <TableHeaderCell>Name</TableHeaderCell>
        <TableHeaderCell>Email</TableHeaderCell>
        <TableHeaderCell>Role</TableHeaderCell>
      </TableRow>
    </TableHead>
    <TableBody>
      {people.map((p) => (
        <TableRow key={p.email}>
          <TableCell>{p.name}</TableCell>
          <TableCell>{p.email}</TableCell>
          <TableCell>{p.role}</TableCell>
        </TableRow>
      ))}
    </TableBody>
  </Table>
);

export const Default: Story = { render: () => renderTable() };
export const Striped: Story = { render: () => renderTable("striped") };
