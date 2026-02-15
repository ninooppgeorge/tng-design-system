import * as React from "react";
import styles from "./Dialog.module.css";

export type DialogProps = {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  children: React.ReactNode;
};

export function Dialog({ open, onOpenChange, children }: DialogProps) {
  // Close on Escape
  React.useEffect(() => {
    if (!open) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "Escape") onOpenChange(false);
    };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [open, onOpenChange]);

  // Prevent body scroll when open
  React.useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => { document.body.style.overflow = prev; };
  }, [open]);

  if (!open) return null;

  return (
    <div className={styles.overlay} onClick={() => onOpenChange(false)}>
      <div
        className={styles.content}
        role="dialog"
        aria-modal="true"
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
}

export type DialogTitleProps = React.HTMLAttributes<HTMLHeadingElement>;
export function DialogTitle({ className, ...props }: DialogTitleProps) {
  return <h2 className={[styles.title, className].filter(Boolean).join(" ")} {...props} />;
}

export type DialogDescriptionProps = React.HTMLAttributes<HTMLParagraphElement>;
export function DialogDescription({ className, ...props }: DialogDescriptionProps) {
  return <p className={[styles.description, className].filter(Boolean).join(" ")} {...props} />;
}

export type DialogFooterProps = React.HTMLAttributes<HTMLDivElement>;
export function DialogFooter({ className, ...props }: DialogFooterProps) {
  return <div className={[styles.footer, className].filter(Boolean).join(" ")} {...props} />;
}
