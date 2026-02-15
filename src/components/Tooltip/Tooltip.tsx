import * as React from "react";
import styles from "./Tooltip.module.css";

export type TooltipSide = "top" | "bottom" | "left" | "right";

export type TooltipProps = {
  content: React.ReactNode;
  side?: TooltipSide;
  delayMs?: number;
  children: React.ReactElement;
};

export function Tooltip({ content, side = "top", delayMs = 200, children }: TooltipProps) {
  const [visible, setVisible] = React.useState(false);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout>>(undefined);

  const show = () => {
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setVisible(true), delayMs);
  };

  const hide = () => {
    clearTimeout(timeoutRef.current);
    setVisible(false);
  };

  React.useEffect(() => () => clearTimeout(timeoutRef.current), []);

  return (
    <span
      className={styles.wrapper}
      onMouseEnter={show}
      onMouseLeave={hide}
      onFocus={show}
      onBlur={hide}
    >
      {children}
      {visible && (
        <span role="tooltip" className={[styles.tooltip, styles[side]].join(" ")}>
          {content}
          <span className={styles.arrow} />
        </span>
      )}
    </span>
  );
}
