import type { Meta, StoryObj } from "@storybook/react";
import { Tabs, TabList, TabTrigger, TabContent } from "./Tabs";
import "../../../theme.css";

const meta: Meta<typeof Tabs> = {
  title: "Components/Tabs",
  component: Tabs,
  argTypes: {
    variant: { control: "select", options: ["underline", "pills"] },
  },
};
export default meta;

type Story = StoryObj<typeof Tabs>;

export const Underline: Story = {
  render: (args) => (
    <Tabs defaultValue="account" {...args}>
      <TabList>
        <TabTrigger value="account">Account</TabTrigger>
        <TabTrigger value="password">Password</TabTrigger>
        <TabTrigger value="notifications">Notifications</TabTrigger>
      </TabList>
      <TabContent value="account">Manage your account settings and preferences.</TabContent>
      <TabContent value="password">Change your password and security options.</TabContent>
      <TabContent value="notifications">Configure your notification preferences.</TabContent>
    </Tabs>
  ),
};

export const Pills: Story = {
  render: (args) => (
    <Tabs defaultValue="overview" variant="pills" {...args}>
      <TabList>
        <TabTrigger value="overview">Overview</TabTrigger>
        <TabTrigger value="analytics">Analytics</TabTrigger>
        <TabTrigger value="reports">Reports</TabTrigger>
      </TabList>
      <TabContent value="overview">Dashboard overview with key metrics.</TabContent>
      <TabContent value="analytics">Detailed analytics and insights.</TabContent>
      <TabContent value="reports">Generated reports and exports.</TabContent>
    </Tabs>
  ),
};
