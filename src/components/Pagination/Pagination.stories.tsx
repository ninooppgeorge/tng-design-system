import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Pagination } from "./Pagination";
import "../../../theme.css";

const meta: Meta<typeof Pagination> = {
  title: "Components/Pagination",
  component: Pagination,
  argTypes: {
    size: { control: "select", options: ["sm", "md", "lg"] },
    siblingCount: { control: { type: "number", min: 0, max: 3 } },
    totalPages: { control: { type: "number", min: 1, max: 50 } },
    showPageInfo: { control: "boolean" },
    showFirstLast: { control: "boolean" },
  },
  args: {
    currentPage: 5,
    totalPages: 10,
    size: "md",
    siblingCount: 1,
    showPageInfo: false,
    showFirstLast: false,
  },
};
export default meta;

type Story = StoryObj<typeof Pagination>;

/* Wrapper to make pagination interactive in Storybook */
function Controlled(props: React.ComponentProps<typeof Pagination>) {
  const [page, setPage] = React.useState(props.currentPage ?? 1);
  return <Pagination {...props} currentPage={page} onPageChange={setPage} />;
}

export const Default: Story = {
  render: (args) => <Controlled {...args} />,
};

export const WithPageInfo: Story = {
  render: (args) => <Controlled {...args} showPageInfo />,
};

export const WithFirstLast: Story = {
  render: (args) => <Controlled {...args} showFirstLast />,
};

export const AllOptions: Story = {
  render: (args) => <Controlled {...args} showPageInfo showFirstLast />,
};

export const Small: Story = {
  render: (args) => <Controlled {...args} size="sm" />,
};

export const Medium: Story = {
  render: (args) => <Controlled {...args} size="md" />,
};

export const Large: Story = {
  render: (args) => <Controlled {...args} size="lg" />,
};

export const AllSizes: Story = {
  render: (args) => (
    <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
      <Controlled {...args} size="sm" showPageInfo />
      <Controlled {...args} size="md" showPageInfo />
      <Controlled {...args} size="lg" showPageInfo />
    </div>
  ),
};

export const FewPages: Story = {
  render: (args) => <Controlled {...args} totalPages={3} currentPage={2} />,
};

export const ManyPages: Story = {
  render: (args) => (
    <Controlled {...args} totalPages={50} currentPage={25} showPageInfo showFirstLast />
  ),
};

export const SinglePage: Story = {
  render: (args) => <Controlled {...args} totalPages={1} currentPage={1} showPageInfo />,
};
