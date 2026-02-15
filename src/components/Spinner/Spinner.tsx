import * as React from "react";
import styles from "./Spinner.module.css";

export type SpinnerSize = "sm" | "md" | "lg";

export type SpinnerProps = React.HTMLAttributes<HTMLSpanElement> & {
  size?: SpinnerSize;
  /** Use "primary" to match accent color, "current" to inherit parent color */
  color?: "primary" | "current";
  label?: string;
};

export const Spinner = React.forwardRef<HTMLSpanElement, SpinnerProps>(
  ({ size = "md", color = "primary", label = "Loading", className, ...props }, ref) => {
    const classes = [
      styles.spinner,
      styles[size],
      styles[color],
      className,
    ].filter(Boolean).join(" ");

    return (
      <span ref={ref} role="status" className={classes} {...props}>
        <svg className={styles.svg} viewBox="0 0 24 24" fill="none" aria-hidden="true">
          <circle className={styles.track} cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" />
          <path
            className={styles.arc}
            d="M12 2a10 10 0 019.8 8"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
          />
        </svg>
        <span className={styles.srOnly}>{label}</span>
      </span>
    );
  },
);

Spinner.displayName = "Spinner";
