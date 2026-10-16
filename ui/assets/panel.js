var vo = { exports: {} }, ki = {};
var op;
function o0() {
  if (op) return ki;
  op = 1;
  var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function o(s, d, m) {
    var g = null;
    if (m !== void 0 && (g = "" + m), d.key !== void 0 && (g = "" + d.key), "key" in d) {
      m = {};
      for (var y in d)
        y !== "key" && (m[y] = d[y]);
    } else m = d;
    return d = m.ref, {
      $$typeof: u,
      type: s,
      key: g,
      ref: d !== void 0 ? d : null,
      props: m
    };
  }
  return ki.Fragment = r, ki.jsx = o, ki.jsxs = o, ki;
}
var fp;
function f0() {
  return fp || (fp = 1, vo.exports = o0()), vo.exports;
}
var h = f0(), yo = { exports: {} }, xe = {};
var dp;
function d0() {
  if (dp) return xe;
  dp = 1;
  var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), s = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), m = /* @__PURE__ */ Symbol.for("react.consumer"), g = /* @__PURE__ */ Symbol.for("react.context"), y = /* @__PURE__ */ Symbol.for("react.forward_ref"), S = /* @__PURE__ */ Symbol.for("react.suspense"), b = /* @__PURE__ */ Symbol.for("react.memo"), N = /* @__PURE__ */ Symbol.for("react.lazy"), p = /* @__PURE__ */ Symbol.for("react.activity"), I = /* @__PURE__ */ Symbol.for("react.view_transition"), A = Symbol.iterator;
  function x(E) {
    return E === null || typeof E != "object" ? null : (E = A && E[A] || E["@@iterator"], typeof E == "function" ? E : null);
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
  }, L = Object.assign, le = {};
  function ye(E, z, W) {
    this.props = E, this.context = z, this.refs = le, this.updater = W || V;
  }
  ye.prototype.isReactComponent = {}, ye.prototype.setState = function(E, z) {
    if (typeof E != "object" && typeof E != "function" && E != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, E, z, "setState");
  }, ye.prototype.forceUpdate = function(E) {
    this.updater.enqueueForceUpdate(this, E, "forceUpdate");
  };
  function he() {
  }
  he.prototype = ye.prototype;
  function Z(E, z, W) {
    this.props = E, this.context = z, this.refs = le, this.updater = W || V;
  }
  var ue = Z.prototype = new he();
  ue.constructor = Z, L(ue, ye.prototype), ue.isPureReactComponent = !0;
  var ne = Array.isArray;
  function re() {
  }
  var ge = { H: null, A: null, T: null, S: null }, se = Object.prototype.hasOwnProperty;
  function oe(E, z, W) {
    var P = W.ref;
    return {
      $$typeof: u,
      type: E,
      key: z,
      ref: P !== void 0 ? P : null,
      props: W
    };
  }
  function Se(E, z) {
    return oe(E.type, z, E.props);
  }
  function G(E) {
    return typeof E == "object" && E !== null && E.$$typeof === u;
  }
  function me(E) {
    var z = { "=": "=0", ":": "=2" };
    return "$" + E.replace(/[=:]/g, function(W) {
      return z[W];
    });
  }
  var De = /\/+/g;
  function H(E, z) {
    return typeof E == "object" && E !== null && E.key != null ? me("" + E.key) : z.toString(36);
  }
  function M(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (typeof E.status == "string" ? E.then(re, re) : (E.status = "pending", E.then(
          function(z) {
            E.status === "pending" && (E.status = "fulfilled", E.value = z);
          },
          function(z) {
            E.status === "pending" && (E.status = "rejected", E.reason = z);
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
  function te(E, z, W, P, ie) {
    var be = typeof E;
    (be === "undefined" || be === "boolean") && (E = null);
    var fe = !1;
    if (E === null) fe = !0;
    else
      switch (be) {
        case "bigint":
        case "string":
        case "number":
          fe = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case u:
            case r:
              fe = !0;
              break;
            case N:
              return fe = E._init, te(
                fe(E._payload),
                z,
                W,
                P,
                ie
              );
          }
      }
    if (fe)
      return ie = ie(E), fe = P === "" ? "." + H(E, 0) : P, ne(ie) ? (W = "", fe != null && (W = fe.replace(De, "$&/") + "/"), te(ie, z, W, "", function(We) {
        return We;
      })) : ie != null && (G(ie) && (ie = Se(
        ie,
        W + (ie.key == null || E && E.key === ie.key ? "" : ("" + ie.key).replace(
          De,
          "$&/"
        ) + "/") + fe
      )), z.push(ie)), 1;
    fe = 0;
    var ee = P === "" ? "." : P + ":";
    if (ne(E))
      for (var de = 0; de < E.length; de++)
        P = E[de], be = ee + H(P, de), fe += te(
          P,
          z,
          W,
          be,
          ie
        );
    else if (de = x(E), typeof de == "function")
      for (E = de.call(E), de = 0; !(P = E.next()).done; )
        P = P.value, be = ee + H(P, de++), fe += te(
          P,
          z,
          W,
          be,
          ie
        );
    else if (be === "object") {
      if (typeof E.then == "function")
        return te(
          M(E),
          z,
          W,
          P,
          ie
        );
      throw z = String(E), Error(
        "Objects are not valid as a React child (found: " + (z === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : z) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return fe;
  }
  function j(E, z, W) {
    if (E == null) return E;
    var P = [], ie = 0;
    return te(E, P, "", "", function(be) {
      return z.call(W, be, ie++);
    }), P;
  }
  function F(E) {
    if (E._status === -1) {
      var z = E._result, W = z();
      W.then(
        function(P) {
          (E._status === 0 || E._status === -1) && (E._status = 1, E._result = P, W.status === void 0 && (W.status = "fulfilled", W.value = P));
        },
        function(P) {
          (E._status === 0 || E._status === -1) && (E._status = 2, E._result = P, W.status === void 0 && (W.status = "rejected", W.reason = P));
        }
      ), E._status === -1 && (E._status = 0, E._result = W);
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var B = typeof reportError == "function" ? reportError : function(E) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var z = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof E == "object" && E !== null && typeof E.message == "string" ? String(E.message) : String(E),
        error: E
      });
      if (!window.dispatchEvent(z)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", E);
      return;
    }
    console.error(E);
  };
  function X(E) {
    var z = ge.T, W = {};
    W.types = z !== null ? z.types : null, ge.T = W;
    try {
      var P = E(), ie = ge.S;
      ie !== null && ie(W, P), typeof P == "object" && P !== null && typeof P.then == "function" && P.then(re, B);
    } catch (be) {
      B(be);
    } finally {
      z !== null && W.types !== null && (z.types = W.types), ge.T = z;
    }
  }
  function ae(E) {
    var z = ge.T;
    if (z !== null) {
      var W = z.types;
      W === null ? z.types = [E] : W.indexOf(E) === -1 && W.push(E);
    } else X(ae.bind(null, E));
  }
  var $ = {
    map: j,
    forEach: function(E, z, W) {
      j(
        E,
        function() {
          z.apply(this, arguments);
        },
        W
      );
    },
    count: function(E) {
      var z = 0;
      return j(E, function() {
        z++;
      }), z;
    },
    toArray: function(E) {
      return j(E, function(z) {
        return z;
      }) || [];
    },
    only: function(E) {
      if (!G(E))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return E;
    }
  };
  return xe.Activity = p, xe.Children = $, xe.Component = ye, xe.Fragment = o, xe.Profiler = d, xe.PureComponent = Z, xe.StrictMode = s, xe.Suspense = S, xe.ViewTransition = I, xe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ge, xe.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(E) {
      return ge.H.useMemoCache(E);
    }
  }, xe.addTransitionType = ae, xe.cache = function(E) {
    return function() {
      return E.apply(null, arguments);
    };
  }, xe.cacheSignal = function() {
    return null;
  }, xe.cloneElement = function(E, z, W) {
    if (E == null)
      throw Error(
        "The argument must be a React element, but you passed " + E + "."
      );
    var P = L({}, E.props), ie = E.key;
    if (z != null)
      for (be in z.key !== void 0 && (ie = "" + z.key), z)
        !se.call(z, be) || be === "key" || be === "__self" || be === "__source" || be === "ref" && z.ref === void 0 || (P[be] = z[be]);
    var be = arguments.length - 2;
    if (be === 1) P.children = W;
    else if (1 < be) {
      for (var fe = Array(be), ee = 0; ee < be; ee++)
        fe[ee] = arguments[ee + 2];
      P.children = fe;
    }
    return oe(E.type, ie, P);
  }, xe.createContext = function(E) {
    return E = {
      $$typeof: g,
      _currentValue: E,
      _currentValue2: E,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, E.Provider = E, E.Consumer = {
      $$typeof: m,
      _context: E
    }, E;
  }, xe.createElement = function(E, z, W) {
    var P, ie = {}, be = null;
    if (z != null)
      for (P in z.key !== void 0 && (be = "" + z.key), z)
        se.call(z, P) && P !== "key" && P !== "__self" && P !== "__source" && (ie[P] = z[P]);
    var fe = arguments.length - 2;
    if (fe === 1) ie.children = W;
    else if (1 < fe) {
      for (var ee = Array(fe), de = 0; de < fe; de++)
        ee[de] = arguments[de + 2];
      ie.children = ee;
    }
    if (E && E.defaultProps)
      for (P in fe = E.defaultProps, fe)
        ie[P] === void 0 && (ie[P] = fe[P]);
    return oe(E, be, ie);
  }, xe.createRef = function() {
    return { current: null };
  }, xe.forwardRef = function(E) {
    return { $$typeof: y, render: E };
  }, xe.isValidElement = G, xe.lazy = function(E) {
    return {
      $$typeof: N,
      _payload: { _status: -1, _result: E },
      _init: F
    };
  }, xe.memo = function(E, z) {
    return {
      $$typeof: b,
      type: E,
      compare: z === void 0 ? null : z
    };
  }, xe.startTransition = X, xe.unstable_useCacheRefresh = function() {
    return ge.H.useCacheRefresh();
  }, xe.use = function(E) {
    return ge.H.use(E);
  }, xe.useActionState = function(E, z, W) {
    return ge.H.useActionState(E, z, W);
  }, xe.useCallback = function(E, z) {
    return ge.H.useCallback(E, z);
  }, xe.useContext = function(E) {
    return ge.H.useContext(E);
  }, xe.useDebugValue = function() {
  }, xe.useDeferredValue = function(E, z) {
    return ge.H.useDeferredValue(E, z);
  }, xe.useEffect = function(E, z) {
    return ge.H.useEffect(E, z);
  }, xe.useEffectEvent = function(E) {
    return ge.H.useEffectEvent(E);
  }, xe.useId = function() {
    return ge.H.useId();
  }, xe.useImperativeHandle = function(E, z, W) {
    return ge.H.useImperativeHandle(E, z, W);
  }, xe.useInsertionEffect = function(E, z) {
    return ge.H.useInsertionEffect(E, z);
  }, xe.useLayoutEffect = function(E, z) {
    return ge.H.useLayoutEffect(E, z);
  }, xe.useMemo = function(E, z) {
    return ge.H.useMemo(E, z);
  }, xe.useOptimistic = function(E, z) {
    return ge.H.useOptimistic(E, z);
  }, xe.useReducer = function(E, z, W) {
    return ge.H.useReducer(E, z, W);
  }, xe.useRef = function(E) {
    return ge.H.useRef(E);
  }, xe.useState = function(E) {
    return ge.H.useState(E);
  }, xe.useSyncExternalStore = function(E, z, W) {
    return ge.H.useSyncExternalStore(
      E,
      z,
      W
    );
  }, xe.useTransition = function() {
    return ge.H.useTransition();
  }, xe.version = "19.3.0", xe;
}
var hp;
function Mo() {
  return hp || (hp = 1, yo.exports = d0()), yo.exports;
}
var q = Mo(), bo = { exports: {} }, Zi = {}, Eo = { exports: {} }, So = {};
var mp;
function h0() {
  return mp || (mp = 1, (function(u) {
    function r(M, te) {
      var j = M.length;
      M.push(te);
      e: for (; 0 < j; ) {
        var F = j - 1 >>> 1, B = M[F];
        if (0 < d(B, te))
          M[F] = te, M[j] = B, j = F;
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
        e: for (var F = 0, B = M.length, X = B >>> 1; F < X; ) {
          var ae = 2 * (F + 1) - 1, $ = M[ae], E = ae + 1, z = M[E];
          if (0 > d($, j))
            E < B && 0 > d(z, $) ? (M[F] = z, M[E] = j, F = E) : (M[F] = $, M[ae] = j, F = ae);
          else if (E < B && 0 > d(z, j))
            M[F] = z, M[E] = j, F = E;
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
      var g = Date, y = g.now();
      u.unstable_now = function() {
        return g.now() - y;
      };
    }
    var S = [], b = [], N = 1, p = null, I = 3, A = !1, x = !1, V = !1, L = !1, le = typeof setTimeout == "function" ? setTimeout : null, ye = typeof clearTimeout == "function" ? clearTimeout : null, he = typeof setImmediate < "u" ? setImmediate : null;
    function Z(M) {
      for (var te = o(b); te !== null; ) {
        if (te.callback === null) s(b);
        else if (te.startTime <= M)
          s(b), te.sortIndex = te.expirationTime, r(S, te);
        else break;
        te = o(b);
      }
    }
    function ue(M) {
      if (V = !1, Z(M), !x)
        if (o(S) !== null)
          x = !0, ne || (ne = !0, G());
        else {
          var te = o(b);
          te !== null && H(ue, te.startTime - M);
        }
    }
    var ne = !1, re = -1, ge = 5, se = -1;
    function oe() {
      return L ? !0 : !(u.unstable_now() - se < ge);
    }
    function Se() {
      if (L = !1, ne) {
        var M = u.unstable_now();
        se = M;
        var te = !0;
        try {
          e: {
            x = !1, V && (V = !1, ye(re), re = -1), A = !0;
            var j = I;
            try {
              t: {
                for (Z(M), p = o(S); p !== null && !(p.expirationTime > M && oe()); ) {
                  var F = p.callback;
                  if (typeof F == "function") {
                    p.callback = null, I = p.priorityLevel;
                    var B = F(
                      p.expirationTime <= M
                    );
                    if (M = u.unstable_now(), typeof B == "function") {
                      p.callback = B, Z(M), te = !0;
                      break t;
                    }
                    p === o(S) && s(S), Z(M);
                  } else s(S);
                  p = o(S);
                }
                if (p !== null) te = !0;
                else {
                  var X = o(b);
                  X !== null && H(
                    ue,
                    X.startTime - M
                  ), te = !1;
                }
              }
              break e;
            } finally {
              p = null, I = j, A = !1;
            }
            te = void 0;
          }
        } finally {
          te ? G() : ne = !1;
        }
      }
    }
    var G;
    if (typeof he == "function")
      G = function() {
        he(Se);
      };
    else if (typeof MessageChannel < "u") {
      var me = new MessageChannel(), De = me.port2;
      me.port1.onmessage = Se, G = function() {
        De.postMessage(null);
      };
    } else
      G = function() {
        le(Se, 0);
      };
    function H(M, te) {
      re = le(function() {
        M(u.unstable_now());
      }, te);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(M) {
      M.callback = null;
    }, u.unstable_forceFrameRate = function(M) {
      0 > M || 125 < M ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ge = 0 < M ? Math.floor(1e3 / M) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return I;
    }, u.unstable_next = function(M) {
      switch (I) {
        case 1:
        case 2:
        case 3:
          var te = 3;
          break;
        default:
          te = I;
      }
      var j = I;
      I = te;
      try {
        return M();
      } finally {
        I = j;
      }
    }, u.unstable_requestPaint = function() {
      L = !0;
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
      var j = I;
      I = M;
      try {
        return te();
      } finally {
        I = j;
      }
    }, u.unstable_scheduleCallback = function(M, te, j) {
      var F = u.unstable_now();
      switch (typeof j == "object" && j !== null ? (j = j.delay, j = typeof j == "number" && 0 < j ? F + j : F) : j = F, M) {
        case 1:
          var B = -1;
          break;
        case 2:
          B = 250;
          break;
        case 5:
          B = 1073741823;
          break;
        case 4:
          B = 1e4;
          break;
        default:
          B = 5e3;
      }
      return B = j + B, M = {
        id: N++,
        callback: te,
        priorityLevel: M,
        startTime: j,
        expirationTime: B,
        sortIndex: -1
      }, j > F ? (M.sortIndex = j, r(b, M), o(S) === null && M === o(b) && (V ? (ye(re), re = -1) : V = !0, H(ue, j - F))) : (M.sortIndex = B, r(S, M), x || A || (x = !0, ne || (ne = !0, G()))), M;
    }, u.unstable_shouldYield = oe, u.unstable_wrapCallback = function(M) {
      var te = I;
      return function() {
        var j = I;
        I = te;
        try {
          return M.apply(this, arguments);
        } finally {
          I = j;
        }
      };
    };
  })(So)), So;
}
var pp;
function m0() {
  return pp || (pp = 1, Eo.exports = h0()), Eo.exports;
}
var To = { exports: {} }, xt = {};
var gp;
function p0() {
  if (gp) return xt;
  gp = 1;
  var u = Mo();
  function r(N) {
    var p = "https://react.dev/errors/" + N;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var I = 2; I < arguments.length; I++)
        p += "&args[]=" + encodeURIComponent(arguments[I]);
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
  }, d = /* @__PURE__ */ Symbol.for("react.portal"), m = /* @__PURE__ */ Symbol.for("react.recoverable"), g = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function y(N, p, I) {
    var A = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: A == null ? null : A === g ? g : "" + A,
      children: N,
      containerInfo: p,
      implementation: I
    };
  }
  var S = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function b(N, p) {
    if (N === "font") return "";
    if (typeof p == "string")
      return p === "use-credentials" ? p : "";
  }
  return xt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = s, xt.browser = function(N) {
    return { $$typeof: m, _reason: N };
  }, xt.createPortal = function(N, p) {
    var I = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
      throw Error(r(299));
    return y(N, p, null, I);
  }, xt.flushSync = function(N) {
    var p = S.T, I = s.p;
    try {
      if (S.T = null, s.p = 2, N) return N();
    } finally {
      S.T = p, s.p = I, s.d.f();
    }
  }, xt.preconnect = function(N, p) {
    typeof N == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, s.d.C(N, p));
  }, xt.prefetchDNS = function(N) {
    typeof N == "string" && s.d.D(N);
  }, xt.preinit = function(N, p) {
    if (typeof N == "string" && p && typeof p.as == "string") {
      var I = p.as, A = b(I, p.crossOrigin), x = typeof p.integrity == "string" ? p.integrity : void 0, V = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      I === "style" ? s.d.S(
        N,
        typeof p.precedence == "string" ? p.precedence : void 0,
        {
          crossOrigin: A,
          integrity: x,
          fetchPriority: V
        }
      ) : I === "script" && s.d.X(N, {
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
          var I = b(
            p.as,
            p.crossOrigin
          );
          s.d.M(N, {
            crossOrigin: I,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0
          });
        }
      } else p == null && s.d.M(N);
  }, xt.preload = function(N, p) {
    if (typeof N == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var I = p.as, A = b(I, p.crossOrigin);
      s.d.L(N, I, {
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
        var I = b(p.as, p.crossOrigin);
        s.d.m(N, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: I,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0
        });
      } else s.d.m(N);
  }, xt.requestFormReset = function(N) {
    s.d.r(N);
  }, xt.unstable_batchedUpdates = function(N, p) {
    return N(p);
  }, xt.useFormState = function(N, p, I) {
    return S.H.useFormState(N, p, I);
  }, xt.useFormStatus = function() {
    return S.H.useHostTransitionStatus();
  }, xt.version = "19.3.0", xt;
}
var vp;
function Hp() {
  if (vp) return To.exports;
  vp = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (r) {
        console.error(r);
      }
  }
  return u(), To.exports = p0(), To.exports;
}
var yp;
function g0() {
  if (yp) return Zi;
  yp = 1;
  var u = m0(), r = Mo(), o = Hp();
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
  function g(e) {
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
  function b(e) {
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
  function I(e) {
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
    var t = [null, null], n = I(e);
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
  function L(e) {
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
  var le = null, ye = null;
  function he(e, t, n) {
    return e === n ? !0 : e === t ? (le = e, !0) : !1;
  }
  function Z(e, t, n) {
    return e === n ? (ye = e, !1) : e === t ? (ye !== null && (le = e), !0) : !1;
  }
  function ue(e) {
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
  var re = Object.assign, ge = /* @__PURE__ */ Symbol.for("react.element"), se = /* @__PURE__ */ Symbol.for("react.transitional.element"), oe = /* @__PURE__ */ Symbol.for("react.portal"), Se = /* @__PURE__ */ Symbol.for("react.fragment"), G = /* @__PURE__ */ Symbol.for("react.strict_mode"), me = /* @__PURE__ */ Symbol.for("react.profiler"), De = /* @__PURE__ */ Symbol.for("react.consumer"), H = /* @__PURE__ */ Symbol.for("react.context"), M = /* @__PURE__ */ Symbol.for("react.forward_ref"), te = /* @__PURE__ */ Symbol.for("react.suspense"), j = /* @__PURE__ */ Symbol.for("react.suspense_list"), F = /* @__PURE__ */ Symbol.for("react.memo"), B = /* @__PURE__ */ Symbol.for("react.lazy"), X = /* @__PURE__ */ Symbol.for("react.activity"), ae = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), $ = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), E = /* @__PURE__ */ Symbol.for("react.view_transition"), z = /* @__PURE__ */ Symbol.for("react.recoverable"), W = Symbol.iterator;
  function P(e) {
    return e === null || typeof e != "object" ? null : (e = W && e[W] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ie = /* @__PURE__ */ Symbol.for("react.client.reference");
  function be(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ie ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case Se:
        return "Fragment";
      case me:
        return "Profiler";
      case G:
        return "StrictMode";
      case te:
        return "Suspense";
      case j:
        return "SuspenseList";
      case X:
        return "Activity";
      case E:
        return "ViewTransition";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case oe:
          return "Portal";
        case H:
          return e.displayName || "Context";
        case De:
          return (e._context.displayName || "Context") + ".Consumer";
        case M:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case F:
          return t = e.displayName || null, t !== null ? t : be(e.type) || "Memo";
        case B:
          t = e._payload, e = e._init;
          try {
            return be(e(t));
          } catch {
          }
      }
    return null;
  }
  var fe = Array.isArray, ee = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, de = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, We = {
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
  var Xt = an(null), O = an(null), J = an(null), Y = an(null);
  function k(e, t) {
    switch (Qe(J, t), Qe(O, e), Qe(Xt, null), t.nodeType) {
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
  function Ee() {
    Ne(Xt), Ne(O), Ne(J);
  }
  function Be(e) {
    var t = e.memoizedState;
    t !== null && (Yl._currentValue = t.memoizedState, Qe(Y, e)), t = Xt.current;
    var n = Em(t, e.type);
    t !== n && (Qe(O, e), Qe(Xt, n));
  }
  function $e(e) {
    O.current === e && (Ne(Xt), Ne(O)), Y.current === e && (Ne(Y), Yl._currentValue = We);
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
              var K = function() {
                throw Error();
              };
              if (Object.defineProperty(K.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(K, []);
                } catch (ce) {
                  var _ = ce;
                }
                Reflect.construct(e, [], K);
              } else {
                try {
                  K.call();
                } catch (ce) {
                  _ = ce;
                }
                K = !1;
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
                  }), K = !0, new e();
                } finally {
                  K && (D !== void 0 ? Object.defineProperty(e.prototype, "props", D) : delete e.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (ce) {
                _ = ce;
              }
              (K = e()) && typeof K.catch == "function" && K.catch(function() {
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
  var gn = Object.prototype.hasOwnProperty, Vr = u.unstable_scheduleCallback, Gr = u.unstable_cancelCallback, pg = u.unstable_shouldYield, gg = u.unstable_requestPaint, Qt = u.unstable_now, vg = u.unstable_getCurrentPriorityLevel, Vo = u.unstable_ImmediatePriority, Go = u.unstable_UserBlockingPriority, ru = u.unstable_NormalPriority, yg = u.unstable_LowPriority, Yo = u.unstable_IdlePriority, bg = u.log, Eg = u.unstable_setDisableYieldValue, ei = null, Kt = null;
  function Wn(e) {
    if (typeof bg == "function" && Eg(e), Kt && typeof Kt.setStrictMode == "function")
      try {
        Kt.setStrictMode(ei, e);
      } catch {
      }
  }
  var kt = Math.clz32 ? Math.clz32 : Ag, Sg = Math.log, Tg = Math.LN2;
  function Ag(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Sg(e) / Tg | 0) | 0;
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
  function ti(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Xo(e, t) {
    (t & 8) !== 0 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var a = 31 - kt(n), l = 1 << a;
        t |= e[a], n &= ~l;
      }
    return t;
  }
  function Ng(e, t) {
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
  function ni(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function _g(e, t, n, a, l, i) {
    var c = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var f = e.entanglements, v = e.expirationTimes, C = e.hiddenUpdates;
    for (n = c & ~n; 0 < n; ) {
      var U = 31 - kt(n), K = 1 << U;
      f[U] = 0, v[U] = -1;
      var _ = C[U];
      if (_ !== null)
        for (C[U] = null, U = 0; U < _.length; U++) {
          var D = _[U];
          D !== null && (D.lane &= -536870913);
        }
      n &= ~K;
    }
    a !== 0 && Ko(e, a, 0), i !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(c & ~t));
  }
  function Ko(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - kt(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 261930;
  }
  function ko(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var a = 31 - kt(n), l = 1 << a;
      l & t | e[a] & t && (e[a] |= t), n &= ~l;
    }
  }
  function Zo(e, t) {
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
    var e = de.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : ap(e.type));
  }
  function $o(e, t) {
    var n = de.p;
    try {
      return de.p = e, t();
    } finally {
      de.p = n;
    }
  }
  var qn = Math.random().toString(36).slice(2), At = "__reactFiber$" + qn, qt = "__reactProps$" + qn, al = "__reactContainer$" + qn, Fo = "__reactEvents$" + qn, wg = "__reactListeners$" + qn, Og = "__reactHandles$" + qn, Po = "__reactResources$" + qn, ai = "__reactMarker$" + qn, du = "__reactLoad$" + qn;
  function hu(e) {
    delete e[At], delete e[qt], delete e[wg], delete e[Og];
  }
  function Ua(e) {
    var t;
    if (t = e[At]) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[al] || n[At]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = qm(e); e !== null; ) {
            if (n = e[At]) return n;
            e = qm(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function ll(e) {
    if (e = e[At] || e[al]) {
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
  function il(e) {
    var t = e[Po];
    return t || (t = e[Po] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function gt(e) {
    e[ai] = !0;
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
  var Cg = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), nf = {}, af = {};
  function xg(e) {
    return gn.call(af, e) ? !0 : gn.call(nf, e) ? !1 : Cg.test(e) ? af[e] = !0 : (nf[e] = !0, !1);
  }
  var Ve = !1;
  function lf() {
    var e = Ve;
    return Ve = !1, e;
  }
  function mu(e, t, n) {
    if (xg(t))
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
  function uf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Rg(e, t, n) {
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
      e._valueTracker = Rg(
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
  var jg = /[\n"\\]/g;
  function ln(e) {
    return e.replace(
      jg,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function kr(e, t, n, a, l, i, c, f) {
    e.name = "", c != null && typeof c != "function" && typeof c != "symbol" && typeof c != "boolean" ? e.type = c : e.removeAttribute("type"), t != null ? c === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Zt(t)) : e.value !== "" + Zt(t) && (e.value = "" + Zt(t)) : c !== "submit" && c !== "reset" || e.removeAttribute("value"), t != null ? c === "number" && e.value == t ? Zr(e, Zt(e.value)) : Zr(e, Zt(t)) : n != null ? Zr(e, Zt(n)) : a != null && e.removeAttribute("value"), l == null && i != null && (e.defaultChecked = !!i), l != null && (e.checked = l && typeof l != "function" && typeof l != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.name = "" + Zt(f) : e.removeAttribute("name");
  }
  function sf(e, t, n, a, l, i, c, f) {
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
  function rl(e, t, n, a) {
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
  function cf(e, t, n) {
    if (t != null && (t = "" + Zt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Zt(n) : "";
  }
  function of(e, t, n, a) {
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
  var Dg = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function ff(e, t, n) {
    var a = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Dg.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
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
  var Ug = /* @__PURE__ */ new Map([
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
  ]), zg = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function gu(e) {
    return zg.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
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
      if (Pr = !1, (cl !== null || ol !== null) && (gr(), cl && (t = cl, e = ol, ol = cl = null, hf(t), e)))
        for (t = 0; t < e.length; t++) hf(e[t]);
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
  var In = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Wr = !1;
  if (In)
    try {
      var ui = {};
      Object.defineProperty(ui, "passive", {
        get: function() {
          Wr = !0;
        }
      }), window.addEventListener("test", ui, ui), window.removeEventListener("test", ui, ui);
    } catch {
      Wr = !1;
    }
  var ea = null, es = null, vu = null;
  function pf() {
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
  function gf() {
    return !1;
  }
  function Dt(e) {
    function t(n, a, l, i, c) {
      this._reactName = n, this._targetInst = l, this.type = a, this.nativeEvent = i, this.target = c, this.currentTarget = null;
      for (var f in e)
        e.hasOwnProperty(f) && (n = e[f], this[f] = n ? n(i) : i[f]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? bu : gf, this.isPropagationStopped = gf, this;
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
  }, Eu = Dt(ta), ri = re({}, ta, { view: 0, detail: 0 }), Mg = Dt(ri), ts, ns, si, Su = re({}, ri, {
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
      return "movementX" in e ? e.movementX : (e !== si && (si && e.type === "mousemove" ? (ts = e.screenX - si.screenX, ns = e.screenY - si.screenY) : ns = ts = 0, si = e), ts);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : ns;
    }
  }), vf = Dt(Su), Hg = re({}, Su, { dataTransfer: 0 }), qg = Dt(Hg), Lg = re({}, ri, { relatedTarget: 0 }), as = Dt(Lg), Ig = re({}, ta, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Bg = Dt(Ig), Vg = re({}, ta, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Gg = Dt(Vg), Yg = re({}, ta, { data: 0 }), yf = Dt(Yg), Xg = {
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
  }, Qg = {
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
  }, Kg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function kg(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Kg[e]) ? !!t[e] : !1;
  }
  function ls() {
    return kg;
  }
  var Zg = re({}, ri, {
    key: function(e) {
      if (e.key) {
        var t = Xg[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = yu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Qg[e.keyCode] || "Unidentified" : "";
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
  }), Jg = Dt(Zg), $g = re({}, Su, {
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
  }), bf = Dt($g), Fg = re({}, ta, { submitter: 0 }), Pg = Dt(Fg), Wg = re({}, ri, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ls
  }), ev = Dt(Wg), tv = re({}, ta, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), nv = Dt(tv), av = re({}, Su, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), lv = Dt(av), iv = re({}, ta, {
    newState: 0,
    oldState: 0,
    source: 0
  }), uv = Dt(iv), rv = [9, 13, 27, 32], is = In && "CompositionEvent" in window, ci = null;
  In && "documentMode" in document && (ci = document.documentMode);
  var sv = In && "TextEvent" in window && !ci, Ef = In && (!is || ci && 8 < ci && 11 >= ci), Sf = " ", Tf = !1;
  function Af(e, t) {
    switch (e) {
      case "keyup":
        return rv.indexOf(t.keyCode) !== -1;
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
  function cv(e, t) {
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
  function ov(e, t) {
    if (fl)
      return e === "compositionend" || !is && Af(e, t) ? (e = pf(), vu = es = ea = null, fl = !1, e) : null;
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
  var fv = {
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
    return t === "input" ? !!fv[e.type] : t === "textarea";
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
  var oi = null, fi = null;
  function dv(e) {
    hm(e, 0);
  }
  function Tu(e) {
    var t = li(e);
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
    oi && (oi.detachEvent("onpropertychange", jf), fi = oi = null);
  }
  function jf(e) {
    if (e.propertyName === "value" && Tu(fi)) {
      var t = [];
      wf(
        t,
        fi,
        e,
        Fr(e)
      ), mf(dv, t);
    }
  }
  function hv(e, t, n) {
    e === "focusin" ? (Rf(), oi = t, fi = n, oi.attachEvent("onpropertychange", jf)) : e === "focusout" && Rf();
  }
  function mv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Tu(fi);
  }
  function pv(e, t) {
    if (e === "click") return Tu(t);
  }
  function gv(e, t) {
    if (e === "input" || e === "change")
      return Tu(t);
  }
  function vv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Jt = typeof Object.is == "function" ? Object.is : vv;
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
  var yv = In && "documentMode" in document && 11 >= document.documentMode, dl = null, os = null, hi = null, fs = !1;
  function Hf(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    fs || dl == null || dl !== ss(a) || (a = dl, "selectionStart" in a && cs(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), hi && di(hi, a) || (hi = a, a = Tr(os, "onSelect"), 0 < a.length && (t = new Eu(
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
  }, ds = {}, qf = {};
  In && (qf = document.createElement("div").style, "AnimationEvent" in window || (delete hl.animationend.animation, delete hl.animationiteration.animation, delete hl.animationstart.animation), "TransitionEvent" in window || delete hl.transitionend.transition);
  function Ha(e) {
    if (ds[e]) return ds[e];
    if (!hl[e]) return e;
    var t = hl[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in qf)
        return ds[e] = t[n];
    return e;
  }
  var Lf = Ha("animationend"), If = Ha("animationiteration"), Bf = Ha("animationstart"), bv = Ha("transitionrun"), Ev = Ha("transitionstart"), Sv = Ha("transitioncancel"), Vf = Ha("transitionend"), Gf = /* @__PURE__ */ new Map(), hs = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  hs.push("scrollEnd");
  function vn(e, t) {
    Gf.set(e, t), za(t, [e]);
  }
  var Tv = 0;
  function Bn(e, t) {
    if (e.name != null && e.name !== "auto") return e.name;
    if (t.autoName !== null) return t.autoName;
    e = Sn.identifierPrefix;
    var n = Tv++;
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
  function ps(e, t, n, a) {
    return _u(e, t, n, a), wu(e);
  }
  function qa(e, t) {
    return _u(e, null, null, t), wu(e);
  }
  function Xf(e, t, n) {
    e.lanes |= n;
    var a = e.alternate;
    a !== null && (a.lanes |= n);
    for (var l = !1, i = e.return; i !== null; )
      i.childLanes |= n, a = i.alternate, a !== null && (a.childLanes |= n), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (l = !0)), e = i, i = i.return;
    return e.tag === 3 ? (i = e.stateNode, l && t !== null && (l = 31 - kt(n), e = i.hiddenUpdates, a = e[l], a === null ? e[l] = [t] : a.push(t), t.lane = n | 536870912), i) : null;
  }
  function wu(e) {
    if (50 < Mi)
      throw Mi = 0, pr = null, Error(s(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var pl = {};
  function Av(e, t, n, a) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Lt(e, t, n, a) {
    return new Av(e, t, n, a);
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
    if (a = e, typeof a == "function") gs(a) && (c = 1);
    else if (typeof a == "string")
      c = Fy(
        e,
        n,
        Xt.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (a) {
        case X:
          return e = Lt(31, n, t, l), e.elementType = X, e.lanes = i, e;
        case Se:
          return La(n.children, l, i, t);
        case G:
          c = 8, l |= 24;
          break;
        case me:
          return e = Lt(12, n, t, l | 2), e.elementType = me, e.lanes = i, e;
        case te:
          return e = Lt(13, n, t, l), e.elementType = te, e.lanes = i, e;
        case j:
          return e = Lt(19, n, t, l), e.elementType = j, e.lanes = i, e;
        case ae:
        case E:
          return e = l | 32, e = Lt(30, n, t, e), e.elementType = E, e.lanes = i, e.stateNode = {
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
              case B:
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
  var kf = /* @__PURE__ */ new WeakMap();
  function rn(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = kf.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: Wl(t)
      }, kf.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Wl(t)
    };
  }
  var gl = [], vl = 0, Cu = null, mi = 0, sn = [], cn = 0, na = null, _n = 1, wn = "";
  function Yn(e, t) {
    gl[vl++] = mi, gl[vl++] = Cu, Cu = e, mi = t;
  }
  function Zf(e, t, n) {
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
    e.return !== null && (Yn(e, 1), Zf(e, 1, 0));
  }
  function bs(e) {
    for (; e === Cu; )
      Cu = gl[--vl], gl[vl] = null, mi = gl[--vl], gl[vl] = null;
    for (; e === na; )
      na = sn[--cn], sn[cn] = null, wn = sn[--cn], sn[cn] = null, _n = sn[--cn], sn[cn] = null;
  }
  function Jf(e, t) {
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
    throw pi(rn(t, e)), Es;
  }
  function $f(e) {
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
  function yl(e) {
    if (e !== vt) return !1;
    if (!Ue) return Ru(e), Ue = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || $c(e.type, e.memoizedProps)), n = !n), n && et && la(e), Ru(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      et = Hm(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(s(317));
      et = Hm(e);
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
  function pi(e) {
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
      } else if (l === Y.current) {
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
  function Nt(e) {
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
  var Nv = typeof AbortController < "u" ? AbortController : function() {
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
  }, _v = u.unstable_scheduleCallback, wv = u.unstable_NormalPriority, st = {
    $$typeof: H,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Ns() {
    return {
      controller: new Nv(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function gi(e) {
    e.refCount--, e.refCount === 0 && _v(wv, function() {
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
  var vi = null;
  function Ov(e) {
    var t = e.transitionTypes;
    return e.transitionTypes = null, t;
  }
  var yi = null, _s = 0, Ya = 0, bl = null;
  function Cv(e, t) {
    if (yi === null) {
      var n = yi = [];
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
    if (--_s === 0 && (vi = null, yi !== null)) {
      bl !== null && (bl.status = "fulfilled");
      var e = yi;
      yi = null, Ya = 0, bl = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function xv(e, t) {
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
    if (Kh = Qt(), typeof t == "object" && t !== null && typeof t.then == "function" && Cv(e, t), vi !== null)
      for (var n = ql; n !== null; )
        Pf(n, vi), n = n.next;
    if (n = e.types, n !== null) {
      for (var a = ql; a !== null; )
        Pf(a, n), a = a.next;
      if (Ya !== 0) {
        a = vi, a === null && (a = vi = []);
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
  var El = Error(s(460)), Os = Error(s(474)), Mu = Error(s(542)), Hu = { then: function() {
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
  var Sl = null, bi = 0;
  function qu(e) {
    var t = bi;
    return bi += 1, Sl === null && (Sl = []), ad(Sl, e, t);
  }
  function ua(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Lu(e, t) {
    throw t.$$typeof === ge ? Error(s(525)) : (e = Object.prototype.toString.call(t), Error(
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
    function f(w, T, R, Q) {
      return T === null || T.tag !== 6 ? (T = vs(R, w.mode, Q), T.return = w, T) : (T = l(T, R), T.return = w, T);
    }
    function v(w, T, R, Q) {
      var pe = R.type;
      return pe === Se ? (w = U(
        w,
        T,
        R.props.children,
        Q,
        R.key
      ), ua(w, R), w) : T !== null && (T.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === B && Qa(pe) === T.type) ? (T = l(T, R.props), ua(T, R), T.return = w, T) : (T = Ou(
        R.type,
        R.key,
        R.props,
        null,
        w.mode,
        Q
      ), ua(T, R), T.return = w, T);
    }
    function C(w, T, R, Q) {
      return T === null || T.tag !== 4 || T.stateNode.containerInfo !== R.containerInfo || T.stateNode.implementation !== R.implementation ? (T = ys(R, w.mode, Q), T.return = w, T) : (T = l(T, R.children || []), T.return = w, T);
    }
    function U(w, T, R, Q, pe) {
      return T === null || T.tag !== 7 ? (T = La(
        R,
        w.mode,
        Q,
        pe
      ), T.return = w, T) : (T = l(T, R), T.return = w, T);
    }
    function K(w, T, R) {
      if (typeof T == "string" && T !== "" || typeof T == "number" || typeof T == "bigint")
        return T = vs(
          "" + T,
          w.mode,
          R
        ), T.return = w, T;
      if (typeof T == "object" && T !== null) {
        switch (T.$$typeof) {
          case se:
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
          case B:
            return T = Qa(T), K(w, T, R);
        }
        if (fe(T) || P(T))
          return T = La(
            T,
            w.mode,
            R,
            null
          ), T.return = w, T;
        if (typeof T.then == "function")
          return K(w, qu(T), R);
        if (T.$$typeof === H)
          return K(
            w,
            Uu(w, T),
            R
          );
        Lu(w, T);
      }
      return null;
    }
    function _(w, T, R, Q) {
      var pe = T !== null ? T.key : null;
      if (typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint")
        return pe !== null ? null : f(w, T, "" + R, Q);
      if (typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case se:
            return R.key === pe ? v(w, T, R, Q) : null;
          case oe:
            return R.key === pe ? C(w, T, R, Q) : null;
          case B:
            return R = Qa(R), _(w, T, R, Q);
        }
        if (fe(R) || P(R))
          return pe !== null ? null : U(w, T, R, Q, null);
        if (typeof R.then == "function")
          return _(
            w,
            T,
            qu(R),
            Q
          );
        if (R.$$typeof === H)
          return _(
            w,
            T,
            Uu(w, R),
            Q
          );
        Lu(w, R);
      }
      return null;
    }
    function D(w, T, R, Q, pe) {
      if (typeof Q == "string" && Q !== "" || typeof Q == "number" || typeof Q == "bigint")
        return w = w.get(R) || null, f(T, w, "" + Q, pe);
      if (typeof Q == "object" && Q !== null) {
        switch (Q.$$typeof) {
          case se:
            return w = w.get(
              Q.key === null ? R : Q.key
            ) || null, v(T, w, Q, pe);
          case oe:
            return w = w.get(
              Q.key === null ? R : Q.key
            ) || null, C(T, w, Q, pe);
          case B:
            return Q = Qa(Q), D(
              w,
              T,
              R,
              Q,
              pe
            );
        }
        if (fe(Q) || P(Q))
          return w = w.get(R) || null, U(T, w, Q, pe, null);
        if (typeof Q.then == "function")
          return D(
            w,
            T,
            R,
            qu(Q),
            pe
          );
        if (Q.$$typeof === H)
          return D(
            w,
            T,
            R,
            Uu(T, Q),
            pe
          );
        Lu(T, Q);
      }
      return null;
    }
    function ce(w, T, R, Q) {
      for (var pe = null, qe = null, Ae = T, _e = T = 0, ft = null; Ae !== null && _e < R.length; _e++) {
        Ae.index > _e ? (ft = Ae, Ae = null) : ft = Ae.sibling;
        var Le = _(
          w,
          Ae,
          R[_e],
          Q
        );
        if (Le === null) {
          Ae === null && (Ae = ft);
          break;
        }
        e && Ae && Le.alternate === null && t(w, Ae), T = i(Le, T, _e), qe === null ? pe = Le : qe.sibling = Le, qe = Le, Ae = ft;
      }
      if (_e === R.length)
        return n(w, Ae), Ue && Yn(w, _e), pe;
      if (Ae === null) {
        for (; _e < R.length; _e++)
          Ae = K(w, R[_e], Q), Ae !== null && (T = i(
            Ae,
            T,
            _e
          ), qe === null ? pe = Ae : qe.sibling = Ae, qe = Ae);
        return Ue && Yn(w, _e), pe;
      }
      for (Ae = a(Ae); _e < R.length; _e++)
        ft = D(
          Ae,
          w,
          _e,
          R[_e],
          Q
        ), ft !== null && (e && (Le = ft.alternate, Le !== null && Ae.delete(Le.key === null ? _e : Le.key)), T = i(
          ft,
          T,
          _e
        ), qe === null ? pe = ft : qe.sibling = ft, qe = ft);
      return e && Ae.forEach(function(_a) {
        return t(w, _a);
      }), Ue && Yn(w, _e), pe;
    }
    function ve(w, T, R, Q) {
      if (R == null) throw Error(s(151));
      for (var pe = null, qe = null, Ae = T, _e = T = 0, ft = null, Le = R.next(); Ae !== null && !Le.done; _e++, Le = R.next()) {
        Ae.index > _e ? (ft = Ae, Ae = null) : ft = Ae.sibling;
        var _a = _(w, Ae, Le.value, Q);
        if (_a === null) {
          Ae === null && (Ae = ft);
          break;
        }
        e && Ae && _a.alternate === null && t(w, Ae), T = i(_a, T, _e), qe === null ? pe = _a : qe.sibling = _a, qe = _a, Ae = ft;
      }
      if (Le.done)
        return n(w, Ae), Ue && Yn(w, _e), pe;
      if (Ae === null) {
        for (; !Le.done; _e++, Le = R.next())
          Le = K(w, Le.value, Q), Le !== null && (T = i(Le, T, _e), qe === null ? pe = Le : qe.sibling = Le, qe = Le);
        return Ue && Yn(w, _e), pe;
      }
      for (Ae = a(Ae); !Le.done; _e++, Le = R.next())
        Le = D(Ae, w, _e, Le.value, Q), Le !== null && (e && (ft = Le.alternate, ft !== null && Ae.delete(
          ft.key === null ? _e : ft.key
        )), T = i(Le, T, _e), qe === null ? pe = Le : qe.sibling = Le, qe = Le);
      return e && Ae.forEach(function(c0) {
        return t(w, c0);
      }), Ue && Yn(w, _e), pe;
    }
    function je(w, T, R, Q) {
      if (typeof R == "object" && R !== null && R.type === Se && R.key === null && R.props.ref === void 0 && (R = R.props.children), typeof R == "object" && R !== null) {
        switch (R.$$typeof) {
          case se:
            e: {
              for (var pe = R.key; T !== null; ) {
                if (T.key === pe) {
                  if (pe = R.type, pe === Se) {
                    if (T.tag === 7) {
                      n(
                        w,
                        T.sibling
                      ), Q = l(
                        T,
                        R.props.children
                      ), ua(Q, R), Q.return = w, w = Q;
                      break e;
                    }
                  } else if (T.elementType === pe || typeof pe == "object" && pe !== null && pe.$$typeof === B && Qa(pe) === T.type) {
                    n(
                      w,
                      T.sibling
                    ), Q = l(T, R.props), ua(Q, R), Q.return = w, w = Q;
                    break e;
                  }
                  n(w, T);
                  break;
                } else t(w, T);
                T = T.sibling;
              }
              R.type === Se ? (Q = La(
                R.props.children,
                w.mode,
                Q,
                R.key
              ), ua(Q, R), Q.return = w, w = Q) : (Q = Ou(
                R.type,
                R.key,
                R.props,
                null,
                w.mode,
                Q
              ), ua(Q, R), Q.return = w, w = Q);
            }
            return c(w);
          case oe:
            e: {
              for (pe = R.key; T !== null; ) {
                if (T.key === pe)
                  if (T.tag === 4 && T.stateNode.containerInfo === R.containerInfo && T.stateNode.implementation === R.implementation) {
                    n(
                      w,
                      T.sibling
                    ), Q = l(T, R.children || []), Q.return = w, w = Q;
                    break e;
                  } else {
                    n(w, T);
                    break;
                  }
                else t(w, T);
                T = T.sibling;
              }
              Q = ys(R, w.mode, Q), Q.return = w, w = Q;
            }
            return c(w);
          case B:
            return R = Qa(R), je(
              w,
              T,
              R,
              Q
            );
        }
        if (fe(R))
          return ce(
            w,
            T,
            R,
            Q
          );
        if (P(R)) {
          if (pe = P(R), typeof pe != "function") throw Error(s(150));
          return R = pe.call(R), ve(
            w,
            T,
            R,
            Q
          );
        }
        if (typeof R.then == "function")
          return je(
            w,
            T,
            qu(R),
            Q
          );
        if (R.$$typeof === H)
          return je(
            w,
            T,
            Uu(w, R),
            Q
          );
        Lu(w, R);
      }
      return typeof R == "string" && R !== "" || typeof R == "number" || typeof R == "bigint" ? (R = "" + R, T !== null && T.tag === 6 ? (n(w, T.sibling), Q = l(T, R), Q.return = w, w = Q) : (n(w, T), Q = vs(R, w.mode, Q), Q.return = w, w = Q), c(w)) : n(w, T);
    }
    return function(w, T, R, Q) {
      try {
        bi = 0;
        var pe = je(
          w,
          T,
          R,
          Q
        );
        return Sl = null, pe;
      } catch (Ae) {
        if (Ae === El || Ae === Mu) throw Ae;
        var qe = Lt(29, Ae, null, w.mode);
        return qe.lanes = Q, qe.return = w, qe;
      }
    };
  }
  var ka = ud(!0), rd = ud(!1), ra = !1;
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
  function Ei(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, ko(e, n);
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
  function Si() {
    if (js) {
      var e = bl;
      if (e !== null) throw e;
    }
  }
  function Ti(e, t, n, a) {
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
      var K = l.baseState;
      c = 0, U = C = v = null, f = i;
      do {
        var _ = f.lane & -536870913, D = _ !== f.lane;
        if (D ? (He & _) === _ : (a & _) === _) {
          _ !== 0 && _ === Ya && (js = !0), U !== null && (U = U.next = {
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: null,
            next: null
          });
          e: {
            var ce = e, ve = f;
            _ = t;
            var je = n;
            switch (ve.tag) {
              case 1:
                if (ce = ve.payload, typeof ce == "function") {
                  K = ce.call(je, K, _);
                  break e;
                }
                K = ce;
                break e;
              case 3:
                ce.flags = ce.flags & -65537 | 128;
              case 0:
                if (ce = ve.payload, _ = typeof ce == "function" ? ce.call(je, K, _) : ce, _ == null) break e;
                K = re({}, K, _);
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
          }, U === null ? (C = U = D, v = K) : U = U.next = D, c |= _;
        if (f = f.next, f === null) {
          if (f = l.shared.pending, f === null)
            break;
          D = f, f = D.next, D.next = null, l.lastBaseUpdate = D, l.shared.pending = null;
        }
      } while (!0);
      U === null && (v = K), l.baseState = v, l.firstBaseUpdate = C, l.lastBaseUpdate = U, i === null && (l.shared.lanes = 0), ga |= c, e.lanes = c, e.memoizedState = K;
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
  var _t = an(null), jt = null;
  function fa(e) {
    var t = e.alternate;
    Qe(wt, wt.current & 1), Qe(_t, e), jt === null && (t === null || oa.current !== null || t.memoizedState !== null) && (jt = e);
  }
  function zs(e) {
    Qe(wt, wt.current), Qe(_t, e), jt === null && (jt = e);
  }
  function fd(e) {
    e.tag === 22 ? (Qe(wt, wt.current), Qe(_t, e), jt === null && (jt = e)) : da();
  }
  function da() {
    Qe(wt, wt.current), Qe(_t, _t.current);
  }
  function $t(e) {
    Ne(_t), jt === e && (jt = null), Ne(wt);
  }
  var wt = an(0);
  function Ai(e, t) {
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
  var Kn = 0, Re = null, Je = null, ct = null, Vu = !1, Tl = !1, Za = !1, Gu = 0, Ni = 0, Al = null, Rv = 0;
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
    return Kn = i, Re = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ee.H = e === null || e.memoizedState === null ? Zd : Jd, Za = !1, i = n(a, l), Za = !1, Tl && (i = hd(
      t,
      n,
      a,
      l
    )), dd(e), i;
  }
  function dd(e) {
    ee.H = Ju;
    var t = Je !== null && Je.next !== null;
    if (Kn = 0, ct = Je = Re = null, Vu = !1, Ni = 0, Al = null, t) throw Error(s(300));
    e === null || ot || (e = e.dependencies, e !== null && Du(e) && (ot = !0));
  }
  function hd(e, t, n, a) {
    Re = e;
    var l = 0;
    do {
      if (Tl && (Al = null), Ni = 0, Tl = !1, 25 <= l) throw Error(s(301));
      if (l += 1, ct = Je = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      ee.H = Lv, i = t(n, a);
    } while (Tl);
    return i;
  }
  function jv() {
    var e = ee.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? _i(t) : t, e = e.useState()[0], (Je !== null ? Je.memoizedState : null) !== e && (Re.flags |= 1024), t;
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
    Kn = 0, ct = Je = Re = null, Tl = !1, Ni = Gu = 0, Al = null;
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
  function _i(e) {
    var t = Ni;
    return Ni += 1, Al === null && (Al = []), e = ad(Al, e, t), t = Re, (ct === null ? t.memoizedState : ct.next) === null && (t = t.alternate, ee.H = t === null || t.memoizedState === null ? Zd : Jd), e;
  }
  function Xu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return _i(e);
      if (e.$$typeof === z) return;
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
        n[a] = $;
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
      var f = c = null, v = null, C = t, U = !1;
      do {
        var K = C.lane & -536870913;
        if (K !== C.lane ? (He & K) === K : (Kn & K) === K) {
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
            }), K === Ya && (U = !0);
          else if ((Kn & _) === _) {
            C = C.next, _ === Ya && (U = !0);
            continue;
          } else
            K = {
              lane: 0,
              revertLane: C.revertLane,
              gesture: null,
              action: C.action,
              hasEagerState: C.hasEagerState,
              eagerState: C.eagerState,
              next: null
            }, v === null ? (f = v = K, c = i) : v = v.next = K, Re.lanes |= _, ga |= _;
          K = C.action, Za && n(i, K), i = C.hasEagerState ? C.eagerState : n(i, K);
        } else
          _ = {
            lane: K,
            revertLane: C.revertLane,
            gesture: C.gesture,
            action: C.action,
            hasEagerState: C.hasEagerState,
            eagerState: C.eagerState,
            next: null
          }, v === null ? (f = v = _, c = i) : v = v.next = _, Re.lanes |= K, ga |= K;
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
      gd.bind(null, a, l, n, t),
      null
    ), e) {
      if (a.flags |= 2048, Fe === null) throw Error(s(349));
      i || (Kn & 127) !== 0 || pd(a, t, n);
    }
    return n;
  }
  function pd(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Re.updateQueue, t === null ? (t = Yu(), Re.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function gd(e, t, n, a) {
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
  function Ed(e, t, n, a) {
    return e.baseState = n, Gs(
      e,
      Je,
      typeof a == "function" ? a : kn
    );
  }
  function Dv(e, t, n, a, l) {
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
    }, a.queue = l, n = Dv.bind(
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
    )[0], e = Qu(kn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = _i(t);
      } catch (c) {
        throw c === El ? Mu : c;
      }
    else a = t;
    t = ut();
    var l = t.queue, i = l.dispatch;
    return n !== t.memoizedState && (Re.flags |= 2048, Nl(
      9,
      { destroy: void 0 },
      Uv.bind(null, l, n),
      null
    )), [a, i, e];
  }
  function Uv(e, t) {
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
  function ku(e, t, n, a) {
    var l = ut();
    a = a === void 0 ? null : a;
    var i = l.memoizedState.inst;
    Je !== null && a !== null && Hs(a, Je.memoizedState.deps) ? l.memoizedState = Nl(t, i, n, a) : (Re.flags |= e, l.memoizedState = Nl(
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
    ku(2048, 8, e, t);
  }
  function zv(e) {
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
    return zv({ ref: t, nextImpl: e }), function() {
      if ((Ge & 2) !== 0) throw Error(s(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Ud(e, t) {
    return ku(4, 2, e, t);
  }
  function zd(e, t) {
    return ku(4, 4, e, t);
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
  function Hd(e, t, n) {
    n = n != null ? n.concat([e]) : null, ku(4, 4, Md.bind(null, t, e), n);
  }
  function ks() {
  }
  function qd(e, t) {
    var n = ut();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && Hs(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
  }
  function Ld(e, t) {
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
    return n === void 0 || (Kn & 1073741824) !== 0 && (He & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = Zh(), Re.lanes |= e, ga |= e, n);
  }
  function Id(e, t, n, a) {
    return Jt(n, t) ? n : oa.current !== null ? (e = Zs(e, n, a), Jt(e, t) || (ot = !0), e) : (Kn & 106) === 0 || (Kn & 1073741824) !== 0 && (He & 261930) === 0 ? (ot = !0, e.memoizedState = n) : (e = Zh(), Re.lanes |= e, ga |= e, t);
  }
  function Bd(e, t, n, a, l) {
    var i = de.p;
    de.p = i !== 0 && 8 > i ? i : 8;
    var c = ee.T, f = {};
    f.types = c !== null ? c.types : null, ee.T = f, Fs(e, !1, t, n);
    try {
      var v = l(), C = ee.S;
      if (C !== null && C(f, v), v !== null && typeof v == "object" && typeof v.then == "function") {
        var U = xv(
          v,
          a
        );
        wi(
          e,
          t,
          U,
          en(e)
        );
      } else
        wi(
          e,
          t,
          a,
          en(e)
        );
    } catch (K) {
      wi(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: K },
        en()
      );
    } finally {
      de.p = i, c !== null && f.types !== null && (c.types = f.types), ee.T = c;
    }
  }
  function Mv() {
  }
  function Js(e, t, n, a) {
    if (e.tag !== 5) throw Error(s(476));
    var l = Vd(e).queue;
    Bd(
      e,
      l,
      t,
      We,
      n === null ? Mv : function() {
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
  function Gd(e) {
    var t = Vd(e);
    t.next === null && (t = e.alternate.memoizedState), wi(
      e,
      t.next.queue,
      {},
      en()
    );
  }
  function $s() {
    return Nt(Yl);
  }
  function Yd() {
    return ut().memoizedState;
  }
  function Xd() {
    return ut().memoizedState;
  }
  function Hv(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = en();
          e = sa(n);
          var a = ca(t, e, n);
          a !== null && (Gt(a, t, n), Ei(a, t, n)), t = { cache: Ns() }, e.payload = t;
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
    }, Zu(e) ? Kd(t, n) : (n = ps(e, t, n, a), n !== null && (Gt(n, e, a), kd(n, t, a)));
  }
  function Qd(e, t, n) {
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
    if (Zu(e)) Kd(t, l);
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
        return Gt(n, e, a), kd(n, t, a), !0;
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
  function Kd(e, t) {
    Tl = Vu = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function kd(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, ko(e, n);
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
  }, Zd = {
    readContext: Nt,
    use: Xu,
    useCallback: function(e, t) {
      return Ut().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Nt,
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
    useDebugValue: ks,
    useDeferredValue: function(e, t) {
      var n = Ut();
      return Zs(n, e, t);
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
        (He & 127) !== 0 || pd(a, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return l.queue = i, jd(vd.bind(null, a, i, e), [
        e
      ]), a.flags |= 2048, Nl(
        9,
        { destroy: void 0 },
        gd.bind(
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
        n = Rv++, t = "_" + t + "r_" + n.toString(32) + "_";
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
      return Ut().memoizedState = Hv.bind(
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
    readContext: Nt,
    use: Xu,
    useCallback: qd,
    useContext: Nt,
    useEffect: Ks,
    useImperativeHandle: Hd,
    useInsertionEffect: Ud,
    useLayoutEffect: zd,
    useMemo: Ld,
    useReducer: Qu,
    useRef: Rd,
    useState: function() {
      return Qu(kn);
    },
    useDebugValue: ks,
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
      var e = Qu(kn)[0], t = ut().memoizedState;
      return [
        typeof e == "boolean" ? e : _i(e),
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
  }, Lv = {
    readContext: Nt,
    use: Xu,
    useCallback: qd,
    useContext: Nt,
    useEffect: Ks,
    useImperativeHandle: Hd,
    useInsertionEffect: Ud,
    useLayoutEffect: zd,
    useMemo: Ld,
    useReducer: Ys,
    useRef: Rd,
    useState: function() {
      return Ys(kn);
    },
    useDebugValue: ks,
    useDeferredValue: function(e, t) {
      var n = ut();
      return Je === null ? Zs(n, e, t) : Id(
        n,
        Je.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Ys(kn)[0], t = ut().memoizedState;
      return [
        typeof e == "boolean" ? e : _i(e),
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
  function $d(e, t, n, a, l, i, c) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, i, c) : t.prototype && t.prototype.isPureReactComponent ? !di(n, a) || !di(l, i) : !0;
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
  function Iv(e, t, n, a, l) {
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
      return t = _t.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = l, a !== Es && (e = Error(s(422), { cause: a }), pi(rn(e, n)))) : (a !== Es && (t = Error(s(423), {
        cause: a
      }), pi(
        rn(t, n)
      )), e = e.current.alternate, e.flags |= 65536, l &= -l, e.lanes |= l, a = rn(a, n), l = ec(
        e.stateNode,
        a,
        l
      ), Rs(e, l), it !== 4 && (it = 2)), !1;
    var i = Error(s(520), { cause: a });
    if (i = rn(i, n), zi === null ? zi = [i] : zi.push(i), it !== 4 && (it = 2), t === null) return !0;
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
  function pt(e, t, n, a) {
    t.child = e === null ? rd(t, null, n, a) : ka(
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
    return Ga(t), a = qs(
      e,
      t,
      n,
      c,
      i,
      l
    ), f = Ls(), e !== null && !ot ? (Is(e, t, l), Zn(e, t, l)) : (Ue && f && xu(t), t.flags |= 1, pt(e, t, a, l), t.child);
  }
  function ih(e, t, n, a, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !gs(i) && i.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = i, uh(
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
      if (n = n.compare, n = n !== null ? n : di, n(c, a) && e.ref === t.ref)
        return Zn(e, t, l);
    }
    return t.flags |= 1, e = Gn(i, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function uh(e, t, n, a, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (di(i, a) && e.ref === t.ref)
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
    return ka(t, e.child, null, n), e = Fu(t, t.pendingProps), e.flags |= 2, $t(t), t.memoizedState = null, e;
  }
  function Bv(e, t, n) {
    var a = t.pendingProps, l = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Ue) {
        if (a.mode === "hidden")
          return e = Fu(t, a), t.lanes = 536870912, e.memoizedState = { baseLanes: 0, cachePool: null }, Oi(null, e);
        if (zs(t), (e = et) ? (e = Mm(
          e,
          on
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: na !== null ? { id: _n, overflow: wn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Kf(e), n.return = t, t.child = n, vt = t, et = null)) : e = null, e === null) throw la(t);
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
          if (a = Fe, a !== null && (c = Zo(a, n), c !== 0 && c !== i.retryLane))
            throw i.retryLane = c, qa(e, c), Gt(a, e, c), tc;
          vr();
        }
        t = ch(
          e,
          t,
          n
        );
      } else
        e = i.treeContext, et = dn(c.nextSibling), vt = t, Ue = !0, aa = null, on = !1, e !== null && Jf(t, e), t = Fu(t, a), t.flags |= 134221824;
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
    return Ga(t), n = qs(
      e,
      t,
      n,
      a,
      void 0,
      l
    ), a = Ls(), e !== null && !ot ? (Is(e, t, l), Zn(e, t, l)) : (Ue && a && xu(t), t.flags |= 1, pt(e, t, n, l), t.child);
  }
  function oh(e, t, n, a, l, i) {
    return Ga(t), t.updateQueue = null, n = hd(
      t,
      a,
      n,
      l
    ), dd(e), a = Ls(), e !== null && !ot ? (Is(e, t, i), Zn(e, t, i)) : (Ue && a && xu(t), t.flags |= 1, pt(e, t, n, i), t.child);
  }
  function fh(e, t, n, a, l) {
    if (Ga(t), t.stateNode === null) {
      var i = pl, c = n.contextType;
      typeof c == "object" && c !== null && (i = Nt(c)), i = new n(a, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Ws, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = a, i.state = t.memoizedState, i.refs = {}, Cs(t), c = n.contextType, i.context = typeof c == "object" && c !== null ? Nt(c) : pl, i.state = t.memoizedState, c = n.getDerivedStateFromProps, typeof c == "function" && (Ps(
        t,
        n,
        c,
        a
      ), i.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (c = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), c !== i.state && Ws.enqueueReplaceState(i, i.state, null), Ti(t, a, i, l), Si(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      i = t.stateNode;
      var f = t.memoizedProps, v = Ja(n, f);
      i.props = v;
      var C = i.context, U = n.contextType;
      c = pl, typeof U == "object" && U !== null && (c = Nt(U));
      var K = n.getDerivedStateFromProps;
      U = typeof K == "function" || typeof i.getSnapshotBeforeUpdate == "function", f = t.pendingProps !== f, U || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (f || C !== c) && Fd(
        t,
        i,
        a,
        c
      ), ra = !1;
      var _ = t.memoizedState;
      i.state = _, Ti(t, a, i, l), Si(), C = t.memoizedState, f || _ !== C || ra ? (typeof K == "function" && (Ps(
        t,
        n,
        K,
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
      i = t.stateNode, xs(e, t), c = t.memoizedProps, U = Ja(n, c), i.props = U, K = t.pendingProps, _ = i.context, C = n.contextType, v = pl, typeof C == "object" && C !== null && (v = Nt(C)), f = n.getDerivedStateFromProps, (C = typeof f == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (c !== K || _ !== v) && Fd(
        t,
        i,
        a,
        v
      ), ra = !1, _ = t.memoizedState, i.state = _, Ti(t, a, i, l), Si();
      var D = t.memoizedState;
      c !== K || _ !== D || ra || e !== null && e.dependencies !== null && Du(e.dependencies) ? (typeof f == "function" && (Ps(
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
    return i = a, _l(e, t), a = (t.flags & 128) !== 0, i || a ? (i = t.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && a ? (t.child = ka(
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
  function dh(e, t, n, a) {
    return Ia(), t.flags |= 256, pt(e, t, n, a), t.child;
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
    if ((c = i) || (c = e !== null && e.memoizedState === null ? !1 : (wt.current & 2) !== 0), c && (l = !0, t.flags &= -129), c = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ue) {
        if (l ? fa(t) : da(), (e = et) ? (e = Mm(
          e,
          on
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: na !== null ? { id: _n, overflow: wn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Kf(e), n.return = t, t.child = n, vt = t, et = null)) : e = null, e === null) throw la(t);
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
      ), t.memoizedState = ac, Oi(null, a)) : (fa(t), uc(t, i));
    }
    var f = e.memoizedState;
    if (f !== null) {
      var v = f.dehydrated;
      if (v !== null)
        return Vv(
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
    ), l.flags |= 2), l.return = t, a.return = t, a.sibling = l, t.child = a, Oi(null, a), a = t.child, l = e.child.memoizedState, l === null ? l = lc(n) : (i = l.cachePool, i !== null ? (f = st._currentValue, i = i.parent !== f ? { parent: f, pool: f } : i) : i = td(), l = {
      baseLanes: l.baseLanes | n,
      cachePool: i
    }), a.memoizedState = l, a.childLanes = ic(
      e,
      c,
      n
    ), t.memoizedState = ac, Oi(e.child, a)) : (fa(t), n = e.child, e = n.sibling, n = Gn(n, {
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
  function Vv(e, t, n, a, l, i, c, f) {
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
      ), t.memoizedState = ac, Oi(null, l));
    if (fa(t), lo(i)) {
      if (a = i.nextSibling && i.nextSibling.dataset, a) var v = a.dgst;
      return a = v, a !== "" && (l = Error(s(419)), l.stack = "", l.digest = a, pi({ value: l, source: null, stack: null })), Wu(
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
      if (a = Fe, a !== null && (l = Zo(
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
    return ao(i) ? (t.flags |= 192, t.child = e.child, null) : (e = c.treeContext, et = dn(i.nextSibling), vt = t, Ue = !0, aa = null, on = !1, e !== null && Jf(t, e), t = uc(
      t,
      l.children
    ), t.flags |= 134221824, t);
  }
  function mh(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), ju(e.return, t, n);
  }
  function ph(e) {
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
      return Ai(t, c), null;
    var f = (c & 2) !== 0;
    if (f ? (c = c & 1 | 2, t.flags |= 128) : c &= 1, Ai(t, c), l === "backwards" && e !== null ? (rc(e), pt(e, t, a, n), rc(e)) : pt(e, t, a, n), a = Ue ? mi : 0, !f && e !== null && (e.flags & 128) !== 0)
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
        n = ph(t.child), n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null, rc(t)), er(
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
        n = ph(t.child), n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), er(
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
  function gh(e, t, n) {
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
  function Gv(e, t, n) {
    switch (t.tag) {
      case 3:
        k(t, t.stateNode.containerInfo), ia(t, st, e.memoizedState.cache), Ia();
        break;
      case 27:
      case 5:
        Be(t);
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
          return a || (n & l) !== 0 ? hh(e, t, n) : (fa(t), e = Zn(
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
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), Ai(t, wt.current), a) break;
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
    return Zn(e, t, n);
  }
  function vh(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        ot = !0;
      else {
        if (!cc(e, n) && (t.flags & 128) === 0)
          return ot = !1, Gv(
            e,
            t,
            n
          );
        ot = (e.flags & 131072) !== 0;
      }
    else
      ot = !1, Ue && (t.flags & 1048576) !== 0 && Zf(t, mi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = Qa(t.elementType), t.type = e, typeof e == "function")
            gs(e) ? (a = Ja(e, a), t.tag = 1, t = fh(
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
              } else if (l === H) {
                t.tag = 10, t.type = e, t = gh(
                  null,
                  t,
                  n
                );
                break e;
              }
            }
            throw t = be(e) || e, Error(s(306, t, ""));
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
          if (k(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(s(387));
          a = t.pendingProps;
          var i = t.memoizedState;
          l = i.element, xs(e, t), Ti(t, a, null, n);
          var c = t.memoizedState;
          if (a = c.cache, ia(t, st, a), a !== i.cache && As(
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
              ), pi(l), t = dh(
                e,
                t,
                a,
                n
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, et = dn(e.firstChild), vt = t, Ue = !0, aa = null, on = !0, n = rd(
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
        return _l(e, t), e === null ? (n = Gm(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : Ue || (t.stateNode = Sm(
          t.type,
          t.pendingProps,
          J.current,
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
          J.current
        ), vt = t, on = !0, l = et, Ea(t.type) ? (io = l, et = dn(a.firstChild)) : et = l), pt(
          e,
          t,
          t.pendingProps.children,
          n
        ), _l(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ue && ((l = a = et) && (a = Hy(
          a,
          t.type,
          t.pendingProps,
          on
        ), a !== null ? (t.stateNode = a, vt = t, et = dn(a.firstChild), on = !1, l = !0) : l = !1), l || la(t)), Be(t), l = t.type, i = t.pendingProps, c = e !== null ? e.memoizedProps : null, a = i.children, $c(l, i) ? a = null : c !== null && $c(l, c) && (t.flags |= 32), t.memoizedState !== null && (l = qs(
          e,
          t,
          jv,
          null,
          null,
          n
        ), Yl._currentValue = l), _l(e, t), pt(e, t, a, n), t.child;
      case 6:
        return e === null && Ue && ((e = n = et) && (n = qy(
          n,
          t.pendingProps,
          on
        ), n !== null ? (t.stateNode = n, vt = t, et = null, e = !0) : e = !1), e || la(t)), null;
      case 13:
        return hh(e, t, n);
      case 4:
        return k(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = ka(
          t,
          null,
          a,
          n
        ) : pt(e, t, a, n), t.child;
      case 11:
        return lh(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return a = t.pendingProps, _l(e, t), pt(e, t, a, n), t.child;
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
        return gh(e, t, n);
      case 9:
        return l = t.type._context, a = t.pendingProps.children, Ga(t), l = Nt(l), a = a(l), t.flags |= 1, pt(e, t, a, n), t.child;
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
        return Bv(e, t, n);
      case 22:
        return rh(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return Ga(t), a = Nt(st), e === null ? (l = ws(), l === null && (l = Fe, i = Ns(), l.pooledCache = i, i.refCount++, i !== null && (l.pooledCacheLanes |= n), l = i), t.memoizedState = { parent: a, cache: l }, Cs(t), ia(t, st, l)) : ((e.lanes & n) !== 0 && (xs(e, t), Ti(t, null, null, n), Si()), l = e.memoizedState, i = t.memoizedState, l.parent !== a ? (l = { parent: a, cache: a }, t.memoizedState = l, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = l), ia(t, st, a)) : (a = i.cache, ia(t, st, a), a !== l.cache && As(
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
        }), a = t.pendingProps, a.name != null && a.name !== "auto" ? t.flags |= e === null ? 18882560 : 18874368 : Ue && xu(t), e !== null && e.memoizedProps.name !== a.name ? t.flags |= 4194816 : _l(e, t), pt(e, t, a.children, n), t.child;
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
          throw Ka = Hu, Os;
    } else e.flags &= -16777217;
  }
  function yh(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !km(t))
      if (Ph()) e.flags |= 8192;
      else
        throw Ka = Hu, Os;
  }
  function tr(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Qo() : 536870912, e.lanes |= t, Rl |= t);
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
  function Yv(e, t, n) {
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
        return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Qn(st), Ee(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (yl(t) ? Jn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ss())), tt(t), null;
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
        if ($e(t), n = J.current, l = t.type, e !== null && t.stateNode != null)
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
            var c = Ii(
              J.current
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
          if (e = J.current, yl(t)) {
            if (e = t.stateNode, n = t.memoizedProps, a = null, l = vt, l !== null)
              switch (l.tag) {
                case 27:
                case 5:
                  a = l.memoizedProps;
              }
            e[At] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || vm(e.nodeValue, n)), e || la(t, !0);
          } else
            e = Ii(e).createTextNode(
              a
            ), e[At] = t, t.stateNode = e;
        }
        return tt(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = yl(t), n !== null) {
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
          if (l = yl(t), a !== null && a.dehydrated !== null) {
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
        return Ee(), e === null && Qc(t.stateNode.containerInfo), t.flags |= 67108864, tt(t), null;
      case 10:
        return Qn(t.type), tt(t), null;
      case 19:
        if (Ms(t), a = t.memoizedState, a === null) return tt(t), null;
        if (l = (t.flags & 128) !== 0, i = a.rendering, i === null)
          if (l) Ci(a, !1);
          else {
            if (it !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (i = Bu(e), i !== null) {
                  for (t.flags |= 128, Ci(a, !1), e = i.updateQueue, t.updateQueue = e, tr(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    Qf(n, e), n = n.sibling;
                  return Ai(
                    t,
                    wt.current & 1 | 2
                  ), Ue && Yn(t, a.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && Qt() > hr && (t.flags |= 128, l = !0, Ci(a, !1), t.lanes = 4194304);
          }
        else {
          if (!l)
            if (e = Bu(i), e !== null) {
              if (t.flags |= 128, l = !0, e = e.updateQueue, t.updateQueue = e, tr(t, e), Ci(a, !0), a.tail === null && a.tailMode !== "collapsed" && a.tailMode !== "visible" && !i.alternate && !Ue)
                return tt(t), null;
            } else
              2 * Qt() - a.renderingStartTime > hr && n !== 536870912 && (t.flags |= 128, l = !0, Ci(a, !1), t.lanes = 4194304);
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
          return a.rendering = e, a.tail = e.sibling, a.renderingStartTime = Qt(), e.sibling = null, i = wt.current, i = l ? i & 1 | 2 : i & 1, a.tailMode === "visible" || a.tailMode === "collapsed" || !n || Ue ? Ai(t, i) : (n = i, Qe(_t, t), Qe(wt, n), jt === null && (jt = t)), Ue && Yn(t, a.treeForkCount), e;
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
  function Xv(e, t) {
    switch (bs(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Qn(st), Ee(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
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
        return Ee(), null;
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
        Qn(st), Ee();
        break;
      case 26:
      case 27:
      case 5:
        $e(t);
        break;
      case 4:
        Ee();
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
              var v = n, C = f;
              try {
                C();
              } catch (U) {
                ke(
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
      ke(t, t.return, U);
    }
  }
  function Eh(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        cd(t, n);
      } catch (a) {
        ke(e, e.return, a);
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
            (l.ref === null || l.ref.name !== i) && (l.ref = Cm(i)), a = l.ref;
            break;
          case 7:
            if (e.stateNode === null) {
              var c = new tn(e);
              p(
                e.child,
                !1,
                zy,
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
        zm(
          e.stateNode,
          t[n]
        );
  }
  function Th(e) {
    for (var t = e.return; t !== null && (dc(t) && zm(e.stateNode, t.stateNode), !fc(t)); )
      t = t.return;
  }
  function Ri(e) {
    for (var t = e.return; t !== null && (dc(t) && My(e.stateNode, t.stateNode), !fc(t)); )
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
      gy(a, e.type, n, t), a[qt] = t;
    } catch (l) {
      ke(e, e.return, l);
    }
  }
  function Ah(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ea(e.type) || e.tag === 4;
  }
  function pc(e) {
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
  function Nh(e) {
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
          var K;
          if (K = (e.flags & 4) === 0)
            if (U.clip) K = !0;
            else {
              K = C.rect;
              var _ = U.rect;
              K = K.y !== _.y || K.x !== _.x || K.height !== _.height || K.width !== _.width;
            }
          K && (e.flags |= 4), U.abs ? U = !C.abs : (C = C.rect, U = U.rect, U = C.height !== U.height || C.width !== U.width), U && (e.flags |= 32);
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
  var yt = !1, Xe = !1, Rn = !1, Tc = !1, jh = typeof WeakSet == "function" ? WeakSet : Set, bt = null, jn = !1, ji = !1, rr = !1, Ac = !1;
  function Qv(e, t, n) {
    if (e = e.containerInfo, Zc = Xl, e = Mf(e), cs(e)) {
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
            var f = 0, v = -1, C = -1, U = 0, K = 0, _ = e, D = null;
            t: for (; ; ) {
              for (var ce; _ !== a || i !== 0 && _.nodeType !== 3 || (v = f + i), _ !== c || l !== 0 && _.nodeType !== 3 || (C = f + l), _.nodeType === 3 && (f += _.nodeValue.length), (ce = _.firstChild) !== null; )
                D = _, _ = ce;
              for (; ; ) {
                if (_ === e) break t;
                if (D === a && ++U === i && (v = f), D === c && ++K === l && (C = f), (ce = _.nextSibling) !== null) break;
                _ = D, D = _.parentNode;
              }
              _ = ce;
            }
            a = v === -1 || C === -1 ? null : { start: v, end: C };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Jc = { focusedElem: e, selectionRange: a }, Xl = !1, n = (n & 335544064) === n, bt = t, t = n ? 9270 : 1024; bt !== null; ) {
      if (e = bt, n && (a = e.deletions, a !== null))
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
        a = e.child, (e.subtreeFlags & t) !== 0 && a !== null ? (a.return = e, bt = a) : (n && Ch(e), sr(n));
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
        a.return = t.return, bt = a;
        break;
      }
      bt = t.return;
    }
  }
  function Dh(e, t, n) {
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
            ke(n, n.return, c);
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
        Dn(e, n), a & 4 && Hh(e, n);
        break;
      case 13:
        Dn(e, n), a & 4 && qh(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = ay.bind(
          null,
          n
        ), Ly(e, n))));
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
          ke(e, e.return, v);
        }
        _c(e, t);
        break;
      case 6:
        try {
          e.stateNode.nodeValue = t ? "" : e.memoizedProps, Ve = !0;
        } catch (v) {
          ke(e, e.return, v);
        }
        break;
      case 18:
        try {
          var f = e.stateNode;
          t ? _m(f, !0) : _m(e.stateNode, !1);
        } catch (v) {
          ke(e, e.return, v);
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
        Kt.onCommitFiberUnmount(ei, n);
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
        Xe || Ot(n, t), Ri(n);
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
        Xe || Ot(n, t), Ri(n);
      case 6:
        if (n.tag === 6 && Ri(n), a = nt, l = Bt, nt = null, yn(
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
        Xe || (Ot(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && Sh(
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
  function Hh(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Ql(e);
      } catch (n) {
        ke(t, t.return, n);
      }
    }
  }
  function qh(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Ql(e);
      } catch (n) {
        ke(t, t.return, n);
      }
  }
  function Kv(e) {
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
    var n = Kv(e);
    t.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var l = ly.bind(null, e, a);
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
        zt(t, e, n), Mt(e), l & 4 && (ha(3, e, e.return), xi(3, e), ha(5, e, e.return));
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
                        a = l.getElementsByTagName("title")[0], (!a || a[ai] || a[At] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = l.createElement(t), l.head.insertBefore(
                          a,
                          l.querySelector("head > title")
                        )), Ct(a, t, n), a[At] = e, gt(a), t = a;
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
                        a = l.createElement(t), Ct(a, t, n), l.head.appendChild(a);
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
              e.stateNode = Xm(
                i,
                n,
                e.memoizedProps
              );
          else
            l !== n ? (l === null ? (t = a.stateNode, t === null || Xe || t.parentNode.removeChild(t)) : l.count--, n === null ? yt || co(i, e.type, e.stateNode) : Xm(i, n, e.memoizedProps)) : n === null && e.stateNode !== null && mc(
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
            sl(t, ""), Ve = !0;
          } catch (U) {
            ke(e, e.return, U);
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
            ke(e, e.return, U);
          }
        }
        break;
      case 3:
        if (Ve = !1, Nr = null, i = bn, bn = Bi(t.containerInfo), zt(t, e, n), bn = i, Mt(e), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Ql(t.containerInfo);
          } catch (U) {
            ke(e, e.return, U);
          }
        Tc && (Tc = !1, Ih(e)), Ve = !1;
        break;
      case 4:
        l = Rn, Rn = yt, a = lf(), i = bn, bn = Bi(
          e.stateNode.containerInfo
        ), zt(t, e, n), Mt(e), bn = i, Ve && ji && (rr = !0), Ve = a, Rn = l;
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
        var f = yt, v = Xe, C = Rn;
        yt = f || i, Rn = C || i, Xe = v || c, zt(t, e, n), Xe = v, Rn = C, yt = f, Mt(e), l & 8192 && (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, !i || a === null || c || yt || Xe || (t = c || Xe, n = yt, a = Xe, yt = i || yt, Xe = t, ma(e, 2), yt = n, Xe = a), !i && Rn || Nc(e, i)), l & 4 && (t = e.updateQueue, t !== null && (n = t.retryQueue, n !== null && (t.retryQueue = null, cr(e, n))));
        break;
      case 19:
        zt(t, e, n), Mt(e), l & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, cr(e, t)));
        break;
      case 30:
        l & 512 && (Xe || a === null || Ot(a, a.return)), l = lf(), i = ji, c = (n & 335544064) === n, f = e.memoizedProps, ji = c && Vn(
          f.default,
          f.update
        ) !== "none", zt(t, e, n), Mt(e), c && a !== null && Ve && (e.flags |= 4), ji = i, Ve = l;
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
            var f = n.stateNode, v = pc(e);
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
            var U = pc(e);
            ar(
              e,
              U,
              C,
              c
            );
            break;
          case 3:
          case 4:
            var K = n.stateNode.containerInfo, _ = pc(e);
            gc(
              e,
              _,
              K,
              c
            );
            break;
          default:
            throw Error(s(161));
        }
      } catch (D) {
        ke(e, e.return, D);
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
          Ot(n, n.return);
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
          Ot(n, n.return), n.tag !== 5 && n.tag !== 27 || Ri(n), ma(
            n,
            a
          );
          break;
        case 6:
          Ri(n);
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
            } catch (U) {
              ke(a, a.return, U);
            }
          if (a = i, l = a.updateQueue, l !== null) {
            var v = a.stateNode;
            try {
              var C = l.shared.hiddenCallbacks;
              if (C !== null)
                for (l.shared.hiddenCallbacks = null, l = 0; l < C.length; l++)
                  sd(C[l], v);
            } catch (U) {
              ke(a, a.return, U);
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
          v = i.stateNode, i.memoizedState !== null || v === null || yt || co(
            Bi(v.ownerDocument),
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
          ), f && c & 4 && Hh(l, i);
          break;
        case 13:
          En(
            l,
            i,
            n
          ), f && c & 4 && qh(l, i);
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
        ) : Di(
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
          ), xi(8, c);
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
          ) : Di(
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
  function Di(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, a = t, l = a.flags;
        switch (a.tag) {
          case 22:
            Di(n, a), l & 2048 && wc(
              a.alternate,
              a
            );
            break;
          case 24:
            Di(n, a), l & 2048 && Oc(a.alternate, a);
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
        ), e.flags & $a && (e.memoizedState !== null ? Py(
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
  function Yh(e) {
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
          bt = a, Qh(
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
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, or(e)) : Ui(e);
        break;
      default:
        Ui(e);
    }
  }
  function or(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          bt = a, Qh(
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
          if (zh(a), a === n) {
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
  var kv = {
    getCacheForType: function(e) {
      var t = Nt(st), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return Nt(st).controller.signal;
    }
  }, Zv = typeof WeakMap == "function" ? WeakMap : Map, Ge = 0, Fe = null, ze = null, He = 0, Ke = 0, Pt = null, pa = !1, xl = !1, Cc = !1, $n = 0, it = 0, ga = 0, Pa = 0, fr = 0, Wt = 0, Rl = 0, zi = null, Vt = null, xc = !1, dr = 0, Kh = 0, hr = 1 / 0, mr = null, va = null, at = 0, Sn = null, Wa = null, Un = 0, Rc = 0, jc = null, kh = null, jl = null, Dl = null, Ul = null, Mi = 0, pr = null;
  function en() {
    return (Ge & 2) !== 0 && He !== 0 ? He & -He : ee.T !== null ? Vc() : Jo();
  }
  function Zh() {
    if (Wt === 0)
      if ((He & 536870912) === 0 || Ue) {
        var e = cu;
        cu <<= 1, (cu & 3932160) === 0 && (cu = 262144), Wt = e;
      } else Wt = 536870912;
    return e = _t.current, e !== null && (e.flags |= 32), Wt;
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
      He,
      Wt,
      !1
    )), ni(e, n), ((Ge & 2) === 0 || e !== Fe) && (e === Fe && ((Ge & 2) === 0 && (Pa |= n), it === 4 && ya(
      e,
      He,
      Wt,
      !1
    )), zn(e));
  }
  function Jh(e, t, n) {
    if ((Ge & 6) !== 0) throw Error(s(327));
    var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || ti(e, t), l = a ? Fv(e, t) : Uc(e, t, !0), i = a;
    do {
      if (l === 0) {
        xl && !a && ya(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, i && !Jv(n)) {
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
              l = zi;
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
  function $h(e, t, n, a, l, i, c, f, v, C, U, K, _, D) {
    e.timeoutHandle = -1;
    var ce = t.subtreeFlags, ve = (i & 335544064) === i;
    if (K = null, (ve || ce & 8192 || (ce & 16785408) === 16785408) && (K = {
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
      K
    ), ve && (ce = K, ve = e.containerInfo, ve = (ve.nodeType === 9 ? ve : ve.ownerDocument).__reactViewTransition, ve != null && (ce.count++, ce.waitingForViewTransition = !0, ce = Yi.bind(ce), ve.finished.then(ce, ce))), ce = (i & 62914560) === i ? dr - Qt() : (i & 4194048) === i ? Kh - Qt() : 0, ce = Wy(
      K,
      ce
    ), ce !== null)) {
      Un = i, e.cancelPendingCommit = ce(
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
          K,
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
      K
    );
  }
  function Jv(e) {
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
      var i = 31 - kt(l), c = 1 << i;
      a[i] = -1, l &= ~c;
    }
    n !== 0 && Ko(e, n, t);
  }
  function gr() {
    return (Ge & 6) === 0 ? (Hi(0), !1) : !0;
  }
  function Dc() {
    if (ze !== null) {
      if (Ke === 0)
        var e = ze.return;
      else
        e = ze, Xn = Ba = null, Bs(e), Sl = null, bi = 0, e = ze;
      for (; e !== null; )
        bh(e.alternate, e), e = e.return;
      ze = null;
    }
  }
  function Ml(e, t) {
    var n = e.timeoutHandle;
    return n !== -1 && (e.timeoutHandle = -1, by(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Un = 0, Dc(), Fe = e, ze = n = Gn(e.current, null), He = t, Ke = 0, Pt = null, pa = !1, xl = ti(e, t), Cc = !1, Rl = Wt = fr = Pa = ga = it = 0, Vt = zi = null, xc = !1, $n = Xo(e, t), Nu(), n;
  }
  function Fh(e, t) {
    Re = null, ee.H = Ju, t === El || t === Mu ? (t = ld(), Ke = 3) : t === Os ? (t = ld(), Ke = 4) : Ke = t === tc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Pt = t, ze === null && (it = 1, $u(
      e,
      rn(t, e.current)
    ));
  }
  function Ph() {
    var e = _t.current;
    return e === null ? !0 : (He & 4194048) === He ? jt === null : (He & 62914560) === He || (He & 536870912) !== 0 ? e === jt : !1;
  }
  function Wh() {
    var e = ee.H;
    return ee.H = Ju, e === null ? Ju : e;
  }
  function em() {
    var e = ee.A;
    return ee.A = kv, e;
  }
  function vr() {
    it = 4, pa || (He & 4194048) !== He && _t.current !== null || (xl = !0), (ga & 134217727) === 0 && (Pa & 134217727) === 0 || Fe === null || ya(
      Fe,
      He,
      Wt,
      !1
    );
  }
  function Uc(e, t, n) {
    var a = Ge;
    Ge |= 2;
    var l = Wh(), i = em();
    (Fe !== e || He !== t) && (mr = null, Ml(e, t)), t = !1;
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
              _t.current === null && (t = !0);
              var C = Ke;
              if (Ke = 0, Pt = null, Hl(e, f, v, C), n && xl) {
                c = 0;
                break e;
              }
              break;
            default:
              C = Ke, Ke = 0, Pt = null, Hl(e, f, v, C);
          }
        }
        $v(), c = it;
        break;
      } catch (U) {
        Fh(e, U);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Xn = Ba = null, Ge = a, ee.H = l, ee.A = i, ze === null && (Fe = null, He = 0, Nu()), c;
  }
  function $v() {
    for (; ze !== null; ) tm(ze);
  }
  function Fv(e, t) {
    var n = Ge;
    Ge |= 2;
    var a = Wh(), l = em();
    Fe !== e || He !== t ? (mr = null, hr = Qt() + 500, Ml(e, t)) : xl = ti(
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
              Ke = 0, Pt = null, Hl(e, t, i, 1);
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
              nd(i) ? (Ke = 0, Pt = null, nm(t)) : (Ke = 0, Pt = null, Hl(e, t, i, 7));
              break;
            case 5:
              var c = null;
              switch (ze.tag) {
                case 26:
                  c = ze.memoizedState;
                case 5:
                case 27:
                  var f = ze;
                  if (c ? km(c) : f.stateNode.complete) {
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
              Ke = 0, Pt = null, Hl(e, t, i, 5);
              break;
            case 6:
              Ke = 0, Pt = null, Hl(e, t, i, 6);
              break;
            case 8:
              Dc(), it = 6;
              break e;
            default:
              throw Error(s(462));
          }
        }
        Pv();
        break;
      } catch (U) {
        Fh(e, U);
      }
    while (!0);
    return Xn = Ba = null, ee.H = a, ee.A = l, Ge = n, ze !== null ? 0 : (Fe = null, He = 0, Nu(), it);
  }
  function Pv() {
    for (; ze !== null && !pg(); )
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
          He
        );
        break;
      case 11:
        t = oh(
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
        bh(n, t), t = ze = Qf(t, $n), t = vh(n, t, $n);
    }
    e.memoizedProps = e.pendingProps, t === null ? yr(e) : ze = t;
  }
  function Hl(e, t, n, a) {
    Xn = Ba = null, Bs(t), Sl = null, bi = 0;
    var l = t.return;
    try {
      if (Iv(
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
    t.flags & 32768 ? (Ue || a === 1 ? e = !0 : xl || (He & 536870912) !== 0 ? e = !1 : (pa = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = _t.current, a !== null && a.tag === 13 && (a.flags |= 16384))), am(t, e)) : yr(t);
  }
  function yr(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        am(
          t,
          pa
        );
        return;
      }
      e = t.return;
      var n = Yv(
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
      var n = Xv(e.alternate, e);
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
  function lm(e, t, n, a, l, i, c, f, v, C, U, K) {
    e.cancelPendingCommit = null;
    do
      br();
    while (at !== 0);
    if ((Ge & 6) !== 0) throw Error(s(327));
    if (t !== null) {
      if (t === e.current) throw Error(s(177));
      e === Fe && (ze = Fe = null, He = 0), Wa = t, Sn = e, Un = n, jc = l, kh = a, Wv(
        e,
        t,
        n,
        c,
        f,
        v,
        K
      );
    }
  }
  function Wv(e, t, n, a, l, i, c) {
    var f = t.lanes | t.childLanes;
    if (Rc = f, f |= ms, _g(
      e,
      n,
      f,
      a,
      l,
      i
    ), Dl = null, (n & 335544064) === n ? (Ul = Ov(e), a = 10262) : (Ul = null, a = 10256), (t.subtreeFlags & a) !== 0 || (t.flags & a) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, iy(ru, function() {
      return qc(), null;
    })) : (e.callbackNode = null, e.callbackPriority = 0), lr = !1, a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
      a = ee.T, ee.T = null, l = de.p, de.p = 2, i = Ge, Ge |= 4;
      try {
        Qv(e, t, n);
      } finally {
        Ge = i, de.p = l, ee.T = a;
      }
    }
    at = 1, lr ? jl = _y(
      c,
      e.containerInfo,
      Ul,
      zc,
      Mc,
      ty,
      Hc,
      qc,
      ey
    ) : (zc(), Mc(), Hc());
  }
  function ey(e) {
    if (at !== 0) {
      var t = Sn.onRecoverableError;
      t(e, { componentStack: null });
    }
  }
  function ty() {
    at === 3 && (at = 0, Bh(Wa, Sn), at = 4);
  }
  function zc() {
    if (at === 1) {
      at = 0;
      var e = Sn, t = Wa, n = Un, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = ee.T, ee.T = null;
        var l = de.p;
        de.p = 2;
        var i = Ge;
        Ge |= 4;
        try {
          ji = rr = !1, Lh(t, e, n), n = Jc;
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
                var K = f.ownerDocument || document, _ = K && K.defaultView || window;
                if (_.getSelection) {
                  var D = _.getSelection(), ce = f.textContent.length, ve = Math.min(v.start, ce), je = v.end === void 0 ? ve : Math.min(v.end, ce);
                  !D.extend && ve > je && (c = je, je = ve, ve = c);
                  var w = Uf(
                    f,
                    ve
                  ), T = Uf(
                    f,
                    je
                  );
                  if (w && T && (D.rangeCount !== 1 || D.anchorNode !== w.node || D.anchorOffset !== w.offset || D.focusNode !== T.node || D.focusOffset !== T.offset)) {
                    var R = K.createRange();
                    R.setStart(w.node, w.offset), D.removeAllRanges(), ve > je ? (D.addRange(R), D.extend(T.node, T.offset)) : (R.setEnd(T.node, T.offset), D.addRange(R));
                  }
                }
              }
            }
            for (K = [], D = f; D = D.parentNode; )
              D.nodeType === 1 && K.push({
                element: D,
                left: D.scrollLeft,
                top: D.scrollTop
              });
            for (typeof f.focus == "function" && f.focus(), f = 0; f < K.length; f++) {
              var Q = K[f];
              Q.element.scrollLeft = Q.left, Q.element.scrollTop = Q.top;
            }
          }
          Xl = !!Zc, Jc = Zc = null;
        } finally {
          Ge = i, de.p = l, ee.T = a;
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
        var a = de.p;
        de.p = 2;
        var l = Ge;
        Ge |= 4;
        try {
          Dh(e, t.alternate, t);
        } finally {
          Ge = l, de.p = a, ee.T = n;
        }
      }
      at = 3;
    }
  }
  function Hc() {
    if (at === 4 || at === 3) {
      at = 0;
      var e = jl;
      jl = null, gg();
      var t = Sn, n = Wa, a = Un, l = kh, i = (a & 335544064) === a ? 10262 : 10256;
      if ((n.subtreeFlags & i) !== 0 || (n.flags & i) !== 0 ? at = 5 : (at = 0, Wa = Sn = null, im(t, t.pendingLanes)), i = t.pendingLanes, i === 0 && (va = null), Qr(a), n = n.stateNode, Kt && typeof Kt.onCommitFiberRoot == "function")
        try {
          Kt.onCommitFiberRoot(
            ei,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        n = ee.T, i = de.p, de.p = 2, ee.T = null;
        try {
          for (var c = t.onRecoverableError, f = 0; f < l.length; f++) {
            var v = l[f];
            c(v.value, {
              componentStack: v.stack
            });
          }
        } finally {
          ee.T = n, de.p = i;
        }
      }
      if (l = Dl, c = Ul, Ul = null, l !== null && (Dl = null, c === null && (c = []), e !== null))
        for (v = 0; v < l.length; v++)
          n = (0, l[v])(
            c
          ), n !== void 0 && e.finished.finally(n);
      (Un & 3) !== 0 && br(), zn(t), i = t.pendingLanes, (a & 261930) !== 0 && (i & 42) !== 0 ? t === pr ? Mi++ : (Mi = 0, pr = t) : (Mi = 0, pr = null), Hi(0);
    }
  }
  function im(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, gi(t)));
  }
  function br() {
    return jl !== null && (jl.skipTransition(), jl = null), zc(), Mc(), Hc(), qc();
  }
  function qc() {
    if (at !== 5) return !1;
    var e = Sn, t = Rc;
    Rc = 0;
    var n = Qr(Un), a = ee.T, l = de.p;
    try {
      de.p = 32 > n ? 32 : n, ee.T = null, n = jc, jc = null;
      var i = Sn, c = Un;
      if (at = 0, Wa = Sn = null, Un = 0, (Ge & 6) !== 0) throw Error(s(331));
      var f = Ge;
      if (Ge |= 4, Xh(i.current), Vh(
        i,
        i.current,
        c,
        n
      ), Ge = f, Hi(0, !1), Kt && typeof Kt.onPostCommitFiberRoot == "function")
        try {
          Kt.onPostCommitFiberRoot(ei, i);
        } catch {
        }
      return !0;
    } finally {
      de.p = l, ee.T = a, im(e, t);
    }
  }
  function um(e, t, n) {
    t = rn(n, t), t = ec(e.stateNode, t, 2), e = ca(e, t, 2), e !== null && (ni(e, 2), zn(e));
  }
  function ke(e, t, n) {
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
            ), ni(a, 2), zn(a));
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
    l.has(n) || (Cc = !0, l.add(n), e = ny.bind(null, e, t, n), t.then(e, e));
  }
  function ny(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Fe === e && (He & n) === n && ((it === 4 || it === 3 && (He & 62914560) === He && 300 > Qt() - dr) && (Ge & 2) === 0 ? Ml(e, 0) : fr |= n, Rl === He && (Rl = 0)), zn(e);
  }
  function rm(e, t) {
    t === 0 && (t = Qo()), e = qa(e, t), e !== null && (ni(e, t), zn(e));
  }
  function ay(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), rm(e, n);
  }
  function ly(e, t) {
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
  function iy(e, t) {
    return Vr(e, t);
  }
  var ql = null, Ll = null, Ic = !1, Er = !1, Bc = !1, ba = 0;
  function zn(e) {
    e !== Ll && e.next === null && (Ll === null ? ql = Ll = e : Ll = Ll.next = e), Er = !0, Ic || (Ic = !0, ry());
  }
  function Hi(e, t) {
    if (!Bc && Er) {
      Bc = !0;
      do
        for (var n = !1, a = ql; a !== null; ) {
          if (e !== 0) {
            var l = a.pendingLanes;
            if (l === 0) var i = 0;
            else {
              var c = a.suspendedLanes, f = a.pingedLanes;
              i = (1 << 31 - kt(42 | e) + 1) - 1, i &= l & ~(c & ~f), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (n = !0, fm(a, i));
          } else
            i = He, i = fu(
              a,
              a === Fe ? i : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (i & 3) === 0 || ti(a, i) || (n = !0, fm(a, i));
          a = a.next;
        }
      while (n);
      Bc = !1;
    }
  }
  function uy() {
    sm();
  }
  function sm() {
    Er = Ic = !1;
    var e = 0;
    ba !== 0 && yy() && (e = ba);
    for (var t = Qt(), n = null, a = ql; a !== null; ) {
      var l = a.next, i = cm(a, t);
      i === 0 ? (a.next = null, n === null ? ql = l : n.next = l, l === null && (Ll = n)) : (n = a, (e !== 0 || (i & 3) !== 0) && (Er = !0)), a = l;
    }
    at !== 0 && at !== 5 || Hi(e), ba !== 0 && (ba = 0);
  }
  function cm(e, t) {
    for (var n = e.suspendedLanes, a = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var c = 31 - kt(i), f = 1 << c, v = l[c];
      v === -1 ? ((f & n) === 0 || (f & a) !== 0) && (l[c] = Ng(f, t)) : v <= t && (e.expiredLanes |= f), i &= ~f;
    }
    if (t = Fe, n = He, n = fu(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, n === 0 || e === t && (Ke === 2 || Ke === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && Gr(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || ti(e, n)) {
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
    var a = He;
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
  function ry() {
    Ey(function() {
      (Ge & 6) !== 0 ? Vr(
        Vo,
        uy
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
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : gu(e);
  }
  function sy(e, t, n, a, l) {
    if (t === "submit" && n && n.stateNode === l) {
      var i = dm(
        (l[qt] || null).action
      ), c = a.submitter;
      c && (t = (t = c[qt] || null) ? dm(t.formAction) : c.getAttribute("formAction"), t !== null && (i = t, c = null));
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
    var Yc = hs[Gc], cy = Yc.toLowerCase(), oy = Yc[0].toUpperCase() + Yc.slice(1);
    vn(
      cy,
      "on" + oy
    );
  }
  vn(Lf, "onAnimationEnd"), vn(If, "onAnimationIteration"), vn(Bf, "onAnimationStart"), vn("dblclick", "onDoubleClick"), vn("focusin", "onFocus"), vn("focusout", "onBlur"), vn(bv, "onTransitionRun"), vn(Ev, "onTransitionStart"), vn(Sv, "onTransitionCancel"), vn(Vf, "onTransitionEnd"), ul("onMouseEnter", ["mouseout", "mouseover"]), ul("onMouseLeave", ["mouseout", "mouseover"]), ul("onPointerEnter", ["pointerout", "pointerover"]), ul("onPointerLeave", ["pointerout", "pointerover"]), za(
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
  ), fy = new Set(
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
        n !== "selectionchange" && (fy.has(n) || Xc(n, !1, e), Xc(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Sr] || (t[Sr] = !0, Xc("selectionchange", !1, t));
    }
  }
  function mm(e, t, n, a) {
    switch (ap(t)) {
      case 2:
        var l = a0;
        break;
      case 8:
        l = l0;
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
      var C = i, U = Fr(n), K = [];
      e: {
        var _ = Gf.get(e);
        if (_ !== void 0) {
          var D = Eu, ce = e;
          switch (e) {
            case "keypress":
              if (yu(n) === 0) break e;
            case "keydown":
            case "keyup":
              D = Jg;
              break;
            case "focusin":
              ce = "focus", D = as;
              break;
            case "focusout":
              ce = "blur", D = as;
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
              D = qg;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              D = ev;
              break;
            case Lf:
            case If:
            case Bf:
              D = Bg;
              break;
            case Vf:
              D = nv;
              break;
            case "scroll":
            case "scrollend":
              D = Mg;
              break;
            case "wheel":
              D = lv;
              break;
            case "copy":
            case "cut":
            case "paste":
              D = Gg;
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
              D = Pg;
              break;
            case "toggle":
            case "beforetoggle":
              D = uv;
          }
          var ve = (t & 4) !== 0, je = !ve && (e === "scroll" || e === "scrollend"), w = ve ? _ !== null ? _ + "Capture" : null : _;
          ve = [];
          for (var T = C, R; T !== null; ) {
            var Q = T;
            if (R = Q.stateNode, Q = Q.tag, Q !== 5 && Q !== 26 && Q !== 27 || R === null || w === null || (Q = ii(T, w), Q != null && ve.push(
              Li(T, Q, R)
            )), je) break;
            T = T.return;
          }
          0 < ve.length && (_ = new D(
            _,
            ce,
            null,
            n,
            U
          ), K.push({ event: _, listeners: ve }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (D = e === "mouseover" || e === "pointerover", _ = e === "mouseout" || e === "pointerout", D && n !== $r && (ce = n.relatedTarget || n.fromElement) && (Ua(ce) || ce[al]))
            break e;
          (_ || D) && (ce = U.window === U ? U : (D = U.ownerDocument) ? D.defaultView || D.parentWindow : window, _ ? (D = n.relatedTarget || n.toElement, _ = C, D = D ? Ua(D) : null, D !== null && (je = m(D), ve = D.tag, D !== je || ve !== 5 && ve !== 27 && ve !== 6) && (D = null)) : (_ = null, D = C), _ !== D && (ve = vf, Q = "onMouseLeave", w = "onMouseEnter", T = "mouse", (e === "pointerout" || e === "pointerover") && (ve = bf, Q = "onPointerLeave", w = "onPointerEnter", T = "pointer"), je = _ == null ? ce : li(_), R = D == null ? ce : li(D), ce = new ve(
            Q,
            T + "leave",
            _,
            n,
            U
          ), ce.target = je, ce.relatedTarget = R, Q = null, Ua(U) === C && (ve = new ve(
            w,
            T + "enter",
            D,
            n,
            U
          ), ve.target = R, ve.relatedTarget = je, Q = ve), je = Q, ve = _ && D ? ne(
            _,
            D,
            dy
          ) : null, _ !== null && pm(
            K,
            ce,
            _,
            ve,
            !1
          ), D !== null && je !== null && pm(
            K,
            je,
            D,
            ve,
            !0
          )));
        }
        e: {
          if (_ = C ? li(C) : window, D = _.nodeName && _.nodeName.toLowerCase(), D === "select" || D === "input" && _.type === "file")
            var pe = Of;
          else if (_f(_))
            if (Cf)
              pe = gv;
            else {
              pe = mv;
              var qe = hv;
            }
          else
            D = _.nodeName, !D || D.toLowerCase() !== "input" || _.type !== "checkbox" && _.type !== "radio" ? C && Jr(C.elementType) && (pe = Of) : pe = pv;
          if (pe && (pe = pe(e, C))) {
            wf(
              K,
              pe,
              n,
              U
            );
            break e;
          }
          qe && qe(e, _, C);
        }
        switch (qe = C ? li(C) : window, e) {
          case "focusin":
            (_f(qe) || qe.contentEditable === "true") && (dl = qe, os = C, hi = null);
            break;
          case "focusout":
            hi = os = dl = null;
            break;
          case "mousedown":
            fs = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            fs = !1, Hf(K, n, U);
            break;
          case "selectionchange":
            if (yv) break;
          case "keydown":
          case "keyup":
            Hf(K, n, U);
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
        _e && (Ef && n.locale !== "ko" && (fl || _e !== "onCompositionStart" ? _e === "onCompositionEnd" && fl && (Ae = pf()) : (ea = U, es = "value" in ea ? ea.value : ea.textContent, fl = !0)), qe = Tr(C, _e), 0 < qe.length && (_e = new yf(
          _e,
          e,
          null,
          n,
          U
        ), K.push({ event: _e, listeners: qe }), Ae ? _e.data = Ae : (Ae = Nf(n), Ae !== null && (_e.data = Ae)))), (Ae = sv ? cv(e, n) : ov(e, n)) && (_e = Tr(C, "onBeforeInput"), 0 < _e.length && (qe = new yf(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          U
        ), K.push({
          event: qe,
          listeners: _e
        }), qe.data = Ae)), sy(
          K,
          e,
          C,
          n,
          U
        );
      }
      hm(K, t);
    });
  }
  function Li(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Tr(e, t) {
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
  function dy(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function pm(e, t, n, a, l) {
    for (var i = t._reactName, c = []; n !== null && n !== a; ) {
      var f = n, v = f.alternate, C = f.stateNode;
      if (f = f.tag, v !== null && v === a) break;
      f !== 5 && f !== 26 && f !== 27 || C === null || (v = C, l ? (C = ii(n, i), C != null && c.unshift(
        Li(n, C, v)
      )) : l || (C = ii(n, i), C != null && c.push(
        Li(n, C, v)
      ))), n = n.return;
    }
    c.length !== 0 && e.push({ event: t, listeners: c });
  }
  var hy = /\r\n?/g, my = /\u0000|\uFFFD/g;
  function gm(e) {
    return (typeof e == "string" ? e : "" + e).replace(hy, `
`).replace(my, "");
  }
  function vm(e, t) {
    return t = gm(t), gm(e) === t;
  }
  function Ze(e, t, n, a, l, i) {
    switch (n) {
      case "children":
        if (typeof a == "string")
          t === "body" || t === "textarea" && a === "" || sl(e, a);
        else if (typeof a == "number" || typeof a == "bigint")
          t !== "body" && sl(e, "" + a);
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
        df(e, a, i);
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
          n = Ug.get(n) || n, mu(e, n, a);
        else return;
    }
    Ve = !0;
  }
  function kc(e, t, n, a, l, i) {
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
                  Ze(e, t, a, U, n, null);
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
                Ze(e, t, l, f, n, null);
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
                Ze(e, t, c, f, n, null);
            }
        of(e, a, l, i);
        return;
      case "option":
        for (v in n)
          n.hasOwnProperty(v) && (a = n[v], a != null) && (v === "selected" ? e.selected = a && typeof a != "function" && typeof a != "symbol" : Ze(e, t, v, a, n, null));
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
                Ze(e, t, C, a, n, null);
            }
        return;
      default:
        if (Jr(t)) {
          for (U in n)
            n.hasOwnProperty(U) && (a = n[U], a !== void 0 && kc(
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
      n.hasOwnProperty(f) && (a = n[f], a != null && Ze(e, t, f, a, n, null));
  }
  var py = {};
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
          var K = n[D];
          if (n.hasOwnProperty(D) && K != null)
            switch (D) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                v = K;
              default:
                a.hasOwnProperty(D) || Ze(e, t, D, null, a, K);
            }
        }
        for (var _ in a) {
          var D = a[_];
          if (K = n[_], a.hasOwnProperty(_) && (D != null || K != null))
            switch (_) {
              case "type":
                D !== K && (Ve = !0), i = D;
                break;
              case "name":
                D !== K && (Ve = !0), l = D;
                break;
              case "checked":
                D !== K && (Ve = !0), C = D;
                break;
              case "defaultChecked":
                D !== K && (Ve = !0), U = D;
                break;
              case "value":
                D !== K && (Ve = !0), c = D;
                break;
              case "defaultValue":
                D !== K && (Ve = !0), f = D;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (D != null)
                  throw Error(s(137, t));
                break;
              default:
                D !== K && Ze(
                  e,
                  t,
                  _,
                  D,
                  a,
                  K
                );
            }
        }
        kr(
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
                a.hasOwnProperty(i) || Ze(
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
                i !== v && Ze(
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
                Ze(e, t, f, null, a, l);
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
                l !== i && Ze(e, t, c, l, a, i);
            }
        cf(e, _, D);
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
        for (v in a)
          _ = a[v], D = n[v], a.hasOwnProperty(v) && _ !== D && (_ != null || D != null) && (v === "selected" ? (_ !== D && (Ve = !0), e.selected = _ && typeof _ != "function" && typeof _ != "symbol") : Ze(
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
        for (var ve in n)
          _ = n[ve], n.hasOwnProperty(ve) && _ != null && !a.hasOwnProperty(ve) && Ze(e, t, ve, null, a, _);
        for (C in a)
          if (_ = a[C], D = n[C], a.hasOwnProperty(C) && _ !== D && (_ != null || D != null))
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
                  D
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
          for (U in a)
            _ = a[U], D = n[U], !a.hasOwnProperty(U) || _ === D || _ === void 0 && D === void 0 || kc(
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
      _ = n[w], n.hasOwnProperty(w) && _ != null && !a.hasOwnProperty(w) && Ze(e, t, w, null, a, _);
    for (K in a)
      _ = a[K], D = n[K], !a.hasOwnProperty(K) || _ === D || _ == null && D == null || Ze(e, t, K, _, a, D);
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
  function vy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var l = n[a], i = l.transferSize, c = l.initiatorType, f = l.duration;
        if (i && f && ym(c)) {
          for (c = 0, f = l.responseEnd, a += 1; a < n.length; a++) {
            var v = n[a], C = v.startTime;
            if (C > f) break;
            var U = v.transferSize, K = v.initiatorType;
            U && ym(K) && (v = v.responseEnd, c += U * (v < f ? 1 : (f - C) / (v - C)));
          }
          if (--a, t += 8 * (i + c) / (l.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Zc = null, Jc = null;
  function Ii(e) {
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
    return n = Ii(
      n
    ).createElement(e), n[At] = a, n[qt] = t, Ct(n, e, t), gt(n), n;
  }
  function $c(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Fc = null;
  function yy() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Fc ? !1 : (Fc = e, !0) : (Fc = null, !1);
  }
  var Pc = typeof setTimeout == "function" ? setTimeout : void 0, by = typeof clearTimeout == "function" ? clearTimeout : void 0, Tm = typeof Promise == "function" ? Promise : void 0, Am = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Pc, Ey = typeof queueMicrotask == "function" ? queueMicrotask : typeof Tm < "u" ? function(e) {
    return Tm.resolve(null).then(e).catch(Sy);
  } : Pc;
  function Sy(e) {
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
            i[ai] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && i.rel.toLowerCase() === "stylesheet" || n.removeChild(i), i = c;
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
  function Ty(e, t, n) {
    return n = n.ownerDocument.defaultView, {
      rect: e,
      abs: t.position === "absolute" || t.position === "fixed",
      clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
      view: 0 <= e.bottom && 0 <= e.right && e.top <= n.innerHeight && e.left <= n.innerWidth
    };
  }
  function Wc(e) {
    var t = e.getBoundingClientRect(), n = getComputedStyle(e);
    return Ty(t, n, e);
  }
  function Ay(e) {
    return e.documentElement.clientHeight;
  }
  function Ny(e) {
    this.addEventListener("load", e), this.addEventListener("error", e);
  }
  function _y(e, t, n, a, l, i, c, f, v) {
    var C = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var U = C.startViewTransition({
        update: function() {
          var _ = C.defaultView, D = _.navigation && _.navigation.transition, ce = C.fonts.status;
          a();
          var ve = [];
          if (ce === "loaded" && (Ay(C), C.fonts.status === "loading" && ve.push(C.fonts.ready)), ce = ve.length, e !== null)
            for (var je = e.suspenseyImages, w = 0, T = 0; T < je.length; T++) {
              var R = je[T];
              if (!R.complete) {
                var Q = R.getBoundingClientRect();
                if (0 < Q.bottom && 0 < Q.right && Q.top < _.innerHeight && Q.left < _.innerWidth) {
                  if (w += Zm(R), w > _r) {
                    ve.length = ce;
                    break;
                  }
                  R = new Promise(
                    Ny.bind(R)
                  ), ve.push(R);
                }
              }
            }
          if (0 < ve.length)
            return _ = Promise.race([
              Promise.all(ve),
              new Promise(function(pe) {
                return setTimeout(pe, 500);
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
      var K = [];
      return U.ready.then(
        function() {
          for (var _ = C.documentElement.getAnimations({
            subtree: !0
          }), D = 0; D < _.length; D++) {
            var ce = _[D], ve = ce.effect, je = ve.pseudoElement;
            if (je != null && je.startsWith("::view-transition")) {
              K.push(ce), ce = ve.getKeyframes();
              for (var w = je = void 0, T = !0, R = 0; R < ce.length; R++) {
                var Q = ce[R], pe = Q.width;
                if (je === void 0) je = pe;
                else if (je !== pe) {
                  T = !1;
                  break;
                }
                if (pe = Q.height, w === void 0) w = pe;
                else if (w !== pe) {
                  T = !1;
                  break;
                }
                delete Q.width, delete Q.height, Q.transform === "none" && delete Q.transform;
              }
              T && je !== void 0 && w !== void 0 && (ve.setKeyframes(ce), T = getComputedStyle(
                ve.target,
                ve.pseudoElement
              ), T.width !== je || T.height !== w) && (T = ce[0], T.width = je, T.height = w, T = ce[ce.length - 1], T.width = je, T.height = w, ve.setKeyframes(ce));
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
        for (var _ = 0; _ < K.length; _++)
          K[_].cancel();
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
        }), p(
          this._fragmentFiber.child,
          !1,
          wy,
          e,
          f,
          a
        );
      }
      this._eventListeners = i;
    }
  };
  function wy(e, t, n, a) {
    return L(e).addEventListener(
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
      l = Il(l.optionsOrUseCapture), p(
        this._fragmentFiber.child,
        !1,
        Oy,
        e,
        n,
        l
      ), a.splice(t, 1), i !== null && i();
    }
  };
  function Oy(e, t, n, a) {
    return L(e).removeEventListener(
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
    var t = I(
      this._fragmentFiber
    );
    if (t === null) return !0;
    t = L(t);
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
    p(
      this._fragmentFiber.child,
      !0,
      jm,
      e,
      void 0,
      void 0
    );
  };
  function jm(e, t) {
    return e.tag === 6 ? !1 : (e = L(e), Iy(e, t));
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
    for (var n = t.length - 1; 0 <= n && !jm(t[n], e); n--) ;
  };
  function eo(e, t) {
    return t.push(e), !1;
  }
  tn.prototype.blur = function() {
    var e = I(
      this._fragmentFiber
    );
    e !== null && (e = L(e), e = Ii(e).activeElement, e !== null && p(
      this._fragmentFiber.child,
      !1,
      Cy,
      e,
      void 0,
      void 0
    ));
  };
  function Cy(e, t) {
    return e.tag === 6 ? !1 : (e = L(e), e === t || e.contains(t) ? (t.blur(), !0) : !1);
  }
  tn.prototype.observeUsing = function(e) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), p(
      this._fragmentFiber.child,
      !1,
      xy,
      e,
      void 0,
      void 0
    );
  };
  function xy(e, t) {
    return e.tag === 6 || (e = L(e), t.observe(e)), !1;
  }
  tn.prototype.unobserveUsing = function(e) {
    var t = this._observers;
    if (t !== null && t.has(e)) {
      t.delete(e), p(
        this._fragmentFiber.child,
        !1,
        Ry,
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
  function Ry(e, t) {
    return e.tag === 6 || (e = L(e), t.unobserve(e)), !1;
  }
  var Tn = [], to = !1;
  function jy(e, t, n) {
    Tn.push({
      fragmentInstance: e,
      observer: t,
      instance: n
    }), to || (to = !0, By(function() {
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
      Dy,
      e,
      void 0,
      void 0
    ), e;
  };
  function Dy(e, t) {
    if (e.tag === 6) {
      e = e.stateNode;
      var n = e.ownerDocument.createRange();
      n.selectNodeContents(e), t.push.apply(t, n.getClientRects());
    } else
      e = L(e), t.push.apply(t, e.getClientRects());
    return !1;
  }
  tn.prototype.getRootNode = function(e) {
    var t = I(
      this._fragmentFiber
    );
    return t === null ? this : L(t).getRootNode(e);
  }, tn.prototype.compareDocumentPosition = function(e) {
    var t = I(
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
    var a = L(t);
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
      return n === e ? l = Node.DOCUMENT_POSITION_CONTAINS : a & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = x(t)[1], n === null ? l = Node.DOCUMENT_POSITION_PRECEDING : (e = L(n).compareDocumentPosition(
        e
      ), l = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), l |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    t = L(n[0]), l = L(n[n.length - 1]);
    var i = A(this._fragmentFiber) ? t.parentElement : a;
    if (i == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    a = i.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, i = i.compareDocumentPosition(l) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var c = t.compareDocumentPosition(e), f = l.compareDocumentPosition(e), v = c & Node.DOCUMENT_POSITION_CONTAINED_BY || f & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return f = a && i && c & Node.DOCUMENT_POSITION_FOLLOWING && f & Node.DOCUMENT_POSITION_PRECEDING, t = a && t === e || i && l === e || v || f ? Node.DOCUMENT_POSITION_CONTAINED_BY : !a && t === e || !i && l === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : c, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Uy(
      t,
      this._fragmentFiber,
      n[0],
      n[n.length - 1],
      e
    ) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function Uy(e, t, n, a, l) {
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
        for (i = t, t = I(t); i !== null; ) {
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
      ue
    ), t === null ? t = !1 : (p(
      t,
      !0,
      he,
      i,
      n
    ), i = le, le = null, t = i !== null)), t) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!i) && !(t = i === a) && (t = ne(
      a,
      i,
      ue
    ), t === null ? t = !1 : (p(
      t,
      !0,
      Z,
      i,
      a
    ), i = le, ye = le = null, t = i !== null)), t) : !1;
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
      if (a = n ? a[1] || a[0] || I(this._fragmentFiber) : a[0] || a[1], a === null) return;
      if (a.tag === 6) {
        e = L(a), Dm(e, n);
        return;
      }
      if (a = L(a), a.nodeType !== 9) {
        if (a.nodeType === 11) {
          n = "host" in a ? a.host : null, n !== null && n.scrollIntoView(e);
          return;
        }
        a.scrollIntoView(e);
      }
    }
    for (a = n ? t.length - 1 : 0; a !== (n ? -1 : t.length); ) {
      var l = t[a];
      l.tag === 6 ? (l = L(l), Dm(l, n)) : L(l).scrollIntoView(e), a += n ? -1 : 1;
    }
  };
  function zy(e, t) {
    return e = L(e), Um(e, t), !1;
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
  function My(e, t) {
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
      typeof i.rootMargin == "string" ? jy(
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
  function Hy(e, t, n, a) {
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
  function Ly(e, t) {
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
  function Hm(e) {
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
  function qm(e) {
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
  function Iy(e, t) {
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
  function By(e) {
    Am(function() {
      Am(function(t) {
        return e(t);
      });
    });
  }
  function Lm(e, t, n) {
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
  function Im(e, t, n) {
    for (var a in n) {
      var l = n[a];
      n.hasOwnProperty(a) && l != null && Ze(e, t, a, null, py, l);
    }
    n.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === Nn && (e.onclick = null), hu(e);
  }
  function uo(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    hu(e);
  }
  var hn = /* @__PURE__ */ new Map(), Bm = /* @__PURE__ */ new Set();
  function Bi(e) {
    if (typeof e.getRootNode == "function") {
      var t = e.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) return t;
    }
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Fn = de.d;
  de.d = {
    f: Vy,
    r: Gy,
    D: Yy,
    C: Xy,
    L: Qy,
    m: Ky,
    X: Zy,
    S: ky,
    M: Jy
  };
  function Vy() {
    var e = Fn.f(), t = gr();
    return e || t;
  }
  function Gy(e) {
    var t = ll(e);
    t !== null && t.tag === 5 && t.type === "form" ? Gd(t) : Fn.r(e);
  }
  var Bl = typeof document > "u" ? null : document;
  function Vm(e, t, n) {
    var a = Bl;
    if (a && typeof t == "string" && t) {
      var l = ln(t);
      l = 'link[rel="' + e + '"][href="' + l + '"]', typeof n == "string" && (l += '[crossorigin="' + n + '"]'), Bm.has(l) || (Bm.add(l), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(l) === null && (t = a.createElement("link"), Ct(t, "link", e), gt(t), a.head.appendChild(t)));
    }
  }
  function Yy(e) {
    Fn.D(e), Vm("dns-prefetch", e, null);
  }
  function Xy(e, t) {
    Fn.C(e, t), Vm("preconnect", e, t);
  }
  function Qy(e, t, n) {
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
      ), hn.set(i, e), a.querySelector(l) !== null || t === "style" && a.querySelector(Vi(i)) || t === "script" && a.querySelector(Gi(i))))) {
        var c = a.createElement("link");
        Ct(c, "link", e), t === "style" && (c[du] = !0, c.onload = c.onerror = function() {
          Wo(c);
        }), gt(c), a.head.appendChild(c);
      }
    }
  }
  function Ky(e, t) {
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
            if (n.querySelector(Gi(i)))
              return;
        }
        a = n.createElement("link"), Ct(a, "link", e), gt(a), n.head.appendChild(a);
      }
    }
  }
  function ky(e, t, n) {
    Fn.S(e, t, n);
    var a = Bl;
    if (a && e) {
      var l = il(a).hoistableStyles, i = Vl(e);
      t = t || "default";
      var c = l.get(i);
      if (!c) {
        var f = { loading: 0, preload: null };
        if (c = a.querySelector(
          Vi(i)
        ))
          f.loading = 5;
        else {
          e = re(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = hn.get(i)) && ro(e, n);
          var v = c = a.createElement("link");
          gt(v), Ct(v, "link", e), v._p = new Promise(function(C, U) {
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
      i || (i = n.querySelector(Gi(l)), i || (e = re({ src: e, async: !0 }, t), (t = hn.get(l)) && so(e, t), i = n.createElement("script"), gt(i), Ct(i, "link", e), n.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(l, i));
    }
  }
  function Jy(e, t) {
    Fn.M(e, t);
    var n = Bl;
    if (n && e) {
      var a = il(n).hoistableScripts, l = Gl(e), i = a.get(l);
      i || (i = n.querySelector(Gi(l)), i || (e = re({ src: e, async: !0, type: "module" }, t), (t = hn.get(l)) && so(e, t), i = n.createElement("script"), gt(i), Ct(i, "link", e), n.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(l, i));
    }
  }
  function Gm(e, t, n, a) {
    var l = (l = J.current) ? Bi(l) : null;
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
          }, hn.set(e, i)), $y(
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
  function Vi(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Ym(e) {
    return re({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function $y(e, t, n, a) {
    if (t = e.querySelector(
      'link[rel="preload"][as="style"][' + t + "]"
    )) {
      if (t[du] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      t = e.createElement("link"), t[du] = !0, t.onload = t.onerror = Wo.bind(null, t), Ct(t, "link", n), gt(t), e.head.appendChild(t);
    a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    });
  }
  function Gl(e) {
    return '[src="' + ln(e) + '"]';
  }
  function Gi(e) {
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
          ), gt(a), Ct(a, "style", l), Ar(a, n.precedence, e), t.instance = a;
        case "stylesheet":
          l = Vl(n.href);
          var i = e.querySelector(
            Vi(l)
          );
          if (i)
            return t.state.loading |= 4, t.instance = i, gt(i), i;
          a = Ym(n), (l = hn.get(l)) && ro(a, l), i = (e.ownerDocument || e).createElement("link"), gt(i);
          var c = i;
          return c._p = new Promise(function(f, v) {
            c.onload = f, c.onerror = v;
          }), Ct(i, "link", a), t.state.loading |= 4, Ar(i, n.precedence, e), t.instance = i;
        case "script":
          return i = Gl(n.src), (l = e.querySelector(
            Gi(i)
          )) ? (t.instance = l, gt(l), l) : (a = n, (l = hn.get(i)) && (a = re({}, n), so(a, l)), e = e.ownerDocument || e, l = e.createElement("script"), gt(l), Ct(l, "link", a), e.head.appendChild(l), t.instance = l);
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
      if (!(i[ai] || i[At] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
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
  function Fy(e, t, n) {
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
  function km(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Zm(e) {
    return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function Jm(e, t) {
    typeof t.decode == "function" && (e.imgCount++, t.complete || (e.imgBytes += Zm(t), e.suspenseyImages.push(t)), e = e0.bind(e), t.decode().then(e, e));
  }
  function Py(e, t, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var l = Vl(a.href), i = t.querySelector(
          Vi(l)
        );
        if (i) {
          t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Yi.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = i, gt(i);
          return;
        }
        i = t.ownerDocument || t, a = Ym(a), (l = hn.get(l)) && ro(a, l), i = i.createElement("link"), gt(i);
        var c = i;
        c._p = new Promise(function(f, v) {
          c.onload = f, c.onerror = v;
        }), Ct(i, "link", a), n.instance = i;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Yi.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var _r = 0;
  function Wy(e, t) {
    return e.stylesheets && e.count === 0 && Or(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && Or(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4 + t);
      0 < e.imgBytes && _r === 0 && (_r = 62500 * vy());
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
  function Yi() {
    this.count--, $m(this);
  }
  function e0() {
    this.imgCount--, $m(this);
  }
  var wr = null;
  function Or(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, wr = /* @__PURE__ */ new Map(), t.forEach(t0, e), wr = null, Yi.call(e));
  }
  function t0(e, t) {
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
      l = t.instance, c = l.getAttribute("data-precedence"), i = n.get(c) || a, i === a && n.set(null, l), n.set(c, l), this.count++, a = Yi.bind(this), l.addEventListener("load", a), l.addEventListener("error", a), i ? i.parentNode.insertBefore(l, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(l, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Yl = {
    $$typeof: H,
    Provider: null,
    Consumer: null,
    _currentValue: We,
    _currentValue2: We,
    _threadCount: 0
  };
  function n0(e, t, n, a, l, i, c, f, v) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Yr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Yr(0), this.hiddenUpdates = Yr(null), this.identifierPrefix = a, this.onUncaughtError = l, this.onCaughtError = i, this.onRecoverableError = c, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = v, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Fm(e, t, n, a, l, i, c, f, v, C, U, K) {
    return e = new n0(
      e,
      t,
      n,
      c,
      v,
      C,
      U,
      K,
      f
    ), t = 1, i === !0 && (t |= 24), i = Lt(3, null, null, t), e.current = i, i.stateNode = e, t = Ns(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: t
    }, Cs(i), e;
  }
  function Pm(e) {
    return e ? (e = pl, e) : pl;
  }
  function Wm(e, t, n, a, l, i) {
    l = Pm(l), a.context === null ? a.context = l : a.pendingContext = l, a = sa(t), a.payload = { element: n }, i = i === void 0 ? null : i, i !== null && (a.callback = i), n = ca(e, a, t), n !== null && (Gt(n, e, t), Ei(n, e, t));
  }
  function ep(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function oo(e, t) {
    ep(e, t), (e = e.alternate) && ep(e, t);
  }
  function tp(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = qa(e, 67108864);
      t !== null && Gt(t, e, 67108864), oo(e, 67108864);
    }
  }
  function np(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = en();
      t = Xr(t);
      var n = qa(e, t);
      n !== null && Gt(n, e, t), oo(e, t);
    }
  }
  var Xl = !0;
  function a0(e, t, n, a) {
    var l = ee.T;
    ee.T = null;
    var i = de.p;
    try {
      de.p = 2, fo(e, t, n, a);
    } finally {
      de.p = i, ee.T = l;
    }
  }
  function l0(e, t, n, a) {
    var l = ee.T;
    ee.T = null;
    var i = de.p;
    try {
      de.p = 8, fo(e, t, n, a);
    } finally {
      de.p = i, ee.T = l;
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
        ), lp(e, a);
      else if (u0(
        l,
        e,
        t,
        n,
        a
      ))
        a.stopPropagation();
      else if (lp(e, a), t & 4 && -1 < i0.indexOf(e)) {
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
                      var v = 1 << 31 - kt(c);
                      f.entanglements[1] |= v, c &= ~v;
                    }
                    zn(i), (Ge & 6) === 0 && (hr = Qt() + 500, Hi(0));
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
          if (e = g(t), e !== null) return e;
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
  function ap(e) {
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
        switch (vg()) {
          case Vo:
            return 2;
          case Go:
            return 8;
          case ru:
          case yg:
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
  var po = !1, Sa = null, Ta = null, Aa = null, Xi = /* @__PURE__ */ new Map(), Qi = /* @__PURE__ */ new Map(), Na = [], i0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function lp(e, t) {
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
  function Ki(e, t, n, a, l, i) {
    return e === null || e.nativeEvent !== i ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: a,
      nativeEvent: i,
      targetContainers: [l]
    }, t !== null && (t = ll(t), t !== null && tp(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function u0(e, t, n, a, l) {
    switch (t) {
      case "focusin":
        return Sa = Ki(
          Sa,
          e,
          t,
          n,
          a,
          l
        ), !0;
      case "dragenter":
        return Ta = Ki(
          Ta,
          e,
          t,
          n,
          a,
          l
        ), !0;
      case "mouseover":
        return Aa = Ki(
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
          Ki(
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
          Ki(
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
  function ip(e) {
    var t = Ua(e.target);
    if (t !== null) {
      var n = m(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = g(n), t !== null) {
            e.blockedOn = t, $o(e.priority, function() {
              np(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = y(n), t !== null) {
            e.blockedOn = t, $o(e.priority, function() {
              np(n);
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
        return t = ll(n), t !== null && tp(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function up(e, t, n) {
    xr(e) && n.delete(t);
  }
  function r0() {
    po = !1, Sa !== null && xr(Sa) && (Sa = null), Ta !== null && xr(Ta) && (Ta = null), Aa !== null && xr(Aa) && (Aa = null), Xi.forEach(up), Qi.forEach(up);
  }
  function Rr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, po || (po = !0, u.unstable_scheduleCallback(
      u.unstable_NormalPriority,
      r0
    )));
  }
  var jr = null;
  function rp(e) {
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
    Sa !== null && Rr(Sa, e), Ta !== null && Rr(Ta, e), Aa !== null && Rr(Aa, e), Xi.forEach(t), Qi.forEach(t);
    for (var n = 0; n < Na.length; n++) {
      var a = Na[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Na.length && (n = Na[0], n.blockedOn === null); )
      ip(n), n.blockedOn === null && Na.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var l = n[a], i = n[a + 1], c = l[qt] || null;
        if (typeof i == "function")
          c || rp(n);
        else if (c) {
          var f = null;
          if (i && i.hasAttribute("formAction")) {
            if (l = i, c = i[qt] || null)
              f = c.formAction;
            else if (mo(l) !== null) continue;
          } else f = c.action;
          typeof f == "function" ? n[a + 1] = f : (n.splice(a, 3), a -= 3), rp(n);
        }
      }
  }
  function sp() {
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
    Wm(n, a, e, t, null, null);
  }, Dr.prototype.unmount = go.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Wm(e.current, 2, null, e, null, null), gr(), t[al] = null;
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
      Na.splice(n, 0, e), n === 0 && ip(e);
    }
  };
  var cp = r.version;
  if (cp !== "19.3.0")
    throw Error(
      s(
        527,
        cp,
        "19.3.0"
      )
    );
  de.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(s(188)) : (e = Object.keys(e).join(","), Error(s(268, e)));
    return e = b(t), e = e !== null ? N(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var s0 = {
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
        ei = Ur.inject(
          s0
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
      sp
    ), e[al] = t.current, Qc(e), new go(t);
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
      sp
    ), t.context = Pm(null), n = t.current, a = en(), a = Xr(a), l = sa(a), l.callback = null, ca(n, l, a), n = a, t.current.lanes = n, ni(t, n), zn(t), e[al] = t.current, Qc(e), new Dr(t);
  }, Zi.version = "19.3.0", Zi;
}
var bp;
function v0() {
  if (bp) return bo.exports;
  bp = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (r) {
        console.error(r);
      }
  }
  return u(), bo.exports = g0(), bo.exports;
}
var y0 = v0(), b0 = Hp();
function qp(u, r) {
  if (r) return r;
  const o = new URLSearchParams(u.location.search).get("hana-host-origin");
  if (o) return o;
  try {
    return new URL(u.document.referrer).origin;
  } catch {
    return "*";
  }
}
function Lp(u, r, o) {
  return u.source !== r ? !1 : o === "*" || u.origin === o;
}
var E0 = 600, S0 = 120, T0 = 4e3, Ip = 20, Ep = 4096, Sp = 1e4, A0 = /* @__PURE__ */ new Set(["scroll_element", "click_sequence", "drag_element", "press_key"]), N0 = /* @__PURE__ */ new Set([
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
]), Bp = "hana-ui-", _0 = 512, w0 = 1, Tp = /* @__PURE__ */ new WeakMap(), qr = /* @__PURE__ */ new WeakMap();
function kl(u) {
  return typeof u == "object" && u !== null && !Array.isArray(u);
}
function Ir(u) {
  return u.nodeType === 9;
}
function Ho(u) {
  return Ir(u) ? u : u.ownerDocument;
}
function O0(u) {
  return Ir(u) ? u.body : u;
}
function Vp(u, r) {
  return r.isConnected && (Ir(u) ? r.ownerDocument === u : u.contains(r));
}
function Pl(u) {
  const r = u.ownerDocument.defaultView?.HTMLElement;
  return r ? u instanceof r : u instanceof HTMLElement;
}
function lu(u) {
  const r = u.ownerDocument.defaultView?.HTMLInputElement;
  return r ? u instanceof r : u instanceof HTMLInputElement;
}
function qo(u) {
  const r = u.ownerDocument.defaultView?.HTMLTextAreaElement;
  return r ? u instanceof r : u instanceof HTMLTextAreaElement;
}
function Gp(u) {
  const r = u.ownerDocument.defaultView?.HTMLButtonElement;
  return r ? u instanceof r : u instanceof HTMLButtonElement;
}
function C0(u) {
  const r = u.ownerDocument.defaultView?.HTMLSelectElement;
  return r ? u instanceof r : u.tagName === "SELECT";
}
function x0(u) {
  const r = u.ownerDocument.defaultView?.HTMLAnchorElement;
  return r ? u instanceof r : u.tagName === "A";
}
function Yp(u) {
  if (!Pl(u)) return !0;
  const r = u.ownerDocument.defaultView?.getComputedStyle(u);
  return !r || r.display !== "none" && r.visibility !== "hidden";
}
function R0(u) {
  return Pl(u) ? lu(u) || qo(u) || Gp(u) || C0(u) || x0(u) || u.hasAttribute("contenteditable") || u.hasAttribute("onclick") || ["button", "switch", "textbox", "combobox", "slider", "checkbox", "link"].includes(u.getAttribute("role") ?? "") : !1;
}
function j0(u) {
  const r = u.ownerDocument;
  let o = Tp.get(r);
  o || (o = /* @__PURE__ */ new WeakMap(), Tp.set(r, o));
  const s = o.get(u), d = qr.get(r);
  if (s && d?.has(s)) return s;
  let m = s;
  if (!m)
    do
      m = `${Bp}${w0++}`;
    while (r.getElementById(m));
  o.set(u, m);
  let g = qr.get(r);
  if (g || (g = /* @__PURE__ */ new Map(), qr.set(r, g)), g.size >= _0) {
    const y = g.keys().next().value;
    y && g.delete(y);
  }
  return g.set(m, new WeakRef(u)), m;
}
function D0(u, r) {
  const o = u, s = { tagName: u.tagName.toLowerCase() };
  typeof o.id == "string" && o.id && (s.id = o.id.slice(0, 80)), typeof o.className == "string" && o.className.trim() && (s.className = o.className.trim().slice(0, 120));
  const d = o.textContent?.trim();
  return d && (s.text = d.slice(0, 160)), (lu(u) || qo(u)) && (u.disabled && (s.disabled = !0), u.type && (s.type = u.type)), o.id ? s.elementId = o.id : r && R0(u) && (s.elementId = j0(u)), s;
}
function U0(u, r) {
  const o = [], s = O0(u);
  if (!s) return { outline: o, visibleNodeCount: 0, totalNodeCount: 0, truncated: !1 };
  const d = Ho(u).createTreeWalker(s, 1);
  let m = d.currentNode, g = 0, y = 0;
  for (; m && y < E0; ) {
    if (m.nodeType === 1) {
      const S = m;
      y += 1, Yp(S) && (g += 1, o.length < S0 && o.push(D0(S, r)));
    }
    m = d.nextNode();
  }
  return { outline: o, visibleNodeCount: g, totalNodeCount: y, truncated: m !== null };
}
function jo(u, r, o = !1) {
  if (typeof r != "string" || !r.trim()) return null;
  const s = r.trim(), d = Ho(u), m = s.startsWith(Bp) ? qr.get(d)?.get(s)?.deref() ?? null : d.getElementById(s);
  return m && Vp(u, m) && (!o || Yp(m)) ? m : null;
}
function Xp(u) {
  return Pl(u) ? lu(u) && (u.type === "file" || u.disabled) ? { ok: !1, error: "This element cannot be clicked." } : Gp(u) && u.disabled ? { ok: !1, error: "This element cannot be clicked." } : (u.click(), { ok: !0 }) : { ok: !1, error: "Target is not an element." };
}
function Ap(u, r) {
  const o = lu(u) ? u.ownerDocument.defaultView?.HTMLInputElement.prototype : u.ownerDocument.defaultView?.HTMLTextAreaElement.prototype, s = o && Object.getOwnPropertyDescriptor(o, "value")?.set;
  s ? s.call(u, r) : u.value = r;
}
function z0(u, r, o) {
  const s = typeof r == "string" ? r.slice(0, T0) : "";
  if (lu(u)) {
    if (u.type === "file" || u.disabled || u.readOnly) return { ok: !1, error: "This element cannot accept text." };
    o ? Ap(u, `${u.value}${s}`) : u.value = `${u.value}${s}`;
  } else if (qo(u)) {
    if (u.disabled || u.readOnly) return { ok: !1, error: "This element cannot accept text." };
    o ? Ap(u, `${u.value}${s}`) : u.value = `${u.value}${s}`;
  } else return { ok: !1, error: "This element cannot accept text." };
  return u.dispatchEvent(new Event("input", { bubbles: !0 })), u.dispatchEvent(new Event("change", { bubbles: !0 })), { ok: !0 };
}
function eu(u, r) {
  const o = jo(u, r, !0);
  return o && Pl(o) ? o : null;
}
function Lr(u, r) {
  return typeof u == "number" && Number.isFinite(u) && Math.abs(u) <= r ? u : null;
}
function M0(u, r) {
  const o = r.scrollX === void 0 ? 0 : Lr(r.scrollX, Sp), s = r.scrollY === void 0 ? 0 : Lr(r.scrollY, Sp);
  if (o === null || s === null || o === 0 && s === 0) return { ok: !1, code: "UI_ACTION_SCROLL_INVALID", error: "scroll_element requires bounded non-zero scroll coordinates." };
  const d = r.elementId === void 0 ? Ir(u) ? u.scrollingElement ?? u.documentElement : u : eu(u, r.elementId);
  return !d || !Pl(d) ? { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No visible element matches this elementId." } : (d.scrollLeft += o, d.scrollTop += s, d.dispatchEvent(new Event("scroll", { bubbles: !1 })), { ok: !0, result: { scrollLeft: d.scrollLeft, scrollTop: d.scrollTop } });
}
function H0(u) {
  const r = Array.isArray(u.steps) ? u.steps : u.elementIds;
  if (!Array.isArray(r) || r.length < 1 || r.length > Ip) return null;
  const o = r.map((s) => {
    if (typeof s == "string") return s.trim();
    if (!kl(s)) return "";
    const d = typeof s.elementId == "string" ? s.elementId.trim() : "", m = Array.isArray(s.elementIds) && s.elementIds.length === 1 && typeof s.elementIds[0] == "string" ? s.elementIds[0].trim() : "";
    return d || m;
  });
  return o.every(Boolean) ? o : null;
}
function q0(u, r) {
  const o = H0(r);
  if (!o) return { ok: !1, code: "UI_ACTION_SEQUENCE_INVALID", error: "click_sequence requires one to twenty element IDs." };
  let s = 0;
  for (const [d, m] of o.entries()) {
    const g = eu(u, m);
    if (!g) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: `Sequence target ${d + 1} is unavailable.`, result: { completedCount: s, failedIndex: d } };
    const y = Xp(g);
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
  const m = u.ownerDocument.defaultView, g = m?.PointerEvent ?? m?.MouseEvent ?? MouseEvent;
  u.dispatchEvent(new g(r, { bubbles: !0, cancelable: !0, clientX: o, clientY: s, buttons: d }));
}
function L0(u, r) {
  const o = eu(u, r.elementId);
  if (!o) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No visible source element matches this elementId." };
  const s = r.deltaX === void 0 ? 0 : Lr(r.deltaX, Ep), d = r.deltaY === void 0 ? 0 : Lr(r.deltaY, Ep);
  if (s === null || d === null) return { ok: !1, code: "UI_ACTION_DRAG_INVALID", error: "drag_element coordinates must be finite and bounded." };
  const m = r.targetElementId === void 0 ? null : eu(u, r.targetElementId);
  if (r.targetElementId !== void 0 && !m) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No visible target element matches targetElementId." };
  if (!m && s === 0 && d === 0) return { ok: !1, code: "UI_ACTION_DRAG_TARGET_REQUIRED", error: "drag_element requires a target element or non-zero delta." };
  const g = o.getBoundingClientRect(), y = g.left + g.width / 2, S = g.top + g.height / 2, b = m?.getBoundingClientRect(), N = b ? b.left + b.width / 2 : y + s, p = b ? b.top + b.height / 2 : S + d, I = m ?? o;
  No(o, "pointerdown", y, S, 1), Ao(o, "mousedown", y, S, 1);
  for (const A of [0.25, 0.5, 0.75]) {
    const x = y + (N - y) * A, V = S + (p - S) * A;
    No(I, "pointermove", x, V, 1), Ao(I, "mousemove", x, V, 1);
  }
  return No(I, "pointerup", N, p, 0), Ao(I, "mouseup", N, p, 0), { ok: !0, result: { dragged: !0, endX: N, endY: p } };
}
function I0(u, r) {
  const o = r.key === void 0 ? r.keys : [r.key];
  if (!Array.isArray(o) || o.length < 1 || o.length > Ip || o.some((S) => typeof S != "string")) return { ok: !1, code: "UI_ACTION_KEY_INVALID", error: "press_key requires supported key names or single characters." };
  const s = o.map((S) => S.trim());
  if (s.some((S) => !(S.length === 1 || N0.has(S)))) return { ok: !1, code: "UI_ACTION_KEY_INVALID", error: "press_key requires supported key names or single characters." };
  const d = Ho(u).activeElement, m = r.elementId === void 0 ? d && Vp(u, d) && Pl(d) ? d : null : eu(u, r.elementId);
  if (!m) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No focused visible element is available for press_key." };
  r.elementId !== void 0 && m.focus();
  const g = m.ownerDocument.defaultView?.KeyboardEvent ?? KeyboardEvent, y = { ctrlKey: r.ctrlKey === !0, metaKey: r.metaKey === !0, altKey: r.altKey === !0, shiftKey: r.shiftKey === !0 };
  for (const S of s)
    m.dispatchEvent(new g("keydown", { bubbles: !0, cancelable: !0, key: S, ...y })), m.dispatchEvent(new g("keyup", { bubbles: !0, cancelable: !0, key: S, ...y }));
  return { ok: !0, result: { pressedKeys: s } };
}
function Qp(u, r, o = !1) {
  const s = kl(r) && typeof r.action == "string" ? r.action : "";
  if (s === "describe_dom") return { ok: !0, result: U0(u, o) };
  if (s === "read_state") return { ok: !0, result: { state: {} } };
  if (s === "click_element") {
    const d = jo(u, kl(r) ? r.elementId : null, o);
    if (!d) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No element matches this elementId." };
    const m = Xp(d);
    return m.ok === !0 ? { ok: !0, result: { clicked: !0 } } : { ok: !1, code: "UI_ACTION_ELEMENT_NOT_OPERABLE", error: m.error };
  }
  if (s === "type_text") {
    const d = jo(u, kl(r) ? r.elementId : null, o);
    if (!d) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No element matches this elementId." };
    const m = z0(d, kl(r) ? r.text : "", o);
    return m.ok === !0 ? { ok: !0, result: { typed: !0 } } : { ok: !1, code: "UI_ACTION_ELEMENT_NOT_OPERABLE", error: m.error };
  }
  return A0.has(s) && !o ? { ok: !1, code: "UI_ACTION_UNSUPPORTED_FOR_APP_CARD", error: `App cards do not support ${s}.` } : kl(r) ? s === "scroll_element" ? M0(u, r) : s === "click_sequence" ? q0(u, r) : s === "drag_element" ? L0(u, r) : s === "press_key" ? I0(u, r) : { ok: !1, code: "UI_ACTION_UNKNOWN_ACTION", error: `Unknown UI action: ${s || "(missing)"}.` } : { ok: !1, code: "UI_ACTION_UNKNOWN_ACTION", error: `Unknown UI action: ${s || "(missing)"}.` };
}
var dt = "hana.plugin.ui", ht = 1, B0 = "X-Hana-App-Surface-Session", V0 = "appSurfaceSession", Fi = {
  CONTEXT: "hana.input-panel.context",
  SUBMIT: "hana.input-panel.submit",
  PRESENTATION: "hana.input-panel.presentation"
}, Np = 64 * 1024, Kp = {
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
}, Zl = {
  GET: "hana.app.storage.get",
  GET_ALL: "hana.app.storage.getAll",
  SET: "hana.app.storage.set",
  DELETE: "hana.app.storage.delete",
  KEYS: "hana.app.storage.keys"
}, G0 = {
  CHANGED: "hana.app.storage.changed"
}, kp = { OPEN: "hana.cards.open" }, zr = {
  GET_ACTIVE: "hana.sessions.get-active",
  SUBSCRIBE: "hana.sessions.subscribe-active",
  UNSUBSCRIBE: "hana.sessions.unsubscribe-active",
  FOCUS: "hana.sessions.focus"
}, _p = {
  ACTIVE_CHANGED: "hana.sessions.active-changed",
  ERROR: "hana.sessions.error"
}, Do = {
  SET_INTERACTIVE_REGIONS: "hana.surface.set-interactive-regions"
};
function Y0(u) {
  if (!An(u) || Object.keys(u).length !== 1 || !Array.isArray(u.regions))
    return { ok: !1, error: "hana.surface.setInteractiveRegions requires exactly one regions array." };
  if (u.regions.length > 64)
    return { ok: !1, error: "hana.surface.setInteractiveRegions accepts at most 64 regions." };
  const r = [];
  for (const o of u.regions) {
    if (!An(o) || Object.keys(o).length !== 4)
      return { ok: !1, error: "Each interactive region must contain exactly x, y, width, and height." };
    const { x: s, y: d, width: m, height: g } = o;
    if (typeof s != "number" || typeof d != "number" || typeof m != "number" || typeof g != "number" || !Number.isFinite(s) || !Number.isFinite(d) || !Number.isFinite(m) || !Number.isFinite(g))
      return { ok: !1, error: "Interactive region coordinates must be finite numbers." };
    if (m <= 0 || g <= 0 || Math.abs(s) > 1e6 || Math.abs(d) > 1e6 || Math.abs(m) > 1e6 || Math.abs(g) > 1e6)
      return { ok: !1, error: "Interactive region bounds are invalid." };
    r.push({ x: s, y: d, width: m, height: g });
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
}, X0 = 128;
function iu(u) {
  if (typeof u != "string" || u.length === 0 || u.length > X0)
    return !1;
  for (let r = 0; r < u.length; r += 1) {
    const o = u.charCodeAt(r);
    if (o <= 31 || o === 127)
      return !1;
  }
  return !0;
}
function Q0(u) {
  return !An(u) || !iu(u.viewToken) ? { ok: !1, error: "A chrome binding requires a host-minted view token." } : u.resync !== void 0 && typeof u.resync != "boolean" ? { ok: !1, error: "A chrome binding resync flag must be a boolean when present." } : { ok: !0, value: { viewToken: u.viewToken, ...u.resync === void 0 ? {} : { resync: u.resync } } };
}
function K0(u) {
  return !An(u) || !iu(u.challengeId) ? { ok: !1, error: "A chrome challenge requires a host-minted challenge id." } : { ok: !0, value: { challengeId: u.challengeId } };
}
function k0(u) {
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
  const o = k0(u);
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
}, J0 = 256;
function tu(u) {
  if (typeof u != "string" || u.length === 0 || u.length > J0 || u.trim().length === 0)
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
  return !An(u) || !Lo(u, ["viewToken", "bindingId", "registrationId", "snapshot"]) ? { ok: !1, error: "App view-state reply must echo exactly a view token, namespace binding id, registration id and snapshot." } : iu(u.viewToken) ? tu(u.bindingId) ? tu(u.registrationId) ? {
    ok: !0,
    value: { viewToken: u.viewToken, bindingId: u.bindingId, registrationId: u.registrationId, snapshot: u.snapshot }
  } : { ok: !1, error: "App view-state reply requires an opaque registration id." } : { ok: !1, error: "App view-state reply requires an opaque namespace binding id." } : { ok: !1, error: "App view-state reply requires the host-minted view token." };
}
function $i(u, r) {
  return u.viewToken !== r.viewToken || u.bindingId !== r.bindingId ? !1 : r.registrationId === void 0 ? !0 : u.registrationId === r.registrationId;
}
function wp(u) {
  return !An(u) || !Lo(u, ["viewToken", "bindingId", "registrationId", "released"]) ? { ok: !1, error: "App view-state release reply must echo exactly a view token, namespace binding id, registration id and a boolean released flag." } : iu(u.viewToken) ? tu(u.bindingId) ? tu(u.registrationId) ? typeof u.released != "boolean" ? { ok: !1, error: "App view-state release reply requires a boolean released flag." } : { ok: !0, value: { viewToken: u.viewToken, bindingId: u.bindingId, registrationId: u.registrationId, released: u.released } } : { ok: !1, error: "App view-state release reply requires an opaque registration id." } : { ok: !1, error: "App view-state release reply requires an opaque namespace binding id." } : { ok: !1, error: "App view-state release reply requires the host-minted view token." };
}
var $0 = /^\/api\/apps\/([^/]+)\/ui(?:\/|$)/, F0 = /^\/api\/apps\/([^/]+)\/routes\/_runtime\/([^/]+)\/_surface\/([^/]+)\//;
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
  const r = F0.exec(u);
  if (r) {
    const s = Mr(r[1]), d = Mr(r[2]), m = Mr(r[3]);
    return s === null || d === null || m === null ? null : { appId: s, kind: "runtime" };
  }
  const o = $0.exec(u);
  if (o) {
    const s = Mr(o[1]);
    return s === null ? null : { appId: s, kind: "ui" };
  }
  return null;
}
var P0 = 256;
function Zp(u) {
  if (u !== void 0)
    return typeof u != "string" || u.length === 0 || u.length > P0 || u.includes("\0") || u.trim().length === 0 ? null : u;
}
var W0 = {
  CONTEXT: "hana.surface.context"
}, eb = /* @__PURE__ */ new Set([
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
      code: Kp.BAD_MESSAGE,
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
        code: Kp.UNSUPPORTED_VERSION,
        message: `Unsupported Plugin UI protocol version: ${String(u.version)}.`
      }
    };
  if (typeof u.kind != "string" || !eb.has(u.kind))
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
var tb = [
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
], nb = [
  "cards",
  "agentTypes",
  "configuration",
  "settingsTab",
  "page",
  "widget"
], ab = [
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
], lb = ["restricted", "full-access"];
new Set(tb);
new Set(nb);
new Set(ab);
new Set(lb);
var ib = Object.values(Ie);
new Set(ib);
var Wi = class extends Error {
  reason;
  constructor(u, r) {
    super(r), this.name = "AppCurrentViewBindingError", this.reason = u;
  }
};
function ub() {
  return `chrome-doc:${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`;
}
function rb(u) {
  return JSON.stringify([u.appId, u.cardInstanceId ?? null, u.instanceKey ?? null]);
}
function sb(u) {
  const r = ub();
  let o = null, s = !1, d, m = !0;
  const g = /* @__PURE__ */ new Set(), y = /* @__PURE__ */ new Set();
  let S = 0;
  const b = () => {
    S += 1;
  }, N = (Z) => new Wi("unavailable", Z), p = () => new Wi(
    "identity-changed",
    "The current App card identity changed while this view write waited."
  ), I = () => new Wi(
    "token-stale",
    "The held view token is no longer the current document."
  ), A = (Z) => {
    g.delete(Z), u.targetWindow.clearTimeout(Z.timer), Z.signal && Z.onAbort && Z.signal.removeEventListener("abort", Z.onAbort);
  }, x = (Z, ue) => {
    A(Z), Z.reject(ue);
  }, V = (Z, ue) => {
    const ne = o !== Z, re = m;
    o = Z, m = !0, (ne || !re) && b();
    for (const oe of [...g]) {
      if (A(oe), oe.identity !== void 0 && oe.identity !== d) {
        oe.reject(p());
        continue;
      }
      oe.resolve(Z);
    }
    if (y.size === 0) return;
    const ge = { changed: ne, resync: ue }, se = S;
    for (const oe of [...y]) {
      if (s || se !== S) return;
      y.has(oe) && oe.listener(ge);
    }
  };
  return {
    handleHostMessage: (Z) => {
      const ue = Z.type === Jl.CHALLENGE, ne = Z.type === Jl.BINDING;
      if (!ue && !ne) return !1;
      if (s) return !0;
      if (ue && Z.kind === "event") {
        const re = K0(Z.payload);
        return re.ok === !0 && (u.post({
          protocol: dt,
          version: ht,
          kind: "event",
          type: Jl.ACK,
          payload: { challengeId: re.value.challengeId, documentNonce: r }
        }), s || u.reannounceReady?.()), !0;
      }
      if (ne && Z.kind === "event") {
        const re = Q0(Z.payload);
        return re.ok === !0 && V(re.value.viewToken, re.value.resync === !0), !0;
      }
      return !0;
    },
    applySurfaceContext: (Z) => {
      if (s) return;
      if (Z === null) {
        if (!m) return;
        m = !1, b();
        return;
      }
      const ue = rb(Z);
      if (d !== ue) {
        if (d !== void 0) {
          for (const ne of [...g]) x(ne, p());
          o = null;
        }
        d = ue, b();
      }
    },
    currentToken() {
      return !s && m ? o : null;
    },
    waitForToken: (Z, ue) => s ? Promise.reject(N("The current App card view binding was released.")) : ue?.aborted ? Promise.reject(N("The current App card view wait was aborted.")) : o && m ? Promise.resolve(o) : new Promise((ne, re) => {
      const ge = {
        resolve: ne,
        reject: re,
        identity: d,
        timer: u.targetWindow.setTimeout(() => {
          A(ge), re(N("The host has not bound this App card view; the current view is unavailable here."));
        }, Z)
      };
      ue && (ge.signal = ue, ge.onAbort = () => x(ge, N("The current App card view wait was aborted.")), ue.addEventListener("abort", ge.onAbort)), g.add(ge);
    }),
    assertCurrentToken: (Z) => {
      if (s) throw N("The current App card view binding was released.");
      if (!m || !o)
        throw N("The current App card view is not writable here right now.");
      if (o !== Z) throw I();
    },
    onBinding(Z) {
      if (s) return () => {
      };
      const ue = { listener: Z };
      return y.add(ue), () => {
        y.delete(ue);
      };
    },
    dispose() {
      if (!s) {
        s = !0, o = null, m = !1;
        for (const Z of [...g])
          x(Z, N("The current App card view binding was released."));
        g.clear(), y.clear();
      }
    }
  };
}
function cb(u, r) {
  let o = null, s = 0;
  const d = (g) => {
    const y = u();
    y && r({
      protocol: dt,
      version: ht,
      kind: "event",
      type: Jl.SCROLL,
      payload: { scrolled: g, viewToken: y }
    });
  }, m = (g) => {
    const y = o;
    y && (o = null, y.detach(), g && y.scrolled && d(!1));
  };
  return {
    register(g) {
      if (!g || typeof g.scrollTop != "number" || typeof g.addEventListener != "function")
        throw new TypeError("hana.chrome.registerScrollSource requires an element.");
      m(!0);
      const y = ++s, S = g.ownerDocument?.defaultView, b = { generation: y, scrolled: g.scrollTop > 0, detach: () => {
      } }, N = () => {
        if (!o || o.generation !== y) return;
        const A = g.scrollTop > 0;
        A !== o.scrolled && (o.scrolled = A, d(A));
      };
      g.addEventListener("scroll", N, { passive: !0 });
      const p = S?.ResizeObserver, I = p ? new p(N) : null;
      return I?.observe(g), b.detach = () => {
        g.removeEventListener("scroll", N), I?.disconnect();
      }, o = b, b.scrolled && d(!0), () => {
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
function ob(u) {
  const r = { requestId: u.requestId, revision: u.revision };
  return u.kind === "action" ? { ...r, kind: "action", actionId: u.actionId } : u.kind === "tab-select" ? { ...r, kind: "tab-select", tabId: u.tabId } : { ...r, kind: "tab-close", tabId: u.tabId };
}
var fb = 1e4;
function db(u) {
  const r = u.requestTimeoutMs ?? fb, o = u.currentView;
  let s = !1, d = null;
  const m = new AbortController(), g = cb(() => s ? null : o.currentToken(), u.post), y = o.onBinding((L) => {
    s || (L.changed || L.resync) && g.flush();
  }), S = () => Object.assign(
    new Error("The App card business identity changed; this chrome write is stale."),
    { code: Pn.VIEW_STALE }
  ), b = () => Object.assign(
    new Error("The host has not bound this App card view; chrome is unavailable here."),
    { code: Pn.UNAVAILABLE }
  ), N = () => Object.assign(
    new Error("The App chrome view was released."),
    { code: Pn.UNAVAILABLE }
  ), p = (L) => L instanceof Wi ? L.reason === "unavailable" ? b() : S() : L, I = (L, le) => {
    u.post({
      protocol: dt,
      version: ht,
      id: L.id,
      type: L.type,
      ...le
    });
  }, A = (L) => {
    if (L.type !== Jl.ACTION) return !1;
    if (s) return !0;
    if (L.kind !== "request") return !1;
    const le = Z0(L.payload);
    if (le.ok === !1)
      return I(L, { kind: "error", error: { code: Pn.BAD_PAYLOAD, message: le.error } }), !0;
    const ye = le.value, he = {
      requestId: ye.requestId,
      revision: ye.revision,
      generation: ye.generation,
      viewToken: ye.viewToken
    }, Z = d;
    if (!Z)
      return I(L, {
        kind: "error",
        payload: he,
        error: { code: Pn.ACTION_UNHANDLED, message: "This App has no chrome action handler." }
      }), !0;
    if (ye.viewToken !== o.currentToken())
      return I(L, {
        kind: "error",
        payload: he,
        error: { code: Pn.VIEW_STALE, message: "This chrome action belongs to a replaced view." }
      }), !0;
    const ue = () => !s && d === Z && ye.viewToken === o.currentToken();
    return Promise.resolve().then(async () => {
      if (!ue()) {
        I(L, {
          kind: "error",
          payload: he,
          error: { code: Pn.VIEW_STALE, message: "This chrome action belongs to a replaced view." }
        });
        return;
      }
      let ne;
      try {
        ne = await Z.fn(ob(ye));
      } catch (re) {
        if (!ue()) return;
        I(L, {
          kind: "error",
          payload: he,
          error: {
            code: Pn.ACTION_FAILED,
            message: re instanceof Error ? re.message : "The App chrome action handler failed."
          }
        });
        return;
      }
      ue() && I(L, {
        kind: "response",
        payload: {
          ...he,
          status: ne && ne.status === "rejected" ? "rejected" : "handled",
          ...ne && typeof ne.message == "string" && ne.message ? { message: ne.message } : {}
        }
      });
    }), !0;
  }, x = () => g.dispose();
  u.targetWindow.addEventListener("pagehide", x);
  const V = (L) => {
    if (s)
      throw Object.assign(new Error(`The App chrome view was released; ${L} is unavailable.`), { code: Pn.UNAVAILABLE });
  };
  return {
    api: {
      set(L, le) {
        const ye = le?.timeoutMs ?? r;
        return o.waitForToken(ye, m.signal).then(
          (he) => {
            V("hana.chrome.set");
            try {
              o.assertCurrentToken(he);
            } catch (Z) {
              throw p(Z);
            }
            return u.request(Jl.SET, { description: L, viewToken: he }, { timeoutMs: ye });
          },
          (he) => {
            throw s ? N() : p(he);
          }
        );
      },
      onAction(L) {
        if (V("hana.chrome.onAction"), typeof L != "function") throw new TypeError("hana.chrome.onAction requires a handler.");
        const le = { fn: L };
        return d = le, () => {
          d === le && (d = null);
        };
      },
      registerScrollSource(L) {
        return V("hana.chrome.registerScrollSource"), g.register(L);
      }
    },
    handleHostMessage: A,
    dispose() {
      s || (s = !0, m.abort(), u.targetWindow.removeEventListener("pagehide", x), y(), d = null, g.dispose());
    }
  };
}
var hb = 16, mb = 4096, pb = 24 * 1024, Et = class extends Error {
  code;
  constructor(u, r) {
    super(r), this.name = "AppViewStateError", this.code = u;
  }
}, gb = new TextEncoder();
function vb(u) {
  return gb.encode(u).length;
}
function yb(u) {
  if (typeof u != "object" || u === null || Array.isArray(u)) return !1;
  const r = Object.getPrototypeOf(u);
  return r === Object.prototype || r === null;
}
function bb(u) {
  const r = Number(u);
  return !Number.isInteger(r) || r < 0 || String(r) !== u ? null : r;
}
function Jp(u) {
  return u === "input" ? "VIEW_STATE_INVALID_INPUT" : "VIEW_STATE_INVALID_STORAGE";
}
function Eb(u, r) {
  const o = Jp(r), s = /* @__PURE__ */ new Set();
  let d = 0;
  const m = (g, y) => {
    if (d += 1, d > mb)
      throw new Et(o, "App view state contains too many values.");
    if (y > hb)
      throw new Et(o, "App view state is nested too deeply.");
    if (g === null) return null;
    const S = typeof g;
    if (S === "string" || S === "boolean") return g;
    if (S === "number") {
      if (!Number.isFinite(g))
        throw new Et(o, "App view state numbers must be finite.");
      return g;
    }
    if (S !== "object")
      throw new Et(o, "App view state must contain only JSON values.");
    const b = g;
    if (s.has(b))
      throw new Et(o, "App view state must not contain cycles.");
    const N = Object.getPrototypeOf(b);
    if (Array.isArray(b)) {
      if (N !== Array.prototype)
        throw new Et(o, "App view state must contain only plain arrays.");
      s.add(b);
      const I = b.length;
      for (const x of Reflect.ownKeys(b)) {
        if (typeof x != "string")
          throw new Et(o, "App view state must not contain symbol keys.");
        if (x === "length") {
          const le = Object.getOwnPropertyDescriptor(b, "length");
          if (le.enumerable || le.get || le.set)
            throw new Et(o, "App view state arrays must expose a plain length.");
          continue;
        }
        const V = bb(x);
        if (V === null || V >= I)
          throw new Et(o, "App view state arrays must not carry extra keys.");
        const L = Object.getOwnPropertyDescriptor(b, x);
        if (!L.enumerable || L.get || L.set)
          throw new Et(o, "App view state arrays must index plain values.");
      }
      const A = [];
      for (let x = 0; x < I; x++) {
        const V = Object.getOwnPropertyDescriptor(b, String(x));
        if (!V)
          throw new Et(o, "App view state must not contain sparse arrays.");
        A.push(m(V.value, y + 1));
      }
      return s.delete(b), A;
    }
    if (N !== Object.prototype && N !== null)
      throw new Et(o, "App view state must contain only plain objects.");
    s.add(b);
    const p = /* @__PURE__ */ Object.create(null);
    for (const I of Reflect.ownKeys(b)) {
      if (typeof I != "string")
        throw new Et(o, "App view state must not contain symbol keys.");
      const A = Object.getOwnPropertyDescriptor(b, I);
      if (!A.enumerable)
        throw new Et(o, "App view state must not contain non-enumerable fields.");
      if (A.get || A.set)
        throw new Et(o, "App view state must not contain accessors.");
      p[I] = m(A.value, y + 1);
    }
    return s.delete(b), p;
  };
  return m(u, 0);
}
function Sb(u, r) {
  if (u === null) return null;
  if (!yb(u))
    throw new Et(
      Jp(r),
      "App view state must be a JSON object or null."
    );
  return Eb(u, r);
}
function Tb(u, r) {
  if (u === null) return null;
  const o = JSON.stringify(u);
  if (vb(o) > pb)
    throw new Et(
      "VIEW_STATE_TOO_LARGE",
      "App view state exceeds the size budget."
    );
  return JSON.parse(o);
}
function Uo(u) {
  return Tb(Sb(u, "input"));
}
var we = {
  UNAVAILABLE: "VIEW_STATE_UNAVAILABLE",
  VIEW_STALE: "VIEW_STATE_VIEW_STALE",
  RELEASED: "VIEW_STATE_RELEASED",
  INVALID_INPUT: "VIEW_STATE_INVALID_INPUT",
  BAD_RESPONSE: "VIEW_STATE_BAD_RESPONSE"
}, Ab = class extends Error {
  code;
  constructor(u, r) {
    super(r), this.name = "AppViewStateRequestError", this.code = u;
  }
}, Nb = 1e4;
function Oe(u, r) {
  return new Ab(u, r);
}
function _b(u) {
  return {
    viewKind: u.viewKind,
    revision: u.revision,
    state: Uo(u.state)
  };
}
function wb(u) {
  const r = u.requestTimeoutMs ?? Nb;
  let o = !1, s = 0, d = null;
  const m = /* @__PURE__ */ new Map();
  let g = null, y = null, S = !1;
  const b = (H) => H instanceof Wi ? H.reason === "unavailable" ? Oe(we.UNAVAILABLE, "The App card view is not writable here right now.") : Oe(we.VIEW_STALE, "The App card view this operation was bound to is no longer current.") : H, N = (H, M) => {
    !H || H.terminated !== null || (H.terminated = M, H.lifetime.abort());
  }, p = (H) => {
    N(d, H), d = null;
    for (const M of m.values()) M.abort.abort();
    m.clear();
  }, I = (H) => {
    if (o || H === null) return;
    if (H.slot !== "card") {
      p("namespace-changed"), y = null, S = !0, g = null;
      return;
    }
    const M = JSON.stringify([H.appId, H.cardInstanceId, H.instanceKey ?? null]), te = H.viewState?.bindingId ?? null;
    (S && y !== M || te !== null && g !== null && te !== g) && p("namespace-changed"), y = M, S = !0, te !== null && (g = te);
  }, A = (H) => {
    if (!o && H.changed) {
      N(d, "document-changed"), d = null;
      for (const M of m.values())
        M.tokenCaptured && M.abort.abort();
    }
  }, x = u.subscribeContext(I), V = u.currentView.onBinding(A), L = (H) => u.currentView.currentToken() === H, le = (H) => {
    try {
      u.currentView.assertCurrentToken(H);
    } catch (M) {
      throw b(M);
    }
  }, ye = (H) => {
    const M = u.getContext();
    if (!M || M.slot !== "card")
      throw Oe(we.UNAVAILABLE, "The App view-state namespace is not available on this surface.");
    const te = M.viewState;
    if (!te)
      throw Oe(we.UNAVAILABLE, "The App view-state namespace is not available here right now.");
    if (te.bindingId !== H.bindingId || te.viewKind !== H.viewKind)
      throw Oe(we.VIEW_STALE, "This view-state handle belongs to a namespace that is no longer current.");
    if (te.available !== !0)
      throw Oe(we.UNAVAILABLE, "The App view-state namespace is temporarily unavailable.");
  }, he = (H) => H === "document-changed" || H === "namespace-changed" ? Oe(we.VIEW_STALE, "This view-state handle's view changed before the operation could be adopted.") : Oe(we.RELEASED, "This view-state handle has been released."), Z = (H) => {
    if (o)
      throw Oe(we.RELEASED, "The App view-state controller was released.");
    if (H.terminated !== null) throw he(H.terminated);
    if (H.lifetime.signal.aborted)
      throw Oe(we.RELEASED, "This view-state handle has been released.");
    if (d !== H)
      throw Oe(we.VIEW_STALE, "This view-state handle is no longer the current registration.");
    return le(H.viewToken), ye(H), H.viewToken;
  }, ue = (H, M) => {
    if (o)
      throw Oe(we.RELEASED, "The App view-state controller was released.");
    if (H.terminated !== null) throw he(H.terminated);
    if (H.lifetime.signal.aborted)
      throw Oe(we.RELEASED, "This view-state handle has been released.");
    if (!L(M))
      throw Oe(we.VIEW_STALE, "The document changed before this view-state reply arrived.");
    const te = u.getContext(), j = te?.viewState;
    if (!te || te.slot !== "card" || !j || j.bindingId !== H.bindingId || j.viewKind !== H.viewKind)
      throw Oe(we.VIEW_STALE, "The namespace changed before this view-state reply arrived.");
    if (j.available !== !0)
      throw Oe(we.UNAVAILABLE, "The App view-state namespace paused before this reply arrived.");
  }, ne = async (H, M, te, j) => {
    try {
      return await u.request(H, M, { timeoutMs: te });
    } catch (F) {
      if (j !== null) {
        if (j.terminated !== null) throw he(j.terminated);
        if (j.lifetime.signal.aborted)
          throw Oe(we.RELEASED, "This view-state handle has been released.");
      }
      throw o ? Oe(we.RELEASED, "The App view-state controller was released.") : F;
    }
  }, re = (H, M) => {
    if (M.viewKind !== H)
      throw Oe(we.BAD_RESPONSE, "The view-state reply carried a different view kind than the operation targeted.");
    let te;
    try {
      te = Uo(M.state);
    } catch (j) {
      throw j instanceof Et ? Oe(we.BAD_RESPONSE, "The view-state reply carried a state outside the shared JSON budget.") : j;
    }
    return { viewKind: H, revision: M.revision, state: te };
  }, ge = async (H, M) => {
    const te = M?.timeoutMs ?? r, j = Z(H), F = await ne(Ji.GET, {
      viewToken: j,
      bindingId: H.bindingId,
      registrationId: H.registrationId
    }, te, H);
    ue(H, j);
    const B = wo(F);
    if (B.ok === !1)
      throw Oe(we.BAD_RESPONSE, B.error);
    if (!$i(B.value, {
      viewToken: j,
      bindingId: H.bindingId,
      registrationId: H.registrationId
    }))
      throw Oe(we.VIEW_STALE, "This view-state reply answered a different view than the one this handle targets.");
    const X = _o(B.value.snapshot);
    if (X.ok === !1)
      throw Oe(we.BAD_RESPONSE, X.error);
    return re(H.viewKind, X.value);
  }, se = async (H, M, te) => {
    const j = te?.timeoutMs ?? r, F = Ob(M), B = Uo(M.state), X = Z(H), ae = await ne(Ji.SET, {
      viewToken: X,
      bindingId: H.bindingId,
      registrationId: H.registrationId,
      expectedRevision: F,
      state: B
    }, j, H);
    ue(H, X);
    const $ = wo(ae);
    if ($.ok === !1)
      throw Oe(we.BAD_RESPONSE, $.error);
    if (!$i($.value, {
      viewToken: X,
      bindingId: H.bindingId,
      registrationId: H.registrationId
    }))
      throw Oe(we.VIEW_STALE, "This view-state reply answered a different view than the one this handle targets.");
    const E = _o($.value.snapshot);
    if (E.ok === !1)
      throw Oe(we.BAD_RESPONSE, E.error);
    return re(H.viewKind, E.value);
  }, oe = async (H, M, te) => {
    if (!L(H)) return;
    const j = u.getContext();
    if (!(!j || j.slot !== "card" || j.viewState?.bindingId !== M))
      try {
        const F = await u.request(Ji.RELEASE, { viewToken: H, bindingId: M, registrationId: te }, { timeoutMs: r }), B = wp(F);
        (B.ok === !1 || !$i(B.value, { viewToken: H, bindingId: M, registrationId: te })) && console.error("[hana] App view-state cleanup reply did not confirm the released registration.");
      } catch (F) {
        console.error("[hana] failed to release a superseded App view-state registration:", F instanceof Error ? F.message : F);
      }
  }, Se = (H, M) => (H.releasePromise || (H.releasePromise = (async () => {
    const te = M?.timeoutMs ?? r;
    N(H, "released"), d === H && (d = null);
    const j = u.getContext(), F = j?.viewState;
    if (!(L(H.viewToken) && j?.slot === "card" && !!F && F.bindingId === H.bindingId)) return { released: !1 };
    const X = await u.request(Ji.RELEASE, {
      viewToken: H.viewToken,
      bindingId: H.bindingId,
      registrationId: H.registrationId
    }, { timeoutMs: te }), ae = wp(X);
    if (ae.ok === !1)
      throw Oe(we.BAD_RESPONSE, ae.error);
    if (!$i(ae.value, {
      viewToken: H.viewToken,
      bindingId: H.bindingId,
      registrationId: H.registrationId
    }))
      throw Oe(we.VIEW_STALE, "This view-state release reply answered a different view than the one this handle targets.");
    const $ = u.getContext();
    if (!L(H.viewToken) || $?.slot !== "card" || $.viewState?.bindingId !== H.bindingId || $.viewState?.viewKind !== H.viewKind)
      throw Oe(we.VIEW_STALE, "The namespace changed before this view-state release was confirmed.");
    return { released: ae.value.released };
  })()), H.releasePromise), G = (H, M, te, j, F) => {
    const B = new AbortController(), X = {
      viewToken: H,
      bindingId: M,
      viewKind: te,
      registrationId: j,
      lifetime: B,
      initial: F,
      releasePromise: null,
      terminated: null
    };
    return X.handle = {
      get initial() {
        return _b(X.initial);
      },
      signal: B.signal,
      get: (ae) => ge(X, ae),
      set: (ae, $) => se(X, ae, $),
      release: (ae) => Se(X, ae)
    }, X;
  };
  return {
    api: { enable: async (H) => {
      const M = H?.timeoutMs ?? r;
      if (o) throw Oe(we.RELEASED, "The App view-state controller was released.");
      const te = u.getContext();
      if (te && te.slot !== "card")
        throw Oe(we.UNAVAILABLE, "View-state recovery is only available on an App card surface.");
      const j = te?.viewState?.bindingId ?? null, F = ++s;
      p("superseded");
      const B = new AbortController(), X = { abort: B, tokenCaptured: !1 };
      m.set(F, X);
      let ae = null;
      try {
        let $;
        try {
          $ = await u.currentView.waitForToken(M, B.signal);
        } catch (de) {
          throw o ? Oe(we.RELEASED, "The App view-state controller was released.") : B.signal.aborted ? Oe(we.VIEW_STALE, "A newer view-state enable replaced this one before it was bound.") : b(de);
        }
        if (X.tokenCaptured = !0, o) throw Oe(we.RELEASED, "The App view-state controller was released.");
        if (F !== s || B.signal.aborted)
          throw Oe(we.VIEW_STALE, "A newer view-state enable replaced this one before it was bound.");
        le($);
        const E = u.getContext(), z = E?.viewState;
        if (!E || E.slot !== "card" || !z || z.available !== !0)
          throw Oe(we.UNAVAILABLE, "The App view-state namespace is not available here right now.");
        if (j !== null && j !== z.bindingId)
          throw Oe(we.VIEW_STALE, "The App view-state namespace changed before this enable was sent.");
        le($);
        const W = await ne(Ji.ENABLE, {
          viewToken: $,
          bindingId: z.bindingId
        }, M, null), P = wo(W);
        if (P.ok === !1)
          throw Oe(we.BAD_RESPONSE, P.error);
        if (!$i(P.value, { viewToken: $, bindingId: z.bindingId }))
          throw Oe(we.VIEW_STALE, "This view-state enable reply answered a different view than the one that was enabled.");
        if (ae = { token: $, bindingId: z.bindingId, registrationId: P.value.registrationId }, o) throw Oe(we.RELEASED, "The App view-state controller was released.");
        if (F !== s || B.signal.aborted || !m.has(F))
          throw Oe(we.VIEW_STALE, "This view-state enable was voided before its reply arrived.");
        if (!L($))
          throw Oe(we.VIEW_STALE, "The document changed before this view-state enable reply arrived.");
        const ie = u.getContext();
        if (!ie || ie.slot !== "card" || ie.viewState?.bindingId !== z.bindingId || ie.viewState?.viewKind !== z.viewKind)
          throw Oe(we.VIEW_STALE, "The namespace changed before this view-state enable reply arrived.");
        if (ie.viewState?.available !== !0)
          throw Oe(we.UNAVAILABLE, "The App view-state namespace paused before this enable was confirmed.");
        const be = _o(P.value.snapshot);
        if (be.ok === !1)
          throw Oe(we.BAD_RESPONSE, be.error);
        const fe = re(z.viewKind, be.value), ee = G($, z.bindingId, z.viewKind, P.value.registrationId, fe);
        return d = ee, ae = null, ee.handle;
      } catch ($) {
        throw ae !== null && await oe(ae.token, ae.bindingId, ae.registrationId), $;
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
function Ob(u) {
  if (typeof u != "object" || u === null)
    throw Oe(we.INVALID_INPUT, "View-state set requires an object with an expected revision and a state.");
  const r = u.expectedRevision;
  if (!Number.isSafeInteger(r) || r < 0)
    throw Oe(we.INVALID_INPUT, "View-state set requires a non-negative safe-integer expected revision.");
  return r;
}
var $p = /* @__PURE__ */ new WeakMap();
function Fp(u, r) {
  $p.set(u, r);
}
function Pp(u) {
  const r = $p.get(u);
  return r ? r() : null;
}
function Fl(u) {
  return typeof u == "object" && u !== null && !Array.isArray(u);
}
function nu(u) {
  const r = /* @__PURE__ */ new Set(), o = (d, m) => {
    if (m > 32) throw new Error("Input panel JSON exceeds the maximum depth of 32.");
    if (d === null || typeof d == "string" || typeof d == "boolean" || typeof d == "number" && Number.isFinite(d)) return d;
    if (typeof d != "object" || d === null) throw new Error("Input panel values must be valid JSON.");
    if (r.has(d)) throw new Error("Input panel values must not contain cycles.");
    const g = Object.getPrototypeOf(d);
    if (!Array.isArray(d) && g !== Object.prototype && g !== null)
      throw new Error("Input panel values must contain only JSON objects and arrays.");
    if (Object.getOwnPropertySymbols(d).length > 0) throw new Error("Input panel JSON must not contain symbol keys.");
    r.add(d);
    let y;
    if (Array.isArray(d)) {
      const S = [];
      for (let b = 0; b < d.length; b++) {
        if (!Object.prototype.hasOwnProperty.call(d, b)) throw new Error("Input panel JSON must not contain sparse arrays.");
        S.push(o(d[b], m + 1));
      }
      y = S;
    } else {
      const S = /* @__PURE__ */ Object.create(null);
      for (const b of Object.keys(d)) S[b] = o(d[b], m + 1);
      y = S;
    }
    return r.delete(d), y;
  }, s = JSON.stringify(o(u, 0));
  if (new TextEncoder().encode(s).byteLength > Np)
    throw new Error(`Input panel JSON exceeds ${Np} bytes.`);
  return JSON.parse(s);
}
function Wp(u) {
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
    data: nu(u.data ?? null),
    requestedSchema: nu(u.requestedSchema ?? null),
    presentation: { height: o.height, collapsedHeight: o.collapsedHeight, expanded: o.expanded }
  };
}
function Hr(u) {
  return { ...u, data: nu(u.data), requestedSchema: nu(u.requestedSchema), presentation: { ...u.presentation } };
}
function Cb(u) {
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
function xb(u, r) {
  if (!Fl(u) || !Fl(u.presentation) || !Number.isSafeInteger(u.presentationRevision)) throw new Error("The input panel presentation response is invalid.");
  const o = Wp({ ...r, presentation: u.presentation, presentationRevision: u.presentationRevision });
  return { presentation: o.presentation, presentationRevision: o.presentationRevision };
}
function Rb(u) {
  let r = null, o = 0, s = null, d = 0;
  const m = /* @__PURE__ */ new Map(), g = /* @__PURE__ */ new Set(), y = () => {
    for (const A of g) A(r ? Hr(r) : null);
  }, S = () => {
    r = null, o++;
    for (const A of m.values())
      clearTimeout(A.timeout), A.reject(new Error("The input panel binding was replaced."));
    m.clear(), y();
  }, b = (A) => {
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
    if (A.kind === "event" && A.type === Fi.CONTEXT) {
      if (A.payload === null) S();
      else {
        let he;
        try {
          he = Wp(A.payload);
        } catch (ue) {
          return S(), console.warn("[hana] invalid input panel context:", ue), !0;
        }
        const Z = r?.panelId === he.panelId && r.appId === he.appId && r.sessionId === he.sessionId && r.confirmId === he.confirmId && r.status === he.status && r.instanceId === he.instanceId && r.revision === he.revision;
        if (Z && r && he.presentationRevision < r.presentationRevision) return !0;
        Z || b("The input panel binding was replaced."), r = he, Z || o++, y();
      }
      return !0;
    }
    if ((A.kind === "response" || A.kind === "error") && A.type === Fi.PRESENTATION && A.id) {
      const he = m.get(A.id);
      if (!he) return !1;
      if (m.delete(A.id), clearTimeout(he.timeout), he.generation !== o)
        he.reject(new Error("The input panel binding was replaced."));
      else if (A.kind === "error") he.reject(new Error(A.error?.message || "The input panel presentation could not be updated."));
      else
        try {
          const Z = xb(A.payload, r);
          r && Z.presentationRevision >= r.presentationRevision && (r = { ...r, ...Z }, y()), he.resolve(Z);
        } catch (Z) {
          he.reject(Z instanceof Error ? Z : new Error("The input panel presentation response is invalid."));
        }
      return !0;
    }
    if (A.kind !== "request" || A.type !== Fi.SUBMIT) return !1;
    if (!A.id) return !0;
    const x = A.payload, V = r;
    if (!Fl(x) || !V || V.status !== "pending" || !V.confirmId || x.panelId !== V.panelId || x.instanceId !== V.instanceId || x.revision !== V.revision)
      return N(A, "INPUT_PANEL_STALE", "This request does not match the active input panel question."), !0;
    const L = s;
    if (!L && V.requestedSchema !== null)
      return N(A, "INPUT_PANEL_SUBMIT_UNHANDLED", "Register hana.inputPanel.onSubmit to provide this question’s answer."), !0;
    const le = o, ye = {
      panelId: V.panelId,
      instanceId: V.instanceId,
      revision: V.revision
    };
    return Promise.resolve().then(() => L ? L(Hr(V)) : null).then((he) => {
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
        payload: { ...ye, value: nu(he) }
      });
    }).catch((he) => {
      N(A, "INPUT_PANEL_SUBMIT_FAILED", he instanceof Error ? he.message : "The input panel could not provide an answer.");
    }), !0;
  }
  return { api: {
    getContext: () => r ? Hr(r) : null,
    onContextChanged(A) {
      return g.add(A), A(r ? Hr(r) : null), () => {
        g.delete(A);
      };
    },
    onSubmit(A) {
      if (typeof A != "function") throw new TypeError("hana.inputPanel.onSubmit requires a function.");
      return s = A, () => {
        s === A && (s = null);
      };
    },
    async setPresentation(A) {
      const x = r, V = Cb(A);
      if (!x) throw new Error("The input panel is not ready.");
      const L = o, le = `input-panel-presentation:${x.panelId}:${x.instanceId}:${Date.now().toString(36)}:${++d}`;
      return new Promise((ye, he) => {
        const Z = setTimeout(() => {
          m.delete(le), he(new Error("The input panel presentation request timed out."));
        }, 1e4);
        m.set(le, { generation: L, resolve: ye, reject: he, timeout: Z });
        const ue = (ne) => {
          const re = m.get(le);
          re && (m.delete(le), clearTimeout(re.timeout), re.reject(ne instanceof Error ? ne : new Error("The input panel presentation request could not be delivered.")));
        };
        try {
          u({
            protocol: dt,
            version: ht,
            id: le,
            kind: "request",
            type: Fi.PRESENTATION,
            payload: { panelId: x.panelId, instanceId: x.instanceId, revision: x.revision, presentationRevision: x.presentationRevision, presentation: V }
          }, ue);
        } catch (ne) {
          ue(ne);
        }
        if (o !== L) {
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
}, Op = 0, uu = 60, jb = 240;
function Db() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : (Op += 1, `hana-plugin-${Date.now()}-${Op}`);
}
function Ub() {
  if (typeof window > "u")
    throw new Error("@hana/plugin-sdk requires a browser iframe window.");
  return window;
}
var Cp = "data-hana-theme-style";
async function zb(u, r) {
  const o = await fetch(r, { credentials: "same-origin" });
  if (!o.ok)
    throw new Error(`hana theme stylesheet request failed with ${o.status}`);
  const s = await o.text(), d = u.head ?? u.documentElement;
  if (!d) throw new Error("hana theme stylesheet has nowhere to attach");
  let m = u.querySelector(`style[${Cp}]`);
  m || (m = u.createElement("style"), m.setAttribute(Cp, "")), m.textContent = s, d.appendChild(m);
}
function Mb(u) {
  if (typeof u != "object" || u === null) return !1;
  const r = u;
  return ["light", "dark"].every((o) => {
    const s = r[o];
    return typeof s == "object" && s !== null && typeof s.theme == "string" && typeof s.cssUrl == "string";
  });
}
function Hb(u) {
  const r = new URLSearchParams(u.location.search), o = r.get("hana-theme-appearance"), s = r.get("hana-palette-light-theme"), d = r.get("hana-palette-light-css"), m = r.get("hana-palette-dark-theme"), g = r.get("hana-palette-dark-css");
  return {
    theme: r.get("hana-theme") ?? void 0,
    cssUrl: r.get("hana-css") ?? void 0,
    appearance: o === "light" || o === "dark" ? o : void 0,
    palettes: s && d && m && g ? { light: { theme: s, cssUrl: d }, dark: { theme: m, cssUrl: g } } : void 0
  };
}
function eg(u, r = uu) {
  return typeof u != "number" || !Number.isFinite(u) ? r : Math.max(0, Math.min(jb, Math.round(u)));
}
function tg({
  visible: u,
  maxFrameRate: r,
  slot: o,
  reason: s
}) {
  const d = u ? eg(r) : 0, m = u && d > 0;
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
  const r = new URLSearchParams(u.location.search), o = r.get("hana-visible"), s = !(o === "0" || o === "false"), d = r.get("hana-max-fps"), m = d === null ? NaN : Number(d), g = Number.isFinite(m) ? m : uu;
  return tg({
    visible: s,
    maxFrameRate: g,
    reason: "initial"
  });
}
function Lb(u, r) {
  if (typeof u != "object" || u === null) return null;
  const o = u, s = typeof o.visible == "boolean" ? o.visible : r.visible, d = eg(
    o.maxFrameRate,
    r.maxFrameRate > 0 ? r.maxFrameRate : uu
  ), m = typeof o.active == "boolean" ? o.active && s && d > 0 : s && d > 0, g = o.motion, y = g === "full" || g === "reduced" || g === "paused" ? g : m ? "full" : "paused", S = typeof o.slot == "string" ? o.slot : r.slot, b = typeof o.reason == "string" ? o.reason : r.reason;
  return {
    visible: s,
    active: m,
    maxFrameRate: m ? d : 0,
    motion: m ? y : "paused",
    ...S === "page" || S === "widget" || S === "card" || S === "settings" || S === "function-panel" || S === "slot" ? { slot: S } : {},
    ...b ? { reason: b } : {}
  };
}
function Ib(u, r) {
  if (typeof u != "object" || u === null) return null;
  const o = u.visible;
  return typeof o != "boolean" ? null : tg({
    visible: o,
    maxFrameRate: o && r.maxFrameRate > 0 ? r.maxFrameRate : uu,
    slot: r.slot,
    reason: "legacy-visibility"
  });
}
function Bb(u, r) {
  return u.visible === r.visible && u.active === r.active && u.maxFrameRate === r.maxFrameRate && u.motion === r.motion && u.slot === r.slot && u.reason === r.reason;
}
function Oo(u) {
  return {
    width: { ...u.width },
    height: { ...u.height }
  };
}
function xp(u) {
  if (typeof u != "object" || u === null) return null;
  const r = u;
  return r.mode === "fixed" ? typeof r.value != "number" || !Number.isFinite(r.value) ? null : { mode: "fixed", value: Math.round(r.value) } : r.mode === "flexible" ? typeof r.max != "number" || !Number.isFinite(r.max) ? null : { mode: "flexible", max: Math.round(r.max) } : r.mode === "unbounded" ? { mode: "unbounded" } : null;
}
function Vb(u) {
  if (typeof u != "object" || u === null) return null;
  const r = u, o = xp(r.width), s = xp(r.height);
  return !o || !s ? null : { width: o, height: s };
}
function Rp(u) {
  if (u === null) return null;
  if (typeof u == "string") return u;
}
function Gb(u) {
  if (typeof u != "object" || u === null || Array.isArray(u)) return;
  const r = u;
  if (tu(r.bindingId) && !(r.viewKind !== "compact" && r.viewKind !== "detached") && typeof r.available == "boolean")
    return { bindingId: r.bindingId, viewKind: r.viewKind, available: r.available };
}
function Yb(u) {
  if (typeof u != "object" || u === null || Array.isArray(u)) return null;
  const r = u, o = typeof r.appId == "string" && r.appId.trim() ? r.appId.trim() : null, s = r.slot, d = r.cardInstanceId;
  if (!o || s !== "card" && s !== "function-panel" && s !== "settings" && s !== "slot" && s !== "input-panel") return null;
  const m = Rp(r.embeddedSessionId), g = Rp(r.originSessionId), y = Zp(r.instanceKey);
  if (y === null) return null;
  const S = Gb(r.viewState), b = typeof d == "string" && !!d.trim();
  if (y !== void 0 && !b) return null;
  const N = {};
  return m !== void 0 && (N.embeddedSessionId = m), g !== void 0 && (N.originSessionId = g), y !== void 0 && (N.instanceKey = y), S !== void 0 && (N.viewState = S), s === "settings" || s === "input-panel" ? d === null ? { appId: o, slot: s, cardInstanceId: null, ...N } : null : b ? { appId: o, slot: s, cardInstanceId: d.trim(), ...N } : s !== "card" || d !== null || typeof r.embeddedSessionId != "string" || !r.embeddedSessionId.trim() ? null : { appId: o, slot: s, cardInstanceId: null, ...N };
}
function Co(u) {
  return {
    ...u,
    ...u.viewState ? { viewState: { ...u.viewState } } : {}
  };
}
function jp(u) {
  if (typeof u != "object" || u === null || Array.isArray(u)) return null;
  const r = u, o = typeof r.sessionId == "string" && r.sessionId.trim() ? r.sessionId : null, s = typeof r.sessionPath == "string" && r.sessionPath ? r.sessionPath : null;
  return !o || !s || r.title !== null && typeof r.title != "string" || r.agentId !== null && typeof r.agentId != "string" ? null : {
    sessionId: o,
    sessionPath: s,
    title: r.title,
    agentId: r.agentId
  };
}
function Xb(u) {
  if (typeof u != "object" || u === null || Array.isArray(u)) return null;
  const r = u, o = r.previous === null ? null : jp(r.previous), s = r.current === null ? null : jp(r.current);
  return r.previous !== null && o === null || r.current !== null && s === null || typeof r.timestamp != "number" || !Number.isFinite(r.timestamp) ? null : { previous: o, current: s, timestamp: r.timestamp };
}
function Qb(u) {
  if (typeof u != "object" || u === null || Array.isArray(u)) return null;
  const r = u;
  return typeof r.code != "string" || !r.code.trim() || typeof r.message != "string" || !r.message.trim() ? null : new Ca({ code: r.code, message: r.message });
}
function Kb(u) {
  return typeof u == "string" ? { url: u } : u;
}
function kb(u) {
  return typeof u == "string" ? { text: u } : u;
}
function ng(u) {
  const r = Io(u.location.pathname || "");
  if (!r)
    throw new Error("App asset/API URL helper requires an App surface route under /api/apps/:appId/ui/ or a scoped service mount.");
  return r.appId;
}
function Zb(u, r) {
  if (!r || !["card", "function-panel", "settings", "slot"].includes(r.slot)) return !1;
  try {
    return ng(u) === r.appId;
  } catch {
    return !1;
  }
}
function Jb(u) {
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
function $b(u) {
  return new URLSearchParams(u.location.search).get("hana-asset-base") || null;
}
function Fb(u, r) {
  const o = Jb(r), s = $b(u);
  if (!s)
    throw new Error(
      "hana.assets.url() requires the host-issued hana-asset-base query parameter: this page was not opened by the host with an asset base; hana.assets.url() only works inside a Hana app surface."
    );
  const d = new URL(s);
  return d.pathname = `${d.pathname.replace(/\/+$/, "")}/${o}`, d.toString();
}
function ag(u) {
  return new URLSearchParams(u.location.search).get(V0) || null;
}
function Pb(u) {
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
    let b;
    try {
      b = decodeURIComponent(S);
    } catch {
      throw new Error("Invalid plugin API path.");
    }
    if (b === "." || b === ".." || b.includes("/") || b.includes("\\"))
      throw new Error("Invalid plugin API path.");
  }
  const g = new URL(`http://hana.local/${o}`);
  return `${m.map((S) => encodeURIComponent(decodeURIComponent(S))).join("/")}${g.search}`;
}
function lg(u, r, o = !1) {
  const s = ng(u);
  let d = Pb(r);
  if (o && d.startsWith("_runtime/")) {
    const m = ag(u);
    if (!m) throw new Error("hana.api.url for a managed service requires appSurfaceSession in the iframe URL.");
    const g = /^(_runtime\/[^/?]+)\/(.+)$/.exec(d);
    if (!g || g[2].startsWith("_surface/")) throw new Error("Invalid managed service API path.");
    d = `${g[1]}/_surface/${encodeURIComponent(m)}/${g[2]}`;
  }
  return `${u.location.origin}/api/apps/${encodeURIComponent(s)}/routes/${d}`;
}
function Wb(u, r, o, s) {
  const d = ag(u);
  if (!d)
    throw new Error("hana.api.fetch requires appSurfaceSession in the iframe URL.");
  const m = u.fetch?.bind(u) ?? globalThis.fetch?.bind(globalThis);
  if (!m)
    throw new Error("hana.api.fetch requires window.fetch.");
  const g = o ?? {}, y = new Headers(g.headers);
  return y.set(B0, d), s && y.set("X-Hana-Document-Binding", s), m(lg(u, r), {
    ...g,
    headers: y
  });
}
function eE(u) {
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
function tE(u, r) {
  if (typeof r != "object" || r === null) return !1;
  const o = r;
  return u.kind === "global" ? o.kind === "global" : o.kind === "agent" && o.agentId === u.agentId;
}
function ig(u = {}) {
  const r = u.targetWindow ?? Ub(), o = u.parentWindow ?? r.parent, s = qp(r, u.targetOrigin), d = u.requestTimeoutMs ?? 1e4, m = u.idFactory ?? Db, g = Rb($), y = sb({
    targetWindow: r,
    post: $,
    // A host that rebound its bridge to this same document gets a fresh
    // handshake by re-announcing the ready the page already sent.
    reannounceReady: () => {
      oe && W(Se);
    }
  }), S = db({
    request: Ne,
    post: $,
    targetWindow: r,
    currentView: y,
    requestTimeoutMs: d
  }), b = u.followHostTheme !== !1;
  let N = Hb(r), p = qb(r), I = null, A = null;
  const x = /* @__PURE__ */ new Set(), V = /* @__PURE__ */ new Set(), L = /* @__PURE__ */ new Set(), le = /* @__PURE__ */ new Set(), ye = /* @__PURE__ */ new Set(), he = /* @__PURE__ */ new Set(), Z = /* @__PURE__ */ new Set(), ue = /* @__PURE__ */ new Set(), ne = /* @__PURE__ */ new Set();
  let re = null, ge = null, se = null, oe = !1, Se, G = !1, me = !1, De = !1, H = Promise.resolve();
  const M = /* @__PURE__ */ new Map();
  let te = 1, j = null, F = null, B = null, X = !1;
  function ae(O) {
    if (!b || !O) return;
    const J = r.document;
    J && zb(J, O).catch((Y) => {
      if (u.onThemeError) {
        u.onThemeError(Y);
        return;
      }
      console.error("[hana] failed to follow host theme", Y);
    });
  }
  function $(O, J) {
    if (u.messageTransport) {
      const Y = u.messageTransport.postMessage(O);
      Y && Y.catch(J ?? ((k) => console.error("[hana] host message delivery failed", k)));
    } else o.postMessage(O, s);
  }
  function E(O) {
    if (u.messageTransport) return u.messageTransport.onMessage(O);
    const J = (Y) => {
      Lp(Y, o, s) && O(Y.data);
    };
    return r.addEventListener("message", J), () => r.removeEventListener("message", J);
  }
  function z(O, J) {
    const Y = {
      protocol: dt,
      version: ht,
      kind: "event",
      type: O
    };
    J !== void 0 && (Y.payload = J), $(Y);
  }
  function W(O) {
    z("hana.ready", O);
  }
  function P(O) {
    const J = O instanceof Ca ? O : new Ca({
      code: "HOST_ERROR",
      message: O instanceof Error ? O.message : "Active session subscription failed."
    });
    let Y = !1;
    for (const k of ne)
      if (k.onError) {
        Y = !0;
        try {
          k.onError(J);
        } catch (Ee) {
          console.error("[hana] active session error callback failed", Ee);
        }
      }
    Y || console.error("[hana] active session subscription failed", J);
  }
  function ie() {
    return ne.size > 0 && !De && !me;
  }
  function be() {
    H = H.catch(() => {
    }).then(async () => {
      for (; G !== ie(); ) {
        if (ie()) {
          try {
            if (await ee(), (await Ne(zr.SUBSCRIBE)).subscribed !== !0) {
              G = !1, me || P(new Ca({
                code: "HOST_ERROR",
                message: "The host did not establish the active session subscription."
              }));
              return;
            }
            G = !0;
          } catch (O) {
            G = !1, P(O);
            return;
          }
          continue;
        }
        try {
          await ee(), await Ne(zr.UNSUBSCRIBE);
        } catch (O) {
          P(O);
        }
        G = !1;
      }
    });
  }
  function fe(O) {
    const J = r.document?.readyState;
    return J !== "loading" && J !== "interactive" ? Promise.resolve() : new Promise((Y, k) => {
      const Ee = () => {
        r.clearTimeout(St), r.removeEventListener("load", Be), r.removeEventListener("pagehide", $e);
      }, Be = () => {
        Ee(), Y();
      }, $e = () => {
        Ee(), k(new Ca({
          code: "SURFACE_UNAVAILABLE",
          message: "The App surface unloaded before interactive regions could be registered."
        }));
      }, St = r.setTimeout(() => {
        Ee(), k(new Ca({
          code: "TIMEOUT",
          message: "The App document did not finish loading before interactive regions could be registered."
        }));
      }, O);
      r.addEventListener("load", Be), r.addEventListener("pagehide", $e);
    });
  }
  function ee(O) {
    return fe(O ?? d).then(() => {
      W(Se);
    });
  }
  function de(O) {
    const J = r.requestAnimationFrame?.bind(r), Y = r.cancelAnimationFrame?.bind(r);
    if (J && Y) {
      const Ee = J(O);
      return () => Y(Ee);
    }
    const k = r.setTimeout(() => {
      const Ee = r.performance?.now?.() ?? Date.now();
      O(Ee);
    }, Math.max(1, Math.round(1e3 / Math.max(p.maxFrameRate, uu))));
    return () => r.clearTimeout(k);
  }
  function We() {
    j && (j(), j = null);
  }
  function rt() {
    j || M.size === 0 || !p.active || p.maxFrameRate <= 0 || (j = de((O) => {
      if (j = null, !p.active || p.maxFrameRate <= 0) return;
      const J = 1e3 / p.maxFrameRate;
      if (F !== null && O >= F && O - F < J) {
        rt();
        return;
      }
      F = O;
      const Y = Array.from(M.entries());
      for (const [k, Ee] of Y)
        if (M.delete(k))
          try {
            Ee(O);
          } catch (Be) {
            r.setTimeout(() => {
              throw Be;
            }, 0);
          }
      rt();
    }));
  }
  function Yt(O) {
    if (!Bb(p, O)) {
      p = O;
      for (const J of L) J({ ...p });
      if (!p.active || p.maxFrameRate <= 0) {
        We();
        return;
      }
      rt();
    }
  }
  function an(O) {
    if (typeof O == "object" && O !== null && O.protocol === void 0 && O.type === "visibility-changed") {
      const k = Ib(
        O.payload,
        p
      );
      k && Yt(k);
      return;
    }
    const J = Pi(O);
    if (!J.ok) return;
    const Y = J.value;
    if (!y.handleHostMessage(Y) && !S.handleHostMessage(Y)) {
      if (g.handleMessage(Y)) {
        Y.type === Fi.CONTEXT && Y.payload === null && oe && W(Se);
        return;
      }
      if (Y.kind === "request" && Y.type === "hana.document.view-request") {
        const k = typeof Y.payload == "object" && Y.payload !== null ? Y.payload : null, Ee = k && typeof k.requestId == "string" ? k.requestId : "", Be = k && typeof k.documentId == "string" ? k.documentId : "", $e = k && typeof k.viewId == "string" ? k.viewId : "", St = k?.revision, Ht = k && typeof k.method == "string" ? k.method.trim() : "";
        if (!Ee || !Be || !$e || !Ht || Ht.length > 128 || !Number.isSafeInteger(St) || Number(St) < 0) {
          $({
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
          $({
            protocol: dt,
            version: ht,
            id: Y.id,
            kind: "error",
            type: Y.type,
            error: { code: "DOCUMENT_VIEW_REQUEST_UNHANDLED", message: "The document view cannot handle this request." }
          });
          return;
        }
        const Tt = k?.payload, Ra = se;
        Promise.resolve().then(() => Ra({
          requestId: Ee,
          documentId: Be,
          viewId: $e,
          revision: St,
          method: Ht,
          ...Object.prototype.hasOwnProperty.call(k, "payload") ? { payload: Tt } : {}
        })).then((pn) => {
          $({ protocol: dt, version: ht, id: Y.id, kind: "response", type: Y.type, payload: pn });
        }, (pn) => {
          $({
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
        const k = Y.payload, Ee = typeof k == "object" && k !== null ? k : null, Be = Ee && typeof Ee.requestId == "string" ? Ee.requestId : "", $e = Ee?.kind, St = Ee?.revision;
        if (!Be || !["save", "prepareClose", "revert", "undo", "redo"].includes(String($e)) || !Number.isSafeInteger(St)) {
          $({
            protocol: dt,
            version: ht,
            id: Y.id,
            kind: "error",
            type: Y.type,
            error: { code: "DOCUMENT_REQUEST_INVALID", message: "Invalid document request." }
          });
          return;
        }
        if (!ge) {
          $({
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
        Promise.resolve(ge(Ht)).then((Tt) => {
          $({ protocol: dt, version: ht, id: Y.id, kind: "response", type: Y.type, payload: Tt });
        }, (Tt) => {
          $({
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
        const k = r.document, Ee = k ? Qp(k, Y.payload, Zb(r, A)) : { ok: !1, code: "UI_ACTION_DOCUMENT_UNAVAILABLE", error: "No document is available." };
        Ee.ok === !0 ? $({
          protocol: dt,
          version: ht,
          id: Y.id,
          kind: "response",
          type: Ie.UI_ACTION,
          payload: Ee.result
        }) : $({
          protocol: dt,
          version: ht,
          id: Y.id,
          kind: "error",
          type: Ie.UI_ACTION,
          error: { code: Ee.code, message: Ee.error, ...Ee.result ? { details: Ee.result } : {} }
        });
        return;
      }
      if (Y.kind === "event") {
        if (Y.type === "hana.document.binding") {
          const k = Y.payload, Ee = typeof k == "object" && k !== null ? k.access : null;
          re = typeof Ee?.bindingId == "string" && Ee.bindingId ? Ee.bindingId : null;
          return;
        }
        if (Y.type === Kl.THEME_CHANGED) {
          if (typeof Y.payload != "object" || Y.payload === null) return;
          const k = Y.payload, Ee = typeof k.theme == "string" ? k.theme : N.theme, Be = typeof k.theme == "string" && k.theme !== N.theme;
          N = {
            theme: Ee,
            cssUrl: typeof k.cssUrl == "string" ? k.cssUrl : N.cssUrl,
            appearance: k.appearance === "light" || k.appearance === "dark" ? k.appearance : Be ? void 0 : N.appearance,
            palettes: Mb(k.palettes) ? k.palettes : Be ? void 0 : N.palettes
          };
          for (const $e of x) $e({ ...N });
          ae(N.cssUrl);
          return;
        }
        if (Y.type === Kl.SURFACE_ENVELOPE_CHANGED) {
          const k = Vb(Y.payload);
          if (!k) return;
          I = k;
          for (const Ee of V) Ee(Oo(I));
          return;
        }
        if (Y.type === Kl.SURFACE_RUNTIME_CHANGED) {
          const k = Lb(Y.payload, p);
          k && Yt(k);
          return;
        }
        if (Y.type === W0.CONTEXT) {
          const k = Y.payload === null ? null : Yb(Y.payload);
          if (Y.payload !== null && k === null) return;
          const Ee = k?.appId !== A?.appId || k?.slot !== A?.slot || k?.cardInstanceId !== A?.cardInstanceId || k?.instanceKey !== A?.instanceKey || k?.embeddedSessionId !== A?.embeddedSessionId || k?.originSessionId !== A?.originSessionId || k?.viewState?.bindingId !== A?.viewState?.bindingId || k?.viewState?.viewKind !== A?.viewState?.viewKind || k?.viewState?.available !== A?.viewState?.available;
          if (y.applySurfaceContext(k === null ? null : { appId: k.appId, cardInstanceId: k.cardInstanceId, instanceKey: k.instanceKey ?? null }), A = k, Ee)
            for (const Be of le) Be(A ? Co(A) : null);
          return;
        }
        if (Y.type === _p.ACTIVE_CHANGED) {
          if (me) return;
          const k = Xb(Y.payload);
          if (!k) return;
          for (const Ee of ne) Ee.callback(k);
          return;
        }
        if (Y.type === _p.ERROR) {
          const k = Qb(Y.payload);
          if (!k) return;
          G = !1, me = !0, P(k), be();
          return;
        }
        if (Y.type === Kl.STORAGE_CHANGED) {
          if (typeof Y.payload != "object" || Y.payload === null) return;
          const k = Y.payload.keys, Ee = Array.isArray(k) ? k.filter((Be) => typeof Be == "string") : [];
          for (const Be of ye) Be(Ee.slice());
          return;
        }
        if (Y.type === G0.CHANGED) {
          if (typeof Y.payload != "object" || Y.payload === null) return;
          const k = Y.payload, Ee = k.keys, Be = Array.isArray(Ee) ? Ee.filter(($e) => typeof $e == "string") : [];
          for (const $e of he)
            tE($e.scope, k.scope) && $e.callback(Be.slice());
          return;
        }
        if (Y.type === Kl.PANEL_EVENT) {
          if (typeof Y.payload != "object" || Y.payload === null) return;
          const k = Y.payload, Ee = typeof k.sectionId == "string" ? k.sectionId : null, Be = k.kind;
          if (!Ee || Be !== "select" && Be !== "action" && Be !== "toggle") return;
          const $e = {
            sectionId: Ee,
            kind: Be,
            ...typeof k.itemId == "string" ? { itemId: k.itemId } : {},
            ...typeof k.checked == "boolean" ? { checked: k.checked } : {}
          };
          for (const St of Z) St($e);
          return;
        }
        if (Y.type === Kl.PANEL_REFRESH)
          for (const k of ue) k();
      }
    }
  }
  E(an), r.addEventListener("pagehide", (O) => {
    g.clear(), De = !0, be(), O?.persisted === !1 && (X = !0, y.dispose(), B?.dispose(), S.dispose());
  }), r.addEventListener("pageshow", () => {
    De && (De = !1, be());
  });
  function Ne(O, J, Y = {}) {
    const k = m(), Ee = Y.timeoutMs ?? d;
    return new Promise((Be, $e) => {
      let St = () => {
      };
      const Ht = () => {
        St(), r.clearTimeout(Ra);
      }, Tt = (ja) => {
        const Wl = Pi(ja);
        if (!Wl.ok) return;
        const gn = Wl.value;
        gn.id !== k || gn.type !== O || (gn.kind === "response" && (Ht(), Be(gn.payload)), gn.kind === "error" && gn.error && (Ht(), $e(new Ca(gn.error))));
      }, Ra = r.setTimeout(() => {
        Ht(), $e(new Ca({
          code: "TIMEOUT",
          message: `Plugin host request timed out: ${O}.`
        }));
      }, Ee), pn = {
        protocol: dt,
        version: ht,
        id: k,
        kind: "request",
        type: O
      };
      J !== void 0 && (pn.payload = J);
      try {
        St = E(Tt), $(pn, (ja) => {
          Ht(), $e(ja);
        });
      } catch (ja) {
        Ht(), $e(ja);
      }
    });
  }
  function Qe(O) {
    return {
      get(J, Y) {
        return Ne(Zl.GET, { scope: O, key: J }, Y);
      },
      getAll(J) {
        return Ne(Zl.GET_ALL, { scope: O }, J);
      },
      set(J, Y, k) {
        return Ne(Zl.SET, { scope: O, key: J, value: Y }, k);
      },
      delete(J, Y) {
        return Ne(Zl.DELETE, { scope: O, key: J }, Y);
      },
      keys(J) {
        return Ne(Zl.KEYS, { scope: O }, J);
      },
      onChanged(J) {
        if (O.kind === "agent" && !O.agentId)
          throw new Error(
            "hana.storage.agent() with no agentId cannot subscribe with onChanged — a subscription outlives any single request, so pass an explicit agentId to subscribe to a stable scope."
          );
        const Y = { scope: O, callback: J };
        return he.add(Y), () => {
          he.delete(Y);
        };
      }
    };
  }
  const Xt = {
    ready(O) {
      oe = !0, Se = O, W(O);
    },
    inputPanel: g.api,
    assets: {
      url(O) {
        return Fb(r, O);
      }
    },
    api: {
      url(O) {
        return lg(r, O, !0);
      },
      fetch(O, J) {
        return Wb(r, O, J, re);
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
        return I ? Oo(I) : null;
      },
      subscribe(O) {
        return V.add(O), O(I ? Oo(I) : null), () => {
          V.delete(O);
        };
      }
    },
    lifecycle: {
      getSnapshot() {
        return { ...p };
      },
      subscribe(O) {
        return L.add(O), O({ ...p }), () => {
          L.delete(O);
        };
      }
    },
    cards: {
      open(O, J) {
        if (typeof O != "string" || !O.trim())
          return Promise.reject(new TypeError("hana.cards.open requires a non-empty declared card ID."));
        let Y;
        if (J !== void 0) {
          if (typeof J != "object" || J === null || Array.isArray(J))
            return Promise.reject(new TypeError("hana.cards.open options must be an object."));
          if (Object.keys(J).some((Ee) => Ee !== "instanceKey"))
            return Promise.reject(new TypeError("hana.cards.open options accepts only instanceKey."));
          const k = Zp(J.instanceKey);
          if (k === null)
            return Promise.reject(new TypeError("hana.cards.open instanceKey must be a non-empty string of at most 256 code units without NUL."));
          Y = k;
        }
        return Ne(kp.OPEN, {
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
      setInteractiveRegions(O, J) {
        const Y = Y0({ regions: O });
        return Y.ok === !1 ? Promise.reject(new TypeError(Y.error)) : oe ? fe(J?.timeoutMs ?? d).then(() => (W(Se), Ne(Do.SET_INTERACTIVE_REGIONS, Y.value, J))) : Ne(Do.SET_INTERACTIVE_REGIONS, Y.value, J);
      }
    },
    sessions: {
      getActive(O) {
        return ee(O?.timeoutMs).then(() => Ne(zr.GET_ACTIVE, void 0, O));
      },
      focus(O, J) {
        return !O || typeof O.sessionId != "string" || !O.sessionId.trim() ? Promise.reject(new TypeError("hana.sessions.focus requires a non-empty sessionId.")) : ee(J?.timeoutMs).then(() => Ne(
          zr.FOCUS,
          { sessionId: O.sessionId.trim() },
          J
        ));
      },
      onActiveChanged(O, J) {
        const Y = { callback: O, onError: J };
        return me = !1, ne.add(Y), be(), () => {
          ne.delete(Y) && be();
        };
      }
    },
    performance: {
      requestAnimationFrame(O) {
        const J = te;
        return te += 1, M.set(J, O), rt(), J;
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
      show(O, J) {
        return Ne(Ie.TOAST_SHOW, O, J);
      }
    },
    external: {
      open(O, J) {
        return Ne(Ie.EXTERNAL_OPEN, Kb(O), J);
      }
    },
    clipboard: {
      writeText(O, J) {
        return Ne(
          Ie.CLIPBOARD_WRITE_TEXT,
          kb(O),
          J
        );
      }
    },
    resources: {
      open(O, J) {
        return Ne(Ie.RESOURCE_OPEN, O, J);
      },
      pick(O = {}, J) {
        return Ne(Ie.RESOURCE_PICK, O, J);
      },
      saveFile(O, J) {
        return Ne(Ie.RESOURCE_SAVE_FILE, O, J);
      },
      requestAccess(O, J) {
        return Ne(
          Ie.RESOURCE_REQUEST_ACCESS,
          O,
          J
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
      reportStatus(O, J) {
        return Ne("hana.document.report-status", O, J);
      },
      open(O, J) {
        return Ne("hana.document.open", O, J);
      },
      rebind(O, J) {
        return Ne("hana.document.rebind", O, J);
      },
      openDrop(O, J) {
        if (O.defaultPrevented) return Promise.resolve(null);
        const Y = O.dataTransfer?.getData("application/x-hana-file-drag") || "";
        if (Y) return Ne("hana.document.open-drop", { dragId: Y }, J);
        const k = Array.from(O.dataTransfer?.files || []);
        return k.length !== 1 ? Promise.resolve(null) : Ne("hana.document.open-drop", { file: k[0] }, J);
      },
      onRequest(O) {
        return ge = O, () => {
          ge === O && (ge = null);
        };
      },
      onViewRequest(O) {
        return se = O, () => {
          se === O && (se = null);
        };
      }
    },
    state: {
      get(O, J) {
        const Y = typeof O == "string" && O ? { key: O } : {};
        return Ne(Ie.STATE_GET, Y, J);
      },
      set(O, J, Y) {
        const k = typeof O == "string" ? { key: O, value: J } : { state: O };
        return Ne(Ie.STATE_SET, k, Y);
      }
    },
    storage: {
      get(O, J) {
        return Ne(Ie.STORAGE_GET, { key: O }, J);
      },
      getAll(O) {
        return Ne(Ie.STORAGE_GET_ALL, {}, O);
      },
      set(O, J, Y) {
        return Ne(Ie.STORAGE_SET, { key: O, value: J }, Y);
      },
      delete(O, J) {
        return Ne(Ie.STORAGE_DELETE, { key: O }, J);
      },
      onChanged(O) {
        return ye.add(O), () => {
          ye.delete(O);
        };
      },
      global: Qe({ kind: "global" }),
      agent(O) {
        return Qe({ kind: "agent", agentId: O });
      }
    },
    emit(O, J, Y, k) {
      const Ee = {
        name: O,
        userGesture: eE(r)
      };
      return arguments.length >= 2 && (Ee.payload = J), typeof Y == "string" && Y.trim() && (Ee.to = Y.trim()), Ne(Ie.EMIT, Ee, k);
    },
    track(O, J, Y) {
      const k = { name: O };
      return arguments.length >= 2 && (k.payload = J), Ne(Ie.TRACK, k, Y);
    },
    panel: {
      set(O, J) {
        return Ne(Ie.PANEL_SET, O, J);
      },
      onEvent(O) {
        return Z.add(O), () => {
          Z.delete(O);
        };
      },
      onRefresh(O) {
        return ue.add(O), () => {
          ue.delete(O);
        };
      }
    }
  };
  return Fp(Xt, () => X ? null : (B ??= wb({
    request: Ne,
    currentView: y,
    getContext: () => A,
    subscribeContext: (O) => (le.add(O), () => {
      le.delete(O);
    }),
    requestTimeoutMs: d
  }), B.api)), Xt;
}
var Dp = null;
function Te() {
  return Dp ??= ig(), Dp;
}
var ug = {
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
Fp(ug, () => Pp(Te()));
function Br(u) {
  return u.hanaAppWindow;
}
function mn(u) {
  const r = Br(u);
  if (!r) throw Object.assign(new Error("This App surface is not an App-owned native window."), { code: "APP_WINDOW_UNAVAILABLE" });
  return r;
}
function nE(u) {
  return (typeof window < "u" ? Br(u()) : void 0)?.onDocumentAction?.((o) => {
    const s = Qp(u().document, o, !0);
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
var aE = /* @__PURE__ */ new Set([
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
  ...Object.values(Zl),
  ...Object.values(kp),
  Do.SET_INTERACTIVE_REGIONS,
  "hana.document.get-context",
  "hana.document.read",
  "hana.document.report-status",
  "hana.document.open",
  "hana.document.rebind",
  "hana.document.open-drop"
]);
function rg() {
  if (typeof window > "u") throw new Error("@hana/app-sdk/ui requires a browser App iframe.");
  return window;
}
function lE(u) {
  if (!Io(u.location?.pathname ?? ""))
    throw new Error("@hana/app-sdk/ui requires an App surface route under /api/apps/:appId/ui/ or a scoped service mount.");
}
function iE(u) {
  if (!aE.has(u))
    throw new Error(`@hana/app-sdk/ui does not expose host request type: ${u}`);
}
function uE(u) {
  return {
    get global() {
      return u().storage.global;
    },
    agent(r) {
      return u().storage.agent(r);
    }
  };
}
function rE(u, r = rg, o = {}) {
  return {
    window: nE(r),
    surfaces: {
      onEvent(s, d) {
        if (typeof s != "string" || !s.trim() || s.length > 256 || typeof d != "function")
          throw new TypeError("surfaces.onEvent requires a surface id and a listener.");
        return mn(r()).onMessage((m) => {
          const g = Pi(m);
          if (!g.ok || g.value.kind !== "event" || g.value.type !== "hana.app-surface.event") return;
          const y = g.value.payload;
          if (!y || typeof y != "object" || Array.isArray(y)) return;
          const S = y;
          S.surfaceId !== s || typeof S.type != "string" || !S.type.trim() || d({ surfaceId: s, type: S.type, ...S.payload === void 0 ? {} : { payload: S.payload } });
        });
      }
    },
    appEvents: {
      on(s, d) {
        if (typeof s != "string" || !s.trim() || s.length > 128 || typeof d != "function") throw new TypeError("appEvents.on requires an event name and a listener.");
        const m = r(), g = Io(m.location?.pathname ?? "");
        if (!g)
          throw new Error("@hana/app-sdk/ui requires an App surface route under /api/apps/:appId/ui/ or a scoped service mount.");
        const y = g.appId, S = (A) => {
          const x = Pi(A);
          if (!x.ok || x.value.kind !== "event" || x.value.type !== "hana.app.event") return;
          const V = x.value.payload;
          V?.source !== `app:${y}` || V.type !== s || !V.payload || typeof V.payload != "object" || Array.isArray(V.payload) || d(V.payload);
        }, b = o.messageTransport ?? Br(m);
        if (b) return b.onMessage(S);
        const N = o.parentWindow ?? m.parent, p = qp(m, o.targetOrigin), I = (A) => {
          Lp(A, N, p) && S(A.data);
        };
        return m.addEventListener("message", I), () => m.removeEventListener("message", I);
      }
    },
    instances: {
      onChanged(s) {
        return mn(r()).onMessage((d) => {
          if (!d || typeof d != "object") return;
          const m = d;
          if (m.protocol !== dt || m.version !== ht || m.kind !== "event" || m.type !== "hana.app-instance.changed") return;
          const g = m.payload;
          g && typeof g.instanceId == "string" && typeof g.revision == "number" && Number.isSafeInteger(g.revision) && typeof g.state == "string" && s({ instanceId: g.instanceId, revision: g.revision, state: g.state });
        });
      }
    },
    environments: {
      onChanged(s) {
        if (typeof s != "function") throw new TypeError("environments.onChanged requires a listener.");
        return mn(r()).onMessage((d) => {
          const m = Pi(d);
          if (!m.ok || m.value.kind !== "event" || m.value.type !== "hana.app-environment.changed") return;
          const g = m.value.payload;
          g && typeof g.environmentId == "string" && typeof g.revision == "number" && Number.isSafeInteger(g.revision) && typeof g.state == "string" && s({ environmentId: g.environmentId, revision: g.revision, state: g.state });
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
        return iE(s), u().host.request(s, d, m);
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
    storage: uE(u),
    emit(s, d, m, g) {
      return u().emit(s, d, m, g);
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
        const d = Pp(u());
        return d ? d.enable(s) : Promise.reject(Object.assign(new Error("App view-state recovery is unavailable on this surface."), { code: "VIEW_STATE_UNAVAILABLE" }));
      }
    }
  };
}
var sE, mt = rE(() => {
  const u = rg();
  lE(u);
  const r = Br(u);
  return r ? sE ??= ig({ targetWindow: u, messageTransport: r }) : ug;
});
function Hn(...u) {
  return u.filter(Boolean).join(" ");
}
const Up = {
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
}, cE = {
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
function oE({ mode: u = "inherit", theme: r, className: o, style: s, children: d, "data-testid": m = "hana-plugin-theme", ...g }) {
  const y = typeof r == "string" ? r : void 0, S = fE(u, r);
  return h.jsx("div", { ...g, "data-testid": m, className: Hn("hana-plugin-theme", o), "data-hana-theme-mode": u, "data-hana-theme": u === "hana" ? y : void 0, style: { ...S, ...s }, children: d });
}
function fE(u, r) {
  if (u === "inherit")
    return {};
  const o = dE(u, r), s = {};
  for (const [d, m] of Object.entries(cE)) {
    const g = o?.[d];
    g && (s[m] = g);
  }
  return s;
}
function dE(u, r) {
  if (typeof r == "string")
    return Up[r];
  if (r)
    return r;
  if (u === "hana")
    return Up["warm-paper"];
}
const Ce = q.forwardRef(function({ variant: r = "secondary", size: o = "md", loading: s = !1, iconLeft: d, iconRight: m, disabled: g, className: y, children: S, type: b = "button", ...N }, p) {
  return h.jsxs("button", { ...N, ref: p, type: b, disabled: g || s, className: Hn("hana-plugin-button", `hana-plugin-button-${r}`, `hana-plugin-button-${o}`, s && "hana-plugin-button-loading", y), children: [s ? h.jsx("span", { className: "hana-plugin-spinner", "aria-hidden": !0 }) : d, S && h.jsx("span", { className: "hana-plugin-button-label", children: S }), !s && m] });
});
q.forwardRef(function({ label: r, size: o = "md", variant: s = "ghost", className: d, children: m, type: g = "button", ...y }, S) {
  return h.jsx("button", { ...y, ref: S, type: g, "aria-label": r, title: y.title || r, className: Hn("hana-plugin-icon-button", `hana-plugin-icon-button-${o}`, `hana-plugin-icon-button-${s}`, d), children: m });
});
const Rt = q.forwardRef(function({ label: r, hint: o, error: s, id: d, className: m, inputClassName: g, ...y }, S) {
  const b = q.useId(), N = d || b;
  return h.jsx(sg, { label: r, hint: o, error: s, htmlFor: N, className: m, children: h.jsx("input", { ...y, ref: S, id: N, "aria-invalid": !!s, className: Hn("hana-plugin-input", g) }) });
});
q.forwardRef(function({ label: r, hint: o, error: s, id: d, className: m, textareaClassName: g, rows: y = 4, ...S }, b) {
  const N = q.useId(), p = d || N;
  return h.jsx(sg, { label: r, hint: o, error: s, htmlFor: p, className: m, children: h.jsx("textarea", { ...S, ref: b, id: p, rows: y, "aria-invalid": !!s, className: Hn("hana-plugin-textarea", g) }) });
});
q.forwardRef(function({ checked: r, onChange: o, label: s, disabled: d, className: m, onClick: g, type: y = "button", ...S }, b) {
  const N = typeof s == "string" ? s : S["aria-label"];
  return h.jsxs("span", { className: Hn("hana-plugin-switch-wrap", m), children: [h.jsx("button", { ...S, ref: b, type: y, role: "switch", "aria-checked": r, "aria-label": N, disabled: d, className: Hn("hana-plugin-switch", r && "hana-plugin-switch-on"), onClick: (p) => {
    g?.(p), !p.defaultPrevented && !d && o?.(!r);
  }, children: h.jsx("span", { className: "hana-plugin-switch-thumb", "aria-hidden": !0 }) }), s && h.jsx("span", { className: "hana-plugin-switch-label", children: s })] });
});
function sg({ label: u, hint: r, error: o, htmlFor: s, className: d, children: m }) {
  return h.jsxs("div", { className: Hn("hana-plugin-field", d), children: [u && h.jsx("label", { className: "hana-plugin-field-label", htmlFor: s, children: u }), r && h.jsx("div", { className: "hana-plugin-field-hint", children: r }), m, o && h.jsx("div", { className: "hana-plugin-field-error", children: o })] });
}
function Mn({ title: u, description: r, actions: o, footer: s, children: d, className: m, ...g }) {
  return h.jsxs("section", { ...g, className: Hn("hana-plugin-card", m), children: [(u || r || o) && h.jsxs("header", { className: "hana-plugin-card-header", children: [h.jsxs("div", { className: "hana-plugin-card-heading", children: [u && h.jsx("h2", { className: "hana-plugin-card-title", children: u }), r && h.jsx("p", { className: "hana-plugin-card-description", children: r })] }), o && h.jsx("div", { className: "hana-plugin-card-actions", children: o })] }), h.jsx("div", { className: "hana-plugin-card-body", children: d }), s && h.jsx("footer", { className: "hana-plugin-card-footer", children: s })] });
}
function nl({ icon: u, title: r, description: o, action: s, className: d, ...m }) {
  return h.jsxs("div", { ...m, className: Hn("hana-plugin-empty", d), children: [u && h.jsx("div", { className: "hana-plugin-empty-icon", children: u }), h.jsx("div", { className: "hana-plugin-empty-title", children: r }), o && h.jsx("div", { className: "hana-plugin-empty-description", children: o }), s && h.jsx("div", { className: "hana-plugin-empty-action", children: s })] });
}
const cg = (u) => u.replace(/^\/+/, "");
async function og(u) {
  const r = await u.text();
  try {
    return JSON.parse(r);
  } catch {
    return { ok: !1, stage: "http", message: `HTTP ${u.status}：${(r || "无响应体").slice(0, 200)}` };
  }
}
async function Ye(u) {
  const r = await mt.api.fetch(cg(u));
  return og(r);
}
async function Pe(u, r) {
  const o = await mt.api.fetch(cg(u), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(r)
  });
  return og(o);
}
async function zp(u, r, o = 3e4) {
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
function fg(u, r) {
  const o = /^#\s+(.+?)（([^（）]+),\s*(\d{4}[^)）]*)）$/.exec(String(u || "").trim());
  return { title: o ? o[1] : r, meta: o ? `${o[2].trim()} · ${o[3]}` : "" };
}
function $l({ id: u, value: r, onChange: o, options: s, placeholder: d, allowCustom: m = !1 }) {
  const [g, y] = q.useState(r), [S, b] = q.useState(!1), [N, p] = q.useState(0), [I, A] = q.useState(null), x = q.useRef(null), V = q.useRef(null);
  q.useEffect(() => {
    y(r);
  }, [r]);
  const L = String(g || "").trim().toLowerCase(), le = q.useMemo(() => {
    if (!L) return s;
    const ue = s.filter((ne) => ne.value.toLowerCase().includes(L) || ne.label.toLowerCase().includes(L));
    return ue.length ? ue : s;
  }, [s, L]), ye = q.useCallback(() => {
    const ue = x.current;
    if (!ue) return;
    const ne = ue.getBoundingClientRect(), re = window.innerHeight || document.documentElement.clientHeight || 720, ge = re - ne.bottom - 8, se = ne.top - 8, oe = ge < 160 && se > ge, Se = Math.max(120, Math.min(340, Math.floor(oe ? se : ge))), G = oe ? Math.max(4, ne.top - Se - 2) : Math.max(4, Math.min(ne.bottom + 2, re - Se - 4));
    A({ left: ne.left, width: Math.max(ne.width, 180), top: G, maxH: Se });
  }, []), he = q.useCallback(() => {
    ye(), b(!0), p(0);
  }, [ye]);
  q.useEffect(() => {
    if (!S) return;
    const ue = (re) => {
      const ge = re.target;
      x.current?.contains(ge) || V.current?.contains(ge) || b(!1);
    }, ne = () => ye();
    return document.addEventListener("pointerdown", ue, !0), window.addEventListener("scroll", ne, !0), window.addEventListener("resize", ne), () => {
      document.removeEventListener("pointerdown", ue, !0), window.removeEventListener("scroll", ne, !0), window.removeEventListener("resize", ne);
    };
  }, [S, ye]);
  const Z = (ue) => {
    y(ue), o(ue), b(!1);
  };
  return /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
    /* @__PURE__ */ h.jsx(
      "input",
      {
        ref: x,
        id: u,
        className: "native-sel",
        value: g,
        placeholder: d,
        onFocus: he,
        onClick: he,
        onChange: (ue) => {
          const ne = ue.currentTarget.value;
          y(ne), (m || s.some((re) => re.value === ne)) && o(ne), ye(), b(!0), p(0);
        },
        onBlur: () => {
          window.setTimeout(() => {
            V.current?.contains(document.activeElement) || (b(!1), m || y(r));
          }, 120);
        },
        onKeyDown: (ue) => {
          ue.stopPropagation(), ue.key === "ArrowDown" ? (ue.preventDefault(), S ? p((ne) => Math.min(ne + 1, le.length - 1)) : he()) : ue.key === "ArrowUp" ? (ue.preventDefault(), p((ne) => Math.max(ne - 1, 0))) : ue.key === "Enter" ? S && le[N] && (ue.preventDefault(), Z(le[N].value)) : ue.key === "Escape" && b(!1);
        }
      }
    ),
    S && I && b0.createPortal(
      /* @__PURE__ */ h.jsxs(
        "div",
        {
          ref: V,
          className: "combo-pop",
          style: { left: I.left, top: I.top, width: I.width, maxHeight: I.maxH },
          children: [
            le.length === 0 && /* @__PURE__ */ h.jsx("div", { className: "combo-opt muted", children: "（无匹配）" }),
            le.map((ue, ne) => /* @__PURE__ */ h.jsx(
              "div",
              {
                className: ne === N ? "combo-opt on" : "combo-opt",
                onMouseEnter: () => p(ne),
                onMouseDown: (re) => {
                  re.preventDefault(), Z(ue.value);
                },
                children: ue.label
              },
              ue.value
            ))
          ]
        }
      ),
      document.body
    )
  ] });
}
async function dg(u) {
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
function pE(u) {
  return u.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function Oa(u) {
  return pE(u).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
}
function gE(u) {
  const r = String(u || "").split(/\r?\n/), o = [];
  let s = 0, d = !1;
  const m = () => {
    d && (o.push("</ul>"), d = !1);
  };
  for (; s < r.length; ) {
    const g = r[s];
    if (/^\|.*\|/.test(g) && s + 1 < r.length && /^\|\s*-+/.test(r[s + 1])) {
      m();
      const y = g.split("|").slice(1, -1).map((b) => b.trim());
      s += 2;
      const S = [];
      for (; s < r.length && /^\|/.test(r[s]); )
        S.push(r[s].split("|").slice(1, -1).map((b) => b.trim())), s++;
      o.push("<table><thead><tr>" + y.map((b) => `<th>${Oa(b)}</th>`).join("") + "</tr></thead><tbody>");
      for (const b of S) o.push("<tr>" + b.map((N) => `<td>${Oa(N)}</td>`).join("") + "</tr>");
      o.push("</tbody></table>");
      continue;
    }
    /^###\s/.test(g) ? (m(), o.push(`<h3>${Oa(g.slice(4))}</h3>`)) : /^##\s/.test(g) ? (m(), o.push(`<h2>${Oa(g.slice(3))}</h2>`)) : /^#\s/.test(g) ? (m(), o.push(`<h1>${Oa(g.slice(2))}</h1>`)) : /^>\s?/.test(g) ? (m(), o.push(`<blockquote>${Oa(g.replace(/^>\s?/, ""))}</blockquote>`)) : /^-\s/.test(g) || /^\*\s/.test(g) ? (d || (o.push("<ul>"), d = !0), o.push(`<li>${Oa(g.slice(2))}</li>`)) : /^---+\s*$/.test(g) ? (m(), o.push("<hr>")) : g.trim() === "" ? m() : (m(), o.push(`<p>${Oa(g)}</p>`)), s++;
  }
  return m(), o.join(`
`);
}
function au({ md: u }) {
  return /* @__PURE__ */ h.jsx("div", { className: "doc", dangerouslySetInnerHTML: { __html: gE(u) } });
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
      const m = d.split("|").slice(1, -1).map((g) => g.trim());
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
  const u = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), [r, o] = q.useState({ id: "", title: "", authors: "", year: "", venue: "", textType: "", score: "9", rationale: "", date: u, recordedBy: "" }), [s, d] = q.useState(null), [m, g] = q.useState([]), y = (b, N) => o((p) => ({ ...p, [b]: N }));
  q.useEffect(() => {
    let b = !0;
    return (async () => {
      const N = await Ye("/api/list?dir=篇目").catch(() => null);
      if (!N?.ok) return;
      const p = (N.items || []).map((A) => A.name).filter((A) => A.endsWith(".md") && !A.startsWith("_")), I = await Promise.all(p.map(async (A) => {
        const x = await Ye(nn(`篇目/${A}`)).catch(() => null), V = x?.ok ? String(x.content || "").split(/\r?\n/, 1)[0] : "", L = /^#\s+(.+?)（([^（）]+),\s*(\d{4})[^)）]*）$/.exec(String(V || "").trim()), le = A.replace(/\.md$/, "");
        return { id: le, title: L ? L[1] : le, label: L ? `${L[1]}（${L[2].trim()} · ${L[3]}）` : le, authors: L ? L[2].trim() : "", year: L ? L[3] : "" };
      }));
      b && g(I);
    })(), () => {
      b = !1;
    };
  }, []);
  async function S() {
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
    }, N = await Pe("/api/tool/commit_anchor", { anchor: b });
    d(N), N.ok && mt.toast.show({ message: "评分已落盘", type: "success" });
  }
  return /* @__PURE__ */ h.jsxs("div", { className: "form", children: [
    /* @__PURE__ */ h.jsx("p", { className: "hint", children: "你自己的总分和理由是整条评分链的起点：只增不改，理由至少 10 字，后续归纳评分指引全靠它。不录也不阻断——只是模型分数永远无锚点参照。" }),
    /* @__PURE__ */ h.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ h.jsx(
        $l,
        {
          id: "cb-score-entry",
          value: "",
          placeholder: m.length ? `输入过滤或选择篇目（${m.length} 篇，选中即预填）` : "读取篇目中…",
          onChange: (b) => {
            const N = m.find((p) => p.id === b);
            N && o((p) => ({ ...p, id: N.id, title: N.title, authors: N.authors, year: N.year }));
          },
          options: m.map((b) => ({ value: b.id, label: b.label }))
        }
      ),
      /* @__PURE__ */ h.jsx("span", { className: "hint", children: "也可不选直接手填（锚点可以是尚未拆解的文献）。" })
    ] }),
    /* @__PURE__ */ h.jsxs("div", { className: "grid2", children: [
      /* @__PURE__ */ h.jsx(Rt, { label: "篇目 id（slug-年）", value: r.id, onChange: (b) => y("id", b.currentTarget.value), placeholder: "sample-2020" }),
      /* @__PURE__ */ h.jsx(Rt, { label: "文本类型（你判）", value: r.textType, onChange: (b) => y("textType", b.currentTarget.value), placeholder: "论证型 / 阐释型…" }),
      /* @__PURE__ */ h.jsx(Rt, { label: "标题", value: r.title, onChange: (b) => y("title", b.currentTarget.value) }),
      /* @__PURE__ */ h.jsx(Rt, { label: "作者", value: r.authors, onChange: (b) => y("authors", b.currentTarget.value) }),
      /* @__PURE__ */ h.jsx(Rt, { label: "年份", value: r.year, onChange: (b) => y("year", b.currentTarget.value) }),
      /* @__PURE__ */ h.jsx(Rt, { label: "出处（可空）", value: r.venue, onChange: (b) => y("venue", b.currentTarget.value) }),
      /* @__PURE__ */ h.jsx(Rt, { label: "总分 1-10", value: r.score, onChange: (b) => y("score", b.currentTarget.value) }),
      /* @__PURE__ */ h.jsx(Rt, { label: "日期", value: r.date, onChange: (b) => y("date", b.currentTarget.value) })
    ] }),
    /* @__PURE__ */ h.jsx(Rt, { label: "理由（≥10 字）", value: r.rationale, onChange: (b) => y("rationale", b.currentTarget.value) }),
    /* @__PURE__ */ h.jsx(Rt, { label: "录入者", value: r.recordedBy, onChange: (b) => y("recordedBy", b.currentTarget.value) }),
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
    const [S, b] = s(y.pair);
    if (S && b) {
      const N = o(S), p = o(b);
      N !== p && r.set(N, p);
    }
  }
  const d = /* @__PURE__ */ new Map(), m = [];
  for (const y of u) {
    const [S, b] = s(y.pair);
    if (S && b && o(S) === o(b)) {
      const N = o(S);
      let p = d.get(N);
      p || (p = { rows: [], labels: [] }, d.set(N, p)), p.rows.push(y);
    } else
      m.push(y);
  }
  for (const y of d.values()) {
    const S = /* @__PURE__ */ new Set();
    for (const b of y.rows) for (const N of s(b.pair)) S.add(N);
    y.labels = [...S];
  }
  return { clusters: [...d.values()].sort((y, S) => {
    const b = y.rows.map((p) => p.date).sort()[0] || "", N = S.rows.map((p) => p.date).sort()[0] || "";
    return b !== N ? b < N ? -1 : 1 : S.rows.length - y.rows.length;
  }), weak: m };
}
const xo = (u) => u.labels.slice().sort().join("|");
function SE({ tick: u, onChanged: r }) {
  const [o, s] = q.useState([]), [d, m] = q.useState({}), [g, y] = q.useState(""), [S, b] = q.useState(!1), [N, p] = q.useState(""), [I, A] = q.useState(!1), [x, V] = q.useState({}), [L, le] = q.useState(null), [ye, he] = q.useState(!1), [Z, ue] = q.useState("");
  q.useEffect(() => {
    let j = !1;
    return (async () => {
      const F = await Ye("/api/model/status").catch(() => null);
      if (j || !F || !F.running || F.kind !== "propose") return;
      b(!0), y("AI 语义查重进行中（接管切页前的任务）…");
      const B = await tl("/api/model/status", { kind: "propose", timeoutMs: 180 * 1e3 });
      j || (y(B.ok ? `已入队 ${B.queued?.length || 0} 对` : B.message || "未产出建议"), B.ok && await ne(), b(!1));
    })(), () => {
      j = !0;
    };
  }, []);
  const ne = q.useCallback(async () => {
    const j = await Ye(nn("标签库.md"));
    s(j.ok ? Bo(j.content) : []);
  }, []);
  q.useEffect(() => {
    ne();
  }, [ne, u]);
  async function re(j, F, B) {
    const X = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), ae = d[j] || `裁决执行：${j}`, $ = await Pe("/api/tool/apply_tag_merge", { mergedLabel: F, target: B, date: X, evidence: ae });
    y($.ok ? `已执行：${F} → ${$.now}` : $.message || JSON.stringify($)), $.ok && (await ne(), r?.());
  }
  async function ge(j) {
    const F = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), B = d[j] || "", X = await Pe("/api/tool/apply_pair_independent", { pair: j, date: F, reason: B });
    y(X.ok ? `已判定独立，两标签都保留：${j}` : X.message || JSON.stringify(X)), X.ok && (await ne(), r?.());
  }
  const se = (j, F, B) => V((X) => ({ ...X, [j]: B(X[j] || { groups: [], pool: F.slice(), sel: [] }) }));
  async function oe(j, F) {
    const B = xo(F);
    le(j), y("");
    try {
      const X = await Pe("/api/model/propose-partition", {
        labels: F.labels,
        pairs: F.rows.map(($) => ({ pair: $.pair, evidence: $.evidence }))
      });
      if (!X.started) {
        y(X.message || "发起失败"), le(null);
        return;
      }
      const ae = await tl("/api/model/status", { kind: "partition", timeoutMs: 180 * 1e3 });
      if (ae.stage === "timeout") {
        y(ae.message), le(null);
        return;
      }
      if (ae.ok && Array.isArray(ae.groups)) {
        const $ = ae.groups.filter((E) => Array.isArray(E) && E.length > 0).map((E) => ({ target: E[0], members: E.slice() }));
        se(B, F.labels, (E) => ({ ...E, groups: $, pool: [], sel: [] })), y(ae.message ? `分族提案已给出（${ae.message}）——点选标签可调整分组` : "分族提案已给出，核对后提交");
      } else
        y(ae.message || "未产出分族提案");
    } catch (X) {
      y(`请求失败：${String(X?.message || X)}`);
    }
    le(null);
  }
  async function Se(j, F) {
    const B = xo(F), X = x[B] || { groups: [], pool: F.labels.slice(), sel: [] };
    if (X.pool.length > 0) {
      y(`还有 ${X.pool.length} 个标签未分组（可「全部各自成组」）`);
      return;
    }
    if (!X.groups.length) {
      y("先分组再提交");
      return;
    }
    const ae = X.groups.flatMap((ee) => ee.members), $ = F.labels.filter((ee) => !ae.includes(ee)), E = ae.filter((ee, de) => ae.indexOf(ee) !== de);
    if ($.length || E.length) {
      y(`分组与标签清单不符 — 缺：${$.join("、") || "无"}；重复：${E.join("、") || "无"}`);
      return;
    }
    for (const ee of X.groups) {
      const de = String(ee.target ?? "");
      if (ee.members.length > 0 && !de.trim()) {
        y("有组的存活名为空——补填，或把该组成员移回池");
        return;
      }
      if (de.includes(" vs ")) {
        y("存活名不能包含「 vs 」（会破坏对的解析）");
        return;
      }
    }
    he(!0), y("");
    const z = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), W = /* @__PURE__ */ new Map();
    X.groups.forEach((ee, de) => ee.members.forEach((We) => W.set(We, de)));
    let P = 0, ie = 0, be = 0, fe = "";
    try {
      for (const ee of X.groups) {
        if (ee.members.length < 2) continue;
        const de = String(ee.target);
        for (const We of ee.members) {
          if (We === de) continue;
          ue(`正在合并：「${We}」→「${de}」…`);
          const rt = await zp("/api/tool/apply_tag_merge", {
            mergedLabel: We,
            target: de,
            date: z,
            evidence: `相关组分区提交：组内「${We}」并入「${de}」`
          });
          if (!rt.ok) {
            fe = `合并「${We}→${de}」失败：${rt.message || JSON.stringify(rt)}`;
            break;
          }
          P++;
        }
        if (fe) break;
      }
      if (!fe)
        for (const ee of F.rows) {
          const [de, We] = ee.pair.split(" vs ");
          if (W.get(de) === W.get(We)) continue;
          ue(`正在判定独立：${ee.pair}…`);
          const rt = await zp("/api/tool/apply_pair_independent", {
            pair: ee.pair,
            date: z,
            reason: "相关组分区提交：分属不同组"
          });
          if (rt.ok) {
            ie++;
            continue;
          }
          const Yt = String(rt.message || "");
          if (Yt.includes("已有裁决") || Yt.includes("无此对")) {
            be++;
            continue;
          }
          fe = `判定独立「${ee.pair}」失败：${Yt || JSON.stringify(rt)}`;
          break;
        }
    } catch (ee) {
      fe = `提交中断（网络/桥接异常）：${String(ee?.message || ee)}`;
    }
    y(fe ? `${fe}（此前已完成：${P} 合并、${ie} 独立；直接再点提交即可续跑——已并入的标签重试幂等，不会重复执行）` : `已提交本组裁决：${P} 合并、${ie} 独立${be ? `、${be} 对已随合并关闭` : ""}`);
    try {
      await ne();
    } catch {
    }
    r?.(), fe || V((ee) => ({ ...ee, [B]: { groups: [], pool: F.labels.slice(), sel: [] } })), ue(""), he(!1);
  }
  async function G() {
    b(!0), y(""), p("co");
    let j = "";
    try {
      const F = await Pe("/api/tool/suggest_tag_merges", {});
      if (j = F.ok ? F.written ? `共现入队 ${F.written} 对` : "共现无新候选" : `共现扫描失败：${F.message || JSON.stringify(F)}`, F.ok)
        try {
          await ne();
        } catch {
        }
      p("semantic");
      const B = await Pe("/api/model/propose-merges", {});
      if (!B.started)
        y(`${j}；语义查重未启动：${B.message || "发起失败"}`);
      else {
        const X = await tl("/api/model/status", { kind: "propose", timeoutMs: 18e4 });
        if (X.stage === "timeout")
          y(`${j}；语义查重${X.message || "等待超时"}`);
        else {
          const ae = X.ok ? X.message || (X.queued?.length ? `语义入队 ${X.queued.length} 对：${X.queued.join("；")}` : "语义未找到新对") : X.message || "语义查重未产出建议";
          if (y(`${j}；${ae}`), X.ok && X.queued?.length)
            try {
              await ne();
            } catch {
            }
        }
      }
    } catch (F) {
      y(`${j ? `${j}；` : ""}查重中断：${String(F?.message || F)}`);
    }
    p(""), b(!1), r?.();
  }
  const me = o.filter((j) => !j.decision), De = o.filter((j) => !!j.decision), { clusters: H, weak: M } = q.useMemo(() => EE(me), [o]), te = (j) => /* @__PURE__ */ h.jsx(Mn, { title: j.pair, description: `${j.date} 进队 · ${j.evidence}`, children: j.decision ? /* @__PURE__ */ h.jsxs("p", { className: "decided", children: [
    "已裁决：",
    j.decision
  ] }) : /* @__PURE__ */ h.jsxs("div", { className: "queue-actions", children: [
    [j.pair.split(" vs ")[0], j.pair.split(" vs ")[1]].filter(Boolean).map((F, B, X) => /* @__PURE__ */ h.jsx("div", { className: "queue-op", children: /* @__PURE__ */ h.jsxs(Ce, { onClick: () => re(j.pair, F, X[1 - B]), children: [
      "「",
      F,
      "」并入「",
      X[1 - B],
      "」"
    ] }) }, F)),
    /* @__PURE__ */ h.jsx("div", { className: "queue-op", children: /* @__PURE__ */ h.jsx(Ce, { onClick: () => ge(j.pair), children: "判定独立（都保留）" }) }),
    /* @__PURE__ */ h.jsx(Rt, { label: "依据（可空，判定独立时建议填）", value: d[j.pair] || "", onChange: (F) => {
      const B = F.currentTarget.value;
      m((X) => ({ ...X, [j.pair]: B }));
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
    g && /* @__PURE__ */ h.jsx("p", { className: g.startsWith("已") ? "ok" : "err", children: g }),
    /* @__PURE__ */ h.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ h.jsx(Ce, { variant: "primary", disabled: S, onClick: () => {
        G();
      }, children: N === "co" ? "共现扫描中…" : N === "semantic" ? "语义查重中…" : "一键查重" }),
      /* @__PURE__ */ h.jsx("span", { className: "hint", children: "一键查重：先扫共现（秒出），再跑 AI 语义（约半分钟，标签集未变自动跳过）；结果都进下方待裁决，每对来源写在证据里。" })
    ] }),
    o.length === 0 && /* @__PURE__ */ h.jsx(nl, { title: "暂无待裁决标签", description: "篇目积累出相近标签后，候选会自动出现在这里。" }),
    H.map((j, F) => {
      const B = xo(j), X = x[B] || { groups: [], pool: j.labels.slice(), sel: [] }, ae = /* @__PURE__ */ new Map();
      X.groups.forEach((z, W) => z.members.forEach((P) => ae.set(P, W)));
      const $ = X.groups.reduce((z, W) => z + (W.members.includes(W.target) ? Math.max(0, W.members.length - 1) : W.members.length), 0), E = j.rows.filter((z) => {
        const [W, P] = z.pair.split(" vs ");
        return ae.get(W) !== ae.get(P);
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
          /* @__PURE__ */ h.jsx(Ce, { disabled: L !== null || S, onClick: () => {
            oe(F, j);
          }, children: L === F ? "分组中…" : "智能分组" }),
          /* @__PURE__ */ h.jsx(Ce, { disabled: ye, onClick: () => se(B, j.labels, (z) => ({ ...z, groups: j.labels.map((W) => ({ target: W, members: [W] })), pool: [], sel: [] })), children: "全部各自成组" }),
          /* @__PURE__ */ h.jsx(Ce, { disabled: ye, onClick: () => se(B, j.labels, (z) => ({ ...z, groups: [{ target: j.labels[0], members: j.labels.slice() }], pool: [], sel: [] })), children: "全部并入一组" })
        ] }),
        X.groups.map((z, W) => /* @__PURE__ */ h.jsxs("div", { className: "group-card", children: [
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
                  const ie = P.currentTarget.value;
                  se(B, j.labels, (be) => ({ ...be, groups: be.groups.map((fe, ee) => ee === W ? { ...fe, target: ie } : fe) }));
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
              className: X.sel.includes(P) ? "tag-chip sel" : "tag-chip",
              onClick: () => se(B, j.labels, (ie) => ({ ...ie, sel: ie.sel.includes(P) ? ie.sel.filter((be) => be !== P) : [...ie.sel, P] })),
              children: [
                P,
                /* @__PURE__ */ h.jsx(
                  "button",
                  {
                    className: "chip-star",
                    title: "设为本组存活名",
                    onClick: (ie) => {
                      ie.stopPropagation(), se(B, j.labels, (be) => ({ ...be, groups: be.groups.map((fe, ee) => ee === W ? { ...fe, target: P } : fe) }));
                    },
                    children: z.target === P ? "★" : "☆"
                  }
                ),
                /* @__PURE__ */ h.jsx(
                  "button",
                  {
                    className: "chip-x",
                    onClick: (ie) => {
                      ie.stopPropagation(), se(B, j.labels, (be) => ({
                        ...be,
                        groups: be.groups.map((fe, ee) => {
                          if (ee !== W) return fe;
                          const de = fe.members.filter((We) => We !== P);
                          return { ...fe, members: de, target: fe.target === P ? de[0] || "" : fe.target };
                        }).filter((fe) => fe.members.length > 0),
                        pool: [...be.pool, P]
                      }));
                    },
                    children: "×"
                  }
                )
              ]
            },
            P
          )) }),
          X.sel.length > 0 && /* @__PURE__ */ h.jsxs(Ce, { onClick: () => se(B, j.labels, (P) => {
            const ie = P.sel.filter((fe) => j.labels.includes(fe));
            if (!ie.length) return P;
            const be = P.groups.map((fe, ee) => {
              const de = fe.members.filter((rt) => !ie.includes(rt));
              if (ee === W) return { ...fe, members: [...de, ...ie.filter((rt) => !de.includes(rt))], target: fe.target || (de[0] ?? ie[0]) };
              const We = fe.target && ie.includes(fe.target) ? de[0] || "" : fe.target;
              return { ...fe, members: de, target: We };
            }).filter((fe) => fe.members.length > 0);
            return { ...P, groups: be, pool: P.pool.filter((fe) => !ie.includes(fe)), sel: [] };
          }), children: [
            "把选中的 ",
            X.sel.length,
            " 个放进本组"
          ] })
        ] }, `g${W}`)),
        X.pool.length > 0 && /* @__PURE__ */ h.jsxs("div", { className: "pool-box", children: [
          /* @__PURE__ */ h.jsxs("p", { className: "hint", children: [
            "未分组（",
            X.pool.length,
            "）：标签点选后用下方行动按钮分组；组间提交即判定独立。"
          ] }),
          /* @__PURE__ */ h.jsx("p", { className: "cluster-tags", children: X.pool.map((z) => /* @__PURE__ */ h.jsx(
            "span",
            {
              className: X.sel.includes(z) ? "tag-chip sel" : "tag-chip",
              onClick: () => se(B, j.labels, (W) => ({ ...W, sel: W.sel.includes(z) ? W.sel.filter((P) => P !== z) : [...W.sel, z] })),
              children: z
            },
            z
          )) })
        ] }),
        X.sel.length > 0 && /* @__PURE__ */ h.jsxs("div", { className: "import-row sel-actions", children: [
          /* @__PURE__ */ h.jsxs(Ce, { onClick: () => se(B, j.labels, (z) => {
            const W = z.sel.filter((ie) => j.labels.includes(ie));
            if (!W.length) return z;
            const P = z.groups.map((ie) => {
              const be = ie.members.filter((ee) => !W.includes(ee)), fe = ie.target && W.includes(ie.target) ? be[0] || "" : ie.target;
              return { ...ie, members: be, target: fe };
            }).filter((ie) => ie.members.length > 0);
            return { ...z, groups: [...P, { target: W[0], members: W }], pool: z.pool.filter((ie) => !W.includes(ie)), sel: [] };
          }), children: [
            "成新组（",
            X.sel.length,
            "）"
          ] }),
          /* @__PURE__ */ h.jsxs("span", { className: "hint", children: [
            "已选中 ",
            X.sel.length,
            " 个标签：「成新组」拆出去（选 1 个即单独成组），或点目标组卡上的「放进本组」并入该组；再点标签取消选中。"
          ] })
        ] }),
        /* @__PURE__ */ h.jsxs("div", { className: "import-row", children: [
          /* @__PURE__ */ h.jsx(Ce, { variant: "primary", disabled: ye || X.pool.length > 0 || X.groups.length === 0, onClick: () => {
            Se(F, j);
          }, children: ye ? "提交中…" : `提交本组裁决（${$} 合并 + ${E} 独立）` }),
          /* @__PURE__ */ h.jsx("span", { className: "hint", children: ye && Z ? Z : X.pool.length > 0 ? "先把未分组标签分完（可「全部各自成组」）" : "先组内合并，再把跨组待裁对记为独立；存活名保留。" })
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
      ] }, B);
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
          I ? "收起" : "展开",
          "已裁决（",
          De.length,
          " 条）"
        ] }),
        /* @__PURE__ */ h.jsx("span", { className: "hint", children: "裁决过的对折叠在此，可回看记录。" })
      ] }),
      I && De.map(te)
    ] })
  ] });
}
function TE({ tick: u, onChanged: r }) {
  const [o, s] = q.useState(null), [d, m] = q.useState(""), [g, y] = q.useState(null), [S, b] = q.useState({}), [N, p] = q.useState({}), [I, A] = q.useState(!1), [x, V] = q.useState({}), [L, le] = q.useState(null), [ye, he] = q.useState({}), [Z, ue] = q.useState({ from: "", to: "" }), ne = q.useCallback(async () => {
    const G = await Ye("/api/types/candidates");
    s(G.ok ? G : null);
  }, []);
  q.useEffect(() => {
    ne();
  }, [ne, u]);
  async function re(G, me, De = {}) {
    const H = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    y(G), m("");
    const M = await Pe("/api/tool/apply_type_ruling", { action: me, name: G, date: H, ...De });
    m(M.ok ? `已${me === "create" ? "新立进类型库" : me === "merge" ? `并入「${M.now}」` : "驳回"}：${G}` : M.message || JSON.stringify(M)), M.ok && (await ne(), r?.(), V({}), he((te) => {
      const j = { ...te };
      return delete j[G], j;
    }), ue({ from: "", to: "" })), y(null);
  }
  async function ge(G, me) {
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
      const H = await tl("/api/model/status", { kind: "typehint", timeoutMs: 180 * 1e3 });
      if (H.stage === "timeout") {
        m(H.message), le(null);
        return;
      }
      if (H.ok && Array.isArray(H.suggestions) && H.suggestions.length) {
        const M = H.suggestions[0];
        V((te) => ({ ...te, [G]: { target: String(M.target), reason: String(M.reason || "") } })), m(`「${G}」的建议已给出，见该候选卡`);
      } else
        m(H.message || "未产出建议");
    } catch (De) {
      m(`请求失败：${String(De?.message || De)}`);
    }
    le(null);
  }
  async function se(G) {
    const me = (N[G] || "").trim();
    if (!me) {
      m("改名：先在框里填新名称");
      return;
    }
    const De = o?.pending.find((j) => j.name === G)?.definition || "", H = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10);
    y(G), m("");
    const M = await Pe("/api/tool/apply_type_ruling", { action: "create", name: me, date: H, definition: De });
    if (!M.ok) {
      m(`改名中断（新立「${me}」未过）：${M.message || JSON.stringify(M)}`), y(null);
      return;
    }
    const te = await Pe("/api/tool/apply_type_ruling", { action: "merge", name: G, target: me, date: H });
    m(te.ok ? `已改名：${G} → ${me}` : te.message || JSON.stringify(te)), te.ok && (await ne(), r?.(), V({}), he((j) => {
      const F = { ...j };
      return delete F[G], F;
    })), y(null);
  }
  if (!o) return /* @__PURE__ */ h.jsx(nl, { title: "读取候选中…", description: "正在扫描篇目的新类型宣告。" });
  const oe = [...o.pending, ...o.ruled.filter((G) => ye[G.name])], Se = (G) => !!G && !(o.types || []).some((me) => me.type === G) && !(o.pending || []).some((me) => me.name === G);
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
        $l,
        {
          id: "cb-reclass-from",
          value: Z.from,
          placeholder: "已登记类型再归类：选源…",
          onChange: (G) => ue((me) => ({ ...me, from: G })),
          options: (o.types || []).map((G) => ({ value: G.type, label: G.type }))
        }
      ),
      /* @__PURE__ */ h.jsx(
        $l,
        {
          id: "cb-reclass-to",
          value: Z.to,
          placeholder: "输入过滤，或直接输入新名…",
          allowCustom: !0,
          onChange: (G) => ue((me) => ({ ...me, to: G })),
          options: [
            ...(o.types || []).map((G) => ({ value: G.type, label: G.type })),
            ...(o.pending || []).map((G) => ({ value: G.name, label: `${G.name}（候选）` }))
          ]
        }
      ),
      /* @__PURE__ */ h.jsx(Ce, { disabled: g !== null || !Z.from || !Z.to, onClick: () => {
        re(Z.from, "merge", { target: Z.to, targetFresh: Se(Z.to) });
      }, children: "执行归类" })
    ] }),
    oe.length === 0 && /* @__PURE__ */ h.jsx(nl, { title: "暂无待裁候选", description: "拆解宣告新类型后，候选会自动出现在这里。" }),
    oe.map((G) => /* @__PURE__ */ h.jsxs(Mn, { title: G.name, description: `宣告于：${G.papers.join("、")}`, children: [
      /* @__PURE__ */ h.jsx("p", { children: G.definition || "（定义待补）" }),
      x[G.name] && /* @__PURE__ */ h.jsxs("div", { className: "hint suggest-line", children: [
        "AI 建议：",
        x[G.name].target === "新立" ? "新立（未匹配到既有类型）" : x[G.name].target === "驳回" ? "驳回（无独立价值）" : `并入「${x[G.name].target}」`,
        "——",
        x[G.name].reason,
        (o.types || []).some((me) => me.type === x[G.name].target) && /* @__PURE__ */ h.jsx(Ce, { onClick: () => b((me) => ({ ...me, [G.name]: x[G.name].target })), children: "采纳（填入目标）" })
      ] }),
      /* @__PURE__ */ h.jsx("div", { className: "import-row", children: /* @__PURE__ */ h.jsx(Ce, { disabled: L !== null || g !== null, onClick: () => {
        ge(G.name, G.definition);
      }, children: L === G.name ? "推荐中…" : "AI 推荐" }) }),
      /* @__PURE__ */ h.jsxs("div", { className: "import-row", children: [
        /* @__PURE__ */ h.jsx(Ce, { variant: "primary", disabled: g !== null, onClick: () => {
          re(G.name, "create");
        }, children: g === G.name ? "执行中…" : "新立进类型库" }),
        /* @__PURE__ */ h.jsx(
          $l,
          {
            id: `cb-merge-${G.name}`,
            value: S[G.name] || "",
            placeholder: "输入过滤，或输入新名…",
            allowCustom: !0,
            onChange: (me) => b((De) => ({ ...De, [G.name]: me })),
            options: [
              ...(o.types || []).map((me) => ({ value: me.type, label: me.type })),
              ...(o.pending || []).filter((me) => me.name !== G.name).map((me) => ({ value: me.name, label: `${me.name}（候选）` }))
            ]
          }
        ),
        /* @__PURE__ */ h.jsxs(Ce, { disabled: g !== null || !S[G.name], title: "箭头左侧消失成为别名，右侧名字存活", onClick: () => {
          re(G.name, "merge", { target: S[G.name], targetFresh: Se(S[G.name]) });
        }, children: [
          G.name,
          " → ",
          S[G.name] || "…"
        ] }),
        /* @__PURE__ */ h.jsxs(Ce, { disabled: g !== null || !S[G.name], title: "反方向：右侧候选名存活，左侧所选类型归入它名下", onClick: () => {
          re(S[G.name], "merge", { target: G.name });
        }, children: [
          S[G.name] || "…",
          " → ",
          G.name
        ] }),
        /* @__PURE__ */ h.jsx(Ce, { disabled: g !== null, onClick: () => {
          re(G.name, "reject");
        }, children: "驳回" })
      ] }),
      /* @__PURE__ */ h.jsxs("div", { className: "import-row", children: [
        /* @__PURE__ */ h.jsx(Rt, { label: "改名为", value: N[G.name] || "", onChange: (me) => {
          const De = me.currentTarget.value;
          p((H) => ({ ...H, [G.name]: De }));
        }, placeholder: "新类型名" }),
        /* @__PURE__ */ h.jsx(Ce, { disabled: g !== null || !(N[G.name] || "").trim(), onClick: () => {
          se(G.name);
        }, children: "改名" })
      ] })
    ] }, G.name)),
    o.ruled.length > 0 && /* @__PURE__ */ h.jsxs("div", { className: "queue-decided-zone", children: [
      /* @__PURE__ */ h.jsxs("div", { className: "import-row", children: [
        /* @__PURE__ */ h.jsxs(Ce, { onClick: () => A((G) => !G), children: [
          I ? "收起" : "展开",
          "已裁决（",
          o.ruled.length,
          "）"
        ] }),
        /* @__PURE__ */ h.jsx("span", { className: "hint", children: "裁决过的候选折叠在此；明细查类型库与闭包映射表。" })
      ] }),
      I && o.ruled.map((G) => /* @__PURE__ */ h.jsxs(Mn, { title: G.name, description: `已裁决：${G.ruledStatus || ""}`, children: [
        /* @__PURE__ */ h.jsx("p", { className: "hint", children: G.definition || "" }),
        /* @__PURE__ */ h.jsx(Ce, { disabled: g !== null, onClick: () => he((me) => ({ ...me, [G.name]: !0 })), children: "重新裁决" })
      ] }, G.name))
    ] })
  ] });
}
function hg({ initial: u, savePath: r, onSaved: o }) {
  const [s, d] = q.useState(u), [m, g] = q.useState(""), [y, S] = q.useState(!1);
  async function b() {
    if (!s.startsWith("#")) {
      g("首行须为 # 标题（防存入半截文件）");
      return;
    }
    let N = s;
    if (N !== u) {
      const p = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), I = /^> 人工修订：(.+)$/m;
      N = I.test(N) ? N.replace(I, `> 人工修订：${p}`) : N.trimEnd() + `

> 人工修订：${p}
`;
    }
    S(!0), g("");
    try {
      const p = await Pe("/api/library/write-file", { path: r, content: N });
      p && p.ok ? (mt.toast.show({ message: "已保存", type: "success" }), o(N)) : g(p?.message || "保存失败");
    } catch (p) {
      g(String(p?.message || p));
    }
    S(!1);
  }
  return /* @__PURE__ */ h.jsxs("div", { className: "editor", children: [
    m && /* @__PURE__ */ h.jsx("p", { className: "err", children: m }),
    /* @__PURE__ */ h.jsx("textarea", { className: "editbox", value: s, onChange: (N) => d(N.currentTarget.value), rows: 22, spellCheck: !1 }),
    /* @__PURE__ */ h.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ h.jsx(Ce, { variant: "primary", disabled: y, onClick: () => {
        b();
      }, children: "保存" }),
      /* @__PURE__ */ h.jsx("span", { className: "hint", children: "首行须为 # 标题；改动会在尾部留一行修订日期（可自行删除）。改标签：编辑「- 标签：」行。" })
    ] })
  ] });
}
function AE({ tick: u }) {
  const [r, o] = q.useState([]), [s, d] = q.useState(""), [m, g] = q.useState(""), [y, S] = q.useState(!1), b = q.useCallback(async () => {
    const N = await xa("篇目"), p = await Promise.all(
      N.map(async (I) => {
        const { title: A, meta: x } = fg(await dg(I), I.replace(/\.md$/, ""));
        return { id: I, title: A, meta: x || I.replace(/\.md$/, "") };
      })
    );
    o(p);
  }, []);
  return q.useEffect(() => {
    b();
  }, [b, u]), q.useEffect(() => {
    if (!s) {
      g("");
      return;
    }
    Ye(nn(`篇目/${s}`)).then((N) => g(N.ok ? N.content : N.message || "读取失败"));
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
        hg,
        {
          initial: m,
          savePath: `篇目/${s}`,
          onSaved: (N) => {
            g(N), S(!1), b();
          }
        }
      ) : /* @__PURE__ */ h.jsx(au, { md: m }) : /* @__PURE__ */ h.jsx("p", { className: "hint", children: "左侧选篇查看（每条登记都带位置与原文引文）。" })
    ] })
  ] }) : /* @__PURE__ */ h.jsx(nl, { title: "还没有篇目", description: "导入文献或在对话里拆解后，篇目会出现在这里。" });
}
function NE({ tick: u }) {
  const [r, o] = q.useState([]), [s, d] = q.useState(""), [m, g] = q.useState(""), [y, S] = q.useState(""), [b, N] = q.useState(""), [p, I] = q.useState({});
  if (q.useEffect(() => {
    xa("篇目").then(async (x) => {
      o(x), x[0] && d(x[0]), x[1] && g(x[1]);
      const V = await Promise.all(x.map(async (L) => {
        const { title: le, meta: ye } = fg(await dg(L), L.replace(/\.md$/, ""));
        return [L, ye ? `${le} · ${ye}` : le];
      }));
      I(Object.fromEntries(V));
    });
  }, [u]), q.useEffect(() => {
    s && Ye(nn(`篇目/${s}`)).then((x) => S(x.ok ? x.content : ""));
  }, [s]), q.useEffect(() => {
    m && Ye(nn(`篇目/${m}`)).then((x) => N(x.ok ? x.content : ""));
  }, [m]), r.length < 2) return /* @__PURE__ */ h.jsx(nl, { title: "至少两篇可对比", description: "先积累两篇以上篇目。" });
  const A = r.map((x) => ({ value: x, label: p[x] || x.replace(/\.md$/, "") }));
  return /* @__PURE__ */ h.jsxs("div", { children: [
    /* @__PURE__ */ h.jsxs("div", { className: "grid2", children: [
      /* @__PURE__ */ h.jsx($l, { id: "cb-cmp-a", value: s, onChange: d, options: A, placeholder: "输入过滤篇目…" }),
      /* @__PURE__ */ h.jsx($l, { id: "cb-cmp-b", value: m, onChange: g, options: A, placeholder: "输入过滤篇目…" })
    ] }),
    /* @__PURE__ */ h.jsxs("div", { className: "compare", children: [
      /* @__PURE__ */ h.jsx("div", { className: "col", children: /* @__PURE__ */ h.jsx(au, { md: y }) }),
      /* @__PURE__ */ h.jsx("div", { className: "col", children: /* @__PURE__ */ h.jsx(au, { md: b }) })
    ] })
  ] });
}
function _E({ tick: u }) {
  const [r, o] = q.useState(null);
  if (q.useEffect(() => {
    (async () => {
      const [d, m, g, y, S, b] = await Promise.all([
        xa("篇目"),
        xa("锚点样本"),
        xa("写作模型"),
        Ye(nn("标签库.md")),
        Ye(nn("闭包映射表.md")),
        Ye(nn("类型库.md"))
      ]), N = y.ok ? Ro(y.content, "标签") : [], p = y.ok ? Bo(y.content) : [], I = S.ok ? Ro(S.content, "from") : [], A = b.ok ? Ro(b.content, "类型") : [];
      o({
        papers: d.length,
        anchors: m.length,
        models: g.length,
        tags: N,
        queuePending: p.filter((x) => !x.decision).length,
        mapRows: I,
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
      const g = m.split("|").slice(1, -1).map((y) => y.trim());
      if (g[0] === r) {
        d = !0;
        continue;
      }
      d && g[0] && g[0] !== "（暂无）" && s.push(g[0]);
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
  const g = m.join("；") || "无产出", y = Number(u.belowThreshold || 0);
  return y ? `${g}（另有 ${y} 个标签携带篇目 <2，未达门槛）` : g;
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
  const [r, o] = q.useState([]), [s, d] = q.useState(""), [m, g] = q.useState(""), [y, S] = q.useState(!1), [b, N] = q.useState(!1), [p, I] = q.useState({}), [A, x] = q.useState(""), [V, L] = q.useState({}), [le, ye] = q.useState("list"), [he, Z] = q.useState(""), [ue, ne] = q.useState({}), [re, ge] = q.useState(!1);
  q.useEffect(() => {
    let B = !1;
    return (async () => {
      const X = await Ye("/api/model/status").catch(() => null);
      if (B || !X || !X.running || X.kind !== "generate") return;
      S(!0), Z("建模进行中（接管切页前的任务）…");
      const ae = await tl("/api/model/status", { kind: "generate" });
      B || (Z(ae.stage === "timeout" ? ae.message : ae.ok ? "完成：见下方分组" : ae.message || "未生成"), ae.ok && (mt.toast.show({ message: "写作模型已生成/更新", type: "success" }), oe()), S(!1));
    })(), () => {
      B = !0;
    };
  }, []);
  const se = q.useMemo(() => {
    const B = /* @__PURE__ */ new Map();
    for (const X of r) {
      const ae = /^(.+)-写作模型-v(\d+)\.md$/.exec(X);
      ae && (B.has(ae[1]) || B.set(ae[1], []), B.get(ae[1]).push({ file: X, v: Number(ae[2]) }));
    }
    return [...B.entries()].map(([X, ae]) => (ae.sort(($, E) => $.v - E.v), { type: X, latest: ae[ae.length - 1], history: ae.slice(0, -1).reverse() }));
  }, [r]), oe = q.useCallback(() => {
    xa("写作模型").then(o), Ye(nn("闭包映射表.md")).then((B) => I(B.ok ? CE(B.content) : {}));
  }, []);
  q.useEffect(() => {
    oe();
  }, [oe, u]), q.useEffect(() => {
    if (!s) {
      g("");
      return;
    }
    Ye(nn(`写作模型/${s}`)).then((B) => g(B.ok ? B.content : ""));
  }, [s]);
  async function Se() {
    S(!0), Z("");
    try {
      const B = await Pe("/api/model/generate", {});
      if (!B.started) {
        Z(B.message || "发起失败"), S(!1);
        return;
      }
      Z("建模中：归属 → 归纳 → 逐类型生成（每个类型一次模型调用，可离开本页）…");
      const X = await tl("/api/model/status", { kind: "generate" });
      if (X.stage === "timeout") {
        Z(X.message), S(!1);
        return;
      }
      Z(wE(X.results || []) || X.message || ""), (X.results || []).some((ae) => ae.ok) && (mt.toast.show({ message: "写作模型已生成/更新", type: "success" }), oe());
    } catch (B) {
      Z(`请求失败：${String(B?.message || B)}`);
    }
    S(!1);
  }
  async function G() {
    N(!0), Z("");
    try {
      const B = await Pe("/api/model/generate-tactic", {});
      if (!B.started) {
        Z(B.message || "发起失败"), N(!1);
        return;
      }
      const X = Date.now();
      for (; Date.now() - X < 1200 * 1e3; ) {
        await new Promise(($) => setTimeout($, 4e3));
        const ae = await Ye("/api/model/status").catch(() => null);
        if (!(!ae || ae.kind !== "tactic")) {
          if (ae.running) {
            const $ = ae.progress || {};
            Z(`战术建模中：${$.done ?? 0}/${$.total ?? "?"}　当前：${$.current || "…"}`);
          } else if (ae.lastResult) {
            const $ = ae.lastResult;
            Z(OE($) || $.message || ""), ($.results || []).some((E) => E.ok) && (mt.toast.show({ message: "战术模型已生成/更新", type: "success" }), oe()), N(!1);
            return;
          }
        }
      }
      Z("等待超时（20 分钟），任务可能仍在运行；稍后刷新查看结果。");
    } catch (B) {
      Z(`请求失败：${String(B?.message || B)}`);
    }
    N(!1);
  }
  const [me, De] = q.useState(""), [H, M] = q.useState("");
  async function te(B) {
    const X = [];
    for (const ae of B) {
      const $ = await Pe("/api/library/delete-file", { path: `写作模型/${ae}` });
      X.push($.ok ? `✓ ${ae}` : `✗ ${ae}：${$.message || "失败"}`);
    }
    Z(`删除结果：${X.join("；")}`), d(""), oe();
  }
  const j = (B) => {
    let X = B;
    const ae = /* @__PURE__ */ new Set();
    for (; p[X] && p[X] !== X && !ae.has(X); )
      ae.add(X), X = p[X];
    return X;
  };
  async function F(B, X) {
    const ae = await Pe("/api/library/rename-models", { from: B, to: X });
    Z(ae.ok ? `已随归并改名：${B} → ${X}（${(ae.moved || []).length} 个文件，版本保留）` : ae.message || JSON.stringify(ae)), ae.ok && (d(""), oe());
  }
  return /* @__PURE__ */ h.jsxs("div", { children: [
    /* @__PURE__ */ h.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ h.jsx(Ce, { variant: "primary", disabled: y || b, onClick: () => {
        Se();
      }, children: y ? "建模中…" : "生成 / 更新写作模型" }),
      /* @__PURE__ */ h.jsx(Ce, { disabled: y || b, onClick: () => {
        G();
      }, children: b ? "战术建模中…" : "生成 / 更新战术模型" }),
      /* @__PURE__ */ h.jsx("span", { className: "hint", children: "两个按钮同理：样本 ≥2 才生成，再点得新版本（v+1，历史保留），样本未变自动跳过零浪费。类型模型的样本看归并自与宣告篇，战术模型的样本看携带该标签的篇目。" })
    ] }),
    he && /* @__PURE__ */ h.jsx("pre", { className: "hint", children: he }),
    le === "preview" && s ? /* @__PURE__ */ h.jsxs("div", { className: "model-preview", children: [
      /* @__PURE__ */ h.jsxs("div", { className: "import-row", children: [
        /* @__PURE__ */ h.jsx(Ce, { onClick: () => ye("list"), children: "← 返回列表" }),
        /* @__PURE__ */ h.jsxs("span", { className: "hint", children: [
          "正在查看：",
          s
        ] })
      ] }),
      re ? /* @__PURE__ */ h.jsx(hg, { initial: m, savePath: `写作模型/${s}`, onSaved: (B) => {
        g(B), ge(!1), oe();
      } }) : /* @__PURE__ */ h.jsxs(h.Fragment, { children: [
        /* @__PURE__ */ h.jsxs("div", { className: "import-row", children: [
          /* @__PURE__ */ h.jsx(Ce, { onClick: () => ge(!0), children: "编辑本模型" }),
          /* @__PURE__ */ h.jsx(Ce, { disabled: y || b, onClick: () => {
            if (H !== s) {
              M(s);
              return;
            }
            M(""), te([s]);
          }, children: H === s ? "再点一次确认删除" : "删除本版本" })
        ] }),
        /* @__PURE__ */ h.jsx(au, { md: m })
      ] })
    ] }) : se.length ? /* @__PURE__ */ h.jsx(h.Fragment, { children: ["类型", "战术"].map((B) => {
      const X = se.filter(($) => B === "战术" === $.type.startsWith("战术-"));
      if (!X.length) return null;
      const ae = !V[B];
      return /* @__PURE__ */ h.jsxs("div", { className: "model-section", children: [
        /* @__PURE__ */ h.jsx("div", { className: "import-row section-toggle", children: /* @__PURE__ */ h.jsxs(Ce, { onClick: () => L(($) => ({ ...$, [B]: !$[B] })), children: [
          ae ? "收起" : "展开",
          " ",
          B,
          "模型（",
          X.length,
          " 组）"
        ] }) }),
        ae && X.map(($) => {
          const E = $.type.startsWith("战术-") ? $.type.slice(2) : $.type, z = j(E), W = z !== E, P = $.type.startsWith("战术-") ? `战术-${z}` : z;
          return /* @__PURE__ */ h.jsxs("div", { className: "model-group", children: [
            /* @__PURE__ */ h.jsxs("div", { className: "model-group-head", children: [
              W && /* @__PURE__ */ h.jsx("span", { className: "badge", children: "已并入" }),
              /* @__PURE__ */ h.jsx("span", { className: "model-grouptitle", children: W ? `${$.type} → ${z}` : $.type }),
              /* @__PURE__ */ h.jsxs(
                "button",
                {
                  className: s === $.latest.file ? "filebtn on" : "filebtn",
                  onClick: () => {
                    d($.latest.file), ye("preview");
                  },
                  children: [
                    "v",
                    $.latest.v,
                    "（最新）"
                  ]
                }
              ),
              $.history.length > 0 && /* @__PURE__ */ h.jsx("button", { className: "linkbtn", onClick: () => ne((ie) => ({ ...ie, [$.type]: !ie[$.type] })), children: ue[$.type] ? "收起历史" : `历史 ${$.history.length} 版` }),
              W && /* @__PURE__ */ h.jsx("button", { className: "linkbtn", onClick: () => {
                if (A !== $.type) {
                  x($.type);
                  return;
                }
                x(""), F($.type, P);
              }, children: A === $.type ? `再点一次确认改名为 ${P}` : "随归并改名" }),
              /* @__PURE__ */ h.jsx("button", { className: "linkbtn", onClick: () => {
                if (me !== $.type) {
                  De($.type);
                  return;
                }
                De(""), te([$.latest.file, ...$.history.map((ie) => ie.file)]);
              }, children: me === $.type ? "再点一次确认删除整组" : "删除" })
            ] }),
            ue[$.type] && /* @__PURE__ */ h.jsx("div", { className: "filebtns", children: $.history.map((ie) => /* @__PURE__ */ h.jsxs("button", { className: s === ie.file ? "filebtn on" : "filebtn", onClick: () => {
              d(ie.file), ye("preview");
            }, children: [
              "v",
              ie.v
            ] }, ie.file)) })
          ] }, $.type);
        })
      ] }, B);
    }) }) : /* @__PURE__ */ h.jsx(nl, { title: "暂无写作模型", description: "点上方按钮归纳生成；样本不足或样本未变的类型会跳过并说明。" })
  ] });
}
function RE() {
  const [u, r] = q.useState(""), [o, s] = q.useState([]), [d, m] = q.useState(null), [g, y] = q.useState("");
  async function S() {
    if (!u.trim()) return;
    const b = await Ye(`/api/search?query=${encodeURIComponent(u.trim())}`);
    s(b.ok ? b.results : []), m(null);
  }
  return q.useEffect(() => {
    if (!d) {
      y("");
      return;
    }
    Ye(nn(d.path)).then((b) => y(b.ok ? b.content : "读取失败"));
  }, [d]), /* @__PURE__ */ h.jsxs("div", { children: [
    /* @__PURE__ */ h.jsx("p", { className: "hint", children: "按关键词物理命中排序帮你收窄候选，取舍仍由你判断；引用时带篇目位置与原文引文。" }),
    /* @__PURE__ */ h.jsxs("div", { className: "searchbar", children: [
      /* @__PURE__ */ h.jsx(
        Rt,
        {
          label: "关键词（空格 / 、 分隔）",
          value: u,
          onChange: (b) => r(b.currentTarget.value),
          placeholder: "例：反驳 开头",
          onKeyDown: (b) => {
            b.key === "Enter" && S();
          }
        }
      ),
      /* @__PURE__ */ h.jsx(Ce, { variant: "primary", onClick: () => {
        S();
      }, children: "搜索" })
    ] }),
    /* @__PURE__ */ h.jsxs("div", { className: "searchresults", children: [
      o.map((b) => /* @__PURE__ */ h.jsxs("div", { className: d?.path === b.path ? "searchhit on" : "searchhit", children: [
        /* @__PURE__ */ h.jsxs("div", { className: "searchhit-head", onClick: () => m(b), children: [
          /* @__PURE__ */ h.jsx("span", { className: "badge", children: b.kind }),
          /* @__PURE__ */ h.jsx("b", { children: b.title }),
          /* @__PURE__ */ h.jsxs("span", { className: "hint", children: [
            "命中 ",
            b.score,
            " · ",
            b.path
          ] })
        ] }),
        d?.path !== b.path && b.hits?.slice(0, 2).map((N, p) => /* @__PURE__ */ h.jsxs("div", { className: "hitline", children: [
          "L",
          N.line,
          ": ",
          N.excerpt,
          N.text
        ] }, p))
      ] }, b.path)),
      !o.length && /* @__PURE__ */ h.jsx("p", { className: "hint", children: "输入关键词后搜索；结果按命中度排序，点击标题展开全文。" })
    ] }),
    d && /* @__PURE__ */ h.jsxs("div", { className: "searchpreview", children: [
      /* @__PURE__ */ h.jsx("h4", { children: d.title }),
      /* @__PURE__ */ h.jsx(au, { md: g })
    ] })
  ] });
}
function jE() {
  const [u, r] = q.useState(""), [o, s] = q.useState(""), [d, m] = q.useState("2"), [g, y] = q.useState("");
  q.useEffect(() => {
    Ye("/api/config").then((b) => {
      b.ok && b.config ? (r((b.config.markers || []).join("、")), s(b.config.libraryPath || ""), m(String(b.config.maxPerRun ?? 2))) : y(b.message || "配置读取失败");
    });
  }, []);
  async function S() {
    y("保存中…");
    const b = await Pe("/api/config", {
      markers: u.split(/[\s、，,;；]+/).map((N) => N.trim()).filter(Boolean),
      libraryPath: o.trim(),
      maxPerRun: Number(d) || 2
    });
    y(b.ok ? "已保存" : `保存失败：${b.message || "未知错误"}`);
  }
  return /* @__PURE__ */ h.jsxs("div", { className: "settings", children: [
    /* @__PURE__ */ h.jsx("p", { className: "hint", children: "会话名命中标定词才会收到结构推荐；标定词留空 = 全静默，不向任何会话推送。" }),
    /* @__PURE__ */ h.jsx(
      Rt,
      {
        label: "会话标定词（、或逗号分隔，含任一即放行）",
        value: u,
        onChange: (b) => r(b.currentTarget.value),
        placeholder: "例：构成性、论文、写作"
      }
    ),
    /* @__PURE__ */ h.jsx(
      Rt,
      {
        label: "结构库路径（留空用默认；改后重启 Hana 生效）",
        value: o,
        onChange: (b) => s(b.currentTarget.value),
        placeholder: "默认：workspace 写作模型插件/结构库"
      }
    ),
    /* @__PURE__ */ h.jsx(
      Rt,
      {
        label: "单次推荐上限（1-2，设计上限 2）",
        value: d,
        onChange: (b) => m(b.currentTarget.value)
      }
    ),
    /* @__PURE__ */ h.jsxs("div", { className: "saverow", children: [
      /* @__PURE__ */ h.jsx(Ce, { variant: "primary", onClick: () => {
        S();
      }, children: "保存" }),
      g && /* @__PURE__ */ h.jsx("span", { className: "savehint", children: g })
    ] }),
    /* @__PURE__ */ h.jsx("p", { className: "hint", children: "命中判定：标定词过闸后，取最近对话文本与标签库/类型库做字典交集，交集词走共用检索层出候选；候选只附命中事实，采纳与否由会话内模型判断。同会话已注入条目不重复推。" })
  ] });
}
function DE({ onDone: u }) {
  const [r, o] = q.useState(""), [s, d] = q.useState(!1), [m, g] = q.useState(null), [y, S] = q.useState(!1), [b, N] = q.useState(!1);
  q.useEffect(() => {
    let x = !1;
    return (async () => {
      const V = await Ye("/api/import/status").catch(() => null);
      if (x || !V || !V.running) return;
      d(!0), g({ ok: !0, stage: "running", message: "拆解进行中（接管切页前的任务）…" });
      const L = await zo();
      x || (g(L), L.ok ? (mt.toast.show({ message: "拆解完成，已入库", type: "success" }), u()) : L.alreadyExists ? (mt.toast.show({ message: "篇目已在库中，未重复导入", type: "success" }), u()) : L.failureTs && (mt.toast.show({ message: "拆解失败，已记入待办", type: "error" }), u()), d(!1));
    })(), () => {
      x = !0;
    };
  }, []);
  async function p(x, V) {
    d(!0), g(null);
    try {
      const L = await Pe("/api/import/enqueue", { items: [x] });
      L && L.ok ? (g({ ok: !0, stage: "queued", message: `已入队：${V}（队列串行执行，进度看下方「导入队列」）` }), mt.toast.show({ message: `已入队 ${L.queued} 篇，队列开始执行`, type: "success" }), u()) : g({ ok: !1, stage: "input", message: L?.message || "入队失败" });
    } catch (L) {
      g({ ok: !1, stage: "network", message: String(L?.message || L) });
    }
    d(!1);
  }
  async function I(x) {
    const V = String(x || "").trim();
    if (!V) {
      g({ ok: !1, stage: "input", message: "请先粘贴文献全文，或选择 / 拖入 md、txt、pdf 文件" });
      return;
    }
    const le = (V.split(`
`)[0] || "").replace(/^#+\s*/, "").trim().slice(0, 30) || "粘贴文献";
    await p({ label: le, text: V, source: "paste" }, le);
  }
  async function A(x) {
    if (/\.pdf$/i.test(x.name)) {
      if (x.size > 50 * 1024 * 1024) {
        g({ ok: !1, stage: "input", message: "PDF 超过 50 MB 上限" });
        return;
      }
      try {
        const V = await new Promise((L, le) => {
          const ye = new FileReader();
          ye.onload = () => L(String(ye.result).split(",")[1] || ""), ye.onerror = () => le(new Error("文件读取失败")), ye.readAsDataURL(x);
        });
        await p({ label: x.name, pdfBase64: V, source: "file" }, x.name);
      } catch (V) {
        g({ ok: !1, stage: "input", message: String(V?.message || V) });
      }
      return;
    }
    if (!/\.(md|txt)$/i.test(x.name)) {
      g({ ok: !1, stage: "input", message: "支持 md / txt / pdf 文件" });
      return;
    }
    await p({ label: x.name, text: await x.text(), source: "file" }, x.name);
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
            /* @__PURE__ */ h.jsx("button", { className: "linkbtn", onClick: () => N((x) => !x), children: b ? "收起 Zotero" : "从 Zotero 取" })
          ] })
        ]
      }
    ),
    b && /* @__PURE__ */ h.jsx(ME, {}),
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
        I(r);
      }, children: "加入队列并开始" }),
      s && /* @__PURE__ */ h.jsx("span", { className: "hint", children: "正在入队…" })
    ] }),
    m && /* @__PURE__ */ h.jsx("pre", { className: m.ok || m.alreadyExists ? "ok" : "err", children: m.alreadyExists ? `${m.message || "篇目已在库中（id 三要素相同视为同一篇），未重复导入。"}` : m.ok ? m.stage === "running" ? `${m.message || "拆解进行中…"}` : m.stage === "queued" ? m.message : `已入库：${m.file}（第 ${m.attempts} 次通过${m.tagsAdded?.length ? `，新增标签 ${m.tagsAdded.join("、")}` : ""}）` + (m.pdfEngine ? `
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
function mg({ nodes: u, active: r, onPick: o, depth: s = 0 }) {
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
    d.children.length > 0 && /* @__PURE__ */ h.jsx(mg, { nodes: d.children, active: r, onPick: o, depth: s + 1 })
  ] }, d.key)) });
}
function zE() {
  const [u, r] = q.useState([]), [o, s] = q.useState(null), [d, m] = q.useState(""), [g, y] = q.useState(null);
  q.useEffect(() => {
    let A = !0;
    const x = () => {
      Ye("/api/import/queue").then((L) => {
        A && L && L.ok && (r(L.items || []), s(L));
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
    const A = await Ye("/api/import/queue").catch(() => null);
    A && A.ok && (r(A.items || []), s(A));
  }
  async function b(A, x, V = {}) {
    const L = await Pe("/api/import/queue-action", x !== void 0 ? { action: A, key: x, ...V } : { action: A });
    return L && L.ok ? (s(L.snapshot), S(), !0) : (m(L?.message || "操作失败"), !1);
  }
  function N(A) {
    const x = g;
    y(null), !(x === null || x === A) && b("reorder", x, { before: A });
  }
  const p = o?.total ?? u.length, I = (o?.done ?? 0) + (o?.failed ?? 0) + (o?.cancelled ?? 0);
  return /* @__PURE__ */ h.jsxs("div", { className: "queuebox", children: [
    /* @__PURE__ */ h.jsxs("div", { className: "qhead", children: [
      /* @__PURE__ */ h.jsx("b", { children: "导入队列" }),
      /* @__PURE__ */ h.jsx("span", { className: "hint", children: p ? `${I}/${p} 完成 · 运行 ${(o?.running ?? 0) + (o?.stopping ?? 0)} · 排队 ${o?.pending ?? 0}${o?.paused ? " · 已暂停" : ""}` : "队列为空" }),
      /* @__PURE__ */ h.jsxs("span", { className: "qhead-actions", children: [
        /* @__PURE__ */ h.jsx(Ce, { disabled: !o || p === 0, onClick: () => {
          b(o?.paused ? "resume" : "pause");
        }, children: o?.paused ? "继续" : "暂停" }),
        /* @__PURE__ */ h.jsx(Ce, { disabled: !o || (o?.done ?? 0) + (o?.cancelled ?? 0) === 0, onClick: () => {
          b("clear-done");
        }, children: "清理已完成" })
      ] })
    ] }),
    d && /* @__PURE__ */ h.jsx("p", { className: "hint", children: d }),
    u.length === 0 ? /* @__PURE__ */ h.jsx("p", { className: "hint", children: "拖入文件、粘贴全文或从 Zotero 加入后，条目在这里串行拆解；支持单篇停止/开始与拖拽排序。" }) : /* @__PURE__ */ h.jsx("div", { className: "qlist", children: u.map((A) => /* @__PURE__ */ h.jsxs(
      "div",
      {
        className: g === A.key ? "qrow dragging" : "qrow",
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
            b("cancel", A.key);
          }, children: "停止" }),
          A.status === "stopping" && /* @__PURE__ */ h.jsx("span", { className: "hint", children: "停止中…" }),
          (A.status === "cancelled" || A.status === "failed") && /* @__PURE__ */ h.jsx(Ce, { onClick: () => {
            b("start", A.key);
          }, children: "开始" }),
          A.status !== "running" && A.status !== "stopping" && /* @__PURE__ */ h.jsx(Ce, { onClick: () => {
            b("remove", A.key);
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
  const [u, r] = q.useState([]), [o, s] = q.useState(null), [d, m] = q.useState([]), [g, y] = q.useState(""), [S, b] = q.useState("collection"), [N, p] = q.useState(null), [I, A] = q.useState(/* @__PURE__ */ new Set()), [x, V] = q.useState(""), [L, le] = q.useState(!1);
  q.useEffect(() => {
    Ye("/api/zotero/collections").then((se) => {
      se && se.ok ? r(se.collections || []) : V(se?.message || "分类读取失败（Zotero 桌面端在运行吗？）");
    }).catch(() => V("分类读取失败"));
  }, []);
  async function ye(se, oe) {
    b("collection"), s(se), A(/* @__PURE__ */ new Set()), le(!0), V(`加载「${oe}」…`);
    try {
      const Se = await Ye(`/api/zotero/collection-items?key=${encodeURIComponent(se)}`);
      Se && Se.ok ? (m(Se.items || []), Se.truncated ? V(`该分类较大，列表显示前 ${Se.items.length} 条文献；更多可用搜索收窄`) : (Se.items || []).length ? V("") : V("该分类没有可导入的文献条目")) : V(Se?.message || "条目读取失败");
    } catch (Se) {
      V(String(Se?.message || Se));
    }
    le(!1);
  }
  async function he() {
    b("search"), s(null), A(/* @__PURE__ */ new Set()), le(!0), V("");
    try {
      const se = await Pe("/api/tool/zotero_search", { query: g, limit: 50 });
      se && Array.isArray(se.items) ? (p(se.items.map((oe) => ({
        key: oe.key,
        title: oe.title,
        authors: oe.creators,
        year: String(oe.date || "").slice(0, 4),
        itemType: oe.itemType
      }))), se.items.length || V("没有命中条目")) : V(se?.message || "Zotero 查询失败");
    } catch (se) {
      V(String(se?.message || se));
    }
    le(!1);
  }
  const Z = S === "collection" ? d : N || [];
  function ue(se) {
    A((oe) => {
      const Se = new Set(oe);
      return Se.has(se) ? Se.delete(se) : Se.add(se), Se;
    });
  }
  function ne() {
    A((se) => se.size >= Z.length && Z.length > 0 ? /* @__PURE__ */ new Set() : new Set(Z.map((oe) => oe.key)));
  }
  async function re() {
    const se = Z.filter((G) => I.has(G.key));
    if (!se.length) {
      V("先勾选条目");
      return;
    }
    le(!0);
    const oe = [], Se = [];
    for (let G = 0; G < se.length; G++) {
      const me = se[G];
      V(`解析附件 ${G + 1}/${se.length}…`);
      try {
        const De = await Pe("/api/tool/zotero_item", { key: me.key }), H = De && Array.isArray(De.attachments) && De.attachments[0] ? De.attachments[0] : null;
        if (!H) {
          Se.push(me.title || me.key);
          continue;
        }
        const M = await Pe("/api/tool/zotero_attachment_path", { attachmentKey: H.key || H });
        M && M.path ? oe.push({ label: me.title || me.key, pdfPath: String(M.path), source: `zotero:${me.key}` }) : Se.push(me.title || me.key);
      } catch {
        Se.push(me.title || me.key);
      }
    }
    if (oe.length) {
      const G = await Pe("/api/import/enqueue", { items: oe });
      G && G.ok ? (V(`已入队 ${G.queued} 篇${Se.length ? `；${Se.length} 篇缺附件未入队：${Se.slice(0, 2).join("、")}${Se.length > 2 ? "…" : ""}` : ""}`), A(/* @__PURE__ */ new Set()), mt.toast.show({ message: `已入队 ${G.queued} 篇，队列开始执行`, type: "success" })) : V(G?.message || "入队失败");
    } else
      V(`没有可入队条目${Se.length ? `（${Se.length} 篇缺附件）` : ""}`);
    le(!1);
  }
  async function ge(se) {
    le(!0);
    try {
      const oe = await Pe("/api/tool/zotero_item", { key: se }), Se = oe && Array.isArray(oe.attachments) && oe.attachments[0] ? oe.attachments[0] : null;
      if (!Se) {
        V("该条目无附件"), le(!1);
        return;
      }
      const G = await Pe("/api/tool/zotero_attachment_path", { attachmentKey: Se.key || Se });
      G && G.path ? (await mt.clipboard.writeText(String(G.path)), mt.toast.show({ message: "路径已复制", type: "success" })) : V(G?.message || "附件路径解析失败");
    } catch (oe) {
      V(String(oe?.message || oe));
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
          value: g,
          onChange: (se) => y(se.currentTarget.value),
          onKeyDown: (se) => {
            se.key === "Enter" && he();
          }
        }
      ),
      /* @__PURE__ */ h.jsx(Ce, { disabled: L, onClick: () => {
        he();
      }, children: "搜索" }),
      /* @__PURE__ */ h.jsxs(Ce, { variant: "primary", disabled: L || I.size === 0, onClick: () => {
        re();
      }, children: [
        "加入队列（",
        I.size,
        "）"
      ] }),
      /* @__PURE__ */ h.jsx(Ce, { disabled: L || Z.length === 0, onClick: ne, children: I.size >= Z.length && Z.length > 0 ? "取消全选" : "全选本页" })
    ] }),
    x && /* @__PURE__ */ h.jsx("p", { className: "hint", children: x }),
    /* @__PURE__ */ h.jsxs("div", { className: "zgrid", children: [
      /* @__PURE__ */ h.jsxs("div", { className: "ztree", children: [
        /* @__PURE__ */ h.jsx(
          "div",
          {
            className: S === "collection" && !o ? "collbtn on" : "collbtn",
            onClick: () => {
              b("collection"), A(/* @__PURE__ */ new Set());
            },
            children: "按分类浏览"
          }
        ),
        /* @__PURE__ */ h.jsx(mg, { nodes: u, active: o, onPick: (se, oe) => {
          ye(se, oe);
        } })
      ] }),
      /* @__PURE__ */ h.jsxs("div", { className: "zlist zlistpick", children: [
        Z.length === 0 && /* @__PURE__ */ h.jsx("p", { className: "hint", children: S === "collection" ? "选择左侧分类加载条目，或用搜索。" : "搜索无结果。" }),
        Z.map((se) => /* @__PURE__ */ h.jsxs("label", { className: "zrow", children: [
          /* @__PURE__ */ h.jsx("input", { type: "checkbox", checked: I.has(se.key), onChange: () => ue(se.key) }),
          /* @__PURE__ */ h.jsxs("span", { className: "zrow-main", children: [
            /* @__PURE__ */ h.jsx("b", { children: se.title || "（无题名）" }),
            /* @__PURE__ */ h.jsx("span", { className: "hint", children: [se.authors, se.year].filter(Boolean).join(" · ") })
          ] }),
          /* @__PURE__ */ h.jsx(
            "button",
            {
              className: "linkbtn",
              onClick: (oe) => {
                oe.preventDefault(), ge(se.key);
              },
              children: "路径"
            }
          )
        ] }, se.key))
      ] })
    ] })
  ] });
}
function HE({ stats: u, go: r, onDone: o }) {
  const s = u ? u.queuePending + u.failures : 0, [d, m] = q.useState("loading");
  return q.useEffect(() => {
    Ye("/api/config").then((g) => {
      const y = g?.config?.libraryPath ?? "";
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
function qE({ tick: u, bump: r }) {
  const [o, s] = q.useState([]), [d, m] = q.useState(null), [g, y] = q.useState(""), S = q.useCallback(async () => {
    const p = await Ye("/api/import/failures").catch(() => ({ items: [] }));
    s(p.items || []);
  }, []);
  q.useEffect(() => {
    S();
  }, [S, u]), q.useEffect(() => {
    let p = !1;
    return (async () => {
      const I = await Ye("/api/import/status").catch(() => null);
      if (p || !I || !I.running) return;
      y("有导入任务进行中，等待结果…");
      const A = await zo();
      p || (y(A.ok ? `完成：${A.file}` : `仍失败：${A.message || "未知错误"}${A.failureTs ? "（已刷新记录）" : ""}`), (A.ok || A.failureTs) && (await S(), r()));
    })(), () => {
      p = !0;
    };
  }, []);
  async function b(p) {
    if (!!!(p.text && String(p.text).trim()) && !p.pdfPath) {
      y(p.needsFile ? "该条目是文件拖入的 PDF，原文件未随记录保留，请把 PDF 重新拖入导入区" : "该条目无可重试内容（原文未保留），请重新提供文件");
      return;
    }
    m(p.ts), y("");
    try {
      const A = { text: p.text, fromTs: p.ts, filename: p.source };
      p.pdfPath && (A.pdfPath = p.pdfPath);
      const x = await Pe("/api/import", A);
      if (x.alreadyExists)
        y(`已在库中，未重复导入${x.id ? `：${x.id}` : ""}；待办记录已清除`), mt.toast.show({ message: "篇目已在库中，未重复导入", type: "success" });
      else if (x.started) {
        y("重试中（约 1-3 分钟，可离开本页）…");
        const V = await zo();
        V.ok ? (y(`重试成功：${V.file}`), mt.toast.show({ message: "重试成功，已入库", type: "success" })) : V.alreadyExists ? (y(`已在库中，未重复导入${V.id ? `：${V.id}` : ""}；待办记录已清除`), mt.toast.show({ message: "篇目已在库中，未重复导入", type: "success" })) : y(`仍失败：${V.message || "未知错误"}${V.failureTs ? "（已刷新记录）" : ""}`);
      } else x.ok ? (y(`重试成功：${x.file}`), mt.toast.show({ message: "重试成功，已入库", type: "success" })) : y(`仍失败：${x.message || "未知错误"}`);
    } catch (A) {
      y(`请求失败：${String(A?.message || A)}`);
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
      (p.errors || []).slice(0, 4).map((I, A) => /* @__PURE__ */ h.jsxs("div", { className: "hint", children: [
        "· ",
        I.field,
        "：",
        I.message
      ] }, A)),
      /* @__PURE__ */ h.jsxs("div", { className: "fail-actions", children: [
        /* @__PURE__ */ h.jsx(Ce, { variant: "primary", disabled: d === p.ts, onClick: () => {
          b(p);
        }, children: d === p.ts ? "重试中…" : "重试" }),
        /* @__PURE__ */ h.jsx(Ce, { disabled: d === p.ts, onClick: () => {
          N(p);
        }, children: "移除" })
      ] })
    ] }, p.ts)),
    g && /* @__PURE__ */ h.jsx("p", { className: g.startsWith("重试成功") || g.startsWith("已在库中") ? "ok" : "err", children: g })
  ] }) : /* @__PURE__ */ h.jsx(nl, { title: "暂无导入失败", description: "导入拆解失败的文献会落在这里，可原样重试。" });
}
function LE() {
  const u = document.getElementById("root")?.dataset.surface || "page", [r, o] = q.useState("home"), [s, d] = q.useState({
    home: "",
    use: "search",
    library: "browse",
    todo: "score",
    settings: ""
  }), [m, g] = q.useState(0), [y, S] = q.useState(null), b = q.useCallback(() => g((x) => x + 1), []), N = q.useCallback((x) => o(x), []);
  q.useEffect(() => {
    mt.ready(), mt.ui.resize({ height: u === "widget" ? 420 : 760 });
  }, [u]), q.useEffect(() => {
    let x = !0;
    return vE().then((V) => {
      x && S(V);
    }).catch(() => {
      x && S(null);
    }), () => {
      x = !1;
    };
  }, [m, r]);
  const p = s[r], I = q.useMemo(() => {
    switch (r) {
      case "home":
        return /* @__PURE__ */ h.jsx(HE, { stats: y, go: N, onDone: b });
      case "use":
        return p === "models" ? /* @__PURE__ */ h.jsx(xE, { tick: m }) : /* @__PURE__ */ h.jsx(RE, {});
      case "library":
        return p === "compare" ? /* @__PURE__ */ h.jsx(NE, { tick: m }) : p === "board" ? /* @__PURE__ */ h.jsx(_E, { tick: m }) : /* @__PURE__ */ h.jsx(AE, { tick: m });
      case "todo":
        return p === "queue" ? /* @__PURE__ */ h.jsx(SE, { tick: m, onChanged: b }) : p === "types" ? /* @__PURE__ */ h.jsx(TE, { tick: m, onChanged: b }) : p === "import-fail" ? /* @__PURE__ */ h.jsx(qE, { tick: m, bump: b }) : /* @__PURE__ */ h.jsx(yE, {});
      case "settings":
        return /* @__PURE__ */ h.jsx(jE, {});
    }
  }, [r, p, m, y, N, b]), A = y ? y.queuePending + y.failures : 0;
  return /* @__PURE__ */ h.jsx(oE, { mode: "inherit", className: "plugin-panel", children: /* @__PURE__ */ h.jsxs(
    Mn,
    {
      title: "论文结构建模",
      description: "把论文拆成可回溯的论证结构，沉淀为写作模型，写论文时检索取用。",
      actions: /* @__PURE__ */ h.jsx(Ce, { variant: "ghost", onClick: b, children: "刷新" }),
      children: [
        /* @__PURE__ */ h.jsx("nav", { className: "tabs zones", children: hE.map((x) => /* @__PURE__ */ h.jsxs("button", { className: r === x.id ? "tab on" : "tab", onClick: () => o(x.id), children: [
          x.label,
          x.id === "todo" && A > 0 && /* @__PURE__ */ h.jsx("span", { className: "nav-badge", children: A })
        ] }, x.id)) }),
        r !== "home" && r !== "settings" && /* @__PURE__ */ h.jsx("nav", { className: "tabs sub", children: mE[r].map((x) => /* @__PURE__ */ h.jsxs(
          "button",
          {
            className: p === x.id ? "tab on" : "tab",
            onClick: () => d((V) => ({ ...V, [r]: x.id })),
            children: [
              x.label,
              r === "todo" && x.id === "import-fail" && (y?.failures ?? 0) > 0 && /* @__PURE__ */ h.jsx("span", { className: "nav-badge", children: y?.failures ?? 0 }),
              r === "todo" && x.id === "queue" && (y?.queuePending ?? 0) > 0 && /* @__PURE__ */ h.jsx("span", { className: "nav-badge", children: y?.queuePending ?? 0 })
            ]
          },
          x.id
        )) }),
        /* @__PURE__ */ h.jsx("div", { className: "tab-body", children: I })
      ]
    }
  ) });
}
const Mp = document.getElementById("root");
Mp && y0.createRoot(Mp).render(/* @__PURE__ */ h.jsx(LE, {}));
