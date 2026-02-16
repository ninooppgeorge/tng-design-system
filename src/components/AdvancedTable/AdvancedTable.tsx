import * as React from "react";
import styles from "./AdvancedTable.module.css";
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableHeaderCell,
  TableCell,
  type TableVariant,
} from "../Table";
import { Pagination } from "../Pagination";

/* ─── Types ─────────────────────────────────────────────────── */

export type SortDirection = "asc" | "desc";

export interface ColumnDef<T extends object = Record<string, unknown>> {
  /** Data key (supports dot notation: "user.name") */
  key: string;
  /** Column header label */
  header: string;
  /** Allow sorting on this column */
  sortable?: boolean;
  /** Show a value filter dropdown for this column */
  filterable?: boolean;
  /** Custom cell renderer */
  render?: (value: unknown, row: T) => React.ReactNode;
  /** Optional column width (CSS value, e.g. "120px" or "20%") */
  width?: string;
}

export interface AdvancedTableProps<T extends object = Record<string, unknown>> {
  /** Row data */
  data: T[];
  /** Column definitions */
  columns: ColumnDef<T>[];
  /** Enable global text search bar */
  searchable?: boolean;
  /** Placeholder text for the search input */
  searchPlaceholder?: string;
  /** Initial page size */
  defaultPageSize?: number;
  /** Options for the rows-per-page selector */
  pageSizeOptions?: number[];
  /** Table stripe variant */
  variant?: TableVariant;
  /** Message shown when no rows match */
  emptyMessage?: string;
  /** Extra class on the outer container */
  className?: string;
  /** Called when sort changes */
  onSort?: (key: string, direction: SortDirection | null) => void;
}

/* ─── Helpers ───────────────────────────────────────────────── */

function getNestedValue(row: Record<string, unknown>, key: string): unknown {
  return key.split(".").reduce<unknown>((obj, k) => {
    if (obj !== null && obj !== undefined && typeof obj === "object") {
      return (obj as Record<string, unknown>)[k];
    }
    return undefined;
  }, row);
}

function getCellString(row: Record<string, unknown>, key: string): string {
  const val = getNestedValue(row, key);
  if (val === null || val === undefined) return "";
  return String(val);
}

function SortIcon({ state }: { state: "none" | "asc" | "desc" }) {
  return (
    <svg
      className={styles.sortIcon}
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="currentColor"
      aria-hidden="true"
    >
      {/* Up triangle */}
      <path
        d="M6 1.5 L9.5 6 H2.5 Z"
        opacity={state === "desc" ? 0.25 : state === "none" ? 0.4 : 1}
      />
      {/* Down triangle */}
      <path
        d="M6 10.5 L2.5 6 H9.5 Z"
        opacity={state === "asc" ? 0.25 : state === "none" ? 0.4 : 1}
      />
    </svg>
  );
}

/* ─── Component ─────────────────────────────────────────────── */

