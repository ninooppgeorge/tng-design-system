"use strict";Object.defineProperty(exports,Symbol.toStringTag,{value:"Module"});const lr=require("react");function Cr(n){const e=Object.create(null,{[Symbol.toStringTag]:{value:"Module"}});if(n){for(const t in n)if(t!=="default"){const o=Object.getOwnPropertyDescriptor(n,t);Object.defineProperty(e,t,o.get?o:{enumerable:!0,get:()=>n[t]})}}return e.default=n,Object.freeze(e)}const l=Cr(lr),$r=`/* ─── TNG Design System – Design Tokens ─── */\r
\r
:root {\r
  /* ── Typography ── */\r
  --ui-font: "Poppins", ui-sans-serif, system-ui, -apple-system, "Segoe UI", Roboto, Arial, sans-serif;\r
  --ui-font-mono: ui-monospace, "Cascadia Code", "Fira Code", Menlo, Consolas, monospace;\r
  --ui-font-xs: 0.75rem;\r
  --ui-font-sm: 0.875rem;\r
  --ui-font-md: 1rem;\r
  --ui-font-lg: 1.125rem;\r
  --ui-font-xl: 1.25rem;\r
  --ui-font-2xl: 1.5rem;\r
  --ui-leading-tight: 1.25;\r
  --ui-leading-normal: 1.5;\r
\r
  /* ── Spacing scale ── */\r
  --ui-space-0: 0px;\r
  --ui-space-px: 1px;\r
  --ui-space-0-5: 2px;\r
  --ui-space-1: 4px;\r
  --ui-space-1-5: 6px;\r
  --ui-space-2: 8px;\r
  --ui-space-2-5: 10px;\r
  --ui-space-3: 12px;\r
  --ui-space-3-5: 14px;\r
  --ui-space-4: 16px;\r
  --ui-space-5: 20px;\r
  --ui-space-6: 24px;\r
  --ui-space-7: 28px;\r
  --ui-space-8: 32px;\r
  --ui-space-9: 36px;\r
  --ui-space-10: 40px;\r
  --ui-space-12: 48px;\r
  --ui-space-16: 64px;\r
\r
  /* ── Border Radius ── */\r
  --ui-radius-none: 0px;\r
  --ui-radius-sm: 4px;\r
  --ui-radius-md: 8px;\r
  --ui-radius-lg: 12px;\r
  --ui-radius-xl: 16px;\r
  --ui-radius-full: 9999px;\r
\r
  /* ── Shadows ── */\r
  --ui-shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.05);\r
  --ui-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.1), 0 1px 2px rgba(0, 0, 0, 0.06);\r
  --ui-shadow-md: 0 4px 6px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06);\r
  --ui-shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.1), 0 4px 6px rgba(0, 0, 0, 0.05);\r
  --ui-shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.1), 0 10px 10px rgba(0, 0, 0, 0.04);\r
\r
  /* ── Z-index scale ── */\r
  --ui-z-dropdown: 50;\r
  --ui-z-sticky: 100;\r
  --ui-z-overlay: 200;\r
  --ui-z-modal: 300;\r
  --ui-z-tooltip: 400;\r
\r
  /* ── Transitions ── */\r
  --ui-duration-fast: 100ms;\r
  --ui-duration-normal: 200ms;\r
  --ui-duration-slow: 300ms;\r
  --ui-ease: cubic-bezier(0.4, 0, 0.2, 1);\r
}\r
\r
/* ════════════════════════════════════════════\r
   ACCENT COLORS (default: blue)\r
   ════════════════════════════════════════════ */\r
\r
:root,\r
[data-tng-accent="blue"] {\r
  --ui-primary: #2563eb;\r
  --ui-primary-hover: #1d4ed8;\r
  --ui-primary-active: #1e40af;\r
  --ui-primary-soft: #dbeafe;\r
  --ui-primary-soft-hover: #bfdbfe;\r
  --ui-primary-text: #1d4ed8;\r
  --ui-on-primary: #ffffff;\r
  --ui-ring: rgba(37, 99, 235, 0.35);\r
}\r
\r
[data-tng-accent="purple"] {\r
  --ui-primary: #7c3aed;\r
  --ui-primary-hover: #6d28d9;\r
  --ui-primary-active: #5b21b6;\r
  --ui-primary-soft: #ede9fe;\r
  --ui-primary-soft-hover: #ddd6fe;\r
  --ui-primary-text: #6d28d9;\r
  --ui-on-primary: #ffffff;\r
  --ui-ring: rgba(124, 58, 237, 0.35);\r
}\r
\r
[data-tng-accent="red"] {\r
  --ui-primary: #dc2626;\r
  --ui-primary-hover: #b91c1c;\r
  --ui-primary-active: #991b1b;\r
  --ui-primary-soft: #fee2e2;\r
  --ui-primary-soft-hover: #fecaca;\r
  --ui-primary-text: #b91c1c;\r
  --ui-on-primary: #ffffff;\r
  --ui-ring: rgba(220, 38, 38, 0.35);\r
}\r
\r
[data-tng-accent="green"] {\r
  --ui-primary: #16a34a;\r
  --ui-primary-hover: #15803d;\r
  --ui-primary-active: #166534;\r
  --ui-primary-soft: #dcfce7;\r
  --ui-primary-soft-hover: #bbf7d0;\r
  --ui-primary-text: #15803d;\r
  --ui-on-primary: #ffffff;\r
  --ui-ring: rgba(22, 163, 74, 0.35);\r
}\r
\r
[data-tng-accent="orange"] {\r
  --ui-primary: #ea580c;\r
  --ui-primary-hover: #c2410c;\r
  --ui-primary-active: #9a3412;\r
  --ui-primary-soft: #ffedd5;\r
  --ui-primary-soft-hover: #fed7aa;\r
  --ui-primary-text: #c2410c;\r
  --ui-on-primary: #ffffff;\r
  --ui-ring: rgba(234, 88, 12, 0.35);\r
}\r
\r
[data-tng-accent="pink"] {\r
  --ui-primary: #db2777;\r
  --ui-primary-hover: #be185d;\r
  --ui-primary-active: #9d174d;\r
  --ui-primary-soft: #fce7f3;\r
  --ui-primary-soft-hover: #fbcfe8;\r
  --ui-primary-text: #be185d;\r
  --ui-on-primary: #ffffff;\r
  --ui-ring: rgba(219, 39, 119, 0.35);\r
}\r
\r
[data-tng-accent="teal"] {\r
  --ui-primary: #0d9488;\r
  --ui-primary-hover: #0f766e;\r
  --ui-primary-active: #115e59;\r
  --ui-primary-soft: #ccfbf1;\r
  --ui-primary-soft-hover: #99f6e4;\r
  --ui-primary-text: #0f766e;\r
  --ui-on-primary: #ffffff;\r
  --ui-ring: rgba(13, 148, 136, 0.35);\r
}\r
\r
/* ════════════════════════════════════════════\r
   LIGHT THEME (default)\r
   ════════════════════════════════════════════ */\r
\r
:root,\r
[data-tng-theme="light"] {\r
  color-scheme: light;\r
  --ui-bg: #ffffff;\r
  --ui-bg-subtle: #f9fafb;\r
  --ui-bg-muted: #f3f4f6;\r
  --ui-bg-elevated: #ffffff;\r
  --ui-text: #111827;\r
  --ui-text-muted: #6b7280;\r
  --ui-text-subtle: #9ca3af;\r
  --ui-border: #e5e7eb;\r
  --ui-border-hover: #d1d5db;\r
  --ui-border-strong: #9ca3af;\r
  --ui-input-bg: #ffffff;\r
  --ui-input-border: #d1d5db;\r
  --ui-overlay: rgba(0, 0, 0, 0.5);\r
  --ui-success: #16a34a;\r
  --ui-success-soft: #dcfce7;\r
  --ui-warning: #d97706;\r
  --ui-warning-soft: #fef3c7;\r
  --ui-danger: #dc2626;\r
  --ui-danger-soft: #fee2e2;\r
  --ui-info: #2563eb;\r
  --ui-info-soft: #dbeafe;\r
}\r
\r
/* ════════════════════════════════════════════\r
   DARK THEME\r
   ════════════════════════════════════════════ */\r
\r
[data-tng-theme="dark"] {\r
  color-scheme: dark;\r
  --ui-bg: #09090b;\r
  --ui-bg-subtle: #18181b;\r
  --ui-bg-muted: #27272a;\r
  --ui-bg-elevated: #18181b;\r
  --ui-text: #fafafa;\r
  --ui-text-muted: #a1a1aa;\r
  --ui-text-subtle: #71717a;\r
  --ui-border: #27272a;\r
  --ui-border-hover: #3f3f46;\r
  --ui-border-strong: #52525b;\r
  --ui-input-bg: #18181b;\r
  --ui-input-border: #3f3f46;\r
  --ui-overlay: rgba(0, 0, 0, 0.7);\r
  --ui-success: #22c55e;\r
  --ui-success-soft: rgba(34, 197, 94, 0.15);\r
  --ui-warning: #eab308;\r
  --ui-warning-soft: rgba(234, 179, 8, 0.15);\r
  --ui-danger: #ef4444;\r
  --ui-danger-soft: rgba(239, 68, 68, 0.15);\r
  --ui-info: #3b82f6;\r
  --ui-info-soft: rgba(59, 130, 246, 0.15);\r
\r
  --ui-shadow-xs: 0 1px 2px rgba(0, 0, 0, 0.3);\r
  --ui-shadow-sm: 0 1px 3px rgba(0, 0, 0, 0.4), 0 1px 2px rgba(0, 0, 0, 0.3);\r
  --ui-shadow-md: 0 4px 6px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.3);\r
  --ui-shadow-lg: 0 10px 15px rgba(0, 0, 0, 0.4), 0 4px 6px rgba(0, 0, 0, 0.3);\r
  --ui-shadow-xl: 0 20px 25px rgba(0, 0, 0, 0.5), 0 10px 10px rgba(0, 0, 0, 0.3);\r
}\r
\r
/* Dark accent overrides for better contrast */\r
[data-tng-theme="dark"][data-tng-accent="blue"],\r
[data-tng-theme="dark"] [data-tng-accent="blue"],\r
[data-tng-theme="dark"]:not([data-tng-accent]) {\r
  --ui-primary: #3b82f6;\r
  --ui-primary-hover: #2563eb;\r
  --ui-primary-active: #1d4ed8;\r
  --ui-primary-soft: rgba(59, 130, 246, 0.15);\r
  --ui-primary-soft-hover: rgba(59, 130, 246, 0.25);\r
  --ui-primary-text: #60a5fa;\r
  --ui-ring: rgba(59, 130, 246, 0.4);\r
}\r
\r
[data-tng-theme="dark"][data-tng-accent="purple"],\r
[data-tng-theme="dark"] [data-tng-accent="purple"] {\r
  --ui-primary: #8b5cf6;\r
  --ui-primary-hover: #7c3aed;\r
  --ui-primary-active: #6d28d9;\r
  --ui-primary-soft: rgba(139, 92, 246, 0.15);\r
  --ui-primary-soft-hover: rgba(139, 92, 246, 0.25);\r
  --ui-primary-text: #a78bfa;\r
  --ui-ring: rgba(139, 92, 246, 0.4);\r
}\r
\r
[data-tng-theme="dark"][data-tng-accent="red"],\r
[data-tng-theme="dark"] [data-tng-accent="red"] {\r
  --ui-primary: #ef4444;\r
  --ui-primary-hover: #dc2626;\r
  --ui-primary-active: #b91c1c;\r
  --ui-primary-soft: rgba(239, 68, 68, 0.15);\r
  --ui-primary-soft-hover: rgba(239, 68, 68, 0.25);\r
  --ui-primary-text: #f87171;\r
  --ui-ring: rgba(239, 68, 68, 0.4);\r
}\r
\r
[data-tng-theme="dark"][data-tng-accent="green"],\r
[data-tng-theme="dark"] [data-tng-accent="green"] {\r
  --ui-primary: #22c55e;\r
  --ui-primary-hover: #16a34a;\r
  --ui-primary-active: #15803d;\r
  --ui-primary-soft: rgba(34, 197, 94, 0.15);\r
  --ui-primary-soft-hover: rgba(34, 197, 94, 0.25);\r
  --ui-primary-text: #4ade80;\r
  --ui-ring: rgba(34, 197, 94, 0.4);\r
}\r
\r
[data-tng-theme="dark"][data-tng-accent="orange"],\r
[data-tng-theme="dark"] [data-tng-accent="orange"] {\r
  --ui-primary: #f97316;\r
  --ui-primary-hover: #ea580c;\r
  --ui-primary-active: #c2410c;\r
  --ui-primary-soft: rgba(249, 115, 22, 0.15);\r
  --ui-primary-soft-hover: rgba(249, 115, 22, 0.25);\r
  --ui-primary-text: #fb923c;\r
  --ui-ring: rgba(249, 115, 22, 0.4);\r
}\r
\r
[data-tng-theme="dark"][data-tng-accent="pink"],\r
[data-tng-theme="dark"] [data-tng-accent="pink"] {\r
  --ui-primary: #ec4899;\r
  --ui-primary-hover: #db2777;\r
  --ui-primary-active: #be185d;\r
  --ui-primary-soft: rgba(236, 72, 153, 0.15);\r
  --ui-primary-soft-hover: rgba(236, 72, 153, 0.25);\r
  --ui-primary-text: #f472b6;\r
  --ui-ring: rgba(236, 72, 153, 0.4);\r
}\r
\r
[data-tng-theme="dark"][data-tng-accent="teal"],\r
[data-tng-theme="dark"] [data-tng-accent="teal"] {\r
  --ui-primary: #14b8a6;\r
  --ui-primary-hover: #0d9488;\r
  --ui-primary-active: #0f766e;\r
  --ui-primary-soft: rgba(20, 184, 166, 0.15);\r
  --ui-primary-soft-hover: rgba(20, 184, 166, 0.25);\r
  --ui-primary-text: #2dd4bf;\r
  --ui-ring: rgba(20, 184, 166, 0.4);\r
}\r
\r
/* ════════════════════════════════════════════\r
   BASE RESET\r
   ════════════════════════════════════════════ */\r
\r
.tng-root {\r
  font-family: var(--ui-font);\r
  color: var(--ui-text);\r
  background-color: var(--ui-bg);\r
  line-height: var(--ui-leading-normal);\r
  -webkit-font-smoothing: antialiased;\r
  -moz-osx-font-smoothing: grayscale;\r
}\r
\r
.tng-root *,\r
.tng-root *::before,\r
.tng-root *::after {\r
  box-sizing: border-box;\r
}\r
\r
`,Or=`.button {\r
  font-family: var(--ui-font);\r
  font-weight: 500;\r
  border-radius: var(--ui-radius-md);\r
  border: 1px solid transparent;\r
  cursor: pointer;\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  gap: var(--ui-space-2);\r
  white-space: nowrap;\r
  transition: background var(--ui-duration-fast) var(--ui-ease),\r
              color var(--ui-duration-fast) var(--ui-ease),\r
              border-color var(--ui-duration-fast) var(--ui-ease),\r
              box-shadow var(--ui-duration-fast) var(--ui-ease);\r
  position: relative;\r
  line-height: var(--ui-leading-tight);\r
}\r
\r
.button:focus-visible {\r
  outline: 2px solid var(--ui-primary);\r
  outline-offset: 2px;\r
}\r
\r
.button:disabled {\r
  opacity: 0.5;\r
  cursor: not-allowed;\r
  pointer-events: none;\r
}\r
\r
/* ── Sizes ── */\r
\r
.sm {\r
  font-size: var(--ui-font-sm);\r
  padding: var(--ui-space-1) var(--ui-space-3);\r
  border-radius: var(--ui-radius-sm);\r
  height: 32px;\r
}\r
\r
.md {\r
  font-size: var(--ui-font-sm);\r
  padding: var(--ui-space-2) var(--ui-space-4);\r
  height: 38px;\r
}\r
\r
.lg {\r
  font-size: var(--ui-font-md);\r
  padding: var(--ui-space-2-5) var(--ui-space-5);\r
  height: 44px;\r
}\r
\r
/* ── Icon-only ── */\r
\r
.iconOnly.sm { width: 32px; padding: 0; }\r
.iconOnly.md { width: 38px; padding: 0; }\r
.iconOnly.lg { width: 44px; padding: 0; }\r
\r
/* ── Variants ── */\r
\r
.solid {\r
  background: var(--ui-primary);\r
  color: var(--ui-on-primary);\r
}\r
\r
.solid:hover {\r
  background: var(--ui-primary-hover);\r
}\r
\r
.solid:active {\r
  background: var(--ui-primary-active);\r
}\r
\r
.soft {\r
  background: var(--ui-primary-soft);\r
  color: var(--ui-primary-text);\r
}\r
\r
.soft:hover {\r
  background: var(--ui-primary-soft-hover);\r
}\r
\r
.outline {\r
  background: transparent;\r
  color: var(--ui-text);\r
  border-color: var(--ui-border);\r
}\r
\r
.outline:hover {\r
  background: var(--ui-bg-muted);\r
  border-color: var(--ui-border-hover);\r
}\r
\r
.ghost {\r
  background: transparent;\r
  color: var(--ui-text);\r
}\r
\r
.ghost:hover {\r
  background: var(--ui-bg-muted);\r
}\r
\r
/* ── Loading state ── */\r
\r
.loading {\r
  position: relative;\r
}\r
\r
.hiddenContent {\r
  visibility: hidden;\r
}\r
\r
.spinner {\r
  position: absolute;\r
  width: 16px;\r
  height: 16px;\r
  border: 2px solid currentColor;\r
  border-right-color: transparent;\r
  border-radius: var(--ui-radius-full);\r
  animation: button-spin 0.6s linear infinite;\r
}\r
\r
@keyframes button-spin {\r
  to { transform: rotate(360deg); }\r
}\r
`,Ar=`.input {\r
  font-family: var(--ui-font);\r
  width: 100%;\r
  border: 1px solid var(--ui-input-border);\r
  border-radius: var(--ui-radius-md);\r
  background: var(--ui-input-bg);\r
  color: var(--ui-text);\r
  transition: border-color var(--ui-duration-fast) var(--ui-ease),\r
              box-shadow var(--ui-duration-fast) var(--ui-ease);\r
}\r
\r
.input::placeholder {\r
  color: var(--ui-text-subtle);\r
}\r
\r
.input:hover {\r
  border-color: var(--ui-border-hover);\r
}\r
\r
.input:focus {\r
  outline: none;\r
  border-color: var(--ui-primary);\r
  box-shadow: 0 0 0 3px var(--ui-ring);\r
}\r
\r
.input:disabled {\r
  opacity: 0.5;\r
  cursor: not-allowed;\r
}\r
\r
/* ── Sizes ── */\r
\r
.sm {\r
  font-size: var(--ui-font-sm);\r
  padding: var(--ui-space-1) var(--ui-space-2);\r
  height: 32px;\r
}\r
\r
.md {\r
  font-size: var(--ui-font-sm);\r
  padding: var(--ui-space-2) var(--ui-space-3);\r
  height: 38px;\r
}\r
\r
.lg {\r
  font-size: var(--ui-font-md);\r
  padding: var(--ui-space-2-5) var(--ui-space-3);\r
  height: 44px;\r
}\r
\r
/* ── Error ── */\r
\r
.error {\r
  border-color: var(--ui-danger);\r
}\r
\r
.error:focus {\r
  border-color: var(--ui-danger);\r
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.2);\r
}\r
`,Pr=`.textarea {\r
  font-family: var(--ui-font);\r
  width: 100%;\r
  border: 1px solid var(--ui-input-border);\r
  border-radius: var(--ui-radius-md);\r
  background: var(--ui-input-bg);\r
  color: var(--ui-text);\r
  min-height: 80px;\r
  transition: border-color var(--ui-duration-fast) var(--ui-ease),\r
              box-shadow var(--ui-duration-fast) var(--ui-ease);\r
}\r
\r
.textarea::placeholder {\r
  color: var(--ui-text-subtle);\r
}\r
\r
.textarea:hover {\r
  border-color: var(--ui-border-hover);\r
}\r
\r
.textarea:focus {\r
  outline: none;\r
  border-color: var(--ui-primary);\r
  box-shadow: 0 0 0 3px var(--ui-ring);\r
}\r
\r
.textarea:disabled {\r
  opacity: 0.5;\r
  cursor: not-allowed;\r
}\r
\r
/* ── Sizes ── */\r
\r
.sm {\r
  font-size: var(--ui-font-sm);\r
  padding: var(--ui-space-1-5) var(--ui-space-2);\r
}\r
\r
.md {\r
  font-size: var(--ui-font-sm);\r
  padding: var(--ui-space-2) var(--ui-space-3);\r
}\r
\r
.lg {\r
  font-size: var(--ui-font-md);\r
  padding: var(--ui-space-2-5) var(--ui-space-3);\r
}\r
\r
/* ── Error ── */\r
\r
.error {\r
  border-color: var(--ui-danger);\r
}\r
\r
.error:focus {\r
  border-color: var(--ui-danger);\r
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.2);\r
}\r
`,Dr=`.wrapper {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: var(--ui-space-2);\r
  cursor: pointer;\r
  user-select: none;\r
}\r
\r
.wrapper:has(.input:disabled) {\r
  opacity: 0.5;\r
  cursor: not-allowed;\r
}\r
\r
.input {\r
  position: absolute;\r
  width: 1px;\r
  height: 1px;\r
  overflow: hidden;\r
  clip: rect(0 0 0 0);\r
  white-space: nowrap;\r
}\r
\r
.control {\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  border: 2px solid var(--ui-input-border);\r
  border-radius: var(--ui-radius-sm);\r
  background: var(--ui-input-bg);\r
  color: transparent;\r
  transition: background var(--ui-duration-fast) var(--ui-ease),\r
              border-color var(--ui-duration-fast) var(--ui-ease),\r
              color var(--ui-duration-fast) var(--ui-ease);\r
  flex-shrink: 0;\r
}\r
\r
.input:hover + .control {\r
  border-color: var(--ui-border-hover);\r
}\r
\r
.input:focus-visible + .control {\r
  outline: 2px solid var(--ui-primary);\r
  outline-offset: 2px;\r
}\r
\r
.input:checked + .control {\r
  background: var(--ui-primary);\r
  border-color: var(--ui-primary);\r
  color: var(--ui-on-primary);\r
}\r
\r
.input:checked:hover + .control {\r
  background: var(--ui-primary-hover);\r
  border-color: var(--ui-primary-hover);\r
}\r
\r
.icon {\r
  display: block;\r
}\r
\r
.label {\r
  font-family: var(--ui-font);\r
  color: var(--ui-text);\r
}\r
\r
/* ── Sizes ── */\r
\r
.sm .control { width: 16px; height: 16px; }\r
.sm .icon { width: 10px; height: 10px; }\r
.sm .label { font-size: var(--ui-font-sm); }\r
\r
.md .control { width: 20px; height: 20px; }\r
.md .icon { width: 12px; height: 12px; }\r
.md .label { font-size: var(--ui-font-sm); }\r
\r
.lg .control { width: 24px; height: 24px; }\r
.lg .icon { width: 14px; height: 14px; }\r
.lg .label { font-size: var(--ui-font-md); }\r
`,Br=`.wrapper {\r
  display: inline-flex;\r
  align-items: center;\r
  gap: var(--ui-space-2);\r
  cursor: pointer;\r
  user-select: none;\r
}\r
\r
.wrapper:has(.input:disabled) {\r
  opacity: 0.5;\r
  cursor: not-allowed;\r
}\r
\r
.input {\r
  position: absolute;\r
  width: 1px;\r
  height: 1px;\r
  overflow: hidden;\r
  clip: rect(0 0 0 0);\r
  white-space: nowrap;\r
}\r
\r
.control {\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
  border: 2px solid var(--ui-input-border);\r
  border-radius: var(--ui-radius-full);\r
  background: var(--ui-input-bg);\r
  transition: background var(--ui-duration-fast) var(--ui-ease),\r
              border-color var(--ui-duration-fast) var(--ui-ease);\r
  flex-shrink: 0;\r
}\r
\r
.dot {\r
  border-radius: var(--ui-radius-full);\r
  background: transparent;\r
  transition: background var(--ui-duration-fast) var(--ui-ease),\r
              transform var(--ui-duration-fast) var(--ui-ease);\r
  transform: scale(0);\r
}\r
\r
.input:hover + .control {\r
  border-color: var(--ui-border-hover);\r
}\r
\r
.input:focus-visible + .control {\r
  outline: 2px solid var(--ui-primary);\r
  outline-offset: 2px;\r
}\r
\r
.input:checked + .control {\r
  border-color: var(--ui-primary);\r
}\r
\r
.input:checked + .control .dot {\r
  background: var(--ui-primary);\r
  transform: scale(1);\r
}\r
\r
.input:checked:hover + .control {\r
  border-color: var(--ui-primary-hover);\r
}\r
\r
.input:checked:hover + .control .dot {\r
  background: var(--ui-primary-hover);\r
}\r
\r
.label {\r
  font-family: var(--ui-font);\r
  color: var(--ui-text);\r
}\r
\r
/* ── Sizes ── */\r
\r
.sm .control { width: 16px; height: 16px; }\r
.sm .dot { width: 8px; height: 8px; }\r
.sm .label { font-size: var(--ui-font-sm); }\r
\r
.md .control { width: 20px; height: 20px; }\r
.md .dot { width: 10px; height: 10px; }\r
.md .label { font-size: var(--ui-font-sm); }\r
\r
.lg .control { width: 24px; height: 24px; }\r
.lg .dot { width: 12px; height: 12px; }\r
.lg .label { font-size: var(--ui-font-md); }\r
`,Lr=`.wrapper {\r
  position: relative;\r
  display: inline-block;\r
  width: 100%;\r
}\r
\r
.trigger {\r
  font-family: var(--ui-font);\r
  width: 100%;\r
  border: 1px solid var(--ui-input-border);\r
  border-radius: var(--ui-radius-md);\r
  background: var(--ui-input-bg);\r
  color: var(--ui-text);\r
  cursor: pointer;\r
  display: flex;\r
  align-items: center;\r
  justify-content: space-between;\r
  gap: var(--ui-space-2);\r
  text-align: left;\r
  transition: border-color var(--ui-duration-fast) var(--ui-ease),\r
              box-shadow var(--ui-duration-fast) var(--ui-ease);\r
}\r
\r
.trigger:hover {\r
  border-color: var(--ui-border-hover);\r
}\r
\r
.trigger:focus-visible {\r
  outline: none;\r
  border-color: var(--ui-primary);\r
  box-shadow: 0 0 0 3px var(--ui-ring);\r
}\r
\r
.trigger:disabled {\r
  opacity: 0.5;\r
  cursor: not-allowed;\r
}\r
\r
.open {\r
  border-color: var(--ui-primary);\r
  box-shadow: 0 0 0 3px var(--ui-ring);\r
}\r
\r
/* ── Sizes ── */\r
\r
.sm {\r
  font-size: var(--ui-font-sm);\r
  padding: var(--ui-space-1) var(--ui-space-2);\r
  height: 32px;\r
}\r
\r
.md {\r
  font-size: var(--ui-font-sm);\r
  padding: var(--ui-space-2) var(--ui-space-3);\r
  height: 38px;\r
}\r
\r
.lg {\r
  font-size: var(--ui-font-md);\r
  padding: var(--ui-space-2-5) var(--ui-space-3);\r
  height: 44px;\r
}\r
\r
/* ── Error ── */\r
\r
.error {\r
  border-color: var(--ui-danger);\r
}\r
\r
.error:focus-visible,\r
.error.open {\r
  border-color: var(--ui-danger);\r
  box-shadow: 0 0 0 3px rgba(220, 38, 38, 0.2);\r
}\r
\r
/* ── Content ── */\r
\r
.placeholder {\r
  color: var(--ui-text-subtle);\r
}\r
\r
.selectedText {\r
  overflow: hidden;\r
  text-overflow: ellipsis;\r
  white-space: nowrap;\r
}\r
\r
.chevron {\r
  flex-shrink: 0;\r
  color: var(--ui-text-muted);\r
  transition: transform var(--ui-duration-fast) var(--ui-ease);\r
}\r
\r
.open .chevron {\r
  transform: rotate(180deg);\r
}\r
\r
/* ── Menu ── */\r
\r
.menu {\r
  position: absolute;\r
  top: calc(100% + 4px);\r
  left: 0;\r
  right: 0;\r
  z-index: var(--ui-z-dropdown);\r
  background: var(--ui-bg-elevated);\r
  border: 1px solid var(--ui-border);\r
  border-radius: var(--ui-radius-md);\r
  box-shadow: var(--ui-shadow-lg);\r
  padding: var(--ui-space-1) 0;\r
  margin: 0;\r
  list-style: none;\r
  max-height: 240px;\r
  overflow-y: auto;\r
  animation: dropdown-enter var(--ui-duration-fast) var(--ui-ease);\r
}\r
\r
@keyframes dropdown-enter {\r
  from {\r
    opacity: 0;\r
    transform: translateY(-4px);\r
  }\r
  to {\r
    opacity: 1;\r
    transform: translateY(0);\r
  }\r
}\r
\r
.option {\r
  font-family: var(--ui-font);\r
  font-size: var(--ui-font-sm);\r
  padding: var(--ui-space-2) var(--ui-space-3);\r
  cursor: pointer;\r
  color: var(--ui-text);\r
  transition: background var(--ui-duration-fast) var(--ui-ease);\r
}\r
\r
.option:hover {\r
  background: var(--ui-bg-muted);\r
}\r
\r
.selected {\r
  color: var(--ui-primary-text);\r
  font-weight: 500;\r
}\r
\r
.optionDisabled {\r
  opacity: 0.5;\r
  cursor: not-allowed;\r
}\r
\r
.optionDisabled:hover {\r
  background: transparent;\r
}\r
`,Ir=`.wrapper {\r
  width: 100%;\r
  overflow-x: auto;\r
}\r
\r
.table {\r
  font-family: var(--ui-font);\r
  width: 100%;\r
  border-collapse: collapse;\r
  font-size: var(--ui-font-sm);\r
  color: var(--ui-text);\r
}\r
\r
.thead {\r
  border-bottom: 1px solid var(--ui-border);\r
}\r
\r
.th {\r
  text-align: left;\r
  font-weight: 600;\r
  padding: var(--ui-space-3) var(--ui-space-4);\r
  color: var(--ui-text-muted);\r
  font-size: var(--ui-font-xs);\r
  text-transform: uppercase;\r
  letter-spacing: 0.05em;\r
  white-space: nowrap;\r
}\r
\r
.td {\r
  padding: var(--ui-space-3) var(--ui-space-4);\r
}\r
\r
.tr {\r
  border-bottom: 1px solid var(--ui-border);\r
  transition: background var(--ui-duration-fast) var(--ui-ease);\r
}\r
\r
.tbody .tr:last-child {\r
  border-bottom: none;\r
}\r
\r
.tbody .tr:hover {\r
  background: var(--ui-bg-subtle);\r
}\r
\r
/* ── Striped variant ── */\r
\r
.striped .tbody .tr:nth-child(even) {\r
  background: var(--ui-bg-subtle);\r
}\r
\r
.striped .tbody .tr:nth-child(even):hover {\r
  background: var(--ui-bg-muted);\r
}\r
`,Mr=`.grid {\r
  display: grid;\r
}\r
\r
/* ── Gap ── */\r
.gap-sm { gap: var(--ui-space-2); }\r
.gap-md { gap: var(--ui-space-4); }\r
.gap-lg { gap: var(--ui-space-6); }\r
.gap-xl { gap: var(--ui-space-8); }\r
\r
/* ── Alignment ── */\r
.align-start { align-items: start; }\r
.align-center { align-items: center; }\r
.align-end { align-items: end; }\r
.align-stretch { align-items: stretch; }\r
`,Yr=`.overlay {\r
  position: fixed;\r
  inset: 0;\r
  z-index: var(--ui-z-modal);\r
  display: flex;\r
  align-items: center;\r
  justify-content: center;\r
  background: var(--ui-overlay);\r
  padding: var(--ui-space-4);\r
  animation: overlay-enter var(--ui-duration-normal) var(--ui-ease);\r
}\r
\r
@keyframes overlay-enter {\r
  from { opacity: 0; }\r
  to { opacity: 1; }\r
}\r
\r
.content {\r
  font-family: var(--ui-font);\r
  background: var(--ui-bg-elevated);\r
  border: 1px solid var(--ui-border);\r
  border-radius: var(--ui-radius-lg);\r
  box-shadow: var(--ui-shadow-xl);\r
  padding: var(--ui-space-6);\r
  width: 100%;\r
  max-width: 480px;\r
  max-height: calc(100vh - var(--ui-space-8));\r
  overflow-y: auto;\r
  color: var(--ui-text);\r
  animation: content-enter var(--ui-duration-normal) var(--ui-ease);\r
}\r
\r
@keyframes content-enter {\r
  from {\r
    opacity: 0;\r
    transform: scale(0.95) translateY(8px);\r
  }\r
  to {\r
    opacity: 1;\r
    transform: scale(1) translateY(0);\r
  }\r
}\r
\r
.title {\r
  font-size: var(--ui-font-lg);\r
  font-weight: 600;\r
  margin: 0 0 var(--ui-space-2) 0;\r
  color: var(--ui-text);\r
  line-height: var(--ui-leading-tight);\r
}\r
\r
.description {\r
  font-size: var(--ui-font-sm);\r
  color: var(--ui-text-muted);\r
  margin: 0 0 var(--ui-space-5) 0;\r
  line-height: var(--ui-leading-normal);\r
}\r
\r
.footer {\r
  display: flex;\r
  justify-content: flex-end;\r
  gap: var(--ui-space-2);\r
  margin-top: var(--ui-space-5);\r
}\r
`,Fr=`.spinner {\r
  display: inline-flex;\r
  align-items: center;\r
  justify-content: center;\r
}\r
\r
.svg {\r
  animation: spin 0.8s linear infinite;\r
}\r
\r
.track {\r
  opacity: 0.2;\r
}\r
\r
.arc {\r
  opacity: 1;\r
}\r
\r
/* ── Colors ── */\r
\r
.primary {\r
  color: var(--ui-primary);\r
}\r
\r
.current {\r
  color: currentColor;\r
}\r
\r
/* ── Sizes ── */\r
\r
.sm .svg { width: 16px; height: 16px; }\r
.md .svg { width: 24px; height: 24px; }\r
.lg .svg { width: 36px; height: 36px; }\r
\r
/* ── Screen reader only ── */\r
\r
.srOnly {\r
  position: absolute;\r
  width: 1px;\r
  height: 1px;\r
  overflow: hidden;\r
  clip: rect(0 0 0 0);\r
  white-space: nowrap;\r
  border: 0;\r
}\r
\r
@keyframes spin {\r
  to { transform: rotate(360deg); }\r
}\r
`,Wr=`/* ── Tab List ── */\r
\r
.list {\r
  display: flex;\r
  gap: var(--ui-space-1);\r
  font-family: var(--ui-font);\r
}\r
\r
.list-underline {\r
  border-bottom: 1px solid var(--ui-border);\r
  gap: 0;\r
}\r
\r
.list-pills {\r
  background: var(--ui-bg-muted);\r
  border-radius: var(--ui-radius-md);\r
  padding: var(--ui-space-1);\r
}\r
\r
/* ── Tab Trigger ── */\r
\r
.trigger {\r
  font-family: var(--ui-font);\r
  font-size: var(--ui-font-sm);\r
  font-weight: 500;\r
  cursor: pointer;\r
  border: none;\r
  background: transparent;\r
  color: var(--ui-text-muted);\r
  transition: color var(--ui-duration-fast) var(--ui-ease),\r
              background var(--ui-duration-fast) var(--ui-ease),\r
              box-shadow var(--ui-duration-fast) var(--ui-ease);\r
  white-space: nowrap;\r
}\r
\r
.trigger:hover {\r
  color: var(--ui-text);\r
}\r
\r
.trigger:focus-visible {\r
  outline: 2px solid var(--ui-primary);\r
  outline-offset: -2px;\r
  border-radius: var(--ui-radius-sm);\r
}\r
\r
/* ── Underline variant ── */\r
\r
.trigger-underline {\r
  padding: var(--ui-space-2) var(--ui-space-4);\r
  border-bottom: 2px solid transparent;\r
  margin-bottom: -1px;\r
}\r
\r
.trigger-underline.active {\r
  color: var(--ui-primary-text);\r
  border-bottom-color: var(--ui-primary);\r
}\r
\r
/* ── Pills variant ── */\r
\r
.trigger-pills {\r
  padding: var(--ui-space-1-5) var(--ui-space-3);\r
  border-radius: var(--ui-radius-sm);\r
}\r
\r
.trigger-pills.active {\r
  background: var(--ui-bg-elevated);\r
  color: var(--ui-text);\r
  box-shadow: var(--ui-shadow-xs);\r
}\r
\r
/* ── Tab Content ── */\r
\r
.content {\r
  padding: var(--ui-space-4) 0;\r
  font-family: var(--ui-font);\r
  color: var(--ui-text);\r
  font-size: var(--ui-font-sm);\r
  animation: tab-enter var(--ui-duration-fast) var(--ui-ease);\r
}\r
\r
@keyframes tab-enter {\r
  from { opacity: 0; }\r
  to { opacity: 1; }\r
}\r
`,Gr=`.wrapper {\r
  position: relative;\r
  display: inline-flex;\r
}\r
\r
.tooltip {\r
  font-family: var(--ui-font);\r
  font-size: var(--ui-font-xs);\r
  line-height: var(--ui-leading-tight);\r
  position: absolute;\r
  z-index: var(--ui-z-tooltip);\r
  background: var(--ui-text);\r
  color: var(--ui-bg);\r
  padding: var(--ui-space-1-5) var(--ui-space-2-5);\r
  border-radius: var(--ui-radius-sm);\r
  white-space: nowrap;\r
  pointer-events: none;\r
  animation: tooltip-enter var(--ui-duration-fast) var(--ui-ease);\r
}\r
\r
@keyframes tooltip-enter {\r
  from {\r
    opacity: 0;\r
    transform: scale(0.96);\r
  }\r
  to {\r
    opacity: 1;\r
    transform: scale(1);\r
  }\r
}\r
\r
.arrow {\r
  position: absolute;\r
  width: 8px;\r
  height: 8px;\r
  background: var(--ui-text);\r
  transform: rotate(45deg);\r
}\r
\r
/* ── Sides ── */\r
\r
.top {\r
  bottom: calc(100% + 8px);\r
  left: 50%;\r
  transform: translateX(-50%);\r
}\r
\r
.top .arrow {\r
  bottom: -4px;\r
  left: 50%;\r
  margin-left: -4px;\r
}\r
\r
.bottom {\r
  top: calc(100% + 8px);\r
  left: 50%;\r
  transform: translateX(-50%);\r
}\r
\r
.bottom .arrow {\r
  top: -4px;\r
  left: 50%;\r
  margin-left: -4px;\r
}\r
\r
.left {\r
  right: calc(100% + 8px);\r
  top: 50%;\r
  transform: translateY(-50%);\r
}\r
\r
.left .arrow {\r
  right: -4px;\r
  top: 50%;\r
  margin-top: -4px;\r
}\r
\r
.right {\r
  left: calc(100% + 8px);\r
  top: 50%;\r
  transform: translateY(-50%);\r
}\r
\r
.right .arrow {\r
  left: -4px;\r
  top: 50%;\r
  margin-top: -4px;\r
}\r
`;var L={exports:{}},O={};var ir;function Ur(){if(ir)return O;ir=1;var n=Symbol.for("react.transitional.element"),e=Symbol.for("react.fragment");function t(o,i,u){var c=null;if(u!==void 0&&(c=""+u),i.key!==void 0&&(c=""+i.key),"key"in i){u={};for(var d in i)d!=="key"&&(u[d]=i[d])}else u=i;return i=u.ref,{$$typeof:n,type:o,key:c,ref:i!==void 0?i:null,props:u}}return O.Fragment=e,O.jsx=t,O.jsxs=t,O}var A={};var sr;function Hr(){return sr||(sr=1,process.env.NODE_ENV!=="production"&&(function(){function n(r){if(r==null)return null;if(typeof r=="function")return r.$$typeof===Nr?null:r.displayName||r.name||null;if(typeof r=="string")return r;switch(r){case j:return"Fragment";case $:return"Profiler";case R:return"StrictMode";case f:return"Suspense";case G:return"SuspenseList";case Rr:return"Activity"}if(typeof r=="object")switch(typeof r.tag=="number"&&console.error("Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."),r.$$typeof){case M:return"Portal";case F:return r.displayName||"Context";case Y:return(r._context.displayName||"Context")+".Consumer";case W:var s=r.render;return r=r.displayName,r||(r=s.displayName||s.name||"",r=r!==""?"ForwardRef("+r+")":"ForwardRef"),r;case Er:return s=r.displayName||null,s!==null?s:n(r.type)||"Memo";case U:s=r._payload,r=r._init;try{return n(r(s))}catch{}}return null}function e(r){return""+r}function t(r){try{e(r);var s=!1}catch{s=!0}if(s){s=console;var p=s.error,m=typeof Symbol=="function"&&Symbol.toStringTag&&r[Symbol.toStringTag]||r.constructor.name||"Object";return p.call(s,"The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",m),e(r)}}function o(r){if(r===j)return"<>";if(typeof r=="object"&&r!==null&&r.$$typeof===U)return"<...>";try{var s=n(r);return s?"<"+s+">":"<...>"}catch{return"<...>"}}function i(){var r=H.A;return r===null?null:r.getOwner()}function u(){return Error("react-stack-top-frame")}function c(r){if(rr.call(r,"key")){var s=Object.getOwnPropertyDescriptor(r,"key").get;if(s&&s.isReactWarning)return!1}return r.key!==void 0}function d(r,s){function p(){nr||(nr=!0,console.error("%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",s))}p.isReactWarning=!0,Object.defineProperty(r,"key",{get:p,configurable:!0})}function v(){var r=n(this.type);return er[r]||(er[r]=!0,console.error("Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release.")),r=this.props.ref,r!==void 0?r:null}function b(r,s,p,m,B,J){var g=p.ref;return r={$$typeof:D,type:r,key:s,props:p,_owner:m},(g!==void 0?g:null)!==null?Object.defineProperty(r,"ref",{enumerable:!1,get:v}):Object.defineProperty(r,"ref",{enumerable:!1,value:null}),r._store={},Object.defineProperty(r._store,"validated",{configurable:!1,enumerable:!1,writable:!0,value:0}),Object.defineProperty(r,"_debugInfo",{configurable:!1,enumerable:!1,writable:!0,value:null}),Object.defineProperty(r,"_debugStack",{configurable:!1,enumerable:!1,writable:!0,value:B}),Object.defineProperty(r,"_debugTask",{configurable:!1,enumerable:!1,writable:!0,value:J}),Object.freeze&&(Object.freeze(r.props),Object.freeze(r)),r}function w(r,s,p,m,B,J){var g=s.children;if(g!==void 0)if(m)if(Sr(g)){for(m=0;m<g.length;m++)y(g[m]);Object.freeze&&Object.freeze(g)}else console.error("React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead.");else y(g);if(rr.call(s,"key")){g=n(r);var N=Object.keys(s).filter(function(zr){return zr!=="key"});m=0<N.length?"{key: someKey, "+N.join(": ..., ")+": ...}":"{key: someKey}",or[g+m]||(N=0<N.length?"{"+N.join(": ..., ")+": ...}":"{}",console.error(`A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,m,g,N,g),or[g+m]=!0)}if(g=null,p!==void 0&&(t(p),g=""+p),c(s)&&(t(s.key),g=""+s.key),"key"in s){p={};for(var V in s)V!=="key"&&(p[V]=s[V])}else p=s;return g&&d(p,typeof r=="function"?r.displayName||r.name||"Unknown":r),b(r,g,p,i(),B,J)}function y(r){h(r)?r._store&&(r._store.validated=1):typeof r=="object"&&r!==null&&r.$$typeof===U&&(r._payload.status==="fulfilled"?h(r._payload.value)&&r._payload.value._store&&(r._payload.value._store.validated=1):r._store&&(r._store.validated=1))}function h(r){return typeof r=="object"&&r!==null&&r.$$typeof===D}var _=lr,D=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),j=Symbol.for("react.fragment"),R=Symbol.for("react.strict_mode"),$=Symbol.for("react.profiler"),Y=Symbol.for("react.consumer"),F=Symbol.for("react.context"),W=Symbol.for("react.forward_ref"),f=Symbol.for("react.suspense"),G=Symbol.for("react.suspense_list"),Er=Symbol.for("react.memo"),U=Symbol.for("react.lazy"),Rr=Symbol.for("react.activity"),Nr=Symbol.for("react.client.reference"),H=_.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,rr=Object.prototype.hasOwnProperty,Sr=Array.isArray,q=console.createTask?console.createTask:function(){return null};_={react_stack_bottom_frame:function(r){return r()}};var nr,er={},tr=_.react_stack_bottom_frame.bind(_,u)(),ar=q(o(u)),or={};A.Fragment=j,A.jsx=function(r,s,p){var m=1e4>H.recentlyCreatedOwnerStacks++;return w(r,s,p,!1,m?Error("react-stack-top-frame"):tr,m?q(o(r)):ar)},A.jsxs=function(r,s,p){var m=1e4>H.recentlyCreatedOwnerStacks++;return w(r,s,p,!0,m?Error("react-stack-top-frame"):tr,m?q(o(r)):ar)}})()),A}var ur;function qr(){return ur||(ur=1,process.env.NODE_ENV==="production"?L.exports=Ur():L.exports=Hr()),L.exports}var a=qr();const cr=l.createContext(void 0);function Jr(){return typeof window>"u"?"light":window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"}function Vr({children:n,defaultTheme:e="system",defaultAccent:t="blue"}){const[o,i]=l.useState(e),[u,c]=l.useState(t),[d,v]=l.useState(Jr);l.useEffect(()=>{const y=window.matchMedia("(prefers-color-scheme: dark)"),h=_=>v(_.matches?"dark":"light");return y.addEventListener("change",h),()=>y.removeEventListener("change",h)},[]);const b=o==="system"?d:o,w=l.useMemo(()=>({theme:o,resolvedTheme:b,accentColor:u,setTheme:i,setAccentColor:c}),[o,b,u]);return a.jsx(cr.Provider,{value:w,children:a.jsx("div",{className:"tng-root","data-tng-theme":b,"data-tng-accent":u,children:n})})}function Xr(){const n=l.useContext(cr);if(!n)throw new Error("useTheme must be used within a <ThemeProvider>");return n}const Zr="_button_1e7rg_1",Kr="_sm_1e7rg_65",Qr="_md_1e7rg_79",rn="_lg_1e7rg_91",nn="_iconOnly_1e7rg_107",en="_solid_1e7rg_119",tn="_soft_1e7rg_145",an="_outline_1e7rg_163",on="_ghost_1e7rg_185",sn="_loading_1e7rg_207",un="_hiddenContent_1e7rg_215",ln="_spinner_1e7rg_223",T={button:Zr,sm:Kr,md:Qr,lg:rn,iconOnly:nn,solid:en,soft:tn,outline:an,ghost:on,loading:sn,hiddenContent:un,spinner:ln,"button-spin":"_button-spin_1e7rg_1"},dr=l.forwardRef(({variant:n="solid",size:e="md",loading:t,iconOnly:o,className:i,disabled:u,children:c,...d},v)=>{const b=[T.button,T[n],T[e],o&&T.iconOnly,t&&T.loading,i].filter(Boolean).join(" ");return a.jsxs("button",{ref:v,className:b,disabled:u||t,...d,children:[t&&a.jsx("span",{className:T.spinner,"aria-hidden":"true"}),a.jsx("span",{className:t?T.hiddenContent:void 0,children:c})]})});dr.displayName="Button";const cn="_input_10fr1_1",dn="_sm_10fr1_65",pn="_md_10fr1_77",fn="_lg_10fr1_89",mn="_error_10fr1_105",X={input:cn,sm:dn,md:pn,lg:fn,error:mn},pr=l.forwardRef(({inputSize:n="md",error:e,className:t,...o},i)=>{const u=[X.input,X[n],e&&X.error,t].filter(Boolean).join(" ");return a.jsx("input",{ref:i,className:u,...o})});pr.displayName="Input";const gn="_textarea_12wr4_1",vn="_sm_12wr4_67",bn="_md_12wr4_77",hn="_lg_12wr4_87",xn="_error_12wr4_101",Z={textarea:gn,sm:vn,md:bn,lg:hn,error:xn},fr=l.forwardRef(({textAreaSize:n="md",error:e,resize:t="vertical",className:o,style:i,...u},c)=>{const d=[Z.textarea,Z[n],e&&Z.error,o].filter(Boolean).join(" ");return a.jsx("textarea",{ref:c,className:d,style:{...i,resize:t},...u})});fr.displayName="TextArea";const _n="_wrapper_14lpt_1",yn="_input_14lpt_17",wn="_control_14lpt_45",kn="_icon_14lpt_113",jn="_label_14lpt_121",Tn="_sm_14lpt_135",En="_md_14lpt_143",Rn="_lg_14lpt_151",S={wrapper:_n,input:yn,control:wn,icon:kn,label:jn,sm:Tn,md:En,lg:Rn},mr=l.forwardRef(({label:n,checkboxSize:e="md",className:t,id:o,...i},u)=>{const c=l.useId(),d=o??c;return a.jsxs("label",{className:[S.wrapper,S[e],t].filter(Boolean).join(" "),htmlFor:d,children:[a.jsx("input",{ref:u,type:"checkbox",id:d,className:S.input,...i}),a.jsx("span",{className:S.control,"aria-hidden":"true",children:a.jsx("svg",{className:S.icon,viewBox:"0 0 12 12",fill:"none",children:a.jsx("path",{d:"M2.5 6L5 8.5L9.5 3.5",stroke:"currentColor",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})})}),n&&a.jsx("span",{className:S.label,children:n})]})});mr.displayName="Checkbox";const Nn="_wrapper_vmnzi_1",Sn="_input_vmnzi_17",zn="_control_vmnzi_45",Cn="_dot_vmnzi_69",$n="_label_vmnzi_137",On="_sm_vmnzi_151",An="_md_vmnzi_159",Pn="_lg_vmnzi_167",z={wrapper:Nn,input:Sn,control:zn,dot:Cn,label:$n,sm:On,md:An,lg:Pn},gr=l.forwardRef(({label:n,radioSize:e="md",className:t,id:o,...i},u)=>{const c=l.useId(),d=o??c;return a.jsxs("label",{className:[z.wrapper,z[e],t].filter(Boolean).join(" "),htmlFor:d,children:[a.jsx("input",{ref:u,type:"radio",id:d,className:z.input,...i}),a.jsx("span",{className:z.control,"aria-hidden":"true",children:a.jsx("span",{className:z.dot})}),n&&a.jsx("span",{className:z.label,children:n})]})});gr.displayName="Radio";const Dn="_wrapper_8zjjd_1",Bn="_trigger_8zjjd_13",Ln="_open_8zjjd_77",In="_sm_8zjjd_91",Mn="_md_8zjjd_103",Yn="_lg_8zjjd_115",Fn="_error_8zjjd_131",Wn="_placeholder_8zjjd_155",Gn="_selectedText_8zjjd_163",Un="_chevron_8zjjd_175",Hn="_menu_8zjjd_199",qn="_option_8zjjd_257",Jn="_selected_8zjjd_163",Vn="_optionDisabled_8zjjd_293",x={wrapper:Dn,trigger:Bn,open:Ln,sm:In,md:Mn,lg:Yn,error:Fn,placeholder:Wn,selectedText:Gn,chevron:Un,menu:Hn,"dropdown-enter":"_dropdown-enter_8zjjd_1",option:qn,selected:Jn,optionDisabled:Vn},vr=l.forwardRef(({options:n,value:e,defaultValue:t,onChange:o,placeholder:i="Select...",disabled:u,error:c,dropdownSize:d="md",className:v,id:b,name:w},y)=>{const[h,_]=l.useState(!1),[D,M]=l.useState(t??""),j=l.useRef(null),R=e!==void 0?e:D,$=n.find(f=>f.value===R),Y=f=>{e===void 0&&M(f),o?.(f),_(!1)};l.useEffect(()=>{if(!h)return;const f=G=>{j.current&&!j.current.contains(G.target)&&_(!1)};return document.addEventListener("mousedown",f),()=>document.removeEventListener("mousedown",f)},[h]);const F=f=>{f.key==="Escape"&&_(!1)},W=[x.trigger,x[d],c&&x.error,h&&x.open,v].filter(Boolean).join(" ");return a.jsxs("div",{ref:j,className:x.wrapper,onKeyDown:F,children:[w&&a.jsx("input",{type:"hidden",name:w,value:R}),a.jsxs("button",{ref:y,type:"button",id:b,className:W,disabled:u,"aria-haspopup":"listbox","aria-expanded":h,onClick:()=>_(!h),children:[a.jsx("span",{className:$?x.selectedText:x.placeholder,children:$?$.label:i}),a.jsx("svg",{className:x.chevron,width:"16",height:"16",viewBox:"0 0 16 16",fill:"none","aria-hidden":"true",children:a.jsx("path",{d:"M4 6L8 10L12 6",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"})})]}),h&&a.jsx("ul",{className:x.menu,role:"listbox",children:n.map(f=>a.jsx("li",{role:"option","aria-selected":f.value===R,"aria-disabled":f.disabled,className:[x.option,f.value===R&&x.selected,f.disabled&&x.optionDisabled].filter(Boolean).join(" "),onClick:()=>!f.disabled&&Y(f.value),children:f.label},f.value))})]})});vr.displayName="Dropdown";const Xn="_wrapper_1mb9n_1",Zn="_table_1mb9n_11",Kn="_thead_1mb9n_27",Qn="_th_1mb9n_27",re="_td_1mb9n_57",ne="_tr_1mb9n_65",ee="_tbody_1mb9n_75",te="_striped_1mb9n_95",k={wrapper:Xn,table:Zn,thead:Kn,th:Qn,td:re,tr:ne,tbody:ee,striped:te},br=l.forwardRef(({variant:n="default",className:e,...t},o)=>{const i=[k.table,k[n],e].filter(Boolean).join(" ");return a.jsx("div",{className:k.wrapper,children:a.jsx("table",{ref:o,className:i,...t})})});br.displayName="Table";const hr=l.forwardRef(({className:n,...e},t)=>a.jsx("thead",{ref:t,className:[k.thead,n].filter(Boolean).join(" "),...e}));hr.displayName="TableHead";const xr=l.forwardRef(({className:n,...e},t)=>a.jsx("tbody",{ref:t,className:[k.tbody,n].filter(Boolean).join(" "),...e}));xr.displayName="TableBody";const _r=l.forwardRef(({className:n,...e},t)=>a.jsx("tr",{ref:t,className:[k.tr,n].filter(Boolean).join(" "),...e}));_r.displayName="TableRow";const yr=l.forwardRef(({className:n,...e},t)=>a.jsx("th",{ref:t,className:[k.th,n].filter(Boolean).join(" "),...e}));yr.displayName="TableHeaderCell";const wr=l.forwardRef(({className:n,...e},t)=>a.jsx("td",{ref:t,className:[k.td,n].filter(Boolean).join(" "),...e}));wr.displayName="TableCell";const ae="_grid_ynklb_1",K={grid:ae,"gap-sm":"_gap-sm_ynklb_11","gap-md":"_gap-md_ynklb_13","gap-lg":"_gap-lg_ynklb_15","gap-xl":"_gap-xl_ynklb_17","align-start":"_align-start_ynklb_23","align-center":"_align-center_ynklb_25","align-end":"_align-end_ynklb_27","align-stretch":"_align-stretch_ynklb_29"},kr=l.forwardRef(({columns:n=3,minChildWidth:e="200px",gap:t="md",align:o,className:i,style:u,...c},d)=>{const v=[K.grid,t!=="none"&&K[`gap-${t}`],o&&K[`align-${o}`],i].filter(Boolean).join(" "),b=typeof n=="number"?`repeat(${n}, minmax(0, 1fr))`:`repeat(${n}, minmax(${e}, 1fr))`;return a.jsx("div",{ref:d,className:v,style:{...u,gridTemplateColumns:b},...c})});kr.displayName="Grid";const oe="_overlay_a64ab_1",ie="_content_a64ab_35",se="_title_a64ab_87",ue="_description_a64ab_103",le="_footer_a64ab_117",P={overlay:oe,content:ie,title:se,description:ue,footer:le};function ce({open:n,onOpenChange:e,children:t}){return l.useEffect(()=>{if(!n)return;const o=i=>{i.key==="Escape"&&e(!1)};return document.addEventListener("keydown",o),()=>document.removeEventListener("keydown",o)},[n,e]),l.useEffect(()=>{if(!n)return;const o=document.body.style.overflow;return document.body.style.overflow="hidden",()=>{document.body.style.overflow=o}},[n]),n?a.jsx("div",{className:P.overlay,onClick:()=>e(!1),children:a.jsx("div",{className:P.content,role:"dialog","aria-modal":"true",onClick:o=>o.stopPropagation(),children:t})}):null}function de({className:n,...e}){return a.jsx("h2",{className:[P.title,n].filter(Boolean).join(" "),...e})}function pe({className:n,...e}){return a.jsx("p",{className:[P.description,n].filter(Boolean).join(" "),...e})}function fe({className:n,...e}){return a.jsx("div",{className:[P.footer,n].filter(Boolean).join(" "),...e})}const me="_spinner_5poan_1",ge="_svg_5poan_13",ve="_spin_5poan_1",be="_track_5poan_21",he="_arc_5poan_29",xe="_primary_5poan_41",_e="_current_5poan_49",ye="_sm_5poan_61",we="_md_5poan_63",ke="_lg_5poan_65",je="_srOnly_5poan_73",E={spinner:me,svg:ge,spin:ve,track:be,arc:he,primary:xe,current:_e,sm:ye,md:we,lg:ke,srOnly:je},jr=l.forwardRef(({size:n="md",color:e="primary",label:t="Loading",className:o,...i},u)=>{const c=[E.spinner,E[n],E[e],o].filter(Boolean).join(" ");return a.jsxs("span",{ref:u,role:"status",className:c,...i,children:[a.jsxs("svg",{className:E.svg,viewBox:"0 0 24 24",fill:"none","aria-hidden":"true",children:[a.jsx("circle",{className:E.track,cx:"12",cy:"12",r:"10",stroke:"currentColor",strokeWidth:"3"}),a.jsx("path",{className:E.arc,d:"M12 2a10 10 0 019.8 8",stroke:"currentColor",strokeWidth:"3",strokeLinecap:"round"})]}),a.jsx("span",{className:E.srOnly,children:t})]})});jr.displayName="Spinner";const Te="_list_1vyvc_5",Ee="_trigger_1vyvc_43",Re="_active_1vyvc_107",Ne="_content_1vyvc_147",C={list:Te,"list-underline":"_list-underline_1vyvc_17","list-pills":"_list-pills_1vyvc_27",trigger:Ee,"trigger-underline":"_trigger-underline_1vyvc_95",active:Re,"trigger-pills":"_trigger-pills_1vyvc_121",content:Ne,"tab-enter":"_tab-enter_1vyvc_1"},Tr=l.createContext(void 0);function Q(){const n=l.useContext(Tr);if(!n)throw new Error("Tabs compound components must be used within <Tabs>");return n}function Se({value:n,defaultValue:e="",onValueChange:t,variant:o="underline",children:i,className:u}){const[c,d]=l.useState(e),v=n!==void 0?n:c,b=l.useCallback(y=>{n===void 0&&d(y),t?.(y)},[n,t]),w=l.useMemo(()=>({value:v,onSelect:b,variant:o}),[v,b,o]);return a.jsx(Tr.Provider,{value:w,children:a.jsx("div",{className:u,children:i})})}function ze({className:n,...e}){const{variant:t}=Q(),o=[C.list,C[`list-${t}`],n].filter(Boolean).join(" ");return a.jsx("div",{role:"tablist",className:o,...e})}function Ce({value:n,className:e,...t}){const{value:o,onSelect:i,variant:u}=Q(),c=n===o,d=[C.trigger,C[`trigger-${u}`],c&&C.active,e].filter(Boolean).join(" ");return a.jsx("button",{role:"tab",type:"button","aria-selected":c,className:d,onClick:()=>i(n),...t})}function $e({value:n,className:e,...t}){const{value:o}=Q();return n!==o?null:a.jsx("div",{role:"tabpanel",className:[C.content,e].filter(Boolean).join(" "),...t})}const Oe="_wrapper_16rn9_1",Ae="_tooltip_16rn9_11",Pe="_arrow_16rn9_63",De="_top_16rn9_83",Be="_bottom_16rn9_107",Le="_left_16rn9_131",Ie="_right_16rn9_155",I={wrapper:Oe,tooltip:Ae,"tooltip-enter":"_tooltip-enter_16rn9_1",arrow:Pe,top:De,bottom:Be,left:Le,right:Ie};function Me({content:n,side:e="top",delayMs:t=200,children:o}){const[i,u]=l.useState(!1),c=l.useRef(void 0),d=()=>{clearTimeout(c.current),c.current=setTimeout(()=>u(!0),t)},v=()=>{clearTimeout(c.current),u(!1)};return l.useEffect(()=>()=>clearTimeout(c.current),[]),a.jsxs("span",{className:I.wrapper,onMouseEnter:d,onMouseLeave:v,onFocus:d,onBlur:v,children:[o,i&&a.jsxs("span",{role:"tooltip",className:[I.tooltip,I[e]].join(" "),children:[n,a.jsx("span",{className:I.arrow})]})]})}if(typeof document<"u"){const n=e=>{const t=document.createElement("style");t.textContent=e,document.head.appendChild(t)};n($r),n(Or),n(Ar),n(Pr),n(Dr),n(Br),n(Lr),n(Ir),n(Mr),n(Yr),n(Fr),n(Wr),n(Gr)}exports.Button=dr;exports.Checkbox=mr;exports.Dialog=ce;exports.DialogDescription=pe;exports.DialogFooter=fe;exports.DialogTitle=de;exports.Dropdown=vr;exports.Grid=kr;exports.Input=pr;exports.Radio=gr;exports.Spinner=jr;exports.TabContent=$e;exports.TabList=ze;exports.TabTrigger=Ce;exports.Table=br;exports.TableBody=xr;exports.TableCell=wr;exports.TableHead=hr;exports.TableHeaderCell=yr;exports.TableRow=_r;exports.Tabs=Se;exports.TextArea=fr;exports.ThemeProvider=Vr;exports.Tooltip=Me;exports.useTheme=Xr;
