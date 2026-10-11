var vo = { exports: {} }, Xi = {};
var sg;
function u0() {
  if (sg) return Xi;
  sg = 1;
  var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function o(c, d, h) {
    var p = null;
    if (h !== void 0 && (p = "" + h), d.key !== void 0 && (p = "" + d.key), "key" in d) {
      h = {};
      for (var b in d)
        b !== "key" && (h[b] = d[b]);
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
function r0() {
  return og || (og = 1, vo.exports = u0()), vo.exports;
}
var m = r0(), yo = { exports: {} }, be = {};
var fg;
function c0() {
  if (fg) return be;
  fg = 1;
  var u = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.consumer"), p = /* @__PURE__ */ Symbol.for("react.context"), b = /* @__PURE__ */ Symbol.for("react.forward_ref"), C = /* @__PURE__ */ Symbol.for("react.suspense"), w = /* @__PURE__ */ Symbol.for("react.memo"), z = /* @__PURE__ */ Symbol.for("react.lazy"), v = /* @__PURE__ */ Symbol.for("react.activity"), I = /* @__PURE__ */ Symbol.for("react.view_transition"), U = Symbol.iterator;
  function A(y) {
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
  }, x = Object.assign, k = {};
  function te(y, Y, le) {
    this.props = y, this.context = Y, this.refs = k, this.updater = le || B;
  }
  te.prototype.isReactComponent = {}, te.prototype.setState = function(y, Y) {
    if (typeof y != "object" && typeof y != "function" && y != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, y, Y, "setState");
  }, te.prototype.forceUpdate = function(y) {
    this.updater.enqueueForceUpdate(this, y, "forceUpdate");
  };
  function J() {
  }
  J.prototype = te.prototype;
  function K(y, Y, le) {
    this.props = y, this.context = Y, this.refs = k, this.updater = le || B;
  }
  var he = K.prototype = new J();
  he.constructor = K, x(he, te.prototype), he.isPureReactComponent = !0;
  var me = Array.isArray;
  function ae() {
  }
  var ge = { H: null, A: null, T: null, S: null }, Fe = Object.prototype.hasOwnProperty;
  function we(y, Y, le) {
    var ee = le.ref;
    return {
      $$typeof: u,
      type: y,
      key: Y,
      ref: ee !== void 0 ? ee : null,
      props: le
    };
  }
  function We(y, Y) {
    return we(y.type, Y, y.props);
  }
  function ke(y) {
    return typeof y == "object" && y !== null && y.$$typeof === u;
  }
  function gt(y) {
    var Y = { "=": "=0", ":": "=2" };
    return "$" + y.replace(/[=:]/g, function(le) {
      return Y[le];
    });
  }
  var Rt = /\/+/g;
  function q(y, Y) {
    return typeof y == "object" && y !== null && y.key != null ? gt("" + y.key) : Y.toString(36);
  }
  function V(y) {
    switch (y.status) {
      case "fulfilled":
        return y.value;
      case "rejected":
        throw y.reason;
      default:
        switch (typeof y.status == "string" ? y.then(ae, ae) : (y.status = "pending", y.then(
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
  function F(y, Y, le, ee, Se) {
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
            case z:
              return Re = y._init, F(
                Re(y._payload),
                Y,
                le,
                ee,
                Se
              );
          }
      }
    if (Re)
      return Se = Se(y), Re = ee === "" ? "." + q(y, 0) : ee, me(Se) ? (le = "", Re != null && (le = Re.replace(Rt, "$&/") + "/"), F(Se, Y, le, "", function(Wt) {
        return Wt;
      })) : Se != null && (ke(Se) && (Se = We(
        Se,
        le + (Se.key == null || y && y.key === Se.key ? "" : ("" + Se.key).replace(
          Rt,
          "$&/"
        ) + "/") + Re
      )), Y.push(Se)), 1;
    Re = 0;
    var ie = ee === "" ? "." : ee + ":";
    if (me(y))
      for (var pe = 0; pe < y.length; pe++)
        ee = y[pe], Te = ie + q(ee, pe), Re += F(
          ee,
          Y,
          le,
          Te,
          Se
        );
    else if (pe = A(y), typeof pe == "function")
      for (y = pe.call(y), pe = 0; !(ee = y.next()).done; )
        ee = ee.value, Te = ie + q(ee, pe++), Re += F(
          ee,
          Y,
          le,
          Te,
          Se
        );
    else if (Te === "object") {
      if (typeof y.then == "function")
        return F(
          V(y),
          Y,
          le,
          ee,
          Se
        );
      throw Y = String(y), Error(
        "Objects are not valid as a React child (found: " + (Y === "[object Object]" ? "object with keys {" + Object.keys(y).join(", ") + "}" : Y) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return Re;
  }
  function Z(y, Y, le) {
    if (y == null) return y;
    var ee = [], Se = 0;
    return F(y, ee, "", "", function(Te) {
      return Y.call(le, Te, Se++);
    }), ee;
  }
  function se(y) {
    if (y._status === -1) {
      var Y = y._result, le = Y();
      le.then(
        function(ee) {
          (y._status === 0 || y._status === -1) && (y._status = 1, y._result = ee, le.status === void 0 && (le.status = "fulfilled", le.value = ee));
        },
        function(ee) {
          (y._status === 0 || y._status === -1) && (y._status = 2, y._result = ee, le.status === void 0 && (le.status = "rejected", le.reason = ee));
        }
      ), y._status === -1 && (y._status = 0, y._result = le);
    }
    if (y._status === 1) return y._result.default;
    throw y._result;
  }
  var M = typeof reportError == "function" ? reportError : function(y) {
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
    var Y = ge.T, le = {};
    le.types = Y !== null ? Y.types : null, ge.T = le;
    try {
      var ee = y(), Se = ge.S;
      Se !== null && Se(le, ee), typeof ee == "object" && ee !== null && typeof ee.then == "function" && ee.then(ae, M);
    } catch (Te) {
      M(Te);
    } finally {
      Y !== null && le.types !== null && (Y.types = le.types), ge.T = Y;
    }
  }
  function ue(y) {
    var Y = ge.T;
    if (Y !== null) {
      var le = Y.types;
      le === null ? Y.types = [y] : le.indexOf(y) === -1 && le.push(y);
    } else P(ue.bind(null, y));
  }
  var W = {
    map: Z,
    forEach: function(y, Y, le) {
      Z(
        y,
        function() {
          Y.apply(this, arguments);
        },
        le
      );
    },
    count: function(y) {
      var Y = 0;
      return Z(y, function() {
        Y++;
      }), Y;
    },
    toArray: function(y) {
      return Z(y, function(Y) {
        return Y;
      }) || [];
    },
    only: function(y) {
      if (!ke(y))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return y;
    }
  };
  return be.Activity = v, be.Children = W, be.Component = te, be.Fragment = o, be.Profiler = d, be.PureComponent = K, be.StrictMode = c, be.Suspense = C, be.ViewTransition = I, be.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = ge, be.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(y) {
      return ge.H.useMemoCache(y);
    }
  }, be.addTransitionType = ue, be.cache = function(y) {
    return function() {
      return y.apply(null, arguments);
    };
  }, be.cacheSignal = function() {
    return null;
  }, be.cloneElement = function(y, Y, le) {
    if (y == null)
      throw Error(
        "The argument must be a React element, but you passed " + y + "."
      );
    var ee = x({}, y.props), Se = y.key;
    if (Y != null)
      for (Te in Y.key !== void 0 && (Se = "" + Y.key), Y)
        !Fe.call(Y, Te) || Te === "key" || Te === "__self" || Te === "__source" || Te === "ref" && Y.ref === void 0 || (ee[Te] = Y[Te]);
    var Te = arguments.length - 2;
    if (Te === 1) ee.children = le;
    else if (1 < Te) {
      for (var Re = Array(Te), ie = 0; ie < Te; ie++)
        Re[ie] = arguments[ie + 2];
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
  }, be.createElement = function(y, Y, le) {
    var ee, Se = {}, Te = null;
    if (Y != null)
      for (ee in Y.key !== void 0 && (Te = "" + Y.key), Y)
        Fe.call(Y, ee) && ee !== "key" && ee !== "__self" && ee !== "__source" && (Se[ee] = Y[ee]);
    var Re = arguments.length - 2;
    if (Re === 1) Se.children = le;
    else if (1 < Re) {
      for (var ie = Array(Re), pe = 0; pe < Re; pe++)
        ie[pe] = arguments[pe + 2];
      Se.children = ie;
    }
    if (y && y.defaultProps)
      for (ee in Re = y.defaultProps, Re)
        Se[ee] === void 0 && (Se[ee] = Re[ee]);
    return we(y, Te, Se);
  }, be.createRef = function() {
    return { current: null };
  }, be.forwardRef = function(y) {
    return { $$typeof: b, render: y };
  }, be.isValidElement = ke, be.lazy = function(y) {
    return {
      $$typeof: z,
      _payload: { _status: -1, _result: y },
      _init: se
    };
  }, be.memo = function(y, Y) {
    return {
      $$typeof: w,
      type: y,
      compare: Y === void 0 ? null : Y
    };
  }, be.startTransition = P, be.unstable_useCacheRefresh = function() {
    return ge.H.useCacheRefresh();
  }, be.use = function(y) {
    return ge.H.use(y);
  }, be.useActionState = function(y, Y, le) {
    return ge.H.useActionState(y, Y, le);
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
  }, be.useImperativeHandle = function(y, Y, le) {
    return ge.H.useImperativeHandle(y, Y, le);
  }, be.useInsertionEffect = function(y, Y) {
    return ge.H.useInsertionEffect(y, Y);
  }, be.useLayoutEffect = function(y, Y) {
    return ge.H.useLayoutEffect(y, Y);
  }, be.useMemo = function(y, Y) {
    return ge.H.useMemo(y, Y);
  }, be.useOptimistic = function(y, Y) {
    return ge.H.useOptimistic(y, Y);
  }, be.useReducer = function(y, Y, le) {
    return ge.H.useReducer(y, Y, le);
  }, be.useRef = function(y) {
    return ge.H.useRef(y);
  }, be.useState = function(y) {
    return ge.H.useState(y);
  }, be.useSyncExternalStore = function(y, Y, le) {
    return ge.H.useSyncExternalStore(
      y,
      Y,
      le
    );
  }, be.useTransition = function() {
    return ge.H.useTransition();
  }, be.version = "19.3.0", be;
}
var dg;
function zo() {
  return dg || (dg = 1, yo.exports = c0()), yo.exports;
}
var Q = zo(), Eo = { exports: {} }, Qi = {}, bo = { exports: {} }, So = {};
var hg;
function s0() {
  return hg || (hg = 1, (function(u) {
    function r(V, F) {
      var Z = V.length;
      V.push(F);
      e: for (; 0 < Z; ) {
        var se = Z - 1 >>> 1, M = V[se];
        if (0 < d(M, F))
          V[se] = F, V[Z] = M, Z = se;
        else break e;
      }
    }
    function o(V) {
      return V.length === 0 ? null : V[0];
    }
    function c(V) {
      if (V.length === 0) return null;
      var F = V[0], Z = V.pop();
      if (Z !== F) {
        V[0] = Z;
        e: for (var se = 0, M = V.length, P = M >>> 1; se < P; ) {
          var ue = 2 * (se + 1) - 1, W = V[ue], y = ue + 1, Y = V[y];
          if (0 > d(W, Z))
            y < M && 0 > d(Y, W) ? (V[se] = Y, V[y] = Z, se = y) : (V[se] = W, V[ue] = Z, se = ue);
          else if (y < M && 0 > d(Y, Z))
            V[se] = Y, V[y] = Z, se = y;
          else break e;
        }
      }
      return F;
    }
    function d(V, F) {
      var Z = V.sortIndex - F.sortIndex;
      return Z !== 0 ? Z : V.id - F.id;
    }
    if (u.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      u.unstable_now = function() {
        return h.now();
      };
    } else {
      var p = Date, b = p.now();
      u.unstable_now = function() {
        return p.now() - b;
      };
    }
    var C = [], w = [], z = 1, v = null, I = 3, U = !1, A = !1, B = !1, x = !1, k = typeof setTimeout == "function" ? setTimeout : null, te = typeof clearTimeout == "function" ? clearTimeout : null, J = typeof setImmediate < "u" ? setImmediate : null;
    function K(V) {
      for (var F = o(w); F !== null; ) {
        if (F.callback === null) c(w);
        else if (F.startTime <= V)
          c(w), F.sortIndex = F.expirationTime, r(C, F);
        else break;
        F = o(w);
      }
    }
    function he(V) {
      if (B = !1, K(V), !A)
        if (o(C) !== null)
          A = !0, me || (me = !0, ke());
        else {
          var F = o(w);
          F !== null && q(he, F.startTime - V);
        }
    }
    var me = !1, ae = -1, ge = 5, Fe = -1;
    function we() {
      return x ? !0 : !(u.unstable_now() - Fe < ge);
    }
    function We() {
      if (x = !1, me) {
        var V = u.unstable_now();
        Fe = V;
        var F = !0;
        try {
          e: {
            A = !1, B && (B = !1, te(ae), ae = -1), U = !0;
            var Z = I;
            try {
              t: {
                for (K(V), v = o(C); v !== null && !(v.expirationTime > V && we()); ) {
                  var se = v.callback;
                  if (typeof se == "function") {
                    v.callback = null, I = v.priorityLevel;
                    var M = se(
                      v.expirationTime <= V
                    );
                    if (V = u.unstable_now(), typeof M == "function") {
                      v.callback = M, K(V), F = !0;
                      break t;
                    }
                    v === o(C) && c(C), K(V);
                  } else c(C);
                  v = o(C);
                }
                if (v !== null) F = !0;
                else {
                  var P = o(w);
                  P !== null && q(
                    he,
                    P.startTime - V
                  ), F = !1;
                }
              }
              break e;
            } finally {
              v = null, I = Z, U = !1;
            }
            F = void 0;
          }
        } finally {
          F ? ke() : me = !1;
        }
      }
    }
    var ke;
    if (typeof J == "function")
      ke = function() {
        J(We);
      };
    else if (typeof MessageChannel < "u") {
      var gt = new MessageChannel(), Rt = gt.port2;
      gt.port1.onmessage = We, ke = function() {
        Rt.postMessage(null);
      };
    } else
      ke = function() {
        k(We, 0);
      };
    function q(V, F) {
      ae = k(function() {
        V(u.unstable_now());
      }, F);
    }
    u.unstable_IdlePriority = 5, u.unstable_ImmediatePriority = 1, u.unstable_LowPriority = 4, u.unstable_NormalPriority = 3, u.unstable_Profiling = null, u.unstable_UserBlockingPriority = 2, u.unstable_cancelCallback = function(V) {
      V.callback = null;
    }, u.unstable_forceFrameRate = function(V) {
      0 > V || 125 < V ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : ge = 0 < V ? Math.floor(1e3 / V) : 5;
    }, u.unstable_getCurrentPriorityLevel = function() {
      return I;
    }, u.unstable_next = function(V) {
      switch (I) {
        case 1:
        case 2:
        case 3:
          var F = 3;
          break;
        default:
          F = I;
      }
      var Z = I;
      I = F;
      try {
        return V();
      } finally {
        I = Z;
      }
    }, u.unstable_requestPaint = function() {
      x = !0;
    }, u.unstable_runWithPriority = function(V, F) {
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
      var Z = I;
      I = V;
      try {
        return F();
      } finally {
        I = Z;
      }
    }, u.unstable_scheduleCallback = function(V, F, Z) {
      var se = u.unstable_now();
      switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? se + Z : se) : Z = se, V) {
        case 1:
          var M = -1;
          break;
        case 2:
          M = 250;
          break;
        case 5:
          M = 1073741823;
          break;
        case 4:
          M = 1e4;
          break;
        default:
          M = 5e3;
      }
      return M = Z + M, V = {
        id: z++,
        callback: F,
        priorityLevel: V,
        startTime: Z,
        expirationTime: M,
        sortIndex: -1
      }, Z > se ? (V.sortIndex = Z, r(w, V), o(C) === null && V === o(w) && (B ? (te(ae), ae = -1) : B = !0, q(he, Z - se))) : (V.sortIndex = M, r(C, V), A || U || (A = !0, me || (me = !0, ke()))), V;
    }, u.unstable_shouldYield = we, u.unstable_wrapCallback = function(V) {
      var F = I;
      return function() {
        var Z = I;
        I = F;
        try {
          return V.apply(this, arguments);
        } finally {
          I = Z;
        }
      };
    };
  })(So)), So;
}
var mg;
function o0() {
  return mg || (mg = 1, bo.exports = s0()), bo.exports;
}
var To = { exports: {} }, _t = {};
var gg;
function f0() {
  if (gg) return _t;
  gg = 1;
  var u = zo();
  function r(z) {
    var v = "https://react.dev/errors/" + z;
    if (1 < arguments.length) {
      v += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var I = 2; I < arguments.length; I++)
        v += "&args[]=" + encodeURIComponent(arguments[I]);
    }
    return "Minified React error #" + z + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
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
  function b(z, v, I) {
    var U = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: U == null ? null : U === p ? p : "" + U,
      children: z,
      containerInfo: v,
      implementation: I
    };
  }
  var C = u.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function w(z, v) {
    if (z === "font") return "";
    if (typeof v == "string")
      return v === "use-credentials" ? v : "";
  }
  return _t.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, _t.browser = function(z) {
    return { $$typeof: h, _reason: z };
  }, _t.createPortal = function(z, v) {
    var I = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)
      throw Error(r(299));
    return b(z, v, null, I);
  }, _t.flushSync = function(z) {
    var v = C.T, I = c.p;
    try {
      if (C.T = null, c.p = 2, z) return z();
    } finally {
      C.T = v, c.p = I, c.d.f();
    }
  }, _t.preconnect = function(z, v) {
    typeof z == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, c.d.C(z, v));
  }, _t.prefetchDNS = function(z) {
    typeof z == "string" && c.d.D(z);
  }, _t.preinit = function(z, v) {
    if (typeof z == "string" && v && typeof v.as == "string") {
      var I = v.as, U = w(I, v.crossOrigin), A = typeof v.integrity == "string" ? v.integrity : void 0, B = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
      I === "style" ? c.d.S(
        z,
        typeof v.precedence == "string" ? v.precedence : void 0,
        {
          crossOrigin: U,
          integrity: A,
          fetchPriority: B
        }
      ) : I === "script" && c.d.X(z, {
        crossOrigin: U,
        integrity: A,
        fetchPriority: B,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0
      });
    }
  }, _t.preinitModule = function(z, v) {
    if (typeof z == "string")
      if (typeof v == "object" && v !== null) {
        if (v.as == null || v.as === "script") {
          var I = w(
            v.as,
            v.crossOrigin
          );
          c.d.M(z, {
            crossOrigin: I,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
            nonce: typeof v.nonce == "string" ? v.nonce : void 0,
            fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0
          });
        }
      } else v == null && c.d.M(z);
  }, _t.preload = function(z, v) {
    if (typeof z == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
      var I = v.as, U = w(I, v.crossOrigin);
      c.d.L(z, I, {
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
  }, _t.preloadModule = function(z, v) {
    if (typeof z == "string")
      if (v) {
        var I = w(v.as, v.crossOrigin);
        c.d.m(z, {
          as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
          crossOrigin: I,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0,
          nonce: typeof v.nonce == "string" ? v.nonce : void 0,
          fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0
        });
      } else c.d.m(z);
  }, _t.requestFormReset = function(z) {
    c.d.r(z);
  }, _t.unstable_batchedUpdates = function(z, v) {
    return z(v);
  }, _t.useFormState = function(z, v, I) {
    return C.H.useFormState(z, v, I);
  }, _t.useFormStatus = function() {
    return C.H.useHostTransitionStatus();
  }, _t.version = "19.3.0", _t;
}
var pg;
function d0() {
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
  return u(), To.exports = f0(), To.exports;
}
var vg;
function h0() {
  if (vg) return Qi;
  vg = 1;
  var u = o0(), r = zo(), o = d0();
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
  function b(e) {
    if (e.tag === 31) {
      var t = e.memoizedState;
      if (t === null && (e = e.alternate, e !== null && (t = e.memoizedState)), t !== null) return t.dehydrated;
    }
    return null;
  }
  function C(e) {
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
          if (i === n) return C(l), e;
          if (i === a) return C(l), t;
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
  function z(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = z(e), t !== null) return t;
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
  function I(e) {
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
  function A(e) {
    var t = [null, null], n = I(e);
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
  var k = null, te = null;
  function J(e, t, n) {
    return e === n ? !0 : e === t ? (k = e, !0) : !1;
  }
  function K(e, t, n) {
    return e === n ? (te = e, !1) : e === t ? (te !== null && (k = e), !0) : !1;
  }
  function he(e) {
    if (e === null) return null;
    do
      e = e === null ? null : e.return;
    while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
    return e || null;
  }
  function me(e, t, n) {
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
  var ae = Object.assign, ge = /* @__PURE__ */ Symbol.for("react.element"), Fe = /* @__PURE__ */ Symbol.for("react.transitional.element"), we = /* @__PURE__ */ Symbol.for("react.portal"), We = /* @__PURE__ */ Symbol.for("react.fragment"), ke = /* @__PURE__ */ Symbol.for("react.strict_mode"), gt = /* @__PURE__ */ Symbol.for("react.profiler"), Rt = /* @__PURE__ */ Symbol.for("react.consumer"), q = /* @__PURE__ */ Symbol.for("react.context"), V = /* @__PURE__ */ Symbol.for("react.forward_ref"), F = /* @__PURE__ */ Symbol.for("react.suspense"), Z = /* @__PURE__ */ Symbol.for("react.suspense_list"), se = /* @__PURE__ */ Symbol.for("react.memo"), M = /* @__PURE__ */ Symbol.for("react.lazy"), P = /* @__PURE__ */ Symbol.for("react.activity"), ue = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), W = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), y = /* @__PURE__ */ Symbol.for("react.view_transition"), Y = /* @__PURE__ */ Symbol.for("react.recoverable"), le = Symbol.iterator;
  function ee(e) {
    return e === null || typeof e != "object" ? null : (e = le && e[le] || e["@@iterator"], typeof e == "function" ? e : null);
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
      case ke:
        return "StrictMode";
      case F:
        return "Suspense";
      case Z:
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
        case q:
          return e.displayName || "Context";
        case Rt:
          return (e._context.displayName || "Context") + ".Consumer";
        case V:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case se:
          return t = e.displayName || null, t !== null ? t : Te(e.type) || "Memo";
        case M:
          t = e._payload, e = e._init;
          try {
            return Te(e(t));
          } catch {
          }
      }
    return null;
  }
  var Re = Array.isArray, ie = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, pe = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Wt = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, $n = [], Mn = -1;
  function en(e) {
    return { current: e };
  }
  function de(e) {
    0 > Mn || (e.current = $n[Mn], $n[Mn] = null, Mn--);
  }
  function Le(e, t) {
    Mn++, $n[Mn] = e.current, e.current = t;
  }
  var Vt = en(null), _ = en(null), X = en(null), j = en(null);
  function G(e, t) {
    switch (Le(X, t), Le(_, e), Le(Vt, null), t.nodeType) {
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
    de(Vt), Le(Vt, e);
  }
  function ce() {
    de(Vt), de(_), de(X);
  }
  function Me(e) {
    var t = e.memoizedState;
    t !== null && (Vl._currentValue = t.memoizedState, Le(j, e)), t = Vt.current;
    var n = Em(t, e.type);
    t !== n && (Le(_, e), Le(Vt, n));
  }
  function Ye(e) {
    _.current === e && (de(Vt), de(_)), j.current === e && (de(j), Vl._currentValue = Wt);
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
              var L = function() {
                throw Error();
              };
              if (Object.defineProperty(L.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(L, []);
                } catch ($) {
                  var S = $;
                }
                Reflect.construct(e, [], L);
              } else {
                try {
                  L.call();
                } catch ($) {
                  S = $;
                }
                L = !1;
                try {
                  var R = Object.getOwnPropertyDescriptor(
                    e.prototype,
                    "props"
                  );
                  Object.defineProperty(e.prototype, "props", {
                    configurable: !0,
                    set: function() {
                      throw Error();
                    }
                  }), L = !0, new e();
                } finally {
                  L && (R !== void 0 ? Object.defineProperty(e.prototype, "props", R) : delete e.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch ($) {
                S = $;
              }
              (L = e()) && typeof L.catch == "function" && L.catch(function() {
              });
            }
          } catch ($) {
            if ($ && S && typeof $.stack == "string")
              return [$.stack, S.stack];
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
`), N = f.split(`
`);
        for (l = a = 0; a < g.length && !g[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; l < N.length && !N[l].includes(
          "DetermineComponentFrameRoot"
        ); )
          l++;
        if (a === g.length || l === N.length)
          for (a = g.length - 1, l = N.length - 1; 1 <= a && 0 <= l && g[a] !== N[l]; )
            l--;
        for (; 1 <= a && 0 <= l; a--, l--)
          if (g[a] !== N[l]) {
            if (a !== 1 || l !== 1)
              do
                if (a--, l--, 0 > l || g[a] !== N[l]) {
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
  var mn = Object.prototype.hasOwnProperty, Vr = u.unstable_scheduleCallback, Gr = u.unstable_cancelCallback, fp = u.unstable_shouldYield, dp = u.unstable_requestPaint, Gt = u.unstable_now, hp = u.unstable_getCurrentPriorityLevel, Bo = u.unstable_ImmediatePriority, Vo = u.unstable_UserBlockingPriority, uu = u.unstable_NormalPriority, mp = u.unstable_LowPriority, Go = u.unstable_IdlePriority, gp = u.log, pp = u.unstable_setDisableYieldValue, $l = null, Yt = null;
  function Pn(e) {
    if (typeof gp == "function" && pp(e), Yt && typeof Yt.setStrictMode == "function")
      try {
        Yt.setStrictMode($l, e);
      } catch {
      }
  }
  var Xt = Math.clz32 ? Math.clz32 : Ep, vp = Math.log, yp = Math.LN2;
  function Ep(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (vp(e) / yp | 0) | 0;
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
  function bp(e, t) {
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
  function Sp(e, t, n, a, l, i) {
    var s = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var f = e.entanglements, g = e.expirationTimes, N = e.hiddenUpdates;
    for (n = s & ~n; 0 < n; ) {
      var D = 31 - Xt(n), L = 1 << D;
      f[D] = 0, g[D] = -1;
      var S = N[D];
      if (S !== null)
        for (N[D] = null, D = 0; D < S.length; D++) {
          var R = S[D];
          R !== null && (R.lane &= -536870913);
        }
      n &= ~L;
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
  var jn = Math.random().toString(36).slice(2), yt = "__reactFiber$" + jn, jt = "__reactProps$" + jn, tl = "__reactContainer$" + jn, Fo = "__reactEvents$" + jn, Tp = "__reactListeners$" + jn, Ap = "__reactHandles$" + jn, $o = "__reactResources$" + jn, ei = "__reactMarker$" + jn, fu = "__reactLoad$" + jn;
  function du(e) {
    delete e[yt], delete e[jt], delete e[Tp], delete e[Ap];
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
  var _p = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), tf = {}, nf = {};
  function Np(e) {
    return mn.call(nf, e) ? !0 : mn.call(tf, e) ? !1 : _p.test(e) ? nf[e] = !0 : (tf[e] = !0, !1);
  }
  var je = !1;
  function af() {
    var e = je;
    return je = !1, e;
  }
  function hu(e, t, n) {
    if (Np(t))
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
  function wp(e, t, n) {
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
      e._valueTracker = wp(
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
  var Op = /[\n"\\]/g;
  function tn(e) {
    return e.replace(
      Op,
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
  var Cp = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function of(e, t, n) {
    var a = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Cp.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
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
  var Rp = /* @__PURE__ */ new Map([
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
  ]), xp = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function gu(e) {
    return xp.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
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
    return ae(t.prototype, {
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
  }, Eu = xt(ea), li = ae({}, ea, { view: 0, detail: 0 }), Up = xt(li), tc, nc, ii, bu = ae({}, li, {
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
  }), pf = xt(bu), Dp = ae({}, bu, { dataTransfer: 0 }), zp = xt(Dp), Mp = ae({}, li, { relatedTarget: 0 }), ac = xt(Mp), jp = ae({}, ea, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Hp = xt(jp), qp = ae({}, ea, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), Lp = xt(qp), Ip = ae({}, ea, { data: 0 }), vf = xt(Ip), Bp = {
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
  }, Vp = {
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
  }, Gp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Yp(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Gp[e]) ? !!t[e] : !1;
  }
  function lc() {
    return Yp;
  }
  var Xp = ae({}, li, {
    key: function(e) {
      if (e.key) {
        var t = Bp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = vu(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Vp[e.keyCode] || "Unidentified" : "";
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
  }), Qp = xt(Xp), Kp = ae({}, bu, {
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
  }), yf = xt(Kp), Zp = ae({}, ea, { submitter: 0 }), kp = xt(Zp), Jp = ae({}, li, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: lc
  }), Fp = xt(Jp), $p = ae({}, ea, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), Pp = xt($p), Wp = ae({}, bu, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ev = xt(Wp), tv = ae({}, ea, {
    newState: 0,
    oldState: 0,
    source: 0
  }), nv = xt(tv), av = [9, 13, 27, 32], ic = qn && "CompositionEvent" in window, ui = null;
  qn && "documentMode" in document && (ui = document.documentMode);
  var lv = qn && "TextEvent" in window && !ui, Ef = qn && (!ic || ui && 8 < ui && 11 >= ui), bf = " ", Sf = !1;
  function Tf(e, t) {
    switch (e) {
      case "keyup":
        return av.indexOf(t.keyCode) !== -1;
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
  function iv(e, t) {
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
  function uv(e, t) {
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
  var rv = {
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
    return t === "input" ? !!rv[e.type] : t === "textarea";
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
  function cv(e) {
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
      ), hf(cv, t);
    }
  }
  function sv(e, t, n) {
    e === "focusin" ? (Rf(), ri = t, ci = n, ri.attachEvent("onpropertychange", xf)) : e === "focusout" && Rf();
  }
  function ov(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Su(ci);
  }
  function fv(e, t) {
    if (e === "click") return Su(t);
  }
  function dv(e, t) {
    if (e === "input" || e === "change")
      return Su(t);
  }
  function hv(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Kt = typeof Object.is == "function" ? Object.is : hv;
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
  var mv = qn && "documentMode" in document && 11 >= document.documentMode, ol = null, oc = null, oi = null, fc = !1;
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
  var qf = Ha("animationend"), Lf = Ha("animationiteration"), If = Ha("animationstart"), gv = Ha("transitionrun"), pv = Ha("transitionstart"), vv = Ha("transitioncancel"), Bf = Ha("transitionend"), Vf = /* @__PURE__ */ new Map(), hc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  hc.push("scrollEnd");
  function gn(e, t) {
    Vf.set(e, t), Ma(t, [e]);
  }
  var yv = 0;
  function Ln(e, t) {
    if (e.name != null && e.name !== "auto") return e.name;
    if (t.autoName !== null) return t.autoName;
    e = En.identifierPrefix;
    var n = yv++;
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
  function Ev(e, t, n, a) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Ht(e, t, n, a) {
    return new Ev(e, t, n, a);
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
      s = Zy(
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
        case ke:
          s = 8, l |= 24;
          break;
        case gt:
          return e = Ht(12, n, t, l | 2), e.elementType = gt, e.lanes = i, e;
        case F:
          return e = Ht(13, n, t, l), e.elementType = F, e.lanes = i, e;
        case Z:
          return e = Ht(19, n, t, l), e.elementType = Z, e.lanes = i, e;
        case ue:
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
              case q:
                s = 10;
                break e;
              case Rt:
                s = 9;
                break e;
              case V:
                s = 11;
                break e;
              case se:
                s = 14;
                break e;
              case M:
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
    e._currentValue = Tc.current, de(Tc);
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
      } else if (l === j.current) {
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
  var bv = typeof AbortController < "u" ? AbortController : function() {
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
  }, Sv = u.unstable_scheduleCallback, Tv = u.unstable_NormalPriority, at = {
    $$typeof: q,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function _c() {
    return {
      controller: new bv(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function hi(e) {
    e.refCount--, e.refCount === 0 && Sv(Tv, function() {
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
  function Av(e) {
    var t = e.transitionTypes;
    return e.transitionTypes = null, t;
  }
  var gi = null, Nc = 0, Ya = 0, vl = null;
  function _v(e, t) {
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
  function Nv(e, t) {
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
  var Wf = ie.S;
  ie.S = function(e, t) {
    if (Qh = Gt(), typeof t == "object" && t !== null && typeof t.then == "function" && _v(e, t), mi !== null)
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
        var O = T.deletions;
        O === null ? (T.deletions = [E], T.flags |= 16) : O.push(E);
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
    function i(T, E, O) {
      return T.index = O, e ? (O = T.alternate, O !== null ? (O = O.index, O < E ? (T.flags |= 2, E) : O) : (T.flags |= 134217730, E)) : (T.flags |= 1048576, E);
    }
    function s(T) {
      return e && T.alternate === null && (T.flags |= 134217730), T;
    }
    function f(T, E, O, H) {
      return E === null || E.tag !== 6 ? (E = vc(O, T.mode, H), E.return = T, E) : (E = l(E, O), E.return = T, E);
    }
    function g(T, E, O, H) {
      var ne = O.type;
      return ne === We ? (T = D(
        T,
        E,
        O.props.children,
        H,
        O.key
      ), ia(T, O), T) : E !== null && (E.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === M && Qa(ne) === E.type) ? (E = l(E, O.props), ia(E, O), E.return = T, E) : (E = wu(
        O.type,
        O.key,
        O.props,
        null,
        T.mode,
        H
      ), ia(E, O), E.return = T, E);
    }
    function N(T, E, O, H) {
      return E === null || E.tag !== 4 || E.stateNode.containerInfo !== O.containerInfo || E.stateNode.implementation !== O.implementation ? (E = yc(O, T.mode, H), E.return = T, E) : (E = l(E, O.children || []), E.return = T, E);
    }
    function D(T, E, O, H, ne) {
      return E === null || E.tag !== 7 ? (E = La(
        O,
        T.mode,
        H,
        ne
      ), E.return = T, E) : (E = l(E, O), E.return = T, E);
    }
    function L(T, E, O) {
      if (typeof E == "string" && E !== "" || typeof E == "number" || typeof E == "bigint")
        return E = vc(
          "" + E,
          T.mode,
          O
        ), E.return = T, E;
      if (typeof E == "object" && E !== null) {
        switch (E.$$typeof) {
          case Fe:
            return O = wu(
              E.type,
              E.key,
              E.props,
              null,
              T.mode,
              O
            ), ia(O, E), O.return = T, O;
          case we:
            return E = yc(
              E,
              T.mode,
              O
            ), E.return = T, E;
          case M:
            return E = Qa(E), L(T, E, O);
        }
        if (Re(E) || ee(E))
          return E = La(
            E,
            T.mode,
            O,
            null
          ), E.return = T, E;
        if (typeof E.then == "function")
          return L(T, Hu(E), O);
        if (E.$$typeof === q)
          return L(
            T,
            Du(T, E),
            O
          );
        qu(T, E);
      }
      return null;
    }
    function S(T, E, O, H) {
      var ne = E !== null ? E.key : null;
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return ne !== null ? null : f(T, E, "" + O, H);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case Fe:
            return O.key === ne ? g(T, E, O, H) : null;
          case we:
            return O.key === ne ? N(T, E, O, H) : null;
          case M:
            return O = Qa(O), S(T, E, O, H);
        }
        if (Re(O) || ee(O))
          return ne !== null ? null : D(T, E, O, H, null);
        if (typeof O.then == "function")
          return S(
            T,
            E,
            Hu(O),
            H
          );
        if (O.$$typeof === q)
          return S(
            T,
            E,
            Du(T, O),
            H
          );
        qu(T, O);
      }
      return null;
    }
    function R(T, E, O, H, ne) {
      if (typeof H == "string" && H !== "" || typeof H == "number" || typeof H == "bigint")
        return T = T.get(O) || null, f(E, T, "" + H, ne);
      if (typeof H == "object" && H !== null) {
        switch (H.$$typeof) {
          case Fe:
            return T = T.get(
              H.key === null ? O : H.key
            ) || null, g(E, T, H, ne);
          case we:
            return T = T.get(
              H.key === null ? O : H.key
            ) || null, N(E, T, H, ne);
          case M:
            return H = Qa(H), R(
              T,
              E,
              O,
              H,
              ne
            );
        }
        if (Re(H) || ee(H))
          return T = T.get(O) || null, D(E, T, H, ne, null);
        if (typeof H.then == "function")
          return R(
            T,
            E,
            O,
            Hu(H),
            ne
          );
        if (H.$$typeof === q)
          return R(
            T,
            E,
            O,
            Du(E, H),
            ne
          );
        qu(E, H);
      }
      return null;
    }
    function $(T, E, O, H) {
      for (var ne = null, Ue = null, fe = E, ve = E = 0, ut = null; fe !== null && ve < O.length; ve++) {
        fe.index > ve ? (ut = fe, fe = null) : ut = fe.sibling;
        var De = S(
          T,
          fe,
          O[ve],
          H
        );
        if (De === null) {
          fe === null && (fe = ut);
          break;
        }
        e && fe && De.alternate === null && t(T, fe), E = i(De, E, ve), Ue === null ? ne = De : Ue.sibling = De, Ue = De, fe = ut;
      }
      if (ve === O.length)
        return n(T, fe), Ne && Vn(T, ve), ne;
      if (fe === null) {
        for (; ve < O.length; ve++)
          fe = L(T, O[ve], H), fe !== null && (E = i(
            fe,
            E,
            ve
          ), Ue === null ? ne = fe : Ue.sibling = fe, Ue = fe);
        return Ne && Vn(T, ve), ne;
      }
      for (fe = a(fe); ve < O.length; ve++)
        ut = R(
          fe,
          T,
          ve,
          O[ve],
          H
        ), ut !== null && (e && (De = ut.alternate, De !== null && fe.delete(De.key === null ? ve : De.key)), E = i(
          ut,
          E,
          ve
        ), Ue === null ? ne = ut : Ue.sibling = ut, Ue = ut);
      return e && fe.forEach(function(_a) {
        return t(T, _a);
      }), Ne && Vn(T, ve), ne;
    }
    function re(T, E, O, H) {
      if (O == null) throw Error(c(151));
      for (var ne = null, Ue = null, fe = E, ve = E = 0, ut = null, De = O.next(); fe !== null && !De.done; ve++, De = O.next()) {
        fe.index > ve ? (ut = fe, fe = null) : ut = fe.sibling;
        var _a = S(T, fe, De.value, H);
        if (_a === null) {
          fe === null && (fe = ut);
          break;
        }
        e && fe && _a.alternate === null && t(T, fe), E = i(_a, E, ve), Ue === null ? ne = _a : Ue.sibling = _a, Ue = _a, fe = ut;
      }
      if (De.done)
        return n(T, fe), Ne && Vn(T, ve), ne;
      if (fe === null) {
        for (; !De.done; ve++, De = O.next())
          De = L(T, De.value, H), De !== null && (E = i(De, E, ve), Ue === null ? ne = De : Ue.sibling = De, Ue = De);
        return Ne && Vn(T, ve), ne;
      }
      for (fe = a(fe); !De.done; ve++, De = O.next())
        De = R(fe, T, ve, De.value, H), De !== null && (e && (ut = De.alternate, ut !== null && fe.delete(
          ut.key === null ? ve : ut.key
        )), E = i(De, E, ve), Ue === null ? ne = De : Ue.sibling = De, Ue = De);
      return e && fe.forEach(function(i0) {
        return t(T, i0);
      }), Ne && Vn(T, ve), ne;
    }
    function _e(T, E, O, H) {
      if (typeof O == "object" && O !== null && O.type === We && O.key === null && O.props.ref === void 0 && (O = O.props.children), typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case Fe:
            e: {
              for (var ne = O.key; E !== null; ) {
                if (E.key === ne) {
                  if (ne = O.type, ne === We) {
                    if (E.tag === 7) {
                      n(
                        T,
                        E.sibling
                      ), H = l(
                        E,
                        O.props.children
                      ), ia(H, O), H.return = T, T = H;
                      break e;
                    }
                  } else if (E.elementType === ne || typeof ne == "object" && ne !== null && ne.$$typeof === M && Qa(ne) === E.type) {
                    n(
                      T,
                      E.sibling
                    ), H = l(E, O.props), ia(H, O), H.return = T, T = H;
                    break e;
                  }
                  n(T, E);
                  break;
                } else t(T, E);
                E = E.sibling;
              }
              O.type === We ? (H = La(
                O.props.children,
                T.mode,
                H,
                O.key
              ), ia(H, O), H.return = T, T = H) : (H = wu(
                O.type,
                O.key,
                O.props,
                null,
                T.mode,
                H
              ), ia(H, O), H.return = T, T = H);
            }
            return s(T);
          case we:
            e: {
              for (ne = O.key; E !== null; ) {
                if (E.key === ne)
                  if (E.tag === 4 && E.stateNode.containerInfo === O.containerInfo && E.stateNode.implementation === O.implementation) {
                    n(
                      T,
                      E.sibling
                    ), H = l(E, O.children || []), H.return = T, T = H;
                    break e;
                  } else {
                    n(T, E);
                    break;
                  }
                else t(T, E);
                E = E.sibling;
              }
              H = yc(O, T.mode, H), H.return = T, T = H;
            }
            return s(T);
          case M:
            return O = Qa(O), _e(
              T,
              E,
              O,
              H
            );
        }
        if (Re(O))
          return $(
            T,
            E,
            O,
            H
          );
        if (ee(O)) {
          if (ne = ee(O), typeof ne != "function") throw Error(c(150));
          return O = ne.call(O), re(
            T,
            E,
            O,
            H
          );
        }
        if (typeof O.then == "function")
          return _e(
            T,
            E,
            Hu(O),
            H
          );
        if (O.$$typeof === q)
          return _e(
            T,
            E,
            Du(T, O),
            H
          );
        qu(T, O);
      }
      return typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint" ? (O = "" + O, E !== null && E.tag === 6 ? (n(T, E.sibling), H = l(E, O), H.return = T, T = H) : (n(T, E), H = vc(O, T.mode, H), H.return = T, T = H), s(T)) : n(T, E);
    }
    return function(T, E, O, H) {
      try {
        pi = 0;
        var ne = _e(
          T,
          E,
          O,
          H
        );
        return El = null, ne;
      } catch (fe) {
        if (fe === yl || fe === Mu) throw fe;
        var Ue = Ht(29, fe, null, T.mode);
        return Ue.lanes = H, Ue.return = T, Ue;
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
      var g = f, N = g.next;
      g.next = null, s === null ? i = N : s.next = N, s = g;
      var D = e.alternate;
      D !== null && (D = D.updateQueue, f = D.lastBaseUpdate, f !== s && (f === null ? D.firstBaseUpdate = N : f.next = N, D.lastBaseUpdate = g));
    }
    if (i !== null) {
      var L = l.baseState;
      s = 0, D = N = g = null, f = i;
      do {
        var S = f.lane & -536870913, R = S !== f.lane;
        if (R ? (xe & S) === S : (a & S) === S) {
          S !== 0 && S === Ya && (Uc = !0), D !== null && (D = D.next = {
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: null,
            next: null
          });
          e: {
            var $ = e, re = f;
            S = t;
            var _e = n;
            switch (re.tag) {
              case 1:
                if ($ = re.payload, typeof $ == "function") {
                  L = $.call(_e, L, S);
                  break e;
                }
                L = $;
                break e;
              case 3:
                $.flags = $.flags & -65537 | 128;
              case 0:
                if ($ = re.payload, S = typeof $ == "function" ? $.call(_e, L, S) : $, S == null) break e;
                L = ae({}, L, S);
                break e;
              case 2:
                ua = !0;
            }
          }
          S = f.callback, S !== null && (e.flags |= 64, R && (e.flags |= 8192), R = l.callbacks, R === null ? l.callbacks = [S] : R.push(S));
        } else
          R = {
            lane: S,
            tag: f.tag,
            payload: f.payload,
            callback: f.callback,
            next: null
          }, D === null ? (N = D = R, g = L) : D = D.next = R, s |= S;
        if (f = f.next, f === null) {
          if (f = l.shared.pending, f === null)
            break;
          R = f, f = R.next, R.next = null, l.lastBaseUpdate = R, l.shared.pending = null;
        }
      } while (!0);
      D === null && (g = L), l.baseState = g, l.firstBaseUpdate = N, l.lastBaseUpdate = D, i === null && (l.shared.lanes = 0), ga |= s, e.lanes = s, e.memoizedState = L;
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
    kn = Lu.current, de(sa), de(Lu);
  }
  var bt = en(null), Nt = null;
  function oa(e) {
    var t = e.alternate;
    Le(St, St.current & 1), Le(bt, e), Nt === null && (t === null || sa.current !== null || t.memoizedState !== null) && (Nt = e);
  }
  function Mc(e) {
    Le(St, St.current), Le(bt, e), Nt === null && (Nt = e);
  }
  function od(e) {
    e.tag === 22 ? (Le(St, St.current), Le(bt, e), Nt === null && (Nt = e)) : fa();
  }
  function fa() {
    Le(St, St.current), Le(bt, bt.current);
  }
  function Zt(e) {
    de(bt), Nt === e && (Nt = null), de(St);
  }
  var St = en(0);
  function bi(e, t) {
    Le(bt, bt.current), Le(St, t);
  }
  function jc(e) {
    de(St), de(bt), Nt === e && (Nt = null);
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
  var Xn = 0, Ae = null, Ge = null, lt = null, Bu = !1, bl = !1, ka = !1, Vu = 0, Si = 0, Sl = null, wv = 0;
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
    return Xn = i, Ae = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ie.H = e === null || e.memoizedState === null ? Zd : kd, ka = !1, i = n(a, l), ka = !1, bl && (i = dd(
      t,
      n,
      a,
      l
    )), fd(e), i;
  }
  function fd(e) {
    ie.H = ku;
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
      ie.H = Mv, i = t(n, a);
    } while (bl);
    return i;
  }
  function Ov() {
    var e = ie.H, t = e.useState()[0];
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
    return Si += 1, Sl === null && (Sl = []), e = nd(Sl, e, t), t = Ae, (lt === null ? t.memoizedState : lt.next) === null && (t = t.alternate, ie.H = t === null || t.memoizedState === null ? Zd : kd), e;
  }
  function Yu(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Ti(e);
      if (e.$$typeof === Y) return;
      if (e.$$typeof === q) return Et(e);
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
      var f = s = null, g = null, N = t, D = !1;
      do {
        var L = N.lane & -536870913;
        if (L !== N.lane ? (xe & L) === L : (Xn & L) === L) {
          var S = N.revertLane;
          if (S === 0)
            g !== null && (g = g.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null
            }), L === Ya && (D = !0);
          else if ((Xn & S) === S) {
            N = N.next, S === Ya && (D = !0);
            continue;
          } else
            L = {
              lane: 0,
              revertLane: N.revertLane,
              gesture: null,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null
            }, g === null ? (f = g = L, s = i) : g = g.next = L, Ae.lanes |= S, ga |= S;
          L = N.action, ka && n(i, L), i = N.hasEagerState ? N.eagerState : n(i, L);
        } else
          S = {
            lane: L,
            revertLane: N.revertLane,
            gesture: N.gesture,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null
          }, g === null ? (f = g = S, s = i) : g = g.next = S, Ae.lanes |= L, ga |= L;
        N = N.next;
      } while (N !== null && N !== t);
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
  function Cv(e, t, n, a, l) {
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
      ie.T !== null ? n(!0) : i.isTransition = !1, a(i), n = t.pending, n === null ? (i.next = t.pending = i, bd(t, i)) : (i.next = n.next, t.pending = n.next = i);
    }
  }
  function bd(e, t) {
    var n = t.action, a = t.payload, l = e.state;
    if (t.isTransition) {
      var i = ie.T, s = {};
      s.types = i !== null ? i.types : null, ie.T = s;
      try {
        var f = n(l, a), g = ie.S;
        g !== null && g(s, f), Sd(e, t, f);
      } catch (N) {
        Qc(e, t, N);
      } finally {
        i !== null && s.types !== null && (i.types = s.types), ie.T = i;
      }
    } else
      try {
        i = n(l, a), Sd(e, t, i);
      } catch (N) {
        Qc(e, t, N);
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
    }, a.queue = l, n = Cv.bind(
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
      Rv.bind(null, l, n),
      null
    )), [a, i, e];
  }
  function Rv(e, t) {
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
  function xv(e) {
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
    return xv({ ref: t, nextImpl: e }), function() {
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
    var s = ie.T, f = {};
    f.types = s !== null ? s.types : null, ie.T = f, $c(e, !1, t, n);
    try {
      var g = l(), N = ie.S;
      if (N !== null && N(f, g), g !== null && typeof g == "object" && typeof g.then == "function") {
        var D = Nv(
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
    } catch (L) {
      Ai(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: L },
        $t()
      );
    } finally {
      pe.p = i, s !== null && f.types !== null && (s.types = f.types), ie.T = s;
    }
  }
  function Uv() {
  }
  function Jc(e, t, n, a) {
    if (e.tag !== 5) throw Error(c(476));
    var l = Bd(e).queue;
    Id(
      e,
      l,
      t,
      Wt,
      n === null ? Uv : function() {
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
  function Dv(e) {
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
  function zv(e, t, n) {
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
      }, a.queue = e, e = e.dispatch = zv.bind(
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
        n = wv++, t = "_" + t + "r_" + n.toString(32) + "_";
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
      return Ut().memoizedState = Dv.bind(
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
  }, Mv = {
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
    t = e.memoizedState, n = n(a, t), n = n == null ? t : ae({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
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
      n === t && (n = ae({}, n));
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
  function jv(e, t, n, a, l) {
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
            return Nt === null ? pr() : n.alternate === null && tt === 0 && (tt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = l, a === ju ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Ls(e, a, l)), !1;
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
  function Hv(e, t, n) {
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
      var N = i.context, D = n.contextType;
      s = hl, typeof D == "object" && D !== null && (s = Et(D));
      var L = n.getDerivedStateFromProps;
      D = typeof L == "function" || typeof i.getSnapshotBeforeUpdate == "function", f = t.pendingProps !== f, D || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (f || N !== s) && Fd(
        t,
        i,
        a,
        s
      ), ua = !1;
      var S = t.memoizedState;
      i.state = S, Ei(t, a, i, l), yi(), N = t.memoizedState, f || S !== N || ua ? (typeof L == "function" && (Pc(
        t,
        n,
        L,
        a
      ), N = t.memoizedState), (g = ua || Jd(
        t,
        n,
        g,
        a,
        S,
        N,
        s
      )) ? (D || typeof i.UNSAFE_componentWillMount != "function" && typeof i.componentWillMount != "function" || (typeof i.componentWillMount == "function" && i.componentWillMount(), typeof i.UNSAFE_componentWillMount == "function" && i.UNSAFE_componentWillMount()), typeof i.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = N), i.props = a, i.state = N, i.context = s, a = g) : (typeof i.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      i = t.stateNode, Rc(e, t), s = t.memoizedProps, D = Ja(n, s), i.props = D, L = t.pendingProps, S = i.context, N = n.contextType, g = hl, typeof N == "object" && N !== null && (g = Et(N)), f = n.getDerivedStateFromProps, (N = typeof f == "function" || typeof i.getSnapshotBeforeUpdate == "function") || typeof i.UNSAFE_componentWillReceiveProps != "function" && typeof i.componentWillReceiveProps != "function" || (s !== L || S !== g) && Fd(
        t,
        i,
        a,
        g
      ), ua = !1, S = t.memoizedState, i.state = S, Ei(t, a, i, l), yi();
      var R = t.memoizedState;
      s !== L || S !== R || ua || e !== null && e.dependencies !== null && Uu(e.dependencies) ? (typeof f == "function" && (Pc(
        t,
        n,
        f,
        a
      ), R = t.memoizedState), (D = ua || Jd(
        t,
        n,
        D,
        a,
        S,
        R,
        g
      ) || e !== null && e.dependencies !== null && Uu(e.dependencies)) ? (N || typeof i.UNSAFE_componentWillUpdate != "function" && typeof i.componentWillUpdate != "function" || (typeof i.componentWillUpdate == "function" && i.componentWillUpdate(a, R, g), typeof i.UNSAFE_componentWillUpdate == "function" && i.UNSAFE_componentWillUpdate(
        a,
        R,
        g
      )), typeof i.componentDidUpdate == "function" && (t.flags |= 4), typeof i.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && S === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && S === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = R), i.props = a, i.state = R, i.context = g, a = D) : (typeof i.componentDidUpdate != "function" || s === e.memoizedProps && S === e.memoizedState || (t.flags |= 4), typeof i.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && S === e.memoizedState || (t.flags |= 1024), a = !1);
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
        return qv(
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
  function qv(e, t, n, a, l, i, s, f) {
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
  function Lv(e, t, n) {
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
          return it = !1, Lv(
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
              } else if (l === se) {
                t.tag = 14, t = lh(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              } else if (l === q) {
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
        return e === null && Ne && ((l = a = Qe) && (a = Dy(
          a,
          t.type,
          t.pendingProps,
          rn
        ), a !== null ? (t.stateNode = a, ft = t, Qe = sn(a.firstChild), rn = !1, l = !0) : l = !1), l || aa(t)), Me(t), l = t.type, i = t.pendingProps, s = e !== null ? e.memoizedProps : null, a = i.children, Fs(l, i) ? a = null : s !== null && Fs(l, s) && (t.flags |= 32), t.memoizedState !== null && (l = qc(
          e,
          t,
          Ov,
          null,
          null,
          n
        ), Vl._currentValue = l), Al(e, t), st(e, t, a, n), t.child;
      case 6:
        return e === null && Ne && ((e = n = Qe) && (n = zy(
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
        return Hv(e, t, n);
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
  function Iv(e, t, n) {
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
        return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Yn(at), ce(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (pl(t) ? Zn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Sc())), Ke(t), null;
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
        return ce(), e === null && Qs(t.stateNode.containerInfo), t.flags |= 67108864, Ke(t), null;
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
          return a.rendering = e, a.tail = e.sibling, a.renderingStartTime = Gt(), e.sibling = null, i = St.current, i = l ? i & 1 | 2 : i & 1, a.tailMode === "visible" || a.tailMode === "collapsed" || !n || Ne ? bi(t, i) : (n = i, Le(bt, t), Le(St, n), Nt === null && (Nt = t)), Ne && Vn(t, a.treeForkCount), e;
        }
        return Ke(t), null;
      case 22:
      case 23:
        return Zt(t), zc(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ke(t), n = t.updateQueue, n !== null && er(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && de(Xa), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Yn(at), Ke(t), null;
      case 25:
        return null;
      case 30:
        return t.flags |= 33554432, Ke(t), null;
    }
    throw Error(c(156, t.tag));
  }
  function Bv(e, t) {
    switch (Ec(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Yn(at), ce(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
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
        return ce(), null;
      case 10:
        return Yn(t.type), null;
      case 22:
      case 23:
        return Zt(t), zc(), e !== null && de(Xa), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
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
        Yn(at), ce();
        break;
      case 26:
      case 27:
      case 5:
        Ye(t);
        break;
      case 4:
        ce();
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
        Zt(t), zc(), e !== null && de(Xa);
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
              var g = n, N = f;
              try {
                N();
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
                xy,
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
    for (var t = e.return; t !== null && (ds(t) && Uy(e.stateNode, t.stateNode), !fs(t)); )
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
      dy(a, e.type, n, t), a[jt] = t;
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
          var N = i[qt], D = Ws(g);
          (N.view || D.view) && (f = !0);
          var L;
          if (L = (e.flags & 4) === 0)
            if (D.clip) L = !0;
            else {
              L = N.rect;
              var S = D.rect;
              L = L.y !== S.y || L.x !== S.x || L.height !== S.height || L.width !== S.width;
            }
          L && (e.flags |= 4), D.abs ? D = !N.abs : (N = N.rect, D = D.rect, D = N.height !== D.height || N.width !== D.width), D && (e.flags |= 32);
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
  function Vv(e, t, n) {
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
            var f = 0, g = -1, N = -1, D = 0, L = 0, S = e, R = null;
            t: for (; ; ) {
              for (var $; S !== a || i !== 0 && S.nodeType !== 3 || (g = f + i), S !== s || l !== 0 && S.nodeType !== 3 || (N = f + l), S.nodeType === 3 && (f += S.nodeValue.length), ($ = S.firstChild) !== null; )
                R = S, S = $;
              for (; ; ) {
                if (S === e) break t;
                if (R === a && ++D === i && (g = f), R === s && ++L === l && (N = f), ($ = S.nextSibling) !== null) break;
                S = R, R = S.parentNode;
              }
              S = $;
            }
            a = g === -1 || N === -1 ? null : { start: g, end: N };
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
        Un(e, n), a & 4 && Hh(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Wv.bind(
          null,
          n
        ), My(e, n))));
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
  var Je = null, Lt = !1;
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
        var a = Je, l = Lt;
        Ea(n.type) && (Je = n.stateNode, Lt = !1), pn(
          e,
          t,
          n
        ), Lm(
          n.stateNode,
          n.type,
          n.memoizedProps
        ), Je = a, Lt = l;
        break;
      case 5:
        qe || Tt(n, t), Oi(n);
      case 6:
        if (n.tag === 6 && Oi(n), a = Je, l = Lt, Je = null, pn(
          e,
          t,
          n
        ), Je = a, Lt = l, Je !== null)
          if (Lt)
            try {
              (Je.nodeType === 9 ? Je.body : Je.nodeName === "HTML" ? Je.ownerDocument.body : Je).removeChild(n.stateNode), je = !0;
            } catch (i) {
              Be(
                n,
                t,
                i
              );
            }
          else
            try {
              Je.removeChild(n.stateNode), je = !0;
            } catch (i) {
              Be(
                n,
                t,
                i
              );
            }
        break;
      case 18:
        Je !== null && (Lt ? (e = Je, Am(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), Yl(e)) : Am(Je, n.stateNode));
        break;
      case 4:
        a = Je, l = Lt, Je = n.stateNode.containerInfo, Lt = !0, pn(
          e,
          t,
          n
        ), Je = a, Lt = l;
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
  function Gv(e) {
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
    var n = Gv(e);
    t.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var l = ey.bind(null, e, a);
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
                Je = g.stateNode, Lt = !1;
                break e;
              }
              break;
            case 5:
              Je = g.stateNode, Lt = !1;
              break e;
            case 3:
            case 4:
              Je = g.stateNode.containerInfo, Lt = !0;
              break e;
          }
          g = g.return;
        }
        if (Je === null) throw Error(c(160));
        Mh(s, f, i), Je = null, Lt = !1, s = i.alternate, s !== null && (s.return = null), i.return = null;
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
        var f = dt, g = qe, N = Rn;
        dt = f || i, Rn = N || i, qe = g || s, Dt(t, e, n), qe = g, Rn = N, dt = f, zt(e), l & 8192 && (t = e.stateNode, t._visibility = i ? t._visibility & -2 : t._visibility | 1, !i || a === null || s || dt || qe || (t = s || qe, n = dt, a = qe, dt = i || dt, qe = t, ha(e, 2), dt = n, qe = a), !i && Rn || _s(e, i)), l & 4 && (t = e.updateQueue, t !== null && (n = t.retryQueue, n !== null && (t.retryQueue = null, cr(e, n))));
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
            var N = n.stateNode;
            n.flags & 32 && (ul(N, ""), n.flags &= -33);
            var D = gs(e);
            nr(
              e,
              D,
              N,
              s
            );
            break;
          case 3:
          case 4:
            var L = n.stateNode.containerInfo, S = gs(e);
            ps(
              e,
              S,
              L,
              s
            );
            break;
          default:
            throw Error(c(161));
        }
      } catch (R) {
        Be(e, e.return, R);
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
              var N = l.shared.hiddenCallbacks;
              if (N !== null)
                for (l.shared.hiddenCallbacks = null, l = 0; l < N.length; l++)
                  rd(N[l], g);
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
          } catch (N) {
            Be(t, t.return, N);
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
      var i = e, s = t, f = n, g = a, N = s.flags;
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
          )), l && N & 2048 && ws(
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
          ), l && N & 2048 && Os(s.alternate, s);
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
        ), e.flags & Fa && (e.memoizedState !== null ? ky(
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
  var Yv = {
    getCacheForType: function(e) {
      var t = Et(at), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return Et(at).controller.signal;
    }
  }, Xv = typeof WeakMap == "function" ? WeakMap : Map, He = 0, Xe = null, Oe = null, xe = 0, Ie = 0, Jt = null, ma = !1, Ol = !1, Cs = !1, kn = 0, tt = 0, ga = 0, Pa = 0, or = 0, Ft = 0, Cl = 0, Ui = null, It = null, Rs = !1, fr = 0, Qh = 0, dr = 1 / 0, hr = null, pa = null, $e = 0, En = null, Wa = null, Dn = 0, xs = 0, Us = null, Kh = null, Rl = null, xl = null, Ul = null, Di = 0, mr = null;
  function $t() {
    return (He & 2) !== 0 && xe !== 0 ? xe & -xe : ie.T !== null ? Vs() : ko();
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
    var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Pl(e, t), l = a ? Zv(e, t) : zs(e, t, !0), i = a;
    do {
      if (l === 0) {
        Ol && !a && va(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, i && !Qv(n)) {
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
  function Jh(e, t, n, a, l, i, s, f, g, N, D, L, S, R) {
    e.timeoutHandle = -1;
    var $ = t.subtreeFlags, re = (i & 335544064) === i;
    if (L = null, (re || $ & 8192 || ($ & 16785408) === 16785408) && (L = {
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
      L
    ), re && ($ = L, re = e.containerInfo, re = (re.nodeType === 9 ? re : re.ownerDocument).__reactViewTransition, re != null && ($.count++, $.waitingForViewTransition = !0, $ = Bi.bind($), re.finished.then($, $))), $ = (i & 62914560) === i ? fr - Gt() : (i & 4194048) === i ? Qh - Gt() : 0, $ = Jy(
      L,
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
          N,
          D,
          L,
          null,
          S,
          R
        )
      ), va(e, i, s, !N);
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
      N,
      D,
      L
    );
  }
  function Qv(e) {
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
    return n !== -1 && (e.timeoutHandle = -1, gy(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Dn = 0, Ds(), Xe = e, Oe = n = Bn(e.current, null), xe = t, Ie = 0, Jt = null, ma = !1, Ol = Pl(e, t), Cs = !1, Cl = Ft = or = Pa = ga = tt = 0, It = Ui = null, Rs = !1, kn = Yo(e, t), Au(), n;
  }
  function Fh(e, t) {
    Ae = null, ie.H = ku, t === yl || t === Mu ? (t = ad(), Ie = 3) : t === Oc ? (t = ad(), Ie = 4) : Ie = t === ts ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Jt = t, Oe === null && (tt = 1, Ju(
      e,
      an(t, e.current)
    ));
  }
  function $h() {
    var e = bt.current;
    return e === null ? !0 : (xe & 4194048) === xe ? Nt === null : (xe & 62914560) === xe || (xe & 536870912) !== 0 ? e === Nt : !1;
  }
  function Ph() {
    var e = ie.H;
    return ie.H = ku, e === null ? ku : e;
  }
  function Wh() {
    var e = ie.A;
    return ie.A = Yv, e;
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
              var N = Ie;
              if (Ie = 0, Jt = null, Ml(e, f, g, N), n && Ol) {
                s = 0;
                break e;
              }
              break;
            default:
              N = Ie, Ie = 0, Jt = null, Ml(e, f, g, N);
          }
        }
        Kv(), s = tt;
        break;
      } catch (D) {
        Fh(e, D);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Gn = Ba = null, He = a, ie.H = l, ie.A = i, Oe === null && (Xe = null, xe = 0, Au()), s;
  }
  function Kv() {
    for (; Oe !== null; ) em(Oe);
  }
  function Zv(e, t) {
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
                      var N = f.return;
                      N !== null ? (Oe = N, vr(N)) : Oe = null;
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
        kv();
        break;
      } catch (D) {
        Fh(e, D);
      }
    while (!0);
    return Gn = Ba = null, ie.H = a, ie.A = l, He = n, Oe !== null ? 0 : (Xe = null, xe = 0, Au(), tt);
  }
  function kv() {
    for (; Oe !== null && !fp(); )
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
      if (jv(
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
      var n = Iv(
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
      var n = Bv(e.alternate, e);
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
  function am(e, t, n, a, l, i, s, f, g, N, D, L) {
    e.cancelPendingCommit = null;
    do
      yr();
    while ($e !== 0);
    if ((He & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      e === Xe && (Oe = Xe = null, xe = 0), Wa = t, En = e, Dn = n, Us = l, Kh = a, Jv(
        e,
        t,
        n,
        s,
        f,
        g,
        L
      );
    }
  }
  function Jv(e, t, n, a, l, i, s) {
    var f = t.lanes | t.childLanes;
    if (xs = f, f |= mc, Sp(
      e,
      n,
      f,
      a,
      l,
      i
    ), xl = null, (n & 335544064) === n ? (Ul = Av(e), a = 10262) : (Ul = null, a = 10256), (t.subtreeFlags & a) !== 0 || (t.flags & a) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, ty(uu, function() {
      return qs(), null;
    })) : (e.callbackNode = null, e.callbackPriority = 0), ar = !1, a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
      a = ie.T, ie.T = null, l = pe.p, pe.p = 2, i = He, He |= 4;
      try {
        Vv(e, t, n);
      } finally {
        He = i, pe.p = l, ie.T = a;
      }
    }
    $e = 1, ar ? Rl = Sy(
      s,
      e.containerInfo,
      Ul,
      Ms,
      js,
      $v,
      Hs,
      qs,
      Fv
    ) : (Ms(), js(), Hs());
  }
  function Fv(e) {
    if ($e !== 0) {
      var t = En.onRecoverableError;
      t(e, { componentStack: null });
    }
  }
  function $v() {
    $e === 3 && ($e = 0, Ih(Wa, En), $e = 4);
  }
  function Ms() {
    if ($e === 1) {
      $e = 0;
      var e = En, t = Wa, n = Dn, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = ie.T, ie.T = null;
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
              var N = g.start, D = g.end;
              if (D === void 0 && (D = N), "selectionStart" in f)
                f.selectionStart = N, f.selectionEnd = Math.min(
                  D,
                  f.value.length
                );
              else {
                var L = f.ownerDocument || document, S = L && L.defaultView || window;
                if (S.getSelection) {
                  var R = S.getSelection(), $ = f.textContent.length, re = Math.min(g.start, $), _e = g.end === void 0 ? re : Math.min(g.end, $);
                  !R.extend && re > _e && (s = _e, _e = re, re = s);
                  var T = Df(
                    f,
                    re
                  ), E = Df(
                    f,
                    _e
                  );
                  if (T && E && (R.rangeCount !== 1 || R.anchorNode !== T.node || R.anchorOffset !== T.offset || R.focusNode !== E.node || R.focusOffset !== E.offset)) {
                    var O = L.createRange();
                    O.setStart(T.node, T.offset), R.removeAllRanges(), re > _e ? (R.addRange(O), R.extend(E.node, E.offset)) : (O.setEnd(E.node, E.offset), R.addRange(O));
                  }
                }
              }
            }
            for (L = [], R = f; R = R.parentNode; )
              R.nodeType === 1 && L.push({
                element: R,
                left: R.scrollLeft,
                top: R.scrollTop
              });
            for (typeof f.focus == "function" && f.focus(), f = 0; f < L.length; f++) {
              var H = L[f];
              H.element.scrollLeft = H.left, H.element.scrollTop = H.top;
            }
          }
          Gl = !!ks, Js = ks = null;
        } finally {
          He = i, pe.p = l, ie.T = a;
        }
      }
      e.current = t, $e = 2;
    }
  }
  function js() {
    if ($e === 2) {
      $e = 0;
      var e = En, t = Wa, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = ie.T, ie.T = null;
        var a = pe.p;
        pe.p = 2;
        var l = He;
        He |= 4;
        try {
          Uh(e, t.alternate, t);
        } finally {
          He = l, pe.p = a, ie.T = n;
        }
      }
      $e = 3;
    }
  }
  function Hs() {
    if ($e === 4 || $e === 3) {
      $e = 0;
      var e = Rl;
      Rl = null, dp();
      var t = En, n = Wa, a = Dn, l = Kh, i = (a & 335544064) === a ? 10262 : 10256;
      if ((n.subtreeFlags & i) !== 0 || (n.flags & i) !== 0 ? $e = 5 : ($e = 0, Wa = En = null, lm(t, t.pendingLanes)), i = t.pendingLanes, i === 0 && (pa = null), Qr(a), n = n.stateNode, Yt && typeof Yt.onCommitFiberRoot == "function")
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
        n = ie.T, i = pe.p, pe.p = 2, ie.T = null;
        try {
          for (var s = t.onRecoverableError, f = 0; f < l.length; f++) {
            var g = l[f];
            s(g.value, {
              componentStack: g.stack
            });
          }
        } finally {
          ie.T = n, pe.p = i;
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
    if ($e !== 5) return !1;
    var e = En, t = xs;
    xs = 0;
    var n = Qr(Dn), a = ie.T, l = pe.p;
    try {
      pe.p = 32 > n ? 32 : n, ie.T = null, n = Us, Us = null;
      var i = En, s = Dn;
      if ($e = 0, Wa = En = null, Dn = 0, (He & 6) !== 0) throw Error(c(331));
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
      pe.p = l, ie.T = a, lm(e, t);
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
      a = e.pingCache = new Xv();
      var l = /* @__PURE__ */ new Set();
      a.set(t, l);
    } else
      l = a.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), a.set(t, l));
    l.has(n) || (Cs = !0, l.add(n), e = Pv.bind(null, e, t, n), t.then(e, e));
  }
  function Pv(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Xe === e && (xe & n) === n && ((tt === 4 || tt === 3 && (xe & 62914560) === xe && 300 > Gt() - fr) && (He & 2) === 0 ? zl(e, 0) : or |= n, Cl === xe && (Cl = 0)), zn(e);
  }
  function um(e, t) {
    t === 0 && (t = Xo()), e = qa(e, t), e !== null && (Wl(e, t), zn(e));
  }
  function Wv(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), um(e, n);
  }
  function ey(e, t) {
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
  function ty(e, t) {
    return Vr(e, t);
  }
  var jl = null, Hl = null, Is = !1, Er = !1, Bs = !1, ya = 0;
  function zn(e) {
    e !== Hl && e.next === null && (Hl === null ? jl = Hl = e : Hl = Hl.next = e), Er = !0, Is || (Is = !0, ay());
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
  function ny() {
    rm();
  }
  function rm() {
    Er = Is = !1;
    var e = 0;
    ya !== 0 && my() && (e = ya);
    for (var t = Gt(), n = null, a = jl; a !== null; ) {
      var l = a.next, i = cm(a, t);
      i === 0 ? (a.next = null, n === null ? jl = l : n.next = l, l === null && (Hl = n)) : (n = a, (e !== 0 || (i & 3) !== 0) && (Er = !0)), a = l;
    }
    $e !== 0 && $e !== 5 || zi(e), ya !== 0 && (ya = 0);
  }
  function cm(e, t) {
    for (var n = e.suspendedLanes, a = e.pingedLanes, l = e.expirationTimes, i = e.pendingLanes & -62914561; 0 < i; ) {
      var s = 31 - Xt(i), f = 1 << s, g = l[s];
      g === -1 ? ((f & n) === 0 || (f & a) !== 0) && (l[s] = bp(f, t)) : g <= t && (e.expiredLanes |= f), i &= ~f;
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
    if ($e !== 0 && $e !== 5)
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
  function ay() {
    py(function() {
      (He & 6) !== 0 ? Vr(
        Bo,
        ny
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
  function ly(e, t, n, a, l) {
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
    var Ys = hc[Gs], iy = Ys.toLowerCase(), uy = Ys[0].toUpperCase() + Ys.slice(1);
    gn(
      iy,
      "on" + uy
    );
  }
  gn(qf, "onAnimationEnd"), gn(Lf, "onAnimationIteration"), gn(If, "onAnimationStart"), gn("dblclick", "onDoubleClick"), gn("focusin", "onFocus"), gn("focusout", "onBlur"), gn(gv, "onTransitionRun"), gn(pv, "onTransitionStart"), gn(vv, "onTransitionCancel"), gn(Bf, "onTransitionEnd"), ll("onMouseEnter", ["mouseout", "mouseover"]), ll("onMouseLeave", ["mouseout", "mouseover"]), ll("onPointerEnter", ["pointerout", "pointerover"]), ll("onPointerLeave", ["pointerout", "pointerover"]), Ma(
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
  ), ry = new Set(
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
            var f = a[s], g = f.instance, N = f.currentTarget;
            if (f = f.listener, g !== i && l.isPropagationStopped())
              break e;
            i = f, l.currentTarget = N;
            try {
              i(l);
            } catch (D) {
              Tu(D);
            }
            l.currentTarget = null, i = g;
          }
        else
          for (s = 0; s < a.length; s++) {
            if (f = a[s], g = f.instance, N = f.currentTarget, f = f.listener, g !== i && l.isPropagationStopped())
              break e;
            i = f, l.currentTarget = N;
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
        n !== "selectionchange" && (ry.has(n) || Xs(n, !1, e), Xs(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[br] || (t[br] = !0, Xs("selectionchange", !1, t));
    }
  }
  function hm(e, t, n, a) {
    switch (ng(t)) {
      case 2:
        var l = Wy;
        break;
      case 8:
        l = e0;
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
      var N = i, D = $r(n), L = [];
      e: {
        var S = Vf.get(e);
        if (S !== void 0) {
          var R = Eu, $ = e;
          switch (e) {
            case "keypress":
              if (vu(n) === 0) break e;
            case "keydown":
            case "keyup":
              R = Qp;
              break;
            case "focusin":
              $ = "focus", R = ac;
              break;
            case "focusout":
              $ = "blur", R = ac;
              break;
            case "beforeblur":
            case "afterblur":
              R = ac;
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
              R = pf;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              R = zp;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              R = Fp;
              break;
            case qf:
            case Lf:
            case If:
              R = Hp;
              break;
            case Bf:
              R = Pp;
              break;
            case "scroll":
            case "scrollend":
              R = Up;
              break;
            case "wheel":
              R = ev;
              break;
            case "copy":
            case "cut":
            case "paste":
              R = Lp;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              R = yf;
              break;
            case "submit":
              R = kp;
              break;
            case "toggle":
            case "beforetoggle":
              R = nv;
          }
          var re = (t & 4) !== 0, _e = !re && (e === "scroll" || e === "scrollend"), T = re ? S !== null ? S + "Capture" : null : S;
          re = [];
          for (var E = N, O; E !== null; ) {
            var H = E;
            if (O = H.stateNode, H = H.tag, H !== 5 && H !== 26 && H !== 27 || O === null || T === null || (H = ni(E, T), H != null && re.push(
              ji(E, H, O)
            )), _e) break;
            E = E.return;
          }
          0 < re.length && (S = new R(
            S,
            $,
            null,
            n,
            D
          ), L.push({ event: S, listeners: re }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (R = e === "mouseover" || e === "pointerover", S = e === "mouseout" || e === "pointerout", R && n !== Fr && ($ = n.relatedTarget || n.fromElement) && (za($) || $[tl]))
            break e;
          (S || R) && ($ = D.window === D ? D : (R = D.ownerDocument) ? R.defaultView || R.parentWindow : window, S ? (R = n.relatedTarget || n.toElement, S = N, R = R ? za(R) : null, R !== null && (_e = h(R), re = R.tag, R !== _e || re !== 5 && re !== 27 && re !== 6) && (R = null)) : (S = null, R = N), S !== R && (re = pf, H = "onMouseLeave", T = "onMouseEnter", E = "mouse", (e === "pointerout" || e === "pointerover") && (re = yf, H = "onPointerLeave", T = "onPointerEnter", E = "pointer"), _e = S == null ? $ : ti(S), O = R == null ? $ : ti(R), $ = new re(
            H,
            E + "leave",
            S,
            n,
            D
          ), $.target = _e, $.relatedTarget = O, H = null, za(D) === N && (re = new re(
            T,
            E + "enter",
            R,
            n,
            D
          ), re.target = O, re.relatedTarget = _e, H = re), _e = H, re = S && R ? me(
            S,
            R,
            cy
          ) : null, S !== null && mm(
            L,
            $,
            S,
            re,
            !1
          ), R !== null && _e !== null && mm(
            L,
            _e,
            R,
            re,
            !0
          )));
        }
        e: {
          if (S = N ? ti(N) : window, R = S.nodeName && S.nodeName.toLowerCase(), R === "select" || R === "input" && S.type === "file")
            var ne = wf;
          else if (_f(S))
            if (Of)
              ne = dv;
            else {
              ne = ov;
              var Ue = sv;
            }
          else
            R = S.nodeName, !R || R.toLowerCase() !== "input" || S.type !== "checkbox" && S.type !== "radio" ? N && Jr(N.elementType) && (ne = wf) : ne = fv;
          if (ne && (ne = ne(e, N))) {
            Nf(
              L,
              ne,
              n,
              D
            );
            break e;
          }
          Ue && Ue(e, S, N);
        }
        switch (Ue = N ? ti(N) : window, e) {
          case "focusin":
            (_f(Ue) || Ue.contentEditable === "true") && (ol = Ue, oc = N, oi = null);
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
            fc = !1, jf(L, n, D);
            break;
          case "selectionchange":
            if (mv) break;
          case "keydown":
          case "keyup":
            jf(L, n, D);
        }
        var fe;
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
        ve && (Ef && n.locale !== "ko" && (sl || ve !== "onCompositionStart" ? ve === "onCompositionEnd" && sl && (fe = mf()) : (Wn = D, ec = "value" in Wn ? Wn.value : Wn.textContent, sl = !0)), Ue = Sr(N, ve), 0 < Ue.length && (ve = new vf(
          ve,
          e,
          null,
          n,
          D
        ), L.push({ event: ve, listeners: Ue }), fe ? ve.data = fe : (fe = Af(n), fe !== null && (ve.data = fe)))), (fe = lv ? iv(e, n) : uv(e, n)) && (ve = Sr(N, "onBeforeInput"), 0 < ve.length && (Ue = new vf(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          D
        ), L.push({
          event: Ue,
          listeners: ve
        }), Ue.data = fe)), ly(
          L,
          e,
          N,
          n,
          D
        );
      }
      dm(L, t);
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
  function cy(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function mm(e, t, n, a, l) {
    for (var i = t._reactName, s = []; n !== null && n !== a; ) {
      var f = n, g = f.alternate, N = f.stateNode;
      if (f = f.tag, g !== null && g === a) break;
      f !== 5 && f !== 26 && f !== 27 || N === null || (g = N, l ? (N = ni(n, i), N != null && s.unshift(
        ji(n, N, g)
      )) : l || (N = ni(n, i), N != null && s.push(
        ji(n, N, g)
      ))), n = n.return;
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var sy = /\r\n?/g, oy = /\u0000|\uFFFD/g;
  function gm(e) {
    return (typeof e == "string" ? e : "" + e).replace(sy, `
`).replace(oy, "");
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
          n = Rp.get(n) || n, hu(e, n, a);
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
        var f = i = s = l = null, g = null, N = null;
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
                  N = D;
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
          N,
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
        for (N in n)
          if (n.hasOwnProperty(N) && (a = n[N], a != null))
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, t));
              default:
                Ve(e, t, N, a, n, null);
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
  var fy = {};
  function dy(e, t, n, a) {
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
        var l = null, i = null, s = null, f = null, g = null, N = null, D = null;
        for (R in n) {
          var L = n[R];
          if (n.hasOwnProperty(R) && L != null)
            switch (R) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                g = L;
              default:
                a.hasOwnProperty(R) || Ve(e, t, R, null, a, L);
            }
        }
        for (var S in a) {
          var R = a[S];
          if (L = n[S], a.hasOwnProperty(S) && (R != null || L != null))
            switch (S) {
              case "type":
                R !== L && (je = !0), i = R;
                break;
              case "name":
                R !== L && (je = !0), l = R;
                break;
              case "checked":
                R !== L && (je = !0), N = R;
                break;
              case "defaultChecked":
                R !== L && (je = !0), D = R;
                break;
              case "value":
                R !== L && (je = !0), s = R;
                break;
              case "defaultValue":
                R !== L && (je = !0), f = R;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (R != null)
                  throw Error(c(137, t));
                break;
              default:
                R !== L && Ve(
                  e,
                  t,
                  S,
                  R,
                  a,
                  L
                );
            }
        }
        Zr(
          e,
          s,
          f,
          g,
          N,
          D,
          i,
          l
        );
        return;
      case "select":
        R = s = f = S = null;
        for (i in n)
          if (g = n[i], n.hasOwnProperty(i) && g != null)
            switch (i) {
              case "value":
                break;
              case "multiple":
                R = g;
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
                i !== g && (je = !0), S = i;
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
        t = f, n = s, a = R, S != null ? il(e, !!n, S, !1) : !!a != !!n && (t != null ? il(e, !!n, t, !0) : il(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        R = S = null;
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
                l !== i && (je = !0), S = l;
                break;
              case "defaultValue":
                l !== i && (je = !0), R = l;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (l != null) throw Error(c(91));
                break;
              default:
                l !== i && Ve(e, t, s, l, a, i);
            }
        cf(e, S, R);
        return;
      case "option":
        for (var $ in n)
          S = n[$], n.hasOwnProperty($) && S != null && !a.hasOwnProperty($) && ($ === "selected" ? e.selected = !1 : Ve(
            e,
            t,
            $,
            null,
            a,
            S
          ));
        for (g in a)
          S = a[g], R = n[g], a.hasOwnProperty(g) && S !== R && (S != null || R != null) && (g === "selected" ? (S !== R && (je = !0), e.selected = S && typeof S != "function" && typeof S != "symbol") : Ve(
            e,
            t,
            g,
            S,
            a,
            R
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
        for (var re in n)
          S = n[re], n.hasOwnProperty(re) && S != null && !a.hasOwnProperty(re) && Ve(e, t, re, null, a, S);
        for (N in a)
          if (S = a[N], R = n[N], a.hasOwnProperty(N) && S !== R && (S != null || R != null))
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null)
                  throw Error(c(137, t));
                break;
              default:
                Ve(
                  e,
                  t,
                  N,
                  S,
                  a,
                  R
                );
            }
        return;
      default:
        if (Jr(t)) {
          for (var _e in n)
            S = n[_e], n.hasOwnProperty(_e) && S !== void 0 && !a.hasOwnProperty(_e) && Zs(
              e,
              t,
              _e,
              void 0,
              a,
              S
            );
          for (D in a)
            S = a[D], R = n[D], !a.hasOwnProperty(D) || S === R || S === void 0 && R === void 0 || Zs(
              e,
              t,
              D,
              S,
              a,
              R
            );
          return;
        }
    }
    for (var T in n)
      S = n[T], n.hasOwnProperty(T) && S != null && !a.hasOwnProperty(T) && Ve(e, t, T, null, a, S);
    for (L in a)
      S = a[L], R = n[L], !a.hasOwnProperty(L) || S === R || S == null && R == null || Ve(e, t, L, S, a, R);
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
  function hy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var l = n[a], i = l.transferSize, s = l.initiatorType, f = l.duration;
        if (i && f && vm(s)) {
          for (s = 0, f = l.responseEnd, a += 1; a < n.length; a++) {
            var g = n[a], N = g.startTime;
            if (N > f) break;
            var D = g.transferSize, L = g.initiatorType;
            D && vm(L) && (g = g.responseEnd, s += D * (g < f ? 1 : (f - N) / (g - N)));
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
  function my() {
    var e = window.event;
    return e && e.type === "popstate" ? e === $s ? !1 : ($s = e, !0) : ($s = null, !1);
  }
  var Ps = typeof setTimeout == "function" ? setTimeout : void 0, gy = typeof clearTimeout == "function" ? clearTimeout : void 0, Sm = typeof Promise == "function" ? Promise : void 0, Tm = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Ps, py = typeof queueMicrotask == "function" ? queueMicrotask : typeof Sm < "u" ? function(e) {
    return Sm.resolve(null).then(e).catch(vy);
  } : Ps;
  function vy(e) {
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
  function yy(e, t, n) {
    return n = n.ownerDocument.defaultView, {
      rect: e,
      abs: t.position === "absolute" || t.position === "fixed",
      clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
      view: 0 <= e.bottom && 0 <= e.right && e.top <= n.innerHeight && e.left <= n.innerWidth
    };
  }
  function Ws(e) {
    var t = e.getBoundingClientRect(), n = getComputedStyle(e);
    return yy(t, n, e);
  }
  function Ey(e) {
    return e.documentElement.clientHeight;
  }
  function by(e) {
    this.addEventListener("load", e), this.addEventListener("error", e);
  }
  function Sy(e, t, n, a, l, i, s, f, g) {
    var N = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var D = N.startViewTransition({
        update: function() {
          var S = N.defaultView, R = S.navigation && S.navigation.transition, $ = N.fonts.status;
          a();
          var re = [];
          if ($ === "loaded" && (Ey(N), N.fonts.status === "loading" && re.push(N.fonts.ready)), $ = re.length, e !== null)
            for (var _e = e.suspenseyImages, T = 0, E = 0; E < _e.length; E++) {
              var O = _e[E];
              if (!O.complete) {
                var H = O.getBoundingClientRect();
                if (0 < H.bottom && 0 < H.right && H.top < S.innerHeight && H.left < S.innerWidth) {
                  if (T += Zm(O), T > _r) {
                    re.length = $;
                    break;
                  }
                  O = new Promise(
                    by.bind(O)
                  ), re.push(O);
                }
              }
            }
          if (0 < re.length)
            return S = Promise.race([
              Promise.all(re),
              new Promise(function(ne) {
                return setTimeout(ne, 500);
              })
            ]).then(l, l), (R ? Promise.allSettled([R.finished, S]) : S).then(i, i);
          if (l(), R)
            return R.finished.then(
              i,
              i
            );
          i();
        },
        types: n
      });
      N.__reactViewTransition = D;
      var L = [];
      return D.ready.then(
        function() {
          for (var S = N.documentElement.getAnimations({
            subtree: !0
          }), R = 0; R < S.length; R++) {
            var $ = S[R], re = $.effect, _e = re.pseudoElement;
            if (_e != null && _e.startsWith("::view-transition")) {
              L.push($), $ = re.getKeyframes();
              for (var T = _e = void 0, E = !0, O = 0; O < $.length; O++) {
                var H = $[O], ne = H.width;
                if (_e === void 0) _e = ne;
                else if (_e !== ne) {
                  E = !1;
                  break;
                }
                if (ne = H.height, T === void 0) T = ne;
                else if (T !== ne) {
                  E = !1;
                  break;
                }
                delete H.width, delete H.height, H.transform === "none" && delete H.transform;
              }
              E && _e !== void 0 && T !== void 0 && (re.setKeyframes($), E = getComputedStyle(
                re.target,
                re.pseudoElement
              ), E.width !== _e || E.height !== T) && (E = $[0], E.width = _e, E.height = T, E = $[$.length - 1], E.width = _e, E.height = T, re.setKeyframes($));
            }
          }
          s();
        },
        function(S) {
          N.__reactViewTransition === D && (N.__reactViewTransition = null);
          try {
            typeof S == "object" && S !== null && S.name === "InvalidStateError" && (S.message === "View transition was skipped because document visibility state is hidden." || S.message === "Skipping view transition because document visibility state has become hidden." || S.message === "Skipping view transition because viewport size changed." || S.message === "Transition was aborted because of invalid state") && (S = null), S !== null && g(S);
          } finally {
            a(), l(), s();
          }
        }
      ), D.finished.finally(function() {
        for (var S = 0; S < L.length; S++)
          L[S].cancel();
        N.__reactViewTransition === D && (N.__reactViewTransition = null), f();
      }), D;
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
          Ty,
          e,
          f,
          a
        );
      }
      this._eventListeners = i;
    }
  };
  function Ty(e, t, n, a) {
    return x(e).addEventListener(
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
        Ay,
        e,
        n,
        l
      ), a.splice(t, 1), i !== null && i();
    }
  };
  function Ay(e, t, n, a) {
    return x(e).removeEventListener(
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
    var t = I(
      this._fragmentFiber
    );
    if (t === null) return !0;
    t = x(t);
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
    return e.tag === 6 ? !1 : (e = x(e), jy(e, t));
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
    var e = I(
      this._fragmentFiber
    );
    e !== null && (e = x(e), e = Hi(e).activeElement, e !== null && v(
      this._fragmentFiber.child,
      !1,
      _y,
      e,
      void 0,
      void 0
    ));
  };
  function _y(e, t) {
    return e.tag === 6 ? !1 : (e = x(e), e === t || e.contains(t) ? (t.blur(), !0) : !1);
  }
  Pt.prototype.observeUsing = function(e) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), v(
      this._fragmentFiber.child,
      !1,
      Ny,
      e,
      void 0,
      void 0
    );
  };
  function Ny(e, t) {
    return e.tag === 6 || (e = x(e), t.observe(e)), !1;
  }
  Pt.prototype.unobserveUsing = function(e) {
    var t = this._observers;
    if (t !== null && t.has(e)) {
      t.delete(e), v(
        this._fragmentFiber.child,
        !1,
        wy,
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
  function wy(e, t) {
    return e.tag === 6 || (e = x(e), t.unobserve(e)), !1;
  }
  var bn = [], to = !1;
  function Oy(e, t, n) {
    bn.push({
      fragmentInstance: e,
      observer: t,
      instance: n
    }), to || (to = !0, Hy(function() {
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
      Cy,
      e,
      void 0,
      void 0
    ), e;
  };
  function Cy(e, t) {
    if (e.tag === 6) {
      e = e.stateNode;
      var n = e.ownerDocument.createRange();
      n.selectNodeContents(e), t.push.apply(t, n.getClientRects());
    } else
      e = x(e), t.push.apply(t, e.getClientRects());
    return !1;
  }
  Pt.prototype.getRootNode = function(e) {
    var t = I(
      this._fragmentFiber
    );
    return t === null ? this : x(t).getRootNode(e);
  }, Pt.prototype.compareDocumentPosition = function(e) {
    var t = I(
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
    var a = x(t);
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
      return n === e ? l = Node.DOCUMENT_POSITION_CONTAINS : a & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = A(t)[1], n === null ? l = Node.DOCUMENT_POSITION_PRECEDING : (e = x(n).compareDocumentPosition(
        e
      ), l = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), l |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    t = x(n[0]), l = x(n[n.length - 1]);
    var i = U(this._fragmentFiber) ? t.parentElement : a;
    if (i == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    a = i.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, i = i.compareDocumentPosition(l) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var s = t.compareDocumentPosition(e), f = l.compareDocumentPosition(e), g = s & Node.DOCUMENT_POSITION_CONTAINED_BY || f & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return f = a && i && s & Node.DOCUMENT_POSITION_FOLLOWING && f & Node.DOCUMENT_POSITION_PRECEDING, t = a && t === e || i && l === e || g || f ? Node.DOCUMENT_POSITION_CONTAINED_BY : !a && t === e || !i && l === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : s, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Ry(
      t,
      this._fragmentFiber,
      n[0],
      n[n.length - 1],
      e
    ) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function Ry(e, t, n, a, l) {
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
    return e & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!i) && !(t = i === n) && (t = me(
      n,
      i,
      he
    ), t === null ? t = !1 : (v(
      t,
      !0,
      J,
      i,
      n
    ), i = k, k = null, t = i !== null)), t) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!i) && !(t = i === a) && (t = me(
      a,
      i,
      he
    ), t === null ? t = !1 : (v(
      t,
      !0,
      K,
      i,
      a
    ), i = k, te = k = null, t = i !== null)), t) : !1;
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
      var a = A(
        this._fragmentFiber
      );
      if (a = n ? a[1] || a[0] || I(this._fragmentFiber) : a[0] || a[1], a === null) return;
      if (a.tag === 6) {
        e = x(a), Um(e, n);
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
      l.tag === 6 ? (l = x(l), Um(l, n)) : x(l).scrollIntoView(e), a += n ? -1 : 1;
    }
  };
  function xy(e, t) {
    return e = x(e), Dm(e, t), !1;
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
  function Uy(e, t) {
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
      typeof i.rootMargin == "string" ? Oy(
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
  function Dy(e, t, n, a) {
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
  function zy(e, t, n) {
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
  function My(e, t) {
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
  function jy(e, t) {
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
  function Hy(e) {
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
      n.hasOwnProperty(a) && l != null && Ve(e, t, a, null, fy, l);
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
    f: qy,
    r: Ly,
    D: Iy,
    C: By,
    L: Vy,
    m: Gy,
    X: Xy,
    S: Yy,
    M: Qy
  };
  function qy() {
    var e = Jn.f(), t = gr();
    return e || t;
  }
  function Ly(e) {
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
  function Iy(e) {
    Jn.D(e), Bm("dns-prefetch", e, null);
  }
  function By(e, t) {
    Jn.C(e, t), Bm("preconnect", e, t);
  }
  function Vy(e, t, n) {
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
      if (!(on.has(i) || (e = ae(
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
  function Gy(e, t) {
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
      if (!on.has(i) && (e = ae({ rel: "modulepreload", href: e }, t), on.set(i, e), n.querySelector(l) === null)) {
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
  function Yy(e, t, n) {
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
          e = ae(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = on.get(i)) && ro(e, n);
          var g = s = a.createElement("link");
          ot(g), At(g, "link", e), g._p = new Promise(function(N, D) {
            g.onload = N, g.onerror = D;
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
  function Xy(e, t) {
    Jn.X(e, t);
    var n = Ll;
    if (n && e) {
      var a = al(n).hoistableScripts, l = Bl(e), i = a.get(l);
      i || (i = n.querySelector(Ii(l)), i || (e = ae({ src: e, async: !0 }, t), (t = on.get(l)) && co(e, t), i = n.createElement("script"), ot(i), At(i, "link", e), n.head.appendChild(i)), i = {
        type: "script",
        instance: i,
        count: 1,
        state: null
      }, a.set(l, i));
    }
  }
  function Qy(e, t) {
    Jn.M(e, t);
    var n = Ll;
    if (n && e) {
      var a = al(n).hoistableScripts, l = Bl(e), i = a.get(l);
      i || (i = n.querySelector(Ii(l)), i || (e = ae({ src: e, async: !0, type: "module" }, t), (t = on.get(l)) && co(e, t), i = n.createElement("script"), ot(i), At(i, "link", e), n.head.appendChild(i)), i = {
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
          }, on.set(e, i)), Ky(
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
    return ae({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Ky(e, t, n, a) {
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
          var l = ae({}, n, {
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
          )) ? (t.instance = l, ot(l), l) : (a = n, (l = on.get(i)) && (a = ae({}, n), co(a, l)), e = e.ownerDocument || e, l = e.createElement("script"), ot(l), At(l, "link", a), e.head.appendChild(l), t.instance = l);
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
  function Zy(e, t, n) {
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
    typeof t.decode == "function" && (e.imgCount++, t.complete || (e.imgBytes += Zm(t), e.suspenseyImages.push(t)), e = Fy.bind(e), t.decode().then(e, e));
  }
  function ky(e, t, n, a) {
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
  function Jy(e, t) {
    return e.stylesheets && e.count === 0 && wr(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && wr(e, e.stylesheets), e.unsuspend) {
          var i = e.unsuspend;
          e.unsuspend = null, i();
        }
      }, 6e4 + t);
      0 < e.imgBytes && _r === 0 && (_r = 62500 * hy());
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
  function Fy() {
    this.imgCount--, Jm(this);
  }
  var Nr = null;
  function wr(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Nr = /* @__PURE__ */ new Map(), t.forEach($y, e), Nr = null, Bi.call(e));
  }
  function $y(e, t) {
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
    $$typeof: q,
    Provider: null,
    Consumer: null,
    _currentValue: Wt,
    _currentValue2: Wt,
    _threadCount: 0
  };
  function Py(e, t, n, a, l, i, s, f, g) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Yr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Yr(0), this.hiddenUpdates = Yr(null), this.identifierPrefix = a, this.onUncaughtError = l, this.onCaughtError = i, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = g, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Fm(e, t, n, a, l, i, s, f, g, N, D, L) {
    return e = new Py(
      e,
      t,
      n,
      s,
      g,
      N,
      D,
      L,
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
  function Wy(e, t, n, a) {
    var l = ie.T;
    ie.T = null;
    var i = pe.p;
    try {
      pe.p = 2, fo(e, t, n, a);
    } finally {
      pe.p = i, ie.T = l;
    }
  }
  function e0(e, t, n, a) {
    var l = ie.T;
    ie.T = null;
    var i = pe.p;
    try {
      pe.p = 8, fo(e, t, n, a);
    } finally {
      pe.p = i, ie.T = l;
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
      else if (n0(
        l,
        e,
        t,
        n,
        a
      ))
        a.stopPropagation();
      else if (ag(e, a), t & 4 && -1 < t0.indexOf(e)) {
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
        switch (hp()) {
          case Bo:
            return 2;
          case Vo:
            return 8;
          case uu:
          case mp:
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
  var go = !1, ba = null, Sa = null, Ta = null, Vi = /* @__PURE__ */ new Map(), Gi = /* @__PURE__ */ new Map(), Aa = [], t0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
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
  function n0(e, t, n, a, l) {
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
          if (t = b(n), t !== null) {
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
  function a0() {
    go = !1, ba !== null && Cr(ba) && (ba = null), Sa !== null && Cr(Sa) && (Sa = null), Ta !== null && Cr(Ta) && (Ta = null), Vi.forEach(ig), Gi.forEach(ig);
  }
  function Rr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, go || (go = !0, u.unstable_scheduleCallback(
      u.unstable_NormalPriority,
      a0
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
    return e = w(t), e = e !== null ? z(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var l0 = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: ie,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var Dr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!Dr.isDisabled && Dr.supportsFiber)
      try {
        $l = Dr.inject(
          l0
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
function m0() {
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
  return u(), Eo.exports = h0(), Eo.exports;
}
var g0 = m0();
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
var p0 = 600, v0 = 120, y0 = 4e3, qg = 20, Eg = 4096, bg = 1e4, E0 = /* @__PURE__ */ new Set(["scroll_element", "click_sequence", "drag_element", "press_key"]), b0 = /* @__PURE__ */ new Set([
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
]), Lg = "hana-ui-", S0 = 512, T0 = 1, Sg = /* @__PURE__ */ new WeakMap(), Hr = /* @__PURE__ */ new WeakMap();
function Ql(u) {
  return typeof u == "object" && u !== null && !Array.isArray(u);
}
function Ir(u) {
  return u.nodeType === 9;
}
function Mo(u) {
  return Ir(u) ? u : u.ownerDocument;
}
function A0(u) {
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
function _0(u) {
  const r = u.ownerDocument.defaultView?.HTMLSelectElement;
  return r ? u instanceof r : u.tagName === "SELECT";
}
function N0(u) {
  const r = u.ownerDocument.defaultView?.HTMLAnchorElement;
  return r ? u instanceof r : u.tagName === "A";
}
function Vg(u) {
  if (!Jl(u)) return !0;
  const r = u.ownerDocument.defaultView?.getComputedStyle(u);
  return !r || r.display !== "none" && r.visibility !== "hidden";
}
function w0(u) {
  return Jl(u) ? nu(u) || jo(u) || Bg(u) || _0(u) || N0(u) || u.hasAttribute("contenteditable") || u.hasAttribute("onclick") || ["button", "switch", "textbox", "combobox", "slider", "checkbox", "link"].includes(u.getAttribute("role") ?? "") : !1;
}
function O0(u) {
  const r = u.ownerDocument;
  let o = Sg.get(r);
  o || (o = /* @__PURE__ */ new WeakMap(), Sg.set(r, o));
  const c = o.get(u), d = Hr.get(r);
  if (c && d?.has(c)) return c;
  let h = c;
  if (!h)
    do
      h = `${Lg}${T0++}`;
    while (r.getElementById(h));
  o.set(u, h);
  let p = Hr.get(r);
  if (p || (p = /* @__PURE__ */ new Map(), Hr.set(r, p)), p.size >= S0) {
    const b = p.keys().next().value;
    b && p.delete(b);
  }
  return p.set(h, new WeakRef(u)), h;
}
function C0(u, r) {
  const o = u, c = { tagName: u.tagName.toLowerCase() };
  typeof o.id == "string" && o.id && (c.id = o.id.slice(0, 80)), typeof o.className == "string" && o.className.trim() && (c.className = o.className.trim().slice(0, 120));
  const d = o.textContent?.trim();
  return d && (c.text = d.slice(0, 160)), (nu(u) || jo(u)) && (u.disabled && (c.disabled = !0), u.type && (c.type = u.type)), o.id ? c.elementId = o.id : r && w0(u) && (c.elementId = O0(u)), c;
}
function R0(u, r) {
  const o = [], c = A0(u);
  if (!c) return { outline: o, visibleNodeCount: 0, totalNodeCount: 0, truncated: !1 };
  const d = Mo(u).createTreeWalker(c, 1);
  let h = d.currentNode, p = 0, b = 0;
  for (; h && b < p0; ) {
    if (h.nodeType === 1) {
      const C = h;
      b += 1, Vg(C) && (p += 1, o.length < v0 && o.push(C0(C, r)));
    }
    h = d.nextNode();
  }
  return { outline: o, visibleNodeCount: p, totalNodeCount: b, truncated: h !== null };
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
function x0(u, r, o) {
  const c = typeof r == "string" ? r.slice(0, y0) : "";
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
function U0(u, r) {
  const o = r.scrollX === void 0 ? 0 : qr(r.scrollX, bg), c = r.scrollY === void 0 ? 0 : qr(r.scrollY, bg);
  if (o === null || c === null || o === 0 && c === 0) return { ok: !1, code: "UI_ACTION_SCROLL_INVALID", error: "scroll_element requires bounded non-zero scroll coordinates." };
  const d = r.elementId === void 0 ? Ir(u) ? u.scrollingElement ?? u.documentElement : u : $i(u, r.elementId);
  return !d || !Jl(d) ? { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No visible element matches this elementId." } : (d.scrollLeft += o, d.scrollTop += c, d.dispatchEvent(new Event("scroll", { bubbles: !1 })), { ok: !0, result: { scrollLeft: d.scrollLeft, scrollTop: d.scrollTop } });
}
function D0(u) {
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
function z0(u, r) {
  const o = D0(r);
  if (!o) return { ok: !1, code: "UI_ACTION_SEQUENCE_INVALID", error: "click_sequence requires one to twenty element IDs." };
  let c = 0;
  for (const [d, h] of o.entries()) {
    const p = $i(u, h);
    if (!p) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: `Sequence target ${d + 1} is unavailable.`, result: { completedCount: c, failedIndex: d } };
    const b = Gg(p);
    if (b.ok === !1) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_OPERABLE", error: b.error, result: { completedCount: c, failedIndex: d } };
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
function M0(u, r) {
  const o = $i(u, r.elementId);
  if (!o) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No visible source element matches this elementId." };
  const c = r.deltaX === void 0 ? 0 : qr(r.deltaX, Eg), d = r.deltaY === void 0 ? 0 : qr(r.deltaY, Eg);
  if (c === null || d === null) return { ok: !1, code: "UI_ACTION_DRAG_INVALID", error: "drag_element coordinates must be finite and bounded." };
  const h = r.targetElementId === void 0 ? null : $i(u, r.targetElementId);
  if (r.targetElementId !== void 0 && !h) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No visible target element matches targetElementId." };
  if (!h && c === 0 && d === 0) return { ok: !1, code: "UI_ACTION_DRAG_TARGET_REQUIRED", error: "drag_element requires a target element or non-zero delta." };
  const p = o.getBoundingClientRect(), b = p.left + p.width / 2, C = p.top + p.height / 2, w = h?.getBoundingClientRect(), z = w ? w.left + w.width / 2 : b + c, v = w ? w.top + w.height / 2 : C + d, I = h ?? o;
  _o(o, "pointerdown", b, C, 1), Ao(o, "mousedown", b, C, 1);
  for (const U of [0.25, 0.5, 0.75]) {
    const A = b + (z - b) * U, B = C + (v - C) * U;
    _o(I, "pointermove", A, B, 1), Ao(I, "mousemove", A, B, 1);
  }
  return _o(I, "pointerup", z, v, 0), Ao(I, "mouseup", z, v, 0), { ok: !0, result: { dragged: !0, endX: z, endY: v } };
}
function j0(u, r) {
  const o = r.key === void 0 ? r.keys : [r.key];
  if (!Array.isArray(o) || o.length < 1 || o.length > qg || o.some((C) => typeof C != "string")) return { ok: !1, code: "UI_ACTION_KEY_INVALID", error: "press_key requires supported key names or single characters." };
  const c = o.map((C) => C.trim());
  if (c.some((C) => !(C.length === 1 || b0.has(C)))) return { ok: !1, code: "UI_ACTION_KEY_INVALID", error: "press_key requires supported key names or single characters." };
  const d = Mo(u).activeElement, h = r.elementId === void 0 ? d && Ig(u, d) && Jl(d) ? d : null : $i(u, r.elementId);
  if (!h) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No focused visible element is available for press_key." };
  r.elementId !== void 0 && h.focus();
  const p = h.ownerDocument.defaultView?.KeyboardEvent ?? KeyboardEvent, b = { ctrlKey: r.ctrlKey === !0, metaKey: r.metaKey === !0, altKey: r.altKey === !0, shiftKey: r.shiftKey === !0 };
  for (const C of c)
    h.dispatchEvent(new p("keydown", { bubbles: !0, cancelable: !0, key: C, ...b })), h.dispatchEvent(new p("keyup", { bubbles: !0, cancelable: !0, key: C, ...b }));
  return { ok: !0, result: { pressedKeys: c } };
}
function Yg(u, r, o = !1) {
  const c = Ql(r) && typeof r.action == "string" ? r.action : "";
  if (c === "describe_dom") return { ok: !0, result: R0(u, o) };
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
    const h = x0(d, Ql(r) ? r.text : "", o);
    return h.ok === !0 ? { ok: !0, result: { typed: !0 } } : { ok: !1, code: "UI_ACTION_ELEMENT_NOT_OPERABLE", error: h.error };
  }
  return E0.has(c) && !o ? { ok: !1, code: "UI_ACTION_UNSUPPORTED_FOR_APP_CARD", error: `App cards do not support ${c}.` } : Ql(r) ? c === "scroll_element" ? U0(u, r) : c === "click_sequence" ? z0(u, r) : c === "drag_element" ? M0(u, r) : c === "press_key" ? j0(u, r) : { ok: !1, code: "UI_ACTION_UNKNOWN_ACTION", error: `Unknown UI action: ${c || "(missing)"}.` } : { ok: !1, code: "UI_ACTION_UNKNOWN_ACTION", error: `Unknown UI action: ${c || "(missing)"}.` };
}
var rt = "hana.plugin.ui", ct = 1, H0 = "X-Hana-App-Surface-Session", q0 = "appSurfaceSession", ki = {
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
}, L0 = {
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
function I0(u) {
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
}, B0 = 128;
function au(u) {
  if (typeof u != "string" || u.length === 0 || u.length > B0)
    return !1;
  for (let r = 0; r < u.length; r += 1) {
    const o = u.charCodeAt(r);
    if (o <= 31 || o === 127)
      return !1;
  }
  return !0;
}
function V0(u) {
  return !Tn(u) || !au(u.viewToken) ? { ok: !1, error: "A chrome binding requires a host-minted view token." } : u.resync !== void 0 && typeof u.resync != "boolean" ? { ok: !1, error: "A chrome binding resync flag must be a boolean when present." } : { ok: !0, value: { viewToken: u.viewToken, ...u.resync === void 0 ? {} : { resync: u.resync } } };
}
function G0(u) {
  return !Tn(u) || !au(u.challengeId) ? { ok: !1, error: "A chrome challenge requires a host-minted challenge id." } : { ok: !0, value: { challengeId: u.challengeId } };
}
function Y0(u) {
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
function X0(u) {
  if (!Tn(u))
    return { ok: !1, error: "App chrome action request must be an object." };
  const r = u.kind;
  if (r !== "action" && r !== "tab-select" && r !== "tab-close")
    return { ok: !1, error: 'App chrome action request kind must be "action", "tab-select" or "tab-close".' };
  const o = Y0(u);
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
}, Q0 = 256;
function Pi(u) {
  if (typeof u != "string" || u.length === 0 || u.length > Q0 || u.trim().length === 0)
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
var K0 = /^\/api\/apps\/([^/]+)\/ui(?:\/|$)/, Z0 = /^\/api\/apps\/([^/]+)\/routes\/_runtime\/([^/]+)\/_surface\/([^/]+)\//;
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
  const r = Z0.exec(u);
  if (r) {
    const c = Mr(r[1]), d = Mr(r[2]), h = Mr(r[3]);
    return c === null || d === null || h === null ? null : { appId: c, kind: "runtime" };
  }
  const o = K0.exec(u);
  if (o) {
    const c = Mr(o[1]);
    return c === null ? null : { appId: c, kind: "ui" };
  }
  return null;
}
var k0 = 256;
function Kg(u) {
  if (u !== void 0)
    return typeof u != "string" || u.length === 0 || u.length > k0 || u.includes("\0") || u.trim().length === 0 ? null : u;
}
var J0 = {
  CONTEXT: "hana.surface.context"
}, F0 = /* @__PURE__ */ new Set([
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
  if (typeof u.kind != "string" || !F0.has(u.kind))
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
var $0 = [
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
], P0 = [
  "cards",
  "agentTypes",
  "configuration",
  "settingsTab",
  "page",
  "widget"
], W0 = [
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
], eE = ["restricted", "full-access"];
new Set($0);
new Set(P0);
new Set(W0);
new Set(eE);
var tE = Object.values(ze);
new Set(tE);
var Fi = class extends Error {
  reason;
  constructor(u, r) {
    super(r), this.name = "AppCurrentViewBindingError", this.reason = u;
  }
};
function nE() {
  return `chrome-doc:${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`;
}
function aE(u) {
  return JSON.stringify([u.appId, u.cardInstanceId ?? null, u.instanceKey ?? null]);
}
function lE(u) {
  const r = nE();
  let o = null, c = !1, d, h = !0;
  const p = /* @__PURE__ */ new Set(), b = /* @__PURE__ */ new Set();
  let C = 0;
  const w = () => {
    C += 1;
  }, z = (K) => new Fi("unavailable", K), v = () => new Fi(
    "identity-changed",
    "The current App card identity changed while this view write waited."
  ), I = () => new Fi(
    "token-stale",
    "The held view token is no longer the current document."
  ), U = (K) => {
    p.delete(K), u.targetWindow.clearTimeout(K.timer), K.signal && K.onAbort && K.signal.removeEventListener("abort", K.onAbort);
  }, A = (K, he) => {
    U(K), K.reject(he);
  }, B = (K, he) => {
    const me = o !== K, ae = h;
    o = K, h = !0, (me || !ae) && w();
    for (const we of [...p]) {
      if (U(we), we.identity !== void 0 && we.identity !== d) {
        we.reject(v());
        continue;
      }
      we.resolve(K);
    }
    if (b.size === 0) return;
    const ge = { changed: me, resync: he }, Fe = C;
    for (const we of [...b]) {
      if (c || Fe !== C) return;
      b.has(we) && we.listener(ge);
    }
  };
  return {
    handleHostMessage: (K) => {
      const he = K.type === Zl.CHALLENGE, me = K.type === Zl.BINDING;
      if (!he && !me) return !1;
      if (c) return !0;
      if (he && K.kind === "event") {
        const ae = G0(K.payload);
        return ae.ok === !0 && (u.post({
          protocol: rt,
          version: ct,
          kind: "event",
          type: Zl.ACK,
          payload: { challengeId: ae.value.challengeId, documentNonce: r }
        }), c || u.reannounceReady?.()), !0;
      }
      if (me && K.kind === "event") {
        const ae = V0(K.payload);
        return ae.ok === !0 && B(ae.value.viewToken, ae.value.resync === !0), !0;
      }
      return !0;
    },
    applySurfaceContext: (K) => {
      if (c) return;
      if (K === null) {
        if (!h) return;
        h = !1, w();
        return;
      }
      const he = aE(K);
      if (d !== he) {
        if (d !== void 0) {
          for (const me of [...p]) A(me, v());
          o = null;
        }
        d = he, w();
      }
    },
    currentToken() {
      return !c && h ? o : null;
    },
    waitForToken: (K, he) => c ? Promise.reject(z("The current App card view binding was released.")) : he?.aborted ? Promise.reject(z("The current App card view wait was aborted.")) : o && h ? Promise.resolve(o) : new Promise((me, ae) => {
      const ge = {
        resolve: me,
        reject: ae,
        identity: d,
        timer: u.targetWindow.setTimeout(() => {
          U(ge), ae(z("The host has not bound this App card view; the current view is unavailable here."));
        }, K)
      };
      he && (ge.signal = he, ge.onAbort = () => A(ge, z("The current App card view wait was aborted.")), he.addEventListener("abort", ge.onAbort)), p.add(ge);
    }),
    assertCurrentToken: (K) => {
      if (c) throw z("The current App card view binding was released.");
      if (!h || !o)
        throw z("The current App card view is not writable here right now.");
      if (o !== K) throw I();
    },
    onBinding(K) {
      if (c) return () => {
      };
      const he = { listener: K };
      return b.add(he), () => {
        b.delete(he);
      };
    },
    dispose() {
      if (!c) {
        c = !0, o = null, h = !1;
        for (const K of [...p])
          A(K, z("The current App card view binding was released."));
        p.clear(), b.clear();
      }
    }
  };
}
function iE(u, r) {
  let o = null, c = 0;
  const d = (p) => {
    const b = u();
    b && r({
      protocol: rt,
      version: ct,
      kind: "event",
      type: Zl.SCROLL,
      payload: { scrolled: p, viewToken: b }
    });
  }, h = (p) => {
    const b = o;
    b && (o = null, b.detach(), p && b.scrolled && d(!1));
  };
  return {
    register(p) {
      if (!p || typeof p.scrollTop != "number" || typeof p.addEventListener != "function")
        throw new TypeError("hana.chrome.registerScrollSource requires an element.");
      h(!0);
      const b = ++c, C = p.ownerDocument?.defaultView, w = { generation: b, scrolled: p.scrollTop > 0, detach: () => {
      } }, z = () => {
        if (!o || o.generation !== b) return;
        const U = p.scrollTop > 0;
        U !== o.scrolled && (o.scrolled = U, d(U));
      };
      p.addEventListener("scroll", z, { passive: !0 });
      const v = C?.ResizeObserver, I = v ? new v(z) : null;
      return I?.observe(p), w.detach = () => {
        p.removeEventListener("scroll", z), I?.disconnect();
      }, o = w, w.scrolled && d(!0), () => {
        if (!o || o.generation !== b) return;
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
function uE(u) {
  const r = { requestId: u.requestId, revision: u.revision };
  return u.kind === "action" ? { ...r, kind: "action", actionId: u.actionId } : u.kind === "tab-select" ? { ...r, kind: "tab-select", tabId: u.tabId } : { ...r, kind: "tab-close", tabId: u.tabId };
}
var rE = 1e4;
function cE(u) {
  const r = u.requestTimeoutMs ?? rE, o = u.currentView;
  let c = !1, d = null;
  const h = new AbortController(), p = iE(() => c ? null : o.currentToken(), u.post), b = o.onBinding((x) => {
    c || (x.changed || x.resync) && p.flush();
  }), C = () => Object.assign(
    new Error("The App card business identity changed; this chrome write is stale."),
    { code: Fn.VIEW_STALE }
  ), w = () => Object.assign(
    new Error("The host has not bound this App card view; chrome is unavailable here."),
    { code: Fn.UNAVAILABLE }
  ), z = () => Object.assign(
    new Error("The App chrome view was released."),
    { code: Fn.UNAVAILABLE }
  ), v = (x) => x instanceof Fi ? x.reason === "unavailable" ? w() : C() : x, I = (x, k) => {
    u.post({
      protocol: rt,
      version: ct,
      id: x.id,
      type: x.type,
      ...k
    });
  }, U = (x) => {
    if (x.type !== Zl.ACTION) return !1;
    if (c) return !0;
    if (x.kind !== "request") return !1;
    const k = X0(x.payload);
    if (k.ok === !1)
      return I(x, { kind: "error", error: { code: Fn.BAD_PAYLOAD, message: k.error } }), !0;
    const te = k.value, J = {
      requestId: te.requestId,
      revision: te.revision,
      generation: te.generation,
      viewToken: te.viewToken
    }, K = d;
    if (!K)
      return I(x, {
        kind: "error",
        payload: J,
        error: { code: Fn.ACTION_UNHANDLED, message: "This App has no chrome action handler." }
      }), !0;
    if (te.viewToken !== o.currentToken())
      return I(x, {
        kind: "error",
        payload: J,
        error: { code: Fn.VIEW_STALE, message: "This chrome action belongs to a replaced view." }
      }), !0;
    const he = () => !c && d === K && te.viewToken === o.currentToken();
    return Promise.resolve().then(async () => {
      if (!he()) {
        I(x, {
          kind: "error",
          payload: J,
          error: { code: Fn.VIEW_STALE, message: "This chrome action belongs to a replaced view." }
        });
        return;
      }
      let me;
      try {
        me = await K.fn(uE(te));
      } catch (ae) {
        if (!he()) return;
        I(x, {
          kind: "error",
          payload: J,
          error: {
            code: Fn.ACTION_FAILED,
            message: ae instanceof Error ? ae.message : "The App chrome action handler failed."
          }
        });
        return;
      }
      he() && I(x, {
        kind: "response",
        payload: {
          ...J,
          status: me && me.status === "rejected" ? "rejected" : "handled",
          ...me && typeof me.message == "string" && me.message ? { message: me.message } : {}
        }
      });
    }), !0;
  }, A = () => p.dispose();
  u.targetWindow.addEventListener("pagehide", A);
  const B = (x) => {
    if (c)
      throw Object.assign(new Error(`The App chrome view was released; ${x} is unavailable.`), { code: Fn.UNAVAILABLE });
  };
  return {
    api: {
      set(x, k) {
        const te = k?.timeoutMs ?? r;
        return o.waitForToken(te, h.signal).then(
          (J) => {
            B("hana.chrome.set");
            try {
              o.assertCurrentToken(J);
            } catch (K) {
              throw v(K);
            }
            return u.request(Zl.SET, { description: x, viewToken: J }, { timeoutMs: te });
          },
          (J) => {
            throw c ? z() : v(J);
          }
        );
      },
      onAction(x) {
        if (B("hana.chrome.onAction"), typeof x != "function") throw new TypeError("hana.chrome.onAction requires a handler.");
        const k = { fn: x };
        return d = k, () => {
          d === k && (d = null);
        };
      },
      registerScrollSource(x) {
        return B("hana.chrome.registerScrollSource"), p.register(x);
      }
    },
    handleHostMessage: U,
    dispose() {
      c || (c = !0, h.abort(), u.targetWindow.removeEventListener("pagehide", A), b(), d = null, p.dispose());
    }
  };
}
var sE = 16, oE = 4096, fE = 24 * 1024, mt = class extends Error {
  code;
  constructor(u, r) {
    super(r), this.name = "AppViewStateError", this.code = u;
  }
}, dE = new TextEncoder();
function hE(u) {
  return dE.encode(u).length;
}
function mE(u) {
  if (typeof u != "object" || u === null || Array.isArray(u)) return !1;
  const r = Object.getPrototypeOf(u);
  return r === Object.prototype || r === null;
}
function gE(u) {
  const r = Number(u);
  return !Number.isInteger(r) || r < 0 || String(r) !== u ? null : r;
}
function Zg(u) {
  return u === "input" ? "VIEW_STATE_INVALID_INPUT" : "VIEW_STATE_INVALID_STORAGE";
}
function pE(u, r) {
  const o = Zg(r), c = /* @__PURE__ */ new Set();
  let d = 0;
  const h = (p, b) => {
    if (d += 1, d > oE)
      throw new mt(o, "App view state contains too many values.");
    if (b > sE)
      throw new mt(o, "App view state is nested too deeply.");
    if (p === null) return null;
    const C = typeof p;
    if (C === "string" || C === "boolean") return p;
    if (C === "number") {
      if (!Number.isFinite(p))
        throw new mt(o, "App view state numbers must be finite.");
      return p;
    }
    if (C !== "object")
      throw new mt(o, "App view state must contain only JSON values.");
    const w = p;
    if (c.has(w))
      throw new mt(o, "App view state must not contain cycles.");
    const z = Object.getPrototypeOf(w);
    if (Array.isArray(w)) {
      if (z !== Array.prototype)
        throw new mt(o, "App view state must contain only plain arrays.");
      c.add(w);
      const I = w.length;
      for (const A of Reflect.ownKeys(w)) {
        if (typeof A != "string")
          throw new mt(o, "App view state must not contain symbol keys.");
        if (A === "length") {
          const k = Object.getOwnPropertyDescriptor(w, "length");
          if (k.enumerable || k.get || k.set)
            throw new mt(o, "App view state arrays must expose a plain length.");
          continue;
        }
        const B = gE(A);
        if (B === null || B >= I)
          throw new mt(o, "App view state arrays must not carry extra keys.");
        const x = Object.getOwnPropertyDescriptor(w, A);
        if (!x.enumerable || x.get || x.set)
          throw new mt(o, "App view state arrays must index plain values.");
      }
      const U = [];
      for (let A = 0; A < I; A++) {
        const B = Object.getOwnPropertyDescriptor(w, String(A));
        if (!B)
          throw new mt(o, "App view state must not contain sparse arrays.");
        U.push(h(B.value, b + 1));
      }
      return c.delete(w), U;
    }
    if (z !== Object.prototype && z !== null)
      throw new mt(o, "App view state must contain only plain objects.");
    c.add(w);
    const v = /* @__PURE__ */ Object.create(null);
    for (const I of Reflect.ownKeys(w)) {
      if (typeof I != "string")
        throw new mt(o, "App view state must not contain symbol keys.");
      const U = Object.getOwnPropertyDescriptor(w, I);
      if (!U.enumerable)
        throw new mt(o, "App view state must not contain non-enumerable fields.");
      if (U.get || U.set)
        throw new mt(o, "App view state must not contain accessors.");
      v[I] = h(U.value, b + 1);
    }
    return c.delete(w), v;
  };
  return h(u, 0);
}
function vE(u, r) {
  if (u === null) return null;
  if (!mE(u))
    throw new mt(
      Zg(r),
      "App view state must be a JSON object or null."
    );
  return pE(u, r);
}
function yE(u, r) {
  if (u === null) return null;
  const o = JSON.stringify(u);
  if (hE(o) > fE)
    throw new mt(
      "VIEW_STATE_TOO_LARGE",
      "App view state exceeds the size budget."
    );
  return JSON.parse(o);
}
function Do(u) {
  return yE(vE(u, "input"));
}
var ye = {
  UNAVAILABLE: "VIEW_STATE_UNAVAILABLE",
  VIEW_STALE: "VIEW_STATE_VIEW_STALE",
  RELEASED: "VIEW_STATE_RELEASED",
  INVALID_INPUT: "VIEW_STATE_INVALID_INPUT",
  BAD_RESPONSE: "VIEW_STATE_BAD_RESPONSE"
}, EE = class extends Error {
  code;
  constructor(u, r) {
    super(r), this.name = "AppViewStateRequestError", this.code = u;
  }
}, bE = 1e4;
function Ee(u, r) {
  return new EE(u, r);
}
function SE(u) {
  return {
    viewKind: u.viewKind,
    revision: u.revision,
    state: Do(u.state)
  };
}
function TE(u) {
  const r = u.requestTimeoutMs ?? bE;
  let o = !1, c = 0, d = null;
  const h = /* @__PURE__ */ new Map();
  let p = null, b = null, C = !1;
  const w = (q) => q instanceof Fi ? q.reason === "unavailable" ? Ee(ye.UNAVAILABLE, "The App card view is not writable here right now.") : Ee(ye.VIEW_STALE, "The App card view this operation was bound to is no longer current.") : q, z = (q, V) => {
    !q || q.terminated !== null || (q.terminated = V, q.lifetime.abort());
  }, v = (q) => {
    z(d, q), d = null;
    for (const V of h.values()) V.abort.abort();
    h.clear();
  }, I = (q) => {
    if (o || q === null) return;
    if (q.slot !== "card") {
      v("namespace-changed"), b = null, C = !0, p = null;
      return;
    }
    const V = JSON.stringify([q.appId, q.cardInstanceId, q.instanceKey ?? null]), F = q.viewState?.bindingId ?? null;
    (C && b !== V || F !== null && p !== null && F !== p) && v("namespace-changed"), b = V, C = !0, F !== null && (p = F);
  }, U = (q) => {
    if (!o && q.changed) {
      z(d, "document-changed"), d = null;
      for (const V of h.values())
        V.tokenCaptured && V.abort.abort();
    }
  }, A = u.subscribeContext(I), B = u.currentView.onBinding(U), x = (q) => u.currentView.currentToken() === q, k = (q) => {
    try {
      u.currentView.assertCurrentToken(q);
    } catch (V) {
      throw w(V);
    }
  }, te = (q) => {
    const V = u.getContext();
    if (!V || V.slot !== "card")
      throw Ee(ye.UNAVAILABLE, "The App view-state namespace is not available on this surface.");
    const F = V.viewState;
    if (!F)
      throw Ee(ye.UNAVAILABLE, "The App view-state namespace is not available here right now.");
    if (F.bindingId !== q.bindingId || F.viewKind !== q.viewKind)
      throw Ee(ye.VIEW_STALE, "This view-state handle belongs to a namespace that is no longer current.");
    if (F.available !== !0)
      throw Ee(ye.UNAVAILABLE, "The App view-state namespace is temporarily unavailable.");
  }, J = (q) => q === "document-changed" || q === "namespace-changed" ? Ee(ye.VIEW_STALE, "This view-state handle's view changed before the operation could be adopted.") : Ee(ye.RELEASED, "This view-state handle has been released."), K = (q) => {
    if (o)
      throw Ee(ye.RELEASED, "The App view-state controller was released.");
    if (q.terminated !== null) throw J(q.terminated);
    if (q.lifetime.signal.aborted)
      throw Ee(ye.RELEASED, "This view-state handle has been released.");
    if (d !== q)
      throw Ee(ye.VIEW_STALE, "This view-state handle is no longer the current registration.");
    return k(q.viewToken), te(q), q.viewToken;
  }, he = (q, V) => {
    if (o)
      throw Ee(ye.RELEASED, "The App view-state controller was released.");
    if (q.terminated !== null) throw J(q.terminated);
    if (q.lifetime.signal.aborted)
      throw Ee(ye.RELEASED, "This view-state handle has been released.");
    if (!x(V))
      throw Ee(ye.VIEW_STALE, "The document changed before this view-state reply arrived.");
    const F = u.getContext(), Z = F?.viewState;
    if (!F || F.slot !== "card" || !Z || Z.bindingId !== q.bindingId || Z.viewKind !== q.viewKind)
      throw Ee(ye.VIEW_STALE, "The namespace changed before this view-state reply arrived.");
    if (Z.available !== !0)
      throw Ee(ye.UNAVAILABLE, "The App view-state namespace paused before this reply arrived.");
  }, me = async (q, V, F, Z) => {
    try {
      return await u.request(q, V, { timeoutMs: F });
    } catch (se) {
      if (Z !== null) {
        if (Z.terminated !== null) throw J(Z.terminated);
        if (Z.lifetime.signal.aborted)
          throw Ee(ye.RELEASED, "This view-state handle has been released.");
      }
      throw o ? Ee(ye.RELEASED, "The App view-state controller was released.") : se;
    }
  }, ae = (q, V) => {
    if (V.viewKind !== q)
      throw Ee(ye.BAD_RESPONSE, "The view-state reply carried a different view kind than the operation targeted.");
    let F;
    try {
      F = Do(V.state);
    } catch (Z) {
      throw Z instanceof mt ? Ee(ye.BAD_RESPONSE, "The view-state reply carried a state outside the shared JSON budget.") : Z;
    }
    return { viewKind: q, revision: V.revision, state: F };
  }, ge = async (q, V) => {
    const F = V?.timeoutMs ?? r, Z = K(q), se = await me(Ki.GET, {
      viewToken: Z,
      bindingId: q.bindingId,
      registrationId: q.registrationId
    }, F, q);
    he(q, Z);
    const M = wo(se);
    if (M.ok === !1)
      throw Ee(ye.BAD_RESPONSE, M.error);
    if (!Zi(M.value, {
      viewToken: Z,
      bindingId: q.bindingId,
      registrationId: q.registrationId
    }))
      throw Ee(ye.VIEW_STALE, "This view-state reply answered a different view than the one this handle targets.");
    const P = No(M.value.snapshot);
    if (P.ok === !1)
      throw Ee(ye.BAD_RESPONSE, P.error);
    return ae(q.viewKind, P.value);
  }, Fe = async (q, V, F) => {
    const Z = F?.timeoutMs ?? r, se = AE(V), M = Do(V.state), P = K(q), ue = await me(Ki.SET, {
      viewToken: P,
      bindingId: q.bindingId,
      registrationId: q.registrationId,
      expectedRevision: se,
      state: M
    }, Z, q);
    he(q, P);
    const W = wo(ue);
    if (W.ok === !1)
      throw Ee(ye.BAD_RESPONSE, W.error);
    if (!Zi(W.value, {
      viewToken: P,
      bindingId: q.bindingId,
      registrationId: q.registrationId
    }))
      throw Ee(ye.VIEW_STALE, "This view-state reply answered a different view than the one this handle targets.");
    const y = No(W.value.snapshot);
    if (y.ok === !1)
      throw Ee(ye.BAD_RESPONSE, y.error);
    return ae(q.viewKind, y.value);
  }, we = async (q, V, F) => {
    if (!x(q)) return;
    const Z = u.getContext();
    if (!(!Z || Z.slot !== "card" || Z.viewState?.bindingId !== V))
      try {
        const se = await u.request(Ki.RELEASE, { viewToken: q, bindingId: V, registrationId: F }, { timeoutMs: r }), M = Ng(se);
        (M.ok === !1 || !Zi(M.value, { viewToken: q, bindingId: V, registrationId: F })) && console.error("[hana] App view-state cleanup reply did not confirm the released registration.");
      } catch (se) {
        console.error("[hana] failed to release a superseded App view-state registration:", se instanceof Error ? se.message : se);
      }
  }, We = (q, V) => (q.releasePromise || (q.releasePromise = (async () => {
    const F = V?.timeoutMs ?? r;
    z(q, "released"), d === q && (d = null);
    const Z = u.getContext(), se = Z?.viewState;
    if (!(x(q.viewToken) && Z?.slot === "card" && !!se && se.bindingId === q.bindingId)) return { released: !1 };
    const P = await u.request(Ki.RELEASE, {
      viewToken: q.viewToken,
      bindingId: q.bindingId,
      registrationId: q.registrationId
    }, { timeoutMs: F }), ue = Ng(P);
    if (ue.ok === !1)
      throw Ee(ye.BAD_RESPONSE, ue.error);
    if (!Zi(ue.value, {
      viewToken: q.viewToken,
      bindingId: q.bindingId,
      registrationId: q.registrationId
    }))
      throw Ee(ye.VIEW_STALE, "This view-state release reply answered a different view than the one this handle targets.");
    const W = u.getContext();
    if (!x(q.viewToken) || W?.slot !== "card" || W.viewState?.bindingId !== q.bindingId || W.viewState?.viewKind !== q.viewKind)
      throw Ee(ye.VIEW_STALE, "The namespace changed before this view-state release was confirmed.");
    return { released: ue.value.released };
  })()), q.releasePromise), ke = (q, V, F, Z, se) => {
    const M = new AbortController(), P = {
      viewToken: q,
      bindingId: V,
      viewKind: F,
      registrationId: Z,
      lifetime: M,
      initial: se,
      releasePromise: null,
      terminated: null
    };
    return P.handle = {
      get initial() {
        return SE(P.initial);
      },
      signal: M.signal,
      get: (ue) => ge(P, ue),
      set: (ue, W) => Fe(P, ue, W),
      release: (ue) => We(P, ue)
    }, P;
  };
  return {
    api: { enable: async (q) => {
      const V = q?.timeoutMs ?? r;
      if (o) throw Ee(ye.RELEASED, "The App view-state controller was released.");
      const F = u.getContext();
      if (F && F.slot !== "card")
        throw Ee(ye.UNAVAILABLE, "View-state recovery is only available on an App card surface.");
      const Z = F?.viewState?.bindingId ?? null, se = ++c;
      v("superseded");
      const M = new AbortController(), P = { abort: M, tokenCaptured: !1 };
      h.set(se, P);
      let ue = null;
      try {
        let W;
        try {
          W = await u.currentView.waitForToken(V, M.signal);
        } catch (pe) {
          throw o ? Ee(ye.RELEASED, "The App view-state controller was released.") : M.signal.aborted ? Ee(ye.VIEW_STALE, "A newer view-state enable replaced this one before it was bound.") : w(pe);
        }
        if (P.tokenCaptured = !0, o) throw Ee(ye.RELEASED, "The App view-state controller was released.");
        if (se !== c || M.signal.aborted)
          throw Ee(ye.VIEW_STALE, "A newer view-state enable replaced this one before it was bound.");
        k(W);
        const y = u.getContext(), Y = y?.viewState;
        if (!y || y.slot !== "card" || !Y || Y.available !== !0)
          throw Ee(ye.UNAVAILABLE, "The App view-state namespace is not available here right now.");
        if (Z !== null && Z !== Y.bindingId)
          throw Ee(ye.VIEW_STALE, "The App view-state namespace changed before this enable was sent.");
        k(W);
        const le = await me(Ki.ENABLE, {
          viewToken: W,
          bindingId: Y.bindingId
        }, V, null), ee = wo(le);
        if (ee.ok === !1)
          throw Ee(ye.BAD_RESPONSE, ee.error);
        if (!Zi(ee.value, { viewToken: W, bindingId: Y.bindingId }))
          throw Ee(ye.VIEW_STALE, "This view-state enable reply answered a different view than the one that was enabled.");
        if (ue = { token: W, bindingId: Y.bindingId, registrationId: ee.value.registrationId }, o) throw Ee(ye.RELEASED, "The App view-state controller was released.");
        if (se !== c || M.signal.aborted || !h.has(se))
          throw Ee(ye.VIEW_STALE, "This view-state enable was voided before its reply arrived.");
        if (!x(W))
          throw Ee(ye.VIEW_STALE, "The document changed before this view-state enable reply arrived.");
        const Se = u.getContext();
        if (!Se || Se.slot !== "card" || Se.viewState?.bindingId !== Y.bindingId || Se.viewState?.viewKind !== Y.viewKind)
          throw Ee(ye.VIEW_STALE, "The namespace changed before this view-state enable reply arrived.");
        if (Se.viewState?.available !== !0)
          throw Ee(ye.UNAVAILABLE, "The App view-state namespace paused before this enable was confirmed.");
        const Te = No(ee.value.snapshot);
        if (Te.ok === !1)
          throw Ee(ye.BAD_RESPONSE, Te.error);
        const Re = ae(Y.viewKind, Te.value), ie = ke(W, Y.bindingId, Y.viewKind, ee.value.registrationId, Re);
        return d = ie, ue = null, ie.handle;
      } catch (W) {
        throw ue !== null && await we(ue.token, ue.bindingId, ue.registrationId), W;
      } finally {
        h.delete(se);
      }
    } },
    dispose() {
      if (!o) {
        o = !0, c += 1, z(d, "disposed"), d = null;
        for (const q of h.values()) q.abort.abort();
        h.clear(), A(), B();
      }
    }
  };
}
function AE(u) {
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
    let b;
    if (Array.isArray(d)) {
      const C = [];
      for (let w = 0; w < d.length; w++) {
        if (!Object.prototype.hasOwnProperty.call(d, w)) throw new Error("Input panel JSON must not contain sparse arrays.");
        C.push(o(d[w], h + 1));
      }
      b = C;
    } else {
      const C = /* @__PURE__ */ Object.create(null);
      for (const w of Object.keys(d)) C[w] = o(d[w], h + 1);
      b = C;
    }
    return r.delete(d), b;
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
function _E(u) {
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
function NE(u, r) {
  if (!kl(u) || !kl(u.presentation) || !Number.isSafeInteger(u.presentationRevision)) throw new Error("The input panel presentation response is invalid.");
  const o = $g({ ...r, presentation: u.presentation, presentationRevision: u.presentationRevision });
  return { presentation: o.presentation, presentationRevision: o.presentationRevision };
}
function wE(u) {
  let r = null, o = 0, c = null, d = 0;
  const h = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Set(), b = () => {
    for (const U of p) U(r ? jr(r) : null);
  }, C = () => {
    r = null, o++;
    for (const U of h.values())
      clearTimeout(U.timeout), U.reject(new Error("The input panel binding was replaced."));
    h.clear(), b();
  }, w = (U) => {
    for (const A of h.values())
      clearTimeout(A.timeout), A.reject(new Error(U));
    h.clear();
  }, z = (U, A, B) => u({
    protocol: rt,
    version: ct,
    id: U.id,
    kind: "error",
    type: U.type,
    error: { code: A, message: B }
  });
  function v(U) {
    if (U.kind === "event" && U.type === ki.CONTEXT) {
      if (U.payload === null) C();
      else {
        let J;
        try {
          J = $g(U.payload);
        } catch (he) {
          return C(), console.warn("[hana] invalid input panel context:", he), !0;
        }
        const K = r?.panelId === J.panelId && r.appId === J.appId && r.sessionId === J.sessionId && r.confirmId === J.confirmId && r.status === J.status && r.instanceId === J.instanceId && r.revision === J.revision;
        if (K && r && J.presentationRevision < r.presentationRevision) return !0;
        K || w("The input panel binding was replaced."), r = J, K || o++, b();
      }
      return !0;
    }
    if ((U.kind === "response" || U.kind === "error") && U.type === ki.PRESENTATION && U.id) {
      const J = h.get(U.id);
      if (!J) return !1;
      if (h.delete(U.id), clearTimeout(J.timeout), J.generation !== o)
        J.reject(new Error("The input panel binding was replaced."));
      else if (U.kind === "error") J.reject(new Error(U.error?.message || "The input panel presentation could not be updated."));
      else
        try {
          const K = NE(U.payload, r);
          r && K.presentationRevision >= r.presentationRevision && (r = { ...r, ...K }, b()), J.resolve(K);
        } catch (K) {
          J.reject(K instanceof Error ? K : new Error("The input panel presentation response is invalid."));
        }
      return !0;
    }
    if (U.kind !== "request" || U.type !== ki.SUBMIT) return !1;
    if (!U.id) return !0;
    const A = U.payload, B = r;
    if (!kl(A) || !B || B.status !== "pending" || !B.confirmId || A.panelId !== B.panelId || A.instanceId !== B.instanceId || A.revision !== B.revision)
      return z(U, "INPUT_PANEL_STALE", "This request does not match the active input panel question."), !0;
    const x = c;
    if (!x && B.requestedSchema !== null)
      return z(U, "INPUT_PANEL_SUBMIT_UNHANDLED", "Register hana.inputPanel.onSubmit to provide this question’s answer."), !0;
    const k = o, te = {
      panelId: B.panelId,
      instanceId: B.instanceId,
      revision: B.revision
    };
    return Promise.resolve().then(() => x ? x(jr(B)) : null).then((J) => {
      if (o !== k) {
        z(U, "INPUT_PANEL_STALE", "The input panel changed before its answer was ready.");
        return;
      }
      u({
        protocol: rt,
        version: ct,
        id: U.id,
        kind: "response",
        type: U.type,
        payload: { ...te, value: Wi(J) }
      });
    }).catch((J) => {
      z(U, "INPUT_PANEL_SUBMIT_FAILED", J instanceof Error ? J.message : "The input panel could not provide an answer.");
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
      const A = r, B = _E(U);
      if (!A) throw new Error("The input panel is not ready.");
      const x = o, k = `input-panel-presentation:${A.panelId}:${A.instanceId}:${Date.now().toString(36)}:${++d}`;
      return new Promise((te, J) => {
        const K = setTimeout(() => {
          h.delete(k), J(new Error("The input panel presentation request timed out."));
        }, 1e4);
        h.set(k, { generation: x, resolve: te, reject: J, timeout: K });
        const he = (me) => {
          const ae = h.get(k);
          ae && (h.delete(k), clearTimeout(ae.timeout), ae.reject(me instanceof Error ? me : new Error("The input panel presentation request could not be delivered.")));
        };
        try {
          u({
            protocol: rt,
            version: ct,
            id: k,
            kind: "request",
            type: ki.PRESENTATION,
            payload: { panelId: A.panelId, instanceId: A.instanceId, revision: A.revision, presentationRevision: A.presentationRevision, presentation: B }
          }, he);
        } catch (me) {
          he(me);
        }
        if (o !== x) {
          const me = h.get(k);
          me && (h.delete(k), clearTimeout(me.timeout), me.reject(new Error("The input panel binding was replaced.")));
        }
      });
    }
  }, handleMessage: v, clear: C };
}
var Oa = class extends Error {
  name = "HanaPluginError";
  code;
  details;
  constructor(u) {
    super(u.message), this.code = u.code, this.details = u.details;
  }
}, wg = 0, lu = 60, OE = 240;
function CE() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : (wg += 1, `hana-plugin-${Date.now()}-${wg}`);
}
function RE() {
  if (typeof window > "u")
    throw new Error("@hana/plugin-sdk requires a browser iframe window.");
  return window;
}
var Og = "data-hana-theme-style";
async function xE(u, r) {
  const o = await fetch(r, { credentials: "same-origin" });
  if (!o.ok)
    throw new Error(`hana theme stylesheet request failed with ${o.status}`);
  const c = await o.text(), d = u.head ?? u.documentElement;
  if (!d) throw new Error("hana theme stylesheet has nowhere to attach");
  let h = u.querySelector(`style[${Og}]`);
  h || (h = u.createElement("style"), h.setAttribute(Og, "")), h.textContent = c, d.appendChild(h);
}
function UE(u) {
  if (typeof u != "object" || u === null) return !1;
  const r = u;
  return ["light", "dark"].every((o) => {
    const c = r[o];
    return typeof c == "object" && c !== null && typeof c.theme == "string" && typeof c.cssUrl == "string";
  });
}
function DE(u) {
  const r = new URLSearchParams(u.location.search), o = r.get("hana-theme-appearance"), c = r.get("hana-palette-light-theme"), d = r.get("hana-palette-light-css"), h = r.get("hana-palette-dark-theme"), p = r.get("hana-palette-dark-css");
  return {
    theme: r.get("hana-theme") ?? void 0,
    cssUrl: r.get("hana-css") ?? void 0,
    appearance: o === "light" || o === "dark" ? o : void 0,
    palettes: c && d && h && p ? { light: { theme: c, cssUrl: d }, dark: { theme: h, cssUrl: p } } : void 0
  };
}
function Pg(u, r = lu) {
  return typeof u != "number" || !Number.isFinite(u) ? r : Math.max(0, Math.min(OE, Math.round(u)));
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
function zE(u) {
  const r = new URLSearchParams(u.location.search), o = r.get("hana-visible"), c = !(o === "0" || o === "false"), d = r.get("hana-max-fps"), h = d === null ? NaN : Number(d), p = Number.isFinite(h) ? h : lu;
  return Wg({
    visible: c,
    maxFrameRate: p,
    reason: "initial"
  });
}
function ME(u, r) {
  if (typeof u != "object" || u === null) return null;
  const o = u, c = typeof o.visible == "boolean" ? o.visible : r.visible, d = Pg(
    o.maxFrameRate,
    r.maxFrameRate > 0 ? r.maxFrameRate : lu
  ), h = typeof o.active == "boolean" ? o.active && c && d > 0 : c && d > 0, p = o.motion, b = p === "full" || p === "reduced" || p === "paused" ? p : h ? "full" : "paused", C = typeof o.slot == "string" ? o.slot : r.slot, w = typeof o.reason == "string" ? o.reason : r.reason;
  return {
    visible: c,
    active: h,
    maxFrameRate: h ? d : 0,
    motion: h ? b : "paused",
    ...C === "page" || C === "widget" || C === "card" || C === "settings" || C === "function-panel" || C === "slot" ? { slot: C } : {},
    ...w ? { reason: w } : {}
  };
}
function jE(u, r) {
  if (typeof u != "object" || u === null) return null;
  const o = u.visible;
  return typeof o != "boolean" ? null : Wg({
    visible: o,
    maxFrameRate: o && r.maxFrameRate > 0 ? r.maxFrameRate : lu,
    slot: r.slot,
    reason: "legacy-visibility"
  });
}
function HE(u, r) {
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
function qE(u) {
  if (typeof u != "object" || u === null) return null;
  const r = u, o = Cg(r.width), c = Cg(r.height);
  return !o || !c ? null : { width: o, height: c };
}
function Rg(u) {
  if (u === null) return null;
  if (typeof u == "string") return u;
}
function LE(u) {
  if (typeof u != "object" || u === null || Array.isArray(u)) return;
  const r = u;
  if (Pi(r.bindingId) && !(r.viewKind !== "compact" && r.viewKind !== "detached") && typeof r.available == "boolean")
    return { bindingId: r.bindingId, viewKind: r.viewKind, available: r.available };
}
function IE(u) {
  if (typeof u != "object" || u === null || Array.isArray(u)) return null;
  const r = u, o = typeof r.appId == "string" && r.appId.trim() ? r.appId.trim() : null, c = r.slot, d = r.cardInstanceId;
  if (!o || c !== "card" && c !== "function-panel" && c !== "settings" && c !== "slot" && c !== "input-panel") return null;
  const h = Rg(r.embeddedSessionId), p = Rg(r.originSessionId), b = Kg(r.instanceKey);
  if (b === null) return null;
  const C = LE(r.viewState), w = typeof d == "string" && !!d.trim();
  if (b !== void 0 && !w) return null;
  const z = {};
  return h !== void 0 && (z.embeddedSessionId = h), p !== void 0 && (z.originSessionId = p), b !== void 0 && (z.instanceKey = b), C !== void 0 && (z.viewState = C), c === "settings" || c === "input-panel" ? d === null ? { appId: o, slot: c, cardInstanceId: null, ...z } : null : w ? { appId: o, slot: c, cardInstanceId: d.trim(), ...z } : c !== "card" || d !== null || typeof r.embeddedSessionId != "string" || !r.embeddedSessionId.trim() ? null : { appId: o, slot: c, cardInstanceId: null, ...z };
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
function BE(u) {
  if (typeof u != "object" || u === null || Array.isArray(u)) return null;
  const r = u, o = r.previous === null ? null : xg(r.previous), c = r.current === null ? null : xg(r.current);
  return r.previous !== null && o === null || r.current !== null && c === null || typeof r.timestamp != "number" || !Number.isFinite(r.timestamp) ? null : { previous: o, current: c, timestamp: r.timestamp };
}
function VE(u) {
  if (typeof u != "object" || u === null || Array.isArray(u)) return null;
  const r = u;
  return typeof r.code != "string" || !r.code.trim() || typeof r.message != "string" || !r.message.trim() ? null : new Oa({ code: r.code, message: r.message });
}
function GE(u) {
  return typeof u == "string" ? { url: u } : u;
}
function YE(u) {
  return typeof u == "string" ? { text: u } : u;
}
function ep(u) {
  const r = qo(u.location.pathname || "");
  if (!r)
    throw new Error("App asset/API URL helper requires an App surface route under /api/apps/:appId/ui/ or a scoped service mount.");
  return r.appId;
}
function XE(u, r) {
  if (!r || !["card", "function-panel", "settings", "slot"].includes(r.slot)) return !1;
  try {
    return ep(u) === r.appId;
  } catch {
    return !1;
  }
}
function QE(u) {
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
function KE(u) {
  return new URLSearchParams(u.location.search).get("hana-asset-base") || null;
}
function ZE(u, r) {
  const o = QE(r), c = KE(u);
  if (!c)
    throw new Error(
      "hana.assets.url() requires the host-issued hana-asset-base query parameter: this page was not opened by the host with an asset base; hana.assets.url() only works inside a Hana app surface."
    );
  const d = new URL(c);
  return d.pathname = `${d.pathname.replace(/\/+$/, "")}/${o}`, d.toString();
}
function tp(u) {
  return new URLSearchParams(u.location.search).get(q0) || null;
}
function kE(u) {
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
  for (const C of h) {
    if (!C) throw new Error("Invalid plugin API path.");
    let w;
    try {
      w = decodeURIComponent(C);
    } catch {
      throw new Error("Invalid plugin API path.");
    }
    if (w === "." || w === ".." || w.includes("/") || w.includes("\\"))
      throw new Error("Invalid plugin API path.");
  }
  const p = new URL(`http://hana.local/${o}`);
  return `${h.map((C) => encodeURIComponent(decodeURIComponent(C))).join("/")}${p.search}`;
}
function np(u, r, o = !1) {
  const c = ep(u);
  let d = kE(r);
  if (o && d.startsWith("_runtime/")) {
    const h = tp(u);
    if (!h) throw new Error("hana.api.url for a managed service requires appSurfaceSession in the iframe URL.");
    const p = /^(_runtime\/[^/?]+)\/(.+)$/.exec(d);
    if (!p || p[2].startsWith("_surface/")) throw new Error("Invalid managed service API path.");
    d = `${p[1]}/_surface/${encodeURIComponent(h)}/${p[2]}`;
  }
  return `${u.location.origin}/api/apps/${encodeURIComponent(c)}/routes/${d}`;
}
function JE(u, r, o, c) {
  const d = tp(u);
  if (!d)
    throw new Error("hana.api.fetch requires appSurfaceSession in the iframe URL.");
  const h = u.fetch?.bind(u) ?? globalThis.fetch?.bind(globalThis);
  if (!h)
    throw new Error("hana.api.fetch requires window.fetch.");
  const p = o ?? {}, b = new Headers(p.headers);
  return b.set(H0, d), c && b.set("X-Hana-Document-Binding", c), h(np(u, r), {
    ...p,
    headers: b
  });
}
function FE(u) {
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
function $E(u, r) {
  if (typeof r != "object" || r === null) return !1;
  const o = r;
  return u.kind === "global" ? o.kind === "global" : o.kind === "agent" && o.agentId === u.agentId;
}
function ap(u = {}) {
  const r = u.targetWindow ?? RE(), o = u.parentWindow ?? r.parent, c = jg(r, u.targetOrigin), d = u.requestTimeoutMs ?? 1e4, h = u.idFactory ?? CE, p = wE(W), b = lE({
    targetWindow: r,
    post: W,
    // A host that rebound its bridge to this same document gets a fresh
    // handshake by re-announcing the ready the page already sent.
    reannounceReady: () => {
      we && le(We);
    }
  }), C = cE({
    request: de,
    post: W,
    targetWindow: r,
    currentView: b,
    requestTimeoutMs: d
  }), w = u.followHostTheme !== !1;
  let z = DE(r), v = zE(r), I = null, U = null;
  const A = /* @__PURE__ */ new Set(), B = /* @__PURE__ */ new Set(), x = /* @__PURE__ */ new Set(), k = /* @__PURE__ */ new Set(), te = /* @__PURE__ */ new Set(), J = /* @__PURE__ */ new Set(), K = /* @__PURE__ */ new Set(), he = /* @__PURE__ */ new Set(), me = /* @__PURE__ */ new Set();
  let ae = null, ge = null, Fe = null, we = !1, We, ke = !1, gt = !1, Rt = !1, q = Promise.resolve();
  const V = /* @__PURE__ */ new Map();
  let F = 1, Z = null, se = null, M = null, P = !1;
  function ue(_) {
    if (!w || !_) return;
    const X = r.document;
    X && xE(X, _).catch((j) => {
      if (u.onThemeError) {
        u.onThemeError(j);
        return;
      }
      console.error("[hana] failed to follow host theme", j);
    });
  }
  function W(_, X) {
    if (u.messageTransport) {
      const j = u.messageTransport.postMessage(_);
      j && j.catch(X ?? ((G) => console.error("[hana] host message delivery failed", G)));
    } else o.postMessage(_, c);
  }
  function y(_) {
    if (u.messageTransport) return u.messageTransport.onMessage(_);
    const X = (j) => {
      Hg(j, o, c) && _(j.data);
    };
    return r.addEventListener("message", X), () => r.removeEventListener("message", X);
  }
  function Y(_, X) {
    const j = {
      protocol: rt,
      version: ct,
      kind: "event",
      type: _
    };
    X !== void 0 && (j.payload = X), W(j);
  }
  function le(_) {
    Y("hana.ready", _);
  }
  function ee(_) {
    const X = _ instanceof Oa ? _ : new Oa({
      code: "HOST_ERROR",
      message: _ instanceof Error ? _.message : "Active session subscription failed."
    });
    let j = !1;
    for (const G of me)
      if (G.onError) {
        j = !0;
        try {
          G.onError(X);
        } catch (ce) {
          console.error("[hana] active session error callback failed", ce);
        }
      }
    j || console.error("[hana] active session subscription failed", X);
  }
  function Se() {
    return me.size > 0 && !Rt && !gt;
  }
  function Te() {
    q = q.catch(() => {
    }).then(async () => {
      for (; ke !== Se(); ) {
        if (Se()) {
          try {
            if (await ie(), (await de(zr.SUBSCRIBE)).subscribed !== !0) {
              ke = !1, gt || ee(new Oa({
                code: "HOST_ERROR",
                message: "The host did not establish the active session subscription."
              }));
              return;
            }
            ke = !0;
          } catch (_) {
            ke = !1, ee(_);
            return;
          }
          continue;
        }
        try {
          await ie(), await de(zr.UNSUBSCRIBE);
        } catch (_) {
          ee(_);
        }
        ke = !1;
      }
    });
  }
  function Re(_) {
    const X = r.document?.readyState;
    return X !== "loading" && X !== "interactive" ? Promise.resolve() : new Promise((j, G) => {
      const ce = () => {
        r.clearTimeout(pt), r.removeEventListener("load", Me), r.removeEventListener("pagehide", Ye);
      }, Me = () => {
        ce(), j();
      }, Ye = () => {
        ce(), G(new Oa({
          code: "SURFACE_UNAVAILABLE",
          message: "The App surface unloaded before interactive regions could be registered."
        }));
      }, pt = r.setTimeout(() => {
        ce(), G(new Oa({
          code: "TIMEOUT",
          message: "The App document did not finish loading before interactive regions could be registered."
        }));
      }, _);
      r.addEventListener("load", Me), r.addEventListener("pagehide", Ye);
    });
  }
  function ie(_) {
    return Re(_ ?? d).then(() => {
      le(We);
    });
  }
  function pe(_) {
    const X = r.requestAnimationFrame?.bind(r), j = r.cancelAnimationFrame?.bind(r);
    if (X && j) {
      const ce = X(_);
      return () => j(ce);
    }
    const G = r.setTimeout(() => {
      const ce = r.performance?.now?.() ?? Date.now();
      _(ce);
    }, Math.max(1, Math.round(1e3 / Math.max(v.maxFrameRate, lu))));
    return () => r.clearTimeout(G);
  }
  function Wt() {
    Z && (Z(), Z = null);
  }
  function $n() {
    Z || V.size === 0 || !v.active || v.maxFrameRate <= 0 || (Z = pe((_) => {
      if (Z = null, !v.active || v.maxFrameRate <= 0) return;
      const X = 1e3 / v.maxFrameRate;
      if (se !== null && _ >= se && _ - se < X) {
        $n();
        return;
      }
      se = _;
      const j = Array.from(V.entries());
      for (const [G, ce] of j)
        if (V.delete(G))
          try {
            ce(_);
          } catch (Me) {
            r.setTimeout(() => {
              throw Me;
            }, 0);
          }
      $n();
    }));
  }
  function Mn(_) {
    if (!HE(v, _)) {
      v = _;
      for (const X of x) X({ ...v });
      if (!v.active || v.maxFrameRate <= 0) {
        Wt();
        return;
      }
      $n();
    }
  }
  function en(_) {
    if (typeof _ == "object" && _ !== null && _.protocol === void 0 && _.type === "visibility-changed") {
      const G = jE(
        _.payload,
        v
      );
      G && Mn(G);
      return;
    }
    const X = Ji(_);
    if (!X.ok) return;
    const j = X.value;
    if (!b.handleHostMessage(j) && !C.handleHostMessage(j)) {
      if (p.handleMessage(j)) {
        j.type === ki.CONTEXT && j.payload === null && we && le(We);
        return;
      }
      if (j.kind === "request" && j.type === "hana.document.view-request") {
        const G = typeof j.payload == "object" && j.payload !== null ? j.payload : null, ce = G && typeof G.requestId == "string" ? G.requestId : "", Me = G && typeof G.documentId == "string" ? G.documentId : "", Ye = G && typeof G.viewId == "string" ? G.viewId : "", pt = G?.revision, Mt = G && typeof G.method == "string" ? G.method.trim() : "";
        if (!ce || !Me || !Ye || !Mt || Mt.length > 128 || !Number.isSafeInteger(pt) || Number(pt) < 0) {
          W({
            protocol: rt,
            version: ct,
            id: j.id,
            kind: "error",
            type: j.type,
            error: { code: "DOCUMENT_VIEW_REQUEST_INVALID", message: "Invalid document view request." }
          });
          return;
        }
        if (!Fe) {
          W({
            protocol: rt,
            version: ct,
            id: j.id,
            kind: "error",
            type: j.type,
            error: { code: "DOCUMENT_VIEW_REQUEST_UNHANDLED", message: "The document view cannot handle this request." }
          });
          return;
        }
        const vt = G?.payload, xa = Fe;
        Promise.resolve().then(() => xa({
          requestId: ce,
          documentId: Me,
          viewId: Ye,
          revision: pt,
          method: Mt,
          ...Object.prototype.hasOwnProperty.call(G, "payload") ? { payload: vt } : {}
        })).then((hn) => {
          W({ protocol: rt, version: ct, id: j.id, kind: "response", type: j.type, payload: hn });
        }, (hn) => {
          W({
            protocol: rt,
            version: ct,
            id: j.id,
            kind: "error",
            type: j.type,
            error: { code: "DOCUMENT_VIEW_REQUEST_FAILED", message: hn instanceof Error ? hn.message : "Document view request failed." }
          });
        });
        return;
      }
      if (j.kind === "request" && j.type === "hana.document.request") {
        const G = j.payload, ce = typeof G == "object" && G !== null ? G : null, Me = ce && typeof ce.requestId == "string" ? ce.requestId : "", Ye = ce?.kind, pt = ce?.revision;
        if (!Me || !["save", "prepareClose", "revert", "undo", "redo"].includes(String(Ye)) || !Number.isSafeInteger(pt)) {
          W({
            protocol: rt,
            version: ct,
            id: j.id,
            kind: "error",
            type: j.type,
            error: { code: "DOCUMENT_REQUEST_INVALID", message: "Invalid document request." }
          });
          return;
        }
        if (!ge) {
          W({
            protocol: rt,
            version: ct,
            id: j.id,
            kind: "error",
            type: j.type,
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
          W({ protocol: rt, version: ct, id: j.id, kind: "response", type: j.type, payload: vt });
        }, (vt) => {
          W({
            protocol: rt,
            version: ct,
            id: j.id,
            kind: "error",
            type: j.type,
            error: { code: "DOCUMENT_REQUEST_FAILED", message: vt instanceof Error ? vt.message : "Document request failed." }
          });
        });
        return;
      }
      if (j.kind === "request" && j.type === ze.UI_ACTION) {
        const G = r.document, ce = G ? Yg(G, j.payload, XE(r, U)) : { ok: !1, code: "UI_ACTION_DOCUMENT_UNAVAILABLE", error: "No document is available." };
        ce.ok === !0 ? W({
          protocol: rt,
          version: ct,
          id: j.id,
          kind: "response",
          type: ze.UI_ACTION,
          payload: ce.result
        }) : W({
          protocol: rt,
          version: ct,
          id: j.id,
          kind: "error",
          type: ze.UI_ACTION,
          error: { code: ce.code, message: ce.error, ...ce.result ? { details: ce.result } : {} }
        });
        return;
      }
      if (j.kind === "event") {
        if (j.type === "hana.document.binding") {
          const G = j.payload, ce = typeof G == "object" && G !== null ? G.access : null;
          ae = typeof ce?.bindingId == "string" && ce.bindingId ? ce.bindingId : null;
          return;
        }
        if (j.type === Xl.THEME_CHANGED) {
          if (typeof j.payload != "object" || j.payload === null) return;
          const G = j.payload, ce = typeof G.theme == "string" ? G.theme : z.theme, Me = typeof G.theme == "string" && G.theme !== z.theme;
          z = {
            theme: ce,
            cssUrl: typeof G.cssUrl == "string" ? G.cssUrl : z.cssUrl,
            appearance: G.appearance === "light" || G.appearance === "dark" ? G.appearance : Me ? void 0 : z.appearance,
            palettes: UE(G.palettes) ? G.palettes : Me ? void 0 : z.palettes
          };
          for (const Ye of A) Ye({ ...z });
          ue(z.cssUrl);
          return;
        }
        if (j.type === Xl.SURFACE_ENVELOPE_CHANGED) {
          const G = qE(j.payload);
          if (!G) return;
          I = G;
          for (const ce of B) ce(Oo(I));
          return;
        }
        if (j.type === Xl.SURFACE_RUNTIME_CHANGED) {
          const G = ME(j.payload, v);
          G && Mn(G);
          return;
        }
        if (j.type === J0.CONTEXT) {
          const G = j.payload === null ? null : IE(j.payload);
          if (j.payload !== null && G === null) return;
          const ce = G?.appId !== U?.appId || G?.slot !== U?.slot || G?.cardInstanceId !== U?.cardInstanceId || G?.instanceKey !== U?.instanceKey || G?.embeddedSessionId !== U?.embeddedSessionId || G?.originSessionId !== U?.originSessionId || G?.viewState?.bindingId !== U?.viewState?.bindingId || G?.viewState?.viewKind !== U?.viewState?.viewKind || G?.viewState?.available !== U?.viewState?.available;
          if (b.applySurfaceContext(G === null ? null : { appId: G.appId, cardInstanceId: G.cardInstanceId, instanceKey: G.instanceKey ?? null }), U = G, ce)
            for (const Me of k) Me(U ? Co(U) : null);
          return;
        }
        if (j.type === _g.ACTIVE_CHANGED) {
          if (gt) return;
          const G = BE(j.payload);
          if (!G) return;
          for (const ce of me) ce.callback(G);
          return;
        }
        if (j.type === _g.ERROR) {
          const G = VE(j.payload);
          if (!G) return;
          ke = !1, gt = !0, ee(G), Te();
          return;
        }
        if (j.type === Xl.STORAGE_CHANGED) {
          if (typeof j.payload != "object" || j.payload === null) return;
          const G = j.payload.keys, ce = Array.isArray(G) ? G.filter((Me) => typeof Me == "string") : [];
          for (const Me of te) Me(ce.slice());
          return;
        }
        if (j.type === L0.CHANGED) {
          if (typeof j.payload != "object" || j.payload === null) return;
          const G = j.payload, ce = G.keys, Me = Array.isArray(ce) ? ce.filter((Ye) => typeof Ye == "string") : [];
          for (const Ye of J)
            $E(Ye.scope, G.scope) && Ye.callback(Me.slice());
          return;
        }
        if (j.type === Xl.PANEL_EVENT) {
          if (typeof j.payload != "object" || j.payload === null) return;
          const G = j.payload, ce = typeof G.sectionId == "string" ? G.sectionId : null, Me = G.kind;
          if (!ce || Me !== "select" && Me !== "action" && Me !== "toggle") return;
          const Ye = {
            sectionId: ce,
            kind: Me,
            ...typeof G.itemId == "string" ? { itemId: G.itemId } : {},
            ...typeof G.checked == "boolean" ? { checked: G.checked } : {}
          };
          for (const pt of K) pt(Ye);
          return;
        }
        if (j.type === Xl.PANEL_REFRESH)
          for (const G of he) G();
      }
    }
  }
  y(en), r.addEventListener("pagehide", (_) => {
    p.clear(), Rt = !0, Te(), _?.persisted === !1 && (P = !0, b.dispose(), M?.dispose(), C.dispose());
  }), r.addEventListener("pageshow", () => {
    Rt && (Rt = !1, Te());
  });
  function de(_, X, j = {}) {
    const G = h(), ce = j.timeoutMs ?? d;
    return new Promise((Me, Ye) => {
      let pt = () => {
      };
      const Mt = () => {
        pt(), r.clearTimeout(xa);
      }, vt = (Ua) => {
        const Fl = Ji(Ua);
        if (!Fl.ok) return;
        const mn = Fl.value;
        mn.id !== G || mn.type !== _ || (mn.kind === "response" && (Mt(), Me(mn.payload)), mn.kind === "error" && mn.error && (Mt(), Ye(new Oa(mn.error))));
      }, xa = r.setTimeout(() => {
        Mt(), Ye(new Oa({
          code: "TIMEOUT",
          message: `Plugin host request timed out: ${_}.`
        }));
      }, ce), hn = {
        protocol: rt,
        version: ct,
        id: G,
        kind: "request",
        type: _
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
  function Le(_) {
    return {
      get(X, j) {
        return de(Kl.GET, { scope: _, key: X }, j);
      },
      getAll(X) {
        return de(Kl.GET_ALL, { scope: _ }, X);
      },
      set(X, j, G) {
        return de(Kl.SET, { scope: _, key: X, value: j }, G);
      },
      delete(X, j) {
        return de(Kl.DELETE, { scope: _, key: X }, j);
      },
      keys(X) {
        return de(Kl.KEYS, { scope: _ }, X);
      },
      onChanged(X) {
        if (_.kind === "agent" && !_.agentId)
          throw new Error(
            "hana.storage.agent() with no agentId cannot subscribe with onChanged — a subscription outlives any single request, so pass an explicit agentId to subscribe to a stable scope."
          );
        const j = { scope: _, callback: X };
        return J.add(j), () => {
          J.delete(j);
        };
      }
    };
  }
  const Vt = {
    ready(_) {
      we = !0, We = _, le(_);
    },
    inputPanel: p.api,
    assets: {
      url(_) {
        return ZE(r, _);
      }
    },
    api: {
      url(_) {
        return np(r, _, !0);
      },
      fetch(_, X) {
        return JE(r, _, X, ae);
      }
    },
    ui: {
      resize(_) {
        Y(ze.UI_RESIZE, _);
      }
    },
    theme: {
      getSnapshot() {
        return { ...z };
      },
      subscribe(_) {
        return A.add(_), _({ ...z }), () => {
          A.delete(_);
        };
      }
    },
    envelope: {
      getSnapshot() {
        return I ? Oo(I) : null;
      },
      subscribe(_) {
        return B.add(_), _(I ? Oo(I) : null), () => {
          B.delete(_);
        };
      }
    },
    lifecycle: {
      getSnapshot() {
        return { ...v };
      },
      subscribe(_) {
        return x.add(_), _({ ...v }), () => {
          x.delete(_);
        };
      }
    },
    cards: {
      open(_, X) {
        if (typeof _ != "string" || !_.trim())
          return Promise.reject(new TypeError("hana.cards.open requires a non-empty declared card ID."));
        let j;
        if (X !== void 0) {
          if (typeof X != "object" || X === null || Array.isArray(X))
            return Promise.reject(new TypeError("hana.cards.open options must be an object."));
          if (Object.keys(X).some((ce) => ce !== "instanceKey"))
            return Promise.reject(new TypeError("hana.cards.open options accepts only instanceKey."));
          const G = Kg(X.instanceKey);
          if (G === null)
            return Promise.reject(new TypeError("hana.cards.open instanceKey must be a non-empty string of at most 256 code units without NUL."));
          j = G;
        }
        return de(Qg.OPEN, {
          cardId: _.trim(),
          ...j === void 0 ? {} : { instanceKey: j }
        });
      }
    },
    surface: {
      getContext() {
        return U ? Co(U) : null;
      },
      onContextChanged(_) {
        return k.add(_), _(U ? Co(U) : null), () => {
          k.delete(_);
        };
      },
      setInteractiveRegions(_, X) {
        const j = I0({ regions: _ });
        return j.ok === !1 ? Promise.reject(new TypeError(j.error)) : we ? Re(X?.timeoutMs ?? d).then(() => (le(We), de(Uo.SET_INTERACTIVE_REGIONS, j.value, X))) : de(Uo.SET_INTERACTIVE_REGIONS, j.value, X);
      }
    },
    sessions: {
      getActive(_) {
        return ie(_?.timeoutMs).then(() => de(zr.GET_ACTIVE, void 0, _));
      },
      focus(_, X) {
        return !_ || typeof _.sessionId != "string" || !_.sessionId.trim() ? Promise.reject(new TypeError("hana.sessions.focus requires a non-empty sessionId.")) : ie(X?.timeoutMs).then(() => de(
          zr.FOCUS,
          { sessionId: _.sessionId.trim() },
          X
        ));
      },
      onActiveChanged(_, X) {
        const j = { callback: _, onError: X };
        return gt = !1, me.add(j), Te(), () => {
          me.delete(j) && Te();
        };
      }
    },
    performance: {
      requestAnimationFrame(_) {
        const X = F;
        return F += 1, V.set(X, _), $n(), X;
      },
      cancelAnimationFrame(_) {
        V.delete(_), V.size === 0 && Wt();
      }
    },
    host: {
      request: de
    },
    chrome: C.api,
    toast: {
      show(_, X) {
        return de(ze.TOAST_SHOW, _, X);
      }
    },
    external: {
      open(_, X) {
        return de(ze.EXTERNAL_OPEN, GE(_), X);
      }
    },
    clipboard: {
      writeText(_, X) {
        return de(
          ze.CLIPBOARD_WRITE_TEXT,
          YE(_),
          X
        );
      }
    },
    resources: {
      open(_, X) {
        return de(ze.RESOURCE_OPEN, _, X);
      },
      pick(_ = {}, X) {
        return de(ze.RESOURCE_PICK, _, X);
      },
      saveFile(_, X) {
        return de(ze.RESOURCE_SAVE_FILE, _, X);
      },
      requestAccess(_, X) {
        return de(
          ze.RESOURCE_REQUEST_ACCESS,
          _,
          X
        );
      }
    },
    document: {
      getContext(_) {
        return de("hana.document.get-context", void 0, _);
      },
      read(_) {
        return de("hana.document.read", void 0, _);
      },
      reportStatus(_, X) {
        return de("hana.document.report-status", _, X);
      },
      open(_, X) {
        return de("hana.document.open", _, X);
      },
      rebind(_, X) {
        return de("hana.document.rebind", _, X);
      },
      openDrop(_, X) {
        if (_.defaultPrevented) return Promise.resolve(null);
        const j = _.dataTransfer?.getData("application/x-hana-file-drag") || "";
        if (j) return de("hana.document.open-drop", { dragId: j }, X);
        const G = Array.from(_.dataTransfer?.files || []);
        return G.length !== 1 ? Promise.resolve(null) : de("hana.document.open-drop", { file: G[0] }, X);
      },
      onRequest(_) {
        return ge = _, () => {
          ge === _ && (ge = null);
        };
      },
      onViewRequest(_) {
        return Fe = _, () => {
          Fe === _ && (Fe = null);
        };
      }
    },
    state: {
      get(_, X) {
        const j = typeof _ == "string" && _ ? { key: _ } : {};
        return de(ze.STATE_GET, j, X);
      },
      set(_, X, j) {
        const G = typeof _ == "string" ? { key: _, value: X } : { state: _ };
        return de(ze.STATE_SET, G, j);
      }
    },
    storage: {
      get(_, X) {
        return de(ze.STORAGE_GET, { key: _ }, X);
      },
      getAll(_) {
        return de(ze.STORAGE_GET_ALL, {}, _);
      },
      set(_, X, j) {
        return de(ze.STORAGE_SET, { key: _, value: X }, j);
      },
      delete(_, X) {
        return de(ze.STORAGE_DELETE, { key: _ }, X);
      },
      onChanged(_) {
        return te.add(_), () => {
          te.delete(_);
        };
      },
      global: Le({ kind: "global" }),
      agent(_) {
        return Le({ kind: "agent", agentId: _ });
      }
    },
    emit(_, X, j, G) {
      const ce = {
        name: _,
        userGesture: FE(r)
      };
      return arguments.length >= 2 && (ce.payload = X), typeof j == "string" && j.trim() && (ce.to = j.trim()), de(ze.EMIT, ce, G);
    },
    track(_, X, j) {
      const G = { name: _ };
      return arguments.length >= 2 && (G.payload = X), de(ze.TRACK, G, j);
    },
    panel: {
      set(_, X) {
        return de(ze.PANEL_SET, _, X);
      },
      onEvent(_) {
        return K.add(_), () => {
          K.delete(_);
        };
      },
      onRefresh(_) {
        return he.add(_), () => {
          he.delete(_);
        };
      }
    }
  };
  return Jg(Vt, () => P ? null : (M ??= TE({
    request: de,
    currentView: b,
    getContext: () => U,
    subscribeContext: (_) => (k.add(_), () => {
      k.delete(_);
    }),
    requestTimeoutMs: d
  }), M.api)), Vt;
}
var Ug = null;
function oe() {
  return Ug ??= ap(), Ug;
}
var lp = {
  ready(u) {
    return oe().ready(u);
  },
  inputPanel: {
    getContext() {
      return oe().inputPanel.getContext();
    },
    onContextChanged(u) {
      return oe().inputPanel.onContextChanged(u);
    },
    onSubmit(u) {
      return oe().inputPanel.onSubmit(u);
    },
    setPresentation(u) {
      return oe().inputPanel.setPresentation(u);
    }
  },
  assets: {
    url(u) {
      return oe().assets.url(u);
    }
  },
  api: {
    url(u) {
      return oe().api.url(u);
    },
    fetch(u, r) {
      return oe().api.fetch(u, r);
    }
  },
  ui: {
    resize(u) {
      return oe().ui.resize(u);
    }
  },
  theme: {
    getSnapshot() {
      return oe().theme.getSnapshot();
    },
    subscribe(u) {
      return oe().theme.subscribe(u);
    }
  },
  envelope: {
    getSnapshot() {
      return oe().envelope.getSnapshot();
    },
    subscribe(u) {
      return oe().envelope.subscribe(u);
    }
  },
  lifecycle: {
    getSnapshot() {
      return oe().lifecycle.getSnapshot();
    },
    subscribe(u) {
      return oe().lifecycle.subscribe(u);
    }
  },
  cards: {
    open(u, r) {
      return oe().cards.open(u, r);
    }
  },
  surface: {
    getContext() {
      return oe().surface.getContext();
    },
    onContextChanged(u) {
      return oe().surface.onContextChanged(u);
    },
    setInteractiveRegions(u, r) {
      return oe().surface.setInteractiveRegions(u, r);
    }
  },
  sessions: {
    getActive(u) {
      return oe().sessions.getActive(u);
    },
    focus(u, r) {
      return oe().sessions.focus(u, r);
    },
    onActiveChanged(u, r) {
      return oe().sessions.onActiveChanged(u, r);
    }
  },
  performance: {
    requestAnimationFrame(u) {
      return oe().performance.requestAnimationFrame(u);
    },
    cancelAnimationFrame(u) {
      return oe().performance.cancelAnimationFrame(u);
    }
  },
  host: {
    request(u, r, o) {
      return oe().host.request(u, r, o);
    }
  },
  chrome: {
    set(u, r) {
      return oe().chrome.set(u, r);
    },
    onAction(u) {
      return oe().chrome.onAction(u);
    },
    registerScrollSource(u) {
      return oe().chrome.registerScrollSource(u);
    }
  },
  toast: {
    show(u, r) {
      return oe().toast.show(u, r);
    }
  },
  external: {
    open(u, r) {
      return oe().external.open(u, r);
    }
  },
  clipboard: {
    writeText(u, r) {
      return oe().clipboard.writeText(u, r);
    }
  },
  resources: {
    open(u, r) {
      return oe().resources.open(u, r);
    },
    pick(u, r) {
      return oe().resources.pick(u, r);
    },
    saveFile(u, r) {
      return oe().resources.saveFile(u, r);
    },
    requestAccess(u, r) {
      return oe().resources.requestAccess(u, r);
    }
  },
  document: {
    getContext(u) {
      return oe().document.getContext(u);
    },
    read(u) {
      return oe().document.read(u);
    },
    reportStatus(u, r) {
      return oe().document.reportStatus(u, r);
    },
    open(u, r) {
      return oe().document.open(u, r);
    },
    rebind(u, r) {
      return oe().document.rebind(u, r);
    },
    openDrop(u, r) {
      return oe().document.openDrop(u, r);
    },
    onRequest(u) {
      return oe().document.onRequest(u);
    },
    onViewRequest(u) {
      return oe().document.onViewRequest(u);
    }
  },
  state: {
    get(u, r) {
      return oe().state.get(u, r);
    },
    set(u, r, o) {
      return oe().state.set(u, r, o);
    }
  },
  storage: {
    get(u, r) {
      return oe().storage.get(u, r);
    },
    getAll(u) {
      return oe().storage.getAll(u);
    },
    set(u, r, o) {
      return oe().storage.set(u, r, o);
    },
    delete(u, r) {
      return oe().storage.delete(u, r);
    },
    onChanged(u) {
      return oe().storage.onChanged(u);
    },
    get global() {
      return oe().storage.global;
    },
    agent(u) {
      return oe().storage.agent(u);
    }
  },
  emit(u, r, o, c) {
    return oe().emit(u, r, o, c);
  },
  track(u, r, o) {
    return oe().track(u, r, o);
  },
  panel: {
    set(u, r) {
      return oe().panel.set(u, r);
    },
    onEvent(u) {
      return oe().panel.onEvent(u);
    },
    onRefresh(u) {
      return oe().panel.onRefresh(u);
    }
  }
};
Jg(lp, () => Fg(oe()));
function Br(u) {
  return u.hanaAppWindow;
}
function fn(u) {
  const r = Br(u);
  if (!r) throw Object.assign(new Error("This App surface is not an App-owned native window."), { code: "APP_WINDOW_UNAVAILABLE" });
  return r;
}
function PE(u) {
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
var WE = /* @__PURE__ */ new Set([
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
function eb(u) {
  if (!qo(u.location?.pathname ?? ""))
    throw new Error("@hana/app-sdk/ui requires an App surface route under /api/apps/:appId/ui/ or a scoped service mount.");
}
function tb(u) {
  if (!WE.has(u))
    throw new Error(`@hana/app-sdk/ui does not expose host request type: ${u}`);
}
function nb(u) {
  return {
    get global() {
      return u().storage.global;
    },
    agent(r) {
      return u().storage.agent(r);
    }
  };
}
function ab(u, r = ip, o = {}) {
  return {
    window: PE(r),
    surfaces: {
      onEvent(c, d) {
        if (typeof c != "string" || !c.trim() || c.length > 256 || typeof d != "function")
          throw new TypeError("surfaces.onEvent requires a surface id and a listener.");
        return fn(r()).onMessage((h) => {
          const p = Ji(h);
          if (!p.ok || p.value.kind !== "event" || p.value.type !== "hana.app-surface.event") return;
          const b = p.value.payload;
          if (!b || typeof b != "object" || Array.isArray(b)) return;
          const C = b;
          C.surfaceId !== c || typeof C.type != "string" || !C.type.trim() || d({ surfaceId: c, type: C.type, ...C.payload === void 0 ? {} : { payload: C.payload } });
        });
      }
    },
    appEvents: {
      on(c, d) {
        if (typeof c != "string" || !c.trim() || c.length > 128 || typeof d != "function") throw new TypeError("appEvents.on requires an event name and a listener.");
        const h = r(), p = qo(h.location?.pathname ?? "");
        if (!p)
          throw new Error("@hana/app-sdk/ui requires an App surface route under /api/apps/:appId/ui/ or a scoped service mount.");
        const b = p.appId, C = (U) => {
          const A = Ji(U);
          if (!A.ok || A.value.kind !== "event" || A.value.type !== "hana.app.event") return;
          const B = A.value.payload;
          B?.source !== `app:${b}` || B.type !== c || !B.payload || typeof B.payload != "object" || Array.isArray(B.payload) || d(B.payload);
        }, w = o.messageTransport ?? Br(h);
        if (w) return w.onMessage(C);
        const z = o.parentWindow ?? h.parent, v = jg(h, o.targetOrigin), I = (U) => {
          Hg(U, z, v) && C(U.data);
        };
        return h.addEventListener("message", I), () => h.removeEventListener("message", I);
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
        return tb(c), u().host.request(c, d, h);
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
    storage: nb(u),
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
var lb, Ct = ab(() => {
  const u = ip();
  eb(u);
  const r = Br(u);
  return r ? lb ??= ap({ targetWindow: u, messageTransport: r }) : lp;
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
}, ib = {
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
function ub({ mode: u = "inherit", theme: r, className: o, style: c, children: d, "data-testid": h = "hana-plugin-theme", ...p }) {
  const b = typeof r == "string" ? r : void 0, C = rb(u, r);
  return m.jsx("div", { ...p, "data-testid": h, className: dn("hana-plugin-theme", o), "data-hana-theme-mode": u, "data-hana-theme": u === "hana" ? b : void 0, style: { ...C, ...c }, children: d });
}
function rb(u, r) {
  if (u === "inherit")
    return {};
  const o = cb(u, r), c = {};
  for (const [d, h] of Object.entries(ib)) {
    const p = o?.[d];
    p && (c[h] = p);
  }
  return c;
}
function cb(u, r) {
  if (typeof r == "string")
    return Dg[r];
  if (r)
    return r;
  if (u === "hana")
    return Dg["warm-paper"];
}
const Pe = Q.forwardRef(function({ variant: r = "secondary", size: o = "md", loading: c = !1, iconLeft: d, iconRight: h, disabled: p, className: b, children: C, type: w = "button", ...z }, v) {
  return m.jsxs("button", { ...z, ref: v, type: w, disabled: p || c, className: dn("hana-plugin-button", `hana-plugin-button-${r}`, `hana-plugin-button-${o}`, c && "hana-plugin-button-loading", b), children: [c ? m.jsx("span", { className: "hana-plugin-spinner", "aria-hidden": !0 }) : d, C && m.jsx("span", { className: "hana-plugin-button-label", children: C }), !c && h] });
});
Q.forwardRef(function({ label: r, size: o = "md", variant: c = "ghost", className: d, children: h, type: p = "button", ...b }, C) {
  return m.jsx("button", { ...b, ref: C, type: p, "aria-label": r, title: b.title || r, className: dn("hana-plugin-icon-button", `hana-plugin-icon-button-${o}`, `hana-plugin-icon-button-${c}`, d), children: h });
});
const wt = Q.forwardRef(function({ label: r, hint: o, error: c, id: d, className: h, inputClassName: p, ...b }, C) {
  const w = Q.useId(), z = d || w;
  return m.jsx(Lo, { label: r, hint: o, error: c, htmlFor: z, className: h, children: m.jsx("input", { ...b, ref: C, id: z, "aria-invalid": !!c, className: dn("hana-plugin-input", p) }) });
});
Q.forwardRef(function({ label: r, hint: o, error: c, id: d, className: h, textareaClassName: p, rows: b = 4, ...C }, w) {
  const z = Q.useId(), v = d || z;
  return m.jsx(Lo, { label: r, hint: o, error: c, htmlFor: v, className: h, children: m.jsx("textarea", { ...C, ref: w, id: v, rows: b, "aria-invalid": !!c, className: dn("hana-plugin-textarea", p) }) });
});
Q.forwardRef(function({ checked: r, onChange: o, label: c, disabled: d, className: h, onClick: p, type: b = "button", ...C }, w) {
  const z = typeof c == "string" ? c : C["aria-label"];
  return m.jsxs("span", { className: dn("hana-plugin-switch-wrap", h), children: [m.jsx("button", { ...C, ref: w, type: b, role: "switch", "aria-checked": r, "aria-label": z, disabled: d, className: dn("hana-plugin-switch", r && "hana-plugin-switch-on"), onClick: (v) => {
    p?.(v), !v.defaultPrevented && !d && o?.(!r);
  }, children: m.jsx("span", { className: "hana-plugin-switch-thumb", "aria-hidden": !0 }) }), c && m.jsx("span", { className: "hana-plugin-switch-label", children: c })] });
});
function zg({ options: u, value: r, onChange: o, label: c, hint: d, error: h, placeholder: p = "Select", disabled: b = !1, className: C }) {
  const [w, z] = Q.useState(!1), v = u.find((B) => B.value === r), I = v?.label || p, U = typeof c == "string" ? c : void 0, A = [U, I].filter(Boolean).join(" ");
  return m.jsx(Lo, { label: c, hint: d, error: h, className: C, children: m.jsxs("div", { className: "hana-plugin-select", children: [m.jsxs("button", { type: "button", "aria-haspopup": "listbox", "aria-expanded": w, "aria-label": A || void 0, disabled: b, className: dn("hana-plugin-select-trigger", !v && "hana-plugin-select-placeholder"), onClick: () => z((B) => !B), children: [m.jsx("span", { className: "hana-plugin-select-value", children: I }), m.jsx("span", { className: "hana-plugin-select-arrow", "aria-hidden": !0, children: "▾" })] }), w && m.jsx("div", { className: "hana-plugin-select-popover", role: "listbox", "aria-label": U, children: u.map((B) => m.jsx("button", { type: "button", role: "option", "aria-selected": B.value === r, disabled: B.disabled, className: dn("hana-plugin-select-option", B.value === r && "hana-plugin-select-option-selected"), onClick: () => {
    B.disabled || (o(B.value), z(!1));
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
async function Ze(u) {
  const r = await Ct.api.fetch(up(u));
  return rp(r);
}
async function Ot(u, r) {
  const o = await Ct.api.fetch(up(u), {
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
    const d = await Ze(u).catch(() => null);
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
  const r = await Ze(Sn(`篇目/${u}`)).catch(() => null);
  return r && r.ok ? String(r.content || "").split(/\r?\n/, 1)[0] : "";
}
const Sn = (u) => `/api/file?path=${encodeURIComponent(u)}`, sb = [
  { id: "home", label: "首页" },
  { id: "use", label: "取用" },
  { id: "library", label: "结构库" },
  { id: "todo", label: "待办" },
  { id: "settings", label: "设置" }
], ob = {
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
function fb(u) {
  return u.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function wa(u) {
  return fb(u).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
}
function db(u) {
  const r = String(u || "").split(/\r?\n/), o = [];
  let c = 0, d = !1;
  const h = () => {
    d && (o.push("</ul>"), d = !1);
  };
  for (; c < r.length; ) {
    const p = r[c];
    if (/^\|.*\|/.test(p) && c + 1 < r.length && /^\|\s*-+/.test(r[c + 1])) {
      h();
      const b = p.split("|").slice(1, -1).map((w) => w.trim());
      c += 2;
      const C = [];
      for (; c < r.length && /^\|/.test(r[c]); )
        C.push(r[c].split("|").slice(1, -1).map((w) => w.trim())), c++;
      o.push("<table><thead><tr>" + b.map((w) => `<th>${wa(w)}</th>`).join("") + "</tr></thead><tbody>");
      for (const w of C) o.push("<tr>" + w.map((z) => `<td>${wa(z)}</td>`).join("") + "</tr>");
      o.push("</tbody></table>");
      continue;
    }
    /^###\s/.test(p) ? (h(), o.push(`<h3>${wa(p.slice(4))}</h3>`)) : /^##\s/.test(p) ? (h(), o.push(`<h2>${wa(p.slice(3))}</h2>`)) : /^#\s/.test(p) ? (h(), o.push(`<h1>${wa(p.slice(2))}</h1>`)) : /^>\s?/.test(p) ? (h(), o.push(`<blockquote>${wa(p.replace(/^>\s?/, ""))}</blockquote>`)) : /^-\s/.test(p) || /^\*\s/.test(p) ? (d || (o.push("<ul>"), d = !0), o.push(`<li>${wa(p.slice(2))}</li>`)) : /^---+\s*$/.test(p) ? (h(), o.push("<hr>")) : p.trim() === "" ? h() : (h(), o.push(`<p>${wa(p)}</p>`)), c++;
  }
  return h(), o.join(`
`);
}
function tu({ md: u }) {
  return /* @__PURE__ */ m.jsx("div", { className: "doc", dangerouslySetInnerHTML: { __html: db(u) } });
}
async function Ra(u) {
  const r = await Ze(`/api/list?dir=${encodeURIComponent(u)}`);
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
async function hb() {
  const [u, r, o, c] = await Promise.all([
    Ra("篇目"),
    Ra("写作模型"),
    Ze(Sn("标签库.md")),
    Ze("/api/import/failures").catch(() => ({ ok: !1, items: [] }))
  ]), d = o.ok ? Io(o.content) : [];
  return {
    papers: u.length,
    models: r.length,
    queuePending: d.filter((h) => !h.decision).length,
    failures: (c.items || []).length
  };
}
function mb() {
  const u = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), [r, o] = Q.useState({ id: "", title: "", authors: "", year: "", venue: "", textType: "", score: "9", rationale: "", date: u, recordedBy: "" }), [c, d] = Q.useState(null), h = (b, C) => o((w) => ({ ...w, [b]: C }));
  async function p() {
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
    }, C = await Ot("/api/tool/commit_anchor", { anchor: b });
    d(C), C.ok && Ct.toast.show({ message: "评分已落盘", type: "success" });
  }
  return /* @__PURE__ */ m.jsxs("div", { className: "form", children: [
    /* @__PURE__ */ m.jsx("p", { className: "hint", children: "你自己的总分和理由是整条评分链的起点：只增不改，理由至少 10 字，后续归纳评分指引全靠它。" }),
    /* @__PURE__ */ m.jsxs("div", { className: "grid2", children: [
      /* @__PURE__ */ m.jsx(wt, { label: "篇目 id（slug-年）", value: r.id, onChange: (b) => h("id", b.currentTarget.value), placeholder: "sample-2020" }),
      /* @__PURE__ */ m.jsx(wt, { label: "文本类型（你判）", value: r.textType, onChange: (b) => h("textType", b.currentTarget.value), placeholder: "论证型 / 阐释型…" }),
      /* @__PURE__ */ m.jsx(wt, { label: "标题", value: r.title, onChange: (b) => h("title", b.currentTarget.value) }),
      /* @__PURE__ */ m.jsx(wt, { label: "作者", value: r.authors, onChange: (b) => h("authors", b.currentTarget.value) }),
      /* @__PURE__ */ m.jsx(wt, { label: "年份", value: r.year, onChange: (b) => h("year", b.currentTarget.value) }),
      /* @__PURE__ */ m.jsx(wt, { label: "出处（可空）", value: r.venue, onChange: (b) => h("venue", b.currentTarget.value) }),
      /* @__PURE__ */ m.jsx(wt, { label: "总分 1-10", value: r.score, onChange: (b) => h("score", b.currentTarget.value) }),
      /* @__PURE__ */ m.jsx(wt, { label: "日期", value: r.date, onChange: (b) => h("date", b.currentTarget.value) })
    ] }),
    /* @__PURE__ */ m.jsx(wt, { label: "理由（≥10 字）", value: r.rationale, onChange: (b) => h("rationale", b.currentTarget.value) }),
    /* @__PURE__ */ m.jsx(wt, { label: "录入者", value: r.recordedBy, onChange: (b) => h("recordedBy", b.currentTarget.value) }),
    /* @__PURE__ */ m.jsx(Pe, { variant: "primary", onClick: p, children: "提交评分" }),
    c && /* @__PURE__ */ m.jsx("pre", { className: c.ok ? "ok" : "err", children: c.ok ? `已写入：${c.file || "(dry run)"}` : JSON.stringify(c, null, 2) })
  ] });
}
function gb({ tick: u }) {
  const [r, o] = Q.useState([]), [c, d] = Q.useState({}), [h, p] = Q.useState(""), [b, C] = Q.useState(!1);
  Q.useEffect(() => {
    let A = !1;
    return (async () => {
      const B = await Ze("/api/model/status").catch(() => null);
      if (A || !B || !B.running || B.kind !== "propose") return;
      C(!0), p("模型提议进行中（接管切页前的任务）…");
      const x = await eu("/api/model/status", { kind: "propose", timeoutMs: 180 * 1e3 });
      A || (p(x.ok ? `已入队 ${x.queued?.length || 0} 对` : x.message || "未产出建议"), x.ok && await w(), C(!1));
    })(), () => {
      A = !0;
    };
  }, []);
  const w = Q.useCallback(async () => {
    const A = await Ze(Sn("标签库.md"));
    o(A.ok ? Io(A.content) : []);
  }, []);
  Q.useEffect(() => {
    w();
  }, [w, u]);
  async function z(A, B, x) {
    const k = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), te = c[A] || `裁决执行：${A}`, J = await Ot("/api/tool/apply_tag_merge", { mergedLabel: B, target: x, date: k, evidence: te });
    p(J.ok ? `已执行：${B} → ${J.now}` : J.message || JSON.stringify(J)), J.ok && await w();
  }
  async function v() {
    C(!0), p("");
    try {
      const A = await Ot("/api/model/propose-merges", {});
      if (!A.started) {
        p(A.message || "发起失败"), C(!1);
        return;
      }
      const B = await eu("/api/model/status", { kind: "propose", timeoutMs: 180 * 1e3 });
      if (B.stage === "timeout") {
        p(B.message), C(!1);
        return;
      }
      p(B.ok ? `已入队 ${B.queued.length} 对：${B.queued.join("；")}` : B.message || "未产出建议"), B.ok && await w();
    } catch (A) {
      p(`请求失败：${String(A?.message || A)}`);
    }
    C(!1);
  }
  async function I() {
    const A = await Ot("/api/tool/suggest_tag_merges", {});
    p(A.ok ? A.written ? `共现入队 ${A.written} 对` : "共现提示无新候选（语义相近的对请用模型提议）" : A.message || JSON.stringify(A)), A.ok && await w();
  }
  const U = r.filter((A) => !A.decision);
  return /* @__PURE__ */ m.jsxs("div", { children: [
    /* @__PURE__ */ m.jsxs("p", { className: "hint", children: [
      U.length > 0 && /* @__PURE__ */ m.jsxs("b", { children: [
        U.length,
        " 对待裁决　"
      ] }),
      "相近标签会进到这里，由你决定合并方向；裁决后库内归一，原始记录不动。"
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ m.jsx(Pe, { variant: "primary", disabled: b, onClick: () => {
        v();
      }, children: b ? "提议中…" : "模型提议疑似对" }),
      /* @__PURE__ */ m.jsx(Pe, { disabled: b, onClick: () => {
        I();
      }, children: "跑共现提示" }),
      /* @__PURE__ */ m.jsx("span", { className: "hint", children: "提议与共现只负责入队；合并方向由你在下方卡片上裁决。" })
    ] }),
    r.length === 0 && /* @__PURE__ */ m.jsx(iu, { title: "暂无待裁决标签", description: "篇目积累出相近标签后，候选会自动出现在这里。" }),
    r.map((A) => /* @__PURE__ */ m.jsx(Ca, { title: A.pair, description: `${A.date} 进队 · ${A.evidence}`, children: A.decision ? /* @__PURE__ */ m.jsxs("p", { className: "decided", children: [
      "已裁决：",
      A.decision
    ] }) : /* @__PURE__ */ m.jsxs("div", { className: "queue-actions", children: [
      [A.pair.split(" vs ")[0], A.pair.split(" vs ")[1]].filter(Boolean).map((B, x, k) => /* @__PURE__ */ m.jsx("div", { className: "queue-op", children: /* @__PURE__ */ m.jsxs(Pe, { onClick: () => z(A.pair, B, k[1 - x]), children: [
        "「",
        B,
        "」并入「",
        k[1 - x],
        "」"
      ] }) }, B)),
      /* @__PURE__ */ m.jsx(wt, { label: "依据（可空）", value: c[A.pair] || "", onChange: (B) => d((x) => ({ ...x, [A.pair]: B.currentTarget.value })) })
    ] }) }, A.pair)),
    U.length > 0 && null,
    h && /* @__PURE__ */ m.jsx("p", { className: h.startsWith("已") ? "ok" : "err", children: h })
  ] });
}
function pb({ tick: u }) {
  const [r, o] = Q.useState([]), [c, d] = Q.useState(""), [h, p] = Q.useState("");
  return Q.useEffect(() => {
    Ra("篇目").then(async (b) => {
      const C = await Promise.all(
        b.map(async (w) => {
          const { title: z, meta: v } = cp(await sp(w), w.replace(/\.md$/, ""));
          return { id: w, title: z, meta: v || w.replace(/\.md$/, "") };
        })
      );
      o(C);
    });
  }, [u]), Q.useEffect(() => {
    if (!c) {
      p("");
      return;
    }
    Ze(Sn(`篇目/${c}`)).then((b) => p(b.ok ? b.content : b.message || "读取失败"));
  }, [c]), r.length ? /* @__PURE__ */ m.jsxs("div", { className: "split", children: [
    /* @__PURE__ */ m.jsx("div", { className: "side", children: /* @__PURE__ */ m.jsx("div", { className: "entrylist", children: r.map((b) => /* @__PURE__ */ m.jsxs(
      "button",
      {
        className: c === b.id ? "entryitem on" : "entryitem",
        onClick: () => d(b.id),
        children: [
          /* @__PURE__ */ m.jsx("span", { className: "entrytitle", children: b.title }),
          /* @__PURE__ */ m.jsx("span", { className: "entrymeta", children: b.meta })
        ]
      },
      b.id
    )) }) }),
    /* @__PURE__ */ m.jsx("div", { className: "main", children: c ? /* @__PURE__ */ m.jsx(tu, { md: h }) : /* @__PURE__ */ m.jsx("p", { className: "hint", children: "左侧选篇查看（每条登记都带位置与原文引文）。" }) })
  ] }) : /* @__PURE__ */ m.jsx(iu, { title: "还没有篇目", description: "导入文献或在对话里拆解后，篇目会出现在这里。" });
}
function vb({ tick: u }) {
  const [r, o] = Q.useState([]), [c, d] = Q.useState(""), [h, p] = Q.useState(""), [b, C] = Q.useState(""), [w, z] = Q.useState(""), [v, I] = Q.useState({});
  if (Q.useEffect(() => {
    Ra("篇目").then(async (A) => {
      o(A), A[0] && d(A[0]), A[1] && p(A[1]);
      const B = await Promise.all(A.map(async (x) => {
        const { title: k, meta: te } = cp(await sp(x), x.replace(/\.md$/, ""));
        return [x, te ? `${k} · ${te}` : k];
      }));
      I(Object.fromEntries(B));
    });
  }, [u]), Q.useEffect(() => {
    c && Ze(Sn(`篇目/${c}`)).then((A) => C(A.ok ? A.content : ""));
  }, [c]), Q.useEffect(() => {
    h && Ze(Sn(`篇目/${h}`)).then((A) => z(A.ok ? A.content : ""));
  }, [h]), r.length < 2) return /* @__PURE__ */ m.jsx(iu, { title: "至少两篇可对比", description: "先积累两篇以上篇目。" });
  const U = r.map((A) => ({ value: A, label: v[A] || A.replace(/\.md$/, "") }));
  return /* @__PURE__ */ m.jsxs("div", { children: [
    /* @__PURE__ */ m.jsxs("div", { className: "grid2", children: [
      /* @__PURE__ */ m.jsx(zg, { value: c, onChange: d, options: U }),
      /* @__PURE__ */ m.jsx(zg, { value: h, onChange: p, options: U })
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: "compare", children: [
      /* @__PURE__ */ m.jsx("div", { className: "col", children: /* @__PURE__ */ m.jsx(tu, { md: b }) }),
      /* @__PURE__ */ m.jsx("div", { className: "col", children: /* @__PURE__ */ m.jsx(tu, { md: w }) })
    ] })
  ] });
}
function yb({ tick: u }) {
  const [r, o] = Q.useState(null);
  if (Q.useEffect(() => {
    (async () => {
      const [d, h, p, b, C, w] = await Promise.all([
        Ra("篇目"),
        Ra("锚点样本"),
        Ra("写作模型"),
        Ze(Sn("标签库.md")),
        Ze(Sn("闭包映射表.md")),
        Ze(Sn("类型库.md"))
      ]), z = b.ok ? Ro(b.content, "标签") : [], v = b.ok ? Io(b.content) : [], I = C.ok ? Ro(C.content, "from") : [], U = w.ok ? Ro(w.content, "类型") : [];
      o({
        papers: d.length,
        anchors: h.length,
        models: p.length,
        tags: z,
        queuePending: v.filter((A) => !A.decision).length,
        mapRows: I,
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
      const p = h.split("|").slice(1, -1).map((b) => b.trim());
      if (p[0] === r) {
        d = !0;
        continue;
      }
      d && p[0] && p[0] !== "（暂无）" && c.push(p[0]);
    } else d && !h.startsWith("|") && (d = !1);
  return c;
}
function Eb({ tick: u }) {
  const [r, o] = Q.useState([]), [c, d] = Q.useState(""), [h, p] = Q.useState(""), [b, C] = Q.useState(!1), [w, z] = Q.useState(""), [v, I] = Q.useState({});
  Q.useEffect(() => {
    let x = !1;
    return (async () => {
      const k = await Ze("/api/model/status").catch(() => null);
      if (x || !k || !k.running || k.kind !== "generate") return;
      C(!0), z("建模进行中（接管切页前的任务）…");
      const te = await eu("/api/model/status", { kind: "generate" });
      x || (z(te.stage === "timeout" ? te.message : te.ok ? "完成：见下方分组" : te.message || "未生成"), te.ok && (Ct.toast.show({ message: "写作模型已生成/更新", type: "success" }), A()), C(!1));
    })(), () => {
      x = !0;
    };
  }, []);
  const U = Q.useMemo(() => {
    const x = /* @__PURE__ */ new Map();
    for (const k of r) {
      const te = /^(.+)-写作模型-v(\d+)\.md$/.exec(k);
      te && (x.has(te[1]) || x.set(te[1], []), x.get(te[1]).push({ file: k, v: Number(te[2]) }));
    }
    return [...x.entries()].map(([k, te]) => (te.sort((J, K) => J.v - K.v), { type: k, latest: te[te.length - 1], history: te.slice(0, -1).reverse() }));
  }, [r]), A = Q.useCallback(() => {
    Ra("写作模型").then(o);
  }, []);
  Q.useEffect(() => {
    A();
  }, [A, u]), Q.useEffect(() => {
    if (!c) {
      p("");
      return;
    }
    Ze(Sn(`写作模型/${c}`)).then((x) => p(x.ok ? x.content : ""));
  }, [c]);
  async function B() {
    C(!0), z("");
    try {
      const x = await Ot("/api/model/generate", {});
      if (!x.started) {
        z(x.message || "发起失败"), C(!1);
        return;
      }
      z("建模中：归属 → 归纳 → 逐类型生成（每个类型一次模型调用，可离开本页）…");
      const k = await eu("/api/model/status", { kind: "generate" });
      if (k.stage === "timeout") {
        z(k.message), C(!1);
        return;
      }
      const te = (k.results || []).map((K) => K.ok ? `✓ ${K.type} → v${K.version}（样本 ${K.samples} 篇${K.previous ? `，原 v${K.previous}` : ""}）` : K.skipped ? `· ${K.type}：${K.skipped}` : `✗ ${K.type}：${K.error || "失败"}`), J = te.filter((K) => K.startsWith("✓")).length;
      z((J ? te.length === J ? "完成：" : "部分完成：" : "未生成：") + (te.join("；") || k.message || "")), J && (Ct.toast.show({ message: "写作模型已生成/更新", type: "success" }), A());
    } catch (x) {
      z(`请求失败：${String(x?.message || x)}`);
    }
    C(!1);
  }
  return /* @__PURE__ */ m.jsxs("div", { children: [
    /* @__PURE__ */ m.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ m.jsx(Pe, { variant: "primary", disabled: b, onClick: () => {
        B();
      }, children: b ? "建模中…" : "生成 / 更新写作模型" }),
      /* @__PURE__ */ m.jsx("span", { className: "hint", children: "同类型样本 ≥2 篇才生成；新文献入库后再次点击即得新版本（v+1，历史保留）。" })
    ] }),
    w && /* @__PURE__ */ m.jsx("pre", { className: "hint", children: w }),
    U.length ? /* @__PURE__ */ m.jsxs(m.Fragment, { children: [
      U.map((x) => /* @__PURE__ */ m.jsxs("div", { className: "model-group", children: [
        /* @__PURE__ */ m.jsxs("div", { className: "model-group-head", children: [
          /* @__PURE__ */ m.jsx("span", { className: "model-grouptitle", children: x.type }),
          /* @__PURE__ */ m.jsxs(
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
          x.history.length > 0 && /* @__PURE__ */ m.jsx("button", { className: "linkbtn", onClick: () => I((k) => ({ ...k, [x.type]: !k[x.type] })), children: v[x.type] ? "收起历史" : `历史 ${x.history.length} 版` })
        ] }),
        v[x.type] && /* @__PURE__ */ m.jsx("div", { className: "filebtns", children: x.history.map((k) => /* @__PURE__ */ m.jsxs("button", { className: c === k.file ? "filebtn on" : "filebtn", onClick: () => d(k.file), children: [
          "v",
          k.v
        ] }, k.file)) })
      ] }, x.type)),
      c ? /* @__PURE__ */ m.jsx(tu, { md: h }) : /* @__PURE__ */ m.jsx("p", { className: "hint", children: "选择版本查看（每类默认最新；旧版折叠在「历史」里可对照）。" })
    ] }) : /* @__PURE__ */ m.jsx(iu, { title: "暂无写作模型", description: "点上方按钮归纳生成；样本不足或样本未变的类型会跳过并说明。" })
  ] });
}
function bb() {
  const [u, r] = Q.useState(""), [o, c] = Q.useState([]), [d, h] = Q.useState(null), [p, b] = Q.useState("");
  async function C() {
    if (!u.trim()) return;
    const w = await Ze(`/api/search?query=${encodeURIComponent(u.trim())}`);
    c(w.ok ? w.results : []), h(null);
  }
  return Q.useEffect(() => {
    if (!d) {
      b("");
      return;
    }
    Ze(Sn(d.path)).then((w) => b(w.ok ? w.content : "读取失败"));
  }, [d]), /* @__PURE__ */ m.jsxs("div", { children: [
    /* @__PURE__ */ m.jsx("p", { className: "hint", children: "按关键词物理命中排序帮你收窄候选，取舍仍由你判断；引用时带篇目位置与原文引文。" }),
    /* @__PURE__ */ m.jsxs("div", { className: "searchbar", children: [
      /* @__PURE__ */ m.jsx(
        wt,
        {
          label: "关键词（空格 / 、 分隔）",
          value: u,
          onChange: (w) => r(w.currentTarget.value),
          placeholder: "例：反驳 开头",
          onKeyDown: (w) => {
            w.key === "Enter" && C();
          }
        }
      ),
      /* @__PURE__ */ m.jsx(Pe, { variant: "primary", onClick: () => {
        C();
      }, children: "搜索" })
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: "searchresults", children: [
      o.map((w) => /* @__PURE__ */ m.jsxs("div", { className: d?.path === w.path ? "searchhit on" : "searchhit", children: [
        /* @__PURE__ */ m.jsxs("div", { className: "searchhit-head", onClick: () => h(w), children: [
          /* @__PURE__ */ m.jsx("span", { className: "badge", children: w.kind }),
          /* @__PURE__ */ m.jsx("b", { children: w.title }),
          /* @__PURE__ */ m.jsxs("span", { className: "hint", children: [
            "命中 ",
            w.score,
            " · ",
            w.path
          ] })
        ] }),
        d?.path !== w.path && w.hits?.slice(0, 2).map((z, v) => /* @__PURE__ */ m.jsxs("div", { className: "hitline", children: [
          "L",
          z.line,
          ": ",
          z.excerpt,
          z.text
        ] }, v))
      ] }, w.path)),
      !o.length && /* @__PURE__ */ m.jsx("p", { className: "hint", children: "输入关键词后搜索；结果按命中度排序，点击标题展开全文。" })
    ] }),
    d && /* @__PURE__ */ m.jsxs("div", { className: "searchpreview", children: [
      /* @__PURE__ */ m.jsx("h4", { children: d.title }),
      /* @__PURE__ */ m.jsx(tu, { md: p })
    ] })
  ] });
}
function Sb() {
  const [u, r] = Q.useState(""), [o, c] = Q.useState(""), [d, h] = Q.useState("2"), [p, b] = Q.useState("");
  Q.useEffect(() => {
    Ze("/api/config").then((w) => {
      w.ok && w.config ? (r((w.config.markers || []).join("、")), c(w.config.libraryPath || ""), h(String(w.config.maxPerRun ?? 2))) : b(w.message || "配置读取失败");
    });
  }, []);
  async function C() {
    b("保存中…");
    const w = await Ot("/api/config", {
      markers: u.split(/[\s、，,;；]+/).map((z) => z.trim()).filter(Boolean),
      libraryPath: o.trim(),
      maxPerRun: Number(d) || 2
    });
    b(w.ok ? "已保存" : `保存失败：${w.message || "未知错误"}`);
  }
  return /* @__PURE__ */ m.jsxs("div", { className: "settings", children: [
    /* @__PURE__ */ m.jsx("p", { className: "hint", children: "会话名命中标定词才会收到结构推荐；标定词留空 = 全静默，不向任何会话推送。" }),
    /* @__PURE__ */ m.jsx(
      wt,
      {
        label: "会话标定词（、或逗号分隔，含任一即放行）",
        value: u,
        onChange: (w) => r(w.currentTarget.value),
        placeholder: "例：构成性、论文、写作"
      }
    ),
    /* @__PURE__ */ m.jsx(
      wt,
      {
        label: "结构库路径（留空用默认；改后重启 Hana 生效）",
        value: o,
        onChange: (w) => c(w.currentTarget.value),
        placeholder: "默认：workspace 写作模型插件/结构库"
      }
    ),
    /* @__PURE__ */ m.jsx(
      wt,
      {
        label: "单次推荐上限（1-2，设计上限 2）",
        value: d,
        onChange: (w) => h(w.currentTarget.value)
      }
    ),
    /* @__PURE__ */ m.jsxs("div", { className: "saverow", children: [
      /* @__PURE__ */ m.jsx(Pe, { variant: "primary", onClick: () => {
        C();
      }, children: "保存" }),
      p && /* @__PURE__ */ m.jsx("span", { className: "savehint", children: p })
    ] }),
    /* @__PURE__ */ m.jsx("p", { className: "hint", children: "命中判定：标定词过闸后，取最近对话文本与标签库/类型库做字典交集，交集词走共用检索层出候选；候选只附命中事实，采纳与否由会话内模型判断。同会话已注入条目不重复推。" })
  ] });
}
function Tb({ onDone: u }) {
  const [r, o] = Q.useState(""), [c, d] = Q.useState(!1), [h, p] = Q.useState(null), [b, C] = Q.useState(!1), [w, z] = Q.useState(!1);
  Q.useEffect(() => {
    let A = !1;
    return (async () => {
      const B = await Ze("/api/import/status").catch(() => null);
      if (A || !B || !B.running) return;
      d(!0), p({ ok: !0, stage: "running", message: "拆解进行中（接管切页前的任务）…" });
      const x = await Lr();
      A || (p(x), x.ok ? (Ct.toast.show({ message: "拆解完成，已入库", type: "success" }), u()) : x.failureTs && (Ct.toast.show({ message: "拆解失败，已记入待办", type: "error" }), u()), d(!1));
    })(), () => {
      A = !0;
    };
  }, []);
  async function v(A, B) {
    d(!0), p(null);
    try {
      const x = await Ot("/api/import", B !== void 0 ? { ...A, fromTs: B } : A);
      if (!x.started) {
        p(x), d(!1);
        return;
      }
      p({ ok: !0, stage: "running", message: x.message || "拆解进行中" });
      const k = await Lr();
      p(k), k.ok ? (Ct.toast.show({ message: "拆解完成，已入库", type: "success" }), u()) : k.failureTs && (Ct.toast.show({ message: "拆解失败，已记入待办", type: "error" }), u());
    } catch (x) {
      p({ ok: !1, stage: "network", message: String(x?.message || x) });
    }
    d(!1);
  }
  async function I(A, B) {
    const x = String(A || "").trim();
    if (!x) {
      p({ ok: !1, stage: "input", message: "请先粘贴文献全文，或选择 / 拖入 md、txt、pdf 文件" });
      return;
    }
    await v({ text: x }, B);
  }
  async function U(A) {
    if (/\.pdf$/i.test(A.name)) {
      if (A.size > 50 * 1024 * 1024) {
        p({ ok: !1, stage: "input", message: "PDF 超过 50 MB 上限" });
        return;
      }
      try {
        const B = await new Promise((x, k) => {
          const te = new FileReader();
          te.onload = () => x(String(te.result).split(",")[1] || ""), te.onerror = () => k(new Error("文件读取失败")), te.readAsDataURL(A);
        });
        await v({ pdfBase64: B, filename: A.name });
      } catch (B) {
        p({ ok: !1, stage: "input", message: String(B?.message || B) });
      }
      return;
    }
    if (!/\.(md|txt)$/i.test(A.name)) {
      p({ ok: !1, stage: "input", message: "支持 md / txt / pdf 文件" });
      return;
    }
    await v({ text: await A.text() });
  }
  return /* @__PURE__ */ m.jsxs("div", { className: "import-zone", children: [
    /* @__PURE__ */ m.jsx("h4", { className: "import-title", children: "导入文献" }),
    /* @__PURE__ */ m.jsxs(
      "div",
      {
        className: b ? "drop on" : "drop",
        onDragOver: (A) => {
          A.preventDefault(), C(!0);
        },
        onDragLeave: () => C(!1),
        onDrop: (A) => {
          A.preventDefault(), C(!1);
          const B = A.dataTransfer.files?.[0];
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
                onChange: (A) => {
                  const B = A.target.files?.[0];
                  A.target.value = "", B && U(B);
                }
              }
            )
          ] }),
          /* @__PURE__ */ m.jsxs("p", { className: "hint zotero-toggle", children: [
            "或",
            /* @__PURE__ */ m.jsx("button", { className: "linkbtn", onClick: () => z((A) => !A), children: w ? "收起 Zotero" : "从 Zotero 取" })
          ] })
        ]
      }
    ),
    w && /* @__PURE__ */ m.jsx(_b, {}),
    /* @__PURE__ */ m.jsx(
      "textarea",
      {
        className: "pastebox",
        value: r,
        onChange: (A) => o(A.target.value),
        placeholder: "也可以直接粘贴文献全文…",
        rows: 4,
        disabled: c
      }
    ),
    /* @__PURE__ */ m.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ m.jsx(Pe, { variant: "primary", disabled: c || !r.trim(), onClick: () => {
        I(r);
      }, children: "一键拆解" }),
      c && /* @__PURE__ */ m.jsx("span", { className: "hint", children: "正在拆解：提取（PDF 先转文本）→ 落格校验 → 入库（约 1-3 分钟，可离开本页，完成后有提示）…" })
    ] }),
    h && /* @__PURE__ */ m.jsx("pre", { className: h.ok ? "ok" : "err", children: h.ok ? h.stage === "running" ? `${h.message || "拆解进行中…"}` : `已入库：${h.file}（第 ${h.attempts} 次通过${h.tagsAdded?.length ? `，新增标签 ${h.tagsAdded.join("、")}` : ""}）` + (h.pdfEngine ? `
PDF 引擎：${h.pdfEngine === "pymupdf" ? "PyMuPDF" : "unpdf（回退）—— 安装 PyMuPDF 可启用更稳的主引擎：python -m pip install pymupdf"}` : "") : `${h.message || "拆解失败"}${h.errors?.length ? `
` + h.errors.slice(0, 6).map((A) => `· ${A.field}：${A.message}`).join(`
`) : ""}${h.failureTs ? `
（已记入待办，可到「待办 · 导入失败」重试）` : ""}` })
  ] });
}
const Ab = {
  pending: "排队",
  running: "运行中",
  stopping: "停止中",
  done: "✓ 完成",
  failed: "✗ 失败",
  cancelled: "■ 已停止"
};
function op({ nodes: u, active: r, onPick: o, depth: c = 0 }) {
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
    d.children.length > 0 && /* @__PURE__ */ m.jsx(op, { nodes: d.children, active: r, onPick: o, depth: c + 1 })
  ] }, d.key)) });
}
function _b() {
  const [u, r] = Q.useState([]), [o, c] = Q.useState(null), [d, h] = Q.useState([]), [p, b] = Q.useState(""), [C, w] = Q.useState("collection"), [z, v] = Q.useState(null), [I, U] = Q.useState(/* @__PURE__ */ new Set()), [A, B] = Q.useState([]), [x, k] = Q.useState(null), [te, J] = Q.useState(""), [K, he] = Q.useState(!1), [me, ae] = Q.useState(null);
  Q.useEffect(() => {
    Ze("/api/zotero/collections").then((M) => {
      M && M.ok ? r(M.collections || []) : J(M?.message || "分类读取失败（Zotero 桌面端在运行吗？）");
    }).catch(() => J("分类读取失败"));
  }, []), Q.useEffect(() => {
    let M = !0;
    const P = () => {
      Ze("/api/import/queue").then((W) => {
        M && W && W.ok && (B(W.items || []), k(W));
      }).catch(() => {
      });
    };
    P();
    const ue = setInterval(P, 3e3);
    return () => {
      M = !1, clearInterval(ue);
    };
  }, []);
  async function ge(M, P) {
    w("collection"), c(M), U(/* @__PURE__ */ new Set()), he(!0), J(`加载「${P}」…`);
    try {
      const ue = await Ze(`/api/zotero/collection-items?key=${encodeURIComponent(M)}`);
      ue && ue.ok ? (h(ue.items || []), ue.truncated ? J(`该分类较大，列表显示前 ${ue.items.length} 条文献；更多可用搜索收窄`) : (ue.items || []).length ? J("") : J("该分类没有可导入的文献条目")) : J(ue?.message || "条目读取失败");
    } catch (ue) {
      J(String(ue?.message || ue));
    }
    he(!1);
  }
  async function Fe() {
    w("search"), c(null), U(/* @__PURE__ */ new Set()), he(!0), J("");
    try {
      const M = await Ot("/api/tool/zotero_search", { query: p, limit: 50 });
      M && Array.isArray(M.items) ? (v(M.items.map((P) => ({
        key: P.key,
        title: P.title,
        authors: P.creators,
        year: String(P.date || "").slice(0, 4),
        itemType: P.itemType
      }))), M.items.length || J("没有命中条目")) : J(M?.message || "Zotero 查询失败");
    } catch (M) {
      J(String(M?.message || M));
    }
    he(!1);
  }
  const we = C === "collection" ? d : z || [];
  function We(M) {
    U((P) => {
      const ue = new Set(P);
      return ue.has(M) ? ue.delete(M) : ue.add(M), ue;
    });
  }
  function ke() {
    U((M) => M.size >= we.length && we.length > 0 ? /* @__PURE__ */ new Set() : new Set(we.map((P) => P.key)));
  }
  async function gt() {
    const M = we.filter((W) => I.has(W.key));
    if (!M.length) {
      J("先勾选条目");
      return;
    }
    he(!0);
    const P = [], ue = [];
    for (let W = 0; W < M.length; W++) {
      const y = M[W];
      J(`解析附件 ${W + 1}/${M.length}…`);
      try {
        const Y = await Ot("/api/tool/zotero_item", { key: y.key }), le = Y && Array.isArray(Y.attachments) && Y.attachments[0] ? Y.attachments[0] : null;
        if (!le) {
          ue.push(y.title || y.key);
          continue;
        }
        const ee = await Ot("/api/tool/zotero_attachment_path", { attachmentKey: le.key || le });
        ee && ee.path ? P.push({ label: y.title || y.key, pdfPath: String(ee.path), source: `zotero:${y.key}` }) : ue.push(y.title || y.key);
      } catch {
        ue.push(y.title || y.key);
      }
    }
    if (P.length) {
      const W = await Ot("/api/import/enqueue", { items: P });
      W && W.ok ? (J(`已入队 ${W.queued} 篇${ue.length ? `；${ue.length} 篇缺附件未入队：${ue.slice(0, 2).join("、")}${ue.length > 2 ? "…" : ""}` : ""}`), U(/* @__PURE__ */ new Set()), Ct.toast.show({ message: `已入队 ${W.queued} 篇，队列开始执行`, type: "success" })) : J(W?.message || "入队失败");
    } else
      J(`没有可入队条目${ue.length ? `（${ue.length} 篇缺附件）` : ""}`);
    he(!1);
  }
  async function Rt() {
    const M = await Ze("/api/import/queue").catch(() => null);
    M && M.ok && (B(M.items || []), k(M));
  }
  async function q(M, P, ue = {}) {
    const W = await Ot("/api/import/queue-action", P !== void 0 ? { action: M, key: P, ...ue } : { action: M });
    return W && W.ok ? (k(W.snapshot), Rt(), !0) : (J(W?.message || "操作失败"), !1);
  }
  async function V(M) {
    he(!0);
    try {
      const P = await Ot("/api/tool/zotero_item", { key: M }), ue = P && Array.isArray(P.attachments) && P.attachments[0] ? P.attachments[0] : null;
      if (!ue) {
        J("该条目无附件"), he(!1);
        return;
      }
      const W = await Ot("/api/tool/zotero_attachment_path", { attachmentKey: ue.key || ue });
      W && W.path ? (await Ct.clipboard.writeText(String(W.path)), Ct.toast.show({ message: "路径已复制", type: "success" })) : J(W?.message || "附件路径解析失败");
    } catch (P) {
      J(String(P?.message || P));
    }
    he(!1);
  }
  function F(M) {
    const P = me;
    ae(null), !(P === null || P === M) && q("reorder", P, { before: M });
  }
  const Z = x?.total ?? A.length, se = (x?.done ?? 0) + (x?.failed ?? 0) + (x?.cancelled ?? 0);
  return /* @__PURE__ */ m.jsxs("div", { className: "zbox", children: [
    /* @__PURE__ */ m.jsx("p", { className: "hint", children: "需 Zotero 桌面端运行，且设置 → 高级 → 勾选「Allow other applications on this computer to communicate with Zotero」。勾选后加入队列，串行拆解（并发 1，随时可停）。" }),
    /* @__PURE__ */ m.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ m.jsx(
        wt,
        {
          label: "搜索（标题 / 作者 / 年份）",
          value: p,
          onChange: (M) => b(M.currentTarget.value),
          onKeyDown: (M) => {
            M.key === "Enter" && Fe();
          }
        }
      ),
      /* @__PURE__ */ m.jsx(Pe, { disabled: K, onClick: () => {
        Fe();
      }, children: "搜索" }),
      /* @__PURE__ */ m.jsxs(Pe, { variant: "primary", disabled: K || I.size === 0, onClick: () => {
        gt();
      }, children: [
        "加入队列（",
        I.size,
        "）"
      ] }),
      /* @__PURE__ */ m.jsx(Pe, { disabled: K || we.length === 0, onClick: ke, children: I.size >= we.length && we.length > 0 ? "取消全选" : "全选本页" })
    ] }),
    te && /* @__PURE__ */ m.jsx("p", { className: "hint", children: te }),
    /* @__PURE__ */ m.jsxs("div", { className: "zgrid", children: [
      /* @__PURE__ */ m.jsxs("div", { className: "ztree", children: [
        /* @__PURE__ */ m.jsx(
          "div",
          {
            className: C === "collection" && !o ? "collbtn on" : "collbtn",
            onClick: () => {
              w("collection"), U(/* @__PURE__ */ new Set());
            },
            children: "按分类浏览"
          }
        ),
        /* @__PURE__ */ m.jsx(op, { nodes: u, active: o, onPick: (M, P) => {
          ge(M, P);
        } })
      ] }),
      /* @__PURE__ */ m.jsxs("div", { className: "zlist zlistpick", children: [
        we.length === 0 && /* @__PURE__ */ m.jsx("p", { className: "hint", children: C === "collection" ? "选择左侧分类加载条目，或用搜索。" : "搜索无结果。" }),
        we.map((M) => /* @__PURE__ */ m.jsxs("label", { className: "zrow", children: [
          /* @__PURE__ */ m.jsx("input", { type: "checkbox", checked: I.has(M.key), onChange: () => We(M.key) }),
          /* @__PURE__ */ m.jsxs("span", { className: "zrow-main", children: [
            /* @__PURE__ */ m.jsx("b", { children: M.title || "（无题名）" }),
            /* @__PURE__ */ m.jsx("span", { className: "hint", children: [M.authors, M.year].filter(Boolean).join(" · ") })
          ] }),
          /* @__PURE__ */ m.jsx(
            "button",
            {
              className: "linkbtn",
              onClick: (P) => {
                P.preventDefault(), V(M.key);
              },
              children: "路径"
            }
          )
        ] }, M.key))
      ] })
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: "qhead", children: [
      /* @__PURE__ */ m.jsx("b", { children: "导入队列" }),
      /* @__PURE__ */ m.jsx("span", { className: "hint", children: Z ? `${se}/${Z} 完成 · 运行 ${(x?.running ?? 0) + (x?.stopping ?? 0)} · 排队 ${x?.pending ?? 0}${x?.paused ? " · 已暂停" : ""}` : "队列为空" }),
      /* @__PURE__ */ m.jsxs("span", { className: "qhead-actions", children: [
        /* @__PURE__ */ m.jsx(Pe, { disabled: !x || Z === 0, onClick: () => {
          q(x?.paused ? "resume" : "pause");
        }, children: x?.paused ? "继续" : "暂停" }),
        /* @__PURE__ */ m.jsx(Pe, { disabled: !x || (x?.done ?? 0) + (x?.cancelled ?? 0) === 0, onClick: () => {
          q("clear-done");
        }, children: "清理已完成" })
      ] })
    ] }),
    A.length === 0 ? /* @__PURE__ */ m.jsx("p", { className: "hint", children: "勾选文献点「加入队列」开始批量导入；运行中可继续追加，支持单篇停止/开始与拖拽排序。" }) : /* @__PURE__ */ m.jsx("div", { className: "qlist", children: A.map((M) => /* @__PURE__ */ m.jsxs(
      "div",
      {
        className: me === M.key ? "qrow dragging" : "qrow",
        draggable: M.status === "pending",
        onDragStart: () => ae(M.key),
        onDragOver: (P) => P.preventDefault(),
        onDrop: () => F(M.key),
        onDragEnd: () => ae(null),
        children: [
          /* @__PURE__ */ m.jsx("span", { className: "qhandle", title: "拖拽排序（仅排队中）", children: "☰" }),
          /* @__PURE__ */ m.jsx("span", { className: "qstatus", children: Ab[M.status] || M.status }),
          /* @__PURE__ */ m.jsx("span", { className: "qlabel", title: M.message || M.file || "", children: M.label }),
          (M.status === "pending" || M.status === "running") && /* @__PURE__ */ m.jsx(Pe, { onClick: () => {
            q("cancel", M.key);
          }, children: "停止" }),
          M.status === "stopping" && /* @__PURE__ */ m.jsx("span", { className: "hint", children: "停止中…" }),
          (M.status === "cancelled" || M.status === "failed") && /* @__PURE__ */ m.jsx(Pe, { onClick: () => {
            q("start", M.key);
          }, children: "开始" }),
          M.status !== "running" && M.status !== "stopping" && /* @__PURE__ */ m.jsx(Pe, { onClick: () => {
            q("remove", M.key);
          }, children: "移除" }),
          M.status === "failed" && M.message && /* @__PURE__ */ m.jsx("span", { className: "qerr", children: M.message }),
          M.status === "done" && /* @__PURE__ */ m.jsx("span", { className: "qok", children: "已入库" })
        ]
      },
      M.key
    )) })
  ] });
}
function Nb({ stats: u, go: r, onDone: o }) {
  const c = u ? u.queuePending + u.failures : 0, [d, h] = Q.useState("loading");
  return Q.useEffect(() => {
    Ze("/api/config").then((p) => {
      const b = p?.config?.libraryPath ?? "";
      h(b && !String(b).startsWith("NOT_CONFIGURED") ? "ok" : "unconfigured");
    }).catch(() => h("loading"));
  }, []), /* @__PURE__ */ m.jsxs("div", { className: "home", children: [
    /* @__PURE__ */ m.jsx("p", { className: "tagline", children: "把论文拆成可回溯的论证结构，沉淀为写作模型，写论文时检索取用。" }),
    d === "unconfigured" && /* @__PURE__ */ m.jsxs("div", { className: "home-banner", children: [
      "尚未配置结构库。到「设置」填写 libraryPath 并保存，模板会自动铺到该目录，无需手动拷贝。",
      /* @__PURE__ */ m.jsx(Pe, { onClick: () => r("settings"), children: "前往设置" })
    ] }),
    /* @__PURE__ */ m.jsxs("ol", { className: "steps", children: [
      /* @__PURE__ */ m.jsx("li", { children: "把文献拖进面板一键拆解，或在对话里让我拆" }),
      /* @__PURE__ */ m.jsx("li", { children: "库里提出的疑问到「待办」处理，保证每条引文可回溯" }),
      /* @__PURE__ */ m.jsx("li", { children: "写论文时到「取用」检索同类模型，按出处引用" })
    ] }),
    /* @__PURE__ */ m.jsxs("div", { className: "home-actions", children: [
      /* @__PURE__ */ m.jsx(Pe, { variant: "primary", onClick: () => r("use"), children: "去取用" }),
      /* @__PURE__ */ m.jsx(Pe, { onClick: () => r("library"), children: "看结构库" }),
      /* @__PURE__ */ m.jsx(Pe, { disabled: !u || c === 0, onClick: () => r("todo"), children: c > 0 ? `处理待办（${c}）` : "暂无待办" })
    ] }),
    /* @__PURE__ */ m.jsx("div", { className: "statusbar", children: u ? `库内 ${u.papers} 篇目 · ${u.models} 模型 · 待办 ${c} 条` : "统计中…" }),
    /* @__PURE__ */ m.jsx(Tb, { onDone: o })
  ] });
}
function wb({ tick: u, bump: r }) {
  const [o, c] = Q.useState([]), [d, h] = Q.useState(null), [p, b] = Q.useState(""), C = Q.useCallback(async () => {
    const v = await Ze("/api/import/failures").catch(() => ({ items: [] }));
    c(v.items || []);
  }, []);
  Q.useEffect(() => {
    C();
  }, [C, u]), Q.useEffect(() => {
    let v = !1;
    return (async () => {
      const I = await Ze("/api/import/status").catch(() => null);
      if (v || !I || !I.running) return;
      b("有导入任务进行中，等待结果…");
      const U = await Lr();
      v || (b(U.ok ? `完成：${U.file}` : `仍失败：${U.message || "未知错误"}${U.failureTs ? "（已刷新记录）" : ""}`), (U.ok || U.failureTs) && (await C(), r()));
    })(), () => {
      v = !0;
    };
  }, []);
  async function w(v) {
    h(v.ts), b("");
    try {
      const I = await Ot("/api/import", { text: v.text, fromTs: v.ts });
      if (I.started) {
        b("重试中（约 1-3 分钟，可离开本页）…");
        const U = await Lr();
        U.ok ? (b(`重试成功：${U.file}`), Ct.toast.show({ message: "重试成功，已入库", type: "success" })) : b(`仍失败：${U.message || "未知错误"}${U.failureTs ? "（已刷新记录）" : ""}`);
      } else I.ok ? (b(`重试成功：${I.file}`), Ct.toast.show({ message: "重试成功，已入库", type: "success" })) : b(`仍失败：${I.message || "未知错误"}`);
    } catch (I) {
      b(`请求失败：${String(I?.message || I)}`);
    }
    h(null), await C(), r();
  }
  async function z(v) {
    await Ot("/api/import/failures/dismiss", { ts: v.ts }).catch(() => null), await C(), r();
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
      (v.errors || []).slice(0, 4).map((I, U) => /* @__PURE__ */ m.jsxs("div", { className: "hint", children: [
        "· ",
        I.field,
        "：",
        I.message
      ] }, U)),
      /* @__PURE__ */ m.jsxs("div", { className: "fail-actions", children: [
        /* @__PURE__ */ m.jsx(Pe, { variant: "primary", disabled: d === v.ts, onClick: () => {
          w(v);
        }, children: d === v.ts ? "重试中…" : "重试" }),
        /* @__PURE__ */ m.jsx(Pe, { disabled: d === v.ts, onClick: () => {
          z(v);
        }, children: "移除" })
      ] })
    ] }, v.ts)),
    p && /* @__PURE__ */ m.jsx("p", { className: p.startsWith("重试成功") ? "ok" : "err", children: p })
  ] }) : /* @__PURE__ */ m.jsx(iu, { title: "暂无导入失败", description: "导入拆解失败的文献会落在这里，可原样重试。" });
}
function Ob() {
  const u = document.getElementById("root")?.dataset.surface || "page", [r, o] = Q.useState("home"), [c, d] = Q.useState({
    home: "",
    use: "search",
    library: "browse",
    todo: "score",
    settings: ""
  }), [h, p] = Q.useState(0), [b, C] = Q.useState(null), w = Q.useCallback(() => p((A) => A + 1), []), z = Q.useCallback((A) => o(A), []);
  Q.useEffect(() => {
    Ct.ready(), Ct.ui.resize({ height: u === "widget" ? 420 : 760 });
  }, [u]), Q.useEffect(() => {
    let A = !0;
    return hb().then((B) => {
      A && C(B);
    }).catch(() => {
      A && C(null);
    }), () => {
      A = !1;
    };
  }, [h, r]);
  const v = c[r], I = Q.useMemo(() => {
    switch (r) {
      case "home":
        return /* @__PURE__ */ m.jsx(Nb, { stats: b, go: z, onDone: w });
      case "use":
        return v === "models" ? /* @__PURE__ */ m.jsx(Eb, { tick: h }) : /* @__PURE__ */ m.jsx(bb, {});
      case "library":
        return v === "compare" ? /* @__PURE__ */ m.jsx(vb, { tick: h }) : v === "board" ? /* @__PURE__ */ m.jsx(yb, { tick: h }) : /* @__PURE__ */ m.jsx(pb, { tick: h });
      case "todo":
        return v === "queue" ? /* @__PURE__ */ m.jsx(gb, { tick: h }) : v === "import-fail" ? /* @__PURE__ */ m.jsx(wb, { tick: h, bump: w }) : /* @__PURE__ */ m.jsx(mb, {});
      case "settings":
        return /* @__PURE__ */ m.jsx(Sb, {});
    }
  }, [r, v, h, b, z, w]), U = b ? b.queuePending + b.failures : 0;
  return /* @__PURE__ */ m.jsx(ub, { mode: "inherit", className: "plugin-panel", children: /* @__PURE__ */ m.jsxs(
    Ca,
    {
      title: "论文结构建模",
      description: "把论文拆成可回溯的论证结构，沉淀为写作模型，写论文时检索取用。",
      actions: /* @__PURE__ */ m.jsx(Pe, { variant: "ghost", onClick: w, children: "刷新" }),
      children: [
        /* @__PURE__ */ m.jsx("nav", { className: "tabs zones", children: sb.map((A) => /* @__PURE__ */ m.jsxs("button", { className: r === A.id ? "tab on" : "tab", onClick: () => o(A.id), children: [
          A.label,
          A.id === "todo" && U > 0 && /* @__PURE__ */ m.jsx("span", { className: "nav-badge", children: U })
        ] }, A.id)) }),
        r !== "home" && r !== "settings" && /* @__PURE__ */ m.jsx("nav", { className: "tabs sub", children: ob[r].map((A) => /* @__PURE__ */ m.jsx(
          "button",
          {
            className: v === A.id ? "tab on" : "tab",
            onClick: () => d((B) => ({ ...B, [r]: A.id })),
            children: A.label
          },
          A.id
        )) }),
        r === "todo" && /* @__PURE__ */ m.jsxs("div", { className: "todohint", children: [
          /* @__PURE__ */ m.jsxs(
            "button",
            {
              className: v === "import-fail" ? "filebtn on" : "filebtn",
              onClick: () => d((A) => ({ ...A, todo: "import-fail" })),
              children: [
                "导入失败 ",
                b?.failures ?? 0,
                " 条"
              ]
            }
          ),
          /* @__PURE__ */ m.jsxs(
            "button",
            {
              className: v === "queue" ? "filebtn on" : "filebtn",
              onClick: () => d((A) => ({ ...A, todo: "queue" })),
              children: [
                "待裁决 ",
                b?.queuePending ?? 0,
                " 对"
              ]
            }
          ),
          (b?.failures ?? 0) + (b?.queuePending ?? 0) === 0 && /* @__PURE__ */ m.jsx("span", { className: "hint", children: "当前无待办" }),
          /* @__PURE__ */ m.jsx("span", { className: "hint", children: "点右侧数字直达对应待办" })
        ] }),
        /* @__PURE__ */ m.jsx("div", { className: "tab-body", children: I })
      ]
    }
  ) });
}
const Mg = document.getElementById("root");
Mg && g0.createRoot(Mg).render(/* @__PURE__ */ m.jsx(Ob, {}));
