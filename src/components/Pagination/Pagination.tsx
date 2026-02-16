import * as React from "react";
import styles from "./Pagination.module.css";

export type PaginationSize = "sm" | "md" | "lg";

export interface PaginationProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Current active page (1-indexed) */
  currentPage: number;
  /** Total number of pages */
  totalPages: number;
  /** Called when the user selects a page */
  onPageChange: (page: number) => void;
  /** Number of sibling page buttons to show on each side of the current page */
  siblingCount?: number;
  /** Show jump-to-first and jump-to-last buttons */
  showFirstLast?: boolean;
  /** Show "Page X of Y" label */
  showPageInfo?: boolean;
  /** Button size */
  size?: PaginationSize;
}

function buildPageRange(
  current: number,
  total: number,
  siblings: number
): (number | "dots")[] {
  const threshold = siblings * 2 + 5;

  if (total <= threshold) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const left = Math.max(current - siblings, 1);
  const right = Math.min(current + siblings, total);

  const hasLeftDots = left > 2;
  const hasRightDots = right < total - 1;

  if (!hasLeftDots && hasRightDots) {
    const count = 3 + siblings * 2;
    return [...Array.from({ length: count }, (_, i) => i + 1), "dots", total];
  }

  if (hasLeftDots && !hasRightDots) {
    const count = 3 + siblings * 2;
    return [
      1,
      "dots",
      ...Array.from({ length: count }, (_, i) => total - count + 1 + i),
    ];
  }

  return [
    1,
    "dots",
    ...Array.from({ length: right - left + 1 }, (_, i) => left + i),
    "dots",
    total,
  ];
}

export const Pagination = React.forwardRef<HTMLDivElement, PaginationProps>(
  (
    {
      currentPage,
      totalPages,
      onPageChange,
      siblingCount = 1,
      showFirstLast = false,
      showPageInfo = false,
      size = "md",
      className,
      ...props
    },
    ref
  ) => {
    if (totalPages <= 0) return null;

    const pages = buildPageRange(currentPage, totalPages, siblingCount);
    const canPrev = currentPage > 1;
    const canNext = currentPage < totalPages;

    const cls = [styles.pagination, styles[size], className]
      .filter(Boolean)
      .join(" ");

    const navBtn = (
      label: string,
      page: number,
      disabled: boolean,
      ariaLabel: string
    ) => (
      <button
        type="button"
        className={[styles.btn, disabled && styles.disabled]
          .filter(Boolean)
          .join(" ")}
        onClick={() => !disabled && onPageChange(page)}
        disabled={disabled}
        aria-label={ariaLabel}
      >
        {label}
      </button>
    );

    return (
      <div
        ref={ref}
        className={cls}
        role="navigation"
        aria-label="Pagination"
        {...props}
      >
        {showPageInfo && (
          <span className={styles.info}>
            Page {currentPage} of {totalPages}
          </span>
        )}
        <div className={styles.controls}>
          {showFirstLast && navBtn("«", 1, !canPrev, "First page")}
          {navBtn("‹", currentPage - 1, !canPrev, "Previous page")}

          {pages.map((page, idx) =>
            page === "dots" ? (
              <span
                key={`dots-${idx}`}
                className={styles.dots}
                aria-hidden="true"
              >
                …
              </span>
            ) : (
              <button
                key={page}
                type="button"
                className={[styles.btn, page === currentPage && styles.active]
                  .filter(Boolean)
                  .join(" ")}
                onClick={() => onPageChange(page as number)}
                aria-label={`Page ${page}`}
                aria-current={page === currentPage ? "page" : undefined}
              >
                {page}
              </button>
            )
          )}

          {navBtn("›", currentPage + 1, !canNext, "Next page")}
          {showFirstLast && navBtn("»", totalPages, !canNext, "Last page")}
        </div>
      </div>
    );
  }
);
Pagination.displayName = "Pagination";
