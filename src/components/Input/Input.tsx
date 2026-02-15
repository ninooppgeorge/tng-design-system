import * as React from "react";
import styles from "./Input.module.css";

export type InputSize = "sm" | "md" | "lg";

export type InputProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "size"> & {
  /** Visual size of the input */
  inputSize?: InputSize;
  /** Error state */
  error?: boolean;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ inputSize = "md", error, className, ...props }, ref) => {
    const classes = [
      styles.input,
      styles[inputSize],
      error && styles.error,
      className,
    ].filter(Boolean).join(" ");

    return <input ref={ref} className={classes} {...props} />;
  },
);

Input.displayName = "Input";
