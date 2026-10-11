var vo = { exports: {} }, Xi = {};
var sg;
function r0() {
  if (sg) return Xi;
  sg = 1;
  var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function o(c, d, h) {
    var p = null;
    if (h !== void 0 && (p = "" + h), d.key !== void 0 && (p = "" + d.key), "key" in d) {
      h = {};
      for (var S in d)
        S !== "key" && (h[S] = d[S]);
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
  return og || (og = 1, vo.exports = r0()), vo.exports;
}
var m = c0(), yo = { exports: {} }, be = {};
var fg;
function s0() {
  if (fg) return be;
  fg = 1;
  var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.consumer"), p = /* @__PURE__ */ Symbol.for("react.context"), S = /* @__PURE__ */ Symbol.for("react.forward_ref"), R = /* @__PURE__ */ Symbol.for("react.suspense"), O = /* @__PURE__ */ Symbol.for("react.memo"), w = /* @__PURE__ */ Symbol.for("react.lazy"), v = /* @__PURE__ */ Symbol.for("react.activity"), H = /* @__PURE__ */ Symbol.for("react.view_transition"), U = Symbol.iterator;
  function N(y) {
    return y === null || typeof y != "object" ? null : (y = U && y[U] || y["@@iterator"], typeof y == "function" ? y : null);
  }
  var B = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, j = Object.assign, ne = {};
  function F(y, Y, ie) {
    this.props = y, this.context = Y, this.refs = ne, this.updater = ie || B;
  }
  F.prototype.isReactComponent = {}, F.prototype.setState = function(y, Y) {
    if (typeof y != "object" && typeof y != "function" && y != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, y, Y, "setState");
  }, F.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function Q() {
  }
  Q.prototype = F.prototype;
  function Z(y, Y, ie) {
    this.props = y, this.context = Y, this.refs = ne, this.updater = ie || B;
  }
  var oe = Z.prototype = new Q();
  oe.constructor = Z, j(oe, F.prototype), oe.isPureReactComponent = !0;
  var te = Array.isArray;
  function le() {
  }
  var ge = { H: null, A: null, T: null, S: null }, $e = Object.prototype.hasOwnProperty;
  function we(y, Y, ie) {
    var ee = ie.ref;
    return {
      $$typeof: u,
      type: y,
      key: Y,
      ref: ee !== void 0 ? ee : null,
      props: ie
    };
  }
  function We(y, Y) {
    return we(y.type, Y, y.props);
  }
  function Je(y) {
    return typeof y == "object" && y !== null && y.$$typeof === u;
  }
  function gt(y) {
    var Y = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(ie) {
      return Y[ie];
    });
  }
  var Rt = /\/+/g;
  function L(y, Y) {
    return typeof y == "object" && y !== null && y.key != null ? gt("" + y.key) : Y.toString(36);
  }
  function V(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (typeof y.status == "string" ? y.then(le, le) : (y.status = "pending", y.then(
          function(Y) {
            y.status === "pending" && (y.status = "fulfilled", y.value = Y);
          },
          function(Y) {
            y.status === "pending" && (y.status = "rejected", y.reason = Y);
          }
        )), y.status) {
          case "fulfilled":
            return y.value;
          case "rejected":
            throw y.reason;
        }
    }
    throw y;
  }
  function J(y, Y, ie, ee, Se) {
    var Te = typeof y;
    (Te === "undefined" || Te === "boolean") && (y = null);
    var Re = !1;
    if (y === null) Re = !0;
    else
      switch (Te) {
        case "bigint":
        case "string":
        case "number":
          Re = !0;
          break;
        case "object":
          switch (y.$$typeof) {
            case u:
            case r:
              Re = !0;
              break;
            case w:
              return Re = y._init, J(
                Re(y._payload),
                Y,
                ie,
                ee,
                Se
              );
          }
      }
    if (Re)
      return Se = Se(y), Re = ee === "" ? "." + L(y, 0) : ee, te(Se) ? (ie = "", Re != null && (ie = Re.replace(Rt, "$&/") + "/"), J(Se, Y, ie, "", function(Wt) {
        return Wt;
      })) : Se != null && (Je(Se) && (Se = We(
        Se,
        ie + (Se.key == null || y && y.key === Se.key ? "" : ("" + Se.key).replace(
          Rt,
          "$&/"
        ) + "/") + Re
      )), Y.push(Se)), 1;
    Re = 0;
    var ue = ee === "" ? "." : ee + ":";
    if (te(y))
      for (var pe = 0; pe < y.length; pe++)
        ee = y[pe], Te = ue + L(ee, pe), Re += J(
          ee,
          Y,
          ie,
          Te,
          Se
        );
    else if (pe = N(y), typeof pe == "function")
      for (y = pe.call(y), pe = 0; !(ee = y.next()).done; )
        ee = ee.value, Te = ue + L(ee, pe++), Re += J(
          ee,
          Y,
          ie,
          Te,
          Se
        );
    else if (Te === "object") {
      if (typeof y.then == "function")
        return J(
          V(y),
          Y,
          ie,
          ee,
          Se
        );
      throw Y = String(y), Error(
        "Objects are not valid as a React child (found: " + (Y === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : Y) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Re;
  }
  function k(y, Y, ie) {
    if (y == null) return y;
    var ee = [], Se = 0;
    return J(y, ee, "", "", function(Te) {
      return Y.call(ie, Te, Se++);
    }), ee;
  }
  function fe(y) {
    if (y._status === -1) {
      var Y = y._result, ie = Y();
      ie.then(
        function(ee) {
          (y._status === 0 || y._status === -1) && (y._status = 1, y._result = ee, ie.status === void 0 && (ie.status = "fulfilled", ie.value = ee));
        },
        function(ee) {
          (y._status === 0 || y._status === -1) && (y._status = 2, y._result = ee, ie.status === void 0 && (ie.status = "rejected", ie.reason = ee));
        }
      ), y._status === -1 && (y._status = 0, y._result = ie);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var z = typeof reportError == "function" ? reportError : function(y) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var Y = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof y == "object" && y !== null && typeof y.message == "string" ? String(y.message) : String(y),
        error: y
      });
      if (!window.dispatchEvent(Y)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", y);
      return;
    }
    console.error(y);
  };
  function P(y) {
    var Y = ge.T, ie = {};
    ie.types = Y !== null ? Y.types : null, ge.T = ie;
    try {
      var ee = y(), Se = ge.S;
      Se !== null && Se(ie, ee), typeof ee == "object" && ee !== null && typeof ee.then == "function" && ee.then(le, z);
    } catch (Te) {
      z(Te);
    } finally {
      Y !== null && ie.types !== null && (Y.types = ie.types), ge.T = Y;
    }
  }
  function re(y) {
    var Y = ge.T;
    if (Y !== null) {
      var ie = Y.types;
      ie === null ? Y.types = [y] : ie.indexOf(y) === -1 && ie.push(y);
    } else P(re.bind(null, y));
  }
  var W = {
    map: k,
    forEach: function(y, Y, ie) {
      k(
        y,
        function() {
          Y.apply(this, arguments);
        },
        ie
      );
    },
    count: function(y) {
      var Y = 0;
      return k(y, function() {
        Y++;
      }), Y;
    },
    toArray: function(y) {
      return k(y, function(Y) {
        return Y;
      }) || [];
    },
    only: function(y) {
      if (!Je(y))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return y;
    }
  };
  return be.Activity = v, be.Children = W, be.Component = F, be.Fragment = o, be.Profiler = d, be.PureComponent = Z, be.StrictMode = c, be.Suspense = R, be.ViewTransition = H, be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ge, be.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(y) {
      return ge.H.useMemoCache(y);
    }
  }, be.addTransitionType = re, be.cache = function(y) {
    return function() {
      return y.apply(null, arguments);
    };
  }, be.cacheSignal = function() {
    return null;
  }, be.cloneElement = function(y, Y, ie) {
    if (y == null)
      throw Error(
        "The argument must be a React element, but you passed " + y + "."
      );
    var ee = j({}, y.props), Se = y.key;
    if (Y != null)
      for (Te in Y.key !== void 0 && (Se = "" + Y.key), Y)
        !$e.call(Y, Te) || Te === "key" || Te === "__self" || Te === "__source" || Te === "ref" && Y.ref === void 0 || (ee[Te] = Y[Te]);
    var Te = arguments.length - 2;
    if (Te === 1) ee.children = ie;
    else if (1 < Te) {
      for (var Re = Array(Te), ue = 0; ue < Te; ue++)
        Re[ue] = arguments[ue + 2];
      ee.children = Re;
    }
    return we(y.type, Se, ee);
  }, be.createContext = function(y) {
    return y = {
      $$typeof: p,
      _currentValue: y,
      _currentValue2: y,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, y.Provider = y, y.Consumer = {
      $$typeof: h,
      _context: y
    }, y;
  }, be.createElement = function(y, Y, ie) {
    var ee, Se = {}, Te = null;
    if (Y != null)
      for (ee in Y.key !== void 0 && (Te = "" + Y.key), Y)
        $e.call(Y, ee) && ee !== "key" && ee !== "__self" && ee !== "__source" && (Se[ee] = Y[ee]);
    var Re = arguments.length - 2;
    if (Re === 1) Se.children = ie;
    else if (1 < Re) {
      for (var ue = Array(Re), pe = 0; pe < Re; pe++)
        ue[pe] = arguments[pe + 2];
      Se.children = ue;
    }
    if (y && y.defaultProps)
      for (ee in Re = y.defaultProps, Re)
        Se[ee] === void 0 && (Se[ee] = Re[ee]);
    return we(y, Te, Se);
  }, be.createRef = function() {
    return { current: null };
  }, be.forwardRef = function(y) {
    return { $$typeof: S, render: y };
  }, be.isValidElement = Je, be.lazy = function(y) {
    return {
      $$typeof: w,
      _payload: { _status: -1, _result: y },
      _init: fe
    };
  }, be.memo = function(y, Y) {
    return {
      $$typeof: O,
      type: y,
      compare: Y === void 0 ? null : Y
    };
  }, be.startTransition = P, be.unstable_useCacheRefresh = function() {
    return ge.H.useCacheRefresh();
  }, be.use = function(y) {
    return ge.H.use(y);
  }, be.useActionState = function(y, Y, ie) {
    return ge.H.useActionState(y, Y, ie);
  }, be.useCallback = function(y, Y) {
    return ge.H.useCallback(y, Y);
  }, be.useContext = function(y) {
    return ge.H.useContext(y);
  }, be.useDebugValue = function() {
  }, be.useDeferredValue = function(y, Y) {
    return ge.H.useDeferredValue(y, Y);
  }, be.useEffect = function(y, Y) {
    return ge.H.useEffect(y, Y);
  }, be.useEffectEvent = function(y) {
    return ge.H.useEffectEvent(y);
  }, be.useId = function() {
    return ge.H.useId();
  }, be.useImperativeHandle = function(y, Y, ie) {
    return ge.H.useImperativeHandle(y, Y, ie);
  }, be.useInsertionEffect = function(y, Y) {
    return ge.H.useInsertionEffect(y, Y);
  }, be.useLayoutEffect = function(y, Y) {
    return ge.H.useLayoutEffect(y, Y);
  }, be.useMemo = function(y, Y) {
    return ge.H.useMemo(y, Y);
  }, be.useOptimistic = function(y, Y) {
    return ge.H.useOptimistic(y, Y);
  }, be.useReducer = function(y, Y, ie) {
    return ge.H.useReducer(y, Y, ie);
  }, be.useRef = function(y) {
    return ge.H.useRef(y);
  }, be.useState = function(y) {
    return ge.H.useState(y);
  }, be.useSyncExternalStore = function(y, Y, ie) {
    return ge.H.useSyncExternalStore(
      y,
      Y,
      ie
    );
  }, be.useTransition = function() {
    return ge.H.useTransition();
  }, be.version = "19.3.0", be;
}
var dg;
function zo() {
  return dg || (dg = 1, yo.exports = s0()), yo.exports;
}
var K = zo(), Eo = { exports: {} }, Qi = {}, bo = { exports: {} }, So = {};
var hg;
function o0() {
  return hg || (hg = 1, (function(u) {
    function r(V, J) {
      var k = V.length;
      V.push(J);
      e: for (; 0 < k; ) {
        var fe = k - 1 >>> 1, z = V[fe];
        if (0 < d(z, J))
          V[fe] = J, V[k] = z, k = fe;
        else break e;
      }
    }
    function o(V) {
      return V.length === 0 ? null : V[0];
    }
    function c(V) {
      if (V.length === 0) return null;
      var J = V[0], k = V.pop();
      if (k !== J) {
        V[0] = k;
        e: for (var fe = 0, z = V.length, P = z >>> 1; fe < P; ) {
          var re = 2 * (fe + 1) - 1, W = V[re], y = re + 1, Y = V[y];
          if (0 > d(W, k))
            y < z && 0 > d(Y, W) ? (V[fe] = Y, V[y] = k, fe = y) : (V[fe] = W, V[re] = k, fe = re);
          else if (y < z && 0 > d(Y, k))
            V[fe] = Y, V[y] = k, fe = y;
          else break e;
        }
      }
      return J;
    }
    function d(V, J) {
      var k = V.sortIndex - J.sortIndex;
      return k !== 0 ? k : V.id - J.id;
    }
    if (u.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      u.unstable_now = function() {
        return h.now();
      };
    } else {
      var p = Date, S = p.now();
      u.unstable_now = function() {
        return p.now() - S;
      };
    }
    var R = [], O = [], w = 1, v = null, H = 3, U = !1, N = !1, B = !1, j = !1, ne = typeof setTimeout == "function" ? setTimeout : null, F = typeof clearTimeout == "function" ? clearTimeout : null, Q = typeof setImmediate < "u" ? setImmediate : null;
    function Z(V) {
      for (var J = o(O); J !== null; ) {
        if (J.callback === null) c(O);
        else if (J.startTime <= V)
          c(O), J.sortIndex = J.expirationTime, r(R, J);
        else break;
        J = o(O);
      }
    }
    function oe(V) {
      if (B = !1, Z(V), !N)
        if (o(R) !== null)
          N = !0, te || (te = !0, Je());
        else {
          var J = o(O);
          J !== null && L(oe, J.startTime - V);
        }
    }
    var te = !1, le = -1, ge = 5, $e = -1;
    function we() {
      return j ? !0 : !(u.unstable_now() - $e < ge);
    }
    function We() {
      if (j = !1, te) {
        var V = u.unstable_now();
        $e = V;
        var J = !0;
        try {
          e: {
            N = !1, B && (B = !1, F(le), le = -1), U = !0;
            var k = H;
            try {
              t: {
                for (Z(V), v = o(R); v !== null && !(v.expirationTime > V && we()); ) {
                  var fe = v.callback;
                  if (typeof fe == "function") {
                    v.callback = null, H = v.priorityLevel;
                    var z = fe(
                      v.expirationTime <= V
                    );
                    if (V = u.unstable_now(), typeof z == "function") {
                      v.callback = z, Z(V), J = !0;
                      break t;
                    }
                    v === o(R) && c(R), Z(V);
                  } else c(R);
                  v = o(R);
                }
                if (v !== null) J = !0;
                else {
                  var P = o(O);
                  P !== null && L(
                    oe,
                    P.startTime - V
                  ), J = !1;
                }
              }
              break e;
            } finally {
              v = null, H = k, U = !1;
            }
            J = void 0;
          }
        } finally {
          J ? Je() : te = !1;
        }
      }
    }
    var Je;
    if (typeof Q == "function")
      Je = function() {
        Q(We);
      };
    else if (typeof MessageChannel < "u") {
      var gt = new MessageChannel(), Rt = gt.port2;
      gt.port1.onmessage = We, Je = function() {
        Rt.postMessage(null);
      };
    } else
      Je = function() {
        ne(We, 0);
      };
    function L(V, J) {
      le = ne(function() {
        V(u.unstable_now());
      }, J);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(V) {
      V.callback = null;
    }, u.unstable_forceFrameRate = function(V) {
      0 > V || 125 < V ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ge = 0 < V ? Math.floor(1e3 / V) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return H;
    }, u.unstable_next = function(V) {
      switch (H) {
        case 1:
        case 2:
        case 3:
          var J = 3;
          break;
        default:
          J = H;
      }
      var k = H;
      H = J;
      try {
        return V();
      } finally {
        H = k;
      }
    }, u.unstable_requestPaint = function() {
      j = !0;
    }, u.unstable_runWithPriority = function(V, J) {
      switch (V) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          V = 3;
      }
      var k = H;
      H = V;
      try {
        return J();
      } finally {
        H = k;
      }
    }, u.unstable_scheduleCallback = function(V, J, k) {
      var fe = u.unstable_now();
      switch (typeof k == "object" && k !== null ? (k = k.delay, k = typeof k == "number" && 0 < k ? fe + k : fe) : k = fe, V) {
        case 1:
          var z = -1;
          break;
        case 2:
          z = 250;
          break;
        case 5:
          z = 1073741823;
          break;
        case 4:
          z = 1e4;
          break;
        default:
          z = 5e3;
      }
      return z = k + z, V = {
        id: w++,
        callback: J,
        priorityLevel: V,
        startTime: k,
        expirationTime: z,
        sortIndex: -1
      }, k > fe ? (V.sortIndex = k, r(O, V), o(R) === null && V === o(O) && (B ? (F(le), le = -1) : B = !0, L(oe, k - fe))) : (V.sortIndex = z, r(R, V), N || U || (N = !0, te || (te = !0, Je()))), V;
    }, u.unstable_shouldYield = we, u.unstable_wrapCallback = function(V) {
      var J = H;
      return function() {
        var k = H;
        H = J;
        try {
          return V.apply(this, arguments);
        } finally {
          H = k;
        }
      };
    };
  })(So)), So;
}
var mg;
function f0() {
  return mg || (mg = 1, bo.exports = o0()), bo.exports;
}
var To = { exports: {} }, _t = {};
var gg;
function d0() {
  if (gg) return _t;
  gg = 1;
  var u = zo();
  function r(w) {
    var v = "https://react.dev/errors/" + w;
    if (1 < arguments.length) {
      v += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var H = 2; H < arguments.length; H++)
        v += "&args[]=" + encodeURIComponent(arguments[H]);
    }
    return "Minified React error #" + w + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function S(w, v, H) {
    var U = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: U == null ? null : U === p ? p : "" + U,
      children: w,
      containerInfo: v,
      implementation: H
    };
  }
  var R = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function O(w, v) {
    if (w === "font") return "";
    if (typeof v == "string")
      return v === "use-credentials" ? v : "";
  }
  return _t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, _t.browser = function(w) {
    return { $$typeof: h, _reason: w };
  }, _t.createPortal = function(w, v) {
    var H = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)
      throw Error(r(299));
    return S(w, v, null, H);
  }, _t.flushSync = function(w) {
    var v = R.T, H = c.p;
    try {
      if (R.T = null, c.p = 2, w) return w();
    } finally {
      R.T = v, c.p = H, c.d.f();
    }
  }, _t.preconnect = function(w, v) {
    typeof w == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, c.d.C(w, v));
  }, _t.prefetchDNS = function(w) {
    typeof w == "string" && c.d.D(w);
  }, _t.preinit = function(w, v) {
    if (typeof w == "string" && v && typeof v.as == "string") {
      var H = v.as, U = O(H, v.crossOrigin), N = typeof v.integrity == "string" ? v.integrity : void 0, B = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
      H === "style" ? c.d.S(
        w,
        typeof v.precedence == "string" ? v.precedence : void 0,
        {
          crossOrigin: U,
          integrity: N,
          fetchPriority: B
        }
      ) : H === "script" && c.d.X(w, {
        crossOrigin: U,
        integrity: N,
        fetchPriority: B,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0
      });
    }
  }, _t.preinitModule = function(w, v) {
    if (typeof w == "string")
      if (typeof v == "object" && v !== null) {
        if (v.as == null || v.as === "script") {
          var H = O(
            v.as,
            v.crossOrigin
          );
          c.d.M(w, {
            crossOrigin: H,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
            nonce: typeof v.nonce == "string" ? v.nonce : void 0,
            fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0
          });
        }
      } else v == null && c.d.M(w);
  }, _t.preload = function(w, v) {
    if (typeof w == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
      var H = v.as, U = O(H, v.crossOrigin);
      c.d.L(w, H, {
        crossOrigin: U,
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
  }, _t.preloadModule = function(w, v) {
    if (typeof w == "string")
      if (v) {
        var H = O(v.as, v.crossOrigin);
        c.d.m(w, {
          as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
          crossOrigin: H,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0,
          nonce: typeof v.nonce == "string" ? v.nonce : void 0,
          fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0
        });
      } else c.d.m(w);
  }, _t.requestFormReset = function(w) {
    c.d.r(w);
  }, _t.unstable_batchedUpdates = function(w, v) {
    return w(v);
  }, _t.useFormState = function(w, v, H) {
    return R.H.useFormState(w, v, H);
  }, _t.useFormStatus = function() {
    return R.H.useHostTransitionStatus();
  }, _t.version = "19.3.0", _t;
}
var pg;
function h0() {
  if (pg) return To.exports;
  pg = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (r) {
        console.error(r);
      }
  }
  return u(), To.exports = d0(), To.exports;
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
  function S(e) {
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
  function w(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = w(e), t !== null) return t;
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
  function H(e) {
    for (e = e.return; e !== null; ) {
      if (e.tag === 3 || e.tag === 5 || e.tag === 27) return e;
      e = e.return;
    }
    return null;
  }
  function U(e) {
    var t = !1;
    for (e = e.return; e !== null && (e.tag === 4 && (t = !0), !(e.tag === 3 || e.tag === 5 || e.tag === 27)); )
      e = e.return;
    return t;
  }
  function N(e) {
    var t = [null, null], n = H(e);
    return n === null || B(
      t,
      e,
      n.child,
      { foundSelf: !1 }
    ), t;
  }
  function B(e, t, n, a) {
    for (; n !== null; ) {
      if (n === t) a.foundSelf = !0;
      else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
        if (a.foundSelf) return e[1] = n, !0;
        e[0] = n;
      } else if ((n.tag !== 22 || n.memoizedState === null) && B(
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
  function j(e) {
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
  var ne = null, F = null;
  function Q(e, t, n) {
    return e === n ? !0 : e === t ? (ne = e, !0) : !1;
  }
  function Z(e, t, n) {
    return e === n ? (F = e, !1) : e === t ? (F !== null && (ne = e), !0) : !1;
  }
  function oe(e) {
    if (e === null) return null;
    do
      e = e === null ? null : e.return;
    while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
    return e || null;
  }
  function te(e, t, n) {
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
  var le = Object.assign, ge = /* @__PURE__ */ Symbol.for("react.element"), $e = /* @__PURE__ */ Symbol.for("react.transitional.element"), we = /* @__PURE__ */ Symbol.for("react.portal"), We = /* @__PURE__ */ Symbol.for("react.fragment"), Je = /* @__PURE__ */ Symbol.for("react.strict_mode"), gt = /* @__PURE__ */ Symbol.for("react.profiler"), Rt = /* @__PURE__ */ Symbol.for("react.consumer"), L = /* @__PURE__ */ Symbol.for("react.context"), V = /* @__PURE__ */ Symbol.for("react.forward_ref"), J = /* @__PURE__ */ Symbol.for("react.suspense"), k = /* @__PURE__ */ Symbol.for("react.suspense_list"), fe = /* @__PURE__ */ Symbol.for("react.memo"), z = /* @__PURE__ */ Symbol.for("react.lazy"), P = /* @__PURE__ */ Symbol.for("react.activity"), re = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), W = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), y = /* @__PURE__ */ Symbol.for("react.view_transition"), Y = /* @__PURE__ */ Symbol.for("react.recoverable"), ie = Symbol.iterator;
  function ee(e) {
    return e === null || typeof e != "object" ? null : (e = ie && e[ie] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Se = /* @__PURE__ */ Symbol.for("react.client.reference");
  function Te(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Se ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case We:
        return "Fragment";
      case gt:
        return "Profiler";
      case Je:
        return "StrictMode";
      case J:
        return "Suspense";
      case k:
        return "SuspenseList";
      case P:
        return "Activity";
      case y:
        return "ViewTransition";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case we:
          return "Portal";
        case L:
          return e.displayName || "Context";
        case Rt:
          return (e._context.displayName || "Context") + ".Consumer";
        case V:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case fe:
          return t = e.displayName || null, t !== null ? t : Te(e.type) || "Memo";
        case z:
          t = e._payload, e = e._init;
          try {
            return Te(e(t));
          } catch {
          }
      }
    return null;
  }
  var Re = Array.isArray, ue = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, pe = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Wt = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, $n = [], Mn = -1;
  function en(e) {
    return { current: e };
  }
  function me(e) {
    0 > Mn || (e.current = $n[Mn], $n[Mn] = null, Mn--);
  }
  function Le(e, t) {
    Mn++, $n[Mn] = e.current, e.current = t;
  }
  var Vt = en(null), A = en(null), X = en(null), M = en(null);
  function G(e, t) {
    switch (Le(X, t), Le(A, e), Le(Vt, null), t.nodeType) {
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
    me(Vt), Le(Vt, e);
  }
  function se() {
    me(Vt), me(A), me(X);
  }
  function Me(e) {
    var t = e.memoizedState;
    t !== null && (Vl._currentValue = t.memoizedState, Le(M, e)), t = Vt.current;
    var n = Em(t, e.type);
    t !== n && (Le(A, e), Le(Vt, n));
  }
  function Ye(e) {
    A.current === e && (me(Vt), me(A)), M.current === e && (me(M), Vl._currentValue = Wt);
  }
  var pt, Mt;
  function vt(e) {
    if (pt === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        pt = t && t[1] || "", Mt = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + pt + e + Mt;
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
                } catch ($) {
                  var b = $;
                }
                Reflect.construct(e, [], I);
              } else {
                try {
                  I.call();
                } catch ($) {
                  b = $;
                }
                I = !1;
                try {
                  var x = Object.getOwnPropertyDescriptor(
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
                  I && (x !== void 0 ? Object.defineProperty(e.prototype, "props", x) : delete e.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch ($) {
                b = $;
              }
              (I = e()) && typeof I.catch == "function" && I.catch(function() {
              });
            }
          } catch ($) {
            if ($ && b && typeof $.stack == "string")
              return [$.stack, b.stack];
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
`), _ = f.split(`
`);
        for (l = a = 0; a < g.length && !g[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; l < _.length && !_[l].includes(
          "DetermineComponentFrameRoot"
        ); )
          l++;
        if (a === g.length || l === _.length)
          for (a = g.length - 1, l = _.length - 1; 1 <= a && 0 <= l && g[a] !== _[l]; )
            l--;
        for (; 1 <= a && 0 <= l; a--, l--)
          if (g[a] !== _[l]) {
            if (a !== 1 || l !== 1)
              do
                if (a--, l--, 0 > l || g[a] !== _[l]) {
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
    return (n = e ? e.displayName || e.name : "") ? vt(n) : "";
  }
  function Ua(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return vt(e.type);
      case 16:
        return vt("Lazy");
      case 13:
        return e.child !== t && t !== null ? vt("Suspense Fallback") : vt("Suspense");
      case 19:
        return vt("SuspenseList");
      case 0:
      case 15:
        return hn(e.type, !1);
      case 11:
        return hn(e.type.render, !1);
      case 1:
        return hn(e.type, !0);
      case 31:
        return vt("Activity");
      case 30:
        return vt("ViewTransition");
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
  var mn = Object.prototype.hasOwnProperty, Vr = u.unstable_scheduleCallback, Gr = u.unstable_cancelCallback, dp = u.unstable_shouldYield, hp = u.unstable_requestPaint, Gt = u.unstable_now, mp = u.unstable_getCurrentPriorityLevel, Bo = u.unstable_ImmediatePriority, Vo = u.unstable_UserBlockingPriority, uu = u.unstable_NormalPriority, gp = u.unstable_LowPriority, Go = u.unstable_IdlePriority, pp = u.log, vp = u.unstable_setDisableYieldValue, $l = null, Yt = null;
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
  function Yr(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Wl(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Tp(e, t, n, a, l, i) {
    var s = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var f = e.entanglements, g = e.expirationTimes, _ = e.hiddenUpdates;
    for (n = s & ~n; 0 < n; ) {
      var D = 31 - Xt(n), I = 1 << D;
      f[D] = 0, g[D] = -1;
      var b = _[D];
      if (b !== null)
        for (_[D] = null, D = 0; D < b.length; D++) {
          var x = b[D];
          x !== null && (x.lane &= -536870913);
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
  var jn = Math.random().toString(36).slice(2), yt = "__reactFiber$" + jn, jt = "__reactProps$" + jn, tl = "__reactContainer$" + jn, Fo = "__reactEvents$" + jn, Ap = "__reactListeners$" + jn, _p = "__reactHandles$" + jn, $o = "__reactResources$" + jn, ei = "__reactMarker$" + jn, fu = "__reactLoad$" + jn;
  function du(e) {
    delete e[yt], delete e[jt], delete e[Ap], delete e[_p];
  }
  function za(e) {
    var t;
    if (t = e[yt]) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[tl] || n[yt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = Hm(e); e !== null; ) {
            if (n = e[yt]) return n;
            e = Hm(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function nl(e) {
    if (e = e[yt] || e[tl]) {
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
  function ot(e) {
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
  var je = !1;
  function af() {
    var e = je;
    return je = !1, e;
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
  function Kr(e) {
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
  function Zr(e, t, n, a, l, i, s, f) {
    e.name = "", s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.type = s : e.removeAttribute("type"), t != null ? s === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Qt(t)) : e.value !== "" + Qt(t) && (e.value = "" + Qt(t)) : s !== "submit" && s !== "reset" || e.removeAttribute("value"), t != null ? s === "number" && e.value == t ? kr(e, Qt(e.value)) : kr(e, Qt(t)) : n != null ? kr(e, Qt(n)) : a != null && e.removeAttribute("value"), l == null && i != null && (e.defaultChecked = !!i), l != null && (e.checked = l && typeof l != "function" && typeof l != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.name = "" + Qt(f) : e.removeAttribute("name");
  }
  function rf(e, t, n, a, l, i, s, f) {
    if (i != null && typeof i != "function" && typeof i != "symbol" && typeof i != "boolean" && (e.type = i), t != null || n != null) {
      if (!(i !== "submit" && i !== "reset" || t != null)) {
        Kr(e);
        return;
      }
      n = n != null ? "" + Qt(n) : "", t = t != null ? "" + Qt(t) : n, f || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? l, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = f ? e.checked : !!a, e.defaultChecked = !!a, s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.name = s), Kr(e);
  }
  function kr(e, t) {
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
        if (Re(a)) {
          if (1 < a.length) throw Error(c(93));
          a = a[0];
        }
        n = a;
      }
      n == null && (n = ""), t = n;
    }
    n = Qt(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a), Kr(e);
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
        !n.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "", je = !0);
      for (var l in t)
        a = t[l], t.hasOwnProperty(l) && n[l] !== a && (of(e, l, a), je = !0);
    } else
      for (var i in t)
        t.hasOwnProperty(i) && of(e, i, t[i]);
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
  var Fr = null;
  function $r(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var rl = null, cl = null;
  function df(e) {
    var t = nl(e);
    if (t && (e = t.stateNode)) {
      var n = e[jt] || null;
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
              'input[name="' + tn(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var l = a[jt] || null;
                if (!l) throw Error(c(90));
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
  var Pr = !1;
  function hf(e, t, n) {
    if (Pr) return e(t, n);
    Pr = !0;
    try {
      var a = e(t);
      return a;
    } finally {
      if (Pr = !1, (rl !== null || cl !== null) && (gr(), rl && (t = rl, e = cl, cl = rl = null, df(t), e)))
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
  var qn = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Wr = !1;
  if (qn)
    try {
      var ai = {};
      Object.defineProperty(ai, "passive", {
        get: function() {
          Wr = !0;
        }
      }), window.addEventListener("test", ai, ai), window.removeEventListener("test", ai, ai);
    } catch {
      Wr = !1;
    }
  var Wn = null, ec = null, pu = null;
  function mf() {
    if (pu) return pu;
    var e, t = ec, n = t.length, a, l = "value" in Wn ? Wn.value : Wn.textContent, i = l.length;
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
    return le(t.prototype, {
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
  }, Eu = xt(ea), li = le({}, ea, { view: 0, detail: 0 }), Dp = xt(li), tc, nc, ii, bu = le({}, li, {
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
    getModifierState: lc,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== ii && (ii && e.type === "mousemove" ? (tc = e.screenX - ii.screenX, nc = e.screenY - ii.screenY) : nc = tc = 0, ii = e), tc);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : nc;
    }
  }), pf = xt(bu), zp = le({}, bu, { dataTransfer: 0 }), Mp = xt(zp), jp = le({}, li, { relatedTarget: 0 }), ac = xt(jp), Hp = le({}, ea, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), qp = xt(Hp), Lp = le({}, ea, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Ip = xt(Lp), Bp = le({}, ea, { data: 0 }), vf = xt(Bp), Vp = {
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
  function lc() {
    return Xp;
  }
  var Qp = le({}, li, {
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
    getModifierState: lc,
    charCode: function(e) {
      return e.type === "keypress" ? vu(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? vu(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Kp = xt(Qp), Zp = le({}, bu, {
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
  }), yf = xt(Zp), kp = le({}, ea, { submitter: 0 }), Jp = xt(kp), Fp = le({}, li, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: lc
  }), $p = xt(Fp), Pp = le({}, ea, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Wp = xt(Pp), ev = le({}, bu, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), tv = xt(ev), nv = le({}, ea, {
    newState: 0,
    oldState: 0,
    source: 0
  }), av = xt(nv), lv = [9, 13, 27, 32], ic = qn && "CompositionEvent" in window, ui = null;
  qn && "documentMode" in document && (ui = document.documentMode);
  var iv = qn && "TextEvent" in window && !ui, Ef = qn && (!ic || ui && 8 < ui && 11 >= ui), bf = " ", Sf = !1;
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
      return e === "compositionend" || !ic && Tf(e, t) ? (e = mf(), pu = ec = Wn = null, sl = !1, e) : null;
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
    var uc;
    if (qn) {
      var rc = "oninput" in document;
      if (!rc) {
        var Cf = document.createElement("div");
        Cf.setAttribute("oninput", "return;"), rc = typeof Cf.oninput == "function";
      }
      uc = rc;
    } else uc = !1;
    Of = uc && (!document.documentMode || 9 < document.documentMode);
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
        $r(e)
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
  function cc(e) {
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
    for (var t = cc(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = cc(e.document);
    }
    return t;
  }
  function sc(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var gv = qn && "documentMode" in document && 11 >= document.documentMode, ol = null, oc = null, oi = null, fc = !1;
  function jf(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    fc || ol == null || ol !== cc(a) || (a = ol, "selectionStart" in a && sc(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), oi && si(oi, a) || (oi = a, a = Sr(oc, "onSelect"), 0 < a.length && (t = new Eu(
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
  }, dc = {}, Hf = {};
  qn && (Hf = document.createElement("div").style, "AnimationEvent" in window || (delete fl.animationend.animation, delete fl.animationiteration.animation, delete fl.animationstart.animation), "TransitionEvent" in window || delete fl.transitionend.transition);
  function Ha(e) {
    if (dc[e]) return dc[e];
    if (!fl[e]) return e;
    var t = fl[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in Hf)
        return dc[e] = t[n];
    return e;
  }
  var qf = Ha("animationend"), Lf = Ha("animationiteration"), If = Ha("animationstart"), pv = Ha("transitionrun"), vv = Ha("transitionstart"), yv = Ha("transitioncancel"), Bf = Ha("transitionend"), Vf = /* @__PURE__ */ new Map(), hc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  hc.push("scrollEnd");
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
  }, nn = [], dl = 0, mc = 0;
  function Au() {
    for (var e = dl, t = mc = dl = 0; t < e; ) {
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
    nn[dl++] = e, nn[dl++] = t, nn[dl++] = n, nn[dl++] = a, mc |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function gc(e, t, n, a) {
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
  function pc(e) {
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
    if (a = e, typeof a == "function") pc(a) && (s = 1);
    else if (typeof a == "string")
      s = ky(
        e,
        n,
        Vt.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (a) {
        case P:
          return e = Ht(31, n, t, l), e.elementType = P, e.lanes = i, e;
        case We:
          return La(n.children, l, i, t);
        case Je:
          s = 8, l |= 24;
          break;
        case gt:
          return e = Ht(12, n, t, l | 2), e.elementType = gt, e.lanes = i, e;
        case J:
          return e = Ht(13, n, t, l), e.elementType = J, e.lanes = i, e;
        case k:
          return e = Ht(19, n, t, l), e.elementType = k, e.lanes = i, e;
        case re:
        case y:
          return e = l | 32, e = Ht(30, n, t, e), e.elementType = y, e.lanes = i, e.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, e;
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case L:
                s = 10;
                break e;
              case Rt:
                s = 9;
                break e;
              case V:
                s = 11;
                break e;
              case fe:
                s = 14;
                break e;
              case z:
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
  function vc(e, t, n) {
    return e = Ht(6, e, null, t), e.lanes = n, e;
  }
  function Qf(e) {
    var t = Ht(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function yc(e, t, n) {
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
  function Ec(e) {
    for (; e === Ou; )
      Ou = ml[--gl], ml[gl] = null, fi = ml[--gl], ml[gl] = null;
    for (; e === ta; )
      ta = ln[--un], ln[un] = null, Nn = ln[--un], ln[un] = null, _n = ln[--un], ln[un] = null;
  }
  function kf(e, t) {
    ln[un++] = _n, ln[un++] = Nn, ln[un++] = ta, _n = t.id, Nn = t.overflow, ta = e;
  }
  var ft = null, Qe = null, Ne = !1, na = null, rn = !1, bc = Error(c(519));
  function aa(e) {
    var t = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw di(an(t, e)), bc;
  }
  function Jf(e) {
    var t = e.stateNode, n = e.type, a = e.memoizedProps;
    switch (t[yt] = e, t[jt] = a, n) {
      case "dialog":
        Ce("cancel", t), Ce("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ce("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < Mi.length; n++)
          Ce(Mi[n], t);
        break;
      case "source":
        Ce("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Ce("error", t), Ce("load", t);
        break;
      case "details":
        Ce("toggle", t);
        break;
      case "input":
        Ce("invalid", t), rf(
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
        Ce("invalid", t);
        break;
      case "textarea":
        Ce("invalid", t), sf(t, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === !0 || pm(t.textContent, n) ? (a.popover != null && (Ce("beforetoggle", t), Ce("toggle", t)), a.onScroll != null && Ce("scroll", t), a.onScrollEnd != null && Ce("scrollend", t), a.onClick != null && (t.onclick = An), t = !0) : t = !1, t || aa(e, !0);
  }
  function Ru(e) {
    for (ft = e.return; ft; )
      switch (ft.tag) {
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
          ft = ft.return;
      }
  }
  function pl(e) {
    if (e !== ft) return !1;
    if (!Ne) return Ru(e), Ne = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Fs(e.type, e.memoizedProps)), n = !n), n && Qe && aa(e), Ru(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Qe = jm(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Qe = jm(e);
    } else
      t === 27 ? (t = Qe, Ea(e.type) ? (e = io, io = null, Qe = e) : Qe = t) : Qe = ft ? sn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ia() {
    Qe = ft = null, Ne = !1;
  }
  function Sc() {
    var e = na;
    return e !== null && (It === null ? It = e : It.push.apply(
      It,
      e
    ), na = null), e;
  }
  function di(e) {
    na === null ? na = [e] : na.push(e);
  }
  var Tc = en(null), Ba = null, Gn = null;
  function la(e, t, n) {
    Le(Tc, t._currentValue), t._currentValue = n;
  }
  function Yn(e) {
    e._currentValue = Tc.current, me(Tc);
  }
  function xu(e, t, n) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Ac(e, t, n, a) {
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
      } else if (l === M.current) {
        if (s = l.alternate, s === null) throw Error(c(387));
        s.memoizedState.memoizedState !== l.memoizedState.memoizedState && (e !== null ? e.push(Vl) : e = [Vl]);
      }
      l = l.return;
    }
    return e !== null && Ac(
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
  function Et(e) {
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
  }, Tv = u.unstable_scheduleCallback, Av = u.unstable_NormalPriority, at = {
    $$typeof: L,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function _c() {
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
  var gi = null, Nc = 0, Ya = 0, vl = null;
  function Nv(e, t) {
    if (gi === null) {
      var n = gi = [];
      Nc = 0, Ya = Vs(), vl = {
        status: "pending",
        value: void 0,
        then: function(a) {
          n.push(a);
        }
      };
    }
    return Nc++, t.then(Pf, Pf), t;
  }
  function Pf() {
    if (--Nc === 0 && (mi = null, gi !== null)) {
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
  var Wf = ue.S;
  ue.S = function(e, t) {
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
  function wc() {
    var e = Xa.current;
    return e !== null ? e : Xe.pooledCache;
  }
  function zu(e, t) {
    t === null ? Le(Xa, Xa.current) : Le(Xa, t.pool);
  }
  function ed() {
    var e = wc();
    return e === null ? null : { parent: at._currentValue, pool: e };
  }
  var yl = Error(c(460)), Oc = Error(c(474)), Mu = Error(c(542)), ju = { then: function() {
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
    throw t.$$typeof === ge ? Error(c(525)) : (e = Object.prototype.toString.call(t), Error(
      c(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function id(e) {
    function t(T, E) {
      if (e) {
        var C = T.deletions;
        C === null ? (T.deletions = [E], T.flags |= 16) : C.push(E);
      }
    }
    function n(T, E) {
      if (!e) return null;
      for (; E !== null; )
        t(T, E), E = E.sibling;
      return null;
    }
    function a(T) {
      for (var E = /* @__PURE__ */ new Map(); T !== null; )
        T.key === null ? E.set(T.index, T) : E.set(T.key, T), T = T.sibling;
      return E;
    }
    function l(T, E) {
      return T = Bn(T, E), T.index = 0, T.sibling = null, T;
    }
    function i(T, E, C) {
      return T.index = C, e ? (C = T.alternate, C !== null ? (C = C.index, C < E ? (T.flags |= 2, E) : C) : (T.flags |= 134217730, E)) : (T.flags |= 1048576, E);
    }
    function s(T) {
      return e && T.alternate === null && (T.flags |= 134217730), T;
    }
    function f(T, E, C, q) {
      return E === null || E.tag !== 6 ? (E = vc(C, T.mode, q), E.return = T, E) : (E = l(E, C), E.return = T, E);
    }
    function g(T, E, C, q) {
      var ae = C.type;
      return ae === We ? (T = D(
        T,
        E,
        C.props.children,
        q,
        C.key
      ), ia(T, C), T) : E !== null && (E.elementType === ae || typeof ae == "object" && ae !== null && ae.$$typeof === z && Qa(ae) === E.type) ? (E = l(E, C.props), ia(E, C), E.return = T, E) : (E = wu(
        C.type,
        C.key,
        C.props,
        null,
        T.mode,
        q
      ), ia(E, C), E.return = T, E);
    }
    function _(T, E, C, q) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== C.containerInfo || E.stateNode.implementation !== C.implementation ? (E = yc(C, T.mode, q), E.return = T, E) : (E = l(E, C.children || []), E.return = T, E);
    }
    function D(T, E, C, q, ae) {
      return E === null || E.tag !== 7 ? (E = La(
        C,
        T.mode,
        q,
        ae
      ), E.return = T, E) : (E = l(E, C), E.return = T, E);
    }
    function I(T, E, C) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return E = vc(
          "" + E,
          T.mode,
          C
        ), E.return = T, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case $e:
            return C = wu(
              E.type,
              E.key,
              E.props,
              null,
              T.mode,
              C
            ), ia(C, E), C.return = T, C;
          case we:
            return E = yc(
              E,
              T.mode,
              C
            ), E.return = T, E;
          case z:
            return E = Qa(E), I(T, E, C);
        }
        if (Re(E) || ee(E))
          return E = La(
            E,
            T.mode,
            C,
            null
          ), E.return = T, E;
        if (typeof E.then == "function")
          return I(T, Hu(E), C);
        if (E.$$typeof === L)
          return I(
            T,
            Du(T, E),
            C
          );
        qu(T, E);
      }
      return null;
    }
    function b(T, E, C, q) {
      var ae = E !== null ? E.key : null;
      if (typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint")
        return ae !== null ? null : f(T, E, "" + C, q);
      if (typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case $e:
            return C.key === ae ? g(T, E, C, q) : null;
          case we:
            return C.key === ae ? _(T, E, C, q) : null;
          case z:
            return C = Qa(C), b(T, E, C, q);
        }
        if (Re(C) || ee(C))
          return ae !== null ? null : D(T, E, C, q, null);
        if (typeof C.then == "function")
          return b(
            T,
            E,
            Hu(C),
            q
          );
        if (C.$$typeof === L)
          return b(
            T,
            E,
            Du(T, C),
            q
          );
        qu(T, C);
      }
      return null;
    }
    function x(T, E, C, q, ae) {
      if (typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint")
        return T = T.get(C) || null, f(E, T, "" + q, ae);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case $e:
            return T = T.get(
              q.key === null ? C : q.key
            ) || null, g(E, T, q, ae);
          case we:
            return T = T.get(
              q.key === null ? C : q.key
            ) || null, _(E, T, q, ae);
          case z:
            return q = Qa(q), x(
              T,
              E,
              C,
              q,
              ae
            );
        }
        if (Re(q) || ee(q))
          return T = T.get(C) || null, D(E, T, q, ae, null);
        if (typeof q.then == "function")
          return x(
            T,
            E,
            C,
            Hu(q),
            ae
          );
        if (q.$$typeof === L)
          return x(
            T,
            E,
            C,
            Du(E, q),
            ae
          );
        qu(E, q);
      }
      return null;
    }
    function $(T, E, C, q) {
      for (var ae = null, Ue = null, he = E, ve = E = 0, ut = null; he !== null && ve < C.length; ve++) {
        he.index > ve ? (ut = he, he = null) : ut = he.sibling;
        var De = b(
          T,
          he,
          C[ve],
          q
        );
        if (De === null) {
          he === null && (he = ut);
          break;
        }
        e && he && De.alternate === null && t(T, he), E = i(De, E, ve), Ue === null ? ae = De : Ue.sibling = De, Ue = De, he = ut;
      }
      if (ve === C.length)
        return n(T, he), Ne && Vn(T, ve), ae;
      if (he === null) {
        for (; ve < C.length; ve++)
          he = I(T, C[ve], q), he !== null && (E = i(
            he,
            E,
            ve
          ), Ue === null ? ae = he : Ue.sibling = he, Ue = he);
        return Ne && Vn(T, ve), ae;
      }
      for (he = a(he); ve < C.length; ve++)
        ut = x(
          he,
          T,
          ve,
          C[ve],
          q
        ), ut !== null && (e && (De = ut.alternate, De !== null && he.delete(De.key === null ? ve : De.key)), E = i(
          ut,
          E,
          ve
        ), Ue === null ? ae = ut : Ue.sibling = ut, Ue = ut);
      return e && he.forEach(function(_a) {
        return t(T, _a);
      }), Ne && Vn(T, ve), ae;
    }
    function ce(T, E, C, q) {
      if (C == null) throw Error(c(151));
      for (var ae = null, Ue = null, he = E, ve = E = 0, ut = null, De = C.next(); he !== null && !De.done; ve++, De = C.next()) {
        he.index > ve ? (ut = he, he = null) : ut = he.sibling;
        var _a = b(T, he, De.value, q);
        if (_a === null) {
          he === null && (he = ut);
          break;
        }
        e && he && _a.alternate === null && t(T, he), E = i(_a, E, ve), Ue === null ? ae = _a : Ue.sibling = _a, Ue = _a, he = ut;
      }
      if (De.done)
        return n(T, he), Ne && Vn(T, ve), ae;
      if (he === null) {
        for (; !De.done; ve++, De = C.next())
          De = I(T, De.value, q), De !== null && (E = i(De, E, ve), Ue === null ? ae = De : Ue.sibling = De, Ue = De);
        return Ne && Vn(T, ve), ae;
      }
      for (he = a(he); !De.done; ve++, De = C.next())
        De = x(he, T, ve, De.value, q), De !== null && (e && (ut = De.alternate, ut !== null && he.delete(
          ut.key === null ? ve : ut.key
        )), E = i(De, E, ve), Ue === null ? ae = De : Ue.sibling = De, Ue = De);
      return e && he.forEach(function(u0) {
        return t(T, u0);
      }), Ne && Vn(T, ve), ae;
    }
    function _e(T, E, C, q) {
      if (typeof C == "object" && C !== null && C.type === We && C.key === null && C.props.ref === void 0 && (C = C.props.children), typeof C == "object" && C !== null) {
        switch (C.$$typeof) {
          case $e:
            e: {
              for (var ae = C.key; E !== null; ) {
                if (E.key === ae) {
                  if (ae = C.type, ae === We) {
                    if (E.tag === 7) {
                      n(
                        T,
                        E.sibling
                      ), q = l(
                        E,
                        C.props.children
                      ), ia(q, C), q.return = T, T = q;
                      break e;
                    }
                  } else if (E.elementType === ae || typeof ae == "object" && ae !== null && ae.$$typeof === z && Qa(ae) === E.type) {
                    n(
                      T,
                      E.sibling
                    ), q = l(E, C.props), ia(q, C), q.return = T, T = q;
                    break e;
                  }
                  n(T, E);
                  break;
                } else t(T, E);
                E = E.sibling;
              }
              C.type === We ? (q = La(
                C.props.children,
                T.mode,
                q,
                C.key
              ), ia(q, C), q.return = T, T = q) : (q = wu(
                C.type,
                C.key,
                C.props,
                null,
                T.mode,
                q
              ), ia(q, C), q.return = T, T = q);
            }
            return s(T);
          case we:
            e: {
              for (ae = C.key; E !== null; ) {
                if (E.key === ae)
                  if (E.tag === 4 && E.stateNode.containerInfo === C.containerInfo && E.stateNode.implementation === C.implementation) {
                    n(
                      T,
                      E.sibling
                    ), q = l(E, C.children || []), q.return = T, T = q;
                    break e;
                  } else {
                    n(T, E);
                    break;
                  }
                else t(T, E);
                E = E.sibling;
              }
              q = yc(C, T.mode, q), q.return = T, T = q;
            }
            return s(T);
          case z:
            return C = Qa(C), _e(
              T,
              E,
              C,
              q
            );
        }
        if (Re(C))
          return $(
            T,
            E,
            C,
            q
          );
        if (ee(C)) {
          if (ae = ee(C), typeof ae != "function") throw Error(c(150));
          return C = ae.call(C), ce(
            T,
            E,
            C,
            q
          );
        }
        if (typeof C.then == "function")
          return _e(
            T,
            E,
            Hu(C),
            q
          );
        if (C.$$typeof === L)
          return _e(
            T,
            E,
            Du(T, C),
            q
          );
        qu(T, C);
      }
      return typeof C == "string" && C !== "" || typeof C == "number" || typeof C == "bigint" ? (C = "" + C, E !== null && E.tag === 6 ? (n(T, E.sibling), q = l(E, C), q.return = T, T = q) : (n(T, E), q = vc(C, T.mode, q), q.return = T, T = q), s(T)) : n(T, E);
    }
    return function(T, E, C, q) {
      try {
        pi = 0;
        var ae = _e(
          T,
          E,
          C,
          q
        );
        return El = null, ae;
      } catch (he) {
        if (he === yl || he === Mu) throw he;
        var Ue = Ht(29, he, null, T.mode);
        return Ue.lanes = q, Ue.return = T, Ue;
      }
    };
  }
  var Za = id(!0), ud = id(!1), ua = !1;
  function Cc(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function Rc(e, t) {
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
    if (a = a.shared, (He & 2) !== 0) {
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
  function xc(e, t) {
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
  var Uc = !1;
  function yi() {
    if (Uc) {
      var e = vl;
      if (e !== null) throw e;
    }
  }
  function Ei(e, t, n, a) {
    Uc = !1;
    var l = e.updateQueue;
    ua = !1;
    var i = l.firstBaseUpdate, s = l.lastBaseUpdate, f = l.shared.pending;
    if (f !== null) {
      l.shared.pending = null;
      var g = f, _ = g.next;
      g.next = null, s === null ? i = _ : s.next = _, s = g;
      var D = e.alternate;
      D !== null && (D = D.updateQueue, f = D.lastBaseUpdate, f !== s && (f === null ? D.firstBaseUpdate = _ : f.next = _, D.lastBaseUpdate = g));
    }
    if (i !== null) {
      var I = l.baseState;
      s = 0, D = _ = g = null, f = i;
      do {
        var b = f.lane & -536870913, x = b !== f.lane;
        if (x ? (xe & b) === b : (a & b) === b) {
          b !== 0 && b === Ya && (Uc = !0), D !== null && (D = D.next = {
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: null,
            next: null
          });
          e: {
            var $ = e, ce = f;
            b = t;
            var _e = n;
            switch (ce.tag) {
              case 1:
                if ($ = ce.payload, typeof $ == "function") {
                  I = $.call(_e, I, b);
                  break e;
                }
                I = $;
                break e;
              case 3:
                $.flags = $.flags & -65537 | 128;
              case 0:
                if ($ = ce.payload, b = typeof $ == "function" ? $.call(_e, I, b) : $, b == null) break e;
                I = le({}, I, b);
                break e;
              case 2:
                ua = !0;
            }
          }
          b = f.callback, b !== null && (e.flags |= 64, x && (e.flags |= 8192), x = l.callbacks, x === null ? l.callbacks = [b] : x.push(b));
        } else
          x = {
            lane: b,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          }, D === null ? (_ = D = x, g = I) : D = D.next = x, s |= b;
        if (f = f.next, f === null) {
          if (f = l.shared.pending, f === null)
            break;
          x = f, f = x.next, x.next = null, l.lastBaseUpdate = x, l.shared.pending = null;
        }
      } while (!0);
      D === null && (g = I), l.baseState = g, l.firstBaseUpdate = _, l.lastBaseUpdate = D, i === null && (l.shared.lanes = 0), ga |= s, e.lanes = s, e.memoizedState = I;
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
    e = kn, Le(Lu, e), Le(sa, t), kn = e | t.baseLanes;
  }
  function Dc() {
    Le(Lu, kn), Le(sa, sa.current);
  }
  function zc() {
    kn = Lu.current, me(sa), me(Lu);
  }
  var bt = en(null), Ot = null;
  function oa(e) {
    var t = e.alternate;
    Le(St, St.current & 1), Le(bt, e), Ot === null && (t === null || sa.current !== null || t.memoizedState !== null) && (Ot = e);
  }
  function Mc(e) {
    Le(St, St.current), Le(bt, e), Ot === null && (Ot = e);
  }
  function od(e) {
    e.tag === 22 ? (Le(St, St.current), Le(bt, e), Ot === null && (Ot = e)) : fa();
  }
  function fa() {
    Le(St, St.current), Le(bt, bt.current);
  }
  function Zt(e) {
    me(bt), Ot === e && (Ot = null), me(St);
  }
  var St = en(0);
  function bi(e, t) {
    Le(bt, bt.current), Le(St, t);
  }
  function jc(e) {
    me(St), me(bt), Ot === e && (Ot = null);
  }
  function Iu(e) {
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
  var Xn = 0, Ae = null, Ge = null, lt = null, Bu = !1, bl = !1, ka = !1, Vu = 0, Si = 0, Sl = null, Ov = 0;
  function et() {
    throw Error(c(321));
  }
  function Hc(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Kt(e[n], t[n])) return !1;
    return !0;
  }
  function qc(e, t, n, a, l, i) {
    return Xn = i, Ae = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ue.H = e === null || e.memoizedState === null ? Zd : kd, ka = !1, i = n(a, l), ka = !1, bl && (i = dd(
      t,
      n,
      a,
      l
    )), fd(e), i;
  }
  function fd(e) {
    ue.H = ku;
    var t = Ge !== null && Ge.next !== null;
    if (Xn = 0, lt = Ge = Ae = null, Bu = !1, Si = 0, Sl = null, t) throw Error(c(300));
    e === null || it || (e = e.dependencies, e !== null && Uu(e) && (it = !0));
  }
  function dd(e, t, n, a) {
    Ae = e;
    var l = 0;
    do {
      if (bl && (Sl = null), Si = 0, bl = !1, 25 <= l) throw Error(c(301));
      if (l += 1, lt = Ge = null, e.updateQueue != null) {
        var i = e.updateQueue;
        i.lastEffect = null, i.events = null, i.stores = null, i.memoCache != null && (i.memoCache.index = 0);
      }
      ue.H = jv, i = t(n, a);
    } while (bl);
    return i;
  }
  function Cv() {
    var e = ue.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Ti(t) : t, e = e.useState()[0], (Ge !== null ? Ge.memoizedState : null) !== e && (Ae.flags |= 1024), t;
  }
  function Lc() {
    var e = Vu !== 0;
    return Vu = 0, e;
  }
  function Ic(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function Bc(e) {
    if (Bu) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Bu = !1;
    }
    Xn = 0, lt = Ge = Ae = null, bl = !1, Si = Vu = 0, Sl = null;
  }
  function Ut() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return lt === null ? Ae.memoizedState = lt = e : lt = lt.next = e, lt;
  }
  function nt() {
    if (Ge === null) {
      var e = Ae.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ge.next;
    var t = lt === null ? Ae.memoizedState : lt.next;
    if (t !== null)
      lt = t, Ge = e;
    else {
      if (e === null)
        throw Ae.alternate === null ? Error(c(467)) : Error(c(310));
      Ge = e, e = {
        memoizedState: Ge.memoizedState,
        baseState: Ge.baseState,
        baseQueue: Ge.baseQueue,
        queue: Ge.queue,
        next: null
      }, lt === null ? Ae.memoizedState = lt = e : lt = lt.next = e;
    }
    return lt;
  }
  function Gu() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Ti(e) {
    var t = Si;
    return Si += 1, Sl === null && (Sl = []), e = nd(Sl, e, t), t = Ae, (lt === null ? t.memoizedState : lt.next) === null && (t = t.alternate, ue.H = t === null || t.memoizedState === null ? Zd : kd), e;
  }
  function Yu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ti(e);
      if (e.$$typeof === Y) return;
      if (e.$$typeof === L) return Et(e);
    }
    throw Error(c(438, String(e)));
  }
  function Vc(e) {
    var t = null, n = Ae.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var a = Ae.alternate;
      a !== null && (a = a.updateQueue, a !== null && (a = a.memoCache, a != null && (t = {
        data: a.data.map(function(l) {
          return l.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = Gu(), Ae.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++)
        n[a] = W;
    return t.index++, n;
  }
  function Qn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Xu(e) {
    var t = nt();
    return Gc(t, Ge, e);
  }
  function Gc(e, t, n) {
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
      var f = s = null, g = null, _ = t, D = !1;
      do {
        var I = _.lane & -536870913;
        if (I !== _.lane ? (xe & I) === I : (Xn & I) === I) {
          var b = _.revertLane;
          if (b === 0)
            g !== null && (g = g.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }), I === Ya && (D = !0);
          else if ((Xn & b) === b) {
            _ = _.next, b === Ya && (D = !0);
            continue;
          } else
            I = {
              lane: 0,
              revertLane: _.revertLane,
              gesture: null,
              action: _.action,
              hasEagerState: _.hasEagerState,
              eagerState: _.eagerState,
              next: null
            }, g === null ? (f = g = I, s = i) : g = g.next = I, Ae.lanes |= b, ga |= b;
          I = _.action, ka && n(i, I), i = _.hasEagerState ? _.eagerState : n(i, I);
        } else
          b = {
            lane: I,
            revertLane: _.revertLane,
            gesture: _.gesture,
            action: _.action,
            hasEagerState: _.hasEagerState,
            eagerState: _.eagerState,
            next: null
          }, g === null ? (f = g = b, s = i) : g = g.next = b, Ae.lanes |= I, ga |= I;
        _ = _.next;
      } while (_ !== null && _ !== t);
      if (g === null ? s = i : g.next = f, !Kt(i, e.memoizedState) && (it = !0, D && (n = vl, n !== null)))
        throw n;
      e.memoizedState = i, e.baseState = s, e.baseQueue = g, a.lastRenderedState = i;
    }
    return l === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function Yc(e) {
    var t = nt(), n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var a = n.dispatch, l = n.pending, i = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var s = l = l.next;
      do
        i = e(i, s.action), s = s.next;
      while (s !== l);
      Kt(i, t.memoizedState) || (it = !0), t.memoizedState = i, t.baseQueue === null && (t.baseState = i), n.lastRenderedState = i;
    }
    return [i, a];
  }
  function hd(e, t, n) {
    var a = Ae, l = nt(), i = Ne;
    if (i) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = t();
    var s = !Kt(
      (Ge || l).memoizedState,
      n
    );
    if (s && (l.memoizedState = n, it = !0), l = l.queue, Kc(pd.bind(null, a, l, e), [
      e
    ]), e = l.getSnapshot !== t || s || lt !== null && (lt.memoizedState.tag & 1) !== 0, Tl(
      e ? 9 : 8,
      { destroy: void 0 },
      gd.bind(null, a, l, n, t),
      null
    ), e) {
      if (a.flags |= 2048, Xe === null) throw Error(c(349));
      i || (Xn & 127) !== 0 || md(a, t, n);
    }
    return n;
  }
  function md(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Ae.updateQueue, t === null ? (t = Gu(), Ae.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
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
  function Xc(e) {
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
    return e.baseState = n, Gc(
      e,
      Ge,
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
      ue.T !== null ? n(!0) : i.isTransition = !1, a(i), n = t.pending, n === null ? (i.next = t.pending = i, bd(t, i)) : (i.next = n.next, t.pending = n.next = i);
    }
  }
  function bd(e, t) {
    var n = t.action, a = t.payload, l = e.state;
    if (t.isTransition) {
      var i = ue.T, s = {};
      s.types = i !== null ? i.types : null, ue.T = s;
      try {
        var f = n(l, a), g = ue.S;
        g !== null && g(s, f), Sd(e, t, f);
      } catch (_) {
        Qc(e, t, _);
      } finally {
        i !== null && s.types !== null && (i.types = s.types), ue.T = i;
      }
    } else
      try {
        i = n(l, a), Sd(e, t, i);
      } catch (_) {
        Qc(e, t, _);
      }
  }
  function Sd(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(a) {
        Td(e, t, a);
      },
      function(a) {
        return Qc(e, t, a);
      }
    ) : Td(e, t, n);
  }
  function Td(e, t, n) {
    t.status = "fulfilled", t.value = n, Ad(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, bd(e, n)));
  }
  function Qc(e, t, n) {
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
    if (Ne) {
      var n = Xe.formState;
      if (n !== null) {
        e: {
          var a = Ae;
          if (Ne) {
            if (Qe) {
              t: {
                for (var l = Qe, i = rn; l.nodeType !== 8; ) {
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
                Qe = sn(
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
      Ae,
      a
    ), a.dispatch = n, a = Xc(!1), i = $c.bind(
      null,
      Ae,
      !1,
      a.queue
    ), a = Ut(), l = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = l, n = Rv.bind(
      null,
      Ae,
      l,
      i,
      n
    ), l.dispatch = n, a.memoizedState = e, [t, n, !1];
  }
  function wd(e) {
    var t = nt();
    return Od(t, Ge, e);
  }
  function Od(e, t, n) {
    if (t = Gc(
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
    t = nt();
    var l = t.queue, i = l.dispatch;
    return n !== t.memoizedState && (Ae.flags |= 2048, Tl(
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
    var t = nt(), n = Ge;
    if (n !== null)
      return Od(t, n, e);
    nt(), t = t.memoizedState, n = nt();
    var a = n.queue.dispatch;
    return n.memoizedState = e, [t, a, !1];
  }
  function Tl(e, t, n, a) {
    return e = { tag: e, create: n, deps: a, inst: t, next: null }, t = Ae.updateQueue, t === null && (t = Gu(), Ae.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
  }
  function Rd() {
    return nt().memoizedState;
  }
  function Qu(e, t, n, a) {
    var l = Ut();
    Ae.flags |= e, l.memoizedState = Tl(
      1 | t,
      { destroy: void 0 },
      n,
      a === void 0 ? null : a
    );
  }
  function Ku(e, t, n, a) {
    var l = nt();
    a = a === void 0 ? null : a;
    var i = l.memoizedState.inst;
    Ge !== null && a !== null && Hc(a, Ge.memoizedState.deps) ? l.memoizedState = Tl(t, i, n, a) : (Ae.flags |= e, l.memoizedState = Tl(
      1 | t,
      i,
      n,
      a
    ));
  }
  function xd(e, t) {
    Qu(8390656, 8, e, t);
  }
  function Kc(e, t) {
    Ku(2048, 8, e, t);
  }
  function Uv(e) {
    Ae.flags |= 4;
    var t = Ae.updateQueue;
    if (t === null)
      t = Gu(), Ae.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function Ud(e) {
    var t = nt().memoizedState;
    return Uv({ ref: t, nextImpl: e }), function() {
      if ((He & 2) !== 0) throw Error(c(440));
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
  function Zc() {
  }
  function Hd(e, t) {
    var n = nt();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && Hc(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
  }
  function qd(e, t) {
    var n = nt();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && Hc(t, a[1]))
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
  function kc(e, t, n) {
    return n === void 0 || (Xn & 1073741824) !== 0 && (xe & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = Zh(), Ae.lanes |= e, ga |= e, n);
  }
  function Ld(e, t, n, a) {
    return Kt(n, t) ? n : sa.current !== null ? (e = kc(e, n, a), Kt(e, t) || (it = !0), e) : (Xn & 106) === 0 || (Xn & 1073741824) !== 0 && (xe & 261930) === 0 ? (it = !0, e.memoizedState = n) : (e = Zh(), Ae.lanes |= e, ga |= e, t);
  }
  function Id(e, t, n, a, l) {
    var i = pe.p;
    pe.p = i !== 0 && 8 > i ? i : 8;
    var s = ue.T, f = {};
    f.types = s !== null ? s.types : null, ue.T = f, $c(e, !1, t, n);
    try {
      var g = l(), _ = ue.S;
      if (_ !== null && _(f, g), g !== null && typeof g == "object" && typeof g.then == "function") {
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
      pe.p = i, s !== null && f.types !== null && (s.types = f.types), ue.T = s;
    }
  }
  function Dv() {
  }
  function Jc(e, t, n, a) {
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
  function Fc() {
    return Et(Vl);
  }
  function Gd() {
    return nt().memoizedState;
  }
  function Yd() {
    return nt().memoizedState;
  }
  function zv(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = $t();
          e = ra(n);
          var a = ca(t, e, n);
          a !== null && (Bt(a, t, n), vi(a, t, n)), t = { cache: _c() }, e.payload = t;
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
    }, Zu(e) ? Qd(t, n) : (n = gc(e, t, n, a), n !== null && (Bt(n, e, a), Kd(n, t, a)));
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
            return _u(e, t, l, 0), Xe === null && Au(), !1;
        } catch {
        }
      if (n = gc(e, t, l, a), n !== null)
        return Bt(n, e, a), Kd(n, t, a), !0;
    }
    return !1;
  }
  function $c(e, t, n, a) {
    if (a = {
      lane: 2,
      revertLane: Vs(),
      gesture: null,
      action: a,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Zu(e)) {
      if (t) throw Error(c(479));
    } else
      t = gc(
        e,
        n,
        a,
        2
      ), t !== null && Bt(t, e, 2);
  }
  function Zu(e) {
    var t = e.alternate;
    return e === Ae || t !== null && t === Ae;
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
    readContext: Et,
    use: Yu,
    useCallback: et,
    useContext: et,
    useEffect: et,
    useImperativeHandle: et,
    useLayoutEffect: et,
    useInsertionEffect: et,
    useMemo: et,
    useReducer: et,
    useRef: et,
    useState: et,
    useDebugValue: et,
    useDeferredValue: et,
    useTransition: et,
    useSyncExternalStore: et,
    useId: et,
    useHostTransitionStatus: et,
    useFormState: et,
    useActionState: et,
    useOptimistic: et,
    useMemoCache: et,
    useCacheRefresh: et,
    useEffectEvent: et
  }, Zd = {
    readContext: Et,
    use: Yu,
    useCallback: function(e, t) {
      return Ut().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Et,
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
        Ae,
        e
      ), [a.memoizedState, e];
    },
    useRef: function(e) {
      var t = Ut();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Xc(e);
      var t = e.queue, n = Xd.bind(null, Ae, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: Zc,
    useDeferredValue: function(e, t) {
      var n = Ut();
      return kc(n, e, t);
    },
    useTransition: function() {
      var e = Xc(!1);
      return e = Id.bind(
        null,
        Ae,
        e.queue,
        !0,
        !1
      ), Ut().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var a = Ae, l = Ut();
      if (Ne) {
        if (n === void 0)
          throw Error(c(407));
        n = n();
      } else {
        if (n = t(), Xe === null)
          throw Error(c(349));
        (xe & 127) !== 0 || md(a, t, n);
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
      var e = Ut(), t = Xe.identifierPrefix;
      if (Ne) {
        var n = Nn, a = _n;
        n = (a & ~(1 << 32 - Xt(a) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Vu++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = Ov++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Fc,
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
      return t.queue = n, t = $c.bind(
        null,
        Ae,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Vc,
    useCacheRefresh: function() {
      return Ut().memoizedState = zv.bind(
        null,
        Ae
      );
    },
    useEffectEvent: function(e) {
      var t = Ut(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((He & 2) !== 0)
          throw Error(c(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, kd = {
    readContext: Et,
    use: Yu,
    useCallback: Hd,
    useContext: Et,
    useEffect: Kc,
    useImperativeHandle: jd,
    useInsertionEffect: Dd,
    useLayoutEffect: zd,
    useMemo: qd,
    useReducer: Xu,
    useRef: Rd,
    useState: function() {
      return Xu(Qn);
    },
    useDebugValue: Zc,
    useDeferredValue: function(e, t) {
      var n = nt();
      return Ld(
        n,
        Ge.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Xu(Qn)[0], t = nt().memoizedState;
      return [
        typeof e == "boolean" ? e : Ti(e),
        t
      ];
    },
    useSyncExternalStore: hd,
    useId: Gd,
    useHostTransitionStatus: Fc,
    useFormState: wd,
    useActionState: wd,
    useOptimistic: function(e, t) {
      var n = nt();
      return Ed(n, Ge, e, t);
    },
    useMemoCache: Vc,
    useCacheRefresh: Yd,
    useEffectEvent: Ud
  }, jv = {
    readContext: Et,
    use: Yu,
    useCallback: Hd,
    useContext: Et,
    useEffect: Kc,
    useImperativeHandle: jd,
    useInsertionEffect: Dd,
    useLayoutEffect: zd,
    useMemo: qd,
    useReducer: Yc,
    useRef: Rd,
    useState: function() {
      return Yc(Qn);
    },
    useDebugValue: Zc,
    useDeferredValue: function(e, t) {
      var n = nt();
      return Ge === null ? kc(n, e, t) : Ld(
        n,
        Ge.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Yc(Qn)[0], t = nt().memoizedState;
      return [
        typeof e == "boolean" ? e : Ti(e),
        t
      ];
    },
    useSyncExternalStore: hd,
    useId: Gd,
    useHostTransitionStatus: Fc,
    useFormState: Cd,
    useActionState: Cd,
    useOptimistic: function(e, t) {
      var n = nt();
      return Ge !== null ? Ed(n, Ge, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Vc,
    useCacheRefresh: Yd,
    useEffectEvent: Ud
  };
  function Pc(e, t, n, a) {
    t = e.memoizedState, n = n(a, t), n = n == null ? t : le({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Wc = {
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
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && Wc.enqueueReplaceState(t, t.state, null);
  }
  function Ja(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var a in t)
        a !== "ref" && (n[a] = t[a]);
    }
    if (e = e.defaultProps) {
      n === t && (n = le({}, n));
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
  function es(e, t, n) {
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
      ), n = bt.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
          case 19:
            return Ot === null ? pr() : n.alternate === null && tt === 0 && (tt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = l, a === ju ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Ls(e, a, l)), !1;
          case 22:
            return n.flags |= 65536, a === ju ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), Ls(e, a, l)), !1;
        }
        throw Error(c(435, n.tag));
      }
      return Ls(e, a, l), pr(), !1;
    }
    if (Ne)
      return t = bt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = l, a !== bc && (e = Error(c(422), { cause: a }), di(an(e, n)))) : (a !== bc && (t = Error(c(423), {
        cause: a
      }), di(
        an(t, n)
      )), e = e.current.alternate, e.flags |= 65536, l &= -l, e.lanes |= l, a = an(a, n), l = es(
        e.stateNode,
        a,
        l
      ), xc(e, l), tt !== 4 && (tt = 2)), !1;
    var i = Error(c(520), { cause: a });
    if (i = an(i, n), Ui === null ? Ui = [i] : Ui.push(i), tt !== 4 && (tt = 2), t === null) return !0;
    a = an(a, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = l & -l, n.lanes |= e, e = es(n.stateNode, a, e), xc(n, e), !1;
        case 1:
          if (t = n.type, i = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || i !== null && typeof i.componentDidCatch == "function" && (pa === null || !pa.has(i))))
            return n.flags |= 65536, l &= -l, n.lanes |= l, l = th(l), nh(
              l,
              e,
              n,
              a
            ), xc(n, l), !1;
          break;
        case 22:
          if (n.memoizedState !== null)
            return n.flags |= 65536, !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var ts = Error(c(461)), it = !1;
  function st(e, t, n, a) {
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
    return Ga(t), a = qc(
      e,
      t,
      n,
      s,
      i,
      l
    ), f = Lc(), e !== null && !it ? (Ic(e, t, l), Kn(e, t, l)) : (Ne && f && Cu(t), t.flags |= 1, st(e, t, a, l), t.child);
  }
  function lh(e, t, n, a, l) {
    if (e === null) {
      var i = n.type;
      return typeof i == "function" && !pc(i) && i.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = i, ih(
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
    if (i = e.child, !ss(e, l)) {
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
        if (it = !1, t.pendingProps = a = i, ss(e, l))
          (e.flags & 131072) !== 0 && (it = !0);
        else
          return t.lanes = e.lanes, Kn(e, t, l);
    }
    return ns(
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
        ), i !== null ? sd(t, i) : Dc(), od(t);
      else
        return a = t.lanes = 536870912, rh(
          e,
          t,
          i !== null ? i.baseLanes | n : n,
          n,
          a
        );
    } else
      i !== null ? (zu(t, i.cachePool), sd(t, i), fa(), t.memoizedState = null) : (e !== null && zu(t, null), Dc(), fa());
    return st(e, t, l, n), t.child;
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
    var i = wc();
    return i = i === null ? null : { parent: at._currentValue, pool: i }, t.memoizedState = {
      baseLanes: n,
      cachePool: i
    }, e !== null && zu(t, null), Dc(), od(t), e !== null && Va(e, t, a, !0), t.childLanes = l, null;
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
      if (Ne) {
        if (a.mode === "hidden")
          return e = Fu(t, a), t.lanes = 536870912, e.memoizedState = { baseLanes: 0, cachePool: null }, _i(null, e);
        if (Mc(t), (e = Qe) ? (e = Mm(
          e,
          rn
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: ta !== null ? { id: _n, overflow: Nn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Qf(e), n.return = t, t.child = n, ft = t, Qe = null)) : e = null, e === null) throw aa(t);
        return t.lanes = 536870912, null;
      }
      return Fu(t, a);
    }
    var i = e.memoizedState;
    if (i !== null) {
      var s = i.dehydrated;
      if (Mc(t), l)
        if (t.flags & 256)
          t.flags &= -257, t = ch(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(c(558));
      else if (it || Va(e, t, n, !1), l = (n & e.childLanes) !== 0, it || l) {
        if (sa.current === null) {
          if (a = Xe, a !== null && (s = Zo(a, n), s !== 0 && s !== i.retryLane))
            throw i.retryLane = s, qa(e, s), Bt(a, e, s), ts;
          pr();
        }
        t = ch(
          e,
          t,
          n
        );
      } else
        e = i.treeContext, Qe = sn(s.nextSibling), ft = t, Ne = !0, na = null, rn = !1, e !== null && kf(t, e), t = Fu(t, a), t.flags |= 134221824;
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
  function ns(e, t, n, a, l) {
    return Ga(t), n = qc(
      e,
      t,
      n,
      a,
      void 0,
      l
    ), a = Lc(), e !== null && !it ? (Ic(e, t, l), Kn(e, t, l)) : (Ne && a && Cu(t), t.flags |= 1, st(e, t, n, l), t.child);
  }
  function sh(e, t, n, a, l, i) {
    return Ga(t), t.updateQueue = null, n = dd(
      t,
      a,
      n,
      l
    ), fd(e), a = Lc(), e !== null && !it ? (Ic(e, t, i), Kn(e, t, i)) : (Ne && a && Cu(t), t.flags |= 1, st(e, t, n, i), t.child);
  }
  function oh(e, t, n, a, l) {
    if (Ga(t), t.stateNode === null) {
      var i = hl, s = n.contextType;
      typeof s == "object" && s !== null && (i = Et(s)), i = new n(a, i), t.memoizedState = i.state !== null && i.state !== void 0 ? i.state : null, i.updater = Wc, t.stateNode = i, i._reactInternals = t, i = t.stateNode, i.props = a, i.state = t.memoizedState, i.refs = {}, Cc(t), s = n.contextType, i.context = typeof s == "object" && s !== null ? Et(s) : hl, i.state = t.memoizedState, s = n.getDerivedStateFromProps, typeof s == "function" && (Pc(
        t,
        n,
        s,
        a
      ), i.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof i.getSnapshotBeforeUpdate == "function" || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (s = i.state, typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount(), s !== i.state && Wc.enqueueReplaceState(i, i.state, null), Ei(t, a, i, l), yi(), i.state = t.memoizedState), typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      i = t.stateNode;
      var f = t.memoizedProps, g = Ja(n, f);
      i.props = g;
      var _ = i.context, D = n.contextType;
      s = hl, typeof D == "object" && D !== null && (s = Et(D));
      var I = n.getDerivedStateFromProps;
      D = typeof I == "function" || typeof i.getSnapshotBeforeUpdate == "function", f = t.pendingProps !== f, D || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (f || _ !== s) && Fd(
        t,
        i,
        a,
        s
      ), ua = !1;
      var b = t.memoizedState;
      i.state = b, Ei(t, a, i, l), yi(), _ = t.memoizedState, f || b !== _ || ua ? (typeof I == "function" && (Pc(
        t,
        n,
        I,
        a
      ), _ = t.memoizedState), (g = ua || Jd(
        t,
        n,
        g,
        a,
        b,
        _,
        s
      )) ? (D || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = _), i.props = a, i.state = _, i.context = s, a = g) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      i = t.stateNode, Rc(e, t), s = t.memoizedProps, D = Ja(n, s), i.props = D, I = t.pendingProps, b = i.context, _ = n.contextType, g = hl, typeof _ == "object" && _ !== null && (g = Et(_)), f = n.getDerivedStateFromProps, (_ = typeof f == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== I || b !== g) && Fd(
        t,
        i,
        a,
        g
      ), ua = !1, b = t.memoizedState, i.state = b, Ei(t, a, i, l), yi();
      var x = t.memoizedState;
      s !== I || b !== x || ua || e !== null && e.dependencies !== null && Uu(e.dependencies) ? (typeof f == "function" && (Pc(
        t,
        n,
        f,
        a
      ), x = t.memoizedState), (D = ua || Jd(
        t,
        n,
        D,
        a,
        b,
        x,
        g
      ) || e !== null && e.dependencies !== null && Uu(e.dependencies)) ? (_ || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, x, g), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        a,
        x,
        g
      )), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && b === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && b === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = x), i.props = a, i.state = x, i.context = g, a = D) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && b === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && b === e.memoizedState || (t.flags |= 1024), a = !1);
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
    )) : st(e, t, n, l), t.memoizedState = i.state, e = t.child) : e = Kn(
      e,
      t,
      l
    ), e;
  }
  function fh(e, t, n, a) {
    return Ia(), t.flags |= 256, st(e, t, n, a), t.child;
  }
  var as = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function ls(e) {
    return { baseLanes: e, cachePool: ed() };
  }
  function is(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= Ft), e;
  }
  function dh(e, t, n) {
    var a = t.pendingProps, l = !1, i = (t.flags & 128) !== 0, s;
    if ((s = i) || (s = e !== null && e.memoizedState === null ? !1 : (St.current & 2) !== 0), s && (l = !0, t.flags &= -129), s = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ne) {
        if (l ? oa(t) : fa(), (e = Qe) ? (e = Mm(
          e,
          rn
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: ta !== null ? { id: _n, overflow: Nn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Qf(e), n.return = t, t.child = n, ft = t, Qe = null)) : e = null, e === null) throw aa(t);
        return lo(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      return i = a.children, a = a.fallback, l ? (fa(), l = t.mode, i = $u(
        { mode: "hidden", children: i },
        l
      ), a = La(
        a,
        l,
        n,
        null
      ), i.return = t, a.return = t, i.sibling = a, t.child = i, a = t.child, a.memoizedState = ls(n), a.childLanes = is(
        e,
        s,
        n
      ), t.memoizedState = as, _i(null, a)) : (oa(t), us(t, i));
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
    ), l.flags |= 2), l.return = t, a.return = t, a.sibling = l, t.child = a, _i(null, a), a = t.child, l = e.child.memoizedState, l === null ? l = ls(n) : (i = l.cachePool, i !== null ? (f = at._currentValue, i = i.parent !== f ? { parent: f, pool: f } : i) : i = ed(), l = {
      baseLanes: l.baseLanes | n,
      cachePool: i
    }), a.memoizedState = l, a.childLanes = is(
      e,
      s,
      n
    ), t.memoizedState = as, _i(e.child, a)) : (oa(t), n = e.child, e = n.sibling, n = Bn(n, {
      mode: "visible",
      children: a.children
    }), n.return = t, n.sibling = null, e !== null && (s = t.deletions, s === null ? (t.deletions = [e], t.flags |= 16) : s.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function us(e, t) {
    return t = $u(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function $u(e, t) {
    return e = Ht(22, e, null, t), e.lanes = 0, e;
  }
  function Pu(e, t, n) {
    return Za(t, e.child, null, n), e = us(
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
      ), i.flags |= 2, l.return = t, i.return = t, l.sibling = i, t.child = l, Za(t, e.child, null, f), l = t.child, l.memoizedState = ls(f), l.childLanes = is(
        e,
        a,
        f
      ), t.memoizedState = as, _i(null, l));
    if (oa(t), lo(i)) {
      if (a = i.nextSibling && i.nextSibling.dataset, a) var g = a.dgst;
      return a = g, a !== "" && (l = Error(c(419)), l.stack = "", l.digest = a, di({ value: l, source: null, stack: null })), Pu(
        e,
        t,
        f
      );
    }
    if (it || Va(e, t, f, !1), a = (f & e.childLanes) !== 0, it || a) {
      if (sa.current !== null)
        return Pu(
          e,
          t,
          f
        );
      if (a = Xe, a !== null && (l = Zo(
        a,
        f
      ), l !== 0 && l !== s.retryLane))
        throw s.retryLane = l, qa(e, l), Bt(a, e, l), ts;
      return ao(i) || pr(), Pu(
        e,
        t,
        f
      );
    }
    return ao(i) ? (t.flags |= 192, t.child = e.child, null) : (e = s.treeContext, Qe = sn(i.nextSibling), ft = t, Ne = !0, na = null, rn = !1, e !== null && kf(t, e), t = us(
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
  function rs(e) {
    var t = e.child;
    for (e.child = null; t !== null; ) {
      var n = t.sibling;
      t.sibling = e.child, e.child = t, t = n;
    }
  }
  function cs(e, t, n) {
    var a = t.pendingProps, l = a.revealOrder, i = a.tail;
    a = a.children;
    var s = St.current;
    if (t.flags & 128)
      return bi(t, s), null;
    var f = (s & 2) !== 0;
    if (f ? (s = s & 1 | 2, t.flags |= 128) : s &= 1, bi(t, s), l === "backwards" && e !== null ? (rs(e), st(e, t, a, n), rs(e)) : st(e, t, a, n), a = Ne ? fi : 0, !f && e !== null && (e.flags & 128) !== 0)
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
        n = mh(t.child), n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null, rs(t)), Wu(
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
    return la(t, t.type, a.value), st(e, t, a.children, n), t.child;
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
  function ss(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Uu(e)));
  }
  function Iv(e, t, n) {
    switch (t.tag) {
      case 3:
        G(t, t.stateNode.containerInfo), la(t, at, e.memoizedState.cache), Ia();
        break;
      case 27:
      case 5:
        Me(t);
        break;
      case 4:
        G(t, t.stateNode.containerInfo);
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
          return t.flags |= 128, Mc(t), null;
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
          return cs(
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
            return cs(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), bi(t, St.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, uh(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        la(t, at, e.memoizedState.cache);
    }
    return Kn(e, t, n);
  }
  function ph(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        it = !0;
      else {
        if (!ss(e, n) && (t.flags & 128) === 0)
          return it = !1, Iv(
            e,
            t,
            n
          );
        it = (e.flags & 131072) !== 0;
      }
    else
      it = !1, Ne && (t.flags & 1048576) !== 0 && Zf(t, fi, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = Qa(t.elementType), t.type = e, typeof e == "function")
            pc(e) ? (a = Ja(e, a), t.tag = 1, t = oh(
              null,
              t,
              e,
              a,
              n
            )) : (t.tag = 0, t = ns(
              null,
              t,
              e,
              a,
              n
            ));
          else {
            if (e != null) {
              var l = e.$$typeof;
              if (l === V) {
                t.tag = 11, t = ah(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              } else if (l === fe) {
                t.tag = 14, t = lh(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              } else if (l === L) {
                t.tag = 10, t.type = e, t = gh(
                  null,
                  t,
                  n
                );
                break e;
              }
            }
            throw t = Te(e) || e, Error(c(306, t, ""));
          }
        }
        return t;
      case 0:
        return ns(
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
          if (G(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(c(387));
          a = t.pendingProps;
          var i = t.memoizedState;
          l = i.element, Rc(e, t), Ei(t, a, null, n);
          var s = t.memoizedState;
          if (a = s.cache, la(t, at, a), a !== i.cache && Ac(
            t,
            [at],
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
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Qe = sn(e.firstChild), ft = t, Ne = !0, na = null, rn = !0, n = ud(
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
            st(e, t, a, n);
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
        )) ? t.memoizedState = n : Ne || (t.stateNode = bm(
          t.type,
          t.pendingProps,
          X.current,
          t
        )) : t.memoizedState = Vm(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return Me(t), e === null && Ne && (a = t.stateNode = qm(
          t.type,
          t.pendingProps,
          X.current
        ), ft = t, rn = !0, l = Qe, Ea(t.type) ? (io = l, Qe = sn(a.firstChild)) : Qe = l), st(
          e,
          t,
          t.pendingProps.children,
          n
        ), Al(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ne && ((l = a = Qe) && (a = zy(
          a,
          t.type,
          t.pendingProps,
          rn
        ), a !== null ? (t.stateNode = a, ft = t, Qe = sn(a.firstChild), rn = !1, l = !0) : l = !1), l || aa(t)), Me(t), l = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, a = i.children, Fs(l, i) ? a = null : s !== null && Fs(l, s) && (t.flags |= 32), t.memoizedState !== null && (l = qc(
          e,
          t,
          Cv,
          null,
          null,
          n
        ), Vl._currentValue = l), Al(e, t), st(e, t, a, n), t.child;
      case 6:
        return e === null && Ne && ((e = n = Qe) && (n = My(
          n,
          t.pendingProps,
          rn
        ), n !== null ? (t.stateNode = n, ft = t, Qe = null, e = !0) : e = !1), e || aa(t)), null;
      case 13:
        return dh(e, t, n);
      case 4:
        return G(
          t,
          t.stateNode.containerInfo
        ), a = t.pendingProps, e === null ? t.child = Za(
          t,
          null,
          a,
          n
        ) : st(e, t, a, n), t.child;
      case 11:
        return ah(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return a = t.pendingProps, Al(e, t), st(e, t, a, n), t.child;
      case 8:
        return st(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return st(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return gh(e, t, n);
      case 9:
        return l = t.type._context, a = t.pendingProps.children, Ga(t), l = Et(l), a = a(l), t.flags |= 1, st(e, t, a, n), t.child;
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
        return cs(e, t, n);
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
        return Ga(t), a = Et(at), e === null ? (l = wc(), l === null && (l = Xe, i = _c(), l.pooledCache = i, i.refCount++, i !== null && (l.pooledCacheLanes |= n), l = i), t.memoizedState = { parent: a, cache: l }, Cc(t), la(t, at, l)) : ((e.lanes & n) !== 0 && (Rc(e, t), Ei(t, null, null, n), yi()), l = e.memoizedState, i = t.memoizedState, l.parent !== a ? (l = { parent: a, cache: a }, t.memoizedState = l, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = l), la(t, at, a)) : (a = i.cache, la(t, at, a), a !== l.cache && Ac(
          t,
          [at],
          n,
          !0
        ))), st(
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
        }), a = t.pendingProps, a.name != null && a.name !== "auto" ? t.flags |= e === null ? 18882560 : 18874368 : Ne && Cu(t), e !== null && e.memoizedProps.name !== a.name ? t.flags |= 4194816 : Al(e, t), st(e, t, a.children, n), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(c(156, t.tag));
  }
  function Zn(e) {
    e.flags |= 4;
  }
  function os(e, t, n, a, l) {
    var i;
    if ((i = (e.mode & 32) !== 0) && (i = n === null ? Qm(t, a) : Qm(t, a) && (a.src !== n.src || a.srcSet !== n.srcSet)), i) {
      if (e.flags |= 16777216, (l & 335544128) === l)
        if (e.stateNode.complete) e.flags |= 8192;
        else if ($h()) e.flags |= 8192;
        else
          throw Ka = ju, Oc;
    } else e.flags &= -16777217;
  }
  function vh(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Km(t))
      if ($h()) e.flags |= 8192;
      else
        throw Ka = ju, Oc;
  }
  function er(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Xo() : 536870912, e.lanes |= t, Cl |= t);
  }
  function Ni(e, t) {
    if (!Ne)
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
  function Bv(e, t, n) {
    var a = t.pendingProps;
    switch (Ec(t), t.tag) {
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
        return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Yn(at), se(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (pl(t) ? Zn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Sc())), Ke(t), null;
      case 26:
        var l = t.type, i = t.memoizedState;
        return e === null ? (Zn(t), i !== null ? (Ke(t), vh(t, i)) : (Ke(t), os(
          t,
          l,
          null,
          a,
          n
        ))) : i ? i !== e.memoizedState ? (Zn(t), Ke(t), vh(t, i)) : (Ke(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && Zn(t), Ke(t), os(
          t,
          l,
          e,
          a,
          n
        )), null;
      case 27:
        if (Ye(t), n = X.current, l = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== a && Zn(t);
        else {
          if (!a) {
            if (t.stateNode === null)
              throw Error(c(166));
            return Ke(t), t.subtreeFlags &= -33554433, null;
          }
          e = Vt.current, pl(t) ? Jf(t) : (e = qm(l, a, n), t.stateNode = e, Zn(t));
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
          if (i = Vt.current, pl(t))
            Jf(t);
          else {
            var s = Hi(
              X.current
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
            i[yt] = t, i[jt] = a;
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
            e: switch (At(i, l, a), l) {
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
        return Ke(t), t.subtreeFlags &= -33554433, os(
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
          if (e = X.current, pl(t)) {
            if (e = t.stateNode, n = t.memoizedProps, a = null, l = ft, l !== null)
              switch (l.tag) {
                case 27:
                case 5:
                  a = l.memoizedProps;
              }
            e[yt] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || pm(e.nodeValue, n)), e || aa(t, !0);
          } else
            e = Hi(e).createTextNode(
              a
            ), e[yt] = t, t.stateNode = e;
        }
        return Ke(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (a = pl(t), n !== null) {
            if (e === null) {
              if (!a) throw Error(c(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(557));
              e[yt] = t;
            } else
              Ia(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ke(t), e = !1;
          } else
            n = Sc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (Zt(t), t) : (Zt(t), null);
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
              l[yt] = t;
            } else
              Ia(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Ke(t), l = !1;
          } else
            l = Sc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), l = !0;
          if (!l)
            return t.flags & 256 ? (Zt(t), t) : (Zt(t), null);
        }
        return Zt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = a !== null, e = e !== null && e.memoizedState !== null, n && (a = t.child, l = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (l = a.alternate.memoizedState.cachePool.pool), i = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (i = a.memoizedState.cachePool.pool), i !== l && (a.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), er(t, t.updateQueue), Ke(t), null);
      case 4:
        return se(), e === null && Qs(t.stateNode.containerInfo), t.flags |= 67108864, Ke(t), null;
      case 10:
        return Yn(t.type), Ke(t), null;
      case 19:
        if (jc(t), a = t.memoizedState, a === null) return Ke(t), null;
        if (l = (t.flags & 128) !== 0, i = a.rendering, i === null)
          if (l) Ni(a, !1);
          else {
            if (tt !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (i = Iu(e), i !== null) {
                  for (t.flags |= 128, Ni(a, !1), e = i.updateQueue, t.updateQueue = e, er(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    Xf(n, e), n = n.sibling;
                  return bi(
                    t,
                    St.current & 1 | 2
                  ), Ne && Vn(t, a.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && Gt() > dr && (t.flags |= 128, l = !0, Ni(a, !1), t.lanes = 4194304);
          }
        else {
          if (!l)
            if (e = Iu(i), e !== null) {
              if (t.flags |= 128, l = !0, e = e.updateQueue, t.updateQueue = e, er(t, e), Ni(a, !0), a.tail === null && a.tailMode !== "collapsed" && a.tailMode !== "visible" && !i.alternate && !Ne)
                return Ke(t), null;
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
          return a.rendering = e, a.tail = e.sibling, a.renderingStartTime = Gt(), e.sibling = null, i = St.current, i = l ? i & 1 | 2 : i & 1, a.tailMode === "visible" || a.tailMode === "collapsed" || !n || Ne ? bi(t, i) : (n = i, Le(bt, t), Le(St, n), Ot === null && (Ot = t)), Ne && Vn(t, a.treeForkCount), e;
        }
        return Ke(t), null;
      case 22:
      case 23:
        return Zt(t), zc(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ke(t), n = t.updateQueue, n !== null && er(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && me(Xa), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Yn(at), Ke(t), null;
      case 25:
        return null;
      case 30:
        return t.flags |= 33554432, Ke(t), null;
    }
    throw Error(c(156, t.tag));
  }
  function Vv(e, t) {
    switch (Ec(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Yn(at), se(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Ye(t), null;
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
        return jc(t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null), t.flags |= 4, t) : null;
      case 4:
        return se(), null;
      case 10:
        return Yn(t.type), null;
      case 22:
      case 23:
        return Zt(t), zc(), e !== null && me(Xa), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Yn(at), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function yh(e, t) {
    switch (Ec(t), t.tag) {
      case 3:
        Yn(at), se();
        break;
      case 26:
      case 27:
      case 5:
        Ye(t);
        break;
      case 4:
        se();
        break;
      case 31:
        t.memoizedState !== null && Zt(t);
        break;
      case 13:
        Zt(t);
        break;
      case 19:
        jc(t);
        break;
      case 10:
        Yn(t.type);
        break;
      case 22:
      case 23:
        Zt(t), zc(), e !== null && me(Xa);
        break;
      case 24:
        Yn(at);
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
      Be(t, t.return, f);
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
              var g = n, _ = f;
              try {
                _();
              } catch (D) {
                Be(
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
      Be(t, t.return, D);
    }
  }
  function Eh(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        cd(t, n);
      } catch (a) {
        Be(e, e.return, a);
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
      Be(e, t, f);
    }
  }
  function Tt(e, t) {
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
  function tr(e, t) {
    if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && t !== null)
      for (var n = 0; n < t.length; n++)
        zm(
          e.stateNode,
          t[n]
        );
  }
  function Sh(e) {
    for (var t = e.return; t !== null && (ds(t) && zm(e.stateNode, t.stateNode), !fs(t)); )
      t = t.return;
  }
  function Oi(e) {
    for (var t = e.return; t !== null && (ds(t) && Dy(e.stateNode, t.stateNode), !fs(t)); )
      t = t.return;
  }
  function fs(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 27;
  }
  function ds(e) {
    return e && e.tag === 7 && e.stateNode !== null;
  }
  function hs(e) {
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
  function ms(e, t, n) {
    try {
      var a = e.stateNode;
      hy(a, e.type, n, t), a[jt] = t;
    } catch (l) {
      Be(e, e.return, l);
    }
  }
  function Th(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ea(e.type) || e.tag === 4;
  }
  function gs(e) {
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
  function ps(e, t, n, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      l = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(l, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(l), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = An)), tr(e, a), je = !0;
    else if (l !== 4 && (l === 27 && (tr(e, a), a = null, Ea(e.type) && (n = e.stateNode, t = null)), e = e.child, e !== null))
      for (ps(
        e,
        t,
        n,
        a
      ), e = e.sibling; e !== null; )
        ps(
          e,
          t,
          n,
          a
        ), e = e.sibling;
  }
  function nr(e, t, n, a) {
    var l = e.tag;
    if (l === 5 || l === 6)
      l = e.stateNode, t ? n.insertBefore(l, t) : n.appendChild(l), tr(e, a), je = !0;
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
      At(t, a, n), t[yt] = e, t[jt] = n;
    } catch (i) {
      Be(e, e.return, i);
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
          var f = Ws(s);
          a.push(f), f.view && (i = !0);
        } else
          i || Ws(s).view && (i = !0);
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
  function vs(e, t) {
    if (e.tag === 30) {
      var n = e.stateNode, a = e.memoizedProps, l = Ln(a, n), i = In(
        a.default,
        n.paired ? a.share : a.enter
      );
      i !== "none" ? _l(e, l, i, null, !1) ? (lr(e), n.paired || t || Dl(e, a.onEnter)) : Cn(e.child, !1) : lr(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        vs(e, t), e = e.sibling;
    else lr(e);
  }
  function ys(e) {
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
            ys(e);
          }
          e = e.sibling;
        }
    }
  }
  function Es(e) {
    if (e.tag === 30) {
      var t = e.memoizedProps, n = Ln(t, e.stateNode), a = kt !== null ? kt.get(n) : void 0, l = In(
        t.default,
        a !== void 0 ? t.share : t.exit
      );
      l !== "none" && (_l(e, n, l, null, !1) ? a !== void 0 ? (l = e.stateNode, a.paired = l, l.paired = a, kt.delete(n), Dl(e, t.onShare)) : Dl(e, t.onExit) : Cn(e.child, !1)), kt !== null && ys(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        Es(e), e = e.sibling;
    else
      kt !== null && ys(e);
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
  function bs(e) {
    if ((e.subtreeFlags & 18874368) !== 0)
      for (e = e.child; e !== null; ) {
        if (e.tag !== 22 || e.memoizedState === null) {
          if (e.tag === 30 && (e.flags & 18874368) !== 0) {
            var t = e.stateNode;
            t.paired !== null && (t.paired = null, Cn(e.child, !1));
          }
          bs(e);
        }
        e = e.sibling;
      }
  }
  function ir(e) {
    if (e.tag === 30)
      e.stateNode.paired = null, Cn(e.child, !1), bs(e);
    else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        ir(e), e = e.sibling;
    else bs(e);
  }
  function Ch(e) {
    for (e = e.child; e !== null; )
      e.tag === 30 ? Cn(e.child, !1) : (e.subtreeFlags & 33554432) !== 0 && Ch(e), e = e.sibling;
  }
  function Ss(e, t, n, a, l, i, s) {
    for (var f = !1; t !== null; ) {
      if (t.tag === 5) {
        var g = t.stateNode;
        if (i !== null && qt < i.length) {
          var _ = i[qt], D = Ws(g);
          (_.view || D.view) && (f = !0);
          var I;
          if (I = (e.flags & 4) === 0)
            if (D.clip) I = !0;
            else {
              I = _.rect;
              var b = D.rect;
              I = I.y !== b.y || I.x !== b.x || I.height !== b.height || I.width !== b.width;
            }
          I && (e.flags |= 4), D.abs ? D = !_.abs : (_ = _.rect, D = D.rect, D = _.height !== D.height || _.width !== D.width), D && (e.flags |= 32);
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
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && s ? e.flags |= t.flags & 32 : Ss(
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
        qt = 0, l = Ss(
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
  var dt = !1, qe = !1, Rn = !1, Ts = !1, xh = typeof WeakSet == "function" ? WeakSet : Set, ht = null, xn = !1, Ci = !1, ur = !1, As = !1;
  function Gv(e, t, n) {
    if (e = e.containerInfo, ks = Gl, e = Mf(e), sc(e)) {
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
            var f = 0, g = -1, _ = -1, D = 0, I = 0, b = e, x = null;
            t: for (; ; ) {
              for (var $; b !== a || i !== 0 && b.nodeType !== 3 || (g = f + i), b !== s || l !== 0 && b.nodeType !== 3 || (_ = f + l), b.nodeType === 3 && (f += b.nodeValue.length), ($ = b.firstChild) !== null; )
                x = b, b = $;
              for (; ; ) {
                if (b === e) break t;
                if (x === a && ++D === i && (g = f), x === s && ++I === l && (_ = f), ($ = b.nextSibling) !== null) break;
                b = x, x = b.parentNode;
              }
              b = $;
            }
            a = g === -1 || _ === -1 ? null : { start: g, end: _ };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (Js = { focusedElem: e, selectionRange: a }, Gl = !1, n = (n & 335544064) === n, ht = t, t = n ? 9270 : 1024; ht !== null; ) {
      if (e = ht, n && (a = e.deletions, a !== null))
        for (i = 0; i < a.length; i++)
          n && Es(a[i]);
      if (e.alternate === null && (e.flags & 2) !== 0)
        n && _h(e), rr(n);
      else {
        if (e.tag === 22) {
          if (a = e.alternate, e.memoizedState !== null) {
            a !== null && a.memoizedState === null && n && Es(a), rr(n);
            continue;
          } else if (a !== null && a.memoizedState !== null) {
            n && _h(e), rr(n);
            continue;
          }
        }
        a = e.child, (e.subtreeFlags & t) !== 0 && a !== null ? (a.return = e, ht = a) : (n && Oh(e), rr(n));
      }
    }
    kt = null;
  }
  function rr(e) {
    for (; ht !== null; ) {
      var t = ht, n = e, a = t.alternate, l = t.flags;
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
              Be(t, t.return, f);
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
        a.return = t.return, ht = a;
        break;
      }
      ht = t.return;
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
              Be(n, n.return, s);
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
              Be(
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
            Be(n, n.return, s);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Ah(n);
      case 26:
      case 5:
        Un(e, n), t === null && a & 4 && hs(n), a & 512 && wn(n, n.return);
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
        if (a = n.memoizedState !== null || dt, !a) {
          var i = t !== null && t.memoizedState !== null || qe;
          t = dt, l = qe, dt = a, (qe = i) && !l ? (a = 2, (n.subtreeFlags & 8772) !== 0 && (a |= 1), yn(
            e,
            n,
            a
          )) : Un(e, n), dt = t, qe = l;
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
  function _s(e, t) {
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
          Be(e, e.return, g);
        }
        Ns(e, t);
        break;
      case 6:
        try {
          e.stateNode.nodeValue = t ? "" : e.memoizedProps, je = !0;
        } catch (g) {
          Be(e, e.return, g);
        }
        break;
      case 18:
        try {
          var f = e.stateNode;
          t ? _m(f, !0) : _m(e.stateNode, !1);
        } catch (g) {
          Be(e, e.return, g);
        }
        break;
      case 22:
      case 23:
        e.memoizedState === null && _s(e, t);
        break;
      default:
        _s(e, t);
    }
  }
  function Ns(e, t) {
    if (e.subtreeFlags & 67108864)
      for (e = e.child; e !== null; ) {
        e: {
          var n = e, a = t;
          switch (n.tag) {
            case 4:
              Dh(n, a);
              break e;
            case 22:
              n.memoizedState === null && Ns(n, a);
              break e;
            default:
              Ns(n, a);
          }
        }
        e = e.sibling;
      }
  }
  function zh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, zh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && du(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Fe = null, Lt = !1;
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
        qe || Tt(n, t), pn(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && !qe && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        qe || Tt(n, t), Oi(n);
        var a = Fe, l = Lt;
        Ea(n.type) && (Fe = n.stateNode, Lt = !1), pn(
          e,
          t,
          n
        ), Lm(
          n.stateNode,
          n.type,
          n.memoizedProps
        ), Fe = a, Lt = l;
        break;
      case 5:
        qe || Tt(n, t), Oi(n);
      case 6:
        if (n.tag === 6 && Oi(n), a = Fe, l = Lt, Fe = null, pn(
          e,
          t,
          n
        ), Fe = a, Lt = l, Fe !== null)
          if (Lt)
            try {
              (Fe.nodeType === 9 ? Fe.body : Fe.nodeName === "HTML" ? Fe.ownerDocument.body : Fe).removeChild(n.stateNode), je = !0;
            } catch (i) {
              Be(
                n,
                t,
                i
              );
            }
          else
            try {
              Fe.removeChild(n.stateNode), je = !0;
            } catch (i) {
              Be(
                n,
                t,
                i
              );
            }
        break;
      case 18:
        Fe !== null && (Lt ? (e = Fe, Am(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), Yl(e)) : Am(Fe, n.stateNode));
        break;
      case 4:
        a = Fe, l = Lt, Fe = n.stateNode.containerInfo, Lt = !0, pn(
          e,
          t,
          n
        ), Fe = a, Lt = l;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        da(2, n, t), qe || da(4, n, t), pn(
          e,
          t,
          n
        );
        break;
      case 1:
        qe || (Tt(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && bh(
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
        qe = (a = qe) || n.memoizedState !== null, pn(
          e,
          t,
          n
        ), qe = a;
        break;
      case 30:
        Tt(n, t), pn(
          e,
          t,
          n
        );
        break;
      case 7:
        qe || Tt(n, t), pn(
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
        Be(t, t.return, n);
      }
    }
  }
  function Hh(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        Yl(e);
      } catch (n) {
        Be(t, t.return, n);
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
                Fe = g.stateNode, Lt = !1;
                break e;
              }
              break;
            case 5:
              Fe = g.stateNode, Lt = !1;
              break e;
            case 3:
            case 4:
              Fe = g.stateNode.containerInfo, Lt = !0;
              break e;
          }
          g = g.return;
        }
        if (Fe === null) throw Error(c(160));
        Mh(s, f, i), Fe = null, Lt = !1, s = i.alternate, s !== null && (s.return = null), i.return = null;
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
        Dt(t, e, n), zt(e), l & 512 && (qe || a === null || Tt(a, a.return)), l & 64 && dt && (e = e.updateQueue, e !== null && (t = e.callbacks, t !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? t : n.concat(t))));
        break;
      case 26:
        if (i = vn, Dt(t, e, n), zt(e), l & 512 && (qe || a === null || Tt(a, a.return)), l & 4)
          if (l = a !== null ? a.memoizedState : null, n = e.memoizedState, a === null)
            if (n === null)
              if (e.stateNode === null)
                if (dt)
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
                        a = l.getElementsByTagName("title")[0], (!a || a[ei] || a[yt] || a.namespaceURI === "http://www.w3.org/2000/svg" || a.hasAttribute("itemprop")) && (a = l.createElement(t), l.head.insertBefore(
                          a,
                          l.querySelector("head > title")
                        )), At(a, t, n), a[yt] = e, ot(a), t = a;
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
                        a = l.createElement(t), At(a, t, n), l.head.appendChild(a);
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
                        a = l.createElement(t), At(a, t, n), l.head.appendChild(a);
                        break;
                      default:
                        throw Error(c(468, t));
                    }
                    a[yt] = e, ot(a), t = a;
                  }
                  e.stateNode = t;
                }
              else
                dt || so(i, e.type, e.stateNode);
            else
              e.stateNode = Ym(
                i,
                n,
                e.memoizedProps
              );
          else
            l !== n ? (l === null ? (t = a.stateNode, t === null || qe || t.parentNode.removeChild(t)) : l.count--, n === null ? dt || so(i, e.type, e.stateNode) : Ym(i, n, e.memoizedProps)) : n === null && e.stateNode !== null && ms(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        break;
      case 27:
        Dt(t, e, n), zt(e), l & 512 && (qe || a === null || Tt(a, a.return)), a !== null && l & 4 && ms(
          e,
          e.memoizedProps,
          a.memoizedProps
        );
        break;
      case 5:
        if (i = Rn, Rn = !1, Dt(t, e, n), Rn = i, zt(e), l & 512 && (qe || a === null || Tt(a, a.return)), e.flags & 32) {
          t = e.stateNode;
          try {
            ul(t, ""), je = !0;
          } catch (D) {
            Be(e, e.return, D);
          }
        }
        l & 4 && e.stateNode != null && (t = e.memoizedProps, ms(
          e,
          t,
          a !== null ? a.memoizedProps : t
        )), l & 1024 && (Ts = !0);
        break;
      case 6:
        if (Dt(t, e, n), zt(e), l & 4) {
          if (e.stateNode === null)
            throw Error(c(162));
          t = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = t, je = !0;
          } catch (D) {
            Be(e, e.return, D);
          }
        }
        break;
      case 3:
        if (je = !1, Ar = null, i = vn, vn = qi(t.containerInfo), Dt(t, e, n), vn = i, zt(e), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Yl(t.containerInfo);
          } catch (D) {
            Be(e, e.return, D);
          }
        Ts && (Ts = !1, Lh(e)), je = !1;
        break;
      case 4:
        l = Rn, Rn = dt, a = af(), i = vn, vn = qi(
          e.stateNode.containerInfo
        ), Dt(t, e, n), zt(e), vn = i, je && Ci && (ur = !0), je = a, Rn = l;
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
        var f = dt, g = qe, _ = Rn;
        dt = f || i, Rn = _ || i, qe = g || s, Dt(t, e, n), qe = g, Rn = _, dt = f, zt(e), l & 8192 && (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, !i || a === null || s || dt || qe || (t = s || qe, n = dt, a = qe, dt = i || dt, qe = t, ha(e, 2), dt = n, qe = a), !i && Rn || _s(e, i)), l & 4 && (t = e.updateQueue, t !== null && (n = t.retryQueue, n !== null && (t.retryQueue = null, cr(e, n))));
        break;
      case 19:
        Dt(t, e, n), zt(e), l & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, cr(e, t)));
        break;
      case 30:
        l & 512 && (qe || a === null || Tt(a, a.return)), l = af(), i = Ci, s = (n & 335544064) === n, f = e.memoizedProps, Ci = s && In(
          f.default,
          f.update
        ) !== "none", Dt(t, e, n), zt(e), s && a !== null && je && (e.flags |= 4), Ci = i, je = l;
        break;
      case 21:
        break;
      case 7:
        l & 512 && (qe || a === null || Tt(a, a.return)), a && a.stateNode !== null && (a.stateNode._fragmentFiber = e);
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
          if (ds(l)) {
            var i = l.stateNode;
            a === null ? a = [i] : a.push(i);
          }
          if (fs(l)) break;
          l = l.return;
        }
        var s = a;
        if (n == null) throw Error(c(160));
        switch (n.tag) {
          case 27:
            var f = n.stateNode, g = gs(e);
            nr(
              e,
              g,
              f,
              s
            );
            break;
          case 5:
            var _ = n.stateNode;
            n.flags & 32 && (ul(_, ""), n.flags &= -33);
            var D = gs(e);
            nr(
              e,
              D,
              _,
              s
            );
            break;
          case 3:
          case 4:
            var I = n.stateNode.containerInfo, b = gs(e);
            ps(
              e,
              b,
              I,
              s
            );
            break;
          default:
            throw Error(c(161));
        }
      } catch (x) {
        Be(e, e.return, x);
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
    if (n === null) vs(e, !1);
    else
      switch (e.tag) {
        case 3:
          if (As = xn = !1, Nh(), Nl(t, e), !xn && !ur) {
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
            )), As = !0;
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
          e.memoizedState === null && (n.memoizedState !== null ? vs(e, !1) : Nl(t, e));
          break;
        case 30:
          a = xn, l = Nh(), xn = !1, Nl(t, e), xn && (e.flags |= 4);
          var i = e.memoizedProps, s = e.stateNode;
          t = Ln(i, s), s = Ln(n.memoizedProps, s);
          var f = In(i.default, i.update);
          f === "none" ? t = !1 : (i = n.memoizedState, n.memoizedState = null, n = e.child, qt = 0, t = Ss(
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
          Tt(n, n.return);
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
          Tt(n, n.return), n.tag !== 5 && n.tag !== 27 || Oi(n), ha(
            n,
            a
          );
          break;
        case 6:
          Oi(n);
          break;
        case 26:
          Tt(n, n.return), l = n.stateNode, n.memoizedState !== null || l === null || qe || l.parentNode.removeChild(l), ha(
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
          Tt(n, n.return), ha(
            n,
            a
          );
          break;
        case 7:
          Tt(n, n.return);
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
              Be(a, a.return, D);
            }
          if (a = i, l = a.updateQueue, l !== null) {
            var g = a.stateNode;
            try {
              var _ = l.shared.hiddenCallbacks;
              if (_ !== null)
                for (l.shared.hiddenCallbacks = null, l = 0; l < _.length; l++)
                  rd(_[l], g);
            } catch (D) {
              Be(a, a.return, D);
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
          ), f && a === null && s & 4 && hs(i), wn(i, i.return);
          break;
        case 6:
          Sh(i);
          break;
        case 26:
          g = i.stateNode, i.memoizedState !== null || g === null || dt || so(
            qi(g.ownerDocument),
            i.type,
            g
          ), yn(
            l,
            i,
            n
          ), f && a === null && s & 4 && hs(i), wn(i, i.return);
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
  function ws(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && hi(n));
  }
  function Os(e, t) {
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
        ), l && As && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), i & 2048 && (i = null, t.alternate !== null && (i = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== i && (t.refCount++, i != null && hi(i)));
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
          } catch (_) {
            Be(t, t.return, _);
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
        ))), i & 2048 && ws(f, t);
        break;
      case 24:
        cn(
          e,
          t,
          n,
          a
        ), i & 2048 && Os(t.alternate, t);
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
      var i = e, s = t, f = n, g = a, _ = s.flags;
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
          )), l && _ & 2048 && ws(
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
          ), l && _ & 2048 && Os(s.alternate, s);
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
            Ri(n, a), l & 2048 && ws(
              a.alternate,
              a
            );
            break;
          case 24:
            Ri(n, a), l & 2048 && Os(a.alternate, a);
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
          ht = a, Xh(
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
          ht = a, Xh(
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
    for (; ht !== null; ) {
      var n = ht;
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
      if (a = n.child, a !== null) a.return = n, ht = a;
      else
        e: for (n = e; ht !== null; ) {
          a = ht;
          var l = a.sibling, i = a.return;
          if (zh(a), a === n) {
            ht = null;
            break e;
          }
          if (l !== null) {
            l.return = i, ht = l;
            break e;
          }
          ht = i;
        }
    }
  }
  var Xv = {
    getCacheForType: function(e) {
      var t = Et(at), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return Et(at).controller.signal;
    }
  }, Qv = typeof WeakMap == "function" ? WeakMap : Map, He = 0, Xe = null, Oe = null, xe = 0, Ie = 0, Jt = null, ma = !1, Ol = !1, Cs = !1, kn = 0, tt = 0, ga = 0, Pa = 0, or = 0, Ft = 0, Cl = 0, Ui = null, It = null, Rs = !1, fr = 0, Qh = 0, dr = 1 / 0, hr = null, pa = null, Pe = 0, En = null, Wa = null, Dn = 0, xs = 0, Us = null, Kh = null, Rl = null, xl = null, Ul = null, Di = 0, mr = null;
  function $t() {
    return (He & 2) !== 0 && xe !== 0 ? xe & -xe : ue.T !== null ? Vs() : ko();
  }
  function Zh() {
    if (Ft === 0)
      if ((xe & 536870912) === 0 || Ne) {
        var e = cu;
        cu <<= 1, (cu & 3932160) === 0 && (cu = 262144), Ft = e;
      } else Ft = 536870912;
    return e = bt.current, e !== null && (e.flags |= 32), Ft;
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
    (e === Xe && (Ie === 2 || Ie === 9) || e.cancelPendingCommit !== null) && (zl(e, 0), va(
      e,
      xe,
      Ft,
      !1
    )), Wl(e, n), ((He & 2) === 0 || e !== Xe) && (e === Xe && ((He & 2) === 0 && (Pa |= n), tt === 4 && va(
      e,
      xe,
      Ft,
      !1
    )), zn(e));
  }
  function kh(e, t, n) {
    if ((He & 6) !== 0) throw Error(c(327));
    var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Pl(e, t), l = a ? kv(e, t) : zs(e, t, !0), i = a;
    do {
      if (l === 0) {
        Ol && !a && va(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, i && !Kv(n)) {
          l = zs(e, t, !1), i = !1;
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
              if (g && (zl(f, s).flags |= 256), s = zs(
                f,
                s,
                !1
              ), s !== 2 && s !== 6) {
                if (Cs && !g) {
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
            Dn = t, a.timeoutHandle = Ps(
              Jh.bind(
                null,
                a,
                n,
                It,
                hr,
                Rs,
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
            Rs,
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
  function Jh(e, t, n, a, l, i, s, f, g, _, D, I, b, x) {
    e.timeoutHandle = -1;
    var $ = t.subtreeFlags, ce = (i & 335544064) === i;
    if (I = null, (ce || $ & 8192 || ($ & 16785408) === 16785408) && (I = {
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
    ), ce && ($ = I, ce = e.containerInfo, ce = (ce.nodeType === 9 ? ce : ce.ownerDocument).__reactViewTransition, ce != null && ($.count++, $.waitingForViewTransition = !0, $ = Bi.bind($), ce.finished.then($, $))), $ = (i & 62914560) === i ? fr - Gt() : (i & 4194048) === i ? Qh - Gt() : 0, $ = Fy(
      I,
      $
    ), $ !== null)) {
      Dn = i, e.cancelPendingCommit = $(
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
          _,
          D,
          I,
          null,
          b,
          x
        )
      ), va(e, i, s, !_);
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
      _,
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
    return (He & 6) === 0 ? (zi(0), !1) : !0;
  }
  function Ds() {
    if (Oe !== null) {
      if (Ie === 0)
        var e = Oe.return;
      else
        e = Oe, Gn = Ba = null, Bc(e), El = null, pi = 0, e = Oe;
      for (; e !== null; )
        yh(e.alternate, e), e = e.return;
      Oe = null;
    }
  }
  function zl(e, t) {
    var n = e.timeoutHandle;
    return n !== -1 && (e.timeoutHandle = -1, py(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Dn = 0, Ds(), Xe = e, Oe = n = Bn(e.current, null), xe = t, Ie = 0, Jt = null, ma = !1, Ol = Pl(e, t), Cs = !1, Cl = Ft = or = Pa = ga = tt = 0, It = Ui = null, Rs = !1, kn = Yo(e, t), Au(), n;
  }
  function Fh(e, t) {
    Ae = null, ue.H = ku, t === yl || t === Mu ? (t = ad(), Ie = 3) : t === Oc ? (t = ad(), Ie = 4) : Ie = t === ts ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Jt = t, Oe === null && (tt = 1, Ju(
      e,
      an(t, e.current)
    ));
  }
  function $h() {
    var e = bt.current;
    return e === null ? !0 : (xe & 4194048) === xe ? Ot === null : (xe & 62914560) === xe || (xe & 536870912) !== 0 ? e === Ot : !1;
  }
  function Ph() {
    var e = ue.H;
    return ue.H = ku, e === null ? ku : e;
  }
  function Wh() {
    var e = ue.A;
    return ue.A = Xv, e;
  }
  function pr() {
    tt = 4, ma || (xe & 4194048) !== xe && bt.current !== null || (Ol = !0), (ga & 134217727) === 0 && (Pa & 134217727) === 0 || Xe === null || va(
      Xe,
      xe,
      Ft,
      !1
    );
  }
  function zs(e, t, n) {
    var a = He;
    He |= 2;
    var l = Ph(), i = Wh();
    (Xe !== e || xe !== t) && (hr = null, zl(e, t)), t = !1;
    var s = tt;
    e: do
      try {
        if (Ie !== 0 && Oe !== null) {
          var f = Oe, g = Jt;
          switch (Ie) {
            case 8:
              Ds(), s = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              bt.current === null && (t = !0);
              var _ = Ie;
              if (Ie = 0, Jt = null, Ml(e, f, g, _), n && Ol) {
                s = 0;
                break e;
              }
              break;
            default:
              _ = Ie, Ie = 0, Jt = null, Ml(e, f, g, _);
          }
        }
        Zv(), s = tt;
        break;
      } catch (D) {
        Fh(e, D);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Gn = Ba = null, He = a, ue.H = l, ue.A = i, Oe === null && (Xe = null, xe = 0, Au()), s;
  }
  function Zv() {
    for (; Oe !== null; ) em(Oe);
  }
  function kv(e, t) {
    var n = He;
    He |= 2;
    var a = Ph(), l = Wh();
    Xe !== e || xe !== t ? (hr = null, dr = Gt() + 500, zl(e, t)) : Ol = Pl(
      e,
      t
    );
    e: do
      try {
        if (Ie !== 0 && Oe !== null) {
          t = Oe;
          var i = Jt;
          t: switch (Ie) {
            case 1:
              Ie = 0, Jt = null, Ml(e, t, i, 1);
              break;
            case 2:
            case 9:
              if (td(i)) {
                Ie = 0, Jt = null, tm(t);
                break;
              }
              t = function() {
                Ie !== 2 && Ie !== 9 || Xe !== e || (Ie = 7), zn(e);
              }, i.then(t, t);
              break e;
            case 3:
              Ie = 7;
              break e;
            case 4:
              Ie = 5;
              break e;
            case 7:
              td(i) ? (Ie = 0, Jt = null, tm(t)) : (Ie = 0, Jt = null, Ml(e, t, i, 7));
              break;
            case 5:
              var s = null;
              switch (Oe.tag) {
                case 26:
                  s = Oe.memoizedState;
                case 5:
                case 27:
                  var f = Oe;
                  if (s ? Km(s) : f.stateNode.complete) {
                    Ie = 0, Jt = null;
                    var g = f.sibling;
                    if (g !== null) Oe = g;
                    else {
                      var _ = f.return;
                      _ !== null ? (Oe = _, vr(_)) : Oe = null;
                    }
                    break t;
                  }
              }
              Ie = 0, Jt = null, Ml(e, t, i, 5);
              break;
            case 6:
              Ie = 0, Jt = null, Ml(e, t, i, 6);
              break;
            case 8:
              Ds(), tt = 6;
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
    return Gn = Ba = null, ue.H = a, ue.A = l, He = n, Oe !== null ? 0 : (Xe = null, xe = 0, Au(), tt);
  }
  function Jv() {
    for (; Oe !== null && !dp(); )
      em(Oe);
  }
  function em(e) {
    var t = ph(e.alternate, e, kn);
    e.memoizedProps = e.pendingProps, t === null ? vr(e) : Oe = t;
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
          xe
        );
        break;
      case 11:
        t = sh(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          xe
        );
        break;
      case 5:
        Bc(t);
        var a = t;
        a === ft && (Ne ? (Ru(a), a.tag === 5 && a.stateNode != null && (Qe = a.stateNode)) : (Ru(a), Ne = !0));
      default:
        yh(n, t), t = Oe = Xf(t, kn), t = ph(n, t, kn);
    }
    e.memoizedProps = e.pendingProps, t === null ? vr(e) : Oe = t;
  }
  function Ml(e, t, n, a) {
    Gn = Ba = null, Bc(t), El = null, pi = 0;
    var l = t.return;
    try {
      if (Hv(
        e,
        l,
        t,
        n,
        xe
      )) {
        tt = 1, Ju(
          e,
          an(n, e.current)
        ), Oe = null;
        return;
      }
    } catch (i) {
      if (l !== null) throw Oe = l, i;
      tt = 1, Ju(
        e,
        an(n, e.current)
      ), Oe = null;
      return;
    }
    t.flags & 32768 ? (Ne || a === 1 ? e = !0 : Ol || (xe & 536870912) !== 0 ? e = !1 : (ma = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = bt.current, a !== null && a.tag === 13 && (a.flags |= 16384))), nm(t, e)) : vr(t);
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
        Oe = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        Oe = t;
        return;
      }
      Oe = t = e;
    } while (t !== null);
    tt === 0 && (tt = 5);
  }
  function nm(e, t) {
    do {
      var n = Vv(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, Oe = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        Oe = e;
        return;
      }
      Oe = e = n;
    } while (e !== null);
    tt = 6, Oe = null;
  }
  function am(e, t, n, a, l, i, s, f, g, _, D, I) {
    e.cancelPendingCommit = null;
    do
      yr();
    while (Pe !== 0);
    if ((He & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      e === Xe && (Oe = Xe = null, xe = 0), Wa = t, En = e, Dn = n, Us = l, Kh = a, Fv(
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
    if (xs = f, f |= mc, Tp(
      e,
      n,
      f,
      a,
      l,
      i
    ), xl = null, (n & 335544064) === n ? (Ul = _v(e), a = 10262) : (Ul = null, a = 10256), (t.subtreeFlags & a) !== 0 || (t.flags & a) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, ny(uu, function() {
      return qs(), null;
    })) : (e.callbackNode = null, e.callbackPriority = 0), ar = !1, a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
      a = ue.T, ue.T = null, l = pe.p, pe.p = 2, i = He, He |= 4;
      try {
        Gv(e, t, n);
      } finally {
        He = i, pe.p = l, ue.T = a;
      }
    }
    Pe = 1, ar ? Rl = Ty(
      s,
      e.containerInfo,
      Ul,
      Ms,
      js,
      Pv,
      Hs,
      qs,
      $v
    ) : (Ms(), js(), Hs());
  }
  function $v(e) {
    if (Pe !== 0) {
      var t = En.onRecoverableError;
      t(e, { componentStack: null });
    }
  }
  function Pv() {
    Pe === 3 && (Pe = 0, Ih(Wa, En), Pe = 4);
  }
  function Ms() {
    if (Pe === 1) {
      Pe = 0;
      var e = En, t = Wa, n = Dn, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = ue.T, ue.T = null;
        var l = pe.p;
        pe.p = 2;
        var i = He;
        He |= 4;
        try {
          Ci = ur = !1, qh(t, e, n), n = Js;
          var s = Mf(e.containerInfo), f = n.focusedElem, g = n.selectionRange;
          if (s !== f && f && f.ownerDocument && zf(
            f.ownerDocument.documentElement,
            f
          )) {
            if (g !== null && sc(f)) {
              var _ = g.start, D = g.end;
              if (D === void 0 && (D = _), "selectionStart" in f)
                f.selectionStart = _, f.selectionEnd = Math.min(
                  D,
                  f.value.length
                );
              else {
                var I = f.ownerDocument || document, b = I && I.defaultView || window;
                if (b.getSelection) {
                  var x = b.getSelection(), $ = f.textContent.length, ce = Math.min(g.start, $), _e = g.end === void 0 ? ce : Math.min(g.end, $);
                  !x.extend && ce > _e && (s = _e, _e = ce, ce = s);
                  var T = Df(
                    f,
                    ce
                  ), E = Df(
                    f,
                    _e
                  );
                  if (T && E && (x.rangeCount !== 1 || x.anchorNode !== T.node || x.anchorOffset !== T.offset || x.focusNode !== E.node || x.focusOffset !== E.offset)) {
                    var C = I.createRange();
                    C.setStart(T.node, T.offset), x.removeAllRanges(), ce > _e ? (x.addRange(C), x.extend(E.node, E.offset)) : (C.setEnd(E.node, E.offset), x.addRange(C));
                  }
                }
              }
            }
            for (I = [], x = f; x = x.parentNode; )
              x.nodeType === 1 && I.push({
                element: x,
                left: x.scrollLeft,
                top: x.scrollTop
              });
            for (typeof f.focus == "function" && f.focus(), f = 0; f < I.length; f++) {
              var q = I[f];
              q.element.scrollLeft = q.left, q.element.scrollTop = q.top;
            }
          }
          Gl = !!ks, Js = ks = null;
        } finally {
          He = i, pe.p = l, ue.T = a;
        }
      }
      e.current = t, Pe = 2;
    }
  }
  function js() {
    if (Pe === 2) {
      Pe = 0;
      var e = En, t = Wa, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = ue.T, ue.T = null;
        var a = pe.p;
        pe.p = 2;
        var l = He;
        He |= 4;
        try {
          Uh(e, t.alternate, t);
        } finally {
          He = l, pe.p = a, ue.T = n;
        }
      }
      Pe = 3;
    }
  }
  function Hs() {
    if (Pe === 4 || Pe === 3) {
      Pe = 0;
      var e = Rl;
      Rl = null, hp();
      var t = En, n = Wa, a = Dn, l = Kh, i = (a & 335544064) === a ? 10262 : 10256;
      if ((n.subtreeFlags & i) !== 0 || (n.flags & i) !== 0 ? Pe = 5 : (Pe = 0, Wa = En = null, lm(t, t.pendingLanes)), i = t.pendingLanes, i === 0 && (pa = null), Qr(a), n = n.stateNode, Yt && typeof Yt.onCommitFiberRoot == "function")
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
        n = ue.T, i = pe.p, pe.p = 2, ue.T = null;
        try {
          for (var s = t.onRecoverableError, f = 0; f < l.length; f++) {
            var g = l[f];
            s(g.value, {
              componentStack: g.stack
            });
          }
        } finally {
          ue.T = n, pe.p = i;
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
    return Rl !== null && (Rl.skipTransition(), Rl = null), Ms(), js(), Hs(), qs();
  }
  function qs() {
    if (Pe !== 5) return !1;
    var e = En, t = xs;
    xs = 0;
    var n = Qr(Dn), a = ue.T, l = pe.p;
    try {
      pe.p = 32 > n ? 32 : n, ue.T = null, n = Us, Us = null;
      var i = En, s = Dn;
      if (Pe = 0, Wa = En = null, Dn = 0, (He & 6) !== 0) throw Error(c(331));
      var f = He;
      if (He |= 4, Yh(i.current), Bh(
        i,
        i.current,
        s,
        n
      ), He = f, zi(0, !1), Yt && typeof Yt.onPostCommitFiberRoot == "function")
        try {
          Yt.onPostCommitFiberRoot($l, i);
        } catch {
        }
      return !0;
    } finally {
      pe.p = l, ue.T = a, lm(e, t);
    }
  }
  function im(e, t, n) {
    t = an(n, t), t = es(e.stateNode, t, 2), e = ca(e, t, 2), e !== null && (Wl(e, 2), zn(e));
  }
  function Be(e, t, n) {
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
  function Ls(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Qv();
      var l = /* @__PURE__ */ new Set();
      a.set(t, l);
    } else
      l = a.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), a.set(t, l));
    l.has(n) || (Cs = !0, l.add(n), e = Wv.bind(null, e, t, n), t.then(e, e));
  }
  function Wv(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Xe === e && (xe & n) === n && ((tt === 4 || tt === 3 && (xe & 62914560) === xe && 300 > Gt() - fr) && (He & 2) === 0 ? zl(e, 0) : or |= n, Cl === xe && (Cl = 0)), zn(e);
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
    return Vr(e, t);
  }
  var jl = null, Hl = null, Is = !1, Er = !1, Bs = !1, ya = 0;
  function zn(e) {
    e !== Hl && e.next === null && (Hl === null ? jl = Hl = e : Hl = Hl.next = e), Er = !0, Is || (Is = !0, ly());
  }
  function zi(e, t) {
    if (!Bs && Er) {
      Bs = !0;
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
            i = xe, i = ou(
              a,
              a === Xe ? i : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (i & 3) === 0 || Pl(a, i) || (n = !0, om(a, i));
          a = a.next;
        }
      while (n);
      Bs = !1;
    }
  }
  function ay() {
    rm();
  }
  function rm() {
    Er = Is = !1;
    var e = 0;
    ya !== 0 && gy() && (e = ya);
    for (var t = Gt(), n = null, a = jl; a !== null; ) {
      var l = a.next, i = cm(a, t);
      i === 0 ? (a.next = null, n === null ? jl = l : n.next = l, l === null && (Hl = n)) : (n = a, (e !== 0 || (i & 3) !== 0) && (Er = !0)), a = l;
    }
    Pe !== 0 && Pe !== 5 || zi(e), ya !== 0 && (ya = 0);
  }
  function cm(e, t) {
    for (var n = e.suspendedLanes, a = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var s = 31 - Xt(i), f = 1 << s, g = l[s];
      g === -1 ? ((f & n) === 0 || (f & a) !== 0) && (l[s] = Sp(f, t)) : g <= t && (e.expiredLanes |= f), i &= ~f;
    }
    if (t = Xe, n = xe, n = ou(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, n === 0 || e === t && (Ie === 2 || Ie === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && Gr(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || Pl(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (a !== null && Gr(a), Qr(n)) {
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
      return a = sm.bind(null, e), n = Vr(n, a), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return a !== null && a !== null && Gr(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function sm(e, t) {
    if (Pe !== 0 && Pe !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (yr() && e.callbackNode !== n)
      return null;
    var a = xe;
    return a = ou(
      e,
      e === Xe ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (kh(e, a, t), cm(e, Gt()), e.callbackNode != null && e.callbackNode === n ? sm.bind(null, e) : null);
  }
  function om(e, t) {
    if (yr()) return null;
    kh(e, t, !0);
  }
  function ly() {
    vy(function() {
      (He & 6) !== 0 ? Vr(
        Bo,
        ay
      ) : rm();
    });
  }
  function Vs() {
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
                  Jc(
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
                typeof i == "function" && (f.preventDefault(), g = new FormData(l, s), Jc(
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
  for (var Gs = 0; Gs < hc.length; Gs++) {
    var Ys = hc[Gs], uy = Ys.toLowerCase(), ry = Ys[0].toUpperCase() + Ys.slice(1);
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
            var f = a[s], g = f.instance, _ = f.currentTarget;
            if (f = f.listener, g !== i && l.isPropagationStopped())
              break e;
            i = f, l.currentTarget = _;
            try {
              i(l);
            } catch (D) {
              Tu(D);
            }
            l.currentTarget = null, i = g;
          }
        else
          for (s = 0; s < a.length; s++) {
            if (f = a[s], g = f.instance, _ = f.currentTarget, f = f.listener, g !== i && l.isPropagationStopped())
              break e;
            i = f, l.currentTarget = _;
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
  function Ce(e, t) {
    var n = t[Fo];
    n === void 0 && (n = t[Fo] = /* @__PURE__ */ new Set());
    var a = e + "__bubble";
    n.has(a) || (hm(t, e, 2, !1), n.add(a));
  }
  function Xs(e, t, n) {
    var a = 0;
    t && (a |= 4), hm(
      n,
      e,
      a,
      t
    );
  }
  var br = "_reactListening" + Math.random().toString(36).slice(2);
  function Qs(e) {
    if (!e[br]) {
      e[br] = !0, Wo.forEach(function(n) {
        n !== "selectionchange" && (cy.has(n) || Xs(n, !1, e), Xs(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[br] || (t[br] = !0, Xs("selectionchange", !1, t));
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
  function Ks(e, t, n, a, l) {
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
      var _ = i, D = $r(n), I = [];
      e: {
        var b = Vf.get(e);
        if (b !== void 0) {
          var x = Eu, $ = e;
          switch (e) {
            case "keypress":
              if (vu(n) === 0) break e;
            case "keydown":
            case "keyup":
              x = Kp;
              break;
            case "focusin":
              $ = "focus", x = ac;
              break;
            case "focusout":
              $ = "blur", x = ac;
              break;
            case "beforeblur":
            case "afterblur":
              x = ac;
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
              x = pf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              x = Mp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              x = $p;
              break;
            case qf:
            case Lf:
            case If:
              x = qp;
              break;
            case Bf:
              x = Wp;
              break;
            case "scroll":
            case "scrollend":
              x = Dp;
              break;
            case "wheel":
              x = tv;
              break;
            case "copy":
            case "cut":
            case "paste":
              x = Ip;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              x = yf;
              break;
            case "submit":
              x = Jp;
              break;
            case "toggle":
            case "beforetoggle":
              x = av;
          }
          var ce = (t & 4) !== 0, _e = !ce && (e === "scroll" || e === "scrollend"), T = ce ? b !== null ? b + "Capture" : null : b;
          ce = [];
          for (var E = _, C; E !== null; ) {
            var q = E;
            if (C = q.stateNode, q = q.tag, q !== 5 && q !== 26 && q !== 27 || C === null || T === null || (q = ni(E, T), q != null && ce.push(
              ji(E, q, C)
            )), _e) break;
            E = E.return;
          }
          0 < ce.length && (b = new x(
            b,
            $,
            null,
            n,
            D
          ), I.push({ event: b, listeners: ce }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (x = e === "mouseover" || e === "pointerover", b = e === "mouseout" || e === "pointerout", x && n !== Fr && ($ = n.relatedTarget || n.fromElement) && (za($) || $[tl]))
            break e;
          (b || x) && ($ = D.window === D ? D : (x = D.ownerDocument) ? x.defaultView || x.parentWindow : window, b ? (x = n.relatedTarget || n.toElement, b = _, x = x ? za(x) : null, x !== null && (_e = h(x), ce = x.tag, x !== _e || ce !== 5 && ce !== 27 && ce !== 6) && (x = null)) : (b = null, x = _), b !== x && (ce = pf, q = "onMouseLeave", T = "onMouseEnter", E = "mouse", (e === "pointerout" || e === "pointerover") && (ce = yf, q = "onPointerLeave", T = "onPointerEnter", E = "pointer"), _e = b == null ? $ : ti(b), C = x == null ? $ : ti(x), $ = new ce(
            q,
            E + "leave",
            b,
            n,
            D
          ), $.target = _e, $.relatedTarget = C, q = null, za(D) === _ && (ce = new ce(
            T,
            E + "enter",
            x,
            n,
            D
          ), ce.target = C, ce.relatedTarget = _e, q = ce), _e = q, ce = b && x ? te(
            b,
            x,
            sy
          ) : null, b !== null && mm(
            I,
            $,
            b,
            ce,
            !1
          ), x !== null && _e !== null && mm(
            I,
            _e,
            x,
            ce,
            !0
          )));
        }
        e: {
          if (b = _ ? ti(_) : window, x = b.nodeName && b.nodeName.toLowerCase(), x === "select" || x === "input" && b.type === "file")
            var ae = wf;
          else if (_f(b))
            if (Of)
              ae = hv;
            else {
              ae = fv;
              var Ue = ov;
            }
          else
            x = b.nodeName, !x || x.toLowerCase() !== "input" || b.type !== "checkbox" && b.type !== "radio" ? _ && Jr(_.elementType) && (ae = wf) : ae = dv;
          if (ae && (ae = ae(e, _))) {
            Nf(
              I,
              ae,
              n,
              D
            );
            break e;
          }
          Ue && Ue(e, b, _);
        }
        switch (Ue = _ ? ti(_) : window, e) {
          case "focusin":
            (_f(Ue) || Ue.contentEditable === "true") && (ol = Ue, oc = _, oi = null);
            break;
          case "focusout":
            oi = oc = ol = null;
            break;
          case "mousedown":
            fc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            fc = !1, jf(I, n, D);
            break;
          case "selectionchange":
            if (gv) break;
          case "keydown":
          case "keyup":
            jf(I, n, D);
        }
        var he;
        if (ic)
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
        ve && (Ef && n.locale !== "ko" && (sl || ve !== "onCompositionStart" ? ve === "onCompositionEnd" && sl && (he = mf()) : (Wn = D, ec = "value" in Wn ? Wn.value : Wn.textContent, sl = !0)), Ue = Sr(_, ve), 0 < Ue.length && (ve = new vf(
          ve,
          e,
          null,
          n,
          D
        ), I.push({ event: ve, listeners: Ue }), he ? ve.data = he : (he = Af(n), he !== null && (ve.data = he)))), (he = iv ? uv(e, n) : rv(e, n)) && (ve = Sr(_, "onBeforeInput"), 0 < ve.length && (Ue = new vf(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          D
        ), I.push({
          event: Ue,
          listeners: ve
        }), Ue.data = he)), iy(
          I,
          e,
          _,
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
      var f = n, g = f.alternate, _ = f.stateNode;
      if (f = f.tag, g !== null && g === a) break;
      f !== 5 && f !== 26 && f !== 27 || _ === null || (g = _, l ? (_ = ni(n, i), _ != null && s.unshift(
        ji(n, _, g)
      )) : l || (_ = ni(n, i), _ != null && s.push(
        ji(n, _, g)
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
  function Ve(e, t, n, a, l, i) {
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
          typeof i == "function" && (n === "formAction" ? (t !== "input" && Ve(e, t, "name", l.name, l, null), Ve(
            e,
            t,
            "formEncType",
            l.formEncType,
            l,
            null
          ), Ve(
            e,
            t,
            "formMethod",
            l.formMethod,
            l,
            null
          ), Ve(
            e,
            t,
            "formTarget",
            l.formTarget,
            l,
            null
          )) : (Ve(e, t, "encType", l.encType, l, null), Ve(e, t, "method", l.method, l, null), Ve(e, t, "target", l.target, l, null)));
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
        a != null && Ce("scroll", e);
        return;
      case "onScrollEnd":
        a != null && Ce("scrollend", e);
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
        Ce("beforetoggle", e), Ce("toggle", e), hu(e, "popover", a);
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
    je = !0;
  }
  function Zs(e, t, n, a, l, i) {
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
        a != null && Ce("scroll", e);
        return;
      case "onScrollEnd":
        a != null && Ce("scrollend", e);
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
            je = !0, n in e ? e[n] = a : a === !0 ? e.setAttribute(n, "") : hu(e, n, a);
          }
        return;
    }
    je = !0;
  }
  function At(e, t, n) {
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
        Ce("error", e), Ce("load", e);
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
                  Ve(e, t, i, s, n, null);
              }
          }
        l && Ve(e, t, "srcSet", n.srcSet, n, null), a && Ve(e, t, "src", n.src, n, null);
        return;
      case "input":
        Ce("invalid", e);
        var f = i = s = l = null, g = null, _ = null;
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
                  _ = D;
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
                  Ve(e, t, a, D, n, null);
              }
          }
        rf(
          e,
          i,
          f,
          g,
          _,
          s,
          l,
          !1
        );
        return;
      case "select":
        Ce("invalid", e), a = s = i = null;
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
                Ve(e, t, l, f, n, null);
            }
        t = i, n = s, e.multiple = !!a, t != null ? il(e, !!a, t, !1) : n != null && il(e, !!a, n, !0);
        return;
      case "textarea":
        Ce("invalid", e), i = l = a = null;
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
                Ve(e, t, s, f, n, null);
            }
        sf(e, a, l, i);
        return;
      case "option":
        for (g in n)
          n.hasOwnProperty(g) && (a = n[g], a != null) && (g === "selected" ? e.selected = a && typeof a != "function" && typeof a != "symbol" : Ve(e, t, g, a, n, null));
        return;
      case "dialog":
        Ce("beforetoggle", e), Ce("toggle", e), Ce("cancel", e), Ce("close", e);
        break;
      case "iframe":
      case "object":
        Ce("load", e);
        break;
      case "video":
      case "audio":
        for (a = 0; a < Mi.length; a++)
          Ce(Mi[a], e);
        break;
      case "image":
        Ce("error", e), Ce("load", e);
        break;
      case "details":
        Ce("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ce("error", e), Ce("load", e);
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
                Ve(e, t, _, a, n, null);
            }
        return;
      default:
        if (Jr(t)) {
          for (D in n)
            n.hasOwnProperty(D) && (a = n[D], a !== void 0 && Zs(
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
      n.hasOwnProperty(f) && (a = n[f], a != null && Ve(e, t, f, a, n, null));
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
        var l = null, i = null, s = null, f = null, g = null, _ = null, D = null;
        for (x in n) {
          var I = n[x];
          if (n.hasOwnProperty(x) && I != null)
            switch (x) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                g = I;
              default:
                a.hasOwnProperty(x) || Ve(e, t, x, null, a, I);
            }
        }
        for (var b in a) {
          var x = a[b];
          if (I = n[b], a.hasOwnProperty(b) && (x != null || I != null))
            switch (b) {
              case "type":
                x !== I && (je = !0), i = x;
                break;
              case "name":
                x !== I && (je = !0), l = x;
                break;
              case "checked":
                x !== I && (je = !0), _ = x;
                break;
              case "defaultChecked":
                x !== I && (je = !0), D = x;
                break;
              case "value":
                x !== I && (je = !0), s = x;
                break;
              case "defaultValue":
                x !== I && (je = !0), f = x;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (x != null)
                  throw Error(c(137, t));
                break;
              default:
                x !== I && Ve(
                  e,
                  t,
                  b,
                  x,
                  a,
                  I
                );
            }
        }
        Zr(
          e,
          s,
          f,
          g,
          _,
          D,
          i,
          l
        );
        return;
      case "select":
        x = s = f = b = null;
        for (i in n)
          if (g = n[i], n.hasOwnProperty(i) && g != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                x = g;
              default:
                a.hasOwnProperty(i) || Ve(
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
                i !== g && (je = !0), b = i;
                break;
              case "defaultValue":
                i !== g && (je = !0), f = i;
                break;
              case "multiple":
                i !== g && (je = !0), s = i;
              default:
                i !== g && Ve(
                  e,
                  t,
                  l,
                  i,
                  a,
                  g
                );
            }
        t = f, n = s, a = x, b != null ? il(e, !!n, b, !1) : !!a != !!n && (t != null ? il(e, !!n, t, !0) : il(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        x = b = null;
        for (f in n)
          if (l = n[f], n.hasOwnProperty(f) && l != null && !a.hasOwnProperty(f))
            switch (f) {
              case "value":
                break;
              case "children":
                break;
              default:
                Ve(e, t, f, null, a, l);
            }
        for (s in a)
          if (l = a[s], i = n[s], a.hasOwnProperty(s) && (l != null || i != null))
            switch (s) {
              case "value":
                l !== i && (je = !0), b = l;
                break;
              case "defaultValue":
                l !== i && (je = !0), x = l;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (l != null) throw Error(c(91));
                break;
              default:
                l !== i && Ve(e, t, s, l, a, i);
            }
        cf(e, b, x);
        return;
      case "option":
        for (var $ in n)
          b = n[$], n.hasOwnProperty($) && b != null && !a.hasOwnProperty($) && ($ === "selected" ? e.selected = !1 : Ve(
            e,
            t,
            $,
            null,
            a,
            b
          ));
        for (g in a)
          b = a[g], x = n[g], a.hasOwnProperty(g) && b !== x && (b != null || x != null) && (g === "selected" ? (b !== x && (je = !0), e.selected = b && typeof b != "function" && typeof b != "symbol") : Ve(
            e,
            t,
            g,
            b,
            a,
            x
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
        for (var ce in n)
          b = n[ce], n.hasOwnProperty(ce) && b != null && !a.hasOwnProperty(ce) && Ve(e, t, ce, null, a, b);
        for (_ in a)
          if (b = a[_], x = n[_], a.hasOwnProperty(_) && b !== x && (b != null || x != null))
            switch (_) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (b != null)
                  throw Error(c(137, t));
                break;
              default:
                Ve(
                  e,
                  t,
                  _,
                  b,
                  a,
                  x
                );
            }
        return;
      default:
        if (Jr(t)) {
          for (var _e in n)
            b = n[_e], n.hasOwnProperty(_e) && b !== void 0 && !a.hasOwnProperty(_e) && Zs(
              e,
              t,
              _e,
              void 0,
              a,
              b
            );
          for (D in a)
            b = a[D], x = n[D], !a.hasOwnProperty(D) || b === x || b === void 0 && x === void 0 || Zs(
              e,
              t,
              D,
              b,
              a,
              x
            );
          return;
        }
    }
    for (var T in n)
      b = n[T], n.hasOwnProperty(T) && b != null && !a.hasOwnProperty(T) && Ve(e, t, T, null, a, b);
    for (I in a)
      b = a[I], x = n[I], !a.hasOwnProperty(I) || b === x || b == null && x == null || Ve(e, t, I, b, a, x);
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
            var g = n[a], _ = g.startTime;
            if (_ > f) break;
            var D = g.transferSize, I = g.initiatorType;
            D && vm(I) && (g = g.responseEnd, s += D * (g < f ? 1 : (f - _) / (g - _)));
          }
          if (--a, t += 8 * (i + s) / (l.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var ks = null, Js = null;
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
    ).createElement(e), n[yt] = a, n[jt] = t, At(n, e, t), ot(n), n;
  }
  function Fs(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var $s = null;
  function gy() {
    var e = window.event;
    return e && e.type === "popstate" ? e === $s ? !1 : ($s = e, !0) : ($s = null, !1);
  }
  var Ps = typeof setTimeout == "function" ? setTimeout : void 0, py = typeof clearTimeout == "function" ? clearTimeout : void 0, Sm = typeof Promise == "function" ? Promise : void 0, Tm = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Ps, vy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Sm < "u" ? function(e) {
    return Sm.resolve(null).then(e).catch(yy);
  } : Ps;
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
          uo(
            e.ownerDocument.documentElement
          );
        else if (n === "head") {
          n = e.ownerDocument.head, uo(n);
          for (var i = n.firstChild; i; ) {
            var s = i.nextSibling, f = i.nodeName;
            i[ei] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && i.rel.toLowerCase() === "stylesheet" || n.removeChild(i), i = s;
          }
        } else
          n === "body" && uo(e.ownerDocument.body);
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
  function Ws(e) {
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
    var _ = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var D = _.startViewTransition({
        update: function() {
          var b = _.defaultView, x = b.navigation && b.navigation.transition, $ = _.fonts.status;
          a();
          var ce = [];
          if ($ === "loaded" && (by(_), _.fonts.status === "loading" && ce.push(_.fonts.ready)), $ = ce.length, e !== null)
            for (var _e = e.suspenseyImages, T = 0, E = 0; E < _e.length; E++) {
              var C = _e[E];
              if (!C.complete) {
                var q = C.getBoundingClientRect();
                if (0 < q.bottom && 0 < q.right && q.top < b.innerHeight && q.left < b.innerWidth) {
                  if (T += Zm(C), T > _r) {
                    ce.length = $;
                    break;
                  }
                  C = new Promise(
                    Sy.bind(C)
                  ), ce.push(C);
                }
              }
            }
          if (0 < ce.length)
            return b = Promise.race([
              Promise.all(ce),
              new Promise(function(ae) {
                return setTimeout(ae, 500);
              })
            ]).then(l, l), (x ? Promise.allSettled([x.finished, b]) : b).then(i, i);
          if (l(), x)
            return x.finished.then(
              i,
              i
            );
          i();
        },
        types: n
      });
      _.__reactViewTransition = D;
      var I = [];
      return D.ready.then(
        function() {
          for (var b = _.documentElement.getAnimations({
            subtree: !0
          }), x = 0; x < b.length; x++) {
            var $ = b[x], ce = $.effect, _e = ce.pseudoElement;
            if (_e != null && _e.startsWith("::view-transition")) {
              I.push($), $ = ce.getKeyframes();
              for (var T = _e = void 0, E = !0, C = 0; C < $.length; C++) {
                var q = $[C], ae = q.width;
                if (_e === void 0) _e = ae;
                else if (_e !== ae) {
                  E = !1;
                  break;
                }
                if (ae = q.height, T === void 0) T = ae;
                else if (T !== ae) {
                  E = !1;
                  break;
                }
                delete q.width, delete q.height, q.transform === "none" && delete q.transform;
              }
              E && _e !== void 0 && T !== void 0 && (ce.setKeyframes($), E = getComputedStyle(
                ce.target,
                ce.pseudoElement
              ), E.width !== _e || E.height !== T) && (E = $[0], E.width = _e, E.height = T, E = $[$.length - 1], E.width = _e, E.height = T, ce.setKeyframes($));
            }
          }
          s();
        },
        function(b) {
          _.__reactViewTransition === D && (_.__reactViewTransition = null);
          try {
            typeof b == "object" && b !== null && b.name === "InvalidStateError" && (b.message === "View transition was skipped because document visibility state is hidden." || b.message === "Skipping view transition because document visibility state has become hidden." || b.message === "Skipping view transition because viewport size changed." || b.message === "Transition was aborted because of invalid state") && (b = null), b !== null && g(b);
          } finally {
            a(), l(), s();
          }
        }
      ), D.finished.finally(function() {
        for (var b = 0; b < I.length; b++)
          I[b].cancel();
        _.__reactViewTransition === D && (_.__reactViewTransition = null), f();
      }), D;
    } catch {
      return a(), l(), s(), null;
    }
  }
  function el(e, t) {
    this._scope = document.documentElement, this._selector = "::view-transition-" + e + "(" + t + ")";
  }
  el.prototype.animate = function(e, t) {
    return t = typeof t == "number" ? { duration: t } : le({}, t), t.pseudoElement = this._selector, this._scope.animate(e, t);
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
    return j(e).addEventListener(
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
    return j(e).removeEventListener(
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
    var t = H(
      this._fragmentFiber
    );
    if (t === null) return !0;
    t = j(t);
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
    return e.tag === 6 ? !1 : (e = j(e), Hy(e, t));
  }
  Pt.prototype.focusLast = function(e) {
    var t = [];
    v(
      this._fragmentFiber.child,
      !0,
      eo,
      t,
      void 0,
      void 0
    );
    for (var n = t.length - 1; 0 <= n && !xm(t[n], e); n--) ;
  };
  function eo(e, t) {
    return t.push(e), !1;
  }
  Pt.prototype.blur = function() {
    var e = H(
      this._fragmentFiber
    );
    e !== null && (e = j(e), e = Hi(e).activeElement, e !== null && v(
      this._fragmentFiber.child,
      !1,
      Ny,
      e,
      void 0,
      void 0
    ));
  };
  function Ny(e, t) {
    return e.tag === 6 ? !1 : (e = j(e), e === t || e.contains(t) ? (t.blur(), !0) : !1);
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
    return e.tag === 6 || (e = j(e), t.observe(e)), !1;
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
    return e.tag === 6 || (e = j(e), t.unobserve(e)), !1;
  }
  var bn = [], to = !1;
  function Cy(e, t, n) {
    bn.push({
      fragmentInstance: e,
      observer: t,
      instance: n
    }), to || (to = !0, qy(function() {
      to = !1;
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
      e = j(e), t.push.apply(t, e.getClientRects());
    return !1;
  }
  Pt.prototype.getRootNode = function(e) {
    var t = H(
      this._fragmentFiber
    );
    return t === null ? this : j(t).getRootNode(e);
  }, Pt.prototype.compareDocumentPosition = function(e) {
    var t = H(
      this._fragmentFiber
    );
    if (t === null) return Node.DOCUMENT_POSITION_DISCONNECTED;
    var n = [];
    v(
      this._fragmentFiber.child,
      !1,
      eo,
      n,
      void 0,
      void 0
    );
    var a = j(t);
    if (n.length === 0) {
      if (n = a, U(this._fragmentFiber)) {
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
      return n === e ? l = Node.DOCUMENT_POSITION_CONTAINS : a & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = N(t)[1], n === null ? l = Node.DOCUMENT_POSITION_PRECEDING : (e = j(n).compareDocumentPosition(
        e
      ), l = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), l |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    t = j(n[0]), l = j(n[n.length - 1]);
    var i = U(this._fragmentFiber) ? t.parentElement : a;
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
    return e & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!i) && !(t = i === n) && (t = te(
      n,
      i,
      oe
    ), t === null ? t = !1 : (v(
      t,
      !0,
      Q,
      i,
      n
    ), i = ne, ne = null, t = i !== null)), t) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!i) && !(t = i === a) && (t = te(
      a,
      i,
      oe
    ), t === null ? t = !1 : (v(
      t,
      !0,
      Z,
      i,
      a
    ), i = ne, F = ne = null, t = i !== null)), t) : !1;
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
      eo,
      t,
      void 0,
      void 0
    );
    var n = e !== !1;
    if (t.length === 0) {
      var a = N(
        this._fragmentFiber
      );
      if (a = n ? a[1] || a[0] || H(this._fragmentFiber) : a[0] || a[1], a === null) return;
      if (a.tag === 6) {
        e = j(a), Um(e, n);
        return;
      }
      if (a = j(a), a.nodeType !== 9) {
        if (a.nodeType === 11) {
          n = "host" in a ? a.host : null, n !== null && n.scrollIntoView(e);
          return;
        }
        a.scrollIntoView(e);
      }
    }
    for (a = n ? t.length - 1 : 0; a !== (n ? -1 : t.length); ) {
      var l = t[a];
      l.tag === 6 ? (l = j(l), Um(l, n)) : j(l).scrollIntoView(e), a += n ? -1 : 1;
    }
  };
  function Uy(e, t) {
    return e = j(e), Dm(e, t), !1;
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
  function no(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          no(n), du(n);
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
  function ao(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function lo(e) {
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
  var io = null;
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
      n.hasOwnProperty(a) && l != null && Ve(e, t, a, null, dy, l);
    }
    n.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === An && (e.onclick = null), du(e);
  }
  function uo(e) {
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
      l = 'link[rel="' + e + '"][href="' + l + '"]', typeof n == "string" && (l += '[crossorigin="' + n + '"]'), Im.has(l) || (Im.add(l), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(l) === null && (t = a.createElement("link"), At(t, "link", e), ot(t), a.head.appendChild(t)));
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
      if (!(on.has(i) || (e = le(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), on.set(i, e), a.querySelector(l) !== null || t === "style" && a.querySelector(Li(i)) || t === "script" && a.querySelector(Ii(i))))) {
        var s = a.createElement("link");
        At(s, "link", e), t === "style" && (s[fu] = !0, s.onload = s.onerror = function() {
          Po(s);
        }), ot(s), a.head.appendChild(s);
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
      if (!on.has(i) && (e = le({ rel: "modulepreload", href: e }, t), on.set(i, e), n.querySelector(l) === null)) {
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
        a = n.createElement("link"), At(a, "link", e), ot(a), n.head.appendChild(a);
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
          e = le(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = on.get(i)) && ro(e, n);
          var g = s = a.createElement("link");
          ot(g), At(g, "link", e), g._p = new Promise(function(_, D) {
            g.onload = _, g.onerror = D;
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
      i || (i = n.querySelector(Ii(l)), i || (e = le({ src: e, async: !0 }, t), (t = on.get(l)) && co(e, t), i = n.createElement("script"), ot(i), At(i, "link", e), n.head.appendChild(i)), i = {
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
      i || (i = n.querySelector(Ii(l)), i || (e = le({ src: e, async: !0, type: "module" }, t), (t = on.get(l)) && co(e, t), i = n.createElement("script"), ot(i), At(i, "link", e), n.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(l, i));
    }
  }
  function Vm(e, t, n, a) {
    var l = (l = X.current) ? qi(l) : null;
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
    return le({}, e, {
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
      t = e.createElement("link"), t[fu] = !0, t.onload = t.onerror = Po.bind(null, t), At(t, "link", n), ot(t), e.head.appendChild(t);
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
            return t.instance = a, ot(a), a;
          var l = le({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), ot(a), At(a, "style", l), Tr(a, n.precedence, e), t.instance = a;
        case "stylesheet":
          l = Il(n.href);
          var i = e.querySelector(
            Li(l)
          );
          if (i)
            return t.state.loading |= 4, t.instance = i, ot(i), i;
          a = Gm(n), (l = on.get(l)) && ro(a, l), i = (e.ownerDocument || e).createElement("link"), ot(i);
          var s = i;
          return s._p = new Promise(function(f, g) {
            s.onload = f, s.onerror = g;
          }), At(i, "link", a), t.state.loading |= 4, Tr(i, n.precedence, e), t.instance = i;
        case "script":
          return i = Bl(n.src), (l = e.querySelector(
            Ii(i)
          )) ? (t.instance = l, ot(l), l) : (a = n, (l = on.get(i)) && (a = le({}, n), co(a, l)), e = e.ownerDocument || e, l = e.createElement("script"), ot(l), At(l, "link", a), e.head.appendChild(l), t.instance = l);
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
  function ro(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function co(e, t) {
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
      if (!(i[ei] || i[yt] || e === "link" && i.getAttribute("rel") === "stylesheet") && i.namespaceURI !== "http://www.w3.org/2000/svg") {
        var s = i.getAttribute(t) || "";
        s = e + s;
        var f = a.get(s);
        f ? f.push(i) : a.set(s, [i]);
      }
    }
    return a;
  }
  function so(e, t, n) {
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
          t = i._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Bi.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = i, ot(i);
          return;
        }
        i = t.ownerDocument || t, a = Gm(a), (l = on.get(l)) && ro(a, l), i = i.createElement("link"), ot(i);
        var s = i;
        s._p = new Promise(function(f, g) {
          s.onload = f, s.onerror = g;
        }), At(i, "link", a), n.instance = i;
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
    $$typeof: L,
    Provider: null,
    Consumer: null,
    _currentValue: Wt,
    _currentValue2: Wt,
    _threadCount: 0
  };
  function Wy(e, t, n, a, l, i, s, f, g) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Yr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Yr(0), this.hiddenUpdates = Yr(null), this.identifierPrefix = a, this.onUncaughtError = l, this.onCaughtError = i, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = g, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Fm(e, t, n, a, l, i, s, f, g, _, D, I) {
    return e = new Wy(
      e,
      t,
      n,
      s,
      g,
      _,
      D,
      I,
      f
    ), t = 1, i === !0 && (t |= 24), i = Ht(3, null, null, t), e.current = i, i.stateNode = e, t = _c(), t.refCount++, e.pooledCache = t, t.refCount++, i.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: t
    }, Cc(i), e;
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
  function oo(e, t) {
    Wm(e, t), (e = e.alternate) && Wm(e, t);
  }
  function eg(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = qa(e, 67108864);
      t !== null && Bt(t, e, 67108864), oo(e, 67108864);
    }
  }
  function tg(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = $t();
      t = Xr(t);
      var n = qa(e, t);
      n !== null && Bt(n, e, t), oo(e, t);
    }
  }
  var Gl = !0;
  function e0(e, t, n, a) {
    var l = ue.T;
    ue.T = null;
    var i = pe.p;
    try {
      pe.p = 2, fo(e, t, n, a);
    } finally {
      pe.p = i, ue.T = l;
    }
  }
  function t0(e, t, n, a) {
    var l = ue.T;
    ue.T = null;
    var i = pe.p;
    try {
      pe.p = 8, fo(e, t, n, a);
    } finally {
      pe.p = i, ue.T = l;
    }
  }
  function fo(e, t, n, a) {
    if (Gl) {
      var l = ho(a);
      if (l === null)
        Ks(
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
                    zn(i), (He & 6) === 0 && (dr = Gt() + 500, zi(0));
                  }
                }
                break;
              case 31:
              case 13:
                f = qa(i, 2), f !== null && Bt(f, i, 2), gr(), oo(i, 2);
            }
          if (i = ho(a), i === null && Ks(
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
        Ks(
          e,
          t,
          a,
          null,
          n
        );
    }
  }
  function ho(e) {
    return e = $r(e), mo(e);
  }
  var Or = null;
  function mo(e) {
    if (Or = null, e = za(e), e !== null) {
      var t = h(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = p(t), e !== null) return e;
          e = null;
        } else if (n === 31) {
          if (e = S(t), e !== null) return e;
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
  var go = !1, ba = null, Sa = null, Ta = null, Vi = /* @__PURE__ */ new Map(), Gi = /* @__PURE__ */ new Map(), Aa = [], n0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
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
          if (t = S(n), t !== null) {
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
      var n = ho(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var a = new n.constructor(
          n.type,
          n
        );
        Fr = a, n.target.dispatchEvent(a), Fr = null;
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
    go = !1, ba !== null && Cr(ba) && (ba = null), Sa !== null && Cr(Sa) && (Sa = null), Ta !== null && Cr(Ta) && (Ta = null), Vi.forEach(ig), Gi.forEach(ig);
  }
  function Rr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, go || (go = !0, u.unstable_scheduleCallback(
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
            if (mo(a || n) === null)
              continue;
            break;
          }
          var i = nl(n);
          i !== null && (e.splice(t, 3), t -= 3, Jc(
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
            else if (mo(l) !== null) continue;
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
  function po(e) {
    this._internalRoot = e;
  }
  Ur.prototype.render = po.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(c(409));
    var n = t.current, a = $t();
    Pm(n, a, e, t, null, null);
  }, Ur.prototype.unmount = po.prototype.unmount = function() {
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
    return e = O(t), e = e !== null ? w(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var i0 = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: ue,
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
    ), e[tl] = t.current, Qs(e), new po(t);
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
    ), t.context = $m(null), n = t.current, a = $t(), a = Xr(a), l = ra(a), l.callback = null, ca(n, l, a), n = a, t.current.lanes = n, Wl(t, n), zn(t), e[tl] = t.current, Qs(e), new Ur(t);
  }, Qi.version = "19.3.0", Qi;
}
var yg;
function g0() {
  if (yg) return Eo.exports;
  yg = 1;
  function u() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(u);
      } catch (r) {
        console.error(r);
      }
  }
  return u(), Eo.exports = m0(), Eo.exports;
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
function Ir(u) {
  return u.nodeType === 9;
}
function Mo(u) {
  return Ir(u) ? u : u.ownerDocument;
}
function _0(u) {
  return Ir(u) ? u.body : u;
}
function Ig(u, r) {
  return r.isConnected && (Ir(u) ? r.ownerDocument === u : u.contains(r));
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
    const S = p.keys().next().value;
    S && p.delete(S);
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
  let h = d.currentNode, p = 0, S = 0;
  for (; h && S < v0; ) {
    if (h.nodeType === 1) {
      const R = h;
      S += 1, Vg(R) && (p += 1, o.length < y0 && o.push(R0(R, r)));
    }
    h = d.nextNode();
  }
  return { outline: o, visibleNodeCount: p, totalNodeCount: S, truncated: h !== null };
}
function xo(u, r, o = !1) {
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
  const o = xo(u, r, !0);
  return o && Jl(o) ? o : null;
}
function qr(u, r) {
  return typeof u == "number" && Number.isFinite(u) && Math.abs(u) <= r ? u : null;
}
function D0(u, r) {
  const o = r.scrollX === void 0 ? 0 : qr(r.scrollX, bg), c = r.scrollY === void 0 ? 0 : qr(r.scrollY, bg);
  if (o === null || c === null || o === 0 && c === 0) return { ok: !1, code: "UI_ACTION_SCROLL_INVALID", error: "scroll_element requires bounded non-zero scroll coordinates." };
  const d = r.elementId === void 0 ? Ir(u) ? u.scrollingElement ?? u.documentElement : u : $i(u, r.elementId);
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
    const S = Gg(p);
    if (S.ok === !1) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_OPERABLE", error: S.error, result: { completedCount: c, failedIndex: d } };
    c += 1;
  }
  return { ok: !0, result: { completedCount: c } };
}
function Ao(u, r, o, c, d) {
  const h = u.ownerDocument.defaultView?.MouseEvent ?? MouseEvent;
  u.dispatchEvent(new h(r, { bubbles: !0, cancelable: !0, clientX: o, clientY: c, buttons: d }));
}
function _o(u, r, o, c, d) {
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
  const p = o.getBoundingClientRect(), S = p.left + p.width / 2, R = p.top + p.height / 2, O = h?.getBoundingClientRect(), w = O ? O.left + O.width / 2 : S + c, v = O ? O.top + O.height / 2 : R + d, H = h ?? o;
  _o(o, "pointerdown", S, R, 1), Ao(o, "mousedown", S, R, 1);
  for (const U of [0.25, 0.5, 0.75]) {
    const N = S + (w - S) * U, B = R + (v - R) * U;
    _o(H, "pointermove", N, B, 1), Ao(H, "mousemove", N, B, 1);
  }
  return _o(H, "pointerup", w, v, 0), Ao(H, "mouseup", w, v, 0), { ok: !0, result: { dragged: !0, endX: w, endY: v } };
}
function H0(u, r) {
  const o = r.key === void 0 ? r.keys : [r.key];
  if (!Array.isArray(o) || o.length < 1 || o.length > qg || o.some((R) => typeof R != "string")) return { ok: !1, code: "UI_ACTION_KEY_INVALID", error: "press_key requires supported key names or single characters." };
  const c = o.map((R) => R.trim());
  if (c.some((R) => !(R.length === 1 || S0.has(R)))) return { ok: !1, code: "UI_ACTION_KEY_INVALID", error: "press_key requires supported key names or single characters." };
  const d = Mo(u).activeElement, h = r.elementId === void 0 ? d && Ig(u, d) && Jl(d) ? d : null : $i(u, r.elementId);
  if (!h) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No focused visible element is available for press_key." };
  r.elementId !== void 0 && h.focus();
  const p = h.ownerDocument.defaultView?.KeyboardEvent ?? KeyboardEvent, S = { ctrlKey: r.ctrlKey === !0, metaKey: r.metaKey === !0, altKey: r.altKey === !0, shiftKey: r.shiftKey === !0 };
  for (const R of c)
    h.dispatchEvent(new p("keydown", { bubbles: !0, cancelable: !0, key: R, ...S })), h.dispatchEvent(new p("keyup", { bubbles: !0, cancelable: !0, key: R, ...S }));
  return { ok: !0, result: { pressedKeys: c } };
}
function Yg(u, r, o = !1) {
  const c = Ql(r) && typeof r.action == "string" ? r.action : "";
  if (c === "describe_dom") return { ok: !0, result: x0(u, o) };
  if (c === "read_state") return { ok: !0, result: { state: {} } };
  if (c === "click_element") {
    const d = xo(u, Ql(r) ? r.elementId : null, o);
    if (!d) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No element matches this elementId." };
    const h = Gg(d);
    return h.ok === !0 ? { ok: !0, result: { clicked: !0 } } : { ok: !1, code: "UI_ACTION_ELEMENT_NOT_OPERABLE", error: h.error };
  }
  if (c === "type_text") {
    const d = xo(u, Ql(r) ? r.elementId : null, o);
    if (!d) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No element matches this elementId." };
    const h = U0(d, Ql(r) ? r.text : "", o);
    return h.ok === !0 ? { ok: !0, result: { typed: !0 } } : { ok: !1, code: "UI_ACTION_ELEMENT_NOT_OPERABLE", error: h.error };
  }
  return b0.has(c) && !o ? { ok: !1, code: "UI_ACTION_UNSUPPORTED_FOR_APP_CARD", error: `App cards do not support ${c}.` } : Ql(r) ? c === "scroll_element" ? D0(u, r) : c === "click_sequence" ? M0(u, r) : c === "drag_element" ? j0(u, r) : c === "press_key" ? H0(u, r) : { ok: !1, code: "UI_ACTION_UNKNOWN_ACTION", error: `Unknown UI action: ${c || "(missing)"}.` } : { ok: !1, code: "UI_ACTION_UNKNOWN_ACTION", error: `Unknown UI action: ${c || "(missing)"}.` };
}
var rt = "hana.plugin.ui", ct = 1, q0 = "X-Hana-App-Surface-Session", L0 = "appSurfaceSession", ki = {
  CONTEXT: "hana.input-panel.context",
  SUBMIT: "hana.input-panel.submit",
  PRESENTATION: "hana.input-panel.presentation"
}, Ag = 64 * 1024, Xg = {
  BAD_MESSAGE: "BAD_MESSAGE",
  UNSUPPORTED_VERSION: "UNSUPPORTED_VERSION"
}, ze = {
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
}, Uo = {
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
function No(u) {
  return !Tn(u) || !Ho(u, ["viewKind", "revision", "state"]) ? { ok: !1, error: "App view-state snapshot must carry exactly viewKind, revision and state." } : u.viewKind !== "compact" && u.viewKind !== "detached" ? { ok: !1, error: 'App view-state snapshot kind must be "compact" or "detached".' } : !Number.isSafeInteger(u.revision) || u.revision < 0 ? { ok: !1, error: "App view-state snapshot revision must be a non-negative safe integer." } : u.state === void 0 ? { ok: !1, error: "App view-state snapshot requires a state object or an explicit null." } : u.revision === 0 && u.state !== null ? { ok: !1, error: "App view-state revision 0 only carries a null state." } : { ok: !0, value: { viewKind: u.viewKind, revision: u.revision, state: u.state } };
}
function wo(u) {
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
  if (u.protocol !== rt)
    return Na("Plugin UI message protocol is missing or invalid.");
  if (u.version !== ct)
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
var nE = Object.values(ze);
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
  const p = /* @__PURE__ */ new Set(), S = /* @__PURE__ */ new Set();
  let R = 0;
  const O = () => {
    R += 1;
  }, w = (Z) => new Fi("unavailable", Z), v = () => new Fi(
    "identity-changed",
    "The current App card identity changed while this view write waited."
  ), H = () => new Fi(
    "token-stale",
    "The held view token is no longer the current document."
  ), U = (Z) => {
    p.delete(Z), u.targetWindow.clearTimeout(Z.timer), Z.signal && Z.onAbort && Z.signal.removeEventListener("abort", Z.onAbort);
  }, N = (Z, oe) => {
    U(Z), Z.reject(oe);
  }, B = (Z, oe) => {
    const te = o !== Z, le = h;
    o = Z, h = !0, (te || !le) && O();
    for (const we of [...p]) {
      if (U(we), we.identity !== void 0 && we.identity !== d) {
        we.reject(v());
        continue;
      }
      we.resolve(Z);
    }
    if (S.size === 0) return;
    const ge = { changed: te, resync: oe }, $e = R;
    for (const we of [...S]) {
      if (c || $e !== R) return;
      S.has(we) && we.listener(ge);
    }
  };
  return {
    handleHostMessage: (Z) => {
      const oe = Z.type === Zl.CHALLENGE, te = Z.type === Zl.BINDING;
      if (!oe && !te) return !1;
      if (c) return !0;
      if (oe && Z.kind === "event") {
        const le = Y0(Z.payload);
        return le.ok === !0 && (u.post({
          protocol: rt,
          version: ct,
          kind: "event",
          type: Zl.ACK,
          payload: { challengeId: le.value.challengeId, documentNonce: r }
        }), c || u.reannounceReady?.()), !0;
      }
      if (te && Z.kind === "event") {
        const le = G0(Z.payload);
        return le.ok === !0 && B(le.value.viewToken, le.value.resync === !0), !0;
      }
      return !0;
    },
    applySurfaceContext: (Z) => {
      if (c) return;
      if (Z === null) {
        if (!h) return;
        h = !1, O();
        return;
      }
      const oe = lE(Z);
      if (d !== oe) {
        if (d !== void 0) {
          for (const te of [...p]) N(te, v());
          o = null;
        }
        d = oe, O();
      }
    },
    currentToken() {
      return !c && h ? o : null;
    },
    waitForToken: (Z, oe) => c ? Promise.reject(w("The current App card view binding was released.")) : oe?.aborted ? Promise.reject(w("The current App card view wait was aborted.")) : o && h ? Promise.resolve(o) : new Promise((te, le) => {
      const ge = {
        resolve: te,
        reject: le,
        identity: d,
        timer: u.targetWindow.setTimeout(() => {
          U(ge), le(w("The host has not bound this App card view; the current view is unavailable here."));
        }, Z)
      };
      oe && (ge.signal = oe, ge.onAbort = () => N(ge, w("The current App card view wait was aborted.")), oe.addEventListener("abort", ge.onAbort)), p.add(ge);
    }),
    assertCurrentToken: (Z) => {
      if (c) throw w("The current App card view binding was released.");
      if (!h || !o)
        throw w("The current App card view is not writable here right now.");
      if (o !== Z) throw H();
    },
    onBinding(Z) {
      if (c) return () => {
      };
      const oe = { listener: Z };
      return S.add(oe), () => {
        S.delete(oe);
      };
    },
    dispose() {
      if (!c) {
        c = !0, o = null, h = !1;
        for (const Z of [...p])
          N(Z, w("The current App card view binding was released."));
        p.clear(), S.clear();
      }
    }
  };
}
function uE(u, r) {
  let o = null, c = 0;
  const d = (p) => {
    const S = u();
    S && r({
      protocol: rt,
      version: ct,
      kind: "event",
      type: Zl.SCROLL,
      payload: { scrolled: p, viewToken: S }
    });
  }, h = (p) => {
    const S = o;
    S && (o = null, S.detach(), p && S.scrolled && d(!1));
  };
  return {
    register(p) {
      if (!p || typeof p.scrollTop != "number" || typeof p.addEventListener != "function")
        throw new TypeError("hana.chrome.registerScrollSource requires an element.");
      h(!0);
      const S = ++c, R = p.ownerDocument?.defaultView, O = { generation: S, scrolled: p.scrollTop > 0, detach: () => {
      } }, w = () => {
        if (!o || o.generation !== S) return;
        const U = p.scrollTop > 0;
        U !== o.scrolled && (o.scrolled = U, d(U));
      };
      p.addEventListener("scroll", w, { passive: !0 });
      const v = R?.ResizeObserver, H = v ? new v(w) : null;
      return H?.observe(p), O.detach = () => {
        p.removeEventListener("scroll", w), H?.disconnect();
      }, o = O, O.scrolled && d(!0), () => {
        if (!o || o.generation !== S) return;
        const U = o;
        o = null, U.detach(), U.scrolled && d(!1);
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
  const h = new AbortController(), p = uE(() => c ? null : o.currentToken(), u.post), S = o.onBinding((j) => {
    c || (j.changed || j.resync) && p.flush();
  }), R = () => Object.assign(
    new Error("The App card business identity changed; this chrome write is stale."),
    { code: Fn.VIEW_STALE }
  ), O = () => Object.assign(
    new Error("The host has not bound this App card view; chrome is unavailable here."),
    { code: Fn.UNAVAILABLE }
  ), w = () => Object.assign(
    new Error("The App chrome view was released."),
    { code: Fn.UNAVAILABLE }
  ), v = (j) => j instanceof Fi ? j.reason === "unavailable" ? O() : R() : j, H = (j, ne) => {
    u.post({
      protocol: rt,
      version: ct,
      id: j.id,
      type: j.type,
      ...ne
    });
  }, U = (j) => {
    if (j.type !== Zl.ACTION) return !1;
    if (c) return !0;
    if (j.kind !== "request") return !1;
    const ne = Q0(j.payload);
    if (ne.ok === !1)
      return H(j, { kind: "error", error: { code: Fn.BAD_PAYLOAD, message: ne.error } }), !0;
    const F = ne.value, Q = {
      requestId: F.requestId,
      revision: F.revision,
      generation: F.generation,
      viewToken: F.viewToken
    }, Z = d;
    if (!Z)
      return H(j, {
        kind: "error",
        payload: Q,
        error: { code: Fn.ACTION_UNHANDLED, message: "This App has no chrome action handler." }
      }), !0;
    if (F.viewToken !== o.currentToken())
      return H(j, {
        kind: "error",
        payload: Q,
        error: { code: Fn.VIEW_STALE, message: "This chrome action belongs to a replaced view." }
      }), !0;
    const oe = () => !c && d === Z && F.viewToken === o.currentToken();
    return Promise.resolve().then(async () => {
      if (!oe()) {
        H(j, {
          kind: "error",
          payload: Q,
          error: { code: Fn.VIEW_STALE, message: "This chrome action belongs to a replaced view." }
        });
        return;
      }
      let te;
      try {
        te = await Z.fn(rE(F));
      } catch (le) {
        if (!oe()) return;
        H(j, {
          kind: "error",
          payload: Q,
          error: {
            code: Fn.ACTION_FAILED,
            message: le instanceof Error ? le.message : "The App chrome action handler failed."
          }
        });
        return;
      }
      oe() && H(j, {
        kind: "response",
        payload: {
          ...Q,
          status: te && te.status === "rejected" ? "rejected" : "handled",
          ...te && typeof te.message == "string" && te.message ? { message: te.message } : {}
        }
      });
    }), !0;
  }, N = () => p.dispose();
  u.targetWindow.addEventListener("pagehide", N);
  const B = (j) => {
    if (c)
      throw Object.assign(new Error(`The App chrome view was released; ${j} is unavailable.`), { code: Fn.UNAVAILABLE });
  };
  return {
    api: {
      set(j, ne) {
        const F = ne?.timeoutMs ?? r;
        return o.waitForToken(F, h.signal).then(
          (Q) => {
            B("hana.chrome.set");
            try {
              o.assertCurrentToken(Q);
            } catch (Z) {
              throw v(Z);
            }
            return u.request(Zl.SET, { description: j, viewToken: Q }, { timeoutMs: F });
          },
          (Q) => {
            throw c ? w() : v(Q);
          }
        );
      },
      onAction(j) {
        if (B("hana.chrome.onAction"), typeof j != "function") throw new TypeError("hana.chrome.onAction requires a handler.");
        const ne = { fn: j };
        return d = ne, () => {
          d === ne && (d = null);
        };
      },
      registerScrollSource(j) {
        return B("hana.chrome.registerScrollSource"), p.register(j);
      }
    },
    handleHostMessage: U,
    dispose() {
      c || (c = !0, h.abort(), u.targetWindow.removeEventListener("pagehide", N), S(), d = null, p.dispose());
    }
  };
}
var oE = 16, fE = 4096, dE = 24 * 1024, mt = class extends Error {
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
  const h = (p, S) => {
    if (d += 1, d > fE)
      throw new mt(o, "App view state contains too many values.");
    if (S > oE)
      throw new mt(o, "App view state is nested too deeply.");
    if (p === null) return null;
    const R = typeof p;
    if (R === "string" || R === "boolean") return p;
    if (R === "number") {
      if (!Number.isFinite(p))
        throw new mt(o, "App view state numbers must be finite.");
      return p;
    }
    if (R !== "object")
      throw new mt(o, "App view state must contain only JSON values.");
    const O = p;
    if (c.has(O))
      throw new mt(o, "App view state must not contain cycles.");
    const w = Object.getPrototypeOf(O);
    if (Array.isArray(O)) {
      if (w !== Array.prototype)
        throw new mt(o, "App view state must contain only plain arrays.");
      c.add(O);
      const H = O.length;
      for (const N of Reflect.ownKeys(O)) {
        if (typeof N != "string")
          throw new mt(o, "App view state must not contain symbol keys.");
        if (N === "length") {
          const ne = Object.getOwnPropertyDescriptor(O, "length");
          if (ne.enumerable || ne.get || ne.set)
            throw new mt(o, "App view state arrays must expose a plain length.");
          continue;
        }
        const B = pE(N);
        if (B === null || B >= H)
          throw new mt(o, "App view state arrays must not carry extra keys.");
        const j = Object.getOwnPropertyDescriptor(O, N);
        if (!j.enumerable || j.get || j.set)
          throw new mt(o, "App view state arrays must index plain values.");
      }
      const U = [];
      for (let N = 0; N < H; N++) {
        const B = Object.getOwnPropertyDescriptor(O, String(N));
        if (!B)
          throw new mt(o, "App view state must not contain sparse arrays.");
        U.push(h(B.value, S + 1));
      }
      return c.delete(O), U;
    }
    if (w !== Object.prototype && w !== null)
      throw new mt(o, "App view state must contain only plain objects.");
    c.add(O);
    const v = /* @__PURE__ */ Object.create(null);
    for (const H of Reflect.ownKeys(O)) {
      if (typeof H != "string")
        throw new mt(o, "App view state must not contain symbol keys.");
      const U = Object.getOwnPropertyDescriptor(O, H);
      if (!U.enumerable)
        throw new mt(o, "App view state must not contain non-enumerable fields.");
      if (U.get || U.set)
        throw new mt(o, "App view state must not contain accessors.");
      v[H] = h(U.value, S + 1);
    }
    return c.delete(O), v;
  };
  return h(u, 0);
}
function yE(u, r) {
  if (u === null) return null;
  if (!gE(u))
    throw new mt(
      Zg(r),
      "App view state must be a JSON object or null."
    );
  return vE(u, r);
}
function EE(u, r) {
  if (u === null) return null;
  const o = JSON.stringify(u);
  if (mE(o) > dE)
    throw new mt(
      "VIEW_STATE_TOO_LARGE",
      "App view state exceeds the size budget."
    );
  return JSON.parse(o);
}
function Do(u) {
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
    state: Do(u.state)
  };
}
function AE(u) {
  const r = u.requestTimeoutMs ?? SE;
  let o = !1, c = 0, d = null;
  const h = /* @__PURE__ */ new Map();
  let p = null, S = null, R = !1;
  const O = (L) => L instanceof Fi ? L.reason === "unavailable" ? Ee(ye.UNAVAILABLE, "The App card view is not writable here right now.") : Ee(ye.VIEW_STALE, "The App card view this operation was bound to is no longer current.") : L, w = (L, V) => {
    !L || L.terminated !== null || (L.terminated = V, L.lifetime.abort());
  }, v = (L) => {
    w(d, L), d = null;
    for (const V of h.values()) V.abort.abort();
    h.clear();
  }, H = (L) => {
    if (o || L === null) return;
    if (L.slot !== "card") {
      v("namespace-changed"), S = null, R = !0, p = null;
      return;
    }
    const V = JSON.stringify([L.appId, L.cardInstanceId, L.instanceKey ?? null]), J = L.viewState?.bindingId ?? null;
    (R && S !== V || J !== null && p !== null && J !== p) && v("namespace-changed"), S = V, R = !0, J !== null && (p = J);
  }, U = (L) => {
    if (!o && L.changed) {
      w(d, "document-changed"), d = null;
      for (const V of h.values())
        V.tokenCaptured && V.abort.abort();
    }
  }, N = u.subscribeContext(H), B = u.currentView.onBinding(U), j = (L) => u.currentView.currentToken() === L, ne = (L) => {
    try {
      u.currentView.assertCurrentToken(L);
    } catch (V) {
      throw O(V);
    }
  }, F = (L) => {
    const V = u.getContext();
    if (!V || V.slot !== "card")
      throw Ee(ye.UNAVAILABLE, "The App view-state namespace is not available on this surface.");
    const J = V.viewState;
    if (!J)
      throw Ee(ye.UNAVAILABLE, "The App view-state namespace is not available here right now.");
    if (J.bindingId !== L.bindingId || J.viewKind !== L.viewKind)
      throw Ee(ye.VIEW_STALE, "This view-state handle belongs to a namespace that is no longer current.");
    if (J.available !== !0)
      throw Ee(ye.UNAVAILABLE, "The App view-state namespace is temporarily unavailable.");
  }, Q = (L) => L === "document-changed" || L === "namespace-changed" ? Ee(ye.VIEW_STALE, "This view-state handle's view changed before the operation could be adopted.") : Ee(ye.RELEASED, "This view-state handle has been released."), Z = (L) => {
    if (o)
      throw Ee(ye.RELEASED, "The App view-state controller was released.");
    if (L.terminated !== null) throw Q(L.terminated);
    if (L.lifetime.signal.aborted)
      throw Ee(ye.RELEASED, "This view-state handle has been released.");
    if (d !== L)
      throw Ee(ye.VIEW_STALE, "This view-state handle is no longer the current registration.");
    return ne(L.viewToken), F(L), L.viewToken;
  }, oe = (L, V) => {
    if (o)
      throw Ee(ye.RELEASED, "The App view-state controller was released.");
    if (L.terminated !== null) throw Q(L.terminated);
    if (L.lifetime.signal.aborted)
      throw Ee(ye.RELEASED, "This view-state handle has been released.");
    if (!j(V))
      throw Ee(ye.VIEW_STALE, "The document changed before this view-state reply arrived.");
    const J = u.getContext(), k = J?.viewState;
    if (!J || J.slot !== "card" || !k || k.bindingId !== L.bindingId || k.viewKind !== L.viewKind)
      throw Ee(ye.VIEW_STALE, "The namespace changed before this view-state reply arrived.");
    if (k.available !== !0)
      throw Ee(ye.UNAVAILABLE, "The App view-state namespace paused before this reply arrived.");
  }, te = async (L, V, J, k) => {
    try {
      return await u.request(L, V, { timeoutMs: J });
    } catch (fe) {
      if (k !== null) {
        if (k.terminated !== null) throw Q(k.terminated);
        if (k.lifetime.signal.aborted)
          throw Ee(ye.RELEASED, "This view-state handle has been released.");
      }
      throw o ? Ee(ye.RELEASED, "The App view-state controller was released.") : fe;
    }
  }, le = (L, V) => {
    if (V.viewKind !== L)
      throw Ee(ye.BAD_RESPONSE, "The view-state reply carried a different view kind than the operation targeted.");
    let J;
    try {
      J = Do(V.state);
    } catch (k) {
      throw k instanceof mt ? Ee(ye.BAD_RESPONSE, "The view-state reply carried a state outside the shared JSON budget.") : k;
    }
    return { viewKind: L, revision: V.revision, state: J };
  }, ge = async (L, V) => {
    const J = V?.timeoutMs ?? r, k = Z(L), fe = await te(Ki.GET, {
      viewToken: k,
      bindingId: L.bindingId,
      registrationId: L.registrationId
    }, J, L);
    oe(L, k);
    const z = wo(fe);
    if (z.ok === !1)
      throw Ee(ye.BAD_RESPONSE, z.error);
    if (!Zi(z.value, {
      viewToken: k,
      bindingId: L.bindingId,
      registrationId: L.registrationId
    }))
      throw Ee(ye.VIEW_STALE, "This view-state reply answered a different view than the one this handle targets.");
    const P = No(z.value.snapshot);
    if (P.ok === !1)
      throw Ee(ye.BAD_RESPONSE, P.error);
    return le(L.viewKind, P.value);
  }, $e = async (L, V, J) => {
    const k = J?.timeoutMs ?? r, fe = _E(V), z = Do(V.state), P = Z(L), re = await te(Ki.SET, {
      viewToken: P,
      bindingId: L.bindingId,
      registrationId: L.registrationId,
      expectedRevision: fe,
      state: z
    }, k, L);
    oe(L, P);
    const W = wo(re);
    if (W.ok === !1)
      throw Ee(ye.BAD_RESPONSE, W.error);
    if (!Zi(W.value, {
      viewToken: P,
      bindingId: L.bindingId,
      registrationId: L.registrationId
    }))
      throw Ee(ye.VIEW_STALE, "This view-state reply answered a different view than the one this handle targets.");
    const y = No(W.value.snapshot);
    if (y.ok === !1)
      throw Ee(ye.BAD_RESPONSE, y.error);
    return le(L.viewKind, y.value);
  }, we = async (L, V, J) => {
    if (!j(L)) return;
    const k = u.getContext();
    if (!(!k || k.slot !== "card" || k.viewState?.bindingId !== V))
      try {
        const fe = await u.request(Ki.RELEASE, { viewToken: L, bindingId: V, registrationId: J }, { timeoutMs: r }), z = Ng(fe);
        (z.ok === !1 || !Zi(z.value, { viewToken: L, bindingId: V, registrationId: J })) && console.error("[hana] App view-state cleanup reply did not confirm the released registration.");
      } catch (fe) {
        console.error("[hana] failed to release a superseded App view-state registration:", fe instanceof Error ? fe.message : fe);
      }
  }, We = (L, V) => (L.releasePromise || (L.releasePromise = (async () => {
    const J = V?.timeoutMs ?? r;
    w(L, "released"), d === L && (d = null);
    const k = u.getContext(), fe = k?.viewState;
    if (!(j(L.viewToken) && k?.slot === "card" && !!fe && fe.bindingId === L.bindingId)) return { released: !1 };
    const P = await u.request(Ki.RELEASE, {
      viewToken: L.viewToken,
      bindingId: L.bindingId,
      registrationId: L.registrationId
    }, { timeoutMs: J }), re = Ng(P);
    if (re.ok === !1)
      throw Ee(ye.BAD_RESPONSE, re.error);
    if (!Zi(re.value, {
      viewToken: L.viewToken,
      bindingId: L.bindingId,
      registrationId: L.registrationId
    }))
      throw Ee(ye.VIEW_STALE, "This view-state release reply answered a different view than the one this handle targets.");
    const W = u.getContext();
    if (!j(L.viewToken) || W?.slot !== "card" || W.viewState?.bindingId !== L.bindingId || W.viewState?.viewKind !== L.viewKind)
      throw Ee(ye.VIEW_STALE, "The namespace changed before this view-state release was confirmed.");
    return { released: re.value.released };
  })()), L.releasePromise), Je = (L, V, J, k, fe) => {
    const z = new AbortController(), P = {
      viewToken: L,
      bindingId: V,
      viewKind: J,
      registrationId: k,
      lifetime: z,
      initial: fe,
      releasePromise: null,
      terminated: null
    };
    return P.handle = {
      get initial() {
        return TE(P.initial);
      },
      signal: z.signal,
      get: (re) => ge(P, re),
      set: (re, W) => $e(P, re, W),
      release: (re) => We(P, re)
    }, P;
  };
  return {
    api: { enable: async (L) => {
      const V = L?.timeoutMs ?? r;
      if (o) throw Ee(ye.RELEASED, "The App view-state controller was released.");
      const J = u.getContext();
      if (J && J.slot !== "card")
        throw Ee(ye.UNAVAILABLE, "View-state recovery is only available on an App card surface.");
      const k = J?.viewState?.bindingId ?? null, fe = ++c;
      v("superseded");
      const z = new AbortController(), P = { abort: z, tokenCaptured: !1 };
      h.set(fe, P);
      let re = null;
      try {
        let W;
        try {
          W = await u.currentView.waitForToken(V, z.signal);
        } catch (pe) {
          throw o ? Ee(ye.RELEASED, "The App view-state controller was released.") : z.signal.aborted ? Ee(ye.VIEW_STALE, "A newer view-state enable replaced this one before it was bound.") : O(pe);
        }
        if (P.tokenCaptured = !0, o) throw Ee(ye.RELEASED, "The App view-state controller was released.");
        if (fe !== c || z.signal.aborted)
          throw Ee(ye.VIEW_STALE, "A newer view-state enable replaced this one before it was bound.");
        ne(W);
        const y = u.getContext(), Y = y?.viewState;
        if (!y || y.slot !== "card" || !Y || Y.available !== !0)
          throw Ee(ye.UNAVAILABLE, "The App view-state namespace is not available here right now.");
        if (k !== null && k !== Y.bindingId)
          throw Ee(ye.VIEW_STALE, "The App view-state namespace changed before this enable was sent.");
        ne(W);
        const ie = await te(Ki.ENABLE, {
          viewToken: W,
          bindingId: Y.bindingId
        }, V, null), ee = wo(ie);
        if (ee.ok === !1)
          throw Ee(ye.BAD_RESPONSE, ee.error);
        if (!Zi(ee.value, { viewToken: W, bindingId: Y.bindingId }))
          throw Ee(ye.VIEW_STALE, "This view-state enable reply answered a different view than the one that was enabled.");
        if (re = { token: W, bindingId: Y.bindingId, registrationId: ee.value.registrationId }, o) throw Ee(ye.RELEASED, "The App view-state controller was released.");
        if (fe !== c || z.signal.aborted || !h.has(fe))
          throw Ee(ye.VIEW_STALE, "This view-state enable was voided before its reply arrived.");
        if (!j(W))
          throw Ee(ye.VIEW_STALE, "The document changed before this view-state enable reply arrived.");
        const Se = u.getContext();
        if (!Se || Se.slot !== "card" || Se.viewState?.bindingId !== Y.bindingId || Se.viewState?.viewKind !== Y.viewKind)
          throw Ee(ye.VIEW_STALE, "The namespace changed before this view-state enable reply arrived.");
        if (Se.viewState?.available !== !0)
          throw Ee(ye.UNAVAILABLE, "The App view-state namespace paused before this enable was confirmed.");
        const Te = No(ee.value.snapshot);
        if (Te.ok === !1)
          throw Ee(ye.BAD_RESPONSE, Te.error);
        const Re = le(Y.viewKind, Te.value), ue = Je(W, Y.bindingId, Y.viewKind, ee.value.registrationId, Re);
        return d = ue, re = null, ue.handle;
      } catch (W) {
        throw re !== null && await we(re.token, re.bindingId, re.registrationId), W;
      } finally {
        h.delete(fe);
      }
    } },
    dispose() {
      if (!o) {
        o = !0, c += 1, w(d, "disposed"), d = null;
        for (const L of h.values()) L.abort.abort();
        h.clear(), N(), B();
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
    let S;
    if (Array.isArray(d)) {
      const R = [];
      for (let O = 0; O < d.length; O++) {
        if (!Object.prototype.hasOwnProperty.call(d, O)) throw new Error("Input panel JSON must not contain sparse arrays.");
        R.push(o(d[O], h + 1));
      }
      S = R;
    } else {
      const R = /* @__PURE__ */ Object.create(null);
      for (const O of Object.keys(d)) R[O] = o(d[O], h + 1);
      S = R;
    }
    return r.delete(d), S;
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
  const h = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Set(), S = () => {
    for (const U of p) U(r ? jr(r) : null);
  }, R = () => {
    r = null, o++;
    for (const U of h.values())
      clearTimeout(U.timeout), U.reject(new Error("The input panel binding was replaced."));
    h.clear(), S();
  }, O = (U) => {
    for (const N of h.values())
      clearTimeout(N.timeout), N.reject(new Error(U));
    h.clear();
  }, w = (U, N, B) => u({
    protocol: rt,
    version: ct,
    id: U.id,
    kind: "error",
    type: U.type,
    error: { code: N, message: B }
  });
  function v(U) {
    if (U.kind === "event" && U.type === ki.CONTEXT) {
      if (U.payload === null) R();
      else {
        let Q;
        try {
          Q = $g(U.payload);
        } catch (oe) {
          return R(), console.warn("[hana] invalid input panel context:", oe), !0;
        }
        const Z = r?.panelId === Q.panelId && r.appId === Q.appId && r.sessionId === Q.sessionId && r.confirmId === Q.confirmId && r.status === Q.status && r.instanceId === Q.instanceId && r.revision === Q.revision;
        if (Z && r && Q.presentationRevision < r.presentationRevision) return !0;
        Z || O("The input panel binding was replaced."), r = Q, Z || o++, S();
      }
      return !0;
    }
    if ((U.kind === "response" || U.kind === "error") && U.type === ki.PRESENTATION && U.id) {
      const Q = h.get(U.id);
      if (!Q) return !1;
      if (h.delete(U.id), clearTimeout(Q.timeout), Q.generation !== o)
        Q.reject(new Error("The input panel binding was replaced."));
      else if (U.kind === "error") Q.reject(new Error(U.error?.message || "The input panel presentation could not be updated."));
      else
        try {
          const Z = wE(U.payload, r);
          r && Z.presentationRevision >= r.presentationRevision && (r = { ...r, ...Z }, S()), Q.resolve(Z);
        } catch (Z) {
          Q.reject(Z instanceof Error ? Z : new Error("The input panel presentation response is invalid."));
        }
      return !0;
    }
    if (U.kind !== "request" || U.type !== ki.SUBMIT) return !1;
    if (!U.id) return !0;
    const N = U.payload, B = r;
    if (!kl(N) || !B || B.status !== "pending" || !B.confirmId || N.panelId !== B.panelId || N.instanceId !== B.instanceId || N.revision !== B.revision)
      return w(U, "INPUT_PANEL_STALE", "This request does not match the active input panel question."), !0;
    const j = c;
    if (!j && B.requestedSchema !== null)
      return w(U, "INPUT_PANEL_SUBMIT_UNHANDLED", "Register hana.inputPanel.onSubmit to provide this question’s answer."), !0;
    const ne = o, F = {
      panelId: B.panelId,
      instanceId: B.instanceId,
      revision: B.revision
    };
    return Promise.resolve().then(() => j ? j(jr(B)) : null).then((Q) => {
      if (o !== ne) {
        w(U, "INPUT_PANEL_STALE", "The input panel changed before its answer was ready.");
        return;
      }
      u({
        protocol: rt,
        version: ct,
        id: U.id,
        kind: "response",
        type: U.type,
        payload: { ...F, value: Wi(Q) }
      });
    }).catch((Q) => {
      w(U, "INPUT_PANEL_SUBMIT_FAILED", Q instanceof Error ? Q.message : "The input panel could not provide an answer.");
    }), !0;
  }
  return { api: {
    getContext: () => r ? jr(r) : null,
    onContextChanged(U) {
      return p.add(U), U(r ? jr(r) : null), () => {
        p.delete(U);
      };
    },
    onSubmit(U) {
      if (typeof U != "function") throw new TypeError("hana.inputPanel.onSubmit requires a function.");
      return c = U, () => {
        c === U && (c = null);
      };
    },
    async setPresentation(U) {
      const N = r, B = NE(U);
      if (!N) throw new Error("The input panel is not ready.");
      const j = o, ne = `input-panel-presentation:${N.panelId}:${N.instanceId}:${Date.now().toString(36)}:${++d}`;
      return new Promise((F, Q) => {
        const Z = setTimeout(() => {
          h.delete(ne), Q(new Error("The input panel presentation request timed out."));
        }, 1e4);
        h.set(ne, { generation: j, resolve: F, reject: Q, timeout: Z });
        const oe = (te) => {
          const le = h.get(ne);
          le && (h.delete(ne), clearTimeout(le.timeout), le.reject(te instanceof Error ? te : new Error("The input panel presentation request could not be delivered.")));
        };
        try {
          u({
            protocol: rt,
            version: ct,
            id: ne,
            kind: "request",
            type: ki.PRESENTATION,
            payload: { panelId: N.panelId, instanceId: N.instanceId, revision: N.revision, presentationRevision: N.presentationRevision, presentation: B }
          }, oe);
        } catch (te) {
          oe(te);
        }
        if (o !== j) {
          const te = h.get(ne);
          te && (h.delete(ne), clearTimeout(te.timeout), te.reject(new Error("The input panel binding was replaced.")));
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
  ), h = typeof o.active == "boolean" ? o.active && c && d > 0 : c && d > 0, p = o.motion, S = p === "full" || p === "reduced" || p === "paused" ? p : h ? "full" : "paused", R = typeof o.slot == "string" ? o.slot : r.slot, O = typeof o.reason == "string" ? o.reason : r.reason;
  return {
    visible: c,
    active: h,
    maxFrameRate: h ? d : 0,
    motion: h ? S : "paused",
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
function Oo(u) {
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
  const h = Rg(r.embeddedSessionId), p = Rg(r.originSessionId), S = Kg(r.instanceKey);
  if (S === null) return null;
  const R = IE(r.viewState), O = typeof d == "string" && !!d.trim();
  if (S !== void 0 && !O) return null;
  const w = {};
  return h !== void 0 && (w.embeddedSessionId = h), p !== void 0 && (w.originSessionId = p), S !== void 0 && (w.instanceKey = S), R !== void 0 && (w.viewState = R), c === "settings" || c === "input-panel" ? d === null ? { appId: o, slot: c, cardInstanceId: null, ...w } : null : O ? { appId: o, slot: c, cardInstanceId: d.trim(), ...w } : c !== "card" || d !== null || typeof r.embeddedSessionId != "string" || !r.embeddedSessionId.trim() ? null : { appId: o, slot: c, cardInstanceId: null, ...w };
}
function Co(u) {
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
  const p = o ?? {}, S = new Headers(p.headers);
  return S.set(q0, d), c && S.set("X-Hana-Document-Binding", c), h(np(u, r), {
    ...p,
    headers: S
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
  const r = u.targetWindow ?? xE(), o = u.parentWindow ?? r.parent, c = jg(r, u.targetOrigin), d = u.requestTimeoutMs ?? 1e4, h = u.idFactory ?? RE, p = OE(W), S = iE({
    targetWindow: r,
    post: W,
    // A host that rebound its bridge to this same document gets a fresh
    // handshake by re-announcing the ready the page already sent.
    reannounceReady: () => {
      we && ie(We);
    }
  }), R = sE({
    request: me,
    post: W,
    targetWindow: r,
    currentView: S,
    requestTimeoutMs: d
  }), O = u.followHostTheme !== !1;
  let w = zE(r), v = ME(r), H = null, U = null;
  const N = /* @__PURE__ */ new Set(), B = /* @__PURE__ */ new Set(), j = /* @__PURE__ */ new Set(), ne = /* @__PURE__ */ new Set(), F = /* @__PURE__ */ new Set(), Q = /* @__PURE__ */ new Set(), Z = /* @__PURE__ */ new Set(), oe = /* @__PURE__ */ new Set(), te = /* @__PURE__ */ new Set();
  let le = null, ge = null, $e = null, we = !1, We, Je = !1, gt = !1, Rt = !1, L = Promise.resolve();
  const V = /* @__PURE__ */ new Map();
  let J = 1, k = null, fe = null, z = null, P = !1;
  function re(A) {
    if (!O || !A) return;
    const X = r.document;
    X && UE(X, A).catch((M) => {
      if (u.onThemeError) {
        u.onThemeError(M);
        return;
      }
      console.error("[hana] failed to follow host theme", M);
    });
  }
  function W(A, X) {
    if (u.messageTransport) {
      const M = u.messageTransport.postMessage(A);
      M && M.catch(X ?? ((G) => console.error("[hana] host message delivery failed", G)));
    } else o.postMessage(A, c);
  }
  function y(A) {
    if (u.messageTransport) return u.messageTransport.onMessage(A);
    const X = (M) => {
      Hg(M, o, c) && A(M.data);
    };
    return r.addEventListener("message", X), () => r.removeEventListener("message", X);
  }
  function Y(A, X) {
    const M = {
      protocol: rt,
      version: ct,
      kind: "event",
      type: A
    };
    X !== void 0 && (M.payload = X), W(M);
  }
  function ie(A) {
    Y("hana.ready", A);
  }
  function ee(A) {
    const X = A instanceof Oa ? A : new Oa({
      code: "HOST_ERROR",
      message: A instanceof Error ? A.message : "Active session subscription failed."
    });
    let M = !1;
    for (const G of te)
      if (G.onError) {
        M = !0;
        try {
          G.onError(X);
        } catch (se) {
          console.error("[hana] active session error callback failed", se);
        }
      }
    M || console.error("[hana] active session subscription failed", X);
  }
  function Se() {
    return te.size > 0 && !Rt && !gt;
  }
  function Te() {
    L = L.catch(() => {
    }).then(async () => {
      for (; Je !== Se(); ) {
        if (Se()) {
          try {
            if (await ue(), (await me(zr.SUBSCRIBE)).subscribed !== !0) {
              Je = !1, gt || ee(new Oa({
                code: "HOST_ERROR",
                message: "The host did not establish the active session subscription."
              }));
              return;
            }
            Je = !0;
          } catch (A) {
            Je = !1, ee(A);
            return;
          }
          continue;
        }
        try {
          await ue(), await me(zr.UNSUBSCRIBE);
        } catch (A) {
          ee(A);
        }
        Je = !1;
      }
    });
  }
  function Re(A) {
    const X = r.document?.readyState;
    return X !== "loading" && X !== "interactive" ? Promise.resolve() : new Promise((M, G) => {
      const se = () => {
        r.clearTimeout(pt), r.removeEventListener("load", Me), r.removeEventListener("pagehide", Ye);
      }, Me = () => {
        se(), M();
      }, Ye = () => {
        se(), G(new Oa({
          code: "SURFACE_UNAVAILABLE",
          message: "The App surface unloaded before interactive regions could be registered."
        }));
      }, pt = r.setTimeout(() => {
        se(), G(new Oa({
          code: "TIMEOUT",
          message: "The App document did not finish loading before interactive regions could be registered."
        }));
      }, A);
      r.addEventListener("load", Me), r.addEventListener("pagehide", Ye);
    });
  }
  function ue(A) {
    return Re(A ?? d).then(() => {
      ie(We);
    });
  }
  function pe(A) {
    const X = r.requestAnimationFrame?.bind(r), M = r.cancelAnimationFrame?.bind(r);
    if (X && M) {
      const se = X(A);
      return () => M(se);
    }
    const G = r.setTimeout(() => {
      const se = r.performance?.now?.() ?? Date.now();
      A(se);
    }, Math.max(1, Math.round(1e3 / Math.max(v.maxFrameRate, lu))));
    return () => r.clearTimeout(G);
  }
  function Wt() {
    k && (k(), k = null);
  }
  function $n() {
    k || V.size === 0 || !v.active || v.maxFrameRate <= 0 || (k = pe((A) => {
      if (k = null, !v.active || v.maxFrameRate <= 0) return;
      const X = 1e3 / v.maxFrameRate;
      if (fe !== null && A >= fe && A - fe < X) {
        $n();
        return;
      }
      fe = A;
      const M = Array.from(V.entries());
      for (const [G, se] of M)
        if (V.delete(G))
          try {
            se(A);
          } catch (Me) {
            r.setTimeout(() => {
              throw Me;
            }, 0);
          }
      $n();
    }));
  }
  function Mn(A) {
    if (!qE(v, A)) {
      v = A;
      for (const X of j) X({ ...v });
      if (!v.active || v.maxFrameRate <= 0) {
        Wt();
        return;
      }
      $n();
    }
  }
  function en(A) {
    if (typeof A == "object" && A !== null && A.protocol === void 0 && A.type === "visibility-changed") {
      const G = HE(
        A.payload,
        v
      );
      G && Mn(G);
      return;
    }
    const X = Ji(A);
    if (!X.ok) return;
    const M = X.value;
    if (!S.handleHostMessage(M) && !R.handleHostMessage(M)) {
      if (p.handleMessage(M)) {
        M.type === ki.CONTEXT && M.payload === null && we && ie(We);
        return;
      }
      if (M.kind === "request" && M.type === "hana.document.view-request") {
        const G = typeof M.payload == "object" && M.payload !== null ? M.payload : null, se = G && typeof G.requestId == "string" ? G.requestId : "", Me = G && typeof G.documentId == "string" ? G.documentId : "", Ye = G && typeof G.viewId == "string" ? G.viewId : "", pt = G?.revision, Mt = G && typeof G.method == "string" ? G.method.trim() : "";
        if (!se || !Me || !Ye || !Mt || Mt.length > 128 || !Number.isSafeInteger(pt) || Number(pt) < 0) {
          W({
            protocol: rt,
            version: ct,
            id: M.id,
            kind: "error",
            type: M.type,
            error: { code: "DOCUMENT_VIEW_REQUEST_INVALID", message: "Invalid document view request." }
          });
          return;
        }
        if (!$e) {
          W({
            protocol: rt,
            version: ct,
            id: M.id,
            kind: "error",
            type: M.type,
            error: { code: "DOCUMENT_VIEW_REQUEST_UNHANDLED", message: "The document view cannot handle this request." }
          });
          return;
        }
        const vt = G?.payload, xa = $e;
        Promise.resolve().then(() => xa({
          requestId: se,
          documentId: Me,
          viewId: Ye,
          revision: pt,
          method: Mt,
          ...Object.prototype.hasOwnProperty.call(G, "payload") ? { payload: vt } : {}
        })).then((hn) => {
          W({ protocol: rt, version: ct, id: M.id, kind: "response", type: M.type, payload: hn });
        }, (hn) => {
          W({
            protocol: rt,
            version: ct,
            id: M.id,
            kind: "error",
            type: M.type,
            error: { code: "DOCUMENT_VIEW_REQUEST_FAILED", message: hn instanceof Error ? hn.message : "Document view request failed." }
          });
        });
        return;
      }
      if (M.kind === "request" && M.type === "hana.document.request") {
        const G = M.payload, se = typeof G == "object" && G !== null ? G : null, Me = se && typeof se.requestId == "string" ? se.requestId : "", Ye = se?.kind, pt = se?.revision;
        if (!Me || !["save", "prepareClose", "revert", "undo", "redo"].includes(String(Ye)) || !Number.isSafeInteger(pt)) {
          W({
            protocol: rt,
            version: ct,
            id: M.id,
            kind: "error",
            type: M.type,
            error: { code: "DOCUMENT_REQUEST_INVALID", message: "Invalid document request." }
          });
          return;
        }
        if (!ge) {
          W({
            protocol: rt,
            version: ct,
            id: M.id,
            kind: "error",
            type: M.type,
            error: { code: "DOCUMENT_REQUEST_UNHANDLED", message: "The document editor cannot handle this request." }
          });
          return;
        }
        const Mt = {
          requestId: Me,
          kind: Ye,
          revision: pt
        };
        Promise.resolve(ge(Mt)).then((vt) => {
          W({ protocol: rt, version: ct, id: M.id, kind: "response", type: M.type, payload: vt });
        }, (vt) => {
          W({
            protocol: rt,
            version: ct,
            id: M.id,
            kind: "error",
            type: M.type,
            error: { code: "DOCUMENT_REQUEST_FAILED", message: vt instanceof Error ? vt.message : "Document request failed." }
          });
        });
        return;
      }
      if (M.kind === "request" && M.type === ze.UI_ACTION) {
        const G = r.document, se = G ? Yg(G, M.payload, QE(r, U)) : { ok: !1, code: "UI_ACTION_DOCUMENT_UNAVAILABLE", error: "No document is available." };
        se.ok === !0 ? W({
          protocol: rt,
          version: ct,
          id: M.id,
          kind: "response",
          type: ze.UI_ACTION,
          payload: se.result
        }) : W({
          protocol: rt,
          version: ct,
          id: M.id,
          kind: "error",
          type: ze.UI_ACTION,
          error: { code: se.code, message: se.error, ...se.result ? { details: se.result } : {} }
        });
        return;
      }
      if (M.kind === "event") {
        if (M.type === "hana.document.binding") {
          const G = M.payload, se = typeof G == "object" && G !== null ? G.access : null;
          le = typeof se?.bindingId == "string" && se.bindingId ? se.bindingId : null;
          return;
        }
        if (M.type === Xl.THEME_CHANGED) {
          if (typeof M.payload != "object" || M.payload === null) return;
          const G = M.payload, se = typeof G.theme == "string" ? G.theme : w.theme, Me = typeof G.theme == "string" && G.theme !== w.theme;
          w = {
            theme: se,
            cssUrl: typeof G.cssUrl == "string" ? G.cssUrl : w.cssUrl,
            appearance: G.appearance === "light" || G.appearance === "dark" ? G.appearance : Me ? void 0 : w.appearance,
            palettes: DE(G.palettes) ? G.palettes : Me ? void 0 : w.palettes
          };
          for (const Ye of N) Ye({ ...w });
          re(w.cssUrl);
          return;
        }
        if (M.type === Xl.SURFACE_ENVELOPE_CHANGED) {
          const G = LE(M.payload);
          if (!G) return;
          H = G;
          for (const se of B) se(Oo(H));
          return;
        }
        if (M.type === Xl.SURFACE_RUNTIME_CHANGED) {
          const G = jE(M.payload, v);
          G && Mn(G);
          return;
        }
        if (M.type === F0.CONTEXT) {
          const G = M.payload === null ? null : BE(M.payload);
          if (M.payload !== null && G === null) return;
          const se = G?.appId !== U?.appId || G?.slot !== U?.slot || G?.cardInstanceId !== U?.cardInstanceId || G?.instanceKey !== U?.instanceKey || G?.embeddedSessionId !== U?.embeddedSessionId || G?.originSessionId !== U?.originSessionId || G?.viewState?.bindingId !== U?.viewState?.bindingId || G?.viewState?.viewKind !== U?.viewState?.viewKind || G?.viewState?.available !== U?.viewState?.available;
          if (S.applySurfaceContext(G === null ? null : { appId: G.appId, cardInstanceId: G.cardInstanceId, instanceKey: G.instanceKey ?? null }), U = G, se)
            for (const Me of ne) Me(U ? Co(U) : null);
          return;
        }
        if (M.type === _g.ACTIVE_CHANGED) {
          if (gt) return;
          const G = VE(M.payload);
          if (!G) return;
          for (const se of te) se.callback(G);
          return;
        }
        if (M.type === _g.ERROR) {
          const G = GE(M.payload);
          if (!G) return;
          Je = !1, gt = !0, ee(G), Te();
          return;
        }
        if (M.type === Xl.STORAGE_CHANGED) {
          if (typeof M.payload != "object" || M.payload === null) return;
          const G = M.payload.keys, se = Array.isArray(G) ? G.filter((Me) => typeof Me == "string") : [];
          for (const Me of F) Me(se.slice());
          return;
        }
        if (M.type === I0.CHANGED) {
          if (typeof M.payload != "object" || M.payload === null) return;
          const G = M.payload, se = G.keys, Me = Array.isArray(se) ? se.filter((Ye) => typeof Ye == "string") : [];
          for (const Ye of Q)
            PE(Ye.scope, G.scope) && Ye.callback(Me.slice());
          return;
        }
        if (M.type === Xl.PANEL_EVENT) {
          if (typeof M.payload != "object" || M.payload === null) return;
          const G = M.payload, se = typeof G.sectionId == "string" ? G.sectionId : null, Me = G.kind;
          if (!se || Me !== "select" && Me !== "action" && Me !== "toggle") return;
          const Ye = {
            sectionId: se,
            kind: Me,
            ...typeof G.itemId == "string" ? { itemId: G.itemId } : {},
            ...typeof G.checked == "boolean" ? { checked: G.checked } : {}
          };
          for (const pt of Z) pt(Ye);
          return;
        }
        if (M.type === Xl.PANEL_REFRESH)
          for (const G of oe) G();
      }
    }
  }
  y(en), r.addEventListener("pagehide", (A) => {
    p.clear(), Rt = !0, Te(), A?.persisted === !1 && (P = !0, S.dispose(), z?.dispose(), R.dispose());
  }), r.addEventListener("pageshow", () => {
    Rt && (Rt = !1, Te());
  });
  function me(A, X, M = {}) {
    const G = h(), se = M.timeoutMs ?? d;
    return new Promise((Me, Ye) => {
      let pt = () => {
      };
      const Mt = () => {
        pt(), r.clearTimeout(xa);
      }, vt = (Ua) => {
        const Fl = Ji(Ua);
        if (!Fl.ok) return;
        const mn = Fl.value;
        mn.id !== G || mn.type !== A || (mn.kind === "response" && (Mt(), Me(mn.payload)), mn.kind === "error" && mn.error && (Mt(), Ye(new Oa(mn.error))));
      }, xa = r.setTimeout(() => {
        Mt(), Ye(new Oa({
          code: "TIMEOUT",
          message: `Plugin host request timed out: ${A}.`
        }));
      }, se), hn = {
        protocol: rt,
        version: ct,
        id: G,
        kind: "request",
        type: A
      };
      X !== void 0 && (hn.payload = X);
      try {
        pt = y(vt), W(hn, (Ua) => {
          Mt(), Ye(Ua);
        });
      } catch (Ua) {
        Mt(), Ye(Ua);
      }
    });
  }
  function Le(A) {
    return {
      get(X, M) {
        return me(Kl.GET, { scope: A, key: X }, M);
      },
      getAll(X) {
        return me(Kl.GET_ALL, { scope: A }, X);
      },
      set(X, M, G) {
        return me(Kl.SET, { scope: A, key: X, value: M }, G);
      },
      delete(X, M) {
        return me(Kl.DELETE, { scope: A, key: X }, M);
      },
      keys(X) {
        return me(Kl.KEYS, { scope: A }, X);
      },
      onChanged(X) {
        if (A.kind === "agent" && !A.agentId)
          throw new Error(
            "hana.storage.agent() with no agentId cannot subscribe with onChanged — a subscription outlives any single request, so pass an explicit agentId to subscribe to a stable scope."
          );
        const M = { scope: A, callback: X };
        return Q.add(M), () => {
          Q.delete(M);
        };
      }
    };
  }
  const Vt = {
    ready(A) {
      we = !0, We = A, ie(A);
    },
    inputPanel: p.api,
    assets: {
      url(A) {
        return kE(r, A);
      }
    },
    api: {
      url(A) {
        return np(r, A, !0);
      },
      fetch(A, X) {
        return FE(r, A, X, le);
      }
    },
    ui: {
      resize(A) {
        Y(ze.UI_RESIZE, A);
      }
    },
    theme: {
      getSnapshot() {
        return { ...w };
      },
      subscribe(A) {
        return N.add(A), A({ ...w }), () => {
          N.delete(A);
        };
      }
    },
    envelope: {
      getSnapshot() {
        return H ? Oo(H) : null;
      },
      subscribe(A) {
        return B.add(A), A(H ? Oo(H) : null), () => {
          B.delete(A);
        };
      }
    },
    lifecycle: {
      getSnapshot() {
        return { ...v };
      },
      subscribe(A) {
        return j.add(A), A({ ...v }), () => {
          j.delete(A);
        };
      }
    },
    cards: {
      open(A, X) {
        if (typeof A != "string" || !A.trim())
          return Promise.reject(new TypeError("hana.cards.open requires a non-empty declared card ID."));
        let M;
        if (X !== void 0) {
          if (typeof X != "object" || X === null || Array.isArray(X))
            return Promise.reject(new TypeError("hana.cards.open options must be an object."));
          if (Object.keys(X).some((se) => se !== "instanceKey"))
            return Promise.reject(new TypeError("hana.cards.open options accepts only instanceKey."));
          const G = Kg(X.instanceKey);
          if (G === null)
            return Promise.reject(new TypeError("hana.cards.open instanceKey must be a non-empty string of at most 256 code units without NUL."));
          M = G;
        }
        return me(Qg.OPEN, {
          cardId: A.trim(),
          ...M === void 0 ? {} : { instanceKey: M }
        });
      }
    },
    surface: {
      getContext() {
        return U ? Co(U) : null;
      },
      onContextChanged(A) {
        return ne.add(A), A(U ? Co(U) : null), () => {
          ne.delete(A);
        };
      },
      setInteractiveRegions(A, X) {
        const M = B0({ regions: A });
        return M.ok === !1 ? Promise.reject(new TypeError(M.error)) : we ? Re(X?.timeoutMs ?? d).then(() => (ie(We), me(Uo.SET_INTERACTIVE_REGIONS, M.value, X))) : me(Uo.SET_INTERACTIVE_REGIONS, M.value, X);
      }
    },
    sessions: {
      getActive(A) {
        return ue(A?.timeoutMs).then(() => me(zr.GET_ACTIVE, void 0, A));
      },
      focus(A, X) {
        return !A || typeof A.sessionId != "string" || !A.sessionId.trim() ? Promise.reject(new TypeError("hana.sessions.focus requires a non-empty sessionId.")) : ue(X?.timeoutMs).then(() => me(
          zr.FOCUS,
          { sessionId: A.sessionId.trim() },
          X
        ));
      },
      onActiveChanged(A, X) {
        const M = { callback: A, onError: X };
        return gt = !1, te.add(M), Te(), () => {
          te.delete(M) && Te();
        };
      }
    },
    performance: {
      requestAnimationFrame(A) {
        const X = J;
        return J += 1, V.set(X, A), $n(), X;
      },
      cancelAnimationFrame(A) {
        V.delete(A), V.size === 0 && Wt();
      }
    },
    host: {
      request: me
    },
    chrome: R.api,
    toast: {
      show(A, X) {
        return me(ze.TOAST_SHOW, A, X);
      }
    },
    external: {
      open(A, X) {
        return me(ze.EXTERNAL_OPEN, YE(A), X);
      }
    },
    clipboard: {
      writeText(A, X) {
        return me(
          ze.CLIPBOARD_WRITE_TEXT,
          XE(A),
          X
        );
      }
    },
    resources: {
      open(A, X) {
        return me(ze.RESOURCE_OPEN, A, X);
      },
      pick(A = {}, X) {
        return me(ze.RESOURCE_PICK, A, X);
      },
      saveFile(A, X) {
        return me(ze.RESOURCE_SAVE_FILE, A, X);
      },
      requestAccess(A, X) {
        return me(
          ze.RESOURCE_REQUEST_ACCESS,
          A,
          X
        );
      }
    },
    document: {
      getContext(A) {
        return me("hana.document.get-context", void 0, A);
      },
      read(A) {
        return me("hana.document.read", void 0, A);
      },
      reportStatus(A, X) {
        return me("hana.document.report-status", A, X);
      },
      open(A, X) {
        return me("hana.document.open", A, X);
      },
      rebind(A, X) {
        return me("hana.document.rebind", A, X);
      },
      openDrop(A, X) {
        if (A.defaultPrevented) return Promise.resolve(null);
        const M = A.dataTransfer?.getData("application/x-hana-file-drag") || "";
        if (M) return me("hana.document.open-drop", { dragId: M }, X);
        const G = Array.from(A.dataTransfer?.files || []);
        return G.length !== 1 ? Promise.resolve(null) : me("hana.document.open-drop", { file: G[0] }, X);
      },
      onRequest(A) {
        return ge = A, () => {
          ge === A && (ge = null);
        };
      },
      onViewRequest(A) {
        return $e = A, () => {
          $e === A && ($e = null);
        };
      }
    },
    state: {
      get(A, X) {
        const M = typeof A == "string" && A ? { key: A } : {};
        return me(ze.STATE_GET, M, X);
      },
      set(A, X, M) {
        const G = typeof A == "string" ? { key: A, value: X } : { state: A };
        return me(ze.STATE_SET, G, M);
      }
    },
    storage: {
      get(A, X) {
        return me(ze.STORAGE_GET, { key: A }, X);
      },
      getAll(A) {
        return me(ze.STORAGE_GET_ALL, {}, A);
      },
      set(A, X, M) {
        return me(ze.STORAGE_SET, { key: A, value: X }, M);
      },
      delete(A, X) {
        return me(ze.STORAGE_DELETE, { key: A }, X);
      },
      onChanged(A) {
        return F.add(A), () => {
          F.delete(A);
        };
      },
      global: Le({ kind: "global" }),
      agent(A) {
        return Le({ kind: "agent", agentId: A });
      }
    },
    emit(A, X, M, G) {
      const se = {
        name: A,
        userGesture: $E(r)
      };
      return arguments.length >= 2 && (se.payload = X), typeof M == "string" && M.trim() && (se.to = M.trim()), me(ze.EMIT, se, G);
    },
    track(A, X, M) {
      const G = { name: A };
      return arguments.length >= 2 && (G.payload = X), me(ze.TRACK, G, M);
    },
    panel: {
      set(A, X) {
        return me(ze.PANEL_SET, A, X);
      },
      onEvent(A) {
        return Z.add(A), () => {
          Z.delete(A);
        };
      },
      onRefresh(A) {
        return oe.add(A), () => {
          oe.delete(A);
        };
      }
    }
  };
  return Jg(Vt, () => P ? null : (z ??= AE({
    request: me,
    currentView: S,
    getContext: () => U,
    subscribeContext: (A) => (ne.add(A), () => {
      ne.delete(A);
    }),
    requestTimeoutMs: d
  }), z.api)), Vt;
}
var Ug = null;
function de() {
  return Ug ??= ap(), Ug;
}
var lp = {
  ready(u) {
    return de().ready(u);
  },
  inputPanel: {
    getContext() {
      return de().inputPanel.getContext();
    },
    onContextChanged(u) {
      return de().inputPanel.onContextChanged(u);
    },
    onSubmit(u) {
      return de().inputPanel.onSubmit(u);
    },
    setPresentation(u) {
      return de().inputPanel.setPresentation(u);
    }
  },
  assets: {
    url(u) {
      return de().assets.url(u);
    }
  },
  api: {
    url(u) {
      return de().api.url(u);
    },
    fetch(u, r) {
      return de().api.fetch(u, r);
    }
  },
  ui: {
    resize(u) {
      return de().ui.resize(u);
    }
  },
  theme: {
    getSnapshot() {
      return de().theme.getSnapshot();
    },
    subscribe(u) {
      return de().theme.subscribe(u);
    }
  },
  envelope: {
    getSnapshot() {
      return de().envelope.getSnapshot();
    },
    subscribe(u) {
      return de().envelope.subscribe(u);
    }
  },
  lifecycle: {
    getSnapshot() {
      return de().lifecycle.getSnapshot();
    },
    subscribe(u) {
      return de().lifecycle.subscribe(u);
    }
  },
  cards: {
    open(u, r) {
      return de().cards.open(u, r);
    }
  },
  surface: {
    getContext() {
      return de().surface.getContext();
    },
    onContextChanged(u) {
      return de().surface.onContextChanged(u);
    },
    setInteractiveRegions(u, r) {
      return de().surface.setInteractiveRegions(u, r);
    }
  },
  sessions: {
    getActive(u) {
      return de().sessions.getActive(u);
    },
    focus(u, r) {
      return de().sessions.focus(u, r);
    },
    onActiveChanged(u, r) {
      return de().sessions.onActiveChanged(u, r);
    }
  },
  performance: {
    requestAnimationFrame(u) {
      return de().performance.requestAnimationFrame(u);
    },
    cancelAnimationFrame(u) {
      return de().performance.cancelAnimationFrame(u);
    }
  },
  host: {
    request(u, r, o) {
      return de().host.request(u, r, o);
    }
  },
  chrome: {
    set(u, r) {
      return de().chrome.set(u, r);
    },
    onAction(u) {
      return de().chrome.onAction(u);
    },
    registerScrollSource(u) {
      return de().chrome.registerScrollSource(u);
    }
  },
  toast: {
    show(u, r) {
      return de().toast.show(u, r);
    }
  },
  external: {
    open(u, r) {
      return de().external.open(u, r);
    }
  },
  clipboard: {
    writeText(u, r) {
      return de().clipboard.writeText(u, r);
    }
  },
  resources: {
    open(u, r) {
      return de().resources.open(u, r);
    },
    pick(u, r) {
      return de().resources.pick(u, r);
    },
    saveFile(u, r) {
      return de().resources.saveFile(u, r);
    },
    requestAccess(u, r) {
      return de().resources.requestAccess(u, r);
    }
  },
  document: {
    getContext(u) {
      return de().document.getContext(u);
    },
    read(u) {
      return de().document.read(u);
    },
    reportStatus(u, r) {
      return de().document.reportStatus(u, r);
    },
    open(u, r) {
      return de().document.open(u, r);
    },
    rebind(u, r) {
      return de().document.rebind(u, r);
    },
    openDrop(u, r) {
      return de().document.openDrop(u, r);
    },
    onRequest(u) {
      return de().document.onRequest(u);
    },
    onViewRequest(u) {
      return de().document.onViewRequest(u);
    }
  },
  state: {
    get(u, r) {
      return de().state.get(u, r);
    },
    set(u, r, o) {
      return de().state.set(u, r, o);
    }
  },
  storage: {
    get(u, r) {
      return de().storage.get(u, r);
    },
    getAll(u) {
      return de().storage.getAll(u);
    },
    set(u, r, o) {
      return de().storage.set(u, r, o);
    },
    delete(u, r) {
      return de().storage.delete(u, r);
    },
    onChanged(u) {
      return de().storage.onChanged(u);
    },
    get global() {
      return de().storage.global;
    },
    agent(u) {
      return de().storage.agent(u);
    }
  },
  emit(u, r, o, c) {
    return de().emit(u, r, o, c);
  },
  track(u, r, o) {
    return de().track(u, r, o);
  },
  panel: {
    set(u, r) {
      return de().panel.set(u, r);
    },
    onEvent(u) {
      return de().panel.onEvent(u);
    },
    onRefresh(u) {
      return de().panel.onRefresh(u);
    }
  }
};
Jg(lp, () => Fg(de()));
function Br(u) {
  return u.hanaAppWindow;
}
function fn(u) {
  const r = Br(u);
  if (!r) throw Object.assign(new Error("This App surface is not an App-owned native window."), { code: "APP_WINDOW_UNAVAILABLE" });
  return r;
}
function WE(u) {
  return (typeof window < "u" ? Br(u()) : void 0)?.onDocumentAction?.((o) => {
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
  ze.TOAST_SHOW,
  ze.EXTERNAL_OPEN,
  ze.CLIPBOARD_WRITE_TEXT,
  ze.RESOURCE_OPEN,
  ze.RESOURCE_PICK,
  ze.RESOURCE_SAVE_FILE,
  ze.RESOURCE_REQUEST_ACCESS,
  ze.STATE_GET,
  ze.STATE_SET,
  ze.PANEL_SET,
  ze.EMIT,
  ze.TRACK,
  ...Object.values(Kl),
  ...Object.values(Qg),
  Uo.SET_INTERACTIVE_REGIONS,
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
          const S = p.value.payload;
          if (!S || typeof S != "object" || Array.isArray(S)) return;
          const R = S;
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
        const S = p.appId, R = (U) => {
          const N = Ji(U);
          if (!N.ok || N.value.kind !== "event" || N.value.type !== "hana.app.event") return;
          const B = N.value.payload;
          B?.source !== `app:${S}` || B.type !== c || !B.payload || typeof B.payload != "object" || Array.isArray(B.payload) || d(B.payload);
        }, O = o.messageTransport ?? Br(h);
        if (O) return O.onMessage(R);
        const w = o.parentWindow ?? h.parent, v = jg(h, o.targetOrigin), H = (U) => {
          Hg(U, w, v) && R(U.data);
        };
        return h.addEventListener("message", H), () => h.removeEventListener("message", H);
      }
    },
    instances: {
      onChanged(c) {
        return fn(r()).onMessage((d) => {
          if (!d || typeof d != "object") return;
          const h = d;
          if (h.protocol !== rt || h.version !== ct || h.kind !== "event" || h.type !== "hana.app-instance.changed") return;
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
var ib, wt = lb(() => {
  const u = ip();
  tb(u);
  const r = Br(u);
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
  const S = typeof r == "string" ? r : void 0, R = cb(u, r);
  return m.jsx("div", { ...p, "data-testid": h, className: dn("hana-plugin-theme", o), "data-hana-theme-mode": u, "data-hana-theme": u === "hana" ? S : void 0, style: { ...R, ...c }, children: d });
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
const Ze = K.forwardRef(function({ variant: r = "secondary", size: o = "md", loading: c = !1, iconLeft: d, iconRight: h, disabled: p, className: S, children: R, type: O = "button", ...w }, v) {
  return m.jsxs("button", { ...w, ref: v, type: O, disabled: p || c, className: dn("hana-plugin-button", `hana-plugin-button-${r}`, `hana-plugin-button-${o}`, c && "hana-plugin-button-loading", S), children: [c ? m.jsx("span", { className: "hana-plugin-spinner", "aria-hidden": !0 }) : d, R && m.jsx("span", { className: "hana-plugin-button-label", children: R }), !c && h] });
});
K.forwardRef(function({ label: r, size: o = "md", variant: c = "ghost", className: d, children: h, type: p = "button", ...S }, R) {
  return m.jsx("button", { ...S, ref: R, type: p, "aria-label": r, title: S.title || r, className: dn("hana-plugin-icon-button", `hana-plugin-icon-button-${o}`, `hana-plugin-icon-button-${c}`, d), children: h });
});
const Ct = K.forwardRef(function({ label: r, hint: o, error: c, id: d, className: h, inputClassName: p, ...S }, R) {
  const O = K.useId(), w = d || O;
  return m.jsx(Lo, { label: r, hint: o, error: c, htmlFor: w, className: h, children: m.jsx("input", { ...S, ref: R, id: w, "aria-invalid": !!c, className: dn("hana-plugin-input", p) }) });
});
K.forwardRef(function({ label: r, hint: o, error: c, id: d, className: h, textareaClassName: p, rows: S = 4, ...R }, O) {
  const w = K.useId(), v = d || w;
  return m.jsx(Lo, { label: r, hint: o, error: c, htmlFor: v, className: h, children: m.jsx("textarea", { ...R, ref: O, id: v, rows: S, "aria-invalid": !!c, className: dn("hana-plugin-textarea", p) }) });
});
K.forwardRef(function({ checked: r, onChange: o, label: c, disabled: d, className: h, onClick: p, type: S = "button", ...R }, O) {
  const w = typeof c == "string" ? c : R["aria-label"];
  return m.jsxs("span", { className: dn("hana-plugin-switch-wrap", h), children: [m.jsx("button", { ...R, ref: O, type: S, role: "switch", "aria-checked": r, "aria-label": w, disabled: d, className: dn("hana-plugin-switch", r && "hana-plugin-switch-on"), onClick: (v) => {
    p?.(v), !v.defaultPrevented && !d && o?.(!r);
  }, children: m.jsx("span", { className: "hana-plugin-switch-thumb", "aria-hidden": !0 }) }), c && m.jsx("span", { className: "hana-plugin-switch-label", children: c })] });
});
function zg({ options: u, value: r, onChange: o, label: c, hint: d, error: h, placeholder: p = "Select", disabled: S = !1, className: R }) {
  const [O, w] = K.useState(!1), v = u.find((B) => B.value === r), H = v?.label || p, U = typeof c == "string" ? c : void 0, N = [U, H].filter(Boolean).join(" ");
  return m.jsx(Lo, { label: c, hint: d, error: h, className: R, children: m.jsxs("div", { className: "hana-plugin-select", children: [m.jsxs("button", { type: "button", "aria-haspopup": "listbox", "aria-expanded": O, "aria-label": N || void 0, disabled: S, className: dn("hana-plugin-select-trigger", !v && "hana-plugin-select-placeholder"), onClick: () => w((B) => !B), children: [m.jsx("span", { className: "hana-plugin-select-value", children: H }), m.jsx("span", { className: "hana-plugin-select-arrow", "aria-hidden": !0, children: "▾" })] }), O && m.jsx("div", { className: "hana-plugin-select-popover", role: "listbox", "aria-label": U, children: u.map((B) => m.jsx("button", { type: "button", role: "option", "aria-selected": B.value === r, disabled: B.disabled, className: dn("hana-plugin-select-option", B.value === r && "hana-plugin-select-option-selected"), onClick: () => {
    B.disabled || (o(B.value), w(!1));
  }, children: B.label }, B.value)) })] }) });
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
async function ke(u) {
  const r = await wt.api.fetch(up(u));
  return rp(r);
}
async function Nt(u, r) {
  const o = await wt.api.fetch(up(u), {
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
    const d = await ke(u).catch(() => null);
    if (d && d.running === !1 && (!r.kind || d.kind === r.kind) && d.lastResult) return d.lastResult;
  }
  return { ok: !1, stage: "timeout", message: `等待超时（${Math.round(o / 6e4)} 分钟），任务可能仍在运行；稍后刷新查看结果。` };
}
async function Lr(u = 480 * 1e3) {
  return eu("/api/import/status", { timeoutMs: u });
}
function cp(u, r) {
  const o = /^#\s+(.+?)（([^（）]+),\s*(\d{4}[^)）]*)）$/.exec(String(u || "").trim());
  return { title: o ? o[1] : r, meta: o ? `${o[2].trim()} · ${o[3]}` : "" };
}
async function sp(u) {
  const r = await ke(Sn(`篇目/${u}`)).catch(() => null);
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
      const S = p.split("|").slice(1, -1).map((O) => O.trim());
      c += 2;
      const R = [];
      for (; c < r.length && /^\|/.test(r[c]); )
        R.push(r[c].split("|").slice(1, -1).map((O) => O.trim())), c++;
      o.push("<table><thead><tr>" + S.map((O) => `<th>${wa(O)}</th>`).join("") + "</tr></thead><tbody>");
      for (const O of R) o.push("<tr>" + O.map((w) => `<td>${wa(w)}</td>`).join("") + "</tr>");
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
  const r = await ke(`/api/list?dir=${encodeURIComponent(u)}`);
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
    ke(Sn("标签库.md")),
    ke("/api/import/failures").catch(() => ({ ok: !1, items: [] }))
  ]), d = o.ok ? Io(o.content) : [];
  return {
    papers: u.length,
    models: r.length,
    queuePending: d.filter((h) => !h.decision).length,
    failures: (c.items || []).length
  };
}
function gb() {
  const u = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), [r, o] = K.useState({ id: "", title: "", authors: "", year: "", venue: "", textType: "", score: "9", rationale: "", date: u, recordedBy: "" }), [c, d] = K.useState(null), h = (S, R) => o((O) => ({ ...O, [S]: R }));
  async function p() {
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
    }, R = await Nt("/api/tool/commit_anchor", { anchor: S });
    d(R), R.ok && wt.toast.show({ message: "评分已落盘", type: "success" });
  }
  return /* @__PURE__ */ m.jsxs("div", { className: "form", children: [
    /* @__PURE__ */ m.jsx("p", { className: "hint", children: "你自己的总分和理由是整条评分链的起点：只增不改，理由至少 10 字，后续归纳评分指引全靠它。" }),
    /* @__PURE__ */ m.jsxs("div", { className: "grid2", children: [
      /* @__PURE__ */ m.jsx(Ct, { label: "篇目 id（slug-年）", value: r.id, onChange: (S) => h("id", S.currentTarget.value), placeholder: "sample-2020" }),
      /* @__PURE__ */ m.jsx(Ct, { label: "文本类型（你判）", value: r.textType, onChange: (S) => h("textType", S.currentTarget.value), placeholder: "论证型 / 阐释型…" }),
      /* @__PURE__ */ m.jsx(Ct, { label: "标题", value: r.title, onChange: (S) => h("title", S.currentTarget.value) }),
      /* @__PURE__ */ m.jsx(Ct, { label: "作者", value: r.authors, onChange: (S) => h("authors", S.currentTarget.value) }),
      /* @__PURE__ */ m.jsx(Ct, { label: "年份", value: r.year, onChange: (S) => h("year", S.currentTarget.value) }),
      /* @__PURE__ */ m.jsx(Ct, { label: "出处（可空）", value: r.venue, onChange: (S) => h("venue", S.currentTarget.value) }),
      /* @__PURE__ */ m.jsx(Ct, { label: "总分 1-10", value: r.score, onChange: (S) => h("score", S.currentTarget.value) }),
      /* @__PURE__ */ m.jsx(Ct, { label: "日期", value: r.date, onChange: (S) => h("date", S.currentTarget.value) })
    ] }),
    /* @__PURE__ */ m.jsx(Ct, { label: "理由（≥10 字）", value: r.rationale, onChange: (S) => h("rationale", S.currentTarget.value) }),
    /* @__PURE__ */ m.jsx(Ct, { label: "录入者", value: r.recordedBy, onChange: (S) => h("recordedBy", S.currentTarget.value) }),
    /* @__PURE__ */ m.jsx(Ze, { variant: "primary", onClick: p, children: "提交评分" }),
    c && /* @__PURE__ */ m.jsx("pre", { className: c.ok ? "ok" : "err", children: c.ok ? `已写入：${c.file || "(dry run)"}` : JSON.stringify(c, null, 2) })
  ] });
}
function pb({ tick: u }) {
  const [r, o] = K.useState([]), [c, d] = K.useState({}), [h, p] = K.useState(""), [S, R] = K.useState(!1);
  K.useEffect(() => {
    let N = !1;
    return (async () => {
      const B = await ke("/api/model/status").catch(() => null);
      if (N || !B || !B.running || B.kind !== "propose") return;
      R(!0), p("模型提议进行中（接管切页前的任务）…");
      const j = await eu("/api/model/status", { kind: "propose", timeoutMs: 180 * 1e3 });
      N || (p(j.ok ? `已入队 ${j.queued?.length || 0} 对` : j.message || "未产出建议"), j.ok && await O(), R(!1));
    })(), () => {
      N = !0;
    };
  }, []);
  const O = K.useCallback(async () => {
    const N = await ke(Sn("标签库.md"));
    o(N.ok ? Io(N.content) : []);
  }, []);
  K.useEffect(() => {
    O();
  }, [O, u]);
  async function w(N, B, j) {
    const ne = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), F = c[N] || `裁决执行：${N}`, Q = await Nt("/api/tool/apply_tag_merge", { mergedLabel: B, target: j, date: ne, evidence: F });
    p(Q.ok ? `已执行：${B} → ${Q.now}` : Q.message || JSON.stringify(Q)), Q.ok && await O();
  }
  async function v() {
    R(!0), p("");
    try {
      const N = await Nt("/api/model/propose-merges", {});
      if (!N.started) {
        p(N.message || "发起失败"), R(!1);
        return;
      }
      const B = await eu("/api/model/status", { kind: "propose", timeoutMs: 180 * 1e3 });
      if (B.stage === "timeout") {
        p(B.message), R(!1);
        return;
      }
      p(B.ok ? `已入队 ${B.queued.length} 对：${B.queued.join("；")}` : B.message || "未产出建议"), B.ok && await O();
    } catch (N) {
      p(`请求失败：${String(N?.message || N)}`);
    }
    R(!1);
  }
  async function H() {
    const N = await Nt("/api/tool/suggest_tag_merges", {});
    p(N.ok ? N.written ? `共现入队 ${N.written} 对` : "共现提示无新候选（语义相近的对请用模型提议）" : N.message || JSON.stringify(N)), N.ok && await O();
  }
  const U = r.filter((N) => !N.decision);
  return /* @__PURE__ */ m.jsxs("div", { children: [
    /* @__PURE__ */ m.jsxs("p", { className: "hint", children: [
      U.length > 0 && /* @__PURE__ */ m.jsxs("b", { children: [
        U.length,
        " 对待裁决　"
      ] }),
      "相近标签会进到这里，由你决定合并方向；裁决后库内归一，原始记录不动。"
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ m.jsx(Ze, { variant: "primary", disabled: S, onClick: () => {
        v();
      }, children: S ? "提议中…" : "模型提议疑似对" }),
      /* @__PURE__ */ m.jsx(Ze, { disabled: S, onClick: () => {
        H();
      }, children: "跑共现提示" }),
      /* @__PURE__ */ m.jsx("span", { className: "hint", children: "提议与共现只负责入队；合并方向由你在下方卡片上裁决。" })
    ] }),
    r.length === 0 && /* @__PURE__ */ m.jsx(iu, { title: "暂无待裁决标签", description: "篇目积累出相近标签后，候选会自动出现在这里。" }),
    r.map((N) => /* @__PURE__ */ m.jsx(Ca, { title: N.pair, description: `${N.date} 进队 · ${N.evidence}`, children: N.decision ? /* @__PURE__ */ m.jsxs("p", { className: "decided", children: [
      "已裁决：",
      N.decision
    ] }) : /* @__PURE__ */ m.jsxs("div", { className: "queue-actions", children: [
      [N.pair.split(" vs ")[0], N.pair.split(" vs ")[1]].filter(Boolean).map((B, j, ne) => /* @__PURE__ */ m.jsx("div", { className: "queue-op", children: /* @__PURE__ */ m.jsxs(Ze, { onClick: () => w(N.pair, B, ne[1 - j]), children: [
        "「",
        B,
        "」并入「",
        ne[1 - j],
        "」"
      ] }) }, B)),
      /* @__PURE__ */ m.jsx(Ct, { label: "依据（可空）", value: c[N.pair] || "", onChange: (B) => d((j) => ({ ...j, [N.pair]: B.currentTarget.value })) })
    ] }) }, N.pair)),
    U.length > 0 && null,
    h && /* @__PURE__ */ m.jsx("p", { className: h.startsWith("已") ? "ok" : "err", children: h })
  ] });
}
function op({ initial: u, savePath: r, onSaved: o }) {
  const [c, d] = K.useState(u), [h, p] = K.useState(""), [S, R] = K.useState(!1);
  async function O() {
    if (!c.startsWith("#")) {
      p("首行须为 # 标题（防存入半截文件）");
      return;
    }
    let w = c;
    if (w !== u) {
      const v = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), H = /^> 人工修订：(.+)$/m;
      w = H.test(w) ? w.replace(H, `> 人工修订：${v}`) : w.trimEnd() + `

> 人工修订：${v}
`;
    }
    R(!0), p("");
    try {
      const v = await Nt("/api/library/write-file", { path: r, content: w });
      v && v.ok ? (wt.toast.show({ message: "已保存", type: "success" }), o(w)) : p(v?.message || "保存失败");
    } catch (v) {
      p(String(v?.message || v));
    }
    R(!1);
  }
  return /* @__PURE__ */ m.jsxs("div", { className: "editor", children: [
    h && /* @__PURE__ */ m.jsx("p", { className: "err", children: h }),
    /* @__PURE__ */ m.jsx("textarea", { className: "editbox", value: c, onChange: (w) => d(w.currentTarget.value), rows: 22, spellCheck: !1 }),
    /* @__PURE__ */ m.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ m.jsx(Ze, { variant: "primary", disabled: S, onClick: () => {
        O();
      }, children: "保存" }),
      /* @__PURE__ */ m.jsx("span", { className: "hint", children: "首行须为 # 标题；改动会在尾部留一行修订日期（可自行删除）。改标签：编辑「- 标签：」行。" })
    ] })
  ] });
}
function vb({ tick: u }) {
  const [r, o] = K.useState([]), [c, d] = K.useState(""), [h, p] = K.useState(""), [S, R] = K.useState(!1), O = K.useCallback(async () => {
    const w = await Ra("篇目"), v = await Promise.all(
      w.map(async (H) => {
        const { title: U, meta: N } = cp(await sp(H), H.replace(/\.md$/, ""));
        return { id: H, title: U, meta: N || H.replace(/\.md$/, "") };
      })
    );
    o(v);
  }, []);
  return K.useEffect(() => {
    O();
  }, [O, u]), K.useEffect(() => {
    if (!c) {
      p("");
      return;
    }
    ke(Sn(`篇目/${c}`)).then((w) => p(w.ok ? w.content : w.message || "读取失败"));
  }, [c]), r.length ? /* @__PURE__ */ m.jsxs("div", { className: "split", children: [
    /* @__PURE__ */ m.jsx("div", { className: "side", children: /* @__PURE__ */ m.jsx("div", { className: "entrylist", children: r.map((w) => /* @__PURE__ */ m.jsxs(
      "button",
      {
        className: c === w.id ? "entryitem on" : "entryitem",
        onClick: () => d(w.id),
        children: [
          /* @__PURE__ */ m.jsx("span", { className: "entrytitle", children: w.title }),
          /* @__PURE__ */ m.jsx("span", { className: "entrymeta", children: w.meta })
        ]
      },
      w.id
    )) }) }),
    /* @__PURE__ */ m.jsxs("div", { className: "main", children: [
      c && /* @__PURE__ */ m.jsx("div", { className: "import-row", children: /* @__PURE__ */ m.jsx(Ze, { onClick: () => R((w) => !w), children: S ? "返回预览" : "编辑本篇" }) }),
      c ? S ? /* @__PURE__ */ m.jsx(
        op,
        {
          initial: h,
          savePath: `篇目/${c}`,
          onSaved: (w) => {
            p(w), R(!1), O();
          }
        }
      ) : /* @__PURE__ */ m.jsx(tu, { md: h }) : /* @__PURE__ */ m.jsx("p", { className: "hint", children: "左侧选篇查看（每条登记都带位置与原文引文）。" })
    ] })
  ] }) : /* @__PURE__ */ m.jsx(iu, { title: "还没有篇目", description: "导入文献或在对话里拆解后，篇目会出现在这里。" });
}
function yb({ tick: u }) {
  const [r, o] = K.useState([]), [c, d] = K.useState(""), [h, p] = K.useState(""), [S, R] = K.useState(""), [O, w] = K.useState(""), [v, H] = K.useState({});
  if (K.useEffect(() => {
    Ra("篇目").then(async (N) => {
      o(N), N[0] && d(N[0]), N[1] && p(N[1]);
      const B = await Promise.all(N.map(async (j) => {
        const { title: ne, meta: F } = cp(await sp(j), j.replace(/\.md$/, ""));
        return [j, F ? `${ne} · ${F}` : ne];
      }));
      H(Object.fromEntries(B));
    });
  }, [u]), K.useEffect(() => {
    c && ke(Sn(`篇目/${c}`)).then((N) => R(N.ok ? N.content : ""));
  }, [c]), K.useEffect(() => {
    h && ke(Sn(`篇目/${h}`)).then((N) => w(N.ok ? N.content : ""));
  }, [h]), r.length < 2) return /* @__PURE__ */ m.jsx(iu, { title: "至少两篇可对比", description: "先积累两篇以上篇目。" });
  const U = r.map((N) => ({ value: N, label: v[N] || N.replace(/\.md$/, "") }));
  return /* @__PURE__ */ m.jsxs("div", { children: [
    /* @__PURE__ */ m.jsxs("div", { className: "grid2", children: [
      /* @__PURE__ */ m.jsx(zg, { value: c, onChange: d, options: U }),
      /* @__PURE__ */ m.jsx(zg, { value: h, onChange: p, options: U })
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: "compare", children: [
      /* @__PURE__ */ m.jsx("div", { className: "col", children: /* @__PURE__ */ m.jsx(tu, { md: S }) }),
      /* @__PURE__ */ m.jsx("div", { className: "col", children: /* @__PURE__ */ m.jsx(tu, { md: O }) })
    ] })
  ] });
}
function Eb({ tick: u }) {
  const [r, o] = K.useState(null);
  if (K.useEffect(() => {
    (async () => {
      const [d, h, p, S, R, O] = await Promise.all([
        Ra("篇目"),
        Ra("锚点样本"),
        Ra("写作模型"),
        ke(Sn("标签库.md")),
        ke(Sn("闭包映射表.md")),
        ke(Sn("类型库.md"))
      ]), w = S.ok ? Ro(S.content, "标签") : [], v = S.ok ? Io(S.content) : [], H = R.ok ? Ro(R.content, "from") : [], U = O.ok ? Ro(O.content, "类型") : [];
      o({
        papers: d.length,
        anchors: h.length,
        models: p.length,
        tags: w,
        queuePending: v.filter((N) => !N.decision).length,
        mapRows: H,
        types: U
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
function Ro(u, r) {
  const o = String(u || "").split(/\r?\n/), c = [];
  let d = !1;
  for (const h of o)
    if (h.startsWith("|") && !/^\|\s*-+/.test(h)) {
      const p = h.split("|").slice(1, -1).map((S) => S.trim());
      if (p[0] === r) {
        d = !0;
        continue;
      }
      d && p[0] && p[0] !== "（暂无）" && c.push(p[0]);
    } else d && !h.startsWith("|") && (d = !1);
  return c;
}
function bb({ tick: u }) {
  const [r, o] = K.useState([]), [c, d] = K.useState(""), [h, p] = K.useState(""), [S, R] = K.useState(!1), [O, w] = K.useState(""), [v, H] = K.useState({}), [U, N] = K.useState(!1);
  K.useEffect(() => {
    let F = !1;
    return (async () => {
      const Q = await ke("/api/model/status").catch(() => null);
      if (F || !Q || !Q.running || Q.kind !== "generate") return;
      R(!0), w("建模进行中（接管切页前的任务）…");
      const Z = await eu("/api/model/status", { kind: "generate" });
      F || (w(Z.stage === "timeout" ? Z.message : Z.ok ? "完成：见下方分组" : Z.message || "未生成"), Z.ok && (wt.toast.show({ message: "写作模型已生成/更新", type: "success" }), j()), R(!1));
    })(), () => {
      F = !0;
    };
  }, []);
  const B = K.useMemo(() => {
    const F = /* @__PURE__ */ new Map();
    for (const Q of r) {
      const Z = /^(.+)-写作模型-v(\d+)\.md$/.exec(Q);
      Z && (F.has(Z[1]) || F.set(Z[1], []), F.get(Z[1]).push({ file: Q, v: Number(Z[2]) }));
    }
    return [...F.entries()].map(([Q, Z]) => (Z.sort((oe, te) => oe.v - te.v), { type: Q, latest: Z[Z.length - 1], history: Z.slice(0, -1).reverse() }));
  }, [r]), j = K.useCallback(() => {
    Ra("写作模型").then(o);
  }, []);
  K.useEffect(() => {
    j();
  }, [j, u]), K.useEffect(() => {
    if (!c) {
      p("");
      return;
    }
    ke(Sn(`写作模型/${c}`)).then((F) => p(F.ok ? F.content : ""));
  }, [c]);
  async function ne() {
    R(!0), w("");
    try {
      const F = await Nt("/api/model/generate", {});
      if (!F.started) {
        w(F.message || "发起失败"), R(!1);
        return;
      }
      w("建模中：归属 → 归纳 → 逐类型生成（每个类型一次模型调用，可离开本页）…");
      const Q = await eu("/api/model/status", { kind: "generate" });
      if (Q.stage === "timeout") {
        w(Q.message), R(!1);
        return;
      }
      const Z = (Q.results || []).map((te) => te.ok ? `✓ ${te.type} → v${te.version}（样本 ${te.samples} 篇${te.previous ? `，原 v${te.previous}` : ""}）` : te.skipped ? `· ${te.type}：${te.skipped}` : `✗ ${te.type}：${te.error || "失败"}`), oe = Z.filter((te) => te.startsWith("✓")).length;
      w((oe ? Z.length === oe ? "完成：" : "部分完成：" : "未生成：") + (Z.join("；") || Q.message || "")), oe && (wt.toast.show({ message: "写作模型已生成/更新", type: "success" }), j());
    } catch (F) {
      w(`请求失败：${String(F?.message || F)}`);
    }
    R(!1);
  }
  return /* @__PURE__ */ m.jsxs("div", { children: [
    /* @__PURE__ */ m.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ m.jsx(Ze, { variant: "primary", disabled: S, onClick: () => {
        ne();
      }, children: S ? "建模中…" : "生成 / 更新写作模型" }),
      /* @__PURE__ */ m.jsx("span", { className: "hint", children: "同类型样本 ≥2 篇才生成；新文献入库后再次点击即得新版本（v+1，历史保留）。" })
    ] }),
    O && /* @__PURE__ */ m.jsx("pre", { className: "hint", children: O }),
    B.length ? /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
      B.map((F) => /* @__PURE__ */ m.jsxs("div", { className: "model-group", children: [
        /* @__PURE__ */ m.jsxs("div", { className: "model-group-head", children: [
          /* @__PURE__ */ m.jsx("span", { className: "model-grouptitle", children: F.type }),
          /* @__PURE__ */ m.jsxs(
            "button",
            {
              className: c === F.latest.file ? "filebtn on" : "filebtn",
              onClick: () => d(F.latest.file),
              children: [
                "v",
                F.latest.v,
                "（最新）"
              ]
            }
          ),
          F.history.length > 0 && /* @__PURE__ */ m.jsx("button", { className: "linkbtn", onClick: () => H((Q) => ({ ...Q, [F.type]: !Q[F.type] })), children: v[F.type] ? "收起历史" : `历史 ${F.history.length} 版` })
        ] }),
        v[F.type] && /* @__PURE__ */ m.jsx("div", { className: "filebtns", children: F.history.map((Q) => /* @__PURE__ */ m.jsxs("button", { className: c === Q.file ? "filebtn on" : "filebtn", onClick: () => d(Q.file), children: [
          "v",
          Q.v
        ] }, Q.file)) })
      ] }, F.type)),
      c ? U ? /* @__PURE__ */ m.jsx(
        op,
        {
          initial: h,
          savePath: `写作模型/${c}`,
          onSaved: (F) => {
            p(F), N(!1), j();
          }
        }
      ) : /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
        /* @__PURE__ */ m.jsx("div", { className: "import-row", children: /* @__PURE__ */ m.jsx(Ze, { onClick: () => N(!0), children: "编辑本模型" }) }),
        /* @__PURE__ */ m.jsx(tu, { md: h })
      ] }) : /* @__PURE__ */ m.jsx("p", { className: "hint", children: "选择版本查看（每类默认最新；旧版折叠在「历史」里可对照）。" })
    ] }) : /* @__PURE__ */ m.jsx(iu, { title: "暂无写作模型", description: "点上方按钮归纳生成；样本不足或样本未变的类型会跳过并说明。" })
  ] });
}
function Sb() {
  const [u, r] = K.useState(""), [o, c] = K.useState([]), [d, h] = K.useState(null), [p, S] = K.useState("");
  async function R() {
    if (!u.trim()) return;
    const O = await ke(`/api/search?query=${encodeURIComponent(u.trim())}`);
    c(O.ok ? O.results : []), h(null);
  }
  return K.useEffect(() => {
    if (!d) {
      S("");
      return;
    }
    ke(Sn(d.path)).then((O) => S(O.ok ? O.content : "读取失败"));
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
      /* @__PURE__ */ m.jsx(Ze, { variant: "primary", onClick: () => {
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
        d?.path !== O.path && O.hits?.slice(0, 2).map((w, v) => /* @__PURE__ */ m.jsxs("div", { className: "hitline", children: [
          "L",
          w.line,
          ": ",
          w.excerpt,
          w.text
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
  const [u, r] = K.useState(""), [o, c] = K.useState(""), [d, h] = K.useState("2"), [p, S] = K.useState("");
  K.useEffect(() => {
    ke("/api/config").then((O) => {
      O.ok && O.config ? (r((O.config.markers || []).join("、")), c(O.config.libraryPath || ""), h(String(O.config.maxPerRun ?? 2))) : S(O.message || "配置读取失败");
    });
  }, []);
  async function R() {
    S("保存中…");
    const O = await Nt("/api/config", {
      markers: u.split(/[\s、，,;；]+/).map((w) => w.trim()).filter(Boolean),
      libraryPath: o.trim(),
      maxPerRun: Number(d) || 2
    });
    S(O.ok ? "已保存" : `保存失败：${O.message || "未知错误"}`);
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
      /* @__PURE__ */ m.jsx(Ze, { variant: "primary", onClick: () => {
        R();
      }, children: "保存" }),
      p && /* @__PURE__ */ m.jsx("span", { className: "savehint", children: p })
    ] }),
    /* @__PURE__ */ m.jsx("p", { className: "hint", children: "命中判定：标定词过闸后，取最近对话文本与标签库/类型库做字典交集，交集词走共用检索层出候选；候选只附命中事实，采纳与否由会话内模型判断。同会话已注入条目不重复推。" })
  ] });
}
function Ab({ onDone: u }) {
  const [r, o] = K.useState(""), [c, d] = K.useState(!1), [h, p] = K.useState(null), [S, R] = K.useState(!1), [O, w] = K.useState(!1);
  K.useEffect(() => {
    let N = !1;
    return (async () => {
      const B = await ke("/api/import/status").catch(() => null);
      if (N || !B || !B.running) return;
      d(!0), p({ ok: !0, stage: "running", message: "拆解进行中（接管切页前的任务）…" });
      const j = await Lr();
      N || (p(j), j.ok ? (wt.toast.show({ message: "拆解完成，已入库", type: "success" }), u()) : j.failureTs && (wt.toast.show({ message: "拆解失败，已记入待办", type: "error" }), u()), d(!1));
    })(), () => {
      N = !0;
    };
  }, []);
  async function v(N, B) {
    d(!0), p(null);
    try {
      const j = await Nt("/api/import", B !== void 0 ? { ...N, fromTs: B } : N);
      if (!j.started) {
        p(j), d(!1);
        return;
      }
      p({ ok: !0, stage: "running", message: j.message || "拆解进行中" });
      const ne = await Lr();
      p(ne), ne.ok ? (wt.toast.show({ message: "拆解完成，已入库", type: "success" }), u()) : ne.failureTs && (wt.toast.show({ message: "拆解失败，已记入待办", type: "error" }), u());
    } catch (j) {
      p({ ok: !1, stage: "network", message: String(j?.message || j) });
    }
    d(!1);
  }
  async function H(N, B) {
    const j = String(N || "").trim();
    if (!j) {
      p({ ok: !1, stage: "input", message: "请先粘贴文献全文，或选择 / 拖入 md、txt、pdf 文件" });
      return;
    }
    await v({ text: j }, B);
  }
  async function U(N) {
    if (/\.pdf$/i.test(N.name)) {
      if (N.size > 50 * 1024 * 1024) {
        p({ ok: !1, stage: "input", message: "PDF 超过 50 MB 上限" });
        return;
      }
      try {
        const B = await new Promise((j, ne) => {
          const F = new FileReader();
          F.onload = () => j(String(F.result).split(",")[1] || ""), F.onerror = () => ne(new Error("文件读取失败")), F.readAsDataURL(N);
        });
        await v({ pdfBase64: B, filename: N.name });
      } catch (B) {
        p({ ok: !1, stage: "input", message: String(B?.message || B) });
      }
      return;
    }
    if (!/\.(md|txt)$/i.test(N.name)) {
      p({ ok: !1, stage: "input", message: "支持 md / txt / pdf 文件" });
      return;
    }
    await v({ text: await N.text() });
  }
  return /* @__PURE__ */ m.jsxs("div", { className: "import-zone", children: [
    /* @__PURE__ */ m.jsx("h4", { className: "import-title", children: "导入文献" }),
    /* @__PURE__ */ m.jsxs(
      "div",
      {
        className: S ? "drop on" : "drop",
        onDragOver: (N) => {
          N.preventDefault(), R(!0);
        },
        onDragLeave: () => R(!1),
        onDrop: (N) => {
          N.preventDefault(), R(!1);
          const B = N.dataTransfer.files?.[0];
          B && U(B);
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
                onChange: (N) => {
                  const B = N.target.files?.[0];
                  N.target.value = "", B && U(B);
                }
              }
            )
          ] }),
          /* @__PURE__ */ m.jsxs("p", { className: "hint zotero-toggle", children: [
            "或",
            /* @__PURE__ */ m.jsx("button", { className: "linkbtn", onClick: () => w((N) => !N), children: O ? "收起 Zotero" : "从 Zotero 取" })
          ] })
        ]
      }
    ),
    O && /* @__PURE__ */ m.jsx(Nb, {}),
    /* @__PURE__ */ m.jsx(
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
    /* @__PURE__ */ m.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ m.jsx(Ze, { variant: "primary", disabled: c || !r.trim(), onClick: () => {
        H(r);
      }, children: "一键拆解" }),
      c && /* @__PURE__ */ m.jsx("span", { className: "hint", children: "正在拆解：提取（PDF 先转文本）→ 落格校验 → 入库（约 1-3 分钟，可离开本页，完成后有提示）…" })
    ] }),
    h && /* @__PURE__ */ m.jsx("pre", { className: h.ok ? "ok" : "err", children: h.ok ? h.stage === "running" ? `${h.message || "拆解进行中…"}` : `已入库：${h.file}（第 ${h.attempts} 次通过${h.tagsAdded?.length ? `，新增标签 ${h.tagsAdded.join("、")}` : ""}）` + (h.pdfEngine ? `
PDF 引擎：${h.pdfEngine === "pymupdf" ? "PyMuPDF" : "unpdf（回退）—— 安装 PyMuPDF 可启用更稳的主引擎：python -m pip install pymupdf"}` : "") : `${h.message || "拆解失败"}${h.errors?.length ? `
` + h.errors.slice(0, 6).map((N) => `· ${N.field}：${N.message}`).join(`
`) : ""}${h.failureTs ? `
（已记入待办，可到「待办 · 导入失败」重试）` : ""}` })
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
  const [u, r] = K.useState([]), [o, c] = K.useState(null), [d, h] = K.useState([]), [p, S] = K.useState(""), [R, O] = K.useState("collection"), [w, v] = K.useState(null), [H, U] = K.useState(/* @__PURE__ */ new Set()), [N, B] = K.useState([]), [j, ne] = K.useState(null), [F, Q] = K.useState(""), [Z, oe] = K.useState(!1), [te, le] = K.useState(null);
  K.useEffect(() => {
    ke("/api/zotero/collections").then((z) => {
      z && z.ok ? r(z.collections || []) : Q(z?.message || "分类读取失败（Zotero 桌面端在运行吗？）");
    }).catch(() => Q("分类读取失败"));
  }, []), K.useEffect(() => {
    let z = !0;
    const P = () => {
      ke("/api/import/queue").then((W) => {
        z && W && W.ok && (B(W.items || []), ne(W));
      }).catch(() => {
      });
    };
    P();
    const re = setInterval(P, 3e3);
    return () => {
      z = !1, clearInterval(re);
    };
  }, []);
  async function ge(z, P) {
    O("collection"), c(z), U(/* @__PURE__ */ new Set()), oe(!0), Q(`加载「${P}」…`);
    try {
      const re = await ke(`/api/zotero/collection-items?key=${encodeURIComponent(z)}`);
      re && re.ok ? (h(re.items || []), re.truncated ? Q(`该分类较大，列表显示前 ${re.items.length} 条文献；更多可用搜索收窄`) : (re.items || []).length ? Q("") : Q("该分类没有可导入的文献条目")) : Q(re?.message || "条目读取失败");
    } catch (re) {
      Q(String(re?.message || re));
    }
    oe(!1);
  }
  async function $e() {
    O("search"), c(null), U(/* @__PURE__ */ new Set()), oe(!0), Q("");
    try {
      const z = await Nt("/api/tool/zotero_search", { query: p, limit: 50 });
      z && Array.isArray(z.items) ? (v(z.items.map((P) => ({
        key: P.key,
        title: P.title,
        authors: P.creators,
        year: String(P.date || "").slice(0, 4),
        itemType: P.itemType
      }))), z.items.length || Q("没有命中条目")) : Q(z?.message || "Zotero 查询失败");
    } catch (z) {
      Q(String(z?.message || z));
    }
    oe(!1);
  }
  const we = R === "collection" ? d : w || [];
  function We(z) {
    U((P) => {
      const re = new Set(P);
      return re.has(z) ? re.delete(z) : re.add(z), re;
    });
  }
  function Je() {
    U((z) => z.size >= we.length && we.length > 0 ? /* @__PURE__ */ new Set() : new Set(we.map((P) => P.key)));
  }
  async function gt() {
    const z = we.filter((W) => H.has(W.key));
    if (!z.length) {
      Q("先勾选条目");
      return;
    }
    oe(!0);
    const P = [], re = [];
    for (let W = 0; W < z.length; W++) {
      const y = z[W];
      Q(`解析附件 ${W + 1}/${z.length}…`);
      try {
        const Y = await Nt("/api/tool/zotero_item", { key: y.key }), ie = Y && Array.isArray(Y.attachments) && Y.attachments[0] ? Y.attachments[0] : null;
        if (!ie) {
          re.push(y.title || y.key);
          continue;
        }
        const ee = await Nt("/api/tool/zotero_attachment_path", { attachmentKey: ie.key || ie });
        ee && ee.path ? P.push({ label: y.title || y.key, pdfPath: String(ee.path), source: `zotero:${y.key}` }) : re.push(y.title || y.key);
      } catch {
        re.push(y.title || y.key);
      }
    }
    if (P.length) {
      const W = await Nt("/api/import/enqueue", { items: P });
      W && W.ok ? (Q(`已入队 ${W.queued} 篇${re.length ? `；${re.length} 篇缺附件未入队：${re.slice(0, 2).join("、")}${re.length > 2 ? "…" : ""}` : ""}`), U(/* @__PURE__ */ new Set()), wt.toast.show({ message: `已入队 ${W.queued} 篇，队列开始执行`, type: "success" })) : Q(W?.message || "入队失败");
    } else
      Q(`没有可入队条目${re.length ? `（${re.length} 篇缺附件）` : ""}`);
    oe(!1);
  }
  async function Rt() {
    const z = await ke("/api/import/queue").catch(() => null);
    z && z.ok && (B(z.items || []), ne(z));
  }
  async function L(z, P, re = {}) {
    const W = await Nt("/api/import/queue-action", P !== void 0 ? { action: z, key: P, ...re } : { action: z });
    return W && W.ok ? (ne(W.snapshot), Rt(), !0) : (Q(W?.message || "操作失败"), !1);
  }
  async function V(z) {
    oe(!0);
    try {
      const P = await Nt("/api/tool/zotero_item", { key: z }), re = P && Array.isArray(P.attachments) && P.attachments[0] ? P.attachments[0] : null;
      if (!re) {
        Q("该条目无附件"), oe(!1);
        return;
      }
      const W = await Nt("/api/tool/zotero_attachment_path", { attachmentKey: re.key || re });
      W && W.path ? (await wt.clipboard.writeText(String(W.path)), wt.toast.show({ message: "路径已复制", type: "success" })) : Q(W?.message || "附件路径解析失败");
    } catch (P) {
      Q(String(P?.message || P));
    }
    oe(!1);
  }
  function J(z) {
    const P = te;
    le(null), !(P === null || P === z) && L("reorder", P, { before: z });
  }
  const k = j?.total ?? N.length, fe = (j?.done ?? 0) + (j?.failed ?? 0) + (j?.cancelled ?? 0);
  return /* @__PURE__ */ m.jsxs("div", { className: "zbox", children: [
    /* @__PURE__ */ m.jsx("p", { className: "hint", children: "需 Zotero 桌面端运行，且设置 → 高级 → 勾选「Allow other applications on this computer to communicate with Zotero」。勾选后加入队列，串行拆解（并发 1，随时可停）。" }),
    /* @__PURE__ */ m.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ m.jsx(
        Ct,
        {
          label: "搜索（标题 / 作者 / 年份）",
          value: p,
          onChange: (z) => S(z.currentTarget.value),
          onKeyDown: (z) => {
            z.key === "Enter" && $e();
          }
        }
      ),
      /* @__PURE__ */ m.jsx(Ze, { disabled: Z, onClick: () => {
        $e();
      }, children: "搜索" }),
      /* @__PURE__ */ m.jsxs(Ze, { variant: "primary", disabled: Z || H.size === 0, onClick: () => {
        gt();
      }, children: [
        "加入队列（",
        H.size,
        "）"
      ] }),
      /* @__PURE__ */ m.jsx(Ze, { disabled: Z || we.length === 0, onClick: Je, children: H.size >= we.length && we.length > 0 ? "取消全选" : "全选本页" })
    ] }),
    F && /* @__PURE__ */ m.jsx("p", { className: "hint", children: F }),
    /* @__PURE__ */ m.jsxs("div", { className: "zgrid", children: [
      /* @__PURE__ */ m.jsxs("div", { className: "ztree", children: [
        /* @__PURE__ */ m.jsx(
          "div",
          {
            className: R === "collection" && !o ? "collbtn on" : "collbtn",
            onClick: () => {
              O("collection"), U(/* @__PURE__ */ new Set());
            },
            children: "按分类浏览"
          }
        ),
        /* @__PURE__ */ m.jsx(fp, { nodes: u, active: o, onPick: (z, P) => {
          ge(z, P);
        } })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "zlist zlistpick", children: [
        we.length === 0 && /* @__PURE__ */ m.jsx("p", { className: "hint", children: R === "collection" ? "选择左侧分类加载条目，或用搜索。" : "搜索无结果。" }),
        we.map((z) => /* @__PURE__ */ m.jsxs("label", { className: "zrow", children: [
          /* @__PURE__ */ m.jsx("input", { type: "checkbox", checked: H.has(z.key), onChange: () => We(z.key) }),
          /* @__PURE__ */ m.jsxs("span", { className: "zrow-main", children: [
            /* @__PURE__ */ m.jsx("b", { children: z.title || "（无题名）" }),
            /* @__PURE__ */ m.jsx("span", { className: "hint", children: [z.authors, z.year].filter(Boolean).join(" · ") })
          ] }),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: "linkbtn",
              onClick: (P) => {
                P.preventDefault(), V(z.key);
              },
              children: "路径"
            }
          )
        ] }, z.key))
      ] })
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: "qhead", children: [
      /* @__PURE__ */ m.jsx("b", { children: "导入队列" }),
      /* @__PURE__ */ m.jsx("span", { className: "hint", children: k ? `${fe}/${k} 完成 · 运行 ${(j?.running ?? 0) + (j?.stopping ?? 0)} · 排队 ${j?.pending ?? 0}${j?.paused ? " · 已暂停" : ""}` : "队列为空" }),
      /* @__PURE__ */ m.jsxs("span", { className: "qhead-actions", children: [
        /* @__PURE__ */ m.jsx(Ze, { disabled: !j || k === 0, onClick: () => {
          L(j?.paused ? "resume" : "pause");
        }, children: j?.paused ? "继续" : "暂停" }),
        /* @__PURE__ */ m.jsx(Ze, { disabled: !j || (j?.done ?? 0) + (j?.cancelled ?? 0) === 0, onClick: () => {
          L("clear-done");
        }, children: "清理已完成" })
      ] })
    ] }),
    N.length === 0 ? /* @__PURE__ */ m.jsx("p", { className: "hint", children: "勾选文献点「加入队列」开始批量导入；运行中可继续追加，支持单篇停止/开始与拖拽排序。" }) : /* @__PURE__ */ m.jsx("div", { className: "qlist", children: N.map((z) => /* @__PURE__ */ m.jsxs(
      "div",
      {
        className: te === z.key ? "qrow dragging" : "qrow",
        draggable: z.status === "pending",
        onDragStart: () => le(z.key),
        onDragOver: (P) => P.preventDefault(),
        onDrop: () => J(z.key),
        onDragEnd: () => le(null),
        children: [
          /* @__PURE__ */ m.jsx("span", { className: "qhandle", title: "拖拽排序（仅排队中）", children: "☰" }),
          /* @__PURE__ */ m.jsx("span", { className: "qstatus", children: _b[z.status] || z.status }),
          /* @__PURE__ */ m.jsx("span", { className: "qlabel", title: z.message || z.file || "", children: z.label }),
          (z.status === "pending" || z.status === "running") && /* @__PURE__ */ m.jsx(Ze, { onClick: () => {
            L("cancel", z.key);
          }, children: "停止" }),
          z.status === "stopping" && /* @__PURE__ */ m.jsx("span", { className: "hint", children: "停止中…" }),
          (z.status === "cancelled" || z.status === "failed") && /* @__PURE__ */ m.jsx(Ze, { onClick: () => {
            L("start", z.key);
          }, children: "开始" }),
          z.status !== "running" && z.status !== "stopping" && /* @__PURE__ */ m.jsx(Ze, { onClick: () => {
            L("remove", z.key);
          }, children: "移除" }),
          z.status === "failed" && z.message && /* @__PURE__ */ m.jsx("span", { className: "qerr", children: z.message }),
          z.status === "done" && /* @__PURE__ */ m.jsx("span", { className: "qok", children: "已入库" })
        ]
      },
      z.key
    )) })
  ] });
}
function wb({ stats: u, go: r, onDone: o }) {
  const c = u ? u.queuePending + u.failures : 0, [d, h] = K.useState("loading");
  return K.useEffect(() => {
    ke("/api/config").then((p) => {
      const S = p?.config?.libraryPath ?? "";
      h(S && !String(S).startsWith("NOT_CONFIGURED") ? "ok" : "unconfigured");
    }).catch(() => h("loading"));
  }, []), /* @__PURE__ */ m.jsxs("div", { className: "home", children: [
    /* @__PURE__ */ m.jsx("p", { className: "tagline", children: "把论文拆成可回溯的论证结构，沉淀为写作模型，写论文时检索取用。" }),
    d === "unconfigured" && /* @__PURE__ */ m.jsxs("div", { className: "home-banner", children: [
      "尚未配置结构库。到「设置」填写 libraryPath 并保存，模板会自动铺到该目录，无需手动拷贝。",
      /* @__PURE__ */ m.jsx(Ze, { onClick: () => r("settings"), children: "前往设置" })
    ] }),
    /* @__PURE__ */ m.jsxs("ol", { className: "steps", children: [
      /* @__PURE__ */ m.jsx("li", { children: "把文献拖进面板一键拆解，或在对话里让我拆" }),
      /* @__PURE__ */ m.jsx("li", { children: "库里提出的疑问到「待办」处理，保证每条引文可回溯" }),
      /* @__PURE__ */ m.jsx("li", { children: "写论文时到「取用」检索同类模型，按出处引用" })
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: "home-actions", children: [
      /* @__PURE__ */ m.jsx(Ze, { variant: "primary", onClick: () => r("use"), children: "去取用" }),
      /* @__PURE__ */ m.jsx(Ze, { onClick: () => r("library"), children: "看结构库" }),
      /* @__PURE__ */ m.jsx(Ze, { disabled: !u || c === 0, onClick: () => r("todo"), children: c > 0 ? `处理待办（${c}）` : "暂无待办" })
    ] }),
    /* @__PURE__ */ m.jsx("div", { className: "statusbar", children: u ? `库内 ${u.papers} 篇目 · ${u.models} 模型 · 待办 ${c} 条` : "统计中…" }),
    /* @__PURE__ */ m.jsx(Ab, { onDone: o })
  ] });
}
function Ob({ tick: u, bump: r }) {
  const [o, c] = K.useState([]), [d, h] = K.useState(null), [p, S] = K.useState(""), R = K.useCallback(async () => {
    const v = await ke("/api/import/failures").catch(() => ({ items: [] }));
    c(v.items || []);
  }, []);
  K.useEffect(() => {
    R();
  }, [R, u]), K.useEffect(() => {
    let v = !1;
    return (async () => {
      const H = await ke("/api/import/status").catch(() => null);
      if (v || !H || !H.running) return;
      S("有导入任务进行中，等待结果…");
      const U = await Lr();
      v || (S(U.ok ? `完成：${U.file}` : `仍失败：${U.message || "未知错误"}${U.failureTs ? "（已刷新记录）" : ""}`), (U.ok || U.failureTs) && (await R(), r()));
    })(), () => {
      v = !0;
    };
  }, []);
  async function O(v) {
    h(v.ts), S("");
    try {
      const H = await Nt("/api/import", { text: v.text, fromTs: v.ts });
      if (H.started) {
        S("重试中（约 1-3 分钟，可离开本页）…");
        const U = await Lr();
        U.ok ? (S(`重试成功：${U.file}`), wt.toast.show({ message: "重试成功，已入库", type: "success" })) : S(`仍失败：${U.message || "未知错误"}${U.failureTs ? "（已刷新记录）" : ""}`);
      } else H.ok ? (S(`重试成功：${H.file}`), wt.toast.show({ message: "重试成功，已入库", type: "success" })) : S(`仍失败：${H.message || "未知错误"}`);
    } catch (H) {
      S(`请求失败：${String(H?.message || H)}`);
    }
    h(null), await R(), r();
  }
  async function w(v) {
    await Nt("/api/import/failures/dismiss", { ts: v.ts }).catch(() => null), await R(), r();
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
      (v.errors || []).slice(0, 4).map((H, U) => /* @__PURE__ */ m.jsxs("div", { className: "hint", children: [
        "· ",
        H.field,
        "：",
        H.message
      ] }, U)),
      /* @__PURE__ */ m.jsxs("div", { className: "fail-actions", children: [
        /* @__PURE__ */ m.jsx(Ze, { variant: "primary", disabled: d === v.ts, onClick: () => {
          O(v);
        }, children: d === v.ts ? "重试中…" : "重试" }),
        /* @__PURE__ */ m.jsx(Ze, { disabled: d === v.ts, onClick: () => {
          w(v);
        }, children: "移除" })
      ] })
    ] }, v.ts)),
    p && /* @__PURE__ */ m.jsx("p", { className: p.startsWith("重试成功") ? "ok" : "err", children: p })
  ] }) : /* @__PURE__ */ m.jsx(iu, { title: "暂无导入失败", description: "导入拆解失败的文献会落在这里，可原样重试。" });
}
function Cb() {
  const u = document.getElementById("root")?.dataset.surface || "page", [r, o] = K.useState("home"), [c, d] = K.useState({
    home: "",
    use: "search",
    library: "browse",
    todo: "score",
    settings: ""
  }), [h, p] = K.useState(0), [S, R] = K.useState(null), O = K.useCallback(() => p((N) => N + 1), []), w = K.useCallback((N) => o(N), []);
  K.useEffect(() => {
    wt.ready(), wt.ui.resize({ height: u === "widget" ? 420 : 760 });
  }, [u]), K.useEffect(() => {
    let N = !0;
    return mb().then((B) => {
      N && R(B);
    }).catch(() => {
      N && R(null);
    }), () => {
      N = !1;
    };
  }, [h, r]);
  const v = c[r], H = K.useMemo(() => {
    switch (r) {
      case "home":
        return /* @__PURE__ */ m.jsx(wb, { stats: S, go: w, onDone: O });
      case "use":
        return v === "models" ? /* @__PURE__ */ m.jsx(bb, { tick: h }) : /* @__PURE__ */ m.jsx(Sb, {});
      case "library":
        return v === "compare" ? /* @__PURE__ */ m.jsx(yb, { tick: h }) : v === "board" ? /* @__PURE__ */ m.jsx(Eb, { tick: h }) : /* @__PURE__ */ m.jsx(vb, { tick: h });
      case "todo":
        return v === "queue" ? /* @__PURE__ */ m.jsx(pb, { tick: h }) : v === "import-fail" ? /* @__PURE__ */ m.jsx(Ob, { tick: h, bump: O }) : /* @__PURE__ */ m.jsx(gb, {});
      case "settings":
        return /* @__PURE__ */ m.jsx(Tb, {});
    }
  }, [r, v, h, S, w, O]), U = S ? S.queuePending + S.failures : 0;
  return /* @__PURE__ */ m.jsx(rb, { mode: "inherit", className: "plugin-panel", children: /* @__PURE__ */ m.jsxs(
    Ca,
    {
      title: "论文结构建模",
      description: "把论文拆成可回溯的论证结构，沉淀为写作模型，写论文时检索取用。",
      actions: /* @__PURE__ */ m.jsx(Ze, { variant: "ghost", onClick: O, children: "刷新" }),
      children: [
        /* @__PURE__ */ m.jsx("nav", { className: "tabs zones", children: ob.map((N) => /* @__PURE__ */ m.jsxs("button", { className: r === N.id ? "tab on" : "tab", onClick: () => o(N.id), children: [
          N.label,
          N.id === "todo" && U > 0 && /* @__PURE__ */ m.jsx("span", { className: "nav-badge", children: U })
        ] }, N.id)) }),
        r !== "home" && r !== "settings" && /* @__PURE__ */ m.jsx("nav", { className: "tabs sub", children: fb[r].map((N) => /* @__PURE__ */ m.jsxs(
          "button",
          {
            className: v === N.id ? "tab on" : "tab",
            onClick: () => d((B) => ({ ...B, [r]: N.id })),
            children: [
              N.label,
              r === "todo" && N.id === "import-fail" && (S?.failures ?? 0) > 0 && /* @__PURE__ */ m.jsx("span", { className: "nav-badge", children: S?.failures ?? 0 }),
              r === "todo" && N.id === "queue" && (S?.queuePending ?? 0) > 0 && /* @__PURE__ */ m.jsx("span", { className: "nav-badge", children: S?.queuePending ?? 0 })
            ]
          },
          N.id
        )) }),
        /* @__PURE__ */ m.jsx("div", { className: "tab-body", children: H })
      ]
    }
  ) });
}
const Mg = document.getElementById("root");
Mg && p0.createRoot(Mg).render(/* @__PURE__ */ m.jsx(Cb, {}));