export function AdvancedTable<T extends object>({
  data,
  columns,
  searchable = true,
  searchPlaceholder = "Search…",
  defaultPageSize = 10,
  pageSizeOptions = [5, 10, 25, 50],
  variant = "default",
  emptyMessage = "No results found.",
  className,
  onSort,
}: AdvancedTableProps<T>): React.ReactElement {
  const [searchQuery, setSearchQuery] = React.useState("");
  const [columnFilters, setColumnFilters] = React.useState<Record<string, string>>({});
  const [sortKey, setSortKey] = React.useState<string | null>(null);
  const [sortDirection, setSortDirection] = React.useState<SortDirection>("asc");
  const [currentPage, setCurrentPage] = React.useState(1);
  const [pageSize, setPageSize] = React.useState(defaultPageSize);

  const filterableColumns = columns.filter((c) => c.filterable);

  /* Unique values per filterable column (derived from original data) */
  const filterOptions = React.useMemo(() => {
    const opts: Record<string, string[]> = {};
    filterableColumns.forEach((col) => {
      const unique = Array.from(
        new Set(data.map((row) => getCellString(row as Record<string, unknown>, col.key)))
      )
        .filter(Boolean)
        .sort();
      opts[col.key] = unique;
    });
    return opts;
  }, [data, filterableColumns]);

  /* Apply search + column filters */
  const filteredData = React.useMemo(() => {
    let result = data as T[];

    if (searchQuery.trim()) {
      const q = searchQuery.toLowerCase();
      result = result.filter((row) =>
        columns.some((col) =>
          getCellString(row as Record<string, unknown>, col.key)
            .toLowerCase()
            .includes(q)
        )
      );
    }

    Object.entries(columnFilters).forEach(([key, value]) => {
      if (value) {
        result = result.filter(
          (row) => getCellString(row as Record<string, unknown>, key) === value
        );
      }
    });

    return result;
  }, [data, columns, searchQuery, columnFilters]);

  /* Apply sort */
  const sortedData = React.useMemo(() => {
    if (!sortKey) return filteredData;

    return [...filteredData].sort((a, b) => {
      const aVal = getNestedValue(a as Record<string, unknown>, sortKey);
      const bVal = getNestedValue(b as Record<string, unknown>, sortKey);

      if (aVal === null || aVal === undefined) return 1;
      if (bVal === null || bVal === undefined) return -1;

      if (typeof aVal === "number" && typeof bVal === "number") {
        return sortDirection === "asc" ? aVal - bVal : bVal - aVal;
      }

      const aStr = String(aVal).toLowerCase();
      const bStr = String(bVal).toLowerCase();

      if (sortDirection === "asc") {
        return aStr < bStr ? -1 : aStr > bStr ? 1 : 0;
      }
      return aStr > bStr ? -1 : aStr < bStr ? 1 : 0;
    });
  }, [filteredData, sortKey, sortDirection]);

  /* Pagination */
  const totalPages = Math.max(1, Math.ceil(sortedData.length / pageSize));
  const safePage = Math.min(currentPage, totalPages);
  const pagedData = sortedData.slice((safePage - 1) * pageSize, safePage * pageSize);

  /* Reset page on filter/search/sort change */
  const resetPage = () => setCurrentPage(1);

  function handleSearch(e: React.ChangeEvent<HTMLInputElement>) {
    setSearchQuery(e.target.value);
    resetPage();
  }

  function handleColumnFilter(key: string, value: string) {
    setColumnFilters((prev) => ({ ...prev, [key]: value }));
    resetPage();
  }

  function handleSort(key: string) {
    if (sortKey === key) {
      if (sortDirection === "asc") {
        setSortDirection("desc");
        onSort?.(key, "desc");
      } else {
        setSortKey(null);
        onSort?.(key, null);
      }
    } else {
      setSortKey(key);
      setSortDirection("asc");
      onSort?.(key, "asc");
    }
    resetPage();
  }

  function handlePageSize(e: React.ChangeEvent<HTMLSelectElement>) {
    setPageSize(Number(e.target.value));
    setCurrentPage(1);
  }

  const showToolbar = searchable || filterableColumns.length > 0;
  const startRow = sortedData.length === 0 ? 0 : (safePage - 1) * pageSize + 1;
  const endRow = Math.min(safePage * pageSize, sortedData.length);

  return (
    <div className={[styles.container, className].filter(Boolean).join(" ")}>
      {/* ── Toolbar ── */}
      {showToolbar && (
        <div className={styles.toolbar}>
          {searchable && (
            <div className={styles.searchWrapper}>
              <svg
                className={styles.searchIcon}
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                aria-hidden="true"
              >
                <circle cx="6.5" cy="6.5" r="4.5" stroke="currentColor" strokeWidth="1.5" />
                <path d="M10 10L13.5 13.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
              </svg>
              <input
                type="search"
                className={styles.searchInput}
                placeholder={searchPlaceholder}
                value={searchQuery}
                onChange={handleSearch}
                aria-label="Search table"
              />
            </div>
          )}

          {filterableColumns.length > 0 && (
            <div className={styles.filterRow}>
              {filterableColumns.map((col) => (
                <div key={col.key} className={styles.filterItem}>
                  <label className={styles.filterLabel} htmlFor={`filter-${col.key}`}>
                    {col.header}
                  </label>
                  <select
                    id={`filter-${col.key}`}
                    className={styles.filterSelect}
                    value={columnFilters[col.key] ?? ""}
                    onChange={(e) => handleColumnFilter(col.key, e.target.value)}
                  >
                    <option value="">All</option>
                    {(filterOptions[col.key] ?? []).map((val) => (
                      <option key={val} value={val}>
                        {val}
                      </option>
                    ))}
                  </select>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── Table ── */}
      <Table variant={variant}>
        <TableHead>
          <TableRow>
            {columns.map((col) => {
              const isSorted = sortKey === col.key;
              const sortState = !isSorted ? "none" : sortDirection;

              return (
                <TableHeaderCell
                  key={col.key}
                  style={col.width ? { width: col.width } : undefined}
                  className={col.sortable ? styles.sortableHeader : undefined}
                  onClick={col.sortable ? () => handleSort(col.key) : undefined}
                  aria-sort={
                    isSorted
                      ? sortDirection === "asc"
                        ? "ascending"
                        : "descending"
                      : undefined
                  }
                >
                  <span className={styles.headerContent}>
                    <span>{col.header}</span>
                    {col.sortable && <SortIcon state={sortState} />}
                  </span>
                </TableHeaderCell>
              );
            })}
          </TableRow>
        </TableHead>

        <TableBody>
          {pagedData.length === 0 ? (
            <TableRow>
              <TableCell
                colSpan={columns.length}
                className={styles.emptyCell}
              >
                {emptyMessage}
              </TableCell>
            </TableRow>
          ) : (
            pagedData.map((row, rowIdx) => (
              <TableRow key={rowIdx}>
                {columns.map((col) => {
                  const rawValue = getNestedValue(row as Record<string, unknown>, col.key);
                  return (
                    <TableCell key={col.key}>
                      {col.render
                        ? col.render(rawValue, row)
                        : rawValue === null || rawValue === undefined
                          ? ""
                          : String(rawValue)}
                    </TableCell>
                  );
                })}
              </TableRow>
            ))
          )}
        </TableBody>
      </Table>

      {/* ── Footer ── */}
      <div className={styles.footer}>
        <span className={styles.rowCount}>
          {sortedData.length === 0
            ? "No results"
            : `${startRow}–${endRow} of ${sortedData.length}`}
        </span>

        <div className={styles.footerRight}>
          <div className={styles.pageSizeControl}>
            <span className={styles.pageSizeLabel}>Rows</span>
            <select
              className={styles.pageSizeSelect}
              value={pageSize}
              onChange={handlePageSize}
              aria-label="Rows per page"
            >
              {pageSizeOptions.map((n) => (
                <option key={n} value={n}>
                  {n}
                </option>
              ))}
            </select>
          </div>

          <Pagination
            currentPage={safePage}
            totalPages={totalPages}
            onPageChange={setCurrentPage}
            size="sm"
          />
        </div>
      </div>
    </div>
  );
}

AdvancedTable.displayName = "AdvancedTable";
