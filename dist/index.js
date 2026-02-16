import * as c from "react";
import Te from "react";
var se = { exports: {} }, J = {};
var he;
function Se() {
  if (he) return J;
  he = 1;
  var t = /* @__PURE__ */ Symbol.for("react.transitional.element"), n = /* @__PURE__ */ Symbol.for("react.fragment");
  function s(a, l, d) {
    var _ = null;
    if (d !== void 0 && (_ = "" + d), l.key !== void 0 && (_ = "" + l.key), "key" in l) {
      d = {};
      for (var m in l)
        m !== "key" && (d[m] = l[m]);
    } else d = l;
    return l = d.ref, {
      $$typeof: t,
      type: a,
      key: _,
      ref: l !== void 0 ? l : null,
      props: d
    };
  }
  return J.Fragment = n, J.jsx = s, J.jsxs = s, J;
}
var X = {};
var ge;
function Ee() {
  return ge || (ge = 1, process.env.NODE_ENV !== "production" && (function() {
    function t(e) {
      if (e == null) return null;
      if (typeof e == "function")
        return e.$$typeof === L ? null : e.displayName || e.name || null;
      if (typeof e == "string") return e;
      switch (e) {
        case x:
          return "Fragment";
        case C:
          return "Profiler";
        case R:
          return "StrictMode";
        case h:
          return "Suspense";
        case U:
          return "SuspenseList";
        case Q:
          return "Activity";
      }
      if (typeof e == "object")
        switch (typeof e.tag == "number" && console.error(
          "Received an unexpected object in getComponentNameFromType(). This is likely a bug in React. Please file an issue."
        ), e.$$typeof) {
          case w:
            return "Portal";
          case S:
            return e.displayName || "Context";
          case z:
            return (e._context.displayName || "Context") + ".Consumer";
          case q:
            var o = e.render;
            return e = e.displayName, e || (e = o.displayName || o.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
          case V:
            return o = e.displayName || null, o !== null ? o : t(e.type) || "Memo";
          case E:
            o = e._payload, e = e._init;
            try {
              return t(e(o));
            } catch {
            }
        }
      return null;
    }
    function n(e) {
      return "" + e;
    }
    function s(e) {
      try {
        n(e);
        var o = !1;
      } catch {
        o = !0;
      }
      if (o) {
        o = console;
        var i = o.error, u = typeof Symbol == "function" && Symbol.toStringTag && e[Symbol.toStringTag] || e.constructor.name || "Object";
        return i.call(
          o,
          "The provided key is an unsupported type %s. This value must be coerced to a string before using it here.",
          u
        ), n(e);
      }
    }
    function a(e) {
      if (e === x) return "<>";
      if (typeof e == "object" && e !== null && e.$$typeof === E)
        return "<...>";
      try {
        var o = t(e);
        return o ? "<" + o + ">" : "<...>";
      } catch {
        return "<...>";
      }
    }
    function l() {
      var e = D.A;
      return e === null ? null : e.getOwner();
    }
    function d() {
      return Error("react-stack-top-frame");
    }
    function _(e) {
      if (M.call(e, "key")) {
        var o = Object.getOwnPropertyDescriptor(e, "key").get;
        if (o && o.isReactWarning) return !1;
      }
      return e.key !== void 0;
    }
    function m(e, o) {
      function i() {
        K || (K = !0, console.error(
          "%s: `key` is not a prop. Trying to access it will result in `undefined` being returned. If you need to access the same value within the child component, you should pass it as a different prop. (https://react.dev/link/special-props)",
          o
        ));
      }
      i.isReactWarning = !0, Object.defineProperty(e, "key", {
        get: i,
        configurable: !0
      });
    }
    function f() {
      var e = t(this.type);
      return ee[e] || (ee[e] = !0, console.error(
        "Accessing element.ref was removed in React 19. ref is now a regular prop. It will be removed from the JSX Element type in a future release."
      )), e = this.props.ref, e !== void 0 ? e : null;
    }
    function p(e, o, i, u, $, A) {
      var v = i.ref;
      return e = {
        $$typeof: y,
        type: e,
        key: o,
        props: i,
        _owner: u
      }, (v !== void 0 ? v : null) !== null ? Object.defineProperty(e, "ref", {
        enumerable: !1,
        get: f
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
        value: $
      }), Object.defineProperty(e, "_debugTask", {
        configurable: !1,
        enumerable: !1,
        writable: !0,
        value: A
      }), Object.freeze && (Object.freeze(e.props), Object.freeze(e)), e;
    }
    function g(e, o, i, u, $, A) {
      var v = o.children;
      if (v !== void 0)
        if (u)
          if (ce(v)) {
            for (u = 0; u < v.length; u++)
              N(v[u]);
            Object.freeze && Object.freeze(v);
          } else
            console.error(
              "React.jsx: Static children should always be an array. You are likely explicitly calling React.jsxs or React.jsxDEV. Use the Babel transform instead."
            );
        else N(v);
      if (M.call(o, "key")) {
        v = t(e);
        var F = Object.keys(o).filter(function(Re) {
          return Re !== "key";
        });
        u = 0 < F.length ? "{key: someKey, " + F.join(": ..., ") + ": ...}" : "{key: someKey}", ne[v + u] || (F = 0 < F.length ? "{" + F.join(": ..., ") + ": ...}" : "{}", console.error(
          `A props object containing a "key" prop is being spread into JSX:
  let props = %s;
  <%s {...props} />
React keys must be passed directly to JSX without using spread:
  let props = %s;
  <%s key={someKey} {...props} />`,
          u,
          v,
          F,
          v
        ), ne[v + u] = !0);
      }
      if (v = null, i !== void 0 && (s(i), v = "" + i), _(o) && (s(o.key), v = "" + o.key), "key" in o) {
        i = {};
        for (var ie in o)
          ie !== "key" && (i[ie] = o[ie]);
      } else i = o;
      return v && m(
        i,
        typeof e == "function" ? e.displayName || e.name || "Unknown" : e
      ), p(
        e,
        v,
        i,
        l(),
        $,
        A
      );
    }
    function N(e) {
      b(e) ? e._store && (e._store.validated = 1) : typeof e == "object" && e !== null && e.$$typeof === E && (e._payload.status === "fulfilled" ? b(e._payload.value) && e._payload.value._store && (e._payload.value._store.validated = 1) : e._store && (e._store.validated = 1));
    }
    function b(e) {
      return typeof e == "object" && e !== null && e.$$typeof === y;
    }
    var k = Te, y = /* @__PURE__ */ Symbol.for("react.transitional.element"), w = /* @__PURE__ */ Symbol.for("react.portal"), x = /* @__PURE__ */ Symbol.for("react.fragment"), R = /* @__PURE__ */ Symbol.for("react.strict_mode"), C = /* @__PURE__ */ Symbol.for("react.profiler"), z = /* @__PURE__ */ Symbol.for("react.consumer"), S = /* @__PURE__ */ Symbol.for("react.context"), q = /* @__PURE__ */ Symbol.for("react.forward_ref"), h = /* @__PURE__ */ Symbol.for("react.suspense"), U = /* @__PURE__ */ Symbol.for("react.suspense_list"), V = /* @__PURE__ */ Symbol.for("react.memo"), E = /* @__PURE__ */ Symbol.for("react.lazy"), Q = /* @__PURE__ */ Symbol.for("react.activity"), L = /* @__PURE__ */ Symbol.for("react.client.reference"), D = k.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, M = Object.prototype.hasOwnProperty, ce = Array.isArray, G = console.createTask ? console.createTask : function() {
      return null;
    };
    k = {
      react_stack_bottom_frame: function(e) {
        return e();
      }
    };
    var K, ee = {}, te = k.react_stack_bottom_frame.bind(
      k,
      d
    )(), re = G(a(d)), ne = {};
    X.Fragment = x, X.jsx = function(e, o, i) {
      var u = 1e4 > D.recentlyCreatedOwnerStacks++;
      return g(
        e,
        o,
        i,
        !1,
        u ? Error("react-stack-top-frame") : te,
        u ? G(a(e)) : re
      );
    }, X.jsxs = function(e, o, i) {
      var u = 1e4 > D.recentlyCreatedOwnerStacks++;
      return g(
        e,
        o,
        i,
        !0,
        u ? Error("react-stack-top-frame") : te,
        u ? G(a(e)) : re
      );
    };
  })()), X;
}
var be;
function Ce() {
  return be || (be = 1, process.env.NODE_ENV === "production" ? se.exports = Se() : se.exports = Ee()), se.exports;
}
var r = Ce();
const ve = c.createContext(void 0);
function $e() {
  return typeof window > "u" ? "light" : window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}
function Kr({
  children: t,
  defaultTheme: n = "system",
  defaultAccent: s = "blue"
}) {
  const [a, l] = c.useState(n), [d, _] = c.useState(s), [m, f] = c.useState($e);
  c.useEffect(() => {
    const N = window.matchMedia("(prefers-color-scheme: dark)"), b = (k) => f(k.matches ? "dark" : "light");
    return N.addEventListener("change", b), () => N.removeEventListener("change", b);
  }, []);
  const p = a === "system" ? m : a, g = c.useMemo(
    () => ({ theme: a, resolvedTheme: p, accentColor: d, setTheme: l, setAccentColor: _ }),
    [a, p, d]
  );
  return /* @__PURE__ */ r.jsx(ve.Provider, { value: g, children: /* @__PURE__ */ r.jsx(
    "div",
    {
      className: "tng-root",
      "data-tng-theme": p,
      "data-tng-accent": d,
      children: t
    }
  ) });
}
function en() {
  const t = c.useContext(ve);
  if (!t) throw new Error("useTheme must be used within a <ThemeProvider>");
  return t;
}
const Oe = "_button_1e7rg_1", Ae = "_sm_1e7rg_65", Pe = "_md_1e7rg_79", ze = "_lg_1e7rg_91", Le = "_iconOnly_1e7rg_107", Ie = "_solid_1e7rg_119", Be = "_soft_1e7rg_145", De = "_outline_1e7rg_163", Me = "_ghost_1e7rg_185", Fe = "_loading_1e7rg_207", We = "_hiddenContent_1e7rg_215", Ye = "_spinner_1e7rg_223", I = {
  button: Oe,
  sm: Ae,
  md: Pe,
  lg: ze,
  iconOnly: Le,
  solid: Ie,
  soft: Be,
  outline: De,
  ghost: Me,
  loading: Fe,
  hiddenContent: We,
  spinner: Ye,
  "button-spin": "_button-spin_1e7rg_1"
}, He = c.forwardRef(
  ({ variant: t = "solid", size: n = "md", loading: s, iconOnly: a, className: l, disabled: d, children: _, ...m }, f) => {
    const p = [
      I.button,
      I[t],
      I[n],
      a && I.iconOnly,
      s && I.loading,
      l
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ r.jsxs("button", { ref: f, className: p, disabled: d || s, ...m, children: [
      s && /* @__PURE__ */ r.jsx("span", { className: I.spinner, "aria-hidden": "true" }),
      /* @__PURE__ */ r.jsx("span", { className: s ? I.hiddenContent : void 0, children: _ })
    ] });
  }
);
He.displayName = "Button";
const qe = "_input_10fr1_1", Ue = "_sm_10fr1_65", Ve = "_md_10fr1_77", Ge = "_lg_10fr1_89", Je = "_error_10fr1_105", de = {
  input: qe,
  sm: Ue,
  md: Ve,
  lg: Ge,
  error: Je
}, Xe = c.forwardRef(
  ({ inputSize: t = "md", error: n, className: s, ...a }, l) => {
    const d = [
      de.input,
      de[t],
      n && de.error,
      s
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ r.jsx("input", { ref: l, className: d, ...a });
  }
);
Xe.displayName = "Input";
const Ze = "_textarea_12wr4_1", Qe = "_sm_12wr4_67", Ke = "_md_12wr4_77", et = "_lg_12wr4_87", tt = "_error_12wr4_101", _e = {
  textarea: Ze,
  sm: Qe,
  md: Ke,
  lg: et,
  error: tt
}, rt = c.forwardRef(
  ({ textAreaSize: t = "md", error: n, resize: s = "vertical", className: a, style: l, ...d }, _) => {
    const m = [
      _e.textarea,
      _e[t],
      n && _e.error,
      a
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ r.jsx(
      "textarea",
      {
        ref: _,
        className: m,
        style: { ...l, resize: s },
        ...d
      }
    );
  }
);
rt.displayName = "TextArea";
const nt = "_wrapper_14lpt_1", st = "_input_14lpt_17", ot = "_control_14lpt_45", at = "_icon_14lpt_113", lt = "_label_14lpt_121", ct = "_sm_14lpt_135", it = "_md_14lpt_143", dt = "_lg_14lpt_151", W = {
  wrapper: nt,
  input: st,
  control: ot,
  icon: at,
  label: lt,
  sm: ct,
  md: it,
  lg: dt
}, _t = c.forwardRef(
  ({ label: t, checkboxSize: n = "md", className: s, id: a, ...l }, d) => {
    const _ = c.useId(), m = a ?? _;
    return /* @__PURE__ */ r.jsxs("label", { className: [W.wrapper, W[n], s].filter(Boolean).join(" "), htmlFor: m, children: [
      /* @__PURE__ */ r.jsx("input", { ref: d, type: "checkbox", id: m, className: W.input, ...l }),
      /* @__PURE__ */ r.jsx("span", { className: W.control, "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("svg", { className: W.icon, viewBox: "0 0 12 12", fill: "none", children: /* @__PURE__ */ r.jsx("path", { d: "M2.5 6L5 8.5L9.5 3.5", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round" }) }) }),
      t && /* @__PURE__ */ r.jsx("span", { className: W.label, children: t })
    ] });
  }
);
_t.displayName = "Checkbox";
const ut = "_wrapper_vmnzi_1", mt = "_input_vmnzi_17", ft = "_control_vmnzi_45", pt = "_dot_vmnzi_69", ht = "_label_vmnzi_137", gt = "_sm_vmnzi_151", bt = "_md_vmnzi_159", vt = "_lg_vmnzi_167", Y = {
  wrapper: ut,
  input: mt,
  control: ft,
  dot: pt,
  label: ht,
  sm: gt,
  md: bt,
  lg: vt
}, jt = c.forwardRef(
  ({ label: t, radioSize: n = "md", className: s, id: a, ...l }, d) => {
    const _ = c.useId(), m = a ?? _;
    return /* @__PURE__ */ r.jsxs("label", { className: [Y.wrapper, Y[n], s].filter(Boolean).join(" "), htmlFor: m, children: [
      /* @__PURE__ */ r.jsx("input", { ref: d, type: "radio", id: m, className: Y.input, ...l }),
      /* @__PURE__ */ r.jsx("span", { className: Y.control, "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("span", { className: Y.dot }) }),
      t && /* @__PURE__ */ r.jsx("span", { className: Y.label, children: t })
    ] });
  }
);
jt.displayName = "Radio";
const xt = "_wrapper_8zjjd_1", yt = "_trigger_8zjjd_13", wt = "_open_8zjjd_77", Nt = "_sm_8zjjd_91", kt = "_md_8zjjd_103", Rt = "_lg_8zjjd_115", Tt = "_error_8zjjd_131", St = "_placeholder_8zjjd_155", Et = "_selectedText_8zjjd_163", Ct = "_chevron_8zjjd_175", $t = "_menu_8zjjd_199", Ot = "_option_8zjjd_257", At = "_selected_8zjjd_163", Pt = "_optionDisabled_8zjjd_293", T = {
  wrapper: xt,
  trigger: yt,
  open: wt,
  sm: Nt,
  md: kt,
  lg: Rt,
  error: Tt,
  placeholder: St,
  selectedText: Et,
  chevron: Ct,
  menu: $t,
  "dropdown-enter": "_dropdown-enter_8zjjd_1",
  option: Ot,
  selected: At,
  optionDisabled: Pt
}, zt = c.forwardRef(
  ({ options: t, value: n, defaultValue: s, onChange: a, placeholder: l = "Select...", disabled: d, error: _, dropdownSize: m = "md", className: f, id: p, name: g }, N) => {
    const [b, k] = c.useState(!1), [y, w] = c.useState(s ?? ""), x = c.useRef(null), R = n !== void 0 ? n : y, C = t.find((h) => h.value === R), z = (h) => {
      n === void 0 && w(h), a?.(h), k(!1);
    };
    c.useEffect(() => {
      if (!b) return;
      const h = (U) => {
        x.current && !x.current.contains(U.target) && k(!1);
      };
      return document.addEventListener("mousedown", h), () => document.removeEventListener("mousedown", h);
    }, [b]);
    const S = (h) => {
      h.key === "Escape" && k(!1);
    }, q = [
      T.trigger,
      T[m],
      _ && T.error,
      b && T.open,
      f
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ r.jsxs("div", { ref: x, className: T.wrapper, onKeyDown: S, children: [
      g && /* @__PURE__ */ r.jsx("input", { type: "hidden", name: g, value: R }),
      /* @__PURE__ */ r.jsxs(
        "button",
        {
          ref: N,
          type: "button",
          id: p,
          className: q,
          disabled: d,
          "aria-haspopup": "listbox",
          "aria-expanded": b,
          onClick: () => k(!b),
          children: [
            /* @__PURE__ */ r.jsx("span", { className: C ? T.selectedText : T.placeholder, children: C ? C.label : l }),
            /* @__PURE__ */ r.jsx("svg", { className: T.chevron, width: "16", height: "16", viewBox: "0 0 16 16", fill: "none", "aria-hidden": "true", children: /* @__PURE__ */ r.jsx("path", { d: "M4 6L8 10L12 6", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round", strokeLinejoin: "round" }) })
          ]
        }
      ),
      b && /* @__PURE__ */ r.jsx("ul", { className: T.menu, role: "listbox", children: t.map((h) => /* @__PURE__ */ r.jsx(
        "li",
        {
          role: "option",
          "aria-selected": h.value === R,
          "aria-disabled": h.disabled,
          className: [
            T.option,
            h.value === R && T.selected,
            h.disabled && T.optionDisabled
          ].filter(Boolean).join(" "),
          onClick: () => !h.disabled && z(h.value),
          children: h.label
        },
        h.value
      )) })
    ] });
  }
);
zt.displayName = "Dropdown";
const Lt = "_wrapper_1mb9n_1", It = "_table_1mb9n_11", Bt = "_thead_1mb9n_27", Dt = "_th_1mb9n_27", Mt = "_td_1mb9n_57", Ft = "_tr_1mb9n_65", Wt = "_tbody_1mb9n_75", Yt = "_striped_1mb9n_95", P = {
  wrapper: Lt,
  table: It,
  thead: Bt,
  th: Dt,
  td: Mt,
  tr: Ft,
  tbody: Wt,
  striped: Yt
}, je = c.forwardRef(
  ({ variant: t = "default", className: n, ...s }, a) => {
    const l = [P.table, P[t], n].filter(Boolean).join(" ");
    return /* @__PURE__ */ r.jsx("div", { className: P.wrapper, children: /* @__PURE__ */ r.jsx("table", { ref: a, className: l, ...s }) });
  }
);
je.displayName = "Table";
const xe = c.forwardRef(
  ({ className: t, ...n }, s) => /* @__PURE__ */ r.jsx("thead", { ref: s, className: [P.thead, t].filter(Boolean).join(" "), ...n })
);
xe.displayName = "TableHead";
const ye = c.forwardRef(
  ({ className: t, ...n }, s) => /* @__PURE__ */ r.jsx("tbody", { ref: s, className: [P.tbody, t].filter(Boolean).join(" "), ...n })
);
ye.displayName = "TableBody";
const ae = c.forwardRef(
  ({ className: t, ...n }, s) => /* @__PURE__ */ r.jsx("tr", { ref: s, className: [P.tr, t].filter(Boolean).join(" "), ...n })
);
ae.displayName = "TableRow";
const we = c.forwardRef(
  ({ className: t, ...n }, s) => /* @__PURE__ */ r.jsx("th", { ref: s, className: [P.th, t].filter(Boolean).join(" "), ...n })
);
we.displayName = "TableHeaderCell";
const fe = c.forwardRef(
  ({ className: t, ...n }, s) => /* @__PURE__ */ r.jsx("td", { ref: s, className: [P.td, t].filter(Boolean).join(" "), ...n })
);
fe.displayName = "TableCell";
const Ht = "_grid_ynklb_1", ue = {
  grid: Ht,
  "gap-sm": "_gap-sm_ynklb_11",
  "gap-md": "_gap-md_ynklb_13",
  "gap-lg": "_gap-lg_ynklb_15",
  "gap-xl": "_gap-xl_ynklb_17",
  "align-start": "_align-start_ynklb_23",
  "align-center": "_align-center_ynklb_25",
  "align-end": "_align-end_ynklb_27",
  "align-stretch": "_align-stretch_ynklb_29"
}, qt = c.forwardRef(
  ({ columns: t = 3, minChildWidth: n = "200px", gap: s = "md", align: a, className: l, style: d, ..._ }, m) => {
    const f = [
      ue.grid,
      s !== "none" && ue[`gap-${s}`],
      a && ue[`align-${a}`],
      l
    ].filter(Boolean).join(" "), p = typeof t == "number" ? `repeat(${t}, minmax(0, 1fr))` : `repeat(${t}, minmax(${n}, 1fr))`;
    return /* @__PURE__ */ r.jsx(
      "div",
      {
        ref: m,
        className: f,
        style: { ...d, gridTemplateColumns: p },
        ..._
      }
    );
  }
);
qt.displayName = "Grid";
const Ut = "_overlay_a64ab_1", Vt = "_content_a64ab_35", Gt = "_title_a64ab_87", Jt = "_description_a64ab_103", Xt = "_footer_a64ab_117", Z = {
  overlay: Ut,
  content: Vt,
  title: Gt,
  description: Jt,
  footer: Xt
};
function tn({ open: t, onOpenChange: n, children: s }) {
  return c.useEffect(() => {
    if (!t) return;
    const a = (l) => {
      l.key === "Escape" && n(!1);
    };
    return document.addEventListener("keydown", a), () => document.removeEventListener("keydown", a);
  }, [t, n]), c.useEffect(() => {
    if (!t) return;
    const a = document.body.style.overflow;
    return document.body.style.overflow = "hidden", () => {
      document.body.style.overflow = a;
    };
  }, [t]), t ? /* @__PURE__ */ r.jsx("div", { className: Z.overlay, onClick: () => n(!1), children: /* @__PURE__ */ r.jsx(
    "div",
    {
      className: Z.content,
      role: "dialog",
      "aria-modal": "true",
      onClick: (a) => a.stopPropagation(),
      children: s
    }
  ) }) : null;
}
function rn({ className: t, ...n }) {
  return /* @__PURE__ */ r.jsx("h2", { className: [Z.title, t].filter(Boolean).join(" "), ...n });
}
function nn({ className: t, ...n }) {
  return /* @__PURE__ */ r.jsx("p", { className: [Z.description, t].filter(Boolean).join(" "), ...n });
}
function sn({ className: t, ...n }) {
  return /* @__PURE__ */ r.jsx("div", { className: [Z.footer, t].filter(Boolean).join(" "), ...n });
}
const Zt = "_spinner_5poan_1", Qt = "_svg_5poan_13", Kt = "_spin_5poan_1", er = "_track_5poan_21", tr = "_arc_5poan_29", rr = "_primary_5poan_41", nr = "_current_5poan_49", sr = "_sm_5poan_61", or = "_md_5poan_63", ar = "_lg_5poan_65", lr = "_srOnly_5poan_73", B = {
  spinner: Zt,
  svg: Qt,
  spin: Kt,
  track: er,
  arc: tr,
  primary: rr,
  current: nr,
  sm: sr,
  md: or,
  lg: ar,
  srOnly: lr
}, cr = c.forwardRef(
  ({ size: t = "md", color: n = "primary", label: s = "Loading", className: a, ...l }, d) => {
    const _ = [
      B.spinner,
      B[t],
      B[n],
      a
    ].filter(Boolean).join(" ");
    return /* @__PURE__ */ r.jsxs("span", { ref: d, role: "status", className: _, ...l, children: [
      /* @__PURE__ */ r.jsxs("svg", { className: B.svg, viewBox: "0 0 24 24", fill: "none", "aria-hidden": "true", children: [
        /* @__PURE__ */ r.jsx("circle", { className: B.track, cx: "12", cy: "12", r: "10", stroke: "currentColor", strokeWidth: "3" }),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            className: B.arc,
            d: "M12 2a10 10 0 019.8 8",
            stroke: "currentColor",
            strokeWidth: "3",
            strokeLinecap: "round"
          }
        )
      ] }),
      /* @__PURE__ */ r.jsx("span", { className: B.srOnly, children: s })
    ] });
  }
);
cr.displayName = "Spinner";
const ir = "_list_1vyvc_5", dr = "_trigger_1vyvc_43", _r = "_active_1vyvc_107", ur = "_content_1vyvc_147", H = {
  list: ir,
  "list-underline": "_list-underline_1vyvc_17",
  "list-pills": "_list-pills_1vyvc_27",
  trigger: dr,
  "trigger-underline": "_trigger-underline_1vyvc_95",
  active: _r,
  "trigger-pills": "_trigger-pills_1vyvc_121",
  content: ur,
  "tab-enter": "_tab-enter_1vyvc_1"
}, Ne = c.createContext(void 0);
function pe() {
  const t = c.useContext(Ne);
  if (!t) throw new Error("Tabs compound components must be used within <Tabs>");
  return t;
}
function on({ value: t, defaultValue: n = "", onValueChange: s, variant: a = "underline", children: l, className: d }) {
  const [_, m] = c.useState(n), f = t !== void 0 ? t : _, p = c.useCallback(
    (N) => {
      t === void 0 && m(N), s?.(N);
    },
    [t, s]
  ), g = c.useMemo(() => ({ value: f, onSelect: p, variant: a }), [f, p, a]);
  return /* @__PURE__ */ r.jsx(Ne.Provider, { value: g, children: /* @__PURE__ */ r.jsx("div", { className: d, children: l }) });
}
function an({ className: t, ...n }) {
  const { variant: s } = pe(), a = [H.list, H[`list-${s}`], t].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx("div", { role: "tablist", className: a, ...n });
}
function ln({ value: t, className: n, ...s }) {
  const { value: a, onSelect: l, variant: d } = pe(), _ = t === a, m = [
    H.trigger,
    H[`trigger-${d}`],
    _ && H.active,
    n
  ].filter(Boolean).join(" ");
  return /* @__PURE__ */ r.jsx(
    "button",
    {
      role: "tab",
      type: "button",
      "aria-selected": _,
      className: m,
      onClick: () => l(t),
      ...s
    }
  );
}
function cn({ value: t, className: n, ...s }) {
  const { value: a } = pe();
  return t !== a ? null : /* @__PURE__ */ r.jsx("div", { role: "tabpanel", className: [H.content, n].filter(Boolean).join(" "), ...s });
}
const mr = "_wrapper_16rn9_1", fr = "_tooltip_16rn9_11", pr = "_arrow_16rn9_63", hr = "_top_16rn9_83", gr = "_bottom_16rn9_107", br = "_left_16rn9_131", vr = "_right_16rn9_155", oe = {
  wrapper: mr,
  tooltip: fr,
  "tooltip-enter": "_tooltip-enter_16rn9_1",
  arrow: pr,
  top: hr,
  bottom: gr,
  left: br,
  right: vr
};
function dn({ content: t, side: n = "top", delayMs: s = 200, children: a }) {
  const [l, d] = c.useState(!1), _ = c.useRef(void 0), m = () => {
    clearTimeout(_.current), _.current = setTimeout(() => d(!0), s);
  }, f = () => {
    clearTimeout(_.current), d(!1);
  };
  return c.useEffect(() => () => clearTimeout(_.current), []), /* @__PURE__ */ r.jsxs(
    "span",
    {
      className: oe.wrapper,
      onMouseEnter: m,
      onMouseLeave: f,
      onFocus: m,
      onBlur: f,
      children: [
        a,
        l && /* @__PURE__ */ r.jsxs("span", { role: "tooltip", className: [oe.tooltip, oe[n]].join(" "), children: [
          t,
          /* @__PURE__ */ r.jsx("span", { className: oe.arrow })
        ] })
      ]
    }
  );
}
const jr = "_pagination_257um_1", xr = "_info_257um_15", yr = "_controls_257um_29", wr = "_btn_257um_45", Nr = "_disabled_257um_105", kr = "_active_257um_119", Rr = "_dots_257um_147", Tr = "_sm_257um_167", Sr = "_md_257um_193", Er = "_lg_257um_219", O = {
  pagination: jr,
  info: xr,
  controls: yr,
  btn: wr,
  disabled: Nr,
  active: kr,
  dots: Rr,
  sm: Tr,
  md: Sr,
  lg: Er
};
function Cr(t, n, s) {
  const a = s * 2 + 5;
  if (n <= a)
    return Array.from({ length: n }, (f, p) => p + 1);
  const l = Math.max(t - s, 1), d = Math.min(t + s, n), _ = l > 2, m = d < n - 1;
  if (!_ && m) {
    const f = 3 + s * 2;
    return [...Array.from({ length: f }, (p, g) => g + 1), "dots", n];
  }
  if (_ && !m) {
    const f = 3 + s * 2;
    return [
      1,
      "dots",
      ...Array.from({ length: f }, (p, g) => n - f + 1 + g)
    ];
  }
  return [
    1,
    "dots",
    ...Array.from({ length: d - l + 1 }, (f, p) => l + p),
    "dots",
    n
  ];
}
const ke = c.forwardRef(
  ({
    currentPage: t,
    totalPages: n,
    onPageChange: s,
    siblingCount: a = 1,
    showFirstLast: l = !1,
    showPageInfo: d = !1,
    size: _ = "md",
    className: m,
    ...f
  }, p) => {
    if (n <= 0) return null;
    const g = Cr(t, n, a), N = t > 1, b = t < n, k = [O.pagination, O[_], m].filter(Boolean).join(" "), y = (w, x, R, C) => /* @__PURE__ */ r.jsx(
      "button",
      {
        type: "button",
        className: [O.btn, R && O.disabled].filter(Boolean).join(" "),
        onClick: () => !R && s(x),
        disabled: R,
        "aria-label": C,
        children: w
      }
    );
    return /* @__PURE__ */ r.jsxs(
      "div",
      {
        ref: p,
        className: k,
        role: "navigation",
        "aria-label": "Pagination",
        ...f,
        children: [
          d && /* @__PURE__ */ r.jsxs("span", { className: O.info, children: [
            "Page ",
            t,
            " of ",
            n
          ] }),
          /* @__PURE__ */ r.jsxs("div", { className: O.controls, children: [
            l && y("«", 1, !N, "First page"),
            y("‹", t - 1, !N, "Previous page"),
            g.map(
              (w, x) => w === "dots" ? /* @__PURE__ */ r.jsx(
                "span",
                {
                  className: O.dots,
                  "aria-hidden": "true",
                  children: "…"
                },
                `dots-${x}`
              ) : /* @__PURE__ */ r.jsx(
                "button",
                {
                  type: "button",
                  className: [O.btn, w === t && O.active].filter(Boolean).join(" "),
                  onClick: () => s(w),
                  "aria-label": `Page ${w}`,
                  "aria-current": w === t ? "page" : void 0,
                  children: w
                },
                w
              )
            ),
            y("›", t + 1, !b, "Next page"),
            l && y("»", n, !b, "Last page")
          ] })
        ]
      }
    );
  }
);
ke.displayName = "Pagination";
const $r = "_container_13j3a_1", Or = "_toolbar_13j3a_19", Ar = "_searchWrapper_13j3a_45", Pr = "_searchIcon_13j3a_57", zr = "_searchInput_13j3a_77", Lr = "_filterRow_13j3a_147", Ir = "_filterItem_13j3a_159", Br = "_filterLabel_13j3a_171", Dr = "_filterSelect_13j3a_189", Mr = "_sortableHeader_13j3a_249", Fr = "_headerContent_13j3a_267", Wr = "_sortIcon_13j3a_279", Yr = "_emptyCell_13j3a_303", Hr = "_footer_13j3a_321", qr = "_rowCount_13j3a_347", Ur = "_footerRight_13j3a_359", Vr = "_pageSizeControl_13j3a_377", Gr = "_pageSizeLabel_13j3a_389", Jr = "_pageSizeSelect_13j3a_401", j = {
  container: $r,
  toolbar: Or,
  searchWrapper: Ar,
  searchIcon: Pr,
  searchInput: zr,
  filterRow: Lr,
  filterItem: Ir,
  filterLabel: Br,
  filterSelect: Dr,
  sortableHeader: Mr,
  headerContent: Fr,
  sortIcon: Wr,
  emptyCell: Yr,
  footer: Hr,
  rowCount: qr,
  footerRight: Ur,
  pageSizeControl: Vr,
  pageSizeLabel: Gr,
  pageSizeSelect: Jr
};
function le(t, n) {
  return n.split(".").reduce((s, a) => {
    if (s != null && typeof s == "object")
      return s[a];
  }, t);
}
function me(t, n) {
  const s = le(t, n);
  return s == null ? "" : String(s);
}
function Xr({ state: t }) {
  return /* @__PURE__ */ r.jsxs(
    "svg",
    {
      className: j.sortIcon,
      width: "12",
      height: "12",
      viewBox: "0 0 12 12",
      fill: "currentColor",
      "aria-hidden": "true",
      children: [
        /* @__PURE__ */ r.jsx(
          "path",
          {
            d: "M6 1.5 L9.5 6 H2.5 Z",
            opacity: t === "desc" ? 0.25 : t === "none" ? 0.4 : 1
          }
        ),
        /* @__PURE__ */ r.jsx(
          "path",
          {
            d: "M6 10.5 L2.5 6 H9.5 Z",
            opacity: t === "asc" ? 0.25 : t === "none" ? 0.4 : 1
          }
        )
      ]
    }
  );
}
function Zr({
  data: t,
  columns: n,
  searchable: s = !0,
  searchPlaceholder: a = "Search…",
  defaultPageSize: l = 10,
  pageSizeOptions: d = [5, 10, 25, 50],
  variant: _ = "default",
  emptyMessage: m = "No results found.",
  className: f,
  onSort: p
}) {
  const [g, N] = c.useState(""), [b, k] = c.useState({}), [y, w] = c.useState(null), [x, R] = c.useState("asc"), [C, z] = c.useState(1), [S, q] = c.useState(l), h = n.filter((e) => e.filterable), U = c.useMemo(() => {
    const e = {};
    return h.forEach((o) => {
      const i = Array.from(
        new Set(t.map((u) => me(u, o.key)))
      ).filter(Boolean).sort();
      e[o.key] = i;
    }), e;
  }, [t, h]), V = c.useMemo(() => {
    let e = t;
    if (g.trim()) {
      const o = g.toLowerCase();
      e = e.filter(
        (i) => n.some(
          (u) => me(i, u.key).toLowerCase().includes(o)
        )
      );
    }
    return Object.entries(b).forEach(([o, i]) => {
      i && (e = e.filter(
        (u) => me(u, o) === i
      ));
    }), e;
  }, [t, n, g, b]), E = c.useMemo(() => y ? [...V].sort((e, o) => {
    const i = le(e, y), u = le(o, y);
    if (i == null) return 1;
    if (u == null) return -1;
    if (typeof i == "number" && typeof u == "number")
      return x === "asc" ? i - u : u - i;
    const $ = String(i).toLowerCase(), A = String(u).toLowerCase();
    return x === "asc" ? $ < A ? -1 : $ > A ? 1 : 0 : $ > A ? -1 : $ < A ? 1 : 0;
  }) : V, [V, y, x]), Q = Math.max(1, Math.ceil(E.length / S)), L = Math.min(C, Q), D = E.slice((L - 1) * S, L * S), M = () => z(1);
  function ce(e) {
    N(e.target.value), M();
  }
  function G(e, o) {
    k((i) => ({ ...i, [e]: o })), M();
  }
  function K(e) {
    y === e ? x === "asc" ? (R("desc"), p?.(e, "desc")) : (w(null), p?.(e, null)) : (w(e), R("asc"), p?.(e, "asc")), M();
  }
  function ee(e) {
    q(Number(e.target.value)), z(1);
  }
  const te = s || h.length > 0, re = E.length === 0 ? 0 : (L - 1) * S + 1, ne = Math.min(L * S, E.length);
  return /* @__PURE__ */ r.jsxs("div", { className: [j.container, f].filter(Boolean).join(" "), children: [
    te && /* @__PURE__ */ r.jsxs("div", { className: j.toolbar, children: [
      s && /* @__PURE__ */ r.jsxs("div", { className: j.searchWrapper, children: [
        /* @__PURE__ */ r.jsxs(
          "svg",
          {
            className: j.searchIcon,
            width: "16",
            height: "16",
            viewBox: "0 0 16 16",
            fill: "none",
            "aria-hidden": "true",
            children: [
              /* @__PURE__ */ r.jsx("circle", { cx: "6.5", cy: "6.5", r: "4.5", stroke: "currentColor", strokeWidth: "1.5" }),
              /* @__PURE__ */ r.jsx("path", { d: "M10 10L13.5 13.5", stroke: "currentColor", strokeWidth: "1.5", strokeLinecap: "round" })
            ]
          }
        ),
        /* @__PURE__ */ r.jsx(
          "input",
          {
            type: "search",
            className: j.searchInput,
            placeholder: a,
            value: g,
            onChange: ce,
            "aria-label": "Search table"
          }
        )
      ] }),
      h.length > 0 && /* @__PURE__ */ r.jsx("div", { className: j.filterRow, children: h.map((e) => /* @__PURE__ */ r.jsxs("div", { className: j.filterItem, children: [
        /* @__PURE__ */ r.jsx("label", { className: j.filterLabel, htmlFor: `filter-${e.key}`, children: e.header }),
        /* @__PURE__ */ r.jsxs(
          "select",
          {
            id: `filter-${e.key}`,
            className: j.filterSelect,
            value: b[e.key] ?? "",
            onChange: (o) => G(e.key, o.target.value),
            children: [
              /* @__PURE__ */ r.jsx("option", { value: "", children: "All" }),
              (U[e.key] ?? []).map((o) => /* @__PURE__ */ r.jsx("option", { value: o, children: o }, o))
            ]
          }
        )
      ] }, e.key)) })
    ] }),
    /* @__PURE__ */ r.jsxs(je, { variant: _, children: [
      /* @__PURE__ */ r.jsx(xe, { children: /* @__PURE__ */ r.jsx(ae, { children: n.map((e) => {
        const o = y === e.key, i = o ? x : "none";
        return /* @__PURE__ */ r.jsx(
          we,
          {
            style: e.width ? { width: e.width } : void 0,
            className: e.sortable ? j.sortableHeader : void 0,
            onClick: e.sortable ? () => K(e.key) : void 0,
            "aria-sort": o ? x === "asc" ? "ascending" : "descending" : void 0,
            children: /* @__PURE__ */ r.jsxs("span", { className: j.headerContent, children: [
              /* @__PURE__ */ r.jsx("span", { children: e.header }),
              e.sortable && /* @__PURE__ */ r.jsx(Xr, { state: i })
            ] })
          },
          e.key
        );
      }) }) }),
      /* @__PURE__ */ r.jsx(ye, { children: D.length === 0 ? /* @__PURE__ */ r.jsx(ae, { children: /* @__PURE__ */ r.jsx(
        fe,
        {
          colSpan: n.length,
          className: j.emptyCell,
          children: m
        }
      ) }) : D.map((e, o) => /* @__PURE__ */ r.jsx(ae, { children: n.map((i) => {
        const u = le(e, i.key);
        return /* @__PURE__ */ r.jsx(fe, { children: i.render ? i.render(u, e) : u == null ? "" : String(u) }, i.key);
      }) }, o)) })
    ] }),
    /* @__PURE__ */ r.jsxs("div", { className: j.footer, children: [
      /* @__PURE__ */ r.jsx("span", { className: j.rowCount, children: E.length === 0 ? "No results" : `${re}–${ne} of ${E.length}` }),
      /* @__PURE__ */ r.jsxs("div", { className: j.footerRight, children: [
        /* @__PURE__ */ r.jsxs("div", { className: j.pageSizeControl, children: [
          /* @__PURE__ */ r.jsx("span", { className: j.pageSizeLabel, children: "Rows" }),
          /* @__PURE__ */ r.jsx(
            "select",
            {
              className: j.pageSizeSelect,
              value: S,
              onChange: ee,
              "aria-label": "Rows per page",
              children: d.map((e) => /* @__PURE__ */ r.jsx("option", { value: e, children: e }, e))
            }
          )
        ] }),
        /* @__PURE__ */ r.jsx(
          ke,
          {
            currentPage: L,
            totalPages: Q,
            onPageChange: z,
            size: "sm"
          }
        )
      ] })
    ] })
  ] });
}
Zr.displayName = "AdvancedTable";
export {
  Zr as AdvancedTable,
  He as Button,
  _t as Checkbox,
  tn as Dialog,
  nn as DialogDescription,
  sn as DialogFooter,
  rn as DialogTitle,
  zt as Dropdown,
  qt as Grid,
  Xe as Input,
  ke as Pagination,
  jt as Radio,
  cr as Spinner,
  cn as TabContent,
  an as TabList,
  ln as TabTrigger,
  je as Table,
  ye as TableBody,
  fe as TableCell,
  xe as TableHead,
  we as TableHeaderCell,
  ae as TableRow,
  on as Tabs,
  rt as TextArea,
  Kr as ThemeProvider,
  dn as Tooltip,
  en as useTheme
};
