var vo = { exports: {} }, Xu = {};
var rv;
function l0() {
  if (rv) return Xu;
  rv = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function o(c, d, h) {
    var v = null;
    if (h !== void 0 && (v = "" + h), d.key !== void 0 && (v = "" + d.key), "key" in d) {
      h = {};
      for (var b in d)
        b !== "key" && (h[b] = d[b]);
    } else h = d;
    return d = h.ref, {
      $$typeof: i,
      type: c,
      key: v,
      ref: d !== void 0 ? d : null,
      props: h
    };
  }
  return Xu.Fragment = r, Xu.jsx = o, Xu.jsxs = o, Xu;
}
var cv;
function u0() {
  return cv || (cv = 1, vo.exports = l0()), vo.exports;
}
var g = u0(), po = { exports: {} }, ge = {};
var sv;
function i0() {
  if (sv) return ge;
  sv = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.consumer"), v = /* @__PURE__ */ Symbol.for("react.context"), b = /* @__PURE__ */ Symbol.for("react.forward_ref"), R = /* @__PURE__ */ Symbol.for("react.suspense"), w = /* @__PURE__ */ Symbol.for("react.memo"), D = /* @__PURE__ */ Symbol.for("react.lazy"), p = /* @__PURE__ */ Symbol.for("react.activity"), B = /* @__PURE__ */ Symbol.for("react.view_transition"), z = Symbol.iterator;
  function N(E) {
    return E === null || typeof E != "object" ? null : (E = z && E[z] || E["@@iterator"], typeof E == "function" ? E : null);
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
  }, x = Object.assign, Z = {};
  function ee(E, V, le) {
    this.props = E, this.context = V, this.refs = Z, this.updater = le || Y;
  }
  ee.prototype.isReactComponent = {}, ee.prototype.setState = function(E, V) {
    if (typeof E != "object" && typeof E != "function" && E != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, E, V, "setState");
  }, ee.prototype.forceUpdate = function(E) {
    this.updater.enqueueForceUpdate(this, E, "forceUpdate");
  };
  function Q() {
  }
  Q.prototype = ee.prototype;
  function X(E, V, le) {
    this.props = E, this.context = V, this.refs = Z, this.updater = le || Y;
  }
  var te = X.prototype = new Q();
  te.constructor = X, x(te, ee.prototype), te.isPureReactComponent = !0;
  var fe = Array.isArray;
  function ae() {
  }
  var me = { H: null, A: null, T: null, S: null }, We = Object.prototype.hasOwnProperty;
  function Ve(E, V, le) {
    var P = le.ref;
    return {
      $$typeof: i,
      type: E,
      key: V,
      ref: P !== void 0 ? P : null,
      props: le
    };
  }
  function et(E, V) {
    return Ve(E.type, V, E.props);
  }
  function ke(E) {
    return typeof E == "object" && E !== null && E.$$typeof === i;
  }
  function wt(E) {
    var V = { "=": "=0", ":": "=2" };
    return "$" + E.replace(/[=:]/g, function(le) {
      return V[le];
    });
  }
  var qt = /\/+/g;
  function I(E, V) {
    return typeof E == "object" && E !== null && E.key != null ? wt("" + E.key) : V.toString(36);
  }
  function q(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (typeof E.status == "string" ? E.then(ae, ae) : (E.status = "pending", E.then(
          function(V) {
            E.status === "pending" && (E.status = "fulfilled", E.value = V);
          },
          function(V) {
            E.status === "pending" && (E.status = "rejected", E.reason = V);
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
  function J(E, V, le, P, Ee) {
    var be = typeof E;
    (be === "undefined" || be === "boolean") && (E = null);
    var we = !1;
    if (E === null) we = !0;
    else
      switch (be) {
        case "bigint":
        case "string":
        case "number":
          we = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case i:
            case r:
              we = !0;
              break;
            case D:
              return we = E._init, J(
                we(E._payload),
                V,
                le,
                P,
                Ee
              );
          }
      }
    if (we)
      return Ee = Ee(E), we = P === "" ? "." + I(E, 0) : P, fe(Ee) ? (le = "", we != null && (le = we.replace(qt, "$&/") + "/"), J(Ee, V, le, "", function($t) {
        return $t;
      })) : Ee != null && (ke(Ee) && (Ee = et(
        Ee,
        le + (Ee.key == null || E && E.key === Ee.key ? "" : ("" + Ee.key).replace(
          qt,
          "$&/"
        ) + "/") + we
      )), V.push(Ee)), 1;
    we = 0;
    var W = P === "" ? "." : P + ":";
    if (fe(E))
      for (var de = 0; de < E.length; de++)
        P = E[de], be = W + I(P, de), we += J(
          P,
          V,
          le,
          be,
          Ee
        );
    else if (de = N(E), typeof de == "function")
      for (E = de.call(E), de = 0; !(P = E.next()).done; )
        P = P.value, be = W + I(P, de++), we += J(
          P,
          V,
          le,
          be,
          Ee
        );
    else if (be === "object") {
      if (typeof E.then == "function")
        return J(
          q(E),
          V,
          le,
          P,
          Ee
        );
      throw V = String(E), Error(
        "Objects are not valid as a React child (found: " + (V === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : V) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return we;
  }
  function K(E, V, le) {
    if (E == null) return E;
    var P = [], Ee = 0;
    return J(E, P, "", "", function(be) {
      return V.call(le, be, Ee++);
    }), P;
  }
  function ce(E) {
    if (E._status === -1) {
      var V = E._result, le = V();
      le.then(
        function(P) {
          (E._status === 0 || E._status === -1) && (E._status = 1, E._result = P, le.status === void 0 && (le.status = "fulfilled", le.value = P));
        },
        function(P) {
          (E._status === 0 || E._status === -1) && (E._status = 2, E._result = P, le.status === void 0 && (le.status = "rejected", le.reason = P));
        }
      ), E._status === -1 && (E._status = 0, E._result = le);
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var oe = typeof reportError == "function" ? reportError : function(E) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var V = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof E == "object" && E !== null && typeof E.message == "string" ? String(E.message) : String(E),
        error: E
      });
      if (!window.dispatchEvent(V)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", E);
      return;
    }
    console.error(E);
  };
  function Re(E) {
    var V = me.T, le = {};
    le.types = V !== null ? V.types : null, me.T = le;
    try {
      var P = E(), Ee = me.S;
      Ee !== null && Ee(le, P), typeof P == "object" && P !== null && typeof P.then == "function" && P.then(ae, oe);
    } catch (be) {
      oe(be);
    } finally {
      V !== null && le.types !== null && (V.types = le.types), me.T = V;
    }
  }
  function Me(E) {
    var V = me.T;
    if (V !== null) {
      var le = V.types;
      le === null ? V.types = [E] : le.indexOf(E) === -1 && le.push(E);
    } else Re(Me.bind(null, E));
  }
  var ye = {
    map: K,
    forEach: function(E, V, le) {
      K(
        E,
        function() {
          V.apply(this, arguments);
        },
        le
      );
    },
    count: function(E) {
      var V = 0;
      return K(E, function() {
        V++;
      }), V;
    },
    toArray: function(E) {
      return K(E, function(V) {
        return V;
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
  return ge.Activity = p, ge.Children = ye, ge.Component = ee, ge.Fragment = o, ge.Profiler = d, ge.PureComponent = X, ge.StrictMode = c, ge.Suspense = R, ge.ViewTransition = B, ge.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = me, ge.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(E) {
      return me.H.useMemoCache(E);
    }
  }, ge.addTransitionType = Me, ge.cache = function(E) {
    return function() {
      return E.apply(null, arguments);
    };
  }, ge.cacheSignal = function() {
    return null;
  }, ge.cloneElement = function(E, V, le) {
    if (E == null)
      throw Error(
        "The argument must be a React element, but you passed " + E + "."
      );
    var P = x({}, E.props), Ee = E.key;
    if (V != null)
      for (be in V.key !== void 0 && (Ee = "" + V.key), V)
        !We.call(V, be) || be === "key" || be === "__self" || be === "__source" || be === "ref" && V.ref === void 0 || (P[be] = V[be]);
    var be = arguments.length - 2;
    if (be === 1) P.children = le;
    else if (1 < be) {
      for (var we = Array(be), W = 0; W < be; W++)
        we[W] = arguments[W + 2];
      P.children = we;
    }
    return Ve(E.type, Ee, P);
  }, ge.createContext = function(E) {
    return E = {
      $$typeof: v,
      _currentValue: E,
      _currentValue2: E,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, E.Provider = E, E.Consumer = {
      $$typeof: h,
      _context: E
    }, E;
  }, ge.createElement = function(E, V, le) {
    var P, Ee = {}, be = null;
    if (V != null)
      for (P in V.key !== void 0 && (be = "" + V.key), V)
        We.call(V, P) && P !== "key" && P !== "__self" && P !== "__source" && (Ee[P] = V[P]);
    var we = arguments.length - 2;
    if (we === 1) Ee.children = le;
    else if (1 < we) {
      for (var W = Array(we), de = 0; de < we; de++)
        W[de] = arguments[de + 2];
      Ee.children = W;
    }
    if (E && E.defaultProps)
      for (P in we = E.defaultProps, we)
        Ee[P] === void 0 && (Ee[P] = we[P]);
    return Ve(E, be, Ee);
  }, ge.createRef = function() {
    return { current: null };
  }, ge.forwardRef = function(E) {
    return { $$typeof: b, render: E };
  }, ge.isValidElement = ke, ge.lazy = function(E) {
    return {
      $$typeof: D,
      _payload: { _status: -1, _result: E },
      _init: ce
    };
  }, ge.memo = function(E, V) {
    return {
      $$typeof: w,
      type: E,
      compare: V === void 0 ? null : V
    };
  }, ge.startTransition = Re, ge.unstable_useCacheRefresh = function() {
    return me.H.useCacheRefresh();
  }, ge.use = function(E) {
    return me.H.use(E);
  }, ge.useActionState = function(E, V, le) {
    return me.H.useActionState(E, V, le);
  }, ge.useCallback = function(E, V) {
    return me.H.useCallback(E, V);
  }, ge.useContext = function(E) {
    return me.H.useContext(E);
  }, ge.useDebugValue = function() {
  }, ge.useDeferredValue = function(E, V) {
    return me.H.useDeferredValue(E, V);
  }, ge.useEffect = function(E, V) {
    return me.H.useEffect(E, V);
  }, ge.useEffectEvent = function(E) {
    return me.H.useEffectEvent(E);
  }, ge.useId = function() {
    return me.H.useId();
  }, ge.useImperativeHandle = function(E, V, le) {
    return me.H.useImperativeHandle(E, V, le);
  }, ge.useInsertionEffect = function(E, V) {
    return me.H.useInsertionEffect(E, V);
  }, ge.useLayoutEffect = function(E, V) {
    return me.H.useLayoutEffect(E, V);
  }, ge.useMemo = function(E, V) {
    return me.H.useMemo(E, V);
  }, ge.useOptimistic = function(E, V) {
    return me.H.useOptimistic(E, V);
  }, ge.useReducer = function(E, V, le) {
    return me.H.useReducer(E, V, le);
  }, ge.useRef = function(E) {
    return me.H.useRef(E);
  }, ge.useState = function(E) {
    return me.H.useState(E);
  }, ge.useSyncExternalStore = function(E, V, le) {
    return me.H.useSyncExternalStore(
      E,
      V,
      le
    );
  }, ge.useTransition = function() {
    return me.H.useTransition();
  }, ge.version = "19.3.0", ge;
}
var ov;
function Do() {
  return ov || (ov = 1, po.exports = i0()), po.exports;
}
var F = Do(), go = { exports: {} }, Qu = {}, yo = { exports: {} }, Eo = {};
var fv;
function r0() {
  return fv || (fv = 1, (function(i) {
    function r(q, J) {
      var K = q.length;
      q.push(J);
      e: for (; 0 < K; ) {
        var ce = K - 1 >>> 1, oe = q[ce];
        if (0 < d(oe, J))
          q[ce] = J, q[K] = oe, K = ce;
        else break e;
      }
    }
    function o(q) {
      return q.length === 0 ? null : q[0];
    }
    function c(q) {
      if (q.length === 0) return null;
      var J = q[0], K = q.pop();
      if (K !== J) {
        q[0] = K;
        e: for (var ce = 0, oe = q.length, Re = oe >>> 1; ce < Re; ) {
          var Me = 2 * (ce + 1) - 1, ye = q[Me], E = Me + 1, V = q[E];
          if (0 > d(ye, K))
            E < oe && 0 > d(V, ye) ? (q[ce] = V, q[E] = K, ce = E) : (q[ce] = ye, q[Me] = K, ce = Me);
          else if (E < oe && 0 > d(V, K))
            q[ce] = V, q[E] = K, ce = E;
          else break e;
        }
      }
      return J;
    }
    function d(q, J) {
      var K = q.sortIndex - J.sortIndex;
      return K !== 0 ? K : q.id - J.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      i.unstable_now = function() {
        return h.now();
      };
    } else {
      var v = Date, b = v.now();
      i.unstable_now = function() {
        return v.now() - b;
      };
    }
    var R = [], w = [], D = 1, p = null, B = 3, z = !1, N = !1, Y = !1, x = !1, Z = typeof setTimeout == "function" ? setTimeout : null, ee = typeof clearTimeout == "function" ? clearTimeout : null, Q = typeof setImmediate < "u" ? setImmediate : null;
    function X(q) {
      for (var J = o(w); J !== null; ) {
        if (J.callback === null) c(w);
        else if (J.startTime <= q)
          c(w), J.sortIndex = J.expirationTime, r(R, J);
        else break;
        J = o(w);
      }
    }
    function te(q) {
      if (Y = !1, X(q), !N)
        if (o(R) !== null)
          N = !0, fe || (fe = !0, ke());
        else {
          var J = o(w);
          J !== null && I(te, J.startTime - q);
        }
    }
    var fe = !1, ae = -1, me = 5, We = -1;
    function Ve() {
      return x ? !0 : !(i.unstable_now() - We < me);
    }
    function et() {
      if (x = !1, fe) {
        var q = i.unstable_now();
        We = q;
        var J = !0;
        try {
          e: {
            N = !1, Y && (Y = !1, ee(ae), ae = -1), z = !0;
            var K = B;
            try {
              t: {
                for (X(q), p = o(R); p !== null && !(p.expirationTime > q && Ve()); ) {
                  var ce = p.callback;
                  if (typeof ce == "function") {
                    p.callback = null, B = p.priorityLevel;
                    var oe = ce(
                      p.expirationTime <= q
                    );
                    if (q = i.unstable_now(), typeof oe == "function") {
                      p.callback = oe, X(q), J = !0;
                      break t;
                    }
                    p === o(R) && c(R), X(q);
                  } else c(R);
                  p = o(R);
                }
                if (p !== null) J = !0;
                else {
                  var Re = o(w);
                  Re !== null && I(
                    te,
                    Re.startTime - q
                  ), J = !1;
                }
              }
              break e;
            } finally {
              p = null, B = K, z = !1;
            }
            J = void 0;
          }
        } finally {
          J ? ke() : fe = !1;
        }
      }
    }
    var ke;
    if (typeof Q == "function")
      ke = function() {
        Q(et);
      };
    else if (typeof MessageChannel < "u") {
      var wt = new MessageChannel(), qt = wt.port2;
      wt.port1.onmessage = et, ke = function() {
        qt.postMessage(null);
      };
    } else
      ke = function() {
        Z(et, 0);
      };
    function I(q, J) {
      ae = Z(function() {
        q(i.unstable_now());
      }, J);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(q) {
      q.callback = null;
    }, i.unstable_forceFrameRate = function(q) {
      0 > q || 125 < q ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : me = 0 < q ? Math.floor(1e3 / q) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return B;
    }, i.unstable_next = function(q) {
      switch (B) {
        case 1:
        case 2:
        case 3:
          var J = 3;
          break;
        default:
          J = B;
      }
      var K = B;
      B = J;
      try {
        return q();
      } finally {
        B = K;
      }
    }, i.unstable_requestPaint = function() {
      x = !0;
    }, i.unstable_runWithPriority = function(q, J) {
      switch (q) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          q = 3;
      }
      var K = B;
      B = q;
      try {
        return J();
      } finally {
        B = K;
      }
    }, i.unstable_scheduleCallback = function(q, J, K) {
      var ce = i.unstable_now();
      switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? ce + K : ce) : K = ce, q) {
        case 1:
          var oe = -1;
          break;
        case 2:
          oe = 250;
          break;
        case 5:
          oe = 1073741823;
          break;
        case 4:
          oe = 1e4;
          break;
        default:
          oe = 5e3;
      }
      return oe = K + oe, q = {
        id: D++,
        callback: J,
        priorityLevel: q,
        startTime: K,
        expirationTime: oe,
        sortIndex: -1
      }, K > ce ? (q.sortIndex = K, r(w, q), o(R) === null && q === o(w) && (Y ? (ee(ae), ae = -1) : Y = !0, I(te, K - ce))) : (q.sortIndex = oe, r(R, q), N || z || (N = !0, fe || (fe = !0, ke()))), q;
    }, i.unstable_shouldYield = Ve, i.unstable_wrapCallback = function(q) {
      var J = B;
      return function() {
        var K = B;
        B = J;
        try {
          return q.apply(this, arguments);
        } finally {
          B = K;
        }
      };
    };
  })(Eo)), Eo;
}
var dv;
function c0() {
  return dv || (dv = 1, yo.exports = r0()), yo.exports;
}
var bo = { exports: {} }, At = {};
var hv;
function s0() {
  if (hv) return At;
  hv = 1;
  var i = Do();
  function r(D) {
    var p = "https://react.dev/errors/" + D;
    if (1 < arguments.length) {
      p += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var B = 2; B < arguments.length; B++)
        p += "&args[]=" + encodeURIComponent(arguments[B]);
    }
    return "Minified React error #" + D + "; visit " + p + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  }, d = /* @__PURE__ */ Symbol.for("react.portal"), h = /* @__PURE__ */ Symbol.for("react.recoverable"), v = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function b(D, p, B) {
    var z = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: z == null ? null : z === v ? v : "" + z,
      children: D,
      containerInfo: p,
      implementation: B
    };
  }
  var R = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function w(D, p) {
    if (D === "font") return "";
    if (typeof p == "string")
      return p === "use-credentials" ? p : "";
  }
  return At.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, At.browser = function(D) {
    return { $$typeof: h, _reason: D };
  }, At.createPortal = function(D, p) {
    var B = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!p || p.nodeType !== 1 && p.nodeType !== 9 && p.nodeType !== 11)
      throw Error(r(299));
    return b(D, p, null, B);
  }, At.flushSync = function(D) {
    var p = R.T, B = c.p;
    try {
      if (R.T = null, c.p = 2, D) return D();
    } finally {
      R.T = p, c.p = B, c.d.f();
    }
  }, At.preconnect = function(D, p) {
    typeof D == "string" && (p ? (p = p.crossOrigin, p = typeof p == "string" ? p === "use-credentials" ? p : "" : void 0) : p = null, c.d.C(D, p));
  }, At.prefetchDNS = function(D) {
    typeof D == "string" && c.d.D(D);
  }, At.preinit = function(D, p) {
    if (typeof D == "string" && p && typeof p.as == "string") {
      var B = p.as, z = w(B, p.crossOrigin), N = typeof p.integrity == "string" ? p.integrity : void 0, Y = typeof p.fetchPriority == "string" ? p.fetchPriority : void 0;
      B === "style" ? c.d.S(
        D,
        typeof p.precedence == "string" ? p.precedence : void 0,
        {
          crossOrigin: z,
          integrity: N,
          fetchPriority: Y
        }
      ) : B === "script" && c.d.X(D, {
        crossOrigin: z,
        integrity: N,
        fetchPriority: Y,
        nonce: typeof p.nonce == "string" ? p.nonce : void 0
      });
    }
  }, At.preinitModule = function(D, p) {
    if (typeof D == "string")
      if (typeof p == "object" && p !== null) {
        if (p.as == null || p.as === "script") {
          var B = w(
            p.as,
            p.crossOrigin
          );
          c.d.M(D, {
            crossOrigin: B,
            integrity: typeof p.integrity == "string" ? p.integrity : void 0,
            nonce: typeof p.nonce == "string" ? p.nonce : void 0,
            fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0
          });
        }
      } else p == null && c.d.M(D);
  }, At.preload = function(D, p) {
    if (typeof D == "string" && typeof p == "object" && p !== null && typeof p.as == "string") {
      var B = p.as, z = w(B, p.crossOrigin);
      c.d.L(D, B, {
        crossOrigin: z,
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
  }, At.preloadModule = function(D, p) {
    if (typeof D == "string")
      if (p) {
        var B = w(p.as, p.crossOrigin);
        c.d.m(D, {
          as: typeof p.as == "string" && p.as !== "script" ? p.as : void 0,
          crossOrigin: B,
          integrity: typeof p.integrity == "string" ? p.integrity : void 0,
          nonce: typeof p.nonce == "string" ? p.nonce : void 0,
          fetchPriority: typeof p.fetchPriority == "string" ? p.fetchPriority : void 0
        });
      } else c.d.m(D);
  }, At.requestFormReset = function(D) {
    c.d.r(D);
  }, At.unstable_batchedUpdates = function(D, p) {
    return D(p);
  }, At.useFormState = function(D, p, B) {
    return R.H.useFormState(D, p, B);
  }, At.useFormStatus = function() {
    return R.H.useHostTransitionStatus();
  }, At.version = "19.3.0", At;
}
var mv;
function o0() {
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
  return i(), bo.exports = s0(), bo.exports;
}
var vv;
function f0() {
  if (vv) return Qu;
  vv = 1;
  var i = c0(), r = Do(), o = o0();
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
  function R(e) {
    if (h(e) !== e)
      throw Error(c(188));
  }
  function w(e) {
    var t = e.alternate;
    if (!t) {
      if (t = h(e), t === null) throw Error(c(188));
      return t !== e ? null : e;
    }
    for (var n = e, a = t; ; ) {
      var l = n.return;
      if (l === null) break;
      var u = l.alternate;
      if (u === null) {
        if (a = l.return, a !== null) {
          n = a;
          continue;
        }
        break;
      }
      if (l.child === u.child) {
        for (u = l.child; u; ) {
          if (u === n) return R(l), e;
          if (u === a) return R(l), t;
          u = u.sibling;
        }
        throw Error(c(188));
      }
      if (n.return !== a.return) n = l, a = u;
      else {
        for (var s = !1, f = l.child; f; ) {
          if (f === n) {
            s = !0, n = l, a = u;
            break;
          }
          if (f === a) {
            s = !0, a = l, n = u;
            break;
          }
          f = f.sibling;
        }
        if (!s) {
          for (f = u.child; f; ) {
            if (f === n) {
              s = !0, n = u, a = l;
              break;
            }
            if (f === a) {
              s = !0, a = u, n = l;
              break;
            }
            f = f.sibling;
          }
          if (!s) throw Error(c(189));
        }
      }
      if (n.alternate !== a) throw Error(c(190));
    }
    if (n.tag !== 3) throw Error(c(188));
    return n.stateNode.current === n ? e : t;
  }
  function D(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = D(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  function p(e, t, n, a, l, u) {
    for (; e !== null; ) {
      if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && n(e, a, l, u) || (e.tag !== 22 || e.memoizedState === null) && (t || e.tag !== 5 && e.tag !== 27) && p(
        e.child,
        t,
        n,
        a,
        l,
        u
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
  function z(e) {
    var t = !1;
    for (e = e.return; e !== null && (e.tag === 4 && (t = !0), !(e.tag === 3 || e.tag === 5 || e.tag === 27)); )
      e = e.return;
    return t;
  }
  function N(e) {
    var t = [null, null], n = B(e);
    return n === null || Y(
      t,
      e,
      n.child,
      { foundSelf: !1 }
    ), t;
  }
  function Y(e, t, n, a) {
    for (; n !== null; ) {
      if (n === t) a.foundSelf = !0;
      else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
        if (a.foundSelf) return e[1] = n, !0;
        e[0] = n;
      } else if ((n.tag !== 22 || n.memoizedState === null) && Y(
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
  function x(e) {
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
  var Z = null, ee = null;
  function Q(e, t, n) {
    return e === n ? !0 : e === t ? (Z = e, !0) : !1;
  }
  function X(e, t, n) {
    return e === n ? (ee = e, !1) : e === t ? (ee !== null && (Z = e), !0) : !1;
  }
  function te(e) {
    if (e === null) return null;
    do
      e = e === null ? null : e.return;
    while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
    return e || null;
  }
  function fe(e, t, n) {
    for (var a = 0, l = e; l; l = n(l)) a++;
    l = 0;
    for (var u = t; u; u = n(u)) l++;
    for (; 0 < a - l; ) e = n(e), a--;
    for (; 0 < l - a; ) t = n(t), l--;
    for (; a--; ) {
      if (e === t || t !== null && e === t.alternate)
        return e;
      e = n(e), t = n(t);
    }
    return null;
  }
  var ae = Object.assign, me = /* @__PURE__ */ Symbol.for("react.element"), We = /* @__PURE__ */ Symbol.for("react.transitional.element"), Ve = /* @__PURE__ */ Symbol.for("react.portal"), et = /* @__PURE__ */ Symbol.for("react.fragment"), ke = /* @__PURE__ */ Symbol.for("react.strict_mode"), wt = /* @__PURE__ */ Symbol.for("react.profiler"), qt = /* @__PURE__ */ Symbol.for("react.consumer"), I = /* @__PURE__ */ Symbol.for("react.context"), q = /* @__PURE__ */ Symbol.for("react.forward_ref"), J = /* @__PURE__ */ Symbol.for("react.suspense"), K = /* @__PURE__ */ Symbol.for("react.suspense_list"), ce = /* @__PURE__ */ Symbol.for("react.memo"), oe = /* @__PURE__ */ Symbol.for("react.lazy"), Re = /* @__PURE__ */ Symbol.for("react.activity"), Me = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), ye = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), E = /* @__PURE__ */ Symbol.for("react.view_transition"), V = /* @__PURE__ */ Symbol.for("react.recoverable"), le = Symbol.iterator;
  function P(e) {
    return e === null || typeof e != "object" ? null : (e = le && e[le] || e["@@iterator"], typeof e == "function" ? e : null);
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
      case wt:
        return "Profiler";
      case ke:
        return "StrictMode";
      case J:
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
        case I:
          return e.displayName || "Context";
        case qt:
          return (e._context.displayName || "Context") + ".Consumer";
        case q:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case ce:
          return t = e.displayName || null, t !== null ? t : be(e.type) || "Memo";
        case oe:
          t = e._payload, e = e._init;
          try {
            return be(e(t));
          } catch {
          }
      }
    return null;
  }
  var we = Array.isArray, W = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, de = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, $t = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, $n = [], Mn = -1;
  function Pt(e) {
    return { current: e };
  }
  function se(e) {
    0 > Mn || (e.current = $n[Mn], $n[Mn] = null, Mn--);
  }
  function Le(e, t) {
    Mn++, $n[Mn] = e.current, e.current = t;
  }
  var Bt = Pt(null), A = Pt(null), G = Pt(null), M = Pt(null);
  function L(e, t) {
    switch (Le(G, t), Le(A, e), Le(Bt, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? pm(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = pm(t), e = gm(t, e);
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
    se(Bt), Le(Bt, e);
  }
  function ue() {
    se(Bt), se(A), se(G);
  }
  function ze(e) {
    var t = e.memoizedState;
    t !== null && (Vl._currentValue = t.memoizedState, Le(M, e)), t = Bt.current;
    var n = gm(t, e.type);
    t !== n && (Le(A, e), Le(Bt, n));
  }
  function Ye(e) {
    A.current === e && (se(Bt), se(A)), M.current === e && (se(M), Vl._currentValue = $t);
  }
  var vt, Dt;
  function pt(e) {
    if (vt === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        vt = t && t[1] || "", Dt = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + vt + e + Dt;
  }
  var Ua = !1;
  function hn(e, t) {
    if (!e || Ua) return "";
    Ua = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var H = function() {
                throw Error();
              };
              if (Object.defineProperty(H.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(H, []);
                } catch (k) {
                  var S = k;
                }
                Reflect.construct(e, [], H);
              } else {
                try {
                  H.call();
                } catch (k) {
                  S = k;
                }
                H = !1;
                try {
                  var C = Object.getOwnPropertyDescriptor(
                    e.prototype,
                    "props"
                  );
                  Object.defineProperty(e.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), H = !0, new e();
                } finally {
                  H && (C !== void 0 ? Object.defineProperty(e.prototype, "props", C) : delete e.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (k) {
                S = k;
              }
              (H = e()) && typeof H.catch == "function" && H.catch(function() {
              });
            }
          } catch (k) {
            if (k && S && typeof k.stack == "string")
              return [k.stack, S.stack];
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
      var u = a.DetermineComponentFrameRoot(), s = u[0], f = u[1];
      if (s && f) {
        var m = s.split(`
`), _ = f.split(`
`);
        for (l = a = 0; a < m.length && !m[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; l < _.length && !_[l].includes(
          "DetermineComponentFrameRoot"
        ); )
          l++;
        if (a === m.length || l === _.length)
          for (a = m.length - 1, l = _.length - 1; 1 <= a && 0 <= l && m[a] !== _[l]; )
            l--;
        for (; 1 <= a && 0 <= l; a--, l--)
          if (m[a] !== _[l]) {
            if (a !== 1 || l !== 1)
              do
                if (a--, l--, 0 > l || m[a] !== _[l]) {
                  var U = `
` + m[a].replace(" at new ", " at ");
                  return e.displayName && U.includes("<anonymous>") && (U = U.replace("<anonymous>", e.displayName)), U;
                }
              while (1 <= a && 0 <= l);
            break;
          }
      }
    } finally {
      Ua = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? pt(n) : "";
  }
  function Da(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return pt(e.type);
      case 16:
        return pt("Lazy");
      case 13:
        return e.child !== t && t !== null ? pt("Suspense Fallback") : pt("Suspense");
      case 19:
        return pt("SuspenseList");
      case 0:
      case 15:
        return hn(e.type, !1);
      case 11:
        return hn(e.type.render, !1);
      case 1:
        return hn(e.type, !0);
      case 31:
        return pt("Activity");
      case 30:
        return pt("ViewTransition");
      default:
        return "";
    }
  }
  function Fl(e) {
    try {
      var t = "", n = null;
      do
        t += Da(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var mn = Object.prototype.hasOwnProperty, Br = i.unstable_scheduleCallback, Ir = i.unstable_cancelCallback, sp = i.unstable_shouldYield, op = i.unstable_requestPaint, It = i.unstable_now, fp = i.unstable_getCurrentPriorityLevel, qo = i.unstable_ImmediatePriority, Bo = i.unstable_UserBlockingPriority, ui = i.unstable_NormalPriority, dp = i.unstable_LowPriority, Io = i.unstable_IdlePriority, hp = i.log, mp = i.unstable_setDisableYieldValue, $l = null, Vt = null;
  function Pn(e) {
    if (typeof hp == "function" && mp(e), Vt && typeof Vt.setStrictMode == "function")
      try {
        Vt.setStrictMode($l, e);
      } catch {
      }
  }
  var Gt = Math.clz32 ? Math.clz32 : gp, vp = Math.log, pp = Math.LN2;
  function gp(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (vp(e) / pp | 0) | 0;
  }
  var ii = 256, ri = 262144, ci = 4194304;
  function za(e) {
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
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var l = 0, u = e.suspendedLanes, s = e.pingedLanes;
    e = e.warmLanes;
    var f = a & 134217727;
    return f !== 0 ? (a = f & ~u, a !== 0 ? l = za(a) : (s &= f, s !== 0 ? l = za(s) : n || (n = f & ~e, n !== 0 && (l = za(n))))) : (f = a & ~u, f !== 0 ? l = za(f) : s !== 0 ? l = za(s) : n || (n = a & ~e, n !== 0 && (l = za(n)))), l === 0 ? 0 : t !== 0 && t !== l && (t & u) === 0 && (u = l & -l, n = t & -t, u >= n || u === 32 && (n & 4194048) !== 0) ? t : l;
  }
  function Pl(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Vo(e, t) {
    (t & 8) !== 0 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var a = 31 - Gt(n), l = 1 << a;
        t |= e[a], n &= ~l;
      }
    return t;
  }
  function yp(e, t) {
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
  function Wl(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Ep(e, t, n, a, l, u) {
    var s = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var f = e.entanglements, m = e.expirationTimes, _ = e.hiddenUpdates;
    for (n = s & ~n; 0 < n; ) {
      var U = 31 - Gt(n), H = 1 << U;
      f[U] = 0, m[U] = -1;
      var S = _[U];
      if (S !== null)
        for (_[U] = null, U = 0; U < S.length; U++) {
          var C = S[U];
          C !== null && (C.lane &= -536870913);
        }
      n &= ~H;
    }
    a !== 0 && Yo(e, a, 0), u !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(s & ~t));
  }
  function Yo(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - Gt(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 261930;
  }
  function Xo(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var a = 31 - Gt(n), l = 1 << a;
      l & t | e[a] & t && (e[a] |= t), n &= ~l;
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
    var e = de.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : ev(e.type));
  }
  function Zo(e, t) {
    var n = de.p;
    try {
      return de.p = e, t();
    } finally {
      de.p = n;
    }
  }
  var jn = Math.random().toString(36).slice(2), gt = "__reactFiber$" + jn, zt = "__reactProps$" + jn, tl = "__reactContainer$" + jn, Jo = "__reactEvents$" + jn, bp = "__reactListeners$" + jn, Sp = "__reactHandles$" + jn, ko = "__reactResources$" + jn, eu = "__reactMarker$" + jn, oi = "__reactLoad$" + jn;
  function fi(e) {
    delete e[gt], delete e[zt], delete e[bp], delete e[Sp];
  }
  function xa(e) {
    var t;
    if (t = e[gt]) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[tl] || n[gt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = Mm(e); e !== null; ) {
            if (n = e[gt]) return n;
            e = Mm(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function nl(e) {
    if (e = e[gt] || e[tl]) {
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
  function al(e) {
    var t = e[ko];
    return t || (t = e[ko] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function st(e) {
    e[eu] = !0;
  }
  function Fo(e) {
    e[oi] = void 0;
  }
  var $o = /* @__PURE__ */ new Set(), Po = {};
  function Ma(e, t) {
    ll(e, t), ll(e + "Capture", t);
  }
  function ll(e, t) {
    for (Po[e] = t, e = 0; e < t.length; e++)
      $o.add(t[e]);
  }
  var Tp = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Wo = {}, ef = {};
  function Ap(e) {
    return mn.call(ef, e) ? !0 : mn.call(Wo, e) ? !1 : Tp.test(e) ? ef[e] = !0 : (Wo[e] = !0, !1);
  }
  var xe = !1;
  function tf() {
    var e = xe;
    return xe = !1, e;
  }
  function di(e, t, n) {
    if (Ap(t))
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
  function Hn(e, t, n, a) {
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
  function _p(e, t, n) {
    var a = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof a < "u" && typeof a.get == "function" && typeof a.set == "function") {
      var l = a.get, u = a.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return l.call(this);
        },
        set: function(s) {
          n = "" + s, u.call(this, s);
        }
      }), Object.defineProperty(e, t, {
        enumerable: a.enumerable
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
      e._valueTracker = _p(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function af(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), a = "";
    return e && (a = nf(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), !0) : !1;
  }
  var Np = /[\n"\\]/g;
  function Wt(e) {
    return e.replace(
      Np,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Qr(e, t, n, a, l, u, s, f) {
    e.name = "", s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.type = s : e.removeAttribute("type"), t != null ? s === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Yt(t)) : e.value !== "" + Yt(t) && (e.value = "" + Yt(t)) : s !== "submit" && s !== "reset" || e.removeAttribute("value"), t != null ? s === "number" && e.value == t ? Kr(e, Yt(e.value)) : Kr(e, Yt(t)) : n != null ? Kr(e, Yt(n)) : a != null && e.removeAttribute("value"), l == null && u != null && (e.defaultChecked = !!u), l != null && (e.checked = l && typeof l != "function" && typeof l != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.name = "" + Yt(f) : e.removeAttribute("name");
  }
  function lf(e, t, n, a, l, u, s, f) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        Xr(e);
        return;
      }
      n = n != null ? "" + Yt(n) : "", t = t != null ? "" + Yt(t) : n, f || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? l, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = f ? e.checked : !!a, e.defaultChecked = !!a, s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.name = s), Xr(e);
  }
  function Kr(e, t) {
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
      for (n = "" + Yt(n), t = null, l = 0; l < e.length; l++) {
        if (e[l].value === n) {
          e[l].selected = !0, a && (e[l].defaultSelected = !0);
          return;
        }
        t !== null || e[l].disabled || (t = e[l]);
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
  function rf(e, t, n, a) {
    if (t == null) {
      if (a != null) {
        if (n != null) throw Error(c(92));
        if (we(a)) {
          if (1 < a.length) throw Error(c(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), t = n;
    }
    n = Yt(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a), Xr(e);
  }
  function il(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var wp = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function cf(e, t, n) {
    var a = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || wp.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function sf(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(c(62));
    if (e = e.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "", xe = !0);
      for (var l in t)
        a = t[l], t.hasOwnProperty(l) && n[l] !== a && (cf(e, l, a), xe = !0);
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
  var Op = /* @__PURE__ */ new Map([
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
  ]), Cp = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function mi(e) {
    return Cp.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function An() {
  }
  var Jr = null;
  function kr(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var rl = null, cl = null;
  function of(e) {
    var t = nl(e);
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
              'input[name="' + Wt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var l = a[zt] || null;
                if (!l) throw Error(c(90));
                Qr(
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
              a = n[t], a.form === e.form && af(a);
          }
          break e;
        case "textarea":
          uf(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && ul(e, !!n.multiple, t, !1);
      }
    }
  }
  var Fr = !1;
  function ff(e, t, n) {
    if (Fr) return e(t, n);
    Fr = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (Fr = !1, (rl !== null || cl !== null) && (mr(), rl && (t = rl, e = cl, cl = rl = null, of(t), e)))
        for (t = 0; t < e.length; t++) of(e[t]);
    }
  }
  function nu(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var a = n[zt] || null;
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
        c(231, t, typeof n)
      );
    return n;
  }
  var Ln = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), $r = !1;
  if (Ln)
    try {
      var au = {};
      Object.defineProperty(au, "passive", {
        get: function() {
          $r = !0;
        }
      }), window.addEventListener("test", au, au), window.removeEventListener("test", au, au);
    } catch {
      $r = !1;
    }
  var Wn = null, Pr = null, vi = null;
  function df() {
    if (vi) return vi;
    var e, t = Pr, n = t.length, a, l = "value" in Wn ? Wn.value : Wn.textContent, u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var s = n - e;
    for (a = 1; a <= s && t[n - a] === l[u - a]; a++) ;
    return vi = l.slice(e, 1 < a ? 1 - a : void 0);
  }
  function pi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function gi() {
    return !0;
  }
  function hf() {
    return !1;
  }
  function Ot(e) {
    function t(n, a, l, u, s) {
      this._reactName = n, this._targetInst = l, this.type = a, this.nativeEvent = u, this.target = s, this.currentTarget = null;
      for (var f in e)
        e.hasOwnProperty(f) && (n = e[f], this[f] = n ? n(u) : u[f]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? gi : hf, this.isPropagationStopped = hf, this;
    }
    return ae(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = gi);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = gi);
      },
      persist: function() {
      },
      isPersistent: gi
    }), t;
  }
  var ea = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, yi = Ot(ea), lu = ae({}, ea, { view: 0, detail: 0 }), Rp = Ot(lu), Wr, ec, uu, Ei = ae({}, lu, {
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
  }), mf = Ot(Ei), Up = ae({}, Ei, { dataTransfer: 0 }), Dp = Ot(Up), zp = ae({}, lu, { relatedTarget: 0 }), tc = Ot(zp), xp = ae({}, ea, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Mp = Ot(xp), jp = ae({}, ea, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Hp = Ot(jp), Lp = ae({}, ea, { data: 0 }), vf = Ot(Lp), qp = {
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
  }, Bp = {
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
  }, Ip = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Vp(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Ip[e]) ? !!t[e] : !1;
  }
  function nc() {
    return Vp;
  }
  var Gp = ae({}, lu, {
    key: function(e) {
      if (e.key) {
        var t = qp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = pi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Bp[e.keyCode] || "Unidentified" : "";
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
      return e.type === "keypress" ? pi(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? pi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Yp = Ot(Gp), Xp = ae({}, Ei, {
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
  }), pf = Ot(Xp), Qp = ae({}, ea, { submitter: 0 }), Kp = Ot(Qp), Zp = ae({}, lu, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: nc
  }), Jp = Ot(Zp), kp = ae({}, ea, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Fp = Ot(kp), $p = ae({}, Ei, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Pp = Ot($p), Wp = ae({}, ea, {
    newState: 0,
    oldState: 0,
    source: 0
  }), eg = Ot(Wp), tg = [9, 13, 27, 32], ac = Ln && "CompositionEvent" in window, iu = null;
  Ln && "documentMode" in document && (iu = document.documentMode);
  var ng = Ln && "TextEvent" in window && !iu, gf = Ln && (!ac || iu && 8 < iu && 11 >= iu), yf = " ", Ef = !1;
  function bf(e, t) {
    switch (e) {
      case "keyup":
        return tg.indexOf(t.keyCode) !== -1;
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
  var sl = !1;
  function ag(e, t) {
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
  function lg(e, t) {
    if (sl)
      return e === "compositionend" || !ac && bf(e, t) ? (e = df(), vi = Pr = Wn = null, sl = !1, e) : null;
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
        return gf && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var ug = {
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
    return t === "input" ? !!ug[e.type] : t === "textarea";
  }
  function Af(e, t, n, a) {
    rl ? cl ? cl.push(a) : cl = [a] : rl = a, t = br(t, "onChange"), 0 < t.length && (n = new yi(
      "onChange",
      "change",
      null,
      n,
      a
    ), e.push({ event: n, listeners: t }));
  }
  var ru = null, cu = null;
  function ig(e) {
    om(e, 0);
  }
  function bi(e) {
    var t = tu(e);
    if (af(t)) return e;
  }
  function _f(e, t) {
    if (e === "change") return t;
  }
  var Nf = !1;
  if (Ln) {
    var lc;
    if (Ln) {
      var uc = "oninput" in document;
      if (!uc) {
        var wf = document.createElement("div");
        wf.setAttribute("oninput", "return;"), uc = typeof wf.oninput == "function";
      }
      lc = uc;
    } else lc = !1;
    Nf = lc && (!document.documentMode || 9 < document.documentMode);
  }
  function Of() {
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
      ), ff(ig, t);
    }
  }
  function rg(e, t, n) {
    e === "focusin" ? (Of(), ru = t, cu = n, ru.attachEvent("onpropertychange", Cf)) : e === "focusout" && Of();
  }
  function cg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return bi(cu);
  }
  function sg(e, t) {
    if (e === "click") return bi(t);
  }
  function og(e, t) {
    if (e === "input" || e === "change")
      return bi(t);
  }
  function fg(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Xt = typeof Object.is == "function" ? Object.is : fg;
  function su(e, t) {
    if (Xt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var l = n[a];
      if (!mn.call(t, l) || !Xt(e[l], t[l]))
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
  var dg = Ln && "documentMode" in document && 11 >= document.documentMode, ol = null, cc = null, ou = null, sc = !1;
  function xf(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    sc || ol == null || ol !== ic(a) || (a = ol, "selectionStart" in a && rc(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), ou && su(ou, a) || (ou = a, a = br(cc, "onSelect"), 0 < a.length && (t = new yi(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: a }), t.target = ol)));
  }
  function ja(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var fl = {
    animationend: ja("Animation", "AnimationEnd"),
    animationiteration: ja("Animation", "AnimationIteration"),
    animationstart: ja("Animation", "AnimationStart"),
    transitionrun: ja("Transition", "TransitionRun"),
    transitionstart: ja("Transition", "TransitionStart"),
    transitioncancel: ja("Transition", "TransitionCancel"),
    transitionend: ja("Transition", "TransitionEnd")
  }, oc = {}, Mf = {};
  Ln && (Mf = document.createElement("div").style, "AnimationEvent" in window || (delete fl.animationend.animation, delete fl.animationiteration.animation, delete fl.animationstart.animation), "TransitionEvent" in window || delete fl.transitionend.transition);
  function Ha(e) {
    if (oc[e]) return oc[e];
    if (!fl[e]) return e;
    var t = fl[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in Mf)
        return oc[e] = t[n];
    return e;
  }
  var jf = Ha("animationend"), Hf = Ha("animationiteration"), Lf = Ha("animationstart"), hg = Ha("transitionrun"), mg = Ha("transitionstart"), vg = Ha("transitioncancel"), qf = Ha("transitionend"), Bf = /* @__PURE__ */ new Map(), fc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  fc.push("scrollEnd");
  function vn(e, t) {
    Bf.set(e, t), Ma(t, [e]);
  }
  var pg = 0;
  function qn(e, t) {
    if (e.name != null && e.name !== "auto") return e.name;
    if (t.autoName !== null) return t.autoName;
    e = En.identifierPrefix;
    var n = pg++;
    return e = "_" + e + "t_" + n.toString(32) + "_", t.autoName = e;
  }
  function If(e) {
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
  function Bn(e, t) {
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
  }, en = [], dl = 0, dc = 0;
  function Ti() {
    for (var e = dl, t = dc = dl = 0; t < e; ) {
      var n = en[t];
      en[t++] = null;
      var a = en[t];
      en[t++] = null;
      var l = en[t];
      en[t++] = null;
      var u = en[t];
      if (en[t++] = null, a !== null && l !== null) {
        var s = a.pending;
        s === null ? l.next = l : (l.next = s.next, s.next = l), a.pending = l;
      }
      u !== 0 && Vf(n, l, u);
    }
  }
  function Ai(e, t, n, a) {
    en[dl++] = e, en[dl++] = t, en[dl++] = n, en[dl++] = a, dc |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function hc(e, t, n, a) {
    return Ai(e, t, n, a), _i(e);
  }
  function La(e, t) {
    return Ai(e, null, null, t), _i(e);
  }
  function Vf(e, t, n) {
    e.lanes |= n;
    var a = e.alternate;
    a !== null && (a.lanes |= n);
    for (var l = !1, u = e.return; u !== null; )
      u.childLanes |= n, a = u.alternate, a !== null && (a.childLanes |= n), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (l = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, l && t !== null && (l = 31 - Gt(n), e = u.hiddenUpdates, a = e[l], a === null ? e[l] = [t] : a.push(t), t.lane = n | 536870912), u) : null;
  }
  function _i(e) {
    if (50 < zu)
      throw zu = 0, hr = null, Error(c(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var hl = {};
  function gg(e, t, n, a) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function xt(e, t, n, a) {
    return new gg(e, t, n, a);
  }
  function mc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function In(e, t) {
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
  function Ni(e, t, n, a, l, u) {
    var s = 0;
    if (a = e, typeof a == "function") mc(a) && (s = 1);
    else if (typeof a == "string")
      s = Qy(
        e,
        n,
        Bt.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (a) {
        case Re:
          return e = xt(31, n, t, l), e.elementType = Re, e.lanes = u, e;
        case et:
          return qa(n.children, l, u, t);
        case ke:
          s = 8, l |= 24;
          break;
        case wt:
          return e = xt(12, n, t, l | 2), e.elementType = wt, e.lanes = u, e;
        case J:
          return e = xt(13, n, t, l), e.elementType = J, e.lanes = u, e;
        case K:
          return e = xt(19, n, t, l), e.elementType = K, e.lanes = u, e;
        case Me:
        case E:
          return e = l | 32, e = xt(30, n, t, e), e.elementType = E, e.lanes = u, e.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, e;
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case I:
                s = 10;
                break e;
              case qt:
                s = 9;
                break e;
              case q:
                s = 11;
                break e;
              case ce:
                s = 14;
                break e;
              case oe:
                s = 16, a = null;
                break e;
            }
          s = 29, n = Error(
            c(130, e === null ? "null" : typeof e, "")
          ), a = null;
      }
    return t = xt(s, n, t, l), t.elementType = e, t.type = a, t.lanes = u, t;
  }
  function qa(e, t, n, a) {
    return e = xt(7, e, a, t), e.lanes = n, e;
  }
  function vc(e, t, n) {
    return e = xt(6, e, null, t), e.lanes = n, e;
  }
  function Yf(e) {
    var t = xt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function pc(e, t, n) {
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
  function tn(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = Xf.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: Fl(t)
      }, Xf.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Fl(t)
    };
  }
  var ml = [], vl = 0, wi = null, fu = 0, nn = [], an = 0, ta = null, _n = 1, Nn = "";
  function Vn(e, t) {
    ml[vl++] = fu, ml[vl++] = wi, wi = e, fu = t;
  }
  function Qf(e, t, n) {
    nn[an++] = _n, nn[an++] = Nn, nn[an++] = ta, ta = e;
    var a = _n;
    e = Nn;
    var l = 32 - Gt(a) - 1;
    a &= ~(1 << l), n += 1;
    var u = 32 - Gt(t) + l;
    if (30 < u) {
      var s = l - l % 5;
      u = (a & (1 << s) - 1).toString(32), a >>= s, l -= s, _n = 1 << 32 - Gt(t) + l | n << l | a, Nn = u + e;
    } else
      _n = 1 << u | n << l | a, Nn = e;
  }
  function Oi(e) {
    e.return !== null && (Vn(e, 1), Qf(e, 1, 0));
  }
  function gc(e) {
    for (; e === wi; )
      wi = ml[--vl], ml[vl] = null, fu = ml[--vl], ml[vl] = null;
    for (; e === ta; )
      ta = nn[--an], nn[an] = null, Nn = nn[--an], nn[an] = null, _n = nn[--an], nn[an] = null;
  }
  function Kf(e, t) {
    nn[an++] = _n, nn[an++] = Nn, nn[an++] = ta, _n = t.id, Nn = t.overflow, ta = e;
  }
  var ot = null, Qe = null, Ae = !1, na = null, ln = !1, yc = Error(c(519));
  function aa(e) {
    var t = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw du(tn(t, e)), yc;
  }
  function Zf(e) {
    var t = e.stateNode, n = e.type, a = e.memoizedProps;
    switch (t[gt] = e, t[zt] = a, n) {
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
        Ne("invalid", t), lf(
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
        Ne("invalid", t);
        break;
      case "textarea":
        Ne("invalid", t), rf(t, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === !0 || mm(t.textContent, n) ? (a.popover != null && (Ne("beforetoggle", t), Ne("toggle", t)), a.onScroll != null && Ne("scroll", t), a.onScrollEnd != null && Ne("scrollend", t), a.onClick != null && (t.onclick = An), t = !0) : t = !1, t || aa(e, !0);
  }
  function Ci(e) {
    for (ot = e.return; ot; )
      switch (ot.tag) {
        case 5:
        case 31:
        case 13:
          ln = !1;
          return;
        case 27:
        case 3:
          ln = !0;
          return;
        default:
          ot = ot.return;
      }
  }
  function pl(e) {
    if (e !== ot) return !1;
    if (!Ae) return Ci(e), Ae = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Js(e.type, e.memoizedProps)), n = !n), n && Qe && aa(e), Ci(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Qe = xm(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Qe = xm(e);
    } else
      t === 27 ? (t = Qe, Ea(e.type) ? (e = ao, ao = null, Qe = e) : Qe = t) : Qe = ot ? rn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ba() {
    Qe = ot = null, Ae = !1;
  }
  function Ec() {
    var e = na;
    return e !== null && (Ht === null ? Ht = e : Ht.push.apply(
      Ht,
      e
    ), na = null), e;
  }
  function du(e) {
    na === null ? na = [e] : na.push(e);
  }
  var bc = Pt(null), Ia = null, Gn = null;
  function la(e, t, n) {
    Le(bc, t._currentValue), t._currentValue = n;
  }
  function Yn(e) {
    e._currentValue = bc.current, se(bc);
  }
  function Ri(e, t, n) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Sc(e, t, n, a) {
    var l = e.child;
    for (l !== null && (l.return = e); l !== null; ) {
      var u = l.dependencies;
      if (u !== null) {
        var s = l.child;
        u = u.firstContext;
        e: for (; u !== null; ) {
          var f = u;
          u = l;
          for (var m = 0; m < t.length; m++)
            if (f.context === t[m]) {
              u.lanes |= n, f = u.alternate, f !== null && (f.lanes |= n), Ri(
                u.return,
                n,
                e
              ), a || (s = null);
              break e;
            }
          u = f.next;
        }
      } else if (l.tag === 18) {
        if (s = l.return, s === null) throw Error(c(341));
        s.lanes |= n, u = s.alternate, u !== null && (u.lanes |= n), Ri(s, n, e), s = null;
      } else
        l.tag === 13 && l.memoizedState !== null && l.memoizedState.dehydrated === null ? (l.lanes |= n, s = l.alternate, s !== null && (s.lanes |= n), Ri(
          l.return,
          n,
          e
        ), s = l.child, s = s !== null ? s.sibling : null) : s = l.child;
      if (s !== null) s.return = l;
      else
        for (s = l; s !== null; ) {
          if (s === e) {
            s = null;
            break;
          }
          if (l = s.sibling, l !== null) {
            l.return = s.return, s = l;
            break;
          }
          s = s.return;
        }
      l = s;
    }
  }
  function Va(e, t, n, a) {
    e = null;
    for (var l = t, u = !1; l !== null; ) {
      if (!u) {
        if ((l.flags & 524288) !== 0) u = !0;
        else if ((l.flags & 262144) !== 0) break;
      }
      if (l.tag === 10) {
        var s = l.alternate;
        if (s === null) throw Error(c(387));
        if (s = s.memoizedProps, s !== null) {
          var f = l.type;
          Xt(l.pendingProps.value, s.value) || (e !== null ? e.push(f) : e = [f]);
        }
      } else if (l === M.current) {
        if (s = l.alternate, s === null) throw Error(c(387));
        s.memoizedState.memoizedState !== l.memoizedState.memoizedState && (e !== null ? e.push(Vl) : e = [Vl]);
      }
      l = l.return;
    }
    return e !== null && Sc(
      t,
      e,
      n,
      a
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
  function Ga(e) {
    Ia = e, Gn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function yt(e) {
    return Jf(Ia, e);
  }
  function Di(e, t) {
    return Ia === null && Ga(e), Jf(e, t);
  }
  function Jf(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, Gn === null) {
      if (e === null) throw Error(c(308));
      Gn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Gn = Gn.next = t;
    return n;
  }
  var yg = typeof AbortController < "u" ? AbortController : function() {
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
  }, Eg = i.unstable_scheduleCallback, bg = i.unstable_NormalPriority, tt = {
    $$typeof: I,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Tc() {
    return {
      controller: new yg(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function hu(e) {
    e.refCount--, e.refCount === 0 && Eg(bg, function() {
      e.controller.abort();
    });
  }
  function kf(e, t) {
    if ((e.pendingLanes & 4194048) !== 0) {
      var n = e.transitionTypes;
      for (n === null && (n = e.transitionTypes = []), e = 0; e < t.length; e++) {
        var a = t[e];
        n.indexOf(a) === -1 && n.push(a);
      }
    }
  }
  var mu = null;
  function Sg(e) {
    var t = e.transitionTypes;
    return e.transitionTypes = null, t;
  }
  var vu = null, Ac = 0, Ya = 0, gl = null;
  function Tg(e, t) {
    if (vu === null) {
      var n = vu = [];
      Ac = 0, Ya = Bs(), gl = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return Ac++, t.then(Ff, Ff), t;
  }
  function Ff() {
    if (--Ac === 0 && (mu = null, vu !== null)) {
      gl !== null && (gl.status = "fulfilled");
      var e = vu;
      vu = null, Ya = 0, gl = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function Ag(e, t) {
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
  var $f = W.S;
  W.S = function(e, t) {
    if (Yh = It(), typeof t == "object" && t !== null && typeof t.then == "function" && Tg(e, t), mu !== null)
      for (var n = jl; n !== null; )
        kf(n, mu), n = n.next;
    if (n = e.types, n !== null) {
      for (var a = jl; a !== null; )
        kf(a, n), a = a.next;
      if (Ya !== 0) {
        a = mu, a === null && (a = mu = []);
        for (var l = 0; l < n.length; l++) {
          var u = n[l];
          a.indexOf(u) === -1 && a.push(u);
        }
      }
    }
    $f !== null && $f(e, t);
  };
  var Xa = Pt(null);
  function _c() {
    var e = Xa.current;
    return e !== null ? e : Xe.pooledCache;
  }
  function zi(e, t) {
    t === null ? Le(Xa, Xa.current) : Le(Xa, t.pool);
  }
  function Pf() {
    var e = _c();
    return e === null ? null : { parent: tt._currentValue, pool: e };
  }
  var yl = Error(c(460)), Nc = Error(c(474)), xi = Error(c(542)), Mi = { then: function() {
  } };
  function Wf(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function ed(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(An, An), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, nd(e), e === void 0 && !("reason" in t) ? Error(c(600)) : e;
      default:
        if (typeof t.status == "string") t.then(An, An);
        else {
          if (e = Xe, e !== null && 100 < e.shellSuspendCounter)
            throw Error(c(482));
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
            throw e = t.reason, nd(e), e;
        }
        throw Ka = t, yl;
    }
  }
  function Qa(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (Ka = n, yl) : n;
    }
  }
  var Ka = null;
  function td() {
    if (Ka === null) throw Error(c(459));
    var e = Ka;
    return Ka = null, e;
  }
  function nd(e) {
    if (e === yl || e === xi)
      throw Error(c(483));
  }
  var El = null, pu = 0;
  function ji(e) {
    var t = pu;
    return pu += 1, El === null && (El = []), ed(El, e, t);
  }
  function ua(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function Hi(e, t) {
    throw t.$$typeof === me ? Error(c(525)) : (e = Object.prototype.toString.call(t), Error(
      c(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function ad(e) {
    function t(T, y) {
      if (e) {
        var O = T.deletions;
        O === null ? (T.deletions = [y], T.flags |= 16) : O.push(y);
      }
    }
    function n(T, y) {
      if (!e) return null;
      for (; y !== null; )
        t(T, y), y = y.sibling;
      return null;
    }
    function a(T) {
      for (var y = /* @__PURE__ */ new Map(); T !== null; )
        T.key === null ? y.set(T.index, T) : y.set(T.key, T), T = T.sibling;
      return y;
    }
    function l(T, y) {
      return T = In(T, y), T.index = 0, T.sibling = null, T;
    }
    function u(T, y, O) {
      return T.index = O, e ? (O = T.alternate, O !== null ? (O = O.index, O < y ? (T.flags |= 2, y) : O) : (T.flags |= 134217730, y)) : (T.flags |= 1048576, y);
    }
    function s(T) {
      return e && T.alternate === null && (T.flags |= 134217730), T;
    }
    function f(T, y, O, j) {
      return y === null || y.tag !== 6 ? (y = vc(O, T.mode, j), y.return = T, y) : (y = l(y, O), y.return = T, y);
    }
    function m(T, y, O, j) {
      var $ = O.type;
      return $ === et ? (T = U(
        T,
        y,
        O.props.children,
        j,
        O.key
      ), ua(T, O), T) : y !== null && (y.elementType === $ || typeof $ == "object" && $ !== null && $.$$typeof === oe && Qa($) === y.type) ? (y = l(y, O.props), ua(y, O), y.return = T, y) : (y = Ni(
        O.type,
        O.key,
        O.props,
        null,
        T.mode,
        j
      ), ua(y, O), y.return = T, y);
    }
    function _(T, y, O, j) {
      return y === null || y.tag !== 4 || y.stateNode.containerInfo !== O.containerInfo || y.stateNode.implementation !== O.implementation ? (y = pc(O, T.mode, j), y.return = T, y) : (y = l(y, O.children || []), y.return = T, y);
    }
    function U(T, y, O, j, $) {
      return y === null || y.tag !== 7 ? (y = qa(
        O,
        T.mode,
        j,
        $
      ), y.return = T, y) : (y = l(y, O), y.return = T, y);
    }
    function H(T, y, O) {
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return y = vc(
          "" + y,
          T.mode,
          O
        ), y.return = T, y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case We:
            return O = Ni(
              y.type,
              y.key,
              y.props,
              null,
              T.mode,
              O
            ), ua(O, y), O.return = T, O;
          case Ve:
            return y = pc(
              y,
              T.mode,
              O
            ), y.return = T, y;
          case oe:
            return y = Qa(y), H(T, y, O);
        }
        if (we(y) || P(y))
          return y = qa(
            y,
            T.mode,
            O,
            null
          ), y.return = T, y;
        if (typeof y.then == "function")
          return H(T, ji(y), O);
        if (y.$$typeof === I)
          return H(
            T,
            Di(T, y),
            O
          );
        Hi(T, y);
      }
      return null;
    }
    function S(T, y, O, j) {
      var $ = y !== null ? y.key : null;
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return $ !== null ? null : f(T, y, "" + O, j);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case We:
            return O.key === $ ? m(T, y, O, j) : null;
          case Ve:
            return O.key === $ ? _(T, y, O, j) : null;
          case oe:
            return O = Qa(O), S(T, y, O, j);
        }
        if (we(O) || P(O))
          return $ !== null ? null : U(T, y, O, j, null);
        if (typeof O.then == "function")
          return S(
            T,
            y,
            ji(O),
            j
          );
        if (O.$$typeof === I)
          return S(
            T,
            y,
            Di(T, O),
            j
          );
        Hi(T, O);
      }
      return null;
    }
    function C(T, y, O, j, $) {
      if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
        return T = T.get(O) || null, f(y, T, "" + j, $);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case We:
            return T = T.get(
              j.key === null ? O : j.key
            ) || null, m(y, T, j, $);
          case Ve:
            return T = T.get(
              j.key === null ? O : j.key
            ) || null, _(y, T, j, $);
          case oe:
            return j = Qa(j), C(
              T,
              y,
              O,
              j,
              $
            );
        }
        if (we(j) || P(j))
          return T = T.get(O) || null, U(y, T, j, $, null);
        if (typeof j.then == "function")
          return C(
            T,
            y,
            O,
            ji(j),
            $
          );
        if (j.$$typeof === I)
          return C(
            T,
            y,
            O,
            Di(y, j),
            $
          );
        Hi(y, j);
      }
      return null;
    }
    function k(T, y, O, j) {
      for (var $ = null, Ce = null, re = y, he = y = 0, lt = null; re !== null && he < O.length; he++) {
        re.index > he ? (lt = re, re = null) : lt = re.sibling;
        var Ue = S(
          T,
          re,
          O[he],
          j
        );
        if (Ue === null) {
          re === null && (re = lt);
          break;
        }
        e && re && Ue.alternate === null && t(T, re), y = u(Ue, y, he), Ce === null ? $ = Ue : Ce.sibling = Ue, Ce = Ue, re = lt;
      }
      if (he === O.length)
        return n(T, re), Ae && Vn(T, he), $;
      if (re === null) {
        for (; he < O.length; he++)
          re = H(T, O[he], j), re !== null && (y = u(
            re,
            y,
            he
          ), Ce === null ? $ = re : Ce.sibling = re, Ce = re);
        return Ae && Vn(T, he), $;
      }
      for (re = a(re); he < O.length; he++)
        lt = C(
          re,
          T,
          he,
          O[he],
          j
        ), lt !== null && (e && (Ue = lt.alternate, Ue !== null && re.delete(Ue.key === null ? he : Ue.key)), y = u(
          lt,
          y,
          he
        ), Ce === null ? $ = lt : Ce.sibling = lt, Ce = lt);
      return e && re.forEach(function(_a) {
        return t(T, _a);
      }), Ae && Vn(T, he), $;
    }
    function ne(T, y, O, j) {
      if (O == null) throw Error(c(151));
      for (var $ = null, Ce = null, re = y, he = y = 0, lt = null, Ue = O.next(); re !== null && !Ue.done; he++, Ue = O.next()) {
        re.index > he ? (lt = re, re = null) : lt = re.sibling;
        var _a = S(T, re, Ue.value, j);
        if (_a === null) {
          re === null && (re = lt);
          break;
        }
        e && re && _a.alternate === null && t(T, re), y = u(_a, y, he), Ce === null ? $ = _a : Ce.sibling = _a, Ce = _a, re = lt;
      }
      if (Ue.done)
        return n(T, re), Ae && Vn(T, he), $;
      if (re === null) {
        for (; !Ue.done; he++, Ue = O.next())
          Ue = H(T, Ue.value, j), Ue !== null && (y = u(Ue, y, he), Ce === null ? $ = Ue : Ce.sibling = Ue, Ce = Ue);
        return Ae && Vn(T, he), $;
      }
      for (re = a(re); !Ue.done; he++, Ue = O.next())
        Ue = C(re, T, he, Ue.value, j), Ue !== null && (e && (lt = Ue.alternate, lt !== null && re.delete(
          lt.key === null ? he : lt.key
        )), y = u(Ue, y, he), Ce === null ? $ = Ue : Ce.sibling = Ue, Ce = Ue);
      return e && re.forEach(function(a0) {
        return t(T, a0);
      }), Ae && Vn(T, he), $;
    }
    function Te(T, y, O, j) {
      if (typeof O == "object" && O !== null && O.type === et && O.key === null && O.props.ref === void 0 && (O = O.props.children), typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case We:
            e: {
              for (var $ = O.key; y !== null; ) {
                if (y.key === $) {
                  if ($ = O.type, $ === et) {
                    if (y.tag === 7) {
                      n(
                        T,
                        y.sibling
                      ), j = l(
                        y,
                        O.props.children
                      ), ua(j, O), j.return = T, T = j;
                      break e;
                    }
                  } else if (y.elementType === $ || typeof $ == "object" && $ !== null && $.$$typeof === oe && Qa($) === y.type) {
                    n(
                      T,
                      y.sibling
                    ), j = l(y, O.props), ua(j, O), j.return = T, T = j;
                    break e;
                  }
                  n(T, y);
                  break;
                } else t(T, y);
                y = y.sibling;
              }
              O.type === et ? (j = qa(
                O.props.children,
                T.mode,
                j,
                O.key
              ), ua(j, O), j.return = T, T = j) : (j = Ni(
                O.type,
                O.key,
                O.props,
                null,
                T.mode,
                j
              ), ua(j, O), j.return = T, T = j);
            }
            return s(T);
          case Ve:
            e: {
              for ($ = O.key; y !== null; ) {
                if (y.key === $)
                  if (y.tag === 4 && y.stateNode.containerInfo === O.containerInfo && y.stateNode.implementation === O.implementation) {
                    n(
                      T,
                      y.sibling
                    ), j = l(y, O.children || []), j.return = T, T = j;
                    break e;
                  } else {
                    n(T, y);
                    break;
                  }
                else t(T, y);
                y = y.sibling;
              }
              j = pc(O, T.mode, j), j.return = T, T = j;
            }
            return s(T);
          case oe:
            return O = Qa(O), Te(
              T,
              y,
              O,
              j
            );
        }
        if (we(O))
          return k(
            T,
            y,
            O,
            j
          );
        if (P(O)) {
          if ($ = P(O), typeof $ != "function") throw Error(c(150));
          return O = $.call(O), ne(
            T,
            y,
            O,
            j
          );
        }
        if (typeof O.then == "function")
          return Te(
            T,
            y,
            ji(O),
            j
          );
        if (O.$$typeof === I)
          return Te(
            T,
            y,
            Di(T, O),
            j
          );
        Hi(T, O);
      }
      return typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint" ? (O = "" + O, y !== null && y.tag === 6 ? (n(T, y.sibling), j = l(y, O), j.return = T, T = j) : (n(T, y), j = vc(O, T.mode, j), j.return = T, T = j), s(T)) : n(T, y);
    }
    return function(T, y, O, j) {
      try {
        pu = 0;
        var $ = Te(
          T,
          y,
          O,
          j
        );
        return El = null, $;
      } catch (re) {
        if (re === yl || re === xi) throw re;
        var Ce = xt(29, re, null, T.mode);
        return Ce.lanes = j, Ce.return = T, Ce;
      }
    };
  }
  var Za = ad(!0), ld = ad(!1), ia = !1;
  function wc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Oc(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function ra(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function ca(e, t, n) {
    var a = e.updateQueue;
    if (a === null) return null;
    if (a = a.shared, (je & 2) !== 0) {
      var l = a.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), a.pending = t, t = _i(e), Vf(e, null, n), t;
    }
    return Ai(e, a, t, n), _i(e);
  }
  function gu(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, Xo(e, n);
    }
  }
  function Cc(e, t) {
    var n = e.updateQueue, a = e.alternate;
    if (a !== null && (a = a.updateQueue, n === a)) {
      var l = null, u = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var s = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          u === null ? l = u = s : u = u.next = s, n = n.next;
        } while (n !== null);
        u === null ? l = u = t : u = u.next = t;
      } else l = u = t;
      n = {
        baseState: a.baseState,
        firstBaseUpdate: l,
        lastBaseUpdate: u,
        shared: a.shared,
        callbacks: a.callbacks
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  var Rc = !1;
  function yu() {
    if (Rc) {
      var e = gl;
      if (e !== null) throw e;
    }
  }
  function Eu(e, t, n, a) {
    Rc = !1;
    var l = e.updateQueue;
    ia = !1;
    var u = l.firstBaseUpdate, s = l.lastBaseUpdate, f = l.shared.pending;
    if (f !== null) {
      l.shared.pending = null;
      var m = f, _ = m.next;
      m.next = null, s === null ? u = _ : s.next = _, s = m;
      var U = e.alternate;
      U !== null && (U = U.updateQueue, f = U.lastBaseUpdate, f !== s && (f === null ? U.firstBaseUpdate = _ : f.next = _, U.lastBaseUpdate = m));
    }
    if (u !== null) {
      var H = l.baseState;
      s = 0, U = _ = m = null, f = u;
      do {
        var S = f.lane & -536870913, C = S !== f.lane;
        if (C ? (Oe & S) === S : (a & S) === S) {
          S !== 0 && S === Ya && (Rc = !0), U !== null && (U = U.next = {
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: null,
            next: null
          });
          e: {
            var k = e, ne = f;
            S = t;
            var Te = n;
            switch (ne.tag) {
              case 1:
                if (k = ne.payload, typeof k == "function") {
                  H = k.call(Te, H, S);
                  break e;
                }
                H = k;
                break e;
              case 3:
                k.flags = k.flags & -65537 | 128;
              case 0:
                if (k = ne.payload, S = typeof k == "function" ? k.call(Te, H, S) : k, S == null) break e;
                H = ae({}, H, S);
                break e;
              case 2:
                ia = !0;
            }
          }
          S = f.callback, S !== null && (e.flags |= 64, C && (e.flags |= 8192), C = l.callbacks, C === null ? l.callbacks = [S] : C.push(S));
        } else
          C = {
            lane: S,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          }, U === null ? (_ = U = C, m = H) : U = U.next = C, s |= S;
        if (f = f.next, f === null) {
          if (f = l.shared.pending, f === null)
            break;
          C = f, f = C.next, C.next = null, l.lastBaseUpdate = C, l.shared.pending = null;
        }
      } while (!0);
      U === null && (m = H), l.baseState = m, l.firstBaseUpdate = _, l.lastBaseUpdate = U, u === null && (l.shared.lanes = 0), va |= s, e.lanes = s, e.memoizedState = H;
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
  var sa = Pt(null), Li = Pt(0);
  function rd(e, t) {
    e = Jn, Le(Li, e), Le(sa, t), Jn = e | t.baseLanes;
  }
  function Uc() {
    Le(Li, Jn), Le(sa, sa.current);
  }
  function Dc() {
    Jn = Li.current, se(sa), se(Li);
  }
  var Et = Pt(null), _t = null;
  function oa(e) {
    var t = e.alternate;
    Le(bt, bt.current & 1), Le(Et, e), _t === null && (t === null || sa.current !== null || t.memoizedState !== null) && (_t = e);
  }
  function zc(e) {
    Le(bt, bt.current), Le(Et, e), _t === null && (_t = e);
  }
  function cd(e) {
    e.tag === 22 ? (Le(bt, bt.current), Le(Et, e), _t === null && (_t = e)) : fa();
  }
  function fa() {
    Le(bt, bt.current), Le(Et, Et.current);
  }
  function Qt(e) {
    se(Et), _t === e && (_t = null), se(bt);
  }
  var bt = Pt(0);
  function bu(e, t) {
    Le(Et, Et.current), Le(bt, t);
  }
  function xc(e) {
    se(bt), se(Et), _t === e && (_t = null);
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
  var Xn = 0, Se = null, Ge = null, nt = null, Bi = !1, bl = !1, Ja = !1, Ii = 0, Su = 0, Sl = null, _g = 0;
  function Fe() {
    throw Error(c(321));
  }
  function Mc(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Xt(e[n], t[n])) return !1;
    return !0;
  }
  function jc(e, t, n, a, l, u) {
    return Xn = u, Se = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, W.H = e === null || e.memoizedState === null ? Qd : Kd, Ja = !1, u = n(a, l), Ja = !1, bl && (u = od(
      t,
      n,
      a,
      l
    )), sd(e), u;
  }
  function sd(e) {
    W.H = Zi;
    var t = Ge !== null && Ge.next !== null;
    if (Xn = 0, nt = Ge = Se = null, Bi = !1, Su = 0, Sl = null, t) throw Error(c(300));
    e === null || at || (e = e.dependencies, e !== null && Ui(e) && (at = !0));
  }
  function od(e, t, n, a) {
    Se = e;
    var l = 0;
    do {
      if (bl && (Sl = null), Su = 0, bl = !1, 25 <= l) throw Error(c(301));
      if (l += 1, nt = Ge = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      W.H = zg, u = t(n, a);
    } while (bl);
    return u;
  }
  function Ng() {
    var e = W.H, t = e.useState()[0];
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
    Xn = 0, nt = Ge = Se = null, bl = !1, Su = Ii = 0, Sl = null;
  }
  function Ct() {
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
    return Su += 1, Sl === null && (Sl = []), e = ed(Sl, e, t), t = Se, (nt === null ? t.memoizedState : nt.next) === null && (t = t.alternate, W.H = t === null || t.memoizedState === null ? Qd : Kd), e;
  }
  function Gi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Tu(e);
      if (e.$$typeof === V) return;
      if (e.$$typeof === I) return yt(e);
    }
    throw Error(c(438, String(e)));
  }
  function Bc(e) {
    var t = null, n = Se.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var a = Se.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(l) {
          return l.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = Vi(), Se.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++)
        n[a] = ye;
    return t.index++, n;
  }
  function Qn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Yi(e) {
    var t = Pe();
    return Ic(t, Ge, e);
  }
  function Ic(e, t, n) {
    var a = e.queue;
    if (a === null) throw Error(c(311));
    a.lastRenderedReducer = n;
    var l = e.baseQueue, u = a.pending;
    if (u !== null) {
      if (l !== null) {
        var s = l.next;
        l.next = u.next, u.next = s;
      }
      t.baseQueue = l = u, a.pending = null;
    }
    if (u = e.baseState, l === null) e.memoizedState = u;
    else {
      t = l.next;
      var f = s = null, m = null, _ = t, U = !1;
      do {
        var H = _.lane & -536870913;
        if (H !== _.lane ? (Oe & H) === H : (Xn & H) === H) {
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
            }), H === Ya && (U = !0);
          else if ((Xn & S) === S) {
            _ = _.next, S === Ya && (U = !0);
            continue;
          } else
            H = {
              lane: 0,
              revertLane: _.revertLane,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }, m === null ? (f = m = H, s = u) : m = m.next = H, Se.lanes |= S, va |= S;
          H = _.action, Ja && n(u, H), u = _.hasEagerState ? _.eagerState : n(u, H);
        } else
          S = {
            lane: H,
            revertLane: _.revertLane,
            gesture: _.gesture,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null
          }, m === null ? (f = m = S, s = u) : m = m.next = S, Se.lanes |= H, va |= H;
        _ = _.next;
      } while (_ !== null && _ !== t);
      if (m === null ? s = u : m.next = f, !Xt(u, e.memoizedState) && (at = !0, U && (n = gl, n !== null)))
        throw n;
      e.memoizedState = u, e.baseState = s, e.baseQueue = m, a.lastRenderedState = u;
    }
    return l === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function Vc(e) {
    var t = Pe(), n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var a = n.dispatch, l = n.pending, u = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var s = l = l.next;
      do
        u = e(u, s.action), s = s.next;
      while (s !== l);
      Xt(u, t.memoizedState) || (at = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, a];
  }
  function fd(e, t, n) {
    var a = Se, l = Pe(), u = Ae;
    if (u) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = t();
    var s = !Xt(
      (Ge || l).memoizedState,
      n
    );
    if (s && (l.memoizedState = n, at = !0), l = l.queue, Xc(md.bind(null, a, l, e), [
      e
    ]), e = l.getSnapshot !== t || s || nt !== null && (nt.memoizedState.tag & 1) !== 0, Tl(
      e ? 9 : 8,
      { destroy: void 0 },
      hd.bind(null, a, l, n, t),
      null
    ), e) {
      if (a.flags |= 2048, Xe === null) throw Error(c(349));
      u || (Xn & 127) !== 0 || dd(a, t, n);
    }
    return n;
  }
  function dd(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Se.updateQueue, t === null ? (t = Vi(), Se.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function hd(e, t, n, a) {
    t.value = n, t.getSnapshot = a, vd(t) && pd(e);
  }
  function md(e, t, n) {
    return n(function() {
      vd(t) && pd(e);
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
  function pd(e) {
    var t = La(e, 2);
    t !== null && Lt(t, e, 2);
  }
  function Gc(e) {
    var t = Ct();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), Ja) {
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
      lastRenderedReducer: Qn,
      lastRenderedState: e
    }, t;
  }
  function gd(e, t, n, a) {
    return e.baseState = n, Ic(
      e,
      Ge,
      typeof a == "function" ? a : Qn
    );
  }
  function wg(e, t, n, a, l) {
    if (Ki(e)) throw Error(c(485));
    if (e = t.action, e !== null) {
      var u = {
        payload: l,
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
      W.T !== null ? n(!0) : u.isTransition = !1, a(u), n = t.pending, n === null ? (u.next = t.pending = u, yd(t, u)) : (u.next = n.next, t.pending = n.next = u);
    }
  }
  function yd(e, t) {
    var n = t.action, a = t.payload, l = e.state;
    if (t.isTransition) {
      var u = W.T, s = {};
      s.types = u !== null ? u.types : null, W.T = s;
      try {
        var f = n(l, a), m = W.S;
        m !== null && m(s, f), Ed(e, t, f);
      } catch (_) {
        Yc(e, t, _);
      } finally {
        u !== null && s.types !== null && (u.types = s.types), W.T = u;
      }
    } else
      try {
        u = n(l, a), Ed(e, t, u);
      } catch (_) {
        Yc(e, t, _);
      }
  }
  function Ed(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        bd(e, t, a);
      },
      function(a) {
        return Yc(e, t, a);
      }
    ) : bd(e, t, n);
  }
  function bd(e, t, n) {
    t.status = "fulfilled", t.value = n, Sd(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, yd(e, n)));
  }
  function Yc(e, t, n) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = n, Sd(t), t = t.next;
      while (t !== a);
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
          var a = Se;
          if (Ae) {
            if (Qe) {
              t: {
                for (var l = Qe, u = ln; l.nodeType !== 8; ) {
                  if (!u) {
                    l = null;
                    break t;
                  }
                  if (l = rn(
                    l.nextSibling
                  ), l === null) {
                    l = null;
                    break t;
                  }
                }
                u = l.data, l = u === "F!" || u === "F" ? l : null;
              }
              if (l) {
                Qe = rn(
                  l.nextSibling
                ), a = l.data === "F!";
                break e;
              }
            }
            aa(a);
          }
          a = !1;
        }
        a && (t = n[0]);
      }
    }
    return n = Ct(), n.memoizedState = n.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Td,
      lastRenderedState: t
    }, n.queue = a, n = Gd.bind(
      null,
      Se,
      a
    ), a.dispatch = n, a = Gc(!1), u = kc.bind(
      null,
      Se,
      !1,
      a.queue
    ), a = Ct(), l = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = l, n = wg.bind(
      null,
      Se,
      l,
      u,
      n
    ), l.dispatch = n, a.memoizedState = e, [t, n, !1];
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
    )[0], e = Yi(Qn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Tu(t);
      } catch (s) {
        throw s === yl ? xi : s;
      }
    else a = t;
    t = Pe();
    var l = t.queue, u = l.dispatch;
    return n !== t.memoizedState && (Se.flags |= 2048, Tl(
      9,
      { destroy: void 0 },
      Og.bind(null, l, n),
      null
    )), [a, u, e];
  }
  function Og(e, t) {
    e.action = t;
  }
  function wd(e) {
    var t = Pe(), n = Ge;
    if (n !== null)
      return Nd(t, n, e);
    Pe(), t = t.memoizedState, n = Pe();
    var a = n.queue.dispatch;
    return n.memoizedState = e, [t, a, !1];
  }
  function Tl(e, t, n, a) {
    return e = { tag: e, create: n, deps: a, inst: t, next: null }, t = Se.updateQueue, t === null && (t = Vi(), Se.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
  }
  function Od() {
    return Pe().memoizedState;
  }
  function Xi(e, t, n, a) {
    var l = Ct();
    Se.flags |= e, l.memoizedState = Tl(
      1 | t,
      { destroy: void 0 },
      n,
      a === void 0 ? null : a
    );
  }
  function Qi(e, t, n, a) {
    var l = Pe();
    a = a === void 0 ? null : a;
    var u = l.memoizedState.inst;
    Ge !== null && a !== null && Mc(a, Ge.memoizedState.deps) ? l.memoizedState = Tl(t, u, n, a) : (Se.flags |= e, l.memoizedState = Tl(
      1 | t,
      u,
      n,
      a
    ));
  }
  function Cd(e, t) {
    Xi(8390656, 8, e, t);
  }
  function Xc(e, t) {
    Qi(2048, 8, e, t);
  }
  function Cg(e) {
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
    return Cg({ ref: t, nextImpl: e }), function() {
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
    var a = n.memoizedState;
    return t !== null && Mc(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
  }
  function jd(e, t) {
    var n = Pe();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && Mc(t, a[1]))
      return a[0];
    if (a = e(), Ja) {
      Pn(!0);
      try {
        e();
      } finally {
        Pn(!1);
      }
    }
    return n.memoizedState = [a, t], a;
  }
  function Kc(e, t, n) {
    return n === void 0 || (Xn & 1073741824) !== 0 && (Oe & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = Qh(), Se.lanes |= e, va |= e, n);
  }
  function Hd(e, t, n, a) {
    return Xt(n, t) ? n : sa.current !== null ? (e = Kc(e, n, a), Xt(e, t) || (at = !0), e) : (Xn & 106) === 0 || (Xn & 1073741824) !== 0 && (Oe & 261930) === 0 ? (at = !0, e.memoizedState = n) : (e = Qh(), Se.lanes |= e, va |= e, t);
  }
  function Ld(e, t, n, a, l) {
    var u = de.p;
    de.p = u !== 0 && 8 > u ? u : 8;
    var s = W.T, f = {};
    f.types = s !== null ? s.types : null, W.T = f, kc(e, !1, t, n);
    try {
      var m = l(), _ = W.S;
      if (_ !== null && _(f, m), m !== null && typeof m == "object" && typeof m.then == "function") {
        var U = Ag(
          m,
          a
        );
        Au(
          e,
          t,
          U,
          kt(e)
        );
      } else
        Au(
          e,
          t,
          a,
          kt(e)
        );
    } catch (H) {
      Au(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: H },
        kt()
      );
    } finally {
      de.p = u, s !== null && f.types !== null && (s.types = f.types), W.T = s;
    }
  }
  function Rg() {
  }
  function Zc(e, t, n, a) {
    if (e.tag !== 5) throw Error(c(476));
    var l = qd(e).queue;
    Ld(
      e,
      l,
      t,
      $t,
      n === null ? Rg : function() {
        return Bd(e), n(a);
      }
    );
  }
  function qd(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: $t,
      baseState: $t,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qn,
        lastRenderedState: $t
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
        lastRenderedReducer: Qn,
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
    return yt(Vl);
  }
  function Id() {
    return Pe().memoizedState;
  }
  function Vd() {
    return Pe().memoizedState;
  }
  function Ug(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = kt();
          e = ra(n);
          var a = ca(t, e, n);
          a !== null && (Lt(a, t, n), gu(a, t, n)), t = { cache: Tc() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Dg(e, t, n) {
    var a = kt();
    n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ki(e) ? Yd(t, n) : (n = hc(e, t, n, a), n !== null && (Lt(n, e, a), Xd(n, t, a)));
  }
  function Gd(e, t, n) {
    var a = kt();
    Au(e, t, n, a);
  }
  function Au(e, t, n, a) {
    var l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Ki(e)) Yd(t, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var s = t.lastRenderedState, f = u(s, n);
          if (l.hasEagerState = !0, l.eagerState = f, Xt(f, s))
            return Ai(e, t, l, 0), Xe === null && Ti(), !1;
        } catch {
        }
      if (n = hc(e, t, l, a), n !== null)
        return Lt(n, e, a), Xd(n, t, a), !0;
    }
    return !1;
  }
  function kc(e, t, n, a) {
    if (a = {
      lane: 2,
      revertLane: Bs(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Ki(e)) {
      if (t) throw Error(c(479));
    } else
      t = hc(
        e,
        n,
        a,
        2
      ), t !== null && Lt(t, e, 2);
  }
  function Ki(e) {
    var t = e.alternate;
    return e === Se || t !== null && t === Se;
  }
  function Yd(e, t) {
    bl = Bi = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Xd(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, Xo(e, n);
    }
  }
  var Zi = {
    readContext: yt,
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
    readContext: yt,
    use: Gi,
    useCallback: function(e, t) {
      return Ct().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: yt,
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
      var n = Ct();
      t = t === void 0 ? null : t;
      var a = e();
      if (Ja) {
        Pn(!0);
        try {
          e();
        } finally {
          Pn(!1);
        }
      }
      return n.memoizedState = [a, t], a;
    },
    useReducer: function(e, t, n) {
      var a = Ct();
      if (n !== void 0) {
        var l = n(t);
        if (Ja) {
          Pn(!0);
          try {
            n(t);
          } finally {
            Pn(!1);
          }
        }
      } else l = t;
      return a.memoizedState = a.baseState = l, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: l
      }, a.queue = e, e = e.dispatch = Dg.bind(
        null,
        Se,
        e
      ), [a.memoizedState, e];
    },
    useRef: function(e) {
      var t = Ct();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Gc(e);
      var t = e.queue, n = Gd.bind(null, Se, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: Qc,
    useDeferredValue: function(e, t) {
      var n = Ct();
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
      ), Ct().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var a = Se, l = Ct();
      if (Ae) {
        if (n === void 0)
          throw Error(c(407));
        n = n();
      } else {
        if (n = t(), Xe === null)
          throw Error(c(349));
        (Oe & 127) !== 0 || dd(a, t, n);
      }
      l.memoizedState = n;
      var u = { value: n, getSnapshot: t };
      return l.queue = u, Cd(md.bind(null, a, u, e), [
        e
      ]), a.flags |= 2048, Tl(
        9,
        { destroy: void 0 },
        hd.bind(
          null,
          a,
          u,
          n,
          t
        ),
        null
      ), n;
    },
    useId: function() {
      var e = Ct(), t = Xe.identifierPrefix;
      if (Ae) {
        var n = Nn, a = _n;
        n = (a & ~(1 << 32 - Gt(a) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Ii++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = _g++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Jc,
    useFormState: Ad,
    useActionState: Ad,
    useOptimistic: function(e) {
      var t = Ct();
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
      return Ct().memoizedState = Ug.bind(
        null,
        Se
      );
    },
    useEffectEvent: function(e) {
      var t = Ct(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((je & 2) !== 0)
          throw Error(c(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, Kd = {
    readContext: yt,
    use: Gi,
    useCallback: Md,
    useContext: yt,
    useEffect: Xc,
    useImperativeHandle: xd,
    useInsertionEffect: Ud,
    useLayoutEffect: Dd,
    useMemo: jd,
    useReducer: Yi,
    useRef: Od,
    useState: function() {
      return Yi(Qn);
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
      var e = Yi(Qn)[0], t = Pe().memoizedState;
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
      return gd(n, Ge, e, t);
    },
    useMemoCache: Bc,
    useCacheRefresh: Vd,
    useEffectEvent: Rd
  }, zg = {
    readContext: yt,
    use: Gi,
    useCallback: Md,
    useContext: yt,
    useEffect: Xc,
    useImperativeHandle: xd,
    useInsertionEffect: Ud,
    useLayoutEffect: Dd,
    useMemo: jd,
    useReducer: Vc,
    useRef: Od,
    useState: function() {
      return Vc(Qn);
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
      var e = Vc(Qn)[0], t = Pe().memoizedState;
      return [
        typeof e == "boolean" ? e : Tu(e),
        t
      ];
    },
    useSyncExternalStore: fd,
    useId: Id,
    useHostTransitionStatus: Jc,
    useFormState: wd,
    useActionState: wd,
    useOptimistic: function(e, t) {
      var n = Pe();
      return Ge !== null ? gd(n, Ge, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Bc,
    useCacheRefresh: Vd,
    useEffectEvent: Rd
  };
  function Fc(e, t, n, a) {
    t = e.memoizedState, n = n(a, t), n = n == null ? t : ae({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var $c = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var a = kt(), l = ra(a);
      l.payload = t, n != null && (l.callback = n), t = ca(e, l, a), t !== null && (Lt(t, e, a), gu(t, e, a));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var a = kt(), l = ra(a);
      l.tag = 1, l.payload = t, n != null && (l.callback = n), t = ca(e, l, a), t !== null && (Lt(t, e, a), gu(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = kt(), a = ra(n);
      a.tag = 2, t != null && (a.callback = t), t = ca(e, a, n), t !== null && (Lt(t, e, n), gu(t, e, n));
    }
  };
  function Zd(e, t, n, a, l, u, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, u, s) : t.prototype && t.prototype.isPureReactComponent ? !su(n, a) || !su(l, u) : !0;
  }
  function Jd(e, t, n, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && $c.enqueueReplaceState(t, t.state, null);
  }
  function ka(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var a in t)
        a !== "ref" && (n[a] = t[a]);
    }
    if (e = e.defaultProps) {
      n === t && (n = ae({}, n));
      for (var l in e)
        n[l] === void 0 && (n[l] = e[l]);
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
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function Pd(e, t, n) {
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
  function Pc(e, t, n) {
    return n = ra(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      Ji(e, t);
    }, n;
  }
  function Wd(e) {
    return e = ra(e), e.tag = 3, e;
  }
  function eh(e, t, n, a) {
    var l = n.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var u = a.value;
      e.payload = function() {
        return l(u);
      }, e.callback = function() {
        Pd(t, n, a);
      };
    }
    var s = n.stateNode;
    s !== null && typeof s.componentDidCatch == "function" && (e.callback = function() {
      Pd(t, n, a), typeof l != "function" && (pa === null ? pa = /* @__PURE__ */ new Set([this]) : pa.add(this));
      var f = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: f !== null ? f : ""
      });
    });
  }
  function xg(e, t, n, a, l) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = n.alternate, t !== null && Va(
        t,
        n,
        l,
        !0
      ), n = Et.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
          case 19:
            return _t === null ? vr() : n.alternate === null && $e === 0 && ($e = 3), n.flags &= -257, n.flags |= 65536, n.lanes = l, a === Mi ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Hs(e, a, l)), !1;
          case 22:
            return n.flags |= 65536, a === Mi ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), Hs(e, a, l)), !1;
        }
        throw Error(c(435, n.tag));
      }
      return Hs(e, a, l), vr(), !1;
    }
    if (Ae)
      return t = Et.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = l, a !== yc && (e = Error(c(422), { cause: a }), du(tn(e, n)))) : (a !== yc && (t = Error(c(423), {
        cause: a
      }), du(
        tn(t, n)
      )), e = e.current.alternate, e.flags |= 65536, l &= -l, e.lanes |= l, a = tn(a, n), l = Pc(
        e.stateNode,
        a,
        l
      ), Cc(e, l), $e !== 4 && ($e = 2)), !1;
    var u = Error(c(520), { cause: a });
    if (u = tn(u, n), Du === null ? Du = [u] : Du.push(u), $e !== 4 && ($e = 2), t === null) return !0;
    a = tn(a, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = l & -l, n.lanes |= e, e = Pc(n.stateNode, a, e), Cc(n, e), !1;
        case 1:
          if (t = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (pa === null || !pa.has(u))))
            return n.flags |= 65536, l &= -l, n.lanes |= l, l = Wd(l), eh(
              l,
              e,
              n,
              a
            ), Cc(n, l), !1;
          break;
        case 22:
          if (n.memoizedState !== null)
            return n.flags |= 65536, !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var Wc = Error(c(461)), at = !1;
  function ct(e, t, n, a) {
    t.child = e === null ? ld(t, null, n, a) : Za(
      t,
      e.child,
      n,
      a
    );
  }
  function th(e, t, n, a, l) {
    n = n.render;
    var u = t.ref;
    if ("ref" in a) {
      var s = {};
      for (var f in a)
        f !== "ref" && (s[f] = a[f]);
    } else s = a;
    return Ga(t), a = jc(
      e,
      t,
      n,
      s,
      u,
      l
    ), f = Hc(), e !== null && !at ? (Lc(e, t, l), Kn(e, t, l)) : (Ae && f && Oi(t), t.flags |= 1, ct(e, t, a, l), t.child);
  }
  function nh(e, t, n, a, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !mc(u) && u.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = u, ah(
        e,
        t,
        u,
        a,
        l
      )) : (e = Ni(
        n.type,
        null,
        a,
        t,
        t.mode,
        l
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !rs(e, l)) {
      var s = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : su, n(s, a) && e.ref === t.ref)
        return Kn(e, t, l);
    }
    return t.flags |= 1, e = In(u, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function ah(e, t, n, a, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (su(u, a) && e.ref === t.ref)
        if (at = !1, t.pendingProps = a = u, rs(e, l))
          (e.flags & 131072) !== 0 && (at = !0);
        else
          return t.lanes = e.lanes, Kn(e, t, l);
    }
    return es(
      e,
      t,
      n,
      a,
      l
    );
  }
  function lh(e, t, n, a) {
    var l = a.children, u = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), a.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (u = u !== null ? u.baseLanes | n : n, e !== null) {
          for (a = t.child = e.child, l = 0; a !== null; )
            l = l | a.lanes | a.childLanes, a = a.sibling;
          a = l & ~u;
        } else a = 0, t.child = null;
        return uh(
          e,
          t,
          u,
          n,
          a
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && zi(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? rd(t, u) : Uc(), cd(t);
      else
        return a = t.lanes = 536870912, uh(
          e,
          t,
          u !== null ? u.baseLanes | n : n,
          n,
          a
        );
    } else
      u !== null ? (zi(t, u.cachePool), rd(t, u), fa(), t.memoizedState = null) : (e !== null && zi(t, null), Uc(), fa());
    return ct(e, t, l, n), t.child;
  }
  function _u(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function uh(e, t, n, a, l) {
    var u = _c();
    return u = u === null ? null : { parent: tt._currentValue, pool: u }, t.memoizedState = {
      baseLanes: n,
      cachePool: u
    }, e !== null && zi(t, null), Uc(), cd(t), e !== null && Va(e, t, a, !0), t.childLanes = l, null;
  }
  function ki(e, t) {
    return t = Fi(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function ih(e, t, n) {
    return Za(t, e.child, null, n), e = ki(t, t.pendingProps), e.flags |= 2, Qt(t), t.memoizedState = null, e;
  }
  function Mg(e, t, n) {
    var a = t.pendingProps, l = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Ae) {
        if (a.mode === "hidden")
          return e = ki(t, a), t.lanes = 536870912, e.memoizedState = { baseLanes: 0, cachePool: null }, _u(null, e);
        if (zc(t), (e = Qe) ? (e = zm(
          e,
          ln
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: ta !== null ? { id: _n, overflow: Nn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Yf(e), n.return = t, t.child = n, ot = t, Qe = null)) : e = null, e === null) throw aa(t);
        return t.lanes = 536870912, null;
      }
      return ki(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var s = u.dehydrated;
      if (zc(t), l)
        if (t.flags & 256)
          t.flags &= -257, t = ih(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(c(558));
      else if (at || Va(e, t, n, !1), l = (n & e.childLanes) !== 0, at || l) {
        if (sa.current === null) {
          if (a = Xe, a !== null && (s = Qo(a, n), s !== 0 && s !== u.retryLane))
            throw u.retryLane = s, La(e, s), Lt(a, e, s), Wc;
          vr();
        }
        t = ih(
          e,
          t,
          n
        );
      } else
        e = u.treeContext, Qe = rn(s.nextSibling), ot = t, Ae = !0, na = null, ln = !1, e !== null && Kf(t, e), t = ki(t, a), t.flags |= 134221824;
      return t;
    }
    return e = In(e.child, {
      mode: a.mode,
      children: a.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function Al(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(c(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function es(e, t, n, a, l) {
    return Ga(t), n = jc(
      e,
      t,
      n,
      a,
      void 0,
      l
    ), a = Hc(), e !== null && !at ? (Lc(e, t, l), Kn(e, t, l)) : (Ae && a && Oi(t), t.flags |= 1, ct(e, t, n, l), t.child);
  }
  function rh(e, t, n, a, l, u) {
    return Ga(t), t.updateQueue = null, n = od(
      t,
      a,
      n,
      l
    ), sd(e), a = Hc(), e !== null && !at ? (Lc(e, t, u), Kn(e, t, u)) : (Ae && a && Oi(t), t.flags |= 1, ct(e, t, n, u), t.child);
  }
  function ch(e, t, n, a, l) {
    if (Ga(t), t.stateNode === null) {
      var u = hl, s = n.contextType;
      typeof s == "object" && s !== null && (u = yt(s)), u = new n(a, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = $c, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = a, u.state = t.memoizedState, u.refs = {}, wc(t), s = n.contextType, u.context = typeof s == "object" && s !== null ? yt(s) : hl, u.state = t.memoizedState, s = n.getDerivedStateFromProps, typeof s == "function" && (Fc(
        t,
        n,
        s,
        a
      ), u.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (s = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), s !== u.state && $c.enqueueReplaceState(u, u.state, null), Eu(t, a, u, l), yu(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      u = t.stateNode;
      var f = t.memoizedProps, m = ka(n, f);
      u.props = m;
      var _ = u.context, U = n.contextType;
      s = hl, typeof U == "object" && U !== null && (s = yt(U));
      var H = n.getDerivedStateFromProps;
      U = typeof H == "function" || typeof u.getSnapshotBeforeUpdate == "function", f = t.pendingProps !== f, U || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f || _ !== s) && Jd(
        t,
        u,
        a,
        s
      ), ia = !1;
      var S = t.memoizedState;
      u.state = S, Eu(t, a, u, l), yu(), _ = t.memoizedState, f || S !== _ || ia ? (typeof H == "function" && (Fc(
        t,
        n,
        H,
        a
      ), _ = t.memoizedState), (m = ia || Zd(
        t,
        n,
        m,
        a,
        S,
        _,
        s
      )) ? (U || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = _), u.props = a, u.state = _, u.context = s, a = m) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      u = t.stateNode, Oc(e, t), s = t.memoizedProps, U = ka(n, s), u.props = U, H = t.pendingProps, S = u.context, _ = n.contextType, m = hl, typeof _ == "object" && _ !== null && (m = yt(_)), f = n.getDerivedStateFromProps, (_ = typeof f == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (s !== H || S !== m) && Jd(
        t,
        u,
        a,
        m
      ), ia = !1, S = t.memoizedState, u.state = S, Eu(t, a, u, l), yu();
      var C = t.memoizedState;
      s !== H || S !== C || ia || e !== null && e.dependencies !== null && Ui(e.dependencies) ? (typeof f == "function" && (Fc(
        t,
        n,
        f,
        a
      ), C = t.memoizedState), (U = ia || Zd(
        t,
        n,
        U,
        a,
        S,
        C,
        m
      ) || e !== null && e.dependencies !== null && Ui(e.dependencies)) ? (_ || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, C, m), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        C,
        m
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || s === e.memoizedProps && S === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && S === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = C), u.props = a, u.state = C, u.context = m, a = U) : (typeof u.componentDidUpdate != "function" || s === e.memoizedProps && S === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && S === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return u = a, Al(e, t), a = (t.flags & 128) !== 0, u || a ? (u = t.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : u.render(), t.flags |= 1, e !== null && a ? (t.child = Za(
      t,
      e.child,
      null,
      l
    ), t.child = Za(
      t,
      null,
      n,
      l
    )) : ct(e, t, n, l), t.memoizedState = u.state, e = t.child) : e = Kn(
      e,
      t,
      l
    ), e;
  }
  function sh(e, t, n, a) {
    return Ba(), t.flags |= 256, ct(e, t, n, a), t.child;
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
  function as(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Jt), e;
  }
  function oh(e, t, n) {
    var a = t.pendingProps, l = !1, u = (t.flags & 128) !== 0, s;
    if ((s = u) || (s = e !== null && e.memoizedState === null ? !1 : (bt.current & 2) !== 0), s && (l = !0, t.flags &= -129), s = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ae) {
        if (l ? oa(t) : fa(), (e = Qe) ? (e = zm(
          e,
          ln
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: ta !== null ? { id: _n, overflow: Nn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Yf(e), n.return = t, t.child = n, ot = t, Qe = null)) : e = null, e === null) throw aa(t);
        return no(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      return u = a.children, a = a.fallback, l ? (fa(), l = t.mode, u = Fi(
        { mode: "hidden", children: u },
        l
      ), a = qa(
        a,
        l,
        n,
        null
      ), u.return = t, a.return = t, u.sibling = a, t.child = u, a = t.child, a.memoizedState = ns(n), a.childLanes = as(
        e,
        s,
        n
      ), t.memoizedState = ts, _u(null, a)) : (oa(t), ls(t, u));
    }
    var f = e.memoizedState;
    if (f !== null) {
      var m = f.dehydrated;
      if (m !== null)
        return jg(
          e,
          t,
          u,
          s,
          a,
          m,
          f,
          n
        );
    }
    return l ? (fa(), l = a.fallback, u = t.mode, f = e.child, m = f.sibling, a = In(f, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = f.subtreeFlags & 1206910976, m !== null ? l = In(m, l) : (l = qa(
      l,
      u,
      n,
      null
    ), l.flags |= 2), l.return = t, a.return = t, a.sibling = l, t.child = a, _u(null, a), a = t.child, l = e.child.memoizedState, l === null ? l = ns(n) : (u = l.cachePool, u !== null ? (f = tt._currentValue, u = u.parent !== f ? { parent: f, pool: f } : u) : u = Pf(), l = {
      baseLanes: l.baseLanes | n,
      cachePool: u
    }), a.memoizedState = l, a.childLanes = as(
      e,
      s,
      n
    ), t.memoizedState = ts, _u(e.child, a)) : (oa(t), n = e.child, e = n.sibling, n = In(n, {
      mode: "visible",
      children: a.children
    }), n.return = t, n.sibling = null, e !== null && (s = t.deletions, s === null ? (t.deletions = [e], t.flags |= 16) : s.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function ls(e, t) {
    return t = Fi(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function Fi(e, t) {
    return e = xt(22, e, null, t), e.lanes = 0, e;
  }
  function $i(e, t, n) {
    return Za(t, e.child, null, n), e = ls(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function jg(e, t, n, a, l, u, s, f) {
    if (n)
      return t.flags & 256 ? (oa(t), t.flags &= -257, $i(
        e,
        t,
        f
      )) : t.memoizedState !== null ? (fa(), t.child = e.child, t.flags |= 128, null) : (fa(), u = l.fallback, s = t.mode, l = Fi(
        { mode: "visible", children: l.children },
        s
      ), u = qa(
        u,
        s,
        f,
        null
      ), u.flags |= 2, l.return = t, u.return = t, l.sibling = u, t.child = l, Za(t, e.child, null, f), l = t.child, l.memoizedState = ns(f), l.childLanes = as(
        e,
        a,
        f
      ), t.memoizedState = ts, _u(null, l));
    if (oa(t), no(u)) {
      if (a = u.nextSibling && u.nextSibling.dataset, a) var m = a.dgst;
      return a = m, a !== "" && (l = Error(c(419)), l.stack = "", l.digest = a, du({ value: l, source: null, stack: null })), $i(
        e,
        t,
        f
      );
    }
    if (at || Va(e, t, f, !1), a = (f & e.childLanes) !== 0, at || a) {
      if (sa.current !== null)
        return $i(
          e,
          t,
          f
        );
      if (a = Xe, a !== null && (l = Qo(
        a,
        f
      ), l !== 0 && l !== s.retryLane))
        throw s.retryLane = l, La(e, l), Lt(a, e, l), Wc;
      return to(u) || vr(), $i(
        e,
        t,
        f
      );
    }
    return to(u) ? (t.flags |= 192, t.child = e.child, null) : (e = s.treeContext, Qe = rn(u.nextSibling), ot = t, Ae = !0, na = null, ln = !1, e !== null && Kf(t, e), t = ls(
      t,
      l.children
    ), t.flags |= 134221824, t);
  }
  function fh(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), Ri(e.return, t, n);
  }
  function dh(e) {
    for (var t = null; e !== null; ) {
      var n = e.alternate;
      n !== null && qi(n) === null && (t = e), e = e.sibling;
    }
    return t;
  }
  function Pi(e, t, n, a, l, u) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: n,
      tailMode: l,
      treeForkCount: u
    } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = a, s.tail = n, s.tailMode = l, s.treeForkCount = u);
  }
  function us(e) {
    var t = e.child;
    for (e.child = null; t !== null; ) {
      var n = t.sibling;
      t.sibling = e.child, e.child = t, t = n;
    }
  }
  function is(e, t, n) {
    var a = t.pendingProps, l = a.revealOrder, u = a.tail;
    a = a.children;
    var s = bt.current;
    if (t.flags & 128)
      return bu(t, s), null;
    var f = (s & 2) !== 0;
    if (f ? (s = s & 1 | 2, t.flags |= 128) : s &= 1, bu(t, s), l === "backwards" && e !== null ? (us(e), ct(e, t, a, n), us(e)) : ct(e, t, a, n), a = Ae ? fu : 0, !f && e !== null && (e.flags & 128) !== 0)
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
    switch (l) {
      case "backwards":
        n = dh(t.child), n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null, us(t)), Pi(
          t,
          !0,
          l,
          null,
          u,
          a
        );
        break;
      case "unstable_legacy-backwards":
        for (n = null, l = t.child, t.child = null; l !== null; ) {
          if (e = l.alternate, e !== null && qi(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        Pi(
          t,
          !0,
          n,
          null,
          u,
          a
        );
        break;
      case "together":
        Pi(
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
        n = dh(t.child), n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Pi(
          t,
          !1,
          l,
          n,
          u,
          a
        );
    }
    return t.child;
  }
  function hh(e, t, n) {
    var a = t.pendingProps;
    return la(t, t.type, a.value), ct(e, t, a.children, n), t.child;
  }
  function Kn(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), va |= t.lanes, (n & t.childLanes) === 0)
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
      throw Error(c(153));
    if (t.child !== null) {
      for (e = t.child, n = In(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = In(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function rs(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Ui(e)));
  }
  function Hg(e, t, n) {
    switch (t.tag) {
      case 3:
        L(t, t.stateNode.containerInfo), la(t, tt, e.memoizedState.cache), Ba();
        break;
      case 27:
      case 5:
        ze(t);
        break;
      case 4:
        L(t, t.stateNode.containerInfo);
        break;
      case 10:
        la(
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
        var a = t.memoizedState;
        if (a !== null) {
          if (a.dehydrated !== null)
            return oa(t), t.flags |= 128, null;
          a = Va(
            e,
            t,
            n,
            !1
          );
          var l = t.child.childLanes;
          return a || (n & l) !== 0 ? oh(e, t, n) : (oa(t), e = Kn(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        }
        oa(t);
        break;
      case 19:
        if (t.flags & 128)
          return is(
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
            return is(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), bu(t, bt.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, lh(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        la(t, tt, e.memoizedState.cache);
    }
    return Kn(e, t, n);
  }
  function mh(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        at = !0;
      else {
        if (!rs(e, n) && (t.flags & 128) === 0)
          return at = !1, Hg(
            e,
            t,
            n
          );
        at = (e.flags & 131072) !== 0;
      }
    else
      at = !1, Ae && (t.flags & 1048576) !== 0 && Qf(t, fu, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = Qa(t.elementType), t.type = e, typeof e == "function")
            mc(e) ? (a = ka(e, a), t.tag = 1, t = ch(
              null,
              t,
              e,
              a,
              n
            )) : (t.tag = 0, t = es(
              null,
              t,
              e,
              a,
              n
            ));
          else {
            if (e != null) {
              var l = e.$$typeof;
              if (l === q) {
                t.tag = 11, t = th(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              } else if (l === ce) {
                t.tag = 14, t = nh(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              } else if (l === I) {
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
        return a = t.type, l = ka(
          a,
          t.pendingProps
        ), ch(
          e,
          t,
          a,
          l,
          n
        );
      case 3:
        e: {
          if (L(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(c(387));
          a = t.pendingProps;
          var u = t.memoizedState;
          l = u.element, Oc(e, t), Eu(t, a, null, n);
          var s = t.memoizedState;
          if (a = s.cache, la(t, tt, a), a !== u.cache && Sc(
            t,
            [tt],
            n,
            !0
          ), yu(), a = s.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: s.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = sh(
                e,
                t,
                a,
                n
              );
              break e;
            } else if (a !== l) {
              l = tn(
                Error(c(424)),
                t
              ), du(l), t = sh(
                e,
                t,
                a,
                n
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Qe = rn(e.firstChild), ot = t, Ae = !0, na = null, ln = !0, n = ld(
                t,
                null,
                a,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 134221824, n = n.sibling;
          else {
            if (Ba(), a === l) {
              t = Kn(
                e,
                t,
                n
              );
              break e;
            }
            ct(e, t, a, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Al(e, t), e === null ? (n = Bm(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : Ae || (t.stateNode = ym(
          t.type,
          t.pendingProps,
          G.current,
          t
        )) : t.memoizedState = Bm(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return ze(t), e === null && Ae && (a = t.stateNode = jm(
          t.type,
          t.pendingProps,
          G.current
        ), ot = t, ln = !0, l = Qe, Ea(t.type) ? (ao = l, Qe = rn(a.firstChild)) : Qe = l), ct(
          e,
          t,
          t.pendingProps.children,
          n
        ), Al(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ae && ((l = a = Qe) && (a = Uy(
          a,
          t.type,
          t.pendingProps,
          ln
        ), a !== null ? (t.stateNode = a, ot = t, Qe = rn(a.firstChild), ln = !1, l = !0) : l = !1), l || aa(t)), ze(t), l = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, a = u.children, Js(l, u) ? a = null : s !== null && Js(l, s) && (t.flags |= 32), t.memoizedState !== null && (l = jc(
          e,
          t,
          Ng,
          null,
          null,
          n
        ), Vl._currentValue = l), Al(e, t), ct(e, t, a, n), t.child;
      case 6:
        return e === null && Ae && ((e = n = Qe) && (n = Dy(
          n,
          t.pendingProps,
          ln
        ), n !== null ? (t.stateNode = n, ot = t, Qe = null, e = !0) : e = !1), e || aa(t)), null;
      case 13:
        return oh(e, t, n);
      case 4:
        return L(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = Za(
          t,
          null,
          a,
          n
        ) : ct(e, t, a, n), t.child;
      case 11:
        return th(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return a = t.pendingProps, Al(e, t), ct(e, t, a, n), t.child;
      case 8:
        return ct(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return ct(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return hh(e, t, n);
      case 9:
        return l = t.type._context, a = t.pendingProps.children, Ga(t), l = yt(l), a = a(l), t.flags |= 1, ct(e, t, a, n), t.child;
      case 14:
        return nh(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return ah(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return is(e, t, n);
      case 31:
        return Mg(e, t, n);
      case 22:
        return lh(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return Ga(t), a = yt(tt), e === null ? (l = _c(), l === null && (l = Xe, u = Tc(), l.pooledCache = u, u.refCount++, u !== null && (l.pooledCacheLanes |= n), l = u), t.memoizedState = { parent: a, cache: l }, wc(t), la(t, tt, l)) : ((e.lanes & n) !== 0 && (Oc(e, t), Eu(t, null, null, n), yu()), l = e.memoizedState, u = t.memoizedState, l.parent !== a ? (l = { parent: a, cache: a }, t.memoizedState = l, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = l), la(t, tt, a)) : (a = u.cache, la(t, tt, a), a !== l.cache && Sc(
          t,
          [tt],
          n,
          !0
        ))), ct(
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
        }), a = t.pendingProps, a.name != null && a.name !== "auto" ? t.flags |= e === null ? 18882560 : 18874368 : Ae && Oi(t), e !== null && e.memoizedProps.name !== a.name ? t.flags |= 4194816 : Al(e, t), ct(e, t, a.children, n), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(c(156, t.tag));
  }
  function Zn(e) {
    e.flags |= 4;
  }
  function cs(e, t, n, a, l) {
    var u;
    if ((u = (e.mode & 32) !== 0) && (u = n === null ? Ym(t, a) : Ym(t, a) && (a.src !== n.src || a.srcSet !== n.srcSet)), u) {
      if (e.flags |= 16777216, (l & 335544128) === l)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (kh()) e.flags |= 8192;
        else
          throw Ka = Mi, Nc;
    } else e.flags &= -16777217;
  }
  function vh(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Xm(t))
      if (kh()) e.flags |= 8192;
      else
        throw Ka = Mi, Nc;
  }
  function Wi(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Go() : 536870912, e.lanes |= t, Cl |= t);
  }
  function Nu(e, t) {
    if (!Ae)
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
  function Ke(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, a = 0;
    if (t)
      for (var l = e.child; l !== null; )
        n |= l.lanes | l.childLanes, a |= l.subtreeFlags & 1206910976, a |= l.flags & 1206910976, l.return = e, l = l.sibling;
    else
      for (l = e.child; l !== null; )
        n |= l.lanes | l.childLanes, a |= l.subtreeFlags, a |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= a, e.childLanes = n, t;
  }
  function Lg(e, t, n) {
    var a = t.pendingProps;
    switch (gc(t), t.tag) {
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
        return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Yn(tt), ue(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (pl(t) ? Zn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Ec())), Ke(t), null;
      case 26:
        var l = t.type, u = t.memoizedState;
        return e === null ? (Zn(t), u !== null ? (Ke(t), vh(t, u)) : (Ke(t), cs(
          t,
          l,
          null,
          a,
          n
        ))) : u ? u !== e.memoizedState ? (Zn(t), Ke(t), vh(t, u)) : (Ke(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && Zn(t), Ke(t), cs(
          t,
          l,
          e,
          a,
          n
        )), null;
      case 27:
        if (Ye(t), n = G.current, l = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && Zn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(c(166));
            return Ke(t), t.subtreeFlags &= -33554433, null;
          }
          e = Bt.current, pl(t) ? Zf(t) : (e = jm(l, a, n), t.stateNode = e, Zn(t));
        }
        return Ke(t), t.subtreeFlags &= -33554433, null;
      case 5:
        if (Ye(t), l = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && Zn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(c(166));
            return Ke(t), t.subtreeFlags &= -33554433, null;
          }
          if (u = Bt.current, pl(t))
            Zf(t);
          else {
            var s = Hu(
              G.current
            );
            switch (u) {
              case 1:
                u = s.createElementNS(
                  "http://www.w3.org/2000/svg",
                  l
                );
                break;
              case 2:
                u = s.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  l
                );
                break;
              default:
                switch (l) {
                  case "svg":
                    u = s.createElementNS(
                      "http://www.w3.org/2000/svg",
                      l
                    );
                    break;
                  case "math":
                    u = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l
                    );
                    break;
                  case "script":
                    u = s.createElement("div"), u.innerHTML = "<script><\/script>", u = u.removeChild(
                      u.firstChild
                    );
                    break;
                  case "select":
                    u = typeof a.is == "string" ? s.createElement("select", {
                      is: a.is
                    }) : s.createElement("select"), a.multiple ? u.multiple = !0 : a.size && (u.size = a.size);
                    break;
                  default:
                    u = typeof a.is == "string" ? s.createElement(l, { is: a.is }) : s.createElement(l);
                }
            }
            u[gt] = t, u[zt] = a;
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
            e: switch (Tt(u, l, a), l) {
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
            a && Zn(t);
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
          e.memoizedProps !== a && Zn(t);
        else {
          if (typeof a != "string" && t.stateNode === null)
            throw Error(c(166));
          if (e = G.current, pl(t)) {
            if (e = t.stateNode, n = t.memoizedProps, a = null, l = ot, l !== null)
              switch (l.tag) {
                case 27:
                case 5:
                  a = l.memoizedProps;
              }
            e[gt] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || mm(e.nodeValue, n)), e || aa(t, !0);
          } else
            e = Hu(e).createTextNode(
              a
            ), e[gt] = t, t.stateNode = e;
        }
        return Ke(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = pl(t), n !== null) {
            if (e === null) {
              if (!a) throw Error(c(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(557));
              e[gt] = t;
            } else
              Ba(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
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
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (l = pl(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!l) throw Error(c(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(c(317));
              l[gt] = t;
            } else
              Ba(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ke(t), l = !1;
          } else
            l = Ec(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), l = !0;
          if (!l)
            return t.flags & 256 ? (Qt(t), t) : (Qt(t), null);
        }
        return Qt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = a !== null, e = e !== null && e.memoizedState !== null, n && (a = t.child, l = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (l = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== l && (a.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), Wi(t, t.updateQueue), Ke(t), null);
      case 4:
        return ue(), e === null && Ys(t.stateNode.containerInfo), t.flags |= 67108864, Ke(t), null;
      case 10:
        return Yn(t.type), Ke(t), null;
      case 19:
        if (xc(t), a = t.memoizedState, a === null) return Ke(t), null;
        if (l = (t.flags & 128) !== 0, u = a.rendering, u === null)
          if (l) Nu(a, !1);
          else {
            if ($e !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = qi(e), u !== null) {
                  for (t.flags |= 128, Nu(a, !1), e = u.updateQueue, t.updateQueue = e, Wi(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    Gf(n, e), n = n.sibling;
                  return bu(
                    t,
                    bt.current & 1 | 2
                  ), Ae && Vn(t, a.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && It() > fr && (t.flags |= 128, l = !0, Nu(a, !1), t.lanes = 4194304);
          }
        else {
          if (!l)
            if (e = qi(u), e !== null) {
              if (t.flags |= 128, l = !0, e = e.updateQueue, t.updateQueue = e, Wi(t, e), Nu(a, !0), a.tail === null && a.tailMode !== "collapsed" && a.tailMode !== "visible" && !u.alternate && !Ae)
                return Ke(t), null;
            } else
              2 * It() - a.renderingStartTime > fr && n !== 536870912 && (t.flags |= 128, l = !0, Nu(a, !1), t.lanes = 4194304);
          a.isBackwards ? (u.sibling = t.child, t.child = u) : (e = a.last, e !== null ? e.sibling = u : t.child = u, a.last = u);
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
          return a.rendering = e, a.tail = e.sibling, a.renderingStartTime = It(), e.sibling = null, u = bt.current, u = l ? u & 1 | 2 : u & 1, a.tailMode === "visible" || a.tailMode === "collapsed" || !n || Ae ? bu(t, u) : (n = u, Le(Et, t), Le(bt, n), _t === null && (_t = t)), Ae && Vn(t, a.treeForkCount), e;
        }
        return Ke(t), null;
      case 22:
      case 23:
        return Qt(t), Dc(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ke(t), n = t.updateQueue, n !== null && Wi(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && se(Xa), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Yn(tt), Ke(t), null;
      case 25:
        return null;
      case 30:
        return t.flags |= 33554432, Ke(t), null;
    }
    throw Error(c(156, t.tag));
  }
  function qg(e, t) {
    switch (gc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Yn(tt), ue(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Ye(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Qt(t), t.alternate === null)
            throw Error(c(340));
          Ba();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Qt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(c(340));
          Ba();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return xc(t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null), t.flags |= 4, t) : null;
      case 4:
        return ue(), null;
      case 10:
        return Yn(t.type), null;
      case 22:
      case 23:
        return Qt(t), Dc(), e !== null && se(Xa), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Yn(tt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function ph(e, t) {
    switch (gc(t), t.tag) {
      case 3:
        Yn(tt), ue();
        break;
      case 26:
      case 27:
      case 5:
        Ye(t);
        break;
      case 4:
        ue();
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
        Yn(t.type);
        break;
      case 22:
      case 23:
        Qt(t), Dc(), e !== null && se(Xa);
        break;
      case 24:
        Yn(tt);
    }
  }
  function wu(e, t) {
    try {
      var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var l = a.next;
        n = l;
        do {
          if ((n.tag & e) === e) {
            a = void 0;
            var u = n.create, s = n.inst;
            a = u(), s.destroy = a;
          }
          n = n.next;
        } while (n !== l);
      }
    } catch (f) {
      Be(t, t.return, f);
    }
  }
  function da(e, t, n) {
    try {
      var a = t.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var u = l.next;
        a = u;
        do {
          if ((a.tag & e) === e) {
            var s = a.inst, f = s.destroy;
            if (f !== void 0) {
              s.destroy = void 0, l = t;
              var m = n, _ = f;
              try {
                _();
              } catch (U) {
                Be(
                  l,
                  m,
                  U
                );
              }
            }
          }
          a = a.next;
        } while (a !== u);
      }
    } catch (U) {
      Be(t, t.return, U);
    }
  }
  function gh(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        id(t, n);
      } catch (a) {
        Be(e, e.return, a);
      }
    }
  }
  function yh(e, t, n) {
    n.props = ka(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      Be(e, t, a);
    }
  }
  function wn(e, t) {
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
            var l = e.stateNode, u = qn(e.memoizedProps, l);
            (l.ref === null || l.ref.name !== u) && (l.ref = Nm(u)), a = l.ref;
            break;
          case 7:
            if (e.stateNode === null) {
              var s = new Ft(e);
              p(
                e.child,
                !1,
                Cy,
                s,
                void 0,
                void 0
              ), e.stateNode = s;
            }
            a = e.stateNode;
            break;
          default:
            a = e.stateNode;
        }
        typeof n == "function" ? e.refCleanup = n(a) : n.current = a;
      }
    } catch (f) {
      Be(e, t, f);
    }
  }
  function St(e, t) {
    var n = e.ref, a = e.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (l) {
          Be(e, t, l);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (l) {
          Be(e, t, l);
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
  function Ou(e) {
    for (var t = e.return; t !== null && (os(t) && Ry(e.stateNode, t.stateNode), !ss(t)); )
      t = t.return;
  }
  function ss(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 27;
  }
  function os(e) {
    return e && e.tag === 7 && e.stateNode !== null;
  }
  function fs(e) {
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
      Be(e, e.return, l);
    }
  }
  function ds(e, t, n) {
    try {
      var a = e.stateNode;
      oy(a, e.type, n, t), a[zt] = t;
    } catch (l) {
      Be(e, e.return, l);
    }
  }
  function bh(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ea(e.type) || e.tag === 4;
  }
  function hs(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || bh(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Ea(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function ms(e, t, n, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      l = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(l, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(l), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = An)), er(e, a), xe = !0;
    else if (l !== 4 && (l === 27 && (er(e, a), a = null, Ea(e.type) && (n = e.stateNode, t = null)), e = e.child, e !== null))
      for (ms(
        e,
        t,
        n,
        a
      ), e = e.sibling; e !== null; )
        ms(
          e,
          t,
          n,
          a
        ), e = e.sibling;
  }
  function tr(e, t, n, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      l = e.stateNode, t ? n.insertBefore(l, t) : n.appendChild(l), er(e, a), xe = !0;
    else if (l !== 4 && (l === 27 && (er(e, a), a = null, Ea(e.type) && (n = e.stateNode)), e = e.child, e !== null))
      for (tr(
        e,
        t,
        n,
        a
      ), e = e.sibling; e !== null; )
        tr(
          e,
          t,
          n,
          a
        ), e = e.sibling;
  }
  function Sh(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var a = e.type, l = t.attributes; l.length; )
        t.removeAttributeNode(l[0]);
      Tt(t, a, n), t[gt] = e, t[zt] = n;
    } catch (u) {
      Be(e, e.return, u);
    }
  }
  var nr = !1, Kt = null;
  function Th(e) {
    (e.tag === 30 || (e.subtreeFlags & 33554432) !== 0) && (nr = !0);
  }
  var On = null;
  function Ah() {
    var e = On;
    return On = null, e;
  }
  var Mt = 0;
  function _l(e, t, n, a, l) {
    return Mt = 0, _h(
      e.child,
      t,
      n,
      a,
      l
    );
  }
  function _h(e, t, n, a, l) {
    for (var u = !1; e !== null; ) {
      if (e.tag === 5) {
        var s = e.stateNode;
        if (a !== null) {
          var f = $s(s);
          a.push(f), f.view && (u = !0);
        } else
          u || $s(s).view && (u = !0);
        nr = !0, Am(
          s,
          Mt === 0 ? t : t + "_" + Mt,
          n
        ), Mt++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && l || _h(
        e.child,
        t,
        n,
        a,
        l
      ) && (u = !0));
      e = e.sibling;
    }
    return u;
  }
  function Cn(e, t) {
    for (; e !== null; )
      e.tag === 5 ? _m(e.stateNode, e.memoizedProps) : (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && t || Cn(
        e.child,
        t
      )), e = e.sibling;
  }
  function ar(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null; ) {
        if ((e.tag !== 22 || e.memoizedState === null) && (ar(e), e.tag === 30 && (e.flags & 18874368) !== 0 && e.stateNode.paired)) {
          var t = e.memoizedProps;
          if (t.name == null || t.name === "auto")
            throw Error(c(544));
          var n = t.name;
          t = Bn(t.default, t.share), t !== "none" && (_l(
            e,
            n,
            t,
            null,
            !1
          ) || Cn(e.child, !1));
        }
        e = e.sibling;
      }
  }
  function vs(e, t) {
    if (e.tag === 30) {
      var n = e.stateNode, a = e.memoizedProps, l = qn(a, n), u = Bn(
        a.default,
        n.paired ? a.share : a.enter
      );
      u !== "none" ? _l(e, l, u, null, !1) ? (ar(e), n.paired || t || zl(e, a.onEnter)) : Cn(e.child, !1) : ar(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        vs(e, t), e = e.sibling;
    else ar(e);
  }
  function ps(e) {
    if (Kt !== null && Kt.size !== 0) {
      var t = Kt;
      if ((e.subtreeFlags & 18874368) !== 0)
        for (e = e.child; e !== null; ) {
          if (e.tag !== 22 || e.memoizedState === null) {
            if (e.tag === 30 && (e.flags & 18874368) !== 0) {
              var n = e.memoizedProps, a = n.name;
              if (a != null && a !== "auto") {
                var l = t.get(a);
                if (l !== void 0) {
                  var u = Bn(
                    n.default,
                    n.share
                  );
                  if (u !== "none" && (_l(
                    e,
                    a,
                    u,
                    null,
                    !1
                  ) ? (u = e.stateNode, l.paired = u, u.paired = l, zl(e, n.onShare)) : Cn(e.child, !1)), t.delete(a), t.size === 0) break;
                }
              }
            }
            ps(e);
          }
          e = e.sibling;
        }
    }
  }
  function gs(e) {
    if (e.tag === 30) {
      var t = e.memoizedProps, n = qn(t, e.stateNode), a = Kt !== null ? Kt.get(n) : void 0, l = Bn(
        t.default,
        a !== void 0 ? t.share : t.exit
      );
      l !== "none" && (_l(e, n, l, null, !1) ? a !== void 0 ? (l = e.stateNode, a.paired = l, l.paired = a, Kt.delete(n), zl(e, t.onShare)) : zl(e, t.onExit) : Cn(e.child, !1)), Kt !== null && ps(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        gs(e), e = e.sibling;
    else
      Kt !== null && ps(e);
  }
  function Nh(e) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var t = e.memoizedProps, n = qn(t, e.stateNode);
        t = Bn(t.default, t.update), e.flags &= -5, t !== "none" && _l(
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
            t.paired !== null && (t.paired = null, Cn(e.child, !1));
          }
          ys(e);
        }
        e = e.sibling;
      }
  }
  function lr(e) {
    if (e.tag === 30)
      e.stateNode.paired = null, Cn(e.child, !1), ys(e);
    else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        lr(e), e = e.sibling;
    else ys(e);
  }
  function wh(e) {
    for (e = e.child; e !== null; )
      e.tag === 30 ? Cn(e.child, !1) : (e.subtreeFlags & 33554432) !== 0 && wh(e), e = e.sibling;
  }
  function Es(e, t, n, a, l, u, s) {
    for (var f = !1; t !== null; ) {
      if (t.tag === 5) {
        var m = t.stateNode;
        if (u !== null && Mt < u.length) {
          var _ = u[Mt], U = $s(m);
          (_.view || U.view) && (f = !0);
          var H;
          if (H = (e.flags & 4) === 0)
            if (U.clip) H = !0;
            else {
              H = _.rect;
              var S = U.rect;
              H = H.y !== S.y || H.x !== S.x || H.height !== S.height || H.width !== S.width;
            }
          H && (e.flags |= 4), U.abs ? U = !_.abs : (_ = _.rect, U = U.rect, U = _.height !== U.height || _.width !== U.width), U && (e.flags |= 32);
        } else e.flags |= 32;
        (e.flags & 4) !== 0 && Am(
          m,
          Mt === 0 ? n : n + "_" + Mt,
          l
        ), f && (e.flags & 4) !== 0 || (On === null && (On = []), On.push(
          m,
          Mt === 0 ? a : a + "_" + Mt,
          t.memoizedProps
        )), Mt++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && s ? e.flags |= t.flags & 32 : Es(
        e,
        t.child,
        n,
        a,
        l,
        u,
        s
      ) && (f = !0));
      t = t.sibling;
    }
    return f;
  }
  function Oh(e, t) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var n = e.memoizedProps, a = e.stateNode, l = qn(n, a), u = Bn(n.default, n.update), s;
        s = e.memoizedState, e.memoizedState = null, a = e;
        var f = e.child;
        Mt = 0, l = Es(
          a,
          f,
          l,
          l,
          u,
          s,
          !1
        ), (e.flags & 4) !== 0 && l && zl(e, n.onUpdate);
      } else
        (e.subtreeFlags & 33554432) !== 0 && Oh(e);
      e = e.sibling;
    }
  }
  var ft = !1, He = !1, Rn = !1, bs = !1, Ch = typeof WeakSet == "function" ? WeakSet : Set, dt = null, Un = !1, Cu = !1, ur = !1, Ss = !1;
  function Bg(e, t, n) {
    if (e = e.containerInfo, Ks = Gl, e = zf(e), rc(e)) {
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
            var u = l.anchorOffset, s = l.focusNode;
            l = l.focusOffset;
            try {
              a.nodeType, s.nodeType;
            } catch {
              a = null;
              break e;
            }
            var f = 0, m = -1, _ = -1, U = 0, H = 0, S = e, C = null;
            t: for (; ; ) {
              for (var k; S !== a || u !== 0 && S.nodeType !== 3 || (m = f + u), S !== s || l !== 0 && S.nodeType !== 3 || (_ = f + l), S.nodeType === 3 && (f += S.nodeValue.length), (k = S.firstChild) !== null; )
                C = S, S = k;
              for (; ; ) {
                if (S === e) break t;
                if (C === a && ++U === u && (m = f), C === s && ++H === l && (_ = f), (k = S.nextSibling) !== null) break;
                S = C, C = S.parentNode;
              }
              S = k;
            }
            a = m === -1 || _ === -1 ? null : { start: m, end: _ };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Zs = { focusedElem: e, selectionRange: a }, Gl = !1, n = (n & 335544064) === n, dt = t, t = n ? 9270 : 1024; dt !== null; ) {
      if (e = dt, n && (a = e.deletions, a !== null))
        for (u = 0; u < a.length; u++)
          n && gs(a[u]);
      if (e.alternate === null && (e.flags & 2) !== 0)
        n && Th(e), ir(n);
      else {
        if (e.tag === 22) {
          if (a = e.alternate, e.memoizedState !== null) {
            a !== null && a.memoizedState === null && n && gs(a), ir(n);
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            n && Th(e), ir(n);
            continue;
          }
        }
        a = e.child, (e.subtreeFlags & t) !== 0 && a !== null ? (a.return = e, dt = a) : (n && Nh(e), ir(n));
      }
    }
    Kt = null;
  }
  function ir(e) {
    for (; dt !== null; ) {
      var t = dt, n = e, a = t.alternate, l = t.flags;
      switch (t.tag) {
        case 0:
        case 11:
        case 15:
          break;
        case 1:
          if ((l & 1024) !== 0 && a !== null) {
            n = void 0, l = a.memoizedProps, a = a.memoizedState;
            var u = t.stateNode;
            try {
              var s = ka(
                t.type,
                l
              );
              n = u.getSnapshotBeforeUpdate(
                s,
                a
              ), u.__reactInternalSnapshotBeforeUpdate = n;
            } catch (f) {
              Be(t, t.return, f);
            }
          }
          break;
        case 3:
          if ((l & 1024) !== 0) {
            if (a = t.stateNode.containerInfo, n = a.nodeType, n === 9)
              eo(a);
            else if (n === 1)
              switch (a.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  eo(a);
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
          n && a !== null && (n = qn(
            a.memoizedProps,
            a.stateNode
          ), l = t.memoizedProps, l = Bn(l.default, l.update), l !== "none" && _l(
            a,
            n,
            l,
            a.memoizedState = [],
            !0
          ));
          break;
        default:
          if ((l & 1024) !== 0) throw Error(c(163));
      }
      if (a = t.sibling, a !== null) {
        a.return = t.return, dt = a;
        break;
      }
      dt = t.return;
    }
  }
  function Rh(e, t, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Dn(e, n), a & 4 && wu(5, n);
        break;
      case 1:
        if (Dn(e, n), a & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (s) {
              Be(n, n.return, s);
            }
          else {
            var l = ka(
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
            } catch (s) {
              Be(
                n,
                n.return,
                s
              );
            }
          }
        a & 64 && gh(n), a & 512 && wn(n, n.return);
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
            id(e, t);
          } catch (s) {
            Be(n, n.return, s);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Sh(n);
      case 26:
      case 5:
        Dn(e, n), t === null && a & 4 && fs(n), a & 512 && wn(n, n.return);
        break;
      case 12:
        Dn(e, n);
        break;
      case 31:
        Dn(e, n), a & 4 && xh(e, n);
        break;
      case 13:
        Dn(e, n), a & 4 && Mh(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = $g.bind(
          null,
          n
        ), zy(e, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || ft, !a) {
          var u = t !== null && t.memoizedState !== null || He;
          t = ft, l = He, ft = a, (He = u) && !l ? (a = 2, (n.subtreeFlags & 8772) !== 0 && (a |= 1), yn(
            e,
            n,
            a
          )) : Dn(e, n), ft = t, He = l;
        }
        break;
      case 30:
        Dn(e, n), a & 512 && wn(n, n.return);
        break;
      case 7:
        a & 512 && wn(n, n.return);
      default:
        Dn(e, n);
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
            var a = n.style;
            typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none";
          } else {
            var l = e.stateNode, u = e.memoizedProps.style, s = u != null && u.hasOwnProperty("display") ? u.display : null;
            l.style.display = s == null || typeof s == "boolean" ? "" : ("" + s).trim();
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
          var n = e, a = t;
          switch (n.tag) {
            case 4:
              Uh(n, a);
              break e;
            case 22:
              n.memoizedState === null && As(n, a);
              break e;
            default:
              As(n, a);
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
  function pn(e, t, n) {
    for (n = n.child; n !== null; )
      zh(e, t, n), n = n.sibling;
  }
  function zh(e, t, n) {
    if (Vt && typeof Vt.onCommitFiberUnmount == "function")
      try {
        Vt.onCommitFiberUnmount($l, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        He || St(n, t), pn(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !He && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        He || St(n, t), Ou(n);
        var a = Ze, l = jt;
        Ea(n.type) && (Ze = n.stateNode, jt = !1), pn(
          e,
          t,
          n
        ), Hm(
          n.stateNode,
          n.type,
          n.memoizedProps
        ), Ze = a, jt = l;
        break;
      case 5:
        He || St(n, t), Ou(n);
      case 6:
        if (n.tag === 6 && Ou(n), a = Ze, l = jt, Ze = null, pn(
          e,
          t,
          n
        ), Ze = a, jt = l, Ze !== null)
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
        ), Yl(e)) : Sm(Ze, n.stateNode));
        break;
      case 4:
        a = Ze, l = jt, Ze = n.stateNode.containerInfo, jt = !0, pn(
          e,
          t,
          n
        ), Ze = a, jt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        da(2, n, t), He || da(4, n, t), pn(
          e,
          t,
          n
        );
        break;
      case 1:
        He || (St(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && yh(
          n,
          t,
          a
        )), pn(
          e,
          t,
          n
        );
        break;
      case 21:
        pn(
          e,
          t,
          n
        );
        break;
      case 22:
        He = (a = He) || n.memoizedState !== null, pn(
          e,
          t,
          n
        ), He = a;
        break;
      case 30:
        St(n, t), pn(
          e,
          t,
          n
        );
        break;
      case 7:
        He || St(n, t), pn(
          e,
          t,
          n
        );
        break;
      default:
        pn(
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
        Yl(e);
      } catch (n) {
        Be(t, t.return, n);
      }
    }
  }
  function Mh(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Yl(e);
      } catch (n) {
        Be(t, t.return, n);
      }
  }
  function Ig(e) {
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
    var n = Ig(e);
    t.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var l = Pg.bind(null, e, a);
        a.then(l, l);
      }
    });
  }
  function Rt(e, t, n) {
    var a = t.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var u = a[l], s = e, f = t, m = f;
        e: for (; m !== null; ) {
          switch (m.tag) {
            case 27:
              if (Ea(m.type)) {
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
  var gn = null;
  function jh(e, t, n) {
    var a = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (l & 4 && (a = e.updateQueue, a = a !== null ? a.events : null, a !== null))
          for (var u = 0; u < a.length; u++) {
            var s = a[u];
            s.ref.impl = s.nextImpl;
          }
        Rt(t, e, n), Ut(e), l & 4 && (da(3, e, e.return), wu(3, e), da(5, e, e.return));
        break;
      case 1:
        Rt(t, e, n), Ut(e), l & 512 && (He || a === null || St(a, a.return)), l & 64 && ft && (e = e.updateQueue, e !== null && (t = e.callbacks, t !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? t : n.concat(t))));
        break;
      case 26:
        if (u = gn, Rt(t, e, n), Ut(e), l & 512 && (He || a === null || St(a, a.return)), l & 4)
          if (l = a !== null ? a.memoizedState : null, n = e.memoizedState, a === null)
            if (n === null)
              if (e.stateNode === null)
                if (ft)
                  e.stateNode = ym(
                    e.type,
                    e.memoizedProps,
                    t.containerInfo,
                    e
                  );
                else {
                  e: {
                    t = e.type, n = e.memoizedProps, l = u.ownerDocument || u;
                    t: switch (t) {
                      case "title":
                        a = l.getElementsByTagName("title")[0], (!a || a[eu] || a[gt] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = l.createElement(t), l.head.insertBefore(
                          a,
                          l.querySelector("head > title")
                        )), Tt(a, t, n), a[gt] = e, st(a), t = a;
                        break e;
                      case "link":
                        if (u = Gm(
                          "link",
                          "href",
                          l
                        ).get(t + (n.href || ""))) {
                          for (s = 0; s < u.length; s++)
                            if (a = u[s], a.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && a.getAttribute("rel") === (n.rel == null ? null : n.rel) && a.getAttribute("title") === (n.title == null ? null : n.title) && a.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                              u.splice(s, 1);
                              break t;
                            }
                        }
                        a = l.createElement(t), Tt(a, t, n), l.head.appendChild(a);
                        break;
                      case "meta":
                        if (u = Gm(
                          "meta",
                          "content",
                          l
                        ).get(t + (n.content || ""))) {
                          for (s = 0; s < u.length; s++)
                            if (a = u[s], a.getAttribute("content") === (n.content == null ? null : "" + n.content) && a.getAttribute("name") === (n.name == null ? null : n.name) && a.getAttribute("property") === (n.property == null ? null : n.property) && a.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && a.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                              u.splice(s, 1);
                              break t;
                            }
                        }
                        a = l.createElement(t), Tt(a, t, n), l.head.appendChild(a);
                        break;
                      default:
                        throw Error(c(468, t));
                    }
                    a[gt] = e, st(a), t = a;
                  }
                  e.stateNode = t;
                }
              else
                ft || ro(u, e.type, e.stateNode);
            else
              e.stateNode = Vm(
                u,
                n,
                e.memoizedProps
              );
          else
            l !== n ? (l === null ? (t = a.stateNode, t === null || He || t.parentNode.removeChild(t)) : l.count--, n === null ? ft || ro(u, e.type, e.stateNode) : Vm(u, n, e.memoizedProps)) : n === null && e.stateNode !== null && ds(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        break;
      case 27:
        Rt(t, e, n), Ut(e), l & 512 && (He || a === null || St(a, a.return)), a !== null && l & 4 && ds(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (u = Rn, Rn = !1, Rt(t, e, n), Rn = u, Ut(e), l & 512 && (He || a === null || St(a, a.return)), e.flags & 32) {
          t = e.stateNode;
          try {
            il(t, ""), xe = !0;
          } catch (U) {
            Be(e, e.return, U);
          }
        }
        l & 4 && e.stateNode != null && (t = e.memoizedProps, ds(
          e,
          t,
          a !== null ? a.memoizedProps : t
        )), l & 1024 && (bs = !0);
        break;
      case 6:
        if (Rt(t, e, n), Ut(e), l & 4) {
          if (e.stateNode === null)
            throw Error(c(162));
          t = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = t, xe = !0;
          } catch (U) {
            Be(e, e.return, U);
          }
        }
        break;
      case 3:
        if (xe = !1, Tr = null, u = gn, gn = Lu(t.containerInfo), Rt(t, e, n), gn = u, Ut(e), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Yl(t.containerInfo);
          } catch (U) {
            Be(e, e.return, U);
          }
        bs && (bs = !1, Hh(e)), xe = !1;
        break;
      case 4:
        l = Rn, Rn = ft, a = tf(), u = gn, gn = Lu(
          e.stateNode.containerInfo
        ), Rt(t, e, n), Ut(e), gn = u, xe && Cu && (ur = !0), xe = a, Rn = l;
        break;
      case 12:
        Rt(t, e, n), Ut(e);
        break;
      case 31:
        Rt(t, e, n), Ut(e), l & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, rr(e, t)));
        break;
      case 13:
        Rt(t, e, n), Ut(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (or = It()), l & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, rr(e, t)));
        break;
      case 22:
        u = e.memoizedState !== null, s = a !== null && a.memoizedState !== null;
        var f = ft, m = He, _ = Rn;
        ft = f || u, Rn = _ || u, He = m || s, Rt(t, e, n), He = m, Rn = _, ft = f, Ut(e), l & 8192 && (t = e.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, !u || a === null || s || ft || He || (t = s || He, n = ft, a = He, ft = u || ft, He = t, ha(e, 2), ft = n, He = a), !u && Rn || Ts(e, u)), l & 4 && (t = e.updateQueue, t !== null && (n = t.retryQueue, n !== null && (t.retryQueue = null, rr(e, n))));
        break;
      case 19:
        Rt(t, e, n), Ut(e), l & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, rr(e, t)));
        break;
      case 30:
        l & 512 && (He || a === null || St(a, a.return)), l = tf(), u = Cu, s = (n & 335544064) === n, f = e.memoizedProps, Cu = s && Bn(
          f.default,
          f.update
        ) !== "none", Rt(t, e, n), Ut(e), s && a !== null && xe && (e.flags |= 4), Cu = u, xe = l;
        break;
      case 21:
        break;
      case 7:
        l & 512 && (He || a === null || St(a, a.return)), a && a.stateNode !== null && (a.stateNode._fragmentFiber = e);
      default:
        Rt(t, e, n), Ut(e);
    }
  }
  function Ut(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, a = e.return; a !== null; ) {
          if (bh(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var l = e.return; l !== null; ) {
          if (os(l)) {
            var u = l.stateNode;
            a === null ? a = [u] : a.push(u);
          }
          if (ss(l)) break;
          l = l.return;
        }
        var s = a;
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
            n.flags & 32 && (il(_, ""), n.flags &= -33);
            var U = hs(e);
            tr(
              e,
              U,
              _,
              s
            );
            break;
          case 3:
          case 4:
            var H = n.stateNode.containerInfo, S = hs(e);
            ms(
              e,
              S,
              H,
              s
            );
            break;
          default:
            throw Error(c(161));
        }
      } catch (C) {
        Be(e, e.return, C);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Hh(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Hh(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, Gl = !0, t.reset(), Gl = !1), e = e.sibling;
      }
  }
  function Nl(e, t) {
    if (t.subtreeFlags & 9270)
      for (t = t.child; t !== null; )
        Lh(t, e), t = t.sibling;
    else Oh(t);
  }
  function Lh(e, t) {
    var n = e.alternate;
    if (n === null) vs(e, !1);
    else
      switch (e.tag) {
        case 3:
          if (Ss = Un = !1, Ah(), Nl(t, e), !Un && !ur) {
            if (e = On, e !== null)
              for (var a = 0; a < e.length; a += 3) {
                n = e[a];
                var l = e[a + 1];
                _m(n, e[a + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate(
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
            )), Ss = !0;
          }
          On = null;
          break;
        case 5:
          Nl(t, e);
          break;
        case 4:
          a = Un, Un = !1, Nl(t, e), Un && (ur = !0), Un = a;
          break;
        case 22:
          e.memoizedState === null && (n.memoizedState !== null ? vs(e, !1) : Nl(t, e));
          break;
        case 30:
          a = Un, l = Ah(), Un = !1, Nl(t, e), Un && (e.flags |= 4);
          var u = e.memoizedProps, s = e.stateNode;
          t = qn(u, s), s = qn(n.memoizedProps, s);
          var f = Bn(u.default, u.update);
          f === "none" ? t = !1 : (u = n.memoizedState, n.memoizedState = null, n = e.child, Mt = 0, t = Es(
            e,
            n,
            t,
            s,
            f,
            u,
            !0
          ), Mt !== (u === null ? 0 : u.length) && (e.flags |= 32)), (e.flags & 4) !== 0 && t ? (zl(
            e,
            e.memoizedProps.onUpdate
          ), On = l) : l !== null && (l.push.apply(l, On), On = l), Un = (e.flags & 32) !== 0 ? !0 : a;
          break;
        default:
          Nl(t, e);
      }
  }
  function Dn(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Rh(e, t.alternate, t), t = t.sibling;
  }
  function ha(e, t) {
    for (e = e.child; e !== null; ) {
      var n = e, a = t;
      switch (n.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          da(4, n, n.return), ha(
            n,
            a
          );
          break;
        case 1:
          St(n, n.return);
          var l = n.stateNode;
          typeof l.componentWillUnmount == "function" && yh(
            n,
            n.return,
            l
          ), ha(
            n,
            a
          );
          break;
        case 27:
          (a & 2) !== 0 && Hm(
            n.stateNode,
            n.type,
            n.memoizedProps
          );
        case 5:
          St(n, n.return), n.tag !== 5 && n.tag !== 27 || Ou(n), ha(
            n,
            a
          );
          break;
        case 6:
          Ou(n);
          break;
        case 26:
          St(n, n.return), l = n.stateNode, n.memoizedState !== null || l === null || He || l.parentNode.removeChild(l), ha(
            n,
            a
          );
          break;
        case 22:
          n.memoizedState === null && ha(
            n,
            a
          );
          break;
        case 30:
          St(n, n.return), ha(
            n,
            a
          );
          break;
        case 7:
          St(n, n.return);
        default:
          ha(
            n,
            a
          );
      }
      e = e.sibling;
    }
  }
  function yn(e, t, n) {
    for (n = (t.subtreeFlags & 8772) !== 0 ? n : n & -2, t = t.child; t !== null; ) {
      var a = t.alternate, l = e, u = t, s = u.flags, f = (n & 1) !== 0;
      switch (u.tag) {
        case 0:
        case 11:
        case 15:
          yn(
            l,
            u,
            n
          ), wu(4, u);
          break;
        case 1:
          if (yn(
            l,
            u,
            n
          ), a = u, l = a.stateNode, typeof l.componentDidMount == "function")
            try {
              l.componentDidMount();
            } catch (U) {
              Be(a, a.return, U);
            }
          if (a = u, l = a.updateQueue, l !== null) {
            var m = a.stateNode;
            try {
              var _ = l.shared.hiddenCallbacks;
              if (_ !== null)
                for (l.shared.hiddenCallbacks = null, l = 0; l < _.length; l++)
                  ud(_[l], m);
            } catch (U) {
              Be(a, a.return, U);
            }
          }
          f && s & 64 && gh(u), wn(u, u.return);
          break;
        case 27:
          (n & 2) !== 0 && Sh(u);
        case 5:
          u.tag !== 5 && u.tag !== 27 || Eh(u), yn(
            l,
            u,
            n
          ), f && a === null && s & 4 && fs(u), wn(u, u.return);
          break;
        case 6:
          Eh(u);
          break;
        case 26:
          m = u.stateNode, u.memoizedState !== null || m === null || ft || ro(
            Lu(m.ownerDocument),
            u.type,
            m
          ), yn(
            l,
            u,
            n
          ), f && a === null && s & 4 && fs(u), wn(u, u.return);
          break;
        case 12:
          yn(
            l,
            u,
            n
          );
          break;
        case 31:
          yn(
            l,
            u,
            n
          ), f && s & 4 && xh(l, u);
          break;
        case 13:
          yn(
            l,
            u,
            n
          ), f && s & 4 && Mh(l, u);
          break;
        case 22:
          u.memoizedState === null && yn(
            l,
            u,
            n
          ), wn(u, u.return);
          break;
        case 30:
          yn(
            l,
            u,
            n
          ), wn(u, u.return);
          break;
        case 7:
          wn(u, u.return);
        default:
          yn(
            l,
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
  function un(e, t, n, a) {
    var l = (n & 335544064) === n;
    if (t.subtreeFlags & (l ? 10262 : 10256))
      for (t = t.child; t !== null; )
        qh(
          e,
          t,
          n,
          a
        ), t = t.sibling;
    else l && wh(t);
  }
  function qh(e, t, n, a) {
    var l = (n & 335544064) === n;
    l && t.alternate === null && t.return !== null && t.return.alternate !== null && lr(t);
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        un(
          e,
          t,
          n,
          a
        ), u & 2048 && wu(9, t);
        break;
      case 1:
        un(
          e,
          t,
          n,
          a
        );
        break;
      case 3:
        un(
          e,
          t,
          n,
          a
        ), l && Ss && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), u & 2048 && (u = null, t.alternate !== null && (u = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== u && (t.refCount++, u != null && hu(u)));
        break;
      case 12:
        if (u & 2048) {
          un(
            e,
            t,
            n,
            a
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
          un(
            e,
            t,
            n,
            a
          );
        break;
      case 31:
        un(
          e,
          t,
          n,
          a
        );
        break;
      case 13:
        un(
          e,
          t,
          n,
          a
        );
        break;
      case 23:
        break;
      case 22:
        s = t.stateNode, f = t.alternate, t.memoizedState !== null ? (l && f !== null && f.memoizedState === null && lr(f), s._visibility & 2 ? un(
          e,
          t,
          n,
          a
        ) : Ru(
          e,
          t
        )) : (l && f !== null && f.memoizedState !== null && lr(t), s._visibility & 2 ? un(
          e,
          t,
          n,
          a
        ) : (s._visibility |= 2, wl(
          e,
          t,
          n,
          a,
          (t.subtreeFlags & 10256) !== 0 || !1
        ))), u & 2048 && _s(f, t);
        break;
      case 24:
        un(
          e,
          t,
          n,
          a
        ), u & 2048 && Ns(t.alternate, t);
        break;
      case 30:
        l && (u = t.alternate, u !== null && (Cn(u.child, !0), Cn(t.child, !0))), un(
          e,
          t,
          n,
          a
        );
        break;
      default:
        un(
          e,
          t,
          n,
          a
        );
    }
  }
  function wl(e, t, n, a, l) {
    for (l = l && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, s = t, f = n, m = a, _ = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          wl(
            u,
            s,
            f,
            m,
            l
          ), wu(8, s);
          break;
        case 23:
          break;
        case 22:
          var U = s.stateNode;
          s.memoizedState !== null ? U._visibility & 2 ? wl(
            u,
            s,
            f,
            m,
            l
          ) : Ru(
            u,
            s
          ) : (U._visibility |= 2, wl(
            u,
            s,
            f,
            m,
            l
          )), l && _ & 2048 && _s(
            s.alternate,
            s
          );
          break;
        case 24:
          wl(
            u,
            s,
            f,
            m,
            l
          ), l && _ & 2048 && Ns(s.alternate, s);
          break;
        default:
          wl(
            u,
            s,
            f,
            m,
            l
          );
      }
      t = t.sibling;
    }
  }
  function Ru(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, a = t, l = a.flags;
        switch (a.tag) {
          case 22:
            Ru(n, a), l & 2048 && _s(
              a.alternate,
              a
            );
            break;
          case 24:
            Ru(n, a), l & 2048 && Ns(a.alternate, a);
            break;
          default:
            Ru(n, a);
        }
        t = t.sibling;
      }
  }
  var Fa = 8192;
  function $a(e, t, n) {
    if (e.subtreeFlags & Fa)
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
        $a(
          e,
          t,
          n
        ), e.flags & Fa && (e.memoizedState !== null ? Ky(
          n,
          gn,
          e.memoizedState,
          e.memoizedProps
        ) : (e = e.stateNode, (t & 335544128) === t && Km(n, e)));
        break;
      case 5:
        $a(
          e,
          t,
          n
        ), e.flags & Fa && (e = e.stateNode, (t & 335544128) === t && Km(n, e));
        break;
      case 3:
      case 4:
        var a = gn;
        gn = Lu(e.stateNode.containerInfo), $a(
          e,
          t,
          n
        ), gn = a;
        break;
      case 22:
        e.memoizedState === null && (a = e.alternate, a !== null && a.memoizedState !== null ? (a = Fa, Fa = 16777216, $a(
          e,
          t,
          n
        ), Fa = a) : $a(
          e,
          t,
          n
        ));
        break;
      case 30:
        if ((e.flags & Fa) !== 0 && (a = e.memoizedProps.name, a != null && a !== "auto")) {
          var l = e.stateNode;
          l.paired = null, Kt === null && (Kt = /* @__PURE__ */ new Map()), Kt.set(a, l);
        }
        $a(
          e,
          t,
          n
        );
        break;
      default:
        $a(
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
          var a = t[n];
          dt = a, Gh(
            a,
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
        Uu(e), e.flags & 2048 && da(9, e, e.return);
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
          var a = t[n];
          dt = a, Gh(
            a,
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
          da(8, t, t.return), cr(t);
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
    for (; dt !== null; ) {
      var n = dt;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          da(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var a = n.memoizedState.cachePool.pool;
            a != null && a.refCount++;
          }
          break;
        case 24:
          hu(n.memoizedState.cache);
      }
      if (a = n.child, a !== null) a.return = n, dt = a;
      else
        e: for (n = e; dt !== null; ) {
          a = dt;
          var l = a.sibling, u = a.return;
          if (Dh(a), a === n) {
            dt = null;
            break e;
          }
          if (l !== null) {
            l.return = u, dt = l;
            break e;
          }
          dt = u;
        }
    }
  }
  var Vg = {
    getCacheForType: function(e) {
      var t = yt(tt), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return yt(tt).controller.signal;
    }
  }, Gg = typeof WeakMap == "function" ? WeakMap : Map, je = 0, Xe = null, _e = null, Oe = 0, qe = 0, Zt = null, ma = !1, Ol = !1, ws = !1, Jn = 0, $e = 0, va = 0, Pa = 0, sr = 0, Jt = 0, Cl = 0, Du = null, Ht = null, Os = !1, or = 0, Yh = 0, fr = 1 / 0, dr = null, pa = null, Je = 0, En = null, Wa = null, zn = 0, Cs = 0, Rs = null, Xh = null, Rl = null, Ul = null, Dl = null, zu = 0, hr = null;
  function kt() {
    return (je & 2) !== 0 && Oe !== 0 ? Oe & -Oe : W.T !== null ? Bs() : Ko();
  }
  function Qh() {
    if (Jt === 0)
      if ((Oe & 536870912) === 0 || Ae) {
        var e = ri;
        ri <<= 1, (ri & 3932160) === 0 && (ri = 262144), Jt = e;
      } else Jt = 536870912;
    return e = Et.current, e !== null && (e.flags |= 32), Jt;
  }
  function zl(e, t) {
    if (t != null) {
      var n = e.stateNode, a = n.ref;
      a === null && (a = n.ref = Nm(
        qn(e.memoizedProps, n)
      )), Ul === null && (Ul = []), Ul.push(t.bind(null, a));
    }
  }
  function Lt(e, t, n) {
    (e === Xe && (qe === 2 || qe === 9) || e.cancelPendingCommit !== null) && (xl(e, 0), ga(
      e,
      Oe,
      Jt,
      !1
    )), Wl(e, n), ((je & 2) === 0 || e !== Xe) && (e === Xe && ((je & 2) === 0 && (Pa |= n), $e === 4 && ga(
      e,
      Oe,
      Jt,
      !1
    )), xn(e));
  }
  function Kh(e, t, n) {
    if ((je & 6) !== 0) throw Error(c(327));
    var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Pl(e, t), l = a ? Qg(e, t) : Ds(e, t, !0), u = a;
    do {
      if (l === 0) {
        Ol && !a && ga(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, u && !Yg(n)) {
          l = Ds(e, t, !1), u = !1;
          continue;
        }
        if (l === 2) {
          if (u = t, e.errorRecoveryDisabledLanes & u)
            var s = 0;
          else
            s = e.pendingLanes & -536870913, s = s !== 0 ? s : s & 536870912 ? 536870912 : 0;
          if (s !== 0) {
            t = s;
            e: {
              var f = e;
              l = Du;
              var m = f.current.memoizedState.isDehydrated;
              if (m && (xl(f, s).flags |= 256), s = Ds(
                f,
                s,
                !1
              ), s !== 2 && s !== 6) {
                if (ws && !m) {
                  f.errorRecoveryDisabledLanes |= u, Pa |= u, l = 4;
                  break e;
                }
                u = Ht, Ht = l, u !== null && (Ht === null ? Ht = u : Ht.push.apply(
                  Ht,
                  u
                ));
              }
              l = s;
            }
            if (u = !1, l !== 2) continue;
          }
        }
        if (l === 1) {
          xl(e, 0), ga(e, t, 0, !0);
          break;
        }
        e: {
          switch (a = e, u = l, u) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((t & 4194048) !== t && (t & 62914560) !== t)
                break;
            case 6:
              ga(
                a,
                t,
                Jt,
                !ma
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
          if ((t & 62914560) === t && (l = or + 300 - It(), 10 < l)) {
            if (ga(
              a,
              t,
              Jt,
              !ma
            ), si(a, 0, !0) !== 0) break e;
            zn = t, a.timeoutHandle = Fs(
              Zh.bind(
                null,
                a,
                n,
                Ht,
                dr,
                Os,
                t,
                Jt,
                Pa,
                Cl,
                ma,
                u,
                "Throttled",
                -0,
                0
              ),
              l
            );
            break e;
          }
          Zh(
            a,
            n,
            Ht,
            dr,
            Os,
            t,
            Jt,
            Pa,
            Cl,
            ma,
            u,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    xn(e);
  }
  function Zh(e, t, n, a, l, u, s, f, m, _, U, H, S, C) {
    e.timeoutHandle = -1;
    var k = t.subtreeFlags, ne = (u & 335544064) === u;
    if (H = null, (ne || k & 8192 || (k & 16785408) === 16785408) && (H = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: An
    }, Kt = null, Bh(
      t,
      u,
      H
    ), ne && (k = H, ne = e.containerInfo, ne = (ne.nodeType === 9 ? ne : ne.ownerDocument).__reactViewTransition, ne != null && (k.count++, k.waitingForViewTransition = !0, k = Iu.bind(k), ne.finished.then(k, k))), k = (u & 62914560) === u ? or - It() : (u & 4194048) === u ? Yh - It() : 0, k = Zy(
      H,
      k
    ), k !== null)) {
      zn = u, e.cancelPendingCommit = k(
        tm.bind(
          null,
          e,
          t,
          u,
          n,
          a,
          l,
          s,
          f,
          m,
          _,
          U,
          H,
          null,
          S,
          C
        )
      ), ga(e, u, s, !_);
      return;
    }
    tm(
      e,
      t,
      u,
      n,
      a,
      l,
      s,
      f,
      m,
      _,
      U,
      H
    );
  }
  function Yg(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var a = 0; a < n.length; a++) {
          var l = n[a], u = l.getSnapshot;
          l = l.value;
          try {
            if (!Xt(u(), l)) return !1;
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
  function ga(e, t, n, a) {
    t = Vo(e, t), t &= ~sr, t &= ~Pa, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var l = t; 0 < l; ) {
      var u = 31 - Gt(l), s = 1 << u;
      a[u] = -1, l &= ~s;
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
        e = _e, Gn = Ia = null, qc(e), El = null, pu = 0, e = _e;
      for (; e !== null; )
        ph(e.alternate, e), e = e.return;
      _e = null;
    }
  }
  function xl(e, t) {
    var n = e.timeoutHandle;
    return n !== -1 && (e.timeoutHandle = -1, hy(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), zn = 0, Us(), Xe = e, _e = n = In(e.current, null), Oe = t, qe = 0, Zt = null, ma = !1, Ol = Pl(e, t), ws = !1, Cl = Jt = sr = Pa = va = $e = 0, Ht = Du = null, Os = !1, Jn = Vo(e, t), Ti(), n;
  }
  function Jh(e, t) {
    Se = null, W.H = Zi, t === yl || t === xi ? (t = td(), qe = 3) : t === Nc ? (t = td(), qe = 4) : qe = t === Wc ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Zt = t, _e === null && ($e = 1, Ji(
      e,
      tn(t, e.current)
    ));
  }
  function kh() {
    var e = Et.current;
    return e === null ? !0 : (Oe & 4194048) === Oe ? _t === null : (Oe & 62914560) === Oe || (Oe & 536870912) !== 0 ? e === _t : !1;
  }
  function Fh() {
    var e = W.H;
    return W.H = Zi, e === null ? Zi : e;
  }
  function $h() {
    var e = W.A;
    return W.A = Vg, e;
  }
  function vr() {
    $e = 4, ma || (Oe & 4194048) !== Oe && Et.current !== null || (Ol = !0), (va & 134217727) === 0 && (Pa & 134217727) === 0 || Xe === null || ga(
      Xe,
      Oe,
      Jt,
      !1
    );
  }
  function Ds(e, t, n) {
    var a = je;
    je |= 2;
    var l = Fh(), u = $h();
    (Xe !== e || Oe !== t) && (dr = null, xl(e, t)), t = !1;
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
              Et.current === null && (t = !0);
              var _ = qe;
              if (qe = 0, Zt = null, Ml(e, f, m, _), n && Ol) {
                s = 0;
                break e;
              }
              break;
            default:
              _ = qe, qe = 0, Zt = null, Ml(e, f, m, _);
          }
        }
        Xg(), s = $e;
        break;
      } catch (U) {
        Jh(e, U);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Gn = Ia = null, je = a, W.H = l, W.A = u, _e === null && (Xe = null, Oe = 0, Ti()), s;
  }
  function Xg() {
    for (; _e !== null; ) Ph(_e);
  }
  function Qg(e, t) {
    var n = je;
    je |= 2;
    var a = Fh(), l = $h();
    Xe !== e || Oe !== t ? (dr = null, fr = It() + 500, xl(e, t)) : Ol = Pl(
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
              qe = 0, Zt = null, Ml(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (Wf(u)) {
                qe = 0, Zt = null, Wh(t);
                break;
              }
              t = function() {
                qe !== 2 && qe !== 9 || Xe !== e || (qe = 7), xn(e);
              }, u.then(t, t);
              break e;
            case 3:
              qe = 7;
              break e;
            case 4:
              qe = 5;
              break e;
            case 7:
              Wf(u) ? (qe = 0, Zt = null, Wh(t)) : (qe = 0, Zt = null, Ml(e, t, u, 7));
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
                      _ !== null ? (_e = _, pr(_)) : _e = null;
                    }
                    break t;
                  }
              }
              qe = 0, Zt = null, Ml(e, t, u, 5);
              break;
            case 6:
              qe = 0, Zt = null, Ml(e, t, u, 6);
              break;
            case 8:
              Us(), $e = 6;
              break e;
            default:
              throw Error(c(462));
          }
        }
        Kg();
        break;
      } catch (U) {
        Jh(e, U);
      }
    while (!0);
    return Gn = Ia = null, W.H = a, W.A = l, je = n, _e !== null ? 0 : (Xe = null, Oe = 0, Ti(), $e);
  }
  function Kg() {
    for (; _e !== null && !sp(); )
      Ph(_e);
  }
  function Ph(e) {
    var t = mh(e.alternate, e, Jn);
    e.memoizedProps = e.pendingProps, t === null ? pr(e) : _e = t;
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
          Oe
        );
        break;
      case 11:
        t = rh(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Oe
        );
        break;
      case 5:
        qc(t);
        var a = t;
        a === ot && (Ae ? (Ci(a), a.tag === 5 && a.stateNode != null && (Qe = a.stateNode)) : (Ci(a), Ae = !0));
      default:
        ph(n, t), t = _e = Gf(t, Jn), t = mh(n, t, Jn);
    }
    e.memoizedProps = e.pendingProps, t === null ? pr(e) : _e = t;
  }
  function Ml(e, t, n, a) {
    Gn = Ia = null, qc(t), El = null, pu = 0;
    var l = t.return;
    try {
      if (xg(
        e,
        l,
        t,
        n,
        Oe
      )) {
        $e = 1, Ji(
          e,
          tn(n, e.current)
        ), _e = null;
        return;
      }
    } catch (u) {
      if (l !== null) throw _e = l, u;
      $e = 1, Ji(
        e,
        tn(n, e.current)
      ), _e = null;
      return;
    }
    t.flags & 32768 ? (Ae || a === 1 ? e = !0 : Ol || (Oe & 536870912) !== 0 ? e = !1 : (ma = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Et.current, a !== null && a.tag === 13 && (a.flags |= 16384))), em(t, e)) : pr(t);
  }
  function pr(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        em(
          t,
          ma
        );
        return;
      }
      e = t.return;
      var n = Lg(
        t.alternate,
        t,
        Jn
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
      var n = qg(e.alternate, e);
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
  function tm(e, t, n, a, l, u, s, f, m, _, U, H) {
    e.cancelPendingCommit = null;
    do
      gr();
    while (Je !== 0);
    if ((je & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      e === Xe && (_e = Xe = null, Oe = 0), Wa = t, En = e, zn = n, Rs = l, Xh = a, Zg(
        e,
        t,
        n,
        s,
        f,
        m,
        H
      );
    }
  }
  function Zg(e, t, n, a, l, u, s) {
    var f = t.lanes | t.childLanes;
    if (Cs = f, f |= dc, Ep(
      e,
      n,
      f,
      a,
      l,
      u
    ), Ul = null, (n & 335544064) === n ? (Dl = Sg(e), a = 10262) : (Dl = null, a = 10256), (t.subtreeFlags & a) !== 0 || (t.flags & a) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, Wg(ui, function() {
      return js(), null;
    })) : (e.callbackNode = null, e.callbackPriority = 0), nr = !1, a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
      a = W.T, W.T = null, l = de.p, de.p = 2, u = je, je |= 4;
      try {
        Bg(e, t, n);
      } finally {
        je = u, de.p = l, W.T = a;
      }
    }
    Je = 1, nr ? Rl = Ey(
      s,
      e.containerInfo,
      Dl,
      zs,
      xs,
      kg,
      Ms,
      js,
      Jg
    ) : (zs(), xs(), Ms());
  }
  function Jg(e) {
    if (Je !== 0) {
      var t = En.onRecoverableError;
      t(e, { componentStack: null });
    }
  }
  function kg() {
    Je === 3 && (Je = 0, Lh(Wa, En), Je = 4);
  }
  function zs() {
    if (Je === 1) {
      Je = 0;
      var e = En, t = Wa, n = zn, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = W.T, W.T = null;
        var l = de.p;
        de.p = 2;
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
              var _ = m.start, U = m.end;
              if (U === void 0 && (U = _), "selectionStart" in f)
                f.selectionStart = _, f.selectionEnd = Math.min(
                  U,
                  f.value.length
                );
              else {
                var H = f.ownerDocument || document, S = H && H.defaultView || window;
                if (S.getSelection) {
                  var C = S.getSelection(), k = f.textContent.length, ne = Math.min(m.start, k), Te = m.end === void 0 ? ne : Math.min(m.end, k);
                  !C.extend && ne > Te && (s = Te, Te = ne, ne = s);
                  var T = Uf(
                    f,
                    ne
                  ), y = Uf(
                    f,
                    Te
                  );
                  if (T && y && (C.rangeCount !== 1 || C.anchorNode !== T.node || C.anchorOffset !== T.offset || C.focusNode !== y.node || C.focusOffset !== y.offset)) {
                    var O = H.createRange();
                    O.setStart(T.node, T.offset), C.removeAllRanges(), ne > Te ? (C.addRange(O), C.extend(y.node, y.offset)) : (O.setEnd(y.node, y.offset), C.addRange(O));
                  }
                }
              }
            }
            for (H = [], C = f; C = C.parentNode; )
              C.nodeType === 1 && H.push({
                element: C,
                left: C.scrollLeft,
                top: C.scrollTop
              });
            for (typeof f.focus == "function" && f.focus(), f = 0; f < H.length; f++) {
              var j = H[f];
              j.element.scrollLeft = j.left, j.element.scrollTop = j.top;
            }
          }
          Gl = !!Ks, Zs = Ks = null;
        } finally {
          je = u, de.p = l, W.T = a;
        }
      }
      e.current = t, Je = 2;
    }
  }
  function xs() {
    if (Je === 2) {
      Je = 0;
      var e = En, t = Wa, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = W.T, W.T = null;
        var a = de.p;
        de.p = 2;
        var l = je;
        je |= 4;
        try {
          Rh(e, t.alternate, t);
        } finally {
          je = l, de.p = a, W.T = n;
        }
      }
      Je = 3;
    }
  }
  function Ms() {
    if (Je === 4 || Je === 3) {
      Je = 0;
      var e = Rl;
      Rl = null, op();
      var t = En, n = Wa, a = zn, l = Xh, u = (a & 335544064) === a ? 10262 : 10256;
      if ((n.subtreeFlags & u) !== 0 || (n.flags & u) !== 0 ? Je = 5 : (Je = 0, Wa = En = null, nm(t, t.pendingLanes)), u = t.pendingLanes, u === 0 && (pa = null), Yr(a), n = n.stateNode, Vt && typeof Vt.onCommitFiberRoot == "function")
        try {
          Vt.onCommitFiberRoot(
            $l,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        n = W.T, u = de.p, de.p = 2, W.T = null;
        try {
          for (var s = t.onRecoverableError, f = 0; f < l.length; f++) {
            var m = l[f];
            s(m.value, {
              componentStack: m.stack
            });
          }
        } finally {
          W.T = n, de.p = u;
        }
      }
      if (l = Ul, s = Dl, Dl = null, l !== null && (Ul = null, s === null && (s = []), e !== null))
        for (m = 0; m < l.length; m++)
          n = (0, l[m])(
            s
          ), n !== void 0 && e.finished.finally(n);
      (zn & 3) !== 0 && gr(), xn(t), u = t.pendingLanes, (a & 261930) !== 0 && (u & 42) !== 0 ? t === hr ? zu++ : (zu = 0, hr = t) : (zu = 0, hr = null), xu(0);
    }
  }
  function nm(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, hu(t)));
  }
  function gr() {
    return Rl !== null && (Rl.skipTransition(), Rl = null), zs(), xs(), Ms(), js();
  }
  function js() {
    if (Je !== 5) return !1;
    var e = En, t = Cs;
    Cs = 0;
    var n = Yr(zn), a = W.T, l = de.p;
    try {
      de.p = 32 > n ? 32 : n, W.T = null, n = Rs, Rs = null;
      var u = En, s = zn;
      if (Je = 0, Wa = En = null, zn = 0, (je & 6) !== 0) throw Error(c(331));
      var f = je;
      if (je |= 4, Vh(u.current), qh(
        u,
        u.current,
        s,
        n
      ), je = f, xu(0, !1), Vt && typeof Vt.onPostCommitFiberRoot == "function")
        try {
          Vt.onPostCommitFiberRoot($l, u);
        } catch {
        }
      return !0;
    } finally {
      de.p = l, W.T = a, nm(e, t);
    }
  }
  function am(e, t, n) {
    t = tn(n, t), t = Pc(e.stateNode, t, 2), e = ca(e, t, 2), e !== null && (Wl(e, 2), xn(e));
  }
  function Be(e, t, n) {
    if (e.tag === 3)
      am(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          am(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (pa === null || !pa.has(a))) {
            e = tn(n, e), n = Wd(2), a = ca(t, n, 2), a !== null && (eh(
              n,
              a,
              t,
              e
            ), Wl(a, 2), xn(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function Hs(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Gg();
      var l = /* @__PURE__ */ new Set();
      a.set(t, l);
    } else
      l = a.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), a.set(t, l));
    l.has(n) || (ws = !0, l.add(n), e = Fg.bind(null, e, t, n), t.then(e, e));
  }
  function Fg(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Xe === e && (Oe & n) === n && (($e === 4 || $e === 3 && (Oe & 62914560) === Oe && 300 > It() - or) && (je & 2) === 0 ? xl(e, 0) : sr |= n, Cl === Oe && (Cl = 0)), xn(e);
  }
  function lm(e, t) {
    t === 0 && (t = Go()), e = La(e, t), e !== null && (Wl(e, t), xn(e));
  }
  function $g(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), lm(e, n);
  }
  function Pg(e, t) {
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
        throw Error(c(314));
    }
    a !== null && a.delete(t), lm(e, n);
  }
  function Wg(e, t) {
    return Br(e, t);
  }
  var jl = null, Hl = null, Ls = !1, yr = !1, qs = !1, ya = 0;
  function xn(e) {
    e !== Hl && e.next === null && (Hl === null ? jl = Hl = e : Hl = Hl.next = e), yr = !0, Ls || (Ls = !0, ty());
  }
  function xu(e, t) {
    if (!qs && yr) {
      qs = !0;
      do
        for (var n = !1, a = jl; a !== null; ) {
          if (e !== 0) {
            var l = a.pendingLanes;
            if (l === 0) var u = 0;
            else {
              var s = a.suspendedLanes, f = a.pingedLanes;
              u = (1 << 31 - Gt(42 | e) + 1) - 1, u &= l & ~(s & ~f), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = !0, cm(a, u));
          } else
            u = Oe, u = si(
              a,
              a === Xe ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || Pl(a, u) || (n = !0, cm(a, u));
          a = a.next;
        }
      while (n);
      qs = !1;
    }
  }
  function ey() {
    um();
  }
  function um() {
    yr = Ls = !1;
    var e = 0;
    ya !== 0 && dy() && (e = ya);
    for (var t = It(), n = null, a = jl; a !== null; ) {
      var l = a.next, u = im(a, t);
      u === 0 ? (a.next = null, n === null ? jl = l : n.next = l, l === null && (Hl = n)) : (n = a, (e !== 0 || (u & 3) !== 0) && (yr = !0)), a = l;
    }
    Je !== 0 && Je !== 5 || xu(e), ya !== 0 && (ya = 0);
  }
  function im(e, t) {
    for (var n = e.suspendedLanes, a = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var s = 31 - Gt(u), f = 1 << s, m = l[s];
      m === -1 ? ((f & n) === 0 || (f & a) !== 0) && (l[s] = yp(f, t)) : m <= t && (e.expiredLanes |= f), u &= ~f;
    }
    if (t = Xe, n = Oe, n = si(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, n === 0 || e === t && (qe === 2 || qe === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && Ir(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || Pl(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (a !== null && Ir(a), Yr(n)) {
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
      return a = rm.bind(null, e), n = Br(n, a), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return a !== null && a !== null && Ir(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function rm(e, t) {
    if (Je !== 0 && Je !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (gr() && e.callbackNode !== n)
      return null;
    var a = Oe;
    return a = si(
      e,
      e === Xe ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (Kh(e, a, t), im(e, It()), e.callbackNode != null && e.callbackNode === n ? rm.bind(null, e) : null);
  }
  function cm(e, t) {
    if (gr()) return null;
    Kh(e, t, !0);
  }
  function ty() {
    my(function() {
      (je & 6) !== 0 ? Br(
        qo,
        ey
      ) : um();
    });
  }
  function Bs() {
    if (ya === 0) {
      var e = Ya;
      e === 0 && (e = ii, ii <<= 1, (ii & 261888) === 0 && (ii = 256)), ya = e;
    }
    return ya;
  }
  function sm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : mi(e);
  }
  function ny(e, t, n, a, l) {
    if (t === "submit" && n && n.stateNode === l) {
      var u = sm(
        (l[zt] || null).action
      ), s = a.submitter;
      s && (t = (t = s[zt] || null) ? sm(t.formAction) : s.getAttribute("formAction"), t !== null && (u = t, s = null));
      var f = new yi(
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
                if (ya !== 0) {
                  var m = new FormData(l, s);
                  Zc(
                    n,
                    {
                      pending: !0,
                      data: m,
                      method: l.method,
                      action: u
                    },
                    null,
                    m
                  );
                }
              } else
                typeof u == "function" && (f.preventDefault(), m = new FormData(l, s), Zc(
                  n,
                  {
                    pending: !0,
                    data: m,
                    method: l.method,
                    action: u
                  },
                  u,
                  m
                ));
            },
            currentTarget: l
          }
        ]
      });
    }
  }
  for (var Is = 0; Is < fc.length; Is++) {
    var Vs = fc[Is], ay = Vs.toLowerCase(), ly = Vs[0].toUpperCase() + Vs.slice(1);
    vn(
      ay,
      "on" + ly
    );
  }
  vn(jf, "onAnimationEnd"), vn(Hf, "onAnimationIteration"), vn(Lf, "onAnimationStart"), vn("dblclick", "onDoubleClick"), vn("focusin", "onFocus"), vn("focusout", "onBlur"), vn(hg, "onTransitionRun"), vn(mg, "onTransitionStart"), vn(vg, "onTransitionCancel"), vn(qf, "onTransitionEnd"), ll("onMouseEnter", ["mouseout", "mouseover"]), ll("onMouseLeave", ["mouseout", "mouseover"]), ll("onPointerEnter", ["pointerout", "pointerover"]), ll("onPointerLeave", ["pointerout", "pointerover"]), Ma(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Ma(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Ma("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Ma(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Ma(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Ma(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var Mu = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), uy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mu)
  );
  function om(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var a = e[n], l = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var s = a.length - 1; 0 <= s; s--) {
            var f = a[s], m = f.instance, _ = f.currentTarget;
            if (f = f.listener, m !== u && l.isPropagationStopped())
              break e;
            u = f, l.currentTarget = _;
            try {
              u(l);
            } catch (U) {
              Si(U);
            }
            l.currentTarget = null, u = m;
          }
        else
          for (s = 0; s < a.length; s++) {
            if (f = a[s], m = f.instance, _ = f.currentTarget, f = f.listener, m !== u && l.isPropagationStopped())
              break e;
            u = f, l.currentTarget = _;
            try {
              u(l);
            } catch (U) {
              Si(U);
            }
            l.currentTarget = null, u = m;
          }
      }
    }
  }
  function Ne(e, t) {
    var n = t[Jo];
    n === void 0 && (n = t[Jo] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    n.has(a) || (fm(t, e, 2, !1), n.add(a));
  }
  function Gs(e, t, n) {
    var a = 0;
    t && (a |= 4), fm(
      n,
      e,
      a,
      t
    );
  }
  var Er = "_reactListening" + Math.random().toString(36).slice(2);
  function Ys(e) {
    if (!e[Er]) {
      e[Er] = !0, $o.forEach(function(n) {
        n !== "selectionchange" && (uy.has(n) || Gs(n, !1, e), Gs(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Er] || (t[Er] = !0, Gs("selectionchange", !1, t));
    }
  }
  function fm(e, t, n, a) {
    switch (ev(t)) {
      case 2:
        var l = $y;
        break;
      case 8:
        l = Py;
        break;
      default:
        l = so;
    }
    n = l.bind(
      null,
      t,
      n,
      e
    ), l = void 0, !$r || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), a ? l !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
      passive: l
    }) : e.addEventListener(t, n, !1);
  }
  function Xs(e, t, n, a, l) {
    var u = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (; ; ) {
        if (a === null) return;
        var s = a.tag;
        if (s === 3 || s === 4) {
          var f = a.stateNode.containerInfo;
          if (f === l) break;
          if (s === 4)
            for (s = a.return; s !== null; ) {
              var m = s.tag;
              if ((m === 3 || m === 4) && s.stateNode.containerInfo === l)
                return;
              s = s.return;
            }
          for (; f !== null; ) {
            if (s = xa(f), s === null) return;
            if (m = s.tag, m === 5 || m === 6 || m === 26 || m === 27) {
              a = u = s;
              continue e;
            }
            f = f.parentNode;
          }
        }
        a = a.return;
      }
    ff(function() {
      var _ = u, U = kr(n), H = [];
      e: {
        var S = Bf.get(e);
        if (S !== void 0) {
          var C = yi, k = e;
          switch (e) {
            case "keypress":
              if (pi(n) === 0) break e;
            case "keydown":
            case "keyup":
              C = Yp;
              break;
            case "focusin":
              k = "focus", C = tc;
              break;
            case "focusout":
              k = "blur", C = tc;
              break;
            case "beforeblur":
            case "afterblur":
              C = tc;
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
              C = mf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              C = Dp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              C = Jp;
              break;
            case jf:
            case Hf:
            case Lf:
              C = Mp;
              break;
            case qf:
              C = Fp;
              break;
            case "scroll":
            case "scrollend":
              C = Rp;
              break;
            case "wheel":
              C = Pp;
              break;
            case "copy":
            case "cut":
            case "paste":
              C = Hp;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              C = pf;
              break;
            case "submit":
              C = Kp;
              break;
            case "toggle":
            case "beforetoggle":
              C = eg;
          }
          var ne = (t & 4) !== 0, Te = !ne && (e === "scroll" || e === "scrollend"), T = ne ? S !== null ? S + "Capture" : null : S;
          ne = [];
          for (var y = _, O; y !== null; ) {
            var j = y;
            if (O = j.stateNode, j = j.tag, j !== 5 && j !== 26 && j !== 27 || O === null || T === null || (j = nu(y, T), j != null && ne.push(
              ju(y, j, O)
            )), Te) break;
            y = y.return;
          }
          0 < ne.length && (S = new C(
            S,
            k,
            null,
            n,
            U
          ), H.push({ event: S, listeners: ne }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (C = e === "mouseover" || e === "pointerover", S = e === "mouseout" || e === "pointerout", C && n !== Jr && (k = n.relatedTarget || n.fromElement) && (xa(k) || k[tl]))
            break e;
          (S || C) && (k = U.window === U ? U : (C = U.ownerDocument) ? C.defaultView || C.parentWindow : window, S ? (C = n.relatedTarget || n.toElement, S = _, C = C ? xa(C) : null, C !== null && (Te = h(C), ne = C.tag, C !== Te || ne !== 5 && ne !== 27 && ne !== 6) && (C = null)) : (S = null, C = _), S !== C && (ne = mf, j = "onMouseLeave", T = "onMouseEnter", y = "mouse", (e === "pointerout" || e === "pointerover") && (ne = pf, j = "onPointerLeave", T = "onPointerEnter", y = "pointer"), Te = S == null ? k : tu(S), O = C == null ? k : tu(C), k = new ne(
            j,
            y + "leave",
            S,
            n,
            U
          ), k.target = Te, k.relatedTarget = O, j = null, xa(U) === _ && (ne = new ne(
            T,
            y + "enter",
            C,
            n,
            U
          ), ne.target = O, ne.relatedTarget = Te, j = ne), Te = j, ne = S && C ? fe(
            S,
            C,
            iy
          ) : null, S !== null && dm(
            H,
            k,
            S,
            ne,
            !1
          ), C !== null && Te !== null && dm(
            H,
            Te,
            C,
            ne,
            !0
          )));
        }
        e: {
          if (S = _ ? tu(_) : window, C = S.nodeName && S.nodeName.toLowerCase(), C === "select" || C === "input" && S.type === "file")
            var $ = _f;
          else if (Tf(S))
            if (Nf)
              $ = og;
            else {
              $ = cg;
              var Ce = rg;
            }
          else
            C = S.nodeName, !C || C.toLowerCase() !== "input" || S.type !== "checkbox" && S.type !== "radio" ? _ && Zr(_.elementType) && ($ = _f) : $ = sg;
          if ($ && ($ = $(e, _))) {
            Af(
              H,
              $,
              n,
              U
            );
            break e;
          }
          Ce && Ce(e, S, _);
        }
        switch (Ce = _ ? tu(_) : window, e) {
          case "focusin":
            (Tf(Ce) || Ce.contentEditable === "true") && (ol = Ce, cc = _, ou = null);
            break;
          case "focusout":
            ou = cc = ol = null;
            break;
          case "mousedown":
            sc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            sc = !1, xf(H, n, U);
            break;
          case "selectionchange":
            if (dg) break;
          case "keydown":
          case "keyup":
            xf(H, n, U);
        }
        var re;
        if (ac)
          e: {
            switch (e) {
              case "compositionstart":
                var he = "onCompositionStart";
                break e;
              case "compositionend":
                he = "onCompositionEnd";
                break e;
              case "compositionupdate":
                he = "onCompositionUpdate";
                break e;
            }
            he = void 0;
          }
        else
          sl ? bf(e, n) && (he = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (he = "onCompositionStart");
        he && (gf && n.locale !== "ko" && (sl || he !== "onCompositionStart" ? he === "onCompositionEnd" && sl && (re = df()) : (Wn = U, Pr = "value" in Wn ? Wn.value : Wn.textContent, sl = !0)), Ce = br(_, he), 0 < Ce.length && (he = new vf(
          he,
          e,
          null,
          n,
          U
        ), H.push({ event: he, listeners: Ce }), re ? he.data = re : (re = Sf(n), re !== null && (he.data = re)))), (re = ng ? ag(e, n) : lg(e, n)) && (he = br(_, "onBeforeInput"), 0 < he.length && (Ce = new vf(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          U
        ), H.push({
          event: Ce,
          listeners: he
        }), Ce.data = re)), ny(
          H,
          e,
          _,
          n,
          U
        );
      }
      om(H, t);
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
    for (var n = t + "Capture", a = []; e !== null; ) {
      var l = e, u = l.stateNode;
      if (l = l.tag, l !== 5 && l !== 26 && l !== 27 || u === null || (l = nu(e, n), l != null && a.unshift(
        ju(e, l, u)
      ), l = nu(e, t), l != null && a.push(
        ju(e, l, u)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function iy(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function dm(e, t, n, a, l) {
    for (var u = t._reactName, s = []; n !== null && n !== a; ) {
      var f = n, m = f.alternate, _ = f.stateNode;
      if (f = f.tag, m !== null && m === a) break;
      f !== 5 && f !== 26 && f !== 27 || _ === null || (m = _, l ? (_ = nu(n, u), _ != null && s.unshift(
        ju(n, _, m)
      )) : l || (_ = nu(n, u), _ != null && s.push(
        ju(n, _, m)
      ))), n = n.return;
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var ry = /\r\n?/g, cy = /\u0000|\uFFFD/g;
  function hm(e) {
    return (typeof e == "string" ? e : "" + e).replace(ry, `
`).replace(cy, "");
  }
  function mm(e, t) {
    return t = hm(t), hm(e) === t;
  }
  function Ie(e, t, n, a, l, u) {
    switch (n) {
      case "children":
        if (typeof a == "string")
          t === "body" || t === "textarea" && a === "" || il(e, a);
        else if (typeof a == "number" || typeof a == "bigint")
          t !== "body" && il(e, "" + a);
        else return;
        break;
      case "className":
        hi(e, "class", a);
        break;
      case "tabIndex":
        hi(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        hi(e, n, a);
        break;
      case "style":
        sf(e, a, u);
        return;
      case "data":
        if (t !== "object") {
          hi(e, "data", a);
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
        a = mi(a), e.setAttribute(n, a);
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
          typeof u == "function" && (n === "formAction" ? (t !== "input" && Ie(e, t, "name", l.name, l, null), Ie(
            e,
            t,
            "formEncType",
            l.formEncType,
            l,
            null
          ), Ie(
            e,
            t,
            "formMethod",
            l.formMethod,
            l,
            null
          ), Ie(
            e,
            t,
            "formTarget",
            l.formTarget,
            l,
            null
          )) : (Ie(e, t, "encType", l.encType, l, null), Ie(e, t, "method", l.method, l, null), Ie(e, t, "target", l.target, l, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(n);
          break;
        }
        a = mi(a), e.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (e.onclick = An);
        return;
      case "onScroll":
        a != null && Ne("scroll", e);
        return;
      case "onScrollEnd":
        a != null && Ne("scrollend", e);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(c(61));
          if (n = a.__html, n != null) {
            if (l.children != null) throw Error(c(60));
            u?.__html !== n && (e.innerHTML = n);
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
        n = mi(a), e.setAttributeNS(
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
        Ne("beforetoggle", e), Ne("toggle", e), di(e, "popover", a);
        break;
      case "xlinkActuate":
        Hn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          a
        );
        break;
      case "xlinkArcrole":
        Hn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          a
        );
        break;
      case "xlinkRole":
        Hn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          a
        );
        break;
      case "xlinkShow":
        Hn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          a
        );
        break;
      case "xlinkTitle":
        Hn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          a
        );
        break;
      case "xlinkType":
        Hn(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          a
        );
        break;
      case "xmlBase":
        Hn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          a
        );
        break;
      case "xmlLang":
        Hn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          a
        );
        break;
      case "xmlSpace":
        Hn(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          a
        );
        break;
      case "is":
        di(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N")
          n = Op.get(n) || n, di(e, n, a);
        else return;
    }
    xe = !0;
  }
  function Qs(e, t, n, a, l, u) {
    switch (n) {
      case "style":
        sf(e, a, u);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(c(61));
          if (n = a.__html, n != null) {
            if (l.children != null) throw Error(c(60));
            u?.__html !== n && (e.innerHTML = n);
          }
        }
        break;
      case "children":
        if (typeof a == "string") il(e, a);
        else if (typeof a == "number" || typeof a == "bigint")
          il(e, "" + a);
        else return;
        break;
      case "onScroll":
        a != null && Ne("scroll", e);
        return;
      case "onScrollEnd":
        a != null && Ne("scrollend", e);
        return;
      case "onClick":
        a != null && (e.onclick = An);
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
            if (n[0] === "o" && n[1] === "n" && (l = n.endsWith("Capture"), u = n.slice(2, l ? n.length - 7 : void 0), t = e[zt] || null, t = t != null ? t[n] : null, typeof t == "function" && e.removeEventListener(u, t, l), typeof a == "function")) {
              typeof t != "function" && t !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(u, a, l);
              break e;
            }
            xe = !0, n in e ? e[n] = a : a === !0 ? e.setAttribute(n, "") : di(e, n, a);
          }
        return;
    }
    xe = !0;
  }
  function Tt(e, t, n) {
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
        var a = !1, l = !1, u;
        for (u in n)
          if (n.hasOwnProperty(u)) {
            var s = n[u];
            if (s != null)
              switch (u) {
                case "src":
                  a = !0;
                  break;
                case "srcSet":
                  l = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(c(137, t));
                default:
                  Ie(e, t, u, s, n, null);
              }
          }
        l && Ie(e, t, "srcSet", n.srcSet, n, null), a && Ie(e, t, "src", n.src, n, null);
        return;
      case "input":
        Ne("invalid", e);
        var f = u = s = l = null, m = null, _ = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var U = n[a];
            if (U != null)
              switch (a) {
                case "name":
                  l = U;
                  break;
                case "type":
                  s = U;
                  break;
                case "checked":
                  m = U;
                  break;
                case "defaultChecked":
                  _ = U;
                  break;
                case "value":
                  u = U;
                  break;
                case "defaultValue":
                  f = U;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (U != null)
                    throw Error(c(137, t));
                  break;
                default:
                  Ie(e, t, a, U, n, null);
              }
          }
        lf(
          e,
          u,
          f,
          m,
          _,
          s,
          l,
          !1
        );
        return;
      case "select":
        Ne("invalid", e), a = s = u = null;
        for (l in n)
          if (n.hasOwnProperty(l) && (f = n[l], f != null))
            switch (l) {
              case "value":
                u = f;
                break;
              case "defaultValue":
                s = f;
                break;
              case "multiple":
                a = f;
              default:
                Ie(e, t, l, f, n, null);
            }
        t = u, n = s, e.multiple = !!a, t != null ? ul(e, !!a, t, !1) : n != null && ul(e, !!a, n, !0);
        return;
      case "textarea":
        Ne("invalid", e), u = l = a = null;
        for (s in n)
          if (n.hasOwnProperty(s) && (f = n[s], f != null))
            switch (s) {
              case "value":
                a = f;
                break;
              case "defaultValue":
                l = f;
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
        rf(e, a, l, u);
        return;
      case "option":
        for (m in n)
          n.hasOwnProperty(m) && (a = n[m], a != null) && (m === "selected" ? e.selected = a && typeof a != "function" && typeof a != "symbol" : Ie(e, t, m, a, n, null));
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
        for (a = 0; a < Mu.length; a++)
          Ne(Mu[a], e);
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
          if (n.hasOwnProperty(_) && (a = n[_], a != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, t));
              default:
                Ie(e, t, _, a, n, null);
            }
        return;
      default:
        if (Zr(t)) {
          for (U in n)
            n.hasOwnProperty(U) && (a = n[U], a !== void 0 && Qs(
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
      n.hasOwnProperty(f) && (a = n[f], a != null && Ie(e, t, f, a, n, null));
  }
  var sy = {};
  function oy(e, t, n, a) {
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
        var l = null, u = null, s = null, f = null, m = null, _ = null, U = null;
        for (C in n) {
          var H = n[C];
          if (n.hasOwnProperty(C) && H != null)
            switch (C) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                m = H;
              default:
                a.hasOwnProperty(C) || Ie(e, t, C, null, a, H);
            }
        }
        for (var S in a) {
          var C = a[S];
          if (H = n[S], a.hasOwnProperty(S) && (C != null || H != null))
            switch (S) {
              case "type":
                C !== H && (xe = !0), u = C;
                break;
              case "name":
                C !== H && (xe = !0), l = C;
                break;
              case "checked":
                C !== H && (xe = !0), _ = C;
                break;
              case "defaultChecked":
                C !== H && (xe = !0), U = C;
                break;
              case "value":
                C !== H && (xe = !0), s = C;
                break;
              case "defaultValue":
                C !== H && (xe = !0), f = C;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (C != null)
                  throw Error(c(137, t));
                break;
              default:
                C !== H && Ie(
                  e,
                  t,
                  S,
                  C,
                  a,
                  H
                );
            }
        }
        Qr(
          e,
          s,
          f,
          m,
          _,
          U,
          u,
          l
        );
        return;
      case "select":
        C = s = f = S = null;
        for (u in n)
          if (m = n[u], n.hasOwnProperty(u) && m != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                C = m;
              default:
                a.hasOwnProperty(u) || Ie(
                  e,
                  t,
                  u,
                  null,
                  a,
                  m
                );
            }
        for (l in a)
          if (u = a[l], m = n[l], a.hasOwnProperty(l) && (u != null || m != null))
            switch (l) {
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
                  l,
                  u,
                  a,
                  m
                );
            }
        t = f, n = s, a = C, S != null ? ul(e, !!n, S, !1) : !!a != !!n && (t != null ? ul(e, !!n, t, !0) : ul(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        C = S = null;
        for (f in n)
          if (l = n[f], n.hasOwnProperty(f) && l != null && !a.hasOwnProperty(f))
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ie(e, t, f, null, a, l);
            }
        for (s in a)
          if (l = a[s], u = n[s], a.hasOwnProperty(s) && (l != null || u != null))
            switch (s) {
              case "value":
                l !== u && (xe = !0), S = l;
                break;
              case "defaultValue":
                l !== u && (xe = !0), C = l;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (l != null) throw Error(c(91));
                break;
              default:
                l !== u && Ie(e, t, s, l, a, u);
            }
        uf(e, S, C);
        return;
      case "option":
        for (var k in n)
          S = n[k], n.hasOwnProperty(k) && S != null && !a.hasOwnProperty(k) && (k === "selected" ? e.selected = !1 : Ie(
            e,
            t,
            k,
            null,
            a,
            S
          ));
        for (m in a)
          S = a[m], C = n[m], a.hasOwnProperty(m) && S !== C && (S != null || C != null) && (m === "selected" ? (S !== C && (xe = !0), e.selected = S && typeof S != "function" && typeof S != "symbol") : Ie(
            e,
            t,
            m,
            S,
            a,
            C
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
        for (var ne in n)
          S = n[ne], n.hasOwnProperty(ne) && S != null && !a.hasOwnProperty(ne) && Ie(e, t, ne, null, a, S);
        for (_ in a)
          if (S = a[_], C = n[_], a.hasOwnProperty(_) && S !== C && (S != null || C != null))
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
                  a,
                  C
                );
            }
        return;
      default:
        if (Zr(t)) {
          for (var Te in n)
            S = n[Te], n.hasOwnProperty(Te) && S !== void 0 && !a.hasOwnProperty(Te) && Qs(
              e,
              t,
              Te,
              void 0,
              a,
              S
            );
          for (U in a)
            S = a[U], C = n[U], !a.hasOwnProperty(U) || S === C || S === void 0 && C === void 0 || Qs(
              e,
              t,
              U,
              S,
              a,
              C
            );
          return;
        }
    }
    for (var T in n)
      S = n[T], n.hasOwnProperty(T) && S != null && !a.hasOwnProperty(T) && Ie(e, t, T, null, a, S);
    for (H in a)
      S = a[H], C = n[H], !a.hasOwnProperty(H) || S === C || S == null && C == null || Ie(e, t, H, S, a, C);
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
  function fy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var l = n[a], u = l.transferSize, s = l.initiatorType, f = l.duration;
        if (u && f && vm(s)) {
          for (s = 0, f = l.responseEnd, a += 1; a < n.length; a++) {
            var m = n[a], _ = m.startTime;
            if (_ > f) break;
            var U = m.transferSize, H = m.initiatorType;
            U && vm(H) && (m = m.responseEnd, s += U * (m < f ? 1 : (f - _) / (m - _)));
          }
          if (--a, t += 8 * (u + s) / (l.duration / 1e3), e++, 10 < e) break;
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
  function pm(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function gm(e, t) {
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
  function ym(e, t, n, a) {
    return n = Hu(
      n
    ).createElement(e), n[gt] = a, n[zt] = t, Tt(n, e, t), st(n), n;
  }
  function Js(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var ks = null;
  function dy() {
    var e = window.event;
    return e && e.type === "popstate" ? e === ks ? !1 : (ks = e, !0) : (ks = null, !1);
  }
  var Fs = typeof setTimeout == "function" ? setTimeout : void 0, hy = typeof clearTimeout == "function" ? clearTimeout : void 0, Em = typeof Promise == "function" ? Promise : void 0, bm = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Fs, my = typeof queueMicrotask == "function" ? queueMicrotask : typeof Em < "u" ? function(e) {
    return Em.resolve(null).then(e).catch(vy);
  } : Fs;
  function vy(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ea(e) {
    return e === "head";
  }
  function Sm(e, t) {
    var n = t, a = 0;
    do {
      var l = n.nextSibling;
      if (e.removeChild(n), l && l.nodeType === 8)
        if (n = l.data, n === "/$" || n === "/&") {
          if (a === 0) {
            e.removeChild(l), Yl(t);
            return;
          }
          a--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          a++;
        else if (n === "html")
          lo(
            e.ownerDocument.documentElement
          );
        else if (n === "head") {
          n = e.ownerDocument.head, lo(n);
          for (var u = n.firstChild; u; ) {
            var s = u.nextSibling, f = u.nodeName;
            u[eu] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = s;
          }
        } else
          n === "body" && lo(e.ownerDocument.body);
      n = l;
    } while (n);
    Yl(t);
  }
  function Tm(e, t) {
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
  function Am(e, t, n) {
    if (t = CSS.escape(t) !== t ? "r-" + btoa(t).replace(/=/g, "") : t, e.style.viewTransitionName = t, n != null && (e.style.viewTransitionClass = n), n = getComputedStyle(e), n.display === "inline") {
      if (t = e.getClientRects(), t.length === 1) var a = 1;
      else
        for (var l = a = 0; l < t.length; l++) {
          var u = t[l];
          0 < u.width && 0 < u.height && a++;
        }
      a === 1 && (e = e.style, e.display = t.length === 1 ? "inline-block" : "block", e.marginTop = "-" + n.paddingTop, e.marginBottom = "-" + n.paddingBottom);
    }
  }
  function _m(e, t) {
    e = e.style, t = t.style;
    var n = t != null ? t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null : null;
    e.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = t != null ? t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null : null, e.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), e.display === "inline-block" && (t == null ? e.display = e.margin = "" : (n = t.display, e.display = n == null || typeof n == "boolean" ? "" : n, n = t.margin, n != null ? e.margin = n : (n = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], e.marginTop = n == null || typeof n == "boolean" ? "" : n, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], e.marginBottom = t == null || typeof t == "boolean" ? "" : t)));
  }
  function py(e, t, n) {
    return n = n.ownerDocument.defaultView, {
      rect: e,
      abs: t.position === "absolute" || t.position === "fixed",
      clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
      view: 0 <= e.bottom && 0 <= e.right && e.top <= n.innerHeight && e.left <= n.innerWidth
    };
  }
  function $s(e) {
    var t = e.getBoundingClientRect(), n = getComputedStyle(e);
    return py(t, n, e);
  }
  function gy(e) {
    return e.documentElement.clientHeight;
  }
  function yy(e) {
    this.addEventListener("load", e), this.addEventListener("error", e);
  }
  function Ey(e, t, n, a, l, u, s, f, m) {
    var _ = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var U = _.startViewTransition({
        update: function() {
          var S = _.defaultView, C = S.navigation && S.navigation.transition, k = _.fonts.status;
          a();
          var ne = [];
          if (k === "loaded" && (gy(_), _.fonts.status === "loading" && ne.push(_.fonts.ready)), k = ne.length, e !== null)
            for (var Te = e.suspenseyImages, T = 0, y = 0; y < Te.length; y++) {
              var O = Te[y];
              if (!O.complete) {
                var j = O.getBoundingClientRect();
                if (0 < j.bottom && 0 < j.right && j.top < S.innerHeight && j.left < S.innerWidth) {
                  if (T += Qm(O), T > Ar) {
                    ne.length = k;
                    break;
                  }
                  O = new Promise(
                    yy.bind(O)
                  ), ne.push(O);
                }
              }
            }
          if (0 < ne.length)
            return S = Promise.race([
              Promise.all(ne),
              new Promise(function($) {
                return setTimeout($, 500);
              })
            ]).then(l, l), (C ? Promise.allSettled([C.finished, S]) : S).then(u, u);
          if (l(), C)
            return C.finished.then(
              u,
              u
            );
          u();
        },
        types: n
      });
      _.__reactViewTransition = U;
      var H = [];
      return U.ready.then(
        function() {
          for (var S = _.documentElement.getAnimations({
            subtree: !0
          }), C = 0; C < S.length; C++) {
            var k = S[C], ne = k.effect, Te = ne.pseudoElement;
            if (Te != null && Te.startsWith("::view-transition")) {
              H.push(k), k = ne.getKeyframes();
              for (var T = Te = void 0, y = !0, O = 0; O < k.length; O++) {
                var j = k[O], $ = j.width;
                if (Te === void 0) Te = $;
                else if (Te !== $) {
                  y = !1;
                  break;
                }
                if ($ = j.height, T === void 0) T = $;
                else if (T !== $) {
                  y = !1;
                  break;
                }
                delete j.width, delete j.height, j.transform === "none" && delete j.transform;
              }
              y && Te !== void 0 && T !== void 0 && (ne.setKeyframes(k), y = getComputedStyle(
                ne.target,
                ne.pseudoElement
              ), y.width !== Te || y.height !== T) && (y = k[0], y.width = Te, y.height = T, y = k[k.length - 1], y.width = Te, y.height = T, ne.setKeyframes(k));
            }
          }
          s();
        },
        function(S) {
          _.__reactViewTransition === U && (_.__reactViewTransition = null);
          try {
            typeof S == "object" && S !== null && S.name === "InvalidStateError" && (S.message === "View transition was skipped because document visibility state is hidden." || S.message === "Skipping view transition because document visibility state has become hidden." || S.message === "Skipping view transition because viewport size changed." || S.message === "Transition was aborted because of invalid state") && (S = null), S !== null && m(S);
          } finally {
            a(), l(), s();
          }
        }
      ), U.finished.finally(function() {
        for (var S = 0; S < H.length; S++)
          H[S].cancel();
        _.__reactViewTransition === U && (_.__reactViewTransition = null), f();
      }), U;
    } catch {
      return a(), l(), s(), null;
    }
  }
  function el(e, t) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + e + "(" + t + ")";
  }
  el.prototype.animate = function(e, t) {
    return t = typeof t == "number" ? { duration: t } : ae({}, t), t.pseudoElement = this._selector, this._scope.animate(e, t);
  }, el.prototype.getAnimations = function() {
    for (var e = this._scope, t = this._selector, n = e.getAnimations({ subtree: !0 }), a = [], l = 0; l < n.length; l++) {
      var u = n[l].effect;
      u !== null && u.target === e && u.pseudoElement === t && a.push(n[l]);
    }
    return a;
  }, el.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function Nm(e) {
    return {
      name: e,
      group: new el("group", e),
      imagePair: new el("image-pair", e),
      old: new el("old", e),
      new: new el("new", e)
    };
  }
  function Ft(e) {
    this._fragmentFiber = e, this._observers = this._eventListeners = null;
  }
  Ft.prototype.addEventListener = function(e, t, n) {
    var a = null, l = null;
    if (!(n != null && typeof n != "boolean" && (a = n.signal || null, a !== null && a.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var u = this._eventListeners;
      if (Om(u, e, t, n) === -1) {
        var s = this, f = t;
        n != null && typeof n != "boolean" && n.once === !0 && (f = function(m) {
          s.removeEventListener(
            e,
            t,
            n
          ), typeof t == "function" ? t.call(this, m) : t.handleEvent(m);
        }), a !== null && (l = s.removeEventListener.bind(
          s,
          e,
          t,
          n
        ), a.addEventListener("abort", l, { once: !0 }), l = a.removeEventListener.bind(a, "abort", l)), a = Ll(n), u.push({
          type: e,
          listener: t,
          optionsOrUseCapture: n,
          attachedListener: f,
          cleanup: l
        }), p(
          this._fragmentFiber.child,
          !1,
          by,
          e,
          f,
          a
        );
      }
      this._eventListeners = u;
    }
  };
  function by(e, t, n, a) {
    return x(e).addEventListener(
      t,
      n,
      a
    ), !1;
  }
  Ft.prototype.removeEventListener = function(e, t, n) {
    var a = this._eventListeners;
    if (a !== null && (t = Om(
      a,
      e,
      t,
      n
    ), t !== -1)) {
      var l = a[t];
      n = l.attachedListener;
      var u = l.cleanup;
      l = Ll(l.optionsOrUseCapture), p(
        this._fragmentFiber.child,
        !1,
        Sy,
        e,
        n,
        l
      ), a.splice(t, 1), u !== null && u();
    }
  };
  function Sy(e, t, n, a) {
    return x(e).removeEventListener(
      t,
      n,
      a
    ), !1;
  }
  function Ll(e) {
    return e != null && typeof e != "boolean" && (e.once === !0 || e.signal instanceof AbortSignal) ? { capture: e.capture, passive: e.passive } : e;
  }
  function wm(e) {
    return e == null ? "c=0" : typeof e == "boolean" ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0");
  }
  function Om(e, t, n, a) {
    if (e.length === 0) return -1;
    a = wm(a);
    for (var l = 0; l < e.length; l++) {
      var u = e[l];
      if (u.type === t && u.listener === n && wm(u.optionsOrUseCapture) === a)
        return l;
    }
    return -1;
  }
  Ft.prototype.dispatchEvent = function(e) {
    var t = B(
      this._fragmentFiber
    );
    if (t === null) return !0;
    t = x(t);
    var n = this._eventListeners;
    if (n !== null && 0 < n.length || !e.bubbles) {
      var a = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
      if (n)
        for (var l = 0; l < n.length; l++) {
          var u = n[l];
          a.addEventListener(
            u.type,
            u.attachedListener,
            Ll(u.optionsOrUseCapture)
          );
        }
      if (t.appendChild(a), e = a.dispatchEvent(e), n)
        for (l = 0; l < n.length; l++)
          u = n[l], a.removeEventListener(
            u.type,
            u.attachedListener,
            Ll(u.optionsOrUseCapture)
          );
      return t.removeChild(a), e;
    }
    return t.dispatchEvent(e);
  }, Ft.prototype.focus = function(e) {
    p(
      this._fragmentFiber.child,
      !0,
      Cm,
      e,
      void 0,
      void 0
    );
  };
  function Cm(e, t) {
    return e.tag === 6 ? !1 : (e = x(e), xy(e, t));
  }
  Ft.prototype.focusLast = function(e) {
    var t = [];
    p(
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
    var e = B(
      this._fragmentFiber
    );
    e !== null && (e = x(e), e = Hu(e).activeElement, e !== null && p(
      this._fragmentFiber.child,
      !1,
      Ty,
      e,
      void 0,
      void 0
    ));
  };
  function Ty(e, t) {
    return e.tag === 6 ? !1 : (e = x(e), e === t || e.contains(t) ? (t.blur(), !0) : !1);
  }
  Ft.prototype.observeUsing = function(e) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), p(
      this._fragmentFiber.child,
      !1,
      Ay,
      e,
      void 0,
      void 0
    );
  };
  function Ay(e, t) {
    return e.tag === 6 || (e = x(e), t.observe(e)), !1;
  }
  Ft.prototype.unobserveUsing = function(e) {
    var t = this._observers;
    if (t !== null && t.has(e)) {
      t.delete(e), p(
        this._fragmentFiber.child,
        !1,
        _y,
        e,
        void 0,
        void 0
      );
      for (var n = t = 0; n < bn.length; n++) {
        var a = bn[n];
        a.fragmentInstance === this && a.observer === e ? e.unobserve(a.instance) : bn[t++] = a;
      }
      bn.length = t;
    }
  };
  function _y(e, t) {
    return e.tag === 6 || (e = x(e), t.unobserve(e)), !1;
  }
  var bn = [], Ws = !1;
  function Ny(e, t, n) {
    bn.push({
      fragmentInstance: e,
      observer: t,
      instance: n
    }), Ws || (Ws = !0, My(function() {
      Ws = !1;
      var a = bn;
      bn = [];
      for (var l = 0; l < a.length; l++) {
        var u = a[l];
        u.observer.unobserve(u.instance);
      }
    }));
  }
  Ft.prototype.getClientRects = function() {
    var e = [];
    return p(
      this._fragmentFiber.child,
      !1,
      wy,
      e,
      void 0,
      void 0
    ), e;
  };
  function wy(e, t) {
    if (e.tag === 6) {
      e = e.stateNode;
      var n = e.ownerDocument.createRange();
      n.selectNodeContents(e), t.push.apply(t, n.getClientRects());
    } else
      e = x(e), t.push.apply(t, e.getClientRects());
    return !1;
  }
  Ft.prototype.getRootNode = function(e) {
    var t = B(
      this._fragmentFiber
    );
    return t === null ? this : x(t).getRootNode(e);
  }, Ft.prototype.compareDocumentPosition = function(e) {
    var t = B(
      this._fragmentFiber
    );
    if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var n = [];
    p(
      this._fragmentFiber.child,
      !1,
      Ps,
      n,
      void 0,
      void 0
    );
    var a = x(t);
    if (n.length === 0) {
      if (n = a, z(this._fragmentFiber)) {
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
      return n === e ? l = Node.DOCUMENT_POSITION_CONTAINS : a & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = N(t)[1], n === null ? l = Node.DOCUMENT_POSITION_PRECEDING : (e = x(n).compareDocumentPosition(
        e
      ), l = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), l |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    t = x(n[0]), l = x(n[n.length - 1]);
    var u = z(this._fragmentFiber) ? t.parentElement : a;
    if (u == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    a = u.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, u = u.compareDocumentPosition(l) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var s = t.compareDocumentPosition(e), f = l.compareDocumentPosition(e), m = s & Node.DOCUMENT_POSITION_CONTAINED_BY || f & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return f = a && u && s & Node.DOCUMENT_POSITION_FOLLOWING && f & Node.DOCUMENT_POSITION_PRECEDING, t = a && t === e || u && l === e || m || f ? Node.DOCUMENT_POSITION_CONTAINED_BY : !a && t === e || !u && l === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : s, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Oy(
      t,
      this._fragmentFiber,
      n[0],
      n[n.length - 1],
      e
    ) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function Oy(e, t, n, a, l) {
    var u = xa(l);
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
        return u = l.ownerDocument, l === u || l === u.documentElement || l === u.body;
      e: {
        for (u = t, t = B(t); u !== null; ) {
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
    return e & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!u) && !(t = u === n) && (t = fe(
      n,
      u,
      te
    ), t === null ? t = !1 : (p(
      t,
      !0,
      Q,
      u,
      n
    ), u = Z, Z = null, t = u !== null)), t) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!u) && !(t = u === a) && (t = fe(
      a,
      u,
      te
    ), t === null ? t = !1 : (p(
      t,
      !0,
      X,
      u,
      a
    ), u = Z, ee = Z = null, t = u !== null)), t) : !1;
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
    p(
      this._fragmentFiber.child,
      !1,
      Ps,
      t,
      void 0,
      void 0
    );
    var n = e !== !1;
    if (t.length === 0) {
      var a = N(
        this._fragmentFiber
      );
      if (a = n ? a[1] || a[0] || B(this._fragmentFiber) : a[0] || a[1], a === null) return;
      if (a.tag === 6) {
        e = x(a), Rm(e, n);
        return;
      }
      if (a = x(a), a.nodeType !== 9) {
        if (a.nodeType === 11) {
          n = "host" in a ? a.host : null, n !== null && n.scrollIntoView(e);
          return;
        }
        a.scrollIntoView(e);
      }
    }
    for (a = n ? t.length - 1 : 0; a !== (n ? -1 : t.length); ) {
      var l = t[a];
      l.tag === 6 ? (l = x(l), Rm(l, n)) : x(l).scrollIntoView(e), a += n ? -1 : 1;
    }
  };
  function Cy(e, t) {
    return e = x(e), Um(e, t), !1;
  }
  function Um(e, t) {
    e.reactFragments == null && (e.reactFragments = /* @__PURE__ */ new Set()), e.reactFragments.add(t);
  }
  function Dm(e, t) {
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
    e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(u) {
      for (var s = 0, f = 0; f < bn.length; f++) {
        var m = bn[f];
        (m.fragmentInstance !== t || m.observer !== u || m.instance !== e) && (bn[s++] = m);
      }
      bn.length = s, u.observe(e);
    }), Um(e, t));
  }
  function Ry(e, t) {
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
    e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(u) {
      typeof u.rootMargin == "string" ? Ny(
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
  function Uy(e, t, n, a) {
    for (; e.nodeType === 1; ) {
      var l = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (a) {
        if (!e[eu])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (u = e.getAttribute("rel"), u === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (u !== l.rel || e.getAttribute("href") !== (l.href == null || l.href === "" ? null : l.href) || e.getAttribute("crossorigin") !== (l.crossOrigin == null ? null : l.crossOrigin) || e.getAttribute("title") !== (l.title == null ? null : l.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (u = e.getAttribute("src"), (u !== (l.src == null ? null : l.src) || e.getAttribute("type") !== (l.type == null ? null : l.type) || e.getAttribute("crossorigin") !== (l.crossOrigin == null ? null : l.crossOrigin)) && u && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var u = l.name == null ? null : "" + l.name;
        if (l.type === "hidden" && e.getAttribute("name") === u)
          return e;
      } else return e;
      if (e = rn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function Dy(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = rn(e.nextSibling), e === null)) return null;
    return e;
  }
  function zm(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = rn(e.nextSibling), e === null)) return null;
    return e;
  }
  function to(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function no(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function zy(e, t) {
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
  function rn(e) {
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
  var ao = null;
  function xm(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0)
            return rn(e.nextSibling);
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
  function xy(e, t) {
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
  function My(e) {
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
    for (var a in n) {
      var l = n[a];
      n.hasOwnProperty(a) && l != null && Ie(e, t, a, null, sy, l);
    }
    n.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === An && (e.onclick = null), fi(e);
  }
  function lo(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    fi(e);
  }
  var cn = /* @__PURE__ */ new Map(), Lm = /* @__PURE__ */ new Set();
  function Lu(e) {
    if (typeof e.getRootNode == "function") {
      var t = e.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) return t;
    }
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  var kn = de.d;
  de.d = {
    f: jy,
    r: Hy,
    D: Ly,
    C: qy,
    L: By,
    m: Iy,
    X: Gy,
    S: Vy,
    M: Yy
  };
  function jy() {
    var e = kn.f(), t = mr();
    return e || t;
  }
  function Hy(e) {
    var t = nl(e);
    t !== null && t.tag === 5 && t.type === "form" ? Bd(t) : kn.r(e);
  }
  var ql = typeof document > "u" ? null : document;
  function qm(e, t, n) {
    var a = ql;
    if (a && typeof t == "string" && t) {
      var l = Wt(t);
      l = 'link[rel="' + e + '"][href="' + l + '"]', typeof n == "string" && (l += '[crossorigin="' + n + '"]'), Lm.has(l) || (Lm.add(l), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(l) === null && (t = a.createElement("link"), Tt(t, "link", e), st(t), a.head.appendChild(t)));
    }
  }
  function Ly(e) {
    kn.D(e), qm("dns-prefetch", e, null);
  }
  function qy(e, t) {
    kn.C(e, t), qm("preconnect", e, t);
  }
  function By(e, t, n) {
    kn.L(e, t, n);
    var a = ql;
    if (a && e && t) {
      var l = 'link[rel="preload"][as="' + Wt(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (l += '[imagesrcset="' + Wt(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (l += '[imagesizes="' + Wt(
        n.imageSizes
      ) + '"]')) : l += '[href="' + Wt(e) + '"]';
      var u = l;
      switch (t) {
        case "style":
          u = Bl(e);
          break;
        case "script":
          u = Il(e);
      }
      if (!(cn.has(u) || (e = ae(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), cn.set(u, e), a.querySelector(l) !== null || t === "style" && a.querySelector(qu(u)) || t === "script" && a.querySelector(Bu(u))))) {
        var s = a.createElement("link");
        Tt(s, "link", e), t === "style" && (s[oi] = !0, s.onload = s.onerror = function() {
          Fo(s);
        }), st(s), a.head.appendChild(s);
      }
    }
  }
  function Iy(e, t) {
    kn.m(e, t);
    var n = ql;
    if (n && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", l = 'link[rel="modulepreload"][as="' + Wt(a) + '"][href="' + Wt(e) + '"]', u = l;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Il(e);
      }
      if (!cn.has(u) && (e = ae({ rel: "modulepreload", href: e }, t), cn.set(u, e), n.querySelector(l) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Bu(u)))
              return;
        }
        a = n.createElement("link"), Tt(a, "link", e), st(a), n.head.appendChild(a);
      }
    }
  }
  function Vy(e, t, n) {
    kn.S(e, t, n);
    var a = ql;
    if (a && e) {
      var l = al(a).hoistableStyles, u = Bl(e);
      t = t || "default";
      var s = l.get(u);
      if (!s) {
        var f = { loading: 0, preload: null };
        if (s = a.querySelector(
          qu(u)
        ))
          f.loading = 5;
        else {
          e = ae(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = cn.get(u)) && uo(e, n);
          var m = s = a.createElement("link");
          st(m), Tt(m, "link", e), m._p = new Promise(function(_, U) {
            m.onload = _, m.onerror = U;
          }), m.addEventListener("load", function() {
            f.loading |= 1;
          }), m.addEventListener("error", function() {
            f.loading |= 2;
          }), f.loading |= 4, Sr(s, t, a);
        }
        s = {
          type: "stylesheet",
          instance: s,
          count: 1,
          state: f
        }, l.set(u, s);
      }
    }
  }
  function Gy(e, t) {
    kn.X(e, t);
    var n = ql;
    if (n && e) {
      var a = al(n).hoistableScripts, l = Il(e), u = a.get(l);
      u || (u = n.querySelector(Bu(l)), u || (e = ae({ src: e, async: !0 }, t), (t = cn.get(l)) && io(e, t), u = n.createElement("script"), st(u), Tt(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(l, u));
    }
  }
  function Yy(e, t) {
    kn.M(e, t);
    var n = ql;
    if (n && e) {
      var a = al(n).hoistableScripts, l = Il(e), u = a.get(l);
      u || (u = n.querySelector(Bu(l)), u || (e = ae({ src: e, async: !0, type: "module" }, t), (t = cn.get(l)) && io(e, t), u = n.createElement("script"), st(u), Tt(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(l, u));
    }
  }
  function Bm(e, t, n, a) {
    var l = (l = G.current) ? Lu(l) : null;
    if (!l) throw Error(c(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (n = Bl(n.href), t = al(
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
          var u = al(
            l
          ).hoistableStyles, s = u.get(e);
          if (s || (l = l.ownerDocument || l, s = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, u.set(e, s), (u = l.querySelector(
            qu(e)
          )) ? u._p || (s.instance = u, s.state.loading = 5) : (u = cn.get(e), u || (u = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, cn.set(e, u)), Xy(
            l,
            e,
            u,
            s.state
          ))), t && a === null)
            throw Error(c(528, ""));
          return s;
        }
        if (t && a !== null)
          throw Error(c(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (n = Il(n), t = al(
          l
        ).hoistableScripts, a = t.get(n), a || (a = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, t.set(n, a)), a) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(c(444, e));
    }
  }
  function Bl(e) {
    return 'href="' + Wt(e) + '"';
  }
  function qu(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Im(e) {
    return ae({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Xy(e, t, n, a) {
    if (t = e.querySelector(
      'link[rel="preload"][as="style"][' + t + "]"
    )) {
      if (t[oi] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      t = e.createElement("link"), t[oi] = !0, t.onload = t.onerror = Fo.bind(null, t), Tt(t, "link", n), st(t), e.head.appendChild(t);
    a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    });
  }
  function Il(e) {
    return '[src="' + Wt(e) + '"]';
  }
  function Bu(e) {
    return "script[async]" + e;
  }
  function Vm(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + Wt(n.href) + '"]'
          );
          if (a)
            return t.instance = a, st(a), a;
          var l = ae({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), st(a), Tt(a, "style", l), Sr(a, n.precedence, e), t.instance = a;
        case "stylesheet":
          l = Bl(n.href);
          var u = e.querySelector(
            qu(l)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, st(u), u;
          a = Im(n), (l = cn.get(l)) && uo(a, l), u = (e.ownerDocument || e).createElement("link"), st(u);
          var s = u;
          return s._p = new Promise(function(f, m) {
            s.onload = f, s.onerror = m;
          }), Tt(u, "link", a), t.state.loading |= 4, Sr(u, n.precedence, e), t.instance = u;
        case "script":
          return u = Il(n.src), (l = e.querySelector(
            Bu(u)
          )) ? (t.instance = l, st(l), l) : (a = n, (l = cn.get(u)) && (a = ae({}, n), io(a, l)), e = e.ownerDocument || e, l = e.createElement("script"), st(l), Tt(l, "link", a), e.head.appendChild(l), t.instance = l);
        case "void":
          return null;
        default:
          throw Error(c(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Sr(a, n.precedence, e));
    return t.instance;
  }
  function Sr(e, t, n) {
    for (var a = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), l = a.length ? a[a.length - 1] : null, u = l, s = 0; s < a.length; s++) {
      var f = a[s];
      if (f.dataset.precedence === t) u = f;
      else if (u !== l) break;
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
      var a = /* @__PURE__ */ new Map(), l = Tr = /* @__PURE__ */ new Map();
      l.set(n, a);
    } else
      l = Tr, a = l.get(n), a || (a = /* @__PURE__ */ new Map(), l.set(n, a));
    if (a.has(e)) return a;
    for (a.set(e, null), n = n.getElementsByTagName(e), l = 0; l < n.length; l++) {
      var u = n[l];
      if (!(u[eu] || u[gt] || e === "link" && u.getAttribute("rel") === "stylesheet") && u.namespaceURI !== "http://www.w3.org/2000/svg") {
        var s = u.getAttribute(t) || "";
        s = e + s;
        var f = a.get(s);
        f ? f.push(u) : a.set(s, [u]);
      }
    }
    return a;
  }
  function ro(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function Qy(e, t, n) {
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
    typeof t.decode == "function" && (e.imgCount++, t.complete || (e.imgBytes += Qm(t), e.suspenseyImages.push(t)), e = Jy.bind(e), t.decode().then(e, e));
  }
  function Ky(e, t, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var l = Bl(a.href), u = t.querySelector(
          qu(l)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Iu.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = u, st(u);
          return;
        }
        u = t.ownerDocument || t, a = Im(a), (l = cn.get(l)) && uo(a, l), u = u.createElement("link"), st(u);
        var s = u;
        s._p = new Promise(function(f, m) {
          s.onload = f, s.onerror = m;
        }), Tt(u, "link", a), n.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Iu.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var Ar = 0;
  function Zy(e, t) {
    return e.stylesheets && e.count === 0 && Nr(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && Nr(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Ar === 0 && (Ar = 62500 * fy());
      var l = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && Nr(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > Ar ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(a), clearTimeout(l);
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
  function Jy() {
    this.imgCount--, Zm(this);
  }
  var _r = null;
  function Nr(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, _r = /* @__PURE__ */ new Map(), t.forEach(ky, e), _r = null, Iu.call(e));
  }
  function ky(e, t) {
    if (!(t.state.loading & 4)) {
      var n = _r.get(e);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), _r.set(e, n);
        for (var l = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), u = 0; u < l.length; u++) {
          var s = l[u];
          (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") && (n.set(s.dataset.precedence, s), a = s);
        }
        a && n.set(null, a);
      }
      l = t.instance, s = l.getAttribute("data-precedence"), u = n.get(s) || a, u === a && n.set(null, l), n.set(s, l), this.count++, a = Iu.bind(this), l.addEventListener("load", a), l.addEventListener("error", a), u ? u.parentNode.insertBefore(l, u.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(l, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Vl = {
    $$typeof: I,
    Provider: null,
    Consumer: null,
    _currentValue: $t,
    _currentValue2: $t,
    _threadCount: 0
  };
  function Fy(e, t, n, a, l, u, s, f, m) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Vr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Vr(0), this.hiddenUpdates = Vr(null), this.identifierPrefix = a, this.onUncaughtError = l, this.onCaughtError = u, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Jm(e, t, n, a, l, u, s, f, m, _, U, H) {
    return e = new Fy(
      e,
      t,
      n,
      s,
      m,
      _,
      U,
      H,
      f
    ), t = 1, u === !0 && (t |= 24), u = xt(3, null, null, t), e.current = u, u.stateNode = e, t = Tc(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: t
    }, wc(u), e;
  }
  function km(e) {
    return e ? (e = hl, e) : hl;
  }
  function Fm(e, t, n, a, l, u) {
    l = km(l), a.context === null ? a.context = l : a.pendingContext = l, a = ra(t), a.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (a.callback = u), n = ca(e, a, t), n !== null && (Lt(n, e, t), gu(n, e, t));
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
      var t = La(e, 67108864);
      t !== null && Lt(t, e, 67108864), co(e, 67108864);
    }
  }
  function Wm(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = kt();
      t = Gr(t);
      var n = La(e, t);
      n !== null && Lt(n, e, t), co(e, t);
    }
  }
  var Gl = !0;
  function $y(e, t, n, a) {
    var l = W.T;
    W.T = null;
    var u = de.p;
    try {
      de.p = 2, so(e, t, n, a);
    } finally {
      de.p = u, W.T = l;
    }
  }
  function Py(e, t, n, a) {
    var l = W.T;
    W.T = null;
    var u = de.p;
    try {
      de.p = 8, so(e, t, n, a);
    } finally {
      de.p = u, W.T = l;
    }
  }
  function so(e, t, n, a) {
    if (Gl) {
      var l = oo(a);
      if (l === null)
        Xs(
          e,
          t,
          a,
          wr,
          n
        ), tv(e, a);
      else if (e0(
        l,
        e,
        t,
        n,
        a
      ))
        a.stopPropagation();
      else if (tv(e, a), t & 4 && -1 < Wy.indexOf(e)) {
        for (; l !== null; ) {
          var u = nl(l);
          if (u !== null)
            switch (u.tag) {
              case 3:
                if (u = u.stateNode, u.current.memoizedState.isDehydrated) {
                  var s = za(u.pendingLanes);
                  if (s !== 0) {
                    var f = u;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; s; ) {
                      var m = 1 << 31 - Gt(s);
                      f.entanglements[1] |= m, s &= ~m;
                    }
                    xn(u), (je & 6) === 0 && (fr = It() + 500, xu(0));
                  }
                }
                break;
              case 31:
              case 13:
                f = La(u, 2), f !== null && Lt(f, u, 2), mr(), co(u, 2);
            }
          if (u = oo(a), u === null && Xs(
            e,
            t,
            a,
            wr,
            n
          ), u === l) break;
          l = u;
        }
        l !== null && a.stopPropagation();
      } else
        Xs(
          e,
          t,
          a,
          null,
          n
        );
    }
  }
  function oo(e) {
    return e = kr(e), fo(e);
  }
  var wr = null;
  function fo(e) {
    if (wr = null, e = xa(e), e !== null) {
      var t = h(e);
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
    return wr = e, null;
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
        switch (fp()) {
          case qo:
            return 2;
          case Bo:
            return 8;
          case ui:
          case dp:
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
  var ho = !1, ba = null, Sa = null, Ta = null, Vu = /* @__PURE__ */ new Map(), Gu = /* @__PURE__ */ new Map(), Aa = [], Wy = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function tv(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        ba = null;
        break;
      case "dragenter":
      case "dragleave":
        Sa = null;
        break;
      case "mouseover":
      case "mouseout":
        Ta = null;
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
  function Yu(e, t, n, a, l, u) {
    return e === null || e.nativeEvent !== u ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: a,
      nativeEvent: u,
      targetContainers: [l]
    }, t !== null && (t = nl(t), t !== null && Pm(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function e0(e, t, n, a, l) {
    switch (t) {
      case "focusin":
        return ba = Yu(
          ba,
          e,
          t,
          n,
          a,
          l
        ), !0;
      case "dragenter":
        return Sa = Yu(
          Sa,
          e,
          t,
          n,
          a,
          l
        ), !0;
      case "mouseover":
        return Ta = Yu(
          Ta,
          e,
          t,
          n,
          a,
          l
        ), !0;
      case "pointerover":
        var u = l.pointerId;
        return Vu.set(
          u,
          Yu(
            Vu.get(u) || null,
            e,
            t,
            n,
            a,
            l
          )
        ), !0;
      case "gotpointercapture":
        return u = l.pointerId, Gu.set(
          u,
          Yu(
            Gu.get(u) || null,
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
  function nv(e) {
    var t = xa(e.target);
    if (t !== null) {
      var n = h(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = v(n), t !== null) {
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
  function Or(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = oo(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        Jr = a, n.target.dispatchEvent(a), Jr = null;
      } else
        return t = nl(n), t !== null && Pm(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function av(e, t, n) {
    Or(e) && n.delete(t);
  }
  function t0() {
    ho = !1, ba !== null && Or(ba) && (ba = null), Sa !== null && Or(Sa) && (Sa = null), Ta !== null && Or(Ta) && (Ta = null), Vu.forEach(av), Gu.forEach(av);
  }
  function Cr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, ho || (ho = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      t0
    )));
  }
  var Rr = null;
  function lv(e) {
    Rr !== e && (Rr = e, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        Rr === e && (Rr = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], a = e[t + 1], l = e[t + 2];
          if (typeof a != "function") {
            if (fo(a || n) === null)
              continue;
            break;
          }
          var u = nl(n);
          u !== null && (e.splice(t, 3), t -= 3, Zc(
            u,
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
  function Yl(e) {
    function t(m) {
      return Cr(m, e);
    }
    ba !== null && Cr(ba, e), Sa !== null && Cr(Sa, e), Ta !== null && Cr(Ta, e), Vu.forEach(t), Gu.forEach(t);
    for (var n = 0; n < Aa.length; n++) {
      var a = Aa[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Aa.length && (n = Aa[0], n.blockedOn === null); )
      nv(n), n.blockedOn === null && Aa.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var l = n[a], u = n[a + 1], s = l[zt] || null;
        if (typeof u == "function")
          s || lv(n);
        else if (s) {
          var f = null;
          if (u && u.hasAttribute("formAction")) {
            if (l = u, s = u[zt] || null)
              f = s.formAction;
            else if (fo(l) !== null) continue;
          } else f = s.action;
          typeof f == "function" ? n[a + 1] = f : (n.splice(a, 3), a -= 3), lv(n);
        }
      }
  }
  function uv() {
    function e(u) {
      u.canIntercept && u.info === "react-transition" && u.intercept({
        handler: function() {
          return new Promise(function(s) {
            return l = s;
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
        var u = navigation.currentEntry;
        u && u.url != null && navigation.navigate(u.url, {
          state: u.getState(),
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
  function mo(e) {
    this._internalRoot = e;
  }
  Ur.prototype.render = mo.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(c(409));
    var n = t.current, a = kt();
    Fm(n, a, e, t, null, null);
  }, Ur.prototype.unmount = mo.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Fm(e.current, 2, null, e, null, null), mr(), t[tl] = null;
    }
  };
  function Ur(e) {
    this._internalRoot = e;
  }
  Ur.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Ko();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Aa.length && t !== 0 && t < Aa[n].priority; n++) ;
      Aa.splice(n, 0, e), n === 0 && nv(e);
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
  de.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","), Error(c(268, e)));
    return e = w(t), e = e !== null ? D(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var n0 = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: W,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Dr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Dr.isDisabled && Dr.supportsFiber)
      try {
        $l = Dr.inject(
          n0
        ), Vt = Dr;
      } catch {
      }
  }
  return Qu.createRoot = function(e, t) {
    if (!d(e)) throw Error(c(299));
    var n = !1, a = "", l = kd, u = Fd, s = $d;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (l = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = Jm(
      e,
      1,
      !1,
      null,
      null,
      n,
      a,
      null,
      l,
      u,
      s,
      uv
    ), e[tl] = t.current, Ys(e), new mo(t);
  }, Qu.hydrateRoot = function(e, t, n) {
    if (!d(e)) throw Error(c(299));
    var a = !1, l = "", u = kd, s = Fd, f = $d, m = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (s = n.onCaughtError), n.onRecoverableError !== void 0 && (f = n.onRecoverableError), n.formState !== void 0 && (m = n.formState)), t = Jm(
      e,
      1,
      !0,
      t,
      n ?? null,
      a,
      l,
      m,
      u,
      s,
      f,
      uv
    ), t.context = km(null), n = t.current, a = kt(), a = Gr(a), l = ra(a), l.callback = null, ca(n, l, a), n = a, t.current.lanes = n, Wl(t, n), xn(t), e[tl] = t.current, Ys(e), new Ur(t);
  }, Qu.version = "19.3.0", Qu;
}
var pv;
function d0() {
  if (pv) return go.exports;
  pv = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (r) {
        console.error(r);
      }
  }
  return i(), go.exports = f0(), go.exports;
}
var h0 = d0();
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
var m0 = 600, v0 = 120, p0 = 4e3, jv = 20, gv = 4096, yv = 1e4, g0 = /* @__PURE__ */ new Set(["scroll_element", "click_sequence", "drag_element", "press_key"]), y0 = /* @__PURE__ */ new Set([
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
]), Hv = "hana-ui-", E0 = 512, b0 = 1, Ev = /* @__PURE__ */ new WeakMap(), jr = /* @__PURE__ */ new WeakMap();
function Ql(i) {
  return typeof i == "object" && i !== null && !Array.isArray(i);
}
function Lr(i) {
  return i.nodeType === 9;
}
function zo(i) {
  return Lr(i) ? i : i.ownerDocument;
}
function S0(i) {
  return Lr(i) ? i.body : i;
}
function Lv(i, r) {
  return r.isConnected && (Lr(i) ? r.ownerDocument === i : i.contains(r));
}
function kl(i) {
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
function T0(i) {
  const r = i.ownerDocument.defaultView?.HTMLSelectElement;
  return r ? i instanceof r : i.tagName === "SELECT";
}
function A0(i) {
  const r = i.ownerDocument.defaultView?.HTMLAnchorElement;
  return r ? i instanceof r : i.tagName === "A";
}
function Bv(i) {
  if (!kl(i)) return !0;
  const r = i.ownerDocument.defaultView?.getComputedStyle(i);
  return !r || r.display !== "none" && r.visibility !== "hidden";
}
function _0(i) {
  return kl(i) ? ti(i) || xo(i) || qv(i) || T0(i) || A0(i) || i.hasAttribute("contenteditable") || i.hasAttribute("onclick") || ["button", "switch", "textbox", "combobox", "slider", "checkbox", "link"].includes(i.getAttribute("role") ?? "") : !1;
}
function N0(i) {
  const r = i.ownerDocument;
  let o = Ev.get(r);
  o || (o = /* @__PURE__ */ new WeakMap(), Ev.set(r, o));
  const c = o.get(i), d = jr.get(r);
  if (c && d?.has(c)) return c;
  let h = c;
  if (!h)
    do
      h = `${Hv}${b0++}`;
    while (r.getElementById(h));
  o.set(i, h);
  let v = jr.get(r);
  if (v || (v = /* @__PURE__ */ new Map(), jr.set(r, v)), v.size >= E0) {
    const b = v.keys().next().value;
    b && v.delete(b);
  }
  return v.set(h, new WeakRef(i)), h;
}
function w0(i, r) {
  const o = i, c = { tagName: i.tagName.toLowerCase() };
  typeof o.id == "string" && o.id && (c.id = o.id.slice(0, 80)), typeof o.className == "string" && o.className.trim() && (c.className = o.className.trim().slice(0, 120));
  const d = o.textContent?.trim();
  return d && (c.text = d.slice(0, 160)), (ti(i) || xo(i)) && (i.disabled && (c.disabled = !0), i.type && (c.type = i.type)), o.id ? c.elementId = o.id : r && _0(i) && (c.elementId = N0(i)), c;
}
function O0(i, r) {
  const o = [], c = S0(i);
  if (!c) return { outline: o, visibleNodeCount: 0, totalNodeCount: 0, truncated: !1 };
  const d = zo(i).createTreeWalker(c, 1);
  let h = d.currentNode, v = 0, b = 0;
  for (; h && b < m0; ) {
    if (h.nodeType === 1) {
      const R = h;
      b += 1, Bv(R) && (v += 1, o.length < v0 && o.push(w0(R, r)));
    }
    h = d.nextNode();
  }
  return { outline: o, visibleNodeCount: v, totalNodeCount: b, truncated: h !== null };
}
function Co(i, r, o = !1) {
  if (typeof r != "string" || !r.trim()) return null;
  const c = r.trim(), d = zo(i), h = c.startsWith(Hv) ? jr.get(d)?.get(c)?.deref() ?? null : d.getElementById(c);
  return h && Lv(i, h) && (!o || Bv(h)) ? h : null;
}
function Iv(i) {
  return kl(i) ? ti(i) && (i.type === "file" || i.disabled) ? { ok: !1, error: "This element cannot be clicked." } : qv(i) && i.disabled ? { ok: !1, error: "This element cannot be clicked." } : (i.click(), { ok: !0 }) : { ok: !1, error: "Target is not an element." };
}
function bv(i, r) {
  const o = ti(i) ? i.ownerDocument.defaultView?.HTMLInputElement.prototype : i.ownerDocument.defaultView?.HTMLTextAreaElement.prototype, c = o && Object.getOwnPropertyDescriptor(o, "value")?.set;
  c ? c.call(i, r) : i.value = r;
}
function C0(i, r, o) {
  const c = typeof r == "string" ? r.slice(0, p0) : "";
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
  return o && kl(o) ? o : null;
}
function Hr(i, r) {
  return typeof i == "number" && Number.isFinite(i) && Math.abs(i) <= r ? i : null;
}
function R0(i, r) {
  const o = r.scrollX === void 0 ? 0 : Hr(r.scrollX, yv), c = r.scrollY === void 0 ? 0 : Hr(r.scrollY, yv);
  if (o === null || c === null || o === 0 && c === 0) return { ok: !1, code: "UI_ACTION_SCROLL_INVALID", error: "scroll_element requires bounded non-zero scroll coordinates." };
  const d = r.elementId === void 0 ? Lr(i) ? i.scrollingElement ?? i.documentElement : i : $u(i, r.elementId);
  return !d || !kl(d) ? { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No visible element matches this elementId." } : (d.scrollLeft += o, d.scrollTop += c, d.dispatchEvent(new Event("scroll", { bubbles: !1 })), { ok: !0, result: { scrollLeft: d.scrollLeft, scrollTop: d.scrollTop } });
}
function U0(i) {
  const r = Array.isArray(i.steps) ? i.steps : i.elementIds;
  if (!Array.isArray(r) || r.length < 1 || r.length > jv) return null;
  const o = r.map((c) => {
    if (typeof c == "string") return c.trim();
    if (!Ql(c)) return "";
    const d = typeof c.elementId == "string" ? c.elementId.trim() : "", h = Array.isArray(c.elementIds) && c.elementIds.length === 1 && typeof c.elementIds[0] == "string" ? c.elementIds[0].trim() : "";
    return d || h;
  });
  return o.every(Boolean) ? o : null;
}
function D0(i, r) {
  const o = U0(r);
  if (!o) return { ok: !1, code: "UI_ACTION_SEQUENCE_INVALID", error: "click_sequence requires one to twenty element IDs." };
  let c = 0;
  for (const [d, h] of o.entries()) {
    const v = $u(i, h);
    if (!v) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: `Sequence target ${d + 1} is unavailable.`, result: { completedCount: c, failedIndex: d } };
    const b = Iv(v);
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
  const h = i.ownerDocument.defaultView, v = h?.PointerEvent ?? h?.MouseEvent ?? MouseEvent;
  i.dispatchEvent(new v(r, { bubbles: !0, cancelable: !0, clientX: o, clientY: c, buttons: d }));
}
function z0(i, r) {
  const o = $u(i, r.elementId);
  if (!o) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No visible source element matches this elementId." };
  const c = r.deltaX === void 0 ? 0 : Hr(r.deltaX, gv), d = r.deltaY === void 0 ? 0 : Hr(r.deltaY, gv);
  if (c === null || d === null) return { ok: !1, code: "UI_ACTION_DRAG_INVALID", error: "drag_element coordinates must be finite and bounded." };
  const h = r.targetElementId === void 0 ? null : $u(i, r.targetElementId);
  if (r.targetElementId !== void 0 && !h) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No visible target element matches targetElementId." };
  if (!h && c === 0 && d === 0) return { ok: !1, code: "UI_ACTION_DRAG_TARGET_REQUIRED", error: "drag_element requires a target element or non-zero delta." };
  const v = o.getBoundingClientRect(), b = v.left + v.width / 2, R = v.top + v.height / 2, w = h?.getBoundingClientRect(), D = w ? w.left + w.width / 2 : b + c, p = w ? w.top + w.height / 2 : R + d, B = h ?? o;
  To(o, "pointerdown", b, R, 1), So(o, "mousedown", b, R, 1);
  for (const z of [0.25, 0.5, 0.75]) {
    const N = b + (D - b) * z, Y = R + (p - R) * z;
    To(B, "pointermove", N, Y, 1), So(B, "mousemove", N, Y, 1);
  }
  return To(B, "pointerup", D, p, 0), So(B, "mouseup", D, p, 0), { ok: !0, result: { dragged: !0, endX: D, endY: p } };
}
function x0(i, r) {
  const o = r.key === void 0 ? r.keys : [r.key];
  if (!Array.isArray(o) || o.length < 1 || o.length > jv || o.some((R) => typeof R != "string")) return { ok: !1, code: "UI_ACTION_KEY_INVALID", error: "press_key requires supported key names or single characters." };
  const c = o.map((R) => R.trim());
  if (c.some((R) => !(R.length === 1 || y0.has(R)))) return { ok: !1, code: "UI_ACTION_KEY_INVALID", error: "press_key requires supported key names or single characters." };
  const d = zo(i).activeElement, h = r.elementId === void 0 ? d && Lv(i, d) && kl(d) ? d : null : $u(i, r.elementId);
  if (!h) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No focused visible element is available for press_key." };
  r.elementId !== void 0 && h.focus();
  const v = h.ownerDocument.defaultView?.KeyboardEvent ?? KeyboardEvent, b = { ctrlKey: r.ctrlKey === !0, metaKey: r.metaKey === !0, altKey: r.altKey === !0, shiftKey: r.shiftKey === !0 };
  for (const R of c)
    h.dispatchEvent(new v("keydown", { bubbles: !0, cancelable: !0, key: R, ...b })), h.dispatchEvent(new v("keyup", { bubbles: !0, cancelable: !0, key: R, ...b }));
  return { ok: !0, result: { pressedKeys: c } };
}
function Vv(i, r, o = !1) {
  const c = Ql(r) && typeof r.action == "string" ? r.action : "";
  if (c === "describe_dom") return { ok: !0, result: O0(i, o) };
  if (c === "read_state") return { ok: !0, result: { state: {} } };
  if (c === "click_element") {
    const d = Co(i, Ql(r) ? r.elementId : null, o);
    if (!d) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No element matches this elementId." };
    const h = Iv(d);
    return h.ok === !0 ? { ok: !0, result: { clicked: !0 } } : { ok: !1, code: "UI_ACTION_ELEMENT_NOT_OPERABLE", error: h.error };
  }
  if (c === "type_text") {
    const d = Co(i, Ql(r) ? r.elementId : null, o);
    if (!d) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No element matches this elementId." };
    const h = C0(d, Ql(r) ? r.text : "", o);
    return h.ok === !0 ? { ok: !0, result: { typed: !0 } } : { ok: !1, code: "UI_ACTION_ELEMENT_NOT_OPERABLE", error: h.error };
  }
  return g0.has(c) && !o ? { ok: !1, code: "UI_ACTION_UNSUPPORTED_FOR_APP_CARD", error: `App cards do not support ${c}.` } : Ql(r) ? c === "scroll_element" ? R0(i, r) : c === "click_sequence" ? D0(i, r) : c === "drag_element" ? z0(i, r) : c === "press_key" ? x0(i, r) : { ok: !1, code: "UI_ACTION_UNKNOWN_ACTION", error: `Unknown UI action: ${c || "(missing)"}.` } : { ok: !1, code: "UI_ACTION_UNKNOWN_ACTION", error: `Unknown UI action: ${c || "(missing)"}.` };
}
var ut = "hana.plugin.ui", it = 1, M0 = "X-Hana-App-Surface-Session", j0 = "appSurfaceSession", Ju = {
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
}, Xl = {
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
}, H0 = {
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
function L0(i) {
  if (!Tn(i) || Object.keys(i).length !== 1 || !Array.isArray(i.regions))
    return { ok: !1, error: "hana.surface.setInteractiveRegions requires exactly one regions array." };
  if (i.regions.length > 64)
    return { ok: !1, error: "hana.surface.setInteractiveRegions accepts at most 64 regions." };
  const r = [];
  for (const o of i.regions) {
    if (!Tn(o) || Object.keys(o).length !== 4)
      return { ok: !1, error: "Each interactive region must contain exactly x, y, width, and height." };
    const { x: c, y: d, width: h, height: v } = o;
    if (typeof c != "number" || typeof d != "number" || typeof h != "number" || typeof v != "number" || !Number.isFinite(c) || !Number.isFinite(d) || !Number.isFinite(h) || !Number.isFinite(v))
      return { ok: !1, error: "Interactive region coordinates must be finite numbers." };
    if (h <= 0 || v <= 0 || Math.abs(c) > 1e6 || Math.abs(d) > 1e6 || Math.abs(h) > 1e6 || Math.abs(v) > 1e6)
      return { ok: !1, error: "Interactive region bounds are invalid." };
    r.push({ x: c, y: d, width: h, height: v });
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
}, Fn = {
  /** No trusted, ready App card view owns this surface (settings / function panel / v1 / preview / not ready / no binding yet). */
  UNAVAILABLE: "APP_CHROME_UNAVAILABLE",
  /** The write carries no token, or one from a view the host has already replaced. */
  VIEW_STALE: "APP_CHROME_VIEW_STALE",
  BAD_PAYLOAD: "APP_CHROME_BAD_PAYLOAD",
  /** The App has no onAction handler for this request. */
  ACTION_UNHANDLED: "APP_CHROME_ACTION_UNHANDLED",
  /** The App's onAction handler threw or answered with something unusable. */
  ACTION_FAILED: "APP_CHROME_ACTION_FAILED"
}, q0 = 128;
function ni(i) {
  if (typeof i != "string" || i.length === 0 || i.length > q0)
    return !1;
  for (let r = 0; r < i.length; r += 1) {
    const o = i.charCodeAt(r);
    if (o <= 31 || o === 127)
      return !1;
  }
  return !0;
}
function B0(i) {
  return !Tn(i) || !ni(i.viewToken) ? { ok: !1, error: "A chrome binding requires a host-minted view token." } : i.resync !== void 0 && typeof i.resync != "boolean" ? { ok: !1, error: "A chrome binding resync flag must be a boolean when present." } : { ok: !0, value: { viewToken: i.viewToken, ...i.resync === void 0 ? {} : { resync: i.resync } } };
}
function I0(i) {
  return !Tn(i) || !ni(i.challengeId) ? { ok: !1, error: "A chrome challenge requires a host-minted challenge id." } : { ok: !0, value: { challengeId: i.challengeId } };
}
function V0(i) {
  return Tn(i) ? typeof i.requestId != "string" || i.requestId === "" ? { ok: !1, error: "App chrome action identity requires a non-empty requestId." } : !Number.isSafeInteger(i.revision) || i.revision <= 0 ? { ok: !1, error: "App chrome action identity requires a positive revision." } : !Number.isSafeInteger(i.generation) || i.generation <= 0 ? { ok: !1, error: "App chrome action identity requires a positive generation." } : ni(i.viewToken) ? {
    ok: !0,
    value: {
      requestId: i.requestId,
      revision: i.revision,
      generation: i.generation,
      viewToken: i.viewToken
    }
  } : { ok: !1, error: "App chrome action identity requires the view token." } : { ok: !1, error: "App chrome action identity must be an object." };
}
function G0(i) {
  if (!Tn(i))
    return { ok: !1, error: "App chrome action request must be an object." };
  const r = i.kind;
  if (r !== "action" && r !== "tab-select" && r !== "tab-close")
    return { ok: !1, error: 'App chrome action request kind must be "action", "tab-select" or "tab-close".' };
  const o = V0(i);
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
}, Y0 = 256;
function Pu(i) {
  if (typeof i != "string" || i.length === 0 || i.length > Y0 || i.trim().length === 0)
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
  return !Tn(i) || !Mo(i, ["viewKind", "revision", "state"]) ? { ok: !1, error: "App view-state snapshot must carry exactly viewKind, revision and state." } : i.viewKind !== "compact" && i.viewKind !== "detached" ? { ok: !1, error: 'App view-state snapshot kind must be "compact" or "detached".' } : !Number.isSafeInteger(i.revision) || i.revision < 0 ? { ok: !1, error: "App view-state snapshot revision must be a non-negative safe integer." } : i.state === void 0 ? { ok: !1, error: "App view-state snapshot requires a state object or an explicit null." } : i.revision === 0 && i.state !== null ? { ok: !1, error: "App view-state revision 0 only carries a null state." } : { ok: !0, value: { viewKind: i.viewKind, revision: i.revision, state: i.state } };
}
function _o(i) {
  return !Tn(i) || !Mo(i, ["viewToken", "bindingId", "registrationId", "snapshot"]) ? { ok: !1, error: "App view-state reply must echo exactly a view token, namespace binding id, registration id and snapshot." } : ni(i.viewToken) ? Pu(i.bindingId) ? Pu(i.registrationId) ? {
    ok: !0,
    value: { viewToken: i.viewToken, bindingId: i.bindingId, registrationId: i.registrationId, snapshot: i.snapshot }
  } : { ok: !1, error: "App view-state reply requires an opaque registration id." } : { ok: !1, error: "App view-state reply requires an opaque namespace binding id." } : { ok: !1, error: "App view-state reply requires the host-minted view token." };
}
function Zu(i, r) {
  return i.viewToken !== r.viewToken || i.bindingId !== r.bindingId ? !1 : r.registrationId === void 0 ? !0 : i.registrationId === r.registrationId;
}
function Av(i) {
  return !Tn(i) || !Mo(i, ["viewToken", "bindingId", "registrationId", "released"]) ? { ok: !1, error: "App view-state release reply must echo exactly a view token, namespace binding id, registration id and a boolean released flag." } : ni(i.viewToken) ? Pu(i.bindingId) ? Pu(i.registrationId) ? typeof i.released != "boolean" ? { ok: !1, error: "App view-state release reply requires a boolean released flag." } : { ok: !0, value: { viewToken: i.viewToken, bindingId: i.bindingId, registrationId: i.registrationId, released: i.released } } : { ok: !1, error: "App view-state release reply requires an opaque registration id." } : { ok: !1, error: "App view-state release reply requires an opaque namespace binding id." } : { ok: !1, error: "App view-state release reply requires the host-minted view token." };
}
var X0 = /^\/api\/apps\/([^/]+)\/ui(?:\/|$)/, Q0 = /^\/api\/apps\/([^/]+)\/routes\/_runtime\/([^/]+)\/_surface\/([^/]+)\//;
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
  const r = Q0.exec(i);
  if (r) {
    const c = xr(r[1]), d = xr(r[2]), h = xr(r[3]);
    return c === null || d === null || h === null ? null : { appId: c, kind: "runtime" };
  }
  const o = X0.exec(i);
  if (o) {
    const c = xr(o[1]);
    return c === null ? null : { appId: c, kind: "ui" };
  }
  return null;
}
var K0 = 256;
function Xv(i) {
  if (i !== void 0)
    return typeof i != "string" || i.length === 0 || i.length > K0 || i.includes("\0") || i.trim().length === 0 ? null : i;
}
var Z0 = {
  CONTEXT: "hana.surface.context"
}, J0 = /* @__PURE__ */ new Set([
  "event",
  "request",
  "response",
  "error"
]);
function Tn(i) {
  return typeof i == "object" && i !== null;
}
function Na(i) {
  return {
    ok: !1,
    error: {
      code: Gv.BAD_MESSAGE,
      message: i
    }
  };
}
function ku(i) {
  if (!Tn(i))
    return Na("Plugin UI messages must be objects.");
  if (i.protocol !== ut)
    return Na("Plugin UI message protocol is missing or invalid.");
  if (i.version !== it)
    return {
      ok: !1,
      error: {
        code: Gv.UNSUPPORTED_VERSION,
        message: `Unsupported Plugin UI protocol version: ${String(i.version)}.`
      }
    };
  if (typeof i.kind != "string" || !J0.has(i.kind))
    return Na("Plugin UI message kind is missing or invalid.");
  if (typeof i.type != "string" || i.type.trim() === "")
    return Na("Plugin UI message type must be a non-empty string.");
  const r = i.kind;
  if (r !== "event" && (typeof i.id != "string" || i.id.trim() === ""))
    return Na(`Plugin UI ${r} messages must include a non-empty id.`);
  if (r === "error") {
    if (!Tn(i.error))
      return Na("Plugin UI error messages must include an error object.");
    if (typeof i.error.code != "string" || i.error.code.trim() === "")
      return Na("Plugin UI error code must be a non-empty string.");
    if (typeof i.error.message != "string" || i.error.message.trim() === "")
      return Na("Plugin UI error message must be a non-empty string.");
  }
  return {
    ok: !0,
    value: i
  };
}
var k0 = [
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
], F0 = [
  "cards",
  "agentTypes",
  "configuration",
  "settingsTab",
  "page",
  "widget"
], $0 = [
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
], P0 = ["restricted", "full-access"];
new Set(k0);
new Set(F0);
new Set($0);
new Set(P0);
var W0 = Object.values(De);
new Set(W0);
var Fu = class extends Error {
  reason;
  constructor(i, r) {
    super(r), this.name = "AppCurrentViewBindingError", this.reason = i;
  }
};
function eE() {
  return `chrome-doc:${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`;
}
function tE(i) {
  return JSON.stringify([i.appId, i.cardInstanceId ?? null, i.instanceKey ?? null]);
}
function nE(i) {
  const r = eE();
  let o = null, c = !1, d, h = !0;
  const v = /* @__PURE__ */ new Set(), b = /* @__PURE__ */ new Set();
  let R = 0;
  const w = () => {
    R += 1;
  }, D = (X) => new Fu("unavailable", X), p = () => new Fu(
    "identity-changed",
    "The current App card identity changed while this view write waited."
  ), B = () => new Fu(
    "token-stale",
    "The held view token is no longer the current document."
  ), z = (X) => {
    v.delete(X), i.targetWindow.clearTimeout(X.timer), X.signal && X.onAbort && X.signal.removeEventListener("abort", X.onAbort);
  }, N = (X, te) => {
    z(X), X.reject(te);
  }, Y = (X, te) => {
    const fe = o !== X, ae = h;
    o = X, h = !0, (fe || !ae) && w();
    for (const Ve of [...v]) {
      if (z(Ve), Ve.identity !== void 0 && Ve.identity !== d) {
        Ve.reject(p());
        continue;
      }
      Ve.resolve(X);
    }
    if (b.size === 0) return;
    const me = { changed: fe, resync: te }, We = R;
    for (const Ve of [...b]) {
      if (c || We !== R) return;
      b.has(Ve) && Ve.listener(me);
    }
  };
  return {
    handleHostMessage: (X) => {
      const te = X.type === Zl.CHALLENGE, fe = X.type === Zl.BINDING;
      if (!te && !fe) return !1;
      if (c) return !0;
      if (te && X.kind === "event") {
        const ae = I0(X.payload);
        return ae.ok === !0 && (i.post({
          protocol: ut,
          version: it,
          kind: "event",
          type: Zl.ACK,
          payload: { challengeId: ae.value.challengeId, documentNonce: r }
        }), c || i.reannounceReady?.()), !0;
      }
      if (fe && X.kind === "event") {
        const ae = B0(X.payload);
        return ae.ok === !0 && Y(ae.value.viewToken, ae.value.resync === !0), !0;
      }
      return !0;
    },
    applySurfaceContext: (X) => {
      if (c) return;
      if (X === null) {
        if (!h) return;
        h = !1, w();
        return;
      }
      const te = tE(X);
      if (d !== te) {
        if (d !== void 0) {
          for (const fe of [...v]) N(fe, p());
          o = null;
        }
        d = te, w();
      }
    },
    currentToken() {
      return !c && h ? o : null;
    },
    waitForToken: (X, te) => c ? Promise.reject(D("The current App card view binding was released.")) : te?.aborted ? Promise.reject(D("The current App card view wait was aborted.")) : o && h ? Promise.resolve(o) : new Promise((fe, ae) => {
      const me = {
        resolve: fe,
        reject: ae,
        identity: d,
        timer: i.targetWindow.setTimeout(() => {
          z(me), ae(D("The host has not bound this App card view; the current view is unavailable here."));
        }, X)
      };
      te && (me.signal = te, me.onAbort = () => N(me, D("The current App card view wait was aborted.")), te.addEventListener("abort", me.onAbort)), v.add(me);
    }),
    assertCurrentToken: (X) => {
      if (c) throw D("The current App card view binding was released.");
      if (!h || !o)
        throw D("The current App card view is not writable here right now.");
      if (o !== X) throw B();
    },
    onBinding(X) {
      if (c) return () => {
      };
      const te = { listener: X };
      return b.add(te), () => {
        b.delete(te);
      };
    },
    dispose() {
      if (!c) {
        c = !0, o = null, h = !1;
        for (const X of [...v])
          N(X, D("The current App card view binding was released."));
        v.clear(), b.clear();
      }
    }
  };
}
function aE(i, r) {
  let o = null, c = 0;
  const d = (v) => {
    const b = i();
    b && r({
      protocol: ut,
      version: it,
      kind: "event",
      type: Zl.SCROLL,
      payload: { scrolled: v, viewToken: b }
    });
  }, h = (v) => {
    const b = o;
    b && (o = null, b.detach(), v && b.scrolled && d(!1));
  };
  return {
    register(v) {
      if (!v || typeof v.scrollTop != "number" || typeof v.addEventListener != "function")
        throw new TypeError("hana.chrome.registerScrollSource requires an element.");
      h(!0);
      const b = ++c, R = v.ownerDocument?.defaultView, w = { generation: b, scrolled: v.scrollTop > 0, detach: () => {
      } }, D = () => {
        if (!o || o.generation !== b) return;
        const z = v.scrollTop > 0;
        z !== o.scrolled && (o.scrolled = z, d(z));
      };
      v.addEventListener("scroll", D, { passive: !0 });
      const p = R?.ResizeObserver, B = p ? new p(D) : null;
      return B?.observe(v), w.detach = () => {
        v.removeEventListener("scroll", D), B?.disconnect();
      }, o = w, w.scrolled && d(!0), () => {
        if (!o || o.generation !== b) return;
        const z = o;
        o = null, z.detach(), z.scrolled && d(!1);
      };
    },
    /** The host bound this document (or re-bound it): report the real state. */
    flush() {
      o?.scrolled && d(!0);
    },
    dispose: () => h(!1)
  };
}
function lE(i) {
  const r = { requestId: i.requestId, revision: i.revision };
  return i.kind === "action" ? { ...r, kind: "action", actionId: i.actionId } : i.kind === "tab-select" ? { ...r, kind: "tab-select", tabId: i.tabId } : { ...r, kind: "tab-close", tabId: i.tabId };
}
var uE = 1e4;
function iE(i) {
  const r = i.requestTimeoutMs ?? uE, o = i.currentView;
  let c = !1, d = null;
  const h = new AbortController(), v = aE(() => c ? null : o.currentToken(), i.post), b = o.onBinding((x) => {
    c || (x.changed || x.resync) && v.flush();
  }), R = () => Object.assign(
    new Error("The App card business identity changed; this chrome write is stale."),
    { code: Fn.VIEW_STALE }
  ), w = () => Object.assign(
    new Error("The host has not bound this App card view; chrome is unavailable here."),
    { code: Fn.UNAVAILABLE }
  ), D = () => Object.assign(
    new Error("The App chrome view was released."),
    { code: Fn.UNAVAILABLE }
  ), p = (x) => x instanceof Fu ? x.reason === "unavailable" ? w() : R() : x, B = (x, Z) => {
    i.post({
      protocol: ut,
      version: it,
      id: x.id,
      type: x.type,
      ...Z
    });
  }, z = (x) => {
    if (x.type !== Zl.ACTION) return !1;
    if (c) return !0;
    if (x.kind !== "request") return !1;
    const Z = G0(x.payload);
    if (Z.ok === !1)
      return B(x, { kind: "error", error: { code: Fn.BAD_PAYLOAD, message: Z.error } }), !0;
    const ee = Z.value, Q = {
      requestId: ee.requestId,
      revision: ee.revision,
      generation: ee.generation,
      viewToken: ee.viewToken
    }, X = d;
    if (!X)
      return B(x, {
        kind: "error",
        payload: Q,
        error: { code: Fn.ACTION_UNHANDLED, message: "This App has no chrome action handler." }
      }), !0;
    if (ee.viewToken !== o.currentToken())
      return B(x, {
        kind: "error",
        payload: Q,
        error: { code: Fn.VIEW_STALE, message: "This chrome action belongs to a replaced view." }
      }), !0;
    const te = () => !c && d === X && ee.viewToken === o.currentToken();
    return Promise.resolve().then(async () => {
      if (!te()) {
        B(x, {
          kind: "error",
          payload: Q,
          error: { code: Fn.VIEW_STALE, message: "This chrome action belongs to a replaced view." }
        });
        return;
      }
      let fe;
      try {
        fe = await X.fn(lE(ee));
      } catch (ae) {
        if (!te()) return;
        B(x, {
          kind: "error",
          payload: Q,
          error: {
            code: Fn.ACTION_FAILED,
            message: ae instanceof Error ? ae.message : "The App chrome action handler failed."
          }
        });
        return;
      }
      te() && B(x, {
        kind: "response",
        payload: {
          ...Q,
          status: fe && fe.status === "rejected" ? "rejected" : "handled",
          ...fe && typeof fe.message == "string" && fe.message ? { message: fe.message } : {}
        }
      });
    }), !0;
  }, N = () => v.dispose();
  i.targetWindow.addEventListener("pagehide", N);
  const Y = (x) => {
    if (c)
      throw Object.assign(new Error(`The App chrome view was released; ${x} is unavailable.`), { code: Fn.UNAVAILABLE });
  };
  return {
    api: {
      set(x, Z) {
        const ee = Z?.timeoutMs ?? r;
        return o.waitForToken(ee, h.signal).then(
          (Q) => {
            Y("hana.chrome.set");
            try {
              o.assertCurrentToken(Q);
            } catch (X) {
              throw p(X);
            }
            return i.request(Zl.SET, { description: x, viewToken: Q }, { timeoutMs: ee });
          },
          (Q) => {
            throw c ? D() : p(Q);
          }
        );
      },
      onAction(x) {
        if (Y("hana.chrome.onAction"), typeof x != "function") throw new TypeError("hana.chrome.onAction requires a handler.");
        const Z = { fn: x };
        return d = Z, () => {
          d === Z && (d = null);
        };
      },
      registerScrollSource(x) {
        return Y("hana.chrome.registerScrollSource"), v.register(x);
      }
    },
    handleHostMessage: z,
    dispose() {
      c || (c = !0, h.abort(), i.targetWindow.removeEventListener("pagehide", N), b(), d = null, v.dispose());
    }
  };
}
var rE = 16, cE = 4096, sE = 24 * 1024, ht = class extends Error {
  code;
  constructor(i, r) {
    super(r), this.name = "AppViewStateError", this.code = i;
  }
}, oE = new TextEncoder();
function fE(i) {
  return oE.encode(i).length;
}
function dE(i) {
  if (typeof i != "object" || i === null || Array.isArray(i)) return !1;
  const r = Object.getPrototypeOf(i);
  return r === Object.prototype || r === null;
}
function hE(i) {
  const r = Number(i);
  return !Number.isInteger(r) || r < 0 || String(r) !== i ? null : r;
}
function Qv(i) {
  return i === "input" ? "VIEW_STATE_INVALID_INPUT" : "VIEW_STATE_INVALID_STORAGE";
}
function mE(i, r) {
  const o = Qv(r), c = /* @__PURE__ */ new Set();
  let d = 0;
  const h = (v, b) => {
    if (d += 1, d > cE)
      throw new ht(o, "App view state contains too many values.");
    if (b > rE)
      throw new ht(o, "App view state is nested too deeply.");
    if (v === null) return null;
    const R = typeof v;
    if (R === "string" || R === "boolean") return v;
    if (R === "number") {
      if (!Number.isFinite(v))
        throw new ht(o, "App view state numbers must be finite.");
      return v;
    }
    if (R !== "object")
      throw new ht(o, "App view state must contain only JSON values.");
    const w = v;
    if (c.has(w))
      throw new ht(o, "App view state must not contain cycles.");
    const D = Object.getPrototypeOf(w);
    if (Array.isArray(w)) {
      if (D !== Array.prototype)
        throw new ht(o, "App view state must contain only plain arrays.");
      c.add(w);
      const B = w.length;
      for (const N of Reflect.ownKeys(w)) {
        if (typeof N != "string")
          throw new ht(o, "App view state must not contain symbol keys.");
        if (N === "length") {
          const Z = Object.getOwnPropertyDescriptor(w, "length");
          if (Z.enumerable || Z.get || Z.set)
            throw new ht(o, "App view state arrays must expose a plain length.");
          continue;
        }
        const Y = hE(N);
        if (Y === null || Y >= B)
          throw new ht(o, "App view state arrays must not carry extra keys.");
        const x = Object.getOwnPropertyDescriptor(w, N);
        if (!x.enumerable || x.get || x.set)
          throw new ht(o, "App view state arrays must index plain values.");
      }
      const z = [];
      for (let N = 0; N < B; N++) {
        const Y = Object.getOwnPropertyDescriptor(w, String(N));
        if (!Y)
          throw new ht(o, "App view state must not contain sparse arrays.");
        z.push(h(Y.value, b + 1));
      }
      return c.delete(w), z;
    }
    if (D !== Object.prototype && D !== null)
      throw new ht(o, "App view state must contain only plain objects.");
    c.add(w);
    const p = /* @__PURE__ */ Object.create(null);
    for (const B of Reflect.ownKeys(w)) {
      if (typeof B != "string")
        throw new ht(o, "App view state must not contain symbol keys.");
      const z = Object.getOwnPropertyDescriptor(w, B);
      if (!z.enumerable)
        throw new ht(o, "App view state must not contain non-enumerable fields.");
      if (z.get || z.set)
        throw new ht(o, "App view state must not contain accessors.");
      p[B] = h(z.value, b + 1);
    }
    return c.delete(w), p;
  };
  return h(i, 0);
}
function vE(i, r) {
  if (i === null) return null;
  if (!dE(i))
    throw new ht(
      Qv(r),
      "App view state must be a JSON object or null."
    );
  return mE(i, r);
}
function pE(i, r) {
  if (i === null) return null;
  const o = JSON.stringify(i);
  if (fE(o) > sE)
    throw new ht(
      "VIEW_STATE_TOO_LARGE",
      "App view state exceeds the size budget."
    );
  return JSON.parse(o);
}
function Uo(i) {
  return pE(vE(i, "input"));
}
var ve = {
  UNAVAILABLE: "VIEW_STATE_UNAVAILABLE",
  VIEW_STALE: "VIEW_STATE_VIEW_STALE",
  RELEASED: "VIEW_STATE_RELEASED",
  INVALID_INPUT: "VIEW_STATE_INVALID_INPUT",
  BAD_RESPONSE: "VIEW_STATE_BAD_RESPONSE"
}, gE = class extends Error {
  code;
  constructor(i, r) {
    super(r), this.name = "AppViewStateRequestError", this.code = i;
  }
}, yE = 1e4;
function pe(i, r) {
  return new gE(i, r);
}
function EE(i) {
  return {
    viewKind: i.viewKind,
    revision: i.revision,
    state: Uo(i.state)
  };
}
function bE(i) {
  const r = i.requestTimeoutMs ?? yE;
  let o = !1, c = 0, d = null;
  const h = /* @__PURE__ */ new Map();
  let v = null, b = null, R = !1;
  const w = (I) => I instanceof Fu ? I.reason === "unavailable" ? pe(ve.UNAVAILABLE, "The App card view is not writable here right now.") : pe(ve.VIEW_STALE, "The App card view this operation was bound to is no longer current.") : I, D = (I, q) => {
    !I || I.terminated !== null || (I.terminated = q, I.lifetime.abort());
  }, p = (I) => {
    D(d, I), d = null;
    for (const q of h.values()) q.abort.abort();
    h.clear();
  }, B = (I) => {
    if (o || I === null) return;
    if (I.slot !== "card") {
      p("namespace-changed"), b = null, R = !0, v = null;
      return;
    }
    const q = JSON.stringify([I.appId, I.cardInstanceId, I.instanceKey ?? null]), J = I.viewState?.bindingId ?? null;
    (R && b !== q || J !== null && v !== null && J !== v) && p("namespace-changed"), b = q, R = !0, J !== null && (v = J);
  }, z = (I) => {
    if (!o && I.changed) {
      D(d, "document-changed"), d = null;
      for (const q of h.values())
        q.tokenCaptured && q.abort.abort();
    }
  }, N = i.subscribeContext(B), Y = i.currentView.onBinding(z), x = (I) => i.currentView.currentToken() === I, Z = (I) => {
    try {
      i.currentView.assertCurrentToken(I);
    } catch (q) {
      throw w(q);
    }
  }, ee = (I) => {
    const q = i.getContext();
    if (!q || q.slot !== "card")
      throw pe(ve.UNAVAILABLE, "The App view-state namespace is not available on this surface.");
    const J = q.viewState;
    if (!J)
      throw pe(ve.UNAVAILABLE, "The App view-state namespace is not available here right now.");
    if (J.bindingId !== I.bindingId || J.viewKind !== I.viewKind)
      throw pe(ve.VIEW_STALE, "This view-state handle belongs to a namespace that is no longer current.");
    if (J.available !== !0)
      throw pe(ve.UNAVAILABLE, "The App view-state namespace is temporarily unavailable.");
  }, Q = (I) => I === "document-changed" || I === "namespace-changed" ? pe(ve.VIEW_STALE, "This view-state handle's view changed before the operation could be adopted.") : pe(ve.RELEASED, "This view-state handle has been released."), X = (I) => {
    if (o)
      throw pe(ve.RELEASED, "The App view-state controller was released.");
    if (I.terminated !== null) throw Q(I.terminated);
    if (I.lifetime.signal.aborted)
      throw pe(ve.RELEASED, "This view-state handle has been released.");
    if (d !== I)
      throw pe(ve.VIEW_STALE, "This view-state handle is no longer the current registration.");
    return Z(I.viewToken), ee(I), I.viewToken;
  }, te = (I, q) => {
    if (o)
      throw pe(ve.RELEASED, "The App view-state controller was released.");
    if (I.terminated !== null) throw Q(I.terminated);
    if (I.lifetime.signal.aborted)
      throw pe(ve.RELEASED, "This view-state handle has been released.");
    if (!x(q))
      throw pe(ve.VIEW_STALE, "The document changed before this view-state reply arrived.");
    const J = i.getContext(), K = J?.viewState;
    if (!J || J.slot !== "card" || !K || K.bindingId !== I.bindingId || K.viewKind !== I.viewKind)
      throw pe(ve.VIEW_STALE, "The namespace changed before this view-state reply arrived.");
    if (K.available !== !0)
      throw pe(ve.UNAVAILABLE, "The App view-state namespace paused before this reply arrived.");
  }, fe = async (I, q, J, K) => {
    try {
      return await i.request(I, q, { timeoutMs: J });
    } catch (ce) {
      if (K !== null) {
        if (K.terminated !== null) throw Q(K.terminated);
        if (K.lifetime.signal.aborted)
          throw pe(ve.RELEASED, "This view-state handle has been released.");
      }
      throw o ? pe(ve.RELEASED, "The App view-state controller was released.") : ce;
    }
  }, ae = (I, q) => {
    if (q.viewKind !== I)
      throw pe(ve.BAD_RESPONSE, "The view-state reply carried a different view kind than the operation targeted.");
    let J;
    try {
      J = Uo(q.state);
    } catch (K) {
      throw K instanceof ht ? pe(ve.BAD_RESPONSE, "The view-state reply carried a state outside the shared JSON budget.") : K;
    }
    return { viewKind: I, revision: q.revision, state: J };
  }, me = async (I, q) => {
    const J = q?.timeoutMs ?? r, K = X(I), ce = await fe(Ku.GET, {
      viewToken: K,
      bindingId: I.bindingId,
      registrationId: I.registrationId
    }, J, I);
    te(I, K);
    const oe = _o(ce);
    if (oe.ok === !1)
      throw pe(ve.BAD_RESPONSE, oe.error);
    if (!Zu(oe.value, {
      viewToken: K,
      bindingId: I.bindingId,
      registrationId: I.registrationId
    }))
      throw pe(ve.VIEW_STALE, "This view-state reply answered a different view than the one this handle targets.");
    const Re = Ao(oe.value.snapshot);
    if (Re.ok === !1)
      throw pe(ve.BAD_RESPONSE, Re.error);
    return ae(I.viewKind, Re.value);
  }, We = async (I, q, J) => {
    const K = J?.timeoutMs ?? r, ce = SE(q), oe = Uo(q.state), Re = X(I), Me = await fe(Ku.SET, {
      viewToken: Re,
      bindingId: I.bindingId,
      registrationId: I.registrationId,
      expectedRevision: ce,
      state: oe
    }, K, I);
    te(I, Re);
    const ye = _o(Me);
    if (ye.ok === !1)
      throw pe(ve.BAD_RESPONSE, ye.error);
    if (!Zu(ye.value, {
      viewToken: Re,
      bindingId: I.bindingId,
      registrationId: I.registrationId
    }))
      throw pe(ve.VIEW_STALE, "This view-state reply answered a different view than the one this handle targets.");
    const E = Ao(ye.value.snapshot);
    if (E.ok === !1)
      throw pe(ve.BAD_RESPONSE, E.error);
    return ae(I.viewKind, E.value);
  }, Ve = async (I, q, J) => {
    if (!x(I)) return;
    const K = i.getContext();
    if (!(!K || K.slot !== "card" || K.viewState?.bindingId !== q))
      try {
        const ce = await i.request(Ku.RELEASE, { viewToken: I, bindingId: q, registrationId: J }, { timeoutMs: r }), oe = Av(ce);
        (oe.ok === !1 || !Zu(oe.value, { viewToken: I, bindingId: q, registrationId: J })) && console.error("[hana] App view-state cleanup reply did not confirm the released registration.");
      } catch (ce) {
        console.error("[hana] failed to release a superseded App view-state registration:", ce instanceof Error ? ce.message : ce);
      }
  }, et = (I, q) => (I.releasePromise || (I.releasePromise = (async () => {
    const J = q?.timeoutMs ?? r;
    D(I, "released"), d === I && (d = null);
    const K = i.getContext(), ce = K?.viewState;
    if (!(x(I.viewToken) && K?.slot === "card" && !!ce && ce.bindingId === I.bindingId)) return { released: !1 };
    const Re = await i.request(Ku.RELEASE, {
      viewToken: I.viewToken,
      bindingId: I.bindingId,
      registrationId: I.registrationId
    }, { timeoutMs: J }), Me = Av(Re);
    if (Me.ok === !1)
      throw pe(ve.BAD_RESPONSE, Me.error);
    if (!Zu(Me.value, {
      viewToken: I.viewToken,
      bindingId: I.bindingId,
      registrationId: I.registrationId
    }))
      throw pe(ve.VIEW_STALE, "This view-state release reply answered a different view than the one this handle targets.");
    const ye = i.getContext();
    if (!x(I.viewToken) || ye?.slot !== "card" || ye.viewState?.bindingId !== I.bindingId || ye.viewState?.viewKind !== I.viewKind)
      throw pe(ve.VIEW_STALE, "The namespace changed before this view-state release was confirmed.");
    return { released: Me.value.released };
  })()), I.releasePromise), ke = (I, q, J, K, ce) => {
    const oe = new AbortController(), Re = {
      viewToken: I,
      bindingId: q,
      viewKind: J,
      registrationId: K,
      lifetime: oe,
      initial: ce,
      releasePromise: null,
      terminated: null
    };
    return Re.handle = {
      get initial() {
        return EE(Re.initial);
      },
      signal: oe.signal,
      get: (Me) => me(Re, Me),
      set: (Me, ye) => We(Re, Me, ye),
      release: (Me) => et(Re, Me)
    }, Re;
  };
  return {
    api: { enable: async (I) => {
      const q = I?.timeoutMs ?? r;
      if (o) throw pe(ve.RELEASED, "The App view-state controller was released.");
      const J = i.getContext();
      if (J && J.slot !== "card")
        throw pe(ve.UNAVAILABLE, "View-state recovery is only available on an App card surface.");
      const K = J?.viewState?.bindingId ?? null, ce = ++c;
      p("superseded");
      const oe = new AbortController(), Re = { abort: oe, tokenCaptured: !1 };
      h.set(ce, Re);
      let Me = null;
      try {
        let ye;
        try {
          ye = await i.currentView.waitForToken(q, oe.signal);
        } catch (de) {
          throw o ? pe(ve.RELEASED, "The App view-state controller was released.") : oe.signal.aborted ? pe(ve.VIEW_STALE, "A newer view-state enable replaced this one before it was bound.") : w(de);
        }
        if (Re.tokenCaptured = !0, o) throw pe(ve.RELEASED, "The App view-state controller was released.");
        if (ce !== c || oe.signal.aborted)
          throw pe(ve.VIEW_STALE, "A newer view-state enable replaced this one before it was bound.");
        Z(ye);
        const E = i.getContext(), V = E?.viewState;
        if (!E || E.slot !== "card" || !V || V.available !== !0)
          throw pe(ve.UNAVAILABLE, "The App view-state namespace is not available here right now.");
        if (K !== null && K !== V.bindingId)
          throw pe(ve.VIEW_STALE, "The App view-state namespace changed before this enable was sent.");
        Z(ye);
        const le = await fe(Ku.ENABLE, {
          viewToken: ye,
          bindingId: V.bindingId
        }, q, null), P = _o(le);
        if (P.ok === !1)
          throw pe(ve.BAD_RESPONSE, P.error);
        if (!Zu(P.value, { viewToken: ye, bindingId: V.bindingId }))
          throw pe(ve.VIEW_STALE, "This view-state enable reply answered a different view than the one that was enabled.");
        if (Me = { token: ye, bindingId: V.bindingId, registrationId: P.value.registrationId }, o) throw pe(ve.RELEASED, "The App view-state controller was released.");
        if (ce !== c || oe.signal.aborted || !h.has(ce))
          throw pe(ve.VIEW_STALE, "This view-state enable was voided before its reply arrived.");
        if (!x(ye))
          throw pe(ve.VIEW_STALE, "The document changed before this view-state enable reply arrived.");
        const Ee = i.getContext();
        if (!Ee || Ee.slot !== "card" || Ee.viewState?.bindingId !== V.bindingId || Ee.viewState?.viewKind !== V.viewKind)
          throw pe(ve.VIEW_STALE, "The namespace changed before this view-state enable reply arrived.");
        if (Ee.viewState?.available !== !0)
          throw pe(ve.UNAVAILABLE, "The App view-state namespace paused before this enable was confirmed.");
        const be = Ao(P.value.snapshot);
        if (be.ok === !1)
          throw pe(ve.BAD_RESPONSE, be.error);
        const we = ae(V.viewKind, be.value), W = ke(ye, V.bindingId, V.viewKind, P.value.registrationId, we);
        return d = W, Me = null, W.handle;
      } catch (ye) {
        throw Me !== null && await Ve(Me.token, Me.bindingId, Me.registrationId), ye;
      } finally {
        h.delete(ce);
      }
    } },
    dispose() {
      if (!o) {
        o = !0, c += 1, D(d, "disposed"), d = null;
        for (const I of h.values()) I.abort.abort();
        h.clear(), N(), Y();
      }
    }
  };
}
function SE(i) {
  if (typeof i != "object" || i === null)
    throw pe(ve.INVALID_INPUT, "View-state set requires an object with an expected revision and a state.");
  const r = i.expectedRevision;
  if (!Number.isSafeInteger(r) || r < 0)
    throw pe(ve.INVALID_INPUT, "View-state set requires a non-negative safe-integer expected revision.");
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
function Jl(i) {
  return typeof i == "object" && i !== null && !Array.isArray(i);
}
function Wu(i) {
  const r = /* @__PURE__ */ new Set(), o = (d, h) => {
    if (h > 32) throw new Error("Input panel JSON exceeds the maximum depth of 32.");
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
      const R = [];
      for (let w = 0; w < d.length; w++) {
        if (!Object.prototype.hasOwnProperty.call(d, w)) throw new Error("Input panel JSON must not contain sparse arrays.");
        R.push(o(d[w], h + 1));
      }
      b = R;
    } else {
      const R = /* @__PURE__ */ Object.create(null);
      for (const w of Object.keys(d)) R[w] = o(d[w], h + 1);
      b = R;
    }
    return r.delete(d), b;
  }, c = JSON.stringify(o(i, 0));
  if (new TextEncoder().encode(c).byteLength > Sv)
    throw new Error(`Input panel JSON exceeds ${Sv} bytes.`);
  return JSON.parse(c);
}
function kv(i) {
  if (!Jl(i)) throw new Error("Input panel context must be an object.");
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
  if (!Jl(o) || Object.keys(o).some((c) => c !== "height" && c !== "collapsedHeight" && c !== "expanded") || o.height !== null && (typeof o.height != "number" || !Number.isFinite(o.height) || o.height < 24 || o.height > 4096) || typeof o.collapsedHeight != "number" || !Number.isFinite(o.collapsedHeight) || o.collapsedHeight < 24 || o.collapsedHeight > 4096 || typeof o.expanded != "boolean")
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
function TE(i) {
  if (!Jl(i) || Object.keys(i).some((c) => c !== "height" && c !== "collapsedHeight" && c !== "expanded"))
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
function AE(i, r) {
  if (!Jl(i) || !Jl(i.presentation) || !Number.isSafeInteger(i.presentationRevision)) throw new Error("The input panel presentation response is invalid.");
  const o = kv({ ...r, presentation: i.presentation, presentationRevision: i.presentationRevision });
  return { presentation: o.presentation, presentationRevision: o.presentationRevision };
}
function _E(i) {
  let r = null, o = 0, c = null, d = 0;
  const h = /* @__PURE__ */ new Map(), v = /* @__PURE__ */ new Set(), b = () => {
    for (const z of v) z(r ? Mr(r) : null);
  }, R = () => {
    r = null, o++;
    for (const z of h.values())
      clearTimeout(z.timeout), z.reject(new Error("The input panel binding was replaced."));
    h.clear(), b();
  }, w = (z) => {
    for (const N of h.values())
      clearTimeout(N.timeout), N.reject(new Error(z));
    h.clear();
  }, D = (z, N, Y) => i({
    protocol: ut,
    version: it,
    id: z.id,
    kind: "error",
    type: z.type,
    error: { code: N, message: Y }
  });
  function p(z) {
    if (z.kind === "event" && z.type === Ju.CONTEXT) {
      if (z.payload === null) R();
      else {
        let Q;
        try {
          Q = kv(z.payload);
        } catch (te) {
          return R(), console.warn("[hana] invalid input panel context:", te), !0;
        }
        const X = r?.panelId === Q.panelId && r.appId === Q.appId && r.sessionId === Q.sessionId && r.confirmId === Q.confirmId && r.status === Q.status && r.instanceId === Q.instanceId && r.revision === Q.revision;
        if (X && r && Q.presentationRevision < r.presentationRevision) return !0;
        X || w("The input panel binding was replaced."), r = Q, X || o++, b();
      }
      return !0;
    }
    if ((z.kind === "response" || z.kind === "error") && z.type === Ju.PRESENTATION && z.id) {
      const Q = h.get(z.id);
      if (!Q) return !1;
      if (h.delete(z.id), clearTimeout(Q.timeout), Q.generation !== o)
        Q.reject(new Error("The input panel binding was replaced."));
      else if (z.kind === "error") Q.reject(new Error(z.error?.message || "The input panel presentation could not be updated."));
      else
        try {
          const X = AE(z.payload, r);
          r && X.presentationRevision >= r.presentationRevision && (r = { ...r, ...X }, b()), Q.resolve(X);
        } catch (X) {
          Q.reject(X instanceof Error ? X : new Error("The input panel presentation response is invalid."));
        }
      return !0;
    }
    if (z.kind !== "request" || z.type !== Ju.SUBMIT) return !1;
    if (!z.id) return !0;
    const N = z.payload, Y = r;
    if (!Jl(N) || !Y || Y.status !== "pending" || !Y.confirmId || N.panelId !== Y.panelId || N.instanceId !== Y.instanceId || N.revision !== Y.revision)
      return D(z, "INPUT_PANEL_STALE", "This request does not match the active input panel question."), !0;
    const x = c;
    if (!x && Y.requestedSchema !== null)
      return D(z, "INPUT_PANEL_SUBMIT_UNHANDLED", "Register hana.inputPanel.onSubmit to provide this question’s answer."), !0;
    const Z = o, ee = {
      panelId: Y.panelId,
      instanceId: Y.instanceId,
      revision: Y.revision
    };
    return Promise.resolve().then(() => x ? x(Mr(Y)) : null).then((Q) => {
      if (o !== Z) {
        D(z, "INPUT_PANEL_STALE", "The input panel changed before its answer was ready.");
        return;
      }
      i({
        protocol: ut,
        version: it,
        id: z.id,
        kind: "response",
        type: z.type,
        payload: { ...ee, value: Wu(Q) }
      });
    }).catch((Q) => {
      D(z, "INPUT_PANEL_SUBMIT_FAILED", Q instanceof Error ? Q.message : "The input panel could not provide an answer.");
    }), !0;
  }
  return { api: {
    getContext: () => r ? Mr(r) : null,
    onContextChanged(z) {
      return v.add(z), z(r ? Mr(r) : null), () => {
        v.delete(z);
      };
    },
    onSubmit(z) {
      if (typeof z != "function") throw new TypeError("hana.inputPanel.onSubmit requires a function.");
      return c = z, () => {
        c === z && (c = null);
      };
    },
    async setPresentation(z) {
      const N = r, Y = TE(z);
      if (!N) throw new Error("The input panel is not ready.");
      const x = o, Z = `input-panel-presentation:${N.panelId}:${N.instanceId}:${Date.now().toString(36)}:${++d}`;
      return new Promise((ee, Q) => {
        const X = setTimeout(() => {
          h.delete(Z), Q(new Error("The input panel presentation request timed out."));
        }, 1e4);
        h.set(Z, { generation: x, resolve: ee, reject: Q, timeout: X });
        const te = (fe) => {
          const ae = h.get(Z);
          ae && (h.delete(Z), clearTimeout(ae.timeout), ae.reject(fe instanceof Error ? fe : new Error("The input panel presentation request could not be delivered.")));
        };
        try {
          i({
            protocol: ut,
            version: it,
            id: Z,
            kind: "request",
            type: Ju.PRESENTATION,
            payload: { panelId: N.panelId, instanceId: N.instanceId, revision: N.revision, presentationRevision: N.presentationRevision, presentation: Y }
          }, te);
        } catch (fe) {
          te(fe);
        }
        if (o !== x) {
          const fe = h.get(Z);
          fe && (h.delete(Z), clearTimeout(fe.timeout), fe.reject(new Error("The input panel binding was replaced.")));
        }
      });
    }
  }, handleMessage: p, clear: R };
}
var Oa = class extends Error {
  name = "HanaPluginError";
  code;
  details;
  constructor(i) {
    super(i.message), this.code = i.code, this.details = i.details;
  }
}, _v = 0, ai = 60, NE = 240;
function wE() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : (_v += 1, `hana-plugin-${Date.now()}-${_v}`);
}
function OE() {
  if (typeof window > "u")
    throw new Error("@hana/plugin-sdk requires a browser iframe window.");
  return window;
}
var Nv = "data-hana-theme-style";
async function CE(i, r) {
  const o = await fetch(r, { credentials: "same-origin" });
  if (!o.ok)
    throw new Error(`hana theme stylesheet request failed with ${o.status}`);
  const c = await o.text(), d = i.head ?? i.documentElement;
  if (!d) throw new Error("hana theme stylesheet has nowhere to attach");
  let h = i.querySelector(`style[${Nv}]`);
  h || (h = i.createElement("style"), h.setAttribute(Nv, "")), h.textContent = c, d.appendChild(h);
}
function RE(i) {
  if (typeof i != "object" || i === null) return !1;
  const r = i;
  return ["light", "dark"].every((o) => {
    const c = r[o];
    return typeof c == "object" && c !== null && typeof c.theme == "string" && typeof c.cssUrl == "string";
  });
}
function UE(i) {
  const r = new URLSearchParams(i.location.search), o = r.get("hana-theme-appearance"), c = r.get("hana-palette-light-theme"), d = r.get("hana-palette-light-css"), h = r.get("hana-palette-dark-theme"), v = r.get("hana-palette-dark-css");
  return {
    theme: r.get("hana-theme") ?? void 0,
    cssUrl: r.get("hana-css") ?? void 0,
    appearance: o === "light" || o === "dark" ? o : void 0,
    palettes: c && d && h && v ? { light: { theme: c, cssUrl: d }, dark: { theme: h, cssUrl: v } } : void 0
  };
}
function Fv(i, r = ai) {
  return typeof i != "number" || !Number.isFinite(i) ? r : Math.max(0, Math.min(NE, Math.round(i)));
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
function DE(i) {
  const r = new URLSearchParams(i.location.search), o = r.get("hana-visible"), c = !(o === "0" || o === "false"), d = r.get("hana-max-fps"), h = d === null ? NaN : Number(d), v = Number.isFinite(h) ? h : ai;
  return $v({
    visible: c,
    maxFrameRate: v,
    reason: "initial"
  });
}
function zE(i, r) {
  if (typeof i != "object" || i === null) return null;
  const o = i, c = typeof o.visible == "boolean" ? o.visible : r.visible, d = Fv(
    o.maxFrameRate,
    r.maxFrameRate > 0 ? r.maxFrameRate : ai
  ), h = typeof o.active == "boolean" ? o.active && c && d > 0 : c && d > 0, v = o.motion, b = v === "full" || v === "reduced" || v === "paused" ? v : h ? "full" : "paused", R = typeof o.slot == "string" ? o.slot : r.slot, w = typeof o.reason == "string" ? o.reason : r.reason;
  return {
    visible: c,
    active: h,
    maxFrameRate: h ? d : 0,
    motion: h ? b : "paused",
    ...R === "page" || R === "widget" || R === "card" || R === "settings" || R === "function-panel" || R === "slot" ? { slot: R } : {},
    ...w ? { reason: w } : {}
  };
}
function xE(i, r) {
  if (typeof i != "object" || i === null) return null;
  const o = i.visible;
  return typeof o != "boolean" ? null : $v({
    visible: o,
    maxFrameRate: o && r.maxFrameRate > 0 ? r.maxFrameRate : ai,
    slot: r.slot,
    reason: "legacy-visibility"
  });
}
function ME(i, r) {
  return i.visible === r.visible && i.active === r.active && i.maxFrameRate === r.maxFrameRate && i.motion === r.motion && i.slot === r.slot && i.reason === r.reason;
}
function No(i) {
  return {
    width: { ...i.width },
    height: { ...i.height }
  };
}
function wv(i) {
  if (typeof i != "object" || i === null) return null;
  const r = i;
  return r.mode === "fixed" ? typeof r.value != "number" || !Number.isFinite(r.value) ? null : { mode: "fixed", value: Math.round(r.value) } : r.mode === "flexible" ? typeof r.max != "number" || !Number.isFinite(r.max) ? null : { mode: "flexible", max: Math.round(r.max) } : r.mode === "unbounded" ? { mode: "unbounded" } : null;
}
function jE(i) {
  if (typeof i != "object" || i === null) return null;
  const r = i, o = wv(r.width), c = wv(r.height);
  return !o || !c ? null : { width: o, height: c };
}
function Ov(i) {
  if (i === null) return null;
  if (typeof i == "string") return i;
}
function HE(i) {
  if (typeof i != "object" || i === null || Array.isArray(i)) return;
  const r = i;
  if (Pu(r.bindingId) && !(r.viewKind !== "compact" && r.viewKind !== "detached") && typeof r.available == "boolean")
    return { bindingId: r.bindingId, viewKind: r.viewKind, available: r.available };
}
function LE(i) {
  if (typeof i != "object" || i === null || Array.isArray(i)) return null;
  const r = i, o = typeof r.appId == "string" && r.appId.trim() ? r.appId.trim() : null, c = r.slot, d = r.cardInstanceId;
  if (!o || c !== "card" && c !== "function-panel" && c !== "settings" && c !== "slot" && c !== "input-panel") return null;
  const h = Ov(r.embeddedSessionId), v = Ov(r.originSessionId), b = Xv(r.instanceKey);
  if (b === null) return null;
  const R = HE(r.viewState), w = typeof d == "string" && !!d.trim();
  if (b !== void 0 && !w) return null;
  const D = {};
  return h !== void 0 && (D.embeddedSessionId = h), v !== void 0 && (D.originSessionId = v), b !== void 0 && (D.instanceKey = b), R !== void 0 && (D.viewState = R), c === "settings" || c === "input-panel" ? d === null ? { appId: o, slot: c, cardInstanceId: null, ...D } : null : w ? { appId: o, slot: c, cardInstanceId: d.trim(), ...D } : c !== "card" || d !== null || typeof r.embeddedSessionId != "string" || !r.embeddedSessionId.trim() ? null : { appId: o, slot: c, cardInstanceId: null, ...D };
}
function wo(i) {
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
function qE(i) {
  if (typeof i != "object" || i === null || Array.isArray(i)) return null;
  const r = i, o = r.previous === null ? null : Cv(r.previous), c = r.current === null ? null : Cv(r.current);
  return r.previous !== null && o === null || r.current !== null && c === null || typeof r.timestamp != "number" || !Number.isFinite(r.timestamp) ? null : { previous: o, current: c, timestamp: r.timestamp };
}
function BE(i) {
  if (typeof i != "object" || i === null || Array.isArray(i)) return null;
  const r = i;
  return typeof r.code != "string" || !r.code.trim() || typeof r.message != "string" || !r.message.trim() ? null : new Oa({ code: r.code, message: r.message });
}
function IE(i) {
  return typeof i == "string" ? { url: i } : i;
}
function VE(i) {
  return typeof i == "string" ? { text: i } : i;
}
function Pv(i) {
  const r = jo(i.location.pathname || "");
  if (!r)
    throw new Error("App asset/API URL helper requires an App surface route under /api/apps/:appId/ui/ or a scoped service mount.");
  return r.appId;
}
function GE(i, r) {
  if (!r || !["card", "function-panel", "settings", "slot"].includes(r.slot)) return !1;
  try {
    return Pv(i) === r.appId;
  } catch {
    return !1;
  }
}
function YE(i) {
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
function XE(i) {
  return new URLSearchParams(i.location.search).get("hana-asset-base") || null;
}
function QE(i, r) {
  const o = YE(r), c = XE(i);
  if (!c)
    throw new Error(
      "hana.assets.url() requires the host-issued hana-asset-base query parameter: this page was not opened by the host with an asset base; hana.assets.url() only works inside a Hana app surface."
    );
  const d = new URL(c);
  return d.pathname = `${d.pathname.replace(/\/+$/, "")}/${o}`, d.toString();
}
function Wv(i) {
  return new URLSearchParams(i.location.search).get(j0) || null;
}
function KE(i) {
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
  for (const R of h) {
    if (!R) throw new Error("Invalid plugin API path.");
    let w;
    try {
      w = decodeURIComponent(R);
    } catch {
      throw new Error("Invalid plugin API path.");
    }
    if (w === "." || w === ".." || w.includes("/") || w.includes("\\"))
      throw new Error("Invalid plugin API path.");
  }
  const v = new URL(`http://hana.local/${o}`);
  return `${h.map((R) => encodeURIComponent(decodeURIComponent(R))).join("/")}${v.search}`;
}
function ep(i, r, o = !1) {
  const c = Pv(i);
  let d = KE(r);
  if (o && d.startsWith("_runtime/")) {
    const h = Wv(i);
    if (!h) throw new Error("hana.api.url for a managed service requires appSurfaceSession in the iframe URL.");
    const v = /^(_runtime\/[^/?]+)\/(.+)$/.exec(d);
    if (!v || v[2].startsWith("_surface/")) throw new Error("Invalid managed service API path.");
    d = `${v[1]}/_surface/${encodeURIComponent(h)}/${v[2]}`;
  }
  return `${i.location.origin}/api/apps/${encodeURIComponent(c)}/routes/${d}`;
}
function ZE(i, r, o, c) {
  const d = Wv(i);
  if (!d)
    throw new Error("hana.api.fetch requires appSurfaceSession in the iframe URL.");
  const h = i.fetch?.bind(i) ?? globalThis.fetch?.bind(globalThis);
  if (!h)
    throw new Error("hana.api.fetch requires window.fetch.");
  const v = o ?? {}, b = new Headers(v.headers);
  return b.set(M0, d), c && b.set("X-Hana-Document-Binding", c), h(ep(i, r), {
    ...v,
    headers: b
  });
}
function JE(i) {
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
function kE(i, r) {
  if (typeof r != "object" || r === null) return !1;
  const o = r;
  return i.kind === "global" ? o.kind === "global" : o.kind === "agent" && o.agentId === i.agentId;
}
function tp(i = {}) {
  const r = i.targetWindow ?? OE(), o = i.parentWindow ?? r.parent, c = xv(r, i.targetOrigin), d = i.requestTimeoutMs ?? 1e4, h = i.idFactory ?? wE, v = _E(ye), b = nE({
    targetWindow: r,
    post: ye,
    // A host that rebound its bridge to this same document gets a fresh
    // handshake by re-announcing the ready the page already sent.
    reannounceReady: () => {
      Ve && le(et);
    }
  }), R = iE({
    request: se,
    post: ye,
    targetWindow: r,
    currentView: b,
    requestTimeoutMs: d
  }), w = i.followHostTheme !== !1;
  let D = UE(r), p = DE(r), B = null, z = null;
  const N = /* @__PURE__ */ new Set(), Y = /* @__PURE__ */ new Set(), x = /* @__PURE__ */ new Set(), Z = /* @__PURE__ */ new Set(), ee = /* @__PURE__ */ new Set(), Q = /* @__PURE__ */ new Set(), X = /* @__PURE__ */ new Set(), te = /* @__PURE__ */ new Set(), fe = /* @__PURE__ */ new Set();
  let ae = null, me = null, We = null, Ve = !1, et, ke = !1, wt = !1, qt = !1, I = Promise.resolve();
  const q = /* @__PURE__ */ new Map();
  let J = 1, K = null, ce = null, oe = null, Re = !1;
  function Me(A) {
    if (!w || !A) return;
    const G = r.document;
    G && CE(G, A).catch((M) => {
      if (i.onThemeError) {
        i.onThemeError(M);
        return;
      }
      console.error("[hana] failed to follow host theme", M);
    });
  }
  function ye(A, G) {
    if (i.messageTransport) {
      const M = i.messageTransport.postMessage(A);
      M && M.catch(G ?? ((L) => console.error("[hana] host message delivery failed", L)));
    } else o.postMessage(A, c);
  }
  function E(A) {
    if (i.messageTransport) return i.messageTransport.onMessage(A);
    const G = (M) => {
      Mv(M, o, c) && A(M.data);
    };
    return r.addEventListener("message", G), () => r.removeEventListener("message", G);
  }
  function V(A, G) {
    const M = {
      protocol: ut,
      version: it,
      kind: "event",
      type: A
    };
    G !== void 0 && (M.payload = G), ye(M);
  }
  function le(A) {
    V("hana.ready", A);
  }
  function P(A) {
    const G = A instanceof Oa ? A : new Oa({
      code: "HOST_ERROR",
      message: A instanceof Error ? A.message : "Active session subscription failed."
    });
    let M = !1;
    for (const L of fe)
      if (L.onError) {
        M = !0;
        try {
          L.onError(G);
        } catch (ue) {
          console.error("[hana] active session error callback failed", ue);
        }
      }
    M || console.error("[hana] active session subscription failed", G);
  }
  function Ee() {
    return fe.size > 0 && !qt && !wt;
  }
  function be() {
    I = I.catch(() => {
    }).then(async () => {
      for (; ke !== Ee(); ) {
        if (Ee()) {
          try {
            if (await W(), (await se(zr.SUBSCRIBE)).subscribed !== !0) {
              ke = !1, wt || P(new Oa({
                code: "HOST_ERROR",
                message: "The host did not establish the active session subscription."
              }));
              return;
            }
            ke = !0;
          } catch (A) {
            ke = !1, P(A);
            return;
          }
          continue;
        }
        try {
          await W(), await se(zr.UNSUBSCRIBE);
        } catch (A) {
          P(A);
        }
        ke = !1;
      }
    });
  }
  function we(A) {
    const G = r.document?.readyState;
    return G !== "loading" && G !== "interactive" ? Promise.resolve() : new Promise((M, L) => {
      const ue = () => {
        r.clearTimeout(vt), r.removeEventListener("load", ze), r.removeEventListener("pagehide", Ye);
      }, ze = () => {
        ue(), M();
      }, Ye = () => {
        ue(), L(new Oa({
          code: "SURFACE_UNAVAILABLE",
          message: "The App surface unloaded before interactive regions could be registered."
        }));
      }, vt = r.setTimeout(() => {
        ue(), L(new Oa({
          code: "TIMEOUT",
          message: "The App document did not finish loading before interactive regions could be registered."
        }));
      }, A);
      r.addEventListener("load", ze), r.addEventListener("pagehide", Ye);
    });
  }
  function W(A) {
    return we(A ?? d).then(() => {
      le(et);
    });
  }
  function de(A) {
    const G = r.requestAnimationFrame?.bind(r), M = r.cancelAnimationFrame?.bind(r);
    if (G && M) {
      const ue = G(A);
      return () => M(ue);
    }
    const L = r.setTimeout(() => {
      const ue = r.performance?.now?.() ?? Date.now();
      A(ue);
    }, Math.max(1, Math.round(1e3 / Math.max(p.maxFrameRate, ai))));
    return () => r.clearTimeout(L);
  }
  function $t() {
    K && (K(), K = null);
  }
  function $n() {
    K || q.size === 0 || !p.active || p.maxFrameRate <= 0 || (K = de((A) => {
      if (K = null, !p.active || p.maxFrameRate <= 0) return;
      const G = 1e3 / p.maxFrameRate;
      if (ce !== null && A >= ce && A - ce < G) {
        $n();
        return;
      }
      ce = A;
      const M = Array.from(q.entries());
      for (const [L, ue] of M)
        if (q.delete(L))
          try {
            ue(A);
          } catch (ze) {
            r.setTimeout(() => {
              throw ze;
            }, 0);
          }
      $n();
    }));
  }
  function Mn(A) {
    if (!ME(p, A)) {
      p = A;
      for (const G of x) G({ ...p });
      if (!p.active || p.maxFrameRate <= 0) {
        $t();
        return;
      }
      $n();
    }
  }
  function Pt(A) {
    if (typeof A == "object" && A !== null && A.protocol === void 0 && A.type === "visibility-changed") {
      const L = xE(
        A.payload,
        p
      );
      L && Mn(L);
      return;
    }
    const G = ku(A);
    if (!G.ok) return;
    const M = G.value;
    if (!b.handleHostMessage(M) && !R.handleHostMessage(M)) {
      if (v.handleMessage(M)) {
        M.type === Ju.CONTEXT && M.payload === null && Ve && le(et);
        return;
      }
      if (M.kind === "request" && M.type === "hana.document.view-request") {
        const L = typeof M.payload == "object" && M.payload !== null ? M.payload : null, ue = L && typeof L.requestId == "string" ? L.requestId : "", ze = L && typeof L.documentId == "string" ? L.documentId : "", Ye = L && typeof L.viewId == "string" ? L.viewId : "", vt = L?.revision, Dt = L && typeof L.method == "string" ? L.method.trim() : "";
        if (!ue || !ze || !Ye || !Dt || Dt.length > 128 || !Number.isSafeInteger(vt) || Number(vt) < 0) {
          ye({
            protocol: ut,
            version: it,
            id: M.id,
            kind: "error",
            type: M.type,
            error: { code: "DOCUMENT_VIEW_REQUEST_INVALID", message: "Invalid document view request." }
          });
          return;
        }
        if (!We) {
          ye({
            protocol: ut,
            version: it,
            id: M.id,
            kind: "error",
            type: M.type,
            error: { code: "DOCUMENT_VIEW_REQUEST_UNHANDLED", message: "The document view cannot handle this request." }
          });
          return;
        }
        const pt = L?.payload, Ua = We;
        Promise.resolve().then(() => Ua({
          requestId: ue,
          documentId: ze,
          viewId: Ye,
          revision: vt,
          method: Dt,
          ...Object.prototype.hasOwnProperty.call(L, "payload") ? { payload: pt } : {}
        })).then((hn) => {
          ye({ protocol: ut, version: it, id: M.id, kind: "response", type: M.type, payload: hn });
        }, (hn) => {
          ye({
            protocol: ut,
            version: it,
            id: M.id,
            kind: "error",
            type: M.type,
            error: { code: "DOCUMENT_VIEW_REQUEST_FAILED", message: hn instanceof Error ? hn.message : "Document view request failed." }
          });
        });
        return;
      }
      if (M.kind === "request" && M.type === "hana.document.request") {
        const L = M.payload, ue = typeof L == "object" && L !== null ? L : null, ze = ue && typeof ue.requestId == "string" ? ue.requestId : "", Ye = ue?.kind, vt = ue?.revision;
        if (!ze || !["save", "prepareClose", "revert", "undo", "redo"].includes(String(Ye)) || !Number.isSafeInteger(vt)) {
          ye({
            protocol: ut,
            version: it,
            id: M.id,
            kind: "error",
            type: M.type,
            error: { code: "DOCUMENT_REQUEST_INVALID", message: "Invalid document request." }
          });
          return;
        }
        if (!me) {
          ye({
            protocol: ut,
            version: it,
            id: M.id,
            kind: "error",
            type: M.type,
            error: { code: "DOCUMENT_REQUEST_UNHANDLED", message: "The document editor cannot handle this request." }
          });
          return;
        }
        const Dt = {
          requestId: ze,
          kind: Ye,
          revision: vt
        };
        Promise.resolve(me(Dt)).then((pt) => {
          ye({ protocol: ut, version: it, id: M.id, kind: "response", type: M.type, payload: pt });
        }, (pt) => {
          ye({
            protocol: ut,
            version: it,
            id: M.id,
            kind: "error",
            type: M.type,
            error: { code: "DOCUMENT_REQUEST_FAILED", message: pt instanceof Error ? pt.message : "Document request failed." }
          });
        });
        return;
      }
      if (M.kind === "request" && M.type === De.UI_ACTION) {
        const L = r.document, ue = L ? Vv(L, M.payload, GE(r, z)) : { ok: !1, code: "UI_ACTION_DOCUMENT_UNAVAILABLE", error: "No document is available." };
        ue.ok === !0 ? ye({
          protocol: ut,
          version: it,
          id: M.id,
          kind: "response",
          type: De.UI_ACTION,
          payload: ue.result
        }) : ye({
          protocol: ut,
          version: it,
          id: M.id,
          kind: "error",
          type: De.UI_ACTION,
          error: { code: ue.code, message: ue.error, ...ue.result ? { details: ue.result } : {} }
        });
        return;
      }
      if (M.kind === "event") {
        if (M.type === "hana.document.binding") {
          const L = M.payload, ue = typeof L == "object" && L !== null ? L.access : null;
          ae = typeof ue?.bindingId == "string" && ue.bindingId ? ue.bindingId : null;
          return;
        }
        if (M.type === Xl.THEME_CHANGED) {
          if (typeof M.payload != "object" || M.payload === null) return;
          const L = M.payload, ue = typeof L.theme == "string" ? L.theme : D.theme, ze = typeof L.theme == "string" && L.theme !== D.theme;
          D = {
            theme: ue,
            cssUrl: typeof L.cssUrl == "string" ? L.cssUrl : D.cssUrl,
            appearance: L.appearance === "light" || L.appearance === "dark" ? L.appearance : ze ? void 0 : D.appearance,
            palettes: RE(L.palettes) ? L.palettes : ze ? void 0 : D.palettes
          };
          for (const Ye of N) Ye({ ...D });
          Me(D.cssUrl);
          return;
        }
        if (M.type === Xl.SURFACE_ENVELOPE_CHANGED) {
          const L = jE(M.payload);
          if (!L) return;
          B = L;
          for (const ue of Y) ue(No(B));
          return;
        }
        if (M.type === Xl.SURFACE_RUNTIME_CHANGED) {
          const L = zE(M.payload, p);
          L && Mn(L);
          return;
        }
        if (M.type === Z0.CONTEXT) {
          const L = M.payload === null ? null : LE(M.payload);
          if (M.payload !== null && L === null) return;
          const ue = L?.appId !== z?.appId || L?.slot !== z?.slot || L?.cardInstanceId !== z?.cardInstanceId || L?.instanceKey !== z?.instanceKey || L?.embeddedSessionId !== z?.embeddedSessionId || L?.originSessionId !== z?.originSessionId || L?.viewState?.bindingId !== z?.viewState?.bindingId || L?.viewState?.viewKind !== z?.viewState?.viewKind || L?.viewState?.available !== z?.viewState?.available;
          if (b.applySurfaceContext(L === null ? null : { appId: L.appId, cardInstanceId: L.cardInstanceId, instanceKey: L.instanceKey ?? null }), z = L, ue)
            for (const ze of Z) ze(z ? wo(z) : null);
          return;
        }
        if (M.type === Tv.ACTIVE_CHANGED) {
          if (wt) return;
          const L = qE(M.payload);
          if (!L) return;
          for (const ue of fe) ue.callback(L);
          return;
        }
        if (M.type === Tv.ERROR) {
          const L = BE(M.payload);
          if (!L) return;
          ke = !1, wt = !0, P(L), be();
          return;
        }
        if (M.type === Xl.STORAGE_CHANGED) {
          if (typeof M.payload != "object" || M.payload === null) return;
          const L = M.payload.keys, ue = Array.isArray(L) ? L.filter((ze) => typeof ze == "string") : [];
          for (const ze of ee) ze(ue.slice());
          return;
        }
        if (M.type === H0.CHANGED) {
          if (typeof M.payload != "object" || M.payload === null) return;
          const L = M.payload, ue = L.keys, ze = Array.isArray(ue) ? ue.filter((Ye) => typeof Ye == "string") : [];
          for (const Ye of Q)
            kE(Ye.scope, L.scope) && Ye.callback(ze.slice());
          return;
        }
        if (M.type === Xl.PANEL_EVENT) {
          if (typeof M.payload != "object" || M.payload === null) return;
          const L = M.payload, ue = typeof L.sectionId == "string" ? L.sectionId : null, ze = L.kind;
          if (!ue || ze !== "select" && ze !== "action" && ze !== "toggle") return;
          const Ye = {
            sectionId: ue,
            kind: ze,
            ...typeof L.itemId == "string" ? { itemId: L.itemId } : {},
            ...typeof L.checked == "boolean" ? { checked: L.checked } : {}
          };
          for (const vt of X) vt(Ye);
          return;
        }
        if (M.type === Xl.PANEL_REFRESH)
          for (const L of te) L();
      }
    }
  }
  E(Pt), r.addEventListener("pagehide", (A) => {
    v.clear(), qt = !0, be(), A?.persisted === !1 && (Re = !0, b.dispose(), oe?.dispose(), R.dispose());
  }), r.addEventListener("pageshow", () => {
    qt && (qt = !1, be());
  });
  function se(A, G, M = {}) {
    const L = h(), ue = M.timeoutMs ?? d;
    return new Promise((ze, Ye) => {
      let vt = () => {
      };
      const Dt = () => {
        vt(), r.clearTimeout(Ua);
      }, pt = (Da) => {
        const Fl = ku(Da);
        if (!Fl.ok) return;
        const mn = Fl.value;
        mn.id !== L || mn.type !== A || (mn.kind === "response" && (Dt(), ze(mn.payload)), mn.kind === "error" && mn.error && (Dt(), Ye(new Oa(mn.error))));
      }, Ua = r.setTimeout(() => {
        Dt(), Ye(new Oa({
          code: "TIMEOUT",
          message: `Plugin host request timed out: ${A}.`
        }));
      }, ue), hn = {
        protocol: ut,
        version: it,
        id: L,
        kind: "request",
        type: A
      };
      G !== void 0 && (hn.payload = G);
      try {
        vt = E(pt), ye(hn, (Da) => {
          Dt(), Ye(Da);
        });
      } catch (Da) {
        Dt(), Ye(Da);
      }
    });
  }
  function Le(A) {
    return {
      get(G, M) {
        return se(Kl.GET, { scope: A, key: G }, M);
      },
      getAll(G) {
        return se(Kl.GET_ALL, { scope: A }, G);
      },
      set(G, M, L) {
        return se(Kl.SET, { scope: A, key: G, value: M }, L);
      },
      delete(G, M) {
        return se(Kl.DELETE, { scope: A, key: G }, M);
      },
      keys(G) {
        return se(Kl.KEYS, { scope: A }, G);
      },
      onChanged(G) {
        if (A.kind === "agent" && !A.agentId)
          throw new Error(
            "hana.storage.agent() with no agentId cannot subscribe with onChanged — a subscription outlives any single request, so pass an explicit agentId to subscribe to a stable scope."
          );
        const M = { scope: A, callback: G };
        return Q.add(M), () => {
          Q.delete(M);
        };
      }
    };
  }
  const Bt = {
    ready(A) {
      Ve = !0, et = A, le(A);
    },
    inputPanel: v.api,
    assets: {
      url(A) {
        return QE(r, A);
      }
    },
    api: {
      url(A) {
        return ep(r, A, !0);
      },
      fetch(A, G) {
        return ZE(r, A, G, ae);
      }
    },
    ui: {
      resize(A) {
        V(De.UI_RESIZE, A);
      }
    },
    theme: {
      getSnapshot() {
        return { ...D };
      },
      subscribe(A) {
        return N.add(A), A({ ...D }), () => {
          N.delete(A);
        };
      }
    },
    envelope: {
      getSnapshot() {
        return B ? No(B) : null;
      },
      subscribe(A) {
        return Y.add(A), A(B ? No(B) : null), () => {
          Y.delete(A);
        };
      }
    },
    lifecycle: {
      getSnapshot() {
        return { ...p };
      },
      subscribe(A) {
        return x.add(A), A({ ...p }), () => {
          x.delete(A);
        };
      }
    },
    cards: {
      open(A, G) {
        if (typeof A != "string" || !A.trim())
          return Promise.reject(new TypeError("hana.cards.open requires a non-empty declared card ID."));
        let M;
        if (G !== void 0) {
          if (typeof G != "object" || G === null || Array.isArray(G))
            return Promise.reject(new TypeError("hana.cards.open options must be an object."));
          if (Object.keys(G).some((ue) => ue !== "instanceKey"))
            return Promise.reject(new TypeError("hana.cards.open options accepts only instanceKey."));
          const L = Xv(G.instanceKey);
          if (L === null)
            return Promise.reject(new TypeError("hana.cards.open instanceKey must be a non-empty string of at most 256 code units without NUL."));
          M = L;
        }
        return se(Yv.OPEN, {
          cardId: A.trim(),
          ...M === void 0 ? {} : { instanceKey: M }
        });
      }
    },
    surface: {
      getContext() {
        return z ? wo(z) : null;
      },
      onContextChanged(A) {
        return Z.add(A), A(z ? wo(z) : null), () => {
          Z.delete(A);
        };
      },
      setInteractiveRegions(A, G) {
        const M = L0({ regions: A });
        return M.ok === !1 ? Promise.reject(new TypeError(M.error)) : Ve ? we(G?.timeoutMs ?? d).then(() => (le(et), se(Ro.SET_INTERACTIVE_REGIONS, M.value, G))) : se(Ro.SET_INTERACTIVE_REGIONS, M.value, G);
      }
    },
    sessions: {
      getActive(A) {
        return W(A?.timeoutMs).then(() => se(zr.GET_ACTIVE, void 0, A));
      },
      focus(A, G) {
        return !A || typeof A.sessionId != "string" || !A.sessionId.trim() ? Promise.reject(new TypeError("hana.sessions.focus requires a non-empty sessionId.")) : W(G?.timeoutMs).then(() => se(
          zr.FOCUS,
          { sessionId: A.sessionId.trim() },
          G
        ));
      },
      onActiveChanged(A, G) {
        const M = { callback: A, onError: G };
        return wt = !1, fe.add(M), be(), () => {
          fe.delete(M) && be();
        };
      }
    },
    performance: {
      requestAnimationFrame(A) {
        const G = J;
        return J += 1, q.set(G, A), $n(), G;
      },
      cancelAnimationFrame(A) {
        q.delete(A), q.size === 0 && $t();
      }
    },
    host: {
      request: se
    },
    chrome: R.api,
    toast: {
      show(A, G) {
        return se(De.TOAST_SHOW, A, G);
      }
    },
    external: {
      open(A, G) {
        return se(De.EXTERNAL_OPEN, IE(A), G);
      }
    },
    clipboard: {
      writeText(A, G) {
        return se(
          De.CLIPBOARD_WRITE_TEXT,
          VE(A),
          G
        );
      }
    },
    resources: {
      open(A, G) {
        return se(De.RESOURCE_OPEN, A, G);
      },
      pick(A = {}, G) {
        return se(De.RESOURCE_PICK, A, G);
      },
      saveFile(A, G) {
        return se(De.RESOURCE_SAVE_FILE, A, G);
      },
      requestAccess(A, G) {
        return se(
          De.RESOURCE_REQUEST_ACCESS,
          A,
          G
        );
      }
    },
    document: {
      getContext(A) {
        return se("hana.document.get-context", void 0, A);
      },
      read(A) {
        return se("hana.document.read", void 0, A);
      },
      reportStatus(A, G) {
        return se("hana.document.report-status", A, G);
      },
      open(A, G) {
        return se("hana.document.open", A, G);
      },
      rebind(A, G) {
        return se("hana.document.rebind", A, G);
      },
      openDrop(A, G) {
        if (A.defaultPrevented) return Promise.resolve(null);
        const M = A.dataTransfer?.getData("application/x-hana-file-drag") || "";
        if (M) return se("hana.document.open-drop", { dragId: M }, G);
        const L = Array.from(A.dataTransfer?.files || []);
        return L.length !== 1 ? Promise.resolve(null) : se("hana.document.open-drop", { file: L[0] }, G);
      },
      onRequest(A) {
        return me = A, () => {
          me === A && (me = null);
        };
      },
      onViewRequest(A) {
        return We = A, () => {
          We === A && (We = null);
        };
      }
    },
    state: {
      get(A, G) {
        const M = typeof A == "string" && A ? { key: A } : {};
        return se(De.STATE_GET, M, G);
      },
      set(A, G, M) {
        const L = typeof A == "string" ? { key: A, value: G } : { state: A };
        return se(De.STATE_SET, L, M);
      }
    },
    storage: {
      get(A, G) {
        return se(De.STORAGE_GET, { key: A }, G);
      },
      getAll(A) {
        return se(De.STORAGE_GET_ALL, {}, A);
      },
      set(A, G, M) {
        return se(De.STORAGE_SET, { key: A, value: G }, M);
      },
      delete(A, G) {
        return se(De.STORAGE_DELETE, { key: A }, G);
      },
      onChanged(A) {
        return ee.add(A), () => {
          ee.delete(A);
        };
      },
      global: Le({ kind: "global" }),
      agent(A) {
        return Le({ kind: "agent", agentId: A });
      }
    },
    emit(A, G, M, L) {
      const ue = {
        name: A,
        userGesture: JE(r)
      };
      return arguments.length >= 2 && (ue.payload = G), typeof M == "string" && M.trim() && (ue.to = M.trim()), se(De.EMIT, ue, L);
    },
    track(A, G, M) {
      const L = { name: A };
      return arguments.length >= 2 && (L.payload = G), se(De.TRACK, L, M);
    },
    panel: {
      set(A, G) {
        return se(De.PANEL_SET, A, G);
      },
      onEvent(A) {
        return X.add(A), () => {
          X.delete(A);
        };
      },
      onRefresh(A) {
        return te.add(A), () => {
          te.delete(A);
        };
      }
    }
  };
  return Zv(Bt, () => Re ? null : (oe ??= bE({
    request: se,
    currentView: b,
    getContext: () => z,
    subscribeContext: (A) => (Z.add(A), () => {
      Z.delete(A);
    }),
    requestTimeoutMs: d
  }), oe.api)), Bt;
}
var Rv = null;
function ie() {
  return Rv ??= tp(), Rv;
}
var np = {
  ready(i) {
    return ie().ready(i);
  },
  inputPanel: {
    getContext() {
      return ie().inputPanel.getContext();
    },
    onContextChanged(i) {
      return ie().inputPanel.onContextChanged(i);
    },
    onSubmit(i) {
      return ie().inputPanel.onSubmit(i);
    },
    setPresentation(i) {
      return ie().inputPanel.setPresentation(i);
    }
  },
  assets: {
    url(i) {
      return ie().assets.url(i);
    }
  },
  api: {
    url(i) {
      return ie().api.url(i);
    },
    fetch(i, r) {
      return ie().api.fetch(i, r);
    }
  },
  ui: {
    resize(i) {
      return ie().ui.resize(i);
    }
  },
  theme: {
    getSnapshot() {
      return ie().theme.getSnapshot();
    },
    subscribe(i) {
      return ie().theme.subscribe(i);
    }
  },
  envelope: {
    getSnapshot() {
      return ie().envelope.getSnapshot();
    },
    subscribe(i) {
      return ie().envelope.subscribe(i);
    }
  },
  lifecycle: {
    getSnapshot() {
      return ie().lifecycle.getSnapshot();
    },
    subscribe(i) {
      return ie().lifecycle.subscribe(i);
    }
  },
  cards: {
    open(i, r) {
      return ie().cards.open(i, r);
    }
  },
  surface: {
    getContext() {
      return ie().surface.getContext();
    },
    onContextChanged(i) {
      return ie().surface.onContextChanged(i);
    },
    setInteractiveRegions(i, r) {
      return ie().surface.setInteractiveRegions(i, r);
    }
  },
  sessions: {
    getActive(i) {
      return ie().sessions.getActive(i);
    },
    focus(i, r) {
      return ie().sessions.focus(i, r);
    },
    onActiveChanged(i, r) {
      return ie().sessions.onActiveChanged(i, r);
    }
  },
  performance: {
    requestAnimationFrame(i) {
      return ie().performance.requestAnimationFrame(i);
    },
    cancelAnimationFrame(i) {
      return ie().performance.cancelAnimationFrame(i);
    }
  },
  host: {
    request(i, r, o) {
      return ie().host.request(i, r, o);
    }
  },
  chrome: {
    set(i, r) {
      return ie().chrome.set(i, r);
    },
    onAction(i) {
      return ie().chrome.onAction(i);
    },
    registerScrollSource(i) {
      return ie().chrome.registerScrollSource(i);
    }
  },
  toast: {
    show(i, r) {
      return ie().toast.show(i, r);
    }
  },
  external: {
    open(i, r) {
      return ie().external.open(i, r);
    }
  },
  clipboard: {
    writeText(i, r) {
      return ie().clipboard.writeText(i, r);
    }
  },
  resources: {
    open(i, r) {
      return ie().resources.open(i, r);
    },
    pick(i, r) {
      return ie().resources.pick(i, r);
    },
    saveFile(i, r) {
      return ie().resources.saveFile(i, r);
    },
    requestAccess(i, r) {
      return ie().resources.requestAccess(i, r);
    }
  },
  document: {
    getContext(i) {
      return ie().document.getContext(i);
    },
    read(i) {
      return ie().document.read(i);
    },
    reportStatus(i, r) {
      return ie().document.reportStatus(i, r);
    },
    open(i, r) {
      return ie().document.open(i, r);
    },
    rebind(i, r) {
      return ie().document.rebind(i, r);
    },
    openDrop(i, r) {
      return ie().document.openDrop(i, r);
    },
    onRequest(i) {
      return ie().document.onRequest(i);
    },
    onViewRequest(i) {
      return ie().document.onViewRequest(i);
    }
  },
  state: {
    get(i, r) {
      return ie().state.get(i, r);
    },
    set(i, r, o) {
      return ie().state.set(i, r, o);
    }
  },
  storage: {
    get(i, r) {
      return ie().storage.get(i, r);
    },
    getAll(i) {
      return ie().storage.getAll(i);
    },
    set(i, r, o) {
      return ie().storage.set(i, r, o);
    },
    delete(i, r) {
      return ie().storage.delete(i, r);
    },
    onChanged(i) {
      return ie().storage.onChanged(i);
    },
    get global() {
      return ie().storage.global;
    },
    agent(i) {
      return ie().storage.agent(i);
    }
  },
  emit(i, r, o, c) {
    return ie().emit(i, r, o, c);
  },
  track(i, r, o) {
    return ie().track(i, r, o);
  },
  panel: {
    set(i, r) {
      return ie().panel.set(i, r);
    },
    onEvent(i) {
      return ie().panel.onEvent(i);
    },
    onRefresh(i) {
      return ie().panel.onRefresh(i);
    }
  }
};
Zv(np, () => Jv(ie()));
function qr(i) {
  return i.hanaAppWindow;
}
function sn(i) {
  const r = qr(i);
  if (!r) throw Object.assign(new Error("This App surface is not an App-owned native window."), { code: "APP_WINDOW_UNAVAILABLE" });
  return r;
}
function FE(i) {
  return (typeof window < "u" ? qr(i()) : void 0)?.onDocumentAction?.((o) => {
    const c = Vv(i().document, o, !0);
    if (c.ok === !1) throw Object.assign(new Error(c.error), { code: c.code });
    return c.result;
  }), {
    getContext: () => sn(i()).getContext(),
    getDroppedResources: (o) => {
      const c = sn(i());
      return c.getDroppedResources ? c.getDroppedResources([...o]) : Promise.reject(Object.assign(new Error("Update Hana to import dropped local resources."), { code: "APP_SDK_HOST_UNSUPPORTED" }));
    },
    request: (o) => sn(i()).request(o),
    onRequest: (o) => sn(i()).onRequest(o),
    onContextChanged: (o) => sn(i()).onContextChanged(o),
    onInspect: (o) => {
      const c = sn(i());
      if (!c.onInspect) throw Object.assign(new Error("Update Hana to register App window inspection."), { code: "APP_SDK_HOST_UNSUPPORTED" });
      return c.onInspect(o);
    },
    registerInspectionSurface: (o, c) => {
      const d = sn(i());
      if (!d.registerInspectionSurface) throw Object.assign(new Error("Update Hana to register App inspection surfaces."), { code: "APP_SDK_HOST_UNSUPPORTED" });
      return d.registerInspectionSurface(o, c);
    },
    control: (o) => sn(i()).control(o),
    close: () => sn(i()).close()
  };
}
var $E = /* @__PURE__ */ new Set([
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
  ...Object.values(Kl),
  ...Object.values(Yv),
  Ro.SET_INTERACTIVE_REGIONS,
  "hana.document.get-context",
  "hana.document.read",
  "hana.document.report-status",
  "hana.document.open",
  "hana.document.rebind",
  "hana.document.open-drop"
]);
function ap() {
  if (typeof window > "u") throw new Error("@hana/app-sdk/ui requires a browser App iframe.");
  return window;
}
function PE(i) {
  if (!jo(i.location?.pathname ?? ""))
    throw new Error("@hana/app-sdk/ui requires an App surface route under /api/apps/:appId/ui/ or a scoped service mount.");
}
function WE(i) {
  if (!$E.has(i))
    throw new Error(`@hana/app-sdk/ui does not expose host request type: ${i}`);
}
function eb(i) {
  return {
    get global() {
      return i().storage.global;
    },
    agent(r) {
      return i().storage.agent(r);
    }
  };
}
function tb(i, r = ap, o = {}) {
  return {
    window: FE(r),
    surfaces: {
      onEvent(c, d) {
        if (typeof c != "string" || !c.trim() || c.length > 256 || typeof d != "function")
          throw new TypeError("surfaces.onEvent requires a surface id and a listener.");
        return sn(r()).onMessage((h) => {
          const v = ku(h);
          if (!v.ok || v.value.kind !== "event" || v.value.type !== "hana.app-surface.event") return;
          const b = v.value.payload;
          if (!b || typeof b != "object" || Array.isArray(b)) return;
          const R = b;
          R.surfaceId !== c || typeof R.type != "string" || !R.type.trim() || d({ surfaceId: c, type: R.type, ...R.payload === void 0 ? {} : { payload: R.payload } });
        });
      }
    },
    appEvents: {
      on(c, d) {
        if (typeof c != "string" || !c.trim() || c.length > 128 || typeof d != "function") throw new TypeError("appEvents.on requires an event name and a listener.");
        const h = r(), v = jo(h.location?.pathname ?? "");
        if (!v)
          throw new Error("@hana/app-sdk/ui requires an App surface route under /api/apps/:appId/ui/ or a scoped service mount.");
        const b = v.appId, R = (z) => {
          const N = ku(z);
          if (!N.ok || N.value.kind !== "event" || N.value.type !== "hana.app.event") return;
          const Y = N.value.payload;
          Y?.source !== `app:${b}` || Y.type !== c || !Y.payload || typeof Y.payload != "object" || Array.isArray(Y.payload) || d(Y.payload);
        }, w = o.messageTransport ?? qr(h);
        if (w) return w.onMessage(R);
        const D = o.parentWindow ?? h.parent, p = xv(h, o.targetOrigin), B = (z) => {
          Mv(z, D, p) && R(z.data);
        };
        return h.addEventListener("message", B), () => h.removeEventListener("message", B);
      }
    },
    instances: {
      onChanged(c) {
        return sn(r()).onMessage((d) => {
          if (!d || typeof d != "object") return;
          const h = d;
          if (h.protocol !== ut || h.version !== it || h.kind !== "event" || h.type !== "hana.app-instance.changed") return;
          const v = h.payload;
          v && typeof v.instanceId == "string" && typeof v.revision == "number" && Number.isSafeInteger(v.revision) && typeof v.state == "string" && c({ instanceId: v.instanceId, revision: v.revision, state: v.state });
        });
      }
    },
    environments: {
      onChanged(c) {
        if (typeof c != "function") throw new TypeError("environments.onChanged requires a listener.");
        return sn(r()).onMessage((d) => {
          const h = ku(d);
          if (!h.ok || h.value.kind !== "event" || h.value.type !== "hana.app-environment.changed") return;
          const v = h.value.payload;
          v && typeof v.environmentId == "string" && typeof v.revision == "number" && Number.isSafeInteger(v.revision) && typeof v.state == "string" && c({ environmentId: v.environmentId, revision: v.revision, state: v.state });
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
        return WE(c), i().host.request(c, d, h);
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
    storage: eb(i),
    emit(c, d, h, v) {
      return i().emit(c, d, h, v);
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
var nb, fn = tb(() => {
  const i = ap();
  PE(i);
  const r = qr(i);
  return r ? nb ??= tp({ targetWindow: i, messageTransport: r }) : np;
});
function dn(...i) {
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
}, ab = {
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
function lb({ mode: i = "inherit", theme: r, className: o, style: c, children: d, "data-testid": h = "hana-plugin-theme", ...v }) {
  const b = typeof r == "string" ? r : void 0, R = ub(i, r);
  return g.jsx("div", { ...v, "data-testid": h, className: dn("hana-plugin-theme", o), "data-hana-theme-mode": i, "data-hana-theme": i === "hana" ? b : void 0, style: { ...R, ...c }, children: d });
}
function ub(i, r) {
  if (i === "inherit")
    return {};
  const o = ib(i, r), c = {};
  for (const [d, h] of Object.entries(ab)) {
    const v = o?.[d];
    v && (c[h] = v);
  }
  return c;
}
function ib(i, r) {
  if (typeof r == "string")
    return Uv[r];
  if (r)
    return r;
  if (i === "hana")
    return Uv["warm-paper"];
}
const mt = F.forwardRef(function({ variant: r = "secondary", size: o = "md", loading: c = !1, iconLeft: d, iconRight: h, disabled: v, className: b, children: R, type: w = "button", ...D }, p) {
  return g.jsxs("button", { ...D, ref: p, type: w, disabled: v || c, className: dn("hana-plugin-button", `hana-plugin-button-${r}`, `hana-plugin-button-${o}`, c && "hana-plugin-button-loading", b), children: [c ? g.jsx("span", { className: "hana-plugin-spinner", "aria-hidden": !0 }) : d, R && g.jsx("span", { className: "hana-plugin-button-label", children: R }), !c && h] });
});
F.forwardRef(function({ label: r, size: o = "md", variant: c = "ghost", className: d, children: h, type: v = "button", ...b }, R) {
  return g.jsx("button", { ...b, ref: R, type: v, "aria-label": r, title: b.title || r, className: dn("hana-plugin-icon-button", `hana-plugin-icon-button-${o}`, `hana-plugin-icon-button-${c}`, d), children: h });
});
const Nt = F.forwardRef(function({ label: r, hint: o, error: c, id: d, className: h, inputClassName: v, ...b }, R) {
  const w = F.useId(), D = d || w;
  return g.jsx(Ho, { label: r, hint: o, error: c, htmlFor: D, className: h, children: g.jsx("input", { ...b, ref: R, id: D, "aria-invalid": !!c, className: dn("hana-plugin-input", v) }) });
});
F.forwardRef(function({ label: r, hint: o, error: c, id: d, className: h, textareaClassName: v, rows: b = 4, ...R }, w) {
  const D = F.useId(), p = d || D;
  return g.jsx(Ho, { label: r, hint: o, error: c, htmlFor: p, className: h, children: g.jsx("textarea", { ...R, ref: w, id: p, rows: b, "aria-invalid": !!c, className: dn("hana-plugin-textarea", v) }) });
});
F.forwardRef(function({ checked: r, onChange: o, label: c, disabled: d, className: h, onClick: v, type: b = "button", ...R }, w) {
  const D = typeof c == "string" ? c : R["aria-label"];
  return g.jsxs("span", { className: dn("hana-plugin-switch-wrap", h), children: [g.jsx("button", { ...R, ref: w, type: b, role: "switch", "aria-checked": r, "aria-label": D, disabled: d, className: dn("hana-plugin-switch", r && "hana-plugin-switch-on"), onClick: (p) => {
    v?.(p), !p.defaultPrevented && !d && o?.(!r);
  }, children: g.jsx("span", { className: "hana-plugin-switch-thumb", "aria-hidden": !0 }) }), c && g.jsx("span", { className: "hana-plugin-switch-label", children: c })] });
});
function Dv({ options: i, value: r, onChange: o, label: c, hint: d, error: h, placeholder: v = "Select", disabled: b = !1, className: R }) {
  const [w, D] = F.useState(!1), p = i.find((Y) => Y.value === r), B = p?.label || v, z = typeof c == "string" ? c : void 0, N = [z, B].filter(Boolean).join(" ");
  return g.jsx(Ho, { label: c, hint: d, error: h, className: R, children: g.jsxs("div", { className: "hana-plugin-select", children: [g.jsxs("button", { type: "button", "aria-haspopup": "listbox", "aria-expanded": w, "aria-label": N || void 0, disabled: b, className: dn("hana-plugin-select-trigger", !p && "hana-plugin-select-placeholder"), onClick: () => D((Y) => !Y), children: [g.jsx("span", { className: "hana-plugin-select-value", children: B }), g.jsx("span", { className: "hana-plugin-select-arrow", "aria-hidden": !0, children: "▾" })] }), w && g.jsx("div", { className: "hana-plugin-select-popover", role: "listbox", "aria-label": z, children: i.map((Y) => g.jsx("button", { type: "button", role: "option", "aria-selected": Y.value === r, disabled: Y.disabled, className: dn("hana-plugin-select-option", Y.value === r && "hana-plugin-select-option-selected"), onClick: () => {
    Y.disabled || (o(Y.value), D(!1));
  }, children: Y.label }, Y.value)) })] }) });
}
function Ho({ label: i, hint: r, error: o, htmlFor: c, className: d, children: h }) {
  return g.jsxs("div", { className: dn("hana-plugin-field", d), children: [i && g.jsx("label", { className: "hana-plugin-field-label", htmlFor: c, children: i }), r && g.jsx("div", { className: "hana-plugin-field-hint", children: r }), h, o && g.jsx("div", { className: "hana-plugin-field-error", children: o })] });
}
function Ca({ title: i, description: r, actions: o, footer: c, children: d, className: h, ...v }) {
  return g.jsxs("section", { ...v, className: dn("hana-plugin-card", h), children: [(i || r || o) && g.jsxs("header", { className: "hana-plugin-card-header", children: [g.jsxs("div", { className: "hana-plugin-card-heading", children: [i && g.jsx("h2", { className: "hana-plugin-card-title", children: i }), r && g.jsx("p", { className: "hana-plugin-card-description", children: r })] }), o && g.jsx("div", { className: "hana-plugin-card-actions", children: o })] }), g.jsx("div", { className: "hana-plugin-card-body", children: d }), c && g.jsx("footer", { className: "hana-plugin-card-footer", children: c })] });
}
function li({ icon: i, title: r, description: o, action: c, className: d, ...h }) {
  return g.jsxs("div", { ...h, className: dn("hana-plugin-empty", d), children: [i && g.jsx("div", { className: "hana-plugin-empty-icon", children: i }), g.jsx("div", { className: "hana-plugin-empty-title", children: r }), o && g.jsx("div", { className: "hana-plugin-empty-description", children: o }), c && g.jsx("div", { className: "hana-plugin-empty-action", children: c })] });
}
const lp = (i) => i.replace(/^\/+/, "");
async function up(i) {
  const r = await i.text();
  try {
    return JSON.parse(r);
  } catch {
    return { ok: !1, stage: "http", message: `HTTP ${i.status}：${(r || "无响应体").slice(0, 200)}` };
  }
}
async function rt(i) {
  const r = await fn.api.fetch(lp(i));
  return up(r);
}
async function on(i, r) {
  const o = await fn.api.fetch(lp(i), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(r)
  });
  return up(o);
}
async function ip(i = 480 * 1e3) {
  const r = Date.now();
  for (; Date.now() - r < i; ) {
    await new Promise((c) => setTimeout(c, 5e3));
    const o = await rt("/api/import/status").catch(() => null);
    if (o && o.running === !1 && o.lastResult) return o.lastResult;
  }
  return { ok: !1, stage: "timeout", message: "等待超时（8 分钟），任务可能仍在运行；稍后到「待办 · 导入失败」查看结果。" };
}
function rp(i, r) {
  const o = /^#\s+(.+?)（([^（）]+),\s*(\d{4}[^)）]*)）$/.exec(String(i || "").trim());
  return { title: o ? o[1] : r, meta: o ? `${o[2].trim()} · ${o[3]}` : "" };
}
async function cp(i) {
  const r = await rt(Sn(`篇目/${i}`)).catch(() => null);
  return r && r.ok ? String(r.content || "").split(/\r?\n/, 1)[0] : "";
}
const Sn = (i) => `/api/file?path=${encodeURIComponent(i)}`, rb = [
  { id: "home", label: "首页" },
  { id: "use", label: "取用" },
  { id: "library", label: "结构库" },
  { id: "todo", label: "待办" },
  { id: "settings", label: "设置" }
], cb = {
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
function sb(i) {
  return i.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function wa(i) {
  return sb(i).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
}
function ob(i) {
  const r = String(i || "").split(/\r?\n/), o = [];
  let c = 0, d = !1;
  const h = () => {
    d && (o.push("</ul>"), d = !1);
  };
  for (; c < r.length; ) {
    const v = r[c];
    if (/^\|.*\|/.test(v) && c + 1 < r.length && /^\|\s*-+/.test(r[c + 1])) {
      h();
      const b = v.split("|").slice(1, -1).map((w) => w.trim());
      c += 2;
      const R = [];
      for (; c < r.length && /^\|/.test(r[c]); )
        R.push(r[c].split("|").slice(1, -1).map((w) => w.trim())), c++;
      o.push("<table><thead><tr>" + b.map((w) => `<th>${wa(w)}</th>`).join("") + "</tr></thead><tbody>");
      for (const w of R) o.push("<tr>" + w.map((D) => `<td>${wa(D)}</td>`).join("") + "</tr>");
      o.push("</tbody></table>");
      continue;
    }
    /^###\s/.test(v) ? (h(), o.push(`<h3>${wa(v.slice(4))}</h3>`)) : /^##\s/.test(v) ? (h(), o.push(`<h2>${wa(v.slice(3))}</h2>`)) : /^#\s/.test(v) ? (h(), o.push(`<h1>${wa(v.slice(2))}</h1>`)) : /^>\s?/.test(v) ? (h(), o.push(`<blockquote>${wa(v.replace(/^>\s?/, ""))}</blockquote>`)) : /^-\s/.test(v) || /^\*\s/.test(v) ? (d || (o.push("<ul>"), d = !0), o.push(`<li>${wa(v.slice(2))}</li>`)) : /^---+\s*$/.test(v) ? (h(), o.push("<hr>")) : v.trim() === "" ? h() : (h(), o.push(`<p>${wa(v)}</p>`)), c++;
  }
  return h(), o.join(`
`);
}
function ei({ md: i }) {
  return /* @__PURE__ */ g.jsx("div", { className: "doc", dangerouslySetInnerHTML: { __html: ob(i) } });
}
async function Ra(i) {
  const r = await rt(`/api/list?dir=${encodeURIComponent(i)}`);
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
      const h = d.split("|").slice(1, -1).map((v) => v.trim());
      h[0] && h[0] !== "疑似对" && o.push({ pair: h[0], evidence: h[1] || "", date: h[2] || "", decision: h[3] || "" });
    }
  }
  return o;
}
async function fb() {
  const [i, r, o, c] = await Promise.all([
    Ra("篇目"),
    Ra("写作模型"),
    rt(Sn("标签库.md")),
    rt("/api/import/failures").catch(() => ({ ok: !1, items: [] }))
  ]), d = o.ok ? Lo(o.content) : [];
  return {
    papers: i.length,
    models: r.length,
    queuePending: d.filter((h) => !h.decision).length,
    failures: (c.items || []).length
  };
}
function db() {
  const i = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), [r, o] = F.useState({ id: "", title: "", authors: "", year: "", venue: "", textType: "", score: "9", rationale: "", date: i, recordedBy: "" }), [c, d] = F.useState(null), h = (b, R) => o((w) => ({ ...w, [b]: R }));
  async function v() {
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
    }, R = await on("/api/tool/commit_anchor", { anchor: b });
    d(R), R.ok && fn.toast.show({ message: "评分已落盘", type: "success" });
  }
  return /* @__PURE__ */ g.jsxs("div", { className: "form", children: [
    /* @__PURE__ */ g.jsx("p", { className: "hint", children: "你自己的总分和理由是整条评分链的起点：只增不改，理由至少 10 字，后续归纳评分指引全靠它。" }),
    /* @__PURE__ */ g.jsxs("div", { className: "grid2", children: [
      /* @__PURE__ */ g.jsx(Nt, { label: "篇目 id（slug-年）", value: r.id, onChange: (b) => h("id", b.currentTarget.value), placeholder: "sample-2020" }),
      /* @__PURE__ */ g.jsx(Nt, { label: "文本类型（你判）", value: r.textType, onChange: (b) => h("textType", b.currentTarget.value), placeholder: "论证型 / 阐释型…" }),
      /* @__PURE__ */ g.jsx(Nt, { label: "标题", value: r.title, onChange: (b) => h("title", b.currentTarget.value) }),
      /* @__PURE__ */ g.jsx(Nt, { label: "作者", value: r.authors, onChange: (b) => h("authors", b.currentTarget.value) }),
      /* @__PURE__ */ g.jsx(Nt, { label: "年份", value: r.year, onChange: (b) => h("year", b.currentTarget.value) }),
      /* @__PURE__ */ g.jsx(Nt, { label: "出处（可空）", value: r.venue, onChange: (b) => h("venue", b.currentTarget.value) }),
      /* @__PURE__ */ g.jsx(Nt, { label: "总分 1-10", value: r.score, onChange: (b) => h("score", b.currentTarget.value) }),
      /* @__PURE__ */ g.jsx(Nt, { label: "日期", value: r.date, onChange: (b) => h("date", b.currentTarget.value) })
    ] }),
    /* @__PURE__ */ g.jsx(Nt, { label: "理由（≥10 字）", value: r.rationale, onChange: (b) => h("rationale", b.currentTarget.value) }),
    /* @__PURE__ */ g.jsx(Nt, { label: "录入者", value: r.recordedBy, onChange: (b) => h("recordedBy", b.currentTarget.value) }),
    /* @__PURE__ */ g.jsx(mt, { variant: "primary", onClick: v, children: "提交评分" }),
    c && /* @__PURE__ */ g.jsx("pre", { className: c.ok ? "ok" : "err", children: c.ok ? `已写入：${c.file || "(dry run)"}` : JSON.stringify(c, null, 2) })
  ] });
}
function hb({ tick: i }) {
  const [r, o] = F.useState([]), [c, d] = F.useState({}), [h, v] = F.useState(""), [b, R] = F.useState(!1), w = F.useCallback(async () => {
    const N = await rt(Sn("标签库.md"));
    o(N.ok ? Lo(N.content) : []);
  }, []);
  F.useEffect(() => {
    w();
  }, [w, i]);
  async function D(N, Y, x) {
    const Z = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), ee = c[N] || `裁决执行：${N}`, Q = await on("/api/tool/apply_tag_merge", { mergedLabel: Y, target: x, date: Z, evidence: ee });
    v(Q.ok ? `已执行：${Y} → ${Q.now}` : Q.message || JSON.stringify(Q)), Q.ok && await w();
  }
  async function p() {
    R(!0), v("");
    try {
      const N = await on("/api/model/propose-merges", {});
      if (!N.started) {
        v(N.message || "发起失败"), R(!1);
        return;
      }
      const Y = Date.now();
      let x = null;
      for (; Date.now() - Y < 180 * 1e3; ) {
        await new Promise((ee) => setTimeout(ee, 4e3));
        const Z = await rt("/api/model/status").catch(() => null);
        if (Z && Z.running === !1 && Z.kind === "propose" && Z.lastResult) {
          x = Z.lastResult;
          break;
        }
      }
      if (!x) {
        v("等待超时（3 分钟），稍后刷新本页"), R(!1);
        return;
      }
      v(x.ok ? `已入队 ${x.queued.length} 对：${x.queued.join("；")}` : x.message || "未产出建议"), x.ok && await w();
    } catch (N) {
      v(`请求失败：${String(N?.message || N)}`);
    }
    R(!1);
  }
  async function B() {
    const N = await on("/api/tool/suggest_tag_merges", {});
    v(N.ok ? N.written ? `共现入队 ${N.written} 对` : "共现提示无新候选（语义相近的对请用模型提议）" : N.message || JSON.stringify(N)), N.ok && await w();
  }
  const z = r.filter((N) => !N.decision);
  return /* @__PURE__ */ g.jsxs("div", { children: [
    /* @__PURE__ */ g.jsx("p", { className: "hint", children: "相近标签会进到这里，由你决定合并方向；裁决后库内归一，原始记录不动。" }),
    /* @__PURE__ */ g.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ g.jsx(mt, { variant: "primary", disabled: b, onClick: () => {
        p();
      }, children: b ? "提议中…" : "模型提议疑似对" }),
      /* @__PURE__ */ g.jsx(mt, { disabled: b, onClick: () => {
        B();
      }, children: "跑共现提示" }),
      /* @__PURE__ */ g.jsx("span", { className: "hint", children: "提议与共现只负责入队；合并方向由你在下方卡片上裁决。" })
    ] }),
    r.length === 0 && /* @__PURE__ */ g.jsx(li, { title: "暂无待裁决标签", description: "篇目积累出相近标签后，候选会自动出现在这里。" }),
    r.map((N) => /* @__PURE__ */ g.jsx(Ca, { title: N.pair, description: `${N.date} 进队 · ${N.evidence}`, children: N.decision ? /* @__PURE__ */ g.jsxs("p", { className: "decided", children: [
      "已裁决：",
      N.decision
    ] }) : /* @__PURE__ */ g.jsxs("div", { className: "queue-actions", children: [
      [N.pair.split(" vs ")[0], N.pair.split(" vs ")[1]].filter(Boolean).map((Y, x, Z) => /* @__PURE__ */ g.jsx("div", { className: "queue-op", children: /* @__PURE__ */ g.jsxs(mt, { onClick: () => D(N.pair, Y, Z[1 - x]), children: [
        "「",
        Y,
        "」并入「",
        Z[1 - x],
        "」"
      ] }) }, Y)),
      /* @__PURE__ */ g.jsx(Nt, { label: "依据（可空）", value: c[N.pair] || "", onChange: (Y) => d((x) => ({ ...x, [N.pair]: Y.currentTarget.value })) })
    ] }) }, N.pair)),
    z.length > 0 && null,
    h && /* @__PURE__ */ g.jsx("p", { className: h.startsWith("已") ? "ok" : "err", children: h })
  ] });
}
function mb({ tick: i }) {
  const [r, o] = F.useState([]), [c, d] = F.useState(""), [h, v] = F.useState("");
  return F.useEffect(() => {
    Ra("篇目").then(async (b) => {
      const R = await Promise.all(
        b.map(async (w) => {
          const { title: D, meta: p } = rp(await cp(w), w.replace(/\.md$/, ""));
          return { id: w, title: D, meta: p || w.replace(/\.md$/, "") };
        })
      );
      o(R);
    });
  }, [i]), F.useEffect(() => {
    if (!c) {
      v("");
      return;
    }
    rt(Sn(`篇目/${c}`)).then((b) => v(b.ok ? b.content : b.message || "读取失败"));
  }, [c]), r.length ? /* @__PURE__ */ g.jsxs("div", { className: "split", children: [
    /* @__PURE__ */ g.jsx("div", { className: "side", children: /* @__PURE__ */ g.jsx("div", { className: "entrylist", children: r.map((b) => /* @__PURE__ */ g.jsxs(
      "button",
      {
        className: c === b.id ? "entryitem on" : "entryitem",
        onClick: () => d(b.id),
        children: [
          /* @__PURE__ */ g.jsx("span", { className: "entrytitle", children: b.title }),
          /* @__PURE__ */ g.jsx("span", { className: "entrymeta", children: b.meta })
        ]
      },
      b.id
    )) }) }),
    /* @__PURE__ */ g.jsx("div", { className: "main", children: c ? /* @__PURE__ */ g.jsx(ei, { md: h }) : /* @__PURE__ */ g.jsx("p", { className: "hint", children: "左侧选篇查看（每条登记都带位置与原文引文）。" }) })
  ] }) : /* @__PURE__ */ g.jsx(li, { title: "还没有篇目", description: "导入文献或在对话里拆解后，篇目会出现在这里。" });
}
function vb({ tick: i }) {
  const [r, o] = F.useState([]), [c, d] = F.useState(""), [h, v] = F.useState(""), [b, R] = F.useState(""), [w, D] = F.useState(""), [p, B] = F.useState({});
  if (F.useEffect(() => {
    Ra("篇目").then(async (N) => {
      o(N), N[0] && d(N[0]), N[1] && v(N[1]);
      const Y = await Promise.all(N.map(async (x) => {
        const { title: Z, meta: ee } = rp(await cp(x), x.replace(/\.md$/, ""));
        return [x, ee ? `${Z} · ${ee}` : Z];
      }));
      B(Object.fromEntries(Y));
    });
  }, [i]), F.useEffect(() => {
    c && rt(Sn(`篇目/${c}`)).then((N) => R(N.ok ? N.content : ""));
  }, [c]), F.useEffect(() => {
    h && rt(Sn(`篇目/${h}`)).then((N) => D(N.ok ? N.content : ""));
  }, [h]), r.length < 2) return /* @__PURE__ */ g.jsx(li, { title: "至少两篇可对比", description: "先积累两篇以上篇目。" });
  const z = r.map((N) => ({ value: N, label: p[N] || N.replace(/\.md$/, "") }));
  return /* @__PURE__ */ g.jsxs("div", { children: [
    /* @__PURE__ */ g.jsxs("div", { className: "grid2", children: [
      /* @__PURE__ */ g.jsx(Dv, { value: c, onChange: d, options: z }),
      /* @__PURE__ */ g.jsx(Dv, { value: h, onChange: v, options: z })
    ] }),
    /* @__PURE__ */ g.jsxs("div", { className: "compare", children: [
      /* @__PURE__ */ g.jsx("div", { className: "col", children: /* @__PURE__ */ g.jsx(ei, { md: b }) }),
      /* @__PURE__ */ g.jsx("div", { className: "col", children: /* @__PURE__ */ g.jsx(ei, { md: w }) })
    ] })
  ] });
}
function pb({ tick: i }) {
  const [r, o] = F.useState(null);
  if (F.useEffect(() => {
    (async () => {
      const [d, h, v, b, R, w] = await Promise.all([
        Ra("篇目"),
        Ra("锚点样本"),
        Ra("写作模型"),
        rt(Sn("标签库.md")),
        rt(Sn("闭包映射表.md")),
        rt(Sn("类型库.md"))
      ]), D = b.ok ? Oo(b.content, "标签") : [], p = b.ok ? Lo(b.content) : [], B = R.ok ? Oo(R.content, "from") : [], z = w.ok ? Oo(w.content, "类型") : [];
      o({
        papers: d.length,
        anchors: h.length,
        models: v.length,
        tags: D,
        queuePending: p.filter((N) => !N.decision).length,
        mapRows: B,
        types: z
      });
    })();
  }, [i]), !r) return /* @__PURE__ */ g.jsx("p", { className: "hint", children: "统计中…" });
  const c = r.papers ? Math.round(r.anchors / r.papers * 100) : 0;
  return /* @__PURE__ */ g.jsxs("div", { className: "cards", children: [
    /* @__PURE__ */ g.jsx(Ca, { title: `篇目 ${r.papers}`, description: "已完成的篇目" }),
    /* @__PURE__ */ g.jsx(Ca, { title: `锚点 ${r.anchors}`, description: `锚点覆盖度 ${c}%（置信度依据之一）` }),
    /* @__PURE__ */ g.jsx(Ca, { title: `标签 ${r.tags.length}`, description: `待裁决 ${r.queuePending}` }),
    /* @__PURE__ */ g.jsx(Ca, { title: `类型 ${r.types.length}`, description: `映射表 ${r.mapRows.length} 行` }),
    /* @__PURE__ */ g.jsx(Ca, { title: `写作模型 ${r.models}`, description: "版本化产物" }),
    /* @__PURE__ */ g.jsx(Ca, { title: "描述性 / 规范性频率", description: "描述与规范分开统计；篇目与锚点积累后按类型分组计算。" })
  ] });
}
function Oo(i, r) {
  const o = String(i || "").split(/\r?\n/), c = [];
  let d = !1;
  for (const h of o)
    if (h.startsWith("|") && !/^\|\s*-+/.test(h)) {
      const v = h.split("|").slice(1, -1).map((b) => b.trim());
      if (v[0] === r) {
        d = !0;
        continue;
      }
      d && v[0] && v[0] !== "（暂无）" && c.push(v[0]);
    } else d && !h.startsWith("|") && (d = !1);
  return c;
}
function gb({ tick: i }) {
  const [r, o] = F.useState([]), [c, d] = F.useState(""), [h, v] = F.useState(""), [b, R] = F.useState(!1), [w, D] = F.useState(""), [p, B] = F.useState({}), z = F.useMemo(() => {
    const x = /* @__PURE__ */ new Map();
    for (const Z of r) {
      const ee = /^(.+)-写作模型-v(\d+)\.md$/.exec(Z);
      ee && (x.has(ee[1]) || x.set(ee[1], []), x.get(ee[1]).push({ file: Z, v: Number(ee[2]) }));
    }
    return [...x.entries()].map(([Z, ee]) => (ee.sort((Q, X) => Q.v - X.v), { type: Z, latest: ee[ee.length - 1], history: ee.slice(0, -1).reverse() }));
  }, [r]), N = F.useCallback(() => {
    Ra("写作模型").then(o);
  }, []);
  F.useEffect(() => {
    N();
  }, [N, i]), F.useEffect(() => {
    if (!c) {
      v("");
      return;
    }
    rt(Sn(`写作模型/${c}`)).then((x) => v(x.ok ? x.content : ""));
  }, [c]);
  async function Y() {
    R(!0), D("");
    try {
      const x = await on("/api/model/generate", {});
      if (!x.started) {
        D(x.message || "发起失败"), R(!1);
        return;
      }
      D("建模中：归属 → 归纳 → 逐类型生成（每个类型一次模型调用，可离开本页）…");
      const Z = Date.now();
      let ee = null;
      for (; Date.now() - Z < 480 * 1e3; ) {
        await new Promise((fe) => setTimeout(fe, 5e3));
        const te = await rt("/api/model/status").catch(() => null);
        if (te && te.running === !1 && te.kind === "generate" && te.lastResult) {
          ee = te.lastResult;
          break;
        }
      }
      if (!ee) {
        D("等待超时（8 分钟），稍后刷新本页查看结果"), R(!1);
        return;
      }
      const Q = (ee.results || []).map((te) => te.ok ? `✓ ${te.type} → v${te.version}（样本 ${te.samples} 篇${te.previous ? `，原 v${te.previous}` : ""}）` : te.skipped ? `· ${te.type}：${te.skipped}` : `✗ ${te.type}：${te.error || "失败"}`), X = Q.filter((te) => te.startsWith("✓")).length;
      D((X ? Q.length === X ? "完成：" : "部分完成：" : "未生成：") + (Q.join("；") || ee.message || "")), X && (fn.toast.show({ message: "写作模型已生成/更新", type: "success" }), N());
    } catch (x) {
      D(`请求失败：${String(x?.message || x)}`);
    }
    R(!1);
  }
  return /* @__PURE__ */ g.jsxs("div", { children: [
    /* @__PURE__ */ g.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ g.jsx(mt, { variant: "primary", disabled: b, onClick: () => {
        Y();
      }, children: b ? "建模中…" : "生成 / 更新写作模型" }),
      /* @__PURE__ */ g.jsx("span", { className: "hint", children: "同类型样本 ≥2 篇才生成；新文献入库后再次点击即得新版本（v+1，历史保留）。" })
    ] }),
    w && /* @__PURE__ */ g.jsx("pre", { className: "hint", children: w }),
    z.length ? /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
      z.map((x) => /* @__PURE__ */ g.jsxs("div", { className: "model-group", children: [
        /* @__PURE__ */ g.jsxs("div", { className: "model-group-head", children: [
          /* @__PURE__ */ g.jsx("span", { className: "model-grouptitle", children: x.type }),
          /* @__PURE__ */ g.jsxs(
            "button",
            {
              className: c === x.latest.file ? "filebtn on" : "filebtn",
              onClick: () => d(x.latest.file),
              children: [
                "v",
                x.latest.v,
                "（最新）"
              ]
            }
          ),
          x.history.length > 0 && /* @__PURE__ */ g.jsx("button", { className: "linkbtn", onClick: () => B((Z) => ({ ...Z, [x.type]: !Z[x.type] })), children: p[x.type] ? "收起历史" : `历史 ${x.history.length} 版` })
        ] }),
        p[x.type] && /* @__PURE__ */ g.jsx("div", { className: "filebtns", children: x.history.map((Z) => /* @__PURE__ */ g.jsxs("button", { className: c === Z.file ? "filebtn on" : "filebtn", onClick: () => d(Z.file), children: [
          "v",
          Z.v
        ] }, Z.file)) })
      ] }, x.type)),
      c ? /* @__PURE__ */ g.jsx(ei, { md: h }) : /* @__PURE__ */ g.jsx("p", { className: "hint", children: "选择版本查看（每类默认最新；旧版折叠在「历史」里可对照）。" })
    ] }) : /* @__PURE__ */ g.jsx(li, { title: "暂无写作模型", description: "点上方按钮归纳生成；样本不足或样本未变的类型会跳过并说明。" })
  ] });
}
function yb() {
  const [i, r] = F.useState(""), [o, c] = F.useState([]), [d, h] = F.useState(null), [v, b] = F.useState("");
  async function R() {
    if (!i.trim()) return;
    const w = await rt(`/api/search?query=${encodeURIComponent(i.trim())}`);
    c(w.ok ? w.results : []), h(null);
  }
  return F.useEffect(() => {
    if (!d) {
      b("");
      return;
    }
    rt(Sn(d.path)).then((w) => b(w.ok ? w.content : "读取失败"));
  }, [d]), /* @__PURE__ */ g.jsxs("div", { children: [
    /* @__PURE__ */ g.jsx("p", { className: "hint", children: "按关键词物理命中排序帮你收窄候选，取舍仍由你判断；引用时带篇目位置与原文引文。" }),
    /* @__PURE__ */ g.jsxs("div", { className: "searchbar", children: [
      /* @__PURE__ */ g.jsx(
        Nt,
        {
          label: "关键词（空格 / 、 分隔）",
          value: i,
          onChange: (w) => r(w.currentTarget.value),
          placeholder: "例：反驳 开头",
          onKeyDown: (w) => {
            w.key === "Enter" && R();
          }
        }
      ),
      /* @__PURE__ */ g.jsx(mt, { variant: "primary", onClick: () => {
        R();
      }, children: "搜索" })
    ] }),
    /* @__PURE__ */ g.jsxs("div", { className: "searchresults", children: [
      o.map((w) => /* @__PURE__ */ g.jsxs("div", { className: d?.path === w.path ? "searchhit on" : "searchhit", children: [
        /* @__PURE__ */ g.jsxs("div", { className: "searchhit-head", onClick: () => h(w), children: [
          /* @__PURE__ */ g.jsx("span", { className: "badge", children: w.kind }),
          /* @__PURE__ */ g.jsx("b", { children: w.title }),
          /* @__PURE__ */ g.jsxs("span", { className: "hint", children: [
            "命中 ",
            w.score,
            " · ",
            w.path
          ] })
        ] }),
        d?.path !== w.path && w.hits?.slice(0, 2).map((D, p) => /* @__PURE__ */ g.jsxs("div", { className: "hitline", children: [
          "L",
          D.line,
          ": ",
          D.excerpt,
          D.text
        ] }, p))
      ] }, w.path)),
      !o.length && /* @__PURE__ */ g.jsx("p", { className: "hint", children: "输入关键词后搜索；结果按命中度排序，点击标题展开全文。" })
    ] }),
    d && /* @__PURE__ */ g.jsxs("div", { className: "searchpreview", children: [
      /* @__PURE__ */ g.jsx("h4", { children: d.title }),
      /* @__PURE__ */ g.jsx(ei, { md: v })
    ] })
  ] });
}
function Eb() {
  const [i, r] = F.useState(""), [o, c] = F.useState(""), [d, h] = F.useState("2"), [v, b] = F.useState("");
  F.useEffect(() => {
    rt("/api/config").then((w) => {
      w.ok && w.config ? (r((w.config.markers || []).join("、")), c(w.config.libraryPath || ""), h(String(w.config.maxPerRun ?? 2))) : b(w.message || "配置读取失败");
    });
  }, []);
  async function R() {
    b("保存中…");
    const w = await on("/api/config", {
      markers: i.split(/[\s、，,;；]+/).map((D) => D.trim()).filter(Boolean),
      libraryPath: o.trim(),
      maxPerRun: Number(d) || 2
    });
    b(w.ok ? "已保存" : `保存失败：${w.message || "未知错误"}`);
  }
  return /* @__PURE__ */ g.jsxs("div", { className: "settings", children: [
    /* @__PURE__ */ g.jsx("p", { className: "hint", children: "会话名命中标定词才会收到结构推荐；标定词留空 = 全静默，不向任何会话推送。" }),
    /* @__PURE__ */ g.jsx(
      Nt,
      {
        label: "会话标定词（、或逗号分隔，含任一即放行）",
        value: i,
        onChange: (w) => r(w.currentTarget.value),
        placeholder: "例：构成性、论文、写作"
      }
    ),
    /* @__PURE__ */ g.jsx(
      Nt,
      {
        label: "结构库路径（留空用默认；改后重启 Hana 生效）",
        value: o,
        onChange: (w) => c(w.currentTarget.value),
        placeholder: "默认：workspace 写作模型插件/结构库"
      }
    ),
    /* @__PURE__ */ g.jsx(
      Nt,
      {
        label: "单次推荐上限（1-2，设计上限 2）",
        value: d,
        onChange: (w) => h(w.currentTarget.value)
      }
    ),
    /* @__PURE__ */ g.jsxs("div", { className: "saverow", children: [
      /* @__PURE__ */ g.jsx(mt, { variant: "primary", onClick: () => {
        R();
      }, children: "保存" }),
      v && /* @__PURE__ */ g.jsx("span", { className: "savehint", children: v })
    ] }),
    /* @__PURE__ */ g.jsx("p", { className: "hint", children: "命中判定：标定词过闸后，取最近对话文本与标签库/类型库做字典交集，交集词走共用检索层出候选；候选只附命中事实，采纳与否由会话内模型判断。同会话已注入条目不重复推。" })
  ] });
}
function bb({ onDone: i }) {
  const [r, o] = F.useState(""), [c, d] = F.useState(!1), [h, v] = F.useState(null), [b, R] = F.useState(!1), [w, D] = F.useState(!1);
  async function p(N, Y) {
    d(!0), v(null);
    try {
      const x = await on("/api/import", Y !== void 0 ? { ...N, fromTs: Y } : N);
      if (!x.started) {
        v(x), d(!1);
        return;
      }
      v({ ok: !0, stage: "running", message: x.message || "拆解进行中" });
      const Z = await ip();
      v(Z), Z.ok ? (fn.toast.show({ message: "拆解完成，已入库", type: "success" }), i()) : Z.failureTs && (fn.toast.show({ message: "拆解失败，已记入待办", type: "error" }), i());
    } catch (x) {
      v({ ok: !1, stage: "network", message: String(x?.message || x) });
    }
    d(!1);
  }
  async function B(N, Y) {
    const x = String(N || "").trim();
    if (!x) {
      v({ ok: !1, stage: "input", message: "请先粘贴文献全文，或选择 / 拖入 md、txt、pdf 文件" });
      return;
    }
    await p({ text: x }, Y);
  }
  async function z(N) {
    if (/\.pdf$/i.test(N.name)) {
      if (N.size > 50 * 1024 * 1024) {
        v({ ok: !1, stage: "input", message: "PDF 超过 50 MB 上限" });
        return;
      }
      try {
        const Y = await new Promise((x, Z) => {
          const ee = new FileReader();
          ee.onload = () => x(String(ee.result).split(",")[1] || ""), ee.onerror = () => Z(new Error("文件读取失败")), ee.readAsDataURL(N);
        });
        await p({ pdfBase64: Y, filename: N.name });
      } catch (Y) {
        v({ ok: !1, stage: "input", message: String(Y?.message || Y) });
      }
      return;
    }
    if (!/\.(md|txt)$/i.test(N.name)) {
      v({ ok: !1, stage: "input", message: "支持 md / txt / pdf 文件" });
      return;
    }
    await p({ text: await N.text() });
  }
  return /* @__PURE__ */ g.jsxs("div", { className: "import-zone", children: [
    /* @__PURE__ */ g.jsx("h4", { className: "import-title", children: "导入文献" }),
    /* @__PURE__ */ g.jsxs(
      "div",
      {
        className: b ? "drop on" : "drop",
        onDragOver: (N) => {
          N.preventDefault(), R(!0);
        },
        onDragLeave: () => R(!1),
        onDrop: (N) => {
          N.preventDefault(), R(!1);
          const Y = N.dataTransfer.files?.[0];
          Y && z(Y);
        },
        children: [
          /* @__PURE__ */ g.jsx("p", { children: "把 .md / .txt / .pdf 文献拖到这里" }),
          /* @__PURE__ */ g.jsxs("label", { className: "filepick", children: [
            "或选择文件",
            /* @__PURE__ */ g.jsx(
              "input",
              {
                type: "file",
                accept: ".md,.txt,.pdf,text/plain,text/markdown,application/pdf",
                style: { display: "none" },
                onChange: (N) => {
                  const Y = N.target.files?.[0];
                  N.target.value = "", Y && z(Y);
                }
              }
            )
          ] }),
          /* @__PURE__ */ g.jsxs("p", { className: "hint zotero-toggle", children: [
            "或",
            /* @__PURE__ */ g.jsx("button", { className: "linkbtn", onClick: () => D((N) => !N), children: w ? "收起 Zotero" : "从 Zotero 取" })
          ] })
        ]
      }
    ),
    w && /* @__PURE__ */ g.jsx(Sb, { submit: (N) => p(N), busy: c }),
    /* @__PURE__ */ g.jsx(
      "textarea",
      {
        className: "pastebox",
        value: r,
        onChange: (N) => o(N.target.value),
        placeholder: "也可以直接粘贴文献全文…",
        rows: 4,
        disabled: c
      }
    ),
    /* @__PURE__ */ g.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ g.jsx(mt, { variant: "primary", disabled: c || !r.trim(), onClick: () => {
        B(r);
      }, children: "一键拆解" }),
      c && /* @__PURE__ */ g.jsx("span", { className: "hint", children: "正在拆解：提取（PDF 先转文本）→ 落格校验 → 入库（约 1-3 分钟，可离开本页，完成后有提示）…" })
    ] }),
    h && /* @__PURE__ */ g.jsx("pre", { className: h.ok ? "ok" : "err", children: h.ok ? h.stage === "running" ? `${h.message || "拆解进行中…"}` : `已入库：${h.file}（第 ${h.attempts} 次通过${h.tagsAdded?.length ? `，新增标签 ${h.tagsAdded.join("、")}` : ""}）` + (h.pdfEngine ? `
PDF 引擎：${h.pdfEngine === "pymupdf" ? "PyMuPDF" : "unpdf（回退）—— 安装 PyMuPDF 可启用更稳的主引擎：python -m pip install pymupdf"}` : "") : `${h.message || "拆解失败"}${h.errors?.length ? `
` + h.errors.slice(0, 6).map((N) => `· ${N.field}：${N.message}`).join(`
`) : ""}${h.failureTs ? `
（已记入待办，可到「待办 · 导入失败」重试）` : ""}` })
  ] });
}
function Sb({ submit: i, busy: r }) {
  const [o, c] = F.useState(""), [d, h] = F.useState(null), [v, b] = F.useState(null), [R, w] = F.useState([]), [D, p] = F.useState(""), [B, z] = F.useState(!1);
  async function N() {
    z(!0), p(""), b(null), w([]);
    try {
      const Q = await on("/api/tool/zotero_search", { query: o, limit: 20 });
      Q && Array.isArray(Q.items) ? (h(Q.items), Q.items.length || p("没有命中条目")) : p(Q?.message || "Zotero 查询失败");
    } catch (Q) {
      p(String(Q?.message || Q));
    }
    z(!1);
  }
  async function Y(Q) {
    if (v === Q) {
      b(null);
      return;
    }
    z(!0), p("");
    try {
      const X = await on("/api/tool/zotero_item", { key: Q });
      X && X.item ? (w(X.attachments || []), b(Q)) : p(X?.message || "条目读取失败");
    } catch (X) {
      p(String(X?.message || X));
    }
    z(!1);
  }
  async function x(Q) {
    try {
      const X = await on("/api/tool/zotero_attachment_path", { attachmentKey: Q });
      if (X && X.path) return String(X.path);
      p(X?.message || "附件路径解析失败");
    } catch (X) {
      p(String(X?.message || X));
    }
    return null;
  }
  async function Z(Q) {
    const X = await x(Q.key);
    X && await i({ pdfPath: X, filename: Q.filename || "" });
  }
  async function ee(Q) {
    const X = await x(Q.key);
    if (X)
      try {
        await fn.clipboard.writeText(X), fn.toast.show({ message: "路径已复制", type: "success" });
      } catch {
        p(`复制失败，路径：${X}`);
      }
  }
  return /* @__PURE__ */ g.jsxs("div", { className: "zbox", children: [
    /* @__PURE__ */ g.jsx("p", { className: "hint", children: "需 Zotero 桌面端运行，且设置 → 高级 → 勾选「Allow other applications on this computer to communicate with Zotero」。" }),
    /* @__PURE__ */ g.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ g.jsx(
        Nt,
        {
          label: "搜索（标题 / 作者 / 年份；留空 = 最近添加）",
          value: o,
          onChange: (Q) => c(Q.currentTarget.value),
          onKeyDown: (Q) => {
            Q.key === "Enter" && N();
          }
        }
      ),
      /* @__PURE__ */ g.jsx(mt, { disabled: B || r, onClick: () => {
        N();
      }, children: "搜索" })
    ] }),
    D && /* @__PURE__ */ g.jsx("p", { className: "err", children: D }),
    d && d.length > 0 && /* @__PURE__ */ g.jsx("div", { className: "zlist", children: d.map((Q) => /* @__PURE__ */ g.jsxs("div", { className: "zitem", children: [
      /* @__PURE__ */ g.jsxs("div", { className: "zitem-head", onClick: () => {
        Y(Q.key);
      }, children: [
        /* @__PURE__ */ g.jsx("b", { children: Q.title || "（无标题）" }),
        /* @__PURE__ */ g.jsx("span", { className: "hint", children: [Q.creators, Q.date, Q.publicationTitle].filter(Boolean).join(" · ") })
      ] }),
      v === Q.key && /* @__PURE__ */ g.jsxs("div", { className: "zattach", children: [
        R.length === 0 && /* @__PURE__ */ g.jsx("p", { className: "hint", children: "无附件" }),
        R.map((X) => /* @__PURE__ */ g.jsxs("div", { className: "zattach-row", children: [
          /* @__PURE__ */ g.jsx("span", { className: "zattach-name", children: X.filename || X.contentType || X.key }),
          /* @__PURE__ */ g.jsxs("span", { className: "zattach-actions", children: [
            /\.pdf$/i.test(X.filename || "") && /* @__PURE__ */ g.jsx(mt, { variant: "primary", disabled: r || B, onClick: () => {
              Z(X);
            }, children: "导入拆解" }),
            /* @__PURE__ */ g.jsx(mt, { disabled: B, onClick: () => {
              ee(X);
            }, children: "复制路径" })
          ] })
        ] }, X.key))
      ] })
    ] }, Q.key)) })
  ] });
}
function Tb({ stats: i, go: r, onDone: o }) {
  const c = i ? i.queuePending + i.failures : 0, [d, h] = F.useState("loading");
  return F.useEffect(() => {
    rt("/api/config").then((v) => {
      const b = v?.config?.libraryPath ?? "";
      h(b && !String(b).startsWith("NOT_CONFIGURED") ? "ok" : "unconfigured");
    }).catch(() => h("loading"));
  }, []), /* @__PURE__ */ g.jsxs("div", { className: "home", children: [
    /* @__PURE__ */ g.jsx("p", { className: "tagline", children: "把论文拆成可回溯的论证结构，沉淀为写作模型，写论文时检索取用。" }),
    d === "unconfigured" && /* @__PURE__ */ g.jsxs("div", { className: "home-banner", children: [
      "尚未配置结构库。到「设置」填写 libraryPath 并保存，模板会自动铺到该目录，无需手动拷贝。",
      /* @__PURE__ */ g.jsx(mt, { onClick: () => r("settings"), children: "前往设置" })
    ] }),
    /* @__PURE__ */ g.jsxs("ol", { className: "steps", children: [
      /* @__PURE__ */ g.jsx("li", { children: "把文献拖进面板一键拆解，或在对话里让我拆" }),
      /* @__PURE__ */ g.jsx("li", { children: "库里提出的疑问到「待办」处理，保证每条引文可回溯" }),
      /* @__PURE__ */ g.jsx("li", { children: "写论文时到「取用」检索同类模型，按出处引用" })
    ] }),
    /* @__PURE__ */ g.jsxs("div", { className: "home-actions", children: [
      /* @__PURE__ */ g.jsx(mt, { variant: "primary", onClick: () => r("use"), children: "去取用" }),
      /* @__PURE__ */ g.jsx(mt, { onClick: () => r("library"), children: "看结构库" }),
      /* @__PURE__ */ g.jsx(mt, { disabled: !i || c === 0, onClick: () => r("todo"), children: c > 0 ? `处理待办（${c}）` : "暂无待办" })
    ] }),
    /* @__PURE__ */ g.jsx("div", { className: "statusbar", children: i ? `库内 ${i.papers} 篇目 · ${i.models} 模型 · 待办 ${c} 条` : "统计中…" }),
    /* @__PURE__ */ g.jsx(bb, { onDone: o })
  ] });
}
function Ab({ tick: i, bump: r }) {
  const [o, c] = F.useState([]), [d, h] = F.useState(null), [v, b] = F.useState(""), R = F.useCallback(async () => {
    const p = await rt("/api/import/failures").catch(() => ({ items: [] }));
    c(p.items || []);
  }, []);
  F.useEffect(() => {
    R();
  }, [R, i]);
  async function w(p) {
    h(p.ts), b("");
    try {
      const B = await on("/api/import", { text: p.text, fromTs: p.ts });
      if (B.started) {
        b("重试中（约 1-3 分钟，可离开本页）…");
        const z = await ip();
        z.ok ? (b(`重试成功：${z.file}`), fn.toast.show({ message: "重试成功，已入库", type: "success" })) : b(`仍失败：${z.message || "未知错误"}${z.failureTs ? "（已刷新记录）" : ""}`);
      } else B.ok ? (b(`重试成功：${B.file}`), fn.toast.show({ message: "重试成功，已入库", type: "success" })) : b(`仍失败：${B.message || "未知错误"}`);
    } catch (B) {
      b(`请求失败：${String(B?.message || B)}`);
    }
    h(null), await R(), r();
  }
  async function D(p) {
    await on("/api/import/failures/dismiss", { ts: p.ts }).catch(() => null), await R(), r();
  }
  return o.length ? /* @__PURE__ */ g.jsxs("div", { children: [
    /* @__PURE__ */ g.jsx("p", { className: "hint", children: "拆解失败的导入（多为校验未过或模型异常）连原文一起存在这里，重试走同一条链路。" }),
    o.map((p) => /* @__PURE__ */ g.jsxs("div", { className: "fail-item", children: [
      /* @__PURE__ */ g.jsxs("div", { className: "fail-head", children: [
        /* @__PURE__ */ g.jsx("b", { children: new Date(p.ts).toLocaleString() }),
        /* @__PURE__ */ g.jsx("span", { className: "badge", children: p.stage }),
        /* @__PURE__ */ g.jsxs("span", { className: "hint", children: [
          "尝试 ",
          p.attempts,
          " 次 · ",
          (p.text || "").length,
          " 字"
        ] })
      ] }),
      /* @__PURE__ */ g.jsx("div", { className: "fail-msg", children: p.message }),
      (p.errors || []).slice(0, 4).map((B, z) => /* @__PURE__ */ g.jsxs("div", { className: "hint", children: [
        "· ",
        B.field,
        "：",
        B.message
      ] }, z)),
      /* @__PURE__ */ g.jsxs("div", { className: "fail-actions", children: [
        /* @__PURE__ */ g.jsx(mt, { variant: "primary", disabled: d === p.ts, onClick: () => {
          w(p);
        }, children: d === p.ts ? "重试中…" : "重试" }),
        /* @__PURE__ */ g.jsx(mt, { disabled: d === p.ts, onClick: () => {
          D(p);
        }, children: "移除" })
      ] })
    ] }, p.ts)),
    v && /* @__PURE__ */ g.jsx("p", { className: v.startsWith("重试成功") ? "ok" : "err", children: v })
  ] }) : /* @__PURE__ */ g.jsx(li, { title: "暂无导入失败", description: "导入拆解失败的文献会落在这里，可原样重试。" });
}
function _b() {
  const i = document.getElementById("root")?.dataset.surface || "page", [r, o] = F.useState("home"), [c, d] = F.useState({
    home: "",
    use: "search",
    library: "browse",
    todo: "score",
    settings: ""
  }), [h, v] = F.useState(0), [b, R] = F.useState(null), w = F.useCallback(() => v((N) => N + 1), []), D = F.useCallback((N) => o(N), []);
  F.useEffect(() => {
    fn.ready(), fn.ui.resize({ height: i === "widget" ? 420 : 760 });
  }, [i]), F.useEffect(() => {
    let N = !0;
    return fb().then((Y) => {
      N && R(Y);
    }).catch(() => {
      N && R(null);
    }), () => {
      N = !1;
    };
  }, [h, r]);
  const p = c[r], B = F.useMemo(() => {
    switch (r) {
      case "home":
        return /* @__PURE__ */ g.jsx(Tb, { stats: b, go: D, onDone: w });
      case "use":
        return p === "models" ? /* @__PURE__ */ g.jsx(gb, { tick: h }) : /* @__PURE__ */ g.jsx(yb, {});
      case "library":
        return p === "compare" ? /* @__PURE__ */ g.jsx(vb, { tick: h }) : p === "board" ? /* @__PURE__ */ g.jsx(pb, { tick: h }) : /* @__PURE__ */ g.jsx(mb, { tick: h });
      case "todo":
        return p === "queue" ? /* @__PURE__ */ g.jsx(hb, { tick: h }) : p === "import-fail" ? /* @__PURE__ */ g.jsx(Ab, { tick: h, bump: w }) : /* @__PURE__ */ g.jsx(db, {});
      case "settings":
        return /* @__PURE__ */ g.jsx(Eb, {});
    }
  }, [r, p, h, b, D, w]), z = b ? b.queuePending + b.failures : 0;
  return /* @__PURE__ */ g.jsx(lb, { mode: "inherit", className: "plugin-panel", children: /* @__PURE__ */ g.jsxs(
    Ca,
    {
      title: "论文结构建模",
      description: "把论文拆成可回溯的论证结构，沉淀为写作模型，写论文时检索取用。",
      actions: /* @__PURE__ */ g.jsx(mt, { variant: "ghost", onClick: w, children: "刷新" }),
      children: [
        /* @__PURE__ */ g.jsx("nav", { className: "tabs zones", children: rb.map((N) => /* @__PURE__ */ g.jsxs("button", { className: r === N.id ? "tab on" : "tab", onClick: () => o(N.id), children: [
          N.label,
          N.id === "todo" && z > 0 && /* @__PURE__ */ g.jsx("span", { className: "nav-badge", children: z })
        ] }, N.id)) }),
        r !== "home" && r !== "settings" && /* @__PURE__ */ g.jsx("nav", { className: "tabs sub", children: cb[r].map((N) => /* @__PURE__ */ g.jsx(
          "button",
          {
            className: p === N.id ? "tab on" : "tab",
            onClick: () => d((Y) => ({ ...Y, [r]: N.id })),
            children: N.label
          },
          N.id
        )) }),
        /* @__PURE__ */ g.jsx("div", { className: "tab-body", children: B })
      ]
    }
  ) });
}
const zv = document.getElementById("root");
zv && h0.createRoot(zv).render(/* @__PURE__ */ g.jsx(_b, {}));
