var vo = { exports: {} }, Ki = {};
var og;
function c0() {
  if (og) return Ki;
  og = 1;
  var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function o(s, d, m) {
    var p = null;
    if (m !== void 0 && (p = "" + m), d.key !== void 0 && (p = "" + d.key), "key" in d) {
      m = {};
      for (var y in d)
        y !== "key" && (m[y] = d[y]);
    } else m = d;
    return d = m.ref, {
      $$typeof: u,
      type: s,
      key: p,
      ref: d !== void 0 ? d : null,
      props: m
    };
  }
  return Ki.Fragment = r, Ki.jsx = o, Ki.jsxs = o, Ki;
}
var fg;
function o0() {
  return fg || (fg = 1, vo.exports = c0()), vo.exports;
}
var h = o0(), yo = { exports: {} }, xe = {};
var dg;
function f0() {
  if (dg) return xe;
  dg = 1;
  var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), s = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), m = /* @__PURE__ */ Symbol.for("react.consumer"), p = /* @__PURE__ */ Symbol.for("react.context"), y = /* @__PURE__ */ Symbol.for("react.forward_ref"), S = /* @__PURE__ */ Symbol.for("react.suspense"), E = /* @__PURE__ */ Symbol.for("react.memo"), N = /* @__PURE__ */ Symbol.for("react.lazy"), g = /* @__PURE__ */ Symbol.for("react.activity"), H = /* @__PURE__ */ Symbol.for("react.view_transition"), A = Symbol.iterator;
  function x(b) {
    return b === null || typeof b != "object" ? null : (b = A && b[A] || b["@@iterator"], typeof b == "function" ? b : null);
  }
  var K = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, B = Object.assign, le = {};
  function be(b, z, W) {
    this.props = b, this.context = z, this.refs = le, this.updater = W || K;
  }
  be.prototype.isReactComponent = {}, be.prototype.setState = function(b, z) {
    if (typeof b != "object" && typeof b != "function" && b != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, b, z, "setState");
  }, be.prototype.forceUpdate = function(b) {
    this.updater.enqueueForceUpdate(this, b, "forceUpdate");
  };
  function me() {
  }
  me.prototype = be.prototype;
  function J(b, z, W) {
    this.props = b, this.context = z, this.refs = le, this.updater = W || K;
  }
  var Ee = J.prototype = new me();
  Ee.constructor = J, B(Ee, be.prototype), Ee.isPureReactComponent = !0;
  var de = Array.isArray;
  function re() {
  }
  var Se = { H: null, A: null, T: null, S: null }, ie = Object.prototype.hasOwnProperty;
  function oe(b, z, W) {
    var P = W.ref;
    return {
      $$typeof: u,
      type: b,
      key: z,
      ref: P !== void 0 ? P : null,
      props: W
    };
  }
  function Te(b, z) {
    return oe(b.type, z, b.props);
  }
  function V(b) {
    return typeof b == "object" && b !== null && b.$$typeof === u;
  }
  function fe(b) {
    var z = { "=": "=0", ":": "=2" };
    return "$" + b.replace(/[=:]/g, function(W) {
      return z[W];
    });
  }
  var De = /\/+/g;
  function q(b, z) {
    return typeof b == "object" && b !== null && b.key != null ? fe("" + b.key) : z.toString(36);
  }
  function M(b) {
    switch (b.status) {
      case "fulfilled":
        return b.value;
      case "rejected":
        throw b.reason;
      default:
        switch (typeof b.status == "string" ? b.then(re, re) : (b.status = "pending", b.then(
          function(z) {
            b.status === "pending" && (b.status = "fulfilled", b.value = z);
          },
          function(z) {
            b.status === "pending" && (b.status = "rejected", b.reason = z);
          }
        )), b.status) {
          case "fulfilled":
            return b.value;
          case "rejected":
            throw b.reason;
        }
    }
    throw b;
  }
  function te(b, z, W, P, ae) {
    var pe = typeof b;
    (pe === "undefined" || pe === "boolean") && (b = null);
    var se = !1;
    if (b === null) se = !0;
    else
      switch (pe) {
        case "bigint":
        case "string":
        case "number":
          se = !0;
          break;
        case "object":
          switch (b.$$typeof) {
            case u:
            case r:
              se = !0;
              break;
            case N:
              return se = b._init, te(
                se(b._payload),
                z,
                W,
                P,
                ae
              );
          }
      }
    if (se)
      return ae = ae(b), se = P === "" ? "." + q(b, 0) : P, de(ae) ? (W = "", se != null && (W = se.replace(De, "$&/") + "/"), te(ae, z, W, "", function(We) {
        return We;
      })) : ae != null && (V(ae) && (ae = Te(
        ae,
        W + (ae.key == null || b && b.key === ae.key ? "" : ("" + ae.key).replace(
          De,
          "$&/"
        ) + "/") + se
      )), z.push(ae)), 1;
    se = 0;
    var ee = P === "" ? "." : P + ":";
    if (de(b))
      for (var ce = 0; ce < b.length; ce++)
        P = b[ce], pe = ee + q(P, ce), se += te(
          P,
          z,
          W,
          pe,
          ae
        );
    else if (ce = x(b), typeof ce == "function")
      for (b = ce.call(b), ce = 0; !(P = b.next()).done; )
        P = P.value, pe = ee + q(P, ce++), se += te(
          P,
          z,
          W,
          pe,
          ae
        );
    else if (pe === "object") {
      if (typeof b.then == "function")
        return te(
          M(b),
          z,
          W,
          P,
          ae
        );
      throw z = String(b), Error(
        "Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(b).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return se;
  }
  function j(b, z, W) {
    if (b == null) return b;
    var P = [], ae = 0;
    return te(b, P, "", "", function(pe) {
      return z.call(W, pe, ae++);
    }), P;
  }
  function F(b) {
    if (b._status === -1) {
      var z = b._result, W = z();
      W.then(
        function(P) {
          (b._status === 0 || b._status === -1) && (b._status = 1, b._result = P, W.status === void 0 && (W.status = "fulfilled", W.value = P));
        },
        function(P) {
          (b._status === 0 || b._status === -1) && (b._status = 2, b._result = P, W.status === void 0 && (W.status = "rejected", W.reason = P));
        }
      ), b._status === -1 && (b._status = 0, b._result = W);
    }
    if (b._status === 1) return b._result.default;
    throw b._result;
  }
  var L = typeof reportError == "function" ? reportError : function(b) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var z = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof b == "object" && b !== null && typeof b.message == "string" ? String(b.message) : String(b),
        error: b
      });
      if (!window.dispatchEvent(z)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", b);
      return;
    }
    console.error(b);
  };
  function G(b) {
    var z = Se.T, W = {};
    W.types = z !== null ? z.types : null, Se.T = W;
    try {
      var P = b(), ae = Se.S;
      ae !== null && ae(W, P), typeof P == "object" && P !== null && typeof P.then == "function" && P.then(re, L);
    } catch (pe) {
      L(pe);
    } finally {
      z !== null && W.types !== null && (z.types = W.types), Se.T = z;
    }
  }
  function ne(b) {
    var z = Se.T;
    if (z !== null) {
      var W = z.types;
      W === null ? z.types = [b] : W.indexOf(b) === -1 && W.push(b);
    } else G(ne.bind(null, b));
  }
  var $ = {
    map: j,
    forEach: function(b, z, W) {
      j(
        b,
        function() {
          z.apply(this, arguments);
        },
        W
      );
    },
    count: function(b) {
      var z = 0;
      return j(b, function() {
        z++;
      }), z;
    },
    toArray: function(b) {
      return j(b, function(z) {
        return z;
      }) || [];
    },
    only: function(b) {
      if (!V(b))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return b;
    }
  };
  return xe.Activity = g, xe.Children = $, xe.Component = be, xe.Fragment = o, xe.Profiler = d, xe.PureComponent = J, xe.StrictMode = s, xe.Suspense = S, xe.ViewTransition = H, xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = Se, xe.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(b) {
      return Se.H.useMemoCache(b);
    }
  }, xe.addTransitionType = ne, xe.cache = function(b) {
    return function() {
      return b.apply(null, arguments);
    };
  }, xe.cacheSignal = function() {
    return null;
  }, xe.cloneElement = function(b, z, W) {
    if (b == null)
      throw Error(
        "The argument must be a React element, but you passed " + b + "."
      );
    var P = B({}, b.props), ae = b.key;
    if (z != null)
      for (pe in z.key !== void 0 && (ae = "" + z.key), z)
        !ie.call(z, pe) || pe === "key" || pe === "__self" || pe === "__source" || pe === "ref" && z.ref === void 0 || (P[pe] = z[pe]);
    var pe = arguments.length - 2;
    if (pe === 1) P.children = W;
    else if (1 < pe) {
      for (var se = Array(pe), ee = 0; ee < pe; ee++)
        se[ee] = arguments[ee + 2];
      P.children = se;
    }
    return oe(b.type, ae, P);
  }, xe.createContext = function(b) {
    return b = {
      $$typeof: p,
      _currentValue: b,
      _currentValue2: b,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, b.Provider = b, b.Consumer = {
      $$typeof: m,
      _context: b
    }, b;
  }, xe.createElement = function(b, z, W) {
    var P, ae = {}, pe = null;
    if (z != null)
      for (P in z.key !== void 0 && (pe = "" + z.key), z)
        ie.call(z, P) && P !== "key" && P !== "__self" && P !== "__source" && (ae[P] = z[P]);
    var se = arguments.length - 2;
    if (se === 1) ae.children = W;
    else if (1 < se) {
      for (var ee = Array(se), ce = 0; ce < se; ce++)
        ee[ce] = arguments[ce + 2];
      ae.children = ee;
    }
    if (b && b.defaultProps)
      for (P in se = b.defaultProps, se)
        ae[P] === void 0 && (ae[P] = se[P]);
    return oe(b, pe, ae);
  }, xe.createRef = function() {
    return { current: null };
  }, xe.forwardRef = function(b) {
    return { $$typeof: y, render: b };
  }, xe.isValidElement = V, xe.lazy = function(b) {
    return {
      $$typeof: N,
      _payload: { _status: -1, _result: b },
      _init: F
    };
  }, xe.memo = function(b, z) {
    return {
      $$typeof: E,
      type: b,
      compare: z === void 0 ? null : z
    };
  }, xe.startTransition = G, xe.unstable_useCacheRefresh = function() {
    return Se.H.useCacheRefresh();
  }, xe.use = function(b) {
    return Se.H.use(b);
  }, xe.useActionState = function(b, z, W) {
    return Se.H.useActionState(b, z, W);
  }, xe.useCallback = function(b, z) {
    return Se.H.useCallback(b, z);
  }, xe.useContext = function(b) {
    return Se.H.useContext(b);
  }, xe.useDebugValue = function() {
  }, xe.useDeferredValue = function(b, z) {
    return Se.H.useDeferredValue(b, z);
  }, xe.useEffect = function(b, z) {
    return Se.H.useEffect(b, z);
  }, xe.useEffectEvent = function(b) {
    return Se.H.useEffectEvent(b);
  }, xe.useId = function() {
    return Se.H.useId();
  }, xe.useImperativeHandle = function(b, z, W) {
    return Se.H.useImperativeHandle(b, z, W);
  }, xe.useInsertionEffect = function(b, z) {
    return Se.H.useInsertionEffect(b, z);
  }, xe.useLayoutEffect = function(b, z) {
    return Se.H.useLayoutEffect(b, z);
  }, xe.useMemo = function(b, z) {
    return Se.H.useMemo(b, z);
  }, xe.useOptimistic = function(b, z) {
    return Se.H.useOptimistic(b, z);
  }, xe.useReducer = function(b, z, W) {
    return Se.H.useReducer(b, z, W);
  }, xe.useRef = function(b) {
    return Se.H.useRef(b);
  }, xe.useState = function(b) {
    return Se.H.useState(b);
  }, xe.useSyncExternalStore = function(b, z, W) {
    return Se.H.useSyncExternalStore(
      b,
      z,
      W
    );
  }, xe.useTransition = function() {
    return Se.H.useTransition();
  }, xe.version = "19.3.0", xe;
}
var hg;
function Mo() {
  return hg || (hg = 1, yo.exports = f0()), yo.exports;
}
var Y = Mo(), bo = { exports: {} }, Zi = {}, Eo = { exports: {} }, So = {};
var mg;
function d0() {
  return mg || (mg = 1, (function(u) {
    function r(M, te) {
      var j = M.length;
      M.push(te);
      e: for (; 0 < j; ) {
        var F = j - 1 >>> 1, L = M[F];
        if (0 < d(L, te))
          M[F] = te, M[j] = L, j = F;
        else break e;
      }
    }
    function o(M) {
      return M.length === 0 ? null : M[0];
    }
    function s(M) {
      if (M.length === 0) return null;
      var te = M[0], j = M.pop();
      if (j !== te) {
        M[0] = j;
        e: for (var F = 0, L = M.length, G = L >>> 1; F < G; ) {
          var ne = 2 * (F + 1) - 1, $ = M[ne], b = ne + 1, z = M[b];
          if (0 > d($, j))
            b < L && 0 > d(z, $) ? (M[F] = z, M[b] = j, F = b) : (M[F] = $, M[ne] = j, F = ne);
          else if (b < L && 0 > d(z, j))
            M[F] = z, M[b] = j, F = b;
          else break e;
        }
      }
      return te;
    }
    function d(M, te) {
      var j = M.sortIndex - te.sortIndex;
      return j !== 0 ? j : M.id - te.id;
    }
    if (u.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var m = performance;
      u.unstable_now = function() {
        return m.now();
      };
    } else {
      var p = Date, y = p.now();
      u.unstable_now = function() {
        return p.now() - y;
      };
    }
    var S = [], E = [], N = 1, g = null, H = 3, A = !1, x = !1, K = !1, B = !1, le = typeof setTimeout == "function" ? setTimeout : null, be = typeof clearTimeout == "function" ? clearTimeout : null, me = typeof setImmediate < "u" ? setImmediate : null;
    function J(M) {
      for (var te = o(E); te !== null; ) {
        if (te.callback === null) s(E);
        else if (te.startTime <= M)
          s(E), te.sortIndex = te.expirationTime, r(S, te);
        else break;
        te = o(E);
      }
    }
    function Ee(M) {
      if (K = !1, J(M), !x)
        if (o(S) !== null)
          x = !0, de || (de = !0, V());
        else {
          var te = o(E);
          te !== null && q(Ee, te.startTime - M);
        }
    }
    var de = !1, re = -1, Se = 5, ie = -1;
    function oe() {
      return B ? !0 : !(u.unstable_now() - ie < Se);
    }
    function Te() {
      if (B = !1, de) {
        var M = u.unstable_now();
        ie = M;
        var te = !0;
        try {
          e: {
            x = !1, K && (K = !1, be(re), re = -1), A = !0;
            var j = H;
            try {
              t: {
                for (J(M), g = o(S); g !== null && !(g.expirationTime > M && oe()); ) {
                  var F = g.callback;
                  if (typeof F == "function") {
                    g.callback = null, H = g.priorityLevel;
                    var L = F(
                      g.expirationTime <= M
                    );
                    if (M = u.unstable_now(), typeof L == "function") {
                      g.callback = L, J(M), te = !0;
                      break t;
                    }
                    g === o(S) && s(S), J(M);
                  } else s(S);
                  g = o(S);
                }
                if (g !== null) te = !0;
                else {
                  var G = o(E);
                  G !== null && q(
                    Ee,
                    G.startTime - M
                  ), te = !1;
                }
              }
              break e;
            } finally {
              g = null, H = j, A = !1;
            }
            te = void 0;
          }
        } finally {
          te ? V() : de = !1;
        }
      }
    }
    var V;
    if (typeof me == "function")
      V = function() {
        me(Te);
      };
    else if (typeof MessageChannel < "u") {
      var fe = new MessageChannel(), De = fe.port2;
      fe.port1.onmessage = Te, V = function() {
        De.postMessage(null);
      };
    } else
      V = function() {
        le(Te, 0);
      };
    function q(M, te) {
      re = le(function() {
        M(u.unstable_now());
      }, te);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, u.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : Se = 0 < M ? Math.floor(1e3 / M) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return H;
    }, u.unstable_next = function(M) {
      switch (H) {
        case 1:
        case 2:
        case 3:
          var te = 3;
          break;
        default:
          te = H;
      }
      var j = H;
      H = te;
      try {
        return M();
      } finally {
        H = j;
      }
    }, u.unstable_requestPaint = function() {
      B = !0;
    }, u.unstable_runWithPriority = function(M, te) {
      switch (M) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          M = 3;
      }
      var j = H;
      H = M;
      try {
        return te();
      } finally {
        H = j;
      }
    }, u.unstable_scheduleCallback = function(M, te, j) {
      var F = u.unstable_now();
      switch (typeof j == "object" && j !== null ? (j = j.delay, j = typeof j == "number" && 0 < j ? F + j : F) : j = F, M) {
        case 1:
          var L = -1;
          break;
        case 2:
          L = 250;
          break;
        case 5:
          L = 1073741823;
          break;
        case 4:
          L = 1e4;
          break;
        default:
          L = 5e3;
      }
      return L = j + L, M = {
        id: N++,
        callback: te,
        priorityLevel: M,
        startTime: j,
        expirationTime: L,
        sortIndex: -1
      }, j > F ? (M.sortIndex = j, r(E, M), o(S) === null && M === o(E) && (K ? (be(re), re = -1) : K = !0, q(Ee, j - F))) : (M.sortIndex = L, r(S, M), x || A || (x = !0, de || (de = !0, V()))), M;
    }, u.unstable_shouldYield = oe, u.unstable_wrapCallback = function(M) {
      var te = H;
      return function() {
        var j = H;
        H = te;
        try {
          return M.apply(this, arguments);
        } finally {
          H = j;
        }
      };
    };
  })(So)), So;
}
var gg;
function h0() {
  return gg || (gg = 1, Eo.exports = d0()), Eo.exports;
}
var To = { exports: {} }, Ct = {};
var pg;
function m0() {
  if (pg) return Ct;
  pg = 1;
  var u = Mo();
  function r(N) {
    var g = "https://react.dev/errors/" + N;
    if (1 < arguments.length) {
      g += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var H = 2; H < arguments.length; H++)
        g += "&args[]=" + encodeURIComponent(arguments[H]);
    }
    return "Minified React error #" + N + "; visit " + g + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function o() {
  }
  var s = {
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
  }, d = /* @__PURE__ */ Symbol.for("react.portal"), m = /* @__PURE__ */ Symbol.for("react.recoverable"), p = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function y(N, g, H) {
    var A = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: A == null ? null : A === p ? p : "" + A,
      children: N,
      containerInfo: g,
      implementation: H
    };
  }
  var S = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function E(N, g) {
    if (N === "font") return "";
    if (typeof g == "string")
      return g === "use-credentials" ? g : "";
  }
  return Ct.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, Ct.browser = function(N) {
    return { $$typeof: m, _reason: N };
  }, Ct.createPortal = function(N, g) {
    var H = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!g || g.nodeType !== 1 && g.nodeType !== 9 && g.nodeType !== 11)
      throw Error(r(299));
    return y(N, g, null, H);
  }, Ct.flushSync = function(N) {
    var g = S.T, H = s.p;
    try {
      if (S.T = null, s.p = 2, N) return N();
    } finally {
      S.T = g, s.p = H, s.d.f();
    }
  }, Ct.preconnect = function(N, g) {
    typeof N == "string" && (g ? (g = g.crossOrigin, g = typeof g == "string" ? g === "use-credentials" ? g : "" : void 0) : g = null, s.d.C(N, g));
  }, Ct.prefetchDNS = function(N) {
    typeof N == "string" && s.d.D(N);
  }, Ct.preinit = function(N, g) {
    if (typeof N == "string" && g && typeof g.as == "string") {
      var H = g.as, A = E(H, g.crossOrigin), x = typeof g.integrity == "string" ? g.integrity : void 0, K = typeof g.fetchPriority == "string" ? g.fetchPriority : void 0;
      H === "style" ? s.d.S(
        N,
        typeof g.precedence == "string" ? g.precedence : void 0,
        {
          crossOrigin: A,
          integrity: x,
          fetchPriority: K
        }
      ) : H === "script" && s.d.X(N, {
        crossOrigin: A,
        integrity: x,
        fetchPriority: K,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0
      });
    }
  }, Ct.preinitModule = function(N, g) {
    if (typeof N == "string")
      if (typeof g == "object" && g !== null) {
        if (g.as == null || g.as === "script") {
          var H = E(
            g.as,
            g.crossOrigin
          );
          s.d.M(N, {
            crossOrigin: H,
            integrity: typeof g.integrity == "string" ? g.integrity : void 0,
            nonce: typeof g.nonce == "string" ? g.nonce : void 0,
            fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0
          });
        }
      } else g == null && s.d.M(N);
  }, Ct.preload = function(N, g) {
    if (typeof N == "string" && typeof g == "object" && g !== null && typeof g.as == "string") {
      var H = g.as, A = E(H, g.crossOrigin);
      s.d.L(N, H, {
        crossOrigin: A,
        integrity: typeof g.integrity == "string" ? g.integrity : void 0,
        nonce: typeof g.nonce == "string" ? g.nonce : void 0,
        type: typeof g.type == "string" ? g.type : void 0,
        fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0,
        referrerPolicy: typeof g.referrerPolicy == "string" ? g.referrerPolicy : void 0,
        imageSrcSet: typeof g.imageSrcSet == "string" ? g.imageSrcSet : void 0,
        imageSizes: typeof g.imageSizes == "string" ? g.imageSizes : void 0,
        media: typeof g.media == "string" ? g.media : void 0
      });
    }
  }, Ct.preloadModule = function(N, g) {
    if (typeof N == "string")
      if (g) {
        var H = E(g.as, g.crossOrigin);
        s.d.m(N, {
          as: typeof g.as == "string" && g.as !== "script" ? g.as : void 0,
          crossOrigin: H,
          integrity: typeof g.integrity == "string" ? g.integrity : void 0,
          nonce: typeof g.nonce == "string" ? g.nonce : void 0,
          fetchPriority: typeof g.fetchPriority == "string" ? g.fetchPriority : void 0
        });
      } else s.d.m(N);
  }, Ct.requestFormReset = function(N) {
    s.d.r(N);
  }, Ct.unstable_batchedUpdates = function(N, g) {
    return N(g);
  }, Ct.useFormState = function(N, g, H) {
    return S.H.useFormState(N, g, H);
  }, Ct.useFormStatus = function() {
    return S.H.useHostTransitionStatus();
  }, Ct.version = "19.3.0", Ct;
}
var vg;
function g0() {
  if (vg) return To.exports;
  vg = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (r) {
        console.error(r);
      }
  }
  return u(), To.exports = m0(), To.exports;
}
var yg;
function p0() {
  if (yg) return Zi;
  yg = 1;
  var u = h0(), r = Mo(), o = g0();
  function s(e) {
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
  function m(e) {
    for (var t = e, n = t; n && !n.alternate; )
      t = n, (t.flags & 4098) !== 0 && (e = t.return), n = t.return;
    for (; t.return; ) t = t.return;
    return t.tag === 3 ? e : null;
  }
  function p(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function y(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function S(e) {
    if (m(e) !== e)
      throw Error(s(188));
  }
  function E(e) {
    var t = e.alternate;
    if (!t) {
      if (t = m(e), t === null) throw Error(s(188));
      return t !== e ? null : e;
    }
    for (var n = e, a = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var i = l.alternate;
      if (i === null) {
        if (a = l.return, a !== null) {
          n = a;
          continue;
        }
        break;
      }
      if (l.child === i.child) {
        for (i = l.child; i; ) {
          if (i === n) return S(l), e;
          if (i === a) return S(l), t;
          i = i.sibling;
        }
        throw Error(s(188));
      }
      if (n.return !== a.return) n = l, a = i;
      else {
        for (var c = !1, f = l.child; f; ) {
          if (f === n) {
            c = !0, n = l, a = i;
            break;
          }
          if (f === a) {
            c = !0, a = l, n = i;
            break;
          }
          f = f.sibling;
        }
        if (!c) {
          for (f = i.child; f; ) {
            if (f === n) {
              c = !0, n = i, a = l;
              break;
            }
            if (f === a) {
              c = !0, a = i, n = l;
              break;
            }
            f = f.sibling;
          }
          if (!c) throw Error(s(189));
        }
      }
      if (n.alternate !== a) throw Error(s(190));
    }
    if (n.tag !== 3) throw Error(s(188));
    return n.stateNode.current === n ? e : t;
  }
  function N(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = N(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  function g(e, t, n, a, l, i) {
    for (; e !== null; ) {
      if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && n(e, a, l, i) || (e.tag !== 22 || e.memoizedState === null) && (t || e.tag !== 5 && e.tag !== 27) && g(
        e.child,
        t,
        n,
        a,
        l,
        i
      ))
        return !0;
      e = e.sibling;
    }
    return !1;
  }
  function H(e) {
    for (e = e.return; e !== null; ) {
      if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
      e = e.return;
    }
    return null;
  }
  function A(e) {
    var t = !1;
    for (e = e.return; e !== null && (e.tag === 4 && (t = !0), !(e.tag === 3 || e.tag === 5 || e.tag === 27)); )
      e = e.return;
    return t;
  }
  function x(e) {
    var t = [null, null], n = H(e);
    return n === null || K(
      t,
      e,
      n.child,
      { foundSelf: !1 }
    ), t;
  }
  function K(e, t, n, a) {
    for (; n !== null; ) {
      if (n === t) a.foundSelf = !0;
      else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
        if (a.foundSelf) return e[1] = n, !0;
        e[0] = n;
      } else if ((n.tag !== 22 || n.memoizedState === null) && K(
        e,
        t,
        n.child,
        a
      ))
        return !0;
      n = n.sibling;
    }
    return !1;
  }
  function B(e) {
    switch (e.tag) {
      case 5:
      case 27:
      case 6:
        return e.stateNode;
      case 3:
        return e.stateNode.containerInfo;
      default:
        throw Error(s(559));
    }
  }
  var le = null, be = null;
  function me(e, t, n) {
    return e === n ? !0 : e === t ? (le = e, !0) : !1;
  }
  function J(e, t, n) {
    return e === n ? (be = e, !1) : e === t ? (be !== null && (le = e), !0) : !1;
  }
  function Ee(e) {
    if (e === null) return null;
    do
      e = e === null ? null : e.return;
    while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
    return e || null;
  }
  function de(e, t, n) {
    for (var a = 0, l = e; l; l = n(l)) a++;
    l = 0;
    for (var i = t; i; i = n(i)) l++;
    for (; 0 < a - l; ) e = n(e), a--;
    for (; 0 < l - a; ) t = n(t), l--;
    for (; a--; ) {
      if (e === t || t !== null && e === t.alternate)
        return e;
      e = n(e), t = n(t);
    }
    return null;
  }
  var re = Object.assign, Se = /* @__PURE__ */ Symbol.for("react.element"), ie = /* @__PURE__ */ Symbol.for("react.transitional.element"), oe = /* @__PURE__ */ Symbol.for("react.portal"), Te = /* @__PURE__ */ Symbol.for("react.fragment"), V = /* @__PURE__ */ Symbol.for("react.strict_mode"), fe = /* @__PURE__ */ Symbol.for("react.profiler"), De = /* @__PURE__ */ Symbol.for("react.consumer"), q = /* @__PURE__ */ Symbol.for("react.context"), M = /* @__PURE__ */ Symbol.for("react.forward_ref"), te = /* @__PURE__ */ Symbol.for("react.suspense"), j = /* @__PURE__ */ Symbol.for("react.suspense_list"), F = /* @__PURE__ */ Symbol.for("react.memo"), L = /* @__PURE__ */ Symbol.for("react.lazy"), G = /* @__PURE__ */ Symbol.for("react.activity"), ne = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), $ = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), b = /* @__PURE__ */ Symbol.for("react.view_transition"), z = /* @__PURE__ */ Symbol.for("react.recoverable"), W = Symbol.iterator;
  function P(e) {
    return e === null || typeof e != "object" ? null : (e = W && e[W] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ae = /* @__PURE__ */ Symbol.for("react.client.reference");
  function pe(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ae ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Te:
        return "Fragment";
      case fe:
        return "Profiler";
      case V:
        return "StrictMode";
      case te:
        return "Suspense";
      case j:
        return "SuspenseList";
      case G:
        return "Activity";
      case b:
        return "ViewTransition";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case oe:
          return "Portal";
        case q:
          return e.displayName || "Context";
        case De:
          return (e._context.displayName || "Context") + ".Consumer";
        case M:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case F:
          return t = e.displayName || null, t !== null ? t : pe(e.type) || "Memo";
        case L:
          t = e._payload, e = e._init;
          try {
            return pe(e(t));
          } catch {
          }
      }
    return null;
  }
  var se = Array.isArray, ee = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ce = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, We = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, rt = [], Yt = -1;
  function an(e) {
    return { current: e };
  }
  function Ne(e) {
    0 > Yt || (e.current = rt[Yt], rt[Yt] = null, Yt--);
  }
  function Qe(e, t) {
    Yt++, rt[Yt] = e.current, e.current = t;
  }
  var Xt = an(null), O = an(null), k = an(null), I = an(null);
  function Z(e, t) {
    switch (Qe(k, t), Qe(O, e), Qe(Xt, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? bm(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = bm(t), e = Em(t, e);
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
    Ne(Xt), Qe(Xt, e);
  }
  function ve() {
    Ne(Xt), Ne(O), Ne(k);
  }
  function Be(e) {
    var t = e.memoizedState;
    t !== null && (Yl._currentValue = t.memoizedState, Qe(I, e)), t = Xt.current;
    var n = Em(t, e.type);
    t !== n && (Qe(O, e), Qe(Xt, n));
  }
  function $e(e) {
    O.current === e && (Ne(Xt), Ne(O)), I.current === e && (Ne(I), Yl._currentValue = We);
  }
  var Et, qt;
  function St(e) {
    if (Et === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Et = t && t[1] || "", qt = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Et + e + qt;
  }
  var Ra = !1;
  function gn(e, t) {
    if (!e || Ra) return "";
    Ra = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var Q = function() {
                throw Error();
              };
              if (Object.defineProperty(Q.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(Q, []);
                } catch (ue) {
                  var _ = ue;
                }
                Reflect.construct(e, [], Q);
              } else {
                try {
                  Q.call();
                } catch (ue) {
                  _ = ue;
                }
                Q = !1;
                try {
                  var D = Object.getOwnPropertyDescriptor(
                    e.prototype,
                    "props"
                  );
                  Object.defineProperty(e.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), Q = !0, new e();
                } finally {
                  Q && (D !== void 0 ? Object.defineProperty(e.prototype, "props", D) : delete e.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (ue) {
                _ = ue;
              }
              (Q = e()) && typeof Q.catch == "function" && Q.catch(function() {
              });
            }
          } catch (ue) {
            if (ue && _ && typeof ue.stack == "string")
              return [ue.stack, _.stack];
          }
          return [null, null];
        }
      };
      a.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var l = Object.getOwnPropertyDescriptor(
        a.DetermineComponentFrameRoot,
        "name"
      );
      l && l.configurable && Object.defineProperty(
        a.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var i = a.DetermineComponentFrameRoot(), c = i[0], f = i[1];
      if (c && f) {
        var v = c.split(`
`), C = f.split(`
`);
        for (l = a = 0; a < v.length && !v[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; l < C.length && !C[l].includes(
          "DetermineComponentFrameRoot"
        ); )
          l++;
        if (a === v.length || l === C.length)
          for (a = v.length - 1, l = C.length - 1; 1 <= a && 0 <= l && v[a] !== C[l]; )
            l--;
        for (; 1 <= a && 0 <= l; a--, l--)
          if (v[a] !== C[l]) {
            if (a !== 1 || l !== 1)
              do
                if (a--, l--, 0 > l || v[a] !== C[l]) {
                  var U = `
` + v[a].replace(" at new ", " at ");
                  return e.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", e.displayName)), U;
                }
              while (1 <= a && 0 <= l);
            break;
          }
      }
    } finally {
      Ra = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? St(n) : "";
  }
  function ja(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return St(e.type);
      case 16:
        return St("Lazy");
      case 13:
        return e.child !== t && t !== null ? St("Suspense Fallback") : St("Suspense");
      case 19:
        return St("SuspenseList");
      case 0:
      case 15:
        return gn(e.type, !1);
      case 11:
        return gn(e.type.render, !1);
      case 1:
        return gn(e.type, !0);
      case 31:
        return St("Activity");
      case 30:
        return St("ViewTransition");
      default:
        return "";
    }
  }
  function Pl(e) {
    try {
      var t = "", n = null;
      do
        t += ja(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var pn = Object.prototype.hasOwnProperty, Vr = u.unstable_scheduleCallback, Gr = u.unstable_cancelCallback, mp = u.unstable_shouldYield, gp = u.unstable_requestPaint, Qt = u.unstable_now, pp = u.unstable_getCurrentPriorityLevel, Vo = u.unstable_ImmediatePriority, Go = u.unstable_UserBlockingPriority, ru = u.unstable_NormalPriority, vp = u.unstable_LowPriority, Yo = u.unstable_IdlePriority, yp = u.log, bp = u.unstable_setDisableYieldValue, Wl = null, Kt = null;
  function Wn(e) {
    if (typeof yp == "function" && bp(e), Kt && typeof Kt.setStrictMode == "function")
      try {
        Kt.setStrictMode(Wl, e);
      } catch {
      }
  }
  var Zt = Math.clz32 ? Math.clz32 : Tp, Ep = Math.log, Sp = Math.LN2;
  function Tp(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Ep(e) / Sp | 0) | 0;
  }
  var su = 256, cu = 262144, ou = 4194304;
  function Da(e) {
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
  function fu(e, t, n) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var l = 0, i = e.suspendedLanes, c = e.pingedLanes;
    e = e.warmLanes;
    var f = a & 134217727;
    return f !== 0 ? (a = f & ~i, a !== 0 ? l = Da(a) : (c &= f, c !== 0 ? l = Da(c) : n || (n = f & ~e, n !== 0 && (l = Da(n))))) : (f = a & ~i, f !== 0 ? l = Da(f) : c !== 0 ? l = Da(c) : n || (n = a & ~e, n !== 0 && (l = Da(n)))), l === 0 ? 0 : t !== 0 && t !== l && (t & i) === 0 && (i = l & -l, n = t & -t, i >= n || i === 32 && (n & 4194048) !== 0) ? t : l;
  }
  function ei(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Xo(e, t) {
    (t & 8) !== 0 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var a = 31 - Zt(n), l = 1 << a;
        t |= e[a], n &= ~l;
      }
    return t;
  }
  function Ap(e, t) {
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
  function Qo() {
    var e = ou;
    return ou <<= 1, (ou & 62914560) === 0 && (ou = 4194304), e;
  }
  function Yr(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ti(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Np(e, t, n, a, l, i) {
    var c = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var f = e.entanglements, v = e.expirationTimes, C = e.hiddenUpdates;
    for (n = c & ~n; 0 < n; ) {
      var U = 31 - Zt(n), Q = 1 << U;
      f[U] = 0, v[U] = -1;
      var _ = C[U];
      if (_ !== null)
        for (C[U] = null, U = 0; U < _.length; U++) {
          var D = _[U];
          D !== null && (D.lane &= -536870913);
        }
      n &= ~Q;
    }
    a !== 0 && Ko(e, a, 0), i !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(c & ~t));
  }
  function Ko(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - Zt(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 261930;
  }
  function Zo(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var a = 31 - Zt(n), l = 1 << a;
      l & t | e[a] & t && (e[a] |= t), n &= ~l;
    }
  }
  function ko(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : Xr(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function Xr(e) {
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
  function Qr(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Jo() {
    var e = ce.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : ag(e.type));
  }
  function $o(e, t) {
    var n = ce.p;
    try {
      return ce.p = e, t();
    } finally {
      ce.p = n;
    }
  }
  var Hn = Math.random().toString(36).slice(2), Tt = "__reactFiber$" + Hn, Ht = "__reactProps$" + Hn, al = "__reactContainer$" + Hn, Fo = "__reactEvents$" + Hn, _p = "__reactListeners$" + Hn, wp = "__reactHandles$" + Hn, Po = "__reactResources$" + Hn, ni = "__reactMarker$" + Hn, du = "__reactLoad$" + Hn;
  function hu(e) {
    delete e[Tt], delete e[Ht], delete e[_p], delete e[wp];
  }
  function Ua(e) {
    var t;
    if (t = e[Tt]) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[al] || n[Tt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = Hm(e); e !== null; ) {
            if (n = e[Tt]) return n;
            e = Hm(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function ll(e) {
    if (e = e[Tt] || e[al]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function ai(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(s(33));
  }
  function il(e) {
    var t = e[Po];
    return t || (t = e[Po] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function gt(e) {
    e[ni] = !0;
  }
  function Wo(e) {
    e[du] = void 0;
  }
  var ef = /* @__PURE__ */ new Set(), tf = {};
  function za(e, t) {
    ul(e, t), ul(e + "Capture", t);
  }
  function ul(e, t) {
    for (tf[e] = t, e = 0; e < t.length; e++)
      ef.add(t[e]);
  }
  var Op = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), nf = {}, af = {};
  function Cp(e) {
    return pn.call(af, e) ? !0 : pn.call(nf, e) ? !1 : Op.test(e) ? af[e] = !0 : (nf[e] = !0, !1);
  }
  var Ve = !1;
  function lf() {
    var e = Ve;
    return Ve = !1, e;
  }
  function mu(e, t, n) {
    if (Cp(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var a = t.toLowerCase().slice(0, 5);
            if (a !== "data-" && a !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, n);
      }
  }
  function gu(e, t, n) {
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
  function Ln(e, t, n, a) {
    if (a === null) e.removeAttribute(n);
    else {
      switch (typeof a) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, a);
    }
  }
  function kt(e) {
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
  function uf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function xp(e, t, n) {
    var a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var l = a.get, i = a.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return l.call(this);
        },
        set: function(c) {
          n = "" + c, i.call(this, c);
        }
      }), Object.defineProperty(e, t, {
        enumerable: a.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(c) {
          n = "" + c;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function Kr(e) {
    if (!e._valueTracker) {
      var t = uf(e) ? "checked" : "value";
      e._valueTracker = xp(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function rf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), a = "";
    return e && (a = uf(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), !0) : !1;
  }
  var Rp = /[\n"\\]/g;
  function ln(e) {
    return e.replace(
      Rp,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Zr(e, t, n, a, l, i, c, f) {
    e.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? e.type = c : e.removeAttribute("type"), t != null ? c === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + kt(t)) : e.value !== "" + kt(t) && (e.value = "" + kt(t)) : c !== "submit" && c !== "reset" || e.removeAttribute("value"), t != null ? c === "number" && e.value == t ? kr(e, kt(e.value)) : kr(e, kt(t)) : n != null ? kr(e, kt(n)) : a != null && e.removeAttribute("value"), l == null && i != null && (e.defaultChecked = !!i), l != null && (e.checked = l && typeof l != "function" && typeof l != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.name = "" + kt(f) : e.removeAttribute("name");
  }
  function sf(e, t, n, a, l, i, c, f) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || n != null) {
      if (!(i !== "submit" && i !== "reset" || t != null)) {
        Kr(e);
        return;
      }
      n = n != null ? "" + kt(n) : "", t = t != null ? "" + kt(t) : n, f || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? l, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = f ? e.checked : !!a, e.defaultChecked = !!a, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.name = c), Kr(e);
  }
  function kr(e, t) {
    e.defaultValue !== "" + t && (e.defaultValue = "" + t);
  }
  function rl(e, t, n, a) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++)
        t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && a && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + kt(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, a && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function cf(e, t, n) {
    if (t != null && (t = "" + kt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + kt(n) : "";
  }
  function of(e, t, n, a) {
    if (t == null) {
      if (a != null) {
        if (n != null) throw Error(s(92));
        if (se(a)) {
          if (1 < a.length) throw Error(s(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), t = n;
    }
    n = kt(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a), Kr(e);
  }
  function sl(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var jp = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function ff(e, t, n) {
    var a = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || jp.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function df(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(s(62));
    if (e = e.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "", Ve = !0);
      for (var l in t)
        a = t[l], t.hasOwnProperty(l) && n[l] !== a && (ff(e, l, a), Ve = !0);
    } else
      for (var i in t)
        t.hasOwnProperty(i) && ff(e, i, t[i]);
  }
  function Jr(e) {
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
  var Dp = /* @__PURE__ */ new Map([
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
  ]), Up = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function pu(e) {
    return Up.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Nn() {
  }
  var $r = null;
  function Fr(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var cl = null, ol = null;
  function hf(e) {
    var t = ll(e);
    if (t && (e = t.stateNode)) {
      var n = e[Ht] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Zr(
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
              'input[name="' + ln(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var l = a[Ht] || null;
                if (!l) throw Error(s(90));
                Zr(
                  a,
                  l.value,
                  l.defaultValue,
                  l.defaultValue,
                  l.checked,
                  l.defaultChecked,
                  l.type,
                  l.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              a = n[t], a.form === e.form && rf(a);
          }
          break e;
        case "textarea":
          cf(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && rl(e, !!n.multiple, t, !1);
      }
    }
  }
  var Pr = !1;
  function mf(e, t, n) {
    if (Pr) return e(t, n);
    Pr = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (Pr = !1, (cl !== null || ol !== null) && (pr(), cl && (t = cl, e = ol, ol = cl = null, hf(t), e)))
        for (t = 0; t < e.length; t++) hf(e[t]);
    }
  }
  function li(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var a = n[Ht] || null;
    if (a === null) return null;
    n = a[t];
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
        (a = !a.disabled) || (e = e.type, a = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !a;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function")
      throw Error(
        s(231, t, typeof n)
      );
    return n;
  }
  var In = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Wr = !1;
  if (In)
    try {
      var ii = {};
      Object.defineProperty(ii, "passive", {
        get: function() {
          Wr = !0;
        }
      }), window.addEventListener("test", ii, ii), window.removeEventListener("test", ii, ii);
    } catch {
      Wr = !1;
    }
  var ea = null, es = null, vu = null;
  function gf() {
    if (vu) return vu;
    var e, t = es, n = t.length, a, l = "value" in ea ? ea.value : ea.textContent, i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var c = n - e;
    for (a = 1; a <= c && t[n - a] === l[i - a]; a++) ;
    return vu = l.slice(e, 1 < a ? 1 - a : void 0);
  }
  function yu(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function bu() {
    return !0;
  }
  function pf() {
    return !1;
  }
  function Dt(e) {
    function t(n, a, l, i, c) {
      this._reactName = n, this._targetInst = l, this.type = a, this.nativeEvent = i, this.target = c, this.currentTarget = null;
      for (var f in e)
        e.hasOwnProperty(f) && (n = e[f], this[f] = n ? n(i) : i[f]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? bu : pf, this.isPropagationStopped = pf, this;
    }
    return re(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = bu);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = bu);
      },
      persist: function() {
      },
      isPersistent: bu
    }), t;
  }
  var ta = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Eu = Dt(ta), ui = re({}, ta, { view: 0, detail: 0 }), zp = Dt(ui), ts, ns, ri, Su = re({}, ui, {
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
    getModifierState: ls,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== ri && (ri && e.type === "mousemove" ? (ts = e.screenX - ri.screenX, ns = e.screenY - ri.screenY) : ns = ts = 0, ri = e), ts);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : ns;
    }
  }), vf = Dt(Su), Mp = re({}, Su, { dataTransfer: 0 }), qp = Dt(Mp), Hp = re({}, ui, { relatedTarget: 0 }), as = Dt(Hp), Lp = re({}, ta, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Ip = Dt(Lp), Bp = re({}, ta, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Vp = Dt(Bp), Gp = re({}, ta, { data: 0 }), yf = Dt(Gp), Yp = {
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
  }, Xp = {
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
  }, Qp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Kp(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Qp[e]) ? !!t[e] : !1;
  }
  function ls() {
    return Kp;
  }
  var Zp = re({}, ui, {
    key: function(e) {
      if (e.key) {
        var t = Yp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = yu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Xp[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ls,
    charCode: function(e) {
      return e.type === "keypress" ? yu(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? yu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), kp = Dt(Zp), Jp = re({}, Su, {
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
  }), bf = Dt(Jp), $p = re({}, ta, { submitter: 0 }), Fp = Dt($p), Pp = re({}, ui, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ls
  }), Wp = Dt(Pp), ev = re({}, ta, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), tv = Dt(ev), nv = re({}, Su, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), av = Dt(nv), lv = re({}, ta, {
    newState: 0,
    oldState: 0,
    source: 0
  }), iv = Dt(lv), uv = [9, 13, 27, 32], is = In && "CompositionEvent" in window, si = null;
  In && "documentMode" in document && (si = document.documentMode);
  var rv = In && "TextEvent" in window && !si, Ef = In && (!is || si && 8 < si && 11 >= si), Sf = " ", Tf = !1;
  function Af(e, t) {
    switch (e) {
      case "keyup":
        return uv.indexOf(t.keyCode) !== -1;
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
  function Nf(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var fl = !1;
  function sv(e, t) {
    switch (e) {
      case "compositionend":
        return Nf(t);
      case "keypress":
        return t.which !== 32 ? null : (Tf = !0, Sf);
      case "textInput":
        return e = t.data, e === Sf && Tf ? null : e;
      default:
        return null;
    }
  }
  function cv(e, t) {
    if (fl)
      return e === "compositionend" || !is && Af(e, t) ? (e = gf(), vu = es = ea = null, fl = !1, e) : null;
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
        return Ef && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var ov = {
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
  function _f(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!ov[e.type] : t === "textarea";
  }
  function wf(e, t, n, a) {
    cl ? ol ? ol.push(a) : ol = [a] : cl = a, t = Tr(t, "onChange"), 0 < t.length && (n = new Eu(
      "onChange",
      "change",
      null,
      n,
      a
    ), e.push({ event: n, listeners: t }));
  }
  var ci = null, oi = null;
  function fv(e) {
    hm(e, 0);
  }
  function Tu(e) {
    var t = ai(e);
    if (rf(t)) return e;
  }
  function Of(e, t) {
    if (e === "change") return t;
  }
  var Cf = !1;
  if (In) {
    var us;
    if (In) {
      var rs = "oninput" in document;
      if (!rs) {
        var xf = document.createElement("div");
        xf.setAttribute("oninput", "return;"), rs = typeof xf.oninput == "function";
      }
      us = rs;
    } else us = !1;
    Cf = us && (!document.documentMode || 9 < document.documentMode);
  }
  function Rf() {
    ci && (ci.detachEvent("onpropertychange", jf), oi = ci = null);
  }
  function jf(e) {
    if (e.propertyName === "value" && Tu(oi)) {
      var t = [];
      wf(
        t,
        oi,
        e,
        Fr(e)
      ), mf(fv, t);
    }
  }
  function dv(e, t, n) {
    e === "focusin" ? (Rf(), ci = t, oi = n, ci.attachEvent("onpropertychange", jf)) : e === "focusout" && Rf();
  }
  function hv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Tu(oi);
  }
  function mv(e, t) {
    if (e === "click") return Tu(t);
  }
  function gv(e, t) {
    if (e === "input" || e === "change")
      return Tu(t);
  }
  function pv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Jt = typeof Object.is == "function" ? Object.is : pv;
  function fi(e, t) {
    if (Jt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var l = n[a];
      if (!pn.call(t, l) || !Jt(e[l], t[l]))
        return !1;
    }
    return !0;
  }
  function ss(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Df(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Uf(e, t) {
    var n = Df(e);
    e = 0;
    for (var a; n; ) {
      if (n.nodeType === 3) {
        if (a = e + n.textContent.length, e <= t && a >= t)
          return { node: n, offset: t - e };
        e = a;
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
      n = Df(n);
    }
  }
  function zf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? zf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Mf(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = ss(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = ss(e.document);
    }
    return t;
  }
  function cs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var vv = In && "documentMode" in document && 11 >= document.documentMode, dl = null, os = null, di = null, fs = !1;
  function qf(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    fs || dl == null || dl !== ss(a) || (a = dl, "selectionStart" in a && cs(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), di && fi(di, a) || (di = a, a = Tr(os, "onSelect"), 0 < a.length && (t = new Eu(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: a }), t.target = dl)));
  }
  function Ma(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var hl = {
    animationend: Ma("Animation", "AnimationEnd"),
    animationiteration: Ma("Animation", "AnimationIteration"),
    animationstart: Ma("Animation", "AnimationStart"),
    transitionrun: Ma("Transition", "TransitionRun"),
    transitionstart: Ma("Transition", "TransitionStart"),
    transitioncancel: Ma("Transition", "TransitionCancel"),
    transitionend: Ma("Transition", "TransitionEnd")
  }, ds = {}, Hf = {};
  In && (Hf = document.createElement("div").style, "AnimationEvent" in window || (delete hl.animationend.animation, delete hl.animationiteration.animation, delete hl.animationstart.animation), "TransitionEvent" in window || delete hl.transitionend.transition);
  function qa(e) {
    if (ds[e]) return ds[e];
    if (!hl[e]) return e;
    var t = hl[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in Hf)
        return ds[e] = t[n];
    return e;
  }
  var Lf = qa("animationend"), If = qa("animationiteration"), Bf = qa("animationstart"), yv = qa("transitionrun"), bv = qa("transitionstart"), Ev = qa("transitioncancel"), Vf = qa("transitionend"), Gf = /* @__PURE__ */ new Map(), hs = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  hs.push("scrollEnd");
  function vn(e, t) {
    Gf.set(e, t), za(t, [e]);
  }
  var Sv = 0;
  function Bn(e, t) {
    if (e.name != null && e.name !== "auto") return e.name;
    if (t.autoName !== null) return t.autoName;
    e = Sn.identifierPrefix;
    var n = Sv++;
    return e = "_" + e + "t_" + n.toString(32) + "_", t.autoName = e;
  }
  function Yf(e) {
    if (e == null || typeof e == "string")
      return e;
    var t = null, n = Ul;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var l = e[n[a]];
        if (l != null) {
          if (l === "none") return "none";
          t = t == null ? l : t + (" " + l);
        }
      }
    return t ?? e.default;
  }
  function Vn(e, t) {
    return e = Yf(e), t = Yf(t), t == null ? e === "auto" ? null : e : t === "auto" ? null : t;
  }
  var Au = typeof reportError == "function" ? reportError : function(e) {
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
  }, un = [], ml = 0, ms = 0;
  function Nu() {
    for (var e = ml, t = ms = ml = 0; t < e; ) {
      var n = un[t];
      un[t++] = null;
      var a = un[t];
      un[t++] = null;
      var l = un[t];
      un[t++] = null;
      var i = un[t];
      if (un[t++] = null, a !== null && l !== null) {
        var c = a.pending;
        c === null ? l.next = l : (l.next = c.next, c.next = l), a.pending = l;
      }
      i !== 0 && Xf(n, l, i);
    }
  }
  function _u(e, t, n, a) {
    un[ml++] = e, un[ml++] = t, un[ml++] = n, un[ml++] = a, ms |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function gs(e, t, n, a) {
    return _u(e, t, n, a), wu(e);
  }
  function Ha(e, t) {
    return _u(e, null, null, t), wu(e);
  }
  function Xf(e, t, n) {
    e.lanes |= n;
    var a = e.alternate;
    a !== null && (a.lanes |= n);
    for (var l = !1, i = e.return; i !== null; )
      i.childLanes |= n, a = i.alternate, a !== null && (a.childLanes |= n), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (l = !0)), e = i, i = i.return;
    return e.tag === 3 ? (i = e.stateNode, l && t !== null && (l = 31 - Zt(n), e = i.hiddenUpdates, a = e[l], a === null ? e[l] = [t] : a.push(t), t.lane = n | 536870912), i) : null;
  }
  function wu(e) {
    if (50 < zi)
      throw zi = 0, gr = null, Error(s(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var gl = {};
  function Tv(e, t, n, a) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Lt(e, t, n, a) {
    return new Tv(e, t, n, a);
  }
  function ps(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Gn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Lt(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 1206910976, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function Qf(e, t) {
    e.flags &= 1206910978;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Ou(e, t, n, a, l, i) {
    var c = 0;
    if (a = e, typeof a == "function") ps(a) && (c = 1);
    else if (typeof a == "string")
      c = $y(
        e,
        n,
        Xt.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (a) {
        case G:
          return e = Lt(31, n, t, l), e.elementType = G, e.lanes = i, e;
        case Te:
          return La(n.children, l, i, t);
        case V:
          c = 8, l |= 24;
          break;
        case fe:
          return e = Lt(12, n, t, l | 2), e.elementType = fe, e.lanes = i, e;
        case te:
          return e = Lt(13, n, t, l), e.elementType = te, e.lanes = i, e;
        case j:
          return e = Lt(19, n, t, l), e.elementType = j, e.lanes = i, e;
        case ne:
        case b:
          return e = l | 32, e = Lt(30, n, t, e), e.elementType = b, e.lanes = i, e.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, e;
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case q:
                c = 10;
                break e;
              case De:
                c = 9;
                break e;
              case M:
                c = 11;
                break e;
              case F:
                c = 14;
                break e;
              case L:
                c = 16, a = null;
                break e;
            }
          c = 29, n = Error(
            s(130, e === null ? "null" : typeof e, "")
          ), a = null;
      }
    return t = Lt(c, n, t, l), t.elementType = e, t.type = a, t.lanes = i, t;
  }
  function La(e, t, n, a) {
    return e = Lt(7, e, a, t), e.lanes = n, e;
  }
  function vs(e, t, n) {
    return e = Lt(6, e, null, t), e.lanes = n, e;
  }
  function Kf(e) {
    var t = Lt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function ys(e, t, n) {
    return t = Lt(
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
  var Zf = /* @__PURE__ */ new WeakMap();
  function rn(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = Zf.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: Pl(t)
      }, Zf.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Pl(t)
    };
  }
  var pl = [], vl = 0, Cu = null, hi = 0, sn = [], cn = 0, na = null, _n = 1, wn = "";
  function Yn(e, t) {
    pl[vl++] = hi, pl[vl++] = Cu, Cu = e, hi = t;
  }
  function kf(e, t, n) {
    sn[cn++] = _n, sn[cn++] = wn, sn[cn++] = na, na = e;
    var a = _n;
    e = wn;
    var l = 32 - Zt(a) - 1;
    a &= ~(1 << l), n += 1;
    var i = 32 - Zt(t) + l;
    if (30 < i) {
      var c = l - l % 5;
      i = (a & (1 << c) - 1).toString(32), a >>= c, l -= c, _n = 1 << 32 - Zt(t) + l | n << l | a, wn = i + e;
    } else
      _n = 1 << i | n << l | a, wn = e;
  }
  function xu(e) {
    e.return !== null && (Yn(e, 1), kf(e, 1, 0));
  }
  function bs(e) {
    for (; e === Cu; )
      Cu = pl[--vl], pl[vl] = null, hi = pl[--vl], pl[vl] = null;
    for (; e === na; )
      na = sn[--cn], sn[cn] = null, wn = sn[--cn], sn[cn] = null, _n = sn[--cn], sn[cn] = null;
  }
  function Jf(e, t) {
    sn[cn++] = _n, sn[cn++] = wn, sn[cn++] = na, _n = t.id, wn = t.overflow, na = e;
  }
  var pt = null, et = null, Ue = !1, aa = null, on = !1, Es = Error(s(519));
  function la(e) {
    var t = Error(
      s(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw mi(rn(t, e)), Es;
  }
  function $f(e) {
    var t = e.stateNode, n = e.type, a = e.memoizedProps;
    switch (t[Tt] = e, t[Ht] = a, n) {
      case "dialog":
        Me("cancel", t), Me("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Me("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < qi.length; n++)
          Me(qi[n], t);
        break;
      case "source":
        Me("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Me("error", t), Me("load", t);
        break;
      case "details":
        Me("toggle", t);
        break;
      case "input":
        Me("invalid", t), sf(
          t,
          a.value,
          a.defaultValue,
          a.checked,
          a.defaultChecked,
          a.type,
          a.name,
          !0
        );
        break;
      case "select":
        Me("invalid", t);
        break;
      case "textarea":
        Me("invalid", t), of(t, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === !0 || vm(t.textContent, n) ? (a.popover != null && (Me("beforetoggle", t), Me("toggle", t)), a.onScroll != null && Me("scroll", t), a.onScrollEnd != null && Me("scrollend", t), a.onClick != null && (t.onclick = Nn), t = !0) : t = !1, t || la(e, !0);
  }
  function Ru(e) {
    for (pt = e.return; pt; )
      switch (pt.tag) {
        case 5:
        case 31:
        case 13:
          on = !1;
          return;
        case 27:
        case 3:
          on = !0;
          return;
        default:
          pt = pt.return;
      }
  }
  function yl(e) {
    if (e !== pt) return !1;
    if (!Ue) return Ru(e), Ue = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || $c(e.type, e.memoizedProps)), n = !n), n && et && la(e), Ru(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      et = qm(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      et = qm(e);
    } else
      t === 27 ? (t = et, Ea(e.type) ? (e = io, io = null, et = e) : et = t) : et = pt ? dn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ia() {
    et = pt = null, Ue = !1;
  }
  function Ss() {
    var e = aa;
    return e !== null && (Vt === null ? Vt = e : Vt.push.apply(
      Vt,
      e
    ), aa = null), e;
  }
  function mi(e) {
    aa === null ? aa = [e] : aa.push(e);
  }
  var Ts = an(null), Ba = null, Xn = null;
  function ia(e, t, n) {
    Qe(Ts, t._currentValue), t._currentValue = n;
  }
  function Qn(e) {
    e._currentValue = Ts.current, Ne(Ts);
  }
  function ju(e, t, n) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function As(e, t, n, a) {
    var l = e.child;
    for (l !== null && (l.return = e); l !== null; ) {
      var i = l.dependencies;
      if (i !== null) {
        var c = l.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var f = i;
          i = l;
          for (var v = 0; v < t.length; v++)
            if (f.context === t[v]) {
              i.lanes |= n, f = i.alternate, f !== null && (f.lanes |= n), ju(
                i.return,
                n,
                e
              ), a || (c = null);
              break e;
            }
          i = f.next;
        }
      } else if (l.tag === 18) {
        if (c = l.return, c === null) throw Error(s(341));
        c.lanes |= n, i = c.alternate, i !== null && (i.lanes |= n), ju(c, n, e), c = null;
      } else
        l.tag === 13 && l.memoizedState !== null && l.memoizedState.dehydrated === null ? (l.lanes |= n, c = l.alternate, c !== null && (c.lanes |= n), ju(
          l.return,
          n,
          e
        ), c = l.child, c = c !== null ? c.sibling : null) : c = l.child;
      if (c !== null) c.return = l;
      else
        for (c = l; c !== null; ) {
          if (c === e) {
            c = null;
            break;
          }
          if (l = c.sibling, l !== null) {
            l.return = c.return, c = l;
            break;
          }
          c = c.return;
        }
      l = c;
    }
  }
  function Va(e, t, n, a) {
    e = null;
    for (var l = t, i = !1; l !== null; ) {
      if (!i) {
        if ((l.flags & 524288) !== 0) i = !0;
        else if ((l.flags & 262144) !== 0) break;
      }
      if (l.tag === 10) {
        var c = l.alternate;
        if (c === null) throw Error(s(387));
        if (c = c.memoizedProps, c !== null) {
          var f = l.type;
          Jt(l.pendingProps.value, c.value) || (e !== null ? e.push(f) : e = [f]);
        }
      } else if (l === I.current) {
        if (c = l.alternate, c === null) throw Error(s(387));
        c.memoizedState.memoizedState !== l.memoizedState.memoizedState && (e !== null ? e.push(Yl) : e = [Yl]);
      }
      l = l.return;
    }
    return e !== null && As(
      t,
      e,
      n,
      a
    ), t.flags |= 262144, e !== null;
  }
  function Du(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Jt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Ga(e) {
    Ba = e, Xn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function At(e) {
    return Ff(Ba, e);
  }
  function Uu(e, t) {
    return Ba === null && Ga(e), Ff(e, t);
  }
  function Ff(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, Xn === null) {
      if (e === null) throw Error(s(308));
      Xn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Xn = Xn.next = t;
    return n;
  }
  var Av = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(n, a) {
        e.push(a);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(n) {
        return n();
      });
    };
  }, Nv = u.unstable_scheduleCallback, _v = u.unstable_NormalPriority, st = {
    $$typeof: q,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Ns() {
    return {
      controller: new Av(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function gi(e) {
    e.refCount--, e.refCount === 0 && Nv(_v, function() {
      e.controller.abort();
    });
  }
  function Pf(e, t) {
    if ((e.pendingLanes & 4194048) !== 0) {
      var n = e.transitionTypes;
      for (n === null && (n = e.transitionTypes = []), e = 0; e < t.length; e++) {
        var a = t[e];
        n.indexOf(a) === -1 && n.push(a);
      }
    }
  }
  var pi = null;
  function wv(e) {
    var t = e.transitionTypes;
    return e.transitionTypes = null, t;
  }
  var vi = null, _s = 0, Ya = 0, bl = null;
  function Ov(e, t) {
    if (vi === null) {
      var n = vi = [];
      _s = 0, Ya = Vc(), bl = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return _s++, t.then(Wf, Wf), t;
  }
  function Wf() {
    if (--_s === 0 && (pi = null, vi !== null)) {
      bl !== null && (bl.status = "fulfilled");
      var e = vi;
      vi = null, Ya = 0, bl = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Cv(e, t) {
    var n = [], a = {
      status: "pending",
      value: null,
      reason: null,
      then: function(l) {
        n.push(l);
      }
    };
    return e.then(
      function() {
        a.status = "fulfilled", a.value = t;
        for (var l = 0; l < n.length; l++) (0, n[l])(t);
      },
      function(l) {
        for (a.status = "rejected", a.reason = l, l = 0; l < n.length; l++)
          (0, n[l])(void 0);
      }
    ), a;
  }
  var ed = ee.S;
  ee.S = function(e, t) {
    if (Kh = Qt(), typeof t == "object" && t !== null && typeof t.then == "function" && Ov(e, t), pi !== null)
      for (var n = Hl; n !== null; )
        Pf(n, pi), n = n.next;
    if (n = e.types, n !== null) {
      for (var a = Hl; a !== null; )
        Pf(a, n), a = a.next;
      if (Ya !== 0) {
        a = pi, a === null && (a = pi = []);
        for (var l = 0; l < n.length; l++) {
          var i = n[l];
          a.indexOf(i) === -1 && a.push(i);
        }
      }
    }
    ed !== null && ed(e, t);
  };
  var Xa = an(null);
  function ws() {
    var e = Xa.current;
    return e !== null ? e : Fe.pooledCache;
  }
  function zu(e, t) {
    t === null ? Qe(Xa, Xa.current) : Qe(Xa, t.pool);
  }
  function td() {
    var e = ws();
    return e === null ? null : { parent: st._currentValue, pool: e };
  }
  var El = Error(s(460)), Os = Error(s(474)), Mu = Error(s(542)), qu = { then: function() {
  } };
  function nd(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function ad(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Nn, Nn), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, id(e), e === void 0 && !("reason" in t) ? Error(s(600)) : e;
      default:
        if (typeof t.status == "string") t.then(Nn, Nn);
        else {
          if (e = Fe, e !== null && 100 < e.shellSuspendCounter)
            throw Error(s(482));
          e = t, e.status = "pending", e.then(
            function(a) {
              if (t.status === "pending") {
                var l = t;
                l.status = "fulfilled", l.value = a;
              }
            },
            function(a) {
              if (t.status === "pending") {
                var l = t;
                l.status = "rejected", l.reason = a;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, id(e), e;
        }
        throw Ka = t, El;
    }
  }
  function Qa(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (Ka = n, El) : n;
    }
  }
  var Ka = null;
  function ld() {
    if (Ka === null) throw Error(s(459));
    var e = Ka;
    return Ka = null, e;
  }
  function id(e) {
    if (e === El || e === Mu)
      throw Error(s(483));
  }
  var Sl = null, yi = 0;
  function Hu(e) {
    var t = yi;
    return yi += 1, Sl === null && (Sl = []), ad(Sl, e, t);
  }
  function ua(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Lu(e, t) {
    throw t.$$typeof === Se ? Error(s(525)) : (e = Object.prototype.toString.call(t), Error(
      s(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function ud(e) {
    function t(w, T) {
      if (e) {
        var R = w.deletions;
        R === null ? (w.deletions = [T], w.flags |= 16) : R.push(T);
      }
    }
    function n(w, T) {
      if (!e) return null;
      for (; T !== null; )
        t(w, T), T = T.sibling;
      return null;
    }
    function a(w) {
      for (var T = /* @__PURE__ */ new Map(); w !== null; )
        w.key === null ? T.set(w.index, w) : T.set(w.key, w), w = w.sibling;
      return T;
    }
    function l(w, T) {
      return w = Gn(w, T), w.index = 0, w.sibling = null, w;
    }
    function i(w, T, R) {
      return w.index = R, e ? (R = w.alternate, R !== null ? (R = R.index, R < T ? (w.flags |= 2, T) : R) : (w.flags |= 134217730, T)) : (w.flags |= 1048576, T);
    }
    function c(w) {
      return e && w.alternate === null && (w.flags |= 134217730), w;
    }
    function f(w, T, R, X) {
      return T === null || T.tag !== 6 ? (T = vs(R, w.mode, X), T.return = w, T) : (T = l(T, R), T.return = w, T);
    }
    function v(w, T, R, X) {
      var he = R.type;
      return he === Te ? (w = U(
        w,
        T,
        R.props.children,
        X,
        R.key
      ), ua(w, R), w) : T !== null && (T.elementType === he || typeof he == "object" && he !== null && he.$$typeof === L && Qa(he) === T.type) ? (T = l(T, R.props), ua(T, R), T.return = w, T) : (T = Ou(
        R.type,
        R.key,
        R.props,
        null,
        w.mode,
        X
      ), ua(T, R), T.return = w, T);
    }
    function C(w, T, R, X) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== R.containerInfo || T.stateNode.implementation !== R.implementation ? (T = ys(R, w.mode, X), T.return = w, T) : (T = l(T, R.children || []), T.return = w, T);
    }
    function U(w, T, R, X, he) {
      return T === null || T.tag !== 7 ? (T = La(
        R,
        w.mode,
        X,
        he
      ), T.return = w, T) : (T = l(T, R), T.return = w, T);
    }
    function Q(w, T, R) {
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
        return T = vs(
          "" + T,
          w.mode,
          R
        ), T.return = w, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case ie:
            return R = Ou(
              T.type,
              T.key,
              T.props,
              null,
              w.mode,
              R
            ), ua(R, T), R.return = w, R;
          case oe:
            return T = ys(
              T,
              w.mode,
              R
            ), T.return = w, T;
          case L:
            return T = Qa(T), Q(w, T, R);
        }
        if (se(T) || P(T))
          return T = La(
            T,
            w.mode,
            R,
            null
          ), T.return = w, T;
        if (typeof T.then == "function")
          return Q(w, Hu(T), R);
        if (T.$$typeof === q)
          return Q(
            w,
            Uu(w, T),
            R
          );
        Lu(w, T);
      }
      return null;
    }
    function _(w, T, R, X) {
      var he = T !== null ? T.key : null;
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return he !== null ? null : f(w, T, "" + R, X);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case ie:
            return R.key === he ? v(w, T, R, X) : null;
          case oe:
            return R.key === he ? C(w, T, R, X) : null;
          case L:
            return R = Qa(R), _(w, T, R, X);
        }
        if (se(R) || P(R))
          return he !== null ? null : U(w, T, R, X, null);
        if (typeof R.then == "function")
          return _(
            w,
            T,
            Hu(R),
            X
          );
        if (R.$$typeof === q)
          return _(
            w,
            T,
            Uu(w, R),
            X
          );
        Lu(w, R);
      }
      return null;
    }
    function D(w, T, R, X, he) {
      if (typeof X == "string" && X !== "" || typeof X == "number" || typeof X == "bigint")
        return w = w.get(R) || null, f(T, w, "" + X, he);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case ie:
            return w = w.get(
              X.key === null ? R : X.key
            ) || null, v(T, w, X, he);
          case oe:
            return w = w.get(
              X.key === null ? R : X.key
            ) || null, C(T, w, X, he);
          case L:
            return X = Qa(X), D(
              w,
              T,
              R,
              X,
              he
            );
        }
        if (se(X) || P(X))
          return w = w.get(R) || null, U(T, w, X, he, null);
        if (typeof X.then == "function")
          return D(
            w,
            T,
            R,
            Hu(X),
            he
          );
        if (X.$$typeof === q)
          return D(
            w,
            T,
            R,
            Uu(T, X),
            he
          );
        Lu(T, X);
      }
      return null;
    }
    function ue(w, T, R, X) {
      for (var he = null, He = null, Ae = T, _e = T = 0, ft = null; Ae !== null && _e < R.length; _e++) {
        Ae.index > _e ? (ft = Ae, Ae = null) : ft = Ae.sibling;
        var Le = _(
          w,
          Ae,
          R[_e],
          X
        );
        if (Le === null) {
          Ae === null && (Ae = ft);
          break;
        }
        e && Ae && Le.alternate === null && t(w, Ae), T = i(Le, T, _e), He === null ? he = Le : He.sibling = Le, He = Le, Ae = ft;
      }
      if (_e === R.length)
        return n(w, Ae), Ue && Yn(w, _e), he;
      if (Ae === null) {
        for (; _e < R.length; _e++)
          Ae = Q(w, R[_e], X), Ae !== null && (T = i(
            Ae,
            T,
            _e
          ), He === null ? he = Ae : He.sibling = Ae, He = Ae);
        return Ue && Yn(w, _e), he;
      }
      for (Ae = a(Ae); _e < R.length; _e++)
        ft = D(
          Ae,
          w,
          _e,
          R[_e],
          X
        ), ft !== null && (e && (Le = ft.alternate, Le !== null && Ae.delete(Le.key === null ? _e : Le.key)), T = i(
          ft,
          T,
          _e
        ), He === null ? he = ft : He.sibling = ft, He = ft);
      return e && Ae.forEach(function(_a) {
        return t(w, _a);
      }), Ue && Yn(w, _e), he;
    }
    function ge(w, T, R, X) {
      if (R == null) throw Error(s(151));
      for (var he = null, He = null, Ae = T, _e = T = 0, ft = null, Le = R.next(); Ae !== null && !Le.done; _e++, Le = R.next()) {
        Ae.index > _e ? (ft = Ae, Ae = null) : ft = Ae.sibling;
        var _a = _(w, Ae, Le.value, X);
        if (_a === null) {
          Ae === null && (Ae = ft);
          break;
        }
        e && Ae && _a.alternate === null && t(w, Ae), T = i(_a, T, _e), He === null ? he = _a : He.sibling = _a, He = _a, Ae = ft;
      }
      if (Le.done)
        return n(w, Ae), Ue && Yn(w, _e), he;
      if (Ae === null) {
        for (; !Le.done; _e++, Le = R.next())
          Le = Q(w, Le.value, X), Le !== null && (T = i(Le, T, _e), He === null ? he = Le : He.sibling = Le, He = Le);
        return Ue && Yn(w, _e), he;
      }
      for (Ae = a(Ae); !Le.done; _e++, Le = R.next())
        Le = D(Ae, w, _e, Le.value, X), Le !== null && (e && (ft = Le.alternate, ft !== null && Ae.delete(
          ft.key === null ? _e : ft.key
        )), T = i(Le, T, _e), He === null ? he = Le : He.sibling = Le, He = Le);
      return e && Ae.forEach(function(s0) {
        return t(w, s0);
      }), Ue && Yn(w, _e), he;
    }
    function je(w, T, R, X) {
      if (typeof R == "object" && R !== null && R.type === Te && R.key === null && R.props.ref === void 0 && (R = R.props.children), typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case ie:
            e: {
              for (var he = R.key; T !== null; ) {
                if (T.key === he) {
                  if (he = R.type, he === Te) {
                    if (T.tag === 7) {
                      n(
                        w,
                        T.sibling
                      ), X = l(
                        T,
                        R.props.children
                      ), ua(X, R), X.return = w, w = X;
                      break e;
                    }
                  } else if (T.elementType === he || typeof he == "object" && he !== null && he.$$typeof === L && Qa(he) === T.type) {
                    n(
                      w,
                      T.sibling
                    ), X = l(T, R.props), ua(X, R), X.return = w, w = X;
                    break e;
                  }
                  n(w, T);
                  break;
                } else t(w, T);
                T = T.sibling;
              }
              R.type === Te ? (X = La(
                R.props.children,
                w.mode,
                X,
                R.key
              ), ua(X, R), X.return = w, w = X) : (X = Ou(
                R.type,
                R.key,
                R.props,
                null,
                w.mode,
                X
              ), ua(X, R), X.return = w, w = X);
            }
            return c(w);
          case oe:
            e: {
              for (he = R.key; T !== null; ) {
                if (T.key === he)
                  if (T.tag === 4 && T.stateNode.containerInfo === R.containerInfo && T.stateNode.implementation === R.implementation) {
                    n(
                      w,
                      T.sibling
                    ), X = l(T, R.children || []), X.return = w, w = X;
                    break e;
                  } else {
                    n(w, T);
                    break;
                  }
                else t(w, T);
                T = T.sibling;
              }
              X = ys(R, w.mode, X), X.return = w, w = X;
            }
            return c(w);
          case L:
            return R = Qa(R), je(
              w,
              T,
              R,
              X
            );
        }
        if (se(R))
          return ue(
            w,
            T,
            R,
            X
          );
        if (P(R)) {
          if (he = P(R), typeof he != "function") throw Error(s(150));
          return R = he.call(R), ge(
            w,
            T,
            R,
            X
          );
        }
        if (typeof R.then == "function")
          return je(
            w,
            T,
            Hu(R),
            X
          );
        if (R.$$typeof === q)
          return je(
            w,
            T,
            Uu(w, R),
            X
          );
        Lu(w, R);
      }
      return typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint" ? (R = "" + R, T !== null && T.tag === 6 ? (n(w, T.sibling), X = l(T, R), X.return = w, w = X) : (n(w, T), X = vs(R, w.mode, X), X.return = w, w = X), c(w)) : n(w, T);
    }
    return function(w, T, R, X) {
      try {
        yi = 0;
        var he = je(
          w,
          T,
          R,
          X
        );
        return Sl = null, he;
      } catch (Ae) {
        if (Ae === El || Ae === Mu) throw Ae;
        var He = Lt(29, Ae, null, w.mode);
        return He.lanes = X, He.return = w, He;
      }
    };
  }
  var Za = ud(!0), rd = ud(!1), ra = !1;
  function Cs(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function xs(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function sa(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ca(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (Ge & 2) !== 0) {
      var l = a.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), a.pending = t, t = wu(e), Xf(e, null, n), t;
    }
    return _u(e, a, t, n), wu(e);
  }
  function bi(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, Zo(e, n);
    }
  }
  function Rs(e, t) {
    var n = e.updateQueue, a = e.alternate;
    if (a !== null && (a = a.updateQueue, n === a)) {
      var l = null, i = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var c = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          i === null ? l = i = c : i = i.next = c, n = n.next;
        } while (n !== null);
        i === null ? l = i = t : i = i.next = t;
      } else l = i = t;
      n = {
        baseState: a.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: i,
        shared: a.shared,
        callbacks: a.callbacks
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  var js = !1;
  function Ei() {
    if (js) {
      var e = bl;
      if (e !== null) throw e;
    }
  }
  function Si(e, t, n, a) {
    js = !1;
    var l = e.updateQueue;
    ra = !1;
    var i = l.firstBaseUpdate, c = l.lastBaseUpdate, f = l.shared.pending;
    if (f !== null) {
      l.shared.pending = null;
      var v = f, C = v.next;
      v.next = null, c === null ? i = C : c.next = C, c = v;
      var U = e.alternate;
      U !== null && (U = U.updateQueue, f = U.lastBaseUpdate, f !== c && (f === null ? U.firstBaseUpdate = C : f.next = C, U.lastBaseUpdate = v));
    }
    if (i !== null) {
      var Q = l.baseState;
      c = 0, U = C = v = null, f = i;
      do {
        var _ = f.lane & -536870913, D = _ !== f.lane;
        if (D ? (qe & _) === _ : (a & _) === _) {
          _ !== 0 && _ === Ya && (js = !0), U !== null && (U = U.next = {
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: null,
            next: null
          });
          e: {
            var ue = e, ge = f;
            _ = t;
            var je = n;
            switch (ge.tag) {
              case 1:
                if (ue = ge.payload, typeof ue == "function") {
                  Q = ue.call(je, Q, _);
                  break e;
                }
                Q = ue;
                break e;
              case 3:
                ue.flags = ue.flags & -65537 | 128;
              case 0:
                if (ue = ge.payload, _ = typeof ue == "function" ? ue.call(je, Q, _) : ue, _ == null) break e;
                Q = re({}, Q, _);
                break e;
              case 2:
                ra = !0;
            }
          }
          _ = f.callback, _ !== null && (e.flags |= 64, D && (e.flags |= 8192), D = l.callbacks, D === null ? l.callbacks = [_] : D.push(_));
        } else
          D = {
            lane: _,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          }, U === null ? (C = U = D, v = Q) : U = U.next = D, c |= _;
        if (f = f.next, f === null) {
          if (f = l.shared.pending, f === null)
            break;
          D = f, f = D.next, D.next = null, l.lastBaseUpdate = D, l.shared.pending = null;
        }
      } while (!0);
      U === null && (v = Q), l.baseState = v, l.firstBaseUpdate = C, l.lastBaseUpdate = U, i === null && (l.shared.lanes = 0), pa |= c, e.lanes = c, e.memoizedState = Q;
    }
  }
  function sd(e, t) {
    if (typeof e != "function")
      throw Error(s(191, e));
    e.call(t);
  }
  function cd(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        sd(n[e], t);
  }
  var oa = an(null), Iu = an(0);
  function od(e, t) {
    e = $n, Qe(Iu, e), Qe(oa, t), $n = e | t.baseLanes;
  }
  function Ds() {
    Qe(Iu, $n), Qe(oa, oa.current);
  }
  function Us() {
    $n = Iu.current, Ne(oa), Ne(Iu);
  }
  var Nt = an(null), jt = null;
  function fa(e) {
    var t = e.alternate;
    Qe(_t, _t.current & 1), Qe(Nt, e), jt === null && (t === null || oa.current !== null || t.memoizedState !== null) && (jt = e);
  }
  function zs(e) {
    Qe(_t, _t.current), Qe(Nt, e), jt === null && (jt = e);
  }
  function fd(e) {
    e.tag === 22 ? (Qe(_t, _t.current), Qe(Nt, e), jt === null && (jt = e)) : da();
  }
  function da() {
    Qe(_t, _t.current), Qe(Nt, Nt.current);
  }
  function $t(e) {
    Ne(Nt), jt === e && (jt = null), Ne(_t);
  }
  var _t = an(0);
  function Ti(e, t) {
    Qe(Nt, Nt.current), Qe(_t, t);
  }
  function Ms(e) {
    Ne(_t), Ne(Nt), jt === e && (jt = null);
  }
  function Bu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || ao(n) || lo(n)))
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
  var Kn = 0, Re = null, Je = null, ct = null, Vu = !1, Tl = !1, ka = !1, Gu = 0, Ai = 0, Al = null, xv = 0;
  function lt() {
    throw Error(s(321));
  }
  function qs(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Jt(e[n], t[n])) return !1;
    return !0;
  }
  function Hs(e, t, n, a, l, i) {
    return Kn = i, Re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ee.H = e === null || e.memoizedState === null ? kd : Jd, ka = !1, i = n(a, l), ka = !1, Tl && (i = hd(
      t,
      n,
      a,
      l
    )), dd(e), i;
  }
  function dd(e) {
    ee.H = Ju;
    var t = Je !== null && Je.next !== null;
    if (Kn = 0, ct = Je = Re = null, Vu = !1, Ai = 0, Al = null, t) throw Error(s(300));
    e === null || ot || (e = e.dependencies, e !== null && Du(e) && (ot = !0));
  }
  function hd(e, t, n, a) {
    Re = e;
    var l = 0;
    do {
      if (Tl && (Al = null), Ai = 0, Tl = !1, 25 <= l) throw Error(s(301));
      if (l += 1, ct = Je = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      ee.H = Hv, i = t(n, a);
    } while (Tl);
    return i;
  }
  function Rv() {
    var e = ee.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Ni(t) : t, e = e.useState()[0], (Je !== null ? Je.memoizedState : null) !== e && (Re.flags |= 1024), t;
  }
  function Ls() {
    var e = Gu !== 0;
    return Gu = 0, e;
  }
  function Is(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function Bs(e) {
    if (Vu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Vu = !1;
    }
    Kn = 0, ct = Je = Re = null, Tl = !1, Ai = Gu = 0, Al = null;
  }
  function Ut() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return ct === null ? Re.memoizedState = ct = e : ct = ct.next = e, ct;
  }
  function ut() {
    if (Je === null) {
      var e = Re.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Je.next;
    var t = ct === null ? Re.memoizedState : ct.next;
    if (t !== null)
      ct = t, Je = e;
    else {
      if (e === null)
        throw Re.alternate === null ? Error(s(467)) : Error(s(310));
      Je = e, e = {
        memoizedState: Je.memoizedState,
        baseState: Je.baseState,
        baseQueue: Je.baseQueue,
        queue: Je.queue,
        next: null
      }, ct === null ? Re.memoizedState = ct = e : ct = ct.next = e;
    }
    return ct;
  }
  function Yu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ni(e) {
    var t = Ai;
    return Ai += 1, Al === null && (Al = []), e = ad(Al, e, t), t = Re, (ct === null ? t.memoizedState : ct.next) === null && (t = t.alternate, ee.H = t === null || t.memoizedState === null ? kd : Jd), e;
  }
  function Xu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ni(e);
      if (e.$$typeof === z) return;
      if (e.$$typeof === q) return At(e);
    }
    throw Error(s(438, String(e)));
  }
  function Vs(e) {
    var t = null, n = Re.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var a = Re.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(l) {
          return l.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = Yu(), Re.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++)
        n[a] = $;
    return t.index++, n;
  }
  function Zn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Qu(e) {
    var t = ut();
    return Gs(t, Je, e);
  }
  function Gs(e, t, n) {
    var a = e.queue;
    if (a === null) throw Error(s(311));
    a.lastRenderedReducer = n;
    var l = e.baseQueue, i = a.pending;
    if (i !== null) {
      if (l !== null) {
        var c = l.next;
        l.next = i.next, i.next = c;
      }
      t.baseQueue = l = i, a.pending = null;
    }
    if (i = e.baseState, l === null) e.memoizedState = i;
    else {
      t = l.next;
      var f = c = null, v = null, C = t, U = !1;
      do {
        var Q = C.lane & -536870913;
        if (Q !== C.lane ? (qe & Q) === Q : (Kn & Q) === Q) {
          var _ = C.revertLane;
          if (_ === 0)
            v !== null && (v = v.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }), Q === Ya && (U = !0);
          else if ((Kn & _) === _) {
            C = C.next, _ === Ya && (U = !0);
            continue;
          } else
            Q = {
              lane: 0,
              revertLane: C.revertLane,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }, v === null ? (f = v = Q, c = i) : v = v.next = Q, Re.lanes |= _, pa |= _;
          Q = C.action, ka && n(i, Q), i = C.hasEagerState ? C.eagerState : n(i, Q);
        } else
          _ = {
            lane: Q,
            revertLane: C.revertLane,
            gesture: C.gesture,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null
          }, v === null ? (f = v = _, c = i) : v = v.next = _, Re.lanes |= Q, pa |= Q;
        C = C.next;
      } while (C !== null && C !== t);
      if (v === null ? c = i : v.next = f, !Jt(i, e.memoizedState) && (ot = !0, U && (n = bl, n !== null)))
        throw n;
      e.memoizedState = i, e.baseState = c, e.baseQueue = v, a.lastRenderedState = i;
    }
    return l === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function Ys(e) {
    var t = ut(), n = t.queue;
    if (n === null) throw Error(s(311));
    n.lastRenderedReducer = e;
    var a = n.dispatch, l = n.pending, i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var c = l = l.next;
      do
        i = e(i, c.action), c = c.next;
      while (c !== l);
      Jt(i, t.memoizedState) || (ot = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
    }
    return [i, a];
  }
  function md(e, t, n) {
    var a = Re, l = ut(), i = Ue;
    if (i) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else n = t();
    var c = !Jt(
      (Je || l).memoizedState,
      n
    );
    if (c && (l.memoizedState = n, ot = !0), l = l.queue, Ks(vd.bind(null, a, l, e), [
      e
    ]), e = l.getSnapshot !== t || c || ct !== null && (ct.memoizedState.tag & 1) !== 0, Nl(
      e ? 9 : 8,
      { destroy: void 0 },
      pd.bind(null, a, l, n, t),
      null
    ), e) {
      if (a.flags |= 2048, Fe === null) throw Error(s(349));
      i || (Kn & 127) !== 0 || gd(a, t, n);
    }
    return n;
  }
  function gd(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Re.updateQueue, t === null ? (t = Yu(), Re.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function pd(e, t, n, a) {
    t.value = n, t.getSnapshot = a, yd(t) && bd(e);
  }
  function vd(e, t, n) {
    return n(function() {
      yd(t) && bd(e);
    });
  }
  function yd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Jt(e, n);
    } catch {
      return !0;
    }
  }
  function bd(e) {
    var t = Ha(e, 2);
    t !== null && Gt(t, e, 2);
  }
  function Xs(e) {
    var t = Ut();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), ka) {
        Wn(!0);
        try {
          n();
        } finally {
          Wn(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Zn,
      lastRenderedState: e
    }, t;
  }
  function Ed(e, t, n, a) {
    return e.baseState = n, Gs(
      e,
      Je,
      typeof a == "function" ? a : Zn
    );
  }
  function jv(e, t, n, a, l) {
    if (ku(e)) throw Error(s(485));
    if (e = t.action, e !== null) {
      var i = {
        payload: l,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(c) {
          i.listeners.push(c);
        }
      };
      ee.T !== null ? n(!0) : i.isTransition = !1, a(i), n = t.pending, n === null ? (i.next = t.pending = i, Sd(t, i)) : (i.next = n.next, t.pending = n.next = i);
    }
  }
  function Sd(e, t) {
    var n = t.action, a = t.payload, l = e.state;
    if (t.isTransition) {
      var i = ee.T, c = {};
      c.types = i !== null ? i.types : null, ee.T = c;
      try {
        var f = n(l, a), v = ee.S;
        v !== null && v(c, f), Td(e, t, f);
      } catch (C) {
        Qs(e, t, C);
      } finally {
        i !== null && c.types !== null && (i.types = c.types), ee.T = i;
      }
    } else
      try {
        i = n(l, a), Td(e, t, i);
      } catch (C) {
        Qs(e, t, C);
      }
  }
  function Td(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        Ad(e, t, a);
      },
      function(a) {
        return Qs(e, t, a);
      }
    ) : Ad(e, t, n);
  }
  function Ad(e, t, n) {
    t.status = "fulfilled", t.value = n, Nd(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Sd(e, n)));
  }
  function Qs(e, t, n) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = n, Nd(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function Nd(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function _d(e, t) {
    return t;
  }
  function wd(e, t) {
    if (Ue) {
      var n = Fe.formState;
      if (n !== null) {
        e: {
          var a = Re;
          if (Ue) {
            if (et) {
              t: {
                for (var l = et, i = on; l.nodeType !== 8; ) {
                  if (!i) {
                    l = null;
                    break t;
                  }
                  if (l = dn(
                    l.nextSibling
                  ), l === null) {
                    l = null;
                    break t;
                  }
                }
                i = l.data, l = i === "F!" || i === "F" ? l : null;
              }
              if (l) {
                et = dn(
                  l.nextSibling
                ), a = l.data === "F!";
                break e;
              }
            }
            la(a);
          }
          a = !1;
        }
        a && (t = n[0]);
      }
    }
    return n = Ut(), n.memoizedState = n.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: _d,
      lastRenderedState: t
    }, n.queue = a, n = Qd.bind(
      null,
      Re,
      a
    ), a.dispatch = n, a = Xs(!1), i = Fs.bind(
      null,
      Re,
      !1,
      a.queue
    ), a = Ut(), l = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = l, n = jv.bind(
      null,
      Re,
      l,
      i,
      n
    ), l.dispatch = n, a.memoizedState = e, [t, n, !1];
  }
  function Od(e) {
    var t = ut();
    return Cd(t, Je, e);
  }
  function Cd(e, t, n) {
    if (t = Gs(
      e,
      t,
      _d
    )[0], e = Qu(Zn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Ni(t);
      } catch (c) {
        throw c === El ? Mu : c;
      }
    else a = t;
    t = ut();
    var l = t.queue, i = l.dispatch;
    return n !== t.memoizedState && (Re.flags |= 2048, Nl(
      9,
      { destroy: void 0 },
      Dv.bind(null, l, n),
      null
    )), [a, i, e];
  }
  function Dv(e, t) {
    e.action = t;
  }
  function xd(e) {
    var t = ut(), n = Je;
    if (n !== null)
      return Cd(t, n, e);
    ut(), t = t.memoizedState, n = ut();
    var a = n.queue.dispatch;
    return n.memoizedState = e, [t, a, !1];
  }
  function Nl(e, t, n, a) {
    return e = { tag: e, create: n, deps: a, inst: t, next: null }, t = Re.updateQueue, t === null && (t = Yu(), Re.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
  }
  function Rd() {
    return ut().memoizedState;
  }
  function Ku(e, t, n, a) {
    var l = Ut();
    Re.flags |= e, l.memoizedState = Nl(
      1 | t,
      { destroy: void 0 },
      n,
      a === void 0 ? null : a
    );
  }
  function Zu(e, t, n, a) {
    var l = ut();
    a = a === void 0 ? null : a;
    var i = l.memoizedState.inst;
    Je !== null && a !== null && qs(a, Je.memoizedState.deps) ? l.memoizedState = Nl(t, i, n, a) : (Re.flags |= e, l.memoizedState = Nl(
      1 | t,
      i,
      n,
      a
    ));
  }
  function jd(e, t) {
    Ku(8390656, 8, e, t);
  }
  function Ks(e, t) {
    Zu(2048, 8, e, t);
  }
  function Uv(e) {
    Re.flags |= 4;
    var t = Re.updateQueue;
    if (t === null)
      t = Yu(), Re.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function Dd(e) {
    var t = ut().memoizedState;
    return Uv({ ref: t, nextImpl: e }), function() {
      if ((Ge & 2) !== 0) throw Error(s(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Ud(e, t) {
    return Zu(4, 2, e, t);
  }
  function zd(e, t) {
    return Zu(4, 4, e, t);
  }
  function Md(e, t) {
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
  function qd(e, t, n) {
    n = n != null ? n.concat([e]) : null, Zu(4, 4, Md.bind(null, t, e), n);
  }
  function Zs() {
  }
  function Hd(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && qs(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
  }
  function Ld(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && qs(t, a[1]))
      return a[0];
    if (a = e(), ka) {
      Wn(!0);
      try {
        e();
      } finally {
        Wn(!1);
      }
    }
    return n.memoizedState = [a, t], a;
  }
  function ks(e, t, n) {
    return n === void 0 || (Kn & 1073741824) !== 0 && (qe & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = kh(), Re.lanes |= e, pa |= e, n);
  }
  function Id(e, t, n, a) {
    return Jt(n, t) ? n : oa.current !== null ? (e = ks(e, n, a), Jt(e, t) || (ot = !0), e) : (Kn & 106) === 0 || (Kn & 1073741824) !== 0 && (qe & 261930) === 0 ? (ot = !0, e.memoizedState = n) : (e = kh(), Re.lanes |= e, pa |= e, t);
  }
  function Bd(e, t, n, a, l) {
    var i = ce.p;
    ce.p = i !== 0 && 8 > i ? i : 8;
    var c = ee.T, f = {};
    f.types = c !== null ? c.types : null, ee.T = f, Fs(e, !1, t, n);
    try {
      var v = l(), C = ee.S;
      if (C !== null && C(f, v), v !== null && typeof v == "object" && typeof v.then == "function") {
        var U = Cv(
          v,
          a
        );
        _i(
          e,
          t,
          U,
          en(e)
        );
      } else
        _i(
          e,
          t,
          a,
          en(e)
        );
    } catch (Q) {
      _i(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: Q },
        en()
      );
    } finally {
      ce.p = i, c !== null && f.types !== null && (c.types = f.types), ee.T = c;
    }
  }
  function zv() {
  }
  function Js(e, t, n, a) {
    if (e.tag !== 5) throw Error(s(476));
    var l = Vd(e).queue;
    Bd(
      e,
      l,
      t,
      We,
      n === null ? zv : function() {
        return Gd(e), n(a);
      }
    );
  }
  function Vd(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: We,
      baseState: We,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Zn,
        lastRenderedState: We
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
        lastRenderedReducer: Zn,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Gd(e) {
    var t = Vd(e);
    t.next === null && (t = e.alternate.memoizedState), _i(
      e,
      t.next.queue,
      {},
      en()
    );
  }
  function $s() {
    return At(Yl);
  }
  function Yd() {
    return ut().memoizedState;
  }
  function Xd() {
    return ut().memoizedState;
  }
  function Mv(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = en();
          e = sa(n);
          var a = ca(t, e, n);
          a !== null && (Gt(a, t, n), bi(a, t, n)), t = { cache: Ns() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function qv(e, t, n) {
    var a = en();
    n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ku(e) ? Kd(t, n) : (n = gs(e, t, n, a), n !== null && (Gt(n, e, a), Zd(n, t, a)));
  }
  function Qd(e, t, n) {
    var a = en();
    _i(e, t, n, a);
  }
  function _i(e, t, n, a) {
    var l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (ku(e)) Kd(t, l);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
        try {
          var c = t.lastRenderedState, f = i(c, n);
          if (l.hasEagerState = !0, l.eagerState = f, Jt(f, c))
            return _u(e, t, l, 0), Fe === null && Nu(), !1;
        } catch {
        }
      if (n = gs(e, t, l, a), n !== null)
        return Gt(n, e, a), Zd(n, t, a), !0;
    }
    return !1;
  }
  function Fs(e, t, n, a) {
    if (a = {
      lane: 2,
      revertLane: Vc(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, ku(e)) {
      if (t) throw Error(s(479));
    } else
      t = gs(
        e,
        n,
        a,
        2
      ), t !== null && Gt(t, e, 2);
  }
  function ku(e) {
    var t = e.alternate;
    return e === Re || t !== null && t === Re;
  }
  function Kd(e, t) {
    Tl = Vu = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Zd(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, Zo(e, n);
    }
  }
  var Ju = {
    readContext: At,
    use: Xu,
    useCallback: lt,
    useContext: lt,
    useEffect: lt,
    useImperativeHandle: lt,
    useLayoutEffect: lt,
    useInsertionEffect: lt,
    useMemo: lt,
    useReducer: lt,
    useRef: lt,
    useState: lt,
    useDebugValue: lt,
    useDeferredValue: lt,
    useTransition: lt,
    useSyncExternalStore: lt,
    useId: lt,
    useHostTransitionStatus: lt,
    useFormState: lt,
    useActionState: lt,
    useOptimistic: lt,
    useMemoCache: lt,
    useCacheRefresh: lt,
    useEffectEvent: lt
  }, kd = {
    readContext: At,
    use: Xu,
    useCallback: function(e, t) {
      return Ut().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: At,
    useEffect: jd,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, Ku(
        4194308,
        4,
        Md.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return Ku(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Ku(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = Ut();
      t = t === void 0 ? null : t;
      var a = e();
      if (ka) {
        Wn(!0);
        try {
          e();
        } finally {
          Wn(!1);
        }
      }
      return n.memoizedState = [a, t], a;
    },
    useReducer: function(e, t, n) {
      var a = Ut();
      if (n !== void 0) {
        var l = n(t);
        if (ka) {
          Wn(!0);
          try {
            n(t);
          } finally {
            Wn(!1);
          }
        }
      } else l = t;
      return a.memoizedState = a.baseState = l, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      }, a.queue = e, e = e.dispatch = qv.bind(
        null,
        Re,
        e
      ), [a.memoizedState, e];
    },
    useRef: function(e) {
      var t = Ut();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Xs(e);
      var t = e.queue, n = Qd.bind(null, Re, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: Zs,
    useDeferredValue: function(e, t) {
      var n = Ut();
      return ks(n, e, t);
    },
    useTransition: function() {
      var e = Xs(!1);
      return e = Bd.bind(
        null,
        Re,
        e.queue,
        !0,
        !1
      ), Ut().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var a = Re, l = Ut();
      if (Ue) {
        if (n === void 0)
          throw Error(s(407));
        n = n();
      } else {
        if (n = t(), Fe === null)
          throw Error(s(349));
        (qe & 127) !== 0 || gd(a, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return l.queue = i, jd(vd.bind(null, a, i, e), [
        e
      ]), a.flags |= 2048, Nl(
        9,
        { destroy: void 0 },
        pd.bind(
          null,
          a,
          i,
          n,
          t
        ),
        null
      ), n;
    },
    useId: function() {
      var e = Ut(), t = Fe.identifierPrefix;
      if (Ue) {
        var n = wn, a = _n;
        n = (a & ~(1 << 32 - Zt(a) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Gu++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = xv++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: $s,
    useFormState: wd,
    useActionState: wd,
    useOptimistic: function(e) {
      var t = Ut();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = Fs.bind(
        null,
        Re,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Vs,
    useCacheRefresh: function() {
      return Ut().memoizedState = Mv.bind(
        null,
        Re
      );
    },
    useEffectEvent: function(e) {
      var t = Ut(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((Ge & 2) !== 0)
          throw Error(s(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, Jd = {
    readContext: At,
    use: Xu,
    useCallback: Hd,
    useContext: At,
    useEffect: Ks,
    useImperativeHandle: qd,
    useInsertionEffect: Ud,
    useLayoutEffect: zd,
    useMemo: Ld,
    useReducer: Qu,
    useRef: Rd,
    useState: function() {
      return Qu(Zn);
    },
    useDebugValue: Zs,
    useDeferredValue: function(e, t) {
      var n = ut();
      return Id(
        n,
        Je.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Qu(Zn)[0], t = ut().memoizedState;
      return [
        typeof e == "boolean" ? e : Ni(e),
        t
      ];
    },
    useSyncExternalStore: md,
    useId: Yd,
    useHostTransitionStatus: $s,
    useFormState: Od,
    useActionState: Od,
    useOptimistic: function(e, t) {
      var n = ut();
      return Ed(n, Je, e, t);
    },
    useMemoCache: Vs,
    useCacheRefresh: Xd,
    useEffectEvent: Dd
  }, Hv = {
    readContext: At,
    use: Xu,
    useCallback: Hd,
    useContext: At,
    useEffect: Ks,
    useImperativeHandle: qd,
    useInsertionEffect: Ud,
    useLayoutEffect: zd,
    useMemo: Ld,
    useReducer: Ys,
    useRef: Rd,
    useState: function() {
      return Ys(Zn);
    },
    useDebugValue: Zs,
    useDeferredValue: function(e, t) {
      var n = ut();
      return Je === null ? ks(n, e, t) : Id(
        n,
        Je.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Ys(Zn)[0], t = ut().memoizedState;
      return [
        typeof e == "boolean" ? e : Ni(e),
        t
      ];
    },
    useSyncExternalStore: md,
    useId: Yd,
    useHostTransitionStatus: $s,
    useFormState: xd,
    useActionState: xd,
    useOptimistic: function(e, t) {
      var n = ut();
      return Je !== null ? Ed(n, Je, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Vs,
    useCacheRefresh: Xd,
    useEffectEvent: Dd
  };
  function Ps(e, t, n, a) {
    t = e.memoizedState, n = n(a, t), n = n == null ? t : re({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Ws = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var a = en(), l = sa(a);
      l.payload = t, n != null && (l.callback = n), t = ca(e, l, a), t !== null && (Gt(t, e, a), bi(t, e, a));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var a = en(), l = sa(a);
      l.tag = 1, l.payload = t, n != null && (l.callback = n), t = ca(e, l, a), t !== null && (Gt(t, e, a), bi(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = en(), a = sa(n);
      a.tag = 2, t != null && (a.callback = t), t = ca(e, a, n), t !== null && (Gt(t, e, n), bi(t, e, n));
    }
  };
  function $d(e, t, n, a, l, i, c) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, i, c) : t.prototype && t.prototype.isPureReactComponent ? !fi(n, a) || !fi(l, i) : !0;
  }
  function Fd(e, t, n, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && Ws.enqueueReplaceState(t, t.state, null);
  }
  function Ja(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var a in t)
        a !== "ref" && (n[a] = t[a]);
    }
    if (e = e.defaultProps) {
      n === t && (n = re({}, n));
      for (var l in e)
        n[l] === void 0 && (n[l] = e[l]);
    }
    return n;
  }
  function Pd(e) {
    Au(e);
  }
  function Wd(e) {
    console.error(e);
  }
  function eh(e) {
    Au(e);
  }
  function $u(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function th(e, t, n) {
    try {
      var a = e.onCaughtError;
      a(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function ec(e, t, n) {
    return n = sa(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      $u(e, t);
    }, n;
  }
  function nh(e) {
    return e = sa(e), e.tag = 3, e;
  }
  function ah(e, t, n, a) {
    var l = n.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var i = a.value;
      e.payload = function() {
        return l(i);
      }, e.callback = function() {
        th(t, n, a);
      };
    }
    var c = n.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (e.callback = function() {
      th(t, n, a), typeof l != "function" && (va === null ? va = /* @__PURE__ */ new Set([this]) : va.add(this));
      var f = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: f !== null ? f : ""
      });
    });
  }
  function Lv(e, t, n, a, l) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = n.alternate, t !== null && Va(
        t,
        n,
        l,
        !0
      ), n = Nt.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
          case 19:
            return jt === null ? vr() : n.alternate === null && it === 0 && (it = 3), n.flags &= -257, n.flags |= 65536, n.lanes = l, a === qu ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Lc(e, a, l)), !1;
          case 22:
            return n.flags |= 65536, a === qu ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), Lc(e, a, l)), !1;
        }
        throw Error(s(435, n.tag));
      }
      return Lc(e, a, l), vr(), !1;
    }
    if (Ue)
      return t = Nt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = l, a !== Es && (e = Error(s(422), { cause: a }), mi(rn(e, n)))) : (a !== Es && (t = Error(s(423), {
        cause: a
      }), mi(
        rn(t, n)
      )), e = e.current.alternate, e.flags |= 65536, l &= -l, e.lanes |= l, a = rn(a, n), l = ec(
        e.stateNode,
        a,
        l
      ), Rs(e, l), it !== 4 && (it = 2)), !1;
    var i = Error(s(520), { cause: a });
    if (i = rn(i, n), Ui === null ? Ui = [i] : Ui.push(i), it !== 4 && (it = 2), t === null) return !0;
    a = rn(a, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = l & -l, n.lanes |= e, e = ec(n.stateNode, a, e), Rs(n, e), !1;
        case 1:
          if (t = n.type, i = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (va === null || !va.has(i))))
            return n.flags |= 65536, l &= -l, n.lanes |= l, l = nh(l), ah(
              l,
              e,
              n,
              a
            ), Rs(n, l), !1;
          break;
        case 22:
          if (n.memoizedState !== null)
            return n.flags |= 65536, !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var tc = Error(s(461)), ot = !1;
  function mt(e, t, n, a) {
    t.child = e === null ? rd(t, null, n, a) : Za(
      t,
      e.child,
      n,
      a
    );
  }
  function lh(e, t, n, a, l) {
    n = n.render;
    var i = t.ref;
    if ("ref" in a) {
      var c = {};
      for (var f in a)
        f !== "ref" && (c[f] = a[f]);
    } else c = a;
    return Ga(t), a = Hs(
      e,
      t,
      n,
      c,
      i,
      l
    ), f = Ls(), e !== null && !ot ? (Is(e, t, l), kn(e, t, l)) : (Ue && f && xu(t), t.flags |= 1, mt(e, t, a, l), t.child);
  }
  function ih(e, t, n, a, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !ps(i) && i.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = i, uh(
        e,
        t,
        i,
        a,
        l
      )) : (e = Ou(
        n.type,
        null,
        a,
        t,
        t.mode,
        l
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, !cc(e, l)) {
      var c = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : fi, n(c, a) && e.ref === t.ref)
        return kn(e, t, l);
    }
    return t.flags |= 1, e = Gn(i, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function uh(e, t, n, a, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (fi(i, a) && e.ref === t.ref)
        if (ot = !1, t.pendingProps = a = i, cc(e, l))
          (e.flags & 131072) !== 0 && (ot = !0);
        else
          return t.lanes = e.lanes, kn(e, t, l);
    }
    return nc(
      e,
      t,
      n,
      a,
      l
    );
  }
  function rh(e, t, n, a) {
    var l = a.children, i = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (i = i !== null ? i.baseLanes | n : n, e !== null) {
          for (a = t.child = e.child, l = 0; a !== null; )
            l = l | a.lanes | a.childLanes, a = a.sibling;
          a = l & ~i;
        } else a = 0, t.child = null;
        return sh(
          e,
          t,
          i,
          n,
          a
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && zu(
          t,
          i !== null ? i.cachePool : null
        ), i !== null ? od(t, i) : Ds(), fd(t);
      else
        return a = t.lanes = 536870912, sh(
          e,
          t,
          i !== null ? i.baseLanes | n : n,
          n,
          a
        );
    } else
      i !== null ? (zu(t, i.cachePool), od(t, i), da(), t.memoizedState = null) : (e !== null && zu(t, null), Ds(), da());
    return mt(e, t, l, n), t.child;
  }
  function wi(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function sh(e, t, n, a, l) {
    var i = ws();
    return i = i === null ? null : { parent: st._currentValue, pool: i }, t.memoizedState = {
      baseLanes: n,
      cachePool: i
    }, e !== null && zu(t, null), Ds(), fd(t), e !== null && Va(e, t, a, !0), t.childLanes = l, null;
  }
  function Fu(e, t) {
    return t = Pu(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function ch(e, t, n) {
    return Za(t, e.child, null, n), e = Fu(t, t.pendingProps), e.flags |= 2, $t(t), t.memoizedState = null, e;
  }
  function Iv(e, t, n) {
    var a = t.pendingProps, l = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Ue) {
        if (a.mode === "hidden")
          return e = Fu(t, a), t.lanes = 536870912, e.memoizedState = { baseLanes: 0, cachePool: null }, wi(null, e);
        if (zs(t), (e = et) ? (e = Mm(
          e,
          on
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: na !== null ? { id: _n, overflow: wn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Kf(e), n.return = t, t.child = n, pt = t, et = null)) : e = null, e === null) throw la(t);
        return t.lanes = 536870912, null;
      }
      return Fu(t, a);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var c = i.dehydrated;
      if (zs(t), l)
        if (t.flags & 256)
          t.flags &= -257, t = ch(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(s(558));
      else if (ot || Va(e, t, n, !1), l = (n & e.childLanes) !== 0, ot || l) {
        if (oa.current === null) {
          if (a = Fe, a !== null && (c = ko(a, n), c !== 0 && c !== i.retryLane))
            throw i.retryLane = c, Ha(e, c), Gt(a, e, c), tc;
          vr();
        }
        t = ch(
          e,
          t,
          n
        );
      } else
        e = i.treeContext, et = dn(c.nextSibling), pt = t, Ue = !0, aa = null, on = !1, e !== null && Jf(t, e), t = Fu(t, a), t.flags |= 134221824;
      return t;
    }
    return e = Gn(e.child, {
      mode: a.mode,
      children: a.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function _l(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(s(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function nc(e, t, n, a, l) {
    return Ga(t), n = Hs(
      e,
      t,
      n,
      a,
      void 0,
      l
    ), a = Ls(), e !== null && !ot ? (Is(e, t, l), kn(e, t, l)) : (Ue && a && xu(t), t.flags |= 1, mt(e, t, n, l), t.child);
  }
  function oh(e, t, n, a, l, i) {
    return Ga(t), t.updateQueue = null, n = hd(
      t,
      a,
      n,
      l
    ), dd(e), a = Ls(), e !== null && !ot ? (Is(e, t, i), kn(e, t, i)) : (Ue && a && xu(t), t.flags |= 1, mt(e, t, n, i), t.child);
  }
  function fh(e, t, n, a, l) {
    if (Ga(t), t.stateNode === null) {
      var i = gl, c = n.contextType;
      typeof c == "object" && c !== null && (i = At(c)), i = new n(a, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Ws, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = a, i.state = t.memoizedState, i.refs = {}, Cs(t), c = n.contextType, i.context = typeof c == "object" && c !== null ? At(c) : gl, i.state = t.memoizedState, c = n.getDerivedStateFromProps, typeof c == "function" && (Ps(
        t,
        n,
        c,
        a
      ), i.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (c = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), c !== i.state && Ws.enqueueReplaceState(i, i.state, null), Si(t, a, i, l), Ei(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      i = t.stateNode;
      var f = t.memoizedProps, v = Ja(n, f);
      i.props = v;
      var C = i.context, U = n.contextType;
      c = gl, typeof U == "object" && U !== null && (c = At(U));
      var Q = n.getDerivedStateFromProps;
      U = typeof Q == "function" || typeof i.getSnapshotBeforeUpdate == "function", f = t.pendingProps !== f, U || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (f || C !== c) && Fd(
        t,
        i,
        a,
        c
      ), ra = !1;
      var _ = t.memoizedState;
      i.state = _, Si(t, a, i, l), Ei(), C = t.memoizedState, f || _ !== C || ra ? (typeof Q == "function" && (Ps(
        t,
        n,
        Q,
        a
      ), C = t.memoizedState), (v = ra || $d(
        t,
        n,
        v,
        a,
        _,
        C,
        c
      )) ? (U || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = C), i.props = a, i.state = C, i.context = c, a = v) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      i = t.stateNode, xs(e, t), c = t.memoizedProps, U = Ja(n, c), i.props = U, Q = t.pendingProps, _ = i.context, C = n.contextType, v = gl, typeof C == "object" && C !== null && (v = At(C)), f = n.getDerivedStateFromProps, (C = typeof f == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (c !== Q || _ !== v) && Fd(
        t,
        i,
        a,
        v
      ), ra = !1, _ = t.memoizedState, i.state = _, Si(t, a, i, l), Ei();
      var D = t.memoizedState;
      c !== Q || _ !== D || ra || e !== null && e.dependencies !== null && Du(e.dependencies) ? (typeof f == "function" && (Ps(
        t,
        n,
        f,
        a
      ), D = t.memoizedState), (U = ra || $d(
        t,
        n,
        U,
        a,
        _,
        D,
        v
      ) || e !== null && e.dependencies !== null && Du(e.dependencies)) ? (C || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, D, v), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        a,
        D,
        v
      )), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || c === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = D), i.props = a, i.state = D, i.context = v, a = U) : (typeof i.componentDidUpdate != "function" || c === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return i = a, _l(e, t), a = (t.flags & 128) !== 0, i || a ? (i = t.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && a ? (t.child = Za(
      t,
      e.child,
      null,
      l
    ), t.child = Za(
      t,
      null,
      n,
      l
    )) : mt(e, t, n, l), t.memoizedState = i.state, e = t.child) : e = kn(
      e,
      t,
      l
    ), e;
  }
  function dh(e, t, n, a) {
    return Ia(), t.flags |= 256, mt(e, t, n, a), t.child;
  }
  var ac = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function lc(e) {
    return { baseLanes: e, cachePool: td() };
  }
  function ic(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Wt), e;
  }
  function hh(e, t, n) {
    var a = t.pendingProps, l = !1, i = (t.flags & 128) !== 0, c;
    if ((c = i) || (c = e !== null && e.memoizedState === null ? !1 : (_t.current & 2) !== 0), c && (l = !0, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ue) {
        if (l ? fa(t) : da(), (e = et) ? (e = Mm(
          e,
          on
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: na !== null ? { id: _n, overflow: wn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Kf(e), n.return = t, t.child = n, pt = t, et = null)) : e = null, e === null) throw la(t);
        return lo(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      return i = a.children, a = a.fallback, l ? (da(), l = t.mode, i = Pu(
        { mode: "hidden", children: i },
        l
      ), a = La(
        a,
        l,
        n,
        null
      ), i.return = t, a.return = t, i.sibling = a, t.child = i, a = t.child, a.memoizedState = lc(n), a.childLanes = ic(
        e,
        c,
        n
      ), t.memoizedState = ac, wi(null, a)) : (fa(t), uc(t, i));
    }
    var f = e.memoizedState;
    if (f !== null) {
      var v = f.dehydrated;
      if (v !== null)
        return Bv(
          e,
          t,
          i,
          c,
          a,
          v,
          f,
          n
        );
    }
    return l ? (da(), l = a.fallback, i = t.mode, f = e.child, v = f.sibling, a = Gn(f, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = f.subtreeFlags & 1206910976, v !== null ? l = Gn(v, l) : (l = La(
      l,
      i,
      n,
      null
    ), l.flags |= 2), l.return = t, a.return = t, a.sibling = l, t.child = a, wi(null, a), a = t.child, l = e.child.memoizedState, l === null ? l = lc(n) : (i = l.cachePool, i !== null ? (f = st._currentValue, i = i.parent !== f ? { parent: f, pool: f } : i) : i = td(), l = {
      baseLanes: l.baseLanes | n,
      cachePool: i
    }), a.memoizedState = l, a.childLanes = ic(
      e,
      c,
      n
    ), t.memoizedState = ac, wi(e.child, a)) : (fa(t), n = e.child, e = n.sibling, n = Gn(n, {
      mode: "visible",
      children: a.children
    }), n.return = t, n.sibling = null, e !== null && (c = t.deletions, c === null ? (t.deletions = [e], t.flags |= 16) : c.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function uc(e, t) {
    return t = Pu(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Pu(e, t) {
    return e = Lt(22, e, null, t), e.lanes = 0, e;
  }
  function Wu(e, t, n) {
    return Za(t, e.child, null, n), e = uc(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Bv(e, t, n, a, l, i, c, f) {
    if (n)
      return t.flags & 256 ? (fa(t), t.flags &= -257, Wu(
        e,
        t,
        f
      )) : t.memoizedState !== null ? (da(), t.child = e.child, t.flags |= 128, null) : (da(), i = l.fallback, c = t.mode, l = Pu(
        { mode: "visible", children: l.children },
        c
      ), i = La(
        i,
        c,
        f,
        null
      ), i.flags |= 2, l.return = t, i.return = t, l.sibling = i, t.child = l, Za(t, e.child, null, f), l = t.child, l.memoizedState = lc(f), l.childLanes = ic(
        e,
        a,
        f
      ), t.memoizedState = ac, wi(null, l));
    if (fa(t), lo(i)) {
      if (a = i.nextSibling && i.nextSibling.dataset, a) var v = a.dgst;
      return a = v, a !== "" && (l = Error(s(419)), l.stack = "", l.digest = a, mi({ value: l, source: null, stack: null })), Wu(
        e,
        t,
        f
      );
    }
    if (ot || Va(e, t, f, !1), a = (f & e.childLanes) !== 0, ot || a) {
      if (oa.current !== null)
        return Wu(
          e,
          t,
          f
        );
      if (a = Fe, a !== null && (l = ko(
        a,
        f
      ), l !== 0 && l !== c.retryLane))
        throw c.retryLane = l, Ha(e, l), Gt(a, e, l), tc;
      return ao(i) || vr(), Wu(
        e,
        t,
        f
      );
    }
    return ao(i) ? (t.flags |= 192, t.child = e.child, null) : (e = c.treeContext, et = dn(i.nextSibling), pt = t, Ue = !0, aa = null, on = !1, e !== null && Jf(t, e), t = uc(
      t,
      l.children
    ), t.flags |= 134221824, t);
  }
  function mh(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), ju(e.return, t, n);
  }
  function gh(e) {
    for (var t = null; e !== null; ) {
      var n = e.alternate;
      n !== null && Bu(n) === null && (t = e), e = e.sibling;
    }
    return t;
  }
  function er(e, t, n, a, l, i) {
    var c = e.memoizedState;
    c === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: n,
      tailMode: l,
      treeForkCount: i
    } : (c.isBackwards = t, c.rendering = null, c.renderingStartTime = 0, c.last = a, c.tail = n, c.tailMode = l, c.treeForkCount = i);
  }
  function rc(e) {
    var t = e.child;
    for (e.child = null; t !== null; ) {
      var n = t.sibling;
      t.sibling = e.child, e.child = t, t = n;
    }
  }
  function sc(e, t, n) {
    var a = t.pendingProps, l = a.revealOrder, i = a.tail;
    a = a.children;
    var c = _t.current;
    if (t.flags & 128)
      return Ti(t, c), null;
    var f = (c & 2) !== 0;
    if (f ? (c = c & 1 | 2, t.flags |= 128) : c &= 1, Ti(t, c), l === "backwards" && e !== null ? (rc(e), mt(e, t, a, n), rc(e)) : mt(e, t, a, n), a = Ue ? hi : 0, !f && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && mh(e, n, t);
        else if (e.tag === 19)
          mh(e, n, t);
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
    switch (l) {
      case "backwards":
        n = gh(t.child), n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null, rc(t)), er(
          t,
          !0,
          l,
          null,
          i,
          a
        );
        break;
      case "unstable_legacy-backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && Bu(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        er(
          t,
          !0,
          n,
          null,
          i,
          a
        );
        break;
      case "together":
        er(
          t,
          !1,
          null,
          null,
          void 0,
          a
        );
        break;
      case "independent":
        t.memoizedState = null;
        break;
      default:
        n = gh(t.child), n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), er(
          t,
          !1,
          l,
          n,
          i,
          a
        );
    }
    return t.child;
  }
  function ph(e, t, n) {
    var a = t.pendingProps;
    return ia(t, t.type, a.value), mt(e, t, a.children, n), t.child;
  }
  function kn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), pa |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (Va(
          e,
          t,
          n,
          !1
        ), (n & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(s(153));
    if (t.child !== null) {
      for (e = t.child, n = Gn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = Gn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function cc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Du(e)));
  }
  function Vv(e, t, n) {
    switch (t.tag) {
      case 3:
        Z(t, t.stateNode.containerInfo), ia(t, st, e.memoizedState.cache), Ia();
        break;
      case 27:
      case 5:
        Be(t);
        break;
      case 4:
        Z(t, t.stateNode.containerInfo);
        break;
      case 10:
        ia(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, zs(t), null;
        break;
      case 13:
        var a = t.memoizedState;
        if (a !== null) {
          if (a.dehydrated !== null)
            return fa(t), t.flags |= 128, null;
          a = Va(
            e,
            t,
            n,
            !1
          );
          var l = t.child.childLanes;
          return a || (n & l) !== 0 ? hh(e, t, n) : (fa(t), e = kn(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        }
        fa(t);
        break;
      case 19:
        if (t.flags & 128)
          return sc(
            e,
            t,
            n
          );
        if (l = (e.flags & 128) !== 0, a = (n & t.childLanes) !== 0, a || (Va(
          e,
          t,
          n,
          !1
        ), a = (n & t.childLanes) !== 0), l) {
          if (a)
            return sc(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Ti(t, _t.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, rh(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        ia(t, st, e.memoizedState.cache);
    }
    return kn(e, t, n);
  }
  function vh(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        ot = !0;
      else {
        if (!cc(e, n) && (t.flags & 128) === 0)
          return ot = !1, Vv(
            e,
            t,
            n
          );
        ot = (e.flags & 131072) !== 0;
      }
    else
      ot = !1, Ue && (t.flags & 1048576) !== 0 && kf(t, hi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = Qa(t.elementType), t.type = e, typeof e == "function")
            ps(e) ? (a = Ja(e, a), t.tag = 1, t = fh(
              null,
              t,
              e,
              a,
              n
            )) : (t.tag = 0, t = nc(
              null,
              t,
              e,
              a,
              n
            ));
          else {
            if (e != null) {
              var l = e.$$typeof;
              if (l === M) {
                t.tag = 11, t = lh(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              } else if (l === F) {
                t.tag = 14, t = ih(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              } else if (l === q) {
                t.tag = 10, t.type = e, t = ph(
                  null,
                  t,
                  n
                );
                break e;
              }
            }
            throw t = pe(e) || e, Error(s(306, t, ""));
          }
        }
        return t;
      case 0:
        return nc(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return a = t.type, l = Ja(
          a,
          t.pendingProps
        ), fh(
          e,
          t,
          a,
          l,
          n
        );
      case 3:
        e: {
          if (Z(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(s(387));
          a = t.pendingProps;
          var i = t.memoizedState;
          l = i.element, xs(e, t), Si(t, a, null, n);
          var c = t.memoizedState;
          if (a = c.cache, ia(t, st, a), a !== i.cache && As(
            t,
            [st],
            n,
            !0
          ), Ei(), a = c.element, i.isDehydrated)
            if (i = {
              element: a,
              isDehydrated: !1,
              cache: c.cache
            }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
              t = dh(
                e,
                t,
                a,
                n
              );
              break e;
            } else if (a !== l) {
              l = rn(
                Error(s(424)),
                t
              ), mi(l), t = dh(
                e,
                t,
                a,
                n
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, et = dn(e.firstChild), pt = t, Ue = !0, aa = null, on = !0, n = rd(
                t,
                null,
                a,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 134221824, n = n.sibling;
          else {
            if (Ia(), a === l) {
              t = kn(
                e,
                t,
                n
              );
              break e;
            }
            mt(e, t, a, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return _l(e, t), e === null ? (n = Gm(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : Ue || (t.stateNode = Sm(
          t.type,
          t.pendingProps,
          k.current,
          t
        )) : t.memoizedState = Gm(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Be(t), e === null && Ue && (a = t.stateNode = Lm(
          t.type,
          t.pendingProps,
          k.current
        ), pt = t, on = !0, l = et, Ea(t.type) ? (io = l, et = dn(a.firstChild)) : et = l), mt(
          e,
          t,
          t.pendingProps.children,
          n
        ), _l(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ue && ((l = a = et) && (a = My(
          a,
          t.type,
          t.pendingProps,
          on
        ), a !== null ? (t.stateNode = a, pt = t, et = dn(a.firstChild), on = !1, l = !0) : l = !1), l || la(t)), Be(t), l = t.type, i = t.pendingProps, c = e !== null ? e.memoizedProps : null, a = i.children, $c(l, i) ? a = null : c !== null && $c(l, c) && (t.flags |= 32), t.memoizedState !== null && (l = Hs(
          e,
          t,
          Rv,
          null,
          null,
          n
        ), Yl._currentValue = l), _l(e, t), mt(e, t, a, n), t.child;
      case 6:
        return e === null && Ue && ((e = n = et) && (n = qy(
          n,
          t.pendingProps,
          on
        ), n !== null ? (t.stateNode = n, pt = t, et = null, e = !0) : e = !1), e || la(t)), null;
      case 13:
        return hh(e, t, n);
      case 4:
        return Z(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = Za(
          t,
          null,
          a,
          n
        ) : mt(e, t, a, n), t.child;
      case 11:
        return lh(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return a = t.pendingProps, _l(e, t), mt(e, t, a, n), t.child;
      case 8:
        return mt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return mt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return ph(e, t, n);
      case 9:
        return l = t.type._context, a = t.pendingProps.children, Ga(t), l = At(l), a = a(l), t.flags |= 1, mt(e, t, a, n), t.child;
      case 14:
        return ih(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return uh(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return sc(e, t, n);
      case 31:
        return Iv(e, t, n);
      case 22:
        return rh(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return Ga(t), a = At(st), e === null ? (l = ws(), l === null && (l = Fe, i = Ns(), l.pooledCache = i, i.refCount++, i !== null && (l.pooledCacheLanes |= n), l = i), t.memoizedState = { parent: a, cache: l }, Cs(t), ia(t, st, l)) : ((e.lanes & n) !== 0 && (xs(e, t), Si(t, null, null, n), Ei()), l = e.memoizedState, i = t.memoizedState, l.parent !== a ? (l = { parent: a, cache: a }, t.memoizedState = l, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = l), ia(t, st, a)) : (a = i.cache, ia(t, st, a), a !== l.cache && As(
          t,
          [st],
          n,
          !0
        ))), mt(
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
        }), a = t.pendingProps, a.name != null && a.name !== "auto" ? t.flags |= e === null ? 18882560 : 18874368 : Ue && xu(t), e !== null && e.memoizedProps.name !== a.name ? t.flags |= 4194816 : _l(e, t), mt(e, t, a.children, n), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(s(156, t.tag));
  }
  function Jn(e) {
    e.flags |= 4;
  }
  function oc(e, t, n, a, l) {
    var i;
    if ((i = (e.mode & 32) !== 0) && (i = n === null ? Km(t, a) : Km(t, a) && (a.src !== n.src || a.srcSet !== n.srcSet)), i) {
      if (e.flags |= 16777216, (l & 335544128) === l)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Ph()) e.flags |= 8192;
        else
          throw Ka = qu, Os;
    } else e.flags &= -16777217;
  }
  function yh(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Zm(t))
      if (Ph()) e.flags |= 8192;
      else
        throw Ka = qu, Os;
  }
  function tr(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Qo() : 536870912, e.lanes |= t, Rl |= t);
  }
  function Oi(e, t) {
    if (!Ue)
      switch (e.tailMode) {
        case "visible":
          break;
        case "collapsed":
          for (var n = e.tail, a = null; n !== null; )
            n.alternate !== null && (a = n), n = n.sibling;
          a === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : a.sibling = null;
          break;
        default:
          for (t = e.tail, n = null; t !== null; )
            t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
      }
  }
  function tt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, a = 0;
    if (t)
      for (var l = e.child; l !== null; )
        n |= l.lanes | l.childLanes, a |= l.subtreeFlags & 1206910976, a |= l.flags & 1206910976, l.return = e, l = l.sibling;
    else
      for (l = e.child; l !== null; )
        n |= l.lanes | l.childLanes, a |= l.subtreeFlags, a |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= a, e.childLanes = n, t;
  }
  function Gv(e, t, n) {
    var a = t.pendingProps;
    switch (bs(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return tt(t), null;
      case 1:
        return tt(t), null;
      case 3:
        return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Qn(st), ve(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (yl(t) ? Jn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ss())), tt(t), null;
      case 26:
        var l = t.type, i = t.memoizedState;
        return e === null ? (Jn(t), i !== null ? (tt(t), yh(t, i)) : (tt(t), oc(
          t,
          l,
          null,
          a,
          n
        ))) : i ? i !== e.memoizedState ? (Jn(t), tt(t), yh(t, i)) : (tt(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && Jn(t), tt(t), oc(
          t,
          l,
          e,
          a,
          n
        )), null;
      case 27:
        if ($e(t), n = k.current, l = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && Jn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(s(166));
            return tt(t), t.subtreeFlags &= -33554433, null;
          }
          e = Xt.current, yl(t) ? $f(t) : (e = Lm(l, a, n), t.stateNode = e, Jn(t));
        }
        return tt(t), t.subtreeFlags &= -33554433, null;
      case 5:
        if ($e(t), l = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && Jn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(s(166));
            return tt(t), t.subtreeFlags &= -33554433, null;
          }
          if (i = Xt.current, yl(t))
            $f(t);
          else {
            var c = Li(
              k.current
            );
            switch (i) {
              case 1:
                i = c.createElementNS(
                  "http://www.w3.org/2000/svg",
                  l
                );
                break;
              case 2:
                i = c.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  l
                );
                break;
              default:
                switch (l) {
                  case "svg":
                    i = c.createElementNS(
                      "http://www.w3.org/2000/svg",
                      l
                    );
                    break;
                  case "math":
                    i = c.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l
                    );
                    break;
                  case "script":
                    i = c.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(
                      i.firstChild
                    );
                    break;
                  case "select":
                    i = typeof a.is == "string" ? c.createElement("select", {
                      is: a.is
                    }) : c.createElement("select"), a.multiple ? i.multiple = !0 : a.size && (i.size = a.size);
                    break;
                  default:
                    i = typeof a.is == "string" ? c.createElement(l, { is: a.is }) : c.createElement(l);
                }
            }
            i[Tt] = t, i[Ht] = a;
            e: for (c = t.child; c !== null; ) {
              if (c.tag === 5 || c.tag === 6)
                i.appendChild(c.stateNode);
              else if (c.tag !== 4 && c.tag !== 27 && c.child !== null) {
                c.child.return = c, c = c.child;
                continue;
              }
              if (c === t) break e;
              for (; c.sibling === null; ) {
                if (c.return === null || c.return === t)
                  break e;
                c = c.return;
              }
              c.sibling.return = c.return, c = c.sibling;
            }
            t.stateNode = i;
            e: switch (Ot(i, l, a), l) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                a = !!a.autoFocus;
                break e;
              case "img":
                a = !0;
                break e;
              default:
                a = !1;
            }
            a && Jn(t);
          }
        }
        return tt(t), t.subtreeFlags &= -33554433, oc(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== a && Jn(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(s(166));
          if (e = k.current, yl(t)) {
            if (e = t.stateNode, n = t.memoizedProps, a = null, l = pt, l !== null)
              switch (l.tag) {
                case 27:
                case 5:
                  a = l.memoizedProps;
              }
            e[Tt] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || vm(e.nodeValue, n)), e || la(t, !0);
          } else
            e = Li(e).createTextNode(
              a
            ), e[Tt] = t, t.stateNode = e;
        }
        return tt(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = yl(t), n !== null) {
            if (e === null) {
              if (!a) throw Error(s(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(557));
              e[Tt] = t;
            } else
              Ia(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            tt(t), e = !1;
          } else
            n = Ss(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? ($t(t), t) : ($t(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(s(558));
        }
        return tt(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (l = yl(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!l) throw Error(s(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(s(317));
              l[Tt] = t;
            } else
              Ia(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            tt(t), l = !1;
          } else
            l = Ss(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), l = !0;
          if (!l)
            return t.flags & 256 ? ($t(t), t) : ($t(t), null);
        }
        return $t(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = a !== null, e = e !== null && e.memoizedState !== null, n && (a = t.child, l = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (l = a.alternate.memoizedState.cachePool.pool), i = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), i !== l && (a.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), tr(t, t.updateQueue), tt(t), null);
      case 4:
        return ve(), e === null && Qc(t.stateNode.containerInfo), t.flags |= 67108864, tt(t), null;
      case 10:
        return Qn(t.type), tt(t), null;
      case 19:
        if (Ms(t), a = t.memoizedState, a === null) return tt(t), null;
        if (l = (t.flags & 128) !== 0, i = a.rendering, i === null)
          if (l) Oi(a, !1);
          else {
            if (it !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (i = Bu(e), i !== null) {
                  for (t.flags |= 128, Oi(a, !1), e = i.updateQueue, t.updateQueue = e, tr(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    Qf(n, e), n = n.sibling;
                  return Ti(
                    t,
                    _t.current & 1 | 2
                  ), Ue && Yn(t, a.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && Qt() > hr && (t.flags |= 128, l = !0, Oi(a, !1), t.lanes = 4194304);
          }
        else {
          if (!l)
            if (e = Bu(i), e !== null) {
              if (t.flags |= 128, l = !0, e = e.updateQueue, t.updateQueue = e, tr(t, e), Oi(a, !0), a.tail === null && a.tailMode !== "collapsed" && a.tailMode !== "visible" && !i.alternate && !Ue)
                return tt(t), null;
            } else
              2 * Qt() - a.renderingStartTime > hr && n !== 536870912 && (t.flags |= 128, l = !0, Oi(a, !1), t.lanes = 4194304);
          a.isBackwards ? (i.sibling = t.child, t.child = i) : (e = a.last, e !== null ? e.sibling = i : t.child = i, a.last = i);
        }
        if (a.tail !== null) {
          e = a.tail;
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
          return a.rendering = e, a.tail = e.sibling, a.renderingStartTime = Qt(), e.sibling = null, i = _t.current, i = l ? i & 1 | 2 : i & 1, a.tailMode === "visible" || a.tailMode === "collapsed" || !n || Ue ? Ti(t, i) : (n = i, Qe(Nt, t), Qe(_t, n), jt === null && (jt = t)), Ue && Yn(t, a.treeForkCount), e;
        }
        return tt(t), null;
      case 22:
      case 23:
        return $t(t), Us(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (tt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : tt(t), n = t.updateQueue, n !== null && tr(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && Ne(Xa), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Qn(st), tt(t), null;
      case 25:
        return null;
      case 30:
        return t.flags |= 33554432, tt(t), null;
    }
    throw Error(s(156, t.tag));
  }
  function Yv(e, t) {
    switch (bs(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Qn(st), ve(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return $e(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if ($t(t), t.alternate === null)
            throw Error(s(340));
          Ia();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if ($t(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(s(340));
          Ia();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Ms(t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null), t.flags |= 4, t) : null;
      case 4:
        return ve(), null;
      case 10:
        return Qn(t.type), null;
      case 22:
      case 23:
        return $t(t), Us(), e !== null && Ne(Xa), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Qn(st), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function bh(e, t) {
    switch (bs(t), t.tag) {
      case 3:
        Qn(st), ve();
        break;
      case 26:
      case 27:
      case 5:
        $e(t);
        break;
      case 4:
        ve();
        break;
      case 31:
        t.memoizedState !== null && $t(t);
        break;
      case 13:
        $t(t);
        break;
      case 19:
        Ms(t);
        break;
      case 10:
        Qn(t.type);
        break;
      case 22:
      case 23:
        $t(t), Us(), e !== null && Ne(Xa);
        break;
      case 24:
        Qn(st);
    }
  }
  function Ci(e, t) {
    try {
      var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var l = a.next;
        n = l;
        do {
          if ((n.tag & e) === e) {
            a = void 0;
            var i = n.create, c = n.inst;
            a = i(), c.destroy = a;
          }
          n = n.next;
        } while (n !== l);
      }
    } catch (f) {
      Ze(t, t.return, f);
    }
  }
  function ha(e, t, n) {
    try {
      var a = t.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var i = l.next;
        a = i;
        do {
          if ((a.tag & e) === e) {
            var c = a.inst, f = c.destroy;
            if (f !== void 0) {
              c.destroy = void 0, l = t;
              var v = n, C = f;
              try {
                C();
              } catch (U) {
                Ze(
                  l,
                  v,
                  U
                );
              }
            }
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (U) {
      Ze(t, t.return, U);
    }
  }
  function Eh(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        cd(t, n);
      } catch (a) {
        Ze(e, e.return, a);
      }
    }
  }
  function Sh(e, t, n) {
    n.props = Ja(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      Ze(e, t, a);
    }
  }
  function On(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var a = e.stateNode;
            break;
          case 30:
            var l = e.stateNode, i = Bn(e.memoizedProps, l);
            (l.ref === null || l.ref.name !== i) && (l.ref = Cm(i)), a = l.ref;
            break;
          case 7:
            if (e.stateNode === null) {
              var c = new tn(e);
              g(
                e.child,
                !1,
                Uy,
                c,
                void 0,
                void 0
              ), e.stateNode = c;
            }
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof n == "function" ? e.refCleanup = n(a) : n.current = a;
      }
    } catch (f) {
      Ze(e, t, f);
    }
  }
  function wt(e, t) {
    var n = e.ref, a = e.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (l) {
          Ze(e, t, l);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (l) {
          Ze(e, t, l);
        }
      else n.current = null;
  }
  function nr(e, t) {
    if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && t !== null)
      for (var n = 0; n < t.length; n++)
        zm(
          e.stateNode,
          t[n]
        );
  }
  function Th(e) {
    for (var t = e.return; t !== null && (dc(t) && zm(e.stateNode, t.stateNode), !fc(t)); )
      t = t.return;
  }
  function xi(e) {
    for (var t = e.return; t !== null && (dc(t) && zy(e.stateNode, t.stateNode), !fc(t)); )
      t = t.return;
  }
  function fc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 27;
  }
  function dc(e) {
    return e && e.tag === 7 && e.stateNode !== null;
  }
  function hc(e) {
    var t = e.type, n = e.memoizedProps, a = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && a.focus();
          break e;
        case "img":
          n.src ? a.src = n.src : n.srcSet && (a.srcset = n.srcSet);
      }
    } catch (l) {
      Ze(e, e.return, l);
    }
  }
  function mc(e, t, n) {
    try {
      var a = e.stateNode;
      gy(a, e.type, n, t), a[Ht] = t;
    } catch (l) {
      Ze(e, e.return, l);
    }
  }
  function Ah(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ea(e.type) || e.tag === 4;
  }
  function gc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Ah(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Ea(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function pc(e, t, n, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      l = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(l, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(l), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Nn)), nr(e, a), Ve = !0;
    else if (l !== 4 && (l === 27 && (nr(e, a), a = null, Ea(e.type) && (n = e.stateNode, t = null)), e = e.child, e !== null))
      for (pc(
        e,
        t,
        n,
        a
      ), e = e.sibling; e !== null; )
        pc(
          e,
          t,
          n,
          a
        ), e = e.sibling;
  }
  function ar(e, t, n, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      l = e.stateNode, t ? n.insertBefore(l, t) : n.appendChild(l), nr(e, a), Ve = !0;
    else if (l !== 4 && (l === 27 && (nr(e, a), a = null, Ea(e.type) && (n = e.stateNode)), e = e.child, e !== null))
      for (ar(
        e,
        t,
        n,
        a
      ), e = e.sibling; e !== null; )
        ar(
          e,
          t,
          n,
          a
        ), e = e.sibling;
  }
  function Nh(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var a = e.type, l = t.attributes; l.length; )
        t.removeAttributeNode(l[0]);
      Ot(t, a, n), t[Tt] = e, t[Ht] = n;
    } catch (i) {
      Ze(e, e.return, i);
    }
  }
  var lr = !1, Ft = null;
  function _h(e) {
    (e.tag === 30 || (e.subtreeFlags & 33554432) !== 0) && (lr = !0);
  }
  var Cn = null;
  function wh() {
    var e = Cn;
    return Cn = null, e;
  }
  var It = 0;
  function wl(e, t, n, a, l) {
    return It = 0, Oh(
      e.child,
      t,
      n,
      a,
      l
    );
  }
  function Oh(e, t, n, a, l) {
    for (var i = !1; e !== null; ) {
      if (e.tag === 5) {
        var c = e.stateNode;
        if (a !== null) {
          var f = Wc(c);
          a.push(f), f.view && (i = !0);
        } else
          i || Wc(c).view && (i = !0);
        lr = !0, wm(
          c,
          It === 0 ? t : t + "_" + It,
          n
        ), It++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && l || Oh(
        e.child,
        t,
        n,
        a,
        l
      ) && (i = !0));
      e = e.sibling;
    }
    return i;
  }
  function xn(e, t) {
    for (; e !== null; )
      e.tag === 5 ? Om(e.stateNode, e.memoizedProps) : (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && t || xn(
        e.child,
        t
      )), e = e.sibling;
  }
  function ir(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null; ) {
        if ((e.tag !== 22 || e.memoizedState === null) && (ir(e), e.tag === 30 && (e.flags & 18874368) !== 0 && e.stateNode.paired)) {
          var t = e.memoizedProps;
          if (t.name == null || t.name === "auto")
            throw Error(s(544));
          var n = t.name;
          t = Vn(t.default, t.share), t !== "none" && (wl(
            e,
            n,
            t,
            null,
            !1
          ) || xn(e.child, !1));
        }
        e = e.sibling;
      }
  }
  function vc(e, t) {
    if (e.tag === 30) {
      var n = e.stateNode, a = e.memoizedProps, l = Bn(a, n), i = Vn(
        a.default,
        n.paired ? a.share : a.enter
      );
      i !== "none" ? wl(e, l, i, null, !1) ? (ir(e), n.paired || t || zl(e, a.onEnter)) : xn(e.child, !1) : ir(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        vc(e, t), e = e.sibling;
    else ir(e);
  }
  function yc(e) {
    if (Ft !== null && Ft.size !== 0) {
      var t = Ft;
      if ((e.subtreeFlags & 18874368) !== 0)
        for (e = e.child; e !== null; ) {
          if (e.tag !== 22 || e.memoizedState === null) {
            if (e.tag === 30 && (e.flags & 18874368) !== 0) {
              var n = e.memoizedProps, a = n.name;
              if (a != null && a !== "auto") {
                var l = t.get(a);
                if (l !== void 0) {
                  var i = Vn(
                    n.default,
                    n.share
                  );
                  if (i !== "none" && (wl(
                    e,
                    a,
                    i,
                    null,
                    !1
                  ) ? (i = e.stateNode, l.paired = i, i.paired = l, zl(e, n.onShare)) : xn(e.child, !1)), t.delete(a), t.size === 0) break;
                }
              }
            }
            yc(e);
          }
          e = e.sibling;
        }
    }
  }
  function bc(e) {
    if (e.tag === 30) {
      var t = e.memoizedProps, n = Bn(t, e.stateNode), a = Ft !== null ? Ft.get(n) : void 0, l = Vn(
        t.default,
        a !== void 0 ? t.share : t.exit
      );
      l !== "none" && (wl(e, n, l, null, !1) ? a !== void 0 ? (l = e.stateNode, a.paired = l, l.paired = a, Ft.delete(n), zl(e, t.onShare)) : zl(e, t.onExit) : xn(e.child, !1)), Ft !== null && yc(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        bc(e), e = e.sibling;
    else
      Ft !== null && yc(e);
  }
  function Ch(e) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var t = e.memoizedProps, n = Bn(t, e.stateNode);
        t = Vn(t.default, t.update), e.flags &= -5, t !== "none" && wl(
          e,
          n,
          t,
          e.memoizedState = [],
          !1
        );
      } else
        (e.subtreeFlags & 33554432) !== 0 && Ch(e);
      e = e.sibling;
    }
  }
  function Ec(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null; ) {
        if (e.tag !== 22 || e.memoizedState === null) {
          if (e.tag === 30 && (e.flags & 18874368) !== 0) {
            var t = e.stateNode;
            t.paired !== null && (t.paired = null, xn(e.child, !1));
          }
          Ec(e);
        }
        e = e.sibling;
      }
  }
  function ur(e) {
    if (e.tag === 30)
      e.stateNode.paired = null, xn(e.child, !1), Ec(e);
    else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        ur(e), e = e.sibling;
    else Ec(e);
  }
  function xh(e) {
    for (e = e.child; e !== null; )
      e.tag === 30 ? xn(e.child, !1) : (e.subtreeFlags & 33554432) !== 0 && xh(e), e = e.sibling;
  }
  function Sc(e, t, n, a, l, i, c) {
    for (var f = !1; t !== null; ) {
      if (t.tag === 5) {
        var v = t.stateNode;
        if (i !== null && It < i.length) {
          var C = i[It], U = Wc(v);
          (C.view || U.view) && (f = !0);
          var Q;
          if (Q = (e.flags & 4) === 0)
            if (U.clip) Q = !0;
            else {
              Q = C.rect;
              var _ = U.rect;
              Q = Q.y !== _.y || Q.x !== _.x || Q.height !== _.height || Q.width !== _.width;
            }
          Q && (e.flags |= 4), U.abs ? U = !C.abs : (C = C.rect, U = U.rect, U = C.height !== U.height || C.width !== U.width), U && (e.flags |= 32);
        } else e.flags |= 32;
        (e.flags & 4) !== 0 && wm(
          v,
          It === 0 ? n : n + "_" + It,
          l
        ), f && (e.flags & 4) !== 0 || (Cn === null && (Cn = []), Cn.push(
          v,
          It === 0 ? a : a + "_" + It,
          t.memoizedProps
        )), It++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && c ? e.flags |= t.flags & 32 : Sc(
        e,
        t.child,
        n,
        a,
        l,
        i,
        c
      ) && (f = !0));
      t = t.sibling;
    }
    return f;
  }
  function Rh(e, t) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var n = e.memoizedProps, a = e.stateNode, l = Bn(n, a), i = Vn(n.default, n.update), c;
        c = e.memoizedState, e.memoizedState = null, a = e;
        var f = e.child;
        It = 0, l = Sc(
          a,
          f,
          l,
          l,
          i,
          c,
          !1
        ), (e.flags & 4) !== 0 && l && zl(e, n.onUpdate);
      } else
        (e.subtreeFlags & 33554432) !== 0 && Rh(e);
      e = e.sibling;
    }
  }
  var vt = !1, Xe = !1, Rn = !1, Tc = !1, jh = typeof WeakSet == "function" ? WeakSet : Set, yt = null, jn = !1, Ri = !1, rr = !1, Ac = !1;
  function Xv(e, t, n) {
    if (e = e.containerInfo, kc = Xl, e = Mf(e), cs(e)) {
      if ("selectionStart" in e)
        var a = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          a = (a = e.ownerDocument) && a.defaultView || window;
          var l = a.getSelection && a.getSelection();
          if (l && l.rangeCount !== 0) {
            a = l.anchorNode;
            var i = l.anchorOffset, c = l.focusNode;
            l = l.focusOffset;
            try {
              a.nodeType, c.nodeType;
            } catch {
              a = null;
              break e;
            }
            var f = 0, v = -1, C = -1, U = 0, Q = 0, _ = e, D = null;
            t: for (; ; ) {
              for (var ue; _ !== a || i !== 0 && _.nodeType !== 3 || (v = f + i), _ !== c || l !== 0 && _.nodeType !== 3 || (C = f + l), _.nodeType === 3 && (f += _.nodeValue.length), (ue = _.firstChild) !== null; )
                D = _, _ = ue;
              for (; ; ) {
                if (_ === e) break t;
                if (D === a && ++U === i && (v = f), D === c && ++Q === l && (C = f), (ue = _.nextSibling) !== null) break;
                _ = D, D = _.parentNode;
              }
              _ = ue;
            }
            a = v === -1 || C === -1 ? null : { start: v, end: C };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Jc = { focusedElem: e, selectionRange: a }, Xl = !1, n = (n & 335544064) === n, yt = t, t = n ? 9270 : 1024; yt !== null; ) {
      if (e = yt, n && (a = e.deletions, a !== null))
        for (i = 0; i < a.length; i++)
          n && bc(a[i]);
      if (e.alternate === null && (e.flags & 2) !== 0)
        n && _h(e), sr(n);
      else {
        if (e.tag === 22) {
          if (a = e.alternate, e.memoizedState !== null) {
            a !== null && a.memoizedState === null && n && bc(a), sr(n);
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            n && _h(e), sr(n);
            continue;
          }
        }
        a = e.child, (e.subtreeFlags & t) !== 0 && a !== null ? (a.return = e, yt = a) : (n && Ch(e), sr(n));
      }
    }
    Ft = null;
  }
  function sr(e) {
    for (; yt !== null; ) {
      var t = yt, n = e, a = t.alternate, l = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((l & 1024) !== 0 && a !== null) {
            n = void 0, l = a.memoizedProps, a = a.memoizedState;
            var i = t.stateNode;
            try {
              var c = Ja(
                t.type,
                l
              );
              n = i.getSnapshotBeforeUpdate(
                c,
                a
              ), i.__reactInternalSnapshotBeforeUpdate = n;
            } catch (f) {
              Ze(t, t.return, f);
            }
          }
          break;
        case 3:
          if ((l & 1024) !== 0) {
            if (a = t.stateNode.containerInfo, n = a.nodeType, n === 9)
              no(a);
            else if (n === 1)
              switch (a.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  no(a);
                  break;
                default:
                  a.textContent = "";
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
          n && a !== null && (n = Bn(
            a.memoizedProps,
            a.stateNode
          ), l = t.memoizedProps, l = Vn(l.default, l.update), l !== "none" && wl(
            a,
            n,
            l,
            a.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((l & 1024) !== 0) throw Error(s(163));
      }
      if (a = t.sibling, a !== null) {
        a.return = t.return, yt = a;
        break;
      }
      yt = t.return;
    }
  }
  function Dh(e, t, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Dn(e, n), a & 4 && Ci(5, n);
        break;
      case 1:
        if (Dn(e, n), a & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (c) {
              Ze(n, n.return, c);
            }
          else {
            var l = Ja(
              n.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                l,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (c) {
              Ze(
                n,
                n.return,
                c
              );
            }
          }
        a & 64 && Eh(n), a & 512 && On(n, n.return);
        break;
      case 3:
        if (Dn(e, n), a & 64 && (e = n.updateQueue, e !== null)) {
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
            cd(e, t);
          } catch (c) {
            Ze(n, n.return, c);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Nh(n);
      case 26:
      case 5:
        Dn(e, n), t === null && a & 4 && hc(n), a & 512 && On(n, n.return);
        break;
      case 12:
        Dn(e, n);
        break;
      case 31:
        Dn(e, n), a & 4 && qh(e, n);
        break;
      case 13:
        Dn(e, n), a & 4 && Hh(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = ny.bind(
          null,
          n
        ), Hy(e, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || vt, !a) {
          var i = t !== null && t.memoizedState !== null || Xe;
          t = vt, l = Xe, vt = a, (Xe = i) && !l ? (a = 2, (n.subtreeFlags & 8772) !== 0 && (a |= 1), En(
            e,
            n,
            a
          )) : Dn(e, n), vt = t, Xe = l;
        }
        break;
      case 30:
        Dn(e, n), a & 512 && On(n, n.return);
        break;
      case 7:
        a & 512 && On(n, n.return);
      default:
        Dn(e, n);
    }
  }
  function Nc(e, t) {
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
            var a = n.style;
            typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none";
          } else {
            var l = e.stateNode, i = e.memoizedProps.style, c = i != null && i.hasOwnProperty("display") ? i.display : null;
            l.style.display = c == null || typeof c == "boolean" ? "" : ("" + c).trim();
          }
        } catch (v) {
          Ze(e, e.return, v);
        }
        _c(e, t);
        break;
      case 6:
        try {
          e.stateNode.nodeValue = t ? "" : e.memoizedProps, Ve = !0;
        } catch (v) {
          Ze(e, e.return, v);
        }
        break;
      case 18:
        try {
          var f = e.stateNode;
          t ? _m(f, !0) : _m(e.stateNode, !1);
        } catch (v) {
          Ze(e, e.return, v);
        }
        break;
      case 22:
      case 23:
        e.memoizedState === null && Nc(e, t);
        break;
      default:
        Nc(e, t);
    }
  }
  function _c(e, t) {
    if (e.subtreeFlags & 67108864)
      for (e = e.child; e !== null; ) {
        e: {
          var n = e, a = t;
          switch (n.tag) {
            case 4:
              Uh(n, a);
              break e;
            case 22:
              n.memoizedState === null && _c(n, a);
              break e;
            default:
              _c(n, a);
          }
        }
        e = e.sibling;
      }
  }
  function zh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, zh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && hu(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var nt = null, Bt = !1;
  function yn(e, t, n) {
    for (n = n.child; n !== null; )
      Mh(e, t, n), n = n.sibling;
  }
  function Mh(e, t, n) {
    if (Kt && typeof Kt.onCommitFiberUnmount == "function")
      try {
        Kt.onCommitFiberUnmount(Wl, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Xe || wt(n, t), yn(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !Xe && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Xe || wt(n, t), xi(n);
        var a = nt, l = Bt;
        Ea(n.type) && (nt = n.stateNode, Bt = !1), yn(
          e,
          t,
          n
        ), Im(
          n.stateNode,
          n.type,
          n.memoizedProps
        ), nt = a, Bt = l;
        break;
      case 5:
        Xe || wt(n, t), xi(n);
      case 6:
        if (n.tag === 6 && xi(n), a = nt, l = Bt, nt = null, yn(
          e,
          t,
          n
        ), nt = a, Bt = l, nt !== null)
          if (Bt)
            try {
              (nt.nodeType === 9 ? nt.body : nt.nodeName === "HTML" ? nt.ownerDocument.body : nt).removeChild(n.stateNode), Ve = !0;
            } catch (i) {
              Ze(
                n,
                t,
                i
              );
            }
          else
            try {
              nt.removeChild(n.stateNode), Ve = !0;
            } catch (i) {
              Ze(
                n,
                t,
                i
              );
            }
        break;
      case 18:
        nt !== null && (Bt ? (e = nt, Nm(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), Ql(e)) : Nm(nt, n.stateNode));
        break;
      case 4:
        a = nt, l = Bt, nt = n.stateNode.containerInfo, Bt = !0, yn(
          e,
          t,
          n
        ), nt = a, Bt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        ha(2, n, t), Xe || ha(4, n, t), yn(
          e,
          t,
          n
        );
        break;
      case 1:
        Xe || (wt(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && Sh(
          n,
          t,
          a
        )), yn(
          e,
          t,
          n
        );
        break;
      case 21:
        yn(
          e,
          t,
          n
        );
        break;
      case 22:
        Xe = (a = Xe) || n.memoizedState !== null, yn(
          e,
          t,
          n
        ), Xe = a;
        break;
      case 30:
        wt(n, t), yn(
          e,
          t,
          n
        );
        break;
      case 7:
        Xe || wt(n, t), yn(
          e,
          t,
          n
        );
        break;
      default:
        yn(
          e,
          t,
          n
        );
    }
  }
  function qh(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Ql(e);
      } catch (n) {
        Ze(t, t.return, n);
      }
    }
  }
  function Hh(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Ql(e);
      } catch (n) {
        Ze(t, t.return, n);
      }
  }
  function Qv(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new jh()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new jh()), t;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function cr(e, t) {
    var n = Qv(e);
    t.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var l = ay.bind(null, e, a);
        a.then(l, l);
      }
    });
  }
  function zt(e, t, n) {
    var a = t.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var i = a[l], c = e, f = t, v = f;
        e: for (; v !== null; ) {
          switch (v.tag) {
            case 27:
              if (Ea(v.type)) {
                nt = v.stateNode, Bt = !1;
                break e;
              }
              break;
            case 5:
              nt = v.stateNode, Bt = !1;
              break e;
            case 3:
            case 4:
              nt = v.stateNode.containerInfo, Bt = !0;
              break e;
          }
          v = v.return;
        }
        if (nt === null) throw Error(s(160));
        Mh(c, f, i), nt = null, Bt = !1, c = i.alternate, c !== null && (c.return = null), i.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Lh(t, e, n), t = t.sibling;
  }
  var bn = null;
  function Lh(e, t, n) {
    var a = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (l & 4 && (a = e.updateQueue, a = a !== null ? a.events : null, a !== null))
          for (var i = 0; i < a.length; i++) {
            var c = a[i];
            c.ref.impl = c.nextImpl;
          }
        zt(t, e, n), Mt(e), l & 4 && (ha(3, e, e.return), Ci(3, e), ha(5, e, e.return));
        break;
      case 1:
        zt(t, e, n), Mt(e), l & 512 && (Xe || a === null || wt(a, a.return)), l & 64 && vt && (e = e.updateQueue, e !== null && (t = e.callbacks, t !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? t : n.concat(t))));
        break;
      case 26:
        if (i = bn, zt(t, e, n), Mt(e), l & 512 && (Xe || a === null || wt(a, a.return)), l & 4)
          if (l = a !== null ? a.memoizedState : null, n = e.memoizedState, a === null)
            if (n === null)
              if (e.stateNode === null)
                if (vt)
                  e.stateNode = Sm(
                    e.type,
                    e.memoizedProps,
                    t.containerInfo,
                    e
                  );
                else {
                  e: {
                    t = e.type, n = e.memoizedProps, l = i.ownerDocument || i;
                    t: switch (t) {
                      case "title":
                        a = l.getElementsByTagName("title")[0], (!a || a[ni] || a[Tt] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = l.createElement(t), l.head.insertBefore(
                          a,
                          l.querySelector("head > title")
                        )), Ot(a, t, n), a[Tt] = e, gt(a), t = a;
                        break e;
                      case "link":
                        if (i = Qm(
                          "link",
                          "href",
                          l
                        ).get(t + (n.href || ""))) {
                          for (c = 0; c < i.length; c++)
                            if (a = i[c], a.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && a.getAttribute("rel") === (n.rel == null ? null : n.rel) && a.getAttribute("title") === (n.title == null ? null : n.title) && a.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                              i.splice(c, 1);
                              break t;
                            }
                        }
                        a = l.createElement(t), Ot(a, t, n), l.head.appendChild(a);
                        break;
                      case "meta":
                        if (i = Qm(
                          "meta",
                          "content",
                          l
                        ).get(t + (n.content || ""))) {
                          for (c = 0; c < i.length; c++)
                            if (a = i[c], a.getAttribute("content") === (n.content == null ? null : "" + n.content) && a.getAttribute("name") === (n.name == null ? null : n.name) && a.getAttribute("property") === (n.property == null ? null : n.property) && a.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && a.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                              i.splice(c, 1);
                              break t;
                            }
                        }
                        a = l.createElement(t), Ot(a, t, n), l.head.appendChild(a);
                        break;
                      default:
                        throw Error(s(468, t));
                    }
                    a[Tt] = e, gt(a), t = a;
                  }
                  e.stateNode = t;
                }
              else
                vt || co(i, e.type, e.stateNode);
            else
              e.stateNode = Xm(
                i,
                n,
                e.memoizedProps
              );
          else
            l !== n ? (l === null ? (t = a.stateNode, t === null || Xe || t.parentNode.removeChild(t)) : l.count--, n === null ? vt || co(i, e.type, e.stateNode) : Xm(i, n, e.memoizedProps)) : n === null && e.stateNode !== null && mc(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        break;
      case 27:
        zt(t, e, n), Mt(e), l & 512 && (Xe || a === null || wt(a, a.return)), a !== null && l & 4 && mc(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (i = Rn, Rn = !1, zt(t, e, n), Rn = i, Mt(e), l & 512 && (Xe || a === null || wt(a, a.return)), e.flags & 32) {
          t = e.stateNode;
          try {
            sl(t, ""), Ve = !0;
          } catch (U) {
            Ze(e, e.return, U);
          }
        }
        l & 4 && e.stateNode != null && (t = e.memoizedProps, mc(
          e,
          t,
          a !== null ? a.memoizedProps : t
        )), l & 1024 && (Tc = !0);
        break;
      case 6:
        if (zt(t, e, n), Mt(e), l & 4) {
          if (e.stateNode === null)
            throw Error(s(162));
          t = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = t, Ve = !0;
          } catch (U) {
            Ze(e, e.return, U);
          }
        }
        break;
      case 3:
        if (Ve = !1, Nr = null, i = bn, bn = Ii(t.containerInfo), zt(t, e, n), bn = i, Mt(e), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Ql(t.containerInfo);
          } catch (U) {
            Ze(e, e.return, U);
          }
        Tc && (Tc = !1, Ih(e)), Ve = !1;
        break;
      case 4:
        l = Rn, Rn = vt, a = lf(), i = bn, bn = Ii(
          e.stateNode.containerInfo
        ), zt(t, e, n), Mt(e), bn = i, Ve && Ri && (rr = !0), Ve = a, Rn = l;
        break;
      case 12:
        zt(t, e, n), Mt(e);
        break;
      case 31:
        zt(t, e, n), Mt(e), l & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, cr(e, t)));
        break;
      case 13:
        zt(t, e, n), Mt(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (dr = Qt()), l & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, cr(e, t)));
        break;
      case 22:
        i = e.memoizedState !== null, c = a !== null && a.memoizedState !== null;
        var f = vt, v = Xe, C = Rn;
        vt = f || i, Rn = C || i, Xe = v || c, zt(t, e, n), Xe = v, Rn = C, vt = f, Mt(e), l & 8192 && (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, !i || a === null || c || vt || Xe || (t = c || Xe, n = vt, a = Xe, vt = i || vt, Xe = t, ma(e, 2), vt = n, Xe = a), !i && Rn || Nc(e, i)), l & 4 && (t = e.updateQueue, t !== null && (n = t.retryQueue, n !== null && (t.retryQueue = null, cr(e, n))));
        break;
      case 19:
        zt(t, e, n), Mt(e), l & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, cr(e, t)));
        break;
      case 30:
        l & 512 && (Xe || a === null || wt(a, a.return)), l = lf(), i = Ri, c = (n & 335544064) === n, f = e.memoizedProps, Ri = c && Vn(
          f.default,
          f.update
        ) !== "none", zt(t, e, n), Mt(e), c && a !== null && Ve && (e.flags |= 4), Ri = i, Ve = l;
        break;
      case 21:
        break;
      case 7:
        l & 512 && (Xe || a === null || wt(a, a.return)), a && a.stateNode !== null && (a.stateNode._fragmentFiber = e);
      default:
        zt(t, e, n), Mt(e);
    }
  }
  function Mt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, a = e.return; a !== null; ) {
          if (Ah(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var l = e.return; l !== null; ) {
          if (dc(l)) {
            var i = l.stateNode;
            a === null ? a = [i] : a.push(i);
          }
          if (fc(l)) break;
          l = l.return;
        }
        var c = a;
        if (n == null) throw Error(s(160));
        switch (n.tag) {
          case 27:
            var f = n.stateNode, v = gc(e);
            ar(
              e,
              v,
              f,
              c
            );
            break;
          case 5:
            var C = n.stateNode;
            n.flags & 32 && (sl(C, ""), n.flags &= -33);
            var U = gc(e);
            ar(
              e,
              U,
              C,
              c
            );
            break;
          case 3:
          case 4:
            var Q = n.stateNode.containerInfo, _ = gc(e);
            pc(
              e,
              _,
              Q,
              c
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (D) {
        Ze(e, e.return, D);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Ih(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Ih(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, Xl = !0, t.reset(), Xl = !1), e = e.sibling;
      }
  }
  function Ol(e, t) {
    if (t.subtreeFlags & 9270)
      for (t = t.child; t !== null; )
        Bh(t, e), t = t.sibling;
    else Rh(t);
  }
  function Bh(e, t) {
    var n = e.alternate;
    if (n === null) vc(e, !1);
    else
      switch (e.tag) {
        case 3:
          if (Ac = jn = !1, wh(), Ol(t, e), !jn && !rr) {
            if (e = Cn, e !== null)
              for (var a = 0; a < e.length; a += 3) {
                n = e[a];
                var l = e[a + 1];
                Om(n, e[a + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate(
                  { opacity: [0, 0], pointerEvents: ["none", "none"] },
                  {
                    duration: 0,
                    fill: "forwards",
                    pseudoElement: "::view-transition-group(" + l + ")"
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
            )), Ac = !0;
          }
          Cn = null;
          break;
        case 5:
          Ol(t, e);
          break;
        case 4:
          a = jn, jn = !1, Ol(t, e), jn && (rr = !0), jn = a;
          break;
        case 22:
          e.memoizedState === null && (n.memoizedState !== null ? vc(e, !1) : Ol(t, e));
          break;
        case 30:
          a = jn, l = wh(), jn = !1, Ol(t, e), jn && (e.flags |= 4);
          var i = e.memoizedProps, c = e.stateNode;
          t = Bn(i, c), c = Bn(n.memoizedProps, c);
          var f = Vn(i.default, i.update);
          f === "none" ? t = !1 : (i = n.memoizedState, n.memoizedState = null, n = e.child, It = 0, t = Sc(
            e,
            n,
            t,
            c,
            f,
            i,
            !0
          ), It !== (i === null ? 0 : i.length) && (e.flags |= 32)), (e.flags & 4) !== 0 && t ? (zl(
            e,
            e.memoizedProps.onUpdate
          ), Cn = l) : l !== null && (l.push.apply(l, Cn), Cn = l), jn = (e.flags & 32) !== 0 ? !0 : a;
          break;
        default:
          Ol(t, e);
      }
  }
  function Dn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Dh(e, t.alternate, t), t = t.sibling;
  }
  function ma(e, t) {
    for (e = e.child; e !== null; ) {
      var n = e, a = t;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          ha(4, n, n.return), ma(
            n,
            a
          );
          break;
        case 1:
          wt(n, n.return);
          var l = n.stateNode;
          typeof l.componentWillUnmount == "function" && Sh(
            n,
            n.return,
            l
          ), ma(
            n,
            a
          );
          break;
        case 27:
          (a & 2) !== 0 && Im(
            n.stateNode,
            n.type,
            n.memoizedProps
          );
        case 5:
          wt(n, n.return), n.tag !== 5 && n.tag !== 27 || xi(n), ma(
            n,
            a
          );
          break;
        case 6:
          xi(n);
          break;
        case 26:
          wt(n, n.return), l = n.stateNode, n.memoizedState !== null || l === null || Xe || l.parentNode.removeChild(l), ma(
            n,
            a
          );
          break;
        case 22:
          n.memoizedState === null && ma(
            n,
            a
          );
          break;
        case 30:
          wt(n, n.return), ma(
            n,
            a
          );
          break;
        case 7:
          wt(n, n.return);
        default:
          ma(
            n,
            a
          );
      }
      e = e.sibling;
    }
  }
  function En(e, t, n) {
    for (n = (t.subtreeFlags & 8772) !== 0 ? n : n & -2, t = t.child; t !== null; ) {
      var a = t.alternate, l = e, i = t, c = i.flags, f = (n & 1) !== 0;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          En(
            l,
            i,
            n
          ), Ci(4, i);
          break;
        case 1:
          if (En(
            l,
            i,
            n
          ), a = i, l = a.stateNode, typeof l.componentDidMount == "function")
            try {
              l.componentDidMount();
            } catch (U) {
              Ze(a, a.return, U);
            }
          if (a = i, l = a.updateQueue, l !== null) {
            var v = a.stateNode;
            try {
              var C = l.shared.hiddenCallbacks;
              if (C !== null)
                for (l.shared.hiddenCallbacks = null, l = 0; l < C.length; l++)
                  sd(C[l], v);
            } catch (U) {
              Ze(a, a.return, U);
            }
          }
          f && c & 64 && Eh(i), On(i, i.return);
          break;
        case 27:
          (n & 2) !== 0 && Nh(i);
        case 5:
          i.tag !== 5 && i.tag !== 27 || Th(i), En(
            l,
            i,
            n
          ), f && a === null && c & 4 && hc(i), On(i, i.return);
          break;
        case 6:
          Th(i);
          break;
        case 26:
          v = i.stateNode, i.memoizedState !== null || v === null || vt || co(
            Ii(v.ownerDocument),
            i.type,
            v
          ), En(
            l,
            i,
            n
          ), f && a === null && c & 4 && hc(i), On(i, i.return);
          break;
        case 12:
          En(
            l,
            i,
            n
          );
          break;
        case 31:
          En(
            l,
            i,
            n
          ), f && c & 4 && qh(l, i);
          break;
        case 13:
          En(
            l,
            i,
            n
          ), f && c & 4 && Hh(l, i);
          break;
        case 22:
          i.memoizedState === null && En(
            l,
            i,
            n
          ), On(i, i.return);
          break;
        case 30:
          En(
            l,
            i,
            n
          ), On(i, i.return);
          break;
        case 7:
          On(i, i.return);
        default:
          En(
            l,
            i,
            n
          );
      }
      t = t.sibling;
    }
  }
  function wc(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && gi(n));
  }
  function Oc(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && gi(e));
  }
  function fn(e, t, n, a) {
    var l = (n & 335544064) === n;
    if (t.subtreeFlags & (l ? 10262 : 10256))
      for (t = t.child; t !== null; )
        Vh(
          e,
          t,
          n,
          a
        ), t = t.sibling;
    else l && xh(t);
  }
  function Vh(e, t, n, a) {
    var l = (n & 335544064) === n;
    l && t.alternate === null && t.return !== null && t.return.alternate !== null && ur(t);
    var i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        fn(
          e,
          t,
          n,
          a
        ), i & 2048 && Ci(9, t);
        break;
      case 1:
        fn(
          e,
          t,
          n,
          a
        );
        break;
      case 3:
        fn(
          e,
          t,
          n,
          a
        ), l && Ac && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), i & 2048 && (i = null, t.alternate !== null && (i = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== i && (t.refCount++, i != null && gi(i)));
        break;
      case 12:
        if (i & 2048) {
          fn(
            e,
            t,
            n,
            a
          ), i = t.stateNode;
          try {
            var c = t.memoizedProps, f = c.id, v = c.onPostCommit;
            typeof v == "function" && v(
              f,
              t.alternate === null ? "mount" : "update",
              i.passiveEffectDuration,
              -0
            );
          } catch (C) {
            Ze(t, t.return, C);
          }
        } else
          fn(
            e,
            t,
            n,
            a
          );
        break;
      case 31:
        fn(
          e,
          t,
          n,
          a
        );
        break;
      case 13:
        fn(
          e,
          t,
          n,
          a
        );
        break;
      case 23:
        break;
      case 22:
        c = t.stateNode, f = t.alternate, t.memoizedState !== null ? (l && f !== null && f.memoizedState === null && ur(f), c._visibility & 2 ? fn(
          e,
          t,
          n,
          a
        ) : ji(
          e,
          t
        )) : (l && f !== null && f.memoizedState !== null && ur(t), c._visibility & 2 ? fn(
          e,
          t,
          n,
          a
        ) : (c._visibility |= 2, Cl(
          e,
          t,
          n,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        ))), i & 2048 && wc(f, t);
        break;
      case 24:
        fn(
          e,
          t,
          n,
          a
        ), i & 2048 && Oc(t.alternate, t);
        break;
      case 30:
        l && (i = t.alternate, i !== null && (xn(i.child, !0), xn(t.child, !0))), fn(
          e,
          t,
          n,
          a
        );
        break;
      default:
        fn(
          e,
          t,
          n,
          a
        );
    }
  }
  function Cl(e, t, n, a, l) {
    for (l = l && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var i = e, c = t, f = n, v = a, C = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Cl(
            i,
            c,
            f,
            v,
            l
          ), Ci(8, c);
          break;
        case 23:
          break;
        case 22:
          var U = c.stateNode;
          c.memoizedState !== null ? U._visibility & 2 ? Cl(
            i,
            c,
            f,
            v,
            l
          ) : ji(
            i,
            c
          ) : (U._visibility |= 2, Cl(
            i,
            c,
            f,
            v,
            l
          )), l && C & 2048 && wc(
            c.alternate,
            c
          );
          break;
        case 24:
          Cl(
            i,
            c,
            f,
            v,
            l
          ), l && C & 2048 && Oc(c.alternate, c);
          break;
        default:
          Cl(
            i,
            c,
            f,
            v,
            l
          );
      }
      t = t.sibling;
    }
  }
  function ji(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, a = t, l = a.flags;
        switch (a.tag) {
          case 22:
            ji(n, a), l & 2048 && wc(
              a.alternate,
              a
            );
            break;
          case 24:
            ji(n, a), l & 2048 && Oc(a.alternate, a);
            break;
          default:
            ji(n, a);
        }
        t = t.sibling;
      }
  }
  var $a = 8192;
  function Fa(e, t, n) {
    if (e.subtreeFlags & $a)
      for (e = e.child; e !== null; )
        Gh(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function Gh(e, t, n) {
    switch (e.tag) {
      case 26:
        Fa(
          e,
          t,
          n
        ), e.flags & $a && (e.memoizedState !== null ? Fy(
          n,
          bn,
          e.memoizedState,
          e.memoizedProps
        ) : (e = e.stateNode, (t & 335544128) === t && Jm(n, e)));
        break;
      case 5:
        Fa(
          e,
          t,
          n
        ), e.flags & $a && (e = e.stateNode, (t & 335544128) === t && Jm(n, e));
        break;
      case 3:
      case 4:
        var a = bn;
        bn = Ii(e.stateNode.containerInfo), Fa(
          e,
          t,
          n
        ), bn = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = $a, $a = 16777216, Fa(
          e,
          t,
          n
        ), $a = a) : Fa(
          e,
          t,
          n
        ));
        break;
      case 30:
        if ((e.flags & $a) !== 0 && (a = e.memoizedProps.name, a != null && a !== "auto")) {
          var l = e.stateNode;
          l.paired = null, Ft === null && (Ft = /* @__PURE__ */ new Map()), Ft.set(a, l);
        }
        Fa(
          e,
          t,
          n
        );
        break;
      default:
        Fa(
          e,
          t,
          n
        );
    }
  }
  function Yh(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Di(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          yt = a, Qh(
            a,
            e
          );
        }
      Yh(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Xh(e), e = e.sibling;
  }
  function Xh(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Di(e), e.flags & 2048 && ha(9, e, e.return);
        break;
      case 3:
        Di(e);
        break;
      case 12:
        Di(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, or(e)) : Di(e);
        break;
      default:
        Di(e);
    }
  }
  function or(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          yt = a, Qh(
            a,
            e
          );
        }
      Yh(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          ha(8, t, t.return), or(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, or(t));
          break;
        default:
          or(t);
      }
      e = e.sibling;
    }
  }
  function Qh(e, t) {
    for (; yt !== null; ) {
      var n = yt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          ha(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          gi(n.memoizedState.cache);
      }
      if (a = n.child, a !== null) a.return = n, yt = a;
      else
        e: for (n = e; yt !== null; ) {
          a = yt;
          var l = a.sibling, i = a.return;
          if (zh(a), a === n) {
            yt = null;
            break e;
          }
          if (l !== null) {
            l.return = i, yt = l;
            break e;
          }
          yt = i;
        }
    }
  }
  var Kv = {
    getCacheForType: function(e) {
      var t = At(st), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return At(st).controller.signal;
    }
  }, Zv = typeof WeakMap == "function" ? WeakMap : Map, Ge = 0, Fe = null, ze = null, qe = 0, Ke = 0, Pt = null, ga = !1, xl = !1, Cc = !1, $n = 0, it = 0, pa = 0, Pa = 0, fr = 0, Wt = 0, Rl = 0, Ui = null, Vt = null, xc = !1, dr = 0, Kh = 0, hr = 1 / 0, mr = null, va = null, at = 0, Sn = null, Wa = null, Un = 0, Rc = 0, jc = null, Zh = null, jl = null, Dl = null, Ul = null, zi = 0, gr = null;
  function en() {
    return (Ge & 2) !== 0 && qe !== 0 ? qe & -qe : ee.T !== null ? Vc() : Jo();
  }
  function kh() {
    if (Wt === 0)
      if ((qe & 536870912) === 0 || Ue) {
        var e = cu;
        cu <<= 1, (cu & 3932160) === 0 && (cu = 262144), Wt = e;
      } else Wt = 536870912;
    return e = Nt.current, e !== null && (e.flags |= 32), Wt;
  }
  function zl(e, t) {
    if (t != null) {
      var n = e.stateNode, a = n.ref;
      a === null && (a = n.ref = Cm(
        Bn(e.memoizedProps, n)
      )), Dl === null && (Dl = []), Dl.push(t.bind(null, a));
    }
  }
  function Gt(e, t, n) {
    (e === Fe && (Ke === 2 || Ke === 9) || e.cancelPendingCommit !== null) && (Ml(e, 0), ya(
      e,
      qe,
      Wt,
      !1
    )), ti(e, n), ((Ge & 2) === 0 || e !== Fe) && (e === Fe && ((Ge & 2) === 0 && (Pa |= n), it === 4 && ya(
      e,
      qe,
      Wt,
      !1
    )), zn(e));
  }
  function Jh(e, t, n) {
    if ((Ge & 6) !== 0) throw Error(s(327));
    var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || ei(e, t), l = a ? $v(e, t) : Uc(e, t, !0), i = a;
    do {
      if (l === 0) {
        xl && !a && ya(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, i && !kv(n)) {
          l = Uc(e, t, !1), i = !1;
          continue;
        }
        if (l === 2) {
          if (i = t, e.errorRecoveryDisabledLanes & i)
            var c = 0;
          else
            c = e.pendingLanes & -536870913, c = c !== 0 ? c : c & 536870912 ? 536870912 : 0;
          if (c !== 0) {
            t = c;
            e: {
              var f = e;
              l = Ui;
              var v = f.current.memoizedState.isDehydrated;
              if (v && (Ml(f, c).flags |= 256), c = Uc(
                f,
                c,
                !1
              ), c !== 2 && c !== 6) {
                if (Cc && !v) {
                  f.errorRecoveryDisabledLanes |= i, Pa |= i, l = 4;
                  break e;
                }
                i = Vt, Vt = l, i !== null && (Vt === null ? Vt = i : Vt.push.apply(
                  Vt,
                  i
                ));
              }
              l = c;
            }
            if (i = !1, l !== 2) continue;
          }
        }
        if (l === 1) {
          Ml(e, 0), ya(e, t, 0, !0);
          break;
        }
        e: {
          switch (a = e, i = l, i) {
            case 0:
            case 1:
              throw Error(s(345));
            case 4:
              if ((t & 4194048) !== t && (t & 62914560) !== t)
                break;
            case 6:
              ya(
                a,
                t,
                Wt,
                !ga
              );
              break e;
            case 2:
              Vt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(s(329));
          }
          if ((t & 62914560) === t && (l = dr + 300 - Qt(), 10 < l)) {
            if (ya(
              a,
              t,
              Wt,
              !ga
            ), fu(a, 0, !0) !== 0) break e;
            Un = t, a.timeoutHandle = Pc(
              $h.bind(
                null,
                a,
                n,
                Vt,
                mr,
                xc,
                t,
                Wt,
                Pa,
                Rl,
                ga,
                i,
                "Throttled",
                -0,
                0
              ),
              l
            );
            break e;
          }
          $h(
            a,
            n,
            Vt,
            mr,
            xc,
            t,
            Wt,
            Pa,
            Rl,
            ga,
            i,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    zn(e);
  }
  function $h(e, t, n, a, l, i, c, f, v, C, U, Q, _, D) {
    e.timeoutHandle = -1;
    var ue = t.subtreeFlags, ge = (i & 335544064) === i;
    if (Q = null, (ge || ue & 8192 || (ue & 16785408) === 16785408) && (Q = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Nn
    }, Ft = null, Gh(
      t,
      i,
      Q
    ), ge && (ue = Q, ge = e.containerInfo, ge = (ge.nodeType === 9 ? ge : ge.ownerDocument).__reactViewTransition, ge != null && (ue.count++, ue.waitingForViewTransition = !0, ue = Gi.bind(ue), ge.finished.then(ue, ue))), ue = (i & 62914560) === i ? dr - Qt() : (i & 4194048) === i ? Kh - Qt() : 0, ue = Py(
      Q,
      ue
    ), ue !== null)) {
      Un = i, e.cancelPendingCommit = ue(
        lm.bind(
          null,
          e,
          t,
          i,
          n,
          a,
          l,
          c,
          f,
          v,
          C,
          U,
          Q,
          null,
          _,
          D
        )
      ), ya(e, i, c, !C);
      return;
    }
    lm(
      e,
      t,
      i,
      n,
      a,
      l,
      c,
      f,
      v,
      C,
      U,
      Q
    );
  }
  function kv(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var a = 0; a < n.length; a++) {
          var l = n[a], i = l.getSnapshot;
          l = l.value;
          try {
            if (!Jt(i(), l)) return !1;
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
  function ya(e, t, n, a) {
    t = Xo(e, t), t &= ~fr, t &= ~Pa, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var l = t; 0 < l; ) {
      var i = 31 - Zt(l), c = 1 << i;
      a[i] = -1, l &= ~c;
    }
    n !== 0 && Ko(e, n, t);
  }
  function pr() {
    return (Ge & 6) === 0 ? (Mi(0), !1) : !0;
  }
  function Dc() {
    if (ze !== null) {
      if (Ke === 0)
        var e = ze.return;
      else
        e = ze, Xn = Ba = null, Bs(e), Sl = null, yi = 0, e = ze;
      for (; e !== null; )
        bh(e.alternate, e), e = e.return;
      ze = null;
    }
  }
  function Ml(e, t) {
    var n = e.timeoutHandle;
    return n !== -1 && (e.timeoutHandle = -1, yy(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Un = 0, Dc(), Fe = e, ze = n = Gn(e.current, null), qe = t, Ke = 0, Pt = null, ga = !1, xl = ei(e, t), Cc = !1, Rl = Wt = fr = Pa = pa = it = 0, Vt = Ui = null, xc = !1, $n = Xo(e, t), Nu(), n;
  }
  function Fh(e, t) {
    Re = null, ee.H = Ju, t === El || t === Mu ? (t = ld(), Ke = 3) : t === Os ? (t = ld(), Ke = 4) : Ke = t === tc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Pt = t, ze === null && (it = 1, $u(
      e,
      rn(t, e.current)
    ));
  }
  function Ph() {
    var e = Nt.current;
    return e === null ? !0 : (qe & 4194048) === qe ? jt === null : (qe & 62914560) === qe || (qe & 536870912) !== 0 ? e === jt : !1;
  }
  function Wh() {
    var e = ee.H;
    return ee.H = Ju, e === null ? Ju : e;
  }
  function em() {
    var e = ee.A;
    return ee.A = Kv, e;
  }
  function vr() {
    it = 4, ga || (qe & 4194048) !== qe && Nt.current !== null || (xl = !0), (pa & 134217727) === 0 && (Pa & 134217727) === 0 || Fe === null || ya(
      Fe,
      qe,
      Wt,
      !1
    );
  }
  function Uc(e, t, n) {
    var a = Ge;
    Ge |= 2;
    var l = Wh(), i = em();
    (Fe !== e || qe !== t) && (mr = null, Ml(e, t)), t = !1;
    var c = it;
    e: do
      try {
        if (Ke !== 0 && ze !== null) {
          var f = ze, v = Pt;
          switch (Ke) {
            case 8:
              Dc(), c = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Nt.current === null && (t = !0);
              var C = Ke;
              if (Ke = 0, Pt = null, ql(e, f, v, C), n && xl) {
                c = 0;
                break e;
              }
              break;
            default:
              C = Ke, Ke = 0, Pt = null, ql(e, f, v, C);
          }
        }
        Jv(), c = it;
        break;
      } catch (U) {
        Fh(e, U);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Xn = Ba = null, Ge = a, ee.H = l, ee.A = i, ze === null && (Fe = null, qe = 0, Nu()), c;
  }
  function Jv() {
    for (; ze !== null; ) tm(ze);
  }
  function $v(e, t) {
    var n = Ge;
    Ge |= 2;
    var a = Wh(), l = em();
    Fe !== e || qe !== t ? (mr = null, hr = Qt() + 500, Ml(e, t)) : xl = ei(
      e,
      t
    );
    e: do
      try {
        if (Ke !== 0 && ze !== null) {
          t = ze;
          var i = Pt;
          t: switch (Ke) {
            case 1:
              Ke = 0, Pt = null, ql(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (nd(i)) {
                Ke = 0, Pt = null, nm(t);
                break;
              }
              t = function() {
                Ke !== 2 && Ke !== 9 || Fe !== e || (Ke = 7), zn(e);
              }, i.then(t, t);
              break e;
            case 3:
              Ke = 7;
              break e;
            case 4:
              Ke = 5;
              break e;
            case 7:
              nd(i) ? (Ke = 0, Pt = null, nm(t)) : (Ke = 0, Pt = null, ql(e, t, i, 7));
              break;
            case 5:
              var c = null;
              switch (ze.tag) {
                case 26:
                  c = ze.memoizedState;
                case 5:
                case 27:
                  var f = ze;
                  if (c ? Zm(c) : f.stateNode.complete) {
                    Ke = 0, Pt = null;
                    var v = f.sibling;
                    if (v !== null) ze = v;
                    else {
                      var C = f.return;
                      C !== null ? (ze = C, yr(C)) : ze = null;
                    }
                    break t;
                  }
              }
              Ke = 0, Pt = null, ql(e, t, i, 5);
              break;
            case 6:
              Ke = 0, Pt = null, ql(e, t, i, 6);
              break;
            case 8:
              Dc(), it = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        Fv();
        break;
      } catch (U) {
        Fh(e, U);
      }
    while (!0);
    return Xn = Ba = null, ee.H = a, ee.A = l, Ge = n, ze !== null ? 0 : (Fe = null, qe = 0, Nu(), it);
  }
  function Fv() {
    for (; ze !== null && !mp(); )
      tm(ze);
  }
  function tm(e) {
    var t = vh(e.alternate, e, $n);
    e.memoizedProps = e.pendingProps, t === null ? yr(e) : ze = t;
  }
  function nm(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = oh(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          qe
        );
        break;
      case 11:
        t = oh(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          qe
        );
        break;
      case 5:
        Bs(t);
        var a = t;
        a === pt && (Ue ? (Ru(a), a.tag === 5 && a.stateNode != null && (et = a.stateNode)) : (Ru(a), Ue = !0));
      default:
        bh(n, t), t = ze = Qf(t, $n), t = vh(n, t, $n);
    }
    e.memoizedProps = e.pendingProps, t === null ? yr(e) : ze = t;
  }
  function ql(e, t, n, a) {
    Xn = Ba = null, Bs(t), Sl = null, yi = 0;
    var l = t.return;
    try {
      if (Lv(
        e,
        l,
        t,
        n,
        qe
      )) {
        it = 1, $u(
          e,
          rn(n, e.current)
        ), ze = null;
        return;
      }
    } catch (i) {
      if (l !== null) throw ze = l, i;
      it = 1, $u(
        e,
        rn(n, e.current)
      ), ze = null;
      return;
    }
    t.flags & 32768 ? (Ue || a === 1 ? e = !0 : xl || (qe & 536870912) !== 0 ? e = !1 : (ga = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Nt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), am(t, e)) : yr(t);
  }
  function yr(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        am(
          t,
          ga
        );
        return;
      }
      e = t.return;
      var n = Gv(
        t.alternate,
        t,
        $n
      );
      if (n !== null) {
        ze = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        ze = t;
        return;
      }
      ze = t = e;
    } while (t !== null);
    it === 0 && (it = 5);
  }
  function am(e, t) {
    do {
      var n = Yv(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, ze = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        ze = e;
        return;
      }
      ze = e = n;
    } while (e !== null);
    it = 6, ze = null;
  }
  function lm(e, t, n, a, l, i, c, f, v, C, U, Q) {
    e.cancelPendingCommit = null;
    do
      br();
    while (at !== 0);
    if ((Ge & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === e.current) throw Error(s(177));
      e === Fe && (ze = Fe = null, qe = 0), Wa = t, Sn = e, Un = n, jc = l, Zh = a, Pv(
        e,
        t,
        n,
        c,
        f,
        v,
        Q
      );
    }
  }
  function Pv(e, t, n, a, l, i, c) {
    var f = t.lanes | t.childLanes;
    if (Rc = f, f |= ms, Np(
      e,
      n,
      f,
      a,
      l,
      i
    ), Dl = null, (n & 335544064) === n ? (Ul = wv(e), a = 10262) : (Ul = null, a = 10256), (t.subtreeFlags & a) !== 0 || (t.flags & a) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, ly(ru, function() {
      return Hc(), null;
    })) : (e.callbackNode = null, e.callbackPriority = 0), lr = !1, a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
      a = ee.T, ee.T = null, l = ce.p, ce.p = 2, i = Ge, Ge |= 4;
      try {
        Xv(e, t, n);
      } finally {
        Ge = i, ce.p = l, ee.T = a;
      }
    }
    at = 1, lr ? jl = Ny(
      c,
      e.containerInfo,
      Ul,
      zc,
      Mc,
      ey,
      qc,
      Hc,
      Wv
    ) : (zc(), Mc(), qc());
  }
  function Wv(e) {
    if (at !== 0) {
      var t = Sn.onRecoverableError;
      t(e, { componentStack: null });
    }
  }
  function ey() {
    at === 3 && (at = 0, Bh(Wa, Sn), at = 4);
  }
  function zc() {
    if (at === 1) {
      at = 0;
      var e = Sn, t = Wa, n = Un, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = ee.T, ee.T = null;
        var l = ce.p;
        ce.p = 2;
        var i = Ge;
        Ge |= 4;
        try {
          Ri = rr = !1, Lh(t, e, n), n = Jc;
          var c = Mf(e.containerInfo), f = n.focusedElem, v = n.selectionRange;
          if (c !== f && f && f.ownerDocument && zf(
            f.ownerDocument.documentElement,
            f
          )) {
            if (v !== null && cs(f)) {
              var C = v.start, U = v.end;
              if (U === void 0 && (U = C), "selectionStart" in f)
                f.selectionStart = C, f.selectionEnd = Math.min(
                  U,
                  f.value.length
                );
              else {
                var Q = f.ownerDocument || document, _ = Q && Q.defaultView || window;
                if (_.getSelection) {
                  var D = _.getSelection(), ue = f.textContent.length, ge = Math.min(v.start, ue), je = v.end === void 0 ? ge : Math.min(v.end, ue);
                  !D.extend && ge > je && (c = je, je = ge, ge = c);
                  var w = Uf(
                    f,
                    ge
                  ), T = Uf(
                    f,
                    je
                  );
                  if (w && T && (D.rangeCount !== 1 || D.anchorNode !== w.node || D.anchorOffset !== w.offset || D.focusNode !== T.node || D.focusOffset !== T.offset)) {
                    var R = Q.createRange();
                    R.setStart(w.node, w.offset), D.removeAllRanges(), ge > je ? (D.addRange(R), D.extend(T.node, T.offset)) : (R.setEnd(T.node, T.offset), D.addRange(R));
                  }
                }
              }
            }
            for (Q = [], D = f; D = D.parentNode; )
              D.nodeType === 1 && Q.push({
                element: D,
                left: D.scrollLeft,
                top: D.scrollTop
              });
            for (typeof f.focus == "function" && f.focus(), f = 0; f < Q.length; f++) {
              var X = Q[f];
              X.element.scrollLeft = X.left, X.element.scrollTop = X.top;
            }
          }
          Xl = !!kc, Jc = kc = null;
        } finally {
          Ge = i, ce.p = l, ee.T = a;
        }
      }
      e.current = t, at = 2;
    }
  }
  function Mc() {
    if (at === 2) {
      at = 0;
      var e = Sn, t = Wa, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = ee.T, ee.T = null;
        var a = ce.p;
        ce.p = 2;
        var l = Ge;
        Ge |= 4;
        try {
          Dh(e, t.alternate, t);
        } finally {
          Ge = l, ce.p = a, ee.T = n;
        }
      }
      at = 3;
    }
  }
  function qc() {
    if (at === 4 || at === 3) {
      at = 0;
      var e = jl;
      jl = null, gp();
      var t = Sn, n = Wa, a = Un, l = Zh, i = (a & 335544064) === a ? 10262 : 10256;
      if ((n.subtreeFlags & i) !== 0 || (n.flags & i) !== 0 ? at = 5 : (at = 0, Wa = Sn = null, im(t, t.pendingLanes)), i = t.pendingLanes, i === 0 && (va = null), Qr(a), n = n.stateNode, Kt && typeof Kt.onCommitFiberRoot == "function")
        try {
          Kt.onCommitFiberRoot(
            Wl,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        n = ee.T, i = ce.p, ce.p = 2, ee.T = null;
        try {
          for (var c = t.onRecoverableError, f = 0; f < l.length; f++) {
            var v = l[f];
            c(v.value, {
              componentStack: v.stack
            });
          }
        } finally {
          ee.T = n, ce.p = i;
        }
      }
      if (l = Dl, c = Ul, Ul = null, l !== null && (Dl = null, c === null && (c = []), e !== null))
        for (v = 0; v < l.length; v++)
          n = (0, l[v])(
            c
          ), n !== void 0 && e.finished.finally(n);
      (Un & 3) !== 0 && br(), zn(t), i = t.pendingLanes, (a & 261930) !== 0 && (i & 42) !== 0 ? t === gr ? zi++ : (zi = 0, gr = t) : (zi = 0, gr = null), Mi(0);
    }
  }
  function im(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, gi(t)));
  }
  function br() {
    return jl !== null && (jl.skipTransition(), jl = null), zc(), Mc(), qc(), Hc();
  }
  function Hc() {
    if (at !== 5) return !1;
    var e = Sn, t = Rc;
    Rc = 0;
    var n = Qr(Un), a = ee.T, l = ce.p;
    try {
      ce.p = 32 > n ? 32 : n, ee.T = null, n = jc, jc = null;
      var i = Sn, c = Un;
      if (at = 0, Wa = Sn = null, Un = 0, (Ge & 6) !== 0) throw Error(s(331));
      var f = Ge;
      if (Ge |= 4, Xh(i.current), Vh(
        i,
        i.current,
        c,
        n
      ), Ge = f, Mi(0, !1), Kt && typeof Kt.onPostCommitFiberRoot == "function")
        try {
          Kt.onPostCommitFiberRoot(Wl, i);
        } catch {
        }
      return !0;
    } finally {
      ce.p = l, ee.T = a, im(e, t);
    }
  }
  function um(e, t, n) {
    t = rn(n, t), t = ec(e.stateNode, t, 2), e = ca(e, t, 2), e !== null && (ti(e, 2), zn(e));
  }
  function Ze(e, t, n) {
    if (e.tag === 3)
      um(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          um(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (va === null || !va.has(a))) {
            e = rn(n, e), n = nh(2), a = ca(t, n, 2), a !== null && (ah(
              n,
              a,
              t,
              e
            ), ti(a, 2), zn(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Lc(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Zv();
      var l = /* @__PURE__ */ new Set();
      a.set(t, l);
    } else
      l = a.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), a.set(t, l));
    l.has(n) || (Cc = !0, l.add(n), e = ty.bind(null, e, t, n), t.then(e, e));
  }
  function ty(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Fe === e && (qe & n) === n && ((it === 4 || it === 3 && (qe & 62914560) === qe && 300 > Qt() - dr) && (Ge & 2) === 0 ? Ml(e, 0) : fr |= n, Rl === qe && (Rl = 0)), zn(e);
  }
  function rm(e, t) {
    t === 0 && (t = Qo()), e = Ha(e, t), e !== null && (ti(e, t), zn(e));
  }
  function ny(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), rm(e, n);
  }
  function ay(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var a = e.stateNode, l = e.memoizedState;
        l !== null && (n = l.retryLane);
        break;
      case 19:
        a = e.stateNode;
        break;
      case 22:
        a = e.stateNode._retryCache;
        break;
      default:
        throw Error(s(314));
    }
    a !== null && a.delete(t), rm(e, n);
  }
  function ly(e, t) {
    return Vr(e, t);
  }
  var Hl = null, Ll = null, Ic = !1, Er = !1, Bc = !1, ba = 0;
  function zn(e) {
    e !== Ll && e.next === null && (Ll === null ? Hl = Ll = e : Ll = Ll.next = e), Er = !0, Ic || (Ic = !0, uy());
  }
  function Mi(e, t) {
    if (!Bc && Er) {
      Bc = !0;
      do
        for (var n = !1, a = Hl; a !== null; ) {
          if (e !== 0) {
            var l = a.pendingLanes;
            if (l === 0) var i = 0;
            else {
              var c = a.suspendedLanes, f = a.pingedLanes;
              i = (1 << 31 - Zt(42 | e) + 1) - 1, i &= l & ~(c & ~f), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (n = !0, fm(a, i));
          } else
            i = qe, i = fu(
              a,
              a === Fe ? i : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (i & 3) === 0 || ei(a, i) || (n = !0, fm(a, i));
          a = a.next;
        }
      while (n);
      Bc = !1;
    }
  }
  function iy() {
    sm();
  }
  function sm() {
    Er = Ic = !1;
    var e = 0;
    ba !== 0 && vy() && (e = ba);
    for (var t = Qt(), n = null, a = Hl; a !== null; ) {
      var l = a.next, i = cm(a, t);
      i === 0 ? (a.next = null, n === null ? Hl = l : n.next = l, l === null && (Ll = n)) : (n = a, (e !== 0 || (i & 3) !== 0) && (Er = !0)), a = l;
    }
    at !== 0 && at !== 5 || Mi(e), ba !== 0 && (ba = 0);
  }
  function cm(e, t) {
    for (var n = e.suspendedLanes, a = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var c = 31 - Zt(i), f = 1 << c, v = l[c];
      v === -1 ? ((f & n) === 0 || (f & a) !== 0) && (l[c] = Ap(f, t)) : v <= t && (e.expiredLanes |= f), i &= ~f;
    }
    if (t = Fe, n = qe, n = fu(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, n === 0 || e === t && (Ke === 2 || Ke === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && Gr(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || ei(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (a !== null && Gr(a), Qr(n)) {
        case 2:
        case 8:
          n = Go;
          break;
        case 32:
          n = ru;
          break;
        case 268435456:
          n = Yo;
          break;
        default:
          n = ru;
      }
      return a = om.bind(null, e), n = Vr(n, a), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return a !== null && a !== null && Gr(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function om(e, t) {
    if (at !== 0 && at !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (br() && e.callbackNode !== n)
      return null;
    var a = qe;
    return a = fu(
      e,
      e === Fe ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (Jh(e, a, t), cm(e, Qt()), e.callbackNode != null && e.callbackNode === n ? om.bind(null, e) : null);
  }
  function fm(e, t) {
    if (br()) return null;
    Jh(e, t, !0);
  }
  function uy() {
    by(function() {
      (Ge & 6) !== 0 ? Vr(
        Vo,
        iy
      ) : sm();
    });
  }
  function Vc() {
    if (ba === 0) {
      var e = Ya;
      e === 0 && (e = su, su <<= 1, (su & 261888) === 0 && (su = 256)), ba = e;
    }
    return ba;
  }
  function dm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : pu(e);
  }
  function ry(e, t, n, a, l) {
    if (t === "submit" && n && n.stateNode === l) {
      var i = dm(
        (l[Ht] || null).action
      ), c = a.submitter;
      c && (t = (t = c[Ht] || null) ? dm(t.formAction) : c.getAttribute("formAction"), t !== null && (i = t, c = null));
      var f = new Eu(
        "action",
        "action",
        null,
        a,
        l
      );
      e.push({
        event: f,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (a.defaultPrevented) {
                if (ba !== 0) {
                  var v = new FormData(l, c);
                  Js(
                    n,
                    {
                      pending: !0,
                      data: v,
                      method: l.method,
                      action: i
                    },
                    null,
                    v
                  );
                }
              } else
                typeof i == "function" && (f.preventDefault(), v = new FormData(l, c), Js(
                  n,
                  {
                    pending: !0,
                    data: v,
                    method: l.method,
                    action: i
                  },
                  i,
                  v
                ));
            },
            currentTarget: l
          }
        ]
      });
    }
  }
  for (var Gc = 0; Gc < hs.length; Gc++) {
    var Yc = hs[Gc], sy = Yc.toLowerCase(), cy = Yc[0].toUpperCase() + Yc.slice(1);
    vn(
      sy,
      "on" + cy
    );
  }
  vn(Lf, "onAnimationEnd"), vn(If, "onAnimationIteration"), vn(Bf, "onAnimationStart"), vn("dblclick", "onDoubleClick"), vn("focusin", "onFocus"), vn("focusout", "onBlur"), vn(yv, "onTransitionRun"), vn(bv, "onTransitionStart"), vn(Ev, "onTransitionCancel"), vn(Vf, "onTransitionEnd"), ul("onMouseEnter", ["mouseout", "mouseover"]), ul("onMouseLeave", ["mouseout", "mouseover"]), ul("onPointerEnter", ["pointerout", "pointerover"]), ul("onPointerLeave", ["pointerout", "pointerover"]), za(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), za(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), za("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), za(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), za(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), za(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var qi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), oy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qi)
  );
  function hm(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var a = e[n], l = a.event;
      a = a.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var c = a.length - 1; 0 <= c; c--) {
            var f = a[c], v = f.instance, C = f.currentTarget;
            if (f = f.listener, v !== i && l.isPropagationStopped())
              break e;
            i = f, l.currentTarget = C;
            try {
              i(l);
            } catch (U) {
              Au(U);
            }
            l.currentTarget = null, i = v;
          }
        else
          for (c = 0; c < a.length; c++) {
            if (f = a[c], v = f.instance, C = f.currentTarget, f = f.listener, v !== i && l.isPropagationStopped())
              break e;
            i = f, l.currentTarget = C;
            try {
              i(l);
            } catch (U) {
              Au(U);
            }
            l.currentTarget = null, i = v;
          }
      }
    }
  }
  function Me(e, t) {
    var n = t[Fo];
    n === void 0 && (n = t[Fo] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    n.has(a) || (mm(t, e, 2, !1), n.add(a));
  }
  function Xc(e, t, n) {
    var a = 0;
    t && (a |= 4), mm(
      n,
      e,
      a,
      t
    );
  }
  var Sr = "_reactListening" + Math.random().toString(36).slice(2);
  function Qc(e) {
    if (!e[Sr]) {
      e[Sr] = !0, ef.forEach(function(n) {
        n !== "selectionchange" && (oy.has(n) || Xc(n, !1, e), Xc(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Sr] || (t[Sr] = !0, Xc("selectionchange", !1, t));
    }
  }
  function mm(e, t, n, a) {
    switch (ag(t)) {
      case 2:
        var l = n0;
        break;
      case 8:
        l = a0;
        break;
      default:
        l = fo;
    }
    n = l.bind(
      null,
      t,
      n,
      e
    ), l = void 0, !Wr || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), a ? l !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
      passive: l
    }) : e.addEventListener(t, n, !1);
  }
  function Kc(e, t, n, a, l) {
    var i = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (; ; ) {
        if (a === null) return;
        var c = a.tag;
        if (c === 3 || c === 4) {
          var f = a.stateNode.containerInfo;
          if (f === l) break;
          if (c === 4)
            for (c = a.return; c !== null; ) {
              var v = c.tag;
              if ((v === 3 || v === 4) && c.stateNode.containerInfo === l)
                return;
              c = c.return;
            }
          for (; f !== null; ) {
            if (c = Ua(f), c === null) return;
            if (v = c.tag, v === 5 || v === 6 || v === 26 || v === 27) {
              a = i = c;
              continue e;
            }
            f = f.parentNode;
          }
        }
        a = a.return;
      }
    mf(function() {
      var C = i, U = Fr(n), Q = [];
      e: {
        var _ = Gf.get(e);
        if (_ !== void 0) {
          var D = Eu, ue = e;
          switch (e) {
            case "keypress":
              if (yu(n) === 0) break e;
            case "keydown":
            case "keyup":
              D = kp;
              break;
            case "focusin":
              ue = "focus", D = as;
              break;
            case "focusout":
              ue = "blur", D = as;
              break;
            case "beforeblur":
            case "afterblur":
              D = as;
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
              D = vf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              D = qp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              D = Wp;
              break;
            case Lf:
            case If:
            case Bf:
              D = Ip;
              break;
            case Vf:
              D = tv;
              break;
            case "scroll":
            case "scrollend":
              D = zp;
              break;
            case "wheel":
              D = av;
              break;
            case "copy":
            case "cut":
            case "paste":
              D = Vp;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              D = bf;
              break;
            case "submit":
              D = Fp;
              break;
            case "toggle":
            case "beforetoggle":
              D = iv;
          }
          var ge = (t & 4) !== 0, je = !ge && (e === "scroll" || e === "scrollend"), w = ge ? _ !== null ? _ + "Capture" : null : _;
          ge = [];
          for (var T = C, R; T !== null; ) {
            var X = T;
            if (R = X.stateNode, X = X.tag, X !== 5 && X !== 26 && X !== 27 || R === null || w === null || (X = li(T, w), X != null && ge.push(
              Hi(T, X, R)
            )), je) break;
            T = T.return;
          }
          0 < ge.length && (_ = new D(
            _,
            ue,
            null,
            n,
            U
          ), Q.push({ event: _, listeners: ge }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (D = e === "mouseover" || e === "pointerover", _ = e === "mouseout" || e === "pointerout", D && n !== $r && (ue = n.relatedTarget || n.fromElement) && (Ua(ue) || ue[al]))
            break e;
          (_ || D) && (ue = U.window === U ? U : (D = U.ownerDocument) ? D.defaultView || D.parentWindow : window, _ ? (D = n.relatedTarget || n.toElement, _ = C, D = D ? Ua(D) : null, D !== null && (je = m(D), ge = D.tag, D !== je || ge !== 5 && ge !== 27 && ge !== 6) && (D = null)) : (_ = null, D = C), _ !== D && (ge = vf, X = "onMouseLeave", w = "onMouseEnter", T = "mouse", (e === "pointerout" || e === "pointerover") && (ge = bf, X = "onPointerLeave", w = "onPointerEnter", T = "pointer"), je = _ == null ? ue : ai(_), R = D == null ? ue : ai(D), ue = new ge(
            X,
            T + "leave",
            _,
            n,
            U
          ), ue.target = je, ue.relatedTarget = R, X = null, Ua(U) === C && (ge = new ge(
            w,
            T + "enter",
            D,
            n,
            U
          ), ge.target = R, ge.relatedTarget = je, X = ge), je = X, ge = _ && D ? de(
            _,
            D,
            fy
          ) : null, _ !== null && gm(
            Q,
            ue,
            _,
            ge,
            !1
          ), D !== null && je !== null && gm(
            Q,
            je,
            D,
            ge,
            !0
          )));
        }
        e: {
          if (_ = C ? ai(C) : window, D = _.nodeName && _.nodeName.toLowerCase(), D === "select" || D === "input" && _.type === "file")
            var he = Of;
          else if (_f(_))
            if (Cf)
              he = gv;
            else {
              he = hv;
              var He = dv;
            }
          else
            D = _.nodeName, !D || D.toLowerCase() !== "input" || _.type !== "checkbox" && _.type !== "radio" ? C && Jr(C.elementType) && (he = Of) : he = mv;
          if (he && (he = he(e, C))) {
            wf(
              Q,
              he,
              n,
              U
            );
            break e;
          }
          He && He(e, _, C);
        }
        switch (He = C ? ai(C) : window, e) {
          case "focusin":
            (_f(He) || He.contentEditable === "true") && (dl = He, os = C, di = null);
            break;
          case "focusout":
            di = os = dl = null;
            break;
          case "mousedown":
            fs = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            fs = !1, qf(Q, n, U);
            break;
          case "selectionchange":
            if (vv) break;
          case "keydown":
          case "keyup":
            qf(Q, n, U);
        }
        var Ae;
        if (is)
          e: {
            switch (e) {
              case "compositionstart":
                var _e = "onCompositionStart";
                break e;
              case "compositionend":
                _e = "onCompositionEnd";
                break e;
              case "compositionupdate":
                _e = "onCompositionUpdate";
                break e;
            }
            _e = void 0;
          }
        else
          fl ? Af(e, n) && (_e = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_e = "onCompositionStart");
        _e && (Ef && n.locale !== "ko" && (fl || _e !== "onCompositionStart" ? _e === "onCompositionEnd" && fl && (Ae = gf()) : (ea = U, es = "value" in ea ? ea.value : ea.textContent, fl = !0)), He = Tr(C, _e), 0 < He.length && (_e = new yf(
          _e,
          e,
          null,
          n,
          U
        ), Q.push({ event: _e, listeners: He }), Ae ? _e.data = Ae : (Ae = Nf(n), Ae !== null && (_e.data = Ae)))), (Ae = rv ? sv(e, n) : cv(e, n)) && (_e = Tr(C, "onBeforeInput"), 0 < _e.length && (He = new yf(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          U
        ), Q.push({
          event: He,
          listeners: _e
        }), He.data = Ae)), ry(
          Q,
          e,
          C,
          n,
          U
        );
      }
      hm(Q, t);
    });
  }
  function Hi(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Tr(e, t) {
    for (var n = t + "Capture", a = []; e !== null; ) {
      var l = e, i = l.stateNode;
      if (l = l.tag, l !== 5 && l !== 26 && l !== 27 || i === null || (l = li(e, n), l != null && a.unshift(
        Hi(e, l, i)
      ), l = li(e, t), l != null && a.push(
        Hi(e, l, i)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function fy(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function gm(e, t, n, a, l) {
    for (var i = t._reactName, c = []; n !== null && n !== a; ) {
      var f = n, v = f.alternate, C = f.stateNode;
      if (f = f.tag, v !== null && v === a) break;
      f !== 5 && f !== 26 && f !== 27 || C === null || (v = C, l ? (C = li(n, i), C != null && c.unshift(
        Hi(n, C, v)
      )) : l || (C = li(n, i), C != null && c.push(
        Hi(n, C, v)
      ))), n = n.return;
    }
    c.length !== 0 && e.push({ event: t, listeners: c });
  }
  var dy = /\r\n?/g, hy = /\u0000|\uFFFD/g;
  function pm(e) {
    return (typeof e == "string" ? e : "" + e).replace(dy, `
`).replace(hy, "");
  }
  function vm(e, t) {
    return t = pm(t), pm(e) === t;
  }
  function ke(e, t, n, a, l, i) {
    switch (n) {
      case "children":
        if (typeof a == "string")
          t === "body" || t === "textarea" && a === "" || sl(e, a);
        else if (typeof a == "number" || typeof a == "bigint")
          t !== "body" && sl(e, "" + a);
        else return;
        break;
      case "className":
        gu(e, "class", a);
        break;
      case "tabIndex":
        gu(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        gu(e, n, a);
        break;
      case "style":
        df(e, a, i);
        return;
      case "data":
        if (t !== "object") {
          gu(e, "data", a);
          break;
        }
      case "src":
      case "href":
        if (a === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (a == null || typeof a == "function" || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(n);
          break;
        }
        a = pu(a), e.setAttribute(n, a);
        break;
      case "action":
      case "formAction":
        if (typeof a == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof i == "function" && (n === "formAction" ? (t !== "input" && ke(e, t, "name", l.name, l, null), ke(
            e,
            t,
            "formEncType",
            l.formEncType,
            l,
            null
          ), ke(
            e,
            t,
            "formMethod",
            l.formMethod,
            l,
            null
          ), ke(
            e,
            t,
            "formTarget",
            l.formTarget,
            l,
            null
          )) : (ke(e, t, "encType", l.encType, l, null), ke(e, t, "method", l.method, l, null), ke(e, t, "target", l.target, l, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(n);
          break;
        }
        a = pu(a), e.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (e.onclick = Nn);
        return;
      case "onScroll":
        a != null && Me("scroll", e);
        return;
      case "onScrollEnd":
        a != null && Me("scrollend", e);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(s(61));
          if (n = a.__html, n != null) {
            if (l.children != null) throw Error(s(60));
            i?.__html !== n && (e.innerHTML = n);
          }
        }
        break;
      case "multiple":
        e.multiple = a && typeof a != "function" && typeof a != "symbol";
        break;
      case "muted":
        e.muted = a && typeof a != "function" && typeof a != "symbol";
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
        if (a == null || typeof a == "function" || typeof a == "boolean" || typeof a == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        n = pu(a), e.setAttributeNS(
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
        a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, a) : e.removeAttribute(n);
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
        a && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        a === !0 ? e.setAttribute(n, "") : a !== !1 && a != null && typeof a != "function" && typeof a != "symbol" ? e.setAttribute(n, a) : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        a != null && typeof a != "function" && typeof a != "symbol" && !isNaN(a) && 1 <= a ? e.setAttribute(n, a) : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        a == null || typeof a == "function" || typeof a == "symbol" || isNaN(a) ? e.removeAttribute(n) : e.setAttribute(n, a);
        break;
      case "popover":
        Me("beforetoggle", e), Me("toggle", e), mu(e, "popover", a);
        break;
      case "xlinkActuate":
        Ln(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Ln(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Ln(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Ln(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Ln(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Ln(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Ln(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Ln(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Ln(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        mu(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N")
          n = Dp.get(n) || n, mu(e, n, a);
        else return;
    }
    Ve = !0;
  }
  function Zc(e, t, n, a, l, i) {
    switch (n) {
      case "style":
        df(e, a, i);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(s(61));
          if (n = a.__html, n != null) {
            if (l.children != null) throw Error(s(60));
            i?.__html !== n && (e.innerHTML = n);
          }
        }
        break;
      case "children":
        if (typeof a == "string") sl(e, a);
        else if (typeof a == "number" || typeof a == "bigint")
          sl(e, "" + a);
        else return;
        break;
      case "onScroll":
        a != null && Me("scroll", e);
        return;
      case "onScrollEnd":
        a != null && Me("scrollend", e);
        return;
      case "onClick":
        a != null && (e.onclick = Nn);
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
        if (!tf.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (l = n.endsWith("Capture"), i = n.slice(2, l ? n.length - 7 : void 0), t = e[Ht] || null, t = t != null ? t[n] : null, typeof t == "function" && e.removeEventListener(i, t, l), typeof a == "function")) {
              typeof t != "function" && t !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(i, a, l);
              break e;
            }
            Ve = !0, n in e ? e[n] = a : a === !0 ? e.setAttribute(n, "") : mu(e, n, a);
          }
        return;
    }
    Ve = !0;
  }
  function Ot(e, t, n) {
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
        Me("error", e), Me("load", e);
        var a = !1, l = !1, i;
        for (i in n)
          if (n.hasOwnProperty(i)) {
            var c = n[i];
            if (c != null)
              switch (i) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  l = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(s(137, t));
                default:
                  ke(e, t, i, c, n, null);
              }
          }
        l && ke(e, t, "srcSet", n.srcSet, n, null), a && ke(e, t, "src", n.src, n, null);
        return;
      case "input":
        Me("invalid", e);
        var f = i = c = l = null, v = null, C = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var U = n[a];
            if (U != null)
              switch (a) {
                case "name":
                  l = U;
                  break;
                case "type":
                  c = U;
                  break;
                case "checked":
                  v = U;
                  break;
                case "defaultChecked":
                  C = U;
                  break;
                case "value":
                  i = U;
                  break;
                case "defaultValue":
                  f = U;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (U != null)
                    throw Error(s(137, t));
                  break;
                default:
                  ke(e, t, a, U, n, null);
              }
          }
        sf(
          e,
          i,
          f,
          v,
          C,
          c,
          l,
          !1
        );
        return;
      case "select":
        Me("invalid", e), a = c = i = null;
        for (l in n)
          if (n.hasOwnProperty(l) && (f = n[l], f != null))
            switch (l) {
              case "value":
                i = f;
                break;
              case "defaultValue":
                c = f;
                break;
              case "multiple":
                a = f;
              default:
                ke(e, t, l, f, n, null);
            }
        t = i, n = c, e.multiple = !!a, t != null ? rl(e, !!a, t, !1) : n != null && rl(e, !!a, n, !0);
        return;
      case "textarea":
        Me("invalid", e), i = l = a = null;
        for (c in n)
          if (n.hasOwnProperty(c) && (f = n[c], f != null))
            switch (c) {
              case "value":
                a = f;
                break;
              case "defaultValue":
                l = f;
                break;
              case "children":
                i = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(s(91));
                break;
              default:
                ke(e, t, c, f, n, null);
            }
        of(e, a, l, i);
        return;
      case "option":
        for (v in n)
          n.hasOwnProperty(v) && (a = n[v], a != null) && (v === "selected" ? e.selected = a && typeof a != "function" && typeof a != "symbol" : ke(e, t, v, a, n, null));
        return;
      case "dialog":
        Me("beforetoggle", e), Me("toggle", e), Me("cancel", e), Me("close", e);
        break;
      case "iframe":
      case "object":
        Me("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < qi.length; a++)
          Me(qi[a], e);
        break;
      case "image":
        Me("error", e), Me("load", e);
        break;
      case "details":
        Me("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Me("error", e), Me("load", e);
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
        for (C in n)
          if (n.hasOwnProperty(C) && (a = n[C], a != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, t));
              default:
                ke(e, t, C, a, n, null);
            }
        return;
      default:
        if (Jr(t)) {
          for (U in n)
            n.hasOwnProperty(U) && (a = n[U], a !== void 0 && Zc(
              e,
              t,
              U,
              a,
              n,
              void 0
            ));
          return;
        }
    }
    for (f in n)
      n.hasOwnProperty(f) && (a = n[f], a != null && ke(e, t, f, a, n, null));
  }
  var my = {};
  function gy(e, t, n, a) {
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
        var l = null, i = null, c = null, f = null, v = null, C = null, U = null;
        for (D in n) {
          var Q = n[D];
          if (n.hasOwnProperty(D) && Q != null)
            switch (D) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                v = Q;
              default:
                a.hasOwnProperty(D) || ke(e, t, D, null, a, Q);
            }
        }
        for (var _ in a) {
          var D = a[_];
          if (Q = n[_], a.hasOwnProperty(_) && (D != null || Q != null))
            switch (_) {
              case "type":
                D !== Q && (Ve = !0), i = D;
                break;
              case "name":
                D !== Q && (Ve = !0), l = D;
                break;
              case "checked":
                D !== Q && (Ve = !0), C = D;
                break;
              case "defaultChecked":
                D !== Q && (Ve = !0), U = D;
                break;
              case "value":
                D !== Q && (Ve = !0), c = D;
                break;
              case "defaultValue":
                D !== Q && (Ve = !0), f = D;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (D != null)
                  throw Error(s(137, t));
                break;
              default:
                D !== Q && ke(
                  e,
                  t,
                  _,
                  D,
                  a,
                  Q
                );
            }
        }
        Zr(
          e,
          c,
          f,
          v,
          C,
          U,
          i,
          l
        );
        return;
      case "select":
        D = c = f = _ = null;
        for (i in n)
          if (v = n[i], n.hasOwnProperty(i) && v != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                D = v;
              default:
                a.hasOwnProperty(i) || ke(
                  e,
                  t,
                  i,
                  null,
                  a,
                  v
                );
            }
        for (l in a)
          if (i = a[l], v = n[l], a.hasOwnProperty(l) && (i != null || v != null))
            switch (l) {
              case "value":
                i !== v && (Ve = !0), _ = i;
                break;
              case "defaultValue":
                i !== v && (Ve = !0), f = i;
                break;
              case "multiple":
                i !== v && (Ve = !0), c = i;
              default:
                i !== v && ke(
                  e,
                  t,
                  l,
                  i,
                  a,
                  v
                );
            }
        t = f, n = c, a = D, _ != null ? rl(e, !!n, _, !1) : !!a != !!n && (t != null ? rl(e, !!n, t, !0) : rl(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        D = _ = null;
        for (f in n)
          if (l = n[f], n.hasOwnProperty(f) && l != null && !a.hasOwnProperty(f))
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                ke(e, t, f, null, a, l);
            }
        for (c in a)
          if (l = a[c], i = n[c], a.hasOwnProperty(c) && (l != null || i != null))
            switch (c) {
              case "value":
                l !== i && (Ve = !0), _ = l;
                break;
              case "defaultValue":
                l !== i && (Ve = !0), D = l;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (l != null) throw Error(s(91));
                break;
              default:
                l !== i && ke(e, t, c, l, a, i);
            }
        cf(e, _, D);
        return;
      case "option":
        for (var ue in n)
          _ = n[ue], n.hasOwnProperty(ue) && _ != null && !a.hasOwnProperty(ue) && (ue === "selected" ? e.selected = !1 : ke(
            e,
            t,
            ue,
            null,
            a,
            _
          ));
        for (v in a)
          _ = a[v], D = n[v], a.hasOwnProperty(v) && _ !== D && (_ != null || D != null) && (v === "selected" ? (_ !== D && (Ve = !0), e.selected = _ && typeof _ != "function" && typeof _ != "symbol") : ke(
            e,
            t,
            v,
            _,
            a,
            D
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
        for (var ge in n)
          _ = n[ge], n.hasOwnProperty(ge) && _ != null && !a.hasOwnProperty(ge) && ke(e, t, ge, null, a, _);
        for (C in a)
          if (_ = a[C], D = n[C], a.hasOwnProperty(C) && _ !== D && (_ != null || D != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null)
                  throw Error(s(137, t));
                break;
              default:
                ke(
                  e,
                  t,
                  C,
                  _,
                  a,
                  D
                );
            }
        return;
      default:
        if (Jr(t)) {
          for (var je in n)
            _ = n[je], n.hasOwnProperty(je) && _ !== void 0 && !a.hasOwnProperty(je) && Zc(
              e,
              t,
              je,
              void 0,
              a,
              _
            );
          for (U in a)
            _ = a[U], D = n[U], !a.hasOwnProperty(U) || _ === D || _ === void 0 && D === void 0 || Zc(
              e,
              t,
              U,
              _,
              a,
              D
            );
          return;
        }
    }
    for (var w in n)
      _ = n[w], n.hasOwnProperty(w) && _ != null && !a.hasOwnProperty(w) && ke(e, t, w, null, a, _);
    for (Q in a)
      _ = a[Q], D = n[Q], !a.hasOwnProperty(Q) || _ === D || _ == null && D == null || ke(e, t, Q, _, a, D);
  }
  function ym(e) {
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
  function py() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var l = n[a], i = l.transferSize, c = l.initiatorType, f = l.duration;
        if (i && f && ym(c)) {
          for (c = 0, f = l.responseEnd, a += 1; a < n.length; a++) {
            var v = n[a], C = v.startTime;
            if (C > f) break;
            var U = v.transferSize, Q = v.initiatorType;
            U && ym(Q) && (v = v.responseEnd, c += U * (v < f ? 1 : (f - C) / (v - C)));
          }
          if (--a, t += 8 * (i + c) / (l.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var kc = null, Jc = null;
  function Li(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function bm(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Em(e, t) {
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
  function Sm(e, t, n, a) {
    return n = Li(
      n
    ).createElement(e), n[Tt] = a, n[Ht] = t, Ot(n, e, t), gt(n), n;
  }
  function $c(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Fc = null;
  function vy() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Fc ? !1 : (Fc = e, !0) : (Fc = null, !1);
  }
  var Pc = typeof setTimeout == "function" ? setTimeout : void 0, yy = typeof clearTimeout == "function" ? clearTimeout : void 0, Tm = typeof Promise == "function" ? Promise : void 0, Am = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Pc, by = typeof queueMicrotask == "function" ? queueMicrotask : typeof Tm < "u" ? function(e) {
    return Tm.resolve(null).then(e).catch(Ey);
  } : Pc;
  function Ey(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ea(e) {
    return e === "head";
  }
  function Nm(e, t) {
    var n = t, a = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8)
        if (n = l.data, n === "/$" || n === "/&") {
          if (a === 0) {
            e.removeChild(l), Ql(t);
            return;
          }
          a--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          a++;
        else if (n === "html")
          uo(
            e.ownerDocument.documentElement
          );
        else if (n === "head") {
          n = e.ownerDocument.head, uo(n);
          for (var i = n.firstChild; i; ) {
            var c = i.nextSibling, f = i.nodeName;
            i[ni] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && i.rel.toLowerCase() === "stylesheet" || n.removeChild(i), i = c;
          }
        } else
          n === "body" && uo(e.ownerDocument.body);
      n = l;
    } while (n);
    Ql(t);
  }
  function _m(e, t) {
    var n = e;
    e = 0;
    do {
      var a = n.nextSibling;
      if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), a && a.nodeType === 8)
        if (n = a.data, n === "/$") {
          if (e === 0) break;
          e--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
      n = a;
    } while (n);
  }
  function wm(e, t, n) {
    if (t = CSS.escape(t) !== t ? "r-" + btoa(t).replace(/=/g, "") : t, e.style.viewTransitionName = t, n != null && (e.style.viewTransitionClass = n), n = getComputedStyle(e), n.display === "inline") {
      if (t = e.getClientRects(), t.length === 1) var a = 1;
      else
        for (var l = a = 0; l < t.length; l++) {
          var i = t[l];
          0 < i.width && 0 < i.height && a++;
        }
      a === 1 && (e = e.style, e.display = t.length === 1 ? "inline-block" : "block", e.marginTop = "-" + n.paddingTop, e.marginBottom = "-" + n.paddingBottom);
    }
  }
  function Om(e, t) {
    e = e.style, t = t.style;
    var n = t != null ? t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null : null;
    e.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = t != null ? t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null : null, e.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), e.display === "inline-block" && (t == null ? e.display = e.margin = "" : (n = t.display, e.display = n == null || typeof n == "boolean" ? "" : n, n = t.margin, n != null ? e.margin = n : (n = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], e.marginTop = n == null || typeof n == "boolean" ? "" : n, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], e.marginBottom = t == null || typeof t == "boolean" ? "" : t)));
  }
  function Sy(e, t, n) {
    return n = n.ownerDocument.defaultView, {
      rect: e,
      abs: t.position === "absolute" || t.position === "fixed",
      clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
      view: 0 <= e.bottom && 0 <= e.right && e.top <= n.innerHeight && e.left <= n.innerWidth
    };
  }
  function Wc(e) {
    var t = e.getBoundingClientRect(), n = getComputedStyle(e);
    return Sy(t, n, e);
  }
  function Ty(e) {
    return e.documentElement.clientHeight;
  }
  function Ay(e) {
    this.addEventListener("load", e), this.addEventListener("error", e);
  }
  function Ny(e, t, n, a, l, i, c, f, v) {
    var C = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var U = C.startViewTransition({
        update: function() {
          var _ = C.defaultView, D = _.navigation && _.navigation.transition, ue = C.fonts.status;
          a();
          var ge = [];
          if (ue === "loaded" && (Ty(C), C.fonts.status === "loading" && ge.push(C.fonts.ready)), ue = ge.length, e !== null)
            for (var je = e.suspenseyImages, w = 0, T = 0; T < je.length; T++) {
              var R = je[T];
              if (!R.complete) {
                var X = R.getBoundingClientRect();
                if (0 < X.bottom && 0 < X.right && X.top < _.innerHeight && X.left < _.innerWidth) {
                  if (w += km(R), w > _r) {
                    ge.length = ue;
                    break;
                  }
                  R = new Promise(
                    Ay.bind(R)
                  ), ge.push(R);
                }
              }
            }
          if (0 < ge.length)
            return _ = Promise.race([
              Promise.all(ge),
              new Promise(function(he) {
                return setTimeout(he, 500);
              })
            ]).then(l, l), (D ? Promise.allSettled([D.finished, _]) : _).then(i, i);
          if (l(), D)
            return D.finished.then(
              i,
              i
            );
          i();
        },
        types: n
      });
      C.__reactViewTransition = U;
      var Q = [];
      return U.ready.then(
        function() {
          for (var _ = C.documentElement.getAnimations({
            subtree: !0
          }), D = 0; D < _.length; D++) {
            var ue = _[D], ge = ue.effect, je = ge.pseudoElement;
            if (je != null && je.startsWith("::view-transition")) {
              Q.push(ue), ue = ge.getKeyframes();
              for (var w = je = void 0, T = !0, R = 0; R < ue.length; R++) {
                var X = ue[R], he = X.width;
                if (je === void 0) je = he;
                else if (je !== he) {
                  T = !1;
                  break;
                }
                if (he = X.height, w === void 0) w = he;
                else if (w !== he) {
                  T = !1;
                  break;
                }
                delete X.width, delete X.height, X.transform === "none" && delete X.transform;
              }
              T && je !== void 0 && w !== void 0 && (ge.setKeyframes(ue), T = getComputedStyle(
                ge.target,
                ge.pseudoElement
              ), T.width !== je || T.height !== w) && (T = ue[0], T.width = je, T.height = w, T = ue[ue.length - 1], T.width = je, T.height = w, ge.setKeyframes(ue));
            }
          }
          c();
        },
        function(_) {
          C.__reactViewTransition === U && (C.__reactViewTransition = null);
          try {
            typeof _ == "object" && _ !== null && _.name === "InvalidStateError" && (_.message === "View transition was skipped because document visibility state is hidden." || _.message === "Skipping view transition because document visibility state has become hidden." || _.message === "Skipping view transition because viewport size changed." || _.message === "Transition was aborted because of invalid state") && (_ = null), _ !== null && v(_);
          } finally {
            a(), l(), c();
          }
        }
      ), U.finished.finally(function() {
        for (var _ = 0; _ < Q.length; _++)
          Q[_].cancel();
        C.__reactViewTransition === U && (C.__reactViewTransition = null), f();
      }), U;
    } catch {
      return a(), l(), c(), null;
    }
  }
  function el(e, t) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + e + "(" + t + ")";
  }
  el.prototype.animate = function(e, t) {
    return t = typeof t == "number" ? { duration: t } : re({}, t), t.pseudoElement = this._selector, this._scope.animate(e, t);
  }, el.prototype.getAnimations = function() {
    for (var e = this._scope, t = this._selector, n = e.getAnimations({ subtree: !0 }), a = [], l = 0; l < n.length; l++) {
      var i = n[l].effect;
      i !== null && i.target === e && i.pseudoElement === t && a.push(n[l]);
    }
    return a;
  }, el.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function Cm(e) {
    return {
      name: e,
      group: new el("group", e),
      imagePair: new el("image-pair", e),
      old: new el("old", e),
      new: new el("new", e)
    };
  }
  function tn(e) {
    this._fragmentFiber = e, this._observers = this._eventListeners = null;
  }
  tn.prototype.addEventListener = function(e, t, n) {
    var a = null, l = null;
    if (!(n != null && typeof n != "boolean" && (a = n.signal || null, a !== null && a.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var i = this._eventListeners;
      if (Rm(i, e, t, n) === -1) {
        var c = this, f = t;
        n != null && typeof n != "boolean" && n.once === !0 && (f = function(v) {
          c.removeEventListener(
            e,
            t,
            n
          ), typeof t == "function" ? t.call(this, v) : t.handleEvent(v);
        }), a !== null && (l = c.removeEventListener.bind(
          c,
          e,
          t,
          n
        ), a.addEventListener("abort", l, { once: !0 }), l = a.removeEventListener.bind(a, "abort", l)), a = Il(n), i.push({
          type: e,
          listener: t,
          optionsOrUseCapture: n,
          attachedListener: f,
          cleanup: l
        }), g(
          this._fragmentFiber.child,
          !1,
          _y,
          e,
          f,
          a
        );
      }
      this._eventListeners = i;
    }
  };
  function _y(e, t, n, a) {
    return B(e).addEventListener(
      t,
      n,
      a
    ), !1;
  }
  tn.prototype.removeEventListener = function(e, t, n) {
    var a = this._eventListeners;
    if (a !== null && (t = Rm(
      a,
      e,
      t,
      n
    ), t !== -1)) {
      var l = a[t];
      n = l.attachedListener;
      var i = l.cleanup;
      l = Il(l.optionsOrUseCapture), g(
        this._fragmentFiber.child,
        !1,
        wy,
        e,
        n,
        l
      ), a.splice(t, 1), i !== null && i();
    }
  };
  function wy(e, t, n, a) {
    return B(e).removeEventListener(
      t,
      n,
      a
    ), !1;
  }
  function Il(e) {
    return e != null && typeof e != "boolean" && (e.once === !0 || e.signal instanceof AbortSignal) ? { capture: e.capture, passive: e.passive } : e;
  }
  function xm(e) {
    return e == null ? "c=0" : typeof e == "boolean" ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0");
  }
  function Rm(e, t, n, a) {
    if (e.length === 0) return -1;
    a = xm(a);
    for (var l = 0; l < e.length; l++) {
      var i = e[l];
      if (i.type === t && i.listener === n && xm(i.optionsOrUseCapture) === a)
        return l;
    }
    return -1;
  }
  tn.prototype.dispatchEvent = function(e) {
    var t = H(
      this._fragmentFiber
    );
    if (t === null) return !0;
    t = B(t);
    var n = this._eventListeners;
    if (n !== null && 0 < n.length || !e.bubbles) {
      var a = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
      if (n)
        for (var l = 0; l < n.length; l++) {
          var i = n[l];
          a.addEventListener(
            i.type,
            i.attachedListener,
            Il(i.optionsOrUseCapture)
          );
        }
      if (t.appendChild(a), e = a.dispatchEvent(e), n)
        for (l = 0; l < n.length; l++)
          i = n[l], a.removeEventListener(
            i.type,
            i.attachedListener,
            Il(i.optionsOrUseCapture)
          );
      return t.removeChild(a), e;
    }
    return t.dispatchEvent(e);
  }, tn.prototype.focus = function(e) {
    g(
      this._fragmentFiber.child,
      !0,
      jm,
      e,
      void 0,
      void 0
    );
  };
  function jm(e, t) {
    return e.tag === 6 ? !1 : (e = B(e), Ly(e, t));
  }
  tn.prototype.focusLast = function(e) {
    var t = [];
    g(
      this._fragmentFiber.child,
      !0,
      eo,
      t,
      void 0,
      void 0
    );
    for (var n = t.length - 1; 0 <= n && !jm(t[n], e); n--) ;
  };
  function eo(e, t) {
    return t.push(e), !1;
  }
  tn.prototype.blur = function() {
    var e = H(
      this._fragmentFiber
    );
    e !== null && (e = B(e), e = Li(e).activeElement, e !== null && g(
      this._fragmentFiber.child,
      !1,
      Oy,
      e,
      void 0,
      void 0
    ));
  };
  function Oy(e, t) {
    return e.tag === 6 ? !1 : (e = B(e), e === t || e.contains(t) ? (t.blur(), !0) : !1);
  }
  tn.prototype.observeUsing = function(e) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), g(
      this._fragmentFiber.child,
      !1,
      Cy,
      e,
      void 0,
      void 0
    );
  };
  function Cy(e, t) {
    return e.tag === 6 || (e = B(e), t.observe(e)), !1;
  }
  tn.prototype.unobserveUsing = function(e) {
    var t = this._observers;
    if (t !== null && t.has(e)) {
      t.delete(e), g(
        this._fragmentFiber.child,
        !1,
        xy,
        e,
        void 0,
        void 0
      );
      for (var n = t = 0; n < Tn.length; n++) {
        var a = Tn[n];
        a.fragmentInstance === this && a.observer === e ? e.unobserve(a.instance) : Tn[t++] = a;
      }
      Tn.length = t;
    }
  };
  function xy(e, t) {
    return e.tag === 6 || (e = B(e), t.unobserve(e)), !1;
  }
  var Tn = [], to = !1;
  function Ry(e, t, n) {
    Tn.push({
      fragmentInstance: e,
      observer: t,
      instance: n
    }), to || (to = !0, Iy(function() {
      to = !1;
      var a = Tn;
      Tn = [];
      for (var l = 0; l < a.length; l++) {
        var i = a[l];
        i.observer.unobserve(i.instance);
      }
    }));
  }
  tn.prototype.getClientRects = function() {
    var e = [];
    return g(
      this._fragmentFiber.child,
      !1,
      jy,
      e,
      void 0,
      void 0
    ), e;
  };
  function jy(e, t) {
    if (e.tag === 6) {
      e = e.stateNode;
      var n = e.ownerDocument.createRange();
      n.selectNodeContents(e), t.push.apply(t, n.getClientRects());
    } else
      e = B(e), t.push.apply(t, e.getClientRects());
    return !1;
  }
  tn.prototype.getRootNode = function(e) {
    var t = H(
      this._fragmentFiber
    );
    return t === null ? this : B(t).getRootNode(e);
  }, tn.prototype.compareDocumentPosition = function(e) {
    var t = H(
      this._fragmentFiber
    );
    if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var n = [];
    g(
      this._fragmentFiber.child,
      !1,
      eo,
      n,
      void 0,
      void 0
    );
    var a = B(t);
    if (n.length === 0) {
      if (n = a, A(this._fragmentFiber)) {
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
      var l = a = n.compareDocumentPosition(e);
      return n === e ? l = Node.DOCUMENT_POSITION_CONTAINS : a & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = x(t)[1], n === null ? l = Node.DOCUMENT_POSITION_PRECEDING : (e = B(n).compareDocumentPosition(
        e
      ), l = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), l |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    t = B(n[0]), l = B(n[n.length - 1]);
    var i = A(this._fragmentFiber) ? t.parentElement : a;
    if (i == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    a = i.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, i = i.compareDocumentPosition(l) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var c = t.compareDocumentPosition(e), f = l.compareDocumentPosition(e), v = c & Node.DOCUMENT_POSITION_CONTAINED_BY || f & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return f = a && i && c & Node.DOCUMENT_POSITION_FOLLOWING && f & Node.DOCUMENT_POSITION_PRECEDING, t = a && t === e || i && l === e || v || f ? Node.DOCUMENT_POSITION_CONTAINED_BY : !a && t === e || !i && l === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : c, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Dy(
      t,
      this._fragmentFiber,
      n[0],
      n[n.length - 1],
      e
    ) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function Dy(e, t, n, a, l) {
    var i = Ua(l);
    if (e & Node.DOCUMENT_POSITION_CONTAINED_BY) {
      if (n = !!i)
        e: {
          for (; i !== null; ) {
            if (i.tag === 7 && (i === t || i.alternate === t)) {
              n = !0;
              break e;
            }
            i = i.return;
          }
          n = !1;
        }
      return n;
    }
    if (e & Node.DOCUMENT_POSITION_CONTAINS) {
      if (i === null)
        return i = l.ownerDocument, l === i || l === i.documentElement || l === i.body;
      e: {
        for (i = t, t = H(t); i !== null; ) {
          if (!(i.tag !== 5 && i.tag !== 3 && i.tag !== 27 || i !== t && i.alternate !== t)) {
            i = !0;
            break e;
          }
          i = i.return;
        }
        i = !1;
      }
      return i;
    }
    return e & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!i) && !(t = i === n) && (t = de(
      n,
      i,
      Ee
    ), t === null ? t = !1 : (g(
      t,
      !0,
      me,
      i,
      n
    ), i = le, le = null, t = i !== null)), t) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!i) && !(t = i === a) && (t = de(
      a,
      i,
      Ee
    ), t === null ? t = !1 : (g(
      t,
      !0,
      J,
      i,
      a
    ), i = le, be = le = null, t = i !== null)), t) : !1;
  }
  function Dm(e, t) {
    var n = e.ownerDocument.createRange();
    n.selectNodeContents(e), e = n.getBoundingClientRect(), window.scrollTo(
      window.scrollX + e.left,
      t ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight
    );
  }
  tn.prototype.scrollIntoView = function(e) {
    if (typeof e == "object") throw Error(s(566));
    var t = [];
    g(
      this._fragmentFiber.child,
      !1,
      eo,
      t,
      void 0,
      void 0
    );
    var n = e !== !1;
    if (t.length === 0) {
      var a = x(
        this._fragmentFiber
      );
      if (a = n ? a[1] || a[0] || H(this._fragmentFiber) : a[0] || a[1], a === null) return;
      if (a.tag === 6) {
        e = B(a), Dm(e, n);
        return;
      }
      if (a = B(a), a.nodeType !== 9) {
        if (a.nodeType === 11) {
          n = "host" in a ? a.host : null, n !== null && n.scrollIntoView(e);
          return;
        }
        a.scrollIntoView(e);
      }
    }
    for (a = n ? t.length - 1 : 0; a !== (n ? -1 : t.length); ) {
      var l = t[a];
      l.tag === 6 ? (l = B(l), Dm(l, n)) : B(l).scrollIntoView(e), a += n ? -1 : 1;
    }
  };
  function Uy(e, t) {
    return e = B(e), Um(e, t), !1;
  }
  function Um(e, t) {
    e.reactFragments == null && (e.reactFragments = /* @__PURE__ */ new Set()), e.reactFragments.add(t);
  }
  function zm(e, t) {
    var n = t._eventListeners;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var l = n[a];
        e.addEventListener(
          l.type,
          l.attachedListener,
          Il(l.optionsOrUseCapture)
        );
      }
    e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(i) {
      for (var c = 0, f = 0; f < Tn.length; f++) {
        var v = Tn[f];
        (v.fragmentInstance !== t || v.observer !== i || v.instance !== e) && (Tn[c++] = v);
      }
      Tn.length = c, i.observe(e);
    }), Um(e, t));
  }
  function zy(e, t) {
    var n = t._eventListeners;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var l = n[a];
        e.removeEventListener(
          l.type,
          l.attachedListener,
          Il(l.optionsOrUseCapture)
        );
      }
    e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(i) {
      typeof i.rootMargin == "string" ? Ry(
        t,
        i,
        e
      ) : i.unobserve(e);
    }), e.reactFragments != null && e.reactFragments.delete(t));
  }
  function no(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          no(n), hu(n);
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
  function My(e, t, n, a) {
    for (; e.nodeType === 1; ) {
      var l = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (a) {
        if (!e[ni])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (i = e.getAttribute("rel"), i === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (i !== l.rel || e.getAttribute("href") !== (l.href == null || l.href === "" ? null : l.href) || e.getAttribute("crossorigin") !== (l.crossOrigin == null ? null : l.crossOrigin) || e.getAttribute("title") !== (l.title == null ? null : l.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (i = e.getAttribute("src"), (i !== (l.src == null ? null : l.src) || e.getAttribute("type") !== (l.type == null ? null : l.type) || e.getAttribute("crossorigin") !== (l.crossOrigin == null ? null : l.crossOrigin)) && i && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var i = l.name == null ? null : "" + l.name;
        if (l.type === "hidden" && e.getAttribute("name") === i)
          return e;
      } else return e;
      if (e = dn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function qy(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = dn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Mm(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = dn(e.nextSibling), e === null)) return null;
    return e;
  }
  function ao(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function lo(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Hy(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading")
      t();
    else {
      var a = function() {
        t(), n.removeEventListener("DOMContentLoaded", a);
      };
      n.addEventListener("DOMContentLoaded", a), e._reactRetry = a;
    }
  }
  function dn(e) {
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
  var io = null;
  function qm(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0)
            return dn(e.nextSibling);
          t--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function Hm(e) {
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
  function Ly(e, t) {
    function n() {
      a = !0;
    }
    if (e.ownerDocument.activeElement === e) return !0;
    var a = !1;
    try {
      e.ownerDocument.addEventListener("focus", n, !0), (e.focus || HTMLElement.prototype.focus).call(e, t);
    } finally {
      e.ownerDocument.removeEventListener("focus", n, !0);
    }
    return a;
  }
  function Iy(e) {
    Am(function() {
      Am(function(t) {
        return e(t);
      });
    });
  }
  function Lm(e, t, n) {
    switch (t = Li(n), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(s(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(s(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(s(454));
        return e;
      default:
        throw Error(s(451));
    }
  }
  function Im(e, t, n) {
    for (var a in n) {
      var l = n[a];
      n.hasOwnProperty(a) && l != null && ke(e, t, a, null, my, l);
    }
    n.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === Nn && (e.onclick = null), hu(e);
  }
  function uo(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    hu(e);
  }
  var hn = /* @__PURE__ */ new Map(), Bm = /* @__PURE__ */ new Set();
  function Ii(e) {
    if (typeof e.getRootNode == "function") {
      var t = e.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) return t;
    }
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Fn = ce.d;
  ce.d = {
    f: By,
    r: Vy,
    D: Gy,
    C: Yy,
    L: Xy,
    m: Qy,
    X: Zy,
    S: Ky,
    M: ky
  };
  function By() {
    var e = Fn.f(), t = pr();
    return e || t;
  }
  function Vy(e) {
    var t = ll(e);
    t !== null && t.tag === 5 && t.type === "form" ? Gd(t) : Fn.r(e);
  }
  var Bl = typeof document > "u" ? null : document;
  function Vm(e, t, n) {
    var a = Bl;
    if (a && typeof t == "string" && t) {
      var l = ln(t);
      l = 'link[rel="' + e + '"][href="' + l + '"]', typeof n == "string" && (l += '[crossorigin="' + n + '"]'), Bm.has(l) || (Bm.add(l), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(l) === null && (t = a.createElement("link"), Ot(t, "link", e), gt(t), a.head.appendChild(t)));
    }
  }
  function Gy(e) {
    Fn.D(e), Vm("dns-prefetch", e, null);
  }
  function Yy(e, t) {
    Fn.C(e, t), Vm("preconnect", e, t);
  }
  function Xy(e, t, n) {
    Fn.L(e, t, n);
    var a = Bl;
    if (a && e && t) {
      var l = 'link[rel="preload"][as="' + ln(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (l += '[imagesrcset="' + ln(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (l += '[imagesizes="' + ln(
        n.imageSizes
      ) + '"]')) : l += '[href="' + ln(e) + '"]';
      var i = l;
      switch (t) {
        case "style":
          i = Vl(e);
          break;
        case "script":
          i = Gl(e);
      }
      if (!(hn.has(i) || (e = re(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), hn.set(i, e), a.querySelector(l) !== null || t === "style" && a.querySelector(Bi(i)) || t === "script" && a.querySelector(Vi(i))))) {
        var c = a.createElement("link");
        Ot(c, "link", e), t === "style" && (c[du] = !0, c.onload = c.onerror = function() {
          Wo(c);
        }), gt(c), a.head.appendChild(c);
      }
    }
  }
  function Qy(e, t) {
    Fn.m(e, t);
    var n = Bl;
    if (n && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", l = 'link[rel="modulepreload"][as="' + ln(a) + '"][href="' + ln(e) + '"]', i = l;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = Gl(e);
      }
      if (!hn.has(i) && (e = re({ rel: "modulepreload", href: e }, t), hn.set(i, e), n.querySelector(l) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Vi(i)))
              return;
        }
        a = n.createElement("link"), Ot(a, "link", e), gt(a), n.head.appendChild(a);
      }
    }
  }
  function Ky(e, t, n) {
    Fn.S(e, t, n);
    var a = Bl;
    if (a && e) {
      var l = il(a).hoistableStyles, i = Vl(e);
      t = t || "default";
      var c = l.get(i);
      if (!c) {
        var f = { loading: 0, preload: null };
        if (c = a.querySelector(
          Bi(i)
        ))
          f.loading = 5;
        else {
          e = re(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = hn.get(i)) && ro(e, n);
          var v = c = a.createElement("link");
          gt(v), Ot(v, "link", e), v._p = new Promise(function(C, U) {
            v.onload = C, v.onerror = U;
          }), v.addEventListener("load", function() {
            f.loading |= 1;
          }), v.addEventListener("error", function() {
            f.loading |= 2;
          }), f.loading |= 4, Ar(c, t, a);
        }
        c = {
          type: "stylesheet",
          instance: c,
          count: 1,
          state: f
        }, l.set(i, c);
      }
    }
  }
  function Zy(e, t) {
    Fn.X(e, t);
    var n = Bl;
    if (n && e) {
      var a = il(n).hoistableScripts, l = Gl(e), i = a.get(l);
      i || (i = n.querySelector(Vi(l)), i || (e = re({ src: e, async: !0 }, t), (t = hn.get(l)) && so(e, t), i = n.createElement("script"), gt(i), Ot(i, "link", e), n.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(l, i));
    }
  }
  function ky(e, t) {
    Fn.M(e, t);
    var n = Bl;
    if (n && e) {
      var a = il(n).hoistableScripts, l = Gl(e), i = a.get(l);
      i || (i = n.querySelector(Vi(l)), i || (e = re({ src: e, async: !0, type: "module" }, t), (t = hn.get(l)) && so(e, t), i = n.createElement("script"), gt(i), Ot(i, "link", e), n.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(l, i));
    }
  }
  function Gm(e, t, n, a) {
    var l = (l = k.current) ? Ii(l) : null;
    if (!l) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (n = Vl(n.href), t = il(
          l
        ).hoistableStyles, a = t.get(n), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, t.set(n, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = Vl(n.href);
          var i = il(
            l
          ).hoistableStyles, c = i.get(e);
          if (c || (l = l.ownerDocument || l, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(e, c), (i = l.querySelector(
            Bi(e)
          )) ? i._p || (c.instance = i, c.state.loading = 5) : (i = hn.get(e), i || (i = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, hn.set(e, i)), Jy(
            l,
            e,
            i,
            c.state
          ))), t && a === null)
            throw Error(s(528, ""));
          return c;
        }
        if (t && a !== null)
          throw Error(s(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (n = Gl(n), t = il(
          l
        ).hoistableScripts, a = t.get(n), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, t.set(n, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(s(444, e));
    }
  }
  function Vl(e) {
    return 'href="' + ln(e) + '"';
  }
  function Bi(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Ym(e) {
    return re({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Jy(e, t, n, a) {
    if (t = e.querySelector(
      'link[rel="preload"][as="style"][' + t + "]"
    )) {
      if (t[du] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      t = e.createElement("link"), t[du] = !0, t.onload = t.onerror = Wo.bind(null, t), Ot(t, "link", n), gt(t), e.head.appendChild(t);
    a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    });
  }
  function Gl(e) {
    return '[src="' + ln(e) + '"]';
  }
  function Vi(e) {
    return "script[async]" + e;
  }
  function Xm(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + ln(n.href) + '"]'
          );
          if (a)
            return t.instance = a, gt(a), a;
          var l = re({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), gt(a), Ot(a, "style", l), Ar(a, n.precedence, e), t.instance = a;
        case "stylesheet":
          l = Vl(n.href);
          var i = e.querySelector(
            Bi(l)
          );
          if (i)
            return t.state.loading |= 4, t.instance = i, gt(i), i;
          a = Ym(n), (l = hn.get(l)) && ro(a, l), i = (e.ownerDocument || e).createElement("link"), gt(i);
          var c = i;
          return c._p = new Promise(function(f, v) {
            c.onload = f, c.onerror = v;
          }), Ot(i, "link", a), t.state.loading |= 4, Ar(i, n.precedence, e), t.instance = i;
        case "script":
          return i = Gl(n.src), (l = e.querySelector(
            Vi(i)
          )) ? (t.instance = l, gt(l), l) : (a = n, (l = hn.get(i)) && (a = re({}, n), so(a, l)), e = e.ownerDocument || e, l = e.createElement("script"), gt(l), Ot(l, "link", a), e.head.appendChild(l), t.instance = l);
        case "void":
          return null;
        default:
          throw Error(s(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Ar(a, n.precedence, e));
    return t.instance;
  }
  function Ar(e, t, n) {
    for (var a = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), l = a.length ? a[a.length - 1] : null, i = l, c = 0; c < a.length; c++) {
      var f = a[c];
      if (f.dataset.precedence === t) i = f;
      else if (i !== l) break;
    }
    i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function ro(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function so(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Nr = null;
  function Qm(e, t, n) {
    if (Nr === null) {
      var a = /* @__PURE__ */ new Map(), l = Nr = /* @__PURE__ */ new Map();
      l.set(n, a);
    } else
      l = Nr, a = l.get(n), a || (a = /* @__PURE__ */ new Map(), l.set(n, a));
    if (a.has(e)) return a;
    for (a.set(e, null), n = n.getElementsByTagName(e), l = 0; l < n.length; l++) {
      var i = n[l];
      if (!(i[ni] || i[Tt] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = i.getAttribute(t) || "";
        c = e + c;
        var f = a.get(c);
        f ? f.push(i) : a.set(c, [i]);
      }
    }
    return a;
  }
  function co(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function $y(e, t, n) {
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
  function Km(e, t) {
    return e === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
  }
  function Zm(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function km(e) {
    return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function Jm(e, t) {
    typeof t.decode == "function" && (e.imgCount++, t.complete || (e.imgBytes += km(t), e.suspenseyImages.push(t)), e = Wy.bind(e), t.decode().then(e, e));
  }
  function Fy(e, t, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var l = Vl(a.href), i = t.querySelector(
          Bi(l)
        );
        if (i) {
          t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Gi.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = i, gt(i);
          return;
        }
        i = t.ownerDocument || t, a = Ym(a), (l = hn.get(l)) && ro(a, l), i = i.createElement("link"), gt(i);
        var c = i;
        c._p = new Promise(function(f, v) {
          c.onload = f, c.onerror = v;
        }), Ot(i, "link", a), n.instance = i;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Gi.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var _r = 0;
  function Py(e, t) {
    return e.stylesheets && e.count === 0 && Or(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && Or(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4 + t);
      0 < e.imgBytes && _r === 0 && (_r = 62500 * py());
      var l = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Or(e, e.stylesheets), e.unsuspend)) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        },
        (e.imgBytes > _r ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(a), clearTimeout(l);
      };
    } : null;
  }
  function $m(e) {
    if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
      if (e.stylesheets) Or(e, e.stylesheets);
      else if (e.unsuspend) {
        var t = e.unsuspend;
        e.unsuspend = null, t();
      }
    }
  }
  function Gi() {
    this.count--, $m(this);
  }
  function Wy() {
    this.imgCount--, $m(this);
  }
  var wr = null;
  function Or(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, wr = /* @__PURE__ */ new Map(), t.forEach(e0, e), wr = null, Gi.call(e));
  }
  function e0(e, t) {
    if (!(t.state.loading & 4)) {
      var n = wr.get(e);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), wr.set(e, n);
        for (var l = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < l.length; i++) {
          var c = l[i];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (n.set(c.dataset.precedence, c), a = c);
        }
        a && n.set(null, a);
      }
      l = t.instance, c = l.getAttribute("data-precedence"), i = n.get(c) || a, i === a && n.set(null, l), n.set(c, l), this.count++, a = Gi.bind(this), l.addEventListener("load", a), l.addEventListener("error", a), i ? i.parentNode.insertBefore(l, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(l, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Yl = {
    $$typeof: q,
    Provider: null,
    Consumer: null,
    _currentValue: We,
    _currentValue2: We,
    _threadCount: 0
  };
  function t0(e, t, n, a, l, i, c, f, v) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Yr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Yr(0), this.hiddenUpdates = Yr(null), this.identifierPrefix = a, this.onUncaughtError = l, this.onCaughtError = i, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = v, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Fm(e, t, n, a, l, i, c, f, v, C, U, Q) {
    return e = new t0(
      e,
      t,
      n,
      c,
      v,
      C,
      U,
      Q,
      f
    ), t = 1, i === !0 && (t |= 24), i = Lt(3, null, null, t), e.current = i, i.stateNode = e, t = Ns(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: t
    }, Cs(i), e;
  }
  function Pm(e) {
    return e ? (e = gl, e) : gl;
  }
  function Wm(e, t, n, a, l, i) {
    l = Pm(l), a.context === null ? a.context = l : a.pendingContext = l, a = sa(t), a.payload = { element: n }, i = i === void 0 ? null : i, i !== null && (a.callback = i), n = ca(e, a, t), n !== null && (Gt(n, e, t), bi(n, e, t));
  }
  function eg(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function oo(e, t) {
    eg(e, t), (e = e.alternate) && eg(e, t);
  }
  function tg(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ha(e, 67108864);
      t !== null && Gt(t, e, 67108864), oo(e, 67108864);
    }
  }
  function ng(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = en();
      t = Xr(t);
      var n = Ha(e, t);
      n !== null && Gt(n, e, t), oo(e, t);
    }
  }
  var Xl = !0;
  function n0(e, t, n, a) {
    var l = ee.T;
    ee.T = null;
    var i = ce.p;
    try {
      ce.p = 2, fo(e, t, n, a);
    } finally {
      ce.p = i, ee.T = l;
    }
  }
  function a0(e, t, n, a) {
    var l = ee.T;
    ee.T = null;
    var i = ce.p;
    try {
      ce.p = 8, fo(e, t, n, a);
    } finally {
      ce.p = i, ee.T = l;
    }
  }
  function fo(e, t, n, a) {
    if (Xl) {
      var l = ho(a);
      if (l === null)
        Kc(
          e,
          t,
          a,
          Cr,
          n
        ), lg(e, a);
      else if (i0(
        l,
        e,
        t,
        n,
        a
      ))
        a.stopPropagation();
      else if (lg(e, a), t & 4 && -1 < l0.indexOf(e)) {
        for (; l !== null; ) {
          var i = ll(l);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var c = Da(i.pendingLanes);
                  if (c !== 0) {
                    var f = i;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; c; ) {
                      var v = 1 << 31 - Zt(c);
                      f.entanglements[1] |= v, c &= ~v;
                    }
                    zn(i), (Ge & 6) === 0 && (hr = Qt() + 500, Mi(0));
                  }
                }
                break;
              case 31:
              case 13:
                f = Ha(i, 2), f !== null && Gt(f, i, 2), pr(), oo(i, 2);
            }
          if (i = ho(a), i === null && Kc(
            e,
            t,
            a,
            Cr,
            n
          ), i === l) break;
          l = i;
        }
        l !== null && a.stopPropagation();
      } else
        Kc(
          e,
          t,
          a,
          null,
          n
        );
    }
  }
  function ho(e) {
    return e = Fr(e), mo(e);
  }
  var Cr = null;
  function mo(e) {
    if (Cr = null, e = Ua(e), e !== null) {
      var t = m(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = p(t), e !== null) return e;
          e = null;
        } else if (n === 31) {
          if (e = y(t), e !== null) return e;
          e = null;
        } else if (n === 3) {
          if (t.stateNode.current.memoizedState.isDehydrated)
            return t.tag === 3 ? t.stateNode.containerInfo : null;
          e = null;
        } else t !== e && (e = null);
      }
    }
    return Cr = e, null;
  }
  function ag(e) {
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
        switch (pp()) {
          case Vo:
            return 2;
          case Go:
            return 8;
          case ru:
          case vp:
            return 32;
          case Yo:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var go = !1, Sa = null, Ta = null, Aa = null, Yi = /* @__PURE__ */ new Map(), Xi = /* @__PURE__ */ new Map(), Na = [], l0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function lg(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Sa = null;
        break;
      case "dragenter":
      case "dragleave":
        Ta = null;
        break;
      case "mouseover":
      case "mouseout":
        Aa = null;
        break;
      case "pointerover":
      case "pointerout":
        Yi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Xi.delete(t.pointerId);
    }
  }
  function Qi(e, t, n, a, l, i) {
    return e === null || e.nativeEvent !== i ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: a,
      nativeEvent: i,
      targetContainers: [l]
    }, t !== null && (t = ll(t), t !== null && tg(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function i0(e, t, n, a, l) {
    switch (t) {
      case "focusin":
        return Sa = Qi(
          Sa,
          e,
          t,
          n,
          a,
          l
        ), !0;
      case "dragenter":
        return Ta = Qi(
          Ta,
          e,
          t,
          n,
          a,
          l
        ), !0;
      case "mouseover":
        return Aa = Qi(
          Aa,
          e,
          t,
          n,
          a,
          l
        ), !0;
      case "pointerover":
        var i = l.pointerId;
        return Yi.set(
          i,
          Qi(
            Yi.get(i) || null,
            e,
            t,
            n,
            a,
            l
          )
        ), !0;
      case "gotpointercapture":
        return i = l.pointerId, Xi.set(
          i,
          Qi(
            Xi.get(i) || null,
            e,
            t,
            n,
            a,
            l
          )
        ), !0;
    }
    return !1;
  }
  function ig(e) {
    var t = Ua(e.target);
    if (t !== null) {
      var n = m(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = p(n), t !== null) {
            e.blockedOn = t, $o(e.priority, function() {
              ng(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = y(n), t !== null) {
            e.blockedOn = t, $o(e.priority, function() {
              ng(n);
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
  function xr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = ho(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        $r = a, n.target.dispatchEvent(a), $r = null;
      } else
        return t = ll(n), t !== null && tg(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function ug(e, t, n) {
    xr(e) && n.delete(t);
  }
  function u0() {
    go = !1, Sa !== null && xr(Sa) && (Sa = null), Ta !== null && xr(Ta) && (Ta = null), Aa !== null && xr(Aa) && (Aa = null), Yi.forEach(ug), Xi.forEach(ug);
  }
  function Rr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, go || (go = !0, u.unstable_scheduleCallback(
      u.unstable_NormalPriority,
      u0
    )));
  }
  var jr = null;
  function rg(e) {
    jr !== e && (jr = e, u.unstable_scheduleCallback(
      u.unstable_NormalPriority,
      function() {
        jr === e && (jr = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], a = e[t + 1], l = e[t + 2];
          if (typeof a != "function") {
            if (mo(a || n) === null)
              continue;
            break;
          }
          var i = ll(n);
          i !== null && (e.splice(t, 3), t -= 3, Js(
            i,
            {
              pending: !0,
              data: l,
              method: n.method,
              action: a
            },
            a,
            l
          ));
        }
      }
    ));
  }
  function Ql(e) {
    function t(v) {
      return Rr(v, e);
    }
    Sa !== null && Rr(Sa, e), Ta !== null && Rr(Ta, e), Aa !== null && Rr(Aa, e), Yi.forEach(t), Xi.forEach(t);
    for (var n = 0; n < Na.length; n++) {
      var a = Na[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Na.length && (n = Na[0], n.blockedOn === null); )
      ig(n), n.blockedOn === null && Na.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var l = n[a], i = n[a + 1], c = l[Ht] || null;
        if (typeof i == "function")
          c || rg(n);
        else if (c) {
          var f = null;
          if (i && i.hasAttribute("formAction")) {
            if (l = i, c = i[Ht] || null)
              f = c.formAction;
            else if (mo(l) !== null) continue;
          } else f = c.action;
          typeof f == "function" ? n[a + 1] = f : (n.splice(a, 3), a -= 3), rg(n);
        }
      }
  }
  function sg() {
    function e(i) {
      i.canIntercept && i.info === "react-transition" && i.intercept({
        handler: function() {
          return new Promise(function(c) {
            return l = c;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      l !== null && (l(), l = null), a || setTimeout(n, 20);
    }
    function n() {
      if (!a && !navigation.transition) {
        var i = navigation.currentEntry;
        i && i.url != null && navigation.navigate(i.url, {
          state: i.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var a = !1, l = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
        a = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), l !== null && (l(), l = null);
      };
    }
  }
  function po(e) {
    this._internalRoot = e;
  }
  Dr.prototype.render = po.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    var n = t.current, a = en();
    Wm(n, a, e, t, null, null);
  }, Dr.prototype.unmount = po.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Wm(e.current, 2, null, e, null, null), pr(), t[al] = null;
    }
  };
  function Dr(e) {
    this._internalRoot = e;
  }
  Dr.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Jo();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Na.length && t !== 0 && t < Na[n].priority; n++) ;
      Na.splice(n, 0, e), n === 0 && ig(e);
    }
  };
  var cg = r.version;
  if (cg !== "19.3.0")
    throw Error(
      s(
        527,
        cg,
        "19.3.0"
      )
    );
  ce.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = E(t), e = e !== null ? N(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var r0 = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: ee,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ur = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ur.isDisabled && Ur.supportsFiber)
      try {
        Wl = Ur.inject(
          r0
        ), Kt = Ur;
      } catch {
      }
  }
  return Zi.createRoot = function(e, t) {
    if (!d(e)) throw Error(s(299));
    var n = !1, a = "", l = Pd, i = Wd, c = eh;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (l = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = Fm(
      e,
      1,
      !1,
      null,
      null,
      n,
      a,
      null,
      l,
      i,
      c,
      sg
    ), e[al] = t.current, Qc(e), new po(t);
  }, Zi.hydrateRoot = function(e, t, n) {
    if (!d(e)) throw Error(s(299));
    var a = !1, l = "", i = Pd, c = Wd, f = eh, v = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (i = n.onUncaughtError), n.onCaughtError !== void 0 && (c = n.onCaughtError), n.onRecoverableError !== void 0 && (f = n.onRecoverableError), n.formState !== void 0 && (v = n.formState)), t = Fm(
      e,
      1,
      !0,
      t,
      n ?? null,
      a,
      l,
      v,
      i,
      c,
      f,
      sg
    ), t.context = Pm(null), n = t.current, a = en(), a = Xr(a), l = sa(a), l.callback = null, ca(n, l, a), n = a, t.current.lanes = n, ti(t, n), zn(t), e[al] = t.current, Qc(e), new Dr(t);
  }, Zi.version = "19.3.0", Zi;
}
var bg;
function v0() {
  if (bg) return bo.exports;
  bg = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (r) {
        console.error(r);
      }
  }
  return u(), bo.exports = p0(), bo.exports;
}
var y0 = v0();
function qg(u, r) {
  if (r) return r;
  const o = new URLSearchParams(u.location.search).get("hana-host-origin");
  if (o) return o;
  try {
    return new URL(u.document.referrer).origin;
  } catch {
    return "*";
  }
}
function Hg(u, r, o) {
  return u.source !== r ? !1 : o === "*" || u.origin === o;
}
var b0 = 600, E0 = 120, S0 = 4e3, Lg = 20, Eg = 4096, Sg = 1e4, T0 = /* @__PURE__ */ new Set(["scroll_element", "click_sequence", "drag_element", "press_key"]), A0 = /* @__PURE__ */ new Set([
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
]), Ig = "hana-ui-", N0 = 512, _0 = 1, Tg = /* @__PURE__ */ new WeakMap(), Hr = /* @__PURE__ */ new WeakMap();
function Zl(u) {
  return typeof u == "object" && u !== null && !Array.isArray(u);
}
function Ir(u) {
  return u.nodeType === 9;
}
function qo(u) {
  return Ir(u) ? u : u.ownerDocument;
}
function w0(u) {
  return Ir(u) ? u.body : u;
}
function Bg(u, r) {
  return r.isConnected && (Ir(u) ? r.ownerDocument === u : u.contains(r));
}
function Fl(u) {
  const r = u.ownerDocument.defaultView?.HTMLElement;
  return r ? u instanceof r : u instanceof HTMLElement;
}
function lu(u) {
  const r = u.ownerDocument.defaultView?.HTMLInputElement;
  return r ? u instanceof r : u instanceof HTMLInputElement;
}
function Ho(u) {
  const r = u.ownerDocument.defaultView?.HTMLTextAreaElement;
  return r ? u instanceof r : u instanceof HTMLTextAreaElement;
}
function Vg(u) {
  const r = u.ownerDocument.defaultView?.HTMLButtonElement;
  return r ? u instanceof r : u instanceof HTMLButtonElement;
}
function O0(u) {
  const r = u.ownerDocument.defaultView?.HTMLSelectElement;
  return r ? u instanceof r : u.tagName === "SELECT";
}
function C0(u) {
  const r = u.ownerDocument.defaultView?.HTMLAnchorElement;
  return r ? u instanceof r : u.tagName === "A";
}
function Gg(u) {
  if (!Fl(u)) return !0;
  const r = u.ownerDocument.defaultView?.getComputedStyle(u);
  return !r || r.display !== "none" && r.visibility !== "hidden";
}
function x0(u) {
  return Fl(u) ? lu(u) || Ho(u) || Vg(u) || O0(u) || C0(u) || u.hasAttribute("contenteditable") || u.hasAttribute("onclick") || ["button", "switch", "textbox", "combobox", "slider", "checkbox", "link"].includes(u.getAttribute("role") ?? "") : !1;
}
function R0(u) {
  const r = u.ownerDocument;
  let o = Tg.get(r);
  o || (o = /* @__PURE__ */ new WeakMap(), Tg.set(r, o));
  const s = o.get(u), d = Hr.get(r);
  if (s && d?.has(s)) return s;
  let m = s;
  if (!m)
    do
      m = `${Ig}${_0++}`;
    while (r.getElementById(m));
  o.set(u, m);
  let p = Hr.get(r);
  if (p || (p = /* @__PURE__ */ new Map(), Hr.set(r, p)), p.size >= N0) {
    const y = p.keys().next().value;
    y && p.delete(y);
  }
  return p.set(m, new WeakRef(u)), m;
}
function j0(u, r) {
  const o = u, s = { tagName: u.tagName.toLowerCase() };
  typeof o.id == "string" && o.id && (s.id = o.id.slice(0, 80)), typeof o.className == "string" && o.className.trim() && (s.className = o.className.trim().slice(0, 120));
  const d = o.textContent?.trim();
  return d && (s.text = d.slice(0, 160)), (lu(u) || Ho(u)) && (u.disabled && (s.disabled = !0), u.type && (s.type = u.type)), o.id ? s.elementId = o.id : r && x0(u) && (s.elementId = R0(u)), s;
}
function D0(u, r) {
  const o = [], s = w0(u);
  if (!s) return { outline: o, visibleNodeCount: 0, totalNodeCount: 0, truncated: !1 };
  const d = qo(u).createTreeWalker(s, 1);
  let m = d.currentNode, p = 0, y = 0;
  for (; m && y < b0; ) {
    if (m.nodeType === 1) {
      const S = m;
      y += 1, Gg(S) && (p += 1, o.length < E0 && o.push(j0(S, r)));
    }
    m = d.nextNode();
  }
  return { outline: o, visibleNodeCount: p, totalNodeCount: y, truncated: m !== null };
}
function jo(u, r, o = !1) {
  if (typeof r != "string" || !r.trim()) return null;
  const s = r.trim(), d = qo(u), m = s.startsWith(Ig) ? Hr.get(d)?.get(s)?.deref() ?? null : d.getElementById(s);
  return m && Bg(u, m) && (!o || Gg(m)) ? m : null;
}
function Yg(u) {
  return Fl(u) ? lu(u) && (u.type === "file" || u.disabled) ? { ok: !1, error: "This element cannot be clicked." } : Vg(u) && u.disabled ? { ok: !1, error: "This element cannot be clicked." } : (u.click(), { ok: !0 }) : { ok: !1, error: "Target is not an element." };
}
function Ag(u, r) {
  const o = lu(u) ? u.ownerDocument.defaultView?.HTMLInputElement.prototype : u.ownerDocument.defaultView?.HTMLTextAreaElement.prototype, s = o && Object.getOwnPropertyDescriptor(o, "value")?.set;
  s ? s.call(u, r) : u.value = r;
}
function U0(u, r, o) {
  const s = typeof r == "string" ? r.slice(0, S0) : "";
  if (lu(u)) {
    if (u.type === "file" || u.disabled || u.readOnly) return { ok: !1, error: "This element cannot accept text." };
    o ? Ag(u, `${u.value}${s}`) : u.value = `${u.value}${s}`;
  } else if (Ho(u)) {
    if (u.disabled || u.readOnly) return { ok: !1, error: "This element cannot accept text." };
    o ? Ag(u, `${u.value}${s}`) : u.value = `${u.value}${s}`;
  } else return { ok: !1, error: "This element cannot accept text." };
  return u.dispatchEvent(new Event("input", { bubbles: !0 })), u.dispatchEvent(new Event("change", { bubbles: !0 })), { ok: !0 };
}
function Wi(u, r) {
  const o = jo(u, r, !0);
  return o && Fl(o) ? o : null;
}
function Lr(u, r) {
  return typeof u == "number" && Number.isFinite(u) && Math.abs(u) <= r ? u : null;
}
function z0(u, r) {
  const o = r.scrollX === void 0 ? 0 : Lr(r.scrollX, Sg), s = r.scrollY === void 0 ? 0 : Lr(r.scrollY, Sg);
  if (o === null || s === null || o === 0 && s === 0) return { ok: !1, code: "UI_ACTION_SCROLL_INVALID", error: "scroll_element requires bounded non-zero scroll coordinates." };
  const d = r.elementId === void 0 ? Ir(u) ? u.scrollingElement ?? u.documentElement : u : Wi(u, r.elementId);
  return !d || !Fl(d) ? { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No visible element matches this elementId." } : (d.scrollLeft += o, d.scrollTop += s, d.dispatchEvent(new Event("scroll", { bubbles: !1 })), { ok: !0, result: { scrollLeft: d.scrollLeft, scrollTop: d.scrollTop } });
}
function M0(u) {
  const r = Array.isArray(u.steps) ? u.steps : u.elementIds;
  if (!Array.isArray(r) || r.length < 1 || r.length > Lg) return null;
  const o = r.map((s) => {
    if (typeof s == "string") return s.trim();
    if (!Zl(s)) return "";
    const d = typeof s.elementId == "string" ? s.elementId.trim() : "", m = Array.isArray(s.elementIds) && s.elementIds.length === 1 && typeof s.elementIds[0] == "string" ? s.elementIds[0].trim() : "";
    return d || m;
  });
  return o.every(Boolean) ? o : null;
}
function q0(u, r) {
  const o = M0(r);
  if (!o) return { ok: !1, code: "UI_ACTION_SEQUENCE_INVALID", error: "click_sequence requires one to twenty element IDs." };
  let s = 0;
  for (const [d, m] of o.entries()) {
    const p = Wi(u, m);
    if (!p) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: `Sequence target ${d + 1} is unavailable.`, result: { completedCount: s, failedIndex: d } };
    const y = Yg(p);
    if (y.ok === !1) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_OPERABLE", error: y.error, result: { completedCount: s, failedIndex: d } };
    s += 1;
  }
  return { ok: !0, result: { completedCount: s } };
}
function Ao(u, r, o, s, d) {
  const m = u.ownerDocument.defaultView?.MouseEvent ?? MouseEvent;
  u.dispatchEvent(new m(r, { bubbles: !0, cancelable: !0, clientX: o, clientY: s, buttons: d }));
}
function No(u, r, o, s, d) {
  const m = u.ownerDocument.defaultView, p = m?.PointerEvent ?? m?.MouseEvent ?? MouseEvent;
  u.dispatchEvent(new p(r, { bubbles: !0, cancelable: !0, clientX: o, clientY: s, buttons: d }));
}
function H0(u, r) {
  const o = Wi(u, r.elementId);
  if (!o) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No visible source element matches this elementId." };
  const s = r.deltaX === void 0 ? 0 : Lr(r.deltaX, Eg), d = r.deltaY === void 0 ? 0 : Lr(r.deltaY, Eg);
  if (s === null || d === null) return { ok: !1, code: "UI_ACTION_DRAG_INVALID", error: "drag_element coordinates must be finite and bounded." };
  const m = r.targetElementId === void 0 ? null : Wi(u, r.targetElementId);
  if (r.targetElementId !== void 0 && !m) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No visible target element matches targetElementId." };
  if (!m && s === 0 && d === 0) return { ok: !1, code: "UI_ACTION_DRAG_TARGET_REQUIRED", error: "drag_element requires a target element or non-zero delta." };
  const p = o.getBoundingClientRect(), y = p.left + p.width / 2, S = p.top + p.height / 2, E = m?.getBoundingClientRect(), N = E ? E.left + E.width / 2 : y + s, g = E ? E.top + E.height / 2 : S + d, H = m ?? o;
  No(o, "pointerdown", y, S, 1), Ao(o, "mousedown", y, S, 1);
  for (const A of [0.25, 0.5, 0.75]) {
    const x = y + (N - y) * A, K = S + (g - S) * A;
    No(H, "pointermove", x, K, 1), Ao(H, "mousemove", x, K, 1);
  }
  return No(H, "pointerup", N, g, 0), Ao(H, "mouseup", N, g, 0), { ok: !0, result: { dragged: !0, endX: N, endY: g } };
}
function L0(u, r) {
  const o = r.key === void 0 ? r.keys : [r.key];
  if (!Array.isArray(o) || o.length < 1 || o.length > Lg || o.some((S) => typeof S != "string")) return { ok: !1, code: "UI_ACTION_KEY_INVALID", error: "press_key requires supported key names or single characters." };
  const s = o.map((S) => S.trim());
  if (s.some((S) => !(S.length === 1 || A0.has(S)))) return { ok: !1, code: "UI_ACTION_KEY_INVALID", error: "press_key requires supported key names or single characters." };
  const d = qo(u).activeElement, m = r.elementId === void 0 ? d && Bg(u, d) && Fl(d) ? d : null : Wi(u, r.elementId);
  if (!m) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No focused visible element is available for press_key." };
  r.elementId !== void 0 && m.focus();
  const p = m.ownerDocument.defaultView?.KeyboardEvent ?? KeyboardEvent, y = { ctrlKey: r.ctrlKey === !0, metaKey: r.metaKey === !0, altKey: r.altKey === !0, shiftKey: r.shiftKey === !0 };
  for (const S of s)
    m.dispatchEvent(new p("keydown", { bubbles: !0, cancelable: !0, key: S, ...y })), m.dispatchEvent(new p("keyup", { bubbles: !0, cancelable: !0, key: S, ...y }));
  return { ok: !0, result: { pressedKeys: s } };
}
function Xg(u, r, o = !1) {
  const s = Zl(r) && typeof r.action == "string" ? r.action : "";
  if (s === "describe_dom") return { ok: !0, result: D0(u, o) };
  if (s === "read_state") return { ok: !0, result: { state: {} } };
  if (s === "click_element") {
    const d = jo(u, Zl(r) ? r.elementId : null, o);
    if (!d) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No element matches this elementId." };
    const m = Yg(d);
    return m.ok === !0 ? { ok: !0, result: { clicked: !0 } } : { ok: !1, code: "UI_ACTION_ELEMENT_NOT_OPERABLE", error: m.error };
  }
  if (s === "type_text") {
    const d = jo(u, Zl(r) ? r.elementId : null, o);
    if (!d) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No element matches this elementId." };
    const m = U0(d, Zl(r) ? r.text : "", o);
    return m.ok === !0 ? { ok: !0, result: { typed: !0 } } : { ok: !1, code: "UI_ACTION_ELEMENT_NOT_OPERABLE", error: m.error };
  }
  return T0.has(s) && !o ? { ok: !1, code: "UI_ACTION_UNSUPPORTED_FOR_APP_CARD", error: `App cards do not support ${s}.` } : Zl(r) ? s === "scroll_element" ? z0(u, r) : s === "click_sequence" ? q0(u, r) : s === "drag_element" ? H0(u, r) : s === "press_key" ? L0(u, r) : { ok: !1, code: "UI_ACTION_UNKNOWN_ACTION", error: `Unknown UI action: ${s || "(missing)"}.` } : { ok: !1, code: "UI_ACTION_UNKNOWN_ACTION", error: `Unknown UI action: ${s || "(missing)"}.` };
}
var dt = "hana.plugin.ui", ht = 1, I0 = "X-Hana-App-Surface-Session", B0 = "appSurfaceSession", $i = {
  CONTEXT: "hana.input-panel.context",
  SUBMIT: "hana.input-panel.submit",
  PRESENTATION: "hana.input-panel.presentation"
}, Ng = 64 * 1024, Qg = {
  BAD_MESSAGE: "BAD_MESSAGE",
  UNSUPPORTED_VERSION: "UNSUPPORTED_VERSION"
}, Ie = {
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
}, Kl = {
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
}, kl = {
  GET: "hana.app.storage.get",
  GET_ALL: "hana.app.storage.getAll",
  SET: "hana.app.storage.set",
  DELETE: "hana.app.storage.delete",
  KEYS: "hana.app.storage.keys"
}, V0 = {
  CHANGED: "hana.app.storage.changed"
}, Kg = { OPEN: "hana.cards.open" }, zr = {
  GET_ACTIVE: "hana.sessions.get-active",
  SUBSCRIBE: "hana.sessions.subscribe-active",
  UNSUBSCRIBE: "hana.sessions.unsubscribe-active",
  FOCUS: "hana.sessions.focus"
}, _g = {
  ACTIVE_CHANGED: "hana.sessions.active-changed",
  ERROR: "hana.sessions.error"
}, Do = {
  SET_INTERACTIVE_REGIONS: "hana.surface.set-interactive-regions"
};
function G0(u) {
  if (!An(u) || Object.keys(u).length !== 1 || !Array.isArray(u.regions))
    return { ok: !1, error: "hana.surface.setInteractiveRegions requires exactly one regions array." };
  if (u.regions.length > 64)
    return { ok: !1, error: "hana.surface.setInteractiveRegions accepts at most 64 regions." };
  const r = [];
  for (const o of u.regions) {
    if (!An(o) || Object.keys(o).length !== 4)
      return { ok: !1, error: "Each interactive region must contain exactly x, y, width, and height." };
    const { x: s, y: d, width: m, height: p } = o;
    if (typeof s != "number" || typeof d != "number" || typeof m != "number" || typeof p != "number" || !Number.isFinite(s) || !Number.isFinite(d) || !Number.isFinite(m) || !Number.isFinite(p))
      return { ok: !1, error: "Interactive region coordinates must be finite numbers." };
    if (m <= 0 || p <= 0 || Math.abs(s) > 1e6 || Math.abs(d) > 1e6 || Math.abs(m) > 1e6 || Math.abs(p) > 1e6)
      return { ok: !1, error: "Interactive region bounds are invalid." };
    r.push({ x: s, y: d, width: m, height: p });
  }
  return { ok: !0, value: { regions: r } };
}
var Jl = {
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
}, Pn = {
  /** No trusted, ready App card view owns this surface (settings / function panel / v1 / preview / not ready / no binding yet). */
  UNAVAILABLE: "APP_CHROME_UNAVAILABLE",
  /** The write carries no token, or one from a view the host has already replaced. */
  VIEW_STALE: "APP_CHROME_VIEW_STALE",
  BAD_PAYLOAD: "APP_CHROME_BAD_PAYLOAD",
  /** The App has no onAction handler for this request. */
  ACTION_UNHANDLED: "APP_CHROME_ACTION_UNHANDLED",
  /** The App's onAction handler threw or answered with something unusable. */
  ACTION_FAILED: "APP_CHROME_ACTION_FAILED"
}, Y0 = 128;
function iu(u) {
  if (typeof u != "string" || u.length === 0 || u.length > Y0)
    return !1;
  for (let r = 0; r < u.length; r += 1) {
    const o = u.charCodeAt(r);
    if (o <= 31 || o === 127)
      return !1;
  }
  return !0;
}
function X0(u) {
  return !An(u) || !iu(u.viewToken) ? { ok: !1, error: "A chrome binding requires a host-minted view token." } : u.resync !== void 0 && typeof u.resync != "boolean" ? { ok: !1, error: "A chrome binding resync flag must be a boolean when present." } : { ok: !0, value: { viewToken: u.viewToken, ...u.resync === void 0 ? {} : { resync: u.resync } } };
}
function Q0(u) {
  return !An(u) || !iu(u.challengeId) ? { ok: !1, error: "A chrome challenge requires a host-minted challenge id." } : { ok: !0, value: { challengeId: u.challengeId } };
}
function K0(u) {
  return An(u) ? typeof u.requestId != "string" || u.requestId === "" ? { ok: !1, error: "App chrome action identity requires a non-empty requestId." } : !Number.isSafeInteger(u.revision) || u.revision <= 0 ? { ok: !1, error: "App chrome action identity requires a positive revision." } : !Number.isSafeInteger(u.generation) || u.generation <= 0 ? { ok: !1, error: "App chrome action identity requires a positive generation." } : iu(u.viewToken) ? {
    ok: !0,
    value: {
      requestId: u.requestId,
      revision: u.revision,
      generation: u.generation,
      viewToken: u.viewToken
    }
  } : { ok: !1, error: "App chrome action identity requires the view token." } : { ok: !1, error: "App chrome action identity must be an object." };
}
function Z0(u) {
  if (!An(u))
    return { ok: !1, error: "App chrome action request must be an object." };
  const r = u.kind;
  if (r !== "action" && r !== "tab-select" && r !== "tab-close")
    return { ok: !1, error: 'App chrome action request kind must be "action", "tab-select" or "tab-close".' };
  const o = K0(u);
  if (o.ok === !1)
    return o;
  const s = o.value;
  return r === "action" ? typeof u.actionId != "string" || u.actionId === "" ? { ok: !1, error: "App chrome action request requires a non-empty actionId." } : { ok: !0, value: { kind: r, ...s, actionId: u.actionId } } : typeof u.tabId != "string" || u.tabId === "" ? { ok: !1, error: `App chrome ${r} request requires a non-empty tabId.` } : { ok: !0, value: { kind: r, ...s, tabId: u.tabId } };
}
var ki = {
  /** App → host: register the current document/namespace, returning a bound handle. */
  ENABLE: "hana.app.view-state.enable",
  /** App → host: read the snapshot the handle's namespace currently holds. */
  GET: "hana.app.view-state.get",
  /** App → host: compare-and-swap the handle's namespace snapshot. */
  SET: "hana.app.view-state.set",
  /** App → host: release this handle's own registration. */
  RELEASE: "hana.app.view-state.release"
}, k0 = 256;
function eu(u) {
  if (typeof u != "string" || u.length === 0 || u.length > k0 || u.trim().length === 0)
    return !1;
  for (let r = 0; r < u.length; r += 1) {
    const o = u.charCodeAt(r);
    if (o <= 31 || o === 127)
      return !1;
  }
  return !0;
}
function Lo(u, r) {
  const o = Reflect.ownKeys(u);
  if (o.length !== r.length)
    return !1;
  for (const s of o)
    if (typeof s != "string" || !r.includes(s))
      return !1;
  return !0;
}
function _o(u) {
  return !An(u) || !Lo(u, ["viewKind", "revision", "state"]) ? { ok: !1, error: "App view-state snapshot must carry exactly viewKind, revision and state." } : u.viewKind !== "compact" && u.viewKind !== "detached" ? { ok: !1, error: 'App view-state snapshot kind must be "compact" or "detached".' } : !Number.isSafeInteger(u.revision) || u.revision < 0 ? { ok: !1, error: "App view-state snapshot revision must be a non-negative safe integer." } : u.state === void 0 ? { ok: !1, error: "App view-state snapshot requires a state object or an explicit null." } : u.revision === 0 && u.state !== null ? { ok: !1, error: "App view-state revision 0 only carries a null state." } : { ok: !0, value: { viewKind: u.viewKind, revision: u.revision, state: u.state } };
}
function wo(u) {
  return !An(u) || !Lo(u, ["viewToken", "bindingId", "registrationId", "snapshot"]) ? { ok: !1, error: "App view-state reply must echo exactly a view token, namespace binding id, registration id and snapshot." } : iu(u.viewToken) ? eu(u.bindingId) ? eu(u.registrationId) ? {
    ok: !0,
    value: { viewToken: u.viewToken, bindingId: u.bindingId, registrationId: u.registrationId, snapshot: u.snapshot }
  } : { ok: !1, error: "App view-state reply requires an opaque registration id." } : { ok: !1, error: "App view-state reply requires an opaque namespace binding id." } : { ok: !1, error: "App view-state reply requires the host-minted view token." };
}
function Ji(u, r) {
  return u.viewToken !== r.viewToken || u.bindingId !== r.bindingId ? !1 : r.registrationId === void 0 ? !0 : u.registrationId === r.registrationId;
}
function wg(u) {
  return !An(u) || !Lo(u, ["viewToken", "bindingId", "registrationId", "released"]) ? { ok: !1, error: "App view-state release reply must echo exactly a view token, namespace binding id, registration id and a boolean released flag." } : iu(u.viewToken) ? eu(u.bindingId) ? eu(u.registrationId) ? typeof u.released != "boolean" ? { ok: !1, error: "App view-state release reply requires a boolean released flag." } : { ok: !0, value: { viewToken: u.viewToken, bindingId: u.bindingId, registrationId: u.registrationId, released: u.released } } : { ok: !1, error: "App view-state release reply requires an opaque registration id." } : { ok: !1, error: "App view-state release reply requires an opaque namespace binding id." } : { ok: !1, error: "App view-state release reply requires the host-minted view token." };
}
var J0 = /^\/api\/apps\/([^/]+)\/ui(?:\/|$)/, $0 = /^\/api\/apps\/([^/]+)\/routes\/_runtime\/([^/]+)\/_surface\/([^/]+)\//;
function Mr(u) {
  let r;
  try {
    r = decodeURIComponent(u);
  } catch {
    return null;
  }
  if (r.length === 0 || r.includes("/") || r.includes("\\") || r.includes("\0"))
    return null;
  for (let o = 0; o < r.length; o += 1) {
    const s = r.charCodeAt(o);
    if (s <= 31 || s === 127)
      return null;
  }
  return r;
}
function Io(u) {
  if (typeof u != "string" || !u.startsWith("/api/apps/"))
    return null;
  const r = $0.exec(u);
  if (r) {
    const s = Mr(r[1]), d = Mr(r[2]), m = Mr(r[3]);
    return s === null || d === null || m === null ? null : { appId: s, kind: "runtime" };
  }
  const o = J0.exec(u);
  if (o) {
    const s = Mr(o[1]);
    return s === null ? null : { appId: s, kind: "ui" };
  }
  return null;
}
var F0 = 256;
function Zg(u) {
  if (u !== void 0)
    return typeof u != "string" || u.length === 0 || u.length > F0 || u.includes("\0") || u.trim().length === 0 ? null : u;
}
var P0 = {
  CONTEXT: "hana.surface.context"
}, W0 = /* @__PURE__ */ new Set([
  "event",
  "request",
  "response",
  "error"
]);
function An(u) {
  return typeof u == "object" && u !== null;
}
function wa(u) {
  return {
    ok: !1,
    error: {
      code: Qg.BAD_MESSAGE,
      message: u
    }
  };
}
function Fi(u) {
  if (!An(u))
    return wa("Plugin UI messages must be objects.");
  if (u.protocol !== dt)
    return wa("Plugin UI message protocol is missing or invalid.");
  if (u.version !== ht)
    return {
      ok: !1,
      error: {
        code: Qg.UNSUPPORTED_VERSION,
        message: `Unsupported Plugin UI protocol version: ${String(u.version)}.`
      }
    };
  if (typeof u.kind != "string" || !W0.has(u.kind))
    return wa("Plugin UI message kind is missing or invalid.");
  if (typeof u.type != "string" || u.type.trim() === "")
    return wa("Plugin UI message type must be a non-empty string.");
  const r = u.kind;
  if (r !== "event" && (typeof u.id != "string" || u.id.trim() === ""))
    return wa(`Plugin UI ${r} messages must include a non-empty id.`);
  if (r === "error") {
    if (!An(u.error))
      return wa("Plugin UI error messages must include an error object.");
    if (typeof u.error.code != "string" || u.error.code.trim() === "")
      return wa("Plugin UI error code must be a non-empty string.");
    if (typeof u.error.message != "string" || u.error.message.trim() === "")
      return wa("Plugin UI error message must be a non-empty string.");
  }
  return {
    ok: !0,
    value: u
  };
}
var eb = [
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
], tb = [
  "cards",
  "agentTypes",
  "configuration",
  "settingsTab",
  "page",
  "widget"
], nb = [
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
], ab = ["restricted", "full-access"];
new Set(eb);
new Set(tb);
new Set(nb);
new Set(ab);
var lb = Object.values(Ie);
new Set(lb);
var Pi = class extends Error {
  reason;
  constructor(u, r) {
    super(r), this.name = "AppCurrentViewBindingError", this.reason = u;
  }
};
function ib() {
  return `chrome-doc:${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`;
}
function ub(u) {
  return JSON.stringify([u.appId, u.cardInstanceId ?? null, u.instanceKey ?? null]);
}
function rb(u) {
  const r = ib();
  let o = null, s = !1, d, m = !0;
  const p = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Set();
  let S = 0;
  const E = () => {
    S += 1;
  }, N = (J) => new Pi("unavailable", J), g = () => new Pi(
    "identity-changed",
    "The current App card identity changed while this view write waited."
  ), H = () => new Pi(
    "token-stale",
    "The held view token is no longer the current document."
  ), A = (J) => {
    p.delete(J), u.targetWindow.clearTimeout(J.timer), J.signal && J.onAbort && J.signal.removeEventListener("abort", J.onAbort);
  }, x = (J, Ee) => {
    A(J), J.reject(Ee);
  }, K = (J, Ee) => {
    const de = o !== J, re = m;
    o = J, m = !0, (de || !re) && E();
    for (const oe of [...p]) {
      if (A(oe), oe.identity !== void 0 && oe.identity !== d) {
        oe.reject(g());
        continue;
      }
      oe.resolve(J);
    }
    if (y.size === 0) return;
    const Se = { changed: de, resync: Ee }, ie = S;
    for (const oe of [...y]) {
      if (s || ie !== S) return;
      y.has(oe) && oe.listener(Se);
    }
  };
  return {
    handleHostMessage: (J) => {
      const Ee = J.type === Jl.CHALLENGE, de = J.type === Jl.BINDING;
      if (!Ee && !de) return !1;
      if (s) return !0;
      if (Ee && J.kind === "event") {
        const re = Q0(J.payload);
        return re.ok === !0 && (u.post({
          protocol: dt,
          version: ht,
          kind: "event",
          type: Jl.ACK,
          payload: { challengeId: re.value.challengeId, documentNonce: r }
        }), s || u.reannounceReady?.()), !0;
      }
      if (de && J.kind === "event") {
        const re = X0(J.payload);
        return re.ok === !0 && K(re.value.viewToken, re.value.resync === !0), !0;
      }
      return !0;
    },
    applySurfaceContext: (J) => {
      if (s) return;
      if (J === null) {
        if (!m) return;
        m = !1, E();
        return;
      }
      const Ee = ub(J);
      if (d !== Ee) {
        if (d !== void 0) {
          for (const de of [...p]) x(de, g());
          o = null;
        }
        d = Ee, E();
      }
    },
    currentToken() {
      return !s && m ? o : null;
    },
    waitForToken: (J, Ee) => s ? Promise.reject(N("The current App card view binding was released.")) : Ee?.aborted ? Promise.reject(N("The current App card view wait was aborted.")) : o && m ? Promise.resolve(o) : new Promise((de, re) => {
      const Se = {
        resolve: de,
        reject: re,
        identity: d,
        timer: u.targetWindow.setTimeout(() => {
          A(Se), re(N("The host has not bound this App card view; the current view is unavailable here."));
        }, J)
      };
      Ee && (Se.signal = Ee, Se.onAbort = () => x(Se, N("The current App card view wait was aborted.")), Ee.addEventListener("abort", Se.onAbort)), p.add(Se);
    }),
    assertCurrentToken: (J) => {
      if (s) throw N("The current App card view binding was released.");
      if (!m || !o)
        throw N("The current App card view is not writable here right now.");
      if (o !== J) throw H();
    },
    onBinding(J) {
      if (s) return () => {
      };
      const Ee = { listener: J };
      return y.add(Ee), () => {
        y.delete(Ee);
      };
    },
    dispose() {
      if (!s) {
        s = !0, o = null, m = !1;
        for (const J of [...p])
          x(J, N("The current App card view binding was released."));
        p.clear(), y.clear();
      }
    }
  };
}
function sb(u, r) {
  let o = null, s = 0;
  const d = (p) => {
    const y = u();
    y && r({
      protocol: dt,
      version: ht,
      kind: "event",
      type: Jl.SCROLL,
      payload: { scrolled: p, viewToken: y }
    });
  }, m = (p) => {
    const y = o;
    y && (o = null, y.detach(), p && y.scrolled && d(!1));
  };
  return {
    register(p) {
      if (!p || typeof p.scrollTop != "number" || typeof p.addEventListener != "function")
        throw new TypeError("hana.chrome.registerScrollSource requires an element.");
      m(!0);
      const y = ++s, S = p.ownerDocument?.defaultView, E = { generation: y, scrolled: p.scrollTop > 0, detach: () => {
      } }, N = () => {
        if (!o || o.generation !== y) return;
        const A = p.scrollTop > 0;
        A !== o.scrolled && (o.scrolled = A, d(A));
      };
      p.addEventListener("scroll", N, { passive: !0 });
      const g = S?.ResizeObserver, H = g ? new g(N) : null;
      return H?.observe(p), E.detach = () => {
        p.removeEventListener("scroll", N), H?.disconnect();
      }, o = E, E.scrolled && d(!0), () => {
        if (!o || o.generation !== y) return;
        const A = o;
        o = null, A.detach(), A.scrolled && d(!1);
      };
    },
    /** The host bound this document (or re-bound it): report the real state. */
    flush() {
      o?.scrolled && d(!0);
    },
    dispose: () => m(!1)
  };
}
function cb(u) {
  const r = { requestId: u.requestId, revision: u.revision };
  return u.kind === "action" ? { ...r, kind: "action", actionId: u.actionId } : u.kind === "tab-select" ? { ...r, kind: "tab-select", tabId: u.tabId } : { ...r, kind: "tab-close", tabId: u.tabId };
}
var ob = 1e4;
function fb(u) {
  const r = u.requestTimeoutMs ?? ob, o = u.currentView;
  let s = !1, d = null;
  const m = new AbortController(), p = sb(() => s ? null : o.currentToken(), u.post), y = o.onBinding((B) => {
    s || (B.changed || B.resync) && p.flush();
  }), S = () => Object.assign(
    new Error("The App card business identity changed; this chrome write is stale."),
    { code: Pn.VIEW_STALE }
  ), E = () => Object.assign(
    new Error("The host has not bound this App card view; chrome is unavailable here."),
    { code: Pn.UNAVAILABLE }
  ), N = () => Object.assign(
    new Error("The App chrome view was released."),
    { code: Pn.UNAVAILABLE }
  ), g = (B) => B instanceof Pi ? B.reason === "unavailable" ? E() : S() : B, H = (B, le) => {
    u.post({
      protocol: dt,
      version: ht,
      id: B.id,
      type: B.type,
      ...le
    });
  }, A = (B) => {
    if (B.type !== Jl.ACTION) return !1;
    if (s) return !0;
    if (B.kind !== "request") return !1;
    const le = Z0(B.payload);
    if (le.ok === !1)
      return H(B, { kind: "error", error: { code: Pn.BAD_PAYLOAD, message: le.error } }), !0;
    const be = le.value, me = {
      requestId: be.requestId,
      revision: be.revision,
      generation: be.generation,
      viewToken: be.viewToken
    }, J = d;
    if (!J)
      return H(B, {
        kind: "error",
        payload: me,
        error: { code: Pn.ACTION_UNHANDLED, message: "This App has no chrome action handler." }
      }), !0;
    if (be.viewToken !== o.currentToken())
      return H(B, {
        kind: "error",
        payload: me,
        error: { code: Pn.VIEW_STALE, message: "This chrome action belongs to a replaced view." }
      }), !0;
    const Ee = () => !s && d === J && be.viewToken === o.currentToken();
    return Promise.resolve().then(async () => {
      if (!Ee()) {
        H(B, {
          kind: "error",
          payload: me,
          error: { code: Pn.VIEW_STALE, message: "This chrome action belongs to a replaced view." }
        });
        return;
      }
      let de;
      try {
        de = await J.fn(cb(be));
      } catch (re) {
        if (!Ee()) return;
        H(B, {
          kind: "error",
          payload: me,
          error: {
            code: Pn.ACTION_FAILED,
            message: re instanceof Error ? re.message : "The App chrome action handler failed."
          }
        });
        return;
      }
      Ee() && H(B, {
        kind: "response",
        payload: {
          ...me,
          status: de && de.status === "rejected" ? "rejected" : "handled",
          ...de && typeof de.message == "string" && de.message ? { message: de.message } : {}
        }
      });
    }), !0;
  }, x = () => p.dispose();
  u.targetWindow.addEventListener("pagehide", x);
  const K = (B) => {
    if (s)
      throw Object.assign(new Error(`The App chrome view was released; ${B} is unavailable.`), { code: Pn.UNAVAILABLE });
  };
  return {
    api: {
      set(B, le) {
        const be = le?.timeoutMs ?? r;
        return o.waitForToken(be, m.signal).then(
          (me) => {
            K("hana.chrome.set");
            try {
              o.assertCurrentToken(me);
            } catch (J) {
              throw g(J);
            }
            return u.request(Jl.SET, { description: B, viewToken: me }, { timeoutMs: be });
          },
          (me) => {
            throw s ? N() : g(me);
          }
        );
      },
      onAction(B) {
        if (K("hana.chrome.onAction"), typeof B != "function") throw new TypeError("hana.chrome.onAction requires a handler.");
        const le = { fn: B };
        return d = le, () => {
          d === le && (d = null);
        };
      },
      registerScrollSource(B) {
        return K("hana.chrome.registerScrollSource"), p.register(B);
      }
    },
    handleHostMessage: A,
    dispose() {
      s || (s = !0, m.abort(), u.targetWindow.removeEventListener("pagehide", x), y(), d = null, p.dispose());
    }
  };
}
var db = 16, hb = 4096, mb = 24 * 1024, bt = class extends Error {
  code;
  constructor(u, r) {
    super(r), this.name = "AppViewStateError", this.code = u;
  }
}, gb = new TextEncoder();
function pb(u) {
  return gb.encode(u).length;
}
function vb(u) {
  if (typeof u != "object" || u === null || Array.isArray(u)) return !1;
  const r = Object.getPrototypeOf(u);
  return r === Object.prototype || r === null;
}
function yb(u) {
  const r = Number(u);
  return !Number.isInteger(r) || r < 0 || String(r) !== u ? null : r;
}
function kg(u) {
  return u === "input" ? "VIEW_STATE_INVALID_INPUT" : "VIEW_STATE_INVALID_STORAGE";
}
function bb(u, r) {
  const o = kg(r), s = /* @__PURE__ */ new Set();
  let d = 0;
  const m = (p, y) => {
    if (d += 1, d > hb)
      throw new bt(o, "App view state contains too many values.");
    if (y > db)
      throw new bt(o, "App view state is nested too deeply.");
    if (p === null) return null;
    const S = typeof p;
    if (S === "string" || S === "boolean") return p;
    if (S === "number") {
      if (!Number.isFinite(p))
        throw new bt(o, "App view state numbers must be finite.");
      return p;
    }
    if (S !== "object")
      throw new bt(o, "App view state must contain only JSON values.");
    const E = p;
    if (s.has(E))
      throw new bt(o, "App view state must not contain cycles.");
    const N = Object.getPrototypeOf(E);
    if (Array.isArray(E)) {
      if (N !== Array.prototype)
        throw new bt(o, "App view state must contain only plain arrays.");
      s.add(E);
      const H = E.length;
      for (const x of Reflect.ownKeys(E)) {
        if (typeof x != "string")
          throw new bt(o, "App view state must not contain symbol keys.");
        if (x === "length") {
          const le = Object.getOwnPropertyDescriptor(E, "length");
          if (le.enumerable || le.get || le.set)
            throw new bt(o, "App view state arrays must expose a plain length.");
          continue;
        }
        const K = yb(x);
        if (K === null || K >= H)
          throw new bt(o, "App view state arrays must not carry extra keys.");
        const B = Object.getOwnPropertyDescriptor(E, x);
        if (!B.enumerable || B.get || B.set)
          throw new bt(o, "App view state arrays must index plain values.");
      }
      const A = [];
      for (let x = 0; x < H; x++) {
        const K = Object.getOwnPropertyDescriptor(E, String(x));
        if (!K)
          throw new bt(o, "App view state must not contain sparse arrays.");
        A.push(m(K.value, y + 1));
      }
      return s.delete(E), A;
    }
    if (N !== Object.prototype && N !== null)
      throw new bt(o, "App view state must contain only plain objects.");
    s.add(E);
    const g = /* @__PURE__ */ Object.create(null);
    for (const H of Reflect.ownKeys(E)) {
      if (typeof H != "string")
        throw new bt(o, "App view state must not contain symbol keys.");
      const A = Object.getOwnPropertyDescriptor(E, H);
      if (!A.enumerable)
        throw new bt(o, "App view state must not contain non-enumerable fields.");
      if (A.get || A.set)
        throw new bt(o, "App view state must not contain accessors.");
      g[H] = m(A.value, y + 1);
    }
    return s.delete(E), g;
  };
  return m(u, 0);
}
function Eb(u, r) {
  if (u === null) return null;
  if (!vb(u))
    throw new bt(
      kg(r),
      "App view state must be a JSON object or null."
    );
  return bb(u, r);
}
function Sb(u, r) {
  if (u === null) return null;
  const o = JSON.stringify(u);
  if (pb(o) > mb)
    throw new bt(
      "VIEW_STATE_TOO_LARGE",
      "App view state exceeds the size budget."
    );
  return JSON.parse(o);
}
function Uo(u) {
  return Sb(Eb(u, "input"));
}
var we = {
  UNAVAILABLE: "VIEW_STATE_UNAVAILABLE",
  VIEW_STALE: "VIEW_STATE_VIEW_STALE",
  RELEASED: "VIEW_STATE_RELEASED",
  INVALID_INPUT: "VIEW_STATE_INVALID_INPUT",
  BAD_RESPONSE: "VIEW_STATE_BAD_RESPONSE"
}, Tb = class extends Error {
  code;
  constructor(u, r) {
    super(r), this.name = "AppViewStateRequestError", this.code = u;
  }
}, Ab = 1e4;
function Oe(u, r) {
  return new Tb(u, r);
}
function Nb(u) {
  return {
    viewKind: u.viewKind,
    revision: u.revision,
    state: Uo(u.state)
  };
}
function _b(u) {
  const r = u.requestTimeoutMs ?? Ab;
  let o = !1, s = 0, d = null;
  const m = /* @__PURE__ */ new Map();
  let p = null, y = null, S = !1;
  const E = (q) => q instanceof Pi ? q.reason === "unavailable" ? Oe(we.UNAVAILABLE, "The App card view is not writable here right now.") : Oe(we.VIEW_STALE, "The App card view this operation was bound to is no longer current.") : q, N = (q, M) => {
    !q || q.terminated !== null || (q.terminated = M, q.lifetime.abort());
  }, g = (q) => {
    N(d, q), d = null;
    for (const M of m.values()) M.abort.abort();
    m.clear();
  }, H = (q) => {
    if (o || q === null) return;
    if (q.slot !== "card") {
      g("namespace-changed"), y = null, S = !0, p = null;
      return;
    }
    const M = JSON.stringify([q.appId, q.cardInstanceId, q.instanceKey ?? null]), te = q.viewState?.bindingId ?? null;
    (S && y !== M || te !== null && p !== null && te !== p) && g("namespace-changed"), y = M, S = !0, te !== null && (p = te);
  }, A = (q) => {
    if (!o && q.changed) {
      N(d, "document-changed"), d = null;
      for (const M of m.values())
        M.tokenCaptured && M.abort.abort();
    }
  }, x = u.subscribeContext(H), K = u.currentView.onBinding(A), B = (q) => u.currentView.currentToken() === q, le = (q) => {
    try {
      u.currentView.assertCurrentToken(q);
    } catch (M) {
      throw E(M);
    }
  }, be = (q) => {
    const M = u.getContext();
    if (!M || M.slot !== "card")
      throw Oe(we.UNAVAILABLE, "The App view-state namespace is not available on this surface.");
    const te = M.viewState;
    if (!te)
      throw Oe(we.UNAVAILABLE, "The App view-state namespace is not available here right now.");
    if (te.bindingId !== q.bindingId || te.viewKind !== q.viewKind)
      throw Oe(we.VIEW_STALE, "This view-state handle belongs to a namespace that is no longer current.");
    if (te.available !== !0)
      throw Oe(we.UNAVAILABLE, "The App view-state namespace is temporarily unavailable.");
  }, me = (q) => q === "document-changed" || q === "namespace-changed" ? Oe(we.VIEW_STALE, "This view-state handle's view changed before the operation could be adopted.") : Oe(we.RELEASED, "This view-state handle has been released."), J = (q) => {
    if (o)
      throw Oe(we.RELEASED, "The App view-state controller was released.");
    if (q.terminated !== null) throw me(q.terminated);
    if (q.lifetime.signal.aborted)
      throw Oe(we.RELEASED, "This view-state handle has been released.");
    if (d !== q)
      throw Oe(we.VIEW_STALE, "This view-state handle is no longer the current registration.");
    return le(q.viewToken), be(q), q.viewToken;
  }, Ee = (q, M) => {
    if (o)
      throw Oe(we.RELEASED, "The App view-state controller was released.");
    if (q.terminated !== null) throw me(q.terminated);
    if (q.lifetime.signal.aborted)
      throw Oe(we.RELEASED, "This view-state handle has been released.");
    if (!B(M))
      throw Oe(we.VIEW_STALE, "The document changed before this view-state reply arrived.");
    const te = u.getContext(), j = te?.viewState;
    if (!te || te.slot !== "card" || !j || j.bindingId !== q.bindingId || j.viewKind !== q.viewKind)
      throw Oe(we.VIEW_STALE, "The namespace changed before this view-state reply arrived.");
    if (j.available !== !0)
      throw Oe(we.UNAVAILABLE, "The App view-state namespace paused before this reply arrived.");
  }, de = async (q, M, te, j) => {
    try {
      return await u.request(q, M, { timeoutMs: te });
    } catch (F) {
      if (j !== null) {
        if (j.terminated !== null) throw me(j.terminated);
        if (j.lifetime.signal.aborted)
          throw Oe(we.RELEASED, "This view-state handle has been released.");
      }
      throw o ? Oe(we.RELEASED, "The App view-state controller was released.") : F;
    }
  }, re = (q, M) => {
    if (M.viewKind !== q)
      throw Oe(we.BAD_RESPONSE, "The view-state reply carried a different view kind than the operation targeted.");
    let te;
    try {
      te = Uo(M.state);
    } catch (j) {
      throw j instanceof bt ? Oe(we.BAD_RESPONSE, "The view-state reply carried a state outside the shared JSON budget.") : j;
    }
    return { viewKind: q, revision: M.revision, state: te };
  }, Se = async (q, M) => {
    const te = M?.timeoutMs ?? r, j = J(q), F = await de(ki.GET, {
      viewToken: j,
      bindingId: q.bindingId,
      registrationId: q.registrationId
    }, te, q);
    Ee(q, j);
    const L = wo(F);
    if (L.ok === !1)
      throw Oe(we.BAD_RESPONSE, L.error);
    if (!Ji(L.value, {
      viewToken: j,
      bindingId: q.bindingId,
      registrationId: q.registrationId
    }))
      throw Oe(we.VIEW_STALE, "This view-state reply answered a different view than the one this handle targets.");
    const G = _o(L.value.snapshot);
    if (G.ok === !1)
      throw Oe(we.BAD_RESPONSE, G.error);
    return re(q.viewKind, G.value);
  }, ie = async (q, M, te) => {
    const j = te?.timeoutMs ?? r, F = wb(M), L = Uo(M.state), G = J(q), ne = await de(ki.SET, {
      viewToken: G,
      bindingId: q.bindingId,
      registrationId: q.registrationId,
      expectedRevision: F,
      state: L
    }, j, q);
    Ee(q, G);
    const $ = wo(ne);
    if ($.ok === !1)
      throw Oe(we.BAD_RESPONSE, $.error);
    if (!Ji($.value, {
      viewToken: G,
      bindingId: q.bindingId,
      registrationId: q.registrationId
    }))
      throw Oe(we.VIEW_STALE, "This view-state reply answered a different view than the one this handle targets.");
    const b = _o($.value.snapshot);
    if (b.ok === !1)
      throw Oe(we.BAD_RESPONSE, b.error);
    return re(q.viewKind, b.value);
  }, oe = async (q, M, te) => {
    if (!B(q)) return;
    const j = u.getContext();
    if (!(!j || j.slot !== "card" || j.viewState?.bindingId !== M))
      try {
        const F = await u.request(ki.RELEASE, { viewToken: q, bindingId: M, registrationId: te }, { timeoutMs: r }), L = wg(F);
        (L.ok === !1 || !Ji(L.value, { viewToken: q, bindingId: M, registrationId: te })) && console.error("[hana] App view-state cleanup reply did not confirm the released registration.");
      } catch (F) {
        console.error("[hana] failed to release a superseded App view-state registration:", F instanceof Error ? F.message : F);
      }
  }, Te = (q, M) => (q.releasePromise || (q.releasePromise = (async () => {
    const te = M?.timeoutMs ?? r;
    N(q, "released"), d === q && (d = null);
    const j = u.getContext(), F = j?.viewState;
    if (!(B(q.viewToken) && j?.slot === "card" && !!F && F.bindingId === q.bindingId)) return { released: !1 };
    const G = await u.request(ki.RELEASE, {
      viewToken: q.viewToken,
      bindingId: q.bindingId,
      registrationId: q.registrationId
    }, { timeoutMs: te }), ne = wg(G);
    if (ne.ok === !1)
      throw Oe(we.BAD_RESPONSE, ne.error);
    if (!Ji(ne.value, {
      viewToken: q.viewToken,
      bindingId: q.bindingId,
      registrationId: q.registrationId
    }))
      throw Oe(we.VIEW_STALE, "This view-state release reply answered a different view than the one this handle targets.");
    const $ = u.getContext();
    if (!B(q.viewToken) || $?.slot !== "card" || $.viewState?.bindingId !== q.bindingId || $.viewState?.viewKind !== q.viewKind)
      throw Oe(we.VIEW_STALE, "The namespace changed before this view-state release was confirmed.");
    return { released: ne.value.released };
  })()), q.releasePromise), V = (q, M, te, j, F) => {
    const L = new AbortController(), G = {
      viewToken: q,
      bindingId: M,
      viewKind: te,
      registrationId: j,
      lifetime: L,
      initial: F,
      releasePromise: null,
      terminated: null
    };
    return G.handle = {
      get initial() {
        return Nb(G.initial);
      },
      signal: L.signal,
      get: (ne) => Se(G, ne),
      set: (ne, $) => ie(G, ne, $),
      release: (ne) => Te(G, ne)
    }, G;
  };
  return {
    api: { enable: async (q) => {
      const M = q?.timeoutMs ?? r;
      if (o) throw Oe(we.RELEASED, "The App view-state controller was released.");
      const te = u.getContext();
      if (te && te.slot !== "card")
        throw Oe(we.UNAVAILABLE, "View-state recovery is only available on an App card surface.");
      const j = te?.viewState?.bindingId ?? null, F = ++s;
      g("superseded");
      const L = new AbortController(), G = { abort: L, tokenCaptured: !1 };
      m.set(F, G);
      let ne = null;
      try {
        let $;
        try {
          $ = await u.currentView.waitForToken(M, L.signal);
        } catch (ce) {
          throw o ? Oe(we.RELEASED, "The App view-state controller was released.") : L.signal.aborted ? Oe(we.VIEW_STALE, "A newer view-state enable replaced this one before it was bound.") : E(ce);
        }
        if (G.tokenCaptured = !0, o) throw Oe(we.RELEASED, "The App view-state controller was released.");
        if (F !== s || L.signal.aborted)
          throw Oe(we.VIEW_STALE, "A newer view-state enable replaced this one before it was bound.");
        le($);
        const b = u.getContext(), z = b?.viewState;
        if (!b || b.slot !== "card" || !z || z.available !== !0)
          throw Oe(we.UNAVAILABLE, "The App view-state namespace is not available here right now.");
        if (j !== null && j !== z.bindingId)
          throw Oe(we.VIEW_STALE, "The App view-state namespace changed before this enable was sent.");
        le($);
        const W = await de(ki.ENABLE, {
          viewToken: $,
          bindingId: z.bindingId
        }, M, null), P = wo(W);
        if (P.ok === !1)
          throw Oe(we.BAD_RESPONSE, P.error);
        if (!Ji(P.value, { viewToken: $, bindingId: z.bindingId }))
          throw Oe(we.VIEW_STALE, "This view-state enable reply answered a different view than the one that was enabled.");
        if (ne = { token: $, bindingId: z.bindingId, registrationId: P.value.registrationId }, o) throw Oe(we.RELEASED, "The App view-state controller was released.");
        if (F !== s || L.signal.aborted || !m.has(F))
          throw Oe(we.VIEW_STALE, "This view-state enable was voided before its reply arrived.");
        if (!B($))
          throw Oe(we.VIEW_STALE, "The document changed before this view-state enable reply arrived.");
        const ae = u.getContext();
        if (!ae || ae.slot !== "card" || ae.viewState?.bindingId !== z.bindingId || ae.viewState?.viewKind !== z.viewKind)
          throw Oe(we.VIEW_STALE, "The namespace changed before this view-state enable reply arrived.");
        if (ae.viewState?.available !== !0)
          throw Oe(we.UNAVAILABLE, "The App view-state namespace paused before this enable was confirmed.");
        const pe = _o(P.value.snapshot);
        if (pe.ok === !1)
          throw Oe(we.BAD_RESPONSE, pe.error);
        const se = re(z.viewKind, pe.value), ee = V($, z.bindingId, z.viewKind, P.value.registrationId, se);
        return d = ee, ne = null, ee.handle;
      } catch ($) {
        throw ne !== null && await oe(ne.token, ne.bindingId, ne.registrationId), $;
      } finally {
        m.delete(F);
      }
    } },
    dispose() {
      if (!o) {
        o = !0, s += 1, N(d, "disposed"), d = null;
        for (const q of m.values()) q.abort.abort();
        m.clear(), x(), K();
      }
    }
  };
}
function wb(u) {
  if (typeof u != "object" || u === null)
    throw Oe(we.INVALID_INPUT, "View-state set requires an object with an expected revision and a state.");
  const r = u.expectedRevision;
  if (!Number.isSafeInteger(r) || r < 0)
    throw Oe(we.INVALID_INPUT, "View-state set requires a non-negative safe-integer expected revision.");
  return r;
}
var Jg = /* @__PURE__ */ new WeakMap();
function $g(u, r) {
  Jg.set(u, r);
}
function Fg(u) {
  const r = Jg.get(u);
  return r ? r() : null;
}
function $l(u) {
  return typeof u == "object" && u !== null && !Array.isArray(u);
}
function tu(u) {
  const r = /* @__PURE__ */ new Set(), o = (d, m) => {
    if (m > 32) throw new Error("Input panel JSON exceeds the maximum depth of 32.");
    if (d === null || typeof d == "string" || typeof d == "boolean" || typeof d == "number" && Number.isFinite(d)) return d;
    if (typeof d != "object" || d === null) throw new Error("Input panel values must be valid JSON.");
    if (r.has(d)) throw new Error("Input panel values must not contain cycles.");
    const p = Object.getPrototypeOf(d);
    if (!Array.isArray(d) && p !== Object.prototype && p !== null)
      throw new Error("Input panel values must contain only JSON objects and arrays.");
    if (Object.getOwnPropertySymbols(d).length > 0) throw new Error("Input panel JSON must not contain symbol keys.");
    r.add(d);
    let y;
    if (Array.isArray(d)) {
      const S = [];
      for (let E = 0; E < d.length; E++) {
        if (!Object.prototype.hasOwnProperty.call(d, E)) throw new Error("Input panel JSON must not contain sparse arrays.");
        S.push(o(d[E], m + 1));
      }
      y = S;
    } else {
      const S = /* @__PURE__ */ Object.create(null);
      for (const E of Object.keys(d)) S[E] = o(d[E], m + 1);
      y = S;
    }
    return r.delete(d), y;
  }, s = JSON.stringify(o(u, 0));
  if (new TextEncoder().encode(s).byteLength > Ng)
    throw new Error(`Input panel JSON exceeds ${Ng} bytes.`);
  return JSON.parse(s);
}
function Pg(u) {
  if (!$l(u)) throw new Error("Input panel context must be an object.");
  for (const s of ["appId", "sessionId", "panelId", "instanceId"])
    if (typeof u[s] != "string" || !u[s].trim()) throw new Error(`Input panel context is missing ${s}.`);
  if (!Number.isSafeInteger(u.revision) || Number(u.revision) < 0) throw new Error("Input panel revision is invalid.");
  const r = u.presentationRevision === void 0 ? 0 : u.presentationRevision;
  if (!Number.isSafeInteger(r) || Number(r) < 0) throw new Error("Input panel presentation revision is invalid.");
  if (u.confirmId !== null && (typeof u.confirmId != "string" || !u.confirmId.trim()))
    throw new Error("Input panel confirmation identity is invalid.");
  if (!["pending", "confirmed", "rejected", "timeout", "aborted", "active"].includes(String(u.status)))
    throw new Error("Input panel status is invalid.");
  if (typeof u.retained != "boolean" || typeof u.title != "string" || typeof u.message != "string")
    throw new Error("Input panel context is missing its presentation fields.");
  const o = u.presentation === void 0 ? { height: null, collapsedHeight: 32, expanded: !0 } : u.presentation;
  if (!$l(o) || Object.keys(o).some((s) => s !== "height" && s !== "collapsedHeight" && s !== "expanded") || o.height !== null && (typeof o.height != "number" || !Number.isFinite(o.height) || o.height < 24 || o.height > 4096) || typeof o.collapsedHeight != "number" || !Number.isFinite(o.collapsedHeight) || o.collapsedHeight < 24 || o.collapsedHeight > 4096 || typeof o.expanded != "boolean")
    throw new Error("Input panel presentation is invalid.");
  return {
    appId: u.appId,
    sessionId: u.sessionId,
    panelId: u.panelId,
    instanceId: u.instanceId,
    revision: u.revision,
    presentationRevision: r,
    confirmId: u.confirmId,
    status: u.status,
    retained: u.retained,
    title: u.title,
    message: u.message,
    data: tu(u.data ?? null),
    requestedSchema: tu(u.requestedSchema ?? null),
    presentation: { height: o.height, collapsedHeight: o.collapsedHeight, expanded: o.expanded }
  };
}
function qr(u) {
  return { ...u, data: tu(u.data), requestedSchema: tu(u.requestedSchema), presentation: { ...u.presentation } };
}
function Ob(u) {
  if (!$l(u) || Object.keys(u).some((s) => s !== "height" && s !== "collapsedHeight" && s !== "expanded"))
    throw new TypeError("hana.inputPanel.setPresentation requires height, collapsedHeight, or expanded.");
  const r = Object.getPrototypeOf(u);
  if (r !== Object.prototype && r !== null || Object.getOwnPropertySymbols(u).length || Object.values(Object.getOwnPropertyDescriptors(u)).some((s) => !s.enumerable || !("value" in s)))
    throw new TypeError("Input panel presentation must be a plain JSON object with data fields.");
  const o = {};
  if (Object.prototype.hasOwnProperty.call(u, "height")) {
    if (u.height !== null && (typeof u.height != "number" || !Number.isFinite(u.height) || u.height < 24 || u.height > 4096)) throw new TypeError("Input panel height must be null or 24–4096.");
    o.height = u.height;
  }
  if (Object.prototype.hasOwnProperty.call(u, "collapsedHeight")) {
    if (typeof u.collapsedHeight != "number" || !Number.isFinite(u.collapsedHeight) || u.collapsedHeight < 24 || u.collapsedHeight > 4096) throw new TypeError("Input panel collapsedHeight must be 24–4096.");
    o.collapsedHeight = u.collapsedHeight;
  }
  if (Object.prototype.hasOwnProperty.call(u, "expanded")) {
    if (typeof u.expanded != "boolean") throw new TypeError("Input panel expanded must be boolean.");
    o.expanded = u.expanded;
  }
  if (!Object.keys(o).length) throw new TypeError("hana.inputPanel.setPresentation requires at least one field.");
  return o;
}
function Cb(u, r) {
  if (!$l(u) || !$l(u.presentation) || !Number.isSafeInteger(u.presentationRevision)) throw new Error("The input panel presentation response is invalid.");
  const o = Pg({ ...r, presentation: u.presentation, presentationRevision: u.presentationRevision });
  return { presentation: o.presentation, presentationRevision: o.presentationRevision };
}
function xb(u) {
  let r = null, o = 0, s = null, d = 0;
  const m = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Set(), y = () => {
    for (const A of p) A(r ? qr(r) : null);
  }, S = () => {
    r = null, o++;
    for (const A of m.values())
      clearTimeout(A.timeout), A.reject(new Error("The input panel binding was replaced."));
    m.clear(), y();
  }, E = (A) => {
    for (const x of m.values())
      clearTimeout(x.timeout), x.reject(new Error(A));
    m.clear();
  }, N = (A, x, K) => u({
    protocol: dt,
    version: ht,
    id: A.id,
    kind: "error",
    type: A.type,
    error: { code: x, message: K }
  });
  function g(A) {
    if (A.kind === "event" && A.type === $i.CONTEXT) {
      if (A.payload === null) S();
      else {
        let me;
        try {
          me = Pg(A.payload);
        } catch (Ee) {
          return S(), console.warn("[hana] invalid input panel context:", Ee), !0;
        }
        const J = r?.panelId === me.panelId && r.appId === me.appId && r.sessionId === me.sessionId && r.confirmId === me.confirmId && r.status === me.status && r.instanceId === me.instanceId && r.revision === me.revision;
        if (J && r && me.presentationRevision < r.presentationRevision) return !0;
        J || E("The input panel binding was replaced."), r = me, J || o++, y();
      }
      return !0;
    }
    if ((A.kind === "response" || A.kind === "error") && A.type === $i.PRESENTATION && A.id) {
      const me = m.get(A.id);
      if (!me) return !1;
      if (m.delete(A.id), clearTimeout(me.timeout), me.generation !== o)
        me.reject(new Error("The input panel binding was replaced."));
      else if (A.kind === "error") me.reject(new Error(A.error?.message || "The input panel presentation could not be updated."));
      else
        try {
          const J = Cb(A.payload, r);
          r && J.presentationRevision >= r.presentationRevision && (r = { ...r, ...J }, y()), me.resolve(J);
        } catch (J) {
          me.reject(J instanceof Error ? J : new Error("The input panel presentation response is invalid."));
        }
      return !0;
    }
    if (A.kind !== "request" || A.type !== $i.SUBMIT) return !1;
    if (!A.id) return !0;
    const x = A.payload, K = r;
    if (!$l(x) || !K || K.status !== "pending" || !K.confirmId || x.panelId !== K.panelId || x.instanceId !== K.instanceId || x.revision !== K.revision)
      return N(A, "INPUT_PANEL_STALE", "This request does not match the active input panel question."), !0;
    const B = s;
    if (!B && K.requestedSchema !== null)
      return N(A, "INPUT_PANEL_SUBMIT_UNHANDLED", "Register hana.inputPanel.onSubmit to provide this question’s answer."), !0;
    const le = o, be = {
      panelId: K.panelId,
      instanceId: K.instanceId,
      revision: K.revision
    };
    return Promise.resolve().then(() => B ? B(qr(K)) : null).then((me) => {
      if (o !== le) {
        N(A, "INPUT_PANEL_STALE", "The input panel changed before its answer was ready.");
        return;
      }
      u({
        protocol: dt,
        version: ht,
        id: A.id,
        kind: "response",
        type: A.type,
        payload: { ...be, value: tu(me) }
      });
    }).catch((me) => {
      N(A, "INPUT_PANEL_SUBMIT_FAILED", me instanceof Error ? me.message : "The input panel could not provide an answer.");
    }), !0;
  }
  return { api: {
    getContext: () => r ? qr(r) : null,
    onContextChanged(A) {
      return p.add(A), A(r ? qr(r) : null), () => {
        p.delete(A);
      };
    },
    onSubmit(A) {
      if (typeof A != "function") throw new TypeError("hana.inputPanel.onSubmit requires a function.");
      return s = A, () => {
        s === A && (s = null);
      };
    },
    async setPresentation(A) {
      const x = r, K = Ob(A);
      if (!x) throw new Error("The input panel is not ready.");
      const B = o, le = `input-panel-presentation:${x.panelId}:${x.instanceId}:${Date.now().toString(36)}:${++d}`;
      return new Promise((be, me) => {
        const J = setTimeout(() => {
          m.delete(le), me(new Error("The input panel presentation request timed out."));
        }, 1e4);
        m.set(le, { generation: B, resolve: be, reject: me, timeout: J });
        const Ee = (de) => {
          const re = m.get(le);
          re && (m.delete(le), clearTimeout(re.timeout), re.reject(de instanceof Error ? de : new Error("The input panel presentation request could not be delivered.")));
        };
        try {
          u({
            protocol: dt,
            version: ht,
            id: le,
            kind: "request",
            type: $i.PRESENTATION,
            payload: { panelId: x.panelId, instanceId: x.instanceId, revision: x.revision, presentationRevision: x.presentationRevision, presentation: K }
          }, Ee);
        } catch (de) {
          Ee(de);
        }
        if (o !== B) {
          const de = m.get(le);
          de && (m.delete(le), clearTimeout(de.timeout), de.reject(new Error("The input panel binding was replaced.")));
        }
      });
    }
  }, handleMessage: g, clear: S };
}
var Ca = class extends Error {
  name = "HanaPluginError";
  code;
  details;
  constructor(u) {
    super(u.message), this.code = u.code, this.details = u.details;
  }
}, Og = 0, uu = 60, Rb = 240;
function jb() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : (Og += 1, `hana-plugin-${Date.now()}-${Og}`);
}
function Db() {
  if (typeof window > "u")
    throw new Error("@hana/plugin-sdk requires a browser iframe window.");
  return window;
}
var Cg = "data-hana-theme-style";
async function Ub(u, r) {
  const o = await fetch(r, { credentials: "same-origin" });
  if (!o.ok)
    throw new Error(`hana theme stylesheet request failed with ${o.status}`);
  const s = await o.text(), d = u.head ?? u.documentElement;
  if (!d) throw new Error("hana theme stylesheet has nowhere to attach");
  let m = u.querySelector(`style[${Cg}]`);
  m || (m = u.createElement("style"), m.setAttribute(Cg, "")), m.textContent = s, d.appendChild(m);
}
function zb(u) {
  if (typeof u != "object" || u === null) return !1;
  const r = u;
  return ["light", "dark"].every((o) => {
    const s = r[o];
    return typeof s == "object" && s !== null && typeof s.theme == "string" && typeof s.cssUrl == "string";
  });
}
function Mb(u) {
  const r = new URLSearchParams(u.location.search), o = r.get("hana-theme-appearance"), s = r.get("hana-palette-light-theme"), d = r.get("hana-palette-light-css"), m = r.get("hana-palette-dark-theme"), p = r.get("hana-palette-dark-css");
  return {
    theme: r.get("hana-theme") ?? void 0,
    cssUrl: r.get("hana-css") ?? void 0,
    appearance: o === "light" || o === "dark" ? o : void 0,
    palettes: s && d && m && p ? { light: { theme: s, cssUrl: d }, dark: { theme: m, cssUrl: p } } : void 0
  };
}
function Wg(u, r = uu) {
  return typeof u != "number" || !Number.isFinite(u) ? r : Math.max(0, Math.min(Rb, Math.round(u)));
}
function ep({
  visible: u,
  maxFrameRate: r,
  slot: o,
  reason: s
}) {
  const d = u ? Wg(r) : 0, m = u && d > 0;
  return {
    visible: u,
    active: m,
    maxFrameRate: m ? d : 0,
    motion: m ? "full" : "paused",
    ...o === "page" || o === "widget" || o === "card" || o === "settings" || o === "function-panel" || o === "slot" ? { slot: o } : {},
    ...s ? { reason: s } : {}
  };
}
function qb(u) {
  const r = new URLSearchParams(u.location.search), o = r.get("hana-visible"), s = !(o === "0" || o === "false"), d = r.get("hana-max-fps"), m = d === null ? NaN : Number(d), p = Number.isFinite(m) ? m : uu;
  return ep({
    visible: s,
    maxFrameRate: p,
    reason: "initial"
  });
}
function Hb(u, r) {
  if (typeof u != "object" || u === null) return null;
  const o = u, s = typeof o.visible == "boolean" ? o.visible : r.visible, d = Wg(
    o.maxFrameRate,
    r.maxFrameRate > 0 ? r.maxFrameRate : uu
  ), m = typeof o.active == "boolean" ? o.active && s && d > 0 : s && d > 0, p = o.motion, y = p === "full" || p === "reduced" || p === "paused" ? p : m ? "full" : "paused", S = typeof o.slot == "string" ? o.slot : r.slot, E = typeof o.reason == "string" ? o.reason : r.reason;
  return {
    visible: s,
    active: m,
    maxFrameRate: m ? d : 0,
    motion: m ? y : "paused",
    ...S === "page" || S === "widget" || S === "card" || S === "settings" || S === "function-panel" || S === "slot" ? { slot: S } : {},
    ...E ? { reason: E } : {}
  };
}
function Lb(u, r) {
  if (typeof u != "object" || u === null) return null;
  const o = u.visible;
  return typeof o != "boolean" ? null : ep({
    visible: o,
    maxFrameRate: o && r.maxFrameRate > 0 ? r.maxFrameRate : uu,
    slot: r.slot,
    reason: "legacy-visibility"
  });
}
function Ib(u, r) {
  return u.visible === r.visible && u.active === r.active && u.maxFrameRate === r.maxFrameRate && u.motion === r.motion && u.slot === r.slot && u.reason === r.reason;
}
function Oo(u) {
  return {
    width: { ...u.width },
    height: { ...u.height }
  };
}
function xg(u) {
  if (typeof u != "object" || u === null) return null;
  const r = u;
  return r.mode === "fixed" ? typeof r.value != "number" || !Number.isFinite(r.value) ? null : { mode: "fixed", value: Math.round(r.value) } : r.mode === "flexible" ? typeof r.max != "number" || !Number.isFinite(r.max) ? null : { mode: "flexible", max: Math.round(r.max) } : r.mode === "unbounded" ? { mode: "unbounded" } : null;
}
function Bb(u) {
  if (typeof u != "object" || u === null) return null;
  const r = u, o = xg(r.width), s = xg(r.height);
  return !o || !s ? null : { width: o, height: s };
}
function Rg(u) {
  if (u === null) return null;
  if (typeof u == "string") return u;
}
function Vb(u) {
  if (typeof u != "object" || u === null || Array.isArray(u)) return;
  const r = u;
  if (eu(r.bindingId) && !(r.viewKind !== "compact" && r.viewKind !== "detached") && typeof r.available == "boolean")
    return { bindingId: r.bindingId, viewKind: r.viewKind, available: r.available };
}
function Gb(u) {
  if (typeof u != "object" || u === null || Array.isArray(u)) return null;
  const r = u, o = typeof r.appId == "string" && r.appId.trim() ? r.appId.trim() : null, s = r.slot, d = r.cardInstanceId;
  if (!o || s !== "card" && s !== "function-panel" && s !== "settings" && s !== "slot" && s !== "input-panel") return null;
  const m = Rg(r.embeddedSessionId), p = Rg(r.originSessionId), y = Zg(r.instanceKey);
  if (y === null) return null;
  const S = Vb(r.viewState), E = typeof d == "string" && !!d.trim();
  if (y !== void 0 && !E) return null;
  const N = {};
  return m !== void 0 && (N.embeddedSessionId = m), p !== void 0 && (N.originSessionId = p), y !== void 0 && (N.instanceKey = y), S !== void 0 && (N.viewState = S), s === "settings" || s === "input-panel" ? d === null ? { appId: o, slot: s, cardInstanceId: null, ...N } : null : E ? { appId: o, slot: s, cardInstanceId: d.trim(), ...N } : s !== "card" || d !== null || typeof r.embeddedSessionId != "string" || !r.embeddedSessionId.trim() ? null : { appId: o, slot: s, cardInstanceId: null, ...N };
}
function Co(u) {
  return {
    ...u,
    ...u.viewState ? { viewState: { ...u.viewState } } : {}
  };
}
function jg(u) {
  if (typeof u != "object" || u === null || Array.isArray(u)) return null;
  const r = u, o = typeof r.sessionId == "string" && r.sessionId.trim() ? r.sessionId : null, s = typeof r.sessionPath == "string" && r.sessionPath ? r.sessionPath : null;
  return !o || !s || r.title !== null && typeof r.title != "string" || r.agentId !== null && typeof r.agentId != "string" ? null : {
    sessionId: o,
    sessionPath: s,
    title: r.title,
    agentId: r.agentId
  };
}
function Yb(u) {
  if (typeof u != "object" || u === null || Array.isArray(u)) return null;
  const r = u, o = r.previous === null ? null : jg(r.previous), s = r.current === null ? null : jg(r.current);
  return r.previous !== null && o === null || r.current !== null && s === null || typeof r.timestamp != "number" || !Number.isFinite(r.timestamp) ? null : { previous: o, current: s, timestamp: r.timestamp };
}
function Xb(u) {
  if (typeof u != "object" || u === null || Array.isArray(u)) return null;
  const r = u;
  return typeof r.code != "string" || !r.code.trim() || typeof r.message != "string" || !r.message.trim() ? null : new Ca({ code: r.code, message: r.message });
}
function Qb(u) {
  return typeof u == "string" ? { url: u } : u;
}
function Kb(u) {
  return typeof u == "string" ? { text: u } : u;
}
function tp(u) {
  const r = Io(u.location.pathname || "");
  if (!r)
    throw new Error("App asset/API URL helper requires an App surface route under /api/apps/:appId/ui/ or a scoped service mount.");
  return r.appId;
}
function Zb(u, r) {
  if (!r || !["card", "function-panel", "settings", "slot"].includes(r.slot)) return !1;
  try {
    return tp(u) === r.appId;
  } catch {
    return !1;
  }
}
function kb(u) {
  if (typeof u != "string" || u.length === 0)
    throw new Error("Invalid plugin asset path.");
  if (u.includes("\\") || u.includes("\0") || /^[a-z][a-z0-9+.-]*:/i.test(u))
    throw new Error("Invalid plugin asset path.");
  const r = u.replace(/^\/+/, "");
  if (!r || r.startsWith("./"))
    throw new Error("Invalid plugin asset path.");
  const o = r.split("/");
  if (o.some((s) => !s || s === "." || s === ".." || s.startsWith(".")))
    throw new Error("Invalid plugin asset path.");
  return o.map((s) => encodeURIComponent(s)).join("/");
}
function Jb(u) {
  return new URLSearchParams(u.location.search).get("hana-asset-base") || null;
}
function $b(u, r) {
  const o = kb(r), s = Jb(u);
  if (!s)
    throw new Error(
      "hana.assets.url() requires the host-issued hana-asset-base query parameter: this page was not opened by the host with an asset base; hana.assets.url() only works inside a Hana app surface."
    );
  const d = new URL(s);
  return d.pathname = `${d.pathname.replace(/\/+$/, "")}/${o}`, d.toString();
}
function np(u) {
  return new URLSearchParams(u.location.search).get(B0) || null;
}
function Fb(u) {
  if (typeof u != "string" || u.length === 0)
    throw new Error("Invalid plugin API path.");
  const r = u.trim();
  if (!r || r.includes("\\") || r.includes("\0") || r.includes("#") || r.startsWith("//") || /^[a-z][a-z0-9+.-]*:/i.test(r))
    throw new Error("Invalid plugin API path.");
  const o = r.replace(/^\/+/, "");
  if (!o || o.startsWith("./") || o === "api/apps" || o.startsWith("api/apps/"))
    throw new Error("Invalid plugin API path. Use a route path relative to the current plugin.");
  const s = o.indexOf("?"), d = s >= 0 ? o.slice(0, s) : o;
  if (!d)
    throw new Error("Invalid plugin API path.");
  const m = d.split("/");
  for (const S of m) {
    if (!S) throw new Error("Invalid plugin API path.");
    let E;
    try {
      E = decodeURIComponent(S);
    } catch {
      throw new Error("Invalid plugin API path.");
    }
    if (E === "." || E === ".." || E.includes("/") || E.includes("\\"))
      throw new Error("Invalid plugin API path.");
  }
  const p = new URL(`http://hana.local/${o}`);
  return `${m.map((S) => encodeURIComponent(decodeURIComponent(S))).join("/")}${p.search}`;
}
function ap(u, r, o = !1) {
  const s = tp(u);
  let d = Fb(r);
  if (o && d.startsWith("_runtime/")) {
    const m = np(u);
    if (!m) throw new Error("hana.api.url for a managed service requires appSurfaceSession in the iframe URL.");
    const p = /^(_runtime\/[^/?]+)\/(.+)$/.exec(d);
    if (!p || p[2].startsWith("_surface/")) throw new Error("Invalid managed service API path.");
    d = `${p[1]}/_surface/${encodeURIComponent(m)}/${p[2]}`;
  }
  return `${u.location.origin}/api/apps/${encodeURIComponent(s)}/routes/${d}`;
}
function Pb(u, r, o, s) {
  const d = np(u);
  if (!d)
    throw new Error("hana.api.fetch requires appSurfaceSession in the iframe URL.");
  const m = u.fetch?.bind(u) ?? globalThis.fetch?.bind(globalThis);
  if (!m)
    throw new Error("hana.api.fetch requires window.fetch.");
  const p = o ?? {}, y = new Headers(p.headers);
  return y.set(I0, d), s && y.set("X-Hana-Document-Binding", s), m(ap(u, r), {
    ...p,
    headers: y
  });
}
function Wb(u) {
  try {
    const r = u.navigator;
    if (r.userActivation && typeof r.userActivation.isActive == "boolean")
      return r.userActivation.isActive === !0;
  } catch {
  }
  try {
    const r = u.event;
    return !!(r && r.isTrusted);
  } catch {
  }
  return !1;
}
function eE(u, r) {
  if (typeof r != "object" || r === null) return !1;
  const o = r;
  return u.kind === "global" ? o.kind === "global" : o.kind === "agent" && o.agentId === u.agentId;
}
function lp(u = {}) {
  const r = u.targetWindow ?? Db(), o = u.parentWindow ?? r.parent, s = qg(r, u.targetOrigin), d = u.requestTimeoutMs ?? 1e4, m = u.idFactory ?? jb, p = xb($), y = rb({
    targetWindow: r,
    post: $,
    // A host that rebound its bridge to this same document gets a fresh
    // handshake by re-announcing the ready the page already sent.
    reannounceReady: () => {
      oe && W(Te);
    }
  }), S = fb({
    request: Ne,
    post: $,
    targetWindow: r,
    currentView: y,
    requestTimeoutMs: d
  }), E = u.followHostTheme !== !1;
  let N = Mb(r), g = qb(r), H = null, A = null;
  const x = /* @__PURE__ */ new Set(), K = /* @__PURE__ */ new Set(), B = /* @__PURE__ */ new Set(), le = /* @__PURE__ */ new Set(), be = /* @__PURE__ */ new Set(), me = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new Set(), Ee = /* @__PURE__ */ new Set(), de = /* @__PURE__ */ new Set();
  let re = null, Se = null, ie = null, oe = !1, Te, V = !1, fe = !1, De = !1, q = Promise.resolve();
  const M = /* @__PURE__ */ new Map();
  let te = 1, j = null, F = null, L = null, G = !1;
  function ne(O) {
    if (!E || !O) return;
    const k = r.document;
    k && Ub(k, O).catch((I) => {
      if (u.onThemeError) {
        u.onThemeError(I);
        return;
      }
      console.error("[hana] failed to follow host theme", I);
    });
  }
  function $(O, k) {
    if (u.messageTransport) {
      const I = u.messageTransport.postMessage(O);
      I && I.catch(k ?? ((Z) => console.error("[hana] host message delivery failed", Z)));
    } else o.postMessage(O, s);
  }
  function b(O) {
    if (u.messageTransport) return u.messageTransport.onMessage(O);
    const k = (I) => {
      Hg(I, o, s) && O(I.data);
    };
    return r.addEventListener("message", k), () => r.removeEventListener("message", k);
  }
  function z(O, k) {
    const I = {
      protocol: dt,
      version: ht,
      kind: "event",
      type: O
    };
    k !== void 0 && (I.payload = k), $(I);
  }
  function W(O) {
    z("hana.ready", O);
  }
  function P(O) {
    const k = O instanceof Ca ? O : new Ca({
      code: "HOST_ERROR",
      message: O instanceof Error ? O.message : "Active session subscription failed."
    });
    let I = !1;
    for (const Z of de)
      if (Z.onError) {
        I = !0;
        try {
          Z.onError(k);
        } catch (ve) {
          console.error("[hana] active session error callback failed", ve);
        }
      }
    I || console.error("[hana] active session subscription failed", k);
  }
  function ae() {
    return de.size > 0 && !De && !fe;
  }
  function pe() {
    q = q.catch(() => {
    }).then(async () => {
      for (; V !== ae(); ) {
        if (ae()) {
          try {
            if (await ee(), (await Ne(zr.SUBSCRIBE)).subscribed !== !0) {
              V = !1, fe || P(new Ca({
                code: "HOST_ERROR",
                message: "The host did not establish the active session subscription."
              }));
              return;
            }
            V = !0;
          } catch (O) {
            V = !1, P(O);
            return;
          }
          continue;
        }
        try {
          await ee(), await Ne(zr.UNSUBSCRIBE);
        } catch (O) {
          P(O);
        }
        V = !1;
      }
    });
  }
  function se(O) {
    const k = r.document?.readyState;
    return k !== "loading" && k !== "interactive" ? Promise.resolve() : new Promise((I, Z) => {
      const ve = () => {
        r.clearTimeout(Et), r.removeEventListener("load", Be), r.removeEventListener("pagehide", $e);
      }, Be = () => {
        ve(), I();
      }, $e = () => {
        ve(), Z(new Ca({
          code: "SURFACE_UNAVAILABLE",
          message: "The App surface unloaded before interactive regions could be registered."
        }));
      }, Et = r.setTimeout(() => {
        ve(), Z(new Ca({
          code: "TIMEOUT",
          message: "The App document did not finish loading before interactive regions could be registered."
        }));
      }, O);
      r.addEventListener("load", Be), r.addEventListener("pagehide", $e);
    });
  }
  function ee(O) {
    return se(O ?? d).then(() => {
      W(Te);
    });
  }
  function ce(O) {
    const k = r.requestAnimationFrame?.bind(r), I = r.cancelAnimationFrame?.bind(r);
    if (k && I) {
      const ve = k(O);
      return () => I(ve);
    }
    const Z = r.setTimeout(() => {
      const ve = r.performance?.now?.() ?? Date.now();
      O(ve);
    }, Math.max(1, Math.round(1e3 / Math.max(g.maxFrameRate, uu))));
    return () => r.clearTimeout(Z);
  }
  function We() {
    j && (j(), j = null);
  }
  function rt() {
    j || M.size === 0 || !g.active || g.maxFrameRate <= 0 || (j = ce((O) => {
      if (j = null, !g.active || g.maxFrameRate <= 0) return;
      const k = 1e3 / g.maxFrameRate;
      if (F !== null && O >= F && O - F < k) {
        rt();
        return;
      }
      F = O;
      const I = Array.from(M.entries());
      for (const [Z, ve] of I)
        if (M.delete(Z))
          try {
            ve(O);
          } catch (Be) {
            r.setTimeout(() => {
              throw Be;
            }, 0);
          }
      rt();
    }));
  }
  function Yt(O) {
    if (!Ib(g, O)) {
      g = O;
      for (const k of B) k({ ...g });
      if (!g.active || g.maxFrameRate <= 0) {
        We();
        return;
      }
      rt();
    }
  }
  function an(O) {
    if (typeof O == "object" && O !== null && O.protocol === void 0 && O.type === "visibility-changed") {
      const Z = Lb(
        O.payload,
        g
      );
      Z && Yt(Z);
      return;
    }
    const k = Fi(O);
    if (!k.ok) return;
    const I = k.value;
    if (!y.handleHostMessage(I) && !S.handleHostMessage(I)) {
      if (p.handleMessage(I)) {
        I.type === $i.CONTEXT && I.payload === null && oe && W(Te);
        return;
      }
      if (I.kind === "request" && I.type === "hana.document.view-request") {
        const Z = typeof I.payload == "object" && I.payload !== null ? I.payload : null, ve = Z && typeof Z.requestId == "string" ? Z.requestId : "", Be = Z && typeof Z.documentId == "string" ? Z.documentId : "", $e = Z && typeof Z.viewId == "string" ? Z.viewId : "", Et = Z?.revision, qt = Z && typeof Z.method == "string" ? Z.method.trim() : "";
        if (!ve || !Be || !$e || !qt || qt.length > 128 || !Number.isSafeInteger(Et) || Number(Et) < 0) {
          $({
            protocol: dt,
            version: ht,
            id: I.id,
            kind: "error",
            type: I.type,
            error: { code: "DOCUMENT_VIEW_REQUEST_INVALID", message: "Invalid document view request." }
          });
          return;
        }
        if (!ie) {
          $({
            protocol: dt,
            version: ht,
            id: I.id,
            kind: "error",
            type: I.type,
            error: { code: "DOCUMENT_VIEW_REQUEST_UNHANDLED", message: "The document view cannot handle this request." }
          });
          return;
        }
        const St = Z?.payload, Ra = ie;
        Promise.resolve().then(() => Ra({
          requestId: ve,
          documentId: Be,
          viewId: $e,
          revision: Et,
          method: qt,
          ...Object.prototype.hasOwnProperty.call(Z, "payload") ? { payload: St } : {}
        })).then((gn) => {
          $({ protocol: dt, version: ht, id: I.id, kind: "response", type: I.type, payload: gn });
        }, (gn) => {
          $({
            protocol: dt,
            version: ht,
            id: I.id,
            kind: "error",
            type: I.type,
            error: { code: "DOCUMENT_VIEW_REQUEST_FAILED", message: gn instanceof Error ? gn.message : "Document view request failed." }
          });
        });
        return;
      }
      if (I.kind === "request" && I.type === "hana.document.request") {
        const Z = I.payload, ve = typeof Z == "object" && Z !== null ? Z : null, Be = ve && typeof ve.requestId == "string" ? ve.requestId : "", $e = ve?.kind, Et = ve?.revision;
        if (!Be || !["save", "prepareClose", "revert", "undo", "redo"].includes(String($e)) || !Number.isSafeInteger(Et)) {
          $({
            protocol: dt,
            version: ht,
            id: I.id,
            kind: "error",
            type: I.type,
            error: { code: "DOCUMENT_REQUEST_INVALID", message: "Invalid document request." }
          });
          return;
        }
        if (!Se) {
          $({
            protocol: dt,
            version: ht,
            id: I.id,
            kind: "error",
            type: I.type,
            error: { code: "DOCUMENT_REQUEST_UNHANDLED", message: "The document editor cannot handle this request." }
          });
          return;
        }
        const qt = {
          requestId: Be,
          kind: $e,
          revision: Et
        };
        Promise.resolve(Se(qt)).then((St) => {
          $({ protocol: dt, version: ht, id: I.id, kind: "response", type: I.type, payload: St });
        }, (St) => {
          $({
            protocol: dt,
            version: ht,
            id: I.id,
            kind: "error",
            type: I.type,
            error: { code: "DOCUMENT_REQUEST_FAILED", message: St instanceof Error ? St.message : "Document request failed." }
          });
        });
        return;
      }
      if (I.kind === "request" && I.type === Ie.UI_ACTION) {
        const Z = r.document, ve = Z ? Xg(Z, I.payload, Zb(r, A)) : { ok: !1, code: "UI_ACTION_DOCUMENT_UNAVAILABLE", error: "No document is available." };
        ve.ok === !0 ? $({
          protocol: dt,
          version: ht,
          id: I.id,
          kind: "response",
          type: Ie.UI_ACTION,
          payload: ve.result
        }) : $({
          protocol: dt,
          version: ht,
          id: I.id,
          kind: "error",
          type: Ie.UI_ACTION,
          error: { code: ve.code, message: ve.error, ...ve.result ? { details: ve.result } : {} }
        });
        return;
      }
      if (I.kind === "event") {
        if (I.type === "hana.document.binding") {
          const Z = I.payload, ve = typeof Z == "object" && Z !== null ? Z.access : null;
          re = typeof ve?.bindingId == "string" && ve.bindingId ? ve.bindingId : null;
          return;
        }
        if (I.type === Kl.THEME_CHANGED) {
          if (typeof I.payload != "object" || I.payload === null) return;
          const Z = I.payload, ve = typeof Z.theme == "string" ? Z.theme : N.theme, Be = typeof Z.theme == "string" && Z.theme !== N.theme;
          N = {
            theme: ve,
            cssUrl: typeof Z.cssUrl == "string" ? Z.cssUrl : N.cssUrl,
            appearance: Z.appearance === "light" || Z.appearance === "dark" ? Z.appearance : Be ? void 0 : N.appearance,
            palettes: zb(Z.palettes) ? Z.palettes : Be ? void 0 : N.palettes
          };
          for (const $e of x) $e({ ...N });
          ne(N.cssUrl);
          return;
        }
        if (I.type === Kl.SURFACE_ENVELOPE_CHANGED) {
          const Z = Bb(I.payload);
          if (!Z) return;
          H = Z;
          for (const ve of K) ve(Oo(H));
          return;
        }
        if (I.type === Kl.SURFACE_RUNTIME_CHANGED) {
          const Z = Hb(I.payload, g);
          Z && Yt(Z);
          return;
        }
        if (I.type === P0.CONTEXT) {
          const Z = I.payload === null ? null : Gb(I.payload);
          if (I.payload !== null && Z === null) return;
          const ve = Z?.appId !== A?.appId || Z?.slot !== A?.slot || Z?.cardInstanceId !== A?.cardInstanceId || Z?.instanceKey !== A?.instanceKey || Z?.embeddedSessionId !== A?.embeddedSessionId || Z?.originSessionId !== A?.originSessionId || Z?.viewState?.bindingId !== A?.viewState?.bindingId || Z?.viewState?.viewKind !== A?.viewState?.viewKind || Z?.viewState?.available !== A?.viewState?.available;
          if (y.applySurfaceContext(Z === null ? null : { appId: Z.appId, cardInstanceId: Z.cardInstanceId, instanceKey: Z.instanceKey ?? null }), A = Z, ve)
            for (const Be of le) Be(A ? Co(A) : null);
          return;
        }
        if (I.type === _g.ACTIVE_CHANGED) {
          if (fe) return;
          const Z = Yb(I.payload);
          if (!Z) return;
          for (const ve of de) ve.callback(Z);
          return;
        }
        if (I.type === _g.ERROR) {
          const Z = Xb(I.payload);
          if (!Z) return;
          V = !1, fe = !0, P(Z), pe();
          return;
        }
        if (I.type === Kl.STORAGE_CHANGED) {
          if (typeof I.payload != "object" || I.payload === null) return;
          const Z = I.payload.keys, ve = Array.isArray(Z) ? Z.filter((Be) => typeof Be == "string") : [];
          for (const Be of be) Be(ve.slice());
          return;
        }
        if (I.type === V0.CHANGED) {
          if (typeof I.payload != "object" || I.payload === null) return;
          const Z = I.payload, ve = Z.keys, Be = Array.isArray(ve) ? ve.filter(($e) => typeof $e == "string") : [];
          for (const $e of me)
            eE($e.scope, Z.scope) && $e.callback(Be.slice());
          return;
        }
        if (I.type === Kl.PANEL_EVENT) {
          if (typeof I.payload != "object" || I.payload === null) return;
          const Z = I.payload, ve = typeof Z.sectionId == "string" ? Z.sectionId : null, Be = Z.kind;
          if (!ve || Be !== "select" && Be !== "action" && Be !== "toggle") return;
          const $e = {
            sectionId: ve,
            kind: Be,
            ...typeof Z.itemId == "string" ? { itemId: Z.itemId } : {},
            ...typeof Z.checked == "boolean" ? { checked: Z.checked } : {}
          };
          for (const Et of J) Et($e);
          return;
        }
        if (I.type === Kl.PANEL_REFRESH)
          for (const Z of Ee) Z();
      }
    }
  }
  b(an), r.addEventListener("pagehide", (O) => {
    p.clear(), De = !0, pe(), O?.persisted === !1 && (G = !0, y.dispose(), L?.dispose(), S.dispose());
  }), r.addEventListener("pageshow", () => {
    De && (De = !1, pe());
  });
  function Ne(O, k, I = {}) {
    const Z = m(), ve = I.timeoutMs ?? d;
    return new Promise((Be, $e) => {
      let Et = () => {
      };
      const qt = () => {
        Et(), r.clearTimeout(Ra);
      }, St = (ja) => {
        const Pl = Fi(ja);
        if (!Pl.ok) return;
        const pn = Pl.value;
        pn.id !== Z || pn.type !== O || (pn.kind === "response" && (qt(), Be(pn.payload)), pn.kind === "error" && pn.error && (qt(), $e(new Ca(pn.error))));
      }, Ra = r.setTimeout(() => {
        qt(), $e(new Ca({
          code: "TIMEOUT",
          message: `Plugin host request timed out: ${O}.`
        }));
      }, ve), gn = {
        protocol: dt,
        version: ht,
        id: Z,
        kind: "request",
        type: O
      };
      k !== void 0 && (gn.payload = k);
      try {
        Et = b(St), $(gn, (ja) => {
          qt(), $e(ja);
        });
      } catch (ja) {
        qt(), $e(ja);
      }
    });
  }
  function Qe(O) {
    return {
      get(k, I) {
        return Ne(kl.GET, { scope: O, key: k }, I);
      },
      getAll(k) {
        return Ne(kl.GET_ALL, { scope: O }, k);
      },
      set(k, I, Z) {
        return Ne(kl.SET, { scope: O, key: k, value: I }, Z);
      },
      delete(k, I) {
        return Ne(kl.DELETE, { scope: O, key: k }, I);
      },
      keys(k) {
        return Ne(kl.KEYS, { scope: O }, k);
      },
      onChanged(k) {
        if (O.kind === "agent" && !O.agentId)
          throw new Error(
            "hana.storage.agent() with no agentId cannot subscribe with onChanged — a subscription outlives any single request, so pass an explicit agentId to subscribe to a stable scope."
          );
        const I = { scope: O, callback: k };
        return me.add(I), () => {
          me.delete(I);
        };
      }
    };
  }
  const Xt = {
    ready(O) {
      oe = !0, Te = O, W(O);
    },
    inputPanel: p.api,
    assets: {
      url(O) {
        return $b(r, O);
      }
    },
    api: {
      url(O) {
        return ap(r, O, !0);
      },
      fetch(O, k) {
        return Pb(r, O, k, re);
      }
    },
    ui: {
      resize(O) {
        z(Ie.UI_RESIZE, O);
      }
    },
    theme: {
      getSnapshot() {
        return { ...N };
      },
      subscribe(O) {
        return x.add(O), O({ ...N }), () => {
          x.delete(O);
        };
      }
    },
    envelope: {
      getSnapshot() {
        return H ? Oo(H) : null;
      },
      subscribe(O) {
        return K.add(O), O(H ? Oo(H) : null), () => {
          K.delete(O);
        };
      }
    },
    lifecycle: {
      getSnapshot() {
        return { ...g };
      },
      subscribe(O) {
        return B.add(O), O({ ...g }), () => {
          B.delete(O);
        };
      }
    },
    cards: {
      open(O, k) {
        if (typeof O != "string" || !O.trim())
          return Promise.reject(new TypeError("hana.cards.open requires a non-empty declared card ID."));
        let I;
        if (k !== void 0) {
          if (typeof k != "object" || k === null || Array.isArray(k))
            return Promise.reject(new TypeError("hana.cards.open options must be an object."));
          if (Object.keys(k).some((ve) => ve !== "instanceKey"))
            return Promise.reject(new TypeError("hana.cards.open options accepts only instanceKey."));
          const Z = Zg(k.instanceKey);
          if (Z === null)
            return Promise.reject(new TypeError("hana.cards.open instanceKey must be a non-empty string of at most 256 code units without NUL."));
          I = Z;
        }
        return Ne(Kg.OPEN, {
          cardId: O.trim(),
          ...I === void 0 ? {} : { instanceKey: I }
        });
      }
    },
    surface: {
      getContext() {
        return A ? Co(A) : null;
      },
      onContextChanged(O) {
        return le.add(O), O(A ? Co(A) : null), () => {
          le.delete(O);
        };
      },
      setInteractiveRegions(O, k) {
        const I = G0({ regions: O });
        return I.ok === !1 ? Promise.reject(new TypeError(I.error)) : oe ? se(k?.timeoutMs ?? d).then(() => (W(Te), Ne(Do.SET_INTERACTIVE_REGIONS, I.value, k))) : Ne(Do.SET_INTERACTIVE_REGIONS, I.value, k);
      }
    },
    sessions: {
      getActive(O) {
        return ee(O?.timeoutMs).then(() => Ne(zr.GET_ACTIVE, void 0, O));
      },
      focus(O, k) {
        return !O || typeof O.sessionId != "string" || !O.sessionId.trim() ? Promise.reject(new TypeError("hana.sessions.focus requires a non-empty sessionId.")) : ee(k?.timeoutMs).then(() => Ne(
          zr.FOCUS,
          { sessionId: O.sessionId.trim() },
          k
        ));
      },
      onActiveChanged(O, k) {
        const I = { callback: O, onError: k };
        return fe = !1, de.add(I), pe(), () => {
          de.delete(I) && pe();
        };
      }
    },
    performance: {
      requestAnimationFrame(O) {
        const k = te;
        return te += 1, M.set(k, O), rt(), k;
      },
      cancelAnimationFrame(O) {
        M.delete(O), M.size === 0 && We();
      }
    },
    host: {
      request: Ne
    },
    chrome: S.api,
    toast: {
      show(O, k) {
        return Ne(Ie.TOAST_SHOW, O, k);
      }
    },
    external: {
      open(O, k) {
        return Ne(Ie.EXTERNAL_OPEN, Qb(O), k);
      }
    },
    clipboard: {
      writeText(O, k) {
        return Ne(
          Ie.CLIPBOARD_WRITE_TEXT,
          Kb(O),
          k
        );
      }
    },
    resources: {
      open(O, k) {
        return Ne(Ie.RESOURCE_OPEN, O, k);
      },
      pick(O = {}, k) {
        return Ne(Ie.RESOURCE_PICK, O, k);
      },
      saveFile(O, k) {
        return Ne(Ie.RESOURCE_SAVE_FILE, O, k);
      },
      requestAccess(O, k) {
        return Ne(
          Ie.RESOURCE_REQUEST_ACCESS,
          O,
          k
        );
      }
    },
    document: {
      getContext(O) {
        return Ne("hana.document.get-context", void 0, O);
      },
      read(O) {
        return Ne("hana.document.read", void 0, O);
      },
      reportStatus(O, k) {
        return Ne("hana.document.report-status", O, k);
      },
      open(O, k) {
        return Ne("hana.document.open", O, k);
      },
      rebind(O, k) {
        return Ne("hana.document.rebind", O, k);
      },
      openDrop(O, k) {
        if (O.defaultPrevented) return Promise.resolve(null);
        const I = O.dataTransfer?.getData("application/x-hana-file-drag") || "";
        if (I) return Ne("hana.document.open-drop", { dragId: I }, k);
        const Z = Array.from(O.dataTransfer?.files || []);
        return Z.length !== 1 ? Promise.resolve(null) : Ne("hana.document.open-drop", { file: Z[0] }, k);
      },
      onRequest(O) {
        return Se = O, () => {
          Se === O && (Se = null);
        };
      },
      onViewRequest(O) {
        return ie = O, () => {
          ie === O && (ie = null);
        };
      }
    },
    state: {
      get(O, k) {
        const I = typeof O == "string" && O ? { key: O } : {};
        return Ne(Ie.STATE_GET, I, k);
      },
      set(O, k, I) {
        const Z = typeof O == "string" ? { key: O, value: k } : { state: O };
        return Ne(Ie.STATE_SET, Z, I);
      }
    },
    storage: {
      get(O, k) {
        return Ne(Ie.STORAGE_GET, { key: O }, k);
      },
      getAll(O) {
        return Ne(Ie.STORAGE_GET_ALL, {}, O);
      },
      set(O, k, I) {
        return Ne(Ie.STORAGE_SET, { key: O, value: k }, I);
      },
      delete(O, k) {
        return Ne(Ie.STORAGE_DELETE, { key: O }, k);
      },
      onChanged(O) {
        return be.add(O), () => {
          be.delete(O);
        };
      },
      global: Qe({ kind: "global" }),
      agent(O) {
        return Qe({ kind: "agent", agentId: O });
      }
    },
    emit(O, k, I, Z) {
      const ve = {
        name: O,
        userGesture: Wb(r)
      };
      return arguments.length >= 2 && (ve.payload = k), typeof I == "string" && I.trim() && (ve.to = I.trim()), Ne(Ie.EMIT, ve, Z);
    },
    track(O, k, I) {
      const Z = { name: O };
      return arguments.length >= 2 && (Z.payload = k), Ne(Ie.TRACK, Z, I);
    },
    panel: {
      set(O, k) {
        return Ne(Ie.PANEL_SET, O, k);
      },
      onEvent(O) {
        return J.add(O), () => {
          J.delete(O);
        };
      },
      onRefresh(O) {
        return Ee.add(O), () => {
          Ee.delete(O);
        };
      }
    }
  };
  return $g(Xt, () => G ? null : (L ??= _b({
    request: Ne,
    currentView: y,
    getContext: () => A,
    subscribeContext: (O) => (le.add(O), () => {
      le.delete(O);
    }),
    requestTimeoutMs: d
  }), L.api)), Xt;
}
var Dg = null;
function ye() {
  return Dg ??= lp(), Dg;
}
var ip = {
  ready(u) {
    return ye().ready(u);
  },
  inputPanel: {
    getContext() {
      return ye().inputPanel.getContext();
    },
    onContextChanged(u) {
      return ye().inputPanel.onContextChanged(u);
    },
    onSubmit(u) {
      return ye().inputPanel.onSubmit(u);
    },
    setPresentation(u) {
      return ye().inputPanel.setPresentation(u);
    }
  },
  assets: {
    url(u) {
      return ye().assets.url(u);
    }
  },
  api: {
    url(u) {
      return ye().api.url(u);
    },
    fetch(u, r) {
      return ye().api.fetch(u, r);
    }
  },
  ui: {
    resize(u) {
      return ye().ui.resize(u);
    }
  },
  theme: {
    getSnapshot() {
      return ye().theme.getSnapshot();
    },
    subscribe(u) {
      return ye().theme.subscribe(u);
    }
  },
  envelope: {
    getSnapshot() {
      return ye().envelope.getSnapshot();
    },
    subscribe(u) {
      return ye().envelope.subscribe(u);
    }
  },
  lifecycle: {
    getSnapshot() {
      return ye().lifecycle.getSnapshot();
    },
    subscribe(u) {
      return ye().lifecycle.subscribe(u);
    }
  },
  cards: {
    open(u, r) {
      return ye().cards.open(u, r);
    }
  },
  surface: {
    getContext() {
      return ye().surface.getContext();
    },
    onContextChanged(u) {
      return ye().surface.onContextChanged(u);
    },
    setInteractiveRegions(u, r) {
      return ye().surface.setInteractiveRegions(u, r);
    }
  },
  sessions: {
    getActive(u) {
      return ye().sessions.getActive(u);
    },
    focus(u, r) {
      return ye().sessions.focus(u, r);
    },
    onActiveChanged(u, r) {
      return ye().sessions.onActiveChanged(u, r);
    }
  },
  performance: {
    requestAnimationFrame(u) {
      return ye().performance.requestAnimationFrame(u);
    },
    cancelAnimationFrame(u) {
      return ye().performance.cancelAnimationFrame(u);
    }
  },
  host: {
    request(u, r, o) {
      return ye().host.request(u, r, o);
    }
  },
  chrome: {
    set(u, r) {
      return ye().chrome.set(u, r);
    },
    onAction(u) {
      return ye().chrome.onAction(u);
    },
    registerScrollSource(u) {
      return ye().chrome.registerScrollSource(u);
    }
  },
  toast: {
    show(u, r) {
      return ye().toast.show(u, r);
    }
  },
  external: {
    open(u, r) {
      return ye().external.open(u, r);
    }
  },
  clipboard: {
    writeText(u, r) {
      return ye().clipboard.writeText(u, r);
    }
  },
  resources: {
    open(u, r) {
      return ye().resources.open(u, r);
    },
    pick(u, r) {
      return ye().resources.pick(u, r);
    },
    saveFile(u, r) {
      return ye().resources.saveFile(u, r);
    },
    requestAccess(u, r) {
      return ye().resources.requestAccess(u, r);
    }
  },
  document: {
    getContext(u) {
      return ye().document.getContext(u);
    },
    read(u) {
      return ye().document.read(u);
    },
    reportStatus(u, r) {
      return ye().document.reportStatus(u, r);
    },
    open(u, r) {
      return ye().document.open(u, r);
    },
    rebind(u, r) {
      return ye().document.rebind(u, r);
    },
    openDrop(u, r) {
      return ye().document.openDrop(u, r);
    },
    onRequest(u) {
      return ye().document.onRequest(u);
    },
    onViewRequest(u) {
      return ye().document.onViewRequest(u);
    }
  },
  state: {
    get(u, r) {
      return ye().state.get(u, r);
    },
    set(u, r, o) {
      return ye().state.set(u, r, o);
    }
  },
  storage: {
    get(u, r) {
      return ye().storage.get(u, r);
    },
    getAll(u) {
      return ye().storage.getAll(u);
    },
    set(u, r, o) {
      return ye().storage.set(u, r, o);
    },
    delete(u, r) {
      return ye().storage.delete(u, r);
    },
    onChanged(u) {
      return ye().storage.onChanged(u);
    },
    get global() {
      return ye().storage.global;
    },
    agent(u) {
      return ye().storage.agent(u);
    }
  },
  emit(u, r, o, s) {
    return ye().emit(u, r, o, s);
  },
  track(u, r, o) {
    return ye().track(u, r, o);
  },
  panel: {
    set(u, r) {
      return ye().panel.set(u, r);
    },
    onEvent(u) {
      return ye().panel.onEvent(u);
    },
    onRefresh(u) {
      return ye().panel.onRefresh(u);
    }
  }
};
$g(ip, () => Fg(ye()));
function Br(u) {
  return u.hanaAppWindow;
}
function mn(u) {
  const r = Br(u);
  if (!r) throw Object.assign(new Error("This App surface is not an App-owned native window."), { code: "APP_WINDOW_UNAVAILABLE" });
  return r;
}
function tE(u) {
  return (typeof window < "u" ? Br(u()) : void 0)?.onDocumentAction?.((o) => {
    const s = Xg(u().document, o, !0);
    if (s.ok === !1) throw Object.assign(new Error(s.error), { code: s.code });
    return s.result;
  }), {
    getContext: () => mn(u()).getContext(),
    getDroppedResources: (o) => {
      const s = mn(u());
      return s.getDroppedResources ? s.getDroppedResources([...o]) : Promise.reject(Object.assign(new Error("Update Hana to import dropped local resources."), { code: "APP_SDK_HOST_UNSUPPORTED" }));
    },
    request: (o) => mn(u()).request(o),
    onRequest: (o) => mn(u()).onRequest(o),
    onContextChanged: (o) => mn(u()).onContextChanged(o),
    onInspect: (o) => {
      const s = mn(u());
      if (!s.onInspect) throw Object.assign(new Error("Update Hana to register App window inspection."), { code: "APP_SDK_HOST_UNSUPPORTED" });
      return s.onInspect(o);
    },
    registerInspectionSurface: (o, s) => {
      const d = mn(u());
      if (!d.registerInspectionSurface) throw Object.assign(new Error("Update Hana to register App inspection surfaces."), { code: "APP_SDK_HOST_UNSUPPORTED" });
      return d.registerInspectionSurface(o, s);
    },
    control: (o) => mn(u()).control(o),
    close: () => mn(u()).close()
  };
}
var nE = /* @__PURE__ */ new Set([
  "hana.app-surface.mount",
  "hana.app-surface.action",
  "hana.app-surface.native",
  Ie.TOAST_SHOW,
  Ie.EXTERNAL_OPEN,
  Ie.CLIPBOARD_WRITE_TEXT,
  Ie.RESOURCE_OPEN,
  Ie.RESOURCE_PICK,
  Ie.RESOURCE_SAVE_FILE,
  Ie.RESOURCE_REQUEST_ACCESS,
  Ie.STATE_GET,
  Ie.STATE_SET,
  Ie.PANEL_SET,
  Ie.EMIT,
  Ie.TRACK,
  ...Object.values(kl),
  ...Object.values(Kg),
  Do.SET_INTERACTIVE_REGIONS,
  "hana.document.get-context",
  "hana.document.read",
  "hana.document.report-status",
  "hana.document.open",
  "hana.document.rebind",
  "hana.document.open-drop"
]);
function up() {
  if (typeof window > "u") throw new Error("@hana/app-sdk/ui requires a browser App iframe.");
  return window;
}
function aE(u) {
  if (!Io(u.location?.pathname ?? ""))
    throw new Error("@hana/app-sdk/ui requires an App surface route under /api/apps/:appId/ui/ or a scoped service mount.");
}
function lE(u) {
  if (!nE.has(u))
    throw new Error(`@hana/app-sdk/ui does not expose host request type: ${u}`);
}
function iE(u) {
  return {
    get global() {
      return u().storage.global;
    },
    agent(r) {
      return u().storage.agent(r);
    }
  };
}
function uE(u, r = up, o = {}) {
  return {
    window: tE(r),
    surfaces: {
      onEvent(s, d) {
        if (typeof s != "string" || !s.trim() || s.length > 256 || typeof d != "function")
          throw new TypeError("surfaces.onEvent requires a surface id and a listener.");
        return mn(r()).onMessage((m) => {
          const p = Fi(m);
          if (!p.ok || p.value.kind !== "event" || p.value.type !== "hana.app-surface.event") return;
          const y = p.value.payload;
          if (!y || typeof y != "object" || Array.isArray(y)) return;
          const S = y;
          S.surfaceId !== s || typeof S.type != "string" || !S.type.trim() || d({ surfaceId: s, type: S.type, ...S.payload === void 0 ? {} : { payload: S.payload } });
        });
      }
    },
    appEvents: {
      on(s, d) {
        if (typeof s != "string" || !s.trim() || s.length > 128 || typeof d != "function") throw new TypeError("appEvents.on requires an event name and a listener.");
        const m = r(), p = Io(m.location?.pathname ?? "");
        if (!p)
          throw new Error("@hana/app-sdk/ui requires an App surface route under /api/apps/:appId/ui/ or a scoped service mount.");
        const y = p.appId, S = (A) => {
          const x = Fi(A);
          if (!x.ok || x.value.kind !== "event" || x.value.type !== "hana.app.event") return;
          const K = x.value.payload;
          K?.source !== `app:${y}` || K.type !== s || !K.payload || typeof K.payload != "object" || Array.isArray(K.payload) || d(K.payload);
        }, E = o.messageTransport ?? Br(m);
        if (E) return E.onMessage(S);
        const N = o.parentWindow ?? m.parent, g = qg(m, o.targetOrigin), H = (A) => {
          Hg(A, N, g) && S(A.data);
        };
        return m.addEventListener("message", H), () => m.removeEventListener("message", H);
      }
    },
    instances: {
      onChanged(s) {
        return mn(r()).onMessage((d) => {
          if (!d || typeof d != "object") return;
          const m = d;
          if (m.protocol !== dt || m.version !== ht || m.kind !== "event" || m.type !== "hana.app-instance.changed") return;
          const p = m.payload;
          p && typeof p.instanceId == "string" && typeof p.revision == "number" && Number.isSafeInteger(p.revision) && typeof p.state == "string" && s({ instanceId: p.instanceId, revision: p.revision, state: p.state });
        });
      }
    },
    environments: {
      onChanged(s) {
        if (typeof s != "function") throw new TypeError("environments.onChanged requires a listener.");
        return mn(r()).onMessage((d) => {
          const m = Fi(d);
          if (!m.ok || m.value.kind !== "event" || m.value.type !== "hana.app-environment.changed") return;
          const p = m.value.payload;
          p && typeof p.environmentId == "string" && typeof p.revision == "number" && Number.isSafeInteger(p.revision) && typeof p.state == "string" && s({ environmentId: p.environmentId, revision: p.revision, state: p.state });
        });
      }
    },
    ready(s) {
      return u().ready(s);
    },
    inputPanel: {
      getContext() {
        return u().inputPanel.getContext();
      },
      onContextChanged(s) {
        return u().inputPanel.onContextChanged(s);
      },
      onSubmit(s) {
        return u().inputPanel.onSubmit(s);
      },
      setPresentation(s) {
        return u().inputPanel.setPresentation(s);
      }
    },
    assets: { url(s) {
      return u().assets.url(s);
    } },
    api: {
      url(s) {
        return u().api.url(s);
      },
      fetch(s, d) {
        return u().api.fetch(s, d);
      }
    },
    ui: { resize(s) {
      return u().ui.resize(s);
    } },
    theme: {
      getSnapshot() {
        return u().theme.getSnapshot();
      },
      subscribe(s) {
        return u().theme.subscribe(s);
      }
    },
    envelope: {
      getSnapshot() {
        return u().envelope.getSnapshot();
      },
      subscribe(s) {
        return u().envelope.subscribe(s);
      }
    },
    lifecycle: {
      getSnapshot() {
        return u().lifecycle.getSnapshot();
      },
      subscribe(s) {
        return u().lifecycle.subscribe(s);
      }
    },
    cards: { open(s, d) {
      return u().cards.open(s, d);
    } },
    surface: {
      setInteractiveRegions(s, d) {
        return u().surface.setInteractiveRegions(s, d);
      },
      getContext() {
        return u().surface.getContext();
      },
      onContextChanged(s) {
        return u().surface.onContextChanged(s);
      }
    },
    sessions: {
      getActive(s) {
        return u().sessions.getActive(s);
      },
      focus(s, d) {
        return u().sessions.focus(s, d);
      },
      onActiveChanged(s, d) {
        return u().sessions.onActiveChanged(s, d);
      }
    },
    performance: {
      requestAnimationFrame(s) {
        return u().performance.requestAnimationFrame(s);
      },
      cancelAnimationFrame(s) {
        return u().performance.cancelAnimationFrame(s);
      }
    },
    chrome: {
      set(s, d) {
        return u().chrome.set(s, d);
      },
      onAction(s) {
        return u().chrome.onAction(s);
      },
      registerScrollSource(s) {
        return u().chrome.registerScrollSource(s);
      }
    },
    host: {
      request(s, d, m) {
        return lE(s), u().host.request(s, d, m);
      }
    },
    toast: { show(s, d) {
      return u().toast.show(s, d);
    } },
    external: { open(s, d) {
      return u().external.open(s, d);
    } },
    clipboard: { writeText(s, d) {
      return u().clipboard.writeText(s, d);
    } },
    resources: {
      open(s, d) {
        return u().resources.open(s, d);
      },
      pick(s, d) {
        return u().resources.pick(s, d);
      },
      saveFile(s, d) {
        return u().resources.saveFile(s, d);
      },
      requestAccess(s, d) {
        return u().resources.requestAccess(s, d);
      }
    },
    document: {
      getContext(s) {
        return u().document.getContext(s);
      },
      read(s) {
        return u().document.read(s);
      },
      reportStatus(s, d) {
        return u().document.reportStatus(s, d);
      },
      open(s, d) {
        return u().document.open(s, d);
      },
      rebind(s, d) {
        return u().document.rebind(s, d);
      },
      openDrop(s, d) {
        return u().document.openDrop(s, d);
      },
      onRequest(s) {
        return u().document.onRequest(s);
      },
      onViewRequest(s) {
        return u().document.onViewRequest(s);
      }
    },
    state: {
      get(s, d) {
        return u().state.get(s, d);
      },
      set(s, d, m) {
        return u().state.set(s, d, m);
      }
    },
    storage: iE(u),
    emit(s, d, m, p) {
      return u().emit(s, d, m, p);
    },
    track(s, d, m) {
      return u().track(s, d, m);
    },
    panel: {
      set(s, d) {
        return u().panel.set(s, d);
      },
      onEvent(s) {
        return u().panel.onEvent(s);
      },
      onRefresh(s) {
        return u().panel.onRefresh(s);
      }
    },
    viewState: {
      enable(s) {
        const d = Fg(u());
        return d ? d.enable(s) : Promise.reject(Object.assign(new Error("App view-state recovery is unavailable on this surface."), { code: "VIEW_STATE_UNAVAILABLE" }));
      }
    }
  };
}
var rE, Rt = uE(() => {
  const u = up();
  aE(u);
  const r = Br(u);
  return r ? rE ??= lp({ targetWindow: u, messageTransport: r }) : ip;
});
function qn(...u) {
  return u.filter(Boolean).join(" ");
}
const Ug = {
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
}, sE = {
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
function cE({ mode: u = "inherit", theme: r, className: o, style: s, children: d, "data-testid": m = "hana-plugin-theme", ...p }) {
  const y = typeof r == "string" ? r : void 0, S = oE(u, r);
  return h.jsx("div", { ...p, "data-testid": m, className: qn("hana-plugin-theme", o), "data-hana-theme-mode": u, "data-hana-theme": u === "hana" ? y : void 0, style: { ...S, ...s }, children: d });
}
function oE(u, r) {
  if (u === "inherit")
    return {};
  const o = fE(u, r), s = {};
  for (const [d, m] of Object.entries(sE)) {
    const p = o?.[d];
    p && (s[m] = p);
  }
  return s;
}
function fE(u, r) {
  if (typeof r == "string")
    return Ug[r];
  if (r)
    return r;
  if (u === "hana")
    return Ug["warm-paper"];
}
const Ce = Y.forwardRef(function({ variant: r = "secondary", size: o = "md", loading: s = !1, iconLeft: d, iconRight: m, disabled: p, className: y, children: S, type: E = "button", ...N }, g) {
  return h.jsxs("button", { ...N, ref: g, type: E, disabled: p || s, className: qn("hana-plugin-button", `hana-plugin-button-${r}`, `hana-plugin-button-${o}`, s && "hana-plugin-button-loading", y), children: [s ? h.jsx("span", { className: "hana-plugin-spinner", "aria-hidden": !0 }) : d, S && h.jsx("span", { className: "hana-plugin-button-label", children: S }), !s && m] });
});
Y.forwardRef(function({ label: r, size: o = "md", variant: s = "ghost", className: d, children: m, type: p = "button", ...y }, S) {
  return h.jsx("button", { ...y, ref: S, type: p, "aria-label": r, title: y.title || r, className: qn("hana-plugin-icon-button", `hana-plugin-icon-button-${o}`, `hana-plugin-icon-button-${s}`, d), children: m });
});
const xt = Y.forwardRef(function({ label: r, hint: o, error: s, id: d, className: m, inputClassName: p, ...y }, S) {
  const E = Y.useId(), N = d || E;
  return h.jsx(rp, { label: r, hint: o, error: s, htmlFor: N, className: m, children: h.jsx("input", { ...y, ref: S, id: N, "aria-invalid": !!s, className: qn("hana-plugin-input", p) }) });
});
Y.forwardRef(function({ label: r, hint: o, error: s, id: d, className: m, textareaClassName: p, rows: y = 4, ...S }, E) {
  const N = Y.useId(), g = d || N;
  return h.jsx(rp, { label: r, hint: o, error: s, htmlFor: g, className: m, children: h.jsx("textarea", { ...S, ref: E, id: g, rows: y, "aria-invalid": !!s, className: qn("hana-plugin-textarea", p) }) });
});
Y.forwardRef(function({ checked: r, onChange: o, label: s, disabled: d, className: m, onClick: p, type: y = "button", ...S }, E) {
  const N = typeof s == "string" ? s : S["aria-label"];
  return h.jsxs("span", { className: qn("hana-plugin-switch-wrap", m), children: [h.jsx("button", { ...S, ref: E, type: y, role: "switch", "aria-checked": r, "aria-label": N, disabled: d, className: qn("hana-plugin-switch", r && "hana-plugin-switch-on"), onClick: (g) => {
    p?.(g), !g.defaultPrevented && !d && o?.(!r);
  }, children: h.jsx("span", { className: "hana-plugin-switch-thumb", "aria-hidden": !0 }) }), s && h.jsx("span", { className: "hana-plugin-switch-label", children: s })] });
});
function rp({ label: u, hint: r, error: o, htmlFor: s, className: d, children: m }) {
  return h.jsxs("div", { className: qn("hana-plugin-field", d), children: [u && h.jsx("label", { className: "hana-plugin-field-label", htmlFor: s, children: u }), r && h.jsx("div", { className: "hana-plugin-field-hint", children: r }), m, o && h.jsx("div", { className: "hana-plugin-field-error", children: o })] });
}
function Mn({ title: u, description: r, actions: o, footer: s, children: d, className: m, ...p }) {
  return h.jsxs("section", { ...p, className: qn("hana-plugin-card", m), children: [(u || r || o) && h.jsxs("header", { className: "hana-plugin-card-header", children: [h.jsxs("div", { className: "hana-plugin-card-heading", children: [u && h.jsx("h2", { className: "hana-plugin-card-title", children: u }), r && h.jsx("p", { className: "hana-plugin-card-description", children: r })] }), o && h.jsx("div", { className: "hana-plugin-card-actions", children: o })] }), h.jsx("div", { className: "hana-plugin-card-body", children: d }), s && h.jsx("footer", { className: "hana-plugin-card-footer", children: s })] });
}
function nl({ icon: u, title: r, description: o, action: s, className: d, ...m }) {
  return h.jsxs("div", { ...m, className: qn("hana-plugin-empty", d), children: [u && h.jsx("div", { className: "hana-plugin-empty-icon", children: u }), h.jsx("div", { className: "hana-plugin-empty-title", children: r }), o && h.jsx("div", { className: "hana-plugin-empty-description", children: o }), s && h.jsx("div", { className: "hana-plugin-empty-action", children: s })] });
}
const sp = (u) => u.replace(/^\/+/, "");
async function cp(u) {
  const r = await u.text();
  try {
    return JSON.parse(r);
  } catch {
    return { ok: !1, stage: "http", message: `HTTP ${u.status}：${(r || "无响应体").slice(0, 200)}` };
  }
}
async function Ye(u) {
  const r = await Rt.api.fetch(sp(u));
  return cp(r);
}
async function Pe(u, r) {
  const o = await Rt.api.fetch(sp(u), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(r)
  });
  return cp(o);
}
async function zg(u, r, o = 3e4) {
  let s;
  try {
    return await Promise.race([
      Pe(u, r),
      new Promise((d, m) => {
        s = setTimeout(() => m(new Error(`请求超时（${o / 1e3}s）`)), o);
      })
    ]);
  } finally {
    s && clearTimeout(s);
  }
}
async function tl(u, r = {}) {
  const o = r.timeoutMs ?? 48e4, s = Date.now();
  for (; Date.now() - s < o; ) {
    await new Promise((m) => setTimeout(m, 5e3));
    const d = await Ye(u).catch(() => null);
    if (d && d.running === !1 && (!r.kind || d.kind === r.kind) && d.lastResult) return d.lastResult;
  }
  return { ok: !1, stage: "timeout", message: `等待超时（${Math.round(o / 6e4)} 分钟），任务可能仍在运行；稍后刷新查看结果。` };
}
async function zo(u = 480 * 1e3) {
  return tl("/api/import/status", { timeoutMs: u });
}
function op(u, r) {
  const o = /^#\s+(.+?)（([^（）]+),\s*(\d{4}[^)）]*)）$/.exec(String(u || "").trim());
  return { title: o ? o[1] : r, meta: o ? `${o[2].trim()} · ${o[3]}` : "" };
}
function dE({ value: u, onChange: r, options: o }) {
  return /* @__PURE__ */ h.jsx("select", { className: "native-sel", value: u, onChange: (s) => r(s.currentTarget.value), children: o.map((s) => /* @__PURE__ */ h.jsx("option", { value: s.value, children: s.label }, s.value)) });
}
function nu({ id: u, value: r, onChange: o, options: s, placeholder: d, allowCustom: m = !1 }) {
  return /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
    /* @__PURE__ */ h.jsx(
      "input",
      {
        className: "native-sel",
        list: u,
        value: r,
        placeholder: d,
        onChange: (p) => {
          const y = p.currentTarget.value;
          (m || s.some((S) => S.value === y)) && o(y);
        },
        onKeyDown: (p) => p.stopPropagation()
      }
    ),
    /* @__PURE__ */ h.jsx("datalist", { id: u, children: s.map((p) => /* @__PURE__ */ h.jsx("option", { value: p.value, children: p.label }, p.value)) })
  ] });
}
async function fp(u) {
  const r = await Ye(nn(`篇目/${u}`)).catch(() => null);
  return r && r.ok ? String(r.content || "").split(/\r?\n/, 1)[0] : "";
}
const nn = (u) => `/api/file?path=${encodeURIComponent(u)}`, hE = [
  { id: "home", label: "首页" },
  { id: "use", label: "取用" },
  { id: "library", label: "结构库" },
  { id: "todo", label: "待办" },
  { id: "settings", label: "设置" }
], mE = {
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
    { id: "types", label: "类型裁决" },
    { id: "import-fail", label: "导入失败" }
  ]
};
function gE(u) {
  return u.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Oa(u) {
  return gE(u).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
}
function pE(u) {
  const r = String(u || "").split(/\r?\n/), o = [];
  let s = 0, d = !1;
  const m = () => {
    d && (o.push("</ul>"), d = !1);
  };
  for (; s < r.length; ) {
    const p = r[s];
    if (/^\|.*\|/.test(p) && s + 1 < r.length && /^\|\s*-+/.test(r[s + 1])) {
      m();
      const y = p.split("|").slice(1, -1).map((E) => E.trim());
      s += 2;
      const S = [];
      for (; s < r.length && /^\|/.test(r[s]); )
        S.push(r[s].split("|").slice(1, -1).map((E) => E.trim())), s++;
      o.push("<table><thead><tr>" + y.map((E) => `<th>${Oa(E)}</th>`).join("") + "</tr></thead><tbody>");
      for (const E of S) o.push("<tr>" + E.map((N) => `<td>${Oa(N)}</td>`).join("") + "</tr>");
      o.push("</tbody></table>");
      continue;
    }
    /^###\s/.test(p) ? (m(), o.push(`<h3>${Oa(p.slice(4))}</h3>`)) : /^##\s/.test(p) ? (m(), o.push(`<h2>${Oa(p.slice(3))}</h2>`)) : /^#\s/.test(p) ? (m(), o.push(`<h1>${Oa(p.slice(2))}</h1>`)) : /^>\s?/.test(p) ? (m(), o.push(`<blockquote>${Oa(p.replace(/^>\s?/, ""))}</blockquote>`)) : /^-\s/.test(p) || /^\*\s/.test(p) ? (d || (o.push("<ul>"), d = !0), o.push(`<li>${Oa(p.slice(2))}</li>`)) : /^---+\s*$/.test(p) ? (m(), o.push("<hr>")) : p.trim() === "" ? m() : (m(), o.push(`<p>${Oa(p)}</p>`)), s++;
  }
  return m(), o.join(`
`);
}
function au({ md: u }) {
  return /* @__PURE__ */ h.jsx("div", { className: "doc", dangerouslySetInnerHTML: { __html: pE(u) } });
}
async function xa(u) {
  const r = await Ye(`/api/list?dir=${encodeURIComponent(u)}`);
  return r.ok ? (r.items || []).filter((o) => !o.isDirectory && o.name.endsWith(".md") && o.name !== "_模板.md").map((o) => o.name) : [];
}
function Bo(u) {
  const r = String(u || "").split(/\r?\n/), o = [];
  let s = !1;
  for (const d of r) {
    if (d.startsWith("## ")) {
      s = d.includes("复核队列");
      continue;
    }
    if (s && d.startsWith("|") && !/^\|\s*-+/.test(d)) {
      const m = d.split("|").slice(1, -1).map((p) => p.trim());
      m[0] && m[0] !== "疑似对" && o.push({ pair: m[0], evidence: m[1] || "", date: m[2] || "", decision: m[3] || "" });
    }
  }
  return o;
}
async function vE() {
  const [u, r, o, s] = await Promise.all([
    xa("篇目"),
    xa("写作模型"),
    Ye(nn("标签库.md")),
    Ye("/api/import/failures").catch(() => ({ ok: !1, items: [] }))
  ]), d = o.ok ? Bo(o.content) : [];
  return {
    papers: u.length,
    models: r.length,
    queuePending: d.filter((m) => !m.decision).length,
    failures: (s.items || []).length
  };
}
function yE() {
  const u = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), [r, o] = Y.useState({ id: "", title: "", authors: "", year: "", venue: "", textType: "", score: "9", rationale: "", date: u, recordedBy: "" }), [s, d] = Y.useState(null), [m, p] = Y.useState([]), y = (E, N) => o((g) => ({ ...g, [E]: N }));
  Y.useEffect(() => {
    let E = !0;
    return (async () => {
      const N = await Ye("/api/list?dir=篇目").catch(() => null);
      if (!N?.ok) return;
      const g = (N.items || []).map((A) => A.name).filter((A) => A.endsWith(".md") && !A.startsWith("_")), H = await Promise.all(g.map(async (A) => {
        const x = await Ye(nn(`篇目/${A}`)).catch(() => null), K = x?.ok ? String(x.content || "").split(/\r?\n/, 1)[0] : "", B = /^#\s+(.+?)（([^（）]+),\s*(\d{4})[^)）]*）$/.exec(String(K || "").trim()), le = A.replace(/\.md$/, "");
        return { id: le, title: B ? B[1] : le, label: B ? `${B[1]}（${B[2].trim()} · ${B[3]}）` : le, authors: B ? B[2].trim() : "", year: B ? B[3] : "" };
      }));
      E && p(H);
    })(), () => {
      E = !1;
    };
  }, []);
  async function S() {
    const E = {
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
    }, N = await Pe("/api/tool/commit_anchor", { anchor: E });
    d(N), N.ok && Rt.toast.show({ message: "评分已落盘", type: "success" });
  }
  return /* @__PURE__ */ h.jsxs("div", { className: "form", children: [
    /* @__PURE__ */ h.jsx("p", { className: "hint", children: "你自己的总分和理由是整条评分链的起点：只增不改，理由至少 10 字，后续归纳评分指引全靠它。不录也不阻断——只是模型分数永远无锚点参照。" }),
    /* @__PURE__ */ h.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ h.jsx(
        nu,
        {
          id: "cb-score-entry",
          value: "",
          placeholder: m.length ? `输入过滤或选择篇目（${m.length} 篇，选中即预填）` : "读取篇目中…",
          onChange: (E) => {
            const N = m.find((g) => g.id === E);
            N && o((g) => ({ ...g, id: N.id, title: N.title, authors: N.authors, year: N.year }));
          },
          options: m.map((E) => ({ value: E.id, label: E.label }))
        }
      ),
      /* @__PURE__ */ h.jsx("span", { className: "hint", children: "也可不选直接手填（锚点可以是尚未拆解的文献）。" })
    ] }),
    /* @__PURE__ */ h.jsxs("div", { className: "grid2", children: [
      /* @__PURE__ */ h.jsx(xt, { label: "篇目 id（slug-年）", value: r.id, onChange: (E) => y("id", E.currentTarget.value), placeholder: "sample-2020" }),
      /* @__PURE__ */ h.jsx(xt, { label: "文本类型（你判）", value: r.textType, onChange: (E) => y("textType", E.currentTarget.value), placeholder: "论证型 / 阐释型…" }),
      /* @__PURE__ */ h.jsx(xt, { label: "标题", value: r.title, onChange: (E) => y("title", E.currentTarget.value) }),
      /* @__PURE__ */ h.jsx(xt, { label: "作者", value: r.authors, onChange: (E) => y("authors", E.currentTarget.value) }),
      /* @__PURE__ */ h.jsx(xt, { label: "年份", value: r.year, onChange: (E) => y("year", E.currentTarget.value) }),
      /* @__PURE__ */ h.jsx(xt, { label: "出处（可空）", value: r.venue, onChange: (E) => y("venue", E.currentTarget.value) }),
      /* @__PURE__ */ h.jsx(xt, { label: "总分 1-10", value: r.score, onChange: (E) => y("score", E.currentTarget.value) }),
      /* @__PURE__ */ h.jsx(xt, { label: "日期", value: r.date, onChange: (E) => y("date", E.currentTarget.value) })
    ] }),
    /* @__PURE__ */ h.jsx(xt, { label: "理由（≥10 字）", value: r.rationale, onChange: (E) => y("rationale", E.currentTarget.value) }),
    /* @__PURE__ */ h.jsx(xt, { label: "录入者", value: r.recordedBy, onChange: (E) => y("recordedBy", E.currentTarget.value) }),
    /* @__PURE__ */ h.jsx(Ce, { variant: "primary", onClick: S, children: "提交评分" }),
    s && /* @__PURE__ */ h.jsx("pre", { className: s.ok ? "ok" : "err", children: s.ok ? `已写入：${s.file || "(dry run)"}` : JSON.stringify(s, null, 2) })
  ] });
}
const bE = (u) => {
  if (u.evidence.startsWith("语义相近")) return 3;
  const r = /共现\s*(\d+)\s*篇/.exec(u.evidence);
  return r && Number(r[1]) >= 3 ? 2 : 1;
};
function EE(u) {
  const r = /* @__PURE__ */ new Map(), o = (y) => {
    let S = y;
    for (; (r.get(S) || S) !== S; ) S = r.get(S) || S;
    return S;
  }, s = (y) => y.split(" vs ").filter(Boolean);
  for (const y of u) for (const S of s(y.pair)) r.has(S) || r.set(S, S);
  for (const y of u) {
    if (bE(y) < 2) continue;
    const [S, E] = s(y.pair);
    if (S && E) {
      const N = o(S), g = o(E);
      N !== g && r.set(N, g);
    }
  }
  const d = /* @__PURE__ */ new Map(), m = [];
  for (const y of u) {
    const [S, E] = s(y.pair);
    if (S && E && o(S) === o(E)) {
      const N = o(S);
      let g = d.get(N);
      g || (g = { rows: [], labels: [] }, d.set(N, g)), g.rows.push(y);
    } else
      m.push(y);
  }
  for (const y of d.values()) {
    const S = /* @__PURE__ */ new Set();
    for (const E of y.rows) for (const N of s(E.pair)) S.add(N);
    y.labels = [...S];
  }
  return { clusters: [...d.values()].sort((y, S) => {
    const E = y.rows.map((g) => g.date).sort()[0] || "", N = S.rows.map((g) => g.date).sort()[0] || "";
    return E !== N ? E < N ? -1 : 1 : S.rows.length - y.rows.length;
  }), weak: m };
}
const xo = (u) => u.labels.slice().sort().join("|");
function SE({ tick: u, onChanged: r }) {
  const [o, s] = Y.useState([]), [d, m] = Y.useState({}), [p, y] = Y.useState(""), [S, E] = Y.useState(!1), [N, g] = Y.useState(""), [H, A] = Y.useState(!1), [x, K] = Y.useState({}), [B, le] = Y.useState(null), [be, me] = Y.useState(!1), [J, Ee] = Y.useState("");
  Y.useEffect(() => {
    let j = !1;
    return (async () => {
      const F = await Ye("/api/model/status").catch(() => null);
      if (j || !F || !F.running || F.kind !== "propose") return;
      E(!0), y("AI 语义查重进行中（接管切页前的任务）…");
      const L = await tl("/api/model/status", { kind: "propose", timeoutMs: 180 * 1e3 });
      j || (y(L.ok ? `已入队 ${L.queued?.length || 0} 对` : L.message || "未产出建议"), L.ok && await de(), E(!1));
    })(), () => {
      j = !0;
    };
  }, []);
  const de = Y.useCallback(async () => {
    const j = await Ye(nn("标签库.md"));
    s(j.ok ? Bo(j.content) : []);
  }, []);
  Y.useEffect(() => {
    de();
  }, [de, u]);
  async function re(j, F, L) {
    const G = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), ne = d[j] || `裁决执行：${j}`, $ = await Pe("/api/tool/apply_tag_merge", { mergedLabel: F, target: L, date: G, evidence: ne });
    y($.ok ? `已执行：${F} → ${$.now}` : $.message || JSON.stringify($)), $.ok && (await de(), r?.());
  }
  async function Se(j) {
    const F = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), L = d[j] || "", G = await Pe("/api/tool/apply_pair_independent", { pair: j, date: F, reason: L });
    y(G.ok ? `已判定独立，两标签都保留：${j}` : G.message || JSON.stringify(G)), G.ok && (await de(), r?.());
  }
  const ie = (j, F, L) => K((G) => ({ ...G, [j]: L(G[j] || { groups: [], pool: F.slice(), sel: [] }) }));
  async function oe(j, F) {
    const L = xo(F);
    le(j), y("");
    try {
      const G = await Pe("/api/model/propose-partition", {
        labels: F.labels,
        pairs: F.rows.map(($) => ({ pair: $.pair, evidence: $.evidence }))
      });
      if (!G.started) {
        y(G.message || "发起失败"), le(null);
        return;
      }
      const ne = await tl("/api/model/status", { kind: "partition", timeoutMs: 180 * 1e3 });
      if (ne.stage === "timeout") {
        y(ne.message), le(null);
        return;
      }
      if (ne.ok && Array.isArray(ne.groups)) {
        const $ = ne.groups.filter((b) => Array.isArray(b) && b.length > 0).map((b) => ({ target: b[0], members: b.slice() }));
        ie(L, F.labels, (b) => ({ ...b, groups: $, pool: [], sel: [] })), y(ne.message ? `分族提案已给出（${ne.message}）——点选标签可调整分组` : "分族提案已给出，核对后提交");
      } else
        y(ne.message || "未产出分族提案");
    } catch (G) {
      y(`请求失败：${String(G?.message || G)}`);
    }
    le(null);
  }
  async function Te(j, F) {
    const L = xo(F), G = x[L] || { groups: [], pool: F.labels.slice(), sel: [] };
    if (G.pool.length > 0) {
      y(`还有 ${G.pool.length} 个标签未分组（可「全部各自成组」）`);
      return;
    }
    if (!G.groups.length) {
      y("先分组再提交");
      return;
    }
    const ne = G.groups.flatMap((ee) => ee.members), $ = F.labels.filter((ee) => !ne.includes(ee)), b = ne.filter((ee, ce) => ne.indexOf(ee) !== ce);
    if ($.length || b.length) {
      y(`分组与标签清单不符 — 缺：${$.join("、") || "无"}；重复：${b.join("、") || "无"}`);
      return;
    }
    for (const ee of G.groups) {
      const ce = String(ee.target ?? "");
      if (ee.members.length > 0 && !ce.trim()) {
        y("有组的存活名为空——补填，或把该组成员移回池");
        return;
      }
      if (ce.includes(" vs ")) {
        y("存活名不能包含「 vs 」（会破坏对的解析）");
        return;
      }
    }
    me(!0), y("");
    const z = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), W = /* @__PURE__ */ new Map();
    G.groups.forEach((ee, ce) => ee.members.forEach((We) => W.set(We, ce)));
    let P = 0, ae = 0, pe = 0, se = "";
    try {
      for (const ee of G.groups) {
        if (ee.members.length < 2) continue;
        const ce = String(ee.target);
        for (const We of ee.members) {
          if (We === ce) continue;
          Ee(`正在合并：「${We}」→「${ce}」…`);
          const rt = await zg("/api/tool/apply_tag_merge", {
            mergedLabel: We,
            target: ce,
            date: z,
            evidence: `相关组分区提交：组内「${We}」并入「${ce}」`
          });
          if (!rt.ok) {
            se = `合并「${We}→${ce}」失败：${rt.message || JSON.stringify(rt)}`;
            break;
          }
          P++;
        }
        if (se) break;
      }
      if (!se)
        for (const ee of F.rows) {
          const [ce, We] = ee.pair.split(" vs ");
          if (W.get(ce) === W.get(We)) continue;
          Ee(`正在判定独立：${ee.pair}…`);
          const rt = await zg("/api/tool/apply_pair_independent", {
            pair: ee.pair,
            date: z,
            reason: "相关组分区提交：分属不同组"
          });
          if (rt.ok) {
            ae++;
            continue;
          }
          const Yt = String(rt.message || "");
          if (Yt.includes("已有裁决") || Yt.includes("无此对")) {
            pe++;
            continue;
          }
          se = `判定独立「${ee.pair}」失败：${Yt || JSON.stringify(rt)}`;
          break;
        }
    } catch (ee) {
      se = `提交中断（网络/桥接异常）：${String(ee?.message || ee)}`;
    }
    y(se ? `${se}（此前已完成：${P} 合并、${ae} 独立；直接再点提交即可续跑——已并入的标签重试幂等，不会重复执行）` : `已提交本组裁决：${P} 合并、${ae} 独立${pe ? `、${pe} 对已随合并关闭` : ""}`);
    try {
      await de();
    } catch {
    }
    r?.(), se || K((ee) => ({ ...ee, [L]: { groups: [], pool: F.labels.slice(), sel: [] } })), Ee(""), me(!1);
  }
  async function V() {
    E(!0), y(""), g("co");
    let j = "";
    try {
      const F = await Pe("/api/tool/suggest_tag_merges", {});
      if (j = F.ok ? F.written ? `共现入队 ${F.written} 对` : "共现无新候选" : `共现扫描失败：${F.message || JSON.stringify(F)}`, F.ok)
        try {
          await de();
        } catch {
        }
      g("semantic");
      const L = await Pe("/api/model/propose-merges", {});
      if (!L.started)
        y(`${j}；语义查重未启动：${L.message || "发起失败"}`);
      else {
        const G = await tl("/api/model/status", { kind: "propose", timeoutMs: 18e4 });
        if (G.stage === "timeout")
          y(`${j}；语义查重${G.message || "等待超时"}`);
        else {
          const ne = G.ok ? G.message || (G.queued?.length ? `语义入队 ${G.queued.length} 对：${G.queued.join("；")}` : "语义未找到新对") : G.message || "语义查重未产出建议";
          if (y(`${j}；${ne}`), G.ok && G.queued?.length)
            try {
              await de();
            } catch {
            }
        }
      }
    } catch (F) {
      y(`${j ? `${j}；` : ""}查重中断：${String(F?.message || F)}`);
    }
    g(""), E(!1), r?.();
  }
  const fe = o.filter((j) => !j.decision), De = o.filter((j) => !!j.decision), { clusters: q, weak: M } = Y.useMemo(() => EE(fe), [o]), te = (j) => /* @__PURE__ */ h.jsx(Mn, { title: j.pair, description: `${j.date} 进队 · ${j.evidence}`, children: j.decision ? /* @__PURE__ */ h.jsxs("p", { className: "decided", children: [
    "已裁决：",
    j.decision
  ] }) : /* @__PURE__ */ h.jsxs("div", { className: "queue-actions", children: [
    [j.pair.split(" vs ")[0], j.pair.split(" vs ")[1]].filter(Boolean).map((F, L, G) => /* @__PURE__ */ h.jsx("div", { className: "queue-op", children: /* @__PURE__ */ h.jsxs(Ce, { onClick: () => re(j.pair, F, G[1 - L]), children: [
      "「",
      F,
      "」并入「",
      G[1 - L],
      "」"
    ] }) }, F)),
    /* @__PURE__ */ h.jsx("div", { className: "queue-op", children: /* @__PURE__ */ h.jsx(Ce, { onClick: () => Se(j.pair), children: "判定独立（都保留）" }) }),
    /* @__PURE__ */ h.jsx(xt, { label: "依据（可空，判定独立时建议填）", value: d[j.pair] || "", onChange: (F) => {
      const L = F.currentTarget.value;
      m((G) => ({ ...G, [j.pair]: L }));
    } })
  ] }) }, j.pair);
  return /* @__PURE__ */ h.jsxs("div", { children: [
    /* @__PURE__ */ h.jsxs("p", { className: "hint", children: [
      fe.length > 0 && /* @__PURE__ */ h.jsxs("b", { children: [
        fe.length,
        " 对待裁决　"
      ] }),
      "疑似重复（或高度共现）的标签对会进到这里。两种处理：合并（留一个名字，另一个成为它的别名）或判定独立（两个都留）；互相牵连的对归在同一组里批量处理。所有操作只新增记录，不改动原始拆解。 本页管标签层（同一个论证动作的多个名字）；把标签家族立成类型在下一页——两页可并行，不必等这页清空。"
    ] }),
    p && /* @__PURE__ */ h.jsx("p", { className: p.startsWith("已") ? "ok" : "err", children: p }),
    /* @__PURE__ */ h.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ h.jsx(Ce, { variant: "primary", disabled: S, onClick: () => {
        V();
      }, children: N === "co" ? "共现扫描中…" : N === "semantic" ? "语义查重中…" : "一键查重" }),
      /* @__PURE__ */ h.jsx("span", { className: "hint", children: "一键查重：先扫共现（秒出），再跑 AI 语义（约半分钟，标签集未变自动跳过）；结果都进下方待裁决，每对来源写在证据里。" })
    ] }),
    o.length === 0 && /* @__PURE__ */ h.jsx(nl, { title: "暂无待裁决标签", description: "篇目积累出相近标签后，候选会自动出现在这里。" }),
    q.map((j, F) => {
      const L = xo(j), G = x[L] || { groups: [], pool: j.labels.slice(), sel: [] }, ne = /* @__PURE__ */ new Map();
      G.groups.forEach((z, W) => z.members.forEach((P) => ne.set(P, W)));
      const $ = G.groups.reduce((z, W) => z + (W.members.includes(W.target) ? Math.max(0, W.members.length - 1) : W.members.length), 0), b = j.rows.filter((z) => {
        const [W, P] = z.pair.split(" vs ");
        return ne.get(W) !== ne.get(P);
      }).length;
      return /* @__PURE__ */ h.jsxs("div", { className: "cluster", children: [
        /* @__PURE__ */ h.jsxs("p", { className: "hint queue-group", children: [
          /* @__PURE__ */ h.jsxs("b", { children: [
            "相关组 ",
            F + 1
          ] }),
          " · ",
          j.rows.length,
          " 对 · ",
          j.labels.length,
          " 个标签"
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "import-row", children: [
          /* @__PURE__ */ h.jsx(Ce, { disabled: B !== null || S, onClick: () => {
            oe(F, j);
          }, children: B === F ? "分组中…" : "智能分组" }),
          /* @__PURE__ */ h.jsx(Ce, { disabled: be, onClick: () => ie(L, j.labels, (z) => ({ ...z, groups: j.labels.map((W) => ({ target: W, members: [W] })), pool: [], sel: [] })), children: "全部各自成组" }),
          /* @__PURE__ */ h.jsx(Ce, { disabled: be, onClick: () => ie(L, j.labels, (z) => ({ ...z, groups: [{ target: j.labels[0], members: j.labels.slice() }], pool: [], sel: [] })), children: "全部并入一组" })
        ] }),
        G.groups.map((z, W) => /* @__PURE__ */ h.jsxs("div", { className: "group-card", children: [
          /* @__PURE__ */ h.jsxs("div", { className: "hint group-head", children: [
            "组 ",
            W + 1,
            " · 存活名：",
            /* @__PURE__ */ h.jsx(
              "input",
              {
                className: "target-input",
                value: z.target,
                onChange: (P) => {
                  const ae = P.currentTarget.value;
                  ie(L, j.labels, (pe) => ({ ...pe, groups: pe.groups.map((se, ee) => ee === W ? { ...se, target: ae } : se) }));
                },
                onKeyDown: (P) => P.stopPropagation(),
                placeholder: "点 ★ 快选，或直接输入新名"
              }
            ),
            /* @__PURE__ */ h.jsxs("span", { className: "hint", children: [
              "（",
              z.members.length,
              " 个标签；成员 chip 的 ★ 一键设为存活名，输入框可自定义新名）"
            ] })
          ] }),
          /* @__PURE__ */ h.jsx("p", { className: "cluster-tags", children: z.members.map((P) => /* @__PURE__ */ h.jsxs(
            "span",
            {
              className: G.sel.includes(P) ? "tag-chip sel" : "tag-chip",
              onClick: () => ie(L, j.labels, (ae) => ({ ...ae, sel: ae.sel.includes(P) ? ae.sel.filter((pe) => pe !== P) : [...ae.sel, P] })),
              children: [
                P,
                /* @__PURE__ */ h.jsx(
                  "button",
                  {
                    className: "chip-star",
                    title: "设为本组存活名",
                    onClick: (ae) => {
                      ae.stopPropagation(), ie(L, j.labels, (pe) => ({ ...pe, groups: pe.groups.map((se, ee) => ee === W ? { ...se, target: P } : se) }));
                    },
                    children: z.target === P ? "★" : "☆"
                  }
                ),
                /* @__PURE__ */ h.jsx(
                  "button",
                  {
                    className: "chip-x",
                    onClick: (ae) => {
                      ae.stopPropagation(), ie(L, j.labels, (pe) => ({
                        ...pe,
                        groups: pe.groups.map((se, ee) => {
                          if (ee !== W) return se;
                          const ce = se.members.filter((We) => We !== P);
                          return { ...se, members: ce, target: se.target === P ? ce[0] || "" : se.target };
                        }).filter((se) => se.members.length > 0),
                        pool: [...pe.pool, P]
                      }));
                    },
                    children: "×"
                  }
                )
              ]
            },
            P
          )) }),
          G.sel.length > 0 && /* @__PURE__ */ h.jsxs(Ce, { onClick: () => ie(L, j.labels, (P) => {
            const ae = P.sel.filter((se) => j.labels.includes(se));
            if (!ae.length) return P;
            const pe = P.groups.map((se, ee) => {
              const ce = se.members.filter((rt) => !ae.includes(rt));
              if (ee === W) return { ...se, members: [...ce, ...ae.filter((rt) => !ce.includes(rt))], target: se.target || (ce[0] ?? ae[0]) };
              const We = se.target && ae.includes(se.target) ? ce[0] || "" : se.target;
              return { ...se, members: ce, target: We };
            }).filter((se) => se.members.length > 0);
            return { ...P, groups: pe, pool: P.pool.filter((se) => !ae.includes(se)), sel: [] };
          }), children: [
            "把选中的 ",
            G.sel.length,
            " 个放进本组"
          ] })
        ] }, `g${W}`)),
        G.pool.length > 0 && /* @__PURE__ */ h.jsxs("div", { className: "pool-box", children: [
          /* @__PURE__ */ h.jsxs("p", { className: "hint", children: [
            "未分组（",
            G.pool.length,
            "）：标签点选后用下方行动按钮分组；组间提交即判定独立。"
          ] }),
          /* @__PURE__ */ h.jsx("p", { className: "cluster-tags", children: G.pool.map((z) => /* @__PURE__ */ h.jsx(
            "span",
            {
              className: G.sel.includes(z) ? "tag-chip sel" : "tag-chip",
              onClick: () => ie(L, j.labels, (W) => ({ ...W, sel: W.sel.includes(z) ? W.sel.filter((P) => P !== z) : [...W.sel, z] })),
              children: z
            },
            z
          )) })
        ] }),
        G.sel.length > 0 && /* @__PURE__ */ h.jsxs("div", { className: "import-row sel-actions", children: [
          /* @__PURE__ */ h.jsxs(Ce, { onClick: () => ie(L, j.labels, (z) => {
            const W = z.sel.filter((ae) => j.labels.includes(ae));
            if (!W.length) return z;
            const P = z.groups.map((ae) => {
              const pe = ae.members.filter((ee) => !W.includes(ee)), se = ae.target && W.includes(ae.target) ? pe[0] || "" : ae.target;
              return { ...ae, members: pe, target: se };
            }).filter((ae) => ae.members.length > 0);
            return { ...z, groups: [...P, { target: W[0], members: W }], pool: z.pool.filter((ae) => !W.includes(ae)), sel: [] };
          }), children: [
            "成新组（",
            G.sel.length,
            "）"
          ] }),
          /* @__PURE__ */ h.jsxs("span", { className: "hint", children: [
            "已选中 ",
            G.sel.length,
            " 个标签：「成新组」拆出去（选 1 个即单独成组），或点目标组卡上的「放进本组」并入该组；再点标签取消选中。"
          ] })
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "import-row", children: [
          /* @__PURE__ */ h.jsx(Ce, { variant: "primary", disabled: be || G.pool.length > 0 || G.groups.length === 0, onClick: () => {
            Te(F, j);
          }, children: be ? "提交中…" : `提交本组裁决（${$} 合并 + ${b} 独立）` }),
          /* @__PURE__ */ h.jsx("span", { className: "hint", children: be && J ? J : G.pool.length > 0 ? "先把未分组标签分完（可「全部各自成组」）" : "先组内合并，再把跨组待裁对记为独立；存活名保留。" })
        ] }),
        /* @__PURE__ */ h.jsxs("details", { className: "cluster-evidence", children: [
          /* @__PURE__ */ h.jsxs("summary", { children: [
            "共现证据（",
            j.rows.length,
            " 对）"
          ] }),
          j.rows.map((z) => /* @__PURE__ */ h.jsxs("p", { className: "hint", children: [
            z.pair,
            " — ",
            z.evidence
          ] }, z.pair))
        ] }),
        j.rows.map(te)
      ] }, L);
    }),
    M.length > 0 && /* @__PURE__ */ h.jsxs("div", { className: "cluster weak-zone", children: [
      /* @__PURE__ */ h.jsxs("p", { className: "hint queue-group", children: [
        /* @__PURE__ */ h.jsx("b", { children: "弱关联对" }),
        " · ",
        M.length,
        " 对 · 单独裁决（合并或判定独立，不参与分组提交）"
      ] }),
      M.map(te)
    ] }),
    De.length > 0 && /* @__PURE__ */ h.jsxs("div", { className: "queue-decided-zone", children: [
      /* @__PURE__ */ h.jsxs("div", { className: "import-row", children: [
        /* @__PURE__ */ h.jsxs(Ce, { onClick: () => A((j) => !j), children: [
          H ? "收起" : "展开",
          "已裁决（",
          De.length,
          " 条）"
        ] }),
        /* @__PURE__ */ h.jsx("span", { className: "hint", children: "裁决过的对折叠在此，可回看记录。" })
      ] }),
      H && De.map(te)
    ] })
  ] });
}
function TE({ tick: u, onChanged: r }) {
  const [o, s] = Y.useState(null), [d, m] = Y.useState(""), [p, y] = Y.useState(null), [S, E] = Y.useState({}), [N, g] = Y.useState({}), [H, A] = Y.useState(!1), [x, K] = Y.useState({}), [B, le] = Y.useState(null), [be, me] = Y.useState({}), [J, Ee] = Y.useState({ from: "", to: "" }), de = Y.useCallback(async () => {
    const V = await Ye("/api/types/candidates");
    s(V.ok ? V : null);
  }, []);
  Y.useEffect(() => {
    de();
  }, [de, u]);
  async function re(V, fe, De = {}) {
    const q = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    y(V), m("");
    const M = await Pe("/api/tool/apply_type_ruling", { action: fe, name: V, date: q, ...De });
    m(M.ok ? `已${fe === "create" ? "新立进类型库" : fe === "merge" ? `并入「${M.now}」` : "驳回"}：${V}` : M.message || JSON.stringify(M)), M.ok && (await de(), r?.(), K({}), me((te) => {
      const j = { ...te };
      return delete j[V], j;
    }), Ee({ from: "", to: "" })), y(null);
  }
  async function Se(V, fe) {
    le(V), m("");
    try {
      const De = await Pe("/api/model/type-targets", {
        candidates: [{ name: V, definition: fe }],
        types: (o?.types || []).map((M) => ({ type: M.type, definition: M.definition }))
      });
      if (!De.started) {
        m(De.message || "发起失败"), le(null);
        return;
      }
      const q = await tl("/api/model/status", { kind: "typehint", timeoutMs: 180 * 1e3 });
      if (q.stage === "timeout") {
        m(q.message), le(null);
        return;
      }
      if (q.ok && Array.isArray(q.suggestions) && q.suggestions.length) {
        const M = q.suggestions[0];
        K((te) => ({ ...te, [V]: { target: String(M.target), reason: String(M.reason || "") } })), m(`「${V}」的建议已给出，见该候选卡`);
      } else
        m(q.message || "未产出建议");
    } catch (De) {
      m(`请求失败：${String(De?.message || De)}`);
    }
    le(null);
  }
  async function ie(V) {
    const fe = (N[V] || "").trim();
    if (!fe) {
      m("改名：先在框里填新名称");
      return;
    }
    const De = o?.pending.find((j) => j.name === V)?.definition || "", q = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    y(V), m("");
    const M = await Pe("/api/tool/apply_type_ruling", { action: "create", name: fe, date: q, definition: De });
    if (!M.ok) {
      m(`改名中断（新立「${fe}」未过）：${M.message || JSON.stringify(M)}`), y(null);
      return;
    }
    const te = await Pe("/api/tool/apply_type_ruling", { action: "merge", name: V, target: fe, date: q });
    m(te.ok ? `已改名：${V} → ${fe}` : te.message || JSON.stringify(te)), te.ok && (await de(), r?.(), K({}), me((j) => {
      const F = { ...j };
      return delete F[V], F;
    })), y(null);
  }
  if (!o) return /* @__PURE__ */ h.jsx(nl, { title: "读取候选中…", description: "正在扫描篇目的新类型宣告。" });
  const oe = [...o.pending, ...o.ruled.filter((V) => be[V.name])], Te = (V) => !!V && !(o.types || []).some((fe) => fe.type === V) && !(o.pending || []).some((fe) => fe.name === V);
  return /* @__PURE__ */ h.jsxs("div", { children: [
    /* @__PURE__ */ h.jsxs("p", { className: "hint", children: [
      oe.length > 0 && /* @__PURE__ */ h.jsxs("b", { children: [
        oe.length,
        " 个候选待裁　"
      ] }),
      "每个候选来自拆解时的「新类型宣告」。四选一：新立（进类型库）、并入（记闭包映射）、改名（先立新名再并入）、驳回（留痕不入表）。裁决即生效，宣告篇目同步盖章。 并入看箭头：「A → B」= A 并入 B、B 存活；候选名表述更佳时选反方向箭头即可。已裁决的可「重新裁决」，已登记类型用下方再归类工具——一切归类都可再次归类。 与上页的关系：标签裁决查的是重名标签，本页立的是写作模型的类型；标签层没清完也能裁——类型库「归并自」容纳多个共存标签。 建议逐个取：点候选卡上的「AI 推荐」，按此刻的类型库实时算；裁决一张卡后全部建议清空，下一张再点。"
    ] }),
    d && /* @__PURE__ */ h.jsx("p", { className: d.startsWith("已") ? "ok" : "err", children: d }),
    /* @__PURE__ */ h.jsxs("div", { className: "import-row reclass-box", children: [
      /* @__PURE__ */ h.jsx(
        dE,
        {
          value: J.from,
          onChange: (V) => Ee((fe) => ({ ...fe, from: V })),
          options: [{ value: "", label: "已登记类型再归类：选源…" }, ...(o.types || []).map((V) => ({ value: V.type, label: V.type }))]
        }
      ),
      /* @__PURE__ */ h.jsx(
        nu,
        {
          id: "cb-reclass-to",
          value: J.to,
          placeholder: "输入过滤，或直接输入新名…",
          allowCustom: !0,
          onChange: (V) => Ee((fe) => ({ ...fe, to: V })),
          options: [
            ...(o.types || []).map((V) => ({ value: V.type, label: V.type })),
            ...(o.pending || []).map((V) => ({ value: V.name, label: `${V.name}（候选）` }))
          ]
        }
      ),
      /* @__PURE__ */ h.jsx(Ce, { disabled: p !== null || !J.from || !J.to, onClick: () => {
        re(J.from, "merge", { target: J.to, targetFresh: Te(J.to) });
      }, children: "执行归类" })
    ] }),
    oe.length === 0 && /* @__PURE__ */ h.jsx(nl, { title: "暂无待裁候选", description: "拆解宣告新类型后，候选会自动出现在这里。" }),
    oe.map((V) => /* @__PURE__ */ h.jsxs(Mn, { title: V.name, description: `宣告于：${V.papers.join("、")}`, children: [
      /* @__PURE__ */ h.jsx("p", { children: V.definition || "（定义待补）" }),
      x[V.name] && /* @__PURE__ */ h.jsxs("div", { className: "hint suggest-line", children: [
        "AI 建议：",
        x[V.name].target === "新立" ? "新立（未匹配到既有类型）" : x[V.name].target === "驳回" ? "驳回（无独立价值）" : `并入「${x[V.name].target}」`,
        "——",
        x[V.name].reason,
        (o.types || []).some((fe) => fe.type === x[V.name].target) && /* @__PURE__ */ h.jsx(Ce, { onClick: () => E((fe) => ({ ...fe, [V.name]: x[V.name].target })), children: "采纳（填入目标）" })
      ] }),
      /* @__PURE__ */ h.jsx("div", { className: "import-row", children: /* @__PURE__ */ h.jsx(Ce, { disabled: B !== null || p !== null, onClick: () => {
        Se(V.name, V.definition);
      }, children: B === V.name ? "推荐中…" : "AI 推荐" }) }),
      /* @__PURE__ */ h.jsxs("div", { className: "import-row", children: [
        /* @__PURE__ */ h.jsx(Ce, { variant: "primary", disabled: p !== null, onClick: () => {
          re(V.name, "create");
        }, children: p === V.name ? "执行中…" : "新立进类型库" }),
        /* @__PURE__ */ h.jsx(
          nu,
          {
            id: `cb-merge-${V.name}`,
            value: S[V.name] || "",
            placeholder: "输入过滤，或输入新名…",
            allowCustom: !0,
            onChange: (fe) => E((De) => ({ ...De, [V.name]: fe })),
            options: [
              ...(o.types || []).map((fe) => ({ value: fe.type, label: fe.type })),
              ...(o.pending || []).filter((fe) => fe.name !== V.name).map((fe) => ({ value: fe.name, label: `${fe.name}（候选）` }))
            ]
          }
        ),
        /* @__PURE__ */ h.jsxs(Ce, { disabled: p !== null || !S[V.name], title: "箭头左侧消失成为别名，右侧名字存活", onClick: () => {
          re(V.name, "merge", { target: S[V.name], targetFresh: Te(S[V.name]) });
        }, children: [
          V.name,
          " → ",
          S[V.name] || "…"
        ] }),
        /* @__PURE__ */ h.jsxs(Ce, { disabled: p !== null || !S[V.name], title: "反方向：右侧候选名存活，左侧所选类型归入它名下", onClick: () => {
          re(S[V.name], "merge", { target: V.name });
        }, children: [
          S[V.name] || "…",
          " → ",
          V.name
        ] }),
        /* @__PURE__ */ h.jsx(Ce, { disabled: p !== null, onClick: () => {
          re(V.name, "reject");
        }, children: "驳回" })
      ] }),
      /* @__PURE__ */ h.jsxs("div", { className: "import-row", children: [
        /* @__PURE__ */ h.jsx(xt, { label: "改名为", value: N[V.name] || "", onChange: (fe) => {
          const De = fe.currentTarget.value;
          g((q) => ({ ...q, [V.name]: De }));
        }, placeholder: "新类型名" }),
        /* @__PURE__ */ h.jsx(Ce, { disabled: p !== null || !(N[V.name] || "").trim(), onClick: () => {
          ie(V.name);
        }, children: "改名" })
      ] })
    ] }, V.name)),
    o.ruled.length > 0 && /* @__PURE__ */ h.jsxs("div", { className: "queue-decided-zone", children: [
      /* @__PURE__ */ h.jsxs("div", { className: "import-row", children: [
        /* @__PURE__ */ h.jsxs(Ce, { onClick: () => A((V) => !V), children: [
          H ? "收起" : "展开",
          "已裁决（",
          o.ruled.length,
          "）"
        ] }),
        /* @__PURE__ */ h.jsx("span", { className: "hint", children: "裁决过的候选折叠在此；明细查类型库与闭包映射表。" })
      ] }),
      H && o.ruled.map((V) => /* @__PURE__ */ h.jsxs(Mn, { title: V.name, description: `已裁决：${V.ruledStatus || ""}`, children: [
        /* @__PURE__ */ h.jsx("p", { className: "hint", children: V.definition || "" }),
        /* @__PURE__ */ h.jsx(Ce, { disabled: p !== null, onClick: () => me((fe) => ({ ...fe, [V.name]: !0 })), children: "重新裁决" })
      ] }, V.name))
    ] })
  ] });
}
function dp({ initial: u, savePath: r, onSaved: o }) {
  const [s, d] = Y.useState(u), [m, p] = Y.useState(""), [y, S] = Y.useState(!1);
  async function E() {
    if (!s.startsWith("#")) {
      p("首行须为 # 标题（防存入半截文件）");
      return;
    }
    let N = s;
    if (N !== u) {
      const g = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), H = /^> 人工修订：(.+)$/m;
      N = H.test(N) ? N.replace(H, `> 人工修订：${g}`) : N.trimEnd() + `

> 人工修订：${g}
`;
    }
    S(!0), p("");
    try {
      const g = await Pe("/api/library/write-file", { path: r, content: N });
      g && g.ok ? (Rt.toast.show({ message: "已保存", type: "success" }), o(N)) : p(g?.message || "保存失败");
    } catch (g) {
      p(String(g?.message || g));
    }
    S(!1);
  }
  return /* @__PURE__ */ h.jsxs("div", { className: "editor", children: [
    m && /* @__PURE__ */ h.jsx("p", { className: "err", children: m }),
    /* @__PURE__ */ h.jsx("textarea", { className: "editbox", value: s, onChange: (N) => d(N.currentTarget.value), rows: 22, spellCheck: !1 }),
    /* @__PURE__ */ h.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ h.jsx(Ce, { variant: "primary", disabled: y, onClick: () => {
        E();
      }, children: "保存" }),
      /* @__PURE__ */ h.jsx("span", { className: "hint", children: "首行须为 # 标题；改动会在尾部留一行修订日期（可自行删除）。改标签：编辑「- 标签：」行。" })
    ] })
  ] });
}
function AE({ tick: u }) {
  const [r, o] = Y.useState([]), [s, d] = Y.useState(""), [m, p] = Y.useState(""), [y, S] = Y.useState(!1), E = Y.useCallback(async () => {
    const N = await xa("篇目"), g = await Promise.all(
      N.map(async (H) => {
        const { title: A, meta: x } = op(await fp(H), H.replace(/\.md$/, ""));
        return { id: H, title: A, meta: x || H.replace(/\.md$/, "") };
      })
    );
    o(g);
  }, []);
  return Y.useEffect(() => {
    E();
  }, [E, u]), Y.useEffect(() => {
    if (!s) {
      p("");
      return;
    }
    Ye(nn(`篇目/${s}`)).then((N) => p(N.ok ? N.content : N.message || "读取失败"));
  }, [s]), r.length ? /* @__PURE__ */ h.jsxs("div", { className: "split", children: [
    /* @__PURE__ */ h.jsx("div", { className: "side", children: /* @__PURE__ */ h.jsx("div", { className: "entrylist", children: r.map((N) => /* @__PURE__ */ h.jsxs(
      "button",
      {
        className: s === N.id ? "entryitem on" : "entryitem",
        onClick: () => d(N.id),
        children: [
          /* @__PURE__ */ h.jsx("span", { className: "entrytitle", children: N.title }),
          /* @__PURE__ */ h.jsx("span", { className: "entrymeta", children: N.meta })
        ]
      },
      N.id
    )) }) }),
    /* @__PURE__ */ h.jsxs("div", { className: "main", children: [
      s && /* @__PURE__ */ h.jsx("div", { className: "import-row", children: /* @__PURE__ */ h.jsx(Ce, { onClick: () => S((N) => !N), children: y ? "返回预览" : "编辑本篇" }) }),
      s ? y ? /* @__PURE__ */ h.jsx(
        dp,
        {
          initial: m,
          savePath: `篇目/${s}`,
          onSaved: (N) => {
            p(N), S(!1), E();
          }
        }
      ) : /* @__PURE__ */ h.jsx(au, { md: m }) : /* @__PURE__ */ h.jsx("p", { className: "hint", children: "左侧选篇查看（每条登记都带位置与原文引文）。" })
    ] })
  ] }) : /* @__PURE__ */ h.jsx(nl, { title: "还没有篇目", description: "导入文献或在对话里拆解后，篇目会出现在这里。" });
}
function NE({ tick: u }) {
  const [r, o] = Y.useState([]), [s, d] = Y.useState(""), [m, p] = Y.useState(""), [y, S] = Y.useState(""), [E, N] = Y.useState(""), [g, H] = Y.useState({});
  if (Y.useEffect(() => {
    xa("篇目").then(async (x) => {
      o(x), x[0] && d(x[0]), x[1] && p(x[1]);
      const K = await Promise.all(x.map(async (B) => {
        const { title: le, meta: be } = op(await fp(B), B.replace(/\.md$/, ""));
        return [B, be ? `${le} · ${be}` : le];
      }));
      H(Object.fromEntries(K));
    });
  }, [u]), Y.useEffect(() => {
    s && Ye(nn(`篇目/${s}`)).then((x) => S(x.ok ? x.content : ""));
  }, [s]), Y.useEffect(() => {
    m && Ye(nn(`篇目/${m}`)).then((x) => N(x.ok ? x.content : ""));
  }, [m]), r.length < 2) return /* @__PURE__ */ h.jsx(nl, { title: "至少两篇可对比", description: "先积累两篇以上篇目。" });
  const A = r.map((x) => ({ value: x, label: g[x] || x.replace(/\.md$/, "") }));
  return /* @__PURE__ */ h.jsxs("div", { children: [
    /* @__PURE__ */ h.jsxs("div", { className: "grid2", children: [
      /* @__PURE__ */ h.jsx(nu, { id: "cb-cmp-a", value: s, onChange: d, options: A, placeholder: "输入过滤篇目…" }),
      /* @__PURE__ */ h.jsx(nu, { id: "cb-cmp-b", value: m, onChange: p, options: A, placeholder: "输入过滤篇目…" })
    ] }),
    /* @__PURE__ */ h.jsxs("div", { className: "compare", children: [
      /* @__PURE__ */ h.jsx("div", { className: "col", children: /* @__PURE__ */ h.jsx(au, { md: y }) }),
      /* @__PURE__ */ h.jsx("div", { className: "col", children: /* @__PURE__ */ h.jsx(au, { md: E }) })
    ] })
  ] });
}
function _E({ tick: u }) {
  const [r, o] = Y.useState(null);
  if (Y.useEffect(() => {
    (async () => {
      const [d, m, p, y, S, E] = await Promise.all([
        xa("篇目"),
        xa("锚点样本"),
        xa("写作模型"),
        Ye(nn("标签库.md")),
        Ye(nn("闭包映射表.md")),
        Ye(nn("类型库.md"))
      ]), N = y.ok ? Ro(y.content, "标签") : [], g = y.ok ? Bo(y.content) : [], H = S.ok ? Ro(S.content, "from") : [], A = E.ok ? Ro(E.content, "类型") : [];
      o({
        papers: d.length,
        anchors: m.length,
        models: p.length,
        tags: N,
        queuePending: g.filter((x) => !x.decision).length,
        mapRows: H,
        types: A
      });
    })();
  }, [u]), !r) return /* @__PURE__ */ h.jsx("p", { className: "hint", children: "统计中…" });
  const s = r.papers ? Math.round(r.anchors / r.papers * 100) : 0;
  return /* @__PURE__ */ h.jsxs("div", { className: "cards", children: [
    /* @__PURE__ */ h.jsx(Mn, { title: `篇目 ${r.papers}`, description: "已完成的篇目" }),
    /* @__PURE__ */ h.jsx(Mn, { title: `锚点 ${r.anchors}`, description: `锚点覆盖度 ${s}%（置信度依据之一）` }),
    /* @__PURE__ */ h.jsx(Mn, { title: `标签 ${r.tags.length}`, description: `待裁决 ${r.queuePending}` }),
    /* @__PURE__ */ h.jsx(Mn, { title: `类型 ${r.types.length}`, description: `映射表 ${r.mapRows.length} 行` }),
    /* @__PURE__ */ h.jsx(Mn, { title: `写作模型 ${r.models}`, description: "版本化产物" }),
    /* @__PURE__ */ h.jsx(Mn, { title: "描述性 / 规范性频率", description: "描述与规范分开统计；篇目与锚点积累后按类型分组计算。" })
  ] });
}
function Ro(u, r) {
  const o = String(u || "").split(/\r?\n/), s = [];
  let d = !1;
  for (const m of o)
    if (m.startsWith("|") && !/^\|\s*-+/.test(m)) {
      const p = m.split("|").slice(1, -1).map((y) => y.trim());
      if (p[0] === r) {
        d = !0;
        continue;
      }
      d && p[0] && p[0] !== "（暂无）" && s.push(p[0]);
    } else d && !m.startsWith("|") && (d = !1);
  return s;
}
function wE(u) {
  const r = u.filter((m) => m.ok), o = u.filter((m) => !m.ok && m.skipped), s = u.filter((m) => !m.ok && !m.skipped), d = [];
  return r.length && d.push(`✓ 生成 ${r.length} 个类型：${r.map((m) => `${m.type} v${m.version}`).join("、")}`), o.length && d.push(`跳过 ${o.length} 个（样本不足或未变）`), s.length && d.push(`✗ 失败：${s.map((m) => `${m.type}：${m.error || "未知"}`).join("；")}`), d.join("；") || "没有可处理的类型";
}
function OE(u) {
  const r = u.results || [], o = r.filter((S) => S.ok), s = r.filter((S) => !S.ok && (S.stage === "unchanged" || S.stage === "size")), d = r.filter((S) => !S.ok && S.stage !== "unchanged" && S.stage !== "size"), m = [];
  o.length && m.push(`✓ 生成 ${o.length} 个战术：${o.map((S) => `战术-${S.label} v${S.version}`).join("、")}`), s.length && m.push(`跳过 ${s.length} 个（未变或超素材上限）`), d.length && m.push(`✗ 失败：${d.map((S) => `${S.label}：${S.message || S.stage}`).join("；")}`);
  const p = m.join("；") || "无产出", y = Number(u.belowThreshold || 0);
  return y ? `${p}（另有 ${y} 个标签携带篇目 <2，未达门槛）` : p;
}
function CE(u) {
  const r = {};
  for (const o of String(u || "").split(/\r?\n/)) {
    if (!o.startsWith("|") || /^\|\s*-+/.test(o)) continue;
    const s = o.split("|").slice(1, -1).map((d) => d.trim());
    s.length === 3 && s[0] && s[0] !== "原始类型" && s[1] && s[0] !== s[1] && (r[s[0]] = s[1]);
  }
  return r;
}
function xE({ tick: u }) {
  const [r, o] = Y.useState([]), [s, d] = Y.useState(""), [m, p] = Y.useState(""), [y, S] = Y.useState(!1), [E, N] = Y.useState(!1), [g, H] = Y.useState({}), [A, x] = Y.useState(""), [K, B] = Y.useState({}), [le, be] = Y.useState("list"), [me, J] = Y.useState(""), [Ee, de] = Y.useState({}), [re, Se] = Y.useState(!1);
  Y.useEffect(() => {
    let L = !1;
    return (async () => {
      const G = await Ye("/api/model/status").catch(() => null);
      if (L || !G || !G.running || G.kind !== "generate") return;
      S(!0), J("建模进行中（接管切页前的任务）…");
      const ne = await tl("/api/model/status", { kind: "generate" });
      L || (J(ne.stage === "timeout" ? ne.message : ne.ok ? "完成：见下方分组" : ne.message || "未生成"), ne.ok && (Rt.toast.show({ message: "写作模型已生成/更新", type: "success" }), oe()), S(!1));
    })(), () => {
      L = !0;
    };
  }, []);
  const ie = Y.useMemo(() => {
    const L = /* @__PURE__ */ new Map();
    for (const G of r) {
      const ne = /^(.+)-写作模型-v(\d+)\.md$/.exec(G);
      ne && (L.has(ne[1]) || L.set(ne[1], []), L.get(ne[1]).push({ file: G, v: Number(ne[2]) }));
    }
    return [...L.entries()].map(([G, ne]) => (ne.sort(($, b) => $.v - b.v), { type: G, latest: ne[ne.length - 1], history: ne.slice(0, -1).reverse() }));
  }, [r]), oe = Y.useCallback(() => {
    xa("写作模型").then(o), Ye(nn("闭包映射表.md")).then((L) => H(L.ok ? CE(L.content) : {}));
  }, []);
  Y.useEffect(() => {
    oe();
  }, [oe, u]), Y.useEffect(() => {
    if (!s) {
      p("");
      return;
    }
    Ye(nn(`写作模型/${s}`)).then((L) => p(L.ok ? L.content : ""));
  }, [s]);
  async function Te() {
    S(!0), J("");
    try {
      const L = await Pe("/api/model/generate", {});
      if (!L.started) {
        J(L.message || "发起失败"), S(!1);
        return;
      }
      J("建模中：归属 → 归纳 → 逐类型生成（每个类型一次模型调用，可离开本页）…");
      const G = await tl("/api/model/status", { kind: "generate" });
      if (G.stage === "timeout") {
        J(G.message), S(!1);
        return;
      }
      J(wE(G.results || []) || G.message || ""), (G.results || []).some((ne) => ne.ok) && (Rt.toast.show({ message: "写作模型已生成/更新", type: "success" }), oe());
    } catch (L) {
      J(`请求失败：${String(L?.message || L)}`);
    }
    S(!1);
  }
  async function V() {
    N(!0), J("");
    try {
      const L = await Pe("/api/model/generate-tactic", {});
      if (!L.started) {
        J(L.message || "发起失败"), N(!1);
        return;
      }
      const G = Date.now();
      for (; Date.now() - G < 1200 * 1e3; ) {
        await new Promise(($) => setTimeout($, 4e3));
        const ne = await Ye("/api/model/status").catch(() => null);
        if (!(!ne || ne.kind !== "tactic")) {
          if (ne.running) {
            const $ = ne.progress || {};
            J(`战术建模中：${$.done ?? 0}/${$.total ?? "?"}　当前：${$.current || "…"}`);
          } else if (ne.lastResult) {
            const $ = ne.lastResult;
            J(OE($) || $.message || ""), ($.results || []).some((b) => b.ok) && (Rt.toast.show({ message: "战术模型已生成/更新", type: "success" }), oe()), N(!1);
            return;
          }
        }
      }
      J("等待超时（20 分钟），任务可能仍在运行；稍后刷新查看结果。");
    } catch (L) {
      J(`请求失败：${String(L?.message || L)}`);
    }
    N(!1);
  }
  const [fe, De] = Y.useState(""), [q, M] = Y.useState("");
  async function te(L) {
    const G = [];
    for (const ne of L) {
      const $ = await Pe("/api/library/delete-file", { path: `写作模型/${ne}` });
      G.push($.ok ? `✓ ${ne}` : `✗ ${ne}：${$.message || "失败"}`);
    }
    J(`删除结果：${G.join("；")}`), d(""), oe();
  }
  const j = (L) => {
    let G = L;
    const ne = /* @__PURE__ */ new Set();
    for (; g[G] && g[G] !== G && !ne.has(G); )
      ne.add(G), G = g[G];
    return G;
  };
  async function F(L, G) {
    const ne = await Pe("/api/library/rename-models", { from: L, to: G });
    J(ne.ok ? `已随归并改名：${L} → ${G}（${(ne.moved || []).length} 个文件，版本保留）` : ne.message || JSON.stringify(ne)), ne.ok && (d(""), oe());
  }
  return /* @__PURE__ */ h.jsxs("div", { children: [
    /* @__PURE__ */ h.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ h.jsx(Ce, { variant: "primary", disabled: y || E, onClick: () => {
        Te();
      }, children: y ? "建模中…" : "生成 / 更新写作模型" }),
      /* @__PURE__ */ h.jsx(Ce, { disabled: y || E, onClick: () => {
        V();
      }, children: E ? "战术建模中…" : "生成 / 更新战术模型" }),
      /* @__PURE__ */ h.jsx("span", { className: "hint", children: "两个按钮同理：样本 ≥2 才生成，再点得新版本（v+1，历史保留），样本未变自动跳过零浪费。类型模型的样本看归并自与宣告篇，战术模型的样本看携带该标签的篇目。" })
    ] }),
    me && /* @__PURE__ */ h.jsx("pre", { className: "hint", children: me }),
    le === "preview" && s ? /* @__PURE__ */ h.jsxs("div", { className: "model-preview", children: [
      /* @__PURE__ */ h.jsxs("div", { className: "import-row", children: [
        /* @__PURE__ */ h.jsx(Ce, { onClick: () => be("list"), children: "← 返回列表" }),
        /* @__PURE__ */ h.jsxs("span", { className: "hint", children: [
          "正在查看：",
          s
        ] })
      ] }),
      re ? /* @__PURE__ */ h.jsx(dp, { initial: m, savePath: `写作模型/${s}`, onSaved: (L) => {
        p(L), Se(!1), oe();
      } }) : /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
        /* @__PURE__ */ h.jsxs("div", { className: "import-row", children: [
          /* @__PURE__ */ h.jsx(Ce, { onClick: () => Se(!0), children: "编辑本模型" }),
          /* @__PURE__ */ h.jsx(Ce, { disabled: y || E, onClick: () => {
            if (q !== s) {
              M(s);
              return;
            }
            M(""), te([s]);
          }, children: q === s ? "再点一次确认删除" : "删除本版本" })
        ] }),
        /* @__PURE__ */ h.jsx(au, { md: m })
      ] })
    ] }) : ie.length ? /* @__PURE__ */ h.jsx(h.Fragment, { children: ["类型", "战术"].map((L) => {
      const G = ie.filter(($) => L === "战术" === $.type.startsWith("战术-"));
      if (!G.length) return null;
      const ne = !K[L];
      return /* @__PURE__ */ h.jsxs("div", { className: "model-section", children: [
        /* @__PURE__ */ h.jsx("div", { className: "import-row section-toggle", children: /* @__PURE__ */ h.jsxs(Ce, { onClick: () => B(($) => ({ ...$, [L]: !$[L] })), children: [
          ne ? "收起" : "展开",
          " ",
          L,
          "模型（",
          G.length,
          " 组）"
        ] }) }),
        ne && G.map(($) => {
          const b = $.type.startsWith("战术-") ? $.type.slice(2) : $.type, z = j(b), W = z !== b, P = $.type.startsWith("战术-") ? `战术-${z}` : z;
          return /* @__PURE__ */ h.jsxs("div", { className: "model-group", children: [
            /* @__PURE__ */ h.jsxs("div", { className: "model-group-head", children: [
              W && /* @__PURE__ */ h.jsx("span", { className: "badge", children: "已并入" }),
              /* @__PURE__ */ h.jsx("span", { className: "model-grouptitle", children: W ? `${$.type} → ${z}` : $.type }),
              /* @__PURE__ */ h.jsxs(
                "button",
                {
                  className: s === $.latest.file ? "filebtn on" : "filebtn",
                  onClick: () => {
                    d($.latest.file), be("preview");
                  },
                  children: [
                    "v",
                    $.latest.v,
                    "（最新）"
                  ]
                }
              ),
              $.history.length > 0 && /* @__PURE__ */ h.jsx("button", { className: "linkbtn", onClick: () => de((ae) => ({ ...ae, [$.type]: !ae[$.type] })), children: Ee[$.type] ? "收起历史" : `历史 ${$.history.length} 版` }),
              W && /* @__PURE__ */ h.jsx("button", { className: "linkbtn", onClick: () => {
                if (A !== $.type) {
                  x($.type);
                  return;
                }
                x(""), F($.type, P);
              }, children: A === $.type ? `再点一次确认改名为 ${P}` : "随归并改名" }),
              /* @__PURE__ */ h.jsx("button", { className: "linkbtn", onClick: () => {
                if (fe !== $.type) {
                  De($.type);
                  return;
                }
                De(""), te([$.latest.file, ...$.history.map((ae) => ae.file)]);
              }, children: fe === $.type ? "再点一次确认删除整组" : "删除" })
            ] }),
            Ee[$.type] && /* @__PURE__ */ h.jsx("div", { className: "filebtns", children: $.history.map((ae) => /* @__PURE__ */ h.jsxs("button", { className: s === ae.file ? "filebtn on" : "filebtn", onClick: () => {
              d(ae.file), be("preview");
            }, children: [
              "v",
              ae.v
            ] }, ae.file)) })
          ] }, $.type);
        })
      ] }, L);
    }) }) : /* @__PURE__ */ h.jsx(nl, { title: "暂无写作模型", description: "点上方按钮归纳生成；样本不足或样本未变的类型会跳过并说明。" })
  ] });
}
function RE() {
  const [u, r] = Y.useState(""), [o, s] = Y.useState([]), [d, m] = Y.useState(null), [p, y] = Y.useState("");
  async function S() {
    if (!u.trim()) return;
    const E = await Ye(`/api/search?query=${encodeURIComponent(u.trim())}`);
    s(E.ok ? E.results : []), m(null);
  }
  return Y.useEffect(() => {
    if (!d) {
      y("");
      return;
    }
    Ye(nn(d.path)).then((E) => y(E.ok ? E.content : "读取失败"));
  }, [d]), /* @__PURE__ */ h.jsxs("div", { children: [
    /* @__PURE__ */ h.jsx("p", { className: "hint", children: "按关键词物理命中排序帮你收窄候选，取舍仍由你判断；引用时带篇目位置与原文引文。" }),
    /* @__PURE__ */ h.jsxs("div", { className: "searchbar", children: [
      /* @__PURE__ */ h.jsx(
        xt,
        {
          label: "关键词（空格 / 、 分隔）",
          value: u,
          onChange: (E) => r(E.currentTarget.value),
          placeholder: "例：反驳 开头",
          onKeyDown: (E) => {
            E.key === "Enter" && S();
          }
        }
      ),
      /* @__PURE__ */ h.jsx(Ce, { variant: "primary", onClick: () => {
        S();
      }, children: "搜索" })
    ] }),
    /* @__PURE__ */ h.jsxs("div", { className: "searchresults", children: [
      o.map((E) => /* @__PURE__ */ h.jsxs("div", { className: d?.path === E.path ? "searchhit on" : "searchhit", children: [
        /* @__PURE__ */ h.jsxs("div", { className: "searchhit-head", onClick: () => m(E), children: [
          /* @__PURE__ */ h.jsx("span", { className: "badge", children: E.kind }),
          /* @__PURE__ */ h.jsx("b", { children: E.title }),
          /* @__PURE__ */ h.jsxs("span", { className: "hint", children: [
            "命中 ",
            E.score,
            " · ",
            E.path
          ] })
        ] }),
        d?.path !== E.path && E.hits?.slice(0, 2).map((N, g) => /* @__PURE__ */ h.jsxs("div", { className: "hitline", children: [
          "L",
          N.line,
          ": ",
          N.excerpt,
          N.text
        ] }, g))
      ] }, E.path)),
      !o.length && /* @__PURE__ */ h.jsx("p", { className: "hint", children: "输入关键词后搜索；结果按命中度排序，点击标题展开全文。" })
    ] }),
    d && /* @__PURE__ */ h.jsxs("div", { className: "searchpreview", children: [
      /* @__PURE__ */ h.jsx("h4", { children: d.title }),
      /* @__PURE__ */ h.jsx(au, { md: p })
    ] })
  ] });
}
function jE() {
  const [u, r] = Y.useState(""), [o, s] = Y.useState(""), [d, m] = Y.useState("2"), [p, y] = Y.useState("");
  Y.useEffect(() => {
    Ye("/api/config").then((E) => {
      E.ok && E.config ? (r((E.config.markers || []).join("、")), s(E.config.libraryPath || ""), m(String(E.config.maxPerRun ?? 2))) : y(E.message || "配置读取失败");
    });
  }, []);
  async function S() {
    y("保存中…");
    const E = await Pe("/api/config", {
      markers: u.split(/[\s、，,;；]+/).map((N) => N.trim()).filter(Boolean),
      libraryPath: o.trim(),
      maxPerRun: Number(d) || 2
    });
    y(E.ok ? "已保存" : `保存失败：${E.message || "未知错误"}`);
  }
  return /* @__PURE__ */ h.jsxs("div", { className: "settings", children: [
    /* @__PURE__ */ h.jsx("p", { className: "hint", children: "会话名命中标定词才会收到结构推荐；标定词留空 = 全静默，不向任何会话推送。" }),
    /* @__PURE__ */ h.jsx(
      xt,
      {
        label: "会话标定词（、或逗号分隔，含任一即放行）",
        value: u,
        onChange: (E) => r(E.currentTarget.value),
        placeholder: "例：构成性、论文、写作"
      }
    ),
    /* @__PURE__ */ h.jsx(
      xt,
      {
        label: "结构库路径（留空用默认；改后重启 Hana 生效）",
        value: o,
        onChange: (E) => s(E.currentTarget.value),
        placeholder: "默认：workspace 写作模型插件/结构库"
      }
    ),
    /* @__PURE__ */ h.jsx(
      xt,
      {
        label: "单次推荐上限（1-2，设计上限 2）",
        value: d,
        onChange: (E) => m(E.currentTarget.value)
      }
    ),
    /* @__PURE__ */ h.jsxs("div", { className: "saverow", children: [
      /* @__PURE__ */ h.jsx(Ce, { variant: "primary", onClick: () => {
        S();
      }, children: "保存" }),
      p && /* @__PURE__ */ h.jsx("span", { className: "savehint", children: p })
    ] }),
    /* @__PURE__ */ h.jsx("p", { className: "hint", children: "命中判定：标定词过闸后，取最近对话文本与标签库/类型库做字典交集，交集词走共用检索层出候选；候选只附命中事实，采纳与否由会话内模型判断。同会话已注入条目不重复推。" })
  ] });
}
function DE({ onDone: u }) {
  const [r, o] = Y.useState(""), [s, d] = Y.useState(!1), [m, p] = Y.useState(null), [y, S] = Y.useState(!1), [E, N] = Y.useState(!1);
  Y.useEffect(() => {
    let x = !1;
    return (async () => {
      const K = await Ye("/api/import/status").catch(() => null);
      if (x || !K || !K.running) return;
      d(!0), p({ ok: !0, stage: "running", message: "拆解进行中（接管切页前的任务）…" });
      const B = await zo();
      x || (p(B), B.ok ? (Rt.toast.show({ message: "拆解完成，已入库", type: "success" }), u()) : B.failureTs && (Rt.toast.show({ message: "拆解失败，已记入待办", type: "error" }), u()), d(!1));
    })(), () => {
      x = !0;
    };
  }, []);
  async function g(x, K) {
    d(!0), p(null);
    try {
      const B = await Pe("/api/import/enqueue", { items: [x] });
      B && B.ok ? (p({ ok: !0, stage: "queued", message: `已入队：${K}（队列串行执行，进度看下方「导入队列」）` }), Rt.toast.show({ message: `已入队 ${B.queued} 篇，队列开始执行`, type: "success" }), u()) : p({ ok: !1, stage: "input", message: B?.message || "入队失败" });
    } catch (B) {
      p({ ok: !1, stage: "network", message: String(B?.message || B) });
    }
    d(!1);
  }
  async function H(x) {
    const K = String(x || "").trim();
    if (!K) {
      p({ ok: !1, stage: "input", message: "请先粘贴文献全文，或选择 / 拖入 md、txt、pdf 文件" });
      return;
    }
    const le = (K.split(`
`)[0] || "").replace(/^#+\s*/, "").trim().slice(0, 30) || "粘贴文献";
    await g({ label: le, text: K, source: "paste" }, le);
  }
  async function A(x) {
    if (/\.pdf$/i.test(x.name)) {
      if (x.size > 50 * 1024 * 1024) {
        p({ ok: !1, stage: "input", message: "PDF 超过 50 MB 上限" });
        return;
      }
      try {
        const K = await new Promise((B, le) => {
          const be = new FileReader();
          be.onload = () => B(String(be.result).split(",")[1] || ""), be.onerror = () => le(new Error("文件读取失败")), be.readAsDataURL(x);
        });
        await g({ label: x.name, pdfBase64: K, source: "file" }, x.name);
      } catch (K) {
        p({ ok: !1, stage: "input", message: String(K?.message || K) });
      }
      return;
    }
    if (!/\.(md|txt)$/i.test(x.name)) {
      p({ ok: !1, stage: "input", message: "支持 md / txt / pdf 文件" });
      return;
    }
    await g({ label: x.name, text: await x.text(), source: "file" }, x.name);
  }
  return /* @__PURE__ */ h.jsxs("div", { className: "import-zone", children: [
    /* @__PURE__ */ h.jsx("h4", { className: "import-title", children: "导入文献" }),
    /* @__PURE__ */ h.jsxs(
      "div",
      {
        className: y ? "drop on" : "drop",
        onDragOver: (x) => {
          x.preventDefault(), S(!0);
        },
        onDragLeave: () => S(!1),
        onDrop: (x) => {
          x.preventDefault(), S(!1);
          const K = x.dataTransfer.files?.[0];
          K && A(K);
        },
        children: [
          /* @__PURE__ */ h.jsx("p", { children: "把 .md / .txt / .pdf 文献拖到这里" }),
          /* @__PURE__ */ h.jsxs("label", { className: "filepick", children: [
            "或选择文件",
            /* @__PURE__ */ h.jsx(
              "input",
              {
                type: "file",
                accept: ".md,.txt,.pdf,text/plain,text/markdown,application/pdf",
                style: { display: "none" },
                onChange: (x) => {
                  const K = x.target.files?.[0];
                  x.target.value = "", K && A(K);
                }
              }
            )
          ] }),
          /* @__PURE__ */ h.jsxs("p", { className: "hint zotero-toggle", children: [
            "或",
            /* @__PURE__ */ h.jsx("button", { className: "linkbtn", onClick: () => N((x) => !x), children: E ? "收起 Zotero" : "从 Zotero 取" })
          ] })
        ]
      }
    ),
    E && /* @__PURE__ */ h.jsx(ME, {}),
    /* @__PURE__ */ h.jsx(
      "textarea",
      {
        className: "pastebox",
        value: r,
        onChange: (x) => o(x.target.value),
        placeholder: "也可以直接粘贴文献全文…",
        rows: 4,
        disabled: s
      }
    ),
    /* @__PURE__ */ h.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ h.jsx(Ce, { variant: "primary", disabled: s || !r.trim(), onClick: () => {
        H(r);
      }, children: "加入队列并开始" }),
      s && /* @__PURE__ */ h.jsx("span", { className: "hint", children: "正在入队…" })
    ] }),
    m && /* @__PURE__ */ h.jsx("pre", { className: m.ok ? "ok" : "err", children: m.ok ? m.stage === "running" ? `${m.message || "拆解进行中…"}` : m.stage === "queued" ? m.message : `已入库：${m.file}（第 ${m.attempts} 次通过${m.tagsAdded?.length ? `，新增标签 ${m.tagsAdded.join("、")}` : ""}）` + (m.pdfEngine ? `
PDF 引擎：${m.pdfEngine === "pymupdf" ? "PyMuPDF" : "unpdf（回退）—— 安装 PyMuPDF 可启用更稳的主引擎：python -m pip install pymupdf"}` : "") : `${m.message || "拆解失败"}${m.errors?.length ? `
` + m.errors.slice(0, 6).map((x) => `· ${x.field}：${x.message}`).join(`
`) : ""}${m.failureTs ? `
（已记入待办，可到「待办 · 导入失败」重试）` : ""}` }),
    /* @__PURE__ */ h.jsx(zE, {})
  ] });
}
const UE = {
  pending: "排队",
  running: "运行中",
  stopping: "停止中",
  done: "✓ 完成",
  failed: "✗ 失败",
  cancelled: "■ 已停止"
};
function hp({ nodes: u, active: r, onPick: o, depth: s = 0 }) {
  return /* @__PURE__ */ h.jsx(h.Fragment, { children: u.map((d) => /* @__PURE__ */ h.jsxs("div", { children: [
    /* @__PURE__ */ h.jsx(
      "button",
      {
        className: r === d.key ? "collbtn on" : "collbtn",
        style: { paddingLeft: 8 + s * 14 },
        onClick: () => o(d.key, d.name),
        children: d.name
      }
    ),
    d.children.length > 0 && /* @__PURE__ */ h.jsx(hp, { nodes: d.children, active: r, onPick: o, depth: s + 1 })
  ] }, d.key)) });
}
function zE() {
  const [u, r] = Y.useState([]), [o, s] = Y.useState(null), [d, m] = Y.useState(""), [p, y] = Y.useState(null);
  Y.useEffect(() => {
    let A = !0;
    const x = () => {
      Ye("/api/import/queue").then((B) => {
        A && B && B.ok && (r(B.items || []), s(B));
      }).catch(() => {
      });
    };
    x();
    const K = setInterval(x, 3e3);
    return () => {
      A = !1, clearInterval(K);
    };
  }, []);
  async function S() {
    const A = await Ye("/api/import/queue").catch(() => null);
    A && A.ok && (r(A.items || []), s(A));
  }
  async function E(A, x, K = {}) {
    const B = await Pe("/api/import/queue-action", x !== void 0 ? { action: A, key: x, ...K } : { action: A });
    return B && B.ok ? (s(B.snapshot), S(), !0) : (m(B?.message || "操作失败"), !1);
  }
  function N(A) {
    const x = p;
    y(null), !(x === null || x === A) && E("reorder", x, { before: A });
  }
  const g = o?.total ?? u.length, H = (o?.done ?? 0) + (o?.failed ?? 0) + (o?.cancelled ?? 0);
  return /* @__PURE__ */ h.jsxs("div", { className: "queuebox", children: [
    /* @__PURE__ */ h.jsxs("div", { className: "qhead", children: [
      /* @__PURE__ */ h.jsx("b", { children: "导入队列" }),
      /* @__PURE__ */ h.jsx("span", { className: "hint", children: g ? `${H}/${g} 完成 · 运行 ${(o?.running ?? 0) + (o?.stopping ?? 0)} · 排队 ${o?.pending ?? 0}${o?.paused ? " · 已暂停" : ""}` : "队列为空" }),
      /* @__PURE__ */ h.jsxs("span", { className: "qhead-actions", children: [
        /* @__PURE__ */ h.jsx(Ce, { disabled: !o || g === 0, onClick: () => {
          E(o?.paused ? "resume" : "pause");
        }, children: o?.paused ? "继续" : "暂停" }),
        /* @__PURE__ */ h.jsx(Ce, { disabled: !o || (o?.done ?? 0) + (o?.cancelled ?? 0) === 0, onClick: () => {
          E("clear-done");
        }, children: "清理已完成" })
      ] })
    ] }),
    d && /* @__PURE__ */ h.jsx("p", { className: "hint", children: d }),
    u.length === 0 ? /* @__PURE__ */ h.jsx("p", { className: "hint", children: "拖入文件、粘贴全文或从 Zotero 加入后，条目在这里串行拆解；支持单篇停止/开始与拖拽排序。" }) : /* @__PURE__ */ h.jsx("div", { className: "qlist", children: u.map((A) => /* @__PURE__ */ h.jsxs(
      "div",
      {
        className: p === A.key ? "qrow dragging" : "qrow",
        draggable: A.status === "pending",
        onDragStart: () => y(A.key),
        onDragOver: (x) => x.preventDefault(),
        onDrop: () => N(A.key),
        onDragEnd: () => y(null),
        children: [
          /* @__PURE__ */ h.jsx("span", { className: "qhandle", title: "拖拽排序（仅排队中）", children: "☰" }),
          /* @__PURE__ */ h.jsx("span", { className: "qstatus", children: UE[A.status] || A.status }),
          /* @__PURE__ */ h.jsx("span", { className: "qlabel", title: A.message || A.file || "", children: A.label }),
          (A.status === "pending" || A.status === "running") && /* @__PURE__ */ h.jsx(Ce, { onClick: () => {
            E("cancel", A.key);
          }, children: "停止" }),
          A.status === "stopping" && /* @__PURE__ */ h.jsx("span", { className: "hint", children: "停止中…" }),
          (A.status === "cancelled" || A.status === "failed") && /* @__PURE__ */ h.jsx(Ce, { onClick: () => {
            E("start", A.key);
          }, children: "开始" }),
          A.status !== "running" && A.status !== "stopping" && /* @__PURE__ */ h.jsx(Ce, { onClick: () => {
            E("remove", A.key);
          }, children: "移除" }),
          A.status === "failed" && A.message && /* @__PURE__ */ h.jsx("span", { className: "qerr", children: A.message }),
          A.status === "done" && /* @__PURE__ */ h.jsx("span", { className: "qok", children: "已入库" })
        ]
      },
      A.key
    )) })
  ] });
}
function ME() {
  const [u, r] = Y.useState([]), [o, s] = Y.useState(null), [d, m] = Y.useState([]), [p, y] = Y.useState(""), [S, E] = Y.useState("collection"), [N, g] = Y.useState(null), [H, A] = Y.useState(/* @__PURE__ */ new Set()), [x, K] = Y.useState(""), [B, le] = Y.useState(!1);
  Y.useEffect(() => {
    Ye("/api/zotero/collections").then((ie) => {
      ie && ie.ok ? r(ie.collections || []) : K(ie?.message || "分类读取失败（Zotero 桌面端在运行吗？）");
    }).catch(() => K("分类读取失败"));
  }, []);
  async function be(ie, oe) {
    E("collection"), s(ie), A(/* @__PURE__ */ new Set()), le(!0), K(`加载「${oe}」…`);
    try {
      const Te = await Ye(`/api/zotero/collection-items?key=${encodeURIComponent(ie)}`);
      Te && Te.ok ? (m(Te.items || []), Te.truncated ? K(`该分类较大，列表显示前 ${Te.items.length} 条文献；更多可用搜索收窄`) : (Te.items || []).length ? K("") : K("该分类没有可导入的文献条目")) : K(Te?.message || "条目读取失败");
    } catch (Te) {
      K(String(Te?.message || Te));
    }
    le(!1);
  }
  async function me() {
    E("search"), s(null), A(/* @__PURE__ */ new Set()), le(!0), K("");
    try {
      const ie = await Pe("/api/tool/zotero_search", { query: p, limit: 50 });
      ie && Array.isArray(ie.items) ? (g(ie.items.map((oe) => ({
        key: oe.key,
        title: oe.title,
        authors: oe.creators,
        year: String(oe.date || "").slice(0, 4),
        itemType: oe.itemType
      }))), ie.items.length || K("没有命中条目")) : K(ie?.message || "Zotero 查询失败");
    } catch (ie) {
      K(String(ie?.message || ie));
    }
    le(!1);
  }
  const J = S === "collection" ? d : N || [];
  function Ee(ie) {
    A((oe) => {
      const Te = new Set(oe);
      return Te.has(ie) ? Te.delete(ie) : Te.add(ie), Te;
    });
  }
  function de() {
    A((ie) => ie.size >= J.length && J.length > 0 ? /* @__PURE__ */ new Set() : new Set(J.map((oe) => oe.key)));
  }
  async function re() {
    const ie = J.filter((V) => H.has(V.key));
    if (!ie.length) {
      K("先勾选条目");
      return;
    }
    le(!0);
    const oe = [], Te = [];
    for (let V = 0; V < ie.length; V++) {
      const fe = ie[V];
      K(`解析附件 ${V + 1}/${ie.length}…`);
      try {
        const De = await Pe("/api/tool/zotero_item", { key: fe.key }), q = De && Array.isArray(De.attachments) && De.attachments[0] ? De.attachments[0] : null;
        if (!q) {
          Te.push(fe.title || fe.key);
          continue;
        }
        const M = await Pe("/api/tool/zotero_attachment_path", { attachmentKey: q.key || q });
        M && M.path ? oe.push({ label: fe.title || fe.key, pdfPath: String(M.path), source: `zotero:${fe.key}` }) : Te.push(fe.title || fe.key);
      } catch {
        Te.push(fe.title || fe.key);
      }
    }
    if (oe.length) {
      const V = await Pe("/api/import/enqueue", { items: oe });
      V && V.ok ? (K(`已入队 ${V.queued} 篇${Te.length ? `；${Te.length} 篇缺附件未入队：${Te.slice(0, 2).join("、")}${Te.length > 2 ? "…" : ""}` : ""}`), A(/* @__PURE__ */ new Set()), Rt.toast.show({ message: `已入队 ${V.queued} 篇，队列开始执行`, type: "success" })) : K(V?.message || "入队失败");
    } else
      K(`没有可入队条目${Te.length ? `（${Te.length} 篇缺附件）` : ""}`);
    le(!1);
  }
  async function Se(ie) {
    le(!0);
    try {
      const oe = await Pe("/api/tool/zotero_item", { key: ie }), Te = oe && Array.isArray(oe.attachments) && oe.attachments[0] ? oe.attachments[0] : null;
      if (!Te) {
        K("该条目无附件"), le(!1);
        return;
      }
      const V = await Pe("/api/tool/zotero_attachment_path", { attachmentKey: Te.key || Te });
      V && V.path ? (await Rt.clipboard.writeText(String(V.path)), Rt.toast.show({ message: "路径已复制", type: "success" })) : K(V?.message || "附件路径解析失败");
    } catch (oe) {
      K(String(oe?.message || oe));
    }
    le(!1);
  }
  return /* @__PURE__ */ h.jsxs("div", { className: "zbox", children: [
    /* @__PURE__ */ h.jsx("p", { className: "hint", children: "需 Zotero 桌面端运行，且设置 → 高级 → 勾选「Allow other applications on this computer to communicate with Zotero」。勾选后加入队列，串行拆解（并发 1，随时可停）。" }),
    /* @__PURE__ */ h.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ h.jsx(
        xt,
        {
          label: "搜索（标题 / 作者 / 年份）",
          value: p,
          onChange: (ie) => y(ie.currentTarget.value),
          onKeyDown: (ie) => {
            ie.key === "Enter" && me();
          }
        }
      ),
      /* @__PURE__ */ h.jsx(Ce, { disabled: B, onClick: () => {
        me();
      }, children: "搜索" }),
      /* @__PURE__ */ h.jsxs(Ce, { variant: "primary", disabled: B || H.size === 0, onClick: () => {
        re();
      }, children: [
        "加入队列（",
        H.size,
        "）"
      ] }),
      /* @__PURE__ */ h.jsx(Ce, { disabled: B || J.length === 0, onClick: de, children: H.size >= J.length && J.length > 0 ? "取消全选" : "全选本页" })
    ] }),
    x && /* @__PURE__ */ h.jsx("p", { className: "hint", children: x }),
    /* @__PURE__ */ h.jsxs("div", { className: "zgrid", children: [
      /* @__PURE__ */ h.jsxs("div", { className: "ztree", children: [
        /* @__PURE__ */ h.jsx(
          "div",
          {
            className: S === "collection" && !o ? "collbtn on" : "collbtn",
            onClick: () => {
              E("collection"), A(/* @__PURE__ */ new Set());
            },
            children: "按分类浏览"
          }
        ),
        /* @__PURE__ */ h.jsx(hp, { nodes: u, active: o, onPick: (ie, oe) => {
          be(ie, oe);
        } })
      ] }),
      /* @__PURE__ */ h.jsxs("div", { className: "zlist zlistpick", children: [
        J.length === 0 && /* @__PURE__ */ h.jsx("p", { className: "hint", children: S === "collection" ? "选择左侧分类加载条目，或用搜索。" : "搜索无结果。" }),
        J.map((ie) => /* @__PURE__ */ h.jsxs("label", { className: "zrow", children: [
          /* @__PURE__ */ h.jsx("input", { type: "checkbox", checked: H.has(ie.key), onChange: () => Ee(ie.key) }),
          /* @__PURE__ */ h.jsxs("span", { className: "zrow-main", children: [
            /* @__PURE__ */ h.jsx("b", { children: ie.title || "（无题名）" }),
            /* @__PURE__ */ h.jsx("span", { className: "hint", children: [ie.authors, ie.year].filter(Boolean).join(" · ") })
          ] }),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: "linkbtn",
              onClick: (oe) => {
                oe.preventDefault(), Se(ie.key);
              },
              children: "路径"
            }
          )
        ] }, ie.key))
      ] })
    ] })
  ] });
}
function qE({ stats: u, go: r, onDone: o }) {
  const s = u ? u.queuePending + u.failures : 0, [d, m] = Y.useState("loading");
  return Y.useEffect(() => {
    Ye("/api/config").then((p) => {
      const y = p?.config?.libraryPath ?? "";
      m(y && !String(y).startsWith("NOT_CONFIGURED") ? "ok" : "unconfigured");
    }).catch(() => m("loading"));
  }, []), /* @__PURE__ */ h.jsxs("div", { className: "home", children: [
    /* @__PURE__ */ h.jsx("p", { className: "tagline", children: "把论文拆成可回溯的论证结构，沉淀为写作模型，写论文时检索取用。" }),
    d === "unconfigured" && /* @__PURE__ */ h.jsxs("div", { className: "home-banner", children: [
      "尚未配置结构库。到「设置」填写 libraryPath 并保存，模板会自动铺到该目录，无需手动拷贝。",
      /* @__PURE__ */ h.jsx(Ce, { onClick: () => r("settings"), children: "前往设置" })
    ] }),
    /* @__PURE__ */ h.jsxs("ol", { className: "steps", children: [
      /* @__PURE__ */ h.jsx("li", { children: "把文献拖进面板一键拆解，或在对话里让我拆" }),
      /* @__PURE__ */ h.jsx("li", { children: "库里提出的疑问到「待办」处理，保证每条引文可回溯" }),
      /* @__PURE__ */ h.jsx("li", { children: "写论文时到「取用」检索同类模型，按出处引用" })
    ] }),
    /* @__PURE__ */ h.jsxs("div", { className: "home-actions", children: [
      /* @__PURE__ */ h.jsx(Ce, { variant: "primary", onClick: () => r("use"), children: "去取用" }),
      /* @__PURE__ */ h.jsx(Ce, { onClick: () => r("library"), children: "看结构库" }),
      /* @__PURE__ */ h.jsx(Ce, { disabled: !u || s === 0, onClick: () => r("todo"), children: s > 0 ? `处理待办（${s}）` : "暂无待办" })
    ] }),
    /* @__PURE__ */ h.jsx("div", { className: "statusbar", children: u ? `库内 ${u.papers} 篇目 · ${u.models} 模型 · 待办 ${s} 条` : "统计中…" }),
    /* @__PURE__ */ h.jsx(DE, { onDone: o })
  ] });
}
function HE({ tick: u, bump: r }) {
  const [o, s] = Y.useState([]), [d, m] = Y.useState(null), [p, y] = Y.useState(""), S = Y.useCallback(async () => {
    const g = await Ye("/api/import/failures").catch(() => ({ items: [] }));
    s(g.items || []);
  }, []);
  Y.useEffect(() => {
    S();
  }, [S, u]), Y.useEffect(() => {
    let g = !1;
    return (async () => {
      const H = await Ye("/api/import/status").catch(() => null);
      if (g || !H || !H.running) return;
      y("有导入任务进行中，等待结果…");
      const A = await zo();
      g || (y(A.ok ? `完成：${A.file}` : `仍失败：${A.message || "未知错误"}${A.failureTs ? "（已刷新记录）" : ""}`), (A.ok || A.failureTs) && (await S(), r()));
    })(), () => {
      g = !0;
    };
  }, []);
  async function E(g) {
    m(g.ts), y("");
    try {
      const H = await Pe("/api/import", { text: g.text, fromTs: g.ts });
      if (H.started) {
        y("重试中（约 1-3 分钟，可离开本页）…");
        const A = await zo();
        A.ok ? (y(`重试成功：${A.file}`), Rt.toast.show({ message: "重试成功，已入库", type: "success" })) : y(`仍失败：${A.message || "未知错误"}${A.failureTs ? "（已刷新记录）" : ""}`);
      } else H.ok ? (y(`重试成功：${H.file}`), Rt.toast.show({ message: "重试成功，已入库", type: "success" })) : y(`仍失败：${H.message || "未知错误"}`);
    } catch (H) {
      y(`请求失败：${String(H?.message || H)}`);
    }
    m(null), await S(), r();
  }
  async function N(g) {
    await Pe("/api/import/failures/dismiss", { ts: g.ts }).catch(() => null), await S(), r();
  }
  return o.length ? /* @__PURE__ */ h.jsxs("div", { children: [
    /* @__PURE__ */ h.jsxs("p", { className: "hint", children: [
      o.length > 0 && /* @__PURE__ */ h.jsxs("b", { children: [
        "共 ",
        o.length,
        " 条待处理　"
      ] }),
      "拆解失败的导入（多为校验未过或模型异常）连原文一起存在这里，重试走同一条链路。"
    ] }),
    o.map((g) => /* @__PURE__ */ h.jsxs("div", { className: "fail-item", children: [
      /* @__PURE__ */ h.jsxs("div", { className: "fail-head", children: [
        /* @__PURE__ */ h.jsx("b", { children: new Date(g.ts).toLocaleString() }),
        /* @__PURE__ */ h.jsx("span", { className: "badge", children: g.stage }),
        /* @__PURE__ */ h.jsxs("span", { className: "hint", children: [
          "尝试 ",
          g.attempts,
          " 次 · ",
          (g.text || "").length,
          " 字"
        ] })
      ] }),
      /* @__PURE__ */ h.jsx("div", { className: "fail-msg", children: g.message }),
      (g.errors || []).slice(0, 4).map((H, A) => /* @__PURE__ */ h.jsxs("div", { className: "hint", children: [
        "· ",
        H.field,
        "：",
        H.message
      ] }, A)),
      /* @__PURE__ */ h.jsxs("div", { className: "fail-actions", children: [
        /* @__PURE__ */ h.jsx(Ce, { variant: "primary", disabled: d === g.ts, onClick: () => {
          E(g);
        }, children: d === g.ts ? "重试中…" : "重试" }),
        /* @__PURE__ */ h.jsx(Ce, { disabled: d === g.ts, onClick: () => {
          N(g);
        }, children: "移除" })
      ] })
    ] }, g.ts)),
    p && /* @__PURE__ */ h.jsx("p", { className: p.startsWith("重试成功") ? "ok" : "err", children: p })
  ] }) : /* @__PURE__ */ h.jsx(nl, { title: "暂无导入失败", description: "导入拆解失败的文献会落在这里，可原样重试。" });
}
function LE() {
  const u = document.getElementById("root")?.dataset.surface || "page", [r, o] = Y.useState("home"), [s, d] = Y.useState({
    home: "",
    use: "search",
    library: "browse",
    todo: "score",
    settings: ""
  }), [m, p] = Y.useState(0), [y, S] = Y.useState(null), E = Y.useCallback(() => p((x) => x + 1), []), N = Y.useCallback((x) => o(x), []);
  Y.useEffect(() => {
    Rt.ready(), Rt.ui.resize({ height: u === "widget" ? 420 : 760 });
  }, [u]), Y.useEffect(() => {
    let x = !0;
    return vE().then((K) => {
      x && S(K);
    }).catch(() => {
      x && S(null);
    }), () => {
      x = !1;
    };
  }, [m, r]);
  const g = s[r], H = Y.useMemo(() => {
    switch (r) {
      case "home":
        return /* @__PURE__ */ h.jsx(qE, { stats: y, go: N, onDone: E });
      case "use":
        return g === "models" ? /* @__PURE__ */ h.jsx(xE, { tick: m }) : /* @__PURE__ */ h.jsx(RE, {});
      case "library":
        return g === "compare" ? /* @__PURE__ */ h.jsx(NE, { tick: m }) : g === "board" ? /* @__PURE__ */ h.jsx(_E, { tick: m }) : /* @__PURE__ */ h.jsx(AE, { tick: m });
      case "todo":
        return g === "queue" ? /* @__PURE__ */ h.jsx(SE, { tick: m, onChanged: E }) : g === "types" ? /* @__PURE__ */ h.jsx(TE, { tick: m, onChanged: E }) : g === "import-fail" ? /* @__PURE__ */ h.jsx(HE, { tick: m, bump: E }) : /* @__PURE__ */ h.jsx(yE, {});
      case "settings":
        return /* @__PURE__ */ h.jsx(jE, {});
    }
  }, [r, g, m, y, N, E]), A = y ? y.queuePending + y.failures : 0;
  return /* @__PURE__ */ h.jsx(cE, { mode: "inherit", className: "plugin-panel", children: /* @__PURE__ */ h.jsxs(
    Mn,
    {
      title: "论文结构建模",
      description: "把论文拆成可回溯的论证结构，沉淀为写作模型，写论文时检索取用。",
      actions: /* @__PURE__ */ h.jsx(Ce, { variant: "ghost", onClick: E, children: "刷新" }),
      children: [
        /* @__PURE__ */ h.jsx("nav", { className: "tabs zones", children: hE.map((x) => /* @__PURE__ */ h.jsxs("button", { className: r === x.id ? "tab on" : "tab", onClick: () => o(x.id), children: [
          x.label,
          x.id === "todo" && A > 0 && /* @__PURE__ */ h.jsx("span", { className: "nav-badge", children: A })
        ] }, x.id)) }),
        r !== "home" && r !== "settings" && /* @__PURE__ */ h.jsx("nav", { className: "tabs sub", children: mE[r].map((x) => /* @__PURE__ */ h.jsxs(
          "button",
          {
            className: g === x.id ? "tab on" : "tab",
            onClick: () => d((K) => ({ ...K, [r]: x.id })),
            children: [
              x.label,
              r === "todo" && x.id === "import-fail" && (y?.failures ?? 0) > 0 && /* @__PURE__ */ h.jsx("span", { className: "nav-badge", children: y?.failures ?? 0 }),
              r === "todo" && x.id === "queue" && (y?.queuePending ?? 0) > 0 && /* @__PURE__ */ h.jsx("span", { className: "nav-badge", children: y?.queuePending ?? 0 })
            ]
          },
          x.id
        )) }),
        /* @__PURE__ */ h.jsx("div", { className: "tab-body", children: H })
      ]
    }
  ) });
}
const Mg = document.getElementById("root");
Mg && y0.createRoot(Mg).render(/* @__PURE__ */ h.jsx(LE, {}));
