import * as React from "react";
import type { Meta, StoryObj } from "@storybook/react";
import { Dialog, DialogTitle, DialogDescription, DialogFooter } from "./Dialog";
import { Button } from "../Button";
import "../../../theme.css";

const meta: Meta<typeof Dialog> = {
  title: "Components/Dialog",
  component: Dialog,
};
export default meta;

type Story = StoryObj<typeof Dialog>;

function DialogDemo() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>Open Dialog</Button>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTitle>Delete item?</DialogTitle>
        <DialogDescription>
          This action cannot be undone. This will permanently delete the item
          from your account.
        </DialogDescription>
        <DialogFooter>
          <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
          <Button variant="solid" onClick={() => setOpen(false)}>Confirm</Button>
        </DialogFooter>
      </Dialog>
    </>
  );
}

export const Default: Story = {
  render: () => <DialogDemo />,
};
