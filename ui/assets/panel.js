var po = { exports: {} }, Xi = {};
var sg;
function r0() {
  if (sg) return Xi;
  sg = 1;
  var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function o(c, d, h) {
    var p = null;
    if (h !== void 0 && (p = "" + h), d.key !== void 0 && (p = "" + d.key), "key" in d) {
      h = {};
      for (var T in d)
        T !== "key" && (h[T] = d[T]);
    } else h = d;
    return d = h.ref, {
      $$typeof: u,
      type: c,
      key: p,
      ref: d !== void 0 ? d : null,
      props: h
    };
  }
  return Xi.Fragment = r, Xi.jsx = o, Xi.jsxs = o, Xi;
}
var og;
function c0() {
  return og || (og = 1, po.exports = r0()), po.exports;
}
var m = c0(), vo = { exports: {} }, be = {};
var fg;
function s0() {
  if (fg) return be;
  fg = 1;
  var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.consumer"), p = /* @__PURE__ */ Symbol.for("react.context"), T = /* @__PURE__ */ Symbol.for("react.forward_ref"), R = /* @__PURE__ */ Symbol.for("react.suspense"), O = /* @__PURE__ */ Symbol.for("react.memo"), C = /* @__PURE__ */ Symbol.for("react.lazy"), v = /* @__PURE__ */ Symbol.for("react.activity"), M = /* @__PURE__ */ Symbol.for("react.view_transition"), b = Symbol.iterator;
  function S(E) {
    return E === null || typeof E != "object" ? null : (E = b && E[b] || E["@@iterator"], typeof E == "function" ? E : null);
  }
  var z = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, H = Object.assign, $ = {};
  function J(E, G, ie) {
    this.props = E, this.context = G, this.refs = $, this.updater = ie || z;
  }
  J.prototype.isReactComponent = {}, J.prototype.setState = function(E, G) {
    if (typeof E != "object" && typeof E != "function" && E != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, E, G, "setState");
  }, J.prototype.forceUpdate = function(E) {
    this.updater.enqueueForceUpdate(this, E, "forceUpdate");
  };
  function Z() {
  }
  Z.prototype = J.prototype;
  function X(E, G, ie) {
    this.props = E, this.context = G, this.refs = $, this.updater = ie || z;
  }
  var he = X.prototype = new Z();
  he.constructor = X, H(he, J.prototype), he.isPureReactComponent = !0;
  var P = Array.isArray;
  function ne() {
  }
  var me = { H: null, A: null, T: null, S: null }, ae = Object.prototype.hasOwnProperty;
  function se(E, G, ie) {
    var ee = ie.ref;
    return {
      $$typeof: u,
      type: E,
      key: G,
      ref: ee !== void 0 ? ee : null,
      props: ie
    };
  }
  function ge(E, G) {
    return se(E.type, G, E.props);
  }
  function we(E) {
    return typeof E == "object" && E !== null && E.$$typeof === u;
  }
  function ke(E) {
    var G = { "=": "=0", ":": "=2" };
    return "$" + E.replace(/[=:]/g, function(ie) {
      return G[ie];
    });
  }
  var ft = /\/+/g;
  function B(E, G) {
    return typeof E == "object" && E !== null && E.key != null ? ke("" + E.key) : G.toString(36);
  }
  function L(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (typeof E.status == "string" ? E.then(ne, ne) : (E.status = "pending", E.then(
          function(G) {
            E.status === "pending" && (E.status = "fulfilled", E.value = G);
          },
          function(G) {
            E.status === "pending" && (E.status = "rejected", E.reason = G);
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
  function k(E, G, ie, ee, Te) {
    var Ae = typeof E;
    (Ae === "undefined" || Ae === "boolean") && (E = null);
    var xe = !1;
    if (E === null) xe = !0;
    else
      switch (Ae) {
        case "bigint":
        case "string":
        case "number":
          xe = !0;
          break;
        case "object":
          switch (E.$$typeof) {
            case u:
            case r:
              xe = !0;
              break;
            case C:
              return xe = E._init, k(
                xe(E._payload),
                G,
                ie,
                ee,
                Te
              );
          }
      }
    if (xe)
      return Te = Te(E), xe = ee === "" ? "." + B(E, 0) : ee, P(Te) ? (ie = "", xe != null && (ie = xe.replace(ft, "$&/") + "/"), k(Te, G, ie, "", function(Wt) {
        return Wt;
      })) : Te != null && (we(Te) && (Te = ge(
        Te,
        ie + (Te.key == null || E && E.key === Te.key ? "" : ("" + Te.key).replace(
          ft,
          "$&/"
        ) + "/") + xe
      )), G.push(Te)), 1;
    xe = 0;
    var te = ee === "" ? "." : ee + ":";
    if (P(E))
      for (var pe = 0; pe < E.length; pe++)
        ee = E[pe], Ae = te + B(ee, pe), xe += k(
          ee,
          G,
          ie,
          Ae,
          Te
        );
    else if (pe = S(E), typeof pe == "function")
      for (E = pe.call(E), pe = 0; !(ee = E.next()).done; )
        ee = ee.value, Ae = te + B(ee, pe++), xe += k(
          ee,
          G,
          ie,
          Ae,
          Te
        );
    else if (Ae === "object") {
      if (typeof E.then == "function")
        return k(
          L(E),
          G,
          ie,
          ee,
          Te
        );
      throw G = String(E), Error(
        "Objects are not valid as a React child (found: " + (G === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : G) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return xe;
  }
  function K(E, G, ie) {
    if (E == null) return E;
    var ee = [], Te = 0;
    return k(E, ee, "", "", function(Ae) {
      return G.call(ie, Ae, Te++);
    }), ee;
  }
  function oe(E) {
    if (E._status === -1) {
      var G = E._result, ie = G();
      ie.then(
        function(ee) {
          (E._status === 0 || E._status === -1) && (E._status = 1, E._result = ee, ie.status === void 0 && (ie.status = "fulfilled", ie.value = ee));
        },
        function(ee) {
          (E._status === 0 || E._status === -1) && (E._status = 2, E._result = ee, ie.status === void 0 && (ie.status = "rejected", ie.reason = ee));
        }
      ), E._status === -1 && (E._status = 0, E._result = ie);
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var de = typeof reportError == "function" ? reportError : function(E) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var G = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof E == "object" && E !== null && typeof E.message == "string" ? String(E.message) : String(E),
        error: E
      });
      if (!window.dispatchEvent(G)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", E);
      return;
    }
    console.error(E);
  };
  function ze(E) {
    var G = me.T, ie = {};
    ie.types = G !== null ? G.types : null, me.T = ie;
    try {
      var ee = E(), Te = me.S;
      Te !== null && Te(ie, ee), typeof ee == "object" && ee !== null && typeof ee.then == "function" && ee.then(ne, de);
    } catch (Ae) {
      de(Ae);
    } finally {
      G !== null && ie.types !== null && (G.types = ie.types), me.T = G;
    }
  }
  function Le(E) {
    var G = me.T;
    if (G !== null) {
      var ie = G.types;
      ie === null ? G.types = [E] : ie.indexOf(E) === -1 && ie.push(E);
    } else ze(Le.bind(null, E));
  }
  var Se = {
    map: K,
    forEach: function(E, G, ie) {
      K(
        E,
        function() {
          G.apply(this, arguments);
        },
        ie
      );
    },
    count: function(E) {
      var G = 0;
      return K(E, function() {
        G++;
      }), G;
    },
    toArray: function(E) {
      return K(E, function(G) {
        return G;
      }) || [];
    },
    only: function(E) {
      if (!we(E))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return E;
    }
  };
  return be.Activity = v, be.Children = Se, be.Component = J, be.Fragment = o, be.Profiler = d, be.PureComponent = X, be.StrictMode = c, be.Suspense = R, be.ViewTransition = M, be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = me, be.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(E) {
      return me.H.useMemoCache(E);
    }
  }, be.addTransitionType = Le, be.cache = function(E) {
    return function() {
      return E.apply(null, arguments);
    };
  }, be.cacheSignal = function() {
    return null;
  }, be.cloneElement = function(E, G, ie) {
    if (E == null)
      throw Error(
        "The argument must be a React element, but you passed " + E + "."
      );
    var ee = H({}, E.props), Te = E.key;
    if (G != null)
      for (Ae in G.key !== void 0 && (Te = "" + G.key), G)
        !ae.call(G, Ae) || Ae === "key" || Ae === "__self" || Ae === "__source" || Ae === "ref" && G.ref === void 0 || (ee[Ae] = G[Ae]);
    var Ae = arguments.length - 2;
    if (Ae === 1) ee.children = ie;
    else if (1 < Ae) {
      for (var xe = Array(Ae), te = 0; te < Ae; te++)
        xe[te] = arguments[te + 2];
      ee.children = xe;
    }
    return se(E.type, Te, ee);
  }, be.createContext = function(E) {
    return E = {
      $$typeof: p,
      _currentValue: E,
      _currentValue2: E,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, E.Provider = E, E.Consumer = {
      $$typeof: h,
      _context: E
    }, E;
  }, be.createElement = function(E, G, ie) {
    var ee, Te = {}, Ae = null;
    if (G != null)
      for (ee in G.key !== void 0 && (Ae = "" + G.key), G)
        ae.call(G, ee) && ee !== "key" && ee !== "__self" && ee !== "__source" && (Te[ee] = G[ee]);
    var xe = arguments.length - 2;
    if (xe === 1) Te.children = ie;
    else if (1 < xe) {
      for (var te = Array(xe), pe = 0; pe < xe; pe++)
        te[pe] = arguments[pe + 2];
      Te.children = te;
    }
    if (E && E.defaultProps)
      for (ee in xe = E.defaultProps, xe)
        Te[ee] === void 0 && (Te[ee] = xe[ee]);
    return se(E, Ae, Te);
  }, be.createRef = function() {
    return { current: null };
  }, be.forwardRef = function(E) {
    return { $$typeof: T, render: E };
  }, be.isValidElement = we, be.lazy = function(E) {
    return {
      $$typeof: C,
      _payload: { _status: -1, _result: E },
      _init: oe
    };
  }, be.memo = function(E, G) {
    return {
      $$typeof: O,
      type: E,
      compare: G === void 0 ? null : G
    };
  }, be.startTransition = ze, be.unstable_useCacheRefresh = function() {
    return me.H.useCacheRefresh();
  }, be.use = function(E) {
    return me.H.use(E);
  }, be.useActionState = function(E, G, ie) {
    return me.H.useActionState(E, G, ie);
  }, be.useCallback = function(E, G) {
    return me.H.useCallback(E, G);
  }, be.useContext = function(E) {
    return me.H.useContext(E);
  }, be.useDebugValue = function() {
  }, be.useDeferredValue = function(E, G) {
    return me.H.useDeferredValue(E, G);
  }, be.useEffect = function(E, G) {
    return me.H.useEffect(E, G);
  }, be.useEffectEvent = function(E) {
    return me.H.useEffectEvent(E);
  }, be.useId = function() {
    return me.H.useId();
  }, be.useImperativeHandle = function(E, G, ie) {
    return me.H.useImperativeHandle(E, G, ie);
  }, be.useInsertionEffect = function(E, G) {
    return me.H.useInsertionEffect(E, G);
  }, be.useLayoutEffect = function(E, G) {
    return me.H.useLayoutEffect(E, G);
  }, be.useMemo = function(E, G) {
    return me.H.useMemo(E, G);
  }, be.useOptimistic = function(E, G) {
    return me.H.useOptimistic(E, G);
  }, be.useReducer = function(E, G, ie) {
    return me.H.useReducer(E, G, ie);
  }, be.useRef = function(E) {
    return me.H.useRef(E);
  }, be.useState = function(E) {
    return me.H.useState(E);
  }, be.useSyncExternalStore = function(E, G, ie) {
    return me.H.useSyncExternalStore(
      E,
      G,
      ie
    );
  }, be.useTransition = function() {
    return me.H.useTransition();
  }, be.version = "19.3.0", be;
}
var dg;
function zo() {
  return dg || (dg = 1, vo.exports = s0()), vo.exports;
}
var Q = zo(), yo = { exports: {} }, Qi = {}, Eo = { exports: {} }, bo = {};
var hg;
function o0() {
  return hg || (hg = 1, (function(u) {
    function r(L, k) {
      var K = L.length;
      L.push(k);
      e: for (; 0 < K; ) {
        var oe = K - 1 >>> 1, de = L[oe];
        if (0 < d(de, k))
          L[oe] = k, L[K] = de, K = oe;
        else break e;
      }
    }
    function o(L) {
      return L.length === 0 ? null : L[0];
    }
    function c(L) {
      if (L.length === 0) return null;
      var k = L[0], K = L.pop();
      if (K !== k) {
        L[0] = K;
        e: for (var oe = 0, de = L.length, ze = de >>> 1; oe < ze; ) {
          var Le = 2 * (oe + 1) - 1, Se = L[Le], E = Le + 1, G = L[E];
          if (0 > d(Se, K))
            E < de && 0 > d(G, Se) ? (L[oe] = G, L[E] = K, oe = E) : (L[oe] = Se, L[Le] = K, oe = Le);
          else if (E < de && 0 > d(G, K))
            L[oe] = G, L[E] = K, oe = E;
          else break e;
        }
      }
      return k;
    }
    function d(L, k) {
      var K = L.sortIndex - k.sortIndex;
      return K !== 0 ? K : L.id - k.id;
    }
    if (u.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      u.unstable_now = function() {
        return h.now();
      };
    } else {
      var p = Date, T = p.now();
      u.unstable_now = function() {
        return p.now() - T;
      };
    }
    var R = [], O = [], C = 1, v = null, M = 3, b = !1, S = !1, z = !1, H = !1, $ = typeof setTimeout == "function" ? setTimeout : null, J = typeof clearTimeout == "function" ? clearTimeout : null, Z = typeof setImmediate < "u" ? setImmediate : null;
    function X(L) {
      for (var k = o(O); k !== null; ) {
        if (k.callback === null) c(O);
        else if (k.startTime <= L)
          c(O), k.sortIndex = k.expirationTime, r(R, k);
        else break;
        k = o(O);
      }
    }
    function he(L) {
      if (z = !1, X(L), !S)
        if (o(R) !== null)
          S = !0, P || (P = !0, we());
        else {
          var k = o(O);
          k !== null && B(he, k.startTime - L);
        }
    }
    var P = !1, ne = -1, me = 5, ae = -1;
    function se() {
      return H ? !0 : !(u.unstable_now() - ae < me);
    }
    function ge() {
      if (H = !1, P) {
        var L = u.unstable_now();
        ae = L;
        var k = !0;
        try {
          e: {
            S = !1, z && (z = !1, J(ne), ne = -1), b = !0;
            var K = M;
            try {
              t: {
                for (X(L), v = o(R); v !== null && !(v.expirationTime > L && se()); ) {
                  var oe = v.callback;
                  if (typeof oe == "function") {
                    v.callback = null, M = v.priorityLevel;
                    var de = oe(
                      v.expirationTime <= L
                    );
                    if (L = u.unstable_now(), typeof de == "function") {
                      v.callback = de, X(L), k = !0;
                      break t;
                    }
                    v === o(R) && c(R), X(L);
                  } else c(R);
                  v = o(R);
                }
                if (v !== null) k = !0;
                else {
                  var ze = o(O);
                  ze !== null && B(
                    he,
                    ze.startTime - L
                  ), k = !1;
                }
              }
              break e;
            } finally {
              v = null, M = K, b = !1;
            }
            k = void 0;
          }
        } finally {
          k ? we() : P = !1;
        }
      }
    }
    var we;
    if (typeof Z == "function")
      we = function() {
        Z(ge);
      };
    else if (typeof MessageChannel < "u") {
      var ke = new MessageChannel(), ft = ke.port2;
      ke.port1.onmessage = ge, we = function() {
        ft.postMessage(null);
      };
    } else
      we = function() {
        $(ge, 0);
      };
    function B(L, k) {
      ne = $(function() {
        L(u.unstable_now());
      }, k);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(L) {
      L.callback = null;
    }, u.unstable_forceFrameRate = function(L) {
      0 > L || 125 < L ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : me = 0 < L ? Math.floor(1e3 / L) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return M;
    }, u.unstable_next = function(L) {
      switch (M) {
        case 1:
        case 2:
        case 3:
          var k = 3;
          break;
        default:
          k = M;
      }
      var K = M;
      M = k;
      try {
        return L();
      } finally {
        M = K;
      }
    }, u.unstable_requestPaint = function() {
      H = !0;
    }, u.unstable_runWithPriority = function(L, k) {
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
      var K = M;
      M = L;
      try {
        return k();
      } finally {
        M = K;
      }
    }, u.unstable_scheduleCallback = function(L, k, K) {
      var oe = u.unstable_now();
      switch (typeof K == "object" && K !== null ? (K = K.delay, K = typeof K == "number" && 0 < K ? oe + K : oe) : K = oe, L) {
        case 1:
          var de = -1;
          break;
        case 2:
          de = 250;
          break;
        case 5:
          de = 1073741823;
          break;
        case 4:
          de = 1e4;
          break;
        default:
          de = 5e3;
      }
      return de = K + de, L = {
        id: C++,
        callback: k,
        priorityLevel: L,
        startTime: K,
        expirationTime: de,
        sortIndex: -1
      }, K > oe ? (L.sortIndex = K, r(O, L), o(R) === null && L === o(O) && (z ? (J(ne), ne = -1) : z = !0, B(he, K - oe))) : (L.sortIndex = de, r(R, L), S || b || (S = !0, P || (P = !0, we()))), L;
    }, u.unstable_shouldYield = se, u.unstable_wrapCallback = function(L) {
      var k = M;
      return function() {
        var K = M;
        M = k;
        try {
          return L.apply(this, arguments);
        } finally {
          M = K;
        }
      };
    };
  })(bo)), bo;
}
var mg;
function f0() {
  return mg || (mg = 1, Eo.exports = o0()), Eo.exports;
}
var So = { exports: {} }, Nt = {};
var gg;
function d0() {
  if (gg) return Nt;
  gg = 1;
  var u = zo();
  function r(C) {
    var v = "https://react.dev/errors/" + C;
    if (1 < arguments.length) {
      v += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var M = 2; M < arguments.length; M++)
        v += "&args[]=" + encodeURIComponent(arguments[M]);
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
  }, d = /* @__PURE__ */ Symbol.for("react.portal"), h = /* @__PURE__ */ Symbol.for("react.recoverable"), p = /* @__PURE__ */ Symbol.for("react.optimistic_key");
  function T(C, v, M) {
    var b = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: b == null ? null : b === p ? p : "" + b,
      children: C,
      containerInfo: v,
      implementation: M
    };
  }
  var R = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function O(C, v) {
    if (C === "font") return "";
    if (typeof v == "string")
      return v === "use-credentials" ? v : "";
  }
  return Nt.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, Nt.browser = function(C) {
    return { $$typeof: h, _reason: C };
  }, Nt.createPortal = function(C, v) {
    var M = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)
      throw Error(r(299));
    return T(C, v, null, M);
  }, Nt.flushSync = function(C) {
    var v = R.T, M = c.p;
    try {
      if (R.T = null, c.p = 2, C) return C();
    } finally {
      R.T = v, c.p = M, c.d.f();
    }
  }, Nt.preconnect = function(C, v) {
    typeof C == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, c.d.C(C, v));
  }, Nt.prefetchDNS = function(C) {
    typeof C == "string" && c.d.D(C);
  }, Nt.preinit = function(C, v) {
    if (typeof C == "string" && v && typeof v.as == "string") {
      var M = v.as, b = O(M, v.crossOrigin), S = typeof v.integrity == "string" ? v.integrity : void 0, z = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
      M === "style" ? c.d.S(
        C,
        typeof v.precedence == "string" ? v.precedence : void 0,
        {
          crossOrigin: b,
          integrity: S,
          fetchPriority: z
        }
      ) : M === "script" && c.d.X(C, {
        crossOrigin: b,
        integrity: S,
        fetchPriority: z,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0
      });
    }
  }, Nt.preinitModule = function(C, v) {
    if (typeof C == "string")
      if (typeof v == "object" && v !== null) {
        if (v.as == null || v.as === "script") {
          var M = O(
            v.as,
            v.crossOrigin
          );
          c.d.M(C, {
            crossOrigin: M,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
            nonce: typeof v.nonce == "string" ? v.nonce : void 0,
            fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0
          });
        }
      } else v == null && c.d.M(C);
  }, Nt.preload = function(C, v) {
    if (typeof C == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
      var M = v.as, b = O(M, v.crossOrigin);
      c.d.L(C, M, {
        crossOrigin: b,
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
  }, Nt.preloadModule = function(C, v) {
    if (typeof C == "string")
      if (v) {
        var M = O(v.as, v.crossOrigin);
        c.d.m(C, {
          as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
          crossOrigin: M,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0,
          nonce: typeof v.nonce == "string" ? v.nonce : void 0,
          fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0
        });
      } else c.d.m(C);
  }, Nt.requestFormReset = function(C) {
    c.d.r(C);
  }, Nt.unstable_batchedUpdates = function(C, v) {
    return C(v);
  }, Nt.useFormState = function(C, v, M) {
    return R.H.useFormState(C, v, M);
  }, Nt.useFormStatus = function() {
    return R.H.useHostTransitionStatus();
  }, Nt.version = "19.3.0", Nt;
}
var pg;
function h0() {
  if (pg) return So.exports;
  pg = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (r) {
        console.error(r);
      }
  }
  return u(), So.exports = d0(), So.exports;
}
var vg;
function m0() {
  if (vg) return Qi;
  vg = 1;
  var u = f0(), r = zo(), o = h0();
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
  function p(e) {
    if (e.tag === 13) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function T(e) {
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
  function O(e) {
    var t = e.alternate;
    if (!t) {
      if (t = h(e), t === null) throw Error(c(188));
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
          if (i === n) return R(l), e;
          if (i === a) return R(l), t;
          i = i.sibling;
        }
        throw Error(c(188));
      }
      if (n.return !== a.return) n = l, a = i;
      else {
        for (var s = !1, f = l.child; f; ) {
          if (f === n) {
            s = !0, n = l, a = i;
            break;
          }
          if (f === a) {
            s = !0, a = l, n = i;
            break;
          }
          f = f.sibling;
        }
        if (!s) {
          for (f = i.child; f; ) {
            if (f === n) {
              s = !0, n = i, a = l;
              break;
            }
            if (f === a) {
              s = !0, a = i, n = l;
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
  function C(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = C(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  function v(e, t, n, a, l, i) {
    for (; e !== null; ) {
      if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && n(e, a, l, i) || (e.tag !== 22 || e.memoizedState === null) && (t || e.tag !== 5 && e.tag !== 27) && v(
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
  function M(e) {
    for (e = e.return; e !== null; ) {
      if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
      e = e.return;
    }
    return null;
  }
  function b(e) {
    var t = !1;
    for (e = e.return; e !== null && (e.tag === 4 && (t = !0), !(e.tag === 3 || e.tag === 5 || e.tag === 27)); )
      e = e.return;
    return t;
  }
  function S(e) {
    var t = [null, null], n = M(e);
    return n === null || z(
      t,
      e,
      n.child,
      { foundSelf: !1 }
    ), t;
  }
  function z(e, t, n, a) {
    for (; n !== null; ) {
      if (n === t) a.foundSelf = !0;
      else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
        if (a.foundSelf) return e[1] = n, !0;
        e[0] = n;
      } else if ((n.tag !== 22 || n.memoizedState === null) && z(
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
  function H(e) {
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
  var $ = null, J = null;
  function Z(e, t, n) {
    return e === n ? !0 : e === t ? ($ = e, !0) : !1;
  }
  function X(e, t, n) {
    return e === n ? (J = e, !1) : e === t ? (J !== null && ($ = e), !0) : !1;
  }
  function he(e) {
    if (e === null) return null;
    do
      e = e === null ? null : e.return;
    while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
    return e || null;
  }
  function P(e, t, n) {
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
  var ne = Object.assign, me = /* @__PURE__ */ Symbol.for("react.element"), ae = /* @__PURE__ */ Symbol.for("react.transitional.element"), se = /* @__PURE__ */ Symbol.for("react.portal"), ge = /* @__PURE__ */ Symbol.for("react.fragment"), we = /* @__PURE__ */ Symbol.for("react.strict_mode"), ke = /* @__PURE__ */ Symbol.for("react.profiler"), ft = /* @__PURE__ */ Symbol.for("react.consumer"), B = /* @__PURE__ */ Symbol.for("react.context"), L = /* @__PURE__ */ Symbol.for("react.forward_ref"), k = /* @__PURE__ */ Symbol.for("react.suspense"), K = /* @__PURE__ */ Symbol.for("react.suspense_list"), oe = /* @__PURE__ */ Symbol.for("react.memo"), de = /* @__PURE__ */ Symbol.for("react.lazy"), ze = /* @__PURE__ */ Symbol.for("react.activity"), Le = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), Se = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), E = /* @__PURE__ */ Symbol.for("react.view_transition"), G = /* @__PURE__ */ Symbol.for("react.recoverable"), ie = Symbol.iterator;
  function ee(e) {
    return e === null || typeof e != "object" ? null : (e = ie && e[ie] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Te = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Ae(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Te ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case ge:
        return "Fragment";
      case ke:
        return "Profiler";
      case we:
        return "StrictMode";
      case k:
        return "Suspense";
      case K:
        return "SuspenseList";
      case ze:
        return "Activity";
      case E:
        return "ViewTransition";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case se:
          return "Portal";
        case B:
          return e.displayName || "Context";
        case ft:
          return (e._context.displayName || "Context") + ".Consumer";
        case L:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case oe:
          return t = e.displayName || null, t !== null ? t : Ae(e.type) || "Memo";
        case de:
          t = e._payload, e = e._init;
          try {
            return Ae(e(t));
          } catch {
          }
      }
    return null;
  }
  var xe = Array.isArray, te = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, pe = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Wt = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, $n = [], Mn = -1;
  function en(e) {
    return { current: e };
  }
  function fe(e) {
    0 > Mn || (e.current = $n[Mn], $n[Mn] = null, Mn--);
  }
  function Ve(e, t) {
    Mn++, $n[Mn] = e.current, e.current = t;
  }
  var Vt = en(null), N = en(null), Y = en(null), j = en(null);
  function V(e, t) {
    switch (Ve(Y, t), Ve(N, e), Ve(Vt, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? ym(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = ym(t), e = Em(t, e);
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
    fe(Vt), Ve(Vt, e);
  }
  function ue() {
    fe(Vt), fe(N), fe(Y);
  }
  function He(e) {
    var t = e.memoizedState;
    t !== null && (Vl._currentValue = t.memoizedState, Ve(j, e)), t = Vt.current;
    var n = Em(t, e.type);
    t !== n && (Ve(N, e), Ve(Vt, n));
  }
  function Ke(e) {
    N.current === e && (fe(Vt), fe(N)), j.current === e && (fe(j), Vl._currentValue = Wt);
  }
  var vt, Mt;
  function yt(e) {
    if (vt === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        vt = t && t[1] || "", Mt = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + vt + e + Mt;
  }
  var xa = !1;
  function hn(e, t) {
    if (!e || xa) return "";
    xa = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var a = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var I = function() {
                throw Error();
              };
              if (Object.defineProperty(I.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(I, []);
                } catch (F) {
                  var A = F;
                }
                Reflect.construct(e, [], I);
              } else {
                try {
                  I.call();
                } catch (F) {
                  A = F;
                }
                I = !1;
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
                  }), I = !0, new e();
                } finally {
                  I && (U !== void 0 ? Object.defineProperty(e.prototype, "props", U) : delete e.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (F) {
                A = F;
              }
              (I = e()) && typeof I.catch == "function" && I.catch(function() {
              });
            }
          } catch (F) {
            if (F && A && typeof F.stack == "string")
              return [F.stack, A.stack];
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
      var i = a.DetermineComponentFrameRoot(), s = i[0], f = i[1];
      if (s && f) {
        var g = s.split(`
`), w = f.split(`
`);
        for (l = a = 0; a < g.length && !g[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; l < w.length && !w[l].includes(
          "DetermineComponentFrameRoot"
        ); )
          l++;
        if (a === g.length || l === w.length)
          for (a = g.length - 1, l = w.length - 1; 1 <= a && 0 <= l && g[a] !== w[l]; )
            l--;
        for (; 1 <= a && 0 <= l; a--, l--)
          if (g[a] !== w[l]) {
            if (a !== 1 || l !== 1)
              do
                if (a--, l--, 0 > l || g[a] !== w[l]) {
                  var D = `
` + g[a].replace(" at new ", " at ");
                  return e.displayName && D.includes("<anonymous>") && (D = D.replace("<anonymous>", e.displayName)), D;
                }
              while (1 <= a && 0 <= l);
            break;
          }
      }
    } finally {
      xa = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? yt(n) : "";
  }
  function Ua(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return yt(e.type);
      case 16:
        return yt("Lazy");
      case 13:
        return e.child !== t && t !== null ? yt("Suspense Fallback") : yt("Suspense");
      case 19:
        return yt("SuspenseList");
      case 0:
      case 15:
        return hn(e.type, !1);
      case 11:
        return hn(e.type.render, !1);
      case 1:
        return hn(e.type, !0);
      case 31:
        return yt("Activity");
      case 30:
        return yt("ViewTransition");
      default:
        return "";
    }
  }
  function Fl(e) {
    try {
      var t = "", n = null;
      do
        t += Ua(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (a) {
      return `
Error generating stack: ` + a.message + `
` + a.stack;
    }
  }
  var mn = Object.prototype.hasOwnProperty, Br = u.unstable_scheduleCallback, Vr = u.unstable_cancelCallback, dp = u.unstable_shouldYield, hp = u.unstable_requestPaint, Gt = u.unstable_now, mp = u.unstable_getCurrentPriorityLevel, Bo = u.unstable_ImmediatePriority, Vo = u.unstable_UserBlockingPriority, uu = u.unstable_NormalPriority, gp = u.unstable_LowPriority, Go = u.unstable_IdlePriority, pp = u.log, vp = u.unstable_setDisableYieldValue, $l = null, Yt = null;
  function Pn(e) {
    if (typeof pp == "function" && vp(e), Yt && typeof Yt.setStrictMode == "function")
      try {
        Yt.setStrictMode($l, e);
      } catch {
      }
  }
  var Xt = Math.clz32 ? Math.clz32 : bp, yp = Math.log, Ep = Math.LN2;
  function bp(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (yp(e) / Ep | 0) | 0;
  }
  var ru = 256, cu = 262144, su = 4194304;
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
  function ou(e, t, n) {
    var a = e.pendingLanes;
    if (a === 0) return 0;
    var l = 0, i = e.suspendedLanes, s = e.pingedLanes;
    e = e.warmLanes;
    var f = a & 134217727;
    return f !== 0 ? (a = f & ~i, a !== 0 ? l = Da(a) : (s &= f, s !== 0 ? l = Da(s) : n || (n = f & ~e, n !== 0 && (l = Da(n))))) : (f = a & ~i, f !== 0 ? l = Da(f) : s !== 0 ? l = Da(s) : n || (n = a & ~e, n !== 0 && (l = Da(n)))), l === 0 ? 0 : t !== 0 && t !== l && (t & i) === 0 && (i = l & -l, n = t & -t, i >= n || i === 32 && (n & 4194048) !== 0) ? t : l;
  }
  function Pl(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Yo(e, t) {
    (t & 8) !== 0 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var a = 31 - Xt(n), l = 1 << a;
        t |= e[a], n &= ~l;
      }
    return t;
  }
  function Sp(e, t) {
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
  function Xo() {
    var e = su;
    return su <<= 1, (su & 62914560) === 0 && (su = 4194304), e;
  }
  function Gr(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Wl(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Tp(e, t, n, a, l, i) {
    var s = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var f = e.entanglements, g = e.expirationTimes, w = e.hiddenUpdates;
    for (n = s & ~n; 0 < n; ) {
      var D = 31 - Xt(n), I = 1 << D;
      f[D] = 0, g[D] = -1;
      var A = w[D];
      if (A !== null)
        for (w[D] = null, D = 0; D < A.length; D++) {
          var U = A[D];
          U !== null && (U.lane &= -536870913);
        }
      n &= ~I;
    }
    a !== 0 && Qo(e, a, 0), i !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= i & ~(s & ~t));
  }
  function Qo(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - Xt(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 261930;
  }
  function Ko(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var a = 31 - Xt(n), l = 1 << a;
      l & t | e[a] & t && (e[a] |= t), n &= ~l;
    }
  }
  function Zo(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : Yr(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function Yr(e) {
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
  function Xr(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function ko() {
    var e = pe.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : ng(e.type));
  }
  function Jo(e, t) {
    var n = pe.p;
    try {
      return pe.p = e, t();
    } finally {
      pe.p = n;
    }
  }
  var jn = Math.random().toString(36).slice(2), Et = "__reactFiber$" + jn, jt = "__reactProps$" + jn, tl = "__reactContainer$" + jn, Fo = "__reactEvents$" + jn, Ap = "__reactListeners$" + jn, _p = "__reactHandles$" + jn, $o = "__reactResources$" + jn, ei = "__reactMarker$" + jn, fu = "__reactLoad$" + jn;
  function du(e) {
    delete e[Et], delete e[jt], delete e[Ap], delete e[_p];
  }
  function za(e) {
    var t;
    if (t = e[Et]) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[tl] || n[Et]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = Hm(e); e !== null; ) {
            if (n = e[Et]) return n;
            e = Hm(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function nl(e) {
    if (e = e[Et] || e[tl]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function ti(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(c(33));
  }
  function al(e) {
    var t = e[$o];
    return t || (t = e[$o] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function dt(e) {
    e[ei] = !0;
  }
  function Po(e) {
    e[fu] = void 0;
  }
  var Wo = /* @__PURE__ */ new Set(), ef = {};
  function Ma(e, t) {
    ll(e, t), ll(e + "Capture", t);
  }
  function ll(e, t) {
    for (ef[e] = t, e = 0; e < t.length; e++)
      Wo.add(t[e]);
  }
  var Np = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), tf = {}, nf = {};
  function wp(e) {
    return mn.call(nf, e) ? !0 : mn.call(tf, e) ? !1 : Np.test(e) ? nf[e] = !0 : (tf[e] = !0, !1);
  }
  var qe = !1;
  function af() {
    var e = qe;
    return qe = !1, e;
  }
  function hu(e, t, n) {
    if (wp(t))
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
  function mu(e, t, n) {
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
  function Qt(e) {
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
  function lf(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function Op(e, t, n) {
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
        set: function(s) {
          n = "" + s, i.call(this, s);
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
  function Qr(e) {
    if (!e._valueTracker) {
      var t = lf(e) ? "checked" : "value";
      e._valueTracker = Op(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function uf(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), a = "";
    return e && (a = lf(e) ? e.checked ? "true" : "false" : e.value), e = a, e !== n ? (t.setValue(e), !0) : !1;
  }
  var Cp = /[\n"\\]/g;
  function tn(e) {
    return e.replace(
      Cp,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Kr(e, t, n, a, l, i, s, f) {
    e.name = "", s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.type = s : e.removeAttribute("type"), t != null ? s === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Qt(t)) : e.value !== "" + Qt(t) && (e.value = "" + Qt(t)) : s !== "submit" && s !== "reset" || e.removeAttribute("value"), t != null ? s === "number" && e.value == t ? Zr(e, Qt(e.value)) : Zr(e, Qt(t)) : n != null ? Zr(e, Qt(n)) : a != null && e.removeAttribute("value"), l == null && i != null && (e.defaultChecked = !!i), l != null && (e.checked = l && typeof l != "function" && typeof l != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.name = "" + Qt(f) : e.removeAttribute("name");
  }
  function rf(e, t, n, a, l, i, s, f) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || n != null) {
      if (!(i !== "submit" && i !== "reset" || t != null)) {
        Qr(e);
        return;
      }
      n = n != null ? "" + Qt(n) : "", t = t != null ? "" + Qt(t) : n, f || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? l, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = f ? e.checked : !!a, e.defaultChecked = !!a, s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.name = s), Qr(e);
  }
  function Zr(e, t) {
    e.defaultValue !== "" + t && (e.defaultValue = "" + t);
  }
  function il(e, t, n, a) {
    if (e = e.options, t) {
      t = {};
      for (var l = 0; l < n.length; l++)
        t["$" + n[l]] = !0;
      for (n = 0; n < e.length; n++)
        l = t.hasOwnProperty("$" + e[n].value), e[n].selected !== l && (e[n].selected = l), l && a && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Qt(n), t = null, l = 0; l < e.length; l++) {
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
    if (t != null && (t = "" + Qt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Qt(n) : "";
  }
  function sf(e, t, n, a) {
    if (t == null) {
      if (a != null) {
        if (n != null) throw Error(c(92));
        if (xe(a)) {
          if (1 < a.length) throw Error(c(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), t = n;
    }
    n = Qt(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a), Qr(e);
  }
  function ul(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Rp = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function of(e, t, n) {
    var a = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Rp.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function ff(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(c(62));
    if (e = e.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "", qe = !0);
      for (var l in t)
        a = t[l], t.hasOwnProperty(l) && n[l] !== a && (of(e, l, a), qe = !0);
    } else
      for (var i in t)
        t.hasOwnProperty(i) && of(e, i, t[i]);
  }
  function kr(e) {
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
  var xp = /* @__PURE__ */ new Map([
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
  function gu(e) {
    return Up.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function An() {
  }
  var Jr = null;
  function Fr(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var rl = null, cl = null;
  function df(e) {
    var t = nl(e);
    if (t && (e = t.stateNode)) {
      var n = e[jt] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Kr(
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
              'input[name="' + tn(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var l = a[jt] || null;
                if (!l) throw Error(c(90));
                Kr(
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
              a = n[t], a.form === e.form && uf(a);
          }
          break e;
        case "textarea":
          cf(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && il(e, !!n.multiple, t, !1);
      }
    }
  }
  var $r = !1;
  function hf(e, t, n) {
    if ($r) return e(t, n);
    $r = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if ($r = !1, (rl !== null || cl !== null) && (gr(), rl && (t = rl, e = cl, cl = rl = null, df(t), e)))
        for (t = 0; t < e.length; t++) df(e[t]);
    }
  }
  function ni(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var a = n[jt] || null;
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
  var qn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Pr = !1;
  if (qn)
    try {
      var ai = {};
      Object.defineProperty(ai, "passive", {
        get: function() {
          Pr = !0;
        }
      }), window.addEventListener("test", ai, ai), window.removeEventListener("test", ai, ai);
    } catch {
      Pr = !1;
    }
  var Wn = null, Wr = null, pu = null;
  function mf() {
    if (pu) return pu;
    var e, t = Wr, n = t.length, a, l = "value" in Wn ? Wn.value : Wn.textContent, i = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var s = n - e;
    for (a = 1; a <= s && t[n - a] === l[i - a]; a++) ;
    return pu = l.slice(e, 1 < a ? 1 - a : void 0);
  }
  function vu(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function yu() {
    return !0;
  }
  function gf() {
    return !1;
  }
  function xt(e) {
    function t(n, a, l, i, s) {
      this._reactName = n, this._targetInst = l, this.type = a, this.nativeEvent = i, this.target = s, this.currentTarget = null;
      for (var f in e)
        e.hasOwnProperty(f) && (n = e[f], this[f] = n ? n(i) : i[f]);
      return this.isDefaultPrevented = (i.defaultPrevented != null ? i.defaultPrevented : i.returnValue === !1) ? yu : gf, this.isPropagationStopped = gf, this;
    }
    return ne(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = yu);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = yu);
      },
      persist: function() {
      },
      isPersistent: yu
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
  }, Eu = xt(ea), li = ne({}, ea, { view: 0, detail: 0 }), Dp = xt(li), ec, tc, ii, bu = ne({}, li, {
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
    getModifierState: ac,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== ii && (ii && e.type === "mousemove" ? (ec = e.screenX - ii.screenX, tc = e.screenY - ii.screenY) : tc = ec = 0, ii = e), ec);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : tc;
    }
  }), pf = xt(bu), zp = ne({}, bu, { dataTransfer: 0 }), Mp = xt(zp), jp = ne({}, li, { relatedTarget: 0 }), nc = xt(jp), Hp = ne({}, ea, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), qp = xt(Hp), Lp = ne({}, ea, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Ip = xt(Lp), Bp = ne({}, ea, { data: 0 }), vf = xt(Bp), Vp = {
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
  }, Gp = {
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
  }, Yp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Xp(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Yp[e]) ? !!t[e] : !1;
  }
  function ac() {
    return Xp;
  }
  var Qp = ne({}, li, {
    key: function(e) {
      if (e.key) {
        var t = Vp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = vu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Gp[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: ac,
    charCode: function(e) {
      return e.type === "keypress" ? vu(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? vu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Kp = xt(Qp), Zp = ne({}, bu, {
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
  }), yf = xt(Zp), kp = ne({}, ea, { submitter: 0 }), Jp = xt(kp), Fp = ne({}, li, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: ac
  }), $p = xt(Fp), Pp = ne({}, ea, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Wp = xt(Pp), ev = ne({}, bu, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), tv = xt(ev), nv = ne({}, ea, {
    newState: 0,
    oldState: 0,
    source: 0
  }), av = xt(nv), lv = [9, 13, 27, 32], lc = qn && "CompositionEvent" in window, ui = null;
  qn && "documentMode" in document && (ui = document.documentMode);
  var iv = qn && "TextEvent" in window && !ui, Ef = qn && (!lc || ui && 8 < ui && 11 >= ui), bf = " ", Sf = !1;
  function Tf(e, t) {
    switch (e) {
      case "keyup":
        return lv.indexOf(t.keyCode) !== -1;
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
  function Af(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var sl = !1;
  function uv(e, t) {
    switch (e) {
      case "compositionend":
        return Af(t);
      case "keypress":
        return t.which !== 32 ? null : (Sf = !0, bf);
      case "textInput":
        return e = t.data, e === bf && Sf ? null : e;
      default:
        return null;
    }
  }
  function rv(e, t) {
    if (sl)
      return e === "compositionend" || !lc && Tf(e, t) ? (e = mf(), pu = Wr = Wn = null, sl = !1, e) : null;
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
  var cv = {
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
    return t === "input" ? !!cv[e.type] : t === "textarea";
  }
  function Nf(e, t, n, a) {
    rl ? cl ? cl.push(a) : cl = [a] : rl = a, t = Sr(t, "onChange"), 0 < t.length && (n = new Eu(
      "onChange",
      "change",
      null,
      n,
      a
    ), e.push({ event: n, listeners: t }));
  }
  var ri = null, ci = null;
  function sv(e) {
    dm(e, 0);
  }
  function Su(e) {
    var t = ti(e);
    if (uf(t)) return e;
  }
  function wf(e, t) {
    if (e === "change") return t;
  }
  var Of = !1;
  if (qn) {
    var ic;
    if (qn) {
      var uc = "oninput" in document;
      if (!uc) {
        var Cf = document.createElement("div");
        Cf.setAttribute("oninput", "return;"), uc = typeof Cf.oninput == "function";
      }
      ic = uc;
    } else ic = !1;
    Of = ic && (!document.documentMode || 9 < document.documentMode);
  }
  function Rf() {
    ri && (ri.detachEvent("onpropertychange", xf), ci = ri = null);
  }
  function xf(e) {
    if (e.propertyName === "value" && Su(ci)) {
      var t = [];
      Nf(
        t,
        ci,
        e,
        Fr(e)
      ), hf(sv, t);
    }
  }
  function ov(e, t, n) {
    e === "focusin" ? (Rf(), ri = t, ci = n, ri.attachEvent("onpropertychange", xf)) : e === "focusout" && Rf();
  }
  function fv(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Su(ci);
  }
  function dv(e, t) {
    if (e === "click") return Su(t);
  }
  function hv(e, t) {
    if (e === "input" || e === "change")
      return Su(t);
  }
  function mv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Kt = typeof Object.is == "function" ? Object.is : mv;
  function si(e, t) {
    if (Kt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var l = n[a];
      if (!mn.call(t, l) || !Kt(e[l], t[l]))
        return !1;
    }
    return !0;
  }
  function rc(e) {
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
  function Df(e, t) {
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
  function zf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? zf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Mf(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = rc(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = rc(e.document);
    }
    return t;
  }
  function cc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var gv = qn && "documentMode" in document && 11 >= document.documentMode, ol = null, sc = null, oi = null, oc = !1;
  function jf(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    oc || ol == null || ol !== rc(a) || (a = ol, "selectionStart" in a && cc(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), oi && si(oi, a) || (oi = a, a = Sr(sc, "onSelect"), 0 < a.length && (t = new Eu(
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
  }, fc = {}, Hf = {};
  qn && (Hf = document.createElement("div").style, "AnimationEvent" in window || (delete fl.animationend.animation, delete fl.animationiteration.animation, delete fl.animationstart.animation), "TransitionEvent" in window || delete fl.transitionend.transition);
  function Ha(e) {
    if (fc[e]) return fc[e];
    if (!fl[e]) return e;
    var t = fl[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in Hf)
        return fc[e] = t[n];
    return e;
  }
  var qf = Ha("animationend"), Lf = Ha("animationiteration"), If = Ha("animationstart"), pv = Ha("transitionrun"), vv = Ha("transitionstart"), yv = Ha("transitioncancel"), Bf = Ha("transitionend"), Vf = /* @__PURE__ */ new Map(), dc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  dc.push("scrollEnd");
  function gn(e, t) {
    Vf.set(e, t), Ma(t, [e]);
  }
  var Ev = 0;
  function Ln(e, t) {
    if (e.name != null && e.name !== "auto") return e.name;
    if (t.autoName !== null) return t.autoName;
    e = En.identifierPrefix;
    var n = Ev++;
    return e = "_" + e + "t_" + n.toString(32) + "_", t.autoName = e;
  }
  function Gf(e) {
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
  function In(e, t) {
    return e = Gf(e), t = Gf(t), t == null ? e === "auto" ? null : e : t === "auto" ? null : t;
  }
  var Tu = typeof reportError == "function" ? reportError : function(e) {
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
  }, nn = [], dl = 0, hc = 0;
  function Au() {
    for (var e = dl, t = hc = dl = 0; t < e; ) {
      var n = nn[t];
      nn[t++] = null;
      var a = nn[t];
      nn[t++] = null;
      var l = nn[t];
      nn[t++] = null;
      var i = nn[t];
      if (nn[t++] = null, a !== null && l !== null) {
        var s = a.pending;
        s === null ? l.next = l : (l.next = s.next, s.next = l), a.pending = l;
      }
      i !== 0 && Yf(n, l, i);
    }
  }
  function _u(e, t, n, a) {
    nn[dl++] = e, nn[dl++] = t, nn[dl++] = n, nn[dl++] = a, hc |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function mc(e, t, n, a) {
    return _u(e, t, n, a), Nu(e);
  }
  function qa(e, t) {
    return _u(e, null, null, t), Nu(e);
  }
  function Yf(e, t, n) {
    e.lanes |= n;
    var a = e.alternate;
    a !== null && (a.lanes |= n);
    for (var l = !1, i = e.return; i !== null; )
      i.childLanes |= n, a = i.alternate, a !== null && (a.childLanes |= n), i.tag === 22 && (e = i.stateNode, e === null || e._visibility & 1 || (l = !0)), e = i, i = i.return;
    return e.tag === 3 ? (i = e.stateNode, l && t !== null && (l = 31 - Xt(n), e = i.hiddenUpdates, a = e[l], a === null ? e[l] = [t] : a.push(t), t.lane = n | 536870912), i) : null;
  }
  function Nu(e) {
    if (50 < Di)
      throw Di = 0, mr = null, Error(c(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var hl = {};
  function bv(e, t, n, a) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ht(e, t, n, a) {
    return new bv(e, t, n, a);
  }
  function gc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Bn(e, t) {
    var n = e.alternate;
    return n === null ? (n = Ht(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 1206910976, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function Xf(e, t) {
    e.flags &= 1206910978;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function wu(e, t, n, a, l, i) {
    var s = 0;
    if (a = e, typeof a == "function") gc(a) && (s = 1);
    else if (typeof a == "string")
      s = ky(
        e,
        n,
        Vt.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (a) {
        case ze:
          return e = Ht(31, n, t, l), e.elementType = ze, e.lanes = i, e;
        case ge:
          return La(n.children, l, i, t);
        case we:
          s = 8, l |= 24;
          break;
        case ke:
          return e = Ht(12, n, t, l | 2), e.elementType = ke, e.lanes = i, e;
        case k:
          return e = Ht(13, n, t, l), e.elementType = k, e.lanes = i, e;
        case K:
          return e = Ht(19, n, t, l), e.elementType = K, e.lanes = i, e;
        case Le:
        case E:
          return e = l | 32, e = Ht(30, n, t, e), e.elementType = E, e.lanes = i, e.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, e;
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case B:
                s = 10;
                break e;
              case ft:
                s = 9;
                break e;
              case L:
                s = 11;
                break e;
              case oe:
                s = 14;
                break e;
              case de:
                s = 16, a = null;
                break e;
            }
          s = 29, n = Error(
            c(130, e === null ? "null" : typeof e, "")
          ), a = null;
      }
    return t = Ht(s, n, t, l), t.elementType = e, t.type = a, t.lanes = i, t;
  }
  function La(e, t, n, a) {
    return e = Ht(7, e, a, t), e.lanes = n, e;
  }
  function pc(e, t, n) {
    return e = Ht(6, e, null, t), e.lanes = n, e;
  }
  function Qf(e) {
    var t = Ht(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function vc(e, t, n) {
    return t = Ht(
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
  var Kf = /* @__PURE__ */ new WeakMap();
  function an(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = Kf.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: Fl(t)
      }, Kf.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: Fl(t)
    };
  }
  var ml = [], gl = 0, Ou = null, fi = 0, ln = [], un = 0, ta = null, _n = 1, Nn = "";
  function Vn(e, t) {
    ml[gl++] = fi, ml[gl++] = Ou, Ou = e, fi = t;
  }
  function Zf(e, t, n) {
    ln[un++] = _n, ln[un++] = Nn, ln[un++] = ta, ta = e;
    var a = _n;
    e = Nn;
    var l = 32 - Xt(a) - 1;
    a &= ~(1 << l), n += 1;
    var i = 32 - Xt(t) + l;
    if (30 < i) {
      var s = l - l % 5;
      i = (a & (1 << s) - 1).toString(32), a >>= s, l -= s, _n = 1 << 32 - Xt(t) + l | n << l | a, Nn = i + e;
    } else
      _n = 1 << i | n << l | a, Nn = e;
  }
  function Cu(e) {
    e.return !== null && (Vn(e, 1), Zf(e, 1, 0));
  }
  function yc(e) {
    for (; e === Ou; )
      Ou = ml[--gl], ml[gl] = null, fi = ml[--gl], ml[gl] = null;
    for (; e === ta; )
      ta = ln[--un], ln[un] = null, Nn = ln[--un], ln[un] = null, _n = ln[--un], ln[un] = null;
  }
  function kf(e, t) {
    ln[un++] = _n, ln[un++] = Nn, ln[un++] = ta, _n = t.id, Nn = t.overflow, ta = e;
  }
  var ht = null, Je = null, Oe = !1, na = null, rn = !1, Ec = Error(c(519));
  function aa(e) {
    var t = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw di(an(t, e)), Ec;
  }
  function Jf(e) {
    var t = e.stateNode, n = e.type, a = e.memoizedProps;
    switch (t[Et] = e, t[jt] = a, n) {
      case "dialog":
        Re("cancel", t), Re("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Re("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Mi.length; n++)
          Re(Mi[n], t);
        break;
      case "source":
        Re("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Re("error", t), Re("load", t);
        break;
      case "details":
        Re("toggle", t);
        break;
      case "input":
        Re("invalid", t), rf(
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
        Re("invalid", t);
        break;
      case "textarea":
        Re("invalid", t), sf(t, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === !0 || pm(t.textContent, n) ? (a.popover != null && (Re("beforetoggle", t), Re("toggle", t)), a.onScroll != null && Re("scroll", t), a.onScrollEnd != null && Re("scrollend", t), a.onClick != null && (t.onclick = An), t = !0) : t = !1, t || aa(e, !0);
  }
  function Ru(e) {
    for (ht = e.return; ht; )
      switch (ht.tag) {
        case 5:
        case 31:
        case 13:
          rn = !1;
          return;
        case 27:
        case 3:
          rn = !0;
          return;
        default:
          ht = ht.return;
      }
  }
  function pl(e) {
    if (e !== ht) return !1;
    if (!Oe) return Ru(e), Oe = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Js(e.type, e.memoizedProps)), n = !n), n && Je && aa(e), Ru(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Je = jm(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Je = jm(e);
    } else
      t === 27 ? (t = Je, Ea(e.type) ? (e = lo, lo = null, Je = e) : Je = t) : Je = ht ? sn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ia() {
    Je = ht = null, Oe = !1;
  }
  function bc() {
    var e = na;
    return e !== null && (It === null ? It = e : It.push.apply(
      It,
      e
    ), na = null), e;
  }
  function di(e) {
    na === null ? na = [e] : na.push(e);
  }
  var Sc = en(null), Ba = null, Gn = null;
  function la(e, t, n) {
    Ve(Sc, t._currentValue), t._currentValue = n;
  }
  function Yn(e) {
    e._currentValue = Sc.current, fe(Sc);
  }
  function xu(e, t, n) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Tc(e, t, n, a) {
    var l = e.child;
    for (l !== null && (l.return = e); l !== null; ) {
      var i = l.dependencies;
      if (i !== null) {
        var s = l.child;
        i = i.firstContext;
        e: for (; i !== null; ) {
          var f = i;
          i = l;
          for (var g = 0; g < t.length; g++)
            if (f.context === t[g]) {
              i.lanes |= n, f = i.alternate, f !== null && (f.lanes |= n), xu(
                i.return,
                n,
                e
              ), a || (s = null);
              break e;
            }
          i = f.next;
        }
      } else if (l.tag === 18) {
        if (s = l.return, s === null) throw Error(c(341));
        s.lanes |= n, i = s.alternate, i !== null && (i.lanes |= n), xu(s, n, e), s = null;
      } else
        l.tag === 13 && l.memoizedState !== null && l.memoizedState.dehydrated === null ? (l.lanes |= n, s = l.alternate, s !== null && (s.lanes |= n), xu(
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
    for (var l = t, i = !1; l !== null; ) {
      if (!i) {
        if ((l.flags & 524288) !== 0) i = !0;
        else if ((l.flags & 262144) !== 0) break;
      }
      if (l.tag === 10) {
        var s = l.alternate;
        if (s === null) throw Error(c(387));
        if (s = s.memoizedProps, s !== null) {
          var f = l.type;
          Kt(l.pendingProps.value, s.value) || (e !== null ? e.push(f) : e = [f]);
        }
      } else if (l === j.current) {
        if (s = l.alternate, s === null) throw Error(c(387));
        s.memoizedState.memoizedState !== l.memoizedState.memoizedState && (e !== null ? e.push(Vl) : e = [Vl]);
      }
      l = l.return;
    }
    return e !== null && Tc(
      t,
      e,
      n,
      a
    ), t.flags |= 262144, e !== null;
  }
  function Uu(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Kt(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Ga(e) {
    Ba = e, Gn = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function bt(e) {
    return Ff(Ba, e);
  }
  function Du(e, t) {
    return Ba === null && Ga(e), Ff(e, t);
  }
  function Ff(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, Gn === null) {
      if (e === null) throw Error(c(308));
      Gn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Gn = Gn.next = t;
    return n;
  }
  var Sv = typeof AbortController < "u" ? AbortController : function() {
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
  }, Tv = u.unstable_scheduleCallback, Av = u.unstable_NormalPriority, lt = {
    $$typeof: B,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Ac() {
    return {
      controller: new Sv(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function hi(e) {
    e.refCount--, e.refCount === 0 && Tv(Av, function() {
      e.controller.abort();
    });
  }
  function $f(e, t) {
    if ((e.pendingLanes & 4194048) !== 0) {
      var n = e.transitionTypes;
      for (n === null && (n = e.transitionTypes = []), e = 0; e < t.length; e++) {
        var a = t[e];
        n.indexOf(a) === -1 && n.push(a);
      }
    }
  }
  var mi = null;
  function _v(e) {
    var t = e.transitionTypes;
    return e.transitionTypes = null, t;
  }
  var gi = null, _c = 0, Ya = 0, vl = null;
  function Nv(e, t) {
    if (gi === null) {
      var n = gi = [];
      _c = 0, Ya = Bs(), vl = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return _c++, t.then(Pf, Pf), t;
  }
  function Pf() {
    if (--_c === 0 && (mi = null, gi !== null)) {
      vl !== null && (vl.status = "fulfilled");
      var e = gi;
      gi = null, Ya = 0, vl = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function wv(e, t) {
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
  var Wf = te.S;
  te.S = function(e, t) {
    if (Qh = Gt(), typeof t == "object" && t !== null && typeof t.then == "function" && Nv(e, t), mi !== null)
      for (var n = jl; n !== null; )
        $f(n, mi), n = n.next;
    if (n = e.types, n !== null) {
      for (var a = jl; a !== null; )
        $f(a, n), a = a.next;
      if (Ya !== 0) {
        a = mi, a === null && (a = mi = []);
        for (var l = 0; l < n.length; l++) {
          var i = n[l];
          a.indexOf(i) === -1 && a.push(i);
        }
      }
    }
    Wf !== null && Wf(e, t);
  };
  var Xa = en(null);
  function Nc() {
    var e = Xa.current;
    return e !== null ? e : Ze.pooledCache;
  }
  function zu(e, t) {
    t === null ? Ve(Xa, Xa.current) : Ve(Xa, t.pool);
  }
  function ed() {
    var e = Nc();
    return e === null ? null : { parent: lt._currentValue, pool: e };
  }
  var yl = Error(c(460)), wc = Error(c(474)), Mu = Error(c(542)), ju = { then: function() {
  } };
  function td(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function nd(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(An, An), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, ld(e), e === void 0 && !("reason" in t) ? Error(c(600)) : e;
      default:
        if (typeof t.status == "string") t.then(An, An);
        else {
          if (e = Ze, e !== null && 100 < e.shellSuspendCounter)
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
            throw e = t.reason, ld(e), e;
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
  function ad() {
    if (Ka === null) throw Error(c(459));
    var e = Ka;
    return Ka = null, e;
  }
  function ld(e) {
    if (e === yl || e === Mu)
      throw Error(c(483));
  }
  var El = null, pi = 0;
  function Hu(e) {
    var t = pi;
    return pi += 1, El === null && (El = []), nd(El, e, t);
  }
  function ia(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function qu(e, t) {
    throw t.$$typeof === me ? Error(c(525)) : (e = Object.prototype.toString.call(t), Error(
      c(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function id(e) {
    function t(_, y) {
      if (e) {
        var x = _.deletions;
        x === null ? (_.deletions = [y], _.flags |= 16) : x.push(y);
      }
    }
    function n(_, y) {
      if (!e) return null;
      for (; y !== null; )
        t(_, y), y = y.sibling;
      return null;
    }
    function a(_) {
      for (var y = /* @__PURE__ */ new Map(); _ !== null; )
        _.key === null ? y.set(_.index, _) : y.set(_.key, _), _ = _.sibling;
      return y;
    }
    function l(_, y) {
      return _ = Bn(_, y), _.index = 0, _.sibling = null, _;
    }
    function i(_, y, x) {
      return _.index = x, e ? (x = _.alternate, x !== null ? (x = x.index, x < y ? (_.flags |= 2, y) : x) : (_.flags |= 134217730, y)) : (_.flags |= 1048576, y);
    }
    function s(_) {
      return e && _.alternate === null && (_.flags |= 134217730), _;
    }
    function f(_, y, x, q) {
      return y === null || y.tag !== 6 ? (y = pc(x, _.mode, q), y.return = _, y) : (y = l(y, x), y.return = _, y);
    }
    function g(_, y, x, q) {
      var W = x.type;
      return W === ge ? (_ = D(
        _,
        y,
        x.props.children,
        q,
        x.key
      ), ia(_, x), _) : y !== null && (y.elementType === W || typeof W == "object" && W !== null && W.$$typeof === de && Qa(W) === y.type) ? (y = l(y, x.props), ia(y, x), y.return = _, y) : (y = wu(
        x.type,
        x.key,
        x.props,
        null,
        _.mode,
        q
      ), ia(y, x), y.return = _, y);
    }
    function w(_, y, x, q) {
      return y === null || y.tag !== 4 || y.stateNode.containerInfo !== x.containerInfo || y.stateNode.implementation !== x.implementation ? (y = vc(x, _.mode, q), y.return = _, y) : (y = l(y, x.children || []), y.return = _, y);
    }
    function D(_, y, x, q, W) {
      return y === null || y.tag !== 7 ? (y = La(
        x,
        _.mode,
        q,
        W
      ), y.return = _, y) : (y = l(y, x), y.return = _, y);
    }
    function I(_, y, x) {
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return y = pc(
          "" + y,
          _.mode,
          x
        ), y.return = _, y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case ae:
            return x = wu(
              y.type,
              y.key,
              y.props,
              null,
              _.mode,
              x
            ), ia(x, y), x.return = _, x;
          case se:
            return y = vc(
              y,
              _.mode,
              x
            ), y.return = _, y;
          case de:
            return y = Qa(y), I(_, y, x);
        }
        if (xe(y) || ee(y))
          return y = La(
            y,
            _.mode,
            x,
            null
          ), y.return = _, y;
        if (typeof y.then == "function")
          return I(_, Hu(y), x);
        if (y.$$typeof === B)
          return I(
            _,
            Du(_, y),
            x
          );
        qu(_, y);
      }
      return null;
    }
    function A(_, y, x, q) {
      var W = y !== null ? y.key : null;
      if (typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint")
        return W !== null ? null : f(_, y, "" + x, q);
      if (typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case ae:
            return x.key === W ? g(_, y, x, q) : null;
          case se:
            return x.key === W ? w(_, y, x, q) : null;
          case de:
            return x = Qa(x), A(_, y, x, q);
        }
        if (xe(x) || ee(x))
          return W !== null ? null : D(_, y, x, q, null);
        if (typeof x.then == "function")
          return A(
            _,
            y,
            Hu(x),
            q
          );
        if (x.$$typeof === B)
          return A(
            _,
            y,
            Du(_, x),
            q
          );
        qu(_, x);
      }
      return null;
    }
    function U(_, y, x, q, W) {
      if (typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint")
        return _ = _.get(x) || null, f(y, _, "" + q, W);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case ae:
            return _ = _.get(
              q.key === null ? x : q.key
            ) || null, g(y, _, q, W);
          case se:
            return _ = _.get(
              q.key === null ? x : q.key
            ) || null, w(y, _, q, W);
          case de:
            return q = Qa(q), U(
              _,
              y,
              x,
              q,
              W
            );
        }
        if (xe(q) || ee(q))
          return _ = _.get(x) || null, D(y, _, q, W, null);
        if (typeof q.then == "function")
          return U(
            _,
            y,
            x,
            Hu(q),
            W
          );
        if (q.$$typeof === B)
          return U(
            _,
            y,
            x,
            Du(y, q),
            W
          );
        qu(y, q);
      }
      return null;
    }
    function F(_, y, x, q) {
      for (var W = null, De = null, ce = y, ve = y = 0, rt = null; ce !== null && ve < x.length; ve++) {
        ce.index > ve ? (rt = ce, ce = null) : rt = ce.sibling;
        var Me = A(
          _,
          ce,
          x[ve],
          q
        );
        if (Me === null) {
          ce === null && (ce = rt);
          break;
        }
        e && ce && Me.alternate === null && t(_, ce), y = i(Me, y, ve), De === null ? W = Me : De.sibling = Me, De = Me, ce = rt;
      }
      if (ve === x.length)
        return n(_, ce), Oe && Vn(_, ve), W;
      if (ce === null) {
        for (; ve < x.length; ve++)
          ce = I(_, x[ve], q), ce !== null && (y = i(
            ce,
            y,
            ve
          ), De === null ? W = ce : De.sibling = ce, De = ce);
        return Oe && Vn(_, ve), W;
      }
      for (ce = a(ce); ve < x.length; ve++)
        rt = U(
          ce,
          _,
          ve,
          x[ve],
          q
        ), rt !== null && (e && (Me = rt.alternate, Me !== null && ce.delete(Me.key === null ? ve : Me.key)), y = i(
          rt,
          y,
          ve
        ), De === null ? W = rt : De.sibling = rt, De = rt);
      return e && ce.forEach(function(_a) {
        return t(_, _a);
      }), Oe && Vn(_, ve), W;
    }
    function le(_, y, x, q) {
      if (x == null) throw Error(c(151));
      for (var W = null, De = null, ce = y, ve = y = 0, rt = null, Me = x.next(); ce !== null && !Me.done; ve++, Me = x.next()) {
        ce.index > ve ? (rt = ce, ce = null) : rt = ce.sibling;
        var _a = A(_, ce, Me.value, q);
        if (_a === null) {
          ce === null && (ce = rt);
          break;
        }
        e && ce && _a.alternate === null && t(_, ce), y = i(_a, y, ve), De === null ? W = _a : De.sibling = _a, De = _a, ce = rt;
      }
      if (Me.done)
        return n(_, ce), Oe && Vn(_, ve), W;
      if (ce === null) {
        for (; !Me.done; ve++, Me = x.next())
          Me = I(_, Me.value, q), Me !== null && (y = i(Me, y, ve), De === null ? W = Me : De.sibling = Me, De = Me);
        return Oe && Vn(_, ve), W;
      }
      for (ce = a(ce); !Me.done; ve++, Me = x.next())
        Me = U(ce, _, ve, Me.value, q), Me !== null && (e && (rt = Me.alternate, rt !== null && ce.delete(
          rt.key === null ? ve : rt.key
        )), y = i(Me, y, ve), De === null ? W = Me : De.sibling = Me, De = Me);
      return e && ce.forEach(function(u0) {
        return t(_, u0);
      }), Oe && Vn(_, ve), W;
    }
    function Ne(_, y, x, q) {
      if (typeof x == "object" && x !== null && x.type === ge && x.key === null && x.props.ref === void 0 && (x = x.props.children), typeof x == "object" && x !== null) {
        switch (x.$$typeof) {
          case ae:
            e: {
              for (var W = x.key; y !== null; ) {
                if (y.key === W) {
                  if (W = x.type, W === ge) {
                    if (y.tag === 7) {
                      n(
                        _,
                        y.sibling
                      ), q = l(
                        y,
                        x.props.children
                      ), ia(q, x), q.return = _, _ = q;
                      break e;
                    }
                  } else if (y.elementType === W || typeof W == "object" && W !== null && W.$$typeof === de && Qa(W) === y.type) {
                    n(
                      _,
                      y.sibling
                    ), q = l(y, x.props), ia(q, x), q.return = _, _ = q;
                    break e;
                  }
                  n(_, y);
                  break;
                } else t(_, y);
                y = y.sibling;
              }
              x.type === ge ? (q = La(
                x.props.children,
                _.mode,
                q,
                x.key
              ), ia(q, x), q.return = _, _ = q) : (q = wu(
                x.type,
                x.key,
                x.props,
                null,
                _.mode,
                q
              ), ia(q, x), q.return = _, _ = q);
            }
            return s(_);
          case se:
            e: {
              for (W = x.key; y !== null; ) {
                if (y.key === W)
                  if (y.tag === 4 && y.stateNode.containerInfo === x.containerInfo && y.stateNode.implementation === x.implementation) {
                    n(
                      _,
                      y.sibling
                    ), q = l(y, x.children || []), q.return = _, _ = q;
                    break e;
                  } else {
                    n(_, y);
                    break;
                  }
                else t(_, y);
                y = y.sibling;
              }
              q = vc(x, _.mode, q), q.return = _, _ = q;
            }
            return s(_);
          case de:
            return x = Qa(x), Ne(
              _,
              y,
              x,
              q
            );
        }
        if (xe(x))
          return F(
            _,
            y,
            x,
            q
          );
        if (ee(x)) {
          if (W = ee(x), typeof W != "function") throw Error(c(150));
          return x = W.call(x), le(
            _,
            y,
            x,
            q
          );
        }
        if (typeof x.then == "function")
          return Ne(
            _,
            y,
            Hu(x),
            q
          );
        if (x.$$typeof === B)
          return Ne(
            _,
            y,
            Du(_, x),
            q
          );
        qu(_, x);
      }
      return typeof x == "string" && x !== "" || typeof x == "number" || typeof x == "bigint" ? (x = "" + x, y !== null && y.tag === 6 ? (n(_, y.sibling), q = l(y, x), q.return = _, _ = q) : (n(_, y), q = pc(x, _.mode, q), q.return = _, _ = q), s(_)) : n(_, y);
    }
    return function(_, y, x, q) {
      try {
        pi = 0;
        var W = Ne(
          _,
          y,
          x,
          q
        );
        return El = null, W;
      } catch (ce) {
        if (ce === yl || ce === Mu) throw ce;
        var De = Ht(29, ce, null, _.mode);
        return De.lanes = q, De.return = _, De;
      }
    };
  }
  var Za = id(!0), ud = id(!1), ua = !1;
  function Oc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Cc(e, t) {
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
    if (a = a.shared, (Ie & 2) !== 0) {
      var l = a.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), a.pending = t, t = Nu(e), Yf(e, null, n), t;
    }
    return _u(e, a, t, n), Nu(e);
  }
  function vi(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, Ko(e, n);
    }
  }
  function Rc(e, t) {
    var n = e.updateQueue, a = e.alternate;
    if (a !== null && (a = a.updateQueue, n === a)) {
      var l = null, i = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var s = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          i === null ? l = i = s : i = i.next = s, n = n.next;
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
  var xc = !1;
  function yi() {
    if (xc) {
      var e = vl;
      if (e !== null) throw e;
    }
  }
  function Ei(e, t, n, a) {
    xc = !1;
    var l = e.updateQueue;
    ua = !1;
    var i = l.firstBaseUpdate, s = l.lastBaseUpdate, f = l.shared.pending;
    if (f !== null) {
      l.shared.pending = null;
      var g = f, w = g.next;
      g.next = null, s === null ? i = w : s.next = w, s = g;
      var D = e.alternate;
      D !== null && (D = D.updateQueue, f = D.lastBaseUpdate, f !== s && (f === null ? D.firstBaseUpdate = w : f.next = w, D.lastBaseUpdate = g));
    }
    if (i !== null) {
      var I = l.baseState;
      s = 0, D = w = g = null, f = i;
      do {
        var A = f.lane & -536870913, U = A !== f.lane;
        if (U ? (Ue & A) === A : (a & A) === A) {
          A !== 0 && A === Ya && (xc = !0), D !== null && (D = D.next = {
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: null,
            next: null
          });
          e: {
            var F = e, le = f;
            A = t;
            var Ne = n;
            switch (le.tag) {
              case 1:
                if (F = le.payload, typeof F == "function") {
                  I = F.call(Ne, I, A);
                  break e;
                }
                I = F;
                break e;
              case 3:
                F.flags = F.flags & -65537 | 128;
              case 0:
                if (F = le.payload, A = typeof F == "function" ? F.call(Ne, I, A) : F, A == null) break e;
                I = ne({}, I, A);
                break e;
              case 2:
                ua = !0;
            }
          }
          A = f.callback, A !== null && (e.flags |= 64, U && (e.flags |= 8192), U = l.callbacks, U === null ? l.callbacks = [A] : U.push(A));
        } else
          U = {
            lane: A,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          }, D === null ? (w = D = U, g = I) : D = D.next = U, s |= A;
        if (f = f.next, f === null) {
          if (f = l.shared.pending, f === null)
            break;
          U = f, f = U.next, U.next = null, l.lastBaseUpdate = U, l.shared.pending = null;
        }
      } while (!0);
      D === null && (g = I), l.baseState = g, l.firstBaseUpdate = w, l.lastBaseUpdate = D, i === null && (l.shared.lanes = 0), ga |= s, e.lanes = s, e.memoizedState = I;
    }
  }
  function rd(e, t) {
    if (typeof e != "function")
      throw Error(c(191, e));
    e.call(t);
  }
  function cd(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        rd(n[e], t);
  }
  var sa = en(null), Lu = en(0);
  function sd(e, t) {
    e = kn, Ve(Lu, e), Ve(sa, t), kn = e | t.baseLanes;
  }
  function Uc() {
    Ve(Lu, kn), Ve(sa, sa.current);
  }
  function Dc() {
    kn = Lu.current, fe(sa), fe(Lu);
  }
  var St = en(null), Ot = null;
  function oa(e) {
    var t = e.alternate;
    Ve(Tt, Tt.current & 1), Ve(St, e), Ot === null && (t === null || sa.current !== null || t.memoizedState !== null) && (Ot = e);
  }
  function zc(e) {
    Ve(Tt, Tt.current), Ve(St, e), Ot === null && (Ot = e);
  }
  function od(e) {
    e.tag === 22 ? (Ve(Tt, Tt.current), Ve(St, e), Ot === null && (Ot = e)) : fa();
  }
  function fa() {
    Ve(Tt, Tt.current), Ve(St, St.current);
  }
  function Zt(e) {
    fe(St), Ot === e && (Ot = null), fe(Tt);
  }
  var Tt = en(0);
  function bi(e, t) {
    Ve(St, St.current), Ve(Tt, t);
  }
  function Mc(e) {
    fe(Tt), fe(St), Ot === e && (Ot = null);
  }
  function Iu(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || no(n) || ao(n)))
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
  var Xn = 0, _e = null, Qe = null, it = null, Bu = !1, bl = !1, ka = !1, Vu = 0, Si = 0, Sl = null, Ov = 0;
  function tt() {
    throw Error(c(321));
  }
  function jc(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Kt(e[n], t[n])) return !1;
    return !0;
  }
  function Hc(e, t, n, a, l, i) {
    return Xn = i, _e = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, te.H = e === null || e.memoizedState === null ? Zd : kd, ka = !1, i = n(a, l), ka = !1, bl && (i = dd(
      t,
      n,
      a,
      l
    )), fd(e), i;
  }
  function fd(e) {
    te.H = ku;
    var t = Qe !== null && Qe.next !== null;
    if (Xn = 0, it = Qe = _e = null, Bu = !1, Si = 0, Sl = null, t) throw Error(c(300));
    e === null || ut || (e = e.dependencies, e !== null && Uu(e) && (ut = !0));
  }
  function dd(e, t, n, a) {
    _e = e;
    var l = 0;
    do {
      if (bl && (Sl = null), Si = 0, bl = !1, 25 <= l) throw Error(c(301));
      if (l += 1, it = Qe = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      te.H = jv, i = t(n, a);
    } while (bl);
    return i;
  }
  function Cv() {
    var e = te.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Ti(t) : t, e = e.useState()[0], (Qe !== null ? Qe.memoizedState : null) !== e && (_e.flags |= 1024), t;
  }
  function qc() {
    var e = Vu !== 0;
    return Vu = 0, e;
  }
  function Lc(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function Ic(e) {
    if (Bu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Bu = !1;
    }
    Xn = 0, it = Qe = _e = null, bl = !1, Si = Vu = 0, Sl = null;
  }
  function Ut() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return it === null ? _e.memoizedState = it = e : it = it.next = e, it;
  }
  function at() {
    if (Qe === null) {
      var e = _e.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Qe.next;
    var t = it === null ? _e.memoizedState : it.next;
    if (t !== null)
      it = t, Qe = e;
    else {
      if (e === null)
        throw _e.alternate === null ? Error(c(467)) : Error(c(310));
      Qe = e, e = {
        memoizedState: Qe.memoizedState,
        baseState: Qe.baseState,
        baseQueue: Qe.baseQueue,
        queue: Qe.queue,
        next: null
      }, it === null ? _e.memoizedState = it = e : it = it.next = e;
    }
    return it;
  }
  function Gu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ti(e) {
    var t = Si;
    return Si += 1, Sl === null && (Sl = []), e = nd(Sl, e, t), t = _e, (it === null ? t.memoizedState : it.next) === null && (t = t.alternate, te.H = t === null || t.memoizedState === null ? Zd : kd), e;
  }
  function Yu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ti(e);
      if (e.$$typeof === G) return;
      if (e.$$typeof === B) return bt(e);
    }
    throw Error(c(438, String(e)));
  }
  function Bc(e) {
    var t = null, n = _e.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var a = _e.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(l) {
          return l.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = Gu(), _e.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++)
        n[a] = Se;
    return t.index++, n;
  }
  function Qn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Xu(e) {
    var t = at();
    return Vc(t, Qe, e);
  }
  function Vc(e, t, n) {
    var a = e.queue;
    if (a === null) throw Error(c(311));
    a.lastRenderedReducer = n;
    var l = e.baseQueue, i = a.pending;
    if (i !== null) {
      if (l !== null) {
        var s = l.next;
        l.next = i.next, i.next = s;
      }
      t.baseQueue = l = i, a.pending = null;
    }
    if (i = e.baseState, l === null) e.memoizedState = i;
    else {
      t = l.next;
      var f = s = null, g = null, w = t, D = !1;
      do {
        var I = w.lane & -536870913;
        if (I !== w.lane ? (Ue & I) === I : (Xn & I) === I) {
          var A = w.revertLane;
          if (A === 0)
            g !== null && (g = g.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: w.action,
              hasEagerState: w.hasEagerState,
              eagerState: w.eagerState,
              next: null
            }), I === Ya && (D = !0);
          else if ((Xn & A) === A) {
            w = w.next, A === Ya && (D = !0);
            continue;
          } else
            I = {
              lane: 0,
              revertLane: w.revertLane,
              gesture: null,
              action: w.action,
              hasEagerState: w.hasEagerState,
              eagerState: w.eagerState,
              next: null
            }, g === null ? (f = g = I, s = i) : g = g.next = I, _e.lanes |= A, ga |= A;
          I = w.action, ka && n(i, I), i = w.hasEagerState ? w.eagerState : n(i, I);
        } else
          A = {
            lane: I,
            revertLane: w.revertLane,
            gesture: w.gesture,
            action: w.action,
            hasEagerState: w.hasEagerState,
            eagerState: w.eagerState,
            next: null
          }, g === null ? (f = g = A, s = i) : g = g.next = A, _e.lanes |= I, ga |= I;
        w = w.next;
      } while (w !== null && w !== t);
      if (g === null ? s = i : g.next = f, !Kt(i, e.memoizedState) && (ut = !0, D && (n = vl, n !== null)))
        throw n;
      e.memoizedState = i, e.baseState = s, e.baseQueue = g, a.lastRenderedState = i;
    }
    return l === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function Gc(e) {
    var t = at(), n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var a = n.dispatch, l = n.pending, i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var s = l = l.next;
      do
        i = e(i, s.action), s = s.next;
      while (s !== l);
      Kt(i, t.memoizedState) || (ut = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
    }
    return [i, a];
  }
  function hd(e, t, n) {
    var a = _e, l = at(), i = Oe;
    if (i) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = t();
    var s = !Kt(
      (Qe || l).memoizedState,
      n
    );
    if (s && (l.memoizedState = n, ut = !0), l = l.queue, Qc(pd.bind(null, a, l, e), [
      e
    ]), e = l.getSnapshot !== t || s || it !== null && (it.memoizedState.tag & 1) !== 0, Tl(
      e ? 9 : 8,
      { destroy: void 0 },
      gd.bind(null, a, l, n, t),
      null
    ), e) {
      if (a.flags |= 2048, Ze === null) throw Error(c(349));
      i || (Xn & 127) !== 0 || md(a, t, n);
    }
    return n;
  }
  function md(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = _e.updateQueue, t === null ? (t = Gu(), _e.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function gd(e, t, n, a) {
    t.value = n, t.getSnapshot = a, vd(t) && yd(e);
  }
  function pd(e, t, n) {
    return n(function() {
      vd(t) && yd(e);
    });
  }
  function vd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Kt(e, n);
    } catch {
      return !0;
    }
  }
  function yd(e) {
    var t = qa(e, 2);
    t !== null && Bt(t, e, 2);
  }
  function Yc(e) {
    var t = Ut();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), ka) {
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
  function Ed(e, t, n, a) {
    return e.baseState = n, Vc(
      e,
      Qe,
      typeof a == "function" ? a : Qn
    );
  }
  function Rv(e, t, n, a, l) {
    if (Zu(e)) throw Error(c(485));
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
        then: function(s) {
          i.listeners.push(s);
        }
      };
      te.T !== null ? n(!0) : i.isTransition = !1, a(i), n = t.pending, n === null ? (i.next = t.pending = i, bd(t, i)) : (i.next = n.next, t.pending = n.next = i);
    }
  }
  function bd(e, t) {
    var n = t.action, a = t.payload, l = e.state;
    if (t.isTransition) {
      var i = te.T, s = {};
      s.types = i !== null ? i.types : null, te.T = s;
      try {
        var f = n(l, a), g = te.S;
        g !== null && g(s, f), Sd(e, t, f);
      } catch (w) {
        Xc(e, t, w);
      } finally {
        i !== null && s.types !== null && (i.types = s.types), te.T = i;
      }
    } else
      try {
        i = n(l, a), Sd(e, t, i);
      } catch (w) {
        Xc(e, t, w);
      }
  }
  function Sd(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        Td(e, t, a);
      },
      function(a) {
        return Xc(e, t, a);
      }
    ) : Td(e, t, n);
  }
  function Td(e, t, n) {
    t.status = "fulfilled", t.value = n, Ad(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, bd(e, n)));
  }
  function Xc(e, t, n) {
    var a = e.pending;
    if (e.pending = null, a !== null) {
      a = a.next;
      do
        t.status = "rejected", t.reason = n, Ad(t), t = t.next;
      while (t !== a);
    }
    e.action = null;
  }
  function Ad(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function _d(e, t) {
    return t;
  }
  function Nd(e, t) {
    if (Oe) {
      var n = Ze.formState;
      if (n !== null) {
        e: {
          var a = _e;
          if (Oe) {
            if (Je) {
              t: {
                for (var l = Je, i = rn; l.nodeType !== 8; ) {
                  if (!i) {
                    l = null;
                    break t;
                  }
                  if (l = sn(
                    l.nextSibling
                  ), l === null) {
                    l = null;
                    break t;
                  }
                }
                i = l.data, l = i === "F!" || i === "F" ? l : null;
              }
              if (l) {
                Je = sn(
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
    return n = Ut(), n.memoizedState = n.baseState = t, a = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: _d,
      lastRenderedState: t
    }, n.queue = a, n = Xd.bind(
      null,
      _e,
      a
    ), a.dispatch = n, a = Yc(!1), i = Fc.bind(
      null,
      _e,
      !1,
      a.queue
    ), a = Ut(), l = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = l, n = Rv.bind(
      null,
      _e,
      l,
      i,
      n
    ), l.dispatch = n, a.memoizedState = e, [t, n, !1];
  }
  function wd(e) {
    var t = at();
    return Od(t, Qe, e);
  }
  function Od(e, t, n) {
    if (t = Vc(
      e,
      t,
      _d
    )[0], e = Xu(Qn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Ti(t);
      } catch (s) {
        throw s === yl ? Mu : s;
      }
    else a = t;
    t = at();
    var l = t.queue, i = l.dispatch;
    return n !== t.memoizedState && (_e.flags |= 2048, Tl(
      9,
      { destroy: void 0 },
      xv.bind(null, l, n),
      null
    )), [a, i, e];
  }
  function xv(e, t) {
    e.action = t;
  }
  function Cd(e) {
    var t = at(), n = Qe;
    if (n !== null)
      return Od(t, n, e);
    at(), t = t.memoizedState, n = at();
    var a = n.queue.dispatch;
    return n.memoizedState = e, [t, a, !1];
  }
  function Tl(e, t, n, a) {
    return e = { tag: e, create: n, deps: a, inst: t, next: null }, t = _e.updateQueue, t === null && (t = Gu(), _e.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
  }
  function Rd() {
    return at().memoizedState;
  }
  function Qu(e, t, n, a) {
    var l = Ut();
    _e.flags |= e, l.memoizedState = Tl(
      1 | t,
      { destroy: void 0 },
      n,
      a === void 0 ? null : a
    );
  }
  function Ku(e, t, n, a) {
    var l = at();
    a = a === void 0 ? null : a;
    var i = l.memoizedState.inst;
    Qe !== null && a !== null && jc(a, Qe.memoizedState.deps) ? l.memoizedState = Tl(t, i, n, a) : (_e.flags |= e, l.memoizedState = Tl(
      1 | t,
      i,
      n,
      a
    ));
  }
  function xd(e, t) {
    Qu(8390656, 8, e, t);
  }
  function Qc(e, t) {
    Ku(2048, 8, e, t);
  }
  function Uv(e) {
    _e.flags |= 4;
    var t = _e.updateQueue;
    if (t === null)
      t = Gu(), _e.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function Ud(e) {
    var t = at().memoizedState;
    return Uv({ ref: t, nextImpl: e }), function() {
      if ((Ie & 2) !== 0) throw Error(c(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Dd(e, t) {
    return Ku(4, 2, e, t);
  }
  function zd(e, t) {
    return Ku(4, 4, e, t);
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
  function jd(e, t, n) {
    n = n != null ? n.concat([e]) : null, Ku(4, 4, Md.bind(null, t, e), n);
  }
  function Kc() {
  }
  function Hd(e, t) {
    var n = at();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && jc(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
  }
  function qd(e, t) {
    var n = at();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && jc(t, a[1]))
      return a[0];
    if (a = e(), ka) {
      Pn(!0);
      try {
        e();
      } finally {
        Pn(!1);
      }
    }
    return n.memoizedState = [a, t], a;
  }
  function Zc(e, t, n) {
    return n === void 0 || (Xn & 1073741824) !== 0 && (Ue & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = Zh(), _e.lanes |= e, ga |= e, n);
  }
  function Ld(e, t, n, a) {
    return Kt(n, t) ? n : sa.current !== null ? (e = Zc(e, n, a), Kt(e, t) || (ut = !0), e) : (Xn & 106) === 0 || (Xn & 1073741824) !== 0 && (Ue & 261930) === 0 ? (ut = !0, e.memoizedState = n) : (e = Zh(), _e.lanes |= e, ga |= e, t);
  }
  function Id(e, t, n, a, l) {
    var i = pe.p;
    pe.p = i !== 0 && 8 > i ? i : 8;
    var s = te.T, f = {};
    f.types = s !== null ? s.types : null, te.T = f, Fc(e, !1, t, n);
    try {
      var g = l(), w = te.S;
      if (w !== null && w(f, g), g !== null && typeof g == "object" && typeof g.then == "function") {
        var D = wv(
          g,
          a
        );
        Ai(
          e,
          t,
          D,
          $t(e)
        );
      } else
        Ai(
          e,
          t,
          a,
          $t(e)
        );
    } catch (I) {
      Ai(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: I },
        $t()
      );
    } finally {
      pe.p = i, s !== null && f.types !== null && (s.types = f.types), te.T = s;
    }
  }
  function Dv() {
  }
  function kc(e, t, n, a) {
    if (e.tag !== 5) throw Error(c(476));
    var l = Bd(e).queue;
    Id(
      e,
      l,
      t,
      Wt,
      n === null ? Dv : function() {
        return Vd(e), n(a);
      }
    );
  }
  function Bd(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: Wt,
      baseState: Wt,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Qn,
        lastRenderedState: Wt
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
  function Vd(e) {
    var t = Bd(e);
    t.next === null && (t = e.alternate.memoizedState), Ai(
      e,
      t.next.queue,
      {},
      $t()
    );
  }
  function Jc() {
    return bt(Vl);
  }
  function Gd() {
    return at().memoizedState;
  }
  function Yd() {
    return at().memoizedState;
  }
  function zv(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = $t();
          e = ra(n);
          var a = ca(t, e, n);
          a !== null && (Bt(a, t, n), vi(a, t, n)), t = { cache: Ac() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function Mv(e, t, n) {
    var a = $t();
    n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Zu(e) ? Qd(t, n) : (n = mc(e, t, n, a), n !== null && (Bt(n, e, a), Kd(n, t, a)));
  }
  function Xd(e, t, n) {
    var a = $t();
    Ai(e, t, n, a);
  }
  function Ai(e, t, n, a) {
    var l = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (Zu(e)) Qd(t, l);
    else {
      var i = e.alternate;
      if (e.lanes === 0 && (i === null || i.lanes === 0) && (i = t.lastRenderedReducer, i !== null))
        try {
          var s = t.lastRenderedState, f = i(s, n);
          if (l.hasEagerState = !0, l.eagerState = f, Kt(f, s))
            return _u(e, t, l, 0), Ze === null && Au(), !1;
        } catch {
        }
      if (n = mc(e, t, l, a), n !== null)
        return Bt(n, e, a), Kd(n, t, a), !0;
    }
    return !1;
  }
  function Fc(e, t, n, a) {
    if (a = {
      lane: 2,
      revertLane: Bs(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Zu(e)) {
      if (t) throw Error(c(479));
    } else
      t = mc(
        e,
        n,
        a,
        2
      ), t !== null && Bt(t, e, 2);
  }
  function Zu(e) {
    var t = e.alternate;
    return e === _e || t !== null && t === _e;
  }
  function Qd(e, t) {
    bl = Bu = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Kd(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, Ko(e, n);
    }
  }
  var ku = {
    readContext: bt,
    use: Yu,
    useCallback: tt,
    useContext: tt,
    useEffect: tt,
    useImperativeHandle: tt,
    useLayoutEffect: tt,
    useInsertionEffect: tt,
    useMemo: tt,
    useReducer: tt,
    useRef: tt,
    useState: tt,
    useDebugValue: tt,
    useDeferredValue: tt,
    useTransition: tt,
    useSyncExternalStore: tt,
    useId: tt,
    useHostTransitionStatus: tt,
    useFormState: tt,
    useActionState: tt,
    useOptimistic: tt,
    useMemoCache: tt,
    useCacheRefresh: tt,
    useEffectEvent: tt
  }, Zd = {
    readContext: bt,
    use: Yu,
    useCallback: function(e, t) {
      return Ut().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: bt,
    useEffect: xd,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, Qu(
        4194308,
        4,
        Md.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return Qu(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Qu(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = Ut();
      t = t === void 0 ? null : t;
      var a = e();
      if (ka) {
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
      var a = Ut();
      if (n !== void 0) {
        var l = n(t);
        if (ka) {
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
      }, a.queue = e, e = e.dispatch = Mv.bind(
        null,
        _e,
        e
      ), [a.memoizedState, e];
    },
    useRef: function(e) {
      var t = Ut();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Yc(e);
      var t = e.queue, n = Xd.bind(null, _e, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: Kc,
    useDeferredValue: function(e, t) {
      var n = Ut();
      return Zc(n, e, t);
    },
    useTransition: function() {
      var e = Yc(!1);
      return e = Id.bind(
        null,
        _e,
        e.queue,
        !0,
        !1
      ), Ut().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var a = _e, l = Ut();
      if (Oe) {
        if (n === void 0)
          throw Error(c(407));
        n = n();
      } else {
        if (n = t(), Ze === null)
          throw Error(c(349));
        (Ue & 127) !== 0 || md(a, t, n);
      }
      l.memoizedState = n;
      var i = { value: n, getSnapshot: t };
      return l.queue = i, xd(pd.bind(null, a, i, e), [
        e
      ]), a.flags |= 2048, Tl(
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
      var e = Ut(), t = Ze.identifierPrefix;
      if (Oe) {
        var n = Nn, a = _n;
        n = (a & ~(1 << 32 - Xt(a) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Vu++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = Ov++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Jc,
    useFormState: Nd,
    useActionState: Nd,
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
      return t.queue = n, t = Fc.bind(
        null,
        _e,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Bc,
    useCacheRefresh: function() {
      return Ut().memoizedState = zv.bind(
        null,
        _e
      );
    },
    useEffectEvent: function(e) {
      var t = Ut(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((Ie & 2) !== 0)
          throw Error(c(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, kd = {
    readContext: bt,
    use: Yu,
    useCallback: Hd,
    useContext: bt,
    useEffect: Qc,
    useImperativeHandle: jd,
    useInsertionEffect: Dd,
    useLayoutEffect: zd,
    useMemo: qd,
    useReducer: Xu,
    useRef: Rd,
    useState: function() {
      return Xu(Qn);
    },
    useDebugValue: Kc,
    useDeferredValue: function(e, t) {
      var n = at();
      return Ld(
        n,
        Qe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Xu(Qn)[0], t = at().memoizedState;
      return [
        typeof e == "boolean" ? e : Ti(e),
        t
      ];
    },
    useSyncExternalStore: hd,
    useId: Gd,
    useHostTransitionStatus: Jc,
    useFormState: wd,
    useActionState: wd,
    useOptimistic: function(e, t) {
      var n = at();
      return Ed(n, Qe, e, t);
    },
    useMemoCache: Bc,
    useCacheRefresh: Yd,
    useEffectEvent: Ud
  }, jv = {
    readContext: bt,
    use: Yu,
    useCallback: Hd,
    useContext: bt,
    useEffect: Qc,
    useImperativeHandle: jd,
    useInsertionEffect: Dd,
    useLayoutEffect: zd,
    useMemo: qd,
    useReducer: Gc,
    useRef: Rd,
    useState: function() {
      return Gc(Qn);
    },
    useDebugValue: Kc,
    useDeferredValue: function(e, t) {
      var n = at();
      return Qe === null ? Zc(n, e, t) : Ld(
        n,
        Qe.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Gc(Qn)[0], t = at().memoizedState;
      return [
        typeof e == "boolean" ? e : Ti(e),
        t
      ];
    },
    useSyncExternalStore: hd,
    useId: Gd,
    useHostTransitionStatus: Jc,
    useFormState: Cd,
    useActionState: Cd,
    useOptimistic: function(e, t) {
      var n = at();
      return Qe !== null ? Ed(n, Qe, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Bc,
    useCacheRefresh: Yd,
    useEffectEvent: Ud
  };
  function $c(e, t, n, a) {
    t = e.memoizedState, n = n(a, t), n = n == null ? t : ne({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Pc = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var a = $t(), l = ra(a);
      l.payload = t, n != null && (l.callback = n), t = ca(e, l, a), t !== null && (Bt(t, e, a), vi(t, e, a));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var a = $t(), l = ra(a);
      l.tag = 1, l.payload = t, n != null && (l.callback = n), t = ca(e, l, a), t !== null && (Bt(t, e, a), vi(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = $t(), a = ra(n);
      a.tag = 2, t != null && (a.callback = t), t = ca(e, a, n), t !== null && (Bt(t, e, n), vi(t, e, n));
    }
  };
  function Jd(e, t, n, a, l, i, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, i, s) : t.prototype && t.prototype.isPureReactComponent ? !si(n, a) || !si(l, i) : !0;
  }
  function Fd(e, t, n, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && Pc.enqueueReplaceState(t, t.state, null);
  }
  function Ja(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var a in t)
        a !== "ref" && (n[a] = t[a]);
    }
    if (e = e.defaultProps) {
      n === t && (n = ne({}, n));
      for (var l in e)
        n[l] === void 0 && (n[l] = e[l]);
    }
    return n;
  }
  function $d(e) {
    Tu(e);
  }
  function Pd(e) {
    console.error(e);
  }
  function Wd(e) {
    Tu(e);
  }
  function Ju(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (a) {
      setTimeout(function() {
        throw a;
      });
    }
  }
  function eh(e, t, n) {
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
  function Wc(e, t, n) {
    return n = ra(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      Ju(e, t);
    }, n;
  }
  function th(e) {
    return e = ra(e), e.tag = 3, e;
  }
  function nh(e, t, n, a) {
    var l = n.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var i = a.value;
      e.payload = function() {
        return l(i);
      }, e.callback = function() {
        eh(t, n, a);
      };
    }
    var s = n.stateNode;
    s !== null && typeof s.componentDidCatch == "function" && (e.callback = function() {
      eh(t, n, a), typeof l != "function" && (pa === null ? pa = /* @__PURE__ */ new Set([this]) : pa.add(this));
      var f = a.stack;
      this.componentDidCatch(a.value, {
        componentStack: f !== null ? f : ""
      });
    });
  }
  function Hv(e, t, n, a, l) {
    if (n.flags |= 32768, a !== null && typeof a == "object" && typeof a.then == "function") {
      if (t = n.alternate, t !== null && Va(
        t,
        n,
        l,
        !0
      ), n = St.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
          case 19:
            return Ot === null ? pr() : n.alternate === null && nt === 0 && (nt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = l, a === ju ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), qs(e, a, l)), !1;
          case 22:
            return n.flags |= 65536, a === ju ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), qs(e, a, l)), !1;
        }
        throw Error(c(435, n.tag));
      }
      return qs(e, a, l), pr(), !1;
    }
    if (Oe)
      return t = St.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = l, a !== Ec && (e = Error(c(422), { cause: a }), di(an(e, n)))) : (a !== Ec && (t = Error(c(423), {
        cause: a
      }), di(
        an(t, n)
      )), e = e.current.alternate, e.flags |= 65536, l &= -l, e.lanes |= l, a = an(a, n), l = Wc(
        e.stateNode,
        a,
        l
      ), Rc(e, l), nt !== 4 && (nt = 2)), !1;
    var i = Error(c(520), { cause: a });
    if (i = an(i, n), Ui === null ? Ui = [i] : Ui.push(i), nt !== 4 && (nt = 2), t === null) return !0;
    a = an(a, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = l & -l, n.lanes |= e, e = Wc(n.stateNode, a, e), Rc(n, e), !1;
        case 1:
          if (t = n.type, i = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (pa === null || !pa.has(i))))
            return n.flags |= 65536, l &= -l, n.lanes |= l, l = th(l), nh(
              l,
              e,
              n,
              a
            ), Rc(n, l), !1;
          break;
        case 22:
          if (n.memoizedState !== null)
            return n.flags |= 65536, !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var es = Error(c(461)), ut = !1;
  function ot(e, t, n, a) {
    t.child = e === null ? ud(t, null, n, a) : Za(
      t,
      e.child,
      n,
      a
    );
  }
  function ah(e, t, n, a, l) {
    n = n.render;
    var i = t.ref;
    if ("ref" in a) {
      var s = {};
      for (var f in a)
        f !== "ref" && (s[f] = a[f]);
    } else s = a;
    return Ga(t), a = Hc(
      e,
      t,
      n,
      s,
      i,
      l
    ), f = qc(), e !== null && !ut ? (Lc(e, t, l), Kn(e, t, l)) : (Oe && f && Cu(t), t.flags |= 1, ot(e, t, a, l), t.child);
  }
  function lh(e, t, n, a, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !gc(i) && i.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = i, ih(
        e,
        t,
        i,
        a,
        l
      )) : (e = wu(
        n.type,
        null,
        a,
        t,
        t.mode,
        l
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (i = e.child, !cs(e, l)) {
      var s = i.memoizedProps;
      if (n = n.compare, n = n !== null ? n : si, n(s, a) && e.ref === t.ref)
        return Kn(e, t, l);
    }
    return t.flags |= 1, e = Bn(i, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function ih(e, t, n, a, l) {
    if (e !== null) {
      var i = e.memoizedProps;
      if (si(i, a) && e.ref === t.ref)
        if (ut = !1, t.pendingProps = a = i, cs(e, l))
          (e.flags & 131072) !== 0 && (ut = !0);
        else
          return t.lanes = e.lanes, Kn(e, t, l);
    }
    return ts(
      e,
      t,
      n,
      a,
      l
    );
  }
  function uh(e, t, n, a) {
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
        return rh(
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
        ), i !== null ? sd(t, i) : Uc(), od(t);
      else
        return a = t.lanes = 536870912, rh(
          e,
          t,
          i !== null ? i.baseLanes | n : n,
          n,
          a
        );
    } else
      i !== null ? (zu(t, i.cachePool), sd(t, i), fa(), t.memoizedState = null) : (e !== null && zu(t, null), Uc(), fa());
    return ot(e, t, l, n), t.child;
  }
  function _i(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function rh(e, t, n, a, l) {
    var i = Nc();
    return i = i === null ? null : { parent: lt._currentValue, pool: i }, t.memoizedState = {
      baseLanes: n,
      cachePool: i
    }, e !== null && zu(t, null), Uc(), od(t), e !== null && Va(e, t, a, !0), t.childLanes = l, null;
  }
  function Fu(e, t) {
    return t = $u(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function ch(e, t, n) {
    return Za(t, e.child, null, n), e = Fu(t, t.pendingProps), e.flags |= 2, Zt(t), t.memoizedState = null, e;
  }
  function qv(e, t, n) {
    var a = t.pendingProps, l = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Oe) {
        if (a.mode === "hidden")
          return e = Fu(t, a), t.lanes = 536870912, e.memoizedState = { baseLanes: 0, cachePool: null }, _i(null, e);
        if (zc(t), (e = Je) ? (e = Mm(
          e,
          rn
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: ta !== null ? { id: _n, overflow: Nn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Qf(e), n.return = t, t.child = n, ht = t, Je = null)) : e = null, e === null) throw aa(t);
        return t.lanes = 536870912, null;
      }
      return Fu(t, a);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var s = i.dehydrated;
      if (zc(t), l)
        if (t.flags & 256)
          t.flags &= -257, t = ch(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(c(558));
      else if (ut || Va(e, t, n, !1), l = (n & e.childLanes) !== 0, ut || l) {
        if (sa.current === null) {
          if (a = Ze, a !== null && (s = Zo(a, n), s !== 0 && s !== i.retryLane))
            throw i.retryLane = s, qa(e, s), Bt(a, e, s), es;
          pr();
        }
        t = ch(
          e,
          t,
          n
        );
      } else
        e = i.treeContext, Je = sn(s.nextSibling), ht = t, Oe = !0, na = null, rn = !1, e !== null && kf(t, e), t = Fu(t, a), t.flags |= 134221824;
      return t;
    }
    return e = Bn(e.child, {
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
  function ts(e, t, n, a, l) {
    return Ga(t), n = Hc(
      e,
      t,
      n,
      a,
      void 0,
      l
    ), a = qc(), e !== null && !ut ? (Lc(e, t, l), Kn(e, t, l)) : (Oe && a && Cu(t), t.flags |= 1, ot(e, t, n, l), t.child);
  }
  function sh(e, t, n, a, l, i) {
    return Ga(t), t.updateQueue = null, n = dd(
      t,
      a,
      n,
      l
    ), fd(e), a = qc(), e !== null && !ut ? (Lc(e, t, i), Kn(e, t, i)) : (Oe && a && Cu(t), t.flags |= 1, ot(e, t, n, i), t.child);
  }
  function oh(e, t, n, a, l) {
    if (Ga(t), t.stateNode === null) {
      var i = hl, s = n.contextType;
      typeof s == "object" && s !== null && (i = bt(s)), i = new n(a, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Pc, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = a, i.state = t.memoizedState, i.refs = {}, Oc(t), s = n.contextType, i.context = typeof s == "object" && s !== null ? bt(s) : hl, i.state = t.memoizedState, s = n.getDerivedStateFromProps, typeof s == "function" && ($c(
        t,
        n,
        s,
        a
      ), i.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (s = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), s !== i.state && Pc.enqueueReplaceState(i, i.state, null), Ei(t, a, i, l), yi(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      i = t.stateNode;
      var f = t.memoizedProps, g = Ja(n, f);
      i.props = g;
      var w = i.context, D = n.contextType;
      s = hl, typeof D == "object" && D !== null && (s = bt(D));
      var I = n.getDerivedStateFromProps;
      D = typeof I == "function" || typeof i.getSnapshotBeforeUpdate == "function", f = t.pendingProps !== f, D || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (f || w !== s) && Fd(
        t,
        i,
        a,
        s
      ), ua = !1;
      var A = t.memoizedState;
      i.state = A, Ei(t, a, i, l), yi(), w = t.memoizedState, f || A !== w || ua ? (typeof I == "function" && ($c(
        t,
        n,
        I,
        a
      ), w = t.memoizedState), (g = ua || Jd(
        t,
        n,
        g,
        a,
        A,
        w,
        s
      )) ? (D || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = w), i.props = a, i.state = w, i.context = s, a = g) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      i = t.stateNode, Cc(e, t), s = t.memoizedProps, D = Ja(n, s), i.props = D, I = t.pendingProps, A = i.context, w = n.contextType, g = hl, typeof w == "object" && w !== null && (g = bt(w)), f = n.getDerivedStateFromProps, (w = typeof f == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== I || A !== g) && Fd(
        t,
        i,
        a,
        g
      ), ua = !1, A = t.memoizedState, i.state = A, Ei(t, a, i, l), yi();
      var U = t.memoizedState;
      s !== I || A !== U || ua || e !== null && e.dependencies !== null && Uu(e.dependencies) ? (typeof f == "function" && ($c(
        t,
        n,
        f,
        a
      ), U = t.memoizedState), (D = ua || Jd(
        t,
        n,
        D,
        a,
        A,
        U,
        g
      ) || e !== null && e.dependencies !== null && Uu(e.dependencies)) ? (w || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, U, g), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        a,
        U,
        g
      )), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && A === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = U), i.props = a, i.state = U, i.context = g, a = D) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && A === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && A === e.memoizedState || (t.flags |= 1024), a = !1);
    }
    return i = a, Al(e, t), a = (t.flags & 128) !== 0, i || a ? (i = t.stateNode, n = a && typeof n.getDerivedStateFromError != "function" ? null : i.render(), t.flags |= 1, e !== null && a ? (t.child = Za(
      t,
      e.child,
      null,
      l
    ), t.child = Za(
      t,
      null,
      n,
      l
    )) : ot(e, t, n, l), t.memoizedState = i.state, e = t.child) : e = Kn(
      e,
      t,
      l
    ), e;
  }
  function fh(e, t, n, a) {
    return Ia(), t.flags |= 256, ot(e, t, n, a), t.child;
  }
  var ns = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function as(e) {
    return { baseLanes: e, cachePool: ed() };
  }
  function ls(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Ft), e;
  }
  function dh(e, t, n) {
    var a = t.pendingProps, l = !1, i = (t.flags & 128) !== 0, s;
    if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (Tt.current & 2) !== 0), s && (l = !0, t.flags &= -129), s = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Oe) {
        if (l ? oa(t) : fa(), (e = Je) ? (e = Mm(
          e,
          rn
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: ta !== null ? { id: _n, overflow: Nn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Qf(e), n.return = t, t.child = n, ht = t, Je = null)) : e = null, e === null) throw aa(t);
        return ao(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      return i = a.children, a = a.fallback, l ? (fa(), l = t.mode, i = $u(
        { mode: "hidden", children: i },
        l
      ), a = La(
        a,
        l,
        n,
        null
      ), i.return = t, a.return = t, i.sibling = a, t.child = i, a = t.child, a.memoizedState = as(n), a.childLanes = ls(
        e,
        s,
        n
      ), t.memoizedState = ns, _i(null, a)) : (oa(t), is(t, i));
    }
    var f = e.memoizedState;
    if (f !== null) {
      var g = f.dehydrated;
      if (g !== null)
        return Lv(
          e,
          t,
          i,
          s,
          a,
          g,
          f,
          n
        );
    }
    return l ? (fa(), l = a.fallback, i = t.mode, f = e.child, g = f.sibling, a = Bn(f, {
      mode: "hidden",
      children: a.children
    }), a.subtreeFlags = f.subtreeFlags & 1206910976, g !== null ? l = Bn(g, l) : (l = La(
      l,
      i,
      n,
      null
    ), l.flags |= 2), l.return = t, a.return = t, a.sibling = l, t.child = a, _i(null, a), a = t.child, l = e.child.memoizedState, l === null ? l = as(n) : (i = l.cachePool, i !== null ? (f = lt._currentValue, i = i.parent !== f ? { parent: f, pool: f } : i) : i = ed(), l = {
      baseLanes: l.baseLanes | n,
      cachePool: i
    }), a.memoizedState = l, a.childLanes = ls(
      e,
      s,
      n
    ), t.memoizedState = ns, _i(e.child, a)) : (oa(t), n = e.child, e = n.sibling, n = Bn(n, {
      mode: "visible",
      children: a.children
    }), n.return = t, n.sibling = null, e !== null && (s = t.deletions, s === null ? (t.deletions = [e], t.flags |= 16) : s.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function is(e, t) {
    return t = $u(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function $u(e, t) {
    return e = Ht(22, e, null, t), e.lanes = 0, e;
  }
  function Pu(e, t, n) {
    return Za(t, e.child, null, n), e = is(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Lv(e, t, n, a, l, i, s, f) {
    if (n)
      return t.flags & 256 ? (oa(t), t.flags &= -257, Pu(
        e,
        t,
        f
      )) : t.memoizedState !== null ? (fa(), t.child = e.child, t.flags |= 128, null) : (fa(), i = l.fallback, s = t.mode, l = $u(
        { mode: "visible", children: l.children },
        s
      ), i = La(
        i,
        s,
        f,
        null
      ), i.flags |= 2, l.return = t, i.return = t, l.sibling = i, t.child = l, Za(t, e.child, null, f), l = t.child, l.memoizedState = as(f), l.childLanes = ls(
        e,
        a,
        f
      ), t.memoizedState = ns, _i(null, l));
    if (oa(t), ao(i)) {
      if (a = i.nextSibling && i.nextSibling.dataset, a) var g = a.dgst;
      return a = g, a !== "" && (l = Error(c(419)), l.stack = "", l.digest = a, di({ value: l, source: null, stack: null })), Pu(
        e,
        t,
        f
      );
    }
    if (ut || Va(e, t, f, !1), a = (f & e.childLanes) !== 0, ut || a) {
      if (sa.current !== null)
        return Pu(
          e,
          t,
          f
        );
      if (a = Ze, a !== null && (l = Zo(
        a,
        f
      ), l !== 0 && l !== s.retryLane))
        throw s.retryLane = l, qa(e, l), Bt(a, e, l), es;
      return no(i) || pr(), Pu(
        e,
        t,
        f
      );
    }
    return no(i) ? (t.flags |= 192, t.child = e.child, null) : (e = s.treeContext, Je = sn(i.nextSibling), ht = t, Oe = !0, na = null, rn = !1, e !== null && kf(t, e), t = is(
      t,
      l.children
    ), t.flags |= 134221824, t);
  }
  function hh(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), xu(e.return, t, n);
  }
  function mh(e) {
    for (var t = null; e !== null; ) {
      var n = e.alternate;
      n !== null && Iu(n) === null && (t = e), e = e.sibling;
    }
    return t;
  }
  function Wu(e, t, n, a, l, i) {
    var s = e.memoizedState;
    s === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: a,
      tail: n,
      tailMode: l,
      treeForkCount: i
    } : (s.isBackwards = t, s.rendering = null, s.renderingStartTime = 0, s.last = a, s.tail = n, s.tailMode = l, s.treeForkCount = i);
  }
  function us(e) {
    var t = e.child;
    for (e.child = null; t !== null; ) {
      var n = t.sibling;
      t.sibling = e.child, e.child = t, t = n;
    }
  }
  function rs(e, t, n) {
    var a = t.pendingProps, l = a.revealOrder, i = a.tail;
    a = a.children;
    var s = Tt.current;
    if (t.flags & 128)
      return bi(t, s), null;
    var f = (s & 2) !== 0;
    if (f ? (s = s & 1 | 2, t.flags |= 128) : s &= 1, bi(t, s), l === "backwards" && e !== null ? (us(e), ot(e, t, a, n), us(e)) : ot(e, t, a, n), a = Oe ? fi : 0, !f && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && hh(e, n, t);
        else if (e.tag === 19)
          hh(e, n, t);
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
        n = mh(t.child), n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null, us(t)), Wu(
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
          if (e = l.alternate, e !== null && Iu(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        Wu(
          t,
          !0,
          n,
          null,
          i,
          a
        );
        break;
      case "together":
        Wu(
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
        n = mh(t.child), n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Wu(
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
    return la(t, t.type, a.value), ot(e, t, a.children, n), t.child;
  }
  function Kn(e, t, n) {
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
      throw Error(c(153));
    if (t.child !== null) {
      for (e = t.child, n = Bn(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = Bn(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function cs(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Uu(e)));
  }
  function Iv(e, t, n) {
    switch (t.tag) {
      case 3:
        V(t, t.stateNode.containerInfo), la(t, lt, e.memoizedState.cache), Ia();
        break;
      case 27:
      case 5:
        He(t);
        break;
      case 4:
        V(t, t.stateNode.containerInfo);
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
          return a || (n & l) !== 0 ? dh(e, t, n) : (oa(t), e = Kn(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        }
        oa(t);
        break;
      case 19:
        if (t.flags & 128)
          return rs(
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
            return rs(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), bi(t, Tt.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, uh(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        la(t, lt, e.memoizedState.cache);
    }
    return Kn(e, t, n);
  }
  function ph(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        ut = !0;
      else {
        if (!cs(e, n) && (t.flags & 128) === 0)
          return ut = !1, Iv(
            e,
            t,
            n
          );
        ut = (e.flags & 131072) !== 0;
      }
    else
      ut = !1, Oe && (t.flags & 1048576) !== 0 && Zf(t, fi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = Qa(t.elementType), t.type = e, typeof e == "function")
            gc(e) ? (a = Ja(e, a), t.tag = 1, t = oh(
              null,
              t,
              e,
              a,
              n
            )) : (t.tag = 0, t = ts(
              null,
              t,
              e,
              a,
              n
            ));
          else {
            if (e != null) {
              var l = e.$$typeof;
              if (l === L) {
                t.tag = 11, t = ah(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              } else if (l === oe) {
                t.tag = 14, t = lh(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              } else if (l === B) {
                t.tag = 10, t.type = e, t = gh(
                  null,
                  t,
                  n
                );
                break e;
              }
            }
            throw t = Ae(e) || e, Error(c(306, t, ""));
          }
        }
        return t;
      case 0:
        return ts(
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
        ), oh(
          e,
          t,
          a,
          l,
          n
        );
      case 3:
        e: {
          if (V(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(c(387));
          a = t.pendingProps;
          var i = t.memoizedState;
          l = i.element, Cc(e, t), Ei(t, a, null, n);
          var s = t.memoizedState;
          if (a = s.cache, la(t, lt, a), a !== i.cache && Tc(
            t,
            [lt],
            n,
            !0
          ), yi(), a = s.element, i.isDehydrated)
            if (i = {
              element: a,
              isDehydrated: !1,
              cache: s.cache
            }, t.updateQueue.baseState = i, t.memoizedState = i, t.flags & 256) {
              t = fh(
                e,
                t,
                a,
                n
              );
              break e;
            } else if (a !== l) {
              l = an(
                Error(c(424)),
                t
              ), di(l), t = fh(
                e,
                t,
                a,
                n
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Je = sn(e.firstChild), ht = t, Oe = !0, na = null, rn = !0, n = ud(
                t,
                null,
                a,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 134221824, n = n.sibling;
          else {
            if (Ia(), a === l) {
              t = Kn(
                e,
                t,
                n
              );
              break e;
            }
            ot(e, t, a, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return Al(e, t), e === null ? (n = Vm(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : Oe || (t.stateNode = bm(
          t.type,
          t.pendingProps,
          Y.current,
          t
        )) : t.memoizedState = Vm(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return He(t), e === null && Oe && (a = t.stateNode = qm(
          t.type,
          t.pendingProps,
          Y.current
        ), ht = t, rn = !0, l = Je, Ea(t.type) ? (lo = l, Je = sn(a.firstChild)) : Je = l), ot(
          e,
          t,
          t.pendingProps.children,
          n
        ), Al(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Oe && ((l = a = Je) && (a = zy(
          a,
          t.type,
          t.pendingProps,
          rn
        ), a !== null ? (t.stateNode = a, ht = t, Je = sn(a.firstChild), rn = !1, l = !0) : l = !1), l || aa(t)), He(t), l = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, a = i.children, Js(l, i) ? a = null : s !== null && Js(l, s) && (t.flags |= 32), t.memoizedState !== null && (l = Hc(
          e,
          t,
          Cv,
          null,
          null,
          n
        ), Vl._currentValue = l), Al(e, t), ot(e, t, a, n), t.child;
      case 6:
        return e === null && Oe && ((e = n = Je) && (n = My(
          n,
          t.pendingProps,
          rn
        ), n !== null ? (t.stateNode = n, ht = t, Je = null, e = !0) : e = !1), e || aa(t)), null;
      case 13:
        return dh(e, t, n);
      case 4:
        return V(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = Za(
          t,
          null,
          a,
          n
        ) : ot(e, t, a, n), t.child;
      case 11:
        return ah(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return a = t.pendingProps, Al(e, t), ot(e, t, a, n), t.child;
      case 8:
        return ot(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return ot(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return gh(e, t, n);
      case 9:
        return l = t.type._context, a = t.pendingProps.children, Ga(t), l = bt(l), a = a(l), t.flags |= 1, ot(e, t, a, n), t.child;
      case 14:
        return lh(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return ih(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return rs(e, t, n);
      case 31:
        return qv(e, t, n);
      case 22:
        return uh(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return Ga(t), a = bt(lt), e === null ? (l = Nc(), l === null && (l = Ze, i = Ac(), l.pooledCache = i, i.refCount++, i !== null && (l.pooledCacheLanes |= n), l = i), t.memoizedState = { parent: a, cache: l }, Oc(t), la(t, lt, l)) : ((e.lanes & n) !== 0 && (Cc(e, t), Ei(t, null, null, n), yi()), l = e.memoizedState, i = t.memoizedState, l.parent !== a ? (l = { parent: a, cache: a }, t.memoizedState = l, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = l), la(t, lt, a)) : (a = i.cache, la(t, lt, a), a !== l.cache && Tc(
          t,
          [lt],
          n,
          !0
        ))), ot(
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
        }), a = t.pendingProps, a.name != null && a.name !== "auto" ? t.flags |= e === null ? 18882560 : 18874368 : Oe && Cu(t), e !== null && e.memoizedProps.name !== a.name ? t.flags |= 4194816 : Al(e, t), ot(e, t, a.children, n), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(c(156, t.tag));
  }
  function Zn(e) {
    e.flags |= 4;
  }
  function ss(e, t, n, a, l) {
    var i;
    if ((i = (e.mode & 32) !== 0) && (i = n === null ? Qm(t, a) : Qm(t, a) && (a.src !== n.src || a.srcSet !== n.srcSet)), i) {
      if (e.flags |= 16777216, (l & 335544128) === l)
        if (e.stateNode.complete) e.flags |= 8192;
        else if ($h()) e.flags |= 8192;
        else
          throw Ka = ju, wc;
    } else e.flags &= -16777217;
  }
  function vh(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Km(t))
      if ($h()) e.flags |= 8192;
      else
        throw Ka = ju, wc;
  }
  function er(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Xo() : 536870912, e.lanes |= t, Cl |= t);
  }
  function Ni(e, t) {
    if (!Oe)
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
  function Fe(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, a = 0;
    if (t)
      for (var l = e.child; l !== null; )
        n |= l.lanes | l.childLanes, a |= l.subtreeFlags & 1206910976, a |= l.flags & 1206910976, l.return = e, l = l.sibling;
    else
      for (l = e.child; l !== null; )
        n |= l.lanes | l.childLanes, a |= l.subtreeFlags, a |= l.flags, l.return = e, l = l.sibling;
    return e.subtreeFlags |= a, e.childLanes = n, t;
  }
  function Bv(e, t, n) {
    var a = t.pendingProps;
    switch (yc(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Fe(t), null;
      case 1:
        return Fe(t), null;
      case 3:
        return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Yn(lt), ue(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (pl(t) ? Zn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, bc())), Fe(t), null;
      case 26:
        var l = t.type, i = t.memoizedState;
        return e === null ? (Zn(t), i !== null ? (Fe(t), vh(t, i)) : (Fe(t), ss(
          t,
          l,
          null,
          a,
          n
        ))) : i ? i !== e.memoizedState ? (Zn(t), Fe(t), vh(t, i)) : (Fe(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && Zn(t), Fe(t), ss(
          t,
          l,
          e,
          a,
          n
        )), null;
      case 27:
        if (Ke(t), n = Y.current, l = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && Zn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(c(166));
            return Fe(t), t.subtreeFlags &= -33554433, null;
          }
          e = Vt.current, pl(t) ? Jf(t) : (e = qm(l, a, n), t.stateNode = e, Zn(t));
        }
        return Fe(t), t.subtreeFlags &= -33554433, null;
      case 5:
        if (Ke(t), l = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && Zn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(c(166));
            return Fe(t), t.subtreeFlags &= -33554433, null;
          }
          if (i = Vt.current, pl(t))
            Jf(t);
          else {
            var s = Hi(
              Y.current
            );
            switch (i) {
              case 1:
                i = s.createElementNS(
                  "http://www.w3.org/2000/svg",
                  l
                );
                break;
              case 2:
                i = s.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  l
                );
                break;
              default:
                switch (l) {
                  case "svg":
                    i = s.createElementNS(
                      "http://www.w3.org/2000/svg",
                      l
                    );
                    break;
                  case "math":
                    i = s.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      l
                    );
                    break;
                  case "script":
                    i = s.createElement("div"), i.innerHTML = "<script><\/script>", i = i.removeChild(
                      i.firstChild
                    );
                    break;
                  case "select":
                    i = typeof a.is == "string" ? s.createElement("select", {
                      is: a.is
                    }) : s.createElement("select"), a.multiple ? i.multiple = !0 : a.size && (i.size = a.size);
                    break;
                  default:
                    i = typeof a.is == "string" ? s.createElement(l, { is: a.is }) : s.createElement(l);
                }
            }
            i[Et] = t, i[jt] = a;
            e: for (s = t.child; s !== null; ) {
              if (s.tag === 5 || s.tag === 6)
                i.appendChild(s.stateNode);
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
            t.stateNode = i;
            e: switch (_t(i, l, a), l) {
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
        return Fe(t), t.subtreeFlags &= -33554433, ss(
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
          if (e = Y.current, pl(t)) {
            if (e = t.stateNode, n = t.memoizedProps, a = null, l = ht, l !== null)
              switch (l.tag) {
                case 27:
                case 5:
                  a = l.memoizedProps;
              }
            e[Et] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || pm(e.nodeValue, n)), e || aa(t, !0);
          } else
            e = Hi(e).createTextNode(
              a
            ), e[Et] = t, t.stateNode = e;
        }
        return Fe(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = pl(t), n !== null) {
            if (e === null) {
              if (!a) throw Error(c(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(557));
              e[Et] = t;
            } else
              Ia(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Fe(t), e = !1;
          } else
            n = bc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (Zt(t), t) : (Zt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(c(558));
        }
        return Fe(t), null;
      case 13:
        if (a = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (l = pl(t), a !== null && a.dehydrated !== null) {
            if (e === null) {
              if (!l) throw Error(c(318));
              if (l = t.memoizedState, l = l !== null ? l.dehydrated : null, !l) throw Error(c(317));
              l[Et] = t;
            } else
              Ia(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Fe(t), l = !1;
          } else
            l = bc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), l = !0;
          if (!l)
            return t.flags & 256 ? (Zt(t), t) : (Zt(t), null);
        }
        return Zt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = a !== null, e = e !== null && e.memoizedState !== null, n && (a = t.child, l = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (l = a.alternate.memoizedState.cachePool.pool), i = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), i !== l && (a.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), er(t, t.updateQueue), Fe(t), null);
      case 4:
        return ue(), e === null && Xs(t.stateNode.containerInfo), t.flags |= 67108864, Fe(t), null;
      case 10:
        return Yn(t.type), Fe(t), null;
      case 19:
        if (Mc(t), a = t.memoizedState, a === null) return Fe(t), null;
        if (l = (t.flags & 128) !== 0, i = a.rendering, i === null)
          if (l) Ni(a, !1);
          else {
            if (nt !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (i = Iu(e), i !== null) {
                  for (t.flags |= 128, Ni(a, !1), e = i.updateQueue, t.updateQueue = e, er(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    Xf(n, e), n = n.sibling;
                  return bi(
                    t,
                    Tt.current & 1 | 2
                  ), Oe && Vn(t, a.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && Gt() > dr && (t.flags |= 128, l = !0, Ni(a, !1), t.lanes = 4194304);
          }
        else {
          if (!l)
            if (e = Iu(i), e !== null) {
              if (t.flags |= 128, l = !0, e = e.updateQueue, t.updateQueue = e, er(t, e), Ni(a, !0), a.tail === null && a.tailMode !== "collapsed" && a.tailMode !== "visible" && !i.alternate && !Oe)
                return Fe(t), null;
            } else
              2 * Gt() - a.renderingStartTime > dr && n !== 536870912 && (t.flags |= 128, l = !0, Ni(a, !1), t.lanes = 4194304);
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
          return a.rendering = e, a.tail = e.sibling, a.renderingStartTime = Gt(), e.sibling = null, i = Tt.current, i = l ? i & 1 | 2 : i & 1, a.tailMode === "visible" || a.tailMode === "collapsed" || !n || Oe ? bi(t, i) : (n = i, Ve(St, t), Ve(Tt, n), Ot === null && (Ot = t)), Oe && Vn(t, a.treeForkCount), e;
        }
        return Fe(t), null;
      case 22:
      case 23:
        return Zt(t), Dc(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Fe(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Fe(t), n = t.updateQueue, n !== null && er(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && fe(Xa), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Yn(lt), Fe(t), null;
      case 25:
        return null;
      case 30:
        return t.flags |= 33554432, Fe(t), null;
    }
    throw Error(c(156, t.tag));
  }
  function Vv(e, t) {
    switch (yc(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Yn(lt), ue(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Ke(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Zt(t), t.alternate === null)
            throw Error(c(340));
          Ia();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Zt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(c(340));
          Ia();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Mc(t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null), t.flags |= 4, t) : null;
      case 4:
        return ue(), null;
      case 10:
        return Yn(t.type), null;
      case 22:
      case 23:
        return Zt(t), Dc(), e !== null && fe(Xa), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Yn(lt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function yh(e, t) {
    switch (yc(t), t.tag) {
      case 3:
        Yn(lt), ue();
        break;
      case 26:
      case 27:
      case 5:
        Ke(t);
        break;
      case 4:
        ue();
        break;
      case 31:
        t.memoizedState !== null && Zt(t);
        break;
      case 13:
        Zt(t);
        break;
      case 19:
        Mc(t);
        break;
      case 10:
        Yn(t.type);
        break;
      case 22:
      case 23:
        Zt(t), Dc(), e !== null && fe(Xa);
        break;
      case 24:
        Yn(lt);
    }
  }
  function wi(e, t) {
    try {
      var n = t.updateQueue, a = n !== null ? n.lastEffect : null;
      if (a !== null) {
        var l = a.next;
        n = l;
        do {
          if ((n.tag & e) === e) {
            a = void 0;
            var i = n.create, s = n.inst;
            a = i(), s.destroy = a;
          }
          n = n.next;
        } while (n !== l);
      }
    } catch (f) {
      Ye(t, t.return, f);
    }
  }
  function da(e, t, n) {
    try {
      var a = t.updateQueue, l = a !== null ? a.lastEffect : null;
      if (l !== null) {
        var i = l.next;
        a = i;
        do {
          if ((a.tag & e) === e) {
            var s = a.inst, f = s.destroy;
            if (f !== void 0) {
              s.destroy = void 0, l = t;
              var g = n, w = f;
              try {
                w();
              } catch (D) {
                Ye(
                  l,
                  g,
                  D
                );
              }
            }
          }
          a = a.next;
        } while (a !== i);
      }
    } catch (D) {
      Ye(t, t.return, D);
    }
  }
  function Eh(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        cd(t, n);
      } catch (a) {
        Ye(e, e.return, a);
      }
    }
  }
  function bh(e, t, n) {
    n.props = Ja(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (a) {
      Ye(e, t, a);
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
            var l = e.stateNode, i = Ln(e.memoizedProps, l);
            (l.ref === null || l.ref.name !== i) && (l.ref = Om(i)), a = l.ref;
            break;
          case 7:
            if (e.stateNode === null) {
              var s = new Pt(e);
              v(
                e.child,
                !1,
                Uy,
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
      Ye(e, t, f);
    }
  }
  function At(e, t) {
    var n = e.ref, a = e.refCleanup;
    if (n !== null)
      if (typeof a == "function")
        try {
          a();
        } catch (l) {
          Ye(e, t, l);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (l) {
          Ye(e, t, l);
        }
      else n.current = null;
  }
  function tr(e, t) {
    if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && t !== null)
      for (var n = 0; n < t.length; n++)
        zm(
          e.stateNode,
          t[n]
        );
  }
  function Sh(e) {
    for (var t = e.return; t !== null && (fs(t) && zm(e.stateNode, t.stateNode), !os(t)); )
      t = t.return;
  }
  function Oi(e) {
    for (var t = e.return; t !== null && (fs(t) && Dy(e.stateNode, t.stateNode), !os(t)); )
      t = t.return;
  }
  function os(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 27;
  }
  function fs(e) {
    return e && e.tag === 7 && e.stateNode !== null;
  }
  function ds(e) {
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
      Ye(e, e.return, l);
    }
  }
  function hs(e, t, n) {
    try {
      var a = e.stateNode;
      hy(a, e.type, n, t), a[jt] = t;
    } catch (l) {
      Ye(e, e.return, l);
    }
  }
  function Th(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ea(e.type) || e.tag === 4;
  }
  function ms(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || Th(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Ea(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function gs(e, t, n, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      l = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(l, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(l), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = An)), tr(e, a), qe = !0;
    else if (l !== 4 && (l === 27 && (tr(e, a), a = null, Ea(e.type) && (n = e.stateNode, t = null)), e = e.child, e !== null))
      for (gs(
        e,
        t,
        n,
        a
      ), e = e.sibling; e !== null; )
        gs(
          e,
          t,
          n,
          a
        ), e = e.sibling;
  }
  function nr(e, t, n, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      l = e.stateNode, t ? n.insertBefore(l, t) : n.appendChild(l), tr(e, a), qe = !0;
    else if (l !== 4 && (l === 27 && (tr(e, a), a = null, Ea(e.type) && (n = e.stateNode)), e = e.child, e !== null))
      for (nr(
        e,
        t,
        n,
        a
      ), e = e.sibling; e !== null; )
        nr(
          e,
          t,
          n,
          a
        ), e = e.sibling;
  }
  function Ah(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var a = e.type, l = t.attributes; l.length; )
        t.removeAttributeNode(l[0]);
      _t(t, a, n), t[Et] = e, t[jt] = n;
    } catch (i) {
      Ye(e, e.return, i);
    }
  }
  var ar = !1, kt = null;
  function _h(e) {
    (e.tag === 30 || (e.subtreeFlags & 33554432) !== 0) && (ar = !0);
  }
  var On = null;
  function Nh() {
    var e = On;
    return On = null, e;
  }
  var qt = 0;
  function _l(e, t, n, a, l) {
    return qt = 0, wh(
      e.child,
      t,
      n,
      a,
      l
    );
  }
  function wh(e, t, n, a, l) {
    for (var i = !1; e !== null; ) {
      if (e.tag === 5) {
        var s = e.stateNode;
        if (a !== null) {
          var f = Ps(s);
          a.push(f), f.view && (i = !0);
        } else
          i || Ps(s).view && (i = !0);
        ar = !0, Nm(
          s,
          qt === 0 ? t : t + "_" + qt,
          n
        ), qt++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && l || wh(
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
  function Cn(e, t) {
    for (; e !== null; )
      e.tag === 5 ? wm(e.stateNode, e.memoizedProps) : (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && t || Cn(
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
          t = In(t.default, t.share), t !== "none" && (_l(
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
  function ps(e, t) {
    if (e.tag === 30) {
      var n = e.stateNode, a = e.memoizedProps, l = Ln(a, n), i = In(
        a.default,
        n.paired ? a.share : a.enter
      );
      i !== "none" ? _l(e, l, i, null, !1) ? (lr(e), n.paired || t || Dl(e, a.onEnter)) : Cn(e.child, !1) : lr(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        ps(e, t), e = e.sibling;
    else lr(e);
  }
  function vs(e) {
    if (kt !== null && kt.size !== 0) {
      var t = kt;
      if ((e.subtreeFlags & 18874368) !== 0)
        for (e = e.child; e !== null; ) {
          if (e.tag !== 22 || e.memoizedState === null) {
            if (e.tag === 30 && (e.flags & 18874368) !== 0) {
              var n = e.memoizedProps, a = n.name;
              if (a != null && a !== "auto") {
                var l = t.get(a);
                if (l !== void 0) {
                  var i = In(
                    n.default,
                    n.share
                  );
                  if (i !== "none" && (_l(
                    e,
                    a,
                    i,
                    null,
                    !1
                  ) ? (i = e.stateNode, l.paired = i, i.paired = l, Dl(e, n.onShare)) : Cn(e.child, !1)), t.delete(a), t.size === 0) break;
                }
              }
            }
            vs(e);
          }
          e = e.sibling;
        }
    }
  }
  function ys(e) {
    if (e.tag === 30) {
      var t = e.memoizedProps, n = Ln(t, e.stateNode), a = kt !== null ? kt.get(n) : void 0, l = In(
        t.default,
        a !== void 0 ? t.share : t.exit
      );
      l !== "none" && (_l(e, n, l, null, !1) ? a !== void 0 ? (l = e.stateNode, a.paired = l, l.paired = a, kt.delete(n), Dl(e, t.onShare)) : Dl(e, t.onExit) : Cn(e.child, !1)), kt !== null && vs(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        ys(e), e = e.sibling;
    else
      kt !== null && vs(e);
  }
  function Oh(e) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var t = e.memoizedProps, n = Ln(t, e.stateNode);
        t = In(t.default, t.update), e.flags &= -5, t !== "none" && _l(
          e,
          n,
          t,
          e.memoizedState = [],
          !1
        );
      } else
        (e.subtreeFlags & 33554432) !== 0 && Oh(e);
      e = e.sibling;
    }
  }
  function Es(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null; ) {
        if (e.tag !== 22 || e.memoizedState === null) {
          if (e.tag === 30 && (e.flags & 18874368) !== 0) {
            var t = e.stateNode;
            t.paired !== null && (t.paired = null, Cn(e.child, !1));
          }
          Es(e);
        }
        e = e.sibling;
      }
  }
  function ir(e) {
    if (e.tag === 30)
      e.stateNode.paired = null, Cn(e.child, !1), Es(e);
    else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        ir(e), e = e.sibling;
    else Es(e);
  }
  function Ch(e) {
    for (e = e.child; e !== null; )
      e.tag === 30 ? Cn(e.child, !1) : (e.subtreeFlags & 33554432) !== 0 && Ch(e), e = e.sibling;
  }
  function bs(e, t, n, a, l, i, s) {
    for (var f = !1; t !== null; ) {
      if (t.tag === 5) {
        var g = t.stateNode;
        if (i !== null && qt < i.length) {
          var w = i[qt], D = Ps(g);
          (w.view || D.view) && (f = !0);
          var I;
          if (I = (e.flags & 4) === 0)
            if (D.clip) I = !0;
            else {
              I = w.rect;
              var A = D.rect;
              I = I.y !== A.y || I.x !== A.x || I.height !== A.height || I.width !== A.width;
            }
          I && (e.flags |= 4), D.abs ? D = !w.abs : (w = w.rect, D = D.rect, D = w.height !== D.height || w.width !== D.width), D && (e.flags |= 32);
        } else e.flags |= 32;
        (e.flags & 4) !== 0 && Nm(
          g,
          qt === 0 ? n : n + "_" + qt,
          l
        ), f && (e.flags & 4) !== 0 || (On === null && (On = []), On.push(
          g,
          qt === 0 ? a : a + "_" + qt,
          t.memoizedProps
        )), qt++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && s ? e.flags |= t.flags & 32 : bs(
        e,
        t.child,
        n,
        a,
        l,
        i,
        s
      ) && (f = !0));
      t = t.sibling;
    }
    return f;
  }
  function Rh(e, t) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var n = e.memoizedProps, a = e.stateNode, l = Ln(n, a), i = In(n.default, n.update), s;
        s = e.memoizedState, e.memoizedState = null, a = e;
        var f = e.child;
        qt = 0, l = bs(
          a,
          f,
          l,
          l,
          i,
          s,
          !1
        ), (e.flags & 4) !== 0 && l && Dl(e, n.onUpdate);
      } else
        (e.subtreeFlags & 33554432) !== 0 && Rh(e);
      e = e.sibling;
    }
  }
  var mt = !1, Be = !1, Rn = !1, Ss = !1, xh = typeof WeakSet == "function" ? WeakSet : Set, gt = null, xn = !1, Ci = !1, ur = !1, Ts = !1;
  function Gv(e, t, n) {
    if (e = e.containerInfo, Zs = Gl, e = Mf(e), cc(e)) {
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
            var i = l.anchorOffset, s = l.focusNode;
            l = l.focusOffset;
            try {
              a.nodeType, s.nodeType;
            } catch {
              a = null;
              break e;
            }
            var f = 0, g = -1, w = -1, D = 0, I = 0, A = e, U = null;
            t: for (; ; ) {
              for (var F; A !== a || i !== 0 && A.nodeType !== 3 || (g = f + i), A !== s || l !== 0 && A.nodeType !== 3 || (w = f + l), A.nodeType === 3 && (f += A.nodeValue.length), (F = A.firstChild) !== null; )
                U = A, A = F;
              for (; ; ) {
                if (A === e) break t;
                if (U === a && ++D === i && (g = f), U === s && ++I === l && (w = f), (F = A.nextSibling) !== null) break;
                A = U, U = A.parentNode;
              }
              A = F;
            }
            a = g === -1 || w === -1 ? null : { start: g, end: w };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (ks = { focusedElem: e, selectionRange: a }, Gl = !1, n = (n & 335544064) === n, gt = t, t = n ? 9270 : 1024; gt !== null; ) {
      if (e = gt, n && (a = e.deletions, a !== null))
        for (i = 0; i < a.length; i++)
          n && ys(a[i]);
      if (e.alternate === null && (e.flags & 2) !== 0)
        n && _h(e), rr(n);
      else {
        if (e.tag === 22) {
          if (a = e.alternate, e.memoizedState !== null) {
            a !== null && a.memoizedState === null && n && ys(a), rr(n);
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            n && _h(e), rr(n);
            continue;
          }
        }
        a = e.child, (e.subtreeFlags & t) !== 0 && a !== null ? (a.return = e, gt = a) : (n && Oh(e), rr(n));
      }
    }
    kt = null;
  }
  function rr(e) {
    for (; gt !== null; ) {
      var t = gt, n = e, a = t.alternate, l = t.flags;
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
              var s = Ja(
                t.type,
                l
              );
              n = i.getSnapshotBeforeUpdate(
                s,
                a
              ), i.__reactInternalSnapshotBeforeUpdate = n;
            } catch (f) {
              Ye(t, t.return, f);
            }
          }
          break;
        case 3:
          if ((l & 1024) !== 0) {
            if (a = t.stateNode.containerInfo, n = a.nodeType, n === 9)
              to(a);
            else if (n === 1)
              switch (a.nodeName) {
                case "HEAD":
                case "HTML":
                case "BODY":
                  to(a);
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
          n && a !== null && (n = Ln(
            a.memoizedProps,
            a.stateNode
          ), l = t.memoizedProps, l = In(l.default, l.update), l !== "none" && _l(
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
        a.return = t.return, gt = a;
        break;
      }
      gt = t.return;
    }
  }
  function Uh(e, t, n) {
    var a = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Un(e, n), a & 4 && wi(5, n);
        break;
      case 1:
        if (Un(e, n), a & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (s) {
              Ye(n, n.return, s);
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
            } catch (s) {
              Ye(
                n,
                n.return,
                s
              );
            }
          }
        a & 64 && Eh(n), a & 512 && wn(n, n.return);
        break;
      case 3:
        if (Un(e, n), a & 64 && (e = n.updateQueue, e !== null)) {
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
          } catch (s) {
            Ye(n, n.return, s);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Ah(n);
      case 26:
      case 5:
        Un(e, n), t === null && a & 4 && ds(n), a & 512 && wn(n, n.return);
        break;
      case 12:
        Un(e, n);
        break;
      case 31:
        Un(e, n), a & 4 && jh(e, n);
        break;
      case 13:
        Un(e, n), a & 4 && Hh(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = ey.bind(
          null,
          n
        ), jy(e, n))));
        break;
      case 22:
        if (a = n.memoizedState !== null || mt, !a) {
          var i = t !== null && t.memoizedState !== null || Be;
          t = mt, l = Be, mt = a, (Be = i) && !l ? (a = 2, (n.subtreeFlags & 8772) !== 0 && (a |= 1), yn(
            e,
            n,
            a
          )) : Un(e, n), mt = t, Be = l;
        }
        break;
      case 30:
        Un(e, n), a & 512 && wn(n, n.return);
        break;
      case 7:
        a & 512 && wn(n, n.return);
      default:
        Un(e, n);
    }
  }
  function As(e, t) {
    for (e = e.child; e !== null; )
      Dh(e, t), e = e.sibling;
  }
  function Dh(e, t) {
    switch (e.tag) {
      case 5:
      case 26:
        try {
          var n = e.stateNode;
          if (t) {
            var a = n.style;
            typeof a.setProperty == "function" ? a.setProperty("display", "none", "important") : a.display = "none";
          } else {
            var l = e.stateNode, i = e.memoizedProps.style, s = i != null && i.hasOwnProperty("display") ? i.display : null;
            l.style.display = s == null || typeof s == "boolean" ? "" : ("" + s).trim();
          }
        } catch (g) {
          Ye(e, e.return, g);
        }
        _s(e, t);
        break;
      case 6:
        try {
          e.stateNode.nodeValue = t ? "" : e.memoizedProps, qe = !0;
        } catch (g) {
          Ye(e, e.return, g);
        }
        break;
      case 18:
        try {
          var f = e.stateNode;
          t ? _m(f, !0) : _m(e.stateNode, !1);
        } catch (g) {
          Ye(e, e.return, g);
        }
        break;
      case 22:
      case 23:
        e.memoizedState === null && As(e, t);
        break;
      default:
        As(e, t);
    }
  }
  function _s(e, t) {
    if (e.subtreeFlags & 67108864)
      for (e = e.child; e !== null; ) {
        e: {
          var n = e, a = t;
          switch (n.tag) {
            case 4:
              Dh(n, a);
              break e;
            case 22:
              n.memoizedState === null && _s(n, a);
              break e;
            default:
              _s(n, a);
          }
        }
        e = e.sibling;
      }
  }
  function zh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, zh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && du(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var We = null, Lt = !1;
  function pn(e, t, n) {
    for (n = n.child; n !== null; )
      Mh(e, t, n), n = n.sibling;
  }
  function Mh(e, t, n) {
    if (Yt && typeof Yt.onCommitFiberUnmount == "function")
      try {
        Yt.onCommitFiberUnmount($l, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Be || At(n, t), pn(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !Be && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Be || At(n, t), Oi(n);
        var a = We, l = Lt;
        Ea(n.type) && (We = n.stateNode, Lt = !1), pn(
          e,
          t,
          n
        ), Lm(
          n.stateNode,
          n.type,
          n.memoizedProps
        ), We = a, Lt = l;
        break;
      case 5:
        Be || At(n, t), Oi(n);
      case 6:
        if (n.tag === 6 && Oi(n), a = We, l = Lt, We = null, pn(
          e,
          t,
          n
        ), We = a, Lt = l, We !== null)
          if (Lt)
            try {
              (We.nodeType === 9 ? We.body : We.nodeName === "HTML" ? We.ownerDocument.body : We).removeChild(n.stateNode), qe = !0;
            } catch (i) {
              Ye(
                n,
                t,
                i
              );
            }
          else
            try {
              We.removeChild(n.stateNode), qe = !0;
            } catch (i) {
              Ye(
                n,
                t,
                i
              );
            }
        break;
      case 18:
        We !== null && (Lt ? (e = We, Am(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), Yl(e)) : Am(We, n.stateNode));
        break;
      case 4:
        a = We, l = Lt, We = n.stateNode.containerInfo, Lt = !0, pn(
          e,
          t,
          n
        ), We = a, Lt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        da(2, n, t), Be || da(4, n, t), pn(
          e,
          t,
          n
        );
        break;
      case 1:
        Be || (At(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && bh(
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
        Be = (a = Be) || n.memoizedState !== null, pn(
          e,
          t,
          n
        ), Be = a;
        break;
      case 30:
        At(n, t), pn(
          e,
          t,
          n
        );
        break;
      case 7:
        Be || At(n, t), pn(
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
  function jh(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        Yl(e);
      } catch (n) {
        Ye(t, t.return, n);
      }
    }
  }
  function Hh(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Yl(e);
      } catch (n) {
        Ye(t, t.return, n);
      }
  }
  function Yv(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new xh()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new xh()), t;
      default:
        throw Error(c(435, e.tag));
    }
  }
  function cr(e, t) {
    var n = Yv(e);
    t.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var l = ty.bind(null, e, a);
        a.then(l, l);
      }
    });
  }
  function Dt(e, t, n) {
    var a = t.deletions;
    if (a !== null)
      for (var l = 0; l < a.length; l++) {
        var i = a[l], s = e, f = t, g = f;
        e: for (; g !== null; ) {
          switch (g.tag) {
            case 27:
              if (Ea(g.type)) {
                We = g.stateNode, Lt = !1;
                break e;
              }
              break;
            case 5:
              We = g.stateNode, Lt = !1;
              break e;
            case 3:
            case 4:
              We = g.stateNode.containerInfo, Lt = !0;
              break e;
          }
          g = g.return;
        }
        if (We === null) throw Error(c(160));
        Mh(s, f, i), We = null, Lt = !1, s = i.alternate, s !== null && (s.return = null), i.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        qh(t, e, n), t = t.sibling;
  }
  var vn = null;
  function qh(e, t, n) {
    var a = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        if (l & 4 && (a = e.updateQueue, a = a !== null ? a.events : null, a !== null))
          for (var i = 0; i < a.length; i++) {
            var s = a[i];
            s.ref.impl = s.nextImpl;
          }
        Dt(t, e, n), zt(e), l & 4 && (da(3, e, e.return), wi(3, e), da(5, e, e.return));
        break;
      case 1:
        Dt(t, e, n), zt(e), l & 512 && (Be || a === null || At(a, a.return)), l & 64 && mt && (e = e.updateQueue, e !== null && (t = e.callbacks, t !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? t : n.concat(t))));
        break;
      case 26:
        if (i = vn, Dt(t, e, n), zt(e), l & 512 && (Be || a === null || At(a, a.return)), l & 4)
          if (l = a !== null ? a.memoizedState : null, n = e.memoizedState, a === null)
            if (n === null)
              if (e.stateNode === null)
                if (mt)
                  e.stateNode = bm(
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
                        a = l.getElementsByTagName("title")[0], (!a || a[ei] || a[Et] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = l.createElement(t), l.head.insertBefore(
                          a,
                          l.querySelector("head > title")
                        )), _t(a, t, n), a[Et] = e, dt(a), t = a;
                        break e;
                      case "link":
                        if (i = Xm(
                          "link",
                          "href",
                          l
                        ).get(t + (n.href || ""))) {
                          for (s = 0; s < i.length; s++)
                            if (a = i[s], a.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && a.getAttribute("rel") === (n.rel == null ? null : n.rel) && a.getAttribute("title") === (n.title == null ? null : n.title) && a.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                              i.splice(s, 1);
                              break t;
                            }
                        }
                        a = l.createElement(t), _t(a, t, n), l.head.appendChild(a);
                        break;
                      case "meta":
                        if (i = Xm(
                          "meta",
                          "content",
                          l
                        ).get(t + (n.content || ""))) {
                          for (s = 0; s < i.length; s++)
                            if (a = i[s], a.getAttribute("content") === (n.content == null ? null : "" + n.content) && a.getAttribute("name") === (n.name == null ? null : n.name) && a.getAttribute("property") === (n.property == null ? null : n.property) && a.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && a.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                              i.splice(s, 1);
                              break t;
                            }
                        }
                        a = l.createElement(t), _t(a, t, n), l.head.appendChild(a);
                        break;
                      default:
                        throw Error(c(468, t));
                    }
                    a[Et] = e, dt(a), t = a;
                  }
                  e.stateNode = t;
                }
              else
                mt || co(i, e.type, e.stateNode);
            else
              e.stateNode = Ym(
                i,
                n,
                e.memoizedProps
              );
          else
            l !== n ? (l === null ? (t = a.stateNode, t === null || Be || t.parentNode.removeChild(t)) : l.count--, n === null ? mt || co(i, e.type, e.stateNode) : Ym(i, n, e.memoizedProps)) : n === null && e.stateNode !== null && hs(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        break;
      case 27:
        Dt(t, e, n), zt(e), l & 512 && (Be || a === null || At(a, a.return)), a !== null && l & 4 && hs(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (i = Rn, Rn = !1, Dt(t, e, n), Rn = i, zt(e), l & 512 && (Be || a === null || At(a, a.return)), e.flags & 32) {
          t = e.stateNode;
          try {
            ul(t, ""), qe = !0;
          } catch (D) {
            Ye(e, e.return, D);
          }
        }
        l & 4 && e.stateNode != null && (t = e.memoizedProps, hs(
          e,
          t,
          a !== null ? a.memoizedProps : t
        )), l & 1024 && (Ss = !0);
        break;
      case 6:
        if (Dt(t, e, n), zt(e), l & 4) {
          if (e.stateNode === null)
            throw Error(c(162));
          t = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = t, qe = !0;
          } catch (D) {
            Ye(e, e.return, D);
          }
        }
        break;
      case 3:
        if (qe = !1, Ar = null, i = vn, vn = qi(t.containerInfo), Dt(t, e, n), vn = i, zt(e), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Yl(t.containerInfo);
          } catch (D) {
            Ye(e, e.return, D);
          }
        Ss && (Ss = !1, Lh(e)), qe = !1;
        break;
      case 4:
        l = Rn, Rn = mt, a = af(), i = vn, vn = qi(
          e.stateNode.containerInfo
        ), Dt(t, e, n), zt(e), vn = i, qe && Ci && (ur = !0), qe = a, Rn = l;
        break;
      case 12:
        Dt(t, e, n), zt(e);
        break;
      case 31:
        Dt(t, e, n), zt(e), l & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, cr(e, t)));
        break;
      case 13:
        Dt(t, e, n), zt(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (fr = Gt()), l & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, cr(e, t)));
        break;
      case 22:
        i = e.memoizedState !== null, s = a !== null && a.memoizedState !== null;
        var f = mt, g = Be, w = Rn;
        mt = f || i, Rn = w || i, Be = g || s, Dt(t, e, n), Be = g, Rn = w, mt = f, zt(e), l & 8192 && (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, !i || a === null || s || mt || Be || (t = s || Be, n = mt, a = Be, mt = i || mt, Be = t, ha(e, 2), mt = n, Be = a), !i && Rn || As(e, i)), l & 4 && (t = e.updateQueue, t !== null && (n = t.retryQueue, n !== null && (t.retryQueue = null, cr(e, n))));
        break;
      case 19:
        Dt(t, e, n), zt(e), l & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, cr(e, t)));
        break;
      case 30:
        l & 512 && (Be || a === null || At(a, a.return)), l = af(), i = Ci, s = (n & 335544064) === n, f = e.memoizedProps, Ci = s && In(
          f.default,
          f.update
        ) !== "none", Dt(t, e, n), zt(e), s && a !== null && qe && (e.flags |= 4), Ci = i, qe = l;
        break;
      case 21:
        break;
      case 7:
        l & 512 && (Be || a === null || At(a, a.return)), a && a.stateNode !== null && (a.stateNode._fragmentFiber = e);
      default:
        Dt(t, e, n), zt(e);
    }
  }
  function zt(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, a = e.return; a !== null; ) {
          if (Th(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var l = e.return; l !== null; ) {
          if (fs(l)) {
            var i = l.stateNode;
            a === null ? a = [i] : a.push(i);
          }
          if (os(l)) break;
          l = l.return;
        }
        var s = a;
        if (n == null) throw Error(c(160));
        switch (n.tag) {
          case 27:
            var f = n.stateNode, g = ms(e);
            nr(
              e,
              g,
              f,
              s
            );
            break;
          case 5:
            var w = n.stateNode;
            n.flags & 32 && (ul(w, ""), n.flags &= -33);
            var D = ms(e);
            nr(
              e,
              D,
              w,
              s
            );
            break;
          case 3:
          case 4:
            var I = n.stateNode.containerInfo, A = ms(e);
            gs(
              e,
              A,
              I,
              s
            );
            break;
          default:
            throw Error(c(161));
        }
      } catch (U) {
        Ye(e, e.return, U);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Lh(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Lh(t), t.tag === 5 && t.flags & 1024 && (t = t.stateNode, Gl = !0, t.reset(), Gl = !1), e = e.sibling;
      }
  }
  function Nl(e, t) {
    if (t.subtreeFlags & 9270)
      for (t = t.child; t !== null; )
        Ih(t, e), t = t.sibling;
    else Rh(t);
  }
  function Ih(e, t) {
    var n = e.alternate;
    if (n === null) ps(e, !1);
    else
      switch (e.tag) {
        case 3:
          if (Ts = xn = !1, Nh(), Nl(t, e), !xn && !ur) {
            if (e = On, e !== null)
              for (var a = 0; a < e.length; a += 3) {
                n = e[a];
                var l = e[a + 1];
                wm(n, e[a + 2]), n = n.ownerDocument.documentElement, n !== null && n.animate(
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
            )), Ts = !0;
          }
          On = null;
          break;
        case 5:
          Nl(t, e);
          break;
        case 4:
          a = xn, xn = !1, Nl(t, e), xn && (ur = !0), xn = a;
          break;
        case 22:
          e.memoizedState === null && (n.memoizedState !== null ? ps(e, !1) : Nl(t, e));
          break;
        case 30:
          a = xn, l = Nh(), xn = !1, Nl(t, e), xn && (e.flags |= 4);
          var i = e.memoizedProps, s = e.stateNode;
          t = Ln(i, s), s = Ln(n.memoizedProps, s);
          var f = In(i.default, i.update);
          f === "none" ? t = !1 : (i = n.memoizedState, n.memoizedState = null, n = e.child, qt = 0, t = bs(
            e,
            n,
            t,
            s,
            f,
            i,
            !0
          ), qt !== (i === null ? 0 : i.length) && (e.flags |= 32)), (e.flags & 4) !== 0 && t ? (Dl(
            e,
            e.memoizedProps.onUpdate
          ), On = l) : l !== null && (l.push.apply(l, On), On = l), xn = (e.flags & 32) !== 0 ? !0 : a;
          break;
        default:
          Nl(t, e);
      }
  }
  function Un(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Uh(e, t.alternate, t), t = t.sibling;
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
          At(n, n.return);
          var l = n.stateNode;
          typeof l.componentWillUnmount == "function" && bh(
            n,
            n.return,
            l
          ), ha(
            n,
            a
          );
          break;
        case 27:
          (a & 2) !== 0 && Lm(
            n.stateNode,
            n.type,
            n.memoizedProps
          );
        case 5:
          At(n, n.return), n.tag !== 5 && n.tag !== 27 || Oi(n), ha(
            n,
            a
          );
          break;
        case 6:
          Oi(n);
          break;
        case 26:
          At(n, n.return), l = n.stateNode, n.memoizedState !== null || l === null || Be || l.parentNode.removeChild(l), ha(
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
          At(n, n.return), ha(
            n,
            a
          );
          break;
        case 7:
          At(n, n.return);
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
      var a = t.alternate, l = e, i = t, s = i.flags, f = (n & 1) !== 0;
      switch (i.tag) {
        case 0:
        case 11:
        case 15:
          yn(
            l,
            i,
            n
          ), wi(4, i);
          break;
        case 1:
          if (yn(
            l,
            i,
            n
          ), a = i, l = a.stateNode, typeof l.componentDidMount == "function")
            try {
              l.componentDidMount();
            } catch (D) {
              Ye(a, a.return, D);
            }
          if (a = i, l = a.updateQueue, l !== null) {
            var g = a.stateNode;
            try {
              var w = l.shared.hiddenCallbacks;
              if (w !== null)
                for (l.shared.hiddenCallbacks = null, l = 0; l < w.length; l++)
                  rd(w[l], g);
            } catch (D) {
              Ye(a, a.return, D);
            }
          }
          f && s & 64 && Eh(i), wn(i, i.return);
          break;
        case 27:
          (n & 2) !== 0 && Ah(i);
        case 5:
          i.tag !== 5 && i.tag !== 27 || Sh(i), yn(
            l,
            i,
            n
          ), f && a === null && s & 4 && ds(i), wn(i, i.return);
          break;
        case 6:
          Sh(i);
          break;
        case 26:
          g = i.stateNode, i.memoizedState !== null || g === null || mt || co(
            qi(g.ownerDocument),
            i.type,
            g
          ), yn(
            l,
            i,
            n
          ), f && a === null && s & 4 && ds(i), wn(i, i.return);
          break;
        case 12:
          yn(
            l,
            i,
            n
          );
          break;
        case 31:
          yn(
            l,
            i,
            n
          ), f && s & 4 && jh(l, i);
          break;
        case 13:
          yn(
            l,
            i,
            n
          ), f && s & 4 && Hh(l, i);
          break;
        case 22:
          i.memoizedState === null && yn(
            l,
            i,
            n
          ), wn(i, i.return);
          break;
        case 30:
          yn(
            l,
            i,
            n
          ), wn(i, i.return);
          break;
        case 7:
          wn(i, i.return);
        default:
          yn(
            l,
            i,
            n
          );
      }
      t = t.sibling;
    }
  }
  function Ns(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && hi(n));
  }
  function ws(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && hi(e));
  }
  function cn(e, t, n, a) {
    var l = (n & 335544064) === n;
    if (t.subtreeFlags & (l ? 10262 : 10256))
      for (t = t.child; t !== null; )
        Bh(
          e,
          t,
          n,
          a
        ), t = t.sibling;
    else l && Ch(t);
  }
  function Bh(e, t, n, a) {
    var l = (n & 335544064) === n;
    l && t.alternate === null && t.return !== null && t.return.alternate !== null && ir(t);
    var i = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        cn(
          e,
          t,
          n,
          a
        ), i & 2048 && wi(9, t);
        break;
      case 1:
        cn(
          e,
          t,
          n,
          a
        );
        break;
      case 3:
        cn(
          e,
          t,
          n,
          a
        ), l && Ts && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), i & 2048 && (i = null, t.alternate !== null && (i = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== i && (t.refCount++, i != null && hi(i)));
        break;
      case 12:
        if (i & 2048) {
          cn(
            e,
            t,
            n,
            a
          ), i = t.stateNode;
          try {
            var s = t.memoizedProps, f = s.id, g = s.onPostCommit;
            typeof g == "function" && g(
              f,
              t.alternate === null ? "mount" : "update",
              i.passiveEffectDuration,
              -0
            );
          } catch (w) {
            Ye(t, t.return, w);
          }
        } else
          cn(
            e,
            t,
            n,
            a
          );
        break;
      case 31:
        cn(
          e,
          t,
          n,
          a
        );
        break;
      case 13:
        cn(
          e,
          t,
          n,
          a
        );
        break;
      case 23:
        break;
      case 22:
        s = t.stateNode, f = t.alternate, t.memoizedState !== null ? (l && f !== null && f.memoizedState === null && ir(f), s._visibility & 2 ? cn(
          e,
          t,
          n,
          a
        ) : Ri(
          e,
          t
        )) : (l && f !== null && f.memoizedState !== null && ir(t), s._visibility & 2 ? cn(
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
        ))), i & 2048 && Ns(f, t);
        break;
      case 24:
        cn(
          e,
          t,
          n,
          a
        ), i & 2048 && ws(t.alternate, t);
        break;
      case 30:
        l && (i = t.alternate, i !== null && (Cn(i.child, !0), Cn(t.child, !0))), cn(
          e,
          t,
          n,
          a
        );
        break;
      default:
        cn(
          e,
          t,
          n,
          a
        );
    }
  }
  function wl(e, t, n, a, l) {
    for (l = l && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var i = e, s = t, f = n, g = a, w = s.flags;
      switch (s.tag) {
        case 0:
        case 11:
        case 15:
          wl(
            i,
            s,
            f,
            g,
            l
          ), wi(8, s);
          break;
        case 23:
          break;
        case 22:
          var D = s.stateNode;
          s.memoizedState !== null ? D._visibility & 2 ? wl(
            i,
            s,
            f,
            g,
            l
          ) : Ri(
            i,
            s
          ) : (D._visibility |= 2, wl(
            i,
            s,
            f,
            g,
            l
          )), l && w & 2048 && Ns(
            s.alternate,
            s
          );
          break;
        case 24:
          wl(
            i,
            s,
            f,
            g,
            l
          ), l && w & 2048 && ws(s.alternate, s);
          break;
        default:
          wl(
            i,
            s,
            f,
            g,
            l
          );
      }
      t = t.sibling;
    }
  }
  function Ri(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, a = t, l = a.flags;
        switch (a.tag) {
          case 22:
            Ri(n, a), l & 2048 && Ns(
              a.alternate,
              a
            );
            break;
          case 24:
            Ri(n, a), l & 2048 && ws(a.alternate, a);
            break;
          default:
            Ri(n, a);
        }
        t = t.sibling;
      }
  }
  var Fa = 8192;
  function $a(e, t, n) {
    if (e.subtreeFlags & Fa)
      for (e = e.child; e !== null; )
        Vh(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function Vh(e, t, n) {
    switch (e.tag) {
      case 26:
        $a(
          e,
          t,
          n
        ), e.flags & Fa && (e.memoizedState !== null ? Jy(
          n,
          vn,
          e.memoizedState,
          e.memoizedProps
        ) : (e = e.stateNode, (t & 335544128) === t && km(n, e)));
        break;
      case 5:
        $a(
          e,
          t,
          n
        ), e.flags & Fa && (e = e.stateNode, (t & 335544128) === t && km(n, e));
        break;
      case 3:
      case 4:
        var a = vn;
        vn = qi(e.stateNode.containerInfo), $a(
          e,
          t,
          n
        ), vn = a;
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
          l.paired = null, kt === null && (kt = /* @__PURE__ */ new Map()), kt.set(a, l);
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
  function Gh(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function xi(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          gt = a, Xh(
            a,
            e
          );
        }
      Gh(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Yh(e), e = e.sibling;
  }
  function Yh(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        xi(e), e.flags & 2048 && da(9, e, e.return);
        break;
      case 3:
        xi(e);
        break;
      case 12:
        xi(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, sr(e)) : xi(e);
        break;
      default:
        xi(e);
    }
  }
  function sr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          gt = a, Xh(
            a,
            e
          );
        }
      Gh(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          da(8, t, t.return), sr(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, sr(t));
          break;
        default:
          sr(t);
      }
      e = e.sibling;
    }
  }
  function Xh(e, t) {
    for (; gt !== null; ) {
      var n = gt;
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
          hi(n.memoizedState.cache);
      }
      if (a = n.child, a !== null) a.return = n, gt = a;
      else
        e: for (n = e; gt !== null; ) {
          a = gt;
          var l = a.sibling, i = a.return;
          if (zh(a), a === n) {
            gt = null;
            break e;
          }
          if (l !== null) {
            l.return = i, gt = l;
            break e;
          }
          gt = i;
        }
    }
  }
  var Xv = {
    getCacheForType: function(e) {
      var t = bt(lt), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return bt(lt).controller.signal;
    }
  }, Qv = typeof WeakMap == "function" ? WeakMap : Map, Ie = 0, Ze = null, Ce = null, Ue = 0, Ge = 0, Jt = null, ma = !1, Ol = !1, Os = !1, kn = 0, nt = 0, ga = 0, Pa = 0, or = 0, Ft = 0, Cl = 0, Ui = null, It = null, Cs = !1, fr = 0, Qh = 0, dr = 1 / 0, hr = null, pa = null, et = 0, En = null, Wa = null, Dn = 0, Rs = 0, xs = null, Kh = null, Rl = null, xl = null, Ul = null, Di = 0, mr = null;
  function $t() {
    return (Ie & 2) !== 0 && Ue !== 0 ? Ue & -Ue : te.T !== null ? Bs() : ko();
  }
  function Zh() {
    if (Ft === 0)
      if ((Ue & 536870912) === 0 || Oe) {
        var e = cu;
        cu <<= 1, (cu & 3932160) === 0 && (cu = 262144), Ft = e;
      } else Ft = 536870912;
    return e = St.current, e !== null && (e.flags |= 32), Ft;
  }
  function Dl(e, t) {
    if (t != null) {
      var n = e.stateNode, a = n.ref;
      a === null && (a = n.ref = Om(
        Ln(e.memoizedProps, n)
      )), xl === null && (xl = []), xl.push(t.bind(null, a));
    }
  }
  function Bt(e, t, n) {
    (e === Ze && (Ge === 2 || Ge === 9) || e.cancelPendingCommit !== null) && (zl(e, 0), va(
      e,
      Ue,
      Ft,
      !1
    )), Wl(e, n), ((Ie & 2) === 0 || e !== Ze) && (e === Ze && ((Ie & 2) === 0 && (Pa |= n), nt === 4 && va(
      e,
      Ue,
      Ft,
      !1
    )), zn(e));
  }
  function kh(e, t, n) {
    if ((Ie & 6) !== 0) throw Error(c(327));
    var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Pl(e, t), l = a ? kv(e, t) : Ds(e, t, !0), i = a;
    do {
      if (l === 0) {
        Ol && !a && va(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, i && !Kv(n)) {
          l = Ds(e, t, !1), i = !1;
          continue;
        }
        if (l === 2) {
          if (i = t, e.errorRecoveryDisabledLanes & i)
            var s = 0;
          else
            s = e.pendingLanes & -536870913, s = s !== 0 ? s : s & 536870912 ? 536870912 : 0;
          if (s !== 0) {
            t = s;
            e: {
              var f = e;
              l = Ui;
              var g = f.current.memoizedState.isDehydrated;
              if (g && (zl(f, s).flags |= 256), s = Ds(
                f,
                s,
                !1
              ), s !== 2 && s !== 6) {
                if (Os && !g) {
                  f.errorRecoveryDisabledLanes |= i, Pa |= i, l = 4;
                  break e;
                }
                i = It, It = l, i !== null && (It === null ? It = i : It.push.apply(
                  It,
                  i
                ));
              }
              l = s;
            }
            if (i = !1, l !== 2) continue;
          }
        }
        if (l === 1) {
          zl(e, 0), va(e, t, 0, !0);
          break;
        }
        e: {
          switch (a = e, i = l, i) {
            case 0:
            case 1:
              throw Error(c(345));
            case 4:
              if ((t & 4194048) !== t && (t & 62914560) !== t)
                break;
            case 6:
              va(
                a,
                t,
                Ft,
                !ma
              );
              break e;
            case 2:
              It = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((t & 62914560) === t && (l = fr + 300 - Gt(), 10 < l)) {
            if (va(
              a,
              t,
              Ft,
              !ma
            ), ou(a, 0, !0) !== 0) break e;
            Dn = t, a.timeoutHandle = $s(
              Jh.bind(
                null,
                a,
                n,
                It,
                hr,
                Cs,
                t,
                Ft,
                Pa,
                Cl,
                ma,
                i,
                "Throttled",
                -0,
                0
              ),
              l
            );
            break e;
          }
          Jh(
            a,
            n,
            It,
            hr,
            Cs,
            t,
            Ft,
            Pa,
            Cl,
            ma,
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
  function Jh(e, t, n, a, l, i, s, f, g, w, D, I, A, U) {
    e.timeoutHandle = -1;
    var F = t.subtreeFlags, le = (i & 335544064) === i;
    if (I = null, (le || F & 8192 || (F & 16785408) === 16785408) && (I = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: An
    }, kt = null, Vh(
      t,
      i,
      I
    ), le && (F = I, le = e.containerInfo, le = (le.nodeType === 9 ? le : le.ownerDocument).__reactViewTransition, le != null && (F.count++, F.waitingForViewTransition = !0, F = Bi.bind(F), le.finished.then(F, F))), F = (i & 62914560) === i ? fr - Gt() : (i & 4194048) === i ? Qh - Gt() : 0, F = Fy(
      I,
      F
    ), F !== null)) {
      Dn = i, e.cancelPendingCommit = F(
        am.bind(
          null,
          e,
          t,
          i,
          n,
          a,
          l,
          s,
          f,
          g,
          w,
          D,
          I,
          null,
          A,
          U
        )
      ), va(e, i, s, !w);
      return;
    }
    am(
      e,
      t,
      i,
      n,
      a,
      l,
      s,
      f,
      g,
      w,
      D,
      I
    );
  }
  function Kv(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var a = 0; a < n.length; a++) {
          var l = n[a], i = l.getSnapshot;
          l = l.value;
          try {
            if (!Kt(i(), l)) return !1;
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
  function va(e, t, n, a) {
    t = Yo(e, t), t &= ~or, t &= ~Pa, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var l = t; 0 < l; ) {
      var i = 31 - Xt(l), s = 1 << i;
      a[i] = -1, l &= ~s;
    }
    n !== 0 && Qo(e, n, t);
  }
  function gr() {
    return (Ie & 6) === 0 ? (zi(0), !1) : !0;
  }
  function Us() {
    if (Ce !== null) {
      if (Ge === 0)
        var e = Ce.return;
      else
        e = Ce, Gn = Ba = null, Ic(e), El = null, pi = 0, e = Ce;
      for (; e !== null; )
        yh(e.alternate, e), e = e.return;
      Ce = null;
    }
  }
  function zl(e, t) {
    var n = e.timeoutHandle;
    return n !== -1 && (e.timeoutHandle = -1, py(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Dn = 0, Us(), Ze = e, Ce = n = Bn(e.current, null), Ue = t, Ge = 0, Jt = null, ma = !1, Ol = Pl(e, t), Os = !1, Cl = Ft = or = Pa = ga = nt = 0, It = Ui = null, Cs = !1, kn = Yo(e, t), Au(), n;
  }
  function Fh(e, t) {
    _e = null, te.H = ku, t === yl || t === Mu ? (t = ad(), Ge = 3) : t === wc ? (t = ad(), Ge = 4) : Ge = t === es ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Jt = t, Ce === null && (nt = 1, Ju(
      e,
      an(t, e.current)
    ));
  }
  function $h() {
    var e = St.current;
    return e === null ? !0 : (Ue & 4194048) === Ue ? Ot === null : (Ue & 62914560) === Ue || (Ue & 536870912) !== 0 ? e === Ot : !1;
  }
  function Ph() {
    var e = te.H;
    return te.H = ku, e === null ? ku : e;
  }
  function Wh() {
    var e = te.A;
    return te.A = Xv, e;
  }
  function pr() {
    nt = 4, ma || (Ue & 4194048) !== Ue && St.current !== null || (Ol = !0), (ga & 134217727) === 0 && (Pa & 134217727) === 0 || Ze === null || va(
      Ze,
      Ue,
      Ft,
      !1
    );
  }
  function Ds(e, t, n) {
    var a = Ie;
    Ie |= 2;
    var l = Ph(), i = Wh();
    (Ze !== e || Ue !== t) && (hr = null, zl(e, t)), t = !1;
    var s = nt;
    e: do
      try {
        if (Ge !== 0 && Ce !== null) {
          var f = Ce, g = Jt;
          switch (Ge) {
            case 8:
              Us(), s = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              St.current === null && (t = !0);
              var w = Ge;
              if (Ge = 0, Jt = null, Ml(e, f, g, w), n && Ol) {
                s = 0;
                break e;
              }
              break;
            default:
              w = Ge, Ge = 0, Jt = null, Ml(e, f, g, w);
          }
        }
        Zv(), s = nt;
        break;
      } catch (D) {
        Fh(e, D);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Gn = Ba = null, Ie = a, te.H = l, te.A = i, Ce === null && (Ze = null, Ue = 0, Au()), s;
  }
  function Zv() {
    for (; Ce !== null; ) em(Ce);
  }
  function kv(e, t) {
    var n = Ie;
    Ie |= 2;
    var a = Ph(), l = Wh();
    Ze !== e || Ue !== t ? (hr = null, dr = Gt() + 500, zl(e, t)) : Ol = Pl(
      e,
      t
    );
    e: do
      try {
        if (Ge !== 0 && Ce !== null) {
          t = Ce;
          var i = Jt;
          t: switch (Ge) {
            case 1:
              Ge = 0, Jt = null, Ml(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (td(i)) {
                Ge = 0, Jt = null, tm(t);
                break;
              }
              t = function() {
                Ge !== 2 && Ge !== 9 || Ze !== e || (Ge = 7), zn(e);
              }, i.then(t, t);
              break e;
            case 3:
              Ge = 7;
              break e;
            case 4:
              Ge = 5;
              break e;
            case 7:
              td(i) ? (Ge = 0, Jt = null, tm(t)) : (Ge = 0, Jt = null, Ml(e, t, i, 7));
              break;
            case 5:
              var s = null;
              switch (Ce.tag) {
                case 26:
                  s = Ce.memoizedState;
                case 5:
                case 27:
                  var f = Ce;
                  if (s ? Km(s) : f.stateNode.complete) {
                    Ge = 0, Jt = null;
                    var g = f.sibling;
                    if (g !== null) Ce = g;
                    else {
                      var w = f.return;
                      w !== null ? (Ce = w, vr(w)) : Ce = null;
                    }
                    break t;
                  }
              }
              Ge = 0, Jt = null, Ml(e, t, i, 5);
              break;
            case 6:
              Ge = 0, Jt = null, Ml(e, t, i, 6);
              break;
            case 8:
              Us(), nt = 6;
              break e;
            default:
              throw Error(c(462));
          }
        }
        Jv();
        break;
      } catch (D) {
        Fh(e, D);
      }
    while (!0);
    return Gn = Ba = null, te.H = a, te.A = l, Ie = n, Ce !== null ? 0 : (Ze = null, Ue = 0, Au(), nt);
  }
  function Jv() {
    for (; Ce !== null && !dp(); )
      em(Ce);
  }
  function em(e) {
    var t = ph(e.alternate, e, kn);
    e.memoizedProps = e.pendingProps, t === null ? vr(e) : Ce = t;
  }
  function tm(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = sh(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Ue
        );
        break;
      case 11:
        t = sh(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Ue
        );
        break;
      case 5:
        Ic(t);
        var a = t;
        a === ht && (Oe ? (Ru(a), a.tag === 5 && a.stateNode != null && (Je = a.stateNode)) : (Ru(a), Oe = !0));
      default:
        yh(n, t), t = Ce = Xf(t, kn), t = ph(n, t, kn);
    }
    e.memoizedProps = e.pendingProps, t === null ? vr(e) : Ce = t;
  }
  function Ml(e, t, n, a) {
    Gn = Ba = null, Ic(t), El = null, pi = 0;
    var l = t.return;
    try {
      if (Hv(
        e,
        l,
        t,
        n,
        Ue
      )) {
        nt = 1, Ju(
          e,
          an(n, e.current)
        ), Ce = null;
        return;
      }
    } catch (i) {
      if (l !== null) throw Ce = l, i;
      nt = 1, Ju(
        e,
        an(n, e.current)
      ), Ce = null;
      return;
    }
    t.flags & 32768 ? (Oe || a === 1 ? e = !0 : Ol || (Ue & 536870912) !== 0 ? e = !1 : (ma = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = St.current, a !== null && a.tag === 13 && (a.flags |= 16384))), nm(t, e)) : vr(t);
  }
  function vr(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        nm(
          t,
          ma
        );
        return;
      }
      e = t.return;
      var n = Bv(
        t.alternate,
        t,
        kn
      );
      if (n !== null) {
        Ce = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        Ce = t;
        return;
      }
      Ce = t = e;
    } while (t !== null);
    nt === 0 && (nt = 5);
  }
  function nm(e, t) {
    do {
      var n = Vv(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, Ce = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        Ce = e;
        return;
      }
      Ce = e = n;
    } while (e !== null);
    nt = 6, Ce = null;
  }
  function am(e, t, n, a, l, i, s, f, g, w, D, I) {
    e.cancelPendingCommit = null;
    do
      yr();
    while (et !== 0);
    if ((Ie & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      e === Ze && (Ce = Ze = null, Ue = 0), Wa = t, En = e, Dn = n, xs = l, Kh = a, Fv(
        e,
        t,
        n,
        s,
        f,
        g,
        I
      );
    }
  }
  function Fv(e, t, n, a, l, i, s) {
    var f = t.lanes | t.childLanes;
    if (Rs = f, f |= hc, Tp(
      e,
      n,
      f,
      a,
      l,
      i
    ), xl = null, (n & 335544064) === n ? (Ul = _v(e), a = 10262) : (Ul = null, a = 10256), (t.subtreeFlags & a) !== 0 || (t.flags & a) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, ny(uu, function() {
      return Hs(), null;
    })) : (e.callbackNode = null, e.callbackPriority = 0), ar = !1, a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
      a = te.T, te.T = null, l = pe.p, pe.p = 2, i = Ie, Ie |= 4;
      try {
        Gv(e, t, n);
      } finally {
        Ie = i, pe.p = l, te.T = a;
      }
    }
    et = 1, ar ? Rl = Ty(
      s,
      e.containerInfo,
      Ul,
      zs,
      Ms,
      Pv,
      js,
      Hs,
      $v
    ) : (zs(), Ms(), js());
  }
  function $v(e) {
    if (et !== 0) {
      var t = En.onRecoverableError;
      t(e, { componentStack: null });
    }
  }
  function Pv() {
    et === 3 && (et = 0, Ih(Wa, En), et = 4);
  }
  function zs() {
    if (et === 1) {
      et = 0;
      var e = En, t = Wa, n = Dn, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = te.T, te.T = null;
        var l = pe.p;
        pe.p = 2;
        var i = Ie;
        Ie |= 4;
        try {
          Ci = ur = !1, qh(t, e, n), n = ks;
          var s = Mf(e.containerInfo), f = n.focusedElem, g = n.selectionRange;
          if (s !== f && f && f.ownerDocument && zf(
            f.ownerDocument.documentElement,
            f
          )) {
            if (g !== null && cc(f)) {
              var w = g.start, D = g.end;
              if (D === void 0 && (D = w), "selectionStart" in f)
                f.selectionStart = w, f.selectionEnd = Math.min(
                  D,
                  f.value.length
                );
              else {
                var I = f.ownerDocument || document, A = I && I.defaultView || window;
                if (A.getSelection) {
                  var U = A.getSelection(), F = f.textContent.length, le = Math.min(g.start, F), Ne = g.end === void 0 ? le : Math.min(g.end, F);
                  !U.extend && le > Ne && (s = Ne, Ne = le, le = s);
                  var _ = Df(
                    f,
                    le
                  ), y = Df(
                    f,
                    Ne
                  );
                  if (_ && y && (U.rangeCount !== 1 || U.anchorNode !== _.node || U.anchorOffset !== _.offset || U.focusNode !== y.node || U.focusOffset !== y.offset)) {
                    var x = I.createRange();
                    x.setStart(_.node, _.offset), U.removeAllRanges(), le > Ne ? (U.addRange(x), U.extend(y.node, y.offset)) : (x.setEnd(y.node, y.offset), U.addRange(x));
                  }
                }
              }
            }
            for (I = [], U = f; U = U.parentNode; )
              U.nodeType === 1 && I.push({
                element: U,
                left: U.scrollLeft,
                top: U.scrollTop
              });
            for (typeof f.focus == "function" && f.focus(), f = 0; f < I.length; f++) {
              var q = I[f];
              q.element.scrollLeft = q.left, q.element.scrollTop = q.top;
            }
          }
          Gl = !!Zs, ks = Zs = null;
        } finally {
          Ie = i, pe.p = l, te.T = a;
        }
      }
      e.current = t, et = 2;
    }
  }
  function Ms() {
    if (et === 2) {
      et = 0;
      var e = En, t = Wa, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = te.T, te.T = null;
        var a = pe.p;
        pe.p = 2;
        var l = Ie;
        Ie |= 4;
        try {
          Uh(e, t.alternate, t);
        } finally {
          Ie = l, pe.p = a, te.T = n;
        }
      }
      et = 3;
    }
  }
  function js() {
    if (et === 4 || et === 3) {
      et = 0;
      var e = Rl;
      Rl = null, hp();
      var t = En, n = Wa, a = Dn, l = Kh, i = (a & 335544064) === a ? 10262 : 10256;
      if ((n.subtreeFlags & i) !== 0 || (n.flags & i) !== 0 ? et = 5 : (et = 0, Wa = En = null, lm(t, t.pendingLanes)), i = t.pendingLanes, i === 0 && (pa = null), Xr(a), n = n.stateNode, Yt && typeof Yt.onCommitFiberRoot == "function")
        try {
          Yt.onCommitFiberRoot(
            $l,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        n = te.T, i = pe.p, pe.p = 2, te.T = null;
        try {
          for (var s = t.onRecoverableError, f = 0; f < l.length; f++) {
            var g = l[f];
            s(g.value, {
              componentStack: g.stack
            });
          }
        } finally {
          te.T = n, pe.p = i;
        }
      }
      if (l = xl, s = Ul, Ul = null, l !== null && (xl = null, s === null && (s = []), e !== null))
        for (g = 0; g < l.length; g++)
          n = (0, l[g])(
            s
          ), n !== void 0 && e.finished.finally(n);
      (Dn & 3) !== 0 && yr(), zn(t), i = t.pendingLanes, (a & 261930) !== 0 && (i & 42) !== 0 ? t === mr ? Di++ : (Di = 0, mr = t) : (Di = 0, mr = null), zi(0);
    }
  }
  function lm(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, hi(t)));
  }
  function yr() {
    return Rl !== null && (Rl.skipTransition(), Rl = null), zs(), Ms(), js(), Hs();
  }
  function Hs() {
    if (et !== 5) return !1;
    var e = En, t = Rs;
    Rs = 0;
    var n = Xr(Dn), a = te.T, l = pe.p;
    try {
      pe.p = 32 > n ? 32 : n, te.T = null, n = xs, xs = null;
      var i = En, s = Dn;
      if (et = 0, Wa = En = null, Dn = 0, (Ie & 6) !== 0) throw Error(c(331));
      var f = Ie;
      if (Ie |= 4, Yh(i.current), Bh(
        i,
        i.current,
        s,
        n
      ), Ie = f, zi(0, !1), Yt && typeof Yt.onPostCommitFiberRoot == "function")
        try {
          Yt.onPostCommitFiberRoot($l, i);
        } catch {
        }
      return !0;
    } finally {
      pe.p = l, te.T = a, lm(e, t);
    }
  }
  function im(e, t, n) {
    t = an(n, t), t = Wc(e.stateNode, t, 2), e = ca(e, t, 2), e !== null && (Wl(e, 2), zn(e));
  }
  function Ye(e, t, n) {
    if (e.tag === 3)
      im(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          im(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var a = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (pa === null || !pa.has(a))) {
            e = an(n, e), n = th(2), a = ca(t, n, 2), a !== null && (nh(
              n,
              a,
              t,
              e
            ), Wl(a, 2), zn(a));
            break;
          }
        }
        t = t.return;
      }
  }
  function qs(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Qv();
      var l = /* @__PURE__ */ new Set();
      a.set(t, l);
    } else
      l = a.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), a.set(t, l));
    l.has(n) || (Os = !0, l.add(n), e = Wv.bind(null, e, t, n), t.then(e, e));
  }
  function Wv(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Ze === e && (Ue & n) === n && ((nt === 4 || nt === 3 && (Ue & 62914560) === Ue && 300 > Gt() - fr) && (Ie & 2) === 0 ? zl(e, 0) : or |= n, Cl === Ue && (Cl = 0)), zn(e);
  }
  function um(e, t) {
    t === 0 && (t = Xo()), e = qa(e, t), e !== null && (Wl(e, t), zn(e));
  }
  function ey(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), um(e, n);
  }
  function ty(e, t) {
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
    a !== null && a.delete(t), um(e, n);
  }
  function ny(e, t) {
    return Br(e, t);
  }
  var jl = null, Hl = null, Ls = !1, Er = !1, Is = !1, ya = 0;
  function zn(e) {
    e !== Hl && e.next === null && (Hl === null ? jl = Hl = e : Hl = Hl.next = e), Er = !0, Ls || (Ls = !0, ly());
  }
  function zi(e, t) {
    if (!Is && Er) {
      Is = !0;
      do
        for (var n = !1, a = jl; a !== null; ) {
          if (e !== 0) {
            var l = a.pendingLanes;
            if (l === 0) var i = 0;
            else {
              var s = a.suspendedLanes, f = a.pingedLanes;
              i = (1 << 31 - Xt(42 | e) + 1) - 1, i &= l & ~(s & ~f), i = i & 201326741 ? i & 201326741 | 1 : i ? i | 2 : 0;
            }
            i !== 0 && (n = !0, om(a, i));
          } else
            i = Ue, i = ou(
              a,
              a === Ze ? i : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (i & 3) === 0 || Pl(a, i) || (n = !0, om(a, i));
          a = a.next;
        }
      while (n);
      Is = !1;
    }
  }
  function ay() {
    rm();
  }
  function rm() {
    Er = Ls = !1;
    var e = 0;
    ya !== 0 && gy() && (e = ya);
    for (var t = Gt(), n = null, a = jl; a !== null; ) {
      var l = a.next, i = cm(a, t);
      i === 0 ? (a.next = null, n === null ? jl = l : n.next = l, l === null && (Hl = n)) : (n = a, (e !== 0 || (i & 3) !== 0) && (Er = !0)), a = l;
    }
    et !== 0 && et !== 5 || zi(e), ya !== 0 && (ya = 0);
  }
  function cm(e, t) {
    for (var n = e.suspendedLanes, a = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var s = 31 - Xt(i), f = 1 << s, g = l[s];
      g === -1 ? ((f & n) === 0 || (f & a) !== 0) && (l[s] = Sp(f, t)) : g <= t && (e.expiredLanes |= f), i &= ~f;
    }
    if (t = Ze, n = Ue, n = ou(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, n === 0 || e === t && (Ge === 2 || Ge === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && Vr(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || Pl(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (a !== null && Vr(a), Xr(n)) {
        case 2:
        case 8:
          n = Vo;
          break;
        case 32:
          n = uu;
          break;
        case 268435456:
          n = Go;
          break;
        default:
          n = uu;
      }
      return a = sm.bind(null, e), n = Br(n, a), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return a !== null && a !== null && Vr(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function sm(e, t) {
    if (et !== 0 && et !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (yr() && e.callbackNode !== n)
      return null;
    var a = Ue;
    return a = ou(
      e,
      e === Ze ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (kh(e, a, t), cm(e, Gt()), e.callbackNode != null && e.callbackNode === n ? sm.bind(null, e) : null);
  }
  function om(e, t) {
    if (yr()) return null;
    kh(e, t, !0);
  }
  function ly() {
    vy(function() {
      (Ie & 6) !== 0 ? Br(
        Bo,
        ay
      ) : rm();
    });
  }
  function Bs() {
    if (ya === 0) {
      var e = Ya;
      e === 0 && (e = ru, ru <<= 1, (ru & 261888) === 0 && (ru = 256)), ya = e;
    }
    return ya;
  }
  function fm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : gu(e);
  }
  function iy(e, t, n, a, l) {
    if (t === "submit" && n && n.stateNode === l) {
      var i = fm(
        (l[jt] || null).action
      ), s = a.submitter;
      s && (t = (t = s[jt] || null) ? fm(t.formAction) : s.getAttribute("formAction"), t !== null && (i = t, s = null));
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
                if (ya !== 0) {
                  var g = new FormData(l, s);
                  kc(
                    n,
                    {
                      pending: !0,
                      data: g,
                      method: l.method,
                      action: i
                    },
                    null,
                    g
                  );
                }
              } else
                typeof i == "function" && (f.preventDefault(), g = new FormData(l, s), kc(
                  n,
                  {
                    pending: !0,
                    data: g,
                    method: l.method,
                    action: i
                  },
                  i,
                  g
                ));
            },
            currentTarget: l
          }
        ]
      });
    }
  }
  for (var Vs = 0; Vs < dc.length; Vs++) {
    var Gs = dc[Vs], uy = Gs.toLowerCase(), ry = Gs[0].toUpperCase() + Gs.slice(1);
    gn(
      uy,
      "on" + ry
    );
  }
  gn(qf, "onAnimationEnd"), gn(Lf, "onAnimationIteration"), gn(If, "onAnimationStart"), gn("dblclick", "onDoubleClick"), gn("focusin", "onFocus"), gn("focusout", "onBlur"), gn(pv, "onTransitionRun"), gn(vv, "onTransitionStart"), gn(yv, "onTransitionCancel"), gn(Bf, "onTransitionEnd"), ll("onMouseEnter", ["mouseout", "mouseover"]), ll("onMouseLeave", ["mouseout", "mouseover"]), ll("onPointerEnter", ["pointerout", "pointerover"]), ll("onPointerLeave", ["pointerout", "pointerover"]), Ma(
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
  var Mi = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), cy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mi)
  );
  function dm(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var a = e[n], l = a.event;
      a = a.listeners;
      e: {
        var i = void 0;
        if (t)
          for (var s = a.length - 1; 0 <= s; s--) {
            var f = a[s], g = f.instance, w = f.currentTarget;
            if (f = f.listener, g !== i && l.isPropagationStopped())
              break e;
            i = f, l.currentTarget = w;
            try {
              i(l);
            } catch (D) {
              Tu(D);
            }
            l.currentTarget = null, i = g;
          }
        else
          for (s = 0; s < a.length; s++) {
            if (f = a[s], g = f.instance, w = f.currentTarget, f = f.listener, g !== i && l.isPropagationStopped())
              break e;
            i = f, l.currentTarget = w;
            try {
              i(l);
            } catch (D) {
              Tu(D);
            }
            l.currentTarget = null, i = g;
          }
      }
    }
  }
  function Re(e, t) {
    var n = t[Fo];
    n === void 0 && (n = t[Fo] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    n.has(a) || (hm(t, e, 2, !1), n.add(a));
  }
  function Ys(e, t, n) {
    var a = 0;
    t && (a |= 4), hm(
      n,
      e,
      a,
      t
    );
  }
  var br = "_reactListening" + Math.random().toString(36).slice(2);
  function Xs(e) {
    if (!e[br]) {
      e[br] = !0, Wo.forEach(function(n) {
        n !== "selectionchange" && (cy.has(n) || Ys(n, !1, e), Ys(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[br] || (t[br] = !0, Ys("selectionchange", !1, t));
    }
  }
  function hm(e, t, n, a) {
    switch (ng(t)) {
      case 2:
        var l = e0;
        break;
      case 8:
        l = t0;
        break;
      default:
        l = oo;
    }
    n = l.bind(
      null,
      t,
      n,
      e
    ), l = void 0, !Pr || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (l = !0), a ? l !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: l
    }) : e.addEventListener(t, n, !0) : l !== void 0 ? e.addEventListener(t, n, {
      passive: l
    }) : e.addEventListener(t, n, !1);
  }
  function Qs(e, t, n, a, l) {
    var i = a;
    if ((t & 1) === 0 && (t & 2) === 0 && a !== null)
      e: for (; ; ) {
        if (a === null) return;
        var s = a.tag;
        if (s === 3 || s === 4) {
          var f = a.stateNode.containerInfo;
          if (f === l) break;
          if (s === 4)
            for (s = a.return; s !== null; ) {
              var g = s.tag;
              if ((g === 3 || g === 4) && s.stateNode.containerInfo === l)
                return;
              s = s.return;
            }
          for (; f !== null; ) {
            if (s = za(f), s === null) return;
            if (g = s.tag, g === 5 || g === 6 || g === 26 || g === 27) {
              a = i = s;
              continue e;
            }
            f = f.parentNode;
          }
        }
        a = a.return;
      }
    hf(function() {
      var w = i, D = Fr(n), I = [];
      e: {
        var A = Vf.get(e);
        if (A !== void 0) {
          var U = Eu, F = e;
          switch (e) {
            case "keypress":
              if (vu(n) === 0) break e;
            case "keydown":
            case "keyup":
              U = Kp;
              break;
            case "focusin":
              F = "focus", U = nc;
              break;
            case "focusout":
              F = "blur", U = nc;
              break;
            case "beforeblur":
            case "afterblur":
              U = nc;
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
              U = pf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              U = Mp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              U = $p;
              break;
            case qf:
            case Lf:
            case If:
              U = qp;
              break;
            case Bf:
              U = Wp;
              break;
            case "scroll":
            case "scrollend":
              U = Dp;
              break;
            case "wheel":
              U = tv;
              break;
            case "copy":
            case "cut":
            case "paste":
              U = Ip;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              U = yf;
              break;
            case "submit":
              U = Jp;
              break;
            case "toggle":
            case "beforetoggle":
              U = av;
          }
          var le = (t & 4) !== 0, Ne = !le && (e === "scroll" || e === "scrollend"), _ = le ? A !== null ? A + "Capture" : null : A;
          le = [];
          for (var y = w, x; y !== null; ) {
            var q = y;
            if (x = q.stateNode, q = q.tag, q !== 5 && q !== 26 && q !== 27 || x === null || _ === null || (q = ni(y, _), q != null && le.push(
              ji(y, q, x)
            )), Ne) break;
            y = y.return;
          }
          0 < le.length && (A = new U(
            A,
            F,
            null,
            n,
            D
          ), I.push({ event: A, listeners: le }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (U = e === "mouseover" || e === "pointerover", A = e === "mouseout" || e === "pointerout", U && n !== Jr && (F = n.relatedTarget || n.fromElement) && (za(F) || F[tl]))
            break e;
          (A || U) && (F = D.window === D ? D : (U = D.ownerDocument) ? U.defaultView || U.parentWindow : window, A ? (U = n.relatedTarget || n.toElement, A = w, U = U ? za(U) : null, U !== null && (Ne = h(U), le = U.tag, U !== Ne || le !== 5 && le !== 27 && le !== 6) && (U = null)) : (A = null, U = w), A !== U && (le = pf, q = "onMouseLeave", _ = "onMouseEnter", y = "mouse", (e === "pointerout" || e === "pointerover") && (le = yf, q = "onPointerLeave", _ = "onPointerEnter", y = "pointer"), Ne = A == null ? F : ti(A), x = U == null ? F : ti(U), F = new le(
            q,
            y + "leave",
            A,
            n,
            D
          ), F.target = Ne, F.relatedTarget = x, q = null, za(D) === w && (le = new le(
            _,
            y + "enter",
            U,
            n,
            D
          ), le.target = x, le.relatedTarget = Ne, q = le), Ne = q, le = A && U ? P(
            A,
            U,
            sy
          ) : null, A !== null && mm(
            I,
            F,
            A,
            le,
            !1
          ), U !== null && Ne !== null && mm(
            I,
            Ne,
            U,
            le,
            !0
          )));
        }
        e: {
          if (A = w ? ti(w) : window, U = A.nodeName && A.nodeName.toLowerCase(), U === "select" || U === "input" && A.type === "file")
            var W = wf;
          else if (_f(A))
            if (Of)
              W = hv;
            else {
              W = fv;
              var De = ov;
            }
          else
            U = A.nodeName, !U || U.toLowerCase() !== "input" || A.type !== "checkbox" && A.type !== "radio" ? w && kr(w.elementType) && (W = wf) : W = dv;
          if (W && (W = W(e, w))) {
            Nf(
              I,
              W,
              n,
              D
            );
            break e;
          }
          De && De(e, A, w);
        }
        switch (De = w ? ti(w) : window, e) {
          case "focusin":
            (_f(De) || De.contentEditable === "true") && (ol = De, sc = w, oi = null);
            break;
          case "focusout":
            oi = sc = ol = null;
            break;
          case "mousedown":
            oc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            oc = !1, jf(I, n, D);
            break;
          case "selectionchange":
            if (gv) break;
          case "keydown":
          case "keyup":
            jf(I, n, D);
        }
        var ce;
        if (lc)
          e: {
            switch (e) {
              case "compositionstart":
                var ve = "onCompositionStart";
                break e;
              case "compositionend":
                ve = "onCompositionEnd";
                break e;
              case "compositionupdate":
                ve = "onCompositionUpdate";
                break e;
            }
            ve = void 0;
          }
        else
          sl ? Tf(e, n) && (ve = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (ve = "onCompositionStart");
        ve && (Ef && n.locale !== "ko" && (sl || ve !== "onCompositionStart" ? ve === "onCompositionEnd" && sl && (ce = mf()) : (Wn = D, Wr = "value" in Wn ? Wn.value : Wn.textContent, sl = !0)), De = Sr(w, ve), 0 < De.length && (ve = new vf(
          ve,
          e,
          null,
          n,
          D
        ), I.push({ event: ve, listeners: De }), ce ? ve.data = ce : (ce = Af(n), ce !== null && (ve.data = ce)))), (ce = iv ? uv(e, n) : rv(e, n)) && (ve = Sr(w, "onBeforeInput"), 0 < ve.length && (De = new vf(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          D
        ), I.push({
          event: De,
          listeners: ve
        }), De.data = ce)), iy(
          I,
          e,
          w,
          n,
          D
        );
      }
      dm(I, t);
    });
  }
  function ji(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Sr(e, t) {
    for (var n = t + "Capture", a = []; e !== null; ) {
      var l = e, i = l.stateNode;
      if (l = l.tag, l !== 5 && l !== 26 && l !== 27 || i === null || (l = ni(e, n), l != null && a.unshift(
        ji(e, l, i)
      ), l = ni(e, t), l != null && a.push(
        ji(e, l, i)
      )), e.tag === 3) return a;
      e = e.return;
    }
    return [];
  }
  function sy(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function mm(e, t, n, a, l) {
    for (var i = t._reactName, s = []; n !== null && n !== a; ) {
      var f = n, g = f.alternate, w = f.stateNode;
      if (f = f.tag, g !== null && g === a) break;
      f !== 5 && f !== 26 && f !== 27 || w === null || (g = w, l ? (w = ni(n, i), w != null && s.unshift(
        ji(n, w, g)
      )) : l || (w = ni(n, i), w != null && s.push(
        ji(n, w, g)
      ))), n = n.return;
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var oy = /\r\n?/g, fy = /\u0000|\uFFFD/g;
  function gm(e) {
    return (typeof e == "string" ? e : "" + e).replace(oy, `
`).replace(fy, "");
  }
  function pm(e, t) {
    return t = gm(t), gm(e) === t;
  }
  function Xe(e, t, n, a, l, i) {
    switch (n) {
      case "children":
        if (typeof a == "string")
          t === "body" || t === "textarea" && a === "" || ul(e, a);
        else if (typeof a == "number" || typeof a == "bigint")
          t !== "body" && ul(e, "" + a);
        else return;
        break;
      case "className":
        mu(e, "class", a);
        break;
      case "tabIndex":
        mu(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        mu(e, n, a);
        break;
      case "style":
        ff(e, a, i);
        return;
      case "data":
        if (t !== "object") {
          mu(e, "data", a);
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
          typeof i == "function" && (n === "formAction" ? (t !== "input" && Xe(e, t, "name", l.name, l, null), Xe(
            e,
            t,
            "formEncType",
            l.formEncType,
            l,
            null
          ), Xe(
            e,
            t,
            "formMethod",
            l.formMethod,
            l,
            null
          ), Xe(
            e,
            t,
            "formTarget",
            l.formTarget,
            l,
            null
          )) : (Xe(e, t, "encType", l.encType, l, null), Xe(e, t, "method", l.method, l, null), Xe(e, t, "target", l.target, l, null)));
        if (a == null || typeof a == "symbol" || typeof a == "boolean") {
          e.removeAttribute(n);
          break;
        }
        a = gu(a), e.setAttribute(n, a);
        break;
      case "onClick":
        a != null && (e.onclick = An);
        return;
      case "onScroll":
        a != null && Re("scroll", e);
        return;
      case "onScrollEnd":
        a != null && Re("scrollend", e);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(c(61));
          if (n = a.__html, n != null) {
            if (l.children != null) throw Error(c(60));
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
        Re("beforetoggle", e), Re("toggle", e), hu(e, "popover", a);
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
        hu(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N")
          n = xp.get(n) || n, hu(e, n, a);
        else return;
    }
    qe = !0;
  }
  function Ks(e, t, n, a, l, i) {
    switch (n) {
      case "style":
        ff(e, a, i);
        return;
      case "dangerouslySetInnerHTML":
        if (a != null) {
          if (typeof a != "object" || !("__html" in a))
            throw Error(c(61));
          if (n = a.__html, n != null) {
            if (l.children != null) throw Error(c(60));
            i?.__html !== n && (e.innerHTML = n);
          }
        }
        break;
      case "children":
        if (typeof a == "string") ul(e, a);
        else if (typeof a == "number" || typeof a == "bigint")
          ul(e, "" + a);
        else return;
        break;
      case "onScroll":
        a != null && Re("scroll", e);
        return;
      case "onScrollEnd":
        a != null && Re("scrollend", e);
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
        if (!ef.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (l = n.endsWith("Capture"), i = n.slice(2, l ? n.length - 7 : void 0), t = e[jt] || null, t = t != null ? t[n] : null, typeof t == "function" && e.removeEventListener(i, t, l), typeof a == "function")) {
              typeof t != "function" && t !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(i, a, l);
              break e;
            }
            qe = !0, n in e ? e[n] = a : a === !0 ? e.setAttribute(n, "") : hu(e, n, a);
          }
        return;
    }
    qe = !0;
  }
  function _t(e, t, n) {
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
        Re("error", e), Re("load", e);
        var a = !1, l = !1, i;
        for (i in n)
          if (n.hasOwnProperty(i)) {
            var s = n[i];
            if (s != null)
              switch (i) {
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
                  Xe(e, t, i, s, n, null);
              }
          }
        l && Xe(e, t, "srcSet", n.srcSet, n, null), a && Xe(e, t, "src", n.src, n, null);
        return;
      case "input":
        Re("invalid", e);
        var f = i = s = l = null, g = null, w = null;
        for (a in n)
          if (n.hasOwnProperty(a)) {
            var D = n[a];
            if (D != null)
              switch (a) {
                case "name":
                  l = D;
                  break;
                case "type":
                  s = D;
                  break;
                case "checked":
                  g = D;
                  break;
                case "defaultChecked":
                  w = D;
                  break;
                case "value":
                  i = D;
                  break;
                case "defaultValue":
                  f = D;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (D != null)
                    throw Error(c(137, t));
                  break;
                default:
                  Xe(e, t, a, D, n, null);
              }
          }
        rf(
          e,
          i,
          f,
          g,
          w,
          s,
          l,
          !1
        );
        return;
      case "select":
        Re("invalid", e), a = s = i = null;
        for (l in n)
          if (n.hasOwnProperty(l) && (f = n[l], f != null))
            switch (l) {
              case "value":
                i = f;
                break;
              case "defaultValue":
                s = f;
                break;
              case "multiple":
                a = f;
              default:
                Xe(e, t, l, f, n, null);
            }
        t = i, n = s, e.multiple = !!a, t != null ? il(e, !!a, t, !1) : n != null && il(e, !!a, n, !0);
        return;
      case "textarea":
        Re("invalid", e), i = l = a = null;
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
                i = f;
                break;
              case "dangerouslySetInnerHTML":
                if (f != null) throw Error(c(91));
                break;
              default:
                Xe(e, t, s, f, n, null);
            }
        sf(e, a, l, i);
        return;
      case "option":
        for (g in n)
          n.hasOwnProperty(g) && (a = n[g], a != null) && (g === "selected" ? e.selected = a && typeof a != "function" && typeof a != "symbol" : Xe(e, t, g, a, n, null));
        return;
      case "dialog":
        Re("beforetoggle", e), Re("toggle", e), Re("cancel", e), Re("close", e);
        break;
      case "iframe":
      case "object":
        Re("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Mi.length; a++)
          Re(Mi[a], e);
        break;
      case "image":
        Re("error", e), Re("load", e);
        break;
      case "details":
        Re("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Re("error", e), Re("load", e);
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
        for (w in n)
          if (n.hasOwnProperty(w) && (a = n[w], a != null))
            switch (w) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, t));
              default:
                Xe(e, t, w, a, n, null);
            }
        return;
      default:
        if (kr(t)) {
          for (D in n)
            n.hasOwnProperty(D) && (a = n[D], a !== void 0 && Ks(
              e,
              t,
              D,
              a,
              n,
              void 0
            ));
          return;
        }
    }
    for (f in n)
      n.hasOwnProperty(f) && (a = n[f], a != null && Xe(e, t, f, a, n, null));
  }
  var dy = {};
  function hy(e, t, n, a) {
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
        var l = null, i = null, s = null, f = null, g = null, w = null, D = null;
        for (U in n) {
          var I = n[U];
          if (n.hasOwnProperty(U) && I != null)
            switch (U) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                g = I;
              default:
                a.hasOwnProperty(U) || Xe(e, t, U, null, a, I);
            }
        }
        for (var A in a) {
          var U = a[A];
          if (I = n[A], a.hasOwnProperty(A) && (U != null || I != null))
            switch (A) {
              case "type":
                U !== I && (qe = !0), i = U;
                break;
              case "name":
                U !== I && (qe = !0), l = U;
                break;
              case "checked":
                U !== I && (qe = !0), w = U;
                break;
              case "defaultChecked":
                U !== I && (qe = !0), D = U;
                break;
              case "value":
                U !== I && (qe = !0), s = U;
                break;
              case "defaultValue":
                U !== I && (qe = !0), f = U;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (U != null)
                  throw Error(c(137, t));
                break;
              default:
                U !== I && Xe(
                  e,
                  t,
                  A,
                  U,
                  a,
                  I
                );
            }
        }
        Kr(
          e,
          s,
          f,
          g,
          w,
          D,
          i,
          l
        );
        return;
      case "select":
        U = s = f = A = null;
        for (i in n)
          if (g = n[i], n.hasOwnProperty(i) && g != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                U = g;
              default:
                a.hasOwnProperty(i) || Xe(
                  e,
                  t,
                  i,
                  null,
                  a,
                  g
                );
            }
        for (l in a)
          if (i = a[l], g = n[l], a.hasOwnProperty(l) && (i != null || g != null))
            switch (l) {
              case "value":
                i !== g && (qe = !0), A = i;
                break;
              case "defaultValue":
                i !== g && (qe = !0), f = i;
                break;
              case "multiple":
                i !== g && (qe = !0), s = i;
              default:
                i !== g && Xe(
                  e,
                  t,
                  l,
                  i,
                  a,
                  g
                );
            }
        t = f, n = s, a = U, A != null ? il(e, !!n, A, !1) : !!a != !!n && (t != null ? il(e, !!n, t, !0) : il(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        U = A = null;
        for (f in n)
          if (l = n[f], n.hasOwnProperty(f) && l != null && !a.hasOwnProperty(f))
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                Xe(e, t, f, null, a, l);
            }
        for (s in a)
          if (l = a[s], i = n[s], a.hasOwnProperty(s) && (l != null || i != null))
            switch (s) {
              case "value":
                l !== i && (qe = !0), A = l;
                break;
              case "defaultValue":
                l !== i && (qe = !0), U = l;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (l != null) throw Error(c(91));
                break;
              default:
                l !== i && Xe(e, t, s, l, a, i);
            }
        cf(e, A, U);
        return;
      case "option":
        for (var F in n)
          A = n[F], n.hasOwnProperty(F) && A != null && !a.hasOwnProperty(F) && (F === "selected" ? e.selected = !1 : Xe(
            e,
            t,
            F,
            null,
            a,
            A
          ));
        for (g in a)
          A = a[g], U = n[g], a.hasOwnProperty(g) && A !== U && (A != null || U != null) && (g === "selected" ? (A !== U && (qe = !0), e.selected = A && typeof A != "function" && typeof A != "symbol") : Xe(
            e,
            t,
            g,
            A,
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
        for (var le in n)
          A = n[le], n.hasOwnProperty(le) && A != null && !a.hasOwnProperty(le) && Xe(e, t, le, null, a, A);
        for (w in a)
          if (A = a[w], U = n[w], a.hasOwnProperty(w) && A !== U && (A != null || U != null))
            switch (w) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (A != null)
                  throw Error(c(137, t));
                break;
              default:
                Xe(
                  e,
                  t,
                  w,
                  A,
                  a,
                  U
                );
            }
        return;
      default:
        if (kr(t)) {
          for (var Ne in n)
            A = n[Ne], n.hasOwnProperty(Ne) && A !== void 0 && !a.hasOwnProperty(Ne) && Ks(
              e,
              t,
              Ne,
              void 0,
              a,
              A
            );
          for (D in a)
            A = a[D], U = n[D], !a.hasOwnProperty(D) || A === U || A === void 0 && U === void 0 || Ks(
              e,
              t,
              D,
              A,
              a,
              U
            );
          return;
        }
    }
    for (var _ in n)
      A = n[_], n.hasOwnProperty(_) && A != null && !a.hasOwnProperty(_) && Xe(e, t, _, null, a, A);
    for (I in a)
      A = a[I], U = n[I], !a.hasOwnProperty(I) || A === U || A == null && U == null || Xe(e, t, I, A, a, U);
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
  function my() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var l = n[a], i = l.transferSize, s = l.initiatorType, f = l.duration;
        if (i && f && vm(s)) {
          for (s = 0, f = l.responseEnd, a += 1; a < n.length; a++) {
            var g = n[a], w = g.startTime;
            if (w > f) break;
            var D = g.transferSize, I = g.initiatorType;
            D && vm(I) && (g = g.responseEnd, s += D * (g < f ? 1 : (f - w) / (g - w)));
          }
          if (--a, t += 8 * (i + s) / (l.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Zs = null, ks = null;
  function Hi(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function ym(e) {
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
  function bm(e, t, n, a) {
    return n = Hi(
      n
    ).createElement(e), n[Et] = a, n[jt] = t, _t(n, e, t), dt(n), n;
  }
  function Js(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var Fs = null;
  function gy() {
    var e = window.event;
    return e && e.type === "popstate" ? e === Fs ? !1 : (Fs = e, !0) : (Fs = null, !1);
  }
  var $s = typeof setTimeout == "function" ? setTimeout : void 0, py = typeof clearTimeout == "function" ? clearTimeout : void 0, Sm = typeof Promise == "function" ? Promise : void 0, Tm = typeof requestAnimationFrame == "function" ? requestAnimationFrame : $s, vy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Sm < "u" ? function(e) {
    return Sm.resolve(null).then(e).catch(yy);
  } : $s;
  function yy(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Ea(e) {
    return e === "head";
  }
  function Am(e, t) {
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
          io(
            e.ownerDocument.documentElement
          );
        else if (n === "head") {
          n = e.ownerDocument.head, io(n);
          for (var i = n.firstChild; i; ) {
            var s = i.nextSibling, f = i.nodeName;
            i[ei] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && i.rel.toLowerCase() === "stylesheet" || n.removeChild(i), i = s;
          }
        } else
          n === "body" && io(e.ownerDocument.body);
      n = l;
    } while (n);
    Yl(t);
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
  function Nm(e, t, n) {
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
  function wm(e, t) {
    e = e.style, t = t.style;
    var n = t != null ? t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null : null;
    e.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = t != null ? t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null : null, e.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), e.display === "inline-block" && (t == null ? e.display = e.margin = "" : (n = t.display, e.display = n == null || typeof n == "boolean" ? "" : n, n = t.margin, n != null ? e.margin = n : (n = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], e.marginTop = n == null || typeof n == "boolean" ? "" : n, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], e.marginBottom = t == null || typeof t == "boolean" ? "" : t)));
  }
  function Ey(e, t, n) {
    return n = n.ownerDocument.defaultView, {
      rect: e,
      abs: t.position === "absolute" || t.position === "fixed",
      clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
      view: 0 <= e.bottom && 0 <= e.right && e.top <= n.innerHeight && e.left <= n.innerWidth
    };
  }
  function Ps(e) {
    var t = e.getBoundingClientRect(), n = getComputedStyle(e);
    return Ey(t, n, e);
  }
  function by(e) {
    return e.documentElement.clientHeight;
  }
  function Sy(e) {
    this.addEventListener("load", e), this.addEventListener("error", e);
  }
  function Ty(e, t, n, a, l, i, s, f, g) {
    var w = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var D = w.startViewTransition({
        update: function() {
          var A = w.defaultView, U = A.navigation && A.navigation.transition, F = w.fonts.status;
          a();
          var le = [];
          if (F === "loaded" && (by(w), w.fonts.status === "loading" && le.push(w.fonts.ready)), F = le.length, e !== null)
            for (var Ne = e.suspenseyImages, _ = 0, y = 0; y < Ne.length; y++) {
              var x = Ne[y];
              if (!x.complete) {
                var q = x.getBoundingClientRect();
                if (0 < q.bottom && 0 < q.right && q.top < A.innerHeight && q.left < A.innerWidth) {
                  if (_ += Zm(x), _ > _r) {
                    le.length = F;
                    break;
                  }
                  x = new Promise(
                    Sy.bind(x)
                  ), le.push(x);
                }
              }
            }
          if (0 < le.length)
            return A = Promise.race([
              Promise.all(le),
              new Promise(function(W) {
                return setTimeout(W, 500);
              })
            ]).then(l, l), (U ? Promise.allSettled([U.finished, A]) : A).then(i, i);
          if (l(), U)
            return U.finished.then(
              i,
              i
            );
          i();
        },
        types: n
      });
      w.__reactViewTransition = D;
      var I = [];
      return D.ready.then(
        function() {
          for (var A = w.documentElement.getAnimations({
            subtree: !0
          }), U = 0; U < A.length; U++) {
            var F = A[U], le = F.effect, Ne = le.pseudoElement;
            if (Ne != null && Ne.startsWith("::view-transition")) {
              I.push(F), F = le.getKeyframes();
              for (var _ = Ne = void 0, y = !0, x = 0; x < F.length; x++) {
                var q = F[x], W = q.width;
                if (Ne === void 0) Ne = W;
                else if (Ne !== W) {
                  y = !1;
                  break;
                }
                if (W = q.height, _ === void 0) _ = W;
                else if (_ !== W) {
                  y = !1;
                  break;
                }
                delete q.width, delete q.height, q.transform === "none" && delete q.transform;
              }
              y && Ne !== void 0 && _ !== void 0 && (le.setKeyframes(F), y = getComputedStyle(
                le.target,
                le.pseudoElement
              ), y.width !== Ne || y.height !== _) && (y = F[0], y.width = Ne, y.height = _, y = F[F.length - 1], y.width = Ne, y.height = _, le.setKeyframes(F));
            }
          }
          s();
        },
        function(A) {
          w.__reactViewTransition === D && (w.__reactViewTransition = null);
          try {
            typeof A == "object" && A !== null && A.name === "InvalidStateError" && (A.message === "View transition was skipped because document visibility state is hidden." || A.message === "Skipping view transition because document visibility state has become hidden." || A.message === "Skipping view transition because viewport size changed." || A.message === "Transition was aborted because of invalid state") && (A = null), A !== null && g(A);
          } finally {
            a(), l(), s();
          }
        }
      ), D.finished.finally(function() {
        for (var A = 0; A < I.length; A++)
          I[A].cancel();
        w.__reactViewTransition === D && (w.__reactViewTransition = null), f();
      }), D;
    } catch {
      return a(), l(), s(), null;
    }
  }
  function el(e, t) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + e + "(" + t + ")";
  }
  el.prototype.animate = function(e, t) {
    return t = typeof t == "number" ? { duration: t } : ne({}, t), t.pseudoElement = this._selector, this._scope.animate(e, t);
  }, el.prototype.getAnimations = function() {
    for (var e = this._scope, t = this._selector, n = e.getAnimations({ subtree: !0 }), a = [], l = 0; l < n.length; l++) {
      var i = n[l].effect;
      i !== null && i.target === e && i.pseudoElement === t && a.push(n[l]);
    }
    return a;
  }, el.prototype.getComputedStyle = function() {
    return getComputedStyle(this._scope, this._selector);
  };
  function Om(e) {
    return {
      name: e,
      group: new el("group", e),
      imagePair: new el("image-pair", e),
      old: new el("old", e),
      new: new el("new", e)
    };
  }
  function Pt(e) {
    this._fragmentFiber = e, this._observers = this._eventListeners = null;
  }
  Pt.prototype.addEventListener = function(e, t, n) {
    var a = null, l = null;
    if (!(n != null && typeof n != "boolean" && (a = n.signal || null, a !== null && a.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var i = this._eventListeners;
      if (Rm(i, e, t, n) === -1) {
        var s = this, f = t;
        n != null && typeof n != "boolean" && n.once === !0 && (f = function(g) {
          s.removeEventListener(
            e,
            t,
            n
          ), typeof t == "function" ? t.call(this, g) : t.handleEvent(g);
        }), a !== null && (l = s.removeEventListener.bind(
          s,
          e,
          t,
          n
        ), a.addEventListener("abort", l, { once: !0 }), l = a.removeEventListener.bind(a, "abort", l)), a = ql(n), i.push({
          type: e,
          listener: t,
          optionsOrUseCapture: n,
          attachedListener: f,
          cleanup: l
        }), v(
          this._fragmentFiber.child,
          !1,
          Ay,
          e,
          f,
          a
        );
      }
      this._eventListeners = i;
    }
  };
  function Ay(e, t, n, a) {
    return H(e).addEventListener(
      t,
      n,
      a
    ), !1;
  }
  Pt.prototype.removeEventListener = function(e, t, n) {
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
      l = ql(l.optionsOrUseCapture), v(
        this._fragmentFiber.child,
        !1,
        _y,
        e,
        n,
        l
      ), a.splice(t, 1), i !== null && i();
    }
  };
  function _y(e, t, n, a) {
    return H(e).removeEventListener(
      t,
      n,
      a
    ), !1;
  }
  function ql(e) {
    return e != null && typeof e != "boolean" && (e.once === !0 || e.signal instanceof AbortSignal) ? { capture: e.capture, passive: e.passive } : e;
  }
  function Cm(e) {
    return e == null ? "c=0" : typeof e == "boolean" ? "c=" + (e ? "1" : "0") : "c=" + (e.capture ? "1" : "0");
  }
  function Rm(e, t, n, a) {
    if (e.length === 0) return -1;
    a = Cm(a);
    for (var l = 0; l < e.length; l++) {
      var i = e[l];
      if (i.type === t && i.listener === n && Cm(i.optionsOrUseCapture) === a)
        return l;
    }
    return -1;
  }
  Pt.prototype.dispatchEvent = function(e) {
    var t = M(
      this._fragmentFiber
    );
    if (t === null) return !0;
    t = H(t);
    var n = this._eventListeners;
    if (n !== null && 0 < n.length || !e.bubbles) {
      var a = t.nodeType === 9 ? t.createComment("") : document.createTextNode("");
      if (n)
        for (var l = 0; l < n.length; l++) {
          var i = n[l];
          a.addEventListener(
            i.type,
            i.attachedListener,
            ql(i.optionsOrUseCapture)
          );
        }
      if (t.appendChild(a), e = a.dispatchEvent(e), n)
        for (l = 0; l < n.length; l++)
          i = n[l], a.removeEventListener(
            i.type,
            i.attachedListener,
            ql(i.optionsOrUseCapture)
          );
      return t.removeChild(a), e;
    }
    return t.dispatchEvent(e);
  }, Pt.prototype.focus = function(e) {
    v(
      this._fragmentFiber.child,
      !0,
      xm,
      e,
      void 0,
      void 0
    );
  };
  function xm(e, t) {
    return e.tag === 6 ? !1 : (e = H(e), Hy(e, t));
  }
  Pt.prototype.focusLast = function(e) {
    var t = [];
    v(
      this._fragmentFiber.child,
      !0,
      Ws,
      t,
      void 0,
      void 0
    );
    for (var n = t.length - 1; 0 <= n && !xm(t[n], e); n--) ;
  };
  function Ws(e, t) {
    return t.push(e), !1;
  }
  Pt.prototype.blur = function() {
    var e = M(
      this._fragmentFiber
    );
    e !== null && (e = H(e), e = Hi(e).activeElement, e !== null && v(
      this._fragmentFiber.child,
      !1,
      Ny,
      e,
      void 0,
      void 0
    ));
  };
  function Ny(e, t) {
    return e.tag === 6 ? !1 : (e = H(e), e === t || e.contains(t) ? (t.blur(), !0) : !1);
  }
  Pt.prototype.observeUsing = function(e) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), v(
      this._fragmentFiber.child,
      !1,
      wy,
      e,
      void 0,
      void 0
    );
  };
  function wy(e, t) {
    return e.tag === 6 || (e = H(e), t.observe(e)), !1;
  }
  Pt.prototype.unobserveUsing = function(e) {
    var t = this._observers;
    if (t !== null && t.has(e)) {
      t.delete(e), v(
        this._fragmentFiber.child,
        !1,
        Oy,
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
  function Oy(e, t) {
    return e.tag === 6 || (e = H(e), t.unobserve(e)), !1;
  }
  var bn = [], eo = !1;
  function Cy(e, t, n) {
    bn.push({
      fragmentInstance: e,
      observer: t,
      instance: n
    }), eo || (eo = !0, qy(function() {
      eo = !1;
      var a = bn;
      bn = [];
      for (var l = 0; l < a.length; l++) {
        var i = a[l];
        i.observer.unobserve(i.instance);
      }
    }));
  }
  Pt.prototype.getClientRects = function() {
    var e = [];
    return v(
      this._fragmentFiber.child,
      !1,
      Ry,
      e,
      void 0,
      void 0
    ), e;
  };
  function Ry(e, t) {
    if (e.tag === 6) {
      e = e.stateNode;
      var n = e.ownerDocument.createRange();
      n.selectNodeContents(e), t.push.apply(t, n.getClientRects());
    } else
      e = H(e), t.push.apply(t, e.getClientRects());
    return !1;
  }
  Pt.prototype.getRootNode = function(e) {
    var t = M(
      this._fragmentFiber
    );
    return t === null ? this : H(t).getRootNode(e);
  }, Pt.prototype.compareDocumentPosition = function(e) {
    var t = M(
      this._fragmentFiber
    );
    if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var n = [];
    v(
      this._fragmentFiber.child,
      !1,
      Ws,
      n,
      void 0,
      void 0
    );
    var a = H(t);
    if (n.length === 0) {
      if (n = a, b(this._fragmentFiber)) {
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
      return n === e ? l = Node.DOCUMENT_POSITION_CONTAINS : a & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = S(t)[1], n === null ? l = Node.DOCUMENT_POSITION_PRECEDING : (e = H(n).compareDocumentPosition(
        e
      ), l = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), l |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    t = H(n[0]), l = H(n[n.length - 1]);
    var i = b(this._fragmentFiber) ? t.parentElement : a;
    if (i == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    a = i.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, i = i.compareDocumentPosition(l) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var s = t.compareDocumentPosition(e), f = l.compareDocumentPosition(e), g = s & Node.DOCUMENT_POSITION_CONTAINED_BY || f & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return f = a && i && s & Node.DOCUMENT_POSITION_FOLLOWING && f & Node.DOCUMENT_POSITION_PRECEDING, t = a && t === e || i && l === e || g || f ? Node.DOCUMENT_POSITION_CONTAINED_BY : !a && t === e || !i && l === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : s, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || xy(
      t,
      this._fragmentFiber,
      n[0],
      n[n.length - 1],
      e
    ) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function xy(e, t, n, a, l) {
    var i = za(l);
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
        for (i = t, t = M(t); i !== null; ) {
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
    return e & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!i) && !(t = i === n) && (t = P(
      n,
      i,
      he
    ), t === null ? t = !1 : (v(
      t,
      !0,
      Z,
      i,
      n
    ), i = $, $ = null, t = i !== null)), t) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!i) && !(t = i === a) && (t = P(
      a,
      i,
      he
    ), t === null ? t = !1 : (v(
      t,
      !0,
      X,
      i,
      a
    ), i = $, J = $ = null, t = i !== null)), t) : !1;
  }
  function Um(e, t) {
    var n = e.ownerDocument.createRange();
    n.selectNodeContents(e), e = n.getBoundingClientRect(), window.scrollTo(
      window.scrollX + e.left,
      t ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight
    );
  }
  Pt.prototype.scrollIntoView = function(e) {
    if (typeof e == "object") throw Error(c(566));
    var t = [];
    v(
      this._fragmentFiber.child,
      !1,
      Ws,
      t,
      void 0,
      void 0
    );
    var n = e !== !1;
    if (t.length === 0) {
      var a = S(
        this._fragmentFiber
      );
      if (a = n ? a[1] || a[0] || M(this._fragmentFiber) : a[0] || a[1], a === null) return;
      if (a.tag === 6) {
        e = H(a), Um(e, n);
        return;
      }
      if (a = H(a), a.nodeType !== 9) {
        if (a.nodeType === 11) {
          n = "host" in a ? a.host : null, n !== null && n.scrollIntoView(e);
          return;
        }
        a.scrollIntoView(e);
      }
    }
    for (a = n ? t.length - 1 : 0; a !== (n ? -1 : t.length); ) {
      var l = t[a];
      l.tag === 6 ? (l = H(l), Um(l, n)) : H(l).scrollIntoView(e), a += n ? -1 : 1;
    }
  };
  function Uy(e, t) {
    return e = H(e), Dm(e, t), !1;
  }
  function Dm(e, t) {
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
          ql(l.optionsOrUseCapture)
        );
      }
    e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(i) {
      for (var s = 0, f = 0; f < bn.length; f++) {
        var g = bn[f];
        (g.fragmentInstance !== t || g.observer !== i || g.instance !== e) && (bn[s++] = g);
      }
      bn.length = s, i.observe(e);
    }), Dm(e, t));
  }
  function Dy(e, t) {
    var n = t._eventListeners;
    if (n !== null)
      for (var a = 0; a < n.length; a++) {
        var l = n[a];
        e.removeEventListener(
          l.type,
          l.attachedListener,
          ql(l.optionsOrUseCapture)
        );
      }
    e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(i) {
      typeof i.rootMargin == "string" ? Cy(
        t,
        i,
        e
      ) : i.unobserve(e);
    }), e.reactFragments != null && e.reactFragments.delete(t));
  }
  function to(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          to(n), du(n);
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
  function zy(e, t, n, a) {
    for (; e.nodeType === 1; ) {
      var l = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!a && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (a) {
        if (!e[ei])
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
      if (e = sn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function My(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = sn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Mm(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = sn(e.nextSibling), e === null)) return null;
    return e;
  }
  function no(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function ao(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function jy(e, t) {
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
  function sn(e) {
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
  function jm(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0)
            return sn(e.nextSibling);
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
  function Hy(e, t) {
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
  function qy(e) {
    Tm(function() {
      Tm(function(t) {
        return e(t);
      });
    });
  }
  function qm(e, t, n) {
    switch (t = Hi(n), e) {
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
  function Lm(e, t, n) {
    for (var a in n) {
      var l = n[a];
      n.hasOwnProperty(a) && l != null && Xe(e, t, a, null, dy, l);
    }
    n.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === An && (e.onclick = null), du(e);
  }
  function io(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    du(e);
  }
  var on = /* @__PURE__ */ new Map(), Im = /* @__PURE__ */ new Set();
  function qi(e) {
    if (typeof e.getRootNode == "function") {
      var t = e.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) return t;
    }
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Jn = pe.d;
  pe.d = {
    f: Ly,
    r: Iy,
    D: By,
    C: Vy,
    L: Gy,
    m: Yy,
    X: Qy,
    S: Xy,
    M: Ky
  };
  function Ly() {
    var e = Jn.f(), t = gr();
    return e || t;
  }
  function Iy(e) {
    var t = nl(e);
    t !== null && t.tag === 5 && t.type === "form" ? Vd(t) : Jn.r(e);
  }
  var Ll = typeof document > "u" ? null : document;
  function Bm(e, t, n) {
    var a = Ll;
    if (a && typeof t == "string" && t) {
      var l = tn(t);
      l = 'link[rel="' + e + '"][href="' + l + '"]', typeof n == "string" && (l += '[crossorigin="' + n + '"]'), Im.has(l) || (Im.add(l), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(l) === null && (t = a.createElement("link"), _t(t, "link", e), dt(t), a.head.appendChild(t)));
    }
  }
  function By(e) {
    Jn.D(e), Bm("dns-prefetch", e, null);
  }
  function Vy(e, t) {
    Jn.C(e, t), Bm("preconnect", e, t);
  }
  function Gy(e, t, n) {
    Jn.L(e, t, n);
    var a = Ll;
    if (a && e && t) {
      var l = 'link[rel="preload"][as="' + tn(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (l += '[imagesrcset="' + tn(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (l += '[imagesizes="' + tn(
        n.imageSizes
      ) + '"]')) : l += '[href="' + tn(e) + '"]';
      var i = l;
      switch (t) {
        case "style":
          i = Il(e);
          break;
        case "script":
          i = Bl(e);
      }
      if (!(on.has(i) || (e = ne(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), on.set(i, e), a.querySelector(l) !== null || t === "style" && a.querySelector(Li(i)) || t === "script" && a.querySelector(Ii(i))))) {
        var s = a.createElement("link");
        _t(s, "link", e), t === "style" && (s[fu] = !0, s.onload = s.onerror = function() {
          Po(s);
        }), dt(s), a.head.appendChild(s);
      }
    }
  }
  function Yy(e, t) {
    Jn.m(e, t);
    var n = Ll;
    if (n && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", l = 'link[rel="modulepreload"][as="' + tn(a) + '"][href="' + tn(e) + '"]', i = l;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          i = Bl(e);
      }
      if (!on.has(i) && (e = ne({ rel: "modulepreload", href: e }, t), on.set(i, e), n.querySelector(l) === null)) {
        switch (a) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Ii(i)))
              return;
        }
        a = n.createElement("link"), _t(a, "link", e), dt(a), n.head.appendChild(a);
      }
    }
  }
  function Xy(e, t, n) {
    Jn.S(e, t, n);
    var a = Ll;
    if (a && e) {
      var l = al(a).hoistableStyles, i = Il(e);
      t = t || "default";
      var s = l.get(i);
      if (!s) {
        var f = { loading: 0, preload: null };
        if (s = a.querySelector(
          Li(i)
        ))
          f.loading = 5;
        else {
          e = ne(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = on.get(i)) && uo(e, n);
          var g = s = a.createElement("link");
          dt(g), _t(g, "link", e), g._p = new Promise(function(w, D) {
            g.onload = w, g.onerror = D;
          }), g.addEventListener("load", function() {
            f.loading |= 1;
          }), g.addEventListener("error", function() {
            f.loading |= 2;
          }), f.loading |= 4, Tr(s, t, a);
        }
        s = {
          type: "stylesheet",
          instance: s,
          count: 1,
          state: f
        }, l.set(i, s);
      }
    }
  }
  function Qy(e, t) {
    Jn.X(e, t);
    var n = Ll;
    if (n && e) {
      var a = al(n).hoistableScripts, l = Bl(e), i = a.get(l);
      i || (i = n.querySelector(Ii(l)), i || (e = ne({ src: e, async: !0 }, t), (t = on.get(l)) && ro(e, t), i = n.createElement("script"), dt(i), _t(i, "link", e), n.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(l, i));
    }
  }
  function Ky(e, t) {
    Jn.M(e, t);
    var n = Ll;
    if (n && e) {
      var a = al(n).hoistableScripts, l = Bl(e), i = a.get(l);
      i || (i = n.querySelector(Ii(l)), i || (e = ne({ src: e, async: !0, type: "module" }, t), (t = on.get(l)) && ro(e, t), i = n.createElement("script"), dt(i), _t(i, "link", e), n.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(l, i));
    }
  }
  function Vm(e, t, n, a) {
    var l = (l = Y.current) ? qi(l) : null;
    if (!l) throw Error(c(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (n = Il(n.href), t = al(
          l
        ).hoistableStyles, a = t.get(n), a || (a = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, t.set(n, a)), a) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = Il(n.href);
          var i = al(
            l
          ).hoistableStyles, s = i.get(e);
          if (s || (l = l.ownerDocument || l, s = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, i.set(e, s), (i = l.querySelector(
            Li(e)
          )) ? i._p || (s.instance = i, s.state.loading = 5) : (i = on.get(e), i || (i = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, on.set(e, i)), Zy(
            l,
            e,
            i,
            s.state
          ))), t && a === null)
            throw Error(c(528, ""));
          return s;
        }
        if (t && a !== null)
          throw Error(c(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (n = Bl(n), t = al(
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
  function Il(e) {
    return 'href="' + tn(e) + '"';
  }
  function Li(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Gm(e) {
    return ne({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Zy(e, t, n, a) {
    if (t = e.querySelector(
      'link[rel="preload"][as="style"][' + t + "]"
    )) {
      if (t[fu] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      t = e.createElement("link"), t[fu] = !0, t.onload = t.onerror = Po.bind(null, t), _t(t, "link", n), dt(t), e.head.appendChild(t);
    a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    });
  }
  function Bl(e) {
    return '[src="' + tn(e) + '"]';
  }
  function Ii(e) {
    return "script[async]" + e;
  }
  function Ym(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + tn(n.href) + '"]'
          );
          if (a)
            return t.instance = a, dt(a), a;
          var l = ne({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), dt(a), _t(a, "style", l), Tr(a, n.precedence, e), t.instance = a;
        case "stylesheet":
          l = Il(n.href);
          var i = e.querySelector(
            Li(l)
          );
          if (i)
            return t.state.loading |= 4, t.instance = i, dt(i), i;
          a = Gm(n), (l = on.get(l)) && uo(a, l), i = (e.ownerDocument || e).createElement("link"), dt(i);
          var s = i;
          return s._p = new Promise(function(f, g) {
            s.onload = f, s.onerror = g;
          }), _t(i, "link", a), t.state.loading |= 4, Tr(i, n.precedence, e), t.instance = i;
        case "script":
          return i = Bl(n.src), (l = e.querySelector(
            Ii(i)
          )) ? (t.instance = l, dt(l), l) : (a = n, (l = on.get(i)) && (a = ne({}, n), ro(a, l)), e = e.ownerDocument || e, l = e.createElement("script"), dt(l), _t(l, "link", a), e.head.appendChild(l), t.instance = l);
        case "void":
          return null;
        default:
          throw Error(c(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (a = t.instance, t.state.loading |= 4, Tr(a, n.precedence, e));
    return t.instance;
  }
  function Tr(e, t, n) {
    for (var a = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), l = a.length ? a[a.length - 1] : null, i = l, s = 0; s < a.length; s++) {
      var f = a[s];
      if (f.dataset.precedence === t) i = f;
      else if (i !== l) break;
    }
    i ? i.parentNode.insertBefore(e, i.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function uo(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function ro(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Ar = null;
  function Xm(e, t, n) {
    if (Ar === null) {
      var a = /* @__PURE__ */ new Map(), l = Ar = /* @__PURE__ */ new Map();
      l.set(n, a);
    } else
      l = Ar, a = l.get(n), a || (a = /* @__PURE__ */ new Map(), l.set(n, a));
    if (a.has(e)) return a;
    for (a.set(e, null), n = n.getElementsByTagName(e), l = 0; l < n.length; l++) {
      var i = n[l];
      if (!(i[ei] || i[Et] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var s = i.getAttribute(t) || "";
        s = e + s;
        var f = a.get(s);
        f ? f.push(i) : a.set(s, [i]);
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
  function ky(e, t, n) {
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
  function Qm(e, t) {
    return e === "img" && t.src != null && t.src !== "" && t.onLoad == null && t.loading !== "lazy";
  }
  function Km(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function Zm(e) {
    return (e.width || 100) * (e.height || 100) * (typeof devicePixelRatio == "number" ? devicePixelRatio : 1) * 0.25;
  }
  function km(e, t) {
    typeof t.decode == "function" && (e.imgCount++, t.complete || (e.imgBytes += Zm(t), e.suspenseyImages.push(t)), e = $y.bind(e), t.decode().then(e, e));
  }
  function Jy(e, t, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var l = Il(a.href), i = t.querySelector(
          Li(l)
        );
        if (i) {
          t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Bi.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = i, dt(i);
          return;
        }
        i = t.ownerDocument || t, a = Gm(a), (l = on.get(l)) && uo(a, l), i = i.createElement("link"), dt(i);
        var s = i;
        s._p = new Promise(function(f, g) {
          s.onload = f, s.onerror = g;
        }), _t(i, "link", a), n.instance = i;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Bi.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var _r = 0;
  function Fy(e, t) {
    return e.stylesheets && e.count === 0 && wr(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && wr(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4 + t);
      0 < e.imgBytes && _r === 0 && (_r = 62500 * my());
      var l = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && wr(e, e.stylesheets), e.unsuspend)) {
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
  function Jm(e) {
    if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
      if (e.stylesheets) wr(e, e.stylesheets);
      else if (e.unsuspend) {
        var t = e.unsuspend;
        e.unsuspend = null, t();
      }
    }
  }
  function Bi() {
    this.count--, Jm(this);
  }
  function $y() {
    this.imgCount--, Jm(this);
  }
  var Nr = null;
  function wr(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Nr = /* @__PURE__ */ new Map(), t.forEach(Py, e), Nr = null, Bi.call(e));
  }
  function Py(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Nr.get(e);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Nr.set(e, n);
        for (var l = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), i = 0; i < l.length; i++) {
          var s = l[i];
          (s.nodeName === "LINK" || s.getAttribute("media") !== "not all") && (n.set(s.dataset.precedence, s), a = s);
        }
        a && n.set(null, a);
      }
      l = t.instance, s = l.getAttribute("data-precedence"), i = n.get(s) || a, i === a && n.set(null, l), n.set(s, l), this.count++, a = Bi.bind(this), l.addEventListener("load", a), l.addEventListener("error", a), i ? i.parentNode.insertBefore(l, i.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(l, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Vl = {
    $$typeof: B,
    Provider: null,
    Consumer: null,
    _currentValue: Wt,
    _currentValue2: Wt,
    _threadCount: 0
  };
  function Wy(e, t, n, a, l, i, s, f, g) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Gr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Gr(0), this.hiddenUpdates = Gr(null), this.identifierPrefix = a, this.onUncaughtError = l, this.onCaughtError = i, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = g, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Fm(e, t, n, a, l, i, s, f, g, w, D, I) {
    return e = new Wy(
      e,
      t,
      n,
      s,
      g,
      w,
      D,
      I,
      f
    ), t = 1, i === !0 && (t |= 24), i = Ht(3, null, null, t), e.current = i, i.stateNode = e, t = Ac(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: t
    }, Oc(i), e;
  }
  function $m(e) {
    return e ? (e = hl, e) : hl;
  }
  function Pm(e, t, n, a, l, i) {
    l = $m(l), a.context === null ? a.context = l : a.pendingContext = l, a = ra(t), a.payload = { element: n }, i = i === void 0 ? null : i, i !== null && (a.callback = i), n = ca(e, a, t), n !== null && (Bt(n, e, t), vi(n, e, t));
  }
  function Wm(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function so(e, t) {
    Wm(e, t), (e = e.alternate) && Wm(e, t);
  }
  function eg(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = qa(e, 67108864);
      t !== null && Bt(t, e, 67108864), so(e, 67108864);
    }
  }
  function tg(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = $t();
      t = Yr(t);
      var n = qa(e, t);
      n !== null && Bt(n, e, t), so(e, t);
    }
  }
  var Gl = !0;
  function e0(e, t, n, a) {
    var l = te.T;
    te.T = null;
    var i = pe.p;
    try {
      pe.p = 2, oo(e, t, n, a);
    } finally {
      pe.p = i, te.T = l;
    }
  }
  function t0(e, t, n, a) {
    var l = te.T;
    te.T = null;
    var i = pe.p;
    try {
      pe.p = 8, oo(e, t, n, a);
    } finally {
      pe.p = i, te.T = l;
    }
  }
  function oo(e, t, n, a) {
    if (Gl) {
      var l = fo(a);
      if (l === null)
        Qs(
          e,
          t,
          a,
          Or,
          n
        ), ag(e, a);
      else if (a0(
        l,
        e,
        t,
        n,
        a
      ))
        a.stopPropagation();
      else if (ag(e, a), t & 4 && -1 < n0.indexOf(e)) {
        for (; l !== null; ) {
          var i = nl(l);
          if (i !== null)
            switch (i.tag) {
              case 3:
                if (i = i.stateNode, i.current.memoizedState.isDehydrated) {
                  var s = Da(i.pendingLanes);
                  if (s !== 0) {
                    var f = i;
                    for (f.pendingLanes |= 2, f.entangledLanes |= 2; s; ) {
                      var g = 1 << 31 - Xt(s);
                      f.entanglements[1] |= g, s &= ~g;
                    }
                    zn(i), (Ie & 6) === 0 && (dr = Gt() + 500, zi(0));
                  }
                }
                break;
              case 31:
              case 13:
                f = qa(i, 2), f !== null && Bt(f, i, 2), gr(), so(i, 2);
            }
          if (i = fo(a), i === null && Qs(
            e,
            t,
            a,
            Or,
            n
          ), i === l) break;
          l = i;
        }
        l !== null && a.stopPropagation();
      } else
        Qs(
          e,
          t,
          a,
          null,
          n
        );
    }
  }
  function fo(e) {
    return e = Fr(e), ho(e);
  }
  var Or = null;
  function ho(e) {
    if (Or = null, e = za(e), e !== null) {
      var t = h(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = p(t), e !== null) return e;
          e = null;
        } else if (n === 31) {
          if (e = T(t), e !== null) return e;
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
  function ng(e) {
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
        switch (mp()) {
          case Bo:
            return 2;
          case Vo:
            return 8;
          case uu:
          case gp:
            return 32;
          case Go:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var mo = !1, ba = null, Sa = null, Ta = null, Vi = /* @__PURE__ */ new Map(), Gi = /* @__PURE__ */ new Map(), Aa = [], n0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function ag(e, t) {
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
        Vi.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        Gi.delete(t.pointerId);
    }
  }
  function Yi(e, t, n, a, l, i) {
    return e === null || e.nativeEvent !== i ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: a,
      nativeEvent: i,
      targetContainers: [l]
    }, t !== null && (t = nl(t), t !== null && eg(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function a0(e, t, n, a, l) {
    switch (t) {
      case "focusin":
        return ba = Yi(
          ba,
          e,
          t,
          n,
          a,
          l
        ), !0;
      case "dragenter":
        return Sa = Yi(
          Sa,
          e,
          t,
          n,
          a,
          l
        ), !0;
      case "mouseover":
        return Ta = Yi(
          Ta,
          e,
          t,
          n,
          a,
          l
        ), !0;
      case "pointerover":
        var i = l.pointerId;
        return Vi.set(
          i,
          Yi(
            Vi.get(i) || null,
            e,
            t,
            n,
            a,
            l
          )
        ), !0;
      case "gotpointercapture":
        return i = l.pointerId, Gi.set(
          i,
          Yi(
            Gi.get(i) || null,
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
  function lg(e) {
    var t = za(e.target);
    if (t !== null) {
      var n = h(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = p(n), t !== null) {
            e.blockedOn = t, Jo(e.priority, function() {
              tg(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = T(n), t !== null) {
            e.blockedOn = t, Jo(e.priority, function() {
              tg(n);
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
  function Cr(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = fo(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        Jr = a, n.target.dispatchEvent(a), Jr = null;
      } else
        return t = nl(n), t !== null && eg(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function ig(e, t, n) {
    Cr(e) && n.delete(t);
  }
  function l0() {
    mo = !1, ba !== null && Cr(ba) && (ba = null), Sa !== null && Cr(Sa) && (Sa = null), Ta !== null && Cr(Ta) && (Ta = null), Vi.forEach(ig), Gi.forEach(ig);
  }
  function Rr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, mo || (mo = !0, u.unstable_scheduleCallback(
      u.unstable_NormalPriority,
      l0
    )));
  }
  var xr = null;
  function ug(e) {
    xr !== e && (xr = e, u.unstable_scheduleCallback(
      u.unstable_NormalPriority,
      function() {
        xr === e && (xr = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], a = e[t + 1], l = e[t + 2];
          if (typeof a != "function") {
            if (ho(a || n) === null)
              continue;
            break;
          }
          var i = nl(n);
          i !== null && (e.splice(t, 3), t -= 3, kc(
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
  function Yl(e) {
    function t(g) {
      return Rr(g, e);
    }
    ba !== null && Rr(ba, e), Sa !== null && Rr(Sa, e), Ta !== null && Rr(Ta, e), Vi.forEach(t), Gi.forEach(t);
    for (var n = 0; n < Aa.length; n++) {
      var a = Aa[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Aa.length && (n = Aa[0], n.blockedOn === null); )
      lg(n), n.blockedOn === null && Aa.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var l = n[a], i = n[a + 1], s = l[jt] || null;
        if (typeof i == "function")
          s || ug(n);
        else if (s) {
          var f = null;
          if (i && i.hasAttribute("formAction")) {
            if (l = i, s = i[jt] || null)
              f = s.formAction;
            else if (ho(l) !== null) continue;
          } else f = s.action;
          typeof f == "function" ? n[a + 1] = f : (n.splice(a, 3), a -= 3), ug(n);
        }
      }
  }
  function rg() {
    function e(i) {
      i.canIntercept && i.info === "react-transition" && i.intercept({
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
  Ur.prototype.render = go.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(c(409));
    var n = t.current, a = $t();
    Pm(n, a, e, t, null, null);
  }, Ur.prototype.unmount = go.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Pm(e.current, 2, null, e, null, null), gr(), t[tl] = null;
    }
  };
  function Ur(e) {
    this._internalRoot = e;
  }
  Ur.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = ko();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Aa.length && t !== 0 && t < Aa[n].priority; n++) ;
      Aa.splice(n, 0, e), n === 0 && lg(e);
    }
  };
  var cg = r.version;
  if (cg !== "19.3.0")
    throw Error(
      c(
        527,
        cg,
        "19.3.0"
      )
    );
  pe.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","), Error(c(268, e)));
    return e = O(t), e = e !== null ? C(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var i0 = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: te,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Dr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Dr.isDisabled && Dr.supportsFiber)
      try {
        $l = Dr.inject(
          i0
        ), Yt = Dr;
      } catch {
      }
  }
  return Qi.createRoot = function(e, t) {
    if (!d(e)) throw Error(c(299));
    var n = !1, a = "", l = $d, i = Pd, s = Wd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (l = t.onUncaughtError), t.onCaughtError !== void 0 && (i = t.onCaughtError), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = Fm(
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
      s,
      rg
    ), e[tl] = t.current, Xs(e), new go(t);
  }, Qi.hydrateRoot = function(e, t, n) {
    if (!d(e)) throw Error(c(299));
    var a = !1, l = "", i = $d, s = Pd, f = Wd, g = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (i = n.onUncaughtError), n.onCaughtError !== void 0 && (s = n.onCaughtError), n.onRecoverableError !== void 0 && (f = n.onRecoverableError), n.formState !== void 0 && (g = n.formState)), t = Fm(
      e,
      1,
      !0,
      t,
      n ?? null,
      a,
      l,
      g,
      i,
      s,
      f,
      rg
    ), t.context = $m(null), n = t.current, a = $t(), a = Yr(a), l = ra(a), l.callback = null, ca(n, l, a), n = a, t.current.lanes = n, Wl(t, n), zn(t), e[tl] = t.current, Xs(e), new Ur(t);
  }, Qi.version = "19.3.0", Qi;
}
var yg;
function g0() {
  if (yg) return yo.exports;
  yg = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (r) {
        console.error(r);
      }
  }
  return u(), yo.exports = m0(), yo.exports;
}
var p0 = g0();
function jg(u, r) {
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
var v0 = 600, y0 = 120, E0 = 4e3, qg = 20, Eg = 4096, bg = 1e4, b0 = /* @__PURE__ */ new Set(["scroll_element", "click_sequence", "drag_element", "press_key"]), S0 = /* @__PURE__ */ new Set([
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
]), Lg = "hana-ui-", T0 = 512, A0 = 1, Sg = /* @__PURE__ */ new WeakMap(), Hr = /* @__PURE__ */ new WeakMap();
function Ql(u) {
  return typeof u == "object" && u !== null && !Array.isArray(u);
}
function Lr(u) {
  return u.nodeType === 9;
}
function Mo(u) {
  return Lr(u) ? u : u.ownerDocument;
}
function _0(u) {
  return Lr(u) ? u.body : u;
}
function Ig(u, r) {
  return r.isConnected && (Lr(u) ? r.ownerDocument === u : u.contains(r));
}
function Jl(u) {
  const r = u.ownerDocument.defaultView?.HTMLElement;
  return r ? u instanceof r : u instanceof HTMLElement;
}
function nu(u) {
  const r = u.ownerDocument.defaultView?.HTMLInputElement;
  return r ? u instanceof r : u instanceof HTMLInputElement;
}
function jo(u) {
  const r = u.ownerDocument.defaultView?.HTMLTextAreaElement;
  return r ? u instanceof r : u instanceof HTMLTextAreaElement;
}
function Bg(u) {
  const r = u.ownerDocument.defaultView?.HTMLButtonElement;
  return r ? u instanceof r : u instanceof HTMLButtonElement;
}
function N0(u) {
  const r = u.ownerDocument.defaultView?.HTMLSelectElement;
  return r ? u instanceof r : u.tagName === "SELECT";
}
function w0(u) {
  const r = u.ownerDocument.defaultView?.HTMLAnchorElement;
  return r ? u instanceof r : u.tagName === "A";
}
function Vg(u) {
  if (!Jl(u)) return !0;
  const r = u.ownerDocument.defaultView?.getComputedStyle(u);
  return !r || r.display !== "none" && r.visibility !== "hidden";
}
function O0(u) {
  return Jl(u) ? nu(u) || jo(u) || Bg(u) || N0(u) || w0(u) || u.hasAttribute("contenteditable") || u.hasAttribute("onclick") || ["button", "switch", "textbox", "combobox", "slider", "checkbox", "link"].includes(u.getAttribute("role") ?? "") : !1;
}
function C0(u) {
  const r = u.ownerDocument;
  let o = Sg.get(r);
  o || (o = /* @__PURE__ */ new WeakMap(), Sg.set(r, o));
  const c = o.get(u), d = Hr.get(r);
  if (c && d?.has(c)) return c;
  let h = c;
  if (!h)
    do
      h = `${Lg}${A0++}`;
    while (r.getElementById(h));
  o.set(u, h);
  let p = Hr.get(r);
  if (p || (p = /* @__PURE__ */ new Map(), Hr.set(r, p)), p.size >= T0) {
    const T = p.keys().next().value;
    T && p.delete(T);
  }
  return p.set(h, new WeakRef(u)), h;
}
function R0(u, r) {
  const o = u, c = { tagName: u.tagName.toLowerCase() };
  typeof o.id == "string" && o.id && (c.id = o.id.slice(0, 80)), typeof o.className == "string" && o.className.trim() && (c.className = o.className.trim().slice(0, 120));
  const d = o.textContent?.trim();
  return d && (c.text = d.slice(0, 160)), (nu(u) || jo(u)) && (u.disabled && (c.disabled = !0), u.type && (c.type = u.type)), o.id ? c.elementId = o.id : r && O0(u) && (c.elementId = C0(u)), c;
}
function x0(u, r) {
  const o = [], c = _0(u);
  if (!c) return { outline: o, visibleNodeCount: 0, totalNodeCount: 0, truncated: !1 };
  const d = Mo(u).createTreeWalker(c, 1);
  let h = d.currentNode, p = 0, T = 0;
  for (; h && T < v0; ) {
    if (h.nodeType === 1) {
      const R = h;
      T += 1, Vg(R) && (p += 1, o.length < y0 && o.push(R0(R, r)));
    }
    h = d.nextNode();
  }
  return { outline: o, visibleNodeCount: p, totalNodeCount: T, truncated: h !== null };
}
function Ro(u, r, o = !1) {
  if (typeof r != "string" || !r.trim()) return null;
  const c = r.trim(), d = Mo(u), h = c.startsWith(Lg) ? Hr.get(d)?.get(c)?.deref() ?? null : d.getElementById(c);
  return h && Ig(u, h) && (!o || Vg(h)) ? h : null;
}
function Gg(u) {
  return Jl(u) ? nu(u) && (u.type === "file" || u.disabled) ? { ok: !1, error: "This element cannot be clicked." } : Bg(u) && u.disabled ? { ok: !1, error: "This element cannot be clicked." } : (u.click(), { ok: !0 }) : { ok: !1, error: "Target is not an element." };
}
function Tg(u, r) {
  const o = nu(u) ? u.ownerDocument.defaultView?.HTMLInputElement.prototype : u.ownerDocument.defaultView?.HTMLTextAreaElement.prototype, c = o && Object.getOwnPropertyDescriptor(o, "value")?.set;
  c ? c.call(u, r) : u.value = r;
}
function U0(u, r, o) {
  const c = typeof r == "string" ? r.slice(0, E0) : "";
  if (nu(u)) {
    if (u.type === "file" || u.disabled || u.readOnly) return { ok: !1, error: "This element cannot accept text." };
    o ? Tg(u, `${u.value}${c}`) : u.value = `${u.value}${c}`;
  } else if (jo(u)) {
    if (u.disabled || u.readOnly) return { ok: !1, error: "This element cannot accept text." };
    o ? Tg(u, `${u.value}${c}`) : u.value = `${u.value}${c}`;
  } else return { ok: !1, error: "This element cannot accept text." };
  return u.dispatchEvent(new Event("input", { bubbles: !0 })), u.dispatchEvent(new Event("change", { bubbles: !0 })), { ok: !0 };
}
function $i(u, r) {
  const o = Ro(u, r, !0);
  return o && Jl(o) ? o : null;
}
function qr(u, r) {
  return typeof u == "number" && Number.isFinite(u) && Math.abs(u) <= r ? u : null;
}
function D0(u, r) {
  const o = r.scrollX === void 0 ? 0 : qr(r.scrollX, bg), c = r.scrollY === void 0 ? 0 : qr(r.scrollY, bg);
  if (o === null || c === null || o === 0 && c === 0) return { ok: !1, code: "UI_ACTION_SCROLL_INVALID", error: "scroll_element requires bounded non-zero scroll coordinates." };
  const d = r.elementId === void 0 ? Lr(u) ? u.scrollingElement ?? u.documentElement : u : $i(u, r.elementId);
  return !d || !Jl(d) ? { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No visible element matches this elementId." } : (d.scrollLeft += o, d.scrollTop += c, d.dispatchEvent(new Event("scroll", { bubbles: !1 })), { ok: !0, result: { scrollLeft: d.scrollLeft, scrollTop: d.scrollTop } });
}
function z0(u) {
  const r = Array.isArray(u.steps) ? u.steps : u.elementIds;
  if (!Array.isArray(r) || r.length < 1 || r.length > qg) return null;
  const o = r.map((c) => {
    if (typeof c == "string") return c.trim();
    if (!Ql(c)) return "";
    const d = typeof c.elementId == "string" ? c.elementId.trim() : "", h = Array.isArray(c.elementIds) && c.elementIds.length === 1 && typeof c.elementIds[0] == "string" ? c.elementIds[0].trim() : "";
    return d || h;
  });
  return o.every(Boolean) ? o : null;
}
function M0(u, r) {
  const o = z0(r);
  if (!o) return { ok: !1, code: "UI_ACTION_SEQUENCE_INVALID", error: "click_sequence requires one to twenty element IDs." };
  let c = 0;
  for (const [d, h] of o.entries()) {
    const p = $i(u, h);
    if (!p) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: `Sequence target ${d + 1} is unavailable.`, result: { completedCount: c, failedIndex: d } };
    const T = Gg(p);
    if (T.ok === !1) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_OPERABLE", error: T.error, result: { completedCount: c, failedIndex: d } };
    c += 1;
  }
  return { ok: !0, result: { completedCount: c } };
}
function To(u, r, o, c, d) {
  const h = u.ownerDocument.defaultView?.MouseEvent ?? MouseEvent;
  u.dispatchEvent(new h(r, { bubbles: !0, cancelable: !0, clientX: o, clientY: c, buttons: d }));
}
function Ao(u, r, o, c, d) {
  const h = u.ownerDocument.defaultView, p = h?.PointerEvent ?? h?.MouseEvent ?? MouseEvent;
  u.dispatchEvent(new p(r, { bubbles: !0, cancelable: !0, clientX: o, clientY: c, buttons: d }));
}
function j0(u, r) {
  const o = $i(u, r.elementId);
  if (!o) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No visible source element matches this elementId." };
  const c = r.deltaX === void 0 ? 0 : qr(r.deltaX, Eg), d = r.deltaY === void 0 ? 0 : qr(r.deltaY, Eg);
  if (c === null || d === null) return { ok: !1, code: "UI_ACTION_DRAG_INVALID", error: "drag_element coordinates must be finite and bounded." };
  const h = r.targetElementId === void 0 ? null : $i(u, r.targetElementId);
  if (r.targetElementId !== void 0 && !h) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No visible target element matches targetElementId." };
  if (!h && c === 0 && d === 0) return { ok: !1, code: "UI_ACTION_DRAG_TARGET_REQUIRED", error: "drag_element requires a target element or non-zero delta." };
  const p = o.getBoundingClientRect(), T = p.left + p.width / 2, R = p.top + p.height / 2, O = h?.getBoundingClientRect(), C = O ? O.left + O.width / 2 : T + c, v = O ? O.top + O.height / 2 : R + d, M = h ?? o;
  Ao(o, "pointerdown", T, R, 1), To(o, "mousedown", T, R, 1);
  for (const b of [0.25, 0.5, 0.75]) {
    const S = T + (C - T) * b, z = R + (v - R) * b;
    Ao(M, "pointermove", S, z, 1), To(M, "mousemove", S, z, 1);
  }
  return Ao(M, "pointerup", C, v, 0), To(M, "mouseup", C, v, 0), { ok: !0, result: { dragged: !0, endX: C, endY: v } };
}
function H0(u, r) {
  const o = r.key === void 0 ? r.keys : [r.key];
  if (!Array.isArray(o) || o.length < 1 || o.length > qg || o.some((R) => typeof R != "string")) return { ok: !1, code: "UI_ACTION_KEY_INVALID", error: "press_key requires supported key names or single characters." };
  const c = o.map((R) => R.trim());
  if (c.some((R) => !(R.length === 1 || S0.has(R)))) return { ok: !1, code: "UI_ACTION_KEY_INVALID", error: "press_key requires supported key names or single characters." };
  const d = Mo(u).activeElement, h = r.elementId === void 0 ? d && Ig(u, d) && Jl(d) ? d : null : $i(u, r.elementId);
  if (!h) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No focused visible element is available for press_key." };
  r.elementId !== void 0 && h.focus();
  const p = h.ownerDocument.defaultView?.KeyboardEvent ?? KeyboardEvent, T = { ctrlKey: r.ctrlKey === !0, metaKey: r.metaKey === !0, altKey: r.altKey === !0, shiftKey: r.shiftKey === !0 };
  for (const R of c)
    h.dispatchEvent(new p("keydown", { bubbles: !0, cancelable: !0, key: R, ...T })), h.dispatchEvent(new p("keyup", { bubbles: !0, cancelable: !0, key: R, ...T }));
  return { ok: !0, result: { pressedKeys: c } };
}
function Yg(u, r, o = !1) {
  const c = Ql(r) && typeof r.action == "string" ? r.action : "";
  if (c === "describe_dom") return { ok: !0, result: x0(u, o) };
  if (c === "read_state") return { ok: !0, result: { state: {} } };
  if (c === "click_element") {
    const d = Ro(u, Ql(r) ? r.elementId : null, o);
    if (!d) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No element matches this elementId." };
    const h = Gg(d);
    return h.ok === !0 ? { ok: !0, result: { clicked: !0 } } : { ok: !1, code: "UI_ACTION_ELEMENT_NOT_OPERABLE", error: h.error };
  }
  if (c === "type_text") {
    const d = Ro(u, Ql(r) ? r.elementId : null, o);
    if (!d) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No element matches this elementId." };
    const h = U0(d, Ql(r) ? r.text : "", o);
    return h.ok === !0 ? { ok: !0, result: { typed: !0 } } : { ok: !1, code: "UI_ACTION_ELEMENT_NOT_OPERABLE", error: h.error };
  }
  return b0.has(c) && !o ? { ok: !1, code: "UI_ACTION_UNSUPPORTED_FOR_APP_CARD", error: `App cards do not support ${c}.` } : Ql(r) ? c === "scroll_element" ? D0(u, r) : c === "click_sequence" ? M0(u, r) : c === "drag_element" ? j0(u, r) : c === "press_key" ? H0(u, r) : { ok: !1, code: "UI_ACTION_UNKNOWN_ACTION", error: `Unknown UI action: ${c || "(missing)"}.` } : { ok: !1, code: "UI_ACTION_UNKNOWN_ACTION", error: `Unknown UI action: ${c || "(missing)"}.` };
}
var ct = "hana.plugin.ui", st = 1, q0 = "X-Hana-App-Surface-Session", L0 = "appSurfaceSession", ki = {
  CONTEXT: "hana.input-panel.context",
  SUBMIT: "hana.input-panel.submit",
  PRESENTATION: "hana.input-panel.presentation"
}, Ag = 64 * 1024, Xg = {
  BAD_MESSAGE: "BAD_MESSAGE",
  UNSUPPORTED_VERSION: "UNSUPPORTED_VERSION"
}, je = {
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
}, I0 = {
  CHANGED: "hana.app.storage.changed"
}, Qg = { OPEN: "hana.cards.open" }, zr = {
  GET_ACTIVE: "hana.sessions.get-active",
  SUBSCRIBE: "hana.sessions.subscribe-active",
  UNSUBSCRIBE: "hana.sessions.unsubscribe-active",
  FOCUS: "hana.sessions.focus"
}, _g = {
  ACTIVE_CHANGED: "hana.sessions.active-changed",
  ERROR: "hana.sessions.error"
}, xo = {
  SET_INTERACTIVE_REGIONS: "hana.surface.set-interactive-regions"
};
function B0(u) {
  if (!Tn(u) || Object.keys(u).length !== 1 || !Array.isArray(u.regions))
    return { ok: !1, error: "hana.surface.setInteractiveRegions requires exactly one regions array." };
  if (u.regions.length > 64)
    return { ok: !1, error: "hana.surface.setInteractiveRegions accepts at most 64 regions." };
  const r = [];
  for (const o of u.regions) {
    if (!Tn(o) || Object.keys(o).length !== 4)
      return { ok: !1, error: "Each interactive region must contain exactly x, y, width, and height." };
    const { x: c, y: d, width: h, height: p } = o;
    if (typeof c != "number" || typeof d != "number" || typeof h != "number" || typeof p != "number" || !Number.isFinite(c) || !Number.isFinite(d) || !Number.isFinite(h) || !Number.isFinite(p))
      return { ok: !1, error: "Interactive region coordinates must be finite numbers." };
    if (h <= 0 || p <= 0 || Math.abs(c) > 1e6 || Math.abs(d) > 1e6 || Math.abs(h) > 1e6 || Math.abs(p) > 1e6)
      return { ok: !1, error: "Interactive region bounds are invalid." };
    r.push({ x: c, y: d, width: h, height: p });
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
}, V0 = 128;
function au(u) {
  if (typeof u != "string" || u.length === 0 || u.length > V0)
    return !1;
  for (let r = 0; r < u.length; r += 1) {
    const o = u.charCodeAt(r);
    if (o <= 31 || o === 127)
      return !1;
  }
  return !0;
}
function G0(u) {
  return !Tn(u) || !au(u.viewToken) ? { ok: !1, error: "A chrome binding requires a host-minted view token." } : u.resync !== void 0 && typeof u.resync != "boolean" ? { ok: !1, error: "A chrome binding resync flag must be a boolean when present." } : { ok: !0, value: { viewToken: u.viewToken, ...u.resync === void 0 ? {} : { resync: u.resync } } };
}
function Y0(u) {
  return !Tn(u) || !au(u.challengeId) ? { ok: !1, error: "A chrome challenge requires a host-minted challenge id." } : { ok: !0, value: { challengeId: u.challengeId } };
}
function X0(u) {
  return Tn(u) ? typeof u.requestId != "string" || u.requestId === "" ? { ok: !1, error: "App chrome action identity requires a non-empty requestId." } : !Number.isSafeInteger(u.revision) || u.revision <= 0 ? { ok: !1, error: "App chrome action identity requires a positive revision." } : !Number.isSafeInteger(u.generation) || u.generation <= 0 ? { ok: !1, error: "App chrome action identity requires a positive generation." } : au(u.viewToken) ? {
    ok: !0,
    value: {
      requestId: u.requestId,
      revision: u.revision,
      generation: u.generation,
      viewToken: u.viewToken
    }
  } : { ok: !1, error: "App chrome action identity requires the view token." } : { ok: !1, error: "App chrome action identity must be an object." };
}
function Q0(u) {
  if (!Tn(u))
    return { ok: !1, error: "App chrome action request must be an object." };
  const r = u.kind;
  if (r !== "action" && r !== "tab-select" && r !== "tab-close")
    return { ok: !1, error: 'App chrome action request kind must be "action", "tab-select" or "tab-close".' };
  const o = X0(u);
  if (o.ok === !1)
    return o;
  const c = o.value;
  return r === "action" ? typeof u.actionId != "string" || u.actionId === "" ? { ok: !1, error: "App chrome action request requires a non-empty actionId." } : { ok: !0, value: { kind: r, ...c, actionId: u.actionId } } : typeof u.tabId != "string" || u.tabId === "" ? { ok: !1, error: `App chrome ${r} request requires a non-empty tabId.` } : { ok: !0, value: { kind: r, ...c, tabId: u.tabId } };
}
var Ki = {
  /** App → host: register the current document/namespace, returning a bound handle. */
  ENABLE: "hana.app.view-state.enable",
  /** App → host: read the snapshot the handle's namespace currently holds. */
  GET: "hana.app.view-state.get",
  /** App → host: compare-and-swap the handle's namespace snapshot. */
  SET: "hana.app.view-state.set",
  /** App → host: release this handle's own registration. */
  RELEASE: "hana.app.view-state.release"
}, K0 = 256;
function Pi(u) {
  if (typeof u != "string" || u.length === 0 || u.length > K0 || u.trim().length === 0)
    return !1;
  for (let r = 0; r < u.length; r += 1) {
    const o = u.charCodeAt(r);
    if (o <= 31 || o === 127)
      return !1;
  }
  return !0;
}
function Ho(u, r) {
  const o = Reflect.ownKeys(u);
  if (o.length !== r.length)
    return !1;
  for (const c of o)
    if (typeof c != "string" || !r.includes(c))
      return !1;
  return !0;
}
function _o(u) {
  return !Tn(u) || !Ho(u, ["viewKind", "revision", "state"]) ? { ok: !1, error: "App view-state snapshot must carry exactly viewKind, revision and state." } : u.viewKind !== "compact" && u.viewKind !== "detached" ? { ok: !1, error: 'App view-state snapshot kind must be "compact" or "detached".' } : !Number.isSafeInteger(u.revision) || u.revision < 0 ? { ok: !1, error: "App view-state snapshot revision must be a non-negative safe integer." } : u.state === void 0 ? { ok: !1, error: "App view-state snapshot requires a state object or an explicit null." } : u.revision === 0 && u.state !== null ? { ok: !1, error: "App view-state revision 0 only carries a null state." } : { ok: !0, value: { viewKind: u.viewKind, revision: u.revision, state: u.state } };
}
function No(u) {
  return !Tn(u) || !Ho(u, ["viewToken", "bindingId", "registrationId", "snapshot"]) ? { ok: !1, error: "App view-state reply must echo exactly a view token, namespace binding id, registration id and snapshot." } : au(u.viewToken) ? Pi(u.bindingId) ? Pi(u.registrationId) ? {
    ok: !0,
    value: { viewToken: u.viewToken, bindingId: u.bindingId, registrationId: u.registrationId, snapshot: u.snapshot }
  } : { ok: !1, error: "App view-state reply requires an opaque registration id." } : { ok: !1, error: "App view-state reply requires an opaque namespace binding id." } : { ok: !1, error: "App view-state reply requires the host-minted view token." };
}
function Zi(u, r) {
  return u.viewToken !== r.viewToken || u.bindingId !== r.bindingId ? !1 : r.registrationId === void 0 ? !0 : u.registrationId === r.registrationId;
}
function Ng(u) {
  return !Tn(u) || !Ho(u, ["viewToken", "bindingId", "registrationId", "released"]) ? { ok: !1, error: "App view-state release reply must echo exactly a view token, namespace binding id, registration id and a boolean released flag." } : au(u.viewToken) ? Pi(u.bindingId) ? Pi(u.registrationId) ? typeof u.released != "boolean" ? { ok: !1, error: "App view-state release reply requires a boolean released flag." } : { ok: !0, value: { viewToken: u.viewToken, bindingId: u.bindingId, registrationId: u.registrationId, released: u.released } } : { ok: !1, error: "App view-state release reply requires an opaque registration id." } : { ok: !1, error: "App view-state release reply requires an opaque namespace binding id." } : { ok: !1, error: "App view-state release reply requires the host-minted view token." };
}
var Z0 = /^\/api\/apps\/([^/]+)\/ui(?:\/|$)/, k0 = /^\/api\/apps\/([^/]+)\/routes\/_runtime\/([^/]+)\/_surface\/([^/]+)\//;
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
    const c = r.charCodeAt(o);
    if (c <= 31 || c === 127)
      return null;
  }
  return r;
}
function qo(u) {
  if (typeof u != "string" || !u.startsWith("/api/apps/"))
    return null;
  const r = k0.exec(u);
  if (r) {
    const c = Mr(r[1]), d = Mr(r[2]), h = Mr(r[3]);
    return c === null || d === null || h === null ? null : { appId: c, kind: "runtime" };
  }
  const o = Z0.exec(u);
  if (o) {
    const c = Mr(o[1]);
    return c === null ? null : { appId: c, kind: "ui" };
  }
  return null;
}
var J0 = 256;
function Kg(u) {
  if (u !== void 0)
    return typeof u != "string" || u.length === 0 || u.length > J0 || u.includes("\0") || u.trim().length === 0 ? null : u;
}
var F0 = {
  CONTEXT: "hana.surface.context"
}, $0 = /* @__PURE__ */ new Set([
  "event",
  "request",
  "response",
  "error"
]);
function Tn(u) {
  return typeof u == "object" && u !== null;
}
function Na(u) {
  return {
    ok: !1,
    error: {
      code: Xg.BAD_MESSAGE,
      message: u
    }
  };
}
function Ji(u) {
  if (!Tn(u))
    return Na("Plugin UI messages must be objects.");
  if (u.protocol !== ct)
    return Na("Plugin UI message protocol is missing or invalid.");
  if (u.version !== st)
    return {
      ok: !1,
      error: {
        code: Xg.UNSUPPORTED_VERSION,
        message: `Unsupported Plugin UI protocol version: ${String(u.version)}.`
      }
    };
  if (typeof u.kind != "string" || !$0.has(u.kind))
    return Na("Plugin UI message kind is missing or invalid.");
  if (typeof u.type != "string" || u.type.trim() === "")
    return Na("Plugin UI message type must be a non-empty string.");
  const r = u.kind;
  if (r !== "event" && (typeof u.id != "string" || u.id.trim() === ""))
    return Na(`Plugin UI ${r} messages must include a non-empty id.`);
  if (r === "error") {
    if (!Tn(u.error))
      return Na("Plugin UI error messages must include an error object.");
    if (typeof u.error.code != "string" || u.error.code.trim() === "")
      return Na("Plugin UI error code must be a non-empty string.");
    if (typeof u.error.message != "string" || u.error.message.trim() === "")
      return Na("Plugin UI error message must be a non-empty string.");
  }
  return {
    ok: !0,
    value: u
  };
}
var P0 = [
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
], W0 = [
  "cards",
  "agentTypes",
  "configuration",
  "settingsTab",
  "page",
  "widget"
], eE = [
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
], tE = ["restricted", "full-access"];
new Set(P0);
new Set(W0);
new Set(eE);
new Set(tE);
var nE = Object.values(je);
new Set(nE);
var Fi = class extends Error {
  reason;
  constructor(u, r) {
    super(r), this.name = "AppCurrentViewBindingError", this.reason = u;
  }
};
function aE() {
  return `chrome-doc:${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`;
}
function lE(u) {
  return JSON.stringify([u.appId, u.cardInstanceId ?? null, u.instanceKey ?? null]);
}
function iE(u) {
  const r = aE();
  let o = null, c = !1, d, h = !0;
  const p = /* @__PURE__ */ new Set(), T = /* @__PURE__ */ new Set();
  let R = 0;
  const O = () => {
    R += 1;
  }, C = (X) => new Fi("unavailable", X), v = () => new Fi(
    "identity-changed",
    "The current App card identity changed while this view write waited."
  ), M = () => new Fi(
    "token-stale",
    "The held view token is no longer the current document."
  ), b = (X) => {
    p.delete(X), u.targetWindow.clearTimeout(X.timer), X.signal && X.onAbort && X.signal.removeEventListener("abort", X.onAbort);
  }, S = (X, he) => {
    b(X), X.reject(he);
  }, z = (X, he) => {
    const P = o !== X, ne = h;
    o = X, h = !0, (P || !ne) && O();
    for (const se of [...p]) {
      if (b(se), se.identity !== void 0 && se.identity !== d) {
        se.reject(v());
        continue;
      }
      se.resolve(X);
    }
    if (T.size === 0) return;
    const me = { changed: P, resync: he }, ae = R;
    for (const se of [...T]) {
      if (c || ae !== R) return;
      T.has(se) && se.listener(me);
    }
  };
  return {
    handleHostMessage: (X) => {
      const he = X.type === Zl.CHALLENGE, P = X.type === Zl.BINDING;
      if (!he && !P) return !1;
      if (c) return !0;
      if (he && X.kind === "event") {
        const ne = Y0(X.payload);
        return ne.ok === !0 && (u.post({
          protocol: ct,
          version: st,
          kind: "event",
          type: Zl.ACK,
          payload: { challengeId: ne.value.challengeId, documentNonce: r }
        }), c || u.reannounceReady?.()), !0;
      }
      if (P && X.kind === "event") {
        const ne = G0(X.payload);
        return ne.ok === !0 && z(ne.value.viewToken, ne.value.resync === !0), !0;
      }
      return !0;
    },
    applySurfaceContext: (X) => {
      if (c) return;
      if (X === null) {
        if (!h) return;
        h = !1, O();
        return;
      }
      const he = lE(X);
      if (d !== he) {
        if (d !== void 0) {
          for (const P of [...p]) S(P, v());
          o = null;
        }
        d = he, O();
      }
    },
    currentToken() {
      return !c && h ? o : null;
    },
    waitForToken: (X, he) => c ? Promise.reject(C("The current App card view binding was released.")) : he?.aborted ? Promise.reject(C("The current App card view wait was aborted.")) : o && h ? Promise.resolve(o) : new Promise((P, ne) => {
      const me = {
        resolve: P,
        reject: ne,
        identity: d,
        timer: u.targetWindow.setTimeout(() => {
          b(me), ne(C("The host has not bound this App card view; the current view is unavailable here."));
        }, X)
      };
      he && (me.signal = he, me.onAbort = () => S(me, C("The current App card view wait was aborted.")), he.addEventListener("abort", me.onAbort)), p.add(me);
    }),
    assertCurrentToken: (X) => {
      if (c) throw C("The current App card view binding was released.");
      if (!h || !o)
        throw C("The current App card view is not writable here right now.");
      if (o !== X) throw M();
    },
    onBinding(X) {
      if (c) return () => {
      };
      const he = { listener: X };
      return T.add(he), () => {
        T.delete(he);
      };
    },
    dispose() {
      if (!c) {
        c = !0, o = null, h = !1;
        for (const X of [...p])
          S(X, C("The current App card view binding was released."));
        p.clear(), T.clear();
      }
    }
  };
}
function uE(u, r) {
  let o = null, c = 0;
  const d = (p) => {
    const T = u();
    T && r({
      protocol: ct,
      version: st,
      kind: "event",
      type: Zl.SCROLL,
      payload: { scrolled: p, viewToken: T }
    });
  }, h = (p) => {
    const T = o;
    T && (o = null, T.detach(), p && T.scrolled && d(!1));
  };
  return {
    register(p) {
      if (!p || typeof p.scrollTop != "number" || typeof p.addEventListener != "function")
        throw new TypeError("hana.chrome.registerScrollSource requires an element.");
      h(!0);
      const T = ++c, R = p.ownerDocument?.defaultView, O = { generation: T, scrolled: p.scrollTop > 0, detach: () => {
      } }, C = () => {
        if (!o || o.generation !== T) return;
        const b = p.scrollTop > 0;
        b !== o.scrolled && (o.scrolled = b, d(b));
      };
      p.addEventListener("scroll", C, { passive: !0 });
      const v = R?.ResizeObserver, M = v ? new v(C) : null;
      return M?.observe(p), O.detach = () => {
        p.removeEventListener("scroll", C), M?.disconnect();
      }, o = O, O.scrolled && d(!0), () => {
        if (!o || o.generation !== T) return;
        const b = o;
        o = null, b.detach(), b.scrolled && d(!1);
      };
    },
    /** The host bound this document (or re-bound it): report the real state. */
    flush() {
      o?.scrolled && d(!0);
    },
    dispose: () => h(!1)
  };
}
function rE(u) {
  const r = { requestId: u.requestId, revision: u.revision };
  return u.kind === "action" ? { ...r, kind: "action", actionId: u.actionId } : u.kind === "tab-select" ? { ...r, kind: "tab-select", tabId: u.tabId } : { ...r, kind: "tab-close", tabId: u.tabId };
}
var cE = 1e4;
function sE(u) {
  const r = u.requestTimeoutMs ?? cE, o = u.currentView;
  let c = !1, d = null;
  const h = new AbortController(), p = uE(() => c ? null : o.currentToken(), u.post), T = o.onBinding((H) => {
    c || (H.changed || H.resync) && p.flush();
  }), R = () => Object.assign(
    new Error("The App card business identity changed; this chrome write is stale."),
    { code: Fn.VIEW_STALE }
  ), O = () => Object.assign(
    new Error("The host has not bound this App card view; chrome is unavailable here."),
    { code: Fn.UNAVAILABLE }
  ), C = () => Object.assign(
    new Error("The App chrome view was released."),
    { code: Fn.UNAVAILABLE }
  ), v = (H) => H instanceof Fi ? H.reason === "unavailable" ? O() : R() : H, M = (H, $) => {
    u.post({
      protocol: ct,
      version: st,
      id: H.id,
      type: H.type,
      ...$
    });
  }, b = (H) => {
    if (H.type !== Zl.ACTION) return !1;
    if (c) return !0;
    if (H.kind !== "request") return !1;
    const $ = Q0(H.payload);
    if ($.ok === !1)
      return M(H, { kind: "error", error: { code: Fn.BAD_PAYLOAD, message: $.error } }), !0;
    const J = $.value, Z = {
      requestId: J.requestId,
      revision: J.revision,
      generation: J.generation,
      viewToken: J.viewToken
    }, X = d;
    if (!X)
      return M(H, {
        kind: "error",
        payload: Z,
        error: { code: Fn.ACTION_UNHANDLED, message: "This App has no chrome action handler." }
      }), !0;
    if (J.viewToken !== o.currentToken())
      return M(H, {
        kind: "error",
        payload: Z,
        error: { code: Fn.VIEW_STALE, message: "This chrome action belongs to a replaced view." }
      }), !0;
    const he = () => !c && d === X && J.viewToken === o.currentToken();
    return Promise.resolve().then(async () => {
      if (!he()) {
        M(H, {
          kind: "error",
          payload: Z,
          error: { code: Fn.VIEW_STALE, message: "This chrome action belongs to a replaced view." }
        });
        return;
      }
      let P;
      try {
        P = await X.fn(rE(J));
      } catch (ne) {
        if (!he()) return;
        M(H, {
          kind: "error",
          payload: Z,
          error: {
            code: Fn.ACTION_FAILED,
            message: ne instanceof Error ? ne.message : "The App chrome action handler failed."
          }
        });
        return;
      }
      he() && M(H, {
        kind: "response",
        payload: {
          ...Z,
          status: P && P.status === "rejected" ? "rejected" : "handled",
          ...P && typeof P.message == "string" && P.message ? { message: P.message } : {}
        }
      });
    }), !0;
  }, S = () => p.dispose();
  u.targetWindow.addEventListener("pagehide", S);
  const z = (H) => {
    if (c)
      throw Object.assign(new Error(`The App chrome view was released; ${H} is unavailable.`), { code: Fn.UNAVAILABLE });
  };
  return {
    api: {
      set(H, $) {
        const J = $?.timeoutMs ?? r;
        return o.waitForToken(J, h.signal).then(
          (Z) => {
            z("hana.chrome.set");
            try {
              o.assertCurrentToken(Z);
            } catch (X) {
              throw v(X);
            }
            return u.request(Zl.SET, { description: H, viewToken: Z }, { timeoutMs: J });
          },
          (Z) => {
            throw c ? C() : v(Z);
          }
        );
      },
      onAction(H) {
        if (z("hana.chrome.onAction"), typeof H != "function") throw new TypeError("hana.chrome.onAction requires a handler.");
        const $ = { fn: H };
        return d = $, () => {
          d === $ && (d = null);
        };
      },
      registerScrollSource(H) {
        return z("hana.chrome.registerScrollSource"), p.register(H);
      }
    },
    handleHostMessage: b,
    dispose() {
      c || (c = !0, h.abort(), u.targetWindow.removeEventListener("pagehide", S), T(), d = null, p.dispose());
    }
  };
}
var oE = 16, fE = 4096, dE = 24 * 1024, pt = class extends Error {
  code;
  constructor(u, r) {
    super(r), this.name = "AppViewStateError", this.code = u;
  }
}, hE = new TextEncoder();
function mE(u) {
  return hE.encode(u).length;
}
function gE(u) {
  if (typeof u != "object" || u === null || Array.isArray(u)) return !1;
  const r = Object.getPrototypeOf(u);
  return r === Object.prototype || r === null;
}
function pE(u) {
  const r = Number(u);
  return !Number.isInteger(r) || r < 0 || String(r) !== u ? null : r;
}
function Zg(u) {
  return u === "input" ? "VIEW_STATE_INVALID_INPUT" : "VIEW_STATE_INVALID_STORAGE";
}
function vE(u, r) {
  const o = Zg(r), c = /* @__PURE__ */ new Set();
  let d = 0;
  const h = (p, T) => {
    if (d += 1, d > fE)
      throw new pt(o, "App view state contains too many values.");
    if (T > oE)
      throw new pt(o, "App view state is nested too deeply.");
    if (p === null) return null;
    const R = typeof p;
    if (R === "string" || R === "boolean") return p;
    if (R === "number") {
      if (!Number.isFinite(p))
        throw new pt(o, "App view state numbers must be finite.");
      return p;
    }
    if (R !== "object")
      throw new pt(o, "App view state must contain only JSON values.");
    const O = p;
    if (c.has(O))
      throw new pt(o, "App view state must not contain cycles.");
    const C = Object.getPrototypeOf(O);
    if (Array.isArray(O)) {
      if (C !== Array.prototype)
        throw new pt(o, "App view state must contain only plain arrays.");
      c.add(O);
      const M = O.length;
      for (const S of Reflect.ownKeys(O)) {
        if (typeof S != "string")
          throw new pt(o, "App view state must not contain symbol keys.");
        if (S === "length") {
          const $ = Object.getOwnPropertyDescriptor(O, "length");
          if ($.enumerable || $.get || $.set)
            throw new pt(o, "App view state arrays must expose a plain length.");
          continue;
        }
        const z = pE(S);
        if (z === null || z >= M)
          throw new pt(o, "App view state arrays must not carry extra keys.");
        const H = Object.getOwnPropertyDescriptor(O, S);
        if (!H.enumerable || H.get || H.set)
          throw new pt(o, "App view state arrays must index plain values.");
      }
      const b = [];
      for (let S = 0; S < M; S++) {
        const z = Object.getOwnPropertyDescriptor(O, String(S));
        if (!z)
          throw new pt(o, "App view state must not contain sparse arrays.");
        b.push(h(z.value, T + 1));
      }
      return c.delete(O), b;
    }
    if (C !== Object.prototype && C !== null)
      throw new pt(o, "App view state must contain only plain objects.");
    c.add(O);
    const v = /* @__PURE__ */ Object.create(null);
    for (const M of Reflect.ownKeys(O)) {
      if (typeof M != "string")
        throw new pt(o, "App view state must not contain symbol keys.");
      const b = Object.getOwnPropertyDescriptor(O, M);
      if (!b.enumerable)
        throw new pt(o, "App view state must not contain non-enumerable fields.");
      if (b.get || b.set)
        throw new pt(o, "App view state must not contain accessors.");
      v[M] = h(b.value, T + 1);
    }
    return c.delete(O), v;
  };
  return h(u, 0);
}
function yE(u, r) {
  if (u === null) return null;
  if (!gE(u))
    throw new pt(
      Zg(r),
      "App view state must be a JSON object or null."
    );
  return vE(u, r);
}
function EE(u, r) {
  if (u === null) return null;
  const o = JSON.stringify(u);
  if (mE(o) > dE)
    throw new pt(
      "VIEW_STATE_TOO_LARGE",
      "App view state exceeds the size budget."
    );
  return JSON.parse(o);
}
function Uo(u) {
  return EE(yE(u, "input"));
}
var ye = {
  UNAVAILABLE: "VIEW_STATE_UNAVAILABLE",
  VIEW_STALE: "VIEW_STATE_VIEW_STALE",
  RELEASED: "VIEW_STATE_RELEASED",
  INVALID_INPUT: "VIEW_STATE_INVALID_INPUT",
  BAD_RESPONSE: "VIEW_STATE_BAD_RESPONSE"
}, bE = class extends Error {
  code;
  constructor(u, r) {
    super(r), this.name = "AppViewStateRequestError", this.code = u;
  }
}, SE = 1e4;
function Ee(u, r) {
  return new bE(u, r);
}
function TE(u) {
  return {
    viewKind: u.viewKind,
    revision: u.revision,
    state: Uo(u.state)
  };
}
function AE(u) {
  const r = u.requestTimeoutMs ?? SE;
  let o = !1, c = 0, d = null;
  const h = /* @__PURE__ */ new Map();
  let p = null, T = null, R = !1;
  const O = (B) => B instanceof Fi ? B.reason === "unavailable" ? Ee(ye.UNAVAILABLE, "The App card view is not writable here right now.") : Ee(ye.VIEW_STALE, "The App card view this operation was bound to is no longer current.") : B, C = (B, L) => {
    !B || B.terminated !== null || (B.terminated = L, B.lifetime.abort());
  }, v = (B) => {
    C(d, B), d = null;
    for (const L of h.values()) L.abort.abort();
    h.clear();
  }, M = (B) => {
    if (o || B === null) return;
    if (B.slot !== "card") {
      v("namespace-changed"), T = null, R = !0, p = null;
      return;
    }
    const L = JSON.stringify([B.appId, B.cardInstanceId, B.instanceKey ?? null]), k = B.viewState?.bindingId ?? null;
    (R && T !== L || k !== null && p !== null && k !== p) && v("namespace-changed"), T = L, R = !0, k !== null && (p = k);
  }, b = (B) => {
    if (!o && B.changed) {
      C(d, "document-changed"), d = null;
      for (const L of h.values())
        L.tokenCaptured && L.abort.abort();
    }
  }, S = u.subscribeContext(M), z = u.currentView.onBinding(b), H = (B) => u.currentView.currentToken() === B, $ = (B) => {
    try {
      u.currentView.assertCurrentToken(B);
    } catch (L) {
      throw O(L);
    }
  }, J = (B) => {
    const L = u.getContext();
    if (!L || L.slot !== "card")
      throw Ee(ye.UNAVAILABLE, "The App view-state namespace is not available on this surface.");
    const k = L.viewState;
    if (!k)
      throw Ee(ye.UNAVAILABLE, "The App view-state namespace is not available here right now.");
    if (k.bindingId !== B.bindingId || k.viewKind !== B.viewKind)
      throw Ee(ye.VIEW_STALE, "This view-state handle belongs to a namespace that is no longer current.");
    if (k.available !== !0)
      throw Ee(ye.UNAVAILABLE, "The App view-state namespace is temporarily unavailable.");
  }, Z = (B) => B === "document-changed" || B === "namespace-changed" ? Ee(ye.VIEW_STALE, "This view-state handle's view changed before the operation could be adopted.") : Ee(ye.RELEASED, "This view-state handle has been released."), X = (B) => {
    if (o)
      throw Ee(ye.RELEASED, "The App view-state controller was released.");
    if (B.terminated !== null) throw Z(B.terminated);
    if (B.lifetime.signal.aborted)
      throw Ee(ye.RELEASED, "This view-state handle has been released.");
    if (d !== B)
      throw Ee(ye.VIEW_STALE, "This view-state handle is no longer the current registration.");
    return $(B.viewToken), J(B), B.viewToken;
  }, he = (B, L) => {
    if (o)
      throw Ee(ye.RELEASED, "The App view-state controller was released.");
    if (B.terminated !== null) throw Z(B.terminated);
    if (B.lifetime.signal.aborted)
      throw Ee(ye.RELEASED, "This view-state handle has been released.");
    if (!H(L))
      throw Ee(ye.VIEW_STALE, "The document changed before this view-state reply arrived.");
    const k = u.getContext(), K = k?.viewState;
    if (!k || k.slot !== "card" || !K || K.bindingId !== B.bindingId || K.viewKind !== B.viewKind)
      throw Ee(ye.VIEW_STALE, "The namespace changed before this view-state reply arrived.");
    if (K.available !== !0)
      throw Ee(ye.UNAVAILABLE, "The App view-state namespace paused before this reply arrived.");
  }, P = async (B, L, k, K) => {
    try {
      return await u.request(B, L, { timeoutMs: k });
    } catch (oe) {
      if (K !== null) {
        if (K.terminated !== null) throw Z(K.terminated);
        if (K.lifetime.signal.aborted)
          throw Ee(ye.RELEASED, "This view-state handle has been released.");
      }
      throw o ? Ee(ye.RELEASED, "The App view-state controller was released.") : oe;
    }
  }, ne = (B, L) => {
    if (L.viewKind !== B)
      throw Ee(ye.BAD_RESPONSE, "The view-state reply carried a different view kind than the operation targeted.");
    let k;
    try {
      k = Uo(L.state);
    } catch (K) {
      throw K instanceof pt ? Ee(ye.BAD_RESPONSE, "The view-state reply carried a state outside the shared JSON budget.") : K;
    }
    return { viewKind: B, revision: L.revision, state: k };
  }, me = async (B, L) => {
    const k = L?.timeoutMs ?? r, K = X(B), oe = await P(Ki.GET, {
      viewToken: K,
      bindingId: B.bindingId,
      registrationId: B.registrationId
    }, k, B);
    he(B, K);
    const de = No(oe);
    if (de.ok === !1)
      throw Ee(ye.BAD_RESPONSE, de.error);
    if (!Zi(de.value, {
      viewToken: K,
      bindingId: B.bindingId,
      registrationId: B.registrationId
    }))
      throw Ee(ye.VIEW_STALE, "This view-state reply answered a different view than the one this handle targets.");
    const ze = _o(de.value.snapshot);
    if (ze.ok === !1)
      throw Ee(ye.BAD_RESPONSE, ze.error);
    return ne(B.viewKind, ze.value);
  }, ae = async (B, L, k) => {
    const K = k?.timeoutMs ?? r, oe = _E(L), de = Uo(L.state), ze = X(B), Le = await P(Ki.SET, {
      viewToken: ze,
      bindingId: B.bindingId,
      registrationId: B.registrationId,
      expectedRevision: oe,
      state: de
    }, K, B);
    he(B, ze);
    const Se = No(Le);
    if (Se.ok === !1)
      throw Ee(ye.BAD_RESPONSE, Se.error);
    if (!Zi(Se.value, {
      viewToken: ze,
      bindingId: B.bindingId,
      registrationId: B.registrationId
    }))
      throw Ee(ye.VIEW_STALE, "This view-state reply answered a different view than the one this handle targets.");
    const E = _o(Se.value.snapshot);
    if (E.ok === !1)
      throw Ee(ye.BAD_RESPONSE, E.error);
    return ne(B.viewKind, E.value);
  }, se = async (B, L, k) => {
    if (!H(B)) return;
    const K = u.getContext();
    if (!(!K || K.slot !== "card" || K.viewState?.bindingId !== L))
      try {
        const oe = await u.request(Ki.RELEASE, { viewToken: B, bindingId: L, registrationId: k }, { timeoutMs: r }), de = Ng(oe);
        (de.ok === !1 || !Zi(de.value, { viewToken: B, bindingId: L, registrationId: k })) && console.error("[hana] App view-state cleanup reply did not confirm the released registration.");
      } catch (oe) {
        console.error("[hana] failed to release a superseded App view-state registration:", oe instanceof Error ? oe.message : oe);
      }
  }, ge = (B, L) => (B.releasePromise || (B.releasePromise = (async () => {
    const k = L?.timeoutMs ?? r;
    C(B, "released"), d === B && (d = null);
    const K = u.getContext(), oe = K?.viewState;
    if (!(H(B.viewToken) && K?.slot === "card" && !!oe && oe.bindingId === B.bindingId)) return { released: !1 };
    const ze = await u.request(Ki.RELEASE, {
      viewToken: B.viewToken,
      bindingId: B.bindingId,
      registrationId: B.registrationId
    }, { timeoutMs: k }), Le = Ng(ze);
    if (Le.ok === !1)
      throw Ee(ye.BAD_RESPONSE, Le.error);
    if (!Zi(Le.value, {
      viewToken: B.viewToken,
      bindingId: B.bindingId,
      registrationId: B.registrationId
    }))
      throw Ee(ye.VIEW_STALE, "This view-state release reply answered a different view than the one this handle targets.");
    const Se = u.getContext();
    if (!H(B.viewToken) || Se?.slot !== "card" || Se.viewState?.bindingId !== B.bindingId || Se.viewState?.viewKind !== B.viewKind)
      throw Ee(ye.VIEW_STALE, "The namespace changed before this view-state release was confirmed.");
    return { released: Le.value.released };
  })()), B.releasePromise), we = (B, L, k, K, oe) => {
    const de = new AbortController(), ze = {
      viewToken: B,
      bindingId: L,
      viewKind: k,
      registrationId: K,
      lifetime: de,
      initial: oe,
      releasePromise: null,
      terminated: null
    };
    return ze.handle = {
      get initial() {
        return TE(ze.initial);
      },
      signal: de.signal,
      get: (Le) => me(ze, Le),
      set: (Le, Se) => ae(ze, Le, Se),
      release: (Le) => ge(ze, Le)
    }, ze;
  };
  return {
    api: { enable: async (B) => {
      const L = B?.timeoutMs ?? r;
      if (o) throw Ee(ye.RELEASED, "The App view-state controller was released.");
      const k = u.getContext();
      if (k && k.slot !== "card")
        throw Ee(ye.UNAVAILABLE, "View-state recovery is only available on an App card surface.");
      const K = k?.viewState?.bindingId ?? null, oe = ++c;
      v("superseded");
      const de = new AbortController(), ze = { abort: de, tokenCaptured: !1 };
      h.set(oe, ze);
      let Le = null;
      try {
        let Se;
        try {
          Se = await u.currentView.waitForToken(L, de.signal);
        } catch (pe) {
          throw o ? Ee(ye.RELEASED, "The App view-state controller was released.") : de.signal.aborted ? Ee(ye.VIEW_STALE, "A newer view-state enable replaced this one before it was bound.") : O(pe);
        }
        if (ze.tokenCaptured = !0, o) throw Ee(ye.RELEASED, "The App view-state controller was released.");
        if (oe !== c || de.signal.aborted)
          throw Ee(ye.VIEW_STALE, "A newer view-state enable replaced this one before it was bound.");
        $(Se);
        const E = u.getContext(), G = E?.viewState;
        if (!E || E.slot !== "card" || !G || G.available !== !0)
          throw Ee(ye.UNAVAILABLE, "The App view-state namespace is not available here right now.");
        if (K !== null && K !== G.bindingId)
          throw Ee(ye.VIEW_STALE, "The App view-state namespace changed before this enable was sent.");
        $(Se);
        const ie = await P(Ki.ENABLE, {
          viewToken: Se,
          bindingId: G.bindingId
        }, L, null), ee = No(ie);
        if (ee.ok === !1)
          throw Ee(ye.BAD_RESPONSE, ee.error);
        if (!Zi(ee.value, { viewToken: Se, bindingId: G.bindingId }))
          throw Ee(ye.VIEW_STALE, "This view-state enable reply answered a different view than the one that was enabled.");
        if (Le = { token: Se, bindingId: G.bindingId, registrationId: ee.value.registrationId }, o) throw Ee(ye.RELEASED, "The App view-state controller was released.");
        if (oe !== c || de.signal.aborted || !h.has(oe))
          throw Ee(ye.VIEW_STALE, "This view-state enable was voided before its reply arrived.");
        if (!H(Se))
          throw Ee(ye.VIEW_STALE, "The document changed before this view-state enable reply arrived.");
        const Te = u.getContext();
        if (!Te || Te.slot !== "card" || Te.viewState?.bindingId !== G.bindingId || Te.viewState?.viewKind !== G.viewKind)
          throw Ee(ye.VIEW_STALE, "The namespace changed before this view-state enable reply arrived.");
        if (Te.viewState?.available !== !0)
          throw Ee(ye.UNAVAILABLE, "The App view-state namespace paused before this enable was confirmed.");
        const Ae = _o(ee.value.snapshot);
        if (Ae.ok === !1)
          throw Ee(ye.BAD_RESPONSE, Ae.error);
        const xe = ne(G.viewKind, Ae.value), te = we(Se, G.bindingId, G.viewKind, ee.value.registrationId, xe);
        return d = te, Le = null, te.handle;
      } catch (Se) {
        throw Le !== null && await se(Le.token, Le.bindingId, Le.registrationId), Se;
      } finally {
        h.delete(oe);
      }
    } },
    dispose() {
      if (!o) {
        o = !0, c += 1, C(d, "disposed"), d = null;
        for (const B of h.values()) B.abort.abort();
        h.clear(), S(), z();
      }
    }
  };
}
function _E(u) {
  if (typeof u != "object" || u === null)
    throw Ee(ye.INVALID_INPUT, "View-state set requires an object with an expected revision and a state.");
  const r = u.expectedRevision;
  if (!Number.isSafeInteger(r) || r < 0)
    throw Ee(ye.INVALID_INPUT, "View-state set requires a non-negative safe-integer expected revision.");
  return r;
}
var kg = /* @__PURE__ */ new WeakMap();
function Jg(u, r) {
  kg.set(u, r);
}
function Fg(u) {
  const r = kg.get(u);
  return r ? r() : null;
}
function kl(u) {
  return typeof u == "object" && u !== null && !Array.isArray(u);
}
function Wi(u) {
  const r = /* @__PURE__ */ new Set(), o = (d, h) => {
    if (h > 32) throw new Error("Input panel JSON exceeds the maximum depth of 32.");
    if (d === null || typeof d == "string" || typeof d == "boolean" || typeof d == "number" && Number.isFinite(d)) return d;
    if (typeof d != "object" || d === null) throw new Error("Input panel values must be valid JSON.");
    if (r.has(d)) throw new Error("Input panel values must not contain cycles.");
    const p = Object.getPrototypeOf(d);
    if (!Array.isArray(d) && p !== Object.prototype && p !== null)
      throw new Error("Input panel values must contain only JSON objects and arrays.");
    if (Object.getOwnPropertySymbols(d).length > 0) throw new Error("Input panel JSON must not contain symbol keys.");
    r.add(d);
    let T;
    if (Array.isArray(d)) {
      const R = [];
      for (let O = 0; O < d.length; O++) {
        if (!Object.prototype.hasOwnProperty.call(d, O)) throw new Error("Input panel JSON must not contain sparse arrays.");
        R.push(o(d[O], h + 1));
      }
      T = R;
    } else {
      const R = /* @__PURE__ */ Object.create(null);
      for (const O of Object.keys(d)) R[O] = o(d[O], h + 1);
      T = R;
    }
    return r.delete(d), T;
  }, c = JSON.stringify(o(u, 0));
  if (new TextEncoder().encode(c).byteLength > Ag)
    throw new Error(`Input panel JSON exceeds ${Ag} bytes.`);
  return JSON.parse(c);
}
function $g(u) {
  if (!kl(u)) throw new Error("Input panel context must be an object.");
  for (const c of ["appId", "sessionId", "panelId", "instanceId"])
    if (typeof u[c] != "string" || !u[c].trim()) throw new Error(`Input panel context is missing ${c}.`);
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
  if (!kl(o) || Object.keys(o).some((c) => c !== "height" && c !== "collapsedHeight" && c !== "expanded") || o.height !== null && (typeof o.height != "number" || !Number.isFinite(o.height) || o.height < 24 || o.height > 4096) || typeof o.collapsedHeight != "number" || !Number.isFinite(o.collapsedHeight) || o.collapsedHeight < 24 || o.collapsedHeight > 4096 || typeof o.expanded != "boolean")
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
    data: Wi(u.data ?? null),
    requestedSchema: Wi(u.requestedSchema ?? null),
    presentation: { height: o.height, collapsedHeight: o.collapsedHeight, expanded: o.expanded }
  };
}
function jr(u) {
  return { ...u, data: Wi(u.data), requestedSchema: Wi(u.requestedSchema), presentation: { ...u.presentation } };
}
function NE(u) {
  if (!kl(u) || Object.keys(u).some((c) => c !== "height" && c !== "collapsedHeight" && c !== "expanded"))
    throw new TypeError("hana.inputPanel.setPresentation requires height, collapsedHeight, or expanded.");
  const r = Object.getPrototypeOf(u);
  if (r !== Object.prototype && r !== null || Object.getOwnPropertySymbols(u).length || Object.values(Object.getOwnPropertyDescriptors(u)).some((c) => !c.enumerable || !("value" in c)))
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
function wE(u, r) {
  if (!kl(u) || !kl(u.presentation) || !Number.isSafeInteger(u.presentationRevision)) throw new Error("The input panel presentation response is invalid.");
  const o = $g({ ...r, presentation: u.presentation, presentationRevision: u.presentationRevision });
  return { presentation: o.presentation, presentationRevision: o.presentationRevision };
}
function OE(u) {
  let r = null, o = 0, c = null, d = 0;
  const h = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Set(), T = () => {
    for (const b of p) b(r ? jr(r) : null);
  }, R = () => {
    r = null, o++;
    for (const b of h.values())
      clearTimeout(b.timeout), b.reject(new Error("The input panel binding was replaced."));
    h.clear(), T();
  }, O = (b) => {
    for (const S of h.values())
      clearTimeout(S.timeout), S.reject(new Error(b));
    h.clear();
  }, C = (b, S, z) => u({
    protocol: ct,
    version: st,
    id: b.id,
    kind: "error",
    type: b.type,
    error: { code: S, message: z }
  });
  function v(b) {
    if (b.kind === "event" && b.type === ki.CONTEXT) {
      if (b.payload === null) R();
      else {
        let Z;
        try {
          Z = $g(b.payload);
        } catch (he) {
          return R(), console.warn("[hana] invalid input panel context:", he), !0;
        }
        const X = r?.panelId === Z.panelId && r.appId === Z.appId && r.sessionId === Z.sessionId && r.confirmId === Z.confirmId && r.status === Z.status && r.instanceId === Z.instanceId && r.revision === Z.revision;
        if (X && r && Z.presentationRevision < r.presentationRevision) return !0;
        X || O("The input panel binding was replaced."), r = Z, X || o++, T();
      }
      return !0;
    }
    if ((b.kind === "response" || b.kind === "error") && b.type === ki.PRESENTATION && b.id) {
      const Z = h.get(b.id);
      if (!Z) return !1;
      if (h.delete(b.id), clearTimeout(Z.timeout), Z.generation !== o)
        Z.reject(new Error("The input panel binding was replaced."));
      else if (b.kind === "error") Z.reject(new Error(b.error?.message || "The input panel presentation could not be updated."));
      else
        try {
          const X = wE(b.payload, r);
          r && X.presentationRevision >= r.presentationRevision && (r = { ...r, ...X }, T()), Z.resolve(X);
        } catch (X) {
          Z.reject(X instanceof Error ? X : new Error("The input panel presentation response is invalid."));
        }
      return !0;
    }
    if (b.kind !== "request" || b.type !== ki.SUBMIT) return !1;
    if (!b.id) return !0;
    const S = b.payload, z = r;
    if (!kl(S) || !z || z.status !== "pending" || !z.confirmId || S.panelId !== z.panelId || S.instanceId !== z.instanceId || S.revision !== z.revision)
      return C(b, "INPUT_PANEL_STALE", "This request does not match the active input panel question."), !0;
    const H = c;
    if (!H && z.requestedSchema !== null)
      return C(b, "INPUT_PANEL_SUBMIT_UNHANDLED", "Register hana.inputPanel.onSubmit to provide this question’s answer."), !0;
    const $ = o, J = {
      panelId: z.panelId,
      instanceId: z.instanceId,
      revision: z.revision
    };
    return Promise.resolve().then(() => H ? H(jr(z)) : null).then((Z) => {
      if (o !== $) {
        C(b, "INPUT_PANEL_STALE", "The input panel changed before its answer was ready.");
        return;
      }
      u({
        protocol: ct,
        version: st,
        id: b.id,
        kind: "response",
        type: b.type,
        payload: { ...J, value: Wi(Z) }
      });
    }).catch((Z) => {
      C(b, "INPUT_PANEL_SUBMIT_FAILED", Z instanceof Error ? Z.message : "The input panel could not provide an answer.");
    }), !0;
  }
  return { api: {
    getContext: () => r ? jr(r) : null,
    onContextChanged(b) {
      return p.add(b), b(r ? jr(r) : null), () => {
        p.delete(b);
      };
    },
    onSubmit(b) {
      if (typeof b != "function") throw new TypeError("hana.inputPanel.onSubmit requires a function.");
      return c = b, () => {
        c === b && (c = null);
      };
    },
    async setPresentation(b) {
      const S = r, z = NE(b);
      if (!S) throw new Error("The input panel is not ready.");
      const H = o, $ = `input-panel-presentation:${S.panelId}:${S.instanceId}:${Date.now().toString(36)}:${++d}`;
      return new Promise((J, Z) => {
        const X = setTimeout(() => {
          h.delete($), Z(new Error("The input panel presentation request timed out."));
        }, 1e4);
        h.set($, { generation: H, resolve: J, reject: Z, timeout: X });
        const he = (P) => {
          const ne = h.get($);
          ne && (h.delete($), clearTimeout(ne.timeout), ne.reject(P instanceof Error ? P : new Error("The input panel presentation request could not be delivered.")));
        };
        try {
          u({
            protocol: ct,
            version: st,
            id: $,
            kind: "request",
            type: ki.PRESENTATION,
            payload: { panelId: S.panelId, instanceId: S.instanceId, revision: S.revision, presentationRevision: S.presentationRevision, presentation: z }
          }, he);
        } catch (P) {
          he(P);
        }
        if (o !== H) {
          const P = h.get($);
          P && (h.delete($), clearTimeout(P.timeout), P.reject(new Error("The input panel binding was replaced.")));
        }
      });
    }
  }, handleMessage: v, clear: R };
}
var Oa = class extends Error {
  name = "HanaPluginError";
  code;
  details;
  constructor(u) {
    super(u.message), this.code = u.code, this.details = u.details;
  }
}, wg = 0, lu = 60, CE = 240;
function RE() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : (wg += 1, `hana-plugin-${Date.now()}-${wg}`);
}
function xE() {
  if (typeof window > "u")
    throw new Error("@hana/plugin-sdk requires a browser iframe window.");
  return window;
}
var Og = "data-hana-theme-style";
async function UE(u, r) {
  const o = await fetch(r, { credentials: "same-origin" });
  if (!o.ok)
    throw new Error(`hana theme stylesheet request failed with ${o.status}`);
  const c = await o.text(), d = u.head ?? u.documentElement;
  if (!d) throw new Error("hana theme stylesheet has nowhere to attach");
  let h = u.querySelector(`style[${Og}]`);
  h || (h = u.createElement("style"), h.setAttribute(Og, "")), h.textContent = c, d.appendChild(h);
}
function DE(u) {
  if (typeof u != "object" || u === null) return !1;
  const r = u;
  return ["light", "dark"].every((o) => {
    const c = r[o];
    return typeof c == "object" && c !== null && typeof c.theme == "string" && typeof c.cssUrl == "string";
  });
}
function zE(u) {
  const r = new URLSearchParams(u.location.search), o = r.get("hana-theme-appearance"), c = r.get("hana-palette-light-theme"), d = r.get("hana-palette-light-css"), h = r.get("hana-palette-dark-theme"), p = r.get("hana-palette-dark-css");
  return {
    theme: r.get("hana-theme") ?? void 0,
    cssUrl: r.get("hana-css") ?? void 0,
    appearance: o === "light" || o === "dark" ? o : void 0,
    palettes: c && d && h && p ? { light: { theme: c, cssUrl: d }, dark: { theme: h, cssUrl: p } } : void 0
  };
}
function Pg(u, r = lu) {
  return typeof u != "number" || !Number.isFinite(u) ? r : Math.max(0, Math.min(CE, Math.round(u)));
}
function Wg({
  visible: u,
  maxFrameRate: r,
  slot: o,
  reason: c
}) {
  const d = u ? Pg(r) : 0, h = u && d > 0;
  return {
    visible: u,
    active: h,
    maxFrameRate: h ? d : 0,
    motion: h ? "full" : "paused",
    ...o === "page" || o === "widget" || o === "card" || o === "settings" || o === "function-panel" || o === "slot" ? { slot: o } : {},
    ...c ? { reason: c } : {}
  };
}
function ME(u) {
  const r = new URLSearchParams(u.location.search), o = r.get("hana-visible"), c = !(o === "0" || o === "false"), d = r.get("hana-max-fps"), h = d === null ? NaN : Number(d), p = Number.isFinite(h) ? h : lu;
  return Wg({
    visible: c,
    maxFrameRate: p,
    reason: "initial"
  });
}
function jE(u, r) {
  if (typeof u != "object" || u === null) return null;
  const o = u, c = typeof o.visible == "boolean" ? o.visible : r.visible, d = Pg(
    o.maxFrameRate,
    r.maxFrameRate > 0 ? r.maxFrameRate : lu
  ), h = typeof o.active == "boolean" ? o.active && c && d > 0 : c && d > 0, p = o.motion, T = p === "full" || p === "reduced" || p === "paused" ? p : h ? "full" : "paused", R = typeof o.slot == "string" ? o.slot : r.slot, O = typeof o.reason == "string" ? o.reason : r.reason;
  return {
    visible: c,
    active: h,
    maxFrameRate: h ? d : 0,
    motion: h ? T : "paused",
    ...R === "page" || R === "widget" || R === "card" || R === "settings" || R === "function-panel" || R === "slot" ? { slot: R } : {},
    ...O ? { reason: O } : {}
  };
}
function HE(u, r) {
  if (typeof u != "object" || u === null) return null;
  const o = u.visible;
  return typeof o != "boolean" ? null : Wg({
    visible: o,
    maxFrameRate: o && r.maxFrameRate > 0 ? r.maxFrameRate : lu,
    slot: r.slot,
    reason: "legacy-visibility"
  });
}
function qE(u, r) {
  return u.visible === r.visible && u.active === r.active && u.maxFrameRate === r.maxFrameRate && u.motion === r.motion && u.slot === r.slot && u.reason === r.reason;
}
function wo(u) {
  return {
    width: { ...u.width },
    height: { ...u.height }
  };
}
function Cg(u) {
  if (typeof u != "object" || u === null) return null;
  const r = u;
  return r.mode === "fixed" ? typeof r.value != "number" || !Number.isFinite(r.value) ? null : { mode: "fixed", value: Math.round(r.value) } : r.mode === "flexible" ? typeof r.max != "number" || !Number.isFinite(r.max) ? null : { mode: "flexible", max: Math.round(r.max) } : r.mode === "unbounded" ? { mode: "unbounded" } : null;
}
function LE(u) {
  if (typeof u != "object" || u === null) return null;
  const r = u, o = Cg(r.width), c = Cg(r.height);
  return !o || !c ? null : { width: o, height: c };
}
function Rg(u) {
  if (u === null) return null;
  if (typeof u == "string") return u;
}
function IE(u) {
  if (typeof u != "object" || u === null || Array.isArray(u)) return;
  const r = u;
  if (Pi(r.bindingId) && !(r.viewKind !== "compact" && r.viewKind !== "detached") && typeof r.available == "boolean")
    return { bindingId: r.bindingId, viewKind: r.viewKind, available: r.available };
}
function BE(u) {
  if (typeof u != "object" || u === null || Array.isArray(u)) return null;
  const r = u, o = typeof r.appId == "string" && r.appId.trim() ? r.appId.trim() : null, c = r.slot, d = r.cardInstanceId;
  if (!o || c !== "card" && c !== "function-panel" && c !== "settings" && c !== "slot" && c !== "input-panel") return null;
  const h = Rg(r.embeddedSessionId), p = Rg(r.originSessionId), T = Kg(r.instanceKey);
  if (T === null) return null;
  const R = IE(r.viewState), O = typeof d == "string" && !!d.trim();
  if (T !== void 0 && !O) return null;
  const C = {};
  return h !== void 0 && (C.embeddedSessionId = h), p !== void 0 && (C.originSessionId = p), T !== void 0 && (C.instanceKey = T), R !== void 0 && (C.viewState = R), c === "settings" || c === "input-panel" ? d === null ? { appId: o, slot: c, cardInstanceId: null, ...C } : null : O ? { appId: o, slot: c, cardInstanceId: d.trim(), ...C } : c !== "card" || d !== null || typeof r.embeddedSessionId != "string" || !r.embeddedSessionId.trim() ? null : { appId: o, slot: c, cardInstanceId: null, ...C };
}
function Oo(u) {
  return {
    ...u,
    ...u.viewState ? { viewState: { ...u.viewState } } : {}
  };
}
function xg(u) {
  if (typeof u != "object" || u === null || Array.isArray(u)) return null;
  const r = u, o = typeof r.sessionId == "string" && r.sessionId.trim() ? r.sessionId : null, c = typeof r.sessionPath == "string" && r.sessionPath ? r.sessionPath : null;
  return !o || !c || r.title !== null && typeof r.title != "string" || r.agentId !== null && typeof r.agentId != "string" ? null : {
    sessionId: o,
    sessionPath: c,
    title: r.title,
    agentId: r.agentId
  };
}
function VE(u) {
  if (typeof u != "object" || u === null || Array.isArray(u)) return null;
  const r = u, o = r.previous === null ? null : xg(r.previous), c = r.current === null ? null : xg(r.current);
  return r.previous !== null && o === null || r.current !== null && c === null || typeof r.timestamp != "number" || !Number.isFinite(r.timestamp) ? null : { previous: o, current: c, timestamp: r.timestamp };
}
function GE(u) {
  if (typeof u != "object" || u === null || Array.isArray(u)) return null;
  const r = u;
  return typeof r.code != "string" || !r.code.trim() || typeof r.message != "string" || !r.message.trim() ? null : new Oa({ code: r.code, message: r.message });
}
function YE(u) {
  return typeof u == "string" ? { url: u } : u;
}
function XE(u) {
  return typeof u == "string" ? { text: u } : u;
}
function ep(u) {
  const r = qo(u.location.pathname || "");
  if (!r)
    throw new Error("App asset/API URL helper requires an App surface route under /api/apps/:appId/ui/ or a scoped service mount.");
  return r.appId;
}
function QE(u, r) {
  if (!r || !["card", "function-panel", "settings", "slot"].includes(r.slot)) return !1;
  try {
    return ep(u) === r.appId;
  } catch {
    return !1;
  }
}
function KE(u) {
  if (typeof u != "string" || u.length === 0)
    throw new Error("Invalid plugin asset path.");
  if (u.includes("\\") || u.includes("\0") || /^[a-z][a-z0-9+.-]*:/i.test(u))
    throw new Error("Invalid plugin asset path.");
  const r = u.replace(/^\/+/, "");
  if (!r || r.startsWith("./"))
    throw new Error("Invalid plugin asset path.");
  const o = r.split("/");
  if (o.some((c) => !c || c === "." || c === ".." || c.startsWith(".")))
    throw new Error("Invalid plugin asset path.");
  return o.map((c) => encodeURIComponent(c)).join("/");
}
function ZE(u) {
  return new URLSearchParams(u.location.search).get("hana-asset-base") || null;
}
function kE(u, r) {
  const o = KE(r), c = ZE(u);
  if (!c)
    throw new Error(
      "hana.assets.url() requires the host-issued hana-asset-base query parameter: this page was not opened by the host with an asset base; hana.assets.url() only works inside a Hana app surface."
    );
  const d = new URL(c);
  return d.pathname = `${d.pathname.replace(/\/+$/, "")}/${o}`, d.toString();
}
function tp(u) {
  return new URLSearchParams(u.location.search).get(L0) || null;
}
function JE(u) {
  if (typeof u != "string" || u.length === 0)
    throw new Error("Invalid plugin API path.");
  const r = u.trim();
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
    let O;
    try {
      O = decodeURIComponent(R);
    } catch {
      throw new Error("Invalid plugin API path.");
    }
    if (O === "." || O === ".." || O.includes("/") || O.includes("\\"))
      throw new Error("Invalid plugin API path.");
  }
  const p = new URL(`http://hana.local/${o}`);
  return `${h.map((R) => encodeURIComponent(decodeURIComponent(R))).join("/")}${p.search}`;
}
function np(u, r, o = !1) {
  const c = ep(u);
  let d = JE(r);
  if (o && d.startsWith("_runtime/")) {
    const h = tp(u);
    if (!h) throw new Error("hana.api.url for a managed service requires appSurfaceSession in the iframe URL.");
    const p = /^(_runtime\/[^/?]+)\/(.+)$/.exec(d);
    if (!p || p[2].startsWith("_surface/")) throw new Error("Invalid managed service API path.");
    d = `${p[1]}/_surface/${encodeURIComponent(h)}/${p[2]}`;
  }
  return `${u.location.origin}/api/apps/${encodeURIComponent(c)}/routes/${d}`;
}
function FE(u, r, o, c) {
  const d = tp(u);
  if (!d)
    throw new Error("hana.api.fetch requires appSurfaceSession in the iframe URL.");
  const h = u.fetch?.bind(u) ?? globalThis.fetch?.bind(globalThis);
  if (!h)
    throw new Error("hana.api.fetch requires window.fetch.");
  const p = o ?? {}, T = new Headers(p.headers);
  return T.set(q0, d), c && T.set("X-Hana-Document-Binding", c), h(np(u, r), {
    ...p,
    headers: T
  });
}
function $E(u) {
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
function PE(u, r) {
  if (typeof r != "object" || r === null) return !1;
  const o = r;
  return u.kind === "global" ? o.kind === "global" : o.kind === "agent" && o.agentId === u.agentId;
}
function ap(u = {}) {
  const r = u.targetWindow ?? xE(), o = u.parentWindow ?? r.parent, c = jg(r, u.targetOrigin), d = u.requestTimeoutMs ?? 1e4, h = u.idFactory ?? RE, p = OE(Se), T = iE({
    targetWindow: r,
    post: Se,
    // A host that rebound its bridge to this same document gets a fresh
    // handshake by re-announcing the ready the page already sent.
    reannounceReady: () => {
      se && ie(ge);
    }
  }), R = sE({
    request: fe,
    post: Se,
    targetWindow: r,
    currentView: T,
    requestTimeoutMs: d
  }), O = u.followHostTheme !== !1;
  let C = zE(r), v = ME(r), M = null, b = null;
  const S = /* @__PURE__ */ new Set(), z = /* @__PURE__ */ new Set(), H = /* @__PURE__ */ new Set(), $ = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new Set(), Z = /* @__PURE__ */ new Set(), X = /* @__PURE__ */ new Set(), he = /* @__PURE__ */ new Set(), P = /* @__PURE__ */ new Set();
  let ne = null, me = null, ae = null, se = !1, ge, we = !1, ke = !1, ft = !1, B = Promise.resolve();
  const L = /* @__PURE__ */ new Map();
  let k = 1, K = null, oe = null, de = null, ze = !1;
  function Le(N) {
    if (!O || !N) return;
    const Y = r.document;
    Y && UE(Y, N).catch((j) => {
      if (u.onThemeError) {
        u.onThemeError(j);
        return;
      }
      console.error("[hana] failed to follow host theme", j);
    });
  }
  function Se(N, Y) {
    if (u.messageTransport) {
      const j = u.messageTransport.postMessage(N);
      j && j.catch(Y ?? ((V) => console.error("[hana] host message delivery failed", V)));
    } else o.postMessage(N, c);
  }
  function E(N) {
    if (u.messageTransport) return u.messageTransport.onMessage(N);
    const Y = (j) => {
      Hg(j, o, c) && N(j.data);
    };
    return r.addEventListener("message", Y), () => r.removeEventListener("message", Y);
  }
  function G(N, Y) {
    const j = {
      protocol: ct,
      version: st,
      kind: "event",
      type: N
    };
    Y !== void 0 && (j.payload = Y), Se(j);
  }
  function ie(N) {
    G("hana.ready", N);
  }
  function ee(N) {
    const Y = N instanceof Oa ? N : new Oa({
      code: "HOST_ERROR",
      message: N instanceof Error ? N.message : "Active session subscription failed."
    });
    let j = !1;
    for (const V of P)
      if (V.onError) {
        j = !0;
        try {
          V.onError(Y);
        } catch (ue) {
          console.error("[hana] active session error callback failed", ue);
        }
      }
    j || console.error("[hana] active session subscription failed", Y);
  }
  function Te() {
    return P.size > 0 && !ft && !ke;
  }
  function Ae() {
    B = B.catch(() => {
    }).then(async () => {
      for (; we !== Te(); ) {
        if (Te()) {
          try {
            if (await te(), (await fe(zr.SUBSCRIBE)).subscribed !== !0) {
              we = !1, ke || ee(new Oa({
                code: "HOST_ERROR",
                message: "The host did not establish the active session subscription."
              }));
              return;
            }
            we = !0;
          } catch (N) {
            we = !1, ee(N);
            return;
          }
          continue;
        }
        try {
          await te(), await fe(zr.UNSUBSCRIBE);
        } catch (N) {
          ee(N);
        }
        we = !1;
      }
    });
  }
  function xe(N) {
    const Y = r.document?.readyState;
    return Y !== "loading" && Y !== "interactive" ? Promise.resolve() : new Promise((j, V) => {
      const ue = () => {
        r.clearTimeout(vt), r.removeEventListener("load", He), r.removeEventListener("pagehide", Ke);
      }, He = () => {
        ue(), j();
      }, Ke = () => {
        ue(), V(new Oa({
          code: "SURFACE_UNAVAILABLE",
          message: "The App surface unloaded before interactive regions could be registered."
        }));
      }, vt = r.setTimeout(() => {
        ue(), V(new Oa({
          code: "TIMEOUT",
          message: "The App document did not finish loading before interactive regions could be registered."
        }));
      }, N);
      r.addEventListener("load", He), r.addEventListener("pagehide", Ke);
    });
  }
  function te(N) {
    return xe(N ?? d).then(() => {
      ie(ge);
    });
  }
  function pe(N) {
    const Y = r.requestAnimationFrame?.bind(r), j = r.cancelAnimationFrame?.bind(r);
    if (Y && j) {
      const ue = Y(N);
      return () => j(ue);
    }
    const V = r.setTimeout(() => {
      const ue = r.performance?.now?.() ?? Date.now();
      N(ue);
    }, Math.max(1, Math.round(1e3 / Math.max(v.maxFrameRate, lu))));
    return () => r.clearTimeout(V);
  }
  function Wt() {
    K && (K(), K = null);
  }
  function $n() {
    K || L.size === 0 || !v.active || v.maxFrameRate <= 0 || (K = pe((N) => {
      if (K = null, !v.active || v.maxFrameRate <= 0) return;
      const Y = 1e3 / v.maxFrameRate;
      if (oe !== null && N >= oe && N - oe < Y) {
        $n();
        return;
      }
      oe = N;
      const j = Array.from(L.entries());
      for (const [V, ue] of j)
        if (L.delete(V))
          try {
            ue(N);
          } catch (He) {
            r.setTimeout(() => {
              throw He;
            }, 0);
          }
      $n();
    }));
  }
  function Mn(N) {
    if (!qE(v, N)) {
      v = N;
      for (const Y of H) Y({ ...v });
      if (!v.active || v.maxFrameRate <= 0) {
        Wt();
        return;
      }
      $n();
    }
  }
  function en(N) {
    if (typeof N == "object" && N !== null && N.protocol === void 0 && N.type === "visibility-changed") {
      const V = HE(
        N.payload,
        v
      );
      V && Mn(V);
      return;
    }
    const Y = Ji(N);
    if (!Y.ok) return;
    const j = Y.value;
    if (!T.handleHostMessage(j) && !R.handleHostMessage(j)) {
      if (p.handleMessage(j)) {
        j.type === ki.CONTEXT && j.payload === null && se && ie(ge);
        return;
      }
      if (j.kind === "request" && j.type === "hana.document.view-request") {
        const V = typeof j.payload == "object" && j.payload !== null ? j.payload : null, ue = V && typeof V.requestId == "string" ? V.requestId : "", He = V && typeof V.documentId == "string" ? V.documentId : "", Ke = V && typeof V.viewId == "string" ? V.viewId : "", vt = V?.revision, Mt = V && typeof V.method == "string" ? V.method.trim() : "";
        if (!ue || !He || !Ke || !Mt || Mt.length > 128 || !Number.isSafeInteger(vt) || Number(vt) < 0) {
          Se({
            protocol: ct,
            version: st,
            id: j.id,
            kind: "error",
            type: j.type,
            error: { code: "DOCUMENT_VIEW_REQUEST_INVALID", message: "Invalid document view request." }
          });
          return;
        }
        if (!ae) {
          Se({
            protocol: ct,
            version: st,
            id: j.id,
            kind: "error",
            type: j.type,
            error: { code: "DOCUMENT_VIEW_REQUEST_UNHANDLED", message: "The document view cannot handle this request." }
          });
          return;
        }
        const yt = V?.payload, xa = ae;
        Promise.resolve().then(() => xa({
          requestId: ue,
          documentId: He,
          viewId: Ke,
          revision: vt,
          method: Mt,
          ...Object.prototype.hasOwnProperty.call(V, "payload") ? { payload: yt } : {}
        })).then((hn) => {
          Se({ protocol: ct, version: st, id: j.id, kind: "response", type: j.type, payload: hn });
        }, (hn) => {
          Se({
            protocol: ct,
            version: st,
            id: j.id,
            kind: "error",
            type: j.type,
            error: { code: "DOCUMENT_VIEW_REQUEST_FAILED", message: hn instanceof Error ? hn.message : "Document view request failed." }
          });
        });
        return;
      }
      if (j.kind === "request" && j.type === "hana.document.request") {
        const V = j.payload, ue = typeof V == "object" && V !== null ? V : null, He = ue && typeof ue.requestId == "string" ? ue.requestId : "", Ke = ue?.kind, vt = ue?.revision;
        if (!He || !["save", "prepareClose", "revert", "undo", "redo"].includes(String(Ke)) || !Number.isSafeInteger(vt)) {
          Se({
            protocol: ct,
            version: st,
            id: j.id,
            kind: "error",
            type: j.type,
            error: { code: "DOCUMENT_REQUEST_INVALID", message: "Invalid document request." }
          });
          return;
        }
        if (!me) {
          Se({
            protocol: ct,
            version: st,
            id: j.id,
            kind: "error",
            type: j.type,
            error: { code: "DOCUMENT_REQUEST_UNHANDLED", message: "The document editor cannot handle this request." }
          });
          return;
        }
        const Mt = {
          requestId: He,
          kind: Ke,
          revision: vt
        };
        Promise.resolve(me(Mt)).then((yt) => {
          Se({ protocol: ct, version: st, id: j.id, kind: "response", type: j.type, payload: yt });
        }, (yt) => {
          Se({
            protocol: ct,
            version: st,
            id: j.id,
            kind: "error",
            type: j.type,
            error: { code: "DOCUMENT_REQUEST_FAILED", message: yt instanceof Error ? yt.message : "Document request failed." }
          });
        });
        return;
      }
      if (j.kind === "request" && j.type === je.UI_ACTION) {
        const V = r.document, ue = V ? Yg(V, j.payload, QE(r, b)) : { ok: !1, code: "UI_ACTION_DOCUMENT_UNAVAILABLE", error: "No document is available." };
        ue.ok === !0 ? Se({
          protocol: ct,
          version: st,
          id: j.id,
          kind: "response",
          type: je.UI_ACTION,
          payload: ue.result
        }) : Se({
          protocol: ct,
          version: st,
          id: j.id,
          kind: "error",
          type: je.UI_ACTION,
          error: { code: ue.code, message: ue.error, ...ue.result ? { details: ue.result } : {} }
        });
        return;
      }
      if (j.kind === "event") {
        if (j.type === "hana.document.binding") {
          const V = j.payload, ue = typeof V == "object" && V !== null ? V.access : null;
          ne = typeof ue?.bindingId == "string" && ue.bindingId ? ue.bindingId : null;
          return;
        }
        if (j.type === Xl.THEME_CHANGED) {
          if (typeof j.payload != "object" || j.payload === null) return;
          const V = j.payload, ue = typeof V.theme == "string" ? V.theme : C.theme, He = typeof V.theme == "string" && V.theme !== C.theme;
          C = {
            theme: ue,
            cssUrl: typeof V.cssUrl == "string" ? V.cssUrl : C.cssUrl,
            appearance: V.appearance === "light" || V.appearance === "dark" ? V.appearance : He ? void 0 : C.appearance,
            palettes: DE(V.palettes) ? V.palettes : He ? void 0 : C.palettes
          };
          for (const Ke of S) Ke({ ...C });
          Le(C.cssUrl);
          return;
        }
        if (j.type === Xl.SURFACE_ENVELOPE_CHANGED) {
          const V = LE(j.payload);
          if (!V) return;
          M = V;
          for (const ue of z) ue(wo(M));
          return;
        }
        if (j.type === Xl.SURFACE_RUNTIME_CHANGED) {
          const V = jE(j.payload, v);
          V && Mn(V);
          return;
        }
        if (j.type === F0.CONTEXT) {
          const V = j.payload === null ? null : BE(j.payload);
          if (j.payload !== null && V === null) return;
          const ue = V?.appId !== b?.appId || V?.slot !== b?.slot || V?.cardInstanceId !== b?.cardInstanceId || V?.instanceKey !== b?.instanceKey || V?.embeddedSessionId !== b?.embeddedSessionId || V?.originSessionId !== b?.originSessionId || V?.viewState?.bindingId !== b?.viewState?.bindingId || V?.viewState?.viewKind !== b?.viewState?.viewKind || V?.viewState?.available !== b?.viewState?.available;
          if (T.applySurfaceContext(V === null ? null : { appId: V.appId, cardInstanceId: V.cardInstanceId, instanceKey: V.instanceKey ?? null }), b = V, ue)
            for (const He of $) He(b ? Oo(b) : null);
          return;
        }
        if (j.type === _g.ACTIVE_CHANGED) {
          if (ke) return;
          const V = VE(j.payload);
          if (!V) return;
          for (const ue of P) ue.callback(V);
          return;
        }
        if (j.type === _g.ERROR) {
          const V = GE(j.payload);
          if (!V) return;
          we = !1, ke = !0, ee(V), Ae();
          return;
        }
        if (j.type === Xl.STORAGE_CHANGED) {
          if (typeof j.payload != "object" || j.payload === null) return;
          const V = j.payload.keys, ue = Array.isArray(V) ? V.filter((He) => typeof He == "string") : [];
          for (const He of J) He(ue.slice());
          return;
        }
        if (j.type === I0.CHANGED) {
          if (typeof j.payload != "object" || j.payload === null) return;
          const V = j.payload, ue = V.keys, He = Array.isArray(ue) ? ue.filter((Ke) => typeof Ke == "string") : [];
          for (const Ke of Z)
            PE(Ke.scope, V.scope) && Ke.callback(He.slice());
          return;
        }
        if (j.type === Xl.PANEL_EVENT) {
          if (typeof j.payload != "object" || j.payload === null) return;
          const V = j.payload, ue = typeof V.sectionId == "string" ? V.sectionId : null, He = V.kind;
          if (!ue || He !== "select" && He !== "action" && He !== "toggle") return;
          const Ke = {
            sectionId: ue,
            kind: He,
            ...typeof V.itemId == "string" ? { itemId: V.itemId } : {},
            ...typeof V.checked == "boolean" ? { checked: V.checked } : {}
          };
          for (const vt of X) vt(Ke);
          return;
        }
        if (j.type === Xl.PANEL_REFRESH)
          for (const V of he) V();
      }
    }
  }
  E(en), r.addEventListener("pagehide", (N) => {
    p.clear(), ft = !0, Ae(), N?.persisted === !1 && (ze = !0, T.dispose(), de?.dispose(), R.dispose());
  }), r.addEventListener("pageshow", () => {
    ft && (ft = !1, Ae());
  });
  function fe(N, Y, j = {}) {
    const V = h(), ue = j.timeoutMs ?? d;
    return new Promise((He, Ke) => {
      let vt = () => {
      };
      const Mt = () => {
        vt(), r.clearTimeout(xa);
      }, yt = (Ua) => {
        const Fl = Ji(Ua);
        if (!Fl.ok) return;
        const mn = Fl.value;
        mn.id !== V || mn.type !== N || (mn.kind === "response" && (Mt(), He(mn.payload)), mn.kind === "error" && mn.error && (Mt(), Ke(new Oa(mn.error))));
      }, xa = r.setTimeout(() => {
        Mt(), Ke(new Oa({
          code: "TIMEOUT",
          message: `Plugin host request timed out: ${N}.`
        }));
      }, ue), hn = {
        protocol: ct,
        version: st,
        id: V,
        kind: "request",
        type: N
      };
      Y !== void 0 && (hn.payload = Y);
      try {
        vt = E(yt), Se(hn, (Ua) => {
          Mt(), Ke(Ua);
        });
      } catch (Ua) {
        Mt(), Ke(Ua);
      }
    });
  }
  function Ve(N) {
    return {
      get(Y, j) {
        return fe(Kl.GET, { scope: N, key: Y }, j);
      },
      getAll(Y) {
        return fe(Kl.GET_ALL, { scope: N }, Y);
      },
      set(Y, j, V) {
        return fe(Kl.SET, { scope: N, key: Y, value: j }, V);
      },
      delete(Y, j) {
        return fe(Kl.DELETE, { scope: N, key: Y }, j);
      },
      keys(Y) {
        return fe(Kl.KEYS, { scope: N }, Y);
      },
      onChanged(Y) {
        if (N.kind === "agent" && !N.agentId)
          throw new Error(
            "hana.storage.agent() with no agentId cannot subscribe with onChanged — a subscription outlives any single request, so pass an explicit agentId to subscribe to a stable scope."
          );
        const j = { scope: N, callback: Y };
        return Z.add(j), () => {
          Z.delete(j);
        };
      }
    };
  }
  const Vt = {
    ready(N) {
      se = !0, ge = N, ie(N);
    },
    inputPanel: p.api,
    assets: {
      url(N) {
        return kE(r, N);
      }
    },
    api: {
      url(N) {
        return np(r, N, !0);
      },
      fetch(N, Y) {
        return FE(r, N, Y, ne);
      }
    },
    ui: {
      resize(N) {
        G(je.UI_RESIZE, N);
      }
    },
    theme: {
      getSnapshot() {
        return { ...C };
      },
      subscribe(N) {
        return S.add(N), N({ ...C }), () => {
          S.delete(N);
        };
      }
    },
    envelope: {
      getSnapshot() {
        return M ? wo(M) : null;
      },
      subscribe(N) {
        return z.add(N), N(M ? wo(M) : null), () => {
          z.delete(N);
        };
      }
    },
    lifecycle: {
      getSnapshot() {
        return { ...v };
      },
      subscribe(N) {
        return H.add(N), N({ ...v }), () => {
          H.delete(N);
        };
      }
    },
    cards: {
      open(N, Y) {
        if (typeof N != "string" || !N.trim())
          return Promise.reject(new TypeError("hana.cards.open requires a non-empty declared card ID."));
        let j;
        if (Y !== void 0) {
          if (typeof Y != "object" || Y === null || Array.isArray(Y))
            return Promise.reject(new TypeError("hana.cards.open options must be an object."));
          if (Object.keys(Y).some((ue) => ue !== "instanceKey"))
            return Promise.reject(new TypeError("hana.cards.open options accepts only instanceKey."));
          const V = Kg(Y.instanceKey);
          if (V === null)
            return Promise.reject(new TypeError("hana.cards.open instanceKey must be a non-empty string of at most 256 code units without NUL."));
          j = V;
        }
        return fe(Qg.OPEN, {
          cardId: N.trim(),
          ...j === void 0 ? {} : { instanceKey: j }
        });
      }
    },
    surface: {
      getContext() {
        return b ? Oo(b) : null;
      },
      onContextChanged(N) {
        return $.add(N), N(b ? Oo(b) : null), () => {
          $.delete(N);
        };
      },
      setInteractiveRegions(N, Y) {
        const j = B0({ regions: N });
        return j.ok === !1 ? Promise.reject(new TypeError(j.error)) : se ? xe(Y?.timeoutMs ?? d).then(() => (ie(ge), fe(xo.SET_INTERACTIVE_REGIONS, j.value, Y))) : fe(xo.SET_INTERACTIVE_REGIONS, j.value, Y);
      }
    },
    sessions: {
      getActive(N) {
        return te(N?.timeoutMs).then(() => fe(zr.GET_ACTIVE, void 0, N));
      },
      focus(N, Y) {
        return !N || typeof N.sessionId != "string" || !N.sessionId.trim() ? Promise.reject(new TypeError("hana.sessions.focus requires a non-empty sessionId.")) : te(Y?.timeoutMs).then(() => fe(
          zr.FOCUS,
          { sessionId: N.sessionId.trim() },
          Y
        ));
      },
      onActiveChanged(N, Y) {
        const j = { callback: N, onError: Y };
        return ke = !1, P.add(j), Ae(), () => {
          P.delete(j) && Ae();
        };
      }
    },
    performance: {
      requestAnimationFrame(N) {
        const Y = k;
        return k += 1, L.set(Y, N), $n(), Y;
      },
      cancelAnimationFrame(N) {
        L.delete(N), L.size === 0 && Wt();
      }
    },
    host: {
      request: fe
    },
    chrome: R.api,
    toast: {
      show(N, Y) {
        return fe(je.TOAST_SHOW, N, Y);
      }
    },
    external: {
      open(N, Y) {
        return fe(je.EXTERNAL_OPEN, YE(N), Y);
      }
    },
    clipboard: {
      writeText(N, Y) {
        return fe(
          je.CLIPBOARD_WRITE_TEXT,
          XE(N),
          Y
        );
      }
    },
    resources: {
      open(N, Y) {
        return fe(je.RESOURCE_OPEN, N, Y);
      },
      pick(N = {}, Y) {
        return fe(je.RESOURCE_PICK, N, Y);
      },
      saveFile(N, Y) {
        return fe(je.RESOURCE_SAVE_FILE, N, Y);
      },
      requestAccess(N, Y) {
        return fe(
          je.RESOURCE_REQUEST_ACCESS,
          N,
          Y
        );
      }
    },
    document: {
      getContext(N) {
        return fe("hana.document.get-context", void 0, N);
      },
      read(N) {
        return fe("hana.document.read", void 0, N);
      },
      reportStatus(N, Y) {
        return fe("hana.document.report-status", N, Y);
      },
      open(N, Y) {
        return fe("hana.document.open", N, Y);
      },
      rebind(N, Y) {
        return fe("hana.document.rebind", N, Y);
      },
      openDrop(N, Y) {
        if (N.defaultPrevented) return Promise.resolve(null);
        const j = N.dataTransfer?.getData("application/x-hana-file-drag") || "";
        if (j) return fe("hana.document.open-drop", { dragId: j }, Y);
        const V = Array.from(N.dataTransfer?.files || []);
        return V.length !== 1 ? Promise.resolve(null) : fe("hana.document.open-drop", { file: V[0] }, Y);
      },
      onRequest(N) {
        return me = N, () => {
          me === N && (me = null);
        };
      },
      onViewRequest(N) {
        return ae = N, () => {
          ae === N && (ae = null);
        };
      }
    },
    state: {
      get(N, Y) {
        const j = typeof N == "string" && N ? { key: N } : {};
        return fe(je.STATE_GET, j, Y);
      },
      set(N, Y, j) {
        const V = typeof N == "string" ? { key: N, value: Y } : { state: N };
        return fe(je.STATE_SET, V, j);
      }
    },
    storage: {
      get(N, Y) {
        return fe(je.STORAGE_GET, { key: N }, Y);
      },
      getAll(N) {
        return fe(je.STORAGE_GET_ALL, {}, N);
      },
      set(N, Y, j) {
        return fe(je.STORAGE_SET, { key: N, value: Y }, j);
      },
      delete(N, Y) {
        return fe(je.STORAGE_DELETE, { key: N }, Y);
      },
      onChanged(N) {
        return J.add(N), () => {
          J.delete(N);
        };
      },
      global: Ve({ kind: "global" }),
      agent(N) {
        return Ve({ kind: "agent", agentId: N });
      }
    },
    emit(N, Y, j, V) {
      const ue = {
        name: N,
        userGesture: $E(r)
      };
      return arguments.length >= 2 && (ue.payload = Y), typeof j == "string" && j.trim() && (ue.to = j.trim()), fe(je.EMIT, ue, V);
    },
    track(N, Y, j) {
      const V = { name: N };
      return arguments.length >= 2 && (V.payload = Y), fe(je.TRACK, V, j);
    },
    panel: {
      set(N, Y) {
        return fe(je.PANEL_SET, N, Y);
      },
      onEvent(N) {
        return X.add(N), () => {
          X.delete(N);
        };
      },
      onRefresh(N) {
        return he.add(N), () => {
          he.delete(N);
        };
      }
    }
  };
  return Jg(Vt, () => ze ? null : (de ??= AE({
    request: fe,
    currentView: T,
    getContext: () => b,
    subscribeContext: (N) => ($.add(N), () => {
      $.delete(N);
    }),
    requestTimeoutMs: d
  }), de.api)), Vt;
}
var Ug = null;
function re() {
  return Ug ??= ap(), Ug;
}
var lp = {
  ready(u) {
    return re().ready(u);
  },
  inputPanel: {
    getContext() {
      return re().inputPanel.getContext();
    },
    onContextChanged(u) {
      return re().inputPanel.onContextChanged(u);
    },
    onSubmit(u) {
      return re().inputPanel.onSubmit(u);
    },
    setPresentation(u) {
      return re().inputPanel.setPresentation(u);
    }
  },
  assets: {
    url(u) {
      return re().assets.url(u);
    }
  },
  api: {
    url(u) {
      return re().api.url(u);
    },
    fetch(u, r) {
      return re().api.fetch(u, r);
    }
  },
  ui: {
    resize(u) {
      return re().ui.resize(u);
    }
  },
  theme: {
    getSnapshot() {
      return re().theme.getSnapshot();
    },
    subscribe(u) {
      return re().theme.subscribe(u);
    }
  },
  envelope: {
    getSnapshot() {
      return re().envelope.getSnapshot();
    },
    subscribe(u) {
      return re().envelope.subscribe(u);
    }
  },
  lifecycle: {
    getSnapshot() {
      return re().lifecycle.getSnapshot();
    },
    subscribe(u) {
      return re().lifecycle.subscribe(u);
    }
  },
  cards: {
    open(u, r) {
      return re().cards.open(u, r);
    }
  },
  surface: {
    getContext() {
      return re().surface.getContext();
    },
    onContextChanged(u) {
      return re().surface.onContextChanged(u);
    },
    setInteractiveRegions(u, r) {
      return re().surface.setInteractiveRegions(u, r);
    }
  },
  sessions: {
    getActive(u) {
      return re().sessions.getActive(u);
    },
    focus(u, r) {
      return re().sessions.focus(u, r);
    },
    onActiveChanged(u, r) {
      return re().sessions.onActiveChanged(u, r);
    }
  },
  performance: {
    requestAnimationFrame(u) {
      return re().performance.requestAnimationFrame(u);
    },
    cancelAnimationFrame(u) {
      return re().performance.cancelAnimationFrame(u);
    }
  },
  host: {
    request(u, r, o) {
      return re().host.request(u, r, o);
    }
  },
  chrome: {
    set(u, r) {
      return re().chrome.set(u, r);
    },
    onAction(u) {
      return re().chrome.onAction(u);
    },
    registerScrollSource(u) {
      return re().chrome.registerScrollSource(u);
    }
  },
  toast: {
    show(u, r) {
      return re().toast.show(u, r);
    }
  },
  external: {
    open(u, r) {
      return re().external.open(u, r);
    }
  },
  clipboard: {
    writeText(u, r) {
      return re().clipboard.writeText(u, r);
    }
  },
  resources: {
    open(u, r) {
      return re().resources.open(u, r);
    },
    pick(u, r) {
      return re().resources.pick(u, r);
    },
    saveFile(u, r) {
      return re().resources.saveFile(u, r);
    },
    requestAccess(u, r) {
      return re().resources.requestAccess(u, r);
    }
  },
  document: {
    getContext(u) {
      return re().document.getContext(u);
    },
    read(u) {
      return re().document.read(u);
    },
    reportStatus(u, r) {
      return re().document.reportStatus(u, r);
    },
    open(u, r) {
      return re().document.open(u, r);
    },
    rebind(u, r) {
      return re().document.rebind(u, r);
    },
    openDrop(u, r) {
      return re().document.openDrop(u, r);
    },
    onRequest(u) {
      return re().document.onRequest(u);
    },
    onViewRequest(u) {
      return re().document.onViewRequest(u);
    }
  },
  state: {
    get(u, r) {
      return re().state.get(u, r);
    },
    set(u, r, o) {
      return re().state.set(u, r, o);
    }
  },
  storage: {
    get(u, r) {
      return re().storage.get(u, r);
    },
    getAll(u) {
      return re().storage.getAll(u);
    },
    set(u, r, o) {
      return re().storage.set(u, r, o);
    },
    delete(u, r) {
      return re().storage.delete(u, r);
    },
    onChanged(u) {
      return re().storage.onChanged(u);
    },
    get global() {
      return re().storage.global;
    },
    agent(u) {
      return re().storage.agent(u);
    }
  },
  emit(u, r, o, c) {
    return re().emit(u, r, o, c);
  },
  track(u, r, o) {
    return re().track(u, r, o);
  },
  panel: {
    set(u, r) {
      return re().panel.set(u, r);
    },
    onEvent(u) {
      return re().panel.onEvent(u);
    },
    onRefresh(u) {
      return re().panel.onRefresh(u);
    }
  }
};
Jg(lp, () => Fg(re()));
function Ir(u) {
  return u.hanaAppWindow;
}
function fn(u) {
  const r = Ir(u);
  if (!r) throw Object.assign(new Error("This App surface is not an App-owned native window."), { code: "APP_WINDOW_UNAVAILABLE" });
  return r;
}
function WE(u) {
  return (typeof window < "u" ? Ir(u()) : void 0)?.onDocumentAction?.((o) => {
    const c = Yg(u().document, o, !0);
    if (c.ok === !1) throw Object.assign(new Error(c.error), { code: c.code });
    return c.result;
  }), {
    getContext: () => fn(u()).getContext(),
    getDroppedResources: (o) => {
      const c = fn(u());
      return c.getDroppedResources ? c.getDroppedResources([...o]) : Promise.reject(Object.assign(new Error("Update Hana to import dropped local resources."), { code: "APP_SDK_HOST_UNSUPPORTED" }));
    },
    request: (o) => fn(u()).request(o),
    onRequest: (o) => fn(u()).onRequest(o),
    onContextChanged: (o) => fn(u()).onContextChanged(o),
    onInspect: (o) => {
      const c = fn(u());
      if (!c.onInspect) throw Object.assign(new Error("Update Hana to register App window inspection."), { code: "APP_SDK_HOST_UNSUPPORTED" });
      return c.onInspect(o);
    },
    registerInspectionSurface: (o, c) => {
      const d = fn(u());
      if (!d.registerInspectionSurface) throw Object.assign(new Error("Update Hana to register App inspection surfaces."), { code: "APP_SDK_HOST_UNSUPPORTED" });
      return d.registerInspectionSurface(o, c);
    },
    control: (o) => fn(u()).control(o),
    close: () => fn(u()).close()
  };
}
var eb = /* @__PURE__ */ new Set([
  "hana.app-surface.mount",
  "hana.app-surface.action",
  "hana.app-surface.native",
  je.TOAST_SHOW,
  je.EXTERNAL_OPEN,
  je.CLIPBOARD_WRITE_TEXT,
  je.RESOURCE_OPEN,
  je.RESOURCE_PICK,
  je.RESOURCE_SAVE_FILE,
  je.RESOURCE_REQUEST_ACCESS,
  je.STATE_GET,
  je.STATE_SET,
  je.PANEL_SET,
  je.EMIT,
  je.TRACK,
  ...Object.values(Kl),
  ...Object.values(Qg),
  xo.SET_INTERACTIVE_REGIONS,
  "hana.document.get-context",
  "hana.document.read",
  "hana.document.report-status",
  "hana.document.open",
  "hana.document.rebind",
  "hana.document.open-drop"
]);
function ip() {
  if (typeof window > "u") throw new Error("@hana/app-sdk/ui requires a browser App iframe.");
  return window;
}
function tb(u) {
  if (!qo(u.location?.pathname ?? ""))
    throw new Error("@hana/app-sdk/ui requires an App surface route under /api/apps/:appId/ui/ or a scoped service mount.");
}
function nb(u) {
  if (!eb.has(u))
    throw new Error(`@hana/app-sdk/ui does not expose host request type: ${u}`);
}
function ab(u) {
  return {
    get global() {
      return u().storage.global;
    },
    agent(r) {
      return u().storage.agent(r);
    }
  };
}
function lb(u, r = ip, o = {}) {
  return {
    window: WE(r),
    surfaces: {
      onEvent(c, d) {
        if (typeof c != "string" || !c.trim() || c.length > 256 || typeof d != "function")
          throw new TypeError("surfaces.onEvent requires a surface id and a listener.");
        return fn(r()).onMessage((h) => {
          const p = Ji(h);
          if (!p.ok || p.value.kind !== "event" || p.value.type !== "hana.app-surface.event") return;
          const T = p.value.payload;
          if (!T || typeof T != "object" || Array.isArray(T)) return;
          const R = T;
          R.surfaceId !== c || typeof R.type != "string" || !R.type.trim() || d({ surfaceId: c, type: R.type, ...R.payload === void 0 ? {} : { payload: R.payload } });
        });
      }
    },
    appEvents: {
      on(c, d) {
        if (typeof c != "string" || !c.trim() || c.length > 128 || typeof d != "function") throw new TypeError("appEvents.on requires an event name and a listener.");
        const h = r(), p = qo(h.location?.pathname ?? "");
        if (!p)
          throw new Error("@hana/app-sdk/ui requires an App surface route under /api/apps/:appId/ui/ or a scoped service mount.");
        const T = p.appId, R = (b) => {
          const S = Ji(b);
          if (!S.ok || S.value.kind !== "event" || S.value.type !== "hana.app.event") return;
          const z = S.value.payload;
          z?.source !== `app:${T}` || z.type !== c || !z.payload || typeof z.payload != "object" || Array.isArray(z.payload) || d(z.payload);
        }, O = o.messageTransport ?? Ir(h);
        if (O) return O.onMessage(R);
        const C = o.parentWindow ?? h.parent, v = jg(h, o.targetOrigin), M = (b) => {
          Hg(b, C, v) && R(b.data);
        };
        return h.addEventListener("message", M), () => h.removeEventListener("message", M);
      }
    },
    instances: {
      onChanged(c) {
        return fn(r()).onMessage((d) => {
          if (!d || typeof d != "object") return;
          const h = d;
          if (h.protocol !== ct || h.version !== st || h.kind !== "event" || h.type !== "hana.app-instance.changed") return;
          const p = h.payload;
          p && typeof p.instanceId == "string" && typeof p.revision == "number" && Number.isSafeInteger(p.revision) && typeof p.state == "string" && c({ instanceId: p.instanceId, revision: p.revision, state: p.state });
        });
      }
    },
    environments: {
      onChanged(c) {
        if (typeof c != "function") throw new TypeError("environments.onChanged requires a listener.");
        return fn(r()).onMessage((d) => {
          const h = Ji(d);
          if (!h.ok || h.value.kind !== "event" || h.value.type !== "hana.app-environment.changed") return;
          const p = h.value.payload;
          p && typeof p.environmentId == "string" && typeof p.revision == "number" && Number.isSafeInteger(p.revision) && typeof p.state == "string" && c({ environmentId: p.environmentId, revision: p.revision, state: p.state });
        });
      }
    },
    ready(c) {
      return u().ready(c);
    },
    inputPanel: {
      getContext() {
        return u().inputPanel.getContext();
      },
      onContextChanged(c) {
        return u().inputPanel.onContextChanged(c);
      },
      onSubmit(c) {
        return u().inputPanel.onSubmit(c);
      },
      setPresentation(c) {
        return u().inputPanel.setPresentation(c);
      }
    },
    assets: { url(c) {
      return u().assets.url(c);
    } },
    api: {
      url(c) {
        return u().api.url(c);
      },
      fetch(c, d) {
        return u().api.fetch(c, d);
      }
    },
    ui: { resize(c) {
      return u().ui.resize(c);
    } },
    theme: {
      getSnapshot() {
        return u().theme.getSnapshot();
      },
      subscribe(c) {
        return u().theme.subscribe(c);
      }
    },
    envelope: {
      getSnapshot() {
        return u().envelope.getSnapshot();
      },
      subscribe(c) {
        return u().envelope.subscribe(c);
      }
    },
    lifecycle: {
      getSnapshot() {
        return u().lifecycle.getSnapshot();
      },
      subscribe(c) {
        return u().lifecycle.subscribe(c);
      }
    },
    cards: { open(c, d) {
      return u().cards.open(c, d);
    } },
    surface: {
      setInteractiveRegions(c, d) {
        return u().surface.setInteractiveRegions(c, d);
      },
      getContext() {
        return u().surface.getContext();
      },
      onContextChanged(c) {
        return u().surface.onContextChanged(c);
      }
    },
    sessions: {
      getActive(c) {
        return u().sessions.getActive(c);
      },
      focus(c, d) {
        return u().sessions.focus(c, d);
      },
      onActiveChanged(c, d) {
        return u().sessions.onActiveChanged(c, d);
      }
    },
    performance: {
      requestAnimationFrame(c) {
        return u().performance.requestAnimationFrame(c);
      },
      cancelAnimationFrame(c) {
        return u().performance.cancelAnimationFrame(c);
      }
    },
    chrome: {
      set(c, d) {
        return u().chrome.set(c, d);
      },
      onAction(c) {
        return u().chrome.onAction(c);
      },
      registerScrollSource(c) {
        return u().chrome.registerScrollSource(c);
      }
    },
    host: {
      request(c, d, h) {
        return nb(c), u().host.request(c, d, h);
      }
    },
    toast: { show(c, d) {
      return u().toast.show(c, d);
    } },
    external: { open(c, d) {
      return u().external.open(c, d);
    } },
    clipboard: { writeText(c, d) {
      return u().clipboard.writeText(c, d);
    } },
    resources: {
      open(c, d) {
        return u().resources.open(c, d);
      },
      pick(c, d) {
        return u().resources.pick(c, d);
      },
      saveFile(c, d) {
        return u().resources.saveFile(c, d);
      },
      requestAccess(c, d) {
        return u().resources.requestAccess(c, d);
      }
    },
    document: {
      getContext(c) {
        return u().document.getContext(c);
      },
      read(c) {
        return u().document.read(c);
      },
      reportStatus(c, d) {
        return u().document.reportStatus(c, d);
      },
      open(c, d) {
        return u().document.open(c, d);
      },
      rebind(c, d) {
        return u().document.rebind(c, d);
      },
      openDrop(c, d) {
        return u().document.openDrop(c, d);
      },
      onRequest(c) {
        return u().document.onRequest(c);
      },
      onViewRequest(c) {
        return u().document.onViewRequest(c);
      }
    },
    state: {
      get(c, d) {
        return u().state.get(c, d);
      },
      set(c, d, h) {
        return u().state.set(c, d, h);
      }
    },
    storage: ab(u),
    emit(c, d, h, p) {
      return u().emit(c, d, h, p);
    },
    track(c, d, h) {
      return u().track(c, d, h);
    },
    panel: {
      set(c, d) {
        return u().panel.set(c, d);
      },
      onEvent(c) {
        return u().panel.onEvent(c);
      },
      onRefresh(c) {
        return u().panel.onRefresh(c);
      }
    },
    viewState: {
      enable(c) {
        const d = Fg(u());
        return d ? d.enable(c) : Promise.reject(Object.assign(new Error("App view-state recovery is unavailable on this surface."), { code: "VIEW_STATE_UNAVAILABLE" }));
      }
    }
  };
}
var ib, Rt = lb(() => {
  const u = ip();
  tb(u);
  const r = Ir(u);
  return r ? ib ??= ap({ targetWindow: u, messageTransport: r }) : lp;
});
function dn(...u) {
  return u.filter(Boolean).join(" ");
}
const Dg = {
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
}, ub = {
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
function rb({ mode: u = "inherit", theme: r, className: o, style: c, children: d, "data-testid": h = "hana-plugin-theme", ...p }) {
  const T = typeof r == "string" ? r : void 0, R = cb(u, r);
  return m.jsx("div", { ...p, "data-testid": h, className: dn("hana-plugin-theme", o), "data-hana-theme-mode": u, "data-hana-theme": u === "hana" ? T : void 0, style: { ...R, ...c }, children: d });
}
function cb(u, r) {
  if (u === "inherit")
    return {};
  const o = sb(u, r), c = {};
  for (const [d, h] of Object.entries(ub)) {
    const p = o?.[d];
    p && (c[h] = p);
  }
  return c;
}
function sb(u, r) {
  if (typeof r == "string")
    return Dg[r];
  if (r)
    return r;
  if (u === "hana")
    return Dg["warm-paper"];
}
const $e = Q.forwardRef(function({ variant: r = "secondary", size: o = "md", loading: c = !1, iconLeft: d, iconRight: h, disabled: p, className: T, children: R, type: O = "button", ...C }, v) {
  return m.jsxs("button", { ...C, ref: v, type: O, disabled: p || c, className: dn("hana-plugin-button", `hana-plugin-button-${r}`, `hana-plugin-button-${o}`, c && "hana-plugin-button-loading", T), children: [c ? m.jsx("span", { className: "hana-plugin-spinner", "aria-hidden": !0 }) : d, R && m.jsx("span", { className: "hana-plugin-button-label", children: R }), !c && h] });
});
Q.forwardRef(function({ label: r, size: o = "md", variant: c = "ghost", className: d, children: h, type: p = "button", ...T }, R) {
  return m.jsx("button", { ...T, ref: R, type: p, "aria-label": r, title: T.title || r, className: dn("hana-plugin-icon-button", `hana-plugin-icon-button-${o}`, `hana-plugin-icon-button-${c}`, d), children: h });
});
const Ct = Q.forwardRef(function({ label: r, hint: o, error: c, id: d, className: h, inputClassName: p, ...T }, R) {
  const O = Q.useId(), C = d || O;
  return m.jsx(Lo, { label: r, hint: o, error: c, htmlFor: C, className: h, children: m.jsx("input", { ...T, ref: R, id: C, "aria-invalid": !!c, className: dn("hana-plugin-input", p) }) });
});
Q.forwardRef(function({ label: r, hint: o, error: c, id: d, className: h, textareaClassName: p, rows: T = 4, ...R }, O) {
  const C = Q.useId(), v = d || C;
  return m.jsx(Lo, { label: r, hint: o, error: c, htmlFor: v, className: h, children: m.jsx("textarea", { ...R, ref: O, id: v, rows: T, "aria-invalid": !!c, className: dn("hana-plugin-textarea", p) }) });
});
Q.forwardRef(function({ checked: r, onChange: o, label: c, disabled: d, className: h, onClick: p, type: T = "button", ...R }, O) {
  const C = typeof c == "string" ? c : R["aria-label"];
  return m.jsxs("span", { className: dn("hana-plugin-switch-wrap", h), children: [m.jsx("button", { ...R, ref: O, type: T, role: "switch", "aria-checked": r, "aria-label": C, disabled: d, className: dn("hana-plugin-switch", r && "hana-plugin-switch-on"), onClick: (v) => {
    p?.(v), !v.defaultPrevented && !d && o?.(!r);
  }, children: m.jsx("span", { className: "hana-plugin-switch-thumb", "aria-hidden": !0 }) }), c && m.jsx("span", { className: "hana-plugin-switch-label", children: c })] });
});
function zg({ options: u, value: r, onChange: o, label: c, hint: d, error: h, placeholder: p = "Select", disabled: T = !1, className: R }) {
  const [O, C] = Q.useState(!1), v = u.find((z) => z.value === r), M = v?.label || p, b = typeof c == "string" ? c : void 0, S = [b, M].filter(Boolean).join(" ");
  return m.jsx(Lo, { label: c, hint: d, error: h, className: R, children: m.jsxs("div", { className: "hana-plugin-select", children: [m.jsxs("button", { type: "button", "aria-haspopup": "listbox", "aria-expanded": O, "aria-label": S || void 0, disabled: T, className: dn("hana-plugin-select-trigger", !v && "hana-plugin-select-placeholder"), onClick: () => C((z) => !z), children: [m.jsx("span", { className: "hana-plugin-select-value", children: M }), m.jsx("span", { className: "hana-plugin-select-arrow", "aria-hidden": !0, children: "▾" })] }), O && m.jsx("div", { className: "hana-plugin-select-popover", role: "listbox", "aria-label": b, children: u.map((z) => m.jsx("button", { type: "button", role: "option", "aria-selected": z.value === r, disabled: z.disabled, className: dn("hana-plugin-select-option", z.value === r && "hana-plugin-select-option-selected"), onClick: () => {
    z.disabled || (o(z.value), C(!1));
  }, children: z.label }, z.value)) })] }) });
}
function Lo({ label: u, hint: r, error: o, htmlFor: c, className: d, children: h }) {
  return m.jsxs("div", { className: dn("hana-plugin-field", d), children: [u && m.jsx("label", { className: "hana-plugin-field-label", htmlFor: c, children: u }), r && m.jsx("div", { className: "hana-plugin-field-hint", children: r }), h, o && m.jsx("div", { className: "hana-plugin-field-error", children: o })] });
}
function Ca({ title: u, description: r, actions: o, footer: c, children: d, className: h, ...p }) {
  return m.jsxs("section", { ...p, className: dn("hana-plugin-card", h), children: [(u || r || o) && m.jsxs("header", { className: "hana-plugin-card-header", children: [m.jsxs("div", { className: "hana-plugin-card-heading", children: [u && m.jsx("h2", { className: "hana-plugin-card-title", children: u }), r && m.jsx("p", { className: "hana-plugin-card-description", children: r })] }), o && m.jsx("div", { className: "hana-plugin-card-actions", children: o })] }), m.jsx("div", { className: "hana-plugin-card-body", children: d }), c && m.jsx("footer", { className: "hana-plugin-card-footer", children: c })] });
}
function iu({ icon: u, title: r, description: o, action: c, className: d, ...h }) {
  return m.jsxs("div", { ...h, className: dn("hana-plugin-empty", d), children: [u && m.jsx("div", { className: "hana-plugin-empty-icon", children: u }), m.jsx("div", { className: "hana-plugin-empty-title", children: r }), o && m.jsx("div", { className: "hana-plugin-empty-description", children: o }), c && m.jsx("div", { className: "hana-plugin-empty-action", children: c })] });
}
const up = (u) => u.replace(/^\/+/, "");
async function rp(u) {
  const r = await u.text();
  try {
    return JSON.parse(r);
  } catch {
    return { ok: !1, stage: "http", message: `HTTP ${u.status}：${(r || "无响应体").slice(0, 200)}` };
  }
}
async function Pe(u) {
  const r = await Rt.api.fetch(up(u));
  return rp(r);
}
async function wt(u, r) {
  const o = await Rt.api.fetch(up(u), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(r)
  });
  return rp(o);
}
async function eu(u, r = {}) {
  const o = r.timeoutMs ?? 48e4, c = Date.now();
  for (; Date.now() - c < o; ) {
    await new Promise((h) => setTimeout(h, 5e3));
    const d = await Pe(u).catch(() => null);
    if (d && d.running === !1 && (!r.kind || d.kind === r.kind) && d.lastResult) return d.lastResult;
  }
  return { ok: !1, stage: "timeout", message: `等待超时（${Math.round(o / 6e4)} 分钟），任务可能仍在运行；稍后刷新查看结果。` };
}
async function Do(u = 480 * 1e3) {
  return eu("/api/import/status", { timeoutMs: u });
}
function cp(u, r) {
  const o = /^#\s+(.+?)（([^（）]+),\s*(\d{4}[^)）]*)）$/.exec(String(u || "").trim());
  return { title: o ? o[1] : r, meta: o ? `${o[2].trim()} · ${o[3]}` : "" };
}
async function sp(u) {
  const r = await Pe(Sn(`篇目/${u}`)).catch(() => null);
  return r && r.ok ? String(r.content || "").split(/\r?\n/, 1)[0] : "";
}
const Sn = (u) => `/api/file?path=${encodeURIComponent(u)}`, ob = [
  { id: "home", label: "首页" },
  { id: "use", label: "取用" },
  { id: "library", label: "结构库" },
  { id: "todo", label: "待办" },
  { id: "settings", label: "设置" }
], fb = {
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
function db(u) {
  return u.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function wa(u) {
  return db(u).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
}
function hb(u) {
  const r = String(u || "").split(/\r?\n/), o = [];
  let c = 0, d = !1;
  const h = () => {
    d && (o.push("</ul>"), d = !1);
  };
  for (; c < r.length; ) {
    const p = r[c];
    if (/^\|.*\|/.test(p) && c + 1 < r.length && /^\|\s*-+/.test(r[c + 1])) {
      h();
      const T = p.split("|").slice(1, -1).map((O) => O.trim());
      c += 2;
      const R = [];
      for (; c < r.length && /^\|/.test(r[c]); )
        R.push(r[c].split("|").slice(1, -1).map((O) => O.trim())), c++;
      o.push("<table><thead><tr>" + T.map((O) => `<th>${wa(O)}</th>`).join("") + "</tr></thead><tbody>");
      for (const O of R) o.push("<tr>" + O.map((C) => `<td>${wa(C)}</td>`).join("") + "</tr>");
      o.push("</tbody></table>");
      continue;
    }
    /^###\s/.test(p) ? (h(), o.push(`<h3>${wa(p.slice(4))}</h3>`)) : /^##\s/.test(p) ? (h(), o.push(`<h2>${wa(p.slice(3))}</h2>`)) : /^#\s/.test(p) ? (h(), o.push(`<h1>${wa(p.slice(2))}</h1>`)) : /^>\s?/.test(p) ? (h(), o.push(`<blockquote>${wa(p.replace(/^>\s?/, ""))}</blockquote>`)) : /^-\s/.test(p) || /^\*\s/.test(p) ? (d || (o.push("<ul>"), d = !0), o.push(`<li>${wa(p.slice(2))}</li>`)) : /^---+\s*$/.test(p) ? (h(), o.push("<hr>")) : p.trim() === "" ? h() : (h(), o.push(`<p>${wa(p)}</p>`)), c++;
  }
  return h(), o.join(`
`);
}
function tu({ md: u }) {
  return /* @__PURE__ */ m.jsx("div", { className: "doc", dangerouslySetInnerHTML: { __html: hb(u) } });
}
async function Ra(u) {
  const r = await Pe(`/api/list?dir=${encodeURIComponent(u)}`);
  return r.ok ? (r.items || []).filter((o) => !o.isDirectory && o.name.endsWith(".md") && o.name !== "_模板.md").map((o) => o.name) : [];
}
function Io(u) {
  const r = String(u || "").split(/\r?\n/), o = [];
  let c = !1;
  for (const d of r) {
    if (d.startsWith("## ")) {
      c = d.includes("复核队列");
      continue;
    }
    if (c && d.startsWith("|") && !/^\|\s*-+/.test(d)) {
      const h = d.split("|").slice(1, -1).map((p) => p.trim());
      h[0] && h[0] !== "疑似对" && o.push({ pair: h[0], evidence: h[1] || "", date: h[2] || "", decision: h[3] || "" });
    }
  }
  return o;
}
async function mb() {
  const [u, r, o, c] = await Promise.all([
    Ra("篇目"),
    Ra("写作模型"),
    Pe(Sn("标签库.md")),
    Pe("/api/import/failures").catch(() => ({ ok: !1, items: [] }))
  ]), d = o.ok ? Io(o.content) : [];
  return {
    papers: u.length,
    models: r.length,
    queuePending: d.filter((h) => !h.decision).length,
    failures: (c.items || []).length
  };
}
function gb() {
  const u = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), [r, o] = Q.useState({ id: "", title: "", authors: "", year: "", venue: "", textType: "", score: "9", rationale: "", date: u, recordedBy: "" }), [c, d] = Q.useState(null), h = (T, R) => o((O) => ({ ...O, [T]: R }));
  async function p() {
    const T = {
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
    }, R = await wt("/api/tool/commit_anchor", { anchor: T });
    d(R), R.ok && Rt.toast.show({ message: "评分已落盘", type: "success" });
  }
  return /* @__PURE__ */ m.jsxs("div", { className: "form", children: [
    /* @__PURE__ */ m.jsx("p", { className: "hint", children: "你自己的总分和理由是整条评分链的起点：只增不改，理由至少 10 字，后续归纳评分指引全靠它。" }),
    /* @__PURE__ */ m.jsxs("div", { className: "grid2", children: [
      /* @__PURE__ */ m.jsx(Ct, { label: "篇目 id（slug-年）", value: r.id, onChange: (T) => h("id", T.currentTarget.value), placeholder: "sample-2020" }),
      /* @__PURE__ */ m.jsx(Ct, { label: "文本类型（你判）", value: r.textType, onChange: (T) => h("textType", T.currentTarget.value), placeholder: "论证型 / 阐释型…" }),
      /* @__PURE__ */ m.jsx(Ct, { label: "标题", value: r.title, onChange: (T) => h("title", T.currentTarget.value) }),
      /* @__PURE__ */ m.jsx(Ct, { label: "作者", value: r.authors, onChange: (T) => h("authors", T.currentTarget.value) }),
      /* @__PURE__ */ m.jsx(Ct, { label: "年份", value: r.year, onChange: (T) => h("year", T.currentTarget.value) }),
      /* @__PURE__ */ m.jsx(Ct, { label: "出处（可空）", value: r.venue, onChange: (T) => h("venue", T.currentTarget.value) }),
      /* @__PURE__ */ m.jsx(Ct, { label: "总分 1-10", value: r.score, onChange: (T) => h("score", T.currentTarget.value) }),
      /* @__PURE__ */ m.jsx(Ct, { label: "日期", value: r.date, onChange: (T) => h("date", T.currentTarget.value) })
    ] }),
    /* @__PURE__ */ m.jsx(Ct, { label: "理由（≥10 字）", value: r.rationale, onChange: (T) => h("rationale", T.currentTarget.value) }),
    /* @__PURE__ */ m.jsx(Ct, { label: "录入者", value: r.recordedBy, onChange: (T) => h("recordedBy", T.currentTarget.value) }),
    /* @__PURE__ */ m.jsx($e, { variant: "primary", onClick: p, children: "提交评分" }),
    c && /* @__PURE__ */ m.jsx("pre", { className: c.ok ? "ok" : "err", children: c.ok ? `已写入：${c.file || "(dry run)"}` : JSON.stringify(c, null, 2) })
  ] });
}
function pb({ tick: u }) {
  const [r, o] = Q.useState([]), [c, d] = Q.useState({}), [h, p] = Q.useState(""), [T, R] = Q.useState(!1);
  Q.useEffect(() => {
    let S = !1;
    return (async () => {
      const z = await Pe("/api/model/status").catch(() => null);
      if (S || !z || !z.running || z.kind !== "propose") return;
      R(!0), p("模型提议进行中（接管切页前的任务）…");
      const H = await eu("/api/model/status", { kind: "propose", timeoutMs: 180 * 1e3 });
      S || (p(H.ok ? `已入队 ${H.queued?.length || 0} 对` : H.message || "未产出建议"), H.ok && await O(), R(!1));
    })(), () => {
      S = !0;
    };
  }, []);
  const O = Q.useCallback(async () => {
    const S = await Pe(Sn("标签库.md"));
    o(S.ok ? Io(S.content) : []);
  }, []);
  Q.useEffect(() => {
    O();
  }, [O, u]);
  async function C(S, z, H) {
    const $ = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), J = c[S] || `裁决执行：${S}`, Z = await wt("/api/tool/apply_tag_merge", { mergedLabel: z, target: H, date: $, evidence: J });
    p(Z.ok ? `已执行：${z} → ${Z.now}` : Z.message || JSON.stringify(Z)), Z.ok && await O();
  }
  async function v() {
    R(!0), p("");
    try {
      const S = await wt("/api/model/propose-merges", {});
      if (!S.started) {
        p(S.message || "发起失败"), R(!1);
        return;
      }
      const z = await eu("/api/model/status", { kind: "propose", timeoutMs: 180 * 1e3 });
      if (z.stage === "timeout") {
        p(z.message), R(!1);
        return;
      }
      p(z.ok ? `已入队 ${z.queued.length} 对：${z.queued.join("；")}` : z.message || "未产出建议"), z.ok && await O();
    } catch (S) {
      p(`请求失败：${String(S?.message || S)}`);
    }
    R(!1);
  }
  async function M() {
    const S = await wt("/api/tool/suggest_tag_merges", {});
    p(S.ok ? S.written ? `共现入队 ${S.written} 对` : "共现提示无新候选（语义相近的对请用模型提议）" : S.message || JSON.stringify(S)), S.ok && await O();
  }
  const b = r.filter((S) => !S.decision);
  return /* @__PURE__ */ m.jsxs("div", { children: [
    /* @__PURE__ */ m.jsxs("p", { className: "hint", children: [
      b.length > 0 && /* @__PURE__ */ m.jsxs("b", { children: [
        b.length,
        " 对待裁决　"
      ] }),
      "相近标签会进到这里，由你决定合并方向；裁决后库内归一，原始记录不动。"
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ m.jsx($e, { variant: "primary", disabled: T, onClick: () => {
        v();
      }, children: T ? "提议中…" : "模型提议疑似对" }),
      /* @__PURE__ */ m.jsx($e, { disabled: T, onClick: () => {
        M();
      }, children: "跑共现提示" }),
      /* @__PURE__ */ m.jsx("span", { className: "hint", children: "提议与共现只负责入队；合并方向由你在下方卡片上裁决。" })
    ] }),
    r.length === 0 && /* @__PURE__ */ m.jsx(iu, { title: "暂无待裁决标签", description: "篇目积累出相近标签后，候选会自动出现在这里。" }),
    r.map((S) => /* @__PURE__ */ m.jsx(Ca, { title: S.pair, description: `${S.date} 进队 · ${S.evidence}`, children: S.decision ? /* @__PURE__ */ m.jsxs("p", { className: "decided", children: [
      "已裁决：",
      S.decision
    ] }) : /* @__PURE__ */ m.jsxs("div", { className: "queue-actions", children: [
      [S.pair.split(" vs ")[0], S.pair.split(" vs ")[1]].filter(Boolean).map((z, H, $) => /* @__PURE__ */ m.jsx("div", { className: "queue-op", children: /* @__PURE__ */ m.jsxs($e, { onClick: () => C(S.pair, z, $[1 - H]), children: [
        "「",
        z,
        "」并入「",
        $[1 - H],
        "」"
      ] }) }, z)),
      /* @__PURE__ */ m.jsx(Ct, { label: "依据（可空）", value: c[S.pair] || "", onChange: (z) => d((H) => ({ ...H, [S.pair]: z.currentTarget.value })) })
    ] }) }, S.pair)),
    b.length > 0 && null,
    h && /* @__PURE__ */ m.jsx("p", { className: h.startsWith("已") ? "ok" : "err", children: h })
  ] });
}
function op({ initial: u, savePath: r, onSaved: o }) {
  const [c, d] = Q.useState(u), [h, p] = Q.useState(""), [T, R] = Q.useState(!1);
  async function O() {
    if (!c.startsWith("#")) {
      p("首行须为 # 标题（防存入半截文件）");
      return;
    }
    let C = c;
    if (C !== u) {
      const v = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), M = /^> 人工修订：(.+)$/m;
      C = M.test(C) ? C.replace(M, `> 人工修订：${v}`) : C.trimEnd() + `

> 人工修订：${v}
`;
    }
    R(!0), p("");
    try {
      const v = await wt("/api/library/write-file", { path: r, content: C });
      v && v.ok ? (Rt.toast.show({ message: "已保存", type: "success" }), o(C)) : p(v?.message || "保存失败");
    } catch (v) {
      p(String(v?.message || v));
    }
    R(!1);
  }
  return /* @__PURE__ */ m.jsxs("div", { className: "editor", children: [
    h && /* @__PURE__ */ m.jsx("p", { className: "err", children: h }),
    /* @__PURE__ */ m.jsx("textarea", { className: "editbox", value: c, onChange: (C) => d(C.currentTarget.value), rows: 22, spellCheck: !1 }),
    /* @__PURE__ */ m.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ m.jsx($e, { variant: "primary", disabled: T, onClick: () => {
        O();
      }, children: "保存" }),
      /* @__PURE__ */ m.jsx("span", { className: "hint", children: "首行须为 # 标题；改动会在尾部留一行修订日期（可自行删除）。改标签：编辑「- 标签：」行。" })
    ] })
  ] });
}
function vb({ tick: u }) {
  const [r, o] = Q.useState([]), [c, d] = Q.useState(""), [h, p] = Q.useState(""), [T, R] = Q.useState(!1), O = Q.useCallback(async () => {
    const C = await Ra("篇目"), v = await Promise.all(
      C.map(async (M) => {
        const { title: b, meta: S } = cp(await sp(M), M.replace(/\.md$/, ""));
        return { id: M, title: b, meta: S || M.replace(/\.md$/, "") };
      })
    );
    o(v);
  }, []);
  return Q.useEffect(() => {
    O();
  }, [O, u]), Q.useEffect(() => {
    if (!c) {
      p("");
      return;
    }
    Pe(Sn(`篇目/${c}`)).then((C) => p(C.ok ? C.content : C.message || "读取失败"));
  }, [c]), r.length ? /* @__PURE__ */ m.jsxs("div", { className: "split", children: [
    /* @__PURE__ */ m.jsx("div", { className: "side", children: /* @__PURE__ */ m.jsx("div", { className: "entrylist", children: r.map((C) => /* @__PURE__ */ m.jsxs(
      "button",
      {
        className: c === C.id ? "entryitem on" : "entryitem",
        onClick: () => d(C.id),
        children: [
          /* @__PURE__ */ m.jsx("span", { className: "entrytitle", children: C.title }),
          /* @__PURE__ */ m.jsx("span", { className: "entrymeta", children: C.meta })
        ]
      },
      C.id
    )) }) }),
    /* @__PURE__ */ m.jsxs("div", { className: "main", children: [
      c && /* @__PURE__ */ m.jsx("div", { className: "import-row", children: /* @__PURE__ */ m.jsx($e, { onClick: () => R((C) => !C), children: T ? "返回预览" : "编辑本篇" }) }),
      c ? T ? /* @__PURE__ */ m.jsx(
        op,
        {
          initial: h,
          savePath: `篇目/${c}`,
          onSaved: (C) => {
            p(C), R(!1), O();
          }
        }
      ) : /* @__PURE__ */ m.jsx(tu, { md: h }) : /* @__PURE__ */ m.jsx("p", { className: "hint", children: "左侧选篇查看（每条登记都带位置与原文引文）。" })
    ] })
  ] }) : /* @__PURE__ */ m.jsx(iu, { title: "还没有篇目", description: "导入文献或在对话里拆解后，篇目会出现在这里。" });
}
function yb({ tick: u }) {
  const [r, o] = Q.useState([]), [c, d] = Q.useState(""), [h, p] = Q.useState(""), [T, R] = Q.useState(""), [O, C] = Q.useState(""), [v, M] = Q.useState({});
  if (Q.useEffect(() => {
    Ra("篇目").then(async (S) => {
      o(S), S[0] && d(S[0]), S[1] && p(S[1]);
      const z = await Promise.all(S.map(async (H) => {
        const { title: $, meta: J } = cp(await sp(H), H.replace(/\.md$/, ""));
        return [H, J ? `${$} · ${J}` : $];
      }));
      M(Object.fromEntries(z));
    });
  }, [u]), Q.useEffect(() => {
    c && Pe(Sn(`篇目/${c}`)).then((S) => R(S.ok ? S.content : ""));
  }, [c]), Q.useEffect(() => {
    h && Pe(Sn(`篇目/${h}`)).then((S) => C(S.ok ? S.content : ""));
  }, [h]), r.length < 2) return /* @__PURE__ */ m.jsx(iu, { title: "至少两篇可对比", description: "先积累两篇以上篇目。" });
  const b = r.map((S) => ({ value: S, label: v[S] || S.replace(/\.md$/, "") }));
  return /* @__PURE__ */ m.jsxs("div", { children: [
    /* @__PURE__ */ m.jsxs("div", { className: "grid2", children: [
      /* @__PURE__ */ m.jsx(zg, { value: c, onChange: d, options: b }),
      /* @__PURE__ */ m.jsx(zg, { value: h, onChange: p, options: b })
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: "compare", children: [
      /* @__PURE__ */ m.jsx("div", { className: "col", children: /* @__PURE__ */ m.jsx(tu, { md: T }) }),
      /* @__PURE__ */ m.jsx("div", { className: "col", children: /* @__PURE__ */ m.jsx(tu, { md: O }) })
    ] })
  ] });
}
function Eb({ tick: u }) {
  const [r, o] = Q.useState(null);
  if (Q.useEffect(() => {
    (async () => {
      const [d, h, p, T, R, O] = await Promise.all([
        Ra("篇目"),
        Ra("锚点样本"),
        Ra("写作模型"),
        Pe(Sn("标签库.md")),
        Pe(Sn("闭包映射表.md")),
        Pe(Sn("类型库.md"))
      ]), C = T.ok ? Co(T.content, "标签") : [], v = T.ok ? Io(T.content) : [], M = R.ok ? Co(R.content, "from") : [], b = O.ok ? Co(O.content, "类型") : [];
      o({
        papers: d.length,
        anchors: h.length,
        models: p.length,
        tags: C,
        queuePending: v.filter((S) => !S.decision).length,
        mapRows: M,
        types: b
      });
    })();
  }, [u]), !r) return /* @__PURE__ */ m.jsx("p", { className: "hint", children: "统计中…" });
  const c = r.papers ? Math.round(r.anchors / r.papers * 100) : 0;
  return /* @__PURE__ */ m.jsxs("div", { className: "cards", children: [
    /* @__PURE__ */ m.jsx(Ca, { title: `篇目 ${r.papers}`, description: "已完成的篇目" }),
    /* @__PURE__ */ m.jsx(Ca, { title: `锚点 ${r.anchors}`, description: `锚点覆盖度 ${c}%（置信度依据之一）` }),
    /* @__PURE__ */ m.jsx(Ca, { title: `标签 ${r.tags.length}`, description: `待裁决 ${r.queuePending}` }),
    /* @__PURE__ */ m.jsx(Ca, { title: `类型 ${r.types.length}`, description: `映射表 ${r.mapRows.length} 行` }),
    /* @__PURE__ */ m.jsx(Ca, { title: `写作模型 ${r.models}`, description: "版本化产物" }),
    /* @__PURE__ */ m.jsx(Ca, { title: "描述性 / 规范性频率", description: "描述与规范分开统计；篇目与锚点积累后按类型分组计算。" })
  ] });
}
function Co(u, r) {
  const o = String(u || "").split(/\r?\n/), c = [];
  let d = !1;
  for (const h of o)
    if (h.startsWith("|") && !/^\|\s*-+/.test(h)) {
      const p = h.split("|").slice(1, -1).map((T) => T.trim());
      if (p[0] === r) {
        d = !0;
        continue;
      }
      d && p[0] && p[0] !== "（暂无）" && c.push(p[0]);
    } else d && !h.startsWith("|") && (d = !1);
  return c;
}
function bb({ tick: u }) {
  const [r, o] = Q.useState([]), [c, d] = Q.useState(""), [h, p] = Q.useState(""), [T, R] = Q.useState(!1), [O, C] = Q.useState(""), [v, M] = Q.useState({}), [b, S] = Q.useState(!1);
  Q.useEffect(() => {
    let J = !1;
    return (async () => {
      const Z = await Pe("/api/model/status").catch(() => null);
      if (J || !Z || !Z.running || Z.kind !== "generate") return;
      R(!0), C("建模进行中（接管切页前的任务）…");
      const X = await eu("/api/model/status", { kind: "generate" });
      J || (C(X.stage === "timeout" ? X.message : X.ok ? "完成：见下方分组" : X.message || "未生成"), X.ok && (Rt.toast.show({ message: "写作模型已生成/更新", type: "success" }), H()), R(!1));
    })(), () => {
      J = !0;
    };
  }, []);
  const z = Q.useMemo(() => {
    const J = /* @__PURE__ */ new Map();
    for (const Z of r) {
      const X = /^(.+)-写作模型-v(\d+)\.md$/.exec(Z);
      X && (J.has(X[1]) || J.set(X[1], []), J.get(X[1]).push({ file: Z, v: Number(X[2]) }));
    }
    return [...J.entries()].map(([Z, X]) => (X.sort((he, P) => he.v - P.v), { type: Z, latest: X[X.length - 1], history: X.slice(0, -1).reverse() }));
  }, [r]), H = Q.useCallback(() => {
    Ra("写作模型").then(o);
  }, []);
  Q.useEffect(() => {
    H();
  }, [H, u]), Q.useEffect(() => {
    if (!c) {
      p("");
      return;
    }
    Pe(Sn(`写作模型/${c}`)).then((J) => p(J.ok ? J.content : ""));
  }, [c]);
  async function $() {
    R(!0), C("");
    try {
      const J = await wt("/api/model/generate", {});
      if (!J.started) {
        C(J.message || "发起失败"), R(!1);
        return;
      }
      C("建模中：归属 → 归纳 → 逐类型生成（每个类型一次模型调用，可离开本页）…");
      const Z = await eu("/api/model/status", { kind: "generate" });
      if (Z.stage === "timeout") {
        C(Z.message), R(!1);
        return;
      }
      const X = (Z.results || []).map((P) => P.ok ? `✓ ${P.type} → v${P.version}（样本 ${P.samples} 篇${P.previous ? `，原 v${P.previous}` : ""}）` : P.skipped ? `· ${P.type}：${P.skipped}` : `✗ ${P.type}：${P.error || "失败"}`), he = X.filter((P) => P.startsWith("✓")).length;
      C((he ? X.length === he ? "完成：" : "部分完成：" : "未生成：") + (X.join("；") || Z.message || "")), he && (Rt.toast.show({ message: "写作模型已生成/更新", type: "success" }), H());
    } catch (J) {
      C(`请求失败：${String(J?.message || J)}`);
    }
    R(!1);
  }
  return /* @__PURE__ */ m.jsxs("div", { children: [
    /* @__PURE__ */ m.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ m.jsx($e, { variant: "primary", disabled: T, onClick: () => {
        $();
      }, children: T ? "建模中…" : "生成 / 更新写作模型" }),
      /* @__PURE__ */ m.jsx("span", { className: "hint", children: "同类型样本 ≥2 篇才生成；新文献入库后再次点击即得新版本（v+1，历史保留）。" })
    ] }),
    O && /* @__PURE__ */ m.jsx("pre", { className: "hint", children: O }),
    z.length ? /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
      z.map((J) => /* @__PURE__ */ m.jsxs("div", { className: "model-group", children: [
        /* @__PURE__ */ m.jsxs("div", { className: "model-group-head", children: [
          /* @__PURE__ */ m.jsx("span", { className: "model-grouptitle", children: J.type }),
          /* @__PURE__ */ m.jsxs(
            "button",
            {
              className: c === J.latest.file ? "filebtn on" : "filebtn",
              onClick: () => d(J.latest.file),
              children: [
                "v",
                J.latest.v,
                "（最新）"
              ]
            }
          ),
          J.history.length > 0 && /* @__PURE__ */ m.jsx("button", { className: "linkbtn", onClick: () => M((Z) => ({ ...Z, [J.type]: !Z[J.type] })), children: v[J.type] ? "收起历史" : `历史 ${J.history.length} 版` })
        ] }),
        v[J.type] && /* @__PURE__ */ m.jsx("div", { className: "filebtns", children: J.history.map((Z) => /* @__PURE__ */ m.jsxs("button", { className: c === Z.file ? "filebtn on" : "filebtn", onClick: () => d(Z.file), children: [
          "v",
          Z.v
        ] }, Z.file)) })
      ] }, J.type)),
      c ? b ? /* @__PURE__ */ m.jsx(
        op,
        {
          initial: h,
          savePath: `写作模型/${c}`,
          onSaved: (J) => {
            p(J), S(!1), H();
          }
        }
      ) : /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
        /* @__PURE__ */ m.jsx("div", { className: "import-row", children: /* @__PURE__ */ m.jsx($e, { onClick: () => S(!0), children: "编辑本模型" }) }),
        /* @__PURE__ */ m.jsx(tu, { md: h })
      ] }) : /* @__PURE__ */ m.jsx("p", { className: "hint", children: "选择版本查看（每类默认最新；旧版折叠在「历史」里可对照）。" })
    ] }) : /* @__PURE__ */ m.jsx(iu, { title: "暂无写作模型", description: "点上方按钮归纳生成；样本不足或样本未变的类型会跳过并说明。" })
  ] });
}
function Sb() {
  const [u, r] = Q.useState(""), [o, c] = Q.useState([]), [d, h] = Q.useState(null), [p, T] = Q.useState("");
  async function R() {
    if (!u.trim()) return;
    const O = await Pe(`/api/search?query=${encodeURIComponent(u.trim())}`);
    c(O.ok ? O.results : []), h(null);
  }
  return Q.useEffect(() => {
    if (!d) {
      T("");
      return;
    }
    Pe(Sn(d.path)).then((O) => T(O.ok ? O.content : "读取失败"));
  }, [d]), /* @__PURE__ */ m.jsxs("div", { children: [
    /* @__PURE__ */ m.jsx("p", { className: "hint", children: "按关键词物理命中排序帮你收窄候选，取舍仍由你判断；引用时带篇目位置与原文引文。" }),
    /* @__PURE__ */ m.jsxs("div", { className: "searchbar", children: [
      /* @__PURE__ */ m.jsx(
        Ct,
        {
          label: "关键词（空格 / 、 分隔）",
          value: u,
          onChange: (O) => r(O.currentTarget.value),
          placeholder: "例：反驳 开头",
          onKeyDown: (O) => {
            O.key === "Enter" && R();
          }
        }
      ),
      /* @__PURE__ */ m.jsx($e, { variant: "primary", onClick: () => {
        R();
      }, children: "搜索" })
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: "searchresults", children: [
      o.map((O) => /* @__PURE__ */ m.jsxs("div", { className: d?.path === O.path ? "searchhit on" : "searchhit", children: [
        /* @__PURE__ */ m.jsxs("div", { className: "searchhit-head", onClick: () => h(O), children: [
          /* @__PURE__ */ m.jsx("span", { className: "badge", children: O.kind }),
          /* @__PURE__ */ m.jsx("b", { children: O.title }),
          /* @__PURE__ */ m.jsxs("span", { className: "hint", children: [
            "命中 ",
            O.score,
            " · ",
            O.path
          ] })
        ] }),
        d?.path !== O.path && O.hits?.slice(0, 2).map((C, v) => /* @__PURE__ */ m.jsxs("div", { className: "hitline", children: [
          "L",
          C.line,
          ": ",
          C.excerpt,
          C.text
        ] }, v))
      ] }, O.path)),
      !o.length && /* @__PURE__ */ m.jsx("p", { className: "hint", children: "输入关键词后搜索；结果按命中度排序，点击标题展开全文。" })
    ] }),
    d && /* @__PURE__ */ m.jsxs("div", { className: "searchpreview", children: [
      /* @__PURE__ */ m.jsx("h4", { children: d.title }),
      /* @__PURE__ */ m.jsx(tu, { md: p })
    ] })
  ] });
}
function Tb() {
  const [u, r] = Q.useState(""), [o, c] = Q.useState(""), [d, h] = Q.useState("2"), [p, T] = Q.useState("");
  Q.useEffect(() => {
    Pe("/api/config").then((O) => {
      O.ok && O.config ? (r((O.config.markers || []).join("、")), c(O.config.libraryPath || ""), h(String(O.config.maxPerRun ?? 2))) : T(O.message || "配置读取失败");
    });
  }, []);
  async function R() {
    T("保存中…");
    const O = await wt("/api/config", {
      markers: u.split(/[\s、，,;；]+/).map((C) => C.trim()).filter(Boolean),
      libraryPath: o.trim(),
      maxPerRun: Number(d) || 2
    });
    T(O.ok ? "已保存" : `保存失败：${O.message || "未知错误"}`);
  }
  return /* @__PURE__ */ m.jsxs("div", { className: "settings", children: [
    /* @__PURE__ */ m.jsx("p", { className: "hint", children: "会话名命中标定词才会收到结构推荐；标定词留空 = 全静默，不向任何会话推送。" }),
    /* @__PURE__ */ m.jsx(
      Ct,
      {
        label: "会话标定词（、或逗号分隔，含任一即放行）",
        value: u,
        onChange: (O) => r(O.currentTarget.value),
        placeholder: "例：构成性、论文、写作"
      }
    ),
    /* @__PURE__ */ m.jsx(
      Ct,
      {
        label: "结构库路径（留空用默认；改后重启 Hana 生效）",
        value: o,
        onChange: (O) => c(O.currentTarget.value),
        placeholder: "默认：workspace 写作模型插件/结构库"
      }
    ),
    /* @__PURE__ */ m.jsx(
      Ct,
      {
        label: "单次推荐上限（1-2，设计上限 2）",
        value: d,
        onChange: (O) => h(O.currentTarget.value)
      }
    ),
    /* @__PURE__ */ m.jsxs("div", { className: "saverow", children: [
      /* @__PURE__ */ m.jsx($e, { variant: "primary", onClick: () => {
        R();
      }, children: "保存" }),
      p && /* @__PURE__ */ m.jsx("span", { className: "savehint", children: p })
    ] }),
    /* @__PURE__ */ m.jsx("p", { className: "hint", children: "命中判定：标定词过闸后，取最近对话文本与标签库/类型库做字典交集，交集词走共用检索层出候选；候选只附命中事实，采纳与否由会话内模型判断。同会话已注入条目不重复推。" })
  ] });
}
function Ab({ onDone: u }) {
  const [r, o] = Q.useState(""), [c, d] = Q.useState(!1), [h, p] = Q.useState(null), [T, R] = Q.useState(!1), [O, C] = Q.useState(!1);
  Q.useEffect(() => {
    let S = !1;
    return (async () => {
      const z = await Pe("/api/import/status").catch(() => null);
      if (S || !z || !z.running) return;
      d(!0), p({ ok: !0, stage: "running", message: "拆解进行中（接管切页前的任务）…" });
      const H = await Do();
      S || (p(H), H.ok ? (Rt.toast.show({ message: "拆解完成，已入库", type: "success" }), u()) : H.failureTs && (Rt.toast.show({ message: "拆解失败，已记入待办", type: "error" }), u()), d(!1));
    })(), () => {
      S = !0;
    };
  }, []);
  async function v(S, z) {
    d(!0), p(null);
    try {
      const H = await wt("/api/import/enqueue", { items: [S] });
      H && H.ok ? (p({ ok: !0, stage: "queued", message: `已入队：${z}（队列串行执行，进度看下方「导入队列」）` }), Rt.toast.show({ message: `已入队 ${H.queued} 篇，队列开始执行`, type: "success" }), u()) : p({ ok: !1, stage: "input", message: H?.message || "入队失败" });
    } catch (H) {
      p({ ok: !1, stage: "network", message: String(H?.message || H) });
    }
    d(!1);
  }
  async function M(S) {
    const z = String(S || "").trim();
    if (!z) {
      p({ ok: !1, stage: "input", message: "请先粘贴文献全文，或选择 / 拖入 md、txt、pdf 文件" });
      return;
    }
    const $ = (z.split(`
`)[0] || "").replace(/^#+\s*/, "").trim().slice(0, 30) || "粘贴文献";
    await v({ label: $, text: z, source: "paste" }, $);
  }
  async function b(S) {
    if (/\.pdf$/i.test(S.name)) {
      if (S.size > 50 * 1024 * 1024) {
        p({ ok: !1, stage: "input", message: "PDF 超过 50 MB 上限" });
        return;
      }
      try {
        const z = await new Promise((H, $) => {
          const J = new FileReader();
          J.onload = () => H(String(J.result).split(",")[1] || ""), J.onerror = () => $(new Error("文件读取失败")), J.readAsDataURL(S);
        });
        await v({ label: S.name, pdfBase64: z, source: "file" }, S.name);
      } catch (z) {
        p({ ok: !1, stage: "input", message: String(z?.message || z) });
      }
      return;
    }
    if (!/\.(md|txt)$/i.test(S.name)) {
      p({ ok: !1, stage: "input", message: "支持 md / txt / pdf 文件" });
      return;
    }
    await v({ label: S.name, text: await S.text(), source: "file" }, S.name);
  }
  return /* @__PURE__ */ m.jsxs("div", { className: "import-zone", children: [
    /* @__PURE__ */ m.jsx("h4", { className: "import-title", children: "导入文献" }),
    /* @__PURE__ */ m.jsxs(
      "div",
      {
        className: T ? "drop on" : "drop",
        onDragOver: (S) => {
          S.preventDefault(), R(!0);
        },
        onDragLeave: () => R(!1),
        onDrop: (S) => {
          S.preventDefault(), R(!1);
          const z = S.dataTransfer.files?.[0];
          z && b(z);
        },
        children: [
          /* @__PURE__ */ m.jsx("p", { children: "把 .md / .txt / .pdf 文献拖到这里" }),
          /* @__PURE__ */ m.jsxs("label", { className: "filepick", children: [
            "或选择文件",
            /* @__PURE__ */ m.jsx(
              "input",
              {
                type: "file",
                accept: ".md,.txt,.pdf,text/plain,text/markdown,application/pdf",
                style: { display: "none" },
                onChange: (S) => {
                  const z = S.target.files?.[0];
                  S.target.value = "", z && b(z);
                }
              }
            )
          ] }),
          /* @__PURE__ */ m.jsxs("p", { className: "hint zotero-toggle", children: [
            "或",
            /* @__PURE__ */ m.jsx("button", { className: "linkbtn", onClick: () => C((S) => !S), children: O ? "收起 Zotero" : "从 Zotero 取" })
          ] })
        ]
      }
    ),
    O && /* @__PURE__ */ m.jsx(wb, {}),
    /* @__PURE__ */ m.jsx(
      "textarea",
      {
        className: "pastebox",
        value: r,
        onChange: (S) => o(S.target.value),
        placeholder: "也可以直接粘贴文献全文…",
        rows: 4,
        disabled: c
      }
    ),
    /* @__PURE__ */ m.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ m.jsx($e, { variant: "primary", disabled: c || !r.trim(), onClick: () => {
        M(r);
      }, children: "加入队列并开始" }),
      c && /* @__PURE__ */ m.jsx("span", { className: "hint", children: "正在入队…" })
    ] }),
    h && /* @__PURE__ */ m.jsx("pre", { className: h.ok ? "ok" : "err", children: h.ok ? h.stage === "running" ? `${h.message || "拆解进行中…"}` : h.stage === "queued" ? h.message : `已入库：${h.file}（第 ${h.attempts} 次通过${h.tagsAdded?.length ? `，新增标签 ${h.tagsAdded.join("、")}` : ""}）` + (h.pdfEngine ? `
PDF 引擎：${h.pdfEngine === "pymupdf" ? "PyMuPDF" : "unpdf（回退）—— 安装 PyMuPDF 可启用更稳的主引擎：python -m pip install pymupdf"}` : "") : `${h.message || "拆解失败"}${h.errors?.length ? `
` + h.errors.slice(0, 6).map((S) => `· ${S.field}：${S.message}`).join(`
`) : ""}${h.failureTs ? `
（已记入待办，可到「待办 · 导入失败」重试）` : ""}` }),
    /* @__PURE__ */ m.jsx(Nb, {})
  ] });
}
const _b = {
  pending: "排队",
  running: "运行中",
  stopping: "停止中",
  done: "✓ 完成",
  failed: "✗ 失败",
  cancelled: "■ 已停止"
};
function fp({ nodes: u, active: r, onPick: o, depth: c = 0 }) {
  return /* @__PURE__ */ m.jsx(m.Fragment, { children: u.map((d) => /* @__PURE__ */ m.jsxs("div", { children: [
    /* @__PURE__ */ m.jsx(
      "button",
      {
        className: r === d.key ? "collbtn on" : "collbtn",
        style: { paddingLeft: 8 + c * 14 },
        onClick: () => o(d.key, d.name),
        children: d.name
      }
    ),
    d.children.length > 0 && /* @__PURE__ */ m.jsx(fp, { nodes: d.children, active: r, onPick: o, depth: c + 1 })
  ] }, d.key)) });
}
function Nb() {
  const [u, r] = Q.useState([]), [o, c] = Q.useState(null), [d, h] = Q.useState(""), [p, T] = Q.useState(null);
  Q.useEffect(() => {
    let b = !0;
    const S = () => {
      Pe("/api/import/queue").then((H) => {
        b && H && H.ok && (r(H.items || []), c(H));
      }).catch(() => {
      });
    };
    S();
    const z = setInterval(S, 3e3);
    return () => {
      b = !1, clearInterval(z);
    };
  }, []);
  async function R() {
    const b = await Pe("/api/import/queue").catch(() => null);
    b && b.ok && (r(b.items || []), c(b));
  }
  async function O(b, S, z = {}) {
    const H = await wt("/api/import/queue-action", S !== void 0 ? { action: b, key: S, ...z } : { action: b });
    return H && H.ok ? (c(H.snapshot), R(), !0) : (h(H?.message || "操作失败"), !1);
  }
  function C(b) {
    const S = p;
    T(null), !(S === null || S === b) && O("reorder", S, { before: b });
  }
  const v = o?.total ?? u.length, M = (o?.done ?? 0) + (o?.failed ?? 0) + (o?.cancelled ?? 0);
  return /* @__PURE__ */ m.jsxs("div", { className: "queuebox", children: [
    /* @__PURE__ */ m.jsxs("div", { className: "qhead", children: [
      /* @__PURE__ */ m.jsx("b", { children: "导入队列" }),
      /* @__PURE__ */ m.jsx("span", { className: "hint", children: v ? `${M}/${v} 完成 · 运行 ${(o?.running ?? 0) + (o?.stopping ?? 0)} · 排队 ${o?.pending ?? 0}${o?.paused ? " · 已暂停" : ""}` : "队列为空" }),
      /* @__PURE__ */ m.jsxs("span", { className: "qhead-actions", children: [
        /* @__PURE__ */ m.jsx($e, { disabled: !o || v === 0, onClick: () => {
          O(o?.paused ? "resume" : "pause");
        }, children: o?.paused ? "继续" : "暂停" }),
        /* @__PURE__ */ m.jsx($e, { disabled: !o || (o?.done ?? 0) + (o?.cancelled ?? 0) === 0, onClick: () => {
          O("clear-done");
        }, children: "清理已完成" })
      ] })
    ] }),
    d && /* @__PURE__ */ m.jsx("p", { className: "hint", children: d }),
    u.length === 0 ? /* @__PURE__ */ m.jsx("p", { className: "hint", children: "拖入文件、粘贴全文或从 Zotero 加入后，条目在这里串行拆解；支持单篇停止/开始与拖拽排序。" }) : /* @__PURE__ */ m.jsx("div", { className: "qlist", children: u.map((b) => /* @__PURE__ */ m.jsxs(
      "div",
      {
        className: p === b.key ? "qrow dragging" : "qrow",
        draggable: b.status === "pending",
        onDragStart: () => T(b.key),
        onDragOver: (S) => S.preventDefault(),
        onDrop: () => C(b.key),
        onDragEnd: () => T(null),
        children: [
          /* @__PURE__ */ m.jsx("span", { className: "qhandle", title: "拖拽排序（仅排队中）", children: "☰" }),
          /* @__PURE__ */ m.jsx("span", { className: "qstatus", children: _b[b.status] || b.status }),
          /* @__PURE__ */ m.jsx("span", { className: "qlabel", title: b.message || b.file || "", children: b.label }),
          (b.status === "pending" || b.status === "running") && /* @__PURE__ */ m.jsx($e, { onClick: () => {
            O("cancel", b.key);
          }, children: "停止" }),
          b.status === "stopping" && /* @__PURE__ */ m.jsx("span", { className: "hint", children: "停止中…" }),
          (b.status === "cancelled" || b.status === "failed") && /* @__PURE__ */ m.jsx($e, { onClick: () => {
            O("start", b.key);
          }, children: "开始" }),
          b.status !== "running" && b.status !== "stopping" && /* @__PURE__ */ m.jsx($e, { onClick: () => {
            O("remove", b.key);
          }, children: "移除" }),
          b.status === "failed" && b.message && /* @__PURE__ */ m.jsx("span", { className: "qerr", children: b.message }),
          b.status === "done" && /* @__PURE__ */ m.jsx("span", { className: "qok", children: "已入库" })
        ]
      },
      b.key
    )) })
  ] });
}
function wb() {
  const [u, r] = Q.useState([]), [o, c] = Q.useState(null), [d, h] = Q.useState([]), [p, T] = Q.useState(""), [R, O] = Q.useState("collection"), [C, v] = Q.useState(null), [M, b] = Q.useState(/* @__PURE__ */ new Set()), [S, z] = Q.useState(""), [H, $] = Q.useState(!1);
  Q.useEffect(() => {
    Pe("/api/zotero/collections").then((ae) => {
      ae && ae.ok ? r(ae.collections || []) : z(ae?.message || "分类读取失败（Zotero 桌面端在运行吗？）");
    }).catch(() => z("分类读取失败"));
  }, []);
  async function J(ae, se) {
    O("collection"), c(ae), b(/* @__PURE__ */ new Set()), $(!0), z(`加载「${se}」…`);
    try {
      const ge = await Pe(`/api/zotero/collection-items?key=${encodeURIComponent(ae)}`);
      ge && ge.ok ? (h(ge.items || []), ge.truncated ? z(`该分类较大，列表显示前 ${ge.items.length} 条文献；更多可用搜索收窄`) : (ge.items || []).length ? z("") : z("该分类没有可导入的文献条目")) : z(ge?.message || "条目读取失败");
    } catch (ge) {
      z(String(ge?.message || ge));
    }
    $(!1);
  }
  async function Z() {
    O("search"), c(null), b(/* @__PURE__ */ new Set()), $(!0), z("");
    try {
      const ae = await wt("/api/tool/zotero_search", { query: p, limit: 50 });
      ae && Array.isArray(ae.items) ? (v(ae.items.map((se) => ({
        key: se.key,
        title: se.title,
        authors: se.creators,
        year: String(se.date || "").slice(0, 4),
        itemType: se.itemType
      }))), ae.items.length || z("没有命中条目")) : z(ae?.message || "Zotero 查询失败");
    } catch (ae) {
      z(String(ae?.message || ae));
    }
    $(!1);
  }
  const X = R === "collection" ? d : C || [];
  function he(ae) {
    b((se) => {
      const ge = new Set(se);
      return ge.has(ae) ? ge.delete(ae) : ge.add(ae), ge;
    });
  }
  function P() {
    b((ae) => ae.size >= X.length && X.length > 0 ? /* @__PURE__ */ new Set() : new Set(X.map((se) => se.key)));
  }
  async function ne() {
    const ae = X.filter((we) => M.has(we.key));
    if (!ae.length) {
      z("先勾选条目");
      return;
    }
    $(!0);
    const se = [], ge = [];
    for (let we = 0; we < ae.length; we++) {
      const ke = ae[we];
      z(`解析附件 ${we + 1}/${ae.length}…`);
      try {
        const ft = await wt("/api/tool/zotero_item", { key: ke.key }), B = ft && Array.isArray(ft.attachments) && ft.attachments[0] ? ft.attachments[0] : null;
        if (!B) {
          ge.push(ke.title || ke.key);
          continue;
        }
        const L = await wt("/api/tool/zotero_attachment_path", { attachmentKey: B.key || B });
        L && L.path ? se.push({ label: ke.title || ke.key, pdfPath: String(L.path), source: `zotero:${ke.key}` }) : ge.push(ke.title || ke.key);
      } catch {
        ge.push(ke.title || ke.key);
      }
    }
    if (se.length) {
      const we = await wt("/api/import/enqueue", { items: se });
      we && we.ok ? (z(`已入队 ${we.queued} 篇${ge.length ? `；${ge.length} 篇缺附件未入队：${ge.slice(0, 2).join("、")}${ge.length > 2 ? "…" : ""}` : ""}`), b(/* @__PURE__ */ new Set()), Rt.toast.show({ message: `已入队 ${we.queued} 篇，队列开始执行`, type: "success" })) : z(we?.message || "入队失败");
    } else
      z(`没有可入队条目${ge.length ? `（${ge.length} 篇缺附件）` : ""}`);
    $(!1);
  }
  async function me(ae) {
    $(!0);
    try {
      const se = await wt("/api/tool/zotero_item", { key: ae }), ge = se && Array.isArray(se.attachments) && se.attachments[0] ? se.attachments[0] : null;
      if (!ge) {
        z("该条目无附件"), $(!1);
        return;
      }
      const we = await wt("/api/tool/zotero_attachment_path", { attachmentKey: ge.key || ge });
      we && we.path ? (await Rt.clipboard.writeText(String(we.path)), Rt.toast.show({ message: "路径已复制", type: "success" })) : z(we?.message || "附件路径解析失败");
    } catch (se) {
      z(String(se?.message || se));
    }
    $(!1);
  }
  return /* @__PURE__ */ m.jsxs("div", { className: "zbox", children: [
    /* @__PURE__ */ m.jsx("p", { className: "hint", children: "需 Zotero 桌面端运行，且设置 → 高级 → 勾选「Allow other applications on this computer to communicate with Zotero」。勾选后加入队列，串行拆解（并发 1，随时可停）。" }),
    /* @__PURE__ */ m.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ m.jsx(
        Ct,
        {
          label: "搜索（标题 / 作者 / 年份）",
          value: p,
          onChange: (ae) => T(ae.currentTarget.value),
          onKeyDown: (ae) => {
            ae.key === "Enter" && Z();
          }
        }
      ),
      /* @__PURE__ */ m.jsx($e, { disabled: H, onClick: () => {
        Z();
      }, children: "搜索" }),
      /* @__PURE__ */ m.jsxs($e, { variant: "primary", disabled: H || M.size === 0, onClick: () => {
        ne();
      }, children: [
        "加入队列（",
        M.size,
        "）"
      ] }),
      /* @__PURE__ */ m.jsx($e, { disabled: H || X.length === 0, onClick: P, children: M.size >= X.length && X.length > 0 ? "取消全选" : "全选本页" })
    ] }),
    S && /* @__PURE__ */ m.jsx("p", { className: "hint", children: S }),
    /* @__PURE__ */ m.jsxs("div", { className: "zgrid", children: [
      /* @__PURE__ */ m.jsxs("div", { className: "ztree", children: [
        /* @__PURE__ */ m.jsx(
          "div",
          {
            className: R === "collection" && !o ? "collbtn on" : "collbtn",
            onClick: () => {
              O("collection"), b(/* @__PURE__ */ new Set());
            },
            children: "按分类浏览"
          }
        ),
        /* @__PURE__ */ m.jsx(fp, { nodes: u, active: o, onPick: (ae, se) => {
          J(ae, se);
        } })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "zlist zlistpick", children: [
        X.length === 0 && /* @__PURE__ */ m.jsx("p", { className: "hint", children: R === "collection" ? "选择左侧分类加载条目，或用搜索。" : "搜索无结果。" }),
        X.map((ae) => /* @__PURE__ */ m.jsxs("label", { className: "zrow", children: [
          /* @__PURE__ */ m.jsx("input", { type: "checkbox", checked: M.has(ae.key), onChange: () => he(ae.key) }),
          /* @__PURE__ */ m.jsxs("span", { className: "zrow-main", children: [
            /* @__PURE__ */ m.jsx("b", { children: ae.title || "（无题名）" }),
            /* @__PURE__ */ m.jsx("span", { className: "hint", children: [ae.authors, ae.year].filter(Boolean).join(" · ") })
          ] }),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: "linkbtn",
              onClick: (se) => {
                se.preventDefault(), me(ae.key);
              },
              children: "路径"
            }
          )
        ] }, ae.key))
      ] })
    ] })
  ] });
}
function Ob({ stats: u, go: r, onDone: o }) {
  const c = u ? u.queuePending + u.failures : 0, [d, h] = Q.useState("loading");
  return Q.useEffect(() => {
    Pe("/api/config").then((p) => {
      const T = p?.config?.libraryPath ?? "";
      h(T && !String(T).startsWith("NOT_CONFIGURED") ? "ok" : "unconfigured");
    }).catch(() => h("loading"));
  }, []), /* @__PURE__ */ m.jsxs("div", { className: "home", children: [
    /* @__PURE__ */ m.jsx("p", { className: "tagline", children: "把论文拆成可回溯的论证结构，沉淀为写作模型，写论文时检索取用。" }),
    d === "unconfigured" && /* @__PURE__ */ m.jsxs("div", { className: "home-banner", children: [
      "尚未配置结构库。到「设置」填写 libraryPath 并保存，模板会自动铺到该目录，无需手动拷贝。",
      /* @__PURE__ */ m.jsx($e, { onClick: () => r("settings"), children: "前往设置" })
    ] }),
    /* @__PURE__ */ m.jsxs("ol", { className: "steps", children: [
      /* @__PURE__ */ m.jsx("li", { children: "把文献拖进面板一键拆解，或在对话里让我拆" }),
      /* @__PURE__ */ m.jsx("li", { children: "库里提出的疑问到「待办」处理，保证每条引文可回溯" }),
      /* @__PURE__ */ m.jsx("li", { children: "写论文时到「取用」检索同类模型，按出处引用" })
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: "home-actions", children: [
      /* @__PURE__ */ m.jsx($e, { variant: "primary", onClick: () => r("use"), children: "去取用" }),
      /* @__PURE__ */ m.jsx($e, { onClick: () => r("library"), children: "看结构库" }),
      /* @__PURE__ */ m.jsx($e, { disabled: !u || c === 0, onClick: () => r("todo"), children: c > 0 ? `处理待办（${c}）` : "暂无待办" })
    ] }),
    /* @__PURE__ */ m.jsx("div", { className: "statusbar", children: u ? `库内 ${u.papers} 篇目 · ${u.models} 模型 · 待办 ${c} 条` : "统计中…" }),
    /* @__PURE__ */ m.jsx(Ab, { onDone: o })
  ] });
}
function Cb({ tick: u, bump: r }) {
  const [o, c] = Q.useState([]), [d, h] = Q.useState(null), [p, T] = Q.useState(""), R = Q.useCallback(async () => {
    const v = await Pe("/api/import/failures").catch(() => ({ items: [] }));
    c(v.items || []);
  }, []);
  Q.useEffect(() => {
    R();
  }, [R, u]), Q.useEffect(() => {
    let v = !1;
    return (async () => {
      const M = await Pe("/api/import/status").catch(() => null);
      if (v || !M || !M.running) return;
      T("有导入任务进行中，等待结果…");
      const b = await Do();
      v || (T(b.ok ? `完成：${b.file}` : `仍失败：${b.message || "未知错误"}${b.failureTs ? "（已刷新记录）" : ""}`), (b.ok || b.failureTs) && (await R(), r()));
    })(), () => {
      v = !0;
    };
  }, []);
  async function O(v) {
    h(v.ts), T("");
    try {
      const M = await wt("/api/import", { text: v.text, fromTs: v.ts });
      if (M.started) {
        T("重试中（约 1-3 分钟，可离开本页）…");
        const b = await Do();
        b.ok ? (T(`重试成功：${b.file}`), Rt.toast.show({ message: "重试成功，已入库", type: "success" })) : T(`仍失败：${b.message || "未知错误"}${b.failureTs ? "（已刷新记录）" : ""}`);
      } else M.ok ? (T(`重试成功：${M.file}`), Rt.toast.show({ message: "重试成功，已入库", type: "success" })) : T(`仍失败：${M.message || "未知错误"}`);
    } catch (M) {
      T(`请求失败：${String(M?.message || M)}`);
    }
    h(null), await R(), r();
  }
  async function C(v) {
    await wt("/api/import/failures/dismiss", { ts: v.ts }).catch(() => null), await R(), r();
  }
  return o.length ? /* @__PURE__ */ m.jsxs("div", { children: [
    /* @__PURE__ */ m.jsxs("p", { className: "hint", children: [
      o.length > 0 && /* @__PURE__ */ m.jsxs("b", { children: [
        "共 ",
        o.length,
        " 条待处理　"
      ] }),
      "拆解失败的导入（多为校验未过或模型异常）连原文一起存在这里，重试走同一条链路。"
    ] }),
    o.map((v) => /* @__PURE__ */ m.jsxs("div", { className: "fail-item", children: [
      /* @__PURE__ */ m.jsxs("div", { className: "fail-head", children: [
        /* @__PURE__ */ m.jsx("b", { children: new Date(v.ts).toLocaleString() }),
        /* @__PURE__ */ m.jsx("span", { className: "badge", children: v.stage }),
        /* @__PURE__ */ m.jsxs("span", { className: "hint", children: [
          "尝试 ",
          v.attempts,
          " 次 · ",
          (v.text || "").length,
          " 字"
        ] })
      ] }),
      /* @__PURE__ */ m.jsx("div", { className: "fail-msg", children: v.message }),
      (v.errors || []).slice(0, 4).map((M, b) => /* @__PURE__ */ m.jsxs("div", { className: "hint", children: [
        "· ",
        M.field,
        "：",
        M.message
      ] }, b)),
      /* @__PURE__ */ m.jsxs("div", { className: "fail-actions", children: [
        /* @__PURE__ */ m.jsx($e, { variant: "primary", disabled: d === v.ts, onClick: () => {
          O(v);
        }, children: d === v.ts ? "重试中…" : "重试" }),
        /* @__PURE__ */ m.jsx($e, { disabled: d === v.ts, onClick: () => {
          C(v);
        }, children: "移除" })
      ] })
    ] }, v.ts)),
    p && /* @__PURE__ */ m.jsx("p", { className: p.startsWith("重试成功") ? "ok" : "err", children: p })
  ] }) : /* @__PURE__ */ m.jsx(iu, { title: "暂无导入失败", description: "导入拆解失败的文献会落在这里，可原样重试。" });
}
function Rb() {
  const u = document.getElementById("root")?.dataset.surface || "page", [r, o] = Q.useState("home"), [c, d] = Q.useState({
    home: "",
    use: "search",
    library: "browse",
    todo: "score",
    settings: ""
  }), [h, p] = Q.useState(0), [T, R] = Q.useState(null), O = Q.useCallback(() => p((S) => S + 1), []), C = Q.useCallback((S) => o(S), []);
  Q.useEffect(() => {
    Rt.ready(), Rt.ui.resize({ height: u === "widget" ? 420 : 760 });
  }, [u]), Q.useEffect(() => {
    let S = !0;
    return mb().then((z) => {
      S && R(z);
    }).catch(() => {
      S && R(null);
    }), () => {
      S = !1;
    };
  }, [h, r]);
  const v = c[r], M = Q.useMemo(() => {
    switch (r) {
      case "home":
        return /* @__PURE__ */ m.jsx(Ob, { stats: T, go: C, onDone: O });
      case "use":
        return v === "models" ? /* @__PURE__ */ m.jsx(bb, { tick: h }) : /* @__PURE__ */ m.jsx(Sb, {});
      case "library":
        return v === "compare" ? /* @__PURE__ */ m.jsx(yb, { tick: h }) : v === "board" ? /* @__PURE__ */ m.jsx(Eb, { tick: h }) : /* @__PURE__ */ m.jsx(vb, { tick: h });
      case "todo":
        return v === "queue" ? /* @__PURE__ */ m.jsx(pb, { tick: h }) : v === "import-fail" ? /* @__PURE__ */ m.jsx(Cb, { tick: h, bump: O }) : /* @__PURE__ */ m.jsx(gb, {});
      case "settings":
        return /* @__PURE__ */ m.jsx(Tb, {});
    }
  }, [r, v, h, T, C, O]), b = T ? T.queuePending + T.failures : 0;
  return /* @__PURE__ */ m.jsx(rb, { mode: "inherit", className: "plugin-panel", children: /* @__PURE__ */ m.jsxs(
    Ca,
    {
      title: "论文结构建模",
      description: "把论文拆成可回溯的论证结构，沉淀为写作模型，写论文时检索取用。",
      actions: /* @__PURE__ */ m.jsx($e, { variant: "ghost", onClick: O, children: "刷新" }),
      children: [
        /* @__PURE__ */ m.jsx("nav", { className: "tabs zones", children: ob.map((S) => /* @__PURE__ */ m.jsxs("button", { className: r === S.id ? "tab on" : "tab", onClick: () => o(S.id), children: [
          S.label,
          S.id === "todo" && b > 0 && /* @__PURE__ */ m.jsx("span", { className: "nav-badge", children: b })
        ] }, S.id)) }),
        r !== "home" && r !== "settings" && /* @__PURE__ */ m.jsx("nav", { className: "tabs sub", children: fb[r].map((S) => /* @__PURE__ */ m.jsxs(
          "button",
          {
            className: v === S.id ? "tab on" : "tab",
            onClick: () => d((z) => ({ ...z, [r]: S.id })),
            children: [
              S.label,
              r === "todo" && S.id === "import-fail" && (T?.failures ?? 0) > 0 && /* @__PURE__ */ m.jsx("span", { className: "nav-badge", children: T?.failures ?? 0 }),
              r === "todo" && S.id === "queue" && (T?.queuePending ?? 0) > 0 && /* @__PURE__ */ m.jsx("span", { className: "nav-badge", children: T?.queuePending ?? 0 })
            ]
          },
          S.id
        )) }),
        /* @__PURE__ */ m.jsx("div", { className: "tab-body", children: M })
      ]
    }
  ) });
}
const Mg = document.getElementById("root");
Mg && p0.createRoot(Mg).render(/* @__PURE__ */ m.jsx(Rb, {}));
