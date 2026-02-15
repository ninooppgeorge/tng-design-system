import * as React from "react";
import styles from "./Button.module.css";

export type ButtonVariant = "solid" | "soft" | "outline" | "ghost";
export type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  loading?: boolean;
  iconOnly?: boolean;
};

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = "solid", size = "md", loading, iconOnly, className, disabled, children, ...props }, ref) => {
    const classes = [
      styles.button,
      styles[variant],
      styles[size],
      iconOnly && styles.iconOnly,
      loading && styles.loading,
      className,
    ].filter(Boolean).join(" ");

    return (
      <button ref={ref} className={classes} disabled={disabled || loading} {...props}>
        {loading && <span className={styles.spinner} aria-hidden="true" />}
        <span className={loading ? styles.hiddenContent : undefined}>{children}</span>
      </button>
    );
  },
);

Button.displayName = "Button";
