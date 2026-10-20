var yo = { exports: {} }, ki = {};
var hp;
function h0() {
  if (hp) return ki;
  hp = 1;
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
  return ki.Fragment = r, ki.jsx = o, ki.jsxs = o, ki;
}
var mp;
function m0() {
  return mp || (mp = 1, yo.exports = h0()), yo.exports;
}
var d = m0(), bo = { exports: {} }, xe = {};
var pp;
function p0() {
  if (pp) return xe;
  pp = 1;
  var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), s = /* @__PURE__ */ Symbol.for("react.strict_mode"), h = /* @__PURE__ */ Symbol.for("react.profiler"), m = /* @__PURE__ */ Symbol.for("react.consumer"), v = /* @__PURE__ */ Symbol.for("react.context"), b = /* @__PURE__ */ Symbol.for("react.forward_ref"), E = /* @__PURE__ */ Symbol.for("react.suspense"), S = /* @__PURE__ */ Symbol.for("react.memo"), T = /* @__PURE__ */ Symbol.for("react.lazy"), p = /* @__PURE__ */ Symbol.for("react.activity"), L = /* @__PURE__ */ Symbol.for("react.view_transition"), N = Symbol.iterator;
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
  function he() {
  }
  he.prototype = re.prototype;
  function K(g, D, P) {
    this.props = g, this.context = D, this.refs = le, this.updater = P || V;
  }
  var ie = K.prototype = new he();
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
  function ee(g, D, P, $, oe) {
    var me = typeof g;
    (me === "undefined" || me === "boolean") && (g = null);
    var fe = !1;
    if (g === null) fe = !0;
    else
      switch (me) {
        case "bigint":
        case "string":
        case "number":
          fe = !0;
          break;
        case "object":
          switch (g.$$typeof) {
            case u:
            case r:
              fe = !0;
              break;
            case T:
              return fe = g._init, ee(
                fe(g._payload),
                D,
                P,
                $,
                oe
              );
          }
      }
    if (fe)
      return oe = oe(g), fe = $ === "" ? "." + q(g, 0) : $, ne(oe) ? (P = "", fe != null && (P = fe.replace(De, "$&/") + "/"), ee(oe, D, P, "", function(We) {
        return We;
      })) : oe != null && (G(oe) && (oe = ve(
        oe,
        P + (oe.key == null || g && g.key === oe.key ? "" : ("" + oe.key).replace(
          De,
          "$&/"
        ) + "/") + fe
      )), D.push(oe)), 1;
    fe = 0;
    var W = $ === "" ? "." : $ + ":";
    if (ne(g))
      for (var de = 0; de < g.length; de++)
        $ = g[de], me = W + q($, de), fe += ee(
          $,
          D,
          P,
          me,
          oe
        );
    else if (de = O(g), typeof de == "function")
      for (g = de.call(g), de = 0; !($ = g.next()).done; )
        $ = $.value, me = W + q($, de++), fe += ee(
          $,
          D,
          P,
          me,
          oe
        );
    else if (me === "object") {
      if (typeof g.then == "function")
        return ee(
          M(g),
          D,
          P,
          $,
          oe
        );
      throw D = String(g), Error(
        "Objects are not valid as a React child (found: " + (D === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : D) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return fe;
  }
  function j(g, D, P) {
    if (g == null) return g;
    var $ = [], oe = 0;
    return ee(g, $, "", "", function(me) {
      return D.call(P, me, oe++);
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
      var $ = g(), oe = be.S;
      oe !== null && oe(P, $), typeof $ == "object" && $ !== null && typeof $.then == "function" && $.then(ue, ae);
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
  return xe.Activity = p, xe.Children = J, xe.Component = re, xe.Fragment = o, xe.Profiler = h, xe.PureComponent = K, xe.StrictMode = s, xe.Suspense = E, xe.ViewTransition = L, xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = be, xe.__COMPILER_RUNTIME = {
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
    var $ = B({}, g.props), oe = g.key;
    if (D != null)
      for (me in D.key !== void 0 && (oe = "" + D.key), D)
        !se.call(D, me) || me === "key" || me === "__self" || me === "__source" || me === "ref" && D.ref === void 0 || ($[me] = D[me]);
    var me = arguments.length - 2;
    if (me === 1) $.children = P;
    else if (1 < me) {
      for (var fe = Array(me), W = 0; W < me; W++)
        fe[W] = arguments[W + 2];
      $.children = fe;
    }
    return ge(g.type, oe, $);
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
    var $, oe = {}, me = null;
    if (D != null)
      for ($ in D.key !== void 0 && (me = "" + D.key), D)
        se.call(D, $) && $ !== "key" && $ !== "__self" && $ !== "__source" && (oe[$] = D[$]);
    var fe = arguments.length - 2;
    if (fe === 1) oe.children = P;
    else if (1 < fe) {
      for (var W = Array(fe), de = 0; de < fe; de++)
        W[de] = arguments[de + 2];
      oe.children = W;
    }
    if (g && g.defaultProps)
      for ($ in fe = g.defaultProps, fe)
        oe[$] === void 0 && (oe[$] = fe[$]);
    return ge(g, me, oe);
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
      $$typeof: S,
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
var gp;
function Lo() {
  return gp || (gp = 1, bo.exports = p0()), bo.exports;
}
var H = Lo(), Eo = { exports: {} }, Ki = {}, So = { exports: {} }, To = {};
var vp;
function g0() {
  return vp || (vp = 1, (function(u) {
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
    var E = [], S = [], T = 1, p = null, L = 3, N = !1, O = !1, V = !1, B = !1, le = typeof setTimeout == "function" ? setTimeout : null, re = typeof clearTimeout == "function" ? clearTimeout : null, he = typeof setImmediate < "u" ? setImmediate : null;
    function K(M) {
      for (var ee = o(S); ee !== null; ) {
        if (ee.callback === null) s(S);
        else if (ee.startTime <= M)
          s(S), ee.sortIndex = ee.expirationTime, r(E, ee);
        else break;
        ee = o(S);
      }
    }
    function ie(M) {
      if (V = !1, K(M), !O)
        if (o(E) !== null)
          O = !0, ne || (ne = !0, G());
        else {
          var ee = o(S);
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
                for (K(M), p = o(E); p !== null && !(p.expirationTime > M && ge()); ) {
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
                    p === o(E) && s(E), K(M);
                  } else s(E);
                  p = o(E);
                }
                if (p !== null) ee = !0;
                else {
                  var I = o(S);
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
    if (typeof he == "function")
      G = function() {
        he(ve);
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
      }, j > F ? (M.sortIndex = j, r(S, M), o(E) === null && M === o(S) && (V ? (re(ue), ue = -1) : V = !0, q(ie, j - F))) : (M.sortIndex = ae, r(E, M), O || N || (O = !0, ne || (ne = !0, G()))), M;
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
  })(To)), To;
}
var yp;
function v0() {
  return yp || (yp = 1, So.exports = g0()), So.exports;
}
var Ao = { exports: {} }, Rt = {};
var bp;
function y0() {
  if (bp) return Rt;
  bp = 1;
  var u = Lo();
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
  var E = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function S(T, p) {
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
    var p = E.T, L = s.p;
    try {
      if (E.T = null, s.p = 2, T) return T();
    } finally {
      E.T = p, s.p = L, s.d.f();
    }
  }, Rt.preconnect = function(T, p) {
    typeof T == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, s.d.C(T, p));
  }, Rt.prefetchDNS = function(T) {
    typeof T == "string" && s.d.D(T);
  }, Rt.preinit = function(T, p) {
    if (typeof T == "string" && p && typeof p.as == "string") {
      var L = p.as, N = S(L, p.crossOrigin), O = typeof p.integrity == "string" ? p.integrity : void 0, V = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
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
          var L = S(
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
      var L = p.as, N = S(L, p.crossOrigin);
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
        var L = S(p.as, p.crossOrigin);
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
    return E.H.useFormState(T, p, L);
  }, Rt.useFormStatus = function() {
    return E.H.useHostTransitionStatus();
  }, Rt.version = "19.3.0", Rt;
}
var Ep;
function Ip() {
  if (Ep) return Ao.exports;
  Ep = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (r) {
        console.error(r);
      }
  }
  return u(), Ao.exports = y0(), Ao.exports;
}
var Sp;
function b0() {
  if (Sp) return Ki;
  Sp = 1;
  var u = v0(), r = Lo(), o = Ip();
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
  function E(e) {
    if (m(e) !== e)
      throw Error(s(188));
  }
  function S(e) {
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
          if (i === n) return E(l), e;
          if (i === a) return E(l), t;
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
  function he(e, t, n) {
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
  var oe = /* @__PURE__ */ Symbol.for("react.client.reference");
  function me(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === oe ? null : e.displayName || e.name || null;
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
  var fe = Array.isArray, W = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, de = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, We = {
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
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Tm(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Tm(t), e = Am(t, e);
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
    var n = Am(t, e.type);
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
                } catch (ce) {
                  var _ = ce;
                }
                Reflect.construct(e, [], Q);
              } else {
                try {
                  Q.call();
                } catch (ce) {
                  _ = ce;
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
              } catch (ce) {
                _ = ce;
              }
              (Q = e()) && typeof Q.catch == "function" && Q.catch(function() {
              });
            }
          } catch (ce) {
            if (ce && _ && typeof ce.stack == "string")
              return [ce.stack, _.stack];
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
  var gn = Object.prototype.hasOwnProperty, Gr = u.unstable_scheduleCallback, Yr = u.unstable_cancelCallback, yg = u.unstable_shouldYield, bg = u.unstable_requestPaint, Qt = u.unstable_now, Eg = u.unstable_getCurrentPriorityLevel, Xo = u.unstable_ImmediatePriority, Qo = u.unstable_UserBlockingPriority, ru = u.unstable_NormalPriority, Sg = u.unstable_LowPriority, ko = u.unstable_IdlePriority, Tg = u.log, Ag = u.unstable_setDisableYieldValue, Wl = null, kt = null;
  function Wn(e) {
    if (typeof Tg == "function" && Ag(e), kt && typeof kt.setStrictMode == "function")
      try {
        kt.setStrictMode(Wl, e);
      } catch {
      }
  }
  var Kt = Math.clz32 ? Math.clz32 : wg, Ng = Math.log, _g = Math.LN2;
  function wg(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Ng(e) / _g | 0) | 0;
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
  function Ko(e, t) {
    (t & 8) !== 0 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var a = 31 - Kt(n), l = 1 << a;
        t |= e[a], n &= ~l;
      }
    return t;
  }
  function Og(e, t) {
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
  function Zo() {
    var e = ou;
    return ou <<= 1, (ou & 62914560) === 0 && (ou = 4194304), e;
  }
  function Xr(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function ti(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Cg(e, t, n, a, l, i) {
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
    a !== 0 && Jo(e, a, 0), i !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(c & ~t));
  }
  function Jo(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - Kt(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 261930;
  }
  function $o(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var a = 31 - Kt(n), l = 1 << a;
      l & t | e[a] & t && (e[a] |= t), n &= ~l;
    }
  }
  function Fo(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : Qr(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function Qr(e) {
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
  function kr(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function Po() {
    var e = de.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : up(e.type));
  }
  function Wo(e, t) {
    var n = de.p;
    try {
      return de.p = e, t();
    } finally {
      de.p = n;
    }
  }
  var qn = Math.random().toString(36).slice(2), Nt = "__reactFiber$" + qn, qt = "__reactProps$" + qn, nl = "__reactContainer$" + qn, ef = "__reactEvents$" + qn, xg = "__reactListeners$" + qn, Rg = "__reactHandles$" + qn, tf = "__reactResources$" + qn, ni = "__reactMarker$" + qn, du = "__reactLoad$" + qn;
  function hu(e) {
    delete e[Nt], delete e[qt], delete e[xg], delete e[Rg];
  }
  function Ua(e) {
    var t;
    if (t = e[Nt]) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[nl] || n[Nt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = Bm(e); e !== null; ) {
            if (n = e[Nt]) return n;
            e = Bm(e);
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
  function ai(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(s(33));
  }
  function ll(e) {
    var t = e[tf];
    return t || (t = e[tf] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function gt(e) {
    e[ni] = !0;
  }
  function nf(e) {
    e[du] = void 0;
  }
  var af = /* @__PURE__ */ new Set(), lf = {};
  function za(e, t) {
    il(e, t), il(e + "Capture", t);
  }
  function il(e, t) {
    for (lf[e] = t, e = 0; e < t.length; e++)
      af.add(t[e]);
  }
  var jg = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), uf = {}, rf = {};
  function Dg(e) {
    return gn.call(rf, e) ? !0 : gn.call(uf, e) ? !1 : jg.test(e) ? rf[e] = !0 : (uf[e] = !0, !1);
  }
  var Ge = !1;
  function sf() {
    var e = Ge;
    return Ge = !1, e;
  }
  function mu(e, t, n) {
    if (Dg(t))
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
  function pu(e, t, n) {
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
  function cf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Ug(e, t, n) {
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
      var t = cf(e) ? "checked" : "value";
      e._valueTracker = Ug(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function of(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), a = "";
    return e && (a = cf(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), !0) : !1;
  }
  var zg = /[\n"\\]/g;
  function ln(e) {
    return e.replace(
      zg,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Zr(e, t, n, a, l, i, c, f) {
    e.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? e.type = c : e.removeAttribute("type"), t != null ? c === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Zt(t)) : e.value !== "" + Zt(t) && (e.value = "" + Zt(t)) : c !== "submit" && c !== "reset" || e.removeAttribute("value"), t != null ? c === "number" && e.value == t ? Jr(e, Zt(e.value)) : Jr(e, Zt(t)) : n != null ? Jr(e, Zt(n)) : a != null && e.removeAttribute("value"), l == null && i != null && (e.defaultChecked = !!i), l != null && (e.checked = l && typeof l != "function" && typeof l != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.name = "" + Zt(f) : e.removeAttribute("name");
  }
  function ff(e, t, n, a, l, i, c, f) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || n != null) {
      if (!(i !== "submit" && i !== "reset" || t != null)) {
        Kr(e);
        return;
      }
      n = n != null ? "" + Zt(n) : "", t = t != null ? "" + Zt(t) : n, f || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? l, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = f ? e.checked : !!a, e.defaultChecked = !!a, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.name = c), Kr(e);
  }
  function Jr(e, t) {
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
  function df(e, t, n) {
    if (t != null && (t = "" + Zt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Zt(n) : "";
  }
  function hf(e, t, n, a) {
    if (t == null) {
      if (a != null) {
        if (n != null) throw Error(s(92));
        if (fe(a)) {
          if (1 < a.length) throw Error(s(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), t = n;
    }
    n = Zt(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a), Kr(e);
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
  var Mg = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function mf(e, t, n) {
    var a = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Mg.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function pf(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(s(62));
    if (e = e.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "", Ge = !0);
      for (var l in t)
        a = t[l], t.hasOwnProperty(l) && n[l] !== a && (mf(e, l, a), Ge = !0);
    } else
      for (var i in t)
        t.hasOwnProperty(i) && mf(e, i, t[i]);
  }
  function $r(e) {
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
  var Hg = /* @__PURE__ */ new Map([
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
  ]), qg = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function gu(e) {
    return qg.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Nn() {
  }
  var Fr = null;
  function Pr(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var sl = null, cl = null;
  function gf(e) {
    var t = al(e);
    if (t && (e = t.stateNode)) {
      var n = e[qt] || null;
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
                var l = a[qt] || null;
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
              a = n[t], a.form === e.form && of(a);
          }
          break e;
        case "textarea":
          df(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && ul(e, !!n.multiple, t, !1);
      }
    }
  }
  var Wr = !1;
  function vf(e, t, n) {
    if (Wr) return e(t, n);
    Wr = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (Wr = !1, (sl !== null || cl !== null) && (gr(), sl && (t = sl, e = cl, cl = sl = null, gf(t), e)))
        for (t = 0; t < e.length; t++) gf(e[t]);
    }
  }
  function li(e, t) {
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
  var In = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), es = !1;
  if (In)
    try {
      var ii = {};
      Object.defineProperty(ii, "passive", {
        get: function() {
          es = !0;
        }
      }), window.addEventListener("test", ii, ii), window.removeEventListener("test", ii, ii);
    } catch {
      es = !1;
    }
  var ea = null, ts = null, vu = null;
  function yf() {
    if (vu) return vu;
    var e, t = ts, n = t.length, a, l = "value" in ea ? ea.value : ea.textContent, i = l.length;
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
  function bf() {
    return !1;
  }
  function Dt(e) {
    function t(n, a, l, i, c) {
      this._reactName = n, this._targetInst = l, this.type = a, this.nativeEvent = i, this.target = c, this.currentTarget = null;
      for (var f in e)
        e.hasOwnProperty(f) && (n = e[f], this[f] = n ? n(i) : i[f]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? bu : bf, this.isPropagationStopped = bf, this;
    }
    return ue(t.prototype, {
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
  }, Eu = Dt(ta), ui = ue({}, ta, { view: 0, detail: 0 }), Lg = Dt(ui), ns, as, ri, Su = ue({}, ui, {
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
    getModifierState: is,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== ri && (ri && e.type === "mousemove" ? (ns = e.screenX - ri.screenX, as = e.screenY - ri.screenY) : as = ns = 0, ri = e), ns);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : as;
    }
  }), Ef = Dt(Su), Ig = ue({}, Su, { dataTransfer: 0 }), Bg = Dt(Ig), Vg = ue({}, ui, { relatedTarget: 0 }), ls = Dt(Vg), Gg = ue({}, ta, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Yg = Dt(Gg), Xg = ue({}, ta, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Qg = Dt(Xg), kg = ue({}, ta, { data: 0 }), Sf = Dt(kg), Kg = {
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
  }, Zg = {
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
  }, Jg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function $g(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Jg[e]) ? !!t[e] : !1;
  }
  function is() {
    return $g;
  }
  var Fg = ue({}, ui, {
    key: function(e) {
      if (e.key) {
        var t = Kg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = yu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Zg[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: is,
    charCode: function(e) {
      return e.type === "keypress" ? yu(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? yu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Pg = Dt(Fg), Wg = ue({}, Su, {
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
  }), Tf = Dt(Wg), ev = ue({}, ta, { submitter: 0 }), tv = Dt(ev), nv = ue({}, ui, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: is
  }), av = Dt(nv), lv = ue({}, ta, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), iv = Dt(lv), uv = ue({}, Su, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), rv = Dt(uv), sv = ue({}, ta, {
    newState: 0,
    oldState: 0,
    source: 0
  }), cv = Dt(sv), ov = [9, 13, 27, 32], us = In && "CompositionEvent" in window, si = null;
  In && "documentMode" in document && (si = document.documentMode);
  var fv = In && "TextEvent" in window && !si, Af = In && (!us || si && 8 < si && 11 >= si), Nf = " ", _f = !1;
  function wf(e, t) {
    switch (e) {
      case "keyup":
        return ov.indexOf(t.keyCode) !== -1;
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
  function Of(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var ol = !1;
  function dv(e, t) {
    switch (e) {
      case "compositionend":
        return Of(t);
      case "keypress":
        return t.which !== 32 ? null : (_f = !0, Nf);
      case "textInput":
        return e = t.data, e === Nf && _f ? null : e;
      default:
        return null;
    }
  }
  function hv(e, t) {
    if (ol)
      return e === "compositionend" || !us && wf(e, t) ? (e = yf(), vu = ts = ea = null, ol = !1, e) : null;
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
        return Af && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var mv = {
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
  function Cf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!mv[e.type] : t === "textarea";
  }
  function xf(e, t, n, a) {
    sl ? cl ? cl.push(a) : cl = [a] : sl = a, t = Tr(t, "onChange"), 0 < t.length && (n = new Eu(
      "onChange",
      "change",
      null,
      n,
      a
    ), e.push({ event: n, listeners: t }));
  }
  var ci = null, oi = null;
  function pv(e) {
    gm(e, 0);
  }
  function Tu(e) {
    var t = ai(e);
    if (of(t)) return e;
  }
  function Rf(e, t) {
    if (e === "change") return t;
  }
  var jf = !1;
  if (In) {
    var rs;
    if (In) {
      var ss = "oninput" in document;
      if (!ss) {
        var Df = document.createElement("div");
        Df.setAttribute("oninput", "return;"), ss = typeof Df.oninput == "function";
      }
      rs = ss;
    } else rs = !1;
    jf = rs && (!document.documentMode || 9 < document.documentMode);
  }
  function Uf() {
    ci && (ci.detachEvent("onpropertychange", zf), oi = ci = null);
  }
  function zf(e) {
    if (e.propertyName === "value" && Tu(oi)) {
      var t = [];
      xf(
        t,
        oi,
        e,
        Pr(e)
      ), vf(pv, t);
    }
  }
  function gv(e, t, n) {
    e === "focusin" ? (Uf(), ci = t, oi = n, ci.attachEvent("onpropertychange", zf)) : e === "focusout" && Uf();
  }
  function vv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Tu(oi);
  }
  function yv(e, t) {
    if (e === "click") return Tu(t);
  }
  function bv(e, t) {
    if (e === "input" || e === "change")
      return Tu(t);
  }
  function Ev(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Jt = typeof Object.is == "function" ? Object.is : Ev;
  function fi(e, t) {
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
  function cs(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Mf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Hf(e, t) {
    var n = Mf(e);
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
      n = Mf(n);
    }
  }
  function qf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? qf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Lf(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = cs(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = cs(e.document);
    }
    return t;
  }
  function os(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var Sv = In && "documentMode" in document && 11 >= document.documentMode, fl = null, fs = null, di = null, ds = !1;
  function If(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    ds || fl == null || fl !== cs(a) || (a = fl, "selectionStart" in a && os(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), di && fi(di, a) || (di = a, a = Tr(fs, "onSelect"), 0 < a.length && (t = new Eu(
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
  }, hs = {}, Bf = {};
  In && (Bf = document.createElement("div").style, "AnimationEvent" in window || (delete dl.animationend.animation, delete dl.animationiteration.animation, delete dl.animationstart.animation), "TransitionEvent" in window || delete dl.transitionend.transition);
  function Ha(e) {
    if (hs[e]) return hs[e];
    if (!dl[e]) return e;
    var t = dl[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in Bf)
        return hs[e] = t[n];
    return e;
  }
  var Vf = Ha("animationend"), Gf = Ha("animationiteration"), Yf = Ha("animationstart"), Tv = Ha("transitionrun"), Av = Ha("transitionstart"), Nv = Ha("transitioncancel"), Xf = Ha("transitionend"), Qf = /* @__PURE__ */ new Map(), ms = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  ms.push("scrollEnd");
  function vn(e, t) {
    Qf.set(e, t), za(t, [e]);
  }
  var _v = 0;
  function Bn(e, t) {
    if (e.name != null && e.name !== "auto") return e.name;
    if (t.autoName !== null) return t.autoName;
    e = Sn.identifierPrefix;
    var n = _v++;
    return e = "_" + e + "t_" + n.toString(32) + "_", t.autoName = e;
  }
  function kf(e) {
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
    return e = kf(e), t = kf(t), t == null ? e === "auto" ? null : e : t === "auto" ? null : t;
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
  }, un = [], hl = 0, ps = 0;
  function Nu() {
    for (var e = hl, t = ps = hl = 0; t < e; ) {
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
      i !== 0 && Kf(n, l, i);
    }
  }
  function _u(e, t, n, a) {
    un[hl++] = e, un[hl++] = t, un[hl++] = n, un[hl++] = a, ps |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function gs(e, t, n, a) {
    return _u(e, t, n, a), wu(e);
  }
  function qa(e, t) {
    return _u(e, null, null, t), wu(e);
  }
  function Kf(e, t, n) {
    e.lanes |= n;
    var a = e.alternate;
    a !== null && (a.lanes |= n);
    for (var l = !1, i = e.return; i !== null; )
      i.childLanes |= n, a = i.alternate, a !== null && (a.childLanes |= n), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (l = !0)), e = i, i = i.return;
    return e.tag === 3 ? (i = e.stateNode, l && t !== null && (l = 31 - Kt(n), e = i.hiddenUpdates, a = e[l], a === null ? e[l] = [t] : a.push(t), t.lane = n | 536870912), i) : null;
  }
  function wu(e) {
    if (50 < zi)
      throw zi = 0, pr = null, Error(s(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ml = {};
  function wv(e, t, n, a) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Lt(e, t, n, a) {
    return new wv(e, t, n, a);
  }
  function vs(e) {
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
  function Zf(e, t) {
    e.flags &= 1206910978;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Ou(e, t, n, a, l, i) {
    var c = 0;
    if (a = e, typeof a == "function") vs(a) && (c = 1);
    else if (typeof a == "string")
      c = e0(
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
  function ys(e, t, n) {
    return e = Lt(6, e, null, t), e.lanes = n, e;
  }
  function Jf(e) {
    var t = Lt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function bs(e, t, n) {
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
  var $f = /* @__PURE__ */ new WeakMap();
  function rn(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = $f.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: Pl(t)
      }, $f.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Pl(t)
    };
  }
  var pl = [], gl = 0, Cu = null, hi = 0, sn = [], cn = 0, na = null, _n = 1, wn = "";
  function Yn(e, t) {
    pl[gl++] = hi, pl[gl++] = Cu, Cu = e, hi = t;
  }
  function Ff(e, t, n) {
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
  function xu(e) {
    e.return !== null && (Yn(e, 1), Ff(e, 1, 0));
  }
  function Es(e) {
    for (; e === Cu; )
      Cu = pl[--gl], pl[gl] = null, hi = pl[--gl], pl[gl] = null;
    for (; e === na; )
      na = sn[--cn], sn[cn] = null, wn = sn[--cn], sn[cn] = null, _n = sn[--cn], sn[cn] = null;
  }
  function Pf(e, t) {
    sn[cn++] = _n, sn[cn++] = wn, sn[cn++] = na, _n = t.id, wn = t.overflow, na = e;
  }
  var vt = null, et = null, Ue = !1, aa = null, on = !1, Ss = Error(s(519));
  function la(e) {
    var t = Error(
      s(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw mi(rn(t, e)), Ss;
  }
  function Wf(e) {
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
        for (n = 0; n < Hi.length; n++)
          Me(Hi[n], t);
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
        Me("invalid", t), ff(
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
        Me("invalid", t), hf(t, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === !0 || Em(t.textContent, n) ? (a.popover != null && (Me("beforetoggle", t), Me("toggle", t)), a.onScroll != null && Me("scroll", t), a.onScrollEnd != null && Me("scrollend", t), a.onClick != null && (t.onclick = Nn), t = !0) : t = !1, t || la(e, !0);
  }
  function Ru(e) {
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
    if (!Ue) return Ru(e), Ue = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Fc(e.type, e.memoizedProps)), n = !n), n && et && la(e), Ru(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      et = Im(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      et = Im(e);
    } else
      t === 27 ? (t = et, Ea(e.type) ? (e = uo, uo = null, et = e) : et = t) : et = vt ? dn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ia() {
    et = vt = null, Ue = !1;
  }
  function Ts() {
    var e = aa;
    return e !== null && (Vt === null ? Vt = e : Vt.push.apply(
      Vt,
      e
    ), aa = null), e;
  }
  function mi(e) {
    aa === null ? aa = [e] : aa.push(e);
  }
  var As = an(null), Ba = null, Xn = null;
  function ia(e, t, n) {
    Qe(As, t._currentValue), t._currentValue = n;
  }
  function Qn(e) {
    e._currentValue = As.current, Ne(As);
  }
  function ju(e, t, n) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Ns(e, t, n, a) {
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
      } else if (l === Y.current) {
        if (c = l.alternate, c === null) throw Error(s(387));
        c.memoizedState.memoizedState !== l.memoizedState.memoizedState && (e !== null ? e.push(Gl) : e = [Gl]);
      }
      l = l.return;
    }
    return e !== null && Ns(
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
  function _t(e) {
    return ed(Ba, e);
  }
  function Uu(e, t) {
    return Ba === null && Ga(e), ed(e, t);
  }
  function ed(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, Xn === null) {
      if (e === null) throw Error(s(308));
      Xn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Xn = Xn.next = t;
    return n;
  }
  var Ov = typeof AbortController < "u" ? AbortController : function() {
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
  }, Cv = u.unstable_scheduleCallback, xv = u.unstable_NormalPriority, st = {
    $$typeof: q,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function _s() {
    return {
      controller: new Ov(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function pi(e) {
    e.refCount--, e.refCount === 0 && Cv(xv, function() {
      e.controller.abort();
    });
  }
  function td(e, t) {
    if ((e.pendingLanes & 4194048) !== 0) {
      var n = e.transitionTypes;
      for (n === null && (n = e.transitionTypes = []), e = 0; e < t.length; e++) {
        var a = t[e];
        n.indexOf(a) === -1 && n.push(a);
      }
    }
  }
  var gi = null;
  function Rv(e) {
    var t = e.transitionTypes;
    return e.transitionTypes = null, t;
  }
  var vi = null, ws = 0, Ya = 0, yl = null;
  function jv(e, t) {
    if (vi === null) {
      var n = vi = [];
      ws = 0, Ya = Gc(), yl = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return ws++, t.then(nd, nd), t;
  }
  function nd() {
    if (--ws === 0 && (gi = null, vi !== null)) {
      yl !== null && (yl.status = "fulfilled");
      var e = vi;
      vi = null, Ya = 0, yl = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Dv(e, t) {
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
  var ad = W.S;
  W.S = function(e, t) {
    if (Jh = Qt(), typeof t == "object" && t !== null && typeof t.then == "function" && jv(e, t), gi !== null)
      for (var n = Hl; n !== null; )
        td(n, gi), n = n.next;
    if (n = e.types, n !== null) {
      for (var a = Hl; a !== null; )
        td(a, n), a = a.next;
      if (Ya !== 0) {
        a = gi, a === null && (a = gi = []);
        for (var l = 0; l < n.length; l++) {
          var i = n[l];
          a.indexOf(i) === -1 && a.push(i);
        }
      }
    }
    ad !== null && ad(e, t);
  };
  var Xa = an(null);
  function Os() {
    var e = Xa.current;
    return e !== null ? e : Fe.pooledCache;
  }
  function zu(e, t) {
    t === null ? Qe(Xa, Xa.current) : Qe(Xa, t.pool);
  }
  function ld() {
    var e = Os();
    return e === null ? null : { parent: st._currentValue, pool: e };
  }
  var bl = Error(s(460)), Cs = Error(s(474)), Mu = Error(s(542)), Hu = { then: function() {
  } };
  function id(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function ud(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Nn, Nn), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, sd(e), e === void 0 && !("reason" in t) ? Error(s(600)) : e;
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
            throw e = t.reason, sd(e), e;
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
  function rd() {
    if (ka === null) throw Error(s(459));
    var e = ka;
    return ka = null, e;
  }
  function sd(e) {
    if (e === bl || e === Mu)
      throw Error(s(483));
  }
  var El = null, yi = 0;
  function qu(e) {
    var t = yi;
    return yi += 1, El === null && (El = []), ud(El, e, t);
  }
  function ua(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Lu(e, t) {
    throw t.$$typeof === be ? Error(s(525)) : (e = Object.prototype.toString.call(t), Error(
      s(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function cd(e) {
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
      return A === null || A.tag !== 6 ? (A = ys(R, w.mode, X), A.return = w, A) : (A = l(A, R), A.return = w, A);
    }
    function y(w, A, R, X) {
      var ye = R.type;
      return ye === ve ? (w = z(
        w,
        A,
        R.props.children,
        X,
        R.key
      ), ua(w, R), w) : A !== null && (A.elementType === ye || typeof ye == "object" && ye !== null && ye.$$typeof === ae && Qa(ye) === A.type) ? (A = l(A, R.props), ua(A, R), A.return = w, A) : (A = Ou(
        R.type,
        R.key,
        R.props,
        null,
        w.mode,
        X
      ), ua(A, R), A.return = w, A);
    }
    function x(w, A, R, X) {
      return A === null || A.tag !== 4 || A.stateNode.containerInfo !== R.containerInfo || A.stateNode.implementation !== R.implementation ? (A = bs(R, w.mode, X), A.return = w, A) : (A = l(A, R.children || []), A.return = w, A);
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
        return A = ys(
          "" + A,
          w.mode,
          R
        ), A.return = w, A;
      if (typeof A == "object" && A !== null) {
        switch (A.$$typeof) {
          case se:
            return R = Ou(
              A.type,
              A.key,
              A.props,
              null,
              w.mode,
              R
            ), ua(R, A), R.return = w, R;
          case ge:
            return A = bs(
              A,
              w.mode,
              R
            ), A.return = w, A;
          case ae:
            return A = Qa(A), Q(w, A, R);
        }
        if (fe(A) || $(A))
          return A = La(
            A,
            w.mode,
            R,
            null
          ), A.return = w, A;
        if (typeof A.then == "function")
          return Q(w, qu(A), R);
        if (A.$$typeof === q)
          return Q(
            w,
            Uu(w, A),
            R
          );
        Lu(w, A);
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
        if (fe(R) || $(R))
          return ye !== null ? null : z(w, A, R, X, null);
        if (typeof R.then == "function")
          return _(
            w,
            A,
            qu(R),
            X
          );
        if (R.$$typeof === q)
          return _(
            w,
            A,
            Uu(w, R),
            X
          );
        Lu(w, R);
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
        if (fe(X) || $(X))
          return w = w.get(R) || null, z(A, w, X, ye, null);
        if (typeof X.then == "function")
          return U(
            w,
            A,
            R,
            qu(X),
            ye
          );
        if (X.$$typeof === q)
          return U(
            w,
            A,
            R,
            Uu(A, X),
            ye
          );
        Lu(A, X);
      }
      return null;
    }
    function ce(w, A, R, X) {
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
      return e && Ae.forEach(function(d0) {
        return t(w, d0);
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
              X = bs(R, w.mode, X), X.return = w, w = X;
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
        if (fe(R))
          return ce(
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
            qu(R),
            X
          );
        if (R.$$typeof === q)
          return je(
            w,
            A,
            Uu(w, R),
            X
          );
        Lu(w, R);
      }
      return typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint" ? (R = "" + R, A !== null && A.tag === 6 ? (n(w, A.sibling), X = l(A, R), X.return = w, w = X) : (n(w, A), X = ys(R, w.mode, X), X.return = w, w = X), c(w)) : n(w, A);
    }
    return function(w, A, R, X) {
      try {
        yi = 0;
        var ye = je(
          w,
          A,
          R,
          X
        );
        return El = null, ye;
      } catch (Ae) {
        if (Ae === bl || Ae === Mu) throw Ae;
        var qe = Lt(29, Ae, null, w.mode);
        return qe.lanes = X, qe.return = w, qe;
      }
    };
  }
  var Ka = cd(!0), od = cd(!1), ra = !1;
  function xs(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Rs(e, t) {
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
      return l === null ? t.next = t : (t.next = l.next, l.next = t), a.pending = t, t = wu(e), Kf(e, null, n), t;
    }
    return _u(e, a, t, n), wu(e);
  }
  function bi(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, $o(e, n);
    }
  }
  function js(e, t) {
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
  var Ds = !1;
  function Ei() {
    if (Ds) {
      var e = yl;
      if (e !== null) throw e;
    }
  }
  function Si(e, t, n, a) {
    Ds = !1;
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
          _ !== 0 && _ === Ya && (Ds = !0), z !== null && (z = z.next = {
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: null,
            next: null
          });
          e: {
            var ce = e, Ee = f;
            _ = t;
            var je = n;
            switch (Ee.tag) {
              case 1:
                if (ce = Ee.payload, typeof ce == "function") {
                  Q = ce.call(je, Q, _);
                  break e;
                }
                Q = ce;
                break e;
              case 3:
                ce.flags = ce.flags & -65537 | 128;
              case 0:
                if (ce = Ee.payload, _ = typeof ce == "function" ? ce.call(je, Q, _) : ce, _ == null) break e;
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
  function fd(e, t) {
    if (typeof e != "function")
      throw Error(s(191, e));
    e.call(t);
  }
  function dd(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        fd(n[e], t);
  }
  var oa = an(null), Iu = an(0);
  function hd(e, t) {
    e = $n, Qe(Iu, e), Qe(oa, t), $n = e | t.baseLanes;
  }
  function Us() {
    Qe(Iu, $n), Qe(oa, oa.current);
  }
  function zs() {
    $n = Iu.current, Ne(oa), Ne(Iu);
  }
  var wt = an(null), jt = null;
  function fa(e) {
    var t = e.alternate;
    Qe(Ot, Ot.current & 1), Qe(wt, e), jt === null && (t === null || oa.current !== null || t.memoizedState !== null) && (jt = e);
  }
  function Ms(e) {
    Qe(Ot, Ot.current), Qe(wt, e), jt === null && (jt = e);
  }
  function md(e) {
    e.tag === 22 ? (Qe(Ot, Ot.current), Qe(wt, e), jt === null && (jt = e)) : da();
  }
  function da() {
    Qe(Ot, Ot.current), Qe(wt, wt.current);
  }
  function $t(e) {
    Ne(wt), jt === e && (jt = null), Ne(Ot);
  }
  var Ot = an(0);
  function Ti(e, t) {
    Qe(wt, wt.current), Qe(Ot, t);
  }
  function Hs(e) {
    Ne(Ot), Ne(wt), jt === e && (jt = null);
  }
  function Bu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || lo(n) || io(n)))
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
  var kn = 0, Re = null, Je = null, ct = null, Vu = !1, Sl = !1, Za = !1, Gu = 0, Ai = 0, Tl = null, Uv = 0;
  function lt() {
    throw Error(s(321));
  }
  function qs(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Jt(e[n], t[n])) return !1;
    return !0;
  }
  function Ls(e, t, n, a, l, i) {
    return kn = i, Re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, W.H = e === null || e.memoizedState === null ? Fd : Pd, Za = !1, i = n(a, l), Za = !1, Sl && (i = gd(
      t,
      n,
      a,
      l
    )), pd(e), i;
  }
  function pd(e) {
    W.H = Ju;
    var t = Je !== null && Je.next !== null;
    if (kn = 0, ct = Je = Re = null, Vu = !1, Ai = 0, Tl = null, t) throw Error(s(300));
    e === null || ot || (e = e.dependencies, e !== null && Du(e) && (ot = !0));
  }
  function gd(e, t, n, a) {
    Re = e;
    var l = 0;
    do {
      if (Sl && (Tl = null), Ai = 0, Sl = !1, 25 <= l) throw Error(s(301));
      if (l += 1, ct = Je = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      W.H = Vv, i = t(n, a);
    } while (Sl);
    return i;
  }
  function zv() {
    var e = W.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Ni(t) : t, e = e.useState()[0], (Je !== null ? Je.memoizedState : null) !== e && (Re.flags |= 1024), t;
  }
  function Is() {
    var e = Gu !== 0;
    return Gu = 0, e;
  }
  function Bs(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function Vs(e) {
    if (Vu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Vu = !1;
    }
    kn = 0, ct = Je = Re = null, Sl = !1, Ai = Gu = 0, Tl = null;
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
    return Ai += 1, Tl === null && (Tl = []), e = ud(Tl, e, t), t = Re, (ct === null ? t.memoizedState : ct.next) === null && (t = t.alternate, W.H = t === null || t.memoizedState === null ? Fd : Pd), e;
  }
  function Xu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ni(e);
      if (e.$$typeof === D) return;
      if (e.$$typeof === q) return _t(e);
    }
    throw Error(s(438, String(e)));
  }
  function Gs(e) {
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
        n[a] = J;
    return t.index++, n;
  }
  function Kn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Qu(e) {
    var t = ut();
    return Ys(t, Je, e);
  }
  function Ys(e, t, n) {
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
  function Xs(e) {
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
  function vd(e, t, n) {
    var a = Re, l = ut(), i = Ue;
    if (i) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else n = t();
    var c = !Jt(
      (Je || l).memoizedState,
      n
    );
    if (c && (l.memoizedState = n, ot = !0), l = l.queue, Ks(Ed.bind(null, a, l, e), [
      e
    ]), e = l.getSnapshot !== t || c || ct !== null && (ct.memoizedState.tag & 1) !== 0, Al(
      e ? 9 : 8,
      { destroy: void 0 },
      bd.bind(null, a, l, n, t),
      null
    ), e) {
      if (a.flags |= 2048, Fe === null) throw Error(s(349));
      i || (kn & 127) !== 0 || yd(a, t, n);
    }
    return n;
  }
  function yd(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Re.updateQueue, t === null ? (t = Yu(), Re.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function bd(e, t, n, a) {
    t.value = n, t.getSnapshot = a, Sd(t) && Td(e);
  }
  function Ed(e, t, n) {
    return n(function() {
      Sd(t) && Td(e);
    });
  }
  function Sd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Jt(e, n);
    } catch {
      return !0;
    }
  }
  function Td(e) {
    var t = qa(e, 2);
    t !== null && Gt(t, e, 2);
  }
  function Qs(e) {
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
  function Ad(e, t, n, a) {
    return e.baseState = n, Ys(
      e,
      Je,
      typeof a == "function" ? a : Kn
    );
  }
  function Mv(e, t, n, a, l) {
    if (Zu(e)) throw Error(s(485));
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
      W.T !== null ? n(!0) : i.isTransition = !1, a(i), n = t.pending, n === null ? (i.next = t.pending = i, Nd(t, i)) : (i.next = n.next, t.pending = n.next = i);
    }
  }
  function Nd(e, t) {
    var n = t.action, a = t.payload, l = e.state;
    if (t.isTransition) {
      var i = W.T, c = {};
      c.types = i !== null ? i.types : null, W.T = c;
      try {
        var f = n(l, a), y = W.S;
        y !== null && y(c, f), _d(e, t, f);
      } catch (x) {
        ks(e, t, x);
      } finally {
        i !== null && c.types !== null && (i.types = c.types), W.T = i;
      }
    } else
      try {
        i = n(l, a), _d(e, t, i);
      } catch (x) {
        ks(e, t, x);
      }
  }
  function _d(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        wd(e, t, a);
      },
      function(a) {
        return ks(e, t, a);
      }
    ) : wd(e, t, n);
  }
  function wd(e, t, n) {
    t.status = "fulfilled", t.value = n, Od(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Nd(e, n)));
  }
  function ks(e, t, n) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = n, Od(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function Od(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Cd(e, t) {
    return t;
  }
  function xd(e, t) {
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
      lastRenderedReducer: Cd,
      lastRenderedState: t
    }, n.queue = a, n = Zd.bind(
      null,
      Re,
      a
    ), a.dispatch = n, a = Qs(!1), i = Ps.bind(
      null,
      Re,
      !1,
      a.queue
    ), a = Ut(), l = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = l, n = Mv.bind(
      null,
      Re,
      l,
      i,
      n
    ), l.dispatch = n, a.memoizedState = e, [t, n, !1];
  }
  function Rd(e) {
    var t = ut();
    return jd(t, Je, e);
  }
  function jd(e, t, n) {
    if (t = Ys(
      e,
      t,
      Cd
    )[0], e = Qu(Kn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Ni(t);
      } catch (c) {
        throw c === bl ? Mu : c;
      }
    else a = t;
    t = ut();
    var l = t.queue, i = l.dispatch;
    return n !== t.memoizedState && (Re.flags |= 2048, Al(
      9,
      { destroy: void 0 },
      Hv.bind(null, l, n),
      null
    )), [a, i, e];
  }
  function Hv(e, t) {
    e.action = t;
  }
  function Dd(e) {
    var t = ut(), n = Je;
    if (n !== null)
      return jd(t, n, e);
    ut(), t = t.memoizedState, n = ut();
    var a = n.queue.dispatch;
    return n.memoizedState = e, [t, a, !1];
  }
  function Al(e, t, n, a) {
    return e = { tag: e, create: n, deps: a, inst: t, next: null }, t = Re.updateQueue, t === null && (t = Yu(), Re.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
  }
  function Ud() {
    return ut().memoizedState;
  }
  function ku(e, t, n, a) {
    var l = Ut();
    Re.flags |= e, l.memoizedState = Al(
      1 | t,
      { destroy: void 0 },
      n,
      a === void 0 ? null : a
    );
  }
  function Ku(e, t, n, a) {
    var l = ut();
    a = a === void 0 ? null : a;
    var i = l.memoizedState.inst;
    Je !== null && a !== null && qs(a, Je.memoizedState.deps) ? l.memoizedState = Al(t, i, n, a) : (Re.flags |= e, l.memoizedState = Al(
      1 | t,
      i,
      n,
      a
    ));
  }
  function zd(e, t) {
    ku(8390656, 8, e, t);
  }
  function Ks(e, t) {
    Ku(2048, 8, e, t);
  }
  function qv(e) {
    Re.flags |= 4;
    var t = Re.updateQueue;
    if (t === null)
      t = Yu(), Re.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function Md(e) {
    var t = ut().memoizedState;
    return qv({ ref: t, nextImpl: e }), function() {
      if ((Ye & 2) !== 0) throw Error(s(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Hd(e, t) {
    return Ku(4, 2, e, t);
  }
  function qd(e, t) {
    return Ku(4, 4, e, t);
  }
  function Ld(e, t) {
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
  function Id(e, t, n) {
    n = n != null ? n.concat([e]) : null, Ku(4, 4, Ld.bind(null, t, e), n);
  }
  function Zs() {
  }
  function Bd(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && qs(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
  }
  function Vd(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && qs(t, a[1]))
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
  function Js(e, t, n) {
    return n === void 0 || (kn & 1073741824) !== 0 && (He & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = Fh(), Re.lanes |= e, ga |= e, n);
  }
  function Gd(e, t, n, a) {
    return Jt(n, t) ? n : oa.current !== null ? (e = Js(e, n, a), Jt(e, t) || (ot = !0), e) : (kn & 106) === 0 || (kn & 1073741824) !== 0 && (He & 261930) === 0 ? (ot = !0, e.memoizedState = n) : (e = Fh(), Re.lanes |= e, ga |= e, t);
  }
  function Yd(e, t, n, a, l) {
    var i = de.p;
    de.p = i !== 0 && 8 > i ? i : 8;
    var c = W.T, f = {};
    f.types = c !== null ? c.types : null, W.T = f, Ps(e, !1, t, n);
    try {
      var y = l(), x = W.S;
      if (x !== null && x(f, y), y !== null && typeof y == "object" && typeof y.then == "function") {
        var z = Dv(
          y,
          a
        );
        _i(
          e,
          t,
          z,
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
      de.p = i, c !== null && f.types !== null && (c.types = f.types), W.T = c;
    }
  }
  function Lv() {
  }
  function $s(e, t, n, a) {
    if (e.tag !== 5) throw Error(s(476));
    var l = Xd(e).queue;
    Yd(
      e,
      l,
      t,
      We,
      n === null ? Lv : function() {
        return Qd(e), n(a);
      }
    );
  }
  function Xd(e) {
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
  function Qd(e) {
    var t = Xd(e);
    t.next === null && (t = e.alternate.memoizedState), _i(
      e,
      t.next.queue,
      {},
      en()
    );
  }
  function Fs() {
    return _t(Gl);
  }
  function kd() {
    return ut().memoizedState;
  }
  function Kd() {
    return ut().memoizedState;
  }
  function Iv(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = en();
          e = sa(n);
          var a = ca(t, e, n);
          a !== null && (Gt(a, t, n), bi(a, t, n)), t = { cache: _s() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Bv(e, t, n) {
    var a = en();
    n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Zu(e) ? Jd(t, n) : (n = gs(e, t, n, a), n !== null && (Gt(n, e, a), $d(n, t, a)));
  }
  function Zd(e, t, n) {
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
    if (Zu(e)) Jd(t, l);
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
        return Gt(n, e, a), $d(n, t, a), !0;
    }
    return !1;
  }
  function Ps(e, t, n, a) {
    if (a = {
      lane: 2,
      revertLane: Gc(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Zu(e)) {
      if (t) throw Error(s(479));
    } else
      t = gs(
        e,
        n,
        a,
        2
      ), t !== null && Gt(t, e, 2);
  }
  function Zu(e) {
    var t = e.alternate;
    return e === Re || t !== null && t === Re;
  }
  function Jd(e, t) {
    Sl = Vu = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function $d(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, $o(e, n);
    }
  }
  var Ju = {
    readContext: _t,
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
  }, Fd = {
    readContext: _t,
    use: Xu,
    useCallback: function(e, t) {
      return Ut().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: _t,
    useEffect: zd,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, ku(
        4194308,
        4,
        Ld.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return ku(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      ku(4, 2, e, t);
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
      }, a.queue = e, e = e.dispatch = Bv.bind(
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
      e = Qs(e);
      var t = e.queue, n = Zd.bind(null, Re, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: Zs,
    useDeferredValue: function(e, t) {
      var n = Ut();
      return Js(n, e, t);
    },
    useTransition: function() {
      var e = Qs(!1);
      return e = Yd.bind(
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
        (He & 127) !== 0 || yd(a, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return l.queue = i, zd(Ed.bind(null, a, i, e), [
        e
      ]), a.flags |= 2048, Al(
        9,
        { destroy: void 0 },
        bd.bind(
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
        n = (a & ~(1 << 32 - Kt(a) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Gu++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = Uv++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Fs,
    useFormState: xd,
    useActionState: xd,
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
      return t.queue = n, t = Ps.bind(
        null,
        Re,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Gs,
    useCacheRefresh: function() {
      return Ut().memoizedState = Iv.bind(
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
  }, Pd = {
    readContext: _t,
    use: Xu,
    useCallback: Bd,
    useContext: _t,
    useEffect: Ks,
    useImperativeHandle: Id,
    useInsertionEffect: Hd,
    useLayoutEffect: qd,
    useMemo: Vd,
    useReducer: Qu,
    useRef: Ud,
    useState: function() {
      return Qu(Kn);
    },
    useDebugValue: Zs,
    useDeferredValue: function(e, t) {
      var n = ut();
      return Gd(
        n,
        Je.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Qu(Kn)[0], t = ut().memoizedState;
      return [
        typeof e == "boolean" ? e : Ni(e),
        t
      ];
    },
    useSyncExternalStore: vd,
    useId: kd,
    useHostTransitionStatus: Fs,
    useFormState: Rd,
    useActionState: Rd,
    useOptimistic: function(e, t) {
      var n = ut();
      return Ad(n, Je, e, t);
    },
    useMemoCache: Gs,
    useCacheRefresh: Kd,
    useEffectEvent: Md
  }, Vv = {
    readContext: _t,
    use: Xu,
    useCallback: Bd,
    useContext: _t,
    useEffect: Ks,
    useImperativeHandle: Id,
    useInsertionEffect: Hd,
    useLayoutEffect: qd,
    useMemo: Vd,
    useReducer: Xs,
    useRef: Ud,
    useState: function() {
      return Xs(Kn);
    },
    useDebugValue: Zs,
    useDeferredValue: function(e, t) {
      var n = ut();
      return Je === null ? Js(n, e, t) : Gd(
        n,
        Je.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Xs(Kn)[0], t = ut().memoizedState;
      return [
        typeof e == "boolean" ? e : Ni(e),
        t
      ];
    },
    useSyncExternalStore: vd,
    useId: kd,
    useHostTransitionStatus: Fs,
    useFormState: Dd,
    useActionState: Dd,
    useOptimistic: function(e, t) {
      var n = ut();
      return Je !== null ? Ad(n, Je, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Gs,
    useCacheRefresh: Kd,
    useEffectEvent: Md
  };
  function Ws(e, t, n, a) {
    t = e.memoizedState, n = n(a, t), n = n == null ? t : ue({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var ec = {
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
  function Wd(e, t, n, a, l, i, c) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, i, c) : t.prototype && t.prototype.isPureReactComponent ? !fi(n, a) || !fi(l, i) : !0;
  }
  function eh(e, t, n, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && ec.enqueueReplaceState(t, t.state, null);
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
  function th(e) {
    Au(e);
  }
  function nh(e) {
    console.error(e);
  }
  function ah(e) {
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
  function lh(e, t, n) {
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
  function tc(e, t, n) {
    return n = sa(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      $u(e, t);
    }, n;
  }
  function ih(e) {
    return e = sa(e), e.tag = 3, e;
  }
  function uh(e, t, n, a) {
    var l = n.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var i = a.value;
      e.payload = function() {
        return l(i);
      }, e.callback = function() {
        lh(t, n, a);
      };
    }
    var c = n.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (e.callback = function() {
      lh(t, n, a), typeof l != "function" && (va === null ? va = /* @__PURE__ */ new Set([this]) : va.add(this));
      var f = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: f !== null ? f : ""
      });
    });
  }
  function Gv(e, t, n, a, l) {
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
            return jt === null ? vr() : n.alternate === null && it === 0 && (it = 3), n.flags &= -257, n.flags |= 65536, n.lanes = l, a === Hu ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Ic(e, a, l)), !1;
          case 22:
            return n.flags |= 65536, a === Hu ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), Ic(e, a, l)), !1;
        }
        throw Error(s(435, n.tag));
      }
      return Ic(e, a, l), vr(), !1;
    }
    if (Ue)
      return t = wt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = l, a !== Ss && (e = Error(s(422), { cause: a }), mi(rn(e, n)))) : (a !== Ss && (t = Error(s(423), {
        cause: a
      }), mi(
        rn(t, n)
      )), e = e.current.alternate, e.flags |= 65536, l &= -l, e.lanes |= l, a = rn(a, n), l = tc(
        e.stateNode,
        a,
        l
      ), js(e, l), it !== 4 && (it = 2)), !1;
    var i = Error(s(520), { cause: a });
    if (i = rn(i, n), Ui === null ? Ui = [i] : Ui.push(i), it !== 4 && (it = 2), t === null) return !0;
    a = rn(a, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = l & -l, n.lanes |= e, e = tc(n.stateNode, a, e), js(n, e), !1;
        case 1:
          if (t = n.type, i = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (va === null || !va.has(i))))
            return n.flags |= 65536, l &= -l, n.lanes |= l, l = ih(l), uh(
              l,
              e,
              n,
              a
            ), js(n, l), !1;
          break;
        case 22:
          if (n.memoizedState !== null)
            return n.flags |= 65536, !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var nc = Error(s(461)), ot = !1;
  function pt(e, t, n, a) {
    t.child = e === null ? od(t, null, n, a) : Ka(
      t,
      e.child,
      n,
      a
    );
  }
  function rh(e, t, n, a, l) {
    n = n.render;
    var i = t.ref;
    if ("ref" in a) {
      var c = {};
      for (var f in a)
        f !== "ref" && (c[f] = a[f]);
    } else c = a;
    return Ga(t), a = Ls(
      e,
      t,
      n,
      c,
      i,
      l
    ), f = Is(), e !== null && !ot ? (Bs(e, t, l), Zn(e, t, l)) : (Ue && f && xu(t), t.flags |= 1, pt(e, t, a, l), t.child);
  }
  function sh(e, t, n, a, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !vs(i) && i.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = i, ch(
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
    if (i = e.child, !oc(e, l)) {
      var c = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : fi, n(c, a) && e.ref === t.ref)
        return Zn(e, t, l);
    }
    return t.flags |= 1, e = Gn(i, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function ch(e, t, n, a, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (fi(i, a) && e.ref === t.ref)
        if (ot = !1, t.pendingProps = a = i, oc(e, l))
          (e.flags & 131072) !== 0 && (ot = !0);
        else
          return t.lanes = e.lanes, Zn(e, t, l);
    }
    return ac(
      e,
      t,
      n,
      a,
      l
    );
  }
  function oh(e, t, n, a) {
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
        return fh(
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
        ), i !== null ? hd(t, i) : Us(), md(t);
      else
        return a = t.lanes = 536870912, fh(
          e,
          t,
          i !== null ? i.baseLanes | n : n,
          n,
          a
        );
    } else
      i !== null ? (zu(t, i.cachePool), hd(t, i), da(), t.memoizedState = null) : (e !== null && zu(t, null), Us(), da());
    return pt(e, t, l, n), t.child;
  }
  function wi(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function fh(e, t, n, a, l) {
    var i = Os();
    return i = i === null ? null : { parent: st._currentValue, pool: i }, t.memoizedState = {
      baseLanes: n,
      cachePool: i
    }, e !== null && zu(t, null), Us(), md(t), e !== null && Va(e, t, a, !0), t.childLanes = l, null;
  }
  function Fu(e, t) {
    return t = Pu(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function dh(e, t, n) {
    return Ka(t, e.child, null, n), e = Fu(t, t.pendingProps), e.flags |= 2, $t(t), t.memoizedState = null, e;
  }
  function Yv(e, t, n) {
    var a = t.pendingProps, l = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Ue) {
        if (a.mode === "hidden")
          return e = Fu(t, a), t.lanes = 536870912, e.memoizedState = { baseLanes: 0, cachePool: null }, wi(null, e);
        if (Ms(t), (e = et) ? (e = Lm(
          e,
          on
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: na !== null ? { id: _n, overflow: wn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Jf(e), n.return = t, t.child = n, vt = t, et = null)) : e = null, e === null) throw la(t);
        return t.lanes = 536870912, null;
      }
      return Fu(t, a);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var c = i.dehydrated;
      if (Ms(t), l)
        if (t.flags & 256)
          t.flags &= -257, t = dh(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(s(558));
      else if (ot || Va(e, t, n, !1), l = (n & e.childLanes) !== 0, ot || l) {
        if (oa.current === null) {
          if (a = Fe, a !== null && (c = Fo(a, n), c !== 0 && c !== i.retryLane))
            throw i.retryLane = c, qa(e, c), Gt(a, e, c), nc;
          vr();
        }
        t = dh(
          e,
          t,
          n
        );
      } else
        e = i.treeContext, et = dn(c.nextSibling), vt = t, Ue = !0, aa = null, on = !1, e !== null && Pf(t, e), t = Fu(t, a), t.flags |= 134221824;
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
  function ac(e, t, n, a, l) {
    return Ga(t), n = Ls(
      e,
      t,
      n,
      a,
      void 0,
      l
    ), a = Is(), e !== null && !ot ? (Bs(e, t, l), Zn(e, t, l)) : (Ue && a && xu(t), t.flags |= 1, pt(e, t, n, l), t.child);
  }
  function hh(e, t, n, a, l, i) {
    return Ga(t), t.updateQueue = null, n = gd(
      t,
      a,
      n,
      l
    ), pd(e), a = Is(), e !== null && !ot ? (Bs(e, t, i), Zn(e, t, i)) : (Ue && a && xu(t), t.flags |= 1, pt(e, t, n, i), t.child);
  }
  function mh(e, t, n, a, l) {
    if (Ga(t), t.stateNode === null) {
      var i = ml, c = n.contextType;
      typeof c == "object" && c !== null && (i = _t(c)), i = new n(a, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = ec, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = a, i.state = t.memoizedState, i.refs = {}, xs(t), c = n.contextType, i.context = typeof c == "object" && c !== null ? _t(c) : ml, i.state = t.memoizedState, c = n.getDerivedStateFromProps, typeof c == "function" && (Ws(
        t,
        n,
        c,
        a
      ), i.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (c = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), c !== i.state && ec.enqueueReplaceState(i, i.state, null), Si(t, a, i, l), Ei(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      i = t.stateNode;
      var f = t.memoizedProps, y = Ja(n, f);
      i.props = y;
      var x = i.context, z = n.contextType;
      c = ml, typeof z == "object" && z !== null && (c = _t(z));
      var Q = n.getDerivedStateFromProps;
      z = typeof Q == "function" || typeof i.getSnapshotBeforeUpdate == "function", f = t.pendingProps !== f, z || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (f || x !== c) && eh(
        t,
        i,
        a,
        c
      ), ra = !1;
      var _ = t.memoizedState;
      i.state = _, Si(t, a, i, l), Ei(), x = t.memoizedState, f || _ !== x || ra ? (typeof Q == "function" && (Ws(
        t,
        n,
        Q,
        a
      ), x = t.memoizedState), (y = ra || Wd(
        t,
        n,
        y,
        a,
        _,
        x,
        c
      )) ? (z || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = x), i.props = a, i.state = x, i.context = c, a = y) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      i = t.stateNode, Rs(e, t), c = t.memoizedProps, z = Ja(n, c), i.props = z, Q = t.pendingProps, _ = i.context, x = n.contextType, y = ml, typeof x == "object" && x !== null && (y = _t(x)), f = n.getDerivedStateFromProps, (x = typeof f == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (c !== Q || _ !== y) && eh(
        t,
        i,
        a,
        y
      ), ra = !1, _ = t.memoizedState, i.state = _, Si(t, a, i, l), Ei();
      var U = t.memoizedState;
      c !== Q || _ !== U || ra || e !== null && e.dependencies !== null && Du(e.dependencies) ? (typeof f == "function" && (Ws(
        t,
        n,
        f,
        a
      ), U = t.memoizedState), (z = ra || Wd(
        t,
        n,
        z,
        a,
        _,
        U,
        y
      ) || e !== null && e.dependencies !== null && Du(e.dependencies)) ? (x || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, U, y), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
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
  function ph(e, t, n, a) {
    return Ia(), t.flags |= 256, pt(e, t, n, a), t.child;
  }
  var lc = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ic(e) {
    return { baseLanes: e, cachePool: ld() };
  }
  function uc(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Wt), e;
  }
  function gh(e, t, n) {
    var a = t.pendingProps, l = !1, i = (t.flags & 128) !== 0, c;
    if ((c = i) || (c = e !== null && e.memoizedState === null ? !1 : (Ot.current & 2) !== 0), c && (l = !0, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ue) {
        if (l ? fa(t) : da(), (e = et) ? (e = Lm(
          e,
          on
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: na !== null ? { id: _n, overflow: wn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Jf(e), n.return = t, t.child = n, vt = t, et = null)) : e = null, e === null) throw la(t);
        return io(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      return i = a.children, a = a.fallback, l ? (da(), l = t.mode, i = Pu(
        { mode: "hidden", children: i },
        l
      ), a = La(
        a,
        l,
        n,
        null
      ), i.return = t, a.return = t, i.sibling = a, t.child = i, a = t.child, a.memoizedState = ic(n), a.childLanes = uc(
        e,
        c,
        n
      ), t.memoizedState = lc, wi(null, a)) : (fa(t), rc(t, i));
    }
    var f = e.memoizedState;
    if (f !== null) {
      var y = f.dehydrated;
      if (y !== null)
        return Xv(
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
    ), l.flags |= 2), l.return = t, a.return = t, a.sibling = l, t.child = a, wi(null, a), a = t.child, l = e.child.memoizedState, l === null ? l = ic(n) : (i = l.cachePool, i !== null ? (f = st._currentValue, i = i.parent !== f ? { parent: f, pool: f } : i) : i = ld(), l = {
      baseLanes: l.baseLanes | n,
      cachePool: i
    }), a.memoizedState = l, a.childLanes = uc(
      e,
      c,
      n
    ), t.memoizedState = lc, wi(e.child, a)) : (fa(t), n = e.child, e = n.sibling, n = Gn(n, {
      mode: "visible",
      children: a.children
    }), n.return = t, n.sibling = null, e !== null && (c = t.deletions, c === null ? (t.deletions = [e], t.flags |= 16) : c.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function rc(e, t) {
    return t = Pu(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Pu(e, t) {
    return e = Lt(22, e, null, t), e.lanes = 0, e;
  }
  function Wu(e, t, n) {
    return Ka(t, e.child, null, n), e = rc(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Xv(e, t, n, a, l, i, c, f) {
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
      ), i.flags |= 2, l.return = t, i.return = t, l.sibling = i, t.child = l, Ka(t, e.child, null, f), l = t.child, l.memoizedState = ic(f), l.childLanes = uc(
        e,
        a,
        f
      ), t.memoizedState = lc, wi(null, l));
    if (fa(t), io(i)) {
      if (a = i.nextSibling && i.nextSibling.dataset, a) var y = a.dgst;
      return a = y, a !== "" && (l = Error(s(419)), l.stack = "", l.digest = a, mi({ value: l, source: null, stack: null })), Wu(
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
      if (a = Fe, a !== null && (l = Fo(
        a,
        f
      ), l !== 0 && l !== c.retryLane))
        throw c.retryLane = l, qa(e, l), Gt(a, e, l), nc;
      return lo(i) || vr(), Wu(
        e,
        t,
        f
      );
    }
    return lo(i) ? (t.flags |= 192, t.child = e.child, null) : (e = c.treeContext, et = dn(i.nextSibling), vt = t, Ue = !0, aa = null, on = !1, e !== null && Pf(t, e), t = rc(
      t,
      l.children
    ), t.flags |= 134221824, t);
  }
  function vh(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), ju(e.return, t, n);
  }
  function yh(e) {
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
  function sc(e) {
    var t = e.child;
    for (e.child = null; t !== null; ) {
      var n = t.sibling;
      t.sibling = e.child, e.child = t, t = n;
    }
  }
  function cc(e, t, n) {
    var a = t.pendingProps, l = a.revealOrder, i = a.tail;
    a = a.children;
    var c = Ot.current;
    if (t.flags & 128)
      return Ti(t, c), null;
    var f = (c & 2) !== 0;
    if (f ? (c = c & 1 | 2, t.flags |= 128) : c &= 1, Ti(t, c), l === "backwards" && e !== null ? (sc(e), pt(e, t, a, n), sc(e)) : pt(e, t, a, n), a = Ue ? hi : 0, !f && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && vh(e, n, t);
        else if (e.tag === 19)
          vh(e, n, t);
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
        n = yh(t.child), n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null, sc(t)), er(
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
        n = yh(t.child), n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), er(
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
  function bh(e, t, n) {
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
  function oc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Du(e)));
  }
  function Qv(e, t, n) {
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
          return t.flags |= 128, Ms(t), null;
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
          return a || (n & l) !== 0 ? gh(e, t, n) : (fa(t), e = Zn(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        }
        fa(t);
        break;
      case 19:
        if (t.flags & 128)
          return cc(
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
            return cc(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Ti(t, Ot.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, oh(
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
  function Eh(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        ot = !0;
      else {
        if (!oc(e, n) && (t.flags & 128) === 0)
          return ot = !1, Qv(
            e,
            t,
            n
          );
        ot = (e.flags & 131072) !== 0;
      }
    else
      ot = !1, Ue && (t.flags & 1048576) !== 0 && Ff(t, hi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = Qa(t.elementType), t.type = e, typeof e == "function")
            vs(e) ? (a = Ja(e, a), t.tag = 1, t = mh(
              null,
              t,
              e,
              a,
              n
            )) : (t.tag = 0, t = ac(
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
                t.tag = 11, t = rh(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              } else if (l === F) {
                t.tag = 14, t = sh(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              } else if (l === q) {
                t.tag = 10, t.type = e, t = bh(
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
        return ac(
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
        ), mh(
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
          l = i.element, Rs(e, t), Si(t, a, null, n);
          var c = t.memoizedState;
          if (a = c.cache, ia(t, st, a), a !== i.cache && Ns(
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
              t = ph(
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
              ), mi(l), t = ph(
                e,
                t,
                a,
                n
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, et = dn(e.firstChild), vt = t, Ue = !0, aa = null, on = !0, n = od(
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
        return Nl(e, t), e === null ? (n = Qm(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : Ue || (t.stateNode = Nm(
          t.type,
          t.pendingProps,
          Z.current,
          t
        )) : t.memoizedState = Qm(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Ve(t), e === null && Ue && (a = t.stateNode = Vm(
          t.type,
          t.pendingProps,
          Z.current
        ), vt = t, on = !0, l = et, Ea(t.type) ? (uo = l, et = dn(a.firstChild)) : et = l), pt(
          e,
          t,
          t.pendingProps.children,
          n
        ), Nl(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ue && ((l = a = et) && (a = Iy(
          a,
          t.type,
          t.pendingProps,
          on
        ), a !== null ? (t.stateNode = a, vt = t, et = dn(a.firstChild), on = !1, l = !0) : l = !1), l || la(t)), Ve(t), l = t.type, i = t.pendingProps, c = e !== null ? e.memoizedProps : null, a = i.children, Fc(l, i) ? a = null : c !== null && Fc(l, c) && (t.flags |= 32), t.memoizedState !== null && (l = Ls(
          e,
          t,
          zv,
          null,
          null,
          n
        ), Gl._currentValue = l), Nl(e, t), pt(e, t, a, n), t.child;
      case 6:
        return e === null && Ue && ((e = n = et) && (n = By(
          n,
          t.pendingProps,
          on
        ), n !== null ? (t.stateNode = n, vt = t, et = null, e = !0) : e = !1), e || la(t)), null;
      case 13:
        return gh(e, t, n);
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
        return rh(
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
        return bh(e, t, n);
      case 9:
        return l = t.type._context, a = t.pendingProps.children, Ga(t), l = _t(l), a = a(l), t.flags |= 1, pt(e, t, a, n), t.child;
      case 14:
        return sh(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return ch(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return cc(e, t, n);
      case 31:
        return Yv(e, t, n);
      case 22:
        return oh(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return Ga(t), a = _t(st), e === null ? (l = Os(), l === null && (l = Fe, i = _s(), l.pooledCache = i, i.refCount++, i !== null && (l.pooledCacheLanes |= n), l = i), t.memoizedState = { parent: a, cache: l }, xs(t), ia(t, st, l)) : ((e.lanes & n) !== 0 && (Rs(e, t), Si(t, null, null, n), Ei()), l = e.memoizedState, i = t.memoizedState, l.parent !== a ? (l = { parent: a, cache: a }, t.memoizedState = l, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = l), ia(t, st, a)) : (a = i.cache, ia(t, st, a), a !== l.cache && Ns(
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
        }), a = t.pendingProps, a.name != null && a.name !== "auto" ? t.flags |= e === null ? 18882560 : 18874368 : Ue && xu(t), e !== null && e.memoizedProps.name !== a.name ? t.flags |= 4194816 : Nl(e, t), pt(e, t, a.children, n), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(s(156, t.tag));
  }
  function Jn(e) {
    e.flags |= 4;
  }
  function fc(e, t, n, a, l) {
    var i;
    if ((i = (e.mode & 32) !== 0) && (i = n === null ? Jm(t, a) : Jm(t, a) && (a.src !== n.src || a.srcSet !== n.srcSet)), i) {
      if (e.flags |= 16777216, (l & 335544128) === l)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (tm()) e.flags |= 8192;
        else
          throw ka = Hu, Cs;
    } else e.flags &= -16777217;
  }
  function Sh(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !$m(t))
      if (tm()) e.flags |= 8192;
      else
        throw ka = Hu, Cs;
  }
  function tr(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Zo() : 536870912, e.lanes |= t, xl |= t);
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
  function kv(e, t, n) {
    var a = t.pendingProps;
    switch (Es(t), t.tag) {
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
        return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Qn(st), Se(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (vl(t) ? Jn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ts())), tt(t), null;
      case 26:
        var l = t.type, i = t.memoizedState;
        return e === null ? (Jn(t), i !== null ? (tt(t), Sh(t, i)) : (tt(t), fc(
          t,
          l,
          null,
          a,
          n
        ))) : i ? i !== e.memoizedState ? (Jn(t), tt(t), Sh(t, i)) : (tt(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && Jn(t), tt(t), fc(
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
          e = Xt.current, vl(t) ? Wf(t) : (e = Vm(l, a, n), t.stateNode = e, Jn(t));
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
            Wf(t);
          else {
            var c = Li(
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
        return tt(t), t.subtreeFlags &= -33554433, fc(
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
            e[Nt] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || Em(e.nodeValue, n)), e || la(t, !0);
          } else
            e = Li(e).createTextNode(
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
            n = Ts(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
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
            l = Ts(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), l = !0;
          if (!l)
            return t.flags & 256 ? ($t(t), t) : ($t(t), null);
        }
        return $t(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = a !== null, e = e !== null && e.memoizedState !== null, n && (a = t.child, l = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (l = a.alternate.memoizedState.cachePool.pool), i = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), i !== l && (a.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), tr(t, t.updateQueue), tt(t), null);
      case 4:
        return Se(), e === null && kc(t.stateNode.containerInfo), t.flags |= 67108864, tt(t), null;
      case 10:
        return Qn(t.type), tt(t), null;
      case 19:
        if (Hs(t), a = t.memoizedState, a === null) return tt(t), null;
        if (l = (t.flags & 128) !== 0, i = a.rendering, i === null)
          if (l) Oi(a, !1);
          else {
            if (it !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (i = Bu(e), i !== null) {
                  for (t.flags |= 128, Oi(a, !1), e = i.updateQueue, t.updateQueue = e, tr(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    Zf(n, e), n = n.sibling;
                  return Ti(
                    t,
                    Ot.current & 1 | 2
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
          return a.rendering = e, a.tail = e.sibling, a.renderingStartTime = Qt(), e.sibling = null, i = Ot.current, i = l ? i & 1 | 2 : i & 1, a.tailMode === "visible" || a.tailMode === "collapsed" || !n || Ue ? Ti(t, i) : (n = i, Qe(wt, t), Qe(Ot, n), jt === null && (jt = t)), Ue && Yn(t, a.treeForkCount), e;
        }
        return tt(t), null;
      case 22:
      case 23:
        return $t(t), zs(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (tt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : tt(t), n = t.updateQueue, n !== null && tr(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && Ne(Xa), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Qn(st), tt(t), null;
      case 25:
        return null;
      case 30:
        return t.flags |= 33554432, tt(t), null;
    }
    throw Error(s(156, t.tag));
  }
  function Kv(e, t) {
    switch (Es(t), t.tag) {
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
        return Hs(t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null), t.flags |= 4, t) : null;
      case 4:
        return Se(), null;
      case 10:
        return Qn(t.type), null;
      case 22:
      case 23:
        return $t(t), zs(), e !== null && Ne(Xa), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Qn(st), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function Th(e, t) {
    switch (Es(t), t.tag) {
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
        Hs(t);
        break;
      case 10:
        Qn(t.type);
        break;
      case 22:
      case 23:
        $t(t), zs(), e !== null && Ne(Xa);
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
  function Ah(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        dd(t, n);
      } catch (a) {
        Ke(e, e.return, a);
      }
    }
  }
  function Nh(e, t, n) {
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
            (l.ref === null || l.ref.name !== i) && (l.ref = jm(i)), a = l.ref;
            break;
          case 7:
            if (e.stateNode === null) {
              var c = new tn(e);
              p(
                e.child,
                !1,
                qy,
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
  function nr(e, t) {
    if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && t !== null)
      for (var n = 0; n < t.length; n++)
        qm(
          e.stateNode,
          t[n]
        );
  }
  function _h(e) {
    for (var t = e.return; t !== null && (hc(t) && qm(e.stateNode, t.stateNode), !dc(t)); )
      t = t.return;
  }
  function xi(e) {
    for (var t = e.return; t !== null && (hc(t) && Ly(e.stateNode, t.stateNode), !dc(t)); )
      t = t.return;
  }
  function dc(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 27;
  }
  function hc(e) {
    return e && e.tag === 7 && e.stateNode !== null;
  }
  function mc(e) {
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
  function pc(e, t, n) {
    try {
      var a = e.stateNode;
      by(a, e.type, n, t), a[qt] = t;
    } catch (l) {
      Ke(e, e.return, l);
    }
  }
  function wh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ea(e.type) || e.tag === 4;
  }
  function gc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || wh(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Ea(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function vc(e, t, n, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      l = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(l, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(l), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Nn)), nr(e, a), Ge = !0;
    else if (l !== 4 && (l === 27 && (nr(e, a), a = null, Ea(e.type) && (n = e.stateNode, t = null)), e = e.child, e !== null))
      for (vc(
        e,
        t,
        n,
        a
      ), e = e.sibling; e !== null; )
        vc(
          e,
          t,
          n,
          a
        ), e = e.sibling;
  }
  function ar(e, t, n, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      l = e.stateNode, t ? n.insertBefore(l, t) : n.appendChild(l), nr(e, a), Ge = !0;
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
  function Oh(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var a = e.type, l = t.attributes; l.length; )
        t.removeAttributeNode(l[0]);
      xt(t, a, n), t[Nt] = e, t[qt] = n;
    } catch (i) {
      Ke(e, e.return, i);
    }
  }
  var lr = !1, Ft = null;
  function Ch(e) {
    (e.tag === 30 || (e.subtreeFlags & 33554432) !== 0) && (lr = !0);
  }
  var Cn = null;
  function xh() {
    var e = Cn;
    return Cn = null, e;
  }
  var It = 0;
  function _l(e, t, n, a, l) {
    return It = 0, Rh(
      e.child,
      t,
      n,
      a,
      l
    );
  }
  function Rh(e, t, n, a, l) {
    for (var i = !1; e !== null; ) {
      if (e.tag === 5) {
        var c = e.stateNode;
        if (a !== null) {
          var f = eo(c);
          a.push(f), f.view && (i = !0);
        } else
          i || eo(c).view && (i = !0);
        lr = !0, xm(
          c,
          It === 0 ? t : t + "_" + It,
          n
        ), It++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && l || Rh(
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
      e.tag === 5 ? Rm(e.stateNode, e.memoizedProps) : (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && t || xn(
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
  function yc(e, t) {
    if (e.tag === 30) {
      var n = e.stateNode, a = e.memoizedProps, l = Bn(a, n), i = Vn(
        a.default,
        n.paired ? a.share : a.enter
      );
      i !== "none" ? _l(e, l, i, null, !1) ? (ir(e), n.paired || t || Ul(e, a.onEnter)) : xn(e.child, !1) : ir(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        yc(e, t), e = e.sibling;
    else ir(e);
  }
  function bc(e) {
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
            bc(e);
          }
          e = e.sibling;
        }
    }
  }
  function Ec(e) {
    if (e.tag === 30) {
      var t = e.memoizedProps, n = Bn(t, e.stateNode), a = Ft !== null ? Ft.get(n) : void 0, l = Vn(
        t.default,
        a !== void 0 ? t.share : t.exit
      );
      l !== "none" && (_l(e, n, l, null, !1) ? a !== void 0 ? (l = e.stateNode, a.paired = l, l.paired = a, Ft.delete(n), Ul(e, t.onShare)) : Ul(e, t.onExit) : xn(e.child, !1)), Ft !== null && bc(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        Ec(e), e = e.sibling;
    else
      Ft !== null && bc(e);
  }
  function jh(e) {
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
        (e.subtreeFlags & 33554432) !== 0 && jh(e);
      e = e.sibling;
    }
  }
  function Sc(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null; ) {
        if (e.tag !== 22 || e.memoizedState === null) {
          if (e.tag === 30 && (e.flags & 18874368) !== 0) {
            var t = e.stateNode;
            t.paired !== null && (t.paired = null, xn(e.child, !1));
          }
          Sc(e);
        }
        e = e.sibling;
      }
  }
  function ur(e) {
    if (e.tag === 30)
      e.stateNode.paired = null, xn(e.child, !1), Sc(e);
    else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        ur(e), e = e.sibling;
    else Sc(e);
  }
  function Dh(e) {
    for (e = e.child; e !== null; )
      e.tag === 30 ? xn(e.child, !1) : (e.subtreeFlags & 33554432) !== 0 && Dh(e), e = e.sibling;
  }
  function Tc(e, t, n, a, l, i, c) {
    for (var f = !1; t !== null; ) {
      if (t.tag === 5) {
        var y = t.stateNode;
        if (i !== null && It < i.length) {
          var x = i[It], z = eo(y);
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
        (e.flags & 4) !== 0 && xm(
          y,
          It === 0 ? n : n + "_" + It,
          l
        ), f && (e.flags & 4) !== 0 || (Cn === null && (Cn = []), Cn.push(
          y,
          It === 0 ? a : a + "_" + It,
          t.memoizedProps
        )), It++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && c ? e.flags |= t.flags & 32 : Tc(
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
  function Uh(e, t) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var n = e.memoizedProps, a = e.stateNode, l = Bn(n, a), i = Vn(n.default, n.update), c;
        c = e.memoizedState, e.memoizedState = null, a = e;
        var f = e.child;
        It = 0, l = Tc(
          a,
          f,
          l,
          l,
          i,
          c,
          !1
        ), (e.flags & 4) !== 0 && l && Ul(e, n.onUpdate);
      } else
        (e.subtreeFlags & 33554432) !== 0 && Uh(e);
      e = e.sibling;
    }
  }
  var yt = !1, Xe = !1, Rn = !1, Ac = !1, zh = typeof WeakSet == "function" ? WeakSet : Set, bt = null, jn = !1, Ri = !1, rr = !1, Nc = !1;
  function Zv(e, t, n) {
    if (e = e.containerInfo, Jc = Yl, e = Lf(e), os(e)) {
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
              for (var ce; _ !== a || i !== 0 && _.nodeType !== 3 || (y = f + i), _ !== c || l !== 0 && _.nodeType !== 3 || (x = f + l), _.nodeType === 3 && (f += _.nodeValue.length), (ce = _.firstChild) !== null; )
                U = _, _ = ce;
              for (; ; ) {
                if (_ === e) break t;
                if (U === a && ++z === i && (y = f), U === c && ++Q === l && (x = f), (ce = _.nextSibling) !== null) break;
                _ = U, U = _.parentNode;
              }
              _ = ce;
            }
            a = y === -1 || x === -1 ? null : { start: y, end: x };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for ($c = { focusedElem: e, selectionRange: a }, Yl = !1, n = (n & 335544064) === n, bt = t, t = n ? 9270 : 1024; bt !== null; ) {
      if (e = bt, n && (a = e.deletions, a !== null))
        for (i = 0; i < a.length; i++)
          n && Ec(a[i]);
      if (e.alternate === null && (e.flags & 2) !== 0)
        n && Ch(e), sr(n);
      else {
        if (e.tag === 22) {
          if (a = e.alternate, e.memoizedState !== null) {
            a !== null && a.memoizedState === null && n && Ec(a), sr(n);
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            n && Ch(e), sr(n);
            continue;
          }
        }
        a = e.child, (e.subtreeFlags & t) !== 0 && a !== null ? (a.return = e, bt = a) : (n && jh(e), sr(n));
      }
    }
    Ft = null;
  }
  function sr(e) {
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
              ao(a);
            else if (n === 1)
              switch (a.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  ao(a);
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
  function Mh(e, t, n) {
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
        a & 64 && Ah(n), a & 512 && On(n, n.return);
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
            dd(e, t);
          } catch (c) {
            Ke(n, n.return, c);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Oh(n);
      case 26:
      case 5:
        Dn(e, n), t === null && a & 4 && mc(n), a & 512 && On(n, n.return);
        break;
      case 12:
        Dn(e, n);
        break;
      case 31:
        Dn(e, n), a & 4 && Ih(e, n);
        break;
      case 13:
        Dn(e, n), a & 4 && Bh(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = uy.bind(
          null,
          n
        ), Vy(e, n))));
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
  function _c(e, t) {
    for (e = e.child; e !== null; )
      Hh(e, t), e = e.sibling;
  }
  function Hh(e, t) {
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
        wc(e, t);
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
          t ? Cm(f, !0) : Cm(e.stateNode, !1);
        } catch (y) {
          Ke(e, e.return, y);
        }
        break;
      case 22:
      case 23:
        e.memoizedState === null && _c(e, t);
        break;
      default:
        _c(e, t);
    }
  }
  function wc(e, t) {
    if (e.subtreeFlags & 67108864)
      for (e = e.child; e !== null; ) {
        e: {
          var n = e, a = t;
          switch (n.tag) {
            case 4:
              Hh(n, a);
              break e;
            case 22:
              n.memoizedState === null && wc(n, a);
              break e;
            default:
              wc(n, a);
          }
        }
        e = e.sibling;
      }
  }
  function qh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, qh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && hu(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var nt = null, Bt = !1;
  function yn(e, t, n) {
    for (n = n.child; n !== null; )
      Lh(e, t, n), n = n.sibling;
  }
  function Lh(e, t, n) {
    if (kt && typeof kt.onCommitFiberUnmount == "function")
      try {
        kt.onCommitFiberUnmount(Wl, n);
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
        Xe || Ct(n, t), xi(n);
        var a = nt, l = Bt;
        Ea(n.type) && (nt = n.stateNode, Bt = !1), yn(
          e,
          t,
          n
        ), Gm(
          n.stateNode,
          n.type,
          n.memoizedProps
        ), nt = a, Bt = l;
        break;
      case 5:
        Xe || Ct(n, t), xi(n);
      case 6:
        if (n.tag === 6 && xi(n), a = nt, l = Bt, nt = null, yn(
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
        nt !== null && (Bt ? (e = nt, Om(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), Xl(e)) : Om(nt, n.stateNode));
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
        Xe || (Ct(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && Nh(
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
  function Ih(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Xl(e);
      } catch (n) {
        Ke(t, t.return, n);
      }
    }
  }
  function Bh(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Xl(e);
      } catch (n) {
        Ke(t, t.return, n);
      }
  }
  function Jv(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new zh()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new zh()), t;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function cr(e, t) {
    var n = Jv(e);
    t.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var l = ry.bind(null, e, a);
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
        Lh(c, f, i), nt = null, Bt = !1, c = i.alternate, c !== null && (c.return = null), i.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Vh(t, e, n), t = t.sibling;
  }
  var bn = null;
  function Vh(e, t, n) {
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
        zt(t, e, n), Mt(e), l & 512 && (Xe || a === null || Ct(a, a.return)), l & 64 && yt && (e = e.updateQueue, e !== null && (t = e.callbacks, t !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? t : n.concat(t))));
        break;
      case 26:
        if (i = bn, zt(t, e, n), Mt(e), l & 512 && (Xe || a === null || Ct(a, a.return)), l & 4)
          if (l = a !== null ? a.memoizedState : null, n = e.memoizedState, a === null)
            if (n === null)
              if (e.stateNode === null)
                if (yt)
                  e.stateNode = Nm(
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
                        a = l.getElementsByTagName("title")[0], (!a || a[ni] || a[Nt] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = l.createElement(t), l.head.insertBefore(
                          a,
                          l.querySelector("head > title")
                        )), xt(a, t, n), a[Nt] = e, gt(a), t = a;
                        break e;
                      case "link":
                        if (i = Zm(
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
                        if (i = Zm(
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
                yt || oo(i, e.type, e.stateNode);
            else
              e.stateNode = Km(
                i,
                n,
                e.memoizedProps
              );
          else
            l !== n ? (l === null ? (t = a.stateNode, t === null || Xe || t.parentNode.removeChild(t)) : l.count--, n === null ? yt || oo(i, e.type, e.stateNode) : Km(i, n, e.memoizedProps)) : n === null && e.stateNode !== null && pc(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        break;
      case 27:
        zt(t, e, n), Mt(e), l & 512 && (Xe || a === null || Ct(a, a.return)), a !== null && l & 4 && pc(
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
        l & 4 && e.stateNode != null && (t = e.memoizedProps, pc(
          e,
          t,
          a !== null ? a.memoizedProps : t
        )), l & 1024 && (Ac = !0);
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
        if (Ge = !1, Nr = null, i = bn, bn = Ii(t.containerInfo), zt(t, e, n), bn = i, Mt(e), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Xl(t.containerInfo);
          } catch (z) {
            Ke(e, e.return, z);
          }
        Ac && (Ac = !1, Gh(e)), Ge = !1;
        break;
      case 4:
        l = Rn, Rn = yt, a = sf(), i = bn, bn = Ii(
          e.stateNode.containerInfo
        ), zt(t, e, n), Mt(e), bn = i, Ge && Ri && (rr = !0), Ge = a, Rn = l;
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
        var f = yt, y = Xe, x = Rn;
        yt = f || i, Rn = x || i, Xe = y || c, zt(t, e, n), Xe = y, Rn = x, yt = f, Mt(e), l & 8192 && (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, !i || a === null || c || yt || Xe || (t = c || Xe, n = yt, a = Xe, yt = i || yt, Xe = t, ma(e, 2), yt = n, Xe = a), !i && Rn || _c(e, i)), l & 4 && (t = e.updateQueue, t !== null && (n = t.retryQueue, n !== null && (t.retryQueue = null, cr(e, n))));
        break;
      case 19:
        zt(t, e, n), Mt(e), l & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, cr(e, t)));
        break;
      case 30:
        l & 512 && (Xe || a === null || Ct(a, a.return)), l = sf(), i = Ri, c = (n & 335544064) === n, f = e.memoizedProps, Ri = c && Vn(
          f.default,
          f.update
        ) !== "none", zt(t, e, n), Mt(e), c && a !== null && Ge && (e.flags |= 4), Ri = i, Ge = l;
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
          if (wh(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var l = e.return; l !== null; ) {
          if (hc(l)) {
            var i = l.stateNode;
            a === null ? a = [i] : a.push(i);
          }
          if (dc(l)) break;
          l = l.return;
        }
        var c = a;
        if (n == null) throw Error(s(160));
        switch (n.tag) {
          case 27:
            var f = n.stateNode, y = gc(e);
            ar(
              e,
              y,
              f,
              c
            );
            break;
          case 5:
            var x = n.stateNode;
            n.flags & 32 && (rl(x, ""), n.flags &= -33);
            var z = gc(e);
            ar(
              e,
              z,
              x,
              c
            );
            break;
          case 3:
          case 4:
            var Q = n.stateNode.containerInfo, _ = gc(e);
            vc(
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
  function Gh(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Gh(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, Yl = !0, t.reset(), Yl = !1), e = e.sibling;
      }
  }
  function wl(e, t) {
    if (t.subtreeFlags & 9270)
      for (t = t.child; t !== null; )
        Yh(t, e), t = t.sibling;
    else Uh(t);
  }
  function Yh(e, t) {
    var n = e.alternate;
    if (n === null) yc(e, !1);
    else
      switch (e.tag) {
        case 3:
          if (Nc = jn = !1, xh(), wl(t, e), !jn && !rr) {
            if (e = Cn, e !== null)
              for (var a = 0; a < e.length; a += 3) {
                n = e[a];
                var l = e[a + 1];
                Rm(n, e[a + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate(
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
            )), Nc = !0;
          }
          Cn = null;
          break;
        case 5:
          wl(t, e);
          break;
        case 4:
          a = jn, jn = !1, wl(t, e), jn && (rr = !0), jn = a;
          break;
        case 22:
          e.memoizedState === null && (n.memoizedState !== null ? yc(e, !1) : wl(t, e));
          break;
        case 30:
          a = jn, l = xh(), jn = !1, wl(t, e), jn && (e.flags |= 4);
          var i = e.memoizedProps, c = e.stateNode;
          t = Bn(i, c), c = Bn(n.memoizedProps, c);
          var f = Vn(i.default, i.update);
          f === "none" ? t = !1 : (i = n.memoizedState, n.memoizedState = null, n = e.child, It = 0, t = Tc(
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
        Mh(e, t.alternate, t), t = t.sibling;
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
          typeof l.componentWillUnmount == "function" && Nh(
            n,
            n.return,
            l
          ), ma(
            n,
            a
          );
          break;
        case 27:
          (a & 2) !== 0 && Gm(
            n.stateNode,
            n.type,
            n.memoizedProps
          );
        case 5:
          Ct(n, n.return), n.tag !== 5 && n.tag !== 27 || xi(n), ma(
            n,
            a
          );
          break;
        case 6:
          xi(n);
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
            } catch (z) {
              Ke(a, a.return, z);
            }
          if (a = i, l = a.updateQueue, l !== null) {
            var y = a.stateNode;
            try {
              var x = l.shared.hiddenCallbacks;
              if (x !== null)
                for (l.shared.hiddenCallbacks = null, l = 0; l < x.length; l++)
                  fd(x[l], y);
            } catch (z) {
              Ke(a, a.return, z);
            }
          }
          f && c & 64 && Ah(i), On(i, i.return);
          break;
        case 27:
          (n & 2) !== 0 && Oh(i);
        case 5:
          i.tag !== 5 && i.tag !== 27 || _h(i), En(
            l,
            i,
            n
          ), f && a === null && c & 4 && mc(i), On(i, i.return);
          break;
        case 6:
          _h(i);
          break;
        case 26:
          y = i.stateNode, i.memoizedState !== null || y === null || yt || oo(
            Ii(y.ownerDocument),
            i.type,
            y
          ), En(
            l,
            i,
            n
          ), f && a === null && c & 4 && mc(i), On(i, i.return);
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
          ), f && c & 4 && Ih(l, i);
          break;
        case 13:
          En(
            l,
            i,
            n
          ), f && c & 4 && Bh(l, i);
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
  function Oc(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && pi(n));
  }
  function Cc(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && pi(e));
  }
  function fn(e, t, n, a) {
    var l = (n & 335544064) === n;
    if (t.subtreeFlags & (l ? 10262 : 10256))
      for (t = t.child; t !== null; )
        Xh(
          e,
          t,
          n,
          a
        ), t = t.sibling;
    else l && Dh(t);
  }
  function Xh(e, t, n, a) {
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
        ), l && Nc && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), i & 2048 && (i = null, t.alternate !== null && (i = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== i && (t.refCount++, i != null && pi(i)));
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
        ) : (c._visibility |= 2, Ol(
          e,
          t,
          n,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        ))), i & 2048 && Oc(f, t);
        break;
      case 24:
        fn(
          e,
          t,
          n,
          a
        ), i & 2048 && Cc(t.alternate, t);
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
          ), Ci(8, c);
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
          ) : ji(
            i,
            c
          ) : (z._visibility |= 2, Ol(
            i,
            c,
            f,
            y,
            l
          )), l && x & 2048 && Oc(
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
          ), l && x & 2048 && Cc(c.alternate, c);
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
  function ji(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, a = t, l = a.flags;
        switch (a.tag) {
          case 22:
            ji(n, a), l & 2048 && Oc(
              a.alternate,
              a
            );
            break;
          case 24:
            ji(n, a), l & 2048 && Cc(a.alternate, a);
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
        Qh(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function Qh(e, t, n) {
    switch (e.tag) {
      case 26:
        Fa(
          e,
          t,
          n
        ), e.flags & $a && (e.memoizedState !== null ? t0(
          n,
          bn,
          e.memoizedState,
          e.memoizedProps
        ) : (e = e.stateNode, (t & 335544128) === t && Pm(n, e)));
        break;
      case 5:
        Fa(
          e,
          t,
          n
        ), e.flags & $a && (e = e.stateNode, (t & 335544128) === t && Pm(n, e));
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
  function kh(e) {
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
          bt = a, Zh(
            a,
            e
          );
        }
      kh(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Kh(e), e = e.sibling;
  }
  function Kh(e) {
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
          bt = a, Zh(
            a,
            e
          );
        }
      kh(e);
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
  function Zh(e, t) {
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
          pi(n.memoizedState.cache);
      }
      if (a = n.child, a !== null) a.return = n, bt = a;
      else
        e: for (n = e; bt !== null; ) {
          a = bt;
          var l = a.sibling, i = a.return;
          if (qh(a), a === n) {
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
  var $v = {
    getCacheForType: function(e) {
      var t = _t(st), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return _t(st).controller.signal;
    }
  }, Fv = typeof WeakMap == "function" ? WeakMap : Map, Ye = 0, Fe = null, ze = null, He = 0, ke = 0, Pt = null, pa = !1, Cl = !1, xc = !1, $n = 0, it = 0, ga = 0, Pa = 0, fr = 0, Wt = 0, xl = 0, Ui = null, Vt = null, Rc = !1, dr = 0, Jh = 0, hr = 1 / 0, mr = null, va = null, at = 0, Sn = null, Wa = null, Un = 0, jc = 0, Dc = null, $h = null, Rl = null, jl = null, Dl = null, zi = 0, pr = null;
  function en() {
    return (Ye & 2) !== 0 && He !== 0 ? He & -He : W.T !== null ? Gc() : Po();
  }
  function Fh() {
    if (Wt === 0)
      if ((He & 536870912) === 0 || Ue) {
        var e = cu;
        cu <<= 1, (cu & 3932160) === 0 && (cu = 262144), Wt = e;
      } else Wt = 536870912;
    return e = wt.current, e !== null && (e.flags |= 32), Wt;
  }
  function Ul(e, t) {
    if (t != null) {
      var n = e.stateNode, a = n.ref;
      a === null && (a = n.ref = jm(
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
    )), ti(e, n), ((Ye & 2) === 0 || e !== Fe) && (e === Fe && ((Ye & 2) === 0 && (Pa |= n), it === 4 && ya(
      e,
      He,
      Wt,
      !1
    )), zn(e));
  }
  function Ph(e, t, n) {
    if ((Ye & 6) !== 0) throw Error(s(327));
    var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || ei(e, t), l = a ? ey(e, t) : zc(e, t, !0), i = a;
    do {
      if (l === 0) {
        Cl && !a && ya(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, i && !Pv(n)) {
          l = zc(e, t, !1), i = !1;
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
              var y = f.current.memoizedState.isDehydrated;
              if (y && (zl(f, c).flags |= 256), c = zc(
                f,
                c,
                !1
              ), c !== 2 && c !== 6) {
                if (xc && !y) {
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
          if ((t & 62914560) === t && (l = dr + 300 - Qt(), 10 < l)) {
            if (ya(
              a,
              t,
              Wt,
              !pa
            ), fu(a, 0, !0) !== 0) break e;
            Un = t, a.timeoutHandle = Wc(
              Wh.bind(
                null,
                a,
                n,
                Vt,
                mr,
                Rc,
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
          Wh(
            a,
            n,
            Vt,
            mr,
            Rc,
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
  function Wh(e, t, n, a, l, i, c, f, y, x, z, Q, _, U) {
    e.timeoutHandle = -1;
    var ce = t.subtreeFlags, Ee = (i & 335544064) === i;
    if (Q = null, (Ee || ce & 8192 || (ce & 16785408) === 16785408) && (Q = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Nn
    }, Ft = null, Qh(
      t,
      i,
      Q
    ), Ee && (ce = Q, Ee = e.containerInfo, Ee = (Ee.nodeType === 9 ? Ee : Ee.ownerDocument).__reactViewTransition, Ee != null && (ce.count++, ce.waitingForViewTransition = !0, ce = Gi.bind(ce), Ee.finished.then(ce, ce))), ce = (i & 62914560) === i ? dr - Qt() : (i & 4194048) === i ? Jh - Qt() : 0, ce = n0(
      Q,
      ce
    ), ce !== null)) {
      Un = i, e.cancelPendingCommit = ce(
        rm.bind(
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
    rm(
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
  function Pv(e) {
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
    t = Ko(e, t), t &= ~fr, t &= ~Pa, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var l = t; 0 < l; ) {
      var i = 31 - Kt(l), c = 1 << i;
      a[i] = -1, l &= ~c;
    }
    n !== 0 && Jo(e, n, t);
  }
  function gr() {
    return (Ye & 6) === 0 ? (Mi(0), !1) : !0;
  }
  function Uc() {
    if (ze !== null) {
      if (ke === 0)
        var e = ze.return;
      else
        e = ze, Xn = Ba = null, Vs(e), El = null, yi = 0, e = ze;
      for (; e !== null; )
        Th(e.alternate, e), e = e.return;
      ze = null;
    }
  }
  function zl(e, t) {
    var n = e.timeoutHandle;
    return n !== -1 && (e.timeoutHandle = -1, Ty(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Un = 0, Uc(), Fe = e, ze = n = Gn(e.current, null), He = t, ke = 0, Pt = null, pa = !1, Cl = ei(e, t), xc = !1, xl = Wt = fr = Pa = ga = it = 0, Vt = Ui = null, Rc = !1, $n = Ko(e, t), Nu(), n;
  }
  function em(e, t) {
    Re = null, W.H = Ju, t === bl || t === Mu ? (t = rd(), ke = 3) : t === Cs ? (t = rd(), ke = 4) : ke = t === nc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Pt = t, ze === null && (it = 1, $u(
      e,
      rn(t, e.current)
    ));
  }
  function tm() {
    var e = wt.current;
    return e === null ? !0 : (He & 4194048) === He ? jt === null : (He & 62914560) === He || (He & 536870912) !== 0 ? e === jt : !1;
  }
  function nm() {
    var e = W.H;
    return W.H = Ju, e === null ? Ju : e;
  }
  function am() {
    var e = W.A;
    return W.A = $v, e;
  }
  function vr() {
    it = 4, pa || (He & 4194048) !== He && wt.current !== null || (Cl = !0), (ga & 134217727) === 0 && (Pa & 134217727) === 0 || Fe === null || ya(
      Fe,
      He,
      Wt,
      !1
    );
  }
  function zc(e, t, n) {
    var a = Ye;
    Ye |= 2;
    var l = nm(), i = am();
    (Fe !== e || He !== t) && (mr = null, zl(e, t)), t = !1;
    var c = it;
    e: do
      try {
        if (ke !== 0 && ze !== null) {
          var f = ze, y = Pt;
          switch (ke) {
            case 8:
              Uc(), c = 6;
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
        Wv(), c = it;
        break;
      } catch (z) {
        em(e, z);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Xn = Ba = null, Ye = a, W.H = l, W.A = i, ze === null && (Fe = null, He = 0, Nu()), c;
  }
  function Wv() {
    for (; ze !== null; ) lm(ze);
  }
  function ey(e, t) {
    var n = Ye;
    Ye |= 2;
    var a = nm(), l = am();
    Fe !== e || He !== t ? (mr = null, hr = Qt() + 500, zl(e, t)) : Cl = ei(
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
              if (id(i)) {
                ke = 0, Pt = null, im(t);
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
              id(i) ? (ke = 0, Pt = null, im(t)) : (ke = 0, Pt = null, Ml(e, t, i, 7));
              break;
            case 5:
              var c = null;
              switch (ze.tag) {
                case 26:
                  c = ze.memoizedState;
                case 5:
                case 27:
                  var f = ze;
                  if (c ? $m(c) : f.stateNode.complete) {
                    ke = 0, Pt = null;
                    var y = f.sibling;
                    if (y !== null) ze = y;
                    else {
                      var x = f.return;
                      x !== null ? (ze = x, yr(x)) : ze = null;
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
              Uc(), it = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        ty();
        break;
      } catch (z) {
        em(e, z);
      }
    while (!0);
    return Xn = Ba = null, W.H = a, W.A = l, Ye = n, ze !== null ? 0 : (Fe = null, He = 0, Nu(), it);
  }
  function ty() {
    for (; ze !== null && !yg(); )
      lm(ze);
  }
  function lm(e) {
    var t = Eh(e.alternate, e, $n);
    e.memoizedProps = e.pendingProps, t === null ? yr(e) : ze = t;
  }
  function im(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = hh(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          He
        );
        break;
      case 11:
        t = hh(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          He
        );
        break;
      case 5:
        Vs(t);
        var a = t;
        a === vt && (Ue ? (Ru(a), a.tag === 5 && a.stateNode != null && (et = a.stateNode)) : (Ru(a), Ue = !0));
      default:
        Th(n, t), t = ze = Zf(t, $n), t = Eh(n, t, $n);
    }
    e.memoizedProps = e.pendingProps, t === null ? yr(e) : ze = t;
  }
  function Ml(e, t, n, a) {
    Xn = Ba = null, Vs(t), El = null, yi = 0;
    var l = t.return;
    try {
      if (Gv(
        e,
        l,
        t,
        n,
        He
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
    t.flags & 32768 ? (Ue || a === 1 ? e = !0 : Cl || (He & 536870912) !== 0 ? e = !1 : (pa = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = wt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), um(t, e)) : yr(t);
  }
  function yr(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        um(
          t,
          pa
        );
        return;
      }
      e = t.return;
      var n = kv(
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
  function um(e, t) {
    do {
      var n = Kv(e.alternate, e);
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
  function rm(e, t, n, a, l, i, c, f, y, x, z, Q) {
    e.cancelPendingCommit = null;
    do
      br();
    while (at !== 0);
    if ((Ye & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === e.current) throw Error(s(177));
      e === Fe && (ze = Fe = null, He = 0), Wa = t, Sn = e, Un = n, Dc = l, $h = a, ny(
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
  function ny(e, t, n, a, l, i, c) {
    var f = t.lanes | t.childLanes;
    if (jc = f, f |= ps, Cg(
      e,
      n,
      f,
      a,
      l,
      i
    ), jl = null, (n & 335544064) === n ? (Dl = Rv(e), a = 10262) : (Dl = null, a = 10256), (t.subtreeFlags & a) !== 0 || (t.flags & a) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, sy(ru, function() {
      return Lc(), null;
    })) : (e.callbackNode = null, e.callbackPriority = 0), lr = !1, a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
      a = W.T, W.T = null, l = de.p, de.p = 2, i = Ye, Ye |= 4;
      try {
        Zv(e, t, n);
      } finally {
        Ye = i, de.p = l, W.T = a;
      }
    }
    at = 1, lr ? Rl = Cy(
      c,
      e.containerInfo,
      Dl,
      Mc,
      Hc,
      ly,
      qc,
      Lc,
      ay
    ) : (Mc(), Hc(), qc());
  }
  function ay(e) {
    if (at !== 0) {
      var t = Sn.onRecoverableError;
      t(e, { componentStack: null });
    }
  }
  function ly() {
    at === 3 && (at = 0, Yh(Wa, Sn), at = 4);
  }
  function Mc() {
    if (at === 1) {
      at = 0;
      var e = Sn, t = Wa, n = Un, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = W.T, W.T = null;
        var l = de.p;
        de.p = 2;
        var i = Ye;
        Ye |= 4;
        try {
          Ri = rr = !1, Vh(t, e, n), n = $c;
          var c = Lf(e.containerInfo), f = n.focusedElem, y = n.selectionRange;
          if (c !== f && f && f.ownerDocument && qf(
            f.ownerDocument.documentElement,
            f
          )) {
            if (y !== null && os(f)) {
              var x = y.start, z = y.end;
              if (z === void 0 && (z = x), "selectionStart" in f)
                f.selectionStart = x, f.selectionEnd = Math.min(
                  z,
                  f.value.length
                );
              else {
                var Q = f.ownerDocument || document, _ = Q && Q.defaultView || window;
                if (_.getSelection) {
                  var U = _.getSelection(), ce = f.textContent.length, Ee = Math.min(y.start, ce), je = y.end === void 0 ? Ee : Math.min(y.end, ce);
                  !U.extend && Ee > je && (c = je, je = Ee, Ee = c);
                  var w = Hf(
                    f,
                    Ee
                  ), A = Hf(
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
          Yl = !!Jc, $c = Jc = null;
        } finally {
          Ye = i, de.p = l, W.T = a;
        }
      }
      e.current = t, at = 2;
    }
  }
  function Hc() {
    if (at === 2) {
      at = 0;
      var e = Sn, t = Wa, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = W.T, W.T = null;
        var a = de.p;
        de.p = 2;
        var l = Ye;
        Ye |= 4;
        try {
          Mh(e, t.alternate, t);
        } finally {
          Ye = l, de.p = a, W.T = n;
        }
      }
      at = 3;
    }
  }
  function qc() {
    if (at === 4 || at === 3) {
      at = 0;
      var e = Rl;
      Rl = null, bg();
      var t = Sn, n = Wa, a = Un, l = $h, i = (a & 335544064) === a ? 10262 : 10256;
      if ((n.subtreeFlags & i) !== 0 || (n.flags & i) !== 0 ? at = 5 : (at = 0, Wa = Sn = null, sm(t, t.pendingLanes)), i = t.pendingLanes, i === 0 && (va = null), kr(a), n = n.stateNode, kt && typeof kt.onCommitFiberRoot == "function")
        try {
          kt.onCommitFiberRoot(
            Wl,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        n = W.T, i = de.p, de.p = 2, W.T = null;
        try {
          for (var c = t.onRecoverableError, f = 0; f < l.length; f++) {
            var y = l[f];
            c(y.value, {
              componentStack: y.stack
            });
          }
        } finally {
          W.T = n, de.p = i;
        }
      }
      if (l = jl, c = Dl, Dl = null, l !== null && (jl = null, c === null && (c = []), e !== null))
        for (y = 0; y < l.length; y++)
          n = (0, l[y])(
            c
          ), n !== void 0 && e.finished.finally(n);
      (Un & 3) !== 0 && br(), zn(t), i = t.pendingLanes, (a & 261930) !== 0 && (i & 42) !== 0 ? t === pr ? zi++ : (zi = 0, pr = t) : (zi = 0, pr = null), Mi(0);
    }
  }
  function sm(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, pi(t)));
  }
  function br() {
    return Rl !== null && (Rl.skipTransition(), Rl = null), Mc(), Hc(), qc(), Lc();
  }
  function Lc() {
    if (at !== 5) return !1;
    var e = Sn, t = jc;
    jc = 0;
    var n = kr(Un), a = W.T, l = de.p;
    try {
      de.p = 32 > n ? 32 : n, W.T = null, n = Dc, Dc = null;
      var i = Sn, c = Un;
      if (at = 0, Wa = Sn = null, Un = 0, (Ye & 6) !== 0) throw Error(s(331));
      var f = Ye;
      if (Ye |= 4, Kh(i.current), Xh(
        i,
        i.current,
        c,
        n
      ), Ye = f, Mi(0, !1), kt && typeof kt.onPostCommitFiberRoot == "function")
        try {
          kt.onPostCommitFiberRoot(Wl, i);
        } catch {
        }
      return !0;
    } finally {
      de.p = l, W.T = a, sm(e, t);
    }
  }
  function cm(e, t, n) {
    t = rn(n, t), t = tc(e.stateNode, t, 2), e = ca(e, t, 2), e !== null && (ti(e, 2), zn(e));
  }
  function Ke(e, t, n) {
    if (e.tag === 3)
      cm(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          cm(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (va === null || !va.has(a))) {
            e = rn(n, e), n = ih(2), a = ca(t, n, 2), a !== null && (uh(
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
  function Ic(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Fv();
      var l = /* @__PURE__ */ new Set();
      a.set(t, l);
    } else
      l = a.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), a.set(t, l));
    l.has(n) || (xc = !0, l.add(n), e = iy.bind(null, e, t, n), t.then(e, e));
  }
  function iy(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Fe === e && (He & n) === n && ((it === 4 || it === 3 && (He & 62914560) === He && 300 > Qt() - dr) && (Ye & 2) === 0 ? zl(e, 0) : fr |= n, xl === He && (xl = 0)), zn(e);
  }
  function om(e, t) {
    t === 0 && (t = Zo()), e = qa(e, t), e !== null && (ti(e, t), zn(e));
  }
  function uy(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), om(e, n);
  }
  function ry(e, t) {
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
    a !== null && a.delete(t), om(e, n);
  }
  function sy(e, t) {
    return Gr(e, t);
  }
  var Hl = null, ql = null, Bc = !1, Er = !1, Vc = !1, ba = 0;
  function zn(e) {
    e !== ql && e.next === null && (ql === null ? Hl = ql = e : ql = ql.next = e), Er = !0, Bc || (Bc = !0, oy());
  }
  function Mi(e, t) {
    if (!Vc && Er) {
      Vc = !0;
      do
        for (var n = !1, a = Hl; a !== null; ) {
          if (e !== 0) {
            var l = a.pendingLanes;
            if (l === 0) var i = 0;
            else {
              var c = a.suspendedLanes, f = a.pingedLanes;
              i = (1 << 31 - Kt(42 | e) + 1) - 1, i &= l & ~(c & ~f), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (n = !0, mm(a, i));
          } else
            i = He, i = fu(
              a,
              a === Fe ? i : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (i & 3) === 0 || ei(a, i) || (n = !0, mm(a, i));
          a = a.next;
        }
      while (n);
      Vc = !1;
    }
  }
  function cy() {
    fm();
  }
  function fm() {
    Er = Bc = !1;
    var e = 0;
    ba !== 0 && Sy() && (e = ba);
    for (var t = Qt(), n = null, a = Hl; a !== null; ) {
      var l = a.next, i = dm(a, t);
      i === 0 ? (a.next = null, n === null ? Hl = l : n.next = l, l === null && (ql = n)) : (n = a, (e !== 0 || (i & 3) !== 0) && (Er = !0)), a = l;
    }
    at !== 0 && at !== 5 || Mi(e), ba !== 0 && (ba = 0);
  }
  function dm(e, t) {
    for (var n = e.suspendedLanes, a = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var c = 31 - Kt(i), f = 1 << c, y = l[c];
      y === -1 ? ((f & n) === 0 || (f & a) !== 0) && (l[c] = Og(f, t)) : y <= t && (e.expiredLanes |= f), i &= ~f;
    }
    if (t = Fe, n = He, n = fu(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, n === 0 || e === t && (ke === 2 || ke === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && Yr(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || ei(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (a !== null && Yr(a), kr(n)) {
        case 2:
        case 8:
          n = Qo;
          break;
        case 32:
          n = ru;
          break;
        case 268435456:
          n = ko;
          break;
        default:
          n = ru;
      }
      return a = hm.bind(null, e), n = Gr(n, a), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return a !== null && a !== null && Yr(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function hm(e, t) {
    if (at !== 0 && at !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (br() && e.callbackNode !== n)
      return null;
    var a = He;
    return a = fu(
      e,
      e === Fe ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (Ph(e, a, t), dm(e, Qt()), e.callbackNode != null && e.callbackNode === n ? hm.bind(null, e) : null);
  }
  function mm(e, t) {
    if (br()) return null;
    Ph(e, t, !0);
  }
  function oy() {
    Ay(function() {
      (Ye & 6) !== 0 ? Gr(
        Xo,
        cy
      ) : fm();
    });
  }
  function Gc() {
    if (ba === 0) {
      var e = Ya;
      e === 0 && (e = su, su <<= 1, (su & 261888) === 0 && (su = 256)), ba = e;
    }
    return ba;
  }
  function pm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : gu(e);
  }
  function fy(e, t, n, a, l) {
    if (t === "submit" && n && n.stateNode === l) {
      var i = pm(
        (l[qt] || null).action
      ), c = a.submitter;
      c && (t = (t = c[qt] || null) ? pm(t.formAction) : c.getAttribute("formAction"), t !== null && (i = t, c = null));
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
                  var y = new FormData(l, c);
                  $s(
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
                typeof i == "function" && (f.preventDefault(), y = new FormData(l, c), $s(
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
  for (var Yc = 0; Yc < ms.length; Yc++) {
    var Xc = ms[Yc], dy = Xc.toLowerCase(), hy = Xc[0].toUpperCase() + Xc.slice(1);
    vn(
      dy,
      "on" + hy
    );
  }
  vn(Vf, "onAnimationEnd"), vn(Gf, "onAnimationIteration"), vn(Yf, "onAnimationStart"), vn("dblclick", "onDoubleClick"), vn("focusin", "onFocus"), vn("focusout", "onBlur"), vn(Tv, "onTransitionRun"), vn(Av, "onTransitionStart"), vn(Nv, "onTransitionCancel"), vn(Xf, "onTransitionEnd"), il("onMouseEnter", ["mouseout", "mouseover"]), il("onMouseLeave", ["mouseout", "mouseover"]), il("onPointerEnter", ["pointerout", "pointerover"]), il("onPointerLeave", ["pointerout", "pointerover"]), za(
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
  var Hi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), my = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Hi)
  );
  function gm(e, t) {
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
              Au(z);
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
              Au(z);
            }
            l.currentTarget = null, i = y;
          }
      }
    }
  }
  function Me(e, t) {
    var n = t[ef];
    n === void 0 && (n = t[ef] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    n.has(a) || (vm(t, e, 2, !1), n.add(a));
  }
  function Qc(e, t, n) {
    var a = 0;
    t && (a |= 4), vm(
      n,
      e,
      a,
      t
    );
  }
  var Sr = "_reactListening" + Math.random().toString(36).slice(2);
  function kc(e) {
    if (!e[Sr]) {
      e[Sr] = !0, af.forEach(function(n) {
        n !== "selectionchange" && (my.has(n) || Qc(n, !1, e), Qc(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Sr] || (t[Sr] = !0, Qc("selectionchange", !1, t));
    }
  }
  function vm(e, t, n, a) {
    switch (up(t)) {
      case 2:
        var l = u0;
        break;
      case 8:
        l = r0;
        break;
      default:
        l = ho;
    }
    n = l.bind(
      null,
      t,
      n,
      e
    ), l = void 0, !es || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), a ? l !== void 0 ? e.addEventListener(t, n, {
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
    vf(function() {
      var x = i, z = Pr(n), Q = [];
      e: {
        var _ = Qf.get(e);
        if (_ !== void 0) {
          var U = Eu, ce = e;
          switch (e) {
            case "keypress":
              if (yu(n) === 0) break e;
            case "keydown":
            case "keyup":
              U = Pg;
              break;
            case "focusin":
              ce = "focus", U = ls;
              break;
            case "focusout":
              ce = "blur", U = ls;
              break;
            case "beforeblur":
            case "afterblur":
              U = ls;
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
              U = Ef;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              U = Bg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              U = av;
              break;
            case Vf:
            case Gf:
            case Yf:
              U = Yg;
              break;
            case Xf:
              U = iv;
              break;
            case "scroll":
            case "scrollend":
              U = Lg;
              break;
            case "wheel":
              U = rv;
              break;
            case "copy":
            case "cut":
            case "paste":
              U = Qg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              U = Tf;
              break;
            case "submit":
              U = tv;
              break;
            case "toggle":
            case "beforetoggle":
              U = cv;
          }
          var Ee = (t & 4) !== 0, je = !Ee && (e === "scroll" || e === "scrollend"), w = Ee ? _ !== null ? _ + "Capture" : null : _;
          Ee = [];
          for (var A = x, R; A !== null; ) {
            var X = A;
            if (R = X.stateNode, X = X.tag, X !== 5 && X !== 26 && X !== 27 || R === null || w === null || (X = li(A, w), X != null && Ee.push(
              qi(A, X, R)
            )), je) break;
            A = A.return;
          }
          0 < Ee.length && (_ = new U(
            _,
            ce,
            null,
            n,
            z
          ), Q.push({ event: _, listeners: Ee }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (U = e === "mouseover" || e === "pointerover", _ = e === "mouseout" || e === "pointerout", U && n !== Fr && (ce = n.relatedTarget || n.fromElement) && (Ua(ce) || ce[nl]))
            break e;
          (_ || U) && (ce = z.window === z ? z : (U = z.ownerDocument) ? U.defaultView || U.parentWindow : window, _ ? (U = n.relatedTarget || n.toElement, _ = x, U = U ? Ua(U) : null, U !== null && (je = m(U), Ee = U.tag, U !== je || Ee !== 5 && Ee !== 27 && Ee !== 6) && (U = null)) : (_ = null, U = x), _ !== U && (Ee = Ef, X = "onMouseLeave", w = "onMouseEnter", A = "mouse", (e === "pointerout" || e === "pointerover") && (Ee = Tf, X = "onPointerLeave", w = "onPointerEnter", A = "pointer"), je = _ == null ? ce : ai(_), R = U == null ? ce : ai(U), ce = new Ee(
            X,
            A + "leave",
            _,
            n,
            z
          ), ce.target = je, ce.relatedTarget = R, X = null, Ua(z) === x && (Ee = new Ee(
            w,
            A + "enter",
            U,
            n,
            z
          ), Ee.target = R, Ee.relatedTarget = je, X = Ee), je = X, Ee = _ && U ? ne(
            _,
            U,
            py
          ) : null, _ !== null && ym(
            Q,
            ce,
            _,
            Ee,
            !1
          ), U !== null && je !== null && ym(
            Q,
            je,
            U,
            Ee,
            !0
          )));
        }
        e: {
          if (_ = x ? ai(x) : window, U = _.nodeName && _.nodeName.toLowerCase(), U === "select" || U === "input" && _.type === "file")
            var ye = Rf;
          else if (Cf(_))
            if (jf)
              ye = bv;
            else {
              ye = vv;
              var qe = gv;
            }
          else
            U = _.nodeName, !U || U.toLowerCase() !== "input" || _.type !== "checkbox" && _.type !== "radio" ? x && $r(x.elementType) && (ye = Rf) : ye = yv;
          if (ye && (ye = ye(e, x))) {
            xf(
              Q,
              ye,
              n,
              z
            );
            break e;
          }
          qe && qe(e, _, x);
        }
        switch (qe = x ? ai(x) : window, e) {
          case "focusin":
            (Cf(qe) || qe.contentEditable === "true") && (fl = qe, fs = x, di = null);
            break;
          case "focusout":
            di = fs = fl = null;
            break;
          case "mousedown":
            ds = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            ds = !1, If(Q, n, z);
            break;
          case "selectionchange":
            if (Sv) break;
          case "keydown":
          case "keyup":
            If(Q, n, z);
        }
        var Ae;
        if (us)
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
          ol ? wf(e, n) && (we = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (we = "onCompositionStart");
        we && (Af && n.locale !== "ko" && (ol || we !== "onCompositionStart" ? we === "onCompositionEnd" && ol && (Ae = yf()) : (ea = z, ts = "value" in ea ? ea.value : ea.textContent, ol = !0)), qe = Tr(x, we), 0 < qe.length && (we = new Sf(
          we,
          e,
          null,
          n,
          z
        ), Q.push({ event: we, listeners: qe }), Ae ? we.data = Ae : (Ae = Of(n), Ae !== null && (we.data = Ae)))), (Ae = fv ? dv(e, n) : hv(e, n)) && (we = Tr(x, "onBeforeInput"), 0 < we.length && (qe = new Sf(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          z
        ), Q.push({
          event: qe,
          listeners: we
        }), qe.data = Ae)), fy(
          Q,
          e,
          x,
          n,
          z
        );
      }
      gm(Q, t);
    });
  }
  function qi(e, t, n) {
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
        qi(e, l, i)
      ), l = li(e, t), l != null && a.push(
        qi(e, l, i)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function py(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function ym(e, t, n, a, l) {
    for (var i = t._reactName, c = []; n !== null && n !== a; ) {
      var f = n, y = f.alternate, x = f.stateNode;
      if (f = f.tag, y !== null && y === a) break;
      f !== 5 && f !== 26 && f !== 27 || x === null || (y = x, l ? (x = li(n, i), x != null && c.unshift(
        qi(n, x, y)
      )) : l || (x = li(n, i), x != null && c.push(
        qi(n, x, y)
      ))), n = n.return;
    }
    c.length !== 0 && e.push({ event: t, listeners: c });
  }
  var gy = /\r\n?/g, vy = /\u0000|\uFFFD/g;
  function bm(e) {
    return (typeof e == "string" ? e : "" + e).replace(gy, `
`).replace(vy, "");
  }
  function Em(e, t) {
    return t = bm(t), bm(e) === t;
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
        pu(e, "class", a);
        break;
      case "tabIndex":
        pu(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        pu(e, n, a);
        break;
      case "style":
        pf(e, a, i);
        return;
      case "data":
        if (t !== "object") {
          pu(e, "data", a);
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
        a = gu(a), e.setAttribute(n, a);
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
        a = gu(a), e.setAttribute(n, a);
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
        n = gu(a), e.setAttributeNS(
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
          n = Hg.get(n) || n, mu(e, n, a);
        else return;
    }
    Ge = !0;
  }
  function Zc(e, t, n, a, l, i) {
    switch (n) {
      case "style":
        pf(e, a, i);
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
        if (!lf.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (l = n.endsWith("Capture"), i = n.slice(2, l ? n.length - 7 : void 0), t = e[qt] || null, t = t != null ? t[n] : null, typeof t == "function" && e.removeEventListener(i, t, l), typeof a == "function")) {
              typeof t != "function" && t !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(i, a, l);
              break e;
            }
            Ge = !0, n in e ? e[n] = a : a === !0 ? e.setAttribute(n, "") : mu(e, n, a);
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
        ff(
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
        hf(e, a, l, i);
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
        for (a = 0; a < Hi.length; a++)
          Me(Hi[a], e);
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
        if ($r(t)) {
          for (z in n)
            n.hasOwnProperty(z) && (a = n[z], a !== void 0 && Zc(
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
  var yy = {};
  function by(e, t, n, a) {
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
        Zr(
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
        df(e, _, U);
        return;
      case "option":
        for (var ce in n)
          _ = n[ce], n.hasOwnProperty(ce) && _ != null && !a.hasOwnProperty(ce) && (ce === "selected" ? e.selected = !1 : Ze(
            e,
            t,
            ce,
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
        if ($r(t)) {
          for (var je in n)
            _ = n[je], n.hasOwnProperty(je) && _ !== void 0 && !a.hasOwnProperty(je) && Zc(
              e,
              t,
              je,
              void 0,
              a,
              _
            );
          for (z in a)
            _ = a[z], U = n[z], !a.hasOwnProperty(z) || _ === U || _ === void 0 && U === void 0 || Zc(
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
  function Sm(e) {
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
  function Ey() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var l = n[a], i = l.transferSize, c = l.initiatorType, f = l.duration;
        if (i && f && Sm(c)) {
          for (c = 0, f = l.responseEnd, a += 1; a < n.length; a++) {
            var y = n[a], x = y.startTime;
            if (x > f) break;
            var z = y.transferSize, Q = y.initiatorType;
            z && Sm(Q) && (y = y.responseEnd, c += z * (y < f ? 1 : (f - x) / (y - x)));
          }
          if (--a, t += 8 * (i + c) / (l.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Jc = null, $c = null;
  function Li(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Tm(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Am(e, t) {
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
  function Nm(e, t, n, a) {
    return n = Li(
      n
    ).createElement(e), n[Nt] = a, n[qt] = t, xt(n, e, t), gt(n), n;
  }
  function Fc(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Pc = null;
  function Sy() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Pc ? !1 : (Pc = e, !0) : (Pc = null, !1);
  }
  var Wc = typeof setTimeout == "function" ? setTimeout : void 0, Ty = typeof clearTimeout == "function" ? clearTimeout : void 0, _m = typeof Promise == "function" ? Promise : void 0, wm = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Wc, Ay = typeof queueMicrotask == "function" ? queueMicrotask : typeof _m < "u" ? function(e) {
    return _m.resolve(null).then(e).catch(Ny);
  } : Wc;
  function Ny(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ea(e) {
    return e === "head";
  }
  function Om(e, t) {
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
          ro(
            e.ownerDocument.documentElement
          );
        else if (n === "head") {
          n = e.ownerDocument.head, ro(n);
          for (var i = n.firstChild; i; ) {
            var c = i.nextSibling, f = i.nodeName;
            i[ni] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && i.rel.toLowerCase() === "stylesheet" || n.removeChild(i), i = c;
          }
        } else
          n === "body" && ro(e.ownerDocument.body);
      n = l;
    } while (n);
    Xl(t);
  }
  function Cm(e, t) {
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
  function xm(e, t, n) {
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
  function Rm(e, t) {
    e = e.style, t = t.style;
    var n = t != null ? t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null : null;
    e.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = t != null ? t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null : null, e.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), e.display === "inline-block" && (t == null ? e.display = e.margin = "" : (n = t.display, e.display = n == null || typeof n == "boolean" ? "" : n, n = t.margin, n != null ? e.margin = n : (n = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], e.marginTop = n == null || typeof n == "boolean" ? "" : n, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], e.marginBottom = t == null || typeof t == "boolean" ? "" : t)));
  }
  function _y(e, t, n) {
    return n = n.ownerDocument.defaultView, {
      rect: e,
      abs: t.position === "absolute" || t.position === "fixed",
      clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
      view: 0 <= e.bottom && 0 <= e.right && e.top <= n.innerHeight && e.left <= n.innerWidth
    };
  }
  function eo(e) {
    var t = e.getBoundingClientRect(), n = getComputedStyle(e);
    return _y(t, n, e);
  }
  function wy(e) {
    return e.documentElement.clientHeight;
  }
  function Oy(e) {
    this.addEventListener("load", e), this.addEventListener("error", e);
  }
  function Cy(e, t, n, a, l, i, c, f, y) {
    var x = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var z = x.startViewTransition({
        update: function() {
          var _ = x.defaultView, U = _.navigation && _.navigation.transition, ce = x.fonts.status;
          a();
          var Ee = [];
          if (ce === "loaded" && (wy(x), x.fonts.status === "loading" && Ee.push(x.fonts.ready)), ce = Ee.length, e !== null)
            for (var je = e.suspenseyImages, w = 0, A = 0; A < je.length; A++) {
              var R = je[A];
              if (!R.complete) {
                var X = R.getBoundingClientRect();
                if (0 < X.bottom && 0 < X.right && X.top < _.innerHeight && X.left < _.innerWidth) {
                  if (w += Fm(R), w > _r) {
                    Ee.length = ce;
                    break;
                  }
                  R = new Promise(
                    Oy.bind(R)
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
            var ce = _[U], Ee = ce.effect, je = Ee.pseudoElement;
            if (je != null && je.startsWith("::view-transition")) {
              Q.push(ce), ce = Ee.getKeyframes();
              for (var w = je = void 0, A = !0, R = 0; R < ce.length; R++) {
                var X = ce[R], ye = X.width;
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
              A && je !== void 0 && w !== void 0 && (Ee.setKeyframes(ce), A = getComputedStyle(
                Ee.target,
                Ee.pseudoElement
              ), A.width !== je || A.height !== w) && (A = ce[0], A.width = je, A.height = w, A = ce[ce.length - 1], A.width = je, A.height = w, Ee.setKeyframes(ce));
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
  function jm(e) {
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
      if (Um(i, e, t, n) === -1) {
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
          xy,
          e,
          f,
          a
        );
      }
      this._eventListeners = i;
    }
  };
  function xy(e, t, n, a) {
    return B(e).addEventListener(
      t,
      n,
      a
    ), !1;
  }
  tn.prototype.removeEventListener = function(e, t, n) {
    var a = this._eventListeners;
    if (a !== null && (t = Um(
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
        Ry,
        e,
        n,
        l
      ), a.splice(t, 1), i !== null && i();
    }
  };
  function Ry(e, t, n, a) {
    return B(e).removeEventListener(
      t,
      n,
      a
    ), !1;
  }
  function Ll(e) {
    return e != null && typeof e != "boolean" && (e.once === !0 || e.signal instanceof AbortSignal) ? { capture: e.capture, passive: e.passive } : e;
  }
  function Dm(e) {
    return e == null ? "c=0" : typeof e == "boolean" ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0");
  }
  function Um(e, t, n, a) {
    if (e.length === 0) return -1;
    a = Dm(a);
    for (var l = 0; l < e.length; l++) {
      var i = e[l];
      if (i.type === t && i.listener === n && Dm(i.optionsOrUseCapture) === a)
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
      zm,
      e,
      void 0,
      void 0
    );
  };
  function zm(e, t) {
    return e.tag === 6 ? !1 : (e = B(e), Gy(e, t));
  }
  tn.prototype.focusLast = function(e) {
    var t = [];
    p(
      this._fragmentFiber.child,
      !0,
      to,
      t,
      void 0,
      void 0
    );
    for (var n = t.length - 1; 0 <= n && !zm(t[n], e); n--) ;
  };
  function to(e, t) {
    return t.push(e), !1;
  }
  tn.prototype.blur = function() {
    var e = L(
      this._fragmentFiber
    );
    e !== null && (e = B(e), e = Li(e).activeElement, e !== null && p(
      this._fragmentFiber.child,
      !1,
      jy,
      e,
      void 0,
      void 0
    ));
  };
  function jy(e, t) {
    return e.tag === 6 ? !1 : (e = B(e), e === t || e.contains(t) ? (t.blur(), !0) : !1);
  }
  tn.prototype.observeUsing = function(e) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), p(
      this._fragmentFiber.child,
      !1,
      Dy,
      e,
      void 0,
      void 0
    );
  };
  function Dy(e, t) {
    return e.tag === 6 || (e = B(e), t.observe(e)), !1;
  }
  tn.prototype.unobserveUsing = function(e) {
    var t = this._observers;
    if (t !== null && t.has(e)) {
      t.delete(e), p(
        this._fragmentFiber.child,
        !1,
        Uy,
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
  function Uy(e, t) {
    return e.tag === 6 || (e = B(e), t.unobserve(e)), !1;
  }
  var Tn = [], no = !1;
  function zy(e, t, n) {
    Tn.push({
      fragmentInstance: e,
      observer: t,
      instance: n
    }), no || (no = !0, Yy(function() {
      no = !1;
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
      My,
      e,
      void 0,
      void 0
    ), e;
  };
  function My(e, t) {
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
      to,
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
    return f = a && i && c & Node.DOCUMENT_POSITION_FOLLOWING && f & Node.DOCUMENT_POSITION_PRECEDING, t = a && t === e || i && l === e || y || f ? Node.DOCUMENT_POSITION_CONTAINED_BY : !a && t === e || !i && l === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : c, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Hy(
      t,
      this._fragmentFiber,
      n[0],
      n[n.length - 1],
      e
    ) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function Hy(e, t, n, a, l) {
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
      he,
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
  function Mm(e, t) {
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
      to,
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
        e = B(a), Mm(e, n);
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
      l.tag === 6 ? (l = B(l), Mm(l, n)) : B(l).scrollIntoView(e), a += n ? -1 : 1;
    }
  };
  function qy(e, t) {
    return e = B(e), Hm(e, t), !1;
  }
  function Hm(e, t) {
    e.reactFragments == null && (e.reactFragments = /* @__PURE__ */ new Set()), e.reactFragments.add(t);
  }
  function qm(e, t) {
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
    }), Hm(e, t));
  }
  function Ly(e, t) {
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
      typeof i.rootMargin == "string" ? zy(
        t,
        i,
        e
      ) : i.unobserve(e);
    }), e.reactFragments != null && e.reactFragments.delete(t));
  }
  function ao(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          ao(n), hu(n);
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
  function Iy(e, t, n, a) {
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
  function By(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = dn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Lm(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = dn(e.nextSibling), e === null)) return null;
    return e;
  }
  function lo(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function io(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function Vy(e, t) {
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
  var uo = null;
  function Im(e) {
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
  function Bm(e) {
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
  function Gy(e, t) {
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
  function Yy(e) {
    wm(function() {
      wm(function(t) {
        return e(t);
      });
    });
  }
  function Vm(e, t, n) {
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
  function Gm(e, t, n) {
    for (var a in n) {
      var l = n[a];
      n.hasOwnProperty(a) && l != null && Ze(e, t, a, null, yy, l);
    }
    n.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === Nn && (e.onclick = null), hu(e);
  }
  function ro(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    hu(e);
  }
  var hn = /* @__PURE__ */ new Map(), Ym = /* @__PURE__ */ new Set();
  function Ii(e) {
    if (typeof e.getRootNode == "function") {
      var t = e.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) return t;
    }
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Fn = de.d;
  de.d = {
    f: Xy,
    r: Qy,
    D: ky,
    C: Ky,
    L: Zy,
    m: Jy,
    X: Fy,
    S: $y,
    M: Py
  };
  function Xy() {
    var e = Fn.f(), t = gr();
    return e || t;
  }
  function Qy(e) {
    var t = al(e);
    t !== null && t.tag === 5 && t.type === "form" ? Qd(t) : Fn.r(e);
  }
  var Il = typeof document > "u" ? null : document;
  function Xm(e, t, n) {
    var a = Il;
    if (a && typeof t == "string" && t) {
      var l = ln(t);
      l = 'link[rel="' + e + '"][href="' + l + '"]', typeof n == "string" && (l += '[crossorigin="' + n + '"]'), Ym.has(l) || (Ym.add(l), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(l) === null && (t = a.createElement("link"), xt(t, "link", e), gt(t), a.head.appendChild(t)));
    }
  }
  function ky(e) {
    Fn.D(e), Xm("dns-prefetch", e, null);
  }
  function Ky(e, t) {
    Fn.C(e, t), Xm("preconnect", e, t);
  }
  function Zy(e, t, n) {
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
      ), hn.set(i, e), a.querySelector(l) !== null || t === "style" && a.querySelector(Bi(i)) || t === "script" && a.querySelector(Vi(i))))) {
        var c = a.createElement("link");
        xt(c, "link", e), t === "style" && (c[du] = !0, c.onload = c.onerror = function() {
          nf(c);
        }), gt(c), a.head.appendChild(c);
      }
    }
  }
  function Jy(e, t) {
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
            if (n.querySelector(Vi(i)))
              return;
        }
        a = n.createElement("link"), xt(a, "link", e), gt(a), n.head.appendChild(a);
      }
    }
  }
  function $y(e, t, n) {
    Fn.S(e, t, n);
    var a = Il;
    if (a && e) {
      var l = ll(a).hoistableStyles, i = Bl(e);
      t = t || "default";
      var c = l.get(i);
      if (!c) {
        var f = { loading: 0, preload: null };
        if (c = a.querySelector(
          Bi(i)
        ))
          f.loading = 5;
        else {
          e = ue(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = hn.get(i)) && so(e, n);
          var y = c = a.createElement("link");
          gt(y), xt(y, "link", e), y._p = new Promise(function(x, z) {
            y.onload = x, y.onerror = z;
          }), y.addEventListener("load", function() {
            f.loading |= 1;
          }), y.addEventListener("error", function() {
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
  function Fy(e, t) {
    Fn.X(e, t);
    var n = Il;
    if (n && e) {
      var a = ll(n).hoistableScripts, l = Vl(e), i = a.get(l);
      i || (i = n.querySelector(Vi(l)), i || (e = ue({ src: e, async: !0 }, t), (t = hn.get(l)) && co(e, t), i = n.createElement("script"), gt(i), xt(i, "link", e), n.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(l, i));
    }
  }
  function Py(e, t) {
    Fn.M(e, t);
    var n = Il;
    if (n && e) {
      var a = ll(n).hoistableScripts, l = Vl(e), i = a.get(l);
      i || (i = n.querySelector(Vi(l)), i || (e = ue({ src: e, async: !0, type: "module" }, t), (t = hn.get(l)) && co(e, t), i = n.createElement("script"), gt(i), xt(i, "link", e), n.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(l, i));
    }
  }
  function Qm(e, t, n, a) {
    var l = (l = Z.current) ? Ii(l) : null;
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
          }, hn.set(e, i)), Wy(
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
  function Bi(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function km(e) {
    return ue({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Wy(e, t, n, a) {
    if (t = e.querySelector(
      'link[rel="preload"][as="style"][' + t + "]"
    )) {
      if (t[du] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      t = e.createElement("link"), t[du] = !0, t.onload = t.onerror = nf.bind(null, t), xt(t, "link", n), gt(t), e.head.appendChild(t);
    a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    });
  }
  function Vl(e) {
    return '[src="' + ln(e) + '"]';
  }
  function Vi(e) {
    return "script[async]" + e;
  }
  function Km(e, t, n) {
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
          ), gt(a), xt(a, "style", l), Ar(a, n.precedence, e), t.instance = a;
        case "stylesheet":
          l = Bl(n.href);
          var i = e.querySelector(
            Bi(l)
          );
          if (i)
            return t.state.loading |= 4, t.instance = i, gt(i), i;
          a = km(n), (l = hn.get(l)) && so(a, l), i = (e.ownerDocument || e).createElement("link"), gt(i);
          var c = i;
          return c._p = new Promise(function(f, y) {
            c.onload = f, c.onerror = y;
          }), xt(i, "link", a), t.state.loading |= 4, Ar(i, n.precedence, e), t.instance = i;
        case "script":
          return i = Vl(n.src), (l = e.querySelector(
            Vi(i)
          )) ? (t.instance = l, gt(l), l) : (a = n, (l = hn.get(i)) && (a = ue({}, n), co(a, l)), e = e.ownerDocument || e, l = e.createElement("script"), gt(l), xt(l, "link", a), e.head.appendChild(l), t.instance = l);
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
  function so(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function co(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Nr = null;
  function Zm(e, t, n) {
    if (Nr === null) {
      var a = /* @__PURE__ */ new Map(), l = Nr = /* @__PURE__ */ new Map();
      l.set(n, a);
    } else
      l = Nr, a = l.get(n), a || (a = /* @__PURE__ */ new Map(), l.set(n, a));
    if (a.has(e)) return a;
    for (a.set(e, null), n = n.getElementsByTagName(e), l = 0; l < n.length; l++) {
      var i = n[l];
      if (!(i[ni] || i[Nt] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var c = i.getAttribute(t) || "";
        c = e + c;
        var f = a.get(c);
        f ? f.push(i) : a.set(c, [i]);
      }
    }
    return a;
  }
  function oo(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function e0(e, t, n) {
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
  function Jm(e, t) {
    return e === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
  }
  function $m(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Fm(e) {
    return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function Pm(e, t) {
    typeof t.decode == "function" && (e.imgCount++, t.complete || (e.imgBytes += Fm(t), e.suspenseyImages.push(t)), e = a0.bind(e), t.decode().then(e, e));
  }
  function t0(e, t, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var l = Bl(a.href), i = t.querySelector(
          Bi(l)
        );
        if (i) {
          t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Gi.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = i, gt(i);
          return;
        }
        i = t.ownerDocument || t, a = km(a), (l = hn.get(l)) && so(a, l), i = i.createElement("link"), gt(i);
        var c = i;
        c._p = new Promise(function(f, y) {
          c.onload = f, c.onerror = y;
        }), xt(i, "link", a), n.instance = i;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Gi.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var _r = 0;
  function n0(e, t) {
    return e.stylesheets && e.count === 0 && Or(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && Or(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4 + t);
      0 < e.imgBytes && _r === 0 && (_r = 62500 * Ey());
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
  function Wm(e) {
    if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
      if (e.stylesheets) Or(e, e.stylesheets);
      else if (e.unsuspend) {
        var t = e.unsuspend;
        e.unsuspend = null, t();
      }
    }
  }
  function Gi() {
    this.count--, Wm(this);
  }
  function a0() {
    this.imgCount--, Wm(this);
  }
  var wr = null;
  function Or(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, wr = /* @__PURE__ */ new Map(), t.forEach(l0, e), wr = null, Gi.call(e));
  }
  function l0(e, t) {
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
  var Gl = {
    $$typeof: q,
    Provider: null,
    Consumer: null,
    _currentValue: We,
    _currentValue2: We,
    _threadCount: 0
  };
  function i0(e, t, n, a, l, i, c, f, y) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Xr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Xr(0), this.hiddenUpdates = Xr(null), this.identifierPrefix = a, this.onUncaughtError = l, this.onCaughtError = i, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function ep(e, t, n, a, l, i, c, f, y, x, z, Q) {
    return e = new i0(
      e,
      t,
      n,
      c,
      y,
      x,
      z,
      Q,
      f
    ), t = 1, i === !0 && (t |= 24), i = Lt(3, null, null, t), e.current = i, i.stateNode = e, t = _s(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: t
    }, xs(i), e;
  }
  function tp(e) {
    return e ? (e = ml, e) : ml;
  }
  function np(e, t, n, a, l, i) {
    l = tp(l), a.context === null ? a.context = l : a.pendingContext = l, a = sa(t), a.payload = { element: n }, i = i === void 0 ? null : i, i !== null && (a.callback = i), n = ca(e, a, t), n !== null && (Gt(n, e, t), bi(n, e, t));
  }
  function ap(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function fo(e, t) {
    ap(e, t), (e = e.alternate) && ap(e, t);
  }
  function lp(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = qa(e, 67108864);
      t !== null && Gt(t, e, 67108864), fo(e, 67108864);
    }
  }
  function ip(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = en();
      t = Qr(t);
      var n = qa(e, t);
      n !== null && Gt(n, e, t), fo(e, t);
    }
  }
  var Yl = !0;
  function u0(e, t, n, a) {
    var l = W.T;
    W.T = null;
    var i = de.p;
    try {
      de.p = 2, ho(e, t, n, a);
    } finally {
      de.p = i, W.T = l;
    }
  }
  function r0(e, t, n, a) {
    var l = W.T;
    W.T = null;
    var i = de.p;
    try {
      de.p = 8, ho(e, t, n, a);
    } finally {
      de.p = i, W.T = l;
    }
  }
  function ho(e, t, n, a) {
    if (Yl) {
      var l = mo(a);
      if (l === null)
        Kc(
          e,
          t,
          a,
          Cr,
          n
        ), rp(e, a);
      else if (c0(
        l,
        e,
        t,
        n,
        a
      ))
        a.stopPropagation();
      else if (rp(e, a), t & 4 && -1 < s0.indexOf(e)) {
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
                    zn(i), (Ye & 6) === 0 && (hr = Qt() + 500, Mi(0));
                  }
                }
                break;
              case 31:
              case 13:
                f = qa(i, 2), f !== null && Gt(f, i, 2), gr(), fo(i, 2);
            }
          if (i = mo(a), i === null && Kc(
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
  function mo(e) {
    return e = Pr(e), po(e);
  }
  var Cr = null;
  function po(e) {
    if (Cr = null, e = Ua(e), e !== null) {
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
    return Cr = e, null;
  }
  function up(e) {
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
        switch (Eg()) {
          case Xo:
            return 2;
          case Qo:
            return 8;
          case ru:
          case Sg:
            return 32;
          case ko:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var go = !1, Sa = null, Ta = null, Aa = null, Yi = /* @__PURE__ */ new Map(), Xi = /* @__PURE__ */ new Map(), Na = [], s0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function rp(e, t) {
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
    }, t !== null && (t = al(t), t !== null && lp(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function c0(e, t, n, a, l) {
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
  function sp(e) {
    var t = Ua(e.target);
    if (t !== null) {
      var n = m(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = v(n), t !== null) {
            e.blockedOn = t, Wo(e.priority, function() {
              ip(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = b(n), t !== null) {
            e.blockedOn = t, Wo(e.priority, function() {
              ip(n);
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
      var n = mo(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        Fr = a, n.target.dispatchEvent(a), Fr = null;
      } else
        return t = al(n), t !== null && lp(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function cp(e, t, n) {
    xr(e) && n.delete(t);
  }
  function o0() {
    go = !1, Sa !== null && xr(Sa) && (Sa = null), Ta !== null && xr(Ta) && (Ta = null), Aa !== null && xr(Aa) && (Aa = null), Yi.forEach(cp), Xi.forEach(cp);
  }
  function Rr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, go || (go = !0, u.unstable_scheduleCallback(
      u.unstable_NormalPriority,
      o0
    )));
  }
  var jr = null;
  function op(e) {
    jr !== e && (jr = e, u.unstable_scheduleCallback(
      u.unstable_NormalPriority,
      function() {
        jr === e && (jr = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], a = e[t + 1], l = e[t + 2];
          if (typeof a != "function") {
            if (po(a || n) === null)
              continue;
            break;
          }
          var i = al(n);
          i !== null && (e.splice(t, 3), t -= 3, $s(
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
      return Rr(y, e);
    }
    Sa !== null && Rr(Sa, e), Ta !== null && Rr(Ta, e), Aa !== null && Rr(Aa, e), Yi.forEach(t), Xi.forEach(t);
    for (var n = 0; n < Na.length; n++) {
      var a = Na[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Na.length && (n = Na[0], n.blockedOn === null); )
      sp(n), n.blockedOn === null && Na.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var l = n[a], i = n[a + 1], c = l[qt] || null;
        if (typeof i == "function")
          c || op(n);
        else if (c) {
          var f = null;
          if (i && i.hasAttribute("formAction")) {
            if (l = i, c = i[qt] || null)
              f = c.formAction;
            else if (po(l) !== null) continue;
          } else f = c.action;
          typeof f == "function" ? n[a + 1] = f : (n.splice(a, 3), a -= 3), op(n);
        }
      }
  }
  function fp() {
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
  function vo(e) {
    this._internalRoot = e;
  }
  Dr.prototype.render = vo.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    var n = t.current, a = en();
    np(n, a, e, t, null, null);
  }, Dr.prototype.unmount = vo.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      np(e.current, 2, null, e, null, null), gr(), t[nl] = null;
    }
  };
  function Dr(e) {
    this._internalRoot = e;
  }
  Dr.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Po();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Na.length && t !== 0 && t < Na[n].priority; n++) ;
      Na.splice(n, 0, e), n === 0 && sp(e);
    }
  };
  var dp = r.version;
  if (dp !== "19.3.0")
    throw Error(
      s(
        527,
        dp,
        "19.3.0"
      )
    );
  de.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = S(t), e = e !== null ? T(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var f0 = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: W,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Ur = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Ur.isDisabled && Ur.supportsFiber)
      try {
        Wl = Ur.inject(
          f0
        ), kt = Ur;
      } catch {
      }
  }
  return Ki.createRoot = function(e, t) {
    if (!h(e)) throw Error(s(299));
    var n = !1, a = "", l = th, i = nh, c = ah;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (l = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = ep(
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
      fp
    ), e[nl] = t.current, kc(e), new vo(t);
  }, Ki.hydrateRoot = function(e, t, n) {
    if (!h(e)) throw Error(s(299));
    var a = !1, l = "", i = th, c = nh, f = ah, y = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (i = n.onUncaughtError), n.onCaughtError !== void 0 && (c = n.onCaughtError), n.onRecoverableError !== void 0 && (f = n.onRecoverableError), n.formState !== void 0 && (y = n.formState)), t = ep(
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
      fp
    ), t.context = tp(null), n = t.current, a = en(), a = Qr(a), l = sa(a), l.callback = null, ca(n, l, a), n = a, t.current.lanes = n, ti(t, n), zn(t), e[nl] = t.current, kc(e), new Dr(t);
  }, Ki.version = "19.3.0", Ki;
}
var Tp;
function E0() {
  if (Tp) return Eo.exports;
  Tp = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (r) {
        console.error(r);
      }
  }
  return u(), Eo.exports = b0(), Eo.exports;
}
var S0 = E0(), T0 = Ip();
function Bp(u, r) {
  if (r) return r;
  const o = new URLSearchParams(u.location.search).get("hana-host-origin");
  if (o) return o;
  try {
    return new URL(u.document.referrer).origin;
  } catch {
    return "*";
  }
}
function Vp(u, r, o) {
  return u.source !== r ? !1 : o === "*" || u.origin === o;
}
var A0 = 600, N0 = 120, _0 = 4e3, Gp = 20, Ap = 4096, Np = 1e4, w0 = /* @__PURE__ */ new Set(["scroll_element", "click_sequence", "drag_element", "press_key"]), O0 = /* @__PURE__ */ new Set([
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
]), Yp = "hana-ui-", C0 = 512, x0 = 1, _p = /* @__PURE__ */ new WeakMap(), qr = /* @__PURE__ */ new WeakMap();
function kl(u) {
  return typeof u == "object" && u !== null && !Array.isArray(u);
}
function Br(u) {
  return u.nodeType === 9;
}
function Io(u) {
  return Br(u) ? u : u.ownerDocument;
}
function R0(u) {
  return Br(u) ? u.body : u;
}
function Xp(u, r) {
  return r.isConnected && (Br(u) ? r.ownerDocument === u : u.contains(r));
}
function Fl(u) {
  const r = u.ownerDocument.defaultView?.HTMLElement;
  return r ? u instanceof r : u instanceof HTMLElement;
}
function lu(u) {
  const r = u.ownerDocument.defaultView?.HTMLInputElement;
  return r ? u instanceof r : u instanceof HTMLInputElement;
}
function Bo(u) {
  const r = u.ownerDocument.defaultView?.HTMLTextAreaElement;
  return r ? u instanceof r : u instanceof HTMLTextAreaElement;
}
function Qp(u) {
  const r = u.ownerDocument.defaultView?.HTMLButtonElement;
  return r ? u instanceof r : u instanceof HTMLButtonElement;
}
function j0(u) {
  const r = u.ownerDocument.defaultView?.HTMLSelectElement;
  return r ? u instanceof r : u.tagName === "SELECT";
}
function D0(u) {
  const r = u.ownerDocument.defaultView?.HTMLAnchorElement;
  return r ? u instanceof r : u.tagName === "A";
}
function kp(u) {
  if (!Fl(u)) return !0;
  const r = u.ownerDocument.defaultView?.getComputedStyle(u);
  return !r || r.display !== "none" && r.visibility !== "hidden";
}
function U0(u) {
  return Fl(u) ? lu(u) || Bo(u) || Qp(u) || j0(u) || D0(u) || u.hasAttribute("contenteditable") || u.hasAttribute("onclick") || ["button", "switch", "textbox", "combobox", "slider", "checkbox", "link"].includes(u.getAttribute("role") ?? "") : !1;
}
function z0(u) {
  const r = u.ownerDocument;
  let o = _p.get(r);
  o || (o = /* @__PURE__ */ new WeakMap(), _p.set(r, o));
  const s = o.get(u), h = qr.get(r);
  if (s && h?.has(s)) return s;
  let m = s;
  if (!m)
    do
      m = `${Yp}${x0++}`;
    while (r.getElementById(m));
  o.set(u, m);
  let v = qr.get(r);
  if (v || (v = /* @__PURE__ */ new Map(), qr.set(r, v)), v.size >= C0) {
    const b = v.keys().next().value;
    b && v.delete(b);
  }
  return v.set(m, new WeakRef(u)), m;
}
function M0(u, r) {
  const o = u, s = { tagName: u.tagName.toLowerCase() };
  typeof o.id == "string" && o.id && (s.id = o.id.slice(0, 80)), typeof o.className == "string" && o.className.trim() && (s.className = o.className.trim().slice(0, 120));
  const h = o.textContent?.trim();
  return h && (s.text = h.slice(0, 160)), (lu(u) || Bo(u)) && (u.disabled && (s.disabled = !0), u.type && (s.type = u.type)), o.id ? s.elementId = o.id : r && U0(u) && (s.elementId = z0(u)), s;
}
function H0(u, r) {
  const o = [], s = R0(u);
  if (!s) return { outline: o, visibleNodeCount: 0, totalNodeCount: 0, truncated: !1 };
  const h = Io(u).createTreeWalker(s, 1);
  let m = h.currentNode, v = 0, b = 0;
  for (; m && b < A0; ) {
    if (m.nodeType === 1) {
      const E = m;
      b += 1, kp(E) && (v += 1, o.length < N0 && o.push(M0(E, r)));
    }
    m = h.nextNode();
  }
  return { outline: o, visibleNodeCount: v, totalNodeCount: b, truncated: m !== null };
}
function zo(u, r, o = !1) {
  if (typeof r != "string" || !r.trim()) return null;
  const s = r.trim(), h = Io(u), m = s.startsWith(Yp) ? qr.get(h)?.get(s)?.deref() ?? null : h.getElementById(s);
  return m && Xp(u, m) && (!o || kp(m)) ? m : null;
}
function Kp(u) {
  return Fl(u) ? lu(u) && (u.type === "file" || u.disabled) ? { ok: !1, error: "This element cannot be clicked." } : Qp(u) && u.disabled ? { ok: !1, error: "This element cannot be clicked." } : (u.click(), { ok: !0 }) : { ok: !1, error: "Target is not an element." };
}
function wp(u, r) {
  const o = lu(u) ? u.ownerDocument.defaultView?.HTMLInputElement.prototype : u.ownerDocument.defaultView?.HTMLTextAreaElement.prototype, s = o && Object.getOwnPropertyDescriptor(o, "value")?.set;
  s ? s.call(u, r) : u.value = r;
}
function q0(u, r, o) {
  const s = typeof r == "string" ? r.slice(0, _0) : "";
  if (lu(u)) {
    if (u.type === "file" || u.disabled || u.readOnly) return { ok: !1, error: "This element cannot accept text." };
    o ? wp(u, `${u.value}${s}`) : u.value = `${u.value}${s}`;
  } else if (Bo(u)) {
    if (u.disabled || u.readOnly) return { ok: !1, error: "This element cannot accept text." };
    o ? wp(u, `${u.value}${s}`) : u.value = `${u.value}${s}`;
  } else return { ok: !1, error: "This element cannot accept text." };
  return u.dispatchEvent(new Event("input", { bubbles: !0 })), u.dispatchEvent(new Event("change", { bubbles: !0 })), { ok: !0 };
}
function eu(u, r) {
  const o = zo(u, r, !0);
  return o && Fl(o) ? o : null;
}
function Ir(u, r) {
  return typeof u == "number" && Number.isFinite(u) && Math.abs(u) <= r ? u : null;
}
function L0(u, r) {
  const o = r.scrollX === void 0 ? 0 : Ir(r.scrollX, Np), s = r.scrollY === void 0 ? 0 : Ir(r.scrollY, Np);
  if (o === null || s === null || o === 0 && s === 0) return { ok: !1, code: "UI_ACTION_SCROLL_INVALID", error: "scroll_element requires bounded non-zero scroll coordinates." };
  const h = r.elementId === void 0 ? Br(u) ? u.scrollingElement ?? u.documentElement : u : eu(u, r.elementId);
  return !h || !Fl(h) ? { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No visible element matches this elementId." } : (h.scrollLeft += o, h.scrollTop += s, h.dispatchEvent(new Event("scroll", { bubbles: !1 })), { ok: !0, result: { scrollLeft: h.scrollLeft, scrollTop: h.scrollTop } });
}
function I0(u) {
  const r = Array.isArray(u.steps) ? u.steps : u.elementIds;
  if (!Array.isArray(r) || r.length < 1 || r.length > Gp) return null;
  const o = r.map((s) => {
    if (typeof s == "string") return s.trim();
    if (!kl(s)) return "";
    const h = typeof s.elementId == "string" ? s.elementId.trim() : "", m = Array.isArray(s.elementIds) && s.elementIds.length === 1 && typeof s.elementIds[0] == "string" ? s.elementIds[0].trim() : "";
    return h || m;
  });
  return o.every(Boolean) ? o : null;
}
function B0(u, r) {
  const o = I0(r);
  if (!o) return { ok: !1, code: "UI_ACTION_SEQUENCE_INVALID", error: "click_sequence requires one to twenty element IDs." };
  let s = 0;
  for (const [h, m] of o.entries()) {
    const v = eu(u, m);
    if (!v) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: `Sequence target ${h + 1} is unavailable.`, result: { completedCount: s, failedIndex: h } };
    const b = Kp(v);
    if (b.ok === !1) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_OPERABLE", error: b.error, result: { completedCount: s, failedIndex: h } };
    s += 1;
  }
  return { ok: !0, result: { completedCount: s } };
}
function No(u, r, o, s, h) {
  const m = u.ownerDocument.defaultView?.MouseEvent ?? MouseEvent;
  u.dispatchEvent(new m(r, { bubbles: !0, cancelable: !0, clientX: o, clientY: s, buttons: h }));
}
function _o(u, r, o, s, h) {
  const m = u.ownerDocument.defaultView, v = m?.PointerEvent ?? m?.MouseEvent ?? MouseEvent;
  u.dispatchEvent(new v(r, { bubbles: !0, cancelable: !0, clientX: o, clientY: s, buttons: h }));
}
function V0(u, r) {
  const o = eu(u, r.elementId);
  if (!o) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No visible source element matches this elementId." };
  const s = r.deltaX === void 0 ? 0 : Ir(r.deltaX, Ap), h = r.deltaY === void 0 ? 0 : Ir(r.deltaY, Ap);
  if (s === null || h === null) return { ok: !1, code: "UI_ACTION_DRAG_INVALID", error: "drag_element coordinates must be finite and bounded." };
  const m = r.targetElementId === void 0 ? null : eu(u, r.targetElementId);
  if (r.targetElementId !== void 0 && !m) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No visible target element matches targetElementId." };
  if (!m && s === 0 && h === 0) return { ok: !1, code: "UI_ACTION_DRAG_TARGET_REQUIRED", error: "drag_element requires a target element or non-zero delta." };
  const v = o.getBoundingClientRect(), b = v.left + v.width / 2, E = v.top + v.height / 2, S = m?.getBoundingClientRect(), T = S ? S.left + S.width / 2 : b + s, p = S ? S.top + S.height / 2 : E + h, L = m ?? o;
  _o(o, "pointerdown", b, E, 1), No(o, "mousedown", b, E, 1);
  for (const N of [0.25, 0.5, 0.75]) {
    const O = b + (T - b) * N, V = E + (p - E) * N;
    _o(L, "pointermove", O, V, 1), No(L, "mousemove", O, V, 1);
  }
  return _o(L, "pointerup", T, p, 0), No(L, "mouseup", T, p, 0), { ok: !0, result: { dragged: !0, endX: T, endY: p } };
}
function G0(u, r) {
  const o = r.key === void 0 ? r.keys : [r.key];
  if (!Array.isArray(o) || o.length < 1 || o.length > Gp || o.some((E) => typeof E != "string")) return { ok: !1, code: "UI_ACTION_KEY_INVALID", error: "press_key requires supported key names or single characters." };
  const s = o.map((E) => E.trim());
  if (s.some((E) => !(E.length === 1 || O0.has(E)))) return { ok: !1, code: "UI_ACTION_KEY_INVALID", error: "press_key requires supported key names or single characters." };
  const h = Io(u).activeElement, m = r.elementId === void 0 ? h && Xp(u, h) && Fl(h) ? h : null : eu(u, r.elementId);
  if (!m) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No focused visible element is available for press_key." };
  r.elementId !== void 0 && m.focus();
  const v = m.ownerDocument.defaultView?.KeyboardEvent ?? KeyboardEvent, b = { ctrlKey: r.ctrlKey === !0, metaKey: r.metaKey === !0, altKey: r.altKey === !0, shiftKey: r.shiftKey === !0 };
  for (const E of s)
    m.dispatchEvent(new v("keydown", { bubbles: !0, cancelable: !0, key: E, ...b })), m.dispatchEvent(new v("keyup", { bubbles: !0, cancelable: !0, key: E, ...b }));
  return { ok: !0, result: { pressedKeys: s } };
}
function Zp(u, r, o = !1) {
  const s = kl(r) && typeof r.action == "string" ? r.action : "";
  if (s === "describe_dom") return { ok: !0, result: H0(u, o) };
  if (s === "read_state") return { ok: !0, result: { state: {} } };
  if (s === "click_element") {
    const h = zo(u, kl(r) ? r.elementId : null, o);
    if (!h) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No element matches this elementId." };
    const m = Kp(h);
    return m.ok === !0 ? { ok: !0, result: { clicked: !0 } } : { ok: !1, code: "UI_ACTION_ELEMENT_NOT_OPERABLE", error: m.error };
  }
  if (s === "type_text") {
    const h = zo(u, kl(r) ? r.elementId : null, o);
    if (!h) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No element matches this elementId." };
    const m = q0(h, kl(r) ? r.text : "", o);
    return m.ok === !0 ? { ok: !0, result: { typed: !0 } } : { ok: !1, code: "UI_ACTION_ELEMENT_NOT_OPERABLE", error: m.error };
  }
  return w0.has(s) && !o ? { ok: !1, code: "UI_ACTION_UNSUPPORTED_FOR_APP_CARD", error: `App cards do not support ${s}.` } : kl(r) ? s === "scroll_element" ? L0(u, r) : s === "click_sequence" ? B0(u, r) : s === "drag_element" ? V0(u, r) : s === "press_key" ? G0(u, r) : { ok: !1, code: "UI_ACTION_UNKNOWN_ACTION", error: `Unknown UI action: ${s || "(missing)"}.` } : { ok: !1, code: "UI_ACTION_UNKNOWN_ACTION", error: `Unknown UI action: ${s || "(missing)"}.` };
}
var dt = "hana.plugin.ui", ht = 1, Y0 = "X-Hana-App-Surface-Session", X0 = "appSurfaceSession", $i = {
  CONTEXT: "hana.input-panel.context",
  SUBMIT: "hana.input-panel.submit",
  PRESENTATION: "hana.input-panel.presentation"
}, Op = 64 * 1024, Jp = {
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
}, Q0 = {
  CHANGED: "hana.app.storage.changed"
}, $p = { OPEN: "hana.cards.open" }, zr = {
  GET_ACTIVE: "hana.sessions.get-active",
  SUBSCRIBE: "hana.sessions.subscribe-active",
  UNSUBSCRIBE: "hana.sessions.unsubscribe-active",
  FOCUS: "hana.sessions.focus"
}, Cp = {
  ACTIVE_CHANGED: "hana.sessions.active-changed",
  ERROR: "hana.sessions.error"
}, Mo = {
  SET_INTERACTIVE_REGIONS: "hana.surface.set-interactive-regions"
};
function k0(u) {
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
}, K0 = 128;
function iu(u) {
  if (typeof u != "string" || u.length === 0 || u.length > K0)
    return !1;
  for (let r = 0; r < u.length; r += 1) {
    const o = u.charCodeAt(r);
    if (o <= 31 || o === 127)
      return !1;
  }
  return !0;
}
function Z0(u) {
  return !An(u) || !iu(u.viewToken) ? { ok: !1, error: "A chrome binding requires a host-minted view token." } : u.resync !== void 0 && typeof u.resync != "boolean" ? { ok: !1, error: "A chrome binding resync flag must be a boolean when present." } : { ok: !0, value: { viewToken: u.viewToken, ...u.resync === void 0 ? {} : { resync: u.resync } } };
}
function J0(u) {
  return !An(u) || !iu(u.challengeId) ? { ok: !1, error: "A chrome challenge requires a host-minted challenge id." } : { ok: !0, value: { challengeId: u.challengeId } };
}
function $0(u) {
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
function F0(u) {
  if (!An(u))
    return { ok: !1, error: "App chrome action request must be an object." };
  const r = u.kind;
  if (r !== "action" && r !== "tab-select" && r !== "tab-close")
    return { ok: !1, error: 'App chrome action request kind must be "action", "tab-select" or "tab-close".' };
  const o = $0(u);
  if (o.ok === !1)
    return o;
  const s = o.value;
  return r === "action" ? typeof u.actionId != "string" || u.actionId === "" ? { ok: !1, error: "App chrome action request requires a non-empty actionId." } : { ok: !0, value: { kind: r, ...s, actionId: u.actionId } } : typeof u.tabId != "string" || u.tabId === "" ? { ok: !1, error: `App chrome ${r} request requires a non-empty tabId.` } : { ok: !0, value: { kind: r, ...s, tabId: u.tabId } };
}
var Zi = {
  /** App → host: register the current document/namespace, returning a bound handle. */
  ENABLE: "hana.app.view-state.enable",
  /** App → host: read the snapshot the handle's namespace currently holds. */
  GET: "hana.app.view-state.get",
  /** App → host: compare-and-swap the handle's namespace snapshot. */
  SET: "hana.app.view-state.set",
  /** App → host: release this handle's own registration. */
  RELEASE: "hana.app.view-state.release"
}, P0 = 256;
function tu(u) {
  if (typeof u != "string" || u.length === 0 || u.length > P0 || u.trim().length === 0)
    return !1;
  for (let r = 0; r < u.length; r += 1) {
    const o = u.charCodeAt(r);
    if (o <= 31 || o === 127)
      return !1;
  }
  return !0;
}
function Vo(u, r) {
  const o = Reflect.ownKeys(u);
  if (o.length !== r.length)
    return !1;
  for (const s of o)
    if (typeof s != "string" || !r.includes(s))
      return !1;
  return !0;
}
function wo(u) {
  return !An(u) || !Vo(u, ["viewKind", "revision", "state"]) ? { ok: !1, error: "App view-state snapshot must carry exactly viewKind, revision and state." } : u.viewKind !== "compact" && u.viewKind !== "detached" ? { ok: !1, error: 'App view-state snapshot kind must be "compact" or "detached".' } : !Number.isSafeInteger(u.revision) || u.revision < 0 ? { ok: !1, error: "App view-state snapshot revision must be a non-negative safe integer." } : u.state === void 0 ? { ok: !1, error: "App view-state snapshot requires a state object or an explicit null." } : u.revision === 0 && u.state !== null ? { ok: !1, error: "App view-state revision 0 only carries a null state." } : { ok: !0, value: { viewKind: u.viewKind, revision: u.revision, state: u.state } };
}
function Oo(u) {
  return !An(u) || !Vo(u, ["viewToken", "bindingId", "registrationId", "snapshot"]) ? { ok: !1, error: "App view-state reply must echo exactly a view token, namespace binding id, registration id and snapshot." } : iu(u.viewToken) ? tu(u.bindingId) ? tu(u.registrationId) ? {
    ok: !0,
    value: { viewToken: u.viewToken, bindingId: u.bindingId, registrationId: u.registrationId, snapshot: u.snapshot }
  } : { ok: !1, error: "App view-state reply requires an opaque registration id." } : { ok: !1, error: "App view-state reply requires an opaque namespace binding id." } : { ok: !1, error: "App view-state reply requires the host-minted view token." };
}
function Ji(u, r) {
  return u.viewToken !== r.viewToken || u.bindingId !== r.bindingId ? !1 : r.registrationId === void 0 ? !0 : u.registrationId === r.registrationId;
}
function xp(u) {
  return !An(u) || !Vo(u, ["viewToken", "bindingId", "registrationId", "released"]) ? { ok: !1, error: "App view-state release reply must echo exactly a view token, namespace binding id, registration id and a boolean released flag." } : iu(u.viewToken) ? tu(u.bindingId) ? tu(u.registrationId) ? typeof u.released != "boolean" ? { ok: !1, error: "App view-state release reply requires a boolean released flag." } : { ok: !0, value: { viewToken: u.viewToken, bindingId: u.bindingId, registrationId: u.registrationId, released: u.released } } : { ok: !1, error: "App view-state release reply requires an opaque registration id." } : { ok: !1, error: "App view-state release reply requires an opaque namespace binding id." } : { ok: !1, error: "App view-state release reply requires the host-minted view token." };
}
var W0 = /^\/api\/apps\/([^/]+)\/ui(?:\/|$)/, eb = /^\/api\/apps\/([^/]+)\/routes\/_runtime\/([^/]+)\/_surface\/([^/]+)\//;
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
function Go(u) {
  if (typeof u != "string" || !u.startsWith("/api/apps/"))
    return null;
  const r = eb.exec(u);
  if (r) {
    const s = Mr(r[1]), h = Mr(r[2]), m = Mr(r[3]);
    return s === null || h === null || m === null ? null : { appId: s, kind: "runtime" };
  }
  const o = W0.exec(u);
  if (o) {
    const s = Mr(o[1]);
    return s === null ? null : { appId: s, kind: "ui" };
  }
  return null;
}
var tb = 256;
function Fp(u) {
  if (u !== void 0)
    return typeof u != "string" || u.length === 0 || u.length > tb || u.includes("\0") || u.trim().length === 0 ? null : u;
}
var nb = {
  CONTEXT: "hana.surface.context"
}, ab = /* @__PURE__ */ new Set([
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
      code: Jp.BAD_MESSAGE,
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
        code: Jp.UNSUPPORTED_VERSION,
        message: `Unsupported Plugin UI protocol version: ${String(u.version)}.`
      }
    };
  if (typeof u.kind != "string" || !ab.has(u.kind))
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
var lb = [
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
], ib = [
  "cards",
  "agentTypes",
  "configuration",
  "settingsTab",
  "page",
  "widget"
], ub = [
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
], rb = ["restricted", "full-access"];
new Set(lb);
new Set(ib);
new Set(ub);
new Set(rb);
var sb = Object.values(Ie);
new Set(sb);
var Pi = class extends Error {
  reason;
  constructor(u, r) {
    super(r), this.name = "AppCurrentViewBindingError", this.reason = u;
  }
};
function cb() {
  return `chrome-doc:${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`;
}
function ob(u) {
  return JSON.stringify([u.appId, u.cardInstanceId ?? null, u.instanceKey ?? null]);
}
function fb(u) {
  const r = cb();
  let o = null, s = !1, h, m = !0;
  const v = /* @__PURE__ */ new Set(), b = /* @__PURE__ */ new Set();
  let E = 0;
  const S = () => {
    E += 1;
  }, T = (K) => new Pi("unavailable", K), p = () => new Pi(
    "identity-changed",
    "The current App card identity changed while this view write waited."
  ), L = () => new Pi(
    "token-stale",
    "The held view token is no longer the current document."
  ), N = (K) => {
    v.delete(K), u.targetWindow.clearTimeout(K.timer), K.signal && K.onAbort && K.signal.removeEventListener("abort", K.onAbort);
  }, O = (K, ie) => {
    N(K), K.reject(ie);
  }, V = (K, ie) => {
    const ne = o !== K, ue = m;
    o = K, m = !0, (ne || !ue) && S();
    for (const ge of [...v]) {
      if (N(ge), ge.identity !== void 0 && ge.identity !== h) {
        ge.reject(p());
        continue;
      }
      ge.resolve(K);
    }
    if (b.size === 0) return;
    const be = { changed: ne, resync: ie }, se = E;
    for (const ge of [...b]) {
      if (s || se !== E) return;
      b.has(ge) && ge.listener(be);
    }
  };
  return {
    handleHostMessage: (K) => {
      const ie = K.type === Zl.CHALLENGE, ne = K.type === Zl.BINDING;
      if (!ie && !ne) return !1;
      if (s) return !0;
      if (ie && K.kind === "event") {
        const ue = J0(K.payload);
        return ue.ok === !0 && (u.post({
          protocol: dt,
          version: ht,
          kind: "event",
          type: Zl.ACK,
          payload: { challengeId: ue.value.challengeId, documentNonce: r }
        }), s || u.reannounceReady?.()), !0;
      }
      if (ne && K.kind === "event") {
        const ue = Z0(K.payload);
        return ue.ok === !0 && V(ue.value.viewToken, ue.value.resync === !0), !0;
      }
      return !0;
    },
    applySurfaceContext: (K) => {
      if (s) return;
      if (K === null) {
        if (!m) return;
        m = !1, S();
        return;
      }
      const ie = ob(K);
      if (h !== ie) {
        if (h !== void 0) {
          for (const ne of [...v]) O(ne, p());
          o = null;
        }
        h = ie, S();
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
function db(u, r) {
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
      const b = ++s, E = v.ownerDocument?.defaultView, S = { generation: b, scrolled: v.scrollTop > 0, detach: () => {
      } }, T = () => {
        if (!o || o.generation !== b) return;
        const N = v.scrollTop > 0;
        N !== o.scrolled && (o.scrolled = N, h(N));
      };
      v.addEventListener("scroll", T, { passive: !0 });
      const p = E?.ResizeObserver, L = p ? new p(T) : null;
      return L?.observe(v), S.detach = () => {
        v.removeEventListener("scroll", T), L?.disconnect();
      }, o = S, S.scrolled && h(!0), () => {
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
function hb(u) {
  const r = { requestId: u.requestId, revision: u.revision };
  return u.kind === "action" ? { ...r, kind: "action", actionId: u.actionId } : u.kind === "tab-select" ? { ...r, kind: "tab-select", tabId: u.tabId } : { ...r, kind: "tab-close", tabId: u.tabId };
}
var mb = 1e4;
function pb(u) {
  const r = u.requestTimeoutMs ?? mb, o = u.currentView;
  let s = !1, h = null;
  const m = new AbortController(), v = db(() => s ? null : o.currentToken(), u.post), b = o.onBinding((B) => {
    s || (B.changed || B.resync) && v.flush();
  }), E = () => Object.assign(
    new Error("The App card business identity changed; this chrome write is stale."),
    { code: Pn.VIEW_STALE }
  ), S = () => Object.assign(
    new Error("The host has not bound this App card view; chrome is unavailable here."),
    { code: Pn.UNAVAILABLE }
  ), T = () => Object.assign(
    new Error("The App chrome view was released."),
    { code: Pn.UNAVAILABLE }
  ), p = (B) => B instanceof Pi ? B.reason === "unavailable" ? S() : E() : B, L = (B, le) => {
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
    const le = F0(B.payload);
    if (le.ok === !1)
      return L(B, { kind: "error", error: { code: Pn.BAD_PAYLOAD, message: le.error } }), !0;
    const re = le.value, he = {
      requestId: re.requestId,
      revision: re.revision,
      generation: re.generation,
      viewToken: re.viewToken
    }, K = h;
    if (!K)
      return L(B, {
        kind: "error",
        payload: he,
        error: { code: Pn.ACTION_UNHANDLED, message: "This App has no chrome action handler." }
      }), !0;
    if (re.viewToken !== o.currentToken())
      return L(B, {
        kind: "error",
        payload: he,
        error: { code: Pn.VIEW_STALE, message: "This chrome action belongs to a replaced view." }
      }), !0;
    const ie = () => !s && h === K && re.viewToken === o.currentToken();
    return Promise.resolve().then(async () => {
      if (!ie()) {
        L(B, {
          kind: "error",
          payload: he,
          error: { code: Pn.VIEW_STALE, message: "This chrome action belongs to a replaced view." }
        });
        return;
      }
      let ne;
      try {
        ne = await K.fn(hb(re));
      } catch (ue) {
        if (!ie()) return;
        L(B, {
          kind: "error",
          payload: he,
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
          ...he,
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
          (he) => {
            V("hana.chrome.set");
            try {
              o.assertCurrentToken(he);
            } catch (K) {
              throw p(K);
            }
            return u.request(Zl.SET, { description: B, viewToken: he }, { timeoutMs: re });
          },
          (he) => {
            throw s ? T() : p(he);
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
var gb = 16, vb = 4096, yb = 24 * 1024, Et = class extends Error {
  code;
  constructor(u, r) {
    super(r), this.name = "AppViewStateError", this.code = u;
  }
}, bb = new TextEncoder();
function Eb(u) {
  return bb.encode(u).length;
}
function Sb(u) {
  if (typeof u != "object" || u === null || Array.isArray(u)) return !1;
  const r = Object.getPrototypeOf(u);
  return r === Object.prototype || r === null;
}
function Tb(u) {
  const r = Number(u);
  return !Number.isInteger(r) || r < 0 || String(r) !== u ? null : r;
}
function Pp(u) {
  return u === "input" ? "VIEW_STATE_INVALID_INPUT" : "VIEW_STATE_INVALID_STORAGE";
}
function Ab(u, r) {
  const o = Pp(r), s = /* @__PURE__ */ new Set();
  let h = 0;
  const m = (v, b) => {
    if (h += 1, h > vb)
      throw new Et(o, "App view state contains too many values.");
    if (b > gb)
      throw new Et(o, "App view state is nested too deeply.");
    if (v === null) return null;
    const E = typeof v;
    if (E === "string" || E === "boolean") return v;
    if (E === "number") {
      if (!Number.isFinite(v))
        throw new Et(o, "App view state numbers must be finite.");
      return v;
    }
    if (E !== "object")
      throw new Et(o, "App view state must contain only JSON values.");
    const S = v;
    if (s.has(S))
      throw new Et(o, "App view state must not contain cycles.");
    const T = Object.getPrototypeOf(S);
    if (Array.isArray(S)) {
      if (T !== Array.prototype)
        throw new Et(o, "App view state must contain only plain arrays.");
      s.add(S);
      const L = S.length;
      for (const O of Reflect.ownKeys(S)) {
        if (typeof O != "string")
          throw new Et(o, "App view state must not contain symbol keys.");
        if (O === "length") {
          const le = Object.getOwnPropertyDescriptor(S, "length");
          if (le.enumerable || le.get || le.set)
            throw new Et(o, "App view state arrays must expose a plain length.");
          continue;
        }
        const V = Tb(O);
        if (V === null || V >= L)
          throw new Et(o, "App view state arrays must not carry extra keys.");
        const B = Object.getOwnPropertyDescriptor(S, O);
        if (!B.enumerable || B.get || B.set)
          throw new Et(o, "App view state arrays must index plain values.");
      }
      const N = [];
      for (let O = 0; O < L; O++) {
        const V = Object.getOwnPropertyDescriptor(S, String(O));
        if (!V)
          throw new Et(o, "App view state must not contain sparse arrays.");
        N.push(m(V.value, b + 1));
      }
      return s.delete(S), N;
    }
    if (T !== Object.prototype && T !== null)
      throw new Et(o, "App view state must contain only plain objects.");
    s.add(S);
    const p = /* @__PURE__ */ Object.create(null);
    for (const L of Reflect.ownKeys(S)) {
      if (typeof L != "string")
        throw new Et(o, "App view state must not contain symbol keys.");
      const N = Object.getOwnPropertyDescriptor(S, L);
      if (!N.enumerable)
        throw new Et(o, "App view state must not contain non-enumerable fields.");
      if (N.get || N.set)
        throw new Et(o, "App view state must not contain accessors.");
      p[L] = m(N.value, b + 1);
    }
    return s.delete(S), p;
  };
  return m(u, 0);
}
function Nb(u, r) {
  if (u === null) return null;
  if (!Sb(u))
    throw new Et(
      Pp(r),
      "App view state must be a JSON object or null."
    );
  return Ab(u, r);
}
function _b(u, r) {
  if (u === null) return null;
  const o = JSON.stringify(u);
  if (Eb(o) > yb)
    throw new Et(
      "VIEW_STATE_TOO_LARGE",
      "App view state exceeds the size budget."
    );
  return JSON.parse(o);
}
function Ho(u) {
  return _b(Nb(u, "input"));
}
var Oe = {
  UNAVAILABLE: "VIEW_STATE_UNAVAILABLE",
  VIEW_STALE: "VIEW_STATE_VIEW_STALE",
  RELEASED: "VIEW_STATE_RELEASED",
  INVALID_INPUT: "VIEW_STATE_INVALID_INPUT",
  BAD_RESPONSE: "VIEW_STATE_BAD_RESPONSE"
}, wb = class extends Error {
  code;
  constructor(u, r) {
    super(r), this.name = "AppViewStateRequestError", this.code = u;
  }
}, Ob = 1e4;
function Ce(u, r) {
  return new wb(u, r);
}
function Cb(u) {
  return {
    viewKind: u.viewKind,
    revision: u.revision,
    state: Ho(u.state)
  };
}
function xb(u) {
  const r = u.requestTimeoutMs ?? Ob;
  let o = !1, s = 0, h = null;
  const m = /* @__PURE__ */ new Map();
  let v = null, b = null, E = !1;
  const S = (q) => q instanceof Pi ? q.reason === "unavailable" ? Ce(Oe.UNAVAILABLE, "The App card view is not writable here right now.") : Ce(Oe.VIEW_STALE, "The App card view this operation was bound to is no longer current.") : q, T = (q, M) => {
    !q || q.terminated !== null || (q.terminated = M, q.lifetime.abort());
  }, p = (q) => {
    T(h, q), h = null;
    for (const M of m.values()) M.abort.abort();
    m.clear();
  }, L = (q) => {
    if (o || q === null) return;
    if (q.slot !== "card") {
      p("namespace-changed"), b = null, E = !0, v = null;
      return;
    }
    const M = JSON.stringify([q.appId, q.cardInstanceId, q.instanceKey ?? null]), ee = q.viewState?.bindingId ?? null;
    (E && b !== M || ee !== null && v !== null && ee !== v) && p("namespace-changed"), b = M, E = !0, ee !== null && (v = ee);
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
      throw S(M);
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
  }, he = (q) => q === "document-changed" || q === "namespace-changed" ? Ce(Oe.VIEW_STALE, "This view-state handle's view changed before the operation could be adopted.") : Ce(Oe.RELEASED, "This view-state handle has been released."), K = (q) => {
    if (o)
      throw Ce(Oe.RELEASED, "The App view-state controller was released.");
    if (q.terminated !== null) throw he(q.terminated);
    if (q.lifetime.signal.aborted)
      throw Ce(Oe.RELEASED, "This view-state handle has been released.");
    if (h !== q)
      throw Ce(Oe.VIEW_STALE, "This view-state handle is no longer the current registration.");
    return le(q.viewToken), re(q), q.viewToken;
  }, ie = (q, M) => {
    if (o)
      throw Ce(Oe.RELEASED, "The App view-state controller was released.");
    if (q.terminated !== null) throw he(q.terminated);
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
        if (j.terminated !== null) throw he(j.terminated);
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
      ee = Ho(M.state);
    } catch (j) {
      throw j instanceof Et ? Ce(Oe.BAD_RESPONSE, "The view-state reply carried a state outside the shared JSON budget.") : j;
    }
    return { viewKind: q, revision: M.revision, state: ee };
  }, be = async (q, M) => {
    const ee = M?.timeoutMs ?? r, j = K(q), F = await ne(Zi.GET, {
      viewToken: j,
      bindingId: q.bindingId,
      registrationId: q.registrationId
    }, ee, q);
    ie(q, j);
    const ae = Oo(F);
    if (ae.ok === !1)
      throw Ce(Oe.BAD_RESPONSE, ae.error);
    if (!Ji(ae.value, {
      viewToken: j,
      bindingId: q.bindingId,
      registrationId: q.registrationId
    }))
      throw Ce(Oe.VIEW_STALE, "This view-state reply answered a different view than the one this handle targets.");
    const I = wo(ae.value.snapshot);
    if (I.ok === !1)
      throw Ce(Oe.BAD_RESPONSE, I.error);
    return ue(q.viewKind, I.value);
  }, se = async (q, M, ee) => {
    const j = ee?.timeoutMs ?? r, F = Rb(M), ae = Ho(M.state), I = K(q), te = await ne(Zi.SET, {
      viewToken: I,
      bindingId: q.bindingId,
      registrationId: q.registrationId,
      expectedRevision: F,
      state: ae
    }, j, q);
    ie(q, I);
    const J = Oo(te);
    if (J.ok === !1)
      throw Ce(Oe.BAD_RESPONSE, J.error);
    if (!Ji(J.value, {
      viewToken: I,
      bindingId: q.bindingId,
      registrationId: q.registrationId
    }))
      throw Ce(Oe.VIEW_STALE, "This view-state reply answered a different view than the one this handle targets.");
    const g = wo(J.value.snapshot);
    if (g.ok === !1)
      throw Ce(Oe.BAD_RESPONSE, g.error);
    return ue(q.viewKind, g.value);
  }, ge = async (q, M, ee) => {
    if (!B(q)) return;
    const j = u.getContext();
    if (!(!j || j.slot !== "card" || j.viewState?.bindingId !== M))
      try {
        const F = await u.request(Zi.RELEASE, { viewToken: q, bindingId: M, registrationId: ee }, { timeoutMs: r }), ae = xp(F);
        (ae.ok === !1 || !Ji(ae.value, { viewToken: q, bindingId: M, registrationId: ee })) && console.error("[hana] App view-state cleanup reply did not confirm the released registration.");
      } catch (F) {
        console.error("[hana] failed to release a superseded App view-state registration:", F instanceof Error ? F.message : F);
      }
  }, ve = (q, M) => (q.releasePromise || (q.releasePromise = (async () => {
    const ee = M?.timeoutMs ?? r;
    T(q, "released"), h === q && (h = null);
    const j = u.getContext(), F = j?.viewState;
    if (!(B(q.viewToken) && j?.slot === "card" && !!F && F.bindingId === q.bindingId)) return { released: !1 };
    const I = await u.request(Zi.RELEASE, {
      viewToken: q.viewToken,
      bindingId: q.bindingId,
      registrationId: q.registrationId
    }, { timeoutMs: ee }), te = xp(I);
    if (te.ok === !1)
      throw Ce(Oe.BAD_RESPONSE, te.error);
    if (!Ji(te.value, {
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
        return Cb(I.initial);
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
        } catch (de) {
          throw o ? Ce(Oe.RELEASED, "The App view-state controller was released.") : ae.signal.aborted ? Ce(Oe.VIEW_STALE, "A newer view-state enable replaced this one before it was bound.") : S(de);
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
        const P = await ne(Zi.ENABLE, {
          viewToken: J,
          bindingId: D.bindingId
        }, M, null), $ = Oo(P);
        if ($.ok === !1)
          throw Ce(Oe.BAD_RESPONSE, $.error);
        if (!Ji($.value, { viewToken: J, bindingId: D.bindingId }))
          throw Ce(Oe.VIEW_STALE, "This view-state enable reply answered a different view than the one that was enabled.");
        if (te = { token: J, bindingId: D.bindingId, registrationId: $.value.registrationId }, o) throw Ce(Oe.RELEASED, "The App view-state controller was released.");
        if (F !== s || ae.signal.aborted || !m.has(F))
          throw Ce(Oe.VIEW_STALE, "This view-state enable was voided before its reply arrived.");
        if (!B(J))
          throw Ce(Oe.VIEW_STALE, "The document changed before this view-state enable reply arrived.");
        const oe = u.getContext();
        if (!oe || oe.slot !== "card" || oe.viewState?.bindingId !== D.bindingId || oe.viewState?.viewKind !== D.viewKind)
          throw Ce(Oe.VIEW_STALE, "The namespace changed before this view-state enable reply arrived.");
        if (oe.viewState?.available !== !0)
          throw Ce(Oe.UNAVAILABLE, "The App view-state namespace paused before this enable was confirmed.");
        const me = wo($.value.snapshot);
        if (me.ok === !1)
          throw Ce(Oe.BAD_RESPONSE, me.error);
        const fe = ue(D.viewKind, me.value), W = G(J, D.bindingId, D.viewKind, $.value.registrationId, fe);
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
function Rb(u) {
  if (typeof u != "object" || u === null)
    throw Ce(Oe.INVALID_INPUT, "View-state set requires an object with an expected revision and a state.");
  const r = u.expectedRevision;
  if (!Number.isSafeInteger(r) || r < 0)
    throw Ce(Oe.INVALID_INPUT, "View-state set requires a non-negative safe-integer expected revision.");
  return r;
}
var Wp = /* @__PURE__ */ new WeakMap();
function eg(u, r) {
  Wp.set(u, r);
}
function tg(u) {
  const r = Wp.get(u);
  return r ? r() : null;
}
function $l(u) {
  return typeof u == "object" && u !== null && !Array.isArray(u);
}
function nu(u) {
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
      const E = [];
      for (let S = 0; S < h.length; S++) {
        if (!Object.prototype.hasOwnProperty.call(h, S)) throw new Error("Input panel JSON must not contain sparse arrays.");
        E.push(o(h[S], m + 1));
      }
      b = E;
    } else {
      const E = /* @__PURE__ */ Object.create(null);
      for (const S of Object.keys(h)) E[S] = o(h[S], m + 1);
      b = E;
    }
    return r.delete(h), b;
  }, s = JSON.stringify(o(u, 0));
  if (new TextEncoder().encode(s).byteLength > Op)
    throw new Error(`Input panel JSON exceeds ${Op} bytes.`);
  return JSON.parse(s);
}
function ng(u) {
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
    data: nu(u.data ?? null),
    requestedSchema: nu(u.requestedSchema ?? null),
    presentation: { height: o.height, collapsedHeight: o.collapsedHeight, expanded: o.expanded }
  };
}
function Hr(u) {
  return { ...u, data: nu(u.data), requestedSchema: nu(u.requestedSchema), presentation: { ...u.presentation } };
}
function jb(u) {
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
function Db(u, r) {
  if (!$l(u) || !$l(u.presentation) || !Number.isSafeInteger(u.presentationRevision)) throw new Error("The input panel presentation response is invalid.");
  const o = ng({ ...r, presentation: u.presentation, presentationRevision: u.presentationRevision });
  return { presentation: o.presentation, presentationRevision: o.presentationRevision };
}
function Ub(u) {
  let r = null, o = 0, s = null, h = 0;
  const m = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Set(), b = () => {
    for (const N of v) N(r ? Hr(r) : null);
  }, E = () => {
    r = null, o++;
    for (const N of m.values())
      clearTimeout(N.timeout), N.reject(new Error("The input panel binding was replaced."));
    m.clear(), b();
  }, S = (N) => {
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
    if (N.kind === "event" && N.type === $i.CONTEXT) {
      if (N.payload === null) E();
      else {
        let he;
        try {
          he = ng(N.payload);
        } catch (ie) {
          return E(), console.warn("[hana] invalid input panel context:", ie), !0;
        }
        const K = r?.panelId === he.panelId && r.appId === he.appId && r.sessionId === he.sessionId && r.confirmId === he.confirmId && r.status === he.status && r.instanceId === he.instanceId && r.revision === he.revision;
        if (K && r && he.presentationRevision < r.presentationRevision) return !0;
        K || S("The input panel binding was replaced."), r = he, K || o++, b();
      }
      return !0;
    }
    if ((N.kind === "response" || N.kind === "error") && N.type === $i.PRESENTATION && N.id) {
      const he = m.get(N.id);
      if (!he) return !1;
      if (m.delete(N.id), clearTimeout(he.timeout), he.generation !== o)
        he.reject(new Error("The input panel binding was replaced."));
      else if (N.kind === "error") he.reject(new Error(N.error?.message || "The input panel presentation could not be updated."));
      else
        try {
          const K = Db(N.payload, r);
          r && K.presentationRevision >= r.presentationRevision && (r = { ...r, ...K }, b()), he.resolve(K);
        } catch (K) {
          he.reject(K instanceof Error ? K : new Error("The input panel presentation response is invalid."));
        }
      return !0;
    }
    if (N.kind !== "request" || N.type !== $i.SUBMIT) return !1;
    if (!N.id) return !0;
    const O = N.payload, V = r;
    if (!$l(O) || !V || V.status !== "pending" || !V.confirmId || O.panelId !== V.panelId || O.instanceId !== V.instanceId || O.revision !== V.revision)
      return T(N, "INPUT_PANEL_STALE", "This request does not match the active input panel question."), !0;
    const B = s;
    if (!B && V.requestedSchema !== null)
      return T(N, "INPUT_PANEL_SUBMIT_UNHANDLED", "Register hana.inputPanel.onSubmit to provide this question’s answer."), !0;
    const le = o, re = {
      panelId: V.panelId,
      instanceId: V.instanceId,
      revision: V.revision
    };
    return Promise.resolve().then(() => B ? B(Hr(V)) : null).then((he) => {
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
        payload: { ...re, value: nu(he) }
      });
    }).catch((he) => {
      T(N, "INPUT_PANEL_SUBMIT_FAILED", he instanceof Error ? he.message : "The input panel could not provide an answer.");
    }), !0;
  }
  return { api: {
    getContext: () => r ? Hr(r) : null,
    onContextChanged(N) {
      return v.add(N), N(r ? Hr(r) : null), () => {
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
      const O = r, V = jb(N);
      if (!O) throw new Error("The input panel is not ready.");
      const B = o, le = `input-panel-presentation:${O.panelId}:${O.instanceId}:${Date.now().toString(36)}:${++h}`;
      return new Promise((re, he) => {
        const K = setTimeout(() => {
          m.delete(le), he(new Error("The input panel presentation request timed out."));
        }, 1e4);
        m.set(le, { generation: B, resolve: re, reject: he, timeout: K });
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
            type: $i.PRESENTATION,
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
  }, handleMessage: p, clear: E };
}
var Ca = class extends Error {
  name = "HanaPluginError";
  code;
  details;
  constructor(u) {
    super(u.message), this.code = u.code, this.details = u.details;
  }
}, Rp = 0, uu = 60, zb = 240;
function Mb() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : (Rp += 1, `hana-plugin-${Date.now()}-${Rp}`);
}
function Hb() {
  if (typeof window > "u")
    throw new Error("@hana/plugin-sdk requires a browser iframe window.");
  return window;
}
var jp = "data-hana-theme-style";
async function qb(u, r) {
  const o = await fetch(r, { credentials: "same-origin" });
  if (!o.ok)
    throw new Error(`hana theme stylesheet request failed with ${o.status}`);
  const s = await o.text(), h = u.head ?? u.documentElement;
  if (!h) throw new Error("hana theme stylesheet has nowhere to attach");
  let m = u.querySelector(`style[${jp}]`);
  m || (m = u.createElement("style"), m.setAttribute(jp, "")), m.textContent = s, h.appendChild(m);
}
function Lb(u) {
  if (typeof u != "object" || u === null) return !1;
  const r = u;
  return ["light", "dark"].every((o) => {
    const s = r[o];
    return typeof s == "object" && s !== null && typeof s.theme == "string" && typeof s.cssUrl == "string";
  });
}
function Ib(u) {
  const r = new URLSearchParams(u.location.search), o = r.get("hana-theme-appearance"), s = r.get("hana-palette-light-theme"), h = r.get("hana-palette-light-css"), m = r.get("hana-palette-dark-theme"), v = r.get("hana-palette-dark-css");
  return {
    theme: r.get("hana-theme") ?? void 0,
    cssUrl: r.get("hana-css") ?? void 0,
    appearance: o === "light" || o === "dark" ? o : void 0,
    palettes: s && h && m && v ? { light: { theme: s, cssUrl: h }, dark: { theme: m, cssUrl: v } } : void 0
  };
}
function ag(u, r = uu) {
  return typeof u != "number" || !Number.isFinite(u) ? r : Math.max(0, Math.min(zb, Math.round(u)));
}
function lg({
  visible: u,
  maxFrameRate: r,
  slot: o,
  reason: s
}) {
  const h = u ? ag(r) : 0, m = u && h > 0;
  return {
    visible: u,
    active: m,
    maxFrameRate: m ? h : 0,
    motion: m ? "full" : "paused",
    ...o === "page" || o === "widget" || o === "card" || o === "settings" || o === "function-panel" || o === "slot" ? { slot: o } : {},
    ...s ? { reason: s } : {}
  };
}
function Bb(u) {
  const r = new URLSearchParams(u.location.search), o = r.get("hana-visible"), s = !(o === "0" || o === "false"), h = r.get("hana-max-fps"), m = h === null ? NaN : Number(h), v = Number.isFinite(m) ? m : uu;
  return lg({
    visible: s,
    maxFrameRate: v,
    reason: "initial"
  });
}
function Vb(u, r) {
  if (typeof u != "object" || u === null) return null;
  const o = u, s = typeof o.visible == "boolean" ? o.visible : r.visible, h = ag(
    o.maxFrameRate,
    r.maxFrameRate > 0 ? r.maxFrameRate : uu
  ), m = typeof o.active == "boolean" ? o.active && s && h > 0 : s && h > 0, v = o.motion, b = v === "full" || v === "reduced" || v === "paused" ? v : m ? "full" : "paused", E = typeof o.slot == "string" ? o.slot : r.slot, S = typeof o.reason == "string" ? o.reason : r.reason;
  return {
    visible: s,
    active: m,
    maxFrameRate: m ? h : 0,
    motion: m ? b : "paused",
    ...E === "page" || E === "widget" || E === "card" || E === "settings" || E === "function-panel" || E === "slot" ? { slot: E } : {},
    ...S ? { reason: S } : {}
  };
}
function Gb(u, r) {
  if (typeof u != "object" || u === null) return null;
  const o = u.visible;
  return typeof o != "boolean" ? null : lg({
    visible: o,
    maxFrameRate: o && r.maxFrameRate > 0 ? r.maxFrameRate : uu,
    slot: r.slot,
    reason: "legacy-visibility"
  });
}
function Yb(u, r) {
  return u.visible === r.visible && u.active === r.active && u.maxFrameRate === r.maxFrameRate && u.motion === r.motion && u.slot === r.slot && u.reason === r.reason;
}
function Co(u) {
  return {
    width: { ...u.width },
    height: { ...u.height }
  };
}
function Dp(u) {
  if (typeof u != "object" || u === null) return null;
  const r = u;
  return r.mode === "fixed" ? typeof r.value != "number" || !Number.isFinite(r.value) ? null : { mode: "fixed", value: Math.round(r.value) } : r.mode === "flexible" ? typeof r.max != "number" || !Number.isFinite(r.max) ? null : { mode: "flexible", max: Math.round(r.max) } : r.mode === "unbounded" ? { mode: "unbounded" } : null;
}
function Xb(u) {
  if (typeof u != "object" || u === null) return null;
  const r = u, o = Dp(r.width), s = Dp(r.height);
  return !o || !s ? null : { width: o, height: s };
}
function Up(u) {
  if (u === null) return null;
  if (typeof u == "string") return u;
}
function Qb(u) {
  if (typeof u != "object" || u === null || Array.isArray(u)) return;
  const r = u;
  if (tu(r.bindingId) && !(r.viewKind !== "compact" && r.viewKind !== "detached") && typeof r.available == "boolean")
    return { bindingId: r.bindingId, viewKind: r.viewKind, available: r.available };
}
function kb(u) {
  if (typeof u != "object" || u === null || Array.isArray(u)) return null;
  const r = u, o = typeof r.appId == "string" && r.appId.trim() ? r.appId.trim() : null, s = r.slot, h = r.cardInstanceId;
  if (!o || s !== "card" && s !== "function-panel" && s !== "settings" && s !== "slot" && s !== "input-panel") return null;
  const m = Up(r.embeddedSessionId), v = Up(r.originSessionId), b = Fp(r.instanceKey);
  if (b === null) return null;
  const E = Qb(r.viewState), S = typeof h == "string" && !!h.trim();
  if (b !== void 0 && !S) return null;
  const T = {};
  return m !== void 0 && (T.embeddedSessionId = m), v !== void 0 && (T.originSessionId = v), b !== void 0 && (T.instanceKey = b), E !== void 0 && (T.viewState = E), s === "settings" || s === "input-panel" ? h === null ? { appId: o, slot: s, cardInstanceId: null, ...T } : null : S ? { appId: o, slot: s, cardInstanceId: h.trim(), ...T } : s !== "card" || h !== null || typeof r.embeddedSessionId != "string" || !r.embeddedSessionId.trim() ? null : { appId: o, slot: s, cardInstanceId: null, ...T };
}
function xo(u) {
  return {
    ...u,
    ...u.viewState ? { viewState: { ...u.viewState } } : {}
  };
}
function zp(u) {
  if (typeof u != "object" || u === null || Array.isArray(u)) return null;
  const r = u, o = typeof r.sessionId == "string" && r.sessionId.trim() ? r.sessionId : null, s = typeof r.sessionPath == "string" && r.sessionPath ? r.sessionPath : null;
  return !o || !s || r.title !== null && typeof r.title != "string" || r.agentId !== null && typeof r.agentId != "string" ? null : {
    sessionId: o,
    sessionPath: s,
    title: r.title,
    agentId: r.agentId
  };
}
function Kb(u) {
  if (typeof u != "object" || u === null || Array.isArray(u)) return null;
  const r = u, o = r.previous === null ? null : zp(r.previous), s = r.current === null ? null : zp(r.current);
  return r.previous !== null && o === null || r.current !== null && s === null || typeof r.timestamp != "number" || !Number.isFinite(r.timestamp) ? null : { previous: o, current: s, timestamp: r.timestamp };
}
function Zb(u) {
  if (typeof u != "object" || u === null || Array.isArray(u)) return null;
  const r = u;
  return typeof r.code != "string" || !r.code.trim() || typeof r.message != "string" || !r.message.trim() ? null : new Ca({ code: r.code, message: r.message });
}
function Jb(u) {
  return typeof u == "string" ? { url: u } : u;
}
function $b(u) {
  return typeof u == "string" ? { text: u } : u;
}
function ig(u) {
  const r = Go(u.location.pathname || "");
  if (!r)
    throw new Error("App asset/API URL helper requires an App surface route under /api/apps/:appId/ui/ or a scoped service mount.");
  return r.appId;
}
function Fb(u, r) {
  if (!r || !["card", "function-panel", "settings", "slot"].includes(r.slot)) return !1;
  try {
    return ig(u) === r.appId;
  } catch {
    return !1;
  }
}
function Pb(u) {
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
function Wb(u) {
  return new URLSearchParams(u.location.search).get("hana-asset-base") || null;
}
function eE(u, r) {
  const o = Pb(r), s = Wb(u);
  if (!s)
    throw new Error(
      "hana.assets.url() requires the host-issued hana-asset-base query parameter: this page was not opened by the host with an asset base; hana.assets.url() only works inside a Hana app surface."
    );
  const h = new URL(s);
  return h.pathname = `${h.pathname.replace(/\/+$/, "")}/${o}`, h.toString();
}
function ug(u) {
  return new URLSearchParams(u.location.search).get(X0) || null;
}
function tE(u) {
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
  for (const E of m) {
    if (!E) throw new Error("Invalid plugin API path.");
    let S;
    try {
      S = decodeURIComponent(E);
    } catch {
      throw new Error("Invalid plugin API path.");
    }
    if (S === "." || S === ".." || S.includes("/") || S.includes("\\"))
      throw new Error("Invalid plugin API path.");
  }
  const v = new URL(`http://hana.local/${o}`);
  return `${m.map((E) => encodeURIComponent(decodeURIComponent(E))).join("/")}${v.search}`;
}
function rg(u, r, o = !1) {
  const s = ig(u);
  let h = tE(r);
  if (o && h.startsWith("_runtime/")) {
    const m = ug(u);
    if (!m) throw new Error("hana.api.url for a managed service requires appSurfaceSession in the iframe URL.");
    const v = /^(_runtime\/[^/?]+)\/(.+)$/.exec(h);
    if (!v || v[2].startsWith("_surface/")) throw new Error("Invalid managed service API path.");
    h = `${v[1]}/_surface/${encodeURIComponent(m)}/${v[2]}`;
  }
  return `${u.location.origin}/api/apps/${encodeURIComponent(s)}/routes/${h}`;
}
function nE(u, r, o, s) {
  const h = ug(u);
  if (!h)
    throw new Error("hana.api.fetch requires appSurfaceSession in the iframe URL.");
  const m = u.fetch?.bind(u) ?? globalThis.fetch?.bind(globalThis);
  if (!m)
    throw new Error("hana.api.fetch requires window.fetch.");
  const v = o ?? {}, b = new Headers(v.headers);
  return b.set(Y0, h), s && b.set("X-Hana-Document-Binding", s), m(rg(u, r), {
    ...v,
    headers: b
  });
}
function aE(u) {
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
function lE(u, r) {
  if (typeof r != "object" || r === null) return !1;
  const o = r;
  return u.kind === "global" ? o.kind === "global" : o.kind === "agent" && o.agentId === u.agentId;
}
function sg(u = {}) {
  const r = u.targetWindow ?? Hb(), o = u.parentWindow ?? r.parent, s = Bp(r, u.targetOrigin), h = u.requestTimeoutMs ?? 1e4, m = u.idFactory ?? Mb, v = Ub(J), b = fb({
    targetWindow: r,
    post: J,
    // A host that rebound its bridge to this same document gets a fresh
    // handshake by re-announcing the ready the page already sent.
    reannounceReady: () => {
      ge && P(ve);
    }
  }), E = pb({
    request: Ne,
    post: J,
    targetWindow: r,
    currentView: b,
    requestTimeoutMs: h
  }), S = u.followHostTheme !== !1;
  let T = Ib(r), p = Bb(r), L = null, N = null;
  const O = /* @__PURE__ */ new Set(), V = /* @__PURE__ */ new Set(), B = /* @__PURE__ */ new Set(), le = /* @__PURE__ */ new Set(), re = /* @__PURE__ */ new Set(), he = /* @__PURE__ */ new Set(), K = /* @__PURE__ */ new Set(), ie = /* @__PURE__ */ new Set(), ne = /* @__PURE__ */ new Set();
  let ue = null, be = null, se = null, ge = !1, ve, G = !1, pe = !1, De = !1, q = Promise.resolve();
  const M = /* @__PURE__ */ new Map();
  let ee = 1, j = null, F = null, ae = null, I = !1;
  function te(C) {
    if (!S || !C) return;
    const Z = r.document;
    Z && qb(Z, C).catch((Y) => {
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
      Vp(Y, o, s) && C(Y.data);
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
  function oe() {
    return ne.size > 0 && !De && !pe;
  }
  function me() {
    q = q.catch(() => {
    }).then(async () => {
      for (; G !== oe(); ) {
        if (oe()) {
          try {
            if (await W(), (await Ne(zr.SUBSCRIBE)).subscribed !== !0) {
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
          await W(), await Ne(zr.UNSUBSCRIBE);
        } catch (C) {
          $(C);
        }
        G = !1;
      }
    });
  }
  function fe(C) {
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
    return fe(C ?? h).then(() => {
      P(ve);
    });
  }
  function de(C) {
    const Z = r.requestAnimationFrame?.bind(r), Y = r.cancelAnimationFrame?.bind(r);
    if (Z && Y) {
      const Se = Z(C);
      return () => Y(Se);
    }
    const k = r.setTimeout(() => {
      const Se = r.performance?.now?.() ?? Date.now();
      C(Se);
    }, Math.max(1, Math.round(1e3 / Math.max(p.maxFrameRate, uu))));
    return () => r.clearTimeout(k);
  }
  function We() {
    j && (j(), j = null);
  }
  function rt() {
    j || M.size === 0 || !p.active || p.maxFrameRate <= 0 || (j = de((C) => {
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
    if (!Yb(p, C)) {
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
      const k = Gb(
        C.payload,
        p
      );
      k && Yt(k);
      return;
    }
    const Z = Fi(C);
    if (!Z.ok) return;
    const Y = Z.value;
    if (!b.handleHostMessage(Y) && !E.handleHostMessage(Y)) {
      if (v.handleMessage(Y)) {
        Y.type === $i.CONTEXT && Y.payload === null && ge && P(ve);
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
        const k = r.document, Se = k ? Zp(k, Y.payload, Fb(r, N)) : { ok: !1, code: "UI_ACTION_DOCUMENT_UNAVAILABLE", error: "No document is available." };
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
            palettes: Lb(k.palettes) ? k.palettes : Ve ? void 0 : T.palettes
          };
          for (const $e of O) $e({ ...T });
          te(T.cssUrl);
          return;
        }
        if (Y.type === Ql.SURFACE_ENVELOPE_CHANGED) {
          const k = Xb(Y.payload);
          if (!k) return;
          L = k;
          for (const Se of V) Se(Co(L));
          return;
        }
        if (Y.type === Ql.SURFACE_RUNTIME_CHANGED) {
          const k = Vb(Y.payload, p);
          k && Yt(k);
          return;
        }
        if (Y.type === nb.CONTEXT) {
          const k = Y.payload === null ? null : kb(Y.payload);
          if (Y.payload !== null && k === null) return;
          const Se = k?.appId !== N?.appId || k?.slot !== N?.slot || k?.cardInstanceId !== N?.cardInstanceId || k?.instanceKey !== N?.instanceKey || k?.embeddedSessionId !== N?.embeddedSessionId || k?.originSessionId !== N?.originSessionId || k?.viewState?.bindingId !== N?.viewState?.bindingId || k?.viewState?.viewKind !== N?.viewState?.viewKind || k?.viewState?.available !== N?.viewState?.available;
          if (b.applySurfaceContext(k === null ? null : { appId: k.appId, cardInstanceId: k.cardInstanceId, instanceKey: k.instanceKey ?? null }), N = k, Se)
            for (const Ve of le) Ve(N ? xo(N) : null);
          return;
        }
        if (Y.type === Cp.ACTIVE_CHANGED) {
          if (pe) return;
          const k = Kb(Y.payload);
          if (!k) return;
          for (const Se of ne) Se.callback(k);
          return;
        }
        if (Y.type === Cp.ERROR) {
          const k = Zb(Y.payload);
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
        if (Y.type === Q0.CHANGED) {
          if (typeof Y.payload != "object" || Y.payload === null) return;
          const k = Y.payload, Se = k.keys, Ve = Array.isArray(Se) ? Se.filter(($e) => typeof $e == "string") : [];
          for (const $e of he)
            lE($e.scope, k.scope) && $e.callback(Ve.slice());
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
    v.clear(), De = !0, me(), C?.persisted === !1 && (I = !0, b.dispose(), ae?.dispose(), E.dispose());
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
        const Pl = Fi(ja);
        if (!Pl.ok) return;
        const gn = Pl.value;
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
        return he.add(Y), () => {
          he.delete(Y);
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
        return eE(r, C);
      }
    },
    api: {
      url(C) {
        return rg(r, C, !0);
      },
      fetch(C, Z) {
        return nE(r, C, Z, ue);
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
        return L ? Co(L) : null;
      },
      subscribe(C) {
        return V.add(C), C(L ? Co(L) : null), () => {
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
          const k = Fp(Z.instanceKey);
          if (k === null)
            return Promise.reject(new TypeError("hana.cards.open instanceKey must be a non-empty string of at most 256 code units without NUL."));
          Y = k;
        }
        return Ne($p.OPEN, {
          cardId: C.trim(),
          ...Y === void 0 ? {} : { instanceKey: Y }
        });
      }
    },
    surface: {
      getContext() {
        return N ? xo(N) : null;
      },
      onContextChanged(C) {
        return le.add(C), C(N ? xo(N) : null), () => {
          le.delete(C);
        };
      },
      setInteractiveRegions(C, Z) {
        const Y = k0({ regions: C });
        return Y.ok === !1 ? Promise.reject(new TypeError(Y.error)) : ge ? fe(Z?.timeoutMs ?? h).then(() => (P(ve), Ne(Mo.SET_INTERACTIVE_REGIONS, Y.value, Z))) : Ne(Mo.SET_INTERACTIVE_REGIONS, Y.value, Z);
      }
    },
    sessions: {
      getActive(C) {
        return W(C?.timeoutMs).then(() => Ne(zr.GET_ACTIVE, void 0, C));
      },
      focus(C, Z) {
        return !C || typeof C.sessionId != "string" || !C.sessionId.trim() ? Promise.reject(new TypeError("hana.sessions.focus requires a non-empty sessionId.")) : W(Z?.timeoutMs).then(() => Ne(
          zr.FOCUS,
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
    chrome: E.api,
    toast: {
      show(C, Z) {
        return Ne(Ie.TOAST_SHOW, C, Z);
      }
    },
    external: {
      open(C, Z) {
        return Ne(Ie.EXTERNAL_OPEN, Jb(C), Z);
      }
    },
    clipboard: {
      writeText(C, Z) {
        return Ne(
          Ie.CLIPBOARD_WRITE_TEXT,
          $b(C),
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
        userGesture: aE(r)
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
  return eg(Xt, () => I ? null : (ae ??= xb({
    request: Ne,
    currentView: b,
    getContext: () => N,
    subscribeContext: (C) => (le.add(C), () => {
      le.delete(C);
    }),
    requestTimeoutMs: h
  }), ae.api)), Xt;
}
var Mp = null;
function Te() {
  return Mp ??= sg(), Mp;
}
var cg = {
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
eg(cg, () => tg(Te()));
function Vr(u) {
  return u.hanaAppWindow;
}
function mn(u) {
  const r = Vr(u);
  if (!r) throw Object.assign(new Error("This App surface is not an App-owned native window."), { code: "APP_WINDOW_UNAVAILABLE" });
  return r;
}
function iE(u) {
  return (typeof window < "u" ? Vr(u()) : void 0)?.onDocumentAction?.((o) => {
    const s = Zp(u().document, o, !0);
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
var uE = /* @__PURE__ */ new Set([
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
  ...Object.values($p),
  Mo.SET_INTERACTIVE_REGIONS,
  "hana.document.get-context",
  "hana.document.read",
  "hana.document.report-status",
  "hana.document.open",
  "hana.document.rebind",
  "hana.document.open-drop"
]);
function og() {
  if (typeof window > "u") throw new Error("@hana/app-sdk/ui requires a browser App iframe.");
  return window;
}
function rE(u) {
  if (!Go(u.location?.pathname ?? ""))
    throw new Error("@hana/app-sdk/ui requires an App surface route under /api/apps/:appId/ui/ or a scoped service mount.");
}
function sE(u) {
  if (!uE.has(u))
    throw new Error(`@hana/app-sdk/ui does not expose host request type: ${u}`);
}
function cE(u) {
  return {
    get global() {
      return u().storage.global;
    },
    agent(r) {
      return u().storage.agent(r);
    }
  };
}
function oE(u, r = og, o = {}) {
  return {
    window: iE(r),
    surfaces: {
      onEvent(s, h) {
        if (typeof s != "string" || !s.trim() || s.length > 256 || typeof h != "function")
          throw new TypeError("surfaces.onEvent requires a surface id and a listener.");
        return mn(r()).onMessage((m) => {
          const v = Fi(m);
          if (!v.ok || v.value.kind !== "event" || v.value.type !== "hana.app-surface.event") return;
          const b = v.value.payload;
          if (!b || typeof b != "object" || Array.isArray(b)) return;
          const E = b;
          E.surfaceId !== s || typeof E.type != "string" || !E.type.trim() || h({ surfaceId: s, type: E.type, ...E.payload === void 0 ? {} : { payload: E.payload } });
        });
      }
    },
    appEvents: {
      on(s, h) {
        if (typeof s != "string" || !s.trim() || s.length > 128 || typeof h != "function") throw new TypeError("appEvents.on requires an event name and a listener.");
        const m = r(), v = Go(m.location?.pathname ?? "");
        if (!v)
          throw new Error("@hana/app-sdk/ui requires an App surface route under /api/apps/:appId/ui/ or a scoped service mount.");
        const b = v.appId, E = (N) => {
          const O = Fi(N);
          if (!O.ok || O.value.kind !== "event" || O.value.type !== "hana.app.event") return;
          const V = O.value.payload;
          V?.source !== `app:${b}` || V.type !== s || !V.payload || typeof V.payload != "object" || Array.isArray(V.payload) || h(V.payload);
        }, S = o.messageTransport ?? Vr(m);
        if (S) return S.onMessage(E);
        const T = o.parentWindow ?? m.parent, p = Bp(m, o.targetOrigin), L = (N) => {
          Vp(N, T, p) && E(N.data);
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
          const m = Fi(h);
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
        return sE(s), u().host.request(s, h, m);
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
    storage: cE(u),
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
        const h = tg(u());
        return h ? h.enable(s) : Promise.reject(Object.assign(new Error("App view-state recovery is unavailable on this surface."), { code: "VIEW_STATE_UNAVAILABLE" }));
      }
    }
  };
}
var fE, mt = oE(() => {
  const u = og();
  rE(u);
  const r = Vr(u);
  return r ? fE ??= sg({ targetWindow: u, messageTransport: r }) : cg;
});
function Hn(...u) {
  return u.filter(Boolean).join(" ");
}
const Hp = {
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
}, dE = {
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
function hE({ mode: u = "inherit", theme: r, className: o, style: s, children: h, "data-testid": m = "hana-plugin-theme", ...v }) {
  const b = typeof r == "string" ? r : void 0, E = mE(u, r);
  return d.jsx("div", { ...v, "data-testid": m, className: Hn("hana-plugin-theme", o), "data-hana-theme-mode": u, "data-hana-theme": u === "hana" ? b : void 0, style: { ...E, ...s }, children: h });
}
function mE(u, r) {
  if (u === "inherit")
    return {};
  const o = pE(u, r), s = {};
  for (const [h, m] of Object.entries(dE)) {
    const v = o?.[h];
    v && (s[m] = v);
  }
  return s;
}
function pE(u, r) {
  if (typeof r == "string")
    return Hp[r];
  if (r)
    return r;
  if (u === "hana")
    return Hp["warm-paper"];
}
const _e = H.forwardRef(function({ variant: r = "secondary", size: o = "md", loading: s = !1, iconLeft: h, iconRight: m, disabled: v, className: b, children: E, type: S = "button", ...T }, p) {
  return d.jsxs("button", { ...T, ref: p, type: S, disabled: v || s, className: Hn("hana-plugin-button", `hana-plugin-button-${r}`, `hana-plugin-button-${o}`, s && "hana-plugin-button-loading", b), children: [s ? d.jsx("span", { className: "hana-plugin-spinner", "aria-hidden": !0 }) : h, E && d.jsx("span", { className: "hana-plugin-button-label", children: E }), !s && m] });
});
H.forwardRef(function({ label: r, size: o = "md", variant: s = "ghost", className: h, children: m, type: v = "button", ...b }, E) {
  return d.jsx("button", { ...b, ref: E, type: v, "aria-label": r, title: b.title || r, className: Hn("hana-plugin-icon-button", `hana-plugin-icon-button-${o}`, `hana-plugin-icon-button-${s}`, h), children: m });
});
const St = H.forwardRef(function({ label: r, hint: o, error: s, id: h, className: m, inputClassName: v, ...b }, E) {
  const S = H.useId(), T = h || S;
  return d.jsx(fg, { label: r, hint: o, error: s, htmlFor: T, className: m, children: d.jsx("input", { ...b, ref: E, id: T, "aria-invalid": !!s, className: Hn("hana-plugin-input", v) }) });
});
H.forwardRef(function({ label: r, hint: o, error: s, id: h, className: m, textareaClassName: v, rows: b = 4, ...E }, S) {
  const T = H.useId(), p = h || T;
  return d.jsx(fg, { label: r, hint: o, error: s, htmlFor: p, className: m, children: d.jsx("textarea", { ...E, ref: S, id: p, rows: b, "aria-invalid": !!s, className: Hn("hana-plugin-textarea", v) }) });
});
H.forwardRef(function({ checked: r, onChange: o, label: s, disabled: h, className: m, onClick: v, type: b = "button", ...E }, S) {
  const T = typeof s == "string" ? s : E["aria-label"];
  return d.jsxs("span", { className: Hn("hana-plugin-switch-wrap", m), children: [d.jsx("button", { ...E, ref: S, type: b, role: "switch", "aria-checked": r, "aria-label": T, disabled: h, className: Hn("hana-plugin-switch", r && "hana-plugin-switch-on"), onClick: (p) => {
    v?.(p), !p.defaultPrevented && !h && o?.(!r);
  }, children: d.jsx("span", { className: "hana-plugin-switch-thumb", "aria-hidden": !0 }) }), s && d.jsx("span", { className: "hana-plugin-switch-label", children: s })] });
});
function fg({ label: u, hint: r, error: o, htmlFor: s, className: h, children: m }) {
  return d.jsxs("div", { className: Hn("hana-plugin-field", h), children: [u && d.jsx("label", { className: "hana-plugin-field-label", htmlFor: s, children: u }), r && d.jsx("div", { className: "hana-plugin-field-hint", children: r }), m, o && d.jsx("div", { className: "hana-plugin-field-error", children: o })] });
}
function Mn({ title: u, description: r, actions: o, footer: s, children: h, className: m, ...v }) {
  return d.jsxs("section", { ...v, className: Hn("hana-plugin-card", m), children: [(u || r || o) && d.jsxs("header", { className: "hana-plugin-card-header", children: [d.jsxs("div", { className: "hana-plugin-card-heading", children: [u && d.jsx("h2", { className: "hana-plugin-card-title", children: u }), r && d.jsx("p", { className: "hana-plugin-card-description", children: r })] }), o && d.jsx("div", { className: "hana-plugin-card-actions", children: o })] }), d.jsx("div", { className: "hana-plugin-card-body", children: h }), s && d.jsx("footer", { className: "hana-plugin-card-footer", children: s })] });
}
function tl({ icon: u, title: r, description: o, action: s, className: h, ...m }) {
  return d.jsxs("div", { ...m, className: Hn("hana-plugin-empty", h), children: [u && d.jsx("div", { className: "hana-plugin-empty-icon", children: u }), d.jsx("div", { className: "hana-plugin-empty-title", children: r }), o && d.jsx("div", { className: "hana-plugin-empty-description", children: o }), s && d.jsx("div", { className: "hana-plugin-empty-action", children: s })] });
}
const dg = (u) => u.replace(/^\/+/, "");
async function hg(u) {
  const r = await u.text();
  try {
    return JSON.parse(r);
  } catch {
    return { ok: !1, stage: "http", message: `HTTP ${u.status}：${(r || "无响应体").slice(0, 200)}` };
  }
}
async function Be(u) {
  const r = await mt.api.fetch(dg(u));
  return hg(r);
}
async function Pe(u, r) {
  const o = await mt.api.fetch(dg(u), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(r)
  });
  return hg(o);
}
async function qp(u, r, o = 3e4) {
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
async function Wi(u, r = {}) {
  const o = r.timeoutMs ?? 48e4, s = Date.now();
  for (; Date.now() - s < o; ) {
    await new Promise((m) => setTimeout(m, 5e3));
    const h = await Be(u).catch(() => null);
    if (h && h.running === !1 && (!r.kind || h.kind === r.kind) && h.lastResult) return h.lastResult;
  }
  return { ok: !1, stage: "timeout", message: `等待超时（${Math.round(o / 6e4)} 分钟），任务可能仍在运行；稍后刷新查看结果。` };
}
async function qo(u = 480 * 1e3) {
  return Wi("/api/import/status", { timeoutMs: u });
}
let Ro = null;
async function Lr(u = !1) {
  if (Ro && !u) return Ro;
  const r = await Be("/api/pdf/engine").catch(() => ({ ok: !1, error: "探测请求失败" }));
  return Ro = r, r;
}
function mg(u, r) {
  const o = /^#\s+(.+?)（([^（）]+),\s*(\d{4}[^)）]*)）$/.exec(String(u || "").trim());
  return { title: o ? o[1] : r, meta: o ? `${o[2].trim()} · ${o[3]}` : "" };
}
function Jl({ id: u, value: r, onChange: o, options: s, placeholder: h, allowCustom: m = !1 }) {
  const [v, b] = H.useState(r), [E, S] = H.useState(!1), [T, p] = H.useState(0), [L, N] = H.useState(null), O = H.useRef(null), V = H.useRef(null);
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
  }, []), he = H.useCallback(() => {
    re(), S(!0), p(0);
  }, [re]);
  H.useEffect(() => {
    if (!E) return;
    const ie = (ue) => {
      const be = ue.target;
      O.current?.contains(be) || V.current?.contains(be) || S(!1);
    }, ne = () => re();
    return document.addEventListener("pointerdown", ie, !0), window.addEventListener("scroll", ne, !0), window.addEventListener("resize", ne), () => {
      document.removeEventListener("pointerdown", ie, !0), window.removeEventListener("scroll", ne, !0), window.removeEventListener("resize", ne);
    };
  }, [E, re]);
  const K = (ie) => {
    b(ie), o(ie), S(!1);
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
        onFocus: he,
        onClick: he,
        onChange: (ie) => {
          const ne = ie.currentTarget.value;
          b(ne), (m || s.some((ue) => ue.value === ne)) && o(ne), re(), S(!0), p(0);
        },
        onBlur: () => {
          window.setTimeout(() => {
            V.current?.contains(document.activeElement) || (S(!1), m || b(r));
          }, 120);
        },
        onKeyDown: (ie) => {
          ie.stopPropagation(), ie.key === "ArrowDown" ? (ie.preventDefault(), E ? p((ne) => Math.min(ne + 1, le.length - 1)) : he()) : ie.key === "ArrowUp" ? (ie.preventDefault(), p((ne) => Math.max(ne - 1, 0))) : ie.key === "Enter" ? E && le[T] && (ie.preventDefault(), K(le[T].value)) : ie.key === "Escape" && S(!1);
        }
      }
    ),
    E && L && T0.createPortal(
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
async function pg(u) {
  const r = await Be(nn(`篇目/${u}`)).catch(() => null);
  return r && r.ok ? String(r.content || "").split(/\r?\n/, 1)[0] : "";
}
const nn = (u) => `/api/file?path=${encodeURIComponent(u)}`, gE = [
  { id: "home", label: "首页" },
  { id: "use", label: "取用" },
  { id: "library", label: "结构库" },
  { id: "todo", label: "待办" },
  { id: "settings", label: "设置" }
], vE = {
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
function yE(u) {
  return u.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Oa(u) {
  return yE(u).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
}
function bE(u) {
  const r = String(u || "").split(/\r?\n/), o = [];
  let s = 0, h = !1;
  const m = () => {
    h && (o.push("</ul>"), h = !1);
  };
  for (; s < r.length; ) {
    const v = r[s];
    if (/^\|.*\|/.test(v) && s + 1 < r.length && /^\|\s*-+/.test(r[s + 1])) {
      m();
      const b = v.split("|").slice(1, -1).map((S) => S.trim());
      s += 2;
      const E = [];
      for (; s < r.length && /^\|/.test(r[s]); )
        E.push(r[s].split("|").slice(1, -1).map((S) => S.trim())), s++;
      o.push("<table><thead><tr>" + b.map((S) => `<th>${Oa(S)}</th>`).join("") + "</tr></thead><tbody>");
      for (const S of E) o.push("<tr>" + S.map((T) => `<td>${Oa(T)}</td>`).join("") + "</tr>");
      o.push("</tbody></table>");
      continue;
    }
    /^###\s/.test(v) ? (m(), o.push(`<h3>${Oa(v.slice(4))}</h3>`)) : /^##\s/.test(v) ? (m(), o.push(`<h2>${Oa(v.slice(3))}</h2>`)) : /^#\s/.test(v) ? (m(), o.push(`<h1>${Oa(v.slice(2))}</h1>`)) : /^>\s?/.test(v) ? (m(), o.push(`<blockquote>${Oa(v.replace(/^>\s?/, ""))}</blockquote>`)) : /^-\s/.test(v) || /^\*\s/.test(v) ? (h || (o.push("<ul>"), h = !0), o.push(`<li>${Oa(v.slice(2))}</li>`)) : /^---+\s*$/.test(v) ? (m(), o.push("<hr>")) : v.trim() === "" ? m() : (m(), o.push(`<p>${Oa(v)}</p>`)), s++;
  }
  return m(), o.join(`
`);
}
function au({ md: u }) {
  return /* @__PURE__ */ d.jsx("div", { className: "doc", dangerouslySetInnerHTML: { __html: bE(u) } });
}
async function xa(u) {
  const r = await Be(`/api/list?dir=${encodeURIComponent(u)}`);
  return r.ok ? (r.items || []).filter((o) => !o.isDirectory && o.name.endsWith(".md") && o.name !== "_模板.md").map((o) => o.name) : [];
}
function Yo(u) {
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
async function EE() {
  const [u, r, o, s] = await Promise.all([
    xa("篇目"),
    xa("写作模型"),
    Be(nn("标签库.md")),
    Be("/api/import/failures").catch(() => ({ ok: !1, items: [] }))
  ]), h = o.ok ? Yo(o.content) : [];
  return {
    papers: u.length,
    models: r.length,
    queuePending: h.filter((m) => !m.decision).length,
    failures: (s.items || []).length
  };
}
function SE() {
  const u = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), [r, o] = H.useState({ id: "", title: "", authors: "", year: "", venue: "", textType: "", score: "9", rationale: "", date: u, recordedBy: "" }), [s, h] = H.useState(null), [m, v] = H.useState([]), b = (S, T) => o((p) => ({ ...p, [S]: T }));
  H.useEffect(() => {
    let S = !0;
    return (async () => {
      const T = await Be("/api/list?dir=篇目").catch(() => null);
      if (!T?.ok) return;
      const p = (T.items || []).map((N) => N.name).filter((N) => N.endsWith(".md") && !N.startsWith("_")), L = await Promise.all(p.map(async (N) => {
        const O = await Be(nn(`篇目/${N}`)).catch(() => null), V = O?.ok ? String(O.content || "").split(/\r?\n/, 1)[0] : "", B = /^#\s+(.+?)（([^（）]+),\s*(\d{4})[^)）]*）$/.exec(String(V || "").trim()), le = N.replace(/\.md$/, "");
        return { id: le, title: B ? B[1] : le, label: B ? `${B[1]}（${B[2].trim()} · ${B[3]}）` : le, authors: B ? B[2].trim() : "", year: B ? B[3] : "" };
      }));
      S && v(L);
    })(), () => {
      S = !1;
    };
  }, []);
  async function E() {
    const S = {
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
    }, T = await Pe("/api/tool/commit_anchor", { anchor: S });
    h(T), T.ok && mt.toast.show({ message: "评分已落盘", type: "success" });
  }
  return /* @__PURE__ */ d.jsxs("div", { className: "form", children: [
    /* @__PURE__ */ d.jsx("p", { className: "hint", children: "你自己的总分和理由是整条评分链的起点：只增不改，理由至少 10 字，后续归纳评分指引全靠它。不录也不阻断——只是模型分数永远无锚点参照。" }),
    /* @__PURE__ */ d.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ d.jsx(
        Jl,
        {
          id: "cb-score-entry",
          value: "",
          placeholder: m.length ? `输入过滤或选择篇目（${m.length} 篇，选中即预填）` : "读取篇目中…",
          onChange: (S) => {
            const T = m.find((p) => p.id === S);
            T && o((p) => ({ ...p, id: T.id, title: T.title, authors: T.authors, year: T.year }));
          },
          options: m.map((S) => ({ value: S.id, label: S.label }))
        }
      ),
      /* @__PURE__ */ d.jsx("span", { className: "hint", children: "也可不选直接手填（锚点可以是尚未拆解的文献）。" })
    ] }),
    /* @__PURE__ */ d.jsxs("div", { className: "grid2", children: [
      /* @__PURE__ */ d.jsx(St, { label: "篇目 id（slug-年）", value: r.id, onChange: (S) => b("id", S.currentTarget.value), placeholder: "sample-2020" }),
      /* @__PURE__ */ d.jsx(St, { label: "文本类型（你判）", value: r.textType, onChange: (S) => b("textType", S.currentTarget.value), placeholder: "论证型 / 阐释型…" }),
      /* @__PURE__ */ d.jsx(St, { label: "标题", value: r.title, onChange: (S) => b("title", S.currentTarget.value) }),
      /* @__PURE__ */ d.jsx(St, { label: "作者", value: r.authors, onChange: (S) => b("authors", S.currentTarget.value) }),
      /* @__PURE__ */ d.jsx(St, { label: "年份", value: r.year, onChange: (S) => b("year", S.currentTarget.value) }),
      /* @__PURE__ */ d.jsx(St, { label: "出处（可空）", value: r.venue, onChange: (S) => b("venue", S.currentTarget.value) }),
      /* @__PURE__ */ d.jsx(St, { label: "总分 1-10", value: r.score, onChange: (S) => b("score", S.currentTarget.value) }),
      /* @__PURE__ */ d.jsx(St, { label: "日期", value: r.date, onChange: (S) => b("date", S.currentTarget.value) })
    ] }),
    /* @__PURE__ */ d.jsx(St, { label: "理由（≥10 字）", value: r.rationale, onChange: (S) => b("rationale", S.currentTarget.value) }),
    /* @__PURE__ */ d.jsx(St, { label: "录入者", value: r.recordedBy, onChange: (S) => b("recordedBy", S.currentTarget.value) }),
    /* @__PURE__ */ d.jsx(_e, { variant: "primary", onClick: E, children: "提交评分" }),
    s && /* @__PURE__ */ d.jsx("pre", { className: s.ok ? "ok" : "err", children: s.ok ? `已写入：${s.file || "(dry run)"}` : JSON.stringify(s, null, 2) })
  ] });
}
const TE = (u) => {
  if (u.evidence.startsWith("语义相近")) return 3;
  const r = /共现\s*(\d+)\s*篇/.exec(u.evidence);
  return r && Number(r[1]) >= 3 ? 2 : 1;
};
function AE(u) {
  const r = /* @__PURE__ */ new Map(), o = (b) => {
    let E = b;
    for (; (r.get(E) || E) !== E; ) E = r.get(E) || E;
    return E;
  }, s = (b) => b.split(" vs ").filter(Boolean);
  for (const b of u) for (const E of s(b.pair)) r.has(E) || r.set(E, E);
  for (const b of u) {
    if (TE(b) < 2) continue;
    const [E, S] = s(b.pair);
    if (E && S) {
      const T = o(E), p = o(S);
      T !== p && r.set(T, p);
    }
  }
  const h = /* @__PURE__ */ new Map(), m = [];
  for (const b of u) {
    const [E, S] = s(b.pair);
    if (E && S && o(E) === o(S)) {
      const T = o(E);
      let p = h.get(T);
      p || (p = { rows: [], labels: [] }, h.set(T, p)), p.rows.push(b);
    } else
      m.push(b);
  }
  for (const b of h.values()) {
    const E = /* @__PURE__ */ new Set();
    for (const S of b.rows) for (const T of s(S.pair)) E.add(T);
    b.labels = [...E];
  }
  return { clusters: [...h.values()].sort((b, E) => {
    const S = b.rows.map((p) => p.date).sort()[0] || "", T = E.rows.map((p) => p.date).sort()[0] || "";
    return S !== T ? S < T ? -1 : 1 : E.rows.length - b.rows.length;
  }), weak: m };
}
const jo = (u) => u.labels.slice().sort().join("|");
function NE({ tick: u, onChanged: r }) {
  const [o, s] = H.useState([]), [h, m] = H.useState({}), [v, b] = H.useState(""), [E, S] = H.useState(!1), [T, p] = H.useState(""), [L, N] = H.useState(!1), [O, V] = H.useState({}), [B, le] = H.useState(null), [re, he] = H.useState(!1), [K, ie] = H.useState("");
  H.useEffect(() => {
    let j = !1;
    return (async () => {
      const F = await Be("/api/model/status").catch(() => null);
      if (j || !F || !F.running || F.kind !== "propose") return;
      S(!0), b("AI 语义查重进行中（接管切页前的任务）…");
      const ae = await Wi("/api/model/status", { kind: "propose", timeoutMs: 180 * 1e3 });
      j || (b(ae.ok ? `已入队 ${ae.queued?.length || 0} 对` : ae.message || "未产出建议"), ae.ok && await ne(), S(!1));
    })(), () => {
      j = !0;
    };
  }, []);
  const ne = H.useCallback(async () => {
    const j = await Be(nn("标签库.md"));
    s(j.ok ? Yo(j.content) : []);
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
    const ae = jo(F);
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
      const te = await Wi("/api/model/status", { kind: "partition", timeoutMs: 180 * 1e3 });
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
    const ae = jo(F), I = O[ae] || { groups: [], pool: F.labels.slice(), sel: [] };
    if (I.pool.length > 0) {
      b(`还有 ${I.pool.length} 个标签未分组（可「全部各自成组」）`);
      return;
    }
    if (!I.groups.length) {
      b("先分组再提交");
      return;
    }
    const te = I.groups.flatMap((W) => W.members), J = F.labels.filter((W) => !te.includes(W)), g = te.filter((W, de) => te.indexOf(W) !== de);
    if (J.length || g.length) {
      b(`分组与标签清单不符 — 缺：${J.join("、") || "无"}；重复：${g.join("、") || "无"}`);
      return;
    }
    for (const W of I.groups) {
      const de = String(W.target ?? "");
      if (W.members.length > 0 && !de.trim()) {
        b("有组的存活名为空——补填，或把该组成员移回池");
        return;
      }
      if (de.includes(" vs ")) {
        b("存活名不能包含「 vs 」（会破坏对的解析）");
        return;
      }
    }
    he(!0), b("");
    const D = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), P = /* @__PURE__ */ new Map();
    I.groups.forEach((W, de) => W.members.forEach((We) => P.set(We, de)));
    let $ = 0, oe = 0, me = 0, fe = "";
    try {
      for (const W of I.groups) {
        if (W.members.length < 2) continue;
        const de = String(W.target);
        for (const We of W.members) {
          if (We === de) continue;
          ie(`正在合并：「${We}」→「${de}」…`);
          const rt = await qp("/api/tool/apply_tag_merge", {
            mergedLabel: We,
            target: de,
            date: D,
            evidence: `相关组分区提交：组内「${We}」并入「${de}」`
          });
          if (!rt.ok) {
            fe = `合并「${We}→${de}」失败：${rt.message || JSON.stringify(rt)}`;
            break;
          }
          $++;
        }
        if (fe) break;
      }
      if (!fe)
        for (const W of F.rows) {
          const [de, We] = W.pair.split(" vs ");
          if (P.get(de) === P.get(We)) continue;
          ie(`正在判定独立：${W.pair}…`);
          const rt = await qp("/api/tool/apply_pair_independent", {
            pair: W.pair,
            date: D,
            reason: "相关组分区提交：分属不同组"
          });
          if (rt.ok) {
            oe++;
            continue;
          }
          const Yt = String(rt.message || "");
          if (Yt.includes("已有裁决") || Yt.includes("无此对")) {
            me++;
            continue;
          }
          fe = `判定独立「${W.pair}」失败：${Yt || JSON.stringify(rt)}`;
          break;
        }
    } catch (W) {
      fe = `提交中断（网络/桥接异常）：${String(W?.message || W)}`;
    }
    b(fe ? `${fe}（此前已完成：${$} 合并、${oe} 独立；直接再点提交即可续跑——已并入的标签重试幂等，不会重复执行）` : `已提交本组裁决：${$} 合并、${oe} 独立${me ? `、${me} 对已随合并关闭` : ""}`);
    try {
      await ne();
    } catch {
    }
    r?.(), fe || V((W) => ({ ...W, [ae]: { groups: [], pool: F.labels.slice(), sel: [] } })), ie(""), he(!1);
  }
  async function G() {
    S(!0), b(""), p("co");
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
        const I = await Wi("/api/model/status", { kind: "propose", timeoutMs: 18e4 });
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
    p(""), S(!1), r?.();
  }
  const pe = o.filter((j) => !j.decision), De = o.filter((j) => !!j.decision), { clusters: q, weak: M } = H.useMemo(() => AE(pe), [o]), ee = (j) => /* @__PURE__ */ d.jsx(Mn, { title: j.pair, description: `${j.date} 进队 · ${j.evidence}`, children: j.decision ? /* @__PURE__ */ d.jsxs("p", { className: "decided", children: [
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
      /* @__PURE__ */ d.jsx(_e, { variant: "primary", disabled: E, onClick: () => {
        G();
      }, children: T === "co" ? "共现扫描中…" : T === "semantic" ? "语义查重中…" : "一键查重" }),
      /* @__PURE__ */ d.jsx("span", { className: "hint", children: "一键查重：先扫共现（秒出），再跑 AI 语义（约半分钟，标签集未变自动跳过）；结果都进下方待裁决，每对来源写在证据里。" })
    ] }),
    o.length === 0 && /* @__PURE__ */ d.jsx(tl, { title: "暂无待裁决标签", description: "篇目积累出相近标签后，候选会自动出现在这里。" }),
    q.map((j, F) => {
      const ae = jo(j), I = O[ae] || { groups: [], pool: j.labels.slice(), sel: [] }, te = /* @__PURE__ */ new Map();
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
          /* @__PURE__ */ d.jsx(_e, { disabled: B !== null || E, onClick: () => {
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
                  const oe = $.currentTarget.value;
                  se(ae, j.labels, (me) => ({ ...me, groups: me.groups.map((fe, W) => W === P ? { ...fe, target: oe } : fe) }));
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
              onClick: () => se(ae, j.labels, (oe) => ({ ...oe, sel: oe.sel.includes($) ? oe.sel.filter((me) => me !== $) : [...oe.sel, $] })),
              children: [
                $,
                /* @__PURE__ */ d.jsx(
                  "button",
                  {
                    className: "chip-star",
                    title: "设为本组存活名",
                    onClick: (oe) => {
                      oe.stopPropagation(), se(ae, j.labels, (me) => ({ ...me, groups: me.groups.map((fe, W) => W === P ? { ...fe, target: $ } : fe) }));
                    },
                    children: D.target === $ ? "★" : "☆"
                  }
                ),
                /* @__PURE__ */ d.jsx(
                  "button",
                  {
                    className: "chip-x",
                    onClick: (oe) => {
                      oe.stopPropagation(), se(ae, j.labels, (me) => ({
                        ...me,
                        groups: me.groups.map((fe, W) => {
                          if (W !== P) return fe;
                          const de = fe.members.filter((We) => We !== $);
                          return { ...fe, members: de, target: fe.target === $ ? de[0] || "" : fe.target };
                        }).filter((fe) => fe.members.length > 0),
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
            const oe = $.sel.filter((fe) => j.labels.includes(fe));
            if (!oe.length) return $;
            const me = $.groups.map((fe, W) => {
              const de = fe.members.filter((rt) => !oe.includes(rt));
              if (W === P) return { ...fe, members: [...de, ...oe.filter((rt) => !de.includes(rt))], target: fe.target || (de[0] ?? oe[0]) };
              const We = fe.target && oe.includes(fe.target) ? de[0] || "" : fe.target;
              return { ...fe, members: de, target: We };
            }).filter((fe) => fe.members.length > 0);
            return { ...$, groups: me, pool: $.pool.filter((fe) => !oe.includes(fe)), sel: [] };
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
            const P = D.sel.filter((oe) => j.labels.includes(oe));
            if (!P.length) return D;
            const $ = D.groups.map((oe) => {
              const me = oe.members.filter((W) => !P.includes(W)), fe = oe.target && P.includes(oe.target) ? me[0] || "" : oe.target;
              return { ...oe, members: me, target: fe };
            }).filter((oe) => oe.members.length > 0);
            return { ...D, groups: [...$, { target: P[0], members: P }], pool: D.pool.filter((oe) => !P.includes(oe)), sel: [] };
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
function _E({ tick: u, onChanged: r }) {
  const [o, s] = H.useState(null), [h, m] = H.useState(""), [v, b] = H.useState(null), [E, S] = H.useState({}), [T, p] = H.useState({}), [L, N] = H.useState(!1), [O, V] = H.useState({}), [B, le] = H.useState(null), [re, he] = H.useState({}), [K, ie] = H.useState({ from: "", to: "" }), ne = H.useCallback(async () => {
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
    m(M.ok ? `已${pe === "create" ? "新立进类型库" : pe === "merge" ? `并入「${M.now}」` : "驳回"}：${G}` : M.message || JSON.stringify(M)), M.ok && (await ne(), r?.(), V({}), he((ee) => {
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
      const q = await Wi("/api/model/status", { kind: "typehint", timeoutMs: 180 * 1e3 });
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
    m(ee.ok ? `已改名：${G} → ${pe}` : ee.message || JSON.stringify(ee)), ee.ok && (await ne(), r?.(), V({}), he((j) => {
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
        Jl,
        {
          id: "cb-reclass-from",
          value: K.from,
          placeholder: "已登记类型再归类：选源…",
          onChange: (G) => ie((pe) => ({ ...pe, from: G })),
          options: (o.types || []).map((G) => ({ value: G.type, label: G.type }))
        }
      ),
      /* @__PURE__ */ d.jsx(
        Jl,
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
        (o.types || []).some((pe) => pe.type === O[G.name].target) && /* @__PURE__ */ d.jsx(_e, { onClick: () => S((pe) => ({ ...pe, [G.name]: O[G.name].target })), children: "采纳（填入目标）" })
      ] }),
      /* @__PURE__ */ d.jsx("div", { className: "import-row", children: /* @__PURE__ */ d.jsx(_e, { disabled: B !== null || v !== null, onClick: () => {
        be(G.name, G.definition);
      }, children: B === G.name ? "推荐中…" : "AI 推荐" }) }),
      /* @__PURE__ */ d.jsxs("div", { className: "import-row", children: [
        /* @__PURE__ */ d.jsx(_e, { variant: "primary", disabled: v !== null, onClick: () => {
          ue(G.name, "create");
        }, children: v === G.name ? "执行中…" : "新立进类型库" }),
        /* @__PURE__ */ d.jsx(
          Jl,
          {
            id: `cb-merge-${G.name}`,
            value: E[G.name] || "",
            placeholder: "输入过滤，或输入新名…",
            allowCustom: !0,
            onChange: (pe) => S((De) => ({ ...De, [G.name]: pe })),
            options: [
              ...(o.types || []).map((pe) => ({ value: pe.type, label: pe.type })),
              ...(o.pending || []).filter((pe) => pe.name !== G.name).map((pe) => ({ value: pe.name, label: `${pe.name}（候选）` }))
            ]
          }
        ),
        /* @__PURE__ */ d.jsxs(_e, { disabled: v !== null || !E[G.name], title: "箭头左侧消失成为别名，右侧名字存活", onClick: () => {
          ue(G.name, "merge", { target: E[G.name], targetFresh: ve(E[G.name]) });
        }, children: [
          G.name,
          " → ",
          E[G.name] || "…"
        ] }),
        /* @__PURE__ */ d.jsxs(_e, { disabled: v !== null || !E[G.name], title: "反方向：右侧候选名存活，左侧所选类型归入它名下", onClick: () => {
          ue(E[G.name], "merge", { target: G.name });
        }, children: [
          E[G.name] || "…",
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
        /* @__PURE__ */ d.jsx(_e, { disabled: v !== null, onClick: () => he((pe) => ({ ...pe, [G.name]: !0 })), children: "重新裁决" })
      ] }, G.name))
    ] })
  ] });
}
function gg({ initial: u, savePath: r, onSaved: o }) {
  const [s, h] = H.useState(u), [m, v] = H.useState(""), [b, E] = H.useState(!1);
  async function S() {
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
    E(!0), v("");
    try {
      const p = await Pe("/api/library/write-file", { path: r, content: T });
      p && p.ok ? (mt.toast.show({ message: "已保存", type: "success" }), o(T)) : v(p?.message || "保存失败");
    } catch (p) {
      v(String(p?.message || p));
    }
    E(!1);
  }
  return /* @__PURE__ */ d.jsxs("div", { className: "editor", children: [
    m && /* @__PURE__ */ d.jsx("p", { className: "err", children: m }),
    /* @__PURE__ */ d.jsx("textarea", { className: "editbox", value: s, onChange: (T) => h(T.currentTarget.value), rows: 22, spellCheck: !1 }),
    /* @__PURE__ */ d.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ d.jsx(_e, { variant: "primary", disabled: b, onClick: () => {
        S();
      }, children: "保存" }),
      /* @__PURE__ */ d.jsx("span", { className: "hint", children: "首行须为 # 标题；改动会在尾部留一行修订日期（可自行删除）。改标签：编辑「- 标签：」行。" })
    ] })
  ] });
}
function wE({ tick: u }) {
  const [r, o] = H.useState([]), [s, h] = H.useState(""), [m, v] = H.useState(""), [b, E] = H.useState(!1), S = H.useCallback(async () => {
    const T = await xa("篇目"), p = await Promise.all(
      T.map(async (L) => {
        const { title: N, meta: O } = mg(await pg(L), L.replace(/\.md$/, ""));
        return { id: L, title: N, meta: O || L.replace(/\.md$/, "") };
      })
    );
    o(p);
  }, []);
  return H.useEffect(() => {
    S();
  }, [S, u]), H.useEffect(() => {
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
      s && /* @__PURE__ */ d.jsx("div", { className: "import-row", children: /* @__PURE__ */ d.jsx(_e, { onClick: () => E((T) => !T), children: b ? "返回预览" : "编辑本篇" }) }),
      s ? b ? /* @__PURE__ */ d.jsx(
        gg,
        {
          initial: m,
          savePath: `篇目/${s}`,
          onSaved: (T) => {
            v(T), E(!1), S();
          }
        }
      ) : /* @__PURE__ */ d.jsx(au, { md: m }) : /* @__PURE__ */ d.jsx("p", { className: "hint", children: "左侧选篇查看（每条登记都带位置与原文引文）。" })
    ] })
  ] }) : /* @__PURE__ */ d.jsx(tl, { title: "还没有篇目", description: "导入文献或在对话里拆解后，篇目会出现在这里。" });
}
function OE({ tick: u }) {
  const [r, o] = H.useState([]), [s, h] = H.useState(""), [m, v] = H.useState(""), [b, E] = H.useState(""), [S, T] = H.useState(""), [p, L] = H.useState({});
  if (H.useEffect(() => {
    xa("篇目").then(async (O) => {
      o(O), O[0] && h(O[0]), O[1] && v(O[1]);
      const V = await Promise.all(O.map(async (B) => {
        const { title: le, meta: re } = mg(await pg(B), B.replace(/\.md$/, ""));
        return [B, re ? `${le} · ${re}` : le];
      }));
      L(Object.fromEntries(V));
    });
  }, [u]), H.useEffect(() => {
    s && Be(nn(`篇目/${s}`)).then((O) => E(O.ok ? O.content : ""));
  }, [s]), H.useEffect(() => {
    m && Be(nn(`篇目/${m}`)).then((O) => T(O.ok ? O.content : ""));
  }, [m]), r.length < 2) return /* @__PURE__ */ d.jsx(tl, { title: "至少两篇可对比", description: "先积累两篇以上篇目。" });
  const N = r.map((O) => ({ value: O, label: p[O] || O.replace(/\.md$/, "") }));
  return /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsxs("div", { className: "grid2", children: [
      /* @__PURE__ */ d.jsx(Jl, { id: "cb-cmp-a", value: s, onChange: h, options: N, placeholder: "输入过滤篇目…" }),
      /* @__PURE__ */ d.jsx(Jl, { id: "cb-cmp-b", value: m, onChange: v, options: N, placeholder: "输入过滤篇目…" })
    ] }),
    /* @__PURE__ */ d.jsxs("div", { className: "compare", children: [
      /* @__PURE__ */ d.jsx("div", { className: "col", children: /* @__PURE__ */ d.jsx(au, { md: b }) }),
      /* @__PURE__ */ d.jsx("div", { className: "col", children: /* @__PURE__ */ d.jsx(au, { md: S }) })
    ] })
  ] });
}
function CE({ tick: u }) {
  const [r, o] = H.useState(null);
  if (H.useEffect(() => {
    (async () => {
      const [h, m, v, b, E, S] = await Promise.all([
        xa("篇目"),
        xa("锚点样本"),
        xa("写作模型"),
        Be(nn("标签库.md")),
        Be(nn("闭包映射表.md")),
        Be(nn("类型库.md"))
      ]), T = b.ok ? Do(b.content, "标签") : [], p = b.ok ? Yo(b.content) : [], L = E.ok ? Do(E.content, "from") : [], N = S.ok ? Do(S.content, "类型") : [];
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
function Do(u, r) {
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
function Uo(u) {
  const r = u.filter((m) => m.ok), o = u.filter((m) => !m.ok && m.skipped), s = u.filter((m) => !m.ok && !m.skipped), h = [];
  return r.length && h.push(`✓ 生成 ${r.length} 个类型：${r.map((m) => `${m.type} v${m.version}`).join("、")}`), o.length && h.push(`跳过 ${o.length} 个（样本不足或未变）`), s.length && h.push(`✗ 失败：${s.map((m) => `${m.type}：${m.error || "未知"}`).join("；")}`), h.join("；") || "没有可处理的类型";
}
function xE(u) {
  const r = u.results || [], o = r.filter((E) => E.ok), s = r.filter((E) => !E.ok && (E.stage === "unchanged" || E.stage === "size")), h = r.filter((E) => !E.ok && E.stage !== "unchanged" && E.stage !== "size"), m = [];
  o.length && m.push(`✓ 生成 ${o.length} 个战术：${o.map((E) => `战术-${E.label} v${E.version}`).join("、")}`), s.length && m.push(`跳过 ${s.length} 个（未变或超素材上限）`), h.length && m.push(`✗ 失败：${h.map((E) => `${E.label}：${E.message || E.stage}`).join("；")}`);
  const v = m.join("；") || "无产出", b = Number(u.belowThreshold || 0);
  return b ? `${v}（另有 ${b} 个标签携带篇目 <2，未达门槛）` : v;
}
function RE(u) {
  const r = {};
  for (const o of String(u || "").split(/\r?\n/)) {
    if (!o.startsWith("|") || /^\|\s*-+/.test(o)) continue;
    const s = o.split("|").slice(1, -1).map((h) => h.trim());
    s.length === 3 && s[0] && s[0] !== "原始类型" && s[1] && s[0] !== s[1] && (r[s[0]] = s[1]);
  }
  return r;
}
function jE({ tick: u }) {
  const [r, o] = H.useState([]), [s, h] = H.useState(""), [m, v] = H.useState(""), [b, E] = H.useState(!1), [S, T] = H.useState(!1), [p, L] = H.useState({}), [N, O] = H.useState(""), [V, B] = H.useState({}), [le, re] = H.useState("list"), [he, K] = H.useState(""), [ie, ne] = H.useState({}), [ue, be] = H.useState(!1);
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
          E(!0), K("建模进行中（接管切页前的任务）…");
          const J = await se(() => !I);
          if (I || !J) return;
          K(J.stage === "timeout" ? J.message : Uo(J.results || [])), (J.results || []).some((g) => g.ok) && (mt.toast.show({ message: "写作模型已生成/更新", type: "success" }), ve()), E(!1);
          return;
        }
        te.lastResult && te.finishedAt && Date.now() - te.finishedAt < 1800 * 1e3 && (K(`上次建模：${Uo(te.lastResult.results || [])}`), ve());
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
    xa("写作模型").then(o), Be(nn("闭包映射表.md")).then((I) => L(I.ok ? RE(I.content) : {}));
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
    E(!0), K("");
    try {
      const I = await Pe("/api/model/generate", {});
      if (!I.started) {
        K(I.message || "发起失败"), E(!1);
        return;
      }
      K("建模中：正在读取结构库…");
      const te = await se();
      if (!te) {
        E(!1);
        return;
      }
      if (te.stage === "timeout") {
        K(te.message), E(!1);
        return;
      }
      K(Uo(te.results || []) || te.message || ""), (te.results || []).some((J) => J.ok) && (mt.toast.show({ message: "写作模型已生成/更新", type: "success" }), ve());
    } catch (I) {
      K(`请求失败：${String(I?.message || I)}`);
    }
    E(!1);
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
            K(xE(g) || g.message || ""), (g.results || []).some((D) => D.ok) && (mt.toast.show({ message: "战术模型已生成/更新", type: "success" }), ve()), T(!1);
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
      /* @__PURE__ */ d.jsx(_e, { variant: "primary", disabled: b || S, onClick: () => {
        G();
      }, children: b ? "建模中…" : "生成 / 更新写作模型" }),
      /* @__PURE__ */ d.jsx(_e, { disabled: b || S, onClick: () => {
        pe();
      }, children: S ? "战术建模中…" : "生成 / 更新战术模型" }),
      /* @__PURE__ */ d.jsx("span", { className: "hint", children: "两个按钮同理：样本 ≥2 才生成，再点得新版本（v+1，历史保留）。类型模型的样本看归并自与宣告篇，战术模型的样本看携带该标签的篇目。" }),
      /* @__PURE__ */ d.jsx("span", { className: "hint", children: "建模按类型或标签调用模型，样本多、篇幅长时 token 消耗较大。" })
    ] }),
    he && /* @__PURE__ */ d.jsx("pre", { className: "hint", children: he }),
    le === "preview" && s ? /* @__PURE__ */ d.jsxs("div", { className: "model-preview", children: [
      /* @__PURE__ */ d.jsxs("div", { className: "import-row", children: [
        /* @__PURE__ */ d.jsx(_e, { onClick: () => re("list"), children: "← 返回列表" }),
        /* @__PURE__ */ d.jsxs("span", { className: "hint", children: [
          "正在查看：",
          s
        ] })
      ] }),
      ue ? /* @__PURE__ */ d.jsx(gg, { initial: m, savePath: `写作模型/${s}`, onSaved: (I) => {
        v(I), be(!1), ve();
      } }) : /* @__PURE__ */ d.jsxs(d.Fragment, { children: [
        /* @__PURE__ */ d.jsxs("div", { className: "import-row", children: [
          /* @__PURE__ */ d.jsx(_e, { onClick: () => be(!0), children: "编辑本模型" }),
          /* @__PURE__ */ d.jsx(_e, { disabled: b || S, onClick: () => {
            if (M !== s) {
              ee(s);
              return;
            }
            ee(""), j([s]);
          }, children: M === s ? "再点一次确认删除" : "删除本版本" })
        ] }),
        /* @__PURE__ */ d.jsx(au, { md: m })
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
          const D = g.type.startsWith("战术-") ? g.type.slice(2) : g.type, P = F(D), $ = P !== D, oe = g.type.startsWith("战术-") ? `战术-${P}` : P;
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
                O(""), ae(g.type, oe);
              }, children: N === g.type ? `再点一次确认改名为 ${oe}` : "随归并改名" }),
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
function DE() {
  const [u, r] = H.useState(""), [o, s] = H.useState([]), [h, m] = H.useState(null), [v, b] = H.useState("");
  async function E() {
    if (!u.trim()) return;
    const S = await Be(`/api/search?query=${encodeURIComponent(u.trim())}`);
    s(S.ok ? S.results : []), m(null);
  }
  return H.useEffect(() => {
    if (!h) {
      b("");
      return;
    }
    Be(nn(h.path)).then((S) => b(S.ok ? S.content : "读取失败"));
  }, [h]), /* @__PURE__ */ d.jsxs("div", { children: [
    /* @__PURE__ */ d.jsx("p", { className: "hint", children: "按关键词物理命中排序帮你收窄候选，取舍仍由你判断；引用时带篇目位置与原文引文。" }),
    /* @__PURE__ */ d.jsxs("div", { className: "searchbar", children: [
      /* @__PURE__ */ d.jsx(
        St,
        {
          label: "关键词（空格 / 、 分隔）",
          value: u,
          onChange: (S) => r(S.currentTarget.value),
          placeholder: "例：反驳 开头",
          onKeyDown: (S) => {
            S.key === "Enter" && E();
          }
        }
      ),
      /* @__PURE__ */ d.jsx(_e, { variant: "primary", onClick: () => {
        E();
      }, children: "搜索" })
    ] }),
    /* @__PURE__ */ d.jsxs("div", { className: "searchresults", children: [
      o.map((S) => /* @__PURE__ */ d.jsxs("div", { className: h?.path === S.path ? "searchhit on" : "searchhit", children: [
        /* @__PURE__ */ d.jsxs("div", { className: "searchhit-head", onClick: () => m(S), children: [
          /* @__PURE__ */ d.jsx("span", { className: "badge", children: S.kind }),
          /* @__PURE__ */ d.jsx("b", { children: S.title }),
          /* @__PURE__ */ d.jsxs("span", { className: "hint", children: [
            "命中 ",
            S.score,
            " · ",
            S.path
          ] })
        ] }),
        h?.path !== S.path && S.hits?.slice(0, 2).map((T, p) => /* @__PURE__ */ d.jsxs("div", { className: "hitline", children: [
          "L",
          T.line,
          ": ",
          T.excerpt,
          T.text
        ] }, p))
      ] }, S.path)),
      !o.length && /* @__PURE__ */ d.jsx("p", { className: "hint", children: "输入关键词后搜索；结果按命中度排序，点击标题展开全文。" })
    ] }),
    h && /* @__PURE__ */ d.jsxs("div", { className: "searchpreview", children: [
      /* @__PURE__ */ d.jsx("h4", { children: h.title }),
      /* @__PURE__ */ d.jsx(au, { md: v })
    ] })
  ] });
}
function UE() {
  const [u, r] = H.useState(""), [o, s] = H.useState(""), [h, m] = H.useState("2"), [v, b] = H.useState(""), [E, S] = H.useState(""), [T, p] = H.useState(null), [L, N] = H.useState(!1);
  H.useEffect(() => {
    Be("/api/config").then((re) => {
      re.ok && re.config ? (r((re.config.markers || []).join("、")), s(re.config.libraryPath || ""), m(String(re.config.maxPerRun ?? 2)), b(re.config.pythonPath || "")) : S(re.message || "配置读取失败");
    }), Lr().then(p);
  }, []);
  async function O() {
    N(!0), p(await Lr(!0)), N(!1);
  }
  async function V() {
    S("保存中…");
    const re = await Pe("/api/config", {
      markers: u.split(/[\s、，,;；]+/).map((he) => he.trim()).filter(Boolean),
      libraryPath: o.trim(),
      maxPerRun: Number(h) || 2,
      pythonPath: v.trim()
    });
    S(re.ok ? "已保存" : `保存失败：${re.message || "未知错误"}`), re.ok && Lr(!0).then(p);
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
      E && /* @__PURE__ */ d.jsx("span", { className: "savehint", children: E })
    ] }),
    /* @__PURE__ */ d.jsx("p", { className: "hint", children: "命中判定：标定词过闸后，取最近对话文本与标签库/类型库做字典交集，交集词走共用检索层出候选；候选只附命中事实，采纳与否由会话内模型判断。同会话已注入条目不重复推。" })
  ] });
}
function zE({ onDone: u }) {
  const [r, o] = H.useState(""), [s, h] = H.useState(!1), [m, v] = H.useState(null), [b, E] = H.useState(!1), [S, T] = H.useState(!1);
  H.useEffect(() => {
    let O = !1;
    return (async () => {
      const V = await Be("/api/import/status").catch(() => null);
      if (O || !V || !V.running) return;
      h(!0), v({ ok: !0, stage: "running", message: "拆解进行中（接管切页前的任务）…" });
      const B = await qo();
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
          O.preventDefault(), E(!0);
        },
        onDragLeave: () => E(!1),
        onDrop: (O) => {
          O.preventDefault(), E(!1);
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
            /* @__PURE__ */ d.jsx("button", { className: "linkbtn", onClick: () => T((O) => !O), children: S ? "收起 Zotero" : "从 Zotero 取" })
          ] })
        ]
      }
    ),
    S && /* @__PURE__ */ d.jsx(qE, {}),
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
    /* @__PURE__ */ d.jsx(HE, {})
  ] });
}
const ME = {
  pending: "排队",
  running: "运行中",
  stopping: "停止中",
  done: "✓ 完成",
  failed: "✗ 失败",
  cancelled: "■ 已停止"
};
function vg({ nodes: u, active: r, onPick: o, depth: s = 0 }) {
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
    h.children.length > 0 && /* @__PURE__ */ d.jsx(vg, { nodes: h.children, active: r, onPick: o, depth: s + 1 })
  ] }, h.key)) });
}
function HE() {
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
  async function E() {
    const N = await Be("/api/import/queue").catch(() => null);
    N && N.ok && (r(N.items || []), s(N));
  }
  async function S(N, O, V = {}) {
    const B = await Pe("/api/import/queue-action", O !== void 0 ? { action: N, key: O, ...V } : { action: N });
    return B && B.ok ? (s(B.snapshot), E(), !0) : (m(B?.message || "操作失败"), !1);
  }
  function T(N) {
    const O = v;
    b(null), !(O === null || O === N) && S("reorder", O, { before: N });
  }
  const p = o?.total ?? u.length, L = (o?.done ?? 0) + (o?.failed ?? 0) + (o?.cancelled ?? 0);
  return /* @__PURE__ */ d.jsxs("div", { className: "queuebox", children: [
    /* @__PURE__ */ d.jsxs("div", { className: "qhead", children: [
      /* @__PURE__ */ d.jsx("b", { children: "导入队列" }),
      /* @__PURE__ */ d.jsx("span", { className: "hint", children: p ? `${L}/${p} 完成 · 运行 ${(o?.running ?? 0) + (o?.stopping ?? 0)} · 排队 ${o?.pending ?? 0}${o?.paused ? " · 已暂停" : ""}` : "队列为空" }),
      /* @__PURE__ */ d.jsxs("span", { className: "qhead-actions", children: [
        /* @__PURE__ */ d.jsx(_e, { disabled: !o || p === 0, onClick: () => {
          S(o?.paused ? "resume" : "pause");
        }, children: o?.paused ? "继续" : "暂停" }),
        /* @__PURE__ */ d.jsx(_e, { disabled: !o || (o?.done ?? 0) + (o?.cancelled ?? 0) === 0, onClick: () => {
          S("clear-done");
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
          /* @__PURE__ */ d.jsx("span", { className: "qstatus", children: ME[N.status] || N.status }),
          /* @__PURE__ */ d.jsx("span", { className: "qlabel", title: N.message || N.file || "", children: N.label }),
          (N.status === "pending" || N.status === "running") && /* @__PURE__ */ d.jsx(_e, { onClick: () => {
            S("cancel", N.key);
          }, children: "停止" }),
          N.status === "stopping" && /* @__PURE__ */ d.jsx("span", { className: "hint", children: "停止中…" }),
          (N.status === "cancelled" || N.status === "failed") && /* @__PURE__ */ d.jsx(_e, { onClick: () => {
            S("start", N.key);
          }, children: "开始" }),
          N.status !== "running" && N.status !== "stopping" && /* @__PURE__ */ d.jsx(_e, { onClick: () => {
            S("remove", N.key);
          }, children: "移除" }),
          N.status === "failed" && N.message && /* @__PURE__ */ d.jsx("span", { className: "qerr", children: N.message }),
          N.status === "done" && /* @__PURE__ */ d.jsx("span", { className: "qok", children: "已入库" })
        ]
      },
      N.key
    )) })
  ] });
}
function qE() {
  const [u, r] = H.useState([]), [o, s] = H.useState(null), [h, m] = H.useState([]), [v, b] = H.useState(""), [E, S] = H.useState("collection"), [T, p] = H.useState(null), [L, N] = H.useState(/* @__PURE__ */ new Set()), [O, V] = H.useState(""), [B, le] = H.useState(!1);
  H.useEffect(() => {
    Be("/api/zotero/collections").then((se) => {
      se && se.ok ? r(se.collections || []) : V(se?.message || "分类读取失败（Zotero 桌面端在运行吗？）");
    }).catch(() => V("分类读取失败"));
  }, []);
  async function re(se, ge) {
    S("collection"), s(se), N(/* @__PURE__ */ new Set()), le(!0), V(`加载「${ge}」…`);
    try {
      const ve = await Be(`/api/zotero/collection-items?key=${encodeURIComponent(se)}`);
      ve && ve.ok ? (m(ve.items || []), ve.truncated ? V(`该分类较大，列表显示前 ${ve.items.length} 条文献；更多可用搜索收窄`) : (ve.items || []).length ? V("") : V("该分类没有可导入的文献条目")) : V(ve?.message || "条目读取失败");
    } catch (ve) {
      V(String(ve?.message || ve));
    }
    le(!1);
  }
  async function he() {
    S("search"), s(null), N(/* @__PURE__ */ new Set()), le(!0), V("");
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
  const K = E === "collection" ? h : T || [];
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
            se.key === "Enter" && he();
          }
        }
      ),
      /* @__PURE__ */ d.jsx(_e, { disabled: B, onClick: () => {
        he();
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
            className: E === "collection" && !o ? "collbtn on" : "collbtn",
            onClick: () => {
              S("collection"), N(/* @__PURE__ */ new Set());
            },
            children: "按分类浏览"
          }
        ),
        /* @__PURE__ */ d.jsx(vg, { nodes: u, active: o, onPick: (se, ge) => {
          re(se, ge);
        } })
      ] }),
      /* @__PURE__ */ d.jsxs("div", { className: "zlist zlistpick", children: [
        K.length === 0 && /* @__PURE__ */ d.jsx("p", { className: "hint", children: E === "collection" ? "选择左侧分类加载条目，或用搜索。" : "搜索无结果。" }),
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
function LE({ stats: u, go: r, onDone: o }) {
  const s = u ? u.queuePending + u.failures : 0, [h, m] = H.useState("loading"), [v, b] = H.useState(""), E = H.useCallback(() => {
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
    E();
  }, [E]);
  const [S, T] = H.useState(null);
  return H.useEffect(() => {
    Lr().then(T);
  }, []), /* @__PURE__ */ d.jsxs("div", { className: "home", children: [
    /* @__PURE__ */ d.jsx("p", { className: "tagline", children: "把论文拆成可回溯的论证结构，沉淀为写作模型，写论文时检索取用。" }),
    h === "error" && /* @__PURE__ */ d.jsxs("div", { className: "home-banner", children: [
      "读取配置失败（",
      v || "未知原因",
      "），暂时无法判断结构库是否已配置。",
      /* @__PURE__ */ d.jsx(_e, { onClick: E, children: "重试" }),
      /* @__PURE__ */ d.jsx(_e, { onClick: () => r("settings"), children: "去设置" })
    ] }),
    h === "unconfigured" && /* @__PURE__ */ d.jsxs("div", { className: "home-banner", children: [
      "尚未配置结构库。到「设置」填写 libraryPath 并保存，模板会自动铺到该目录，无需手动拷贝。",
      /* @__PURE__ */ d.jsx(_e, { onClick: () => r("settings"), children: "前往设置" })
    ] }),
    S && S.ok === !1 && /* @__PURE__ */ d.jsxs("div", { className: "home-banner", children: [
      "PDF 主引擎 PyMuPDF 未启用（",
      S.error || "未知原因",
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
    /* @__PURE__ */ d.jsx(zE, { onDone: o })
  ] });
}
function IE({ tick: u, bump: r }) {
  const [o, s] = H.useState([]), [h, m] = H.useState(null), [v, b] = H.useState(""), E = H.useCallback(async () => {
    const p = await Be("/api/import/failures").catch(() => ({ items: [] }));
    s(p.items || []);
  }, []);
  H.useEffect(() => {
    E();
  }, [E, u]), H.useEffect(() => {
    let p = !1;
    return (async () => {
      const L = await Be("/api/import/status").catch(() => null);
      if (p || !L || !L.running) return;
      b("有导入任务进行中，等待结果…");
      const N = await qo();
      p || (b(N.ok ? `完成：${N.file}` : `仍失败：${N.message || "未知错误"}${N.failureTs ? "（已刷新记录）" : ""}`), (N.ok || N.failureTs) && (await E(), r()));
    })(), () => {
      p = !0;
    };
  }, []);
  async function S(p) {
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
        const V = await qo();
        V.ok ? (b(`重试成功：${V.file}`), mt.toast.show({ message: "重试成功，已入库", type: "success" })) : V.alreadyExists ? (b(`已在库中，未重复导入${V.id ? `：${V.id}` : ""}；待办记录已清除`), mt.toast.show({ message: "篇目已在库中，未重复导入", type: "success" })) : b(`仍失败：${V.message || "未知错误"}${V.failureTs ? "（已刷新记录）" : ""}`);
      } else O.ok ? (b(`重试成功：${O.file}`), mt.toast.show({ message: "重试成功，已入库", type: "success" })) : b(`仍失败：${O.message || "未知错误"}`);
    } catch (N) {
      b(`请求失败：${String(N?.message || N)}`);
    }
    m(null), await E(), r();
  }
  async function T(p) {
    await Pe("/api/import/failures/dismiss", { ts: p.ts }).catch(() => null), await E(), r();
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
          S(p);
        }, children: h === p.ts ? "重试中…" : "重试" }),
        /* @__PURE__ */ d.jsx(_e, { disabled: h === p.ts, onClick: () => {
          T(p);
        }, children: "移除" })
      ] })
    ] }, p.ts)),
    v && /* @__PURE__ */ d.jsx("p", { className: v.startsWith("重试成功") || v.startsWith("已在库中") ? "ok" : "err", children: v })
  ] }) : /* @__PURE__ */ d.jsx(tl, { title: "暂无导入失败", description: "导入拆解失败的文献会落在这里，可原样重试。" });
}
function BE() {
  const u = document.getElementById("root")?.dataset.surface || "page", [r, o] = H.useState("home"), [s, h] = H.useState({
    home: "",
    use: "search",
    library: "browse",
    todo: "score",
    settings: ""
  }), [m, v] = H.useState(0), [b, E] = H.useState(null), S = H.useCallback(() => v((O) => O + 1), []), T = H.useCallback((O) => o(O), []);
  H.useEffect(() => {
    mt.ready(), mt.ui.resize({ height: u === "widget" ? 420 : 760 });
  }, [u]), H.useEffect(() => {
    let O = !0;
    return EE().then((V) => {
      O && E(V);
    }).catch(() => {
      O && E(null);
    }), () => {
      O = !1;
    };
  }, [m, r]);
  const p = s[r], L = H.useMemo(() => {
    switch (r) {
      case "home":
        return /* @__PURE__ */ d.jsx(LE, { stats: b, go: T, onDone: S });
      case "use":
        return p === "models" ? /* @__PURE__ */ d.jsx(jE, { tick: m }) : /* @__PURE__ */ d.jsx(DE, {});
      case "library":
        return p === "compare" ? /* @__PURE__ */ d.jsx(OE, { tick: m }) : p === "board" ? /* @__PURE__ */ d.jsx(CE, { tick: m }) : /* @__PURE__ */ d.jsx(wE, { tick: m });
      case "todo":
        return p === "queue" ? /* @__PURE__ */ d.jsx(NE, { tick: m, onChanged: S }) : p === "types" ? /* @__PURE__ */ d.jsx(_E, { tick: m, onChanged: S }) : p === "import-fail" ? /* @__PURE__ */ d.jsx(IE, { tick: m, bump: S }) : /* @__PURE__ */ d.jsx(SE, {});
      case "settings":
        return /* @__PURE__ */ d.jsx(UE, {});
    }
  }, [r, p, m, b, T, S]), N = b ? b.queuePending + b.failures : 0;
  return /* @__PURE__ */ d.jsx(hE, { mode: "inherit", className: "plugin-panel", children: /* @__PURE__ */ d.jsxs(
    Mn,
    {
      title: "论文结构建模",
      description: "把论文拆成可回溯的论证结构，沉淀为写作模型，写论文时检索取用。",
      actions: /* @__PURE__ */ d.jsx(_e, { variant: "ghost", onClick: S, children: "刷新" }),
      children: [
        /* @__PURE__ */ d.jsx("nav", { className: "tabs zones", children: gE.map((O) => /* @__PURE__ */ d.jsxs("button", { className: r === O.id ? "tab on" : "tab", onClick: () => o(O.id), children: [
          O.label,
          O.id === "todo" && N > 0 && /* @__PURE__ */ d.jsx("span", { className: "nav-badge", children: N })
        ] }, O.id)) }),
        r !== "home" && r !== "settings" && /* @__PURE__ */ d.jsx("nav", { className: "tabs sub", children: vE[r].map((O) => /* @__PURE__ */ d.jsxs(
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
const Lp = document.getElementById("root");
Lp && S0.createRoot(Lp).render(/* @__PURE__ */ d.jsx(BE, {}));
