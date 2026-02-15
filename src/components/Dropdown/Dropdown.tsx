import * as React from "react";
import styles from "./Dropdown.module.css";

export interface DropdownOption {
  value: string;
  label: string;
  disabled?: boolean;
}

export type DropdownSize = "sm" | "md" | "lg";

export type DropdownProps = {
  options: DropdownOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  disabled?: boolean;
  error?: boolean;
  dropdownSize?: DropdownSize;
  className?: string;
  id?: string;
  name?: string;
};

export const Dropdown = React.forwardRef<HTMLButtonElement, DropdownProps>(
  ({ options, value: controlledValue, defaultValue, onChange, placeholder = "Select...", disabled, error, dropdownSize = "md", className, id, name }, ref) => {
    const [open, setOpen] = React.useState(false);
    const [internalValue, setInternalValue] = React.useState(defaultValue ?? "");
    const containerRef = React.useRef<HTMLDivElement>(null);

    const value = controlledValue !== undefined ? controlledValue : internalValue;
    const selectedOption = options.find((o) => o.value === value);

    const handleSelect = (optionValue: string) => {
      if (controlledValue === undefined) setInternalValue(optionValue);
      onChange?.(optionValue);
      setOpen(false);
    };

    // Close on outside click
    React.useEffect(() => {
      if (!open) return;
      const handler = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setOpen(false);
        }
      };
      document.addEventListener("mousedown", handler);
      return () => document.removeEventListener("mousedown", handler);
    }, [open]);

    // Close on Escape
    const handleKeyDown = (e: React.KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };

    const triggerClasses = [
      styles.trigger,
      styles[dropdownSize],
      error && styles.error,
      open && styles.open,
      className,
    ].filter(Boolean).join(" ");

    return (
      <div ref={containerRef} className={styles.wrapper} onKeyDown={handleKeyDown}>
        {name && <input type="hidden" name={name} value={value} />}
        <button
          ref={ref}
          type="button"
          id={id}
          className={triggerClasses}
          disabled={disabled}
          aria-haspopup="listbox"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <span className={selectedOption ? styles.selectedText : styles.placeholder}>
            {selectedOption ? selectedOption.label : placeholder}
          </span>
          <svg className={styles.chevron} width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
            <path d="M4 6L8 10L12 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        {open && (
          <ul className={styles.menu} role="listbox">
            {options.map((option) => (
              <li
                key={option.value}
                role="option"
                aria-selected={option.value === value}
                aria-disabled={option.disabled}
                className={[
                  styles.option,
                  option.value === value && styles.selected,
                  option.disabled && styles.optionDisabled,
                ].filter(Boolean).join(" ")}
                onClick={() => !option.disabled && handleSelect(option.value)}
              >
                {option.label}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  },
);

Dropdown.displayName = "Dropdown";
