var vo = { exports: {} }, Ki = {};
var fp;
function d0() {
  if (fp) return Ki;
  fp = 1;
  var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function o(s, d, m) {
    var v = null;
    if (m !== void 0 && (v = "" + m), d.key !== void 0 && (v = "" + d.key), "key" in d) {
      m = {};
      for (var b in d)
        b !== "key" && (m[b] = d[b]);
    } else m = d;
    return d = m.ref, {
      $$typeof: u,
      type: s,
      key: v,
      ref: d !== void 0 ? d : null,
      props: m
    };
  }
  return Ki.Fragment = r, Ki.jsx = o, Ki.jsxs = o, Ki;
}
var dp;
function h0() {
  return dp || (dp = 1, vo.exports = d0()), vo.exports;
}
var h = h0(), yo = { exports: {} }, xe = {};
var hp;
function m0() {
  if (hp) return xe;
  hp = 1;
  var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), s = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), m = /* @__PURE__ */ Symbol.for("react.consumer"), v = /* @__PURE__ */ Symbol.for("react.context"), b = /* @__PURE__ */ Symbol.for("react.forward_ref"), S = /* @__PURE__ */ Symbol.for("react.suspense"), E = /* @__PURE__ */ Symbol.for("react.memo"), N = /* @__PURE__ */ Symbol.for("react.lazy"), p = /* @__PURE__ */ Symbol.for("react.activity"), B = /* @__PURE__ */ Symbol.for("react.view_transition"), A = Symbol.iterator;
  function x(g) {
    return g === null || typeof g != "object" ? null : (g = A && g[A] || g["@@iterator"], typeof g == "function" ? g : null);
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
  }, I = Object.assign, le = {};
  function Ee(g, D, P) {
    this.props = g, this.context = D, this.refs = le, this.updater = P || V;
  }
  Ee.prototype.isReactComponent = {}, Ee.prototype.setState = function(g, D) {
    if (typeof g != "object" && typeof g != "function" && g != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, g, D, "setState");
  }, Ee.prototype.forceUpdate = function(g) {
    this.updater.enqueueForceUpdate(this, g, "forceUpdate");
  };
  function he() {
  }
  he.prototype = Ee.prototype;
  function k(g, D, P) {
    this.props = g, this.context = D, this.refs = le, this.updater = P || V;
  }
  var ie = k.prototype = new he();
  ie.constructor = k, I(ie, Ee.prototype), ie.isPureReactComponent = !0;
  var ne = Array.isArray;
  function ue() {
  }
  var ye = { H: null, A: null, T: null, S: null }, re = Object.prototype.hasOwnProperty;
  function pe(g, D, P) {
    var $ = P.ref;
    return {
      $$typeof: u,
      type: g,
      key: D,
      ref: $ !== void 0 ? $ : null,
      props: P
    };
  }
  function ge(g, D) {
    return pe(g.type, D, g.props);
  }
  function G(g) {
    return typeof g == "object" && g !== null && g.$$typeof === u;
  }
  function me(g) {
    var D = { "=": "=0", ":": "=2" };
    return "$" + g.replace(/[=:]/g, function(P) {
      return D[P];
    });
  }
  var De = /\/+/g;
  function H(g, D) {
    return typeof g == "object" && g !== null && g.key != null ? me("" + g.key) : D.toString(36);
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
  function ee(g, D, P, $, ce) {
    var de = typeof g;
    (de === "undefined" || de === "boolean") && (g = null);
    var oe = !1;
    if (g === null) oe = !0;
    else
      switch (de) {
        case "bigint":
        case "string":
        case "number":
          oe = !0;
          break;
        case "object":
          switch (g.$$typeof) {
            case u:
            case r:
              oe = !0;
              break;
            case N:
              return oe = g._init, ee(
                oe(g._payload),
                D,
                P,
                $,
                ce
              );
          }
      }
    if (oe)
      return ce = ce(g), oe = $ === "" ? "." + H(g, 0) : $, ne(ce) ? (P = "", oe != null && (P = oe.replace(De, "$&/") + "/"), ee(ce, D, P, "", function(We) {
        return We;
      })) : ce != null && (G(ce) && (ce = ge(
        ce,
        P + (ce.key == null || g && g.key === ce.key ? "" : ("" + ce.key).replace(
          De,
          "$&/"
        ) + "/") + oe
      )), D.push(ce)), 1;
    oe = 0;
    var W = $ === "" ? "." : $ + ":";
    if (ne(g))
      for (var fe = 0; fe < g.length; fe++)
        $ = g[fe], de = W + H($, fe), oe += ee(
          $,
          D,
          P,
          de,
          ce
        );
    else if (fe = x(g), typeof fe == "function")
      for (g = fe.call(g), fe = 0; !($ = g.next()).done; )
        $ = $.value, de = W + H($, fe++), oe += ee(
          $,
          D,
          P,
          de,
          ce
        );
    else if (de === "object") {
      if (typeof g.then == "function")
        return ee(
          M(g),
          D,
          P,
          $,
          ce
        );
      throw D = String(g), Error(
        "Objects are not valid as a React child (found: " + (D === "[object Object]" ? "object with keys {" + Object.keys(g).join(", ") + "}" : D) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return oe;
  }
  function j(g, D, P) {
    if (g == null) return g;
    var $ = [], ce = 0;
    return ee(g, $, "", "", function(de) {
      return D.call(P, de, ce++);
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
  function q(g) {
    var D = ye.T, P = {};
    P.types = D !== null ? D.types : null, ye.T = P;
    try {
      var $ = g(), ce = ye.S;
      ce !== null && ce(P, $), typeof $ == "object" && $ !== null && typeof $.then == "function" && $.then(ue, ae);
    } catch (de) {
      ae(de);
    } finally {
      D !== null && P.types !== null && (D.types = P.types), ye.T = D;
    }
  }
  function te(g) {
    var D = ye.T;
    if (D !== null) {
      var P = D.types;
      P === null ? D.types = [g] : P.indexOf(g) === -1 && P.push(g);
    } else q(te.bind(null, g));
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
  return xe.Activity = p, xe.Children = J, xe.Component = Ee, xe.Fragment = o, xe.Profiler = d, xe.PureComponent = k, xe.StrictMode = s, xe.Suspense = S, xe.ViewTransition = B, xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ye, xe.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(g) {
      return ye.H.useMemoCache(g);
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
    var $ = I({}, g.props), ce = g.key;
    if (D != null)
      for (de in D.key !== void 0 && (ce = "" + D.key), D)
        !re.call(D, de) || de === "key" || de === "__self" || de === "__source" || de === "ref" && D.ref === void 0 || ($[de] = D[de]);
    var de = arguments.length - 2;
    if (de === 1) $.children = P;
    else if (1 < de) {
      for (var oe = Array(de), W = 0; W < de; W++)
        oe[W] = arguments[W + 2];
      $.children = oe;
    }
    return pe(g.type, ce, $);
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
    var $, ce = {}, de = null;
    if (D != null)
      for ($ in D.key !== void 0 && (de = "" + D.key), D)
        re.call(D, $) && $ !== "key" && $ !== "__self" && $ !== "__source" && (ce[$] = D[$]);
    var oe = arguments.length - 2;
    if (oe === 1) ce.children = P;
    else if (1 < oe) {
      for (var W = Array(oe), fe = 0; fe < oe; fe++)
        W[fe] = arguments[fe + 2];
      ce.children = W;
    }
    if (g && g.defaultProps)
      for ($ in oe = g.defaultProps, oe)
        ce[$] === void 0 && (ce[$] = oe[$]);
    return pe(g, de, ce);
  }, xe.createRef = function() {
    return { current: null };
  }, xe.forwardRef = function(g) {
    return { $$typeof: b, render: g };
  }, xe.isValidElement = G, xe.lazy = function(g) {
    return {
      $$typeof: N,
      _payload: { _status: -1, _result: g },
      _init: F
    };
  }, xe.memo = function(g, D) {
    return {
      $$typeof: E,
      type: g,
      compare: D === void 0 ? null : D
    };
  }, xe.startTransition = q, xe.unstable_useCacheRefresh = function() {
    return ye.H.useCacheRefresh();
  }, xe.use = function(g) {
    return ye.H.use(g);
  }, xe.useActionState = function(g, D, P) {
    return ye.H.useActionState(g, D, P);
  }, xe.useCallback = function(g, D) {
    return ye.H.useCallback(g, D);
  }, xe.useContext = function(g) {
    return ye.H.useContext(g);
  }, xe.useDebugValue = function() {
  }, xe.useDeferredValue = function(g, D) {
    return ye.H.useDeferredValue(g, D);
  }, xe.useEffect = function(g, D) {
    return ye.H.useEffect(g, D);
  }, xe.useEffectEvent = function(g) {
    return ye.H.useEffectEvent(g);
  }, xe.useId = function() {
    return ye.H.useId();
  }, xe.useImperativeHandle = function(g, D, P) {
    return ye.H.useImperativeHandle(g, D, P);
  }, xe.useInsertionEffect = function(g, D) {
    return ye.H.useInsertionEffect(g, D);
  }, xe.useLayoutEffect = function(g, D) {
    return ye.H.useLayoutEffect(g, D);
  }, xe.useMemo = function(g, D) {
    return ye.H.useMemo(g, D);
  }, xe.useOptimistic = function(g, D) {
    return ye.H.useOptimistic(g, D);
  }, xe.useReducer = function(g, D, P) {
    return ye.H.useReducer(g, D, P);
  }, xe.useRef = function(g) {
    return ye.H.useRef(g);
  }, xe.useState = function(g) {
    return ye.H.useState(g);
  }, xe.useSyncExternalStore = function(g, D, P) {
    return ye.H.useSyncExternalStore(
      g,
      D,
      P
    );
  }, xe.useTransition = function() {
    return ye.H.useTransition();
  }, xe.version = "19.3.0", xe;
}
var mp;
function Ho() {
  return mp || (mp = 1, yo.exports = m0()), yo.exports;
}
var L = Ho(), bo = { exports: {} }, ki = {}, Eo = { exports: {} }, So = {};
var pp;
function p0() {
  return pp || (pp = 1, (function(u) {
    function r(M, ee) {
      var j = M.length;
      M.push(ee);
      e: for (; 0 < j; ) {
        var F = j - 1 >>> 1, ae = M[F];
        if (0 < d(ae, ee))
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
        e: for (var F = 0, ae = M.length, q = ae >>> 1; F < q; ) {
          var te = 2 * (F + 1) - 1, J = M[te], g = te + 1, D = M[g];
          if (0 > d(J, j))
            g < ae && 0 > d(D, J) ? (M[F] = D, M[g] = j, F = g) : (M[F] = J, M[te] = j, F = te);
          else if (g < ae && 0 > d(D, j))
            M[F] = D, M[g] = j, F = g;
          else break e;
        }
      }
      return ee;
    }
    function d(M, ee) {
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
    var S = [], E = [], N = 1, p = null, B = 3, A = !1, x = !1, V = !1, I = !1, le = typeof setTimeout == "function" ? setTimeout : null, Ee = typeof clearTimeout == "function" ? clearTimeout : null, he = typeof setImmediate < "u" ? setImmediate : null;
    function k(M) {
      for (var ee = o(E); ee !== null; ) {
        if (ee.callback === null) s(E);
        else if (ee.startTime <= M)
          s(E), ee.sortIndex = ee.expirationTime, r(S, ee);
        else break;
        ee = o(E);
      }
    }
    function ie(M) {
      if (V = !1, k(M), !x)
        if (o(S) !== null)
          x = !0, ne || (ne = !0, G());
        else {
          var ee = o(E);
          ee !== null && H(ie, ee.startTime - M);
        }
    }
    var ne = !1, ue = -1, ye = 5, re = -1;
    function pe() {
      return I ? !0 : !(u.unstable_now() - re < ye);
    }
    function ge() {
      if (I = !1, ne) {
        var M = u.unstable_now();
        re = M;
        var ee = !0;
        try {
          e: {
            x = !1, V && (V = !1, Ee(ue), ue = -1), A = !0;
            var j = B;
            try {
              t: {
                for (k(M), p = o(S); p !== null && !(p.expirationTime > M && pe()); ) {
                  var F = p.callback;
                  if (typeof F == "function") {
                    p.callback = null, B = p.priorityLevel;
                    var ae = F(
                      p.expirationTime <= M
                    );
                    if (M = u.unstable_now(), typeof ae == "function") {
                      p.callback = ae, k(M), ee = !0;
                      break t;
                    }
                    p === o(S) && s(S), k(M);
                  } else s(S);
                  p = o(S);
                }
                if (p !== null) ee = !0;
                else {
                  var q = o(E);
                  q !== null && H(
                    ie,
                    q.startTime - M
                  ), ee = !1;
                }
              }
              break e;
            } finally {
              p = null, B = j, A = !1;
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
        he(ge);
      };
    else if (typeof MessageChannel < "u") {
      var me = new MessageChannel(), De = me.port2;
      me.port1.onmessage = ge, G = function() {
        De.postMessage(null);
      };
    } else
      G = function() {
        le(ge, 0);
      };
    function H(M, ee) {
      ue = le(function() {
        M(u.unstable_now());
      }, ee);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, u.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ye = 0 < M ? Math.floor(1e3 / M) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return B;
    }, u.unstable_next = function(M) {
      switch (B) {
        case 1:
        case 2:
        case 3:
          var ee = 3;
          break;
        default:
          ee = B;
      }
      var j = B;
      B = ee;
      try {
        return M();
      } finally {
        B = j;
      }
    }, u.unstable_requestPaint = function() {
      I = !0;
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
      var j = B;
      B = M;
      try {
        return ee();
      } finally {
        B = j;
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
        id: N++,
        callback: ee,
        priorityLevel: M,
        startTime: j,
        expirationTime: ae,
        sortIndex: -1
      }, j > F ? (M.sortIndex = j, r(E, M), o(S) === null && M === o(E) && (V ? (Ee(ue), ue = -1) : V = !0, H(ie, j - F))) : (M.sortIndex = ae, r(S, M), x || A || (x = !0, ne || (ne = !0, G()))), M;
    }, u.unstable_shouldYield = pe, u.unstable_wrapCallback = function(M) {
      var ee = B;
      return function() {
        var j = B;
        B = ee;
        try {
          return M.apply(this, arguments);
        } finally {
          B = j;
        }
      };
    };
  })(So)), So;
}
var gp;
function g0() {
  return gp || (gp = 1, Eo.exports = p0()), Eo.exports;
}
var To = { exports: {} }, xt = {};
var vp;
function v0() {
  if (vp) return xt;
  vp = 1;
  var u = Ho();
  function r(N) {
    var p = "https://react.dev/errors/" + N;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var B = 2; B < arguments.length; B++)
        p += "&args[]=" + encodeURIComponent(arguments[B]);
    }
    return "Minified React error #" + N + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  }, d = /* @__PURE__ */ Symbol.for("react.portal"), m = /* @__PURE__ */ Symbol.for("react.recoverable"), v = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function b(N, p, B) {
    var A = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: A == null ? null : A === v ? v : "" + A,
      children: N,
      containerInfo: p,
      implementation: B
    };
  }
  var S = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function E(N, p) {
    if (N === "font") return "";
    if (typeof p == "string")
      return p === "use-credentials" ? p : "";
  }
  return xt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, xt.browser = function(N) {
    return { $$typeof: m, _reason: N };
  }, xt.createPortal = function(N, p) {
    var B = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
      throw Error(r(299));
    return b(N, p, null, B);
  }, xt.flushSync = function(N) {
    var p = S.T, B = s.p;
    try {
      if (S.T = null, s.p = 2, N) return N();
    } finally {
      S.T = p, s.p = B, s.d.f();
    }
  }, xt.preconnect = function(N, p) {
    typeof N == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, s.d.C(N, p));
  }, xt.prefetchDNS = function(N) {
    typeof N == "string" && s.d.D(N);
  }, xt.preinit = function(N, p) {
    if (typeof N == "string" && p && typeof p.as == "string") {
      var B = p.as, A = E(B, p.crossOrigin), x = typeof p.integrity == "string" ? p.integrity : void 0, V = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      B === "style" ? s.d.S(
        N,
        typeof p.precedence == "string" ? p.precedence : void 0,
        {
          crossOrigin: A,
          integrity: x,
          fetchPriority: V
        }
      ) : B === "script" && s.d.X(N, {
        crossOrigin: A,
        integrity: x,
        fetchPriority: V,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      });
    }
  }, xt.preinitModule = function(N, p) {
    if (typeof N == "string")
      if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
          var B = E(
            p.as,
            p.crossOrigin
          );
          s.d.M(N, {
            crossOrigin: B,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0
          });
        }
      } else p == null && s.d.M(N);
  }, xt.preload = function(N, p) {
    if (typeof N == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var B = p.as, A = E(B, p.crossOrigin);
      s.d.L(N, B, {
        crossOrigin: A,
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
  }, xt.preloadModule = function(N, p) {
    if (typeof N == "string")
      if (p) {
        var B = E(p.as, p.crossOrigin);
        s.d.m(N, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: B,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0
        });
      } else s.d.m(N);
  }, xt.requestFormReset = function(N) {
    s.d.r(N);
  }, xt.unstable_batchedUpdates = function(N, p) {
    return N(p);
  }, xt.useFormState = function(N, p, B) {
    return S.H.useFormState(N, p, B);
  }, xt.useFormStatus = function() {
    return S.H.useHostTransitionStatus();
  }, xt.version = "19.3.0", xt;
}
var yp;
function Lp() {
  if (yp) return To.exports;
  yp = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (r) {
        console.error(r);
      }
  }
  return u(), To.exports = v0(), To.exports;
}
var bp;
function y0() {
  if (bp) return ki;
  bp = 1;
  var u = g0(), r = Ho(), o = Lp();
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
  function N(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = N(e), t !== null) return t;
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
  function B(e) {
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
    var t = [null, null], n = B(e);
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
  function I(e) {
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
  var le = null, Ee = null;
  function he(e, t, n) {
    return e === n ? !0 : e === t ? (le = e, !0) : !1;
  }
  function k(e, t, n) {
    return e === n ? (Ee = e, !1) : e === t ? (Ee !== null && (le = e), !0) : !1;
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
  var ue = Object.assign, ye = /* @__PURE__ */ Symbol.for("react.element"), re = /* @__PURE__ */ Symbol.for("react.transitional.element"), pe = /* @__PURE__ */ Symbol.for("react.portal"), ge = /* @__PURE__ */ Symbol.for("react.fragment"), G = /* @__PURE__ */ Symbol.for("react.strict_mode"), me = /* @__PURE__ */ Symbol.for("react.profiler"), De = /* @__PURE__ */ Symbol.for("react.consumer"), H = /* @__PURE__ */ Symbol.for("react.context"), M = /* @__PURE__ */ Symbol.for("react.forward_ref"), ee = /* @__PURE__ */ Symbol.for("react.suspense"), j = /* @__PURE__ */ Symbol.for("react.suspense_list"), F = /* @__PURE__ */ Symbol.for("react.memo"), ae = /* @__PURE__ */ Symbol.for("react.lazy"), q = /* @__PURE__ */ Symbol.for("react.activity"), te = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), J = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), g = /* @__PURE__ */ Symbol.for("react.view_transition"), D = /* @__PURE__ */ Symbol.for("react.recoverable"), P = Symbol.iterator;
  function $(e) {
    return e === null || typeof e != "object" ? null : (e = P && e[P] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ce = /* @__PURE__ */ Symbol.for("react.client.reference");
  function de(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ce ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ge:
        return "Fragment";
      case me:
        return "Profiler";
      case G:
        return "StrictMode";
      case ee:
        return "Suspense";
      case j:
        return "SuspenseList";
      case q:
        return "Activity";
      case g:
        return "ViewTransition";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case pe:
          return "Portal";
        case H:
          return e.displayName || "Context";
        case De:
          return (e._context.displayName || "Context") + ".Consumer";
        case M:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case F:
          return t = e.displayName || null, t !== null ? t : de(e.type) || "Memo";
        case ae:
          t = e._payload, e = e._init;
          try {
            return de(e(t));
          } catch {
          }
      }
    return null;
  }
  var oe = Array.isArray, W = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, fe = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, We = {
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
  var Xt = an(null), O = an(null), Z = an(null), Y = an(null);
  function K(e, t) {
    switch (Qe(Z, t), Qe(O, e), Qe(Xt, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? Em(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = Em(t), e = Sm(t, e);
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
    Ne(Xt), Ne(O), Ne(Z);
  }
  function Be(e) {
    var t = e.memoizedState;
    t !== null && (Gl._currentValue = t.memoizedState, Qe(Y, e)), t = Xt.current;
    var n = Sm(t, e.type);
    t !== n && (Qe(O, e), Qe(Xt, n));
  }
  function $e(e) {
    O.current === e && (Ne(Xt), Ne(O)), Y.current === e && (Ne(Y), Gl._currentValue = We);
  }
  var St, Ht;
  function Tt(e) {
    if (St === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        St = t && t[1] || "", Ht = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + St + e + Ht;
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
                } catch (se) {
                  var _ = se;
                }
                Reflect.construct(e, [], Q);
              } else {
                try {
                  Q.call();
                } catch (se) {
                  _ = se;
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
              } catch (se) {
                _ = se;
              }
              (Q = e()) && typeof Q.catch == "function" && Q.catch(function() {
              });
            }
          } catch (se) {
            if (se && _ && typeof se.stack == "string")
              return [se.stack, _.stack];
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
`), C = f.split(`
`);
        for (l = a = 0; a < y.length && !y[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; l < C.length && !C[l].includes(
          "DetermineComponentFrameRoot"
        ); )
          l++;
        if (a === y.length || l === C.length)
          for (a = y.length - 1, l = C.length - 1; 1 <= a && 0 <= l && y[a] !== C[l]; )
            l--;
        for (; 1 <= a && 0 <= l; a--, l--)
          if (y[a] !== C[l]) {
            if (a !== 1 || l !== 1)
              do
                if (a--, l--, 0 > l || y[a] !== C[l]) {
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
    return (n = e ? e.displayName || e.name : "") ? Tt(n) : "";
  }
  function ja(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return Tt(e.type);
      case 16:
        return Tt("Lazy");
      case 13:
        return e.child !== t && t !== null ? Tt("Suspense Fallback") : Tt("Suspense");
      case 19:
        return Tt("SuspenseList");
      case 0:
      case 15:
        return pn(e.type, !1);
      case 11:
        return pn(e.type.render, !1);
      case 1:
        return pn(e.type, !0);
      case 31:
        return Tt("Activity");
      case 30:
        return Tt("ViewTransition");
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
  var gn = Object.prototype.hasOwnProperty, Vr = u.unstable_scheduleCallback, Gr = u.unstable_cancelCallback, vg = u.unstable_shouldYield, yg = u.unstable_requestPaint, Qt = u.unstable_now, bg = u.unstable_getCurrentPriorityLevel, Go = u.unstable_ImmediatePriority, Yo = u.unstable_UserBlockingPriority, ru = u.unstable_NormalPriority, Eg = u.unstable_LowPriority, Xo = u.unstable_IdlePriority, Sg = u.log, Tg = u.unstable_setDisableYieldValue, Wl = null, Kt = null;
  function Wn(e) {
    if (typeof Sg == "function" && Tg(e), Kt && typeof Kt.setStrictMode == "function")
      try {
        Kt.setStrictMode(Wl, e);
      } catch {
      }
  }
  var kt = Math.clz32 ? Math.clz32 : _g, Ag = Math.log, Ng = Math.LN2;
  function _g(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Ag(e) / Ng | 0) | 0;
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
  function Qo(e, t) {
    (t & 8) !== 0 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var a = 31 - kt(n), l = 1 << a;
        t |= e[a], n &= ~l;
      }
    return t;
  }
  function wg(e, t) {
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
  function Ko() {
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
  function Og(e, t, n, a, l, i) {
    var c = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var f = e.entanglements, y = e.expirationTimes, C = e.hiddenUpdates;
    for (n = c & ~n; 0 < n; ) {
      var z = 31 - kt(n), Q = 1 << z;
      f[z] = 0, y[z] = -1;
      var _ = C[z];
      if (_ !== null)
        for (C[z] = null, z = 0; z < _.length; z++) {
          var U = _[z];
          U !== null && (U.lane &= -536870913);
        }
      n &= ~Q;
    }
    a !== 0 && ko(e, a, 0), i !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(c & ~t));
  }
  function ko(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - kt(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 261930;
  }
  function Zo(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var a = 31 - kt(n), l = 1 << a;
      l & t | e[a] & t && (e[a] |= t), n &= ~l;
    }
  }
  function Jo(e, t) {
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
  function $o() {
    var e = fe.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : lp(e.type));
  }
  function Fo(e, t) {
    var n = fe.p;
    try {
      return fe.p = e, t();
    } finally {
      fe.p = n;
    }
  }
  var qn = Math.random().toString(36).slice(2), At = "__reactFiber$" + qn, qt = "__reactProps$" + qn, nl = "__reactContainer$" + qn, Po = "__reactEvents$" + qn, Cg = "__reactListeners$" + qn, xg = "__reactHandles$" + qn, Wo = "__reactResources$" + qn, ni = "__reactMarker$" + qn, du = "__reactLoad$" + qn;
  function hu(e) {
    delete e[At], delete e[qt], delete e[Cg], delete e[xg];
  }
  function Ua(e) {
    var t;
    if (t = e[At]) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[nl] || n[At]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = Lm(e); e !== null; ) {
            if (n = e[At]) return n;
            e = Lm(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function al(e) {
    if (e = e[At] || e[nl]) {
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
    var t = e[Wo];
    return t || (t = e[Wo] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function gt(e) {
    e[ni] = !0;
  }
  function ef(e) {
    e[du] = void 0;
  }
  var tf = /* @__PURE__ */ new Set(), nf = {};
  function za(e, t) {
    il(e, t), il(e + "Capture", t);
  }
  function il(e, t) {
    for (nf[e] = t, e = 0; e < t.length; e++)
      tf.add(t[e]);
  }
  var Rg = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), af = {}, lf = {};
  function jg(e) {
    return gn.call(lf, e) ? !0 : gn.call(af, e) ? !1 : Rg.test(e) ? lf[e] = !0 : (af[e] = !0, !1);
  }
  var Ve = !1;
  function uf() {
    var e = Ve;
    return Ve = !1, e;
  }
  function mu(e, t, n) {
    if (jg(t))
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
  function rf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Dg(e, t, n) {
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
      var t = rf(e) ? "checked" : "value";
      e._valueTracker = Dg(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function sf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), a = "";
    return e && (a = rf(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), !0) : !1;
  }
  var Ug = /[\n"\\]/g;
  function ln(e) {
    return e.replace(
      Ug,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function kr(e, t, n, a, l, i, c, f) {
    e.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? e.type = c : e.removeAttribute("type"), t != null ? c === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Zt(t)) : e.value !== "" + Zt(t) && (e.value = "" + Zt(t)) : c !== "submit" && c !== "reset" || e.removeAttribute("value"), t != null ? c === "number" && e.value == t ? Zr(e, Zt(e.value)) : Zr(e, Zt(t)) : n != null ? Zr(e, Zt(n)) : a != null && e.removeAttribute("value"), l == null && i != null && (e.defaultChecked = !!i), l != null && (e.checked = l && typeof l != "function" && typeof l != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.name = "" + Zt(f) : e.removeAttribute("name");
  }
  function cf(e, t, n, a, l, i, c, f) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || n != null) {
      if (!(i !== "submit" && i !== "reset" || t != null)) {
        Kr(e);
        return;
      }
      n = n != null ? "" + Zt(n) : "", t = t != null ? "" + Zt(t) : n, f || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? l, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = f ? e.checked : !!a, e.defaultChecked = !!a, c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" && (e.name = c), Kr(e);
  }
  function Zr(e, t) {
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
  function of(e, t, n) {
    if (t != null && (t = "" + Zt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Zt(n) : "";
  }
  function ff(e, t, n, a) {
    if (t == null) {
      if (a != null) {
        if (n != null) throw Error(s(92));
        if (oe(a)) {
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
  var zg = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function df(e, t, n) {
    var a = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || zg.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function hf(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(s(62));
    if (e = e.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "", Ve = !0);
      for (var l in t)
        a = t[l], t.hasOwnProperty(l) && n[l] !== a && (df(e, l, a), Ve = !0);
    } else
      for (var i in t)
        t.hasOwnProperty(i) && df(e, i, t[i]);
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
  var Mg = /* @__PURE__ */ new Map([
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
  ]), Hg = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function gu(e) {
    return Hg.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function Nn() {
  }
  var $r = null;
  function Fr(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var sl = null, cl = null;
  function mf(e) {
    var t = al(e);
    if (t && (e = t.stateNode)) {
      var n = e[qt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (kr(
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
                kr(
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
              a = n[t], a.form === e.form && sf(a);
          }
          break e;
        case "textarea":
          of(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && ul(e, !!n.multiple, t, !1);
      }
    }
  }
  var Pr = !1;
  function pf(e, t, n) {
    if (Pr) return e(t, n);
    Pr = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (Pr = !1, (sl !== null || cl !== null) && (gr(), sl && (t = sl, e = cl, cl = sl = null, mf(t), e)))
        for (t = 0; t < e.length; t++) mf(e[t]);
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
  function vf() {
    return !1;
  }
  function Dt(e) {
    function t(n, a, l, i, c) {
      this._reactName = n, this._targetInst = l, this.type = a, this.nativeEvent = i, this.target = c, this.currentTarget = null;
      for (var f in e)
        e.hasOwnProperty(f) && (n = e[f], this[f] = n ? n(i) : i[f]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? bu : vf, this.isPropagationStopped = vf, this;
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
  }, Eu = Dt(ta), ui = ue({}, ta, { view: 0, detail: 0 }), qg = Dt(ui), ts, ns, ri, Su = ue({}, ui, {
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
  }), yf = Dt(Su), Lg = ue({}, Su, { dataTransfer: 0 }), Ig = Dt(Lg), Bg = ue({}, ui, { relatedTarget: 0 }), as = Dt(Bg), Vg = ue({}, ta, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Gg = Dt(Vg), Yg = ue({}, ta, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Xg = Dt(Yg), Qg = ue({}, ta, { data: 0 }), bf = Dt(Qg), Kg = {
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
  }, kg = {
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
  }, Zg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Jg(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Zg[e]) ? !!t[e] : !1;
  }
  function ls() {
    return Jg;
  }
  var $g = ue({}, ui, {
    key: function(e) {
      if (e.key) {
        var t = Kg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = yu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? kg[e.keyCode] || "Unidentified" : "";
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
  }), Fg = Dt($g), Pg = ue({}, Su, {
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
  }), Ef = Dt(Pg), Wg = ue({}, ta, { submitter: 0 }), ev = Dt(Wg), tv = ue({}, ui, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ls
  }), nv = Dt(tv), av = ue({}, ta, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), lv = Dt(av), iv = ue({}, Su, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), uv = Dt(iv), rv = ue({}, ta, {
    newState: 0,
    oldState: 0,
    source: 0
  }), sv = Dt(rv), cv = [9, 13, 27, 32], is = In && "CompositionEvent" in window, si = null;
  In && "documentMode" in document && (si = document.documentMode);
  var ov = In && "TextEvent" in window && !si, Sf = In && (!is || si && 8 < si && 11 >= si), Tf = " ", Af = !1;
  function Nf(e, t) {
    switch (e) {
      case "keyup":
        return cv.indexOf(t.keyCode) !== -1;
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
  function _f(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var ol = !1;
  function fv(e, t) {
    switch (e) {
      case "compositionend":
        return _f(t);
      case "keypress":
        return t.which !== 32 ? null : (Af = !0, Tf);
      case "textInput":
        return e = t.data, e === Tf && Af ? null : e;
      default:
        return null;
    }
  }
  function dv(e, t) {
    if (ol)
      return e === "compositionend" || !is && Nf(e, t) ? (e = gf(), vu = es = ea = null, ol = !1, e) : null;
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
        return Sf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var hv = {
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
  function wf(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!hv[e.type] : t === "textarea";
  }
  function Of(e, t, n, a) {
    sl ? cl ? cl.push(a) : cl = [a] : sl = a, t = Tr(t, "onChange"), 0 < t.length && (n = new Eu(
      "onChange",
      "change",
      null,
      n,
      a
    ), e.push({ event: n, listeners: t }));
  }
  var ci = null, oi = null;
  function mv(e) {
    mm(e, 0);
  }
  function Tu(e) {
    var t = ai(e);
    if (sf(t)) return e;
  }
  function Cf(e, t) {
    if (e === "change") return t;
  }
  var xf = !1;
  if (In) {
    var us;
    if (In) {
      var rs = "oninput" in document;
      if (!rs) {
        var Rf = document.createElement("div");
        Rf.setAttribute("oninput", "return;"), rs = typeof Rf.oninput == "function";
      }
      us = rs;
    } else us = !1;
    xf = us && (!document.documentMode || 9 < document.documentMode);
  }
  function jf() {
    ci && (ci.detachEvent("onpropertychange", Df), oi = ci = null);
  }
  function Df(e) {
    if (e.propertyName === "value" && Tu(oi)) {
      var t = [];
      Of(
        t,
        oi,
        e,
        Fr(e)
      ), pf(mv, t);
    }
  }
  function pv(e, t, n) {
    e === "focusin" ? (jf(), ci = t, oi = n, ci.attachEvent("onpropertychange", Df)) : e === "focusout" && jf();
  }
  function gv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Tu(oi);
  }
  function vv(e, t) {
    if (e === "click") return Tu(t);
  }
  function yv(e, t) {
    if (e === "input" || e === "change")
      return Tu(t);
  }
  function bv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Jt = typeof Object.is == "function" ? Object.is : bv;
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
  function ss(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  function Uf(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function zf(e, t) {
    var n = Uf(e);
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
      n = Uf(n);
    }
  }
  function Mf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Mf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Hf(e) {
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
  var Ev = In && "documentMode" in document && 11 >= document.documentMode, fl = null, os = null, di = null, fs = !1;
  function qf(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    fs || fl == null || fl !== ss(a) || (a = fl, "selectionStart" in a && cs(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
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
  }, ds = {}, Lf = {};
  In && (Lf = document.createElement("div").style, "AnimationEvent" in window || (delete dl.animationend.animation, delete dl.animationiteration.animation, delete dl.animationstart.animation), "TransitionEvent" in window || delete dl.transitionend.transition);
  function Ha(e) {
    if (ds[e]) return ds[e];
    if (!dl[e]) return e;
    var t = dl[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in Lf)
        return ds[e] = t[n];
    return e;
  }
  var If = Ha("animationend"), Bf = Ha("animationiteration"), Vf = Ha("animationstart"), Sv = Ha("transitionrun"), Tv = Ha("transitionstart"), Av = Ha("transitioncancel"), Gf = Ha("transitionend"), Yf = /* @__PURE__ */ new Map(), hs = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  hs.push("scrollEnd");
  function vn(e, t) {
    Yf.set(e, t), za(t, [e]);
  }
  var Nv = 0;
  function Bn(e, t) {
    if (e.name != null && e.name !== "auto") return e.name;
    if (t.autoName !== null) return t.autoName;
    e = Sn.identifierPrefix;
    var n = Nv++;
    return e = "_" + e + "t_" + n.toString(32) + "_", t.autoName = e;
  }
  function Xf(e) {
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
    return e = Xf(e), t = Xf(t), t == null ? e === "auto" ? null : e : t === "auto" ? null : t;
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
  }, un = [], hl = 0, ms = 0;
  function Nu() {
    for (var e = hl, t = ms = hl = 0; t < e; ) {
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
      i !== 0 && Qf(n, l, i);
    }
  }
  function _u(e, t, n, a) {
    un[hl++] = e, un[hl++] = t, un[hl++] = n, un[hl++] = a, ms |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function ps(e, t, n, a) {
    return _u(e, t, n, a), wu(e);
  }
  function qa(e, t) {
    return _u(e, null, null, t), wu(e);
  }
  function Qf(e, t, n) {
    e.lanes |= n;
    var a = e.alternate;
    a !== null && (a.lanes |= n);
    for (var l = !1, i = e.return; i !== null; )
      i.childLanes |= n, a = i.alternate, a !== null && (a.childLanes |= n), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (l = !0)), e = i, i = i.return;
    return e.tag === 3 ? (i = e.stateNode, l && t !== null && (l = 31 - kt(n), e = i.hiddenUpdates, a = e[l], a === null ? e[l] = [t] : a.push(t), t.lane = n | 536870912), i) : null;
  }
  function wu(e) {
    if (50 < zi)
      throw zi = 0, pr = null, Error(s(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ml = {};
  function _v(e, t, n, a) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Lt(e, t, n, a) {
    return new _v(e, t, n, a);
  }
  function gs(e) {
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
  function Kf(e, t) {
    e.flags &= 1206910978;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Ou(e, t, n, a, l, i) {
    var c = 0;
    if (a = e, typeof a == "function") gs(a) && (c = 1);
    else if (typeof a == "string")
      c = Wy(
        e,
        n,
        Xt.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (a) {
        case q:
          return e = Lt(31, n, t, l), e.elementType = q, e.lanes = i, e;
        case ge:
          return La(n.children, l, i, t);
        case G:
          c = 8, l |= 24;
          break;
        case me:
          return e = Lt(12, n, t, l | 2), e.elementType = me, e.lanes = i, e;
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
              case H:
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
  function vs(e, t, n) {
    return e = Lt(6, e, null, t), e.lanes = n, e;
  }
  function kf(e) {
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
  var pl = [], gl = 0, Cu = null, hi = 0, sn = [], cn = 0, na = null, _n = 1, wn = "";
  function Yn(e, t) {
    pl[gl++] = hi, pl[gl++] = Cu, Cu = e, hi = t;
  }
  function Jf(e, t, n) {
    sn[cn++] = _n, sn[cn++] = wn, sn[cn++] = na, na = e;
    var a = _n;
    e = wn;
    var l = 32 - kt(a) - 1;
    a &= ~(1 << l), n += 1;
    var i = 32 - kt(t) + l;
    if (30 < i) {
      var c = l - l % 5;
      i = (a & (1 << c) - 1).toString(32), a >>= c, l -= c, _n = 1 << 32 - kt(t) + l | n << l | a, wn = i + e;
    } else
      _n = 1 << i | n << l | a, wn = e;
  }
  function xu(e) {
    e.return !== null && (Yn(e, 1), Jf(e, 1, 0));
  }
  function bs(e) {
    for (; e === Cu; )
      Cu = pl[--gl], pl[gl] = null, hi = pl[--gl], pl[gl] = null;
    for (; e === na; )
      na = sn[--cn], sn[cn] = null, wn = sn[--cn], sn[cn] = null, _n = sn[--cn], sn[cn] = null;
  }
  function $f(e, t) {
    sn[cn++] = _n, sn[cn++] = wn, sn[cn++] = na, _n = t.id, wn = t.overflow, na = e;
  }
  var vt = null, et = null, Ue = !1, aa = null, on = !1, Es = Error(s(519));
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
  function Ff(e) {
    var t = e.stateNode, n = e.type, a = e.memoizedProps;
    switch (t[At] = e, t[qt] = a, n) {
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
        Me("invalid", t), cf(
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
        Me("invalid", t), ff(t, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === !0 || ym(t.textContent, n) ? (a.popover != null && (Me("beforetoggle", t), Me("toggle", t)), a.onScroll != null && Me("scroll", t), a.onScrollEnd != null && Me("scrollend", t), a.onClick != null && (t.onclick = Nn), t = !0) : t = !1, t || la(e, !0);
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
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || $c(e.type, e.memoizedProps)), n = !n), n && et && la(e), Ru(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      et = qm(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      et = qm(e);
    } else
      t === 27 ? (t = et, Ea(e.type) ? (e = io, io = null, et = e) : et = t) : et = vt ? dn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ia() {
    et = vt = null, Ue = !1;
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
  function Nt(e) {
    return Pf(Ba, e);
  }
  function Uu(e, t) {
    return Ba === null && Ga(e), Pf(e, t);
  }
  function Pf(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, Xn === null) {
      if (e === null) throw Error(s(308));
      Xn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Xn = Xn.next = t;
    return n;
  }
  var wv = typeof AbortController < "u" ? AbortController : function() {
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
  }, Ov = u.unstable_scheduleCallback, Cv = u.unstable_NormalPriority, st = {
    $$typeof: H,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Ns() {
    return {
      controller: new wv(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function pi(e) {
    e.refCount--, e.refCount === 0 && Ov(Cv, function() {
      e.controller.abort();
    });
  }
  function Wf(e, t) {
    if ((e.pendingLanes & 4194048) !== 0) {
      var n = e.transitionTypes;
      for (n === null && (n = e.transitionTypes = []), e = 0; e < t.length; e++) {
        var a = t[e];
        n.indexOf(a) === -1 && n.push(a);
      }
    }
  }
  var gi = null;
  function xv(e) {
    var t = e.transitionTypes;
    return e.transitionTypes = null, t;
  }
  var vi = null, _s = 0, Ya = 0, yl = null;
  function Rv(e, t) {
    if (vi === null) {
      var n = vi = [];
      _s = 0, Ya = Vc(), yl = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return _s++, t.then(ed, ed), t;
  }
  function ed() {
    if (--_s === 0 && (gi = null, vi !== null)) {
      yl !== null && (yl.status = "fulfilled");
      var e = vi;
      vi = null, Ya = 0, yl = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function jv(e, t) {
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
  var td = W.S;
  W.S = function(e, t) {
    if (kh = Qt(), typeof t == "object" && t !== null && typeof t.then == "function" && Rv(e, t), gi !== null)
      for (var n = Hl; n !== null; )
        Wf(n, gi), n = n.next;
    if (n = e.types, n !== null) {
      for (var a = Hl; a !== null; )
        Wf(a, n), a = a.next;
      if (Ya !== 0) {
        a = gi, a === null && (a = gi = []);
        for (var l = 0; l < n.length; l++) {
          var i = n[l];
          a.indexOf(i) === -1 && a.push(i);
        }
      }
    }
    td !== null && td(e, t);
  };
  var Xa = an(null);
  function ws() {
    var e = Xa.current;
    return e !== null ? e : Fe.pooledCache;
  }
  function zu(e, t) {
    t === null ? Qe(Xa, Xa.current) : Qe(Xa, t.pool);
  }
  function nd() {
    var e = ws();
    return e === null ? null : { parent: st._currentValue, pool: e };
  }
  var bl = Error(s(460)), Os = Error(s(474)), Mu = Error(s(542)), Hu = { then: function() {
  } };
  function ad(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function ld(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(Nn, Nn), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, ud(e), e === void 0 && !("reason" in t) ? Error(s(600)) : e;
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
            throw e = t.reason, ud(e), e;
        }
        throw Ka = t, bl;
    }
  }
  function Qa(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (Ka = n, bl) : n;
    }
  }
  var Ka = null;
  function id() {
    if (Ka === null) throw Error(s(459));
    var e = Ka;
    return Ka = null, e;
  }
  function ud(e) {
    if (e === bl || e === Mu)
      throw Error(s(483));
  }
  var El = null, yi = 0;
  function qu(e) {
    var t = yi;
    return yi += 1, El === null && (El = []), ld(El, e, t);
  }
  function ua(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Lu(e, t) {
    throw t.$$typeof === ye ? Error(s(525)) : (e = Object.prototype.toString.call(t), Error(
      s(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function rd(e) {
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
    function y(w, T, R, X) {
      var ve = R.type;
      return ve === ge ? (w = z(
        w,
        T,
        R.props.children,
        X,
        R.key
      ), ua(w, R), w) : T !== null && (T.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === ae && Qa(ve) === T.type) ? (T = l(T, R.props), ua(T, R), T.return = w, T) : (T = Ou(
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
    function z(w, T, R, X, ve) {
      return T === null || T.tag !== 7 ? (T = La(
        R,
        w.mode,
        X,
        ve
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
          case re:
            return R = Ou(
              T.type,
              T.key,
              T.props,
              null,
              w.mode,
              R
            ), ua(R, T), R.return = w, R;
          case pe:
            return T = ys(
              T,
              w.mode,
              R
            ), T.return = w, T;
          case ae:
            return T = Qa(T), Q(w, T, R);
        }
        if (oe(T) || $(T))
          return T = La(
            T,
            w.mode,
            R,
            null
          ), T.return = w, T;
        if (typeof T.then == "function")
          return Q(w, qu(T), R);
        if (T.$$typeof === H)
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
      var ve = T !== null ? T.key : null;
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return ve !== null ? null : f(w, T, "" + R, X);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case re:
            return R.key === ve ? y(w, T, R, X) : null;
          case pe:
            return R.key === ve ? C(w, T, R, X) : null;
          case ae:
            return R = Qa(R), _(w, T, R, X);
        }
        if (oe(R) || $(R))
          return ve !== null ? null : z(w, T, R, X, null);
        if (typeof R.then == "function")
          return _(
            w,
            T,
            qu(R),
            X
          );
        if (R.$$typeof === H)
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
    function U(w, T, R, X, ve) {
      if (typeof X == "string" && X !== "" || typeof X == "number" || typeof X == "bigint")
        return w = w.get(R) || null, f(T, w, "" + X, ve);
      if (typeof X == "object" && X !== null) {
        switch (X.$$typeof) {
          case re:
            return w = w.get(
              X.key === null ? R : X.key
            ) || null, y(T, w, X, ve);
          case pe:
            return w = w.get(
              X.key === null ? R : X.key
            ) || null, C(T, w, X, ve);
          case ae:
            return X = Qa(X), U(
              w,
              T,
              R,
              X,
              ve
            );
        }
        if (oe(X) || $(X))
          return w = w.get(R) || null, z(T, w, X, ve, null);
        if (typeof X.then == "function")
          return U(
            w,
            T,
            R,
            qu(X),
            ve
          );
        if (X.$$typeof === H)
          return U(
            w,
            T,
            R,
            Uu(T, X),
            ve
          );
        Lu(T, X);
      }
      return null;
    }
    function se(w, T, R, X) {
      for (var ve = null, qe = null, Ae = T, _e = T = 0, ft = null; Ae !== null && _e < R.length; _e++) {
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
        e && Ae && Le.alternate === null && t(w, Ae), T = i(Le, T, _e), qe === null ? ve = Le : qe.sibling = Le, qe = Le, Ae = ft;
      }
      if (_e === R.length)
        return n(w, Ae), Ue && Yn(w, _e), ve;
      if (Ae === null) {
        for (; _e < R.length; _e++)
          Ae = Q(w, R[_e], X), Ae !== null && (T = i(
            Ae,
            T,
            _e
          ), qe === null ? ve = Ae : qe.sibling = Ae, qe = Ae);
        return Ue && Yn(w, _e), ve;
      }
      for (Ae = a(Ae); _e < R.length; _e++)
        ft = U(
          Ae,
          w,
          _e,
          R[_e],
          X
        ), ft !== null && (e && (Le = ft.alternate, Le !== null && Ae.delete(Le.key === null ? _e : Le.key)), T = i(
          ft,
          T,
          _e
        ), qe === null ? ve = ft : qe.sibling = ft, qe = ft);
      return e && Ae.forEach(function(_a) {
        return t(w, _a);
      }), Ue && Yn(w, _e), ve;
    }
    function be(w, T, R, X) {
      if (R == null) throw Error(s(151));
      for (var ve = null, qe = null, Ae = T, _e = T = 0, ft = null, Le = R.next(); Ae !== null && !Le.done; _e++, Le = R.next()) {
        Ae.index > _e ? (ft = Ae, Ae = null) : ft = Ae.sibling;
        var _a = _(w, Ae, Le.value, X);
        if (_a === null) {
          Ae === null && (Ae = ft);
          break;
        }
        e && Ae && _a.alternate === null && t(w, Ae), T = i(_a, T, _e), qe === null ? ve = _a : qe.sibling = _a, qe = _a, Ae = ft;
      }
      if (Le.done)
        return n(w, Ae), Ue && Yn(w, _e), ve;
      if (Ae === null) {
        for (; !Le.done; _e++, Le = R.next())
          Le = Q(w, Le.value, X), Le !== null && (T = i(Le, T, _e), qe === null ? ve = Le : qe.sibling = Le, qe = Le);
        return Ue && Yn(w, _e), ve;
      }
      for (Ae = a(Ae); !Le.done; _e++, Le = R.next())
        Le = U(Ae, w, _e, Le.value, X), Le !== null && (e && (ft = Le.alternate, ft !== null && Ae.delete(
          ft.key === null ? _e : ft.key
        )), T = i(Le, T, _e), qe === null ? ve = Le : qe.sibling = Le, qe = Le);
      return e && Ae.forEach(function(f0) {
        return t(w, f0);
      }), Ue && Yn(w, _e), ve;
    }
    function je(w, T, R, X) {
      if (typeof R == "object" && R !== null && R.type === ge && R.key === null && R.props.ref === void 0 && (R = R.props.children), typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case re:
            e: {
              for (var ve = R.key; T !== null; ) {
                if (T.key === ve) {
                  if (ve = R.type, ve === ge) {
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
                  } else if (T.elementType === ve || typeof ve == "object" && ve !== null && ve.$$typeof === ae && Qa(ve) === T.type) {
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
              R.type === ge ? (X = La(
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
          case pe:
            e: {
              for (ve = R.key; T !== null; ) {
                if (T.key === ve)
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
          case ae:
            return R = Qa(R), je(
              w,
              T,
              R,
              X
            );
        }
        if (oe(R))
          return se(
            w,
            T,
            R,
            X
          );
        if ($(R)) {
          if (ve = $(R), typeof ve != "function") throw Error(s(150));
          return R = ve.call(R), be(
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
            qu(R),
            X
          );
        if (R.$$typeof === H)
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
        var ve = je(
          w,
          T,
          R,
          X
        );
        return El = null, ve;
      } catch (Ae) {
        if (Ae === bl || Ae === Mu) throw Ae;
        var qe = Lt(29, Ae, null, w.mode);
        return qe.lanes = X, qe.return = w, qe;
      }
    };
  }
  var ka = rd(!0), sd = rd(!1), ra = !1;
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
    if (a = a.shared, (Ye & 2) !== 0) {
      var l = a.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), a.pending = t, t = wu(e), Qf(e, null, n), t;
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
      var e = yl;
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
      var y = f, C = y.next;
      y.next = null, c === null ? i = C : c.next = C, c = y;
      var z = e.alternate;
      z !== null && (z = z.updateQueue, f = z.lastBaseUpdate, f !== c && (f === null ? z.firstBaseUpdate = C : f.next = C, z.lastBaseUpdate = y));
    }
    if (i !== null) {
      var Q = l.baseState;
      c = 0, z = C = y = null, f = i;
      do {
        var _ = f.lane & -536870913, U = _ !== f.lane;
        if (U ? (He & _) === _ : (a & _) === _) {
          _ !== 0 && _ === Ya && (js = !0), z !== null && (z = z.next = {
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: null,
            next: null
          });
          e: {
            var se = e, be = f;
            _ = t;
            var je = n;
            switch (be.tag) {
              case 1:
                if (se = be.payload, typeof se == "function") {
                  Q = se.call(je, Q, _);
                  break e;
                }
                Q = se;
                break e;
              case 3:
                se.flags = se.flags & -65537 | 128;
              case 0:
                if (se = be.payload, _ = typeof se == "function" ? se.call(je, Q, _) : se, _ == null) break e;
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
          }, z === null ? (C = z = U, y = Q) : z = z.next = U, c |= _;
        if (f = f.next, f === null) {
          if (f = l.shared.pending, f === null)
            break;
          U = f, f = U.next, U.next = null, l.lastBaseUpdate = U, l.shared.pending = null;
        }
      } while (!0);
      z === null && (y = Q), l.baseState = y, l.firstBaseUpdate = C, l.lastBaseUpdate = z, i === null && (l.shared.lanes = 0), ga |= c, e.lanes = c, e.memoizedState = Q;
    }
  }
  function cd(e, t) {
    if (typeof e != "function")
      throw Error(s(191, e));
    e.call(t);
  }
  function od(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        cd(n[e], t);
  }
  var oa = an(null), Iu = an(0);
  function fd(e, t) {
    e = $n, Qe(Iu, e), Qe(oa, t), $n = e | t.baseLanes;
  }
  function Ds() {
    Qe(Iu, $n), Qe(oa, oa.current);
  }
  function Us() {
    $n = Iu.current, Ne(oa), Ne(Iu);
  }
  var _t = an(null), jt = null;
  function fa(e) {
    var t = e.alternate;
    Qe(wt, wt.current & 1), Qe(_t, e), jt === null && (t === null || oa.current !== null || t.memoizedState !== null) && (jt = e);
  }
  function zs(e) {
    Qe(wt, wt.current), Qe(_t, e), jt === null && (jt = e);
  }
  function dd(e) {
    e.tag === 22 ? (Qe(wt, wt.current), Qe(_t, e), jt === null && (jt = e)) : da();
  }
  function da() {
    Qe(wt, wt.current), Qe(_t, _t.current);
  }
  function $t(e) {
    Ne(_t), jt === e && (jt = null), Ne(wt);
  }
  var wt = an(0);
  function Ti(e, t) {
    Qe(_t, _t.current), Qe(wt, t);
  }
  function Ms(e) {
    Ne(wt), Ne(_t), jt === e && (jt = null);
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
  var Kn = 0, Re = null, Je = null, ct = null, Vu = !1, Sl = !1, Za = !1, Gu = 0, Ai = 0, Tl = null, Dv = 0;
  function lt() {
    throw Error(s(321));
  }
  function Hs(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Jt(e[n], t[n])) return !1;
    return !0;
  }
  function qs(e, t, n, a, l, i) {
    return Kn = i, Re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, W.H = e === null || e.memoizedState === null ? Jd : $d, Za = !1, i = n(a, l), Za = !1, Sl && (i = md(
      t,
      n,
      a,
      l
    )), hd(e), i;
  }
  function hd(e) {
    W.H = Ju;
    var t = Je !== null && Je.next !== null;
    if (Kn = 0, ct = Je = Re = null, Vu = !1, Ai = 0, Tl = null, t) throw Error(s(300));
    e === null || ot || (e = e.dependencies, e !== null && Du(e) && (ot = !0));
  }
  function md(e, t, n, a) {
    Re = e;
    var l = 0;
    do {
      if (Sl && (Tl = null), Ai = 0, Sl = !1, 25 <= l) throw Error(s(301));
      if (l += 1, ct = Je = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      W.H = Bv, i = t(n, a);
    } while (Sl);
    return i;
  }
  function Uv() {
    var e = W.H, t = e.useState()[0];
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
    Kn = 0, ct = Je = Re = null, Sl = !1, Ai = Gu = 0, Tl = null;
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
    return Ai += 1, Tl === null && (Tl = []), e = ld(Tl, e, t), t = Re, (ct === null ? t.memoizedState : ct.next) === null && (t = t.alternate, W.H = t === null || t.memoizedState === null ? Jd : $d), e;
  }
  function Xu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ni(e);
      if (e.$$typeof === D) return;
      if (e.$$typeof === H) return Nt(e);
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
        n[a] = J;
    return t.index++, n;
  }
  function kn(e, t) {
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
      var f = c = null, y = null, C = t, z = !1;
      do {
        var Q = C.lane & -536870913;
        if (Q !== C.lane ? (He & Q) === Q : (Kn & Q) === Q) {
          var _ = C.revertLane;
          if (_ === 0)
            y !== null && (y = y.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }), Q === Ya && (z = !0);
          else if ((Kn & _) === _) {
            C = C.next, _ === Ya && (z = !0);
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
            }, y === null ? (f = y = Q, c = i) : y = y.next = Q, Re.lanes |= _, ga |= _;
          Q = C.action, Za && n(i, Q), i = C.hasEagerState ? C.eagerState : n(i, Q);
        } else
          _ = {
            lane: Q,
            revertLane: C.revertLane,
            gesture: C.gesture,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null
          }, y === null ? (f = y = _, c = i) : y = y.next = _, Re.lanes |= Q, ga |= Q;
        C = C.next;
      } while (C !== null && C !== t);
      if (y === null ? c = i : y.next = f, !Jt(i, e.memoizedState) && (ot = !0, z && (n = yl, n !== null)))
        throw n;
      e.memoizedState = i, e.baseState = c, e.baseQueue = y, a.lastRenderedState = i;
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
  function pd(e, t, n) {
    var a = Re, l = ut(), i = Ue;
    if (i) {
      if (n === void 0) throw Error(s(407));
      n = n();
    } else n = t();
    var c = !Jt(
      (Je || l).memoizedState,
      n
    );
    if (c && (l.memoizedState = n, ot = !0), l = l.queue, Ks(yd.bind(null, a, l, e), [
      e
    ]), e = l.getSnapshot !== t || c || ct !== null && (ct.memoizedState.tag & 1) !== 0, Al(
      e ? 9 : 8,
      { destroy: void 0 },
      vd.bind(null, a, l, n, t),
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
  function vd(e, t, n, a) {
    t.value = n, t.getSnapshot = a, bd(t) && Ed(e);
  }
  function yd(e, t, n) {
    return n(function() {
      bd(t) && Ed(e);
    });
  }
  function bd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Jt(e, n);
    } catch {
      return !0;
    }
  }
  function Ed(e) {
    var t = qa(e, 2);
    t !== null && Gt(t, e, 2);
  }
  function Xs(e) {
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
      lastRenderedReducer: kn,
      lastRenderedState: e
    }, t;
  }
  function Sd(e, t, n, a) {
    return e.baseState = n, Gs(
      e,
      Je,
      typeof a == "function" ? a : kn
    );
  }
  function zv(e, t, n, a, l) {
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
      W.T !== null ? n(!0) : i.isTransition = !1, a(i), n = t.pending, n === null ? (i.next = t.pending = i, Td(t, i)) : (i.next = n.next, t.pending = n.next = i);
    }
  }
  function Td(e, t) {
    var n = t.action, a = t.payload, l = e.state;
    if (t.isTransition) {
      var i = W.T, c = {};
      c.types = i !== null ? i.types : null, W.T = c;
      try {
        var f = n(l, a), y = W.S;
        y !== null && y(c, f), Ad(e, t, f);
      } catch (C) {
        Qs(e, t, C);
      } finally {
        i !== null && c.types !== null && (i.types = c.types), W.T = i;
      }
    } else
      try {
        i = n(l, a), Ad(e, t, i);
      } catch (C) {
        Qs(e, t, C);
      }
  }
  function Ad(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        Nd(e, t, a);
      },
      function(a) {
        return Qs(e, t, a);
      }
    ) : Nd(e, t, n);
  }
  function Nd(e, t, n) {
    t.status = "fulfilled", t.value = n, _d(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, Td(e, n)));
  }
  function Qs(e, t, n) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = n, _d(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function _d(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function wd(e, t) {
    return t;
  }
  function Od(e, t) {
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
      lastRenderedReducer: wd,
      lastRenderedState: t
    }, n.queue = a, n = Kd.bind(
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
    }, a.queue = l, n = zv.bind(
      null,
      Re,
      l,
      i,
      n
    ), l.dispatch = n, a.memoizedState = e, [t, n, !1];
  }
  function Cd(e) {
    var t = ut();
    return xd(t, Je, e);
  }
  function xd(e, t, n) {
    if (t = Gs(
      e,
      t,
      wd
    )[0], e = Qu(kn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
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
      Mv.bind(null, l, n),
      null
    )), [a, i, e];
  }
  function Mv(e, t) {
    e.action = t;
  }
  function Rd(e) {
    var t = ut(), n = Je;
    if (n !== null)
      return xd(t, n, e);
    ut(), t = t.memoizedState, n = ut();
    var a = n.queue.dispatch;
    return n.memoizedState = e, [t, a, !1];
  }
  function Al(e, t, n, a) {
    return e = { tag: e, create: n, deps: a, inst: t, next: null }, t = Re.updateQueue, t === null && (t = Yu(), Re.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
  }
  function jd() {
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
  function ku(e, t, n, a) {
    var l = ut();
    a = a === void 0 ? null : a;
    var i = l.memoizedState.inst;
    Je !== null && a !== null && Hs(a, Je.memoizedState.deps) ? l.memoizedState = Al(t, i, n, a) : (Re.flags |= e, l.memoizedState = Al(
      1 | t,
      i,
      n,
      a
    ));
  }
  function Dd(e, t) {
    Ku(8390656, 8, e, t);
  }
  function Ks(e, t) {
    ku(2048, 8, e, t);
  }
  function Hv(e) {
    Re.flags |= 4;
    var t = Re.updateQueue;
    if (t === null)
      t = Yu(), Re.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function Ud(e) {
    var t = ut().memoizedState;
    return Hv({ ref: t, nextImpl: e }), function() {
      if ((Ye & 2) !== 0) throw Error(s(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function zd(e, t) {
    return ku(4, 2, e, t);
  }
  function Md(e, t) {
    return ku(4, 4, e, t);
  }
  function Hd(e, t) {
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
    n = n != null ? n.concat([e]) : null, ku(4, 4, Hd.bind(null, t, e), n);
  }
  function ks() {
  }
  function Ld(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && Hs(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
  }
  function Id(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && Hs(t, a[1]))
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
  function Zs(e, t, n) {
    return n === void 0 || (Kn & 1073741824) !== 0 && (He & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = Jh(), Re.lanes |= e, ga |= e, n);
  }
  function Bd(e, t, n, a) {
    return Jt(n, t) ? n : oa.current !== null ? (e = Zs(e, n, a), Jt(e, t) || (ot = !0), e) : (Kn & 106) === 0 || (Kn & 1073741824) !== 0 && (He & 261930) === 0 ? (ot = !0, e.memoizedState = n) : (e = Jh(), Re.lanes |= e, ga |= e, t);
  }
  function Vd(e, t, n, a, l) {
    var i = fe.p;
    fe.p = i !== 0 && 8 > i ? i : 8;
    var c = W.T, f = {};
    f.types = c !== null ? c.types : null, W.T = f, Fs(e, !1, t, n);
    try {
      var y = l(), C = W.S;
      if (C !== null && C(f, y), y !== null && typeof y == "object" && typeof y.then == "function") {
        var z = jv(
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
      fe.p = i, c !== null && f.types !== null && (c.types = f.types), W.T = c;
    }
  }
  function qv() {
  }
  function Js(e, t, n, a) {
    if (e.tag !== 5) throw Error(s(476));
    var l = Gd(e).queue;
    Vd(
      e,
      l,
      t,
      We,
      n === null ? qv : function() {
        return Yd(e), n(a);
      }
    );
  }
  function Gd(e) {
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
        lastRenderedReducer: kn,
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
        lastRenderedReducer: kn,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Yd(e) {
    var t = Gd(e);
    t.next === null && (t = e.alternate.memoizedState), _i(
      e,
      t.next.queue,
      {},
      en()
    );
  }
  function $s() {
    return Nt(Gl);
  }
  function Xd() {
    return ut().memoizedState;
  }
  function Qd() {
    return ut().memoizedState;
  }
  function Lv(e) {
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
  function Iv(e, t, n) {
    var a = en();
    n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Zu(e) ? kd(t, n) : (n = ps(e, t, n, a), n !== null && (Gt(n, e, a), Zd(n, t, a)));
  }
  function Kd(e, t, n) {
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
    if (Zu(e)) kd(t, l);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
        try {
          var c = t.lastRenderedState, f = i(c, n);
          if (l.hasEagerState = !0, l.eagerState = f, Jt(f, c))
            return _u(e, t, l, 0), Fe === null && Nu(), !1;
        } catch {
        }
      if (n = ps(e, t, l, a), n !== null)
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
    }, Zu(e)) {
      if (t) throw Error(s(479));
    } else
      t = ps(
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
  function kd(e, t) {
    Sl = Vu = !0;
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
    readContext: Nt,
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
  }, Jd = {
    readContext: Nt,
    use: Xu,
    useCallback: function(e, t) {
      return Ut().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Nt,
    useEffect: Dd,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, Ku(
        4194308,
        4,
        Hd.bind(null, t, e),
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
      }, a.queue = e, e = e.dispatch = Iv.bind(
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
      var t = e.queue, n = Kd.bind(null, Re, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: ks,
    useDeferredValue: function(e, t) {
      var n = Ut();
      return Zs(n, e, t);
    },
    useTransition: function() {
      var e = Xs(!1);
      return e = Vd.bind(
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
        (He & 127) !== 0 || gd(a, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return l.queue = i, Dd(yd.bind(null, a, i, e), [
        e
      ]), a.flags |= 2048, Al(
        9,
        { destroy: void 0 },
        vd.bind(
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
        n = (a & ~(1 << 32 - kt(a) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Gu++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = Dv++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: $s,
    useFormState: Od,
    useActionState: Od,
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
      return Ut().memoizedState = Lv.bind(
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
  }, $d = {
    readContext: Nt,
    use: Xu,
    useCallback: Ld,
    useContext: Nt,
    useEffect: Ks,
    useImperativeHandle: qd,
    useInsertionEffect: zd,
    useLayoutEffect: Md,
    useMemo: Id,
    useReducer: Qu,
    useRef: jd,
    useState: function() {
      return Qu(kn);
    },
    useDebugValue: ks,
    useDeferredValue: function(e, t) {
      var n = ut();
      return Bd(
        n,
        Je.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Qu(kn)[0], t = ut().memoizedState;
      return [
        typeof e == "boolean" ? e : Ni(e),
        t
      ];
    },
    useSyncExternalStore: pd,
    useId: Xd,
    useHostTransitionStatus: $s,
    useFormState: Cd,
    useActionState: Cd,
    useOptimistic: function(e, t) {
      var n = ut();
      return Sd(n, Je, e, t);
    },
    useMemoCache: Vs,
    useCacheRefresh: Qd,
    useEffectEvent: Ud
  }, Bv = {
    readContext: Nt,
    use: Xu,
    useCallback: Ld,
    useContext: Nt,
    useEffect: Ks,
    useImperativeHandle: qd,
    useInsertionEffect: zd,
    useLayoutEffect: Md,
    useMemo: Id,
    useReducer: Ys,
    useRef: jd,
    useState: function() {
      return Ys(kn);
    },
    useDebugValue: ks,
    useDeferredValue: function(e, t) {
      var n = ut();
      return Je === null ? Zs(n, e, t) : Bd(
        n,
        Je.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Ys(kn)[0], t = ut().memoizedState;
      return [
        typeof e == "boolean" ? e : Ni(e),
        t
      ];
    },
    useSyncExternalStore: pd,
    useId: Xd,
    useHostTransitionStatus: $s,
    useFormState: Rd,
    useActionState: Rd,
    useOptimistic: function(e, t) {
      var n = ut();
      return Je !== null ? Sd(n, Je, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Vs,
    useCacheRefresh: Qd,
    useEffectEvent: Ud
  };
  function Ps(e, t, n, a) {
    t = e.memoizedState, n = n(a, t), n = n == null ? t : ue({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
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
  function Fd(e, t, n, a, l, i, c) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, i, c) : t.prototype && t.prototype.isPureReactComponent ? !fi(n, a) || !fi(l, i) : !0;
  }
  function Pd(e, t, n, a) {
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
      n === t && (n = ue({}, n));
      for (var l in e)
        n[l] === void 0 && (n[l] = e[l]);
    }
    return n;
  }
  function Wd(e) {
    Au(e);
  }
  function eh(e) {
    console.error(e);
  }
  function th(e) {
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
  function nh(e, t, n) {
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
  function ah(e) {
    return e = sa(e), e.tag = 3, e;
  }
  function lh(e, t, n, a) {
    var l = n.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var i = a.value;
      e.payload = function() {
        return l(i);
      }, e.callback = function() {
        nh(t, n, a);
      };
    }
    var c = n.stateNode;
    c !== null && typeof c.componentDidCatch == "function" && (e.callback = function() {
      nh(t, n, a), typeof l != "function" && (va === null ? va = /* @__PURE__ */ new Set([this]) : va.add(this));
      var f = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: f !== null ? f : ""
      });
    });
  }
  function Vv(e, t, n, a, l) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = n.alternate, t !== null && Va(
        t,
        n,
        l,
        !0
      ), n = _t.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
          case 19:
            return jt === null ? vr() : n.alternate === null && it === 0 && (it = 3), n.flags &= -257, n.flags |= 65536, n.lanes = l, a === Hu ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Lc(e, a, l)), !1;
          case 22:
            return n.flags |= 65536, a === Hu ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
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
      return t = _t.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = l, a !== Es && (e = Error(s(422), { cause: a }), mi(rn(e, n)))) : (a !== Es && (t = Error(s(423), {
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
            return n.flags |= 65536, l &= -l, n.lanes |= l, l = ah(l), lh(
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
  function pt(e, t, n, a) {
    t.child = e === null ? sd(t, null, n, a) : ka(
      t,
      e.child,
      n,
      a
    );
  }
  function ih(e, t, n, a, l) {
    n = n.render;
    var i = t.ref;
    if ("ref" in a) {
      var c = {};
      for (var f in a)
        f !== "ref" && (c[f] = a[f]);
    } else c = a;
    return Ga(t), a = qs(
      e,
      t,
      n,
      c,
      i,
      l
    ), f = Ls(), e !== null && !ot ? (Is(e, t, l), Zn(e, t, l)) : (Ue && f && xu(t), t.flags |= 1, pt(e, t, a, l), t.child);
  }
  function uh(e, t, n, a, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !gs(i) && i.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = i, rh(
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
        return Zn(e, t, l);
    }
    return t.flags |= 1, e = Gn(i, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function rh(e, t, n, a, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (fi(i, a) && e.ref === t.ref)
        if (ot = !1, t.pendingProps = a = i, cc(e, l))
          (e.flags & 131072) !== 0 && (ot = !0);
        else
          return t.lanes = e.lanes, Zn(e, t, l);
    }
    return nc(
      e,
      t,
      n,
      a,
      l
    );
  }
  function sh(e, t, n, a) {
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
        return ch(
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
        ), i !== null ? fd(t, i) : Ds(), dd(t);
      else
        return a = t.lanes = 536870912, ch(
          e,
          t,
          i !== null ? i.baseLanes | n : n,
          n,
          a
        );
    } else
      i !== null ? (zu(t, i.cachePool), fd(t, i), da(), t.memoizedState = null) : (e !== null && zu(t, null), Ds(), da());
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
  function ch(e, t, n, a, l) {
    var i = ws();
    return i = i === null ? null : { parent: st._currentValue, pool: i }, t.memoizedState = {
      baseLanes: n,
      cachePool: i
    }, e !== null && zu(t, null), Ds(), dd(t), e !== null && Va(e, t, a, !0), t.childLanes = l, null;
  }
  function Fu(e, t) {
    return t = Pu(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function oh(e, t, n) {
    return ka(t, e.child, null, n), e = Fu(t, t.pendingProps), e.flags |= 2, $t(t), t.memoizedState = null, e;
  }
  function Gv(e, t, n) {
    var a = t.pendingProps, l = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Ue) {
        if (a.mode === "hidden")
          return e = Fu(t, a), t.lanes = 536870912, e.memoizedState = { baseLanes: 0, cachePool: null }, wi(null, e);
        if (zs(t), (e = et) ? (e = Hm(
          e,
          on
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: na !== null ? { id: _n, overflow: wn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = kf(e), n.return = t, t.child = n, vt = t, et = null)) : e = null, e === null) throw la(t);
        return t.lanes = 536870912, null;
      }
      return Fu(t, a);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var c = i.dehydrated;
      if (zs(t), l)
        if (t.flags & 256)
          t.flags &= -257, t = oh(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(s(558));
      else if (ot || Va(e, t, n, !1), l = (n & e.childLanes) !== 0, ot || l) {
        if (oa.current === null) {
          if (a = Fe, a !== null && (c = Jo(a, n), c !== 0 && c !== i.retryLane))
            throw i.retryLane = c, qa(e, c), Gt(a, e, c), tc;
          vr();
        }
        t = oh(
          e,
          t,
          n
        );
      } else
        e = i.treeContext, et = dn(c.nextSibling), vt = t, Ue = !0, aa = null, on = !1, e !== null && $f(t, e), t = Fu(t, a), t.flags |= 134221824;
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
  function nc(e, t, n, a, l) {
    return Ga(t), n = qs(
      e,
      t,
      n,
      a,
      void 0,
      l
    ), a = Ls(), e !== null && !ot ? (Is(e, t, l), Zn(e, t, l)) : (Ue && a && xu(t), t.flags |= 1, pt(e, t, n, l), t.child);
  }
  function fh(e, t, n, a, l, i) {
    return Ga(t), t.updateQueue = null, n = md(
      t,
      a,
      n,
      l
    ), hd(e), a = Ls(), e !== null && !ot ? (Is(e, t, i), Zn(e, t, i)) : (Ue && a && xu(t), t.flags |= 1, pt(e, t, n, i), t.child);
  }
  function dh(e, t, n, a, l) {
    if (Ga(t), t.stateNode === null) {
      var i = ml, c = n.contextType;
      typeof c == "object" && c !== null && (i = Nt(c)), i = new n(a, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Ws, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = a, i.state = t.memoizedState, i.refs = {}, Cs(t), c = n.contextType, i.context = typeof c == "object" && c !== null ? Nt(c) : ml, i.state = t.memoizedState, c = n.getDerivedStateFromProps, typeof c == "function" && (Ps(
        t,
        n,
        c,
        a
      ), i.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (c = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), c !== i.state && Ws.enqueueReplaceState(i, i.state, null), Si(t, a, i, l), Ei(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      i = t.stateNode;
      var f = t.memoizedProps, y = Ja(n, f);
      i.props = y;
      var C = i.context, z = n.contextType;
      c = ml, typeof z == "object" && z !== null && (c = Nt(z));
      var Q = n.getDerivedStateFromProps;
      z = typeof Q == "function" || typeof i.getSnapshotBeforeUpdate == "function", f = t.pendingProps !== f, z || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (f || C !== c) && Pd(
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
      ), C = t.memoizedState), (y = ra || Fd(
        t,
        n,
        y,
        a,
        _,
        C,
        c
      )) ? (z || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = C), i.props = a, i.state = C, i.context = c, a = y) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      i = t.stateNode, xs(e, t), c = t.memoizedProps, z = Ja(n, c), i.props = z, Q = t.pendingProps, _ = i.context, C = n.contextType, y = ml, typeof C == "object" && C !== null && (y = Nt(C)), f = n.getDerivedStateFromProps, (C = typeof f == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (c !== Q || _ !== y) && Pd(
        t,
        i,
        a,
        y
      ), ra = !1, _ = t.memoizedState, i.state = _, Si(t, a, i, l), Ei();
      var U = t.memoizedState;
      c !== Q || _ !== U || ra || e !== null && e.dependencies !== null && Du(e.dependencies) ? (typeof f == "function" && (Ps(
        t,
        n,
        f,
        a
      ), U = t.memoizedState), (z = ra || Fd(
        t,
        n,
        z,
        a,
        _,
        U,
        y
      ) || e !== null && e.dependencies !== null && Du(e.dependencies)) ? (C || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, U, y), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        a,
        U,
        y
      )), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || c === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = U), i.props = a, i.state = U, i.context = y, a = z) : (typeof i.componentDidUpdate != "function" || c === e.memoizedProps && _ === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || c === e.memoizedProps && _ === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return i = a, Nl(e, t), a = (t.flags & 128) !== 0, i || a ? (i = t.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && a ? (t.child = ka(
      t,
      e.child,
      null,
      l
    ), t.child = ka(
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
  function hh(e, t, n, a) {
    return Ia(), t.flags |= 256, pt(e, t, n, a), t.child;
  }
  var ac = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function lc(e) {
    return { baseLanes: e, cachePool: nd() };
  }
  function ic(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Wt), e;
  }
  function mh(e, t, n) {
    var a = t.pendingProps, l = !1, i = (t.flags & 128) !== 0, c;
    if ((c = i) || (c = e !== null && e.memoizedState === null ? !1 : (wt.current & 2) !== 0), c && (l = !0, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ue) {
        if (l ? fa(t) : da(), (e = et) ? (e = Hm(
          e,
          on
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: na !== null ? { id: _n, overflow: wn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = kf(e), n.return = t, t.child = n, vt = t, et = null)) : e = null, e === null) throw la(t);
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
      var y = f.dehydrated;
      if (y !== null)
        return Yv(
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
    ), l.flags |= 2), l.return = t, a.return = t, a.sibling = l, t.child = a, wi(null, a), a = t.child, l = e.child.memoizedState, l === null ? l = lc(n) : (i = l.cachePool, i !== null ? (f = st._currentValue, i = i.parent !== f ? { parent: f, pool: f } : i) : i = nd(), l = {
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
    return ka(t, e.child, null, n), e = uc(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Yv(e, t, n, a, l, i, c, f) {
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
      ), i.flags |= 2, l.return = t, i.return = t, l.sibling = i, t.child = l, ka(t, e.child, null, f), l = t.child, l.memoizedState = lc(f), l.childLanes = ic(
        e,
        a,
        f
      ), t.memoizedState = ac, wi(null, l));
    if (fa(t), lo(i)) {
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
      if (a = Fe, a !== null && (l = Jo(
        a,
        f
      ), l !== 0 && l !== c.retryLane))
        throw c.retryLane = l, qa(e, l), Gt(a, e, l), tc;
      return ao(i) || vr(), Wu(
        e,
        t,
        f
      );
    }
    return ao(i) ? (t.flags |= 192, t.child = e.child, null) : (e = c.treeContext, et = dn(i.nextSibling), vt = t, Ue = !0, aa = null, on = !1, e !== null && $f(t, e), t = uc(
      t,
      l.children
    ), t.flags |= 134221824, t);
  }
  function ph(e, t, n) {
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
    var c = wt.current;
    if (t.flags & 128)
      return Ti(t, c), null;
    var f = (c & 2) !== 0;
    if (f ? (c = c & 1 | 2, t.flags |= 128) : c &= 1, Ti(t, c), l === "backwards" && e !== null ? (rc(e), pt(e, t, a, n), rc(e)) : pt(e, t, a, n), a = Ue ? hi : 0, !f && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && ph(e, n, t);
        else if (e.tag === 19)
          ph(e, n, t);
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
  function vh(e, t, n) {
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
  function cc(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Du(e)));
  }
  function Xv(e, t, n) {
    switch (t.tag) {
      case 3:
        K(t, t.stateNode.containerInfo), ia(t, st, e.memoizedState.cache), Ia();
        break;
      case 27:
      case 5:
        Be(t);
        break;
      case 4:
        K(t, t.stateNode.containerInfo);
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
          return a || (n & l) !== 0 ? mh(e, t, n) : (fa(t), e = Zn(
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
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Ti(t, wt.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, sh(
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
  function yh(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        ot = !0;
      else {
        if (!cc(e, n) && (t.flags & 128) === 0)
          return ot = !1, Xv(
            e,
            t,
            n
          );
        ot = (e.flags & 131072) !== 0;
      }
    else
      ot = !1, Ue && (t.flags & 1048576) !== 0 && Jf(t, hi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = Qa(t.elementType), t.type = e, typeof e == "function")
            gs(e) ? (a = Ja(e, a), t.tag = 1, t = dh(
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
                t.tag = 11, t = ih(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              } else if (l === F) {
                t.tag = 14, t = uh(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              } else if (l === H) {
                t.tag = 10, t.type = e, t = vh(
                  null,
                  t,
                  n
                );
                break e;
              }
            }
            throw t = de(e) || e, Error(s(306, t, ""));
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
        ), dh(
          e,
          t,
          a,
          l,
          n
        );
      case 3:
        e: {
          if (K(
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
              t = hh(
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
              ), mi(l), t = hh(
                e,
                t,
                a,
                n
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, et = dn(e.firstChild), vt = t, Ue = !0, aa = null, on = !0, n = sd(
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
        return Nl(e, t), e === null ? (n = Ym(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : Ue || (t.stateNode = Tm(
          t.type,
          t.pendingProps,
          Z.current,
          t
        )) : t.memoizedState = Ym(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Be(t), e === null && Ue && (a = t.stateNode = Im(
          t.type,
          t.pendingProps,
          Z.current
        ), vt = t, on = !0, l = et, Ea(t.type) ? (io = l, et = dn(a.firstChild)) : et = l), pt(
          e,
          t,
          t.pendingProps.children,
          n
        ), Nl(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ue && ((l = a = et) && (a = Ly(
          a,
          t.type,
          t.pendingProps,
          on
        ), a !== null ? (t.stateNode = a, vt = t, et = dn(a.firstChild), on = !1, l = !0) : l = !1), l || la(t)), Be(t), l = t.type, i = t.pendingProps, c = e !== null ? e.memoizedProps : null, a = i.children, $c(l, i) ? a = null : c !== null && $c(l, c) && (t.flags |= 32), t.memoizedState !== null && (l = qs(
          e,
          t,
          Uv,
          null,
          null,
          n
        ), Gl._currentValue = l), Nl(e, t), pt(e, t, a, n), t.child;
      case 6:
        return e === null && Ue && ((e = n = et) && (n = Iy(
          n,
          t.pendingProps,
          on
        ), n !== null ? (t.stateNode = n, vt = t, et = null, e = !0) : e = !1), e || la(t)), null;
      case 13:
        return mh(e, t, n);
      case 4:
        return K(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = ka(
          t,
          null,
          a,
          n
        ) : pt(e, t, a, n), t.child;
      case 11:
        return ih(
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
        return vh(e, t, n);
      case 9:
        return l = t.type._context, a = t.pendingProps.children, Ga(t), l = Nt(l), a = a(l), t.flags |= 1, pt(e, t, a, n), t.child;
      case 14:
        return uh(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return rh(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return sc(e, t, n);
      case 31:
        return Gv(e, t, n);
      case 22:
        return sh(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return Ga(t), a = Nt(st), e === null ? (l = ws(), l === null && (l = Fe, i = Ns(), l.pooledCache = i, i.refCount++, i !== null && (l.pooledCacheLanes |= n), l = i), t.memoizedState = { parent: a, cache: l }, Cs(t), ia(t, st, l)) : ((e.lanes & n) !== 0 && (xs(e, t), Si(t, null, null, n), Ei()), l = e.memoizedState, i = t.memoizedState, l.parent !== a ? (l = { parent: a, cache: a }, t.memoizedState = l, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = l), ia(t, st, a)) : (a = i.cache, ia(t, st, a), a !== l.cache && As(
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
  function oc(e, t, n, a, l) {
    var i;
    if ((i = (e.mode & 32) !== 0) && (i = n === null ? km(t, a) : km(t, a) && (a.src !== n.src || a.srcSet !== n.srcSet)), i) {
      if (e.flags |= 16777216, (l & 335544128) === l)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Wh()) e.flags |= 8192;
        else
          throw Ka = Hu, Os;
    } else e.flags &= -16777217;
  }
  function bh(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Zm(t))
      if (Wh()) e.flags |= 8192;
      else
        throw Ka = Hu, Os;
  }
  function tr(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Ko() : 536870912, e.lanes |= t, xl |= t);
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
  function Qv(e, t, n) {
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
        return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Qn(st), Se(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (vl(t) ? Jn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ss())), tt(t), null;
      case 26:
        var l = t.type, i = t.memoizedState;
        return e === null ? (Jn(t), i !== null ? (tt(t), bh(t, i)) : (tt(t), oc(
          t,
          l,
          null,
          a,
          n
        ))) : i ? i !== e.memoizedState ? (Jn(t), tt(t), bh(t, i)) : (tt(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && Jn(t), tt(t), oc(
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
          e = Xt.current, vl(t) ? Ff(t) : (e = Im(l, a, n), t.stateNode = e, Jn(t));
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
            Ff(t);
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
            i[At] = t, i[qt] = a;
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
            e: switch (Ct(i, l, a), l) {
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
          if (e = Z.current, vl(t)) {
            if (e = t.stateNode, n = t.memoizedProps, a = null, l = vt, l !== null)
              switch (l.tag) {
                case 27:
                case 5:
                  a = l.memoizedProps;
              }
            e[At] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || ym(e.nodeValue, n)), e || la(t, !0);
          } else
            e = Li(e).createTextNode(
              a
            ), e[At] = t, t.stateNode = e;
        }
        return tt(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = vl(t), n !== null) {
            if (e === null) {
              if (!a) throw Error(s(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(557));
              e[At] = t;
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
          if (l = vl(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!l) throw Error(s(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(s(317));
              l[At] = t;
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
        return Se(), e === null && Qc(t.stateNode.containerInfo), t.flags |= 67108864, tt(t), null;
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
                    Kf(n, e), n = n.sibling;
                  return Ti(
                    t,
                    wt.current & 1 | 2
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
          return a.rendering = e, a.tail = e.sibling, a.renderingStartTime = Qt(), e.sibling = null, i = wt.current, i = l ? i & 1 | 2 : i & 1, a.tailMode === "visible" || a.tailMode === "collapsed" || !n || Ue ? Ti(t, i) : (n = i, Qe(_t, t), Qe(wt, n), jt === null && (jt = t)), Ue && Yn(t, a.treeForkCount), e;
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
  function Kv(e, t) {
    switch (bs(t), t.tag) {
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
        return Ms(t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null), t.flags |= 4, t) : null;
      case 4:
        return Se(), null;
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
  function Eh(e, t) {
    switch (bs(t), t.tag) {
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
      ke(t, t.return, f);
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
              var y = n, C = f;
              try {
                C();
              } catch (z) {
                ke(
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
      ke(t, t.return, z);
    }
  }
  function Sh(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        od(t, n);
      } catch (a) {
        ke(e, e.return, a);
      }
    }
  }
  function Th(e, t, n) {
    n.props = Ja(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      ke(e, t, a);
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
            (l.ref === null || l.ref.name !== i) && (l.ref = xm(i)), a = l.ref;
            break;
          case 7:
            if (e.stateNode === null) {
              var c = new tn(e);
              p(
                e.child,
                !1,
                Hy,
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
      ke(e, t, f);
    }
  }
  function Ot(e, t) {
    var n = e.ref, a = e.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (l) {
          ke(e, t, l);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (l) {
          ke(e, t, l);
        }
      else n.current = null;
  }
  function nr(e, t) {
    if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && t !== null)
      for (var n = 0; n < t.length; n++)
        Mm(
          e.stateNode,
          t[n]
        );
  }
  function Ah(e) {
    for (var t = e.return; t !== null && (dc(t) && Mm(e.stateNode, t.stateNode), !fc(t)); )
      t = t.return;
  }
  function xi(e) {
    for (var t = e.return; t !== null && (dc(t) && qy(e.stateNode, t.stateNode), !fc(t)); )
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
      ke(e, e.return, l);
    }
  }
  function mc(e, t, n) {
    try {
      var a = e.stateNode;
      yy(a, e.type, n, t), a[qt] = t;
    } catch (l) {
      ke(e, e.return, l);
    }
  }
  function Nh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ea(e.type) || e.tag === 4;
  }
  function pc(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Nh(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Ea(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function gc(e, t, n, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      l = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(l, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(l), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = Nn)), nr(e, a), Ve = !0;
    else if (l !== 4 && (l === 27 && (nr(e, a), a = null, Ea(e.type) && (n = e.stateNode, t = null)), e = e.child, e !== null))
      for (gc(
        e,
        t,
        n,
        a
      ), e = e.sibling; e !== null; )
        gc(
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
  function _h(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var a = e.type, l = t.attributes; l.length; )
        t.removeAttributeNode(l[0]);
      Ct(t, a, n), t[At] = e, t[qt] = n;
    } catch (i) {
      ke(e, e.return, i);
    }
  }
  var lr = !1, Ft = null;
  function wh(e) {
    (e.tag === 30 || (e.subtreeFlags & 33554432) !== 0) && (lr = !0);
  }
  var Cn = null;
  function Oh() {
    var e = Cn;
    return Cn = null, e;
  }
  var It = 0;
  function _l(e, t, n, a, l) {
    return It = 0, Ch(
      e.child,
      t,
      n,
      a,
      l
    );
  }
  function Ch(e, t, n, a, l) {
    for (var i = !1; e !== null; ) {
      if (e.tag === 5) {
        var c = e.stateNode;
        if (a !== null) {
          var f = Wc(c);
          a.push(f), f.view && (i = !0);
        } else
          i || Wc(c).view && (i = !0);
        lr = !0, Om(
          c,
          It === 0 ? t : t + "_" + It,
          n
        ), It++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && l || Ch(
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
      e.tag === 5 ? Cm(e.stateNode, e.memoizedProps) : (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && t || xn(
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
  function vc(e, t) {
    if (e.tag === 30) {
      var n = e.stateNode, a = e.memoizedProps, l = Bn(a, n), i = Vn(
        a.default,
        n.paired ? a.share : a.enter
      );
      i !== "none" ? _l(e, l, i, null, !1) ? (ir(e), n.paired || t || Ul(e, a.onEnter)) : xn(e.child, !1) : ir(e);
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
      l !== "none" && (_l(e, n, l, null, !1) ? a !== void 0 ? (l = e.stateNode, a.paired = l, l.paired = a, Ft.delete(n), Ul(e, t.onShare)) : Ul(e, t.onExit) : xn(e.child, !1)), Ft !== null && yc(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        bc(e), e = e.sibling;
    else
      Ft !== null && yc(e);
  }
  function xh(e) {
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
        (e.subtreeFlags & 33554432) !== 0 && xh(e);
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
  function Rh(e) {
    for (e = e.child; e !== null; )
      e.tag === 30 ? xn(e.child, !1) : (e.subtreeFlags & 33554432) !== 0 && Rh(e), e = e.sibling;
  }
  function Sc(e, t, n, a, l, i, c) {
    for (var f = !1; t !== null; ) {
      if (t.tag === 5) {
        var y = t.stateNode;
        if (i !== null && It < i.length) {
          var C = i[It], z = Wc(y);
          (C.view || z.view) && (f = !0);
          var Q;
          if (Q = (e.flags & 4) === 0)
            if (z.clip) Q = !0;
            else {
              Q = C.rect;
              var _ = z.rect;
              Q = Q.y !== _.y || Q.x !== _.x || Q.height !== _.height || Q.width !== _.width;
            }
          Q && (e.flags |= 4), z.abs ? z = !C.abs : (C = C.rect, z = z.rect, z = C.height !== z.height || C.width !== z.width), z && (e.flags |= 32);
        } else e.flags |= 32;
        (e.flags & 4) !== 0 && Om(
          y,
          It === 0 ? n : n + "_" + It,
          l
        ), f && (e.flags & 4) !== 0 || (Cn === null && (Cn = []), Cn.push(
          y,
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
  function jh(e, t) {
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
        ), (e.flags & 4) !== 0 && l && Ul(e, n.onUpdate);
      } else
        (e.subtreeFlags & 33554432) !== 0 && jh(e);
      e = e.sibling;
    }
  }
  var yt = !1, Xe = !1, Rn = !1, Tc = !1, Dh = typeof WeakSet == "function" ? WeakSet : Set, bt = null, jn = !1, Ri = !1, rr = !1, Ac = !1;
  function kv(e, t, n) {
    if (e = e.containerInfo, Zc = Yl, e = Hf(e), cs(e)) {
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
            var f = 0, y = -1, C = -1, z = 0, Q = 0, _ = e, U = null;
            t: for (; ; ) {
              for (var se; _ !== a || i !== 0 && _.nodeType !== 3 || (y = f + i), _ !== c || l !== 0 && _.nodeType !== 3 || (C = f + l), _.nodeType === 3 && (f += _.nodeValue.length), (se = _.firstChild) !== null; )
                U = _, _ = se;
              for (; ; ) {
                if (_ === e) break t;
                if (U === a && ++z === i && (y = f), U === c && ++Q === l && (C = f), (se = _.nextSibling) !== null) break;
                _ = U, U = _.parentNode;
              }
              _ = se;
            }
            a = y === -1 || C === -1 ? null : { start: y, end: C };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Jc = { focusedElem: e, selectionRange: a }, Yl = !1, n = (n & 335544064) === n, bt = t, t = n ? 9270 : 1024; bt !== null; ) {
      if (e = bt, n && (a = e.deletions, a !== null))
        for (i = 0; i < a.length; i++)
          n && bc(a[i]);
      if (e.alternate === null && (e.flags & 2) !== 0)
        n && wh(e), sr(n);
      else {
        if (e.tag === 22) {
          if (a = e.alternate, e.memoizedState !== null) {
            a !== null && a.memoizedState === null && n && bc(a), sr(n);
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            n && wh(e), sr(n);
            continue;
          }
        }
        a = e.child, (e.subtreeFlags & t) !== 0 && a !== null ? (a.return = e, bt = a) : (n && xh(e), sr(n));
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
              ke(t, t.return, f);
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
  function Uh(e, t, n) {
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
              ke(n, n.return, c);
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
              ke(
                n,
                n.return,
                c
              );
            }
          }
        a & 64 && Sh(n), a & 512 && On(n, n.return);
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
            od(e, t);
          } catch (c) {
            ke(n, n.return, c);
          }
        }
        break;
      case 27:
        t === null && a & 4 && _h(n);
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
        Dn(e, n), a & 4 && Lh(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = iy.bind(
          null,
          n
        ), By(e, n))));
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
  function Nc(e, t) {
    for (e = e.child; e !== null; )
      zh(e, t), e = e.sibling;
  }
  function zh(e, t) {
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
          ke(e, e.return, y);
        }
        _c(e, t);
        break;
      case 6:
        try {
          e.stateNode.nodeValue = t ? "" : e.memoizedProps, Ve = !0;
        } catch (y) {
          ke(e, e.return, y);
        }
        break;
      case 18:
        try {
          var f = e.stateNode;
          t ? wm(f, !0) : wm(e.stateNode, !1);
        } catch (y) {
          ke(e, e.return, y);
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
              zh(n, a);
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
  function Mh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Mh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && hu(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var nt = null, Bt = !1;
  function yn(e, t, n) {
    for (n = n.child; n !== null; )
      Hh(e, t, n), n = n.sibling;
  }
  function Hh(e, t, n) {
    if (Kt && typeof Kt.onCommitFiberUnmount == "function")
      try {
        Kt.onCommitFiberUnmount(Wl, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Xe || Ot(n, t), yn(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !Xe && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Xe || Ot(n, t), xi(n);
        var a = nt, l = Bt;
        Ea(n.type) && (nt = n.stateNode, Bt = !1), yn(
          e,
          t,
          n
        ), Bm(
          n.stateNode,
          n.type,
          n.memoizedProps
        ), nt = a, Bt = l;
        break;
      case 5:
        Xe || Ot(n, t), xi(n);
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
              ke(
                n,
                t,
                i
              );
            }
          else
            try {
              nt.removeChild(n.stateNode), Ve = !0;
            } catch (i) {
              ke(
                n,
                t,
                i
              );
            }
        break;
      case 18:
        nt !== null && (Bt ? (e = nt, _m(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), Xl(e)) : _m(nt, n.stateNode));
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
        Xe || (Ot(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && Th(
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
        Ot(n, t), yn(
          e,
          t,
          n
        );
        break;
      case 7:
        Xe || Ot(n, t), yn(
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
        Xl(e);
      } catch (n) {
        ke(t, t.return, n);
      }
    }
  }
  function Lh(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Xl(e);
      } catch (n) {
        ke(t, t.return, n);
      }
  }
  function Zv(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Dh()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Dh()), t;
      default:
        throw Error(s(435, e.tag));
    }
  }
  function cr(e, t) {
    var n = Zv(e);
    t.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var l = uy.bind(null, e, a);
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
        Hh(c, f, i), nt = null, Bt = !1, c = i.alternate, c !== null && (c.return = null), i.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Ih(t, e, n), t = t.sibling;
  }
  var bn = null;
  function Ih(e, t, n) {
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
        zt(t, e, n), Mt(e), l & 512 && (Xe || a === null || Ot(a, a.return)), l & 64 && yt && (e = e.updateQueue, e !== null && (t = e.callbacks, t !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? t : n.concat(t))));
        break;
      case 26:
        if (i = bn, zt(t, e, n), Mt(e), l & 512 && (Xe || a === null || Ot(a, a.return)), l & 4)
          if (l = a !== null ? a.memoizedState : null, n = e.memoizedState, a === null)
            if (n === null)
              if (e.stateNode === null)
                if (yt)
                  e.stateNode = Tm(
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
                        a = l.getElementsByTagName("title")[0], (!a || a[ni] || a[At] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = l.createElement(t), l.head.insertBefore(
                          a,
                          l.querySelector("head > title")
                        )), Ct(a, t, n), a[At] = e, gt(a), t = a;
                        break e;
                      case "link":
                        if (i = Km(
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
                        a = l.createElement(t), Ct(a, t, n), l.head.appendChild(a);
                        break;
                      case "meta":
                        if (i = Km(
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
                        a = l.createElement(t), Ct(a, t, n), l.head.appendChild(a);
                        break;
                      default:
                        throw Error(s(468, t));
                    }
                    a[At] = e, gt(a), t = a;
                  }
                  e.stateNode = t;
                }
              else
                yt || co(i, e.type, e.stateNode);
            else
              e.stateNode = Qm(
                i,
                n,
                e.memoizedProps
              );
          else
            l !== n ? (l === null ? (t = a.stateNode, t === null || Xe || t.parentNode.removeChild(t)) : l.count--, n === null ? yt || co(i, e.type, e.stateNode) : Qm(i, n, e.memoizedProps)) : n === null && e.stateNode !== null && mc(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        break;
      case 27:
        zt(t, e, n), Mt(e), l & 512 && (Xe || a === null || Ot(a, a.return)), a !== null && l & 4 && mc(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (i = Rn, Rn = !1, zt(t, e, n), Rn = i, Mt(e), l & 512 && (Xe || a === null || Ot(a, a.return)), e.flags & 32) {
          t = e.stateNode;
          try {
            rl(t, ""), Ve = !0;
          } catch (z) {
            ke(e, e.return, z);
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
          } catch (z) {
            ke(e, e.return, z);
          }
        }
        break;
      case 3:
        if (Ve = !1, Nr = null, i = bn, bn = Ii(t.containerInfo), zt(t, e, n), bn = i, Mt(e), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Xl(t.containerInfo);
          } catch (z) {
            ke(e, e.return, z);
          }
        Tc && (Tc = !1, Bh(e)), Ve = !1;
        break;
      case 4:
        l = Rn, Rn = yt, a = uf(), i = bn, bn = Ii(
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
        var f = yt, y = Xe, C = Rn;
        yt = f || i, Rn = C || i, Xe = y || c, zt(t, e, n), Xe = y, Rn = C, yt = f, Mt(e), l & 8192 && (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, !i || a === null || c || yt || Xe || (t = c || Xe, n = yt, a = Xe, yt = i || yt, Xe = t, ma(e, 2), yt = n, Xe = a), !i && Rn || Nc(e, i)), l & 4 && (t = e.updateQueue, t !== null && (n = t.retryQueue, n !== null && (t.retryQueue = null, cr(e, n))));
        break;
      case 19:
        zt(t, e, n), Mt(e), l & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, cr(e, t)));
        break;
      case 30:
        l & 512 && (Xe || a === null || Ot(a, a.return)), l = uf(), i = Ri, c = (n & 335544064) === n, f = e.memoizedProps, Ri = c && Vn(
          f.default,
          f.update
        ) !== "none", zt(t, e, n), Mt(e), c && a !== null && Ve && (e.flags |= 4), Ri = i, Ve = l;
        break;
      case 21:
        break;
      case 7:
        l & 512 && (Xe || a === null || Ot(a, a.return)), a && a.stateNode !== null && (a.stateNode._fragmentFiber = e);
      default:
        zt(t, e, n), Mt(e);
    }
  }
  function Mt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, a = e.return; a !== null; ) {
          if (Nh(a)) {
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
            var f = n.stateNode, y = pc(e);
            ar(
              e,
              y,
              f,
              c
            );
            break;
          case 5:
            var C = n.stateNode;
            n.flags & 32 && (rl(C, ""), n.flags &= -33);
            var z = pc(e);
            ar(
              e,
              z,
              C,
              c
            );
            break;
          case 3:
          case 4:
            var Q = n.stateNode.containerInfo, _ = pc(e);
            gc(
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
        ke(e, e.return, U);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Bh(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Bh(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, Yl = !0, t.reset(), Yl = !1), e = e.sibling;
      }
  }
  function wl(e, t) {
    if (t.subtreeFlags & 9270)
      for (t = t.child; t !== null; )
        Vh(t, e), t = t.sibling;
    else jh(t);
  }
  function Vh(e, t) {
    var n = e.alternate;
    if (n === null) vc(e, !1);
    else
      switch (e.tag) {
        case 3:
          if (Ac = jn = !1, Oh(), wl(t, e), !jn && !rr) {
            if (e = Cn, e !== null)
              for (var a = 0; a < e.length; a += 3) {
                n = e[a];
                var l = e[a + 1];
                Cm(n, e[a + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate(
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
          wl(t, e);
          break;
        case 4:
          a = jn, jn = !1, wl(t, e), jn && (rr = !0), jn = a;
          break;
        case 22:
          e.memoizedState === null && (n.memoizedState !== null ? vc(e, !1) : wl(t, e));
          break;
        case 30:
          a = jn, l = Oh(), jn = !1, wl(t, e), jn && (e.flags |= 4);
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
        Uh(e, t.alternate, t), t = t.sibling;
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
          Ot(n, n.return);
          var l = n.stateNode;
          typeof l.componentWillUnmount == "function" && Th(
            n,
            n.return,
            l
          ), ma(
            n,
            a
          );
          break;
        case 27:
          (a & 2) !== 0 && Bm(
            n.stateNode,
            n.type,
            n.memoizedProps
          );
        case 5:
          Ot(n, n.return), n.tag !== 5 && n.tag !== 27 || xi(n), ma(
            n,
            a
          );
          break;
        case 6:
          xi(n);
          break;
        case 26:
          Ot(n, n.return), l = n.stateNode, n.memoizedState !== null || l === null || Xe || l.parentNode.removeChild(l), ma(
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
          Ot(n, n.return), ma(
            n,
            a
          );
          break;
        case 7:
          Ot(n, n.return);
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
              ke(a, a.return, z);
            }
          if (a = i, l = a.updateQueue, l !== null) {
            var y = a.stateNode;
            try {
              var C = l.shared.hiddenCallbacks;
              if (C !== null)
                for (l.shared.hiddenCallbacks = null, l = 0; l < C.length; l++)
                  cd(C[l], y);
            } catch (z) {
              ke(a, a.return, z);
            }
          }
          f && c & 64 && Sh(i), On(i, i.return);
          break;
        case 27:
          (n & 2) !== 0 && _h(i);
        case 5:
          i.tag !== 5 && i.tag !== 27 || Ah(i), En(
            l,
            i,
            n
          ), f && a === null && c & 4 && hc(i), On(i, i.return);
          break;
        case 6:
          Ah(i);
          break;
        case 26:
          y = i.stateNode, i.memoizedState !== null || y === null || yt || co(
            Ii(y.ownerDocument),
            i.type,
            y
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
          ), f && c & 4 && Lh(l, i);
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
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && pi(n));
  }
  function Oc(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && pi(e));
  }
  function fn(e, t, n, a) {
    var l = (n & 335544064) === n;
    if (t.subtreeFlags & (l ? 10262 : 10256))
      for (t = t.child; t !== null; )
        Gh(
          e,
          t,
          n,
          a
        ), t = t.sibling;
    else l && Rh(t);
  }
  function Gh(e, t, n, a) {
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
        ), l && Ac && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), i & 2048 && (i = null, t.alternate !== null && (i = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== i && (t.refCount++, i != null && pi(i)));
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
          } catch (C) {
            ke(t, t.return, C);
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
  function Ol(e, t, n, a, l) {
    for (l = l && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var i = e, c = t, f = n, y = a, C = c.flags;
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
          )), l && C & 2048 && wc(
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
          ), l && C & 2048 && Oc(c.alternate, c);
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
        Yh(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function Yh(e, t, n) {
    switch (e.tag) {
      case 26:
        Fa(
          e,
          t,
          n
        ), e.flags & $a && (e.memoizedState !== null ? e0(
          n,
          bn,
          e.memoizedState,
          e.memoizedProps
        ) : (e = e.stateNode, (t & 335544128) === t && $m(n, e)));
        break;
      case 5:
        Fa(
          e,
          t,
          n
        ), e.flags & $a && (e = e.stateNode, (t & 335544128) === t && $m(n, e));
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
  function Xh(e) {
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
          bt = a, Kh(
            a,
            e
          );
        }
      Xh(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Qh(e), e = e.sibling;
  }
  function Qh(e) {
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
          bt = a, Kh(
            a,
            e
          );
        }
      Xh(e);
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
  function Kh(e, t) {
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
          if (Mh(a), a === n) {
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
  var Jv = {
    getCacheForType: function(e) {
      var t = Nt(st), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return Nt(st).controller.signal;
    }
  }, $v = typeof WeakMap == "function" ? WeakMap : Map, Ye = 0, Fe = null, ze = null, He = 0, Ke = 0, Pt = null, pa = !1, Cl = !1, Cc = !1, $n = 0, it = 0, ga = 0, Pa = 0, fr = 0, Wt = 0, xl = 0, Ui = null, Vt = null, xc = !1, dr = 0, kh = 0, hr = 1 / 0, mr = null, va = null, at = 0, Sn = null, Wa = null, Un = 0, Rc = 0, jc = null, Zh = null, Rl = null, jl = null, Dl = null, zi = 0, pr = null;
  function en() {
    return (Ye & 2) !== 0 && He !== 0 ? He & -He : W.T !== null ? Vc() : $o();
  }
  function Jh() {
    if (Wt === 0)
      if ((He & 536870912) === 0 || Ue) {
        var e = cu;
        cu <<= 1, (cu & 3932160) === 0 && (cu = 262144), Wt = e;
      } else Wt = 536870912;
    return e = _t.current, e !== null && (e.flags |= 32), Wt;
  }
  function Ul(e, t) {
    if (t != null) {
      var n = e.stateNode, a = n.ref;
      a === null && (a = n.ref = xm(
        Bn(e.memoizedProps, n)
      )), jl === null && (jl = []), jl.push(t.bind(null, a));
    }
  }
  function Gt(e, t, n) {
    (e === Fe && (Ke === 2 || Ke === 9) || e.cancelPendingCommit !== null) && (zl(e, 0), ya(
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
  function $h(e, t, n) {
    if ((Ye & 6) !== 0) throw Error(s(327));
    var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || ei(e, t), l = a ? Wv(e, t) : Uc(e, t, !0), i = a;
    do {
      if (l === 0) {
        Cl && !a && ya(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, i && !Fv(n)) {
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
              var y = f.current.memoizedState.isDehydrated;
              if (y && (zl(f, c).flags |= 256), c = Uc(
                f,
                c,
                !1
              ), c !== 2 && c !== 6) {
                if (Cc && !y) {
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
            Un = t, a.timeoutHandle = Pc(
              Fh.bind(
                null,
                a,
                n,
                Vt,
                mr,
                xc,
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
          Fh(
            a,
            n,
            Vt,
            mr,
            xc,
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
  function Fh(e, t, n, a, l, i, c, f, y, C, z, Q, _, U) {
    e.timeoutHandle = -1;
    var se = t.subtreeFlags, be = (i & 335544064) === i;
    if (Q = null, (be || se & 8192 || (se & 16785408) === 16785408) && (Q = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: Nn
    }, Ft = null, Yh(
      t,
      i,
      Q
    ), be && (se = Q, be = e.containerInfo, be = (be.nodeType === 9 ? be : be.ownerDocument).__reactViewTransition, be != null && (se.count++, se.waitingForViewTransition = !0, se = Gi.bind(se), be.finished.then(se, se))), se = (i & 62914560) === i ? dr - Qt() : (i & 4194048) === i ? kh - Qt() : 0, se = t0(
      Q,
      se
    ), se !== null)) {
      Un = i, e.cancelPendingCommit = se(
        im.bind(
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
          C,
          z,
          Q,
          null,
          _,
          U
        )
      ), ya(e, i, c, !C);
      return;
    }
    im(
      e,
      t,
      i,
      n,
      a,
      l,
      c,
      f,
      y,
      C,
      z,
      Q
    );
  }
  function Fv(e) {
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
    t = Qo(e, t), t &= ~fr, t &= ~Pa, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var l = t; 0 < l; ) {
      var i = 31 - kt(l), c = 1 << i;
      a[i] = -1, l &= ~c;
    }
    n !== 0 && ko(e, n, t);
  }
  function gr() {
    return (Ye & 6) === 0 ? (Mi(0), !1) : !0;
  }
  function Dc() {
    if (ze !== null) {
      if (Ke === 0)
        var e = ze.return;
      else
        e = ze, Xn = Ba = null, Bs(e), El = null, yi = 0, e = ze;
      for (; e !== null; )
        Eh(e.alternate, e), e = e.return;
      ze = null;
    }
  }
  function zl(e, t) {
    var n = e.timeoutHandle;
    return n !== -1 && (e.timeoutHandle = -1, Sy(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Un = 0, Dc(), Fe = e, ze = n = Gn(e.current, null), He = t, Ke = 0, Pt = null, pa = !1, Cl = ei(e, t), Cc = !1, xl = Wt = fr = Pa = ga = it = 0, Vt = Ui = null, xc = !1, $n = Qo(e, t), Nu(), n;
  }
  function Ph(e, t) {
    Re = null, W.H = Ju, t === bl || t === Mu ? (t = id(), Ke = 3) : t === Os ? (t = id(), Ke = 4) : Ke = t === tc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Pt = t, ze === null && (it = 1, $u(
      e,
      rn(t, e.current)
    ));
  }
  function Wh() {
    var e = _t.current;
    return e === null ? !0 : (He & 4194048) === He ? jt === null : (He & 62914560) === He || (He & 536870912) !== 0 ? e === jt : !1;
  }
  function em() {
    var e = W.H;
    return W.H = Ju, e === null ? Ju : e;
  }
  function tm() {
    var e = W.A;
    return W.A = Jv, e;
  }
  function vr() {
    it = 4, pa || (He & 4194048) !== He && _t.current !== null || (Cl = !0), (ga & 134217727) === 0 && (Pa & 134217727) === 0 || Fe === null || ya(
      Fe,
      He,
      Wt,
      !1
    );
  }
  function Uc(e, t, n) {
    var a = Ye;
    Ye |= 2;
    var l = em(), i = tm();
    (Fe !== e || He !== t) && (mr = null, zl(e, t)), t = !1;
    var c = it;
    e: do
      try {
        if (Ke !== 0 && ze !== null) {
          var f = ze, y = Pt;
          switch (Ke) {
            case 8:
              Dc(), c = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              _t.current === null && (t = !0);
              var C = Ke;
              if (Ke = 0, Pt = null, Ml(e, f, y, C), n && Cl) {
                c = 0;
                break e;
              }
              break;
            default:
              C = Ke, Ke = 0, Pt = null, Ml(e, f, y, C);
          }
        }
        Pv(), c = it;
        break;
      } catch (z) {
        Ph(e, z);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Xn = Ba = null, Ye = a, W.H = l, W.A = i, ze === null && (Fe = null, He = 0, Nu()), c;
  }
  function Pv() {
    for (; ze !== null; ) nm(ze);
  }
  function Wv(e, t) {
    var n = Ye;
    Ye |= 2;
    var a = em(), l = tm();
    Fe !== e || He !== t ? (mr = null, hr = Qt() + 500, zl(e, t)) : Cl = ei(
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
              Ke = 0, Pt = null, Ml(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (ad(i)) {
                Ke = 0, Pt = null, am(t);
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
              ad(i) ? (Ke = 0, Pt = null, am(t)) : (Ke = 0, Pt = null, Ml(e, t, i, 7));
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
                    var y = f.sibling;
                    if (y !== null) ze = y;
                    else {
                      var C = f.return;
                      C !== null ? (ze = C, yr(C)) : ze = null;
                    }
                    break t;
                  }
              }
              Ke = 0, Pt = null, Ml(e, t, i, 5);
              break;
            case 6:
              Ke = 0, Pt = null, Ml(e, t, i, 6);
              break;
            case 8:
              Dc(), it = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        ey();
        break;
      } catch (z) {
        Ph(e, z);
      }
    while (!0);
    return Xn = Ba = null, W.H = a, W.A = l, Ye = n, ze !== null ? 0 : (Fe = null, He = 0, Nu(), it);
  }
  function ey() {
    for (; ze !== null && !vg(); )
      nm(ze);
  }
  function nm(e) {
    var t = yh(e.alternate, e, $n);
    e.memoizedProps = e.pendingProps, t === null ? yr(e) : ze = t;
  }
  function am(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = fh(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          He
        );
        break;
      case 11:
        t = fh(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          He
        );
        break;
      case 5:
        Bs(t);
        var a = t;
        a === vt && (Ue ? (Ru(a), a.tag === 5 && a.stateNode != null && (et = a.stateNode)) : (Ru(a), Ue = !0));
      default:
        Eh(n, t), t = ze = Kf(t, $n), t = yh(n, t, $n);
    }
    e.memoizedProps = e.pendingProps, t === null ? yr(e) : ze = t;
  }
  function Ml(e, t, n, a) {
    Xn = Ba = null, Bs(t), El = null, yi = 0;
    var l = t.return;
    try {
      if (Vv(
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
    t.flags & 32768 ? (Ue || a === 1 ? e = !0 : Cl || (He & 536870912) !== 0 ? e = !1 : (pa = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = _t.current, a !== null && a.tag === 13 && (a.flags |= 16384))), lm(t, e)) : yr(t);
  }
  function yr(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        lm(
          t,
          pa
        );
        return;
      }
      e = t.return;
      var n = Qv(
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
  function lm(e, t) {
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
  function im(e, t, n, a, l, i, c, f, y, C, z, Q) {
    e.cancelPendingCommit = null;
    do
      br();
    while (at !== 0);
    if ((Ye & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === e.current) throw Error(s(177));
      e === Fe && (ze = Fe = null, He = 0), Wa = t, Sn = e, Un = n, jc = l, Zh = a, ty(
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
  function ty(e, t, n, a, l, i, c) {
    var f = t.lanes | t.childLanes;
    if (Rc = f, f |= ms, Og(
      e,
      n,
      f,
      a,
      l,
      i
    ), jl = null, (n & 335544064) === n ? (Dl = xv(e), a = 10262) : (Dl = null, a = 10256), (t.subtreeFlags & a) !== 0 || (t.flags & a) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, ry(ru, function() {
      return qc(), null;
    })) : (e.callbackNode = null, e.callbackPriority = 0), lr = !1, a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
      a = W.T, W.T = null, l = fe.p, fe.p = 2, i = Ye, Ye |= 4;
      try {
        kv(e, t, n);
      } finally {
        Ye = i, fe.p = l, W.T = a;
      }
    }
    at = 1, lr ? Rl = Oy(
      c,
      e.containerInfo,
      Dl,
      zc,
      Mc,
      ay,
      Hc,
      qc,
      ny
    ) : (zc(), Mc(), Hc());
  }
  function ny(e) {
    if (at !== 0) {
      var t = Sn.onRecoverableError;
      t(e, { componentStack: null });
    }
  }
  function ay() {
    at === 3 && (at = 0, Vh(Wa, Sn), at = 4);
  }
  function zc() {
    if (at === 1) {
      at = 0;
      var e = Sn, t = Wa, n = Un, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = W.T, W.T = null;
        var l = fe.p;
        fe.p = 2;
        var i = Ye;
        Ye |= 4;
        try {
          Ri = rr = !1, Ih(t, e, n), n = Jc;
          var c = Hf(e.containerInfo), f = n.focusedElem, y = n.selectionRange;
          if (c !== f && f && f.ownerDocument && Mf(
            f.ownerDocument.documentElement,
            f
          )) {
            if (y !== null && cs(f)) {
              var C = y.start, z = y.end;
              if (z === void 0 && (z = C), "selectionStart" in f)
                f.selectionStart = C, f.selectionEnd = Math.min(
                  z,
                  f.value.length
                );
              else {
                var Q = f.ownerDocument || document, _ = Q && Q.defaultView || window;
                if (_.getSelection) {
                  var U = _.getSelection(), se = f.textContent.length, be = Math.min(y.start, se), je = y.end === void 0 ? be : Math.min(y.end, se);
                  !U.extend && be > je && (c = je, je = be, be = c);
                  var w = zf(
                    f,
                    be
                  ), T = zf(
                    f,
                    je
                  );
                  if (w && T && (U.rangeCount !== 1 || U.anchorNode !== w.node || U.anchorOffset !== w.offset || U.focusNode !== T.node || U.focusOffset !== T.offset)) {
                    var R = Q.createRange();
                    R.setStart(w.node, w.offset), U.removeAllRanges(), be > je ? (U.addRange(R), U.extend(T.node, T.offset)) : (R.setEnd(T.node, T.offset), U.addRange(R));
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
          Yl = !!Zc, Jc = Zc = null;
        } finally {
          Ye = i, fe.p = l, W.T = a;
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
        n = W.T, W.T = null;
        var a = fe.p;
        fe.p = 2;
        var l = Ye;
        Ye |= 4;
        try {
          Uh(e, t.alternate, t);
        } finally {
          Ye = l, fe.p = a, W.T = n;
        }
      }
      at = 3;
    }
  }
  function Hc() {
    if (at === 4 || at === 3) {
      at = 0;
      var e = Rl;
      Rl = null, yg();
      var t = Sn, n = Wa, a = Un, l = Zh, i = (a & 335544064) === a ? 10262 : 10256;
      if ((n.subtreeFlags & i) !== 0 || (n.flags & i) !== 0 ? at = 5 : (at = 0, Wa = Sn = null, um(t, t.pendingLanes)), i = t.pendingLanes, i === 0 && (va = null), Qr(a), n = n.stateNode, Kt && typeof Kt.onCommitFiberRoot == "function")
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
        n = W.T, i = fe.p, fe.p = 2, W.T = null;
        try {
          for (var c = t.onRecoverableError, f = 0; f < l.length; f++) {
            var y = l[f];
            c(y.value, {
              componentStack: y.stack
            });
          }
        } finally {
          W.T = n, fe.p = i;
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
  function um(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, pi(t)));
  }
  function br() {
    return Rl !== null && (Rl.skipTransition(), Rl = null), zc(), Mc(), Hc(), qc();
  }
  function qc() {
    if (at !== 5) return !1;
    var e = Sn, t = Rc;
    Rc = 0;
    var n = Qr(Un), a = W.T, l = fe.p;
    try {
      fe.p = 32 > n ? 32 : n, W.T = null, n = jc, jc = null;
      var i = Sn, c = Un;
      if (at = 0, Wa = Sn = null, Un = 0, (Ye & 6) !== 0) throw Error(s(331));
      var f = Ye;
      if (Ye |= 4, Qh(i.current), Gh(
        i,
        i.current,
        c,
        n
      ), Ye = f, Mi(0, !1), Kt && typeof Kt.onPostCommitFiberRoot == "function")
        try {
          Kt.onPostCommitFiberRoot(Wl, i);
        } catch {
        }
      return !0;
    } finally {
      fe.p = l, W.T = a, um(e, t);
    }
  }
  function rm(e, t, n) {
    t = rn(n, t), t = ec(e.stateNode, t, 2), e = ca(e, t, 2), e !== null && (ti(e, 2), zn(e));
  }
  function ke(e, t, n) {
    if (e.tag === 3)
      rm(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          rm(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (va === null || !va.has(a))) {
            e = rn(n, e), n = ah(2), a = ca(t, n, 2), a !== null && (lh(
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
      a = e.pingCache = new $v();
      var l = /* @__PURE__ */ new Set();
      a.set(t, l);
    } else
      l = a.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), a.set(t, l));
    l.has(n) || (Cc = !0, l.add(n), e = ly.bind(null, e, t, n), t.then(e, e));
  }
  function ly(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Fe === e && (He & n) === n && ((it === 4 || it === 3 && (He & 62914560) === He && 300 > Qt() - dr) && (Ye & 2) === 0 ? zl(e, 0) : fr |= n, xl === He && (xl = 0)), zn(e);
  }
  function sm(e, t) {
    t === 0 && (t = Ko()), e = qa(e, t), e !== null && (ti(e, t), zn(e));
  }
  function iy(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), sm(e, n);
  }
  function uy(e, t) {
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
    a !== null && a.delete(t), sm(e, n);
  }
  function ry(e, t) {
    return Vr(e, t);
  }
  var Hl = null, ql = null, Ic = !1, Er = !1, Bc = !1, ba = 0;
  function zn(e) {
    e !== ql && e.next === null && (ql === null ? Hl = ql = e : ql = ql.next = e), Er = !0, Ic || (Ic = !0, cy());
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
              i = (1 << 31 - kt(42 | e) + 1) - 1, i &= l & ~(c & ~f), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (n = !0, dm(a, i));
          } else
            i = He, i = fu(
              a,
              a === Fe ? i : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (i & 3) === 0 || ei(a, i) || (n = !0, dm(a, i));
          a = a.next;
        }
      while (n);
      Bc = !1;
    }
  }
  function sy() {
    cm();
  }
  function cm() {
    Er = Ic = !1;
    var e = 0;
    ba !== 0 && Ey() && (e = ba);
    for (var t = Qt(), n = null, a = Hl; a !== null; ) {
      var l = a.next, i = om(a, t);
      i === 0 ? (a.next = null, n === null ? Hl = l : n.next = l, l === null && (ql = n)) : (n = a, (e !== 0 || (i & 3) !== 0) && (Er = !0)), a = l;
    }
    at !== 0 && at !== 5 || Mi(e), ba !== 0 && (ba = 0);
  }
  function om(e, t) {
    for (var n = e.suspendedLanes, a = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var c = 31 - kt(i), f = 1 << c, y = l[c];
      y === -1 ? ((f & n) === 0 || (f & a) !== 0) && (l[c] = wg(f, t)) : y <= t && (e.expiredLanes |= f), i &= ~f;
    }
    if (t = Fe, n = He, n = fu(
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
          n = Yo;
          break;
        case 32:
          n = ru;
          break;
        case 268435456:
          n = Xo;
          break;
        default:
          n = ru;
      }
      return a = fm.bind(null, e), n = Vr(n, a), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return a !== null && a !== null && Gr(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function fm(e, t) {
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
    ), a === 0 ? null : ($h(e, a, t), om(e, Qt()), e.callbackNode != null && e.callbackNode === n ? fm.bind(null, e) : null);
  }
  function dm(e, t) {
    if (br()) return null;
    $h(e, t, !0);
  }
  function cy() {
    Ty(function() {
      (Ye & 6) !== 0 ? Vr(
        Go,
        sy
      ) : cm();
    });
  }
  function Vc() {
    if (ba === 0) {
      var e = Ya;
      e === 0 && (e = su, su <<= 1, (su & 261888) === 0 && (su = 256)), ba = e;
    }
    return ba;
  }
  function hm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : gu(e);
  }
  function oy(e, t, n, a, l) {
    if (t === "submit" && n && n.stateNode === l) {
      var i = hm(
        (l[qt] || null).action
      ), c = a.submitter;
      c && (t = (t = c[qt] || null) ? hm(t.formAction) : c.getAttribute("formAction"), t !== null && (i = t, c = null));
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
                  Js(
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
                typeof i == "function" && (f.preventDefault(), y = new FormData(l, c), Js(
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
  for (var Gc = 0; Gc < hs.length; Gc++) {
    var Yc = hs[Gc], fy = Yc.toLowerCase(), dy = Yc[0].toUpperCase() + Yc.slice(1);
    vn(
      fy,
      "on" + dy
    );
  }
  vn(If, "onAnimationEnd"), vn(Bf, "onAnimationIteration"), vn(Vf, "onAnimationStart"), vn("dblclick", "onDoubleClick"), vn("focusin", "onFocus"), vn("focusout", "onBlur"), vn(Sv, "onTransitionRun"), vn(Tv, "onTransitionStart"), vn(Av, "onTransitionCancel"), vn(Gf, "onTransitionEnd"), il("onMouseEnter", ["mouseout", "mouseover"]), il("onMouseLeave", ["mouseout", "mouseover"]), il("onPointerEnter", ["pointerout", "pointerover"]), il("onPointerLeave", ["pointerout", "pointerover"]), za(
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
  ), hy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Hi)
  );
  function mm(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var a = e[n], l = a.event;
      a = a.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var c = a.length - 1; 0 <= c; c--) {
            var f = a[c], y = f.instance, C = f.currentTarget;
            if (f = f.listener, y !== i && l.isPropagationStopped())
              break e;
            i = f, l.currentTarget = C;
            try {
              i(l);
            } catch (z) {
              Au(z);
            }
            l.currentTarget = null, i = y;
          }
        else
          for (c = 0; c < a.length; c++) {
            if (f = a[c], y = f.instance, C = f.currentTarget, f = f.listener, y !== i && l.isPropagationStopped())
              break e;
            i = f, l.currentTarget = C;
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
    var n = t[Po];
    n === void 0 && (n = t[Po] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    n.has(a) || (pm(t, e, 2, !1), n.add(a));
  }
  function Xc(e, t, n) {
    var a = 0;
    t && (a |= 4), pm(
      n,
      e,
      a,
      t
    );
  }
  var Sr = "_reactListening" + Math.random().toString(36).slice(2);
  function Qc(e) {
    if (!e[Sr]) {
      e[Sr] = !0, tf.forEach(function(n) {
        n !== "selectionchange" && (hy.has(n) || Xc(n, !1, e), Xc(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Sr] || (t[Sr] = !0, Xc("selectionchange", !1, t));
    }
  }
  function pm(e, t, n, a) {
    switch (lp(t)) {
      case 2:
        var l = i0;
        break;
      case 8:
        l = u0;
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
    pf(function() {
      var C = i, z = Fr(n), Q = [];
      e: {
        var _ = Yf.get(e);
        if (_ !== void 0) {
          var U = Eu, se = e;
          switch (e) {
            case "keypress":
              if (yu(n) === 0) break e;
            case "keydown":
            case "keyup":
              U = Fg;
              break;
            case "focusin":
              se = "focus", U = as;
              break;
            case "focusout":
              se = "blur", U = as;
              break;
            case "beforeblur":
            case "afterblur":
              U = as;
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
              U = yf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              U = Ig;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              U = nv;
              break;
            case If:
            case Bf:
            case Vf:
              U = Gg;
              break;
            case Gf:
              U = lv;
              break;
            case "scroll":
            case "scrollend":
              U = qg;
              break;
            case "wheel":
              U = uv;
              break;
            case "copy":
            case "cut":
            case "paste":
              U = Xg;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              U = Ef;
              break;
            case "submit":
              U = ev;
              break;
            case "toggle":
            case "beforetoggle":
              U = sv;
          }
          var be = (t & 4) !== 0, je = !be && (e === "scroll" || e === "scrollend"), w = be ? _ !== null ? _ + "Capture" : null : _;
          be = [];
          for (var T = C, R; T !== null; ) {
            var X = T;
            if (R = X.stateNode, X = X.tag, X !== 5 && X !== 26 && X !== 27 || R === null || w === null || (X = li(T, w), X != null && be.push(
              qi(T, X, R)
            )), je) break;
            T = T.return;
          }
          0 < be.length && (_ = new U(
            _,
            se,
            null,
            n,
            z
          ), Q.push({ event: _, listeners: be }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (U = e === "mouseover" || e === "pointerover", _ = e === "mouseout" || e === "pointerout", U && n !== $r && (se = n.relatedTarget || n.fromElement) && (Ua(se) || se[nl]))
            break e;
          (_ || U) && (se = z.window === z ? z : (U = z.ownerDocument) ? U.defaultView || U.parentWindow : window, _ ? (U = n.relatedTarget || n.toElement, _ = C, U = U ? Ua(U) : null, U !== null && (je = m(U), be = U.tag, U !== je || be !== 5 && be !== 27 && be !== 6) && (U = null)) : (_ = null, U = C), _ !== U && (be = yf, X = "onMouseLeave", w = "onMouseEnter", T = "mouse", (e === "pointerout" || e === "pointerover") && (be = Ef, X = "onPointerLeave", w = "onPointerEnter", T = "pointer"), je = _ == null ? se : ai(_), R = U == null ? se : ai(U), se = new be(
            X,
            T + "leave",
            _,
            n,
            z
          ), se.target = je, se.relatedTarget = R, X = null, Ua(z) === C && (be = new be(
            w,
            T + "enter",
            U,
            n,
            z
          ), be.target = R, be.relatedTarget = je, X = be), je = X, be = _ && U ? ne(
            _,
            U,
            my
          ) : null, _ !== null && gm(
            Q,
            se,
            _,
            be,
            !1
          ), U !== null && je !== null && gm(
            Q,
            je,
            U,
            be,
            !0
          )));
        }
        e: {
          if (_ = C ? ai(C) : window, U = _.nodeName && _.nodeName.toLowerCase(), U === "select" || U === "input" && _.type === "file")
            var ve = Cf;
          else if (wf(_))
            if (xf)
              ve = yv;
            else {
              ve = gv;
              var qe = pv;
            }
          else
            U = _.nodeName, !U || U.toLowerCase() !== "input" || _.type !== "checkbox" && _.type !== "radio" ? C && Jr(C.elementType) && (ve = Cf) : ve = vv;
          if (ve && (ve = ve(e, C))) {
            Of(
              Q,
              ve,
              n,
              z
            );
            break e;
          }
          qe && qe(e, _, C);
        }
        switch (qe = C ? ai(C) : window, e) {
          case "focusin":
            (wf(qe) || qe.contentEditable === "true") && (fl = qe, os = C, di = null);
            break;
          case "focusout":
            di = os = fl = null;
            break;
          case "mousedown":
            fs = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            fs = !1, qf(Q, n, z);
            break;
          case "selectionchange":
            if (Ev) break;
          case "keydown":
          case "keyup":
            qf(Q, n, z);
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
          ol ? Nf(e, n) && (_e = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (_e = "onCompositionStart");
        _e && (Sf && n.locale !== "ko" && (ol || _e !== "onCompositionStart" ? _e === "onCompositionEnd" && ol && (Ae = gf()) : (ea = z, es = "value" in ea ? ea.value : ea.textContent, ol = !0)), qe = Tr(C, _e), 0 < qe.length && (_e = new bf(
          _e,
          e,
          null,
          n,
          z
        ), Q.push({ event: _e, listeners: qe }), Ae ? _e.data = Ae : (Ae = _f(n), Ae !== null && (_e.data = Ae)))), (Ae = ov ? fv(e, n) : dv(e, n)) && (_e = Tr(C, "onBeforeInput"), 0 < _e.length && (qe = new bf(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          z
        ), Q.push({
          event: qe,
          listeners: _e
        }), qe.data = Ae)), oy(
          Q,
          e,
          C,
          n,
          z
        );
      }
      mm(Q, t);
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
  function my(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function gm(e, t, n, a, l) {
    for (var i = t._reactName, c = []; n !== null && n !== a; ) {
      var f = n, y = f.alternate, C = f.stateNode;
      if (f = f.tag, y !== null && y === a) break;
      f !== 5 && f !== 26 && f !== 27 || C === null || (y = C, l ? (C = li(n, i), C != null && c.unshift(
        qi(n, C, y)
      )) : l || (C = li(n, i), C != null && c.push(
        qi(n, C, y)
      ))), n = n.return;
    }
    c.length !== 0 && e.push({ event: t, listeners: c });
  }
  var py = /\r\n?/g, gy = /\u0000|\uFFFD/g;
  function vm(e) {
    return (typeof e == "string" ? e : "" + e).replace(py, `
`).replace(gy, "");
  }
  function ym(e, t) {
    return t = vm(t), vm(e) === t;
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
        hf(e, a, i);
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
          n = Mg.get(n) || n, mu(e, n, a);
        else return;
    }
    Ve = !0;
  }
  function kc(e, t, n, a, l, i) {
    switch (n) {
      case "style":
        hf(e, a, i);
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
        if (!nf.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (l = n.endsWith("Capture"), i = n.slice(2, l ? n.length - 7 : void 0), t = e[qt] || null, t = t != null ? t[n] : null, typeof t == "function" && e.removeEventListener(i, t, l), typeof a == "function")) {
              typeof t != "function" && t !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(i, a, l);
              break e;
            }
            Ve = !0, n in e ? e[n] = a : a === !0 ? e.setAttribute(n, "") : mu(e, n, a);
          }
        return;
    }
    Ve = !0;
  }
  function Ct(e, t, n) {
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
        var f = i = c = l = null, y = null, C = null;
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
                  C = z;
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
        cf(
          e,
          i,
          f,
          y,
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
        ff(e, a, l, i);
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
        for (C in n)
          if (n.hasOwnProperty(C) && (a = n[C], a != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(s(137, t));
              default:
                Ze(e, t, C, a, n, null);
            }
        return;
      default:
        if (Jr(t)) {
          for (z in n)
            n.hasOwnProperty(z) && (a = n[z], a !== void 0 && kc(
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
  var vy = {};
  function yy(e, t, n, a) {
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
        var l = null, i = null, c = null, f = null, y = null, C = null, z = null;
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
                U !== Q && (Ve = !0), i = U;
                break;
              case "name":
                U !== Q && (Ve = !0), l = U;
                break;
              case "checked":
                U !== Q && (Ve = !0), C = U;
                break;
              case "defaultChecked":
                U !== Q && (Ve = !0), z = U;
                break;
              case "value":
                U !== Q && (Ve = !0), c = U;
                break;
              case "defaultValue":
                U !== Q && (Ve = !0), f = U;
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
        kr(
          e,
          c,
          f,
          y,
          C,
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
                i !== y && (Ve = !0), _ = i;
                break;
              case "defaultValue":
                i !== y && (Ve = !0), f = i;
                break;
              case "multiple":
                i !== y && (Ve = !0), c = i;
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
                l !== i && (Ve = !0), _ = l;
                break;
              case "defaultValue":
                l !== i && (Ve = !0), U = l;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (l != null) throw Error(s(91));
                break;
              default:
                l !== i && Ze(e, t, c, l, a, i);
            }
        of(e, _, U);
        return;
      case "option":
        for (var se in n)
          _ = n[se], n.hasOwnProperty(se) && _ != null && !a.hasOwnProperty(se) && (se === "selected" ? e.selected = !1 : Ze(
            e,
            t,
            se,
            null,
            a,
            _
          ));
        for (y in a)
          _ = a[y], U = n[y], a.hasOwnProperty(y) && _ !== U && (_ != null || U != null) && (y === "selected" ? (_ !== U && (Ve = !0), e.selected = _ && typeof _ != "function" && typeof _ != "symbol") : Ze(
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
        for (var be in n)
          _ = n[be], n.hasOwnProperty(be) && _ != null && !a.hasOwnProperty(be) && Ze(e, t, be, null, a, _);
        for (C in a)
          if (_ = a[C], U = n[C], a.hasOwnProperty(C) && _ !== U && (_ != null || U != null))
            switch (C) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (_ != null)
                  throw Error(s(137, t));
                break;
              default:
                Ze(
                  e,
                  t,
                  C,
                  _,
                  a,
                  U
                );
            }
        return;
      default:
        if (Jr(t)) {
          for (var je in n)
            _ = n[je], n.hasOwnProperty(je) && _ !== void 0 && !a.hasOwnProperty(je) && kc(
              e,
              t,
              je,
              void 0,
              a,
              _
            );
          for (z in a)
            _ = a[z], U = n[z], !a.hasOwnProperty(z) || _ === U || _ === void 0 && U === void 0 || kc(
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
  function bm(e) {
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
  function by() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var l = n[a], i = l.transferSize, c = l.initiatorType, f = l.duration;
        if (i && f && bm(c)) {
          for (c = 0, f = l.responseEnd, a += 1; a < n.length; a++) {
            var y = n[a], C = y.startTime;
            if (C > f) break;
            var z = y.transferSize, Q = y.initiatorType;
            z && bm(Q) && (y = y.responseEnd, c += z * (y < f ? 1 : (f - C) / (y - C)));
          }
          if (--a, t += 8 * (i + c) / (l.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Zc = null, Jc = null;
  function Li(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function Em(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function Sm(e, t) {
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
  function Tm(e, t, n, a) {
    return n = Li(
      n
    ).createElement(e), n[At] = a, n[qt] = t, Ct(n, e, t), gt(n), n;
  }
  function $c(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Fc = null;
  function Ey() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Fc ? !1 : (Fc = e, !0) : (Fc = null, !1);
  }
  var Pc = typeof setTimeout == "function" ? setTimeout : void 0, Sy = typeof clearTimeout == "function" ? clearTimeout : void 0, Am = typeof Promise == "function" ? Promise : void 0, Nm = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Pc, Ty = typeof queueMicrotask == "function" ? queueMicrotask : typeof Am < "u" ? function(e) {
    return Am.resolve(null).then(e).catch(Ay);
  } : Pc;
  function Ay(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ea(e) {
    return e === "head";
  }
  function _m(e, t) {
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
    Xl(t);
  }
  function wm(e, t) {
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
  function Om(e, t, n) {
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
  function Cm(e, t) {
    e = e.style, t = t.style;
    var n = t != null ? t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null : null;
    e.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = t != null ? t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null : null, e.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), e.display === "inline-block" && (t == null ? e.display = e.margin = "" : (n = t.display, e.display = n == null || typeof n == "boolean" ? "" : n, n = t.margin, n != null ? e.margin = n : (n = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], e.marginTop = n == null || typeof n == "boolean" ? "" : n, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], e.marginBottom = t == null || typeof t == "boolean" ? "" : t)));
  }
  function Ny(e, t, n) {
    return n = n.ownerDocument.defaultView, {
      rect: e,
      abs: t.position === "absolute" || t.position === "fixed",
      clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
      view: 0 <= e.bottom && 0 <= e.right && e.top <= n.innerHeight && e.left <= n.innerWidth
    };
  }
  function Wc(e) {
    var t = e.getBoundingClientRect(), n = getComputedStyle(e);
    return Ny(t, n, e);
  }
  function _y(e) {
    return e.documentElement.clientHeight;
  }
  function wy(e) {
    this.addEventListener("load", e), this.addEventListener("error", e);
  }
  function Oy(e, t, n, a, l, i, c, f, y) {
    var C = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var z = C.startViewTransition({
        update: function() {
          var _ = C.defaultView, U = _.navigation && _.navigation.transition, se = C.fonts.status;
          a();
          var be = [];
          if (se === "loaded" && (_y(C), C.fonts.status === "loading" && be.push(C.fonts.ready)), se = be.length, e !== null)
            for (var je = e.suspenseyImages, w = 0, T = 0; T < je.length; T++) {
              var R = je[T];
              if (!R.complete) {
                var X = R.getBoundingClientRect();
                if (0 < X.bottom && 0 < X.right && X.top < _.innerHeight && X.left < _.innerWidth) {
                  if (w += Jm(R), w > _r) {
                    be.length = se;
                    break;
                  }
                  R = new Promise(
                    wy.bind(R)
                  ), be.push(R);
                }
              }
            }
          if (0 < be.length)
            return _ = Promise.race([
              Promise.all(be),
              new Promise(function(ve) {
                return setTimeout(ve, 500);
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
      C.__reactViewTransition = z;
      var Q = [];
      return z.ready.then(
        function() {
          for (var _ = C.documentElement.getAnimations({
            subtree: !0
          }), U = 0; U < _.length; U++) {
            var se = _[U], be = se.effect, je = be.pseudoElement;
            if (je != null && je.startsWith("::view-transition")) {
              Q.push(se), se = be.getKeyframes();
              for (var w = je = void 0, T = !0, R = 0; R < se.length; R++) {
                var X = se[R], ve = X.width;
                if (je === void 0) je = ve;
                else if (je !== ve) {
                  T = !1;
                  break;
                }
                if (ve = X.height, w === void 0) w = ve;
                else if (w !== ve) {
                  T = !1;
                  break;
                }
                delete X.width, delete X.height, X.transform === "none" && delete X.transform;
              }
              T && je !== void 0 && w !== void 0 && (be.setKeyframes(se), T = getComputedStyle(
                be.target,
                be.pseudoElement
              ), T.width !== je || T.height !== w) && (T = se[0], T.width = je, T.height = w, T = se[se.length - 1], T.width = je, T.height = w, be.setKeyframes(se));
            }
          }
          c();
        },
        function(_) {
          C.__reactViewTransition === z && (C.__reactViewTransition = null);
          try {
            typeof _ == "object" && _ !== null && _.name === "InvalidStateError" && (_.message === "View transition was skipped because document visibility state is hidden." || _.message === "Skipping view transition because document visibility state has become hidden." || _.message === "Skipping view transition because viewport size changed." || _.message === "Transition was aborted because of invalid state") && (_ = null), _ !== null && y(_);
          } finally {
            a(), l(), c();
          }
        }
      ), z.finished.finally(function() {
        for (var _ = 0; _ < Q.length; _++)
          Q[_].cancel();
        C.__reactViewTransition === z && (C.__reactViewTransition = null), f();
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
  function xm(e) {
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
      if (jm(i, e, t, n) === -1) {
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
          Cy,
          e,
          f,
          a
        );
      }
      this._eventListeners = i;
    }
  };
  function Cy(e, t, n, a) {
    return I(e).addEventListener(
      t,
      n,
      a
    ), !1;
  }
  tn.prototype.removeEventListener = function(e, t, n) {
    var a = this._eventListeners;
    if (a !== null && (t = jm(
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
        xy,
        e,
        n,
        l
      ), a.splice(t, 1), i !== null && i();
    }
  };
  function xy(e, t, n, a) {
    return I(e).removeEventListener(
      t,
      n,
      a
    ), !1;
  }
  function Ll(e) {
    return e != null && typeof e != "boolean" && (e.once === !0 || e.signal instanceof AbortSignal) ? { capture: e.capture, passive: e.passive } : e;
  }
  function Rm(e) {
    return e == null ? "c=0" : typeof e == "boolean" ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0");
  }
  function jm(e, t, n, a) {
    if (e.length === 0) return -1;
    a = Rm(a);
    for (var l = 0; l < e.length; l++) {
      var i = e[l];
      if (i.type === t && i.listener === n && Rm(i.optionsOrUseCapture) === a)
        return l;
    }
    return -1;
  }
  tn.prototype.dispatchEvent = function(e) {
    var t = B(
      this._fragmentFiber
    );
    if (t === null) return !0;
    t = I(t);
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
      Dm,
      e,
      void 0,
      void 0
    );
  };
  function Dm(e, t) {
    return e.tag === 6 ? !1 : (e = I(e), Vy(e, t));
  }
  tn.prototype.focusLast = function(e) {
    var t = [];
    p(
      this._fragmentFiber.child,
      !0,
      eo,
      t,
      void 0,
      void 0
    );
    for (var n = t.length - 1; 0 <= n && !Dm(t[n], e); n--) ;
  };
  function eo(e, t) {
    return t.push(e), !1;
  }
  tn.prototype.blur = function() {
    var e = B(
      this._fragmentFiber
    );
    e !== null && (e = I(e), e = Li(e).activeElement, e !== null && p(
      this._fragmentFiber.child,
      !1,
      Ry,
      e,
      void 0,
      void 0
    ));
  };
  function Ry(e, t) {
    return e.tag === 6 ? !1 : (e = I(e), e === t || e.contains(t) ? (t.blur(), !0) : !1);
  }
  tn.prototype.observeUsing = function(e) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), p(
      this._fragmentFiber.child,
      !1,
      jy,
      e,
      void 0,
      void 0
    );
  };
  function jy(e, t) {
    return e.tag === 6 || (e = I(e), t.observe(e)), !1;
  }
  tn.prototype.unobserveUsing = function(e) {
    var t = this._observers;
    if (t !== null && t.has(e)) {
      t.delete(e), p(
        this._fragmentFiber.child,
        !1,
        Dy,
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
  function Dy(e, t) {
    return e.tag === 6 || (e = I(e), t.unobserve(e)), !1;
  }
  var Tn = [], to = !1;
  function Uy(e, t, n) {
    Tn.push({
      fragmentInstance: e,
      observer: t,
      instance: n
    }), to || (to = !0, Gy(function() {
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
    return p(
      this._fragmentFiber.child,
      !1,
      zy,
      e,
      void 0,
      void 0
    ), e;
  };
  function zy(e, t) {
    if (e.tag === 6) {
      e = e.stateNode;
      var n = e.ownerDocument.createRange();
      n.selectNodeContents(e), t.push.apply(t, n.getClientRects());
    } else
      e = I(e), t.push.apply(t, e.getClientRects());
    return !1;
  }
  tn.prototype.getRootNode = function(e) {
    var t = B(
      this._fragmentFiber
    );
    return t === null ? this : I(t).getRootNode(e);
  }, tn.prototype.compareDocumentPosition = function(e) {
    var t = B(
      this._fragmentFiber
    );
    if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var n = [];
    p(
      this._fragmentFiber.child,
      !1,
      eo,
      n,
      void 0,
      void 0
    );
    var a = I(t);
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
      return n === e ? l = Node.DOCUMENT_POSITION_CONTAINS : a & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = x(t)[1], n === null ? l = Node.DOCUMENT_POSITION_PRECEDING : (e = I(n).compareDocumentPosition(
        e
      ), l = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), l |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    t = I(n[0]), l = I(n[n.length - 1]);
    var i = A(this._fragmentFiber) ? t.parentElement : a;
    if (i == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    a = i.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, i = i.compareDocumentPosition(l) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var c = t.compareDocumentPosition(e), f = l.compareDocumentPosition(e), y = c & Node.DOCUMENT_POSITION_CONTAINED_BY || f & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return f = a && i && c & Node.DOCUMENT_POSITION_FOLLOWING && f & Node.DOCUMENT_POSITION_PRECEDING, t = a && t === e || i && l === e || y || f ? Node.DOCUMENT_POSITION_CONTAINED_BY : !a && t === e || !i && l === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : c, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || My(
      t,
      this._fragmentFiber,
      n[0],
      n[n.length - 1],
      e
    ) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function My(e, t, n, a, l) {
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
        for (i = t, t = B(t); i !== null; ) {
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
      k,
      i,
      a
    ), i = le, Ee = le = null, t = i !== null)), t) : !1;
  }
  function Um(e, t) {
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
      if (a = n ? a[1] || a[0] || B(this._fragmentFiber) : a[0] || a[1], a === null) return;
      if (a.tag === 6) {
        e = I(a), Um(e, n);
        return;
      }
      if (a = I(a), a.nodeType !== 9) {
        if (a.nodeType === 11) {
          n = "host" in a ? a.host : null, n !== null && n.scrollIntoView(e);
          return;
        }
        a.scrollIntoView(e);
      }
    }
    for (a = n ? t.length - 1 : 0; a !== (n ? -1 : t.length); ) {
      var l = t[a];
      l.tag === 6 ? (l = I(l), Um(l, n)) : I(l).scrollIntoView(e), a += n ? -1 : 1;
    }
  };
  function Hy(e, t) {
    return e = I(e), zm(e, t), !1;
  }
  function zm(e, t) {
    e.reactFragments == null && (e.reactFragments = /* @__PURE__ */ new Set()), e.reactFragments.add(t);
  }
  function Mm(e, t) {
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
    }), zm(e, t));
  }
  function qy(e, t) {
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
      typeof i.rootMargin == "string" ? Uy(
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
  function Ly(e, t, n, a) {
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
  function Iy(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = dn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Hm(e, t) {
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
  function By(e, t) {
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
  function Lm(e) {
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
  function Vy(e, t) {
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
  function Gy(e) {
    Nm(function() {
      Nm(function(t) {
        return e(t);
      });
    });
  }
  function Im(e, t, n) {
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
  function Bm(e, t, n) {
    for (var a in n) {
      var l = n[a];
      n.hasOwnProperty(a) && l != null && Ze(e, t, a, null, vy, l);
    }
    n.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === Nn && (e.onclick = null), hu(e);
  }
  function uo(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    hu(e);
  }
  var hn = /* @__PURE__ */ new Map(), Vm = /* @__PURE__ */ new Set();
  function Ii(e) {
    if (typeof e.getRootNode == "function") {
      var t = e.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) return t;
    }
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Fn = fe.d;
  fe.d = {
    f: Yy,
    r: Xy,
    D: Qy,
    C: Ky,
    L: ky,
    m: Zy,
    X: $y,
    S: Jy,
    M: Fy
  };
  function Yy() {
    var e = Fn.f(), t = gr();
    return e || t;
  }
  function Xy(e) {
    var t = al(e);
    t !== null && t.tag === 5 && t.type === "form" ? Yd(t) : Fn.r(e);
  }
  var Il = typeof document > "u" ? null : document;
  function Gm(e, t, n) {
    var a = Il;
    if (a && typeof t == "string" && t) {
      var l = ln(t);
      l = 'link[rel="' + e + '"][href="' + l + '"]', typeof n == "string" && (l += '[crossorigin="' + n + '"]'), Vm.has(l) || (Vm.add(l), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(l) === null && (t = a.createElement("link"), Ct(t, "link", e), gt(t), a.head.appendChild(t)));
    }
  }
  function Qy(e) {
    Fn.D(e), Gm("dns-prefetch", e, null);
  }
  function Ky(e, t) {
    Fn.C(e, t), Gm("preconnect", e, t);
  }
  function ky(e, t, n) {
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
        Ct(c, "link", e), t === "style" && (c[du] = !0, c.onload = c.onerror = function() {
          ef(c);
        }), gt(c), a.head.appendChild(c);
      }
    }
  }
  function Zy(e, t) {
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
        a = n.createElement("link"), Ct(a, "link", e), gt(a), n.head.appendChild(a);
      }
    }
  }
  function Jy(e, t, n) {
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
          ), (n = hn.get(i)) && ro(e, n);
          var y = c = a.createElement("link");
          gt(y), Ct(y, "link", e), y._p = new Promise(function(C, z) {
            y.onload = C, y.onerror = z;
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
  function $y(e, t) {
    Fn.X(e, t);
    var n = Il;
    if (n && e) {
      var a = ll(n).hoistableScripts, l = Vl(e), i = a.get(l);
      i || (i = n.querySelector(Vi(l)), i || (e = ue({ src: e, async: !0 }, t), (t = hn.get(l)) && so(e, t), i = n.createElement("script"), gt(i), Ct(i, "link", e), n.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(l, i));
    }
  }
  function Fy(e, t) {
    Fn.M(e, t);
    var n = Il;
    if (n && e) {
      var a = ll(n).hoistableScripts, l = Vl(e), i = a.get(l);
      i || (i = n.querySelector(Vi(l)), i || (e = ue({ src: e, async: !0, type: "module" }, t), (t = hn.get(l)) && so(e, t), i = n.createElement("script"), gt(i), Ct(i, "link", e), n.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(l, i));
    }
  }
  function Ym(e, t, n, a) {
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
          }, hn.set(e, i)), Py(
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
  function Xm(e) {
    return ue({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Py(e, t, n, a) {
    if (t = e.querySelector(
      'link[rel="preload"][as="style"][' + t + "]"
    )) {
      if (t[du] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      t = e.createElement("link"), t[du] = !0, t.onload = t.onerror = ef.bind(null, t), Ct(t, "link", n), gt(t), e.head.appendChild(t);
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
  function Qm(e, t, n) {
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
          ), gt(a), Ct(a, "style", l), Ar(a, n.precedence, e), t.instance = a;
        case "stylesheet":
          l = Bl(n.href);
          var i = e.querySelector(
            Bi(l)
          );
          if (i)
            return t.state.loading |= 4, t.instance = i, gt(i), i;
          a = Xm(n), (l = hn.get(l)) && ro(a, l), i = (e.ownerDocument || e).createElement("link"), gt(i);
          var c = i;
          return c._p = new Promise(function(f, y) {
            c.onload = f, c.onerror = y;
          }), Ct(i, "link", a), t.state.loading |= 4, Ar(i, n.precedence, e), t.instance = i;
        case "script":
          return i = Vl(n.src), (l = e.querySelector(
            Vi(i)
          )) ? (t.instance = l, gt(l), l) : (a = n, (l = hn.get(i)) && (a = ue({}, n), so(a, l)), e = e.ownerDocument || e, l = e.createElement("script"), gt(l), Ct(l, "link", a), e.head.appendChild(l), t.instance = l);
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
  function Km(e, t, n) {
    if (Nr === null) {
      var a = /* @__PURE__ */ new Map(), l = Nr = /* @__PURE__ */ new Map();
      l.set(n, a);
    } else
      l = Nr, a = l.get(n), a || (a = /* @__PURE__ */ new Map(), l.set(n, a));
    if (a.has(e)) return a;
    for (a.set(e, null), n = n.getElementsByTagName(e), l = 0; l < n.length; l++) {
      var i = n[l];
      if (!(i[ni] || i[At] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
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
  function Wy(e, t, n) {
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
  function km(e, t) {
    return e === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
  }
  function Zm(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Jm(e) {
    return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function $m(e, t) {
    typeof t.decode == "function" && (e.imgCount++, t.complete || (e.imgBytes += Jm(t), e.suspenseyImages.push(t)), e = n0.bind(e), t.decode().then(e, e));
  }
  function e0(e, t, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var l = Bl(a.href), i = t.querySelector(
          Bi(l)
        );
        if (i) {
          t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Gi.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = i, gt(i);
          return;
        }
        i = t.ownerDocument || t, a = Xm(a), (l = hn.get(l)) && ro(a, l), i = i.createElement("link"), gt(i);
        var c = i;
        c._p = new Promise(function(f, y) {
          c.onload = f, c.onerror = y;
        }), Ct(i, "link", a), n.instance = i;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Gi.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var _r = 0;
  function t0(e, t) {
    return e.stylesheets && e.count === 0 && Or(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && Or(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4 + t);
      0 < e.imgBytes && _r === 0 && (_r = 62500 * by());
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
  function Fm(e) {
    if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
      if (e.stylesheets) Or(e, e.stylesheets);
      else if (e.unsuspend) {
        var t = e.unsuspend;
        e.unsuspend = null, t();
      }
    }
  }
  function Gi() {
    this.count--, Fm(this);
  }
  function n0() {
    this.imgCount--, Fm(this);
  }
  var wr = null;
  function Or(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, wr = /* @__PURE__ */ new Map(), t.forEach(a0, e), wr = null, Gi.call(e));
  }
  function a0(e, t) {
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
    $$typeof: H,
    Provider: null,
    Consumer: null,
    _currentValue: We,
    _currentValue2: We,
    _threadCount: 0
  };
  function l0(e, t, n, a, l, i, c, f, y) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Yr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Yr(0), this.hiddenUpdates = Yr(null), this.identifierPrefix = a, this.onUncaughtError = l, this.onCaughtError = i, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = y, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Pm(e, t, n, a, l, i, c, f, y, C, z, Q) {
    return e = new l0(
      e,
      t,
      n,
      c,
      y,
      C,
      z,
      Q,
      f
    ), t = 1, i === !0 && (t |= 24), i = Lt(3, null, null, t), e.current = i, i.stateNode = e, t = Ns(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: t
    }, Cs(i), e;
  }
  function Wm(e) {
    return e ? (e = ml, e) : ml;
  }
  function ep(e, t, n, a, l, i) {
    l = Wm(l), a.context === null ? a.context = l : a.pendingContext = l, a = sa(t), a.payload = { element: n }, i = i === void 0 ? null : i, i !== null && (a.callback = i), n = ca(e, a, t), n !== null && (Gt(n, e, t), bi(n, e, t));
  }
  function tp(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function oo(e, t) {
    tp(e, t), (e = e.alternate) && tp(e, t);
  }
  function np(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = qa(e, 67108864);
      t !== null && Gt(t, e, 67108864), oo(e, 67108864);
    }
  }
  function ap(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = en();
      t = Xr(t);
      var n = qa(e, t);
      n !== null && Gt(n, e, t), oo(e, t);
    }
  }
  var Yl = !0;
  function i0(e, t, n, a) {
    var l = W.T;
    W.T = null;
    var i = fe.p;
    try {
      fe.p = 2, fo(e, t, n, a);
    } finally {
      fe.p = i, W.T = l;
    }
  }
  function u0(e, t, n, a) {
    var l = W.T;
    W.T = null;
    var i = fe.p;
    try {
      fe.p = 8, fo(e, t, n, a);
    } finally {
      fe.p = i, W.T = l;
    }
  }
  function fo(e, t, n, a) {
    if (Yl) {
      var l = ho(a);
      if (l === null)
        Kc(
          e,
          t,
          a,
          Cr,
          n
        ), ip(e, a);
      else if (s0(
        l,
        e,
        t,
        n,
        a
      ))
        a.stopPropagation();
      else if (ip(e, a), t & 4 && -1 < r0.indexOf(e)) {
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
                      var y = 1 << 31 - kt(c);
                      f.entanglements[1] |= y, c &= ~y;
                    }
                    zn(i), (Ye & 6) === 0 && (hr = Qt() + 500, Mi(0));
                  }
                }
                break;
              case 31:
              case 13:
                f = qa(i, 2), f !== null && Gt(f, i, 2), gr(), oo(i, 2);
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
  function lp(e) {
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
        switch (bg()) {
          case Go:
            return 2;
          case Yo:
            return 8;
          case ru:
          case Eg:
            return 32;
          case Xo:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var po = !1, Sa = null, Ta = null, Aa = null, Yi = /* @__PURE__ */ new Map(), Xi = /* @__PURE__ */ new Map(), Na = [], r0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function ip(e, t) {
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
    }, t !== null && (t = al(t), t !== null && np(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function s0(e, t, n, a, l) {
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
  function up(e) {
    var t = Ua(e.target);
    if (t !== null) {
      var n = m(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = v(n), t !== null) {
            e.blockedOn = t, Fo(e.priority, function() {
              ap(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = b(n), t !== null) {
            e.blockedOn = t, Fo(e.priority, function() {
              ap(n);
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
        return t = al(n), t !== null && np(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function rp(e, t, n) {
    xr(e) && n.delete(t);
  }
  function c0() {
    po = !1, Sa !== null && xr(Sa) && (Sa = null), Ta !== null && xr(Ta) && (Ta = null), Aa !== null && xr(Aa) && (Aa = null), Yi.forEach(rp), Xi.forEach(rp);
  }
  function Rr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, po || (po = !0, u.unstable_scheduleCallback(
      u.unstable_NormalPriority,
      c0
    )));
  }
  var jr = null;
  function sp(e) {
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
          var i = al(n);
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
      up(n), n.blockedOn === null && Na.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var l = n[a], i = n[a + 1], c = l[qt] || null;
        if (typeof i == "function")
          c || sp(n);
        else if (c) {
          var f = null;
          if (i && i.hasAttribute("formAction")) {
            if (l = i, c = i[qt] || null)
              f = c.formAction;
            else if (mo(l) !== null) continue;
          } else f = c.action;
          typeof f == "function" ? n[a + 1] = f : (n.splice(a, 3), a -= 3), sp(n);
        }
      }
  }
  function cp() {
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
  function go(e) {
    this._internalRoot = e;
  }
  Dr.prototype.render = go.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(s(409));
    var n = t.current, a = en();
    ep(n, a, e, t, null, null);
  }, Dr.prototype.unmount = go.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      ep(e.current, 2, null, e, null, null), gr(), t[nl] = null;
    }
  };
  function Dr(e) {
    this._internalRoot = e;
  }
  Dr.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = $o();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Na.length && t !== 0 && t < Na[n].priority; n++) ;
      Na.splice(n, 0, e), n === 0 && up(e);
    }
  };
  var op = r.version;
  if (op !== "19.3.0")
    throw Error(
      s(
        527,
        op,
        "19.3.0"
      )
    );
  fe.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = E(t), e = e !== null ? N(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var o0 = {
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
          o0
        ), Kt = Ur;
      } catch {
      }
  }
  return ki.createRoot = function(e, t) {
    if (!d(e)) throw Error(s(299));
    var n = !1, a = "", l = Wd, i = eh, c = th;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (l = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (c = t.onRecoverableError)), t = Pm(
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
      cp
    ), e[nl] = t.current, Qc(e), new go(t);
  }, ki.hydrateRoot = function(e, t, n) {
    if (!d(e)) throw Error(s(299));
    var a = !1, l = "", i = Wd, c = eh, f = th, y = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (i = n.onUncaughtError), n.onCaughtError !== void 0 && (c = n.onCaughtError), n.onRecoverableError !== void 0 && (f = n.onRecoverableError), n.formState !== void 0 && (y = n.formState)), t = Pm(
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
      cp
    ), t.context = Wm(null), n = t.current, a = en(), a = Xr(a), l = sa(a), l.callback = null, ca(n, l, a), n = a, t.current.lanes = n, ti(t, n), zn(t), e[nl] = t.current, Qc(e), new Dr(t);
  }, ki.version = "19.3.0", ki;
}
var Ep;
function b0() {
  if (Ep) return bo.exports;
  Ep = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (r) {
        console.error(r);
      }
  }
  return u(), bo.exports = y0(), bo.exports;
}
var E0 = b0(), S0 = Lp();
function Ip(u, r) {
  if (r) return r;
  const o = new URLSearchParams(u.location.search).get("hana-host-origin");
  if (o) return o;
  try {
    return new URL(u.document.referrer).origin;
  } catch {
    return "*";
  }
}
function Bp(u, r, o) {
  return u.source !== r ? !1 : o === "*" || u.origin === o;
}
var T0 = 600, A0 = 120, N0 = 4e3, Vp = 20, Sp = 4096, Tp = 1e4, _0 = /* @__PURE__ */ new Set(["scroll_element", "click_sequence", "drag_element", "press_key"]), w0 = /* @__PURE__ */ new Set([
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
]), Gp = "hana-ui-", O0 = 512, C0 = 1, Ap = /* @__PURE__ */ new WeakMap(), qr = /* @__PURE__ */ new WeakMap();
function Kl(u) {
  return typeof u == "object" && u !== null && !Array.isArray(u);
}
function Ir(u) {
  return u.nodeType === 9;
}
function qo(u) {
  return Ir(u) ? u : u.ownerDocument;
}
function x0(u) {
  return Ir(u) ? u.body : u;
}
function Yp(u, r) {
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
function Lo(u) {
  const r = u.ownerDocument.defaultView?.HTMLTextAreaElement;
  return r ? u instanceof r : u instanceof HTMLTextAreaElement;
}
function Xp(u) {
  const r = u.ownerDocument.defaultView?.HTMLButtonElement;
  return r ? u instanceof r : u instanceof HTMLButtonElement;
}
function R0(u) {
  const r = u.ownerDocument.defaultView?.HTMLSelectElement;
  return r ? u instanceof r : u.tagName === "SELECT";
}
function j0(u) {
  const r = u.ownerDocument.defaultView?.HTMLAnchorElement;
  return r ? u instanceof r : u.tagName === "A";
}
function Qp(u) {
  if (!Fl(u)) return !0;
  const r = u.ownerDocument.defaultView?.getComputedStyle(u);
  return !r || r.display !== "none" && r.visibility !== "hidden";
}
function D0(u) {
  return Fl(u) ? lu(u) || Lo(u) || Xp(u) || R0(u) || j0(u) || u.hasAttribute("contenteditable") || u.hasAttribute("onclick") || ["button", "switch", "textbox", "combobox", "slider", "checkbox", "link"].includes(u.getAttribute("role") ?? "") : !1;
}
function U0(u) {
  const r = u.ownerDocument;
  let o = Ap.get(r);
  o || (o = /* @__PURE__ */ new WeakMap(), Ap.set(r, o));
  const s = o.get(u), d = qr.get(r);
  if (s && d?.has(s)) return s;
  let m = s;
  if (!m)
    do
      m = `${Gp}${C0++}`;
    while (r.getElementById(m));
  o.set(u, m);
  let v = qr.get(r);
  if (v || (v = /* @__PURE__ */ new Map(), qr.set(r, v)), v.size >= O0) {
    const b = v.keys().next().value;
    b && v.delete(b);
  }
  return v.set(m, new WeakRef(u)), m;
}
function z0(u, r) {
  const o = u, s = { tagName: u.tagName.toLowerCase() };
  typeof o.id == "string" && o.id && (s.id = o.id.slice(0, 80)), typeof o.className == "string" && o.className.trim() && (s.className = o.className.trim().slice(0, 120));
  const d = o.textContent?.trim();
  return d && (s.text = d.slice(0, 160)), (lu(u) || Lo(u)) && (u.disabled && (s.disabled = !0), u.type && (s.type = u.type)), o.id ? s.elementId = o.id : r && D0(u) && (s.elementId = U0(u)), s;
}
function M0(u, r) {
  const o = [], s = x0(u);
  if (!s) return { outline: o, visibleNodeCount: 0, totalNodeCount: 0, truncated: !1 };
  const d = qo(u).createTreeWalker(s, 1);
  let m = d.currentNode, v = 0, b = 0;
  for (; m && b < T0; ) {
    if (m.nodeType === 1) {
      const S = m;
      b += 1, Qp(S) && (v += 1, o.length < A0 && o.push(z0(S, r)));
    }
    m = d.nextNode();
  }
  return { outline: o, visibleNodeCount: v, totalNodeCount: b, truncated: m !== null };
}
function Do(u, r, o = !1) {
  if (typeof r != "string" || !r.trim()) return null;
  const s = r.trim(), d = qo(u), m = s.startsWith(Gp) ? qr.get(d)?.get(s)?.deref() ?? null : d.getElementById(s);
  return m && Yp(u, m) && (!o || Qp(m)) ? m : null;
}
function Kp(u) {
  return Fl(u) ? lu(u) && (u.type === "file" || u.disabled) ? { ok: !1, error: "This element cannot be clicked." } : Xp(u) && u.disabled ? { ok: !1, error: "This element cannot be clicked." } : (u.click(), { ok: !0 }) : { ok: !1, error: "Target is not an element." };
}
function Np(u, r) {
  const o = lu(u) ? u.ownerDocument.defaultView?.HTMLInputElement.prototype : u.ownerDocument.defaultView?.HTMLTextAreaElement.prototype, s = o && Object.getOwnPropertyDescriptor(o, "value")?.set;
  s ? s.call(u, r) : u.value = r;
}
function H0(u, r, o) {
  const s = typeof r == "string" ? r.slice(0, N0) : "";
  if (lu(u)) {
    if (u.type === "file" || u.disabled || u.readOnly) return { ok: !1, error: "This element cannot accept text." };
    o ? Np(u, `${u.value}${s}`) : u.value = `${u.value}${s}`;
  } else if (Lo(u)) {
    if (u.disabled || u.readOnly) return { ok: !1, error: "This element cannot accept text." };
    o ? Np(u, `${u.value}${s}`) : u.value = `${u.value}${s}`;
  } else return { ok: !1, error: "This element cannot accept text." };
  return u.dispatchEvent(new Event("input", { bubbles: !0 })), u.dispatchEvent(new Event("change", { bubbles: !0 })), { ok: !0 };
}
function eu(u, r) {
  const o = Do(u, r, !0);
  return o && Fl(o) ? o : null;
}
function Lr(u, r) {
  return typeof u == "number" && Number.isFinite(u) && Math.abs(u) <= r ? u : null;
}
function q0(u, r) {
  const o = r.scrollX === void 0 ? 0 : Lr(r.scrollX, Tp), s = r.scrollY === void 0 ? 0 : Lr(r.scrollY, Tp);
  if (o === null || s === null || o === 0 && s === 0) return { ok: !1, code: "UI_ACTION_SCROLL_INVALID", error: "scroll_element requires bounded non-zero scroll coordinates." };
  const d = r.elementId === void 0 ? Ir(u) ? u.scrollingElement ?? u.documentElement : u : eu(u, r.elementId);
  return !d || !Fl(d) ? { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No visible element matches this elementId." } : (d.scrollLeft += o, d.scrollTop += s, d.dispatchEvent(new Event("scroll", { bubbles: !1 })), { ok: !0, result: { scrollLeft: d.scrollLeft, scrollTop: d.scrollTop } });
}
function L0(u) {
  const r = Array.isArray(u.steps) ? u.steps : u.elementIds;
  if (!Array.isArray(r) || r.length < 1 || r.length > Vp) return null;
  const o = r.map((s) => {
    if (typeof s == "string") return s.trim();
    if (!Kl(s)) return "";
    const d = typeof s.elementId == "string" ? s.elementId.trim() : "", m = Array.isArray(s.elementIds) && s.elementIds.length === 1 && typeof s.elementIds[0] == "string" ? s.elementIds[0].trim() : "";
    return d || m;
  });
  return o.every(Boolean) ? o : null;
}
function I0(u, r) {
  const o = L0(r);
  if (!o) return { ok: !1, code: "UI_ACTION_SEQUENCE_INVALID", error: "click_sequence requires one to twenty element IDs." };
  let s = 0;
  for (const [d, m] of o.entries()) {
    const v = eu(u, m);
    if (!v) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: `Sequence target ${d + 1} is unavailable.`, result: { completedCount: s, failedIndex: d } };
    const b = Kp(v);
    if (b.ok === !1) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_OPERABLE", error: b.error, result: { completedCount: s, failedIndex: d } };
    s += 1;
  }
  return { ok: !0, result: { completedCount: s } };
}
function Ao(u, r, o, s, d) {
  const m = u.ownerDocument.defaultView?.MouseEvent ?? MouseEvent;
  u.dispatchEvent(new m(r, { bubbles: !0, cancelable: !0, clientX: o, clientY: s, buttons: d }));
}
function No(u, r, o, s, d) {
  const m = u.ownerDocument.defaultView, v = m?.PointerEvent ?? m?.MouseEvent ?? MouseEvent;
  u.dispatchEvent(new v(r, { bubbles: !0, cancelable: !0, clientX: o, clientY: s, buttons: d }));
}
function B0(u, r) {
  const o = eu(u, r.elementId);
  if (!o) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No visible source element matches this elementId." };
  const s = r.deltaX === void 0 ? 0 : Lr(r.deltaX, Sp), d = r.deltaY === void 0 ? 0 : Lr(r.deltaY, Sp);
  if (s === null || d === null) return { ok: !1, code: "UI_ACTION_DRAG_INVALID", error: "drag_element coordinates must be finite and bounded." };
  const m = r.targetElementId === void 0 ? null : eu(u, r.targetElementId);
  if (r.targetElementId !== void 0 && !m) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No visible target element matches targetElementId." };
  if (!m && s === 0 && d === 0) return { ok: !1, code: "UI_ACTION_DRAG_TARGET_REQUIRED", error: "drag_element requires a target element or non-zero delta." };
  const v = o.getBoundingClientRect(), b = v.left + v.width / 2, S = v.top + v.height / 2, E = m?.getBoundingClientRect(), N = E ? E.left + E.width / 2 : b + s, p = E ? E.top + E.height / 2 : S + d, B = m ?? o;
  No(o, "pointerdown", b, S, 1), Ao(o, "mousedown", b, S, 1);
  for (const A of [0.25, 0.5, 0.75]) {
    const x = b + (N - b) * A, V = S + (p - S) * A;
    No(B, "pointermove", x, V, 1), Ao(B, "mousemove", x, V, 1);
  }
  return No(B, "pointerup", N, p, 0), Ao(B, "mouseup", N, p, 0), { ok: !0, result: { dragged: !0, endX: N, endY: p } };
}
function V0(u, r) {
  const o = r.key === void 0 ? r.keys : [r.key];
  if (!Array.isArray(o) || o.length < 1 || o.length > Vp || o.some((S) => typeof S != "string")) return { ok: !1, code: "UI_ACTION_KEY_INVALID", error: "press_key requires supported key names or single characters." };
  const s = o.map((S) => S.trim());
  if (s.some((S) => !(S.length === 1 || w0.has(S)))) return { ok: !1, code: "UI_ACTION_KEY_INVALID", error: "press_key requires supported key names or single characters." };
  const d = qo(u).activeElement, m = r.elementId === void 0 ? d && Yp(u, d) && Fl(d) ? d : null : eu(u, r.elementId);
  if (!m) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No focused visible element is available for press_key." };
  r.elementId !== void 0 && m.focus();
  const v = m.ownerDocument.defaultView?.KeyboardEvent ?? KeyboardEvent, b = { ctrlKey: r.ctrlKey === !0, metaKey: r.metaKey === !0, altKey: r.altKey === !0, shiftKey: r.shiftKey === !0 };
  for (const S of s)
    m.dispatchEvent(new v("keydown", { bubbles: !0, cancelable: !0, key: S, ...b })), m.dispatchEvent(new v("keyup", { bubbles: !0, cancelable: !0, key: S, ...b }));
  return { ok: !0, result: { pressedKeys: s } };
}
function kp(u, r, o = !1) {
  const s = Kl(r) && typeof r.action == "string" ? r.action : "";
  if (s === "describe_dom") return { ok: !0, result: M0(u, o) };
  if (s === "read_state") return { ok: !0, result: { state: {} } };
  if (s === "click_element") {
    const d = Do(u, Kl(r) ? r.elementId : null, o);
    if (!d) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No element matches this elementId." };
    const m = Kp(d);
    return m.ok === !0 ? { ok: !0, result: { clicked: !0 } } : { ok: !1, code: "UI_ACTION_ELEMENT_NOT_OPERABLE", error: m.error };
  }
  if (s === "type_text") {
    const d = Do(u, Kl(r) ? r.elementId : null, o);
    if (!d) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No element matches this elementId." };
    const m = H0(d, Kl(r) ? r.text : "", o);
    return m.ok === !0 ? { ok: !0, result: { typed: !0 } } : { ok: !1, code: "UI_ACTION_ELEMENT_NOT_OPERABLE", error: m.error };
  }
  return _0.has(s) && !o ? { ok: !1, code: "UI_ACTION_UNSUPPORTED_FOR_APP_CARD", error: `App cards do not support ${s}.` } : Kl(r) ? s === "scroll_element" ? q0(u, r) : s === "click_sequence" ? I0(u, r) : s === "drag_element" ? B0(u, r) : s === "press_key" ? V0(u, r) : { ok: !1, code: "UI_ACTION_UNKNOWN_ACTION", error: `Unknown UI action: ${s || "(missing)"}.` } : { ok: !1, code: "UI_ACTION_UNKNOWN_ACTION", error: `Unknown UI action: ${s || "(missing)"}.` };
}
var dt = "hana.plugin.ui", ht = 1, G0 = "X-Hana-App-Surface-Session", Y0 = "appSurfaceSession", $i = {
  CONTEXT: "hana.input-panel.context",
  SUBMIT: "hana.input-panel.submit",
  PRESENTATION: "hana.input-panel.presentation"
}, _p = 64 * 1024, Zp = {
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
}, kl = {
  GET: "hana.app.storage.get",
  GET_ALL: "hana.app.storage.getAll",
  SET: "hana.app.storage.set",
  DELETE: "hana.app.storage.delete",
  KEYS: "hana.app.storage.keys"
}, X0 = {
  CHANGED: "hana.app.storage.changed"
}, Jp = { OPEN: "hana.cards.open" }, zr = {
  GET_ACTIVE: "hana.sessions.get-active",
  SUBSCRIBE: "hana.sessions.subscribe-active",
  UNSUBSCRIBE: "hana.sessions.unsubscribe-active",
  FOCUS: "hana.sessions.focus"
}, wp = {
  ACTIVE_CHANGED: "hana.sessions.active-changed",
  ERROR: "hana.sessions.error"
}, Uo = {
  SET_INTERACTIVE_REGIONS: "hana.surface.set-interactive-regions"
};
function Q0(u) {
  if (!An(u) || Object.keys(u).length !== 1 || !Array.isArray(u.regions))
    return { ok: !1, error: "hana.surface.setInteractiveRegions requires exactly one regions array." };
  if (u.regions.length > 64)
    return { ok: !1, error: "hana.surface.setInteractiveRegions accepts at most 64 regions." };
  const r = [];
  for (const o of u.regions) {
    if (!An(o) || Object.keys(o).length !== 4)
      return { ok: !1, error: "Each interactive region must contain exactly x, y, width, and height." };
    const { x: s, y: d, width: m, height: v } = o;
    if (typeof s != "number" || typeof d != "number" || typeof m != "number" || typeof v != "number" || !Number.isFinite(s) || !Number.isFinite(d) || !Number.isFinite(m) || !Number.isFinite(v))
      return { ok: !1, error: "Interactive region coordinates must be finite numbers." };
    if (m <= 0 || v <= 0 || Math.abs(s) > 1e6 || Math.abs(d) > 1e6 || Math.abs(m) > 1e6 || Math.abs(v) > 1e6)
      return { ok: !1, error: "Interactive region bounds are invalid." };
    r.push({ x: s, y: d, width: m, height: v });
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
function k0(u) {
  return !An(u) || !iu(u.viewToken) ? { ok: !1, error: "A chrome binding requires a host-minted view token." } : u.resync !== void 0 && typeof u.resync != "boolean" ? { ok: !1, error: "A chrome binding resync flag must be a boolean when present." } : { ok: !0, value: { viewToken: u.viewToken, ...u.resync === void 0 ? {} : { resync: u.resync } } };
}
function Z0(u) {
  return !An(u) || !iu(u.challengeId) ? { ok: !1, error: "A chrome challenge requires a host-minted challenge id." } : { ok: !0, value: { challengeId: u.challengeId } };
}
function J0(u) {
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
function $0(u) {
  if (!An(u))
    return { ok: !1, error: "App chrome action request must be an object." };
  const r = u.kind;
  if (r !== "action" && r !== "tab-select" && r !== "tab-close")
    return { ok: !1, error: 'App chrome action request kind must be "action", "tab-select" or "tab-close".' };
  const o = J0(u);
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
}, F0 = 256;
function tu(u) {
  if (typeof u != "string" || u.length === 0 || u.length > F0 || u.trim().length === 0)
    return !1;
  for (let r = 0; r < u.length; r += 1) {
    const o = u.charCodeAt(r);
    if (o <= 31 || o === 127)
      return !1;
  }
  return !0;
}
function Io(u, r) {
  const o = Reflect.ownKeys(u);
  if (o.length !== r.length)
    return !1;
  for (const s of o)
    if (typeof s != "string" || !r.includes(s))
      return !1;
  return !0;
}
function _o(u) {
  return !An(u) || !Io(u, ["viewKind", "revision", "state"]) ? { ok: !1, error: "App view-state snapshot must carry exactly viewKind, revision and state." } : u.viewKind !== "compact" && u.viewKind !== "detached" ? { ok: !1, error: 'App view-state snapshot kind must be "compact" or "detached".' } : !Number.isSafeInteger(u.revision) || u.revision < 0 ? { ok: !1, error: "App view-state snapshot revision must be a non-negative safe integer." } : u.state === void 0 ? { ok: !1, error: "App view-state snapshot requires a state object or an explicit null." } : u.revision === 0 && u.state !== null ? { ok: !1, error: "App view-state revision 0 only carries a null state." } : { ok: !0, value: { viewKind: u.viewKind, revision: u.revision, state: u.state } };
}
function wo(u) {
  return !An(u) || !Io(u, ["viewToken", "bindingId", "registrationId", "snapshot"]) ? { ok: !1, error: "App view-state reply must echo exactly a view token, namespace binding id, registration id and snapshot." } : iu(u.viewToken) ? tu(u.bindingId) ? tu(u.registrationId) ? {
    ok: !0,
    value: { viewToken: u.viewToken, bindingId: u.bindingId, registrationId: u.registrationId, snapshot: u.snapshot }
  } : { ok: !1, error: "App view-state reply requires an opaque registration id." } : { ok: !1, error: "App view-state reply requires an opaque namespace binding id." } : { ok: !1, error: "App view-state reply requires the host-minted view token." };
}
function Ji(u, r) {
  return u.viewToken !== r.viewToken || u.bindingId !== r.bindingId ? !1 : r.registrationId === void 0 ? !0 : u.registrationId === r.registrationId;
}
function Op(u) {
  return !An(u) || !Io(u, ["viewToken", "bindingId", "registrationId", "released"]) ? { ok: !1, error: "App view-state release reply must echo exactly a view token, namespace binding id, registration id and a boolean released flag." } : iu(u.viewToken) ? tu(u.bindingId) ? tu(u.registrationId) ? typeof u.released != "boolean" ? { ok: !1, error: "App view-state release reply requires a boolean released flag." } : { ok: !0, value: { viewToken: u.viewToken, bindingId: u.bindingId, registrationId: u.registrationId, released: u.released } } : { ok: !1, error: "App view-state release reply requires an opaque registration id." } : { ok: !1, error: "App view-state release reply requires an opaque namespace binding id." } : { ok: !1, error: "App view-state release reply requires the host-minted view token." };
}
var P0 = /^\/api\/apps\/([^/]+)\/ui(?:\/|$)/, W0 = /^\/api\/apps\/([^/]+)\/routes\/_runtime\/([^/]+)\/_surface\/([^/]+)\//;
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
function Bo(u) {
  if (typeof u != "string" || !u.startsWith("/api/apps/"))
    return null;
  const r = W0.exec(u);
  if (r) {
    const s = Mr(r[1]), d = Mr(r[2]), m = Mr(r[3]);
    return s === null || d === null || m === null ? null : { appId: s, kind: "runtime" };
  }
  const o = P0.exec(u);
  if (o) {
    const s = Mr(o[1]);
    return s === null ? null : { appId: s, kind: "ui" };
  }
  return null;
}
var eb = 256;
function $p(u) {
  if (u !== void 0)
    return typeof u != "string" || u.length === 0 || u.length > eb || u.includes("\0") || u.trim().length === 0 ? null : u;
}
var tb = {
  CONTEXT: "hana.surface.context"
}, nb = /* @__PURE__ */ new Set([
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
      code: Zp.BAD_MESSAGE,
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
        code: Zp.UNSUPPORTED_VERSION,
        message: `Unsupported Plugin UI protocol version: ${String(u.version)}.`
      }
    };
  if (typeof u.kind != "string" || !nb.has(u.kind))
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
var ab = [
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
], lb = [
  "cards",
  "agentTypes",
  "configuration",
  "settingsTab",
  "page",
  "widget"
], ib = [
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
], ub = ["restricted", "full-access"];
new Set(ab);
new Set(lb);
new Set(ib);
new Set(ub);
var rb = Object.values(Ie);
new Set(rb);
var Pi = class extends Error {
  reason;
  constructor(u, r) {
    super(r), this.name = "AppCurrentViewBindingError", this.reason = u;
  }
};
function sb() {
  return `chrome-doc:${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`;
}
function cb(u) {
  return JSON.stringify([u.appId, u.cardInstanceId ?? null, u.instanceKey ?? null]);
}
function ob(u) {
  const r = sb();
  let o = null, s = !1, d, m = !0;
  const v = /* @__PURE__ */ new Set(), b = /* @__PURE__ */ new Set();
  let S = 0;
  const E = () => {
    S += 1;
  }, N = (k) => new Pi("unavailable", k), p = () => new Pi(
    "identity-changed",
    "The current App card identity changed while this view write waited."
  ), B = () => new Pi(
    "token-stale",
    "The held view token is no longer the current document."
  ), A = (k) => {
    v.delete(k), u.targetWindow.clearTimeout(k.timer), k.signal && k.onAbort && k.signal.removeEventListener("abort", k.onAbort);
  }, x = (k, ie) => {
    A(k), k.reject(ie);
  }, V = (k, ie) => {
    const ne = o !== k, ue = m;
    o = k, m = !0, (ne || !ue) && E();
    for (const pe of [...v]) {
      if (A(pe), pe.identity !== void 0 && pe.identity !== d) {
        pe.reject(p());
        continue;
      }
      pe.resolve(k);
    }
    if (b.size === 0) return;
    const ye = { changed: ne, resync: ie }, re = S;
    for (const pe of [...b]) {
      if (s || re !== S) return;
      b.has(pe) && pe.listener(ye);
    }
  };
  return {
    handleHostMessage: (k) => {
      const ie = k.type === Zl.CHALLENGE, ne = k.type === Zl.BINDING;
      if (!ie && !ne) return !1;
      if (s) return !0;
      if (ie && k.kind === "event") {
        const ue = Z0(k.payload);
        return ue.ok === !0 && (u.post({
          protocol: dt,
          version: ht,
          kind: "event",
          type: Zl.ACK,
          payload: { challengeId: ue.value.challengeId, documentNonce: r }
        }), s || u.reannounceReady?.()), !0;
      }
      if (ne && k.kind === "event") {
        const ue = k0(k.payload);
        return ue.ok === !0 && V(ue.value.viewToken, ue.value.resync === !0), !0;
      }
      return !0;
    },
    applySurfaceContext: (k) => {
      if (s) return;
      if (k === null) {
        if (!m) return;
        m = !1, E();
        return;
      }
      const ie = cb(k);
      if (d !== ie) {
        if (d !== void 0) {
          for (const ne of [...v]) x(ne, p());
          o = null;
        }
        d = ie, E();
      }
    },
    currentToken() {
      return !s && m ? o : null;
    },
    waitForToken: (k, ie) => s ? Promise.reject(N("The current App card view binding was released.")) : ie?.aborted ? Promise.reject(N("The current App card view wait was aborted.")) : o && m ? Promise.resolve(o) : new Promise((ne, ue) => {
      const ye = {
        resolve: ne,
        reject: ue,
        identity: d,
        timer: u.targetWindow.setTimeout(() => {
          A(ye), ue(N("The host has not bound this App card view; the current view is unavailable here."));
        }, k)
      };
      ie && (ye.signal = ie, ye.onAbort = () => x(ye, N("The current App card view wait was aborted.")), ie.addEventListener("abort", ye.onAbort)), v.add(ye);
    }),
    assertCurrentToken: (k) => {
      if (s) throw N("The current App card view binding was released.");
      if (!m || !o)
        throw N("The current App card view is not writable here right now.");
      if (o !== k) throw B();
    },
    onBinding(k) {
      if (s) return () => {
      };
      const ie = { listener: k };
      return b.add(ie), () => {
        b.delete(ie);
      };
    },
    dispose() {
      if (!s) {
        s = !0, o = null, m = !1;
        for (const k of [...v])
          x(k, N("The current App card view binding was released."));
        v.clear(), b.clear();
      }
    }
  };
}
function fb(u, r) {
  let o = null, s = 0;
  const d = (v) => {
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
    b && (o = null, b.detach(), v && b.scrolled && d(!1));
  };
  return {
    register(v) {
      if (!v || typeof v.scrollTop != "number" || typeof v.addEventListener != "function")
        throw new TypeError("hana.chrome.registerScrollSource requires an element.");
      m(!0);
      const b = ++s, S = v.ownerDocument?.defaultView, E = { generation: b, scrolled: v.scrollTop > 0, detach: () => {
      } }, N = () => {
        if (!o || o.generation !== b) return;
        const A = v.scrollTop > 0;
        A !== o.scrolled && (o.scrolled = A, d(A));
      };
      v.addEventListener("scroll", N, { passive: !0 });
      const p = S?.ResizeObserver, B = p ? new p(N) : null;
      return B?.observe(v), E.detach = () => {
        v.removeEventListener("scroll", N), B?.disconnect();
      }, o = E, E.scrolled && d(!0), () => {
        if (!o || o.generation !== b) return;
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
function db(u) {
  const r = { requestId: u.requestId, revision: u.revision };
  return u.kind === "action" ? { ...r, kind: "action", actionId: u.actionId } : u.kind === "tab-select" ? { ...r, kind: "tab-select", tabId: u.tabId } : { ...r, kind: "tab-close", tabId: u.tabId };
}
var hb = 1e4;
function mb(u) {
  const r = u.requestTimeoutMs ?? hb, o = u.currentView;
  let s = !1, d = null;
  const m = new AbortController(), v = fb(() => s ? null : o.currentToken(), u.post), b = o.onBinding((I) => {
    s || (I.changed || I.resync) && v.flush();
  }), S = () => Object.assign(
    new Error("The App card business identity changed; this chrome write is stale."),
    { code: Pn.VIEW_STALE }
  ), E = () => Object.assign(
    new Error("The host has not bound this App card view; chrome is unavailable here."),
    { code: Pn.UNAVAILABLE }
  ), N = () => Object.assign(
    new Error("The App chrome view was released."),
    { code: Pn.UNAVAILABLE }
  ), p = (I) => I instanceof Pi ? I.reason === "unavailable" ? E() : S() : I, B = (I, le) => {
    u.post({
      protocol: dt,
      version: ht,
      id: I.id,
      type: I.type,
      ...le
    });
  }, A = (I) => {
    if (I.type !== Zl.ACTION) return !1;
    if (s) return !0;
    if (I.kind !== "request") return !1;
    const le = $0(I.payload);
    if (le.ok === !1)
      return B(I, { kind: "error", error: { code: Pn.BAD_PAYLOAD, message: le.error } }), !0;
    const Ee = le.value, he = {
      requestId: Ee.requestId,
      revision: Ee.revision,
      generation: Ee.generation,
      viewToken: Ee.viewToken
    }, k = d;
    if (!k)
      return B(I, {
        kind: "error",
        payload: he,
        error: { code: Pn.ACTION_UNHANDLED, message: "This App has no chrome action handler." }
      }), !0;
    if (Ee.viewToken !== o.currentToken())
      return B(I, {
        kind: "error",
        payload: he,
        error: { code: Pn.VIEW_STALE, message: "This chrome action belongs to a replaced view." }
      }), !0;
    const ie = () => !s && d === k && Ee.viewToken === o.currentToken();
    return Promise.resolve().then(async () => {
      if (!ie()) {
        B(I, {
          kind: "error",
          payload: he,
          error: { code: Pn.VIEW_STALE, message: "This chrome action belongs to a replaced view." }
        });
        return;
      }
      let ne;
      try {
        ne = await k.fn(db(Ee));
      } catch (ue) {
        if (!ie()) return;
        B(I, {
          kind: "error",
          payload: he,
          error: {
            code: Pn.ACTION_FAILED,
            message: ue instanceof Error ? ue.message : "The App chrome action handler failed."
          }
        });
        return;
      }
      ie() && B(I, {
        kind: "response",
        payload: {
          ...he,
          status: ne && ne.status === "rejected" ? "rejected" : "handled",
          ...ne && typeof ne.message == "string" && ne.message ? { message: ne.message } : {}
        }
      });
    }), !0;
  }, x = () => v.dispose();
  u.targetWindow.addEventListener("pagehide", x);
  const V = (I) => {
    if (s)
      throw Object.assign(new Error(`The App chrome view was released; ${I} is unavailable.`), { code: Pn.UNAVAILABLE });
  };
  return {
    api: {
      set(I, le) {
        const Ee = le?.timeoutMs ?? r;
        return o.waitForToken(Ee, m.signal).then(
          (he) => {
            V("hana.chrome.set");
            try {
              o.assertCurrentToken(he);
            } catch (k) {
              throw p(k);
            }
            return u.request(Zl.SET, { description: I, viewToken: he }, { timeoutMs: Ee });
          },
          (he) => {
            throw s ? N() : p(he);
          }
        );
      },
      onAction(I) {
        if (V("hana.chrome.onAction"), typeof I != "function") throw new TypeError("hana.chrome.onAction requires a handler.");
        const le = { fn: I };
        return d = le, () => {
          d === le && (d = null);
        };
      },
      registerScrollSource(I) {
        return V("hana.chrome.registerScrollSource"), v.register(I);
      }
    },
    handleHostMessage: A,
    dispose() {
      s || (s = !0, m.abort(), u.targetWindow.removeEventListener("pagehide", x), b(), d = null, v.dispose());
    }
  };
}
var pb = 16, gb = 4096, vb = 24 * 1024, Et = class extends Error {
  code;
  constructor(u, r) {
    super(r), this.name = "AppViewStateError", this.code = u;
  }
}, yb = new TextEncoder();
function bb(u) {
  return yb.encode(u).length;
}
function Eb(u) {
  if (typeof u != "object" || u === null || Array.isArray(u)) return !1;
  const r = Object.getPrototypeOf(u);
  return r === Object.prototype || r === null;
}
function Sb(u) {
  const r = Number(u);
  return !Number.isInteger(r) || r < 0 || String(r) !== u ? null : r;
}
function Fp(u) {
  return u === "input" ? "VIEW_STATE_INVALID_INPUT" : "VIEW_STATE_INVALID_STORAGE";
}
function Tb(u, r) {
  const o = Fp(r), s = /* @__PURE__ */ new Set();
  let d = 0;
  const m = (v, b) => {
    if (d += 1, d > gb)
      throw new Et(o, "App view state contains too many values.");
    if (b > pb)
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
    const N = Object.getPrototypeOf(E);
    if (Array.isArray(E)) {
      if (N !== Array.prototype)
        throw new Et(o, "App view state must contain only plain arrays.");
      s.add(E);
      const B = E.length;
      for (const x of Reflect.ownKeys(E)) {
        if (typeof x != "string")
          throw new Et(o, "App view state must not contain symbol keys.");
        if (x === "length") {
          const le = Object.getOwnPropertyDescriptor(E, "length");
          if (le.enumerable || le.get || le.set)
            throw new Et(o, "App view state arrays must expose a plain length.");
          continue;
        }
        const V = Sb(x);
        if (V === null || V >= B)
          throw new Et(o, "App view state arrays must not carry extra keys.");
        const I = Object.getOwnPropertyDescriptor(E, x);
        if (!I.enumerable || I.get || I.set)
          throw new Et(o, "App view state arrays must index plain values.");
      }
      const A = [];
      for (let x = 0; x < B; x++) {
        const V = Object.getOwnPropertyDescriptor(E, String(x));
        if (!V)
          throw new Et(o, "App view state must not contain sparse arrays.");
        A.push(m(V.value, b + 1));
      }
      return s.delete(E), A;
    }
    if (N !== Object.prototype && N !== null)
      throw new Et(o, "App view state must contain only plain objects.");
    s.add(E);
    const p = /* @__PURE__ */ Object.create(null);
    for (const B of Reflect.ownKeys(E)) {
      if (typeof B != "string")
        throw new Et(o, "App view state must not contain symbol keys.");
      const A = Object.getOwnPropertyDescriptor(E, B);
      if (!A.enumerable)
        throw new Et(o, "App view state must not contain non-enumerable fields.");
      if (A.get || A.set)
        throw new Et(o, "App view state must not contain accessors.");
      p[B] = m(A.value, b + 1);
    }
    return s.delete(E), p;
  };
  return m(u, 0);
}
function Ab(u, r) {
  if (u === null) return null;
  if (!Eb(u))
    throw new Et(
      Fp(r),
      "App view state must be a JSON object or null."
    );
  return Tb(u, r);
}
function Nb(u, r) {
  if (u === null) return null;
  const o = JSON.stringify(u);
  if (bb(o) > vb)
    throw new Et(
      "VIEW_STATE_TOO_LARGE",
      "App view state exceeds the size budget."
    );
  return JSON.parse(o);
}
function zo(u) {
  return Nb(Ab(u, "input"));
}
var Oe = {
  UNAVAILABLE: "VIEW_STATE_UNAVAILABLE",
  VIEW_STALE: "VIEW_STATE_VIEW_STALE",
  RELEASED: "VIEW_STATE_RELEASED",
  INVALID_INPUT: "VIEW_STATE_INVALID_INPUT",
  BAD_RESPONSE: "VIEW_STATE_BAD_RESPONSE"
}, _b = class extends Error {
  code;
  constructor(u, r) {
    super(r), this.name = "AppViewStateRequestError", this.code = u;
  }
}, wb = 1e4;
function Ce(u, r) {
  return new _b(u, r);
}
function Ob(u) {
  return {
    viewKind: u.viewKind,
    revision: u.revision,
    state: zo(u.state)
  };
}
function Cb(u) {
  const r = u.requestTimeoutMs ?? wb;
  let o = !1, s = 0, d = null;
  const m = /* @__PURE__ */ new Map();
  let v = null, b = null, S = !1;
  const E = (H) => H instanceof Pi ? H.reason === "unavailable" ? Ce(Oe.UNAVAILABLE, "The App card view is not writable here right now.") : Ce(Oe.VIEW_STALE, "The App card view this operation was bound to is no longer current.") : H, N = (H, M) => {
    !H || H.terminated !== null || (H.terminated = M, H.lifetime.abort());
  }, p = (H) => {
    N(d, H), d = null;
    for (const M of m.values()) M.abort.abort();
    m.clear();
  }, B = (H) => {
    if (o || H === null) return;
    if (H.slot !== "card") {
      p("namespace-changed"), b = null, S = !0, v = null;
      return;
    }
    const M = JSON.stringify([H.appId, H.cardInstanceId, H.instanceKey ?? null]), ee = H.viewState?.bindingId ?? null;
    (S && b !== M || ee !== null && v !== null && ee !== v) && p("namespace-changed"), b = M, S = !0, ee !== null && (v = ee);
  }, A = (H) => {
    if (!o && H.changed) {
      N(d, "document-changed"), d = null;
      for (const M of m.values())
        M.tokenCaptured && M.abort.abort();
    }
  }, x = u.subscribeContext(B), V = u.currentView.onBinding(A), I = (H) => u.currentView.currentToken() === H, le = (H) => {
    try {
      u.currentView.assertCurrentToken(H);
    } catch (M) {
      throw E(M);
    }
  }, Ee = (H) => {
    const M = u.getContext();
    if (!M || M.slot !== "card")
      throw Ce(Oe.UNAVAILABLE, "The App view-state namespace is not available on this surface.");
    const ee = M.viewState;
    if (!ee)
      throw Ce(Oe.UNAVAILABLE, "The App view-state namespace is not available here right now.");
    if (ee.bindingId !== H.bindingId || ee.viewKind !== H.viewKind)
      throw Ce(Oe.VIEW_STALE, "This view-state handle belongs to a namespace that is no longer current.");
    if (ee.available !== !0)
      throw Ce(Oe.UNAVAILABLE, "The App view-state namespace is temporarily unavailable.");
  }, he = (H) => H === "document-changed" || H === "namespace-changed" ? Ce(Oe.VIEW_STALE, "This view-state handle's view changed before the operation could be adopted.") : Ce(Oe.RELEASED, "This view-state handle has been released."), k = (H) => {
    if (o)
      throw Ce(Oe.RELEASED, "The App view-state controller was released.");
    if (H.terminated !== null) throw he(H.terminated);
    if (H.lifetime.signal.aborted)
      throw Ce(Oe.RELEASED, "This view-state handle has been released.");
    if (d !== H)
      throw Ce(Oe.VIEW_STALE, "This view-state handle is no longer the current registration.");
    return le(H.viewToken), Ee(H), H.viewToken;
  }, ie = (H, M) => {
    if (o)
      throw Ce(Oe.RELEASED, "The App view-state controller was released.");
    if (H.terminated !== null) throw he(H.terminated);
    if (H.lifetime.signal.aborted)
      throw Ce(Oe.RELEASED, "This view-state handle has been released.");
    if (!I(M))
      throw Ce(Oe.VIEW_STALE, "The document changed before this view-state reply arrived.");
    const ee = u.getContext(), j = ee?.viewState;
    if (!ee || ee.slot !== "card" || !j || j.bindingId !== H.bindingId || j.viewKind !== H.viewKind)
      throw Ce(Oe.VIEW_STALE, "The namespace changed before this view-state reply arrived.");
    if (j.available !== !0)
      throw Ce(Oe.UNAVAILABLE, "The App view-state namespace paused before this reply arrived.");
  }, ne = async (H, M, ee, j) => {
    try {
      return await u.request(H, M, { timeoutMs: ee });
    } catch (F) {
      if (j !== null) {
        if (j.terminated !== null) throw he(j.terminated);
        if (j.lifetime.signal.aborted)
          throw Ce(Oe.RELEASED, "This view-state handle has been released.");
      }
      throw o ? Ce(Oe.RELEASED, "The App view-state controller was released.") : F;
    }
  }, ue = (H, M) => {
    if (M.viewKind !== H)
      throw Ce(Oe.BAD_RESPONSE, "The view-state reply carried a different view kind than the operation targeted.");
    let ee;
    try {
      ee = zo(M.state);
    } catch (j) {
      throw j instanceof Et ? Ce(Oe.BAD_RESPONSE, "The view-state reply carried a state outside the shared JSON budget.") : j;
    }
    return { viewKind: H, revision: M.revision, state: ee };
  }, ye = async (H, M) => {
    const ee = M?.timeoutMs ?? r, j = k(H), F = await ne(Zi.GET, {
      viewToken: j,
      bindingId: H.bindingId,
      registrationId: H.registrationId
    }, ee, H);
    ie(H, j);
    const ae = wo(F);
    if (ae.ok === !1)
      throw Ce(Oe.BAD_RESPONSE, ae.error);
    if (!Ji(ae.value, {
      viewToken: j,
      bindingId: H.bindingId,
      registrationId: H.registrationId
    }))
      throw Ce(Oe.VIEW_STALE, "This view-state reply answered a different view than the one this handle targets.");
    const q = _o(ae.value.snapshot);
    if (q.ok === !1)
      throw Ce(Oe.BAD_RESPONSE, q.error);
    return ue(H.viewKind, q.value);
  }, re = async (H, M, ee) => {
    const j = ee?.timeoutMs ?? r, F = xb(M), ae = zo(M.state), q = k(H), te = await ne(Zi.SET, {
      viewToken: q,
      bindingId: H.bindingId,
      registrationId: H.registrationId,
      expectedRevision: F,
      state: ae
    }, j, H);
    ie(H, q);
    const J = wo(te);
    if (J.ok === !1)
      throw Ce(Oe.BAD_RESPONSE, J.error);
    if (!Ji(J.value, {
      viewToken: q,
      bindingId: H.bindingId,
      registrationId: H.registrationId
    }))
      throw Ce(Oe.VIEW_STALE, "This view-state reply answered a different view than the one this handle targets.");
    const g = _o(J.value.snapshot);
    if (g.ok === !1)
      throw Ce(Oe.BAD_RESPONSE, g.error);
    return ue(H.viewKind, g.value);
  }, pe = async (H, M, ee) => {
    if (!I(H)) return;
    const j = u.getContext();
    if (!(!j || j.slot !== "card" || j.viewState?.bindingId !== M))
      try {
        const F = await u.request(Zi.RELEASE, { viewToken: H, bindingId: M, registrationId: ee }, { timeoutMs: r }), ae = Op(F);
        (ae.ok === !1 || !Ji(ae.value, { viewToken: H, bindingId: M, registrationId: ee })) && console.error("[hana] App view-state cleanup reply did not confirm the released registration.");
      } catch (F) {
        console.error("[hana] failed to release a superseded App view-state registration:", F instanceof Error ? F.message : F);
      }
  }, ge = (H, M) => (H.releasePromise || (H.releasePromise = (async () => {
    const ee = M?.timeoutMs ?? r;
    N(H, "released"), d === H && (d = null);
    const j = u.getContext(), F = j?.viewState;
    if (!(I(H.viewToken) && j?.slot === "card" && !!F && F.bindingId === H.bindingId)) return { released: !1 };
    const q = await u.request(Zi.RELEASE, {
      viewToken: H.viewToken,
      bindingId: H.bindingId,
      registrationId: H.registrationId
    }, { timeoutMs: ee }), te = Op(q);
    if (te.ok === !1)
      throw Ce(Oe.BAD_RESPONSE, te.error);
    if (!Ji(te.value, {
      viewToken: H.viewToken,
      bindingId: H.bindingId,
      registrationId: H.registrationId
    }))
      throw Ce(Oe.VIEW_STALE, "This view-state release reply answered a different view than the one this handle targets.");
    const J = u.getContext();
    if (!I(H.viewToken) || J?.slot !== "card" || J.viewState?.bindingId !== H.bindingId || J.viewState?.viewKind !== H.viewKind)
      throw Ce(Oe.VIEW_STALE, "The namespace changed before this view-state release was confirmed.");
    return { released: te.value.released };
  })()), H.releasePromise), G = (H, M, ee, j, F) => {
    const ae = new AbortController(), q = {
      viewToken: H,
      bindingId: M,
      viewKind: ee,
      registrationId: j,
      lifetime: ae,
      initial: F,
      releasePromise: null,
      terminated: null
    };
    return q.handle = {
      get initial() {
        return Ob(q.initial);
      },
      signal: ae.signal,
      get: (te) => ye(q, te),
      set: (te, J) => re(q, te, J),
      release: (te) => ge(q, te)
    }, q;
  };
  return {
    api: { enable: async (H) => {
      const M = H?.timeoutMs ?? r;
      if (o) throw Ce(Oe.RELEASED, "The App view-state controller was released.");
      const ee = u.getContext();
      if (ee && ee.slot !== "card")
        throw Ce(Oe.UNAVAILABLE, "View-state recovery is only available on an App card surface.");
      const j = ee?.viewState?.bindingId ?? null, F = ++s;
      p("superseded");
      const ae = new AbortController(), q = { abort: ae, tokenCaptured: !1 };
      m.set(F, q);
      let te = null;
      try {
        let J;
        try {
          J = await u.currentView.waitForToken(M, ae.signal);
        } catch (fe) {
          throw o ? Ce(Oe.RELEASED, "The App view-state controller was released.") : ae.signal.aborted ? Ce(Oe.VIEW_STALE, "A newer view-state enable replaced this one before it was bound.") : E(fe);
        }
        if (q.tokenCaptured = !0, o) throw Ce(Oe.RELEASED, "The App view-state controller was released.");
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
        }, M, null), $ = wo(P);
        if ($.ok === !1)
          throw Ce(Oe.BAD_RESPONSE, $.error);
        if (!Ji($.value, { viewToken: J, bindingId: D.bindingId }))
          throw Ce(Oe.VIEW_STALE, "This view-state enable reply answered a different view than the one that was enabled.");
        if (te = { token: J, bindingId: D.bindingId, registrationId: $.value.registrationId }, o) throw Ce(Oe.RELEASED, "The App view-state controller was released.");
        if (F !== s || ae.signal.aborted || !m.has(F))
          throw Ce(Oe.VIEW_STALE, "This view-state enable was voided before its reply arrived.");
        if (!I(J))
          throw Ce(Oe.VIEW_STALE, "The document changed before this view-state enable reply arrived.");
        const ce = u.getContext();
        if (!ce || ce.slot !== "card" || ce.viewState?.bindingId !== D.bindingId || ce.viewState?.viewKind !== D.viewKind)
          throw Ce(Oe.VIEW_STALE, "The namespace changed before this view-state enable reply arrived.");
        if (ce.viewState?.available !== !0)
          throw Ce(Oe.UNAVAILABLE, "The App view-state namespace paused before this enable was confirmed.");
        const de = _o($.value.snapshot);
        if (de.ok === !1)
          throw Ce(Oe.BAD_RESPONSE, de.error);
        const oe = ue(D.viewKind, de.value), W = G(J, D.bindingId, D.viewKind, $.value.registrationId, oe);
        return d = W, te = null, W.handle;
      } catch (J) {
        throw te !== null && await pe(te.token, te.bindingId, te.registrationId), J;
      } finally {
        m.delete(F);
      }
    } },
    dispose() {
      if (!o) {
        o = !0, s += 1, N(d, "disposed"), d = null;
        for (const H of m.values()) H.abort.abort();
        m.clear(), x(), V();
      }
    }
  };
}
function xb(u) {
  if (typeof u != "object" || u === null)
    throw Ce(Oe.INVALID_INPUT, "View-state set requires an object with an expected revision and a state.");
  const r = u.expectedRevision;
  if (!Number.isSafeInteger(r) || r < 0)
    throw Ce(Oe.INVALID_INPUT, "View-state set requires a non-negative safe-integer expected revision.");
  return r;
}
var Pp = /* @__PURE__ */ new WeakMap();
function Wp(u, r) {
  Pp.set(u, r);
}
function eg(u) {
  const r = Pp.get(u);
  return r ? r() : null;
}
function $l(u) {
  return typeof u == "object" && u !== null && !Array.isArray(u);
}
function nu(u) {
  const r = /* @__PURE__ */ new Set(), o = (d, m) => {
    if (m > 32) throw new Error("Input panel JSON exceeds the maximum depth of 32.");
    if (d === null || typeof d == "string" || typeof d == "boolean" || typeof d == "number" && Number.isFinite(d)) return d;
    if (typeof d != "object" || d === null) throw new Error("Input panel values must be valid JSON.");
    if (r.has(d)) throw new Error("Input panel values must not contain cycles.");
    const v = Object.getPrototypeOf(d);
    if (!Array.isArray(d) && v !== Object.prototype && v !== null)
      throw new Error("Input panel values must contain only JSON objects and arrays.");
    if (Object.getOwnPropertySymbols(d).length > 0) throw new Error("Input panel JSON must not contain symbol keys.");
    r.add(d);
    let b;
    if (Array.isArray(d)) {
      const S = [];
      for (let E = 0; E < d.length; E++) {
        if (!Object.prototype.hasOwnProperty.call(d, E)) throw new Error("Input panel JSON must not contain sparse arrays.");
        S.push(o(d[E], m + 1));
      }
      b = S;
    } else {
      const S = /* @__PURE__ */ Object.create(null);
      for (const E of Object.keys(d)) S[E] = o(d[E], m + 1);
      b = S;
    }
    return r.delete(d), b;
  }, s = JSON.stringify(o(u, 0));
  if (new TextEncoder().encode(s).byteLength > _p)
    throw new Error(`Input panel JSON exceeds ${_p} bytes.`);
  return JSON.parse(s);
}
function tg(u) {
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
function Rb(u) {
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
function jb(u, r) {
  if (!$l(u) || !$l(u.presentation) || !Number.isSafeInteger(u.presentationRevision)) throw new Error("The input panel presentation response is invalid.");
  const o = tg({ ...r, presentation: u.presentation, presentationRevision: u.presentationRevision });
  return { presentation: o.presentation, presentationRevision: o.presentationRevision };
}
function Db(u) {
  let r = null, o = 0, s = null, d = 0;
  const m = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Set(), b = () => {
    for (const A of v) A(r ? Hr(r) : null);
  }, S = () => {
    r = null, o++;
    for (const A of m.values())
      clearTimeout(A.timeout), A.reject(new Error("The input panel binding was replaced."));
    m.clear(), b();
  }, E = (A) => {
    for (const x of m.values())
      clearTimeout(x.timeout), x.reject(new Error(A));
    m.clear();
  }, N = (A, x, V) => u({
    protocol: dt,
    version: ht,
    id: A.id,
    kind: "error",
    type: A.type,
    error: { code: x, message: V }
  });
  function p(A) {
    if (A.kind === "event" && A.type === $i.CONTEXT) {
      if (A.payload === null) S();
      else {
        let he;
        try {
          he = tg(A.payload);
        } catch (ie) {
          return S(), console.warn("[hana] invalid input panel context:", ie), !0;
        }
        const k = r?.panelId === he.panelId && r.appId === he.appId && r.sessionId === he.sessionId && r.confirmId === he.confirmId && r.status === he.status && r.instanceId === he.instanceId && r.revision === he.revision;
        if (k && r && he.presentationRevision < r.presentationRevision) return !0;
        k || E("The input panel binding was replaced."), r = he, k || o++, b();
      }
      return !0;
    }
    if ((A.kind === "response" || A.kind === "error") && A.type === $i.PRESENTATION && A.id) {
      const he = m.get(A.id);
      if (!he) return !1;
      if (m.delete(A.id), clearTimeout(he.timeout), he.generation !== o)
        he.reject(new Error("The input panel binding was replaced."));
      else if (A.kind === "error") he.reject(new Error(A.error?.message || "The input panel presentation could not be updated."));
      else
        try {
          const k = jb(A.payload, r);
          r && k.presentationRevision >= r.presentationRevision && (r = { ...r, ...k }, b()), he.resolve(k);
        } catch (k) {
          he.reject(k instanceof Error ? k : new Error("The input panel presentation response is invalid."));
        }
      return !0;
    }
    if (A.kind !== "request" || A.type !== $i.SUBMIT) return !1;
    if (!A.id) return !0;
    const x = A.payload, V = r;
    if (!$l(x) || !V || V.status !== "pending" || !V.confirmId || x.panelId !== V.panelId || x.instanceId !== V.instanceId || x.revision !== V.revision)
      return N(A, "INPUT_PANEL_STALE", "This request does not match the active input panel question."), !0;
    const I = s;
    if (!I && V.requestedSchema !== null)
      return N(A, "INPUT_PANEL_SUBMIT_UNHANDLED", "Register hana.inputPanel.onSubmit to provide this question’s answer."), !0;
    const le = o, Ee = {
      panelId: V.panelId,
      instanceId: V.instanceId,
      revision: V.revision
    };
    return Promise.resolve().then(() => I ? I(Hr(V)) : null).then((he) => {
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
        payload: { ...Ee, value: nu(he) }
      });
    }).catch((he) => {
      N(A, "INPUT_PANEL_SUBMIT_FAILED", he instanceof Error ? he.message : "The input panel could not provide an answer.");
    }), !0;
  }
  return { api: {
    getContext: () => r ? Hr(r) : null,
    onContextChanged(A) {
      return v.add(A), A(r ? Hr(r) : null), () => {
        v.delete(A);
      };
    },
    onSubmit(A) {
      if (typeof A != "function") throw new TypeError("hana.inputPanel.onSubmit requires a function.");
      return s = A, () => {
        s === A && (s = null);
      };
    },
    async setPresentation(A) {
      const x = r, V = Rb(A);
      if (!x) throw new Error("The input panel is not ready.");
      const I = o, le = `input-panel-presentation:${x.panelId}:${x.instanceId}:${Date.now().toString(36)}:${++d}`;
      return new Promise((Ee, he) => {
        const k = setTimeout(() => {
          m.delete(le), he(new Error("The input panel presentation request timed out."));
        }, 1e4);
        m.set(le, { generation: I, resolve: Ee, reject: he, timeout: k });
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
            payload: { panelId: x.panelId, instanceId: x.instanceId, revision: x.revision, presentationRevision: x.presentationRevision, presentation: V }
          }, ie);
        } catch (ne) {
          ie(ne);
        }
        if (o !== I) {
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
}, Cp = 0, uu = 60, Ub = 240;
function zb() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : (Cp += 1, `hana-plugin-${Date.now()}-${Cp}`);
}
function Mb() {
  if (typeof window > "u")
    throw new Error("@hana/plugin-sdk requires a browser iframe window.");
  return window;
}
var xp = "data-hana-theme-style";
async function Hb(u, r) {
  const o = await fetch(r, { credentials: "same-origin" });
  if (!o.ok)
    throw new Error(`hana theme stylesheet request failed with ${o.status}`);
  const s = await o.text(), d = u.head ?? u.documentElement;
  if (!d) throw new Error("hana theme stylesheet has nowhere to attach");
  let m = u.querySelector(`style[${xp}]`);
  m || (m = u.createElement("style"), m.setAttribute(xp, "")), m.textContent = s, d.appendChild(m);
}
function qb(u) {
  if (typeof u != "object" || u === null) return !1;
  const r = u;
  return ["light", "dark"].every((o) => {
    const s = r[o];
    return typeof s == "object" && s !== null && typeof s.theme == "string" && typeof s.cssUrl == "string";
  });
}
function Lb(u) {
  const r = new URLSearchParams(u.location.search), o = r.get("hana-theme-appearance"), s = r.get("hana-palette-light-theme"), d = r.get("hana-palette-light-css"), m = r.get("hana-palette-dark-theme"), v = r.get("hana-palette-dark-css");
  return {
    theme: r.get("hana-theme") ?? void 0,
    cssUrl: r.get("hana-css") ?? void 0,
    appearance: o === "light" || o === "dark" ? o : void 0,
    palettes: s && d && m && v ? { light: { theme: s, cssUrl: d }, dark: { theme: m, cssUrl: v } } : void 0
  };
}
function ng(u, r = uu) {
  return typeof u != "number" || !Number.isFinite(u) ? r : Math.max(0, Math.min(Ub, Math.round(u)));
}
function ag({
  visible: u,
  maxFrameRate: r,
  slot: o,
  reason: s
}) {
  const d = u ? ng(r) : 0, m = u && d > 0;
  return {
    visible: u,
    active: m,
    maxFrameRate: m ? d : 0,
    motion: m ? "full" : "paused",
    ...o === "page" || o === "widget" || o === "card" || o === "settings" || o === "function-panel" || o === "slot" ? { slot: o } : {},
    ...s ? { reason: s } : {}
  };
}
function Ib(u) {
  const r = new URLSearchParams(u.location.search), o = r.get("hana-visible"), s = !(o === "0" || o === "false"), d = r.get("hana-max-fps"), m = d === null ? NaN : Number(d), v = Number.isFinite(m) ? m : uu;
  return ag({
    visible: s,
    maxFrameRate: v,
    reason: "initial"
  });
}
function Bb(u, r) {
  if (typeof u != "object" || u === null) return null;
  const o = u, s = typeof o.visible == "boolean" ? o.visible : r.visible, d = ng(
    o.maxFrameRate,
    r.maxFrameRate > 0 ? r.maxFrameRate : uu
  ), m = typeof o.active == "boolean" ? o.active && s && d > 0 : s && d > 0, v = o.motion, b = v === "full" || v === "reduced" || v === "paused" ? v : m ? "full" : "paused", S = typeof o.slot == "string" ? o.slot : r.slot, E = typeof o.reason == "string" ? o.reason : r.reason;
  return {
    visible: s,
    active: m,
    maxFrameRate: m ? d : 0,
    motion: m ? b : "paused",
    ...S === "page" || S === "widget" || S === "card" || S === "settings" || S === "function-panel" || S === "slot" ? { slot: S } : {},
    ...E ? { reason: E } : {}
  };
}
function Vb(u, r) {
  if (typeof u != "object" || u === null) return null;
  const o = u.visible;
  return typeof o != "boolean" ? null : ag({
    visible: o,
    maxFrameRate: o && r.maxFrameRate > 0 ? r.maxFrameRate : uu,
    slot: r.slot,
    reason: "legacy-visibility"
  });
}
function Gb(u, r) {
  return u.visible === r.visible && u.active === r.active && u.maxFrameRate === r.maxFrameRate && u.motion === r.motion && u.slot === r.slot && u.reason === r.reason;
}
function Oo(u) {
  return {
    width: { ...u.width },
    height: { ...u.height }
  };
}
function Rp(u) {
  if (typeof u != "object" || u === null) return null;
  const r = u;
  return r.mode === "fixed" ? typeof r.value != "number" || !Number.isFinite(r.value) ? null : { mode: "fixed", value: Math.round(r.value) } : r.mode === "flexible" ? typeof r.max != "number" || !Number.isFinite(r.max) ? null : { mode: "flexible", max: Math.round(r.max) } : r.mode === "unbounded" ? { mode: "unbounded" } : null;
}
function Yb(u) {
  if (typeof u != "object" || u === null) return null;
  const r = u, o = Rp(r.width), s = Rp(r.height);
  return !o || !s ? null : { width: o, height: s };
}
function jp(u) {
  if (u === null) return null;
  if (typeof u == "string") return u;
}
function Xb(u) {
  if (typeof u != "object" || u === null || Array.isArray(u)) return;
  const r = u;
  if (tu(r.bindingId) && !(r.viewKind !== "compact" && r.viewKind !== "detached") && typeof r.available == "boolean")
    return { bindingId: r.bindingId, viewKind: r.viewKind, available: r.available };
}
function Qb(u) {
  if (typeof u != "object" || u === null || Array.isArray(u)) return null;
  const r = u, o = typeof r.appId == "string" && r.appId.trim() ? r.appId.trim() : null, s = r.slot, d = r.cardInstanceId;
  if (!o || s !== "card" && s !== "function-panel" && s !== "settings" && s !== "slot" && s !== "input-panel") return null;
  const m = jp(r.embeddedSessionId), v = jp(r.originSessionId), b = $p(r.instanceKey);
  if (b === null) return null;
  const S = Xb(r.viewState), E = typeof d == "string" && !!d.trim();
  if (b !== void 0 && !E) return null;
  const N = {};
  return m !== void 0 && (N.embeddedSessionId = m), v !== void 0 && (N.originSessionId = v), b !== void 0 && (N.instanceKey = b), S !== void 0 && (N.viewState = S), s === "settings" || s === "input-panel" ? d === null ? { appId: o, slot: s, cardInstanceId: null, ...N } : null : E ? { appId: o, slot: s, cardInstanceId: d.trim(), ...N } : s !== "card" || d !== null || typeof r.embeddedSessionId != "string" || !r.embeddedSessionId.trim() ? null : { appId: o, slot: s, cardInstanceId: null, ...N };
}
function Co(u) {
  return {
    ...u,
    ...u.viewState ? { viewState: { ...u.viewState } } : {}
  };
}
function Dp(u) {
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
  const r = u, o = r.previous === null ? null : Dp(r.previous), s = r.current === null ? null : Dp(r.current);
  return r.previous !== null && o === null || r.current !== null && s === null || typeof r.timestamp != "number" || !Number.isFinite(r.timestamp) ? null : { previous: o, current: s, timestamp: r.timestamp };
}
function kb(u) {
  if (typeof u != "object" || u === null || Array.isArray(u)) return null;
  const r = u;
  return typeof r.code != "string" || !r.code.trim() || typeof r.message != "string" || !r.message.trim() ? null : new Ca({ code: r.code, message: r.message });
}
function Zb(u) {
  return typeof u == "string" ? { url: u } : u;
}
function Jb(u) {
  return typeof u == "string" ? { text: u } : u;
}
function lg(u) {
  const r = Bo(u.location.pathname || "");
  if (!r)
    throw new Error("App asset/API URL helper requires an App surface route under /api/apps/:appId/ui/ or a scoped service mount.");
  return r.appId;
}
function $b(u, r) {
  if (!r || !["card", "function-panel", "settings", "slot"].includes(r.slot)) return !1;
  try {
    return lg(u) === r.appId;
  } catch {
    return !1;
  }
}
function Fb(u) {
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
function Pb(u) {
  return new URLSearchParams(u.location.search).get("hana-asset-base") || null;
}
function Wb(u, r) {
  const o = Fb(r), s = Pb(u);
  if (!s)
    throw new Error(
      "hana.assets.url() requires the host-issued hana-asset-base query parameter: this page was not opened by the host with an asset base; hana.assets.url() only works inside a Hana app surface."
    );
  const d = new URL(s);
  return d.pathname = `${d.pathname.replace(/\/+$/, "")}/${o}`, d.toString();
}
function ig(u) {
  return new URLSearchParams(u.location.search).get(Y0) || null;
}
function eE(u) {
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
  const v = new URL(`http://hana.local/${o}`);
  return `${m.map((S) => encodeURIComponent(decodeURIComponent(S))).join("/")}${v.search}`;
}
function ug(u, r, o = !1) {
  const s = lg(u);
  let d = eE(r);
  if (o && d.startsWith("_runtime/")) {
    const m = ig(u);
    if (!m) throw new Error("hana.api.url for a managed service requires appSurfaceSession in the iframe URL.");
    const v = /^(_runtime\/[^/?]+)\/(.+)$/.exec(d);
    if (!v || v[2].startsWith("_surface/")) throw new Error("Invalid managed service API path.");
    d = `${v[1]}/_surface/${encodeURIComponent(m)}/${v[2]}`;
  }
  return `${u.location.origin}/api/apps/${encodeURIComponent(s)}/routes/${d}`;
}
function tE(u, r, o, s) {
  const d = ig(u);
  if (!d)
    throw new Error("hana.api.fetch requires appSurfaceSession in the iframe URL.");
  const m = u.fetch?.bind(u) ?? globalThis.fetch?.bind(globalThis);
  if (!m)
    throw new Error("hana.api.fetch requires window.fetch.");
  const v = o ?? {}, b = new Headers(v.headers);
  return b.set(G0, d), s && b.set("X-Hana-Document-Binding", s), m(ug(u, r), {
    ...v,
    headers: b
  });
}
function nE(u) {
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
function aE(u, r) {
  if (typeof r != "object" || r === null) return !1;
  const o = r;
  return u.kind === "global" ? o.kind === "global" : o.kind === "agent" && o.agentId === u.agentId;
}
function rg(u = {}) {
  const r = u.targetWindow ?? Mb(), o = u.parentWindow ?? r.parent, s = Ip(r, u.targetOrigin), d = u.requestTimeoutMs ?? 1e4, m = u.idFactory ?? zb, v = Db(J), b = ob({
    targetWindow: r,
    post: J,
    // A host that rebound its bridge to this same document gets a fresh
    // handshake by re-announcing the ready the page already sent.
    reannounceReady: () => {
      pe && P(ge);
    }
  }), S = mb({
    request: Ne,
    post: J,
    targetWindow: r,
    currentView: b,
    requestTimeoutMs: d
  }), E = u.followHostTheme !== !1;
  let N = Lb(r), p = Ib(r), B = null, A = null;
  const x = /* @__PURE__ */ new Set(), V = /* @__PURE__ */ new Set(), I = /* @__PURE__ */ new Set(), le = /* @__PURE__ */ new Set(), Ee = /* @__PURE__ */ new Set(), he = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Set(), ie = /* @__PURE__ */ new Set(), ne = /* @__PURE__ */ new Set();
  let ue = null, ye = null, re = null, pe = !1, ge, G = !1, me = !1, De = !1, H = Promise.resolve();
  const M = /* @__PURE__ */ new Map();
  let ee = 1, j = null, F = null, ae = null, q = !1;
  function te(O) {
    if (!E || !O) return;
    const Z = r.document;
    Z && Hb(Z, O).catch((Y) => {
      if (u.onThemeError) {
        u.onThemeError(Y);
        return;
      }
      console.error("[hana] failed to follow host theme", Y);
    });
  }
  function J(O, Z) {
    if (u.messageTransport) {
      const Y = u.messageTransport.postMessage(O);
      Y && Y.catch(Z ?? ((K) => console.error("[hana] host message delivery failed", K)));
    } else o.postMessage(O, s);
  }
  function g(O) {
    if (u.messageTransport) return u.messageTransport.onMessage(O);
    const Z = (Y) => {
      Bp(Y, o, s) && O(Y.data);
    };
    return r.addEventListener("message", Z), () => r.removeEventListener("message", Z);
  }
  function D(O, Z) {
    const Y = {
      protocol: dt,
      version: ht,
      kind: "event",
      type: O
    };
    Z !== void 0 && (Y.payload = Z), J(Y);
  }
  function P(O) {
    D("hana.ready", O);
  }
  function $(O) {
    const Z = O instanceof Ca ? O : new Ca({
      code: "HOST_ERROR",
      message: O instanceof Error ? O.message : "Active session subscription failed."
    });
    let Y = !1;
    for (const K of ne)
      if (K.onError) {
        Y = !0;
        try {
          K.onError(Z);
        } catch (Se) {
          console.error("[hana] active session error callback failed", Se);
        }
      }
    Y || console.error("[hana] active session subscription failed", Z);
  }
  function ce() {
    return ne.size > 0 && !De && !me;
  }
  function de() {
    H = H.catch(() => {
    }).then(async () => {
      for (; G !== ce(); ) {
        if (ce()) {
          try {
            if (await W(), (await Ne(zr.SUBSCRIBE)).subscribed !== !0) {
              G = !1, me || $(new Ca({
                code: "HOST_ERROR",
                message: "The host did not establish the active session subscription."
              }));
              return;
            }
            G = !0;
          } catch (O) {
            G = !1, $(O);
            return;
          }
          continue;
        }
        try {
          await W(), await Ne(zr.UNSUBSCRIBE);
        } catch (O) {
          $(O);
        }
        G = !1;
      }
    });
  }
  function oe(O) {
    const Z = r.document?.readyState;
    return Z !== "loading" && Z !== "interactive" ? Promise.resolve() : new Promise((Y, K) => {
      const Se = () => {
        r.clearTimeout(St), r.removeEventListener("load", Be), r.removeEventListener("pagehide", $e);
      }, Be = () => {
        Se(), Y();
      }, $e = () => {
        Se(), K(new Ca({
          code: "SURFACE_UNAVAILABLE",
          message: "The App surface unloaded before interactive regions could be registered."
        }));
      }, St = r.setTimeout(() => {
        Se(), K(new Ca({
          code: "TIMEOUT",
          message: "The App document did not finish loading before interactive regions could be registered."
        }));
      }, O);
      r.addEventListener("load", Be), r.addEventListener("pagehide", $e);
    });
  }
  function W(O) {
    return oe(O ?? d).then(() => {
      P(ge);
    });
  }
  function fe(O) {
    const Z = r.requestAnimationFrame?.bind(r), Y = r.cancelAnimationFrame?.bind(r);
    if (Z && Y) {
      const Se = Z(O);
      return () => Y(Se);
    }
    const K = r.setTimeout(() => {
      const Se = r.performance?.now?.() ?? Date.now();
      O(Se);
    }, Math.max(1, Math.round(1e3 / Math.max(p.maxFrameRate, uu))));
    return () => r.clearTimeout(K);
  }
  function We() {
    j && (j(), j = null);
  }
  function rt() {
    j || M.size === 0 || !p.active || p.maxFrameRate <= 0 || (j = fe((O) => {
      if (j = null, !p.active || p.maxFrameRate <= 0) return;
      const Z = 1e3 / p.maxFrameRate;
      if (F !== null && O >= F && O - F < Z) {
        rt();
        return;
      }
      F = O;
      const Y = Array.from(M.entries());
      for (const [K, Se] of Y)
        if (M.delete(K))
          try {
            Se(O);
          } catch (Be) {
            r.setTimeout(() => {
              throw Be;
            }, 0);
          }
      rt();
    }));
  }
  function Yt(O) {
    if (!Gb(p, O)) {
      p = O;
      for (const Z of I) Z({ ...p });
      if (!p.active || p.maxFrameRate <= 0) {
        We();
        return;
      }
      rt();
    }
  }
  function an(O) {
    if (typeof O == "object" && O !== null && O.protocol === void 0 && O.type === "visibility-changed") {
      const K = Vb(
        O.payload,
        p
      );
      K && Yt(K);
      return;
    }
    const Z = Fi(O);
    if (!Z.ok) return;
    const Y = Z.value;
    if (!b.handleHostMessage(Y) && !S.handleHostMessage(Y)) {
      if (v.handleMessage(Y)) {
        Y.type === $i.CONTEXT && Y.payload === null && pe && P(ge);
        return;
      }
      if (Y.kind === "request" && Y.type === "hana.document.view-request") {
        const K = typeof Y.payload == "object" && Y.payload !== null ? Y.payload : null, Se = K && typeof K.requestId == "string" ? K.requestId : "", Be = K && typeof K.documentId == "string" ? K.documentId : "", $e = K && typeof K.viewId == "string" ? K.viewId : "", St = K?.revision, Ht = K && typeof K.method == "string" ? K.method.trim() : "";
        if (!Se || !Be || !$e || !Ht || Ht.length > 128 || !Number.isSafeInteger(St) || Number(St) < 0) {
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
        if (!re) {
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
        const Tt = K?.payload, Ra = re;
        Promise.resolve().then(() => Ra({
          requestId: Se,
          documentId: Be,
          viewId: $e,
          revision: St,
          method: Ht,
          ...Object.prototype.hasOwnProperty.call(K, "payload") ? { payload: Tt } : {}
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
        const K = Y.payload, Se = typeof K == "object" && K !== null ? K : null, Be = Se && typeof Se.requestId == "string" ? Se.requestId : "", $e = Se?.kind, St = Se?.revision;
        if (!Be || !["save", "prepareClose", "revert", "undo", "redo"].includes(String($e)) || !Number.isSafeInteger(St)) {
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
        if (!ye) {
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
          requestId: Be,
          kind: $e,
          revision: St
        };
        Promise.resolve(ye(Ht)).then((Tt) => {
          J({ protocol: dt, version: ht, id: Y.id, kind: "response", type: Y.type, payload: Tt });
        }, (Tt) => {
          J({
            protocol: dt,
            version: ht,
            id: Y.id,
            kind: "error",
            type: Y.type,
            error: { code: "DOCUMENT_REQUEST_FAILED", message: Tt instanceof Error ? Tt.message : "Document request failed." }
          });
        });
        return;
      }
      if (Y.kind === "request" && Y.type === Ie.UI_ACTION) {
        const K = r.document, Se = K ? kp(K, Y.payload, $b(r, A)) : { ok: !1, code: "UI_ACTION_DOCUMENT_UNAVAILABLE", error: "No document is available." };
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
          const K = Y.payload, Se = typeof K == "object" && K !== null ? K.access : null;
          ue = typeof Se?.bindingId == "string" && Se.bindingId ? Se.bindingId : null;
          return;
        }
        if (Y.type === Ql.THEME_CHANGED) {
          if (typeof Y.payload != "object" || Y.payload === null) return;
          const K = Y.payload, Se = typeof K.theme == "string" ? K.theme : N.theme, Be = typeof K.theme == "string" && K.theme !== N.theme;
          N = {
            theme: Se,
            cssUrl: typeof K.cssUrl == "string" ? K.cssUrl : N.cssUrl,
            appearance: K.appearance === "light" || K.appearance === "dark" ? K.appearance : Be ? void 0 : N.appearance,
            palettes: qb(K.palettes) ? K.palettes : Be ? void 0 : N.palettes
          };
          for (const $e of x) $e({ ...N });
          te(N.cssUrl);
          return;
        }
        if (Y.type === Ql.SURFACE_ENVELOPE_CHANGED) {
          const K = Yb(Y.payload);
          if (!K) return;
          B = K;
          for (const Se of V) Se(Oo(B));
          return;
        }
        if (Y.type === Ql.SURFACE_RUNTIME_CHANGED) {
          const K = Bb(Y.payload, p);
          K && Yt(K);
          return;
        }
        if (Y.type === tb.CONTEXT) {
          const K = Y.payload === null ? null : Qb(Y.payload);
          if (Y.payload !== null && K === null) return;
          const Se = K?.appId !== A?.appId || K?.slot !== A?.slot || K?.cardInstanceId !== A?.cardInstanceId || K?.instanceKey !== A?.instanceKey || K?.embeddedSessionId !== A?.embeddedSessionId || K?.originSessionId !== A?.originSessionId || K?.viewState?.bindingId !== A?.viewState?.bindingId || K?.viewState?.viewKind !== A?.viewState?.viewKind || K?.viewState?.available !== A?.viewState?.available;
          if (b.applySurfaceContext(K === null ? null : { appId: K.appId, cardInstanceId: K.cardInstanceId, instanceKey: K.instanceKey ?? null }), A = K, Se)
            for (const Be of le) Be(A ? Co(A) : null);
          return;
        }
        if (Y.type === wp.ACTIVE_CHANGED) {
          if (me) return;
          const K = Kb(Y.payload);
          if (!K) return;
          for (const Se of ne) Se.callback(K);
          return;
        }
        if (Y.type === wp.ERROR) {
          const K = kb(Y.payload);
          if (!K) return;
          G = !1, me = !0, $(K), de();
          return;
        }
        if (Y.type === Ql.STORAGE_CHANGED) {
          if (typeof Y.payload != "object" || Y.payload === null) return;
          const K = Y.payload.keys, Se = Array.isArray(K) ? K.filter((Be) => typeof Be == "string") : [];
          for (const Be of Ee) Be(Se.slice());
          return;
        }
        if (Y.type === X0.CHANGED) {
          if (typeof Y.payload != "object" || Y.payload === null) return;
          const K = Y.payload, Se = K.keys, Be = Array.isArray(Se) ? Se.filter(($e) => typeof $e == "string") : [];
          for (const $e of he)
            aE($e.scope, K.scope) && $e.callback(Be.slice());
          return;
        }
        if (Y.type === Ql.PANEL_EVENT) {
          if (typeof Y.payload != "object" || Y.payload === null) return;
          const K = Y.payload, Se = typeof K.sectionId == "string" ? K.sectionId : null, Be = K.kind;
          if (!Se || Be !== "select" && Be !== "action" && Be !== "toggle") return;
          const $e = {
            sectionId: Se,
            kind: Be,
            ...typeof K.itemId == "string" ? { itemId: K.itemId } : {},
            ...typeof K.checked == "boolean" ? { checked: K.checked } : {}
          };
          for (const St of k) St($e);
          return;
        }
        if (Y.type === Ql.PANEL_REFRESH)
          for (const K of ie) K();
      }
    }
  }
  g(an), r.addEventListener("pagehide", (O) => {
    v.clear(), De = !0, de(), O?.persisted === !1 && (q = !0, b.dispose(), ae?.dispose(), S.dispose());
  }), r.addEventListener("pageshow", () => {
    De && (De = !1, de());
  });
  function Ne(O, Z, Y = {}) {
    const K = m(), Se = Y.timeoutMs ?? d;
    return new Promise((Be, $e) => {
      let St = () => {
      };
      const Ht = () => {
        St(), r.clearTimeout(Ra);
      }, Tt = (ja) => {
        const Pl = Fi(ja);
        if (!Pl.ok) return;
        const gn = Pl.value;
        gn.id !== K || gn.type !== O || (gn.kind === "response" && (Ht(), Be(gn.payload)), gn.kind === "error" && gn.error && (Ht(), $e(new Ca(gn.error))));
      }, Ra = r.setTimeout(() => {
        Ht(), $e(new Ca({
          code: "TIMEOUT",
          message: `Plugin host request timed out: ${O}.`
        }));
      }, Se), pn = {
        protocol: dt,
        version: ht,
        id: K,
        kind: "request",
        type: O
      };
      Z !== void 0 && (pn.payload = Z);
      try {
        St = g(Tt), J(pn, (ja) => {
          Ht(), $e(ja);
        });
      } catch (ja) {
        Ht(), $e(ja);
      }
    });
  }
  function Qe(O) {
    return {
      get(Z, Y) {
        return Ne(kl.GET, { scope: O, key: Z }, Y);
      },
      getAll(Z) {
        return Ne(kl.GET_ALL, { scope: O }, Z);
      },
      set(Z, Y, K) {
        return Ne(kl.SET, { scope: O, key: Z, value: Y }, K);
      },
      delete(Z, Y) {
        return Ne(kl.DELETE, { scope: O, key: Z }, Y);
      },
      keys(Z) {
        return Ne(kl.KEYS, { scope: O }, Z);
      },
      onChanged(Z) {
        if (O.kind === "agent" && !O.agentId)
          throw new Error(
            "hana.storage.agent() with no agentId cannot subscribe with onChanged — a subscription outlives any single request, so pass an explicit agentId to subscribe to a stable scope."
          );
        const Y = { scope: O, callback: Z };
        return he.add(Y), () => {
          he.delete(Y);
        };
      }
    };
  }
  const Xt = {
    ready(O) {
      pe = !0, ge = O, P(O);
    },
    inputPanel: v.api,
    assets: {
      url(O) {
        return Wb(r, O);
      }
    },
    api: {
      url(O) {
        return ug(r, O, !0);
      },
      fetch(O, Z) {
        return tE(r, O, Z, ue);
      }
    },
    ui: {
      resize(O) {
        D(Ie.UI_RESIZE, O);
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
        return B ? Oo(B) : null;
      },
      subscribe(O) {
        return V.add(O), O(B ? Oo(B) : null), () => {
          V.delete(O);
        };
      }
    },
    lifecycle: {
      getSnapshot() {
        return { ...p };
      },
      subscribe(O) {
        return I.add(O), O({ ...p }), () => {
          I.delete(O);
        };
      }
    },
    cards: {
      open(O, Z) {
        if (typeof O != "string" || !O.trim())
          return Promise.reject(new TypeError("hana.cards.open requires a non-empty declared card ID."));
        let Y;
        if (Z !== void 0) {
          if (typeof Z != "object" || Z === null || Array.isArray(Z))
            return Promise.reject(new TypeError("hana.cards.open options must be an object."));
          if (Object.keys(Z).some((Se) => Se !== "instanceKey"))
            return Promise.reject(new TypeError("hana.cards.open options accepts only instanceKey."));
          const K = $p(Z.instanceKey);
          if (K === null)
            return Promise.reject(new TypeError("hana.cards.open instanceKey must be a non-empty string of at most 256 code units without NUL."));
          Y = K;
        }
        return Ne(Jp.OPEN, {
          cardId: O.trim(),
          ...Y === void 0 ? {} : { instanceKey: Y }
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
      setInteractiveRegions(O, Z) {
        const Y = Q0({ regions: O });
        return Y.ok === !1 ? Promise.reject(new TypeError(Y.error)) : pe ? oe(Z?.timeoutMs ?? d).then(() => (P(ge), Ne(Uo.SET_INTERACTIVE_REGIONS, Y.value, Z))) : Ne(Uo.SET_INTERACTIVE_REGIONS, Y.value, Z);
      }
    },
    sessions: {
      getActive(O) {
        return W(O?.timeoutMs).then(() => Ne(zr.GET_ACTIVE, void 0, O));
      },
      focus(O, Z) {
        return !O || typeof O.sessionId != "string" || !O.sessionId.trim() ? Promise.reject(new TypeError("hana.sessions.focus requires a non-empty sessionId.")) : W(Z?.timeoutMs).then(() => Ne(
          zr.FOCUS,
          { sessionId: O.sessionId.trim() },
          Z
        ));
      },
      onActiveChanged(O, Z) {
        const Y = { callback: O, onError: Z };
        return me = !1, ne.add(Y), de(), () => {
          ne.delete(Y) && de();
        };
      }
    },
    performance: {
      requestAnimationFrame(O) {
        const Z = ee;
        return ee += 1, M.set(Z, O), rt(), Z;
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
      show(O, Z) {
        return Ne(Ie.TOAST_SHOW, O, Z);
      }
    },
    external: {
      open(O, Z) {
        return Ne(Ie.EXTERNAL_OPEN, Zb(O), Z);
      }
    },
    clipboard: {
      writeText(O, Z) {
        return Ne(
          Ie.CLIPBOARD_WRITE_TEXT,
          Jb(O),
          Z
        );
      }
    },
    resources: {
      open(O, Z) {
        return Ne(Ie.RESOURCE_OPEN, O, Z);
      },
      pick(O = {}, Z) {
        return Ne(Ie.RESOURCE_PICK, O, Z);
      },
      saveFile(O, Z) {
        return Ne(Ie.RESOURCE_SAVE_FILE, O, Z);
      },
      requestAccess(O, Z) {
        return Ne(
          Ie.RESOURCE_REQUEST_ACCESS,
          O,
          Z
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
      reportStatus(O, Z) {
        return Ne("hana.document.report-status", O, Z);
      },
      open(O, Z) {
        return Ne("hana.document.open", O, Z);
      },
      rebind(O, Z) {
        return Ne("hana.document.rebind", O, Z);
      },
      openDrop(O, Z) {
        if (O.defaultPrevented) return Promise.resolve(null);
        const Y = O.dataTransfer?.getData("application/x-hana-file-drag") || "";
        if (Y) return Ne("hana.document.open-drop", { dragId: Y }, Z);
        const K = Array.from(O.dataTransfer?.files || []);
        return K.length !== 1 ? Promise.resolve(null) : Ne("hana.document.open-drop", { file: K[0] }, Z);
      },
      onRequest(O) {
        return ye = O, () => {
          ye === O && (ye = null);
        };
      },
      onViewRequest(O) {
        return re = O, () => {
          re === O && (re = null);
        };
      }
    },
    state: {
      get(O, Z) {
        const Y = typeof O == "string" && O ? { key: O } : {};
        return Ne(Ie.STATE_GET, Y, Z);
      },
      set(O, Z, Y) {
        const K = typeof O == "string" ? { key: O, value: Z } : { state: O };
        return Ne(Ie.STATE_SET, K, Y);
      }
    },
    storage: {
      get(O, Z) {
        return Ne(Ie.STORAGE_GET, { key: O }, Z);
      },
      getAll(O) {
        return Ne(Ie.STORAGE_GET_ALL, {}, O);
      },
      set(O, Z, Y) {
        return Ne(Ie.STORAGE_SET, { key: O, value: Z }, Y);
      },
      delete(O, Z) {
        return Ne(Ie.STORAGE_DELETE, { key: O }, Z);
      },
      onChanged(O) {
        return Ee.add(O), () => {
          Ee.delete(O);
        };
      },
      global: Qe({ kind: "global" }),
      agent(O) {
        return Qe({ kind: "agent", agentId: O });
      }
    },
    emit(O, Z, Y, K) {
      const Se = {
        name: O,
        userGesture: nE(r)
      };
      return arguments.length >= 2 && (Se.payload = Z), typeof Y == "string" && Y.trim() && (Se.to = Y.trim()), Ne(Ie.EMIT, Se, K);
    },
    track(O, Z, Y) {
      const K = { name: O };
      return arguments.length >= 2 && (K.payload = Z), Ne(Ie.TRACK, K, Y);
    },
    panel: {
      set(O, Z) {
        return Ne(Ie.PANEL_SET, O, Z);
      },
      onEvent(O) {
        return k.add(O), () => {
          k.delete(O);
        };
      },
      onRefresh(O) {
        return ie.add(O), () => {
          ie.delete(O);
        };
      }
    }
  };
  return Wp(Xt, () => q ? null : (ae ??= Cb({
    request: Ne,
    currentView: b,
    getContext: () => A,
    subscribeContext: (O) => (le.add(O), () => {
      le.delete(O);
    }),
    requestTimeoutMs: d
  }), ae.api)), Xt;
}
var Up = null;
function Te() {
  return Up ??= rg(), Up;
}
var sg = {
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
Wp(sg, () => eg(Te()));
function Br(u) {
  return u.hanaAppWindow;
}
function mn(u) {
  const r = Br(u);
  if (!r) throw Object.assign(new Error("This App surface is not an App-owned native window."), { code: "APP_WINDOW_UNAVAILABLE" });
  return r;
}
function lE(u) {
  return (typeof window < "u" ? Br(u()) : void 0)?.onDocumentAction?.((o) => {
    const s = kp(u().document, o, !0);
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
var iE = /* @__PURE__ */ new Set([
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
  ...Object.values(Jp),
  Uo.SET_INTERACTIVE_REGIONS,
  "hana.document.get-context",
  "hana.document.read",
  "hana.document.report-status",
  "hana.document.open",
  "hana.document.rebind",
  "hana.document.open-drop"
]);
function cg() {
  if (typeof window > "u") throw new Error("@hana/app-sdk/ui requires a browser App iframe.");
  return window;
}
function uE(u) {
  if (!Bo(u.location?.pathname ?? ""))
    throw new Error("@hana/app-sdk/ui requires an App surface route under /api/apps/:appId/ui/ or a scoped service mount.");
}
function rE(u) {
  if (!iE.has(u))
    throw new Error(`@hana/app-sdk/ui does not expose host request type: ${u}`);
}
function sE(u) {
  return {
    get global() {
      return u().storage.global;
    },
    agent(r) {
      return u().storage.agent(r);
    }
  };
}
function cE(u, r = cg, o = {}) {
  return {
    window: lE(r),
    surfaces: {
      onEvent(s, d) {
        if (typeof s != "string" || !s.trim() || s.length > 256 || typeof d != "function")
          throw new TypeError("surfaces.onEvent requires a surface id and a listener.");
        return mn(r()).onMessage((m) => {
          const v = Fi(m);
          if (!v.ok || v.value.kind !== "event" || v.value.type !== "hana.app-surface.event") return;
          const b = v.value.payload;
          if (!b || typeof b != "object" || Array.isArray(b)) return;
          const S = b;
          S.surfaceId !== s || typeof S.type != "string" || !S.type.trim() || d({ surfaceId: s, type: S.type, ...S.payload === void 0 ? {} : { payload: S.payload } });
        });
      }
    },
    appEvents: {
      on(s, d) {
        if (typeof s != "string" || !s.trim() || s.length > 128 || typeof d != "function") throw new TypeError("appEvents.on requires an event name and a listener.");
        const m = r(), v = Bo(m.location?.pathname ?? "");
        if (!v)
          throw new Error("@hana/app-sdk/ui requires an App surface route under /api/apps/:appId/ui/ or a scoped service mount.");
        const b = v.appId, S = (A) => {
          const x = Fi(A);
          if (!x.ok || x.value.kind !== "event" || x.value.type !== "hana.app.event") return;
          const V = x.value.payload;
          V?.source !== `app:${b}` || V.type !== s || !V.payload || typeof V.payload != "object" || Array.isArray(V.payload) || d(V.payload);
        }, E = o.messageTransport ?? Br(m);
        if (E) return E.onMessage(S);
        const N = o.parentWindow ?? m.parent, p = Ip(m, o.targetOrigin), B = (A) => {
          Bp(A, N, p) && S(A.data);
        };
        return m.addEventListener("message", B), () => m.removeEventListener("message", B);
      }
    },
    instances: {
      onChanged(s) {
        return mn(r()).onMessage((d) => {
          if (!d || typeof d != "object") return;
          const m = d;
          if (m.protocol !== dt || m.version !== ht || m.kind !== "event" || m.type !== "hana.app-instance.changed") return;
          const v = m.payload;
          v && typeof v.instanceId == "string" && typeof v.revision == "number" && Number.isSafeInteger(v.revision) && typeof v.state == "string" && s({ instanceId: v.instanceId, revision: v.revision, state: v.state });
        });
      }
    },
    environments: {
      onChanged(s) {
        if (typeof s != "function") throw new TypeError("environments.onChanged requires a listener.");
        return mn(r()).onMessage((d) => {
          const m = Fi(d);
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
        return rE(s), u().host.request(s, d, m);
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
    storage: sE(u),
    emit(s, d, m, v) {
      return u().emit(s, d, m, v);
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
        const d = eg(u());
        return d ? d.enable(s) : Promise.reject(Object.assign(new Error("App view-state recovery is unavailable on this surface."), { code: "VIEW_STATE_UNAVAILABLE" }));
      }
    }
  };
}
var oE, mt = cE(() => {
  const u = cg();
  uE(u);
  const r = Br(u);
  return r ? oE ??= rg({ targetWindow: u, messageTransport: r }) : sg;
});
function Hn(...u) {
  return u.filter(Boolean).join(" ");
}
const zp = {
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
}, fE = {
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
function dE({ mode: u = "inherit", theme: r, className: o, style: s, children: d, "data-testid": m = "hana-plugin-theme", ...v }) {
  const b = typeof r == "string" ? r : void 0, S = hE(u, r);
  return h.jsx("div", { ...v, "data-testid": m, className: Hn("hana-plugin-theme", o), "data-hana-theme-mode": u, "data-hana-theme": u === "hana" ? b : void 0, style: { ...S, ...s }, children: d });
}
function hE(u, r) {
  if (u === "inherit")
    return {};
  const o = mE(u, r), s = {};
  for (const [d, m] of Object.entries(fE)) {
    const v = o?.[d];
    v && (s[m] = v);
  }
  return s;
}
function mE(u, r) {
  if (typeof r == "string")
    return zp[r];
  if (r)
    return r;
  if (u === "hana")
    return zp["warm-paper"];
}
const we = L.forwardRef(function({ variant: r = "secondary", size: o = "md", loading: s = !1, iconLeft: d, iconRight: m, disabled: v, className: b, children: S, type: E = "button", ...N }, p) {
  return h.jsxs("button", { ...N, ref: p, type: E, disabled: v || s, className: Hn("hana-plugin-button", `hana-plugin-button-${r}`, `hana-plugin-button-${o}`, s && "hana-plugin-button-loading", b), children: [s ? h.jsx("span", { className: "hana-plugin-spinner", "aria-hidden": !0 }) : d, S && h.jsx("span", { className: "hana-plugin-button-label", children: S }), !s && m] });
});
L.forwardRef(function({ label: r, size: o = "md", variant: s = "ghost", className: d, children: m, type: v = "button", ...b }, S) {
  return h.jsx("button", { ...b, ref: S, type: v, "aria-label": r, title: b.title || r, className: Hn("hana-plugin-icon-button", `hana-plugin-icon-button-${o}`, `hana-plugin-icon-button-${s}`, d), children: m });
});
const Rt = L.forwardRef(function({ label: r, hint: o, error: s, id: d, className: m, inputClassName: v, ...b }, S) {
  const E = L.useId(), N = d || E;
  return h.jsx(og, { label: r, hint: o, error: s, htmlFor: N, className: m, children: h.jsx("input", { ...b, ref: S, id: N, "aria-invalid": !!s, className: Hn("hana-plugin-input", v) }) });
});
L.forwardRef(function({ label: r, hint: o, error: s, id: d, className: m, textareaClassName: v, rows: b = 4, ...S }, E) {
  const N = L.useId(), p = d || N;
  return h.jsx(og, { label: r, hint: o, error: s, htmlFor: p, className: m, children: h.jsx("textarea", { ...S, ref: E, id: p, rows: b, "aria-invalid": !!s, className: Hn("hana-plugin-textarea", v) }) });
});
L.forwardRef(function({ checked: r, onChange: o, label: s, disabled: d, className: m, onClick: v, type: b = "button", ...S }, E) {
  const N = typeof s == "string" ? s : S["aria-label"];
  return h.jsxs("span", { className: Hn("hana-plugin-switch-wrap", m), children: [h.jsx("button", { ...S, ref: E, type: b, role: "switch", "aria-checked": r, "aria-label": N, disabled: d, className: Hn("hana-plugin-switch", r && "hana-plugin-switch-on"), onClick: (p) => {
    v?.(p), !p.defaultPrevented && !d && o?.(!r);
  }, children: h.jsx("span", { className: "hana-plugin-switch-thumb", "aria-hidden": !0 }) }), s && h.jsx("span", { className: "hana-plugin-switch-label", children: s })] });
});
function og({ label: u, hint: r, error: o, htmlFor: s, className: d, children: m }) {
  return h.jsxs("div", { className: Hn("hana-plugin-field", d), children: [u && h.jsx("label", { className: "hana-plugin-field-label", htmlFor: s, children: u }), r && h.jsx("div", { className: "hana-plugin-field-hint", children: r }), m, o && h.jsx("div", { className: "hana-plugin-field-error", children: o })] });
}
function Mn({ title: u, description: r, actions: o, footer: s, children: d, className: m, ...v }) {
  return h.jsxs("section", { ...v, className: Hn("hana-plugin-card", m), children: [(u || r || o) && h.jsxs("header", { className: "hana-plugin-card-header", children: [h.jsxs("div", { className: "hana-plugin-card-heading", children: [u && h.jsx("h2", { className: "hana-plugin-card-title", children: u }), r && h.jsx("p", { className: "hana-plugin-card-description", children: r })] }), o && h.jsx("div", { className: "hana-plugin-card-actions", children: o })] }), h.jsx("div", { className: "hana-plugin-card-body", children: d }), s && h.jsx("footer", { className: "hana-plugin-card-footer", children: s })] });
}
function tl({ icon: u, title: r, description: o, action: s, className: d, ...m }) {
  return h.jsxs("div", { ...m, className: Hn("hana-plugin-empty", d), children: [u && h.jsx("div", { className: "hana-plugin-empty-icon", children: u }), h.jsx("div", { className: "hana-plugin-empty-title", children: r }), o && h.jsx("div", { className: "hana-plugin-empty-description", children: o }), s && h.jsx("div", { className: "hana-plugin-empty-action", children: s })] });
}
const fg = (u) => u.replace(/^\/+/, "");
async function dg(u) {
  const r = await u.text();
  try {
    return JSON.parse(r);
  } catch {
    return { ok: !1, stage: "http", message: `HTTP ${u.status}：${(r || "无响应体").slice(0, 200)}` };
  }
}
async function Ge(u) {
  const r = await mt.api.fetch(fg(u));
  return dg(r);
}
async function Pe(u, r) {
  const o = await mt.api.fetch(fg(u), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(r)
  });
  return dg(o);
}
async function Mp(u, r, o = 3e4) {
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
async function Wi(u, r = {}) {
  const o = r.timeoutMs ?? 48e4, s = Date.now();
  for (; Date.now() - s < o; ) {
    await new Promise((m) => setTimeout(m, 5e3));
    const d = await Ge(u).catch(() => null);
    if (d && d.running === !1 && (!r.kind || d.kind === r.kind) && d.lastResult) return d.lastResult;
  }
  return { ok: !1, stage: "timeout", message: `等待超时（${Math.round(o / 6e4)} 分钟），任务可能仍在运行；稍后刷新查看结果。` };
}
async function Mo(u = 480 * 1e3) {
  return Wi("/api/import/status", { timeoutMs: u });
}
function hg(u, r) {
  const o = /^#\s+(.+?)（([^（）]+),\s*(\d{4}[^)）]*)）$/.exec(String(u || "").trim());
  return { title: o ? o[1] : r, meta: o ? `${o[2].trim()} · ${o[3]}` : "" };
}
function Jl({ id: u, value: r, onChange: o, options: s, placeholder: d, allowCustom: m = !1 }) {
  const [v, b] = L.useState(r), [S, E] = L.useState(!1), [N, p] = L.useState(0), [B, A] = L.useState(null), x = L.useRef(null), V = L.useRef(null);
  L.useEffect(() => {
    b(r);
  }, [r]);
  const I = String(v || "").trim().toLowerCase(), le = L.useMemo(() => {
    if (!I) return s;
    const ie = s.filter((ne) => ne.value.toLowerCase().includes(I) || ne.label.toLowerCase().includes(I));
    return ie.length ? ie : s;
  }, [s, I]), Ee = L.useCallback(() => {
    const ie = x.current;
    if (!ie) return;
    const ne = ie.getBoundingClientRect(), ue = window.innerHeight || document.documentElement.clientHeight || 720, ye = ue - ne.bottom - 8, re = ne.top - 8, pe = ye < 160 && re > ye, ge = Math.max(120, Math.min(340, Math.floor(pe ? re : ye))), G = pe ? Math.max(4, ne.top - ge - 2) : Math.max(4, Math.min(ne.bottom + 2, ue - ge - 4));
    A({ left: ne.left, width: Math.max(ne.width, 180), top: G, maxH: ge });
  }, []), he = L.useCallback(() => {
    Ee(), E(!0), p(0);
  }, [Ee]);
  L.useEffect(() => {
    if (!S) return;
    const ie = (ue) => {
      const ye = ue.target;
      x.current?.contains(ye) || V.current?.contains(ye) || E(!1);
    }, ne = () => Ee();
    return document.addEventListener("pointerdown", ie, !0), window.addEventListener("scroll", ne, !0), window.addEventListener("resize", ne), () => {
      document.removeEventListener("pointerdown", ie, !0), window.removeEventListener("scroll", ne, !0), window.removeEventListener("resize", ne);
    };
  }, [S, Ee]);
  const k = (ie) => {
    b(ie), o(ie), E(!1);
  };
  return /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
    /* @__PURE__ */ h.jsx(
      "input",
      {
        ref: x,
        id: u,
        className: "native-sel",
        value: v,
        placeholder: d,
        onFocus: he,
        onClick: he,
        onChange: (ie) => {
          const ne = ie.currentTarget.value;
          b(ne), (m || s.some((ue) => ue.value === ne)) && o(ne), Ee(), E(!0), p(0);
        },
        onBlur: () => {
          window.setTimeout(() => {
            V.current?.contains(document.activeElement) || (E(!1), m || b(r));
          }, 120);
        },
        onKeyDown: (ie) => {
          ie.stopPropagation(), ie.key === "ArrowDown" ? (ie.preventDefault(), S ? p((ne) => Math.min(ne + 1, le.length - 1)) : he()) : ie.key === "ArrowUp" ? (ie.preventDefault(), p((ne) => Math.max(ne - 1, 0))) : ie.key === "Enter" ? S && le[N] && (ie.preventDefault(), k(le[N].value)) : ie.key === "Escape" && E(!1);
        }
      }
    ),
    S && B && S0.createPortal(
      /* @__PURE__ */ h.jsxs(
        "div",
        {
          ref: V,
          className: "combo-pop",
          style: { left: B.left, top: B.top, width: B.width, maxHeight: B.maxH },
          children: [
            le.length === 0 && /* @__PURE__ */ h.jsx("div", { className: "combo-opt muted", children: "（无匹配）" }),
            le.map((ie, ne) => /* @__PURE__ */ h.jsx(
              "div",
              {
                className: ne === N ? "combo-opt on" : "combo-opt",
                onMouseEnter: () => p(ne),
                onMouseDown: (ue) => {
                  ue.preventDefault(), k(ie.value);
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
async function mg(u) {
  const r = await Ge(nn(`篇目/${u}`)).catch(() => null);
  return r && r.ok ? String(r.content || "").split(/\r?\n/, 1)[0] : "";
}
const nn = (u) => `/api/file?path=${encodeURIComponent(u)}`, pE = [
  { id: "home", label: "首页" },
  { id: "use", label: "取用" },
  { id: "library", label: "结构库" },
  { id: "todo", label: "待办" },
  { id: "settings", label: "设置" }
], gE = {
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
function vE(u) {
  return u.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Oa(u) {
  return vE(u).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
}
function yE(u) {
  const r = String(u || "").split(/\r?\n/), o = [];
  let s = 0, d = !1;
  const m = () => {
    d && (o.push("</ul>"), d = !1);
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
      for (const E of S) o.push("<tr>" + E.map((N) => `<td>${Oa(N)}</td>`).join("") + "</tr>");
      o.push("</tbody></table>");
      continue;
    }
    /^###\s/.test(v) ? (m(), o.push(`<h3>${Oa(v.slice(4))}</h3>`)) : /^##\s/.test(v) ? (m(), o.push(`<h2>${Oa(v.slice(3))}</h2>`)) : /^#\s/.test(v) ? (m(), o.push(`<h1>${Oa(v.slice(2))}</h1>`)) : /^>\s?/.test(v) ? (m(), o.push(`<blockquote>${Oa(v.replace(/^>\s?/, ""))}</blockquote>`)) : /^-\s/.test(v) || /^\*\s/.test(v) ? (d || (o.push("<ul>"), d = !0), o.push(`<li>${Oa(v.slice(2))}</li>`)) : /^---+\s*$/.test(v) ? (m(), o.push("<hr>")) : v.trim() === "" ? m() : (m(), o.push(`<p>${Oa(v)}</p>`)), s++;
  }
  return m(), o.join(`
`);
}
function au({ md: u }) {
  return /* @__PURE__ */ h.jsx("div", { className: "doc", dangerouslySetInnerHTML: { __html: yE(u) } });
}
async function xa(u) {
  const r = await Ge(`/api/list?dir=${encodeURIComponent(u)}`);
  return r.ok ? (r.items || []).filter((o) => !o.isDirectory && o.name.endsWith(".md") && o.name !== "_模板.md").map((o) => o.name) : [];
}
function Vo(u) {
  const r = String(u || "").split(/\r?\n/), o = [];
  let s = !1;
  for (const d of r) {
    if (d.startsWith("## ")) {
      s = d.includes("复核队列");
      continue;
    }
    if (s && d.startsWith("|") && !/^\|\s*-+/.test(d)) {
      const m = d.split("|").slice(1, -1).map((v) => v.trim());
      m[0] && m[0] !== "疑似对" && o.push({ pair: m[0], evidence: m[1] || "", date: m[2] || "", decision: m[3] || "" });
    }
  }
  return o;
}
async function bE() {
  const [u, r, o, s] = await Promise.all([
    xa("篇目"),
    xa("写作模型"),
    Ge(nn("标签库.md")),
    Ge("/api/import/failures").catch(() => ({ ok: !1, items: [] }))
  ]), d = o.ok ? Vo(o.content) : [];
  return {
    papers: u.length,
    models: r.length,
    queuePending: d.filter((m) => !m.decision).length,
    failures: (s.items || []).length
  };
}
function EE() {
  const u = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), [r, o] = L.useState({ id: "", title: "", authors: "", year: "", venue: "", textType: "", score: "9", rationale: "", date: u, recordedBy: "" }), [s, d] = L.useState(null), [m, v] = L.useState([]), b = (E, N) => o((p) => ({ ...p, [E]: N }));
  L.useEffect(() => {
    let E = !0;
    return (async () => {
      const N = await Ge("/api/list?dir=篇目").catch(() => null);
      if (!N?.ok) return;
      const p = (N.items || []).map((A) => A.name).filter((A) => A.endsWith(".md") && !A.startsWith("_")), B = await Promise.all(p.map(async (A) => {
        const x = await Ge(nn(`篇目/${A}`)).catch(() => null), V = x?.ok ? String(x.content || "").split(/\r?\n/, 1)[0] : "", I = /^#\s+(.+?)（([^（）]+),\s*(\d{4})[^)）]*）$/.exec(String(V || "").trim()), le = A.replace(/\.md$/, "");
        return { id: le, title: I ? I[1] : le, label: I ? `${I[1]}（${I[2].trim()} · ${I[3]}）` : le, authors: I ? I[2].trim() : "", year: I ? I[3] : "" };
      }));
      E && v(B);
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
    d(N), N.ok && mt.toast.show({ message: "评分已落盘", type: "success" });
  }
  return /* @__PURE__ */ h.jsxs("div", { className: "form", children: [
    /* @__PURE__ */ h.jsx("p", { className: "hint", children: "你自己的总分和理由是整条评分链的起点：只增不改，理由至少 10 字，后续归纳评分指引全靠它。不录也不阻断——只是模型分数永远无锚点参照。" }),
    /* @__PURE__ */ h.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ h.jsx(
        Jl,
        {
          id: "cb-score-entry",
          value: "",
          placeholder: m.length ? `输入过滤或选择篇目（${m.length} 篇，选中即预填）` : "读取篇目中…",
          onChange: (E) => {
            const N = m.find((p) => p.id === E);
            N && o((p) => ({ ...p, id: N.id, title: N.title, authors: N.authors, year: N.year }));
          },
          options: m.map((E) => ({ value: E.id, label: E.label }))
        }
      ),
      /* @__PURE__ */ h.jsx("span", { className: "hint", children: "也可不选直接手填（锚点可以是尚未拆解的文献）。" })
    ] }),
    /* @__PURE__ */ h.jsxs("div", { className: "grid2", children: [
      /* @__PURE__ */ h.jsx(Rt, { label: "篇目 id（slug-年）", value: r.id, onChange: (E) => b("id", E.currentTarget.value), placeholder: "sample-2020" }),
      /* @__PURE__ */ h.jsx(Rt, { label: "文本类型（你判）", value: r.textType, onChange: (E) => b("textType", E.currentTarget.value), placeholder: "论证型 / 阐释型…" }),
      /* @__PURE__ */ h.jsx(Rt, { label: "标题", value: r.title, onChange: (E) => b("title", E.currentTarget.value) }),
      /* @__PURE__ */ h.jsx(Rt, { label: "作者", value: r.authors, onChange: (E) => b("authors", E.currentTarget.value) }),
      /* @__PURE__ */ h.jsx(Rt, { label: "年份", value: r.year, onChange: (E) => b("year", E.currentTarget.value) }),
      /* @__PURE__ */ h.jsx(Rt, { label: "出处（可空）", value: r.venue, onChange: (E) => b("venue", E.currentTarget.value) }),
      /* @__PURE__ */ h.jsx(Rt, { label: "总分 1-10", value: r.score, onChange: (E) => b("score", E.currentTarget.value) }),
      /* @__PURE__ */ h.jsx(Rt, { label: "日期", value: r.date, onChange: (E) => b("date", E.currentTarget.value) })
    ] }),
    /* @__PURE__ */ h.jsx(Rt, { label: "理由（≥10 字）", value: r.rationale, onChange: (E) => b("rationale", E.currentTarget.value) }),
    /* @__PURE__ */ h.jsx(Rt, { label: "录入者", value: r.recordedBy, onChange: (E) => b("recordedBy", E.currentTarget.value) }),
    /* @__PURE__ */ h.jsx(we, { variant: "primary", onClick: S, children: "提交评分" }),
    s && /* @__PURE__ */ h.jsx("pre", { className: s.ok ? "ok" : "err", children: s.ok ? `已写入：${s.file || "(dry run)"}` : JSON.stringify(s, null, 2) })
  ] });
}
const SE = (u) => {
  if (u.evidence.startsWith("语义相近")) return 3;
  const r = /共现\s*(\d+)\s*篇/.exec(u.evidence);
  return r && Number(r[1]) >= 3 ? 2 : 1;
};
function TE(u) {
  const r = /* @__PURE__ */ new Map(), o = (b) => {
    let S = b;
    for (; (r.get(S) || S) !== S; ) S = r.get(S) || S;
    return S;
  }, s = (b) => b.split(" vs ").filter(Boolean);
  for (const b of u) for (const S of s(b.pair)) r.has(S) || r.set(S, S);
  for (const b of u) {
    if (SE(b) < 2) continue;
    const [S, E] = s(b.pair);
    if (S && E) {
      const N = o(S), p = o(E);
      N !== p && r.set(N, p);
    }
  }
  const d = /* @__PURE__ */ new Map(), m = [];
  for (const b of u) {
    const [S, E] = s(b.pair);
    if (S && E && o(S) === o(E)) {
      const N = o(S);
      let p = d.get(N);
      p || (p = { rows: [], labels: [] }, d.set(N, p)), p.rows.push(b);
    } else
      m.push(b);
  }
  for (const b of d.values()) {
    const S = /* @__PURE__ */ new Set();
    for (const E of b.rows) for (const N of s(E.pair)) S.add(N);
    b.labels = [...S];
  }
  return { clusters: [...d.values()].sort((b, S) => {
    const E = b.rows.map((p) => p.date).sort()[0] || "", N = S.rows.map((p) => p.date).sort()[0] || "";
    return E !== N ? E < N ? -1 : 1 : S.rows.length - b.rows.length;
  }), weak: m };
}
const xo = (u) => u.labels.slice().sort().join("|");
function AE({ tick: u, onChanged: r }) {
  const [o, s] = L.useState([]), [d, m] = L.useState({}), [v, b] = L.useState(""), [S, E] = L.useState(!1), [N, p] = L.useState(""), [B, A] = L.useState(!1), [x, V] = L.useState({}), [I, le] = L.useState(null), [Ee, he] = L.useState(!1), [k, ie] = L.useState("");
  L.useEffect(() => {
    let j = !1;
    return (async () => {
      const F = await Ge("/api/model/status").catch(() => null);
      if (j || !F || !F.running || F.kind !== "propose") return;
      E(!0), b("AI 语义查重进行中（接管切页前的任务）…");
      const ae = await Wi("/api/model/status", { kind: "propose", timeoutMs: 180 * 1e3 });
      j || (b(ae.ok ? `已入队 ${ae.queued?.length || 0} 对` : ae.message || "未产出建议"), ae.ok && await ne(), E(!1));
    })(), () => {
      j = !0;
    };
  }, []);
  const ne = L.useCallback(async () => {
    const j = await Ge(nn("标签库.md"));
    s(j.ok ? Vo(j.content) : []);
  }, []);
  L.useEffect(() => {
    ne();
  }, [ne, u]);
  async function ue(j, F, ae) {
    const q = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), te = d[j] || `裁决执行：${j}`, J = await Pe("/api/tool/apply_tag_merge", { mergedLabel: F, target: ae, date: q, evidence: te });
    b(J.ok ? `已执行：${F} → ${J.now}` : J.message || JSON.stringify(J)), J.ok && (await ne(), r?.());
  }
  async function ye(j) {
    const F = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), ae = d[j] || "", q = await Pe("/api/tool/apply_pair_independent", { pair: j, date: F, reason: ae });
    b(q.ok ? `已判定独立，两标签都保留：${j}` : q.message || JSON.stringify(q)), q.ok && (await ne(), r?.());
  }
  const re = (j, F, ae) => V((q) => ({ ...q, [j]: ae(q[j] || { groups: [], pool: F.slice(), sel: [] }) }));
  async function pe(j, F) {
    const ae = xo(F);
    le(j), b("");
    try {
      const q = await Pe("/api/model/propose-partition", {
        labels: F.labels,
        pairs: F.rows.map((J) => ({ pair: J.pair, evidence: J.evidence }))
      });
      if (!q.started) {
        b(q.message || "发起失败"), le(null);
        return;
      }
      const te = await Wi("/api/model/status", { kind: "partition", timeoutMs: 180 * 1e3 });
      if (te.stage === "timeout") {
        b(te.message), le(null);
        return;
      }
      if (te.ok && Array.isArray(te.groups)) {
        const J = te.groups.filter((g) => Array.isArray(g) && g.length > 0).map((g) => ({ target: g[0], members: g.slice() }));
        re(ae, F.labels, (g) => ({ ...g, groups: J, pool: [], sel: [] })), b(te.message ? `分族提案已给出（${te.message}）——点选标签可调整分组` : "分族提案已给出，核对后提交");
      } else
        b(te.message || "未产出分族提案");
    } catch (q) {
      b(`请求失败：${String(q?.message || q)}`);
    }
    le(null);
  }
  async function ge(j, F) {
    const ae = xo(F), q = x[ae] || { groups: [], pool: F.labels.slice(), sel: [] };
    if (q.pool.length > 0) {
      b(`还有 ${q.pool.length} 个标签未分组（可「全部各自成组」）`);
      return;
    }
    if (!q.groups.length) {
      b("先分组再提交");
      return;
    }
    const te = q.groups.flatMap((W) => W.members), J = F.labels.filter((W) => !te.includes(W)), g = te.filter((W, fe) => te.indexOf(W) !== fe);
    if (J.length || g.length) {
      b(`分组与标签清单不符 — 缺：${J.join("、") || "无"}；重复：${g.join("、") || "无"}`);
      return;
    }
    for (const W of q.groups) {
      const fe = String(W.target ?? "");
      if (W.members.length > 0 && !fe.trim()) {
        b("有组的存活名为空——补填，或把该组成员移回池");
        return;
      }
      if (fe.includes(" vs ")) {
        b("存活名不能包含「 vs 」（会破坏对的解析）");
        return;
      }
    }
    he(!0), b("");
    const D = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), P = /* @__PURE__ */ new Map();
    q.groups.forEach((W, fe) => W.members.forEach((We) => P.set(We, fe)));
    let $ = 0, ce = 0, de = 0, oe = "";
    try {
      for (const W of q.groups) {
        if (W.members.length < 2) continue;
        const fe = String(W.target);
        for (const We of W.members) {
          if (We === fe) continue;
          ie(`正在合并：「${We}」→「${fe}」…`);
          const rt = await Mp("/api/tool/apply_tag_merge", {
            mergedLabel: We,
            target: fe,
            date: D,
            evidence: `相关组分区提交：组内「${We}」并入「${fe}」`
          });
          if (!rt.ok) {
            oe = `合并「${We}→${fe}」失败：${rt.message || JSON.stringify(rt)}`;
            break;
          }
          $++;
        }
        if (oe) break;
      }
      if (!oe)
        for (const W of F.rows) {
          const [fe, We] = W.pair.split(" vs ");
          if (P.get(fe) === P.get(We)) continue;
          ie(`正在判定独立：${W.pair}…`);
          const rt = await Mp("/api/tool/apply_pair_independent", {
            pair: W.pair,
            date: D,
            reason: "相关组分区提交：分属不同组"
          });
          if (rt.ok) {
            ce++;
            continue;
          }
          const Yt = String(rt.message || "");
          if (Yt.includes("已有裁决") || Yt.includes("无此对")) {
            de++;
            continue;
          }
          oe = `判定独立「${W.pair}」失败：${Yt || JSON.stringify(rt)}`;
          break;
        }
    } catch (W) {
      oe = `提交中断（网络/桥接异常）：${String(W?.message || W)}`;
    }
    b(oe ? `${oe}（此前已完成：${$} 合并、${ce} 独立；直接再点提交即可续跑——已并入的标签重试幂等，不会重复执行）` : `已提交本组裁决：${$} 合并、${ce} 独立${de ? `、${de} 对已随合并关闭` : ""}`);
    try {
      await ne();
    } catch {
    }
    r?.(), oe || V((W) => ({ ...W, [ae]: { groups: [], pool: F.labels.slice(), sel: [] } })), ie(""), he(!1);
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
        const q = await Wi("/api/model/status", { kind: "propose", timeoutMs: 18e4 });
        if (q.stage === "timeout")
          b(`${j}；语义查重${q.message || "等待超时"}`);
        else {
          const te = q.ok ? q.message || (q.queued?.length ? `语义入队 ${q.queued.length} 对：${q.queued.join("；")}` : "语义未找到新对") : q.message || "语义查重未产出建议";
          if (b(`${j}；${te}`), q.ok && q.queued?.length)
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
  const me = o.filter((j) => !j.decision), De = o.filter((j) => !!j.decision), { clusters: H, weak: M } = L.useMemo(() => TE(me), [o]), ee = (j) => /* @__PURE__ */ h.jsx(Mn, { title: j.pair, description: `${j.date} 进队 · ${j.evidence}`, children: j.decision ? /* @__PURE__ */ h.jsxs("p", { className: "decided", children: [
    "已裁决：",
    j.decision
  ] }) : /* @__PURE__ */ h.jsxs("div", { className: "queue-actions", children: [
    [j.pair.split(" vs ")[0], j.pair.split(" vs ")[1]].filter(Boolean).map((F, ae, q) => /* @__PURE__ */ h.jsx("div", { className: "queue-op", children: /* @__PURE__ */ h.jsxs(we, { onClick: () => ue(j.pair, F, q[1 - ae]), children: [
      "「",
      F,
      "」并入「",
      q[1 - ae],
      "」"
    ] }) }, F)),
    /* @__PURE__ */ h.jsx("div", { className: "queue-op", children: /* @__PURE__ */ h.jsx(we, { onClick: () => ye(j.pair), children: "判定独立（都保留）" }) }),
    /* @__PURE__ */ h.jsx(Rt, { label: "依据（可空，判定独立时建议填）", value: d[j.pair] || "", onChange: (F) => {
      const ae = F.currentTarget.value;
      m((q) => ({ ...q, [j.pair]: ae }));
    } })
  ] }) }, j.pair);
  return /* @__PURE__ */ h.jsxs("div", { children: [
    /* @__PURE__ */ h.jsxs("p", { className: "hint", children: [
      me.length > 0 && /* @__PURE__ */ h.jsxs("b", { children: [
        me.length,
        " 对待裁决　"
      ] }),
      "疑似重复（或高度共现）的标签对会进到这里。两种处理：合并（留一个名字，另一个成为它的别名）或判定独立（两个都留）；互相牵连的对归在同一组里批量处理。所有操作只新增记录，不改动原始拆解。 本页管标签层（同一个论证动作的多个名字）；把标签家族立成类型在下一页——两页可并行，不必等这页清空。"
    ] }),
    v && /* @__PURE__ */ h.jsx("p", { className: v.startsWith("已") ? "ok" : "err", children: v }),
    /* @__PURE__ */ h.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ h.jsx(we, { variant: "primary", disabled: S, onClick: () => {
        G();
      }, children: N === "co" ? "共现扫描中…" : N === "semantic" ? "语义查重中…" : "一键查重" }),
      /* @__PURE__ */ h.jsx("span", { className: "hint", children: "一键查重：先扫共现（秒出），再跑 AI 语义（约半分钟，标签集未变自动跳过）；结果都进下方待裁决，每对来源写在证据里。" })
    ] }),
    o.length === 0 && /* @__PURE__ */ h.jsx(tl, { title: "暂无待裁决标签", description: "篇目积累出相近标签后，候选会自动出现在这里。" }),
    H.map((j, F) => {
      const ae = xo(j), q = x[ae] || { groups: [], pool: j.labels.slice(), sel: [] }, te = /* @__PURE__ */ new Map();
      q.groups.forEach((D, P) => D.members.forEach(($) => te.set($, P)));
      const J = q.groups.reduce((D, P) => D + (P.members.includes(P.target) ? Math.max(0, P.members.length - 1) : P.members.length), 0), g = j.rows.filter((D) => {
        const [P, $] = D.pair.split(" vs ");
        return te.get(P) !== te.get($);
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
          /* @__PURE__ */ h.jsx(we, { disabled: I !== null || S, onClick: () => {
            pe(F, j);
          }, children: I === F ? "分组中…" : "智能分组" }),
          /* @__PURE__ */ h.jsx(we, { disabled: Ee, onClick: () => re(ae, j.labels, (D) => ({ ...D, groups: j.labels.map((P) => ({ target: P, members: [P] })), pool: [], sel: [] })), children: "全部各自成组" }),
          /* @__PURE__ */ h.jsx(we, { disabled: Ee, onClick: () => re(ae, j.labels, (D) => ({ ...D, groups: [{ target: j.labels[0], members: j.labels.slice() }], pool: [], sel: [] })), children: "全部并入一组" })
        ] }),
        q.groups.map((D, P) => /* @__PURE__ */ h.jsxs("div", { className: "group-card", children: [
          /* @__PURE__ */ h.jsxs("div", { className: "hint group-head", children: [
            "组 ",
            P + 1,
            " · 存活名：",
            /* @__PURE__ */ h.jsx(
              "input",
              {
                className: "target-input",
                value: D.target,
                onChange: ($) => {
                  const ce = $.currentTarget.value;
                  re(ae, j.labels, (de) => ({ ...de, groups: de.groups.map((oe, W) => W === P ? { ...oe, target: ce } : oe) }));
                },
                onKeyDown: ($) => $.stopPropagation(),
                placeholder: "点 ★ 快选，或直接输入新名"
              }
            ),
            /* @__PURE__ */ h.jsxs("span", { className: "hint", children: [
              "（",
              D.members.length,
              " 个标签；成员 chip 的 ★ 一键设为存活名，输入框可自定义新名）"
            ] })
          ] }),
          /* @__PURE__ */ h.jsx("p", { className: "cluster-tags", children: D.members.map(($) => /* @__PURE__ */ h.jsxs(
            "span",
            {
              className: q.sel.includes($) ? "tag-chip sel" : "tag-chip",
              onClick: () => re(ae, j.labels, (ce) => ({ ...ce, sel: ce.sel.includes($) ? ce.sel.filter((de) => de !== $) : [...ce.sel, $] })),
              children: [
                $,
                /* @__PURE__ */ h.jsx(
                  "button",
                  {
                    className: "chip-star",
                    title: "设为本组存活名",
                    onClick: (ce) => {
                      ce.stopPropagation(), re(ae, j.labels, (de) => ({ ...de, groups: de.groups.map((oe, W) => W === P ? { ...oe, target: $ } : oe) }));
                    },
                    children: D.target === $ ? "★" : "☆"
                  }
                ),
                /* @__PURE__ */ h.jsx(
                  "button",
                  {
                    className: "chip-x",
                    onClick: (ce) => {
                      ce.stopPropagation(), re(ae, j.labels, (de) => ({
                        ...de,
                        groups: de.groups.map((oe, W) => {
                          if (W !== P) return oe;
                          const fe = oe.members.filter((We) => We !== $);
                          return { ...oe, members: fe, target: oe.target === $ ? fe[0] || "" : oe.target };
                        }).filter((oe) => oe.members.length > 0),
                        pool: [...de.pool, $]
                      }));
                    },
                    children: "×"
                  }
                )
              ]
            },
            $
          )) }),
          q.sel.length > 0 && /* @__PURE__ */ h.jsxs(we, { onClick: () => re(ae, j.labels, ($) => {
            const ce = $.sel.filter((oe) => j.labels.includes(oe));
            if (!ce.length) return $;
            const de = $.groups.map((oe, W) => {
              const fe = oe.members.filter((rt) => !ce.includes(rt));
              if (W === P) return { ...oe, members: [...fe, ...ce.filter((rt) => !fe.includes(rt))], target: oe.target || (fe[0] ?? ce[0]) };
              const We = oe.target && ce.includes(oe.target) ? fe[0] || "" : oe.target;
              return { ...oe, members: fe, target: We };
            }).filter((oe) => oe.members.length > 0);
            return { ...$, groups: de, pool: $.pool.filter((oe) => !ce.includes(oe)), sel: [] };
          }), children: [
            "把选中的 ",
            q.sel.length,
            " 个放进本组"
          ] })
        ] }, `g${P}`)),
        q.pool.length > 0 && /* @__PURE__ */ h.jsxs("div", { className: "pool-box", children: [
          /* @__PURE__ */ h.jsxs("p", { className: "hint", children: [
            "未分组（",
            q.pool.length,
            "）：标签点选后用下方行动按钮分组；组间提交即判定独立。"
          ] }),
          /* @__PURE__ */ h.jsx("p", { className: "cluster-tags", children: q.pool.map((D) => /* @__PURE__ */ h.jsx(
            "span",
            {
              className: q.sel.includes(D) ? "tag-chip sel" : "tag-chip",
              onClick: () => re(ae, j.labels, (P) => ({ ...P, sel: P.sel.includes(D) ? P.sel.filter(($) => $ !== D) : [...P.sel, D] })),
              children: D
            },
            D
          )) })
        ] }),
        q.sel.length > 0 && /* @__PURE__ */ h.jsxs("div", { className: "import-row sel-actions", children: [
          /* @__PURE__ */ h.jsxs(we, { onClick: () => re(ae, j.labels, (D) => {
            const P = D.sel.filter((ce) => j.labels.includes(ce));
            if (!P.length) return D;
            const $ = D.groups.map((ce) => {
              const de = ce.members.filter((W) => !P.includes(W)), oe = ce.target && P.includes(ce.target) ? de[0] || "" : ce.target;
              return { ...ce, members: de, target: oe };
            }).filter((ce) => ce.members.length > 0);
            return { ...D, groups: [...$, { target: P[0], members: P }], pool: D.pool.filter((ce) => !P.includes(ce)), sel: [] };
          }), children: [
            "成新组（",
            q.sel.length,
            "）"
          ] }),
          /* @__PURE__ */ h.jsxs("span", { className: "hint", children: [
            "已选中 ",
            q.sel.length,
            " 个标签：「成新组」拆出去（选 1 个即单独成组），或点目标组卡上的「放进本组」并入该组；再点标签取消选中。"
          ] })
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "import-row", children: [
          /* @__PURE__ */ h.jsx(we, { variant: "primary", disabled: Ee || q.pool.length > 0 || q.groups.length === 0, onClick: () => {
            ge(F, j);
          }, children: Ee ? "提交中…" : `提交本组裁决（${J} 合并 + ${g} 独立）` }),
          /* @__PURE__ */ h.jsx("span", { className: "hint", children: Ee && k ? k : q.pool.length > 0 ? "先把未分组标签分完（可「全部各自成组」）" : "先组内合并，再把跨组待裁对记为独立；存活名保留。" })
        ] }),
        /* @__PURE__ */ h.jsxs("details", { className: "cluster-evidence", children: [
          /* @__PURE__ */ h.jsxs("summary", { children: [
            "共现证据（",
            j.rows.length,
            " 对）"
          ] }),
          j.rows.map((D) => /* @__PURE__ */ h.jsxs("p", { className: "hint", children: [
            D.pair,
            " — ",
            D.evidence
          ] }, D.pair))
        ] }),
        j.rows.map(ee)
      ] }, ae);
    }),
    M.length > 0 && /* @__PURE__ */ h.jsxs("div", { className: "cluster weak-zone", children: [
      /* @__PURE__ */ h.jsxs("p", { className: "hint queue-group", children: [
        /* @__PURE__ */ h.jsx("b", { children: "弱关联对" }),
        " · ",
        M.length,
        " 对 · 单独裁决（合并或判定独立，不参与分组提交）"
      ] }),
      M.map(ee)
    ] }),
    De.length > 0 && /* @__PURE__ */ h.jsxs("div", { className: "queue-decided-zone", children: [
      /* @__PURE__ */ h.jsxs("div", { className: "import-row", children: [
        /* @__PURE__ */ h.jsxs(we, { onClick: () => A((j) => !j), children: [
          B ? "收起" : "展开",
          "已裁决（",
          De.length,
          " 条）"
        ] }),
        /* @__PURE__ */ h.jsx("span", { className: "hint", children: "裁决过的对折叠在此，可回看记录。" })
      ] }),
      B && De.map(ee)
    ] })
  ] });
}
function NE({ tick: u, onChanged: r }) {
  const [o, s] = L.useState(null), [d, m] = L.useState(""), [v, b] = L.useState(null), [S, E] = L.useState({}), [N, p] = L.useState({}), [B, A] = L.useState(!1), [x, V] = L.useState({}), [I, le] = L.useState(null), [Ee, he] = L.useState({}), [k, ie] = L.useState({ from: "", to: "" }), ne = L.useCallback(async () => {
    const G = await Ge("/api/types/candidates");
    s(G.ok ? G : null);
  }, []);
  L.useEffect(() => {
    ne();
  }, [ne, u]);
  async function ue(G, me, De = {}) {
    const H = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    b(G), m("");
    const M = await Pe("/api/tool/apply_type_ruling", { action: me, name: G, date: H, ...De });
    m(M.ok ? `已${me === "create" ? "新立进类型库" : me === "merge" ? `并入「${M.now}」` : "驳回"}：${G}` : M.message || JSON.stringify(M)), M.ok && (await ne(), r?.(), V({}), he((ee) => {
      const j = { ...ee };
      return delete j[G], j;
    }), ie({ from: "", to: "" })), b(null);
  }
  async function ye(G, me) {
    le(G), m("");
    try {
      const De = await Pe("/api/model/type-targets", {
        candidates: [{ name: G, definition: me }],
        types: (o?.types || []).map((M) => ({ type: M.type, definition: M.definition }))
      });
      if (!De.started) {
        m(De.message || "发起失败"), le(null);
        return;
      }
      const H = await Wi("/api/model/status", { kind: "typehint", timeoutMs: 180 * 1e3 });
      if (H.stage === "timeout") {
        m(H.message), le(null);
        return;
      }
      if (H.ok && Array.isArray(H.suggestions) && H.suggestions.length) {
        const M = H.suggestions[0];
        V((ee) => ({ ...ee, [G]: { target: String(M.target), reason: String(M.reason || "") } })), m(`「${G}」的建议已给出，见该候选卡`);
      } else
        m(H.message || "未产出建议");
    } catch (De) {
      m(`请求失败：${String(De?.message || De)}`);
    }
    le(null);
  }
  async function re(G) {
    const me = (N[G] || "").trim();
    if (!me) {
      m("改名：先在框里填新名称");
      return;
    }
    const De = o?.pending.find((j) => j.name === G)?.definition || "", H = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    b(G), m("");
    const M = await Pe("/api/tool/apply_type_ruling", { action: "create", name: me, date: H, definition: De });
    if (!M.ok) {
      m(`改名中断（新立「${me}」未过）：${M.message || JSON.stringify(M)}`), b(null);
      return;
    }
    const ee = await Pe("/api/tool/apply_type_ruling", { action: "merge", name: G, target: me, date: H });
    m(ee.ok ? `已改名：${G} → ${me}` : ee.message || JSON.stringify(ee)), ee.ok && (await ne(), r?.(), V({}), he((j) => {
      const F = { ...j };
      return delete F[G], F;
    })), b(null);
  }
  if (!o) return /* @__PURE__ */ h.jsx(tl, { title: "读取候选中…", description: "正在扫描篇目的新类型宣告。" });
  const pe = [...o.pending, ...o.ruled.filter((G) => Ee[G.name])], ge = (G) => !!G && !(o.types || []).some((me) => me.type === G) && !(o.pending || []).some((me) => me.name === G);
  return /* @__PURE__ */ h.jsxs("div", { children: [
    /* @__PURE__ */ h.jsxs("p", { className: "hint", children: [
      pe.length > 0 && /* @__PURE__ */ h.jsxs("b", { children: [
        pe.length,
        " 个候选待裁　"
      ] }),
      "每个候选来自拆解时的「新类型宣告」。四选一：新立（进类型库）、并入（记闭包映射）、改名（先立新名再并入）、驳回（留痕不入表）。裁决即生效，宣告篇目同步盖章。 并入看箭头：「A → B」= A 并入 B、B 存活；候选名表述更佳时选反方向箭头即可。已裁决的可「重新裁决」，已登记类型用下方再归类工具——一切归类都可再次归类。 与上页的关系：标签裁决查的是重名标签，本页立的是写作模型的类型；标签层没清完也能裁——类型库「归并自」容纳多个共存标签。 建议逐个取：点候选卡上的「AI 推荐」，按此刻的类型库实时算；裁决一张卡后全部建议清空，下一张再点。"
    ] }),
    d && /* @__PURE__ */ h.jsx("p", { className: d.startsWith("已") ? "ok" : "err", children: d }),
    /* @__PURE__ */ h.jsxs("div", { className: "import-row reclass-box", children: [
      /* @__PURE__ */ h.jsx(
        Jl,
        {
          id: "cb-reclass-from",
          value: k.from,
          placeholder: "已登记类型再归类：选源…",
          onChange: (G) => ie((me) => ({ ...me, from: G })),
          options: (o.types || []).map((G) => ({ value: G.type, label: G.type }))
        }
      ),
      /* @__PURE__ */ h.jsx(
        Jl,
        {
          id: "cb-reclass-to",
          value: k.to,
          placeholder: "输入过滤，或直接输入新名…",
          allowCustom: !0,
          onChange: (G) => ie((me) => ({ ...me, to: G })),
          options: [
            ...(o.types || []).map((G) => ({ value: G.type, label: G.type })),
            ...(o.pending || []).map((G) => ({ value: G.name, label: `${G.name}（候选）` }))
          ]
        }
      ),
      /* @__PURE__ */ h.jsx(we, { disabled: v !== null || !k.from || !k.to, onClick: () => {
        ue(k.from, "merge", { target: k.to, targetFresh: ge(k.to) });
      }, children: "执行归类" })
    ] }),
    pe.length === 0 && /* @__PURE__ */ h.jsx(tl, { title: "暂无待裁候选", description: "拆解宣告新类型后，候选会自动出现在这里。" }),
    pe.map((G) => /* @__PURE__ */ h.jsxs(Mn, { title: G.name, description: `宣告于：${G.papers.join("、")}`, children: [
      /* @__PURE__ */ h.jsx("p", { children: G.definition || "（定义待补）" }),
      x[G.name] && /* @__PURE__ */ h.jsxs("div", { className: "hint suggest-line", children: [
        "AI 建议：",
        x[G.name].target === "新立" ? "新立（未匹配到既有类型）" : x[G.name].target === "驳回" ? "驳回（无独立价值）" : `并入「${x[G.name].target}」`,
        "——",
        x[G.name].reason,
        (o.types || []).some((me) => me.type === x[G.name].target) && /* @__PURE__ */ h.jsx(we, { onClick: () => E((me) => ({ ...me, [G.name]: x[G.name].target })), children: "采纳（填入目标）" })
      ] }),
      /* @__PURE__ */ h.jsx("div", { className: "import-row", children: /* @__PURE__ */ h.jsx(we, { disabled: I !== null || v !== null, onClick: () => {
        ye(G.name, G.definition);
      }, children: I === G.name ? "推荐中…" : "AI 推荐" }) }),
      /* @__PURE__ */ h.jsxs("div", { className: "import-row", children: [
        /* @__PURE__ */ h.jsx(we, { variant: "primary", disabled: v !== null, onClick: () => {
          ue(G.name, "create");
        }, children: v === G.name ? "执行中…" : "新立进类型库" }),
        /* @__PURE__ */ h.jsx(
          Jl,
          {
            id: `cb-merge-${G.name}`,
            value: S[G.name] || "",
            placeholder: "输入过滤，或输入新名…",
            allowCustom: !0,
            onChange: (me) => E((De) => ({ ...De, [G.name]: me })),
            options: [
              ...(o.types || []).map((me) => ({ value: me.type, label: me.type })),
              ...(o.pending || []).filter((me) => me.name !== G.name).map((me) => ({ value: me.name, label: `${me.name}（候选）` }))
            ]
          }
        ),
        /* @__PURE__ */ h.jsxs(we, { disabled: v !== null || !S[G.name], title: "箭头左侧消失成为别名，右侧名字存活", onClick: () => {
          ue(G.name, "merge", { target: S[G.name], targetFresh: ge(S[G.name]) });
        }, children: [
          G.name,
          " → ",
          S[G.name] || "…"
        ] }),
        /* @__PURE__ */ h.jsxs(we, { disabled: v !== null || !S[G.name], title: "反方向：右侧候选名存活，左侧所选类型归入它名下", onClick: () => {
          ue(S[G.name], "merge", { target: G.name });
        }, children: [
          S[G.name] || "…",
          " → ",
          G.name
        ] }),
        /* @__PURE__ */ h.jsx(we, { disabled: v !== null, onClick: () => {
          ue(G.name, "reject");
        }, children: "驳回" })
      ] }),
      /* @__PURE__ */ h.jsxs("div", { className: "import-row", children: [
        /* @__PURE__ */ h.jsx(Rt, { label: "改名为", value: N[G.name] || "", onChange: (me) => {
          const De = me.currentTarget.value;
          p((H) => ({ ...H, [G.name]: De }));
        }, placeholder: "新类型名" }),
        /* @__PURE__ */ h.jsx(we, { disabled: v !== null || !(N[G.name] || "").trim(), onClick: () => {
          re(G.name);
        }, children: "改名" })
      ] })
    ] }, G.name)),
    o.ruled.length > 0 && /* @__PURE__ */ h.jsxs("div", { className: "queue-decided-zone", children: [
      /* @__PURE__ */ h.jsxs("div", { className: "import-row", children: [
        /* @__PURE__ */ h.jsxs(we, { onClick: () => A((G) => !G), children: [
          B ? "收起" : "展开",
          "已裁决（",
          o.ruled.length,
          "）"
        ] }),
        /* @__PURE__ */ h.jsx("span", { className: "hint", children: "裁决过的候选折叠在此；明细查类型库与闭包映射表。" })
      ] }),
      B && o.ruled.map((G) => /* @__PURE__ */ h.jsxs(Mn, { title: G.name, description: `已裁决：${G.ruledStatus || ""}`, children: [
        /* @__PURE__ */ h.jsx("p", { className: "hint", children: G.definition || "" }),
        /* @__PURE__ */ h.jsx(we, { disabled: v !== null, onClick: () => he((me) => ({ ...me, [G.name]: !0 })), children: "重新裁决" })
      ] }, G.name))
    ] })
  ] });
}
function pg({ initial: u, savePath: r, onSaved: o }) {
  const [s, d] = L.useState(u), [m, v] = L.useState(""), [b, S] = L.useState(!1);
  async function E() {
    if (!s.startsWith("#")) {
      v("首行须为 # 标题（防存入半截文件）");
      return;
    }
    let N = s;
    if (N !== u) {
      const p = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), B = /^> 人工修订：(.+)$/m;
      N = B.test(N) ? N.replace(B, `> 人工修订：${p}`) : N.trimEnd() + `

> 人工修订：${p}
`;
    }
    S(!0), v("");
    try {
      const p = await Pe("/api/library/write-file", { path: r, content: N });
      p && p.ok ? (mt.toast.show({ message: "已保存", type: "success" }), o(N)) : v(p?.message || "保存失败");
    } catch (p) {
      v(String(p?.message || p));
    }
    S(!1);
  }
  return /* @__PURE__ */ h.jsxs("div", { className: "editor", children: [
    m && /* @__PURE__ */ h.jsx("p", { className: "err", children: m }),
    /* @__PURE__ */ h.jsx("textarea", { className: "editbox", value: s, onChange: (N) => d(N.currentTarget.value), rows: 22, spellCheck: !1 }),
    /* @__PURE__ */ h.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ h.jsx(we, { variant: "primary", disabled: b, onClick: () => {
        E();
      }, children: "保存" }),
      /* @__PURE__ */ h.jsx("span", { className: "hint", children: "首行须为 # 标题；改动会在尾部留一行修订日期（可自行删除）。改标签：编辑「- 标签：」行。" })
    ] })
  ] });
}
function _E({ tick: u }) {
  const [r, o] = L.useState([]), [s, d] = L.useState(""), [m, v] = L.useState(""), [b, S] = L.useState(!1), E = L.useCallback(async () => {
    const N = await xa("篇目"), p = await Promise.all(
      N.map(async (B) => {
        const { title: A, meta: x } = hg(await mg(B), B.replace(/\.md$/, ""));
        return { id: B, title: A, meta: x || B.replace(/\.md$/, "") };
      })
    );
    o(p);
  }, []);
  return L.useEffect(() => {
    E();
  }, [E, u]), L.useEffect(() => {
    if (!s) {
      v("");
      return;
    }
    Ge(nn(`篇目/${s}`)).then((N) => v(N.ok ? N.content : N.message || "读取失败"));
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
      s && /* @__PURE__ */ h.jsx("div", { className: "import-row", children: /* @__PURE__ */ h.jsx(we, { onClick: () => S((N) => !N), children: b ? "返回预览" : "编辑本篇" }) }),
      s ? b ? /* @__PURE__ */ h.jsx(
        pg,
        {
          initial: m,
          savePath: `篇目/${s}`,
          onSaved: (N) => {
            v(N), S(!1), E();
          }
        }
      ) : /* @__PURE__ */ h.jsx(au, { md: m }) : /* @__PURE__ */ h.jsx("p", { className: "hint", children: "左侧选篇查看（每条登记都带位置与原文引文）。" })
    ] })
  ] }) : /* @__PURE__ */ h.jsx(tl, { title: "还没有篇目", description: "导入文献或在对话里拆解后，篇目会出现在这里。" });
}
function wE({ tick: u }) {
  const [r, o] = L.useState([]), [s, d] = L.useState(""), [m, v] = L.useState(""), [b, S] = L.useState(""), [E, N] = L.useState(""), [p, B] = L.useState({});
  if (L.useEffect(() => {
    xa("篇目").then(async (x) => {
      o(x), x[0] && d(x[0]), x[1] && v(x[1]);
      const V = await Promise.all(x.map(async (I) => {
        const { title: le, meta: Ee } = hg(await mg(I), I.replace(/\.md$/, ""));
        return [I, Ee ? `${le} · ${Ee}` : le];
      }));
      B(Object.fromEntries(V));
    });
  }, [u]), L.useEffect(() => {
    s && Ge(nn(`篇目/${s}`)).then((x) => S(x.ok ? x.content : ""));
  }, [s]), L.useEffect(() => {
    m && Ge(nn(`篇目/${m}`)).then((x) => N(x.ok ? x.content : ""));
  }, [m]), r.length < 2) return /* @__PURE__ */ h.jsx(tl, { title: "至少两篇可对比", description: "先积累两篇以上篇目。" });
  const A = r.map((x) => ({ value: x, label: p[x] || x.replace(/\.md$/, "") }));
  return /* @__PURE__ */ h.jsxs("div", { children: [
    /* @__PURE__ */ h.jsxs("div", { className: "grid2", children: [
      /* @__PURE__ */ h.jsx(Jl, { id: "cb-cmp-a", value: s, onChange: d, options: A, placeholder: "输入过滤篇目…" }),
      /* @__PURE__ */ h.jsx(Jl, { id: "cb-cmp-b", value: m, onChange: v, options: A, placeholder: "输入过滤篇目…" })
    ] }),
    /* @__PURE__ */ h.jsxs("div", { className: "compare", children: [
      /* @__PURE__ */ h.jsx("div", { className: "col", children: /* @__PURE__ */ h.jsx(au, { md: b }) }),
      /* @__PURE__ */ h.jsx("div", { className: "col", children: /* @__PURE__ */ h.jsx(au, { md: E }) })
    ] })
  ] });
}
function OE({ tick: u }) {
  const [r, o] = L.useState(null);
  if (L.useEffect(() => {
    (async () => {
      const [d, m, v, b, S, E] = await Promise.all([
        xa("篇目"),
        xa("锚点样本"),
        xa("写作模型"),
        Ge(nn("标签库.md")),
        Ge(nn("闭包映射表.md")),
        Ge(nn("类型库.md"))
      ]), N = b.ok ? Ro(b.content, "标签") : [], p = b.ok ? Vo(b.content) : [], B = S.ok ? Ro(S.content, "from") : [], A = E.ok ? Ro(E.content, "类型") : [];
      o({
        papers: d.length,
        anchors: m.length,
        models: v.length,
        tags: N,
        queuePending: p.filter((x) => !x.decision).length,
        mapRows: B,
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
      const v = m.split("|").slice(1, -1).map((b) => b.trim());
      if (v[0] === r) {
        d = !0;
        continue;
      }
      d && v[0] && v[0] !== "（暂无）" && s.push(v[0]);
    } else d && !m.startsWith("|") && (d = !1);
  return s;
}
function jo(u) {
  const r = u.filter((m) => m.ok), o = u.filter((m) => !m.ok && m.skipped), s = u.filter((m) => !m.ok && !m.skipped), d = [];
  return r.length && d.push(`✓ 生成 ${r.length} 个类型：${r.map((m) => `${m.type} v${m.version}`).join("、")}`), o.length && d.push(`跳过 ${o.length} 个（样本不足或未变）`), s.length && d.push(`✗ 失败：${s.map((m) => `${m.type}：${m.error || "未知"}`).join("；")}`), d.join("；") || "没有可处理的类型";
}
function CE(u) {
  const r = u.results || [], o = r.filter((S) => S.ok), s = r.filter((S) => !S.ok && (S.stage === "unchanged" || S.stage === "size")), d = r.filter((S) => !S.ok && S.stage !== "unchanged" && S.stage !== "size"), m = [];
  o.length && m.push(`✓ 生成 ${o.length} 个战术：${o.map((S) => `战术-${S.label} v${S.version}`).join("、")}`), s.length && m.push(`跳过 ${s.length} 个（未变或超素材上限）`), d.length && m.push(`✗ 失败：${d.map((S) => `${S.label}：${S.message || S.stage}`).join("；")}`);
  const v = m.join("；") || "无产出", b = Number(u.belowThreshold || 0);
  return b ? `${v}（另有 ${b} 个标签携带篇目 <2，未达门槛）` : v;
}
function xE(u) {
  const r = {};
  for (const o of String(u || "").split(/\r?\n/)) {
    if (!o.startsWith("|") || /^\|\s*-+/.test(o)) continue;
    const s = o.split("|").slice(1, -1).map((d) => d.trim());
    s.length === 3 && s[0] && s[0] !== "原始类型" && s[1] && s[0] !== s[1] && (r[s[0]] = s[1]);
  }
  return r;
}
function RE({ tick: u }) {
  const [r, o] = L.useState([]), [s, d] = L.useState(""), [m, v] = L.useState(""), [b, S] = L.useState(!1), [E, N] = L.useState(!1), [p, B] = L.useState({}), [A, x] = L.useState(""), [V, I] = L.useState({}), [le, Ee] = L.useState("list"), [he, k] = L.useState(""), [ie, ne] = L.useState({}), [ue, ye] = L.useState(!1);
  async function re(q = () => !0) {
    const te = Date.now(), J = () => {
      const g = Math.max(0, Math.round((Date.now() - te) / 1e3));
      return `${Math.floor(g / 60)}分${String(g % 60).padStart(2, "0")}秒`;
    };
    for (; Date.now() - te < 2400 * 1e3; ) {
      if (await new Promise((D) => setTimeout(D, 4e3)), !q()) return null;
      const g = await Ge("/api/model/status").catch(() => null);
      if (!(!g || g.kind !== "generate")) {
        if (g.running) {
          const D = g.progress || {};
          k(D.total ? `建模中：${D.done ?? 0}/${D.total}　当前：${D.current || "…"}　已用 ${J()}` : `建模中：准备中…　已用 ${J()}`);
        } else if (g.lastResult)
          return g.lastResult;
      }
    }
    return { ok: !1, stage: "timeout", message: `等待超过 40 分钟（已用 ${J()}），任务可能仍在运行；本页离开再回来仍可查看，后台任务不会因等待超时而中断。` };
  }
  L.useEffect(() => {
    let q = !1;
    return (async () => {
      const te = await Ge("/api/model/status").catch(() => null);
      if (!(q || !te || te.kind !== "generate")) {
        if (te.running) {
          S(!0), k("建模进行中（接管切页前的任务）…");
          const J = await re(() => !q);
          if (q || !J) return;
          k(J.stage === "timeout" ? J.message : jo(J.results || [])), (J.results || []).some((g) => g.ok) && (mt.toast.show({ message: "写作模型已生成/更新", type: "success" }), ge()), S(!1);
          return;
        }
        te.lastResult && te.finishedAt && Date.now() - te.finishedAt < 1800 * 1e3 && (k(`上次建模：${jo(te.lastResult.results || [])}`), ge());
      }
    })(), () => {
      q = !0;
    };
  }, []);
  const pe = L.useMemo(() => {
    const q = /* @__PURE__ */ new Map();
    for (const te of r) {
      const J = /^(.+)-写作模型-v(\d+)\.md$/.exec(te);
      J && (q.has(J[1]) || q.set(J[1], []), q.get(J[1]).push({ file: te, v: Number(J[2]) }));
    }
    return [...q.entries()].map(([te, J]) => (J.sort((g, D) => g.v - D.v), { type: te, latest: J[J.length - 1], history: J.slice(0, -1).reverse() }));
  }, [r]), ge = L.useCallback(() => {
    xa("写作模型").then(o), Ge(nn("闭包映射表.md")).then((q) => B(q.ok ? xE(q.content) : {}));
  }, []);
  L.useEffect(() => {
    ge();
  }, [ge, u]), L.useEffect(() => {
    if (!s) {
      v("");
      return;
    }
    Ge(nn(`写作模型/${s}`)).then((q) => v(q.ok ? q.content : ""));
  }, [s]);
  async function G() {
    S(!0), k("");
    try {
      const q = await Pe("/api/model/generate", {});
      if (!q.started) {
        k(q.message || "发起失败"), S(!1);
        return;
      }
      k("建模中：正在读取结构库…");
      const te = await re();
      if (!te) {
        S(!1);
        return;
      }
      if (te.stage === "timeout") {
        k(te.message), S(!1);
        return;
      }
      k(jo(te.results || []) || te.message || ""), (te.results || []).some((J) => J.ok) && (mt.toast.show({ message: "写作模型已生成/更新", type: "success" }), ge());
    } catch (q) {
      k(`请求失败：${String(q?.message || q)}`);
    }
    S(!1);
  }
  async function me() {
    N(!0), k("");
    try {
      const q = await Pe("/api/model/generate-tactic", {});
      if (!q.started) {
        k(q.message || "发起失败"), N(!1);
        return;
      }
      const te = Date.now();
      for (; Date.now() - te < 1200 * 1e3; ) {
        await new Promise((g) => setTimeout(g, 4e3));
        const J = await Ge("/api/model/status").catch(() => null);
        if (!(!J || J.kind !== "tactic")) {
          if (J.running) {
            const g = J.progress || {};
            k(`战术建模中：${g.done ?? 0}/${g.total ?? "?"}　当前：${g.current || "…"}`);
          } else if (J.lastResult) {
            const g = J.lastResult;
            k(CE(g) || g.message || ""), (g.results || []).some((D) => D.ok) && (mt.toast.show({ message: "战术模型已生成/更新", type: "success" }), ge()), N(!1);
            return;
          }
        }
      }
      k("等待超时（20 分钟），任务可能仍在运行；稍后刷新查看结果。");
    } catch (q) {
      k(`请求失败：${String(q?.message || q)}`);
    }
    N(!1);
  }
  const [De, H] = L.useState(""), [M, ee] = L.useState("");
  async function j(q) {
    const te = [];
    for (const J of q) {
      const g = await Pe("/api/library/delete-file", { path: `写作模型/${J}` });
      te.push(g.ok ? `✓ ${J}` : `✗ ${J}：${g.message || "失败"}`);
    }
    k(`删除结果：${te.join("；")}`), d(""), ge();
  }
  const F = (q) => {
    let te = q;
    const J = /* @__PURE__ */ new Set();
    for (; p[te] && p[te] !== te && !J.has(te); )
      J.add(te), te = p[te];
    return te;
  };
  async function ae(q, te) {
    const J = await Pe("/api/library/rename-models", { from: q, to: te });
    if (!J.ok) {
      k(J.message || JSON.stringify(J));
      return;
    }
    const g = (J.moved || []).map((D) => (/-v(\d+)\.md$/.exec(D) || [])[1]).filter(Boolean);
    k(J.merged ? `已并入「${te}」家族：${q} → ${te}（${(J.moved || []).length} 个文件，接续为 ${g.map((D) => `v${D}`).join("、")}；目标原有版本未动）` : `已随归并改名：${q} → ${te}（${(J.moved || []).length} 个文件，版本保留）`), d(""), ge();
  }
  return /* @__PURE__ */ h.jsxs("div", { children: [
    /* @__PURE__ */ h.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ h.jsx(we, { variant: "primary", disabled: b || E, onClick: () => {
        G();
      }, children: b ? "建模中…" : "生成 / 更新写作模型" }),
      /* @__PURE__ */ h.jsx(we, { disabled: b || E, onClick: () => {
        me();
      }, children: E ? "战术建模中…" : "生成 / 更新战术模型" }),
      /* @__PURE__ */ h.jsx("span", { className: "hint", children: "两个按钮同理：样本 ≥2 才生成，再点得新版本（v+1，历史保留）。类型模型的样本看归并自与宣告篇，战术模型的样本看携带该标签的篇目。" }),
      /* @__PURE__ */ h.jsx("span", { className: "hint", children: "建模按类型或标签调用模型，样本多、篇幅长时 token 消耗较大。" })
    ] }),
    he && /* @__PURE__ */ h.jsx("pre", { className: "hint", children: he }),
    le === "preview" && s ? /* @__PURE__ */ h.jsxs("div", { className: "model-preview", children: [
      /* @__PURE__ */ h.jsxs("div", { className: "import-row", children: [
        /* @__PURE__ */ h.jsx(we, { onClick: () => Ee("list"), children: "← 返回列表" }),
        /* @__PURE__ */ h.jsxs("span", { className: "hint", children: [
          "正在查看：",
          s
        ] })
      ] }),
      ue ? /* @__PURE__ */ h.jsx(pg, { initial: m, savePath: `写作模型/${s}`, onSaved: (q) => {
        v(q), ye(!1), ge();
      } }) : /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
        /* @__PURE__ */ h.jsxs("div", { className: "import-row", children: [
          /* @__PURE__ */ h.jsx(we, { onClick: () => ye(!0), children: "编辑本模型" }),
          /* @__PURE__ */ h.jsx(we, { disabled: b || E, onClick: () => {
            if (M !== s) {
              ee(s);
              return;
            }
            ee(""), j([s]);
          }, children: M === s ? "再点一次确认删除" : "删除本版本" })
        ] }),
        /* @__PURE__ */ h.jsx(au, { md: m })
      ] })
    ] }) : pe.length ? /* @__PURE__ */ h.jsx(h.Fragment, { children: ["类型", "战术"].map((q) => {
      const te = pe.filter((g) => q === "战术" === g.type.startsWith("战术-"));
      if (!te.length) return null;
      const J = !V[q];
      return /* @__PURE__ */ h.jsxs("div", { className: "model-section", children: [
        /* @__PURE__ */ h.jsx("div", { className: "import-row section-toggle", children: /* @__PURE__ */ h.jsxs(we, { onClick: () => I((g) => ({ ...g, [q]: !g[q] })), children: [
          J ? "收起" : "展开",
          " ",
          q,
          "模型（",
          te.length,
          " 组）"
        ] }) }),
        J && te.map((g) => {
          const D = g.type.startsWith("战术-") ? g.type.slice(2) : g.type, P = F(D), $ = P !== D, ce = g.type.startsWith("战术-") ? `战术-${P}` : P;
          return /* @__PURE__ */ h.jsxs("div", { className: "model-group", children: [
            /* @__PURE__ */ h.jsxs("div", { className: "model-group-head", children: [
              $ && /* @__PURE__ */ h.jsx("span", { className: "badge", children: "已并入" }),
              /* @__PURE__ */ h.jsx("span", { className: "model-grouptitle", children: $ ? `${g.type} → ${P}` : g.type }),
              /* @__PURE__ */ h.jsxs(
                "button",
                {
                  className: s === g.latest.file ? "filebtn on" : "filebtn",
                  onClick: () => {
                    d(g.latest.file), Ee("preview");
                  },
                  children: [
                    "v",
                    g.latest.v,
                    "（最新）"
                  ]
                }
              ),
              g.history.length > 0 && /* @__PURE__ */ h.jsx("button", { className: "linkbtn", onClick: () => ne((de) => ({ ...de, [g.type]: !de[g.type] })), children: ie[g.type] ? "收起历史" : `历史 ${g.history.length} 版` }),
              $ && /* @__PURE__ */ h.jsx("button", { className: "linkbtn", onClick: () => {
                if (A !== g.type) {
                  x(g.type);
                  return;
                }
                x(""), ae(g.type, ce);
              }, children: A === g.type ? `再点一次确认改名为 ${ce}` : "随归并改名" }),
              /* @__PURE__ */ h.jsx("button", { className: "linkbtn", onClick: () => {
                if (De !== g.type) {
                  H(g.type);
                  return;
                }
                H(""), j([g.latest.file, ...g.history.map((de) => de.file)]);
              }, children: De === g.type ? "再点一次确认删除整组" : "删除" })
            ] }),
            ie[g.type] && /* @__PURE__ */ h.jsx("div", { className: "filebtns", children: g.history.map((de) => /* @__PURE__ */ h.jsxs("button", { className: s === de.file ? "filebtn on" : "filebtn", onClick: () => {
              d(de.file), Ee("preview");
            }, children: [
              "v",
              de.v
            ] }, de.file)) })
          ] }, g.type);
        })
      ] }, q);
    }) }) : /* @__PURE__ */ h.jsx(tl, { title: "暂无写作模型", description: "点上方按钮归纳生成；样本不足或样本未变的类型会跳过并说明。" })
  ] });
}
function jE() {
  const [u, r] = L.useState(""), [o, s] = L.useState([]), [d, m] = L.useState(null), [v, b] = L.useState("");
  async function S() {
    if (!u.trim()) return;
    const E = await Ge(`/api/search?query=${encodeURIComponent(u.trim())}`);
    s(E.ok ? E.results : []), m(null);
  }
  return L.useEffect(() => {
    if (!d) {
      b("");
      return;
    }
    Ge(nn(d.path)).then((E) => b(E.ok ? E.content : "读取失败"));
  }, [d]), /* @__PURE__ */ h.jsxs("div", { children: [
    /* @__PURE__ */ h.jsx("p", { className: "hint", children: "按关键词物理命中排序帮你收窄候选，取舍仍由你判断；引用时带篇目位置与原文引文。" }),
    /* @__PURE__ */ h.jsxs("div", { className: "searchbar", children: [
      /* @__PURE__ */ h.jsx(
        Rt,
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
      /* @__PURE__ */ h.jsx(we, { variant: "primary", onClick: () => {
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
        d?.path !== E.path && E.hits?.slice(0, 2).map((N, p) => /* @__PURE__ */ h.jsxs("div", { className: "hitline", children: [
          "L",
          N.line,
          ": ",
          N.excerpt,
          N.text
        ] }, p))
      ] }, E.path)),
      !o.length && /* @__PURE__ */ h.jsx("p", { className: "hint", children: "输入关键词后搜索；结果按命中度排序，点击标题展开全文。" })
    ] }),
    d && /* @__PURE__ */ h.jsxs("div", { className: "searchpreview", children: [
      /* @__PURE__ */ h.jsx("h4", { children: d.title }),
      /* @__PURE__ */ h.jsx(au, { md: v })
    ] })
  ] });
}
function DE() {
  const [u, r] = L.useState(""), [o, s] = L.useState(""), [d, m] = L.useState("2"), [v, b] = L.useState("");
  L.useEffect(() => {
    Ge("/api/config").then((E) => {
      E.ok && E.config ? (r((E.config.markers || []).join("、")), s(E.config.libraryPath || ""), m(String(E.config.maxPerRun ?? 2))) : b(E.message || "配置读取失败");
    });
  }, []);
  async function S() {
    b("保存中…");
    const E = await Pe("/api/config", {
      markers: u.split(/[\s、，,;；]+/).map((N) => N.trim()).filter(Boolean),
      libraryPath: o.trim(),
      maxPerRun: Number(d) || 2
    });
    b(E.ok ? "已保存" : `保存失败：${E.message || "未知错误"}`);
  }
  return /* @__PURE__ */ h.jsxs("div", { className: "settings", children: [
    /* @__PURE__ */ h.jsx("p", { className: "hint", children: "会话名命中标定词才会收到结构推荐；标定词留空 = 全静默，不向任何会话推送。" }),
    /* @__PURE__ */ h.jsx(
      Rt,
      {
        label: "会话标定词（、或逗号分隔，含任一即放行）",
        value: u,
        onChange: (E) => r(E.currentTarget.value),
        placeholder: "例：构成性、论文、写作"
      }
    ),
    /* @__PURE__ */ h.jsx(
      Rt,
      {
        label: "结构库路径（留空用默认；改后重启 Hana 生效）",
        value: o,
        onChange: (E) => s(E.currentTarget.value),
        placeholder: "默认：workspace 写作模型插件/结构库"
      }
    ),
    /* @__PURE__ */ h.jsx(
      Rt,
      {
        label: "单次推荐上限（1-2，设计上限 2）",
        value: d,
        onChange: (E) => m(E.currentTarget.value)
      }
    ),
    /* @__PURE__ */ h.jsxs("div", { className: "saverow", children: [
      /* @__PURE__ */ h.jsx(we, { variant: "primary", onClick: () => {
        S();
      }, children: "保存" }),
      v && /* @__PURE__ */ h.jsx("span", { className: "savehint", children: v })
    ] }),
    /* @__PURE__ */ h.jsx("p", { className: "hint", children: "命中判定：标定词过闸后，取最近对话文本与标签库/类型库做字典交集，交集词走共用检索层出候选；候选只附命中事实，采纳与否由会话内模型判断。同会话已注入条目不重复推。" })
  ] });
}
function UE({ onDone: u }) {
  const [r, o] = L.useState(""), [s, d] = L.useState(!1), [m, v] = L.useState(null), [b, S] = L.useState(!1), [E, N] = L.useState(!1);
  L.useEffect(() => {
    let x = !1;
    return (async () => {
      const V = await Ge("/api/import/status").catch(() => null);
      if (x || !V || !V.running) return;
      d(!0), v({ ok: !0, stage: "running", message: "拆解进行中（接管切页前的任务）…" });
      const I = await Mo();
      x || (v(I), I.ok ? (mt.toast.show({ message: "拆解完成，已入库", type: "success" }), u()) : I.alreadyExists ? (mt.toast.show({ message: "篇目已在库中，未重复导入", type: "success" }), u()) : I.failureTs && (mt.toast.show({ message: "拆解失败，已记入待办", type: "error" }), u()), d(!1));
    })(), () => {
      x = !0;
    };
  }, []);
  async function p(x, V) {
    d(!0), v(null);
    try {
      const I = await Pe("/api/import/enqueue", { items: [x] });
      I && I.ok ? (v({ ok: !0, stage: "queued", message: `已入队：${V}（队列串行执行，进度看下方「导入队列」）` }), mt.toast.show({ message: `已入队 ${I.queued} 篇，队列开始执行`, type: "success" }), u()) : v({ ok: !1, stage: "input", message: I?.message || "入队失败" });
    } catch (I) {
      v({ ok: !1, stage: "network", message: String(I?.message || I) });
    }
    d(!1);
  }
  async function B(x) {
    const V = String(x || "").trim();
    if (!V) {
      v({ ok: !1, stage: "input", message: "请先粘贴文献全文，或选择 / 拖入 md、txt、pdf 文件" });
      return;
    }
    const le = (V.split(`
`)[0] || "").replace(/^#+\s*/, "").trim().slice(0, 30) || "粘贴文献";
    await p({ label: le, text: V, source: "paste" }, le);
  }
  async function A(x) {
    if (/\.pdf$/i.test(x.name)) {
      if (x.size > 50 * 1024 * 1024) {
        v({ ok: !1, stage: "input", message: "PDF 超过 50 MB 上限" });
        return;
      }
      try {
        const V = await new Promise((I, le) => {
          const Ee = new FileReader();
          Ee.onload = () => I(String(Ee.result).split(",")[1] || ""), Ee.onerror = () => le(new Error("文件读取失败")), Ee.readAsDataURL(x);
        });
        await p({ label: x.name, pdfBase64: V, source: "file" }, x.name);
      } catch (V) {
        v({ ok: !1, stage: "input", message: String(V?.message || V) });
      }
      return;
    }
    if (!/\.(md|txt)$/i.test(x.name)) {
      v({ ok: !1, stage: "input", message: "支持 md / txt / pdf 文件" });
      return;
    }
    await p({ label: x.name, text: await x.text(), source: "file" }, x.name);
  }
  return /* @__PURE__ */ h.jsxs("div", { className: "import-zone", children: [
    /* @__PURE__ */ h.jsx("h4", { className: "import-title", children: "导入文献" }),
    /* @__PURE__ */ h.jsxs(
      "div",
      {
        className: b ? "drop on" : "drop",
        onDragOver: (x) => {
          x.preventDefault(), S(!0);
        },
        onDragLeave: () => S(!1),
        onDrop: (x) => {
          x.preventDefault(), S(!1);
          const V = x.dataTransfer.files?.[0];
          V && A(V);
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
                  const V = x.target.files?.[0];
                  x.target.value = "", V && A(V);
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
    E && /* @__PURE__ */ h.jsx(HE, {}),
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
      /* @__PURE__ */ h.jsx(we, { variant: "primary", disabled: s || !r.trim(), onClick: () => {
        B(r);
      }, children: "加入队列并开始" }),
      s && /* @__PURE__ */ h.jsx("span", { className: "hint", children: "正在入队…" })
    ] }),
    m && /* @__PURE__ */ h.jsx("pre", { className: m.ok || m.alreadyExists ? "ok" : "err", children: m.alreadyExists ? `${m.message || "篇目已在库中（id 三要素相同视为同一篇），未重复导入。"}` : m.ok ? m.stage === "running" ? `${m.message || "拆解进行中…"}` : m.stage === "queued" ? m.message : `已入库：${m.file}（第 ${m.attempts} 次通过${m.tagsAdded?.length ? `，新增标签 ${m.tagsAdded.join("、")}` : ""}）` + (m.pdfEngine ? `
PDF 引擎：${m.pdfEngine === "pymupdf" ? "PyMuPDF" : "unpdf（回退）—— 安装 PyMuPDF 可启用更稳的主引擎：python -m pip install pymupdf"}` : "") : `${m.message || "拆解失败"}${m.errors?.length ? `
` + m.errors.slice(0, 6).map((x) => `· ${x.field}：${x.message}`).join(`
`) : ""}${m.failureTs ? `
（已记入待办，可到「待办 · 导入失败」重试）` : ""}` }),
    /* @__PURE__ */ h.jsx(ME, {})
  ] });
}
const zE = {
  pending: "排队",
  running: "运行中",
  stopping: "停止中",
  done: "✓ 完成",
  failed: "✗ 失败",
  cancelled: "■ 已停止"
};
function gg({ nodes: u, active: r, onPick: o, depth: s = 0 }) {
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
    d.children.length > 0 && /* @__PURE__ */ h.jsx(gg, { nodes: d.children, active: r, onPick: o, depth: s + 1 })
  ] }, d.key)) });
}
function ME() {
  const [u, r] = L.useState([]), [o, s] = L.useState(null), [d, m] = L.useState(""), [v, b] = L.useState(null);
  L.useEffect(() => {
    let A = !0;
    const x = () => {
      Ge("/api/import/queue").then((I) => {
        A && I && I.ok && (r(I.items || []), s(I));
      }).catch(() => {
      });
    };
    x();
    const V = setInterval(x, 3e3);
    return () => {
      A = !1, clearInterval(V);
    };
  }, []);
  async function S() {
    const A = await Ge("/api/import/queue").catch(() => null);
    A && A.ok && (r(A.items || []), s(A));
  }
  async function E(A, x, V = {}) {
    const I = await Pe("/api/import/queue-action", x !== void 0 ? { action: A, key: x, ...V } : { action: A });
    return I && I.ok ? (s(I.snapshot), S(), !0) : (m(I?.message || "操作失败"), !1);
  }
  function N(A) {
    const x = v;
    b(null), !(x === null || x === A) && E("reorder", x, { before: A });
  }
  const p = o?.total ?? u.length, B = (o?.done ?? 0) + (o?.failed ?? 0) + (o?.cancelled ?? 0);
  return /* @__PURE__ */ h.jsxs("div", { className: "queuebox", children: [
    /* @__PURE__ */ h.jsxs("div", { className: "qhead", children: [
      /* @__PURE__ */ h.jsx("b", { children: "导入队列" }),
      /* @__PURE__ */ h.jsx("span", { className: "hint", children: p ? `${B}/${p} 完成 · 运行 ${(o?.running ?? 0) + (o?.stopping ?? 0)} · 排队 ${o?.pending ?? 0}${o?.paused ? " · 已暂停" : ""}` : "队列为空" }),
      /* @__PURE__ */ h.jsxs("span", { className: "qhead-actions", children: [
        /* @__PURE__ */ h.jsx(we, { disabled: !o || p === 0, onClick: () => {
          E(o?.paused ? "resume" : "pause");
        }, children: o?.paused ? "继续" : "暂停" }),
        /* @__PURE__ */ h.jsx(we, { disabled: !o || (o?.done ?? 0) + (o?.cancelled ?? 0) === 0, onClick: () => {
          E("clear-done");
        }, children: "清理已完成" })
      ] })
    ] }),
    d && /* @__PURE__ */ h.jsx("p", { className: "hint", children: d }),
    u.length === 0 ? /* @__PURE__ */ h.jsx("p", { className: "hint", children: "拖入文件、粘贴全文或从 Zotero 加入后，条目在这里串行拆解；支持单篇停止/开始与拖拽排序。" }) : /* @__PURE__ */ h.jsx("div", { className: "qlist", children: u.map((A) => /* @__PURE__ */ h.jsxs(
      "div",
      {
        className: v === A.key ? "qrow dragging" : "qrow",
        draggable: A.status === "pending",
        onDragStart: () => b(A.key),
        onDragOver: (x) => x.preventDefault(),
        onDrop: () => N(A.key),
        onDragEnd: () => b(null),
        children: [
          /* @__PURE__ */ h.jsx("span", { className: "qhandle", title: "拖拽排序（仅排队中）", children: "☰" }),
          /* @__PURE__ */ h.jsx("span", { className: "qstatus", children: zE[A.status] || A.status }),
          /* @__PURE__ */ h.jsx("span", { className: "qlabel", title: A.message || A.file || "", children: A.label }),
          (A.status === "pending" || A.status === "running") && /* @__PURE__ */ h.jsx(we, { onClick: () => {
            E("cancel", A.key);
          }, children: "停止" }),
          A.status === "stopping" && /* @__PURE__ */ h.jsx("span", { className: "hint", children: "停止中…" }),
          (A.status === "cancelled" || A.status === "failed") && /* @__PURE__ */ h.jsx(we, { onClick: () => {
            E("start", A.key);
          }, children: "开始" }),
          A.status !== "running" && A.status !== "stopping" && /* @__PURE__ */ h.jsx(we, { onClick: () => {
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
function HE() {
  const [u, r] = L.useState([]), [o, s] = L.useState(null), [d, m] = L.useState([]), [v, b] = L.useState(""), [S, E] = L.useState("collection"), [N, p] = L.useState(null), [B, A] = L.useState(/* @__PURE__ */ new Set()), [x, V] = L.useState(""), [I, le] = L.useState(!1);
  L.useEffect(() => {
    Ge("/api/zotero/collections").then((re) => {
      re && re.ok ? r(re.collections || []) : V(re?.message || "分类读取失败（Zotero 桌面端在运行吗？）");
    }).catch(() => V("分类读取失败"));
  }, []);
  async function Ee(re, pe) {
    E("collection"), s(re), A(/* @__PURE__ */ new Set()), le(!0), V(`加载「${pe}」…`);
    try {
      const ge = await Ge(`/api/zotero/collection-items?key=${encodeURIComponent(re)}`);
      ge && ge.ok ? (m(ge.items || []), ge.truncated ? V(`该分类较大，列表显示前 ${ge.items.length} 条文献；更多可用搜索收窄`) : (ge.items || []).length ? V("") : V("该分类没有可导入的文献条目")) : V(ge?.message || "条目读取失败");
    } catch (ge) {
      V(String(ge?.message || ge));
    }
    le(!1);
  }
  async function he() {
    E("search"), s(null), A(/* @__PURE__ */ new Set()), le(!0), V("");
    try {
      const re = await Pe("/api/tool/zotero_search", { query: v, limit: 50 });
      re && Array.isArray(re.items) ? (p(re.items.map((pe) => ({
        key: pe.key,
        title: pe.title,
        authors: pe.creators,
        year: String(pe.date || "").slice(0, 4),
        itemType: pe.itemType
      }))), re.items.length || V("没有命中条目")) : V(re?.message || "Zotero 查询失败");
    } catch (re) {
      V(String(re?.message || re));
    }
    le(!1);
  }
  const k = S === "collection" ? d : N || [];
  function ie(re) {
    A((pe) => {
      const ge = new Set(pe);
      return ge.has(re) ? ge.delete(re) : ge.add(re), ge;
    });
  }
  function ne() {
    A((re) => re.size >= k.length && k.length > 0 ? /* @__PURE__ */ new Set() : new Set(k.map((pe) => pe.key)));
  }
  async function ue() {
    const re = k.filter((G) => B.has(G.key));
    if (!re.length) {
      V("先勾选条目");
      return;
    }
    le(!0);
    const pe = [], ge = [];
    for (let G = 0; G < re.length; G++) {
      const me = re[G];
      V(`解析附件 ${G + 1}/${re.length}…`);
      try {
        const De = await Pe("/api/tool/zotero_item", { key: me.key }), H = De && Array.isArray(De.attachments) && De.attachments[0] ? De.attachments[0] : null;
        if (!H) {
          ge.push(me.title || me.key);
          continue;
        }
        const M = await Pe("/api/tool/zotero_attachment_path", { attachmentKey: H.key || H });
        M && M.path ? pe.push({ label: me.title || me.key, pdfPath: String(M.path), source: `zotero:${me.key}` }) : ge.push(me.title || me.key);
      } catch {
        ge.push(me.title || me.key);
      }
    }
    if (pe.length) {
      const G = await Pe("/api/import/enqueue", { items: pe });
      G && G.ok ? (V(`已入队 ${G.queued} 篇${ge.length ? `；${ge.length} 篇缺附件未入队：${ge.slice(0, 2).join("、")}${ge.length > 2 ? "…" : ""}` : ""}`), A(/* @__PURE__ */ new Set()), mt.toast.show({ message: `已入队 ${G.queued} 篇，队列开始执行`, type: "success" })) : V(G?.message || "入队失败");
    } else
      V(`没有可入队条目${ge.length ? `（${ge.length} 篇缺附件）` : ""}`);
    le(!1);
  }
  async function ye(re) {
    le(!0);
    try {
      const pe = await Pe("/api/tool/zotero_item", { key: re }), ge = pe && Array.isArray(pe.attachments) && pe.attachments[0] ? pe.attachments[0] : null;
      if (!ge) {
        V("该条目无附件"), le(!1);
        return;
      }
      const G = await Pe("/api/tool/zotero_attachment_path", { attachmentKey: ge.key || ge });
      G && G.path ? (await mt.clipboard.writeText(String(G.path)), mt.toast.show({ message: "路径已复制", type: "success" })) : V(G?.message || "附件路径解析失败");
    } catch (pe) {
      V(String(pe?.message || pe));
    }
    le(!1);
  }
  return /* @__PURE__ */ h.jsxs("div", { className: "zbox", children: [
    /* @__PURE__ */ h.jsx("p", { className: "hint", children: "需 Zotero 桌面端运行，且设置 → 高级 → 勾选「Allow other applications on this computer to communicate with Zotero」。勾选后加入队列，串行拆解（并发 1，随时可停）。" }),
    /* @__PURE__ */ h.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ h.jsx(
        Rt,
        {
          label: "搜索（标题 / 作者 / 年份）",
          value: v,
          onChange: (re) => b(re.currentTarget.value),
          onKeyDown: (re) => {
            re.key === "Enter" && he();
          }
        }
      ),
      /* @__PURE__ */ h.jsx(we, { disabled: I, onClick: () => {
        he();
      }, children: "搜索" }),
      /* @__PURE__ */ h.jsxs(we, { variant: "primary", disabled: I || B.size === 0, onClick: () => {
        ue();
      }, children: [
        "加入队列（",
        B.size,
        "）"
      ] }),
      /* @__PURE__ */ h.jsx(we, { disabled: I || k.length === 0, onClick: ne, children: B.size >= k.length && k.length > 0 ? "取消全选" : "全选本页" })
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
        /* @__PURE__ */ h.jsx(gg, { nodes: u, active: o, onPick: (re, pe) => {
          Ee(re, pe);
        } })
      ] }),
      /* @__PURE__ */ h.jsxs("div", { className: "zlist zlistpick", children: [
        k.length === 0 && /* @__PURE__ */ h.jsx("p", { className: "hint", children: S === "collection" ? "选择左侧分类加载条目，或用搜索。" : "搜索无结果。" }),
        k.map((re) => /* @__PURE__ */ h.jsxs("label", { className: "zrow", children: [
          /* @__PURE__ */ h.jsx("input", { type: "checkbox", checked: B.has(re.key), onChange: () => ie(re.key) }),
          /* @__PURE__ */ h.jsxs("span", { className: "zrow-main", children: [
            /* @__PURE__ */ h.jsx("b", { children: re.title || "（无题名）" }),
            /* @__PURE__ */ h.jsx("span", { className: "hint", children: [re.authors, re.year].filter(Boolean).join(" · ") })
          ] }),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: "linkbtn",
              onClick: (pe) => {
                pe.preventDefault(), ye(re.key);
              },
              children: "路径"
            }
          )
        ] }, re.key))
      ] })
    ] })
  ] });
}
const Hp = "psm_use_notice_v1";
function qE({ stats: u, go: r, onDone: o }) {
  const s = u ? u.queuePending + u.failures : 0, [d, m] = L.useState(!1);
  L.useEffect(() => {
    try {
      m(!window.localStorage.getItem(Hp));
    } catch {
      m(!0);
    }
  }, []);
  const [v, b] = L.useState("loading");
  return L.useEffect(() => {
    Ge("/api/config").then((S) => {
      const E = S?.config?.libraryPath ?? "";
      b(E && !String(E).startsWith("NOT_CONFIGURED") ? "ok" : "unconfigured");
    }).catch(() => b("loading"));
  }, []), /* @__PURE__ */ h.jsxs("div", { className: "home", children: [
    /* @__PURE__ */ h.jsx("p", { className: "tagline", children: "把论文拆成可回溯的论证结构，沉淀为写作模型，写论文时检索取用。" }),
    v === "unconfigured" && /* @__PURE__ */ h.jsxs("div", { className: "home-banner", children: [
      "尚未配置结构库。到「设置」填写 libraryPath 并保存，模板会自动铺到该目录，无需手动拷贝。",
      /* @__PURE__ */ h.jsx(we, { onClick: () => r("settings"), children: "前往设置" })
    ] }),
    d && /* @__PURE__ */ h.jsxs("div", { className: "home-banner", children: [
      "仅处理你有权使用的文本；结构库保存在本机，不随插件分发，仅供个人学习与研究使用。",
      /* @__PURE__ */ h.jsx(we, { onClick: () => {
        m(!1);
        try {
          window.localStorage.setItem(Hp, "1");
        } catch {
        }
      }, children: "我知道了" })
    ] }),
    /* @__PURE__ */ h.jsxs("ol", { className: "steps", children: [
      /* @__PURE__ */ h.jsx("li", { children: "把文献拖进面板一键拆解，或在对话里让我拆" }),
      /* @__PURE__ */ h.jsx("li", { children: "库里提出的疑问到「待办」处理，保证每条引文可回溯" }),
      /* @__PURE__ */ h.jsx("li", { children: "写论文时到「取用」检索同类模型，按出处引用" })
    ] }),
    /* @__PURE__ */ h.jsxs("div", { className: "home-actions", children: [
      /* @__PURE__ */ h.jsx(we, { variant: "primary", onClick: () => r("use"), children: "去取用" }),
      /* @__PURE__ */ h.jsx(we, { onClick: () => r("library"), children: "看结构库" }),
      /* @__PURE__ */ h.jsx(we, { disabled: !u || s === 0, onClick: () => r("todo"), children: s > 0 ? `处理待办（${s}）` : "暂无待办" })
    ] }),
    /* @__PURE__ */ h.jsx("div", { className: "statusbar", children: u ? `库内 ${u.papers} 篇目 · ${u.models} 模型 · 待办 ${s} 条` : "统计中…" }),
    /* @__PURE__ */ h.jsx(UE, { onDone: o })
  ] });
}
function LE({ tick: u, bump: r }) {
  const [o, s] = L.useState([]), [d, m] = L.useState(null), [v, b] = L.useState(""), S = L.useCallback(async () => {
    const p = await Ge("/api/import/failures").catch(() => ({ items: [] }));
    s(p.items || []);
  }, []);
  L.useEffect(() => {
    S();
  }, [S, u]), L.useEffect(() => {
    let p = !1;
    return (async () => {
      const B = await Ge("/api/import/status").catch(() => null);
      if (p || !B || !B.running) return;
      b("有导入任务进行中，等待结果…");
      const A = await Mo();
      p || (b(A.ok ? `完成：${A.file}` : `仍失败：${A.message || "未知错误"}${A.failureTs ? "（已刷新记录）" : ""}`), (A.ok || A.failureTs) && (await S(), r()));
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
      const A = { text: p.text, fromTs: p.ts, filename: p.source };
      p.pdfPath && (A.pdfPath = p.pdfPath);
      const x = await Pe("/api/import", A);
      if (x.alreadyExists)
        b(`已在库中，未重复导入${x.id ? `：${x.id}` : ""}；待办记录已清除`), mt.toast.show({ message: "篇目已在库中，未重复导入", type: "success" });
      else if (x.started) {
        b("重试中（约 1-3 分钟，可离开本页）…");
        const V = await Mo();
        V.ok ? (b(`重试成功：${V.file}`), mt.toast.show({ message: "重试成功，已入库", type: "success" })) : V.alreadyExists ? (b(`已在库中，未重复导入${V.id ? `：${V.id}` : ""}；待办记录已清除`), mt.toast.show({ message: "篇目已在库中，未重复导入", type: "success" })) : b(`仍失败：${V.message || "未知错误"}${V.failureTs ? "（已刷新记录）" : ""}`);
      } else x.ok ? (b(`重试成功：${x.file}`), mt.toast.show({ message: "重试成功，已入库", type: "success" })) : b(`仍失败：${x.message || "未知错误"}`);
    } catch (A) {
      b(`请求失败：${String(A?.message || A)}`);
    }
    m(null), await S(), r();
  }
  async function N(p) {
    await Pe("/api/import/failures/dismiss", { ts: p.ts }).catch(() => null), await S(), r();
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
    o.map((p) => /* @__PURE__ */ h.jsxs("div", { className: "fail-item", children: [
      /* @__PURE__ */ h.jsxs("div", { className: "fail-head", children: [
        /* @__PURE__ */ h.jsx("b", { children: p.title || p.source || "（未识别条目）" }),
        (p.authors || p.year) && /* @__PURE__ */ h.jsx("span", { className: "hint", children: [p.authors, p.year].filter(Boolean).join(" · ") }),
        /* @__PURE__ */ h.jsx("span", { className: "badge", children: p.stage }),
        /* @__PURE__ */ h.jsxs("span", { className: "hint", children: [
          new Date(p.ts).toLocaleString(),
          " · 尝试 ",
          p.attempts,
          " 次 · ",
          (p.text || "").length,
          " 字"
        ] })
      ] }),
      p.id && /* @__PURE__ */ h.jsxs("div", { className: "hint", children: [
        "id：",
        p.id
      ] }),
      p.stage === "pdf_extract" && /* @__PURE__ */ h.jsx("div", { className: "hint", children: p.needsFile ? "PDF 提取失败；原文件未随记录保留，重试需把文件重新拖入" : "PDF 提取失败；可重试或换带文字层的版本" }),
      /* @__PURE__ */ h.jsx("div", { className: "fail-msg", children: p.message }),
      (p.errors || []).slice(0, 4).map((B, A) => /* @__PURE__ */ h.jsxs("div", { className: "hint", children: [
        "· ",
        B.field,
        "：",
        B.message
      ] }, A)),
      /* @__PURE__ */ h.jsxs("div", { className: "fail-actions", children: [
        /* @__PURE__ */ h.jsx(we, { variant: "primary", disabled: d === p.ts, onClick: () => {
          E(p);
        }, children: d === p.ts ? "重试中…" : "重试" }),
        /* @__PURE__ */ h.jsx(we, { disabled: d === p.ts, onClick: () => {
          N(p);
        }, children: "移除" })
      ] })
    ] }, p.ts)),
    v && /* @__PURE__ */ h.jsx("p", { className: v.startsWith("重试成功") || v.startsWith("已在库中") ? "ok" : "err", children: v })
  ] }) : /* @__PURE__ */ h.jsx(tl, { title: "暂无导入失败", description: "导入拆解失败的文献会落在这里，可原样重试。" });
}
function IE() {
  const u = document.getElementById("root")?.dataset.surface || "page", [r, o] = L.useState("home"), [s, d] = L.useState({
    home: "",
    use: "search",
    library: "browse",
    todo: "score",
    settings: ""
  }), [m, v] = L.useState(0), [b, S] = L.useState(null), E = L.useCallback(() => v((x) => x + 1), []), N = L.useCallback((x) => o(x), []);
  L.useEffect(() => {
    mt.ready(), mt.ui.resize({ height: u === "widget" ? 420 : 760 });
  }, [u]), L.useEffect(() => {
    let x = !0;
    return bE().then((V) => {
      x && S(V);
    }).catch(() => {
      x && S(null);
    }), () => {
      x = !1;
    };
  }, [m, r]);
  const p = s[r], B = L.useMemo(() => {
    switch (r) {
      case "home":
        return /* @__PURE__ */ h.jsx(qE, { stats: b, go: N, onDone: E });
      case "use":
        return p === "models" ? /* @__PURE__ */ h.jsx(RE, { tick: m }) : /* @__PURE__ */ h.jsx(jE, {});
      case "library":
        return p === "compare" ? /* @__PURE__ */ h.jsx(wE, { tick: m }) : p === "board" ? /* @__PURE__ */ h.jsx(OE, { tick: m }) : /* @__PURE__ */ h.jsx(_E, { tick: m });
      case "todo":
        return p === "queue" ? /* @__PURE__ */ h.jsx(AE, { tick: m, onChanged: E }) : p === "types" ? /* @__PURE__ */ h.jsx(NE, { tick: m, onChanged: E }) : p === "import-fail" ? /* @__PURE__ */ h.jsx(LE, { tick: m, bump: E }) : /* @__PURE__ */ h.jsx(EE, {});
      case "settings":
        return /* @__PURE__ */ h.jsx(DE, {});
    }
  }, [r, p, m, b, N, E]), A = b ? b.queuePending + b.failures : 0;
  return /* @__PURE__ */ h.jsx(dE, { mode: "inherit", className: "plugin-panel", children: /* @__PURE__ */ h.jsxs(
    Mn,
    {
      title: "论文结构建模",
      description: "把论文拆成可回溯的论证结构，沉淀为写作模型，写论文时检索取用。",
      actions: /* @__PURE__ */ h.jsx(we, { variant: "ghost", onClick: E, children: "刷新" }),
      children: [
        /* @__PURE__ */ h.jsx("nav", { className: "tabs zones", children: pE.map((x) => /* @__PURE__ */ h.jsxs("button", { className: r === x.id ? "tab on" : "tab", onClick: () => o(x.id), children: [
          x.label,
          x.id === "todo" && A > 0 && /* @__PURE__ */ h.jsx("span", { className: "nav-badge", children: A })
        ] }, x.id)) }),
        r !== "home" && r !== "settings" && /* @__PURE__ */ h.jsx("nav", { className: "tabs sub", children: gE[r].map((x) => /* @__PURE__ */ h.jsxs(
          "button",
          {
            className: p === x.id ? "tab on" : "tab",
            onClick: () => d((V) => ({ ...V, [r]: x.id })),
            children: [
              x.label,
              r === "todo" && x.id === "import-fail" && (b?.failures ?? 0) > 0 && /* @__PURE__ */ h.jsx("span", { className: "nav-badge", children: b?.failures ?? 0 }),
              r === "todo" && x.id === "queue" && (b?.queuePending ?? 0) > 0 && /* @__PURE__ */ h.jsx("span", { className: "nav-badge", children: b?.queuePending ?? 0 })
            ]
          },
          x.id
        )) }),
        /* @__PURE__ */ h.jsx("div", { className: "tab-body", children: B })
      ]
    }
  ) });
}
const qp = document.getElementById("root");
qp && E0.createRoot(qp).render(/* @__PURE__ */ h.jsx(IE, {}));
