var vo = { exports: {} }, Xu = {};
var rv;
function n0() {
  if (rv) return Xu;
  rv = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function o(c, d, h) {
    var g = null;
    if (h !== void 0 && (g = "" + h), d.key !== void 0 && (g = "" + d.key), "key" in d) {
      h = {};
      for (var b in d)
        b !== "key" && (h[b] = d[b]);
    } else h = d;
    return d = h.ref, {
      $$typeof: i,
      type: c,
      key: g,
      ref: d !== void 0 ? d : null,
      props: h
    };
  }
  return Xu.Fragment = r, Xu.jsx = o, Xu.jsxs = o, Xu;
}
var cv;
function l0() {
  return cv || (cv = 1, vo.exports = n0()), vo.exports;
}
var y = l0(), go = { exports: {} }, ve = {};
var sv;
function a0() {
  if (sv) return ve;
  sv = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.consumer"), g = /* @__PURE__ */ Symbol.for("react.context"), b = /* @__PURE__ */ Symbol.for("react.forward_ref"), U = /* @__PURE__ */ Symbol.for("react.suspense"), w = /* @__PURE__ */ Symbol.for("react.memo"), C = /* @__PURE__ */ Symbol.for("react.lazy"), v = /* @__PURE__ */ Symbol.for("react.activity"), z = /* @__PURE__ */ Symbol.for("react.view_transition"), D = Symbol.iterator;
  function q(E) {
    return E === null || typeof E != "object" ? null : (E = D && E[D] || E["@@iterator"], typeof E == "function" ? E : null);
  }
  var Y = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, X = Object.assign, ue = {};
  function ye(E, I, te) {
    this.props = E, this.context = I, this.refs = ue, this.updater = te || Y;
  }
  ye.prototype.isReactComponent = {}, ye.prototype.setState = function(E, I) {
    if (typeof E != "object" && typeof E != "function" && E != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, E, I, "setState");
  }, ye.prototype.forceUpdate = function(E) {
    this.updater.enqueueForceUpdate(this, E, "forceUpdate");
  };
  function Q() {
  }
  Q.prototype = ye.prototype;
  function G(E, I, te) {
    this.props = E, this.context = I, this.refs = ue, this.updater = te || Y;
  }
  var pe = G.prototype = new Q();
  pe.constructor = G, X(pe, ye.prototype), pe.isPureReactComponent = !0;
  var se = Array.isArray;
  function ee() {
  }
  var de = { H: null, A: null, T: null, S: null }, We = Object.prototype.hasOwnProperty;
  function Ve(E, I, te) {
    var $ = te.ref;
    return {
      $$typeof: i,
      type: E,
      key: I,
      ref: $ !== void 0 ? $ : null,
      props: te
    };
  }
  function et(E, I) {
    return Ve(E.type, I, E.props);
  }
  function ke(E) {
    return typeof E == "object" && E !== null && E.$$typeof === i;
  }
  function Nt(E) {
    var I = { "=": "=0", ":": "=2" };
    return "$" + E.replace(/[=:]/g, function(te) {
      return I[te];
    });
  }
  var qt = /\/+/g;
  function B(E, I) {
    return typeof E == "object" && E !== null && E.key != null ? Nt("" + E.key) : I.toString(36);
  }
  function L(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (typeof E.status == "string" ? E.then(ee, ee) : (E.status = "pending", E.then(
          function(I) {
            E.status === "pending" && (E.status = "fulfilled", E.value = I);
          },
          function(I) {
            E.status === "pending" && (E.status = "rejected", E.reason = I);
          }
        )), E.status) {
          case "fulfilled":
            return E.value;
          case "rejected":
            throw E.reason;
        }
    }
    throw E;
  }
  function Z(E, I, te, $, Ee) {
    var be = typeof E;
    (be === "undefined" || be === "boolean") && (E = null);
    var Oe = !1;
    if (E === null) Oe = !0;
    else
      switch (be) {
        case "bigint":
        case "string":
        case "number":
          Oe = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case i:
            case r:
              Oe = !0;
              break;
            case C:
              return Oe = E._init, Z(
                Oe(E._payload),
                I,
                te,
                $,
                Ee
              );
          }
      }
    if (Oe)
      return Ee = Ee(E), Oe = $ === "" ? "." + B(E, 0) : $, se(Ee) ? (te = "", Oe != null && (te = Oe.replace(qt, "$&/") + "/"), Z(Ee, I, te, "", function(Pt) {
        return Pt;
      })) : Ee != null && (ke(Ee) && (Ee = et(
        Ee,
        te + (Ee.key == null || E && E.key === Ee.key ? "" : ("" + Ee.key).replace(
          qt,
          "$&/"
        ) + "/") + Oe
      )), I.push(Ee)), 1;
    Oe = 0;
    var P = $ === "" ? "." : $ + ":";
    if (se(E))
      for (var oe = 0; oe < E.length; oe++)
        $ = E[oe], be = P + B($, oe), Oe += Z(
          $,
          I,
          te,
          be,
          Ee
        );
    else if (oe = q(E), typeof oe == "function")
      for (E = oe.call(E), oe = 0; !($ = E.next()).done; )
        $ = $.value, be = P + B($, oe++), Oe += Z(
          $,
          I,
          te,
          be,
          Ee
        );
    else if (be === "object") {
      if (typeof E.then == "function")
        return Z(
          L(E),
          I,
          te,
          $,
          Ee
        );
      throw I = String(E), Error(
        "Objects are not valid as a React child (found: " + (I === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : I) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Oe;
  }
  function K(E, I, te) {
    if (E == null) return E;
    var $ = [], Ee = 0;
    return Z(E, $, "", "", function(be) {
      return I.call(te, be, Ee++);
    }), $;
  }
  function ie(E) {
    if (E._status === -1) {
      var I = E._result, te = I();
      te.then(
        function($) {
          (E._status === 0 || E._status === -1) && (E._status = 1, E._result = $, te.status === void 0 && (te.status = "fulfilled", te.value = $));
        },
        function($) {
          (E._status === 0 || E._status === -1) && (E._status = 2, E._result = $, te.status === void 0 && (te.status = "rejected", te.reason = $));
        }
      ), E._status === -1 && (E._status = 0, E._result = te);
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var ce = typeof reportError == "function" ? reportError : function(E) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var I = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof E == "object" && E !== null && typeof E.message == "string" ? String(E.message) : String(E),
        error: E
      });
      if (!window.dispatchEvent(I)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", E);
      return;
    }
    console.error(E);
  };
  function Re(E) {
    var I = de.T, te = {};
    te.types = I !== null ? I.types : null, de.T = te;
    try {
      var $ = E(), Ee = de.S;
      Ee !== null && Ee(te, $), typeof $ == "object" && $ !== null && typeof $.then == "function" && $.then(ee, ce);
    } catch (be) {
      ce(be);
    } finally {
      I !== null && te.types !== null && (I.types = te.types), de.T = I;
    }
  }
  function Me(E) {
    var I = de.T;
    if (I !== null) {
      var te = I.types;
      te === null ? I.types = [E] : te.indexOf(E) === -1 && te.push(E);
    } else Re(Me.bind(null, E));
  }
  var ge = {
    map: K,
    forEach: function(E, I, te) {
      K(
        E,
        function() {
          I.apply(this, arguments);
        },
        te
      );
    },
    count: function(E) {
      var I = 0;
      return K(E, function() {
        I++;
      }), I;
    },
    toArray: function(E) {
      return K(E, function(I) {
        return I;
      }) || [];
    },
    only: function(E) {
      if (!ke(E))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return E;
    }
  };
  return ve.Activity = v, ve.Children = ge, ve.Component = ye, ve.Fragment = o, ve.Profiler = d, ve.PureComponent = G, ve.StrictMode = c, ve.Suspense = U, ve.ViewTransition = z, ve.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = de, ve.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(E) {
      return de.H.useMemoCache(E);
    }
  }, ve.addTransitionType = Me, ve.cache = function(E) {
    return function() {
      return E.apply(null, arguments);
    };
  }, ve.cacheSignal = function() {
    return null;
  }, ve.cloneElement = function(E, I, te) {
    if (E == null)
      throw Error(
        "The argument must be a React element, but you passed " + E + "."
      );
    var $ = X({}, E.props), Ee = E.key;
    if (I != null)
      for (be in I.key !== void 0 && (Ee = "" + I.key), I)
        !We.call(I, be) || be === "key" || be === "__self" || be === "__source" || be === "ref" && I.ref === void 0 || ($[be] = I[be]);
    var be = arguments.length - 2;
    if (be === 1) $.children = te;
    else if (1 < be) {
      for (var Oe = Array(be), P = 0; P < be; P++)
        Oe[P] = arguments[P + 2];
      $.children = Oe;
    }
    return Ve(E.type, Ee, $);
  }, ve.createContext = function(E) {
    return E = {
      $$typeof: g,
      _currentValue: E,
      _currentValue2: E,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, E.Provider = E, E.Consumer = {
      $$typeof: h,
      _context: E
    }, E;
  }, ve.createElement = function(E, I, te) {
    var $, Ee = {}, be = null;
    if (I != null)
      for ($ in I.key !== void 0 && (be = "" + I.key), I)
        We.call(I, $) && $ !== "key" && $ !== "__self" && $ !== "__source" && (Ee[$] = I[$]);
    var Oe = arguments.length - 2;
    if (Oe === 1) Ee.children = te;
    else if (1 < Oe) {
      for (var P = Array(Oe), oe = 0; oe < Oe; oe++)
        P[oe] = arguments[oe + 2];
      Ee.children = P;
    }
    if (E && E.defaultProps)
      for ($ in Oe = E.defaultProps, Oe)
        Ee[$] === void 0 && (Ee[$] = Oe[$]);
    return Ve(E, be, Ee);
  }, ve.createRef = function() {
    return { current: null };
  }, ve.forwardRef = function(E) {
    return { $$typeof: b, render: E };
  }, ve.isValidElement = ke, ve.lazy = function(E) {
    return {
      $$typeof: C,
      _payload: { _status: -1, _result: E },
      _init: ie
    };
  }, ve.memo = function(E, I) {
    return {
      $$typeof: w,
      type: E,
      compare: I === void 0 ? null : I
    };
  }, ve.startTransition = Re, ve.unstable_useCacheRefresh = function() {
    return de.H.useCacheRefresh();
  }, ve.use = function(E) {
    return de.H.use(E);
  }, ve.useActionState = function(E, I, te) {
    return de.H.useActionState(E, I, te);
  }, ve.useCallback = function(E, I) {
    return de.H.useCallback(E, I);
  }, ve.useContext = function(E) {
    return de.H.useContext(E);
  }, ve.useDebugValue = function() {
  }, ve.useDeferredValue = function(E, I) {
    return de.H.useDeferredValue(E, I);
  }, ve.useEffect = function(E, I) {
    return de.H.useEffect(E, I);
  }, ve.useEffectEvent = function(E) {
    return de.H.useEffectEvent(E);
  }, ve.useId = function() {
    return de.H.useId();
  }, ve.useImperativeHandle = function(E, I, te) {
    return de.H.useImperativeHandle(E, I, te);
  }, ve.useInsertionEffect = function(E, I) {
    return de.H.useInsertionEffect(E, I);
  }, ve.useLayoutEffect = function(E, I) {
    return de.H.useLayoutEffect(E, I);
  }, ve.useMemo = function(E, I) {
    return de.H.useMemo(E, I);
  }, ve.useOptimistic = function(E, I) {
    return de.H.useOptimistic(E, I);
  }, ve.useReducer = function(E, I, te) {
    return de.H.useReducer(E, I, te);
  }, ve.useRef = function(E) {
    return de.H.useRef(E);
  }, ve.useState = function(E) {
    return de.H.useState(E);
  }, ve.useSyncExternalStore = function(E, I, te) {
    return de.H.useSyncExternalStore(
      E,
      I,
      te
    );
  }, ve.useTransition = function() {
    return de.H.useTransition();
  }, ve.version = "19.3.0", ve;
}
var ov;
function Do() {
  return ov || (ov = 1, go.exports = a0()), go.exports;
}
var k = Do(), po = { exports: {} }, Qu = {}, yo = { exports: {} }, Eo = {};
var fv;
function u0() {
  return fv || (fv = 1, (function(i) {
    function r(L, Z) {
      var K = L.length;
      L.push(Z);
      e: for (; 0 < K; ) {
        var ie = K - 1 >>> 1, ce = L[ie];
        if (0 < d(ce, Z))
          L[ie] = Z, L[K] = ce, K = ie;
        else break e;
      }
    }
    function o(L) {
      return L.length === 0 ? null : L[0];
    }
    function c(L) {
      if (L.length === 0) return null;
      var Z = L[0], K = L.pop();
      if (K !== Z) {
        L[0] = K;
        e: for (var ie = 0, ce = L.length, Re = ce >>> 1; ie < Re; ) {
          var Me = 2 * (ie + 1) - 1, ge = L[Me], E = Me + 1, I = L[E];
          if (0 > d(ge, K))
            E < ce && 0 > d(I, ge) ? (L[ie] = I, L[E] = K, ie = E) : (L[ie] = ge, L[Me] = K, ie = Me);
          else if (E < ce && 0 > d(I, K))
            L[ie] = I, L[E] = K, ie = E;
          else break e;
        }
      }
      return Z;
    }
    function d(L, Z) {
      var K = L.sortIndex - Z.sortIndex;
      return K !== 0 ? K : L.id - Z.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      i.unstable_now = function() {
        return h.now();
      };
    } else {
      var g = Date, b = g.now();
      i.unstable_now = function() {
        return g.now() - b;
      };
    }
    var U = [], w = [], C = 1, v = null, z = 3, D = !1, q = !1, Y = !1, X = !1, ue = typeof setTimeout == "function" ? setTimeout : null, ye = typeof clearTimeout == "function" ? clearTimeout : null, Q = typeof setImmediate < "u" ? setImmediate : null;
    function G(L) {
      for (var Z = o(w); Z !== null; ) {
        if (Z.callback === null) c(w);
        else if (Z.startTime <= L)
          c(w), Z.sortIndex = Z.expirationTime, r(U, Z);
        else break;
        Z = o(w);
      }
    }
    function pe(L) {
      if (Y = !1, G(L), !q)
        if (o(U) !== null)
          q = !0, se || (se = !0, ke());
        else {
          var Z = o(w);
          Z !== null && B(pe, Z.startTime - L);
        }
    }
    var se = !1, ee = -1, de = 5, We = -1;
    function Ve() {
      return X ? !0 : !(i.unstable_now() - We < de);
    }
    function et() {
      if (X = !1, se) {
        var L = i.unstable_now();
        We = L;
        var Z = !0;
        try {
          e: {
            q = !1, Y && (Y = !1, ye(ee), ee = -1), D = !0;
            var K = z;
            try {
              t: {
                for (G(L), v = o(U); v !== null && !(v.expirationTime > L && Ve()); ) {
                  var ie = v.callback;
                  if (typeof ie == "function") {
                    v.callback = null, z = v.priorityLevel;
                    var ce = ie(
                      v.expirationTime <= L
                    );
                    if (L = i.unstable_now(), typeof ce == "function") {
                      v.callback = ce, G(L), Z = !0;
                      break t;
                    }
                    v === o(U) && c(U), G(L);
                  } else c(U);
                  v = o(U);
                }
                if (v !== null) Z = !0;
                else {
                  var Re = o(w);
                  Re !== null && B(
                    pe,
                    Re.startTime - L
                  ), Z = !1;
                }
              }
              break e;
            } finally {
              v = null, z = K, D = !1;
            }
            Z = void 0;
          }
        } finally {
          Z ? ke() : se = !1;
        }
      }
    }
    var ke;
    if (typeof Q == "function")
      ke = function() {
        Q(et);
      };
    else if (typeof MessageChannel < "u") {
      var Nt = new MessageChannel(), qt = Nt.port2;
      Nt.port1.onmessage = et, ke = function() {
        qt.postMessage(null);
      };
    } else
      ke = function() {
        ue(et, 0);
      };
    function B(L, Z) {
      ee = ue(function() {
        L(i.unstable_now());
      }, Z);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(L) {
      L.callback = null;
    }, i.unstable_forceFrameRate = function(L) {
      0 > L || 125 < L ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : de = 0 < L ? Math.floor(1e3 / L) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return z;
    }, i.unstable_next = function(L) {
      switch (z) {
        case 1:
        case 2:
        case 3:
          var Z = 3;
          break;
        default:
          Z = z;
      }
      var K = z;
      z = Z;
      try {
        return L();
      } finally {
        z = K;
      }
    }, i.unstable_requestPaint = function() {
      X = !0;
    }, i.unstable_runWithPriority = function(L, Z) {
      switch (L) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          L = 3;
      }
      var K = z;
      z = L;
      try {
        return Z();
      } finally {
        z = K;
      }
    }, i.unstable_scheduleCallback = function(L, Z, K) {
      var ie = i.unstable_now();
      switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? ie + K : ie) : K = ie, L) {
        case 1:
          var ce = -1;
          break;
        case 2:
          ce = 250;
          break;
        case 5:
          ce = 1073741823;
          break;
        case 4:
          ce = 1e4;
          break;
        default:
          ce = 5e3;
      }
      return ce = K + ce, L = {
        id: C++,
        callback: Z,
        priorityLevel: L,
        startTime: K,
        expirationTime: ce,
        sortIndex: -1
      }, K > ie ? (L.sortIndex = K, r(w, L), o(U) === null && L === o(w) && (Y ? (ye(ee), ee = -1) : Y = !0, B(pe, K - ie))) : (L.sortIndex = ce, r(U, L), q || D || (q = !0, se || (se = !0, ke()))), L;
    }, i.unstable_shouldYield = Ve, i.unstable_wrapCallback = function(L) {
      var Z = z;
      return function() {
        var K = z;
        z = Z;
        try {
          return L.apply(this, arguments);
        } finally {
          z = K;
        }
      };
    };
  })(Eo)), Eo;
}
var dv;
function i0() {
  return dv || (dv = 1, yo.exports = u0()), yo.exports;
}
var bo = { exports: {} }, St = {};
var hv;
function r0() {
  if (hv) return St;
  hv = 1;
  var i = Do();
  function r(C) {
    var v = "https://react.dev/errors/" + C;
    if (1 < arguments.length) {
      v += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var z = 2; z < arguments.length; z++)
        v += "&args[]=" + encodeURIComponent(arguments[z]);
    }
    return "Minified React error #" + C + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var c = {
    d: {
      f: o,
      r: function() {
        throw Error(r(522));
      },
      D: o,
      C: o,
      L: o,
      m: o,
      X: o,
      S: o,
      M: o
    },
    p: 0,
    findDOMNode: null
  }, d = /* @__PURE__ */ Symbol.for("react.portal"), h = /* @__PURE__ */ Symbol.for("react.recoverable"), g = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function b(C, v, z) {
    var D = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: D == null ? null : D === g ? g : "" + D,
      children: C,
      containerInfo: v,
      implementation: z
    };
  }
  var U = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function w(C, v) {
    if (C === "font") return "";
    if (typeof v == "string")
      return v === "use-credentials" ? v : "";
  }
  return St.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, St.browser = function(C) {
    return { $$typeof: h, _reason: C };
  }, St.createPortal = function(C, v) {
    var z = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)
      throw Error(r(299));
    return b(C, v, null, z);
  }, St.flushSync = function(C) {
    var v = U.T, z = c.p;
    try {
      if (U.T = null, c.p = 2, C) return C();
    } finally {
      U.T = v, c.p = z, c.d.f();
    }
  }, St.preconnect = function(C, v) {
    typeof C == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, c.d.C(C, v));
  }, St.prefetchDNS = function(C) {
    typeof C == "string" && c.d.D(C);
  }, St.preinit = function(C, v) {
    if (typeof C == "string" && v && typeof v.as == "string") {
      var z = v.as, D = w(z, v.crossOrigin), q = typeof v.integrity == "string" ? v.integrity : void 0, Y = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
      z === "style" ? c.d.S(
        C,
        typeof v.precedence == "string" ? v.precedence : void 0,
        {
          crossOrigin: D,
          integrity: q,
          fetchPriority: Y
        }
      ) : z === "script" && c.d.X(C, {
        crossOrigin: D,
        integrity: q,
        fetchPriority: Y,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0
      });
    }
  }, St.preinitModule = function(C, v) {
    if (typeof C == "string")
      if (typeof v == "object" && v !== null) {
        if (v.as == null || v.as === "script") {
          var z = w(
            v.as,
            v.crossOrigin
          );
          c.d.M(C, {
            crossOrigin: z,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
            nonce: typeof v.nonce == "string" ? v.nonce : void 0,
            fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0
          });
        }
      } else v == null && c.d.M(C);
  }, St.preload = function(C, v) {
    if (typeof C == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
      var z = v.as, D = w(z, v.crossOrigin);
      c.d.L(C, z, {
        crossOrigin: D,
        integrity: typeof v.integrity == "string" ? v.integrity : void 0,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0,
        type: typeof v.type == "string" ? v.type : void 0,
        fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0,
        referrerPolicy: typeof v.referrerPolicy == "string" ? v.referrerPolicy : void 0,
        imageSrcSet: typeof v.imageSrcSet == "string" ? v.imageSrcSet : void 0,
        imageSizes: typeof v.imageSizes == "string" ? v.imageSizes : void 0,
        media: typeof v.media == "string" ? v.media : void 0
      });
    }
  }, St.preloadModule = function(C, v) {
    if (typeof C == "string")
      if (v) {
        var z = w(v.as, v.crossOrigin);
        c.d.m(C, {
          as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
          crossOrigin: z,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0,
          nonce: typeof v.nonce == "string" ? v.nonce : void 0,
          fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0
        });
      } else c.d.m(C);
  }, St.requestFormReset = function(C) {
    c.d.r(C);
  }, St.unstable_batchedUpdates = function(C, v) {
    return C(v);
  }, St.useFormState = function(C, v, z) {
    return U.H.useFormState(C, v, z);
  }, St.useFormStatus = function() {
    return U.H.useHostTransitionStatus();
  }, St.version = "19.3.0", St;
}
var mv;
function c0() {
  if (mv) return bo.exports;
  mv = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (r) {
        console.error(r);
      }
  }
  return i(), bo.exports = r0(), bo.exports;
}
var vv;
function s0() {
  if (vv) return Qu;
  vv = 1;
  var i = i0(), r = Do(), o = c0();
  function c(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function d(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function h(e) {
    for (var t = e, n = t; n && !n.alternate; )
      t = n, (t.flags & 4098) !== 0 && (e = t.return), n = t.return;
    for (; t.return; ) t = t.return;
    return t.tag === 3 ? e : null;
  }
  function g(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function b(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function U(e) {
    if (h(e) !== e)
      throw Error(c(188));
  }
  function w(e) {
    var t = e.alternate;
    if (!t) {
      if (t = h(e), t === null) throw Error(c(188));
      return t !== e ? null : e;
    }
    for (var n = e, l = t; ; ) {
      var a = n.return;
      if (a === null) break;
      var u = a.alternate;
      if (u === null) {
        if (l = a.return, l !== null) {
          n = l;
          continue;
        }
        break;
      }
      if (a.child === u.child) {
        for (u = a.child; u; ) {
          if (u === n) return U(a), e;
          if (u === l) return U(a), t;
          u = u.sibling;
        }
        throw Error(c(188));
      }
      if (n.return !== l.return) n = a, l = u;
      else {
        for (var s = !1, f = a.child; f; ) {
          if (f === n) {
            s = !0, n = a, l = u;
            break;
          }
          if (f === l) {
            s = !0, l = a, n = u;
            break;
          }
          f = f.sibling;
        }
        if (!s) {
          for (f = u.child; f; ) {
            if (f === n) {
              s = !0, n = u, l = a;
              break;
            }
            if (f === l) {
              s = !0, l = u, n = a;
              break;
            }
            f = f.sibling;
          }
          if (!s) throw Error(c(189));
        }
      }
      if (n.alternate !== l) throw Error(c(190));
    }
    if (n.tag !== 3) throw Error(c(188));
    return n.stateNode.current === n ? e : t;
  }
  function C(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = C(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  function v(e, t, n, l, a, u) {
    for (; e !== null; ) {
      if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && n(e, l, a, u) || (e.tag !== 22 || e.memoizedState === null) && (t || e.tag !== 5 && e.tag !== 27) && v(
        e.child,
        t,
        n,
        l,
        a,
        u
      ))
        return !0;
      e = e.sibling;
    }
    return !1;
  }
  function z(e) {
    for (e = e.return; e !== null; ) {
      if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
      e = e.return;
    }
    return null;
  }
  function D(e) {
    var t = !1;
    for (e = e.return; e !== null && (e.tag === 4 && (t = !0), !(e.tag === 3 || e.tag === 5 || e.tag === 27)); )
      e = e.return;
    return t;
  }
  function q(e) {
    var t = [null, null], n = z(e);
    return n === null || Y(
      t,
      e,
      n.child,
      { foundSelf: !1 }
    ), t;
  }
  function Y(e, t, n, l) {
    for (; n !== null; ) {
      if (n === t) l.foundSelf = !0;
      else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
        if (l.foundSelf) return e[1] = n, !0;
        e[0] = n;
      } else if ((n.tag !== 22 || n.memoizedState === null) && Y(
        e,
        t,
        n.child,
        l
      ))
        return !0;
      n = n.sibling;
    }
    return !1;
  }
  function X(e) {
    switch (e.tag) {
      case 5:
      case 27:
      case 6:
        return e.stateNode;
      case 3:
        return e.stateNode.containerInfo;
      default:
        throw Error(c(559));
    }
  }
  var ue = null, ye = null;
  function Q(e, t, n) {
    return e === n ? !0 : e === t ? (ue = e, !0) : !1;
  }
  function G(e, t, n) {
    return e === n ? (ye = e, !1) : e === t ? (ye !== null && (ue = e), !0) : !1;
  }
  function pe(e) {
    if (e === null) return null;
    do
      e = e === null ? null : e.return;
    while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
    return e || null;
  }
  function se(e, t, n) {
    for (var l = 0, a = e; a; a = n(a)) l++;
    a = 0;
    for (var u = t; u; u = n(u)) a++;
    for (; 0 < l - a; ) e = n(e), l--;
    for (; 0 < a - l; ) t = n(t), a--;
    for (; l--; ) {
      if (e === t || t !== null && e === t.alternate)
        return e;
      e = n(e), t = n(t);
    }
    return null;
  }
  var ee = Object.assign, de = /* @__PURE__ */ Symbol.for("react.element"), We = /* @__PURE__ */ Symbol.for("react.transitional.element"), Ve = /* @__PURE__ */ Symbol.for("react.portal"), et = /* @__PURE__ */ Symbol.for("react.fragment"), ke = /* @__PURE__ */ Symbol.for("react.strict_mode"), Nt = /* @__PURE__ */ Symbol.for("react.profiler"), qt = /* @__PURE__ */ Symbol.for("react.consumer"), B = /* @__PURE__ */ Symbol.for("react.context"), L = /* @__PURE__ */ Symbol.for("react.forward_ref"), Z = /* @__PURE__ */ Symbol.for("react.suspense"), K = /* @__PURE__ */ Symbol.for("react.suspense_list"), ie = /* @__PURE__ */ Symbol.for("react.memo"), ce = /* @__PURE__ */ Symbol.for("react.lazy"), Re = /* @__PURE__ */ Symbol.for("react.activity"), Me = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), ge = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), E = /* @__PURE__ */ Symbol.for("react.view_transition"), I = /* @__PURE__ */ Symbol.for("react.recoverable"), te = Symbol.iterator;
  function $(e) {
    return e === null || typeof e != "object" ? null : (e = te && e[te] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Ee = /* @__PURE__ */ Symbol.for("react.client.reference");
  function be(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Ee ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case et:
        return "Fragment";
      case Nt:
        return "Profiler";
      case ke:
        return "StrictMode";
      case Z:
        return "Suspense";
      case K:
        return "SuspenseList";
      case Re:
        return "Activity";
      case E:
        return "ViewTransition";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case Ve:
          return "Portal";
        case B:
          return e.displayName || "Context";
        case qt:
          return (e._context.displayName || "Context") + ".Consumer";
        case L:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case ie:
          return t = e.displayName || null, t !== null ? t : be(e.type) || "Memo";
        case ce:
          t = e._payload, e = e._init;
          try {
            return be(e(t));
          } catch {
          }
      }
    return null;
  }
  var Oe = Array.isArray, P = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, oe = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Pt = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, $n = [], xn = -1;
  function Wt(e) {
    return { current: e };
  }
  function re(e) {
    0 > xn || (e.current = $n[xn], $n[xn] = null, xn--);
  }
  function Le(e, t) {
    xn++, $n[xn] = e.current, e.current = t;
  }
  var Bt = Wt(null), A = Wt(null), V = Wt(null), x = Wt(null);
  function H(e, t) {
    switch (Le(V, t), Le(A, e), Le(Bt, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? gm(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = gm(t), e = pm(t, e);
        else
          switch (e) {
            case "svg":
              e = 1;
              break;
            case "math":
              e = 2;
              break;
            default:
              e = 0;
          }
    }
    re(Bt), Le(Bt, e);
  }
  function ne() {
    re(Bt), re(A), re(V);
  }
  function ze(e) {
    var t = e.memoizedState;
    t !== null && (Va._currentValue = t.memoizedState, Le(x, e)), t = Bt.current;
    var n = pm(t, e.type);
    t !== n && (Le(A, e), Le(Bt, n));
  }
  function Ye(e) {
    A.current === e && (re(Bt), re(A)), x.current === e && (re(x), Va._currentValue = Pt);
  }
  var ht, Dt;
  function mt(e) {
    if (ht === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        ht = t && t[1] || "", Dt = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + ht + e + Dt;
  }
  var Ul = !1;
  function fn(e, t) {
    if (!e || Ul) return "";
    Ul = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var j = function() {
                throw Error();
              };
              if (Object.defineProperty(j.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(j, []);
                } catch (J) {
                  var S = J;
                }
                Reflect.construct(e, [], j);
              } else {
                try {
                  j.call();
                } catch (J) {
                  S = J;
                }
                j = !1;
                try {
                  var O = Object.getOwnPropertyDescriptor(
                    e.prototype,
                    "props"
                  );
                  Object.defineProperty(e.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), j = !0, new e();
                } finally {
                  j && (O !== void 0 ? Object.defineProperty(e.prototype, "props", O) : delete e.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (J) {
                S = J;
              }
              (j = e()) && typeof j.catch == "function" && j.catch(function() {
              });
            }
          } catch (J) {
            if (J && S && typeof J.stack == "string")
              return [J.stack, S.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var a = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      a && a.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var u = l.DetermineComponentFrameRoot(), s = u[0], f = u[1];
      if (s && f) {
        var m = s.split(`
`), _ = f.split(`
`);
        for (a = l = 0; l < m.length && !m[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; a < _.length && !_[a].includes(
          "DetermineComponentFrameRoot"
        ); )
          a++;
        if (l === m.length || a === _.length)
          for (l = m.length - 1, a = _.length - 1; 1 <= l && 0 <= a && m[l] !== _[a]; )
            a--;
        for (; 1 <= l && 0 <= a; l--, a--)
          if (m[l] !== _[a]) {
            if (l !== 1 || a !== 1)
              do
                if (l--, a--, 0 > a || m[l] !== _[a]) {
                  var R = `
` + m[l].replace(" at new ", " at ");
                  return e.displayName && R.includes("<anonymous>") && (R = R.replace("<anonymous>", e.displayName)), R;
                }
              while (1 <= l && 0 <= a);
            break;
          }
      }
    } finally {
      Ul = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? mt(n) : "";
  }
  function Dl(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return mt(e.type);
      case 16:
        return mt("Lazy");
      case 13:
        return e.child !== t && t !== null ? mt("Suspense Fallback") : mt("Suspense");
      case 19:
        return mt("SuspenseList");
      case 0:
      case 15:
        return fn(e.type, !1);
      case 11:
        return fn(e.type.render, !1);
      case 1:
        return fn(e.type, !0);
      case 31:
        return mt("Activity");
      case 30:
        return mt("ViewTransition");
      default:
        return "";
    }
  }
  function Fa(e) {
    try {
      var t = "", n = null;
      do
        t += Dl(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var dn = Object.prototype.hasOwnProperty, Br = i.unstable_scheduleCallback, Ir = i.unstable_cancelCallback, rg = i.unstable_shouldYield, cg = i.unstable_requestPaint, It = i.unstable_now, sg = i.unstable_getCurrentPriorityLevel, qo = i.unstable_ImmediatePriority, Bo = i.unstable_UserBlockingPriority, ui = i.unstable_NormalPriority, og = i.unstable_LowPriority, Io = i.unstable_IdlePriority, fg = i.log, dg = i.unstable_setDisableYieldValue, $a = null, Vt = null;
  function Pn(e) {
    if (typeof fg == "function" && dg(e), Vt && typeof Vt.setStrictMode == "function")
      try {
        Vt.setStrictMode($a, e);
      } catch {
      }
  }
  var Gt = Math.clz32 ? Math.clz32 : vg, hg = Math.log, mg = Math.LN2;
  function vg(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (hg(e) / mg | 0) | 0;
  }
  var ii = 256, ri = 262144, ci = 4194304;
  function zl(e) {
    var t = e & 42;
    if (t !== 0) return t;
    switch (e & -e) {
      case 1:
        return 1;
      case 2:
        return 2;
      case 4:
        return 4;
      case 8:
        return 8;
      case 16:
        return 16;
      case 32:
        return 32;
      case 64:
        return 64;
      case 128:
        return 128;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
        return e & -e;
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return e & 3932160;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return e & 62914560;
      case 67108864:
        return 67108864;
      case 134217728:
        return 134217728;
      case 268435456:
        return 268435456;
      case 536870912:
        return 536870912;
      case 1073741824:
        return 0;
      default:
        return e;
    }
  }
  function si(e, t, n) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var a = 0, u = e.suspendedLanes, s = e.pingedLanes;
    e = e.warmLanes;
    var f = l & 134217727;
    return f !== 0 ? (l = f & ~u, l !== 0 ? a = zl(l) : (s &= f, s !== 0 ? a = zl(s) : n || (n = f & ~e, n !== 0 && (a = zl(n))))) : (f = l & ~u, f !== 0 ? a = zl(f) : s !== 0 ? a = zl(s) : n || (n = l & ~e, n !== 0 && (a = zl(n)))), a === 0 ? 0 : t !== 0 && t !== a && (t & u) === 0 && (u = a & -a, n = t & -t, u >= n || u === 32 && (n & 4194048) !== 0) ? t : a;
  }
  function Pa(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Vo(e, t) {
    (t & 8) !== 0 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var l = 31 - Gt(n), a = 1 << l;
        t |= e[l], n &= ~a;
      }
    return t;
  }
  function gg(e, t) {
    switch (e) {
      case 1:
      case 2:
      case 4:
      case 8:
      case 64:
        return t + 250;
      case 16:
      case 32:
      case 128:
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
        return t + 5e3;
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        return -1;
      case 67108864:
      case 134217728:
      case 268435456:
      case 536870912:
      case 1073741824:
        return -1;
      default:
        return -1;
    }
  }
  function Go() {
    var e = ci;
    return ci <<= 1, (ci & 62914560) === 0 && (ci = 4194304), e;
  }
  function Vr(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Wa(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function pg(e, t, n, l, a, u) {
    var s = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var f = e.entanglements, m = e.expirationTimes, _ = e.hiddenUpdates;
    for (n = s & ~n; 0 < n; ) {
      var R = 31 - Gt(n), j = 1 << R;
      f[R] = 0, m[R] = -1;
      var S = _[R];
      if (S !== null)
        for (_[R] = null, R = 0; R < S.length; R++) {
          var O = S[R];
          O !== null && (O.lane &= -536870913);
        }
      n &= ~j;
    }
    l !== 0 && Yo(e, l, 0), u !== 0 && a === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(s & ~t));
  }
  function Yo(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - Gt(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | n & 261930;
  }
  function Xo(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var l = 31 - Gt(n), a = 1 << l;
      a & t | e[l] & t && (e[l] |= t), n &= ~a;
    }
  }
  function Qo(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : Gr(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function Gr(e) {
    switch (e) {
      case 2:
        e = 1;
        break;
      case 8:
        e = 4;
        break;
      case 32:
        e = 16;
        break;
      case 256:
      case 512:
      case 1024:
      case 2048:
      case 4096:
      case 8192:
      case 16384:
      case 32768:
      case 65536:
      case 131072:
      case 262144:
      case 524288:
      case 1048576:
      case 2097152:
      case 4194304:
      case 8388608:
      case 16777216:
      case 33554432:
        e = 128;
        break;
      case 268435456:
        e = 134217728;
        break;
      default:
        e = 0;
    }
    return e;
  }
  function Yr(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Ko() {
    var e = oe.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : ev(e.type));
  }
  function Zo(e, t) {
    var n = oe.p;
    try {
      return oe.p = e, t();
    } finally {
      oe.p = n;
    }
  }
  var Mn = Math.random().toString(36).slice(2), vt = "__reactFiber$" + Mn, zt = "__reactProps$" + Mn, ta = "__reactContainer$" + Mn, Jo = "__reactEvents$" + Mn, yg = "__reactListeners$" + Mn, Eg = "__reactHandles$" + Mn, ko = "__reactResources$" + Mn, eu = "__reactMarker$" + Mn, oi = "__reactLoad$" + Mn;
  function fi(e) {
    delete e[vt], delete e[zt], delete e[yg], delete e[Eg];
  }
  function xl(e) {
    var t;
    if (t = e[vt]) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[ta] || n[vt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = Mm(e); e !== null; ) {
            if (n = e[vt]) return n;
            e = Mm(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function na(e) {
    if (e = e[vt] || e[ta]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function tu(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(c(33));
  }
  function la(e) {
    var t = e[ko];
    return t || (t = e[ko] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function ct(e) {
    e[eu] = !0;
  }
  function Fo(e) {
    e[oi] = void 0;
  }
  var $o = /* @__PURE__ */ new Set(), Po = {};
  function Ml(e, t) {
    aa(e, t), aa(e + "Capture", t);
  }
  function aa(e, t) {
    for (Po[e] = t, e = 0; e < t.length; e++)
      $o.add(t[e]);
  }
  var bg = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Wo = {}, ef = {};
  function Sg(e) {
    return dn.call(ef, e) ? !0 : dn.call(Wo, e) ? !1 : bg.test(e) ? ef[e] = !0 : (Wo[e] = !0, !1);
  }
  var xe = !1;
  function tf() {
    var e = xe;
    return xe = !1, e;
  }
  function di(e, t, n) {
    if (Sg(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, n);
      }
  }
  function hi(e, t, n) {
    if (n === null) e.removeAttribute(t);
    else {
      switch (typeof n) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(t);
          return;
      }
      e.setAttribute(t, n);
    }
  }
  function jn(e, t, n, l) {
    if (l === null) e.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, l);
    }
  }
  function Yt(e) {
    switch (typeof e) {
      case "bigint":
      case "boolean":
      case "number":
      case "string":
      case "undefined":
        return e;
      case "object":
        return e;
      default:
        return "";
    }
  }
  function nf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Tg(e, t, n) {
    var l = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var a = l.get, u = l.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return a.call(this);
        },
        set: function(s) {
          n = "" + s, u.call(this, s);
        }
      }), Object.defineProperty(e, t, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(s) {
          n = "" + s;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function Xr(e) {
    if (!e._valueTracker) {
      var t = nf(e) ? "checked" : "value";
      e._valueTracker = Tg(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function lf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), l = "";
    return e && (l = nf(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== n ? (t.setValue(e), !0) : !1;
  }
  var Ag = /[\n"\\]/g;
  function en(e) {
    return e.replace(
      Ag,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Qr(e, t, n, l, a, u, s, f) {
    e.name = "", s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.type = s : e.removeAttribute("type"), t != null ? s === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Yt(t)) : e.value !== "" + Yt(t) && (e.value = "" + Yt(t)) : s !== "submit" && s !== "reset" || e.removeAttribute("value"), t != null ? s === "number" && e.value == t ? Kr(e, Yt(e.value)) : Kr(e, Yt(t)) : n != null ? Kr(e, Yt(n)) : l != null && e.removeAttribute("value"), a == null && u != null && (e.defaultChecked = !!u), a != null && (e.checked = a && typeof a != "function" && typeof a != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.name = "" + Yt(f) : e.removeAttribute("name");
  }
  function af(e, t, n, l, a, u, s, f) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        Xr(e);
        return;
      }
      n = n != null ? "" + Yt(n) : "", t = t != null ? "" + Yt(t) : n, f || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? a, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = f ? e.checked : !!l, e.defaultChecked = !!l, s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.name = s), Xr(e);
  }
  function Kr(e, t) {
    e.defaultValue !== "" + t && (e.defaultValue = "" + t);
  }
  function ua(e, t, n, l) {
    if (e = e.options, t) {
      t = {};
      for (var a = 0; a < n.length; a++)
        t["$" + n[a]] = !0;
      for (n = 0; n < e.length; n++)
        a = t.hasOwnProperty("$" + e[n].value), e[n].selected !== a && (e[n].selected = a), a && l && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Yt(n), t = null, a = 0; a < e.length; a++) {
        if (e[a].value === n) {
          e[a].selected = !0, l && (e[a].defaultSelected = !0);
          return;
        }
        t !== null || e[a].disabled || (t = e[a]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function uf(e, t, n) {
    if (t != null && (t = "" + Yt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Yt(n) : "";
  }
  function rf(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(c(92));
        if (Oe(l)) {
          if (1 < l.length) throw Error(c(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), t = n;
    }
    n = Yt(t), e.defaultValue = n, l = e.textContent, l === n && l !== "" && l !== null && (e.value = l), Xr(e);
  }
  function ia(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var _g = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function cf(e, t, n) {
    var l = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, n) : typeof n != "number" || n === 0 || _g.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function sf(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(c(62));
    if (e = e.style, n != null) {
      for (var l in n)
        !n.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "", xe = !0);
      for (var a in t)
        l = t[a], t.hasOwnProperty(a) && n[a] !== l && (cf(e, a, l), xe = !0);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && cf(e, u, t[u]);
  }
  function Zr(e) {
    if (e.indexOf("-") === -1) return !1;
    switch (e) {
      case "annotation-xml":
      case "color-profile":
      case "font-face":
      case "font-face-src":
      case "font-face-uri":
      case "font-face-format":
      case "font-face-name":
      case "missing-glyph":
        return !1;
      default:
        return !0;
    }
  }
  var Ng = /* @__PURE__ */ new Map([
    ["acceptCharset", "accept-charset"],
    ["htmlFor", "for"],
    ["httpEquiv", "http-equiv"],
    ["crossOrigin", "crossorigin"],
    ["accentHeight", "accent-height"],
    ["alignmentBaseline", "alignment-baseline"],
    ["arabicForm", "arabic-form"],
    ["baselineShift", "baseline-shift"],
    ["capHeight", "cap-height"],
    ["clipPath", "clip-path"],
    ["clipRule", "clip-rule"],
    ["colorInterpolation", "color-interpolation"],
    ["colorInterpolationFilters", "color-interpolation-filters"],
    ["colorProfile", "color-profile"],
    ["colorRendering", "color-rendering"],
    ["dominantBaseline", "dominant-baseline"],
    ["enableBackground", "enable-background"],
    ["fillOpacity", "fill-opacity"],
    ["fillRule", "fill-rule"],
    ["floodColor", "flood-color"],
    ["floodOpacity", "flood-opacity"],
    ["fontFamily", "font-family"],
    ["fontSize", "font-size"],
    ["fontSizeAdjust", "font-size-adjust"],
    ["fontStretch", "font-stretch"],
    ["fontStyle", "font-style"],
    ["fontVariant", "font-variant"],
    ["fontWeight", "font-weight"],
    ["glyphName", "glyph-name"],
    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
    ["glyphOrientationVertical", "glyph-orientation-vertical"],
    ["horizAdvX", "horiz-adv-x"],
    ["horizOriginX", "horiz-origin-x"],
    ["imageRendering", "image-rendering"],
    ["letterSpacing", "letter-spacing"],
    ["lightingColor", "lighting-color"],
    ["markerEnd", "marker-end"],
    ["markerMid", "marker-mid"],
    ["markerStart", "marker-start"],
    ["maskType", "mask-type"],
    ["overlinePosition", "overline-position"],
    ["overlineThickness", "overline-thickness"],
    ["paintOrder", "paint-order"],
    ["panose-1", "panose-1"],
    ["pointerEvents", "pointer-events"],
    ["renderingIntent", "rendering-intent"],
    ["shapeRendering", "shape-rendering"],
    ["stopColor", "stop-color"],
    ["stopOpacity", "stop-opacity"],
    ["strikethroughPosition", "strikethrough-position"],
    ["strikethroughThickness", "strikethrough-thickness"],
    ["strokeDasharray", "stroke-dasharray"],
    ["strokeDashoffset", "stroke-dashoffset"],
    ["strokeLinecap", "stroke-linecap"],
    ["strokeLinejoin", "stroke-linejoin"],
    ["strokeMiterlimit", "stroke-miterlimit"],
    ["strokeOpacity", "stroke-opacity"],
    ["strokeWidth", "stroke-width"],
    ["textAnchor", "text-anchor"],
    ["textDecoration", "text-decoration"],
    ["textRendering", "text-rendering"],
    ["transformOrigin", "transform-origin"],
    ["underlinePosition", "underline-position"],
    ["underlineThickness", "underline-thickness"],
    ["unicodeBidi", "unicode-bidi"],
    ["unicodeRange", "unicode-range"],
    ["unitsPerEm", "units-per-em"],
    ["vAlphabetic", "v-alphabetic"],
    ["vHanging", "v-hanging"],
    ["vIdeographic", "v-ideographic"],
    ["vMathematical", "v-mathematical"],
    ["vectorEffect", "vector-effect"],
    ["vertAdvY", "vert-adv-y"],
    ["vertOriginX", "vert-origin-x"],
    ["vertOriginY", "vert-origin-y"],
    ["wordSpacing", "word-spacing"],
    ["writingMode", "writing-mode"],
    ["xmlnsXlink", "xmlns:xlink"],
    ["xHeight", "x-height"]
  ]), Og = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function mi(e) {
    return Og.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Sn() {
  }
  var Jr = null;
  function kr(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var ra = null, ca = null;
  function of(e) {
    var t = na(e);
    if (t && (e = t.stateNode)) {
      var n = e[zt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Qr(
            e,
            n.value,
            n.defaultValue,
            n.defaultValue,
            n.checked,
            n.defaultChecked,
            n.type,
            n.name
          ), t = n.name, n.type === "radio" && t != null) {
            for (n = e; n.parentNode; ) n = n.parentNode;
            for (n = n.querySelectorAll(
              'input[name="' + en(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var a = l[zt] || null;
                if (!a) throw Error(c(90));
                Qr(
                  l,
                  a.value,
                  a.defaultValue,
                  a.defaultValue,
                  a.checked,
                  a.defaultChecked,
                  a.type,
                  a.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              l = n[t], l.form === e.form && lf(l);
          }
          break e;
        case "textarea":
          uf(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && ua(e, !!n.multiple, t, !1);
      }
    }
  }
  var Fr = !1;
  function ff(e, t, n) {
    if (Fr) return e(t, n);
    Fr = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (Fr = !1, (ra !== null || ca !== null) && (mr(), ra && (t = ra, e = ca, ca = ra = null, of(t), e)))
        for (t = 0; t < e.length; t++) of(e[t]);
    }
  }
  function nu(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[zt] || null;
    if (l === null) return null;
    n = l[t];
    e: switch (t) {
      case "onClick":
      case "onClickCapture":
      case "onDoubleClick":
      case "onDoubleClickCapture":
      case "onMouseDown":
      case "onMouseDownCapture":
      case "onMouseMove":
      case "onMouseMoveCapture":
      case "onMouseUp":
      case "onMouseUpCapture":
      case "onMouseEnter":
        (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function")
      throw Error(
        c(231, t, typeof n)
      );
    return n;
  }
  var Hn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), $r = !1;
  if (Hn)
    try {
      var lu = {};
      Object.defineProperty(lu, "passive", {
        get: function() {
          $r = !0;
        }
      }), window.addEventListener("test", lu, lu), window.removeEventListener("test", lu, lu);
    } catch {
      $r = !1;
    }
  var Wn = null, Pr = null, vi = null;
  function df() {
    if (vi) return vi;
    var e, t = Pr, n = t.length, l, a = "value" in Wn ? Wn.value : Wn.textContent, u = a.length;
    for (e = 0; e < n && t[e] === a[e]; e++) ;
    var s = n - e;
    for (l = 1; l <= s && t[n - l] === a[u - l]; l++) ;
    return vi = a.slice(e, 1 < l ? 1 - l : void 0);
  }
  function gi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function pi() {
    return !0;
  }
  function hf() {
    return !1;
  }
  function Ot(e) {
    function t(n, l, a, u, s) {
      this._reactName = n, this._targetInst = a, this.type = l, this.nativeEvent = u, this.target = s, this.currentTarget = null;
      for (var f in e)
        e.hasOwnProperty(f) && (n = e[f], this[f] = n ? n(u) : u[f]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? pi : hf, this.isPropagationStopped = hf, this;
    }
    return ee(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = pi);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = pi);
      },
      persist: function() {
      },
      isPersistent: pi
    }), t;
  }
  var el = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, yi = Ot(el), au = ee({}, el, { view: 0, detail: 0 }), wg = Ot(au), Wr, ec, uu, Ei = ee({}, au, {
    screenX: 0,
    screenY: 0,
    clientX: 0,
    clientY: 0,
    pageX: 0,
    pageY: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    getModifierState: nc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== uu && (uu && e.type === "mousemove" ? (Wr = e.screenX - uu.screenX, ec = e.screenY - uu.screenY) : ec = Wr = 0, uu = e), Wr);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : ec;
    }
  }), mf = Ot(Ei), Cg = ee({}, Ei, { dataTransfer: 0 }), Rg = Ot(Cg), Ug = ee({}, au, { relatedTarget: 0 }), tc = Ot(Ug), Dg = ee({}, el, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), zg = Ot(Dg), xg = ee({}, el, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Mg = Ot(xg), jg = ee({}, el, { data: 0 }), vf = Ot(jg), Hg = {
    Esc: "Escape",
    Spacebar: " ",
    Left: "ArrowLeft",
    Up: "ArrowUp",
    Right: "ArrowRight",
    Down: "ArrowDown",
    Del: "Delete",
    Win: "OS",
    Menu: "ContextMenu",
    Apps: "ContextMenu",
    Scroll: "ScrollLock",
    MozPrintableKey: "Unidentified"
  }, Lg = {
    8: "Backspace",
    9: "Tab",
    12: "Clear",
    13: "Enter",
    16: "Shift",
    17: "Control",
    18: "Alt",
    19: "Pause",
    20: "CapsLock",
    27: "Escape",
    32: " ",
    33: "PageUp",
    34: "PageDown",
    35: "End",
    36: "Home",
    37: "ArrowLeft",
    38: "ArrowUp",
    39: "ArrowRight",
    40: "ArrowDown",
    45: "Insert",
    46: "Delete",
    112: "F1",
    113: "F2",
    114: "F3",
    115: "F4",
    116: "F5",
    117: "F6",
    118: "F7",
    119: "F8",
    120: "F9",
    121: "F10",
    122: "F11",
    123: "F12",
    144: "NumLock",
    145: "ScrollLock",
    224: "Meta"
  }, qg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Bg(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = qg[e]) ? !!t[e] : !1;
  }
  function nc() {
    return Bg;
  }
  var Ig = ee({}, au, {
    key: function(e) {
      if (e.key) {
        var t = Hg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = gi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Lg[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: nc,
    charCode: function(e) {
      return e.type === "keypress" ? gi(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? gi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Vg = Ot(Ig), Gg = ee({}, Ei, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0
  }), gf = Ot(Gg), Yg = ee({}, el, { submitter: 0 }), Xg = Ot(Yg), Qg = ee({}, au, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: nc
  }), Kg = Ot(Qg), Zg = ee({}, el, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Jg = Ot(Zg), kg = ee({}, Ei, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Fg = Ot(kg), $g = ee({}, el, {
    newState: 0,
    oldState: 0,
    source: 0
  }), Pg = Ot($g), Wg = [9, 13, 27, 32], lc = Hn && "CompositionEvent" in window, iu = null;
  Hn && "documentMode" in document && (iu = document.documentMode);
  var ep = Hn && "TextEvent" in window && !iu, pf = Hn && (!lc || iu && 8 < iu && 11 >= iu), yf = " ", Ef = !1;
  function bf(e, t) {
    switch (e) {
      case "keyup":
        return Wg.indexOf(t.keyCode) !== -1;
      case "keydown":
        return t.keyCode !== 229;
      case "keypress":
      case "mousedown":
      case "focusout":
        return !0;
      default:
        return !1;
    }
  }
  function Sf(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var sa = !1;
  function tp(e, t) {
    switch (e) {
      case "compositionend":
        return Sf(t);
      case "keypress":
        return t.which !== 32 ? null : (Ef = !0, yf);
      case "textInput":
        return e = t.data, e === yf && Ef ? null : e;
      default:
        return null;
    }
  }
  function np(e, t) {
    if (sa)
      return e === "compositionend" || !lc && bf(e, t) ? (e = df(), vi = Pr = Wn = null, sa = !1, e) : null;
    switch (e) {
      case "paste":
        return null;
      case "keypress":
        if (!(t.ctrlKey || t.altKey || t.metaKey) || t.ctrlKey && t.altKey) {
          if (t.char && 1 < t.char.length)
            return t.char;
          if (t.which) return String.fromCharCode(t.which);
        }
        return null;
      case "compositionend":
        return pf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var lp = {
    color: !0,
    date: !0,
    datetime: !0,
    "datetime-local": !0,
    email: !0,
    month: !0,
    number: !0,
    password: !0,
    range: !0,
    search: !0,
    tel: !0,
    text: !0,
    time: !0,
    url: !0,
    week: !0
  };
  function Tf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!lp[e.type] : t === "textarea";
  }
  function Af(e, t, n, l) {
    ra ? ca ? ca.push(l) : ca = [l] : ra = l, t = br(t, "onChange"), 0 < t.length && (n = new yi(
      "onChange",
      "change",
      null,
      n,
      l
    ), e.push({ event: n, listeners: t }));
  }
  var ru = null, cu = null;
  function ap(e) {
    om(e, 0);
  }
  function bi(e) {
    var t = tu(e);
    if (lf(t)) return e;
  }
  function _f(e, t) {
    if (e === "change") return t;
  }
  var Nf = !1;
  if (Hn) {
    var ac;
    if (Hn) {
      var uc = "oninput" in document;
      if (!uc) {
        var Of = document.createElement("div");
        Of.setAttribute("oninput", "return;"), uc = typeof Of.oninput == "function";
      }
      ac = uc;
    } else ac = !1;
    Nf = ac && (!document.documentMode || 9 < document.documentMode);
  }
  function wf() {
    ru && (ru.detachEvent("onpropertychange", Cf), cu = ru = null);
  }
  function Cf(e) {
    if (e.propertyName === "value" && bi(cu)) {
      var t = [];
      Af(
        t,
        cu,
        e,
        kr(e)
      ), ff(ap, t);
    }
  }
  function up(e, t, n) {
    e === "focusin" ? (wf(), ru = t, cu = n, ru.attachEvent("onpropertychange", Cf)) : e === "focusout" && wf();
  }
  function ip(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return bi(cu);
  }
  function rp(e, t) {
    if (e === "click") return bi(t);
  }
  function cp(e, t) {
    if (e === "input" || e === "change")
      return bi(t);
  }
  function sp(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Xt = typeof Object.is == "function" ? Object.is : sp;
  function su(e, t) {
    if (Xt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var a = n[l];
      if (!dn.call(t, a) || !Xt(e[a], t[a]))
        return !1;
    }
    return !0;
  }
  function ic(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Rf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Uf(e, t) {
    var n = Rf(e);
    e = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (l = e + n.textContent.length, e <= t && l >= t)
          return { node: n, offset: t - e };
        e = l;
      }
      e: {
        for (; n; ) {
          if (n.nextSibling) {
            n = n.nextSibling;
            break e;
          }
          n = n.parentNode;
        }
        n = void 0;
      }
      n = Rf(n);
    }
  }
  function Df(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Df(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function zf(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = ic(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = ic(e.document);
    }
    return t;
  }
  function rc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var op = Hn && "documentMode" in document && 11 >= document.documentMode, oa = null, cc = null, ou = null, sc = !1;
  function xf(e, t, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    sc || oa == null || oa !== ic(l) || (l = oa, "selectionStart" in l && rc(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), ou && su(ou, l) || (ou = l, l = br(cc, "onSelect"), 0 < l.length && (t = new yi(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: l }), t.target = oa)));
  }
  function jl(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var fa = {
    animationend: jl("Animation", "AnimationEnd"),
    animationiteration: jl("Animation", "AnimationIteration"),
    animationstart: jl("Animation", "AnimationStart"),
    transitionrun: jl("Transition", "TransitionRun"),
    transitionstart: jl("Transition", "TransitionStart"),
    transitioncancel: jl("Transition", "TransitionCancel"),
    transitionend: jl("Transition", "TransitionEnd")
  }, oc = {}, Mf = {};
  Hn && (Mf = document.createElement("div").style, "AnimationEvent" in window || (delete fa.animationend.animation, delete fa.animationiteration.animation, delete fa.animationstart.animation), "TransitionEvent" in window || delete fa.transitionend.transition);
  function Hl(e) {
    if (oc[e]) return oc[e];
    if (!fa[e]) return e;
    var t = fa[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in Mf)
        return oc[e] = t[n];
    return e;
  }
  var jf = Hl("animationend"), Hf = Hl("animationiteration"), Lf = Hl("animationstart"), fp = Hl("transitionrun"), dp = Hl("transitionstart"), hp = Hl("transitioncancel"), qf = Hl("transitionend"), Bf = /* @__PURE__ */ new Map(), fc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  fc.push("scrollEnd");
  function hn(e, t) {
    Bf.set(e, t), Ml(t, [e]);
  }
  var mp = 0;
  function Ln(e, t) {
    if (e.name != null && e.name !== "auto") return e.name;
    if (t.autoName !== null) return t.autoName;
    e = pn.identifierPrefix;
    var n = mp++;
    return e = "_" + e + "t_" + n.toString(32) + "_", t.autoName = e;
  }
  function If(e) {
    if (e == null || typeof e == "string")
      return e;
    var t = null, n = Da;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var a = e[n[l]];
        if (a != null) {
          if (a === "none") return "none";
          t = t == null ? a : t + (" " + a);
        }
      }
    return t ?? e.default;
  }
  function qn(e, t) {
    return e = If(e), t = If(t), t == null ? e === "auto" ? null : e : t === "auto" ? null : t;
  }
  var Si = typeof reportError == "function" ? reportError : function(e) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var t = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof e == "object" && e !== null && typeof e.message == "string" ? String(e.message) : String(e),
        error: e
      });
      if (!window.dispatchEvent(t)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", e);
      return;
    }
    console.error(e);
  }, tn = [], da = 0, dc = 0;
  function Ti() {
    for (var e = da, t = dc = da = 0; t < e; ) {
      var n = tn[t];
      tn[t++] = null;
      var l = tn[t];
      tn[t++] = null;
      var a = tn[t];
      tn[t++] = null;
      var u = tn[t];
      if (tn[t++] = null, l !== null && a !== null) {
        var s = l.pending;
        s === null ? a.next = a : (a.next = s.next, s.next = a), l.pending = a;
      }
      u !== 0 && Vf(n, a, u);
    }
  }
  function Ai(e, t, n, l) {
    tn[da++] = e, tn[da++] = t, tn[da++] = n, tn[da++] = l, dc |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function hc(e, t, n, l) {
    return Ai(e, t, n, l), _i(e);
  }
  function Ll(e, t) {
    return Ai(e, null, null, t), _i(e);
  }
  function Vf(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var a = !1, u = e.return; u !== null; )
      u.childLanes |= n, l = u.alternate, l !== null && (l.childLanes |= n), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (a = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, a && t !== null && (a = 31 - Gt(n), e = u.hiddenUpdates, l = e[a], l === null ? e[a] = [t] : l.push(t), t.lane = n | 536870912), u) : null;
  }
  function _i(e) {
    if (50 < zu)
      throw zu = 0, hr = null, Error(c(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ha = {};
  function vp(e, t, n, l) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function xt(e, t, n, l) {
    return new vp(e, t, n, l);
  }
  function mc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Bn(e, t) {
    var n = e.alternate;
    return n === null ? (n = xt(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 1206910976, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function Gf(e, t) {
    e.flags &= 1206910978;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Ni(e, t, n, l, a, u) {
    var s = 0;
    if (l = e, typeof l == "function") mc(l) && (s = 1);
    else if (typeof l == "string")
      s = Yy(
        e,
        n,
        Bt.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (l) {
        case Re:
          return e = xt(31, n, t, a), e.elementType = Re, e.lanes = u, e;
        case et:
          return ql(n.children, a, u, t);
        case ke:
          s = 8, a |= 24;
          break;
        case Nt:
          return e = xt(12, n, t, a | 2), e.elementType = Nt, e.lanes = u, e;
        case Z:
          return e = xt(13, n, t, a), e.elementType = Z, e.lanes = u, e;
        case K:
          return e = xt(19, n, t, a), e.elementType = K, e.lanes = u, e;
        case Me:
        case E:
          return e = a | 32, e = xt(30, n, t, e), e.elementType = E, e.lanes = u, e.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, e;
        default:
          if (typeof l == "object" && l !== null)
            switch (l.$$typeof) {
              case B:
                s = 10;
                break e;
              case qt:
                s = 9;
                break e;
              case L:
                s = 11;
                break e;
              case ie:
                s = 14;
                break e;
              case ce:
                s = 16, l = null;
                break e;
            }
          s = 29, n = Error(
            c(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = xt(s, n, t, a), t.elementType = e, t.type = l, t.lanes = u, t;
  }
  function ql(e, t, n, l) {
    return e = xt(7, e, l, t), e.lanes = n, e;
  }
  function vc(e, t, n) {
    return e = xt(6, e, null, t), e.lanes = n, e;
  }
  function Yf(e) {
    var t = xt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function gc(e, t, n) {
    return t = xt(
      4,
      e.children !== null ? e.children : [],
      e.key,
      t
    ), t.lanes = n, t.stateNode = {
      containerInfo: e.containerInfo,
      pendingChildren: null,
      implementation: e.implementation
    }, t;
  }
  var Xf = /* @__PURE__ */ new WeakMap();
  function nn(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = Xf.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: Fa(t)
      }, Xf.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Fa(t)
    };
  }
  var ma = [], va = 0, Oi = null, fu = 0, ln = [], an = 0, tl = null, Tn = 1, An = "";
  function In(e, t) {
    ma[va++] = fu, ma[va++] = Oi, Oi = e, fu = t;
  }
  function Qf(e, t, n) {
    ln[an++] = Tn, ln[an++] = An, ln[an++] = tl, tl = e;
    var l = Tn;
    e = An;
    var a = 32 - Gt(l) - 1;
    l &= ~(1 << a), n += 1;
    var u = 32 - Gt(t) + a;
    if (30 < u) {
      var s = a - a % 5;
      u = (l & (1 << s) - 1).toString(32), l >>= s, a -= s, Tn = 1 << 32 - Gt(t) + a | n << a | l, An = u + e;
    } else
      Tn = 1 << u | n << a | l, An = e;
  }
  function wi(e) {
    e.return !== null && (In(e, 1), Qf(e, 1, 0));
  }
  function pc(e) {
    for (; e === Oi; )
      Oi = ma[--va], ma[va] = null, fu = ma[--va], ma[va] = null;
    for (; e === tl; )
      tl = ln[--an], ln[an] = null, An = ln[--an], ln[an] = null, Tn = ln[--an], ln[an] = null;
  }
  function Kf(e, t) {
    ln[an++] = Tn, ln[an++] = An, ln[an++] = tl, Tn = t.id, An = t.overflow, tl = e;
  }
  var st = null, Qe = null, Ae = !1, nl = null, un = !1, yc = Error(c(519));
  function ll(e) {
    var t = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw du(nn(t, e)), yc;
  }
  function Zf(e) {
    var t = e.stateNode, n = e.type, l = e.memoizedProps;
    switch (t[vt] = e, t[zt] = l, n) {
      case "dialog":
        Ne("cancel", t), Ne("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ne("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Mu.length; n++)
          Ne(Mu[n], t);
        break;
      case "source":
        Ne("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Ne("error", t), Ne("load", t);
        break;
      case "details":
        Ne("toggle", t);
        break;
      case "input":
        Ne("invalid", t), af(
          t,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        );
        break;
      case "select":
        Ne("invalid", t);
        break;
      case "textarea":
        Ne("invalid", t), rf(t, l.value, l.defaultValue, l.children);
    }
    n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || l.suppressHydrationWarning === !0 || mm(t.textContent, n) ? (l.popover != null && (Ne("beforetoggle", t), Ne("toggle", t)), l.onScroll != null && Ne("scroll", t), l.onScrollEnd != null && Ne("scrollend", t), l.onClick != null && (t.onclick = Sn), t = !0) : t = !1, t || ll(e, !0);
  }
  function Ci(e) {
    for (st = e.return; st; )
      switch (st.tag) {
        case 5:
        case 31:
        case 13:
          un = !1;
          return;
        case 27:
        case 3:
          un = !0;
          return;
        default:
          st = st.return;
      }
  }
  function ga(e) {
    if (e !== st) return !1;
    if (!Ae) return Ci(e), Ae = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Js(e.type, e.memoizedProps)), n = !n), n && Qe && ll(e), Ci(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Qe = xm(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Qe = xm(e);
    } else
      t === 27 ? (t = Qe, El(e.type) ? (e = lo, lo = null, Qe = e) : Qe = t) : Qe = st ? cn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Bl() {
    Qe = st = null, Ae = !1;
  }
  function Ec() {
    var e = nl;
    return e !== null && (Ht === null ? Ht = e : Ht.push.apply(
      Ht,
      e
    ), nl = null), e;
  }
  function du(e) {
    nl === null ? nl = [e] : nl.push(e);
  }
  var bc = Wt(null), Il = null, Vn = null;
  function al(e, t, n) {
    Le(bc, t._currentValue), t._currentValue = n;
  }
  function Gn(e) {
    e._currentValue = bc.current, re(bc);
  }
  function Ri(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Sc(e, t, n, l) {
    var a = e.child;
    for (a !== null && (a.return = e); a !== null; ) {
      var u = a.dependencies;
      if (u !== null) {
        var s = a.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var f = u;
          u = a;
          for (var m = 0; m < t.length; m++)
            if (f.context === t[m]) {
              u.lanes |= n, f = u.alternate, f !== null && (f.lanes |= n), Ri(
                u.return,
                n,
                e
              ), l || (s = null);
              break e;
            }
          u = f.next;
        }
      } else if (a.tag === 18) {
        if (s = a.return, s === null) throw Error(c(341));
        s.lanes |= n, u = s.alternate, u !== null && (u.lanes |= n), Ri(s, n, e), s = null;
      } else
        a.tag === 13 && a.memoizedState !== null && a.memoizedState.dehydrated === null ? (a.lanes |= n, s = a.alternate, s !== null && (s.lanes |= n), Ri(
          a.return,
          n,
          e
        ), s = a.child, s = s !== null ? s.sibling : null) : s = a.child;
      if (s !== null) s.return = a;
      else
        for (s = a; s !== null; ) {
          if (s === e) {
            s = null;
            break;
          }
          if (a = s.sibling, a !== null) {
            a.return = s.return, s = a;
            break;
          }
          s = s.return;
        }
      a = s;
    }
  }
  function Vl(e, t, n, l) {
    e = null;
    for (var a = t, u = !1; a !== null; ) {
      if (!u) {
        if ((a.flags & 524288) !== 0) u = !0;
        else if ((a.flags & 262144) !== 0) break;
      }
      if (a.tag === 10) {
        var s = a.alternate;
        if (s === null) throw Error(c(387));
        if (s = s.memoizedProps, s !== null) {
          var f = a.type;
          Xt(a.pendingProps.value, s.value) || (e !== null ? e.push(f) : e = [f]);
        }
      } else if (a === x.current) {
        if (s = a.alternate, s === null) throw Error(c(387));
        s.memoizedState.memoizedState !== a.memoizedState.memoizedState && (e !== null ? e.push(Va) : e = [Va]);
      }
      a = a.return;
    }
    return e !== null && Sc(
      t,
      e,
      n,
      l
    ), t.flags |= 262144, e !== null;
  }
  function Ui(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Xt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Gl(e) {
    Il = e, Vn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function gt(e) {
    return Jf(Il, e);
  }
  function Di(e, t) {
    return Il === null && Gl(e), Jf(e, t);
  }
  function Jf(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, Vn === null) {
      if (e === null) throw Error(c(308));
      Vn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Vn = Vn.next = t;
    return n;
  }
  var gp = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(n, l) {
        e.push(l);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(n) {
        return n();
      });
    };
  }, pp = i.unstable_scheduleCallback, yp = i.unstable_NormalPriority, tt = {
    $$typeof: B,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Tc() {
    return {
      controller: new gp(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function hu(e) {
    e.refCount--, e.refCount === 0 && pp(yp, function() {
      e.controller.abort();
    });
  }
  function kf(e, t) {
    if ((e.pendingLanes & 4194048) !== 0) {
      var n = e.transitionTypes;
      for (n === null && (n = e.transitionTypes = []), e = 0; e < t.length; e++) {
        var l = t[e];
        n.indexOf(l) === -1 && n.push(l);
      }
    }
  }
  var mu = null;
  function Ep(e) {
    var t = e.transitionTypes;
    return e.transitionTypes = null, t;
  }
  var vu = null, Ac = 0, Yl = 0, pa = null;
  function bp(e, t) {
    if (vu === null) {
      var n = vu = [];
      Ac = 0, Yl = Bs(), pa = {
        status: "pending",
        value: void 0,
        then: function(l) {
          n.push(l);
        }
      };
    }
    return Ac++, t.then(Ff, Ff), t;
  }
  function Ff() {
    if (--Ac === 0 && (mu = null, vu !== null)) {
      pa !== null && (pa.status = "fulfilled");
      var e = vu;
      vu = null, Yl = 0, pa = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Sp(e, t) {
    var n = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(a) {
        n.push(a);
      }
    };
    return e.then(
      function() {
        l.status = "fulfilled", l.value = t;
        for (var a = 0; a < n.length; a++) (0, n[a])(t);
      },
      function(a) {
        for (l.status = "rejected", l.reason = a, a = 0; a < n.length; a++)
          (0, n[a])(void 0);
      }
    ), l;
  }
  var $f = P.S;
  P.S = function(e, t) {
    if (Yh = It(), typeof t == "object" && t !== null && typeof t.then == "function" && bp(e, t), mu !== null)
      for (var n = ja; n !== null; )
        kf(n, mu), n = n.next;
    if (n = e.types, n !== null) {
      for (var l = ja; l !== null; )
        kf(l, n), l = l.next;
      if (Yl !== 0) {
        l = mu, l === null && (l = mu = []);
        for (var a = 0; a < n.length; a++) {
          var u = n[a];
          l.indexOf(u) === -1 && l.push(u);
        }
      }
    }
    $f !== null && $f(e, t);
  };
  var Xl = Wt(null);
  function _c() {
    var e = Xl.current;
    return e !== null ? e : Xe.pooledCache;
  }
  function zi(e, t) {
    t === null ? Le(Xl, Xl.current) : Le(Xl, t.pool);
  }
  function Pf() {
    var e = _c();
    return e === null ? null : { parent: tt._currentValue, pool: e };
  }
  var ya = Error(c(460)), Nc = Error(c(474)), xi = Error(c(542)), Mi = { then: function() {
  } };
  function Wf(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function ed(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Sn, Sn), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, nd(e), e === void 0 && !("reason" in t) ? Error(c(600)) : e;
      default:
        if (typeof t.status == "string") t.then(Sn, Sn);
        else {
          if (e = Xe, e !== null && 100 < e.shellSuspendCounter)
            throw Error(c(482));
          e = t, e.status = "pending", e.then(
            function(l) {
              if (t.status === "pending") {
                var a = t;
                a.status = "fulfilled", a.value = l;
              }
            },
            function(l) {
              if (t.status === "pending") {
                var a = t;
                a.status = "rejected", a.reason = l;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, nd(e), e;
        }
        throw Kl = t, ya;
    }
  }
  function Ql(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (Kl = n, ya) : n;
    }
  }
  var Kl = null;
  function td() {
    if (Kl === null) throw Error(c(459));
    var e = Kl;
    return Kl = null, e;
  }
  function nd(e) {
    if (e === ya || e === xi)
      throw Error(c(483));
  }
  var Ea = null, gu = 0;
  function ji(e) {
    var t = gu;
    return gu += 1, Ea === null && (Ea = []), ed(Ea, e, t);
  }
  function ul(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Hi(e, t) {
    throw t.$$typeof === de ? Error(c(525)) : (e = Object.prototype.toString.call(t), Error(
      c(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function ld(e) {
    function t(T, p) {
      if (e) {
        var N = T.deletions;
        N === null ? (T.deletions = [p], T.flags |= 16) : N.push(p);
      }
    }
    function n(T, p) {
      if (!e) return null;
      for (; p !== null; )
        t(T, p), p = p.sibling;
      return null;
    }
    function l(T) {
      for (var p = /* @__PURE__ */ new Map(); T !== null; )
        T.key === null ? p.set(T.index, T) : p.set(T.key, T), T = T.sibling;
      return p;
    }
    function a(T, p) {
      return T = Bn(T, p), T.index = 0, T.sibling = null, T;
    }
    function u(T, p, N) {
      return T.index = N, e ? (N = T.alternate, N !== null ? (N = N.index, N < p ? (T.flags |= 2, p) : N) : (T.flags |= 134217730, p)) : (T.flags |= 1048576, p);
    }
    function s(T) {
      return e && T.alternate === null && (T.flags |= 134217730), T;
    }
    function f(T, p, N, M) {
      return p === null || p.tag !== 6 ? (p = vc(N, T.mode, M), p.return = T, p) : (p = a(p, N), p.return = T, p);
    }
    function m(T, p, N, M) {
      var F = N.type;
      return F === et ? (T = R(
        T,
        p,
        N.props.children,
        M,
        N.key
      ), ul(T, N), T) : p !== null && (p.elementType === F || typeof F == "object" && F !== null && F.$$typeof === ce && Ql(F) === p.type) ? (p = a(p, N.props), ul(p, N), p.return = T, p) : (p = Ni(
        N.type,
        N.key,
        N.props,
        null,
        T.mode,
        M
      ), ul(p, N), p.return = T, p);
    }
    function _(T, p, N, M) {
      return p === null || p.tag !== 4 || p.stateNode.containerInfo !== N.containerInfo || p.stateNode.implementation !== N.implementation ? (p = gc(N, T.mode, M), p.return = T, p) : (p = a(p, N.children || []), p.return = T, p);
    }
    function R(T, p, N, M, F) {
      return p === null || p.tag !== 7 ? (p = ql(
        N,
        T.mode,
        M,
        F
      ), p.return = T, p) : (p = a(p, N), p.return = T, p);
    }
    function j(T, p, N) {
      if (typeof p == "string" && p !== "" || typeof p == "number" || typeof p == "bigint")
        return p = vc(
          "" + p,
          T.mode,
          N
        ), p.return = T, p;
      if (typeof p == "object" && p !== null) {
        switch (p.$$typeof) {
          case We:
            return N = Ni(
              p.type,
              p.key,
              p.props,
              null,
              T.mode,
              N
            ), ul(N, p), N.return = T, N;
          case Ve:
            return p = gc(
              p,
              T.mode,
              N
            ), p.return = T, p;
          case ce:
            return p = Ql(p), j(T, p, N);
        }
        if (Oe(p) || $(p))
          return p = ql(
            p,
            T.mode,
            N,
            null
          ), p.return = T, p;
        if (typeof p.then == "function")
          return j(T, ji(p), N);
        if (p.$$typeof === B)
          return j(
            T,
            Di(T, p),
            N
          );
        Hi(T, p);
      }
      return null;
    }
    function S(T, p, N, M) {
      var F = p !== null ? p.key : null;
      if (typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint")
        return F !== null ? null : f(T, p, "" + N, M);
      if (typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case We:
            return N.key === F ? m(T, p, N, M) : null;
          case Ve:
            return N.key === F ? _(T, p, N, M) : null;
          case ce:
            return N = Ql(N), S(T, p, N, M);
        }
        if (Oe(N) || $(N))
          return F !== null ? null : R(T, p, N, M, null);
        if (typeof N.then == "function")
          return S(
            T,
            p,
            ji(N),
            M
          );
        if (N.$$typeof === B)
          return S(
            T,
            p,
            Di(T, N),
            M
          );
        Hi(T, N);
      }
      return null;
    }
    function O(T, p, N, M, F) {
      if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
        return T = T.get(N) || null, f(p, T, "" + M, F);
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case We:
            return T = T.get(
              M.key === null ? N : M.key
            ) || null, m(p, T, M, F);
          case Ve:
            return T = T.get(
              M.key === null ? N : M.key
            ) || null, _(p, T, M, F);
          case ce:
            return M = Ql(M), O(
              T,
              p,
              N,
              M,
              F
            );
        }
        if (Oe(M) || $(M))
          return T = T.get(N) || null, R(p, T, M, F, null);
        if (typeof M.then == "function")
          return O(
            T,
            p,
            N,
            ji(M),
            F
          );
        if (M.$$typeof === B)
          return O(
            T,
            p,
            N,
            Di(p, M),
            F
          );
        Hi(p, M);
      }
      return null;
    }
    function J(T, p, N, M) {
      for (var F = null, Ce = null, ae = p, fe = p = 0, at = null; ae !== null && fe < N.length; fe++) {
        ae.index > fe ? (at = ae, ae = null) : at = ae.sibling;
        var Ue = S(
          T,
          ae,
          N[fe],
          M
        );
        if (Ue === null) {
          ae === null && (ae = at);
          break;
        }
        e && ae && Ue.alternate === null && t(T, ae), p = u(Ue, p, fe), Ce === null ? F = Ue : Ce.sibling = Ue, Ce = Ue, ae = at;
      }
      if (fe === N.length)
        return n(T, ae), Ae && In(T, fe), F;
      if (ae === null) {
        for (; fe < N.length; fe++)
          ae = j(T, N[fe], M), ae !== null && (p = u(
            ae,
            p,
            fe
          ), Ce === null ? F = ae : Ce.sibling = ae, Ce = ae);
        return Ae && In(T, fe), F;
      }
      for (ae = l(ae); fe < N.length; fe++)
        at = O(
          ae,
          T,
          fe,
          N[fe],
          M
        ), at !== null && (e && (Ue = at.alternate, Ue !== null && ae.delete(Ue.key === null ? fe : Ue.key)), p = u(
          at,
          p,
          fe
        ), Ce === null ? F = at : Ce.sibling = at, Ce = at);
      return e && ae.forEach(function(_l) {
        return t(T, _l);
      }), Ae && In(T, fe), F;
    }
    function W(T, p, N, M) {
      if (N == null) throw Error(c(151));
      for (var F = null, Ce = null, ae = p, fe = p = 0, at = null, Ue = N.next(); ae !== null && !Ue.done; fe++, Ue = N.next()) {
        ae.index > fe ? (at = ae, ae = null) : at = ae.sibling;
        var _l = S(T, ae, Ue.value, M);
        if (_l === null) {
          ae === null && (ae = at);
          break;
        }
        e && ae && _l.alternate === null && t(T, ae), p = u(_l, p, fe), Ce === null ? F = _l : Ce.sibling = _l, Ce = _l, ae = at;
      }
      if (Ue.done)
        return n(T, ae), Ae && In(T, fe), F;
      if (ae === null) {
        for (; !Ue.done; fe++, Ue = N.next())
          Ue = j(T, Ue.value, M), Ue !== null && (p = u(Ue, p, fe), Ce === null ? F = Ue : Ce.sibling = Ue, Ce = Ue);
        return Ae && In(T, fe), F;
      }
      for (ae = l(ae); !Ue.done; fe++, Ue = N.next())
        Ue = O(ae, T, fe, Ue.value, M), Ue !== null && (e && (at = Ue.alternate, at !== null && ae.delete(
          at.key === null ? fe : at.key
        )), p = u(Ue, p, fe), Ce === null ? F = Ue : Ce.sibling = Ue, Ce = Ue);
      return e && ae.forEach(function(t0) {
        return t(T, t0);
      }), Ae && In(T, fe), F;
    }
    function Te(T, p, N, M) {
      if (typeof N == "object" && N !== null && N.type === et && N.key === null && N.props.ref === void 0 && (N = N.props.children), typeof N == "object" && N !== null) {
        switch (N.$$typeof) {
          case We:
            e: {
              for (var F = N.key; p !== null; ) {
                if (p.key === F) {
                  if (F = N.type, F === et) {
                    if (p.tag === 7) {
                      n(
                        T,
                        p.sibling
                      ), M = a(
                        p,
                        N.props.children
                      ), ul(M, N), M.return = T, T = M;
                      break e;
                    }
                  } else if (p.elementType === F || typeof F == "object" && F !== null && F.$$typeof === ce && Ql(F) === p.type) {
                    n(
                      T,
                      p.sibling
                    ), M = a(p, N.props), ul(M, N), M.return = T, T = M;
                    break e;
                  }
                  n(T, p);
                  break;
                } else t(T, p);
                p = p.sibling;
              }
              N.type === et ? (M = ql(
                N.props.children,
                T.mode,
                M,
                N.key
              ), ul(M, N), M.return = T, T = M) : (M = Ni(
                N.type,
                N.key,
                N.props,
                null,
                T.mode,
                M
              ), ul(M, N), M.return = T, T = M);
            }
            return s(T);
          case Ve:
            e: {
              for (F = N.key; p !== null; ) {
                if (p.key === F)
                  if (p.tag === 4 && p.stateNode.containerInfo === N.containerInfo && p.stateNode.implementation === N.implementation) {
                    n(
                      T,
                      p.sibling
                    ), M = a(p, N.children || []), M.return = T, T = M;
                    break e;
                  } else {
                    n(T, p);
                    break;
                  }
                else t(T, p);
                p = p.sibling;
              }
              M = gc(N, T.mode, M), M.return = T, T = M;
            }
            return s(T);
          case ce:
            return N = Ql(N), Te(
              T,
              p,
              N,
              M
            );
        }
        if (Oe(N))
          return J(
            T,
            p,
            N,
            M
          );
        if ($(N)) {
          if (F = $(N), typeof F != "function") throw Error(c(150));
          return N = F.call(N), W(
            T,
            p,
            N,
            M
          );
        }
        if (typeof N.then == "function")
          return Te(
            T,
            p,
            ji(N),
            M
          );
        if (N.$$typeof === B)
          return Te(
            T,
            p,
            Di(T, N),
            M
          );
        Hi(T, N);
      }
      return typeof N == "string" && N !== "" || typeof N == "number" || typeof N == "bigint" ? (N = "" + N, p !== null && p.tag === 6 ? (n(T, p.sibling), M = a(p, N), M.return = T, T = M) : (n(T, p), M = vc(N, T.mode, M), M.return = T, T = M), s(T)) : n(T, p);
    }
    return function(T, p, N, M) {
      try {
        gu = 0;
        var F = Te(
          T,
          p,
          N,
          M
        );
        return Ea = null, F;
      } catch (ae) {
        if (ae === ya || ae === xi) throw ae;
        var Ce = xt(29, ae, null, T.mode);
        return Ce.lanes = M, Ce.return = T, Ce;
      }
    };
  }
  var Zl = ld(!0), ad = ld(!1), il = !1;
  function Oc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function wc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function rl(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function cl(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (je & 2) !== 0) {
      var a = l.pending;
      return a === null ? t.next = t : (t.next = a.next, a.next = t), l.pending = t, t = _i(e), Vf(e, null, n), t;
    }
    return Ai(e, l, t, n), _i(e);
  }
  function pu(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, Xo(e, n);
    }
  }
  function Cc(e, t) {
    var n = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, n === l)) {
      var a = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var s = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          u === null ? a = u = s : u = u.next = s, n = n.next;
        } while (n !== null);
        u === null ? a = u = t : u = u.next = t;
      } else a = u = t;
      n = {
        baseState: l.baseState,
        firstBaseUpdate: a,
        lastBaseUpdate: u,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  var Rc = !1;
  function yu() {
    if (Rc) {
      var e = pa;
      if (e !== null) throw e;
    }
  }
  function Eu(e, t, n, l) {
    Rc = !1;
    var a = e.updateQueue;
    il = !1;
    var u = a.firstBaseUpdate, s = a.lastBaseUpdate, f = a.shared.pending;
    if (f !== null) {
      a.shared.pending = null;
      var m = f, _ = m.next;
      m.next = null, s === null ? u = _ : s.next = _, s = m;
      var R = e.alternate;
      R !== null && (R = R.updateQueue, f = R.lastBaseUpdate, f !== s && (f === null ? R.firstBaseUpdate = _ : f.next = _, R.lastBaseUpdate = m));
    }
    if (u !== null) {
      var j = a.baseState;
      s = 0, R = _ = m = null, f = u;
      do {
        var S = f.lane & -536870913, O = S !== f.lane;
        if (O ? (we & S) === S : (l & S) === S) {
          S !== 0 && S === Yl && (Rc = !0), R !== null && (R = R.next = {
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: null,
            next: null
          });
          e: {
            var J = e, W = f;
            S = t;
            var Te = n;
            switch (W.tag) {
              case 1:
                if (J = W.payload, typeof J == "function") {
                  j = J.call(Te, j, S);
                  break e;
                }
                j = J;
                break e;
              case 3:
                J.flags = J.flags & -65537 | 128;
              case 0:
                if (J = W.payload, S = typeof J == "function" ? J.call(Te, j, S) : J, S == null) break e;
                j = ee({}, j, S);
                break e;
              case 2:
                il = !0;
            }
          }
          S = f.callback, S !== null && (e.flags |= 64, O && (e.flags |= 8192), O = a.callbacks, O === null ? a.callbacks = [S] : O.push(S));
        } else
          O = {
            lane: S,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          }, R === null ? (_ = R = O, m = j) : R = R.next = O, s |= S;
        if (f = f.next, f === null) {
          if (f = a.shared.pending, f === null)
            break;
          O = f, f = O.next, O.next = null, a.lastBaseUpdate = O, a.shared.pending = null;
        }
      } while (!0);
      R === null && (m = j), a.baseState = m, a.firstBaseUpdate = _, a.lastBaseUpdate = R, u === null && (a.shared.lanes = 0), vl |= s, e.lanes = s, e.memoizedState = j;
    }
  }
  function ud(e, t) {
    if (typeof e != "function")
      throw Error(c(191, e));
    e.call(t);
  }
  function id(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        ud(n[e], t);
  }
  var sl = Wt(null), Li = Wt(0);
  function rd(e, t) {
    e = Zn, Le(Li, e), Le(sl, t), Zn = e | t.baseLanes;
  }
  function Uc() {
    Le(Li, Zn), Le(sl, sl.current);
  }
  function Dc() {
    Zn = Li.current, re(sl), re(Li);
  }
  var pt = Wt(null), At = null;
  function ol(e) {
    var t = e.alternate;
    Le(yt, yt.current & 1), Le(pt, e), At === null && (t === null || sl.current !== null || t.memoizedState !== null) && (At = e);
  }
  function zc(e) {
    Le(yt, yt.current), Le(pt, e), At === null && (At = e);
  }
  function cd(e) {
    e.tag === 22 ? (Le(yt, yt.current), Le(pt, e), At === null && (At = e)) : fl();
  }
  function fl() {
    Le(yt, yt.current), Le(pt, pt.current);
  }
  function Qt(e) {
    re(pt), At === e && (At = null), re(yt);
  }
  var yt = Wt(0);
  function bu(e, t) {
    Le(pt, pt.current), Le(yt, t);
  }
  function xc(e) {
    re(yt), re(pt), At === e && (At = null);
  }
  function qi(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || to(n) || no(n)))
          return t;
      } else if (t.tag === 19 && t.memoizedProps.revealOrder !== "independent") {
        if ((t.flags & 128) !== 0) return t;
      } else if (t.child !== null) {
        t.child.return = t, t = t.child;
        continue;
      }
      if (t === e) break;
      for (; t.sibling === null; ) {
        if (t.return === null || t.return === e) return null;
        t = t.return;
      }
      t.sibling.return = t.return, t = t.sibling;
    }
    return null;
  }
  var Yn = 0, Se = null, Ge = null, nt = null, Bi = !1, ba = !1, Jl = !1, Ii = 0, Su = 0, Sa = null, Tp = 0;
  function Fe() {
    throw Error(c(321));
  }
  function Mc(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Xt(e[n], t[n])) return !1;
    return !0;
  }
  function jc(e, t, n, l, a, u) {
    return Yn = u, Se = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, P.H = e === null || e.memoizedState === null ? Qd : Kd, Jl = !1, u = n(l, a), Jl = !1, ba && (u = od(
      t,
      n,
      l,
      a
    )), sd(e), u;
  }
  function sd(e) {
    P.H = Zi;
    var t = Ge !== null && Ge.next !== null;
    if (Yn = 0, nt = Ge = Se = null, Bi = !1, Su = 0, Sa = null, t) throw Error(c(300));
    e === null || lt || (e = e.dependencies, e !== null && Ui(e) && (lt = !0));
  }
  function od(e, t, n, l) {
    Se = e;
    var a = 0;
    do {
      if (ba && (Sa = null), Su = 0, ba = !1, 25 <= a) throw Error(c(301));
      if (a += 1, nt = Ge = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      P.H = Up, u = t(n, l);
    } while (ba);
    return u;
  }
  function Ap() {
    var e = P.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Tu(t) : t, e = e.useState()[0], (Ge !== null ? Ge.memoizedState : null) !== e && (Se.flags |= 1024), t;
  }
  function Hc() {
    var e = Ii !== 0;
    return Ii = 0, e;
  }
  function Lc(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function qc(e) {
    if (Bi) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Bi = !1;
    }
    Yn = 0, nt = Ge = Se = null, ba = !1, Su = Ii = 0, Sa = null;
  }
  function wt() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return nt === null ? Se.memoizedState = nt = e : nt = nt.next = e, nt;
  }
  function Pe() {
    if (Ge === null) {
      var e = Se.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ge.next;
    var t = nt === null ? Se.memoizedState : nt.next;
    if (t !== null)
      nt = t, Ge = e;
    else {
      if (e === null)
        throw Se.alternate === null ? Error(c(467)) : Error(c(310));
      Ge = e, e = {
        memoizedState: Ge.memoizedState,
        baseState: Ge.baseState,
        baseQueue: Ge.baseQueue,
        queue: Ge.queue,
        next: null
      }, nt === null ? Se.memoizedState = nt = e : nt = nt.next = e;
    }
    return nt;
  }
  function Vi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Tu(e) {
    var t = Su;
    return Su += 1, Sa === null && (Sa = []), e = ed(Sa, e, t), t = Se, (nt === null ? t.memoizedState : nt.next) === null && (t = t.alternate, P.H = t === null || t.memoizedState === null ? Qd : Kd), e;
  }
  function Gi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Tu(e);
      if (e.$$typeof === I) return;
      if (e.$$typeof === B) return gt(e);
    }
    throw Error(c(438, String(e)));
  }
  function Bc(e) {
    var t = null, n = Se.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var l = Se.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(a) {
          return a.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = Vi(), Se.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++)
        n[l] = ge;
    return t.index++, n;
  }
  function Xn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Yi(e) {
    var t = Pe();
    return Ic(t, Ge, e);
  }
  function Ic(e, t, n) {
    var l = e.queue;
    if (l === null) throw Error(c(311));
    l.lastRenderedReducer = n;
    var a = e.baseQueue, u = l.pending;
    if (u !== null) {
      if (a !== null) {
        var s = a.next;
        a.next = u.next, u.next = s;
      }
      t.baseQueue = a = u, l.pending = null;
    }
    if (u = e.baseState, a === null) e.memoizedState = u;
    else {
      t = a.next;
      var f = s = null, m = null, _ = t, R = !1;
      do {
        var j = _.lane & -536870913;
        if (j !== _.lane ? (we & j) === j : (Yn & j) === j) {
          var S = _.revertLane;
          if (S === 0)
            m !== null && (m = m.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }), j === Yl && (R = !0);
          else if ((Yn & S) === S) {
            _ = _.next, S === Yl && (R = !0);
            continue;
          } else
            j = {
              lane: 0,
              revertLane: _.revertLane,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }, m === null ? (f = m = j, s = u) : m = m.next = j, Se.lanes |= S, vl |= S;
          j = _.action, Jl && n(u, j), u = _.hasEagerState ? _.eagerState : n(u, j);
        } else
          S = {
            lane: j,
            revertLane: _.revertLane,
            gesture: _.gesture,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null
          }, m === null ? (f = m = S, s = u) : m = m.next = S, Se.lanes |= j, vl |= j;
        _ = _.next;
      } while (_ !== null && _ !== t);
      if (m === null ? s = u : m.next = f, !Xt(u, e.memoizedState) && (lt = !0, R && (n = pa, n !== null)))
        throw n;
      e.memoizedState = u, e.baseState = s, e.baseQueue = m, l.lastRenderedState = u;
    }
    return a === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Vc(e) {
    var t = Pe(), n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch, a = n.pending, u = t.memoizedState;
    if (a !== null) {
      n.pending = null;
      var s = a = a.next;
      do
        u = e(u, s.action), s = s.next;
      while (s !== a);
      Xt(u, t.memoizedState) || (lt = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, l];
  }
  function fd(e, t, n) {
    var l = Se, a = Pe(), u = Ae;
    if (u) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = t();
    var s = !Xt(
      (Ge || a).memoizedState,
      n
    );
    if (s && (a.memoizedState = n, lt = !0), a = a.queue, Xc(md.bind(null, l, a, e), [
      e
    ]), e = a.getSnapshot !== t || s || nt !== null && (nt.memoizedState.tag & 1) !== 0, Ta(
      e ? 9 : 8,
      { destroy: void 0 },
      hd.bind(null, l, a, n, t),
      null
    ), e) {
      if (l.flags |= 2048, Xe === null) throw Error(c(349));
      u || (Yn & 127) !== 0 || dd(l, t, n);
    }
    return n;
  }
  function dd(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Se.updateQueue, t === null ? (t = Vi(), Se.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function hd(e, t, n, l) {
    t.value = n, t.getSnapshot = l, vd(t) && gd(e);
  }
  function md(e, t, n) {
    return n(function() {
      vd(t) && gd(e);
    });
  }
  function vd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Xt(e, n);
    } catch {
      return !0;
    }
  }
  function gd(e) {
    var t = Ll(e, 2);
    t !== null && Lt(t, e, 2);
  }
  function Gc(e) {
    var t = wt();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), Jl) {
        Pn(!0);
        try {
          n();
        } finally {
          Pn(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Xn,
      lastRenderedState: e
    }, t;
  }
  function pd(e, t, n, l) {
    return e.baseState = n, Ic(
      e,
      Ge,
      typeof l == "function" ? l : Xn
    );
  }
  function _p(e, t, n, l, a) {
    if (Ki(e)) throw Error(c(485));
    if (e = t.action, e !== null) {
      var u = {
        payload: a,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(s) {
          u.listeners.push(s);
        }
      };
      P.T !== null ? n(!0) : u.isTransition = !1, l(u), n = t.pending, n === null ? (u.next = t.pending = u, yd(t, u)) : (u.next = n.next, t.pending = n.next = u);
    }
  }
  function yd(e, t) {
    var n = t.action, l = t.payload, a = e.state;
    if (t.isTransition) {
      var u = P.T, s = {};
      s.types = u !== null ? u.types : null, P.T = s;
      try {
        var f = n(a, l), m = P.S;
        m !== null && m(s, f), Ed(e, t, f);
      } catch (_) {
        Yc(e, t, _);
      } finally {
        u !== null && s.types !== null && (u.types = s.types), P.T = u;
      }
    } else
      try {
        u = n(a, l), Ed(e, t, u);
      } catch (_) {
        Yc(e, t, _);
      }
  }
  function Ed(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(l) {
        bd(e, t, l);
      },
      function(l) {
        return Yc(e, t, l);
      }
    ) : bd(e, t, n);
  }
  function bd(e, t, n) {
    t.status = "fulfilled", t.value = n, Sd(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, yd(e, n)));
  }
  function Yc(e, t, n) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = n, Sd(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function Sd(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Td(e, t) {
    return t;
  }
  function Ad(e, t) {
    if (Ae) {
      var n = Xe.formState;
      if (n !== null) {
        e: {
          var l = Se;
          if (Ae) {
            if (Qe) {
              t: {
                for (var a = Qe, u = un; a.nodeType !== 8; ) {
                  if (!u) {
                    a = null;
                    break t;
                  }
                  if (a = cn(
                    a.nextSibling
                  ), a === null) {
                    a = null;
                    break t;
                  }
                }
                u = a.data, a = u === "F!" || u === "F" ? a : null;
              }
              if (a) {
                Qe = cn(
                  a.nextSibling
                ), l = a.data === "F!";
                break e;
              }
            }
            ll(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return n = wt(), n.memoizedState = n.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Td,
      lastRenderedState: t
    }, n.queue = l, n = Gd.bind(
      null,
      Se,
      l
    ), l.dispatch = n, l = Gc(!1), u = kc.bind(
      null,
      Se,
      !1,
      l.queue
    ), l = wt(), a = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = a, n = _p.bind(
      null,
      Se,
      a,
      u,
      n
    ), a.dispatch = n, l.memoizedState = e, [t, n, !1];
  }
  function _d(e) {
    var t = Pe();
    return Nd(t, Ge, e);
  }
  function Nd(e, t, n) {
    if (t = Ic(
      e,
      t,
      Td
    )[0], e = Yi(Xn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = Tu(t);
      } catch (s) {
        throw s === ya ? xi : s;
      }
    else l = t;
    t = Pe();
    var a = t.queue, u = a.dispatch;
    return n !== t.memoizedState && (Se.flags |= 2048, Ta(
      9,
      { destroy: void 0 },
      Np.bind(null, a, n),
      null
    )), [l, u, e];
  }
  function Np(e, t) {
    e.action = t;
  }
  function Od(e) {
    var t = Pe(), n = Ge;
    if (n !== null)
      return Nd(t, n, e);
    Pe(), t = t.memoizedState, n = Pe();
    var l = n.queue.dispatch;
    return n.memoizedState = e, [t, l, !1];
  }
  function Ta(e, t, n, l) {
    return e = { tag: e, create: n, deps: l, inst: t, next: null }, t = Se.updateQueue, t === null && (t = Vi(), Se.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (l = n.next, n.next = e, e.next = l, t.lastEffect = e), e;
  }
  function wd() {
    return Pe().memoizedState;
  }
  function Xi(e, t, n, l) {
    var a = wt();
    Se.flags |= e, a.memoizedState = Ta(
      1 | t,
      { destroy: void 0 },
      n,
      l === void 0 ? null : l
    );
  }
  function Qi(e, t, n, l) {
    var a = Pe();
    l = l === void 0 ? null : l;
    var u = a.memoizedState.inst;
    Ge !== null && l !== null && Mc(l, Ge.memoizedState.deps) ? a.memoizedState = Ta(t, u, n, l) : (Se.flags |= e, a.memoizedState = Ta(
      1 | t,
      u,
      n,
      l
    ));
  }
  function Cd(e, t) {
    Xi(8390656, 8, e, t);
  }
  function Xc(e, t) {
    Qi(2048, 8, e, t);
  }
  function Op(e) {
    Se.flags |= 4;
    var t = Se.updateQueue;
    if (t === null)
      t = Vi(), Se.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function Rd(e) {
    var t = Pe().memoizedState;
    return Op({ ref: t, nextImpl: e }), function() {
      if ((je & 2) !== 0) throw Error(c(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Ud(e, t) {
    return Qi(4, 2, e, t);
  }
  function Dd(e, t) {
    return Qi(4, 4, e, t);
  }
  function zd(e, t) {
    if (typeof t == "function") {
      e = e();
      var n = t(e);
      return function() {
        typeof n == "function" ? n() : t(null);
      };
    }
    if (t != null)
      return e = e(), t.current = e, function() {
        t.current = null;
      };
  }
  function xd(e, t, n) {
    n = n != null ? n.concat([e]) : null, Qi(4, 4, zd.bind(null, t, e), n);
  }
  function Qc() {
  }
  function Md(e, t) {
    var n = Pe();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && Mc(t, l[1]) ? l[0] : (n.memoizedState = [e, t], e);
  }
  function jd(e, t) {
    var n = Pe();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && Mc(t, l[1]))
      return l[0];
    if (l = e(), Jl) {
      Pn(!0);
      try {
        e();
      } finally {
        Pn(!1);
      }
    }
    return n.memoizedState = [l, t], l;
  }
  function Kc(e, t, n) {
    return n === void 0 || (Yn & 1073741824) !== 0 && (we & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = Qh(), Se.lanes |= e, vl |= e, n);
  }
  function Hd(e, t, n, l) {
    return Xt(n, t) ? n : sl.current !== null ? (e = Kc(e, n, l), Xt(e, t) || (lt = !0), e) : (Yn & 106) === 0 || (Yn & 1073741824) !== 0 && (we & 261930) === 0 ? (lt = !0, e.memoizedState = n) : (e = Qh(), Se.lanes |= e, vl |= e, t);
  }
  function Ld(e, t, n, l, a) {
    var u = oe.p;
    oe.p = u !== 0 && 8 > u ? u : 8;
    var s = P.T, f = {};
    f.types = s !== null ? s.types : null, P.T = f, kc(e, !1, t, n);
    try {
      var m = a(), _ = P.S;
      if (_ !== null && _(f, m), m !== null && typeof m == "object" && typeof m.then == "function") {
        var R = Sp(
          m,
          l
        );
        Au(
          e,
          t,
          R,
          kt(e)
        );
      } else
        Au(
          e,
          t,
          l,
          kt(e)
        );
    } catch (j) {
      Au(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: j },
        kt()
      );
    } finally {
      oe.p = u, s !== null && f.types !== null && (s.types = f.types), P.T = s;
    }
  }
  function wp() {
  }
  function Zc(e, t, n, l) {
    if (e.tag !== 5) throw Error(c(476));
    var a = qd(e).queue;
    Ld(
      e,
      a,
      t,
      Pt,
      n === null ? wp : function() {
        return Bd(e), n(l);
      }
    );
  }
  function qd(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Pt,
      baseState: Pt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Xn,
        lastRenderedState: Pt
      },
      next: null
    };
    var n = {};
    return t.next = {
      memoizedState: n,
      baseState: n,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Xn,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Bd(e) {
    var t = qd(e);
    t.next === null && (t = e.alternate.memoizedState), Au(
      e,
      t.next.queue,
      {},
      kt()
    );
  }
  function Jc() {
    return gt(Va);
  }
  function Id() {
    return Pe().memoizedState;
  }
  function Vd() {
    return Pe().memoizedState;
  }
  function Cp(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = kt();
          e = rl(n);
          var l = cl(t, e, n);
          l !== null && (Lt(l, t, n), pu(l, t, n)), t = { cache: Tc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Rp(e, t, n) {
    var l = kt();
    n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ki(e) ? Yd(t, n) : (n = hc(e, t, n, l), n !== null && (Lt(n, e, l), Xd(n, t, l)));
  }
  function Gd(e, t, n) {
    var l = kt();
    Au(e, t, n, l);
  }
  function Au(e, t, n, l) {
    var a = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ki(e)) Yd(t, a);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var s = t.lastRenderedState, f = u(s, n);
          if (a.hasEagerState = !0, a.eagerState = f, Xt(f, s))
            return Ai(e, t, a, 0), Xe === null && Ti(), !1;
        } catch {
        }
      if (n = hc(e, t, a, l), n !== null)
        return Lt(n, e, l), Xd(n, t, l), !0;
    }
    return !1;
  }
  function kc(e, t, n, l) {
    if (l = {
      lane: 2,
      revertLane: Bs(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ki(e)) {
      if (t) throw Error(c(479));
    } else
      t = hc(
        e,
        n,
        l,
        2
      ), t !== null && Lt(t, e, 2);
  }
  function Ki(e) {
    var t = e.alternate;
    return e === Se || t !== null && t === Se;
  }
  function Yd(e, t) {
    ba = Bi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Xd(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, Xo(e, n);
    }
  }
  var Zi = {
    readContext: gt,
    use: Gi,
    useCallback: Fe,
    useContext: Fe,
    useEffect: Fe,
    useImperativeHandle: Fe,
    useLayoutEffect: Fe,
    useInsertionEffect: Fe,
    useMemo: Fe,
    useReducer: Fe,
    useRef: Fe,
    useState: Fe,
    useDebugValue: Fe,
    useDeferredValue: Fe,
    useTransition: Fe,
    useSyncExternalStore: Fe,
    useId: Fe,
    useHostTransitionStatus: Fe,
    useFormState: Fe,
    useActionState: Fe,
    useOptimistic: Fe,
    useMemoCache: Fe,
    useCacheRefresh: Fe,
    useEffectEvent: Fe
  }, Qd = {
    readContext: gt,
    use: Gi,
    useCallback: function(e, t) {
      return wt().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: gt,
    useEffect: Cd,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, Xi(
        4194308,
        4,
        zd.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return Xi(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Xi(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = wt();
      t = t === void 0 ? null : t;
      var l = e();
      if (Jl) {
        Pn(!0);
        try {
          e();
        } finally {
          Pn(!1);
        }
      }
      return n.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, n) {
      var l = wt();
      if (n !== void 0) {
        var a = n(t);
        if (Jl) {
          Pn(!0);
          try {
            n(t);
          } finally {
            Pn(!1);
          }
        }
      } else a = t;
      return l.memoizedState = l.baseState = a, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: a
      }, l.queue = e, e = e.dispatch = Rp.bind(
        null,
        Se,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = wt();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Gc(e);
      var t = e.queue, n = Gd.bind(null, Se, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: Qc,
    useDeferredValue: function(e, t) {
      var n = wt();
      return Kc(n, e, t);
    },
    useTransition: function() {
      var e = Gc(!1);
      return e = Ld.bind(
        null,
        Se,
        e.queue,
        !0,
        !1
      ), wt().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var l = Se, a = wt();
      if (Ae) {
        if (n === void 0)
          throw Error(c(407));
        n = n();
      } else {
        if (n = t(), Xe === null)
          throw Error(c(349));
        (we & 127) !== 0 || dd(l, t, n);
      }
      a.memoizedState = n;
      var u = { value: n, getSnapshot: t };
      return a.queue = u, Cd(md.bind(null, l, u, e), [
        e
      ]), l.flags |= 2048, Ta(
        9,
        { destroy: void 0 },
        hd.bind(
          null,
          l,
          u,
          n,
          t
        ),
        null
      ), n;
    },
    useId: function() {
      var e = wt(), t = Xe.identifierPrefix;
      if (Ae) {
        var n = An, l = Tn;
        n = (l & ~(1 << 32 - Gt(l) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Ii++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = Tp++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Jc,
    useFormState: Ad,
    useActionState: Ad,
    useOptimistic: function(e) {
      var t = wt();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = kc.bind(
        null,
        Se,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Bc,
    useCacheRefresh: function() {
      return wt().memoizedState = Cp.bind(
        null,
        Se
      );
    },
    useEffectEvent: function(e) {
      var t = wt(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((je & 2) !== 0)
          throw Error(c(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, Kd = {
    readContext: gt,
    use: Gi,
    useCallback: Md,
    useContext: gt,
    useEffect: Xc,
    useImperativeHandle: xd,
    useInsertionEffect: Ud,
    useLayoutEffect: Dd,
    useMemo: jd,
    useReducer: Yi,
    useRef: wd,
    useState: function() {
      return Yi(Xn);
    },
    useDebugValue: Qc,
    useDeferredValue: function(e, t) {
      var n = Pe();
      return Hd(
        n,
        Ge.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Yi(Xn)[0], t = Pe().memoizedState;
      return [
        typeof e == "boolean" ? e : Tu(e),
        t
      ];
    },
    useSyncExternalStore: fd,
    useId: Id,
    useHostTransitionStatus: Jc,
    useFormState: _d,
    useActionState: _d,
    useOptimistic: function(e, t) {
      var n = Pe();
      return pd(n, Ge, e, t);
    },
    useMemoCache: Bc,
    useCacheRefresh: Vd,
    useEffectEvent: Rd
  }, Up = {
    readContext: gt,
    use: Gi,
    useCallback: Md,
    useContext: gt,
    useEffect: Xc,
    useImperativeHandle: xd,
    useInsertionEffect: Ud,
    useLayoutEffect: Dd,
    useMemo: jd,
    useReducer: Vc,
    useRef: wd,
    useState: function() {
      return Vc(Xn);
    },
    useDebugValue: Qc,
    useDeferredValue: function(e, t) {
      var n = Pe();
      return Ge === null ? Kc(n, e, t) : Hd(
        n,
        Ge.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Vc(Xn)[0], t = Pe().memoizedState;
      return [
        typeof e == "boolean" ? e : Tu(e),
        t
      ];
    },
    useSyncExternalStore: fd,
    useId: Id,
    useHostTransitionStatus: Jc,
    useFormState: Od,
    useActionState: Od,
    useOptimistic: function(e, t) {
      var n = Pe();
      return Ge !== null ? pd(n, Ge, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Bc,
    useCacheRefresh: Vd,
    useEffectEvent: Rd
  };
  function Fc(e, t, n, l) {
    t = e.memoizedState, n = n(l, t), n = n == null ? t : ee({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var $c = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var l = kt(), a = rl(l);
      a.payload = t, n != null && (a.callback = n), t = cl(e, a, l), t !== null && (Lt(t, e, l), pu(t, e, l));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var l = kt(), a = rl(l);
      a.tag = 1, a.payload = t, n != null && (a.callback = n), t = cl(e, a, l), t !== null && (Lt(t, e, l), pu(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = kt(), l = rl(n);
      l.tag = 2, t != null && (l.callback = t), t = cl(e, l, n), t !== null && (Lt(t, e, n), pu(t, e, n));
    }
  };
  function Zd(e, t, n, l, a, u, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, u, s) : t.prototype && t.prototype.isPureReactComponent ? !su(n, l) || !su(a, u) : !0;
  }
  function Jd(e, t, n, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, l), t.state !== e && $c.enqueueReplaceState(t, t.state, null);
  }
  function kl(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var l in t)
        l !== "ref" && (n[l] = t[l]);
    }
    if (e = e.defaultProps) {
      n === t && (n = ee({}, n));
      for (var a in e)
        n[a] === void 0 && (n[a] = e[a]);
    }
    return n;
  }
  function kd(e) {
    Si(e);
  }
  function Fd(e) {
    console.error(e);
  }
  function $d(e) {
    Si(e);
  }
  function Ji(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function Pd(e, t, n) {
    try {
      var l = e.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Pc(e, t, n) {
    return n = rl(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      Ji(e, t);
    }, n;
  }
  function Wd(e) {
    return e = rl(e), e.tag = 3, e;
  }
  function eh(e, t, n, l) {
    var a = n.type.getDerivedStateFromError;
    if (typeof a == "function") {
      var u = l.value;
      e.payload = function() {
        return a(u);
      }, e.callback = function() {
        Pd(t, n, l);
      };
    }
    var s = n.stateNode;
    s !== null && typeof s.componentDidCatch == "function" && (e.callback = function() {
      Pd(t, n, l), typeof a != "function" && (gl === null ? gl = /* @__PURE__ */ new Set([this]) : gl.add(this));
      var f = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: f !== null ? f : ""
      });
    });
  }
  function Dp(e, t, n, l, a) {
    if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = n.alternate, t !== null && Vl(
        t,
        n,
        a,
        !0
      ), n = pt.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
          case 19:
            return At === null ? vr() : n.alternate === null && $e === 0 && ($e = 3), n.flags &= -257, n.flags |= 65536, n.lanes = a, l === Mi ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), Hs(e, l, a)), !1;
          case 22:
            return n.flags |= 65536, l === Mi ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : n.add(l)), Hs(e, l, a)), !1;
        }
        throw Error(c(435, n.tag));
      }
      return Hs(e, l, a), vr(), !1;
    }
    if (Ae)
      return t = pt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = a, l !== yc && (e = Error(c(422), { cause: l }), du(nn(e, n)))) : (l !== yc && (t = Error(c(423), {
        cause: l
      }), du(
        nn(t, n)
      )), e = e.current.alternate, e.flags |= 65536, a &= -a, e.lanes |= a, l = nn(l, n), a = Pc(
        e.stateNode,
        l,
        a
      ), Cc(e, a), $e !== 4 && ($e = 2)), !1;
    var u = Error(c(520), { cause: l });
    if (u = nn(u, n), Du === null ? Du = [u] : Du.push(u), $e !== 4 && ($e = 2), t === null) return !0;
    l = nn(l, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = a & -a, n.lanes |= e, e = Pc(n.stateNode, l, e), Cc(n, e), !1;
        case 1:
          if (t = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (gl === null || !gl.has(u))))
            return n.flags |= 65536, a &= -a, n.lanes |= a, a = Wd(a), eh(
              a,
              e,
              n,
              l
            ), Cc(n, a), !1;
          break;
        case 22:
          if (n.memoizedState !== null)
            return n.flags |= 65536, !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Wc = Error(c(461)), lt = !1;
  function rt(e, t, n, l) {
    t.child = e === null ? ad(t, null, n, l) : Zl(
      t,
      e.child,
      n,
      l
    );
  }
  function th(e, t, n, l, a) {
    n = n.render;
    var u = t.ref;
    if ("ref" in l) {
      var s = {};
      for (var f in l)
        f !== "ref" && (s[f] = l[f]);
    } else s = l;
    return Gl(t), l = jc(
      e,
      t,
      n,
      s,
      u,
      a
    ), f = Hc(), e !== null && !lt ? (Lc(e, t, a), Qn(e, t, a)) : (Ae && f && wi(t), t.flags |= 1, rt(e, t, l, a), t.child);
  }
  function nh(e, t, n, l, a) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !mc(u) && u.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = u, lh(
        e,
        t,
        u,
        l,
        a
      )) : (e = Ni(
        n.type,
        null,
        l,
        t,
        t.mode,
        a
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !rs(e, a)) {
      var s = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : su, n(s, l) && e.ref === t.ref)
        return Qn(e, t, a);
    }
    return t.flags |= 1, e = Bn(u, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function lh(e, t, n, l, a) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (su(u, l) && e.ref === t.ref)
        if (lt = !1, t.pendingProps = l = u, rs(e, a))
          (e.flags & 131072) !== 0 && (lt = !0);
        else
          return t.lanes = e.lanes, Qn(e, t, a);
    }
    return es(
      e,
      t,
      n,
      l,
      a
    );
  }
  function ah(e, t, n, l) {
    var a = l.children, u = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | n : n, e !== null) {
          for (l = t.child = e.child, a = 0; l !== null; )
            a = a | l.lanes | l.childLanes, l = l.sibling;
          l = a & ~u;
        } else l = 0, t.child = null;
        return uh(
          e,
          t,
          u,
          n,
          l
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && zi(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? rd(t, u) : Uc(), cd(t);
      else
        return l = t.lanes = 536870912, uh(
          e,
          t,
          u !== null ? u.baseLanes | n : n,
          n,
          l
        );
    } else
      u !== null ? (zi(t, u.cachePool), rd(t, u), fl(), t.memoizedState = null) : (e !== null && zi(t, null), Uc(), fl());
    return rt(e, t, a, n), t.child;
  }
  function _u(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function uh(e, t, n, l, a) {
    var u = _c();
    return u = u === null ? null : { parent: tt._currentValue, pool: u }, t.memoizedState = {
      baseLanes: n,
      cachePool: u
    }, e !== null && zi(t, null), Uc(), cd(t), e !== null && Vl(e, t, l, !0), t.childLanes = a, null;
  }
  function ki(e, t) {
    return t = Fi(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function ih(e, t, n) {
    return Zl(t, e.child, null, n), e = ki(t, t.pendingProps), e.flags |= 2, Qt(t), t.memoizedState = null, e;
  }
  function zp(e, t, n) {
    var l = t.pendingProps, a = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Ae) {
        if (l.mode === "hidden")
          return e = ki(t, l), t.lanes = 536870912, e.memoizedState = { baseLanes: 0, cachePool: null }, _u(null, e);
        if (zc(t), (e = Qe) ? (e = zm(
          e,
          un
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: tl !== null ? { id: Tn, overflow: An } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Yf(e), n.return = t, t.child = n, st = t, Qe = null)) : e = null, e === null) throw ll(t);
        return t.lanes = 536870912, null;
      }
      return ki(t, l);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var s = u.dehydrated;
      if (zc(t), a)
        if (t.flags & 256)
          t.flags &= -257, t = ih(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(c(558));
      else if (lt || Vl(e, t, n, !1), a = (n & e.childLanes) !== 0, lt || a) {
        if (sl.current === null) {
          if (l = Xe, l !== null && (s = Qo(l, n), s !== 0 && s !== u.retryLane))
            throw u.retryLane = s, Ll(e, s), Lt(l, e, s), Wc;
          vr();
        }
        t = ih(
          e,
          t,
          n
        );
      } else
        e = u.treeContext, Qe = cn(s.nextSibling), st = t, Ae = !0, nl = null, un = !1, e !== null && Kf(t, e), t = ki(t, l), t.flags |= 134221824;
      return t;
    }
    return e = Bn(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Aa(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(c(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function es(e, t, n, l, a) {
    return Gl(t), n = jc(
      e,
      t,
      n,
      l,
      void 0,
      a
    ), l = Hc(), e !== null && !lt ? (Lc(e, t, a), Qn(e, t, a)) : (Ae && l && wi(t), t.flags |= 1, rt(e, t, n, a), t.child);
  }
  function rh(e, t, n, l, a, u) {
    return Gl(t), t.updateQueue = null, n = od(
      t,
      l,
      n,
      a
    ), sd(e), l = Hc(), e !== null && !lt ? (Lc(e, t, u), Qn(e, t, u)) : (Ae && l && wi(t), t.flags |= 1, rt(e, t, n, u), t.child);
  }
  function ch(e, t, n, l, a) {
    if (Gl(t), t.stateNode === null) {
      var u = ha, s = n.contextType;
      typeof s == "object" && s !== null && (u = gt(s)), u = new n(l, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = $c, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = l, u.state = t.memoizedState, u.refs = {}, Oc(t), s = n.contextType, u.context = typeof s == "object" && s !== null ? gt(s) : ha, u.state = t.memoizedState, s = n.getDerivedStateFromProps, typeof s == "function" && (Fc(
        t,
        n,
        s,
        l
      ), u.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (s = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), s !== u.state && $c.enqueueReplaceState(u, u.state, null), Eu(t, l, u, a), yu(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      u = t.stateNode;
      var f = t.memoizedProps, m = kl(n, f);
      u.props = m;
      var _ = u.context, R = n.contextType;
      s = ha, typeof R == "object" && R !== null && (s = gt(R));
      var j = n.getDerivedStateFromProps;
      R = typeof j == "function" || typeof u.getSnapshotBeforeUpdate == "function", f = t.pendingProps !== f, R || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f || _ !== s) && Jd(
        t,
        u,
        l,
        s
      ), il = !1;
      var S = t.memoizedState;
      u.state = S, Eu(t, l, u, a), yu(), _ = t.memoizedState, f || S !== _ || il ? (typeof j == "function" && (Fc(
        t,
        n,
        j,
        l
      ), _ = t.memoizedState), (m = il || Zd(
        t,
        n,
        m,
        l,
        S,
        _,
        s
      )) ? (R || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = _), u.props = l, u.state = _, u.context = s, l = m) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      u = t.stateNode, wc(e, t), s = t.memoizedProps, R = kl(n, s), u.props = R, j = t.pendingProps, S = u.context, _ = n.contextType, m = ha, typeof _ == "object" && _ !== null && (m = gt(_)), f = n.getDerivedStateFromProps, (_ = typeof f == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (s !== j || S !== m) && Jd(
        t,
        u,
        l,
        m
      ), il = !1, S = t.memoizedState, u.state = S, Eu(t, l, u, a), yu();
      var O = t.memoizedState;
      s !== j || S !== O || il || e !== null && e.dependencies !== null && Ui(e.dependencies) ? (typeof f == "function" && (Fc(
        t,
        n,
        f,
        l
      ), O = t.memoizedState), (R = il || Zd(
        t,
        n,
        R,
        l,
        S,
        O,
        m
      ) || e !== null && e.dependencies !== null && Ui(e.dependencies)) ? (_ || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(l, O, m), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        l,
        O,
        m
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || s === e.memoizedProps && S === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && S === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = O), u.props = l, u.state = O, u.context = m, l = R) : (typeof u.componentDidUpdate != "function" || s === e.memoizedProps && S === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && S === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return u = l, Aa(e, t), l = (t.flags & 128) !== 0, u || l ? (u = t.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && l ? (t.child = Zl(
      t,
      e.child,
      null,
      a
    ), t.child = Zl(
      t,
      null,
      n,
      a
    )) : rt(e, t, n, a), t.memoizedState = u.state, e = t.child) : e = Qn(
      e,
      t,
      a
    ), e;
  }
  function sh(e, t, n, l) {
    return Bl(), t.flags |= 256, rt(e, t, n, l), t.child;
  }
  var ts = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ns(e) {
    return { baseLanes: e, cachePool: Pf() };
  }
  function ls(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Jt), e;
  }
  function oh(e, t, n) {
    var l = t.pendingProps, a = !1, u = (t.flags & 128) !== 0, s;
    if ((s = u) || (s = e !== null && e.memoizedState === null ? !1 : (yt.current & 2) !== 0), s && (a = !0, t.flags &= -129), s = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ae) {
        if (a ? ol(t) : fl(), (e = Qe) ? (e = zm(
          e,
          un
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: tl !== null ? { id: Tn, overflow: An } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Yf(e), n.return = t, t.child = n, st = t, Qe = null)) : e = null, e === null) throw ll(t);
        return no(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      return u = l.children, l = l.fallback, a ? (fl(), a = t.mode, u = Fi(
        { mode: "hidden", children: u },
        a
      ), l = ql(
        l,
        a,
        n,
        null
      ), u.return = t, l.return = t, u.sibling = l, t.child = u, l = t.child, l.memoizedState = ns(n), l.childLanes = ls(
        e,
        s,
        n
      ), t.memoizedState = ts, _u(null, l)) : (ol(t), as(t, u));
    }
    var f = e.memoizedState;
    if (f !== null) {
      var m = f.dehydrated;
      if (m !== null)
        return xp(
          e,
          t,
          u,
          s,
          l,
          m,
          f,
          n
        );
    }
    return a ? (fl(), a = l.fallback, u = t.mode, f = e.child, m = f.sibling, l = Bn(f, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = f.subtreeFlags & 1206910976, m !== null ? a = Bn(m, a) : (a = ql(
      a,
      u,
      n,
      null
    ), a.flags |= 2), a.return = t, l.return = t, l.sibling = a, t.child = l, _u(null, l), l = t.child, a = e.child.memoizedState, a === null ? a = ns(n) : (u = a.cachePool, u !== null ? (f = tt._currentValue, u = u.parent !== f ? { parent: f, pool: f } : u) : u = Pf(), a = {
      baseLanes: a.baseLanes | n,
      cachePool: u
    }), l.memoizedState = a, l.childLanes = ls(
      e,
      s,
      n
    ), t.memoizedState = ts, _u(e.child, l)) : (ol(t), n = e.child, e = n.sibling, n = Bn(n, {
      mode: "visible",
      children: l.children
    }), n.return = t, n.sibling = null, e !== null && (s = t.deletions, s === null ? (t.deletions = [e], t.flags |= 16) : s.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function as(e, t) {
    return t = Fi(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Fi(e, t) {
    return e = xt(22, e, null, t), e.lanes = 0, e;
  }
  function $i(e, t, n) {
    return Zl(t, e.child, null, n), e = as(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function xp(e, t, n, l, a, u, s, f) {
    if (n)
      return t.flags & 256 ? (ol(t), t.flags &= -257, $i(
        e,
        t,
        f
      )) : t.memoizedState !== null ? (fl(), t.child = e.child, t.flags |= 128, null) : (fl(), u = a.fallback, s = t.mode, a = Fi(
        { mode: "visible", children: a.children },
        s
      ), u = ql(
        u,
        s,
        f,
        null
      ), u.flags |= 2, a.return = t, u.return = t, a.sibling = u, t.child = a, Zl(t, e.child, null, f), a = t.child, a.memoizedState = ns(f), a.childLanes = ls(
        e,
        l,
        f
      ), t.memoizedState = ts, _u(null, a));
    if (ol(t), no(u)) {
      if (l = u.nextSibling && u.nextSibling.dataset, l) var m = l.dgst;
      return l = m, l !== "" && (a = Error(c(419)), a.stack = "", a.digest = l, du({ value: a, source: null, stack: null })), $i(
        e,
        t,
        f
      );
    }
    if (lt || Vl(e, t, f, !1), l = (f & e.childLanes) !== 0, lt || l) {
      if (sl.current !== null)
        return $i(
          e,
          t,
          f
        );
      if (l = Xe, l !== null && (a = Qo(
        l,
        f
      ), a !== 0 && a !== s.retryLane))
        throw s.retryLane = a, Ll(e, a), Lt(l, e, a), Wc;
      return to(u) || vr(), $i(
        e,
        t,
        f
      );
    }
    return to(u) ? (t.flags |= 192, t.child = e.child, null) : (e = s.treeContext, Qe = cn(u.nextSibling), st = t, Ae = !0, nl = null, un = !1, e !== null && Kf(t, e), t = as(
      t,
      a.children
    ), t.flags |= 134221824, t);
  }
  function fh(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), Ri(e.return, t, n);
  }
  function dh(e) {
    for (var t = null; e !== null; ) {
      var n = e.alternate;
      n !== null && qi(n) === null && (t = e), e = e.sibling;
    }
    return t;
  }
  function Pi(e, t, n, l, a, u) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: n,
      tailMode: a,
      treeForkCount: u
    } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = l, s.tail = n, s.tailMode = a, s.treeForkCount = u);
  }
  function us(e) {
    var t = e.child;
    for (e.child = null; t !== null; ) {
      var n = t.sibling;
      t.sibling = e.child, e.child = t, t = n;
    }
  }
  function is(e, t, n) {
    var l = t.pendingProps, a = l.revealOrder, u = l.tail;
    l = l.children;
    var s = yt.current;
    if (t.flags & 128)
      return bu(t, s), null;
    var f = (s & 2) !== 0;
    if (f ? (s = s & 1 | 2, t.flags |= 128) : s &= 1, bu(t, s), a === "backwards" && e !== null ? (us(e), rt(e, t, l, n), us(e)) : rt(e, t, l, n), l = Ae ? fu : 0, !f && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && fh(e, n, t);
        else if (e.tag === 19)
          fh(e, n, t);
        else if (e.child !== null) {
          e.child.return = e, e = e.child;
          continue;
        }
        if (e === t) break e;
        for (; e.sibling === null; ) {
          if (e.return === null || e.return === t)
            break e;
          e = e.return;
        }
        e.sibling.return = e.return, e = e.sibling;
      }
    switch (a) {
      case "backwards":
        n = dh(t.child), n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null, us(t)), Pi(
          t,
          !0,
          a,
          null,
          u,
          l
        );
        break;
      case "unstable_legacy-backwards":
        for (n = null, a = t.child, t.child = null; a !== null; ) {
          if (e = a.alternate, e !== null && qi(e) === null) {
            t.child = a;
            break;
          }
          e = a.sibling, a.sibling = n, n = a, a = e;
        }
        Pi(
          t,
          !0,
          n,
          null,
          u,
          l
        );
        break;
      case "together":
        Pi(
          t,
          !1,
          null,
          null,
          void 0,
          l
        );
        break;
      case "independent":
        t.memoizedState = null;
        break;
      default:
        n = dh(t.child), n === null ? (a = t.child, t.child = null) : (a = n.sibling, n.sibling = null), Pi(
          t,
          !1,
          a,
          n,
          u,
          l
        );
    }
    return t.child;
  }
  function hh(e, t, n) {
    var l = t.pendingProps;
    return al(t, t.type, l.value), rt(e, t, l.children, n), t.child;
  }
  function Qn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), vl |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (Vl(
          e,
          t,
          n,
          !1
        ), (n & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(c(153));
    if (t.child !== null) {
      for (e = t.child, n = Bn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = Bn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function rs(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Ui(e)));
  }
  function Mp(e, t, n) {
    switch (t.tag) {
      case 3:
        H(t, t.stateNode.containerInfo), al(t, tt, e.memoizedState.cache), Bl();
        break;
      case 27:
      case 5:
        ze(t);
        break;
      case 4:
        H(t, t.stateNode.containerInfo);
        break;
      case 10:
        al(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, zc(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null) {
          if (l.dehydrated !== null)
            return ol(t), t.flags |= 128, null;
          l = Vl(
            e,
            t,
            n,
            !1
          );
          var a = t.child.childLanes;
          return l || (n & a) !== 0 ? oh(e, t, n) : (ol(t), e = Qn(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        }
        ol(t);
        break;
      case 19:
        if (t.flags & 128)
          return is(
            e,
            t,
            n
          );
        if (a = (e.flags & 128) !== 0, l = (n & t.childLanes) !== 0, l || (Vl(
          e,
          t,
          n,
          !1
        ), l = (n & t.childLanes) !== 0), a) {
          if (l)
            return is(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (a = t.memoizedState, a !== null && (a.rendering = null, a.tail = null, a.lastEffect = null), bu(t, yt.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, ah(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        al(t, tt, e.memoizedState.cache);
    }
    return Qn(e, t, n);
  }
  function mh(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        lt = !0;
      else {
        if (!rs(e, n) && (t.flags & 128) === 0)
          return lt = !1, Mp(
            e,
            t,
            n
          );
        lt = (e.flags & 131072) !== 0;
      }
    else
      lt = !1, Ae && (t.flags & 1048576) !== 0 && Qf(t, fu, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = Ql(t.elementType), t.type = e, typeof e == "function")
            mc(e) ? (l = kl(e, l), t.tag = 1, t = ch(
              null,
              t,
              e,
              l,
              n
            )) : (t.tag = 0, t = es(
              null,
              t,
              e,
              l,
              n
            ));
          else {
            if (e != null) {
              var a = e.$$typeof;
              if (a === L) {
                t.tag = 11, t = th(
                  null,
                  t,
                  e,
                  l,
                  n
                );
                break e;
              } else if (a === ie) {
                t.tag = 14, t = nh(
                  null,
                  t,
                  e,
                  l,
                  n
                );
                break e;
              } else if (a === B) {
                t.tag = 10, t.type = e, t = hh(
                  null,
                  t,
                  n
                );
                break e;
              }
            }
            throw t = be(e) || e, Error(c(306, t, ""));
          }
        }
        return t;
      case 0:
        return es(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return l = t.type, a = kl(
          l,
          t.pendingProps
        ), ch(
          e,
          t,
          l,
          a,
          n
        );
      case 3:
        e: {
          if (H(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(c(387));
          l = t.pendingProps;
          var u = t.memoizedState;
          a = u.element, wc(e, t), Eu(t, l, null, n);
          var s = t.memoizedState;
          if (l = s.cache, al(t, tt, l), l !== u.cache && Sc(
            t,
            [tt],
            n,
            !0
          ), yu(), l = s.element, u.isDehydrated)
            if (u = {
              element: l,
              isDehydrated: !1,
              cache: s.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = sh(
                e,
                t,
                l,
                n
              );
              break e;
            } else if (l !== a) {
              a = nn(
                Error(c(424)),
                t
              ), du(a), t = sh(
                e,
                t,
                l,
                n
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Qe = cn(e.firstChild), st = t, Ae = !0, nl = null, un = !0, n = ad(
                t,
                null,
                l,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 134221824, n = n.sibling;
          else {
            if (Bl(), l === a) {
              t = Qn(
                e,
                t,
                n
              );
              break e;
            }
            rt(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Aa(e, t), e === null ? (n = Bm(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : Ae || (t.stateNode = ym(
          t.type,
          t.pendingProps,
          V.current,
          t
        )) : t.memoizedState = Bm(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return ze(t), e === null && Ae && (l = t.stateNode = jm(
          t.type,
          t.pendingProps,
          V.current
        ), st = t, un = !0, a = Qe, El(t.type) ? (lo = a, Qe = cn(l.firstChild)) : Qe = a), rt(
          e,
          t,
          t.pendingProps.children,
          n
        ), Aa(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ae && ((a = l = Qe) && (l = Cy(
          l,
          t.type,
          t.pendingProps,
          un
        ), l !== null ? (t.stateNode = l, st = t, Qe = cn(l.firstChild), un = !1, a = !0) : a = !1), a || ll(t)), ze(t), a = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, l = u.children, Js(a, u) ? l = null : s !== null && Js(a, s) && (t.flags |= 32), t.memoizedState !== null && (a = jc(
          e,
          t,
          Ap,
          null,
          null,
          n
        ), Va._currentValue = a), Aa(e, t), rt(e, t, l, n), t.child;
      case 6:
        return e === null && Ae && ((e = n = Qe) && (n = Ry(
          n,
          t.pendingProps,
          un
        ), n !== null ? (t.stateNode = n, st = t, Qe = null, e = !0) : e = !1), e || ll(t)), null;
      case 13:
        return oh(e, t, n);
      case 4:
        return H(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = Zl(
          t,
          null,
          l,
          n
        ) : rt(e, t, l, n), t.child;
      case 11:
        return th(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return l = t.pendingProps, Aa(e, t), rt(e, t, l, n), t.child;
      case 8:
        return rt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return rt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return hh(e, t, n);
      case 9:
        return a = t.type._context, l = t.pendingProps.children, Gl(t), a = gt(a), l = l(a), t.flags |= 1, rt(e, t, l, n), t.child;
      case 14:
        return nh(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return lh(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return is(e, t, n);
      case 31:
        return zp(e, t, n);
      case 22:
        return ah(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return Gl(t), l = gt(tt), e === null ? (a = _c(), a === null && (a = Xe, u = Tc(), a.pooledCache = u, u.refCount++, u !== null && (a.pooledCacheLanes |= n), a = u), t.memoizedState = { parent: l, cache: a }, Oc(t), al(t, tt, a)) : ((e.lanes & n) !== 0 && (wc(e, t), Eu(t, null, null, n), yu()), a = e.memoizedState, u = t.memoizedState, a.parent !== l ? (a = { parent: l, cache: l }, t.memoizedState = a, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = a), al(t, tt, l)) : (l = u.cache, al(t, tt, l), l !== a.cache && Sc(
          t,
          [tt],
          n,
          !0
        ))), rt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 30:
        return t.stateNode === null && (t.stateNode = {
          autoName: null,
          paired: null,
          clones: null,
          ref: null
        }), l = t.pendingProps, l.name != null && l.name !== "auto" ? t.flags |= e === null ? 18882560 : 18874368 : Ae && wi(t), e !== null && e.memoizedProps.name !== l.name ? t.flags |= 4194816 : Aa(e, t), rt(e, t, l.children, n), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(c(156, t.tag));
  }
  function Kn(e) {
    e.flags |= 4;
  }
  function cs(e, t, n, l, a) {
    var u;
    if ((u = (e.mode & 32) !== 0) && (u = n === null ? Ym(t, l) : Ym(t, l) && (l.src !== n.src || l.srcSet !== n.srcSet)), u) {
      if (e.flags |= 16777216, (a & 335544128) === a)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (kh()) e.flags |= 8192;
        else
          throw Kl = Mi, Nc;
    } else e.flags &= -16777217;
  }
  function vh(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Xm(t))
      if (kh()) e.flags |= 8192;
      else
        throw Kl = Mi, Nc;
  }
  function Wi(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Go() : 536870912, e.lanes |= t, Ca |= t);
  }
  function Nu(e, t) {
    if (!Ae)
      switch (e.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var n = e.tail, l = null; n !== null; )
            n.alternate !== null && (l = n), n = n.sibling;
          l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
          break;
        default:
          for (t = e.tail, n = null; t !== null; )
            t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
      }
  }
  function Ke(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, l = 0;
    if (t)
      for (var a = e.child; a !== null; )
        n |= a.lanes | a.childLanes, l |= a.subtreeFlags & 1206910976, l |= a.flags & 1206910976, a.return = e, a = a.sibling;
    else
      for (a = e.child; a !== null; )
        n |= a.lanes | a.childLanes, l |= a.subtreeFlags, l |= a.flags, a.return = e, a = a.sibling;
    return e.subtreeFlags |= l, e.childLanes = n, t;
  }
  function jp(e, t, n) {
    var l = t.pendingProps;
    switch (pc(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Ke(t), null;
      case 1:
        return Ke(t), null;
      case 3:
        return n = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Gn(tt), ne(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (ga(t) ? Kn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ec())), Ke(t), null;
      case 26:
        var a = t.type, u = t.memoizedState;
        return e === null ? (Kn(t), u !== null ? (Ke(t), vh(t, u)) : (Ke(t), cs(
          t,
          a,
          null,
          l,
          n
        ))) : u ? u !== e.memoizedState ? (Kn(t), Ke(t), vh(t, u)) : (Ke(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && Kn(t), Ke(t), cs(
          t,
          a,
          e,
          l,
          n
        )), null;
      case 27:
        if (Ye(t), n = V.current, a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && Kn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(c(166));
            return Ke(t), t.subtreeFlags &= -33554433, null;
          }
          e = Bt.current, ga(t) ? Zf(t) : (e = jm(a, l, n), t.stateNode = e, Kn(t));
        }
        return Ke(t), t.subtreeFlags &= -33554433, null;
      case 5:
        if (Ye(t), a = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && Kn(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(c(166));
            return Ke(t), t.subtreeFlags &= -33554433, null;
          }
          if (u = Bt.current, ga(t))
            Zf(t);
          else {
            var s = Hu(
              V.current
            );
            switch (u) {
              case 1:
                u = s.createElementNS(
                  "http://www.w3.org/2000/svg",
                  a
                );
                break;
              case 2:
                u = s.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  a
                );
                break;
              default:
                switch (a) {
                  case "svg":
                    u = s.createElementNS(
                      "http://www.w3.org/2000/svg",
                      a
                    );
                    break;
                  case "math":
                    u = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      a
                    );
                    break;
                  case "script":
                    u = s.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof l.is == "string" ? s.createElement("select", {
                      is: l.is
                    }) : s.createElement("select"), l.multiple ? u.multiple = !0 : l.size && (u.size = l.size);
                    break;
                  default:
                    u = typeof l.is == "string" ? s.createElement(a, { is: l.is }) : s.createElement(a);
                }
            }
            u[vt] = t, u[zt] = l;
            e: for (s = t.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6)
                u.appendChild(s.stateNode);
              else if (s.tag !== 4 && s.tag !== 27 && s.child !== null) {
                s.child.return = s, s = s.child;
                continue;
              }
              if (s === t) break e;
              for (; s.sibling === null; ) {
                if (s.return === null || s.return === t)
                  break e;
                s = s.return;
              }
              s.sibling.return = s.return, s = s.sibling;
            }
            t.stateNode = u;
            e: switch (bt(u, a, l), a) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && Kn(t);
          }
        }
        return Ke(t), t.subtreeFlags &= -33554433, cs(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && Kn(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(c(166));
          if (e = V.current, ga(t)) {
            if (e = t.stateNode, n = t.memoizedProps, l = null, a = st, a !== null)
              switch (a.tag) {
                case 27:
                case 5:
                  l = a.memoizedProps;
              }
            e[vt] = t, e = !!(e.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || mm(e.nodeValue, n)), e || ll(t, !0);
          } else
            e = Hu(e).createTextNode(
              l
            ), e[vt] = t, t.stateNode = e;
        }
        return Ke(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = ga(t), n !== null) {
            if (e === null) {
              if (!l) throw Error(c(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(557));
              e[vt] = t;
            } else
              Bl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ke(t), e = !1;
          } else
            n = Ec(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (Qt(t), t) : (Qt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(c(558));
        }
        return Ke(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (a = ga(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!a) throw Error(c(318));
              if (a = t.memoizedState, a = a !== null ? a.dehydrated : null, !a) throw Error(c(317));
              a[vt] = t;
            } else
              Bl(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ke(t), a = !1;
          } else
            a = Ec(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = a), a = !0;
          if (!a)
            return t.flags & 256 ? (Qt(t), t) : (Qt(t), null);
        }
        return Qt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = l !== null, e = e !== null && e.memoizedState !== null, n && (l = t.child, a = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (a = l.alternate.memoizedState.cachePool.pool), u = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (u = l.memoizedState.cachePool.pool), u !== a && (l.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Wi(t, t.updateQueue), Ke(t), null);
      case 4:
        return ne(), e === null && Ys(t.stateNode.containerInfo), t.flags |= 67108864, Ke(t), null;
      case 10:
        return Gn(t.type), Ke(t), null;
      case 19:
        if (xc(t), l = t.memoizedState, l === null) return Ke(t), null;
        if (a = (t.flags & 128) !== 0, u = l.rendering, u === null)
          if (a) Nu(l, !1);
          else {
            if ($e !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = qi(e), u !== null) {
                  for (t.flags |= 128, Nu(l, !1), e = u.updateQueue, t.updateQueue = e, Wi(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    Gf(n, e), n = n.sibling;
                  return bu(
                    t,
                    yt.current & 1 | 2
                  ), Ae && In(t, l.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && It() > fr && (t.flags |= 128, a = !0, Nu(l, !1), t.lanes = 4194304);
          }
        else {
          if (!a)
            if (e = qi(u), e !== null) {
              if (t.flags |= 128, a = !0, e = e.updateQueue, t.updateQueue = e, Wi(t, e), Nu(l, !0), l.tail === null && l.tailMode !== "collapsed" && l.tailMode !== "visible" && !u.alternate && !Ae)
                return Ke(t), null;
            } else
              2 * It() - l.renderingStartTime > fr && n !== 536870912 && (t.flags |= 128, a = !0, Nu(l, !1), t.lanes = 4194304);
          l.isBackwards ? (u.sibling = t.child, t.child = u) : (e = l.last, e !== null ? e.sibling = u : t.child = u, l.last = u);
        }
        if (l.tail !== null) {
          e = l.tail;
          e: {
            for (n = e; n !== null; ) {
              if (n.alternate !== null) {
                n = !1;
                break e;
              }
              n = n.sibling;
            }
            n = !0;
          }
          return l.rendering = e, l.tail = e.sibling, l.renderingStartTime = It(), e.sibling = null, u = yt.current, u = a ? u & 1 | 2 : u & 1, l.tailMode === "visible" || l.tailMode === "collapsed" || !n || Ae ? bu(t, u) : (n = u, Le(pt, t), Le(yt, n), At === null && (At = t)), Ae && In(t, l.treeForkCount), e;
        }
        return Ke(t), null;
      case 22:
      case 23:
        return Qt(t), Dc(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ke(t), n = t.updateQueue, n !== null && Wi(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== n && (t.flags |= 2048), e !== null && re(Xl), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Gn(tt), Ke(t), null;
      case 25:
        return null;
      case 30:
        return t.flags |= 33554432, Ke(t), null;
    }
    throw Error(c(156, t.tag));
  }
  function Hp(e, t) {
    switch (pc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Gn(tt), ne(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Ye(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Qt(t), t.alternate === null)
            throw Error(c(340));
          Bl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Qt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(c(340));
          Bl();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return xc(t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null), t.flags |= 4, t) : null;
      case 4:
        return ne(), null;
      case 10:
        return Gn(t.type), null;
      case 22:
      case 23:
        return Qt(t), Dc(), e !== null && re(Xl), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Gn(tt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function gh(e, t) {
    switch (pc(t), t.tag) {
      case 3:
        Gn(tt), ne();
        break;
      case 26:
      case 27:
      case 5:
        Ye(t);
        break;
      case 4:
        ne();
        break;
      case 31:
        t.memoizedState !== null && Qt(t);
        break;
      case 13:
        Qt(t);
        break;
      case 19:
        xc(t);
        break;
      case 10:
        Gn(t.type);
        break;
      case 22:
      case 23:
        Qt(t), Dc(), e !== null && re(Xl);
        break;
      case 24:
        Gn(tt);
    }
  }
  function Ou(e, t) {
    try {
      var n = t.updateQueue, l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var a = l.next;
        n = a;
        do {
          if ((n.tag & e) === e) {
            l = void 0;
            var u = n.create, s = n.inst;
            l = u(), s.destroy = l;
          }
          n = n.next;
        } while (n !== a);
      }
    } catch (f) {
      Be(t, t.return, f);
    }
  }
  function dl(e, t, n) {
    try {
      var l = t.updateQueue, a = l !== null ? l.lastEffect : null;
      if (a !== null) {
        var u = a.next;
        l = u;
        do {
          if ((l.tag & e) === e) {
            var s = l.inst, f = s.destroy;
            if (f !== void 0) {
              s.destroy = void 0, a = t;
              var m = n, _ = f;
              try {
                _();
              } catch (R) {
                Be(
                  a,
                  m,
                  R
                );
              }
            }
          }
          l = l.next;
        } while (l !== u);
      }
    } catch (R) {
      Be(t, t.return, R);
    }
  }
  function ph(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        id(t, n);
      } catch (l) {
        Be(e, e.return, l);
      }
    }
  }
  function yh(e, t, n) {
    n.props = kl(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (l) {
      Be(e, t, l);
    }
  }
  function _n(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            var a = e.stateNode, u = Ln(e.memoizedProps, a);
            (a.ref === null || a.ref.name !== u) && (a.ref = Nm(u)), l = a.ref;
            break;
          case 7:
            if (e.stateNode === null) {
              var s = new Ft(e);
              v(
                e.child,
                !1,
                Oy,
                s,
                void 0,
                void 0
              ), e.stateNode = s;
            }
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof n == "function" ? e.refCleanup = n(l) : n.current = l;
      }
    } catch (f) {
      Be(e, t, f);
    }
  }
  function Et(e, t) {
    var n = e.ref, l = e.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (a) {
          Be(e, t, a);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (a) {
          Be(e, t, a);
        }
      else n.current = null;
  }
  function er(e, t) {
    if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && t !== null)
      for (var n = 0; n < t.length; n++)
        Dm(
          e.stateNode,
          t[n]
        );
  }
  function Eh(e) {
    for (var t = e.return; t !== null && (os(t) && Dm(e.stateNode, t.stateNode), !ss(t)); )
      t = t.return;
  }
  function wu(e) {
    for (var t = e.return; t !== null && (os(t) && wy(e.stateNode, t.stateNode), !ss(t)); )
      t = t.return;
  }
  function ss(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 27;
  }
  function os(e) {
    return e && e.tag === 7 && e.stateNode !== null;
  }
  function fs(e) {
    var t = e.type, n = e.memoizedProps, l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break e;
        case "img":
          n.src ? l.src = n.src : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (a) {
      Be(e, e.return, a);
    }
  }
  function ds(e, t, n) {
    try {
      var l = e.stateNode;
      cy(l, e.type, n, t), l[zt] = t;
    } catch (a) {
      Be(e, e.return, a);
    }
  }
  function bh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && El(e.type) || e.tag === 4;
  }
  function hs(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || bh(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && El(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ms(e, t, n, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      a = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(a, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(a), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Sn)), er(e, l), xe = !0;
    else if (a !== 4 && (a === 27 && (er(e, l), l = null, El(e.type) && (n = e.stateNode, t = null)), e = e.child, e !== null))
      for (ms(
        e,
        t,
        n,
        l
      ), e = e.sibling; e !== null; )
        ms(
          e,
          t,
          n,
          l
        ), e = e.sibling;
  }
  function tr(e, t, n, l) {
    var a = e.tag;
    if (a === 5 || a === 6)
      a = e.stateNode, t ? n.insertBefore(a, t) : n.appendChild(a), er(e, l), xe = !0;
    else if (a !== 4 && (a === 27 && (er(e, l), l = null, El(e.type) && (n = e.stateNode)), e = e.child, e !== null))
      for (tr(
        e,
        t,
        n,
        l
      ), e = e.sibling; e !== null; )
        tr(
          e,
          t,
          n,
          l
        ), e = e.sibling;
  }
  function Sh(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var l = e.type, a = t.attributes; a.length; )
        t.removeAttributeNode(a[0]);
      bt(t, l, n), t[vt] = e, t[zt] = n;
    } catch (u) {
      Be(e, e.return, u);
    }
  }
  var nr = !1, Kt = null;
  function Th(e) {
    (e.tag === 30 || (e.subtreeFlags & 33554432) !== 0) && (nr = !0);
  }
  var Nn = null;
  function Ah() {
    var e = Nn;
    return Nn = null, e;
  }
  var Mt = 0;
  function _a(e, t, n, l, a) {
    return Mt = 0, _h(
      e.child,
      t,
      n,
      l,
      a
    );
  }
  function _h(e, t, n, l, a) {
    for (var u = !1; e !== null; ) {
      if (e.tag === 5) {
        var s = e.stateNode;
        if (l !== null) {
          var f = $s(s);
          l.push(f), f.view && (u = !0);
        } else
          u || $s(s).view && (u = !0);
        nr = !0, Am(
          s,
          Mt === 0 ? t : t + "_" + Mt,
          n
        ), Mt++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && a || _h(
        e.child,
        t,
        n,
        l,
        a
      ) && (u = !0));
      e = e.sibling;
    }
    return u;
  }
  function On(e, t) {
    for (; e !== null; )
      e.tag === 5 ? _m(e.stateNode, e.memoizedProps) : (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && t || On(
        e.child,
        t
      )), e = e.sibling;
  }
  function lr(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null; ) {
        if ((e.tag !== 22 || e.memoizedState === null) && (lr(e), e.tag === 30 && (e.flags & 18874368) !== 0 && e.stateNode.paired)) {
          var t = e.memoizedProps;
          if (t.name == null || t.name === "auto")
            throw Error(c(544));
          var n = t.name;
          t = qn(t.default, t.share), t !== "none" && (_a(
            e,
            n,
            t,
            null,
            !1
          ) || On(e.child, !1));
        }
        e = e.sibling;
      }
  }
  function vs(e, t) {
    if (e.tag === 30) {
      var n = e.stateNode, l = e.memoizedProps, a = Ln(l, n), u = qn(
        l.default,
        n.paired ? l.share : l.enter
      );
      u !== "none" ? _a(e, a, u, null, !1) ? (lr(e), n.paired || t || za(e, l.onEnter)) : On(e.child, !1) : lr(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        vs(e, t), e = e.sibling;
    else lr(e);
  }
  function gs(e) {
    if (Kt !== null && Kt.size !== 0) {
      var t = Kt;
      if ((e.subtreeFlags & 18874368) !== 0)
        for (e = e.child; e !== null; ) {
          if (e.tag !== 22 || e.memoizedState === null) {
            if (e.tag === 30 && (e.flags & 18874368) !== 0) {
              var n = e.memoizedProps, l = n.name;
              if (l != null && l !== "auto") {
                var a = t.get(l);
                if (a !== void 0) {
                  var u = qn(
                    n.default,
                    n.share
                  );
                  if (u !== "none" && (_a(
                    e,
                    l,
                    u,
                    null,
                    !1
                  ) ? (u = e.stateNode, a.paired = u, u.paired = a, za(e, n.onShare)) : On(e.child, !1)), t.delete(l), t.size === 0) break;
                }
              }
            }
            gs(e);
          }
          e = e.sibling;
        }
    }
  }
  function ps(e) {
    if (e.tag === 30) {
      var t = e.memoizedProps, n = Ln(t, e.stateNode), l = Kt !== null ? Kt.get(n) : void 0, a = qn(
        t.default,
        l !== void 0 ? t.share : t.exit
      );
      a !== "none" && (_a(e, n, a, null, !1) ? l !== void 0 ? (a = e.stateNode, l.paired = a, a.paired = l, Kt.delete(n), za(e, t.onShare)) : za(e, t.onExit) : On(e.child, !1)), Kt !== null && gs(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        ps(e), e = e.sibling;
    else
      Kt !== null && gs(e);
  }
  function Nh(e) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var t = e.memoizedProps, n = Ln(t, e.stateNode);
        t = qn(t.default, t.update), e.flags &= -5, t !== "none" && _a(
          e,
          n,
          t,
          e.memoizedState = [],
          !1
        );
      } else
        (e.subtreeFlags & 33554432) !== 0 && Nh(e);
      e = e.sibling;
    }
  }
  function ys(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null; ) {
        if (e.tag !== 22 || e.memoizedState === null) {
          if (e.tag === 30 && (e.flags & 18874368) !== 0) {
            var t = e.stateNode;
            t.paired !== null && (t.paired = null, On(e.child, !1));
          }
          ys(e);
        }
        e = e.sibling;
      }
  }
  function ar(e) {
    if (e.tag === 30)
      e.stateNode.paired = null, On(e.child, !1), ys(e);
    else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        ar(e), e = e.sibling;
    else ys(e);
  }
  function Oh(e) {
    for (e = e.child; e !== null; )
      e.tag === 30 ? On(e.child, !1) : (e.subtreeFlags & 33554432) !== 0 && Oh(e), e = e.sibling;
  }
  function Es(e, t, n, l, a, u, s) {
    for (var f = !1; t !== null; ) {
      if (t.tag === 5) {
        var m = t.stateNode;
        if (u !== null && Mt < u.length) {
          var _ = u[Mt], R = $s(m);
          (_.view || R.view) && (f = !0);
          var j;
          if (j = (e.flags & 4) === 0)
            if (R.clip) j = !0;
            else {
              j = _.rect;
              var S = R.rect;
              j = j.y !== S.y || j.x !== S.x || j.height !== S.height || j.width !== S.width;
            }
          j && (e.flags |= 4), R.abs ? R = !_.abs : (_ = _.rect, R = R.rect, R = _.height !== R.height || _.width !== R.width), R && (e.flags |= 32);
        } else e.flags |= 32;
        (e.flags & 4) !== 0 && Am(
          m,
          Mt === 0 ? n : n + "_" + Mt,
          a
        ), f && (e.flags & 4) !== 0 || (Nn === null && (Nn = []), Nn.push(
          m,
          Mt === 0 ? l : l + "_" + Mt,
          t.memoizedProps
        )), Mt++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && s ? e.flags |= t.flags & 32 : Es(
        e,
        t.child,
        n,
        l,
        a,
        u,
        s
      ) && (f = !0));
      t = t.sibling;
    }
    return f;
  }
  function wh(e, t) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var n = e.memoizedProps, l = e.stateNode, a = Ln(n, l), u = qn(n.default, n.update), s;
        s = e.memoizedState, e.memoizedState = null, l = e;
        var f = e.child;
        Mt = 0, a = Es(
          l,
          f,
          a,
          a,
          u,
          s,
          !1
        ), (e.flags & 4) !== 0 && a && za(e, n.onUpdate);
      } else
        (e.subtreeFlags & 33554432) !== 0 && wh(e);
      e = e.sibling;
    }
  }
  var ot = !1, He = !1, wn = !1, bs = !1, Ch = typeof WeakSet == "function" ? WeakSet : Set, ft = null, Cn = !1, Cu = !1, ur = !1, Ss = !1;
  function Lp(e, t, n) {
    if (e = e.containerInfo, Ks = Ga, e = zf(e), rc(e)) {
      if ("selectionStart" in e)
        var l = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          l = (l = e.ownerDocument) && l.defaultView || window;
          var a = l.getSelection && l.getSelection();
          if (a && a.rangeCount !== 0) {
            l = a.anchorNode;
            var u = a.anchorOffset, s = a.focusNode;
            a = a.focusOffset;
            try {
              l.nodeType, s.nodeType;
            } catch {
              l = null;
              break e;
            }
            var f = 0, m = -1, _ = -1, R = 0, j = 0, S = e, O = null;
            t: for (; ; ) {
              for (var J; S !== l || u !== 0 && S.nodeType !== 3 || (m = f + u), S !== s || a !== 0 && S.nodeType !== 3 || (_ = f + a), S.nodeType === 3 && (f += S.nodeValue.length), (J = S.firstChild) !== null; )
                O = S, S = J;
              for (; ; ) {
                if (S === e) break t;
                if (O === l && ++R === u && (m = f), O === s && ++j === a && (_ = f), (J = S.nextSibling) !== null) break;
                S = O, O = S.parentNode;
              }
              S = J;
            }
            l = m === -1 || _ === -1 ? null : { start: m, end: _ };
          } else l = null;
        }
      l = l || { start: 0, end: 0 };
    } else l = null;
    for (Zs = { focusedElem: e, selectionRange: l }, Ga = !1, n = (n & 335544064) === n, ft = t, t = n ? 9270 : 1024; ft !== null; ) {
      if (e = ft, n && (l = e.deletions, l !== null))
        for (u = 0; u < l.length; u++)
          n && ps(l[u]);
      if (e.alternate === null && (e.flags & 2) !== 0)
        n && Th(e), ir(n);
      else {
        if (e.tag === 22) {
          if (l = e.alternate, e.memoizedState !== null) {
            l !== null && l.memoizedState === null && n && ps(l), ir(n);
            continue;
          } else if (l !== null && l.memoizedState !== null) {
            n && Th(e), ir(n);
            continue;
          }
        }
        l = e.child, (e.subtreeFlags & t) !== 0 && l !== null ? (l.return = e, ft = l) : (n && Nh(e), ir(n));
      }
    }
    Kt = null;
  }
  function ir(e) {
    for (; ft !== null; ) {
      var t = ft, n = e, l = t.alternate, a = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((a & 1024) !== 0 && l !== null) {
            n = void 0, a = l.memoizedProps, l = l.memoizedState;
            var u = t.stateNode;
            try {
              var s = kl(
                t.type,
                a
              );
              n = u.getSnapshotBeforeUpdate(
                s,
                l
              ), u.__reactInternalSnapshotBeforeUpdate = n;
            } catch (f) {
              Be(t, t.return, f);
            }
          }
          break;
        case 3:
          if ((a & 1024) !== 0) {
            if (l = t.stateNode.containerInfo, n = l.nodeType, n === 9)
              eo(l);
            else if (n === 1)
              switch (l.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  eo(l);
                  break;
                default:
                  l.textContent = "";
              }
          }
          break;
        case 5:
        case 26:
        case 27:
        case 6:
        case 4:
        case 17:
          break;
        case 30:
          n && l !== null && (n = Ln(
            l.memoizedProps,
            l.stateNode
          ), a = t.memoizedProps, a = qn(a.default, a.update), a !== "none" && _a(
            l,
            n,
            a,
            l.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((a & 1024) !== 0) throw Error(c(163));
      }
      if (l = t.sibling, l !== null) {
        l.return = t.return, ft = l;
        break;
      }
      ft = t.return;
    }
  }
  function Rh(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Rn(e, n), l & 4 && Ou(5, n);
        break;
      case 1:
        if (Rn(e, n), l & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (s) {
              Be(n, n.return, s);
            }
          else {
            var a = kl(
              n.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                a,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (s) {
              Be(
                n,
                n.return,
                s
              );
            }
          }
        l & 64 && ph(n), l & 512 && _n(n, n.return);
        break;
      case 3:
        if (Rn(e, n), l & 64 && (e = n.updateQueue, e !== null)) {
          if (t = null, n.child !== null)
            switch (n.child.tag) {
              case 27:
              case 5:
                t = n.child.stateNode;
                break;
              case 1:
                t = n.child.stateNode;
            }
          try {
            id(e, t);
          } catch (s) {
            Be(n, n.return, s);
          }
        }
        break;
      case 27:
        t === null && l & 4 && Sh(n);
      case 26:
      case 5:
        Rn(e, n), t === null && l & 4 && fs(n), l & 512 && _n(n, n.return);
        break;
      case 12:
        Rn(e, n);
        break;
      case 31:
        Rn(e, n), l & 4 && xh(e, n);
        break;
      case 13:
        Rn(e, n), l & 4 && Mh(e, n), l & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = kp.bind(
          null,
          n
        ), Uy(e, n))));
        break;
      case 22:
        if (l = n.memoizedState !== null || ot, !l) {
          var u = t !== null && t.memoizedState !== null || He;
          t = ot, a = He, ot = l, (He = u) && !a ? (l = 2, (n.subtreeFlags & 8772) !== 0 && (l |= 1), gn(
            e,
            n,
            l
          )) : Rn(e, n), ot = t, He = a;
        }
        break;
      case 30:
        Rn(e, n), l & 512 && _n(n, n.return);
        break;
      case 7:
        l & 512 && _n(n, n.return);
      default:
        Rn(e, n);
    }
  }
  function Ts(e, t) {
    for (e = e.child; e !== null; )
      Uh(e, t), e = e.sibling;
  }
  function Uh(e, t) {
    switch (e.tag) {
      case 5:
      case 26:
        try {
          var n = e.stateNode;
          if (t) {
            var l = n.style;
            typeof l.setProperty == "function" ? l.setProperty("display", "none", "important") : l.display = "none";
          } else {
            var a = e.stateNode, u = e.memoizedProps.style, s = u != null && u.hasOwnProperty("display") ? u.display : null;
            a.style.display = s == null || typeof s == "boolean" ? "" : ("" + s).trim();
          }
        } catch (m) {
          Be(e, e.return, m);
        }
        As(e, t);
        break;
      case 6:
        try {
          e.stateNode.nodeValue = t ? "" : e.memoizedProps, xe = !0;
        } catch (m) {
          Be(e, e.return, m);
        }
        break;
      case 18:
        try {
          var f = e.stateNode;
          t ? Tm(f, !0) : Tm(e.stateNode, !1);
        } catch (m) {
          Be(e, e.return, m);
        }
        break;
      case 22:
      case 23:
        e.memoizedState === null && Ts(e, t);
        break;
      default:
        Ts(e, t);
    }
  }
  function As(e, t) {
    if (e.subtreeFlags & 67108864)
      for (e = e.child; e !== null; ) {
        e: {
          var n = e, l = t;
          switch (n.tag) {
            case 4:
              Uh(n, l);
              break e;
            case 22:
              n.memoizedState === null && As(n, l);
              break e;
            default:
              As(n, l);
          }
        }
        e = e.sibling;
      }
  }
  function Dh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Dh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && fi(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ze = null, jt = !1;
  function mn(e, t, n) {
    for (n = n.child; n !== null; )
      zh(e, t, n), n = n.sibling;
  }
  function zh(e, t, n) {
    if (Vt && typeof Vt.onCommitFiberUnmount == "function")
      try {
        Vt.onCommitFiberUnmount($a, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        He || Et(n, t), mn(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !He && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        He || Et(n, t), wu(n);
        var l = Ze, a = jt;
        El(n.type) && (Ze = n.stateNode, jt = !1), mn(
          e,
          t,
          n
        ), Hm(
          n.stateNode,
          n.type,
          n.memoizedProps
        ), Ze = l, jt = a;
        break;
      case 5:
        He || Et(n, t), wu(n);
      case 6:
        if (n.tag === 6 && wu(n), l = Ze, a = jt, Ze = null, mn(
          e,
          t,
          n
        ), Ze = l, jt = a, Ze !== null)
          if (jt)
            try {
              (Ze.nodeType === 9 ? Ze.body : Ze.nodeName === "HTML" ? Ze.ownerDocument.body : Ze).removeChild(n.stateNode), xe = !0;
            } catch (u) {
              Be(
                n,
                t,
                u
              );
            }
          else
            try {
              Ze.removeChild(n.stateNode), xe = !0;
            } catch (u) {
              Be(
                n,
                t,
                u
              );
            }
        break;
      case 18:
        Ze !== null && (jt ? (e = Ze, Sm(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), Ya(e)) : Sm(Ze, n.stateNode));
        break;
      case 4:
        l = Ze, a = jt, Ze = n.stateNode.containerInfo, jt = !0, mn(
          e,
          t,
          n
        ), Ze = l, jt = a;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        dl(2, n, t), He || dl(4, n, t), mn(
          e,
          t,
          n
        );
        break;
      case 1:
        He || (Et(n, t), l = n.stateNode, typeof l.componentWillUnmount == "function" && yh(
          n,
          t,
          l
        )), mn(
          e,
          t,
          n
        );
        break;
      case 21:
        mn(
          e,
          t,
          n
        );
        break;
      case 22:
        He = (l = He) || n.memoizedState !== null, mn(
          e,
          t,
          n
        ), He = l;
        break;
      case 30:
        Et(n, t), mn(
          e,
          t,
          n
        );
        break;
      case 7:
        He || Et(n, t), mn(
          e,
          t,
          n
        );
        break;
      default:
        mn(
          e,
          t,
          n
        );
    }
  }
  function xh(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Ya(e);
      } catch (n) {
        Be(t, t.return, n);
      }
    }
  }
  function Mh(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Ya(e);
      } catch (n) {
        Be(t, t.return, n);
      }
  }
  function qp(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Ch()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Ch()), t;
      default:
        throw Error(c(435, e.tag));
    }
  }
  function rr(e, t) {
    var n = qp(e);
    t.forEach(function(l) {
      if (!n.has(l)) {
        n.add(l);
        var a = Fp.bind(null, e, l);
        l.then(a, a);
      }
    });
  }
  function Ct(e, t, n) {
    var l = t.deletions;
    if (l !== null)
      for (var a = 0; a < l.length; a++) {
        var u = l[a], s = e, f = t, m = f;
        e: for (; m !== null; ) {
          switch (m.tag) {
            case 27:
              if (El(m.type)) {
                Ze = m.stateNode, jt = !1;
                break e;
              }
              break;
            case 5:
              Ze = m.stateNode, jt = !1;
              break e;
            case 3:
            case 4:
              Ze = m.stateNode.containerInfo, jt = !0;
              break e;
          }
          m = m.return;
        }
        if (Ze === null) throw Error(c(160));
        zh(s, f, u), Ze = null, jt = !1, s = u.alternate, s !== null && (s.return = null), u.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        jh(t, e, n), t = t.sibling;
  }
  var vn = null;
  function jh(e, t, n) {
    var l = e.alternate, a = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (a & 4 && (l = e.updateQueue, l = l !== null ? l.events : null, l !== null))
          for (var u = 0; u < l.length; u++) {
            var s = l[u];
            s.ref.impl = s.nextImpl;
          }
        Ct(t, e, n), Rt(e), a & 4 && (dl(3, e, e.return), Ou(3, e), dl(5, e, e.return));
        break;
      case 1:
        Ct(t, e, n), Rt(e), a & 512 && (He || l === null || Et(l, l.return)), a & 64 && ot && (e = e.updateQueue, e !== null && (t = e.callbacks, t !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? t : n.concat(t))));
        break;
      case 26:
        if (u = vn, Ct(t, e, n), Rt(e), a & 512 && (He || l === null || Et(l, l.return)), a & 4)
          if (a = l !== null ? l.memoizedState : null, n = e.memoizedState, l === null)
            if (n === null)
              if (e.stateNode === null)
                if (ot)
                  e.stateNode = ym(
                    e.type,
                    e.memoizedProps,
                    t.containerInfo,
                    e
                  );
                else {
                  e: {
                    t = e.type, n = e.memoizedProps, a = u.ownerDocument || u;
                    t: switch (t) {
                      case "title":
                        l = a.getElementsByTagName("title")[0], (!l || l[eu] || l[vt] || l.namespaceURI === "http://www.w3.org/2000/svg" || l.hasAttribute("itemprop")) && (l = a.createElement(t), a.head.insertBefore(
                          l,
                          a.querySelector("head > title")
                        )), bt(l, t, n), l[vt] = e, ct(l), t = l;
                        break e;
                      case "link":
                        if (u = Gm(
                          "link",
                          "href",
                          a
                        ).get(t + (n.href || ""))) {
                          for (s = 0; s < u.length; s++)
                            if (l = u[s], l.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && l.getAttribute("rel") === (n.rel == null ? null : n.rel) && l.getAttribute("title") === (n.title == null ? null : n.title) && l.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                              u.splice(s, 1);
                              break t;
                            }
                        }
                        l = a.createElement(t), bt(l, t, n), a.head.appendChild(l);
                        break;
                      case "meta":
                        if (u = Gm(
                          "meta",
                          "content",
                          a
                        ).get(t + (n.content || ""))) {
                          for (s = 0; s < u.length; s++)
                            if (l = u[s], l.getAttribute("content") === (n.content == null ? null : "" + n.content) && l.getAttribute("name") === (n.name == null ? null : n.name) && l.getAttribute("property") === (n.property == null ? null : n.property) && l.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && l.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                              u.splice(s, 1);
                              break t;
                            }
                        }
                        l = a.createElement(t), bt(l, t, n), a.head.appendChild(l);
                        break;
                      default:
                        throw Error(c(468, t));
                    }
                    l[vt] = e, ct(l), t = l;
                  }
                  e.stateNode = t;
                }
              else
                ot || ro(u, e.type, e.stateNode);
            else
              e.stateNode = Vm(
                u,
                n,
                e.memoizedProps
              );
          else
            a !== n ? (a === null ? (t = l.stateNode, t === null || He || t.parentNode.removeChild(t)) : a.count--, n === null ? ot || ro(u, e.type, e.stateNode) : Vm(u, n, e.memoizedProps)) : n === null && e.stateNode !== null && ds(
              e,
              e.memoizedProps,
              l.memoizedProps
            );
        break;
      case 27:
        Ct(t, e, n), Rt(e), a & 512 && (He || l === null || Et(l, l.return)), l !== null && a & 4 && ds(
          e,
          e.memoizedProps,
          l.memoizedProps
        );
        break;
      case 5:
        if (u = wn, wn = !1, Ct(t, e, n), wn = u, Rt(e), a & 512 && (He || l === null || Et(l, l.return)), e.flags & 32) {
          t = e.stateNode;
          try {
            ia(t, ""), xe = !0;
          } catch (R) {
            Be(e, e.return, R);
          }
        }
        a & 4 && e.stateNode != null && (t = e.memoizedProps, ds(
          e,
          t,
          l !== null ? l.memoizedProps : t
        )), a & 1024 && (bs = !0);
        break;
      case 6:
        if (Ct(t, e, n), Rt(e), a & 4) {
          if (e.stateNode === null)
            throw Error(c(162));
          t = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = t, xe = !0;
          } catch (R) {
            Be(e, e.return, R);
          }
        }
        break;
      case 3:
        if (xe = !1, Tr = null, u = vn, vn = Lu(t.containerInfo), Ct(t, e, n), vn = u, Rt(e), a & 4 && l !== null && l.memoizedState.isDehydrated)
          try {
            Ya(t.containerInfo);
          } catch (R) {
            Be(e, e.return, R);
          }
        bs && (bs = !1, Hh(e)), xe = !1;
        break;
      case 4:
        a = wn, wn = ot, l = tf(), u = vn, vn = Lu(
          e.stateNode.containerInfo
        ), Ct(t, e, n), Rt(e), vn = u, xe && Cu && (ur = !0), xe = l, wn = a;
        break;
      case 12:
        Ct(t, e, n), Rt(e);
        break;
      case 31:
        Ct(t, e, n), Rt(e), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, rr(e, t)));
        break;
      case 13:
        Ct(t, e, n), Rt(e), e.child.flags & 8192 && e.memoizedState !== null != (l !== null && l.memoizedState !== null) && (or = It()), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, rr(e, t)));
        break;
      case 22:
        u = e.memoizedState !== null, s = l !== null && l.memoizedState !== null;
        var f = ot, m = He, _ = wn;
        ot = f || u, wn = _ || u, He = m || s, Ct(t, e, n), He = m, wn = _, ot = f, Rt(e), a & 8192 && (t = e.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, !u || l === null || s || ot || He || (t = s || He, n = ot, l = He, ot = u || ot, He = t, hl(e, 2), ot = n, He = l), !u && wn || Ts(e, u)), a & 4 && (t = e.updateQueue, t !== null && (n = t.retryQueue, n !== null && (t.retryQueue = null, rr(e, n))));
        break;
      case 19:
        Ct(t, e, n), Rt(e), a & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, rr(e, t)));
        break;
      case 30:
        a & 512 && (He || l === null || Et(l, l.return)), a = tf(), u = Cu, s = (n & 335544064) === n, f = e.memoizedProps, Cu = s && qn(
          f.default,
          f.update
        ) !== "none", Ct(t, e, n), Rt(e), s && l !== null && xe && (e.flags |= 4), Cu = u, xe = a;
        break;
      case 21:
        break;
      case 7:
        a & 512 && (He || l === null || Et(l, l.return)), l && l.stateNode !== null && (l.stateNode._fragmentFiber = e);
      default:
        Ct(t, e, n), Rt(e);
    }
  }
  function Rt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, l = e.return; l !== null; ) {
          if (bh(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        l = null;
        for (var a = e.return; a !== null; ) {
          if (os(a)) {
            var u = a.stateNode;
            l === null ? l = [u] : l.push(u);
          }
          if (ss(a)) break;
          a = a.return;
        }
        var s = l;
        if (n == null) throw Error(c(160));
        switch (n.tag) {
          case 27:
            var f = n.stateNode, m = hs(e);
            tr(
              e,
              m,
              f,
              s
            );
            break;
          case 5:
            var _ = n.stateNode;
            n.flags & 32 && (ia(_, ""), n.flags &= -33);
            var R = hs(e);
            tr(
              e,
              R,
              _,
              s
            );
            break;
          case 3:
          case 4:
            var j = n.stateNode.containerInfo, S = hs(e);
            ms(
              e,
              S,
              j,
              s
            );
            break;
          default:
            throw Error(c(161));
        }
      } catch (O) {
        Be(e, e.return, O);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Hh(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Hh(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, Ga = !0, t.reset(), Ga = !1), e = e.sibling;
      }
  }
  function Na(e, t) {
    if (t.subtreeFlags & 9270)
      for (t = t.child; t !== null; )
        Lh(t, e), t = t.sibling;
    else wh(t);
  }
  function Lh(e, t) {
    var n = e.alternate;
    if (n === null) vs(e, !1);
    else
      switch (e.tag) {
        case 3:
          if (Ss = Cn = !1, Ah(), Na(t, e), !Cn && !ur) {
            if (e = Nn, e !== null)
              for (var l = 0; l < e.length; l += 3) {
                n = e[l];
                var a = e[l + 1];
                _m(n, e[l + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + a + ")"
                  }
                );
              }
            e = t.containerInfo, e = e.nodeType === 9 ? e.documentElement : e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "" && (e.style.viewTransitionName = "none", e.animate(
              { opacity: [0, 0], pointerEvents: ["none", "none"] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition-group(root)"
              }
            ), e.animate(
              { width: [0, 0], height: [0, 0] },
              {
                duration: 0,
                fill: "forwards",
                pseudoElement: "::view-transition"
              }
            )), Ss = !0;
          }
          Nn = null;
          break;
        case 5:
          Na(t, e);
          break;
        case 4:
          l = Cn, Cn = !1, Na(t, e), Cn && (ur = !0), Cn = l;
          break;
        case 22:
          e.memoizedState === null && (n.memoizedState !== null ? vs(e, !1) : Na(t, e));
          break;
        case 30:
          l = Cn, a = Ah(), Cn = !1, Na(t, e), Cn && (e.flags |= 4);
          var u = e.memoizedProps, s = e.stateNode;
          t = Ln(u, s), s = Ln(n.memoizedProps, s);
          var f = qn(u.default, u.update);
          f === "none" ? t = !1 : (u = n.memoizedState, n.memoizedState = null, n = e.child, Mt = 0, t = Es(
            e,
            n,
            t,
            s,
            f,
            u,
            !0
          ), Mt !== (u === null ? 0 : u.length) && (e.flags |= 32)), (e.flags & 4) !== 0 && t ? (za(
            e,
            e.memoizedProps.onUpdate
          ), Nn = a) : a !== null && (a.push.apply(a, Nn), Nn = a), Cn = (e.flags & 32) !== 0 ? !0 : l;
          break;
        default:
          Na(t, e);
      }
  }
  function Rn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Rh(e, t.alternate, t), t = t.sibling;
  }
  function hl(e, t) {
    for (e = e.child; e !== null; ) {
      var n = e, l = t;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          dl(4, n, n.return), hl(
            n,
            l
          );
          break;
        case 1:
          Et(n, n.return);
          var a = n.stateNode;
          typeof a.componentWillUnmount == "function" && yh(
            n,
            n.return,
            a
          ), hl(
            n,
            l
          );
          break;
        case 27:
          (l & 2) !== 0 && Hm(
            n.stateNode,
            n.type,
            n.memoizedProps
          );
        case 5:
          Et(n, n.return), n.tag !== 5 && n.tag !== 27 || wu(n), hl(
            n,
            l
          );
          break;
        case 6:
          wu(n);
          break;
        case 26:
          Et(n, n.return), a = n.stateNode, n.memoizedState !== null || a === null || He || a.parentNode.removeChild(a), hl(
            n,
            l
          );
          break;
        case 22:
          n.memoizedState === null && hl(
            n,
            l
          );
          break;
        case 30:
          Et(n, n.return), hl(
            n,
            l
          );
          break;
        case 7:
          Et(n, n.return);
        default:
          hl(
            n,
            l
          );
      }
      e = e.sibling;
    }
  }
  function gn(e, t, n) {
    for (n = (t.subtreeFlags & 8772) !== 0 ? n : n & -2, t = t.child; t !== null; ) {
      var l = t.alternate, a = e, u = t, s = u.flags, f = (n & 1) !== 0;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          gn(
            a,
            u,
            n
          ), Ou(4, u);
          break;
        case 1:
          if (gn(
            a,
            u,
            n
          ), l = u, a = l.stateNode, typeof a.componentDidMount == "function")
            try {
              a.componentDidMount();
            } catch (R) {
              Be(l, l.return, R);
            }
          if (l = u, a = l.updateQueue, a !== null) {
            var m = l.stateNode;
            try {
              var _ = a.shared.hiddenCallbacks;
              if (_ !== null)
                for (a.shared.hiddenCallbacks = null, a = 0; a < _.length; a++)
                  ud(_[a], m);
            } catch (R) {
              Be(l, l.return, R);
            }
          }
          f && s & 64 && ph(u), _n(u, u.return);
          break;
        case 27:
          (n & 2) !== 0 && Sh(u);
        case 5:
          u.tag !== 5 && u.tag !== 27 || Eh(u), gn(
            a,
            u,
            n
          ), f && l === null && s & 4 && fs(u), _n(u, u.return);
          break;
        case 6:
          Eh(u);
          break;
        case 26:
          m = u.stateNode, u.memoizedState !== null || m === null || ot || ro(
            Lu(m.ownerDocument),
            u.type,
            m
          ), gn(
            a,
            u,
            n
          ), f && l === null && s & 4 && fs(u), _n(u, u.return);
          break;
        case 12:
          gn(
            a,
            u,
            n
          );
          break;
        case 31:
          gn(
            a,
            u,
            n
          ), f && s & 4 && xh(a, u);
          break;
        case 13:
          gn(
            a,
            u,
            n
          ), f && s & 4 && Mh(a, u);
          break;
        case 22:
          u.memoizedState === null && gn(
            a,
            u,
            n
          ), _n(u, u.return);
          break;
        case 30:
          gn(
            a,
            u,
            n
          ), _n(u, u.return);
          break;
        case 7:
          _n(u, u.return);
        default:
          gn(
            a,
            u,
            n
          );
      }
      t = t.sibling;
    }
  }
  function _s(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && hu(n));
  }
  function Ns(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && hu(e));
  }
  function rn(e, t, n, l) {
    var a = (n & 335544064) === n;
    if (t.subtreeFlags & (a ? 10262 : 10256))
      for (t = t.child; t !== null; )
        qh(
          e,
          t,
          n,
          l
        ), t = t.sibling;
    else a && Oh(t);
  }
  function qh(e, t, n, l) {
    var a = (n & 335544064) === n;
    a && t.alternate === null && t.return !== null && t.return.alternate !== null && ar(t);
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        rn(
          e,
          t,
          n,
          l
        ), u & 2048 && Ou(9, t);
        break;
      case 1:
        rn(
          e,
          t,
          n,
          l
        );
        break;
      case 3:
        rn(
          e,
          t,
          n,
          l
        ), a && Ss && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), u & 2048 && (u = null, t.alternate !== null && (u = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== u && (t.refCount++, u != null && hu(u)));
        break;
      case 12:
        if (u & 2048) {
          rn(
            e,
            t,
            n,
            l
          ), u = t.stateNode;
          try {
            var s = t.memoizedProps, f = s.id, m = s.onPostCommit;
            typeof m == "function" && m(
              f,
              t.alternate === null ? "mount" : "update",
              u.passiveEffectDuration,
              -0
            );
          } catch (_) {
            Be(t, t.return, _);
          }
        } else
          rn(
            e,
            t,
            n,
            l
          );
        break;
      case 31:
        rn(
          e,
          t,
          n,
          l
        );
        break;
      case 13:
        rn(
          e,
          t,
          n,
          l
        );
        break;
      case 23:
        break;
      case 22:
        s = t.stateNode, f = t.alternate, t.memoizedState !== null ? (a && f !== null && f.memoizedState === null && ar(f), s._visibility & 2 ? rn(
          e,
          t,
          n,
          l
        ) : Ru(
          e,
          t
        )) : (a && f !== null && f.memoizedState !== null && ar(t), s._visibility & 2 ? rn(
          e,
          t,
          n,
          l
        ) : (s._visibility |= 2, Oa(
          e,
          t,
          n,
          l,
          (t.subtreeFlags & 10256) !== 0 || !1
        ))), u & 2048 && _s(f, t);
        break;
      case 24:
        rn(
          e,
          t,
          n,
          l
        ), u & 2048 && Ns(t.alternate, t);
        break;
      case 30:
        a && (u = t.alternate, u !== null && (On(u.child, !0), On(t.child, !0))), rn(
          e,
          t,
          n,
          l
        );
        break;
      default:
        rn(
          e,
          t,
          n,
          l
        );
    }
  }
  function Oa(e, t, n, l, a) {
    for (a = a && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, s = t, f = n, m = l, _ = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          Oa(
            u,
            s,
            f,
            m,
            a
          ), Ou(8, s);
          break;
        case 23:
          break;
        case 22:
          var R = s.stateNode;
          s.memoizedState !== null ? R._visibility & 2 ? Oa(
            u,
            s,
            f,
            m,
            a
          ) : Ru(
            u,
            s
          ) : (R._visibility |= 2, Oa(
            u,
            s,
            f,
            m,
            a
          )), a && _ & 2048 && _s(
            s.alternate,
            s
          );
          break;
        case 24:
          Oa(
            u,
            s,
            f,
            m,
            a
          ), a && _ & 2048 && Ns(s.alternate, s);
          break;
        default:
          Oa(
            u,
            s,
            f,
            m,
            a
          );
      }
      t = t.sibling;
    }
  }
  function Ru(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, l = t, a = l.flags;
        switch (l.tag) {
          case 22:
            Ru(n, l), a & 2048 && _s(
              l.alternate,
              l
            );
            break;
          case 24:
            Ru(n, l), a & 2048 && Ns(l.alternate, l);
            break;
          default:
            Ru(n, l);
        }
        t = t.sibling;
      }
  }
  var Fl = 8192;
  function $l(e, t, n) {
    if (e.subtreeFlags & Fl)
      for (e = e.child; e !== null; )
        Bh(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function Bh(e, t, n) {
    switch (e.tag) {
      case 26:
        $l(
          e,
          t,
          n
        ), e.flags & Fl && (e.memoizedState !== null ? Xy(
          n,
          vn,
          e.memoizedState,
          e.memoizedProps
        ) : (e = e.stateNode, (t & 335544128) === t && Km(n, e)));
        break;
      case 5:
        $l(
          e,
          t,
          n
        ), e.flags & Fl && (e = e.stateNode, (t & 335544128) === t && Km(n, e));
        break;
      case 3:
      case 4:
        var l = vn;
        vn = Lu(e.stateNode.containerInfo), $l(
          e,
          t,
          n
        ), vn = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = Fl, Fl = 16777216, $l(
          e,
          t,
          n
        ), Fl = l) : $l(
          e,
          t,
          n
        ));
        break;
      case 30:
        if ((e.flags & Fl) !== 0 && (l = e.memoizedProps.name, l != null && l !== "auto")) {
          var a = e.stateNode;
          a.paired = null, Kt === null && (Kt = /* @__PURE__ */ new Map()), Kt.set(l, a);
        }
        $l(
          e,
          t,
          n
        );
        break;
      default:
        $l(
          e,
          t,
          n
        );
    }
  }
  function Ih(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Uu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          ft = l, Gh(
            l,
            e
          );
        }
      Ih(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Vh(e), e = e.sibling;
  }
  function Vh(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Uu(e), e.flags & 2048 && dl(9, e, e.return);
        break;
      case 3:
        Uu(e);
        break;
      case 12:
        Uu(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, cr(e)) : Uu(e);
        break;
      default:
        Uu(e);
    }
  }
  function cr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          ft = l, Gh(
            l,
            e
          );
        }
      Ih(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          dl(8, t, t.return), cr(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, cr(t));
          break;
        default:
          cr(t);
      }
      e = e.sibling;
    }
  }
  function Gh(e, t) {
    for (; ft !== null; ) {
      var n = ft;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          dl(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          hu(n.memoizedState.cache);
      }
      if (l = n.child, l !== null) l.return = n, ft = l;
      else
        e: for (n = e; ft !== null; ) {
          l = ft;
          var a = l.sibling, u = l.return;
          if (Dh(l), l === n) {
            ft = null;
            break e;
          }
          if (a !== null) {
            a.return = u, ft = a;
            break e;
          }
          ft = u;
        }
    }
  }
  var Bp = {
    getCacheForType: function(e) {
      var t = gt(tt), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return gt(tt).controller.signal;
    }
  }, Ip = typeof WeakMap == "function" ? WeakMap : Map, je = 0, Xe = null, _e = null, we = 0, qe = 0, Zt = null, ml = !1, wa = !1, Os = !1, Zn = 0, $e = 0, vl = 0, Pl = 0, sr = 0, Jt = 0, Ca = 0, Du = null, Ht = null, ws = !1, or = 0, Yh = 0, fr = 1 / 0, dr = null, gl = null, Je = 0, pn = null, Wl = null, Un = 0, Cs = 0, Rs = null, Xh = null, Ra = null, Ua = null, Da = null, zu = 0, hr = null;
  function kt() {
    return (je & 2) !== 0 && we !== 0 ? we & -we : P.T !== null ? Bs() : Ko();
  }
  function Qh() {
    if (Jt === 0)
      if ((we & 536870912) === 0 || Ae) {
        var e = ri;
        ri <<= 1, (ri & 3932160) === 0 && (ri = 262144), Jt = e;
      } else Jt = 536870912;
    return e = pt.current, e !== null && (e.flags |= 32), Jt;
  }
  function za(e, t) {
    if (t != null) {
      var n = e.stateNode, l = n.ref;
      l === null && (l = n.ref = Nm(
        Ln(e.memoizedProps, n)
      )), Ua === null && (Ua = []), Ua.push(t.bind(null, l));
    }
  }
  function Lt(e, t, n) {
    (e === Xe && (qe === 2 || qe === 9) || e.cancelPendingCommit !== null) && (xa(e, 0), pl(
      e,
      we,
      Jt,
      !1
    )), Wa(e, n), ((je & 2) === 0 || e !== Xe) && (e === Xe && ((je & 2) === 0 && (Pl |= n), $e === 4 && pl(
      e,
      we,
      Jt,
      !1
    )), Dn(e));
  }
  function Kh(e, t, n) {
    if ((je & 6) !== 0) throw Error(c(327));
    var l = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Pa(e, t), a = l ? Yp(e, t) : Ds(e, t, !0), u = l;
    do {
      if (a === 0) {
        wa && !l && pl(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, u && !Vp(n)) {
          a = Ds(e, t, !1), u = !1;
          continue;
        }
        if (a === 2) {
          if (u = t, e.errorRecoveryDisabledLanes & u)
            var s = 0;
          else
            s = e.pendingLanes & -536870913, s = s !== 0 ? s : s & 536870912 ? 536870912 : 0;
          if (s !== 0) {
            t = s;
            e: {
              var f = e;
              a = Du;
              var m = f.current.memoizedState.isDehydrated;
              if (m && (xa(f, s).flags |= 256), s = Ds(
                f,
                s,
                !1
              ), s !== 2 && s !== 6) {
                if (Os && !m) {
                  f.errorRecoveryDisabledLanes |= u, Pl |= u, a = 4;
                  break e;
                }
                u = Ht, Ht = a, u !== null && (Ht === null ? Ht = u : Ht.push.apply(
                  Ht,
                  u
                ));
              }
              a = s;
            }
            if (u = !1, a !== 2) continue;
          }
        }
        if (a === 1) {
          xa(e, 0), pl(e, t, 0, !0);
          break;
        }
        e: {
          switch (l = e, u = a, u) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((t & 4194048) !== t && (t & 62914560) !== t)
                break;
            case 6:
              pl(
                l,
                t,
                Jt,
                !ml
              );
              break e;
            case 2:
              Ht = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((t & 62914560) === t && (a = or + 300 - It(), 10 < a)) {
            if (pl(
              l,
              t,
              Jt,
              !ml
            ), si(l, 0, !0) !== 0) break e;
            Un = t, l.timeoutHandle = Fs(
              Zh.bind(
                null,
                l,
                n,
                Ht,
                dr,
                ws,
                t,
                Jt,
                Pl,
                Ca,
                ml,
                u,
                "Throttled",
                -0,
                0
              ),
              a
            );
            break e;
          }
          Zh(
            l,
            n,
            Ht,
            dr,
            ws,
            t,
            Jt,
            Pl,
            Ca,
            ml,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    Dn(e);
  }
  function Zh(e, t, n, l, a, u, s, f, m, _, R, j, S, O) {
    e.timeoutHandle = -1;
    var J = t.subtreeFlags, W = (u & 335544064) === u;
    if (j = null, (W || J & 8192 || (J & 16785408) === 16785408) && (j = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Sn
    }, Kt = null, Bh(
      t,
      u,
      j
    ), W && (J = j, W = e.containerInfo, W = (W.nodeType === 9 ? W : W.ownerDocument).__reactViewTransition, W != null && (J.count++, J.waitingForViewTransition = !0, J = Iu.bind(J), W.finished.then(J, J))), J = (u & 62914560) === u ? or - It() : (u & 4194048) === u ? Yh - It() : 0, J = Qy(
      j,
      J
    ), J !== null)) {
      Un = u, e.cancelPendingCommit = J(
        tm.bind(
          null,
          e,
          t,
          u,
          n,
          l,
          a,
          s,
          f,
          m,
          _,
          R,
          j,
          null,
          S,
          O
        )
      ), pl(e, u, s, !_);
      return;
    }
    tm(
      e,
      t,
      u,
      n,
      l,
      a,
      s,
      f,
      m,
      _,
      R,
      j
    );
  }
  function Vp(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var l = 0; l < n.length; l++) {
          var a = n[l], u = a.getSnapshot;
          a = a.value;
          try {
            if (!Xt(u(), a)) return !1;
          } catch {
            return !1;
          }
        }
      if (n = t.child, t.subtreeFlags & 16384 && n !== null)
        n.return = t, t = n;
      else {
        if (t === e) break;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) return !0;
          t = t.return;
        }
        t.sibling.return = t.return, t = t.sibling;
      }
    }
    return !0;
  }
  function pl(e, t, n, l) {
    t = Vo(e, t), t &= ~sr, t &= ~Pl, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var a = t; 0 < a; ) {
      var u = 31 - Gt(a), s = 1 << u;
      l[u] = -1, a &= ~s;
    }
    n !== 0 && Yo(e, n, t);
  }
  function mr() {
    return (je & 6) === 0 ? (xu(0), !1) : !0;
  }
  function Us() {
    if (_e !== null) {
      if (qe === 0)
        var e = _e.return;
      else
        e = _e, Vn = Il = null, qc(e), Ea = null, gu = 0, e = _e;
      for (; e !== null; )
        gh(e.alternate, e), e = e.return;
      _e = null;
    }
  }
  function xa(e, t) {
    var n = e.timeoutHandle;
    return n !== -1 && (e.timeoutHandle = -1, fy(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Un = 0, Us(), Xe = e, _e = n = Bn(e.current, null), we = t, qe = 0, Zt = null, ml = !1, wa = Pa(e, t), Os = !1, Ca = Jt = sr = Pl = vl = $e = 0, Ht = Du = null, ws = !1, Zn = Vo(e, t), Ti(), n;
  }
  function Jh(e, t) {
    Se = null, P.H = Zi, t === ya || t === xi ? (t = td(), qe = 3) : t === Nc ? (t = td(), qe = 4) : qe = t === Wc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Zt = t, _e === null && ($e = 1, Ji(
      e,
      nn(t, e.current)
    ));
  }
  function kh() {
    var e = pt.current;
    return e === null ? !0 : (we & 4194048) === we ? At === null : (we & 62914560) === we || (we & 536870912) !== 0 ? e === At : !1;
  }
  function Fh() {
    var e = P.H;
    return P.H = Zi, e === null ? Zi : e;
  }
  function $h() {
    var e = P.A;
    return P.A = Bp, e;
  }
  function vr() {
    $e = 4, ml || (we & 4194048) !== we && pt.current !== null || (wa = !0), (vl & 134217727) === 0 && (Pl & 134217727) === 0 || Xe === null || pl(
      Xe,
      we,
      Jt,
      !1
    );
  }
  function Ds(e, t, n) {
    var l = je;
    je |= 2;
    var a = Fh(), u = $h();
    (Xe !== e || we !== t) && (dr = null, xa(e, t)), t = !1;
    var s = $e;
    e: do
      try {
        if (qe !== 0 && _e !== null) {
          var f = _e, m = Zt;
          switch (qe) {
            case 8:
              Us(), s = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              pt.current === null && (t = !0);
              var _ = qe;
              if (qe = 0, Zt = null, Ma(e, f, m, _), n && wa) {
                s = 0;
                break e;
              }
              break;
            default:
              _ = qe, qe = 0, Zt = null, Ma(e, f, m, _);
          }
        }
        Gp(), s = $e;
        break;
      } catch (R) {
        Jh(e, R);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Vn = Il = null, je = l, P.H = a, P.A = u, _e === null && (Xe = null, we = 0, Ti()), s;
  }
  function Gp() {
    for (; _e !== null; ) Ph(_e);
  }
  function Yp(e, t) {
    var n = je;
    je |= 2;
    var l = Fh(), a = $h();
    Xe !== e || we !== t ? (dr = null, fr = It() + 500, xa(e, t)) : wa = Pa(
      e,
      t
    );
    e: do
      try {
        if (qe !== 0 && _e !== null) {
          t = _e;
          var u = Zt;
          t: switch (qe) {
            case 1:
              qe = 0, Zt = null, Ma(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (Wf(u)) {
                qe = 0, Zt = null, Wh(t);
                break;
              }
              t = function() {
                qe !== 2 && qe !== 9 || Xe !== e || (qe = 7), Dn(e);
              }, u.then(t, t);
              break e;
            case 3:
              qe = 7;
              break e;
            case 4:
              qe = 5;
              break e;
            case 7:
              Wf(u) ? (qe = 0, Zt = null, Wh(t)) : (qe = 0, Zt = null, Ma(e, t, u, 7));
              break;
            case 5:
              var s = null;
              switch (_e.tag) {
                case 26:
                  s = _e.memoizedState;
                case 5:
                case 27:
                  var f = _e;
                  if (s ? Xm(s) : f.stateNode.complete) {
                    qe = 0, Zt = null;
                    var m = f.sibling;
                    if (m !== null) _e = m;
                    else {
                      var _ = f.return;
                      _ !== null ? (_e = _, gr(_)) : _e = null;
                    }
                    break t;
                  }
              }
              qe = 0, Zt = null, Ma(e, t, u, 5);
              break;
            case 6:
              qe = 0, Zt = null, Ma(e, t, u, 6);
              break;
            case 8:
              Us(), $e = 6;
              break e;
            default:
              throw Error(c(462));
          }
        }
        Xp();
        break;
      } catch (R) {
        Jh(e, R);
      }
    while (!0);
    return Vn = Il = null, P.H = l, P.A = a, je = n, _e !== null ? 0 : (Xe = null, we = 0, Ti(), $e);
  }
  function Xp() {
    for (; _e !== null && !rg(); )
      Ph(_e);
  }
  function Ph(e) {
    var t = mh(e.alternate, e, Zn);
    e.memoizedProps = e.pendingProps, t === null ? gr(e) : _e = t;
  }
  function Wh(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = rh(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          we
        );
        break;
      case 11:
        t = rh(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          we
        );
        break;
      case 5:
        qc(t);
        var l = t;
        l === st && (Ae ? (Ci(l), l.tag === 5 && l.stateNode != null && (Qe = l.stateNode)) : (Ci(l), Ae = !0));
      default:
        gh(n, t), t = _e = Gf(t, Zn), t = mh(n, t, Zn);
    }
    e.memoizedProps = e.pendingProps, t === null ? gr(e) : _e = t;
  }
  function Ma(e, t, n, l) {
    Vn = Il = null, qc(t), Ea = null, gu = 0;
    var a = t.return;
    try {
      if (Dp(
        e,
        a,
        t,
        n,
        we
      )) {
        $e = 1, Ji(
          e,
          nn(n, e.current)
        ), _e = null;
        return;
      }
    } catch (u) {
      if (a !== null) throw _e = a, u;
      $e = 1, Ji(
        e,
        nn(n, e.current)
      ), _e = null;
      return;
    }
    t.flags & 32768 ? (Ae || l === 1 ? e = !0 : wa || (we & 536870912) !== 0 ? e = !1 : (ml = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = pt.current, l !== null && l.tag === 13 && (l.flags |= 16384))), em(t, e)) : gr(t);
  }
  function gr(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        em(
          t,
          ml
        );
        return;
      }
      e = t.return;
      var n = jp(
        t.alternate,
        t,
        Zn
      );
      if (n !== null) {
        _e = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        _e = t;
        return;
      }
      _e = t = e;
    } while (t !== null);
    $e === 0 && ($e = 5);
  }
  function em(e, t) {
    do {
      var n = Hp(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, _e = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        _e = e;
        return;
      }
      _e = e = n;
    } while (e !== null);
    $e = 6, _e = null;
  }
  function tm(e, t, n, l, a, u, s, f, m, _, R, j) {
    e.cancelPendingCommit = null;
    do
      pr();
    while (Je !== 0);
    if ((je & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      e === Xe && (_e = Xe = null, we = 0), Wl = t, pn = e, Un = n, Rs = a, Xh = l, Qp(
        e,
        t,
        n,
        s,
        f,
        m,
        j
      );
    }
  }
  function Qp(e, t, n, l, a, u, s) {
    var f = t.lanes | t.childLanes;
    if (Cs = f, f |= dc, pg(
      e,
      n,
      f,
      l,
      a,
      u
    ), Ua = null, (n & 335544064) === n ? (Da = Ep(e), l = 10262) : (Da = null, l = 10256), (t.subtreeFlags & l) !== 0 || (t.flags & l) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, $p(ui, function() {
      return js(), null;
    })) : (e.callbackNode = null, e.callbackPriority = 0), nr = !1, l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
      l = P.T, P.T = null, a = oe.p, oe.p = 2, u = je, je |= 4;
      try {
        Lp(e, t, n);
      } finally {
        je = u, oe.p = a, P.T = l;
      }
    }
    Je = 1, nr ? Ra = py(
      s,
      e.containerInfo,
      Da,
      zs,
      xs,
      Zp,
      Ms,
      js,
      Kp
    ) : (zs(), xs(), Ms());
  }
  function Kp(e) {
    if (Je !== 0) {
      var t = pn.onRecoverableError;
      t(e, { componentStack: null });
    }
  }
  function Zp() {
    Je === 3 && (Je = 0, Lh(Wl, pn), Je = 4);
  }
  function zs() {
    if (Je === 1) {
      Je = 0;
      var e = pn, t = Wl, n = Un, l = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || l) {
        l = P.T, P.T = null;
        var a = oe.p;
        oe.p = 2;
        var u = je;
        je |= 4;
        try {
          Cu = ur = !1, jh(t, e, n), n = Zs;
          var s = zf(e.containerInfo), f = n.focusedElem, m = n.selectionRange;
          if (s !== f && f && f.ownerDocument && Df(
            f.ownerDocument.documentElement,
            f
          )) {
            if (m !== null && rc(f)) {
              var _ = m.start, R = m.end;
              if (R === void 0 && (R = _), "selectionStart" in f)
                f.selectionStart = _, f.selectionEnd = Math.min(
                  R,
                  f.value.length
                );
              else {
                var j = f.ownerDocument || document, S = j && j.defaultView || window;
                if (S.getSelection) {
                  var O = S.getSelection(), J = f.textContent.length, W = Math.min(m.start, J), Te = m.end === void 0 ? W : Math.min(m.end, J);
                  !O.extend && W > Te && (s = Te, Te = W, W = s);
                  var T = Uf(
                    f,
                    W
                  ), p = Uf(
                    f,
                    Te
                  );
                  if (T && p && (O.rangeCount !== 1 || O.anchorNode !== T.node || O.anchorOffset !== T.offset || O.focusNode !== p.node || O.focusOffset !== p.offset)) {
                    var N = j.createRange();
                    N.setStart(T.node, T.offset), O.removeAllRanges(), W > Te ? (O.addRange(N), O.extend(p.node, p.offset)) : (N.setEnd(p.node, p.offset), O.addRange(N));
                  }
                }
              }
            }
            for (j = [], O = f; O = O.parentNode; )
              O.nodeType === 1 && j.push({
                element: O,
                left: O.scrollLeft,
                top: O.scrollTop
              });
            for (typeof f.focus == "function" && f.focus(), f = 0; f < j.length; f++) {
              var M = j[f];
              M.element.scrollLeft = M.left, M.element.scrollTop = M.top;
            }
          }
          Ga = !!Ks, Zs = Ks = null;
        } finally {
          je = u, oe.p = a, P.T = l;
        }
      }
      e.current = t, Je = 2;
    }
  }
  function xs() {
    if (Je === 2) {
      Je = 0;
      var e = pn, t = Wl, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = P.T, P.T = null;
        var l = oe.p;
        oe.p = 2;
        var a = je;
        je |= 4;
        try {
          Rh(e, t.alternate, t);
        } finally {
          je = a, oe.p = l, P.T = n;
        }
      }
      Je = 3;
    }
  }
  function Ms() {
    if (Je === 4 || Je === 3) {
      Je = 0;
      var e = Ra;
      Ra = null, cg();
      var t = pn, n = Wl, l = Un, a = Xh, u = (l & 335544064) === l ? 10262 : 10256;
      if ((n.subtreeFlags & u) !== 0 || (n.flags & u) !== 0 ? Je = 5 : (Je = 0, Wl = pn = null, nm(t, t.pendingLanes)), u = t.pendingLanes, u === 0 && (gl = null), Yr(l), n = n.stateNode, Vt && typeof Vt.onCommitFiberRoot == "function")
        try {
          Vt.onCommitFiberRoot(
            $a,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (a !== null) {
        n = P.T, u = oe.p, oe.p = 2, P.T = null;
        try {
          for (var s = t.onRecoverableError, f = 0; f < a.length; f++) {
            var m = a[f];
            s(m.value, {
              componentStack: m.stack
            });
          }
        } finally {
          P.T = n, oe.p = u;
        }
      }
      if (a = Ua, s = Da, Da = null, a !== null && (Ua = null, s === null && (s = []), e !== null))
        for (m = 0; m < a.length; m++)
          n = (0, a[m])(
            s
          ), n !== void 0 && e.finished.finally(n);
      (Un & 3) !== 0 && pr(), Dn(t), u = t.pendingLanes, (l & 261930) !== 0 && (u & 42) !== 0 ? t === hr ? zu++ : (zu = 0, hr = t) : (zu = 0, hr = null), xu(0);
    }
  }
  function nm(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, hu(t)));
  }
  function pr() {
    return Ra !== null && (Ra.skipTransition(), Ra = null), zs(), xs(), Ms(), js();
  }
  function js() {
    if (Je !== 5) return !1;
    var e = pn, t = Cs;
    Cs = 0;
    var n = Yr(Un), l = P.T, a = oe.p;
    try {
      oe.p = 32 > n ? 32 : n, P.T = null, n = Rs, Rs = null;
      var u = pn, s = Un;
      if (Je = 0, Wl = pn = null, Un = 0, (je & 6) !== 0) throw Error(c(331));
      var f = je;
      if (je |= 4, Vh(u.current), qh(
        u,
        u.current,
        s,
        n
      ), je = f, xu(0, !1), Vt && typeof Vt.onPostCommitFiberRoot == "function")
        try {
          Vt.onPostCommitFiberRoot($a, u);
        } catch {
        }
      return !0;
    } finally {
      oe.p = a, P.T = l, nm(e, t);
    }
  }
  function lm(e, t, n) {
    t = nn(n, t), t = Pc(e.stateNode, t, 2), e = cl(e, t, 2), e !== null && (Wa(e, 2), Dn(e));
  }
  function Be(e, t, n) {
    if (e.tag === 3)
      lm(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          lm(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (gl === null || !gl.has(l))) {
            e = nn(n, e), n = Wd(2), l = cl(t, n, 2), l !== null && (eh(
              n,
              l,
              t,
              e
            ), Wa(l, 2), Dn(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function Hs(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Ip();
      var a = /* @__PURE__ */ new Set();
      l.set(t, a);
    } else
      a = l.get(t), a === void 0 && (a = /* @__PURE__ */ new Set(), l.set(t, a));
    a.has(n) || (Os = !0, a.add(n), e = Jp.bind(null, e, t, n), t.then(e, e));
  }
  function Jp(e, t, n) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Xe === e && (we & n) === n && (($e === 4 || $e === 3 && (we & 62914560) === we && 300 > It() - or) && (je & 2) === 0 ? xa(e, 0) : sr |= n, Ca === we && (Ca = 0)), Dn(e);
  }
  function am(e, t) {
    t === 0 && (t = Go()), e = Ll(e, t), e !== null && (Wa(e, t), Dn(e));
  }
  function kp(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), am(e, n);
  }
  function Fp(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode, a = e.memoizedState;
        a !== null && (n = a.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(c(314));
    }
    l !== null && l.delete(t), am(e, n);
  }
  function $p(e, t) {
    return Br(e, t);
  }
  var ja = null, Ha = null, Ls = !1, yr = !1, qs = !1, yl = 0;
  function Dn(e) {
    e !== Ha && e.next === null && (Ha === null ? ja = Ha = e : Ha = Ha.next = e), yr = !0, Ls || (Ls = !0, Wp());
  }
  function xu(e, t) {
    if (!qs && yr) {
      qs = !0;
      do
        for (var n = !1, l = ja; l !== null; ) {
          if (e !== 0) {
            var a = l.pendingLanes;
            if (a === 0) var u = 0;
            else {
              var s = l.suspendedLanes, f = l.pingedLanes;
              u = (1 << 31 - Gt(42 | e) + 1) - 1, u &= a & ~(s & ~f), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = !0, cm(l, u));
          } else
            u = we, u = si(
              l,
              l === Xe ? u : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (u & 3) === 0 || Pa(l, u) || (n = !0, cm(l, u));
          l = l.next;
        }
      while (n);
      qs = !1;
    }
  }
  function Pp() {
    um();
  }
  function um() {
    yr = Ls = !1;
    var e = 0;
    yl !== 0 && oy() && (e = yl);
    for (var t = It(), n = null, l = ja; l !== null; ) {
      var a = l.next, u = im(l, t);
      u === 0 ? (l.next = null, n === null ? ja = a : n.next = a, a === null && (Ha = n)) : (n = l, (e !== 0 || (u & 3) !== 0) && (yr = !0)), l = a;
    }
    Je !== 0 && Je !== 5 || xu(e), yl !== 0 && (yl = 0);
  }
  function im(e, t) {
    for (var n = e.suspendedLanes, l = e.pingedLanes, a = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var s = 31 - Gt(u), f = 1 << s, m = a[s];
      m === -1 ? ((f & n) === 0 || (f & l) !== 0) && (a[s] = gg(f, t)) : m <= t && (e.expiredLanes |= f), u &= ~f;
    }
    if (t = Xe, n = we, n = si(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, n === 0 || e === t && (qe === 2 || qe === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && Ir(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || Pa(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (l !== null && Ir(l), Yr(n)) {
        case 2:
        case 8:
          n = Bo;
          break;
        case 32:
          n = ui;
          break;
        case 268435456:
          n = Io;
          break;
        default:
          n = ui;
      }
      return l = rm.bind(null, e), n = Br(n, l), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return l !== null && l !== null && Ir(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function rm(e, t) {
    if (Je !== 0 && Je !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (pr() && e.callbackNode !== n)
      return null;
    var l = we;
    return l = si(
      e,
      e === Xe ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (Kh(e, l, t), im(e, It()), e.callbackNode != null && e.callbackNode === n ? rm.bind(null, e) : null);
  }
  function cm(e, t) {
    if (pr()) return null;
    Kh(e, t, !0);
  }
  function Wp() {
    dy(function() {
      (je & 6) !== 0 ? Br(
        qo,
        Pp
      ) : um();
    });
  }
  function Bs() {
    if (yl === 0) {
      var e = Yl;
      e === 0 && (e = ii, ii <<= 1, (ii & 261888) === 0 && (ii = 256)), yl = e;
    }
    return yl;
  }
  function sm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : mi(e);
  }
  function ey(e, t, n, l, a) {
    if (t === "submit" && n && n.stateNode === a) {
      var u = sm(
        (a[zt] || null).action
      ), s = l.submitter;
      s && (t = (t = s[zt] || null) ? sm(t.formAction) : s.getAttribute("formAction"), t !== null && (u = t, s = null));
      var f = new yi(
        "action",
        "action",
        null,
        l,
        a
      );
      e.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (yl !== 0) {
                  var m = new FormData(a, s);
                  Zc(
                    n,
                    {
                      pending: !0,
                      data: m,
                      method: a.method,
                      action: u
                    },
                    null,
                    m
                  );
                }
              } else
                typeof u == "function" && (f.preventDefault(), m = new FormData(a, s), Zc(
                  n,
                  {
                    pending: !0,
                    data: m,
                    method: a.method,
                    action: u
                  },
                  u,
                  m
                ));
            },
            currentTarget: a
          }
        ]
      });
    }
  }
  for (var Is = 0; Is < fc.length; Is++) {
    var Vs = fc[Is], ty = Vs.toLowerCase(), ny = Vs[0].toUpperCase() + Vs.slice(1);
    hn(
      ty,
      "on" + ny
    );
  }
  hn(jf, "onAnimationEnd"), hn(Hf, "onAnimationIteration"), hn(Lf, "onAnimationStart"), hn("dblclick", "onDoubleClick"), hn("focusin", "onFocus"), hn("focusout", "onBlur"), hn(fp, "onTransitionRun"), hn(dp, "onTransitionStart"), hn(hp, "onTransitionCancel"), hn(qf, "onTransitionEnd"), aa("onMouseEnter", ["mouseout", "mouseover"]), aa("onMouseLeave", ["mouseout", "mouseover"]), aa("onPointerEnter", ["pointerout", "pointerover"]), aa("onPointerLeave", ["pointerout", "pointerover"]), Ml(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ml(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ml("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ml(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ml(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ml(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Mu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), ly = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mu)
  );
  function om(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n], a = l.event;
      l = l.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var s = l.length - 1; 0 <= s; s--) {
            var f = l[s], m = f.instance, _ = f.currentTarget;
            if (f = f.listener, m !== u && a.isPropagationStopped())
              break e;
            u = f, a.currentTarget = _;
            try {
              u(a);
            } catch (R) {
              Si(R);
            }
            a.currentTarget = null, u = m;
          }
        else
          for (s = 0; s < l.length; s++) {
            if (f = l[s], m = f.instance, _ = f.currentTarget, f = f.listener, m !== u && a.isPropagationStopped())
              break e;
            u = f, a.currentTarget = _;
            try {
              u(a);
            } catch (R) {
              Si(R);
            }
            a.currentTarget = null, u = m;
          }
      }
    }
  }
  function Ne(e, t) {
    var n = t[Jo];
    n === void 0 && (n = t[Jo] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    n.has(l) || (fm(t, e, 2, !1), n.add(l));
  }
  function Gs(e, t, n) {
    var l = 0;
    t && (l |= 4), fm(
      n,
      e,
      l,
      t
    );
  }
  var Er = "_reactListening" + Math.random().toString(36).slice(2);
  function Ys(e) {
    if (!e[Er]) {
      e[Er] = !0, $o.forEach(function(n) {
        n !== "selectionchange" && (ly.has(n) || Gs(n, !1, e), Gs(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Er] || (t[Er] = !0, Gs("selectionchange", !1, t));
    }
  }
  function fm(e, t, n, l) {
    switch (ev(t)) {
      case 2:
        var a = ky;
        break;
      case 8:
        a = Fy;
        break;
      default:
        a = so;
    }
    n = a.bind(
      null,
      t,
      n,
      e
    ), a = void 0, !$r || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (a = !0), l ? a !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: a
    }) : e.addEventListener(t, n, !0) : a !== void 0 ? e.addEventListener(t, n, {
      passive: a
    }) : e.addEventListener(t, n, !1);
  }
  function Xs(e, t, n, l, a) {
    var u = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var s = l.tag;
        if (s === 3 || s === 4) {
          var f = l.stateNode.containerInfo;
          if (f === a) break;
          if (s === 4)
            for (s = l.return; s !== null; ) {
              var m = s.tag;
              if ((m === 3 || m === 4) && s.stateNode.containerInfo === a)
                return;
              s = s.return;
            }
          for (; f !== null; ) {
            if (s = xl(f), s === null) return;
            if (m = s.tag, m === 5 || m === 6 || m === 26 || m === 27) {
              l = u = s;
              continue e;
            }
            f = f.parentNode;
          }
        }
        l = l.return;
      }
    ff(function() {
      var _ = u, R = kr(n), j = [];
      e: {
        var S = Bf.get(e);
        if (S !== void 0) {
          var O = yi, J = e;
          switch (e) {
            case "keypress":
              if (gi(n) === 0) break e;
            case "keydown":
            case "keyup":
              O = Vg;
              break;
            case "focusin":
              J = "focus", O = tc;
              break;
            case "focusout":
              J = "blur", O = tc;
              break;
            case "beforeblur":
            case "afterblur":
              O = tc;
              break;
            case "click":
              if (n.button === 2) break e;
            case "auxclick":
            case "dblclick":
            case "mousedown":
            case "mousemove":
            case "mouseup":
            case "mouseout":
            case "mouseover":
            case "contextmenu":
              O = mf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              O = Rg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              O = Kg;
              break;
            case jf:
            case Hf:
            case Lf:
              O = zg;
              break;
            case qf:
              O = Jg;
              break;
            case "scroll":
            case "scrollend":
              O = wg;
              break;
            case "wheel":
              O = Fg;
              break;
            case "copy":
            case "cut":
            case "paste":
              O = Mg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              O = gf;
              break;
            case "submit":
              O = Xg;
              break;
            case "toggle":
            case "beforetoggle":
              O = Pg;
          }
          var W = (t & 4) !== 0, Te = !W && (e === "scroll" || e === "scrollend"), T = W ? S !== null ? S + "Capture" : null : S;
          W = [];
          for (var p = _, N; p !== null; ) {
            var M = p;
            if (N = M.stateNode, M = M.tag, M !== 5 && M !== 26 && M !== 27 || N === null || T === null || (M = nu(p, T), M != null && W.push(
              ju(p, M, N)
            )), Te) break;
            p = p.return;
          }
          0 < W.length && (S = new O(
            S,
            J,
            null,
            n,
            R
          ), j.push({ event: S, listeners: W }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (O = e === "mouseover" || e === "pointerover", S = e === "mouseout" || e === "pointerout", O && n !== Jr && (J = n.relatedTarget || n.fromElement) && (xl(J) || J[ta]))
            break e;
          (S || O) && (J = R.window === R ? R : (O = R.ownerDocument) ? O.defaultView || O.parentWindow : window, S ? (O = n.relatedTarget || n.toElement, S = _, O = O ? xl(O) : null, O !== null && (Te = h(O), W = O.tag, O !== Te || W !== 5 && W !== 27 && W !== 6) && (O = null)) : (S = null, O = _), S !== O && (W = mf, M = "onMouseLeave", T = "onMouseEnter", p = "mouse", (e === "pointerout" || e === "pointerover") && (W = gf, M = "onPointerLeave", T = "onPointerEnter", p = "pointer"), Te = S == null ? J : tu(S), N = O == null ? J : tu(O), J = new W(
            M,
            p + "leave",
            S,
            n,
            R
          ), J.target = Te, J.relatedTarget = N, M = null, xl(R) === _ && (W = new W(
            T,
            p + "enter",
            O,
            n,
            R
          ), W.target = N, W.relatedTarget = Te, M = W), Te = M, W = S && O ? se(
            S,
            O,
            ay
          ) : null, S !== null && dm(
            j,
            J,
            S,
            W,
            !1
          ), O !== null && Te !== null && dm(
            j,
            Te,
            O,
            W,
            !0
          )));
        }
        e: {
          if (S = _ ? tu(_) : window, O = S.nodeName && S.nodeName.toLowerCase(), O === "select" || O === "input" && S.type === "file")
            var F = _f;
          else if (Tf(S))
            if (Nf)
              F = cp;
            else {
              F = ip;
              var Ce = up;
            }
          else
            O = S.nodeName, !O || O.toLowerCase() !== "input" || S.type !== "checkbox" && S.type !== "radio" ? _ && Zr(_.elementType) && (F = _f) : F = rp;
          if (F && (F = F(e, _))) {
            Af(
              j,
              F,
              n,
              R
            );
            break e;
          }
          Ce && Ce(e, S, _);
        }
        switch (Ce = _ ? tu(_) : window, e) {
          case "focusin":
            (Tf(Ce) || Ce.contentEditable === "true") && (oa = Ce, cc = _, ou = null);
            break;
          case "focusout":
            ou = cc = oa = null;
            break;
          case "mousedown":
            sc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            sc = !1, xf(j, n, R);
            break;
          case "selectionchange":
            if (op) break;
          case "keydown":
          case "keyup":
            xf(j, n, R);
        }
        var ae;
        if (lc)
          e: {
            switch (e) {
              case "compositionstart":
                var fe = "onCompositionStart";
                break e;
              case "compositionend":
                fe = "onCompositionEnd";
                break e;
              case "compositionupdate":
                fe = "onCompositionUpdate";
                break e;
            }
            fe = void 0;
          }
        else
          sa ? bf(e, n) && (fe = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (fe = "onCompositionStart");
        fe && (pf && n.locale !== "ko" && (sa || fe !== "onCompositionStart" ? fe === "onCompositionEnd" && sa && (ae = df()) : (Wn = R, Pr = "value" in Wn ? Wn.value : Wn.textContent, sa = !0)), Ce = br(_, fe), 0 < Ce.length && (fe = new vf(
          fe,
          e,
          null,
          n,
          R
        ), j.push({ event: fe, listeners: Ce }), ae ? fe.data = ae : (ae = Sf(n), ae !== null && (fe.data = ae)))), (ae = ep ? tp(e, n) : np(e, n)) && (fe = br(_, "onBeforeInput"), 0 < fe.length && (Ce = new vf(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          R
        ), j.push({
          event: Ce,
          listeners: fe
        }), Ce.data = ae)), ey(
          j,
          e,
          _,
          n,
          R
        );
      }
      om(j, t);
    });
  }
  function ju(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function br(e, t) {
    for (var n = t + "Capture", l = []; e !== null; ) {
      var a = e, u = a.stateNode;
      if (a = a.tag, a !== 5 && a !== 26 && a !== 27 || u === null || (a = nu(e, n), a != null && l.unshift(
        ju(e, a, u)
      ), a = nu(e, t), a != null && l.push(
        ju(e, a, u)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function ay(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function dm(e, t, n, l, a) {
    for (var u = t._reactName, s = []; n !== null && n !== l; ) {
      var f = n, m = f.alternate, _ = f.stateNode;
      if (f = f.tag, m !== null && m === l) break;
      f !== 5 && f !== 26 && f !== 27 || _ === null || (m = _, a ? (_ = nu(n, u), _ != null && s.unshift(
        ju(n, _, m)
      )) : a || (_ = nu(n, u), _ != null && s.push(
        ju(n, _, m)
      ))), n = n.return;
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var uy = /\r\n?/g, iy = /\u0000|\uFFFD/g;
  function hm(e) {
    return (typeof e == "string" ? e : "" + e).replace(uy, `
`).replace(iy, "");
  }
  function mm(e, t) {
    return t = hm(t), hm(e) === t;
  }
  function Ie(e, t, n, l, a, u) {
    switch (n) {
      case "children":
        if (typeof l == "string")
          t === "body" || t === "textarea" && l === "" || ia(e, l);
        else if (typeof l == "number" || typeof l == "bigint")
          t !== "body" && ia(e, "" + l);
        else return;
        break;
      case "className":
        hi(e, "class", l);
        break;
      case "tabIndex":
        hi(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        hi(e, n, l);
        break;
      case "style":
        sf(e, l, u);
        return;
      case "data":
        if (t !== "object") {
          hi(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        l = mi(l), e.setAttribute(n, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof u == "function" && (n === "formAction" ? (t !== "input" && Ie(e, t, "name", a.name, a, null), Ie(
            e,
            t,
            "formEncType",
            a.formEncType,
            a,
            null
          ), Ie(
            e,
            t,
            "formMethod",
            a.formMethod,
            a,
            null
          ), Ie(
            e,
            t,
            "formTarget",
            a.formTarget,
            a,
            null
          )) : (Ie(e, t, "encType", a.encType, a, null), Ie(e, t, "method", a.method, a, null), Ie(e, t, "target", a.target, a, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        l = mi(l), e.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (e.onclick = Sn);
        return;
      case "onScroll":
        l != null && Ne("scroll", e);
        return;
      case "onScrollEnd":
        l != null && Ne("scrollend", e);
        return;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(c(61));
          if (n = l.__html, n != null) {
            if (a.children != null) throw Error(c(60));
            u?.__html !== n && (e.innerHTML = n);
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "defaultValue":
      case "defaultChecked":
      case "innerHTML":
      case "ref":
        break;
      case "autoFocus":
        break;
      case "xlinkHref":
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        n = mi(l), e.setAttributeNS(
          "http://www.w3.org/1999/xlink",
          "xlink:href",
          n
        );
        break;
      case "contentEditable":
      case "spellCheck":
      case "draggable":
      case "value":
      case "autoReverse":
      case "externalResourcesRequired":
      case "focusable":
      case "preserveAlpha":
        l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, l) : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
      case "credentialless":
      case "default":
      case "defer":
      case "disabled":
      case "disablePictureInPicture":
      case "disableRemotePlayback":
      case "formNoValidate":
      case "hidden":
      case "loop":
      case "noModule":
      case "noValidate":
      case "open":
      case "playsInline":
      case "readOnly":
      case "required":
      case "reversed":
      case "scoped":
      case "seamless":
      case "itemScope":
        l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0 ? e.setAttribute(n, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, l) : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(n, l) : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(n) : e.setAttribute(n, l);
        break;
      case "popover":
        Ne("beforetoggle", e), Ne("toggle", e), di(e, "popover", l);
        break;
      case "xlinkActuate":
        jn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        jn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        jn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        jn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        jn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        jn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        jn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        jn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        jn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        di(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N")
          n = Ng.get(n) || n, di(e, n, l);
        else return;
    }
    xe = !0;
  }
  function Qs(e, t, n, l, a, u) {
    switch (n) {
      case "style":
        sf(e, l, u);
        return;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(c(61));
          if (n = l.__html, n != null) {
            if (a.children != null) throw Error(c(60));
            u?.__html !== n && (e.innerHTML = n);
          }
        }
        break;
      case "children":
        if (typeof l == "string") ia(e, l);
        else if (typeof l == "number" || typeof l == "bigint")
          ia(e, "" + l);
        else return;
        break;
      case "onScroll":
        l != null && Ne("scroll", e);
        return;
      case "onScrollEnd":
        l != null && Ne("scrollend", e);
        return;
      case "onClick":
        l != null && (e.onclick = Sn);
        return;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        return;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!Po.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (a = n.endsWith("Capture"), u = n.slice(2, a ? n.length - 7 : void 0), t = e[zt] || null, t = t != null ? t[n] : null, typeof t == "function" && e.removeEventListener(u, t, a), typeof l == "function")) {
              typeof t != "function" && t !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(u, l, a);
              break e;
            }
            xe = !0, n in e ? e[n] = l : l === !0 ? e.setAttribute(n, "") : di(e, n, l);
          }
        return;
    }
    xe = !0;
  }
  function bt(e, t, n) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "img":
        Ne("error", e), Ne("load", e);
        var l = !1, a = !1, u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var s = n[u];
            if (s != null)
              switch (u) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  a = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(c(137, t));
                default:
                  Ie(e, t, u, s, n, null);
              }
          }
        a && Ie(e, t, "srcSet", n.srcSet, n, null), l && Ie(e, t, "src", n.src, n, null);
        return;
      case "input":
        Ne("invalid", e);
        var f = u = s = a = null, m = null, _ = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var R = n[l];
            if (R != null)
              switch (l) {
                case "name":
                  a = R;
                  break;
                case "type":
                  s = R;
                  break;
                case "checked":
                  m = R;
                  break;
                case "defaultChecked":
                  _ = R;
                  break;
                case "value":
                  u = R;
                  break;
                case "defaultValue":
                  f = R;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (R != null)
                    throw Error(c(137, t));
                  break;
                default:
                  Ie(e, t, l, R, n, null);
              }
          }
        af(
          e,
          u,
          f,
          m,
          _,
          s,
          a,
          !1
        );
        return;
      case "select":
        Ne("invalid", e), l = s = u = null;
        for (a in n)
          if (n.hasOwnProperty(a) && (f = n[a], f != null))
            switch (a) {
              case "value":
                u = f;
                break;
              case "defaultValue":
                s = f;
                break;
              case "multiple":
                l = f;
              default:
                Ie(e, t, a, f, n, null);
            }
        t = u, n = s, e.multiple = !!l, t != null ? ua(e, !!l, t, !1) : n != null && ua(e, !!l, n, !0);
        return;
      case "textarea":
        Ne("invalid", e), u = a = l = null;
        for (s in n)
          if (n.hasOwnProperty(s) && (f = n[s], f != null))
            switch (s) {
              case "value":
                l = f;
                break;
              case "defaultValue":
                a = f;
                break;
              case "children":
                u = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(c(91));
                break;
              default:
                Ie(e, t, s, f, n, null);
            }
        rf(e, l, a, u);
        return;
      case "option":
        for (m in n)
          n.hasOwnProperty(m) && (l = n[m], l != null) && (m === "selected" ? e.selected = l && typeof l != "function" && typeof l != "symbol" : Ie(e, t, m, l, n, null));
        return;
      case "dialog":
        Ne("beforetoggle", e), Ne("toggle", e), Ne("cancel", e), Ne("close", e);
        break;
      case "iframe":
      case "object":
        Ne("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < Mu.length; l++)
          Ne(Mu[l], e);
        break;
      case "image":
        Ne("error", e), Ne("load", e);
        break;
      case "details":
        Ne("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ne("error", e), Ne("load", e);
      case "area":
      case "base":
      case "br":
      case "col":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "track":
      case "wbr":
      case "menuitem":
        for (_ in n)
          if (n.hasOwnProperty(_) && (l = n[_], l != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, t));
              default:
                Ie(e, t, _, l, n, null);
            }
        return;
      default:
        if (Zr(t)) {
          for (R in n)
            n.hasOwnProperty(R) && (l = n[R], l !== void 0 && Qs(
              e,
              t,
              R,
              l,
              n,
              void 0
            ));
          return;
        }
    }
    for (f in n)
      n.hasOwnProperty(f) && (l = n[f], l != null && Ie(e, t, f, l, n, null));
  }
  var ry = {};
  function cy(e, t, n, l) {
    switch (t) {
      case "div":
      case "span":
      case "svg":
      case "path":
      case "a":
      case "g":
      case "p":
      case "li":
        break;
      case "input":
        var a = null, u = null, s = null, f = null, m = null, _ = null, R = null;
        for (O in n) {
          var j = n[O];
          if (n.hasOwnProperty(O) && j != null)
            switch (O) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                m = j;
              default:
                l.hasOwnProperty(O) || Ie(e, t, O, null, l, j);
            }
        }
        for (var S in l) {
          var O = l[S];
          if (j = n[S], l.hasOwnProperty(S) && (O != null || j != null))
            switch (S) {
              case "type":
                O !== j && (xe = !0), u = O;
                break;
              case "name":
                O !== j && (xe = !0), a = O;
                break;
              case "checked":
                O !== j && (xe = !0), _ = O;
                break;
              case "defaultChecked":
                O !== j && (xe = !0), R = O;
                break;
              case "value":
                O !== j && (xe = !0), s = O;
                break;
              case "defaultValue":
                O !== j && (xe = !0), f = O;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (O != null)
                  throw Error(c(137, t));
                break;
              default:
                O !== j && Ie(
                  e,
                  t,
                  S,
                  O,
                  l,
                  j
                );
            }
        }
        Qr(
          e,
          s,
          f,
          m,
          _,
          R,
          u,
          a
        );
        return;
      case "select":
        O = s = f = S = null;
        for (u in n)
          if (m = n[u], n.hasOwnProperty(u) && m != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                O = m;
              default:
                l.hasOwnProperty(u) || Ie(
                  e,
                  t,
                  u,
                  null,
                  l,
                  m
                );
            }
        for (a in l)
          if (u = l[a], m = n[a], l.hasOwnProperty(a) && (u != null || m != null))
            switch (a) {
              case "value":
                u !== m && (xe = !0), S = u;
                break;
              case "defaultValue":
                u !== m && (xe = !0), f = u;
                break;
              case "multiple":
                u !== m && (xe = !0), s = u;
              default:
                u !== m && Ie(
                  e,
                  t,
                  a,
                  u,
                  l,
                  m
                );
            }
        t = f, n = s, l = O, S != null ? ua(e, !!n, S, !1) : !!l != !!n && (t != null ? ua(e, !!n, t, !0) : ua(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        O = S = null;
        for (f in n)
          if (a = n[f], n.hasOwnProperty(f) && a != null && !l.hasOwnProperty(f))
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ie(e, t, f, null, l, a);
            }
        for (s in l)
          if (a = l[s], u = n[s], l.hasOwnProperty(s) && (a != null || u != null))
            switch (s) {
              case "value":
                a !== u && (xe = !0), S = a;
                break;
              case "defaultValue":
                a !== u && (xe = !0), O = a;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (a != null) throw Error(c(91));
                break;
              default:
                a !== u && Ie(e, t, s, a, l, u);
            }
        uf(e, S, O);
        return;
      case "option":
        for (var J in n)
          S = n[J], n.hasOwnProperty(J) && S != null && !l.hasOwnProperty(J) && (J === "selected" ? e.selected = !1 : Ie(
            e,
            t,
            J,
            null,
            l,
            S
          ));
        for (m in l)
          S = l[m], O = n[m], l.hasOwnProperty(m) && S !== O && (S != null || O != null) && (m === "selected" ? (S !== O && (xe = !0), e.selected = S && typeof S != "function" && typeof S != "symbol") : Ie(
            e,
            t,
            m,
            S,
            l,
            O
          ));
        return;
      case "img":
      case "link":
      case "area":
      case "base":
      case "br":
      case "col":
      case "embed":
      case "hr":
      case "keygen":
      case "meta":
      case "param":
      case "source":
      case "track":
      case "wbr":
      case "menuitem":
        for (var W in n)
          S = n[W], n.hasOwnProperty(W) && S != null && !l.hasOwnProperty(W) && Ie(e, t, W, null, l, S);
        for (_ in l)
          if (S = l[_], O = n[_], l.hasOwnProperty(_) && S !== O && (S != null || O != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null)
                  throw Error(c(137, t));
                break;
              default:
                Ie(
                  e,
                  t,
                  _,
                  S,
                  l,
                  O
                );
            }
        return;
      default:
        if (Zr(t)) {
          for (var Te in n)
            S = n[Te], n.hasOwnProperty(Te) && S !== void 0 && !l.hasOwnProperty(Te) && Qs(
              e,
              t,
              Te,
              void 0,
              l,
              S
            );
          for (R in l)
            S = l[R], O = n[R], !l.hasOwnProperty(R) || S === O || S === void 0 && O === void 0 || Qs(
              e,
              t,
              R,
              S,
              l,
              O
            );
          return;
        }
    }
    for (var T in n)
      S = n[T], n.hasOwnProperty(T) && S != null && !l.hasOwnProperty(T) && Ie(e, t, T, null, l, S);
    for (j in l)
      S = l[j], O = n[j], !l.hasOwnProperty(j) || S === O || S == null && O == null || Ie(e, t, j, S, l, O);
  }
  function vm(e) {
    switch (e) {
      case "css":
      case "script":
      case "font":
      case "img":
      case "image":
      case "input":
      case "link":
        return !0;
      default:
        return !1;
    }
  }
  function sy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), l = 0; l < n.length; l++) {
        var a = n[l], u = a.transferSize, s = a.initiatorType, f = a.duration;
        if (u && f && vm(s)) {
          for (s = 0, f = a.responseEnd, l += 1; l < n.length; l++) {
            var m = n[l], _ = m.startTime;
            if (_ > f) break;
            var R = m.transferSize, j = m.initiatorType;
            R && vm(j) && (m = m.responseEnd, s += R * (m < f ? 1 : (f - _) / (m - _)));
          }
          if (--l, t += 8 * (u + s) / (a.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Ks = null, Zs = null;
  function Hu(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function gm(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function pm(e, t) {
    if (e === 0)
      switch (t) {
        case "svg":
          return 1;
        case "math":
          return 2;
        default:
          return 0;
      }
    return e === 1 && t === "foreignObject" ? 0 : e;
  }
  function ym(e, t, n, l) {
    return n = Hu(
      n
    ).createElement(e), n[vt] = l, n[zt] = t, bt(n, e, t), ct(n), n;
  }
  function Js(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ks = null;
  function oy() {
    var e = window.event;
    return e && e.type === "popstate" ? e === ks ? !1 : (ks = e, !0) : (ks = null, !1);
  }
  var Fs = typeof setTimeout == "function" ? setTimeout : void 0, fy = typeof clearTimeout == "function" ? clearTimeout : void 0, Em = typeof Promise == "function" ? Promise : void 0, bm = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Fs, dy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Em < "u" ? function(e) {
    return Em.resolve(null).then(e).catch(hy);
  } : Fs;
  function hy(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function El(e) {
    return e === "head";
  }
  function Sm(e, t) {
    var n = t, l = 0;
    do {
      var a = n.nextSibling;
      if (e.removeChild(n), a && a.nodeType === 8)
        if (n = a.data, n === "/$" || n === "/&") {
          if (l === 0) {
            e.removeChild(a), Ya(t);
            return;
          }
          l--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          l++;
        else if (n === "html")
          ao(
            e.ownerDocument.documentElement
          );
        else if (n === "head") {
          n = e.ownerDocument.head, ao(n);
          for (var u = n.firstChild; u; ) {
            var s = u.nextSibling, f = u.nodeName;
            u[eu] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = s;
          }
        } else
          n === "body" && ao(e.ownerDocument.body);
      n = a;
    } while (n);
    Ya(t);
  }
  function Tm(e, t) {
    var n = e;
    e = 0;
    do {
      var l = n.nextSibling;
      if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), l && l.nodeType === 8)
        if (n = l.data, n === "/$") {
          if (e === 0) break;
          e--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
      n = l;
    } while (n);
  }
  function Am(e, t, n) {
    if (t = CSS.escape(t) !== t ? "r-" + btoa(t).replace(/=/g, "") : t, e.style.viewTransitionName = t, n != null && (e.style.viewTransitionClass = n), n = getComputedStyle(e), n.display === "inline") {
      if (t = e.getClientRects(), t.length === 1) var l = 1;
      else
        for (var a = l = 0; a < t.length; a++) {
          var u = t[a];
          0 < u.width && 0 < u.height && l++;
        }
      l === 1 && (e = e.style, e.display = t.length === 1 ? "inline-block" : "block", e.marginTop = "-" + n.paddingTop, e.marginBottom = "-" + n.paddingBottom);
    }
  }
  function _m(e, t) {
    e = e.style, t = t.style;
    var n = t != null ? t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null : null;
    e.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = t != null ? t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null : null, e.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), e.display === "inline-block" && (t == null ? e.display = e.margin = "" : (n = t.display, e.display = n == null || typeof n == "boolean" ? "" : n, n = t.margin, n != null ? e.margin = n : (n = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], e.marginTop = n == null || typeof n == "boolean" ? "" : n, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], e.marginBottom = t == null || typeof t == "boolean" ? "" : t)));
  }
  function my(e, t, n) {
    return n = n.ownerDocument.defaultView, {
      rect: e,
      abs: t.position === "absolute" || t.position === "fixed",
      clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
      view: 0 <= e.bottom && 0 <= e.right && e.top <= n.innerHeight && e.left <= n.innerWidth
    };
  }
  function $s(e) {
    var t = e.getBoundingClientRect(), n = getComputedStyle(e);
    return my(t, n, e);
  }
  function vy(e) {
    return e.documentElement.clientHeight;
  }
  function gy(e) {
    this.addEventListener("load", e), this.addEventListener("error", e);
  }
  function py(e, t, n, l, a, u, s, f, m) {
    var _ = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var R = _.startViewTransition({
        update: function() {
          var S = _.defaultView, O = S.navigation && S.navigation.transition, J = _.fonts.status;
          l();
          var W = [];
          if (J === "loaded" && (vy(_), _.fonts.status === "loading" && W.push(_.fonts.ready)), J = W.length, e !== null)
            for (var Te = e.suspenseyImages, T = 0, p = 0; p < Te.length; p++) {
              var N = Te[p];
              if (!N.complete) {
                var M = N.getBoundingClientRect();
                if (0 < M.bottom && 0 < M.right && M.top < S.innerHeight && M.left < S.innerWidth) {
                  if (T += Qm(N), T > Ar) {
                    W.length = J;
                    break;
                  }
                  N = new Promise(
                    gy.bind(N)
                  ), W.push(N);
                }
              }
            }
          if (0 < W.length)
            return S = Promise.race([
              Promise.all(W),
              new Promise(function(F) {
                return setTimeout(F, 500);
              })
            ]).then(a, a), (O ? Promise.allSettled([O.finished, S]) : S).then(u, u);
          if (a(), O)
            return O.finished.then(
              u,
              u
            );
          u();
        },
        types: n
      });
      _.__reactViewTransition = R;
      var j = [];
      return R.ready.then(
        function() {
          for (var S = _.documentElement.getAnimations({
            subtree: !0
          }), O = 0; O < S.length; O++) {
            var J = S[O], W = J.effect, Te = W.pseudoElement;
            if (Te != null && Te.startsWith("::view-transition")) {
              j.push(J), J = W.getKeyframes();
              for (var T = Te = void 0, p = !0, N = 0; N < J.length; N++) {
                var M = J[N], F = M.width;
                if (Te === void 0) Te = F;
                else if (Te !== F) {
                  p = !1;
                  break;
                }
                if (F = M.height, T === void 0) T = F;
                else if (T !== F) {
                  p = !1;
                  break;
                }
                delete M.width, delete M.height, M.transform === "none" && delete M.transform;
              }
              p && Te !== void 0 && T !== void 0 && (W.setKeyframes(J), p = getComputedStyle(
                W.target,
                W.pseudoElement
              ), p.width !== Te || p.height !== T) && (p = J[0], p.width = Te, p.height = T, p = J[J.length - 1], p.width = Te, p.height = T, W.setKeyframes(J));
            }
          }
          s();
        },
        function(S) {
          _.__reactViewTransition === R && (_.__reactViewTransition = null);
          try {
            typeof S == "object" && S !== null && S.name === "InvalidStateError" && (S.message === "View transition was skipped because document visibility state is hidden." || S.message === "Skipping view transition because document visibility state has become hidden." || S.message === "Skipping view transition because viewport size changed." || S.message === "Transition was aborted because of invalid state") && (S = null), S !== null && m(S);
          } finally {
            l(), a(), s();
          }
        }
      ), R.finished.finally(function() {
        for (var S = 0; S < j.length; S++)
          j[S].cancel();
        _.__reactViewTransition === R && (_.__reactViewTransition = null), f();
      }), R;
    } catch {
      return l(), a(), s(), null;
    }
  }
  function ea(e, t) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + e + "(" + t + ")";
  }
  ea.prototype.animate = function(e, t) {
    return t = typeof t == "number" ? { duration: t } : ee({}, t), t.pseudoElement = this._selector, this._scope.animate(e, t);
  }, ea.prototype.getAnimations = function() {
    for (var e = this._scope, t = this._selector, n = e.getAnimations({ subtree: !0 }), l = [], a = 0; a < n.length; a++) {
      var u = n[a].effect;
      u !== null && u.target === e && u.pseudoElement === t && l.push(n[a]);
    }
    return l;
  }, ea.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function Nm(e) {
    return {
      name: e,
      group: new ea("group", e),
      imagePair: new ea("image-pair", e),
      old: new ea("old", e),
      new: new ea("new", e)
    };
  }
  function Ft(e) {
    this._fragmentFiber = e, this._observers = this._eventListeners = null;
  }
  Ft.prototype.addEventListener = function(e, t, n) {
    var l = null, a = null;
    if (!(n != null && typeof n != "boolean" && (l = n.signal || null, l !== null && l.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var u = this._eventListeners;
      if (wm(u, e, t, n) === -1) {
        var s = this, f = t;
        n != null && typeof n != "boolean" && n.once === !0 && (f = function(m) {
          s.removeEventListener(
            e,
            t,
            n
          ), typeof t == "function" ? t.call(this, m) : t.handleEvent(m);
        }), l !== null && (a = s.removeEventListener.bind(
          s,
          e,
          t,
          n
        ), l.addEventListener("abort", a, { once: !0 }), a = l.removeEventListener.bind(l, "abort", a)), l = La(n), u.push({
          type: e,
          listener: t,
          optionsOrUseCapture: n,
          attachedListener: f,
          cleanup: a
        }), v(
          this._fragmentFiber.child,
          !1,
          yy,
          e,
          f,
          l
        );
      }
      this._eventListeners = u;
    }
  };
  function yy(e, t, n, l) {
    return X(e).addEventListener(
      t,
      n,
      l
    ), !1;
  }
  Ft.prototype.removeEventListener = function(e, t, n) {
    var l = this._eventListeners;
    if (l !== null && (t = wm(
      l,
      e,
      t,
      n
    ), t !== -1)) {
      var a = l[t];
      n = a.attachedListener;
      var u = a.cleanup;
      a = La(a.optionsOrUseCapture), v(
        this._fragmentFiber.child,
        !1,
        Ey,
        e,
        n,
        a
      ), l.splice(t, 1), u !== null && u();
    }
  };
  function Ey(e, t, n, l) {
    return X(e).removeEventListener(
      t,
      n,
      l
    ), !1;
  }
  function La(e) {
    return e != null && typeof e != "boolean" && (e.once === !0 || e.signal instanceof AbortSignal) ? { capture: e.capture, passive: e.passive } : e;
  }
  function Om(e) {
    return e == null ? "c=0" : typeof e == "boolean" ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0");
  }
  function wm(e, t, n, l) {
    if (e.length === 0) return -1;
    l = Om(l);
    for (var a = 0; a < e.length; a++) {
      var u = e[a];
      if (u.type === t && u.listener === n && Om(u.optionsOrUseCapture) === l)
        return a;
    }
    return -1;
  }
  Ft.prototype.dispatchEvent = function(e) {
    var t = z(
      this._fragmentFiber
    );
    if (t === null) return !0;
    t = X(t);
    var n = this._eventListeners;
    if (n !== null && 0 < n.length || !e.bubbles) {
      var l = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
      if (n)
        for (var a = 0; a < n.length; a++) {
          var u = n[a];
          l.addEventListener(
            u.type,
            u.attachedListener,
            La(u.optionsOrUseCapture)
          );
        }
      if (t.appendChild(l), e = l.dispatchEvent(e), n)
        for (a = 0; a < n.length; a++)
          u = n[a], l.removeEventListener(
            u.type,
            u.attachedListener,
            La(u.optionsOrUseCapture)
          );
      return t.removeChild(l), e;
    }
    return t.dispatchEvent(e);
  }, Ft.prototype.focus = function(e) {
    v(
      this._fragmentFiber.child,
      !0,
      Cm,
      e,
      void 0,
      void 0
    );
  };
  function Cm(e, t) {
    return e.tag === 6 ? !1 : (e = X(e), Dy(e, t));
  }
  Ft.prototype.focusLast = function(e) {
    var t = [];
    v(
      this._fragmentFiber.child,
      !0,
      Ps,
      t,
      void 0,
      void 0
    );
    for (var n = t.length - 1; 0 <= n && !Cm(t[n], e); n--) ;
  };
  function Ps(e, t) {
    return t.push(e), !1;
  }
  Ft.prototype.blur = function() {
    var e = z(
      this._fragmentFiber
    );
    e !== null && (e = X(e), e = Hu(e).activeElement, e !== null && v(
      this._fragmentFiber.child,
      !1,
      by,
      e,
      void 0,
      void 0
    ));
  };
  function by(e, t) {
    return e.tag === 6 ? !1 : (e = X(e), e === t || e.contains(t) ? (t.blur(), !0) : !1);
  }
  Ft.prototype.observeUsing = function(e) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), v(
      this._fragmentFiber.child,
      !1,
      Sy,
      e,
      void 0,
      void 0
    );
  };
  function Sy(e, t) {
    return e.tag === 6 || (e = X(e), t.observe(e)), !1;
  }
  Ft.prototype.unobserveUsing = function(e) {
    var t = this._observers;
    if (t !== null && t.has(e)) {
      t.delete(e), v(
        this._fragmentFiber.child,
        !1,
        Ty,
        e,
        void 0,
        void 0
      );
      for (var n = t = 0; n < yn.length; n++) {
        var l = yn[n];
        l.fragmentInstance === this && l.observer === e ? e.unobserve(l.instance) : yn[t++] = l;
      }
      yn.length = t;
    }
  };
  function Ty(e, t) {
    return e.tag === 6 || (e = X(e), t.unobserve(e)), !1;
  }
  var yn = [], Ws = !1;
  function Ay(e, t, n) {
    yn.push({
      fragmentInstance: e,
      observer: t,
      instance: n
    }), Ws || (Ws = !0, zy(function() {
      Ws = !1;
      var l = yn;
      yn = [];
      for (var a = 0; a < l.length; a++) {
        var u = l[a];
        u.observer.unobserve(u.instance);
      }
    }));
  }
  Ft.prototype.getClientRects = function() {
    var e = [];
    return v(
      this._fragmentFiber.child,
      !1,
      _y,
      e,
      void 0,
      void 0
    ), e;
  };
  function _y(e, t) {
    if (e.tag === 6) {
      e = e.stateNode;
      var n = e.ownerDocument.createRange();
      n.selectNodeContents(e), t.push.apply(t, n.getClientRects());
    } else
      e = X(e), t.push.apply(t, e.getClientRects());
    return !1;
  }
  Ft.prototype.getRootNode = function(e) {
    var t = z(
      this._fragmentFiber
    );
    return t === null ? this : X(t).getRootNode(e);
  }, Ft.prototype.compareDocumentPosition = function(e) {
    var t = z(
      this._fragmentFiber
    );
    if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var n = [];
    v(
      this._fragmentFiber.child,
      !1,
      Ps,
      n,
      void 0,
      void 0
    );
    var l = X(t);
    if (n.length === 0) {
      if (n = l, D(this._fragmentFiber)) {
        e: {
          for (t = this._fragmentFiber.return; t !== null; ) {
            if (t.tag === 4) {
              t = t.stateNode.containerInfo;
              break e;
            }
            if (t.tag === 3 || t.tag === 5 || t.tag === 27)
              break;
            t = t.return;
          }
          t = null;
        }
        t != null && (n = t);
      }
      t = this._fragmentFiber;
      var a = l = n.compareDocumentPosition(e);
      return n === e ? a = Node.DOCUMENT_POSITION_CONTAINS : l & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = q(t)[1], n === null ? a = Node.DOCUMENT_POSITION_PRECEDING : (e = X(n).compareDocumentPosition(
        e
      ), a = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), a |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    t = X(n[0]), a = X(n[n.length - 1]);
    var u = D(this._fragmentFiber) ? t.parentElement : l;
    if (u == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    l = u.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, u = u.compareDocumentPosition(a) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var s = t.compareDocumentPosition(e), f = a.compareDocumentPosition(e), m = s & Node.DOCUMENT_POSITION_CONTAINED_BY || f & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return f = l && u && s & Node.DOCUMENT_POSITION_FOLLOWING && f & Node.DOCUMENT_POSITION_PRECEDING, t = l && t === e || u && a === e || m || f ? Node.DOCUMENT_POSITION_CONTAINED_BY : !l && t === e || !u && a === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : s, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Ny(
      t,
      this._fragmentFiber,
      n[0],
      n[n.length - 1],
      e
    ) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function Ny(e, t, n, l, a) {
    var u = xl(a);
    if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (n = !!u)
        e: {
          for (; u !== null; ) {
            if (u.tag === 7 && (u === t || u.alternate === t)) {
              n = !0;
              break e;
            }
            u = u.return;
          }
          n = !1;
        }
      return n;
    }
    if (e & Node.DOCUMENT_POSITION_CONTAINS) {
      if (u === null)
        return u = a.ownerDocument, a === u || a === u.documentElement || a === u.body;
      e: {
        for (u = t, t = z(t); u !== null; ) {
          if (!(u.tag !== 5 && u.tag !== 3 && u.tag !== 27 || u !== t && u.alternate !== t)) {
            u = !0;
            break e;
          }
          u = u.return;
        }
        u = !1;
      }
      return u;
    }
    return e & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!u) && !(t = u === n) && (t = se(
      n,
      u,
      pe
    ), t === null ? t = !1 : (v(
      t,
      !0,
      Q,
      u,
      n
    ), u = ue, ue = null, t = u !== null)), t) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!u) && !(t = u === l) && (t = se(
      l,
      u,
      pe
    ), t === null ? t = !1 : (v(
      t,
      !0,
      G,
      u,
      l
    ), u = ue, ye = ue = null, t = u !== null)), t) : !1;
  }
  function Rm(e, t) {
    var n = e.ownerDocument.createRange();
    n.selectNodeContents(e), e = n.getBoundingClientRect(), window.scrollTo(
      window.scrollX + e.left,
      t ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight
    );
  }
  Ft.prototype.scrollIntoView = function(e) {
    if (typeof e == "object") throw Error(c(566));
    var t = [];
    v(
      this._fragmentFiber.child,
      !1,
      Ps,
      t,
      void 0,
      void 0
    );
    var n = e !== !1;
    if (t.length === 0) {
      var l = q(
        this._fragmentFiber
      );
      if (l = n ? l[1] || l[0] || z(this._fragmentFiber) : l[0] || l[1], l === null) return;
      if (l.tag === 6) {
        e = X(l), Rm(e, n);
        return;
      }
      if (l = X(l), l.nodeType !== 9) {
        if (l.nodeType === 11) {
          n = "host" in l ? l.host : null, n !== null && n.scrollIntoView(e);
          return;
        }
        l.scrollIntoView(e);
      }
    }
    for (l = n ? t.length - 1 : 0; l !== (n ? -1 : t.length); ) {
      var a = t[l];
      a.tag === 6 ? (a = X(a), Rm(a, n)) : X(a).scrollIntoView(e), l += n ? -1 : 1;
    }
  };
  function Oy(e, t) {
    return e = X(e), Um(e, t), !1;
  }
  function Um(e, t) {
    e.reactFragments == null && (e.reactFragments = /* @__PURE__ */ new Set()), e.reactFragments.add(t);
  }
  function Dm(e, t) {
    var n = t._eventListeners;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var a = n[l];
        e.addEventListener(
          a.type,
          a.attachedListener,
          La(a.optionsOrUseCapture)
        );
      }
    e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(u) {
      for (var s = 0, f = 0; f < yn.length; f++) {
        var m = yn[f];
        (m.fragmentInstance !== t || m.observer !== u || m.instance !== e) && (yn[s++] = m);
      }
      yn.length = s, u.observe(e);
    }), Um(e, t));
  }
  function wy(e, t) {
    var n = t._eventListeners;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var a = n[l];
        e.removeEventListener(
          a.type,
          a.attachedListener,
          La(a.optionsOrUseCapture)
        );
      }
    e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(u) {
      typeof u.rootMargin == "string" ? Ay(
        t,
        u,
        e
      ) : u.unobserve(e);
    }), e.reactFragments != null && e.reactFragments.delete(t));
  }
  function eo(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          eo(n), fi(n);
          continue;
        case "SCRIPT":
        case "STYLE":
          continue;
        case "LINK":
          if (n.rel.toLowerCase() === "stylesheet") continue;
      }
      e.removeChild(n);
    }
  }
  function Cy(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var a = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[eu])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (u = e.getAttribute("rel"), u === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (u !== a.rel || e.getAttribute("href") !== (a.href == null || a.href === "" ? null : a.href) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin) || e.getAttribute("title") !== (a.title == null ? null : a.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (u = e.getAttribute("src"), (u !== (a.src == null ? null : a.src) || e.getAttribute("type") !== (a.type == null ? null : a.type) || e.getAttribute("crossorigin") !== (a.crossOrigin == null ? null : a.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = a.name == null ? null : "" + a.name;
        if (a.type === "hidden" && e.getAttribute("name") === u)
          return e;
      } else return e;
      if (e = cn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Ry(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = cn(e.nextSibling), e === null)) return null;
    return e;
  }
  function zm(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = cn(e.nextSibling), e === null)) return null;
    return e;
  }
  function to(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function no(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Uy(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading")
      t();
    else {
      var l = function() {
        t(), n.removeEventListener("DOMContentLoaded", l);
      };
      n.addEventListener("DOMContentLoaded", l), e._reactRetry = l;
    }
  }
  function cn(e) {
    for (; e != null; e = e.nextSibling) {
      var t = e.nodeType;
      if (t === 1 || t === 3) break;
      if (t === 8) {
        if (t = e.data, t === "$" || t === "$!" || t === "$?" || t === "$~" || t === "&" || t === "F!" || t === "F")
          break;
        if (t === "/$" || t === "/&") return null;
      }
    }
    return e;
  }
  var lo = null;
  function xm(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0)
            return cn(e.nextSibling);
          t--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Mm(e) {
    e = e.previousSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "$" || n === "$!" || n === "$?" || n === "$~" || n === "&") {
          if (t === 0) return e;
          t--;
        } else n !== "/$" && n !== "/&" || t++;
      }
      e = e.previousSibling;
    }
    return null;
  }
  function Dy(e, t) {
    function n() {
      l = !0;
    }
    if (e.ownerDocument.activeElement === e) return !0;
    var l = !1;
    try {
      e.ownerDocument.addEventListener("focus", n, !0), (e.focus || HTMLElement.prototype.focus).call(e, t);
    } finally {
      e.ownerDocument.removeEventListener("focus", n, !0);
    }
    return l;
  }
  function zy(e) {
    bm(function() {
      bm(function(t) {
        return e(t);
      });
    });
  }
  function jm(e, t, n) {
    switch (t = Hu(n), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(c(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(c(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(c(454));
        return e;
      default:
        throw Error(c(451));
    }
  }
  function Hm(e, t, n) {
    for (var l in n) {
      var a = n[l];
      n.hasOwnProperty(l) && a != null && Ie(e, t, l, null, ry, a);
    }
    n.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === Sn && (e.onclick = null), fi(e);
  }
  function ao(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    fi(e);
  }
  var sn = /* @__PURE__ */ new Map(), Lm = /* @__PURE__ */ new Set();
  function Lu(e) {
    if (typeof e.getRootNode == "function") {
      var t = e.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) return t;
    }
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Jn = oe.d;
  oe.d = {
    f: xy,
    r: My,
    D: jy,
    C: Hy,
    L: Ly,
    m: qy,
    X: Iy,
    S: By,
    M: Vy
  };
  function xy() {
    var e = Jn.f(), t = mr();
    return e || t;
  }
  function My(e) {
    var t = na(e);
    t !== null && t.tag === 5 && t.type === "form" ? Bd(t) : Jn.r(e);
  }
  var qa = typeof document > "u" ? null : document;
  function qm(e, t, n) {
    var l = qa;
    if (l && typeof t == "string" && t) {
      var a = en(t);
      a = 'link[rel="' + e + '"][href="' + a + '"]', typeof n == "string" && (a += '[crossorigin="' + n + '"]'), Lm.has(a) || (Lm.add(a), e = { rel: e, crossOrigin: n, href: t }, l.querySelector(a) === null && (t = l.createElement("link"), bt(t, "link", e), ct(t), l.head.appendChild(t)));
    }
  }
  function jy(e) {
    Jn.D(e), qm("dns-prefetch", e, null);
  }
  function Hy(e, t) {
    Jn.C(e, t), qm("preconnect", e, t);
  }
  function Ly(e, t, n) {
    Jn.L(e, t, n);
    var l = qa;
    if (l && e && t) {
      var a = 'link[rel="preload"][as="' + en(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (a += '[imagesrcset="' + en(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (a += '[imagesizes="' + en(
        n.imageSizes
      ) + '"]')) : a += '[href="' + en(e) + '"]';
      var u = a;
      switch (t) {
        case "style":
          u = Ba(e);
          break;
        case "script":
          u = Ia(e);
      }
      if (!(sn.has(u) || (e = ee(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), sn.set(u, e), l.querySelector(a) !== null || t === "style" && l.querySelector(qu(u)) || t === "script" && l.querySelector(Bu(u))))) {
        var s = l.createElement("link");
        bt(s, "link", e), t === "style" && (s[oi] = !0, s.onload = s.onerror = function() {
          Fo(s);
        }), ct(s), l.head.appendChild(s);
      }
    }
  }
  function qy(e, t) {
    Jn.m(e, t);
    var n = qa;
    if (n && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", a = 'link[rel="modulepreload"][as="' + en(l) + '"][href="' + en(e) + '"]', u = a;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Ia(e);
      }
      if (!sn.has(u) && (e = ee({ rel: "modulepreload", href: e }, t), sn.set(u, e), n.querySelector(a) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Bu(u)))
              return;
        }
        l = n.createElement("link"), bt(l, "link", e), ct(l), n.head.appendChild(l);
      }
    }
  }
  function By(e, t, n) {
    Jn.S(e, t, n);
    var l = qa;
    if (l && e) {
      var a = la(l).hoistableStyles, u = Ba(e);
      t = t || "default";
      var s = a.get(u);
      if (!s) {
        var f = { loading: 0, preload: null };
        if (s = l.querySelector(
          qu(u)
        ))
          f.loading = 5;
        else {
          e = ee(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = sn.get(u)) && uo(e, n);
          var m = s = l.createElement("link");
          ct(m), bt(m, "link", e), m._p = new Promise(function(_, R) {
            m.onload = _, m.onerror = R;
          }), m.addEventListener("load", function() {
            f.loading |= 1;
          }), m.addEventListener("error", function() {
            f.loading |= 2;
          }), f.loading |= 4, Sr(s, t, l);
        }
        s = {
          type: "stylesheet",
          instance: s,
          count: 1,
          state: f
        }, a.set(u, s);
      }
    }
  }
  function Iy(e, t) {
    Jn.X(e, t);
    var n = qa;
    if (n && e) {
      var l = la(n).hoistableScripts, a = Ia(e), u = l.get(a);
      u || (u = n.querySelector(Bu(a)), u || (e = ee({ src: e, async: !0 }, t), (t = sn.get(a)) && io(e, t), u = n.createElement("script"), ct(u), bt(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(a, u));
    }
  }
  function Vy(e, t) {
    Jn.M(e, t);
    var n = qa;
    if (n && e) {
      var l = la(n).hoistableScripts, a = Ia(e), u = l.get(a);
      u || (u = n.querySelector(Bu(a)), u || (e = ee({ src: e, async: !0, type: "module" }, t), (t = sn.get(a)) && io(e, t), u = n.createElement("script"), ct(u), bt(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, l.set(a, u));
    }
  }
  function Bm(e, t, n, l) {
    var a = (a = V.current) ? Lu(a) : null;
    if (!a) throw Error(c(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (n = Ba(n.href), t = la(
          a
        ).hoistableStyles, l = t.get(n), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, t.set(n, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = Ba(n.href);
          var u = la(
            a
          ).hoistableStyles, s = u.get(e);
          if (s || (a = a.ownerDocument || a, s = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, s), (u = a.querySelector(
            qu(e)
          )) ? u._p || (s.instance = u, s.state.loading = 5) : (u = sn.get(e), u || (u = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, sn.set(e, u)), Gy(
            a,
            e,
            u,
            s.state
          ))), t && l === null)
            throw Error(c(528, ""));
          return s;
        }
        if (t && l !== null)
          throw Error(c(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (n = Ia(n), t = la(
          a
        ).hoistableScripts, l = t.get(n), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, t.set(n, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(c(444, e));
    }
  }
  function Ba(e) {
    return 'href="' + en(e) + '"';
  }
  function qu(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Im(e) {
    return ee({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Gy(e, t, n, l) {
    if (t = e.querySelector(
      'link[rel="preload"][as="style"][' + t + "]"
    )) {
      if (t[oi] !== !0) {
        l.loading = 1;
        return;
      }
    } else
      t = e.createElement("link"), t[oi] = !0, t.onload = t.onerror = Fo.bind(null, t), bt(t, "link", n), ct(t), e.head.appendChild(t);
    l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    });
  }
  function Ia(e) {
    return '[src="' + en(e) + '"]';
  }
  function Bu(e) {
    return "script[async]" + e;
  }
  function Vm(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + en(n.href) + '"]'
          );
          if (l)
            return t.instance = l, ct(l), l;
          var a = ee({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), ct(l), bt(l, "style", a), Sr(l, n.precedence, e), t.instance = l;
        case "stylesheet":
          a = Ba(n.href);
          var u = e.querySelector(
            qu(a)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, ct(u), u;
          l = Im(n), (a = sn.get(a)) && uo(l, a), u = (e.ownerDocument || e).createElement("link"), ct(u);
          var s = u;
          return s._p = new Promise(function(f, m) {
            s.onload = f, s.onerror = m;
          }), bt(u, "link", l), t.state.loading |= 4, Sr(u, n.precedence, e), t.instance = u;
        case "script":
          return u = Ia(n.src), (a = e.querySelector(
            Bu(u)
          )) ? (t.instance = a, ct(a), a) : (l = n, (a = sn.get(u)) && (l = ee({}, n), io(l, a)), e = e.ownerDocument || e, a = e.createElement("script"), ct(a), bt(a, "link", l), e.head.appendChild(a), t.instance = a);
        case "void":
          return null;
        default:
          throw Error(c(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, Sr(l, n.precedence, e));
    return t.instance;
  }
  function Sr(e, t, n) {
    for (var l = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), a = l.length ? l[l.length - 1] : null, u = a, s = 0; s < l.length; s++) {
      var f = l[s];
      if (f.dataset.precedence === t) u = f;
      else if (u !== a) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function uo(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function io(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Tr = null;
  function Gm(e, t, n) {
    if (Tr === null) {
      var l = /* @__PURE__ */ new Map(), a = Tr = /* @__PURE__ */ new Map();
      a.set(n, l);
    } else
      a = Tr, l = a.get(n), l || (l = /* @__PURE__ */ new Map(), a.set(n, l));
    if (l.has(e)) return l;
    for (l.set(e, null), n = n.getElementsByTagName(e), a = 0; a < n.length; a++) {
      var u = n[a];
      if (!(u[eu] || u[vt] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var s = u.getAttribute(t) || "";
        s = e + s;
        var f = l.get(s);
        f ? f.push(u) : l.set(s, [u]);
      }
    }
    return l;
  }
  function ro(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function Yy(e, t, n) {
    if (n === 1 || t.itemProp != null) return !1;
    switch (e) {
      case "meta":
      case "title":
        return !0;
      case "style":
        if (typeof t.precedence != "string" || typeof t.href != "string" || t.href === "")
          break;
        return !0;
      case "link":
        if (typeof t.rel != "string" || typeof t.href != "string" || t.href === "" || t.onLoad || t.onError)
          break;
        return t.rel === "stylesheet" ? (e = t.disabled, typeof t.precedence == "string" && e == null) : !0;
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Ym(e, t) {
    return e === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
  }
  function Xm(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Qm(e) {
    return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function Km(e, t) {
    typeof t.decode == "function" && (e.imgCount++, t.complete || (e.imgBytes += Qm(t), e.suspenseyImages.push(t)), e = Ky.bind(e), t.decode().then(e, e));
  }
  function Xy(e, t, n, l) {
    if (n.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var a = Ba(l.href), u = t.querySelector(
          qu(a)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Iu.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = u, ct(u);
          return;
        }
        u = t.ownerDocument || t, l = Im(l), (a = sn.get(a)) && uo(l, a), u = u.createElement("link"), ct(u);
        var s = u;
        s._p = new Promise(function(f, m) {
          s.onload = f, s.onerror = m;
        }), bt(u, "link", l), n.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Iu.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var Ar = 0;
  function Qy(e, t) {
    return e.stylesheets && e.count === 0 && Nr(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var l = setTimeout(function() {
        if (e.stylesheets && Nr(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Ar === 0 && (Ar = 62500 * sy());
      var a = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Nr(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > Ar ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(a);
      };
    } : null;
  }
  function Zm(e) {
    if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
      if (e.stylesheets) Nr(e, e.stylesheets);
      else if (e.unsuspend) {
        var t = e.unsuspend;
        e.unsuspend = null, t();
      }
    }
  }
  function Iu() {
    this.count--, Zm(this);
  }
  function Ky() {
    this.imgCount--, Zm(this);
  }
  var _r = null;
  function Nr(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, _r = /* @__PURE__ */ new Map(), t.forEach(Zy, e), _r = null, Iu.call(e));
  }
  function Zy(e, t) {
    if (!(t.state.loading & 4)) {
      var n = _r.get(e);
      if (n) var l = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), _r.set(e, n);
        for (var a = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < a.length; u++) {
          var s = a[u];
          (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") && (n.set(s.dataset.precedence, s), l = s);
        }
        l && n.set(null, l);
      }
      a = t.instance, s = a.getAttribute("data-precedence"), u = n.get(s) || l, u === l && n.set(null, a), n.set(s, a), this.count++, l = Iu.bind(this), a.addEventListener("load", l), a.addEventListener("error", l), u ? u.parentNode.insertBefore(a, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(a, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Va = {
    $$typeof: B,
    Provider: null,
    Consumer: null,
    _currentValue: Pt,
    _currentValue2: Pt,
    _threadCount: 0
  };
  function Jy(e, t, n, l, a, u, s, f, m) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Vr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Vr(0), this.hiddenUpdates = Vr(null), this.identifierPrefix = l, this.onUncaughtError = a, this.onCaughtError = u, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Jm(e, t, n, l, a, u, s, f, m, _, R, j) {
    return e = new Jy(
      e,
      t,
      n,
      s,
      m,
      _,
      R,
      j,
      f
    ), t = 1, u === !0 && (t |= 24), u = xt(3, null, null, t), e.current = u, u.stateNode = e, t = Tc(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: l,
      isDehydrated: n,
      cache: t
    }, Oc(u), e;
  }
  function km(e) {
    return e ? (e = ha, e) : ha;
  }
  function Fm(e, t, n, l, a, u) {
    a = km(a), l.context === null ? l.context = a : l.pendingContext = a, l = rl(t), l.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (l.callback = u), n = cl(e, l, t), n !== null && (Lt(n, e, t), pu(n, e, t));
  }
  function $m(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function co(e, t) {
    $m(e, t), (e = e.alternate) && $m(e, t);
  }
  function Pm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ll(e, 67108864);
      t !== null && Lt(t, e, 67108864), co(e, 67108864);
    }
  }
  function Wm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = kt();
      t = Gr(t);
      var n = Ll(e, t);
      n !== null && Lt(n, e, t), co(e, t);
    }
  }
  var Ga = !0;
  function ky(e, t, n, l) {
    var a = P.T;
    P.T = null;
    var u = oe.p;
    try {
      oe.p = 2, so(e, t, n, l);
    } finally {
      oe.p = u, P.T = a;
    }
  }
  function Fy(e, t, n, l) {
    var a = P.T;
    P.T = null;
    var u = oe.p;
    try {
      oe.p = 8, so(e, t, n, l);
    } finally {
      oe.p = u, P.T = a;
    }
  }
  function so(e, t, n, l) {
    if (Ga) {
      var a = oo(l);
      if (a === null)
        Xs(
          e,
          t,
          l,
          Or,
          n
        ), tv(e, l);
      else if (Py(
        a,
        e,
        t,
        n,
        l
      ))
        l.stopPropagation();
      else if (tv(e, l), t & 4 && -1 < $y.indexOf(e)) {
        for (; a !== null; ) {
          var u = na(a);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var s = zl(u.pendingLanes);
                  if (s !== 0) {
                    var f = u;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; s; ) {
                      var m = 1 << 31 - Gt(s);
                      f.entanglements[1] |= m, s &= ~m;
                    }
                    Dn(u), (je & 6) === 0 && (fr = It() + 500, xu(0));
                  }
                }
                break;
              case 31:
              case 13:
                f = Ll(u, 2), f !== null && Lt(f, u, 2), mr(), co(u, 2);
            }
          if (u = oo(l), u === null && Xs(
            e,
            t,
            l,
            Or,
            n
          ), u === a) break;
          a = u;
        }
        a !== null && l.stopPropagation();
      } else
        Xs(
          e,
          t,
          l,
          null,
          n
        );
    }
  }
  function oo(e) {
    return e = kr(e), fo(e);
  }
  var Or = null;
  function fo(e) {
    if (Or = null, e = xl(e), e !== null) {
      var t = h(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = g(t), e !== null) return e;
          e = null;
        } else if (n === 31) {
          if (e = b(t), e !== null) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Or = e, null;
  }
  function ev(e) {
    switch (e) {
      case "beforetoggle":
      case "cancel":
      case "click":
      case "close":
      case "contextmenu":
      case "copy":
      case "cut":
      case "auxclick":
      case "dblclick":
      case "dragend":
      case "dragstart":
      case "drop":
      case "focusin":
      case "focusout":
      case "input":
      case "invalid":
      case "keydown":
      case "keypress":
      case "keyup":
      case "mousedown":
      case "mouseup":
      case "paste":
      case "pause":
      case "play":
      case "pointercancel":
      case "pointerdown":
      case "pointerup":
      case "ratechange":
      case "reset":
      case "seeked":
      case "submit":
      case "toggle":
      case "touchcancel":
      case "touchend":
      case "touchstart":
      case "volumechange":
      case "change":
      case "selectionchange":
      case "textInput":
      case "compositionstart":
      case "compositionend":
      case "compositionupdate":
      case "beforeblur":
      case "afterblur":
      case "beforeinput":
      case "blur":
      case "fullscreenchange":
      case "fullscreenerror":
      case "focus":
      case "hashchange":
      case "popstate":
      case "select":
      case "selectstart":
        return 2;
      case "drag":
      case "dragenter":
      case "dragexit":
      case "dragleave":
      case "dragover":
      case "mousemove":
      case "mouseout":
      case "mouseover":
      case "pointermove":
      case "pointerout":
      case "pointerover":
      case "resize":
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (sg()) {
          case qo:
            return 2;
          case Bo:
            return 8;
          case ui:
          case og:
            return 32;
          case Io:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var ho = !1, bl = null, Sl = null, Tl = null, Vu = /* @__PURE__ */ new Map(), Gu = /* @__PURE__ */ new Map(), Al = [], $y = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function tv(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        bl = null;
        break;
      case "dragenter":
      case "dragleave":
        Sl = null;
        break;
      case "mouseover":
      case "mouseout":
        Tl = null;
        break;
      case "pointerover":
      case "pointerout":
        Vu.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Gu.delete(t.pointerId);
    }
  }
  function Yu(e, t, n, l, a, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: l,
      nativeEvent: u,
      targetContainers: [a]
    }, t !== null && (t = na(t), t !== null && Pm(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, a !== null && t.indexOf(a) === -1 && t.push(a), e);
  }
  function Py(e, t, n, l, a) {
    switch (t) {
      case "focusin":
        return bl = Yu(
          bl,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "dragenter":
        return Sl = Yu(
          Sl,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "mouseover":
        return Tl = Yu(
          Tl,
          e,
          t,
          n,
          l,
          a
        ), !0;
      case "pointerover":
        var u = a.pointerId;
        return Vu.set(
          u,
          Yu(
            Vu.get(u) || null,
            e,
            t,
            n,
            l,
            a
          )
        ), !0;
      case "gotpointercapture":
        return u = a.pointerId, Gu.set(
          u,
          Yu(
            Gu.get(u) || null,
            e,
            t,
            n,
            l,
            a
          )
        ), !0;
    }
    return !1;
  }
  function nv(e) {
    var t = xl(e.target);
    if (t !== null) {
      var n = h(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = g(n), t !== null) {
            e.blockedOn = t, Zo(e.priority, function() {
              Wm(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = b(n), t !== null) {
            e.blockedOn = t, Zo(e.priority, function() {
              Wm(n);
            });
            return;
          }
        } else if (t === 3 && n.stateNode.current.memoizedState.isDehydrated) {
          e.blockedOn = n.tag === 3 ? n.stateNode.containerInfo : null;
          return;
        }
      }
    }
    e.blockedOn = null;
  }
  function wr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = oo(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(
          n.type,
          n
        );
        Jr = l, n.target.dispatchEvent(l), Jr = null;
      } else
        return t = na(n), t !== null && Pm(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function lv(e, t, n) {
    wr(e) && n.delete(t);
  }
  function Wy() {
    ho = !1, bl !== null && wr(bl) && (bl = null), Sl !== null && wr(Sl) && (Sl = null), Tl !== null && wr(Tl) && (Tl = null), Vu.forEach(lv), Gu.forEach(lv);
  }
  function Cr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ho || (ho = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      Wy
    )));
  }
  var Rr = null;
  function av(e) {
    Rr !== e && (Rr = e, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        Rr === e && (Rr = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], l = e[t + 1], a = e[t + 2];
          if (typeof l != "function") {
            if (fo(l || n) === null)
              continue;
            break;
          }
          var u = na(n);
          u !== null && (e.splice(t, 3), t -= 3, Zc(
            u,
            {
              pending: !0,
              data: a,
              method: n.method,
              action: l
            },
            l,
            a
          ));
        }
      }
    ));
  }
  function Ya(e) {
    function t(m) {
      return Cr(m, e);
    }
    bl !== null && Cr(bl, e), Sl !== null && Cr(Sl, e), Tl !== null && Cr(Tl, e), Vu.forEach(t), Gu.forEach(t);
    for (var n = 0; n < Al.length; n++) {
      var l = Al[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Al.length && (n = Al[0], n.blockedOn === null); )
      nv(n), n.blockedOn === null && Al.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (l = 0; l < n.length; l += 3) {
        var a = n[l], u = n[l + 1], s = a[zt] || null;
        if (typeof u == "function")
          s || av(n);
        else if (s) {
          var f = null;
          if (u && u.hasAttribute("formAction")) {
            if (a = u, s = u[zt] || null)
              f = s.formAction;
            else if (fo(a) !== null) continue;
          } else f = s.action;
          typeof f == "function" ? n[l + 1] = f : (n.splice(l, 3), l -= 3), av(n);
        }
      }
  }
  function uv() {
    function e(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(s) {
            return a = s;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      a !== null && (a(), a = null), l || setTimeout(n, 20);
    }
    function n() {
      if (!l && !navigation.transition) {
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var l = !1, a = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
        l = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), a !== null && (a(), a = null);
      };
    }
  }
  function mo(e) {
    this._internalRoot = e;
  }
  Ur.prototype.render = mo.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(c(409));
    var n = t.current, l = kt();
    Fm(n, l, e, t, null, null);
  }, Ur.prototype.unmount = mo.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Fm(e.current, 2, null, e, null, null), mr(), t[ta] = null;
    }
  };
  function Ur(e) {
    this._internalRoot = e;
  }
  Ur.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Ko();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Al.length && t !== 0 && t < Al[n].priority; n++) ;
      Al.splice(n, 0, e), n === 0 && nv(e);
    }
  };
  var iv = r.version;
  if (iv !== "19.3.0")
    throw Error(
      c(
        527,
        iv,
        "19.3.0"
      )
    );
  oe.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","), Error(c(268, e)));
    return e = w(t), e = e !== null ? C(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var e0 = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: P,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Dr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Dr.isDisabled && Dr.supportsFiber)
      try {
        $a = Dr.inject(
          e0
        ), Vt = Dr;
      } catch {
      }
  }
  return Qu.createRoot = function(e, t) {
    if (!d(e)) throw Error(c(299));
    var n = !1, l = "", a = kd, u = Fd, s = $d;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (a = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = Jm(
      e,
      1,
      !1,
      null,
      null,
      n,
      l,
      null,
      a,
      u,
      s,
      uv
    ), e[ta] = t.current, Ys(e), new mo(t);
  }, Qu.hydrateRoot = function(e, t, n) {
    if (!d(e)) throw Error(c(299));
    var l = !1, a = "", u = kd, s = Fd, f = $d, m = null;
    return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (a = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (s = n.onCaughtError), n.onRecoverableError !== void 0 && (f = n.onRecoverableError), n.formState !== void 0 && (m = n.formState)), t = Jm(
      e,
      1,
      !0,
      t,
      n ?? null,
      l,
      a,
      m,
      u,
      s,
      f,
      uv
    ), t.context = km(null), n = t.current, l = kt(), l = Gr(l), a = rl(l), a.callback = null, cl(n, a, l), n = l, t.current.lanes = n, Wa(t, n), Dn(t), e[ta] = t.current, Ys(e), new Ur(t);
  }, Qu.version = "19.3.0", Qu;
}
var gv;
function o0() {
  if (gv) return po.exports;
  gv = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (r) {
        console.error(r);
      }
  }
  return i(), po.exports = s0(), po.exports;
}
var f0 = o0();
function xv(i, r) {
  if (r) return r;
  const o = new URLSearchParams(i.location.search).get("hana-host-origin");
  if (o) return o;
  try {
    return new URL(i.document.referrer).origin;
  } catch {
    return "*";
  }
}
function Mv(i, r, o) {
  return i.source !== r ? !1 : o === "*" || i.origin === o;
}
var d0 = 600, h0 = 120, m0 = 4e3, jv = 20, pv = 4096, yv = 1e4, v0 = /* @__PURE__ */ new Set(["scroll_element", "click_sequence", "drag_element", "press_key"]), g0 = /* @__PURE__ */ new Set([
  "Enter",
  "Escape",
  "Tab",
  "Space",
  "ArrowUp",
  "ArrowDown",
  "ArrowLeft",
  "ArrowRight",
  "Home",
  "End",
  "PageUp",
  "PageDown",
  "Backspace",
  "Delete",
  "Insert"
]), Hv = "hana-ui-", p0 = 512, y0 = 1, Ev = /* @__PURE__ */ new WeakMap(), jr = /* @__PURE__ */ new WeakMap();
function Qa(i) {
  return typeof i == "object" && i !== null && !Array.isArray(i);
}
function Lr(i) {
  return i.nodeType === 9;
}
function zo(i) {
  return Lr(i) ? i : i.ownerDocument;
}
function E0(i) {
  return Lr(i) ? i.body : i;
}
function Lv(i, r) {
  return r.isConnected && (Lr(i) ? r.ownerDocument === i : i.contains(r));
}
function ka(i) {
  const r = i.ownerDocument.defaultView?.HTMLElement;
  return r ? i instanceof r : i instanceof HTMLElement;
}
function ti(i) {
  const r = i.ownerDocument.defaultView?.HTMLInputElement;
  return r ? i instanceof r : i instanceof HTMLInputElement;
}
function xo(i) {
  const r = i.ownerDocument.defaultView?.HTMLTextAreaElement;
  return r ? i instanceof r : i instanceof HTMLTextAreaElement;
}
function qv(i) {
  const r = i.ownerDocument.defaultView?.HTMLButtonElement;
  return r ? i instanceof r : i instanceof HTMLButtonElement;
}
function b0(i) {
  const r = i.ownerDocument.defaultView?.HTMLSelectElement;
  return r ? i instanceof r : i.tagName === "SELECT";
}
function S0(i) {
  const r = i.ownerDocument.defaultView?.HTMLAnchorElement;
  return r ? i instanceof r : i.tagName === "A";
}
function Bv(i) {
  if (!ka(i)) return !0;
  const r = i.ownerDocument.defaultView?.getComputedStyle(i);
  return !r || r.display !== "none" && r.visibility !== "hidden";
}
function T0(i) {
  return ka(i) ? ti(i) || xo(i) || qv(i) || b0(i) || S0(i) || i.hasAttribute("contenteditable") || i.hasAttribute("onclick") || ["button", "switch", "textbox", "combobox", "slider", "checkbox", "link"].includes(i.getAttribute("role") ?? "") : !1;
}
function A0(i) {
  const r = i.ownerDocument;
  let o = Ev.get(r);
  o || (o = /* @__PURE__ */ new WeakMap(), Ev.set(r, o));
  const c = o.get(i), d = jr.get(r);
  if (c && d?.has(c)) return c;
  let h = c;
  if (!h)
    do
      h = `${Hv}${y0++}`;
    while (r.getElementById(h));
  o.set(i, h);
  let g = jr.get(r);
  if (g || (g = /* @__PURE__ */ new Map(), jr.set(r, g)), g.size >= p0) {
    const b = g.keys().next().value;
    b && g.delete(b);
  }
  return g.set(h, new WeakRef(i)), h;
}
function _0(i, r) {
  const o = i, c = { tagName: i.tagName.toLowerCase() };
  typeof o.id == "string" && o.id && (c.id = o.id.slice(0, 80)), typeof o.className == "string" && o.className.trim() && (c.className = o.className.trim().slice(0, 120));
  const d = o.textContent?.trim();
  return d && (c.text = d.slice(0, 160)), (ti(i) || xo(i)) && (i.disabled && (c.disabled = !0), i.type && (c.type = i.type)), o.id ? c.elementId = o.id : r && T0(i) && (c.elementId = A0(i)), c;
}
function N0(i, r) {
  const o = [], c = E0(i);
  if (!c) return { outline: o, visibleNodeCount: 0, totalNodeCount: 0, truncated: !1 };
  const d = zo(i).createTreeWalker(c, 1);
  let h = d.currentNode, g = 0, b = 0;
  for (; h && b < d0; ) {
    if (h.nodeType === 1) {
      const U = h;
      b += 1, Bv(U) && (g += 1, o.length < h0 && o.push(_0(U, r)));
    }
    h = d.nextNode();
  }
  return { outline: o, visibleNodeCount: g, totalNodeCount: b, truncated: h !== null };
}
function Co(i, r, o = !1) {
  if (typeof r != "string" || !r.trim()) return null;
  const c = r.trim(), d = zo(i), h = c.startsWith(Hv) ? jr.get(d)?.get(c)?.deref() ?? null : d.getElementById(c);
  return h && Lv(i, h) && (!o || Bv(h)) ? h : null;
}
function Iv(i) {
  return ka(i) ? ti(i) && (i.type === "file" || i.disabled) ? { ok: !1, error: "This element cannot be clicked." } : qv(i) && i.disabled ? { ok: !1, error: "This element cannot be clicked." } : (i.click(), { ok: !0 }) : { ok: !1, error: "Target is not an element." };
}
function bv(i, r) {
  const o = ti(i) ? i.ownerDocument.defaultView?.HTMLInputElement.prototype : i.ownerDocument.defaultView?.HTMLTextAreaElement.prototype, c = o && Object.getOwnPropertyDescriptor(o, "value")?.set;
  c ? c.call(i, r) : i.value = r;
}
function O0(i, r, o) {
  const c = typeof r == "string" ? r.slice(0, m0) : "";
  if (ti(i)) {
    if (i.type === "file" || i.disabled || i.readOnly) return { ok: !1, error: "This element cannot accept text." };
    o ? bv(i, `${i.value}${c}`) : i.value = `${i.value}${c}`;
  } else if (xo(i)) {
    if (i.disabled || i.readOnly) return { ok: !1, error: "This element cannot accept text." };
    o ? bv(i, `${i.value}${c}`) : i.value = `${i.value}${c}`;
  } else return { ok: !1, error: "This element cannot accept text." };
  return i.dispatchEvent(new Event("input", { bubbles: !0 })), i.dispatchEvent(new Event("change", { bubbles: !0 })), { ok: !0 };
}
function $u(i, r) {
  const o = Co(i, r, !0);
  return o && ka(o) ? o : null;
}
function Hr(i, r) {
  return typeof i == "number" && Number.isFinite(i) && Math.abs(i) <= r ? i : null;
}
function w0(i, r) {
  const o = r.scrollX === void 0 ? 0 : Hr(r.scrollX, yv), c = r.scrollY === void 0 ? 0 : Hr(r.scrollY, yv);
  if (o === null || c === null || o === 0 && c === 0) return { ok: !1, code: "UI_ACTION_SCROLL_INVALID", error: "scroll_element requires bounded non-zero scroll coordinates." };
  const d = r.elementId === void 0 ? Lr(i) ? i.scrollingElement ?? i.documentElement : i : $u(i, r.elementId);
  return !d || !ka(d) ? { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No visible element matches this elementId." } : (d.scrollLeft += o, d.scrollTop += c, d.dispatchEvent(new Event("scroll", { bubbles: !1 })), { ok: !0, result: { scrollLeft: d.scrollLeft, scrollTop: d.scrollTop } });
}
function C0(i) {
  const r = Array.isArray(i.steps) ? i.steps : i.elementIds;
  if (!Array.isArray(r) || r.length < 1 || r.length > jv) return null;
  const o = r.map((c) => {
    if (typeof c == "string") return c.trim();
    if (!Qa(c)) return "";
    const d = typeof c.elementId == "string" ? c.elementId.trim() : "", h = Array.isArray(c.elementIds) && c.elementIds.length === 1 && typeof c.elementIds[0] == "string" ? c.elementIds[0].trim() : "";
    return d || h;
  });
  return o.every(Boolean) ? o : null;
}
function R0(i, r) {
  const o = C0(r);
  if (!o) return { ok: !1, code: "UI_ACTION_SEQUENCE_INVALID", error: "click_sequence requires one to twenty element IDs." };
  let c = 0;
  for (const [d, h] of o.entries()) {
    const g = $u(i, h);
    if (!g) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: `Sequence target ${d + 1} is unavailable.`, result: { completedCount: c, failedIndex: d } };
    const b = Iv(g);
    if (b.ok === !1) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_OPERABLE", error: b.error, result: { completedCount: c, failedIndex: d } };
    c += 1;
  }
  return { ok: !0, result: { completedCount: c } };
}
function So(i, r, o, c, d) {
  const h = i.ownerDocument.defaultView?.MouseEvent ?? MouseEvent;
  i.dispatchEvent(new h(r, { bubbles: !0, cancelable: !0, clientX: o, clientY: c, buttons: d }));
}
function To(i, r, o, c, d) {
  const h = i.ownerDocument.defaultView, g = h?.PointerEvent ?? h?.MouseEvent ?? MouseEvent;
  i.dispatchEvent(new g(r, { bubbles: !0, cancelable: !0, clientX: o, clientY: c, buttons: d }));
}
function U0(i, r) {
  const o = $u(i, r.elementId);
  if (!o) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No visible source element matches this elementId." };
  const c = r.deltaX === void 0 ? 0 : Hr(r.deltaX, pv), d = r.deltaY === void 0 ? 0 : Hr(r.deltaY, pv);
  if (c === null || d === null) return { ok: !1, code: "UI_ACTION_DRAG_INVALID", error: "drag_element coordinates must be finite and bounded." };
  const h = r.targetElementId === void 0 ? null : $u(i, r.targetElementId);
  if (r.targetElementId !== void 0 && !h) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No visible target element matches targetElementId." };
  if (!h && c === 0 && d === 0) return { ok: !1, code: "UI_ACTION_DRAG_TARGET_REQUIRED", error: "drag_element requires a target element or non-zero delta." };
  const g = o.getBoundingClientRect(), b = g.left + g.width / 2, U = g.top + g.height / 2, w = h?.getBoundingClientRect(), C = w ? w.left + w.width / 2 : b + c, v = w ? w.top + w.height / 2 : U + d, z = h ?? o;
  To(o, "pointerdown", b, U, 1), So(o, "mousedown", b, U, 1);
  for (const D of [0.25, 0.5, 0.75]) {
    const q = b + (C - b) * D, Y = U + (v - U) * D;
    To(z, "pointermove", q, Y, 1), So(z, "mousemove", q, Y, 1);
  }
  return To(z, "pointerup", C, v, 0), So(z, "mouseup", C, v, 0), { ok: !0, result: { dragged: !0, endX: C, endY: v } };
}
function D0(i, r) {
  const o = r.key === void 0 ? r.keys : [r.key];
  if (!Array.isArray(o) || o.length < 1 || o.length > jv || o.some((U) => typeof U != "string")) return { ok: !1, code: "UI_ACTION_KEY_INVALID", error: "press_key requires supported key names or single characters." };
  const c = o.map((U) => U.trim());
  if (c.some((U) => !(U.length === 1 || g0.has(U)))) return { ok: !1, code: "UI_ACTION_KEY_INVALID", error: "press_key requires supported key names or single characters." };
  const d = zo(i).activeElement, h = r.elementId === void 0 ? d && Lv(i, d) && ka(d) ? d : null : $u(i, r.elementId);
  if (!h) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No focused visible element is available for press_key." };
  r.elementId !== void 0 && h.focus();
  const g = h.ownerDocument.defaultView?.KeyboardEvent ?? KeyboardEvent, b = { ctrlKey: r.ctrlKey === !0, metaKey: r.metaKey === !0, altKey: r.altKey === !0, shiftKey: r.shiftKey === !0 };
  for (const U of c)
    h.dispatchEvent(new g("keydown", { bubbles: !0, cancelable: !0, key: U, ...b })), h.dispatchEvent(new g("keyup", { bubbles: !0, cancelable: !0, key: U, ...b }));
  return { ok: !0, result: { pressedKeys: c } };
}
function Vv(i, r, o = !1) {
  const c = Qa(r) && typeof r.action == "string" ? r.action : "";
  if (c === "describe_dom") return { ok: !0, result: N0(i, o) };
  if (c === "read_state") return { ok: !0, result: { state: {} } };
  if (c === "click_element") {
    const d = Co(i, Qa(r) ? r.elementId : null, o);
    if (!d) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No element matches this elementId." };
    const h = Iv(d);
    return h.ok === !0 ? { ok: !0, result: { clicked: !0 } } : { ok: !1, code: "UI_ACTION_ELEMENT_NOT_OPERABLE", error: h.error };
  }
  if (c === "type_text") {
    const d = Co(i, Qa(r) ? r.elementId : null, o);
    if (!d) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No element matches this elementId." };
    const h = O0(d, Qa(r) ? r.text : "", o);
    return h.ok === !0 ? { ok: !0, result: { typed: !0 } } : { ok: !1, code: "UI_ACTION_ELEMENT_NOT_OPERABLE", error: h.error };
  }
  return v0.has(c) && !o ? { ok: !1, code: "UI_ACTION_UNSUPPORTED_FOR_APP_CARD", error: `App cards do not support ${c}.` } : Qa(r) ? c === "scroll_element" ? w0(i, r) : c === "click_sequence" ? R0(i, r) : c === "drag_element" ? U0(i, r) : c === "press_key" ? D0(i, r) : { ok: !1, code: "UI_ACTION_UNKNOWN_ACTION", error: `Unknown UI action: ${c || "(missing)"}.` } : { ok: !1, code: "UI_ACTION_UNKNOWN_ACTION", error: `Unknown UI action: ${c || "(missing)"}.` };
}
var ut = "hana.plugin.ui", it = 1, z0 = "X-Hana-App-Surface-Session", x0 = "appSurfaceSession", Ju = {
  CONTEXT: "hana.input-panel.context",
  SUBMIT: "hana.input-panel.submit",
  PRESENTATION: "hana.input-panel.presentation"
}, Sv = 64 * 1024, Gv = {
  BAD_MESSAGE: "BAD_MESSAGE",
  UNSUPPORTED_VERSION: "UNSUPPORTED_VERSION"
}, De = {
  TOAST_SHOW: "toast.show",
  EXTERNAL_OPEN: "external.open",
  SESSION_FILE_OPEN: "sessionFile.open",
  RESOURCE_OPEN: "resource.open",
  RESOURCE_PICK: "resource.pick",
  RESOURCE_SAVE_FILE: "resource.saveFile",
  RESOURCE_REQUEST_ACCESS: "resource.requestAccess",
  UI_RESIZE: "ui.resize",
  CLIPBOARD_WRITE_TEXT: "clipboard.writeText",
  // 实例态（卡实例私有的草稿纸，随 Client Layout Profile 持久化，只在 card slot 生效）
  STATE_GET: "hana.state.get",
  STATE_SET: "hana.state.set",
  // 应用态（插件级 KV，pluginId 命名空间，经宿主 owner 凭证代调 server 存储）。
  // v1 插件专属的冻结兼容层能力，与上面的 v2 卡实例态 hana.state 并存，互不影响。
  STORAGE_GET: "hana.storage.get",
  STORAGE_GET_ALL: "hana.storage.getAll",
  STORAGE_SET: "hana.storage.set",
  STORAGE_DELETE: "hana.storage.delete",
  // 功能面板：插件把要显示的内容推给宿主，宿主用内置原语画（只在 card slot
  // 生效，面板是主卡的一块投影，不是第二个插件实例）
  PANEL_SET: "hana.panel.set",
  // 回传：把一次用户操作送进会话并唤醒 agent。只在 card slot 生效；
  // 手势由 SDK 注入层采集，作者不可自报。进模型走既有起回合授权。
  EMIT: "hana.emit",
  // 安静日志：写入独立活动仓，不唤醒 agent。只在 card slot 生效。
  TRACK: "hana.track",
  // 宿主驱动：看卡 / 点卡。只由宿主发 request，不是作者向宿主申请的能力。
  UI_ACTION: "hana.ui.action"
}, Xa = {
  THEME_CHANGED: "hana.theme.changed",
  SURFACE_RUNTIME_CHANGED: "hana.surface.runtime.changed",
  SURFACE_ENVELOPE_CHANGED: "hana.surface.envelope.changed",
  // 应用态变更广播：宿主消费 server 的 plugin-storage-changed 后，向同 pluginId 的
  // 所有已挂载插件卡 iframe 推送（不带值，只带 keys；订阅方自行重拉）
  STORAGE_CHANGED: "hana.storage.changed",
  // 用户在功能面板里点了什么：宿主把事件送回贡献这块面板的那张卡
  PANEL_EVENT: "hana.panel.event",
  // 到了声明的刷新节奏：宿主叫插件重推一次内容（面板不可见时不发）
  PANEL_REFRESH: "hana.panel.refresh"
}, Ka = {
  GET: "hana.app.storage.get",
  GET_ALL: "hana.app.storage.getAll",
  SET: "hana.app.storage.set",
  DELETE: "hana.app.storage.delete",
  KEYS: "hana.app.storage.keys"
}, M0 = {
  CHANGED: "hana.app.storage.changed"
}, Yv = { OPEN: "hana.cards.open" }, zr = {
  GET_ACTIVE: "hana.sessions.get-active",
  SUBSCRIBE: "hana.sessions.subscribe-active",
  UNSUBSCRIBE: "hana.sessions.unsubscribe-active",
  FOCUS: "hana.sessions.focus"
}, Tv = {
  ACTIVE_CHANGED: "hana.sessions.active-changed",
  ERROR: "hana.sessions.error"
}, Ro = {
  SET_INTERACTIVE_REGIONS: "hana.surface.set-interactive-regions"
};
function j0(i) {
  if (!En(i) || Object.keys(i).length !== 1 || !Array.isArray(i.regions))
    return { ok: !1, error: "hana.surface.setInteractiveRegions requires exactly one regions array." };
  if (i.regions.length > 64)
    return { ok: !1, error: "hana.surface.setInteractiveRegions accepts at most 64 regions." };
  const r = [];
  for (const o of i.regions) {
    if (!En(o) || Object.keys(o).length !== 4)
      return { ok: !1, error: "Each interactive region must contain exactly x, y, width, and height." };
    const { x: c, y: d, width: h, height: g } = o;
    if (typeof c != "number" || typeof d != "number" || typeof h != "number" || typeof g != "number" || !Number.isFinite(c) || !Number.isFinite(d) || !Number.isFinite(h) || !Number.isFinite(g))
      return { ok: !1, error: "Interactive region coordinates must be finite numbers." };
    if (h <= 0 || g <= 0 || Math.abs(c) > 1e6 || Math.abs(d) > 1e6 || Math.abs(h) > 1e6 || Math.abs(g) > 1e6)
      return { ok: !1, error: "Interactive region bounds are invalid." };
    r.push({ x: c, y: d, width: h, height: g });
  }
  return { ok: !0, value: { regions: r } };
}
var Za = {
  /** App → host: submit a full Chrome description. */
  SET: "hana.app.chrome.set",
  /** App → host: the card's registered main scroll element crossed the top boundary. */
  SCROLL: "hana.app.chrome.scroll",
  /** Host → App: a user-driven chrome action to answer (callback / tab-select / tab-close). */
  ACTION: "hana.app.chrome.action",
  /** Host → App: this iframe document's current view token. The App echoes it; it never chooses it. */
  BINDING: "hana.app.chrome.binding",
  /** Host → App: prove the document behind this iframe is still the live one. */
  CHALLENGE: "hana.app.chrome.challenge",
  /** App → host: the challenge answer: the app's own per-document nonce. */
  ACK: "hana.app.chrome.ack"
}, kn = {
  /** No trusted, ready App card view owns this surface (settings / function panel / v1 / preview / not ready / no binding yet). */
  UNAVAILABLE: "APP_CHROME_UNAVAILABLE",
  /** The write carries no token, or one from a view the host has already replaced. */
  VIEW_STALE: "APP_CHROME_VIEW_STALE",
  BAD_PAYLOAD: "APP_CHROME_BAD_PAYLOAD",
  /** The App has no onAction handler for this request. */
  ACTION_UNHANDLED: "APP_CHROME_ACTION_UNHANDLED",
  /** The App's onAction handler threw or answered with something unusable. */
  ACTION_FAILED: "APP_CHROME_ACTION_FAILED"
}, H0 = 128;
function ni(i) {
  if (typeof i != "string" || i.length === 0 || i.length > H0)
    return !1;
  for (let r = 0; r < i.length; r += 1) {
    const o = i.charCodeAt(r);
    if (o <= 31 || o === 127)
      return !1;
  }
  return !0;
}
function L0(i) {
  return !En(i) || !ni(i.viewToken) ? { ok: !1, error: "A chrome binding requires a host-minted view token." } : i.resync !== void 0 && typeof i.resync != "boolean" ? { ok: !1, error: "A chrome binding resync flag must be a boolean when present." } : { ok: !0, value: { viewToken: i.viewToken, ...i.resync === void 0 ? {} : { resync: i.resync } } };
}
function q0(i) {
  return !En(i) || !ni(i.challengeId) ? { ok: !1, error: "A chrome challenge requires a host-minted challenge id." } : { ok: !0, value: { challengeId: i.challengeId } };
}
function B0(i) {
  return En(i) ? typeof i.requestId != "string" || i.requestId === "" ? { ok: !1, error: "App chrome action identity requires a non-empty requestId." } : !Number.isSafeInteger(i.revision) || i.revision <= 0 ? { ok: !1, error: "App chrome action identity requires a positive revision." } : !Number.isSafeInteger(i.generation) || i.generation <= 0 ? { ok: !1, error: "App chrome action identity requires a positive generation." } : ni(i.viewToken) ? {
    ok: !0,
    value: {
      requestId: i.requestId,
      revision: i.revision,
      generation: i.generation,
      viewToken: i.viewToken
    }
  } : { ok: !1, error: "App chrome action identity requires the view token." } : { ok: !1, error: "App chrome action identity must be an object." };
}
function I0(i) {
  if (!En(i))
    return { ok: !1, error: "App chrome action request must be an object." };
  const r = i.kind;
  if (r !== "action" && r !== "tab-select" && r !== "tab-close")
    return { ok: !1, error: 'App chrome action request kind must be "action", "tab-select" or "tab-close".' };
  const o = B0(i);
  if (o.ok === !1)
    return o;
  const c = o.value;
  return r === "action" ? typeof i.actionId != "string" || i.actionId === "" ? { ok: !1, error: "App chrome action request requires a non-empty actionId." } : { ok: !0, value: { kind: r, ...c, actionId: i.actionId } } : typeof i.tabId != "string" || i.tabId === "" ? { ok: !1, error: `App chrome ${r} request requires a non-empty tabId.` } : { ok: !0, value: { kind: r, ...c, tabId: i.tabId } };
}
var Ku = {
  /** App → host: register the current document/namespace, returning a bound handle. */
  ENABLE: "hana.app.view-state.enable",
  /** App → host: read the snapshot the handle's namespace currently holds. */
  GET: "hana.app.view-state.get",
  /** App → host: compare-and-swap the handle's namespace snapshot. */
  SET: "hana.app.view-state.set",
  /** App → host: release this handle's own registration. */
  RELEASE: "hana.app.view-state.release"
}, V0 = 256;
function Pu(i) {
  if (typeof i != "string" || i.length === 0 || i.length > V0 || i.trim().length === 0)
    return !1;
  for (let r = 0; r < i.length; r += 1) {
    const o = i.charCodeAt(r);
    if (o <= 31 || o === 127)
      return !1;
  }
  return !0;
}
function Mo(i, r) {
  const o = Reflect.ownKeys(i);
  if (o.length !== r.length)
    return !1;
  for (const c of o)
    if (typeof c != "string" || !r.includes(c))
      return !1;
  return !0;
}
function Ao(i) {
  return !En(i) || !Mo(i, ["viewKind", "revision", "state"]) ? { ok: !1, error: "App view-state snapshot must carry exactly viewKind, revision and state." } : i.viewKind !== "compact" && i.viewKind !== "detached" ? { ok: !1, error: 'App view-state snapshot kind must be "compact" or "detached".' } : !Number.isSafeInteger(i.revision) || i.revision < 0 ? { ok: !1, error: "App view-state snapshot revision must be a non-negative safe integer." } : i.state === void 0 ? { ok: !1, error: "App view-state snapshot requires a state object or an explicit null." } : i.revision === 0 && i.state !== null ? { ok: !1, error: "App view-state revision 0 only carries a null state." } : { ok: !0, value: { viewKind: i.viewKind, revision: i.revision, state: i.state } };
}
function _o(i) {
  return !En(i) || !Mo(i, ["viewToken", "bindingId", "registrationId", "snapshot"]) ? { ok: !1, error: "App view-state reply must echo exactly a view token, namespace binding id, registration id and snapshot." } : ni(i.viewToken) ? Pu(i.bindingId) ? Pu(i.registrationId) ? {
    ok: !0,
    value: { viewToken: i.viewToken, bindingId: i.bindingId, registrationId: i.registrationId, snapshot: i.snapshot }
  } : { ok: !1, error: "App view-state reply requires an opaque registration id." } : { ok: !1, error: "App view-state reply requires an opaque namespace binding id." } : { ok: !1, error: "App view-state reply requires the host-minted view token." };
}
function Zu(i, r) {
  return i.viewToken !== r.viewToken || i.bindingId !== r.bindingId ? !1 : r.registrationId === void 0 ? !0 : i.registrationId === r.registrationId;
}
function Av(i) {
  return !En(i) || !Mo(i, ["viewToken", "bindingId", "registrationId", "released"]) ? { ok: !1, error: "App view-state release reply must echo exactly a view token, namespace binding id, registration id and a boolean released flag." } : ni(i.viewToken) ? Pu(i.bindingId) ? Pu(i.registrationId) ? typeof i.released != "boolean" ? { ok: !1, error: "App view-state release reply requires a boolean released flag." } : { ok: !0, value: { viewToken: i.viewToken, bindingId: i.bindingId, registrationId: i.registrationId, released: i.released } } : { ok: !1, error: "App view-state release reply requires an opaque registration id." } : { ok: !1, error: "App view-state release reply requires an opaque namespace binding id." } : { ok: !1, error: "App view-state release reply requires the host-minted view token." };
}
var G0 = /^\/api\/apps\/([^/]+)\/ui(?:\/|$)/, Y0 = /^\/api\/apps\/([^/]+)\/routes\/_runtime\/([^/]+)\/_surface\/([^/]+)\//;
function xr(i) {
  let r;
  try {
    r = decodeURIComponent(i);
  } catch {
    return null;
  }
  if (r.length === 0 || r.includes("/") || r.includes("\\") || r.includes("\0"))
    return null;
  for (let o = 0; o < r.length; o += 1) {
    const c = r.charCodeAt(o);
    if (c <= 31 || c === 127)
      return null;
  }
  return r;
}
function jo(i) {
  if (typeof i != "string" || !i.startsWith("/api/apps/"))
    return null;
  const r = Y0.exec(i);
  if (r) {
    const c = xr(r[1]), d = xr(r[2]), h = xr(r[3]);
    return c === null || d === null || h === null ? null : { appId: c, kind: "runtime" };
  }
  const o = G0.exec(i);
  if (o) {
    const c = xr(o[1]);
    return c === null ? null : { appId: c, kind: "ui" };
  }
  return null;
}
var X0 = 256;
function Xv(i) {
  if (i !== void 0)
    return typeof i != "string" || i.length === 0 || i.length > X0 || i.includes("\0") || i.trim().length === 0 ? null : i;
}
var Q0 = {
  CONTEXT: "hana.surface.context"
}, K0 = /* @__PURE__ */ new Set([
  "event",
  "request",
  "response",
  "error"
]);
function En(i) {
  return typeof i == "object" && i !== null;
}
function Nl(i) {
  return {
    ok: !1,
    error: {
      code: Gv.BAD_MESSAGE,
      message: i
    }
  };
}
function ku(i) {
  if (!En(i))
    return Nl("Plugin UI messages must be objects.");
  if (i.protocol !== ut)
    return Nl("Plugin UI message protocol is missing or invalid.");
  if (i.version !== it)
    return {
      ok: !1,
      error: {
        code: Gv.UNSUPPORTED_VERSION,
        message: `Unsupported Plugin UI protocol version: ${String(i.version)}.`
      }
    };
  if (typeof i.kind != "string" || !K0.has(i.kind))
    return Nl("Plugin UI message kind is missing or invalid.");
  if (typeof i.type != "string" || i.type.trim() === "")
    return Nl("Plugin UI message type must be a non-empty string.");
  const r = i.kind;
  if (r !== "event" && (typeof i.id != "string" || i.id.trim() === ""))
    return Nl(`Plugin UI ${r} messages must include a non-empty id.`);
  if (r === "error") {
    if (!En(i.error))
      return Nl("Plugin UI error messages must include an error object.");
    if (typeof i.error.code != "string" || i.error.code.trim() === "")
      return Nl("Plugin UI error code must be a non-empty string.");
    if (typeof i.error.message != "string" || i.error.message.trim() === "")
      return Nl("Plugin UI error message must be a non-empty string.");
  }
  return {
    ok: !0,
    value: i
  };
}
var Z0 = [
  "manifestVersion",
  "id",
  "name",
  "version",
  "description",
  "minAppVersion",
  "trust",
  "hidden",
  "activationEvents",
  "capabilities",
  "sensitiveCapabilities",
  "permissions",
  "network",
  "formFactors",
  "ui",
  "contributes",
  "dev"
], J0 = [
  "cards",
  "agentTypes",
  "configuration",
  "settingsTab",
  "page",
  "widget"
], k0 = [
  "settings",
  "ui",
  "cards",
  "agentTypes",
  "messageRenderers",
  "providers",
  "nativeProviders",
  "previewers",
  "cliFlags",
  "homeActions"
], F0 = ["restricted", "full-access"];
new Set(Z0);
new Set(J0);
new Set(k0);
new Set(F0);
var $0 = Object.values(De);
new Set($0);
var Fu = class extends Error {
  reason;
  constructor(i, r) {
    super(r), this.name = "AppCurrentViewBindingError", this.reason = i;
  }
};
function P0() {
  return `chrome-doc:${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`;
}
function W0(i) {
  return JSON.stringify([i.appId, i.cardInstanceId ?? null, i.instanceKey ?? null]);
}
function eE(i) {
  const r = P0();
  let o = null, c = !1, d, h = !0;
  const g = /* @__PURE__ */ new Set(), b = /* @__PURE__ */ new Set();
  let U = 0;
  const w = () => {
    U += 1;
  }, C = (G) => new Fu("unavailable", G), v = () => new Fu(
    "identity-changed",
    "The current App card identity changed while this view write waited."
  ), z = () => new Fu(
    "token-stale",
    "The held view token is no longer the current document."
  ), D = (G) => {
    g.delete(G), i.targetWindow.clearTimeout(G.timer), G.signal && G.onAbort && G.signal.removeEventListener("abort", G.onAbort);
  }, q = (G, pe) => {
    D(G), G.reject(pe);
  }, Y = (G, pe) => {
    const se = o !== G, ee = h;
    o = G, h = !0, (se || !ee) && w();
    for (const Ve of [...g]) {
      if (D(Ve), Ve.identity !== void 0 && Ve.identity !== d) {
        Ve.reject(v());
        continue;
      }
      Ve.resolve(G);
    }
    if (b.size === 0) return;
    const de = { changed: se, resync: pe }, We = U;
    for (const Ve of [...b]) {
      if (c || We !== U) return;
      b.has(Ve) && Ve.listener(de);
    }
  };
  return {
    handleHostMessage: (G) => {
      const pe = G.type === Za.CHALLENGE, se = G.type === Za.BINDING;
      if (!pe && !se) return !1;
      if (c) return !0;
      if (pe && G.kind === "event") {
        const ee = q0(G.payload);
        return ee.ok === !0 && (i.post({
          protocol: ut,
          version: it,
          kind: "event",
          type: Za.ACK,
          payload: { challengeId: ee.value.challengeId, documentNonce: r }
        }), c || i.reannounceReady?.()), !0;
      }
      if (se && G.kind === "event") {
        const ee = L0(G.payload);
        return ee.ok === !0 && Y(ee.value.viewToken, ee.value.resync === !0), !0;
      }
      return !0;
    },
    applySurfaceContext: (G) => {
      if (c) return;
      if (G === null) {
        if (!h) return;
        h = !1, w();
        return;
      }
      const pe = W0(G);
      if (d !== pe) {
        if (d !== void 0) {
          for (const se of [...g]) q(se, v());
          o = null;
        }
        d = pe, w();
      }
    },
    currentToken() {
      return !c && h ? o : null;
    },
    waitForToken: (G, pe) => c ? Promise.reject(C("The current App card view binding was released.")) : pe?.aborted ? Promise.reject(C("The current App card view wait was aborted.")) : o && h ? Promise.resolve(o) : new Promise((se, ee) => {
      const de = {
        resolve: se,
        reject: ee,
        identity: d,
        timer: i.targetWindow.setTimeout(() => {
          D(de), ee(C("The host has not bound this App card view; the current view is unavailable here."));
        }, G)
      };
      pe && (de.signal = pe, de.onAbort = () => q(de, C("The current App card view wait was aborted.")), pe.addEventListener("abort", de.onAbort)), g.add(de);
    }),
    assertCurrentToken: (G) => {
      if (c) throw C("The current App card view binding was released.");
      if (!h || !o)
        throw C("The current App card view is not writable here right now.");
      if (o !== G) throw z();
    },
    onBinding(G) {
      if (c) return () => {
      };
      const pe = { listener: G };
      return b.add(pe), () => {
        b.delete(pe);
      };
    },
    dispose() {
      if (!c) {
        c = !0, o = null, h = !1;
        for (const G of [...g])
          q(G, C("The current App card view binding was released."));
        g.clear(), b.clear();
      }
    }
  };
}
function tE(i, r) {
  let o = null, c = 0;
  const d = (g) => {
    const b = i();
    b && r({
      protocol: ut,
      version: it,
      kind: "event",
      type: Za.SCROLL,
      payload: { scrolled: g, viewToken: b }
    });
  }, h = (g) => {
    const b = o;
    b && (o = null, b.detach(), g && b.scrolled && d(!1));
  };
  return {
    register(g) {
      if (!g || typeof g.scrollTop != "number" || typeof g.addEventListener != "function")
        throw new TypeError("hana.chrome.registerScrollSource requires an element.");
      h(!0);
      const b = ++c, U = g.ownerDocument?.defaultView, w = { generation: b, scrolled: g.scrollTop > 0, detach: () => {
      } }, C = () => {
        if (!o || o.generation !== b) return;
        const D = g.scrollTop > 0;
        D !== o.scrolled && (o.scrolled = D, d(D));
      };
      g.addEventListener("scroll", C, { passive: !0 });
      const v = U?.ResizeObserver, z = v ? new v(C) : null;
      return z?.observe(g), w.detach = () => {
        g.removeEventListener("scroll", C), z?.disconnect();
      }, o = w, w.scrolled && d(!0), () => {
        if (!o || o.generation !== b) return;
        const D = o;
        o = null, D.detach(), D.scrolled && d(!1);
      };
    },
    /** The host bound this document (or re-bound it): report the real state. */
    flush() {
      o?.scrolled && d(!0);
    },
    dispose: () => h(!1)
  };
}
function nE(i) {
  const r = { requestId: i.requestId, revision: i.revision };
  return i.kind === "action" ? { ...r, kind: "action", actionId: i.actionId } : i.kind === "tab-select" ? { ...r, kind: "tab-select", tabId: i.tabId } : { ...r, kind: "tab-close", tabId: i.tabId };
}
var lE = 1e4;
function aE(i) {
  const r = i.requestTimeoutMs ?? lE, o = i.currentView;
  let c = !1, d = null;
  const h = new AbortController(), g = tE(() => c ? null : o.currentToken(), i.post), b = o.onBinding((X) => {
    c || (X.changed || X.resync) && g.flush();
  }), U = () => Object.assign(
    new Error("The App card business identity changed; this chrome write is stale."),
    { code: kn.VIEW_STALE }
  ), w = () => Object.assign(
    new Error("The host has not bound this App card view; chrome is unavailable here."),
    { code: kn.UNAVAILABLE }
  ), C = () => Object.assign(
    new Error("The App chrome view was released."),
    { code: kn.UNAVAILABLE }
  ), v = (X) => X instanceof Fu ? X.reason === "unavailable" ? w() : U() : X, z = (X, ue) => {
    i.post({
      protocol: ut,
      version: it,
      id: X.id,
      type: X.type,
      ...ue
    });
  }, D = (X) => {
    if (X.type !== Za.ACTION) return !1;
    if (c) return !0;
    if (X.kind !== "request") return !1;
    const ue = I0(X.payload);
    if (ue.ok === !1)
      return z(X, { kind: "error", error: { code: kn.BAD_PAYLOAD, message: ue.error } }), !0;
    const ye = ue.value, Q = {
      requestId: ye.requestId,
      revision: ye.revision,
      generation: ye.generation,
      viewToken: ye.viewToken
    }, G = d;
    if (!G)
      return z(X, {
        kind: "error",
        payload: Q,
        error: { code: kn.ACTION_UNHANDLED, message: "This App has no chrome action handler." }
      }), !0;
    if (ye.viewToken !== o.currentToken())
      return z(X, {
        kind: "error",
        payload: Q,
        error: { code: kn.VIEW_STALE, message: "This chrome action belongs to a replaced view." }
      }), !0;
    const pe = () => !c && d === G && ye.viewToken === o.currentToken();
    return Promise.resolve().then(async () => {
      if (!pe()) {
        z(X, {
          kind: "error",
          payload: Q,
          error: { code: kn.VIEW_STALE, message: "This chrome action belongs to a replaced view." }
        });
        return;
      }
      let se;
      try {
        se = await G.fn(nE(ye));
      } catch (ee) {
        if (!pe()) return;
        z(X, {
          kind: "error",
          payload: Q,
          error: {
            code: kn.ACTION_FAILED,
            message: ee instanceof Error ? ee.message : "The App chrome action handler failed."
          }
        });
        return;
      }
      pe() && z(X, {
        kind: "response",
        payload: {
          ...Q,
          status: se && se.status === "rejected" ? "rejected" : "handled",
          ...se && typeof se.message == "string" && se.message ? { message: se.message } : {}
        }
      });
    }), !0;
  }, q = () => g.dispose();
  i.targetWindow.addEventListener("pagehide", q);
  const Y = (X) => {
    if (c)
      throw Object.assign(new Error(`The App chrome view was released; ${X} is unavailable.`), { code: kn.UNAVAILABLE });
  };
  return {
    api: {
      set(X, ue) {
        const ye = ue?.timeoutMs ?? r;
        return o.waitForToken(ye, h.signal).then(
          (Q) => {
            Y("hana.chrome.set");
            try {
              o.assertCurrentToken(Q);
            } catch (G) {
              throw v(G);
            }
            return i.request(Za.SET, { description: X, viewToken: Q }, { timeoutMs: ye });
          },
          (Q) => {
            throw c ? C() : v(Q);
          }
        );
      },
      onAction(X) {
        if (Y("hana.chrome.onAction"), typeof X != "function") throw new TypeError("hana.chrome.onAction requires a handler.");
        const ue = { fn: X };
        return d = ue, () => {
          d === ue && (d = null);
        };
      },
      registerScrollSource(X) {
        return Y("hana.chrome.registerScrollSource"), g.register(X);
      }
    },
    handleHostMessage: D,
    dispose() {
      c || (c = !0, h.abort(), i.targetWindow.removeEventListener("pagehide", q), b(), d = null, g.dispose());
    }
  };
}
var uE = 16, iE = 4096, rE = 24 * 1024, dt = class extends Error {
  code;
  constructor(i, r) {
    super(r), this.name = "AppViewStateError", this.code = i;
  }
}, cE = new TextEncoder();
function sE(i) {
  return cE.encode(i).length;
}
function oE(i) {
  if (typeof i != "object" || i === null || Array.isArray(i)) return !1;
  const r = Object.getPrototypeOf(i);
  return r === Object.prototype || r === null;
}
function fE(i) {
  const r = Number(i);
  return !Number.isInteger(r) || r < 0 || String(r) !== i ? null : r;
}
function Qv(i) {
  return i === "input" ? "VIEW_STATE_INVALID_INPUT" : "VIEW_STATE_INVALID_STORAGE";
}
function dE(i, r) {
  const o = Qv(r), c = /* @__PURE__ */ new Set();
  let d = 0;
  const h = (g, b) => {
    if (d += 1, d > iE)
      throw new dt(o, "App view state contains too many values.");
    if (b > uE)
      throw new dt(o, "App view state is nested too deeply.");
    if (g === null) return null;
    const U = typeof g;
    if (U === "string" || U === "boolean") return g;
    if (U === "number") {
      if (!Number.isFinite(g))
        throw new dt(o, "App view state numbers must be finite.");
      return g;
    }
    if (U !== "object")
      throw new dt(o, "App view state must contain only JSON values.");
    const w = g;
    if (c.has(w))
      throw new dt(o, "App view state must not contain cycles.");
    const C = Object.getPrototypeOf(w);
    if (Array.isArray(w)) {
      if (C !== Array.prototype)
        throw new dt(o, "App view state must contain only plain arrays.");
      c.add(w);
      const z = w.length;
      for (const q of Reflect.ownKeys(w)) {
        if (typeof q != "string")
          throw new dt(o, "App view state must not contain symbol keys.");
        if (q === "length") {
          const ue = Object.getOwnPropertyDescriptor(w, "length");
          if (ue.enumerable || ue.get || ue.set)
            throw new dt(o, "App view state arrays must expose a plain length.");
          continue;
        }
        const Y = fE(q);
        if (Y === null || Y >= z)
          throw new dt(o, "App view state arrays must not carry extra keys.");
        const X = Object.getOwnPropertyDescriptor(w, q);
        if (!X.enumerable || X.get || X.set)
          throw new dt(o, "App view state arrays must index plain values.");
      }
      const D = [];
      for (let q = 0; q < z; q++) {
        const Y = Object.getOwnPropertyDescriptor(w, String(q));
        if (!Y)
          throw new dt(o, "App view state must not contain sparse arrays.");
        D.push(h(Y.value, b + 1));
      }
      return c.delete(w), D;
    }
    if (C !== Object.prototype && C !== null)
      throw new dt(o, "App view state must contain only plain objects.");
    c.add(w);
    const v = /* @__PURE__ */ Object.create(null);
    for (const z of Reflect.ownKeys(w)) {
      if (typeof z != "string")
        throw new dt(o, "App view state must not contain symbol keys.");
      const D = Object.getOwnPropertyDescriptor(w, z);
      if (!D.enumerable)
        throw new dt(o, "App view state must not contain non-enumerable fields.");
      if (D.get || D.set)
        throw new dt(o, "App view state must not contain accessors.");
      v[z] = h(D.value, b + 1);
    }
    return c.delete(w), v;
  };
  return h(i, 0);
}
function hE(i, r) {
  if (i === null) return null;
  if (!oE(i))
    throw new dt(
      Qv(r),
      "App view state must be a JSON object or null."
    );
  return dE(i, r);
}
function mE(i, r) {
  if (i === null) return null;
  const o = JSON.stringify(i);
  if (sE(o) > rE)
    throw new dt(
      "VIEW_STATE_TOO_LARGE",
      "App view state exceeds the size budget."
    );
  return JSON.parse(o);
}
function Uo(i) {
  return mE(hE(i, "input"));
}
var he = {
  UNAVAILABLE: "VIEW_STATE_UNAVAILABLE",
  VIEW_STALE: "VIEW_STATE_VIEW_STALE",
  RELEASED: "VIEW_STATE_RELEASED",
  INVALID_INPUT: "VIEW_STATE_INVALID_INPUT",
  BAD_RESPONSE: "VIEW_STATE_BAD_RESPONSE"
}, vE = class extends Error {
  code;
  constructor(i, r) {
    super(r), this.name = "AppViewStateRequestError", this.code = i;
  }
}, gE = 1e4;
function me(i, r) {
  return new vE(i, r);
}
function pE(i) {
  return {
    viewKind: i.viewKind,
    revision: i.revision,
    state: Uo(i.state)
  };
}
function yE(i) {
  const r = i.requestTimeoutMs ?? gE;
  let o = !1, c = 0, d = null;
  const h = /* @__PURE__ */ new Map();
  let g = null, b = null, U = !1;
  const w = (B) => B instanceof Fu ? B.reason === "unavailable" ? me(he.UNAVAILABLE, "The App card view is not writable here right now.") : me(he.VIEW_STALE, "The App card view this operation was bound to is no longer current.") : B, C = (B, L) => {
    !B || B.terminated !== null || (B.terminated = L, B.lifetime.abort());
  }, v = (B) => {
    C(d, B), d = null;
    for (const L of h.values()) L.abort.abort();
    h.clear();
  }, z = (B) => {
    if (o || B === null) return;
    if (B.slot !== "card") {
      v("namespace-changed"), b = null, U = !0, g = null;
      return;
    }
    const L = JSON.stringify([B.appId, B.cardInstanceId, B.instanceKey ?? null]), Z = B.viewState?.bindingId ?? null;
    (U && b !== L || Z !== null && g !== null && Z !== g) && v("namespace-changed"), b = L, U = !0, Z !== null && (g = Z);
  }, D = (B) => {
    if (!o && B.changed) {
      C(d, "document-changed"), d = null;
      for (const L of h.values())
        L.tokenCaptured && L.abort.abort();
    }
  }, q = i.subscribeContext(z), Y = i.currentView.onBinding(D), X = (B) => i.currentView.currentToken() === B, ue = (B) => {
    try {
      i.currentView.assertCurrentToken(B);
    } catch (L) {
      throw w(L);
    }
  }, ye = (B) => {
    const L = i.getContext();
    if (!L || L.slot !== "card")
      throw me(he.UNAVAILABLE, "The App view-state namespace is not available on this surface.");
    const Z = L.viewState;
    if (!Z)
      throw me(he.UNAVAILABLE, "The App view-state namespace is not available here right now.");
    if (Z.bindingId !== B.bindingId || Z.viewKind !== B.viewKind)
      throw me(he.VIEW_STALE, "This view-state handle belongs to a namespace that is no longer current.");
    if (Z.available !== !0)
      throw me(he.UNAVAILABLE, "The App view-state namespace is temporarily unavailable.");
  }, Q = (B) => B === "document-changed" || B === "namespace-changed" ? me(he.VIEW_STALE, "This view-state handle's view changed before the operation could be adopted.") : me(he.RELEASED, "This view-state handle has been released."), G = (B) => {
    if (o)
      throw me(he.RELEASED, "The App view-state controller was released.");
    if (B.terminated !== null) throw Q(B.terminated);
    if (B.lifetime.signal.aborted)
      throw me(he.RELEASED, "This view-state handle has been released.");
    if (d !== B)
      throw me(he.VIEW_STALE, "This view-state handle is no longer the current registration.");
    return ue(B.viewToken), ye(B), B.viewToken;
  }, pe = (B, L) => {
    if (o)
      throw me(he.RELEASED, "The App view-state controller was released.");
    if (B.terminated !== null) throw Q(B.terminated);
    if (B.lifetime.signal.aborted)
      throw me(he.RELEASED, "This view-state handle has been released.");
    if (!X(L))
      throw me(he.VIEW_STALE, "The document changed before this view-state reply arrived.");
    const Z = i.getContext(), K = Z?.viewState;
    if (!Z || Z.slot !== "card" || !K || K.bindingId !== B.bindingId || K.viewKind !== B.viewKind)
      throw me(he.VIEW_STALE, "The namespace changed before this view-state reply arrived.");
    if (K.available !== !0)
      throw me(he.UNAVAILABLE, "The App view-state namespace paused before this reply arrived.");
  }, se = async (B, L, Z, K) => {
    try {
      return await i.request(B, L, { timeoutMs: Z });
    } catch (ie) {
      if (K !== null) {
        if (K.terminated !== null) throw Q(K.terminated);
        if (K.lifetime.signal.aborted)
          throw me(he.RELEASED, "This view-state handle has been released.");
      }
      throw o ? me(he.RELEASED, "The App view-state controller was released.") : ie;
    }
  }, ee = (B, L) => {
    if (L.viewKind !== B)
      throw me(he.BAD_RESPONSE, "The view-state reply carried a different view kind than the operation targeted.");
    let Z;
    try {
      Z = Uo(L.state);
    } catch (K) {
      throw K instanceof dt ? me(he.BAD_RESPONSE, "The view-state reply carried a state outside the shared JSON budget.") : K;
    }
    return { viewKind: B, revision: L.revision, state: Z };
  }, de = async (B, L) => {
    const Z = L?.timeoutMs ?? r, K = G(B), ie = await se(Ku.GET, {
      viewToken: K,
      bindingId: B.bindingId,
      registrationId: B.registrationId
    }, Z, B);
    pe(B, K);
    const ce = _o(ie);
    if (ce.ok === !1)
      throw me(he.BAD_RESPONSE, ce.error);
    if (!Zu(ce.value, {
      viewToken: K,
      bindingId: B.bindingId,
      registrationId: B.registrationId
    }))
      throw me(he.VIEW_STALE, "This view-state reply answered a different view than the one this handle targets.");
    const Re = Ao(ce.value.snapshot);
    if (Re.ok === !1)
      throw me(he.BAD_RESPONSE, Re.error);
    return ee(B.viewKind, Re.value);
  }, We = async (B, L, Z) => {
    const K = Z?.timeoutMs ?? r, ie = EE(L), ce = Uo(L.state), Re = G(B), Me = await se(Ku.SET, {
      viewToken: Re,
      bindingId: B.bindingId,
      registrationId: B.registrationId,
      expectedRevision: ie,
      state: ce
    }, K, B);
    pe(B, Re);
    const ge = _o(Me);
    if (ge.ok === !1)
      throw me(he.BAD_RESPONSE, ge.error);
    if (!Zu(ge.value, {
      viewToken: Re,
      bindingId: B.bindingId,
      registrationId: B.registrationId
    }))
      throw me(he.VIEW_STALE, "This view-state reply answered a different view than the one this handle targets.");
    const E = Ao(ge.value.snapshot);
    if (E.ok === !1)
      throw me(he.BAD_RESPONSE, E.error);
    return ee(B.viewKind, E.value);
  }, Ve = async (B, L, Z) => {
    if (!X(B)) return;
    const K = i.getContext();
    if (!(!K || K.slot !== "card" || K.viewState?.bindingId !== L))
      try {
        const ie = await i.request(Ku.RELEASE, { viewToken: B, bindingId: L, registrationId: Z }, { timeoutMs: r }), ce = Av(ie);
        (ce.ok === !1 || !Zu(ce.value, { viewToken: B, bindingId: L, registrationId: Z })) && console.error("[hana] App view-state cleanup reply did not confirm the released registration.");
      } catch (ie) {
        console.error("[hana] failed to release a superseded App view-state registration:", ie instanceof Error ? ie.message : ie);
      }
  }, et = (B, L) => (B.releasePromise || (B.releasePromise = (async () => {
    const Z = L?.timeoutMs ?? r;
    C(B, "released"), d === B && (d = null);
    const K = i.getContext(), ie = K?.viewState;
    if (!(X(B.viewToken) && K?.slot === "card" && !!ie && ie.bindingId === B.bindingId)) return { released: !1 };
    const Re = await i.request(Ku.RELEASE, {
      viewToken: B.viewToken,
      bindingId: B.bindingId,
      registrationId: B.registrationId
    }, { timeoutMs: Z }), Me = Av(Re);
    if (Me.ok === !1)
      throw me(he.BAD_RESPONSE, Me.error);
    if (!Zu(Me.value, {
      viewToken: B.viewToken,
      bindingId: B.bindingId,
      registrationId: B.registrationId
    }))
      throw me(he.VIEW_STALE, "This view-state release reply answered a different view than the one this handle targets.");
    const ge = i.getContext();
    if (!X(B.viewToken) || ge?.slot !== "card" || ge.viewState?.bindingId !== B.bindingId || ge.viewState?.viewKind !== B.viewKind)
      throw me(he.VIEW_STALE, "The namespace changed before this view-state release was confirmed.");
    return { released: Me.value.released };
  })()), B.releasePromise), ke = (B, L, Z, K, ie) => {
    const ce = new AbortController(), Re = {
      viewToken: B,
      bindingId: L,
      viewKind: Z,
      registrationId: K,
      lifetime: ce,
      initial: ie,
      releasePromise: null,
      terminated: null
    };
    return Re.handle = {
      get initial() {
        return pE(Re.initial);
      },
      signal: ce.signal,
      get: (Me) => de(Re, Me),
      set: (Me, ge) => We(Re, Me, ge),
      release: (Me) => et(Re, Me)
    }, Re;
  };
  return {
    api: { enable: async (B) => {
      const L = B?.timeoutMs ?? r;
      if (o) throw me(he.RELEASED, "The App view-state controller was released.");
      const Z = i.getContext();
      if (Z && Z.slot !== "card")
        throw me(he.UNAVAILABLE, "View-state recovery is only available on an App card surface.");
      const K = Z?.viewState?.bindingId ?? null, ie = ++c;
      v("superseded");
      const ce = new AbortController(), Re = { abort: ce, tokenCaptured: !1 };
      h.set(ie, Re);
      let Me = null;
      try {
        let ge;
        try {
          ge = await i.currentView.waitForToken(L, ce.signal);
        } catch (oe) {
          throw o ? me(he.RELEASED, "The App view-state controller was released.") : ce.signal.aborted ? me(he.VIEW_STALE, "A newer view-state enable replaced this one before it was bound.") : w(oe);
        }
        if (Re.tokenCaptured = !0, o) throw me(he.RELEASED, "The App view-state controller was released.");
        if (ie !== c || ce.signal.aborted)
          throw me(he.VIEW_STALE, "A newer view-state enable replaced this one before it was bound.");
        ue(ge);
        const E = i.getContext(), I = E?.viewState;
        if (!E || E.slot !== "card" || !I || I.available !== !0)
          throw me(he.UNAVAILABLE, "The App view-state namespace is not available here right now.");
        if (K !== null && K !== I.bindingId)
          throw me(he.VIEW_STALE, "The App view-state namespace changed before this enable was sent.");
        ue(ge);
        const te = await se(Ku.ENABLE, {
          viewToken: ge,
          bindingId: I.bindingId
        }, L, null), $ = _o(te);
        if ($.ok === !1)
          throw me(he.BAD_RESPONSE, $.error);
        if (!Zu($.value, { viewToken: ge, bindingId: I.bindingId }))
          throw me(he.VIEW_STALE, "This view-state enable reply answered a different view than the one that was enabled.");
        if (Me = { token: ge, bindingId: I.bindingId, registrationId: $.value.registrationId }, o) throw me(he.RELEASED, "The App view-state controller was released.");
        if (ie !== c || ce.signal.aborted || !h.has(ie))
          throw me(he.VIEW_STALE, "This view-state enable was voided before its reply arrived.");
        if (!X(ge))
          throw me(he.VIEW_STALE, "The document changed before this view-state enable reply arrived.");
        const Ee = i.getContext();
        if (!Ee || Ee.slot !== "card" || Ee.viewState?.bindingId !== I.bindingId || Ee.viewState?.viewKind !== I.viewKind)
          throw me(he.VIEW_STALE, "The namespace changed before this view-state enable reply arrived.");
        if (Ee.viewState?.available !== !0)
          throw me(he.UNAVAILABLE, "The App view-state namespace paused before this enable was confirmed.");
        const be = Ao($.value.snapshot);
        if (be.ok === !1)
          throw me(he.BAD_RESPONSE, be.error);
        const Oe = ee(I.viewKind, be.value), P = ke(ge, I.bindingId, I.viewKind, $.value.registrationId, Oe);
        return d = P, Me = null, P.handle;
      } catch (ge) {
        throw Me !== null && await Ve(Me.token, Me.bindingId, Me.registrationId), ge;
      } finally {
        h.delete(ie);
      }
    } },
    dispose() {
      if (!o) {
        o = !0, c += 1, C(d, "disposed"), d = null;
        for (const B of h.values()) B.abort.abort();
        h.clear(), q(), Y();
      }
    }
  };
}
function EE(i) {
  if (typeof i != "object" || i === null)
    throw me(he.INVALID_INPUT, "View-state set requires an object with an expected revision and a state.");
  const r = i.expectedRevision;
  if (!Number.isSafeInteger(r) || r < 0)
    throw me(he.INVALID_INPUT, "View-state set requires a non-negative safe-integer expected revision.");
  return r;
}
var Kv = /* @__PURE__ */ new WeakMap();
function Zv(i, r) {
  Kv.set(i, r);
}
function Jv(i) {
  const r = Kv.get(i);
  return r ? r() : null;
}
function Ja(i) {
  return typeof i == "object" && i !== null && !Array.isArray(i);
}
function Wu(i) {
  const r = /* @__PURE__ */ new Set(), o = (d, h) => {
    if (h > 32) throw new Error("Input panel JSON exceeds the maximum depth of 32.");
    if (d === null || typeof d == "string" || typeof d == "boolean" || typeof d == "number" && Number.isFinite(d)) return d;
    if (typeof d != "object" || d === null) throw new Error("Input panel values must be valid JSON.");
    if (r.has(d)) throw new Error("Input panel values must not contain cycles.");
    const g = Object.getPrototypeOf(d);
    if (!Array.isArray(d) && g !== Object.prototype && g !== null)
      throw new Error("Input panel values must contain only JSON objects and arrays.");
    if (Object.getOwnPropertySymbols(d).length > 0) throw new Error("Input panel JSON must not contain symbol keys.");
    r.add(d);
    let b;
    if (Array.isArray(d)) {
      const U = [];
      for (let w = 0; w < d.length; w++) {
        if (!Object.prototype.hasOwnProperty.call(d, w)) throw new Error("Input panel JSON must not contain sparse arrays.");
        U.push(o(d[w], h + 1));
      }
      b = U;
    } else {
      const U = /* @__PURE__ */ Object.create(null);
      for (const w of Object.keys(d)) U[w] = o(d[w], h + 1);
      b = U;
    }
    return r.delete(d), b;
  }, c = JSON.stringify(o(i, 0));
  if (new TextEncoder().encode(c).byteLength > Sv)
    throw new Error(`Input panel JSON exceeds ${Sv} bytes.`);
  return JSON.parse(c);
}
function kv(i) {
  if (!Ja(i)) throw new Error("Input panel context must be an object.");
  for (const c of ["appId", "sessionId", "panelId", "instanceId"])
    if (typeof i[c] != "string" || !i[c].trim()) throw new Error(`Input panel context is missing ${c}.`);
  if (!Number.isSafeInteger(i.revision) || Number(i.revision) < 0) throw new Error("Input panel revision is invalid.");
  const r = i.presentationRevision === void 0 ? 0 : i.presentationRevision;
  if (!Number.isSafeInteger(r) || Number(r) < 0) throw new Error("Input panel presentation revision is invalid.");
  if (i.confirmId !== null && (typeof i.confirmId != "string" || !i.confirmId.trim()))
    throw new Error("Input panel confirmation identity is invalid.");
  if (!["pending", "confirmed", "rejected", "timeout", "aborted", "active"].includes(String(i.status)))
    throw new Error("Input panel status is invalid.");
  if (typeof i.retained != "boolean" || typeof i.title != "string" || typeof i.message != "string")
    throw new Error("Input panel context is missing its presentation fields.");
  const o = i.presentation === void 0 ? { height: null, collapsedHeight: 32, expanded: !0 } : i.presentation;
  if (!Ja(o) || Object.keys(o).some((c) => c !== "height" && c !== "collapsedHeight" && c !== "expanded") || o.height !== null && (typeof o.height != "number" || !Number.isFinite(o.height) || o.height < 24 || o.height > 4096) || typeof o.collapsedHeight != "number" || !Number.isFinite(o.collapsedHeight) || o.collapsedHeight < 24 || o.collapsedHeight > 4096 || typeof o.expanded != "boolean")
    throw new Error("Input panel presentation is invalid.");
  return {
    appId: i.appId,
    sessionId: i.sessionId,
    panelId: i.panelId,
    instanceId: i.instanceId,
    revision: i.revision,
    presentationRevision: r,
    confirmId: i.confirmId,
    status: i.status,
    retained: i.retained,
    title: i.title,
    message: i.message,
    data: Wu(i.data ?? null),
    requestedSchema: Wu(i.requestedSchema ?? null),
    presentation: { height: o.height, collapsedHeight: o.collapsedHeight, expanded: o.expanded }
  };
}
function Mr(i) {
  return { ...i, data: Wu(i.data), requestedSchema: Wu(i.requestedSchema), presentation: { ...i.presentation } };
}
function bE(i) {
  if (!Ja(i) || Object.keys(i).some((c) => c !== "height" && c !== "collapsedHeight" && c !== "expanded"))
    throw new TypeError("hana.inputPanel.setPresentation requires height, collapsedHeight, or expanded.");
  const r = Object.getPrototypeOf(i);
  if (r !== Object.prototype && r !== null || Object.getOwnPropertySymbols(i).length || Object.values(Object.getOwnPropertyDescriptors(i)).some((c) => !c.enumerable || !("value" in c)))
    throw new TypeError("Input panel presentation must be a plain JSON object with data fields.");
  const o = {};
  if (Object.prototype.hasOwnProperty.call(i, "height")) {
    if (i.height !== null && (typeof i.height != "number" || !Number.isFinite(i.height) || i.height < 24 || i.height > 4096)) throw new TypeError("Input panel height must be null or 24–4096.");
    o.height = i.height;
  }
  if (Object.prototype.hasOwnProperty.call(i, "collapsedHeight")) {
    if (typeof i.collapsedHeight != "number" || !Number.isFinite(i.collapsedHeight) || i.collapsedHeight < 24 || i.collapsedHeight > 4096) throw new TypeError("Input panel collapsedHeight must be 24–4096.");
    o.collapsedHeight = i.collapsedHeight;
  }
  if (Object.prototype.hasOwnProperty.call(i, "expanded")) {
    if (typeof i.expanded != "boolean") throw new TypeError("Input panel expanded must be boolean.");
    o.expanded = i.expanded;
  }
  if (!Object.keys(o).length) throw new TypeError("hana.inputPanel.setPresentation requires at least one field.");
  return o;
}
function SE(i, r) {
  if (!Ja(i) || !Ja(i.presentation) || !Number.isSafeInteger(i.presentationRevision)) throw new Error("The input panel presentation response is invalid.");
  const o = kv({ ...r, presentation: i.presentation, presentationRevision: i.presentationRevision });
  return { presentation: o.presentation, presentationRevision: o.presentationRevision };
}
function TE(i) {
  let r = null, o = 0, c = null, d = 0;
  const h = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Set(), b = () => {
    for (const D of g) D(r ? Mr(r) : null);
  }, U = () => {
    r = null, o++;
    for (const D of h.values())
      clearTimeout(D.timeout), D.reject(new Error("The input panel binding was replaced."));
    h.clear(), b();
  }, w = (D) => {
    for (const q of h.values())
      clearTimeout(q.timeout), q.reject(new Error(D));
    h.clear();
  }, C = (D, q, Y) => i({
    protocol: ut,
    version: it,
    id: D.id,
    kind: "error",
    type: D.type,
    error: { code: q, message: Y }
  });
  function v(D) {
    if (D.kind === "event" && D.type === Ju.CONTEXT) {
      if (D.payload === null) U();
      else {
        let Q;
        try {
          Q = kv(D.payload);
        } catch (pe) {
          return U(), console.warn("[hana] invalid input panel context:", pe), !0;
        }
        const G = r?.panelId === Q.panelId && r.appId === Q.appId && r.sessionId === Q.sessionId && r.confirmId === Q.confirmId && r.status === Q.status && r.instanceId === Q.instanceId && r.revision === Q.revision;
        if (G && r && Q.presentationRevision < r.presentationRevision) return !0;
        G || w("The input panel binding was replaced."), r = Q, G || o++, b();
      }
      return !0;
    }
    if ((D.kind === "response" || D.kind === "error") && D.type === Ju.PRESENTATION && D.id) {
      const Q = h.get(D.id);
      if (!Q) return !1;
      if (h.delete(D.id), clearTimeout(Q.timeout), Q.generation !== o)
        Q.reject(new Error("The input panel binding was replaced."));
      else if (D.kind === "error") Q.reject(new Error(D.error?.message || "The input panel presentation could not be updated."));
      else
        try {
          const G = SE(D.payload, r);
          r && G.presentationRevision >= r.presentationRevision && (r = { ...r, ...G }, b()), Q.resolve(G);
        } catch (G) {
          Q.reject(G instanceof Error ? G : new Error("The input panel presentation response is invalid."));
        }
      return !0;
    }
    if (D.kind !== "request" || D.type !== Ju.SUBMIT) return !1;
    if (!D.id) return !0;
    const q = D.payload, Y = r;
    if (!Ja(q) || !Y || Y.status !== "pending" || !Y.confirmId || q.panelId !== Y.panelId || q.instanceId !== Y.instanceId || q.revision !== Y.revision)
      return C(D, "INPUT_PANEL_STALE", "This request does not match the active input panel question."), !0;
    const X = c;
    if (!X && Y.requestedSchema !== null)
      return C(D, "INPUT_PANEL_SUBMIT_UNHANDLED", "Register hana.inputPanel.onSubmit to provide this question’s answer."), !0;
    const ue = o, ye = {
      panelId: Y.panelId,
      instanceId: Y.instanceId,
      revision: Y.revision
    };
    return Promise.resolve().then(() => X ? X(Mr(Y)) : null).then((Q) => {
      if (o !== ue) {
        C(D, "INPUT_PANEL_STALE", "The input panel changed before its answer was ready.");
        return;
      }
      i({
        protocol: ut,
        version: it,
        id: D.id,
        kind: "response",
        type: D.type,
        payload: { ...ye, value: Wu(Q) }
      });
    }).catch((Q) => {
      C(D, "INPUT_PANEL_SUBMIT_FAILED", Q instanceof Error ? Q.message : "The input panel could not provide an answer.");
    }), !0;
  }
  return { api: {
    getContext: () => r ? Mr(r) : null,
    onContextChanged(D) {
      return g.add(D), D(r ? Mr(r) : null), () => {
        g.delete(D);
      };
    },
    onSubmit(D) {
      if (typeof D != "function") throw new TypeError("hana.inputPanel.onSubmit requires a function.");
      return c = D, () => {
        c === D && (c = null);
      };
    },
    async setPresentation(D) {
      const q = r, Y = bE(D);
      if (!q) throw new Error("The input panel is not ready.");
      const X = o, ue = `input-panel-presentation:${q.panelId}:${q.instanceId}:${Date.now().toString(36)}:${++d}`;
      return new Promise((ye, Q) => {
        const G = setTimeout(() => {
          h.delete(ue), Q(new Error("The input panel presentation request timed out."));
        }, 1e4);
        h.set(ue, { generation: X, resolve: ye, reject: Q, timeout: G });
        const pe = (se) => {
          const ee = h.get(ue);
          ee && (h.delete(ue), clearTimeout(ee.timeout), ee.reject(se instanceof Error ? se : new Error("The input panel presentation request could not be delivered.")));
        };
        try {
          i({
            protocol: ut,
            version: it,
            id: ue,
            kind: "request",
            type: Ju.PRESENTATION,
            payload: { panelId: q.panelId, instanceId: q.instanceId, revision: q.revision, presentationRevision: q.presentationRevision, presentation: Y }
          }, pe);
        } catch (se) {
          pe(se);
        }
        if (o !== X) {
          const se = h.get(ue);
          se && (h.delete(ue), clearTimeout(se.timeout), se.reject(new Error("The input panel binding was replaced.")));
        }
      });
    }
  }, handleMessage: v, clear: U };
}
var wl = class extends Error {
  name = "HanaPluginError";
  code;
  details;
  constructor(i) {
    super(i.message), this.code = i.code, this.details = i.details;
  }
}, _v = 0, li = 60, AE = 240;
function _E() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : (_v += 1, `hana-plugin-${Date.now()}-${_v}`);
}
function NE() {
  if (typeof window > "u")
    throw new Error("@hana/plugin-sdk requires a browser iframe window.");
  return window;
}
var Nv = "data-hana-theme-style";
async function OE(i, r) {
  const o = await fetch(r, { credentials: "same-origin" });
  if (!o.ok)
    throw new Error(`hana theme stylesheet request failed with ${o.status}`);
  const c = await o.text(), d = i.head ?? i.documentElement;
  if (!d) throw new Error("hana theme stylesheet has nowhere to attach");
  let h = i.querySelector(`style[${Nv}]`);
  h || (h = i.createElement("style"), h.setAttribute(Nv, "")), h.textContent = c, d.appendChild(h);
}
function wE(i) {
  if (typeof i != "object" || i === null) return !1;
  const r = i;
  return ["light", "dark"].every((o) => {
    const c = r[o];
    return typeof c == "object" && c !== null && typeof c.theme == "string" && typeof c.cssUrl == "string";
  });
}
function CE(i) {
  const r = new URLSearchParams(i.location.search), o = r.get("hana-theme-appearance"), c = r.get("hana-palette-light-theme"), d = r.get("hana-palette-light-css"), h = r.get("hana-palette-dark-theme"), g = r.get("hana-palette-dark-css");
  return {
    theme: r.get("hana-theme") ?? void 0,
    cssUrl: r.get("hana-css") ?? void 0,
    appearance: o === "light" || o === "dark" ? o : void 0,
    palettes: c && d && h && g ? { light: { theme: c, cssUrl: d }, dark: { theme: h, cssUrl: g } } : void 0
  };
}
function Fv(i, r = li) {
  return typeof i != "number" || !Number.isFinite(i) ? r : Math.max(0, Math.min(AE, Math.round(i)));
}
function $v({
  visible: i,
  maxFrameRate: r,
  slot: o,
  reason: c
}) {
  const d = i ? Fv(r) : 0, h = i && d > 0;
  return {
    visible: i,
    active: h,
    maxFrameRate: h ? d : 0,
    motion: h ? "full" : "paused",
    ...o === "page" || o === "widget" || o === "card" || o === "settings" || o === "function-panel" || o === "slot" ? { slot: o } : {},
    ...c ? { reason: c } : {}
  };
}
function RE(i) {
  const r = new URLSearchParams(i.location.search), o = r.get("hana-visible"), c = !(o === "0" || o === "false"), d = r.get("hana-max-fps"), h = d === null ? NaN : Number(d), g = Number.isFinite(h) ? h : li;
  return $v({
    visible: c,
    maxFrameRate: g,
    reason: "initial"
  });
}
function UE(i, r) {
  if (typeof i != "object" || i === null) return null;
  const o = i, c = typeof o.visible == "boolean" ? o.visible : r.visible, d = Fv(
    o.maxFrameRate,
    r.maxFrameRate > 0 ? r.maxFrameRate : li
  ), h = typeof o.active == "boolean" ? o.active && c && d > 0 : c && d > 0, g = o.motion, b = g === "full" || g === "reduced" || g === "paused" ? g : h ? "full" : "paused", U = typeof o.slot == "string" ? o.slot : r.slot, w = typeof o.reason == "string" ? o.reason : r.reason;
  return {
    visible: c,
    active: h,
    maxFrameRate: h ? d : 0,
    motion: h ? b : "paused",
    ...U === "page" || U === "widget" || U === "card" || U === "settings" || U === "function-panel" || U === "slot" ? { slot: U } : {},
    ...w ? { reason: w } : {}
  };
}
function DE(i, r) {
  if (typeof i != "object" || i === null) return null;
  const o = i.visible;
  return typeof o != "boolean" ? null : $v({
    visible: o,
    maxFrameRate: o && r.maxFrameRate > 0 ? r.maxFrameRate : li,
    slot: r.slot,
    reason: "legacy-visibility"
  });
}
function zE(i, r) {
  return i.visible === r.visible && i.active === r.active && i.maxFrameRate === r.maxFrameRate && i.motion === r.motion && i.slot === r.slot && i.reason === r.reason;
}
function No(i) {
  return {
    width: { ...i.width },
    height: { ...i.height }
  };
}
function Ov(i) {
  if (typeof i != "object" || i === null) return null;
  const r = i;
  return r.mode === "fixed" ? typeof r.value != "number" || !Number.isFinite(r.value) ? null : { mode: "fixed", value: Math.round(r.value) } : r.mode === "flexible" ? typeof r.max != "number" || !Number.isFinite(r.max) ? null : { mode: "flexible", max: Math.round(r.max) } : r.mode === "unbounded" ? { mode: "unbounded" } : null;
}
function xE(i) {
  if (typeof i != "object" || i === null) return null;
  const r = i, o = Ov(r.width), c = Ov(r.height);
  return !o || !c ? null : { width: o, height: c };
}
function wv(i) {
  if (i === null) return null;
  if (typeof i == "string") return i;
}
function ME(i) {
  if (typeof i != "object" || i === null || Array.isArray(i)) return;
  const r = i;
  if (Pu(r.bindingId) && !(r.viewKind !== "compact" && r.viewKind !== "detached") && typeof r.available == "boolean")
    return { bindingId: r.bindingId, viewKind: r.viewKind, available: r.available };
}
function jE(i) {
  if (typeof i != "object" || i === null || Array.isArray(i)) return null;
  const r = i, o = typeof r.appId == "string" && r.appId.trim() ? r.appId.trim() : null, c = r.slot, d = r.cardInstanceId;
  if (!o || c !== "card" && c !== "function-panel" && c !== "settings" && c !== "slot" && c !== "input-panel") return null;
  const h = wv(r.embeddedSessionId), g = wv(r.originSessionId), b = Xv(r.instanceKey);
  if (b === null) return null;
  const U = ME(r.viewState), w = typeof d == "string" && !!d.trim();
  if (b !== void 0 && !w) return null;
  const C = {};
  return h !== void 0 && (C.embeddedSessionId = h), g !== void 0 && (C.originSessionId = g), b !== void 0 && (C.instanceKey = b), U !== void 0 && (C.viewState = U), c === "settings" || c === "input-panel" ? d === null ? { appId: o, slot: c, cardInstanceId: null, ...C } : null : w ? { appId: o, slot: c, cardInstanceId: d.trim(), ...C } : c !== "card" || d !== null || typeof r.embeddedSessionId != "string" || !r.embeddedSessionId.trim() ? null : { appId: o, slot: c, cardInstanceId: null, ...C };
}
function Oo(i) {
  return {
    ...i,
    ...i.viewState ? { viewState: { ...i.viewState } } : {}
  };
}
function Cv(i) {
  if (typeof i != "object" || i === null || Array.isArray(i)) return null;
  const r = i, o = typeof r.sessionId == "string" && r.sessionId.trim() ? r.sessionId : null, c = typeof r.sessionPath == "string" && r.sessionPath ? r.sessionPath : null;
  return !o || !c || r.title !== null && typeof r.title != "string" || r.agentId !== null && typeof r.agentId != "string" ? null : {
    sessionId: o,
    sessionPath: c,
    title: r.title,
    agentId: r.agentId
  };
}
function HE(i) {
  if (typeof i != "object" || i === null || Array.isArray(i)) return null;
  const r = i, o = r.previous === null ? null : Cv(r.previous), c = r.current === null ? null : Cv(r.current);
  return r.previous !== null && o === null || r.current !== null && c === null || typeof r.timestamp != "number" || !Number.isFinite(r.timestamp) ? null : { previous: o, current: c, timestamp: r.timestamp };
}
function LE(i) {
  if (typeof i != "object" || i === null || Array.isArray(i)) return null;
  const r = i;
  return typeof r.code != "string" || !r.code.trim() || typeof r.message != "string" || !r.message.trim() ? null : new wl({ code: r.code, message: r.message });
}
function qE(i) {
  return typeof i == "string" ? { url: i } : i;
}
function BE(i) {
  return typeof i == "string" ? { text: i } : i;
}
function Pv(i) {
  const r = jo(i.location.pathname || "");
  if (!r)
    throw new Error("App asset/API URL helper requires an App surface route under /api/apps/:appId/ui/ or a scoped service mount.");
  return r.appId;
}
function IE(i, r) {
  if (!r || !["card", "function-panel", "settings", "slot"].includes(r.slot)) return !1;
  try {
    return Pv(i) === r.appId;
  } catch {
    return !1;
  }
}
function VE(i) {
  if (typeof i != "string" || i.length === 0)
    throw new Error("Invalid plugin asset path.");
  if (i.includes("\\") || i.includes("\0") || /^[a-z][a-z0-9+.-]*:/i.test(i))
    throw new Error("Invalid plugin asset path.");
  const r = i.replace(/^\/+/, "");
  if (!r || r.startsWith("./"))
    throw new Error("Invalid plugin asset path.");
  const o = r.split("/");
  if (o.some((c) => !c || c === "." || c === ".." || c.startsWith(".")))
    throw new Error("Invalid plugin asset path.");
  return o.map((c) => encodeURIComponent(c)).join("/");
}
function GE(i) {
  return new URLSearchParams(i.location.search).get("hana-asset-base") || null;
}
function YE(i, r) {
  const o = VE(r), c = GE(i);
  if (!c)
    throw new Error(
      "hana.assets.url() requires the host-issued hana-asset-base query parameter: this page was not opened by the host with an asset base; hana.assets.url() only works inside a Hana app surface."
    );
  const d = new URL(c);
  return d.pathname = `${d.pathname.replace(/\/+$/, "")}/${o}`, d.toString();
}
function Wv(i) {
  return new URLSearchParams(i.location.search).get(x0) || null;
}
function XE(i) {
  if (typeof i != "string" || i.length === 0)
    throw new Error("Invalid plugin API path.");
  const r = i.trim();
  if (!r || r.includes("\\") || r.includes("\0") || r.includes("#") || r.startsWith("//") || /^[a-z][a-z0-9+.-]*:/i.test(r))
    throw new Error("Invalid plugin API path.");
  const o = r.replace(/^\/+/, "");
  if (!o || o.startsWith("./") || o === "api/apps" || o.startsWith("api/apps/"))
    throw new Error("Invalid plugin API path. Use a route path relative to the current plugin.");
  const c = o.indexOf("?"), d = c >= 0 ? o.slice(0, c) : o;
  if (!d)
    throw new Error("Invalid plugin API path.");
  const h = d.split("/");
  for (const U of h) {
    if (!U) throw new Error("Invalid plugin API path.");
    let w;
    try {
      w = decodeURIComponent(U);
    } catch {
      throw new Error("Invalid plugin API path.");
    }
    if (w === "." || w === ".." || w.includes("/") || w.includes("\\"))
      throw new Error("Invalid plugin API path.");
  }
  const g = new URL(`http://hana.local/${o}`);
  return `${h.map((U) => encodeURIComponent(decodeURIComponent(U))).join("/")}${g.search}`;
}
function eg(i, r, o = !1) {
  const c = Pv(i);
  let d = XE(r);
  if (o && d.startsWith("_runtime/")) {
    const h = Wv(i);
    if (!h) throw new Error("hana.api.url for a managed service requires appSurfaceSession in the iframe URL.");
    const g = /^(_runtime\/[^/?]+)\/(.+)$/.exec(d);
    if (!g || g[2].startsWith("_surface/")) throw new Error("Invalid managed service API path.");
    d = `${g[1]}/_surface/${encodeURIComponent(h)}/${g[2]}`;
  }
  return `${i.location.origin}/api/apps/${encodeURIComponent(c)}/routes/${d}`;
}
function QE(i, r, o, c) {
  const d = Wv(i);
  if (!d)
    throw new Error("hana.api.fetch requires appSurfaceSession in the iframe URL.");
  const h = i.fetch?.bind(i) ?? globalThis.fetch?.bind(globalThis);
  if (!h)
    throw new Error("hana.api.fetch requires window.fetch.");
  const g = o ?? {}, b = new Headers(g.headers);
  return b.set(z0, d), c && b.set("X-Hana-Document-Binding", c), h(eg(i, r), {
    ...g,
    headers: b
  });
}
function KE(i) {
  try {
    const r = i.navigator;
    if (r.userActivation && typeof r.userActivation.isActive == "boolean")
      return r.userActivation.isActive === !0;
  } catch {
  }
  try {
    const r = i.event;
    return !!(r && r.isTrusted);
  } catch {
  }
  return !1;
}
function ZE(i, r) {
  if (typeof r != "object" || r === null) return !1;
  const o = r;
  return i.kind === "global" ? o.kind === "global" : o.kind === "agent" && o.agentId === i.agentId;
}
function tg(i = {}) {
  const r = i.targetWindow ?? NE(), o = i.parentWindow ?? r.parent, c = xv(r, i.targetOrigin), d = i.requestTimeoutMs ?? 1e4, h = i.idFactory ?? _E, g = TE(ge), b = eE({
    targetWindow: r,
    post: ge,
    // A host that rebound its bridge to this same document gets a fresh
    // handshake by re-announcing the ready the page already sent.
    reannounceReady: () => {
      Ve && te(et);
    }
  }), U = aE({
    request: re,
    post: ge,
    targetWindow: r,
    currentView: b,
    requestTimeoutMs: d
  }), w = i.followHostTheme !== !1;
  let C = CE(r), v = RE(r), z = null, D = null;
  const q = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set(), X = /* @__PURE__ */ new Set(), ue = /* @__PURE__ */ new Set(), ye = /* @__PURE__ */ new Set(), Q = /* @__PURE__ */ new Set(), G = /* @__PURE__ */ new Set(), pe = /* @__PURE__ */ new Set(), se = /* @__PURE__ */ new Set();
  let ee = null, de = null, We = null, Ve = !1, et, ke = !1, Nt = !1, qt = !1, B = Promise.resolve();
  const L = /* @__PURE__ */ new Map();
  let Z = 1, K = null, ie = null, ce = null, Re = !1;
  function Me(A) {
    if (!w || !A) return;
    const V = r.document;
    V && OE(V, A).catch((x) => {
      if (i.onThemeError) {
        i.onThemeError(x);
        return;
      }
      console.error("[hana] failed to follow host theme", x);
    });
  }
  function ge(A, V) {
    if (i.messageTransport) {
      const x = i.messageTransport.postMessage(A);
      x && x.catch(V ?? ((H) => console.error("[hana] host message delivery failed", H)));
    } else o.postMessage(A, c);
  }
  function E(A) {
    if (i.messageTransport) return i.messageTransport.onMessage(A);
    const V = (x) => {
      Mv(x, o, c) && A(x.data);
    };
    return r.addEventListener("message", V), () => r.removeEventListener("message", V);
  }
  function I(A, V) {
    const x = {
      protocol: ut,
      version: it,
      kind: "event",
      type: A
    };
    V !== void 0 && (x.payload = V), ge(x);
  }
  function te(A) {
    I("hana.ready", A);
  }
  function $(A) {
    const V = A instanceof wl ? A : new wl({
      code: "HOST_ERROR",
      message: A instanceof Error ? A.message : "Active session subscription failed."
    });
    let x = !1;
    for (const H of se)
      if (H.onError) {
        x = !0;
        try {
          H.onError(V);
        } catch (ne) {
          console.error("[hana] active session error callback failed", ne);
        }
      }
    x || console.error("[hana] active session subscription failed", V);
  }
  function Ee() {
    return se.size > 0 && !qt && !Nt;
  }
  function be() {
    B = B.catch(() => {
    }).then(async () => {
      for (; ke !== Ee(); ) {
        if (Ee()) {
          try {
            if (await P(), (await re(zr.SUBSCRIBE)).subscribed !== !0) {
              ke = !1, Nt || $(new wl({
                code: "HOST_ERROR",
                message: "The host did not establish the active session subscription."
              }));
              return;
            }
            ke = !0;
          } catch (A) {
            ke = !1, $(A);
            return;
          }
          continue;
        }
        try {
          await P(), await re(zr.UNSUBSCRIBE);
        } catch (A) {
          $(A);
        }
        ke = !1;
      }
    });
  }
  function Oe(A) {
    const V = r.document?.readyState;
    return V !== "loading" && V !== "interactive" ? Promise.resolve() : new Promise((x, H) => {
      const ne = () => {
        r.clearTimeout(ht), r.removeEventListener("load", ze), r.removeEventListener("pagehide", Ye);
      }, ze = () => {
        ne(), x();
      }, Ye = () => {
        ne(), H(new wl({
          code: "SURFACE_UNAVAILABLE",
          message: "The App surface unloaded before interactive regions could be registered."
        }));
      }, ht = r.setTimeout(() => {
        ne(), H(new wl({
          code: "TIMEOUT",
          message: "The App document did not finish loading before interactive regions could be registered."
        }));
      }, A);
      r.addEventListener("load", ze), r.addEventListener("pagehide", Ye);
    });
  }
  function P(A) {
    return Oe(A ?? d).then(() => {
      te(et);
    });
  }
  function oe(A) {
    const V = r.requestAnimationFrame?.bind(r), x = r.cancelAnimationFrame?.bind(r);
    if (V && x) {
      const ne = V(A);
      return () => x(ne);
    }
    const H = r.setTimeout(() => {
      const ne = r.performance?.now?.() ?? Date.now();
      A(ne);
    }, Math.max(1, Math.round(1e3 / Math.max(v.maxFrameRate, li))));
    return () => r.clearTimeout(H);
  }
  function Pt() {
    K && (K(), K = null);
  }
  function $n() {
    K || L.size === 0 || !v.active || v.maxFrameRate <= 0 || (K = oe((A) => {
      if (K = null, !v.active || v.maxFrameRate <= 0) return;
      const V = 1e3 / v.maxFrameRate;
      if (ie !== null && A >= ie && A - ie < V) {
        $n();
        return;
      }
      ie = A;
      const x = Array.from(L.entries());
      for (const [H, ne] of x)
        if (L.delete(H))
          try {
            ne(A);
          } catch (ze) {
            r.setTimeout(() => {
              throw ze;
            }, 0);
          }
      $n();
    }));
  }
  function xn(A) {
    if (!zE(v, A)) {
      v = A;
      for (const V of X) V({ ...v });
      if (!v.active || v.maxFrameRate <= 0) {
        Pt();
        return;
      }
      $n();
    }
  }
  function Wt(A) {
    if (typeof A == "object" && A !== null && A.protocol === void 0 && A.type === "visibility-changed") {
      const H = DE(
        A.payload,
        v
      );
      H && xn(H);
      return;
    }
    const V = ku(A);
    if (!V.ok) return;
    const x = V.value;
    if (!b.handleHostMessage(x) && !U.handleHostMessage(x)) {
      if (g.handleMessage(x)) {
        x.type === Ju.CONTEXT && x.payload === null && Ve && te(et);
        return;
      }
      if (x.kind === "request" && x.type === "hana.document.view-request") {
        const H = typeof x.payload == "object" && x.payload !== null ? x.payload : null, ne = H && typeof H.requestId == "string" ? H.requestId : "", ze = H && typeof H.documentId == "string" ? H.documentId : "", Ye = H && typeof H.viewId == "string" ? H.viewId : "", ht = H?.revision, Dt = H && typeof H.method == "string" ? H.method.trim() : "";
        if (!ne || !ze || !Ye || !Dt || Dt.length > 128 || !Number.isSafeInteger(ht) || Number(ht) < 0) {
          ge({
            protocol: ut,
            version: it,
            id: x.id,
            kind: "error",
            type: x.type,
            error: { code: "DOCUMENT_VIEW_REQUEST_INVALID", message: "Invalid document view request." }
          });
          return;
        }
        if (!We) {
          ge({
            protocol: ut,
            version: it,
            id: x.id,
            kind: "error",
            type: x.type,
            error: { code: "DOCUMENT_VIEW_REQUEST_UNHANDLED", message: "The document view cannot handle this request." }
          });
          return;
        }
        const mt = H?.payload, Ul = We;
        Promise.resolve().then(() => Ul({
          requestId: ne,
          documentId: ze,
          viewId: Ye,
          revision: ht,
          method: Dt,
          ...Object.prototype.hasOwnProperty.call(H, "payload") ? { payload: mt } : {}
        })).then((fn) => {
          ge({ protocol: ut, version: it, id: x.id, kind: "response", type: x.type, payload: fn });
        }, (fn) => {
          ge({
            protocol: ut,
            version: it,
            id: x.id,
            kind: "error",
            type: x.type,
            error: { code: "DOCUMENT_VIEW_REQUEST_FAILED", message: fn instanceof Error ? fn.message : "Document view request failed." }
          });
        });
        return;
      }
      if (x.kind === "request" && x.type === "hana.document.request") {
        const H = x.payload, ne = typeof H == "object" && H !== null ? H : null, ze = ne && typeof ne.requestId == "string" ? ne.requestId : "", Ye = ne?.kind, ht = ne?.revision;
        if (!ze || !["save", "prepareClose", "revert", "undo", "redo"].includes(String(Ye)) || !Number.isSafeInteger(ht)) {
          ge({
            protocol: ut,
            version: it,
            id: x.id,
            kind: "error",
            type: x.type,
            error: { code: "DOCUMENT_REQUEST_INVALID", message: "Invalid document request." }
          });
          return;
        }
        if (!de) {
          ge({
            protocol: ut,
            version: it,
            id: x.id,
            kind: "error",
            type: x.type,
            error: { code: "DOCUMENT_REQUEST_UNHANDLED", message: "The document editor cannot handle this request." }
          });
          return;
        }
        const Dt = {
          requestId: ze,
          kind: Ye,
          revision: ht
        };
        Promise.resolve(de(Dt)).then((mt) => {
          ge({ protocol: ut, version: it, id: x.id, kind: "response", type: x.type, payload: mt });
        }, (mt) => {
          ge({
            protocol: ut,
            version: it,
            id: x.id,
            kind: "error",
            type: x.type,
            error: { code: "DOCUMENT_REQUEST_FAILED", message: mt instanceof Error ? mt.message : "Document request failed." }
          });
        });
        return;
      }
      if (x.kind === "request" && x.type === De.UI_ACTION) {
        const H = r.document, ne = H ? Vv(H, x.payload, IE(r, D)) : { ok: !1, code: "UI_ACTION_DOCUMENT_UNAVAILABLE", error: "No document is available." };
        ne.ok === !0 ? ge({
          protocol: ut,
          version: it,
          id: x.id,
          kind: "response",
          type: De.UI_ACTION,
          payload: ne.result
        }) : ge({
          protocol: ut,
          version: it,
          id: x.id,
          kind: "error",
          type: De.UI_ACTION,
          error: { code: ne.code, message: ne.error, ...ne.result ? { details: ne.result } : {} }
        });
        return;
      }
      if (x.kind === "event") {
        if (x.type === "hana.document.binding") {
          const H = x.payload, ne = typeof H == "object" && H !== null ? H.access : null;
          ee = typeof ne?.bindingId == "string" && ne.bindingId ? ne.bindingId : null;
          return;
        }
        if (x.type === Xa.THEME_CHANGED) {
          if (typeof x.payload != "object" || x.payload === null) return;
          const H = x.payload, ne = typeof H.theme == "string" ? H.theme : C.theme, ze = typeof H.theme == "string" && H.theme !== C.theme;
          C = {
            theme: ne,
            cssUrl: typeof H.cssUrl == "string" ? H.cssUrl : C.cssUrl,
            appearance: H.appearance === "light" || H.appearance === "dark" ? H.appearance : ze ? void 0 : C.appearance,
            palettes: wE(H.palettes) ? H.palettes : ze ? void 0 : C.palettes
          };
          for (const Ye of q) Ye({ ...C });
          Me(C.cssUrl);
          return;
        }
        if (x.type === Xa.SURFACE_ENVELOPE_CHANGED) {
          const H = xE(x.payload);
          if (!H) return;
          z = H;
          for (const ne of Y) ne(No(z));
          return;
        }
        if (x.type === Xa.SURFACE_RUNTIME_CHANGED) {
          const H = UE(x.payload, v);
          H && xn(H);
          return;
        }
        if (x.type === Q0.CONTEXT) {
          const H = x.payload === null ? null : jE(x.payload);
          if (x.payload !== null && H === null) return;
          const ne = H?.appId !== D?.appId || H?.slot !== D?.slot || H?.cardInstanceId !== D?.cardInstanceId || H?.instanceKey !== D?.instanceKey || H?.embeddedSessionId !== D?.embeddedSessionId || H?.originSessionId !== D?.originSessionId || H?.viewState?.bindingId !== D?.viewState?.bindingId || H?.viewState?.viewKind !== D?.viewState?.viewKind || H?.viewState?.available !== D?.viewState?.available;
          if (b.applySurfaceContext(H === null ? null : { appId: H.appId, cardInstanceId: H.cardInstanceId, instanceKey: H.instanceKey ?? null }), D = H, ne)
            for (const ze of ue) ze(D ? Oo(D) : null);
          return;
        }
        if (x.type === Tv.ACTIVE_CHANGED) {
          if (Nt) return;
          const H = HE(x.payload);
          if (!H) return;
          for (const ne of se) ne.callback(H);
          return;
        }
        if (x.type === Tv.ERROR) {
          const H = LE(x.payload);
          if (!H) return;
          ke = !1, Nt = !0, $(H), be();
          return;
        }
        if (x.type === Xa.STORAGE_CHANGED) {
          if (typeof x.payload != "object" || x.payload === null) return;
          const H = x.payload.keys, ne = Array.isArray(H) ? H.filter((ze) => typeof ze == "string") : [];
          for (const ze of ye) ze(ne.slice());
          return;
        }
        if (x.type === M0.CHANGED) {
          if (typeof x.payload != "object" || x.payload === null) return;
          const H = x.payload, ne = H.keys, ze = Array.isArray(ne) ? ne.filter((Ye) => typeof Ye == "string") : [];
          for (const Ye of Q)
            ZE(Ye.scope, H.scope) && Ye.callback(ze.slice());
          return;
        }
        if (x.type === Xa.PANEL_EVENT) {
          if (typeof x.payload != "object" || x.payload === null) return;
          const H = x.payload, ne = typeof H.sectionId == "string" ? H.sectionId : null, ze = H.kind;
          if (!ne || ze !== "select" && ze !== "action" && ze !== "toggle") return;
          const Ye = {
            sectionId: ne,
            kind: ze,
            ...typeof H.itemId == "string" ? { itemId: H.itemId } : {},
            ...typeof H.checked == "boolean" ? { checked: H.checked } : {}
          };
          for (const ht of G) ht(Ye);
          return;
        }
        if (x.type === Xa.PANEL_REFRESH)
          for (const H of pe) H();
      }
    }
  }
  E(Wt), r.addEventListener("pagehide", (A) => {
    g.clear(), qt = !0, be(), A?.persisted === !1 && (Re = !0, b.dispose(), ce?.dispose(), U.dispose());
  }), r.addEventListener("pageshow", () => {
    qt && (qt = !1, be());
  });
  function re(A, V, x = {}) {
    const H = h(), ne = x.timeoutMs ?? d;
    return new Promise((ze, Ye) => {
      let ht = () => {
      };
      const Dt = () => {
        ht(), r.clearTimeout(Ul);
      }, mt = (Dl) => {
        const Fa = ku(Dl);
        if (!Fa.ok) return;
        const dn = Fa.value;
        dn.id !== H || dn.type !== A || (dn.kind === "response" && (Dt(), ze(dn.payload)), dn.kind === "error" && dn.error && (Dt(), Ye(new wl(dn.error))));
      }, Ul = r.setTimeout(() => {
        Dt(), Ye(new wl({
          code: "TIMEOUT",
          message: `Plugin host request timed out: ${A}.`
        }));
      }, ne), fn = {
        protocol: ut,
        version: it,
        id: H,
        kind: "request",
        type: A
      };
      V !== void 0 && (fn.payload = V);
      try {
        ht = E(mt), ge(fn, (Dl) => {
          Dt(), Ye(Dl);
        });
      } catch (Dl) {
        Dt(), Ye(Dl);
      }
    });
  }
  function Le(A) {
    return {
      get(V, x) {
        return re(Ka.GET, { scope: A, key: V }, x);
      },
      getAll(V) {
        return re(Ka.GET_ALL, { scope: A }, V);
      },
      set(V, x, H) {
        return re(Ka.SET, { scope: A, key: V, value: x }, H);
      },
      delete(V, x) {
        return re(Ka.DELETE, { scope: A, key: V }, x);
      },
      keys(V) {
        return re(Ka.KEYS, { scope: A }, V);
      },
      onChanged(V) {
        if (A.kind === "agent" && !A.agentId)
          throw new Error(
            "hana.storage.agent() with no agentId cannot subscribe with onChanged — a subscription outlives any single request, so pass an explicit agentId to subscribe to a stable scope."
          );
        const x = { scope: A, callback: V };
        return Q.add(x), () => {
          Q.delete(x);
        };
      }
    };
  }
  const Bt = {
    ready(A) {
      Ve = !0, et = A, te(A);
    },
    inputPanel: g.api,
    assets: {
      url(A) {
        return YE(r, A);
      }
    },
    api: {
      url(A) {
        return eg(r, A, !0);
      },
      fetch(A, V) {
        return QE(r, A, V, ee);
      }
    },
    ui: {
      resize(A) {
        I(De.UI_RESIZE, A);
      }
    },
    theme: {
      getSnapshot() {
        return { ...C };
      },
      subscribe(A) {
        return q.add(A), A({ ...C }), () => {
          q.delete(A);
        };
      }
    },
    envelope: {
      getSnapshot() {
        return z ? No(z) : null;
      },
      subscribe(A) {
        return Y.add(A), A(z ? No(z) : null), () => {
          Y.delete(A);
        };
      }
    },
    lifecycle: {
      getSnapshot() {
        return { ...v };
      },
      subscribe(A) {
        return X.add(A), A({ ...v }), () => {
          X.delete(A);
        };
      }
    },
    cards: {
      open(A, V) {
        if (typeof A != "string" || !A.trim())
          return Promise.reject(new TypeError("hana.cards.open requires a non-empty declared card ID."));
        let x;
        if (V !== void 0) {
          if (typeof V != "object" || V === null || Array.isArray(V))
            return Promise.reject(new TypeError("hana.cards.open options must be an object."));
          if (Object.keys(V).some((ne) => ne !== "instanceKey"))
            return Promise.reject(new TypeError("hana.cards.open options accepts only instanceKey."));
          const H = Xv(V.instanceKey);
          if (H === null)
            return Promise.reject(new TypeError("hana.cards.open instanceKey must be a non-empty string of at most 256 code units without NUL."));
          x = H;
        }
        return re(Yv.OPEN, {
          cardId: A.trim(),
          ...x === void 0 ? {} : { instanceKey: x }
        });
      }
    },
    surface: {
      getContext() {
        return D ? Oo(D) : null;
      },
      onContextChanged(A) {
        return ue.add(A), A(D ? Oo(D) : null), () => {
          ue.delete(A);
        };
      },
      setInteractiveRegions(A, V) {
        const x = j0({ regions: A });
        return x.ok === !1 ? Promise.reject(new TypeError(x.error)) : Ve ? Oe(V?.timeoutMs ?? d).then(() => (te(et), re(Ro.SET_INTERACTIVE_REGIONS, x.value, V))) : re(Ro.SET_INTERACTIVE_REGIONS, x.value, V);
      }
    },
    sessions: {
      getActive(A) {
        return P(A?.timeoutMs).then(() => re(zr.GET_ACTIVE, void 0, A));
      },
      focus(A, V) {
        return !A || typeof A.sessionId != "string" || !A.sessionId.trim() ? Promise.reject(new TypeError("hana.sessions.focus requires a non-empty sessionId.")) : P(V?.timeoutMs).then(() => re(
          zr.FOCUS,
          { sessionId: A.sessionId.trim() },
          V
        ));
      },
      onActiveChanged(A, V) {
        const x = { callback: A, onError: V };
        return Nt = !1, se.add(x), be(), () => {
          se.delete(x) && be();
        };
      }
    },
    performance: {
      requestAnimationFrame(A) {
        const V = Z;
        return Z += 1, L.set(V, A), $n(), V;
      },
      cancelAnimationFrame(A) {
        L.delete(A), L.size === 0 && Pt();
      }
    },
    host: {
      request: re
    },
    chrome: U.api,
    toast: {
      show(A, V) {
        return re(De.TOAST_SHOW, A, V);
      }
    },
    external: {
      open(A, V) {
        return re(De.EXTERNAL_OPEN, qE(A), V);
      }
    },
    clipboard: {
      writeText(A, V) {
        return re(
          De.CLIPBOARD_WRITE_TEXT,
          BE(A),
          V
        );
      }
    },
    resources: {
      open(A, V) {
        return re(De.RESOURCE_OPEN, A, V);
      },
      pick(A = {}, V) {
        return re(De.RESOURCE_PICK, A, V);
      },
      saveFile(A, V) {
        return re(De.RESOURCE_SAVE_FILE, A, V);
      },
      requestAccess(A, V) {
        return re(
          De.RESOURCE_REQUEST_ACCESS,
          A,
          V
        );
      }
    },
    document: {
      getContext(A) {
        return re("hana.document.get-context", void 0, A);
      },
      read(A) {
        return re("hana.document.read", void 0, A);
      },
      reportStatus(A, V) {
        return re("hana.document.report-status", A, V);
      },
      open(A, V) {
        return re("hana.document.open", A, V);
      },
      rebind(A, V) {
        return re("hana.document.rebind", A, V);
      },
      openDrop(A, V) {
        if (A.defaultPrevented) return Promise.resolve(null);
        const x = A.dataTransfer?.getData("application/x-hana-file-drag") || "";
        if (x) return re("hana.document.open-drop", { dragId: x }, V);
        const H = Array.from(A.dataTransfer?.files || []);
        return H.length !== 1 ? Promise.resolve(null) : re("hana.document.open-drop", { file: H[0] }, V);
      },
      onRequest(A) {
        return de = A, () => {
          de === A && (de = null);
        };
      },
      onViewRequest(A) {
        return We = A, () => {
          We === A && (We = null);
        };
      }
    },
    state: {
      get(A, V) {
        const x = typeof A == "string" && A ? { key: A } : {};
        return re(De.STATE_GET, x, V);
      },
      set(A, V, x) {
        const H = typeof A == "string" ? { key: A, value: V } : { state: A };
        return re(De.STATE_SET, H, x);
      }
    },
    storage: {
      get(A, V) {
        return re(De.STORAGE_GET, { key: A }, V);
      },
      getAll(A) {
        return re(De.STORAGE_GET_ALL, {}, A);
      },
      set(A, V, x) {
        return re(De.STORAGE_SET, { key: A, value: V }, x);
      },
      delete(A, V) {
        return re(De.STORAGE_DELETE, { key: A }, V);
      },
      onChanged(A) {
        return ye.add(A), () => {
          ye.delete(A);
        };
      },
      global: Le({ kind: "global" }),
      agent(A) {
        return Le({ kind: "agent", agentId: A });
      }
    },
    emit(A, V, x, H) {
      const ne = {
        name: A,
        userGesture: KE(r)
      };
      return arguments.length >= 2 && (ne.payload = V), typeof x == "string" && x.trim() && (ne.to = x.trim()), re(De.EMIT, ne, H);
    },
    track(A, V, x) {
      const H = { name: A };
      return arguments.length >= 2 && (H.payload = V), re(De.TRACK, H, x);
    },
    panel: {
      set(A, V) {
        return re(De.PANEL_SET, A, V);
      },
      onEvent(A) {
        return G.add(A), () => {
          G.delete(A);
        };
      },
      onRefresh(A) {
        return pe.add(A), () => {
          pe.delete(A);
        };
      }
    }
  };
  return Zv(Bt, () => Re ? null : (ce ??= yE({
    request: re,
    currentView: b,
    getContext: () => D,
    subscribeContext: (A) => (ue.add(A), () => {
      ue.delete(A);
    }),
    requestTimeoutMs: d
  }), ce.api)), Bt;
}
var Rv = null;
function le() {
  return Rv ??= tg(), Rv;
}
var ng = {
  ready(i) {
    return le().ready(i);
  },
  inputPanel: {
    getContext() {
      return le().inputPanel.getContext();
    },
    onContextChanged(i) {
      return le().inputPanel.onContextChanged(i);
    },
    onSubmit(i) {
      return le().inputPanel.onSubmit(i);
    },
    setPresentation(i) {
      return le().inputPanel.setPresentation(i);
    }
  },
  assets: {
    url(i) {
      return le().assets.url(i);
    }
  },
  api: {
    url(i) {
      return le().api.url(i);
    },
    fetch(i, r) {
      return le().api.fetch(i, r);
    }
  },
  ui: {
    resize(i) {
      return le().ui.resize(i);
    }
  },
  theme: {
    getSnapshot() {
      return le().theme.getSnapshot();
    },
    subscribe(i) {
      return le().theme.subscribe(i);
    }
  },
  envelope: {
    getSnapshot() {
      return le().envelope.getSnapshot();
    },
    subscribe(i) {
      return le().envelope.subscribe(i);
    }
  },
  lifecycle: {
    getSnapshot() {
      return le().lifecycle.getSnapshot();
    },
    subscribe(i) {
      return le().lifecycle.subscribe(i);
    }
  },
  cards: {
    open(i, r) {
      return le().cards.open(i, r);
    }
  },
  surface: {
    getContext() {
      return le().surface.getContext();
    },
    onContextChanged(i) {
      return le().surface.onContextChanged(i);
    },
    setInteractiveRegions(i, r) {
      return le().surface.setInteractiveRegions(i, r);
    }
  },
  sessions: {
    getActive(i) {
      return le().sessions.getActive(i);
    },
    focus(i, r) {
      return le().sessions.focus(i, r);
    },
    onActiveChanged(i, r) {
      return le().sessions.onActiveChanged(i, r);
    }
  },
  performance: {
    requestAnimationFrame(i) {
      return le().performance.requestAnimationFrame(i);
    },
    cancelAnimationFrame(i) {
      return le().performance.cancelAnimationFrame(i);
    }
  },
  host: {
    request(i, r, o) {
      return le().host.request(i, r, o);
    }
  },
  chrome: {
    set(i, r) {
      return le().chrome.set(i, r);
    },
    onAction(i) {
      return le().chrome.onAction(i);
    },
    registerScrollSource(i) {
      return le().chrome.registerScrollSource(i);
    }
  },
  toast: {
    show(i, r) {
      return le().toast.show(i, r);
    }
  },
  external: {
    open(i, r) {
      return le().external.open(i, r);
    }
  },
  clipboard: {
    writeText(i, r) {
      return le().clipboard.writeText(i, r);
    }
  },
  resources: {
    open(i, r) {
      return le().resources.open(i, r);
    },
    pick(i, r) {
      return le().resources.pick(i, r);
    },
    saveFile(i, r) {
      return le().resources.saveFile(i, r);
    },
    requestAccess(i, r) {
      return le().resources.requestAccess(i, r);
    }
  },
  document: {
    getContext(i) {
      return le().document.getContext(i);
    },
    read(i) {
      return le().document.read(i);
    },
    reportStatus(i, r) {
      return le().document.reportStatus(i, r);
    },
    open(i, r) {
      return le().document.open(i, r);
    },
    rebind(i, r) {
      return le().document.rebind(i, r);
    },
    openDrop(i, r) {
      return le().document.openDrop(i, r);
    },
    onRequest(i) {
      return le().document.onRequest(i);
    },
    onViewRequest(i) {
      return le().document.onViewRequest(i);
    }
  },
  state: {
    get(i, r) {
      return le().state.get(i, r);
    },
    set(i, r, o) {
      return le().state.set(i, r, o);
    }
  },
  storage: {
    get(i, r) {
      return le().storage.get(i, r);
    },
    getAll(i) {
      return le().storage.getAll(i);
    },
    set(i, r, o) {
      return le().storage.set(i, r, o);
    },
    delete(i, r) {
      return le().storage.delete(i, r);
    },
    onChanged(i) {
      return le().storage.onChanged(i);
    },
    get global() {
      return le().storage.global;
    },
    agent(i) {
      return le().storage.agent(i);
    }
  },
  emit(i, r, o, c) {
    return le().emit(i, r, o, c);
  },
  track(i, r, o) {
    return le().track(i, r, o);
  },
  panel: {
    set(i, r) {
      return le().panel.set(i, r);
    },
    onEvent(i) {
      return le().panel.onEvent(i);
    },
    onRefresh(i) {
      return le().panel.onRefresh(i);
    }
  }
};
Zv(ng, () => Jv(le()));
function qr(i) {
  return i.hanaAppWindow;
}
function on(i) {
  const r = qr(i);
  if (!r) throw Object.assign(new Error("This App surface is not an App-owned native window."), { code: "APP_WINDOW_UNAVAILABLE" });
  return r;
}
function JE(i) {
  return (typeof window < "u" ? qr(i()) : void 0)?.onDocumentAction?.((o) => {
    const c = Vv(i().document, o, !0);
    if (c.ok === !1) throw Object.assign(new Error(c.error), { code: c.code });
    return c.result;
  }), {
    getContext: () => on(i()).getContext(),
    getDroppedResources: (o) => {
      const c = on(i());
      return c.getDroppedResources ? c.getDroppedResources([...o]) : Promise.reject(Object.assign(new Error("Update Hana to import dropped local resources."), { code: "APP_SDK_HOST_UNSUPPORTED" }));
    },
    request: (o) => on(i()).request(o),
    onRequest: (o) => on(i()).onRequest(o),
    onContextChanged: (o) => on(i()).onContextChanged(o),
    onInspect: (o) => {
      const c = on(i());
      if (!c.onInspect) throw Object.assign(new Error("Update Hana to register App window inspection."), { code: "APP_SDK_HOST_UNSUPPORTED" });
      return c.onInspect(o);
    },
    registerInspectionSurface: (o, c) => {
      const d = on(i());
      if (!d.registerInspectionSurface) throw Object.assign(new Error("Update Hana to register App inspection surfaces."), { code: "APP_SDK_HOST_UNSUPPORTED" });
      return d.registerInspectionSurface(o, c);
    },
    control: (o) => on(i()).control(o),
    close: () => on(i()).close()
  };
}
var kE = /* @__PURE__ */ new Set([
  "hana.app-surface.mount",
  "hana.app-surface.action",
  "hana.app-surface.native",
  De.TOAST_SHOW,
  De.EXTERNAL_OPEN,
  De.CLIPBOARD_WRITE_TEXT,
  De.RESOURCE_OPEN,
  De.RESOURCE_PICK,
  De.RESOURCE_SAVE_FILE,
  De.RESOURCE_REQUEST_ACCESS,
  De.STATE_GET,
  De.STATE_SET,
  De.PANEL_SET,
  De.EMIT,
  De.TRACK,
  ...Object.values(Ka),
  ...Object.values(Yv),
  Ro.SET_INTERACTIVE_REGIONS,
  "hana.document.get-context",
  "hana.document.read",
  "hana.document.report-status",
  "hana.document.open",
  "hana.document.rebind",
  "hana.document.open-drop"
]);
function lg() {
  if (typeof window > "u") throw new Error("@hana/app-sdk/ui requires a browser App iframe.");
  return window;
}
function FE(i) {
  if (!jo(i.location?.pathname ?? ""))
    throw new Error("@hana/app-sdk/ui requires an App surface route under /api/apps/:appId/ui/ or a scoped service mount.");
}
function $E(i) {
  if (!kE.has(i))
    throw new Error(`@hana/app-sdk/ui does not expose host request type: ${i}`);
}
function PE(i) {
  return {
    get global() {
      return i().storage.global;
    },
    agent(r) {
      return i().storage.agent(r);
    }
  };
}
function WE(i, r = lg, o = {}) {
  return {
    window: JE(r),
    surfaces: {
      onEvent(c, d) {
        if (typeof c != "string" || !c.trim() || c.length > 256 || typeof d != "function")
          throw new TypeError("surfaces.onEvent requires a surface id and a listener.");
        return on(r()).onMessage((h) => {
          const g = ku(h);
          if (!g.ok || g.value.kind !== "event" || g.value.type !== "hana.app-surface.event") return;
          const b = g.value.payload;
          if (!b || typeof b != "object" || Array.isArray(b)) return;
          const U = b;
          U.surfaceId !== c || typeof U.type != "string" || !U.type.trim() || d({ surfaceId: c, type: U.type, ...U.payload === void 0 ? {} : { payload: U.payload } });
        });
      }
    },
    appEvents: {
      on(c, d) {
        if (typeof c != "string" || !c.trim() || c.length > 128 || typeof d != "function") throw new TypeError("appEvents.on requires an event name and a listener.");
        const h = r(), g = jo(h.location?.pathname ?? "");
        if (!g)
          throw new Error("@hana/app-sdk/ui requires an App surface route under /api/apps/:appId/ui/ or a scoped service mount.");
        const b = g.appId, U = (D) => {
          const q = ku(D);
          if (!q.ok || q.value.kind !== "event" || q.value.type !== "hana.app.event") return;
          const Y = q.value.payload;
          Y?.source !== `app:${b}` || Y.type !== c || !Y.payload || typeof Y.payload != "object" || Array.isArray(Y.payload) || d(Y.payload);
        }, w = o.messageTransport ?? qr(h);
        if (w) return w.onMessage(U);
        const C = o.parentWindow ?? h.parent, v = xv(h, o.targetOrigin), z = (D) => {
          Mv(D, C, v) && U(D.data);
        };
        return h.addEventListener("message", z), () => h.removeEventListener("message", z);
      }
    },
    instances: {
      onChanged(c) {
        return on(r()).onMessage((d) => {
          if (!d || typeof d != "object") return;
          const h = d;
          if (h.protocol !== ut || h.version !== it || h.kind !== "event" || h.type !== "hana.app-instance.changed") return;
          const g = h.payload;
          g && typeof g.instanceId == "string" && typeof g.revision == "number" && Number.isSafeInteger(g.revision) && typeof g.state == "string" && c({ instanceId: g.instanceId, revision: g.revision, state: g.state });
        });
      }
    },
    environments: {
      onChanged(c) {
        if (typeof c != "function") throw new TypeError("environments.onChanged requires a listener.");
        return on(r()).onMessage((d) => {
          const h = ku(d);
          if (!h.ok || h.value.kind !== "event" || h.value.type !== "hana.app-environment.changed") return;
          const g = h.value.payload;
          g && typeof g.environmentId == "string" && typeof g.revision == "number" && Number.isSafeInteger(g.revision) && typeof g.state == "string" && c({ environmentId: g.environmentId, revision: g.revision, state: g.state });
        });
      }
    },
    ready(c) {
      return i().ready(c);
    },
    inputPanel: {
      getContext() {
        return i().inputPanel.getContext();
      },
      onContextChanged(c) {
        return i().inputPanel.onContextChanged(c);
      },
      onSubmit(c) {
        return i().inputPanel.onSubmit(c);
      },
      setPresentation(c) {
        return i().inputPanel.setPresentation(c);
      }
    },
    assets: { url(c) {
      return i().assets.url(c);
    } },
    api: {
      url(c) {
        return i().api.url(c);
      },
      fetch(c, d) {
        return i().api.fetch(c, d);
      }
    },
    ui: { resize(c) {
      return i().ui.resize(c);
    } },
    theme: {
      getSnapshot() {
        return i().theme.getSnapshot();
      },
      subscribe(c) {
        return i().theme.subscribe(c);
      }
    },
    envelope: {
      getSnapshot() {
        return i().envelope.getSnapshot();
      },
      subscribe(c) {
        return i().envelope.subscribe(c);
      }
    },
    lifecycle: {
      getSnapshot() {
        return i().lifecycle.getSnapshot();
      },
      subscribe(c) {
        return i().lifecycle.subscribe(c);
      }
    },
    cards: { open(c, d) {
      return i().cards.open(c, d);
    } },
    surface: {
      setInteractiveRegions(c, d) {
        return i().surface.setInteractiveRegions(c, d);
      },
      getContext() {
        return i().surface.getContext();
      },
      onContextChanged(c) {
        return i().surface.onContextChanged(c);
      }
    },
    sessions: {
      getActive(c) {
        return i().sessions.getActive(c);
      },
      focus(c, d) {
        return i().sessions.focus(c, d);
      },
      onActiveChanged(c, d) {
        return i().sessions.onActiveChanged(c, d);
      }
    },
    performance: {
      requestAnimationFrame(c) {
        return i().performance.requestAnimationFrame(c);
      },
      cancelAnimationFrame(c) {
        return i().performance.cancelAnimationFrame(c);
      }
    },
    chrome: {
      set(c, d) {
        return i().chrome.set(c, d);
      },
      onAction(c) {
        return i().chrome.onAction(c);
      },
      registerScrollSource(c) {
        return i().chrome.registerScrollSource(c);
      }
    },
    host: {
      request(c, d, h) {
        return $E(c), i().host.request(c, d, h);
      }
    },
    toast: { show(c, d) {
      return i().toast.show(c, d);
    } },
    external: { open(c, d) {
      return i().external.open(c, d);
    } },
    clipboard: { writeText(c, d) {
      return i().clipboard.writeText(c, d);
    } },
    resources: {
      open(c, d) {
        return i().resources.open(c, d);
      },
      pick(c, d) {
        return i().resources.pick(c, d);
      },
      saveFile(c, d) {
        return i().resources.saveFile(c, d);
      },
      requestAccess(c, d) {
        return i().resources.requestAccess(c, d);
      }
    },
    document: {
      getContext(c) {
        return i().document.getContext(c);
      },
      read(c) {
        return i().document.read(c);
      },
      reportStatus(c, d) {
        return i().document.reportStatus(c, d);
      },
      open(c, d) {
        return i().document.open(c, d);
      },
      rebind(c, d) {
        return i().document.rebind(c, d);
      },
      openDrop(c, d) {
        return i().document.openDrop(c, d);
      },
      onRequest(c) {
        return i().document.onRequest(c);
      },
      onViewRequest(c) {
        return i().document.onViewRequest(c);
      }
    },
    state: {
      get(c, d) {
        return i().state.get(c, d);
      },
      set(c, d, h) {
        return i().state.set(c, d, h);
      }
    },
    storage: PE(i),
    emit(c, d, h, g) {
      return i().emit(c, d, h, g);
    },
    track(c, d, h) {
      return i().track(c, d, h);
    },
    panel: {
      set(c, d) {
        return i().panel.set(c, d);
      },
      onEvent(c) {
        return i().panel.onEvent(c);
      },
      onRefresh(c) {
        return i().panel.onRefresh(c);
      }
    },
    viewState: {
      enable(c) {
        const d = Jv(i());
        return d ? d.enable(c) : Promise.reject(Object.assign(new Error("App view-state recovery is unavailable on this surface."), { code: "VIEW_STATE_UNAVAILABLE" }));
      }
    }
  };
}
var eb, bn = WE(() => {
  const i = lg();
  FE(i);
  const r = qr(i);
  return r ? eb ??= tg({ targetWindow: i, messageTransport: r }) : ng;
});
function $t(...i) {
  return i.filter(Boolean).join(" ");
}
const Uv = {
  "warm-paper": {
    bg: "#F8F5ED",
    bgCard: "#FCFAF5",
    accent: "#537D96",
    accentHover: "#456A80",
    accentLight: "rgba(83, 125, 150, 0.08)",
    text: "#3B3D3F",
    textLight: "#6B6F73",
    textMuted: "#8E9196",
    border: "rgba(83, 125, 150, 0.22)",
    danger: "#8B3A3A"
  },
  contemplation: {
    bg: "#F3F5F7",
    bgCard: "#F8F9FB",
    accent: "#7E99A8",
    accentHover: "#6B8594",
    accentLight: "rgba(126, 153, 168, 0.08)",
    text: "#2C3238",
    textLight: "#5A6570",
    textMuted: "#869098",
    border: "rgba(126, 153, 168, 0.22)",
    danger: "#8B4040"
  },
  "grass-aroma": {
    bg: "#F5F8F3",
    bgCard: "#F9FBF7",
    accent: "#5BA88C",
    accentHover: "#4D9179",
    accentLight: "rgba(91, 168, 140, 0.08)",
    text: "#2E3832",
    textLight: "#5E6B63",
    textMuted: "#8A9490",
    border: "rgba(91, 168, 140, 0.22)",
    danger: "#8B4A3A"
  },
  "high-contrast": {
    bg: "#FAF9F6",
    bgCard: "#FDFCFA",
    accent: "#3A6B85",
    accentHover: "#2E5870",
    accentLight: "rgba(58, 107, 133, 0.08)",
    text: "#1A1C1E",
    textLight: "#4A4E52",
    textMuted: "#6B6F73",
    border: "rgba(58, 107, 133, 0.28)",
    danger: "#7A3030"
  },
  midnight: {
    bg: "#3B4A54",
    bgCard: "#445560",
    accent: "#C99AAF",
    accentHover: "#D8AFC0",
    accentLight: "rgba(201, 154, 175, 0.11)",
    text: "#E1EAF0",
    textLight: "#B7C5CE",
    textMuted: "#A3B5C0",
    border: "rgba(170, 121, 141, 0.16)",
    danger: "#C77070"
  },
  "midnight-contrast": {
    bg: "#26343D",
    bgCard: "#30414B",
    accent: "#E6B1C4",
    accentHover: "#F0C4D3",
    accentLight: "rgba(230, 177, 196, 0.14)",
    text: "#F0F6FA",
    textLight: "#D3E0E8",
    textMuted: "#B7C8D3",
    border: "rgba(230, 177, 196, 0.26)",
    danger: "#E28B8B"
  },
  absolutely: {
    bg: "#F4F3EE",
    bgCard: "#FAF9F5",
    accent: "#B5846E",
    accentHover: "#A27460",
    accentLight: "rgba(181, 132, 110, 0.08)",
    text: "#2D2B28",
    textLight: "#6B6864",
    textMuted: "#9B9793",
    border: "rgba(177, 173, 161, 0.28)",
    danger: "#8B3A3A"
  },
  delve: {
    bg: "#FFFFFF",
    bgCard: "#F7F7F8",
    accent: "#1A1A1A",
    accentHover: "#000000",
    accentLight: "rgba(0, 0, 0, 0.05)",
    text: "#1A1A1A",
    textLight: "#6E6E6E",
    textMuted: "#999999",
    border: "rgba(0, 0, 0, 0.10)",
    danger: "#8B3A3A"
  },
  "deep-think": {
    bg: "#FCFCFD",
    bgCard: "#F8F8FA",
    accent: "#636AE8",
    accentHover: "#5158D4",
    accentLight: "rgba(99, 106, 232, 0.06)",
    text: "#1D1D1F",
    textLight: "#65656B",
    textMuted: "#95959C",
    border: "rgba(0, 0, 0, 0.09)",
    danger: "#8B3A3A"
  },
  "new-warm-paper": {
    bg: "#F5EFE4",
    bgCard: "#FBF7EE",
    accent: "#537D96",
    accentHover: "#3F6179",
    accentLight: "rgba(83, 125, 150, 0.08)",
    text: "#2A2622",
    textLight: "#4A433C",
    textMuted: "#6B6158",
    border: "#D8CFBE",
    danger: "#8B2C1F"
  }
}, tb = {
  bg: "--hana-plugin-bg",
  bgCard: "--hana-plugin-bg-card",
  accent: "--hana-plugin-accent",
  accentHover: "--hana-plugin-accent-hover",
  accentLight: "--hana-plugin-accent-light",
  text: "--hana-plugin-text",
  textLight: "--hana-plugin-text-light",
  textMuted: "--hana-plugin-text-muted",
  border: "--hana-plugin-border",
  danger: "--hana-plugin-danger",
  radiusInput: "--hana-plugin-radius-input",
  radiusCard: "--hana-plugin-radius-card",
  fontUi: "--hana-plugin-font-ui",
  fontSerif: "--hana-plugin-font-serif",
  fontMono: "--hana-plugin-font-mono"
};
function nb({ mode: i = "inherit", theme: r, className: o, style: c, children: d, "data-testid": h = "hana-plugin-theme", ...g }) {
  const b = typeof r == "string" ? r : void 0, U = lb(i, r);
  return y.jsx("div", { ...g, "data-testid": h, className: $t("hana-plugin-theme", o), "data-hana-theme-mode": i, "data-hana-theme": i === "hana" ? b : void 0, style: { ...U, ...c }, children: d });
}
function lb(i, r) {
  if (i === "inherit")
    return {};
  const o = ab(i, r), c = {};
  for (const [d, h] of Object.entries(tb)) {
    const g = o?.[d];
    g && (c[h] = g);
  }
  return c;
}
function ab(i, r) {
  if (typeof r == "string")
    return Uv[r];
  if (r)
    return r;
  if (i === "hana")
    return Uv["warm-paper"];
}
const Ut = k.forwardRef(function({ variant: r = "secondary", size: o = "md", loading: c = !1, iconLeft: d, iconRight: h, disabled: g, className: b, children: U, type: w = "button", ...C }, v) {
  return y.jsxs("button", { ...C, ref: v, type: w, disabled: g || c, className: $t("hana-plugin-button", `hana-plugin-button-${r}`, `hana-plugin-button-${o}`, c && "hana-plugin-button-loading", b), children: [c ? y.jsx("span", { className: "hana-plugin-spinner", "aria-hidden": !0 }) : d, U && y.jsx("span", { className: "hana-plugin-button-label", children: U }), !c && h] });
});
k.forwardRef(function({ label: r, size: o = "md", variant: c = "ghost", className: d, children: h, type: g = "button", ...b }, U) {
  return y.jsx("button", { ...b, ref: U, type: g, "aria-label": r, title: b.title || r, className: $t("hana-plugin-icon-button", `hana-plugin-icon-button-${o}`, `hana-plugin-icon-button-${c}`, d), children: h });
});
const _t = k.forwardRef(function({ label: r, hint: o, error: c, id: d, className: h, inputClassName: g, ...b }, U) {
  const w = k.useId(), C = d || w;
  return y.jsx(Ho, { label: r, hint: o, error: c, htmlFor: C, className: h, children: y.jsx("input", { ...b, ref: U, id: C, "aria-invalid": !!c, className: $t("hana-plugin-input", g) }) });
});
k.forwardRef(function({ label: r, hint: o, error: c, id: d, className: h, textareaClassName: g, rows: b = 4, ...U }, w) {
  const C = k.useId(), v = d || C;
  return y.jsx(Ho, { label: r, hint: o, error: c, htmlFor: v, className: h, children: y.jsx("textarea", { ...U, ref: w, id: v, rows: b, "aria-invalid": !!c, className: $t("hana-plugin-textarea", g) }) });
});
k.forwardRef(function({ checked: r, onChange: o, label: c, disabled: d, className: h, onClick: g, type: b = "button", ...U }, w) {
  const C = typeof c == "string" ? c : U["aria-label"];
  return y.jsxs("span", { className: $t("hana-plugin-switch-wrap", h), children: [y.jsx("button", { ...U, ref: w, type: b, role: "switch", "aria-checked": r, "aria-label": C, disabled: d, className: $t("hana-plugin-switch", r && "hana-plugin-switch-on"), onClick: (v) => {
    g?.(v), !v.defaultPrevented && !d && o?.(!r);
  }, children: y.jsx("span", { className: "hana-plugin-switch-thumb", "aria-hidden": !0 }) }), c && y.jsx("span", { className: "hana-plugin-switch-label", children: c })] });
});
function Dv({ options: i, value: r, onChange: o, label: c, hint: d, error: h, placeholder: g = "Select", disabled: b = !1, className: U }) {
  const [w, C] = k.useState(!1), v = i.find((Y) => Y.value === r), z = v?.label || g, D = typeof c == "string" ? c : void 0, q = [D, z].filter(Boolean).join(" ");
  return y.jsx(Ho, { label: c, hint: d, error: h, className: U, children: y.jsxs("div", { className: "hana-plugin-select", children: [y.jsxs("button", { type: "button", "aria-haspopup": "listbox", "aria-expanded": w, "aria-label": q || void 0, disabled: b, className: $t("hana-plugin-select-trigger", !v && "hana-plugin-select-placeholder"), onClick: () => C((Y) => !Y), children: [y.jsx("span", { className: "hana-plugin-select-value", children: z }), y.jsx("span", { className: "hana-plugin-select-arrow", "aria-hidden": !0, children: "▾" })] }), w && y.jsx("div", { className: "hana-plugin-select-popover", role: "listbox", "aria-label": D, children: i.map((Y) => y.jsx("button", { type: "button", role: "option", "aria-selected": Y.value === r, disabled: Y.disabled, className: $t("hana-plugin-select-option", Y.value === r && "hana-plugin-select-option-selected"), onClick: () => {
    Y.disabled || (o(Y.value), C(!1));
  }, children: Y.label }, Y.value)) })] }) });
}
function Ho({ label: i, hint: r, error: o, htmlFor: c, className: d, children: h }) {
  return y.jsxs("div", { className: $t("hana-plugin-field", d), children: [i && y.jsx("label", { className: "hana-plugin-field-label", htmlFor: c, children: i }), r && y.jsx("div", { className: "hana-plugin-field-hint", children: r }), h, o && y.jsx("div", { className: "hana-plugin-field-error", children: o })] });
}
function Cl({ title: i, description: r, actions: o, footer: c, children: d, className: h, ...g }) {
  return y.jsxs("section", { ...g, className: $t("hana-plugin-card", h), children: [(i || r || o) && y.jsxs("header", { className: "hana-plugin-card-header", children: [y.jsxs("div", { className: "hana-plugin-card-heading", children: [i && y.jsx("h2", { className: "hana-plugin-card-title", children: i }), r && y.jsx("p", { className: "hana-plugin-card-description", children: r })] }), o && y.jsx("div", { className: "hana-plugin-card-actions", children: o })] }), y.jsx("div", { className: "hana-plugin-card-body", children: d }), c && y.jsx("footer", { className: "hana-plugin-card-footer", children: c })] });
}
function ai({ icon: i, title: r, description: o, action: c, className: d, ...h }) {
  return y.jsxs("div", { ...h, className: $t("hana-plugin-empty", d), children: [i && y.jsx("div", { className: "hana-plugin-empty-icon", children: i }), y.jsx("div", { className: "hana-plugin-empty-title", children: r }), o && y.jsx("div", { className: "hana-plugin-empty-description", children: o }), c && y.jsx("div", { className: "hana-plugin-empty-action", children: c })] });
}
function ub({ items: i, className: r, ...o }) {
  return y.jsx("ul", { ...o, className: $t("hana-plugin-list", r), children: i.map((c) => y.jsxs("li", { className: "hana-plugin-list-item", children: [c.icon && y.jsx("div", { className: "hana-plugin-list-icon", children: c.icon }), y.jsxs("div", { className: "hana-plugin-list-main", children: [y.jsxs("div", { className: "hana-plugin-list-line", children: [y.jsx("span", { className: "hana-plugin-list-title", children: c.title }), c.meta && y.jsx("span", { className: "hana-plugin-list-meta", children: c.meta })] }), c.description && y.jsx("div", { className: "hana-plugin-list-description", children: c.description })] }), c.action && y.jsx("div", { className: "hana-plugin-list-action", children: c.action })] }, c.id)) });
}
const ag = (i) => i.replace(/^\/+/, "");
async function ug(i) {
  const r = await i.text();
  try {
    return JSON.parse(r);
  } catch {
    return { ok: !1, stage: "http", message: `HTTP ${i.status}：${(r || "无响应体").slice(0, 200)}` };
  }
}
async function Tt(i) {
  const r = await bn.api.fetch(ag(i));
  return ug(r);
}
async function Fn(i, r) {
  const o = await bn.api.fetch(ag(i), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(r)
  });
  return ug(o);
}
async function ig(i = 480 * 1e3) {
  const r = Date.now();
  for (; Date.now() - r < i; ) {
    await new Promise((c) => setTimeout(c, 5e3));
    const o = await Tt("/api/import/status").catch(() => null);
    if (o && o.running === !1 && o.lastResult) return o.lastResult;
  }
  return { ok: !1, stage: "timeout", message: "等待超时（8 分钟），任务可能仍在运行；稍后到「待办 · 导入失败」查看结果。" };
}
const zn = (i) => `/api/file?path=${encodeURIComponent(i)}`, ib = [
  { id: "home", label: "首页" },
  { id: "use", label: "取用" },
  { id: "library", label: "结构库" },
  { id: "todo", label: "待办" },
  { id: "settings", label: "设置" }
], rb = {
  use: [
    { id: "search", label: "检索" },
    { id: "models", label: "写作模型" }
  ],
  library: [
    { id: "browse", label: "篇目" },
    { id: "compare", label: "对比" },
    { id: "board", label: "看板" }
  ],
  todo: [
    { id: "score", label: "录评分" },
    { id: "queue", label: "标签裁决" },
    { id: "import-fail", label: "导入失败" }
  ]
};
function cb(i) {
  return i.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Ol(i) {
  return cb(i).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
}
function sb(i) {
  const r = String(i || "").split(/\r?\n/), o = [];
  let c = 0, d = !1;
  const h = () => {
    d && (o.push("</ul>"), d = !1);
  };
  for (; c < r.length; ) {
    const g = r[c];
    if (/^\|.*\|/.test(g) && c + 1 < r.length && /^\|\s*-+/.test(r[c + 1])) {
      h();
      const b = g.split("|").slice(1, -1).map((w) => w.trim());
      c += 2;
      const U = [];
      for (; c < r.length && /^\|/.test(r[c]); )
        U.push(r[c].split("|").slice(1, -1).map((w) => w.trim())), c++;
      o.push("<table><thead><tr>" + b.map((w) => `<th>${Ol(w)}</th>`).join("") + "</tr></thead><tbody>");
      for (const w of U) o.push("<tr>" + w.map((C) => `<td>${Ol(C)}</td>`).join("") + "</tr>");
      o.push("</tbody></table>");
      continue;
    }
    /^###\s/.test(g) ? (h(), o.push(`<h3>${Ol(g.slice(4))}</h3>`)) : /^##\s/.test(g) ? (h(), o.push(`<h2>${Ol(g.slice(3))}</h2>`)) : /^#\s/.test(g) ? (h(), o.push(`<h1>${Ol(g.slice(2))}</h1>`)) : /^>\s?/.test(g) ? (h(), o.push(`<blockquote>${Ol(g.replace(/^>\s?/, ""))}</blockquote>`)) : /^-\s/.test(g) || /^\*\s/.test(g) ? (d || (o.push("<ul>"), d = !0), o.push(`<li>${Ol(g.slice(2))}</li>`)) : /^---+\s*$/.test(g) ? (h(), o.push("<hr>")) : g.trim() === "" ? h() : (h(), o.push(`<p>${Ol(g)}</p>`)), c++;
  }
  return h(), o.join(`
`);
}
function ei({ md: i }) {
  return /* @__PURE__ */ y.jsx("div", { className: "doc", dangerouslySetInnerHTML: { __html: sb(i) } });
}
async function Rl(i) {
  const r = await Tt(`/api/list?dir=${encodeURIComponent(i)}`);
  return r.ok ? (r.items || []).filter((o) => !o.isDirectory && o.name.endsWith(".md") && o.name !== "_模板.md").map((o) => o.name) : [];
}
function Lo(i) {
  const r = String(i || "").split(/\r?\n/), o = [];
  let c = !1;
  for (const d of r) {
    if (d.startsWith("## ")) {
      c = d.includes("复核队列");
      continue;
    }
    if (c && d.startsWith("|") && !/^\|\s*-+/.test(d)) {
      const h = d.split("|").slice(1, -1).map((g) => g.trim());
      h[0] && h[0] !== "疑似对" && o.push({ pair: h[0], evidence: h[1] || "", date: h[2] || "", decision: h[3] || "" });
    }
  }
  return o;
}
async function ob() {
  const [i, r, o, c] = await Promise.all([
    Rl("篇目"),
    Rl("写作模型"),
    Tt(zn("标签库.md")),
    Tt("/api/import/failures").catch(() => ({ ok: !1, items: [] }))
  ]), d = o.ok ? Lo(o.content) : [];
  return {
    papers: i.length,
    models: r.length,
    queuePending: d.filter((h) => !h.decision).length,
    failures: (c.items || []).length
  };
}
function fb() {
  const i = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), [r, o] = k.useState({ id: "", title: "", authors: "", year: "", venue: "", textType: "", score: "9", rationale: "", date: i, recordedBy: "" }), [c, d] = k.useState(null), h = (b, U) => o((w) => ({ ...w, [b]: U }));
  async function g() {
    const b = {
      id: r.id.trim(),
      title: r.title.trim(),
      authors: r.authors.trim(),
      year: r.year.trim(),
      venue: r.venue.trim() || void 0,
      textType: r.textType.trim(),
      score: Number(r.score),
      rationale: r.rationale.trim(),
      date: r.date,
      recordedBy: r.recordedBy.trim()
    }, U = await Fn("/api/tool/commit_anchor", { anchor: b });
    d(U), U.ok && bn.toast.show({ message: "评分已落盘", type: "success" });
  }
  return /* @__PURE__ */ y.jsxs("div", { className: "form", children: [
    /* @__PURE__ */ y.jsx("p", { className: "hint", children: "你自己的总分和理由是整条评分链的起点：只增不改，理由至少 10 字，后续归纳评分指引全靠它。" }),
    /* @__PURE__ */ y.jsxs("div", { className: "grid2", children: [
      /* @__PURE__ */ y.jsx(_t, { label: "篇目 id（slug-年）", value: r.id, onChange: (b) => h("id", b.currentTarget.value), placeholder: "sample-2020" }),
      /* @__PURE__ */ y.jsx(_t, { label: "文本类型（你判）", value: r.textType, onChange: (b) => h("textType", b.currentTarget.value), placeholder: "论证型 / 阐释型…" }),
      /* @__PURE__ */ y.jsx(_t, { label: "标题", value: r.title, onChange: (b) => h("title", b.currentTarget.value) }),
      /* @__PURE__ */ y.jsx(_t, { label: "作者", value: r.authors, onChange: (b) => h("authors", b.currentTarget.value) }),
      /* @__PURE__ */ y.jsx(_t, { label: "年份", value: r.year, onChange: (b) => h("year", b.currentTarget.value) }),
      /* @__PURE__ */ y.jsx(_t, { label: "出处（可空）", value: r.venue, onChange: (b) => h("venue", b.currentTarget.value) }),
      /* @__PURE__ */ y.jsx(_t, { label: "总分 1-10", value: r.score, onChange: (b) => h("score", b.currentTarget.value) }),
      /* @__PURE__ */ y.jsx(_t, { label: "日期", value: r.date, onChange: (b) => h("date", b.currentTarget.value) })
    ] }),
    /* @__PURE__ */ y.jsx(_t, { label: "理由（≥10 字）", value: r.rationale, onChange: (b) => h("rationale", b.currentTarget.value) }),
    /* @__PURE__ */ y.jsx(_t, { label: "录入者", value: r.recordedBy, onChange: (b) => h("recordedBy", b.currentTarget.value) }),
    /* @__PURE__ */ y.jsx(Ut, { variant: "primary", onClick: g, children: "提交评分" }),
    c && /* @__PURE__ */ y.jsx("pre", { className: c.ok ? "ok" : "err", children: c.ok ? `已写入：${c.file || "(dry run)"}` : JSON.stringify(c, null, 2) })
  ] });
}
function db({ tick: i }) {
  const [r, o] = k.useState([]), [c, d] = k.useState({}), [h, g] = k.useState(""), b = k.useCallback(async () => {
    const C = await Tt(zn("标签库.md"));
    o(C.ok ? Lo(C.content) : []);
  }, []);
  k.useEffect(() => {
    b();
  }, [b, i]);
  async function U(C, v, z) {
    const D = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), q = c[C] || `裁决执行：${C}`, Y = await Fn("/api/tool/apply_tag_merge", { mergedLabel: v, target: z, date: D, evidence: q });
    g(Y.ok ? `已执行：${v} → ${Y.now}` : Y.message || JSON.stringify(Y)), Y.ok && await b();
  }
  const w = r.filter((C) => !C.decision);
  return /* @__PURE__ */ y.jsxs("div", { children: [
    /* @__PURE__ */ y.jsx("p", { className: "hint", children: "相近标签会进到这里，由你决定合并方向；裁决后库内归一，原始记录不动。" }),
    r.length === 0 && /* @__PURE__ */ y.jsx(ai, { title: "暂无待裁决标签", description: "篇目积累出相近标签后，候选会自动出现在这里。" }),
    r.map((C) => /* @__PURE__ */ y.jsx(Cl, { title: C.pair, description: `${C.date} 进队 · ${C.evidence}`, children: C.decision ? /* @__PURE__ */ y.jsxs("p", { className: "decided", children: [
      "已裁决：",
      C.decision
    ] }) : /* @__PURE__ */ y.jsxs("div", { className: "queue-actions", children: [
      [C.pair.split(" vs ")[0], C.pair.split(" vs ")[1]].filter(Boolean).map((v, z, D) => /* @__PURE__ */ y.jsx("div", { className: "queue-op", children: /* @__PURE__ */ y.jsxs(Ut, { onClick: () => U(C.pair, v, D[1 - z]), children: [
        "「",
        v,
        "」并入「",
        D[1 - z],
        "」"
      ] }) }, v)),
      /* @__PURE__ */ y.jsx(_t, { label: "依据（可空）", value: c[C.pair] || "", onChange: (v) => d((z) => ({ ...z, [C.pair]: v.currentTarget.value })) })
    ] }) }, C.pair)),
    w.length > 0 && null,
    h && /* @__PURE__ */ y.jsx("p", { className: h.startsWith("已") ? "ok" : "err", children: h })
  ] });
}
function hb({ tick: i }) {
  const [r, o] = k.useState([]), [c, d] = k.useState(""), [h, g] = k.useState("");
  return k.useEffect(() => {
    Rl("篇目").then((b) => o(b));
  }, [i]), k.useEffect(() => {
    if (!c) {
      g("");
      return;
    }
    Tt(zn(`篇目/${c}`)).then((b) => g(b.ok ? b.content : b.message || "读取失败"));
  }, [c]), r.length ? /* @__PURE__ */ y.jsxs("div", { className: "split", children: [
    /* @__PURE__ */ y.jsxs("div", { className: "side", children: [
      /* @__PURE__ */ y.jsx(ub, { items: r.map((b) => ({ id: b, title: b.replace(/\.md$/, ""), meta: "" })) }),
      /* @__PURE__ */ y.jsx("div", { className: "filebtns", children: r.map((b) => /* @__PURE__ */ y.jsx("button", { className: c === b ? "filebtn on" : "filebtn", onClick: () => d(b), children: b.replace(/\.md$/, "") }, b)) })
    ] }),
    /* @__PURE__ */ y.jsx("div", { className: "main", children: c ? /* @__PURE__ */ y.jsx(ei, { md: h }) : /* @__PURE__ */ y.jsx("p", { className: "hint", children: "左侧选篇查看（每条登记都带位置与原文引文）。" }) })
  ] }) : /* @__PURE__ */ y.jsx(ai, { title: "还没有篇目", description: "导入文献或在对话里拆解后，篇目会出现在这里。" });
}
function mb({ tick: i }) {
  const [r, o] = k.useState([]), [c, d] = k.useState(""), [h, g] = k.useState(""), [b, U] = k.useState(""), [w, C] = k.useState("");
  if (k.useEffect(() => {
    Rl("篇目").then((z) => {
      o(z), z[0] && d(z[0]), z[1] && g(z[1]);
    });
  }, [i]), k.useEffect(() => {
    c && Tt(zn(`篇目/${c}`)).then((z) => U(z.ok ? z.content : ""));
  }, [c]), k.useEffect(() => {
    h && Tt(zn(`篇目/${h}`)).then((z) => C(z.ok ? z.content : ""));
  }, [h]), r.length < 2) return /* @__PURE__ */ y.jsx(ai, { title: "至少两篇可对比", description: "先积累两篇以上篇目。" });
  const v = r.map((z) => ({ value: z, label: z.replace(/\.md$/, "") }));
  return /* @__PURE__ */ y.jsxs("div", { children: [
    /* @__PURE__ */ y.jsxs("div", { className: "grid2", children: [
      /* @__PURE__ */ y.jsx(Dv, { value: c, onChange: d, options: v }),
      /* @__PURE__ */ y.jsx(Dv, { value: h, onChange: g, options: v })
    ] }),
    /* @__PURE__ */ y.jsxs("div", { className: "compare", children: [
      /* @__PURE__ */ y.jsx("div", { className: "col", children: /* @__PURE__ */ y.jsx(ei, { md: b }) }),
      /* @__PURE__ */ y.jsx("div", { className: "col", children: /* @__PURE__ */ y.jsx(ei, { md: w }) })
    ] })
  ] });
}
function vb({ tick: i }) {
  const [r, o] = k.useState(null);
  if (k.useEffect(() => {
    (async () => {
      const [d, h, g, b, U, w] = await Promise.all([
        Rl("篇目"),
        Rl("锚点样本"),
        Rl("写作模型"),
        Tt(zn("标签库.md")),
        Tt(zn("闭包映射表.md")),
        Tt(zn("类型库.md"))
      ]), C = b.ok ? wo(b.content, "标签") : [], v = b.ok ? Lo(b.content) : [], z = U.ok ? wo(U.content, "from") : [], D = w.ok ? wo(w.content, "类型") : [];
      o({
        papers: d.length,
        anchors: h.length,
        models: g.length,
        tags: C,
        queuePending: v.filter((q) => !q.decision).length,
        mapRows: z,
        types: D
      });
    })();
  }, [i]), !r) return /* @__PURE__ */ y.jsx("p", { className: "hint", children: "统计中…" });
  const c = r.papers ? Math.round(r.anchors / r.papers * 100) : 0;
  return /* @__PURE__ */ y.jsxs("div", { className: "cards", children: [
    /* @__PURE__ */ y.jsx(Cl, { title: `篇目 ${r.papers}`, description: "已完成的篇目" }),
    /* @__PURE__ */ y.jsx(Cl, { title: `锚点 ${r.anchors}`, description: `锚点覆盖度 ${c}%（置信度依据之一）` }),
    /* @__PURE__ */ y.jsx(Cl, { title: `标签 ${r.tags.length}`, description: `待裁决 ${r.queuePending}` }),
    /* @__PURE__ */ y.jsx(Cl, { title: `类型 ${r.types.length}`, description: `映射表 ${r.mapRows.length} 行` }),
    /* @__PURE__ */ y.jsx(Cl, { title: `写作模型 ${r.models}`, description: "版本化产物" }),
    /* @__PURE__ */ y.jsx(Cl, { title: "描述性 / 规范性频率", description: "描述与规范分开统计；篇目与锚点积累后按类型分组计算。" })
  ] });
}
function wo(i, r) {
  const o = String(i || "").split(/\r?\n/), c = [];
  let d = !1;
  for (const h of o)
    if (h.startsWith("|") && !/^\|\s*-+/.test(h)) {
      const g = h.split("|").slice(1, -1).map((b) => b.trim());
      if (g[0] === r) {
        d = !0;
        continue;
      }
      d && g[0] && g[0] !== "（暂无）" && c.push(g[0]);
    } else d && !h.startsWith("|") && (d = !1);
  return c;
}
function gb({ tick: i }) {
  const [r, o] = k.useState([]), [c, d] = k.useState(""), [h, g] = k.useState("");
  return k.useEffect(() => {
    Rl("写作模型").then(o);
  }, [i]), k.useEffect(() => {
    if (!c) {
      g("");
      return;
    }
    Tt(zn(`写作模型/${c}`)).then((b) => g(b.ok ? b.content : ""));
  }, [c]), r.length ? /* @__PURE__ */ y.jsxs("div", { children: [
    /* @__PURE__ */ y.jsx("div", { className: "filebtns", children: r.map((b) => /* @__PURE__ */ y.jsx("button", { className: c === b ? "filebtn on" : "filebtn", onClick: () => d(b), children: b.replace(/\.md$/, "") }, b)) }),
    c ? /* @__PURE__ */ y.jsx(ei, { md: h }) : /* @__PURE__ */ y.jsx("p", { className: "hint", children: "选择一份模型查看（规律描述 + 骨架挂实例 + 高低分差异点）。" })
  ] }) : /* @__PURE__ */ y.jsx(ai, { title: "暂无写作模型", description: "标签与类型积累后自动生成（版本递增，历史不覆盖）。" });
}
function pb() {
  const [i, r] = k.useState(""), [o, c] = k.useState([]), [d, h] = k.useState(null), [g, b] = k.useState("");
  async function U() {
    if (!i.trim()) return;
    const w = await Tt(`/api/search?query=${encodeURIComponent(i.trim())}`);
    c(w.ok ? w.results : []), h(null);
  }
  return k.useEffect(() => {
    if (!d) {
      b("");
      return;
    }
    Tt(zn(d.path)).then((w) => b(w.ok ? w.content : "读取失败"));
  }, [d]), /* @__PURE__ */ y.jsxs("div", { children: [
    /* @__PURE__ */ y.jsx("p", { className: "hint", children: "按关键词物理命中排序帮你收窄候选，取舍仍由你判断；引用时带篇目位置与原文引文。" }),
    /* @__PURE__ */ y.jsxs("div", { className: "searchbar", children: [
      /* @__PURE__ */ y.jsx(
        _t,
        {
          label: "关键词（空格 / 、 分隔）",
          value: i,
          onChange: (w) => r(w.currentTarget.value),
          placeholder: "例：反驳 开头",
          onKeyDown: (w) => {
            w.key === "Enter" && U();
          }
        }
      ),
      /* @__PURE__ */ y.jsx(Ut, { variant: "primary", onClick: () => {
        U();
      }, children: "搜索" })
    ] }),
    /* @__PURE__ */ y.jsxs("div", { className: "searchresults", children: [
      o.map((w) => /* @__PURE__ */ y.jsxs("div", { className: d?.path === w.path ? "searchhit on" : "searchhit", children: [
        /* @__PURE__ */ y.jsxs("div", { className: "searchhit-head", onClick: () => h(w), children: [
          /* @__PURE__ */ y.jsx("span", { className: "badge", children: w.kind }),
          /* @__PURE__ */ y.jsx("b", { children: w.title }),
          /* @__PURE__ */ y.jsxs("span", { className: "hint", children: [
            "命中 ",
            w.score,
            " · ",
            w.path
          ] })
        ] }),
        d?.path !== w.path && w.hits?.slice(0, 2).map((C, v) => /* @__PURE__ */ y.jsxs("div", { className: "hitline", children: [
          "L",
          C.line,
          ": ",
          C.excerpt,
          C.text
        ] }, v))
      ] }, w.path)),
      !o.length && /* @__PURE__ */ y.jsx("p", { className: "hint", children: "输入关键词后搜索；结果按命中度排序，点击标题展开全文。" })
    ] }),
    d && /* @__PURE__ */ y.jsxs("div", { className: "searchpreview", children: [
      /* @__PURE__ */ y.jsx("h4", { children: d.title }),
      /* @__PURE__ */ y.jsx(ei, { md: g })
    ] })
  ] });
}
function yb() {
  const [i, r] = k.useState(""), [o, c] = k.useState(""), [d, h] = k.useState("2"), [g, b] = k.useState("");
  k.useEffect(() => {
    Tt("/api/config").then((w) => {
      w.ok && w.config ? (r((w.config.markers || []).join("、")), c(w.config.libraryPath || ""), h(String(w.config.maxPerRun ?? 2))) : b(w.message || "配置读取失败");
    });
  }, []);
  async function U() {
    b("保存中…");
    const w = await Fn("/api/config", {
      markers: i.split(/[\s、，,;；]+/).map((C) => C.trim()).filter(Boolean),
      libraryPath: o.trim(),
      maxPerRun: Number(d) || 2
    });
    b(w.ok ? "已保存" : `保存失败：${w.message || "未知错误"}`);
  }
  return /* @__PURE__ */ y.jsxs("div", { className: "settings", children: [
    /* @__PURE__ */ y.jsx("p", { className: "hint", children: "会话名命中标定词才会收到结构推荐；标定词留空 = 全静默，不向任何会话推送。" }),
    /* @__PURE__ */ y.jsx(
      _t,
      {
        label: "会话标定词（、或逗号分隔，含任一即放行）",
        value: i,
        onChange: (w) => r(w.currentTarget.value),
        placeholder: "例：构成性、论文、写作"
      }
    ),
    /* @__PURE__ */ y.jsx(
      _t,
      {
        label: "结构库路径（留空用默认；改后重启 Hana 生效）",
        value: o,
        onChange: (w) => c(w.currentTarget.value),
        placeholder: "默认：workspace 写作模型插件/结构库"
      }
    ),
    /* @__PURE__ */ y.jsx(
      _t,
      {
        label: "单次推荐上限（1-2，设计上限 2）",
        value: d,
        onChange: (w) => h(w.currentTarget.value)
      }
    ),
    /* @__PURE__ */ y.jsxs("div", { className: "saverow", children: [
      /* @__PURE__ */ y.jsx(Ut, { variant: "primary", onClick: () => {
        U();
      }, children: "保存" }),
      g && /* @__PURE__ */ y.jsx("span", { className: "savehint", children: g })
    ] }),
    /* @__PURE__ */ y.jsx("p", { className: "hint", children: "命中判定：标定词过闸后，取最近对话文本与标签库/类型库做字典交集，交集词走共用检索层出候选；候选只附命中事实，采纳与否由会话内模型判断。同会话已注入条目不重复推。" })
  ] });
}
function Eb({ onDone: i }) {
  const [r, o] = k.useState(""), [c, d] = k.useState(!1), [h, g] = k.useState(null), [b, U] = k.useState(!1), [w, C] = k.useState(!1);
  async function v(q, Y) {
    d(!0), g(null);
    try {
      const X = await Fn("/api/import", Y !== void 0 ? { ...q, fromTs: Y } : q);
      if (!X.started) {
        g(X), d(!1);
        return;
      }
      g({ ok: !0, stage: "running", message: X.message || "拆解进行中" });
      const ue = await ig();
      g(ue), ue.ok ? (bn.toast.show({ message: "拆解完成，已入库", type: "success" }), i()) : ue.failureTs && (bn.toast.show({ message: "拆解失败，已记入待办", type: "error" }), i());
    } catch (X) {
      g({ ok: !1, stage: "network", message: String(X?.message || X) });
    }
    d(!1);
  }
  async function z(q, Y) {
    const X = String(q || "").trim();
    if (!X) {
      g({ ok: !1, stage: "input", message: "请先粘贴文献全文，或选择 / 拖入 md、txt、pdf 文件" });
      return;
    }
    await v({ text: X }, Y);
  }
  async function D(q) {
    if (/\.pdf$/i.test(q.name)) {
      if (q.size > 50 * 1024 * 1024) {
        g({ ok: !1, stage: "input", message: "PDF 超过 50 MB 上限" });
        return;
      }
      try {
        const Y = await new Promise((X, ue) => {
          const ye = new FileReader();
          ye.onload = () => X(String(ye.result).split(",")[1] || ""), ye.onerror = () => ue(new Error("文件读取失败")), ye.readAsDataURL(q);
        });
        await v({ pdfBase64: Y, filename: q.name });
      } catch (Y) {
        g({ ok: !1, stage: "input", message: String(Y?.message || Y) });
      }
      return;
    }
    if (!/\.(md|txt)$/i.test(q.name)) {
      g({ ok: !1, stage: "input", message: "支持 md / txt / pdf 文件" });
      return;
    }
    await v({ text: await q.text() });
  }
  return /* @__PURE__ */ y.jsxs("div", { className: "import-zone", children: [
    /* @__PURE__ */ y.jsx("h4", { className: "import-title", children: "导入文献" }),
    /* @__PURE__ */ y.jsxs(
      "div",
      {
        className: b ? "drop on" : "drop",
        onDragOver: (q) => {
          q.preventDefault(), U(!0);
        },
        onDragLeave: () => U(!1),
        onDrop: (q) => {
          q.preventDefault(), U(!1);
          const Y = q.dataTransfer.files?.[0];
          Y && D(Y);
        },
        children: [
          /* @__PURE__ */ y.jsx("p", { children: "把 .md / .txt / .pdf 文献拖到这里" }),
          /* @__PURE__ */ y.jsxs("label", { className: "filepick", children: [
            "或选择文件",
            /* @__PURE__ */ y.jsx(
              "input",
              {
                type: "file",
                accept: ".md,.txt,.pdf,text/plain,text/markdown,application/pdf",
                style: { display: "none" },
                onChange: (q) => {
                  const Y = q.target.files?.[0];
                  q.target.value = "", Y && D(Y);
                }
              }
            )
          ] }),
          /* @__PURE__ */ y.jsxs("p", { className: "hint zotero-toggle", children: [
            "或",
            /* @__PURE__ */ y.jsx("button", { className: "linkbtn", onClick: () => C((q) => !q), children: w ? "收起 Zotero" : "从 Zotero 取" })
          ] })
        ]
      }
    ),
    w && /* @__PURE__ */ y.jsx(bb, { submit: (q) => v(q), busy: c }),
    /* @__PURE__ */ y.jsx(
      "textarea",
      {
        className: "pastebox",
        value: r,
        onChange: (q) => o(q.target.value),
        placeholder: "也可以直接粘贴文献全文…",
        rows: 4,
        disabled: c
      }
    ),
    /* @__PURE__ */ y.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ y.jsx(Ut, { variant: "primary", disabled: c || !r.trim(), onClick: () => {
        z(r);
      }, children: "一键拆解" }),
      c && /* @__PURE__ */ y.jsx("span", { className: "hint", children: "正在拆解：提取（PDF 先转文本）→ 落格校验 → 入库（约 1-3 分钟，可离开本页，完成后有提示）…" })
    ] }),
    h && /* @__PURE__ */ y.jsx("pre", { className: h.ok ? "ok" : "err", children: h.ok ? h.stage === "running" ? `${h.message || "拆解进行中…"}` : `已入库：${h.file}（第 ${h.attempts} 次通过${h.tagsAdded?.length ? `，新增标签 ${h.tagsAdded.join("、")}` : ""}）` + (h.pdfEngine ? `
PDF 引擎：${h.pdfEngine === "pymupdf" ? "PyMuPDF" : "unpdf（回退）—— 安装 PyMuPDF 可启用更稳的主引擎：python -m pip install pymupdf"}` : "") : `${h.message || "拆解失败"}${h.errors?.length ? `
` + h.errors.slice(0, 6).map((q) => `· ${q.field}：${q.message}`).join(`
`) : ""}${h.failureTs ? `
（已记入待办，可到「待办 · 导入失败」重试）` : ""}` })
  ] });
}
function bb({ submit: i, busy: r }) {
  const [o, c] = k.useState(""), [d, h] = k.useState(null), [g, b] = k.useState(null), [U, w] = k.useState([]), [C, v] = k.useState(""), [z, D] = k.useState(!1);
  async function q() {
    D(!0), v(""), b(null), w([]);
    try {
      const Q = await Fn("/api/tool/zotero_search", { query: o, limit: 20 });
      Q && Array.isArray(Q.items) ? (h(Q.items), Q.items.length || v("没有命中条目")) : v(Q?.message || "Zotero 查询失败");
    } catch (Q) {
      v(String(Q?.message || Q));
    }
    D(!1);
  }
  async function Y(Q) {
    if (g === Q) {
      b(null);
      return;
    }
    D(!0), v("");
    try {
      const G = await Fn("/api/tool/zotero_item", { key: Q });
      G && G.item ? (w(G.attachments || []), b(Q)) : v(G?.message || "条目读取失败");
    } catch (G) {
      v(String(G?.message || G));
    }
    D(!1);
  }
  async function X(Q) {
    try {
      const G = await Fn("/api/tool/zotero_attachment_path", { attachmentKey: Q });
      if (G && G.path) return String(G.path);
      v(G?.message || "附件路径解析失败");
    } catch (G) {
      v(String(G?.message || G));
    }
    return null;
  }
  async function ue(Q) {
    const G = await X(Q.key);
    G && await i({ pdfPath: G, filename: Q.filename || "" });
  }
  async function ye(Q) {
    const G = await X(Q.key);
    if (G)
      try {
        await bn.clipboard.writeText(G), bn.toast.show({ message: "路径已复制", type: "success" });
      } catch {
        v(`复制失败，路径：${G}`);
      }
  }
  return /* @__PURE__ */ y.jsxs("div", { className: "zbox", children: [
    /* @__PURE__ */ y.jsx("p", { className: "hint", children: "需 Zotero 桌面端运行，且设置 → 高级 → 勾选「Allow other applications on this computer to communicate with Zotero」。" }),
    /* @__PURE__ */ y.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ y.jsx(
        _t,
        {
          label: "搜索（标题 / 作者 / 年份；留空 = 最近添加）",
          value: o,
          onChange: (Q) => c(Q.currentTarget.value),
          onKeyDown: (Q) => {
            Q.key === "Enter" && q();
          }
        }
      ),
      /* @__PURE__ */ y.jsx(Ut, { disabled: z || r, onClick: () => {
        q();
      }, children: "搜索" })
    ] }),
    C && /* @__PURE__ */ y.jsx("p", { className: "err", children: C }),
    d && d.length > 0 && /* @__PURE__ */ y.jsx("div", { className: "zlist", children: d.map((Q) => /* @__PURE__ */ y.jsxs("div", { className: "zitem", children: [
      /* @__PURE__ */ y.jsxs("div", { className: "zitem-head", onClick: () => {
        Y(Q.key);
      }, children: [
        /* @__PURE__ */ y.jsx("b", { children: Q.title || "（无标题）" }),
        /* @__PURE__ */ y.jsx("span", { className: "hint", children: [Q.creators, Q.date, Q.publicationTitle].filter(Boolean).join(" · ") })
      ] }),
      g === Q.key && /* @__PURE__ */ y.jsxs("div", { className: "zattach", children: [
        U.length === 0 && /* @__PURE__ */ y.jsx("p", { className: "hint", children: "无附件" }),
        U.map((G) => /* @__PURE__ */ y.jsxs("div", { className: "zattach-row", children: [
          /* @__PURE__ */ y.jsx("span", { className: "zattach-name", children: G.filename || G.contentType || G.key }),
          /* @__PURE__ */ y.jsxs("span", { className: "zattach-actions", children: [
            /\.pdf$/i.test(G.filename || "") && /* @__PURE__ */ y.jsx(Ut, { variant: "primary", disabled: r || z, onClick: () => {
              ue(G);
            }, children: "导入拆解" }),
            /* @__PURE__ */ y.jsx(Ut, { disabled: z, onClick: () => {
              ye(G);
            }, children: "复制路径" })
          ] })
        ] }, G.key))
      ] })
    ] }, Q.key)) })
  ] });
}
function Sb({ stats: i, go: r, onDone: o }) {
  const c = i ? i.queuePending + i.failures : 0, [d, h] = k.useState("loading");
  return k.useEffect(() => {
    Tt("/api/config").then((g) => {
      const b = g?.config?.libraryPath ?? "";
      h(b && !String(b).startsWith("NOT_CONFIGURED") ? "ok" : "unconfigured");
    }).catch(() => h("loading"));
  }, []), /* @__PURE__ */ y.jsxs("div", { className: "home", children: [
    /* @__PURE__ */ y.jsx("p", { className: "tagline", children: "把论文拆成可回溯的论证结构，沉淀为写作模型，写论文时检索取用。" }),
    d === "unconfigured" && /* @__PURE__ */ y.jsxs("div", { className: "home-banner", children: [
      "尚未配置结构库。到「设置」填写 libraryPath 并保存，模板会自动铺到该目录，无需手动拷贝。",
      /* @__PURE__ */ y.jsx(Ut, { onClick: () => r("settings"), children: "前往设置" })
    ] }),
    /* @__PURE__ */ y.jsxs("ol", { className: "steps", children: [
      /* @__PURE__ */ y.jsx("li", { children: "把文献拖进面板一键拆解，或在对话里让我拆" }),
      /* @__PURE__ */ y.jsx("li", { children: "库里提出的疑问到「待办」处理，保证每条引文可回溯" }),
      /* @__PURE__ */ y.jsx("li", { children: "写论文时到「取用」检索同类模型，按出处引用" })
    ] }),
    /* @__PURE__ */ y.jsxs("div", { className: "home-actions", children: [
      /* @__PURE__ */ y.jsx(Ut, { variant: "primary", onClick: () => r("use"), children: "去取用" }),
      /* @__PURE__ */ y.jsx(Ut, { onClick: () => r("library"), children: "看结构库" }),
      /* @__PURE__ */ y.jsx(Ut, { disabled: !i || c === 0, onClick: () => r("todo"), children: c > 0 ? `处理待办（${c}）` : "暂无待办" })
    ] }),
    /* @__PURE__ */ y.jsx("div", { className: "statusbar", children: i ? `库内 ${i.papers} 篇目 · ${i.models} 模型 · 待办 ${c} 条` : "统计中…" }),
    /* @__PURE__ */ y.jsx(Eb, { onDone: o })
  ] });
}
function Tb({ tick: i, bump: r }) {
  const [o, c] = k.useState([]), [d, h] = k.useState(null), [g, b] = k.useState(""), U = k.useCallback(async () => {
    const v = await Tt("/api/import/failures").catch(() => ({ items: [] }));
    c(v.items || []);
  }, []);
  k.useEffect(() => {
    U();
  }, [U, i]);
  async function w(v) {
    h(v.ts), b("");
    try {
      const z = await Fn("/api/import", { text: v.text, fromTs: v.ts });
      if (z.started) {
        b("重试中（约 1-3 分钟，可离开本页）…");
        const D = await ig();
        D.ok ? (b(`重试成功：${D.file}`), bn.toast.show({ message: "重试成功，已入库", type: "success" })) : b(`仍失败：${D.message || "未知错误"}${D.failureTs ? "（已刷新记录）" : ""}`);
      } else z.ok ? (b(`重试成功：${z.file}`), bn.toast.show({ message: "重试成功，已入库", type: "success" })) : b(`仍失败：${z.message || "未知错误"}`);
    } catch (z) {
      b(`请求失败：${String(z?.message || z)}`);
    }
    h(null), await U(), r();
  }
  async function C(v) {
    await Fn("/api/import/failures/dismiss", { ts: v.ts }).catch(() => null), await U(), r();
  }
  return o.length ? /* @__PURE__ */ y.jsxs("div", { children: [
    /* @__PURE__ */ y.jsx("p", { className: "hint", children: "拆解失败的导入（多为校验未过或模型异常）连原文一起存在这里，重试走同一条链路。" }),
    o.map((v) => /* @__PURE__ */ y.jsxs("div", { className: "fail-item", children: [
      /* @__PURE__ */ y.jsxs("div", { className: "fail-head", children: [
        /* @__PURE__ */ y.jsx("b", { children: new Date(v.ts).toLocaleString() }),
        /* @__PURE__ */ y.jsx("span", { className: "badge", children: v.stage }),
        /* @__PURE__ */ y.jsxs("span", { className: "hint", children: [
          "尝试 ",
          v.attempts,
          " 次 · ",
          (v.text || "").length,
          " 字"
        ] })
      ] }),
      /* @__PURE__ */ y.jsx("div", { className: "fail-msg", children: v.message }),
      (v.errors || []).slice(0, 4).map((z, D) => /* @__PURE__ */ y.jsxs("div", { className: "hint", children: [
        "· ",
        z.field,
        "：",
        z.message
      ] }, D)),
      /* @__PURE__ */ y.jsxs("div", { className: "fail-actions", children: [
        /* @__PURE__ */ y.jsx(Ut, { variant: "primary", disabled: d === v.ts, onClick: () => {
          w(v);
        }, children: d === v.ts ? "重试中…" : "重试" }),
        /* @__PURE__ */ y.jsx(Ut, { disabled: d === v.ts, onClick: () => {
          C(v);
        }, children: "移除" })
      ] })
    ] }, v.ts)),
    g && /* @__PURE__ */ y.jsx("p", { className: g.startsWith("重试成功") ? "ok" : "err", children: g })
  ] }) : /* @__PURE__ */ y.jsx(ai, { title: "暂无导入失败", description: "导入拆解失败的文献会落在这里，可原样重试。" });
}
function Ab() {
  const i = document.getElementById("root")?.dataset.surface || "page", [r, o] = k.useState("home"), [c, d] = k.useState({
    home: "",
    use: "search",
    library: "browse",
    todo: "score",
    settings: ""
  }), [h, g] = k.useState(0), [b, U] = k.useState(null), w = k.useCallback(() => g((q) => q + 1), []), C = k.useCallback((q) => o(q), []);
  k.useEffect(() => {
    bn.ready(), bn.ui.resize({ height: i === "widget" ? 420 : 760 });
  }, [i]), k.useEffect(() => {
    let q = !0;
    return ob().then((Y) => {
      q && U(Y);
    }).catch(() => {
      q && U(null);
    }), () => {
      q = !1;
    };
  }, [h, r]);
  const v = c[r], z = k.useMemo(() => {
    switch (r) {
      case "home":
        return /* @__PURE__ */ y.jsx(Sb, { stats: b, go: C, onDone: w });
      case "use":
        return v === "models" ? /* @__PURE__ */ y.jsx(gb, { tick: h }) : /* @__PURE__ */ y.jsx(pb, {});
      case "library":
        return v === "compare" ? /* @__PURE__ */ y.jsx(mb, { tick: h }) : v === "board" ? /* @__PURE__ */ y.jsx(vb, { tick: h }) : /* @__PURE__ */ y.jsx(hb, { tick: h });
      case "todo":
        return v === "queue" ? /* @__PURE__ */ y.jsx(db, { tick: h }) : v === "import-fail" ? /* @__PURE__ */ y.jsx(Tb, { tick: h, bump: w }) : /* @__PURE__ */ y.jsx(fb, {});
      case "settings":
        return /* @__PURE__ */ y.jsx(yb, {});
    }
  }, [r, v, h, b, C, w]), D = b ? b.queuePending + b.failures : 0;
  return /* @__PURE__ */ y.jsx(nb, { mode: "inherit", className: "plugin-panel", children: /* @__PURE__ */ y.jsxs(
    Cl,
    {
      title: "论文结构建模",
      description: "把论文拆成可回溯的论证结构，沉淀为写作模型，写论文时检索取用。",
      actions: /* @__PURE__ */ y.jsx(Ut, { variant: "ghost", onClick: w, children: "刷新" }),
      children: [
        /* @__PURE__ */ y.jsx("nav", { className: "tabs zones", children: ib.map((q) => /* @__PURE__ */ y.jsxs("button", { className: r === q.id ? "tab on" : "tab", onClick: () => o(q.id), children: [
          q.label,
          q.id === "todo" && D > 0 && /* @__PURE__ */ y.jsx("span", { className: "nav-badge", children: D })
        ] }, q.id)) }),
        r !== "home" && r !== "settings" && /* @__PURE__ */ y.jsx("nav", { className: "tabs sub", children: rb[r].map((q) => /* @__PURE__ */ y.jsx(
          "button",
          {
            className: v === q.id ? "tab on" : "tab",
            onClick: () => d((Y) => ({ ...Y, [r]: q.id })),
            children: q.label
          },
          q.id
        )) }),
        /* @__PURE__ */ y.jsx("div", { className: "tab-body", children: z })
      ]
    }
  ) });
}
const zv = document.getElementById("root");
zv && f0.createRoot(zv).render(/* @__PURE__ */ y.jsx(Ab, {}));
