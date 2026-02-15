import * as React from "react";
import styles from "./Checkbox.module.css";

export type CheckboxSize = "sm" | "md" | "lg";

export type CheckboxProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> & {
  label?: string;
  checkboxSize?: CheckboxSize;
};

export const Checkbox = React.forwardRef<HTMLInputElement, CheckboxProps>(
  ({ label, checkboxSize = "md", className, id: idProp, ...props }, ref) => {
    const generatedId = React.useId();
    const id = idProp ?? generatedId;

    return (
      <label className={[styles.wrapper, styles[checkboxSize], className].filter(Boolean).join(" ")} htmlFor={id}>
        <input ref={ref} type="checkbox" id={id} className={styles.input} {...props} />
        <span className={styles.control} aria-hidden="true">
          <svg className={styles.icon} viewBox="0 0 12 12" fill="none">
            <path d="M2.5 6L5 8.5L9.5 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </span>
        {label && <span className={styles.label}>{label}</span>}
      </label>
    );
  },
);

Checkbox.displayName = "Checkbox";
