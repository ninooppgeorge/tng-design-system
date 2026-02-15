import * as React from "react";
import styles from "./Table.module.css";

export type TableVariant = "default" | "striped";

export type TableProps = React.TableHTMLAttributes<HTMLTableElement> & {
  variant?: TableVariant;
};

export const Table = React.forwardRef<HTMLTableElement, TableProps>(
  ({ variant = "default", className, ...props }, ref) => {
    const classes = [styles.table, styles[variant], className].filter(Boolean).join(" ");
    return (
      <div className={styles.wrapper}>
        <table ref={ref} className={classes} {...props} />
      </div>
    );
  },
);
Table.displayName = "Table";

export type TableHeadProps = React.HTMLAttributes<HTMLTableSectionElement>;
export const TableHead = React.forwardRef<HTMLTableSectionElement, TableHeadProps>(
  ({ className, ...props }, ref) => (
    <thead ref={ref} className={[styles.thead, className].filter(Boolean).join(" ")} {...props} />
  ),
);
TableHead.displayName = "TableHead";

export type TableBodyProps = React.HTMLAttributes<HTMLTableSectionElement>;
export const TableBody = React.forwardRef<HTMLTableSectionElement, TableBodyProps>(
  ({ className, ...props }, ref) => (
    <tbody ref={ref} className={[styles.tbody, className].filter(Boolean).join(" ")} {...props} />
  ),
);
TableBody.displayName = "TableBody";

export type TableRowProps = React.HTMLAttributes<HTMLTableRowElement>;
export const TableRow = React.forwardRef<HTMLTableRowElement, TableRowProps>(
  ({ className, ...props }, ref) => (
    <tr ref={ref} className={[styles.tr, className].filter(Boolean).join(" ")} {...props} />
  ),
);
TableRow.displayName = "TableRow";

export type TableHeaderCellProps = React.ThHTMLAttributes<HTMLTableCellElement>;
export const TableHeaderCell = React.forwardRef<HTMLTableCellElement, TableHeaderCellProps>(
  ({ className, ...props }, ref) => (
    <th ref={ref} className={[styles.th, className].filter(Boolean).join(" ")} {...props} />
  ),
);
TableHeaderCell.displayName = "TableHeaderCell";

export type TableCellProps = React.TdHTMLAttributes<HTMLTableCellElement>;
export const TableCell = React.forwardRef<HTMLTableCellElement, TableCellProps>(
  ({ className, ...props }, ref) => (
    <td ref={ref} className={[styles.td, className].filter(Boolean).join(" ")} {...props} />
  ),
);
TableCell.displayName = "TableCell";
