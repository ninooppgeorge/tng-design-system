import * as React from "react";
import styles from "./Grid.module.css";

export type GridProps = React.HTMLAttributes<HTMLDivElement> & {
  /** Number of columns (1-12) or "auto-fill" / "auto-fit" */
  columns?: number | "auto-fill" | "auto-fit";
  /** Minimum column width for auto layouts */
  minChildWidth?: string;
  /** Gap between items */
  gap?: "none" | "sm" | "md" | "lg" | "xl";
  /** Align items */
  align?: "start" | "center" | "end" | "stretch";
};

export const Grid = React.forwardRef<HTMLDivElement, GridProps>(
  ({ columns = 3, minChildWidth = "200px", gap = "md", align, className, style, ...props }, ref) => {
    const classes = [
      styles.grid,
      gap !== "none" && styles[`gap-${gap}`],
      align && styles[`align-${align}`],
      className,
    ].filter(Boolean).join(" ");

    const gridTemplate =
      typeof columns === "number"
        ? `repeat(${columns}, minmax(0, 1fr))`
        : `repeat(${columns}, minmax(${minChildWidth}, 1fr))`;

    return (
      <div
        ref={ref}
        className={classes}
        style={{ ...style, gridTemplateColumns: gridTemplate }}
        {...props}
      />
    );
  },
);

Grid.displayName = "Grid";
