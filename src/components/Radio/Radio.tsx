import * as React from "react";
import styles from "./Radio.module.css";

export type RadioSize = "sm" | "md" | "lg";

export type RadioProps = Omit<React.InputHTMLAttributes<HTMLInputElement>, "type" | "size"> & {
  label?: string;
  radioSize?: RadioSize;
};

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(
  ({ label, radioSize = "md", className, id: idProp, ...props }, ref) => {
    const generatedId = React.useId();
    const id = idProp ?? generatedId;

    return (
      <label className={[styles.wrapper, styles[radioSize], className].filter(Boolean).join(" ")} htmlFor={id}>
        <input ref={ref} type="radio" id={id} className={styles.input} {...props} />
        <span className={styles.control} aria-hidden="true">
          <span className={styles.dot} />
        </span>
        {label && <span className={styles.label}>{label}</span>}
      </label>
    );
  },
);

Radio.displayName = "Radio";
