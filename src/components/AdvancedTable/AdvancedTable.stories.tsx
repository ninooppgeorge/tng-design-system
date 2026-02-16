import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { AdvancedTable } from "./AdvancedTable";
import type { ColumnDef } from "./AdvancedTable";
import "../../../theme.css";

const meta: Meta<typeof AdvancedTable> = {
  title: "Components/AdvancedTable",
  component: AdvancedTable,
  argTypes: {
    variant: { control: "select", options: ["default", "striped"] },
    searchable: { control: "boolean" },
    defaultPageSize: { control: "select", options: [5, 10, 25, 50] },
    emptyMessage: { control: "text" },
  },
};
export default meta;

type Story = StoryObj<typeof AdvancedTable>;

/* ── Sample data ── */

interface Employee {
  id: number;
  name: string;
  email: string;
  department: string;
  role: string;
  status: "Active" | "Inactive" | "Pending";
  salary: number;
}

const employees: Employee[] = [
  { id: 1,  name: "Alice Johnson",   email: "alice@acme.com",   department: "Engineering", role: "Senior Engineer",  status: "Active",   salary: 120000 },
  { id: 2,  name: "Bob Smith",       email: "bob@acme.com",     department: "Design",      role: "UI Designer",      status: "Active",   salary: 95000  },
  { id: 3,  name: "Carol White",     email: "carol@acme.com",   department: "Product",     role: "Product Manager",  status: "Active",   salary: 110000 },
  { id: 4,  name: "Dan Brown",       email: "dan@acme.com",     department: "Engineering", role: "Junior Engineer",  status: "Pending",  salary: 75000  },
  { id: 5,  name: "Eve Davis",       email: "eve@acme.com",     department: "Marketing",   role: "Marketing Lead",   status: "Active",   salary: 88000  },
  { id: 6,  name: "Frank Miller",    email: "frank@acme.com",   department: "Engineering", role: "Senior Engineer",  status: "Inactive", salary: 118000 },
  { id: 7,  name: "Grace Lee",       email: "grace@acme.com",   department: "Design",      role: "Brand Designer",   status: "Active",   salary: 90000  },
  { id: 8,  name: "Henry Wilson",    email: "henry@acme.com",   department: "Product",     role: "Product Analyst",  status: "Active",   salary: 95000  },
  { id: 9,  name: "Iris Chen",       email: "iris@acme.com",    department: "Engineering", role: "Staff Engineer",   status: "Active",   salary: 140000 },
  { id: 10, name: "Jack Taylor",     email: "jack@acme.com",    department: "Marketing",   role: "SEO Specialist",   status: "Pending",  salary: 72000  },
  { id: 11, name: "Karen Martinez",  email: "karen@acme.com",   department: "Design",      role: "UX Researcher",    status: "Active",   salary: 98000  },
  { id: 12, name: "Leo Anderson",    email: "leo@acme.com",     department: "Engineering", role: "DevOps Engineer",  status: "Active",   salary: 115000 },
  { id: 13, name: "Mia Thomas",      email: "mia@acme.com",     department: "Product",     role: "Product Manager",  status: "Inactive", salary: 108000 },
  { id: 14, name: "Noah Jackson",    email: "noah@acme.com",    department: "Marketing",   role: "Content Writer",   status: "Active",   salary: 68000  },
  { id: 15, name: "Olivia Harris",   email: "olivia@acme.com",  department: "Engineering", role: "QA Engineer",      status: "Active",   salary: 85000  },
  { id: 16, name: "Paul Clark",      email: "paul@acme.com",    department: "Design",      role: "Motion Designer",  status: "Pending",  salary: 87000  },
  { id: 17, name: "Quinn Lewis",     email: "quinn@acme.com",   department: "Engineering", role: "Backend Engineer", status: "Active",   salary: 112000 },
  { id: 18, name: "Rachel Walker",   email: "rachel@acme.com",  department: "Product",     role: "Product Analyst",  status: "Active",   salary: 93000  },
  { id: 19, name: "Sam Hall",        email: "sam@acme.com",     department: "Marketing",   role: "Growth Manager",   status: "Active",   salary: 105000 },
  { id: 20, name: "Tina Young",      email: "tina@acme.com",    department: "Engineering", role: "ML Engineer",      status: "Active",   salary: 135000 },
];

