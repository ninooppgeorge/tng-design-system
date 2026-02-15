import * as React from "react";
import styles from "./Tabs.module.css";

export type TabsVariant = "underline" | "pills";

/* ── Tabs Root ── */

export type TabsProps = {
  value?: string;
  defaultValue?: string;
  onValueChange?: (value: string) => void;
  variant?: TabsVariant;
  children: React.ReactNode;
  className?: string;
};

interface TabsContextValue {
  value: string;
  onSelect: (value: string) => void;
  variant: TabsVariant;
}

const TabsContext = React.createContext<TabsContextValue | undefined>(undefined);

function useTabs() {
  const ctx = React.useContext(TabsContext);
  if (!ctx) throw new Error("Tabs compound components must be used within <Tabs>");
  return ctx;
}

export function Tabs({ value: controlledValue, defaultValue = "", onValueChange, variant = "underline", children, className }: TabsProps) {
  const [internalValue, setInternalValue] = React.useState(defaultValue);
  const value = controlledValue !== undefined ? controlledValue : internalValue;

  const onSelect = React.useCallback(
    (v: string) => {
      if (controlledValue === undefined) setInternalValue(v);
      onValueChange?.(v);
    },
    [controlledValue, onValueChange],
  );

  const ctx = React.useMemo(() => ({ value, onSelect, variant }), [value, onSelect, variant]);

  return (
    <TabsContext.Provider value={ctx}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

/* ── Tab List ── */

export type TabListProps = React.HTMLAttributes<HTMLDivElement>;

export function TabList({ className, ...props }: TabListProps) {
  const { variant } = useTabs();
  const classes = [styles.list, styles[`list-${variant}`], className].filter(Boolean).join(" ");
  return <div role="tablist" className={classes} {...props} />;
}

/* ── Tab Trigger ── */

export type TabTriggerProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  value: string;
};

export function TabTrigger({ value, className, ...props }: TabTriggerProps) {
  const { value: selected, onSelect, variant } = useTabs();
  const active = value === selected;
  const classes = [
    styles.trigger,
    styles[`trigger-${variant}`],
    active && styles.active,
    className,
  ].filter(Boolean).join(" ");

  return (
    <button
      role="tab"
      type="button"
      aria-selected={active}
      className={classes}
      onClick={() => onSelect(value)}
      {...props}
    />
  );
}

/* ── Tab Content ── */

export type TabContentProps = React.HTMLAttributes<HTMLDivElement> & {
  value: string;
};

export function TabContent({ value, className, ...props }: TabContentProps) {
  const { value: selected } = useTabs();
  if (value !== selected) return null;
  return <div role="tabpanel" className={[styles.content, className].filter(Boolean).join(" ")} {...props} />;
}
