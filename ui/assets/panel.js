var go = { exports: {} }, Xu = {};
var sv;
function u0() {
  if (sv) return Xu;
  sv = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.fragment");
  function o(c, d, h) {
    var p = null;
    if (h !== void 0 && (p = "" + h), d.key !== void 0 && (p = "" + d.key), "key" in d) {
      h = {};
      for (var b in d)
        b !== "key" && (h[b] = d[b]);
    } else h = d;
    return d = h.ref, {
      $$typeof: i,
      type: c,
      key: p,
      ref: d !== void 0 ? d : null,
      props: h
    };
  }
  return Xu.Fragment = r, Xu.jsx = o, Xu.jsxs = o, Xu;
}
var ov;
function i0() {
  return ov || (ov = 1, go.exports = u0()), go.exports;
}
var g = i0(), yo = { exports: {} }, pe = {};
var fv;
function r0() {
  if (fv) return pe;
  fv = 1;
  var i = /* @__PURE__ */ Symbol.for("react.transitional.element"), r = /* @__PURE__ */ Symbol.for("react.portal"), o = /* @__PURE__ */ Symbol.for("react.fragment"), c = /* @__PURE__ */ Symbol.for("react.strict_mode"), d = /* @__PURE__ */ Symbol.for("react.profiler"), h = /* @__PURE__ */ Symbol.for("react.consumer"), p = /* @__PURE__ */ Symbol.for("react.context"), b = /* @__PURE__ */ Symbol.for("react.forward_ref"), C = /* @__PURE__ */ Symbol.for("react.suspense"), w = /* @__PURE__ */ Symbol.for("react.memo"), z = /* @__PURE__ */ Symbol.for("react.lazy"), v = /* @__PURE__ */ Symbol.for("react.activity"), B = /* @__PURE__ */ Symbol.for("react.view_transition"), D = Symbol.iterator;
  function T(E) {
    return E === null || typeof E != "object" ? null : (E = D && E[D] || E["@@iterator"], typeof E == "function" ? E : null);
  }
  var q = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, x = Object.assign, K = {};
  function $(E, Y, ae) {
    this.props = E, this.context = Y, this.refs = K, this.updater = ae || q;
  }
  $.prototype.isReactComponent = {}, $.prototype.setState = function(E, Y) {
    if (typeof E != "object" && typeof E != "function" && E != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, E, Y, "setState");
  }, $.prototype.forceUpdate = function(E) {
    this.updater.enqueueForceUpdate(this, E, "forceUpdate");
  };
  function Q() {
  }
  Q.prototype = $.prototype;
  function V(E, Y, ae) {
    this.props = E, this.context = Y, this.refs = K, this.updater = ae || q;
  }
  var ye = V.prototype = new Q();
  ye.constructor = V, x(ye, $.prototype), ye.isPureReactComponent = !0;
  var oe = Array.isArray;
  function ne() {
  }
  var he = { H: null, A: null, T: null, S: null }, et = Object.prototype.hasOwnProperty;
  function Ve(E, Y, ae) {
    var W = ae.ref;
    return {
      $$typeof: i,
      type: E,
      key: Y,
      ref: W !== void 0 ? W : null,
      props: ae
    };
  }
  function tt(E, Y) {
    return Ve(E.type, Y, E.props);
  }
  function ke(E) {
    return typeof E == "object" && E !== null && E.$$typeof === i;
  }
  function wt(E) {
    var Y = { "=": "=0", ":": "=2" };
    return "$" + E.replace(/[=:]/g, function(ae) {
      return Y[ae];
    });
  }
  var Bt = /\/+/g;
  function G(E, Y) {
    return typeof E == "object" && E !== null && E.key != null ? wt("" + E.key) : Y.toString(36);
  }
  function I(E) {
    switch (E.status) {
      case "fulfilled":
        return E.value;
      case "rejected":
        throw E.reason;
      default:
        switch (typeof E.status == "string" ? E.then(ne, ne) : (E.status = "pending", E.then(
          function(Y) {
            E.status === "pending" && (E.status = "fulfilled", E.value = Y);
          },
          function(Y) {
            E.status === "pending" && (E.status = "rejected", E.reason = Y);
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
  function J(E, Y, ae, W, Ee) {
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
            case z:
              return we = E._init, J(
                we(E._payload),
                Y,
                ae,
                W,
                Ee
              );
          }
      }
    if (we)
      return Ee = Ee(E), we = W === "" ? "." + G(E, 0) : W, oe(Ee) ? (ae = "", we != null && (ae = we.replace(Bt, "$&/") + "/"), J(Ee, Y, ae, "", function(Pt) {
        return Pt;
      })) : Ee != null && (ke(Ee) && (Ee = tt(
        Ee,
        ae + (Ee.key == null || E && E.key === Ee.key ? "" : ("" + Ee.key).replace(
          Bt,
          "$&/"
        ) + "/") + we
      )), Y.push(Ee)), 1;
    we = 0;
    var ee = W === "" ? "." : W + ":";
    if (oe(E))
      for (var fe = 0; fe < E.length; fe++)
        W = E[fe], be = ee + G(W, fe), we += J(
          W,
          Y,
          ae,
          be,
          Ee
        );
    else if (fe = T(E), typeof fe == "function")
      for (E = fe.call(E), fe = 0; !(W = E.next()).done; )
        W = W.value, be = ee + G(W, fe++), we += J(
          W,
          Y,
          ae,
          be,
          Ee
        );
    else if (be === "object") {
      if (typeof E.then == "function")
        return J(
          I(E),
          Y,
          ae,
          W,
          Ee
        );
      throw Y = String(E), Error(
        "Objects are not valid as a React child (found: " + (Y === "[object Object]" ? "object with keys {" + Object.keys(E).join(", ") + "}" : Y) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return we;
  }
  function Z(E, Y, ae) {
    if (E == null) return E;
    var W = [], Ee = 0;
    return J(E, W, "", "", function(be) {
      return Y.call(ae, be, Ee++);
    }), W;
  }
  function re(E) {
    if (E._status === -1) {
      var Y = E._result, ae = Y();
      ae.then(
        function(W) {
          (E._status === 0 || E._status === -1) && (E._status = 1, E._result = W, ae.status === void 0 && (ae.status = "fulfilled", ae.value = W));
        },
        function(W) {
          (E._status === 0 || E._status === -1) && (E._status = 2, E._result = W, ae.status === void 0 && (ae.status = "rejected", ae.reason = W));
        }
      ), E._status === -1 && (E._status = 0, E._result = ae);
    }
    if (E._status === 1) return E._result.default;
    throw E._result;
  }
  var se = typeof reportError == "function" ? reportError : function(E) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var Y = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof E == "object" && E !== null && typeof E.message == "string" ? String(E.message) : String(E),
        error: E
      });
      if (!window.dispatchEvent(Y)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", E);
      return;
    }
    console.error(E);
  };
  function Re(E) {
    var Y = he.T, ae = {};
    ae.types = Y !== null ? Y.types : null, he.T = ae;
    try {
      var W = E(), Ee = he.S;
      Ee !== null && Ee(ae, W), typeof W == "object" && W !== null && typeof W.then == "function" && W.then(ne, se);
    } catch (be) {
      se(be);
    } finally {
      Y !== null && ae.types !== null && (Y.types = ae.types), he.T = Y;
    }
  }
  function Me(E) {
    var Y = he.T;
    if (Y !== null) {
      var ae = Y.types;
      ae === null ? Y.types = [E] : ae.indexOf(E) === -1 && ae.push(E);
    } else Re(Me.bind(null, E));
  }
  var ge = {
    map: Z,
    forEach: function(E, Y, ae) {
      Z(
        E,
        function() {
          Y.apply(this, arguments);
        },
        ae
      );
    },
    count: function(E) {
      var Y = 0;
      return Z(E, function() {
        Y++;
      }), Y;
    },
    toArray: function(E) {
      return Z(E, function(Y) {
        return Y;
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
  return pe.Activity = v, pe.Children = ge, pe.Component = $, pe.Fragment = o, pe.Profiler = d, pe.PureComponent = V, pe.StrictMode = c, pe.Suspense = C, pe.ViewTransition = B, pe.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = he, pe.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(E) {
      return he.H.useMemoCache(E);
    }
  }, pe.addTransitionType = Me, pe.cache = function(E) {
    return function() {
      return E.apply(null, arguments);
    };
  }, pe.cacheSignal = function() {
    return null;
  }, pe.cloneElement = function(E, Y, ae) {
    if (E == null)
      throw Error(
        "The argument must be a React element, but you passed " + E + "."
      );
    var W = x({}, E.props), Ee = E.key;
    if (Y != null)
      for (be in Y.key !== void 0 && (Ee = "" + Y.key), Y)
        !et.call(Y, be) || be === "key" || be === "__self" || be === "__source" || be === "ref" && Y.ref === void 0 || (W[be] = Y[be]);
    var be = arguments.length - 2;
    if (be === 1) W.children = ae;
    else if (1 < be) {
      for (var we = Array(be), ee = 0; ee < be; ee++)
        we[ee] = arguments[ee + 2];
      W.children = we;
    }
    return Ve(E.type, Ee, W);
  }, pe.createContext = function(E) {
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
  }, pe.createElement = function(E, Y, ae) {
    var W, Ee = {}, be = null;
    if (Y != null)
      for (W in Y.key !== void 0 && (be = "" + Y.key), Y)
        et.call(Y, W) && W !== "key" && W !== "__self" && W !== "__source" && (Ee[W] = Y[W]);
    var we = arguments.length - 2;
    if (we === 1) Ee.children = ae;
    else if (1 < we) {
      for (var ee = Array(we), fe = 0; fe < we; fe++)
        ee[fe] = arguments[fe + 2];
      Ee.children = ee;
    }
    if (E && E.defaultProps)
      for (W in we = E.defaultProps, we)
        Ee[W] === void 0 && (Ee[W] = we[W]);
    return Ve(E, be, Ee);
  }, pe.createRef = function() {
    return { current: null };
  }, pe.forwardRef = function(E) {
    return { $$typeof: b, render: E };
  }, pe.isValidElement = ke, pe.lazy = function(E) {
    return {
      $$typeof: z,
      _payload: { _status: -1, _result: E },
      _init: re
    };
  }, pe.memo = function(E, Y) {
    return {
      $$typeof: w,
      type: E,
      compare: Y === void 0 ? null : Y
    };
  }, pe.startTransition = Re, pe.unstable_useCacheRefresh = function() {
    return he.H.useCacheRefresh();
  }, pe.use = function(E) {
    return he.H.use(E);
  }, pe.useActionState = function(E, Y, ae) {
    return he.H.useActionState(E, Y, ae);
  }, pe.useCallback = function(E, Y) {
    return he.H.useCallback(E, Y);
  }, pe.useContext = function(E) {
    return he.H.useContext(E);
  }, pe.useDebugValue = function() {
  }, pe.useDeferredValue = function(E, Y) {
    return he.H.useDeferredValue(E, Y);
  }, pe.useEffect = function(E, Y) {
    return he.H.useEffect(E, Y);
  }, pe.useEffectEvent = function(E) {
    return he.H.useEffectEvent(E);
  }, pe.useId = function() {
    return he.H.useId();
  }, pe.useImperativeHandle = function(E, Y, ae) {
    return he.H.useImperativeHandle(E, Y, ae);
  }, pe.useInsertionEffect = function(E, Y) {
    return he.H.useInsertionEffect(E, Y);
  }, pe.useLayoutEffect = function(E, Y) {
    return he.H.useLayoutEffect(E, Y);
  }, pe.useMemo = function(E, Y) {
    return he.H.useMemo(E, Y);
  }, pe.useOptimistic = function(E, Y) {
    return he.H.useOptimistic(E, Y);
  }, pe.useReducer = function(E, Y, ae) {
    return he.H.useReducer(E, Y, ae);
  }, pe.useRef = function(E) {
    return he.H.useRef(E);
  }, pe.useState = function(E) {
    return he.H.useState(E);
  }, pe.useSyncExternalStore = function(E, Y, ae) {
    return he.H.useSyncExternalStore(
      E,
      Y,
      ae
    );
  }, pe.useTransition = function() {
    return he.H.useTransition();
  }, pe.version = "19.3.0", pe;
}
var dv;
function xo() {
  return dv || (dv = 1, yo.exports = r0()), yo.exports;
}
var k = xo(), Eo = { exports: {} }, Qu = {}, bo = { exports: {} }, So = {};
var hv;
function c0() {
  return hv || (hv = 1, (function(i) {
    function r(I, J) {
      var Z = I.length;
      I.push(J);
      e: for (; 0 < Z; ) {
        var re = Z - 1 >>> 1, se = I[re];
        if (0 < d(se, J))
          I[re] = J, I[Z] = se, Z = re;
        else break e;
      }
    }
    function o(I) {
      return I.length === 0 ? null : I[0];
    }
    function c(I) {
      if (I.length === 0) return null;
      var J = I[0], Z = I.pop();
      if (Z !== J) {
        I[0] = Z;
        e: for (var re = 0, se = I.length, Re = se >>> 1; re < Re; ) {
          var Me = 2 * (re + 1) - 1, ge = I[Me], E = Me + 1, Y = I[E];
          if (0 > d(ge, Z))
            E < se && 0 > d(Y, ge) ? (I[re] = Y, I[E] = Z, re = E) : (I[re] = ge, I[Me] = Z, re = Me);
          else if (E < se && 0 > d(Y, Z))
            I[re] = Y, I[E] = Z, re = E;
          else break e;
        }
      }
      return J;
    }
    function d(I, J) {
      var Z = I.sortIndex - J.sortIndex;
      return Z !== 0 ? Z : I.id - J.id;
    }
    if (i.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var h = performance;
      i.unstable_now = function() {
        return h.now();
      };
    } else {
      var p = Date, b = p.now();
      i.unstable_now = function() {
        return p.now() - b;
      };
    }
    var C = [], w = [], z = 1, v = null, B = 3, D = !1, T = !1, q = !1, x = !1, K = typeof setTimeout == "function" ? setTimeout : null, $ = typeof clearTimeout == "function" ? clearTimeout : null, Q = typeof setImmediate < "u" ? setImmediate : null;
    function V(I) {
      for (var J = o(w); J !== null; ) {
        if (J.callback === null) c(w);
        else if (J.startTime <= I)
          c(w), J.sortIndex = J.expirationTime, r(C, J);
        else break;
        J = o(w);
      }
    }
    function ye(I) {
      if (q = !1, V(I), !T)
        if (o(C) !== null)
          T = !0, oe || (oe = !0, ke());
        else {
          var J = o(w);
          J !== null && G(ye, J.startTime - I);
        }
    }
    var oe = !1, ne = -1, he = 5, et = -1;
    function Ve() {
      return x ? !0 : !(i.unstable_now() - et < he);
    }
    function tt() {
      if (x = !1, oe) {
        var I = i.unstable_now();
        et = I;
        var J = !0;
        try {
          e: {
            T = !1, q && (q = !1, $(ne), ne = -1), D = !0;
            var Z = B;
            try {
              t: {
                for (V(I), v = o(C); v !== null && !(v.expirationTime > I && Ve()); ) {
                  var re = v.callback;
                  if (typeof re == "function") {
                    v.callback = null, B = v.priorityLevel;
                    var se = re(
                      v.expirationTime <= I
                    );
                    if (I = i.unstable_now(), typeof se == "function") {
                      v.callback = se, V(I), J = !0;
                      break t;
                    }
                    v === o(C) && c(C), V(I);
                  } else c(C);
                  v = o(C);
                }
                if (v !== null) J = !0;
                else {
                  var Re = o(w);
                  Re !== null && G(
                    ye,
                    Re.startTime - I
                  ), J = !1;
                }
              }
              break e;
            } finally {
              v = null, B = Z, D = !1;
            }
            J = void 0;
          }
        } finally {
          J ? ke() : oe = !1;
        }
      }
    }
    var ke;
    if (typeof Q == "function")
      ke = function() {
        Q(tt);
      };
    else if (typeof MessageChannel < "u") {
      var wt = new MessageChannel(), Bt = wt.port2;
      wt.port1.onmessage = tt, ke = function() {
        Bt.postMessage(null);
      };
    } else
      ke = function() {
        K(tt, 0);
      };
    function G(I, J) {
      ne = K(function() {
        I(i.unstable_now());
      }, J);
    }
    i.unstable_IdlePriority = 5, i.unstable_ImmediatePriority = 1, i.unstable_LowPriority = 4, i.unstable_NormalPriority = 3, i.unstable_Profiling = null, i.unstable_UserBlockingPriority = 2, i.unstable_cancelCallback = function(I) {
      I.callback = null;
    }, i.unstable_forceFrameRate = function(I) {
      0 > I || 125 < I ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : he = 0 < I ? Math.floor(1e3 / I) : 5;
    }, i.unstable_getCurrentPriorityLevel = function() {
      return B;
    }, i.unstable_next = function(I) {
      switch (B) {
        case 1:
        case 2:
        case 3:
          var J = 3;
          break;
        default:
          J = B;
      }
      var Z = B;
      B = J;
      try {
        return I();
      } finally {
        B = Z;
      }
    }, i.unstable_requestPaint = function() {
      x = !0;
    }, i.unstable_runWithPriority = function(I, J) {
      switch (I) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          I = 3;
      }
      var Z = B;
      B = I;
      try {
        return J();
      } finally {
        B = Z;
      }
    }, i.unstable_scheduleCallback = function(I, J, Z) {
      var re = i.unstable_now();
      switch (typeof Z == "object" && Z !== null ? (Z = Z.delay, Z = typeof Z == "number" && 0 < Z ? re + Z : re) : Z = re, I) {
        case 1:
          var se = -1;
          break;
        case 2:
          se = 250;
          break;
        case 5:
          se = 1073741823;
          break;
        case 4:
          se = 1e4;
          break;
        default:
          se = 5e3;
      }
      return se = Z + se, I = {
        id: z++,
        callback: J,
        priorityLevel: I,
        startTime: Z,
        expirationTime: se,
        sortIndex: -1
      }, Z > re ? (I.sortIndex = Z, r(w, I), o(C) === null && I === o(w) && (q ? ($(ne), ne = -1) : q = !0, G(ye, Z - re))) : (I.sortIndex = se, r(C, I), T || D || (T = !0, oe || (oe = !0, ke()))), I;
    }, i.unstable_shouldYield = Ve, i.unstable_wrapCallback = function(I) {
      var J = B;
      return function() {
        var Z = B;
        B = J;
        try {
          return I.apply(this, arguments);
        } finally {
          B = Z;
        }
      };
    };
  })(So)), So;
}
var mv;
function s0() {
  return mv || (mv = 1, bo.exports = c0()), bo.exports;
}
var To = { exports: {} }, At = {};
var vv;
function o0() {
  if (vv) return At;
  vv = 1;
  var i = xo();
  function r(z) {
    var v = "https://react.dev/errors/" + z;
    if (1 < arguments.length) {
      v += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var B = 2; B < arguments.length; B++)
        v += "&args[]=" + encodeURIComponent(arguments[B]);
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
  function b(z, v, B) {
    var D = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: d,
      key: D == null ? null : D === p ? p : "" + D,
      children: z,
      containerInfo: v,
      implementation: B
    };
  }
  var C = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function w(z, v) {
    if (z === "font") return "";
    if (typeof v == "string")
      return v === "use-credentials" ? v : "";
  }
  return At.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = c, At.browser = function(z) {
    return { $$typeof: h, _reason: z };
  }, At.createPortal = function(z, v) {
    var B = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)
      throw Error(r(299));
    return b(z, v, null, B);
  }, At.flushSync = function(z) {
    var v = C.T, B = c.p;
    try {
      if (C.T = null, c.p = 2, z) return z();
    } finally {
      C.T = v, c.p = B, c.d.f();
    }
  }, At.preconnect = function(z, v) {
    typeof z == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, c.d.C(z, v));
  }, At.prefetchDNS = function(z) {
    typeof z == "string" && c.d.D(z);
  }, At.preinit = function(z, v) {
    if (typeof z == "string" && v && typeof v.as == "string") {
      var B = v.as, D = w(B, v.crossOrigin), T = typeof v.integrity == "string" ? v.integrity : void 0, q = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
      B === "style" ? c.d.S(
        z,
        typeof v.precedence == "string" ? v.precedence : void 0,
        {
          crossOrigin: D,
          integrity: T,
          fetchPriority: q
        }
      ) : B === "script" && c.d.X(z, {
        crossOrigin: D,
        integrity: T,
        fetchPriority: q,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0
      });
    }
  }, At.preinitModule = function(z, v) {
    if (typeof z == "string")
      if (typeof v == "object" && v !== null) {
        if (v.as == null || v.as === "script") {
          var B = w(
            v.as,
            v.crossOrigin
          );
          c.d.M(z, {
            crossOrigin: B,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
            nonce: typeof v.nonce == "string" ? v.nonce : void 0,
            fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0
          });
        }
      } else v == null && c.d.M(z);
  }, At.preload = function(z, v) {
    if (typeof z == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
      var B = v.as, D = w(B, v.crossOrigin);
      c.d.L(z, B, {
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
  }, At.preloadModule = function(z, v) {
    if (typeof z == "string")
      if (v) {
        var B = w(v.as, v.crossOrigin);
        c.d.m(z, {
          as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
          crossOrigin: B,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0,
          nonce: typeof v.nonce == "string" ? v.nonce : void 0,
          fetchPriority: typeof v.fetchPriority == "string" ? v.fetchPriority : void 0
        });
      } else c.d.m(z);
  }, At.requestFormReset = function(z) {
    c.d.r(z);
  }, At.unstable_batchedUpdates = function(z, v) {
    return z(v);
  }, At.useFormState = function(z, v, B) {
    return C.H.useFormState(z, v, B);
  }, At.useFormStatus = function() {
    return C.H.useHostTransitionStatus();
  }, At.version = "19.3.0", At;
}
var pv;
function f0() {
  if (pv) return To.exports;
  pv = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (r) {
        console.error(r);
      }
  }
  return i(), To.exports = o0(), To.exports;
}
var gv;
function d0() {
  if (gv) return Qu;
  gv = 1;
  var i = s0(), r = xo(), o = f0();
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
          if (u === n) return C(l), e;
          if (u === a) return C(l), t;
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
  function z(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = z(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  function v(e, t, n, a, l, u) {
    for (; e !== null; ) {
      if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && n(e, a, l, u) || (e.tag !== 22 || e.memoizedState === null) && (t || e.tag !== 5 && e.tag !== 27) && v(
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
  function D(e) {
    var t = !1;
    for (e = e.return; e !== null && (e.tag === 4 && (t = !0), !(e.tag === 3 || e.tag === 5 || e.tag === 27)); )
      e = e.return;
    return t;
  }
  function T(e) {
    var t = [null, null], n = B(e);
    return n === null || q(
      t,
      e,
      n.child,
      { foundSelf: !1 }
    ), t;
  }
  function q(e, t, n, a) {
    for (; n !== null; ) {
      if (n === t) a.foundSelf = !0;
      else if (n.tag === 5 || n.tag === 27 || n.tag === 6) {
        if (a.foundSelf) return e[1] = n, !0;
        e[0] = n;
      } else if ((n.tag !== 22 || n.memoizedState === null) && q(
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
  var K = null, $ = null;
  function Q(e, t, n) {
    return e === n ? !0 : e === t ? (K = e, !0) : !1;
  }
  function V(e, t, n) {
    return e === n ? ($ = e, !1) : e === t ? ($ !== null && (K = e), !0) : !1;
  }
  function ye(e) {
    if (e === null) return null;
    do
      e = e === null ? null : e.return;
    while (e && e.tag !== 5 && e.tag !== 27 && e.tag !== 3);
    return e || null;
  }
  function oe(e, t, n) {
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
  var ne = Object.assign, he = /* @__PURE__ */ Symbol.for("react.element"), et = /* @__PURE__ */ Symbol.for("react.transitional.element"), Ve = /* @__PURE__ */ Symbol.for("react.portal"), tt = /* @__PURE__ */ Symbol.for("react.fragment"), ke = /* @__PURE__ */ Symbol.for("react.strict_mode"), wt = /* @__PURE__ */ Symbol.for("react.profiler"), Bt = /* @__PURE__ */ Symbol.for("react.consumer"), G = /* @__PURE__ */ Symbol.for("react.context"), I = /* @__PURE__ */ Symbol.for("react.forward_ref"), J = /* @__PURE__ */ Symbol.for("react.suspense"), Z = /* @__PURE__ */ Symbol.for("react.suspense_list"), re = /* @__PURE__ */ Symbol.for("react.memo"), se = /* @__PURE__ */ Symbol.for("react.lazy"), Re = /* @__PURE__ */ Symbol.for("react.activity"), Me = /* @__PURE__ */ Symbol.for("react.legacy_hidden"), ge = /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel"), E = /* @__PURE__ */ Symbol.for("react.view_transition"), Y = /* @__PURE__ */ Symbol.for("react.recoverable"), ae = Symbol.iterator;
  function W(e) {
    return e === null || typeof e != "object" ? null : (e = ae && e[ae] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var Ee = /* @__PURE__ */ Symbol.for("react.client.reference");
  function be(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === Ee ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case tt:
        return "Fragment";
      case wt:
        return "Profiler";
      case ke:
        return "StrictMode";
      case J:
        return "Suspense";
      case Z:
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
        case G:
          return e.displayName || "Context";
        case Bt:
          return (e._context.displayName || "Context") + ".Consumer";
        case I:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case re:
          return t = e.displayName || null, t !== null ? t : be(e.type) || "Memo";
        case se:
          t = e._payload, e = e._init;
          try {
            return be(e(t));
          } catch {
          }
      }
    return null;
  }
  var we = Array.isArray, ee = r.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, fe = o.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, Pt = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, $n = [], Mn = -1;
  function Wt(e) {
    return { current: e };
  }
  function ce(e) {
    0 > Mn || (e.current = $n[Mn], $n[Mn] = null, Mn--);
  }
  function qe(e, t) {
    Mn++, $n[Mn] = e.current, e.current = t;
  }
  var It = Wt(null), _ = Wt(null), X = Wt(null), M = Wt(null);
  function L(e, t) {
    switch (qe(X, t), qe(_, e), qe(It, null), t.nodeType) {
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
    ce(It), qe(It, e);
  }
  function le() {
    ce(It), ce(_), ce(X);
  }
  function ze(e) {
    var t = e.memoizedState;
    t !== null && (Vl._currentValue = t.memoizedState, qe(M, e)), t = It.current;
    var n = Em(t, e.type);
    t !== n && (qe(_, e), qe(It, n));
  }
  function Ye(e) {
    _.current === e && (ce(It), ce(_)), M.current === e && (ce(M), Vl._currentValue = Pt);
  }
  var vt, zt;
  function pt(e) {
    if (vt === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        vt = t && t[1] || "", zt = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + vt + e + zt;
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
                } catch (F) {
                  var S = F;
                }
                Reflect.construct(e, [], H);
              } else {
                try {
                  H.call();
                } catch (F) {
                  S = F;
                }
                H = !1;
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
                  }), H = !0, new e();
                } finally {
                  H && (R !== void 0 ? Object.defineProperty(e.prototype, "props", R) : delete e.prototype.props);
                }
              }
            } else {
              try {
                throw Error();
              } catch (F) {
                S = F;
              }
              (H = e()) && typeof H.catch == "function" && H.catch(function() {
              });
            }
          } catch (F) {
            if (F && S && typeof F.stack == "string")
              return [F.stack, S.stack];
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
`), N = f.split(`
`);
        for (l = a = 0; a < m.length && !m[a].includes("DetermineComponentFrameRoot"); )
          a++;
        for (; l < N.length && !N[l].includes(
          "DetermineComponentFrameRoot"
        ); )
          l++;
        if (a === m.length || l === N.length)
          for (a = m.length - 1, l = N.length - 1; 1 <= a && 0 <= l && m[a] !== N[l]; )
            l--;
        for (; 1 <= a && 0 <= l; a--, l--)
          if (m[a] !== N[l]) {
            if (a !== 1 || l !== 1)
              do
                if (a--, l--, 0 > l || m[a] !== N[l]) {
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
  var mn = Object.prototype.hasOwnProperty, Vr = i.unstable_scheduleCallback, Gr = i.unstable_cancelCallback, op = i.unstable_shouldYield, fp = i.unstable_requestPaint, Vt = i.unstable_now, dp = i.unstable_getCurrentPriorityLevel, Io = i.unstable_ImmediatePriority, Vo = i.unstable_UserBlockingPriority, ii = i.unstable_NormalPriority, hp = i.unstable_LowPriority, Go = i.unstable_IdlePriority, mp = i.log, vp = i.unstable_setDisableYieldValue, $l = null, Gt = null;
  function Pn(e) {
    if (typeof mp == "function" && vp(e), Gt && typeof Gt.setStrictMode == "function")
      try {
        Gt.setStrictMode($l, e);
      } catch {
      }
  }
  var Yt = Math.clz32 ? Math.clz32 : yp, pp = Math.log, gp = Math.LN2;
  function yp(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (pp(e) / gp | 0) | 0;
  }
  var ri = 256, ci = 262144, si = 4194304;
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
  function oi(e, t, n) {
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
  function Yo(e, t) {
    (t & 8) !== 0 && (t |= t & 32);
    var n = e.entangledLanes;
    if (n !== 0)
      for (e = e.entanglements, n &= t; 0 < n; ) {
        var a = 31 - Yt(n), l = 1 << a;
        t |= e[a], n &= ~l;
      }
    return t;
  }
  function Ep(e, t) {
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
    var e = si;
    return si <<= 1, (si & 62914560) === 0 && (si = 4194304), e;
  }
  function Yr(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Wl(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function bp(e, t, n, a, l, u) {
    var s = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var f = e.entanglements, m = e.expirationTimes, N = e.hiddenUpdates;
    for (n = s & ~n; 0 < n; ) {
      var U = 31 - Yt(n), H = 1 << U;
      f[U] = 0, m[U] = -1;
      var S = N[U];
      if (S !== null)
        for (N[U] = null, U = 0; U < S.length; U++) {
          var R = S[U];
          R !== null && (R.lane &= -536870913);
        }
      n &= ~H;
    }
    a !== 0 && Qo(e, a, 0), u !== 0 && l === 0 && e.tag !== 0 && (e.suspendedLanes |= u & ~(s & ~t));
  }
  function Qo(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var a = 31 - Yt(t);
    e.entangledLanes |= t, e.entanglements[a] = e.entanglements[a] | 1073741824 | n & 261930;
  }
  function Ko(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var a = 31 - Yt(n), l = 1 << a;
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
    var e = fe.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : nv(e.type));
  }
  function ko(e, t) {
    var n = fe.p;
    try {
      return fe.p = e, t();
    } finally {
      fe.p = n;
    }
  }
  var jn = Math.random().toString(36).slice(2), gt = "__reactFiber$" + jn, xt = "__reactProps$" + jn, tl = "__reactContainer$" + jn, Fo = "__reactEvents$" + jn, Sp = "__reactListeners$" + jn, Tp = "__reactHandles$" + jn, $o = "__reactResources$" + jn, eu = "__reactMarker$" + jn, fi = "__reactLoad$" + jn;
  function di(e) {
    delete e[gt], delete e[xt], delete e[Sp], delete e[Tp];
  }
  function xa(e) {
    var t;
    if (t = e[gt]) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[tl] || n[gt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = Hm(e); e !== null; ) {
            if (n = e[gt]) return n;
            e = Hm(e);
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
    var t = e[$o];
    return t || (t = e[$o] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function st(e) {
    e[eu] = !0;
  }
  function Po(e) {
    e[fi] = void 0;
  }
  var Wo = /* @__PURE__ */ new Set(), ef = {};
  function Ma(e, t) {
    ll(e, t), ll(e + "Capture", t);
  }
  function ll(e, t) {
    for (ef[e] = t, e = 0; e < t.length; e++)
      Wo.add(t[e]);
  }
  var Ap = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), tf = {}, nf = {};
  function _p(e) {
    return mn.call(nf, e) ? !0 : mn.call(tf, e) ? !1 : Ap.test(e) ? nf[e] = !0 : (tf[e] = !0, !1);
  }
  var xe = !1;
  function af() {
    var e = xe;
    return xe = !1, e;
  }
  function hi(e, t, n) {
    if (_p(t))
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
  function mi(e, t, n) {
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
  function Xt(e) {
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
  function Np(e, t, n) {
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
  function Kr(e) {
    if (!e._valueTracker) {
      var t = lf(e) ? "checked" : "value";
      e._valueTracker = Np(
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
  var wp = /[\n"\\]/g;
  function en(e) {
    return e.replace(
      wp,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Zr(e, t, n, a, l, u, s, f) {
    e.name = "", s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" ? e.type = s : e.removeAttribute("type"), t != null ? s === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Xt(t)) : e.value !== "" + Xt(t) && (e.value = "" + Xt(t)) : s !== "submit" && s !== "reset" || e.removeAttribute("value"), t != null ? s === "number" && e.value == t ? Jr(e, Xt(e.value)) : Jr(e, Xt(t)) : n != null ? Jr(e, Xt(n)) : a != null && e.removeAttribute("value"), l == null && u != null && (e.defaultChecked = !!u), l != null && (e.checked = l && typeof l != "function" && typeof l != "symbol"), f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" ? e.name = "" + Xt(f) : e.removeAttribute("name");
  }
  function rf(e, t, n, a, l, u, s, f) {
    if (u != null && typeof u != "function" && typeof u != "symbol" && typeof u != "boolean" && (e.type = u), t != null || n != null) {
      if (!(u !== "submit" && u !== "reset" || t != null)) {
        Kr(e);
        return;
      }
      n = n != null ? "" + Xt(n) : "", t = t != null ? "" + Xt(t) : n, f || t === e.value || (e.value = t), e.defaultValue = t;
    }
    a = a ?? l, a = typeof a != "function" && typeof a != "symbol" && !!a, e.checked = f ? e.checked : !!a, e.defaultChecked = !!a, s != null && typeof s != "function" && typeof s != "symbol" && typeof s != "boolean" && (e.name = s), Kr(e);
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
      for (n = "" + Xt(n), t = null, l = 0; l < e.length; l++) {
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
    if (t != null && (t = "" + Xt(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Xt(n) : "";
  }
  function sf(e, t, n, a) {
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
    n = Xt(t), e.defaultValue = n, a = e.textContent, a === n && a !== "" && a !== null && (e.value = a), Kr(e);
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
  var Op = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function of(e, t, n) {
    var a = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? a ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : a ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Op.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function ff(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(c(62));
    if (e = e.style, n != null) {
      for (var a in n)
        !n.hasOwnProperty(a) || t != null && t.hasOwnProperty(a) || (a.indexOf("--") === 0 ? e.setProperty(a, "") : a === "float" ? e.cssFloat = "" : e[a] = "", xe = !0);
      for (var l in t)
        a = t[l], t.hasOwnProperty(l) && n[l] !== a && (of(e, l, a), xe = !0);
    } else
      for (var u in t)
        t.hasOwnProperty(u) && of(e, u, t[u]);
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
  var Cp = /* @__PURE__ */ new Map([
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
  ]), Rp = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function vi(e) {
    return Rp.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
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
      var n = e[xt] || null;
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
              'input[name="' + en(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var a = n[t];
              if (a !== e && a.form === e.form) {
                var l = a[xt] || null;
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
          t = n.value, t != null && ul(e, !!n.multiple, t, !1);
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
      if (Pr = !1, (rl !== null || cl !== null) && (vr(), rl && (t = rl, e = cl, cl = rl = null, df(t), e)))
        for (t = 0; t < e.length; t++) df(e[t]);
    }
  }
  function nu(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var a = n[xt] || null;
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
      var au = {};
      Object.defineProperty(au, "passive", {
        get: function() {
          Wr = !0;
        }
      }), window.addEventListener("test", au, au), window.removeEventListener("test", au, au);
    } catch {
      Wr = !1;
    }
  var Wn = null, ec = null, pi = null;
  function mf() {
    if (pi) return pi;
    var e, t = ec, n = t.length, a, l = "value" in Wn ? Wn.value : Wn.textContent, u = l.length;
    for (e = 0; e < n && t[e] === l[e]; e++) ;
    var s = n - e;
    for (a = 1; a <= s && t[n - a] === l[u - a]; a++) ;
    return pi = l.slice(e, 1 < a ? 1 - a : void 0);
  }
  function gi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function yi() {
    return !0;
  }
  function vf() {
    return !1;
  }
  function Ot(e) {
    function t(n, a, l, u, s) {
      this._reactName = n, this._targetInst = l, this.type = a, this.nativeEvent = u, this.target = s, this.currentTarget = null;
      for (var f in e)
        e.hasOwnProperty(f) && (n = e[f], this[f] = n ? n(u) : u[f]);
      return this.isDefaultPrevented = (u.defaultPrevented != null ? u.defaultPrevented : u.returnValue === !1) ? yi : vf, this.isPropagationStopped = vf, this;
    }
    return ne(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = yi);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = yi);
      },
      persist: function() {
      },
      isPersistent: yi
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
  }, Ei = Ot(ea), lu = ne({}, ea, { view: 0, detail: 0 }), Up = Ot(lu), tc, nc, uu, bi = ne({}, lu, {
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
      return "movementX" in e ? e.movementX : (e !== uu && (uu && e.type === "mousemove" ? (tc = e.screenX - uu.screenX, nc = e.screenY - uu.screenY) : nc = tc = 0, uu = e), tc);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : nc;
    }
  }), pf = Ot(bi), Dp = ne({}, bi, { dataTransfer: 0 }), zp = Ot(Dp), xp = ne({}, lu, { relatedTarget: 0 }), ac = Ot(xp), Mp = ne({}, ea, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), jp = Ot(Mp), Hp = ne({}, ea, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), qp = Ot(Hp), Lp = ne({}, ea, { data: 0 }), gf = Ot(Lp), Bp = {
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
  }, Ip = {
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
  }, Vp = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function Gp(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = Vp[e]) ? !!t[e] : !1;
  }
  function lc() {
    return Gp;
  }
  var Yp = ne({}, lu, {
    key: function(e) {
      if (e.key) {
        var t = Bp[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = gi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Ip[e.keyCode] || "Unidentified" : "";
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
      return e.type === "keypress" ? gi(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? gi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), Xp = Ot(Yp), Qp = ne({}, bi, {
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
  }), yf = Ot(Qp), Kp = ne({}, ea, { submitter: 0 }), Zp = Ot(Kp), Jp = ne({}, lu, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: lc
  }), kp = Ot(Jp), Fp = ne({}, ea, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), $p = Ot(Fp), Pp = ne({}, bi, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), Wp = Ot(Pp), eg = ne({}, ea, {
    newState: 0,
    oldState: 0,
    source: 0
  }), tg = Ot(eg), ng = [9, 13, 27, 32], uc = qn && "CompositionEvent" in window, iu = null;
  qn && "documentMode" in document && (iu = document.documentMode);
  var ag = qn && "TextEvent" in window && !iu, Ef = qn && (!uc || iu && 8 < iu && 11 >= iu), bf = " ", Sf = !1;
  function Tf(e, t) {
    switch (e) {
      case "keyup":
        return ng.indexOf(t.keyCode) !== -1;
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
  function lg(e, t) {
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
  function ug(e, t) {
    if (sl)
      return e === "compositionend" || !uc && Tf(e, t) ? (e = mf(), pi = ec = Wn = null, sl = !1, e) : null;
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
  var ig = {
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
    return t === "input" ? !!ig[e.type] : t === "textarea";
  }
  function Nf(e, t, n, a) {
    rl ? cl ? cl.push(a) : cl = [a] : rl = a, t = Sr(t, "onChange"), 0 < t.length && (n = new Ei(
      "onChange",
      "change",
      null,
      n,
      a
    ), e.push({ event: n, listeners: t }));
  }
  var ru = null, cu = null;
  function rg(e) {
    dm(e, 0);
  }
  function Si(e) {
    var t = tu(e);
    if (uf(t)) return e;
  }
  function wf(e, t) {
    if (e === "change") return t;
  }
  var Of = !1;
  if (qn) {
    var ic;
    if (qn) {
      var rc = "oninput" in document;
      if (!rc) {
        var Cf = document.createElement("div");
        Cf.setAttribute("oninput", "return;"), rc = typeof Cf.oninput == "function";
      }
      ic = rc;
    } else ic = !1;
    Of = ic && (!document.documentMode || 9 < document.documentMode);
  }
  function Rf() {
    ru && (ru.detachEvent("onpropertychange", Uf), cu = ru = null);
  }
  function Uf(e) {
    if (e.propertyName === "value" && Si(cu)) {
      var t = [];
      Nf(
        t,
        cu,
        e,
        $r(e)
      ), hf(rg, t);
    }
  }
  function cg(e, t, n) {
    e === "focusin" ? (Rf(), ru = t, cu = n, ru.attachEvent("onpropertychange", Uf)) : e === "focusout" && Rf();
  }
  function sg(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return Si(cu);
  }
  function og(e, t) {
    if (e === "click") return Si(t);
  }
  function fg(e, t) {
    if (e === "input" || e === "change")
      return Si(t);
  }
  function dg(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var Qt = typeof Object.is == "function" ? Object.is : dg;
  function su(e, t) {
    if (Qt(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), a = Object.keys(t);
    if (n.length !== a.length) return !1;
    for (a = 0; a < n.length; a++) {
      var l = n[a];
      if (!mn.call(t, l) || !Qt(e[l], t[l]))
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
  function Df(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function zf(e, t) {
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
  function xf(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? xf(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
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
  var hg = qn && "documentMode" in document && 11 >= document.documentMode, ol = null, oc = null, ou = null, fc = !1;
  function jf(e, t, n) {
    var a = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    fc || ol == null || ol !== cc(a) || (a = ol, "selectionStart" in a && sc(a) ? a = { start: a.selectionStart, end: a.selectionEnd } : (a = (a.ownerDocument && a.ownerDocument.defaultView || window).getSelection(), a = {
      anchorNode: a.anchorNode,
      anchorOffset: a.anchorOffset,
      focusNode: a.focusNode,
      focusOffset: a.focusOffset
    }), ou && su(ou, a) || (ou = a, a = Sr(oc, "onSelect"), 0 < a.length && (t = new Ei(
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
  var qf = Ha("animationend"), Lf = Ha("animationiteration"), Bf = Ha("animationstart"), mg = Ha("transitionrun"), vg = Ha("transitionstart"), pg = Ha("transitioncancel"), If = Ha("transitionend"), Vf = /* @__PURE__ */ new Map(), hc = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error fullscreenChange fullscreenError gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  hc.push("scrollEnd");
  function vn(e, t) {
    Vf.set(e, t), Ma(t, [e]);
  }
  var gg = 0;
  function Ln(e, t) {
    if (e.name != null && e.name !== "auto") return e.name;
    if (t.autoName !== null) return t.autoName;
    e = En.identifierPrefix;
    var n = gg++;
    return e = "_" + e + "t_" + n.toString(32) + "_", t.autoName = e;
  }
  function Gf(e) {
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
    return e = Gf(e), t = Gf(t), t == null ? e === "auto" ? null : e : t === "auto" ? null : t;
  }
  var Ti = typeof reportError == "function" ? reportError : function(e) {
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
  }, tn = [], dl = 0, mc = 0;
  function Ai() {
    for (var e = dl, t = mc = dl = 0; t < e; ) {
      var n = tn[t];
      tn[t++] = null;
      var a = tn[t];
      tn[t++] = null;
      var l = tn[t];
      tn[t++] = null;
      var u = tn[t];
      if (tn[t++] = null, a !== null && l !== null) {
        var s = a.pending;
        s === null ? l.next = l : (l.next = s.next, s.next = l), a.pending = l;
      }
      u !== 0 && Yf(n, l, u);
    }
  }
  function _i(e, t, n, a) {
    tn[dl++] = e, tn[dl++] = t, tn[dl++] = n, tn[dl++] = a, mc |= a, e.lanes |= a, e = e.alternate, e !== null && (e.lanes |= a);
  }
  function vc(e, t, n, a) {
    return _i(e, t, n, a), Ni(e);
  }
  function qa(e, t) {
    return _i(e, null, null, t), Ni(e);
  }
  function Yf(e, t, n) {
    e.lanes |= n;
    var a = e.alternate;
    a !== null && (a.lanes |= n);
    for (var l = !1, u = e.return; u !== null; )
      u.childLanes |= n, a = u.alternate, a !== null && (a.childLanes |= n), u.tag === 22 && (e = u.stateNode, e === null || e._visibility & 1 || (l = !0)), e = u, u = u.return;
    return e.tag === 3 ? (u = e.stateNode, l && t !== null && (l = 31 - Yt(n), e = u.hiddenUpdates, a = e[l], a === null ? e[l] = [t] : a.push(t), t.lane = n | 536870912), u) : null;
  }
  function Ni(e) {
    if (50 < zu)
      throw zu = 0, mr = null, Error(c(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var hl = {};
  function yg(e, t, n, a) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = a, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Mt(e, t, n, a) {
    return new yg(e, t, n, a);
  }
  function pc(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function In(e, t) {
    var n = e.alternate;
    return n === null ? (n = Mt(
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
  function wi(e, t, n, a, l, u) {
    var s = 0;
    if (a = e, typeof a == "function") pc(a) && (s = 1);
    else if (typeof a == "string")
      s = Ky(
        e,
        n,
        It.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (a) {
        case Re:
          return e = Mt(31, n, t, l), e.elementType = Re, e.lanes = u, e;
        case tt:
          return La(n.children, l, u, t);
        case ke:
          s = 8, l |= 24;
          break;
        case wt:
          return e = Mt(12, n, t, l | 2), e.elementType = wt, e.lanes = u, e;
        case J:
          return e = Mt(13, n, t, l), e.elementType = J, e.lanes = u, e;
        case Z:
          return e = Mt(19, n, t, l), e.elementType = Z, e.lanes = u, e;
        case Me:
        case E:
          return e = l | 32, e = Mt(30, n, t, e), e.elementType = E, e.lanes = u, e.stateNode = {
            autoName: null,
            paired: null,
            clones: null,
            ref: null
          }, e;
        default:
          if (typeof a == "object" && a !== null)
            switch (a.$$typeof) {
              case G:
                s = 10;
                break e;
              case Bt:
                s = 9;
                break e;
              case I:
                s = 11;
                break e;
              case re:
                s = 14;
                break e;
              case se:
                s = 16, a = null;
                break e;
            }
          s = 29, n = Error(
            c(130, e === null ? "null" : typeof e, "")
          ), a = null;
      }
    return t = Mt(s, n, t, l), t.elementType = e, t.type = a, t.lanes = u, t;
  }
  function La(e, t, n, a) {
    return e = Mt(7, e, a, t), e.lanes = n, e;
  }
  function gc(e, t, n) {
    return e = Mt(6, e, null, t), e.lanes = n, e;
  }
  function Qf(e) {
    var t = Mt(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function yc(e, t, n) {
    return t = Mt(
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
  function nn(e, t) {
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
  var ml = [], vl = 0, Oi = null, fu = 0, an = [], ln = 0, ta = null, _n = 1, Nn = "";
  function Vn(e, t) {
    ml[vl++] = fu, ml[vl++] = Oi, Oi = e, fu = t;
  }
  function Zf(e, t, n) {
    an[ln++] = _n, an[ln++] = Nn, an[ln++] = ta, ta = e;
    var a = _n;
    e = Nn;
    var l = 32 - Yt(a) - 1;
    a &= ~(1 << l), n += 1;
    var u = 32 - Yt(t) + l;
    if (30 < u) {
      var s = l - l % 5;
      u = (a & (1 << s) - 1).toString(32), a >>= s, l -= s, _n = 1 << 32 - Yt(t) + l | n << l | a, Nn = u + e;
    } else
      _n = 1 << u | n << l | a, Nn = e;
  }
  function Ci(e) {
    e.return !== null && (Vn(e, 1), Zf(e, 1, 0));
  }
  function Ec(e) {
    for (; e === Oi; )
      Oi = ml[--vl], ml[vl] = null, fu = ml[--vl], ml[vl] = null;
    for (; e === ta; )
      ta = an[--ln], an[ln] = null, Nn = an[--ln], an[ln] = null, _n = an[--ln], an[ln] = null;
  }
  function Jf(e, t) {
    an[ln++] = _n, an[ln++] = Nn, an[ln++] = ta, _n = t.id, Nn = t.overflow, ta = e;
  }
  var ot = null, Qe = null, Ae = !1, na = null, un = !1, bc = Error(c(519));
  function aa(e) {
    var t = Error(
      c(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw du(nn(t, e)), bc;
  }
  function kf(e) {
    var t = e.stateNode, n = e.type, a = e.memoizedProps;
    switch (t[gt] = e, t[xt] = a, n) {
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
        Ne("invalid", t), rf(
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
        Ne("invalid", t), sf(t, a.value, a.defaultValue, a.children);
    }
    n = a.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || a.suppressHydrationWarning === !0 || pm(t.textContent, n) ? (a.popover != null && (Ne("beforetoggle", t), Ne("toggle", t)), a.onScroll != null && Ne("scroll", t), a.onScrollEnd != null && Ne("scrollend", t), a.onClick != null && (t.onclick = An), t = !0) : t = !1, t || aa(e, !0);
  }
  function Ri(e) {
    for (ot = e.return; ot; )
      switch (ot.tag) {
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
          ot = ot.return;
      }
  }
  function pl(e) {
    if (e !== ot) return !1;
    if (!Ae) return Ri(e), Ae = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || Fs(e.type, e.memoizedProps)), n = !n), n && Qe && aa(e), Ri(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Qe = jm(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(c(317));
      Qe = jm(e);
    } else
      t === 27 ? (t = Qe, Ea(e.type) ? (e = uo, uo = null, Qe = e) : Qe = t) : Qe = ot ? cn(e.stateNode.nextSibling) : null;
    return !0;
  }
  function Ba() {
    Qe = ot = null, Ae = !1;
  }
  function Sc() {
    var e = na;
    return e !== null && (qt === null ? qt = e : qt.push.apply(
      qt,
      e
    ), na = null), e;
  }
  function du(e) {
    na === null ? na = [e] : na.push(e);
  }
  var Tc = Wt(null), Ia = null, Gn = null;
  function la(e, t, n) {
    qe(Tc, t._currentValue), t._currentValue = n;
  }
  function Yn(e) {
    e._currentValue = Tc.current, ce(Tc);
  }
  function Ui(e, t, n) {
    for (; e !== null; ) {
      var a = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, a !== null && (a.childLanes |= t)) : a !== null && (a.childLanes & t) !== t && (a.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function Ac(e, t, n, a) {
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
              u.lanes |= n, f = u.alternate, f !== null && (f.lanes |= n), Ui(
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
        s.lanes |= n, u = s.alternate, u !== null && (u.lanes |= n), Ui(s, n, e), s = null;
      } else
        l.tag === 13 && l.memoizedState !== null && l.memoizedState.dehydrated === null ? (l.lanes |= n, s = l.alternate, s !== null && (s.lanes |= n), Ui(
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
          Qt(l.pendingProps.value, s.value) || (e !== null ? e.push(f) : e = [f]);
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
  function Di(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!Qt(
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
    return Ff(Ia, e);
  }
  function zi(e, t) {
    return Ia === null && Ga(e), Ff(e, t);
  }
  function Ff(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, Gn === null) {
      if (e === null) throw Error(c(308));
      Gn = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Gn = Gn.next = t;
    return n;
  }
  var Eg = typeof AbortController < "u" ? AbortController : function() {
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
  }, bg = i.unstable_scheduleCallback, Sg = i.unstable_NormalPriority, nt = {
    $$typeof: G,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function _c() {
    return {
      controller: new Eg(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function hu(e) {
    e.refCount--, e.refCount === 0 && bg(Sg, function() {
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
  var mu = null;
  function Tg(e) {
    var t = e.transitionTypes;
    return e.transitionTypes = null, t;
  }
  var vu = null, Nc = 0, Ya = 0, gl = null;
  function Ag(e, t) {
    if (vu === null) {
      var n = vu = [];
      Nc = 0, Ya = Vs(), gl = {
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
    if (--Nc === 0 && (mu = null, vu !== null)) {
      gl !== null && (gl.status = "fulfilled");
      var e = vu;
      vu = null, Ya = 0, gl = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function _g(e, t) {
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
  var Wf = ee.S;
  ee.S = function(e, t) {
    if (Qh = Vt(), typeof t == "object" && t !== null && typeof t.then == "function" && Ag(e, t), mu !== null)
      for (var n = jl; n !== null; )
        $f(n, mu), n = n.next;
    if (n = e.types, n !== null) {
      for (var a = jl; a !== null; )
        $f(a, n), a = a.next;
      if (Ya !== 0) {
        a = mu, a === null && (a = mu = []);
        for (var l = 0; l < n.length; l++) {
          var u = n[l];
          a.indexOf(u) === -1 && a.push(u);
        }
      }
    }
    Wf !== null && Wf(e, t);
  };
  var Xa = Wt(null);
  function wc() {
    var e = Xa.current;
    return e !== null ? e : Xe.pooledCache;
  }
  function xi(e, t) {
    t === null ? qe(Xa, Xa.current) : qe(Xa, t.pool);
  }
  function ed() {
    var e = wc();
    return e === null ? null : { parent: nt._currentValue, pool: e };
  }
  var yl = Error(c(460)), Oc = Error(c(474)), Mi = Error(c(542)), ji = { then: function() {
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
    if (e === yl || e === Mi)
      throw Error(c(483));
  }
  var El = null, pu = 0;
  function Hi(e) {
    var t = pu;
    return pu += 1, El === null && (El = []), nd(El, e, t);
  }
  function ua(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function qi(e, t) {
    throw t.$$typeof === he ? Error(c(525)) : (e = Object.prototype.toString.call(t), Error(
      c(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function ud(e) {
    function t(A, y) {
      if (e) {
        var O = A.deletions;
        O === null ? (A.deletions = [y], A.flags |= 16) : O.push(y);
      }
    }
    function n(A, y) {
      if (!e) return null;
      for (; y !== null; )
        t(A, y), y = y.sibling;
      return null;
    }
    function a(A) {
      for (var y = /* @__PURE__ */ new Map(); A !== null; )
        A.key === null ? y.set(A.index, A) : y.set(A.key, A), A = A.sibling;
      return y;
    }
    function l(A, y) {
      return A = In(A, y), A.index = 0, A.sibling = null, A;
    }
    function u(A, y, O) {
      return A.index = O, e ? (O = A.alternate, O !== null ? (O = O.index, O < y ? (A.flags |= 2, y) : O) : (A.flags |= 134217730, y)) : (A.flags |= 1048576, y);
    }
    function s(A) {
      return e && A.alternate === null && (A.flags |= 134217730), A;
    }
    function f(A, y, O, j) {
      return y === null || y.tag !== 6 ? (y = gc(O, A.mode, j), y.return = A, y) : (y = l(y, O), y.return = A, y);
    }
    function m(A, y, O, j) {
      var P = O.type;
      return P === tt ? (A = U(
        A,
        y,
        O.props.children,
        j,
        O.key
      ), ua(A, O), A) : y !== null && (y.elementType === P || typeof P == "object" && P !== null && P.$$typeof === se && Qa(P) === y.type) ? (y = l(y, O.props), ua(y, O), y.return = A, y) : (y = wi(
        O.type,
        O.key,
        O.props,
        null,
        A.mode,
        j
      ), ua(y, O), y.return = A, y);
    }
    function N(A, y, O, j) {
      return y === null || y.tag !== 4 || y.stateNode.containerInfo !== O.containerInfo || y.stateNode.implementation !== O.implementation ? (y = yc(O, A.mode, j), y.return = A, y) : (y = l(y, O.children || []), y.return = A, y);
    }
    function U(A, y, O, j, P) {
      return y === null || y.tag !== 7 ? (y = La(
        O,
        A.mode,
        j,
        P
      ), y.return = A, y) : (y = l(y, O), y.return = A, y);
    }
    function H(A, y, O) {
      if (typeof y == "string" && y !== "" || typeof y == "number" || typeof y == "bigint")
        return y = gc(
          "" + y,
          A.mode,
          O
        ), y.return = A, y;
      if (typeof y == "object" && y !== null) {
        switch (y.$$typeof) {
          case et:
            return O = wi(
              y.type,
              y.key,
              y.props,
              null,
              A.mode,
              O
            ), ua(O, y), O.return = A, O;
          case Ve:
            return y = yc(
              y,
              A.mode,
              O
            ), y.return = A, y;
          case se:
            return y = Qa(y), H(A, y, O);
        }
        if (we(y) || W(y))
          return y = La(
            y,
            A.mode,
            O,
            null
          ), y.return = A, y;
        if (typeof y.then == "function")
          return H(A, Hi(y), O);
        if (y.$$typeof === G)
          return H(
            A,
            zi(A, y),
            O
          );
        qi(A, y);
      }
      return null;
    }
    function S(A, y, O, j) {
      var P = y !== null ? y.key : null;
      if (typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint")
        return P !== null ? null : f(A, y, "" + O, j);
      if (typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case et:
            return O.key === P ? m(A, y, O, j) : null;
          case Ve:
            return O.key === P ? N(A, y, O, j) : null;
          case se:
            return O = Qa(O), S(A, y, O, j);
        }
        if (we(O) || W(O))
          return P !== null ? null : U(A, y, O, j, null);
        if (typeof O.then == "function")
          return S(
            A,
            y,
            Hi(O),
            j
          );
        if (O.$$typeof === G)
          return S(
            A,
            y,
            zi(A, O),
            j
          );
        qi(A, O);
      }
      return null;
    }
    function R(A, y, O, j, P) {
      if (typeof j == "string" && j !== "" || typeof j == "number" || typeof j == "bigint")
        return A = A.get(O) || null, f(y, A, "" + j, P);
      if (typeof j == "object" && j !== null) {
        switch (j.$$typeof) {
          case et:
            return A = A.get(
              j.key === null ? O : j.key
            ) || null, m(y, A, j, P);
          case Ve:
            return A = A.get(
              j.key === null ? O : j.key
            ) || null, N(y, A, j, P);
          case se:
            return j = Qa(j), R(
              A,
              y,
              O,
              j,
              P
            );
        }
        if (we(j) || W(j))
          return A = A.get(O) || null, U(y, A, j, P, null);
        if (typeof j.then == "function")
          return R(
            A,
            y,
            O,
            Hi(j),
            P
          );
        if (j.$$typeof === G)
          return R(
            A,
            y,
            O,
            zi(y, j),
            P
          );
        qi(y, j);
      }
      return null;
    }
    function F(A, y, O, j) {
      for (var P = null, Ce = null, ie = y, de = y = 0, ut = null; ie !== null && de < O.length; de++) {
        ie.index > de ? (ut = ie, ie = null) : ut = ie.sibling;
        var Ue = S(
          A,
          ie,
          O[de],
          j
        );
        if (Ue === null) {
          ie === null && (ie = ut);
          break;
        }
        e && ie && Ue.alternate === null && t(A, ie), y = u(Ue, y, de), Ce === null ? P = Ue : Ce.sibling = Ue, Ce = Ue, ie = ut;
      }
      if (de === O.length)
        return n(A, ie), Ae && Vn(A, de), P;
      if (ie === null) {
        for (; de < O.length; de++)
          ie = H(A, O[de], j), ie !== null && (y = u(
            ie,
            y,
            de
          ), Ce === null ? P = ie : Ce.sibling = ie, Ce = ie);
        return Ae && Vn(A, de), P;
      }
      for (ie = a(ie); de < O.length; de++)
        ut = R(
          ie,
          A,
          de,
          O[de],
          j
        ), ut !== null && (e && (Ue = ut.alternate, Ue !== null && ie.delete(Ue.key === null ? de : Ue.key)), y = u(
          ut,
          y,
          de
        ), Ce === null ? P = ut : Ce.sibling = ut, Ce = ut);
      return e && ie.forEach(function(_a) {
        return t(A, _a);
      }), Ae && Vn(A, de), P;
    }
    function te(A, y, O, j) {
      if (O == null) throw Error(c(151));
      for (var P = null, Ce = null, ie = y, de = y = 0, ut = null, Ue = O.next(); ie !== null && !Ue.done; de++, Ue = O.next()) {
        ie.index > de ? (ut = ie, ie = null) : ut = ie.sibling;
        var _a = S(A, ie, Ue.value, j);
        if (_a === null) {
          ie === null && (ie = ut);
          break;
        }
        e && ie && _a.alternate === null && t(A, ie), y = u(_a, y, de), Ce === null ? P = _a : Ce.sibling = _a, Ce = _a, ie = ut;
      }
      if (Ue.done)
        return n(A, ie), Ae && Vn(A, de), P;
      if (ie === null) {
        for (; !Ue.done; de++, Ue = O.next())
          Ue = H(A, Ue.value, j), Ue !== null && (y = u(Ue, y, de), Ce === null ? P = Ue : Ce.sibling = Ue, Ce = Ue);
        return Ae && Vn(A, de), P;
      }
      for (ie = a(ie); !Ue.done; de++, Ue = O.next())
        Ue = R(ie, A, de, Ue.value, j), Ue !== null && (e && (ut = Ue.alternate, ut !== null && ie.delete(
          ut.key === null ? de : ut.key
        )), y = u(Ue, y, de), Ce === null ? P = Ue : Ce.sibling = Ue, Ce = Ue);
      return e && ie.forEach(function(l0) {
        return t(A, l0);
      }), Ae && Vn(A, de), P;
    }
    function Te(A, y, O, j) {
      if (typeof O == "object" && O !== null && O.type === tt && O.key === null && O.props.ref === void 0 && (O = O.props.children), typeof O == "object" && O !== null) {
        switch (O.$$typeof) {
          case et:
            e: {
              for (var P = O.key; y !== null; ) {
                if (y.key === P) {
                  if (P = O.type, P === tt) {
                    if (y.tag === 7) {
                      n(
                        A,
                        y.sibling
                      ), j = l(
                        y,
                        O.props.children
                      ), ua(j, O), j.return = A, A = j;
                      break e;
                    }
                  } else if (y.elementType === P || typeof P == "object" && P !== null && P.$$typeof === se && Qa(P) === y.type) {
                    n(
                      A,
                      y.sibling
                    ), j = l(y, O.props), ua(j, O), j.return = A, A = j;
                    break e;
                  }
                  n(A, y);
                  break;
                } else t(A, y);
                y = y.sibling;
              }
              O.type === tt ? (j = La(
                O.props.children,
                A.mode,
                j,
                O.key
              ), ua(j, O), j.return = A, A = j) : (j = wi(
                O.type,
                O.key,
                O.props,
                null,
                A.mode,
                j
              ), ua(j, O), j.return = A, A = j);
            }
            return s(A);
          case Ve:
            e: {
              for (P = O.key; y !== null; ) {
                if (y.key === P)
                  if (y.tag === 4 && y.stateNode.containerInfo === O.containerInfo && y.stateNode.implementation === O.implementation) {
                    n(
                      A,
                      y.sibling
                    ), j = l(y, O.children || []), j.return = A, A = j;
                    break e;
                  } else {
                    n(A, y);
                    break;
                  }
                else t(A, y);
                y = y.sibling;
              }
              j = yc(O, A.mode, j), j.return = A, A = j;
            }
            return s(A);
          case se:
            return O = Qa(O), Te(
              A,
              y,
              O,
              j
            );
        }
        if (we(O))
          return F(
            A,
            y,
            O,
            j
          );
        if (W(O)) {
          if (P = W(O), typeof P != "function") throw Error(c(150));
          return O = P.call(O), te(
            A,
            y,
            O,
            j
          );
        }
        if (typeof O.then == "function")
          return Te(
            A,
            y,
            Hi(O),
            j
          );
        if (O.$$typeof === G)
          return Te(
            A,
            y,
            zi(A, O),
            j
          );
        qi(A, O);
      }
      return typeof O == "string" && O !== "" || typeof O == "number" || typeof O == "bigint" ? (O = "" + O, y !== null && y.tag === 6 ? (n(A, y.sibling), j = l(y, O), j.return = A, A = j) : (n(A, y), j = gc(O, A.mode, j), j.return = A, A = j), s(A)) : n(A, y);
    }
    return function(A, y, O, j) {
      try {
        pu = 0;
        var P = Te(
          A,
          y,
          O,
          j
        );
        return El = null, P;
      } catch (ie) {
        if (ie === yl || ie === Mi) throw ie;
        var Ce = Mt(29, ie, null, A.mode);
        return Ce.lanes = j, Ce.return = A, Ce;
      }
    };
  }
  var Za = ud(!0), id = ud(!1), ia = !1;
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
    if (a = a.shared, (je & 2) !== 0) {
      var l = a.pending;
      return l === null ? t.next = t : (t.next = l.next, l.next = t), a.pending = t, t = Ni(e), Yf(e, null, n), t;
    }
    return _i(e, a, t, n), Ni(e);
  }
  function gu(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, Ko(e, n);
    }
  }
  function Uc(e, t) {
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
  var Dc = !1;
  function yu() {
    if (Dc) {
      var e = gl;
      if (e !== null) throw e;
    }
  }
  function Eu(e, t, n, a) {
    Dc = !1;
    var l = e.updateQueue;
    ia = !1;
    var u = l.firstBaseUpdate, s = l.lastBaseUpdate, f = l.shared.pending;
    if (f !== null) {
      l.shared.pending = null;
      var m = f, N = m.next;
      m.next = null, s === null ? u = N : s.next = N, s = m;
      var U = e.alternate;
      U !== null && (U = U.updateQueue, f = U.lastBaseUpdate, f !== s && (f === null ? U.firstBaseUpdate = N : f.next = N, U.lastBaseUpdate = m));
    }
    if (u !== null) {
      var H = l.baseState;
      s = 0, U = N = m = null, f = u;
      do {
        var S = f.lane & -536870913, R = S !== f.lane;
        if (R ? (Oe & S) === S : (a & S) === S) {
          S !== 0 && S === Ya && (Dc = !0), U !== null && (U = U.next = {
            lane: 0,
            tag: f.tag,
            payload: f.payload,
            callback: null,
            next: null
          });
          e: {
            var F = e, te = f;
            S = t;
            var Te = n;
            switch (te.tag) {
              case 1:
                if (F = te.payload, typeof F == "function") {
                  H = F.call(Te, H, S);
                  break e;
                }
                H = F;
                break e;
              case 3:
                F.flags = F.flags & -65537 | 128;
              case 0:
                if (F = te.payload, S = typeof F == "function" ? F.call(Te, H, S) : F, S == null) break e;
                H = ne({}, H, S);
                break e;
              case 2:
                ia = !0;
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
          }, U === null ? (N = U = R, m = H) : U = U.next = R, s |= S;
        if (f = f.next, f === null) {
          if (f = l.shared.pending, f === null)
            break;
          R = f, f = R.next, R.next = null, l.lastBaseUpdate = R, l.shared.pending = null;
        }
      } while (!0);
      U === null && (m = H), l.baseState = m, l.firstBaseUpdate = N, l.lastBaseUpdate = U, u === null && (l.shared.lanes = 0), va |= s, e.lanes = s, e.memoizedState = H;
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
  var sa = Wt(null), Li = Wt(0);
  function sd(e, t) {
    e = Jn, qe(Li, e), qe(sa, t), Jn = e | t.baseLanes;
  }
  function zc() {
    qe(Li, Jn), qe(sa, sa.current);
  }
  function xc() {
    Jn = Li.current, ce(sa), ce(Li);
  }
  var Et = Wt(null), _t = null;
  function oa(e) {
    var t = e.alternate;
    qe(bt, bt.current & 1), qe(Et, e), _t === null && (t === null || sa.current !== null || t.memoizedState !== null) && (_t = e);
  }
  function Mc(e) {
    qe(bt, bt.current), qe(Et, e), _t === null && (_t = e);
  }
  function od(e) {
    e.tag === 22 ? (qe(bt, bt.current), qe(Et, e), _t === null && (_t = e)) : fa();
  }
  function fa() {
    qe(bt, bt.current), qe(Et, Et.current);
  }
  function Kt(e) {
    ce(Et), _t === e && (_t = null), ce(bt);
  }
  var bt = Wt(0);
  function bu(e, t) {
    qe(Et, Et.current), qe(bt, t);
  }
  function jc(e) {
    ce(bt), ce(Et), _t === e && (_t = null);
  }
  function Bi(e) {
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
  var Xn = 0, Se = null, Ge = null, at = null, Ii = !1, bl = !1, Ja = !1, Vi = 0, Su = 0, Sl = null, Ng = 0;
  function Fe() {
    throw Error(c(321));
  }
  function Hc(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!Qt(e[n], t[n])) return !1;
    return !0;
  }
  function qc(e, t, n, a, l, u) {
    return Xn = u, Se = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, ee.H = e === null || e.memoizedState === null ? Zd : Jd, Ja = !1, u = n(a, l), Ja = !1, bl && (u = dd(
      t,
      n,
      a,
      l
    )), fd(e), u;
  }
  function fd(e) {
    ee.H = Ji;
    var t = Ge !== null && Ge.next !== null;
    if (Xn = 0, at = Ge = Se = null, Ii = !1, Su = 0, Sl = null, t) throw Error(c(300));
    e === null || lt || (e = e.dependencies, e !== null && Di(e) && (lt = !0));
  }
  function dd(e, t, n, a) {
    Se = e;
    var l = 0;
    do {
      if (bl && (Sl = null), Su = 0, bl = !1, 25 <= l) throw Error(c(301));
      if (l += 1, at = Ge = null, e.updateQueue != null) {
        var u = e.updateQueue;
        u.lastEffect = null, u.events = null, u.stores = null, u.memoCache != null && (u.memoCache.index = 0);
      }
      ee.H = xg, u = t(n, a);
    } while (bl);
    return u;
  }
  function wg() {
    var e = ee.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? Tu(t) : t, e = e.useState()[0], (Ge !== null ? Ge.memoizedState : null) !== e && (Se.flags |= 1024), t;
  }
  function Lc() {
    var e = Vi !== 0;
    return Vi = 0, e;
  }
  function Bc(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function Ic(e) {
    if (Ii) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Ii = !1;
    }
    Xn = 0, at = Ge = Se = null, bl = !1, Su = Vi = 0, Sl = null;
  }
  function Ct() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return at === null ? Se.memoizedState = at = e : at = at.next = e, at;
  }
  function We() {
    if (Ge === null) {
      var e = Se.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = Ge.next;
    var t = at === null ? Se.memoizedState : at.next;
    if (t !== null)
      at = t, Ge = e;
    else {
      if (e === null)
        throw Se.alternate === null ? Error(c(467)) : Error(c(310));
      Ge = e, e = {
        memoizedState: Ge.memoizedState,
        baseState: Ge.baseState,
        baseQueue: Ge.baseQueue,
        queue: Ge.queue,
        next: null
      }, at === null ? Se.memoizedState = at = e : at = at.next = e;
    }
    return at;
  }
  function Gi() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function Tu(e) {
    var t = Su;
    return Su += 1, Sl === null && (Sl = []), e = nd(Sl, e, t), t = Se, (at === null ? t.memoizedState : at.next) === null && (t = t.alternate, ee.H = t === null || t.memoizedState === null ? Zd : Jd), e;
  }
  function Yi(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return Tu(e);
      if (e.$$typeof === Y) return;
      if (e.$$typeof === G) return yt(e);
    }
    throw Error(c(438, String(e)));
  }
  function Vc(e) {
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
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = Gi(), Se.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), a = 0; a < e; a++)
        n[a] = ge;
    return t.index++, n;
  }
  function Qn(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function Xi(e) {
    var t = We();
    return Gc(t, Ge, e);
  }
  function Gc(e, t, n) {
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
      var f = s = null, m = null, N = t, U = !1;
      do {
        var H = N.lane & -536870913;
        if (H !== N.lane ? (Oe & H) === H : (Xn & H) === H) {
          var S = N.revertLane;
          if (S === 0)
            m !== null && (m = m.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null
            }), H === Ya && (U = !0);
          else if ((Xn & S) === S) {
            N = N.next, S === Ya && (U = !0);
            continue;
          } else
            H = {
              lane: 0,
              revertLane: N.revertLane,
              gesture: null,
              action: N.action,
              hasEagerState: N.hasEagerState,
              eagerState: N.eagerState,
              next: null
            }, m === null ? (f = m = H, s = u) : m = m.next = H, Se.lanes |= S, va |= S;
          H = N.action, Ja && n(u, H), u = N.hasEagerState ? N.eagerState : n(u, H);
        } else
          S = {
            lane: H,
            revertLane: N.revertLane,
            gesture: N.gesture,
            action: N.action,
            hasEagerState: N.hasEagerState,
            eagerState: N.eagerState,
            next: null
          }, m === null ? (f = m = S, s = u) : m = m.next = S, Se.lanes |= H, va |= H;
        N = N.next;
      } while (N !== null && N !== t);
      if (m === null ? s = u : m.next = f, !Qt(u, e.memoizedState) && (lt = !0, U && (n = gl, n !== null)))
        throw n;
      e.memoizedState = u, e.baseState = s, e.baseQueue = m, a.lastRenderedState = u;
    }
    return l === null && (a.lanes = 0), [e.memoizedState, a.dispatch];
  }
  function Yc(e) {
    var t = We(), n = t.queue;
    if (n === null) throw Error(c(311));
    n.lastRenderedReducer = e;
    var a = n.dispatch, l = n.pending, u = t.memoizedState;
    if (l !== null) {
      n.pending = null;
      var s = l = l.next;
      do
        u = e(u, s.action), s = s.next;
      while (s !== l);
      Qt(u, t.memoizedState) || (lt = !0), t.memoizedState = u, t.baseQueue === null && (t.baseState = u), n.lastRenderedState = u;
    }
    return [u, a];
  }
  function hd(e, t, n) {
    var a = Se, l = We(), u = Ae;
    if (u) {
      if (n === void 0) throw Error(c(407));
      n = n();
    } else n = t();
    var s = !Qt(
      (Ge || l).memoizedState,
      n
    );
    if (s && (l.memoizedState = n, lt = !0), l = l.queue, Kc(pd.bind(null, a, l, e), [
      e
    ]), e = l.getSnapshot !== t || s || at !== null && (at.memoizedState.tag & 1) !== 0, Tl(
      e ? 9 : 8,
      { destroy: void 0 },
      vd.bind(null, a, l, n, t),
      null
    ), e) {
      if (a.flags |= 2048, Xe === null) throw Error(c(349));
      u || (Xn & 127) !== 0 || md(a, t, n);
    }
    return n;
  }
  function md(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = Se.updateQueue, t === null ? (t = Gi(), Se.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function vd(e, t, n, a) {
    t.value = n, t.getSnapshot = a, gd(t) && yd(e);
  }
  function pd(e, t, n) {
    return n(function() {
      gd(t) && yd(e);
    });
  }
  function gd(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !Qt(e, n);
    } catch {
      return !0;
    }
  }
  function yd(e) {
    var t = qa(e, 2);
    t !== null && Lt(t, e, 2);
  }
  function Xc(e) {
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
  function Ed(e, t, n, a) {
    return e.baseState = n, Gc(
      e,
      Ge,
      typeof a == "function" ? a : Qn
    );
  }
  function Og(e, t, n, a, l) {
    if (Zi(e)) throw Error(c(485));
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
      ee.T !== null ? n(!0) : u.isTransition = !1, a(u), n = t.pending, n === null ? (u.next = t.pending = u, bd(t, u)) : (u.next = n.next, t.pending = n.next = u);
    }
  }
  function bd(e, t) {
    var n = t.action, a = t.payload, l = e.state;
    if (t.isTransition) {
      var u = ee.T, s = {};
      s.types = u !== null ? u.types : null, ee.T = s;
      try {
        var f = n(l, a), m = ee.S;
        m !== null && m(s, f), Sd(e, t, f);
      } catch (N) {
        Qc(e, t, N);
      } finally {
        u !== null && s.types !== null && (u.types = s.types), ee.T = u;
      }
    } else
      try {
        u = n(l, a), Sd(e, t, u);
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
    if (Ae) {
      var n = Xe.formState;
      if (n !== null) {
        e: {
          var a = Se;
          if (Ae) {
            if (Qe) {
              t: {
                for (var l = Qe, u = un; l.nodeType !== 8; ) {
                  if (!u) {
                    l = null;
                    break t;
                  }
                  if (l = cn(
                    l.nextSibling
                  ), l === null) {
                    l = null;
                    break t;
                  }
                }
                u = l.data, l = u === "F!" || u === "F" ? l : null;
              }
              if (l) {
                Qe = cn(
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
      lastRenderedReducer: _d,
      lastRenderedState: t
    }, n.queue = a, n = Xd.bind(
      null,
      Se,
      a
    ), a.dispatch = n, a = Xc(!1), u = $c.bind(
      null,
      Se,
      !1,
      a.queue
    ), a = Ct(), l = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, a.queue = l, n = Og.bind(
      null,
      Se,
      l,
      u,
      n
    ), l.dispatch = n, a.memoizedState = e, [t, n, !1];
  }
  function wd(e) {
    var t = We();
    return Od(t, Ge, e);
  }
  function Od(e, t, n) {
    if (t = Gc(
      e,
      t,
      _d
    )[0], e = Xi(Qn)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var a = Tu(t);
      } catch (s) {
        throw s === yl ? Mi : s;
      }
    else a = t;
    t = We();
    var l = t.queue, u = l.dispatch;
    return n !== t.memoizedState && (Se.flags |= 2048, Tl(
      9,
      { destroy: void 0 },
      Cg.bind(null, l, n),
      null
    )), [a, u, e];
  }
  function Cg(e, t) {
    e.action = t;
  }
  function Cd(e) {
    var t = We(), n = Ge;
    if (n !== null)
      return Od(t, n, e);
    We(), t = t.memoizedState, n = We();
    var a = n.queue.dispatch;
    return n.memoizedState = e, [t, a, !1];
  }
  function Tl(e, t, n, a) {
    return e = { tag: e, create: n, deps: a, inst: t, next: null }, t = Se.updateQueue, t === null && (t = Gi(), Se.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (a = n.next, n.next = e, e.next = a, t.lastEffect = e), e;
  }
  function Rd() {
    return We().memoizedState;
  }
  function Qi(e, t, n, a) {
    var l = Ct();
    Se.flags |= e, l.memoizedState = Tl(
      1 | t,
      { destroy: void 0 },
      n,
      a === void 0 ? null : a
    );
  }
  function Ki(e, t, n, a) {
    var l = We();
    a = a === void 0 ? null : a;
    var u = l.memoizedState.inst;
    Ge !== null && a !== null && Hc(a, Ge.memoizedState.deps) ? l.memoizedState = Tl(t, u, n, a) : (Se.flags |= e, l.memoizedState = Tl(
      1 | t,
      u,
      n,
      a
    ));
  }
  function Ud(e, t) {
    Qi(8390656, 8, e, t);
  }
  function Kc(e, t) {
    Ki(2048, 8, e, t);
  }
  function Rg(e) {
    Se.flags |= 4;
    var t = Se.updateQueue;
    if (t === null)
      t = Gi(), Se.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function Dd(e) {
    var t = We().memoizedState;
    return Rg({ ref: t, nextImpl: e }), function() {
      if ((je & 2) !== 0) throw Error(c(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function zd(e, t) {
    return Ki(4, 2, e, t);
  }
  function xd(e, t) {
    return Ki(4, 4, e, t);
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
    n = n != null ? n.concat([e]) : null, Ki(4, 4, Md.bind(null, t, e), n);
  }
  function Zc() {
  }
  function Hd(e, t) {
    var n = We();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    return t !== null && Hc(t, a[1]) ? a[0] : (n.memoizedState = [e, t], e);
  }
  function qd(e, t) {
    var n = We();
    t = t === void 0 ? null : t;
    var a = n.memoizedState;
    if (t !== null && Hc(t, a[1]))
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
  function Jc(e, t, n) {
    return n === void 0 || (Xn & 1073741824) !== 0 && (Oe & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = Zh(), Se.lanes |= e, va |= e, n);
  }
  function Ld(e, t, n, a) {
    return Qt(n, t) ? n : sa.current !== null ? (e = Jc(e, n, a), Qt(e, t) || (lt = !0), e) : (Xn & 106) === 0 || (Xn & 1073741824) !== 0 && (Oe & 261930) === 0 ? (lt = !0, e.memoizedState = n) : (e = Zh(), Se.lanes |= e, va |= e, t);
  }
  function Bd(e, t, n, a, l) {
    var u = fe.p;
    fe.p = u !== 0 && 8 > u ? u : 8;
    var s = ee.T, f = {};
    f.types = s !== null ? s.types : null, ee.T = f, $c(e, !1, t, n);
    try {
      var m = l(), N = ee.S;
      if (N !== null && N(f, m), m !== null && typeof m == "object" && typeof m.then == "function") {
        var U = _g(
          m,
          a
        );
        Au(
          e,
          t,
          U,
          Ft(e)
        );
      } else
        Au(
          e,
          t,
          a,
          Ft(e)
        );
    } catch (H) {
      Au(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: H },
        Ft()
      );
    } finally {
      fe.p = u, s !== null && f.types !== null && (s.types = f.types), ee.T = s;
    }
  }
  function Ug() {
  }
  function kc(e, t, n, a) {
    if (e.tag !== 5) throw Error(c(476));
    var l = Id(e).queue;
    Bd(
      e,
      l,
      t,
      Pt,
      n === null ? Ug : function() {
        return Vd(e), n(a);
      }
    );
  }
  function Id(e) {
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
        lastRenderedReducer: Qn,
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
        lastRenderedReducer: Qn,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Vd(e) {
    var t = Id(e);
    t.next === null && (t = e.alternate.memoizedState), Au(
      e,
      t.next.queue,
      {},
      Ft()
    );
  }
  function Fc() {
    return yt(Vl);
  }
  function Gd() {
    return We().memoizedState;
  }
  function Yd() {
    return We().memoizedState;
  }
  function Dg(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = Ft();
          e = ra(n);
          var a = ca(t, e, n);
          a !== null && (Lt(a, t, n), gu(a, t, n)), t = { cache: _c() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function zg(e, t, n) {
    var a = Ft();
    n = {
      lane: a,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, Zi(e) ? Qd(t, n) : (n = vc(e, t, n, a), n !== null && (Lt(n, e, a), Kd(n, t, a)));
  }
  function Xd(e, t, n) {
    var a = Ft();
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
    if (Zi(e)) Qd(t, l);
    else {
      var u = e.alternate;
      if (e.lanes === 0 && (u === null || u.lanes === 0) && (u = t.lastRenderedReducer, u !== null))
        try {
          var s = t.lastRenderedState, f = u(s, n);
          if (l.hasEagerState = !0, l.eagerState = f, Qt(f, s))
            return _i(e, t, l, 0), Xe === null && Ai(), !1;
        } catch {
        }
      if (n = vc(e, t, l, a), n !== null)
        return Lt(n, e, a), Kd(n, t, a), !0;
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
    }, Zi(e)) {
      if (t) throw Error(c(479));
    } else
      t = vc(
        e,
        n,
        a,
        2
      ), t !== null && Lt(t, e, 2);
  }
  function Zi(e) {
    var t = e.alternate;
    return e === Se || t !== null && t === Se;
  }
  function Qd(e, t) {
    bl = Ii = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Kd(e, t, n) {
    if ((n & 4194048) !== 0) {
      var a = t.lanes;
      a &= e.pendingLanes, n |= a, t.lanes = n, Ko(e, n);
    }
  }
  var Ji = {
    readContext: yt,
    use: Yi,
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
  }, Zd = {
    readContext: yt,
    use: Yi,
    useCallback: function(e, t) {
      return Ct().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: yt,
    useEffect: Ud,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, Qi(
        4194308,
        4,
        Md.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return Qi(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      Qi(4, 2, e, t);
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
      }, a.queue = e, e = e.dispatch = zg.bind(
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
      e = Xc(e);
      var t = e.queue, n = Xd.bind(null, Se, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: Zc,
    useDeferredValue: function(e, t) {
      var n = Ct();
      return Jc(n, e, t);
    },
    useTransition: function() {
      var e = Xc(!1);
      return e = Bd.bind(
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
        (Oe & 127) !== 0 || md(a, t, n);
      }
      l.memoizedState = n;
      var u = { value: n, getSnapshot: t };
      return l.queue = u, Ud(pd.bind(null, a, u, e), [
        e
      ]), a.flags |= 2048, Tl(
        9,
        { destroy: void 0 },
        vd.bind(
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
        n = (a & ~(1 << 32 - Yt(a) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = Vi++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = Ng++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Fc,
    useFormState: Nd,
    useActionState: Nd,
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
      return t.queue = n, t = $c.bind(
        null,
        Se,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Vc,
    useCacheRefresh: function() {
      return Ct().memoizedState = Dg.bind(
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
  }, Jd = {
    readContext: yt,
    use: Yi,
    useCallback: Hd,
    useContext: yt,
    useEffect: Kc,
    useImperativeHandle: jd,
    useInsertionEffect: zd,
    useLayoutEffect: xd,
    useMemo: qd,
    useReducer: Xi,
    useRef: Rd,
    useState: function() {
      return Xi(Qn);
    },
    useDebugValue: Zc,
    useDeferredValue: function(e, t) {
      var n = We();
      return Ld(
        n,
        Ge.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Xi(Qn)[0], t = We().memoizedState;
      return [
        typeof e == "boolean" ? e : Tu(e),
        t
      ];
    },
    useSyncExternalStore: hd,
    useId: Gd,
    useHostTransitionStatus: Fc,
    useFormState: wd,
    useActionState: wd,
    useOptimistic: function(e, t) {
      var n = We();
      return Ed(n, Ge, e, t);
    },
    useMemoCache: Vc,
    useCacheRefresh: Yd,
    useEffectEvent: Dd
  }, xg = {
    readContext: yt,
    use: Yi,
    useCallback: Hd,
    useContext: yt,
    useEffect: Kc,
    useImperativeHandle: jd,
    useInsertionEffect: zd,
    useLayoutEffect: xd,
    useMemo: qd,
    useReducer: Yc,
    useRef: Rd,
    useState: function() {
      return Yc(Qn);
    },
    useDebugValue: Zc,
    useDeferredValue: function(e, t) {
      var n = We();
      return Ge === null ? Jc(n, e, t) : Ld(
        n,
        Ge.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Yc(Qn)[0], t = We().memoizedState;
      return [
        typeof e == "boolean" ? e : Tu(e),
        t
      ];
    },
    useSyncExternalStore: hd,
    useId: Gd,
    useHostTransitionStatus: Fc,
    useFormState: Cd,
    useActionState: Cd,
    useOptimistic: function(e, t) {
      var n = We();
      return Ge !== null ? Ed(n, Ge, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Vc,
    useCacheRefresh: Yd,
    useEffectEvent: Dd
  };
  function Pc(e, t, n, a) {
    t = e.memoizedState, n = n(a, t), n = n == null ? t : ne({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Wc = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var a = Ft(), l = ra(a);
      l.payload = t, n != null && (l.callback = n), t = ca(e, l, a), t !== null && (Lt(t, e, a), gu(t, e, a));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var a = Ft(), l = ra(a);
      l.tag = 1, l.payload = t, n != null && (l.callback = n), t = ca(e, l, a), t !== null && (Lt(t, e, a), gu(t, e, a));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = Ft(), a = ra(n);
      a.tag = 2, t != null && (a.callback = t), t = ca(e, a, n), t !== null && (Lt(t, e, n), gu(t, e, n));
    }
  };
  function kd(e, t, n, a, l, u, s) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(a, u, s) : t.prototype && t.prototype.isPureReactComponent ? !su(n, a) || !su(l, u) : !0;
  }
  function Fd(e, t, n, a) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, a), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, a), t.state !== e && Wc.enqueueReplaceState(t, t.state, null);
  }
  function ka(e, t) {
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
    Ti(e);
  }
  function Pd(e) {
    console.error(e);
  }
  function Wd(e) {
    Ti(e);
  }
  function ki(e, t) {
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
      ki(e, t);
    }, n;
  }
  function th(e) {
    return e = ra(e), e.tag = 3, e;
  }
  function nh(e, t, n, a) {
    var l = n.type.getDerivedStateFromError;
    if (typeof l == "function") {
      var u = a.value;
      e.payload = function() {
        return l(u);
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
  function Mg(e, t, n, a, l) {
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
            return _t === null ? pr() : n.alternate === null && $e === 0 && ($e = 3), n.flags &= -257, n.flags |= 65536, n.lanes = l, a === ji ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([a]) : t.add(a), Ls(e, a, l)), !1;
          case 22:
            return n.flags |= 65536, a === ji ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([a])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([a]) : n.add(a)), Ls(e, a, l)), !1;
        }
        throw Error(c(435, n.tag));
      }
      return Ls(e, a, l), pr(), !1;
    }
    if (Ae)
      return t = Et.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = l, a !== bc && (e = Error(c(422), { cause: a }), du(nn(e, n)))) : (a !== bc && (t = Error(c(423), {
        cause: a
      }), du(
        nn(t, n)
      )), e = e.current.alternate, e.flags |= 65536, l &= -l, e.lanes |= l, a = nn(a, n), l = es(
        e.stateNode,
        a,
        l
      ), Uc(e, l), $e !== 4 && ($e = 2)), !1;
    var u = Error(c(520), { cause: a });
    if (u = nn(u, n), Du === null ? Du = [u] : Du.push(u), $e !== 4 && ($e = 2), t === null) return !0;
    a = nn(a, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = l & -l, n.lanes |= e, e = es(n.stateNode, a, e), Uc(n, e), !1;
        case 1:
          if (t = n.type, u = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || u !== null && typeof u.componentDidCatch == "function" && (pa === null || !pa.has(u))))
            return n.flags |= 65536, l &= -l, n.lanes |= l, l = th(l), nh(
              l,
              e,
              n,
              a
            ), Uc(n, l), !1;
          break;
        case 22:
          if (n.memoizedState !== null)
            return n.flags |= 65536, !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var ts = Error(c(461)), lt = !1;
  function ct(e, t, n, a) {
    t.child = e === null ? id(t, null, n, a) : Za(
      t,
      e.child,
      n,
      a
    );
  }
  function ah(e, t, n, a, l) {
    n = n.render;
    var u = t.ref;
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
      u,
      l
    ), f = Lc(), e !== null && !lt ? (Bc(e, t, l), Kn(e, t, l)) : (Ae && f && Ci(t), t.flags |= 1, ct(e, t, a, l), t.child);
  }
  function lh(e, t, n, a, l) {
    if (e === null) {
      var u = n.type;
      return typeof u == "function" && !pc(u) && u.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = u, uh(
        e,
        t,
        u,
        a,
        l
      )) : (e = wi(
        n.type,
        null,
        a,
        t,
        t.mode,
        l
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (u = e.child, !ss(e, l)) {
      var s = u.memoizedProps;
      if (n = n.compare, n = n !== null ? n : su, n(s, a) && e.ref === t.ref)
        return Kn(e, t, l);
    }
    return t.flags |= 1, e = In(u, a), e.ref = t.ref, e.return = t, t.child = e;
  }
  function uh(e, t, n, a, l) {
    if (e !== null) {
      var u = e.memoizedProps;
      if (su(u, a) && e.ref === t.ref)
        if (lt = !1, t.pendingProps = a = u, ss(e, l))
          (e.flags & 131072) !== 0 && (lt = !0);
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
  function ih(e, t, n, a) {
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
        return rh(
          e,
          t,
          u,
          n,
          a
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && xi(
          t,
          u !== null ? u.cachePool : null
        ), u !== null ? sd(t, u) : zc(), od(t);
      else
        return a = t.lanes = 536870912, rh(
          e,
          t,
          u !== null ? u.baseLanes | n : n,
          n,
          a
        );
    } else
      u !== null ? (xi(t, u.cachePool), sd(t, u), fa(), t.memoizedState = null) : (e !== null && xi(t, null), zc(), fa());
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
  function rh(e, t, n, a, l) {
    var u = wc();
    return u = u === null ? null : { parent: nt._currentValue, pool: u }, t.memoizedState = {
      baseLanes: n,
      cachePool: u
    }, e !== null && xi(t, null), zc(), od(t), e !== null && Va(e, t, a, !0), t.childLanes = l, null;
  }
  function Fi(e, t) {
    return t = $i(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function ch(e, t, n) {
    return Za(t, e.child, null, n), e = Fi(t, t.pendingProps), e.flags |= 2, Kt(t), t.memoizedState = null, e;
  }
  function jg(e, t, n) {
    var a = t.pendingProps, l = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Ae) {
        if (a.mode === "hidden")
          return e = Fi(t, a), t.lanes = 536870912, e.memoizedState = { baseLanes: 0, cachePool: null }, _u(null, e);
        if (Mc(t), (e = Qe) ? (e = Mm(
          e,
          un
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: ta !== null ? { id: _n, overflow: Nn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Qf(e), n.return = t, t.child = n, ot = t, Qe = null)) : e = null, e === null) throw aa(t);
        return t.lanes = 536870912, null;
      }
      return Fi(t, a);
    }
    var u = e.memoizedState;
    if (u !== null) {
      var s = u.dehydrated;
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
      else if (lt || Va(e, t, n, !1), l = (n & e.childLanes) !== 0, lt || l) {
        if (sa.current === null) {
          if (a = Xe, a !== null && (s = Zo(a, n), s !== 0 && s !== u.retryLane))
            throw u.retryLane = s, qa(e, s), Lt(a, e, s), ts;
          pr();
        }
        t = ch(
          e,
          t,
          n
        );
      } else
        e = u.treeContext, Qe = cn(s.nextSibling), ot = t, Ae = !0, na = null, un = !1, e !== null && Jf(t, e), t = Fi(t, a), t.flags |= 134221824;
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
  function ns(e, t, n, a, l) {
    return Ga(t), n = qc(
      e,
      t,
      n,
      a,
      void 0,
      l
    ), a = Lc(), e !== null && !lt ? (Bc(e, t, l), Kn(e, t, l)) : (Ae && a && Ci(t), t.flags |= 1, ct(e, t, n, l), t.child);
  }
  function sh(e, t, n, a, l, u) {
    return Ga(t), t.updateQueue = null, n = dd(
      t,
      a,
      n,
      l
    ), fd(e), a = Lc(), e !== null && !lt ? (Bc(e, t, u), Kn(e, t, u)) : (Ae && a && Ci(t), t.flags |= 1, ct(e, t, n, u), t.child);
  }
  function oh(e, t, n, a, l) {
    if (Ga(t), t.stateNode === null) {
      var u = hl, s = n.contextType;
      typeof s == "object" && s !== null && (u = yt(s)), u = new n(a, u), t.memoizedState = u.state !== null && u.state !== void 0 ? u.state : null, u.updater = Wc, t.stateNode = u, u._reactInternals = t, u = t.stateNode, u.props = a, u.state = t.memoizedState, u.refs = {}, Cc(t), s = n.contextType, u.context = typeof s == "object" && s !== null ? yt(s) : hl, u.state = t.memoizedState, s = n.getDerivedStateFromProps, typeof s == "function" && (Pc(
        t,
        n,
        s,
        a
      ), u.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof u.getSnapshotBeforeUpdate == "function" || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (s = u.state, typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount(), s !== u.state && Wc.enqueueReplaceState(u, u.state, null), Eu(t, a, u, l), yu(), u.state = t.memoizedState), typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !0;
    } else if (e === null) {
      u = t.stateNode;
      var f = t.memoizedProps, m = ka(n, f);
      u.props = m;
      var N = u.context, U = n.contextType;
      s = hl, typeof U == "object" && U !== null && (s = yt(U));
      var H = n.getDerivedStateFromProps;
      U = typeof H == "function" || typeof u.getSnapshotBeforeUpdate == "function", f = t.pendingProps !== f, U || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (f || N !== s) && Fd(
        t,
        u,
        a,
        s
      ), ia = !1;
      var S = t.memoizedState;
      u.state = S, Eu(t, a, u, l), yu(), N = t.memoizedState, f || S !== N || ia ? (typeof H == "function" && (Pc(
        t,
        n,
        H,
        a
      ), N = t.memoizedState), (m = ia || kd(
        t,
        n,
        m,
        a,
        S,
        N,
        s
      )) ? (U || typeof u.UNSAFE_componentWillMount != "function" && typeof u.componentWillMount != "function" || (typeof u.componentWillMount == "function" && u.componentWillMount(), typeof u.UNSAFE_componentWillMount == "function" && u.UNSAFE_componentWillMount()), typeof u.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = a, t.memoizedState = N), u.props = a, u.state = N, u.context = s, a = m) : (typeof u.componentDidMount == "function" && (t.flags |= 4194308), a = !1);
    } else {
      u = t.stateNode, Rc(e, t), s = t.memoizedProps, U = ka(n, s), u.props = U, H = t.pendingProps, S = u.context, N = n.contextType, m = hl, typeof N == "object" && N !== null && (m = yt(N)), f = n.getDerivedStateFromProps, (N = typeof f == "function" || typeof u.getSnapshotBeforeUpdate == "function") || typeof u.UNSAFE_componentWillReceiveProps != "function" && typeof u.componentWillReceiveProps != "function" || (s !== H || S !== m) && Fd(
        t,
        u,
        a,
        m
      ), ia = !1, S = t.memoizedState, u.state = S, Eu(t, a, u, l), yu();
      var R = t.memoizedState;
      s !== H || S !== R || ia || e !== null && e.dependencies !== null && Di(e.dependencies) ? (typeof f == "function" && (Pc(
        t,
        n,
        f,
        a
      ), R = t.memoizedState), (U = ia || kd(
        t,
        n,
        U,
        a,
        S,
        R,
        m
      ) || e !== null && e.dependencies !== null && Di(e.dependencies)) ? (N || typeof u.UNSAFE_componentWillUpdate != "function" && typeof u.componentWillUpdate != "function" || (typeof u.componentWillUpdate == "function" && u.componentWillUpdate(a, R, m), typeof u.UNSAFE_componentWillUpdate == "function" && u.UNSAFE_componentWillUpdate(
        a,
        R,
        m
      )), typeof u.componentDidUpdate == "function" && (t.flags |= 4), typeof u.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof u.componentDidUpdate != "function" || s === e.memoizedProps && S === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && S === e.memoizedState || (t.flags |= 1024), t.memoizedProps = a, t.memoizedState = R), u.props = a, u.state = R, u.context = m, a = U) : (typeof u.componentDidUpdate != "function" || s === e.memoizedProps && S === e.memoizedState || (t.flags |= 4), typeof u.getSnapshotBeforeUpdate != "function" || s === e.memoizedProps && S === e.memoizedState || (t.flags |= 1024), a = !1);
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
  function fh(e, t, n, a) {
    return Ba(), t.flags |= 256, ct(e, t, n, a), t.child;
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
  function us(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= kt), e;
  }
  function dh(e, t, n) {
    var a = t.pendingProps, l = !1, u = (t.flags & 128) !== 0, s;
    if ((s = u) || (s = e !== null && e.memoizedState === null ? !1 : (bt.current & 2) !== 0), s && (l = !0, t.flags &= -129), s = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ae) {
        if (l ? oa(t) : fa(), (e = Qe) ? (e = Mm(
          e,
          un
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: ta !== null ? { id: _n, overflow: Nn } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Qf(e), n.return = t, t.child = n, ot = t, Qe = null)) : e = null, e === null) throw aa(t);
        return lo(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      return u = a.children, a = a.fallback, l ? (fa(), l = t.mode, u = $i(
        { mode: "hidden", children: u },
        l
      ), a = La(
        a,
        l,
        n,
        null
      ), u.return = t, a.return = t, u.sibling = a, t.child = u, a = t.child, a.memoizedState = ls(n), a.childLanes = us(
        e,
        s,
        n
      ), t.memoizedState = as, _u(null, a)) : (oa(t), is(t, u));
    }
    var f = e.memoizedState;
    if (f !== null) {
      var m = f.dehydrated;
      if (m !== null)
        return Hg(
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
    }), a.subtreeFlags = f.subtreeFlags & 1206910976, m !== null ? l = In(m, l) : (l = La(
      l,
      u,
      n,
      null
    ), l.flags |= 2), l.return = t, a.return = t, a.sibling = l, t.child = a, _u(null, a), a = t.child, l = e.child.memoizedState, l === null ? l = ls(n) : (u = l.cachePool, u !== null ? (f = nt._currentValue, u = u.parent !== f ? { parent: f, pool: f } : u) : u = ed(), l = {
      baseLanes: l.baseLanes | n,
      cachePool: u
    }), a.memoizedState = l, a.childLanes = us(
      e,
      s,
      n
    ), t.memoizedState = as, _u(e.child, a)) : (oa(t), n = e.child, e = n.sibling, n = In(n, {
      mode: "visible",
      children: a.children
    }), n.return = t, n.sibling = null, e !== null && (s = t.deletions, s === null ? (t.deletions = [e], t.flags |= 16) : s.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function is(e, t) {
    return t = $i(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function $i(e, t) {
    return e = Mt(22, e, null, t), e.lanes = 0, e;
  }
  function Pi(e, t, n) {
    return Za(t, e.child, null, n), e = is(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function Hg(e, t, n, a, l, u, s, f) {
    if (n)
      return t.flags & 256 ? (oa(t), t.flags &= -257, Pi(
        e,
        t,
        f
      )) : t.memoizedState !== null ? (fa(), t.child = e.child, t.flags |= 128, null) : (fa(), u = l.fallback, s = t.mode, l = $i(
        { mode: "visible", children: l.children },
        s
      ), u = La(
        u,
        s,
        f,
        null
      ), u.flags |= 2, l.return = t, u.return = t, l.sibling = u, t.child = l, Za(t, e.child, null, f), l = t.child, l.memoizedState = ls(f), l.childLanes = us(
        e,
        a,
        f
      ), t.memoizedState = as, _u(null, l));
    if (oa(t), lo(u)) {
      if (a = u.nextSibling && u.nextSibling.dataset, a) var m = a.dgst;
      return a = m, a !== "" && (l = Error(c(419)), l.stack = "", l.digest = a, du({ value: l, source: null, stack: null })), Pi(
        e,
        t,
        f
      );
    }
    if (lt || Va(e, t, f, !1), a = (f & e.childLanes) !== 0, lt || a) {
      if (sa.current !== null)
        return Pi(
          e,
          t,
          f
        );
      if (a = Xe, a !== null && (l = Zo(
        a,
        f
      ), l !== 0 && l !== s.retryLane))
        throw s.retryLane = l, qa(e, l), Lt(a, e, l), ts;
      return ao(u) || pr(), Pi(
        e,
        t,
        f
      );
    }
    return ao(u) ? (t.flags |= 192, t.child = e.child, null) : (e = s.treeContext, Qe = cn(u.nextSibling), ot = t, Ae = !0, na = null, un = !1, e !== null && Jf(t, e), t = is(
      t,
      l.children
    ), t.flags |= 134221824, t);
  }
  function hh(e, t, n) {
    e.lanes |= t;
    var a = e.alternate;
    a !== null && (a.lanes |= t), Ui(e.return, t, n);
  }
  function mh(e) {
    for (var t = null; e !== null; ) {
      var n = e.alternate;
      n !== null && Bi(n) === null && (t = e), e = e.sibling;
    }
    return t;
  }
  function Wi(e, t, n, a, l, u) {
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
  function rs(e) {
    var t = e.child;
    for (e.child = null; t !== null; ) {
      var n = t.sibling;
      t.sibling = e.child, e.child = t, t = n;
    }
  }
  function cs(e, t, n) {
    var a = t.pendingProps, l = a.revealOrder, u = a.tail;
    a = a.children;
    var s = bt.current;
    if (t.flags & 128)
      return bu(t, s), null;
    var f = (s & 2) !== 0;
    if (f ? (s = s & 1 | 2, t.flags |= 128) : s &= 1, bu(t, s), l === "backwards" && e !== null ? (rs(e), ct(e, t, a, n), rs(e)) : ct(e, t, a, n), a = Ae ? fu : 0, !f && e !== null && (e.flags & 128) !== 0)
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
        n = mh(t.child), n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null, rs(t)), Wi(
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
          if (e = l.alternate, e !== null && Bi(e) === null) {
            t.child = l;
            break;
          }
          e = l.sibling, l.sibling = n, n = l, l = e;
        }
        Wi(
          t,
          !0,
          n,
          null,
          u,
          a
        );
        break;
      case "together":
        Wi(
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
        n = mh(t.child), n === null ? (l = t.child, t.child = null) : (l = n.sibling, n.sibling = null), Wi(
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
  function vh(e, t, n) {
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
  function ss(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && Di(e)));
  }
  function qg(e, t, n) {
    switch (t.tag) {
      case 3:
        L(t, t.stateNode.containerInfo), la(t, nt, e.memoizedState.cache), Ba();
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
        if (l = t.memoizedState, l !== null && (l.rendering = null, l.tail = null, l.lastEffect = null), bu(t, bt.current), a) break;
        return null;
      case 22:
        return t.lanes = 0, ih(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        la(t, nt, e.memoizedState.cache);
    }
    return Kn(e, t, n);
  }
  function ph(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        lt = !0;
      else {
        if (!ss(e, n) && (t.flags & 128) === 0)
          return lt = !1, qg(
            e,
            t,
            n
          );
        lt = (e.flags & 131072) !== 0;
      }
    else
      lt = !1, Ae && (t.flags & 1048576) !== 0 && Zf(t, fu, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var a = t.pendingProps;
          if (e = Qa(t.elementType), t.type = e, typeof e == "function")
            pc(e) ? (a = ka(e, a), t.tag = 1, t = oh(
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
              if (l === I) {
                t.tag = 11, t = ah(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              } else if (l === re) {
                t.tag = 14, t = lh(
                  null,
                  t,
                  e,
                  a,
                  n
                );
                break e;
              } else if (l === G) {
                t.tag = 10, t.type = e, t = vh(
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
        return ns(
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
        ), oh(
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
          l = u.element, Rc(e, t), Eu(t, a, null, n);
          var s = t.memoizedState;
          if (a = s.cache, la(t, nt, a), a !== u.cache && Ac(
            t,
            [nt],
            n,
            !0
          ), yu(), a = s.element, u.isDehydrated)
            if (u = {
              element: a,
              isDehydrated: !1,
              cache: s.cache
            }, t.updateQueue.baseState = u, t.memoizedState = u, t.flags & 256) {
              t = fh(
                e,
                t,
                a,
                n
              );
              break e;
            } else if (a !== l) {
              l = nn(
                Error(c(424)),
                t
              ), du(l), t = fh(
                e,
                t,
                a,
                n
              );
              break e;
            } else
              for (e = t.stateNode.containerInfo, e.nodeType === 9 ? e = e.body : e = e.nodeName === "HTML" ? e.ownerDocument.body : e, Qe = cn(e.firstChild), ot = t, Ae = !0, na = null, un = !0, n = id(
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
        return Al(e, t), e === null ? (n = Vm(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : Ae || (t.stateNode = bm(
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
        return ze(t), e === null && Ae && (a = t.stateNode = qm(
          t.type,
          t.pendingProps,
          X.current
        ), ot = t, un = !0, l = Qe, Ea(t.type) ? (uo = l, Qe = cn(a.firstChild)) : Qe = l), ct(
          e,
          t,
          t.pendingProps.children,
          n
        ), Al(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ae && ((l = a = Qe) && (a = Dy(
          a,
          t.type,
          t.pendingProps,
          un
        ), a !== null ? (t.stateNode = a, ot = t, Qe = cn(a.firstChild), un = !1, l = !0) : l = !1), l || aa(t)), ze(t), l = t.type, u = t.pendingProps, s = e !== null ? e.memoizedProps : null, a = u.children, Fs(l, u) ? a = null : s !== null && Fs(l, s) && (t.flags |= 32), t.memoizedState !== null && (l = qc(
          e,
          t,
          wg,
          null,
          null,
          n
        ), Vl._currentValue = l), Al(e, t), ct(e, t, a, n), t.child;
      case 6:
        return e === null && Ae && ((e = n = Qe) && (n = zy(
          n,
          t.pendingProps,
          un
        ), n !== null ? (t.stateNode = n, ot = t, Qe = null, e = !0) : e = !1), e || aa(t)), null;
      case 13:
        return dh(e, t, n);
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
        return ah(
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
        return vh(e, t, n);
      case 9:
        return l = t.type._context, a = t.pendingProps.children, Ga(t), l = yt(l), a = a(l), t.flags |= 1, ct(e, t, a, n), t.child;
      case 14:
        return lh(
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
        return cs(e, t, n);
      case 31:
        return jg(e, t, n);
      case 22:
        return ih(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return Ga(t), a = yt(nt), e === null ? (l = wc(), l === null && (l = Xe, u = _c(), l.pooledCache = u, u.refCount++, u !== null && (l.pooledCacheLanes |= n), l = u), t.memoizedState = { parent: a, cache: l }, Cc(t), la(t, nt, l)) : ((e.lanes & n) !== 0 && (Rc(e, t), Eu(t, null, null, n), yu()), l = e.memoizedState, u = t.memoizedState, l.parent !== a ? (l = { parent: a, cache: a }, t.memoizedState = l, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = l), la(t, nt, a)) : (a = u.cache, la(t, nt, a), a !== l.cache && Ac(
          t,
          [nt],
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
        }), a = t.pendingProps, a.name != null && a.name !== "auto" ? t.flags |= e === null ? 18882560 : 18874368 : Ae && Ci(t), e !== null && e.memoizedProps.name !== a.name ? t.flags |= 4194816 : Al(e, t), ct(e, t, a.children, n), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(c(156, t.tag));
  }
  function Zn(e) {
    e.flags |= 4;
  }
  function os(e, t, n, a, l) {
    var u;
    if ((u = (e.mode & 32) !== 0) && (u = n === null ? Qm(t, a) : Qm(t, a) && (a.src !== n.src || a.srcSet !== n.srcSet)), u) {
      if (e.flags |= 16777216, (l & 335544128) === l)
        if (e.stateNode.complete) e.flags |= 8192;
        else if ($h()) e.flags |= 8192;
        else
          throw Ka = ji, Oc;
    } else e.flags &= -16777217;
  }
  function gh(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Km(t))
      if ($h()) e.flags |= 8192;
      else
        throw Ka = ji, Oc;
  }
  function er(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? Xo() : 536870912, e.lanes |= t, Cl |= t);
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
        return n = t.stateNode, a = null, e !== null && (a = e.memoizedState.cache), t.memoizedState.cache !== a && (t.flags |= 2048), Yn(nt), le(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (pl(t) ? Zn(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, Sc())), Ke(t), null;
      case 26:
        var l = t.type, u = t.memoizedState;
        return e === null ? (Zn(t), u !== null ? (Ke(t), gh(t, u)) : (Ke(t), os(
          t,
          l,
          null,
          a,
          n
        ))) : u ? u !== e.memoizedState ? (Zn(t), Ke(t), gh(t, u)) : (Ke(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== a && Zn(t), Ke(t), os(
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
          e = It.current, pl(t) ? kf(t) : (e = qm(l, a, n), t.stateNode = e, Zn(t));
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
          if (u = It.current, pl(t))
            kf(t);
          else {
            var s = Hu(
              X.current
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
            u[gt] = t, u[xt] = a;
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
            if (e = t.stateNode, n = t.memoizedProps, a = null, l = ot, l !== null)
              switch (l.tag) {
                case 27:
                case 5:
                  a = l.memoizedProps;
              }
            e[gt] = t, e = !!(e.nodeValue === n || a !== null && a.suppressHydrationWarning === !0 || pm(e.nodeValue, n)), e || aa(t, !0);
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
            n = Sc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (Kt(t), t) : (Kt(t), null);
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
            l = Sc(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = l), l = !0;
          if (!l)
            return t.flags & 256 ? (Kt(t), t) : (Kt(t), null);
        }
        return Kt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = a !== null, e = e !== null && e.memoizedState !== null, n && (a = t.child, l = null, a.alternate !== null && a.alternate.memoizedState !== null && a.alternate.memoizedState.cachePool !== null && (l = a.alternate.memoizedState.cachePool.pool), u = null, a.memoizedState !== null && a.memoizedState.cachePool !== null && (u = a.memoizedState.cachePool.pool), u !== l && (a.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), er(t, t.updateQueue), Ke(t), null);
      case 4:
        return le(), e === null && Qs(t.stateNode.containerInfo), t.flags |= 67108864, Ke(t), null;
      case 10:
        return Yn(t.type), Ke(t), null;
      case 19:
        if (jc(t), a = t.memoizedState, a === null) return Ke(t), null;
        if (l = (t.flags & 128) !== 0, u = a.rendering, u === null)
          if (l) Nu(a, !1);
          else {
            if ($e !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (u = Bi(e), u !== null) {
                  for (t.flags |= 128, Nu(a, !1), e = u.updateQueue, t.updateQueue = e, er(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    Xf(n, e), n = n.sibling;
                  return bu(
                    t,
                    bt.current & 1 | 2
                  ), Ae && Vn(t, a.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            a.tail !== null && Vt() > dr && (t.flags |= 128, l = !0, Nu(a, !1), t.lanes = 4194304);
          }
        else {
          if (!l)
            if (e = Bi(u), e !== null) {
              if (t.flags |= 128, l = !0, e = e.updateQueue, t.updateQueue = e, er(t, e), Nu(a, !0), a.tail === null && a.tailMode !== "collapsed" && a.tailMode !== "visible" && !u.alternate && !Ae)
                return Ke(t), null;
            } else
              2 * Vt() - a.renderingStartTime > dr && n !== 536870912 && (t.flags |= 128, l = !0, Nu(a, !1), t.lanes = 4194304);
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
          return a.rendering = e, a.tail = e.sibling, a.renderingStartTime = Vt(), e.sibling = null, u = bt.current, u = l ? u & 1 | 2 : u & 1, a.tailMode === "visible" || a.tailMode === "collapsed" || !n || Ae ? bu(t, u) : (n = u, qe(Et, t), qe(bt, n), _t === null && (_t = t)), Ae && Vn(t, a.treeForkCount), e;
        }
        return Ke(t), null;
      case 22:
      case 23:
        return Kt(t), xc(), a = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== a && (t.flags |= 8192) : a && (t.flags |= 8192), a ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Ke(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Ke(t), n = t.updateQueue, n !== null && er(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), a = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (a = t.memoizedState.cachePool.pool), a !== n && (t.flags |= 2048), e !== null && ce(Xa), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Yn(nt), Ke(t), null;
      case 25:
        return null;
      case 30:
        return t.flags |= 33554432, Ke(t), null;
    }
    throw Error(c(156, t.tag));
  }
  function Bg(e, t) {
    switch (Ec(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Yn(nt), le(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Ye(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Kt(t), t.alternate === null)
            throw Error(c(340));
          Ba();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Kt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(c(340));
          Ba();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return jc(t), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, e = t.memoizedState, e !== null && (e.rendering = null, e.tail = null), t.flags |= 4, t) : null;
      case 4:
        return le(), null;
      case 10:
        return Yn(t.type), null;
      case 22:
      case 23:
        return Kt(t), xc(), e !== null && ce(Xa), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Yn(nt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function yh(e, t) {
    switch (Ec(t), t.tag) {
      case 3:
        Yn(nt), le();
        break;
      case 26:
      case 27:
      case 5:
        Ye(t);
        break;
      case 4:
        le();
        break;
      case 31:
        t.memoizedState !== null && Kt(t);
        break;
      case 13:
        Kt(t);
        break;
      case 19:
        jc(t);
        break;
      case 10:
        Yn(t.type);
        break;
      case 22:
      case 23:
        Kt(t), xc(), e !== null && ce(Xa);
        break;
      case 24:
        Yn(nt);
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
              var m = n, N = f;
              try {
                N();
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
            var l = e.stateNode, u = Ln(e.memoizedProps, l);
            (l.ref === null || l.ref.name !== u) && (l.ref = Om(u)), a = l.ref;
            break;
          case 7:
            if (e.stateNode === null) {
              var s = new $t(e);
              v(
                e.child,
                !1,
                Ry,
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
  function tr(e, t) {
    if ((e.tag === 5 || e.tag === 27 || e.tag === 6) && e.alternate === null && t !== null)
      for (var n = 0; n < t.length; n++)
        xm(
          e.stateNode,
          t[n]
        );
  }
  function Sh(e) {
    for (var t = e.return; t !== null && (ds(t) && xm(e.stateNode, t.stateNode), !fs(t)); )
      t = t.return;
  }
  function Ou(e) {
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
      fy(a, e.type, n, t), a[xt] = t;
    } catch (l) {
      Be(e, e.return, l);
    }
  }
  function Th(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Ea(e.type) || e.tag === 4;
  }
  function vs(e) {
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
      l = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(l, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(l), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = An)), tr(e, a), xe = !0;
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
      l = e.stateNode, t ? n.insertBefore(l, t) : n.appendChild(l), tr(e, a), xe = !0;
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
      Tt(t, a, n), t[gt] = e, t[xt] = n;
    } catch (u) {
      Be(e, e.return, u);
    }
  }
  var ar = !1, Zt = null;
  function _h(e) {
    (e.tag === 30 || (e.subtreeFlags & 33554432) !== 0) && (ar = !0);
  }
  var On = null;
  function Nh() {
    var e = On;
    return On = null, e;
  }
  var jt = 0;
  function _l(e, t, n, a, l) {
    return jt = 0, wh(
      e.child,
      t,
      n,
      a,
      l
    );
  }
  function wh(e, t, n, a, l) {
    for (var u = !1; e !== null; ) {
      if (e.tag === 5) {
        var s = e.stateNode;
        if (a !== null) {
          var f = Ws(s);
          a.push(f), f.view && (u = !0);
        } else
          u || Ws(s).view && (u = !0);
        ar = !0, Nm(
          s,
          jt === 0 ? t : t + "_" + jt,
          n
        ), jt++;
      } else (e.tag !== 22 || e.memoizedState === null) && (e.tag === 30 && l || wh(
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
  function gs(e, t) {
    if (e.tag === 30) {
      var n = e.stateNode, a = e.memoizedProps, l = Ln(a, n), u = Bn(
        a.default,
        n.paired ? a.share : a.enter
      );
      u !== "none" ? _l(e, l, u, null, !1) ? (lr(e), n.paired || t || zl(e, a.onEnter)) : Cn(e.child, !1) : lr(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        gs(e, t), e = e.sibling;
    else lr(e);
  }
  function ys(e) {
    if (Zt !== null && Zt.size !== 0) {
      var t = Zt;
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
            ys(e);
          }
          e = e.sibling;
        }
    }
  }
  function Es(e) {
    if (e.tag === 30) {
      var t = e.memoizedProps, n = Ln(t, e.stateNode), a = Zt !== null ? Zt.get(n) : void 0, l = Bn(
        t.default,
        a !== void 0 ? t.share : t.exit
      );
      l !== "none" && (_l(e, n, l, null, !1) ? a !== void 0 ? (l = e.stateNode, a.paired = l, l.paired = a, Zt.delete(n), zl(e, t.onShare)) : zl(e, t.onExit) : Cn(e.child, !1)), Zt !== null && ys(e);
    } else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        Es(e), e = e.sibling;
    else
      Zt !== null && ys(e);
  }
  function Oh(e) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var t = e.memoizedProps, n = Ln(t, e.stateNode);
        t = Bn(t.default, t.update), e.flags &= -5, t !== "none" && _l(
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
  function ur(e) {
    if (e.tag === 30)
      e.stateNode.paired = null, Cn(e.child, !1), bs(e);
    else if ((e.subtreeFlags & 33554432) !== 0)
      for (e = e.child; e !== null; )
        ur(e), e = e.sibling;
    else bs(e);
  }
  function Ch(e) {
    for (e = e.child; e !== null; )
      e.tag === 30 ? Cn(e.child, !1) : (e.subtreeFlags & 33554432) !== 0 && Ch(e), e = e.sibling;
  }
  function Ss(e, t, n, a, l, u, s) {
    for (var f = !1; t !== null; ) {
      if (t.tag === 5) {
        var m = t.stateNode;
        if (u !== null && jt < u.length) {
          var N = u[jt], U = Ws(m);
          (N.view || U.view) && (f = !0);
          var H;
          if (H = (e.flags & 4) === 0)
            if (U.clip) H = !0;
            else {
              H = N.rect;
              var S = U.rect;
              H = H.y !== S.y || H.x !== S.x || H.height !== S.height || H.width !== S.width;
            }
          H && (e.flags |= 4), U.abs ? U = !N.abs : (N = N.rect, U = U.rect, U = N.height !== U.height || N.width !== U.width), U && (e.flags |= 32);
        } else e.flags |= 32;
        (e.flags & 4) !== 0 && Nm(
          m,
          jt === 0 ? n : n + "_" + jt,
          l
        ), f && (e.flags & 4) !== 0 || (On === null && (On = []), On.push(
          m,
          jt === 0 ? a : a + "_" + jt,
          t.memoizedProps
        )), jt++;
      } else (t.tag !== 22 || t.memoizedState === null) && (t.tag === 30 && s ? e.flags |= t.flags & 32 : Ss(
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
  function Rh(e, t) {
    for (e = e.child; e !== null; ) {
      if (e.tag === 30) {
        var n = e.memoizedProps, a = e.stateNode, l = Ln(n, a), u = Bn(n.default, n.update), s;
        s = e.memoizedState, e.memoizedState = null, a = e;
        var f = e.child;
        jt = 0, l = Ss(
          a,
          f,
          l,
          l,
          u,
          s,
          !1
        ), (e.flags & 4) !== 0 && l && zl(e, n.onUpdate);
      } else
        (e.subtreeFlags & 33554432) !== 0 && Rh(e);
      e = e.sibling;
    }
  }
  var ft = !1, He = !1, Rn = !1, Ts = !1, Uh = typeof WeakSet == "function" ? WeakSet : Set, dt = null, Un = !1, Cu = !1, ir = !1, As = !1;
  function Ig(e, t, n) {
    if (e = e.containerInfo, Js = Gl, e = Mf(e), sc(e)) {
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
            var f = 0, m = -1, N = -1, U = 0, H = 0, S = e, R = null;
            t: for (; ; ) {
              for (var F; S !== a || u !== 0 && S.nodeType !== 3 || (m = f + u), S !== s || l !== 0 && S.nodeType !== 3 || (N = f + l), S.nodeType === 3 && (f += S.nodeValue.length), (F = S.firstChild) !== null; )
                R = S, S = F;
              for (; ; ) {
                if (S === e) break t;
                if (R === a && ++U === u && (m = f), R === s && ++H === l && (N = f), (F = S.nextSibling) !== null) break;
                S = R, R = S.parentNode;
              }
              S = F;
            }
            a = m === -1 || N === -1 ? null : { start: m, end: N };
          } else a = null;
        }
      a = a || { start: 0, end: 0 };
    } else a = null;
    for (ks = { focusedElem: e, selectionRange: a }, Gl = !1, n = (n & 335544064) === n, dt = t, t = n ? 9270 : 1024; dt !== null; ) {
      if (e = dt, n && (a = e.deletions, a !== null))
        for (u = 0; u < a.length; u++)
          n && Es(a[u]);
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
        a = e.child, (e.subtreeFlags & t) !== 0 && a !== null ? (a.return = e, dt = a) : (n && Oh(e), rr(n));
      }
    }
    Zt = null;
  }
  function rr(e) {
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
  function Dh(e, t, n) {
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
        a & 64 && Eh(n), a & 512 && wn(n, n.return);
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
          } catch (s) {
            Be(n, n.return, s);
          }
        }
        break;
      case 27:
        t === null && a & 4 && Ah(n);
      case 26:
      case 5:
        Dn(e, n), t === null && a & 4 && hs(n), a & 512 && wn(n, n.return);
        break;
      case 12:
        Dn(e, n);
        break;
      case 31:
        Dn(e, n), a & 4 && jh(e, n);
        break;
      case 13:
        Dn(e, n), a & 4 && Hh(e, n), a & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = Pg.bind(
          null,
          n
        ), xy(e, n))));
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
  function _s(e, t) {
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
            var l = e.stateNode, u = e.memoizedProps.style, s = u != null && u.hasOwnProperty("display") ? u.display : null;
            l.style.display = s == null || typeof s == "boolean" ? "" : ("" + s).trim();
          }
        } catch (m) {
          Be(e, e.return, m);
        }
        Ns(e, t);
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
          t ? _m(f, !0) : _m(e.stateNode, !1);
        } catch (m) {
          Be(e, e.return, m);
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
              zh(n, a);
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
  function xh(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, xh(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && di(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ze = null, Ht = !1;
  function pn(e, t, n) {
    for (n = n.child; n !== null; )
      Mh(e, t, n), n = n.sibling;
  }
  function Mh(e, t, n) {
    if (Gt && typeof Gt.onCommitFiberUnmount == "function")
      try {
        Gt.onCommitFiberUnmount($l, n);
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
        var a = Ze, l = Ht;
        Ea(n.type) && (Ze = n.stateNode, Ht = !1), pn(
          e,
          t,
          n
        ), Lm(
          n.stateNode,
          n.type,
          n.memoizedProps
        ), Ze = a, Ht = l;
        break;
      case 5:
        He || St(n, t), Ou(n);
      case 6:
        if (n.tag === 6 && Ou(n), a = Ze, l = Ht, Ze = null, pn(
          e,
          t,
          n
        ), Ze = a, Ht = l, Ze !== null)
          if (Ht)
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
        Ze !== null && (Ht ? (e = Ze, Am(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), Yl(e)) : Am(Ze, n.stateNode));
        break;
      case 4:
        a = Ze, l = Ht, Ze = n.stateNode.containerInfo, Ht = !0, pn(
          e,
          t,
          n
        ), Ze = a, Ht = l;
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
        He || (St(n, t), a = n.stateNode, typeof a.componentWillUnmount == "function" && bh(
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
  function Vg(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new Uh()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new Uh()), t;
      default:
        throw Error(c(435, e.tag));
    }
  }
  function cr(e, t) {
    var n = Vg(e);
    t.forEach(function(a) {
      if (!n.has(a)) {
        n.add(a);
        var l = Wg.bind(null, e, a);
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
                Ze = m.stateNode, Ht = !1;
                break e;
              }
              break;
            case 5:
              Ze = m.stateNode, Ht = !1;
              break e;
            case 3:
            case 4:
              Ze = m.stateNode.containerInfo, Ht = !0;
              break e;
          }
          m = m.return;
        }
        if (Ze === null) throw Error(c(160));
        Mh(s, f, u), Ze = null, Ht = !1, s = u.alternate, s !== null && (s.return = null), u.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        qh(t, e, n), t = t.sibling;
  }
  var gn = null;
  function qh(e, t, n) {
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
                  e.stateNode = bm(
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
                        if (u = Xm(
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
                        if (u = Xm(
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
                ft || so(u, e.type, e.stateNode);
            else
              e.stateNode = Ym(
                u,
                n,
                e.memoizedProps
              );
          else
            l !== n ? (l === null ? (t = a.stateNode, t === null || He || t.parentNode.removeChild(t)) : l.count--, n === null ? ft || so(u, e.type, e.stateNode) : Ym(u, n, e.memoizedProps)) : n === null && e.stateNode !== null && ms(
              e,
              e.memoizedProps,
              a.memoizedProps
            );
        break;
      case 27:
        Rt(t, e, n), Ut(e), l & 512 && (He || a === null || St(a, a.return)), a !== null && l & 4 && ms(
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
        l & 4 && e.stateNode != null && (t = e.memoizedProps, ms(
          e,
          t,
          a !== null ? a.memoizedProps : t
        )), l & 1024 && (Ts = !0);
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
        if (xe = !1, Ar = null, u = gn, gn = qu(t.containerInfo), Rt(t, e, n), gn = u, Ut(e), l & 4 && a !== null && a.memoizedState.isDehydrated)
          try {
            Yl(t.containerInfo);
          } catch (U) {
            Be(e, e.return, U);
          }
        Ts && (Ts = !1, Lh(e)), xe = !1;
        break;
      case 4:
        l = Rn, Rn = ft, a = af(), u = gn, gn = qu(
          e.stateNode.containerInfo
        ), Rt(t, e, n), Ut(e), gn = u, xe && Cu && (ir = !0), xe = a, Rn = l;
        break;
      case 12:
        Rt(t, e, n), Ut(e);
        break;
      case 31:
        Rt(t, e, n), Ut(e), l & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, cr(e, t)));
        break;
      case 13:
        Rt(t, e, n), Ut(e), e.child.flags & 8192 && e.memoizedState !== null != (a !== null && a.memoizedState !== null) && (fr = Vt()), l & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, cr(e, t)));
        break;
      case 22:
        u = e.memoizedState !== null, s = a !== null && a.memoizedState !== null;
        var f = ft, m = He, N = Rn;
        ft = f || u, Rn = N || u, He = m || s, Rt(t, e, n), He = m, Rn = N, ft = f, Ut(e), l & 8192 && (t = e.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, !u || a === null || s || ft || He || (t = s || He, n = ft, a = He, ft = u || ft, He = t, ha(e, 2), ft = n, He = a), !u && Rn || _s(e, u)), l & 4 && (t = e.updateQueue, t !== null && (n = t.retryQueue, n !== null && (t.retryQueue = null, cr(e, n))));
        break;
      case 19:
        Rt(t, e, n), Ut(e), l & 4 && (t = e.updateQueue, t !== null && (e.updateQueue = null, cr(e, t)));
        break;
      case 30:
        l & 512 && (He || a === null || St(a, a.return)), l = af(), u = Cu, s = (n & 335544064) === n, f = e.memoizedProps, Cu = s && Bn(
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
          if (Th(a)) {
            n = a;
            break;
          }
          a = a.return;
        }
        a = null;
        for (var l = e.return; l !== null; ) {
          if (ds(l)) {
            var u = l.stateNode;
            a === null ? a = [u] : a.push(u);
          }
          if (fs(l)) break;
          l = l.return;
        }
        var s = a;
        if (n == null) throw Error(c(160));
        switch (n.tag) {
          case 27:
            var f = n.stateNode, m = vs(e);
            nr(
              e,
              m,
              f,
              s
            );
            break;
          case 5:
            var N = n.stateNode;
            n.flags & 32 && (il(N, ""), n.flags &= -33);
            var U = vs(e);
            nr(
              e,
              U,
              N,
              s
            );
            break;
          case 3:
          case 4:
            var H = n.stateNode.containerInfo, S = vs(e);
            ps(
              e,
              S,
              H,
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
        Bh(t, e), t = t.sibling;
    else Rh(t);
  }
  function Bh(e, t) {
    var n = e.alternate;
    if (n === null) gs(e, !1);
    else
      switch (e.tag) {
        case 3:
          if (As = Un = !1, Nh(), Nl(t, e), !Un && !ir) {
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
          a = Un, Un = !1, Nl(t, e), Un && (ir = !0), Un = a;
          break;
        case 22:
          e.memoizedState === null && (n.memoizedState !== null ? gs(e, !1) : Nl(t, e));
          break;
        case 30:
          a = Un, l = Nh(), Un = !1, Nl(t, e), Un && (e.flags |= 4);
          var u = e.memoizedProps, s = e.stateNode;
          t = Ln(u, s), s = Ln(n.memoizedProps, s);
          var f = Bn(u.default, u.update);
          f === "none" ? t = !1 : (u = n.memoizedState, n.memoizedState = null, n = e.child, jt = 0, t = Ss(
            e,
            n,
            t,
            s,
            f,
            u,
            !0
          ), jt !== (u === null ? 0 : u.length) && (e.flags |= 32)), (e.flags & 4) !== 0 && t ? (zl(
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
        Dh(e, t.alternate, t), t = t.sibling;
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
              var N = l.shared.hiddenCallbacks;
              if (N !== null)
                for (l.shared.hiddenCallbacks = null, l = 0; l < N.length; l++)
                  rd(N[l], m);
            } catch (U) {
              Be(a, a.return, U);
            }
          }
          f && s & 64 && Eh(u), wn(u, u.return);
          break;
        case 27:
          (n & 2) !== 0 && Ah(u);
        case 5:
          u.tag !== 5 && u.tag !== 27 || Sh(u), yn(
            l,
            u,
            n
          ), f && a === null && s & 4 && hs(u), wn(u, u.return);
          break;
        case 6:
          Sh(u);
          break;
        case 26:
          m = u.stateNode, u.memoizedState !== null || m === null || ft || so(
            qu(m.ownerDocument),
            u.type,
            m
          ), yn(
            l,
            u,
            n
          ), f && a === null && s & 4 && hs(u), wn(u, u.return);
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
          ), f && s & 4 && jh(l, u);
          break;
        case 13:
          yn(
            l,
            u,
            n
          ), f && s & 4 && Hh(l, u);
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
  function ws(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && hu(n));
  }
  function Os(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && hu(e));
  }
  function rn(e, t, n, a) {
    var l = (n & 335544064) === n;
    if (t.subtreeFlags & (l ? 10262 : 10256))
      for (t = t.child; t !== null; )
        Ih(
          e,
          t,
          n,
          a
        ), t = t.sibling;
    else l && Ch(t);
  }
  function Ih(e, t, n, a) {
    var l = (n & 335544064) === n;
    l && t.alternate === null && t.return !== null && t.return.alternate !== null && ur(t);
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        rn(
          e,
          t,
          n,
          a
        ), u & 2048 && wu(9, t);
        break;
      case 1:
        rn(
          e,
          t,
          n,
          a
        );
        break;
      case 3:
        rn(
          e,
          t,
          n,
          a
        ), l && As && (e = e.containerInfo, e = e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e, e.style.viewTransitionName === "root" && (e.style.viewTransitionName = ""), e = e.ownerDocument.documentElement, e !== null && e.style.viewTransitionName === "none" && (e.style.viewTransitionName = "")), u & 2048 && (u = null, t.alternate !== null && (u = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== u && (t.refCount++, u != null && hu(u)));
        break;
      case 12:
        if (u & 2048) {
          rn(
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
          } catch (N) {
            Be(t, t.return, N);
          }
        } else
          rn(
            e,
            t,
            n,
            a
          );
        break;
      case 31:
        rn(
          e,
          t,
          n,
          a
        );
        break;
      case 13:
        rn(
          e,
          t,
          n,
          a
        );
        break;
      case 23:
        break;
      case 22:
        s = t.stateNode, f = t.alternate, t.memoizedState !== null ? (l && f !== null && f.memoizedState === null && ur(f), s._visibility & 2 ? rn(
          e,
          t,
          n,
          a
        ) : Ru(
          e,
          t
        )) : (l && f !== null && f.memoizedState !== null && ur(t), s._visibility & 2 ? rn(
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
        ))), u & 2048 && ws(f, t);
        break;
      case 24:
        rn(
          e,
          t,
          n,
          a
        ), u & 2048 && Os(t.alternate, t);
        break;
      case 30:
        l && (u = t.alternate, u !== null && (Cn(u.child, !0), Cn(t.child, !0))), rn(
          e,
          t,
          n,
          a
        );
        break;
      default:
        rn(
          e,
          t,
          n,
          a
        );
    }
  }
  function wl(e, t, n, a, l) {
    for (l = l && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var u = e, s = t, f = n, m = a, N = s.flags;
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
          )), l && N & 2048 && ws(
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
          ), l && N & 2048 && Os(s.alternate, s);
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
            Ru(n, a), l & 2048 && ws(
              a.alternate,
              a
            );
            break;
          case 24:
            Ru(n, a), l & 2048 && Os(a.alternate, a);
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
        ), e.flags & Fa && (e.memoizedState !== null ? Zy(
          n,
          gn,
          e.memoizedState,
          e.memoizedProps
        ) : (e = e.stateNode, (t & 335544128) === t && Jm(n, e)));
        break;
      case 5:
        $a(
          e,
          t,
          n
        ), e.flags & Fa && (e = e.stateNode, (t & 335544128) === t && Jm(n, e));
        break;
      case 3:
      case 4:
        var a = gn;
        gn = qu(e.stateNode.containerInfo), $a(
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
          l.paired = null, Zt === null && (Zt = /* @__PURE__ */ new Map()), Zt.set(a, l);
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
  function Uu(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          dt = a, Xh(
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
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, sr(e)) : Uu(e);
        break;
      default:
        Uu(e);
    }
  }
  function sr(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var a = t[n];
          dt = a, Xh(
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
          if (xh(a), a === n) {
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
  var Gg = {
    getCacheForType: function(e) {
      var t = yt(nt), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return yt(nt).controller.signal;
    }
  }, Yg = typeof WeakMap == "function" ? WeakMap : Map, je = 0, Xe = null, _e = null, Oe = 0, Le = 0, Jt = null, ma = !1, Ol = !1, Cs = !1, Jn = 0, $e = 0, va = 0, Pa = 0, or = 0, kt = 0, Cl = 0, Du = null, qt = null, Rs = !1, fr = 0, Qh = 0, dr = 1 / 0, hr = null, pa = null, Je = 0, En = null, Wa = null, zn = 0, Us = 0, Ds = null, Kh = null, Rl = null, Ul = null, Dl = null, zu = 0, mr = null;
  function Ft() {
    return (je & 2) !== 0 && Oe !== 0 ? Oe & -Oe : ee.T !== null ? Vs() : Jo();
  }
  function Zh() {
    if (kt === 0)
      if ((Oe & 536870912) === 0 || Ae) {
        var e = ci;
        ci <<= 1, (ci & 3932160) === 0 && (ci = 262144), kt = e;
      } else kt = 536870912;
    return e = Et.current, e !== null && (e.flags |= 32), kt;
  }
  function zl(e, t) {
    if (t != null) {
      var n = e.stateNode, a = n.ref;
      a === null && (a = n.ref = Om(
        Ln(e.memoizedProps, n)
      )), Ul === null && (Ul = []), Ul.push(t.bind(null, a));
    }
  }
  function Lt(e, t, n) {
    (e === Xe && (Le === 2 || Le === 9) || e.cancelPendingCommit !== null) && (xl(e, 0), ga(
      e,
      Oe,
      kt,
      !1
    )), Wl(e, n), ((je & 2) === 0 || e !== Xe) && (e === Xe && ((je & 2) === 0 && (Pa |= n), $e === 4 && ga(
      e,
      Oe,
      kt,
      !1
    )), xn(e));
  }
  function Jh(e, t, n) {
    if ((je & 6) !== 0) throw Error(c(327));
    var a = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Pl(e, t), l = a ? Kg(e, t) : xs(e, t, !0), u = a;
    do {
      if (l === 0) {
        Ol && !a && ga(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, u && !Xg(n)) {
          l = xs(e, t, !1), u = !1;
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
              if (m && (xl(f, s).flags |= 256), s = xs(
                f,
                s,
                !1
              ), s !== 2 && s !== 6) {
                if (Cs && !m) {
                  f.errorRecoveryDisabledLanes |= u, Pa |= u, l = 4;
                  break e;
                }
                u = qt, qt = l, u !== null && (qt === null ? qt = u : qt.push.apply(
                  qt,
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
                kt,
                !ma
              );
              break e;
            case 2:
              qt = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(c(329));
          }
          if ((t & 62914560) === t && (l = fr + 300 - Vt(), 10 < l)) {
            if (ga(
              a,
              t,
              kt,
              !ma
            ), oi(a, 0, !0) !== 0) break e;
            zn = t, a.timeoutHandle = Ps(
              kh.bind(
                null,
                a,
                n,
                qt,
                hr,
                Rs,
                t,
                kt,
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
          kh(
            a,
            n,
            qt,
            hr,
            Rs,
            t,
            kt,
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
  function kh(e, t, n, a, l, u, s, f, m, N, U, H, S, R) {
    e.timeoutHandle = -1;
    var F = t.subtreeFlags, te = (u & 335544064) === u;
    if (H = null, (te || F & 8192 || (F & 16785408) === 16785408) && (H = {
      stylesheets: null,
      count: 0,
      imgCount: 0,
      imgBytes: 0,
      suspenseyImages: [],
      waitingForImages: !0,
      waitingForViewTransition: !1,
      unsuspend: An
    }, Zt = null, Vh(
      t,
      u,
      H
    ), te && (F = H, te = e.containerInfo, te = (te.nodeType === 9 ? te : te.ownerDocument).__reactViewTransition, te != null && (F.count++, F.waitingForViewTransition = !0, F = Iu.bind(F), te.finished.then(F, F))), F = (u & 62914560) === u ? fr - Vt() : (u & 4194048) === u ? Qh - Vt() : 0, F = Jy(
      H,
      F
    ), F !== null)) {
      zn = u, e.cancelPendingCommit = F(
        am.bind(
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
          N,
          U,
          H,
          null,
          S,
          R
        )
      ), ga(e, u, s, !N);
      return;
    }
    am(
      e,
      t,
      u,
      n,
      a,
      l,
      s,
      f,
      m,
      N,
      U,
      H
    );
  }
  function Xg(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var a = 0; a < n.length; a++) {
          var l = n[a], u = l.getSnapshot;
          l = l.value;
          try {
            if (!Qt(u(), l)) return !1;
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
    t = Yo(e, t), t &= ~or, t &= ~Pa, e.suspendedLanes |= t, e.pingedLanes &= ~t, a && (e.warmLanes |= t), a = e.expirationTimes;
    for (var l = t; 0 < l; ) {
      var u = 31 - Yt(l), s = 1 << u;
      a[u] = -1, l &= ~s;
    }
    n !== 0 && Qo(e, n, t);
  }
  function vr() {
    return (je & 6) === 0 ? (xu(0), !1) : !0;
  }
  function zs() {
    if (_e !== null) {
      if (Le === 0)
        var e = _e.return;
      else
        e = _e, Gn = Ia = null, Ic(e), El = null, pu = 0, e = _e;
      for (; e !== null; )
        yh(e.alternate, e), e = e.return;
      _e = null;
    }
  }
  function xl(e, t) {
    var n = e.timeoutHandle;
    return n !== -1 && (e.timeoutHandle = -1, my(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), zn = 0, zs(), Xe = e, _e = n = In(e.current, null), Oe = t, Le = 0, Jt = null, ma = !1, Ol = Pl(e, t), Cs = !1, Cl = kt = or = Pa = va = $e = 0, qt = Du = null, Rs = !1, Jn = Yo(e, t), Ai(), n;
  }
  function Fh(e, t) {
    Se = null, ee.H = Ji, t === yl || t === Mi ? (t = ad(), Le = 3) : t === Oc ? (t = ad(), Le = 4) : Le = t === ts ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, Jt = t, _e === null && ($e = 1, ki(
      e,
      nn(t, e.current)
    ));
  }
  function $h() {
    var e = Et.current;
    return e === null ? !0 : (Oe & 4194048) === Oe ? _t === null : (Oe & 62914560) === Oe || (Oe & 536870912) !== 0 ? e === _t : !1;
  }
  function Ph() {
    var e = ee.H;
    return ee.H = Ji, e === null ? Ji : e;
  }
  function Wh() {
    var e = ee.A;
    return ee.A = Gg, e;
  }
  function pr() {
    $e = 4, ma || (Oe & 4194048) !== Oe && Et.current !== null || (Ol = !0), (va & 134217727) === 0 && (Pa & 134217727) === 0 || Xe === null || ga(
      Xe,
      Oe,
      kt,
      !1
    );
  }
  function xs(e, t, n) {
    var a = je;
    je |= 2;
    var l = Ph(), u = Wh();
    (Xe !== e || Oe !== t) && (hr = null, xl(e, t)), t = !1;
    var s = $e;
    e: do
      try {
        if (Le !== 0 && _e !== null) {
          var f = _e, m = Jt;
          switch (Le) {
            case 8:
              zs(), s = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Et.current === null && (t = !0);
              var N = Le;
              if (Le = 0, Jt = null, Ml(e, f, m, N), n && Ol) {
                s = 0;
                break e;
              }
              break;
            default:
              N = Le, Le = 0, Jt = null, Ml(e, f, m, N);
          }
        }
        Qg(), s = $e;
        break;
      } catch (U) {
        Fh(e, U);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Gn = Ia = null, je = a, ee.H = l, ee.A = u, _e === null && (Xe = null, Oe = 0, Ai()), s;
  }
  function Qg() {
    for (; _e !== null; ) em(_e);
  }
  function Kg(e, t) {
    var n = je;
    je |= 2;
    var a = Ph(), l = Wh();
    Xe !== e || Oe !== t ? (hr = null, dr = Vt() + 500, xl(e, t)) : Ol = Pl(
      e,
      t
    );
    e: do
      try {
        if (Le !== 0 && _e !== null) {
          t = _e;
          var u = Jt;
          t: switch (Le) {
            case 1:
              Le = 0, Jt = null, Ml(e, t, u, 1);
              break;
            case 2:
            case 9:
              if (td(u)) {
                Le = 0, Jt = null, tm(t);
                break;
              }
              t = function() {
                Le !== 2 && Le !== 9 || Xe !== e || (Le = 7), xn(e);
              }, u.then(t, t);
              break e;
            case 3:
              Le = 7;
              break e;
            case 4:
              Le = 5;
              break e;
            case 7:
              td(u) ? (Le = 0, Jt = null, tm(t)) : (Le = 0, Jt = null, Ml(e, t, u, 7));
              break;
            case 5:
              var s = null;
              switch (_e.tag) {
                case 26:
                  s = _e.memoizedState;
                case 5:
                case 27:
                  var f = _e;
                  if (s ? Km(s) : f.stateNode.complete) {
                    Le = 0, Jt = null;
                    var m = f.sibling;
                    if (m !== null) _e = m;
                    else {
                      var N = f.return;
                      N !== null ? (_e = N, gr(N)) : _e = null;
                    }
                    break t;
                  }
              }
              Le = 0, Jt = null, Ml(e, t, u, 5);
              break;
            case 6:
              Le = 0, Jt = null, Ml(e, t, u, 6);
              break;
            case 8:
              zs(), $e = 6;
              break e;
            default:
              throw Error(c(462));
          }
        }
        Zg();
        break;
      } catch (U) {
        Fh(e, U);
      }
    while (!0);
    return Gn = Ia = null, ee.H = a, ee.A = l, je = n, _e !== null ? 0 : (Xe = null, Oe = 0, Ai(), $e);
  }
  function Zg() {
    for (; _e !== null && !op(); )
      em(_e);
  }
  function em(e) {
    var t = ph(e.alternate, e, Jn);
    e.memoizedProps = e.pendingProps, t === null ? gr(e) : _e = t;
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
          Oe
        );
        break;
      case 11:
        t = sh(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Oe
        );
        break;
      case 5:
        Ic(t);
        var a = t;
        a === ot && (Ae ? (Ri(a), a.tag === 5 && a.stateNode != null && (Qe = a.stateNode)) : (Ri(a), Ae = !0));
      default:
        yh(n, t), t = _e = Xf(t, Jn), t = ph(n, t, Jn);
    }
    e.memoizedProps = e.pendingProps, t === null ? gr(e) : _e = t;
  }
  function Ml(e, t, n, a) {
    Gn = Ia = null, Ic(t), El = null, pu = 0;
    var l = t.return;
    try {
      if (Mg(
        e,
        l,
        t,
        n,
        Oe
      )) {
        $e = 1, ki(
          e,
          nn(n, e.current)
        ), _e = null;
        return;
      }
    } catch (u) {
      if (l !== null) throw _e = l, u;
      $e = 1, ki(
        e,
        nn(n, e.current)
      ), _e = null;
      return;
    }
    t.flags & 32768 ? (Ae || a === 1 ? e = !0 : Ol || (Oe & 536870912) !== 0 ? e = !1 : (ma = e = !0, (a === 2 || a === 9 || a === 3 || a === 6) && (a = Et.current, a !== null && a.tag === 13 && (a.flags |= 16384))), nm(t, e)) : gr(t);
  }
  function gr(e) {
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
  function nm(e, t) {
    do {
      var n = Bg(e.alternate, e);
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
  function am(e, t, n, a, l, u, s, f, m, N, U, H) {
    e.cancelPendingCommit = null;
    do
      yr();
    while (Je !== 0);
    if ((je & 6) !== 0) throw Error(c(327));
    if (t !== null) {
      if (t === e.current) throw Error(c(177));
      e === Xe && (_e = Xe = null, Oe = 0), Wa = t, En = e, zn = n, Ds = l, Kh = a, Jg(
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
  function Jg(e, t, n, a, l, u, s) {
    var f = t.lanes | t.childLanes;
    if (Us = f, f |= mc, bp(
      e,
      n,
      f,
      a,
      l,
      u
    ), Ul = null, (n & 335544064) === n ? (Dl = Tg(e), a = 10262) : (Dl = null, a = 10256), (t.subtreeFlags & a) !== 0 || (t.flags & a) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, ey(ii, function() {
      return qs(), null;
    })) : (e.callbackNode = null, e.callbackPriority = 0), ar = !1, a = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || a) {
      a = ee.T, ee.T = null, l = fe.p, fe.p = 2, u = je, je |= 4;
      try {
        Ig(e, t, n);
      } finally {
        je = u, fe.p = l, ee.T = a;
      }
    }
    Je = 1, ar ? Rl = by(
      s,
      e.containerInfo,
      Dl,
      Ms,
      js,
      Fg,
      Hs,
      qs,
      kg
    ) : (Ms(), js(), Hs());
  }
  function kg(e) {
    if (Je !== 0) {
      var t = En.onRecoverableError;
      t(e, { componentStack: null });
    }
  }
  function Fg() {
    Je === 3 && (Je = 0, Bh(Wa, En), Je = 4);
  }
  function Ms() {
    if (Je === 1) {
      Je = 0;
      var e = En, t = Wa, n = zn, a = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || a) {
        a = ee.T, ee.T = null;
        var l = fe.p;
        fe.p = 2;
        var u = je;
        je |= 4;
        try {
          Cu = ir = !1, qh(t, e, n), n = ks;
          var s = Mf(e.containerInfo), f = n.focusedElem, m = n.selectionRange;
          if (s !== f && f && f.ownerDocument && xf(
            f.ownerDocument.documentElement,
            f
          )) {
            if (m !== null && sc(f)) {
              var N = m.start, U = m.end;
              if (U === void 0 && (U = N), "selectionStart" in f)
                f.selectionStart = N, f.selectionEnd = Math.min(
                  U,
                  f.value.length
                );
              else {
                var H = f.ownerDocument || document, S = H && H.defaultView || window;
                if (S.getSelection) {
                  var R = S.getSelection(), F = f.textContent.length, te = Math.min(m.start, F), Te = m.end === void 0 ? te : Math.min(m.end, F);
                  !R.extend && te > Te && (s = Te, Te = te, te = s);
                  var A = zf(
                    f,
                    te
                  ), y = zf(
                    f,
                    Te
                  );
                  if (A && y && (R.rangeCount !== 1 || R.anchorNode !== A.node || R.anchorOffset !== A.offset || R.focusNode !== y.node || R.focusOffset !== y.offset)) {
                    var O = H.createRange();
                    O.setStart(A.node, A.offset), R.removeAllRanges(), te > Te ? (R.addRange(O), R.extend(y.node, y.offset)) : (O.setEnd(y.node, y.offset), R.addRange(O));
                  }
                }
              }
            }
            for (H = [], R = f; R = R.parentNode; )
              R.nodeType === 1 && H.push({
                element: R,
                left: R.scrollLeft,
                top: R.scrollTop
              });
            for (typeof f.focus == "function" && f.focus(), f = 0; f < H.length; f++) {
              var j = H[f];
              j.element.scrollLeft = j.left, j.element.scrollTop = j.top;
            }
          }
          Gl = !!Js, ks = Js = null;
        } finally {
          je = u, fe.p = l, ee.T = a;
        }
      }
      e.current = t, Je = 2;
    }
  }
  function js() {
    if (Je === 2) {
      Je = 0;
      var e = En, t = Wa, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = ee.T, ee.T = null;
        var a = fe.p;
        fe.p = 2;
        var l = je;
        je |= 4;
        try {
          Dh(e, t.alternate, t);
        } finally {
          je = l, fe.p = a, ee.T = n;
        }
      }
      Je = 3;
    }
  }
  function Hs() {
    if (Je === 4 || Je === 3) {
      Je = 0;
      var e = Rl;
      Rl = null, fp();
      var t = En, n = Wa, a = zn, l = Kh, u = (a & 335544064) === a ? 10262 : 10256;
      if ((n.subtreeFlags & u) !== 0 || (n.flags & u) !== 0 ? Je = 5 : (Je = 0, Wa = En = null, lm(t, t.pendingLanes)), u = t.pendingLanes, u === 0 && (pa = null), Qr(a), n = n.stateNode, Gt && typeof Gt.onCommitFiberRoot == "function")
        try {
          Gt.onCommitFiberRoot(
            $l,
            n,
            void 0,
            (n.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        n = ee.T, u = fe.p, fe.p = 2, ee.T = null;
        try {
          for (var s = t.onRecoverableError, f = 0; f < l.length; f++) {
            var m = l[f];
            s(m.value, {
              componentStack: m.stack
            });
          }
        } finally {
          ee.T = n, fe.p = u;
        }
      }
      if (l = Ul, s = Dl, Dl = null, l !== null && (Ul = null, s === null && (s = []), e !== null))
        for (m = 0; m < l.length; m++)
          n = (0, l[m])(
            s
          ), n !== void 0 && e.finished.finally(n);
      (zn & 3) !== 0 && yr(), xn(t), u = t.pendingLanes, (a & 261930) !== 0 && (u & 42) !== 0 ? t === mr ? zu++ : (zu = 0, mr = t) : (zu = 0, mr = null), xu(0);
    }
  }
  function lm(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, hu(t)));
  }
  function yr() {
    return Rl !== null && (Rl.skipTransition(), Rl = null), Ms(), js(), Hs(), qs();
  }
  function qs() {
    if (Je !== 5) return !1;
    var e = En, t = Us;
    Us = 0;
    var n = Qr(zn), a = ee.T, l = fe.p;
    try {
      fe.p = 32 > n ? 32 : n, ee.T = null, n = Ds, Ds = null;
      var u = En, s = zn;
      if (Je = 0, Wa = En = null, zn = 0, (je & 6) !== 0) throw Error(c(331));
      var f = je;
      if (je |= 4, Yh(u.current), Ih(
        u,
        u.current,
        s,
        n
      ), je = f, xu(0, !1), Gt && typeof Gt.onPostCommitFiberRoot == "function")
        try {
          Gt.onPostCommitFiberRoot($l, u);
        } catch {
        }
      return !0;
    } finally {
      fe.p = l, ee.T = a, lm(e, t);
    }
  }
  function um(e, t, n) {
    t = nn(n, t), t = es(e.stateNode, t, 2), e = ca(e, t, 2), e !== null && (Wl(e, 2), xn(e));
  }
  function Be(e, t, n) {
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
          if (typeof t.type.getDerivedStateFromError == "function" || typeof a.componentDidCatch == "function" && (pa === null || !pa.has(a))) {
            e = nn(n, e), n = th(2), a = ca(t, n, 2), a !== null && (nh(
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
  function Ls(e, t, n) {
    var a = e.pingCache;
    if (a === null) {
      a = e.pingCache = new Yg();
      var l = /* @__PURE__ */ new Set();
      a.set(t, l);
    } else
      l = a.get(t), l === void 0 && (l = /* @__PURE__ */ new Set(), a.set(t, l));
    l.has(n) || (Cs = !0, l.add(n), e = $g.bind(null, e, t, n), t.then(e, e));
  }
  function $g(e, t, n) {
    var a = e.pingCache;
    a !== null && a.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Xe === e && (Oe & n) === n && (($e === 4 || $e === 3 && (Oe & 62914560) === Oe && 300 > Vt() - fr) && (je & 2) === 0 ? xl(e, 0) : or |= n, Cl === Oe && (Cl = 0)), xn(e);
  }
  function im(e, t) {
    t === 0 && (t = Xo()), e = qa(e, t), e !== null && (Wl(e, t), xn(e));
  }
  function Pg(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), im(e, n);
  }
  function Wg(e, t) {
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
    a !== null && a.delete(t), im(e, n);
  }
  function ey(e, t) {
    return Vr(e, t);
  }
  var jl = null, Hl = null, Bs = !1, Er = !1, Is = !1, ya = 0;
  function xn(e) {
    e !== Hl && e.next === null && (Hl === null ? jl = Hl = e : Hl = Hl.next = e), Er = !0, Bs || (Bs = !0, ny());
  }
  function xu(e, t) {
    if (!Is && Er) {
      Is = !0;
      do
        for (var n = !1, a = jl; a !== null; ) {
          if (e !== 0) {
            var l = a.pendingLanes;
            if (l === 0) var u = 0;
            else {
              var s = a.suspendedLanes, f = a.pingedLanes;
              u = (1 << 31 - Yt(42 | e) + 1) - 1, u &= l & ~(s & ~f), u = u & 201326741 ? u & 201326741 | 1 : u ? u | 2 : 0;
            }
            u !== 0 && (n = !0, om(a, u));
          } else
            u = Oe, u = oi(
              a,
              a === Xe ? u : 0,
              a.cancelPendingCommit !== null || a.timeoutHandle !== -1
            ), (u & 3) === 0 || Pl(a, u) || (n = !0, om(a, u));
          a = a.next;
        }
      while (n);
      Is = !1;
    }
  }
  function ty() {
    rm();
  }
  function rm() {
    Er = Bs = !1;
    var e = 0;
    ya !== 0 && hy() && (e = ya);
    for (var t = Vt(), n = null, a = jl; a !== null; ) {
      var l = a.next, u = cm(a, t);
      u === 0 ? (a.next = null, n === null ? jl = l : n.next = l, l === null && (Hl = n)) : (n = a, (e !== 0 || (u & 3) !== 0) && (Er = !0)), a = l;
    }
    Je !== 0 && Je !== 5 || xu(e), ya !== 0 && (ya = 0);
  }
  function cm(e, t) {
    for (var n = e.suspendedLanes, a = e.pingedLanes, l = e.expirationTimes, u = e.pendingLanes & -62914561; 0 < u; ) {
      var s = 31 - Yt(u), f = 1 << s, m = l[s];
      m === -1 ? ((f & n) === 0 || (f & a) !== 0) && (l[s] = Ep(f, t)) : m <= t && (e.expiredLanes |= f), u &= ~f;
    }
    if (t = Xe, n = Oe, n = oi(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a = e.callbackNode, n === 0 || e === t && (Le === 2 || Le === 9) || e.cancelPendingCommit !== null)
      return a !== null && a !== null && Gr(a), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || Pl(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (a !== null && Gr(a), Qr(n)) {
        case 2:
        case 8:
          n = Vo;
          break;
        case 32:
          n = ii;
          break;
        case 268435456:
          n = Go;
          break;
        default:
          n = ii;
      }
      return a = sm.bind(null, e), n = Vr(n, a), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return a !== null && a !== null && Gr(a), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function sm(e, t) {
    if (Je !== 0 && Je !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (yr() && e.callbackNode !== n)
      return null;
    var a = Oe;
    return a = oi(
      e,
      e === Xe ? a : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), a === 0 ? null : (Jh(e, a, t), cm(e, Vt()), e.callbackNode != null && e.callbackNode === n ? sm.bind(null, e) : null);
  }
  function om(e, t) {
    if (yr()) return null;
    Jh(e, t, !0);
  }
  function ny() {
    vy(function() {
      (je & 6) !== 0 ? Vr(
        Io,
        ty
      ) : rm();
    });
  }
  function Vs() {
    if (ya === 0) {
      var e = Ya;
      e === 0 && (e = ri, ri <<= 1, (ri & 261888) === 0 && (ri = 256)), ya = e;
    }
    return ya;
  }
  function fm(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : vi(e);
  }
  function ay(e, t, n, a, l) {
    if (t === "submit" && n && n.stateNode === l) {
      var u = fm(
        (l[xt] || null).action
      ), s = a.submitter;
      s && (t = (t = s[xt] || null) ? fm(t.formAction) : s.getAttribute("formAction"), t !== null && (u = t, s = null));
      var f = new Ei(
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
                  kc(
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
                typeof u == "function" && (f.preventDefault(), m = new FormData(l, s), kc(
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
  for (var Gs = 0; Gs < hc.length; Gs++) {
    var Ys = hc[Gs], ly = Ys.toLowerCase(), uy = Ys[0].toUpperCase() + Ys.slice(1);
    vn(
      ly,
      "on" + uy
    );
  }
  vn(qf, "onAnimationEnd"), vn(Lf, "onAnimationIteration"), vn(Bf, "onAnimationStart"), vn("dblclick", "onDoubleClick"), vn("focusin", "onFocus"), vn("focusout", "onBlur"), vn(mg, "onTransitionRun"), vn(vg, "onTransitionStart"), vn(pg, "onTransitionCancel"), vn(If, "onTransitionEnd"), ll("onMouseEnter", ["mouseout", "mouseover"]), ll("onMouseLeave", ["mouseout", "mouseover"]), ll("onPointerEnter", ["pointerout", "pointerover"]), ll("onPointerLeave", ["pointerout", "pointerover"]), Ma(
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
  ), iy = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(Mu)
  );
  function dm(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var a = e[n], l = a.event;
      a = a.listeners;
      e: {
        var u = void 0;
        if (t)
          for (var s = a.length - 1; 0 <= s; s--) {
            var f = a[s], m = f.instance, N = f.currentTarget;
            if (f = f.listener, m !== u && l.isPropagationStopped())
              break e;
            u = f, l.currentTarget = N;
            try {
              u(l);
            } catch (U) {
              Ti(U);
            }
            l.currentTarget = null, u = m;
          }
        else
          for (s = 0; s < a.length; s++) {
            if (f = a[s], m = f.instance, N = f.currentTarget, f = f.listener, m !== u && l.isPropagationStopped())
              break e;
            u = f, l.currentTarget = N;
            try {
              u(l);
            } catch (U) {
              Ti(U);
            }
            l.currentTarget = null, u = m;
          }
      }
    }
  }
  function Ne(e, t) {
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
        n !== "selectionchange" && (iy.has(n) || Xs(n, !1, e), Xs(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[br] || (t[br] = !0, Xs("selectionchange", !1, t));
    }
  }
  function hm(e, t, n, a) {
    switch (nv(t)) {
      case 2:
        var l = Py;
        break;
      case 8:
        l = Wy;
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
    hf(function() {
      var N = u, U = $r(n), H = [];
      e: {
        var S = Vf.get(e);
        if (S !== void 0) {
          var R = Ei, F = e;
          switch (e) {
            case "keypress":
              if (gi(n) === 0) break e;
            case "keydown":
            case "keyup":
              R = Xp;
              break;
            case "focusin":
              F = "focus", R = ac;
              break;
            case "focusout":
              F = "blur", R = ac;
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
              R = kp;
              break;
            case qf:
            case Lf:
            case Bf:
              R = jp;
              break;
            case If:
              R = $p;
              break;
            case "scroll":
            case "scrollend":
              R = Up;
              break;
            case "wheel":
              R = Wp;
              break;
            case "copy":
            case "cut":
            case "paste":
              R = qp;
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
              R = Zp;
              break;
            case "toggle":
            case "beforetoggle":
              R = tg;
          }
          var te = (t & 4) !== 0, Te = !te && (e === "scroll" || e === "scrollend"), A = te ? S !== null ? S + "Capture" : null : S;
          te = [];
          for (var y = N, O; y !== null; ) {
            var j = y;
            if (O = j.stateNode, j = j.tag, j !== 5 && j !== 26 && j !== 27 || O === null || A === null || (j = nu(y, A), j != null && te.push(
              ju(y, j, O)
            )), Te) break;
            y = y.return;
          }
          0 < te.length && (S = new R(
            S,
            F,
            null,
            n,
            U
          ), H.push({ event: S, listeners: te }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (R = e === "mouseover" || e === "pointerover", S = e === "mouseout" || e === "pointerout", R && n !== Fr && (F = n.relatedTarget || n.fromElement) && (xa(F) || F[tl]))
            break e;
          (S || R) && (F = U.window === U ? U : (R = U.ownerDocument) ? R.defaultView || R.parentWindow : window, S ? (R = n.relatedTarget || n.toElement, S = N, R = R ? xa(R) : null, R !== null && (Te = h(R), te = R.tag, R !== Te || te !== 5 && te !== 27 && te !== 6) && (R = null)) : (S = null, R = N), S !== R && (te = pf, j = "onMouseLeave", A = "onMouseEnter", y = "mouse", (e === "pointerout" || e === "pointerover") && (te = yf, j = "onPointerLeave", A = "onPointerEnter", y = "pointer"), Te = S == null ? F : tu(S), O = R == null ? F : tu(R), F = new te(
            j,
            y + "leave",
            S,
            n,
            U
          ), F.target = Te, F.relatedTarget = O, j = null, xa(U) === N && (te = new te(
            A,
            y + "enter",
            R,
            n,
            U
          ), te.target = O, te.relatedTarget = Te, j = te), Te = j, te = S && R ? oe(
            S,
            R,
            ry
          ) : null, S !== null && mm(
            H,
            F,
            S,
            te,
            !1
          ), R !== null && Te !== null && mm(
            H,
            Te,
            R,
            te,
            !0
          )));
        }
        e: {
          if (S = N ? tu(N) : window, R = S.nodeName && S.nodeName.toLowerCase(), R === "select" || R === "input" && S.type === "file")
            var P = wf;
          else if (_f(S))
            if (Of)
              P = fg;
            else {
              P = sg;
              var Ce = cg;
            }
          else
            R = S.nodeName, !R || R.toLowerCase() !== "input" || S.type !== "checkbox" && S.type !== "radio" ? N && kr(N.elementType) && (P = wf) : P = og;
          if (P && (P = P(e, N))) {
            Nf(
              H,
              P,
              n,
              U
            );
            break e;
          }
          Ce && Ce(e, S, N);
        }
        switch (Ce = N ? tu(N) : window, e) {
          case "focusin":
            (_f(Ce) || Ce.contentEditable === "true") && (ol = Ce, oc = N, ou = null);
            break;
          case "focusout":
            ou = oc = ol = null;
            break;
          case "mousedown":
            fc = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            fc = !1, jf(H, n, U);
            break;
          case "selectionchange":
            if (hg) break;
          case "keydown":
          case "keyup":
            jf(H, n, U);
        }
        var ie;
        if (uc)
          e: {
            switch (e) {
              case "compositionstart":
                var de = "onCompositionStart";
                break e;
              case "compositionend":
                de = "onCompositionEnd";
                break e;
              case "compositionupdate":
                de = "onCompositionUpdate";
                break e;
            }
            de = void 0;
          }
        else
          sl ? Tf(e, n) && (de = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (de = "onCompositionStart");
        de && (Ef && n.locale !== "ko" && (sl || de !== "onCompositionStart" ? de === "onCompositionEnd" && sl && (ie = mf()) : (Wn = U, ec = "value" in Wn ? Wn.value : Wn.textContent, sl = !0)), Ce = Sr(N, de), 0 < Ce.length && (de = new gf(
          de,
          e,
          null,
          n,
          U
        ), H.push({ event: de, listeners: Ce }), ie ? de.data = ie : (ie = Af(n), ie !== null && (de.data = ie)))), (ie = ag ? lg(e, n) : ug(e, n)) && (de = Sr(N, "onBeforeInput"), 0 < de.length && (Ce = new gf(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          U
        ), H.push({
          event: Ce,
          listeners: de
        }), Ce.data = ie)), ay(
          H,
          e,
          N,
          n,
          U
        );
      }
      dm(H, t);
    });
  }
  function ju(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Sr(e, t) {
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
  function ry(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function mm(e, t, n, a, l) {
    for (var u = t._reactName, s = []; n !== null && n !== a; ) {
      var f = n, m = f.alternate, N = f.stateNode;
      if (f = f.tag, m !== null && m === a) break;
      f !== 5 && f !== 26 && f !== 27 || N === null || (m = N, l ? (N = nu(n, u), N != null && s.unshift(
        ju(n, N, m)
      )) : l || (N = nu(n, u), N != null && s.push(
        ju(n, N, m)
      ))), n = n.return;
    }
    s.length !== 0 && e.push({ event: t, listeners: s });
  }
  var cy = /\r\n?/g, sy = /\u0000|\uFFFD/g;
  function vm(e) {
    return (typeof e == "string" ? e : "" + e).replace(cy, `
`).replace(sy, "");
  }
  function pm(e, t) {
    return t = vm(t), vm(e) === t;
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
        mi(e, "class", a);
        break;
      case "tabIndex":
        mi(e, "tabindex", a);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        mi(e, n, a);
        break;
      case "style":
        ff(e, a, u);
        return;
      case "data":
        if (t !== "object") {
          mi(e, "data", a);
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
        a = vi(a), e.setAttribute(n, a);
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
        a = vi(a), e.setAttribute(n, a);
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
        n = vi(a), e.setAttributeNS(
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
        Ne("beforetoggle", e), Ne("toggle", e), hi(e, "popover", a);
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
        hi(e, "is", a);
        break;
      case "innerText":
      case "textContent":
        return;
      default:
        if (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N")
          n = Cp.get(n) || n, hi(e, n, a);
        else return;
    }
    xe = !0;
  }
  function Zs(e, t, n, a, l, u) {
    switch (n) {
      case "style":
        ff(e, a, u);
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
        if (!ef.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (l = n.endsWith("Capture"), u = n.slice(2, l ? n.length - 7 : void 0), t = e[xt] || null, t = t != null ? t[n] : null, typeof t == "function" && e.removeEventListener(u, t, l), typeof a == "function")) {
              typeof t != "function" && t !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(u, a, l);
              break e;
            }
            xe = !0, n in e ? e[n] = a : a === !0 ? e.setAttribute(n, "") : hi(e, n, a);
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
        var f = u = s = l = null, m = null, N = null;
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
                  N = U;
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
        rf(
          e,
          u,
          f,
          m,
          N,
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
        sf(e, a, l, u);
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
        for (N in n)
          if (n.hasOwnProperty(N) && (a = n[N], a != null))
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(c(137, t));
              default:
                Ie(e, t, N, a, n, null);
            }
        return;
      default:
        if (kr(t)) {
          for (U in n)
            n.hasOwnProperty(U) && (a = n[U], a !== void 0 && Zs(
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
  var oy = {};
  function fy(e, t, n, a) {
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
        var l = null, u = null, s = null, f = null, m = null, N = null, U = null;
        for (R in n) {
          var H = n[R];
          if (n.hasOwnProperty(R) && H != null)
            switch (R) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                m = H;
              default:
                a.hasOwnProperty(R) || Ie(e, t, R, null, a, H);
            }
        }
        for (var S in a) {
          var R = a[S];
          if (H = n[S], a.hasOwnProperty(S) && (R != null || H != null))
            switch (S) {
              case "type":
                R !== H && (xe = !0), u = R;
                break;
              case "name":
                R !== H && (xe = !0), l = R;
                break;
              case "checked":
                R !== H && (xe = !0), N = R;
                break;
              case "defaultChecked":
                R !== H && (xe = !0), U = R;
                break;
              case "value":
                R !== H && (xe = !0), s = R;
                break;
              case "defaultValue":
                R !== H && (xe = !0), f = R;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (R != null)
                  throw Error(c(137, t));
                break;
              default:
                R !== H && Ie(
                  e,
                  t,
                  S,
                  R,
                  a,
                  H
                );
            }
        }
        Zr(
          e,
          s,
          f,
          m,
          N,
          U,
          u,
          l
        );
        return;
      case "select":
        R = s = f = S = null;
        for (u in n)
          if (m = n[u], n.hasOwnProperty(u) && m != null)
            switch (u) {
              case "value":
                break;
              case "multiple":
                R = m;
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
        t = f, n = s, a = R, S != null ? ul(e, !!n, S, !1) : !!a != !!n && (t != null ? ul(e, !!n, t, !0) : ul(e, !!n, n ? [] : "", !1));
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
                Ie(e, t, f, null, a, l);
            }
        for (s in a)
          if (l = a[s], u = n[s], a.hasOwnProperty(s) && (l != null || u != null))
            switch (s) {
              case "value":
                l !== u && (xe = !0), S = l;
                break;
              case "defaultValue":
                l !== u && (xe = !0), R = l;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (l != null) throw Error(c(91));
                break;
              default:
                l !== u && Ie(e, t, s, l, a, u);
            }
        cf(e, S, R);
        return;
      case "option":
        for (var F in n)
          S = n[F], n.hasOwnProperty(F) && S != null && !a.hasOwnProperty(F) && (F === "selected" ? e.selected = !1 : Ie(
            e,
            t,
            F,
            null,
            a,
            S
          ));
        for (m in a)
          S = a[m], R = n[m], a.hasOwnProperty(m) && S !== R && (S != null || R != null) && (m === "selected" ? (S !== R && (xe = !0), e.selected = S && typeof S != "function" && typeof S != "symbol") : Ie(
            e,
            t,
            m,
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
        for (var te in n)
          S = n[te], n.hasOwnProperty(te) && S != null && !a.hasOwnProperty(te) && Ie(e, t, te, null, a, S);
        for (N in a)
          if (S = a[N], R = n[N], a.hasOwnProperty(N) && S !== R && (S != null || R != null))
            switch (N) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (S != null)
                  throw Error(c(137, t));
                break;
              default:
                Ie(
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
        if (kr(t)) {
          for (var Te in n)
            S = n[Te], n.hasOwnProperty(Te) && S !== void 0 && !a.hasOwnProperty(Te) && Zs(
              e,
              t,
              Te,
              void 0,
              a,
              S
            );
          for (U in a)
            S = a[U], R = n[U], !a.hasOwnProperty(U) || S === R || S === void 0 && R === void 0 || Zs(
              e,
              t,
              U,
              S,
              a,
              R
            );
          return;
        }
    }
    for (var A in n)
      S = n[A], n.hasOwnProperty(A) && S != null && !a.hasOwnProperty(A) && Ie(e, t, A, null, a, S);
    for (H in a)
      S = a[H], R = n[H], !a.hasOwnProperty(H) || S === R || S == null && R == null || Ie(e, t, H, S, a, R);
  }
  function gm(e) {
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
  function dy() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), a = 0; a < n.length; a++) {
        var l = n[a], u = l.transferSize, s = l.initiatorType, f = l.duration;
        if (u && f && gm(s)) {
          for (s = 0, f = l.responseEnd, a += 1; a < n.length; a++) {
            var m = n[a], N = m.startTime;
            if (N > f) break;
            var U = m.transferSize, H = m.initiatorType;
            U && gm(H) && (m = m.responseEnd, s += U * (m < f ? 1 : (f - N) / (m - N)));
          }
          if (--a, t += 8 * (u + s) / (l.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var Js = null, ks = null;
  function Hu(e) {
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
    return n = Hu(
      n
    ).createElement(e), n[gt] = a, n[xt] = t, Tt(n, e, t), st(n), n;
  }
  function Fs(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var $s = null;
  function hy() {
    var e = window.event;
    return e && e.type === "popstate" ? e === $s ? !1 : ($s = e, !0) : ($s = null, !1);
  }
  var Ps = typeof setTimeout == "function" ? setTimeout : void 0, my = typeof clearTimeout == "function" ? clearTimeout : void 0, Sm = typeof Promise == "function" ? Promise : void 0, Tm = typeof requestAnimationFrame == "function" ? requestAnimationFrame : Ps, vy = typeof queueMicrotask == "function" ? queueMicrotask : typeof Sm < "u" ? function(e) {
    return Sm.resolve(null).then(e).catch(py);
  } : Ps;
  function py(e) {
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
          for (var u = n.firstChild; u; ) {
            var s = u.nextSibling, f = u.nodeName;
            u[eu] || f === "SCRIPT" || f === "STYLE" || f === "LINK" && u.rel.toLowerCase() === "stylesheet" || n.removeChild(u), u = s;
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
          var u = t[l];
          0 < u.width && 0 < u.height && a++;
        }
      a === 1 && (e = e.style, e.display = t.length === 1 ? "inline-block" : "block", e.marginTop = "-" + n.paddingTop, e.marginBottom = "-" + n.paddingBottom);
    }
  }
  function wm(e, t) {
    e = e.style, t = t.style;
    var n = t != null ? t.hasOwnProperty("viewTransitionName") ? t.viewTransitionName : t.hasOwnProperty("view-transition-name") ? t["view-transition-name"] : null : null;
    e.viewTransitionName = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), n = t != null ? t.hasOwnProperty("viewTransitionClass") ? t.viewTransitionClass : t.hasOwnProperty("view-transition-class") ? t["view-transition-class"] : null : null, e.viewTransitionClass = n == null || typeof n == "boolean" ? "" : ("" + n).trim(), e.display === "inline-block" && (t == null ? e.display = e.margin = "" : (n = t.display, e.display = n == null || typeof n == "boolean" ? "" : n, n = t.margin, n != null ? e.margin = n : (n = t.hasOwnProperty("marginTop") ? t.marginTop : t["margin-top"], e.marginTop = n == null || typeof n == "boolean" ? "" : n, t = t.hasOwnProperty("marginBottom") ? t.marginBottom : t["margin-bottom"], e.marginBottom = t == null || typeof t == "boolean" ? "" : t)));
  }
  function gy(e, t, n) {
    return n = n.ownerDocument.defaultView, {
      rect: e,
      abs: t.position === "absolute" || t.position === "fixed",
      clip: t.clipPath !== "none" || t.overflow !== "visible" || t.filter !== "none" || t.mask !== "none" || t.mask !== "none" || t.borderRadius !== "0px",
      view: 0 <= e.bottom && 0 <= e.right && e.top <= n.innerHeight && e.left <= n.innerWidth
    };
  }
  function Ws(e) {
    var t = e.getBoundingClientRect(), n = getComputedStyle(e);
    return gy(t, n, e);
  }
  function yy(e) {
    return e.documentElement.clientHeight;
  }
  function Ey(e) {
    this.addEventListener("load", e), this.addEventListener("error", e);
  }
  function by(e, t, n, a, l, u, s, f, m) {
    var N = t.nodeType === 9 ? t : t.ownerDocument;
    try {
      var U = N.startViewTransition({
        update: function() {
          var S = N.defaultView, R = S.navigation && S.navigation.transition, F = N.fonts.status;
          a();
          var te = [];
          if (F === "loaded" && (yy(N), N.fonts.status === "loading" && te.push(N.fonts.ready)), F = te.length, e !== null)
            for (var Te = e.suspenseyImages, A = 0, y = 0; y < Te.length; y++) {
              var O = Te[y];
              if (!O.complete) {
                var j = O.getBoundingClientRect();
                if (0 < j.bottom && 0 < j.right && j.top < S.innerHeight && j.left < S.innerWidth) {
                  if (A += Zm(O), A > _r) {
                    te.length = F;
                    break;
                  }
                  O = new Promise(
                    Ey.bind(O)
                  ), te.push(O);
                }
              }
            }
          if (0 < te.length)
            return S = Promise.race([
              Promise.all(te),
              new Promise(function(P) {
                return setTimeout(P, 500);
              })
            ]).then(l, l), (R ? Promise.allSettled([R.finished, S]) : S).then(u, u);
          if (l(), R)
            return R.finished.then(
              u,
              u
            );
          u();
        },
        types: n
      });
      N.__reactViewTransition = U;
      var H = [];
      return U.ready.then(
        function() {
          for (var S = N.documentElement.getAnimations({
            subtree: !0
          }), R = 0; R < S.length; R++) {
            var F = S[R], te = F.effect, Te = te.pseudoElement;
            if (Te != null && Te.startsWith("::view-transition")) {
              H.push(F), F = te.getKeyframes();
              for (var A = Te = void 0, y = !0, O = 0; O < F.length; O++) {
                var j = F[O], P = j.width;
                if (Te === void 0) Te = P;
                else if (Te !== P) {
                  y = !1;
                  break;
                }
                if (P = j.height, A === void 0) A = P;
                else if (A !== P) {
                  y = !1;
                  break;
                }
                delete j.width, delete j.height, j.transform === "none" && delete j.transform;
              }
              y && Te !== void 0 && A !== void 0 && (te.setKeyframes(F), y = getComputedStyle(
                te.target,
                te.pseudoElement
              ), y.width !== Te || y.height !== A) && (y = F[0], y.width = Te, y.height = A, y = F[F.length - 1], y.width = Te, y.height = A, te.setKeyframes(F));
            }
          }
          s();
        },
        function(S) {
          N.__reactViewTransition === U && (N.__reactViewTransition = null);
          try {
            typeof S == "object" && S !== null && S.name === "InvalidStateError" && (S.message === "View transition was skipped because document visibility state is hidden." || S.message === "Skipping view transition because document visibility state has become hidden." || S.message === "Skipping view transition because viewport size changed." || S.message === "Transition was aborted because of invalid state") && (S = null), S !== null && m(S);
          } finally {
            a(), l(), s();
          }
        }
      ), U.finished.finally(function() {
        for (var S = 0; S < H.length; S++)
          H[S].cancel();
        N.__reactViewTransition === U && (N.__reactViewTransition = null), f();
      }), U;
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
      var u = n[l].effect;
      u !== null && u.target === e && u.pseudoElement === t && a.push(n[l]);
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
  function $t(e) {
    this._fragmentFiber = e, this._observers = this._eventListeners = null;
  }
  $t.prototype.addEventListener = function(e, t, n) {
    var a = null, l = null;
    if (!(n != null && typeof n != "boolean" && (a = n.signal || null, a !== null && a.aborted))) {
      this._eventListeners === null && (this._eventListeners = []);
      var u = this._eventListeners;
      if (Rm(u, e, t, n) === -1) {
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
        ), a.addEventListener("abort", l, { once: !0 }), l = a.removeEventListener.bind(a, "abort", l)), a = ql(n), u.push({
          type: e,
          listener: t,
          optionsOrUseCapture: n,
          attachedListener: f,
          cleanup: l
        }), v(
          this._fragmentFiber.child,
          !1,
          Sy,
          e,
          f,
          a
        );
      }
      this._eventListeners = u;
    }
  };
  function Sy(e, t, n, a) {
    return x(e).addEventListener(
      t,
      n,
      a
    ), !1;
  }
  $t.prototype.removeEventListener = function(e, t, n) {
    var a = this._eventListeners;
    if (a !== null && (t = Rm(
      a,
      e,
      t,
      n
    ), t !== -1)) {
      var l = a[t];
      n = l.attachedListener;
      var u = l.cleanup;
      l = ql(l.optionsOrUseCapture), v(
        this._fragmentFiber.child,
        !1,
        Ty,
        e,
        n,
        l
      ), a.splice(t, 1), u !== null && u();
    }
  };
  function Ty(e, t, n, a) {
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
      var u = e[l];
      if (u.type === t && u.listener === n && Cm(u.optionsOrUseCapture) === a)
        return l;
    }
    return -1;
  }
  $t.prototype.dispatchEvent = function(e) {
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
            ql(u.optionsOrUseCapture)
          );
        }
      if (t.appendChild(a), e = a.dispatchEvent(e), n)
        for (l = 0; l < n.length; l++)
          u = n[l], a.removeEventListener(
            u.type,
            u.attachedListener,
            ql(u.optionsOrUseCapture)
          );
      return t.removeChild(a), e;
    }
    return t.dispatchEvent(e);
  }, $t.prototype.focus = function(e) {
    v(
      this._fragmentFiber.child,
      !0,
      Um,
      e,
      void 0,
      void 0
    );
  };
  function Um(e, t) {
    return e.tag === 6 ? !1 : (e = x(e), My(e, t));
  }
  $t.prototype.focusLast = function(e) {
    var t = [];
    v(
      this._fragmentFiber.child,
      !0,
      eo,
      t,
      void 0,
      void 0
    );
    for (var n = t.length - 1; 0 <= n && !Um(t[n], e); n--) ;
  };
  function eo(e, t) {
    return t.push(e), !1;
  }
  $t.prototype.blur = function() {
    var e = B(
      this._fragmentFiber
    );
    e !== null && (e = x(e), e = Hu(e).activeElement, e !== null && v(
      this._fragmentFiber.child,
      !1,
      Ay,
      e,
      void 0,
      void 0
    ));
  };
  function Ay(e, t) {
    return e.tag === 6 ? !1 : (e = x(e), e === t || e.contains(t) ? (t.blur(), !0) : !1);
  }
  $t.prototype.observeUsing = function(e) {
    this._observers === null && (this._observers = /* @__PURE__ */ new Set()), this._observers.add(e), v(
      this._fragmentFiber.child,
      !1,
      _y,
      e,
      void 0,
      void 0
    );
  };
  function _y(e, t) {
    return e.tag === 6 || (e = x(e), t.observe(e)), !1;
  }
  $t.prototype.unobserveUsing = function(e) {
    var t = this._observers;
    if (t !== null && t.has(e)) {
      t.delete(e), v(
        this._fragmentFiber.child,
        !1,
        Ny,
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
  function Ny(e, t) {
    return e.tag === 6 || (e = x(e), t.unobserve(e)), !1;
  }
  var bn = [], to = !1;
  function wy(e, t, n) {
    bn.push({
      fragmentInstance: e,
      observer: t,
      instance: n
    }), to || (to = !0, jy(function() {
      to = !1;
      var a = bn;
      bn = [];
      for (var l = 0; l < a.length; l++) {
        var u = a[l];
        u.observer.unobserve(u.instance);
      }
    }));
  }
  $t.prototype.getClientRects = function() {
    var e = [];
    return v(
      this._fragmentFiber.child,
      !1,
      Oy,
      e,
      void 0,
      void 0
    ), e;
  };
  function Oy(e, t) {
    if (e.tag === 6) {
      e = e.stateNode;
      var n = e.ownerDocument.createRange();
      n.selectNodeContents(e), t.push.apply(t, n.getClientRects());
    } else
      e = x(e), t.push.apply(t, e.getClientRects());
    return !1;
  }
  $t.prototype.getRootNode = function(e) {
    var t = B(
      this._fragmentFiber
    );
    return t === null ? this : x(t).getRootNode(e);
  }, $t.prototype.compareDocumentPosition = function(e) {
    var t = B(
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
      if (n = a, D(this._fragmentFiber)) {
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
      return n === e ? l = Node.DOCUMENT_POSITION_CONTAINS : a & Node.DOCUMENT_POSITION_CONTAINED_BY && (n = T(t)[1], n === null ? l = Node.DOCUMENT_POSITION_PRECEDING : (e = x(n).compareDocumentPosition(
        e
      ), l = e === 0 || e & Node.DOCUMENT_POSITION_FOLLOWING ? Node.DOCUMENT_POSITION_FOLLOWING : Node.DOCUMENT_POSITION_PRECEDING)), l |= Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
    }
    t = x(n[0]), l = x(n[n.length - 1]);
    var u = D(this._fragmentFiber) ? t.parentElement : a;
    if (u == null)
      return Node.DOCUMENT_POSITION_DISCONNECTED;
    a = u.compareDocumentPosition(t) & Node.DOCUMENT_POSITION_CONTAINED_BY, u = u.compareDocumentPosition(l) & Node.DOCUMENT_POSITION_CONTAINED_BY;
    var s = t.compareDocumentPosition(e), f = l.compareDocumentPosition(e), m = s & Node.DOCUMENT_POSITION_CONTAINED_BY || f & Node.DOCUMENT_POSITION_CONTAINED_BY;
    return f = a && u && s & Node.DOCUMENT_POSITION_FOLLOWING && f & Node.DOCUMENT_POSITION_PRECEDING, t = a && t === e || u && l === e || m || f ? Node.DOCUMENT_POSITION_CONTAINED_BY : !a && t === e || !u && l === e ? Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC : s, t & Node.DOCUMENT_POSITION_DISCONNECTED || t & Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC || Cy(
      t,
      this._fragmentFiber,
      n[0],
      n[n.length - 1],
      e
    ) ? t : Node.DOCUMENT_POSITION_IMPLEMENTATION_SPECIFIC;
  };
  function Cy(e, t, n, a, l) {
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
    return e & Node.DOCUMENT_POSITION_PRECEDING ? ((t = !!u) && !(t = u === n) && (t = oe(
      n,
      u,
      ye
    ), t === null ? t = !1 : (v(
      t,
      !0,
      Q,
      u,
      n
    ), u = K, K = null, t = u !== null)), t) : e & Node.DOCUMENT_POSITION_FOLLOWING ? ((t = !!u) && !(t = u === a) && (t = oe(
      a,
      u,
      ye
    ), t === null ? t = !1 : (v(
      t,
      !0,
      V,
      u,
      a
    ), u = K, $ = K = null, t = u !== null)), t) : !1;
  }
  function Dm(e, t) {
    var n = e.ownerDocument.createRange();
    n.selectNodeContents(e), e = n.getBoundingClientRect(), window.scrollTo(
      window.scrollX + e.left,
      t ? window.scrollY + e.top : window.scrollY + e.bottom - window.innerHeight
    );
  }
  $t.prototype.scrollIntoView = function(e) {
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
      var a = T(
        this._fragmentFiber
      );
      if (a = n ? a[1] || a[0] || B(this._fragmentFiber) : a[0] || a[1], a === null) return;
      if (a.tag === 6) {
        e = x(a), Dm(e, n);
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
      l.tag === 6 ? (l = x(l), Dm(l, n)) : x(l).scrollIntoView(e), a += n ? -1 : 1;
    }
  };
  function Ry(e, t) {
    return e = x(e), zm(e, t), !1;
  }
  function zm(e, t) {
    e.reactFragments == null && (e.reactFragments = /* @__PURE__ */ new Set()), e.reactFragments.add(t);
  }
  function xm(e, t) {
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
    e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(u) {
      for (var s = 0, f = 0; f < bn.length; f++) {
        var m = bn[f];
        (m.fragmentInstance !== t || m.observer !== u || m.instance !== e) && (bn[s++] = m);
      }
      bn.length = s, u.observe(e);
    }), zm(e, t));
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
    e.nodeType !== 3 && (n = t._observers, n !== null && n.forEach(function(u) {
      typeof u.rootMargin == "string" ? wy(
        t,
        u,
        e
      ) : u.unobserve(e);
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
          no(n), di(n);
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
      if (e = cn(e.nextSibling), e === null) break;
    }
    return null;
  }
  function zy(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = cn(e.nextSibling), e === null)) return null;
    return e;
  }
  function Mm(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = cn(e.nextSibling), e === null)) return null;
    return e;
  }
  function ao(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function lo(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function xy(e, t) {
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
  var uo = null;
  function jm(e) {
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
  function My(e, t) {
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
  function jy(e) {
    Tm(function() {
      Tm(function(t) {
        return e(t);
      });
    });
  }
  function qm(e, t, n) {
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
  function Lm(e, t, n) {
    for (var a in n) {
      var l = n[a];
      n.hasOwnProperty(a) && l != null && Ie(e, t, a, null, oy, l);
    }
    n.dangerouslySetInnerHTML != null && (e.textContent = ""), e.onclick === An && (e.onclick = null), di(e);
  }
  function io(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    di(e);
  }
  var sn = /* @__PURE__ */ new Map(), Bm = /* @__PURE__ */ new Set();
  function qu(e) {
    if (typeof e.getRootNode == "function") {
      var t = e.getRootNode();
      if (t.nodeType === 9 || t.nodeType === 11) return t;
    }
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  var kn = fe.d;
  fe.d = {
    f: Hy,
    r: qy,
    D: Ly,
    C: By,
    L: Iy,
    m: Vy,
    X: Yy,
    S: Gy,
    M: Xy
  };
  function Hy() {
    var e = kn.f(), t = vr();
    return e || t;
  }
  function qy(e) {
    var t = nl(e);
    t !== null && t.tag === 5 && t.type === "form" ? Vd(t) : kn.r(e);
  }
  var Ll = typeof document > "u" ? null : document;
  function Im(e, t, n) {
    var a = Ll;
    if (a && typeof t == "string" && t) {
      var l = en(t);
      l = 'link[rel="' + e + '"][href="' + l + '"]', typeof n == "string" && (l += '[crossorigin="' + n + '"]'), Bm.has(l) || (Bm.add(l), e = { rel: e, crossOrigin: n, href: t }, a.querySelector(l) === null && (t = a.createElement("link"), Tt(t, "link", e), st(t), a.head.appendChild(t)));
    }
  }
  function Ly(e) {
    kn.D(e), Im("dns-prefetch", e, null);
  }
  function By(e, t) {
    kn.C(e, t), Im("preconnect", e, t);
  }
  function Iy(e, t, n) {
    kn.L(e, t, n);
    var a = Ll;
    if (a && e && t) {
      var l = 'link[rel="preload"][as="' + en(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (l += '[imagesrcset="' + en(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (l += '[imagesizes="' + en(
        n.imageSizes
      ) + '"]')) : l += '[href="' + en(e) + '"]';
      var u = l;
      switch (t) {
        case "style":
          u = Bl(e);
          break;
        case "script":
          u = Il(e);
      }
      if (!(sn.has(u) || (e = ne(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), sn.set(u, e), a.querySelector(l) !== null || t === "style" && a.querySelector(Lu(u)) || t === "script" && a.querySelector(Bu(u))))) {
        var s = a.createElement("link");
        Tt(s, "link", e), t === "style" && (s[fi] = !0, s.onload = s.onerror = function() {
          Po(s);
        }), st(s), a.head.appendChild(s);
      }
    }
  }
  function Vy(e, t) {
    kn.m(e, t);
    var n = Ll;
    if (n && e) {
      var a = t && typeof t.as == "string" ? t.as : "script", l = 'link[rel="modulepreload"][as="' + en(a) + '"][href="' + en(e) + '"]', u = l;
      switch (a) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          u = Il(e);
      }
      if (!sn.has(u) && (e = ne({ rel: "modulepreload", href: e }, t), sn.set(u, e), n.querySelector(l) === null)) {
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
  function Gy(e, t, n) {
    kn.S(e, t, n);
    var a = Ll;
    if (a && e) {
      var l = al(a).hoistableStyles, u = Bl(e);
      t = t || "default";
      var s = l.get(u);
      if (!s) {
        var f = { loading: 0, preload: null };
        if (s = a.querySelector(
          Lu(u)
        ))
          f.loading = 5;
        else {
          e = ne(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = sn.get(u)) && ro(e, n);
          var m = s = a.createElement("link");
          st(m), Tt(m, "link", e), m._p = new Promise(function(N, U) {
            m.onload = N, m.onerror = U;
          }), m.addEventListener("load", function() {
            f.loading |= 1;
          }), m.addEventListener("error", function() {
            f.loading |= 2;
          }), f.loading |= 4, Tr(s, t, a);
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
  function Yy(e, t) {
    kn.X(e, t);
    var n = Ll;
    if (n && e) {
      var a = al(n).hoistableScripts, l = Il(e), u = a.get(l);
      u || (u = n.querySelector(Bu(l)), u || (e = ne({ src: e, async: !0 }, t), (t = sn.get(l)) && co(e, t), u = n.createElement("script"), st(u), Tt(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(l, u));
    }
  }
  function Xy(e, t) {
    kn.M(e, t);
    var n = Ll;
    if (n && e) {
      var a = al(n).hoistableScripts, l = Il(e), u = a.get(l);
      u || (u = n.querySelector(Bu(l)), u || (e = ne({ src: e, async: !0, type: "module" }, t), (t = sn.get(l)) && co(e, t), u = n.createElement("script"), st(u), Tt(u, "link", e), n.head.appendChild(u)), u = {
        type: "script",
        instance: u,
        count: 1,
        state: null
      }, a.set(l, u));
    }
  }
  function Vm(e, t, n, a) {
    var l = (l = X.current) ? qu(l) : null;
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
            Lu(e)
          )) ? u._p || (s.instance = u, s.state.loading = 5) : (u = sn.get(e), u || (u = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, sn.set(e, u)), Qy(
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
    return 'href="' + en(e) + '"';
  }
  function Lu(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Gm(e) {
    return ne({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function Qy(e, t, n, a) {
    if (t = e.querySelector(
      'link[rel="preload"][as="style"][' + t + "]"
    )) {
      if (t[fi] !== !0) {
        a.loading = 1;
        return;
      }
    } else
      t = e.createElement("link"), t[fi] = !0, t.onload = t.onerror = Po.bind(null, t), Tt(t, "link", n), st(t), e.head.appendChild(t);
    a.preload = t, t.addEventListener("load", function() {
      return a.loading |= 1;
    }), t.addEventListener("error", function() {
      return a.loading |= 2;
    });
  }
  function Il(e) {
    return '[src="' + en(e) + '"]';
  }
  function Bu(e) {
    return "script[async]" + e;
  }
  function Ym(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var a = e.querySelector(
            'style[data-href~="' + en(n.href) + '"]'
          );
          if (a)
            return t.instance = a, st(a), a;
          var l = ne({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return a = (e.ownerDocument || e).createElement(
            "style"
          ), st(a), Tt(a, "style", l), Tr(a, n.precedence, e), t.instance = a;
        case "stylesheet":
          l = Bl(n.href);
          var u = e.querySelector(
            Lu(l)
          );
          if (u)
            return t.state.loading |= 4, t.instance = u, st(u), u;
          a = Gm(n), (l = sn.get(l)) && ro(a, l), u = (e.ownerDocument || e).createElement("link"), st(u);
          var s = u;
          return s._p = new Promise(function(f, m) {
            s.onload = f, s.onerror = m;
          }), Tt(u, "link", a), t.state.loading |= 4, Tr(u, n.precedence, e), t.instance = u;
        case "script":
          return u = Il(n.src), (l = e.querySelector(
            Bu(u)
          )) ? (t.instance = l, st(l), l) : (a = n, (l = sn.get(u)) && (a = ne({}, n), co(a, l)), e = e.ownerDocument || e, l = e.createElement("script"), st(l), Tt(l, "link", a), e.head.appendChild(l), t.instance = l);
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
    ), l = a.length ? a[a.length - 1] : null, u = l, s = 0; s < a.length; s++) {
      var f = a[s];
      if (f.dataset.precedence === t) u = f;
      else if (u !== l) break;
    }
    u ? u.parentNode.insertBefore(e, u.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
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
  function so(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function Ky(e, t, n) {
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
  function Jm(e, t) {
    typeof t.decode == "function" && (e.imgCount++, t.complete || (e.imgBytes += Zm(t), e.suspenseyImages.push(t)), e = ky.bind(e), t.decode().then(e, e));
  }
  function Zy(e, t, n, a) {
    if (n.type === "stylesheet" && (typeof a.media != "string" || matchMedia(a.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var l = Bl(a.href), u = t.querySelector(
          Lu(l)
        );
        if (u) {
          t = u._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Iu.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = u, st(u);
          return;
        }
        u = t.ownerDocument || t, a = Gm(a), (l = sn.get(l)) && ro(a, l), u = u.createElement("link"), st(u);
        var s = u;
        s._p = new Promise(function(f, m) {
          s.onload = f, s.onerror = m;
        }), Tt(u, "link", a), n.instance = u;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Iu.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var _r = 0;
  function Jy(e, t) {
    return e.stylesheets && e.count === 0 && wr(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var a = setTimeout(function() {
        if (e.stylesheets && wr(e, e.stylesheets), e.unsuspend) {
          var u = e.unsuspend;
          e.unsuspend = null, u();
        }
      }, 6e4 + t);
      0 < e.imgBytes && _r === 0 && (_r = 62500 * dy());
      var l = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && wr(e, e.stylesheets), e.unsuspend)) {
            var u = e.unsuspend;
            e.unsuspend = null, u();
          }
        },
        (e.imgBytes > _r ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(a), clearTimeout(l);
      };
    } : null;
  }
  function km(e) {
    if (e.count === 0 && (e.imgCount === 0 || !e.waitingForImages)) {
      if (e.stylesheets) wr(e, e.stylesheets);
      else if (e.unsuspend) {
        var t = e.unsuspend;
        e.unsuspend = null, t();
      }
    }
  }
  function Iu() {
    this.count--, km(this);
  }
  function ky() {
    this.imgCount--, km(this);
  }
  var Nr = null;
  function wr(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Nr = /* @__PURE__ */ new Map(), t.forEach(Fy, e), Nr = null, Iu.call(e));
  }
  function Fy(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Nr.get(e);
      if (n) var a = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Nr.set(e, n);
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
    $$typeof: G,
    Provider: null,
    Consumer: null,
    _currentValue: Pt,
    _currentValue2: Pt,
    _threadCount: 0
  };
  function $y(e, t, n, a, l, u, s, f, m) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Yr(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Yr(0), this.hiddenUpdates = Yr(null), this.identifierPrefix = a, this.onUncaughtError = l, this.onCaughtError = u, this.onRecoverableError = s, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = m, this.transitionTypes = null, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Fm(e, t, n, a, l, u, s, f, m, N, U, H) {
    return e = new $y(
      e,
      t,
      n,
      s,
      m,
      N,
      U,
      H,
      f
    ), t = 1, u === !0 && (t |= 24), u = Mt(3, null, null, t), e.current = u, u.stateNode = e, t = _c(), t.refCount++, e.pooledCache = t, t.refCount++, u.memoizedState = {
      element: a,
      isDehydrated: n,
      cache: t
    }, Cc(u), e;
  }
  function $m(e) {
    return e ? (e = hl, e) : hl;
  }
  function Pm(e, t, n, a, l, u) {
    l = $m(l), a.context === null ? a.context = l : a.pendingContext = l, a = ra(t), a.payload = { element: n }, u = u === void 0 ? null : u, u !== null && (a.callback = u), n = ca(e, a, t), n !== null && (Lt(n, e, t), gu(n, e, t));
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
  function ev(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = qa(e, 67108864);
      t !== null && Lt(t, e, 67108864), oo(e, 67108864);
    }
  }
  function tv(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Ft();
      t = Xr(t);
      var n = qa(e, t);
      n !== null && Lt(n, e, t), oo(e, t);
    }
  }
  var Gl = !0;
  function Py(e, t, n, a) {
    var l = ee.T;
    ee.T = null;
    var u = fe.p;
    try {
      fe.p = 2, fo(e, t, n, a);
    } finally {
      fe.p = u, ee.T = l;
    }
  }
  function Wy(e, t, n, a) {
    var l = ee.T;
    ee.T = null;
    var u = fe.p;
    try {
      fe.p = 8, fo(e, t, n, a);
    } finally {
      fe.p = u, ee.T = l;
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
        ), av(e, a);
      else if (t0(
        l,
        e,
        t,
        n,
        a
      ))
        a.stopPropagation();
      else if (av(e, a), t & 4 && -1 < e0.indexOf(e)) {
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
                      var m = 1 << 31 - Yt(s);
                      f.entanglements[1] |= m, s &= ~m;
                    }
                    xn(u), (je & 6) === 0 && (dr = Vt() + 500, xu(0));
                  }
                }
                break;
              case 31:
              case 13:
                f = qa(u, 2), f !== null && Lt(f, u, 2), vr(), oo(u, 2);
            }
          if (u = ho(a), u === null && Ks(
            e,
            t,
            a,
            Or,
            n
          ), u === l) break;
          l = u;
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
    if (Or = null, e = xa(e), e !== null) {
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
  function nv(e) {
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
        switch (dp()) {
          case Io:
            return 2;
          case Vo:
            return 8;
          case ii:
          case hp:
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
  var vo = !1, ba = null, Sa = null, Ta = null, Vu = /* @__PURE__ */ new Map(), Gu = /* @__PURE__ */ new Map(), Aa = [], e0 = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function av(e, t) {
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
    }, t !== null && (t = nl(t), t !== null && ev(t)), e) : (e.eventSystemFlags |= a, t = e.targetContainers, l !== null && t.indexOf(l) === -1 && t.push(l), e);
  }
  function t0(e, t, n, a, l) {
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
  function lv(e) {
    var t = xa(e.target);
    if (t !== null) {
      var n = h(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = p(n), t !== null) {
            e.blockedOn = t, ko(e.priority, function() {
              tv(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = b(n), t !== null) {
            e.blockedOn = t, ko(e.priority, function() {
              tv(n);
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
        return t = nl(n), t !== null && ev(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function uv(e, t, n) {
    Cr(e) && n.delete(t);
  }
  function n0() {
    vo = !1, ba !== null && Cr(ba) && (ba = null), Sa !== null && Cr(Sa) && (Sa = null), Ta !== null && Cr(Ta) && (Ta = null), Vu.forEach(uv), Gu.forEach(uv);
  }
  function Rr(e, t) {
    e.blockedOn === t && (e.blockedOn = null, vo || (vo = !0, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      n0
    )));
  }
  var Ur = null;
  function iv(e) {
    Ur !== e && (Ur = e, i.unstable_scheduleCallback(
      i.unstable_NormalPriority,
      function() {
        Ur === e && (Ur = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], a = e[t + 1], l = e[t + 2];
          if (typeof a != "function") {
            if (mo(a || n) === null)
              continue;
            break;
          }
          var u = nl(n);
          u !== null && (e.splice(t, 3), t -= 3, kc(
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
      return Rr(m, e);
    }
    ba !== null && Rr(ba, e), Sa !== null && Rr(Sa, e), Ta !== null && Rr(Ta, e), Vu.forEach(t), Gu.forEach(t);
    for (var n = 0; n < Aa.length; n++) {
      var a = Aa[n];
      a.blockedOn === e && (a.blockedOn = null);
    }
    for (; 0 < Aa.length && (n = Aa[0], n.blockedOn === null); )
      lv(n), n.blockedOn === null && Aa.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (a = 0; a < n.length; a += 3) {
        var l = n[a], u = n[a + 1], s = l[xt] || null;
        if (typeof u == "function")
          s || iv(n);
        else if (s) {
          var f = null;
          if (u && u.hasAttribute("formAction")) {
            if (l = u, s = u[xt] || null)
              f = s.formAction;
            else if (mo(l) !== null) continue;
          } else f = s.action;
          typeof f == "function" ? n[a + 1] = f : (n.splice(a, 3), a -= 3), iv(n);
        }
      }
  }
  function rv() {
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
  function po(e) {
    this._internalRoot = e;
  }
  Dr.prototype.render = po.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(c(409));
    var n = t.current, a = Ft();
    Pm(n, a, e, t, null, null);
  }, Dr.prototype.unmount = po.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Pm(e.current, 2, null, e, null, null), vr(), t[tl] = null;
    }
  };
  function Dr(e) {
    this._internalRoot = e;
  }
  Dr.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = Jo();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Aa.length && t !== 0 && t < Aa[n].priority; n++) ;
      Aa.splice(n, 0, e), n === 0 && lv(e);
    }
  };
  var cv = r.version;
  if (cv !== "19.3.0")
    throw Error(
      c(
        527,
        cv,
        "19.3.0"
      )
    );
  fe.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(c(188)) : (e = Object.keys(e).join(","), Error(c(268, e)));
    return e = w(t), e = e !== null ? z(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var a0 = {
    bundleType: 0,
    version: "19.3.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: ee,
    reconcilerVersion: "19.3.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var zr = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!zr.isDisabled && zr.supportsFiber)
      try {
        $l = zr.inject(
          a0
        ), Gt = zr;
      } catch {
      }
  }
  return Qu.createRoot = function(e, t) {
    if (!d(e)) throw Error(c(299));
    var n = !1, a = "", l = $d, u = Pd, s = Wd;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (a = t.identifierPrefix), t.onUncaughtError !== void 0 && (l = t.onUncaughtError), t.onCaughtError !== void 0 && (u = t.onCaughtError), t.onRecoverableError !== void 0 && (s = t.onRecoverableError)), t = Fm(
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
      rv
    ), e[tl] = t.current, Qs(e), new po(t);
  }, Qu.hydrateRoot = function(e, t, n) {
    if (!d(e)) throw Error(c(299));
    var a = !1, l = "", u = $d, s = Pd, f = Wd, m = null;
    return n != null && (n.unstable_strictMode === !0 && (a = !0), n.identifierPrefix !== void 0 && (l = n.identifierPrefix), n.onUncaughtError !== void 0 && (u = n.onUncaughtError), n.onCaughtError !== void 0 && (s = n.onCaughtError), n.onRecoverableError !== void 0 && (f = n.onRecoverableError), n.formState !== void 0 && (m = n.formState)), t = Fm(
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
      rv
    ), t.context = $m(null), n = t.current, a = Ft(), a = Xr(a), l = ra(a), l.callback = null, ca(n, l, a), n = a, t.current.lanes = n, Wl(t, n), xn(t), e[tl] = t.current, Qs(e), new Dr(t);
  }, Qu.version = "19.3.0", Qu;
}
var yv;
function h0() {
  if (yv) return Eo.exports;
  yv = 1;
  function i() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(i);
      } catch (r) {
        console.error(r);
      }
  }
  return i(), Eo.exports = d0(), Eo.exports;
}
var m0 = h0();
function jv(i, r) {
  if (r) return r;
  const o = new URLSearchParams(i.location.search).get("hana-host-origin");
  if (o) return o;
  try {
    return new URL(i.document.referrer).origin;
  } catch {
    return "*";
  }
}
function Hv(i, r, o) {
  return i.source !== r ? !1 : o === "*" || i.origin === o;
}
var v0 = 600, p0 = 120, g0 = 4e3, qv = 20, Ev = 4096, bv = 1e4, y0 = /* @__PURE__ */ new Set(["scroll_element", "click_sequence", "drag_element", "press_key"]), E0 = /* @__PURE__ */ new Set([
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
]), Lv = "hana-ui-", b0 = 512, S0 = 1, Sv = /* @__PURE__ */ new WeakMap(), Hr = /* @__PURE__ */ new WeakMap();
function Ql(i) {
  return typeof i == "object" && i !== null && !Array.isArray(i);
}
function Br(i) {
  return i.nodeType === 9;
}
function Mo(i) {
  return Br(i) ? i : i.ownerDocument;
}
function T0(i) {
  return Br(i) ? i.body : i;
}
function Bv(i, r) {
  return r.isConnected && (Br(i) ? r.ownerDocument === i : i.contains(r));
}
function kl(i) {
  const r = i.ownerDocument.defaultView?.HTMLElement;
  return r ? i instanceof r : i instanceof HTMLElement;
}
function ni(i) {
  const r = i.ownerDocument.defaultView?.HTMLInputElement;
  return r ? i instanceof r : i instanceof HTMLInputElement;
}
function jo(i) {
  const r = i.ownerDocument.defaultView?.HTMLTextAreaElement;
  return r ? i instanceof r : i instanceof HTMLTextAreaElement;
}
function Iv(i) {
  const r = i.ownerDocument.defaultView?.HTMLButtonElement;
  return r ? i instanceof r : i instanceof HTMLButtonElement;
}
function A0(i) {
  const r = i.ownerDocument.defaultView?.HTMLSelectElement;
  return r ? i instanceof r : i.tagName === "SELECT";
}
function _0(i) {
  const r = i.ownerDocument.defaultView?.HTMLAnchorElement;
  return r ? i instanceof r : i.tagName === "A";
}
function Vv(i) {
  if (!kl(i)) return !0;
  const r = i.ownerDocument.defaultView?.getComputedStyle(i);
  return !r || r.display !== "none" && r.visibility !== "hidden";
}
function N0(i) {
  return kl(i) ? ni(i) || jo(i) || Iv(i) || A0(i) || _0(i) || i.hasAttribute("contenteditable") || i.hasAttribute("onclick") || ["button", "switch", "textbox", "combobox", "slider", "checkbox", "link"].includes(i.getAttribute("role") ?? "") : !1;
}
function w0(i) {
  const r = i.ownerDocument;
  let o = Sv.get(r);
  o || (o = /* @__PURE__ */ new WeakMap(), Sv.set(r, o));
  const c = o.get(i), d = Hr.get(r);
  if (c && d?.has(c)) return c;
  let h = c;
  if (!h)
    do
      h = `${Lv}${S0++}`;
    while (r.getElementById(h));
  o.set(i, h);
  let p = Hr.get(r);
  if (p || (p = /* @__PURE__ */ new Map(), Hr.set(r, p)), p.size >= b0) {
    const b = p.keys().next().value;
    b && p.delete(b);
  }
  return p.set(h, new WeakRef(i)), h;
}
function O0(i, r) {
  const o = i, c = { tagName: i.tagName.toLowerCase() };
  typeof o.id == "string" && o.id && (c.id = o.id.slice(0, 80)), typeof o.className == "string" && o.className.trim() && (c.className = o.className.trim().slice(0, 120));
  const d = o.textContent?.trim();
  return d && (c.text = d.slice(0, 160)), (ni(i) || jo(i)) && (i.disabled && (c.disabled = !0), i.type && (c.type = i.type)), o.id ? c.elementId = o.id : r && N0(i) && (c.elementId = w0(i)), c;
}
function C0(i, r) {
  const o = [], c = T0(i);
  if (!c) return { outline: o, visibleNodeCount: 0, totalNodeCount: 0, truncated: !1 };
  const d = Mo(i).createTreeWalker(c, 1);
  let h = d.currentNode, p = 0, b = 0;
  for (; h && b < v0; ) {
    if (h.nodeType === 1) {
      const C = h;
      b += 1, Vv(C) && (p += 1, o.length < p0 && o.push(O0(C, r)));
    }
    h = d.nextNode();
  }
  return { outline: o, visibleNodeCount: p, totalNodeCount: b, truncated: h !== null };
}
function Uo(i, r, o = !1) {
  if (typeof r != "string" || !r.trim()) return null;
  const c = r.trim(), d = Mo(i), h = c.startsWith(Lv) ? Hr.get(d)?.get(c)?.deref() ?? null : d.getElementById(c);
  return h && Bv(i, h) && (!o || Vv(h)) ? h : null;
}
function Gv(i) {
  return kl(i) ? ni(i) && (i.type === "file" || i.disabled) ? { ok: !1, error: "This element cannot be clicked." } : Iv(i) && i.disabled ? { ok: !1, error: "This element cannot be clicked." } : (i.click(), { ok: !0 }) : { ok: !1, error: "Target is not an element." };
}
function Tv(i, r) {
  const o = ni(i) ? i.ownerDocument.defaultView?.HTMLInputElement.prototype : i.ownerDocument.defaultView?.HTMLTextAreaElement.prototype, c = o && Object.getOwnPropertyDescriptor(o, "value")?.set;
  c ? c.call(i, r) : i.value = r;
}
function R0(i, r, o) {
  const c = typeof r == "string" ? r.slice(0, g0) : "";
  if (ni(i)) {
    if (i.type === "file" || i.disabled || i.readOnly) return { ok: !1, error: "This element cannot accept text." };
    o ? Tv(i, `${i.value}${c}`) : i.value = `${i.value}${c}`;
  } else if (jo(i)) {
    if (i.disabled || i.readOnly) return { ok: !1, error: "This element cannot accept text." };
    o ? Tv(i, `${i.value}${c}`) : i.value = `${i.value}${c}`;
  } else return { ok: !1, error: "This element cannot accept text." };
  return i.dispatchEvent(new Event("input", { bubbles: !0 })), i.dispatchEvent(new Event("change", { bubbles: !0 })), { ok: !0 };
}
function $u(i, r) {
  const o = Uo(i, r, !0);
  return o && kl(o) ? o : null;
}
function qr(i, r) {
  return typeof i == "number" && Number.isFinite(i) && Math.abs(i) <= r ? i : null;
}
function U0(i, r) {
  const o = r.scrollX === void 0 ? 0 : qr(r.scrollX, bv), c = r.scrollY === void 0 ? 0 : qr(r.scrollY, bv);
  if (o === null || c === null || o === 0 && c === 0) return { ok: !1, code: "UI_ACTION_SCROLL_INVALID", error: "scroll_element requires bounded non-zero scroll coordinates." };
  const d = r.elementId === void 0 ? Br(i) ? i.scrollingElement ?? i.documentElement : i : $u(i, r.elementId);
  return !d || !kl(d) ? { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No visible element matches this elementId." } : (d.scrollLeft += o, d.scrollTop += c, d.dispatchEvent(new Event("scroll", { bubbles: !1 })), { ok: !0, result: { scrollLeft: d.scrollLeft, scrollTop: d.scrollTop } });
}
function D0(i) {
  const r = Array.isArray(i.steps) ? i.steps : i.elementIds;
  if (!Array.isArray(r) || r.length < 1 || r.length > qv) return null;
  const o = r.map((c) => {
    if (typeof c == "string") return c.trim();
    if (!Ql(c)) return "";
    const d = typeof c.elementId == "string" ? c.elementId.trim() : "", h = Array.isArray(c.elementIds) && c.elementIds.length === 1 && typeof c.elementIds[0] == "string" ? c.elementIds[0].trim() : "";
    return d || h;
  });
  return o.every(Boolean) ? o : null;
}
function z0(i, r) {
  const o = D0(r);
  if (!o) return { ok: !1, code: "UI_ACTION_SEQUENCE_INVALID", error: "click_sequence requires one to twenty element IDs." };
  let c = 0;
  for (const [d, h] of o.entries()) {
    const p = $u(i, h);
    if (!p) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: `Sequence target ${d + 1} is unavailable.`, result: { completedCount: c, failedIndex: d } };
    const b = Gv(p);
    if (b.ok === !1) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_OPERABLE", error: b.error, result: { completedCount: c, failedIndex: d } };
    c += 1;
  }
  return { ok: !0, result: { completedCount: c } };
}
function Ao(i, r, o, c, d) {
  const h = i.ownerDocument.defaultView?.MouseEvent ?? MouseEvent;
  i.dispatchEvent(new h(r, { bubbles: !0, cancelable: !0, clientX: o, clientY: c, buttons: d }));
}
function _o(i, r, o, c, d) {
  const h = i.ownerDocument.defaultView, p = h?.PointerEvent ?? h?.MouseEvent ?? MouseEvent;
  i.dispatchEvent(new p(r, { bubbles: !0, cancelable: !0, clientX: o, clientY: c, buttons: d }));
}
function x0(i, r) {
  const o = $u(i, r.elementId);
  if (!o) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No visible source element matches this elementId." };
  const c = r.deltaX === void 0 ? 0 : qr(r.deltaX, Ev), d = r.deltaY === void 0 ? 0 : qr(r.deltaY, Ev);
  if (c === null || d === null) return { ok: !1, code: "UI_ACTION_DRAG_INVALID", error: "drag_element coordinates must be finite and bounded." };
  const h = r.targetElementId === void 0 ? null : $u(i, r.targetElementId);
  if (r.targetElementId !== void 0 && !h) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No visible target element matches targetElementId." };
  if (!h && c === 0 && d === 0) return { ok: !1, code: "UI_ACTION_DRAG_TARGET_REQUIRED", error: "drag_element requires a target element or non-zero delta." };
  const p = o.getBoundingClientRect(), b = p.left + p.width / 2, C = p.top + p.height / 2, w = h?.getBoundingClientRect(), z = w ? w.left + w.width / 2 : b + c, v = w ? w.top + w.height / 2 : C + d, B = h ?? o;
  _o(o, "pointerdown", b, C, 1), Ao(o, "mousedown", b, C, 1);
  for (const D of [0.25, 0.5, 0.75]) {
    const T = b + (z - b) * D, q = C + (v - C) * D;
    _o(B, "pointermove", T, q, 1), Ao(B, "mousemove", T, q, 1);
  }
  return _o(B, "pointerup", z, v, 0), Ao(B, "mouseup", z, v, 0), { ok: !0, result: { dragged: !0, endX: z, endY: v } };
}
function M0(i, r) {
  const o = r.key === void 0 ? r.keys : [r.key];
  if (!Array.isArray(o) || o.length < 1 || o.length > qv || o.some((C) => typeof C != "string")) return { ok: !1, code: "UI_ACTION_KEY_INVALID", error: "press_key requires supported key names or single characters." };
  const c = o.map((C) => C.trim());
  if (c.some((C) => !(C.length === 1 || E0.has(C)))) return { ok: !1, code: "UI_ACTION_KEY_INVALID", error: "press_key requires supported key names or single characters." };
  const d = Mo(i).activeElement, h = r.elementId === void 0 ? d && Bv(i, d) && kl(d) ? d : null : $u(i, r.elementId);
  if (!h) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No focused visible element is available for press_key." };
  r.elementId !== void 0 && h.focus();
  const p = h.ownerDocument.defaultView?.KeyboardEvent ?? KeyboardEvent, b = { ctrlKey: r.ctrlKey === !0, metaKey: r.metaKey === !0, altKey: r.altKey === !0, shiftKey: r.shiftKey === !0 };
  for (const C of c)
    h.dispatchEvent(new p("keydown", { bubbles: !0, cancelable: !0, key: C, ...b })), h.dispatchEvent(new p("keyup", { bubbles: !0, cancelable: !0, key: C, ...b }));
  return { ok: !0, result: { pressedKeys: c } };
}
function Yv(i, r, o = !1) {
  const c = Ql(r) && typeof r.action == "string" ? r.action : "";
  if (c === "describe_dom") return { ok: !0, result: C0(i, o) };
  if (c === "read_state") return { ok: !0, result: { state: {} } };
  if (c === "click_element") {
    const d = Uo(i, Ql(r) ? r.elementId : null, o);
    if (!d) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No element matches this elementId." };
    const h = Gv(d);
    return h.ok === !0 ? { ok: !0, result: { clicked: !0 } } : { ok: !1, code: "UI_ACTION_ELEMENT_NOT_OPERABLE", error: h.error };
  }
  if (c === "type_text") {
    const d = Uo(i, Ql(r) ? r.elementId : null, o);
    if (!d) return { ok: !1, code: "UI_ACTION_ELEMENT_NOT_FOUND", error: "No element matches this elementId." };
    const h = R0(d, Ql(r) ? r.text : "", o);
    return h.ok === !0 ? { ok: !0, result: { typed: !0 } } : { ok: !1, code: "UI_ACTION_ELEMENT_NOT_OPERABLE", error: h.error };
  }
  return y0.has(c) && !o ? { ok: !1, code: "UI_ACTION_UNSUPPORTED_FOR_APP_CARD", error: `App cards do not support ${c}.` } : Ql(r) ? c === "scroll_element" ? U0(i, r) : c === "click_sequence" ? z0(i, r) : c === "drag_element" ? x0(i, r) : c === "press_key" ? M0(i, r) : { ok: !1, code: "UI_ACTION_UNKNOWN_ACTION", error: `Unknown UI action: ${c || "(missing)"}.` } : { ok: !1, code: "UI_ACTION_UNKNOWN_ACTION", error: `Unknown UI action: ${c || "(missing)"}.` };
}
var it = "hana.plugin.ui", rt = 1, j0 = "X-Hana-App-Surface-Session", H0 = "appSurfaceSession", Ju = {
  CONTEXT: "hana.input-panel.context",
  SUBMIT: "hana.input-panel.submit",
  PRESENTATION: "hana.input-panel.presentation"
}, Av = 64 * 1024, Xv = {
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
}, q0 = {
  CHANGED: "hana.app.storage.changed"
}, Qv = { OPEN: "hana.cards.open" }, xr = {
  GET_ACTIVE: "hana.sessions.get-active",
  SUBSCRIBE: "hana.sessions.subscribe-active",
  UNSUBSCRIBE: "hana.sessions.unsubscribe-active",
  FOCUS: "hana.sessions.focus"
}, _v = {
  ACTIVE_CHANGED: "hana.sessions.active-changed",
  ERROR: "hana.sessions.error"
}, Do = {
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
function ai(i) {
  if (typeof i != "string" || i.length === 0 || i.length > B0)
    return !1;
  for (let r = 0; r < i.length; r += 1) {
    const o = i.charCodeAt(r);
    if (o <= 31 || o === 127)
      return !1;
  }
  return !0;
}
function I0(i) {
  return !Tn(i) || !ai(i.viewToken) ? { ok: !1, error: "A chrome binding requires a host-minted view token." } : i.resync !== void 0 && typeof i.resync != "boolean" ? { ok: !1, error: "A chrome binding resync flag must be a boolean when present." } : { ok: !0, value: { viewToken: i.viewToken, ...i.resync === void 0 ? {} : { resync: i.resync } } };
}
function V0(i) {
  return !Tn(i) || !ai(i.challengeId) ? { ok: !1, error: "A chrome challenge requires a host-minted challenge id." } : { ok: !0, value: { challengeId: i.challengeId } };
}
function G0(i) {
  return Tn(i) ? typeof i.requestId != "string" || i.requestId === "" ? { ok: !1, error: "App chrome action identity requires a non-empty requestId." } : !Number.isSafeInteger(i.revision) || i.revision <= 0 ? { ok: !1, error: "App chrome action identity requires a positive revision." } : !Number.isSafeInteger(i.generation) || i.generation <= 0 ? { ok: !1, error: "App chrome action identity requires a positive generation." } : ai(i.viewToken) ? {
    ok: !0,
    value: {
      requestId: i.requestId,
      revision: i.revision,
      generation: i.generation,
      viewToken: i.viewToken
    }
  } : { ok: !1, error: "App chrome action identity requires the view token." } : { ok: !1, error: "App chrome action identity must be an object." };
}
function Y0(i) {
  if (!Tn(i))
    return { ok: !1, error: "App chrome action request must be an object." };
  const r = i.kind;
  if (r !== "action" && r !== "tab-select" && r !== "tab-close")
    return { ok: !1, error: 'App chrome action request kind must be "action", "tab-select" or "tab-close".' };
  const o = G0(i);
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
}, X0 = 256;
function Pu(i) {
  if (typeof i != "string" || i.length === 0 || i.length > X0 || i.trim().length === 0)
    return !1;
  for (let r = 0; r < i.length; r += 1) {
    const o = i.charCodeAt(r);
    if (o <= 31 || o === 127)
      return !1;
  }
  return !0;
}
function Ho(i, r) {
  const o = Reflect.ownKeys(i);
  if (o.length !== r.length)
    return !1;
  for (const c of o)
    if (typeof c != "string" || !r.includes(c))
      return !1;
  return !0;
}
function No(i) {
  return !Tn(i) || !Ho(i, ["viewKind", "revision", "state"]) ? { ok: !1, error: "App view-state snapshot must carry exactly viewKind, revision and state." } : i.viewKind !== "compact" && i.viewKind !== "detached" ? { ok: !1, error: 'App view-state snapshot kind must be "compact" or "detached".' } : !Number.isSafeInteger(i.revision) || i.revision < 0 ? { ok: !1, error: "App view-state snapshot revision must be a non-negative safe integer." } : i.state === void 0 ? { ok: !1, error: "App view-state snapshot requires a state object or an explicit null." } : i.revision === 0 && i.state !== null ? { ok: !1, error: "App view-state revision 0 only carries a null state." } : { ok: !0, value: { viewKind: i.viewKind, revision: i.revision, state: i.state } };
}
function wo(i) {
  return !Tn(i) || !Ho(i, ["viewToken", "bindingId", "registrationId", "snapshot"]) ? { ok: !1, error: "App view-state reply must echo exactly a view token, namespace binding id, registration id and snapshot." } : ai(i.viewToken) ? Pu(i.bindingId) ? Pu(i.registrationId) ? {
    ok: !0,
    value: { viewToken: i.viewToken, bindingId: i.bindingId, registrationId: i.registrationId, snapshot: i.snapshot }
  } : { ok: !1, error: "App view-state reply requires an opaque registration id." } : { ok: !1, error: "App view-state reply requires an opaque namespace binding id." } : { ok: !1, error: "App view-state reply requires the host-minted view token." };
}
function Zu(i, r) {
  return i.viewToken !== r.viewToken || i.bindingId !== r.bindingId ? !1 : r.registrationId === void 0 ? !0 : i.registrationId === r.registrationId;
}
function Nv(i) {
  return !Tn(i) || !Ho(i, ["viewToken", "bindingId", "registrationId", "released"]) ? { ok: !1, error: "App view-state release reply must echo exactly a view token, namespace binding id, registration id and a boolean released flag." } : ai(i.viewToken) ? Pu(i.bindingId) ? Pu(i.registrationId) ? typeof i.released != "boolean" ? { ok: !1, error: "App view-state release reply requires a boolean released flag." } : { ok: !0, value: { viewToken: i.viewToken, bindingId: i.bindingId, registrationId: i.registrationId, released: i.released } } : { ok: !1, error: "App view-state release reply requires an opaque registration id." } : { ok: !1, error: "App view-state release reply requires an opaque namespace binding id." } : { ok: !1, error: "App view-state release reply requires the host-minted view token." };
}
var Q0 = /^\/api\/apps\/([^/]+)\/ui(?:\/|$)/, K0 = /^\/api\/apps\/([^/]+)\/routes\/_runtime\/([^/]+)\/_surface\/([^/]+)\//;
function Mr(i) {
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
function qo(i) {
  if (typeof i != "string" || !i.startsWith("/api/apps/"))
    return null;
  const r = K0.exec(i);
  if (r) {
    const c = Mr(r[1]), d = Mr(r[2]), h = Mr(r[3]);
    return c === null || d === null || h === null ? null : { appId: c, kind: "runtime" };
  }
  const o = Q0.exec(i);
  if (o) {
    const c = Mr(o[1]);
    return c === null ? null : { appId: c, kind: "ui" };
  }
  return null;
}
var Z0 = 256;
function Kv(i) {
  if (i !== void 0)
    return typeof i != "string" || i.length === 0 || i.length > Z0 || i.includes("\0") || i.trim().length === 0 ? null : i;
}
var J0 = {
  CONTEXT: "hana.surface.context"
}, k0 = /* @__PURE__ */ new Set([
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
      code: Xv.BAD_MESSAGE,
      message: i
    }
  };
}
function ku(i) {
  if (!Tn(i))
    return Na("Plugin UI messages must be objects.");
  if (i.protocol !== it)
    return Na("Plugin UI message protocol is missing or invalid.");
  if (i.version !== rt)
    return {
      ok: !1,
      error: {
        code: Xv.UNSUPPORTED_VERSION,
        message: `Unsupported Plugin UI protocol version: ${String(i.version)}.`
      }
    };
  if (typeof i.kind != "string" || !k0.has(i.kind))
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
var F0 = [
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
], $0 = [
  "cards",
  "agentTypes",
  "configuration",
  "settingsTab",
  "page",
  "widget"
], P0 = [
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
], W0 = ["restricted", "full-access"];
new Set(F0);
new Set($0);
new Set(P0);
new Set(W0);
var eE = Object.values(De);
new Set(eE);
var Fu = class extends Error {
  reason;
  constructor(i, r) {
    super(r), this.name = "AppCurrentViewBindingError", this.reason = i;
  }
};
function tE() {
  return `chrome-doc:${Math.random().toString(36).slice(2)}${Date.now().toString(36)}`;
}
function nE(i) {
  return JSON.stringify([i.appId, i.cardInstanceId ?? null, i.instanceKey ?? null]);
}
function aE(i) {
  const r = tE();
  let o = null, c = !1, d, h = !0;
  const p = /* @__PURE__ */ new Set(), b = /* @__PURE__ */ new Set();
  let C = 0;
  const w = () => {
    C += 1;
  }, z = (V) => new Fu("unavailable", V), v = () => new Fu(
    "identity-changed",
    "The current App card identity changed while this view write waited."
  ), B = () => new Fu(
    "token-stale",
    "The held view token is no longer the current document."
  ), D = (V) => {
    p.delete(V), i.targetWindow.clearTimeout(V.timer), V.signal && V.onAbort && V.signal.removeEventListener("abort", V.onAbort);
  }, T = (V, ye) => {
    D(V), V.reject(ye);
  }, q = (V, ye) => {
    const oe = o !== V, ne = h;
    o = V, h = !0, (oe || !ne) && w();
    for (const Ve of [...p]) {
      if (D(Ve), Ve.identity !== void 0 && Ve.identity !== d) {
        Ve.reject(v());
        continue;
      }
      Ve.resolve(V);
    }
    if (b.size === 0) return;
    const he = { changed: oe, resync: ye }, et = C;
    for (const Ve of [...b]) {
      if (c || et !== C) return;
      b.has(Ve) && Ve.listener(he);
    }
  };
  return {
    handleHostMessage: (V) => {
      const ye = V.type === Zl.CHALLENGE, oe = V.type === Zl.BINDING;
      if (!ye && !oe) return !1;
      if (c) return !0;
      if (ye && V.kind === "event") {
        const ne = V0(V.payload);
        return ne.ok === !0 && (i.post({
          protocol: it,
          version: rt,
          kind: "event",
          type: Zl.ACK,
          payload: { challengeId: ne.value.challengeId, documentNonce: r }
        }), c || i.reannounceReady?.()), !0;
      }
      if (oe && V.kind === "event") {
        const ne = I0(V.payload);
        return ne.ok === !0 && q(ne.value.viewToken, ne.value.resync === !0), !0;
      }
      return !0;
    },
    applySurfaceContext: (V) => {
      if (c) return;
      if (V === null) {
        if (!h) return;
        h = !1, w();
        return;
      }
      const ye = nE(V);
      if (d !== ye) {
        if (d !== void 0) {
          for (const oe of [...p]) T(oe, v());
          o = null;
        }
        d = ye, w();
      }
    },
    currentToken() {
      return !c && h ? o : null;
    },
    waitForToken: (V, ye) => c ? Promise.reject(z("The current App card view binding was released.")) : ye?.aborted ? Promise.reject(z("The current App card view wait was aborted.")) : o && h ? Promise.resolve(o) : new Promise((oe, ne) => {
      const he = {
        resolve: oe,
        reject: ne,
        identity: d,
        timer: i.targetWindow.setTimeout(() => {
          D(he), ne(z("The host has not bound this App card view; the current view is unavailable here."));
        }, V)
      };
      ye && (he.signal = ye, he.onAbort = () => T(he, z("The current App card view wait was aborted.")), ye.addEventListener("abort", he.onAbort)), p.add(he);
    }),
    assertCurrentToken: (V) => {
      if (c) throw z("The current App card view binding was released.");
      if (!h || !o)
        throw z("The current App card view is not writable here right now.");
      if (o !== V) throw B();
    },
    onBinding(V) {
      if (c) return () => {
      };
      const ye = { listener: V };
      return b.add(ye), () => {
        b.delete(ye);
      };
    },
    dispose() {
      if (!c) {
        c = !0, o = null, h = !1;
        for (const V of [...p])
          T(V, z("The current App card view binding was released."));
        p.clear(), b.clear();
      }
    }
  };
}
function lE(i, r) {
  let o = null, c = 0;
  const d = (p) => {
    const b = i();
    b && r({
      protocol: it,
      version: rt,
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
        const D = p.scrollTop > 0;
        D !== o.scrolled && (o.scrolled = D, d(D));
      };
      p.addEventListener("scroll", z, { passive: !0 });
      const v = C?.ResizeObserver, B = v ? new v(z) : null;
      return B?.observe(p), w.detach = () => {
        p.removeEventListener("scroll", z), B?.disconnect();
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
function uE(i) {
  const r = { requestId: i.requestId, revision: i.revision };
  return i.kind === "action" ? { ...r, kind: "action", actionId: i.actionId } : i.kind === "tab-select" ? { ...r, kind: "tab-select", tabId: i.tabId } : { ...r, kind: "tab-close", tabId: i.tabId };
}
var iE = 1e4;
function rE(i) {
  const r = i.requestTimeoutMs ?? iE, o = i.currentView;
  let c = !1, d = null;
  const h = new AbortController(), p = lE(() => c ? null : o.currentToken(), i.post), b = o.onBinding((x) => {
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
  ), v = (x) => x instanceof Fu ? x.reason === "unavailable" ? w() : C() : x, B = (x, K) => {
    i.post({
      protocol: it,
      version: rt,
      id: x.id,
      type: x.type,
      ...K
    });
  }, D = (x) => {
    if (x.type !== Zl.ACTION) return !1;
    if (c) return !0;
    if (x.kind !== "request") return !1;
    const K = Y0(x.payload);
    if (K.ok === !1)
      return B(x, { kind: "error", error: { code: Fn.BAD_PAYLOAD, message: K.error } }), !0;
    const $ = K.value, Q = {
      requestId: $.requestId,
      revision: $.revision,
      generation: $.generation,
      viewToken: $.viewToken
    }, V = d;
    if (!V)
      return B(x, {
        kind: "error",
        payload: Q,
        error: { code: Fn.ACTION_UNHANDLED, message: "This App has no chrome action handler." }
      }), !0;
    if ($.viewToken !== o.currentToken())
      return B(x, {
        kind: "error",
        payload: Q,
        error: { code: Fn.VIEW_STALE, message: "This chrome action belongs to a replaced view." }
      }), !0;
    const ye = () => !c && d === V && $.viewToken === o.currentToken();
    return Promise.resolve().then(async () => {
      if (!ye()) {
        B(x, {
          kind: "error",
          payload: Q,
          error: { code: Fn.VIEW_STALE, message: "This chrome action belongs to a replaced view." }
        });
        return;
      }
      let oe;
      try {
        oe = await V.fn(uE($));
      } catch (ne) {
        if (!ye()) return;
        B(x, {
          kind: "error",
          payload: Q,
          error: {
            code: Fn.ACTION_FAILED,
            message: ne instanceof Error ? ne.message : "The App chrome action handler failed."
          }
        });
        return;
      }
      ye() && B(x, {
        kind: "response",
        payload: {
          ...Q,
          status: oe && oe.status === "rejected" ? "rejected" : "handled",
          ...oe && typeof oe.message == "string" && oe.message ? { message: oe.message } : {}
        }
      });
    }), !0;
  }, T = () => p.dispose();
  i.targetWindow.addEventListener("pagehide", T);
  const q = (x) => {
    if (c)
      throw Object.assign(new Error(`The App chrome view was released; ${x} is unavailable.`), { code: Fn.UNAVAILABLE });
  };
  return {
    api: {
      set(x, K) {
        const $ = K?.timeoutMs ?? r;
        return o.waitForToken($, h.signal).then(
          (Q) => {
            q("hana.chrome.set");
            try {
              o.assertCurrentToken(Q);
            } catch (V) {
              throw v(V);
            }
            return i.request(Zl.SET, { description: x, viewToken: Q }, { timeoutMs: $ });
          },
          (Q) => {
            throw c ? z() : v(Q);
          }
        );
      },
      onAction(x) {
        if (q("hana.chrome.onAction"), typeof x != "function") throw new TypeError("hana.chrome.onAction requires a handler.");
        const K = { fn: x };
        return d = K, () => {
          d === K && (d = null);
        };
      },
      registerScrollSource(x) {
        return q("hana.chrome.registerScrollSource"), p.register(x);
      }
    },
    handleHostMessage: D,
    dispose() {
      c || (c = !0, h.abort(), i.targetWindow.removeEventListener("pagehide", T), b(), d = null, p.dispose());
    }
  };
}
var cE = 16, sE = 4096, oE = 24 * 1024, ht = class extends Error {
  code;
  constructor(i, r) {
    super(r), this.name = "AppViewStateError", this.code = i;
  }
}, fE = new TextEncoder();
function dE(i) {
  return fE.encode(i).length;
}
function hE(i) {
  if (typeof i != "object" || i === null || Array.isArray(i)) return !1;
  const r = Object.getPrototypeOf(i);
  return r === Object.prototype || r === null;
}
function mE(i) {
  const r = Number(i);
  return !Number.isInteger(r) || r < 0 || String(r) !== i ? null : r;
}
function Zv(i) {
  return i === "input" ? "VIEW_STATE_INVALID_INPUT" : "VIEW_STATE_INVALID_STORAGE";
}
function vE(i, r) {
  const o = Zv(r), c = /* @__PURE__ */ new Set();
  let d = 0;
  const h = (p, b) => {
    if (d += 1, d > sE)
      throw new ht(o, "App view state contains too many values.");
    if (b > cE)
      throw new ht(o, "App view state is nested too deeply.");
    if (p === null) return null;
    const C = typeof p;
    if (C === "string" || C === "boolean") return p;
    if (C === "number") {
      if (!Number.isFinite(p))
        throw new ht(o, "App view state numbers must be finite.");
      return p;
    }
    if (C !== "object")
      throw new ht(o, "App view state must contain only JSON values.");
    const w = p;
    if (c.has(w))
      throw new ht(o, "App view state must not contain cycles.");
    const z = Object.getPrototypeOf(w);
    if (Array.isArray(w)) {
      if (z !== Array.prototype)
        throw new ht(o, "App view state must contain only plain arrays.");
      c.add(w);
      const B = w.length;
      for (const T of Reflect.ownKeys(w)) {
        if (typeof T != "string")
          throw new ht(o, "App view state must not contain symbol keys.");
        if (T === "length") {
          const K = Object.getOwnPropertyDescriptor(w, "length");
          if (K.enumerable || K.get || K.set)
            throw new ht(o, "App view state arrays must expose a plain length.");
          continue;
        }
        const q = mE(T);
        if (q === null || q >= B)
          throw new ht(o, "App view state arrays must not carry extra keys.");
        const x = Object.getOwnPropertyDescriptor(w, T);
        if (!x.enumerable || x.get || x.set)
          throw new ht(o, "App view state arrays must index plain values.");
      }
      const D = [];
      for (let T = 0; T < B; T++) {
        const q = Object.getOwnPropertyDescriptor(w, String(T));
        if (!q)
          throw new ht(o, "App view state must not contain sparse arrays.");
        D.push(h(q.value, b + 1));
      }
      return c.delete(w), D;
    }
    if (z !== Object.prototype && z !== null)
      throw new ht(o, "App view state must contain only plain objects.");
    c.add(w);
    const v = /* @__PURE__ */ Object.create(null);
    for (const B of Reflect.ownKeys(w)) {
      if (typeof B != "string")
        throw new ht(o, "App view state must not contain symbol keys.");
      const D = Object.getOwnPropertyDescriptor(w, B);
      if (!D.enumerable)
        throw new ht(o, "App view state must not contain non-enumerable fields.");
      if (D.get || D.set)
        throw new ht(o, "App view state must not contain accessors.");
      v[B] = h(D.value, b + 1);
    }
    return c.delete(w), v;
  };
  return h(i, 0);
}
function pE(i, r) {
  if (i === null) return null;
  if (!hE(i))
    throw new ht(
      Zv(r),
      "App view state must be a JSON object or null."
    );
  return vE(i, r);
}
function gE(i, r) {
  if (i === null) return null;
  const o = JSON.stringify(i);
  if (dE(o) > oE)
    throw new ht(
      "VIEW_STATE_TOO_LARGE",
      "App view state exceeds the size budget."
    );
  return JSON.parse(o);
}
function zo(i) {
  return gE(pE(i, "input"));
}
var me = {
  UNAVAILABLE: "VIEW_STATE_UNAVAILABLE",
  VIEW_STALE: "VIEW_STATE_VIEW_STALE",
  RELEASED: "VIEW_STATE_RELEASED",
  INVALID_INPUT: "VIEW_STATE_INVALID_INPUT",
  BAD_RESPONSE: "VIEW_STATE_BAD_RESPONSE"
}, yE = class extends Error {
  code;
  constructor(i, r) {
    super(r), this.name = "AppViewStateRequestError", this.code = i;
  }
}, EE = 1e4;
function ve(i, r) {
  return new yE(i, r);
}
function bE(i) {
  return {
    viewKind: i.viewKind,
    revision: i.revision,
    state: zo(i.state)
  };
}
function SE(i) {
  const r = i.requestTimeoutMs ?? EE;
  let o = !1, c = 0, d = null;
  const h = /* @__PURE__ */ new Map();
  let p = null, b = null, C = !1;
  const w = (G) => G instanceof Fu ? G.reason === "unavailable" ? ve(me.UNAVAILABLE, "The App card view is not writable here right now.") : ve(me.VIEW_STALE, "The App card view this operation was bound to is no longer current.") : G, z = (G, I) => {
    !G || G.terminated !== null || (G.terminated = I, G.lifetime.abort());
  }, v = (G) => {
    z(d, G), d = null;
    for (const I of h.values()) I.abort.abort();
    h.clear();
  }, B = (G) => {
    if (o || G === null) return;
    if (G.slot !== "card") {
      v("namespace-changed"), b = null, C = !0, p = null;
      return;
    }
    const I = JSON.stringify([G.appId, G.cardInstanceId, G.instanceKey ?? null]), J = G.viewState?.bindingId ?? null;
    (C && b !== I || J !== null && p !== null && J !== p) && v("namespace-changed"), b = I, C = !0, J !== null && (p = J);
  }, D = (G) => {
    if (!o && G.changed) {
      z(d, "document-changed"), d = null;
      for (const I of h.values())
        I.tokenCaptured && I.abort.abort();
    }
  }, T = i.subscribeContext(B), q = i.currentView.onBinding(D), x = (G) => i.currentView.currentToken() === G, K = (G) => {
    try {
      i.currentView.assertCurrentToken(G);
    } catch (I) {
      throw w(I);
    }
  }, $ = (G) => {
    const I = i.getContext();
    if (!I || I.slot !== "card")
      throw ve(me.UNAVAILABLE, "The App view-state namespace is not available on this surface.");
    const J = I.viewState;
    if (!J)
      throw ve(me.UNAVAILABLE, "The App view-state namespace is not available here right now.");
    if (J.bindingId !== G.bindingId || J.viewKind !== G.viewKind)
      throw ve(me.VIEW_STALE, "This view-state handle belongs to a namespace that is no longer current.");
    if (J.available !== !0)
      throw ve(me.UNAVAILABLE, "The App view-state namespace is temporarily unavailable.");
  }, Q = (G) => G === "document-changed" || G === "namespace-changed" ? ve(me.VIEW_STALE, "This view-state handle's view changed before the operation could be adopted.") : ve(me.RELEASED, "This view-state handle has been released."), V = (G) => {
    if (o)
      throw ve(me.RELEASED, "The App view-state controller was released.");
    if (G.terminated !== null) throw Q(G.terminated);
    if (G.lifetime.signal.aborted)
      throw ve(me.RELEASED, "This view-state handle has been released.");
    if (d !== G)
      throw ve(me.VIEW_STALE, "This view-state handle is no longer the current registration.");
    return K(G.viewToken), $(G), G.viewToken;
  }, ye = (G, I) => {
    if (o)
      throw ve(me.RELEASED, "The App view-state controller was released.");
    if (G.terminated !== null) throw Q(G.terminated);
    if (G.lifetime.signal.aborted)
      throw ve(me.RELEASED, "This view-state handle has been released.");
    if (!x(I))
      throw ve(me.VIEW_STALE, "The document changed before this view-state reply arrived.");
    const J = i.getContext(), Z = J?.viewState;
    if (!J || J.slot !== "card" || !Z || Z.bindingId !== G.bindingId || Z.viewKind !== G.viewKind)
      throw ve(me.VIEW_STALE, "The namespace changed before this view-state reply arrived.");
    if (Z.available !== !0)
      throw ve(me.UNAVAILABLE, "The App view-state namespace paused before this reply arrived.");
  }, oe = async (G, I, J, Z) => {
    try {
      return await i.request(G, I, { timeoutMs: J });
    } catch (re) {
      if (Z !== null) {
        if (Z.terminated !== null) throw Q(Z.terminated);
        if (Z.lifetime.signal.aborted)
          throw ve(me.RELEASED, "This view-state handle has been released.");
      }
      throw o ? ve(me.RELEASED, "The App view-state controller was released.") : re;
    }
  }, ne = (G, I) => {
    if (I.viewKind !== G)
      throw ve(me.BAD_RESPONSE, "The view-state reply carried a different view kind than the operation targeted.");
    let J;
    try {
      J = zo(I.state);
    } catch (Z) {
      throw Z instanceof ht ? ve(me.BAD_RESPONSE, "The view-state reply carried a state outside the shared JSON budget.") : Z;
    }
    return { viewKind: G, revision: I.revision, state: J };
  }, he = async (G, I) => {
    const J = I?.timeoutMs ?? r, Z = V(G), re = await oe(Ku.GET, {
      viewToken: Z,
      bindingId: G.bindingId,
      registrationId: G.registrationId
    }, J, G);
    ye(G, Z);
    const se = wo(re);
    if (se.ok === !1)
      throw ve(me.BAD_RESPONSE, se.error);
    if (!Zu(se.value, {
      viewToken: Z,
      bindingId: G.bindingId,
      registrationId: G.registrationId
    }))
      throw ve(me.VIEW_STALE, "This view-state reply answered a different view than the one this handle targets.");
    const Re = No(se.value.snapshot);
    if (Re.ok === !1)
      throw ve(me.BAD_RESPONSE, Re.error);
    return ne(G.viewKind, Re.value);
  }, et = async (G, I, J) => {
    const Z = J?.timeoutMs ?? r, re = TE(I), se = zo(I.state), Re = V(G), Me = await oe(Ku.SET, {
      viewToken: Re,
      bindingId: G.bindingId,
      registrationId: G.registrationId,
      expectedRevision: re,
      state: se
    }, Z, G);
    ye(G, Re);
    const ge = wo(Me);
    if (ge.ok === !1)
      throw ve(me.BAD_RESPONSE, ge.error);
    if (!Zu(ge.value, {
      viewToken: Re,
      bindingId: G.bindingId,
      registrationId: G.registrationId
    }))
      throw ve(me.VIEW_STALE, "This view-state reply answered a different view than the one this handle targets.");
    const E = No(ge.value.snapshot);
    if (E.ok === !1)
      throw ve(me.BAD_RESPONSE, E.error);
    return ne(G.viewKind, E.value);
  }, Ve = async (G, I, J) => {
    if (!x(G)) return;
    const Z = i.getContext();
    if (!(!Z || Z.slot !== "card" || Z.viewState?.bindingId !== I))
      try {
        const re = await i.request(Ku.RELEASE, { viewToken: G, bindingId: I, registrationId: J }, { timeoutMs: r }), se = Nv(re);
        (se.ok === !1 || !Zu(se.value, { viewToken: G, bindingId: I, registrationId: J })) && console.error("[hana] App view-state cleanup reply did not confirm the released registration.");
      } catch (re) {
        console.error("[hana] failed to release a superseded App view-state registration:", re instanceof Error ? re.message : re);
      }
  }, tt = (G, I) => (G.releasePromise || (G.releasePromise = (async () => {
    const J = I?.timeoutMs ?? r;
    z(G, "released"), d === G && (d = null);
    const Z = i.getContext(), re = Z?.viewState;
    if (!(x(G.viewToken) && Z?.slot === "card" && !!re && re.bindingId === G.bindingId)) return { released: !1 };
    const Re = await i.request(Ku.RELEASE, {
      viewToken: G.viewToken,
      bindingId: G.bindingId,
      registrationId: G.registrationId
    }, { timeoutMs: J }), Me = Nv(Re);
    if (Me.ok === !1)
      throw ve(me.BAD_RESPONSE, Me.error);
    if (!Zu(Me.value, {
      viewToken: G.viewToken,
      bindingId: G.bindingId,
      registrationId: G.registrationId
    }))
      throw ve(me.VIEW_STALE, "This view-state release reply answered a different view than the one this handle targets.");
    const ge = i.getContext();
    if (!x(G.viewToken) || ge?.slot !== "card" || ge.viewState?.bindingId !== G.bindingId || ge.viewState?.viewKind !== G.viewKind)
      throw ve(me.VIEW_STALE, "The namespace changed before this view-state release was confirmed.");
    return { released: Me.value.released };
  })()), G.releasePromise), ke = (G, I, J, Z, re) => {
    const se = new AbortController(), Re = {
      viewToken: G,
      bindingId: I,
      viewKind: J,
      registrationId: Z,
      lifetime: se,
      initial: re,
      releasePromise: null,
      terminated: null
    };
    return Re.handle = {
      get initial() {
        return bE(Re.initial);
      },
      signal: se.signal,
      get: (Me) => he(Re, Me),
      set: (Me, ge) => et(Re, Me, ge),
      release: (Me) => tt(Re, Me)
    }, Re;
  };
  return {
    api: { enable: async (G) => {
      const I = G?.timeoutMs ?? r;
      if (o) throw ve(me.RELEASED, "The App view-state controller was released.");
      const J = i.getContext();
      if (J && J.slot !== "card")
        throw ve(me.UNAVAILABLE, "View-state recovery is only available on an App card surface.");
      const Z = J?.viewState?.bindingId ?? null, re = ++c;
      v("superseded");
      const se = new AbortController(), Re = { abort: se, tokenCaptured: !1 };
      h.set(re, Re);
      let Me = null;
      try {
        let ge;
        try {
          ge = await i.currentView.waitForToken(I, se.signal);
        } catch (fe) {
          throw o ? ve(me.RELEASED, "The App view-state controller was released.") : se.signal.aborted ? ve(me.VIEW_STALE, "A newer view-state enable replaced this one before it was bound.") : w(fe);
        }
        if (Re.tokenCaptured = !0, o) throw ve(me.RELEASED, "The App view-state controller was released.");
        if (re !== c || se.signal.aborted)
          throw ve(me.VIEW_STALE, "A newer view-state enable replaced this one before it was bound.");
        K(ge);
        const E = i.getContext(), Y = E?.viewState;
        if (!E || E.slot !== "card" || !Y || Y.available !== !0)
          throw ve(me.UNAVAILABLE, "The App view-state namespace is not available here right now.");
        if (Z !== null && Z !== Y.bindingId)
          throw ve(me.VIEW_STALE, "The App view-state namespace changed before this enable was sent.");
        K(ge);
        const ae = await oe(Ku.ENABLE, {
          viewToken: ge,
          bindingId: Y.bindingId
        }, I, null), W = wo(ae);
        if (W.ok === !1)
          throw ve(me.BAD_RESPONSE, W.error);
        if (!Zu(W.value, { viewToken: ge, bindingId: Y.bindingId }))
          throw ve(me.VIEW_STALE, "This view-state enable reply answered a different view than the one that was enabled.");
        if (Me = { token: ge, bindingId: Y.bindingId, registrationId: W.value.registrationId }, o) throw ve(me.RELEASED, "The App view-state controller was released.");
        if (re !== c || se.signal.aborted || !h.has(re))
          throw ve(me.VIEW_STALE, "This view-state enable was voided before its reply arrived.");
        if (!x(ge))
          throw ve(me.VIEW_STALE, "The document changed before this view-state enable reply arrived.");
        const Ee = i.getContext();
        if (!Ee || Ee.slot !== "card" || Ee.viewState?.bindingId !== Y.bindingId || Ee.viewState?.viewKind !== Y.viewKind)
          throw ve(me.VIEW_STALE, "The namespace changed before this view-state enable reply arrived.");
        if (Ee.viewState?.available !== !0)
          throw ve(me.UNAVAILABLE, "The App view-state namespace paused before this enable was confirmed.");
        const be = No(W.value.snapshot);
        if (be.ok === !1)
          throw ve(me.BAD_RESPONSE, be.error);
        const we = ne(Y.viewKind, be.value), ee = ke(ge, Y.bindingId, Y.viewKind, W.value.registrationId, we);
        return d = ee, Me = null, ee.handle;
      } catch (ge) {
        throw Me !== null && await Ve(Me.token, Me.bindingId, Me.registrationId), ge;
      } finally {
        h.delete(re);
      }
    } },
    dispose() {
      if (!o) {
        o = !0, c += 1, z(d, "disposed"), d = null;
        for (const G of h.values()) G.abort.abort();
        h.clear(), T(), q();
      }
    }
  };
}
function TE(i) {
  if (typeof i != "object" || i === null)
    throw ve(me.INVALID_INPUT, "View-state set requires an object with an expected revision and a state.");
  const r = i.expectedRevision;
  if (!Number.isSafeInteger(r) || r < 0)
    throw ve(me.INVALID_INPUT, "View-state set requires a non-negative safe-integer expected revision.");
  return r;
}
var Jv = /* @__PURE__ */ new WeakMap();
function kv(i, r) {
  Jv.set(i, r);
}
function Fv(i) {
  const r = Jv.get(i);
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
  }, c = JSON.stringify(o(i, 0));
  if (new TextEncoder().encode(c).byteLength > Av)
    throw new Error(`Input panel JSON exceeds ${Av} bytes.`);
  return JSON.parse(c);
}
function $v(i) {
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
function jr(i) {
  return { ...i, data: Wu(i.data), requestedSchema: Wu(i.requestedSchema), presentation: { ...i.presentation } };
}
function AE(i) {
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
function _E(i, r) {
  if (!Jl(i) || !Jl(i.presentation) || !Number.isSafeInteger(i.presentationRevision)) throw new Error("The input panel presentation response is invalid.");
  const o = $v({ ...r, presentation: i.presentation, presentationRevision: i.presentationRevision });
  return { presentation: o.presentation, presentationRevision: o.presentationRevision };
}
function NE(i) {
  let r = null, o = 0, c = null, d = 0;
  const h = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Set(), b = () => {
    for (const D of p) D(r ? jr(r) : null);
  }, C = () => {
    r = null, o++;
    for (const D of h.values())
      clearTimeout(D.timeout), D.reject(new Error("The input panel binding was replaced."));
    h.clear(), b();
  }, w = (D) => {
    for (const T of h.values())
      clearTimeout(T.timeout), T.reject(new Error(D));
    h.clear();
  }, z = (D, T, q) => i({
    protocol: it,
    version: rt,
    id: D.id,
    kind: "error",
    type: D.type,
    error: { code: T, message: q }
  });
  function v(D) {
    if (D.kind === "event" && D.type === Ju.CONTEXT) {
      if (D.payload === null) C();
      else {
        let Q;
        try {
          Q = $v(D.payload);
        } catch (ye) {
          return C(), console.warn("[hana] invalid input panel context:", ye), !0;
        }
        const V = r?.panelId === Q.panelId && r.appId === Q.appId && r.sessionId === Q.sessionId && r.confirmId === Q.confirmId && r.status === Q.status && r.instanceId === Q.instanceId && r.revision === Q.revision;
        if (V && r && Q.presentationRevision < r.presentationRevision) return !0;
        V || w("The input panel binding was replaced."), r = Q, V || o++, b();
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
          const V = _E(D.payload, r);
          r && V.presentationRevision >= r.presentationRevision && (r = { ...r, ...V }, b()), Q.resolve(V);
        } catch (V) {
          Q.reject(V instanceof Error ? V : new Error("The input panel presentation response is invalid."));
        }
      return !0;
    }
    if (D.kind !== "request" || D.type !== Ju.SUBMIT) return !1;
    if (!D.id) return !0;
    const T = D.payload, q = r;
    if (!Jl(T) || !q || q.status !== "pending" || !q.confirmId || T.panelId !== q.panelId || T.instanceId !== q.instanceId || T.revision !== q.revision)
      return z(D, "INPUT_PANEL_STALE", "This request does not match the active input panel question."), !0;
    const x = c;
    if (!x && q.requestedSchema !== null)
      return z(D, "INPUT_PANEL_SUBMIT_UNHANDLED", "Register hana.inputPanel.onSubmit to provide this question’s answer."), !0;
    const K = o, $ = {
      panelId: q.panelId,
      instanceId: q.instanceId,
      revision: q.revision
    };
    return Promise.resolve().then(() => x ? x(jr(q)) : null).then((Q) => {
      if (o !== K) {
        z(D, "INPUT_PANEL_STALE", "The input panel changed before its answer was ready.");
        return;
      }
      i({
        protocol: it,
        version: rt,
        id: D.id,
        kind: "response",
        type: D.type,
        payload: { ...$, value: Wu(Q) }
      });
    }).catch((Q) => {
      z(D, "INPUT_PANEL_SUBMIT_FAILED", Q instanceof Error ? Q.message : "The input panel could not provide an answer.");
    }), !0;
  }
  return { api: {
    getContext: () => r ? jr(r) : null,
    onContextChanged(D) {
      return p.add(D), D(r ? jr(r) : null), () => {
        p.delete(D);
      };
    },
    onSubmit(D) {
      if (typeof D != "function") throw new TypeError("hana.inputPanel.onSubmit requires a function.");
      return c = D, () => {
        c === D && (c = null);
      };
    },
    async setPresentation(D) {
      const T = r, q = AE(D);
      if (!T) throw new Error("The input panel is not ready.");
      const x = o, K = `input-panel-presentation:${T.panelId}:${T.instanceId}:${Date.now().toString(36)}:${++d}`;
      return new Promise(($, Q) => {
        const V = setTimeout(() => {
          h.delete(K), Q(new Error("The input panel presentation request timed out."));
        }, 1e4);
        h.set(K, { generation: x, resolve: $, reject: Q, timeout: V });
        const ye = (oe) => {
          const ne = h.get(K);
          ne && (h.delete(K), clearTimeout(ne.timeout), ne.reject(oe instanceof Error ? oe : new Error("The input panel presentation request could not be delivered.")));
        };
        try {
          i({
            protocol: it,
            version: rt,
            id: K,
            kind: "request",
            type: Ju.PRESENTATION,
            payload: { panelId: T.panelId, instanceId: T.instanceId, revision: T.revision, presentationRevision: T.presentationRevision, presentation: q }
          }, ye);
        } catch (oe) {
          ye(oe);
        }
        if (o !== x) {
          const oe = h.get(K);
          oe && (h.delete(K), clearTimeout(oe.timeout), oe.reject(new Error("The input panel binding was replaced.")));
        }
      });
    }
  }, handleMessage: v, clear: C };
}
var Oa = class extends Error {
  name = "HanaPluginError";
  code;
  details;
  constructor(i) {
    super(i.message), this.code = i.code, this.details = i.details;
  }
}, wv = 0, li = 60, wE = 240;
function OE() {
  return typeof crypto < "u" && typeof crypto.randomUUID == "function" ? crypto.randomUUID() : (wv += 1, `hana-plugin-${Date.now()}-${wv}`);
}
function CE() {
  if (typeof window > "u")
    throw new Error("@hana/plugin-sdk requires a browser iframe window.");
  return window;
}
var Ov = "data-hana-theme-style";
async function RE(i, r) {
  const o = await fetch(r, { credentials: "same-origin" });
  if (!o.ok)
    throw new Error(`hana theme stylesheet request failed with ${o.status}`);
  const c = await o.text(), d = i.head ?? i.documentElement;
  if (!d) throw new Error("hana theme stylesheet has nowhere to attach");
  let h = i.querySelector(`style[${Ov}]`);
  h || (h = i.createElement("style"), h.setAttribute(Ov, "")), h.textContent = c, d.appendChild(h);
}
function UE(i) {
  if (typeof i != "object" || i === null) return !1;
  const r = i;
  return ["light", "dark"].every((o) => {
    const c = r[o];
    return typeof c == "object" && c !== null && typeof c.theme == "string" && typeof c.cssUrl == "string";
  });
}
function DE(i) {
  const r = new URLSearchParams(i.location.search), o = r.get("hana-theme-appearance"), c = r.get("hana-palette-light-theme"), d = r.get("hana-palette-light-css"), h = r.get("hana-palette-dark-theme"), p = r.get("hana-palette-dark-css");
  return {
    theme: r.get("hana-theme") ?? void 0,
    cssUrl: r.get("hana-css") ?? void 0,
    appearance: o === "light" || o === "dark" ? o : void 0,
    palettes: c && d && h && p ? { light: { theme: c, cssUrl: d }, dark: { theme: h, cssUrl: p } } : void 0
  };
}
function Pv(i, r = li) {
  return typeof i != "number" || !Number.isFinite(i) ? r : Math.max(0, Math.min(wE, Math.round(i)));
}
function Wv({
  visible: i,
  maxFrameRate: r,
  slot: o,
  reason: c
}) {
  const d = i ? Pv(r) : 0, h = i && d > 0;
  return {
    visible: i,
    active: h,
    maxFrameRate: h ? d : 0,
    motion: h ? "full" : "paused",
    ...o === "page" || o === "widget" || o === "card" || o === "settings" || o === "function-panel" || o === "slot" ? { slot: o } : {},
    ...c ? { reason: c } : {}
  };
}
function zE(i) {
  const r = new URLSearchParams(i.location.search), o = r.get("hana-visible"), c = !(o === "0" || o === "false"), d = r.get("hana-max-fps"), h = d === null ? NaN : Number(d), p = Number.isFinite(h) ? h : li;
  return Wv({
    visible: c,
    maxFrameRate: p,
    reason: "initial"
  });
}
function xE(i, r) {
  if (typeof i != "object" || i === null) return null;
  const o = i, c = typeof o.visible == "boolean" ? o.visible : r.visible, d = Pv(
    o.maxFrameRate,
    r.maxFrameRate > 0 ? r.maxFrameRate : li
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
function ME(i, r) {
  if (typeof i != "object" || i === null) return null;
  const o = i.visible;
  return typeof o != "boolean" ? null : Wv({
    visible: o,
    maxFrameRate: o && r.maxFrameRate > 0 ? r.maxFrameRate : li,
    slot: r.slot,
    reason: "legacy-visibility"
  });
}
function jE(i, r) {
  return i.visible === r.visible && i.active === r.active && i.maxFrameRate === r.maxFrameRate && i.motion === r.motion && i.slot === r.slot && i.reason === r.reason;
}
function Oo(i) {
  return {
    width: { ...i.width },
    height: { ...i.height }
  };
}
function Cv(i) {
  if (typeof i != "object" || i === null) return null;
  const r = i;
  return r.mode === "fixed" ? typeof r.value != "number" || !Number.isFinite(r.value) ? null : { mode: "fixed", value: Math.round(r.value) } : r.mode === "flexible" ? typeof r.max != "number" || !Number.isFinite(r.max) ? null : { mode: "flexible", max: Math.round(r.max) } : r.mode === "unbounded" ? { mode: "unbounded" } : null;
}
function HE(i) {
  if (typeof i != "object" || i === null) return null;
  const r = i, o = Cv(r.width), c = Cv(r.height);
  return !o || !c ? null : { width: o, height: c };
}
function Rv(i) {
  if (i === null) return null;
  if (typeof i == "string") return i;
}
function qE(i) {
  if (typeof i != "object" || i === null || Array.isArray(i)) return;
  const r = i;
  if (Pu(r.bindingId) && !(r.viewKind !== "compact" && r.viewKind !== "detached") && typeof r.available == "boolean")
    return { bindingId: r.bindingId, viewKind: r.viewKind, available: r.available };
}
function LE(i) {
  if (typeof i != "object" || i === null || Array.isArray(i)) return null;
  const r = i, o = typeof r.appId == "string" && r.appId.trim() ? r.appId.trim() : null, c = r.slot, d = r.cardInstanceId;
  if (!o || c !== "card" && c !== "function-panel" && c !== "settings" && c !== "slot" && c !== "input-panel") return null;
  const h = Rv(r.embeddedSessionId), p = Rv(r.originSessionId), b = Kv(r.instanceKey);
  if (b === null) return null;
  const C = qE(r.viewState), w = typeof d == "string" && !!d.trim();
  if (b !== void 0 && !w) return null;
  const z = {};
  return h !== void 0 && (z.embeddedSessionId = h), p !== void 0 && (z.originSessionId = p), b !== void 0 && (z.instanceKey = b), C !== void 0 && (z.viewState = C), c === "settings" || c === "input-panel" ? d === null ? { appId: o, slot: c, cardInstanceId: null, ...z } : null : w ? { appId: o, slot: c, cardInstanceId: d.trim(), ...z } : c !== "card" || d !== null || typeof r.embeddedSessionId != "string" || !r.embeddedSessionId.trim() ? null : { appId: o, slot: c, cardInstanceId: null, ...z };
}
function Co(i) {
  return {
    ...i,
    ...i.viewState ? { viewState: { ...i.viewState } } : {}
  };
}
function Uv(i) {
  if (typeof i != "object" || i === null || Array.isArray(i)) return null;
  const r = i, o = typeof r.sessionId == "string" && r.sessionId.trim() ? r.sessionId : null, c = typeof r.sessionPath == "string" && r.sessionPath ? r.sessionPath : null;
  return !o || !c || r.title !== null && typeof r.title != "string" || r.agentId !== null && typeof r.agentId != "string" ? null : {
    sessionId: o,
    sessionPath: c,
    title: r.title,
    agentId: r.agentId
  };
}
function BE(i) {
  if (typeof i != "object" || i === null || Array.isArray(i)) return null;
  const r = i, o = r.previous === null ? null : Uv(r.previous), c = r.current === null ? null : Uv(r.current);
  return r.previous !== null && o === null || r.current !== null && c === null || typeof r.timestamp != "number" || !Number.isFinite(r.timestamp) ? null : { previous: o, current: c, timestamp: r.timestamp };
}
function IE(i) {
  if (typeof i != "object" || i === null || Array.isArray(i)) return null;
  const r = i;
  return typeof r.code != "string" || !r.code.trim() || typeof r.message != "string" || !r.message.trim() ? null : new Oa({ code: r.code, message: r.message });
}
function VE(i) {
  return typeof i == "string" ? { url: i } : i;
}
function GE(i) {
  return typeof i == "string" ? { text: i } : i;
}
function ep(i) {
  const r = qo(i.location.pathname || "");
  if (!r)
    throw new Error("App asset/API URL helper requires an App surface route under /api/apps/:appId/ui/ or a scoped service mount.");
  return r.appId;
}
function YE(i, r) {
  if (!r || !["card", "function-panel", "settings", "slot"].includes(r.slot)) return !1;
  try {
    return ep(i) === r.appId;
  } catch {
    return !1;
  }
}
function XE(i) {
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
function QE(i) {
  return new URLSearchParams(i.location.search).get("hana-asset-base") || null;
}
function KE(i, r) {
  const o = XE(r), c = QE(i);
  if (!c)
    throw new Error(
      "hana.assets.url() requires the host-issued hana-asset-base query parameter: this page was not opened by the host with an asset base; hana.assets.url() only works inside a Hana app surface."
    );
  const d = new URL(c);
  return d.pathname = `${d.pathname.replace(/\/+$/, "")}/${o}`, d.toString();
}
function tp(i) {
  return new URLSearchParams(i.location.search).get(H0) || null;
}
function ZE(i) {
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
function np(i, r, o = !1) {
  const c = ep(i);
  let d = ZE(r);
  if (o && d.startsWith("_runtime/")) {
    const h = tp(i);
    if (!h) throw new Error("hana.api.url for a managed service requires appSurfaceSession in the iframe URL.");
    const p = /^(_runtime\/[^/?]+)\/(.+)$/.exec(d);
    if (!p || p[2].startsWith("_surface/")) throw new Error("Invalid managed service API path.");
    d = `${p[1]}/_surface/${encodeURIComponent(h)}/${p[2]}`;
  }
  return `${i.location.origin}/api/apps/${encodeURIComponent(c)}/routes/${d}`;
}
function JE(i, r, o, c) {
  const d = tp(i);
  if (!d)
    throw new Error("hana.api.fetch requires appSurfaceSession in the iframe URL.");
  const h = i.fetch?.bind(i) ?? globalThis.fetch?.bind(globalThis);
  if (!h)
    throw new Error("hana.api.fetch requires window.fetch.");
  const p = o ?? {}, b = new Headers(p.headers);
  return b.set(j0, d), c && b.set("X-Hana-Document-Binding", c), h(np(i, r), {
    ...p,
    headers: b
  });
}
function kE(i) {
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
function FE(i, r) {
  if (typeof r != "object" || r === null) return !1;
  const o = r;
  return i.kind === "global" ? o.kind === "global" : o.kind === "agent" && o.agentId === i.agentId;
}
function ap(i = {}) {
  const r = i.targetWindow ?? CE(), o = i.parentWindow ?? r.parent, c = jv(r, i.targetOrigin), d = i.requestTimeoutMs ?? 1e4, h = i.idFactory ?? OE, p = NE(ge), b = aE({
    targetWindow: r,
    post: ge,
    // A host that rebound its bridge to this same document gets a fresh
    // handshake by re-announcing the ready the page already sent.
    reannounceReady: () => {
      Ve && ae(tt);
    }
  }), C = rE({
    request: ce,
    post: ge,
    targetWindow: r,
    currentView: b,
    requestTimeoutMs: d
  }), w = i.followHostTheme !== !1;
  let z = DE(r), v = zE(r), B = null, D = null;
  const T = /* @__PURE__ */ new Set(), q = /* @__PURE__ */ new Set(), x = /* @__PURE__ */ new Set(), K = /* @__PURE__ */ new Set(), $ = /* @__PURE__ */ new Set(), Q = /* @__PURE__ */ new Set(), V = /* @__PURE__ */ new Set(), ye = /* @__PURE__ */ new Set(), oe = /* @__PURE__ */ new Set();
  let ne = null, he = null, et = null, Ve = !1, tt, ke = !1, wt = !1, Bt = !1, G = Promise.resolve();
  const I = /* @__PURE__ */ new Map();
  let J = 1, Z = null, re = null, se = null, Re = !1;
  function Me(_) {
    if (!w || !_) return;
    const X = r.document;
    X && RE(X, _).catch((M) => {
      if (i.onThemeError) {
        i.onThemeError(M);
        return;
      }
      console.error("[hana] failed to follow host theme", M);
    });
  }
  function ge(_, X) {
    if (i.messageTransport) {
      const M = i.messageTransport.postMessage(_);
      M && M.catch(X ?? ((L) => console.error("[hana] host message delivery failed", L)));
    } else o.postMessage(_, c);
  }
  function E(_) {
    if (i.messageTransport) return i.messageTransport.onMessage(_);
    const X = (M) => {
      Hv(M, o, c) && _(M.data);
    };
    return r.addEventListener("message", X), () => r.removeEventListener("message", X);
  }
  function Y(_, X) {
    const M = {
      protocol: it,
      version: rt,
      kind: "event",
      type: _
    };
    X !== void 0 && (M.payload = X), ge(M);
  }
  function ae(_) {
    Y("hana.ready", _);
  }
  function W(_) {
    const X = _ instanceof Oa ? _ : new Oa({
      code: "HOST_ERROR",
      message: _ instanceof Error ? _.message : "Active session subscription failed."
    });
    let M = !1;
    for (const L of oe)
      if (L.onError) {
        M = !0;
        try {
          L.onError(X);
        } catch (le) {
          console.error("[hana] active session error callback failed", le);
        }
      }
    M || console.error("[hana] active session subscription failed", X);
  }
  function Ee() {
    return oe.size > 0 && !Bt && !wt;
  }
  function be() {
    G = G.catch(() => {
    }).then(async () => {
      for (; ke !== Ee(); ) {
        if (Ee()) {
          try {
            if (await ee(), (await ce(xr.SUBSCRIBE)).subscribed !== !0) {
              ke = !1, wt || W(new Oa({
                code: "HOST_ERROR",
                message: "The host did not establish the active session subscription."
              }));
              return;
            }
            ke = !0;
          } catch (_) {
            ke = !1, W(_);
            return;
          }
          continue;
        }
        try {
          await ee(), await ce(xr.UNSUBSCRIBE);
        } catch (_) {
          W(_);
        }
        ke = !1;
      }
    });
  }
  function we(_) {
    const X = r.document?.readyState;
    return X !== "loading" && X !== "interactive" ? Promise.resolve() : new Promise((M, L) => {
      const le = () => {
        r.clearTimeout(vt), r.removeEventListener("load", ze), r.removeEventListener("pagehide", Ye);
      }, ze = () => {
        le(), M();
      }, Ye = () => {
        le(), L(new Oa({
          code: "SURFACE_UNAVAILABLE",
          message: "The App surface unloaded before interactive regions could be registered."
        }));
      }, vt = r.setTimeout(() => {
        le(), L(new Oa({
          code: "TIMEOUT",
          message: "The App document did not finish loading before interactive regions could be registered."
        }));
      }, _);
      r.addEventListener("load", ze), r.addEventListener("pagehide", Ye);
    });
  }
  function ee(_) {
    return we(_ ?? d).then(() => {
      ae(tt);
    });
  }
  function fe(_) {
    const X = r.requestAnimationFrame?.bind(r), M = r.cancelAnimationFrame?.bind(r);
    if (X && M) {
      const le = X(_);
      return () => M(le);
    }
    const L = r.setTimeout(() => {
      const le = r.performance?.now?.() ?? Date.now();
      _(le);
    }, Math.max(1, Math.round(1e3 / Math.max(v.maxFrameRate, li))));
    return () => r.clearTimeout(L);
  }
  function Pt() {
    Z && (Z(), Z = null);
  }
  function $n() {
    Z || I.size === 0 || !v.active || v.maxFrameRate <= 0 || (Z = fe((_) => {
      if (Z = null, !v.active || v.maxFrameRate <= 0) return;
      const X = 1e3 / v.maxFrameRate;
      if (re !== null && _ >= re && _ - re < X) {
        $n();
        return;
      }
      re = _;
      const M = Array.from(I.entries());
      for (const [L, le] of M)
        if (I.delete(L))
          try {
            le(_);
          } catch (ze) {
            r.setTimeout(() => {
              throw ze;
            }, 0);
          }
      $n();
    }));
  }
  function Mn(_) {
    if (!jE(v, _)) {
      v = _;
      for (const X of x) X({ ...v });
      if (!v.active || v.maxFrameRate <= 0) {
        Pt();
        return;
      }
      $n();
    }
  }
  function Wt(_) {
    if (typeof _ == "object" && _ !== null && _.protocol === void 0 && _.type === "visibility-changed") {
      const L = ME(
        _.payload,
        v
      );
      L && Mn(L);
      return;
    }
    const X = ku(_);
    if (!X.ok) return;
    const M = X.value;
    if (!b.handleHostMessage(M) && !C.handleHostMessage(M)) {
      if (p.handleMessage(M)) {
        M.type === Ju.CONTEXT && M.payload === null && Ve && ae(tt);
        return;
      }
      if (M.kind === "request" && M.type === "hana.document.view-request") {
        const L = typeof M.payload == "object" && M.payload !== null ? M.payload : null, le = L && typeof L.requestId == "string" ? L.requestId : "", ze = L && typeof L.documentId == "string" ? L.documentId : "", Ye = L && typeof L.viewId == "string" ? L.viewId : "", vt = L?.revision, zt = L && typeof L.method == "string" ? L.method.trim() : "";
        if (!le || !ze || !Ye || !zt || zt.length > 128 || !Number.isSafeInteger(vt) || Number(vt) < 0) {
          ge({
            protocol: it,
            version: rt,
            id: M.id,
            kind: "error",
            type: M.type,
            error: { code: "DOCUMENT_VIEW_REQUEST_INVALID", message: "Invalid document view request." }
          });
          return;
        }
        if (!et) {
          ge({
            protocol: it,
            version: rt,
            id: M.id,
            kind: "error",
            type: M.type,
            error: { code: "DOCUMENT_VIEW_REQUEST_UNHANDLED", message: "The document view cannot handle this request." }
          });
          return;
        }
        const pt = L?.payload, Ua = et;
        Promise.resolve().then(() => Ua({
          requestId: le,
          documentId: ze,
          viewId: Ye,
          revision: vt,
          method: zt,
          ...Object.prototype.hasOwnProperty.call(L, "payload") ? { payload: pt } : {}
        })).then((hn) => {
          ge({ protocol: it, version: rt, id: M.id, kind: "response", type: M.type, payload: hn });
        }, (hn) => {
          ge({
            protocol: it,
            version: rt,
            id: M.id,
            kind: "error",
            type: M.type,
            error: { code: "DOCUMENT_VIEW_REQUEST_FAILED", message: hn instanceof Error ? hn.message : "Document view request failed." }
          });
        });
        return;
      }
      if (M.kind === "request" && M.type === "hana.document.request") {
        const L = M.payload, le = typeof L == "object" && L !== null ? L : null, ze = le && typeof le.requestId == "string" ? le.requestId : "", Ye = le?.kind, vt = le?.revision;
        if (!ze || !["save", "prepareClose", "revert", "undo", "redo"].includes(String(Ye)) || !Number.isSafeInteger(vt)) {
          ge({
            protocol: it,
            version: rt,
            id: M.id,
            kind: "error",
            type: M.type,
            error: { code: "DOCUMENT_REQUEST_INVALID", message: "Invalid document request." }
          });
          return;
        }
        if (!he) {
          ge({
            protocol: it,
            version: rt,
            id: M.id,
            kind: "error",
            type: M.type,
            error: { code: "DOCUMENT_REQUEST_UNHANDLED", message: "The document editor cannot handle this request." }
          });
          return;
        }
        const zt = {
          requestId: ze,
          kind: Ye,
          revision: vt
        };
        Promise.resolve(he(zt)).then((pt) => {
          ge({ protocol: it, version: rt, id: M.id, kind: "response", type: M.type, payload: pt });
        }, (pt) => {
          ge({
            protocol: it,
            version: rt,
            id: M.id,
            kind: "error",
            type: M.type,
            error: { code: "DOCUMENT_REQUEST_FAILED", message: pt instanceof Error ? pt.message : "Document request failed." }
          });
        });
        return;
      }
      if (M.kind === "request" && M.type === De.UI_ACTION) {
        const L = r.document, le = L ? Yv(L, M.payload, YE(r, D)) : { ok: !1, code: "UI_ACTION_DOCUMENT_UNAVAILABLE", error: "No document is available." };
        le.ok === !0 ? ge({
          protocol: it,
          version: rt,
          id: M.id,
          kind: "response",
          type: De.UI_ACTION,
          payload: le.result
        }) : ge({
          protocol: it,
          version: rt,
          id: M.id,
          kind: "error",
          type: De.UI_ACTION,
          error: { code: le.code, message: le.error, ...le.result ? { details: le.result } : {} }
        });
        return;
      }
      if (M.kind === "event") {
        if (M.type === "hana.document.binding") {
          const L = M.payload, le = typeof L == "object" && L !== null ? L.access : null;
          ne = typeof le?.bindingId == "string" && le.bindingId ? le.bindingId : null;
          return;
        }
        if (M.type === Xl.THEME_CHANGED) {
          if (typeof M.payload != "object" || M.payload === null) return;
          const L = M.payload, le = typeof L.theme == "string" ? L.theme : z.theme, ze = typeof L.theme == "string" && L.theme !== z.theme;
          z = {
            theme: le,
            cssUrl: typeof L.cssUrl == "string" ? L.cssUrl : z.cssUrl,
            appearance: L.appearance === "light" || L.appearance === "dark" ? L.appearance : ze ? void 0 : z.appearance,
            palettes: UE(L.palettes) ? L.palettes : ze ? void 0 : z.palettes
          };
          for (const Ye of T) Ye({ ...z });
          Me(z.cssUrl);
          return;
        }
        if (M.type === Xl.SURFACE_ENVELOPE_CHANGED) {
          const L = HE(M.payload);
          if (!L) return;
          B = L;
          for (const le of q) le(Oo(B));
          return;
        }
        if (M.type === Xl.SURFACE_RUNTIME_CHANGED) {
          const L = xE(M.payload, v);
          L && Mn(L);
          return;
        }
        if (M.type === J0.CONTEXT) {
          const L = M.payload === null ? null : LE(M.payload);
          if (M.payload !== null && L === null) return;
          const le = L?.appId !== D?.appId || L?.slot !== D?.slot || L?.cardInstanceId !== D?.cardInstanceId || L?.instanceKey !== D?.instanceKey || L?.embeddedSessionId !== D?.embeddedSessionId || L?.originSessionId !== D?.originSessionId || L?.viewState?.bindingId !== D?.viewState?.bindingId || L?.viewState?.viewKind !== D?.viewState?.viewKind || L?.viewState?.available !== D?.viewState?.available;
          if (b.applySurfaceContext(L === null ? null : { appId: L.appId, cardInstanceId: L.cardInstanceId, instanceKey: L.instanceKey ?? null }), D = L, le)
            for (const ze of K) ze(D ? Co(D) : null);
          return;
        }
        if (M.type === _v.ACTIVE_CHANGED) {
          if (wt) return;
          const L = BE(M.payload);
          if (!L) return;
          for (const le of oe) le.callback(L);
          return;
        }
        if (M.type === _v.ERROR) {
          const L = IE(M.payload);
          if (!L) return;
          ke = !1, wt = !0, W(L), be();
          return;
        }
        if (M.type === Xl.STORAGE_CHANGED) {
          if (typeof M.payload != "object" || M.payload === null) return;
          const L = M.payload.keys, le = Array.isArray(L) ? L.filter((ze) => typeof ze == "string") : [];
          for (const ze of $) ze(le.slice());
          return;
        }
        if (M.type === q0.CHANGED) {
          if (typeof M.payload != "object" || M.payload === null) return;
          const L = M.payload, le = L.keys, ze = Array.isArray(le) ? le.filter((Ye) => typeof Ye == "string") : [];
          for (const Ye of Q)
            FE(Ye.scope, L.scope) && Ye.callback(ze.slice());
          return;
        }
        if (M.type === Xl.PANEL_EVENT) {
          if (typeof M.payload != "object" || M.payload === null) return;
          const L = M.payload, le = typeof L.sectionId == "string" ? L.sectionId : null, ze = L.kind;
          if (!le || ze !== "select" && ze !== "action" && ze !== "toggle") return;
          const Ye = {
            sectionId: le,
            kind: ze,
            ...typeof L.itemId == "string" ? { itemId: L.itemId } : {},
            ...typeof L.checked == "boolean" ? { checked: L.checked } : {}
          };
          for (const vt of V) vt(Ye);
          return;
        }
        if (M.type === Xl.PANEL_REFRESH)
          for (const L of ye) L();
      }
    }
  }
  E(Wt), r.addEventListener("pagehide", (_) => {
    p.clear(), Bt = !0, be(), _?.persisted === !1 && (Re = !0, b.dispose(), se?.dispose(), C.dispose());
  }), r.addEventListener("pageshow", () => {
    Bt && (Bt = !1, be());
  });
  function ce(_, X, M = {}) {
    const L = h(), le = M.timeoutMs ?? d;
    return new Promise((ze, Ye) => {
      let vt = () => {
      };
      const zt = () => {
        vt(), r.clearTimeout(Ua);
      }, pt = (Da) => {
        const Fl = ku(Da);
        if (!Fl.ok) return;
        const mn = Fl.value;
        mn.id !== L || mn.type !== _ || (mn.kind === "response" && (zt(), ze(mn.payload)), mn.kind === "error" && mn.error && (zt(), Ye(new Oa(mn.error))));
      }, Ua = r.setTimeout(() => {
        zt(), Ye(new Oa({
          code: "TIMEOUT",
          message: `Plugin host request timed out: ${_}.`
        }));
      }, le), hn = {
        protocol: it,
        version: rt,
        id: L,
        kind: "request",
        type: _
      };
      X !== void 0 && (hn.payload = X);
      try {
        vt = E(pt), ge(hn, (Da) => {
          zt(), Ye(Da);
        });
      } catch (Da) {
        zt(), Ye(Da);
      }
    });
  }
  function qe(_) {
    return {
      get(X, M) {
        return ce(Kl.GET, { scope: _, key: X }, M);
      },
      getAll(X) {
        return ce(Kl.GET_ALL, { scope: _ }, X);
      },
      set(X, M, L) {
        return ce(Kl.SET, { scope: _, key: X, value: M }, L);
      },
      delete(X, M) {
        return ce(Kl.DELETE, { scope: _, key: X }, M);
      },
      keys(X) {
        return ce(Kl.KEYS, { scope: _ }, X);
      },
      onChanged(X) {
        if (_.kind === "agent" && !_.agentId)
          throw new Error(
            "hana.storage.agent() with no agentId cannot subscribe with onChanged — a subscription outlives any single request, so pass an explicit agentId to subscribe to a stable scope."
          );
        const M = { scope: _, callback: X };
        return Q.add(M), () => {
          Q.delete(M);
        };
      }
    };
  }
  const It = {
    ready(_) {
      Ve = !0, tt = _, ae(_);
    },
    inputPanel: p.api,
    assets: {
      url(_) {
        return KE(r, _);
      }
    },
    api: {
      url(_) {
        return np(r, _, !0);
      },
      fetch(_, X) {
        return JE(r, _, X, ne);
      }
    },
    ui: {
      resize(_) {
        Y(De.UI_RESIZE, _);
      }
    },
    theme: {
      getSnapshot() {
        return { ...z };
      },
      subscribe(_) {
        return T.add(_), _({ ...z }), () => {
          T.delete(_);
        };
      }
    },
    envelope: {
      getSnapshot() {
        return B ? Oo(B) : null;
      },
      subscribe(_) {
        return q.add(_), _(B ? Oo(B) : null), () => {
          q.delete(_);
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
        let M;
        if (X !== void 0) {
          if (typeof X != "object" || X === null || Array.isArray(X))
            return Promise.reject(new TypeError("hana.cards.open options must be an object."));
          if (Object.keys(X).some((le) => le !== "instanceKey"))
            return Promise.reject(new TypeError("hana.cards.open options accepts only instanceKey."));
          const L = Kv(X.instanceKey);
          if (L === null)
            return Promise.reject(new TypeError("hana.cards.open instanceKey must be a non-empty string of at most 256 code units without NUL."));
          M = L;
        }
        return ce(Qv.OPEN, {
          cardId: _.trim(),
          ...M === void 0 ? {} : { instanceKey: M }
        });
      }
    },
    surface: {
      getContext() {
        return D ? Co(D) : null;
      },
      onContextChanged(_) {
        return K.add(_), _(D ? Co(D) : null), () => {
          K.delete(_);
        };
      },
      setInteractiveRegions(_, X) {
        const M = L0({ regions: _ });
        return M.ok === !1 ? Promise.reject(new TypeError(M.error)) : Ve ? we(X?.timeoutMs ?? d).then(() => (ae(tt), ce(Do.SET_INTERACTIVE_REGIONS, M.value, X))) : ce(Do.SET_INTERACTIVE_REGIONS, M.value, X);
      }
    },
    sessions: {
      getActive(_) {
        return ee(_?.timeoutMs).then(() => ce(xr.GET_ACTIVE, void 0, _));
      },
      focus(_, X) {
        return !_ || typeof _.sessionId != "string" || !_.sessionId.trim() ? Promise.reject(new TypeError("hana.sessions.focus requires a non-empty sessionId.")) : ee(X?.timeoutMs).then(() => ce(
          xr.FOCUS,
          { sessionId: _.sessionId.trim() },
          X
        ));
      },
      onActiveChanged(_, X) {
        const M = { callback: _, onError: X };
        return wt = !1, oe.add(M), be(), () => {
          oe.delete(M) && be();
        };
      }
    },
    performance: {
      requestAnimationFrame(_) {
        const X = J;
        return J += 1, I.set(X, _), $n(), X;
      },
      cancelAnimationFrame(_) {
        I.delete(_), I.size === 0 && Pt();
      }
    },
    host: {
      request: ce
    },
    chrome: C.api,
    toast: {
      show(_, X) {
        return ce(De.TOAST_SHOW, _, X);
      }
    },
    external: {
      open(_, X) {
        return ce(De.EXTERNAL_OPEN, VE(_), X);
      }
    },
    clipboard: {
      writeText(_, X) {
        return ce(
          De.CLIPBOARD_WRITE_TEXT,
          GE(_),
          X
        );
      }
    },
    resources: {
      open(_, X) {
        return ce(De.RESOURCE_OPEN, _, X);
      },
      pick(_ = {}, X) {
        return ce(De.RESOURCE_PICK, _, X);
      },
      saveFile(_, X) {
        return ce(De.RESOURCE_SAVE_FILE, _, X);
      },
      requestAccess(_, X) {
        return ce(
          De.RESOURCE_REQUEST_ACCESS,
          _,
          X
        );
      }
    },
    document: {
      getContext(_) {
        return ce("hana.document.get-context", void 0, _);
      },
      read(_) {
        return ce("hana.document.read", void 0, _);
      },
      reportStatus(_, X) {
        return ce("hana.document.report-status", _, X);
      },
      open(_, X) {
        return ce("hana.document.open", _, X);
      },
      rebind(_, X) {
        return ce("hana.document.rebind", _, X);
      },
      openDrop(_, X) {
        if (_.defaultPrevented) return Promise.resolve(null);
        const M = _.dataTransfer?.getData("application/x-hana-file-drag") || "";
        if (M) return ce("hana.document.open-drop", { dragId: M }, X);
        const L = Array.from(_.dataTransfer?.files || []);
        return L.length !== 1 ? Promise.resolve(null) : ce("hana.document.open-drop", { file: L[0] }, X);
      },
      onRequest(_) {
        return he = _, () => {
          he === _ && (he = null);
        };
      },
      onViewRequest(_) {
        return et = _, () => {
          et === _ && (et = null);
        };
      }
    },
    state: {
      get(_, X) {
        const M = typeof _ == "string" && _ ? { key: _ } : {};
        return ce(De.STATE_GET, M, X);
      },
      set(_, X, M) {
        const L = typeof _ == "string" ? { key: _, value: X } : { state: _ };
        return ce(De.STATE_SET, L, M);
      }
    },
    storage: {
      get(_, X) {
        return ce(De.STORAGE_GET, { key: _ }, X);
      },
      getAll(_) {
        return ce(De.STORAGE_GET_ALL, {}, _);
      },
      set(_, X, M) {
        return ce(De.STORAGE_SET, { key: _, value: X }, M);
      },
      delete(_, X) {
        return ce(De.STORAGE_DELETE, { key: _ }, X);
      },
      onChanged(_) {
        return $.add(_), () => {
          $.delete(_);
        };
      },
      global: qe({ kind: "global" }),
      agent(_) {
        return qe({ kind: "agent", agentId: _ });
      }
    },
    emit(_, X, M, L) {
      const le = {
        name: _,
        userGesture: kE(r)
      };
      return arguments.length >= 2 && (le.payload = X), typeof M == "string" && M.trim() && (le.to = M.trim()), ce(De.EMIT, le, L);
    },
    track(_, X, M) {
      const L = { name: _ };
      return arguments.length >= 2 && (L.payload = X), ce(De.TRACK, L, M);
    },
    panel: {
      set(_, X) {
        return ce(De.PANEL_SET, _, X);
      },
      onEvent(_) {
        return V.add(_), () => {
          V.delete(_);
        };
      },
      onRefresh(_) {
        return ye.add(_), () => {
          ye.delete(_);
        };
      }
    }
  };
  return kv(It, () => Re ? null : (se ??= SE({
    request: ce,
    currentView: b,
    getContext: () => D,
    subscribeContext: (_) => (K.add(_), () => {
      K.delete(_);
    }),
    requestTimeoutMs: d
  }), se.api)), It;
}
var Dv = null;
function ue() {
  return Dv ??= ap(), Dv;
}
var lp = {
  ready(i) {
    return ue().ready(i);
  },
  inputPanel: {
    getContext() {
      return ue().inputPanel.getContext();
    },
    onContextChanged(i) {
      return ue().inputPanel.onContextChanged(i);
    },
    onSubmit(i) {
      return ue().inputPanel.onSubmit(i);
    },
    setPresentation(i) {
      return ue().inputPanel.setPresentation(i);
    }
  },
  assets: {
    url(i) {
      return ue().assets.url(i);
    }
  },
  api: {
    url(i) {
      return ue().api.url(i);
    },
    fetch(i, r) {
      return ue().api.fetch(i, r);
    }
  },
  ui: {
    resize(i) {
      return ue().ui.resize(i);
    }
  },
  theme: {
    getSnapshot() {
      return ue().theme.getSnapshot();
    },
    subscribe(i) {
      return ue().theme.subscribe(i);
    }
  },
  envelope: {
    getSnapshot() {
      return ue().envelope.getSnapshot();
    },
    subscribe(i) {
      return ue().envelope.subscribe(i);
    }
  },
  lifecycle: {
    getSnapshot() {
      return ue().lifecycle.getSnapshot();
    },
    subscribe(i) {
      return ue().lifecycle.subscribe(i);
    }
  },
  cards: {
    open(i, r) {
      return ue().cards.open(i, r);
    }
  },
  surface: {
    getContext() {
      return ue().surface.getContext();
    },
    onContextChanged(i) {
      return ue().surface.onContextChanged(i);
    },
    setInteractiveRegions(i, r) {
      return ue().surface.setInteractiveRegions(i, r);
    }
  },
  sessions: {
    getActive(i) {
      return ue().sessions.getActive(i);
    },
    focus(i, r) {
      return ue().sessions.focus(i, r);
    },
    onActiveChanged(i, r) {
      return ue().sessions.onActiveChanged(i, r);
    }
  },
  performance: {
    requestAnimationFrame(i) {
      return ue().performance.requestAnimationFrame(i);
    },
    cancelAnimationFrame(i) {
      return ue().performance.cancelAnimationFrame(i);
    }
  },
  host: {
    request(i, r, o) {
      return ue().host.request(i, r, o);
    }
  },
  chrome: {
    set(i, r) {
      return ue().chrome.set(i, r);
    },
    onAction(i) {
      return ue().chrome.onAction(i);
    },
    registerScrollSource(i) {
      return ue().chrome.registerScrollSource(i);
    }
  },
  toast: {
    show(i, r) {
      return ue().toast.show(i, r);
    }
  },
  external: {
    open(i, r) {
      return ue().external.open(i, r);
    }
  },
  clipboard: {
    writeText(i, r) {
      return ue().clipboard.writeText(i, r);
    }
  },
  resources: {
    open(i, r) {
      return ue().resources.open(i, r);
    },
    pick(i, r) {
      return ue().resources.pick(i, r);
    },
    saveFile(i, r) {
      return ue().resources.saveFile(i, r);
    },
    requestAccess(i, r) {
      return ue().resources.requestAccess(i, r);
    }
  },
  document: {
    getContext(i) {
      return ue().document.getContext(i);
    },
    read(i) {
      return ue().document.read(i);
    },
    reportStatus(i, r) {
      return ue().document.reportStatus(i, r);
    },
    open(i, r) {
      return ue().document.open(i, r);
    },
    rebind(i, r) {
      return ue().document.rebind(i, r);
    },
    openDrop(i, r) {
      return ue().document.openDrop(i, r);
    },
    onRequest(i) {
      return ue().document.onRequest(i);
    },
    onViewRequest(i) {
      return ue().document.onViewRequest(i);
    }
  },
  state: {
    get(i, r) {
      return ue().state.get(i, r);
    },
    set(i, r, o) {
      return ue().state.set(i, r, o);
    }
  },
  storage: {
    get(i, r) {
      return ue().storage.get(i, r);
    },
    getAll(i) {
      return ue().storage.getAll(i);
    },
    set(i, r, o) {
      return ue().storage.set(i, r, o);
    },
    delete(i, r) {
      return ue().storage.delete(i, r);
    },
    onChanged(i) {
      return ue().storage.onChanged(i);
    },
    get global() {
      return ue().storage.global;
    },
    agent(i) {
      return ue().storage.agent(i);
    }
  },
  emit(i, r, o, c) {
    return ue().emit(i, r, o, c);
  },
  track(i, r, o) {
    return ue().track(i, r, o);
  },
  panel: {
    set(i, r) {
      return ue().panel.set(i, r);
    },
    onEvent(i) {
      return ue().panel.onEvent(i);
    },
    onRefresh(i) {
      return ue().panel.onRefresh(i);
    }
  }
};
kv(lp, () => Fv(ue()));
function Ir(i) {
  return i.hanaAppWindow;
}
function on(i) {
  const r = Ir(i);
  if (!r) throw Object.assign(new Error("This App surface is not an App-owned native window."), { code: "APP_WINDOW_UNAVAILABLE" });
  return r;
}
function $E(i) {
  return (typeof window < "u" ? Ir(i()) : void 0)?.onDocumentAction?.((o) => {
    const c = Yv(i().document, o, !0);
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
var PE = /* @__PURE__ */ new Set([
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
  ...Object.values(Qv),
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
function WE(i) {
  if (!qo(i.location?.pathname ?? ""))
    throw new Error("@hana/app-sdk/ui requires an App surface route under /api/apps/:appId/ui/ or a scoped service mount.");
}
function eb(i) {
  if (!PE.has(i))
    throw new Error(`@hana/app-sdk/ui does not expose host request type: ${i}`);
}
function tb(i) {
  return {
    get global() {
      return i().storage.global;
    },
    agent(r) {
      return i().storage.agent(r);
    }
  };
}
function nb(i, r = up, o = {}) {
  return {
    window: $E(r),
    surfaces: {
      onEvent(c, d) {
        if (typeof c != "string" || !c.trim() || c.length > 256 || typeof d != "function")
          throw new TypeError("surfaces.onEvent requires a surface id and a listener.");
        return on(r()).onMessage((h) => {
          const p = ku(h);
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
        const b = p.appId, C = (D) => {
          const T = ku(D);
          if (!T.ok || T.value.kind !== "event" || T.value.type !== "hana.app.event") return;
          const q = T.value.payload;
          q?.source !== `app:${b}` || q.type !== c || !q.payload || typeof q.payload != "object" || Array.isArray(q.payload) || d(q.payload);
        }, w = o.messageTransport ?? Ir(h);
        if (w) return w.onMessage(C);
        const z = o.parentWindow ?? h.parent, v = jv(h, o.targetOrigin), B = (D) => {
          Hv(D, z, v) && C(D.data);
        };
        return h.addEventListener("message", B), () => h.removeEventListener("message", B);
      }
    },
    instances: {
      onChanged(c) {
        return on(r()).onMessage((d) => {
          if (!d || typeof d != "object") return;
          const h = d;
          if (h.protocol !== it || h.version !== rt || h.kind !== "event" || h.type !== "hana.app-instance.changed") return;
          const p = h.payload;
          p && typeof p.instanceId == "string" && typeof p.revision == "number" && Number.isSafeInteger(p.revision) && typeof p.state == "string" && c({ instanceId: p.instanceId, revision: p.revision, state: p.state });
        });
      }
    },
    environments: {
      onChanged(c) {
        if (typeof c != "function") throw new TypeError("environments.onChanged requires a listener.");
        return on(r()).onMessage((d) => {
          const h = ku(d);
          if (!h.ok || h.value.kind !== "event" || h.value.type !== "hana.app-environment.changed") return;
          const p = h.value.payload;
          p && typeof p.environmentId == "string" && typeof p.revision == "number" && Number.isSafeInteger(p.revision) && typeof p.state == "string" && c({ environmentId: p.environmentId, revision: p.revision, state: p.state });
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
        return eb(c), i().host.request(c, d, h);
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
    storage: tb(i),
    emit(c, d, h, p) {
      return i().emit(c, d, h, p);
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
        const d = Fv(i());
        return d ? d.enable(c) : Promise.reject(Object.assign(new Error("App view-state recovery is unavailable on this surface."), { code: "VIEW_STATE_UNAVAILABLE" }));
      }
    }
  };
}
var ab, Dt = nb(() => {
  const i = up();
  WE(i);
  const r = Ir(i);
  return r ? ab ??= ap({ targetWindow: i, messageTransport: r }) : lp;
});
function dn(...i) {
  return i.filter(Boolean).join(" ");
}
const zv = {
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
}, lb = {
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
function ub({ mode: i = "inherit", theme: r, className: o, style: c, children: d, "data-testid": h = "hana-plugin-theme", ...p }) {
  const b = typeof r == "string" ? r : void 0, C = ib(i, r);
  return g.jsx("div", { ...p, "data-testid": h, className: dn("hana-plugin-theme", o), "data-hana-theme-mode": i, "data-hana-theme": i === "hana" ? b : void 0, style: { ...C, ...c }, children: d });
}
function ib(i, r) {
  if (i === "inherit")
    return {};
  const o = rb(i, r), c = {};
  for (const [d, h] of Object.entries(lb)) {
    const p = o?.[d];
    p && (c[h] = p);
  }
  return c;
}
function rb(i, r) {
  if (typeof r == "string")
    return zv[r];
  if (r)
    return r;
  if (i === "hana")
    return zv["warm-paper"];
}
const mt = k.forwardRef(function({ variant: r = "secondary", size: o = "md", loading: c = !1, iconLeft: d, iconRight: h, disabled: p, className: b, children: C, type: w = "button", ...z }, v) {
  return g.jsxs("button", { ...z, ref: v, type: w, disabled: p || c, className: dn("hana-plugin-button", `hana-plugin-button-${r}`, `hana-plugin-button-${o}`, c && "hana-plugin-button-loading", b), children: [c ? g.jsx("span", { className: "hana-plugin-spinner", "aria-hidden": !0 }) : d, C && g.jsx("span", { className: "hana-plugin-button-label", children: C }), !c && h] });
});
k.forwardRef(function({ label: r, size: o = "md", variant: c = "ghost", className: d, children: h, type: p = "button", ...b }, C) {
  return g.jsx("button", { ...b, ref: C, type: p, "aria-label": r, title: b.title || r, className: dn("hana-plugin-icon-button", `hana-plugin-icon-button-${o}`, `hana-plugin-icon-button-${c}`, d), children: h });
});
const Nt = k.forwardRef(function({ label: r, hint: o, error: c, id: d, className: h, inputClassName: p, ...b }, C) {
  const w = k.useId(), z = d || w;
  return g.jsx(Lo, { label: r, hint: o, error: c, htmlFor: z, className: h, children: g.jsx("input", { ...b, ref: C, id: z, "aria-invalid": !!c, className: dn("hana-plugin-input", p) }) });
});
k.forwardRef(function({ label: r, hint: o, error: c, id: d, className: h, textareaClassName: p, rows: b = 4, ...C }, w) {
  const z = k.useId(), v = d || z;
  return g.jsx(Lo, { label: r, hint: o, error: c, htmlFor: v, className: h, children: g.jsx("textarea", { ...C, ref: w, id: v, rows: b, "aria-invalid": !!c, className: dn("hana-plugin-textarea", p) }) });
});
k.forwardRef(function({ checked: r, onChange: o, label: c, disabled: d, className: h, onClick: p, type: b = "button", ...C }, w) {
  const z = typeof c == "string" ? c : C["aria-label"];
  return g.jsxs("span", { className: dn("hana-plugin-switch-wrap", h), children: [g.jsx("button", { ...C, ref: w, type: b, role: "switch", "aria-checked": r, "aria-label": z, disabled: d, className: dn("hana-plugin-switch", r && "hana-plugin-switch-on"), onClick: (v) => {
    p?.(v), !v.defaultPrevented && !d && o?.(!r);
  }, children: g.jsx("span", { className: "hana-plugin-switch-thumb", "aria-hidden": !0 }) }), c && g.jsx("span", { className: "hana-plugin-switch-label", children: c })] });
});
function xv({ options: i, value: r, onChange: o, label: c, hint: d, error: h, placeholder: p = "Select", disabled: b = !1, className: C }) {
  const [w, z] = k.useState(!1), v = i.find((q) => q.value === r), B = v?.label || p, D = typeof c == "string" ? c : void 0, T = [D, B].filter(Boolean).join(" ");
  return g.jsx(Lo, { label: c, hint: d, error: h, className: C, children: g.jsxs("div", { className: "hana-plugin-select", children: [g.jsxs("button", { type: "button", "aria-haspopup": "listbox", "aria-expanded": w, "aria-label": T || void 0, disabled: b, className: dn("hana-plugin-select-trigger", !v && "hana-plugin-select-placeholder"), onClick: () => z((q) => !q), children: [g.jsx("span", { className: "hana-plugin-select-value", children: B }), g.jsx("span", { className: "hana-plugin-select-arrow", "aria-hidden": !0, children: "▾" })] }), w && g.jsx("div", { className: "hana-plugin-select-popover", role: "listbox", "aria-label": D, children: i.map((q) => g.jsx("button", { type: "button", role: "option", "aria-selected": q.value === r, disabled: q.disabled, className: dn("hana-plugin-select-option", q.value === r && "hana-plugin-select-option-selected"), onClick: () => {
    q.disabled || (o(q.value), z(!1));
  }, children: q.label }, q.value)) })] }) });
}
function Lo({ label: i, hint: r, error: o, htmlFor: c, className: d, children: h }) {
  return g.jsxs("div", { className: dn("hana-plugin-field", d), children: [i && g.jsx("label", { className: "hana-plugin-field-label", htmlFor: c, children: i }), r && g.jsx("div", { className: "hana-plugin-field-hint", children: r }), h, o && g.jsx("div", { className: "hana-plugin-field-error", children: o })] });
}
function Ca({ title: i, description: r, actions: o, footer: c, children: d, className: h, ...p }) {
  return g.jsxs("section", { ...p, className: dn("hana-plugin-card", h), children: [(i || r || o) && g.jsxs("header", { className: "hana-plugin-card-header", children: [g.jsxs("div", { className: "hana-plugin-card-heading", children: [i && g.jsx("h2", { className: "hana-plugin-card-title", children: i }), r && g.jsx("p", { className: "hana-plugin-card-description", children: r })] }), o && g.jsx("div", { className: "hana-plugin-card-actions", children: o })] }), g.jsx("div", { className: "hana-plugin-card-body", children: d }), c && g.jsx("footer", { className: "hana-plugin-card-footer", children: c })] });
}
function ui({ icon: i, title: r, description: o, action: c, className: d, ...h }) {
  return g.jsxs("div", { ...h, className: dn("hana-plugin-empty", d), children: [i && g.jsx("div", { className: "hana-plugin-empty-icon", children: i }), g.jsx("div", { className: "hana-plugin-empty-title", children: r }), o && g.jsx("div", { className: "hana-plugin-empty-description", children: o }), c && g.jsx("div", { className: "hana-plugin-empty-action", children: c })] });
}
const ip = (i) => i.replace(/^\/+/, "");
async function rp(i) {
  const r = await i.text();
  try {
    return JSON.parse(r);
  } catch {
    return { ok: !1, stage: "http", message: `HTTP ${i.status}：${(r || "无响应体").slice(0, 200)}` };
  }
}
async function Pe(i) {
  const r = await Dt.api.fetch(ip(i));
  return rp(r);
}
async function fn(i, r) {
  const o = await Dt.api.fetch(ip(i), {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(r)
  });
  return rp(o);
}
async function ei(i, r = {}) {
  const o = r.timeoutMs ?? 48e4, c = Date.now();
  for (; Date.now() - c < o; ) {
    await new Promise((h) => setTimeout(h, 5e3));
    const d = await Pe(i).catch(() => null);
    if (d && d.running === !1 && (!r.kind || d.kind === r.kind) && d.lastResult) return d.lastResult;
  }
  return { ok: !1, stage: "timeout", message: `等待超时（${Math.round(o / 6e4)} 分钟），任务可能仍在运行；稍后刷新查看结果。` };
}
async function Lr(i = 480 * 1e3) {
  return ei("/api/import/status", { timeoutMs: i });
}
function cp(i, r) {
  const o = /^#\s+(.+?)（([^（）]+),\s*(\d{4}[^)）]*)）$/.exec(String(i || "").trim());
  return { title: o ? o[1] : r, meta: o ? `${o[2].trim()} · ${o[3]}` : "" };
}
async function sp(i) {
  const r = await Pe(Sn(`篇目/${i}`)).catch(() => null);
  return r && r.ok ? String(r.content || "").split(/\r?\n/, 1)[0] : "";
}
const Sn = (i) => `/api/file?path=${encodeURIComponent(i)}`, cb = [
  { id: "home", label: "首页" },
  { id: "use", label: "取用" },
  { id: "library", label: "结构库" },
  { id: "todo", label: "待办" },
  { id: "settings", label: "设置" }
], sb = {
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
function ob(i) {
  return i.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}
function wa(i) {
  return ob(i).replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>").replace(/`([^`]+)`/g, "<code>$1</code>");
}
function fb(i) {
  const r = String(i || "").split(/\r?\n/), o = [];
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
function ti({ md: i }) {
  return /* @__PURE__ */ g.jsx("div", { className: "doc", dangerouslySetInnerHTML: { __html: fb(i) } });
}
async function Ra(i) {
  const r = await Pe(`/api/list?dir=${encodeURIComponent(i)}`);
  return r.ok ? (r.items || []).filter((o) => !o.isDirectory && o.name.endsWith(".md") && o.name !== "_模板.md").map((o) => o.name) : [];
}
function Bo(i) {
  const r = String(i || "").split(/\r?\n/), o = [];
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
async function db() {
  const [i, r, o, c] = await Promise.all([
    Ra("篇目"),
    Ra("写作模型"),
    Pe(Sn("标签库.md")),
    Pe("/api/import/failures").catch(() => ({ ok: !1, items: [] }))
  ]), d = o.ok ? Bo(o.content) : [];
  return {
    papers: i.length,
    models: r.length,
    queuePending: d.filter((h) => !h.decision).length,
    failures: (c.items || []).length
  };
}
function hb() {
  const i = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), [r, o] = k.useState({ id: "", title: "", authors: "", year: "", venue: "", textType: "", score: "9", rationale: "", date: i, recordedBy: "" }), [c, d] = k.useState(null), h = (b, C) => o((w) => ({ ...w, [b]: C }));
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
    }, C = await fn("/api/tool/commit_anchor", { anchor: b });
    d(C), C.ok && Dt.toast.show({ message: "评分已落盘", type: "success" });
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
    /* @__PURE__ */ g.jsx(mt, { variant: "primary", onClick: p, children: "提交评分" }),
    c && /* @__PURE__ */ g.jsx("pre", { className: c.ok ? "ok" : "err", children: c.ok ? `已写入：${c.file || "(dry run)"}` : JSON.stringify(c, null, 2) })
  ] });
}
function mb({ tick: i }) {
  const [r, o] = k.useState([]), [c, d] = k.useState({}), [h, p] = k.useState(""), [b, C] = k.useState(!1);
  k.useEffect(() => {
    let T = !1;
    return (async () => {
      const q = await Pe("/api/model/status").catch(() => null);
      if (T || !q || !q.running || q.kind !== "propose") return;
      C(!0), p("模型提议进行中（接管切页前的任务）…");
      const x = await ei("/api/model/status", { kind: "propose", timeoutMs: 180 * 1e3 });
      T || (p(x.ok ? `已入队 ${x.queued?.length || 0} 对` : x.message || "未产出建议"), x.ok && await w(), C(!1));
    })(), () => {
      T = !0;
    };
  }, []);
  const w = k.useCallback(async () => {
    const T = await Pe(Sn("标签库.md"));
    o(T.ok ? Bo(T.content) : []);
  }, []);
  k.useEffect(() => {
    w();
  }, [w, i]);
  async function z(T, q, x) {
    const K = (/* @__PURE__ */ new Date()).toISOString().slice(0, 10), $ = c[T] || `裁决执行：${T}`, Q = await fn("/api/tool/apply_tag_merge", { mergedLabel: q, target: x, date: K, evidence: $ });
    p(Q.ok ? `已执行：${q} → ${Q.now}` : Q.message || JSON.stringify(Q)), Q.ok && await w();
  }
  async function v() {
    C(!0), p("");
    try {
      const T = await fn("/api/model/propose-merges", {});
      if (!T.started) {
        p(T.message || "发起失败"), C(!1);
        return;
      }
      const q = await ei("/api/model/status", { kind: "propose", timeoutMs: 180 * 1e3 });
      if (q.stage === "timeout") {
        p(q.message), C(!1);
        return;
      }
      p(q.ok ? `已入队 ${q.queued.length} 对：${q.queued.join("；")}` : q.message || "未产出建议"), q.ok && await w();
    } catch (T) {
      p(`请求失败：${String(T?.message || T)}`);
    }
    C(!1);
  }
  async function B() {
    const T = await fn("/api/tool/suggest_tag_merges", {});
    p(T.ok ? T.written ? `共现入队 ${T.written} 对` : "共现提示无新候选（语义相近的对请用模型提议）" : T.message || JSON.stringify(T)), T.ok && await w();
  }
  const D = r.filter((T) => !T.decision);
  return /* @__PURE__ */ g.jsxs("div", { children: [
    /* @__PURE__ */ g.jsxs("p", { className: "hint", children: [
      D.length > 0 && /* @__PURE__ */ g.jsxs("b", { children: [
        D.length,
        " 对待裁决　"
      ] }),
      "相近标签会进到这里，由你决定合并方向；裁决后库内归一，原始记录不动。"
    ] }),
    /* @__PURE__ */ g.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ g.jsx(mt, { variant: "primary", disabled: b, onClick: () => {
        v();
      }, children: b ? "提议中…" : "模型提议疑似对" }),
      /* @__PURE__ */ g.jsx(mt, { disabled: b, onClick: () => {
        B();
      }, children: "跑共现提示" }),
      /* @__PURE__ */ g.jsx("span", { className: "hint", children: "提议与共现只负责入队；合并方向由你在下方卡片上裁决。" })
    ] }),
    r.length === 0 && /* @__PURE__ */ g.jsx(ui, { title: "暂无待裁决标签", description: "篇目积累出相近标签后，候选会自动出现在这里。" }),
    r.map((T) => /* @__PURE__ */ g.jsx(Ca, { title: T.pair, description: `${T.date} 进队 · ${T.evidence}`, children: T.decision ? /* @__PURE__ */ g.jsxs("p", { className: "decided", children: [
      "已裁决：",
      T.decision
    ] }) : /* @__PURE__ */ g.jsxs("div", { className: "queue-actions", children: [
      [T.pair.split(" vs ")[0], T.pair.split(" vs ")[1]].filter(Boolean).map((q, x, K) => /* @__PURE__ */ g.jsx("div", { className: "queue-op", children: /* @__PURE__ */ g.jsxs(mt, { onClick: () => z(T.pair, q, K[1 - x]), children: [
        "「",
        q,
        "」并入「",
        K[1 - x],
        "」"
      ] }) }, q)),
      /* @__PURE__ */ g.jsx(Nt, { label: "依据（可空）", value: c[T.pair] || "", onChange: (q) => d((x) => ({ ...x, [T.pair]: q.currentTarget.value })) })
    ] }) }, T.pair)),
    D.length > 0 && null,
    h && /* @__PURE__ */ g.jsx("p", { className: h.startsWith("已") ? "ok" : "err", children: h })
  ] });
}
function vb({ tick: i }) {
  const [r, o] = k.useState([]), [c, d] = k.useState(""), [h, p] = k.useState("");
  return k.useEffect(() => {
    Ra("篇目").then(async (b) => {
      const C = await Promise.all(
        b.map(async (w) => {
          const { title: z, meta: v } = cp(await sp(w), w.replace(/\.md$/, ""));
          return { id: w, title: z, meta: v || w.replace(/\.md$/, "") };
        })
      );
      o(C);
    });
  }, [i]), k.useEffect(() => {
    if (!c) {
      p("");
      return;
    }
    Pe(Sn(`篇目/${c}`)).then((b) => p(b.ok ? b.content : b.message || "读取失败"));
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
    /* @__PURE__ */ g.jsx("div", { className: "main", children: c ? /* @__PURE__ */ g.jsx(ti, { md: h }) : /* @__PURE__ */ g.jsx("p", { className: "hint", children: "左侧选篇查看（每条登记都带位置与原文引文）。" }) })
  ] }) : /* @__PURE__ */ g.jsx(ui, { title: "还没有篇目", description: "导入文献或在对话里拆解后，篇目会出现在这里。" });
}
function pb({ tick: i }) {
  const [r, o] = k.useState([]), [c, d] = k.useState(""), [h, p] = k.useState(""), [b, C] = k.useState(""), [w, z] = k.useState(""), [v, B] = k.useState({});
  if (k.useEffect(() => {
    Ra("篇目").then(async (T) => {
      o(T), T[0] && d(T[0]), T[1] && p(T[1]);
      const q = await Promise.all(T.map(async (x) => {
        const { title: K, meta: $ } = cp(await sp(x), x.replace(/\.md$/, ""));
        return [x, $ ? `${K} · ${$}` : K];
      }));
      B(Object.fromEntries(q));
    });
  }, [i]), k.useEffect(() => {
    c && Pe(Sn(`篇目/${c}`)).then((T) => C(T.ok ? T.content : ""));
  }, [c]), k.useEffect(() => {
    h && Pe(Sn(`篇目/${h}`)).then((T) => z(T.ok ? T.content : ""));
  }, [h]), r.length < 2) return /* @__PURE__ */ g.jsx(ui, { title: "至少两篇可对比", description: "先积累两篇以上篇目。" });
  const D = r.map((T) => ({ value: T, label: v[T] || T.replace(/\.md$/, "") }));
  return /* @__PURE__ */ g.jsxs("div", { children: [
    /* @__PURE__ */ g.jsxs("div", { className: "grid2", children: [
      /* @__PURE__ */ g.jsx(xv, { value: c, onChange: d, options: D }),
      /* @__PURE__ */ g.jsx(xv, { value: h, onChange: p, options: D })
    ] }),
    /* @__PURE__ */ g.jsxs("div", { className: "compare", children: [
      /* @__PURE__ */ g.jsx("div", { className: "col", children: /* @__PURE__ */ g.jsx(ti, { md: b }) }),
      /* @__PURE__ */ g.jsx("div", { className: "col", children: /* @__PURE__ */ g.jsx(ti, { md: w }) })
    ] })
  ] });
}
function gb({ tick: i }) {
  const [r, o] = k.useState(null);
  if (k.useEffect(() => {
    (async () => {
      const [d, h, p, b, C, w] = await Promise.all([
        Ra("篇目"),
        Ra("锚点样本"),
        Ra("写作模型"),
        Pe(Sn("标签库.md")),
        Pe(Sn("闭包映射表.md")),
        Pe(Sn("类型库.md"))
      ]), z = b.ok ? Ro(b.content, "标签") : [], v = b.ok ? Bo(b.content) : [], B = C.ok ? Ro(C.content, "from") : [], D = w.ok ? Ro(w.content, "类型") : [];
      o({
        papers: d.length,
        anchors: h.length,
        models: p.length,
        tags: z,
        queuePending: v.filter((T) => !T.decision).length,
        mapRows: B,
        types: D
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
function Ro(i, r) {
  const o = String(i || "").split(/\r?\n/), c = [];
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
function yb({ tick: i }) {
  const [r, o] = k.useState([]), [c, d] = k.useState(""), [h, p] = k.useState(""), [b, C] = k.useState(!1), [w, z] = k.useState(""), [v, B] = k.useState({});
  k.useEffect(() => {
    let x = !1;
    return (async () => {
      const K = await Pe("/api/model/status").catch(() => null);
      if (x || !K || !K.running || K.kind !== "generate") return;
      C(!0), z("建模进行中（接管切页前的任务）…");
      const $ = await ei("/api/model/status", { kind: "generate" });
      x || (z($.stage === "timeout" ? $.message : $.ok ? "完成：见下方分组" : $.message || "未生成"), $.ok && (Dt.toast.show({ message: "写作模型已生成/更新", type: "success" }), T()), C(!1));
    })(), () => {
      x = !0;
    };
  }, []);
  const D = k.useMemo(() => {
    const x = /* @__PURE__ */ new Map();
    for (const K of r) {
      const $ = /^(.+)-写作模型-v(\d+)\.md$/.exec(K);
      $ && (x.has($[1]) || x.set($[1], []), x.get($[1]).push({ file: K, v: Number($[2]) }));
    }
    return [...x.entries()].map(([K, $]) => ($.sort((Q, V) => Q.v - V.v), { type: K, latest: $[$.length - 1], history: $.slice(0, -1).reverse() }));
  }, [r]), T = k.useCallback(() => {
    Ra("写作模型").then(o);
  }, []);
  k.useEffect(() => {
    T();
  }, [T, i]), k.useEffect(() => {
    if (!c) {
      p("");
      return;
    }
    Pe(Sn(`写作模型/${c}`)).then((x) => p(x.ok ? x.content : ""));
  }, [c]);
  async function q() {
    C(!0), z("");
    try {
      const x = await fn("/api/model/generate", {});
      if (!x.started) {
        z(x.message || "发起失败"), C(!1);
        return;
      }
      z("建模中：归属 → 归纳 → 逐类型生成（每个类型一次模型调用，可离开本页）…");
      const K = await ei("/api/model/status", { kind: "generate" });
      if (K.stage === "timeout") {
        z(K.message), C(!1);
        return;
      }
      const $ = (K.results || []).map((V) => V.ok ? `✓ ${V.type} → v${V.version}（样本 ${V.samples} 篇${V.previous ? `，原 v${V.previous}` : ""}）` : V.skipped ? `· ${V.type}：${V.skipped}` : `✗ ${V.type}：${V.error || "失败"}`), Q = $.filter((V) => V.startsWith("✓")).length;
      z((Q ? $.length === Q ? "完成：" : "部分完成：" : "未生成：") + ($.join("；") || K.message || "")), Q && (Dt.toast.show({ message: "写作模型已生成/更新", type: "success" }), T());
    } catch (x) {
      z(`请求失败：${String(x?.message || x)}`);
    }
    C(!1);
  }
  return /* @__PURE__ */ g.jsxs("div", { children: [
    /* @__PURE__ */ g.jsxs("div", { className: "import-row", children: [
      /* @__PURE__ */ g.jsx(mt, { variant: "primary", disabled: b, onClick: () => {
        q();
      }, children: b ? "建模中…" : "生成 / 更新写作模型" }),
      /* @__PURE__ */ g.jsx("span", { className: "hint", children: "同类型样本 ≥2 篇才生成；新文献入库后再次点击即得新版本（v+1，历史保留）。" })
    ] }),
    w && /* @__PURE__ */ g.jsx("pre", { className: "hint", children: w }),
    D.length ? /* @__PURE__ */ g.jsxs(g.Fragment, { children: [
      D.map((x) => /* @__PURE__ */ g.jsxs("div", { className: "model-group", children: [
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
          x.history.length > 0 && /* @__PURE__ */ g.jsx("button", { className: "linkbtn", onClick: () => B((K) => ({ ...K, [x.type]: !K[x.type] })), children: v[x.type] ? "收起历史" : `历史 ${x.history.length} 版` })
        ] }),
        v[x.type] && /* @__PURE__ */ g.jsx("div", { className: "filebtns", children: x.history.map((K) => /* @__PURE__ */ g.jsxs("button", { className: c === K.file ? "filebtn on" : "filebtn", onClick: () => d(K.file), children: [
          "v",
          K.v
        ] }, K.file)) })
      ] }, x.type)),
      c ? /* @__PURE__ */ g.jsx(ti, { md: h }) : /* @__PURE__ */ g.jsx("p", { className: "hint", children: "选择版本查看（每类默认最新；旧版折叠在「历史」里可对照）。" })
    ] }) : /* @__PURE__ */ g.jsx(ui, { title: "暂无写作模型", description: "点上方按钮归纳生成；样本不足或样本未变的类型会跳过并说明。" })
  ] });
}
function Eb() {
  const [i, r] = k.useState(""), [o, c] = k.useState([]), [d, h] = k.useState(null), [p, b] = k.useState("");
  async function C() {
    if (!i.trim()) return;
    const w = await Pe(`/api/search?query=${encodeURIComponent(i.trim())}`);
    c(w.ok ? w.results : []), h(null);
  }
  return k.useEffect(() => {
    if (!d) {
      b("");
      return;
    }
    Pe(Sn(d.path)).then((w) => b(w.ok ? w.content : "读取失败"));
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
            w.key === "Enter" && C();
          }
        }
      ),
      /* @__PURE__ */ g.jsx(mt, { variant: "primary", onClick: () => {
        C();
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
        d?.path !== w.path && w.hits?.slice(0, 2).map((z, v) => /* @__PURE__ */ g.jsxs("div", { className: "hitline", children: [
          "L",
          z.line,
          ": ",
          z.excerpt,
          z.text
        ] }, v))
      ] }, w.path)),
      !o.length && /* @__PURE__ */ g.jsx("p", { className: "hint", children: "输入关键词后搜索；结果按命中度排序，点击标题展开全文。" })
    ] }),
    d && /* @__PURE__ */ g.jsxs("div", { className: "searchpreview", children: [
      /* @__PURE__ */ g.jsx("h4", { children: d.title }),
      /* @__PURE__ */ g.jsx(ti, { md: p })
    ] })
  ] });
}
function bb() {
  const [i, r] = k.useState(""), [o, c] = k.useState(""), [d, h] = k.useState("2"), [p, b] = k.useState("");
  k.useEffect(() => {
    Pe("/api/config").then((w) => {
      w.ok && w.config ? (r((w.config.markers || []).join("、")), c(w.config.libraryPath || ""), h(String(w.config.maxPerRun ?? 2))) : b(w.message || "配置读取失败");
    });
  }, []);
  async function C() {
    b("保存中…");
    const w = await fn("/api/config", {
      markers: i.split(/[\s、，,;；]+/).map((z) => z.trim()).filter(Boolean),
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
        C();
      }, children: "保存" }),
      p && /* @__PURE__ */ g.jsx("span", { className: "savehint", children: p })
    ] }),
    /* @__PURE__ */ g.jsx("p", { className: "hint", children: "命中判定：标定词过闸后，取最近对话文本与标签库/类型库做字典交集，交集词走共用检索层出候选；候选只附命中事实，采纳与否由会话内模型判断。同会话已注入条目不重复推。" })
  ] });
}
function Sb({ onDone: i }) {
  const [r, o] = k.useState(""), [c, d] = k.useState(!1), [h, p] = k.useState(null), [b, C] = k.useState(!1), [w, z] = k.useState(!1);
  k.useEffect(() => {
    let T = !1;
    return (async () => {
      const q = await Pe("/api/import/status").catch(() => null);
      if (T || !q || !q.running) return;
      d(!0), p({ ok: !0, stage: "running", message: "拆解进行中（接管切页前的任务）…" });
      const x = await Lr();
      T || (p(x), x.ok ? (Dt.toast.show({ message: "拆解完成，已入库", type: "success" }), i()) : x.failureTs && (Dt.toast.show({ message: "拆解失败，已记入待办", type: "error" }), i()), d(!1));
    })(), () => {
      T = !0;
    };
  }, []);
  async function v(T, q) {
    d(!0), p(null);
    try {
      const x = await fn("/api/import", q !== void 0 ? { ...T, fromTs: q } : T);
      if (!x.started) {
        p(x), d(!1);
        return;
      }
      p({ ok: !0, stage: "running", message: x.message || "拆解进行中" });
      const K = await Lr();
      p(K), K.ok ? (Dt.toast.show({ message: "拆解完成，已入库", type: "success" }), i()) : K.failureTs && (Dt.toast.show({ message: "拆解失败，已记入待办", type: "error" }), i());
    } catch (x) {
      p({ ok: !1, stage: "network", message: String(x?.message || x) });
    }
    d(!1);
  }
  async function B(T, q) {
    const x = String(T || "").trim();
    if (!x) {
      p({ ok: !1, stage: "input", message: "请先粘贴文献全文，或选择 / 拖入 md、txt、pdf 文件" });
      return;
    }
    await v({ text: x }, q);
  }
  async function D(T) {
    if (/\.pdf$/i.test(T.name)) {
      if (T.size > 50 * 1024 * 1024) {
        p({ ok: !1, stage: "input", message: "PDF 超过 50 MB 上限" });
        return;
      }
      try {
        const q = await new Promise((x, K) => {
          const $ = new FileReader();
          $.onload = () => x(String($.result).split(",")[1] || ""), $.onerror = () => K(new Error("文件读取失败")), $.readAsDataURL(T);
        });
        await v({ pdfBase64: q, filename: T.name });
      } catch (q) {
        p({ ok: !1, stage: "input", message: String(q?.message || q) });
      }
      return;
    }
    if (!/\.(md|txt)$/i.test(T.name)) {
      p({ ok: !1, stage: "input", message: "支持 md / txt / pdf 文件" });
      return;
    }
    await v({ text: await T.text() });
  }
  return /* @__PURE__ */ g.jsxs("div", { className: "import-zone", children: [
    /* @__PURE__ */ g.jsx("h4", { className: "import-title", children: "导入文献" }),
    /* @__PURE__ */ g.jsxs(
      "div",
      {
        className: b ? "drop on" : "drop",
        onDragOver: (T) => {
          T.preventDefault(), C(!0);
        },
        onDragLeave: () => C(!1),
        onDrop: (T) => {
          T.preventDefault(), C(!1);
          const q = T.dataTransfer.files?.[0];
          q && D(q);
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
                onChange: (T) => {
                  const q = T.target.files?.[0];
                  T.target.value = "", q && D(q);
                }
              }
            )
          ] }),
          /* @__PURE__ */ g.jsxs("p", { className: "hint zotero-toggle", children: [
            "或",
            /* @__PURE__ */ g.jsx("button", { className: "linkbtn", onClick: () => z((T) => !T), children: w ? "收起 Zotero" : "从 Zotero 取" })
          ] })
        ]
      }
    ),
    w && /* @__PURE__ */ g.jsx(Tb, { submit: (T) => v(T), busy: c }),
    /* @__PURE__ */ g.jsx(
      "textarea",
      {
        className: "pastebox",
        value: r,
        onChange: (T) => o(T.target.value),
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
` + h.errors.slice(0, 6).map((T) => `· ${T.field}：${T.message}`).join(`
`) : ""}${h.failureTs ? `
（已记入待办，可到「待办 · 导入失败」重试）` : ""}` })
  ] });
}
function Tb({ submit: i, busy: r }) {
  const [o, c] = k.useState(""), [d, h] = k.useState(null), [p, b] = k.useState(null), [C, w] = k.useState([]), [z, v] = k.useState(""), [B, D] = k.useState(!1);
  async function T() {
    D(!0), v(""), b(null), w([]);
    try {
      const Q = await fn("/api/tool/zotero_search", { query: o, limit: 20 });
      Q && Array.isArray(Q.items) ? (h(Q.items), Q.items.length || v("没有命中条目")) : v(Q?.message || "Zotero 查询失败");
    } catch (Q) {
      v(String(Q?.message || Q));
    }
    D(!1);
  }
  async function q(Q) {
    if (p === Q) {
      b(null);
      return;
    }
    D(!0), v("");
    try {
      const V = await fn("/api/tool/zotero_item", { key: Q });
      V && V.item ? (w(V.attachments || []), b(Q)) : v(V?.message || "条目读取失败");
    } catch (V) {
      v(String(V?.message || V));
    }
    D(!1);
  }
  async function x(Q) {
    try {
      const V = await fn("/api/tool/zotero_attachment_path", { attachmentKey: Q });
      if (V && V.path) return String(V.path);
      v(V?.message || "附件路径解析失败");
    } catch (V) {
      v(String(V?.message || V));
    }
    return null;
  }
  async function K(Q) {
    const V = await x(Q.key);
    V && await i({ pdfPath: V, filename: Q.filename || "" });
  }
  async function $(Q) {
    const V = await x(Q.key);
    if (V)
      try {
        await Dt.clipboard.writeText(V), Dt.toast.show({ message: "路径已复制", type: "success" });
      } catch {
        v(`复制失败，路径：${V}`);
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
            Q.key === "Enter" && T();
          }
        }
      ),
      /* @__PURE__ */ g.jsx(mt, { disabled: B || r, onClick: () => {
        T();
      }, children: "搜索" })
    ] }),
    z && /* @__PURE__ */ g.jsx("p", { className: "err", children: z }),
    d && d.length > 0 && /* @__PURE__ */ g.jsx("div", { className: "zlist", children: d.map((Q) => /* @__PURE__ */ g.jsxs("div", { className: "zitem", children: [
      /* @__PURE__ */ g.jsxs("div", { className: "zitem-head", onClick: () => {
        q(Q.key);
      }, children: [
        /* @__PURE__ */ g.jsx("b", { children: Q.title || "（无标题）" }),
        /* @__PURE__ */ g.jsx("span", { className: "hint", children: [Q.creators, Q.date, Q.publicationTitle].filter(Boolean).join(" · ") })
      ] }),
      p === Q.key && /* @__PURE__ */ g.jsxs("div", { className: "zattach", children: [
        C.length === 0 && /* @__PURE__ */ g.jsx("p", { className: "hint", children: "无附件" }),
        C.map((V) => /* @__PURE__ */ g.jsxs("div", { className: "zattach-row", children: [
          /* @__PURE__ */ g.jsx("span", { className: "zattach-name", children: V.filename || V.contentType || V.key }),
          /* @__PURE__ */ g.jsxs("span", { className: "zattach-actions", children: [
            /\.pdf$/i.test(V.filename || "") && /* @__PURE__ */ g.jsx(mt, { variant: "primary", disabled: r || B, onClick: () => {
              K(V);
            }, children: "导入拆解" }),
            /* @__PURE__ */ g.jsx(mt, { disabled: B, onClick: () => {
              $(V);
            }, children: "复制路径" })
          ] })
        ] }, V.key))
      ] })
    ] }, Q.key)) })
  ] });
}
function Ab({ stats: i, go: r, onDone: o }) {
  const c = i ? i.queuePending + i.failures : 0, [d, h] = k.useState("loading");
  return k.useEffect(() => {
    Pe("/api/config").then((p) => {
      const b = p?.config?.libraryPath ?? "";
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
    /* @__PURE__ */ g.jsx(Sb, { onDone: o })
  ] });
}
function _b({ tick: i, bump: r }) {
  const [o, c] = k.useState([]), [d, h] = k.useState(null), [p, b] = k.useState(""), C = k.useCallback(async () => {
    const v = await Pe("/api/import/failures").catch(() => ({ items: [] }));
    c(v.items || []);
  }, []);
  k.useEffect(() => {
    C();
  }, [C, i]), k.useEffect(() => {
    let v = !1;
    return (async () => {
      const B = await Pe("/api/import/status").catch(() => null);
      if (v || !B || !B.running) return;
      b("有导入任务进行中，等待结果…");
      const D = await Lr();
      v || (b(D.ok ? `完成：${D.file}` : `仍失败：${D.message || "未知错误"}${D.failureTs ? "（已刷新记录）" : ""}`), (D.ok || D.failureTs) && (await C(), r()));
    })(), () => {
      v = !0;
    };
  }, []);
  async function w(v) {
    h(v.ts), b("");
    try {
      const B = await fn("/api/import", { text: v.text, fromTs: v.ts });
      if (B.started) {
        b("重试中（约 1-3 分钟，可离开本页）…");
        const D = await Lr();
        D.ok ? (b(`重试成功：${D.file}`), Dt.toast.show({ message: "重试成功，已入库", type: "success" })) : b(`仍失败：${D.message || "未知错误"}${D.failureTs ? "（已刷新记录）" : ""}`);
      } else B.ok ? (b(`重试成功：${B.file}`), Dt.toast.show({ message: "重试成功，已入库", type: "success" })) : b(`仍失败：${B.message || "未知错误"}`);
    } catch (B) {
      b(`请求失败：${String(B?.message || B)}`);
    }
    h(null), await C(), r();
  }
  async function z(v) {
    await fn("/api/import/failures/dismiss", { ts: v.ts }).catch(() => null), await C(), r();
  }
  return o.length ? /* @__PURE__ */ g.jsxs("div", { children: [
    /* @__PURE__ */ g.jsxs("p", { className: "hint", children: [
      o.length > 0 && /* @__PURE__ */ g.jsxs("b", { children: [
        "共 ",
        o.length,
        " 条待处理　"
      ] }),
      "拆解失败的导入（多为校验未过或模型异常）连原文一起存在这里，重试走同一条链路。"
    ] }),
    o.map((v) => /* @__PURE__ */ g.jsxs("div", { className: "fail-item", children: [
      /* @__PURE__ */ g.jsxs("div", { className: "fail-head", children: [
        /* @__PURE__ */ g.jsx("b", { children: new Date(v.ts).toLocaleString() }),
        /* @__PURE__ */ g.jsx("span", { className: "badge", children: v.stage }),
        /* @__PURE__ */ g.jsxs("span", { className: "hint", children: [
          "尝试 ",
          v.attempts,
          " 次 · ",
          (v.text || "").length,
          " 字"
        ] })
      ] }),
      /* @__PURE__ */ g.jsx("div", { className: "fail-msg", children: v.message }),
      (v.errors || []).slice(0, 4).map((B, D) => /* @__PURE__ */ g.jsxs("div", { className: "hint", children: [
        "· ",
        B.field,
        "：",
        B.message
      ] }, D)),
      /* @__PURE__ */ g.jsxs("div", { className: "fail-actions", children: [
        /* @__PURE__ */ g.jsx(mt, { variant: "primary", disabled: d === v.ts, onClick: () => {
          w(v);
        }, children: d === v.ts ? "重试中…" : "重试" }),
        /* @__PURE__ */ g.jsx(mt, { disabled: d === v.ts, onClick: () => {
          z(v);
        }, children: "移除" })
      ] })
    ] }, v.ts)),
    p && /* @__PURE__ */ g.jsx("p", { className: p.startsWith("重试成功") ? "ok" : "err", children: p })
  ] }) : /* @__PURE__ */ g.jsx(ui, { title: "暂无导入失败", description: "导入拆解失败的文献会落在这里，可原样重试。" });
}
function Nb() {
  const i = document.getElementById("root")?.dataset.surface || "page", [r, o] = k.useState("home"), [c, d] = k.useState({
    home: "",
    use: "search",
    library: "browse",
    todo: "score",
    settings: ""
  }), [h, p] = k.useState(0), [b, C] = k.useState(null), w = k.useCallback(() => p((T) => T + 1), []), z = k.useCallback((T) => o(T), []);
  k.useEffect(() => {
    Dt.ready(), Dt.ui.resize({ height: i === "widget" ? 420 : 760 });
  }, [i]), k.useEffect(() => {
    let T = !0;
    return db().then((q) => {
      T && C(q);
    }).catch(() => {
      T && C(null);
    }), () => {
      T = !1;
    };
  }, [h, r]);
  const v = c[r], B = k.useMemo(() => {
    switch (r) {
      case "home":
        return /* @__PURE__ */ g.jsx(Ab, { stats: b, go: z, onDone: w });
      case "use":
        return v === "models" ? /* @__PURE__ */ g.jsx(yb, { tick: h }) : /* @__PURE__ */ g.jsx(Eb, {});
      case "library":
        return v === "compare" ? /* @__PURE__ */ g.jsx(pb, { tick: h }) : v === "board" ? /* @__PURE__ */ g.jsx(gb, { tick: h }) : /* @__PURE__ */ g.jsx(vb, { tick: h });
      case "todo":
        return v === "queue" ? /* @__PURE__ */ g.jsx(mb, { tick: h }) : v === "import-fail" ? /* @__PURE__ */ g.jsx(_b, { tick: h, bump: w }) : /* @__PURE__ */ g.jsx(hb, {});
      case "settings":
        return /* @__PURE__ */ g.jsx(bb, {});
    }
  }, [r, v, h, b, z, w]), D = b ? b.queuePending + b.failures : 0;
  return /* @__PURE__ */ g.jsx(ub, { mode: "inherit", className: "plugin-panel", children: /* @__PURE__ */ g.jsxs(
    Ca,
    {
      title: "论文结构建模",
      description: "把论文拆成可回溯的论证结构，沉淀为写作模型，写论文时检索取用。",
      actions: /* @__PURE__ */ g.jsx(mt, { variant: "ghost", onClick: w, children: "刷新" }),
      children: [
        /* @__PURE__ */ g.jsx("nav", { className: "tabs zones", children: cb.map((T) => /* @__PURE__ */ g.jsxs("button", { className: r === T.id ? "tab on" : "tab", onClick: () => o(T.id), children: [
          T.label,
          T.id === "todo" && D > 0 && /* @__PURE__ */ g.jsx("span", { className: "nav-badge", children: D })
        ] }, T.id)) }),
        r !== "home" && r !== "settings" && /* @__PURE__ */ g.jsx("nav", { className: "tabs sub", children: sb[r].map((T) => /* @__PURE__ */ g.jsx(
          "button",
          {
            className: v === T.id ? "tab on" : "tab",
            onClick: () => d((q) => ({ ...q, [r]: T.id })),
            children: T.label
          },
          T.id
        )) }),
        r === "todo" && /* @__PURE__ */ g.jsxs("div", { className: "todohint", children: [
          /* @__PURE__ */ g.jsxs(
            "button",
            {
              className: v === "import-fail" ? "filebtn on" : "filebtn",
              onClick: () => d((T) => ({ ...T, todo: "import-fail" })),
              children: [
                "导入失败 ",
                b?.failures ?? 0,
                " 条"
              ]
            }
          ),
          /* @__PURE__ */ g.jsxs(
            "button",
            {
              className: v === "queue" ? "filebtn on" : "filebtn",
              onClick: () => d((T) => ({ ...T, todo: "queue" })),
              children: [
                "待裁决 ",
                b?.queuePending ?? 0,
                " 对"
              ]
            }
          ),
          (b?.failures ?? 0) + (b?.queuePending ?? 0) === 0 && /* @__PURE__ */ g.jsx("span", { className: "hint", children: "当前无待办" }),
          /* @__PURE__ */ g.jsx("span", { className: "hint", children: "点右侧数字直达对应待办" })
        ] }),
        /* @__PURE__ */ g.jsx("div", { className: "tab-body", children: B })
      ]
    }
  ) });
}
const Mv = document.getElementById("root");
Mv && m0.createRoot(Mv).render(/* @__PURE__ */ g.jsx(Nb, {}));