/* Status badge helper */
function StatusBadge({ status }: { status: Employee["status"] }) {
  const colors: Record<Employee["status"], { bg: string; color: string }> = {
    Active:   { bg: "var(--ui-success-soft)", color: "var(--ui-success)" },
    Inactive: { bg: "var(--ui-bg-muted)",     color: "var(--ui-text-muted)" },
    Pending:  { bg: "var(--ui-warning-soft)", color: "var(--ui-warning)" },
  };
  const { bg, color } = colors[status];
  return (
    <span
      style={{
        display: "inline-block",
        padding: "2px 10px",
        borderRadius: 9999,
        fontSize: "0.75rem",
        fontWeight: 500,
        background: bg,
        color,
      }}
    >
      {status}
    </span>
  );
}

/* ── Column definitions ── */

const allColumns: ColumnDef<Employee>[] = [
  { key: "id",         header: "ID",         sortable: true,  width: "60px" },
  { key: "name",       header: "Name",        sortable: true  },
  { key: "email",      header: "Email",       sortable: true  },
  { key: "department", header: "Department",  sortable: true,  filterable: true },
  { key: "role",       header: "Role",        sortable: true  },
  {
    key: "status",
    header: "Status",
    sortable: true,
    filterable: true,
    render: (val) => <StatusBadge status={val as Employee["status"]} />,
  },
  {
    key: "salary",
    header: "Salary",
    sortable: true,
    render: (val) =>
      new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(
        val as number
      ),
  },
];

/* ── Stories ── */

export const Default: Story = {
  render: () => (
    <AdvancedTable<Employee>
      data={employees}
      columns={allColumns}
      searchable
      defaultPageSize={10}
      pageSizeOptions={[5, 10, 25, 50]}
    />
  ),
};

export const Striped: Story = {
  render: () => (
    <AdvancedTable<Employee>
      data={employees}
      columns={allColumns}
      variant="striped"
      searchable
      defaultPageSize={10}
    />
  ),
};

export const SortableOnly: Story = {
  render: () => (
    <AdvancedTable<Employee>
      data={employees}
      columns={[
        { key: "name",   header: "Name",       sortable: true },
        { key: "role",   header: "Role",        sortable: true },
        { key: "salary", header: "Salary",      sortable: true,
          render: (val) => `$${Number(val).toLocaleString()}` },
      ]}
      searchable={false}
    />
  ),
};

export const WithFilters: Story = {
  render: () => (
    <AdvancedTable<Employee>
      data={employees}
      columns={allColumns}
      searchable
      defaultPageSize={5}
      pageSizeOptions={[5, 10, 20]}
    />
  ),
};

export const SmallPageSize: Story = {
  render: () => (
    <AdvancedTable<Employee>
      data={employees}
      columns={allColumns}
      searchable
      defaultPageSize={5}
      pageSizeOptions={[5, 10, 25]}
    />
  ),
};

export const EmptyState: Story = {
  render: () => (
    <AdvancedTable<Employee>
      data={[]}
      columns={allColumns}
      emptyMessage="No employees found."
    />
  ),
};

export const NoSearchBar: Story = {
  render: () => (
    <AdvancedTable<Employee>
      data={employees}
      columns={[
        { key: "name",       header: "Name",       sortable: true },
        { key: "department", header: "Department",  sortable: true, filterable: true },
        { key: "status",     header: "Status",      sortable: true, filterable: true,
          render: (val) => <StatusBadge status={val as Employee["status"]} /> },
      ]}
      searchable={false}
      defaultPageSize={10}
    />
  ),
};

export const CustomRenderers: Story = {
  render: () => (
    <AdvancedTable<Employee>
      data={employees}
      columns={[
        { key: "name", header: "Employee",
          render: (val, row) => (
            <div style={{ display: "flex", flexDirection: "column", gap: 2 }}>
              <span style={{ fontWeight: 600 }}>{String(val)}</span>
              <span style={{ fontSize: "0.75rem", color: "var(--ui-text-muted)" }}>{row.email}</span>
            </div>
          )},
        { key: "department", header: "Department", sortable: true, filterable: true },
        { key: "salary", header: "Salary", sortable: true,
          render: (val) => (
            <span style={{ fontWeight: 600, color: "var(--ui-primary-text)" }}>
              {new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(val as number)}
            </span>
          )},
        { key: "status", header: "Status", filterable: true,
          render: (val) => <StatusBadge status={val as Employee["status"]} /> },
      ]}
      searchable
      defaultPageSize={10}
    />
  ),
};
