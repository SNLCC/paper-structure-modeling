var bo = { exports: {} }, Ki = {};
var mp;
function m0() {
  if (mp) return Ki;
  mp = 1;
  var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function o(s, h, m) {
    var v = null;
    if (m !== void 0 && (v = "" + m), h.key !== void 0 && (v = "" + h.key), "key" in h) {
      m = {};
      for (var b in h)
        b !== "key" && (m[b] = h[b]);
    } else m = h;
    return h = m.ref, {
      $$typeof: u,
      type: s,
      key: v,
      ref: h !== void 0 ? h : null,
      props: m
    };
  }
  return Ki.Fragment = r, Ki.jsx = o, Ki.jsxs = o, Ki;
}
var pp;
function p0() {
  return pp || (pp = 1, bo.exports = m0()), bo.exports;
}
var d = p0(), Eo = { exports: {} }, xe = {};
var gp;
function g0() {
  if (gp) return xe;
  gp = 1;
  var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), s = /* @__PURE__ */ Symbol.for("react.strict_mode"), h = /* @__PURE__ */ Symbol.for("react.profiler"), m = /* @__PURE__ */ Symbol.for("react.consumer"), v = /* @__PURE__ */ Symbol.for("react.context"), b = /* @__PURE__ */ Symbol.for("react.forward_ref"), S = /* @__PURE__ */ Symbol.for("react.suspense"), E = /* @__PURE__ */ Symbol.for("react.memo"), T = /* @__PURE__ */ Symbol.for("react.lazy"), p = /* @__PURE__ */ Symbol.for("react.activity"), L = /* @__PURE__ */ Symbol.for("react.view_transition"), N = Symbol.iterator;
  function O(g) {
    return g === null || typeof g != "object" ? null : (g = N && g[N] || g["@@iterator"], typeof g == "function" ? g : null);
  }
  var V = {
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
  function re(g, D, P) {
    this.props = g, this.context = D, this.refs = le, this.updater = P || V;
  }
  re.prototype.isReactComponent = {}, re.prototype.setState = function(g, D) {
    if (typeof g != "object" && typeof g != "function" && g != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, g, D, "setState");
  }, re.prototype.forceUpdate = function(g) {
    this.updater.enqueueForceUpdate(this, g, "forceUpdate");
  };
  function ce() {
  }
  ce.prototype = re.prototype;
  function K(g, D, P) {
    this.props = g, this.context = D, this.refs = le, this.updater = P || V;
  }
  var ie = K.prototype = new ce();
  ie.constructor = K, B(ie, re.prototype), ie.isPureReactComponent = !0;
  var ne = Array.isArray;
  function ue() {
  }
  var be = { H: null, A: null, T: null, S: null }, se = Object.prototype.hasOwnProperty;
  function ge(g, D, P) {
    var $ = P.ref;
    return {
      $$typeof: u,
      type: g,
      key: D,
      ref: $ !== void 0 ? $ : null,
      props: P
    };
  }
  function ve(g, D) {
    return ge(g.type, D, g.props);
  }
  function G(g) {
    return typeof g == "object" && g !== null && g.$$typeof === u;
  }
  function pe(g) {
    var D = { "=": "=0", ":": "=2" };
    return "$" + g.replace(/[=:]/g, function(P) {
      return D[P];
    });
  }
  var De = /\/+/g;
  function q(g, D) {
    return typeof g == "object" && g !== null && g.key != null ? pe("" + g.key) : D.toString(36);
  }
  function M(g) {
    switch (g.status) {
      case "fulfilled":
        return g.value;
      case "rejected":
        throw g.reason;
      default:
        switch (typeof g.status == "string" ? g.then(ue, ue) : (g.status = "pending", g.then(
          function(D) {
            g.status === "pending" && (g.status = "fulfilled", g.value = D);
          },
          function(D) {
            g.status === "pending" && (g.status = "rejected", g.reason = D);
          }
        )), g.status) {
          case "fulfilled":
            return g.value;
          case "rejected":
            throw g.reason;
        }
    }
    throw g;
  }
  function ee(g, D, P, $, fe) {
    var me = typeof g;
    (me === "undefined" || me === "boolean") && (g = null);
    var de = !1;
    if (g === null) de = !0;
    else
      switch (me) {
        case "bigint":
        case "string":
        case "number":
          de = !0;
          break;
        case "object":
          switch (g.$$typeof) {
            case u:
            case r:
              de = !0;
              break;
            case T:
              return de = g._init, ee(
                de(g._payload),
                D,
                P,
                $,
                fe
              );
          }
      }
    if (de)
      return fe = fe(g), de = $ === "" ? "." + q(g, 0) : $, ne(fe) ? (P = "", de != null && (P = de.replace(De, "$&/") + "/"), ee(fe, D, P, "", function(We) {
        return We;
      })) : fe != null && (G(fe) && (fe = ve(
        fe,
        P + (fe.key == null || g && g.key === fe.key ? "" : ("" + fe.key).replace(
          De,
          "$&/"
        ) + "/") + de
      )), D.push(fe)), 1;
    de = 0;
    var W = $ === "" ? "." : $ + ":";
    if (ne(g))
      for (var he = 0; he < g.length; he++)
        $ = g[he], me = W + q($, he), de += ee(
          $,
          D,
          P,
          me,
          fe
        );
    else if (he = O(g), typeof he == "function")
      for (g = he.call(g), he = 0; !($ = g.next()).done; )
        $ = $.value, me = W + q($, he++), de += ee(
          $,
          D,
          P,
          me,
          fe
        );
    else if (me === "object") {
      if (typeof g.then == "function")
        return ee(
          M(g),
          D,
          P,
          $,
          fe
        );
      throw D = String(g), Error(
        "Objects are not valid as a React child (found: " + (D === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : D) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return de;
  }
  function j(g, D, P) {
    if (g == null) return g;
    var $ = [], fe = 0;
    return ee(g, $, "", "", function(me) {
      return D.call(P, me, fe++);
    }), $;
  }
  function F(g) {
    if (g._status === -1) {
      var D = g._result, P = D();
      P.then(
        function($) {
          (g._status === 0 || g._status === -1) && (g._status = 1, g._result = $, P.status === void 0 && (P.status = "fulfilled", P.value = $));
        },
        function($) {
          (g._status === 0 || g._status === -1) && (g._status = 2, g._result = $, P.status === void 0 && (P.status = "rejected", P.reason = $));
        }
      ), g._status === -1 && (g._status = 0, g._result = P);
    }
    if (g._status === 1) return g._result.default;
    throw g._result;
  }
  var ae = typeof reportError == "function" ? reportError : function(g) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var D = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof g == "object" && g !== null && typeof g.message == "string" ? String(g.message) : String(g),
        error: g
      });
      if (!window.dispatchEvent(D)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", g);
      return;
    }
    console.error(g);
  };
  function I(g) {
    var D = be.T, P = {};
    P.types = D !== null ? D.types : null, be.T = P;
    try {
      var $ = g(), fe = be.S;
      fe !== null && fe(P, $), typeof $ == "object" && $ !== null && typeof $.then == "function" && $.then(ue, ae);
    } catch (me) {
      ae(me);
    } finally {
      D !== null && P.types !== null && (D.types = P.types), be.T = D;
    }
  }
  function te(g) {
    var D = be.T;
    if (D !== null) {
      var P = D.types;
      P === null ? D.types = [g] : P.indexOf(g) === -1 && P.push(g);
    } else I(te.bind(null, g));
  }
  var J = {
    map: j,
    forEach: function(g, D, P) {
      j(
        g,
        function() {
          D.apply(this, arguments);
        },
        P
      );
    },
    count: function(g) {
      var D = 0;
      return j(g, function() {
        D++;
      }), D;
    },
    toArray: function(g) {
      return j(g, function(D) {
        return D;
      }) || [];
    },
    only: function(g) {
      if (!G(g))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return g;
    }
  };
  return xe.Activity = p, xe.Children = J, xe.Component = re, xe.Fragment = o, xe.Profiler = h, xe.PureComponent = K, xe.StrictMode = s, xe.Suspense = S, xe.ViewTransition = L, xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = be, xe.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(g) {
      return be.H.useMemoCache(g);
    }
  }, xe.addTransitionType = te, xe.cache = function(g) {
    return function() {
      return g.apply(null, arguments);
    };
  }, xe.cacheSignal = function() {
    return null;
  }, xe.cloneElement = function(g, D, P) {
    if (g == null)
      throw Error(
        "The argument must be a React element, but you passed " + g + "."
      );
    var $ = B({}, g.props), fe = g.key;
    if (D != null)
      for (me in D.key !== void 0 && (fe = "" + D.key), D)
        !se.call(D, me) || me === "key" || me === "__self" || me === "__source" || me === "ref" && D.ref === void 0 || ($[me] = D[me]);
    var me = arguments.length - 2;
    if (me === 1) $.children = P;
    else if (1 < me) {
      for (var de = Array(me), W = 0; W < me; W++)
        de[W] = arguments[W + 2];
      $.children = de;
    }
    return ge(g.type, fe, $);
  }, xe.createContext = function(g) {
    return g = {
      $$typeof: v,
      _currentValue: g,
      _currentValue2: g,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, g.Provider = g, g.Consumer = {
      $$typeof: m,
      _context: g
    }, g;
  }, xe.createElement = function(g, D, P) {
    var $, fe = {}, me = null;
    if (D != null)
      for ($ in D.key !== void 0 && (me = "" + D.key), D)
        se.call(D, $) && $ !== "key" && $ !== "__self" && $ !== "__source" && (fe[$] = D[$]);
    var de = arguments.length - 2;
    if (de === 1) fe.children = P;
    else if (1 < de) {
      for (var W = Array(de), he = 0; he < de; he++)
        W[he] = arguments[he + 2];
      fe.children = W;
    }
    if (g && g.defaultProps)
      for ($ in de = g.defaultProps, de)
        fe[$] === void 0 && (fe[$] = de[$]);
    return ge(g, me, fe);
  }, xe.createRef = function() {
    return { current: null };
  }, xe.forwardRef = function(g) {
    return { $$typeof: b, render: g };
  }, xe.isValidElement = G, xe.lazy = function(g) {
    return {
      $$typeof: T,
      _payload: { _status: -1, _result: g },
      _init: F
    };
  }, xe.memo = function(g, D) {
    return {
      $$typeof: E,
      type: g,
      compare: D === void 0 ? null : D
    };
  }, xe.startTransition = I, xe.unstable_useCacheRefresh = function() {
    return be.H.useCacheRefresh();
  }, xe.use = function(g) {
    return be.H.use(g);
  }, xe.useActionState = function(g, D, P) {
    return be.H.useActionState(g, D, P);
  }, xe.useCallback = function(g, D) {
    return be.H.useCallback(g, D);
  }, xe.useContext = function(g) {
    return be.H.useContext(g);
  }, xe.useDebugValue = function() {
  }, xe.useDeferredValue = function(g, D) {
    return be.H.useDeferredValue(g, D);
  }, xe.useEffect = function(g, D) {
    return be.H.useEffect(g, D);
  }, xe.useEffectEvent = function(g) {
    return be.H.useEffectEvent(g);
  }, xe.useId = function() {
    return be.H.useId();
  }, xe.useImperativeHandle = function(g, D, P) {
    return be.H.useImperativeHandle(g, D, P);
  }, xe.useInsertionEffect = function(g, D) {
    return be.H.useInsertionEffect(g, D);
  }, xe.useLayoutEffect = function(g, D) {
    return be.H.useLayoutEffect(g, D);
  }, xe.useMemo = function(g, D) {
    return be.H.useMemo(g, D);
  }, xe.useOptimistic = function(g, D) {
    return be.H.useOptimistic(g, D);
  }, xe.useReducer = function(g, D, P) {
    return be.H.useReducer(g, D, P);
  }, xe.useRef = function(g) {
    return be.H.useRef(g);
  }, xe.useState = function(g) {
    return be.H.useState(g);
  }, xe.useSyncExternalStore = function(g, D, P) {
    return be.H.useSyncExternalStore(
      g,
      D,
      P
    );
  }, xe.useTransition = function() {
    return be.H.useTransition();
  }, xe.version = "19.3.0", xe;
}
var vp;
function Io() {
  return vp || (vp = 1, Eo.exports = g0()), Eo.exports;
}
var H = Io(), So = { exports: {} }, Zi = {}, To = { exports: {} }, Ao = {};
var yp;
function v0() {
  return yp || (yp = 1, (function(u) {
    function r(M, ee) {
      var j = M.length;
      M.push(ee);
      e: for (; 0 < j; ) {
        var F = j - 1 >>> 1, ae = M[F];
        if (0 < h(ae, ee))
          M[F] = ee, M[j] = ae, j = F;
        else break e;
      }
    }
    function o(M) {
      return M.length === 0 ? null : M[0];
    }
    function s(M) {
      if (M.length === 0) return null;
      var ee = M[0], j = M.pop();
      if (j !== ee) {
        M[0] = j;
        e: for (var F = 0, ae = M.length, I = ae >>> 1; F < I; ) {
          var te = 2 * (F + 1) - 1, J = M[te], g = te + 1, D = M[g];
          if (0 > h(J, j))
            g < ae && 0 > h(D, J) ? (M[F] = D, M[g] = j, F = g) : (M[F] = J, M[te] = j, F = te);
          else if (g < ae && 0 > h(D, j))
            M[F] = D, M[g] = j, F = g;
          else break e;
        }
      }
      return ee;
    }
    function h(M, ee) {
      var j = M.sortIndex - ee.sortIndex;
      return j !== 0 ? j : M.id - ee.id;
    }
    if (u.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var m = performance;
      u.unstable_now = function() {
        return m.now();
      };
    } else {
      var v = Date, b = v.now();
      u.unstable_now = function() {
        return v.now() - b;
      };
    }
    var S = [], E = [], T = 1, p = null, L = 3, N = !1, O = !1, V = !1, B = !1, le = typeof setTimeout == "function" ? setTimeout : null, re = typeof clearTimeout == "function" ? clearTimeout : null, ce = typeof setImmediate < "u" ? setImmediate : null;
    function K(M) {
      for (var ee = o(E); ee !== null; ) {
        if (ee.callback === null) s(E);
        else if (ee.startTime <= M)
          s(E), ee.sortIndex = ee.expirationTime, r(S, ee);
        else break;
        ee = o(E);
      }
    }
    function ie(M) {
      if (V = !1, K(M), !O)
        if (o(S) !== null)
          O = !0, ne || (ne = !0, G());
        else {
          var ee = o(E);
          ee !== null && q(ie, ee.startTime - M);
        }
    }
    var ne = !1, ue = -1, be = 5, se = -1;
    function ge() {
      return B ? !0 : !(u.unstable_now() - se < be);
    }
    function ve() {
      if (B = !1, ne) {
        var M = u.unstable_now();
        se = M;
        var ee = !0;
        try {
          e: {
            O = !1, V && (V = !1, re(ue), ue = -1), N = !0;
            var j = L;
            try {
              t: {
                for (K(M), p = o(S); p !== null && !(p.expirationTime > M && ge()); ) {
                  var F = p.callback;
                  if (typeof F == "function") {
                    p.callback = null, L = p.priorityLevel;
                    var ae = F(
                      p.expirationTime <= M
                    );
                    if (M = u.unstable_now(), typeof ae == "function") {
                      p.callback = ae, K(M), ee = !0;
                      break t;
                    }
                    p === o(S) && s(S), K(M);
                  } else s(S);
                  p = o(S);
                }
                if (p !== null) ee = !0;
                else {
                  var I = o(E);
                  I !== null && q(
                    ie,
                    I.startTime - M
                  ), ee = !1;
                }
              }
              break e;
            } finally {
              p = null, L = j, N = !1;
            }
            ee = void 0;
          }
        } finally {
          ee ? G() : ne = !1;
        }
      }
    }
    var G;
    if (typeof ce == "function")
      G = function() {
        ce(ve);
      };
    else if (typeof MessageChannel < "u") {
      var pe = new MessageChannel(), De = pe.port2;
      pe.port1.onmessage = ve, G = function() {
        De.postMessage(null);
      };
    } else
      G = function() {
        le(ve, 0);
      };
    function q(M, ee) {
      ue = le(function() {
        M(u.unstable_now());
      }, ee);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, u.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : be = 0 < M ? Math.floor(1e3 / M) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return L;
    }, u.unstable_next = function(M) {
      switch (L) {
        case 1:
        case 2:
        case 3:
          var ee = 3;
          break;
        default:
          ee = L;
      }
      var j = L;
      L = ee;
      try {
        return M();
      } finally {
        L = j;
      }
    }, u.unstable_requestPaint = function() {
      B = !0;
    }, u.unstable_runWithPriority = function(M, ee) {
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
      var j = L;
      L = M;
      try {
        return ee();
      } finally {
        L = j;
      }
    }, u.unstable_scheduleCallback = function(M, ee, j) {
      var F = u.unstable_now();
      switch (typeof j == "object" && j !== null ? (j = j.delay, j = typeof j == "number" && 0 < j ? F + j : F) : j = F, M) {
        case 1:
          var ae = -1;
          break;
        case 2:
          ae = 250;
          break;
        case 5:
          ae = 1073741823;
          break;
        case 4:
          ae = 1e4;
          break;
        default:
          ae = 5e3;
      }
      return ae = j + ae, M = {
        id: T++,
        callback: ee,
        priorityLevel: M,
        startTime: j,
        expirationTime: ae,
        sortIndex: -1
      }, j > F ? (M.sortIndex = j, r(E, M), o(S) === null && M === o(E) && (V ? (re(ue), ue = -1) : V = !0, q(ie, j - F))) : (M.sortIndex = ae, r(S, M), O || N || (O = !0, ne || (ne = !0, G()))), M;
    }, u.unstable_shouldYield = ge, u.unstable_wrapCallback = function(M) {
      var ee = L;
      return function() {
        var j = L;
        L = ee;
        try {
          return M.apply(this, arguments);
        } finally {
          L = j;
        }
      };
    };
  })(Ao)), Ao;
}
var bp;
function y0() {
  return bp || (bp = 1, To.exports = v0()), To.exports;
}
var No = { exports: {} }, Rt = {};
var Ep;
function b0() {
  if (Ep) return Rt;
  Ep = 1;
  var u = Io();
  function r(T) {
    var p = "https://react.dev/errors/" + T;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var L = 2; L < arguments.length; L++)
        p += "&args[]=" + encodeURIComponent(arguments[L]);
    }
    return "Minified React error #" + T + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  }, h = /* @__PURE__ */ Symbol.for("react.portal"), m = /* @__PURE__ */ Symbol.for("react.recoverable"), v = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function b(T, p, L) {
    var N = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: h,
      key: N == null ? null : N === v ? v : "" + N,
      children: T,
      containerInfo: p,
      implementation: L
    };
  }
  var S = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function E(T, p) {
    if (T === "font") return "";
    if (typeof p == "string")
      return p === "use-credentials" ? p : "";
  }
  return Rt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, Rt.browser = function(T) {
    return { $$typeof: m, _reason: T };
  }, Rt.createPortal = function(T, p) {
    var L = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
      throw Error(r(299));
    return b(T, p, null, L);
  }, Rt.flushSync = function(T) {
    var p = S.T, L = s.p;
    try {
      if (S.T = null, s.p = 2, T) return T();
    } finally {
      S.T = p, s.p = L, s.d.f();
    }
  }, Rt.preconnect = function(T, p) {
    typeof T == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, s.d.C(T, p));
  }, Rt.prefetchDNS = function(T) {
    typeof T == "string" && s.d.D(T);
  }, Rt.preinit = function(T, p) {
    if (typeof T == "string" && p && typeof p.as == "string") {
      var L = p.as, N = E(L, p.crossOrigin), O = typeof p.integrity == "string" ? p.integrity : void 0, V = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      L === "style" ? s.d.S(
        T,
        typeof p.precedence == "string" ? p.precedence : void 0,
        {
          crossOrigin: N,
          integrity: O,
          fetchPriority: V
        }
      ) : L === "script" && s.d.X(T, {
        crossOrigin: N,
        integrity: O,
        fetchPriority: V,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      });
    }
  }, Rt.preinitModule = function(T, p) {
    if (typeof T == "string")
      if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
          var L = E(
            p.as,
            p.crossOrigin
          );
          s.d.M(T, {
            crossOrigin: L,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0
          });
        }
      } else p == null && s.d.M(T);
  }, Rt.preload = function(T, p) {
    if (typeof T == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var L = p.as, N = E(L, p.crossOrigin);
      s.d.L(T, L, {
        crossOrigin: N,
        integrity: typeof p.integrity == "string" ? p.integrity : void 0,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0,
        type: typeof p.type == "string" ? p.type : void 0,
        fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0,
        referrerPolicy: typeof p.referrerPolicy == "string" ? p.referrerPolicy : void 0,
        imageSrcSet: typeof p.imageSrcSet == "string" ? p.imageSrcSet : void 0,
        imageSizes: typeof p.imageSizes == "string" ? p.imageSizes : void 0,
        media: typeof p.media == "string" ? p.media : void 0
      });
    }
  }, Rt.preloadModule = function(T, p) {
    if (typeof T == "string")
      if (p) {
        var L = E(p.as, p.crossOrigin);
        s.d.m(T, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: L,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0
        });
      } else s.d.m(T);
  }, Rt.requestFormReset = function(T) {
    s.d.r(T);
  }, Rt.unstable_batchedUpdates = function(T, p) {
    return T(p);
  }, Rt.useFormState = function(T, p, L) {
    return S.H.useFormState(T, p, L);
  }, Rt.useFormStatus = function() {
    return S.H.useHostTransitionStatus();
  }, Rt.version = "19.3.0", Rt;
}
var Sp;
function Bp() {
  if (Sp) return No.exports;
  Sp = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (r) {
        console.error(r);
      }
  }
  return u(), No.exports = b0(), No.exports;
}
var Tp;
function E0() {
  if (Tp) return Zi;
  Tp = 1;
  var u = y0(), r = Io(), o = Bp();
  function s(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function h(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function m(e) {
    for (var t = e, n = t; n && !n.alternate; )
      t = n, (t.flags & 4098) !== 0 && (e = t.return), n = t.return;
    for (; t.return; ) t = t.return;
    return t.tag === 3 ? e : null;
  }
  function v(e) {
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
  function T(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = T(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  function p(e, t, n, a, l, i) {
    for (; e !== null; ) {
      if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && n(e, a, l, i) || (e.tag !== 22 || e.memoizedState === null) && (t || e.tag !== 5 && e.tag !== 27) && p(
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
  function L(e) {
    for (e = e.return; e !== null; ) {
      if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
      e = e.return;
    }
    return null;
  }
  function N(e) {
    var t = !1;
    for (e = e.return; e !== null && (e.tag === 4 && (t = !0), !(e.tag === 3 || e.tag === 5 || e.tag === 27)); )
      e = e.return;
    return t;
  }
  function O(e) {
    var t = [null, null], n = L(e);
    return n === null || V(
      t,
      e,
      n.child,
      { foundSelf: !1 }
    ), t;
  }
  function V(e, t, n, a) {
    for (; n !== null; ) {
      if (n === t) a.foundSelf = !0;
      else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
        if (a.foundSelf) return e[1] = n, !0;
        e[0] = n;
      } else if ((n.tag !== 22 || n.memoizedState === null) && V(
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
  var le = null, re = null;
  function ce(e, t, n) {
    return e === n ? !0 : e === t ? (le = e, !0) : !1;
  }
  function K(e, t, n) {
    return e === n ? (re = e, !1) : e === t ? (re !== null && (le = e), !0) : !1;
  }
  function ie(e) {
    if (e === null) return null;
    do
      e = e === null ? null : e.return;
    while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
    return e || null;
  }
  function ne(e, t, n) {
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
  var ue = Object.assign, be = /* @__PURE__ */ Symbol.for("react.element"), se = /* @__PURE__ */ Symbol.for("react.transitional.element"), ge = /* @__PURE__ */ Symbol.for("react.portal"), ve = /* @__PURE__ */ Symbol.for("react.fragment"), G = /* @__PURE__ */ Symbol.for("react.strict_mode"), pe = /* @__PURE__ */ Symbol.for("react.profiler"), De = /* @__PURE__ */ Symbol.for("react.consumer"), q = /* @__PURE__ */ Symbol.for("react.context"), M = /* @__PURE__ */ Symbol.for("react.forward_ref"), ee = /* @__PURE__ */ Symbol.for("react.suspense"), j = /* @__PURE__ */ Symbol.for("react.suspense_list"), F = /* @__PURE__ */ Symbol.for("react.memo"), ae = /* @__PURE__ */ Symbol.for("react.lazy"), I = /* @__PURE__ */ Symbol.for("react.activity"), te = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), J = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), g = /* @__PURE__ */ Symbol.for("react.view_transition"), D = /* @__PURE__ */ Symbol.for("react.recoverable"), P = Symbol.iterator;
  function $(e) {
    return e === null || typeof e != "object" ? null : (e = P && e[P] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var fe = /* @__PURE__ */ Symbol.for("react.client.reference");
  function me(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === fe ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ve:
        return "Fragment";
      case pe:
        return "Profiler";
      case G:
        return "StrictMode";
      case ee:
        return "Suspense";
      case j:
        return "SuspenseList";
      case I:
        return "Activity";
      case g:
        return "ViewTransition";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case ge:
          return "Portal";
        case q:
          return e.displayName || "Context";
        case De:
          return (e._context.displayName || "Context") + ".Consumer";
        case M:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case F:
          return t = e.displayName || null, t !== null ? t : me(e.type) || "Memo";
        case ae:
          t = e._payload, e = e._init;
          try {
            return me(e(t));
          } catch {
          }
      }
    return null;
  }
  var de = Array.isArray, W = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, he = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, We = {
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
  var Xt = an(null), C = an(null), Z = an(null), Y = an(null);
  function k(e, t) {
    switch (Qe(Z, t), Qe(C, e), Qe(Xt, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Am(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Am(t), e = Nm(t, e);
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
  function Se() {
    Ne(Xt), Ne(C), Ne(Z);
  }
  function Ve(e) {
    var t = e.memoizedState;
    t !== null && (Gl._currentValue = t.memoizedState, Qe(Y, e)), t = Xt.current;
    var n = Nm(t, e.type);
    t !== n && (Qe(C, e), Qe(Xt, n));
  }
  function $e(e) {
    C.current === e && (Ne(Xt), Ne(C)), Y.current === e && (Ne(Y), Gl._currentValue = We);
  }
  var Tt, Ht;
  function At(e) {
    if (Tt === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Tt = t && t[1] || "", Ht = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Tt + e + Ht;
  }
  var Ra = !1;
  function pn(e, t) {
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
                } catch (oe) {
                  var _ = oe;
                }
                Reflect.construct(e, [], Q);
              } else {
                try {
                  Q.call();
                } catch (oe) {
                  _ = oe;
                }
                Q = !1;
                try {
                  var U = Object.getOwnPropertyDescriptor(
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
                  Q && (U !== void 0 ? Object.defineProperty(e.prototype, "props", U) : delete e.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (oe) {
                _ = oe;
              }
              (Q = e()) && typeof Q.catch == "function" && Q.catch(function() {
              });
            }
          } catch (oe) {
            if (oe && _ && typeof oe.stack == "string")
              return [oe.stack, _.stack];
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
        var y = c.split(`
`), x = f.split(`
`);
        for (l = a = 0; a < y.length && !y[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; l < x.length && !x[l].includes(
          "DetermineComponentFrameRoot"
        ); )
          l++;
        if (a === y.length || l === x.length)
          for (a = y.length - 1, l = x.length - 1; 1 <= a && 0 <= l && y[a] !== x[l]; )
            l--;
        for (; 1 <= a && 0 <= l; a--, l--)
          if (y[a] !== x[l]) {
            if (a !== 1 || l !== 1)
              do
                if (a--, l--, 0 > l || y[a] !== x[l]) {
                  var z = `
` + y[a].replace(" at new ", " at ");
                  return e.displayName && z.includes("<anonymous>") && (z = z.replace("<anonymous>", e.displayName)), z;
                }
              while (1 <= a && 0 <= l);
            break;
          }
      }
    } finally {
      Ra = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? At(n) : "";
  }
  function ja(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return At(e.type);
      case 16:
        return At("Lazy");
      case 13:
        return e.child !== t && t !== null ? At("Suspense Fallback") : At("Suspense");
      case 19:
        return At("SuspenseList");
      case 0:
      case 15:
        return pn(e.type, !1);
      case 11:
        return pn(e.type.render, !1);
      case 1:
        return pn(e.type, !0);
      case 31:
        return At("Activity");
      case 30:
        return At("ViewTransition");
      default:
        return "";
    }
  }
  function Wl(e) {
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
  var gn = Object.prototype.hasOwnProperty, Yr = u.unstable_scheduleCallback, Xr = u.unstable_cancelCallback, bg = u.unstable_shouldYield, Eg = u.unstable_requestPaint, Qt = u.unstable_now, Sg = u.unstable_getCurrentPriorityLevel, Qo = u.unstable_ImmediatePriority, ko = u.unstable_UserBlockingPriority, su = u.unstable_NormalPriority, Tg = u.unstable_LowPriority, Ko = u.unstable_IdlePriority, Ag = u.log, Ng = u.unstable_setDisableYieldValue, ei = null, kt = null;
  function Wn(e) {
    if (typeof Ag == "function" && Ng(e), kt && typeof kt.setStrictMode == "function")
      try {
        kt.setStrictMode(ei, e);
      } catch {
      }
  }
  var Kt = Math.clz32 ? Math.clz32 : Og, _g = Math.log, wg = Math.LN2;
  function Og(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (_g(e) / wg | 0) | 0;
  }
  var cu = 256, ou = 262144, fu = 4194304;
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
  function du(e, t, n) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var l = 0, i = e.suspendedLanes, c = e.pingedLanes;
    e = e.warmLanes;
    var f = a & 134217727;
    return f !== 0 ? (a = f & ~i, a !== 0 ? l = Da(a) : (c &= f, c !== 0 ? l = Da(c) : n || (n = f & ~e, n !== 0 && (l = Da(n))))) : (f = a & ~i, f !== 0 ? l = Da(f) : c !== 0 ? l = Da(c) : n || (n = a & ~e, n !== 0 && (l = Da(n)))), l === 0 ? 0 : t !== 0 && t !== l && (t & i) === 0 && (i = l & -l, n = t & -t, i >= n || i === 32 && (n & 4194048) !== 0) ? t : l;
  }
  function ti(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Zo(e, t) {
    (t & 8) !== 0 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var a = 31 - Kt(n), l = 1 << a;
        t |= e[a], n &= ~l;
      }
    return t;
  }
  function Cg(e, t) {
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
  function Jo() {
    var e = fu;
    return fu <<= 1, (fu & 62914560) === 0 && (fu = 4194304), e;
  }
  function Qr(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ni(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function xg(e, t, n, a, l, i) {
    var c = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var f = e.entanglements, y = e.expirationTimes, x = e.hiddenUpdates;
    for (n = c & ~n; 0 < n; ) {
      var z = 31 - Kt(n), Q = 1 << z;
      f[z] = 0, y[z] = -1;
      var _ = x[z];
      if (_ !== null)
        for (x[z] = null, z = 0; z < _.length; z++) {
          var U = _[z];
          U !== null && (U.lane &= -536870913);
        }
      n &= ~Q;
    }
    a !== 0 && $o(e, a, 0), i !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(c & ~t));
  }
  function $o(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - Kt(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 261930;
  }
  function Fo(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var a = 31 - Kt(n), l = 1 << a;
      l & t | e[a] & t && (e[a] |= t), n &= ~l;
    }
  }
  function Po(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : kr(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function kr(e) {
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
  function Kr(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Wo() {
    var e = he.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : rp(e.type));
  }
  function ef(e, t) {
    var n = he.p;
    try {
      return he.p = e, t();
    } finally {
      he.p = n;
    }
  }
  var qn = Math.random().toString(36).slice(2), Nt = "__reactFiber$" + qn, qt = "__reactProps$" + qn, nl = "__reactContainer$" + qn, tf = "__reactEvents$" + qn, Rg = "__reactListeners$" + qn, jg = "__reactHandles$" + qn, nf = "__reactResources$" + qn, ai = "__reactMarker$" + qn, hu = "__reactLoad$" + qn;
  function mu(e) {
    delete e[Nt], delete e[qt], delete e[Rg], delete e[jg];
  }
  function Ua(e) {
    var t;
    if (t = e[Nt]) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[nl] || n[Nt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = Vm(e); e !== null; ) {
            if (n = e[Nt]) return n;
            e = Vm(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function al(e) {
    if (e = e[Nt] || e[nl]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function li(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(s(33));
  }
  function ll(e) {
    var t = e[nf];
    return t || (t = e[nf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function gt(e) {
    e[ai] = !0;
  }
  function af(e) {
    e[hu] = void 0;
  }
  var lf = /* @__PURE__ */ new Set(), uf = {};
  function za(e, t) {
    il(e, t), il(e + "Capture", t);
  }
  function il(e, t) {
    for (uf[e] = t, e = 0; e < t.length; e++)
      lf.add(t[e]);
  }
  var Dg = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), rf = {}, sf = {};
  function Ug(e) {
    return gn.call(sf, e) ? !0 : gn.call(rf, e) ? !1 : Dg.test(e) ? sf[e] = !0 : (rf[e] = !0, !1);
  }
  var Ge = !1;
  function cf() {
    var e = Ge;
    return Ge = !1, e;
  }
  function pu(e, t, n) {
    if (Ug(t))
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
  function Zt(e) {
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
  function of(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function zg(e, t, n) {
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
  function Zr(e) {
    if (!e._valueTracker) {
      var t = of(e) ? "checked" : "value";
      e._valueTracker = zg(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function ff(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), a = "";
    return e && (a = of(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), !0) : !1;
  }
  var Mg = /[\n"\\]/g;
  function ln(e) {
    return e.replace(
      Mg,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Jr(e, t, n, a, l, i, c, f) {
    e.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? e.type = c : e.removeAttribute("type"), t != null ? c === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Zt(t)) : e.value !== "" + Zt(t) && (e.value = "" + Zt(t)) : c !== "submit" && c !== "reset" || e.removeAttribute("value"), t != null ? c === "number" && e.value == t ? $r(e, Zt(e.value)) : $r(e, Zt(t)) : n != null ? $r(e, Zt(n)) : a != null && e.removeAttribute("value"), l == null && i != null && (e.defaultChecked = !!i), l != null && (e.checked = l && typeof l != "function" && typeof l != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.name = "" + Zt(f) : e.removeAttribute("name");
  }
  function df(e, t, n, a, l, i, c, f) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || n != null) {
      if (!(i !== "submit" && i !== "reset" || t != null)) {
        Zr(e);
        return;
      }
      n = n != null ? "" + Zt(n) : "", t = t != null ? "" + Zt(t) : n, f || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? l, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = f ? e.checked : !!a, e.defaultChecked = !!a, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.name = c), Zr(e);
  }
  function $r(e, t) {
    e.defaultValue !== "" + t && (e.defaultValue = "" + t);
  }
  function ul(e, t, n, a) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++)
        t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && a && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Zt(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, a && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function hf(e, t, n) {
    if (t != null && (t = "" + Zt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Zt(n) : "";
  }
  function mf(e, t, n, a) {
    if (t == null) {
      if (a != null) {
        if (n != null) throw Error(s(92));
        if (de(a)) {
          if (1 < a.length) throw Error(s(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), t = n;
    }
    n = Zt(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a), Zr(e);
  }
  function rl(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Hg = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function pf(e, t, n) {
    var a = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Hg.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function gf(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(s(62));
    if (e = e.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "", Ge = !0);
      for (var l in t)
        a = t[l], t.hasOwnProperty(l) && n[l] !== a && (pf(e, l, a), Ge = !0);
    } else
      for (var i in t)
        t.hasOwnProperty(i) && pf(e, i, t[i]);
  }
  function Fr(e) {
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
  var qg = /* @__PURE__ */ new Map([
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
  ]), Lg = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function vu(e) {
    return Lg.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Nn() {
  }
  var Pr = null;
  function Wr(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var sl = null, cl = null;
  function vf(e) {
    var t = al(e);
    if (t && (e = t.stateNode)) {
      var n = e[qt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Jr(
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
                var l = a[qt] || null;
                if (!l) throw Error(s(90));
                Jr(
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
              a = n[t], a.form === e.form && ff(a);
          }
          break e;
        case "textarea":
          hf(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && ul(e, !!n.multiple, t, !1);
      }
    }
  }
  var es = !1;
  function yf(e, t, n) {
    if (es) return e(t, n);
    es = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (es = !1, (sl !== null || cl !== null) && (vr(), sl && (t = sl, e = cl, cl = sl = null, vf(t), e)))
        for (t = 0; t < e.length; t++) vf(e[t]);
    }
  }
  function ii(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var a = n[qt] || null;
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
  var In = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), ts = !1;
  if (In)
    try {
      var ui = {};
      Object.defineProperty(ui, "passive", {
        get: function() {
          ts = !0;
        }
      }), window.addEventListener("test", ui, ui), window.removeEventListener("test", ui, ui);
    } catch {
      ts = !1;
    }
  var ea = null, ns = null, yu = null;
  function bf() {
    if (yu) return yu;
    var e, t = ns, n = t.length, a, l = "value" in ea ? ea.value : ea.textContent, i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var c = n - e;
    for (a = 1; a <= c && t[n - a] === l[i - a]; a++) ;
    return yu = l.slice(e, 1 < a ? 1 - a : void 0);
  }
  function bu(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Eu() {
    return !0;
  }
  function Ef() {
    return !1;
  }
  function Dt(e) {
    function t(n, a, l, i, c) {
      this._reactName = n, this._targetInst = l, this.type = a, this.nativeEvent = i, this.target = c, this.currentTarget = null;
      for (var f in e)
        e.hasOwnProperty(f) && (n = e[f], this[f] = n ? n(i) : i[f]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? Eu : Ef, this.isPropagationStopped = Ef, this;
    }
    return ue(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Eu);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Eu);
      },
      persist: function() {
      },
      isPersistent: Eu
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
  }, Su = Dt(ta), ri = ue({}, ta, { view: 0, detail: 0 }), Ig = Dt(ri), as, ls, si, Tu = ue({}, ri, {
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
    getModifierState: us,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== si && (si && e.type === "mousemove" ? (as = e.screenX - si.screenX, ls = e.screenY - si.screenY) : ls = as = 0, si = e), as);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : ls;
    }
  }), Sf = Dt(Tu), Bg = ue({}, Tu, { dataTransfer: 0 }), Vg = Dt(Bg), Gg = ue({}, ri, { relatedTarget: 0 }), is = Dt(Gg), Yg = ue({}, ta, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Xg = Dt(Yg), Qg = ue({}, ta, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), kg = Dt(Qg), Kg = ue({}, ta, { data: 0 }), Tf = Dt(Kg), Zg = {
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
  }, Jg = {
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
  }, $g = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Fg(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = $g[e]) ? !!t[e] : !1;
  }
  function us() {
    return Fg;
  }
  var Pg = ue({}, ri, {
    key: function(e) {
      if (e.key) {
        var t = Zg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = bu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Jg[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: us,
    charCode: function(e) {
      return e.type === "keypress" ? bu(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? bu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Wg = Dt(Pg), ev = ue({}, Tu, {
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
  }), Af = Dt(ev), tv = ue({}, ta, { submitter: 0 }), nv = Dt(tv), av = ue({}, ri, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: us
  }), lv = Dt(av), iv = ue({}, ta, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), uv = Dt(iv), rv = ue({}, Tu, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), sv = Dt(rv), cv = ue({}, ta, {
    newState: 0,
    oldState: 0,
    source: 0
  }), ov = Dt(cv), fv = [9, 13, 27, 32], rs = In && "CompositionEvent" in window, ci = null;
  In && "documentMode" in document && (ci = document.documentMode);
  var dv = In && "TextEvent" in window && !ci, Nf = In && (!rs || ci && 8 < ci && 11 >= ci), _f = " ", wf = !1;
  function Of(e, t) {
    switch (e) {
      case "keyup":
        return fv.indexOf(t.keyCode) !== -1;
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
  function Cf(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var ol = !1;
  function hv(e, t) {
    switch (e) {
      case "compositionend":
        return Cf(t);
      case "keypress":
        return t.which !== 32 ? null : (wf = !0, _f);
      case "textInput":
        return e = t.data, e === _f && wf ? null : e;
      default:
        return null;
    }
  }
  function mv(e, t) {
    if (ol)
      return e === "compositionend" || !rs && Of(e, t) ? (e = bf(), yu = ns = ea = null, ol = !1, e) : null;
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
        return Nf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var pv = {
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
  function xf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!pv[e.type] : t === "textarea";
  }
  function Rf(e, t, n, a) {
    sl ? cl ? cl.push(a) : cl = [a] : sl = a, t = Ar(t, "onChange"), 0 < t.length && (n = new Su(
      "onChange",
      "change",
      null,
      n,
      a
    ), e.push({ event: n, listeners: t }));
  }
  var oi = null, fi = null;
  function gv(e) {
    vm(e, 0);
  }
  function Au(e) {
    var t = li(e);
    if (ff(t)) return e;
  }
  function jf(e, t) {
    if (e === "change") return t;
  }
  var Df = !1;
  if (In) {
    var ss;
    if (In) {
      var cs = "oninput" in document;
      if (!cs) {
        var Uf = document.createElement("div");
        Uf.setAttribute("oninput", "return;"), cs = typeof Uf.oninput == "function";
      }
      ss = cs;
    } else ss = !1;
    Df = ss && (!document.documentMode || 9 < document.documentMode);
  }
  function zf() {
    oi && (oi.detachEvent("onpropertychange", Mf), fi = oi = null);
  }
  function Mf(e) {
    if (e.propertyName === "value" && Au(fi)) {
      var t = [];
      Rf(
        t,
        fi,
        e,
        Wr(e)
      ), yf(gv, t);
    }
  }
  function vv(e, t, n) {
    e === "focusin" ? (zf(), oi = t, fi = n, oi.attachEvent("onpropertychange", Mf)) : e === "focusout" && zf();
  }
  function yv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Au(fi);
  }
  function bv(e, t) {
    if (e === "click") return Au(t);
  }
  function Ev(e, t) {
    if (e === "input" || e === "change")
      return Au(t);
  }
  function Sv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Jt = typeof Object.is == "function" ? Object.is : Sv;
  function di(e, t) {
    if (Jt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var l = n[a];
      if (!gn.call(t, l) || !Jt(e[l], t[l]))
        return !1;
    }
    return !0;
  }
  function os(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Hf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function qf(e, t) {
    var n = Hf(e);
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
      n = Hf(n);
    }
  }
  function Lf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Lf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function If(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = os(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = os(e.document);
    }
    return t;
  }
  function fs(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Tv = In && "documentMode" in document && 11 >= document.documentMode, fl = null, ds = null, hi = null, hs = !1;
  function Bf(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    hs || fl == null || fl !== os(a) || (a = fl, "selectionStart" in a && fs(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), hi && di(hi, a) || (hi = a, a = Ar(ds, "onSelect"), 0 < a.length && (t = new Su(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: a }), t.target = fl)));
  }
  function Ma(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var dl = {
    animationend: Ma("Animation", "AnimationEnd"),
    animationiteration: Ma("Animation", "AnimationIteration"),
    animationstart: Ma("Animation", "AnimationStart"),
    transitionrun: Ma("Transition", "TransitionRun"),
    transitionstart: Ma("Transition", "TransitionStart"),
    transitioncancel: Ma("Transition", "TransitionCancel"),
    transitionend: Ma("Transition", "TransitionEnd")
  }, ms = {}, Vf = {};
  In && (Vf = document.createElement("div").style, "AnimationEvent" in window || (delete dl.animationend.animation, delete dl.animationiteration.animation, delete dl.animationstart.animation), "TransitionEvent" in window || delete dl.transitionend.transition);
  function Ha(e) {
    if (ms[e]) return ms[e];
    if (!dl[e]) return e;
    var t = dl[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in Vf)
        return ms[e] = t[n];
    return e;
  }
  var Gf = Ha("animationend"), Yf = Ha("animationiteration"), Xf = Ha("animationstart"), Av = Ha("transitionrun"), Nv = Ha("transitionstart"), _v = Ha("transitioncancel"), Qf = Ha("transitionend"), kf = /* @__PURE__ */ new Map(), ps = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  ps.push("scrollEnd");
  function vn(e, t) {
    kf.set(e, t), za(t, [e]);
  }
  var wv = 0;
  function Bn(e, t) {
    if (e.name != null && e.name !== "auto") return e.name;
    if (t.autoName !== null) return t.autoName;
    e = Sn.identifierPrefix;
    var n = wv++;
    return e = "_" + e + "t_" + n.toString(32) + "_", t.autoName = e;
  }
  function Kf(e) {
    if (e == null || typeof e == "string")
      return e;
    var t = null, n = Dl;
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
    return e = Kf(e), t = Kf(t), t == null ? e === "auto" ? null : e : t === "auto" ? null : t;
  }
  var Nu = typeof reportError == "function" ? reportError : function(e) {
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
  }, un = [], hl = 0, gs = 0;
  function _u() {
    for (var e = hl, t = gs = hl = 0; t < e; ) {
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
      i !== 0 && Zf(n, l, i);
    }
  }
  function wu(e, t, n, a) {
    un[hl++] = e, un[hl++] = t, un[hl++] = n, un[hl++] = a, gs |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function vs(e, t, n, a) {
    return wu(e, t, n, a), Ou(e);
  }
  function qa(e, t) {
    return wu(e, null, null, t), Ou(e);
  }
  function Zf(e, t, n) {
    e.lanes |= n;
    var a = e.alternate;
    a !== null && (a.lanes |= n);
    for (var l = !1, i = e.return; i !== null; )
      i.childLanes |= n, a = i.alternate, a !== null && (a.childLanes |= n), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (l = !0)), e = i, i = i.return;
    return e.tag === 3 ? (i = e.stateNode, l && t !== null && (l = 31 - Kt(n), e = i.hiddenUpdates, a = e[l], a === null ? e[l] = [t] : a.push(t), t.lane = n | 536870912), i) : null;
  }
  function Ou(e) {
    if (50 < Mi)
      throw Mi = 0, gr = null, Error(s(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ml = {};
  function Ov(e, t, n, a) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Lt(e, t, n, a) {
    return new Ov(e, t, n, a);
  }
  function ys(e) {
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
  function Jf(e, t) {
    e.flags &= 1206910978;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Cu(e, t, n, a, l, i) {
    var c = 0;
    if (a = e, typeof a == "function") ys(a) && (c = 1);
    else if (typeof a == "string")
      c = t0(
        e,
        n,
        Xt.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (a) {
        case I:
          return e = Lt(31, n, t, l), e.elementType = I, e.lanes = i, e;
        case ve:
          return La(n.children, l, i, t);
        case G:
          c = 8, l |= 24;
          break;
        case pe:
          return e = Lt(12, n, t, l | 2), e.elementType = pe, e.lanes = i, e;
        case ee:
          return e = Lt(13, n, t, l), e.elementType = ee, e.lanes = i, e;
        case j:
          return e = Lt(19, n, t, l), e.elementType = j, e.lanes = i, e;
        case te:
        case g:
          return e = l | 32, e = Lt(30, n, t, e), e.elementType = g, e.lanes = i, e.stateNode = {
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
              case ae:
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
  function bs(e, t, n) {
    return e = Lt(6, e, null, t), e.lanes = n, e;
  }
  function $f(e) {
    var t = Lt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function Es(e, t, n) {
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
  var Ff = /* @__PURE__ */ new WeakMap();
  function rn(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = Ff.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: Wl(t)
      }, Ff.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Wl(t)
    };
  }
  var pl = [], gl = 0, xu = null, mi = 0, sn = [], cn = 0, na = null, _n = 1, wn = "";
  function Yn(e, t) {
    pl[gl++] = mi, pl[gl++] = xu, xu = e, mi = t;
  }
  function Pf(e, t, n) {
    sn[cn++] = _n, sn[cn++] = wn, sn[cn++] = na, na = e;
    var a = _n;
    e = wn;
    var l = 32 - Kt(a) - 1;
    a &= ~(1 << l), n += 1;
    var i = 32 - Kt(t) + l;
    if (30 < i) {
      var c = l - l % 5;
      i = (a & (1 << c) - 1).toString(32), a >>= c, l -= c, _n = 1 << 32 - Kt(t) + l | n << l | a, wn = i + e;
    } else
      _n = 1 << i | n << l | a, wn = e;
  }
  function Ru(e) {
    e.return !== null && (Yn(e, 1), Pf(e, 1, 0));
  }
  function Ss(e) {
    for (; e === xu; )
      xu = pl[--gl], pl[gl] = null, mi = pl[--gl], pl[gl] = null;
    for (; e === na; )
      na = sn[--cn], sn[cn] = null, wn = sn[--cn], sn[cn] = null, _n = sn[--cn], sn[cn] = null;
  }
  function Wf(e, t) {
    sn[cn++] = _n, sn[cn++] = wn, sn[cn++] = na, _n = t.id, wn = t.overflow, na = e;
  }
  var vt = null, et = null, Ue = !1, aa = null, on = !1, Ts = Error(s(519));
  function la(e) {
    var t = Error(
      s(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw pi(rn(t, e)), Ts;
  }
  function ed(e) {
    var t = e.stateNode, n = e.type, a = e.memoizedProps;
    switch (t[Nt] = e, t[qt] = a, n) {
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
        Me("invalid", t), df(
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
        Me("invalid", t), mf(t, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === !0 || Sm(t.textContent, n) ? (a.popover != null && (Me("beforetoggle", t), Me("toggle", t)), a.onScroll != null && Me("scroll", t), a.onScrollEnd != null && Me("scrollend", t), a.onClick != null && (t.onclick = Nn), t = !0) : t = !1, t || la(e, !0);
  }
  function ju(e) {
    for (vt = e.return; vt; )
      switch (vt.tag) {
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
          vt = vt.return;
      }
  }
  function vl(e) {
    if (e !== vt) return !1;
    if (!Ue) return ju(e), Ue = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Pc(e.type, e.memoizedProps)), n = !n), n && et && la(e), ju(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      et = Bm(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      et = Bm(e);
    } else
      t === 27 ? (t = et, Ea(e.type) ? (e = ro, ro = null, et = e) : et = t) : et = vt ? dn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ia() {
    et = vt = null, Ue = !1;
  }
  function As() {
    var e = aa;
    return e !== null && (Vt === null ? Vt = e : Vt.push.apply(
      Vt,
      e
    ), aa = null), e;
  }
  function pi(e) {
    aa === null ? aa = [e] : aa.push(e);
  }
  var Ns = an(null), Ba = null, Xn = null;
  function ia(e, t, n) {
    Qe(Ns, t._currentValue), t._currentValue = n;
  }
  function Qn(e) {
    e._currentValue = Ns.current, Ne(Ns);
  }
  function Du(e, t, n) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function _s(e, t, n, a) {
    var l = e.child;
    for (l !== null && (l.return = e); l !== null; ) {
      var i = l.dependencies;
      if (i !== null) {
        var c = l.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var f = i;
          i = l;
          for (var y = 0; y < t.length; y++)
            if (f.context === t[y]) {
              i.lanes |= n, f = i.alternate, f !== null && (f.lanes |= n), Du(
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
        c.lanes |= n, i = c.alternate, i !== null && (i.lanes |= n), Du(c, n, e), c = null;
      } else
        l.tag === 13 && l.memoizedState !== null && l.memoizedState.dehydrated === null ? (l.lanes |= n, c = l.alternate, c !== null && (c.lanes |= n), Du(
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
      } else if (l === Y.current) {
        if (c = l.alternate, c === null) throw Error(s(387));
        c.memoizedState.memoizedState !== l.memoizedState.memoizedState && (e !== null ? e.push(Gl) : e = [Gl]);
      }
      l = l.return;
    }
    return e !== null && _s(
      t,
      e,
      n,
      a
    ), t.flags |= 262144, e !== null;
  }
  function Uu(e) {
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
  function _t(e) {
    return td(Ba, e);
  }
  function zu(e, t) {
    return Ba === null && Ga(e), td(e, t);
  }
  function td(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, Xn === null) {
      if (e === null) throw Error(s(308));
      Xn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Xn = Xn.next = t;
    return n;
  }
  var Cv = typeof AbortController < "u" ? AbortController : function() {
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
  }, xv = u.unstable_scheduleCallback, Rv = u.unstable_NormalPriority, st = {
    $$typeof: q,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function ws() {
    return {
      controller: new Cv(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function gi(e) {
    e.refCount--, e.refCount === 0 && xv(Rv, function() {
      e.controller.abort();
    });
  }
  function nd(e, t) {
    if ((e.pendingLanes & 4194048) !== 0) {
      var n = e.transitionTypes;
      for (n === null && (n = e.transitionTypes = []), e = 0; e < t.length; e++) {
        var a = t[e];
        n.indexOf(a) === -1 && n.push(a);
      }
    }
  }
  var vi = null;
  function jv(e) {
    var t = e.transitionTypes;
    return e.transitionTypes = null, t;
  }
  var yi = null, Os = 0, Ya = 0, yl = null;
  function Dv(e, t) {
    if (yi === null) {
      var n = yi = [];
      Os = 0, Ya = Yc(), yl = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return Os++, t.then(ad, ad), t;
  }
  function ad() {
    if (--Os === 0 && (vi = null, yi !== null)) {
      yl !== null && (yl.status = "fulfilled");
      var e = yi;
      yi = null, Ya = 0, yl = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Uv(e, t) {
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
  var ld = W.S;
  W.S = function(e, t) {
    if ($h = Qt(), typeof t == "object" && t !== null && typeof t.then == "function" && Dv(e, t), vi !== null)
      for (var n = Hl; n !== null; )
        nd(n, vi), n = n.next;
    if (n = e.types, n !== null) {
      for (var a = Hl; a !== null; )
        nd(a, n), a = a.next;
      if (Ya !== 0) {
        a = vi, a === null && (a = vi = []);
        for (var l = 0; l < n.length; l++) {
          var i = n[l];
          a.indexOf(i) === -1 && a.push(i);
        }
      }
    }
    ld !== null && ld(e, t);
  };
  var Xa = an(null);
  function Cs() {
    var e = Xa.current;
    return e !== null ? e : Fe.pooledCache;
  }
  function Mu(e, t) {
    t === null ? Qe(Xa, Xa.current) : Qe(Xa, t.pool);
  }
  function id() {
    var e = Cs();
    return e === null ? null : { parent: st._currentValue, pool: e };
  }
  var bl = Error(s(460)), xs = Error(s(474)), Hu = Error(s(542)), qu = { then: function() {
  } };
  function ud(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function rd(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Nn, Nn), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, cd(e), e === void 0 && !("reason" in t) ? Error(s(600)) : e;
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
            throw e = t.reason, cd(e), e;
        }
        throw ka = t, bl;
    }
  }
  function Qa(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (ka = n, bl) : n;
    }
  }
  var ka = null;
  function sd() {
    if (ka === null) throw Error(s(459));
    var e = ka;
    return ka = null, e;
  }
  function cd(e) {
    if (e === bl || e === Hu)
      throw Error(s(483));
  }
  var El = null, bi = 0;
  function Lu(e) {
    var t = bi;
    return bi += 1, El === null && (El = []), rd(El, e, t);
  }
  function ua(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Iu(e, t) {
    throw t.$$typeof === be ? Error(s(525)) : (e = Object.prototype.toString.call(t), Error(
      s(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function od(e) {
    function t(w, A) {
      if (e) {
        var R = w.deletions;
        R === null ? (w.deletions = [A], w.flags |= 16) : R.push(A);
      }
    }
    function n(w, A) {
      if (!e) return null;
      for (; A !== null; )
        t(w, A), A = A.sibling;
      return null;
    }
    function a(w) {
      for (var A = /* @__PURE__ */ new Map(); w !== null; )
        w.key === null ? A.set(w.index, w) : A.set(w.key, w), w = w.sibling;
      return A;
    }
    function l(w, A) {
      return w = Gn(w, A), w.index = 0, w.sibling = null, w;
    }
    function i(w, A, R) {
      return w.index = R, e ? (R = w.alternate, R !== null ? (R = R.index, R < A ? (w.flags |= 2, A) : R) : (w.flags |= 134217730, A)) : (w.flags |= 1048576, A);
    }
    function c(w) {
      return e && w.alternate === null && (w.flags |= 134217730), w;
    }
    function f(w, A, R, X) {
      return A === null || A.tag !== 6 ? (A = bs(R, w.mode, X), A.return = w, A) : (A = l(A, R), A.return = w, A);
    }
    function y(w, A, R, X) {
      var ye = R.type;
      return ye === ve ? (w = z(
        w,
        A,
        R.props.children,
        X,
        R.key
      ), ua(w, R), w) : A !== null && (A.elementType === ye || typeof ye == "object" && ye !== null && ye.$$typeof === ae && Qa(ye) === A.type) ? (A = l(A, R.props), ua(A, R), A.return = w, A) : (A = Cu(
        R.type,
        R.key,
        R.props,
        null,
        w.mode,
        X
      ), ua(A, R), A.return = w, A);
    }
    function x(w, A, R, X) {
      return A === null || A.tag !== 4 || A.stateNode.containerInfo !== R.containerInfo || A.stateNode.implementation !== R.implementation ? (A = Es(R, w.mode, X), A.return = w, A) : (A = l(A, R.children || []), A.return = w, A);
    }
    function z(w, A, R, X, ye) {
      return A === null || A.tag !== 7 ? (A = La(
        R,
        w.mode,
        X,
        ye
      ), A.return = w, A) : (A = l(A, R), A.return = w, A);
    }
    function Q(w, A, R) {
      if (typeof A == "string" && A !== "" || typeof A == "number" || typeof A == "bigint")
        return A = bs(
          "" + A,
          w.mode,
          R
        ), A.return = w, A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case se:
            return R = Cu(
              A.type,
              A.key,
              A.props,
              null,
              w.mode,
              R
            ), ua(R, A), R.return = w, R;
          case ge:
            return A = Es(
              A,
              w.mode,
              R
            ), A.return = w, A;
          case ae:
            return A = Qa(A), Q(w, A, R);
        }
        if (de(A) || $(A))
          return A = La(
            A,
            w.mode,
            R,
            null
          ), A.return = w, A;
        if (typeof A.then == "function")
          return Q(w, Lu(A), R);
        if (A.$$typeof === q)
          return Q(
            w,
            zu(w, A),
            R
          );
        Iu(w, A);
      }
      return null;
    }
    function _(w, A, R, X) {
      var ye = A !== null ? A.key : null;
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return ye !== null ? null : f(w, A, "" + R, X);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case se:
            return R.key === ye ? y(w, A, R, X) : null;
          case ge:
            return R.key === ye ? x(w, A, R, X) : null;
          case ae:
            return R = Qa(R), _(w, A, R, X);
        }
        if (de(R) || $(R))
          return ye !== null ? null : z(w, A, R, X, null);
        if (typeof R.then == "function")
          return _(
            w,
            A,
            Lu(R),
            X
          );
        if (R.$$typeof === q)
          return _(
            w,
            A,
            zu(w, R),
            X
          );
        Iu(w, R);
      }
      return null;
    }
    function U(w, A, R, X, ye) {
      if (typeof X == "string" && X !== "" || typeof X == "number" || typeof X == "bigint")
        return w = w.get(R) || null, f(A, w, "" + X, ye);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case se:
            return w = w.get(
              X.key === null ? R : X.key
            ) || null, y(A, w, X, ye);
          case ge:
            return w = w.get(
              X.key === null ? R : X.key
            ) || null, x(A, w, X, ye);
          case ae:
            return X = Qa(X), U(
              w,
              A,
              R,
              X,
              ye
            );
        }
        if (de(X) || $(X))
          return w = w.get(R) || null, z(A, w, X, ye, null);
        if (typeof X.then == "function")
          return U(
            w,
            A,
            R,
            Lu(X),
            ye
          );
        if (X.$$typeof === q)
          return U(
            w,
            A,
            R,
            zu(A, X),
            ye
          );
        Iu(A, X);
      }
      return null;
    }
    function oe(w, A, R, X) {
      for (var ye = null, qe = null, Ae = A, we = A = 0, ft = null; Ae !== null && we < R.length; we++) {
        Ae.index > we ? (ft = Ae, Ae = null) : ft = Ae.sibling;
        var Le = _(
          w,
          Ae,
          R[we],
          X
        );
        if (Le === null) {
          Ae === null && (Ae = ft);
          break;
        }
        e && Ae && Le.alternate === null && t(w, Ae), A = i(Le, A, we), qe === null ? ye = Le : qe.sibling = Le, qe = Le, Ae = ft;
      }
      if (we === R.length)
        return n(w, Ae), Ue && Yn(w, we), ye;
      if (Ae === null) {
        for (; we < R.length; we++)
          Ae = Q(w, R[we], X), Ae !== null && (A = i(
            Ae,
            A,
            we
          ), qe === null ? ye = Ae : qe.sibling = Ae, qe = Ae);
        return Ue && Yn(w, we), ye;
      }
      for (Ae = a(Ae); we < R.length; we++)
        ft = U(
          Ae,
          w,
          we,
          R[we],
          X
        ), ft !== null && (e && (Le = ft.alternate, Le !== null && Ae.delete(Le.key === null ? we : Le.key)), A = i(
          ft,
          A,
          we
        ), qe === null ? ye = ft : qe.sibling = ft, qe = ft);
      return e && Ae.forEach(function(_a) {
        return t(w, _a);
      }), Ue && Yn(w, we), ye;
    }
    function Ee(w, A, R, X) {
      if (R == null) throw Error(s(151));
      for (var ye = null, qe = null, Ae = A, we = A = 0, ft = null, Le = R.next(); Ae !== null && !Le.done; we++, Le = R.next()) {
        Ae.index > we ? (ft = Ae, Ae = null) : ft = Ae.sibling;
        var _a = _(w, Ae, Le.value, X);
        if (_a === null) {
          Ae === null && (Ae = ft);
          break;
        }
        e && Ae && _a.alternate === null && t(w, Ae), A = i(_a, A, we), qe === null ? ye = _a : qe.sibling = _a, qe = _a, Ae = ft;
      }
      if (Le.done)
        return n(w, Ae), Ue && Yn(w, we), ye;
      if (Ae === null) {
        for (; !Le.done; we++, Le = R.next())
          Le = Q(w, Le.value, X), Le !== null && (A = i(Le, A, we), qe === null ? ye = Le : qe.sibling = Le, qe = Le);
        return Ue && Yn(w, we), ye;
      }
      for (Ae = a(Ae); !Le.done; we++, Le = R.next())
        Le = U(Ae, w, we, Le.value, X), Le !== null && (e && (ft = Le.alternate, ft !== null && Ae.delete(
          ft.key === null ? we : ft.key
        )), A = i(Le, A, we), qe === null ? ye = Le : qe.sibling = Le, qe = Le);
      return e && Ae.forEach(function(h0) {
        return t(w, h0);
      }), Ue && Yn(w, we), ye;
    }
    function je(w, A, R, X) {
      if (typeof R == "object" && R !== null && R.type === ve && R.key === null && R.props.ref === void 0 && (R = R.props.children), typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case se:
            e: {
              for (var ye = R.key; A !== null; ) {
                if (A.key === ye) {
                  if (ye = R.type, ye === ve) {
                    if (A.tag === 7) {
                      n(
                        w,
                        A.sibling
                      ), X = l(
                        A,
                        R.props.children
                      ), ua(X, R), X.return = w, w = X;
                      break e;
                    }
                  } else if (A.elementType === ye || typeof ye == "object" && ye !== null && ye.$$typeof === ae && Qa(ye) === A.type) {
                    n(
                      w,
                      A.sibling
                    ), X = l(A, R.props), ua(X, R), X.return = w, w = X;
                    break e;
                  }
                  n(w, A);
                  break;
                } else t(w, A);
                A = A.sibling;
              }
              R.type === ve ? (X = La(
                R.props.children,
                w.mode,
                X,
                R.key
              ), ua(X, R), X.return = w, w = X) : (X = Cu(
                R.type,
                R.key,
                R.props,
                null,
                w.mode,
                X
              ), ua(X, R), X.return = w, w = X);
            }
            return c(w);
          case ge:
            e: {
              for (ye = R.key; A !== null; ) {
                if (A.key === ye)
                  if (A.tag === 4 && A.stateNode.containerInfo === R.containerInfo && A.stateNode.implementation === R.implementation) {
                    n(
                      w,
                      A.sibling
                    ), X = l(A, R.children || []), X.return = w, w = X;
                    break e;
                  } else {
                    n(w, A);
                    break;
                  }
                else t(w, A);
                A = A.sibling;
              }
              X = Es(R, w.mode, X), X.return = w, w = X;
            }
            return c(w);
          case ae:
            return R = Qa(R), je(
              w,
              A,
              R,
              X
            );
        }
        if (de(R))
          return oe(
            w,
            A,
            R,
            X
          );
        if ($(R)) {
          if (ye = $(R), typeof ye != "function") throw Error(s(150));
          return R = ye.call(R), Ee(
            w,
            A,
            R,
            X
          );
        }
        if (typeof R.then == "function")
          return je(
            w,
            A,
            Lu(R),
            X
          );
        if (R.$$typeof === q)
          return je(
            w,
            A,
            zu(w, R),
            X
          );
        Iu(w, R);
      }
      return typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint" ? (R = "" + R, A !== null && A.tag === 6 ? (n(w, A.sibling), X = l(A, R), X.return = w, w = X) : (n(w, A), X = bs(R, w.mode, X), X.return = w, w = X), c(w)) : n(w, A);
    }
    return function(w, A, R, X) {
      try {
        bi = 0;
        var ye = je(
          w,
          A,
          R,
          X
        );
        return El = null, ye;
      } catch (Ae) {
        if (Ae === bl || Ae === Hu) throw Ae;
        var qe = Lt(29, Ae, null, w.mode);
        return qe.lanes = X, qe.return = w, qe;
      }
    };
  }
  var Ka = od(!0), fd = od(!1), ra = !1;
  function Rs(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function js(e, t) {
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
    if (a = a.shared, (Ye & 2) !== 0) {
      var l = a.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), a.pending = t, t = Ou(e), Zf(e, null, n), t;
    }
    return wu(e, a, t, n), Ou(e);
  }
  function Ei(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, Fo(e, n);
    }
  }
  function Ds(e, t) {
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
  var Us = !1;
  function Si() {
    if (Us) {
      var e = yl;
      if (e !== null) throw e;
    }
  }
  function Ti(e, t, n, a) {
    Us = !1;
    var l = e.updateQueue;
    ra = !1;
    var i = l.firstBaseUpdate, c = l.lastBaseUpdate, f = l.shared.pending;
    if (f !== null) {
      l.shared.pending = null;
      var y = f, x = y.next;
      y.next = null, c === null ? i = x : c.next = x, c = y;
      var z = e.alternate;
      z !== null && (z = z.updateQueue, f = z.lastBaseUpdate, f !== c && (f === null ? z.firstBaseUpdate = x : f.next = x, z.lastBaseUpdate = y));
    }
    if (i !== null) {
      var Q = l.baseState;
      c = 0, z = x = y = null, f = i;
      do {
        var _ = f.lane & -536870913, U = _ !== f.lane;
        if (U ? (He & _) === _ : (a & _) === _) {
          _ !== 0 && _ === Ya && (Us = !0), z !== null && (z = z.next = {
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: null,
            next: null
          });
          e: {
            var oe = e, Ee = f;
            _ = t;
            var je = n;
            switch (Ee.tag) {
              case 1:
                if (oe = Ee.payload, typeof oe == "function") {
                  Q = oe.call(je, Q, _);
                  break e;
                }
                Q = oe;
                break e;
              case 3:
                oe.flags = oe.flags & -65537 | 128;
              case 0:
                if (oe = Ee.payload, _ = typeof oe == "function" ? oe.call(je, Q, _) : oe, _ == null) break e;
                Q = ue({}, Q, _);
                break e;
              case 2:
                ra = !0;
            }
          }
          _ = f.callback, _ !== null && (e.flags |= 64, U && (e.flags |= 8192), U = l.callbacks, U === null ? l.callbacks = [_] : U.push(_));
        } else
          U = {
            lane: _,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          }, z === null ? (x = z = U, y = Q) : z = z.next = U, c |= _;
        if (f = f.next, f === null) {
          if (f = l.shared.pending, f === null)
            break;
          U = f, f = U.next, U.next = null, l.lastBaseUpdate = U, l.shared.pending = null;
        }
      } while (!0);
      z === null && (y = Q), l.baseState = y, l.firstBaseUpdate = x, l.lastBaseUpdate = z, i === null && (l.shared.lanes = 0), ga |= c, e.lanes = c, e.memoizedState = Q;
    }
  }
  function dd(e, t) {
    if (typeof e != "function")
      throw Error(s(191, e));
    e.call(t);
  }
  function hd(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        dd(n[e], t);
  }
  var oa = an(null), Bu = an(0);
  function md(e, t) {
    e = $n, Qe(Bu, e), Qe(oa, t), $n = e | t.baseLanes;
  }
  function zs() {
    Qe(Bu, $n), Qe(oa, oa.current);
  }
  function Ms() {
    $n = Bu.current, Ne(oa), Ne(Bu);
  }
  var wt = an(null), jt = null;
  function fa(e) {
    var t = e.alternate;
    Qe(Ot, Ot.current & 1), Qe(wt, e), jt === null && (t === null || oa.current !== null || t.memoizedState !== null) && (jt = e);
  }
  function Hs(e) {
    Qe(Ot, Ot.current), Qe(wt, e), jt === null && (jt = e);
  }
  function pd(e) {
    e.tag === 22 ? (Qe(Ot, Ot.current), Qe(wt, e), jt === null && (jt = e)) : da();
  }
  function da() {
    Qe(Ot, Ot.current), Qe(wt, wt.current);
  }
  function $t(e) {
    Ne(wt), jt === e && (jt = null), Ne(Ot);
  }
  var Ot = an(0);
  function Ai(e, t) {
    Qe(wt, wt.current), Qe(Ot, t);
  }
  function qs(e) {
    Ne(Ot), Ne(wt), jt === e && (jt = null);
  }
  function Vu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || io(n) || uo(n)))
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
  var kn = 0, Re = null, Je = null, ct = null, Gu = !1, Sl = !1, Za = !1, Yu = 0, Ni = 0, Tl = null, zv = 0;
  function lt() {
    throw Error(s(321));
  }
  function Ls(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Jt(e[n], t[n])) return !1;
    return !0;
  }
  function Is(e, t, n, a, l, i) {
    return kn = i, Re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, W.H = e === null || e.memoizedState === null ? Pd : Wd, Za = !1, i = n(a, l), Za = !1, Sl && (i = vd(
      t,
      n,
      a,
      l
    )), gd(e), i;
  }
  function gd(e) {
    W.H = $u;
    var t = Je !== null && Je.next !== null;
    if (kn = 0, ct = Je = Re = null, Gu = !1, Ni = 0, Tl = null, t) throw Error(s(300));
    e === null || ot || (e = e.dependencies, e !== null && Uu(e) && (ot = !0));
  }
  function vd(e, t, n, a) {
    Re = e;
    var l = 0;
    do {
      if (Sl && (Tl = null), Ni = 0, Sl = !1, 25 <= l) throw Error(s(301));
      if (l += 1, ct = Je = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      W.H = Gv, i = t(n, a);
    } while (Sl);
    return i;
  }
  function Mv() {
    var e = W.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? _i(t) : t, e = e.useState()[0], (Je !== null ? Je.memoizedState : null) !== e && (Re.flags |= 1024), t;
  }
  function Bs() {
    var e = Yu !== 0;
    return Yu = 0, e;
  }
  function Vs(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function Gs(e) {
    if (Gu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Gu = !1;
    }
    kn = 0, ct = Je = Re = null, Sl = !1, Ni = Yu = 0, Tl = null;
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
  function Xu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function _i(e) {
    var t = Ni;
    return Ni += 1, Tl === null && (Tl = []), e = rd(Tl, e, t), t = Re, (ct === null ? t.memoizedState : ct.next) === null && (t = t.alternate, W.H = t === null || t.memoizedState === null ? Pd : Wd), e;
  }
  function Qu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return _i(e);
      if (e.$$typeof === D) return;
      if (e.$$typeof === q) return _t(e);
    }
    throw Error(s(438, String(e)));
  }
  function Ys(e) {
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
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = Xu(), Re.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++)
        n[a] = J;
    return t.index++, n;
  }
  function Kn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ku(e) {
    var t = ut();
    return Xs(t, Je, e);
  }
  function Xs(e, t, n) {
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
      var f = c = null, y = null, x = t, z = !1;
      do {
        var Q = x.lane & -536870913;
        if (Q !== x.lane ? (He & Q) === Q : (kn & Q) === Q) {
          var _ = x.revertLane;
          if (_ === 0)
            y !== null && (y = y.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: x.action,
              hasEagerState: x.hasEagerState,
              eagerState: x.eagerState,
              next: null
            }), Q === Ya && (z = !0);
          else if ((kn & _) === _) {
            x = x.next, _ === Ya && (z = !0);
            continue;
          } else
            Q = {
              lane: 0,
              revertLane: x.revertLane,
              gesture: null,
              action: x.action,
              hasEagerState: x.hasEagerState,
              eagerState: x.eagerState,
              next: null
            }, y === null ? (f = y = Q, c = i) : y = y.next = Q, Re.lanes |= _, ga |= _;
          Q = x.action, Za && n(i, Q), i = x.hasEagerState ? x.eagerState : n(i, Q);
        } else
          _ = {
            lane: Q,
            revertLane: x.revertLane,
            gesture: x.gesture,
            action: x.action,
            hasEagerState: x.hasEagerState,
            eagerState: x.eagerState,
            next: null
          }, y === null ? (f = y = _, c = i) : y = y.next = _, Re.lanes |= Q, ga |= Q;
        x = x.next;
      } while (x !== null && x !== t);
      if (y === null ? c = i : y.next = f, !Jt(i, e.memoizedState) && (ot = !0, z && (n = yl, n !== null)))
        throw n;
      e.memoizedState = i, e.baseState = c, e.baseQueue = y, a.lastRenderedState = i;
    }
    return l === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function Qs(e) {
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
  function yd(e, t, n) {
    var a = Re, l = ut(), i = Ue;
    if (i) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else n = t();
    var c = !Jt(
      (Je || l).memoizedState,
      n
    );
    if (c && (l.memoizedState = n, ot = !0), l = l.queue, Zs(Sd.bind(null, a, l, e), [
      e
    ]), e = l.getSnapshot !== t || c || ct !== null && (ct.memoizedState.tag & 1) !== 0, Al(
      e ? 9 : 8,
      { destroy: void 0 },
      Ed.bind(null, a, l, n, t),
      null
    ), e) {
      if (a.flags |= 2048, Fe === null) throw Error(s(349));
      i || (kn & 127) !== 0 || bd(a, t, n);
    }
    return n;
  }
  function bd(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Re.updateQueue, t === null ? (t = Xu(), Re.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function Ed(e, t, n, a) {
    t.value = n, t.getSnapshot = a, Td(t) && Ad(e);
  }
  function Sd(e, t, n) {
    return n(function() {
      Td(t) && Ad(e);
    });
  }
  function Td(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Jt(e, n);
    } catch {
      return !0;
    }
  }
  function Ad(e) {
    var t = qa(e, 2);
    t !== null && Gt(t, e, 2);
  }
  function ks(e) {
    var t = Ut();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), Za) {
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
      lastRenderedReducer: Kn,
      lastRenderedState: e
    }, t;
  }
  function Nd(e, t, n, a) {
    return e.baseState = n, Xs(
      e,
      Je,
      typeof a == "function" ? a : Kn
    );
  }
  function Hv(e, t, n, a, l) {
    if (Ju(e)) throw Error(s(485));
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
      W.T !== null ? n(!0) : i.isTransition = !1, a(i), n = t.pending, n === null ? (i.next = t.pending = i, _d(t, i)) : (i.next = n.next, t.pending = n.next = i);
    }
  }
  function _d(e, t) {
    var n = t.action, a = t.payload, l = e.state;
    if (t.isTransition) {
      var i = W.T, c = {};
      c.types = i !== null ? i.types : null, W.T = c;
      try {
        var f = n(l, a), y = W.S;
        y !== null && y(c, f), wd(e, t, f);
      } catch (x) {
        Ks(e, t, x);
      } finally {
        i !== null && c.types !== null && (i.types = c.types), W.T = i;
      }
    } else
      try {
        i = n(l, a), wd(e, t, i);
      } catch (x) {
        Ks(e, t, x);
      }
  }
  function wd(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        Od(e, t, a);
      },
      function(a) {
        return Ks(e, t, a);
      }
    ) : Od(e, t, n);
  }
  function Od(e, t, n) {
    t.status = "fulfilled", t.value = n, Cd(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, _d(e, n)));
  }
  function Ks(e, t, n) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = n, Cd(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function Cd(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function xd(e, t) {
    return t;
  }
  function Rd(e, t) {
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
      lastRenderedReducer: xd,
      lastRenderedState: t
    }, n.queue = a, n = Jd.bind(
      null,
      Re,
      a
    ), a.dispatch = n, a = ks(!1), i = Ws.bind(
      null,
      Re,
      !1,
      a.queue
    ), a = Ut(), l = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = l, n = Hv.bind(
      null,
      Re,
      l,
      i,
      n
    ), l.dispatch = n, a.memoizedState = e, [t, n, !1];
  }
  function jd(e) {
    var t = ut();
    return Dd(t, Je, e);
  }
  function Dd(e, t, n) {
    if (t = Xs(
      e,
      t,
      xd
    )[0], e = ku(Kn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = _i(t);
      } catch (c) {
        throw c === bl ? Hu : c;
      }
    else a = t;
    t = ut();
    var l = t.queue, i = l.dispatch;
    return n !== t.memoizedState && (Re.flags |= 2048, Al(
      9,
      { destroy: void 0 },
      qv.bind(null, l, n),
      null
    )), [a, i, e];
  }
  function qv(e, t) {
    e.action = t;
  }
  function Ud(e) {
    var t = ut(), n = Je;
    if (n !== null)
      return Dd(t, n, e);
    ut(), t = t.memoizedState, n = ut();
    var a = n.queue.dispatch;
    return n.memoizedState = e, [t, a, !1];
  }
  function Al(e, t, n, a) {
    return e = { tag: e, create: n, deps: a, inst: t, next: null }, t = Re.updateQueue, t === null && (t = Xu(), Re.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
  }
  function zd() {
    return ut().memoizedState;
  }
  function Ku(e, t, n, a) {
    var l = Ut();
    Re.flags |= e, l.memoizedState = Al(
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
    Je !== null && a !== null && Ls(a, Je.memoizedState.deps) ? l.memoizedState = Al(t, i, n, a) : (Re.flags |= e, l.memoizedState = Al(
      1 | t,
      i,
      n,
      a
    ));
  }
  function Md(e, t) {
    Ku(8390656, 8, e, t);
  }
  function Zs(e, t) {
    Zu(2048, 8, e, t);
  }
  function Lv(e) {
    Re.flags |= 4;
    var t = Re.updateQueue;
    if (t === null)
      t = Xu(), Re.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function Hd(e) {
    var t = ut().memoizedState;
    return Lv({ ref: t, nextImpl: e }), function() {
      if ((Ye & 2) !== 0) throw Error(s(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function qd(e, t) {
    return Zu(4, 2, e, t);
  }
  function Ld(e, t) {
    return Zu(4, 4, e, t);
  }
  function Id(e, t) {
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
  function Bd(e, t, n) {
    n = n != null ? n.concat([e]) : null, Zu(4, 4, Id.bind(null, t, e), n);
  }
  function Js() {
  }
  function Vd(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && Ls(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
  }
  function Gd(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && Ls(t, a[1]))
      return a[0];
    if (a = e(), Za) {
      Wn(!0);
      try {
        e();
      } finally {
        Wn(!1);
      }
    }
    return n.memoizedState = [a, t], a;
  }
  function $s(e, t, n) {
    return n === void 0 || (kn & 1073741824) !== 0 && (He & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = Ph(), Re.lanes |= e, ga |= e, n);
  }
  function Yd(e, t, n, a) {
    return Jt(n, t) ? n : oa.current !== null ? (e = $s(e, n, a), Jt(e, t) || (ot = !0), e) : (kn & 106) === 0 || (kn & 1073741824) !== 0 && (He & 261930) === 0 ? (ot = !0, e.memoizedState = n) : (e = Ph(), Re.lanes |= e, ga |= e, t);
  }
  function Xd(e, t, n, a, l) {
    var i = he.p;
    he.p = i !== 0 && 8 > i ? i : 8;
    var c = W.T, f = {};
    f.types = c !== null ? c.types : null, W.T = f, Ws(e, !1, t, n);
    try {
      var y = l(), x = W.S;
      if (x !== null && x(f, y), y !== null && typeof y == "object" && typeof y.then == "function") {
        var z = Uv(
          y,
          a
        );
        wi(
          e,
          t,
          z,
          en(e)
        );
      } else
        wi(
          e,
          t,
          a,
          en(e)
        );
    } catch (Q) {
      wi(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: Q },
        en()
      );
    } finally {
      he.p = i, c !== null && f.types !== null && (c.types = f.types), W.T = c;
    }
  }
  function Iv() {
  }
  function Fs(e, t, n, a) {
    if (e.tag !== 5) throw Error(s(476));
    var l = Qd(e).queue;
    Xd(
      e,
      l,
      t,
      We,
      n === null ? Iv : function() {
        return kd(e), n(a);
      }
    );
  }
  function Qd(e) {
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
        lastRenderedReducer: Kn,
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
        lastRenderedReducer: Kn,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function kd(e) {
    var t = Qd(e);
    t.next === null && (t = e.alternate.memoizedState), wi(
      e,
      t.next.queue,
      {},
      en()
    );
  }
  function Ps() {
    return _t(Gl);
  }
  function Kd() {
    return ut().memoizedState;
  }
  function Zd() {
    return ut().memoizedState;
  }
  function Bv(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = en();
          e = sa(n);
          var a = ca(t, e, n);
          a !== null && (Gt(a, t, n), Ei(a, t, n)), t = { cache: ws() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Vv(e, t, n) {
    var a = en();
    n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ju(e) ? $d(t, n) : (n = vs(e, t, n, a), n !== null && (Gt(n, e, a), Fd(n, t, a)));
  }
  function Jd(e, t, n) {
    var a = en();
    wi(e, t, n, a);
  }
  function wi(e, t, n, a) {
    var l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ju(e)) $d(t, l);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
        try {
          var c = t.lastRenderedState, f = i(c, n);
          if (l.hasEagerState = !0, l.eagerState = f, Jt(f, c))
            return wu(e, t, l, 0), Fe === null && _u(), !1;
        } catch {
        }
      if (n = vs(e, t, l, a), n !== null)
        return Gt(n, e, a), Fd(n, t, a), !0;
    }
    return !1;
  }
  function Ws(e, t, n, a) {
    if (a = {
      lane: 2,
      revertLane: Yc(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ju(e)) {
      if (t) throw Error(s(479));
    } else
      t = vs(
        e,
        n,
        a,
        2
      ), t !== null && Gt(t, e, 2);
  }
  function Ju(e) {
    var t = e.alternate;
    return e === Re || t !== null && t === Re;
  }
  function $d(e, t) {
    Sl = Gu = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Fd(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, Fo(e, n);
    }
  }
  var $u = {
    readContext: _t,
    use: Qu,
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
  }, Pd = {
    readContext: _t,
    use: Qu,
    useCallback: function(e, t) {
      return Ut().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: _t,
    useEffect: Md,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, Ku(
        4194308,
        4,
        Id.bind(null, t, e),
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
      if (Za) {
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
        if (Za) {
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
      }, a.queue = e, e = e.dispatch = Vv.bind(
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
      e = ks(e);
      var t = e.queue, n = Jd.bind(null, Re, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: Js,
    useDeferredValue: function(e, t) {
      var n = Ut();
      return $s(n, e, t);
    },
    useTransition: function() {
      var e = ks(!1);
      return e = Xd.bind(
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
        (He & 127) !== 0 || bd(a, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return l.queue = i, Md(Sd.bind(null, a, i, e), [
        e
      ]), a.flags |= 2048, Al(
        9,
        { destroy: void 0 },
        Ed.bind(
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
        n = (a & ~(1 << 32 - Kt(a) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Yu++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = zv++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Ps,
    useFormState: Rd,
    useActionState: Rd,
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
      return t.queue = n, t = Ws.bind(
        null,
        Re,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Ys,
    useCacheRefresh: function() {
      return Ut().memoizedState = Bv.bind(
        null,
        Re
      );
    },
    useEffectEvent: function(e) {
      var t = Ut(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((Ye & 2) !== 0)
          throw Error(s(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, Wd = {
    readContext: _t,
    use: Qu,
    useCallback: Vd,
    useContext: _t,
    useEffect: Zs,
    useImperativeHandle: Bd,
    useInsertionEffect: qd,
    useLayoutEffect: Ld,
    useMemo: Gd,
    useReducer: ku,
    useRef: zd,
    useState: function() {
      return ku(Kn);
    },
    useDebugValue: Js,
    useDeferredValue: function(e, t) {
      var n = ut();
      return Yd(
        n,
        Je.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = ku(Kn)[0], t = ut().memoizedState;
      return [
        typeof e == "boolean" ? e : _i(e),
        t
      ];
    },
    useSyncExternalStore: yd,
    useId: Kd,
    useHostTransitionStatus: Ps,
    useFormState: jd,
    useActionState: jd,
    useOptimistic: function(e, t) {
      var n = ut();
      return Nd(n, Je, e, t);
    },
    useMemoCache: Ys,
    useCacheRefresh: Zd,
    useEffectEvent: Hd
  }, Gv = {
    readContext: _t,
    use: Qu,
    useCallback: Vd,
    useContext: _t,
    useEffect: Zs,
    useImperativeHandle: Bd,
    useInsertionEffect: qd,
    useLayoutEffect: Ld,
    useMemo: Gd,
    useReducer: Qs,
    useRef: zd,
    useState: function() {
      return Qs(Kn);
    },
    useDebugValue: Js,
    useDeferredValue: function(e, t) {
      var n = ut();
      return Je === null ? $s(n, e, t) : Yd(
        n,
        Je.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Qs(Kn)[0], t = ut().memoizedState;
      return [
        typeof e == "boolean" ? e : _i(e),
        t
      ];
    },
    useSyncExternalStore: yd,
    useId: Kd,
    useHostTransitionStatus: Ps,
    useFormState: Ud,
    useActionState: Ud,
    useOptimistic: function(e, t) {
      var n = ut();
      return Je !== null ? Nd(n, Je, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Ys,
    useCacheRefresh: Zd,
    useEffectEvent: Hd
  };
  function ec(e, t, n, a) {
    t = e.memoizedState, n = n(a, t), n = n == null ? t : ue({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var tc = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var a = en(), l = sa(a);
      l.payload = t, n != null && (l.callback = n), t = ca(e, l, a), t !== null && (Gt(t, e, a), Ei(t, e, a));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var a = en(), l = sa(a);
      l.tag = 1, l.payload = t, n != null && (l.callback = n), t = ca(e, l, a), t !== null && (Gt(t, e, a), Ei(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = en(), a = sa(n);
      a.tag = 2, t != null && (a.callback = t), t = ca(e, a, n), t !== null && (Gt(t, e, n), Ei(t, e, n));
    }
  };
  function eh(e, t, n, a, l, i, c) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, i, c) : t.prototype && t.prototype.isPureReactComponent ? !di(n, a) || !di(l, i) : !0;
  }
  function th(e, t, n, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && tc.enqueueReplaceState(t, t.state, null);
  }
  function Ja(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var a in t)
        a !== "ref" && (n[a] = t[a]);
    }
    if (e = e.defaultProps) {
      n === t && (n = ue({}, n));
      for (var l in e)
        n[l] === void 0 && (n[l] = e[l]);
    }
    return n;
  }
  function nh(e) {
    Nu(e);
  }
  function ah(e) {
    console.error(e);
  }
  function lh(e) {
    Nu(e);
  }
  function Fu(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function ih(e, t, n) {
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
  function nc(e, t, n) {
    return n = sa(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      Fu(e, t);
    }, n;
  }
  function uh(e) {
    return e = sa(e), e.tag = 3, e;
  }
  function rh(e, t, n, a) {
    var l = n.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var i = a.value;
      e.payload = function() {
        return l(i);
      }, e.callback = function() {
        ih(t, n, a);
      };
    }
    var c = n.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (e.callback = function() {
      ih(t, n, a), typeof l != "function" && (va === null ? va = /* @__PURE__ */ new Set([this]) : va.add(this));
      var f = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: f !== null ? f : ""
      });
    });
  }
  function Yv(e, t, n, a, l) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = n.alternate, t !== null && Va(
        t,
        n,
        l,
        !0
      ), n = wt.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
          case 19:
            return jt === null ? yr() : n.alternate === null && it === 0 && (it = 3), n.flags &= -257, n.flags |= 65536, n.lanes = l, a === qu ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Bc(e, a, l)), !1;
          case 22:
            return n.flags |= 65536, a === qu ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), Bc(e, a, l)), !1;
        }
        throw Error(s(435, n.tag));
      }
      return Bc(e, a, l), yr(), !1;
    }
    if (Ue)
      return t = wt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = l, a !== Ts && (e = Error(s(422), { cause: a }), pi(rn(e, n)))) : (a !== Ts && (t = Error(s(423), {
        cause: a
      }), pi(
        rn(t, n)
      )), e = e.current.alternate, e.flags |= 65536, l &= -l, e.lanes |= l, a = rn(a, n), l = nc(
        e.stateNode,
        a,
        l
      ), Ds(e, l), it !== 4 && (it = 2)), !1;
    var i = Error(s(520), { cause: a });
    if (i = rn(i, n), zi === null ? zi = [i] : zi.push(i), it !== 4 && (it = 2), t === null) return !0;
    a = rn(a, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = l & -l, n.lanes |= e, e = nc(n.stateNode, a, e), Ds(n, e), !1;
        case 1:
          if (t = n.type, i = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (va === null || !va.has(i))))
            return n.flags |= 65536, l &= -l, n.lanes |= l, l = uh(l), rh(
              l,
              e,
              n,
              a
            ), Ds(n, l), !1;
          break;
        case 22:
          if (n.memoizedState !== null)
            return n.flags |= 65536, !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var ac = Error(s(461)), ot = !1;
  function pt(e, t, n, a) {
    t.child = e === null ? fd(t, null, n, a) : Ka(
      t,
      e.child,
      n,
      a
    );
  }
  function sh(e, t, n, a, l) {
    n = n.render;
    var i = t.ref;
    if ("ref" in a) {
      var c = {};
      for (var f in a)
        f !== "ref" && (c[f] = a[f]);
    } else c = a;
    return Ga(t), a = Is(
      e,
      t,
      n,
      c,
      i,
      l
    ), f = Bs(), e !== null && !ot ? (Vs(e, t, l), Zn(e, t, l)) : (Ue && f && Ru(t), t.flags |= 1, pt(e, t, a, l), t.child);
  }
  function ch(e, t, n, a, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !ys(i) && i.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = i, oh(
        e,
        t,
        i,
        a,
        l
      )) : (e = Cu(
        n.type,
        null,
        a,
        t,
        t.mode,
        l
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, !fc(e, l)) {
      var c = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : di, n(c, a) && e.ref === t.ref)
        return Zn(e, t, l);
    }
    return t.flags |= 1, e = Gn(i, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function oh(e, t, n, a, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (di(i, a) && e.ref === t.ref)
        if (ot = !1, t.pendingProps = a = i, fc(e, l))
          (e.flags & 131072) !== 0 && (ot = !0);
        else
          return t.lanes = e.lanes, Zn(e, t, l);
    }
    return lc(
      e,
      t,
      n,
      a,
      l
    );
  }
  function fh(e, t, n, a) {
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
        return dh(
          e,
          t,
          i,
          n,
          a
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Mu(
          t,
          i !== null ? i.cachePool : null
        ), i !== null ? md(t, i) : zs(), pd(t);
      else
        return a = t.lanes = 536870912, dh(
          e,
          t,
          i !== null ? i.baseLanes | n : n,
          n,
          a
        );
    } else
      i !== null ? (Mu(t, i.cachePool), md(t, i), da(), t.memoizedState = null) : (e !== null && Mu(t, null), zs(), da());
    return pt(e, t, l, n), t.child;
  }
  function Oi(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function dh(e, t, n, a, l) {
    var i = Cs();
    return i = i === null ? null : { parent: st._currentValue, pool: i }, t.memoizedState = {
      baseLanes: n,
      cachePool: i
    }, e !== null && Mu(t, null), zs(), pd(t), e !== null && Va(e, t, a, !0), t.childLanes = l, null;
  }
  function Pu(e, t) {
    return t = Wu(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function hh(e, t, n) {
    return Ka(t, e.child, null, n), e = Pu(t, t.pendingProps), e.flags |= 2, $t(t), t.memoizedState = null, e;
  }
  function Xv(e, t, n) {
    var a = t.pendingProps, l = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Ue) {
        if (a.mode === "hidden")
          return e = Pu(t, a), t.lanes = 536870912, e.memoizedState = { baseLanes: 0, cachePool: null }, Oi(null, e);
        if (Hs(t), (e = et) ? (e = Im(
          e,
          on
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: na !== null ? { id: _n, overflow: wn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = $f(e), n.return = t, t.child = n, vt = t, et = null)) : e = null, e === null) throw la(t);
        return t.lanes = 536870912, null;
      }
      return Pu(t, a);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var c = i.dehydrated;
      if (Hs(t), l)
        if (t.flags & 256)
          t.flags &= -257, t = hh(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(s(558));
      else if (ot || Va(e, t, n, !1), l = (n & e.childLanes) !== 0, ot || l) {
        if (oa.current === null) {
          if (a = Fe, a !== null && (c = Po(a, n), c !== 0 && c !== i.retryLane))
            throw i.retryLane = c, qa(e, c), Gt(a, e, c), ac;
          yr();
        }
        t = hh(
          e,
          t,
          n
        );
      } else
        e = i.treeContext, et = dn(c.nextSibling), vt = t, Ue = !0, aa = null, on = !1, e !== null && Wf(t, e), t = Pu(t, a), t.flags |= 134221824;
      return t;
    }
    return e = Gn(e.child, {
      mode: a.mode,
      children: a.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Nl(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(s(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function lc(e, t, n, a, l) {
    return Ga(t), n = Is(
      e,
      t,
      n,
      a,
      void 0,
      l
    ), a = Bs(), e !== null && !ot ? (Vs(e, t, l), Zn(e, t, l)) : (Ue && a && Ru(t), t.flags |= 1, pt(e, t, n, l), t.child);
  }
  function mh(e, t, n, a, l, i) {
    return Ga(t), t.updateQueue = null, n = vd(
      t,
      a,
      n,
      l
    ), gd(e), a = Bs(), e !== null && !ot ? (Vs(e, t, i), Zn(e, t, i)) : (Ue && a && Ru(t), t.flags |= 1, pt(e, t, n, i), t.child);
  }
  function ph(e, t, n, a, l) {
    if (Ga(t), t.stateNode === null) {
      var i = ml, c = n.contextType;
      typeof c == "object" && c !== null && (i = _t(c)), i = new n(a, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = tc, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = a, i.state = t.memoizedState, i.refs = {}, Rs(t), c = n.contextType, i.context = typeof c == "object" && c !== null ? _t(c) : ml, i.state = t.memoizedState, c = n.getDerivedStateFromProps, typeof c == "function" && (ec(
        t,
        n,
        c,
        a
      ), i.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (c = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), c !== i.state && tc.enqueueReplaceState(i, i.state, null), Ti(t, a, i, l), Si(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      i = t.stateNode;
      var f = t.memoizedProps, y = Ja(n, f);
      i.props = y;
      var x = i.context, z = n.contextType;
      c = ml, typeof z == "object" && z !== null && (c = _t(z));
      var Q = n.getDerivedStateFromProps;
      z = typeof Q == "function" || typeof i.getSnapshotBeforeUpdate == "function", f = t.pendingProps !== f, z || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (f || x !== c) && th(
        t,
        i,
        a,
        c
      ), ra = !1;
      var _ = t.memoizedState;
      i.state = _, Ti(t, a, i, l), Si(), x = t.memoizedState, f || _ !== x || ra ? (typeof Q == "function" && (ec(
        t,
        n,
        Q,
        a
      ), x = t.memoizedState), (y = ra || eh(
        t,
        n,
        y,
        a,
        _,
        x,
        c
      )) ? (z || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = x), i.props = a, i.state = x, i.context = c, a = y) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      i = t.stateNode, js(e, t), c = t.memoizedProps, z = Ja(n, c), i.props = z, Q = t.pendingProps, _ = i.context, x = n.contextType, y = ml, typeof x == "object" && x !== null && (y = _t(x)), f = n.getDerivedStateFromProps, (x = typeof f == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (c !== Q || _ !== y) && th(
        t,
        i,
        a,
        y
      ), ra = !1, _ = t.memoizedState, i.state = _, Ti(t, a, i, l), Si();
      var U = t.memoizedState;
      c !== Q || _ !== U || ra || e !== null && e.dependencies !== null && Uu(e.dependencies) ? (typeof f == "function" && (ec(
        t,
        n,
        f,
        a
      ), U = t.memoizedState), (z = ra || eh(
        t,
        n,
        z,
        a,
        _,
        U,
        y
      ) || e !== null && e.dependencies !== null && Uu(e.dependencies)) ? (x || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, U, y), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        a,
        U,
        y
      )), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || c === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = U), i.props = a, i.state = U, i.context = y, a = z) : (typeof i.componentDidUpdate != "function" || c === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return i = a, Nl(e, t), a = (t.flags & 128) !== 0, i || a ? (i = t.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && a ? (t.child = Ka(
      t,
      e.child,
      null,
      l
    ), t.child = Ka(
      t,
      null,
      n,
      l
    )) : pt(e, t, n, l), t.memoizedState = i.state, e = t.child) : e = Zn(
      e,
      t,
      l
    ), e;
  }
  function gh(e, t, n, a) {
    return Ia(), t.flags |= 256, pt(e, t, n, a), t.child;
  }
  var ic = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function uc(e) {
    return { baseLanes: e, cachePool: id() };
  }
  function rc(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Wt), e;
  }
  function vh(e, t, n) {
    var a = t.pendingProps, l = !1, i = (t.flags & 128) !== 0, c;
    if ((c = i) || (c = e !== null && e.memoizedState === null ? !1 : (Ot.current & 2) !== 0), c && (l = !0, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ue) {
        if (l ? fa(t) : da(), (e = et) ? (e = Im(
          e,
          on
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: na !== null ? { id: _n, overflow: wn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = $f(e), n.return = t, t.child = n, vt = t, et = null)) : e = null, e === null) throw la(t);
        return uo(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      return i = a.children, a = a.fallback, l ? (da(), l = t.mode, i = Wu(
        { mode: "hidden", children: i },
        l
      ), a = La(
        a,
        l,
        n,
        null
      ), i.return = t, a.return = t, i.sibling = a, t.child = i, a = t.child, a.memoizedState = uc(n), a.childLanes = rc(
        e,
        c,
        n
      ), t.memoizedState = ic, Oi(null, a)) : (fa(t), sc(t, i));
    }
    var f = e.memoizedState;
    if (f !== null) {
      var y = f.dehydrated;
      if (y !== null)
        return Qv(
          e,
          t,
          i,
          c,
          a,
          y,
          f,
          n
        );
    }
    return l ? (da(), l = a.fallback, i = t.mode, f = e.child, y = f.sibling, a = Gn(f, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = f.subtreeFlags & 1206910976, y !== null ? l = Gn(y, l) : (l = La(
      l,
      i,
      n,
      null
    ), l.flags |= 2), l.return = t, a.return = t, a.sibling = l, t.child = a, Oi(null, a), a = t.child, l = e.child.memoizedState, l === null ? l = uc(n) : (i = l.cachePool, i !== null ? (f = st._currentValue, i = i.parent !== f ? { parent: f, pool: f } : i) : i = id(), l = {
      baseLanes: l.baseLanes | n,
      cachePool: i
    }), a.memoizedState = l, a.childLanes = rc(
      e,
      c,
      n
    ), t.memoizedState = ic, Oi(e.child, a)) : (fa(t), n = e.child, e = n.sibling, n = Gn(n, {
      mode: "visible",
      children: a.children
    }), n.return = t, n.sibling = null, e !== null && (c = t.deletions, c === null ? (t.deletions = [e], t.flags |= 16) : c.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function sc(e, t) {
    return t = Wu(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Wu(e, t) {
    return e = Lt(22, e, null, t), e.lanes = 0, e;
  }
  function er(e, t, n) {
    return Ka(t, e.child, null, n), e = sc(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Qv(e, t, n, a, l, i, c, f) {
    if (n)
      return t.flags & 256 ? (fa(t), t.flags &= -257, er(
        e,
        t,
        f
      )) : t.memoizedState !== null ? (da(), t.child = e.child, t.flags |= 128, null) : (da(), i = l.fallback, c = t.mode, l = Wu(
        { mode: "visible", children: l.children },
        c
      ), i = La(
        i,
        c,
        f,
        null
      ), i.flags |= 2, l.return = t, i.return = t, l.sibling = i, t.child = l, Ka(t, e.child, null, f), l = t.child, l.memoizedState = uc(f), l.childLanes = rc(
        e,
        a,
        f
      ), t.memoizedState = ic, Oi(null, l));
    if (fa(t), uo(i)) {
      if (a = i.nextSibling && i.nextSibling.dataset, a) var y = a.dgst;
      return a = y, a !== "" && (l = Error(s(419)), l.stack = "", l.digest = a, pi({ value: l, source: null, stack: null })), er(
        e,
        t,
        f
      );
    }
    if (ot || Va(e, t, f, !1), a = (f & e.childLanes) !== 0, ot || a) {
      if (oa.current !== null)
        return er(
          e,
          t,
          f
        );
      if (a = Fe, a !== null && (l = Po(
        a,
        f
      ), l !== 0 && l !== c.retryLane))
        throw c.retryLane = l, qa(e, l), Gt(a, e, l), ac;
      return io(i) || yr(), er(
        e,
        t,
        f
      );
    }
    return io(i) ? (t.flags |= 192, t.child = e.child, null) : (e = c.treeContext, et = dn(i.nextSibling), vt = t, Ue = !0, aa = null, on = !1, e !== null && Wf(t, e), t = sc(
      t,
      l.children
    ), t.flags |= 134221824, t);
  }
  function yh(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), Du(e.return, t, n);
  }
  function bh(e) {
    for (var t = null; e !== null; ) {
      var n = e.alternate;
      n !== null && Vu(n) === null && (t = e), e = e.sibling;
    }
    return t;
  }
  function tr(e, t, n, a, l, i) {
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
  function cc(e) {
    var t = e.child;
    for (e.child = null; t !== null; ) {
      var n = t.sibling;
      t.sibling = e.child, e.child = t, t = n;
    }
  }
  function oc(e, t, n) {
    var a = t.pendingProps, l = a.revealOrder, i = a.tail;
    a = a.children;
    var c = Ot.current;
    if (t.flags & 128)
      return Ai(t, c), null;
    var f = (c & 2) !== 0;
    if (f ? (c = c & 1 | 2, t.flags |= 128) : c &= 1, Ai(t, c), l === "backwards" && e !== null ? (cc(e), pt(e, t, a, n), cc(e)) : pt(e, t, a, n), a = Ue ? mi : 0, !f && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && yh(e, n, t);
        else if (e.tag === 19)
          yh(e, n, t);
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
        n = bh(t.child), n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null, cc(t)), tr(
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
          if (e = l.alternate, e !== null && Vu(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        tr(
          t,
          !0,
          n,
          null,
          i,
          a
        );
        break;
      case "together":
        tr(
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
        n = bh(t.child), n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), tr(
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
  function Eh(e, t, n) {
    var a = t.pendingProps;
    return ia(t, t.type, a.value), pt(e, t, a.children, n), t.child;
  }
  function Zn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), ga |= t.lanes, (n & t.childLanes) === 0)
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
  function fc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Uu(e)));
  }
  function kv(e, t, n) {
    switch (t.tag) {
      case 3:
        k(t, t.stateNode.containerInfo), ia(t, st, e.memoizedState.cache), Ia();
        break;
      case 27:
      case 5:
        Ve(t);
        break;
      case 4:
        k(t, t.stateNode.containerInfo);
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
          return t.flags |= 128, Hs(t), null;
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
          return a || (n & l) !== 0 ? vh(e, t, n) : (fa(t), e = Zn(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        }
        fa(t);
        break;
      case 19:
        if (t.flags & 128)
          return oc(
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
            return oc(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Ai(t, Ot.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, fh(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        ia(t, st, e.memoizedState.cache);
    }
    return Zn(e, t, n);
  }
  function Sh(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        ot = !0;
      else {
        if (!fc(e, n) && (t.flags & 128) === 0)
          return ot = !1, kv(
            e,
            t,
            n
          );
        ot = (e.flags & 131072) !== 0;
      }
    else
      ot = !1, Ue && (t.flags & 1048576) !== 0 && Pf(t, mi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = Qa(t.elementType), t.type = e, typeof e == "function")
            ys(e) ? (a = Ja(e, a), t.tag = 1, t = ph(
              null,
              t,
              e,
              a,
              n
            )) : (t.tag = 0, t = lc(
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
                t.tag = 11, t = sh(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              } else if (l === F) {
                t.tag = 14, t = ch(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              } else if (l === q) {
                t.tag = 10, t.type = e, t = Eh(
                  null,
                  t,
                  n
                );
                break e;
              }
            }
            throw t = me(e) || e, Error(s(306, t, ""));
          }
        }
        return t;
      case 0:
        return lc(
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
        ), ph(
          e,
          t,
          a,
          l,
          n
        );
      case 3:
        e: {
          if (k(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(s(387));
          a = t.pendingProps;
          var i = t.memoizedState;
          l = i.element, js(e, t), Ti(t, a, null, n);
          var c = t.memoizedState;
          if (a = c.cache, ia(t, st, a), a !== i.cache && _s(
            t,
            [st],
            n,
            !0
          ), Si(), a = c.element, i.isDehydrated)
            if (i = {
              element: a,
              isDehydrated: !1,
              cache: c.cache
            }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
              t = gh(
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
              ), pi(l), t = gh(
                e,
                t,
                a,
                n
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, et = dn(e.firstChild), vt = t, Ue = !0, aa = null, on = !0, n = fd(
                t,
                null,
                a,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 134221824, n = n.sibling;
          else {
            if (Ia(), a === l) {
              t = Zn(
                e,
                t,
                n
              );
              break e;
            }
            pt(e, t, a, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Nl(e, t), e === null ? (n = km(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : Ue || (t.stateNode = _m(
          t.type,
          t.pendingProps,
          Z.current,
          t
        )) : t.memoizedState = km(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Ve(t), e === null && Ue && (a = t.stateNode = Gm(
          t.type,
          t.pendingProps,
          Z.current
        ), vt = t, on = !0, l = et, Ea(t.type) ? (ro = l, et = dn(a.firstChild)) : et = l), pt(
          e,
          t,
          t.pendingProps.children,
          n
        ), Nl(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ue && ((l = a = et) && (a = By(
          a,
          t.type,
          t.pendingProps,
          on
        ), a !== null ? (t.stateNode = a, vt = t, et = dn(a.firstChild), on = !1, l = !0) : l = !1), l || la(t)), Ve(t), l = t.type, i = t.pendingProps, c = e !== null ? e.memoizedProps : null, a = i.children, Pc(l, i) ? a = null : c !== null && Pc(l, c) && (t.flags |= 32), t.memoizedState !== null && (l = Is(
          e,
          t,
          Mv,
          null,
          null,
          n
        ), Gl._currentValue = l), Nl(e, t), pt(e, t, a, n), t.child;
      case 6:
        return e === null && Ue && ((e = n = et) && (n = Vy(
          n,
          t.pendingProps,
          on
        ), n !== null ? (t.stateNode = n, vt = t, et = null, e = !0) : e = !1), e || la(t)), null;
      case 13:
        return vh(e, t, n);
      case 4:
        return k(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = Ka(
          t,
          null,
          a,
          n
        ) : pt(e, t, a, n), t.child;
      case 11:
        return sh(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return a = t.pendingProps, Nl(e, t), pt(e, t, a, n), t.child;
      case 8:
        return pt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return pt(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return Eh(e, t, n);
      case 9:
        return l = t.type._context, a = t.pendingProps.children, Ga(t), l = _t(l), a = a(l), t.flags |= 1, pt(e, t, a, n), t.child;
      case 14:
        return ch(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return oh(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return oc(e, t, n);
      case 31:
        return Xv(e, t, n);
      case 22:
        return fh(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return Ga(t), a = _t(st), e === null ? (l = Cs(), l === null && (l = Fe, i = ws(), l.pooledCache = i, i.refCount++, i !== null && (l.pooledCacheLanes |= n), l = i), t.memoizedState = { parent: a, cache: l }, Rs(t), ia(t, st, l)) : ((e.lanes & n) !== 0 && (js(e, t), Ti(t, null, null, n), Si()), l = e.memoizedState, i = t.memoizedState, l.parent !== a ? (l = { parent: a, cache: a }, t.memoizedState = l, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = l), ia(t, st, a)) : (a = i.cache, ia(t, st, a), a !== l.cache && _s(
          t,
          [st],
          n,
          !0
        ))), pt(
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
        }), a = t.pendingProps, a.name != null && a.name !== "auto" ? t.flags |= e === null ? 18882560 : 18874368 : Ue && Ru(t), e !== null && e.memoizedProps.name !== a.name ? t.flags |= 4194816 : Nl(e, t), pt(e, t, a.children, n), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(s(156, t.tag));
  }
  function Jn(e) {
    e.flags |= 4;
  }
  function dc(e, t, n, a, l) {
    var i;
    if ((i = (e.mode & 32) !== 0) && (i = n === null ? $m(t, a) : $m(t, a) && (a.src !== n.src || a.srcSet !== n.srcSet)), i) {
      if (e.flags |= 16777216, (l & 335544128) === l)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (nm()) e.flags |= 8192;
        else
          throw ka = qu, xs;
    } else e.flags &= -16777217;
  }
  function Th(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Fm(t))
      if (nm()) e.flags |= 8192;
      else
        throw ka = qu, xs;
  }
  function nr(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Jo() : 536870912, e.lanes |= t, xl |= t);
  }
  function Ci(e, t) {
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
  function Kv(e, t, n) {
    var a = t.pendingProps;
    switch (Ss(t), t.tag) {
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
        return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Qn(st), Se(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (vl(t) ? Jn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, As())), tt(t), null;
      case 26:
        var l = t.type, i = t.memoizedState;
        return e === null ? (Jn(t), i !== null ? (tt(t), Th(t, i)) : (tt(t), dc(
          t,
          l,
          null,
          a,
          n
        ))) : i ? i !== e.memoizedState ? (Jn(t), tt(t), Th(t, i)) : (tt(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && Jn(t), tt(t), dc(
          t,
          l,
          e,
          a,
          n
        )), null;
      case 27:
        if ($e(t), n = Z.current, l = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && Jn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(s(166));
            return tt(t), t.subtreeFlags &= -33554433, null;
          }
          e = Xt.current, vl(t) ? ed(t) : (e = Gm(l, a, n), t.stateNode = e, Jn(t));
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
          if (i = Xt.current, vl(t))
            ed(t);
          else {
            var c = Ii(
              Z.current
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
            i[Nt] = t, i[qt] = a;
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
            e: switch (xt(i, l, a), l) {
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
        return tt(t), t.subtreeFlags &= -33554433, dc(
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
          if (e = Z.current, vl(t)) {
            if (e = t.stateNode, n = t.memoizedProps, a = null, l = vt, l !== null)
              switch (l.tag) {
                case 27:
                case 5:
                  a = l.memoizedProps;
              }
            e[Nt] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || Sm(e.nodeValue, n)), e || la(t, !0);
          } else
            e = Ii(e).createTextNode(
              a
            ), e[Nt] = t, t.stateNode = e;
        }
        return tt(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = vl(t), n !== null) {
            if (e === null) {
              if (!a) throw Error(s(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(557));
              e[Nt] = t;
            } else
              Ia(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            tt(t), e = !1;
          } else
            n = As(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? ($t(t), t) : ($t(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(s(558));
        }
        return tt(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (l = vl(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!l) throw Error(s(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(s(317));
              l[Nt] = t;
            } else
              Ia(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            tt(t), l = !1;
          } else
            l = As(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), l = !0;
          if (!l)
            return t.flags & 256 ? ($t(t), t) : ($t(t), null);
        }
        return $t(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = a !== null, e = e !== null && e.memoizedState !== null, n && (a = t.child, l = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (l = a.alternate.memoizedState.cachePool.pool), i = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), i !== l && (a.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), nr(t, t.updateQueue), tt(t), null);
      case 4:
        return Se(), e === null && Kc(t.stateNode.containerInfo), t.flags |= 67108864, tt(t), null;
      case 10:
        return Qn(t.type), tt(t), null;
      case 19:
        if (qs(t), a = t.memoizedState, a === null) return tt(t), null;
        if (l = (t.flags & 128) !== 0, i = a.rendering, i === null)
          if (l) Ci(a, !1);
          else {
            if (it !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (i = Vu(e), i !== null) {
                  for (t.flags |= 128, Ci(a, !1), e = i.updateQueue, t.updateQueue = e, nr(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    Jf(n, e), n = n.sibling;
                  return Ai(
                    t,
                    Ot.current & 1 | 2
                  ), Ue && Yn(t, a.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && Qt() > mr && (t.flags |= 128, l = !0, Ci(a, !1), t.lanes = 4194304);
          }
        else {
          if (!l)
            if (e = Vu(i), e !== null) {
              if (t.flags |= 128, l = !0, e = e.updateQueue, t.updateQueue = e, nr(t, e), Ci(a, !0), a.tail === null && a.tailMode !== "collapsed" && a.tailMode !== "visible" && !i.alternate && !Ue)
                return tt(t), null;
            } else
              2 * Qt() - a.renderingStartTime > mr && n !== 536870912 && (t.flags |= 128, l = !0, Ci(a, !1), t.lanes = 4194304);
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
          return a.rendering = e, a.tail = e.sibling, a.renderingStartTime = Qt(), e.sibling = null, i = Ot.current, i = l ? i & 1 | 2 : i & 1, a.tailMode === "visible" || a.tailMode === "collapsed" || !n || Ue ? Ai(t, i) : (n = i, Qe(wt, t), Qe(Ot, n), jt === null && (jt = t)), Ue && Yn(t, a.treeForkCount), e;
        }
        return tt(t), null;
      case 22:
      case 23:
        return $t(t), Ms(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (tt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : tt(t), n = t.updateQueue, n !== null && nr(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && Ne(Xa), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Qn(st), tt(t), null;
      case 25:
        return null;
      case 30:
        return t.flags |= 33554432, tt(t), null;
    }
    throw Error(s(156, t.tag));
  }
  function Zv(e, t) {
    switch (Ss(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Qn(st), Se(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
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
        return qs(t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null), t.flags |= 4, t) : null;
      case 4:
        return Se(), null;
      case 10:
        return Qn(t.type), null;
      case 22:
      case 23:
        return $t(t), Ms(), e !== null && Ne(Xa), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Qn(st), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Ah(e, t) {
    switch (Ss(t), t.tag) {
      case 3:
        Qn(st), Se();
        break;
      case 26:
      case 27:
      case 5:
        $e(t);
        break;
      case 4:
        Se();
        break;
      case 31:
        t.memoizedState !== null && $t(t);
        break;
      case 13:
        $t(t);
        break;
      case 19:
        qs(t);
        break;
      case 10:
        Qn(t.type);
        break;
      case 22:
      case 23:
        $t(t), Ms(), e !== null && Ne(Xa);
        break;
      case 24:
        Qn(st);
    }
  }
  function xi(e, t) {
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
      Ke(t, t.return, f);
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
              var y = n, x = f;
              try {
                x();
              } catch (z) {
                Ke(
                  l,
                  y,
                  z
                );
              }
            }
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (z) {
      Ke(t, t.return, z);
    }
  }
  function Nh(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        hd(t, n);
      } catch (a) {
        Ke(e, e.return, a);
      }
    }
  }
  function _h(e, t, n) {
    n.props = Ja(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      Ke(e, t, a);
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
            (l.ref === null || l.ref.name !== i) && (l.ref = Dm(i)), a = l.ref;
            break;
          case 7:
            if (e.stateNode === null) {
              var c = new tn(e);
              p(
                e.child,
                !1,
                Ly,
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
      Ke(e, t, f);
    }
  }
  function Ct(e, t) {
    var n = e.ref, a = e.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (l) {
          Ke(e, t, l);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (l) {
          Ke(e, t, l);
        }
      else n.current = null;
  }
  function ar(e, t) {
    if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && t !== null)
      for (var n = 0; n < t.length; n++)
        Lm(
          e.stateNode,
          t[n]
        );
  }
  function wh(e) {
    for (var t = e.return; t !== null && (mc(t) && Lm(e.stateNode, t.stateNode), !hc(t)); )
      t = t.return;
  }
  function Ri(e) {
    for (var t = e.return; t !== null && (mc(t) && Iy(e.stateNode, t.stateNode), !hc(t)); )
      t = t.return;
  }
  function hc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 27;
  }
  function mc(e) {
    return e && e.tag === 7 && e.stateNode !== null;
  }
  function pc(e) {
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
      Ke(e, e.return, l);
    }
  }
  function gc(e, t, n) {
    try {
      var a = e.stateNode;
      Ey(a, e.type, n, t), a[qt] = t;
    } catch (l) {
      Ke(e, e.return, l);
    }
  }
  function Oh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ea(e.type) || e.tag === 4;
  }
  function vc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Oh(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Ea(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function yc(e, t, n, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      l = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(l, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(l), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Nn)), ar(e, a), Ge = !0;
    else if (l !== 4 && (l === 27 && (ar(e, a), a = null, Ea(e.type) && (n = e.stateNode, t = null)), e = e.child, e !== null))
      for (yc(
        e,
        t,
        n,
        a
      ), e = e.sibling; e !== null; )
        yc(
          e,
          t,
          n,
          a
        ), e = e.sibling;
  }
  function lr(e, t, n, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      l = e.stateNode, t ? n.insertBefore(l, t) : n.appendChild(l), ar(e, a), Ge = !0;
    else if (l !== 4 && (l === 27 && (ar(e, a), a = null, Ea(e.type) && (n = e.stateNode)), e = e.child, e !== null))
      for (lr(
        e,
        t,
        n,
        a
      ), e = e.sibling; e !== null; )
        lr(
          e,
          t,
          n,
          a
        ), e = e.sibling;
  }
  function Ch(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var a = e.type, l = t.attributes; l.length; )
        t.removeAttributeNode(l[0]);
      xt(t, a, n), t[Nt] = e, t[qt] = n;
    } catch (i) {
      Ke(e, e.return, i);
    }
  }
  var ir = !1, Ft = null;
  function xh(e) {
    (e.tag === 30 || (e.subtreeFlags & 33554432) !== 0) && (ir = !0);
  }
  var Cn = null;
  function Rh() {
    var e = Cn;
    return Cn = null, e;
  }
  var It = 0;
  function _l(e, t, n, a, l) {
    return It = 0, jh(
      e.child,
      t,
      n,
      a,
      l
    );
  }
  function jh(e, t, n, a, l) {
    for (var i = !1; e !== null; ) {
      if (e.tag === 5) {
        var c = e.stateNode;
        if (a !== null) {
          var f = to(c);
          a.push(f), f.view && (i = !0);
        } else
          i || to(c).view && (i = !0);
        ir = !0, Rm(
          c,
          It === 0 ? t : t + "_" + It,
          n
        ), It++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && l || jh(
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
      e.tag === 5 ? jm(e.stateNode, e.memoizedProps) : (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && t || xn(
        e.child,
        t
      )), e = e.sibling;
  }
  function ur(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null; ) {
        if ((e.tag !== 22 || e.memoizedState === null) && (ur(e), e.tag === 30 && (e.flags & 18874368) !== 0 && e.stateNode.paired)) {
          var t = e.memoizedProps;
          if (t.name == null || t.name === "auto")
            throw Error(s(544));
          var n = t.name;
          t = Vn(t.default, t.share), t !== "none" && (_l(
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
  function bc(e, t) {
    if (e.tag === 30) {
      var n = e.stateNode, a = e.memoizedProps, l = Bn(a, n), i = Vn(
        a.default,
        n.paired ? a.share : a.enter
      );
      i !== "none" ? _l(e, l, i, null, !1) ? (ur(e), n.paired || t || Ul(e, a.onEnter)) : xn(e.child, !1) : ur(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        bc(e, t), e = e.sibling;
    else ur(e);
  }
  function Ec(e) {
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
                  if (i !== "none" && (_l(
                    e,
                    a,
                    i,
                    null,
                    !1
                  ) ? (i = e.stateNode, l.paired = i, i.paired = l, Ul(e, n.onShare)) : xn(e.child, !1)), t.delete(a), t.size === 0) break;
                }
              }
            }
            Ec(e);
          }
          e = e.sibling;
        }
    }
  }
  function Sc(e) {
    if (e.tag === 30) {
      var t = e.memoizedProps, n = Bn(t, e.stateNode), a = Ft !== null ? Ft.get(n) : void 0, l = Vn(
        t.default,
        a !== void 0 ? t.share : t.exit
      );
      l !== "none" && (_l(e, n, l, null, !1) ? a !== void 0 ? (l = e.stateNode, a.paired = l, l.paired = a, Ft.delete(n), Ul(e, t.onShare)) : Ul(e, t.onExit) : xn(e.child, !1)), Ft !== null && Ec(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        Sc(e), e = e.sibling;
    else
      Ft !== null && Ec(e);
  }
  function Dh(e) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var t = e.memoizedProps, n = Bn(t, e.stateNode);
        t = Vn(t.default, t.update), e.flags &= -5, t !== "none" && _l(
          e,
          n,
          t,
          e.memoizedState = [],
          !1
        );
      } else
        (e.subtreeFlags & 33554432) !== 0 && Dh(e);
      e = e.sibling;
    }
  }
  function Tc(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null; ) {
        if (e.tag !== 22 || e.memoizedState === null) {
          if (e.tag === 30 && (e.flags & 18874368) !== 0) {
            var t = e.stateNode;
            t.paired !== null && (t.paired = null, xn(e.child, !1));
          }
          Tc(e);
        }
        e = e.sibling;
      }
  }
  function rr(e) {
    if (e.tag === 30)
      e.stateNode.paired = null, xn(e.child, !1), Tc(e);
    else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        rr(e), e = e.sibling;
    else Tc(e);
  }
  function Uh(e) {
    for (e = e.child; e !== null; )
      e.tag === 30 ? xn(e.child, !1) : (e.subtreeFlags & 33554432) !== 0 && Uh(e), e = e.sibling;
  }
  function Ac(e, t, n, a, l, i, c) {
    for (var f = !1; t !== null; ) {
      if (t.tag === 5) {
        var y = t.stateNode;
        if (i !== null && It < i.length) {
          var x = i[It], z = to(y);
          (x.view || z.view) && (f = !0);
          var Q;
          if (Q = (e.flags & 4) === 0)
            if (z.clip) Q = !0;
            else {
              Q = x.rect;
              var _ = z.rect;
              Q = Q.y !== _.y || Q.x !== _.x || Q.height !== _.height || Q.width !== _.width;
            }
          Q && (e.flags |= 4), z.abs ? z = !x.abs : (x = x.rect, z = z.rect, z = x.height !== z.height || x.width !== z.width), z && (e.flags |= 32);
        } else e.flags |= 32;
        (e.flags & 4) !== 0 && Rm(
          y,
          It === 0 ? n : n + "_" + It,
          l
        ), f && (e.flags & 4) !== 0 || (Cn === null && (Cn = []), Cn.push(
          y,
          It === 0 ? a : a + "_" + It,
          t.memoizedProps
        )), It++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && c ? e.flags |= t.flags & 32 : Ac(
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
  function zh(e, t) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var n = e.memoizedProps, a = e.stateNode, l = Bn(n, a), i = Vn(n.default, n.update), c;
        c = e.memoizedState, e.memoizedState = null, a = e;
        var f = e.child;
        It = 0, l = Ac(
          a,
          f,
          l,
          l,
          i,
          c,
          !1
        ), (e.flags & 4) !== 0 && l && Ul(e, n.onUpdate);
      } else
        (e.subtreeFlags & 33554432) !== 0 && zh(e);
      e = e.sibling;
    }
  }
  var yt = !1, Xe = !1, Rn = !1, Nc = !1, Mh = typeof WeakSet == "function" ? WeakSet : Set, bt = null, jn = !1, ji = !1, sr = !1, _c = !1;
  function Jv(e, t, n) {
    if (e = e.containerInfo, $c = Yl, e = If(e), fs(e)) {
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
            var f = 0, y = -1, x = -1, z = 0, Q = 0, _ = e, U = null;
            t: for (; ; ) {
              for (var oe; _ !== a || i !== 0 && _.nodeType !== 3 || (y = f + i), _ !== c || l !== 0 && _.nodeType !== 3 || (x = f + l), _.nodeType === 3 && (f += _.nodeValue.length), (oe = _.firstChild) !== null; )
                U = _, _ = oe;
              for (; ; ) {
                if (_ === e) break t;
                if (U === a && ++z === i && (y = f), U === c && ++Q === l && (x = f), (oe = _.nextSibling) !== null) break;
                _ = U, U = _.parentNode;
              }
              _ = oe;
            }
            a = y === -1 || x === -1 ? null : { start: y, end: x };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Fc = { focusedElem: e, selectionRange: a }, Yl = !1, n = (n & 335544064) === n, bt = t, t = n ? 9270 : 1024; bt !== null; ) {
      if (e = bt, n && (a = e.deletions, a !== null))
        for (i = 0; i < a.length; i++)
          n && Sc(a[i]);
      if (e.alternate === null && (e.flags & 2) !== 0)
        n && xh(e), cr(n);
      else {
        if (e.tag === 22) {
          if (a = e.alternate, e.memoizedState !== null) {
            a !== null && a.memoizedState === null && n && Sc(a), cr(n);
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            n && xh(e), cr(n);
            continue;
          }
        }
        a = e.child, (e.subtreeFlags & t) !== 0 && a !== null ? (a.return = e, bt = a) : (n && Dh(e), cr(n));
      }
    }
    Ft = null;
  }
  function cr(e) {
    for (; bt !== null; ) {
      var t = bt, n = e, a = t.alternate, l = t.flags;
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
              Ke(t, t.return, f);
            }
          }
          break;
        case 3:
          if ((l & 1024) !== 0) {
            if (a = t.stateNode.containerInfo, n = a.nodeType, n === 9)
              lo(a);
            else if (n === 1)
              switch (a.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  lo(a);
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
          ), l = t.memoizedProps, l = Vn(l.default, l.update), l !== "none" && _l(
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
        a.return = t.return, bt = a;
        break;
      }
      bt = t.return;
    }
  }
  function Hh(e, t, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Dn(e, n), a & 4 && xi(5, n);
        break;
      case 1:
        if (Dn(e, n), a & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (c) {
              Ke(n, n.return, c);
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
              Ke(
                n,
                n.return,
                c
              );
            }
          }
        a & 64 && Nh(n), a & 512 && On(n, n.return);
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
            hd(e, t);
          } catch (c) {
            Ke(n, n.return, c);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Ch(n);
      case 26:
      case 5:
        Dn(e, n), t === null && a & 4 && pc(n), a & 512 && On(n, n.return);
        break;
      case 12:
        Dn(e, n);
        break;
      case 31:
        Dn(e, n), a & 4 && Bh(e, n);
        break;
      case 13:
        Dn(e, n), a & 4 && Vh(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = ry.bind(
          null,
          n
        ), Gy(e, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || yt, !a) {
          var i = t !== null && t.memoizedState !== null || Xe;
          t = yt, l = Xe, yt = a, (Xe = i) && !l ? (a = 2, (n.subtreeFlags & 8772) !== 0 && (a |= 1), En(
            e,
            n,
            a
          )) : Dn(e, n), yt = t, Xe = l;
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
  function wc(e, t) {
    for (e = e.child; e !== null; )
      qh(e, t), e = e.sibling;
  }
  function qh(e, t) {
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
        } catch (y) {
          Ke(e, e.return, y);
        }
        Oc(e, t);
        break;
      case 6:
        try {
          e.stateNode.nodeValue = t ? "" : e.memoizedProps, Ge = !0;
        } catch (y) {
          Ke(e, e.return, y);
        }
        break;
      case 18:
        try {
          var f = e.stateNode;
          t ? xm(f, !0) : xm(e.stateNode, !1);
        } catch (y) {
          Ke(e, e.return, y);
        }
        break;
      case 22:
      case 23:
        e.memoizedState === null && wc(e, t);
        break;
      default:
        wc(e, t);
    }
  }
  function Oc(e, t) {
    if (e.subtreeFlags & 67108864)
      for (e = e.child; e !== null; ) {
        e: {
          var n = e, a = t;
          switch (n.tag) {
            case 4:
              qh(n, a);
              break e;
            case 22:
              n.memoizedState === null && Oc(n, a);
              break e;
            default:
              Oc(n, a);
          }
        }
        e = e.sibling;
      }
  }
  function Lh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Lh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && mu(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var nt = null, Bt = !1;
  function yn(e, t, n) {
    for (n = n.child; n !== null; )
      Ih(e, t, n), n = n.sibling;
  }
  function Ih(e, t, n) {
    if (kt && typeof kt.onCommitFiberUnmount == "function")
      try {
        kt.onCommitFiberUnmount(ei, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Xe || Ct(n, t), yn(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !Xe && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Xe || Ct(n, t), Ri(n);
        var a = nt, l = Bt;
        Ea(n.type) && (nt = n.stateNode, Bt = !1), yn(
          e,
          t,
          n
        ), Ym(
          n.stateNode,
          n.type,
          n.memoizedProps
        ), nt = a, Bt = l;
        break;
      case 5:
        Xe || Ct(n, t), Ri(n);
      case 6:
        if (n.tag === 6 && Ri(n), a = nt, l = Bt, nt = null, yn(
          e,
          t,
          n
        ), nt = a, Bt = l, nt !== null)
          if (Bt)
            try {
              (nt.nodeType === 9 ? nt.body : nt.nodeName === "HTML" ? nt.ownerDocument.body : nt).removeChild(n.stateNode), Ge = !0;
            } catch (i) {
              Ke(
                n,
                t,
                i
              );
            }
          else
            try {
              nt.removeChild(n.stateNode), Ge = !0;
            } catch (i) {
              Ke(
                n,
                t,
                i
              );
            }
        break;
      case 18:
        nt !== null && (Bt ? (e = nt, Cm(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), Xl(e)) : Cm(nt, n.stateNode));
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
        Xe || (Ct(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && _h(
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
        Ct(n, t), yn(
          e,
          t,
          n
        );
        break;
      case 7:
        Xe || Ct(n, t), yn(
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
  function Bh(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Xl(e);
      } catch (n) {
        Ke(t, t.return, n);
      }
    }
  }
  function Vh(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Xl(e);
      } catch (n) {
        Ke(t, t.return, n);
      }
  }
  function $v(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Mh()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Mh()), t;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function or(e, t) {
    var n = $v(e);
    t.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var l = sy.bind(null, e, a);
        a.then(l, l);
      }
    });
  }
  function zt(e, t, n) {
    var a = t.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var i = a[l], c = e, f = t, y = f;
        e: for (; y !== null; ) {
          switch (y.tag) {
            case 27:
              if (Ea(y.type)) {
                nt = y.stateNode, Bt = !1;
                break e;
              }
              break;
            case 5:
              nt = y.stateNode, Bt = !1;
              break e;
            case 3:
            case 4:
              nt = y.stateNode.containerInfo, Bt = !0;
              break e;
          }
          y = y.return;
        }
        if (nt === null) throw Error(s(160));
        Ih(c, f, i), nt = null, Bt = !1, c = i.alternate, c !== null && (c.return = null), i.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Gh(t, e, n), t = t.sibling;
  }
  var bn = null;
  function Gh(e, t, n) {
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
        zt(t, e, n), Mt(e), l & 4 && (ha(3, e, e.return), xi(3, e), ha(5, e, e.return));
        break;
      case 1:
        zt(t, e, n), Mt(e), l & 512 && (Xe || a === null || Ct(a, a.return)), l & 64 && yt && (e = e.updateQueue, e !== null && (t = e.callbacks, t !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? t : n.concat(t))));
        break;
      case 26:
        if (i = bn, zt(t, e, n), Mt(e), l & 512 && (Xe || a === null || Ct(a, a.return)), l & 4)
          if (l = a !== null ? a.memoizedState : null, n = e.memoizedState, a === null)
            if (n === null)
              if (e.stateNode === null)
                if (yt)
                  e.stateNode = _m(
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
                        a = l.getElementsByTagName("title")[0], (!a || a[ai] || a[Nt] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = l.createElement(t), l.head.insertBefore(
                          a,
                          l.querySelector("head > title")
                        )), xt(a, t, n), a[Nt] = e, gt(a), t = a;
                        break e;
                      case "link":
                        if (i = Jm(
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
                        a = l.createElement(t), xt(a, t, n), l.head.appendChild(a);
                        break;
                      case "meta":
                        if (i = Jm(
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
                        a = l.createElement(t), xt(a, t, n), l.head.appendChild(a);
                        break;
                      default:
                        throw Error(s(468, t));
                    }
                    a[Nt] = e, gt(a), t = a;
                  }
                  e.stateNode = t;
                }
              else
                yt || fo(i, e.type, e.stateNode);
            else
              e.stateNode = Zm(
                i,
                n,
                e.memoizedProps
              );
          else
            l !== n ? (l === null ? (t = a.stateNode, t === null || Xe || t.parentNode.removeChild(t)) : l.count--, n === null ? yt || fo(i, e.type, e.stateNode) : Zm(i, n, e.memoizedProps)) : n === null && e.stateNode !== null && gc(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        break;
      case 27:
        zt(t, e, n), Mt(e), l & 512 && (Xe || a === null || Ct(a, a.return)), a !== null && l & 4 && gc(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (i = Rn, Rn = !1, zt(t, e, n), Rn = i, Mt(e), l & 512 && (Xe || a === null || Ct(a, a.return)), e.flags & 32) {
          t = e.stateNode;
          try {
            rl(t, ""), Ge = !0;
          } catch (z) {
            Ke(e, e.return, z);
          }
        }
        l & 4 && e.stateNode != null && (t = e.memoizedProps, gc(
          e,
          t,
          a !== null ? a.memoizedProps : t
        )), l & 1024 && (Nc = !0);
        break;
      case 6:
        if (zt(t, e, n), Mt(e), l & 4) {
          if (e.stateNode === null)
            throw Error(s(162));
          t = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = t, Ge = !0;
          } catch (z) {
            Ke(e, e.return, z);
          }
        }
        break;
      case 3:
        if (Ge = !1, _r = null, i = bn, bn = Bi(t.containerInfo), zt(t, e, n), bn = i, Mt(e), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Xl(t.containerInfo);
          } catch (z) {
            Ke(e, e.return, z);
          }
        Nc && (Nc = !1, Yh(e)), Ge = !1;
        break;
      case 4:
        l = Rn, Rn = yt, a = cf(), i = bn, bn = Bi(
          e.stateNode.containerInfo
        ), zt(t, e, n), Mt(e), bn = i, Ge && ji && (sr = !0), Ge = a, Rn = l;
        break;
      case 12:
        zt(t, e, n), Mt(e);
        break;
      case 31:
        zt(t, e, n), Mt(e), l & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, or(e, t)));
        break;
      case 13:
        zt(t, e, n), Mt(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (hr = Qt()), l & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, or(e, t)));
        break;
      case 22:
        i = e.memoizedState !== null, c = a !== null && a.memoizedState !== null;
        var f = yt, y = Xe, x = Rn;
        yt = f || i, Rn = x || i, Xe = y || c, zt(t, e, n), Xe = y, Rn = x, yt = f, Mt(e), l & 8192 && (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, !i || a === null || c || yt || Xe || (t = c || Xe, n = yt, a = Xe, yt = i || yt, Xe = t, ma(e, 2), yt = n, Xe = a), !i && Rn || wc(e, i)), l & 4 && (t = e.updateQueue, t !== null && (n = t.retryQueue, n !== null && (t.retryQueue = null, or(e, n))));
        break;
      case 19:
        zt(t, e, n), Mt(e), l & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, or(e, t)));
        break;
      case 30:
        l & 512 && (Xe || a === null || Ct(a, a.return)), l = cf(), i = ji, c = (n & 335544064) === n, f = e.memoizedProps, ji = c && Vn(
          f.default,
          f.update
        ) !== "none", zt(t, e, n), Mt(e), c && a !== null && Ge && (e.flags |= 4), ji = i, Ge = l;
        break;
      case 21:
        break;
      case 7:
        l & 512 && (Xe || a === null || Ct(a, a.return)), a && a.stateNode !== null && (a.stateNode._fragmentFiber = e);
      default:
        zt(t, e, n), Mt(e);
    }
  }
  function Mt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, a = e.return; a !== null; ) {
          if (Oh(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var l = e.return; l !== null; ) {
          if (mc(l)) {
            var i = l.stateNode;
            a === null ? a = [i] : a.push(i);
          }
          if (hc(l)) break;
          l = l.return;
        }
        var c = a;
        if (n == null) throw Error(s(160));
        switch (n.tag) {
          case 27:
            var f = n.stateNode, y = vc(e);
            lr(
              e,
              y,
              f,
              c
            );
            break;
          case 5:
            var x = n.stateNode;
            n.flags & 32 && (rl(x, ""), n.flags &= -33);
            var z = vc(e);
            lr(
              e,
              z,
              x,
              c
            );
            break;
          case 3:
          case 4:
            var Q = n.stateNode.containerInfo, _ = vc(e);
            yc(
              e,
              _,
              Q,
              c
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (U) {
        Ke(e, e.return, U);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Yh(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Yh(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, Yl = !0, t.reset(), Yl = !1), e = e.sibling;
      }
  }
  function wl(e, t) {
    if (t.subtreeFlags & 9270)
      for (t = t.child; t !== null; )
        Xh(t, e), t = t.sibling;
    else zh(t);
  }
  function Xh(e, t) {
    var n = e.alternate;
    if (n === null) bc(e, !1);
    else
      switch (e.tag) {
        case 3:
          if (_c = jn = !1, Rh(), wl(t, e), !jn && !sr) {
            if (e = Cn, e !== null)
              for (var a = 0; a < e.length; a += 3) {
                n = e[a];
                var l = e[a + 1];
                jm(n, e[a + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate(
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
            )), _c = !0;
          }
          Cn = null;
          break;
        case 5:
          wl(t, e);
          break;
        case 4:
          a = jn, jn = !1, wl(t, e), jn && (sr = !0), jn = a;
          break;
        case 22:
          e.memoizedState === null && (n.memoizedState !== null ? bc(e, !1) : wl(t, e));
          break;
        case 30:
          a = jn, l = Rh(), jn = !1, wl(t, e), jn && (e.flags |= 4);
          var i = e.memoizedProps, c = e.stateNode;
          t = Bn(i, c), c = Bn(n.memoizedProps, c);
          var f = Vn(i.default, i.update);
          f === "none" ? t = !1 : (i = n.memoizedState, n.memoizedState = null, n = e.child, It = 0, t = Ac(
            e,
            n,
            t,
            c,
            f,
            i,
            !0
          ), It !== (i === null ? 0 : i.length) && (e.flags |= 32)), (e.flags & 4) !== 0 && t ? (Ul(
            e,
            e.memoizedProps.onUpdate
          ), Cn = l) : l !== null && (l.push.apply(l, Cn), Cn = l), jn = (e.flags & 32) !== 0 ? !0 : a;
          break;
        default:
          wl(t, e);
      }
  }
  function Dn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Hh(e, t.alternate, t), t = t.sibling;
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
          Ct(n, n.return);
          var l = n.stateNode;
          typeof l.componentWillUnmount == "function" && _h(
            n,
            n.return,
            l
          ), ma(
            n,
            a
          );
          break;
        case 27:
          (a & 2) !== 0 && Ym(
            n.stateNode,
            n.type,
            n.memoizedProps
          );
        case 5:
          Ct(n, n.return), n.tag !== 5 && n.tag !== 27 || Ri(n), ma(
            n,
            a
          );
          break;
        case 6:
          Ri(n);
          break;
        case 26:
          Ct(n, n.return), l = n.stateNode, n.memoizedState !== null || l === null || Xe || l.parentNode.removeChild(l), ma(
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
          Ct(n, n.return), ma(
            n,
            a
          );
          break;
        case 7:
          Ct(n, n.return);
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
          ), xi(4, i);
          break;
        case 1:
          if (En(
            l,
            i,
            n
          ), a = i, l = a.stateNode, typeof l.componentDidMount == "function")
            try {
              l.componentDidMount();
            } catch (z) {
              Ke(a, a.return, z);
            }
          if (a = i, l = a.updateQueue, l !== null) {
            var y = a.stateNode;
            try {
              var x = l.shared.hiddenCallbacks;
              if (x !== null)
                for (l.shared.hiddenCallbacks = null, l = 0; l < x.length; l++)
                  dd(x[l], y);
            } catch (z) {
              Ke(a, a.return, z);
            }
          }
          f && c & 64 && Nh(i), On(i, i.return);
          break;
        case 27:
          (n & 2) !== 0 && Ch(i);
        case 5:
          i.tag !== 5 && i.tag !== 27 || wh(i), En(
            l,
            i,
            n
          ), f && a === null && c & 4 && pc(i), On(i, i.return);
          break;
        case 6:
          wh(i);
          break;
        case 26:
          y = i.stateNode, i.memoizedState !== null || y === null || yt || fo(
            Bi(y.ownerDocument),
            i.type,
            y
          ), En(
            l,
            i,
            n
          ), f && a === null && c & 4 && pc(i), On(i, i.return);
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
          ), f && c & 4 && Bh(l, i);
          break;
        case 13:
          En(
            l,
            i,
            n
          ), f && c & 4 && Vh(l, i);
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
  function Cc(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && gi(n));
  }
  function xc(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && gi(e));
  }
  function fn(e, t, n, a) {
    var l = (n & 335544064) === n;
    if (t.subtreeFlags & (l ? 10262 : 10256))
      for (t = t.child; t !== null; )
        Qh(
          e,
          t,
          n,
          a
        ), t = t.sibling;
    else l && Uh(t);
  }
  function Qh(e, t, n, a) {
    var l = (n & 335544064) === n;
    l && t.alternate === null && t.return !== null && t.return.alternate !== null && rr(t);
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
        ), i & 2048 && xi(9, t);
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
        ), l && _c && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), i & 2048 && (i = null, t.alternate !== null && (i = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== i && (t.refCount++, i != null && gi(i)));
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
            var c = t.memoizedProps, f = c.id, y = c.onPostCommit;
            typeof y == "function" && y(
              f,
              t.alternate === null ? "mount" : "update",
              i.passiveEffectDuration,
              -0
            );
          } catch (x) {
            Ke(t, t.return, x);
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
        c = t.stateNode, f = t.alternate, t.memoizedState !== null ? (l && f !== null && f.memoizedState === null && rr(f), c._visibility & 2 ? fn(
          e,
          t,
          n,
          a
        ) : Di(
          e,
          t
        )) : (l && f !== null && f.memoizedState !== null && rr(t), c._visibility & 2 ? fn(
          e,
          t,
          n,
          a
        ) : (c._visibility |= 2, Ol(
          e,
          t,
          n,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        ))), i & 2048 && Cc(f, t);
        break;
      case 24:
        fn(
          e,
          t,
          n,
          a
        ), i & 2048 && xc(t.alternate, t);
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
  function Ol(e, t, n, a, l) {
    for (l = l && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var i = e, c = t, f = n, y = a, x = c.flags;
      switch (c.tag) {
        case 0:
        case 11:
        case 15:
          Ol(
            i,
            c,
            f,
            y,
            l
          ), xi(8, c);
          break;
        case 23:
          break;
        case 22:
          var z = c.stateNode;
          c.memoizedState !== null ? z._visibility & 2 ? Ol(
            i,
            c,
            f,
            y,
            l
          ) : Di(
            i,
            c
          ) : (z._visibility |= 2, Ol(
            i,
            c,
            f,
            y,
            l
          )), l && x & 2048 && Cc(
            c.alternate,
            c
          );
          break;
        case 24:
          Ol(
            i,
            c,
            f,
            y,
            l
          ), l && x & 2048 && xc(c.alternate, c);
          break;
        default:
          Ol(
            i,
            c,
            f,
            y,
            l
          );
      }
      t = t.sibling;
    }
  }
  function Di(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, a = t, l = a.flags;
        switch (a.tag) {
          case 22:
            Di(n, a), l & 2048 && Cc(
              a.alternate,
              a
            );
            break;
          case 24:
            Di(n, a), l & 2048 && xc(a.alternate, a);
            break;
          default:
            Di(n, a);
        }
        t = t.sibling;
      }
  }
  var $a = 8192;
  function Fa(e, t, n) {
    if (e.subtreeFlags & $a)
      for (e = e.child; e !== null; )
        kh(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function kh(e, t, n) {
    switch (e.tag) {
      case 26:
        Fa(
          e,
          t,
          n
        ), e.flags & $a && (e.memoizedState !== null ? n0(
          n,
          bn,
          e.memoizedState,
          e.memoizedProps
        ) : (e = e.stateNode, (t & 335544128) === t && Wm(n, e)));
        break;
      case 5:
        Fa(
          e,
          t,
          n
        ), e.flags & $a && (e = e.stateNode, (t & 335544128) === t && Wm(n, e));
        break;
      case 3:
      case 4:
        var a = bn;
        bn = Bi(e.stateNode.containerInfo), Fa(
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
  function Kh(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Ui(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          bt = a, Jh(
            a,
            e
          );
        }
      Kh(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Zh(e), e = e.sibling;
  }
  function Zh(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ui(e), e.flags & 2048 && ha(9, e, e.return);
        break;
      case 3:
        Ui(e);
        break;
      case 12:
        Ui(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, fr(e)) : Ui(e);
        break;
      default:
        Ui(e);
    }
  }
  function fr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          bt = a, Jh(
            a,
            e
          );
        }
      Kh(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          ha(8, t, t.return), fr(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, fr(t));
          break;
        default:
          fr(t);
      }
      e = e.sibling;
    }
  }
  function Jh(e, t) {
    for (; bt !== null; ) {
      var n = bt;
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
      if (a = n.child, a !== null) a.return = n, bt = a;
      else
        e: for (n = e; bt !== null; ) {
          a = bt;
          var l = a.sibling, i = a.return;
          if (Lh(a), a === n) {
            bt = null;
            break e;
          }
          if (l !== null) {
            l.return = i, bt = l;
            break e;
          }
          bt = i;
        }
    }
  }
  var Fv = {
    getCacheForType: function(e) {
      var t = _t(st), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return _t(st).controller.signal;
    }
  }, Pv = typeof WeakMap == "function" ? WeakMap : Map, Ye = 0, Fe = null, ze = null, He = 0, ke = 0, Pt = null, pa = !1, Cl = !1, Rc = !1, $n = 0, it = 0, ga = 0, Pa = 0, dr = 0, Wt = 0, xl = 0, zi = null, Vt = null, jc = !1, hr = 0, $h = 0, mr = 1 / 0, pr = null, va = null, at = 0, Sn = null, Wa = null, Un = 0, Dc = 0, Uc = null, Fh = null, Rl = null, jl = null, Dl = null, Mi = 0, gr = null;
  function en() {
    return (Ye & 2) !== 0 && He !== 0 ? He & -He : W.T !== null ? Yc() : Wo();
  }
  function Ph() {
    if (Wt === 0)
      if ((He & 536870912) === 0 || Ue) {
        var e = ou;
        ou <<= 1, (ou & 3932160) === 0 && (ou = 262144), Wt = e;
      } else Wt = 536870912;
    return e = wt.current, e !== null && (e.flags |= 32), Wt;
  }
  function Ul(e, t) {
    if (t != null) {
      var n = e.stateNode, a = n.ref;
      a === null && (a = n.ref = Dm(
        Bn(e.memoizedProps, n)
      )), jl === null && (jl = []), jl.push(t.bind(null, a));
    }
  }
  function Gt(e, t, n) {
    (e === Fe && (ke === 2 || ke === 9) || e.cancelPendingCommit !== null) && (zl(e, 0), ya(
      e,
      He,
      Wt,
      !1
    )), ni(e, n), ((Ye & 2) === 0 || e !== Fe) && (e === Fe && ((Ye & 2) === 0 && (Pa |= n), it === 4 && ya(
      e,
      He,
      Wt,
      !1
    )), zn(e));
  }
  function Wh(e, t, n) {
    if ((Ye & 6) !== 0) throw Error(s(327));
    var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || ti(e, t), l = a ? ty(e, t) : Mc(e, t, !0), i = a;
    do {
      if (l === 0) {
        Cl && !a && ya(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, i && !Wv(n)) {
          l = Mc(e, t, !1), i = !1;
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
              l = zi;
              var y = f.current.memoizedState.isDehydrated;
              if (y && (zl(f, c).flags |= 256), c = Mc(
                f,
                c,
                !1
              ), c !== 2 && c !== 6) {
                if (Rc && !y) {
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
          zl(e, 0), ya(e, t, 0, !0);
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
                !pa
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
          if ((t & 62914560) === t && (l = hr + 300 - Qt(), 10 < l)) {
            if (ya(
              a,
              t,
              Wt,
              !pa
            ), du(a, 0, !0) !== 0) break e;
            Un = t, a.timeoutHandle = eo(
              em.bind(
                null,
                a,
                n,
                Vt,
                pr,
                jc,
                t,
                Wt,
                Pa,
                xl,
                pa,
                i,
                "Throttled",
                -0,
                0
              ),
              l
            );
            break e;
          }
          em(
            a,
            n,
            Vt,
            pr,
            jc,
            t,
            Wt,
            Pa,
            xl,
            pa,
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
  function em(e, t, n, a, l, i, c, f, y, x, z, Q, _, U) {
    e.timeoutHandle = -1;
    var oe = t.subtreeFlags, Ee = (i & 335544064) === i;
    if (Q = null, (Ee || oe & 8192 || (oe & 16785408) === 16785408) && (Q = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Nn
    }, Ft = null, kh(
      t,
      i,
      Q
    ), Ee && (oe = Q, Ee = e.containerInfo, Ee = (Ee.nodeType === 9 ? Ee : Ee.ownerDocument).__reactViewTransition, Ee != null && (oe.count++, oe.waitingForViewTransition = !0, oe = Yi.bind(oe), Ee.finished.then(oe, oe))), oe = (i & 62914560) === i ? hr - Qt() : (i & 4194048) === i ? $h - Qt() : 0, oe = a0(
      Q,
      oe
    ), oe !== null)) {
      Un = i, e.cancelPendingCommit = oe(
        sm.bind(
          null,
          e,
          t,
          i,
          n,
          a,
          l,
          c,
          f,
          y,
          x,
          z,
          Q,
          null,
          _,
          U
        )
      ), ya(e, i, c, !x);
      return;
    }
    sm(
      e,
      t,
      i,
      n,
      a,
      l,
      c,
      f,
      y,
      x,
      z,
      Q
    );
  }
  function Wv(e) {
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
    t = Zo(e, t), t &= ~dr, t &= ~Pa, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var l = t; 0 < l; ) {
      var i = 31 - Kt(l), c = 1 << i;
      a[i] = -1, l &= ~c;
    }
    n !== 0 && $o(e, n, t);
  }
  function vr() {
    return (Ye & 6) === 0 ? (Hi(0), !1) : !0;
  }
  function zc() {
    if (ze !== null) {
      if (ke === 0)
        var e = ze.return;
      else
        e = ze, Xn = Ba = null, Gs(e), El = null, bi = 0, e = ze;
      for (; e !== null; )
        Ah(e.alternate, e), e = e.return;
      ze = null;
    }
  }
  function zl(e, t) {
    var n = e.timeoutHandle;
    return n !== -1 && (e.timeoutHandle = -1, Ay(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Un = 0, zc(), Fe = e, ze = n = Gn(e.current, null), He = t, ke = 0, Pt = null, pa = !1, Cl = ti(e, t), Rc = !1, xl = Wt = dr = Pa = ga = it = 0, Vt = zi = null, jc = !1, $n = Zo(e, t), _u(), n;
  }
  function tm(e, t) {
    Re = null, W.H = $u, t === bl || t === Hu ? (t = sd(), ke = 3) : t === xs ? (t = sd(), ke = 4) : ke = t === ac ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Pt = t, ze === null && (it = 1, Fu(
      e,
      rn(t, e.current)
    ));
  }
  function nm() {
    var e = wt.current;
    return e === null ? !0 : (He & 4194048) === He ? jt === null : (He & 62914560) === He || (He & 536870912) !== 0 ? e === jt : !1;
  }
  function am() {
    var e = W.H;
    return W.H = $u, e === null ? $u : e;
  }
  function lm() {
    var e = W.A;
    return W.A = Fv, e;
  }
  function yr() {
    it = 4, pa || (He & 4194048) !== He && wt.current !== null || (Cl = !0), (ga & 134217727) === 0 && (Pa & 134217727) === 0 || Fe === null || ya(
      Fe,
      He,
      Wt,
      !1
    );
  }
  function Mc(e, t, n) {
    var a = Ye;
    Ye |= 2;
    var l = am(), i = lm();
    (Fe !== e || He !== t) && (pr = null, zl(e, t)), t = !1;
    var c = it;
    e: do
      try {
        if (ke !== 0 && ze !== null) {
          var f = ze, y = Pt;
          switch (ke) {
            case 8:
              zc(), c = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              wt.current === null && (t = !0);
              var x = ke;
              if (ke = 0, Pt = null, Ml(e, f, y, x), n && Cl) {
                c = 0;
                break e;
              }
              break;
            default:
              x = ke, ke = 0, Pt = null, Ml(e, f, y, x);
          }
        }
        ey(), c = it;
        break;
      } catch (z) {
        tm(e, z);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Xn = Ba = null, Ye = a, W.H = l, W.A = i, ze === null && (Fe = null, He = 0, _u()), c;
  }
  function ey() {
    for (; ze !== null; ) im(ze);
  }
  function ty(e, t) {
    var n = Ye;
    Ye |= 2;
    var a = am(), l = lm();
    Fe !== e || He !== t ? (pr = null, mr = Qt() + 500, zl(e, t)) : Cl = ti(
      e,
      t
    );
    e: do
      try {
        if (ke !== 0 && ze !== null) {
          t = ze;
          var i = Pt;
          t: switch (ke) {
            case 1:
              ke = 0, Pt = null, Ml(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (ud(i)) {
                ke = 0, Pt = null, um(t);
                break;
              }
              t = function() {
                ke !== 2 && ke !== 9 || Fe !== e || (ke = 7), zn(e);
              }, i.then(t, t);
              break e;
            case 3:
              ke = 7;
              break e;
            case 4:
              ke = 5;
              break e;
            case 7:
              ud(i) ? (ke = 0, Pt = null, um(t)) : (ke = 0, Pt = null, Ml(e, t, i, 7));
              break;
            case 5:
              var c = null;
              switch (ze.tag) {
                case 26:
                  c = ze.memoizedState;
                case 5:
                case 27:
                  var f = ze;
                  if (c ? Fm(c) : f.stateNode.complete) {
                    ke = 0, Pt = null;
                    var y = f.sibling;
                    if (y !== null) ze = y;
                    else {
                      var x = f.return;
                      x !== null ? (ze = x, br(x)) : ze = null;
                    }
                    break t;
                  }
              }
              ke = 0, Pt = null, Ml(e, t, i, 5);
              break;
            case 6:
              ke = 0, Pt = null, Ml(e, t, i, 6);
              break;
            case 8:
              zc(), it = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        ny();
        break;
      } catch (z) {
        tm(e, z);
      }
    while (!0);
    return Xn = Ba = null, W.H = a, W.A = l, Ye = n, ze !== null ? 0 : (Fe = null, He = 0, _u(), it);
  }
  function ny() {
    for (; ze !== null && !bg(); )
      im(ze);
  }
  function im(e) {
    var t = Sh(e.alternate, e, $n);
    e.memoizedProps = e.pendingProps, t === null ? br(e) : ze = t;
  }
  function um(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = mh(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          He
        );
        break;
      case 11:
        t = mh(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          He
        );
        break;
      case 5:
        Gs(t);
        var a = t;
        a === vt && (Ue ? (ju(a), a.tag === 5 && a.stateNode != null && (et = a.stateNode)) : (ju(a), Ue = !0));
      default:
        Ah(n, t), t = ze = Jf(t, $n), t = Sh(n, t, $n);
    }
    e.memoizedProps = e.pendingProps, t === null ? br(e) : ze = t;
  }
  function Ml(e, t, n, a) {
    Xn = Ba = null, Gs(t), El = null, bi = 0;
    var l = t.return;
    try {
      if (Yv(
        e,
        l,
        t,
        n,
        He
      )) {
        it = 1, Fu(
          e,
          rn(n, e.current)
        ), ze = null;
        return;
      }
    } catch (i) {
      if (l !== null) throw ze = l, i;
      it = 1, Fu(
        e,
        rn(n, e.current)
      ), ze = null;
      return;
    }
    t.flags & 32768 ? (Ue || a === 1 ? e = !0 : Cl || (He & 536870912) !== 0 ? e = !1 : (pa = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = wt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), rm(t, e)) : br(t);
  }
  function br(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        rm(
          t,
          pa
        );
        return;
      }
      e = t.return;
      var n = Kv(
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
  function rm(e, t) {
    do {
      var n = Zv(e.alternate, e);
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
  function sm(e, t, n, a, l, i, c, f, y, x, z, Q) {
    e.cancelPendingCommit = null;
    do
      Er();
    while (at !== 0);
    if ((Ye & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === e.current) throw Error(s(177));
      e === Fe && (ze = Fe = null, He = 0), Wa = t, Sn = e, Un = n, Uc = l, Fh = a, ay(
        e,
        t,
        n,
        c,
        f,
        y,
        Q
      );
    }
  }
  function ay(e, t, n, a, l, i, c) {
    var f = t.lanes | t.childLanes;
    if (Dc = f, f |= gs, xg(
      e,
      n,
      f,
      a,
      l,
      i
    ), jl = null, (n & 335544064) === n ? (Dl = jv(e), a = 10262) : (Dl = null, a = 10256), (t.subtreeFlags & a) !== 0 || (t.flags & a) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, cy(su, function() {
      return Ic(), null;
    })) : (e.callbackNode = null, e.callbackPriority = 0), ir = !1, a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
      a = W.T, W.T = null, l = he.p, he.p = 2, i = Ye, Ye |= 4;
      try {
        Jv(e, t, n);
      } finally {
        Ye = i, he.p = l, W.T = a;
      }
    }
    at = 1, ir ? Rl = xy(
      c,
      e.containerInfo,
      Dl,
      Hc,
      qc,
      iy,
      Lc,
      Ic,
      ly
    ) : (Hc(), qc(), Lc());
  }
  function ly(e) {
    if (at !== 0) {
      var t = Sn.onRecoverableError;
      t(e, { componentStack: null });
    }
  }
  function iy() {
    at === 3 && (at = 0, Xh(Wa, Sn), at = 4);
  }
  function Hc() {
    if (at === 1) {
      at = 0;
      var e = Sn, t = Wa, n = Un, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = W.T, W.T = null;
        var l = he.p;
        he.p = 2;
        var i = Ye;
        Ye |= 4;
        try {
          ji = sr = !1, Gh(t, e, n), n = Fc;
          var c = If(e.containerInfo), f = n.focusedElem, y = n.selectionRange;
          if (c !== f && f && f.ownerDocument && Lf(
            f.ownerDocument.documentElement,
            f
          )) {
            if (y !== null && fs(f)) {
              var x = y.start, z = y.end;
              if (z === void 0 && (z = x), "selectionStart" in f)
                f.selectionStart = x, f.selectionEnd = Math.min(
                  z,
                  f.value.length
                );
              else {
                var Q = f.ownerDocument || document, _ = Q && Q.defaultView || window;
                if (_.getSelection) {
                  var U = _.getSelection(), oe = f.textContent.length, Ee = Math.min(y.start, oe), je = y.end === void 0 ? Ee : Math.min(y.end, oe);
                  !U.extend && Ee > je && (c = je, je = Ee, Ee = c);
                  var w = qf(
                    f,
                    Ee
                  ), A = qf(
                    f,
                    je
                  );
                  if (w && A && (U.rangeCount !== 1 || U.anchorNode !== w.node || U.anchorOffset !== w.offset || U.focusNode !== A.node || U.focusOffset !== A.offset)) {
                    var R = Q.createRange();
                    R.setStart(w.node, w.offset), U.removeAllRanges(), Ee > je ? (U.addRange(R), U.extend(A.node, A.offset)) : (R.setEnd(A.node, A.offset), U.addRange(R));
                  }
                }
              }
            }
            for (Q = [], U = f; U = U.parentNode; )
              U.nodeType === 1 && Q.push({
                element: U,
                left: U.scrollLeft,
                top: U.scrollTop
              });
            for (typeof f.focus == "function" && f.focus(), f = 0; f < Q.length; f++) {
              var X = Q[f];
              X.element.scrollLeft = X.left, X.element.scrollTop = X.top;
            }
          }
          Yl = !!$c, Fc = $c = null;
        } finally {
          Ye = i, he.p = l, W.T = a;
        }
      }
      e.current = t, at = 2;
    }
  }
  function qc() {
    if (at === 2) {
      at = 0;
      var e = Sn, t = Wa, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = W.T, W.T = null;
        var a = he.p;
        he.p = 2;
        var l = Ye;
        Ye |= 4;
        try {
          Hh(e, t.alternate, t);
        } finally {
          Ye = l, he.p = a, W.T = n;
        }
      }
      at = 3;
    }
  }
  function Lc() {
    if (at === 4 || at === 3) {
      at = 0;
      var e = Rl;
      Rl = null, Eg();
      var t = Sn, n = Wa, a = Un, l = Fh, i = (a & 335544064) === a ? 10262 : 10256;
      if ((n.subtreeFlags & i) !== 0 || (n.flags & i) !== 0 ? at = 5 : (at = 0, Wa = Sn = null, cm(t, t.pendingLanes)), i = t.pendingLanes, i === 0 && (va = null), Kr(a), n = n.stateNode, kt && typeof kt.onCommitFiberRoot == "function")
        try {
          kt.onCommitFiberRoot(
            ei,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        n = W.T, i = he.p, he.p = 2, W.T = null;
        try {
          for (var c = t.onRecoverableError, f = 0; f < l.length; f++) {
            var y = l[f];
            c(y.value, {
              componentStack: y.stack
            });
          }
        } finally {
          W.T = n, he.p = i;
        }
      }
      if (l = jl, c = Dl, Dl = null, l !== null && (jl = null, c === null && (c = []), e !== null))
        for (y = 0; y < l.length; y++)
          n = (0, l[y])(
            c
          ), n !== void 0 && e.finished.finally(n);
      (Un & 3) !== 0 && Er(), zn(t), i = t.pendingLanes, (a & 261930) !== 0 && (i & 42) !== 0 ? t === gr ? Mi++ : (Mi = 0, gr = t) : (Mi = 0, gr = null), Hi(0);
    }
  }
  function cm(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, gi(t)));
  }
  function Er() {
    return Rl !== null && (Rl.skipTransition(), Rl = null), Hc(), qc(), Lc(), Ic();
  }
  function Ic() {
    if (at !== 5) return !1;
    var e = Sn, t = Dc;
    Dc = 0;
    var n = Kr(Un), a = W.T, l = he.p;
    try {
      he.p = 32 > n ? 32 : n, W.T = null, n = Uc, Uc = null;
      var i = Sn, c = Un;
      if (at = 0, Wa = Sn = null, Un = 0, (Ye & 6) !== 0) throw Error(s(331));
      var f = Ye;
      if (Ye |= 4, Zh(i.current), Qh(
        i,
        i.current,
        c,
        n
      ), Ye = f, Hi(0, !1), kt && typeof kt.onPostCommitFiberRoot == "function")
        try {
          kt.onPostCommitFiberRoot(ei, i);
        } catch {
        }
      return !0;
    } finally {
      he.p = l, W.T = a, cm(e, t);
    }
  }
  function om(e, t, n) {
    t = rn(n, t), t = nc(e.stateNode, t, 2), e = ca(e, t, 2), e !== null && (ni(e, 2), zn(e));
  }
  function Ke(e, t, n) {
    if (e.tag === 3)
      om(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          om(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (va === null || !va.has(a))) {
            e = rn(n, e), n = uh(2), a = ca(t, n, 2), a !== null && (rh(
              n,
              a,
              t,
              e
            ), ni(a, 2), zn(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Bc(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Pv();
      var l = /* @__PURE__ */ new Set();
      a.set(t, l);
    } else
      l = a.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), a.set(t, l));
    l.has(n) || (Rc = !0, l.add(n), e = uy.bind(null, e, t, n), t.then(e, e));
  }
  function uy(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Fe === e && (He & n) === n && ((it === 4 || it === 3 && (He & 62914560) === He && 300 > Qt() - hr) && (Ye & 2) === 0 ? zl(e, 0) : dr |= n, xl === He && (xl = 0)), zn(e);
  }
  function fm(e, t) {
    t === 0 && (t = Jo()), e = qa(e, t), e !== null && (ni(e, t), zn(e));
  }
  function ry(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), fm(e, n);
  }
  function sy(e, t) {
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
    a !== null && a.delete(t), fm(e, n);
  }
  function cy(e, t) {
    return Yr(e, t);
  }
  var Hl = null, ql = null, Vc = !1, Sr = !1, Gc = !1, ba = 0;
  function zn(e) {
    e !== ql && e.next === null && (ql === null ? Hl = ql = e : ql = ql.next = e), Sr = !0, Vc || (Vc = !0, fy());
  }
  function Hi(e, t) {
    if (!Gc && Sr) {
      Gc = !0;
      do
        for (var n = !1, a = Hl; a !== null; ) {
          if (e !== 0) {
            var l = a.pendingLanes;
            if (l === 0) var i = 0;
            else {
              var c = a.suspendedLanes, f = a.pingedLanes;
              i = (1 << 31 - Kt(42 | e) + 1) - 1, i &= l & ~(c & ~f), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (n = !0, pm(a, i));
          } else
            i = He, i = du(
              a,
              a === Fe ? i : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (i & 3) === 0 || ti(a, i) || (n = !0, pm(a, i));
          a = a.next;
        }
      while (n);
      Gc = !1;
    }
  }
  function oy() {
    dm();
  }
  function dm() {
    Sr = Vc = !1;
    var e = 0;
    ba !== 0 && Ty() && (e = ba);
    for (var t = Qt(), n = null, a = Hl; a !== null; ) {
      var l = a.next, i = hm(a, t);
      i === 0 ? (a.next = null, n === null ? Hl = l : n.next = l, l === null && (ql = n)) : (n = a, (e !== 0 || (i & 3) !== 0) && (Sr = !0)), a = l;
    }
    at !== 0 && at !== 5 || Hi(e), ba !== 0 && (ba = 0);
  }
  function hm(e, t) {
    for (var n = e.suspendedLanes, a = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var c = 31 - Kt(i), f = 1 << c, y = l[c];
      y === -1 ? ((f & n) === 0 || (f & a) !== 0) && (l[c] = Cg(f, t)) : y <= t && (e.expiredLanes |= f), i &= ~f;
    }
    if (t = Fe, n = He, n = du(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, n === 0 || e === t && (ke === 2 || ke === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && Xr(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || ti(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (a !== null && Xr(a), Kr(n)) {
        case 2:
        case 8:
          n = ko;
          break;
        case 32:
          n = su;
          break;
        case 268435456:
          n = Ko;
          break;
        default:
          n = su;
      }
      return a = mm.bind(null, e), n = Yr(n, a), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return a !== null && a !== null && Xr(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function mm(e, t) {
    if (at !== 0 && at !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (Er() && e.callbackNode !== n)
      return null;
    var a = He;
    return a = du(
      e,
      e === Fe ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (Wh(e, a, t), hm(e, Qt()), e.callbackNode != null && e.callbackNode === n ? mm.bind(null, e) : null);
  }
  function pm(e, t) {
    if (Er()) return null;
    Wh(e, t, !0);
  }
  function fy() {
    Ny(function() {
      (Ye & 6) !== 0 ? Yr(
        Qo,
        oy
      ) : dm();
    });
  }
  function Yc() {
    if (ba === 0) {
      var e = Ya;
      e === 0 && (e = cu, cu <<= 1, (cu & 261888) === 0 && (cu = 256)), ba = e;
    }
    return ba;
  }
  function gm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : vu(e);
  }
  function dy(e, t, n, a, l) {
    if (t === "submit" && n && n.stateNode === l) {
      var i = gm(
        (l[qt] || null).action
      ), c = a.submitter;
      c && (t = (t = c[qt] || null) ? gm(t.formAction) : c.getAttribute("formAction"), t !== null && (i = t, c = null));
      var f = new Su(
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
                  var y = new FormData(l, c);
                  Fs(
                    n,
                    {
                      pending: !0,
                      data: y,
                      method: l.method,
                      action: i
                    },
                    null,
                    y
                  );
                }
              } else
                typeof i == "function" && (f.preventDefault(), y = new FormData(l, c), Fs(
                  n,
                  {
                    pending: !0,
                    data: y,
                    method: l.method,
                    action: i
                  },
                  i,
                  y
                ));
            },
            currentTarget: l
          }
        ]
      });
    }
  }
  for (var Xc = 0; Xc < ps.length; Xc++) {
    var Qc = ps[Xc], hy = Qc.toLowerCase(), my = Qc[0].toUpperCase() + Qc.slice(1);
    vn(
      hy,
      "on" + my
    );
  }
  vn(Gf, "onAnimationEnd"), vn(Yf, "onAnimationIteration"), vn(Xf, "onAnimationStart"), vn("dblclick", "onDoubleClick"), vn("focusin", "onFocus"), vn("focusout", "onBlur"), vn(Av, "onTransitionRun"), vn(Nv, "onTransitionStart"), vn(_v, "onTransitionCancel"), vn(Qf, "onTransitionEnd"), il("onMouseEnter", ["mouseout", "mouseover"]), il("onMouseLeave", ["mouseout", "mouseover"]), il("onPointerEnter", ["pointerout", "pointerover"]), il("onPointerLeave", ["pointerout", "pointerover"]), za(
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
  ), py = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(qi)
  );
  function vm(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var a = e[n], l = a.event;
      a = a.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var c = a.length - 1; 0 <= c; c--) {
            var f = a[c], y = f.instance, x = f.currentTarget;
            if (f = f.listener, y !== i && l.isPropagationStopped())
              break e;
            i = f, l.currentTarget = x;
            try {
              i(l);
            } catch (z) {
              Nu(z);
            }
            l.currentTarget = null, i = y;
          }
        else
          for (c = 0; c < a.length; c++) {
            if (f = a[c], y = f.instance, x = f.currentTarget, f = f.listener, y !== i && l.isPropagationStopped())
              break e;
            i = f, l.currentTarget = x;
            try {
              i(l);
            } catch (z) {
              Nu(z);
            }
            l.currentTarget = null, i = y;
          }
      }
    }
  }
  function Me(e, t) {
    var n = t[tf];
    n === void 0 && (n = t[tf] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    n.has(a) || (ym(t, e, 2, !1), n.add(a));
  }
  function kc(e, t, n) {
    var a = 0;
    t && (a |= 4), ym(
      n,
      e,
      a,
      t
    );
  }
  var Tr = "_reactListening" + Math.random().toString(36).slice(2);
  function Kc(e) {
    if (!e[Tr]) {
      e[Tr] = !0, lf.forEach(function(n) {
        n !== "selectionchange" && (py.has(n) || kc(n, !1, e), kc(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Tr] || (t[Tr] = !0, kc("selectionchange", !1, t));
    }
  }
  function ym(e, t, n, a) {
    switch (rp(t)) {
      case 2:
        var l = r0;
        break;
      case 8:
        l = s0;
        break;
      default:
        l = mo;
    }
    n = l.bind(
      null,
      t,
      n,
      e
    ), l = void 0, !ts || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), a ? l !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
      passive: l
    }) : e.addEventListener(t, n, !1);
  }
  function Zc(e, t, n, a, l) {
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
              var y = c.tag;
              if ((y === 3 || y === 4) && c.stateNode.containerInfo === l)
                return;
              c = c.return;
            }
          for (; f !== null; ) {
            if (c = Ua(f), c === null) return;
            if (y = c.tag, y === 5 || y === 6 || y === 26 || y === 27) {
              a = i = c;
              continue e;
            }
            f = f.parentNode;
          }
        }
        a = a.return;
      }
    yf(function() {
      var x = i, z = Wr(n), Q = [];
      e: {
        var _ = kf.get(e);
        if (_ !== void 0) {
          var U = Su, oe = e;
          switch (e) {
            case "keypress":
              if (bu(n) === 0) break e;
            case "keydown":
            case "keyup":
              U = Wg;
              break;
            case "focusin":
              oe = "focus", U = is;
              break;
            case "focusout":
              oe = "blur", U = is;
              break;
            case "beforeblur":
            case "afterblur":
              U = is;
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
              U = Sf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              U = Vg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              U = lv;
              break;
            case Gf:
            case Yf:
            case Xf:
              U = Xg;
              break;
            case Qf:
              U = uv;
              break;
            case "scroll":
            case "scrollend":
              U = Ig;
              break;
            case "wheel":
              U = sv;
              break;
            case "copy":
            case "cut":
            case "paste":
              U = kg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              U = Af;
              break;
            case "submit":
              U = nv;
              break;
            case "toggle":
            case "beforetoggle":
              U = ov;
          }
          var Ee = (t & 4) !== 0, je = !Ee && (e === "scroll" || e === "scrollend"), w = Ee ? _ !== null ? _ + "Capture" : null : _;
          Ee = [];
          for (var A = x, R; A !== null; ) {
            var X = A;
            if (R = X.stateNode, X = X.tag, X !== 5 && X !== 26 && X !== 27 || R === null || w === null || (X = ii(A, w), X != null && Ee.push(
              Li(A, X, R)
            )), je) break;
            A = A.return;
          }
          0 < Ee.length && (_ = new U(
            _,
            oe,
            null,
            n,
            z
          ), Q.push({ event: _, listeners: Ee }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (U = e === "mouseover" || e === "pointerover", _ = e === "mouseout" || e === "pointerout", U && n !== Pr && (oe = n.relatedTarget || n.fromElement) && (Ua(oe) || oe[nl]))
            break e;
          (_ || U) && (oe = z.window === z ? z : (U = z.ownerDocument) ? U.defaultView || U.parentWindow : window, _ ? (U = n.relatedTarget || n.toElement, _ = x, U = U ? Ua(U) : null, U !== null && (je = m(U), Ee = U.tag, U !== je || Ee !== 5 && Ee !== 27 && Ee !== 6) && (U = null)) : (_ = null, U = x), _ !== U && (Ee = Sf, X = "onMouseLeave", w = "onMouseEnter", A = "mouse", (e === "pointerout" || e === "pointerover") && (Ee = Af, X = "onPointerLeave", w = "onPointerEnter", A = "pointer"), je = _ == null ? oe : li(_), R = U == null ? oe : li(U), oe = new Ee(
            X,
            A + "leave",
            _,
            n,
            z
          ), oe.target = je, oe.relatedTarget = R, X = null, Ua(z) === x && (Ee = new Ee(
            w,
            A + "enter",
            U,
            n,
            z
          ), Ee.target = R, Ee.relatedTarget = je, X = Ee), je = X, Ee = _ && U ? ne(
            _,
            U,
            gy
          ) : null, _ !== null && bm(
            Q,
            oe,
            _,
            Ee,
            !1
          ), U !== null && je !== null && bm(
            Q,
            je,
            U,
            Ee,
            !0
          )));
        }
        e: {
          if (_ = x ? li(x) : window, U = _.nodeName && _.nodeName.toLowerCase(), U === "select" || U === "input" && _.type === "file")
            var ye = jf;
          else if (xf(_))
            if (Df)
              ye = Ev;
            else {
              ye = yv;
              var qe = vv;
            }
          else
            U = _.nodeName, !U || U.toLowerCase() !== "input" || _.type !== "checkbox" && _.type !== "radio" ? x && Fr(x.elementType) && (ye = jf) : ye = bv;
          if (ye && (ye = ye(e, x))) {
            Rf(
              Q,
              ye,
              n,
              z
            );
            break e;
          }
          qe && qe(e, _, x);
        }
        switch (qe = x ? li(x) : window, e) {
          case "focusin":
            (xf(qe) || qe.contentEditable === "true") && (fl = qe, ds = x, hi = null);
            break;
          case "focusout":
            hi = ds = fl = null;
            break;
          case "mousedown":
            hs = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            hs = !1, Bf(Q, n, z);
            break;
          case "selectionchange":
            if (Tv) break;
          case "keydown":
          case "keyup":
            Bf(Q, n, z);
        }
        var Ae;
        if (rs)
          e: {
            switch (e) {
              case "compositionstart":
                var we = "onCompositionStart";
                break e;
              case "compositionend":
                we = "onCompositionEnd";
                break e;
              case "compositionupdate":
                we = "onCompositionUpdate";
                break e;
            }
            we = void 0;
          }
        else
          ol ? Of(e, n) && (we = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (we = "onCompositionStart");
        we && (Nf && n.locale !== "ko" && (ol || we !== "onCompositionStart" ? we === "onCompositionEnd" && ol && (Ae = bf()) : (ea = z, ns = "value" in ea ? ea.value : ea.textContent, ol = !0)), qe = Ar(x, we), 0 < qe.length && (we = new Tf(
          we,
          e,
          null,
          n,
          z
        ), Q.push({ event: we, listeners: qe }), Ae ? we.data = Ae : (Ae = Cf(n), Ae !== null && (we.data = Ae)))), (Ae = dv ? hv(e, n) : mv(e, n)) && (we = Ar(x, "onBeforeInput"), 0 < we.length && (qe = new Tf(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          z
        ), Q.push({
          event: qe,
          listeners: we
        }), qe.data = Ae)), dy(
          Q,
          e,
          x,
          n,
          z
        );
      }
      vm(Q, t);
    });
  }
  function Li(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Ar(e, t) {
    for (var n = t + "Capture", a = []; e !== null; ) {
      var l = e, i = l.stateNode;
      if (l = l.tag, l !== 5 && l !== 26 && l !== 27 || i === null || (l = ii(e, n), l != null && a.unshift(
        Li(e, l, i)
      ), l = ii(e, t), l != null && a.push(
        Li(e, l, i)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function gy(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function bm(e, t, n, a, l) {
    for (var i = t._reactName, c = []; n !== null && n !== a; ) {
      var f = n, y = f.alternate, x = f.stateNode;
      if (f = f.tag, y !== null && y === a) break;
      f !== 5 && f !== 26 && f !== 27 || x === null || (y = x, l ? (x = ii(n, i), x != null && c.unshift(
        Li(n, x, y)
      )) : l || (x = ii(n, i), x != null && c.push(
        Li(n, x, y)
      ))), n = n.return;
    }
    c.length !== 0 && e.push({ event: t, listeners: c });
  }
  var vy = /\r\n?/g, yy = /\u0000|\uFFFD/g;
  function Em(e) {
    return (typeof e == "string" ? e : "" + e).replace(vy, `
`).replace(yy, "");
  }
  function Sm(e, t) {
    return t = Em(t), Em(e) === t;
  }
  function Ze(e, t, n, a, l, i) {
    switch (n) {
      case "children":
        if (typeof a == "string")
          t === "body" || t === "textarea" && a === "" || rl(e, a);
        else if (typeof a == "number" || typeof a == "bigint")
          t !== "body" && rl(e, "" + a);
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
        gf(e, a, i);
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
        a = vu(a), e.setAttribute(n, a);
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
          typeof i == "function" && (n === "formAction" ? (t !== "input" && Ze(e, t, "name", l.name, l, null), Ze(
            e,
            t,
            "formEncType",
            l.formEncType,
            l,
            null
          ), Ze(
            e,
            t,
            "formMethod",
            l.formMethod,
            l,
            null
          ), Ze(
            e,
            t,
            "formTarget",
            l.formTarget,
            l,
            null
          )) : (Ze(e, t, "encType", l.encType, l, null), Ze(e, t, "method", l.method, l, null), Ze(e, t, "target", l.target, l, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(n);
          break;
        }
        a = vu(a), e.setAttribute(n, a);
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
        n = vu(a), e.setAttributeNS(
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
        Me("beforetoggle", e), Me("toggle", e), pu(e, "popover", a);
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
        pu(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N")
          n = qg.get(n) || n, pu(e, n, a);
        else return;
    }
    Ge = !0;
  }
  function Jc(e, t, n, a, l, i) {
    switch (n) {
      case "style":
        gf(e, a, i);
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
        if (typeof a == "string") rl(e, a);
        else if (typeof a == "number" || typeof a == "bigint")
          rl(e, "" + a);
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
        if (!uf.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (l = n.endsWith("Capture"), i = n.slice(2, l ? n.length - 7 : void 0), t = e[qt] || null, t = t != null ? t[n] : null, typeof t == "function" && e.removeEventListener(i, t, l), typeof a == "function")) {
              typeof t != "function" && t !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(i, a, l);
              break e;
            }
            Ge = !0, n in e ? e[n] = a : a === !0 ? e.setAttribute(n, "") : pu(e, n, a);
          }
        return;
    }
    Ge = !0;
  }
  function xt(e, t, n) {
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
                  Ze(e, t, i, c, n, null);
              }
          }
        l && Ze(e, t, "srcSet", n.srcSet, n, null), a && Ze(e, t, "src", n.src, n, null);
        return;
      case "input":
        Me("invalid", e);
        var f = i = c = l = null, y = null, x = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var z = n[a];
            if (z != null)
              switch (a) {
                case "name":
                  l = z;
                  break;
                case "type":
                  c = z;
                  break;
                case "checked":
                  y = z;
                  break;
                case "defaultChecked":
                  x = z;
                  break;
                case "value":
                  i = z;
                  break;
                case "defaultValue":
                  f = z;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (z != null)
                    throw Error(s(137, t));
                  break;
                default:
                  Ze(e, t, a, z, n, null);
              }
          }
        df(
          e,
          i,
          f,
          y,
          x,
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
                Ze(e, t, l, f, n, null);
            }
        t = i, n = c, e.multiple = !!a, t != null ? ul(e, !!a, t, !1) : n != null && ul(e, !!a, n, !0);
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
                Ze(e, t, c, f, n, null);
            }
        mf(e, a, l, i);
        return;
      case "option":
        for (y in n)
          n.hasOwnProperty(y) && (a = n[y], a != null) && (y === "selected" ? e.selected = a && typeof a != "function" && typeof a != "symbol" : Ze(e, t, y, a, n, null));
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
        for (x in n)
          if (n.hasOwnProperty(x) && (a = n[x], a != null))
            switch (x) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, t));
              default:
                Ze(e, t, x, a, n, null);
            }
        return;
      default:
        if (Fr(t)) {
          for (z in n)
            n.hasOwnProperty(z) && (a = n[z], a !== void 0 && Jc(
              e,
              t,
              z,
              a,
              n,
              void 0
            ));
          return;
        }
    }
    for (f in n)
      n.hasOwnProperty(f) && (a = n[f], a != null && Ze(e, t, f, a, n, null));
  }
  var by = {};
  function Ey(e, t, n, a) {
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
        var l = null, i = null, c = null, f = null, y = null, x = null, z = null;
        for (U in n) {
          var Q = n[U];
          if (n.hasOwnProperty(U) && Q != null)
            switch (U) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                y = Q;
              default:
                a.hasOwnProperty(U) || Ze(e, t, U, null, a, Q);
            }
        }
        for (var _ in a) {
          var U = a[_];
          if (Q = n[_], a.hasOwnProperty(_) && (U != null || Q != null))
            switch (_) {
              case "type":
                U !== Q && (Ge = !0), i = U;
                break;
              case "name":
                U !== Q && (Ge = !0), l = U;
                break;
              case "checked":
                U !== Q && (Ge = !0), x = U;
                break;
              case "defaultChecked":
                U !== Q && (Ge = !0), z = U;
                break;
              case "value":
                U !== Q && (Ge = !0), c = U;
                break;
              case "defaultValue":
                U !== Q && (Ge = !0), f = U;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null)
                  throw Error(s(137, t));
                break;
              default:
                U !== Q && Ze(
                  e,
                  t,
                  _,
                  U,
                  a,
                  Q
                );
            }
        }
        Jr(
          e,
          c,
          f,
          y,
          x,
          z,
          i,
          l
        );
        return;
      case "select":
        U = c = f = _ = null;
        for (i in n)
          if (y = n[i], n.hasOwnProperty(i) && y != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                U = y;
              default:
                a.hasOwnProperty(i) || Ze(
                  e,
                  t,
                  i,
                  null,
                  a,
                  y
                );
            }
        for (l in a)
          if (i = a[l], y = n[l], a.hasOwnProperty(l) && (i != null || y != null))
            switch (l) {
              case "value":
                i !== y && (Ge = !0), _ = i;
                break;
              case "defaultValue":
                i !== y && (Ge = !0), f = i;
                break;
              case "multiple":
                i !== y && (Ge = !0), c = i;
              default:
                i !== y && Ze(
                  e,
                  t,
                  l,
                  i,
                  a,
                  y
                );
            }
        t = f, n = c, a = U, _ != null ? ul(e, !!n, _, !1) : !!a != !!n && (t != null ? ul(e, !!n, t, !0) : ul(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        U = _ = null;
        for (f in n)
          if (l = n[f], n.hasOwnProperty(f) && l != null && !a.hasOwnProperty(f))
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ze(e, t, f, null, a, l);
            }
        for (c in a)
          if (l = a[c], i = n[c], a.hasOwnProperty(c) && (l != null || i != null))
            switch (c) {
              case "value":
                l !== i && (Ge = !0), _ = l;
                break;
              case "defaultValue":
                l !== i && (Ge = !0), U = l;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (l != null) throw Error(s(91));
                break;
              default:
                l !== i && Ze(e, t, c, l, a, i);
            }
        hf(e, _, U);
        return;
      case "option":
        for (var oe in n)
          _ = n[oe], n.hasOwnProperty(oe) && _ != null && !a.hasOwnProperty(oe) && (oe === "selected" ? e.selected = !1 : Ze(
            e,
            t,
            oe,
            null,
            a,
            _
          ));
        for (y in a)
          _ = a[y], U = n[y], a.hasOwnProperty(y) && _ !== U && (_ != null || U != null) && (y === "selected" ? (_ !== U && (Ge = !0), e.selected = _ && typeof _ != "function" && typeof _ != "symbol") : Ze(
            e,
            t,
            y,
            _,
            a,
            U
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
        for (var Ee in n)
          _ = n[Ee], n.hasOwnProperty(Ee) && _ != null && !a.hasOwnProperty(Ee) && Ze(e, t, Ee, null, a, _);
        for (x in a)
          if (_ = a[x], U = n[x], a.hasOwnProperty(x) && _ !== U && (_ != null || U != null))
            switch (x) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null)
                  throw Error(s(137, t));
                break;
              default:
                Ze(
                  e,
                  t,
                  x,
                  _,
                  a,
                  U
                );
            }
        return;
      default:
        if (Fr(t)) {
          for (var je in n)
            _ = n[je], n.hasOwnProperty(je) && _ !== void 0 && !a.hasOwnProperty(je) && Jc(
              e,
              t,
              je,
              void 0,
              a,
              _
            );
          for (z in a)
            _ = a[z], U = n[z], !a.hasOwnProperty(z) || _ === U || _ === void 0 && U === void 0 || Jc(
              e,
              t,
              z,
              _,
              a,
              U
            );
          return;
        }
    }
    for (var w in n)
      _ = n[w], n.hasOwnProperty(w) && _ != null && !a.hasOwnProperty(w) && Ze(e, t, w, null, a, _);
    for (Q in a)
      _ = a[Q], U = n[Q], !a.hasOwnProperty(Q) || _ === U || _ == null && U == null || Ze(e, t, Q, _, a, U);
  }
  function Tm(e) {
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
  function Sy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var l = n[a], i = l.transferSize, c = l.initiatorType, f = l.duration;
        if (i && f && Tm(c)) {
          for (c = 0, f = l.responseEnd, a += 1; a < n.length; a++) {
            var y = n[a], x = y.startTime;
            if (x > f) break;
            var z = y.transferSize, Q = y.initiatorType;
            z && Tm(Q) && (y = y.responseEnd, c += z * (y < f ? 1 : (f - x) / (y - x)));
          }
          if (--a, t += 8 * (i + c) / (l.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var $c = null, Fc = null;
  function Ii(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Am(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Nm(e, t) {
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
  function _m(e, t, n, a) {
    return n = Ii(
      n
    ).createElement(e), n[Nt] = a, n[qt] = t, xt(n, e, t), gt(n), n;
  }
  function Pc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Wc = null;
  function Ty() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Wc ? !1 : (Wc = e, !0) : (Wc = null, !1);
  }
  var eo = typeof setTimeout == "function" ? setTimeout : void 0, Ay = typeof clearTimeout == "function" ? clearTimeout : void 0, wm = typeof Promise == "function" ? Promise : void 0, Om = typeof requestAnimationFrame == "function" ? requestAnimationFrame : eo, Ny = typeof queueMicrotask == "function" ? queueMicrotask : typeof wm < "u" ? function(e) {
    return wm.resolve(null).then(e).catch(_y);
  } : eo;
  function _y(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ea(e) {
    return e === "head";
  }
  function Cm(e, t) {
    var n = t, a = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8)
        if (n = l.data, n === "/$" || n === "/&") {
          if (a === 0) {
            e.removeChild(l), Xl(t);
            return;
          }
          a--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          a++;
        else if (n === "html")
          so(
            e.ownerDocument.documentElement
          );
        else if (n === "head") {
          n = e.ownerDocument.head, so(n);
          for (var i = n.firstChild; i; ) {
            var c = i.nextSibling, f = i.nodeName;
            i[ai] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && i.rel.toLowerCase() === "stylesheet" || n.removeChild(i), i = c;
          }
        } else
          n === "body" && so(e.ownerDocument.body);
      n = l;
    } while (n);
    Xl(t);
  }
  function xm(e, t) {
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
  function Rm(e, t, n) {
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
  function jm(e, t) {
    e = e.style, t = t.style;
    var n = t != null ? t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null : null;
    e.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = t != null ? t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null : null, e.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), e.display === "inline-block" && (t == null ? e.display = e.margin = "" : (n = t.display, e.display = n == null || typeof n == "boolean" ? "" : n, n = t.margin, n != null ? e.margin = n : (n = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], e.marginTop = n == null || typeof n == "boolean" ? "" : n, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], e.marginBottom = t == null || typeof t == "boolean" ? "" : t)));
  }
  function wy(e, t, n) {
    return n = n.ownerDocument.defaultView, {
      rect: e,
      abs: t.position === "absolute" || t.position === "fixed",
      clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
      view: 0 <= e.bottom && 0 <= e.right && e.top <= n.innerHeight && e.left <= n.innerWidth
    };
  }
  function to(e) {
    var t = e.getBoundingClientRect(), n = getComputedStyle(e);
    return wy(t, n, e);
  }
  function Oy(e) {
    return e.documentElement.clientHeight;
  }
  function Cy(e) {
    this.addEventListener("load", e), this.addEventListener("error", e);
  }
  function xy(e, t, n, a, l, i, c, f, y) {
    var x = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var z = x.startViewTransition({
        update: function() {
          var _ = x.defaultView, U = _.navigation && _.navigation.transition, oe = x.fonts.status;
          a();
          var Ee = [];
          if (oe === "loaded" && (Oy(x), x.fonts.status === "loading" && Ee.push(x.fonts.ready)), oe = Ee.length, e !== null)
            for (var je = e.suspenseyImages, w = 0, A = 0; A < je.length; A++) {
              var R = je[A];
              if (!R.complete) {
                var X = R.getBoundingClientRect();
                if (0 < X.bottom && 0 < X.right && X.top < _.innerHeight && X.left < _.innerWidth) {
                  if (w += Pm(R), w > wr) {
                    Ee.length = oe;
                    break;
                  }
                  R = new Promise(
                    Cy.bind(R)
                  ), Ee.push(R);
                }
              }
            }
          if (0 < Ee.length)
            return _ = Promise.race([
              Promise.all(Ee),
              new Promise(function(ye) {
                return setTimeout(ye, 500);
              })
            ]).then(l, l), (U ? Promise.allSettled([U.finished, _]) : _).then(i, i);
          if (l(), U)
            return U.finished.then(
              i,
              i
            );
          i();
        },
        types: n
      });
      x.__reactViewTransition = z;
      var Q = [];
      return z.ready.then(
        function() {
          for (var _ = x.documentElement.getAnimations({
            subtree: !0
          }), U = 0; U < _.length; U++) {
            var oe = _[U], Ee = oe.effect, je = Ee.pseudoElement;
            if (je != null && je.startsWith("::view-transition")) {
              Q.push(oe), oe = Ee.getKeyframes();
              for (var w = je = void 0, A = !0, R = 0; R < oe.length; R++) {
                var X = oe[R], ye = X.width;
                if (je === void 0) je = ye;
                else if (je !== ye) {
                  A = !1;
                  break;
                }
                if (ye = X.height, w === void 0) w = ye;
                else if (w !== ye) {
                  A = !1;
                  break;
                }
                delete X.width, delete X.height, X.transform === "none" && delete X.transform;
              }
              A && je !== void 0 && w !== void 0 && (Ee.setKeyframes(oe), A = getComputedStyle(
                Ee.target,
                Ee.pseudoElement
              ), A.width !== je || A.height !== w) && (A = oe[0], A.width = je, A.height = w, A = oe[oe.length - 1], A.width = je, A.height = w, Ee.setKeyframes(oe));
            }
          }
          c();
        },
        function(_) {
          x.__reactViewTransition === z && (x.__reactViewTransition = null);
          try {
            typeof _ == "object" && _ !== null && _.name === "InvalidStateError" && (_.message === "View transition was skipped because document visibility state is hidden." || _.message === "Skipping view transition because document visibility state has become hidden." || _.message === "Skipping view transition because viewport size changed." || _.message === "Transition was aborted because of invalid state") && (_ = null), _ !== null && y(_);
          } finally {
            a(), l(), c();
          }
        }
      ), z.finished.finally(function() {
        for (var _ = 0; _ < Q.length; _++)
          Q[_].cancel();
        x.__reactViewTransition === z && (x.__reactViewTransition = null), f();
      }), z;
    } catch {
      return a(), l(), c(), null;
    }
  }
  function el(e, t) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + e + "(" + t + ")";
  }
  el.prototype.animate = function(e, t) {
    return t = typeof t == "number" ? { duration: t } : ue({}, t), t.pseudoElement = this._selector, this._scope.animate(e, t);
  }, el.prototype.getAnimations = function() {
    for (var e = this._scope, t = this._selector, n = e.getAnimations({ subtree: !0 }), a = [], l = 0; l < n.length; l++) {
      var i = n[l].effect;
      i !== null && i.target === e && i.pseudoElement === t && a.push(n[l]);
    }
    return a;
  }, el.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function Dm(e) {
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
      if (zm(i, e, t, n) === -1) {
        var c = this, f = t;
        n != null && typeof n != "boolean" && n.once === !0 && (f = function(y) {
          c.removeEventListener(
            e,
            t,
            n
          ), typeof t == "function" ? t.call(this, y) : t.handleEvent(y);
        }), a !== null && (l = c.removeEventListener.bind(
          c,
          e,
          t,
          n
        ), a.addEventListener("abort", l, { once: !0 }), l = a.removeEventListener.bind(a, "abort", l)), a = Ll(n), i.push({
          type: e,
          listener: t,
          optionsOrUseCapture: n,
          attachedListener: f,
          cleanup: l
        }), p(
          this._fragmentFiber.child,
          !1,
          Ry,
          e,
          f,
          a
        );
      }
      this._eventListeners = i;
    }
  };
  function Ry(e, t, n, a) {
    return B(e).addEventListener(
      t,
      n,
      a
    ), !1;
  }
  tn.prototype.removeEventListener = function(e, t, n) {
    var a = this._eventListeners;
    if (a !== null && (t = zm(
      a,
      e,
      t,
      n
    ), t !== -1)) {
      var l = a[t];
      n = l.attachedListener;
      var i = l.cleanup;
      l = Ll(l.optionsOrUseCapture), p(
        this._fragmentFiber.child,
        !1,
        jy,
        e,
        n,
        l
      ), a.splice(t, 1), i !== null && i();
    }
  };
  function jy(e, t, n, a) {
    return B(e).removeEventListener(
      t,
      n,
      a
    ), !1;
  }
  function Ll(e) {
    return e != null && typeof e != "boolean" && (e.once === !0 || e.signal instanceof AbortSignal) ? { capture: e.capture, passive: e.passive } : e;
  }
  function Um(e) {
    return e == null ? "c=0" : typeof e == "boolean" ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0");
  }
  function zm(e, t, n, a) {
    if (e.length === 0) return -1;
    a = Um(a);
    for (var l = 0; l < e.length; l++) {
      var i = e[l];
      if (i.type === t && i.listener === n && Um(i.optionsOrUseCapture) === a)
        return l;
    }
    return -1;
  }
  tn.prototype.dispatchEvent = function(e) {
    var t = L(
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
            Ll(i.optionsOrUseCapture)
          );
        }
      if (t.appendChild(a), e = a.dispatchEvent(e), n)
        for (l = 0; l < n.length; l++)
          i = n[l], a.removeEventListener(
            i.type,
            i.attachedListener,
            Ll(i.optionsOrUseCapture)
          );
      return t.removeChild(a), e;
    }
    return t.dispatchEvent(e);
  }, tn.prototype.focus = function(e) {
    p(
      this._fragmentFiber.child,
      !0,
      Mm,
      e,
      void 0,
      void 0
    );
  };
  function Mm(e, t) {
    return e.tag === 6 ? !1 : (e = B(e), Yy(e, t));
  }
  tn.prototype.focusLast = function(e) {
    var t = [];
    p(
      this._fragmentFiber.child,
      !0,
      no,
      t,
      void 0,
      void 0
    );
    for (var n = t.length - 1; 0 <= n && !Mm(t[n], e); n--) ;
  };
  function no(e, t) {
    return t.push(e), !1;
  }
  tn.prototype.blur = function() {
    var e = L(
      this._fragmentFiber
    );
    e !== null && (e = B(e), e = Ii(e).activeElement, e !== null && p(
      this._fragmentFiber.child,
      !1,
      Dy,
      e,
      void 0,
      void 0
    ));
  };
  function Dy(e, t) {
    return e.tag === 6 ? !1 : (e = B(e), e === t || e.contains(t) ? (t.blur(), !0) : !1);
  }
  tn.prototype.observeUsing = function(e) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), p(
      this._fragmentFiber.child,
      !1,
      Uy,
      e,
      void 0,
      void 0
    );
  };
  function Uy(e, t) {
    return e.tag === 6 || (e = B(e), t.observe(e)), !1;
  }
  tn.prototype.unobserveUsing = function(e) {
    var t = this._observers;
    if (t !== null && t.has(e)) {
      t.delete(e), p(
        this._fragmentFiber.child,
        !1,
        zy,
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
  function zy(e, t) {
    return e.tag === 6 || (e = B(e), t.unobserve(e)), !1;
  }
  var Tn = [], ao = !1;
  function My(e, t, n) {
    Tn.push({
      fragmentInstance: e,
      observer: t,
      instance: n
    }), ao || (ao = !0, Xy(function() {
      ao = !1;
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
    return p(
      this._fragmentFiber.child,
      !1,
      Hy,
      e,
      void 0,
      void 0
    ), e;
  };
  function Hy(e, t) {
    if (e.tag === 6) {
      e = e.stateNode;
      var n = e.ownerDocument.createRange();
      n.selectNodeContents(e), t.push.apply(t, n.getClientRects());
    } else
      e = B(e), t.push.apply(t, e.getClientRects());
    return !1;
  }
  tn.prototype.getRootNode = function(e) {
    var t = L(
      this._fragmentFiber
    );
    return t === null ? this : B(t).getRootNode(e);
  }, tn.prototype.compareDocumentPosition = function(e) {
    var t = L(
      this._fragmentFiber
    );
    if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var n = [];
    p(
      this._fragmentFiber.child,
      !1,
      no,
      n,
      void 0,
      void 0
    );
    var a = B(t);
    if (n.length === 0) {
      if (n = a, N(this._fragmentFiber)) {
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
      return n === e ? l = Node.DOCUMENT_POSITION_CONTAINS : a & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = O(t)[1], n === null ? l = Node.DOCUMENT_POSITION_PRECEDING : (e = B(n).compareDocumentPosition(
        e
      ), l = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), l |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    t = B(n[0]), l = B(n[n.length - 1]);
    var i = N(this._fragmentFiber) ? t.parentElement : a;
    if (i == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    a = i.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, i = i.compareDocumentPosition(l) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var c = t.compareDocumentPosition(e), f = l.compareDocumentPosition(e), y = c & Node.DOCUMENT_POSITION_CONTAINED_BY || f & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return f = a && i && c & Node.DOCUMENT_POSITION_FOLLOWING && f & Node.DOCUMENT_POSITION_PRECEDING, t = a && t === e || i && l === e || y || f ? Node.DOCUMENT_POSITION_CONTAINED_BY : !a && t === e || !i && l === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : c, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || qy(
      t,
      this._fragmentFiber,
      n[0],
      n[n.length - 1],
      e
    ) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function qy(e, t, n, a, l) {
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
        for (i = t, t = L(t); i !== null; ) {
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
    return e & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!i) && !(t = i === n) && (t = ne(
      n,
      i,
      ie
    ), t === null ? t = !1 : (p(
      t,
      !0,
      ce,
      i,
      n
    ), i = le, le = null, t = i !== null)), t) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!i) && !(t = i === a) && (t = ne(
      a,
      i,
      ie
    ), t === null ? t = !1 : (p(
      t,
      !0,
      K,
      i,
      a
    ), i = le, re = le = null, t = i !== null)), t) : !1;
  }
  function Hm(e, t) {
    var n = e.ownerDocument.createRange();
    n.selectNodeContents(e), e = n.getBoundingClientRect(), window.scrollTo(
      window.scrollX + e.left,
      t ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight
    );
  }
  tn.prototype.scrollIntoView = function(e) {
    if (typeof e == "object") throw Error(s(566));
    var t = [];
    p(
      this._fragmentFiber.child,
      !1,
      no,
      t,
      void 0,
      void 0
    );
    var n = e !== !1;
    if (t.length === 0) {
      var a = O(
        this._fragmentFiber
      );
      if (a = n ? a[1] || a[0] || L(this._fragmentFiber) : a[0] || a[1], a === null) return;
      if (a.tag === 6) {
        e = B(a), Hm(e, n);
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
      l.tag === 6 ? (l = B(l), Hm(l, n)) : B(l).scrollIntoView(e), a += n ? -1 : 1;
    }
  };
  function Ly(e, t) {
    return e = B(e), qm(e, t), !1;
  }
  function qm(e, t) {
    e.reactFragments == null && (e.reactFragments = /* @__PURE__ */ new Set()), e.reactFragments.add(t);
  }
  function Lm(e, t) {
    var n = t._eventListeners;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var l = n[a];
        e.addEventListener(
          l.type,
          l.attachedListener,
          Ll(l.optionsOrUseCapture)
        );
      }
    e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(i) {
      for (var c = 0, f = 0; f < Tn.length; f++) {
        var y = Tn[f];
        (y.fragmentInstance !== t || y.observer !== i || y.instance !== e) && (Tn[c++] = y);
      }
      Tn.length = c, i.observe(e);
    }), qm(e, t));
  }
  function Iy(e, t) {
    var n = t._eventListeners;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var l = n[a];
        e.removeEventListener(
          l.type,
          l.attachedListener,
          Ll(l.optionsOrUseCapture)
        );
      }
    e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(i) {
      typeof i.rootMargin == "string" ? My(
        t,
        i,
        e
      ) : i.unobserve(e);
    }), e.reactFragments != null && e.reactFragments.delete(t));
  }
  function lo(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          lo(n), mu(n);
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
  function By(e, t, n, a) {
    for (; e.nodeType === 1; ) {
      var l = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (a) {
        if (!e[ai])
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
  function Vy(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = dn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Im(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = dn(e.nextSibling), e === null)) return null;
    return e;
  }
  function io(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function uo(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Gy(e, t) {
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
  var ro = null;
  function Bm(e) {
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
  function Vm(e) {
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
  function Yy(e, t) {
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
  function Xy(e) {
    Om(function() {
      Om(function(t) {
        return e(t);
      });
    });
  }
  function Gm(e, t, n) {
    switch (t = Ii(n), e) {
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
  function Ym(e, t, n) {
    for (var a in n) {
      var l = n[a];
      n.hasOwnProperty(a) && l != null && Ze(e, t, a, null, by, l);
    }
    n.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === Nn && (e.onclick = null), mu(e);
  }
  function so(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    mu(e);
  }
  var hn = /* @__PURE__ */ new Map(), Xm = /* @__PURE__ */ new Set();
  function Bi(e) {
    if (typeof e.getRootNode == "function") {
      var t = e.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) return t;
    }
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Fn = he.d;
  he.d = {
    f: Qy,
    r: ky,
    D: Ky,
    C: Zy,
    L: Jy,
    m: $y,
    X: Py,
    S: Fy,
    M: Wy
  };
  function Qy() {
    var e = Fn.f(), t = vr();
    return e || t;
  }
  function ky(e) {
    var t = al(e);
    t !== null && t.tag === 5 && t.type === "form" ? kd(t) : Fn.r(e);
  }
  var Il = typeof document > "u" ? null : document;
  function Qm(e, t, n) {
    var a = Il;
    if (a && typeof t == "string" && t) {
      var l = ln(t);
      l = 'link[rel="' + e + '"][href="' + l + '"]', typeof n == "string" && (l += '[crossorigin="' + n + '"]'), Xm.has(l) || (Xm.add(l), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(l) === null && (t = a.createElement("link"), xt(t, "link", e), gt(t), a.head.appendChild(t)));
    }
  }
  function Ky(e) {
    Fn.D(e), Qm("dns-prefetch", e, null);
  }
  function Zy(e, t) {
    Fn.C(e, t), Qm("preconnect", e, t);
  }
  function Jy(e, t, n) {
    Fn.L(e, t, n);
    var a = Il;
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
          i = Bl(e);
          break;
        case "script":
          i = Vl(e);
      }
      if (!(hn.has(i) || (e = ue(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), hn.set(i, e), a.querySelector(l) !== null || t === "style" && a.querySelector(Vi(i)) || t === "script" && a.querySelector(Gi(i))))) {
        var c = a.createElement("link");
        xt(c, "link", e), t === "style" && (c[hu] = !0, c.onload = c.onerror = function() {
          af(c);
        }), gt(c), a.head.appendChild(c);
      }
    }
  }
  function $y(e, t) {
    Fn.m(e, t);
    var n = Il;
    if (n && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", l = 'link[rel="modulepreload"][as="' + ln(a) + '"][href="' + ln(e) + '"]', i = l;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = Vl(e);
      }
      if (!hn.has(i) && (e = ue({ rel: "modulepreload", href: e }, t), hn.set(i, e), n.querySelector(l) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Gi(i)))
              return;
        }
        a = n.createElement("link"), xt(a, "link", e), gt(a), n.head.appendChild(a);
      }
    }
  }
  function Fy(e, t, n) {
    Fn.S(e, t, n);
    var a = Il;
    if (a && e) {
      var l = ll(a).hoistableStyles, i = Bl(e);
      t = t || "default";
      var c = l.get(i);
      if (!c) {
        var f = { loading: 0, preload: null };
        if (c = a.querySelector(
          Vi(i)
        ))
          f.loading = 5;
        else {
          e = ue(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = hn.get(i)) && co(e, n);
          var y = c = a.createElement("link");
          gt(y), xt(y, "link", e), y._p = new Promise(function(x, z) {
            y.onload = x, y.onerror = z;
          }), y.addEventListener("load", function() {
            f.loading |= 1;
          }), y.addEventListener("error", function() {
            f.loading |= 2;
          }), f.loading |= 4, Nr(c, t, a);
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
  function Py(e, t) {
    Fn.X(e, t);
    var n = Il;
    if (n && e) {
      var a = ll(n).hoistableScripts, l = Vl(e), i = a.get(l);
      i || (i = n.querySelector(Gi(l)), i || (e = ue({ src: e, async: !0 }, t), (t = hn.get(l)) && oo(e, t), i = n.createElement("script"), gt(i), xt(i, "link", e), n.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(l, i));
    }
  }
  function Wy(e, t) {
    Fn.M(e, t);
    var n = Il;
    if (n && e) {
      var a = ll(n).hoistableScripts, l = Vl(e), i = a.get(l);
      i || (i = n.querySelector(Gi(l)), i || (e = ue({ src: e, async: !0, type: "module" }, t), (t = hn.get(l)) && oo(e, t), i = n.createElement("script"), gt(i), xt(i, "link", e), n.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(l, i));
    }
  }
  function km(e, t, n, a) {
    var l = (l = Z.current) ? Bi(l) : null;
    if (!l) throw Error(s(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (n = Bl(n.href), t = ll(
          l
        ).hoistableStyles, a = t.get(n), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, t.set(n, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = Bl(n.href);
          var i = ll(
            l
          ).hoistableStyles, c = i.get(e);
          if (c || (l = l.ownerDocument || l, c = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(e, c), (i = l.querySelector(
            Vi(e)
          )) ? i._p || (c.instance = i, c.state.loading = 5) : (i = hn.get(e), i || (i = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, hn.set(e, i)), e0(
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
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (n = Vl(n), t = ll(
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
  function Bl(e) {
    return 'href="' + ln(e) + '"';
  }
  function Vi(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Km(e) {
    return ue({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function e0(e, t, n, a) {
    if (t = e.querySelector(
      'link[rel="preload"][as="style"][' + t + "]"
    )) {
      if (t[hu] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      t = e.createElement("link"), t[hu] = !0, t.onload = t.onerror = af.bind(null, t), xt(t, "link", n), gt(t), e.head.appendChild(t);
    a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    });
  }
  function Vl(e) {
    return '[src="' + ln(e) + '"]';
  }
  function Gi(e) {
    return "script[async]" + e;
  }
  function Zm(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + ln(n.href) + '"]'
          );
          if (a)
            return t.instance = a, gt(a), a;
          var l = ue({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), gt(a), xt(a, "style", l), Nr(a, n.precedence, e), t.instance = a;
        case "stylesheet":
          l = Bl(n.href);
          var i = e.querySelector(
            Vi(l)
          );
          if (i)
            return t.state.loading |= 4, t.instance = i, gt(i), i;
          a = Km(n), (l = hn.get(l)) && co(a, l), i = (e.ownerDocument || e).createElement("link"), gt(i);
          var c = i;
          return c._p = new Promise(function(f, y) {
            c.onload = f, c.onerror = y;
          }), xt(i, "link", a), t.state.loading |= 4, Nr(i, n.precedence, e), t.instance = i;
        case "script":
          return i = Vl(n.src), (l = e.querySelector(
            Gi(i)
          )) ? (t.instance = l, gt(l), l) : (a = n, (l = hn.get(i)) && (a = ue({}, n), oo(a, l)), e = e.ownerDocument || e, l = e.createElement("script"), gt(l), xt(l, "link", a), e.head.appendChild(l), t.instance = l);
        case "void":
          return null;
        default:
          throw Error(s(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Nr(a, n.precedence, e));
    return t.instance;
  }
  function Nr(e, t, n) {
    for (var a = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), l = a.length ? a[a.length - 1] : null, i = l, c = 0; c < a.length; c++) {
      var f = a[c];
      if (f.dataset.precedence === t) i = f;
      else if (i !== l) break;
    }
    i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function co(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function oo(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var _r = null;
  function Jm(e, t, n) {
    if (_r === null) {
      var a = /* @__PURE__ */ new Map(), l = _r = /* @__PURE__ */ new Map();
      l.set(n, a);
    } else
      l = _r, a = l.get(n), a || (a = /* @__PURE__ */ new Map(), l.set(n, a));
    if (a.has(e)) return a;
    for (a.set(e, null), n = n.getElementsByTagName(e), l = 0; l < n.length; l++) {
      var i = n[l];
      if (!(i[ai] || i[Nt] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = i.getAttribute(t) || "";
        c = e + c;
        var f = a.get(c);
        f ? f.push(i) : a.set(c, [i]);
      }
    }
    return a;
  }
  function fo(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function t0(e, t, n) {
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
  function $m(e, t) {
    return e === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
  }
  function Fm(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Pm(e) {
    return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function Wm(e, t) {
    typeof t.decode == "function" && (e.imgCount++, t.complete || (e.imgBytes += Pm(t), e.suspenseyImages.push(t)), e = l0.bind(e), t.decode().then(e, e));
  }
  function n0(e, t, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var l = Bl(a.href), i = t.querySelector(
          Vi(l)
        );
        if (i) {
          t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Yi.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = i, gt(i);
          return;
        }
        i = t.ownerDocument || t, a = Km(a), (l = hn.get(l)) && co(a, l), i = i.createElement("link"), gt(i);
        var c = i;
        c._p = new Promise(function(f, y) {
          c.onload = f, c.onerror = y;
        }), xt(i, "link", a), n.instance = i;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Yi.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var wr = 0;
  function a0(e, t) {
    return e.stylesheets && e.count === 0 && Cr(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && Cr(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4 + t);
      0 < e.imgBytes && wr === 0 && (wr = 62500 * Sy());
      var l = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Cr(e, e.stylesheets), e.unsuspend)) {
            var i = e.unsuspend;
            e.unsuspend = null, i();
          }
        },
        (e.imgBytes > wr ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(a), clearTimeout(l);
      };
    } : null;
  }
  function ep(e) {
    if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
      if (e.stylesheets) Cr(e, e.stylesheets);
      else if (e.unsuspend) {
        var t = e.unsuspend;
        e.unsuspend = null, t();
      }
    }
  }
  function Yi() {
    this.count--, ep(this);
  }
  function l0() {
    this.imgCount--, ep(this);
  }
  var Or = null;
  function Cr(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Or = /* @__PURE__ */ new Map(), t.forEach(i0, e), Or = null, Yi.call(e));
  }
  function i0(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Or.get(e);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Or.set(e, n);
        for (var l = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < l.length; i++) {
          var c = l[i];
          (c.nodeName === "LINK" || c.getAttribute("media") !== "not all") && (n.set(c.dataset.precedence, c), a = c);
        }
        a && n.set(null, a);
      }
      l = t.instance, c = l.getAttribute("data-precedence"), i = n.get(c) || a, i === a && n.set(null, l), n.set(c, l), this.count++, a = Yi.bind(this), l.addEventListener("load", a), l.addEventListener("error", a), i ? i.parentNode.insertBefore(l, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(l, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Gl = {
    $$typeof: q,
    Provider: null,
    Consumer: null,
    _currentValue: We,
    _currentValue2: We,
    _threadCount: 0
  };
  function u0(e, t, n, a, l, i, c, f, y) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Qr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Qr(0), this.hiddenUpdates = Qr(null), this.identifierPrefix = a, this.onUncaughtError = l, this.onCaughtError = i, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function tp(e, t, n, a, l, i, c, f, y, x, z, Q) {
    return e = new u0(
      e,
      t,
      n,
      c,
      y,
      x,
      z,
      Q,
      f
    ), t = 1, i === !0 && (t |= 24), i = Lt(3, null, null, t), e.current = i, i.stateNode = e, t = ws(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: t
    }, Rs(i), e;
  }
  function np(e) {
    return e ? (e = ml, e) : ml;
  }
  function ap(e, t, n, a, l, i) {
    l = np(l), a.context === null ? a.context = l : a.pendingContext = l, a = sa(t), a.payload = { element: n }, i = i === void 0 ? null : i, i !== null && (a.callback = i), n = ca(e, a, t), n !== null && (Gt(n, e, t), Ei(n, e, t));
  }
  function lp(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function ho(e, t) {
    lp(e, t), (e = e.alternate) && lp(e, t);
  }
  function ip(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = qa(e, 67108864);
      t !== null && Gt(t, e, 67108864), ho(e, 67108864);
    }
  }
  function up(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = en();
      t = kr(t);
      var n = qa(e, t);
      n !== null && Gt(n, e, t), ho(e, t);
    }
  }
  var Yl = !0;
  function r0(e, t, n, a) {
    var l = W.T;
    W.T = null;
    var i = he.p;
    try {
      he.p = 2, mo(e, t, n, a);
    } finally {
      he.p = i, W.T = l;
    }
  }
  function s0(e, t, n, a) {
    var l = W.T;
    W.T = null;
    var i = he.p;
    try {
      he.p = 8, mo(e, t, n, a);
    } finally {
      he.p = i, W.T = l;
    }
  }
  function mo(e, t, n, a) {
    if (Yl) {
      var l = po(a);
      if (l === null)
        Zc(
          e,
          t,
          a,
          xr,
          n
        ), sp(e, a);
      else if (o0(
        l,
        e,
        t,
        n,
        a
      ))
        a.stopPropagation();
      else if (sp(e, a), t & 4 && -1 < c0.indexOf(e)) {
        for (; l !== null; ) {
          var i = al(l);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var c = Da(i.pendingLanes);
                  if (c !== 0) {
                    var f = i;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; c; ) {
                      var y = 1 << 31 - Kt(c);
                      f.entanglements[1] |= y, c &= ~y;
                    }
                    zn(i), (Ye & 6) === 0 && (mr = Qt() + 500, Hi(0));
                  }
                }
                break;
              case 31:
              case 13:
                f = qa(i, 2), f !== null && Gt(f, i, 2), vr(), ho(i, 2);
            }
          if (i = po(a), i === null && Zc(
            e,
            t,
            a,
            xr,
            n
          ), i === l) break;
          l = i;
        }
        l !== null && a.stopPropagation();
      } else
        Zc(
          e,
          t,
          a,
          null,
          n
        );
    }
  }
  function po(e) {
    return e = Wr(e), go(e);
  }
  var xr = null;
  function go(e) {
    if (xr = null, e = Ua(e), e !== null) {
      var t = m(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = v(t), e !== null) return e;
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
    return xr = e, null;
  }
  function rp(e) {
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
        switch (Sg()) {
          case Qo:
            return 2;
          case ko:
            return 8;
          case su:
          case Tg:
            return 32;
          case Ko:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var vo = !1, Sa = null, Ta = null, Aa = null, Xi = /* @__PURE__ */ new Map(), Qi = /* @__PURE__ */ new Map(), Na = [], c0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function sp(e, t) {
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
        Xi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Qi.delete(t.pointerId);
    }
  }
  function ki(e, t, n, a, l, i) {
    return e === null || e.nativeEvent !== i ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: a,
      nativeEvent: i,
      targetContainers: [l]
    }, t !== null && (t = al(t), t !== null && ip(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function o0(e, t, n, a, l) {
    switch (t) {
      case "focusin":
        return Sa = ki(
          Sa,
          e,
          t,
          n,
          a,
          l
        ), !0;
      case "dragenter":
        return Ta = ki(
          Ta,
          e,
          t,
          n,
          a,
          l
        ), !0;
      case "mouseover":
        return Aa = ki(
          Aa,
          e,
          t,
          n,
          a,
          l
        ), !0;
      case "pointerover":
        var i = l.pointerId;
        return Xi.set(
          i,
          ki(
            Xi.get(i) || null,
            e,
            t,
            n,
            a,
            l
          )
        ), !0;
      case "gotpointercapture":
        return i = l.pointerId, Qi.set(
          i,
          ki(
            Qi.get(i) || null,
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
  function cp(e) {
    var t = Ua(e.target);
    if (t !== null) {
      var n = m(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = v(n), t !== null) {
            e.blockedOn = t, ef(e.priority, function() {
              up(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = b(n), t !== null) {
            e.blockedOn = t, ef(e.priority, function() {
              up(n);
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
  function Rr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = po(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        Pr = a, n.target.dispatchEvent(a), Pr = null;
      } else
        return t = al(n), t !== null && ip(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function op(e, t, n) {
    Rr(e) && n.delete(t);
  }
  function f0() {
    vo = !1, Sa !== null && Rr(Sa) && (Sa = null), Ta !== null && Rr(Ta) && (Ta = null), Aa !== null && Rr(Aa) && (Aa = null), Xi.forEach(op), Qi.forEach(op);
  }
  function jr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, vo || (vo = !0, u.unstable_scheduleCallback(
      u.unstable_NormalPriority,
      f0
    )));
  }
  var Dr = null;
  function fp(e) {
    Dr !== e && (Dr = e, u.unstable_scheduleCallback(
      u.unstable_NormalPriority,
      function() {
        Dr === e && (Dr = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], a = e[t + 1], l = e[t + 2];
          if (typeof a != "function") {
            if (go(a || n) === null)
              continue;
            break;
          }
          var i = al(n);
          i !== null && (e.splice(t, 3), t -= 3, Fs(
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
  function Xl(e) {
    function t(y) {
      return jr(y, e);
    }
    Sa !== null && jr(Sa, e), Ta !== null && jr(Ta, e), Aa !== null && jr(Aa, e), Xi.forEach(t), Qi.forEach(t);
    for (var n = 0; n < Na.length; n++) {
      var a = Na[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Na.length && (n = Na[0], n.blockedOn === null); )
      cp(n), n.blockedOn === null && Na.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var l = n[a], i = n[a + 1], c = l[qt] || null;
        if (typeof i == "function")
          c || fp(n);
        else if (c) {
          var f = null;
          if (i && i.hasAttribute("formAction")) {
            if (l = i, c = i[qt] || null)
              f = c.formAction;
            else if (go(l) !== null) continue;
          } else f = c.action;
          typeof f == "function" ? n[a + 1] = f : (n.splice(a, 3), a -= 3), fp(n);
        }
      }
  }
  function dp() {
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
  function yo(e) {
    this._internalRoot = e;
  }
  Ur.prototype.render = yo.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    var n = t.current, a = en();
    ap(n, a, e, t, null, null);
  }, Ur.prototype.unmount = yo.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      ap(e.current, 2, null, e, null, null), vr(), t[nl] = null;
    }
  };
  function Ur(e) {
    this._internalRoot = e;
  }
  Ur.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Wo();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Na.length && t !== 0 && t < Na[n].priority; n++) ;
      Na.splice(n, 0, e), n === 0 && cp(e);
    }
  };
  var hp = r.version;
  if (hp !== "19.3.0")
    throw Error(
      s(
        527,
        hp,
        "19.3.0"
      )
    );
  he.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = E(t), e = e !== null ? T(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var d0 = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: W,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var zr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zr.isDisabled && zr.supportsFiber)
      try {
        ei = zr.inject(
          d0
        ), kt = zr;
      } catch {
      }
  }
  return Zi.createRoot = function(e, t) {
    if (!h(e)) throw Error(s(299));
    var n = !1, a = "", l = nh, i = ah, c = lh;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (l = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = tp(
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
      dp
    ), e[nl] = t.current, Kc(e), new yo(t);
  }, Zi.hydrateRoot = function(e, t, n) {
    if (!h(e)) throw Error(s(299));
    var a = !1, l = "", i = nh, c = ah, f = lh, y = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (i = n.onUncaughtError), n.onCaughtError !== void 0 && (c = n.onCaughtError), n.onRecoverableError !== void 0 && (f = n.onRecoverableError), n.formState !== void 0 && (y = n.formState)), t = tp(
      e,
      1,
      !0,
      t,
      n ?? null,
      a,
      l,
      y,
      i,
      c,
      f,
      dp
    ), t.context = np(null), n = t.current, a = en(), a = kr(a), l = sa(a), l.callback = null, ca(n, l, a), n = a, t.current.lanes = n, ni(t, n), zn(t), e[nl] = t.current, Kc(e), new Ur(t);
  }, Zi.version = "19.3.0", Zi;
}
var Ap;
function S0() {
  if (Ap) return So.exports;
  Ap = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (r) {
        console.error(r);
      }
  }
  return u(), So.exports = E0(), So.exports;
}
var T0 = S0(), A0 = Bp();
function Vp(u, r) {
  if (r) return r;
  const o = new URLSearchParams(u.location.search).get("hana-host-origin");
  if (o) return o;
  try {
    return new URL(u.document.referrer).origin;
  } catch {
    return "*";
  }
}
function Gp(u, r, o) {
  return u.source !== r ? !1 : o === "*" || u.origin === o;
}
var N0 = 600, _0 = 120, w0 = 4e3, Yp = 20, Np = 4096, _p = 1e4, O0 = /* @__PURE__ */ new Set(["scroll_element", "click_sequence", "drag_element", "press_key"]), C0 = /* @__PURE__ */ new Set([
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
]), Xp = "hana-ui-", x0 = 512, R0 = 1, wp = /* @__PURE__ */ new WeakMap(), Lr = /* @__PURE__ */ new WeakMap();
function kl(u) {
  return typeof u == "object" && u !== null && !Array.isArray(u);
}
function Vr(u) {
  return u.nodeType === 9;
}
function Bo(u) {
  return Vr(u) ? u : u.ownerDocument;
}
function j0(u) {
  return Vr(u) ? u.body : u;
}
function Qp(u, r) {
  return r.isConnected && (Vr(u) ? r.ownerDocument === u : u.contains(r));
}
function Pl(u) {
  const r = u.ownerDocument.defaultView?.HTMLElement;
  return r ? u instanceof r : u instanceof HTMLElement;
}
function iu(u) {
  const r = u.ownerDocument.defaultView?.HTMLInputElement;
  return r ? u instanceof r : u instanceof HTMLInputElement;
}
function Vo(u) {
  const r = u.ownerDocument.defaultView?.HTMLTextAreaElement;
  return r ? u instanceof r : u instanceof HTMLTextAreaElement;
}
function kp(u) {
  const r = u.ownerDocument.defaultView?.HTMLButtonElement;
  return r ? u instanceof r : u instanceof HTMLButtonElement;
}
function D0(u) {
  const r = u.ownerDocument.defaultView?.HTMLSelectElement;
  return r ? u instanceof r : u.tagName === "SELECT";
}
function U0(u) {
  const r = u.ownerDocument.defaultView?.HTMLAnchorElement;
  return r ? u instanceof r : u.tagName === "A";
}
function Kp(u) {
  if (!Pl(u)) return !0;
  const r = u.ownerDocument.defaultView?.getComputedStyle(u);
  return !r || r.display !== "none" && r.visibility !== "hidden";
}
function z0(u) {
  return Pl(u) ? iu(u) || Vo(u) || kp(u) || D0(u) || U0(u) || u.hasAttribute("contenteditable") || u.hasAttribute("onclick") || ["button", "switch", "textbox", "combobox", "slider", "checkbox", "link"].includes(u.getAttribute("role") ?? "") : !1;
}
function M0(u) {
  const r = u.ownerDocument;
  let o = wp.get(r);
  o || (o = /* @__PURE__ */ new WeakMap(), wp.set(r, o));
  const s = o.get(u), h = Lr.get(r);
  if (s && h?.has(s)) return s;
  let m = s;
  if (!m)
    do
      m = `${Xp}${R0++}`;
    while (r.getElementById(m));
  o.set(u, m);
  let v = Lr.get(r);
  if (v || (v = /* @__PURE__ */ new Map(), Lr.set(r, v)), v.size >= x0) {
    const b = v.keys().next().value;
    b && v.delete(b);
  }
  return v.set(m, new WeakRef(u)), m;
}
function H0(u, r) {
  const o = u, s = { tagName: u.tagName.toLowerCase() };
  typeof o.id == "string" && o.id && (s.id = o.id.slice(0, 80)), typeof o.className == "string" && o.className.trim() && (s.className = o.className.trim().slice(0, 120));
  const h = o.textContent?.trim();
  return h && (s.text = h.slice(0, 160)), (iu(u) || Vo(u)) && (u.disabled && (s.disabled = !0), u.type && (s.type = u.type)), o.id ? s.elementId = o.id : r && z0(u) && (s.elementId = M0(u)), s;
}
function q0(u, r) {
  const o = [], s = j0(u);
  if (!s) return { outline: o, visibleNodeCount: 0, totalNodeCount: 0, truncated: !1 };
  const h = Bo(u).createTreeWalker(s, 1);
  let m = h.currentNode, v = 0, b = 0;
  for (; m && b < N0; ) {
    if (m.nodeType === 1) {
      const S = m;
      b += 1, Kp(S) && (v += 1, o.length < _0 && o.push(H0(S, r)));
    }
    m = h.nextNode();
  }
  return { outline: o, visibleNodeCount: v, totalNodeCount: b, truncated: m !== null };
}
function Mo(u, r, o = !1) {
  if (typeof r != "string" || !r.trim()) return null;
  const s = r.trim(), h = Bo(u), m = s.startsWith(Xp) ? Lr.get(h)?.get(s)?.deref() ?? null : h.getElementById(s);
  return m && Qp(u, m) && (!o || Kp(m)) ? m : null;
}
function Zp(u) {
  return Pl(u) ? iu(u) && (u.type === "file" || u.disabled) ? { ok: !1, error: "This element cannot be clicked." } : kp(u) && u.disabled ? { ok: !1, error: "This element cannot be clicked." } : (u.click(), { ok: !0 }) : { ok: !1, error: "Target is not an element." };
}
function Op(u, r) {
  const o = iu(u) ? u.ownerDocument.defaultView?.HTMLInputElement.prototype : u.ownerDocument.defaultView?.HTMLTextAreaElement.prototype, s = o && Object.getOwnPropertyDescriptor(o, "value")?.set;
  s ? s.call(u, r) : u.value = r;
}
function L0(u, r, o) {
  const s = typeof r == "string" ? r.slice(0, w0) : "";
  if (iu(u)) {
    if (u.type === "file" || u.disabled || u.readOnly) return { ok: !1, error: "This element cannot accept text." };
    o ? Op(u, `${u.value}${s}`) : u.value = `${u.value}${s}`;
  } else if (Vo(u)) {
    if (u.disabled || u.readOnly) return { ok: !1, error: "This element cannot accept text." };
    o ? Op(u, `${u.value}${s}`) : u.value = `${u.value}${s}`;
  } else return { ok: !1, error: "This element cannot accept text." };
  return u.dispatchEvent(new Event("input", { bubbles: !0 })), u.dispatchEvent(new Event("change", { bubbles: !0 })), { ok: !0 };
}
function tu(u, r) {
  const o = Mo(u, r, !0);
  return o && Pl(o) ? o : null;
}
function Br(u, r) {
  return typeof u == "number" && Number.isFinite(u) && Math.abs(u) <= r ? u : null;
}
function I0(u, r) {
  const o = r.scrollX === void 0 ? 0 : Br(r.scrollX, _p), s = r.scrollY === void 0 ? 0 : Br(r.scrollY, _p);
  if (o === null || s === null || o === 0 && s === 0) return { ok: !1, code: "UI_ACTION_SCROLL_INVALID", error: "scroll_element requires bounded non-zero scroll coordinates." };
  const h = r.elementId === void 0 ? Vr(u) ? u.scrollingElement ?? u.documentElement : u : tu(u, r.elementId);
  return !h || !Pl(h) ? { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No visible element matches this elementId." } : (h.scrollLeft += o, h.scrollTop += s, h.dispatchEvent(new Event("scroll", { bubbles: !1 })), { ok: !0, result: { scrollLeft: h.scrollLeft, scrollTop: h.scrollTop } });
}
function B0(u) {
  const r = Array.isArray(u.steps) ? u.steps : u.elementIds;
  if (!Array.isArray(r) || r.length < 1 || r.length > Yp) return null;
  const o = r.map((s) => {
    if (typeof s == "string") return s.trim();
    if (!kl(s)) return "";
    const h = typeof s.elementId == "string" ? s.elementId.trim() : "", m = Array.isArray(s.elementIds) && s.elementIds.length === 1 && typeof s.elementIds[0] == "string" ? s.elementIds[0].trim() : "";
    return h || m;
  });
  return o.every(Boolean) ? o : null;
}
function V0(u, r) {
  const o = B0(r);
  if (!o) return { ok: !1, code: "UI_ACTION_SEQUENCE_INVALID", error: "click_sequence requires one to twenty element IDs." };
  let s = 0;
  for (const [h, m] of o.entries()) {
    const v = tu(u, m);
    if (!v) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: `Sequence target ${h + 1} is unavailable.`, result: { completedCount: s, failedIndex: h } };
    const b = Zp(v);
    if (b.ok === !1) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_OPERABLE", error: b.error, result: { completedCount: s, failedIndex: h } };
    s += 1;
  }
  return { ok: !0, result: { completedCount: s } };
}
function _o(u, r, o, s, h) {
  const m = u.ownerDocument.defaultView?.MouseEvent ?? MouseEvent;
  u.dispatchEvent(new m(r, { bubbles: !0, cancelable: !0, clientX: o, clientY: s, buttons: h }));
}
function wo(u, r, o, s, h) {
  const m = u.ownerDocument.defaultView, v = m?.PointerEvent ?? m?.MouseEvent ?? MouseEvent;
  u.dispatchEvent(new v(r, { bubbles: !0, cancelable: !0, clientX: o, clientY: s, buttons: h }));
}
function G0(u, r) {
  const o = tu(u, r.elementId);
  if (!o) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No visible source element matches this elementId." };
  const s = r.deltaX === void 0 ? 0 : Br(r.deltaX, Np), h = r.deltaY === void 0 ? 0 : Br(r.deltaY, Np);
  if (s === null || h === null) return { ok: !1, code: "UI_ACTION_DRAG_INVALID", error: "drag_element coordinates must be finite and bounded." };
  const m = r.targetElementId === void 0 ? null : tu(u, r.targetElementId);
  if (r.targetElementId !== void 0 && !m) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No visible target element matches targetElementId." };
  if (!m && s === 0 && h === 0) return { ok: !1, code: "UI_ACTION_DRAG_TARGET_REQUIRED", error: "drag_element requires a target element or non-zero delta." };
  const v = o.getBoundingClientRect(), b = v.left + v.width / 2, S = v.top + v.height / 2, E = m?.getBoundingClientRect(), T = E ? E.left + E.width / 2 : b + s, p = E ? E.top + E.height / 2 : S + h, L = m ?? o;
  wo(o, "pointerdown", b, S, 1), _o(o, "mousedown", b, S, 1);
  for (const N of [0.25, 0.5, 0.75]) {
    const O = b + (T - b) * N, V = S + (p - S) * N;
    wo(L, "pointermove", O, V, 1), _o(L, "mousemove", O, V, 1);
  }
  return wo(L, "pointerup", T, p, 0), _o(L, "mouseup", T, p, 0), { ok: !0, result: { dragged: !0, endX: T, endY: p } };
}
function Y0(u, r) {
  const o = r.key === void 0 ? r.keys : [r.key];
  if (!Array.isArray(o) || o.length < 1 || o.length > Yp || o.some((S) => typeof S != "string")) return { ok: !1, code: "UI_ACTION_KEY_INVALID", error: "press_key requires supported key names or single characters." };
  const s = o.map((S) => S.trim());
  if (s.some((S) => !(S.length === 1 || C0.has(S)))) return { ok: !1, code: "UI_ACTION_KEY_INVALID", error: "press_key requires supported key names or single characters." };
  const h = Bo(u).activeElement, m = r.elementId === void 0 ? h && Qp(u, h) && Pl(h) ? h : null : tu(u, r.elementId);
  if (!m) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No focused visible element is available for press_key." };
  r.elementId !== void 0 && m.focus();
  const v = m.ownerDocument.defaultView?.KeyboardEvent ?? KeyboardEvent, b = { ctrlKey: r.ctrlKey === !0, metaKey: r.metaKey === !0, altKey: r.altKey === !0, shiftKey: r.shiftKey === !0 };
  for (const S of s)
    m.dispatchEvent(new v("keydown", { bubbles: !0, cancelable: !0, key: S, ...b })), m.dispatchEvent(new v("keyup", { bubbles: !0, cancelable: !0, key: S, ...b }));
  return { ok: !0, result: { pressedKeys: s } };
}
function Jp(u, r, o = !1) {
  const s = kl(r) && typeof r.action == "string" ? r.action : "";
  if (s === "describe_dom") return { ok: !0, result: q0(u, o) };
  if (s === "read_state") return { ok: !0, result: { state: {} } };
  if (s === "click_element") {
    const h = Mo(u, kl(r) ? r.elementId : null, o);
    if (!h) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No element matches this elementId." };
    const m = Zp(h);
    return m.ok === !0 ? { ok: !0, result: { clicked: !0 } } : { ok: !1, code: "UI_ACTION_ELEMENT_NOT_OPERABLE", error: m.error };
  }
  if (s === "type_text") {
    const h = Mo(u, kl(r) ? r.elementId : null, o);
    if (!h) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No element matches this elementId." };
    const m = L0(h, kl(r) ? r.text : "", o);
    return m.ok === !0 ? { ok: !0, result: { typed: !0 } } : { ok: !1, code: "UI_ACTION_ELEMENT_NOT_OPERABLE", error: m.error };
  }
  return O0.has(s) && !o ? { ok: !1, code: "UI_ACTION_UNSUPPORTED_FOR_APP_CARD", error: `App cards do not support ${s}.` } : kl(r) ? s === "scroll_element" ? I0(u, r) : s === "click_sequence" ? V0(u, r) : s === "drag_element" ? G0(u, r) : s === "press_key" ? Y0(u, r) : { ok: !1, code: "UI_ACTION_UNKNOWN_ACTION", error: `Unknown UI action: ${s || "(missing)"}.` } : { ok: !1, code: "UI_ACTION_UNKNOWN_ACTION", error: `Unknown UI action: ${s || "(missing)"}.` };
}
var dt = "hana.plugin.ui", ht = 1, X0 = "X-Hana-App-Surface-Session", Q0 = "appSurfaceSession", Fi = {
  CONTEXT: "hana.input-panel.context",
  SUBMIT: "hana.input-panel.submit",
  PRESENTATION: "hana.input-panel.presentation"
}, Cp = 64 * 1024, $p = {
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
}, Ql = {
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
}, Kl = {
  GET: "hana.app.storage.get",
  GET_ALL: "hana.app.storage.getAll",
  SET: "hana.app.storage.set",
  DELETE: "hana.app.storage.delete",
  KEYS: "hana.app.storage.keys"
}, k0 = {
  CHANGED: "hana.app.storage.changed"
}, Fp = { OPEN: "hana.cards.open" }, Mr = {
  GET_ACTIVE: "hana.sessions.get-active",
  SUBSCRIBE: "hana.sessions.subscribe-active",
  UNSUBSCRIBE: "hana.sessions.unsubscribe-active",
  FOCUS: "hana.sessions.focus"
}, xp = {
  ACTIVE_CHANGED: "hana.sessions.active-changed",
  ERROR: "hana.sessions.error"
}, Ho = {
  SET_INTERACTIVE_REGIONS: "hana.surface.set-interactive-regions"
};
function K0(u) {
  if (!An(u) || Object.keys(u).length !== 1 || !Array.isArray(u.regions))
    return { ok: !1, error: "hana.surface.setInteractiveRegions requires exactly one regions array." };
  if (u.regions.length > 64)
    return { ok: !1, error: "hana.surface.setInteractiveRegions accepts at most 64 regions." };
  const r = [];
  for (const o of u.regions) {
    if (!An(o) || Object.keys(o).length !== 4)
      return { ok: !1, error: "Each interactive region must contain exactly x, y, width, and height." };
    const { x: s, y: h, width: m, height: v } = o;
    if (typeof s != "number" || typeof h != "number" || typeof m != "number" || typeof v != "number" || !Number.isFinite(s) || !Number.isFinite(h) || !Number.isFinite(m) || !Number.isFinite(v))
      return { ok: !1, error: "Interactive region coordinates must be finite numbers." };
    if (m <= 0 || v <= 0 || Math.abs(s) > 1e6 || Math.abs(h) > 1e6 || Math.abs(m) > 1e6 || Math.abs(v) > 1e6)
      return { ok: !1, error: "Interactive region bounds are invalid." };
    r.push({ x: s, y: h, width: m, height: v });
  }
  return { ok: !0, value: { regions: r } };
}
var Zl = {
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
}, Z0 = 128;
function uu(u) {
  if (typeof u != "string" || u.length === 0 || u.length > Z0)
    return !1;
  for (let r = 0; r < u.length; r += 1) {
    const o = u.charCodeAt(r);
    if (o <= 31 || o === 127)
      return !1;
  }
  return !0;
}
function J0(u) {
  return !An(u) || !uu(u.viewToken) ? { ok: !1, error: "A chrome binding requires a host-minted view token." } : u.resync !== void 0 && typeof u.resync != "boolean" ? { ok: !1, error: "A chrome binding resync flag must be a boolean when present." } : { ok: !0, value: { viewToken: u.viewToken, ...u.resync === void 0 ? {} : { resync: u.resync } } };
}
function $0(u) {
  return !An(u) || !uu(u.challengeId) ? { ok: !1, error: "A chrome challenge requires a host-minted challenge id." } : { ok: !0, value: { challengeId: u.challengeId } };
}
function F0(u) {
  return An(u) ? typeof u.requestId != "string" || u.requestId === "" ? { ok: !1, error: "App chrome action identity requires a non-empty requestId." } : !Number.isSafeInteger(u.revision) || u.revision <= 0 ? { ok: !1, error: "App chrome action identity requires a positive revision." } : !Number.isSafeInteger(u.generation) || u.generation <= 0 ? { ok: !1, error: "App chrome action identity requires a positive generation." } : uu(u.viewToken) ? {
    ok: !0,
    value: {
      requestId: u.requestId,
      revision: u.revision,
      generation: u.generation,
      viewToken: u.viewToken
    }
  } : { ok: !1, error: "App chrome action identity requires the view token." } : { ok: !1, error: "App chrome action identity must be an object." };
}
function P0(u) {
  if (!An(u))
    return { ok: !1, error: "App chrome action request must be an object." };
  const r = u.kind;
  if (r !== "action" && r !== "tab-select" && r !== "tab-close")
    return { ok: !1, error: 'App chrome action request kind must be "action", "tab-select" or "tab-close".' };
  const o = F0(u);
  if (o.ok === !1)
    return o;
  const s = o.value;
  return r === "action" ? typeof u.actionId != "string" || u.actionId === "" ? { ok: !1, error: "App chrome action request requires a non-empty actionId." } : { ok: !0, value: { kind: r, ...s, actionId: u.actionId } } : typeof u.tabId != "string" || u.tabId === "" ? { ok: !1, error: `App chrome ${r} request requires a non-empty tabId.` } : { ok: !0, value: { kind: r, ...s, tabId: u.tabId } };
}
var Ji = {
  /** App → host: register the current document/namespace, returning a bound handle. */
  ENABLE: "hana.app.view-state.enable",
  /** App → host: read the snapshot the handle's namespace currently holds. */
  GET: "hana.app.view-state.get",
  /** App → host: compare-and-swap the handle's namespace snapshot. */
  SET: "hana.app.view-state.set",
  /** App → host: release this handle's own registration. */
  RELEASE: "hana.app.view-state.release"
}, W0 = 256;
function nu(u) {
  if (typeof u != "string" || u.length === 0 || u.length > W0 || u.trim().length === 0)
    return !1;
  for (let r = 0; r < u.length; r += 1) {
    const o = u.charCodeAt(r);
    if (o <= 31 || o === 127)
      return !1;
  }
  return !0;
}
function Go(u, r) {
  const o = Reflect.ownKeys(u);
  if (o.length !== r.length)
    return !1;
  for (const s of o)
    if (typeof s != "string" || !r.includes(s))
      return !1;
  return !0;
}
function Oo(u) {
  return !An(u) || !Go(u, ["viewKind", "revision", "state"]) ? { ok: !1, error: "App view-state snapshot must carry exactly viewKind, revision and state." } : u.viewKind !== "compact" && u.viewKind !== "detached" ? { ok: !1, error: 'App view-state snapshot kind must be "compact" or "detached".' } : !Number.isSafeInteger(u.revision) || u.revision < 0 ? { ok: !1, error: "App view-state snapshot revision must be a non-negative safe integer." } : u.state === void 0 ? { ok: !1, error: "App view-state snapshot requires a state object or an explicit null." } : u.revision === 0 && u.state !== null ? { ok: !1, error: "App view-state revision 0 only carries a null state." } : { ok: !0, value: { viewKind: u.viewKind, revision: u.revision, state: u.state } };
}
function Co(u) {
  return !An(u) || !Go(u, ["viewToken", "bindingId", "registrationId", "snapshot"]) ? { ok: !1, error: "App view-state reply must echo exactly a view token, namespace binding id, registration id and snapshot." } : uu(u.viewToken) ? nu(u.bindingId) ? nu(u.registrationId) ? {
    ok: !0,
    value: { viewToken: u.viewToken, bindingId: u.bindingId, registrationId: u.registrationId, snapshot: u.snapshot }
  } : { ok: !1, error: "App view-state reply requires an opaque registration id." } : { ok: !1, error: "App view-state reply requires an opaque namespace binding id." } : { ok: !1, error: "App view-state reply requires the host-minted view token." };
}
function $i(u, r) {
  return u.viewToken !== r.viewToken || u.bindingId !== r.bindingId ? !1 : r.registrationId === void 0 ? !0 : u.registrationId === r.registrationId;
}
function Rp(u) {
  return !An(u) || !Go(u, ["viewToken", "bindingId", "registrationId", "released"]) ? { ok: !1, error: "App view-state release reply must echo exactly a view token, namespace binding id, registration id and a boolean released flag." } : uu(u.viewToken) ? nu(u.bindingId) ? nu(u.registrationId) ? typeof u.released != "boolean" ? { ok: !1, error: "App view-state release reply requires a boolean released flag." } : { ok: !0, value: { viewToken: u.viewToken, bindingId: u.bindingId, registrationId: u.registrationId, released: u.released } } : { ok: !1, error: "App view-state release reply requires an opaque registration id." } : { ok: !1, error: "App view-state release reply requires an opaque namespace binding id." } : { ok: !1, error: "App view-state release reply requires the host-minted view token." };
}
var eb = /^\/api\/apps\/([^/]+)\/ui(?:\/|$)/, tb = /^\/api\/apps\/([^/]+)\/routes\/_runtime\/([^/]+)\/_surface\/([^/]+)\//;
function Hr(u) {
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
function Yo(u) {
  if (typeof u != "string" || !u.startsWith("/api/apps/"))
    return null;
  const r = tb.exec(u);
  if (r) {
    const s = Hr(r[1]), h = Hr(r[2]), m = Hr(r[3]);
    return s === null || h === null || m === null ? null : { appId: s, kind: "runtime" };
  }
  const o = eb.exec(u);
  if (o) {
    const s = Hr(o[1]);
    return s === null ? null : { appId: s, kind: "ui" };
  }
  return null;
}
var nb = 256;
function Pp(u) {
  if (u !== void 0)
    return typeof u != "string" || u.length === 0 || u.length > nb || u.includes("\0") || u.trim().length === 0 ? null : u;
}
var ab = {
  CONTEXT: "hana.surface.context"
}, lb = /* @__PURE__ */ new Set([
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
      code: $p.BAD_MESSAGE,
      message: u
    }
  };
}
function Pi(u) {
  if (!An(u))
    return wa("Plugin UI messages must be objects.");
  if (u.protocol !== dt)
    return wa("Plugin UI message protocol is missing or invalid.");
  if (u.version !== ht)
    return {
      ok: !1,
      error: {
        code: $p.UNSUPPORTED_VERSION,
        message: `Unsupported Plugin UI protocol version: ${String(u.version)}.`
      }
    };
  if (typeof u.kind != "string" || !lb.has(u.kind))
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
var ib = [
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
], ub = [
  "cards",
  "agentTypes",
  "configuration",
  "settingsTab",
  "page",
  "widget"
], rb = [
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
], sb = ["restricted", "full-access"];
new Set(ib);
new Set(ub);
new Set(rb);
new Set(sb);
var cb = Object.values(Ie);
new Set(cb);
var Wi = class extends Error {
  reason;
  constructor(u, r) {
    super(r), this.name = "AppCurrentViewBindingError", this.reason = u;
  }
};
function ob() {
  return `chrome-doc:${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`;
}
function fb(u) {
  return JSON.stringify([u.appId, u.cardInstanceId ?? null, u.instanceKey ?? null]);
}
function db(u) {
  const r = ob();
  let o = null, s = !1, h, m = !0;
  const v = /* @__PURE__ */ new Set(), b = /* @__PURE__ */ new Set();
  let S = 0;
  const E = () => {
    S += 1;
  }, T = (K) => new Wi("unavailable", K), p = () => new Wi(
    "identity-changed",
    "The current App card identity changed while this view write waited."
  ), L = () => new Wi(
    "token-stale",
    "The held view token is no longer the current document."
  ), N = (K) => {
    v.delete(K), u.targetWindow.clearTimeout(K.timer), K.signal && K.onAbort && K.signal.removeEventListener("abort", K.onAbort);
  }, O = (K, ie) => {
    N(K), K.reject(ie);
  }, V = (K, ie) => {
    const ne = o !== K, ue = m;
    o = K, m = !0, (ne || !ue) && E();
    for (const ge of [...v]) {
      if (N(ge), ge.identity !== void 0 && ge.identity !== h) {
        ge.reject(p());
        continue;
      }
      ge.resolve(K);
    }
    if (b.size === 0) return;
    const be = { changed: ne, resync: ie }, se = S;
    for (const ge of [...b]) {
      if (s || se !== S) return;
      b.has(ge) && ge.listener(be);
    }
  };
  return {
    handleHostMessage: (K) => {
      const ie = K.type === Zl.CHALLENGE, ne = K.type === Zl.BINDING;
      if (!ie && !ne) return !1;
      if (s) return !0;
      if (ie && K.kind === "event") {
        const ue = $0(K.payload);
        return ue.ok === !0 && (u.post({
          protocol: dt,
          version: ht,
          kind: "event",
          type: Zl.ACK,
          payload: { challengeId: ue.value.challengeId, documentNonce: r }
        }), s || u.reannounceReady?.()), !0;
      }
      if (ne && K.kind === "event") {
        const ue = J0(K.payload);
        return ue.ok === !0 && V(ue.value.viewToken, ue.value.resync === !0), !0;
      }
      return !0;
    },
    applySurfaceContext: (K) => {
      if (s) return;
      if (K === null) {
        if (!m) return;
        m = !1, E();
        return;
      }
      const ie = fb(K);
      if (h !== ie) {
        if (h !== void 0) {
          for (const ne of [...v]) O(ne, p());
          o = null;
        }
        h = ie, E();
      }
    },
    currentToken() {
      return !s && m ? o : null;
    },
    waitForToken: (K, ie) => s ? Promise.reject(T("The current App card view binding was released.")) : ie?.aborted ? Promise.reject(T("The current App card view wait was aborted.")) : o && m ? Promise.resolve(o) : new Promise((ne, ue) => {
      const be = {
        resolve: ne,
        reject: ue,
        identity: h,
        timer: u.targetWindow.setTimeout(() => {
          N(be), ue(T("The host has not bound this App card view; the current view is unavailable here."));
        }, K)
      };
      ie && (be.signal = ie, be.onAbort = () => O(be, T("The current App card view wait was aborted.")), ie.addEventListener("abort", be.onAbort)), v.add(be);
    }),
    assertCurrentToken: (K) => {
      if (s) throw T("The current App card view binding was released.");
      if (!m || !o)
        throw T("The current App card view is not writable here right now.");
      if (o !== K) throw L();
    },
    onBinding(K) {
      if (s) return () => {
      };
      const ie = { listener: K };
      return b.add(ie), () => {
        b.delete(ie);
      };
    },
    dispose() {
      if (!s) {
        s = !0, o = null, m = !1;
        for (const K of [...v])
          O(K, T("The current App card view binding was released."));
        v.clear(), b.clear();
      }
    }
  };
}
function hb(u, r) {
  let o = null, s = 0;
  const h = (v) => {
    const b = u();
    b && r({
      protocol: dt,
      version: ht,
      kind: "event",
      type: Zl.SCROLL,
      payload: { scrolled: v, viewToken: b }
    });
  }, m = (v) => {
    const b = o;
    b && (o = null, b.detach(), v && b.scrolled && h(!1));
  };
  return {
    register(v) {
      if (!v || typeof v.scrollTop != "number" || typeof v.addEventListener != "function")
        throw new TypeError("hana.chrome.registerScrollSource requires an element.");
      m(!0);
      const b = ++s, S = v.ownerDocument?.defaultView, E = { generation: b, scrolled: v.scrollTop > 0, detach: () => {
      } }, T = () => {
        if (!o || o.generation !== b) return;
        const N = v.scrollTop > 0;
        N !== o.scrolled && (o.scrolled = N, h(N));
      };
      v.addEventListener("scroll", T, { passive: !0 });
      const p = S?.ResizeObserver, L = p ? new p(T) : null;
      return L?.observe(v), E.detach = () => {
        v.removeEventListener("scroll", T), L?.disconnect();
      }, o = E, E.scrolled && h(!0), () => {
        if (!o || o.generation !== b) return;
        const N = o;
        o = null, N.detach(), N.scrolled && h(!1);
      };
    },
    /** The host bound this document (or re-bound it): report the real state. */
    flush() {
      o?.scrolled && h(!0);
    },
    dispose: () => m(!1)
  };
}
function mb(u) {
  const r = { requestId: u.requestId, revision: u.revision };
  return u.kind === "action" ? { ...r, kind: "action", actionId: u.actionId } : u.kind === "tab-select" ? { ...r, kind: "tab-select", tabId: u.tabId } : { ...r, kind: "tab-close", tabId: u.tabId };
}
var pb = 1e4;
function gb(u) {
  const r = u.requestTimeoutMs ?? pb, o = u.currentView;
  let s = !1, h = null;
  const m = new AbortController(), v = hb(() => s ? null : o.currentToken(), u.post), b = o.onBinding((B) => {
    s || (B.changed || B.resync) && v.flush();
  }), S = () => Object.assign(
    new Error("The App card business identity changed; this chrome write is stale."),
    { code: Pn.VIEW_STALE }
  ), E = () => Object.assign(
    new Error("The host has not bound this App card view; chrome is unavailable here."),
    { code: Pn.UNAVAILABLE }
  ), T = () => Object.assign(
    new Error("The App chrome view was released."),
    { code: Pn.UNAVAILABLE }
  ), p = (B) => B instanceof Wi ? B.reason === "unavailable" ? E() : S() : B, L = (B, le) => {
    u.post({
      protocol: dt,
      version: ht,
      id: B.id,
      type: B.type,
      ...le
    });
  }, N = (B) => {
    if (B.type !== Zl.ACTION) return !1;
    if (s) return !0;
    if (B.kind !== "request") return !1;
    const le = P0(B.payload);
    if (le.ok === !1)
      return L(B, { kind: "error", error: { code: Pn.BAD_PAYLOAD, message: le.error } }), !0;
    const re = le.value, ce = {
      requestId: re.requestId,
      revision: re.revision,
      generation: re.generation,
      viewToken: re.viewToken
    }, K = h;
    if (!K)
      return L(B, {
        kind: "error",
        payload: ce,
        error: { code: Pn.ACTION_UNHANDLED, message: "This App has no chrome action handler." }
      }), !0;
    if (re.viewToken !== o.currentToken())
      return L(B, {
        kind: "error",
        payload: ce,
        error: { code: Pn.VIEW_STALE, message: "This chrome action belongs to a replaced view." }
      }), !0;
    const ie = () => !s && h === K && re.viewToken === o.currentToken();
    return Promise.resolve().then(async () => {
      if (!ie()) {
        L(B, {
          kind: "error",
          payload: ce,
          error: { code: Pn.VIEW_STALE, message: "This chrome action belongs to a replaced view." }
        });
        return;
      }
      let ne;
      try {
        ne = await K.fn(mb(re));
      } catch (ue) {
        if (!ie()) return;
        L(B, {
          kind: "error",
          payload: ce,
          error: {
            code: Pn.ACTION_FAILED,
            message: ue instanceof Error ? ue.message : "The App chrome action handler failed."
          }
        });
        return;
      }
      ie() && L(B, {
        kind: "response",
        payload: {
          ...ce,
          status: ne && ne.status === "rejected" ? "rejected" : "handled",
          ...ne && typeof ne.message == "string" && ne.message ? { message: ne.message } : {}
        }
      });
    }), !0;
  }, O = () => v.dispose();
  u.targetWindow.addEventListener("pagehide", O);
  const V = (B) => {
    if (s)
      throw Object.assign(new Error(`The App chrome view was released; ${B} is unavailable.`), { code: Pn.UNAVAILABLE });
  };
  return {
    api: {
      set(B, le) {
        const re = le?.timeoutMs ?? r;
        return o.waitForToken(re, m.signal).then(
          (ce) => {
            V("hana.chrome.set");
            try {
              o.assertCurrentToken(ce);
            } catch (K) {
              throw p(K);
            }
            return u.request(Zl.SET, { description: B, viewToken: ce }, { timeoutMs: re });
          },
          (ce) => {
            throw s ? T() : p(ce);
          }
        );
      },
      onAction(B) {
        if (V("hana.chrome.onAction"), typeof B != "function") throw new TypeError("hana.chrome.onAction requires a handler.");
        const le = { fn: B };
        return h = le, () => {
          h === le && (h = null);
        };
      },
      registerScrollSource(B) {
        return V("hana.chrome.registerScrollSource"), v.register(B);
      }
    },
    handleHostMessage: N,
    dispose() {
      s || (s = !0, m.abort(), u.targetWindow.removeEventListener("pagehide", O), b(), h = null, v.dispose());
    }
  };
}
var vb = 16, yb = 4096, bb = 24 * 1024, Et = class extends Error {
  code;
  constructor(u, r) {
    super(r), this.name = "AppViewStateError", this.code = u;
  }
}, Eb = new TextEncoder();
function Sb(u) {
  return Eb.encode(u).length;
}
function Tb(u) {
  if (typeof u != "object" || u === null || Array.isArray(u)) return !1;
  const r = Object.getPrototypeOf(u);
  return r === Object.prototype || r === null;
}
function Ab(u) {
  const r = Number(u);
  return !Number.isInteger(r) || r < 0 || String(r) !== u ? null : r;
}
function Wp(u) {
  return u === "input" ? "VIEW_STATE_INVALID_INPUT" : "VIEW_STATE_INVALID_STORAGE";
}
function Nb(u, r) {
  const o = Wp(r), s = /* @__PURE__ */ new Set();
  let h = 0;
  const m = (v, b) => {
    if (h += 1, h > yb)
      throw new Et(o, "App view state contains too many values.");
    if (b > vb)
      throw new Et(o, "App view state is nested too deeply.");
    if (v === null) return null;
    const S = typeof v;
    if (S === "string" || S === "boolean") return v;
    if (S === "number") {
      if (!Number.isFinite(v))
        throw new Et(o, "App view state numbers must be finite.");
      return v;
    }
    if (S !== "object")
      throw new Et(o, "App view state must contain only JSON values.");
    const E = v;
    if (s.has(E))
      throw new Et(o, "App view state must not contain cycles.");
    const T = Object.getPrototypeOf(E);
    if (Array.isArray(E)) {
      if (T !== Array.prototype)
        throw new Et(o, "App view state must contain only plain arrays.");
      s.add(E);
      const L = E.length;
      for (const O of Reflect.ownKeys(E)) {
        if (typeof O != "string")
          throw new Et(o, "App view state must not contain symbol keys.");
        if (O === "length") {
          const le = Object.getOwnPropertyDescriptor(E, "length");
          if (le.enumerable || le.get || le.set)
            throw new Et(o, "App view state arrays must expose a plain length.");
          continue;
        }
        const V = Ab(O);
        if (V === null || V >= L)
          throw new Et(o, "App view state arrays must not carry extra keys.");
        const B = Object.getOwnPropertyDescriptor(E, O);
        if (!B.enumerable || B.get || B.set)
          throw new Et(o, "App view state arrays must index plain values.");
      }
      const N = [];
      for (let O = 0; O < L; O++) {
        const V = Object.getOwnPropertyDescriptor(E, String(O));
        if (!V)
          throw new Et(o, "App view state must not contain sparse arrays.");
        N.push(m(V.value, b + 1));
      }
      return s.delete(E), N;
    }
    if (T !== Object.prototype && T !== null)
      throw new Et(o, "App view state must contain only plain objects.");
    s.add(E);
    const p = /* @__PURE__ */ Object.create(null);
    for (const L of Reflect.ownKeys(E)) {
      if (typeof L != "string")
        throw new Et(o, "App view state must not contain symbol keys.");
      const N = Object.getOwnPropertyDescriptor(E, L);
      if (!N.enumerable)
        throw new Et(o, "App view state must not contain non-enumerable fields.");
      if (N.get || N.set)
        throw new Et(o, "App view state must not contain accessors.");
      p[L] = m(N.value, b + 1);
    }
    return s.delete(E), p;
  };
  return m(u, 0);
}
function _b(u, r) {
  if (u === null) return null;
  if (!Tb(u))
    throw new Et(
      Wp(r),
      "App view state must be a JSON object or null."
    );
  return Nb(u, r);
}
function wb(u, r) {
  if (u === null) return null;
  const o = JSON.stringify(u);
  if (Sb(o) > bb)
    throw new Et(
      "VIEW_STATE_TOO_LARGE",
      "App view state exceeds the size budget."
    );
  return JSON.parse(o);
}
function qo(u) {
  return wb(_b(u, "input"));
}
var Oe = {
  UNAVAILABLE: "VIEW_STATE_UNAVAILABLE",
  VIEW_STALE: "VIEW_STATE_VIEW_STALE",
  RELEASED: "VIEW_STATE_RELEASED",
  INVALID_INPUT: "VIEW_STATE_INVALID_INPUT",
  BAD_RESPONSE: "VIEW_STATE_BAD_RESPONSE"
}, Ob = class extends Error {
  code;
  constructor(u, r) {
    super(r), this.name = "AppViewStateRequestError", this.code = u;
  }
}, Cb = 1e4;
function Ce(u, r) {
  return new Ob(u, r);
}
function xb(u) {
  return {
    viewKind: u.viewKind,
    revision: u.revision,
    state: qo(u.state)
  };
}
function Rb(u) {
  const r = u.requestTimeoutMs ?? Cb;
  let o = !1, s = 0, h = null;
  const m = /* @__PURE__ */ new Map();
  let v = null, b = null, S = !1;
  const E = (q) => q instanceof Wi ? q.reason === "unavailable" ? Ce(Oe.UNAVAILABLE, "The App card view is not writable here right now.") : Ce(Oe.VIEW_STALE, "The App card view this operation was bound to is no longer current.") : q, T = (q, M) => {
    !q || q.terminated !== null || (q.terminated = M, q.lifetime.abort());
  }, p = (q) => {
    T(h, q), h = null;
    for (const M of m.values()) M.abort.abort();
    m.clear();
  }, L = (q) => {
    if (o || q === null) return;
    if (q.slot !== "card") {
      p("namespace-changed"), b = null, S = !0, v = null;
      return;
    }
    const M = JSON.stringify([q.appId, q.cardInstanceId, q.instanceKey ?? null]), ee = q.viewState?.bindingId ?? null;
    (S && b !== M || ee !== null && v !== null && ee !== v) && p("namespace-changed"), b = M, S = !0, ee !== null && (v = ee);
  }, N = (q) => {
    if (!o && q.changed) {
      T(h, "document-changed"), h = null;
      for (const M of m.values())
        M.tokenCaptured && M.abort.abort();
    }
  }, O = u.subscribeContext(L), V = u.currentView.onBinding(N), B = (q) => u.currentView.currentToken() === q, le = (q) => {
    try {
      u.currentView.assertCurrentToken(q);
    } catch (M) {
      throw E(M);
    }
  }, re = (q) => {
    const M = u.getContext();
    if (!M || M.slot !== "card")
      throw Ce(Oe.UNAVAILABLE, "The App view-state namespace is not available on this surface.");
    const ee = M.viewState;
    if (!ee)
      throw Ce(Oe.UNAVAILABLE, "The App view-state namespace is not available here right now.");
    if (ee.bindingId !== q.bindingId || ee.viewKind !== q.viewKind)
      throw Ce(Oe.VIEW_STALE, "This view-state handle belongs to a namespace that is no longer current.");
    if (ee.available !== !0)
      throw Ce(Oe.UNAVAILABLE, "The App view-state namespace is temporarily unavailable.");
  }, ce = (q) => q === "document-changed" || q === "namespace-changed" ? Ce(Oe.VIEW_STALE, "This view-state handle's view changed before the operation could be adopted.") : Ce(Oe.RELEASED, "This view-state handle has been released."), K = (q) => {
    if (o)
      throw Ce(Oe.RELEASED, "The App view-state controller was released.");
    if (q.terminated !== null) throw ce(q.terminated);
    if (q.lifetime.signal.aborted)
      throw Ce(Oe.RELEASED, "This view-state handle has been released.");
    if (h !== q)
      throw Ce(Oe.VIEW_STALE, "This view-state handle is no longer the current registration.");
    return le(q.viewToken), re(q), q.viewToken;
  }, ie = (q, M) => {
    if (o)
      throw Ce(Oe.RELEASED, "The App view-state controller was released.");
    if (q.terminated !== null) throw ce(q.terminated);
    if (q.lifetime.signal.aborted)
      throw Ce(Oe.RELEASED, "This view-state handle has been released.");
    if (!B(M))
      throw Ce(Oe.VIEW_STALE, "The document changed before this view-state reply arrived.");
    const ee = u.getContext(), j = ee?.viewState;
    if (!ee || ee.slot !== "card" || !j || j.bindingId !== q.bindingId || j.viewKind !== q.viewKind)
      throw Ce(Oe.VIEW_STALE, "The namespace changed before this view-state reply arrived.");
    if (j.available !== !0)
      throw Ce(Oe.UNAVAILABLE, "The App view-state namespace paused before this reply arrived.");
  }, ne = async (q, M, ee, j) => {
    try {
      return await u.request(q, M, { timeoutMs: ee });
    } catch (F) {
      if (j !== null) {
        if (j.terminated !== null) throw ce(j.terminated);
        if (j.lifetime.signal.aborted)
          throw Ce(Oe.RELEASED, "This view-state handle has been released.");
      }
      throw o ? Ce(Oe.RELEASED, "The App view-state controller was released.") : F;
    }
  }, ue = (q, M) => {
    if (M.viewKind !== q)
      throw Ce(Oe.BAD_RESPONSE, "The view-state reply carried a different view kind than the operation targeted.");
    let ee;
    try {
      ee = qo(M.state);
    } catch (j) {
      throw j instanceof Et ? Ce(Oe.BAD_RESPONSE, "The view-state reply carried a state outside the shared JSON budget.") : j;
    }
    return { viewKind: q, revision: M.revision, state: ee };
  }, be = async (q, M) => {
    const ee = M?.timeoutMs ?? r, j = K(q), F = await ne(Ji.GET, {
      viewToken: j,
      bindingId: q.bindingId,
      registrationId: q.registrationId
    }, ee, q);
    ie(q, j);
    const ae = Co(F);
    if (ae.ok === !1)
      throw Ce(Oe.BAD_RESPONSE, ae.error);
    if (!$i(ae.value, {
      viewToken: j,
      bindingId: q.bindingId,
      registrationId: q.registrationId
    }))
      throw Ce(Oe.VIEW_STALE, "This view-state reply answered a different view than the one this handle targets.");
    const I = Oo(ae.value.snapshot);
    if (I.ok === !1)
      throw Ce(Oe.BAD_RESPONSE, I.error);
    return ue(q.viewKind, I.value);
  }, se = async (q, M, ee) => {
    const j = ee?.timeoutMs ?? r, F = jb(M), ae = qo(M.state), I = K(q), te = await ne(Ji.SET, {
      viewToken: I,
      bindingId: q.bindingId,
      registrationId: q.registrationId,
      expectedRevision: F,
      state: ae
    }, j, q);
    ie(q, I);
    const J = Co(te);
    if (J.ok === !1)
      throw Ce(Oe.BAD_RESPONSE, J.error);
    if (!$i(J.value, {
      viewToken: I,
      bindingId: q.bindingId,
      registrationId: q.registrationId
    }))
      throw Ce(Oe.VIEW_STALE, "This view-state reply answered a different view than the one this handle targets.");
    const g = Oo(J.value.snapshot);
    if (g.ok === !1)
      throw Ce(Oe.BAD_RESPONSE, g.error);
    return ue(q.viewKind, g.value);
  }, ge = async (q, M, ee) => {
    if (!B(q)) return;
    const j = u.getContext();
    if (!(!j || j.slot !== "card" || j.viewState?.bindingId !== M))
      try {
        const F = await u.request(Ji.RELEASE, { viewToken: q, bindingId: M, registrationId: ee }, { timeoutMs: r }), ae = Rp(F);
        (ae.ok === !1 || !$i(ae.value, { viewToken: q, bindingId: M, registrationId: ee })) && console.error("[hana] App view-state cleanup reply did not confirm the released registration.");
      } catch (F) {
        console.error("[hana] failed to release a superseded App view-state registration:", F instanceof Error ? F.message : F);
      }
  }, ve = (q, M) => (q.releasePromise || (q.releasePromise = (async () => {
    const ee = M?.timeoutMs ?? r;
    T(q, "released"), h === q && (h = null);
    const j = u.getContext(), F = j?.viewState;
    if (!(B(q.viewToken) && j?.slot === "card" && !!F && F.bindingId === q.bindingId)) return { released: !1 };
    const I = await u.request(Ji.RELEASE, {
      viewToken: q.viewToken,
      bindingId: q.bindingId,
      registrationId: q.registrationId
    }, { timeoutMs: ee }), te = Rp(I);
    if (te.ok === !1)
      throw Ce(Oe.BAD_RESPONSE, te.error);
    if (!$i(te.value, {
      viewToken: q.viewToken,
      bindingId: q.bindingId,
      registrationId: q.registrationId
    }))
      throw Ce(Oe.VIEW_STALE, "This view-state release reply answered a different view than the one this handle targets.");
    const J = u.getContext();
    if (!B(q.viewToken) || J?.slot !== "card" || J.viewState?.bindingId !== q.bindingId || J.viewState?.viewKind !== q.viewKind)
      throw Ce(Oe.VIEW_STALE, "The namespace changed before this view-state release was confirmed.");
    return { released: te.value.released };
  })()), q.releasePromise), G = (q, M, ee, j, F) => {
    const ae = new AbortController(), I = {
      viewToken: q,
      bindingId: M,
      viewKind: ee,
      registrationId: j,
      lifetime: ae,
      initial: F,
      releasePromise: null,
      terminated: null
    };
    return I.handle = {
      get initial() {
        return xb(I.initial);
      },
      signal: ae.signal,
      get: (te) => be(I, te),
      set: (te, J) => se(I, te, J),
      release: (te) => ve(I, te)
    }, I;
  };
  return {
    api: { enable: async (q) => {
      const M = q?.timeoutMs ?? r;
      if (o) throw Ce(Oe.RELEASED, "The App view-state controller was released.");
      const ee = u.getContext();
      if (ee && ee.slot !== "card")
        throw Ce(Oe.UNAVAILABLE, "View-state recovery is only available on an App card surface.");
      const j = ee?.viewState?.bindingId ?? null, F = ++s;
      p("superseded");
      const ae = new AbortController(), I = { abort: ae, tokenCaptured: !1 };
      m.set(F, I);
      let te = null;
      try {
        let J;
        try {
          J = await u.currentView.waitForToken(M, ae.signal);
        } catch (he) {
          throw o ? Ce(Oe.RELEASED, "The App view-state controller was released.") : ae.signal.aborted ? Ce(Oe.VIEW_STALE, "A newer view-state enable replaced this one before it was bound.") : E(he);
        }
        if (I.tokenCaptured = !0, o) throw Ce(Oe.RELEASED, "The App view-state controller was released.");
        if (F !== s || ae.signal.aborted)
          throw Ce(Oe.VIEW_STALE, "A newer view-state enable replaced this one before it was bound.");
        le(J);
        const g = u.getContext(), D = g?.viewState;
        if (!g || g.slot !== "card" || !D || D.available !== !0)
          throw Ce(Oe.UNAVAILABLE, "The App view-state namespace is not available here right now.");
        if (j !== null && j !== D.bindingId)
          throw Ce(Oe.VIEW_STALE, "The App view-state namespace changed before this enable was sent.");
        le(J);
        const P = await ne(Ji.ENABLE, {
          viewToken: J,
          bindingId: D.bindingId
        }, M, null), $ = Co(P);
        if ($.ok === !1)
          throw Ce(Oe.BAD_RESPONSE, $.error);
        if (!$i($.value, { viewToken: J, bindingId: D.bindingId }))
          throw Ce(Oe.VIEW_STALE, "This view-state enable reply answered a different view than the one that was enabled.");
        if (te = { token: J, bindingId: D.bindingId, registrationId: $.value.registrationId }, o) throw Ce(Oe.RELEASED, "The App view-state controller was released.");
        if (F !== s || ae.signal.aborted || !m.has(F))
          throw Ce(Oe.VIEW_STALE, "This view-state enable was voided before its reply arrived.");
        if (!B(J))
          throw Ce(Oe.VIEW_STALE, "The document changed before this view-state enable reply arrived.");
        const fe = u.getContext();
        if (!fe || fe.slot !== "card" || fe.viewState?.bindingId !== D.bindingId || fe.viewState?.viewKind !== D.viewKind)
          throw Ce(Oe.VIEW_STALE, "The namespace changed before this view-state enable reply arrived.");
        if (fe.viewState?.available !== !0)
          throw Ce(Oe.UNAVAILABLE, "The App view-state namespace paused before this enable was confirmed.");
        const me = Oo($.value.snapshot);
        if (me.ok === !1)
          throw Ce(Oe.BAD_RESPONSE, me.error);
        const de = ue(D.viewKind, me.value), W = G(J, D.bindingId, D.viewKind, $.value.registrationId, de);
        return h = W, te = null, W.handle;
      } catch (J) {
        throw te !== null && await ge(te.token, te.bindingId, te.registrationId), J;
      } finally {
        m.delete(F);
      }
    } },
    dispose() {
      if (!o) {
        o = !0, s += 1, T(h, "disposed"), h = null;
        for (const q of m.values()) q.abort.abort();
        m.clear(), O(), V();
      }
    }
  };
}
function jb(u) {
  if (typeof u != "object" || u === null)
    throw Ce(Oe.INVALID_INPUT, "View-state set requires an object with an expected revision and a state.");
  const r = u.expectedRevision;
  if (!Number.isSafeInteger(r) || r < 0)
    throw Ce(Oe.INVALID_INPUT, "View-state set requires a non-negative safe-integer expected revision.");
  return r;
}
var eg = /* @__PURE__ */ new WeakMap();
function tg(u, r) {
  eg.set(u, r);
}
function ng(u) {
  const r = eg.get(u);
  return r ? r() : null;
}
function Fl(u) {
  return typeof u == "object" && u !== null && !Array.isArray(u);
}
function au(u) {
  const r = /* @__PURE__ */ new Set(), o = (h, m) => {
    if (m > 32) throw new Error("Input panel JSON exceeds the maximum depth of 32.");
    if (h === null || typeof h == "string" || typeof h == "boolean" || typeof h == "number" && Number.isFinite(h)) return h;
    if (typeof h != "object" || h === null) throw new Error("Input panel values must be valid JSON.");
    if (r.has(h)) throw new Error("Input panel values must not contain cycles.");
    const v = Object.getPrototypeOf(h);
    if (!Array.isArray(h) && v !== Object.prototype && v !== null)
      throw new Error("Input panel values must contain only JSON objects and arrays.");
    if (Object.getOwnPropertySymbols(h).length > 0) throw new Error("Input panel JSON must not contain symbol keys.");
    r.add(h);
    let b;
    if (Array.isArray(h)) {
      const S = [];
      for (let E = 0; E < h.length; E++) {
        if (!Object.prototype.hasOwnProperty.call(h, E)) throw new Error("Input panel JSON must not contain sparse arrays.");
        S.push(o(h[E], m + 1));
      }
      b = S;
    } else {
      const S = /* @__PURE__ */ Object.create(null);
      for (const E of Object.keys(h)) S[E] = o(h[E], m + 1);
      b = S;
    }
    return r.delete(h), b;
  }, s = JSON.stringify(o(u, 0));
  if (new TextEncoder().encode(s).byteLength > Cp)
    throw new Error(`Input panel JSON exceeds ${Cp} bytes.`);
  return JSON.parse(s);
}
function ag(u) {
  if (!Fl(u)) throw new Error("Input panel context must be an object.");
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
  if (!Fl(o) || Object.keys(o).some((s) => s !== "height" && s !== "collapsedHeight" && s !== "expanded") || o.height !== null && (typeof o.height != "number" || !Number.isFinite(o.height) || o.height < 24 || o.height > 4096) || typeof o.collapsedHeight != "number" || !Number.isFinite(o.collapsedHeight) || o.collapsedHeight < 24 || o.collapsedHeight > 4096 || typeof o.expanded != "boolean")
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
    data: au(u.data ?? null),
    requestedSchema: au(u.requestedSchema ?? null),
    presentation: { height: o.height, collapsedHeight: o.collapsedHeight, expanded: o.expanded }
  };
}
function qr(u) {
  return { ...u, data: au(u.data), requestedSchema: au(u.requestedSchema), presentation: { ...u.presentation } };
}
function Db(u) {
  if (!Fl(u) || Object.keys(u).some((s) => s !== "height" && s !== "collapsedHeight" && s !== "expanded"))
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
function Ub(u, r) {
  if (!Fl(u) || !Fl(u.presentation) || !Number.isSafeInteger(u.presentationRevision)) throw new Error("The input panel presentation response is invalid.");
  const o = ag({ ...r, presentation: u.presentation, presentationRevision: u.presentationRevision });
  return { presentation: o.presentation, presentationRevision: o.presentationRevision };
}
function zb(u) {
  let r = null, o = 0, s = null, h = 0;
  const m = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Set(), b = () => {
    for (const N of v) N(r ? qr(r) : null);
  }, S = () => {
    r = null, o++;
    for (const N of m.values())
      clearTimeout(N.timeout), N.reject(new Error("The input panel binding was replaced."));
    m.clear(), b();
  }, E = (N) => {
    for (const O of m.values())
      clearTimeout(O.timeout), O.reject(new Error(N));
    m.clear();
  }, T = (N, O, V) => u({
    protocol: dt,
    version: ht,
    id: N.id,
    kind: "error",
    type: N.type,
    error: { code: O, message: V }
  });
  function p(N) {
    if (N.kind === "event" && N.type === Fi.CONTEXT) {
      if (N.payload === null) S();
      else {
        let ce;
        try {
          ce = ag(N.payload);
        } catch (ie) {
          return S(), console.warn("[hana] invalid input panel context:", ie), !0;
        }
        const K = r?.panelId === ce.panelId && r.appId === ce.appId && r.sessionId === ce.sessionId && r.confirmId === ce.confirmId && r.status === ce.status && r.instanceId === ce.instanceId && r.revision === ce.revision;
        if (K && r && ce.presentationRevision < r.presentationRevision) return !0;
        K || E("The input panel binding was replaced."), r = ce, K || o++, b();
      }
      return !0;
    }
    if ((N.kind === "response" || N.kind === "error") && N.type === Fi.PRESENTATION && N.id) {
      const ce = m.get(N.id);
      if (!ce) return !1;
      if (m.delete(N.id), clearTimeout(ce.timeout), ce.generation !== o)
        ce.reject(new Error("The input panel binding was replaced."));
      else if (N.kind === "error") ce.reject(new Error(N.error?.message || "The input panel presentation could not be updated."));
      else
        try {
          const K = Ub(N.payload, r);
          r && K.presentationRevision >= r.presentationRevision && (r = { ...r, ...K }, b()), ce.resolve(K);
        } catch (K) {
          ce.reject(K instanceof Error ? K : new Error("The input panel presentation response is invalid."));
        }
      return !0;
    }
    if (N.kind !== "request" || N.type !== Fi.SUBMIT) return !1;
    if (!N.id) return !0;
    const O = N.payload, V = r;
    if (!Fl(O) || !V || V.status !== "pending" || !V.confirmId || O.panelId !== V.panelId || O.instanceId !== V.instanceId || O.revision !== V.revision)
      return T(N, "INPUT_PANEL_STALE", "This request does not match the active input panel question."), !0;
    const B = s;
    if (!B && V.requestedSchema !== null)
      return T(N, "INPUT_PANEL_SUBMIT_UNHANDLED", "Register hana.inputPanel.onSubmit to provide this question’s answer."), !0;
    const le = o, re = {
      panelId: V.panelId,
      instanceId: V.instanceId,
      revision: V.revision
    };
    return Promise.resolve().then(() => B ? B(qr(V)) : null).then((ce) => {
      if (o !== le) {
        T(N, "INPUT_PANEL_STALE", "The input panel changed before its answer was ready.");
        return;
      }
      u({
        protocol: dt,
        version: ht,
        id: N.id,
        kind: "response",
        type: N.type,
        payload: { ...re, value: au(ce) }
      });
    }).catch((ce) => {
      T(N, "INPUT_PANEL_SUBMIT_FAILED", ce instanceof Error ? ce.message : "The input panel could not provide an answer.");
    }), !0;
  }
  return { api: {
    getContext: () => r ? qr(r) : null,
    onContextChanged(N) {
      return v.add(N), N(r ? qr(r) : null), () => {
        v.delete(N);
      };
    },
    onSubmit(N) {
      if (typeof N != "function") throw new TypeError("hana.inputPanel.onSubmit requires a function.");
      return s = N, () => {
        s === N && (s = null);
      };
    },
    async setPresentation(N) {
      const O = r, V = Db(N);
      if (!O) throw new Error("The input panel is not ready.");
      const B = o, le = `input-panel-presentation:${O.panelId}:${O.instanceId}:${Date.now().toString(36)}:${++h}`;
      return new Promise((re, ce) => {
        const K = setTimeout(() => {
          m.delete(le), ce(new Error("The input panel presentation request timed out."));
        }, 1e4);
        m.set(le, { generation: B, resolve: re, reject: ce, timeout: K });
        const ie = (ne) => {
          const ue = m.get(le);
          ue && (m.delete(le), clearTimeout(ue.timeout), ue.reject(ne instanceof Error ? ne : new Error("The input panel presentation request could not be delivered.")));
        };
        try {
          u({
            protocol: dt,
            version: ht,
            id: le,
            kind: "request",
            type: Fi.PRESENTATION,
            payload: { panelId: O.panelId, instanceId: O.instanceId, revision: O.revision, presentationRevision: O.presentationRevision, presentation: V }
          }, ie);
        } catch (ne) {
          ie(ne);
        }
        if (o !== B) {
          const ne = m.get(le);
          ne && (m.delete(le), clearTimeout(ne.timeout), ne.reject(new Error("The input panel binding was replaced.")));
        }
      });
    }
  }, handleMessage: p, clear: S };
}
var Ca = class extends Error {
  name = "HanaPluginError";
  code;
  details;
  constructor(u) {
    super(u.message), this.code = u.code, this.details = u.details;
  }
}, jp = 0, ru = 60, Mb = 240;
function Hb() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : (jp += 1, `hana-plugin-${Date.now()}-${jp}`);
}
function qb() {
  if (typeof window > "u")
    throw new Error("@hana/plugin-sdk requires a browser iframe window.");
  return window;
}
var Dp = "data-hana-theme-style";
async function Lb(u, r) {
  const o = await fetch(r, { credentials: "same-origin" });
  if (!o.ok)
    throw new Error(`hana theme stylesheet request failed with ${o.status}`);
  const s = await o.text(), h = u.head ?? u.documentElement;
  if (!h) throw new Error("hana theme stylesheet has nowhere to attach");
  let m = u.querySelector(`style[${Dp}]`);
  m || (m = u.createElement("style"), m.setAttribute(Dp, "")), m.textContent = s, h.appendChild(m);
}
function Ib(u) {
  if (typeof u != "object" || u === null) return !1;
  const r = u;
  return ["light", "dark"].every((o) => {
    const s = r[o];
    return typeof s == "object" && s !== null && typeof s.theme == "string" && typeof s.cssUrl == "string";
  });
}
function Bb(u) {
  const r = new URLSearchParams(u.location.search), o = r.get("hana-theme-appearance"), s = r.get("hana-palette-light-theme"), h = r.get("hana-palette-light-css"), m = r.get("hana-palette-dark-theme"), v = r.get("hana-palette-dark-css");
  return {
    theme: r.get("hana-theme") ?? void 0,
    cssUrl: r.get("hana-css") ?? void 0,
    appearance: o === "light" || o === "dark" ? o : void 0,
    palettes: s && h && m && v ? { light: { theme: s, cssUrl: h }, dark: { theme: m, cssUrl: v } } : void 0
  };
}
function lg(u, r = ru) {
  return typeof u != "number" || !Number.isFinite(u) ? r : Math.max(0, Math.min(Mb, Math.round(u)));
}
function ig({
  visible: u,
  maxFrameRate: r,
  slot: o,
  reason: s
}) {
  const h = u ? lg(r) : 0, m = u && h > 0;
  return {
    visible: u,
    active: m,
    maxFrameRate: m ? h : 0,
    motion: m ? "full" : "paused",
    ...o === "page" || o === "widget" || o === "card" || o === "settings" || o === "function-panel" || o === "slot" ? { slot: o } : {},
    ...s ? { reason: s } : {}
  };
}
function Vb(u) {
  const r = new URLSearchParams(u.location.search), o = r.get("hana-visible"), s = !(o === "0" || o === "false"), h = r.get("hana-max-fps"), m = h === null ? NaN : Number(h), v = Number.isFinite(m) ? m : ru;
  return ig({
    visible: s,
    maxFrameRate: v,
    reason: "initial"
  });
}
function Gb(u, r) {
  if (typeof u != "object" || u === null) return null;
  const o = u, s = typeof o.visible == "boolean" ? o.visible : r.visible, h = lg(
    o.maxFrameRate,
    r.maxFrameRate > 0 ? r.maxFrameRate : ru
  ), m = typeof o.active == "boolean" ? o.active && s && h > 0 : s && h > 0, v = o.motion, b = v === "full" || v === "reduced" || v === "paused" ? v : m ? "full" : "paused", S = typeof o.slot == "string" ? o.slot : r.slot, E = typeof o.reason == "string" ? o.reason : r.reason;
  return {
    visible: s,
    active: m,
    maxFrameRate: m ? h : 0,
    motion: m ? b : "paused",
    ...S === "page" || S === "widget" || S === "card" || S === "settings" || S === "function-panel" || S === "slot" ? { slot: S } : {},
    ...E ? { reason: E } : {}
  };
}
function Yb(u, r) {
  if (typeof u != "object" || u === null) return null;
  const o = u.visible;
  return typeof o != "boolean" ? null : ig({
    visible: o,
    maxFrameRate: o && r.maxFrameRate > 0 ? r.maxFrameRate : ru,
    slot: r.slot,
    reason: "legacy-visibility"
  });
}
function Xb(u, r) {
  return u.visible === r.visible && u.active === r.active && u.maxFrameRate === r.maxFrameRate && u.motion === r.motion && u.slot === r.slot && u.reason === r.reason;
}
function xo(u) {
  return {
    width: { ...u.width },
    height: { ...u.height }
  };
}
function Up(u) {
  if (typeof u != "object" || u === null) return null;
  const r = u;
  return r.mode === "fixed" ? typeof r.value != "number" || !Number.isFinite(r.value) ? null : { mode: "fixed", value: Math.round(r.value) } : r.mode === "flexible" ? typeof r.max != "number" || !Number.isFinite(r.max) ? null : { mode: "flexible", max: Math.round(r.max) } : r.mode === "unbounded" ? { mode: "unbounded" } : null;
}
function Qb(u) {
  if (typeof u != "object" || u === null) return null;
  const r = u, o = Up(r.width), s = Up(r.height);
  return !o || !s ? null : { width: o, height: s };
}
function zp(u) {
  if (u === null) return null;
  if (typeof u == "string") return u;
}
function kb(u) {
  if (typeof u != "object" || u === null || Array.isArray(u)) return;
  const r = u;
  if (nu(r.bindingId) && !(r.viewKind !== "compact" && r.viewKind !== "detached") && typeof r.available == "boolean")
    return { bindingId: r.bindingId, viewKind: r.viewKind, available: r.available };
}
function Kb(u) {
  if (typeof u != "object" || u === null || Array.isArray(u)) return null;
  const r = u, o = typeof r.appId == "string" && r.appId.trim() ? r.appId.trim() : null, s = r.slot, h = r.cardInstanceId;
  if (!o || s !== "card" && s !== "function-panel" && s !== "settings" && s !== "slot" && s !== "input-panel") return null;
  const m = zp(r.embeddedSessionId), v = zp(r.originSessionId), b = Pp(r.instanceKey);
  if (b === null) return null;
  const S = kb(r.viewState), E = typeof h == "string" && !!h.trim();
  if (b !== void 0 && !E) return null;
  const T = {};
  return m !== void 0 && (T.embeddedSessionId = m), v !== void 0 && (T.originSessionId = v), b !== void 0 && (T.instanceKey = b), S !== void 0 && (T.viewState = S), s === "settings" || s === "input-panel" ? h === null ? { appId: o, slot: s, cardInstanceId: null, ...T } : null : E ? { appId: o, slot: s, cardInstanceId: h.trim(), ...T } : s !== "card" || h !== null || typeof r.embeddedSessionId != "string" || !r.embeddedSessionId.trim() ? null : { appId: o, slot: s, cardInstanceId: null, ...T };
}
function Ro(u) {
  return {
    ...u,
    ...u.viewState ? { viewState: { ...u.viewState } } : {}
  };
}
function Mp(u) {
  if (typeof u != "object" || u === null || Array.isArray(u)) return null;
  const r = u, o = typeof r.sessionId == "string" && r.sessionId.trim() ? r.sessionId : null, s = typeof r.sessionPath == "string" && r.sessionPath ? r.sessionPath : null;
  return !o || !s || r.title !== null && typeof r.title != "string" || r.agentId !== null && typeof r.agentId != "string" ? null : {
    sessionId: o,
    sessionPath: s,
    title: r.title,
    agentId: r.agentId
  };
}
function Zb(u) {
  if (typeof u != "object" || u === null || Array.isArray(u)) return null;
  const r = u, o = r.previous === null ? null : Mp(r.previous), s = r.current === null ? null : Mp(r.current);
  return r.previous !== null && o === null || r.current !== null && s === null || typeof r.timestamp != "number" || !Number.isFinite(r.timestamp) ? null : { previous: o, current: s, timestamp: r.timestamp };
}
function Jb(u) {
  if (typeof u != "object" || u === null || Array.isArray(u)) return null;
  const r = u;
  return typeof r.code != "string" || !r.code.trim() || typeof r.message != "string" || !r.message.trim() ? null : new Ca({ code: r.code, message: r.message });
}
function $b(u) {
  return typeof u == "string" ? { url: u } : u;
}
function Fb(u) {
  return typeof u == "string" ? { text: u } : u;
}
function ug(u) {
  const r = Yo(u.location.pathname || "");
  if (!r)
    throw new Error("App asset/API URL helper requires an App surface route under /api/apps/:appId/ui/ or a scoped service mount.");
  return r.appId;
}
function Pb(u, r) {
  if (!r || !["card", "function-panel", "settings", "slot"].includes(r.slot)) return !1;
  try {
    return ug(u) === r.appId;
  } catch {
    return !1;
  }
}
function Wb(u) {
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
function eE(u) {
  return new URLSearchParams(u.location.search).get("hana-asset-base") || null;
}
function tE(u, r) {
  const o = Wb(r), s = eE(u);
  if (!s)
    throw new Error(
      "hana.assets.url() requires the host-issued hana-asset-base query parameter: this page was not opened by the host with an asset base; hana.assets.url() only works inside a Hana app surface."
    );
  const h = new URL(s);
  return h.pathname = `${h.pathname.replace(/\/+$/, "")}/${o}`, h.toString();
}
function rg(u) {
  return new URLSearchParams(u.location.search).get(Q0) || null;
}
function nE(u) {
  if (typeof u != "string" || u.length === 0)
    throw new Error("Invalid plugin API path.");
  const r = u.trim();
  if (!r || r.includes("\\") || r.includes("\0") || r.includes("#") || r.startsWith("//") || /^[a-z][a-z0-9+.-]*:/i.test(r))
    throw new Error("Invalid plugin API path.");
  const o = r.replace(/^\/+/, "");
  if (!o || o.startsWith("./") || o === "api/apps" || o.startsWith("api/apps/"))
    throw new Error("Invalid plugin API path. Use a route path relative to the current plugin.");
  const s = o.indexOf("?"), h = s >= 0 ? o.slice(0, s) : o;
  if (!h)
    throw new Error("Invalid plugin API path.");
  const m = h.split("/");
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
  const v = new URL(`http://hana.local/${o}`);
  return `${m.map((S) => encodeURIComponent(decodeURIComponent(S))).join("/")}${v.search}`;
}
function sg(u, r, o = !1) {
  const s = ug(u);
  let h = nE(r);
  if (o && h.startsWith("_runtime/")) {
    const m = rg(u);
    if (!m) throw new Error("hana.api.url for a managed service requires appSurfaceSession in the iframe URL.");
    const v = /^(_runtime\/[^/?]+)\/(.+)$/.exec(h);
    if (!v || v[2].startsWith("_surface/")) throw new Error("Invalid managed service API path.");
    h = `${v[1]}/_surface/${encodeURIComponent(m)}/${v[2]}`;
  }
  return `${u.location.origin}/api/apps/${encodeURIComponent(s)}/routes/${h}`;
}
function aE(u, r, o, s) {
  const h = rg(u);
  if (!h)
    throw new Error("hana.api.fetch requires appSurfaceSession in the iframe URL.");
  const m = u.fetch?.bind(u) ?? globalThis.fetch?.bind(globalThis);
  if (!m)
    throw new Error("hana.api.fetch requires window.fetch.");
  const v = o ?? {}, b = new Headers(v.headers);
  return b.set(X0, h), s && b.set("X-Hana-Document-Binding", s), m(sg(u, r), {
    ...v,
    headers: b
  });
}
function lE(u) {
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
function iE(u, r) {
  if (typeof r != "object" || r === null) return !1;
  const o = r;
  return u.kind === "global" ? o.kind === "global" : o.kind === "agent" && o.agentId === u.agentId;
}
function cg(u = {}) {
  const r = u.targetWindow ?? qb(), o = u.parentWindow ?? r.parent, s = Vp(r, u.targetOrigin), h = u.requestTimeoutMs ?? 1e4, m = u.idFactory ?? Hb, v = zb(J), b = db({
    targetWindow: r,
    post: J,
    // A host that rebound its bridge to this same document gets a fresh
    // handshake by re-announcing the ready the page already sent.
    reannounceReady: () => {
      ge && P(ve);
    }
  }), S = gb({
    request: Ne,
    post: J,
    targetWindow: r,
    currentView: b,
    requestTimeoutMs: h
  }), E = u.followHostTheme !== !1;
  let T = Bb(r), p = Vb(r), L = null, N = null;
  const O = /* @__PURE__ */ new Set(), V = /* @__PURE__ */ new Set(), B = /* @__PURE__ */ new Set(), le = /* @__PURE__ */ new Set(), re = /* @__PURE__ */ new Set(), ce = /* @__PURE__ */ new Set(), K = /* @__PURE__ */ new Set(), ie = /* @__PURE__ */ new Set(), ne = /* @__PURE__ */ new Set();
  let ue = null, be = null, se = null, ge = !1, ve, G = !1, pe = !1, De = !1, q = Promise.resolve();
  const M = /* @__PURE__ */ new Map();
  let ee = 1, j = null, F = null, ae = null, I = !1;
  function te(C) {
    if (!E || !C) return;
    const Z = r.document;
    Z && Lb(Z, C).catch((Y) => {
      if (u.onThemeError) {
        u.onThemeError(Y);
        return;
      }
      console.error("[hana] failed to follow host theme", Y);
    });
  }
  function J(C, Z) {
    if (u.messageTransport) {
      const Y = u.messageTransport.postMessage(C);
      Y && Y.catch(Z ?? ((k) => console.error("[hana] host message delivery failed", k)));
    } else o.postMessage(C, s);
  }
  function g(C) {
    if (u.messageTransport) return u.messageTransport.onMessage(C);
    const Z = (Y) => {
      Gp(Y, o, s) && C(Y.data);
    };
    return r.addEventListener("message", Z), () => r.removeEventListener("message", Z);
  }
  function D(C, Z) {
    const Y = {
      protocol: dt,
      version: ht,
      kind: "event",
      type: C
    };
    Z !== void 0 && (Y.payload = Z), J(Y);
  }
  function P(C) {
    D("hana.ready", C);
  }
  function $(C) {
    const Z = C instanceof Ca ? C : new Ca({
      code: "HOST_ERROR",
      message: C instanceof Error ? C.message : "Active session subscription failed."
    });
    let Y = !1;
    for (const k of ne)
      if (k.onError) {
        Y = !0;
        try {
          k.onError(Z);
        } catch (Se) {
          console.error("[hana] active session error callback failed", Se);
        }
      }
    Y || console.error("[hana] active session subscription failed", Z);
  }
  function fe() {
    return ne.size > 0 && !De && !pe;
  }
  function me() {
    q = q.catch(() => {
    }).then(async () => {
      for (; G !== fe(); ) {
        if (fe()) {
          try {
            if (await W(), (await Ne(Mr.SUBSCRIBE)).subscribed !== !0) {
              G = !1, pe || $(new Ca({
                code: "HOST_ERROR",
                message: "The host did not establish the active session subscription."
              }));
              return;
            }
            G = !0;
          } catch (C) {
            G = !1, $(C);
            return;
          }
          continue;
        }
        try {
          await W(), await Ne(Mr.UNSUBSCRIBE);
        } catch (C) {
          $(C);
        }
        G = !1;
      }
    });
  }
  function de(C) {
    const Z = r.document?.readyState;
    return Z !== "loading" && Z !== "interactive" ? Promise.resolve() : new Promise((Y, k) => {
      const Se = () => {
        r.clearTimeout(Tt), r.removeEventListener("load", Ve), r.removeEventListener("pagehide", $e);
      }, Ve = () => {
        Se(), Y();
      }, $e = () => {
        Se(), k(new Ca({
          code: "SURFACE_UNAVAILABLE",
          message: "The App surface unloaded before interactive regions could be registered."
        }));
      }, Tt = r.setTimeout(() => {
        Se(), k(new Ca({
          code: "TIMEOUT",
          message: "The App document did not finish loading before interactive regions could be registered."
        }));
      }, C);
      r.addEventListener("load", Ve), r.addEventListener("pagehide", $e);
    });
  }
  function W(C) {
    return de(C ?? h).then(() => {
      P(ve);
    });
  }
  function he(C) {
    const Z = r.requestAnimationFrame?.bind(r), Y = r.cancelAnimationFrame?.bind(r);
    if (Z && Y) {
      const Se = Z(C);
      return () => Y(Se);
    }
    const k = r.setTimeout(() => {
      const Se = r.performance?.now?.() ?? Date.now();
      C(Se);
    }, Math.max(1, Math.round(1e3 / Math.max(p.maxFrameRate, ru))));
    return () => r.clearTimeout(k);
  }
  function We() {
    j && (j(), j = null);
  }
  function rt() {
    j || M.size === 0 || !p.active || p.maxFrameRate <= 0 || (j = he((C) => {
      if (j = null, !p.active || p.maxFrameRate <= 0) return;
      const Z = 1e3 / p.maxFrameRate;
      if (F !== null && C >= F && C - F < Z) {
        rt();
        return;
      }
      F = C;
      const Y = Array.from(M.entries());
      for (const [k, Se] of Y)
        if (M.delete(k))
          try {
            Se(C);
          } catch (Ve) {
            r.setTimeout(() => {
              throw Ve;
            }, 0);
          }
      rt();
    }));
  }
  function Yt(C) {
    if (!Xb(p, C)) {
      p = C;
      for (const Z of B) Z({ ...p });
      if (!p.active || p.maxFrameRate <= 0) {
        We();
        return;
      }
      rt();
    }
  }
  function an(C) {
    if (typeof C == "object" && C !== null && C.protocol === void 0 && C.type === "visibility-changed") {
      const k = Yb(
        C.payload,
        p
      );
      k && Yt(k);
      return;
    }
    const Z = Pi(C);
    if (!Z.ok) return;
    const Y = Z.value;
    if (!b.handleHostMessage(Y) && !S.handleHostMessage(Y)) {
      if (v.handleMessage(Y)) {
        Y.type === Fi.CONTEXT && Y.payload === null && ge && P(ve);
        return;
      }
      if (Y.kind === "request" && Y.type === "hana.document.view-request") {
        const k = typeof Y.payload == "object" && Y.payload !== null ? Y.payload : null, Se = k && typeof k.requestId == "string" ? k.requestId : "", Ve = k && typeof k.documentId == "string" ? k.documentId : "", $e = k && typeof k.viewId == "string" ? k.viewId : "", Tt = k?.revision, Ht = k && typeof k.method == "string" ? k.method.trim() : "";
        if (!Se || !Ve || !$e || !Ht || Ht.length > 128 || !Number.isSafeInteger(Tt) || Number(Tt) < 0) {
          J({
            protocol: dt,
            version: ht,
            id: Y.id,
            kind: "error",
            type: Y.type,
            error: { code: "DOCUMENT_VIEW_REQUEST_INVALID", message: "Invalid document view request." }
          });
          return;
        }
        if (!se) {
          J({
            protocol: dt,
            version: ht,
            id: Y.id,
            kind: "error",
            type: Y.type,
            error: { code: "DOCUMENT_VIEW_REQUEST_UNHANDLED", message: "The document view cannot handle this request." }
          });
          return;
        }
        const At = k?.payload, Ra = se;
        Promise.resolve().then(() => Ra({
          requestId: Se,
          documentId: Ve,
          viewId: $e,
          revision: Tt,
          method: Ht,
          ...Object.prototype.hasOwnProperty.call(k, "payload") ? { payload: At } : {}
        })).then((pn) => {
          J({ protocol: dt, version: ht, id: Y.id, kind: "response", type: Y.type, payload: pn });
        }, (pn) => {
          J({
            protocol: dt,
            version: ht,
            id: Y.id,
            kind: "error",
            type: Y.type,
            error: { code: "DOCUMENT_VIEW_REQUEST_FAILED", message: pn instanceof Error ? pn.message : "Document view request failed." }
          });
        });
        return;
      }
      if (Y.kind === "request" && Y.type === "hana.document.request") {
        const k = Y.payload, Se = typeof k == "object" && k !== null ? k : null, Ve = Se && typeof Se.requestId == "string" ? Se.requestId : "", $e = Se?.kind, Tt = Se?.revision;
        if (!Ve || !["save", "prepareClose", "revert", "undo", "redo"].includes(String($e)) || !Number.isSafeInteger(Tt)) {
          J({
            protocol: dt,
            version: ht,
            id: Y.id,
            kind: "error",
            type: Y.type,
            error: { code: "DOCUMENT_REQUEST_INVALID", message: "Invalid document request." }
          });
          return;
        }
        if (!be) {
          J({
            protocol: dt,
            version: ht,
            id: Y.id,
            kind: "error",
            type: Y.type,
            error: { code: "DOCUMENT_REQUEST_UNHANDLED", message: "The document editor cannot handle this request." }
          });
          return;
        }
        const Ht = {
          requestId: Ve,
          kind: $e,
          revision: Tt
        };
        Promise.resolve(be(Ht)).then((At) => {
          J({ protocol: dt, version: ht, id: Y.id, kind: "response", type: Y.type, payload: At });
        }, (At) => {
          J({
            protocol: dt,
            version: ht,
            id: Y.id,
            kind: "error",
            type: Y.type,
            error: { code: "DOCUMENT_REQUEST_FAILED", message: At instanceof Error ? At.message : "Document request failed." }
          });
        });
        return;
      }
      if (Y.kind === "request" && Y.type === Ie.UI_ACTION) {
        const k = r.document, Se = k ? Jp(k, Y.payload, Pb(r, N)) : { ok: !1, code: "UI_ACTION_DOCUMENT_UNAVAILABLE", error: "No document is available." };
        Se.ok === !0 ? J({
          protocol: dt,
          version: ht,
          id: Y.id,
          kind: "response",
          type: Ie.UI_ACTION,
          payload: Se.result
        }) : J({
          protocol: dt,
          version: ht,
          id: Y.id,
          kind: "error",
          type: Ie.UI_ACTION,
          error: { code: Se.code, message: Se.error, ...Se.result ? { details: Se.result } : {} }
        });
        return;
      }
      if (Y.kind === "event") {
        if (Y.type === "hana.document.binding") {
          const k = Y.payload, Se = typeof k == "object" && k !== null ? k.access : null;
          ue = typeof Se?.bindingId == "string" && Se.bindingId ? Se.bindingId : null;
          return;
        }
        if (Y.type === Ql.THEME_CHANGED) {
          if (typeof Y.payload != "object" || Y.payload === null) return;
          const k = Y.payload, Se = typeof k.theme == "string" ? k.theme : T.theme, Ve = typeof k.theme == "string" && k.theme !== T.theme;
          T = {
            theme: Se,
            cssUrl: typeof k.cssUrl == "string" ? k.cssUrl : T.cssUrl,
            appearance: k.appearance === "light" || k.appearance === "dark" ? k.appearance : Ve ? void 0 : T.appearance,
            palettes: Ib(k.palettes) ? k.palettes : Ve ? void 0 : T.palettes
          };
          for (const $e of O) $e({ ...T });
          te(T.cssUrl);
          return;
        }
        if (Y.type === Ql.SURFACE_ENVELOPE_CHANGED) {
          const k = Qb(Y.payload);
          if (!k) return;
          L = k;
          for (const Se of V) Se(xo(L));
          return;
        }
        if (Y.type === Ql.SURFACE_RUNTIME_CHANGED) {
          const k = Gb(Y.payload, p);
          k && Yt(k);
          return;
        }
        if (Y.type === ab.CONTEXT) {
          const k = Y.payload === null ? null : Kb(Y.payload);
          if (Y.payload !== null && k === null) return;
          const Se = k?.appId !== N?.appId || k?.slot !== N?.slot || k?.cardInstanceId !== N?.cardInstanceId || k?.instanceKey !== N?.instanceKey || k?.embeddedSessionId !== N?.embeddedSessionId || k?.originSessionId !== N?.originSessionId || k?.viewState?.bindingId !== N?.viewState?.bindingId || k?.viewState?.viewKind !== N?.viewState?.viewKind || k?.viewState?.available !== N?.viewState?.available;
          if (b.applySurfaceContext(k === null ? null : { appId: k.appId, cardInstanceId: k.cardInstanceId, instanceKey: k.instanceKey ?? null }), N = k, Se)
            for (const Ve of le) Ve(N ? Ro(N) : null);
          return;
        }
        if (Y.type === xp.ACTIVE_CHANGED) {
          if (pe) return;
          const k = Zb(Y.payload);
          if (!k) return;
          for (const Se of ne) Se.callback(k);
          return;
        }
        if (Y.type === xp.ERROR) {
          const k = Jb(Y.payload);
          if (!k) return;
          G = !1, pe = !0, $(k), me();
          return;
        }
        if (Y.type === Ql.STORAGE_CHANGED) {
          if (typeof Y.payload != "object" || Y.payload === null) return;
          const k = Y.payload.keys, Se = Array.isArray(k) ? k.filter((Ve) => typeof Ve == "string") : [];
          for (const Ve of re) Ve(Se.slice());
          return;
        }
        if (Y.type === k0.CHANGED) {
          if (typeof Y.payload != "object" || Y.payload === null) return;
          const k = Y.payload, Se = k.keys, Ve = Array.isArray(Se) ? Se.filter(($e) => typeof $e == "string") : [];
          for (const $e of ce)
            iE($e.scope, k.scope) && $e.callback(Ve.slice());
          return;
        }
        if (Y.type === Ql.PANEL_EVENT) {
          if (typeof Y.payload != "object" || Y.payload === null) return;
          const k = Y.payload, Se = typeof k.sectionId == "string" ? k.sectionId : null, Ve = k.kind;
          if (!Se || Ve !== "select" && Ve !== "action" && Ve !== "toggle") return;
          const $e = {
            sectionId: Se,
            kind: Ve,
            ...typeof k.itemId == "string" ? { itemId: k.itemId } : {},
            ...typeof k.checked == "boolean" ? { checked: k.checked } : {}
          };
          for (const Tt of K) Tt($e);
          return;
        }
        if (Y.type === Ql.PANEL_REFRESH)
          for (const k of ie) k();
      }
    }
  }
  g(an), r.addEventListener("pagehide", (C) => {
    v.clear(), De = !0, me(), C?.persisted === !1 && (I = !0, b.dispose(), ae?.dispose(), S.dispose());
  }), r.addEventListener("pageshow", () => {
    De && (De = !1, me());
  });
  function Ne(C, Z, Y = {}) {
    const k = m(), Se = Y.timeoutMs ?? h;
    return new Promise((Ve, $e) => {
      let Tt = () => {
      };
      const Ht = () => {
        Tt(), r.clearTimeout(Ra);
      }, At = (ja) => {
        const Wl = Pi(ja);
        if (!Wl.ok) return;
        const gn = Wl.value;
        gn.id !== k || gn.type !== C || (gn.kind === "response" && (Ht(), Ve(gn.payload)), gn.kind === "error" && gn.error && (Ht(), $e(new Ca(gn.error))));
      }, Ra = r.setTimeout(() => {
        Ht(), $e(new Ca({
          code: "TIMEOUT",
          message: `Plugin host request timed out: ${C}.`
        }));
      }, Se), pn = {
        protocol: dt,
        version: ht,
        id: k,
        kind: "request",
        type: C
      };
      Z !== void 0 && (pn.payload = Z);
      try {
        Tt = g(At), J(pn, (ja) => {
          Ht(), $e(ja);
        });
      } catch (ja) {
        Ht(), $e(ja);
      }
    });
  }
  function Qe(C) {
    return {
      get(Z, Y) {
        return Ne(Kl.GET, { scope: C, key: Z }, Y);
      },
      getAll(Z) {
        return Ne(Kl.GET_ALL, { scope: C }, Z);
      },
      set(Z, Y, k) {
        return Ne(Kl.SET, { scope: C, key: Z, value: Y }, k);
      },
      delete(Z, Y) {
        return Ne(Kl.DELETE, { scope: C, key: Z }, Y);
      },
      keys(Z) {
        return Ne(Kl.KEYS, { scope: C }, Z);
      },
      onChanged(Z) {
        if (C.kind === "agent" && !C.agentId)
          throw new Error(
            "hana.storage.agent() with no agentId cannot subscribe with onChanged — a subscription outlives any single request, so pass an explicit agentId to subscribe to a stable scope."
          );
        const Y = { scope: C, callback: Z };
        return ce.add(Y), () => {
          ce.delete(Y);
        };
      }
    };
  }
  const Xt = {
    ready(C) {
      ge = !0, ve = C, P(C);
    },
    inputPanel: v.api,
    assets: {
      url(C) {
        return tE(r, C);
      }
    },
    api: {
      url(C) {
        return sg(r, C, !0);
      },
      fetch(C, Z) {
        return aE(r, C, Z, ue);
      }
    },
    ui: {
      resize(C) {
        D(Ie.UI_RESIZE, C);
      }
    },
    theme: {
      getSnapshot() {
        return { ...T };
      },
      subscribe(C) {
        return O.add(C), C({ ...T }), () => {
          O.delete(C);
        };
      }
    },
    envelope: {
      getSnapshot() {
        return L ? xo(L) : null;
      },
      subscribe(C) {
        return V.add(C), C(L ? xo(L) : null), () => {
          V.delete(C);
        };
      }
    },
    lifecycle: {
      getSnapshot() {
        return { ...p };
      },
      subscribe(C) {
        return B.add(C), C({ ...p }), () => {
          B.delete(C);
        };
      }
    },
    cards: {
      open(C, Z) {
        if (typeof C != "string" || !C.trim())
          return Promise.reject(new TypeError("hana.cards.open requires a non-empty declared card ID."));
        let Y;
        if (Z !== void 0) {
          if (typeof Z != "object" || Z === null || Array.isArray(Z))
            return Promise.reject(new TypeError("hana.cards.open options must be an object."));
          if (Object.keys(Z).some((Se) => Se !== "instanceKey"))
            return Promise.reject(new TypeError("hana.cards.open options accepts only instanceKey."));
          const k = Pp(Z.instanceKey);
          if (k === null)
            return Promise.reject(new TypeError("hana.cards.open instanceKey must be a non-empty string of at most 256 code units without NUL."));
          Y = k;
        }
        return Ne(Fp.OPEN, {
          cardId: C.trim(),
          ...Y === void 0 ? {} : { instanceKey: Y }
        });
      }
    },
    surface: {
      getContext() {
        return N ? Ro(N) : null;
      },
      onContextChanged(C) {
        return le.add(C), C(N ? Ro(N) : null), () => {
          le.delete(C);
        };
      },
      setInteractiveRegions(C, Z) {
        const Y = K0({ regions: C });
        return Y.ok === !1 ? Promise.reject(new TypeError(Y.error)) : ge ? de(Z?.timeoutMs ?? h).then(() => (P(ve), Ne(Ho.SET_INTERACTIVE_REGIONS, Y.value, Z))) : Ne(Ho.SET_INTERACTIVE_REGIONS, Y.value, Z);
      }
    },
    sessions: {
      getActive(C) {
        return W(C?.timeoutMs).then(() => Ne(Mr.GET_ACTIVE, void 0, C));
      },
      focus(C, Z) {
        return !C || typeof C.sessionId != "string" || !C.sessionId.trim() ? Promise.reject(new TypeError("hana.sessions.focus requires a non-empty sessionId.")) : W(Z?.timeoutMs).then(() => Ne(
          Mr.FOCUS,
          { sessionId: C.sessionId.trim() },
          Z
        ));
      },
      onActiveChanged(C, Z) {
        const Y = { callback: C, onError: Z };
        return pe = !1, ne.add(Y), me(), () => {
          ne.delete(Y) && me();
        };
      }
    },
    performance: {
      requestAnimationFrame(C) {
        const Z = ee;
        return ee += 1, M.set(Z, C), rt(), Z;
      },
      cancelAnimationFrame(C) {
        M.delete(C), M.size === 0 && We();
      }
    },
    host: {
      request: Ne
    },
    chrome: S.api,
    toast: {
      show(C, Z) {
        return Ne(Ie.TOAST_SHOW, C, Z);
      }
    },
    external: {
      open(C, Z) {
        return Ne(Ie.EXTERNAL_OPEN, $b(C), Z);
      }
    },
    clipboard: {
      writeText(C, Z) {
        return Ne(
          Ie.CLIPBOARD_WRITE_TEXT,
          Fb(C),
          Z
        );
      }
    },
    resources: {
      open(C, Z) {
        return Ne(Ie.RESOURCE_OPEN, C, Z);
      },
      pick(C = {}, Z) {
        return Ne(Ie.RESOURCE_PICK, C, Z);
      },
      saveFile(C, Z) {
        return Ne(Ie.RESOURCE_SAVE_FILE, C, Z);
      },
      requestAccess(C, Z) {
        return Ne(
          Ie.RESOURCE_REQUEST_ACCESS,
          C,
          Z
        );
      }
    },
    document: {
      getContext(C) {
        return Ne("hana.document.get-context", void 0, C);
      },
      read(C) {
        return Ne("hana.document.read", void 0, C);
      },
      reportStatus(C, Z) {
        return Ne("hana.document.report-status", C, Z);
      },
      open(C, Z) {
        return Ne("hana.document.open", C, Z);
      },
      rebind(C, Z) {
        return Ne("hana.document.rebind", C, Z);
      },
      openDrop(C, Z) {
        if (C.defaultPrevented) return Promise.resolve(null);
        const Y = C.dataTransfer?.getData("application/x-hana-file-drag") || "";
        if (Y) return Ne("hana.document.open-drop", { dragId: Y }, Z);
        const k = Array.from(C.dataTransfer?.files || []);
        return k.length !== 1 ? Promise.resolve(null) : Ne("hana.document.open-drop", { file: k[0] }, Z);
      },
      onRequest(C) {
        return be = C, () => {
          be === C && (be = null);
        };
      },
      onViewRequest(C) {
        return se = C, () => {
          se === C && (se = null);
        };
      }
    },
    state: {
      get(C, Z) {
        const Y = typeof C == "string" && C ? { key: C } : {};
        return Ne(Ie.STATE_GET, Y, Z);
      },
      set(C, Z, Y) {
        const k = typeof C == "string" ? { key: C, value: Z } : { state: C };
        return Ne(Ie.STATE_SET, k, Y);
      }
    },
    storage: {
      get(C, Z) {
        return Ne(Ie.STORAGE_GET, { key: C }, Z);
      },
      getAll(C) {
        return Ne(Ie.STORAGE_GET_ALL, {}, C);
      },
      set(C, Z, Y) {
        return Ne(Ie.STORAGE_SET, { key: C, value: Z }, Y);
      },
      delete(C, Z) {
        return Ne(Ie.STORAGE_DELETE, { key: C }, Z);
      },
      onChanged(C) {
        return re.add(C), () => {
          re.delete(C);
        };
      },
      global: Qe({ kind: "global" }),
      agent(C) {
        return Qe({ kind: "agent", agentId: C });
      }
    },
    emit(C, Z, Y, k) {
      const Se = {
        name: C,
        userGesture: lE(r)
      };
      return arguments.length >= 2 && (Se.payload = Z), typeof Y == "string" && Y.trim() && (Se.to = Y.trim()), Ne(Ie.EMIT, Se, k);
    },
    track(C, Z, Y) {
      const k = { name: C };
      return arguments.length >= 2 && (k.payload = Z), Ne(Ie.TRACK, k, Y);
    },
    panel: {
      set(C, Z) {
        return Ne(Ie.PANEL_SET, C, Z);
      },
      onEvent(C) {
        return K.add(C), () => {
          K.delete(C);
        };
      },
      onRefresh(C) {
        return ie.add(C), () => {
          ie.delete(C);
        };
      }
    }
  };
  return tg(Xt, () => I ? null : (ae ??= Rb({
    request: Ne,
    currentView: b,
    getContext: () => N,
    subscribeContext: (C) => (le.add(C), () => {
      le.delete(C);
    }),
    requestTimeoutMs: h
  }), ae.api)), Xt;
}
var Hp = null;
function Te() {
  return Hp ??= cg(), Hp;
}
var og = {
  ready(u) {
    return Te().ready(u);
  },
  inputPanel: {
    getContext() {
      return Te().inputPanel.getContext();
    },
    onContextChanged(u) {
      return Te().inputPanel.onContextChanged(u);
    },
    onSubmit(u) {
      return Te().inputPanel.onSubmit(u);
    },
    setPresentation(u) {
      return Te().inputPanel.setPresentation(u);
    }
  },
  assets: {
    url(u) {
      return Te().assets.url(u);
    }
  },
  api: {
    url(u) {
      return Te().api.url(u);
    },
    fetch(u, r) {
      return Te().api.fetch(u, r);
    }
  },
  ui: {
    resize(u) {
      return Te().ui.resize(u);
    }
  },
  theme: {
    getSnapshot() {
      return Te().theme.getSnapshot();
    },
    subscribe(u) {
      return Te().theme.subscribe(u);
    }
  },
  envelope: {
    getSnapshot() {
      return Te().envelope.getSnapshot();
    },
    subscribe(u) {
      return Te().envelope.subscribe(u);
    }
  },
  lifecycle: {
    getSnapshot() {
      return Te().lifecycle.getSnapshot();
    },
    subscribe(u) {
      return Te().lifecycle.subscribe(u);
    }
  },
  cards: {
    open(u, r) {
      return Te().cards.open(u, r);
    }
  },
  surface: {
    getContext() {
      return Te().surface.getContext();
    },
    onContextChanged(u) {
      return Te().surface.onContextChanged(u);
    },
    setInteractiveRegions(u, r) {
      return Te().surface.setInteractiveRegions(u, r);
    }
  },
  sessions: {
    getActive(u) {
      return Te().sessions.getActive(u);
    },
    focus(u, r) {
      return Te().sessions.focus(u, r);
    },
    onActiveChanged(u, r) {
      return Te().sessions.onActiveChanged(u, r);
    }
  },
  performance: {
    requestAnimationFrame(u) {
      return Te().performance.requestAnimationFrame(u);
    },
    cancelAnimationFrame(u) {
      return Te().performance.cancelAnimationFrame(u);
    }
  },
  host: {
    request(u, r, o) {
      return Te().host.request(u, r, o);
    }
  },
  chrome: {
    set(u, r) {
      return Te().chrome.set(u, r);
    },
    onAction(u) {
      return Te().chrome.onAction(u);
    },
    registerScrollSource(u) {
      return Te().chrome.registerScrollSource(u);
    }
  },
  toast: {
    show(u, r) {
      return Te().toast.show(u, r);
    }
  },
  external: {
    open(u, r) {
      return Te().external.open(u, r);
    }
  },
  clipboard: {
    writeText(u, r) {
      return Te().clipboard.writeText(u, r);
    }
  },
  resources: {
    open(u, r) {
      return Te().resources.open(u, r);
    },
    pick(u, r) {
      return Te().resources.pick(u, r);
    },
    saveFile(u, r) {
      return Te().resources.saveFile(u, r);
    },
    requestAccess(u, r) {
      return Te().resources.requestAccess(u, r);
    }
  },
  document: {
    getContext(u) {
      return Te().document.getContext(u);
    },
    read(u) {
      return Te().document.read(u);
    },
    reportStatus(u, r) {
      return Te().document.reportStatus(u, r);
    },
    open(u, r) {
      return Te().document.open(u, r);
    },
    rebind(u, r) {
      return Te().document.rebind(u, r);
    },
    openDrop(u, r) {
      return Te().document.openDrop(u, r);
    },
    onRequest(u) {
      return Te().document.onRequest(u);
    },
    onViewRequest(u) {
      return Te().document.onViewRequest(u);
    }
  },
  state: {
    get(u, r) {
      return Te().state.get(u, r);
    },
    set(u, r, o) {
      return Te().state.set(u, r, o);
    }
  },
  storage: {
    get(u, r) {
      return Te().storage.get(u, r);
    },
    getAll(u) {
      return Te().storage.getAll(u);
    },
    set(u, r, o) {
      return Te().storage.set(u, r, o);
    },
    delete(u, r) {
      return Te().storage.delete(u, r);
    },
    onChanged(u) {
      return Te().storage.onChanged(u);
    },
    get global() {
      return Te().storage.global;
    },
    agent(u) {
      return Te().storage.agent(u);
    }
  },
  emit(u, r, o, s) {
    return Te().emit(u, r, o, s);
  },
  track(u, r, o) {
    return Te().track(u, r, o);
  },
  panel: {
    set(u, r) {
      return Te().panel.set(u, r);
    },
    onEvent(u) {
      return Te().panel.onEvent(u);
    },
    onRefresh(u) {
      return Te().panel.onRefresh(u);
    }
  }
};
tg(og, () => ng(Te()));
function Gr(u) {
  return u.hanaAppWindow;
}
function mn(u) {
  const r = Gr(u);
  if (!r) throw Object.assign(new Error("This App surface is not an App-owned native window."), { code: "APP_WINDOW_UNAVAILABLE" });
  return r;
}
function uE(u) {
  return (typeof window < "u" ? Gr(u()) : void 0)?.onDocumentAction?.((o) => {
    const s = Jp(u().document, o, !0);
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
      const h = mn(u());
      if (!h.registerInspectionSurface) throw Object.assign(new Error("Update Hana to register App inspection surfaces."), { code: "APP_SDK_HOST_UNSUPPORTED" });
      return h.registerInspectionSurface(o, s);
    },
    control: (o) => mn(u()).control(o),
    close: () => mn(u()).close()
  };
}
var rE = /* @__PURE__ */ new Set([
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
  ...Object.values(Kl),
  ...Object.values(Fp),
  Ho.SET_INTERACTIVE_REGIONS,
  "hana.document.get-context",
  "hana.document.read",
  "hana.document.report-status",
  "hana.document.open",
  "hana.document.rebind",
  "hana.document.open-drop"
]);
function fg() {
  if (typeof window > "u") throw new Error("@hana/app-sdk/ui requires a browser App iframe.");
  return window;
}
function sE(u) {
  if (!Yo(u.location?.pathname ?? ""))
    throw new Error("@hana/app-sdk/ui requires an App surface route under /api/apps/:appId/ui/ or a scoped service mount.");
}
function cE(u) {
  if (!rE.has(u))
    throw new Error(`@hana/app-sdk/ui does not expose host request type: ${u}`);
}
function oE(u) {
  return {
    get global() {
      return u().storage.global;
    },
    agent(r) {
      return u().storage.agent(r);
    }
  };
}
function fE(u, r = fg, o = {}) {
  return {
    window: uE(r),
    surfaces: {
      onEvent(s, h) {
        if (typeof s != "string" || !s.trim() || s.length > 256 || typeof h != "function")
          throw new TypeError("surfaces.onEvent requires a surface id and a listener.");
        return mn(r()).onMessage((m) => {
          const v = Pi(m);
          if (!v.ok || v.value.kind !== "event" || v.value.type !== "hana.app-surface.event") return;
          const b = v.value.payload;
          if (!b || typeof b != "object" || Array.isArray(b)) return;
          const S = b;
          S.surfaceId !== s || typeof S.type != "string" || !S.type.trim() || h({ surfaceId: s, type: S.type, ...S.payload === void 0 ? {} : { payload: S.payload } });
        });
      }
    },
    appEvents: {
      on(s, h) {
        if (typeof s != "string" || !s.trim() || s.length > 128 || typeof h != "function") throw new TypeError("appEvents.on requires an event name and a listener.");
        const m = r(), v = Yo(m.location?.pathname ?? "");
        if (!v)
          throw new Error("@hana/app-sdk/ui requires an App surface route under /api/apps/:appId/ui/ or a scoped service mount.");
        const b = v.appId, S = (N) => {
          const O = Pi(N);
          if (!O.ok || O.value.kind !== "event" || O.value.type !== "hana.app.event") return;
          const V = O.value.payload;
          V?.source !== `app:${b}` || V.type !== s || !V.payload || typeof V.payload != "object" || Array.isArray(V.payload) || h(V.payload);
        }, E = o.messageTransport ?? Gr(m);
        if (E) return E.onMessage(S);
        const T = o.parentWindow ?? m.parent, p = Vp(m, o.targetOrigin), L = (N) => {
          Gp(N, T, p) && S(N.data);
        };
        return m.addEventListener("message", L), () => m.removeEventListener("message", L);
      }
    },
    instances: {
      onChanged(s) {
        return mn(r()).onMessage((h) => {
          if (!h || typeof h != "object") return;
          const m = h;
          if (m.protocol !== dt || m.version !== ht || m.kind !== "event" || m.type !== "hana.app-instance.changed") return;
          const v = m.payload;
          v && typeof v.instanceId == "string" && typeof v.revision == "number" && Number.isSafeInteger(v.revision) && typeof v.state == "string" && s({ instanceId: v.instanceId, revision: v.revision, state: v.state });
        });
      }
    },
    environments: {
      onChanged(s) {
        if (typeof s != "function") throw new TypeError("environments.onChanged requires a listener.");
        return mn(r()).onMessage((h) => {
          const m = Pi(h);
          if (!m.ok || m.value.kind !== "event" || m.value.type !== "hana.app-environment.changed") return;
          const v = m.value.payload;
          v && typeof v.environmentId == "string" && typeof v.revision == "number" && Number.isSafeInteger(v.revision) && typeof v.state == "string" && s({ environmentId: v.environmentId, revision: v.revision, state: v.state });
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
      fetch(s, h) {
        return u().api.fetch(s, h);
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
    cards: { open(s, h) {
      return u().cards.open(s, h);
    } },
    surface: {
      setInteractiveRegions(s, h) {
        return u().surface.setInteractiveRegions(s, h);
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
      focus(s, h) {
        return u().sessions.focus(s, h);
      },
      onActiveChanged(s, h) {
        return u().sessions.onActiveChanged(s, h);
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
      set(s, h) {
        return u().chrome.set(s, h);
      },
      onAction(s) {
        return u().chrome.onAction(s);
      },
      registerScrollSource(s) {
        return u().chrome.registerScrollSource(s);
      }
    },
    host: {
      request(s, h, m) {
        return cE(s), u().host.request(s, h, m);
      }
    },
    toast: { show(s, h) {
      return u().toast.show(s, h);
    } },
    external: { open(s, h) {
      return u().external.open(s, h);
    } },
    clipboard: { writeText(s, h) {
      return u().clipboard.writeText(s, h);
    } },
    resources: {
      open(s, h) {
        return u().resources.open(s, h);
      },
      pick(s, h) {
        return u().resources.pick(s, h);
      },
      saveFile(s, h) {
        return u().resources.saveFile(s, h);
      },
      requestAccess(s, h) {
        return u().resources.requestAccess(s, h);
      }
    },
    document: {
      getContext(s) {
        return u().document.getContext(s);
      },
      read(s) {
        return u().document.read(s);
      },
      reportStatus(s, h) {
        return u().document.reportStatus(s, h);
      },
      open(s, h) {
        return u().document.open(s, h);
      },
      rebind(s, h) {
        return u().document.rebind(s, h);
      },
      openDrop(s, h) {
        return u().document.openDrop(s, h);
      },
      onRequest(s) {
        return u().document.onRequest(s);
      },
      onViewRequest(s) {
        return u().document.onViewRequest(s);
      }
    },
    state: {
      get(s, h) {
        return u().state.get(s, h);
      },
      set(s, h, m) {
        return u().state.set(s, h, m);
      }
    },
    storage: oE(u),
    emit(s, h, m, v) {
      return u().emit(s, h, m, v);
    },
    track(s, h, m) {
      return u().track(s, h, m);
    },
    panel: {
      set(s, h) {
        return u().panel.set(s, h);
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
        const h = ng(u());
        return h ? h.enable(s) : Promise.reject(Object.assign(new Error("App view-state recovery is unavailable on this surface."), { code: "VIEW_STATE_UNAVAILABLE" }));
      }
    }
  };
}
var dE, mt = fE(() => {
  const u = fg();
  sE(u);
  const r = Gr(u);
  return r ? dE ??= cg({ targetWindow: u, messageTransport: r }) : og;
});
function Hn(...u) {
  return u.filter(Boolean).join(" ");
}
const qp = {
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
}, hE = {
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
function mE({ mode: u = "inherit", theme: r, className: o, style: s, children: h, "data-testid": m = "hana-plugin-theme", ...v }) {
  const b = typeof r == "string" ? r : void 0, S = pE(u, r);
  return d.jsx("div", { ...v, "data-testid": m, className: Hn("hana-plugin-theme", o), "data-hana-theme-mode": u, "data-hana-theme": u === "hana" ? b : void 0, style: { ...S, ...s }, children: h });
}
function pE(u, r) {
  if (u === "inherit")
    return {};
  const o = gE(u, r), s = {};
  for (const [h, m] of Object.entries(hE)) {
    const v = o?.[h];
    v && (s[m] = v);
  }
  return s;
}
function gE(u, r) {
  if (typeof r == "string")
    return qp[r];
  if (r)
    return r;
  if (u === "hana")
    return qp["warm-paper"];
}
const _e = H.forwardRef(function({ variant: r = "secondary", size: o = "md", loading: s = !1, iconLeft: h, iconRight: m, disabled: v, className: b, children: S, type: E = "button", ...T }, p) {
  return d.jsxs("button", { ...T, ref: p, type: E, disabled: v || s, className: Hn("hana-plugin-button", `hana-plugin-button-${r}`, `hana-plugin-button-${o}`, s && "hana-plugin-button-loading", b), children: [s ? d.jsx("span", { className: "hana-plugin-spinner", "aria-hidden": !0 }) : h, S && d.jsx("span", { className: "hana-plugin-button-label", children: S }), !s && m] });
});
H.forwardRef(function({ label: r, size: o = "md", variant: s = "ghost", className: h, children: m, type: v = "button", ...b }, S) {
  return d.jsx("button", { ...b, ref: S, type: v, "aria-label": r, title: b.title || r, className: Hn("hana-plugin-icon-button", `hana-plugin-icon-button-${o}`, `hana-plugin-icon-button-${s}`, h), children: m });
});
const St = H.forwardRef(function({ label: r, hint: o, error: s, id: h, className: m, inputClassName: v, ...b }, S) {
  const E = H.useId(), T = h || E;
  return d.jsx(dg, { label: r, hint: o, error: s, htmlFor: T, className: m, children: d.jsx("input", { ...b, ref: S, id: T, "aria-invalid": !!s, className: Hn("hana-plugin-input", v) }) });
});
H.forwardRef(function({ label: r, hint: o, error: s, id: h, className: m, textareaClassName: v, rows: b = 4, ...S }, E) {
  const T = H.useId(), p = h || T;
  return d.jsx(dg, { label: r, hint: o, error: s, htmlFor: p, className: m, children: d.jsx("textarea", { ...S, ref: E, id: p, rows: b, "aria-invalid": !!s, className: Hn("hana-plugin-textarea", v) }) });
});
H.forwardRef(function({ checked: r, onChange: o, label: s, disabled: h, className: m, onClick: v, type: b = "button", ...S }, E) {
  const T = typeof s == "string" ? s : S["aria-label"];
  return d.jsxs("span", { className: Hn("hana-plugin-switch-wrap", m), children: [d.jsx("button", { ...S, ref: E, type: b, role: "switch", "aria-checked": r, "aria-label": T, disabled: h, className: Hn("hana-plugin-switch", r && "hana-plugin-switch-on"), onClick: (p) => {
    v?.(p), !p.defaultPrevented && !h && o?.(!r);
  }, children: d.jsx("span", { className: "hana-plugin-switch-thumb", "aria-hidden": !0 }) }), s && d.jsx("span", { className: "hana-plugin-switch-label", children: s })] });
});
function dg({ label: u, hint: r, error: o, htmlFor: s, className: h, children: m }) {
  return d.jsxs("div", { className: Hn("hana-plugin-field", h), children: [u && d.jsx("label", { className: "hana-plugin-field-label", htmlFor: s, children: u }), r && d.jsx("div", { className: "hana-plugin-field-hint", children: r }), m, o && d.jsx("div", { className: "hana-plugin-field-error", children: o })] });
}
function Mn({ title: u, description: r, actions: o, footer: s, children: h, className: m, ...v }) {
  return d.jsxs("section", { ...v, className: Hn("hana-plugin-card", m), children: [(u || r || o) && d.jsxs("header", { className: "hana-plugin-card-header", children: [d.jsxs("div", { className: "hana-plugin-card-heading", children: [u && d.jsx("h2", { className: "hana-plugin-card-title", children: u }), r && d.jsx("p", { className: "hana-plugin-card-description", children: r })] }), o && d.jsx("div", { className: "hana-plugin-card-actions", children: o })] }), d.jsx("div", { className: "hana-plugin-card-body", children: h }), s && d.jsx("footer", { className: "hana-plugin-card-footer", children: s })] });
}
function tl({ icon: u, title: r, description: o, action: s, className: h, ...m }) {
  return d.jsxs("div", { ...m, className: Hn("hana-plugin-empty", h), children: [u && d.jsx("div", { className: "hana-plugin-empty-icon", children: u }), d.jsx("div", { className: "hana-plugin-empty-title", children: r }), o && d.jsx("div", { className: "hana-plugin-empty-description", children: o }), s && d.jsx("div", { className: "hana-plugin-empty-action", children: s })] });
}
const hg = (u) => u.replace(/^\/+/, "");
async function mg(u) {
  const r = await u.text();
  try {
    const o = JSON.parse(r);
    return o && typeof o == "object" && o.status == null && (o.status = u.status), o;
  } catch {
    return { ok: !1, stage: "http", status: u.status, message: `HTTP ${u.status}：${(r || "无响应体").slice(0, 200)}` };
  }
}
function Jl(u) {
  if (!u) return "无响应";
  const r = u.message || u.error || u.code || (typeof u == "string" ? u : "") || "", o = u.status ? `（HTTP ${u.status}）` : "";
  if (r) return `${String(r).slice(0, 300)}${o}`;
  try {
    return `${JSON.stringify(u).slice(0, 300)}${o}`;
  } catch {
    return `未知错误${o}`;
  }
}
async function Be(u) {
  const r = await mt.api.fetch(hg(u));
  return mg(r);
}
async function Pe(u, r) {
  const o = await mt.api.fetch(hg(u), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(r)
  });
  return mg(o);
}
async function Lp(u, r, o = 3e4) {
  let s;
  try {
    return await Promise.race([
      Pe(u, r),
      new Promise((h, m) => {
        s = setTimeout(() => m(new Error(`请求超时（${o / 1e3}s）`)), o);
      })
    ]);
  } finally {
    s && clearTimeout(s);
  }
}
async function eu(u, r = {}) {
  const o = r.timeoutMs ?? 48e4, s = Date.now();
  for (; Date.now() - s < o; ) {
    await new Promise((m) => setTimeout(m, 5e3));
    const h = await Be(u).catch(() => null);
    if (h && h.running === !1 && (!r.kind || h.kind === r.kind) && h.lastResult) return h.lastResult;
  }
  return { ok: !1, stage: "timeout", message: `等待超时（${Math.round(o / 6e4)} 分钟），任务可能仍在运行；稍后刷新查看结果。` };
}
async function Lo(u = 480 * 1e3) {
  return eu("/api/import/status", { timeoutMs: u });
}
let jo = null;
async function Ir(u = !1) {
  if (jo && !u) return jo;
  const r = await Be("/api/pdf/engine").catch(() => ({ ok: !1, error: "探测请求失败" }));
  return jo = r, r;
}
function pg(u, r) {
  const o = /^#\s+(.+?)（([^（）]+),\s*(\d{4}[^)）]*)）$/.exec(String(u || "").trim());
  return { title: o ? o[1] : r, meta: o ? `${o[2].trim()} · ${o[3]}` : "" };
}
function $l({ id: u, value: r, onChange: o, options: s, placeholder: h, allowCustom: m = !1 }) {
  const [v, b] = H.useState(r), [S, E] = H.useState(!1), [T, p] = H.useState(0), [L, N] = H.useState(null), O = H.useRef(null), V = H.useRef(null);
  H.useEffect(() => {
    b(r);
  }, [r]);
  const B = String(v || "").trim().toLowerCase(), le = H.useMemo(() => {
    if (!B) return s;
    const ie = s.filter((ne) => ne.value.toLowerCase().includes(B) || ne.label.toLowerCase().includes(B));
    return ie.length ? ie : s;
  }, [s, B]), re = H.useCallback(() => {
    const ie = O.current;
    if (!ie) return;
    const ne = ie.getBoundingClientRect(), ue = window.innerHeight || document.documentElement.clientHeight || 720, be = ue - ne.bottom - 8, se = ne.top - 8, ge = be < 160 && se > be, ve = Math.max(120, Math.min(340, Math.floor(ge ? se : be))), G = ge ? Math.max(4, ne.top - ve - 2) : Math.max(4, Math.min(ne.bottom + 2, ue - ve - 4));
    N({ left: ne.left, width: Math.max(ne.width, 180), top: G, maxH: ve });
  }, []), ce = H.useCallback(() => {
    re(), E(!0), p(0);
  }, [re]);
  H.useEffect(() => {
    if (!S) return;
    const ie = (ue) => {
      const be = ue.target;
      O.current?.contains(be) || V.current?.contains(be) || E(!1);
    }, ne = () => re();
    return document.addEventListener("pointerdown", ie, !0), window.addEventListener("scroll", ne, !0), window.addEventListener("resize", ne), () => {
      document.removeEventListener("pointerdown", ie, !0), window.removeEventListener("scroll", ne, !0), window.removeEventListener("resize", ne);
    };
  }, [S, re]);
  const K = (ie) => {
    b(ie), o(ie), E(!1);
  };
  return /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
    /* @__PURE__ */ d.jsx(
      "input",
      {
        ref: O,
        id: u,
        className: "native-sel",
        value: v,
        placeholder: h,
        onFocus: ce,
        onClick: ce,
        onChange: (ie) => {
          const ne = ie.currentTarget.value;
          b(ne), (m || s.some((ue) => ue.value === ne)) && o(ne), re(), E(!0), p(0);
        },
        onBlur: () => {
          window.setTimeout(() => {
            V.current?.contains(document.activeElement) || (E(!1), m || b(r));
          }, 120);
        },
        onKeyDown: (ie) => {
          ie.stopPropagation(), ie.key === "ArrowDown" ? (ie.preventDefault(), S ? p((ne) => Math.min(ne + 1, le.length - 1)) : ce()) : ie.key === "ArrowUp" ? (ie.preventDefault(), p((ne) => Math.max(ne - 1, 0))) : ie.key === "Enter" ? S && le[T] && (ie.preventDefault(), K(le[T].value)) : ie.key === "Escape" && E(!1);
        }
      }
    ),
    S && L && A0.createPortal(
      /* @__PURE__ */ d.jsxs(
        "div",
        {
          ref: V,
          className: "combo-pop",
          style: { left: L.left, top: L.top, width: L.width, maxHeight: L.maxH },
          children: [
            le.length === 0 && /* @__PURE__ */ d.jsx("div", { className: "combo-opt muted", children: "（无匹配）" }),
            le.map((ie, ne) => /* @__PURE__ */ d.jsx(
              "div",
              {
                className: ne === T ? "combo-opt on" : "combo-opt",
                onMouseEnter: () => p(ne),
                onMouseDown: (ue) => {
                  ue.preventDefault(), K(ie.value);
                },
                children: ie.label
              },
              ie.value
            ))
          ]
        }
      ),
      document.body
    )
  ] });
}
async function gg(u) {
  const r = await Be(nn(`篇目/${u}`)).catch(() => null);
  return r && r.ok ? String(r.content || "").split(/\r?\n/, 1)[0] : "";
}
const nn = (u) => `/api/file?path=${encodeURIComponent(u)}`, vE = [
  { id: "home", label: "首页" },
  { id: "use", label: "取用" },
  { id: "library", label: "结构库" },
  { id: "todo", label: "待办" },
  { id: "settings", label: "设置" }
], yE = {
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
function bE(u) {
  return u.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Oa(u) {
  return bE(u).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
}
function EE(u) {
  const r = String(u || "").split(/\r?\n/), o = [];
  let s = 0, h = !1;
  const m = () => {
    h && (o.push("</ul>"), h = !1);
  };
  for (; s < r.length; ) {
    const v = r[s];
    if (/^\|.*\|/.test(v) && s + 1 < r.length && /^\|\s*-+/.test(r[s + 1])) {
      m();
      const b = v.split("|").slice(1, -1).map((E) => E.trim());
      s += 2;
      const S = [];
      for (; s < r.length && /^\|/.test(r[s]); )
        S.push(r[s].split("|").slice(1, -1).map((E) => E.trim())), s++;
      o.push("<table><thead><tr>" + b.map((E) => `<th>${Oa(E)}</th>`).join("") + "</tr></thead><tbody>");
      for (const E of S) o.push("<tr>" + E.map((T) => `<td>${Oa(T)}</td>`).join("") + "</tr>");
      o.push("</tbody></table>");
      continue;
    }
    /^###\s/.test(v) ? (m(), o.push(`<h3>${Oa(v.slice(4))}</h3>`)) : /^##\s/.test(v) ? (m(), o.push(`<h2>${Oa(v.slice(3))}</h2>`)) : /^#\s/.test(v) ? (m(), o.push(`<h1>${Oa(v.slice(2))}</h1>`)) : /^>\s?/.test(v) ? (m(), o.push(`<blockquote>${Oa(v.replace(/^>\s?/, ""))}</blockquote>`)) : /^-\s/.test(v) || /^\*\s/.test(v) ? (h || (o.push("<ul>"), h = !0), o.push(`<li>${Oa(v.slice(2))}</li>`)) : /^---+\s*$/.test(v) ? (m(), o.push("<hr>")) : v.trim() === "" ? m() : (m(), o.push(`<p>${Oa(v)}</p>`)), s++;
  }
  return m(), o.join(`
`);
}
function lu({ md: u }) {
  return /* @__PURE__ */ d.jsx("div", { className: "doc", dangerouslySetInnerHTML: { __html: EE(u) } });
}
async function xa(u) {
  const r = await Be(`/api/list?dir=${encodeURIComponent(u)}`);
  return r.ok ? (r.items || []).filter((o) => !o.isDirectory && o.name.endsWith(".md") && o.name !== "_模板.md").map((o) => o.name) : [];
}
function Xo(u) {
  const r = String(u || "").split(/\r?\n/), o = [];
  let s = !1;
  for (const h of r) {
    if (h.startsWith("## ")) {
      s = h.includes("复核队列");
      continue;
    }
    if (s && h.startsWith("|") && !/^\|\s*-+/.test(h)) {
      const m = h.split("|").slice(1, -1).map((v) => v.trim());
      m[0] && m[0] !== "疑似对" && o.push({ pair: m[0], evidence: m[1] || "", date: m[2] || "", decision: m[3] || "" });
    }
  }
  return o;
}
async function SE() {
  const [u, r, o, s] = await Promise.all([
    xa("篇目"),
    xa("写作模型"),
    Be(nn("标签库.md")),
    Be("/api/import/failures").catch(() => ({ ok: !1, items: [] }))
  ]), h = o.ok ? Xo(o.content) : [];
  return {
    papers: u.length,
    models: r.length,
    queuePending: h.filter((m) => !m.decision).length,
    failures: (s.items || []).length
  };
}
function TE() {
  const u = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), [r, o] = H.useState({ id: "", title: "", authors: "", year: "", venue: "", textType: "", score: "9", rationale: "", date: u, recordedBy: "" }), [s, h] = H.useState(null), [m, v] = H.useState([]), b = (E, T) => o((p) => ({ ...p, [E]: T }));
  H.useEffect(() => {
    let E = !0;
    return (async () => {
      const T = await Be("/api/list?dir=篇目").catch(() => null);
      if (!T?.ok) return;
      const p = (T.items || []).map((N) => N.name).filter((N) => N.endsWith(".md") && !N.startsWith("_")), L = await Promise.all(p.map(async (N) => {
        const O = await Be(nn(`篇目/${N}`)).catch(() => null), V = O?.ok ? String(O.content || "").split(/\r?\n/, 1)[0] : "", B = /^#\s+(.+?)（([^（）]+),\s*(\d{4})[^)）]*）$/.exec(String(V || "").trim()), le = N.replace(/\.md$/, "");
        return { id: le, title: B ? B[1] : le, label: B ? `${B[1]}（${B[2].trim()} · ${B[3]}）` : le, authors: B ? B[2].trim() : "", year: B ? B[3] : "" };
      }));
      E && v(L);
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
    }, T = await Pe("/api/tool/commit_anchor", { anchor: E });
    h(T), T.ok && mt.toast.show({ message: "评分已落盘", type: "success" });
  }
  return /* @__PURE__ */ d.jsxs("div", { className: "form", children: [
    /* @__PURE__ */ d.jsx("p", { className: "hint", children: "你自己的总分和理由是整条评分链的起点：只增不改，理由至少 10 字，后续归纳评分指引全靠它。不录也不阻断——只是模型分数永远无锚点参照。" }),
    /* @__PURE__ */ d.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ d.jsx(
        $l,
        {
          id: "cb-score-entry",
          value: "",
          placeholder: m.length ? `输入过滤或选择篇目（${m.length} 篇，选中即预填）` : "读取篇目中…",
          onChange: (E) => {
            const T = m.find((p) => p.id === E);
            T && o((p) => ({ ...p, id: T.id, title: T.title, authors: T.authors, year: T.year }));
          },
          options: m.map((E) => ({ value: E.id, label: E.label }))
        }
      ),
      /* @__PURE__ */ d.jsx("span", { className: "hint", children: "也可不选直接手填（锚点可以是尚未拆解的文献）。" })
    ] }),
    /* @__PURE__ */ d.jsxs("div", { className: "grid2", children: [
      /* @__PURE__ */ d.jsx(St, { label: "篇目 id（slug-年）", value: r.id, onChange: (E) => b("id", E.currentTarget.value), placeholder: "sample-2020" }),
      /* @__PURE__ */ d.jsx(St, { label: "文本类型（你判）", value: r.textType, onChange: (E) => b("textType", E.currentTarget.value), placeholder: "论证型 / 阐释型…" }),
      /* @__PURE__ */ d.jsx(St, { label: "标题", value: r.title, onChange: (E) => b("title", E.currentTarget.value) }),
      /* @__PURE__ */ d.jsx(St, { label: "作者", value: r.authors, onChange: (E) => b("authors", E.currentTarget.value) }),
      /* @__PURE__ */ d.jsx(St, { label: "年份", value: r.year, onChange: (E) => b("year", E.currentTarget.value) }),
      /* @__PURE__ */ d.jsx(St, { label: "出处（可空）", value: r.venue, onChange: (E) => b("venue", E.currentTarget.value) }),
      /* @__PURE__ */ d.jsx(St, { label: "总分 1-10", value: r.score, onChange: (E) => b("score", E.currentTarget.value) }),
      /* @__PURE__ */ d.jsx(St, { label: "日期", value: r.date, onChange: (E) => b("date", E.currentTarget.value) })
    ] }),
    /* @__PURE__ */ d.jsx(St, { label: "理由（≥10 字）", value: r.rationale, onChange: (E) => b("rationale", E.currentTarget.value) }),
    /* @__PURE__ */ d.jsx(St, { label: "录入者", value: r.recordedBy, onChange: (E) => b("recordedBy", E.currentTarget.value) }),
    /* @__PURE__ */ d.jsx(_e, { variant: "primary", onClick: S, children: "提交评分" }),
    s && /* @__PURE__ */ d.jsx("pre", { className: s.ok ? "ok" : "err", children: s.ok ? `已写入：${s.file || "(dry run)"}` : JSON.stringify(s, null, 2) })
  ] });
}
const AE = (u) => {
  if (u.evidence.startsWith("语义相近")) return 3;
  const r = /共现\s*(\d+)\s*篇/.exec(u.evidence);
  return r && Number(r[1]) >= 3 ? 2 : 1;
};
function NE(u) {
  const r = /* @__PURE__ */ new Map(), o = (b) => {
    let S = b;
    for (; (r.get(S) || S) !== S; ) S = r.get(S) || S;
    return S;
  }, s = (b) => b.split(" vs ").filter(Boolean);
  for (const b of u) for (const S of s(b.pair)) r.has(S) || r.set(S, S);
  for (const b of u) {
    if (AE(b) < 2) continue;
    const [S, E] = s(b.pair);
    if (S && E) {
      const T = o(S), p = o(E);
      T !== p && r.set(T, p);
    }
  }
  const h = /* @__PURE__ */ new Map(), m = [];
  for (const b of u) {
    const [S, E] = s(b.pair);
    if (S && E && o(S) === o(E)) {
      const T = o(S);
      let p = h.get(T);
      p || (p = { rows: [], labels: [] }, h.set(T, p)), p.rows.push(b);
    } else
      m.push(b);
  }
  for (const b of h.values()) {
    const S = /* @__PURE__ */ new Set();
    for (const E of b.rows) for (const T of s(E.pair)) S.add(T);
    b.labels = [...S];
  }
  return { clusters: [...h.values()].sort((b, S) => {
    const E = b.rows.map((p) => p.date).sort()[0] || "", T = S.rows.map((p) => p.date).sort()[0] || "";
    return E !== T ? E < T ? -1 : 1 : S.rows.length - b.rows.length;
  }), weak: m };
}
const Do = (u) => u.labels.slice().sort().join("|");
function _E({ tick: u, onChanged: r }) {
  const [o, s] = H.useState([]), [h, m] = H.useState({}), [v, b] = H.useState(""), [S, E] = H.useState(!1), [T, p] = H.useState(""), [L, N] = H.useState(!1), [O, V] = H.useState({}), [B, le] = H.useState(null), [re, ce] = H.useState(!1), [K, ie] = H.useState("");
  H.useEffect(() => {
    let j = !1;
    return (async () => {
      const F = await Be("/api/model/status").catch(() => null);
      if (j || !F || !F.running || F.kind !== "propose") return;
      E(!0), b("AI 语义查重进行中（接管切页前的任务）…");
      const ae = await eu("/api/model/status", { kind: "propose", timeoutMs: 180 * 1e3 });
      j || (b(ae.ok ? `已入队 ${ae.queued?.length || 0} 对` : ae.message || "未产出建议"), ae.ok && await ne(), E(!1));
    })(), () => {
      j = !0;
    };
  }, []);
  const ne = H.useCallback(async () => {
    const j = await Be(nn("标签库.md"));
    s(j.ok ? Xo(j.content) : []);
  }, []);
  H.useEffect(() => {
    ne();
  }, [ne, u]);
  async function ue(j, F, ae) {
    const I = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), te = h[j] || `裁决执行：${j}`, J = await Pe("/api/tool/apply_tag_merge", { mergedLabel: F, target: ae, date: I, evidence: te });
    b(J.ok ? `已执行：${F} → ${J.now}` : J.message || JSON.stringify(J)), J.ok && (await ne(), r?.());
  }
  async function be(j) {
    const F = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), ae = h[j] || "", I = await Pe("/api/tool/apply_pair_independent", { pair: j, date: F, reason: ae });
    b(I.ok ? `已判定独立，两标签都保留：${j}` : I.message || JSON.stringify(I)), I.ok && (await ne(), r?.());
  }
  const se = (j, F, ae) => V((I) => ({ ...I, [j]: ae(I[j] || { groups: [], pool: F.slice(), sel: [] }) }));
  async function ge(j, F) {
    const ae = Do(F);
    le(j), b("");
    try {
      const I = await Pe("/api/model/propose-partition", {
        labels: F.labels,
        pairs: F.rows.map((J) => ({ pair: J.pair, evidence: J.evidence }))
      });
      if (!I.started) {
        b(I.message || "发起失败"), le(null);
        return;
      }
      const te = await eu("/api/model/status", { kind: "partition", timeoutMs: 180 * 1e3 });
      if (te.stage === "timeout") {
        b(te.message), le(null);
        return;
      }
      if (te.ok && Array.isArray(te.groups)) {
        const J = te.groups.filter((g) => Array.isArray(g) && g.length > 0).map((g) => ({ target: g[0], members: g.slice() }));
        se(ae, F.labels, (g) => ({ ...g, groups: J, pool: [], sel: [] })), b(te.message ? `分族提案已给出（${te.message}）——点选标签可调整分组` : "分族提案已给出，核对后提交");
      } else
        b(te.message || "未产出分族提案");
    } catch (I) {
      b(`请求失败：${String(I?.message || I)}`);
    }
    le(null);
  }
  async function ve(j, F) {
    const ae = Do(F), I = O[ae] || { groups: [], pool: F.labels.slice(), sel: [] };
    if (I.pool.length > 0) {
      b(`还有 ${I.pool.length} 个标签未分组（可「全部各自成组」）`);
      return;
    }
    if (!I.groups.length) {
      b("先分组再提交");
      return;
    }
    const te = I.groups.flatMap((W) => W.members), J = F.labels.filter((W) => !te.includes(W)), g = te.filter((W, he) => te.indexOf(W) !== he);
    if (J.length || g.length) {
      b(`分组与标签清单不符 — 缺：${J.join("、") || "无"}；重复：${g.join("、") || "无"}`);
      return;
    }
    for (const W of I.groups) {
      const he = String(W.target ?? "");
      if (W.members.length > 0 && !he.trim()) {
        b("有组的存活名为空——补填，或把该组成员移回池");
        return;
      }
      if (he.includes(" vs ")) {
        b("存活名不能包含「 vs 」（会破坏对的解析）");
        return;
      }
    }
    ce(!0), b("");
    const D = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), P = /* @__PURE__ */ new Map();
    I.groups.forEach((W, he) => W.members.forEach((We) => P.set(We, he)));
    let $ = 0, fe = 0, me = 0, de = "";
    try {
      for (const W of I.groups) {
        if (W.members.length < 2) continue;
        const he = String(W.target);
        for (const We of W.members) {
          if (We === he) continue;
          ie(`正在合并：「${We}」→「${he}」…`);
          const rt = await Lp("/api/tool/apply_tag_merge", {
            mergedLabel: We,
            target: he,
            date: D,
            evidence: `相关组分区提交：组内「${We}」并入「${he}」`
          });
          if (!rt.ok) {
            de = `合并「${We}→${he}」失败：${rt.message || JSON.stringify(rt)}`;
            break;
          }
          $++;
        }
        if (de) break;
      }
      if (!de)
        for (const W of F.rows) {
          const [he, We] = W.pair.split(" vs ");
          if (P.get(he) === P.get(We)) continue;
          ie(`正在判定独立：${W.pair}…`);
          const rt = await Lp("/api/tool/apply_pair_independent", {
            pair: W.pair,
            date: D,
            reason: "相关组分区提交：分属不同组"
          });
          if (rt.ok) {
            fe++;
            continue;
          }
          const Yt = String(rt.message || "");
          if (Yt.includes("已有裁决") || Yt.includes("无此对")) {
            me++;
            continue;
          }
          de = `判定独立「${W.pair}」失败：${Yt || JSON.stringify(rt)}`;
          break;
        }
    } catch (W) {
      de = `提交中断（网络/桥接异常）：${String(W?.message || W)}`;
    }
    b(de ? `${de}（此前已完成：${$} 合并、${fe} 独立；直接再点提交即可续跑——已并入的标签重试幂等，不会重复执行）` : `已提交本组裁决：${$} 合并、${fe} 独立${me ? `、${me} 对已随合并关闭` : ""}`);
    try {
      await ne();
    } catch {
    }
    r?.(), de || V((W) => ({ ...W, [ae]: { groups: [], pool: F.labels.slice(), sel: [] } })), ie(""), ce(!1);
  }
  async function G() {
    E(!0), b(""), p("co");
    let j = "";
    try {
      const F = await Pe("/api/tool/suggest_tag_merges", {});
      if (j = F.ok ? F.written ? `共现入队 ${F.written} 对` : "共现无新候选" : `共现扫描失败：${F.message || JSON.stringify(F)}`, F.ok)
        try {
          await ne();
        } catch {
        }
      p("semantic");
      const ae = await Pe("/api/model/propose-merges", {});
      if (!ae.started)
        b(`${j}；语义查重未启动：${ae.message || "发起失败"}`);
      else {
        const I = await eu("/api/model/status", { kind: "propose", timeoutMs: 18e4 });
        if (I.stage === "timeout")
          b(`${j}；语义查重${I.message || "等待超时"}`);
        else {
          const te = I.ok ? I.message || (I.queued?.length ? `语义入队 ${I.queued.length} 对：${I.queued.join("；")}` : "语义未找到新对") : I.message || "语义查重未产出建议";
          if (b(`${j}；${te}`), I.ok && I.queued?.length)
            try {
              await ne();
            } catch {
            }
        }
      }
    } catch (F) {
      b(`${j ? `${j}；` : ""}查重中断：${String(F?.message || F)}`);
    }
    p(""), E(!1), r?.();
  }
  const pe = o.filter((j) => !j.decision), De = o.filter((j) => !!j.decision), { clusters: q, weak: M } = H.useMemo(() => NE(pe), [o]), ee = (j) => /* @__PURE__ */ d.jsx(Mn, { title: j.pair, description: `${j.date} 进队 · ${j.evidence}`, children: j.decision ? /* @__PURE__ */ d.jsxs("p", { className: "decided", children: [
    "已裁决：",
    j.decision
  ] }) : /* @__PURE__ */ d.jsxs("div", { className: "queue-actions", children: [
    [j.pair.split(" vs ")[0], j.pair.split(" vs ")[1]].filter(Boolean).map((F, ae, I) => /* @__PURE__ */ d.jsx("div", { className: "queue-op", children: /* @__PURE__ */ d.jsxs(_e, { onClick: () => ue(j.pair, F, I[1 - ae]), children: [
      "「",
      F,
      "」并入「",
      I[1 - ae],
      "」"
    ] }) }, F)),
    /* @__PURE__ */ d.jsx("div", { className: "queue-op", children: /* @__PURE__ */ d.jsx(_e, { onClick: () => be(j.pair), children: "判定独立（都保留）" }) }),
    /* @__PURE__ */ d.jsx(St, { label: "依据（可空，判定独立时建议填）", value: h[j.pair] || "", onChange: (F) => {
      const ae = F.currentTarget.value;
      m((I) => ({ ...I, [j.pair]: ae }));
    } })
  ] }) }, j.pair);
  return /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsxs("p", { className: "hint", children: [
      pe.length > 0 && /* @__PURE__ */ d.jsxs("b", { children: [
        pe.length,
        " 对待裁决　"
      ] }),
      "疑似重复（或高度共现）的标签对会进到这里。两种处理：合并（留一个名字，另一个成为它的别名）或判定独立（两个都留）；互相牵连的对归在同一组里批量处理。所有操作只新增记录，不改动原始拆解。 本页管标签层（同一个论证动作的多个名字）；把标签家族立成类型在下一页——两页可并行，不必等这页清空。"
    ] }),
    v && /* @__PURE__ */ d.jsx("p", { className: v.startsWith("已") ? "ok" : "err", children: v }),
    /* @__PURE__ */ d.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ d.jsx(_e, { variant: "primary", disabled: S, onClick: () => {
        G();
      }, children: T === "co" ? "共现扫描中…" : T === "semantic" ? "语义查重中…" : "一键查重" }),
      /* @__PURE__ */ d.jsx("span", { className: "hint", children: "一键查重：先扫共现（秒出），再跑 AI 语义（约半分钟，标签集未变自动跳过）；结果都进下方待裁决，每对来源写在证据里。" })
    ] }),
    o.length === 0 && /* @__PURE__ */ d.jsx(tl, { title: "暂无待裁决标签", description: "篇目积累出相近标签后，候选会自动出现在这里。" }),
    q.map((j, F) => {
      const ae = Do(j), I = O[ae] || { groups: [], pool: j.labels.slice(), sel: [] }, te = /* @__PURE__ */ new Map();
      I.groups.forEach((D, P) => D.members.forEach(($) => te.set($, P)));
      const J = I.groups.reduce((D, P) => D + (P.members.includes(P.target) ? Math.max(0, P.members.length - 1) : P.members.length), 0), g = j.rows.filter((D) => {
        const [P, $] = D.pair.split(" vs ");
        return te.get(P) !== te.get($);
      }).length;
      return /* @__PURE__ */ d.jsxs("div", { className: "cluster", children: [
        /* @__PURE__ */ d.jsxs("p", { className: "hint queue-group", children: [
          /* @__PURE__ */ d.jsxs("b", { children: [
            "相关组 ",
            F + 1
          ] }),
          " · ",
          j.rows.length,
          " 对 · ",
          j.labels.length,
          " 个标签"
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "import-row", children: [
          /* @__PURE__ */ d.jsx(_e, { disabled: B !== null || S, onClick: () => {
            ge(F, j);
          }, children: B === F ? "分组中…" : "智能分组" }),
          /* @__PURE__ */ d.jsx(_e, { disabled: re, onClick: () => se(ae, j.labels, (D) => ({ ...D, groups: j.labels.map((P) => ({ target: P, members: [P] })), pool: [], sel: [] })), children: "全部各自成组" }),
          /* @__PURE__ */ d.jsx(_e, { disabled: re, onClick: () => se(ae, j.labels, (D) => ({ ...D, groups: [{ target: j.labels[0], members: j.labels.slice() }], pool: [], sel: [] })), children: "全部并入一组" })
        ] }),
        I.groups.map((D, P) => /* @__PURE__ */ d.jsxs("div", { className: "group-card", children: [
          /* @__PURE__ */ d.jsxs("div", { className: "hint group-head", children: [
            "组 ",
            P + 1,
            " · 存活名：",
            /* @__PURE__ */ d.jsx(
              "input",
              {
                className: "target-input",
                value: D.target,
                onChange: ($) => {
                  const fe = $.currentTarget.value;
                  se(ae, j.labels, (me) => ({ ...me, groups: me.groups.map((de, W) => W === P ? { ...de, target: fe } : de) }));
                },
                onKeyDown: ($) => $.stopPropagation(),
                placeholder: "点 ★ 快选，或直接输入新名"
              }
            ),
            /* @__PURE__ */ d.jsxs("span", { className: "hint", children: [
              "（",
              D.members.length,
              " 个标签；成员 chip 的 ★ 一键设为存活名，输入框可自定义新名）"
            ] })
          ] }),
          /* @__PURE__ */ d.jsx("p", { className: "cluster-tags", children: D.members.map(($) => /* @__PURE__ */ d.jsxs(
            "span",
            {
              className: I.sel.includes($) ? "tag-chip sel" : "tag-chip",
              onClick: () => se(ae, j.labels, (fe) => ({ ...fe, sel: fe.sel.includes($) ? fe.sel.filter((me) => me !== $) : [...fe.sel, $] })),
              children: [
                $,
                /* @__PURE__ */ d.jsx(
                  "button",
                  {
                    className: "chip-star",
                    title: "设为本组存活名",
                    onClick: (fe) => {
                      fe.stopPropagation(), se(ae, j.labels, (me) => ({ ...me, groups: me.groups.map((de, W) => W === P ? { ...de, target: $ } : de) }));
                    },
                    children: D.target === $ ? "★" : "☆"
                  }
                ),
                /* @__PURE__ */ d.jsx(
                  "button",
                  {
                    className: "chip-x",
                    onClick: (fe) => {
                      fe.stopPropagation(), se(ae, j.labels, (me) => ({
                        ...me,
                        groups: me.groups.map((de, W) => {
                          if (W !== P) return de;
                          const he = de.members.filter((We) => We !== $);
                          return { ...de, members: he, target: de.target === $ ? he[0] || "" : de.target };
                        }).filter((de) => de.members.length > 0),
                        pool: [...me.pool, $]
                      }));
                    },
                    children: "×"
                  }
                )
              ]
            },
            $
          )) }),
          I.sel.length > 0 && /* @__PURE__ */ d.jsxs(_e, { onClick: () => se(ae, j.labels, ($) => {
            const fe = $.sel.filter((de) => j.labels.includes(de));
            if (!fe.length) return $;
            const me = $.groups.map((de, W) => {
              const he = de.members.filter((rt) => !fe.includes(rt));
              if (W === P) return { ...de, members: [...he, ...fe.filter((rt) => !he.includes(rt))], target: de.target || (he[0] ?? fe[0]) };
              const We = de.target && fe.includes(de.target) ? he[0] || "" : de.target;
              return { ...de, members: he, target: We };
            }).filter((de) => de.members.length > 0);
            return { ...$, groups: me, pool: $.pool.filter((de) => !fe.includes(de)), sel: [] };
          }), children: [
            "把选中的 ",
            I.sel.length,
            " 个放进本组"
          ] })
        ] }, `g${P}`)),
        I.pool.length > 0 && /* @__PURE__ */ d.jsxs("div", { className: "pool-box", children: [
          /* @__PURE__ */ d.jsxs("p", { className: "hint", children: [
            "未分组（",
            I.pool.length,
            "）：标签点选后用下方行动按钮分组；组间提交即判定独立。"
          ] }),
          /* @__PURE__ */ d.jsx("p", { className: "cluster-tags", children: I.pool.map((D) => /* @__PURE__ */ d.jsx(
            "span",
            {
              className: I.sel.includes(D) ? "tag-chip sel" : "tag-chip",
              onClick: () => se(ae, j.labels, (P) => ({ ...P, sel: P.sel.includes(D) ? P.sel.filter(($) => $ !== D) : [...P.sel, D] })),
              children: D
            },
            D
          )) })
        ] }),
        I.sel.length > 0 && /* @__PURE__ */ d.jsxs("div", { className: "import-row sel-actions", children: [
          /* @__PURE__ */ d.jsxs(_e, { onClick: () => se(ae, j.labels, (D) => {
            const P = D.sel.filter((fe) => j.labels.includes(fe));
            if (!P.length) return D;
            const $ = D.groups.map((fe) => {
              const me = fe.members.filter((W) => !P.includes(W)), de = fe.target && P.includes(fe.target) ? me[0] || "" : fe.target;
              return { ...fe, members: me, target: de };
            }).filter((fe) => fe.members.length > 0);
            return { ...D, groups: [...$, { target: P[0], members: P }], pool: D.pool.filter((fe) => !P.includes(fe)), sel: [] };
          }), children: [
            "成新组（",
            I.sel.length,
            "）"
          ] }),
          /* @__PURE__ */ d.jsxs("span", { className: "hint", children: [
            "已选中 ",
            I.sel.length,
            " 个标签：「成新组」拆出去（选 1 个即单独成组），或点目标组卡上的「放进本组」并入该组；再点标签取消选中。"
          ] })
        ] }),
        /* @__PURE__ */ d.jsxs("div", { className: "import-row", children: [
          /* @__PURE__ */ d.jsx(_e, { variant: "primary", disabled: re || I.pool.length > 0 || I.groups.length === 0, onClick: () => {
            ve(F, j);
          }, children: re ? "提交中…" : `提交本组裁决（${J} 合并 + ${g} 独立）` }),
          /* @__PURE__ */ d.jsx("span", { className: "hint", children: re && K ? K : I.pool.length > 0 ? "先把未分组标签分完（可「全部各自成组」）" : "先组内合并，再把跨组待裁对记为独立；存活名保留。" })
        ] }),
        /* @__PURE__ */ d.jsxs("details", { className: "cluster-evidence", children: [
          /* @__PURE__ */ d.jsxs("summary", { children: [
            "共现证据（",
            j.rows.length,
            " 对）"
          ] }),
          j.rows.map((D) => /* @__PURE__ */ d.jsxs("p", { className: "hint", children: [
            D.pair,
            " — ",
            D.evidence
          ] }, D.pair))
        ] }),
        j.rows.map(ee)
      ] }, ae);
    }),
    M.length > 0 && /* @__PURE__ */ d.jsxs("div", { className: "cluster weak-zone", children: [
      /* @__PURE__ */ d.jsxs("p", { className: "hint queue-group", children: [
        /* @__PURE__ */ d.jsx("b", { children: "弱关联对" }),
        " · ",
        M.length,
        " 对 · 单独裁决（合并或判定独立，不参与分组提交）"
      ] }),
      M.map(ee)
    ] }),
    De.length > 0 && /* @__PURE__ */ d.jsxs("div", { className: "queue-decided-zone", children: [
      /* @__PURE__ */ d.jsxs("div", { className: "import-row", children: [
        /* @__PURE__ */ d.jsxs(_e, { onClick: () => N((j) => !j), children: [
          L ? "收起" : "展开",
          "已裁决（",
          De.length,
          " 条）"
        ] }),
        /* @__PURE__ */ d.jsx("span", { className: "hint", children: "裁决过的对折叠在此，可回看记录。" })
      ] }),
      L && De.map(ee)
    ] })
  ] });
}
function wE({ tick: u, onChanged: r }) {
  const [o, s] = H.useState(null), [h, m] = H.useState(""), [v, b] = H.useState(null), [S, E] = H.useState({}), [T, p] = H.useState({}), [L, N] = H.useState(!1), [O, V] = H.useState({}), [B, le] = H.useState(null), [re, ce] = H.useState({}), [K, ie] = H.useState({ from: "", to: "" }), ne = H.useCallback(async () => {
    const G = await Be("/api/types/candidates");
    s(G.ok ? G : null);
  }, []);
  H.useEffect(() => {
    ne();
  }, [ne, u]);
  async function ue(G, pe, De = {}) {
    const q = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    b(G), m("");
    const M = await Pe("/api/tool/apply_type_ruling", { action: pe, name: G, date: q, ...De });
    m(M.ok ? `已${pe === "create" ? "新立进类型库" : pe === "merge" ? `并入「${M.now}」` : "驳回"}：${G}` : M.message || JSON.stringify(M)), M.ok && (await ne(), r?.(), V({}), ce((ee) => {
      const j = { ...ee };
      return delete j[G], j;
    }), ie({ from: "", to: "" })), b(null);
  }
  async function be(G, pe) {
    le(G), m("");
    try {
      const De = await Pe("/api/model/type-targets", {
        candidates: [{ name: G, definition: pe }],
        types: (o?.types || []).map((M) => ({ type: M.type, definition: M.definition }))
      });
      if (!De.started) {
        m(De.message || "发起失败"), le(null);
        return;
      }
      const q = await eu("/api/model/status", { kind: "typehint", timeoutMs: 180 * 1e3 });
      if (q.stage === "timeout") {
        m(q.message), le(null);
        return;
      }
      if (q.ok && Array.isArray(q.suggestions) && q.suggestions.length) {
        const M = q.suggestions[0];
        V((ee) => ({ ...ee, [G]: { target: String(M.target), reason: String(M.reason || "") } })), m(`「${G}」的建议已给出，见该候选卡`);
      } else
        m(q.message || "未产出建议");
    } catch (De) {
      m(`请求失败：${String(De?.message || De)}`);
    }
    le(null);
  }
  async function se(G) {
    const pe = (T[G] || "").trim();
    if (!pe) {
      m("改名：先在框里填新名称");
      return;
    }
    const De = o?.pending.find((j) => j.name === G)?.definition || "", q = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    b(G), m("");
    const M = await Pe("/api/tool/apply_type_ruling", { action: "create", name: pe, date: q, definition: De });
    if (!M.ok) {
      m(`改名中断（新立「${pe}」未过）：${M.message || JSON.stringify(M)}`), b(null);
      return;
    }
    const ee = await Pe("/api/tool/apply_type_ruling", { action: "merge", name: G, target: pe, date: q });
    m(ee.ok ? `已改名：${G} → ${pe}` : ee.message || JSON.stringify(ee)), ee.ok && (await ne(), r?.(), V({}), ce((j) => {
      const F = { ...j };
      return delete F[G], F;
    })), b(null);
  }
  if (!o) return /* @__PURE__ */ d.jsx(tl, { title: "读取候选中…", description: "正在扫描篇目的新类型宣告。" });
  const ge = [...o.pending, ...o.ruled.filter((G) => re[G.name])], ve = (G) => !!G && !(o.types || []).some((pe) => pe.type === G) && !(o.pending || []).some((pe) => pe.name === G);
  return /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsxs("p", { className: "hint", children: [
      ge.length > 0 && /* @__PURE__ */ d.jsxs("b", { children: [
        ge.length,
        " 个候选待裁　"
      ] }),
      "每个候选来自拆解时的「新类型宣告」。四选一：新立（进类型库）、并入（记闭包映射）、改名（先立新名再并入）、驳回（留痕不入表）。裁决即生效，宣告篇目同步盖章。 并入看箭头：「A → B」= A 并入 B、B 存活；候选名表述更佳时选反方向箭头即可。已裁决的可「重新裁决」，已登记类型用下方再归类工具——一切归类都可再次归类。 与上页的关系：标签裁决查的是重名标签，本页立的是写作模型的类型；标签层没清完也能裁——类型库「归并自」容纳多个共存标签。 建议逐个取：点候选卡上的「AI 推荐」，按此刻的类型库实时算；裁决一张卡后全部建议清空，下一张再点。"
    ] }),
    h && /* @__PURE__ */ d.jsx("p", { className: h.startsWith("已") ? "ok" : "err", children: h }),
    /* @__PURE__ */ d.jsxs("div", { className: "import-row reclass-box", children: [
      /* @__PURE__ */ d.jsx(
        $l,
        {
          id: "cb-reclass-from",
          value: K.from,
          placeholder: "已登记类型再归类：选源…",
          onChange: (G) => ie((pe) => ({ ...pe, from: G })),
          options: (o.types || []).map((G) => ({ value: G.type, label: G.type }))
        }
      ),
      /* @__PURE__ */ d.jsx(
        $l,
        {
          id: "cb-reclass-to",
          value: K.to,
          placeholder: "输入过滤，或直接输入新名…",
          allowCustom: !0,
          onChange: (G) => ie((pe) => ({ ...pe, to: G })),
          options: [
            ...(o.types || []).map((G) => ({ value: G.type, label: G.type })),
            ...(o.pending || []).map((G) => ({ value: G.name, label: `${G.name}（候选）` }))
          ]
        }
      ),
      /* @__PURE__ */ d.jsx(_e, { disabled: v !== null || !K.from || !K.to, onClick: () => {
        ue(K.from, "merge", { target: K.to, targetFresh: ve(K.to) });
      }, children: "执行归类" })
    ] }),
    ge.length === 0 && /* @__PURE__ */ d.jsx(tl, { title: "暂无待裁候选", description: "拆解宣告新类型后，候选会自动出现在这里。" }),
    ge.map((G) => /* @__PURE__ */ d.jsxs(Mn, { title: G.name, description: `宣告于：${G.papers.join("、")}`, children: [
      /* @__PURE__ */ d.jsx("p", { children: G.definition || "（定义待补）" }),
      O[G.name] && /* @__PURE__ */ d.jsxs("div", { className: "hint suggest-line", children: [
        "AI 建议：",
        O[G.name].target === "新立" ? "新立（未匹配到既有类型）" : O[G.name].target === "驳回" ? "驳回（无独立价值）" : `并入「${O[G.name].target}」`,
        "——",
        O[G.name].reason,
        (o.types || []).some((pe) => pe.type === O[G.name].target) && /* @__PURE__ */ d.jsx(_e, { onClick: () => E((pe) => ({ ...pe, [G.name]: O[G.name].target })), children: "采纳（填入目标）" })
      ] }),
      /* @__PURE__ */ d.jsx("div", { className: "import-row", children: /* @__PURE__ */ d.jsx(_e, { disabled: B !== null || v !== null, onClick: () => {
        be(G.name, G.definition);
      }, children: B === G.name ? "推荐中…" : "AI 推荐" }) }),
      /* @__PURE__ */ d.jsxs("div", { className: "import-row", children: [
        /* @__PURE__ */ d.jsx(_e, { variant: "primary", disabled: v !== null, onClick: () => {
          ue(G.name, "create");
        }, children: v === G.name ? "执行中…" : "新立进类型库" }),
        /* @__PURE__ */ d.jsx(
          $l,
          {
            id: `cb-merge-${G.name}`,
            value: S[G.name] || "",
            placeholder: "输入过滤，或输入新名…",
            allowCustom: !0,
            onChange: (pe) => E((De) => ({ ...De, [G.name]: pe })),
            options: [
              ...(o.types || []).map((pe) => ({ value: pe.type, label: pe.type })),
              ...(o.pending || []).filter((pe) => pe.name !== G.name).map((pe) => ({ value: pe.name, label: `${pe.name}（候选）` }))
            ]
          }
        ),
        /* @__PURE__ */ d.jsxs(_e, { disabled: v !== null || !S[G.name], title: "箭头左侧消失成为别名，右侧名字存活", onClick: () => {
          ue(G.name, "merge", { target: S[G.name], targetFresh: ve(S[G.name]) });
        }, children: [
          G.name,
          " → ",
          S[G.name] || "…"
        ] }),
        /* @__PURE__ */ d.jsxs(_e, { disabled: v !== null || !S[G.name], title: "反方向：右侧候选名存活，左侧所选类型归入它名下", onClick: () => {
          ue(S[G.name], "merge", { target: G.name });
        }, children: [
          S[G.name] || "…",
          " → ",
          G.name
        ] }),
        /* @__PURE__ */ d.jsx(_e, { disabled: v !== null, onClick: () => {
          ue(G.name, "reject");
        }, children: "驳回" })
      ] }),
      /* @__PURE__ */ d.jsxs("div", { className: "import-row", children: [
        /* @__PURE__ */ d.jsx(St, { label: "改名为", value: T[G.name] || "", onChange: (pe) => {
          const De = pe.currentTarget.value;
          p((q) => ({ ...q, [G.name]: De }));
        }, placeholder: "新类型名" }),
        /* @__PURE__ */ d.jsx(_e, { disabled: v !== null || !(T[G.name] || "").trim(), onClick: () => {
          se(G.name);
        }, children: "改名" })
      ] })
    ] }, G.name)),
    o.ruled.length > 0 && /* @__PURE__ */ d.jsxs("div", { className: "queue-decided-zone", children: [
      /* @__PURE__ */ d.jsxs("div", { className: "import-row", children: [
        /* @__PURE__ */ d.jsxs(_e, { onClick: () => N((G) => !G), children: [
          L ? "收起" : "展开",
          "已裁决（",
          o.ruled.length,
          "）"
        ] }),
        /* @__PURE__ */ d.jsx("span", { className: "hint", children: "裁决过的候选折叠在此；明细查类型库与闭包映射表。" })
      ] }),
      L && o.ruled.map((G) => /* @__PURE__ */ d.jsxs(Mn, { title: G.name, description: `已裁决：${G.ruledStatus || ""}`, children: [
        /* @__PURE__ */ d.jsx("p", { className: "hint", children: G.definition || "" }),
        /* @__PURE__ */ d.jsx(_e, { disabled: v !== null, onClick: () => ce((pe) => ({ ...pe, [G.name]: !0 })), children: "重新裁决" })
      ] }, G.name))
    ] })
  ] });
}
function vg({ initial: u, savePath: r, onSaved: o }) {
  const [s, h] = H.useState(u), [m, v] = H.useState(""), [b, S] = H.useState(!1);
  async function E() {
    if (!s.startsWith("#")) {
      v("首行须为 # 标题（防存入半截文件）");
      return;
    }
    let T = s;
    if (T !== u) {
      const p = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), L = /^> 人工修订：(.+)$/m;
      T = L.test(T) ? T.replace(L, `> 人工修订：${p}`) : T.trimEnd() + `

> 人工修订：${p}
`;
    }
    S(!0), v("");
    try {
      const p = await Pe("/api/library/write-file", { path: r, content: T });
      p && p.ok ? (mt.toast.show({ message: "已保存", type: "success" }), o(T)) : v(Jl(p) || "保存失败");
    } catch (p) {
      v(String(p?.message || p));
    }
    S(!1);
  }
  return /* @__PURE__ */ d.jsxs("div", { className: "editor", children: [
    m && /* @__PURE__ */ d.jsx("p", { className: "err", children: m }),
    /* @__PURE__ */ d.jsx("textarea", { className: "editbox", value: s, onChange: (T) => h(T.currentTarget.value), rows: 22, spellCheck: !1 }),
    /* @__PURE__ */ d.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ d.jsx(_e, { variant: "primary", disabled: b, onClick: () => {
        E();
      }, children: "保存" }),
      /* @__PURE__ */ d.jsx("span", { className: "hint", children: "首行须为 # 标题；改动会在尾部留一行修订日期（可自行删除）。改标签：编辑「- 标签：」行。" })
    ] })
  ] });
}
function OE({ tick: u }) {
  const [r, o] = H.useState([]), [s, h] = H.useState(""), [m, v] = H.useState(""), [b, S] = H.useState(!1), E = H.useCallback(async () => {
    const T = await xa("篇目"), p = await Promise.all(
      T.map(async (L) => {
        const { title: N, meta: O } = pg(await gg(L), L.replace(/\.md$/, ""));
        return { id: L, title: N, meta: O || L.replace(/\.md$/, "") };
      })
    );
    o(p);
  }, []);
  return H.useEffect(() => {
    E();
  }, [E, u]), H.useEffect(() => {
    if (!s) {
      v("");
      return;
    }
    Be(nn(`篇目/${s}`)).then((T) => v(T.ok ? T.content : T.message || "读取失败"));
  }, [s]), r.length ? /* @__PURE__ */ d.jsxs("div", { className: "split", children: [
    /* @__PURE__ */ d.jsx("div", { className: "side", children: /* @__PURE__ */ d.jsx("div", { className: "entrylist", children: r.map((T) => /* @__PURE__ */ d.jsxs(
      "button",
      {
        className: s === T.id ? "entryitem on" : "entryitem",
        onClick: () => h(T.id),
        children: [
          /* @__PURE__ */ d.jsx("span", { className: "entrytitle", children: T.title }),
          /* @__PURE__ */ d.jsx("span", { className: "entrymeta", children: T.meta })
        ]
      },
      T.id
    )) }) }),
    /* @__PURE__ */ d.jsxs("div", { className: "main", children: [
      s && /* @__PURE__ */ d.jsx("div", { className: "import-row", children: /* @__PURE__ */ d.jsx(_e, { onClick: () => S((T) => !T), children: b ? "返回预览" : "编辑本篇" }) }),
      s ? b ? /* @__PURE__ */ d.jsx(
        vg,
        {
          initial: m,
          savePath: `篇目/${s}`,
          onSaved: (T) => {
            v(T), S(!1), E();
          }
        }
      ) : /* @__PURE__ */ d.jsx(lu, { md: m }) : /* @__PURE__ */ d.jsx("p", { className: "hint", children: "左侧选篇查看（每条登记都带位置与原文引文）。" })
    ] })
  ] }) : /* @__PURE__ */ d.jsx(tl, { title: "还没有篇目", description: "导入文献或在对话里拆解后，篇目会出现在这里。" });
}
function CE({ tick: u }) {
  const [r, o] = H.useState([]), [s, h] = H.useState(""), [m, v] = H.useState(""), [b, S] = H.useState(""), [E, T] = H.useState(""), [p, L] = H.useState({});
  if (H.useEffect(() => {
    xa("篇目").then(async (O) => {
      o(O), O[0] && h(O[0]), O[1] && v(O[1]);
      const V = await Promise.all(O.map(async (B) => {
        const { title: le, meta: re } = pg(await gg(B), B.replace(/\.md$/, ""));
        return [B, re ? `${le} · ${re}` : le];
      }));
      L(Object.fromEntries(V));
    });
  }, [u]), H.useEffect(() => {
    s && Be(nn(`篇目/${s}`)).then((O) => S(O.ok ? O.content : ""));
  }, [s]), H.useEffect(() => {
    m && Be(nn(`篇目/${m}`)).then((O) => T(O.ok ? O.content : ""));
  }, [m]), r.length < 2) return /* @__PURE__ */ d.jsx(tl, { title: "至少两篇可对比", description: "先积累两篇以上篇目。" });
  const N = r.map((O) => ({ value: O, label: p[O] || O.replace(/\.md$/, "") }));
  return /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsxs("div", { className: "grid2", children: [
      /* @__PURE__ */ d.jsx($l, { id: "cb-cmp-a", value: s, onChange: h, options: N, placeholder: "输入过滤篇目…" }),
      /* @__PURE__ */ d.jsx($l, { id: "cb-cmp-b", value: m, onChange: v, options: N, placeholder: "输入过滤篇目…" })
    ] }),
    /* @__PURE__ */ d.jsxs("div", { className: "compare", children: [
      /* @__PURE__ */ d.jsx("div", { className: "col", children: /* @__PURE__ */ d.jsx(lu, { md: b }) }),
      /* @__PURE__ */ d.jsx("div", { className: "col", children: /* @__PURE__ */ d.jsx(lu, { md: E }) })
    ] })
  ] });
}
function xE({ tick: u }) {
  const [r, o] = H.useState(null);
  if (H.useEffect(() => {
    (async () => {
      const [h, m, v, b, S, E] = await Promise.all([
        xa("篇目"),
        xa("锚点样本"),
        xa("写作模型"),
        Be(nn("标签库.md")),
        Be(nn("闭包映射表.md")),
        Be(nn("类型库.md"))
      ]), T = b.ok ? Uo(b.content, "标签") : [], p = b.ok ? Xo(b.content) : [], L = S.ok ? Uo(S.content, "from") : [], N = E.ok ? Uo(E.content, "类型") : [];
      o({
        papers: h.length,
        anchors: m.length,
        models: v.length,
        tags: T,
        queuePending: p.filter((O) => !O.decision).length,
        mapRows: L,
        types: N
      });
    })();
  }, [u]), !r) return /* @__PURE__ */ d.jsx("p", { className: "hint", children: "统计中…" });
  const s = r.papers ? Math.round(r.anchors / r.papers * 100) : 0;
  return /* @__PURE__ */ d.jsxs("div", { className: "cards", children: [
    /* @__PURE__ */ d.jsx(Mn, { title: `篇目 ${r.papers}`, description: "已完成的篇目" }),
    /* @__PURE__ */ d.jsx(Mn, { title: `锚点 ${r.anchors}`, description: `锚点覆盖度 ${s}%（置信度依据之一）` }),
    /* @__PURE__ */ d.jsx(Mn, { title: `标签 ${r.tags.length}`, description: `待裁决 ${r.queuePending}` }),
    /* @__PURE__ */ d.jsx(Mn, { title: `类型 ${r.types.length}`, description: `映射表 ${r.mapRows.length} 行` }),
    /* @__PURE__ */ d.jsx(Mn, { title: `写作模型 ${r.models}`, description: "版本化产物" }),
    /* @__PURE__ */ d.jsx(Mn, { title: "描述性 / 规范性频率", description: "描述与规范分开统计；篇目与锚点积累后按类型分组计算。" })
  ] });
}
function Uo(u, r) {
  const o = String(u || "").split(/\r?\n/), s = [];
  let h = !1;
  for (const m of o)
    if (m.startsWith("|") && !/^\|\s*-+/.test(m)) {
      const v = m.split("|").slice(1, -1).map((b) => b.trim());
      if (v[0] === r) {
        h = !0;
        continue;
      }
      h && v[0] && v[0] !== "（暂无）" && s.push(v[0]);
    } else h && !m.startsWith("|") && (h = !1);
  return s;
}
function zo(u) {
  const r = u.filter((m) => m.ok), o = u.filter((m) => !m.ok && m.skipped), s = u.filter((m) => !m.ok && !m.skipped), h = [];
  return r.length && h.push(`✓ 生成 ${r.length} 个类型：${r.map((m) => `${m.type} v${m.version}`).join("、")}`), o.length && h.push(`跳过 ${o.length} 个（样本不足或未变）`), s.length && h.push(`✗ 失败：${s.map((m) => `${m.type}：${m.error || "未知"}`).join("；")}`), h.join("；") || "没有可处理的类型";
}
function RE(u) {
  const r = u.results || [], o = r.filter((S) => S.ok), s = r.filter((S) => !S.ok && (S.stage === "unchanged" || S.stage === "size")), h = r.filter((S) => !S.ok && S.stage !== "unchanged" && S.stage !== "size"), m = [];
  o.length && m.push(`✓ 生成 ${o.length} 个战术：${o.map((S) => `战术-${S.label} v${S.version}`).join("、")}`), s.length && m.push(`跳过 ${s.length} 个（未变或超素材上限）`), h.length && m.push(`✗ 失败：${h.map((S) => `${S.label}：${S.message || S.stage}`).join("；")}`);
  const v = m.join("；") || "无产出", b = Number(u.belowThreshold || 0);
  return b ? `${v}（另有 ${b} 个标签携带篇目 <2，未达门槛）` : v;
}
function jE(u) {
  const r = {};
  for (const o of String(u || "").split(/\r?\n/)) {
    if (!o.startsWith("|") || /^\|\s*-+/.test(o)) continue;
    const s = o.split("|").slice(1, -1).map((h) => h.trim());
    s.length === 3 && s[0] && s[0] !== "原始类型" && s[1] && s[0] !== s[1] && (r[s[0]] = s[1]);
  }
  return r;
}
function DE({ tick: u }) {
  const [r, o] = H.useState([]), [s, h] = H.useState(""), [m, v] = H.useState(""), [b, S] = H.useState(!1), [E, T] = H.useState(!1), [p, L] = H.useState({}), [N, O] = H.useState(""), [V, B] = H.useState({}), [le, re] = H.useState("list"), [ce, K] = H.useState(""), [ie, ne] = H.useState({}), [ue, be] = H.useState(!1);
  async function se(I = () => !0) {
    const te = Date.now(), J = () => {
      const g = Math.max(0, Math.round((Date.now() - te) / 1e3));
      return `${Math.floor(g / 60)}分${String(g % 60).padStart(2, "0")}秒`;
    };
    for (; Date.now() - te < 2400 * 1e3; ) {
      if (await new Promise((D) => setTimeout(D, 4e3)), !I()) return null;
      const g = await Be("/api/model/status").catch(() => null);
      if (!(!g || g.kind !== "generate")) {
        if (g.running) {
          const D = g.progress || {};
          K(D.total ? `建模中：${D.done ?? 0}/${D.total}　当前：${D.current || "…"}　已用 ${J()}` : `建模中：准备中…　已用 ${J()}`);
        } else if (g.lastResult)
          return g.lastResult;
      }
    }
    return { ok: !1, stage: "timeout", message: `等待超过 40 分钟（已用 ${J()}），任务可能仍在运行；本页离开再回来仍可查看，后台任务不会因等待超时而中断。` };
  }
  H.useEffect(() => {
    let I = !1;
    return (async () => {
      const te = await Be("/api/model/status").catch(() => null);
      if (!(I || !te || te.kind !== "generate")) {
        if (te.running) {
          S(!0), K("建模进行中（接管切页前的任务）…");
          const J = await se(() => !I);
          if (I || !J) return;
          K(J.stage === "timeout" ? J.message : zo(J.results || [])), (J.results || []).some((g) => g.ok) && (mt.toast.show({ message: "写作模型已生成/更新", type: "success" }), ve()), S(!1);
          return;
        }
        te.lastResult && te.finishedAt && Date.now() - te.finishedAt < 1800 * 1e3 && (K(`上次建模：${zo(te.lastResult.results || [])}`), ve());
      }
    })(), () => {
      I = !0;
    };
  }, []);
  const ge = H.useMemo(() => {
    const I = /* @__PURE__ */ new Map();
    for (const te of r) {
      const J = /^(.+)-写作模型-v(\d+)\.md$/.exec(te);
      J && (I.has(J[1]) || I.set(J[1], []), I.get(J[1]).push({ file: te, v: Number(J[2]) }));
    }
    return [...I.entries()].map(([te, J]) => (J.sort((g, D) => g.v - D.v), { type: te, latest: J[J.length - 1], history: J.slice(0, -1).reverse() }));
  }, [r]), ve = H.useCallback(() => {
    xa("写作模型").then(o), Be(nn("闭包映射表.md")).then((I) => L(I.ok ? jE(I.content) : {}));
  }, []);
  H.useEffect(() => {
    ve();
  }, [ve, u]), H.useEffect(() => {
    if (!s) {
      v("");
      return;
    }
    Be(nn(`写作模型/${s}`)).then((I) => v(I.ok ? I.content : ""));
  }, [s]);
  async function G() {
    S(!0), K("");
    try {
      const I = await Pe("/api/model/generate", {});
      if (!I.started) {
        K(I.message || "发起失败"), S(!1);
        return;
      }
      K("建模中：正在读取结构库…");
      const te = await se();
      if (!te) {
        S(!1);
        return;
      }
      if (te.stage === "timeout") {
        K(te.message), S(!1);
        return;
      }
      K(zo(te.results || []) || te.message || ""), (te.results || []).some((J) => J.ok) && (mt.toast.show({ message: "写作模型已生成/更新", type: "success" }), ve());
    } catch (I) {
      K(`请求失败：${String(I?.message || I)}`);
    }
    S(!1);
  }
  async function pe() {
    T(!0), K("");
    try {
      const I = await Pe("/api/model/generate-tactic", {});
      if (!I.started) {
        K(I.message || "发起失败"), T(!1);
        return;
      }
      const te = Date.now();
      for (; Date.now() - te < 1200 * 1e3; ) {
        await new Promise((g) => setTimeout(g, 4e3));
        const J = await Be("/api/model/status").catch(() => null);
        if (!(!J || J.kind !== "tactic")) {
          if (J.running) {
            const g = J.progress || {};
            K(`战术建模中：${g.done ?? 0}/${g.total ?? "?"}　当前：${g.current || "…"}`);
          } else if (J.lastResult) {
            const g = J.lastResult;
            K(RE(g) || g.message || ""), (g.results || []).some((D) => D.ok) && (mt.toast.show({ message: "战术模型已生成/更新", type: "success" }), ve()), T(!1);
            return;
          }
        }
      }
      K("等待超时（20 分钟），任务可能仍在运行；稍后刷新查看结果。");
    } catch (I) {
      K(`请求失败：${String(I?.message || I)}`);
    }
    T(!1);
  }
  const [De, q] = H.useState(""), [M, ee] = H.useState("");
  async function j(I) {
    const te = [];
    for (const J of I) {
      const g = await Pe("/api/library/delete-file", { path: `写作模型/${J}` });
      te.push(g.ok ? `✓ ${J}` : `✗ ${J}：${g.message || "失败"}`);
    }
    K(`删除结果：${te.join("；")}`), h(""), ve();
  }
  const F = (I) => {
    let te = I;
    const J = /* @__PURE__ */ new Set();
    for (; p[te] && p[te] !== te && !J.has(te); )
      J.add(te), te = p[te];
    return te;
  };
  async function ae(I, te) {
    const J = await Pe("/api/library/rename-models", { from: I, to: te });
    if (!J.ok) {
      K(J.message || JSON.stringify(J));
      return;
    }
    const g = (J.moved || []).map((D) => (/-v(\d+)\.md$/.exec(D) || [])[1]).filter(Boolean);
    K(J.merged ? `已并入「${te}」家族：${I} → ${te}（${(J.moved || []).length} 个文件，接续为 ${g.map((D) => `v${D}`).join("、")}；目标原有版本未动）` : `已随归并改名：${I} → ${te}（${(J.moved || []).length} 个文件，版本保留）`), h(""), ve();
  }
  return /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ d.jsx(_e, { variant: "primary", disabled: b || E, onClick: () => {
        G();
      }, children: b ? "建模中…" : "生成 / 更新写作模型" }),
      /* @__PURE__ */ d.jsx(_e, { disabled: b || E, onClick: () => {
        pe();
      }, children: E ? "战术建模中…" : "生成 / 更新战术模型" }),
      /* @__PURE__ */ d.jsx("span", { className: "hint", children: "两个按钮同理：样本 ≥2 才生成，再点得新版本（v+1，历史保留）。类型模型的样本看归并自与宣告篇，战术模型的样本看携带该标签的篇目。" }),
      /* @__PURE__ */ d.jsx("span", { className: "hint", children: "建模按类型或标签调用模型，样本多、篇幅长时 token 消耗较大。" })
    ] }),
    ce && /* @__PURE__ */ d.jsx("pre", { className: "hint", children: ce }),
    le === "preview" && s ? /* @__PURE__ */ d.jsxs("div", { className: "model-preview", children: [
      /* @__PURE__ */ d.jsxs("div", { className: "import-row", children: [
        /* @__PURE__ */ d.jsx(_e, { onClick: () => re("list"), children: "← 返回列表" }),
        /* @__PURE__ */ d.jsxs("span", { className: "hint", children: [
          "正在查看：",
          s
        ] })
      ] }),
      ue ? /* @__PURE__ */ d.jsx(vg, { initial: m, savePath: `写作模型/${s}`, onSaved: (I) => {
        v(I), be(!1), ve();
      } }) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
        /* @__PURE__ */ d.jsxs("div", { className: "import-row", children: [
          /* @__PURE__ */ d.jsx(_e, { onClick: () => be(!0), children: "编辑本模型" }),
          /* @__PURE__ */ d.jsx(_e, { disabled: b || E, onClick: () => {
            if (M !== s) {
              ee(s);
              return;
            }
            ee(""), j([s]);
          }, children: M === s ? "再点一次确认删除" : "删除本版本" })
        ] }),
        /* @__PURE__ */ d.jsx(lu, { md: m })
      ] })
    ] }) : ge.length ? /* @__PURE__ */ d.jsx(d.Fragment, { children: ["类型", "战术"].map((I) => {
      const te = ge.filter((g) => I === "战术" === g.type.startsWith("战术-"));
      if (!te.length) return null;
      const J = !V[I];
      return /* @__PURE__ */ d.jsxs("div", { className: "model-section", children: [
        /* @__PURE__ */ d.jsx("div", { className: "import-row section-toggle", children: /* @__PURE__ */ d.jsxs(_e, { onClick: () => B((g) => ({ ...g, [I]: !g[I] })), children: [
          J ? "收起" : "展开",
          " ",
          I,
          "模型（",
          te.length,
          " 组）"
        ] }) }),
        J && te.map((g) => {
          const D = g.type.startsWith("战术-") ? g.type.slice(2) : g.type, P = F(D), $ = P !== D, fe = g.type.startsWith("战术-") ? `战术-${P}` : P;
          return /* @__PURE__ */ d.jsxs("div", { className: "model-group", children: [
            /* @__PURE__ */ d.jsxs("div", { className: "model-group-head", children: [
              $ && /* @__PURE__ */ d.jsx("span", { className: "badge", children: "已并入" }),
              /* @__PURE__ */ d.jsx("span", { className: "model-grouptitle", children: $ ? `${g.type} → ${P}` : g.type }),
              /* @__PURE__ */ d.jsxs(
                "button",
                {
                  className: s === g.latest.file ? "filebtn on" : "filebtn",
                  onClick: () => {
                    h(g.latest.file), re("preview");
                  },
                  children: [
                    "v",
                    g.latest.v,
                    "（最新）"
                  ]
                }
              ),
              g.history.length > 0 && /* @__PURE__ */ d.jsx("button", { className: "linkbtn", onClick: () => ne((me) => ({ ...me, [g.type]: !me[g.type] })), children: ie[g.type] ? "收起历史" : `历史 ${g.history.length} 版` }),
              $ && /* @__PURE__ */ d.jsx("button", { className: "linkbtn", onClick: () => {
                if (N !== g.type) {
                  O(g.type);
                  return;
                }
                O(""), ae(g.type, fe);
              }, children: N === g.type ? `再点一次确认改名为 ${fe}` : "随归并改名" }),
              /* @__PURE__ */ d.jsx("button", { className: "linkbtn", onClick: () => {
                if (De !== g.type) {
                  q(g.type);
                  return;
                }
                q(""), j([g.latest.file, ...g.history.map((me) => me.file)]);
              }, children: De === g.type ? "再点一次确认删除整组" : "删除" })
            ] }),
            ie[g.type] && /* @__PURE__ */ d.jsx("div", { className: "filebtns", children: g.history.map((me) => /* @__PURE__ */ d.jsxs("button", { className: s === me.file ? "filebtn on" : "filebtn", onClick: () => {
              h(me.file), re("preview");
            }, children: [
              "v",
              me.v
            ] }, me.file)) })
          ] }, g.type);
        })
      ] }, I);
    }) }) : /* @__PURE__ */ d.jsx(tl, { title: "暂无写作模型", description: "点上方按钮归纳生成；样本不足或样本未变的类型会跳过并说明。" })
  ] });
}
function UE() {
  const [u, r] = H.useState(""), [o, s] = H.useState([]), [h, m] = H.useState(null), [v, b] = H.useState("");
  async function S() {
    if (!u.trim()) return;
    const E = await Be(`/api/search?query=${encodeURIComponent(u.trim())}`);
    s(E.ok ? E.results : []), m(null);
  }
  return H.useEffect(() => {
    if (!h) {
      b("");
      return;
    }
    Be(nn(h.path)).then((E) => b(E.ok ? E.content : "读取失败"));
  }, [h]), /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsx("p", { className: "hint", children: "按关键词物理命中排序帮你收窄候选，取舍仍由你判断；引用时带篇目位置与原文引文。" }),
    /* @__PURE__ */ d.jsxs("div", { className: "searchbar", children: [
      /* @__PURE__ */ d.jsx(
        St,
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
      /* @__PURE__ */ d.jsx(_e, { variant: "primary", onClick: () => {
        S();
      }, children: "搜索" })
    ] }),
    /* @__PURE__ */ d.jsxs("div", { className: "searchresults", children: [
      o.map((E) => /* @__PURE__ */ d.jsxs("div", { className: h?.path === E.path ? "searchhit on" : "searchhit", children: [
        /* @__PURE__ */ d.jsxs("div", { className: "searchhit-head", onClick: () => m(E), children: [
          /* @__PURE__ */ d.jsx("span", { className: "badge", children: E.kind }),
          /* @__PURE__ */ d.jsx("b", { children: E.title }),
          /* @__PURE__ */ d.jsxs("span", { className: "hint", children: [
            "命中 ",
            E.score,
            " · ",
            E.path
          ] })
        ] }),
        h?.path !== E.path && E.hits?.slice(0, 2).map((T, p) => /* @__PURE__ */ d.jsxs("div", { className: "hitline", children: [
          "L",
          T.line,
          ": ",
          T.excerpt,
          T.text
        ] }, p))
      ] }, E.path)),
      !o.length && /* @__PURE__ */ d.jsx("p", { className: "hint", children: "输入关键词后搜索；结果按命中度排序，点击标题展开全文。" })
    ] }),
    h && /* @__PURE__ */ d.jsxs("div", { className: "searchpreview", children: [
      /* @__PURE__ */ d.jsx("h4", { children: h.title }),
      /* @__PURE__ */ d.jsx(lu, { md: v })
    ] })
  ] });
}
function zE() {
  const [u, r] = H.useState(""), [o, s] = H.useState(""), [h, m] = H.useState("2"), [v, b] = H.useState(""), [S, E] = H.useState(""), [T, p] = H.useState(null), [L, N] = H.useState(!1);
  H.useEffect(() => {
    Be("/api/config").then((re) => {
      re.ok && re.config ? (r((re.config.markers || []).join("、")), s(re.config.libraryPath || ""), m(String(re.config.maxPerRun ?? 2)), b(re.config.pythonPath || "")) : E(Jl(re) || "配置读取失败");
    }), Ir().then(p);
  }, []);
  async function O() {
    N(!0), p(await Ir(!0)), N(!1);
  }
  async function V() {
    E("保存中…");
    const re = await Pe("/api/config", {
      markers: u.split(/[\s、，,;；]+/).map((K) => K.trim()).filter(Boolean),
      libraryPath: o.trim(),
      maxPerRun: Number(h) || 2,
      pythonPath: v.trim()
    });
    if (!re.ok) {
      E(`保存失败：${Jl(re)}`);
      return;
    }
    const ce = re.libraryInit;
    ce && ce.action === "failed" ? E(`已保存，但结构库模板铺写失败：${ce.message || "未知原因"}（目标目录可能不可写或被占用）`) : ce && ce.action === "kept" ? E("已保存（目标目录已有内容，未铺写模板；改路径后需重启 Hana 生效）") : ce && ce.action === "initialized" ? E(`已保存（已铺模板 ${ce.files ?? "若干"} 个文件；改路径后需重启 Hana 生效）`) : E("已保存"), Ir(!0).then(p);
  }
  const B = T === null ? "正在检测主引擎…" : T.ok ? `主引擎可用：PyMuPDF ${T.version || ""}（解释器：${T.python}）` : `主引擎不可用：${T.error || "未知原因"}（解释器：${T.python || "python"}）`, le = T && T.python ? T.python : "python";
  return /* @__PURE__ */ d.jsxs("div", { className: "settings", children: [
    /* @__PURE__ */ d.jsx("h4", { className: "import-title", children: "推荐与结构库" }),
    /* @__PURE__ */ d.jsx("p", { className: "hint", children: "会话名命中标定词才会收到结构推荐；标定词留空 = 全静默，不向任何会话推送。" }),
    /* @__PURE__ */ d.jsx(
      St,
      {
        label: "会话标定词（、或逗号分隔，含任一即放行）",
        value: u,
        onChange: (re) => r(re.currentTarget.value),
        placeholder: "例：构成性、论文、写作"
      }
    ),
    /* @__PURE__ */ d.jsx(
      St,
      {
        label: "结构库路径（留空用默认；改后重启 Hana 生效）",
        value: o,
        onChange: (re) => s(re.currentTarget.value),
        placeholder: "默认：workspace 写作模型插件/结构库"
      }
    ),
    /* @__PURE__ */ d.jsx(
      St,
      {
        label: "单次推荐上限（1-2，设计上限 2）",
        value: h,
        onChange: (re) => m(re.currentTarget.value)
      }
    ),
    /* @__PURE__ */ d.jsx("h4", { className: "import-title", children: "PDF 引擎" }),
    /* @__PURE__ */ d.jsx("p", { className: T === null ? "hint" : T.ok ? "ok" : "err", children: B }),
    /* @__PURE__ */ d.jsx(
      St,
      {
        label: "Python 解释器路径（留空 = PATH 上的 python；保存即生效）",
        value: v,
        onChange: (re) => b(re.currentTarget.value),
        placeholder: "例：C:\\\\Python312\\\\python.exe"
      }
    ),
    /* @__PURE__ */ d.jsxs("div", { className: "saverow", children: [
      /* @__PURE__ */ d.jsx(_e, { disabled: L, onClick: () => {
        O();
      }, children: L ? "检测中…" : "检测主引擎" }),
      /* @__PURE__ */ d.jsx("span", { className: "hint", children: "主引擎不可用时自动回退内置 unpdf，功能不缺，仅部分 PDF 的提取质量低一档。" })
    ] }),
    /* @__PURE__ */ d.jsxs("p", { className: "hint", children: [
      "启用主引擎：",
      le,
      " -m pip install pymupdf"
    ] }),
    /* @__PURE__ */ d.jsxs("div", { className: "saverow", children: [
      /* @__PURE__ */ d.jsx(_e, { variant: "primary", onClick: () => {
        V();
      }, children: "保存以上设置" }),
      S && /* @__PURE__ */ d.jsx("span", { className: "savehint", children: S })
    ] }),
    /* @__PURE__ */ d.jsx("p", { className: "hint", children: "命中判定：标定词过闸后，取最近对话文本与标签库/类型库做字典交集，交集词走共用检索层出候选；候选只附命中事实，采纳与否由会话内模型判断。同会话已注入条目不重复推。" })
  ] });
}
function ME({ onDone: u }) {
  const [r, o] = H.useState(""), [s, h] = H.useState(!1), [m, v] = H.useState(null), [b, S] = H.useState(!1), [E, T] = H.useState(!1);
  H.useEffect(() => {
    let O = !1;
    return (async () => {
      const V = await Be("/api/import/status").catch(() => null);
      if (O || !V || !V.running) return;
      h(!0), v({ ok: !0, stage: "running", message: "拆解进行中（接管切页前的任务）…" });
      const B = await Lo();
      O || (v(B), B.ok ? (mt.toast.show({ message: "拆解完成，已入库", type: "success" }), u()) : B.alreadyExists ? (mt.toast.show({ message: "篇目已在库中，未重复导入", type: "success" }), u()) : B.failureTs && (mt.toast.show({ message: "拆解失败，已记入待办", type: "error" }), u()), h(!1));
    })(), () => {
      O = !0;
    };
  }, []);
  async function p(O, V) {
    h(!0), v(null);
    try {
      const B = await Pe("/api/import/enqueue", { items: [O] });
      B && B.ok ? (v({ ok: !0, stage: "queued", message: `已入队：${V}（队列串行执行，进度看下方「导入队列」）` }), mt.toast.show({ message: `已入队 ${B.queued} 篇，队列开始执行`, type: "success" }), u()) : v({ ok: !1, stage: "input", message: B?.message || "入队失败" });
    } catch (B) {
      v({ ok: !1, stage: "network", message: String(B?.message || B) });
    }
    h(!1);
  }
  async function L(O) {
    const V = String(O || "").trim();
    if (!V) {
      v({ ok: !1, stage: "input", message: "请先粘贴文献全文，或选择 / 拖入 md、txt、pdf 文件" });
      return;
    }
    const le = (V.split(`
`)[0] || "").replace(/^#+\s*/, "").trim().slice(0, 30) || "粘贴文献";
    await p({ label: le, text: V, source: "paste" }, le);
  }
  async function N(O) {
    if (/\.pdf$/i.test(O.name)) {
      if (O.size > 50 * 1024 * 1024) {
        v({ ok: !1, stage: "input", message: "PDF 超过 50 MB 上限" });
        return;
      }
      try {
        const V = await new Promise((B, le) => {
          const re = new FileReader();
          re.onload = () => B(String(re.result).split(",")[1] || ""), re.onerror = () => le(new Error("文件读取失败")), re.readAsDataURL(O);
        });
        await p({ label: O.name, pdfBase64: V, source: "file" }, O.name);
      } catch (V) {
        v({ ok: !1, stage: "input", message: String(V?.message || V) });
      }
      return;
    }
    if (!/\.(md|txt)$/i.test(O.name)) {
      v({ ok: !1, stage: "input", message: "支持 md / txt / pdf 文件" });
      return;
    }
    await p({ label: O.name, text: await O.text(), source: "file" }, O.name);
  }
  return /* @__PURE__ */ d.jsxs("div", { className: "import-zone", children: [
    /* @__PURE__ */ d.jsx("h4", { className: "import-title", children: "导入文献" }),
    /* @__PURE__ */ d.jsxs(
      "div",
      {
        className: b ? "drop on" : "drop",
        onDragOver: (O) => {
          O.preventDefault(), S(!0);
        },
        onDragLeave: () => S(!1),
        onDrop: (O) => {
          O.preventDefault(), S(!1);
          const V = O.dataTransfer.files?.[0];
          V && N(V);
        },
        children: [
          /* @__PURE__ */ d.jsx("p", { children: "把 .md / .txt / .pdf 文献拖到这里" }),
          /* @__PURE__ */ d.jsxs("label", { className: "filepick", children: [
            "或选择文件",
            /* @__PURE__ */ d.jsx(
              "input",
              {
                type: "file",
                accept: ".md,.txt,.pdf,text/plain,text/markdown,application/pdf",
                style: { display: "none" },
                onChange: (O) => {
                  const V = O.target.files?.[0];
                  O.target.value = "", V && N(V);
                }
              }
            )
          ] }),
          /* @__PURE__ */ d.jsxs("p", { className: "hint zotero-toggle", children: [
            "或",
            /* @__PURE__ */ d.jsx("button", { className: "linkbtn", onClick: () => T((O) => !O), children: E ? "收起 Zotero" : "从 Zotero 取" })
          ] })
        ]
      }
    ),
    E && /* @__PURE__ */ d.jsx(LE, {}),
    /* @__PURE__ */ d.jsx(
      "textarea",
      {
        className: "pastebox",
        value: r,
        onChange: (O) => o(O.target.value),
        placeholder: "也可以直接粘贴文献全文…",
        rows: 4,
        disabled: s
      }
    ),
    /* @__PURE__ */ d.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ d.jsx(_e, { variant: "primary", disabled: s || !r.trim(), onClick: () => {
        L(r);
      }, children: "加入队列并开始" }),
      s && /* @__PURE__ */ d.jsx("span", { className: "hint", children: "正在入队…" })
    ] }),
    m && /* @__PURE__ */ d.jsx("pre", { className: m.ok || m.alreadyExists ? "ok" : "err", children: m.alreadyExists ? `${m.message || "篇目已在库中（id 三要素相同视为同一篇），未重复导入。"}` : m.ok ? m.stage === "running" ? `${m.message || "拆解进行中…"}` : m.stage === "queued" ? m.message : `已入库：${m.file}（第 ${m.attempts} 次通过${m.tagsAdded?.length ? `，新增标签 ${m.tagsAdded.join("、")}` : ""}）` + (m.pdfEngine ? `
PDF 引擎：${m.pdfEngine === "pymupdf" ? "PyMuPDF" : "unpdf（回退）—— 安装 PyMuPDF 可启用更稳的主引擎：python -m pip install pymupdf"}` : "") : `${m.message || "拆解失败"}${m.errors?.length ? `
` + m.errors.slice(0, 6).map((O) => `· ${O.field}：${O.message}`).join(`
`) : ""}${m.failureTs ? `
（已记入待办，可到「待办 · 导入失败」重试）` : ""}` }),
    /* @__PURE__ */ d.jsx(qE, {})
  ] });
}
const HE = {
  pending: "排队",
  running: "运行中",
  stopping: "停止中",
  done: "✓ 完成",
  failed: "✗ 失败",
  cancelled: "■ 已停止"
};
function yg({ nodes: u, active: r, onPick: o, depth: s = 0 }) {
  return /* @__PURE__ */ d.jsx(d.Fragment, { children: u.map((h) => /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsx(
      "button",
      {
        className: r === h.key ? "collbtn on" : "collbtn",
        style: { paddingLeft: 8 + s * 14 },
        onClick: () => o(h.key, h.name),
        children: h.name
      }
    ),
    h.children.length > 0 && /* @__PURE__ */ d.jsx(yg, { nodes: h.children, active: r, onPick: o, depth: s + 1 })
  ] }, h.key)) });
}
function qE() {
  const [u, r] = H.useState([]), [o, s] = H.useState(null), [h, m] = H.useState(""), [v, b] = H.useState(null);
  H.useEffect(() => {
    let N = !0;
    const O = () => {
      Be("/api/import/queue").then((B) => {
        N && B && B.ok && (r(B.items || []), s(B));
      }).catch(() => {
      });
    };
    O();
    const V = setInterval(O, 3e3);
    return () => {
      N = !1, clearInterval(V);
    };
  }, []);
  async function S() {
    const N = await Be("/api/import/queue").catch(() => null);
    N && N.ok && (r(N.items || []), s(N));
  }
  async function E(N, O, V = {}) {
    const B = await Pe("/api/import/queue-action", O !== void 0 ? { action: N, key: O, ...V } : { action: N });
    return B && B.ok ? (s(B.snapshot), S(), !0) : (m(B?.message || "操作失败"), !1);
  }
  function T(N) {
    const O = v;
    b(null), !(O === null || O === N) && E("reorder", O, { before: N });
  }
  const p = o?.total ?? u.length, L = (o?.done ?? 0) + (o?.failed ?? 0) + (o?.cancelled ?? 0);
  return /* @__PURE__ */ d.jsxs("div", { className: "queuebox", children: [
    /* @__PURE__ */ d.jsxs("div", { className: "qhead", children: [
      /* @__PURE__ */ d.jsx("b", { children: "导入队列" }),
      /* @__PURE__ */ d.jsx("span", { className: "hint", children: p ? `${L}/${p} 完成 · 运行 ${(o?.running ?? 0) + (o?.stopping ?? 0)} · 排队 ${o?.pending ?? 0}${o?.paused ? " · 已暂停" : ""}` : "队列为空" }),
      /* @__PURE__ */ d.jsxs("span", { className: "qhead-actions", children: [
        /* @__PURE__ */ d.jsx(_e, { disabled: !o || p === 0, onClick: () => {
          E(o?.paused ? "resume" : "pause");
        }, children: o?.paused ? "继续" : "暂停" }),
        /* @__PURE__ */ d.jsx(_e, { disabled: !o || (o?.done ?? 0) + (o?.cancelled ?? 0) === 0, onClick: () => {
          E("clear-done");
        }, children: "清理已完成" })
      ] })
    ] }),
    h && /* @__PURE__ */ d.jsx("p", { className: "hint", children: h }),
    u.length === 0 ? /* @__PURE__ */ d.jsx("p", { className: "hint", children: "拖入文件、粘贴全文或从 Zotero 加入后，条目在这里串行拆解；支持单篇停止/开始与拖拽排序。" }) : /* @__PURE__ */ d.jsx("div", { className: "qlist", children: u.map((N) => /* @__PURE__ */ d.jsxs(
      "div",
      {
        className: v === N.key ? "qrow dragging" : "qrow",
        draggable: N.status === "pending",
        onDragStart: () => b(N.key),
        onDragOver: (O) => O.preventDefault(),
        onDrop: () => T(N.key),
        onDragEnd: () => b(null),
        children: [
          /* @__PURE__ */ d.jsx("span", { className: "qhandle", title: "拖拽排序（仅排队中）", children: "☰" }),
          /* @__PURE__ */ d.jsx("span", { className: "qstatus", children: HE[N.status] || N.status }),
          /* @__PURE__ */ d.jsx("span", { className: "qlabel", title: N.message || N.file || "", children: N.label }),
          (N.status === "pending" || N.status === "running") && /* @__PURE__ */ d.jsx(_e, { onClick: () => {
            E("cancel", N.key);
          }, children: "停止" }),
          N.status === "stopping" && /* @__PURE__ */ d.jsx("span", { className: "hint", children: "停止中…" }),
          (N.status === "cancelled" || N.status === "failed") && /* @__PURE__ */ d.jsx(_e, { onClick: () => {
            E("start", N.key);
          }, children: "开始" }),
          N.status !== "running" && N.status !== "stopping" && /* @__PURE__ */ d.jsx(_e, { onClick: () => {
            E("remove", N.key);
          }, children: "移除" }),
          N.status === "failed" && N.message && /* @__PURE__ */ d.jsx("span", { className: "qerr", children: N.message }),
          N.status === "done" && /* @__PURE__ */ d.jsx("span", { className: "qok", children: "已入库" })
        ]
      },
      N.key
    )) })
  ] });
}
function LE() {
  const [u, r] = H.useState([]), [o, s] = H.useState(null), [h, m] = H.useState([]), [v, b] = H.useState(""), [S, E] = H.useState("collection"), [T, p] = H.useState(null), [L, N] = H.useState(/* @__PURE__ */ new Set()), [O, V] = H.useState(""), [B, le] = H.useState(!1);
  H.useEffect(() => {
    Be("/api/zotero/collections").then((se) => {
      se && se.ok ? r(se.collections || []) : V(se?.message || "分类读取失败（Zotero 桌面端在运行吗？）");
    }).catch(() => V("分类读取失败"));
  }, []);
  async function re(se, ge) {
    E("collection"), s(se), N(/* @__PURE__ */ new Set()), le(!0), V(`加载「${ge}」…`);
    try {
      const ve = await Be(`/api/zotero/collection-items?key=${encodeURIComponent(se)}`);
      ve && ve.ok ? (m(ve.items || []), ve.truncated ? V(`该分类较大，列表显示前 ${ve.items.length} 条文献；更多可用搜索收窄`) : (ve.items || []).length ? V("") : V("该分类没有可导入的文献条目")) : V(ve?.message || "条目读取失败");
    } catch (ve) {
      V(String(ve?.message || ve));
    }
    le(!1);
  }
  async function ce() {
    E("search"), s(null), N(/* @__PURE__ */ new Set()), le(!0), V("");
    try {
      const se = await Pe("/api/tool/zotero_search", { query: v, limit: 50 });
      se && Array.isArray(se.items) ? (p(se.items.map((ge) => ({
        key: ge.key,
        title: ge.title,
        authors: ge.creators,
        year: String(ge.date || "").slice(0, 4),
        itemType: ge.itemType
      }))), se.items.length || V("没有命中条目")) : V(se?.message || "Zotero 查询失败");
    } catch (se) {
      V(String(se?.message || se));
    }
    le(!1);
  }
  const K = S === "collection" ? h : T || [];
  function ie(se) {
    N((ge) => {
      const ve = new Set(ge);
      return ve.has(se) ? ve.delete(se) : ve.add(se), ve;
    });
  }
  function ne() {
    N((se) => se.size >= K.length && K.length > 0 ? /* @__PURE__ */ new Set() : new Set(K.map((ge) => ge.key)));
  }
  async function ue() {
    const se = K.filter((G) => L.has(G.key));
    if (!se.length) {
      V("先勾选条目");
      return;
    }
    le(!0);
    const ge = [], ve = [];
    for (let G = 0; G < se.length; G++) {
      const pe = se[G];
      V(`解析附件 ${G + 1}/${se.length}…`);
      try {
        const De = await Pe("/api/tool/zotero_item", { key: pe.key }), q = De && Array.isArray(De.attachments) && De.attachments[0] ? De.attachments[0] : null;
        if (!q) {
          ve.push(pe.title || pe.key);
          continue;
        }
        const M = await Pe("/api/tool/zotero_attachment_path", { attachmentKey: q.key || q });
        M && M.path ? ge.push({ label: pe.title || pe.key, pdfPath: String(M.path), source: `zotero:${pe.key}` }) : ve.push(pe.title || pe.key);
      } catch {
        ve.push(pe.title || pe.key);
      }
    }
    if (ge.length) {
      const G = await Pe("/api/import/enqueue", { items: ge });
      G && G.ok ? (V(`已入队 ${G.queued} 篇${ve.length ? `；${ve.length} 篇缺附件未入队：${ve.slice(0, 2).join("、")}${ve.length > 2 ? "…" : ""}` : ""}`), N(/* @__PURE__ */ new Set()), mt.toast.show({ message: `已入队 ${G.queued} 篇，队列开始执行`, type: "success" })) : V(G?.message || "入队失败");
    } else
      V(`没有可入队条目${ve.length ? `（${ve.length} 篇缺附件）` : ""}`);
    le(!1);
  }
  async function be(se) {
    le(!0);
    try {
      const ge = await Pe("/api/tool/zotero_item", { key: se }), ve = ge && Array.isArray(ge.attachments) && ge.attachments[0] ? ge.attachments[0] : null;
      if (!ve) {
        V("该条目无附件"), le(!1);
        return;
      }
      const G = await Pe("/api/tool/zotero_attachment_path", { attachmentKey: ve.key || ve });
      G && G.path ? (await mt.clipboard.writeText(String(G.path)), mt.toast.show({ message: "路径已复制", type: "success" })) : V(G?.message || "附件路径解析失败");
    } catch (ge) {
      V(String(ge?.message || ge));
    }
    le(!1);
  }
  return /* @__PURE__ */ d.jsxs("div", { className: "zbox", children: [
    /* @__PURE__ */ d.jsx("p", { className: "hint", children: "需 Zotero 桌面端运行，且设置 → 高级 → 勾选「Allow other applications on this computer to communicate with Zotero」。勾选后加入队列，串行拆解（并发 1，随时可停）。" }),
    /* @__PURE__ */ d.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ d.jsx(
        St,
        {
          label: "搜索（标题 / 作者 / 年份）",
          value: v,
          onChange: (se) => b(se.currentTarget.value),
          onKeyDown: (se) => {
            se.key === "Enter" && ce();
          }
        }
      ),
      /* @__PURE__ */ d.jsx(_e, { disabled: B, onClick: () => {
        ce();
      }, children: "搜索" }),
      /* @__PURE__ */ d.jsxs(_e, { variant: "primary", disabled: B || L.size === 0, onClick: () => {
        ue();
      }, children: [
        "加入队列（",
        L.size,
        "）"
      ] }),
      /* @__PURE__ */ d.jsx(_e, { disabled: B || K.length === 0, onClick: ne, children: L.size >= K.length && K.length > 0 ? "取消全选" : "全选本页" })
    ] }),
    O && /* @__PURE__ */ d.jsx("p", { className: "hint", children: O }),
    /* @__PURE__ */ d.jsxs("div", { className: "zgrid", children: [
      /* @__PURE__ */ d.jsxs("div", { className: "ztree", children: [
        /* @__PURE__ */ d.jsx(
          "div",
          {
            className: S === "collection" && !o ? "collbtn on" : "collbtn",
            onClick: () => {
              E("collection"), N(/* @__PURE__ */ new Set());
            },
            children: "按分类浏览"
          }
        ),
        /* @__PURE__ */ d.jsx(yg, { nodes: u, active: o, onPick: (se, ge) => {
          re(se, ge);
        } })
      ] }),
      /* @__PURE__ */ d.jsxs("div", { className: "zlist zlistpick", children: [
        K.length === 0 && /* @__PURE__ */ d.jsx("p", { className: "hint", children: S === "collection" ? "选择左侧分类加载条目，或用搜索。" : "搜索无结果。" }),
        K.map((se) => /* @__PURE__ */ d.jsxs("label", { className: "zrow", children: [
          /* @__PURE__ */ d.jsx("input", { type: "checkbox", checked: L.has(se.key), onChange: () => ie(se.key) }),
          /* @__PURE__ */ d.jsxs("span", { className: "zrow-main", children: [
            /* @__PURE__ */ d.jsx("b", { children: se.title || "（无题名）" }),
            /* @__PURE__ */ d.jsx("span", { className: "hint", children: [se.authors, se.year].filter(Boolean).join(" · ") })
          ] }),
          /* @__PURE__ */ d.jsx(
            "button",
            {
              className: "linkbtn",
              onClick: (ge) => {
                ge.preventDefault(), be(se.key);
              },
              children: "路径"
            }
          )
        ] }, se.key))
      ] })
    ] })
  ] });
}
function IE({ stats: u, go: r, onDone: o }) {
  const s = u ? u.queuePending + u.failures : 0, [h, m] = H.useState("loading"), [v, b] = H.useState(""), S = H.useCallback(() => {
    m("loading"), Be("/api/config").then((p) => {
      if (!p || p.ok !== !0 || !p.config) {
        b(p?.message || "接口未返回配置"), m("error");
        return;
      }
      const L = String(p.config.libraryPath ?? "");
      m(L && !L.startsWith("NOT_CONFIGURED") ? "ok" : "unconfigured");
    }).catch((p) => {
      b(String(p?.message || p)), m("error");
    });
  }, []);
  H.useEffect(() => {
    S();
  }, [S]);
  const [E, T] = H.useState(null);
  return H.useEffect(() => {
    Ir().then(T);
  }, []), /* @__PURE__ */ d.jsxs("div", { className: "home", children: [
    /* @__PURE__ */ d.jsx("p", { className: "tagline", children: "把论文拆成可回溯的论证结构，沉淀为写作模型，学习学术写作时检索取用。" }),
    h === "error" && /* @__PURE__ */ d.jsxs("div", { className: "home-banner", children: [
      "读取配置失败（",
      v || "未知原因",
      "），暂时无法判断结构库是否已配置。",
      /* @__PURE__ */ d.jsx(_e, { onClick: S, children: "重试" }),
      /* @__PURE__ */ d.jsx(_e, { onClick: () => r("settings"), children: "去设置" })
    ] }),
    h === "unconfigured" && /* @__PURE__ */ d.jsxs("div", { className: "home-banner", children: [
      "尚未配置结构库。到「设置」填写 libraryPath 并保存，模板会自动铺到该目录，无需手动拷贝。",
      /* @__PURE__ */ d.jsx(_e, { onClick: () => r("settings"), children: "前往设置" })
    ] }),
    E && E.ok === !1 && /* @__PURE__ */ d.jsxs("div", { className: "home-banner", children: [
      "PDF 主引擎 PyMuPDF 未启用（",
      E.error || "未知原因",
      "），当前使用内置解析；功能不缺，部分 PDF 的提取质量低一档。",
      /* @__PURE__ */ d.jsx(_e, { onClick: () => r("settings"), children: "去设置" })
    ] }),
    /* @__PURE__ */ d.jsxs("ol", { className: "steps", children: [
      /* @__PURE__ */ d.jsx("li", { children: "把文献拖进面板一键拆解，或在对话里让我拆" }),
      /* @__PURE__ */ d.jsx("li", { children: "库里提出的疑问到「待办」处理，保证每条引文可回溯" }),
      /* @__PURE__ */ d.jsx("li", { children: "写论文时到「取用」检索同类模型，按出处引用" })
    ] }),
    /* @__PURE__ */ d.jsxs("div", { className: "home-actions", children: [
      /* @__PURE__ */ d.jsx(_e, { variant: "primary", onClick: () => r("use"), children: "去取用" }),
      /* @__PURE__ */ d.jsx(_e, { onClick: () => r("library"), children: "看结构库" }),
      /* @__PURE__ */ d.jsx(_e, { disabled: !u || s === 0, onClick: () => r("todo"), children: s > 0 ? `处理待办（${s}）` : "暂无待办" })
    ] }),
    /* @__PURE__ */ d.jsx("div", { className: "statusbar", children: u ? `库内 ${u.papers} 篇目 · ${u.models} 模型 · 待办 ${s} 条` : "统计中…" }),
    /* @__PURE__ */ d.jsx("p", { className: "usage-note", children: "使用边界：仅处理你有权使用的文本；结构库保存在本机，不随插件分发，仅供个人学习使用。" }),
    /* @__PURE__ */ d.jsx(ME, { onDone: o })
  ] });
}
function BE({ tick: u, bump: r }) {
  const [o, s] = H.useState([]), [h, m] = H.useState(null), [v, b] = H.useState(""), S = H.useCallback(async () => {
    const p = await Be("/api/import/failures").catch(() => ({ items: [] }));
    s(p.items || []);
  }, []);
  H.useEffect(() => {
    S();
  }, [S, u]), H.useEffect(() => {
    let p = !1;
    return (async () => {
      const L = await Be("/api/import/status").catch(() => null);
      if (p || !L || !L.running) return;
      b("有导入任务进行中，等待结果…");
      const N = await Lo();
      p || (b(N.ok ? `完成：${N.file}` : `仍失败：${Jl(N)}${N.failureTs ? "（已刷新记录）" : ""}`), (N.ok || N.failureTs) && (await S(), r()));
    })(), () => {
      p = !0;
    };
  }, []);
  async function E(p) {
    if (!!!(p.text && String(p.text).trim()) && !p.pdfPath) {
      b(p.needsFile ? "该条目是文件拖入的 PDF，原文件未随记录保留，请把 PDF 重新拖入导入区" : "该条目无可重试内容（原文未保留），请重新提供文件");
      return;
    }
    m(p.ts), b("");
    try {
      const N = { text: p.text, fromTs: p.ts, filename: p.source };
      p.pdfPath && (N.pdfPath = p.pdfPath);
      const O = await Pe("/api/import", N);
      if (O.alreadyExists)
        b(`已在库中，未重复导入${O.id ? `：${O.id}` : ""}；待办记录已清除`), mt.toast.show({ message: "篇目已在库中，未重复导入", type: "success" });
      else if (O.started) {
        b("重试中（约 1-3 分钟，可离开本页）…");
        const V = await Lo();
        V.ok ? (b(`重试成功：${V.file}`), mt.toast.show({ message: "重试成功，已入库", type: "success" })) : V.alreadyExists ? (b(`已在库中，未重复导入${V.id ? `：${V.id}` : ""}；待办记录已清除`), mt.toast.show({ message: "篇目已在库中，未重复导入", type: "success" })) : b(`仍失败：${Jl(V)}${V.failureTs ? "（已刷新记录）" : ""}`);
      } else O.ok ? (b(`重试成功：${O.file}`), mt.toast.show({ message: "重试成功，已入库", type: "success" })) : b(`仍失败：${Jl(O)}`);
    } catch (N) {
      b(`请求失败：${String(N?.message || N)}`);
    }
    m(null), await S(), r();
  }
  async function T(p) {
    await Pe("/api/import/failures/dismiss", { ts: p.ts }).catch(() => null), await S(), r();
  }
  return o.length ? /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsxs("p", { className: "hint", children: [
      o.length > 0 && /* @__PURE__ */ d.jsxs("b", { children: [
        "共 ",
        o.length,
        " 条待处理　"
      ] }),
      "拆解失败的导入（多为校验未过或模型异常）连原文一起存在这里，重试走同一条链路。"
    ] }),
    o.map((p) => /* @__PURE__ */ d.jsxs("div", { className: "fail-item", children: [
      /* @__PURE__ */ d.jsxs("div", { className: "fail-head", children: [
        /* @__PURE__ */ d.jsx("b", { children: p.title || p.source || "（未识别条目）" }),
        (p.authors || p.year) && /* @__PURE__ */ d.jsx("span", { className: "hint", children: [p.authors, p.year].filter(Boolean).join(" · ") }),
        /* @__PURE__ */ d.jsx("span", { className: "badge", children: p.stage }),
        /* @__PURE__ */ d.jsxs("span", { className: "hint", children: [
          new Date(p.ts).toLocaleString(),
          " · 尝试 ",
          p.attempts,
          " 次 · ",
          (p.text || "").length,
          " 字"
        ] })
      ] }),
      p.id && /* @__PURE__ */ d.jsxs("div", { className: "hint", children: [
        "id：",
        p.id
      ] }),
      p.stage === "pdf_extract" && /* @__PURE__ */ d.jsx("div", { className: "hint", children: p.needsFile ? "PDF 提取失败；原文件未随记录保留，重试需把文件重新拖入" : "PDF 提取失败；可重试或换带文字层的版本" }),
      /* @__PURE__ */ d.jsx("div", { className: "fail-msg", children: p.message }),
      (p.errors || []).slice(0, 4).map((L, N) => /* @__PURE__ */ d.jsxs("div", { className: "hint", children: [
        "· ",
        L.field,
        "：",
        L.message
      ] }, N)),
      /* @__PURE__ */ d.jsxs("div", { className: "fail-actions", children: [
        /* @__PURE__ */ d.jsx(_e, { variant: "primary", disabled: h === p.ts, onClick: () => {
          E(p);
        }, children: h === p.ts ? "重试中…" : "重试" }),
        /* @__PURE__ */ d.jsx(_e, { disabled: h === p.ts, onClick: () => {
          T(p);
        }, children: "移除" })
      ] })
    ] }, p.ts)),
    v && /* @__PURE__ */ d.jsx("p", { className: v.startsWith("重试成功") || v.startsWith("已在库中") ? "ok" : "err", children: v })
  ] }) : /* @__PURE__ */ d.jsx(tl, { title: "暂无导入失败", description: "导入拆解失败的文献会落在这里，可原样重试。" });
}
function VE() {
  const u = document.getElementById("root")?.dataset.surface || "page", [r, o] = H.useState("home"), [s, h] = H.useState({
    home: "",
    use: "search",
    library: "browse",
    todo: "score",
    settings: ""
  }), [m, v] = H.useState(0), [b, S] = H.useState(null), E = H.useCallback(() => v((O) => O + 1), []), T = H.useCallback((O) => o(O), []);
  H.useEffect(() => {
    mt.ready(), mt.ui.resize({ height: u === "widget" ? 420 : 760 });
  }, [u]), H.useEffect(() => {
    let O = !0;
    return SE().then((V) => {
      O && S(V);
    }).catch(() => {
      O && S(null);
    }), () => {
      O = !1;
    };
  }, [m, r]);
  const p = s[r], L = H.useMemo(() => {
    switch (r) {
      case "home":
        return /* @__PURE__ */ d.jsx(IE, { stats: b, go: T, onDone: E });
      case "use":
        return p === "models" ? /* @__PURE__ */ d.jsx(DE, { tick: m }) : /* @__PURE__ */ d.jsx(UE, {});
      case "library":
        return p === "compare" ? /* @__PURE__ */ d.jsx(CE, { tick: m }) : p === "board" ? /* @__PURE__ */ d.jsx(xE, { tick: m }) : /* @__PURE__ */ d.jsx(OE, { tick: m });
      case "todo":
        return p === "queue" ? /* @__PURE__ */ d.jsx(_E, { tick: m, onChanged: E }) : p === "types" ? /* @__PURE__ */ d.jsx(wE, { tick: m, onChanged: E }) : p === "import-fail" ? /* @__PURE__ */ d.jsx(BE, { tick: m, bump: E }) : /* @__PURE__ */ d.jsx(TE, {});
      case "settings":
        return /* @__PURE__ */ d.jsx(zE, {});
    }
  }, [r, p, m, b, T, E]), N = b ? b.queuePending + b.failures : 0;
  return /* @__PURE__ */ d.jsx(mE, { mode: "inherit", className: "plugin-panel", children: /* @__PURE__ */ d.jsxs(
    Mn,
    {
      title: "论文结构建模",
      description: "把论文拆成可回溯的论证结构，沉淀为写作模型，学习学术写作时检索取用。",
      actions: /* @__PURE__ */ d.jsx(_e, { variant: "ghost", onClick: E, children: "刷新" }),
      children: [
        /* @__PURE__ */ d.jsx("nav", { className: "tabs zones", children: vE.map((O) => /* @__PURE__ */ d.jsxs("button", { className: r === O.id ? "tab on" : "tab", onClick: () => o(O.id), children: [
          O.label,
          O.id === "todo" && N > 0 && /* @__PURE__ */ d.jsx("span", { className: "nav-badge", children: N })
        ] }, O.id)) }),
        r !== "home" && r !== "settings" && /* @__PURE__ */ d.jsx("nav", { className: "tabs sub", children: yE[r].map((O) => /* @__PURE__ */ d.jsxs(
          "button",
          {
            className: p === O.id ? "tab on" : "tab",
            onClick: () => h((V) => ({ ...V, [r]: O.id })),
            children: [
              O.label,
              r === "todo" && O.id === "import-fail" && (b?.failures ?? 0) > 0 && /* @__PURE__ */ d.jsx("span", { className: "nav-badge", children: b?.failures ?? 0 }),
              r === "todo" && O.id === "queue" && (b?.queuePending ?? 0) > 0 && /* @__PURE__ */ d.jsx("span", { className: "nav-badge", children: b?.queuePending ?? 0 })
            ]
          },
          O.id
        )) }),
        /* @__PURE__ */ d.jsx("div", { className: "tab-body", children: L })
      ]
    }
  ) });
}
const Ip = document.getElementById("root");
Ip && T0.createRoot(Ip).render(/* @__PURE__ */ d.jsx(VE, {}));
