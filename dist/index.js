import * as i from "react";
import be from "react";
var D = { exports: {} }, A = {};
var ae;
function ve() {
  if (ae) return A;
  ae = 1;
  var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function n(s, a, c) {
    var _ = null;
    if (c !== void 0 && (_ = "" + c), a.key !== void 0 && (_ = "" + a.key), "key" in a) {
      c = {};
      for (var d in a)
        d !== "key" && (c[d] = a[d]);
    } else c = a;
    return a = c.ref, {
      $$typeof: t,
      type: s,
      key: _,
      ref: a !== void 0 ? a : null,
      props: c
    };
  }
  return A.Fragment = r, A.jsx = n, A.jsxs = n, A;
}
var P = {};
var le;
function ge() {
  return le || (le = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === me ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case T:
          return "Fragment";
        case O:
          return "Profiler";
        case k:
          return "StrictMode";
        case m:
          return "Suspense";
        case U:
          return "SuspenseList";
        case ue:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case M:
            return "Portal";
          case F:
            return e.displayName || "Context";
          case Y:
            return (e._context.displayName || "Context") + ".Consumer";
          case W:
            var l = e.render;
            return e = e.displayName, e || (e = l.displayName || l.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case de:
            return l = e.displayName || null, l !== null ? l : t(e.type) || "Memo";
          case q:
            l = e._payload, e = e._init;
            try {
              return t(e(l));
            } catch {
            }
        }
      return null;
    }
    function r(e) {
      return "" + e;
    }
    function n(e) {
      try {
        r(e);
        var l = !1;
      } catch {
        l = !0;
      }
      if (l) {
        l = console;
        var u = l.error, f = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return u.call(
          l,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          f
        ), r(e);
      }
    }
    function s(e) {
      if (e === T) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === q)
        return "<...>";
      try {
        var l = t(e);
        return l ? "<" + l + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function a() {
      var e = G.A;
      return e === null ? null : e.getOwner();
    }
    function c() {
      return Error("react-stack-top-frame");
    }
    function _(e) {
      if (ee.call(e, "key")) {
        var l = Object.getOwnPropertyDescriptor(e, "key").get;
        if (l && l.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function d(e, l) {
      function u() {
        te || (te = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          l
        ));
      }
      u.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: u,
        configurable: !0
      });
    }
    function b() {
      var e = t(this.type);
      return re[e] || (re[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function v(e, l, u, f, L, H) {
      var p = u.ref;
      return e = {
        $$typeof: z,
        type: e,
        key: l,
        props: u,
        _owner: f
      }, (p !== void 0 ? p : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: b
      }) : Object.defineProperty(e, "ref", { enumerable: !1, value: null }), e._store = {}, Object.defineProperty(e._store, "validated", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: 0
      }), Object.defineProperty(e, "_debugInfo", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: null
      }), Object.defineProperty(e, "_debugStack", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: L
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: H
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function x(e, l, u, f, L, H) {
      var p = l.children;
      if (p !== void 0)
        if (f)
          if (fe(p)) {
            for (f = 0; f < p.length; f++)
              y(p[f]);
            Object.freeze && Object.freeze(p);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else y(p);
      if (ee.call(l, "key")) {
        p = t(e);
        var N = Object.keys(l).filter(function(pe) {
          return pe !== "key";
        });
        f = 0 < N.length ? "{key: someKey, " + N.join(": ..., ") + ": ...}" : "{key: someKey}", se[p + f] || (N = 0 < N.length ? "{" + N.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          f,
          p,
          N,
          p
        ), se[p + f] = !0);
      }
      if (p = null, u !== void 0 && (n(u), p = "" + u), _(l) && (n(l.key), p = "" + l.key), "key" in l) {
        u = {};
        for (var V in l)
          V !== "key" && (u[V] = l[V]);
      } else u = l;
      return p && d(
        u,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), v(
        e,
        p,
        u,
        a(),
        L,
        H
      );
    }
    function y(e) {
      g(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === q && (e._payload.status === "fulfilled" ? g(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function g(e) {
      return typeof e == "object" && e !== null && e.$$typeof === z;
    }
    var j = be, z = /* @__PURE__ */ Symbol.for("react.transitional.element"), M = /* @__PURE__ */ Symbol.for("react.portal"), T = /* @__PURE__ */ Symbol.for("react.fragment"), k = /* @__PURE__ */ Symbol.for("react.strict_mode"), O = /* @__PURE__ */ Symbol.for("react.profiler"), Y = /* @__PURE__ */ Symbol.for("react.consumer"), F = /* @__PURE__ */ Symbol.for("react.context"), W = /* @__PURE__ */ Symbol.for("react.forward_ref"), m = /* @__PURE__ */ Symbol.for("react.suspense"), U = /* @__PURE__ */ Symbol.for("react.suspense_list"), de = /* @__PURE__ */ Symbol.for("react.memo"), q = /* @__PURE__ */ Symbol.for("react.lazy"), ue = /* @__PURE__ */ Symbol.for("react.activity"), me = /* @__PURE__ */ Symbol.for("react.client.reference"), G = j.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ee = Object.prototype.hasOwnProperty, fe = Array.isArray, J = console.createTask ? console.createTask : function() {
      return null;
    };
    j = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var te, re = {}, ne = j.react_stack_bottom_frame.bind(
      j,
      c
    )(), oe = J(s(c)), se = {};
    P.Fragment = T, P.jsx = function(e, l, u) {
      var f = 1e4 > G.recentlyCreatedOwnerStacks++;
      return x(
        e,
        l,
        u,
        !1,
        f ? Error("react-stack-top-frame") : ne,
        f ? J(s(e)) : oe
      );
    }, P.jsxs = function(e, l, u) {
      var f = 1e4 > G.recentlyCreatedOwnerStacks++;
      return x(
        e,
        l,
        u,
        !0,
        f ? Error("react-stack-top-frame") : ne,
        f ? J(s(e)) : oe
      );
    };
  })()), P;
}
var ce;
function he() {
  return ce || (ce = 1, process.env.NODE_ENV === "production" ? D.exports = ve() : D.exports = ge()), D.exports;
}
var o = he();
const ie = i.createContext(void 0);
function je() {
  return typeof window > "u" ? "light" : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function br({
  children: t,
  defaultTheme: r = "system",
  defaultAccent: n = "blue"
}) {
  const [s, a] = i.useState(r), [c, _] = i.useState(n), [d, b] = i.useState(je);
  i.useEffect(() => {
    const y = window.matchMedia("(prefers-color-scheme: dark)"), g = (j) => b(j.matches ? "dark" : "light");
    return y.addEventListener("change", g), () => y.removeEventListener("change", g);
  }, []);
  const v = s === "system" ? d : s, x = i.useMemo(
    () => ({ theme: s, resolvedTheme: v, accentColor: c, setTheme: a, setAccentColor: _ }),
    [s, v, c]
  );
  return /* @__PURE__ */ o.jsx(ie.Provider, { value: x, children: /* @__PURE__ */ o.jsx(
    "div",
    {
      className: "tng-root",
      "data-tng-theme": v,
      "data-tng-accent": c,
      children: t
    }
  ) });
}
function vr() {
  const t = i.useContext(ie);
  if (!t) throw new Error("useTheme must be used within a <ThemeProvider>");
  return t;
}
const ye = "_button_1e7rg_1", xe = "_sm_1e7rg_65", we = "_md_1e7rg_79", Te = "_lg_1e7rg_91", Ee = "_iconOnly_1e7rg_107", Re = "_solid_1e7rg_119", ke = "_soft_1e7rg_145", Ne = "_outline_1e7rg_163", $e = "_ghost_1e7rg_185", Se = "_loading_1e7rg_207", Ce = "_hiddenContent_1e7rg_215", Oe = "_spinner_1e7rg_223", E = {
  button: ye,
  sm: xe,
  md: we,
  lg: Te,
  iconOnly: Ee,
  solid: Re,
  soft: ke,
  outline: Ne,
  ghost: $e,
  loading: Se,
  hiddenContent: Ce,
  spinner: Oe,
  "button-spin": "_button-spin_1e7rg_1"
}, Ae = i.forwardRef(
  ({ variant: t = "solid", size: r = "md", loading: n, iconOnly: s, className: a, disabled: c, children: _, ...d }, b) => {
    const v = [
      E.button,
      E[t],
      E[r],
      s && E.iconOnly,
      n && E.loading,
      a
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ o.jsxs("button", { ref: b, className: v, disabled: c || n, ...d, children: [
      n && /* @__PURE__ */ o.jsx("span", { className: E.spinner, "aria-hidden": "true" }),
      /* @__PURE__ */ o.jsx("span", { className: n ? E.hiddenContent : void 0, children: _ })
    ] });
  }
);
Ae.displayName = "Button";
const Pe = "_input_10fr1_1", Be = "_sm_10fr1_65", ze = "_md_10fr1_77", Le = "_lg_10fr1_89", De = "_error_10fr1_105", X = {
  input: Pe,
  sm: Be,
  md: ze,
  lg: Le,
  error: De
}, Ie = i.forwardRef(
  ({ inputSize: t = "md", error: r, className: n, ...s }, a) => {
    const c = [
      X.input,
      X[t],
      r && X.error,
      n
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ o.jsx("input", { ref: a, className: c, ...s });
  }
);
Ie.displayName = "Input";
const Me = "_textarea_12wr4_1", Ye = "_sm_12wr4_67", Fe = "_md_12wr4_77", We = "_lg_12wr4_87", Ue = "_error_12wr4_101", Z = {
  textarea: Me,
  sm: Ye,
  md: Fe,
  lg: We,
  error: Ue
}, qe = i.forwardRef(
  ({ textAreaSize: t = "md", error: r, resize: n = "vertical", className: s, style: a, ...c }, _) => {
    const d = [
      Z.textarea,
      Z[t],
      r && Z.error,
      s
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ o.jsx(
      "textarea",
      {
        ref: _,
        className: d,
        style: { ...a, resize: n },
        ...c
      }
    );
  }
);
qe.displayName = "TextArea";
const Ge = "_wrapper_14lpt_1", Je = "_input_14lpt_17", He = "_control_14lpt_45", Ve = "_icon_14lpt_113", Xe = "_label_14lpt_121", Ze = "_sm_14lpt_135", Qe = "_md_14lpt_143", Ke = "_lg_14lpt_151", $ = {
  wrapper: Ge,
  input: Je,
  control: He,
  icon: Ve,
  label: Xe,
  sm: Ze,
  md: Qe,
  lg: Ke
}, et = i.forwardRef(
  ({ label: t, checkboxSize: r = "md", className: n, id: s, ...a }, c) => {
    const _ = i.useId(), d = s ?? _;
    return /* @__PURE__ */ o.jsxs("label", { className: [$.wrapper, $[r], n].filter(Boolean).join(" "), htmlFor: d, children: [
      /* @__PURE__ */ o.jsx("input", { ref: c, type: "checkbox", id: d, className: $.input, ...a }),
      /* @__PURE__ */ o.jsx("span", { className: $.control, "aria-hidden": "true", children: /* @__PURE__ */ o.jsx("svg", { className: $.icon, viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ o.jsx("path", { d: "M2.5 6L5 8.5L9.5 3.5", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
      t && /* @__PURE__ */ o.jsx("span", { className: $.label, children: t })
    ] });
  }
);
et.displayName = "Checkbox";
const tt = "_wrapper_vmnzi_1", rt = "_input_vmnzi_17", nt = "_control_vmnzi_45", ot = "_dot_vmnzi_69", st = "_label_vmnzi_137", at = "_sm_vmnzi_151", lt = "_md_vmnzi_159", ct = "_lg_vmnzi_167", S = {
  wrapper: tt,
  input: rt,
  control: nt,
  dot: ot,
  label: st,
  sm: at,
  md: lt,
  lg: ct
}, it = i.forwardRef(
  ({ label: t, radioSize: r = "md", className: n, id: s, ...a }, c) => {
    const _ = i.useId(), d = s ?? _;
    return /* @__PURE__ */ o.jsxs("label", { className: [S.wrapper, S[r], n].filter(Boolean).join(" "), htmlFor: d, children: [
      /* @__PURE__ */ o.jsx("input", { ref: c, type: "radio", id: d, className: S.input, ...a }),
      /* @__PURE__ */ o.jsx("span", { className: S.control, "aria-hidden": "true", children: /* @__PURE__ */ o.jsx("span", { className: S.dot }) }),
      t && /* @__PURE__ */ o.jsx("span", { className: S.label, children: t })
    ] });
  }
);
it.displayName = "Radio";
const _t = "_wrapper_8zjjd_1", dt = "_trigger_8zjjd_13", ut = "_open_8zjjd_77", mt = "_sm_8zjjd_91", ft = "_md_8zjjd_103", pt = "_lg_8zjjd_115", bt = "_error_8zjjd_131", vt = "_placeholder_8zjjd_155", gt = "_selectedText_8zjjd_163", ht = "_chevron_8zjjd_175", jt = "_menu_8zjjd_199", yt = "_option_8zjjd_257", xt = "_selected_8zjjd_163", wt = "_optionDisabled_8zjjd_293", h = {
  wrapper: _t,
  trigger: dt,
  open: ut,
  sm: mt,
  md: ft,
  lg: pt,
  error: bt,
  placeholder: vt,
  selectedText: gt,
  chevron: ht,
  menu: jt,
  "dropdown-enter": "_dropdown-enter_8zjjd_1",
  option: yt,
  selected: xt,
  optionDisabled: wt
}, Tt = i.forwardRef(
  ({ options: t, value: r, defaultValue: n, onChange: s, placeholder: a = "Select...", disabled: c, error: _, dropdownSize: d = "md", className: b, id: v, name: x }, y) => {
    const [g, j] = i.useState(!1), [z, M] = i.useState(n ?? ""), T = i.useRef(null), k = r !== void 0 ? r : z, O = t.find((m) => m.value === k), Y = (m) => {
      r === void 0 && M(m), s?.(m), j(!1);
    };
    i.useEffect(() => {
      if (!g) return;
      const m = (U) => {
        T.current && !T.current.contains(U.target) && j(!1);
      };
      return document.addEventListener("mousedown", m), () => document.removeEventListener("mousedown", m);
    }, [g]);
    const F = (m) => {
      m.key === "Escape" && j(!1);
    }, W = [
      h.trigger,
      h[d],
      _ && h.error,
      g && h.open,
      b
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ o.jsxs("div", { ref: T, className: h.wrapper, onKeyDown: F, children: [
      x && /* @__PURE__ */ o.jsx("input", { type: "hidden", name: x, value: k }),
      /* @__PURE__ */ o.jsxs(
        "button",
        {
          ref: y,
          type: "button",
          id: v,
          className: W,
          disabled: c,
          "aria-haspopup": "listbox",
          "aria-expanded": g,
          onClick: () => j(!g),
          children: [
            /* @__PURE__ */ o.jsx("span", { className: O ? h.selectedText : h.placeholder, children: O ? O.label : a }),
            /* @__PURE__ */ o.jsx("svg", { className: h.chevron, width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ o.jsx("path", { d: "M4 6L8 10L12 6", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
          ]
        }
      ),
      g && /* @__PURE__ */ o.jsx("ul", { className: h.menu, role: "listbox", children: t.map((m) => /* @__PURE__ */ o.jsx(
        "li",
        {
          role: "option",
          "aria-selected": m.value === k,
          "aria-disabled": m.disabled,
          className: [
            h.option,
            m.value === k && h.selected,
            m.disabled && h.optionDisabled
          ].filter(Boolean).join(" "),
          onClick: () => !m.disabled && Y(m.value),
          children: m.label
        },
        m.value
      )) })
    ] });
  }
);
Tt.displayName = "Dropdown";
const Et = "_wrapper_1mb9n_1", Rt = "_table_1mb9n_11", kt = "_thead_1mb9n_27", Nt = "_th_1mb9n_27", $t = "_td_1mb9n_57", St = "_tr_1mb9n_65", Ct = "_tbody_1mb9n_75", Ot = "_striped_1mb9n_95", w = {
  wrapper: Et,
  table: Rt,
  thead: kt,
  th: Nt,
  td: $t,
  tr: St,
  tbody: Ct,
  striped: Ot
}, At = i.forwardRef(
  ({ variant: t = "default", className: r, ...n }, s) => {
    const a = [w.table, w[t], r].filter(Boolean).join(" ");
    return /* @__PURE__ */ o.jsx("div", { className: w.wrapper, children: /* @__PURE__ */ o.jsx("table", { ref: s, className: a, ...n }) });
  }
);
At.displayName = "Table";
const Pt = i.forwardRef(
  ({ className: t, ...r }, n) => /* @__PURE__ */ o.jsx("thead", { ref: n, className: [w.thead, t].filter(Boolean).join(" "), ...r })
);
Pt.displayName = "TableHead";
const Bt = i.forwardRef(
  ({ className: t, ...r }, n) => /* @__PURE__ */ o.jsx("tbody", { ref: n, className: [w.tbody, t].filter(Boolean).join(" "), ...r })
);
Bt.displayName = "TableBody";
const zt = i.forwardRef(
  ({ className: t, ...r }, n) => /* @__PURE__ */ o.jsx("tr", { ref: n, className: [w.tr, t].filter(Boolean).join(" "), ...r })
);
zt.displayName = "TableRow";
const Lt = i.forwardRef(
  ({ className: t, ...r }, n) => /* @__PURE__ */ o.jsx("th", { ref: n, className: [w.th, t].filter(Boolean).join(" "), ...r })
);
Lt.displayName = "TableHeaderCell";
const Dt = i.forwardRef(
  ({ className: t, ...r }, n) => /* @__PURE__ */ o.jsx("td", { ref: n, className: [w.td, t].filter(Boolean).join(" "), ...r })
);
Dt.displayName = "TableCell";
const It = "_grid_ynklb_1", Q = {
  grid: It,
  "gap-sm": "_gap-sm_ynklb_11",
  "gap-md": "_gap-md_ynklb_13",
  "gap-lg": "_gap-lg_ynklb_15",
  "gap-xl": "_gap-xl_ynklb_17",
  "align-start": "_align-start_ynklb_23",
  "align-center": "_align-center_ynklb_25",
  "align-end": "_align-end_ynklb_27",
  "align-stretch": "_align-stretch_ynklb_29"
}, Mt = i.forwardRef(
  ({ columns: t = 3, minChildWidth: r = "200px", gap: n = "md", align: s, className: a, style: c, ..._ }, d) => {
    const b = [
      Q.grid,
      n !== "none" && Q[`gap-${n}`],
      s && Q[`align-${s}`],
      a
    ].filter(Boolean).join(" "), v = typeof t == "number" ? `repeat(${t}, minmax(0, 1fr))` : `repeat(${t}, minmax(${r}, 1fr))`;
    return /* @__PURE__ */ o.jsx(
      "div",
      {
        ref: d,
        className: b,
        style: { ...c, gridTemplateColumns: v },
        ..._
      }
    );
  }
);
Mt.displayName = "Grid";
const Yt = "_overlay_a64ab_1", Ft = "_content_a64ab_35", Wt = "_title_a64ab_87", Ut = "_description_a64ab_103", qt = "_footer_a64ab_117", B = {
  overlay: Yt,
  content: Ft,
  title: Wt,
  description: Ut,
  footer: qt
};
function gr({ open: t, onOpenChange: r, children: n }) {
  return i.useEffect(() => {
    if (!t) return;
    const s = (a) => {
      a.key === "Escape" && r(!1);
    };
    return document.addEventListener("keydown", s), () => document.removeEventListener("keydown", s);
  }, [t, r]), i.useEffect(() => {
    if (!t) return;
    const s = document.body.style.overflow;
    return document.body.style.overflow = "hidden", () => {
      document.body.style.overflow = s;
    };
  }, [t]), t ? /* @__PURE__ */ o.jsx("div", { className: B.overlay, onClick: () => r(!1), children: /* @__PURE__ */ o.jsx(
    "div",
    {
      className: B.content,
      role: "dialog",
      "aria-modal": "true",
      onClick: (s) => s.stopPropagation(),
      children: n
    }
  ) }) : null;
}
function hr({ className: t, ...r }) {
  return /* @__PURE__ */ o.jsx("h2", { className: [B.title, t].filter(Boolean).join(" "), ...r });
}
function jr({ className: t, ...r }) {
  return /* @__PURE__ */ o.jsx("p", { className: [B.description, t].filter(Boolean).join(" "), ...r });
}
function yr({ className: t, ...r }) {
  return /* @__PURE__ */ o.jsx("div", { className: [B.footer, t].filter(Boolean).join(" "), ...r });
}
const Gt = "_spinner_5poan_1", Jt = "_svg_5poan_13", Ht = "_spin_5poan_1", Vt = "_track_5poan_21", Xt = "_arc_5poan_29", Zt = "_primary_5poan_41", Qt = "_current_5poan_49", Kt = "_sm_5poan_61", er = "_md_5poan_63", tr = "_lg_5poan_65", rr = "_srOnly_5poan_73", R = {
  spinner: Gt,
  svg: Jt,
  spin: Ht,
  track: Vt,
  arc: Xt,
  primary: Zt,
  current: Qt,
  sm: Kt,
  md: er,
  lg: tr,
  srOnly: rr
}, nr = i.forwardRef(
  ({ size: t = "md", color: r = "primary", label: n = "Loading", className: s, ...a }, c) => {
    const _ = [
      R.spinner,
      R[t],
      R[r],
      s
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ o.jsxs("span", { ref: c, role: "status", className: _, ...a, children: [
      /* @__PURE__ */ o.jsxs("svg", { className: R.svg, viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
        /* @__PURE__ */ o.jsx("circle", { className: R.track, cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "3" }),
        /* @__PURE__ */ o.jsx(
          "path",
          {
            className: R.arc,
            d: "M12 2a10 10 0 019.8 8",
            stroke: "currentColor",
            strokeWidth: "3",
            strokeLinecap: "round"
          }
        )
      ] }),
      /* @__PURE__ */ o.jsx("span", { className: R.srOnly, children: n })
    ] });
  }
);
nr.displayName = "Spinner";
const or = "_list_1vyvc_5", sr = "_trigger_1vyvc_43", ar = "_active_1vyvc_107", lr = "_content_1vyvc_147", C = {
  list: or,
  "list-underline": "_list-underline_1vyvc_17",
  "list-pills": "_list-pills_1vyvc_27",
  trigger: sr,
  "trigger-underline": "_trigger-underline_1vyvc_95",
  active: ar,
  "trigger-pills": "_trigger-pills_1vyvc_121",
  content: lr,
  "tab-enter": "_tab-enter_1vyvc_1"
}, _e = i.createContext(void 0);
function K() {
  const t = i.useContext(_e);
  if (!t) throw new Error("Tabs compound components must be used within <Tabs>");
  return t;
}
function xr({ value: t, defaultValue: r = "", onValueChange: n, variant: s = "underline", children: a, className: c }) {
  const [_, d] = i.useState(r), b = t !== void 0 ? t : _, v = i.useCallback(
    (y) => {
      t === void 0 && d(y), n?.(y);
    },
    [t, n]
  ), x = i.useMemo(() => ({ value: b, onSelect: v, variant: s }), [b, v, s]);
  return /* @__PURE__ */ o.jsx(_e.Provider, { value: x, children: /* @__PURE__ */ o.jsx("div", { className: c, children: a }) });
}
function wr({ className: t, ...r }) {
  const { variant: n } = K(), s = [C.list, C[`list-${n}`], t].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsx("div", { role: "tablist", className: s, ...r });
}
function Tr({ value: t, className: r, ...n }) {
  const { value: s, onSelect: a, variant: c } = K(), _ = t === s, d = [
    C.trigger,
    C[`trigger-${c}`],
    _ && C.active,
    r
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ o.jsx(
    "button",
    {
      role: "tab",
      type: "button",
      "aria-selected": _,
      className: d,
      onClick: () => a(t),
      ...n
    }
  );
}
function Er({ value: t, className: r, ...n }) {
  const { value: s } = K();
  return t !== s ? null : /* @__PURE__ */ o.jsx("div", { role: "tabpanel", className: [C.content, r].filter(Boolean).join(" "), ...n });
}
const cr = "_wrapper_16rn9_1", ir = "_tooltip_16rn9_11", _r = "_arrow_16rn9_63", dr = "_top_16rn9_83", ur = "_bottom_16rn9_107", mr = "_left_16rn9_131", fr = "_right_16rn9_155", I = {
  wrapper: cr,
  tooltip: ir,
  "tooltip-enter": "_tooltip-enter_16rn9_1",
  arrow: _r,
  top: dr,
  bottom: ur,
  left: mr,
  right: fr
};
function Rr({ content: t, side: r = "top", delayMs: n = 200, children: s }) {
  const [a, c] = i.useState(!1), _ = i.useRef(void 0), d = () => {
    clearTimeout(_.current), _.current = setTimeout(() => c(!0), n);
  }, b = () => {
    clearTimeout(_.current), c(!1);
  };
  return i.useEffect(() => () => clearTimeout(_.current), []), /* @__PURE__ */ o.jsxs(
    "span",
    {
      className: I.wrapper,
      onMouseEnter: d,
      onMouseLeave: b,
      onFocus: d,
      onBlur: b,
      children: [
        s,
        a && /* @__PURE__ */ o.jsxs("span", { role: "tooltip", className: [I.tooltip, I[r]].join(" "), children: [
          t,
          /* @__PURE__ */ o.jsx("span", { className: I.arrow })
        ] })
      ]
    }
  );
}
export {
  Ae as Button,
  et as Checkbox,
  gr as Dialog,
  jr as DialogDescription,
  yr as DialogFooter,
  hr as DialogTitle,
  Tt as Dropdown,
  Mt as Grid,
  Ie as Input,
  it as Radio,
  nr as Spinner,
  Er as TabContent,
  wr as TabList,
  Tr as TabTrigger,
  At as Table,
  Bt as TableBody,
  Dt as TableCell,
  Pt as TableHead,
  Lt as TableHeaderCell,
  zt as TableRow,
  xr as Tabs,
  qe as TextArea,
  br as ThemeProvider,
  Rr as Tooltip,
  vr as useTheme
};
