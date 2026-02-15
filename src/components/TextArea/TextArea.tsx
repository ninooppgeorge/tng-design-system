import * as React from "react";
import styles from "./TextArea.module.css";

export type TextAreaSize = "sm" | "md" | "lg";

export type TextAreaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement> & {
  textAreaSize?: TextAreaSize;
  error?: boolean;
  resize?: "none" | "vertical" | "horizontal" | "both";
};

export const TextArea = React.forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ textAreaSize = "md", error, resize = "vertical", className, style, ...props }, ref) => {
    const classes = [
      styles.textarea,
      styles[textAreaSize],
      error && styles.error,
      className,
    ].filter(Boolean).join(" ");

    return (
      <textarea
        ref={ref}
        className={classes}
        style={{ ...style, resize }}
        {...props}
      />
    );
  },
);

TextArea.displayName = "TextArea";
