function X_(a, i) {
  for (var r = 0; r < i.length; r++) {
    const o = i[r];
    if (typeof o != "string" && !Array.isArray(o)) {
      for (const s in o)
        if (s !== "default" && !(s in a)) {
          const d = Object.getOwnPropertyDescriptor(o, s);
          d && Object.defineProperty(a, s, d.get ? d : {
            enumerable: !0,
            get: () => o[s]
          });
        }
    }
  }
  return Object.freeze(Object.defineProperty(a, Symbol.toStringTag, { value: "Module" }));
}
function Af(a) {
  return a && a.__esModule && Object.prototype.hasOwnProperty.call(a, "default") ? a.default : a;
}
var Rh = { exports: {} }, qs = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var $v;
function I_() {
  if ($v) return qs;
  $v = 1;
  var a = Symbol.for("react.transitional.element"), i = Symbol.for("react.fragment");
  function r(o, s, d) {
    var h = null;
    if (d !== void 0 && (h = "" + d), s.key !== void 0 && (h = "" + s.key), "key" in s) {
      d = {};
      for (var y in s)
        y !== "key" && (d[y] = s[y]);
    } else d = s;
    return s = d.ref, {
      $$typeof: a,
      type: o,
      key: h,
      ref: s !== void 0 ? s : null,
      props: d
    };
  }
  return qs.Fragment = i, qs.jsx = r, qs.jsxs = r, qs;
}
var kv;
function F_() {
  return kv || (kv = 1, Rh.exports = I_()), Rh.exports;
}
var T = F_(), Dh = { exports: {} }, He = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qv;
function Q_() {
  if (qv) return He;
  qv = 1;
  var a = Symbol.for("react.transitional.element"), i = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), d = Symbol.for("react.consumer"), h = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), v = Symbol.for("react.memo"), C = Symbol.for("react.lazy"), x = Symbol.for("react.activity"), A = Symbol.iterator;
  function R(O) {
    return O === null || typeof O != "object" ? null : (O = A && O[A] || O["@@iterator"], typeof O == "function" ? O : null);
  }
  var L = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, N = Object.assign, j = {};
  function H(O, Y, ee) {
    this.props = O, this.context = Y, this.refs = j, this.updater = ee || L;
  }
  H.prototype.isReactComponent = {}, H.prototype.setState = function(O, Y) {
    if (typeof O != "object" && typeof O != "function" && O != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, O, Y, "setState");
  }, H.prototype.forceUpdate = function(O) {
    this.updater.enqueueForceUpdate(this, O, "forceUpdate");
  };
  function Q() {
  }
  Q.prototype = H.prototype;
  function X(O, Y, ee) {
    this.props = O, this.context = Y, this.refs = j, this.updater = ee || L;
  }
  var W = X.prototype = new Q();
  W.constructor = X, N(W, H.prototype), W.isPureReactComponent = !0;
  var U = Array.isArray;
  function Z() {
  }
  var B = { H: null, A: null, T: null, S: null }, oe = Object.prototype.hasOwnProperty;
  function we(O, Y, ee) {
    var ie = ee.ref;
    return {
      $$typeof: a,
      type: O,
      key: Y,
      ref: ie !== void 0 ? ie : null,
      props: ee
    };
  }
  function je(O, Y) {
    return we(O.type, Y, O.props);
  }
  function ke(O) {
    return typeof O == "object" && O !== null && O.$$typeof === a;
  }
  function Ve(O) {
    var Y = { "=": "=0", ":": "=2" };
    return "$" + O.replace(/[=:]/g, function(ee) {
      return Y[ee];
    });
  }
  var ut = /\/+/g;
  function tt(O, Y) {
    return typeof O == "object" && O !== null && O.key != null ? Ve("" + O.key) : Y.toString(36);
  }
  function Ue(O) {
    switch (O.status) {
      case "fulfilled":
        return O.value;
      case "rejected":
        throw O.reason;
      default:
        switch (typeof O.status == "string" ? O.then(Z, Z) : (O.status = "pending", O.then(
          function(Y) {
            O.status === "pending" && (O.status = "fulfilled", O.value = Y);
          },
          function(Y) {
            O.status === "pending" && (O.status = "rejected", O.reason = Y);
          }
        )), O.status) {
          case "fulfilled":
            return O.value;
          case "rejected":
            throw O.reason;
        }
    }
    throw O;
  }
  function k(O, Y, ee, ie, ce) {
    var ue = typeof O;
    (ue === "undefined" || ue === "boolean") && (O = null);
    var he = !1;
    if (O === null) he = !0;
    else
      switch (ue) {
        case "bigint":
        case "string":
        case "number":
          he = !0;
          break;
        case "object":
          switch (O.$$typeof) {
            case a:
            case i:
              he = !0;
              break;
            case C:
              return he = O._init, k(
                he(O._payload),
                Y,
                ee,
                ie,
                ce
              );
          }
      }
    if (he)
      return ce = ce(O), he = ie === "" ? "." + tt(O, 0) : ie, U(ce) ? (ee = "", he != null && (ee = he.replace(ut, "$&/") + "/"), k(ce, Y, ee, "", function(_t) {
        return _t;
      })) : ce != null && (ke(ce) && (ce = je(
        ce,
        ee + (ce.key == null || O && O.key === ce.key ? "" : ("" + ce.key).replace(
          ut,
          "$&/"
        ) + "/") + he
      )), Y.push(ce)), 1;
    he = 0;
    var Le = ie === "" ? "." : ie + ":";
    if (U(O))
      for (var ne = 0; ne < O.length; ne++)
        ie = O[ne], ue = Le + tt(ie, ne), he += k(
          ie,
          Y,
          ee,
          ue,
          ce
        );
    else if (ne = R(O), typeof ne == "function")
      for (O = ne.call(O), ne = 0; !(ie = O.next()).done; )
        ie = ie.value, ue = Le + tt(ie, ne++), he += k(
          ie,
          Y,
          ee,
          ue,
          ce
        );
    else if (ue === "object") {
      if (typeof O.then == "function")
        return k(
          Ue(O),
          Y,
          ee,
          ie,
          ce
        );
      throw Y = String(O), Error(
        "Objects are not valid as a React child (found: " + (Y === "[object Object]" ? "object with keys {" + Object.keys(O).join(", ") + "}" : Y) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return he;
  }
  function ae(O, Y, ee) {
    if (O == null) return O;
    var ie = [], ce = 0;
    return k(O, ie, "", "", function(ue) {
      return Y.call(ee, ue, ce++);
    }), ie;
  }
  function le(O) {
    if (O._status === -1) {
      var Y = O._result;
      Y = Y(), Y.then(
        function(ee) {
          (O._status === 0 || O._status === -1) && (O._status = 1, O._result = ee);
        },
        function(ee) {
          (O._status === 0 || O._status === -1) && (O._status = 2, O._result = ee);
        }
      ), O._status === -1 && (O._status = 0, O._result = Y);
    }
    if (O._status === 1) return O._result.default;
    throw O._result;
  }
  var be = typeof reportError == "function" ? reportError : function(O) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var Y = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof O == "object" && O !== null && typeof O.message == "string" ? String(O.message) : String(O),
        error: O
      });
      if (!window.dispatchEvent(Y)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", O);
      return;
    }
    console.error(O);
  }, Ee = {
    map: ae,
    forEach: function(O, Y, ee) {
      ae(
        O,
        function() {
          Y.apply(this, arguments);
        },
        ee
      );
    },
    count: function(O) {
      var Y = 0;
      return ae(O, function() {
        Y++;
      }), Y;
    },
    toArray: function(O) {
      return ae(O, function(Y) {
        return Y;
      }) || [];
    },
    only: function(O) {
      if (!ke(O))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return O;
    }
  };
  return He.Activity = x, He.Children = Ee, He.Component = H, He.Fragment = r, He.Profiler = s, He.PureComponent = X, He.StrictMode = o, He.Suspense = m, He.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = B, He.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(O) {
      return B.H.useMemoCache(O);
    }
  }, He.cache = function(O) {
    return function() {
      return O.apply(null, arguments);
    };
  }, He.cacheSignal = function() {
    return null;
  }, He.cloneElement = function(O, Y, ee) {
    if (O == null)
      throw Error(
        "The argument must be a React element, but you passed " + O + "."
      );
    var ie = N({}, O.props), ce = O.key;
    if (Y != null)
      for (ue in Y.key !== void 0 && (ce = "" + Y.key), Y)
        !oe.call(Y, ue) || ue === "key" || ue === "__self" || ue === "__source" || ue === "ref" && Y.ref === void 0 || (ie[ue] = Y[ue]);
    var ue = arguments.length - 2;
    if (ue === 1) ie.children = ee;
    else if (1 < ue) {
      for (var he = Array(ue), Le = 0; Le < ue; Le++)
        he[Le] = arguments[Le + 2];
      ie.children = he;
    }
    return we(O.type, ce, ie);
  }, He.createContext = function(O) {
    return O = {
      $$typeof: h,
      _currentValue: O,
      _currentValue2: O,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, O.Provider = O, O.Consumer = {
      $$typeof: d,
      _context: O
    }, O;
  }, He.createElement = function(O, Y, ee) {
    var ie, ce = {}, ue = null;
    if (Y != null)
      for (ie in Y.key !== void 0 && (ue = "" + Y.key), Y)
        oe.call(Y, ie) && ie !== "key" && ie !== "__self" && ie !== "__source" && (ce[ie] = Y[ie]);
    var he = arguments.length - 2;
    if (he === 1) ce.children = ee;
    else if (1 < he) {
      for (var Le = Array(he), ne = 0; ne < he; ne++)
        Le[ne] = arguments[ne + 2];
      ce.children = Le;
    }
    if (O && O.defaultProps)
      for (ie in he = O.defaultProps, he)
        ce[ie] === void 0 && (ce[ie] = he[ie]);
    return we(O, ue, ce);
  }, He.createRef = function() {
    return { current: null };
  }, He.forwardRef = function(O) {
    return { $$typeof: y, render: O };
  }, He.isValidElement = ke, He.lazy = function(O) {
    return {
      $$typeof: C,
      _payload: { _status: -1, _result: O },
      _init: le
    };
  }, He.memo = function(O, Y) {
    return {
      $$typeof: v,
      type: O,
      compare: Y === void 0 ? null : Y
    };
  }, He.startTransition = function(O) {
    var Y = B.T, ee = {};
    B.T = ee;
    try {
      var ie = O(), ce = B.S;
      ce !== null && ce(ee, ie), typeof ie == "object" && ie !== null && typeof ie.then == "function" && ie.then(Z, be);
    } catch (ue) {
      be(ue);
    } finally {
      Y !== null && ee.types !== null && (Y.types = ee.types), B.T = Y;
    }
  }, He.unstable_useCacheRefresh = function() {
    return B.H.useCacheRefresh();
  }, He.use = function(O) {
    return B.H.use(O);
  }, He.useActionState = function(O, Y, ee) {
    return B.H.useActionState(O, Y, ee);
  }, He.useCallback = function(O, Y) {
    return B.H.useCallback(O, Y);
  }, He.useContext = function(O) {
    return B.H.useContext(O);
  }, He.useDebugValue = function() {
  }, He.useDeferredValue = function(O, Y) {
    return B.H.useDeferredValue(O, Y);
  }, He.useEffect = function(O, Y) {
    return B.H.useEffect(O, Y);
  }, He.useEffectEvent = function(O) {
    return B.H.useEffectEvent(O);
  }, He.useId = function() {
    return B.H.useId();
  }, He.useImperativeHandle = function(O, Y, ee) {
    return B.H.useImperativeHandle(O, Y, ee);
  }, He.useInsertionEffect = function(O, Y) {
    return B.H.useInsertionEffect(O, Y);
  }, He.useLayoutEffect = function(O, Y) {
    return B.H.useLayoutEffect(O, Y);
  }, He.useMemo = function(O, Y) {
    return B.H.useMemo(O, Y);
  }, He.useOptimistic = function(O, Y) {
    return B.H.useOptimistic(O, Y);
  }, He.useReducer = function(O, Y, ee) {
    return B.H.useReducer(O, Y, ee);
  }, He.useRef = function(O) {
    return B.H.useRef(O);
  }, He.useState = function(O) {
    return B.H.useState(O);
  }, He.useSyncExternalStore = function(O, Y, ee) {
    return B.H.useSyncExternalStore(
      O,
      Y,
      ee
    );
  }, He.useTransition = function() {
    return B.H.useTransition();
  }, He.version = "19.2.0", He;
}
var Yv;
function wf() {
  return Yv || (Yv = 1, Dh.exports = Q_()), Dh.exports;
}
var S = wf();
const It = /* @__PURE__ */ Af(S), Gv = /* @__PURE__ */ X_({
  __proto__: null,
  default: It
}, [S]);
var Nh = { exports: {} }, Ys = {}, jh = { exports: {} }, zh = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Xv;
function Z_() {
  return Xv || (Xv = 1, (function(a) {
    function i(k, ae) {
      var le = k.length;
      k.push(ae);
      e: for (; 0 < le; ) {
        var be = le - 1 >>> 1, Ee = k[be];
        if (0 < s(Ee, ae))
          k[be] = ae, k[le] = Ee, le = be;
        else break e;
      }
    }
    function r(k) {
      return k.length === 0 ? null : k[0];
    }
    function o(k) {
      if (k.length === 0) return null;
      var ae = k[0], le = k.pop();
      if (le !== ae) {
        k[0] = le;
        e: for (var be = 0, Ee = k.length, O = Ee >>> 1; be < O; ) {
          var Y = 2 * (be + 1) - 1, ee = k[Y], ie = Y + 1, ce = k[ie];
          if (0 > s(ee, le))
            ie < Ee && 0 > s(ce, ee) ? (k[be] = ce, k[ie] = le, be = ie) : (k[be] = ee, k[Y] = le, be = Y);
          else if (ie < Ee && 0 > s(ce, le))
            k[be] = ce, k[ie] = le, be = ie;
          else break e;
        }
      }
      return ae;
    }
    function s(k, ae) {
      var le = k.sortIndex - ae.sortIndex;
      return le !== 0 ? le : k.id - ae.id;
    }
    if (a.unstable_now = void 0, typeof performance == "object" && typeof performance.now == "function") {
      var d = performance;
      a.unstable_now = function() {
        return d.now();
      };
    } else {
      var h = Date, y = h.now();
      a.unstable_now = function() {
        return h.now() - y;
      };
    }
    var m = [], v = [], C = 1, x = null, A = 3, R = !1, L = !1, N = !1, j = !1, H = typeof setTimeout == "function" ? setTimeout : null, Q = typeof clearTimeout == "function" ? clearTimeout : null, X = typeof setImmediate < "u" ? setImmediate : null;
    function W(k) {
      for (var ae = r(v); ae !== null; ) {
        if (ae.callback === null) o(v);
        else if (ae.startTime <= k)
          o(v), ae.sortIndex = ae.expirationTime, i(m, ae);
        else break;
        ae = r(v);
      }
    }
    function U(k) {
      if (N = !1, W(k), !L)
        if (r(m) !== null)
          L = !0, Z || (Z = !0, Ve());
        else {
          var ae = r(v);
          ae !== null && Ue(U, ae.startTime - k);
        }
    }
    var Z = !1, B = -1, oe = 5, we = -1;
    function je() {
      return j ? !0 : !(a.unstable_now() - we < oe);
    }
    function ke() {
      if (j = !1, Z) {
        var k = a.unstable_now();
        we = k;
        var ae = !0;
        try {
          e: {
            L = !1, N && (N = !1, Q(B), B = -1), R = !0;
            var le = A;
            try {
              t: {
                for (W(k), x = r(m); x !== null && !(x.expirationTime > k && je()); ) {
                  var be = x.callback;
                  if (typeof be == "function") {
                    x.callback = null, A = x.priorityLevel;
                    var Ee = be(
                      x.expirationTime <= k
                    );
                    if (k = a.unstable_now(), typeof Ee == "function") {
                      x.callback = Ee, W(k), ae = !0;
                      break t;
                    }
                    x === r(m) && o(m), W(k);
                  } else o(m);
                  x = r(m);
                }
                if (x !== null) ae = !0;
                else {
                  var O = r(v);
                  O !== null && Ue(
                    U,
                    O.startTime - k
                  ), ae = !1;
                }
              }
              break e;
            } finally {
              x = null, A = le, R = !1;
            }
            ae = void 0;
          }
        } finally {
          ae ? Ve() : Z = !1;
        }
      }
    }
    var Ve;
    if (typeof X == "function")
      Ve = function() {
        X(ke);
      };
    else if (typeof MessageChannel < "u") {
      var ut = new MessageChannel(), tt = ut.port2;
      ut.port1.onmessage = ke, Ve = function() {
        tt.postMessage(null);
      };
    } else
      Ve = function() {
        H(ke, 0);
      };
    function Ue(k, ae) {
      B = H(function() {
        k(a.unstable_now());
      }, ae);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function(k) {
      k.callback = null;
    }, a.unstable_forceFrameRate = function(k) {
      0 > k || 125 < k ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : oe = 0 < k ? Math.floor(1e3 / k) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return A;
    }, a.unstable_next = function(k) {
      switch (A) {
        case 1:
        case 2:
        case 3:
          var ae = 3;
          break;
        default:
          ae = A;
      }
      var le = A;
      A = ae;
      try {
        return k();
      } finally {
        A = le;
      }
    }, a.unstable_requestPaint = function() {
      j = !0;
    }, a.unstable_runWithPriority = function(k, ae) {
      switch (k) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          k = 3;
      }
      var le = A;
      A = k;
      try {
        return ae();
      } finally {
        A = le;
      }
    }, a.unstable_scheduleCallback = function(k, ae, le) {
      var be = a.unstable_now();
      switch (typeof le == "object" && le !== null ? (le = le.delay, le = typeof le == "number" && 0 < le ? be + le : be) : le = be, k) {
        case 1:
          var Ee = -1;
          break;
        case 2:
          Ee = 250;
          break;
        case 5:
          Ee = 1073741823;
          break;
        case 4:
          Ee = 1e4;
          break;
        default:
          Ee = 5e3;
      }
      return Ee = le + Ee, k = {
        id: C++,
        callback: ae,
        priorityLevel: k,
        startTime: le,
        expirationTime: Ee,
        sortIndex: -1
      }, le > be ? (k.sortIndex = le, i(v, k), r(m) === null && k === r(v) && (N ? (Q(B), B = -1) : N = !0, Ue(U, le - be))) : (k.sortIndex = Ee, i(m, k), L || R || (L = !0, Z || (Z = !0, Ve()))), k;
    }, a.unstable_shouldYield = je, a.unstable_wrapCallback = function(k) {
      var ae = A;
      return function() {
        var le = A;
        A = ae;
        try {
          return k.apply(this, arguments);
        } finally {
          A = le;
        }
      };
    };
  })(zh)), zh;
}
var Iv;
function K_() {
  return Iv || (Iv = 1, jh.exports = Z_()), jh.exports;
}
var Lh = { exports: {} }, Rn = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fv;
function J_() {
  if (Fv) return Rn;
  Fv = 1;
  var a = wf();
  function i(m) {
    var v = "https://react.dev/errors/" + m;
    if (1 < arguments.length) {
      v += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var C = 2; C < arguments.length; C++)
        v += "&args[]=" + encodeURIComponent(arguments[C]);
    }
    return "Minified React error #" + m + "; visit " + v + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function r() {
  }
  var o = {
    d: {
      f: r,
      r: function() {
        throw Error(i(522));
      },
      D: r,
      C: r,
      L: r,
      m: r,
      X: r,
      S: r,
      M: r
    },
    p: 0,
    findDOMNode: null
  }, s = Symbol.for("react.portal");
  function d(m, v, C) {
    var x = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: x == null ? null : "" + x,
      children: m,
      containerInfo: v,
      implementation: C
    };
  }
  var h = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function y(m, v) {
    if (m === "font") return "";
    if (typeof v == "string")
      return v === "use-credentials" ? v : "";
  }
  return Rn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, Rn.createPortal = function(m, v) {
    var C = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)
      throw Error(i(299));
    return d(m, v, null, C);
  }, Rn.flushSync = function(m) {
    var v = h.T, C = o.p;
    try {
      if (h.T = null, o.p = 2, m) return m();
    } finally {
      h.T = v, o.p = C, o.d.f();
    }
  }, Rn.preconnect = function(m, v) {
    typeof m == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, o.d.C(m, v));
  }, Rn.prefetchDNS = function(m) {
    typeof m == "string" && o.d.D(m);
  }, Rn.preinit = function(m, v) {
    if (typeof m == "string" && v && typeof v.as == "string") {
      var C = v.as, x = y(C, v.crossOrigin), A = typeof v.integrity == "string" ? v.integrity : void 0, R = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
      C === "style" ? o.d.S(
        m,
        typeof v.precedence == "string" ? v.precedence : void 0,
        {
          crossOrigin: x,
          integrity: A,
          fetchPriority: R
        }
      ) : C === "script" && o.d.X(m, {
        crossOrigin: x,
        integrity: A,
        fetchPriority: R,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0
      });
    }
  }, Rn.preinitModule = function(m, v) {
    if (typeof m == "string")
      if (typeof v == "object" && v !== null) {
        if (v.as == null || v.as === "script") {
          var C = y(
            v.as,
            v.crossOrigin
          );
          o.d.M(m, {
            crossOrigin: C,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
            nonce: typeof v.nonce == "string" ? v.nonce : void 0
          });
        }
      } else v == null && o.d.M(m);
  }, Rn.preload = function(m, v) {
    if (typeof m == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
      var C = v.as, x = y(C, v.crossOrigin);
      o.d.L(m, C, {
        crossOrigin: x,
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
  }, Rn.preloadModule = function(m, v) {
    if (typeof m == "string")
      if (v) {
        var C = y(v.as, v.crossOrigin);
        o.d.m(m, {
          as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
          crossOrigin: C,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0
        });
      } else o.d.m(m);
  }, Rn.requestFormReset = function(m) {
    o.d.r(m);
  }, Rn.unstable_batchedUpdates = function(m, v) {
    return m(v);
  }, Rn.useFormState = function(m, v, C) {
    return h.H.useFormState(m, v, C);
  }, Rn.useFormStatus = function() {
    return h.H.useHostTransitionStatus();
  }, Rn.version = "19.2.0", Rn;
}
var Qv;
function db() {
  if (Qv) return Lh.exports;
  Qv = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return a(), Lh.exports = J_(), Lh.exports;
}
/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zv;
function W_() {
  if (Zv) return Ys;
  Zv = 1;
  var a = K_(), i = wf(), r = db();
  function o(e) {
    var t = "https://react.dev/errors/" + e;
    if (1 < arguments.length) {
      t += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var n = 2; n < arguments.length; n++)
        t += "&args[]=" + encodeURIComponent(arguments[n]);
    }
    return "Minified React error #" + e + "; visit " + t + " for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";
  }
  function s(e) {
    return !(!e || e.nodeType !== 1 && e.nodeType !== 9 && e.nodeType !== 11);
  }
  function d(e) {
    var t = e, n = e;
    if (e.alternate) for (; t.return; ) t = t.return;
    else {
      e = t;
      do
        t = e, (t.flags & 4098) !== 0 && (n = t.return), e = t.return;
      while (e);
    }
    return t.tag === 3 ? n : null;
  }
  function h(e) {
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
  function m(e) {
    if (d(e) !== e)
      throw Error(o(188));
  }
  function v(e) {
    var t = e.alternate;
    if (!t) {
      if (t = d(e), t === null) throw Error(o(188));
      return t !== e ? null : e;
    }
    for (var n = e, l = t; ; ) {
      var u = n.return;
      if (u === null) break;
      var f = u.alternate;
      if (f === null) {
        if (l = u.return, l !== null) {
          n = l;
          continue;
        }
        break;
      }
      if (u.child === f.child) {
        for (f = u.child; f; ) {
          if (f === n) return m(u), e;
          if (f === l) return m(u), t;
          f = f.sibling;
        }
        throw Error(o(188));
      }
      if (n.return !== l.return) n = u, l = f;
      else {
        for (var g = !1, _ = u.child; _; ) {
          if (_ === n) {
            g = !0, n = u, l = f;
            break;
          }
          if (_ === l) {
            g = !0, l = u, n = f;
            break;
          }
          _ = _.sibling;
        }
        if (!g) {
          for (_ = f.child; _; ) {
            if (_ === n) {
              g = !0, n = f, l = u;
              break;
            }
            if (_ === l) {
              g = !0, l = f, n = u;
              break;
            }
            _ = _.sibling;
          }
          if (!g) throw Error(o(189));
        }
      }
      if (n.alternate !== l) throw Error(o(190));
    }
    if (n.tag !== 3) throw Error(o(188));
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
  var x = Object.assign, A = Symbol.for("react.element"), R = Symbol.for("react.transitional.element"), L = Symbol.for("react.portal"), N = Symbol.for("react.fragment"), j = Symbol.for("react.strict_mode"), H = Symbol.for("react.profiler"), Q = Symbol.for("react.consumer"), X = Symbol.for("react.context"), W = Symbol.for("react.forward_ref"), U = Symbol.for("react.suspense"), Z = Symbol.for("react.suspense_list"), B = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), we = Symbol.for("react.activity"), je = Symbol.for("react.memo_cache_sentinel"), ke = Symbol.iterator;
  function Ve(e) {
    return e === null || typeof e != "object" ? null : (e = ke && e[ke] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var ut = Symbol.for("react.client.reference");
  function tt(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === ut ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case N:
        return "Fragment";
      case H:
        return "Profiler";
      case j:
        return "StrictMode";
      case U:
        return "Suspense";
      case Z:
        return "SuspenseList";
      case we:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case L:
          return "Portal";
        case X:
          return e.displayName || "Context";
        case Q:
          return (e._context.displayName || "Context") + ".Consumer";
        case W:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case B:
          return t = e.displayName || null, t !== null ? t : tt(e.type) || "Memo";
        case oe:
          t = e._payload, e = e._init;
          try {
            return tt(e(t));
          } catch {
          }
      }
    return null;
  }
  var Ue = Array.isArray, k = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ae = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, le = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, be = [], Ee = -1;
  function O(e) {
    return { current: e };
  }
  function Y(e) {
    0 > Ee || (e.current = be[Ee], be[Ee] = null, Ee--);
  }
  function ee(e, t) {
    Ee++, be[Ee] = e.current, e.current = t;
  }
  var ie = O(null), ce = O(null), ue = O(null), he = O(null);
  function Le(e, t) {
    switch (ee(ue, t), ee(ce, e), ee(ie, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? uv(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = uv(t), e = cv(t, e);
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
    Y(ie), ee(ie, e);
  }
  function ne() {
    Y(ie), Y(ce), Y(ue);
  }
  function _t(e) {
    e.memoizedState !== null && ee(he, e);
    var t = ie.current, n = cv(t, e.type);
    t !== n && (ee(ce, e), ee(ie, n));
  }
  function Ct(e) {
    ce.current === e && (Y(ie), Y(ce)), he.current === e && (Y(he), Us._currentValue = le);
  }
  var Ot, Xn;
  function xt(e) {
    if (Ot === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Ot = t && t[1] || "", Xn = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ot + e + Xn;
  }
  var ye = !1;
  function Bt(e, t) {
    if (!e || ye) return "";
    ye = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var P = function() {
                throw Error();
              };
              if (Object.defineProperty(P.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(P, []);
                } catch (I) {
                  var G = I;
                }
                Reflect.construct(e, [], P);
              } else {
                try {
                  P.call();
                } catch (I) {
                  G = I;
                }
                e.call(P.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (I) {
                G = I;
              }
              (P = e()) && typeof P.catch == "function" && P.catch(function() {
              });
            }
          } catch (I) {
            if (I && G && typeof I.stack == "string")
              return [I.stack, G.stack];
          }
          return [null, null];
        }
      };
      l.DetermineComponentFrameRoot.displayName = "DetermineComponentFrameRoot";
      var u = Object.getOwnPropertyDescriptor(
        l.DetermineComponentFrameRoot,
        "name"
      );
      u && u.configurable && Object.defineProperty(
        l.DetermineComponentFrameRoot,
        "name",
        { value: "DetermineComponentFrameRoot" }
      );
      var f = l.DetermineComponentFrameRoot(), g = f[0], _ = f[1];
      if (g && _) {
        var w = g.split(`
`), q = _.split(`
`);
        for (u = l = 0; l < w.length && !w[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; u < q.length && !q[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (l === w.length || u === q.length)
          for (l = w.length - 1, u = q.length - 1; 1 <= l && 0 <= u && w[l] !== q[u]; )
            u--;
        for (; 1 <= l && 0 <= u; l--, u--)
          if (w[l] !== q[u]) {
            if (l !== 1 || u !== 1)
              do
                if (l--, u--, 0 > u || w[l] !== q[u]) {
                  var K = `
` + w[l].replace(" at new ", " at ");
                  return e.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", e.displayName)), K;
                }
              while (1 <= l && 0 <= u);
            break;
          }
      }
    } finally {
      ye = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? xt(n) : "";
  }
  function St(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return xt(e.type);
      case 16:
        return xt("Lazy");
      case 13:
        return e.child !== t && t !== null ? xt("Suspense Fallback") : xt("Suspense");
      case 19:
        return xt("SuspenseList");
      case 0:
      case 15:
        return Bt(e.type, !1);
      case 11:
        return Bt(e.type.render, !1);
      case 1:
        return Bt(e.type, !0);
      case 31:
        return xt("Activity");
      default:
        return "";
    }
  }
  function wt(e) {
    try {
      var t = "", n = null;
      do
        t += St(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var on = Object.prototype.hasOwnProperty, Ll = a.unstable_scheduleCallback, Hl = a.unstable_cancelCallback, xo = a.unstable_shouldYield, To = a.unstable_requestPaint, sn = a.unstable_now, ki = a.unstable_getCurrentPriorityLevel, Be = a.unstable_ImmediatePriority, da = a.unstable_UserBlockingPriority, pi = a.unstable_NormalPriority, Qf = a.unstable_LowPriority, qi = a.unstable_IdlePriority, Yi = a.log, Gi = a.unstable_setDisableYieldValue, Xa = null, Nn = null;
  function ha(e) {
    if (typeof Yi == "function" && Gi(e), Nn && typeof Nn.setStrictMode == "function")
      try {
        Nn.setStrictMode(Xa, e);
      } catch {
      }
  }
  var jn = Math.clz32 ? Math.clz32 : Jf, Zf = Math.log, Kf = Math.LN2;
  function Jf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Zf(e) / Kf | 0) | 0;
  }
  var br = 256, _r = 262144, Vl = 4194304;
  function pa(e) {
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
        return e & 261888;
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
  function Ul(e, t, n) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var u = 0, f = e.suspendedLanes, g = e.pingedLanes;
    e = e.warmLanes;
    var _ = l & 134217727;
    return _ !== 0 ? (l = _ & ~f, l !== 0 ? u = pa(l) : (g &= _, g !== 0 ? u = pa(g) : n || (n = _ & ~e, n !== 0 && (u = pa(n))))) : (_ = l & ~f, _ !== 0 ? u = pa(_) : g !== 0 ? u = pa(g) : n || (n = l & ~e, n !== 0 && (u = pa(n)))), u === 0 ? 0 : t !== 0 && t !== u && (t & f) === 0 && (f = u & -u, n = t & -t, f >= n || f === 32 && (n & 4194048) !== 0) ? t : u;
  }
  function Xi(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Wf(e, t) {
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
  function du() {
    var e = Vl;
    return Vl <<= 1, (Vl & 62914560) === 0 && (Vl = 4194304), e;
  }
  function Ao(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Bl(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Ii(e, t, n, l, u, f) {
    var g = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var _ = e.entanglements, w = e.expirationTimes, q = e.hiddenUpdates;
    for (n = g & ~n; 0 < n; ) {
      var K = 31 - jn(n), P = 1 << K;
      _[K] = 0, w[K] = -1;
      var G = q[K];
      if (G !== null)
        for (q[K] = null, K = 0; K < G.length; K++) {
          var I = G[K];
          I !== null && (I.lane &= -536870913);
        }
      n &= ~P;
    }
    l !== 0 && Fi(e, l, 0), f !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(g & ~t));
  }
  function Fi(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - jn(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | n & 261930;
  }
  function hu(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var l = 31 - jn(n), u = 1 << l;
      u & t | e[l] & t && (e[l] |= t), n &= ~u;
    }
  }
  function pu(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : wo(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function wo(e) {
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
  function Mo(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function mu() {
    var e = ae.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : jv(e.type));
  }
  function Sr(e, t) {
    var n = ae.p;
    try {
      return ae.p = e, t();
    } finally {
      ae.p = n;
    }
  }
  var zn = Math.random().toString(36).slice(2), $t = "__reactFiber$" + zn, xn = "__reactProps$" + zn, Ia = "__reactContainer$" + zn, Ro = "__reactEvents$" + zn, Pf = "__reactListeners$" + zn, Qi = "__reactHandles$" + zn, un = "__reactResources$" + zn, an = "__reactMarker$" + zn;
  function yn(e) {
    delete e[$t], delete e[xn], delete e[Ro], delete e[Pf], delete e[Qi];
  }
  function kt(e) {
    var t = e[$t];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Ia] || n[$t]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = vv(e); e !== null; ) {
            if (n = e[$t]) return n;
            e = vv(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function wa(e) {
    if (e = e[$t] || e[Ia]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function ma(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function In(e) {
    var t = e[un];
    return t || (t = e[un] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function Mt(e) {
    e[an] = !0;
  }
  var Do = /* @__PURE__ */ new Set(), Er = {};
  function Fn(e, t) {
    mi(e, t), mi(e + "Capture", t);
  }
  function mi(e, t) {
    for (Er[e] = t, e = 0; e < t.length; e++)
      Do.add(t[e]);
  }
  var No = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Cr = {}, jo = {};
  function gu(e) {
    return on.call(jo, e) ? !0 : on.call(Cr, e) ? !1 : No.test(e) ? jo[e] = !0 : (Cr[e] = !0, !1);
  }
  function $l(e, t, n) {
    if (gu(t))
      if (n === null) e.removeAttribute(t);
      else {
        switch (typeof n) {
          case "undefined":
          case "function":
          case "symbol":
            e.removeAttribute(t);
            return;
          case "boolean":
            var l = t.toLowerCase().slice(0, 5);
            if (l !== "data-" && l !== "aria-") {
              e.removeAttribute(t);
              return;
            }
        }
        e.setAttribute(t, "" + n);
      }
  }
  function kl(e, t, n) {
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
      e.setAttribute(t, "" + n);
    }
  }
  function ga(e, t, n, l) {
    if (l === null) e.removeAttribute(n);
    else {
      switch (typeof l) {
        case "undefined":
        case "function":
        case "symbol":
        case "boolean":
          e.removeAttribute(n);
          return;
      }
      e.setAttributeNS(t, n, "" + l);
    }
  }
  function Ln(e) {
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
  function zo(e) {
    var t = e.type;
    return (e = e.nodeName) && e.toLowerCase() === "input" && (t === "checkbox" || t === "radio");
  }
  function vu(e, t, n) {
    var l = Object.getOwnPropertyDescriptor(
      e.constructor.prototype,
      t
    );
    if (!e.hasOwnProperty(t) && typeof l < "u" && typeof l.get == "function" && typeof l.set == "function") {
      var u = l.get, f = l.set;
      return Object.defineProperty(e, t, {
        configurable: !0,
        get: function() {
          return u.call(this);
        },
        set: function(g) {
          n = "" + g, f.call(this, g);
        }
      }), Object.defineProperty(e, t, {
        enumerable: l.enumerable
      }), {
        getValue: function() {
          return n;
        },
        setValue: function(g) {
          n = "" + g;
        },
        stopTracking: function() {
          e._valueTracker = null, delete e[t];
        }
      };
    }
  }
  function Or(e) {
    if (!e._valueTracker) {
      var t = zo(e) ? "checked" : "value";
      e._valueTracker = vu(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Lo(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), l = "";
    return e && (l = zo(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== n ? (t.setValue(e), !0) : !1;
  }
  function Hn(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Vn = /[\n"\\]/g;
  function Qt(e) {
    return e.replace(
      Vn,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function Tn(e, t, n, l, u, f, g, _) {
    e.name = "", g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? e.type = g : e.removeAttribute("type"), t != null ? g === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + Ln(t)) : e.value !== "" + Ln(t) && (e.value = "" + Ln(t)) : g !== "submit" && g !== "reset" || e.removeAttribute("value"), t != null ? ql(e, g, Ln(t)) : n != null ? ql(e, g, Ln(n)) : l != null && e.removeAttribute("value"), u == null && f != null && (e.defaultChecked = !!f), u != null && (e.checked = u && typeof u != "function" && typeof u != "symbol"), _ != null && typeof _ != "function" && typeof _ != "symbol" && typeof _ != "boolean" ? e.name = "" + Ln(_) : e.removeAttribute("name");
  }
  function xr(e, t, n, l, u, f, g, _) {
    if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.type = f), t != null || n != null) {
      if (!(f !== "submit" && f !== "reset" || t != null)) {
        Or(e);
        return;
      }
      n = n != null ? "" + Ln(n) : "", t = t != null ? "" + Ln(t) : n, _ || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? u, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = _ ? e.checked : !!l, e.defaultChecked = !!l, g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" && (e.name = g), Or(e);
  }
  function ql(e, t, n) {
    t === "number" && Hn(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function bn(e, t, n, l) {
    if (e = e.options, t) {
      t = {};
      for (var u = 0; u < n.length; u++)
        t["$" + n[u]] = !0;
      for (n = 0; n < e.length; n++)
        u = t.hasOwnProperty("$" + e[n].value), e[n].selected !== u && (e[n].selected = u), u && l && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + Ln(n), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === n) {
          e[u].selected = !0, l && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Fa(e, t, n) {
    if (t != null && (t = "" + Ln(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + Ln(n) : "";
  }
  function Yl(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(o(92));
        if (Ue(l)) {
          if (1 < l.length) throw Error(o(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), t = n;
    }
    n = Ln(t), e.defaultValue = n, l = e.textContent, l === n && l !== "" && l !== null && (e.value = l), Or(e);
  }
  function la(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Ho = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Vo(e, t, n) {
    var l = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Ho.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function gi(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (e = e.style, n != null) {
      for (var l in n)
        !n.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var u in t)
        l = t[u], t.hasOwnProperty(u) && n[u] !== l && Vo(e, u, l);
    } else
      for (var f in t)
        t.hasOwnProperty(f) && Vo(e, f, t[f]);
  }
  function Gl(e) {
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
  var yu = /* @__PURE__ */ new Map([
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
  ]), Ma = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Tr(e) {
    return Ma.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function cn() {
  }
  var Zi = null;
  function Ar(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var va = null, Qa = null;
  function Ki(e) {
    var t = wa(e);
    if (t && (e = t.stateNode)) {
      var n = e[xn] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (Tn(
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
              'input[name="' + Qt(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var u = l[xn] || null;
                if (!u) throw Error(o(90));
                Tn(
                  l,
                  u.value,
                  u.defaultValue,
                  u.defaultValue,
                  u.checked,
                  u.defaultChecked,
                  u.type,
                  u.name
                );
              }
            }
            for (t = 0; t < n.length; t++)
              l = n[t], l.form === e.form && Lo(l);
          }
          break e;
        case "textarea":
          Fa(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && bn(e, !!n.multiple, t, !1);
      }
    }
  }
  var wr = !1;
  function Uo(e, t, n) {
    if (wr) return e(t, n);
    wr = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (wr = !1, (va !== null || Qa !== null) && (bc(), va && (t = va, e = Qa, Qa = va = null, Ki(t), e)))
        for (t = 0; t < e.length; t++) Ki(e[t]);
    }
  }
  function Ji(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[xn] || null;
    if (l === null) return null;
    n = l[t];
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
        (l = !l.disabled) || (e = e.type, l = !(e === "button" || e === "input" || e === "select" || e === "textarea")), e = !l;
        break e;
      default:
        e = !1;
    }
    if (e) return null;
    if (n && typeof n != "function")
      throw Error(
        o(231, t, typeof n)
      );
    return n;
  }
  var An = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), Bo = !1;
  if (An)
    try {
      var Wi = {};
      Object.defineProperty(Wi, "passive", {
        get: function() {
          Bo = !0;
        }
      }), window.addEventListener("test", Wi, Wi), window.removeEventListener("test", Wi, Wi);
    } catch {
      Bo = !1;
    }
  var ya = null, Pi = null, el = null;
  function bu() {
    if (el) return el;
    var e, t = Pi, n = t.length, l, u = "value" in ya ? ya.value : ya.textContent, f = u.length;
    for (e = 0; e < n && t[e] === u[e]; e++) ;
    var g = n - e;
    for (l = 1; l <= g && t[n - l] === u[f - l]; l++) ;
    return el = u.slice(e, 1 < l ? 1 - l : void 0);
  }
  function vi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Mr() {
    return !0;
  }
  function $o() {
    return !1;
  }
  function fn(e) {
    function t(n, l, u, f, g) {
      this._reactName = n, this._targetInst = u, this.type = l, this.nativeEvent = f, this.target = g, this.currentTarget = null;
      for (var _ in e)
        e.hasOwnProperty(_) && (n = e[_], this[_] = n ? n(f) : f[_]);
      return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Mr : $o, this.isPropagationStopped = $o, this;
    }
    return x(t.prototype, {
      preventDefault: function() {
        this.defaultPrevented = !0;
        var n = this.nativeEvent;
        n && (n.preventDefault ? n.preventDefault() : typeof n.returnValue != "unknown" && (n.returnValue = !1), this.isDefaultPrevented = Mr);
      },
      stopPropagation: function() {
        var n = this.nativeEvent;
        n && (n.stopPropagation ? n.stopPropagation() : typeof n.cancelBubble != "unknown" && (n.cancelBubble = !0), this.isPropagationStopped = Mr);
      },
      persist: function() {
      },
      isPersistent: Mr
    }), t;
  }
  var Ra = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, tl = fn(Ra), nl = x({}, Ra, { view: 0, detail: 0 }), Xl = fn(nl), Il, Rr, al, Da = x({}, nl, {
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
    getModifierState: Fl,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== al && (al && e.type === "mousemove" ? (Il = e.screenX - al.screenX, Rr = e.screenY - al.screenY) : Rr = Il = 0, al = e), Il);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Rr;
    }
  }), _u = fn(Da), Su = x({}, Da, { dataTransfer: 0 }), Eu = fn(Su), Cu = x({}, nl, { relatedTarget: 0 }), Dr = fn(Cu), Ou = x({}, Ra, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), ko = fn(Ou), xu = x({}, Ra, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), ed = fn(xu), td = x({}, Ra, { data: 0 }), qo = fn(td), Tu = {
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
  }, Nr = {
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
  }, nd = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function ad(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = nd[e]) ? !!t[e] : !1;
  }
  function Fl() {
    return ad;
  }
  var Au = x({}, nl, {
    key: function(e) {
      if (e.key) {
        var t = Tu[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = vi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Nr[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Fl,
    charCode: function(e) {
      return e.type === "keypress" ? vi(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? vi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), wu = fn(Au), yi = x({}, Da, {
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
  }), jr = fn(yi), id = x({}, nl, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Fl
  }), Mu = fn(id), ld = x({}, Ra, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), rd = fn(ld), od = x({}, Da, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), sd = fn(od), Ru = x({}, Ra, {
    newState: 0,
    oldState: 0
  }), Du = fn(Ru), ud = [9, 13, 27, 32], Za = An && "CompositionEvent" in window, ra = null;
  An && "documentMode" in document && (ra = document.documentMode);
  var cd = An && "TextEvent" in window && !ra, Ql = An && (!Za || ra && 8 < ra && 11 >= ra), Nu = " ", ju = !1;
  function zu(e, t) {
    switch (e) {
      case "keyup":
        return ud.indexOf(t.keyCode) !== -1;
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
  function Lu(e) {
    return e = e.detail, typeof e == "object" && "data" in e ? e.data : null;
  }
  var il = !1;
  function fd(e, t) {
    switch (e) {
      case "compositionend":
        return Lu(t);
      case "keypress":
        return t.which !== 32 ? null : (ju = !0, Nu);
      case "textInput":
        return e = t.data, e === Nu && ju ? null : e;
      default:
        return null;
    }
  }
  function dd(e, t) {
    if (il)
      return e === "compositionend" || !Za && zu(e, t) ? (e = bu(), el = Pi = ya = null, il = !1, e) : null;
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
        return Ql && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var hd = {
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
  function Qn(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!hd[e.type] : t === "textarea";
  }
  function Yo(e, t, n, l) {
    va ? Qa ? Qa.push(l) : Qa = [l] : va = l, t = Tc(t, "onChange"), 0 < t.length && (n = new tl(
      "onChange",
      "change",
      null,
      n,
      l
    ), e.push({ event: n, listeners: t }));
  }
  var ll = null, rl = null;
  function pd(e) {
    av(e, 0);
  }
  function zr(e) {
    var t = ma(e);
    if (Lo(t)) return e;
  }
  function Go(e, t) {
    if (e === "change") return t;
  }
  var Zl = !1;
  if (An) {
    var Xo;
    if (An) {
      var Io = "oninput" in document;
      if (!Io) {
        var Fo = document.createElement("div");
        Fo.setAttribute("oninput", "return;"), Io = typeof Fo.oninput == "function";
      }
      Xo = Io;
    } else Xo = !1;
    Zl = Xo && (!document.documentMode || 9 < document.documentMode);
  }
  function Hu() {
    ll && (ll.detachEvent("onpropertychange", Vu), rl = ll = null);
  }
  function Vu(e) {
    if (e.propertyName === "value" && zr(rl)) {
      var t = [];
      Yo(
        t,
        rl,
        e,
        Ar(e)
      ), Uo(pd, t);
    }
  }
  function Uu(e, t, n) {
    e === "focusin" ? (Hu(), ll = t, rl = n, ll.attachEvent("onpropertychange", Vu)) : e === "focusout" && Hu();
  }
  function Bu(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return zr(rl);
  }
  function $u(e, t) {
    if (e === "click") return zr(t);
  }
  function Lr(e, t) {
    if (e === "input" || e === "change")
      return zr(t);
  }
  function ku(e, t) {
    return e === t && (e !== 0 || 1 / e === 1 / t) || e !== e && t !== t;
  }
  var _n = typeof Object.is == "function" ? Object.is : ku;
  function dn(e, t) {
    if (_n(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var u = n[l];
      if (!on.call(t, u) || !_n(e[u], t[u]))
        return !1;
    }
    return !0;
  }
  function qu(e) {
    for (; e && e.firstChild; ) e = e.firstChild;
    return e;
  }
  function Yu(e, t) {
    var n = qu(e);
    e = 0;
    for (var l; n; ) {
      if (n.nodeType === 3) {
        if (l = e + n.textContent.length, e <= t && l >= t)
          return { node: n, offset: t - e };
        e = l;
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
      n = qu(n);
    }
  }
  function Qo(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Qo(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Zo(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = Hn(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = Hn(e.document);
    }
    return t;
  }
  function Ko(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var md = An && "documentMode" in document && 11 >= document.documentMode, ol = null, Jo = null, Kl = null, Wo = !1;
  function Po(e, t, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Wo || ol == null || ol !== Hn(l) || (l = ol, "selectionStart" in l && Ko(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Kl && dn(Kl, l) || (Kl = l, l = Tc(Jo, "onSelect"), 0 < l.length && (t = new tl(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: l }), t.target = ol)));
  }
  function Ka(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Ja = {
    animationend: Ka("Animation", "AnimationEnd"),
    animationiteration: Ka("Animation", "AnimationIteration"),
    animationstart: Ka("Animation", "AnimationStart"),
    transitionrun: Ka("Transition", "TransitionRun"),
    transitionstart: Ka("Transition", "TransitionStart"),
    transitioncancel: Ka("Transition", "TransitionCancel"),
    transitionend: Ka("Transition", "TransitionEnd")
  }, es = {}, Gu = {};
  An && (Gu = document.createElement("div").style, "AnimationEvent" in window || (delete Ja.animationend.animation, delete Ja.animationiteration.animation, delete Ja.animationstart.animation), "TransitionEvent" in window || delete Ja.transitionend.transition);
  function Un(e) {
    if (es[e]) return es[e];
    if (!Ja[e]) return e;
    var t = Ja[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in Gu)
        return es[e] = t[n];
    return e;
  }
  var ba = Un("animationend"), ts = Un("animationiteration"), Xu = Un("animationstart"), Iu = Un("transitionrun"), Fu = Un("transitionstart"), Qu = Un("transitioncancel"), ns = Un("transitionend"), Zu = /* @__PURE__ */ new Map(), as = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  as.push("scrollEnd");
  function oa(e, t) {
    Zu.set(e, t), Fn(t, [e]);
  }
  var Jl = typeof reportError == "function" ? reportError : function(e) {
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
  }, Bn = [], sl = 0, is = 0;
  function Hr() {
    for (var e = sl, t = is = sl = 0; t < e; ) {
      var n = Bn[t];
      Bn[t++] = null;
      var l = Bn[t];
      Bn[t++] = null;
      var u = Bn[t];
      Bn[t++] = null;
      var f = Bn[t];
      if (Bn[t++] = null, l !== null && u !== null) {
        var g = l.pending;
        g === null ? u.next = u : (u.next = g.next, g.next = u), l.pending = u;
      }
      f !== 0 && rs(n, u, f);
    }
  }
  function Vr(e, t, n, l) {
    Bn[sl++] = e, Bn[sl++] = t, Bn[sl++] = n, Bn[sl++] = l, is |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function ls(e, t, n, l) {
    return Vr(e, t, n, l), Ur(e);
  }
  function Sn(e, t) {
    return Vr(e, null, null, t), Ur(e);
  }
  function rs(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var u = !1, f = e.return; f !== null; )
      f.childLanes |= n, l = f.alternate, l !== null && (l.childLanes |= n), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & 1 || (u = !0)), e = f, f = f.return;
    return e.tag === 3 ? (f = e.stateNode, u && t !== null && (u = 31 - jn(n), e = f.hiddenUpdates, l = e[u], l === null ? e[u] = [t] : l.push(t), t.lane = n | 536870912), f) : null;
  }
  function Ur(e) {
    if (50 < Ds)
      throw Ds = 0, eh = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ul = {};
  function gd(e, t, n, l) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function $n(e, t, n, l) {
    return new gd(e, t, n, l);
  }
  function os(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Na(e, t) {
    var n = e.alternate;
    return n === null ? (n = $n(
      e.tag,
      t,
      e.key,
      e.mode
    ), n.elementType = e.elementType, n.type = e.type, n.stateNode = e.stateNode, n.alternate = e, e.alternate = n) : (n.pendingProps = t, n.type = e.type, n.flags = 0, n.subtreeFlags = 0, n.deletions = null), n.flags = e.flags & 65011712, n.childLanes = e.childLanes, n.lanes = e.lanes, n.child = e.child, n.memoizedProps = e.memoizedProps, n.memoizedState = e.memoizedState, n.updateQueue = e.updateQueue, t = e.dependencies, n.dependencies = t === null ? null : { lanes: t.lanes, firstContext: t.firstContext }, n.sibling = e.sibling, n.index = e.index, n.ref = e.ref, n.refCleanup = e.refCleanup, n;
  }
  function Ku(e, t) {
    e.flags &= 65011714;
    var n = e.alternate;
    return n === null ? (e.childLanes = 0, e.lanes = t, e.child = null, e.subtreeFlags = 0, e.memoizedProps = null, e.memoizedState = null, e.updateQueue = null, e.dependencies = null, e.stateNode = null) : (e.childLanes = n.childLanes, e.lanes = n.lanes, e.child = n.child, e.subtreeFlags = 0, e.deletions = null, e.memoizedProps = n.memoizedProps, e.memoizedState = n.memoizedState, e.updateQueue = n.updateQueue, e.type = n.type, t = n.dependencies, e.dependencies = t === null ? null : {
      lanes: t.lanes,
      firstContext: t.firstContext
    }), e;
  }
  function Br(e, t, n, l, u, f) {
    var g = 0;
    if (l = e, typeof e == "function") os(e) && (g = 1);
    else if (typeof e == "string")
      g = j_(
        e,
        n,
        ie.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case we:
          return e = $n(31, n, t, u), e.elementType = we, e.lanes = f, e;
        case N:
          return ja(n.children, u, f, t);
        case j:
          g = 8, u |= 24;
          break;
        case H:
          return e = $n(12, n, t, u | 2), e.elementType = H, e.lanes = f, e;
        case U:
          return e = $n(13, n, t, u), e.elementType = U, e.lanes = f, e;
        case Z:
          return e = $n(19, n, t, u), e.elementType = Z, e.lanes = f, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case X:
                g = 10;
                break e;
              case Q:
                g = 9;
                break e;
              case W:
                g = 11;
                break e;
              case B:
                g = 14;
                break e;
              case oe:
                g = 16, l = null;
                break e;
            }
          g = 29, n = Error(
            o(130, e === null ? "null" : typeof e, "")
          ), l = null;
      }
    return t = $n(g, n, t, u), t.elementType = e, t.type = l, t.lanes = f, t;
  }
  function ja(e, t, n, l) {
    return e = $n(7, e, l, t), e.lanes = n, e;
  }
  function cl(e, t, n) {
    return e = $n(6, e, null, t), e.lanes = n, e;
  }
  function Ju(e) {
    var t = $n(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function $r(e, t, n) {
    return t = $n(
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
  var ss = /* @__PURE__ */ new WeakMap();
  function hn(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = ss.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: wt(t)
      }, ss.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: wt(t)
    };
  }
  var Wa = [], Pa = 0, kr = null, Wl = 0, Zn = [], Zt = 0, ei = null, _a = 1, Sa = "";
  function za(e, t) {
    Wa[Pa++] = Wl, Wa[Pa++] = kr, kr = e, Wl = t;
  }
  function Pl(e, t, n) {
    Zn[Zt++] = _a, Zn[Zt++] = Sa, Zn[Zt++] = ei, ei = e;
    var l = _a;
    e = Sa;
    var u = 32 - jn(l) - 1;
    l &= ~(1 << u), n += 1;
    var f = 32 - jn(t) + u;
    if (30 < f) {
      var g = u - u % 5;
      f = (l & (1 << g) - 1).toString(32), l >>= g, u -= g, _a = 1 << 32 - jn(t) + u | n << u | l, Sa = f + e;
    } else
      _a = 1 << f | n << u | l, Sa = e;
  }
  function er(e) {
    e.return !== null && (za(e, 1), Pl(e, 1, 0));
  }
  function us(e) {
    for (; e === kr; )
      kr = Wa[--Pa], Wa[Pa] = null, Wl = Wa[--Pa], Wa[Pa] = null;
    for (; e === ei; )
      ei = Zn[--Zt], Zn[Zt] = null, Sa = Zn[--Zt], Zn[Zt] = null, _a = Zn[--Zt], Zn[Zt] = null;
  }
  function cs(e, t) {
    Zn[Zt++] = _a, Zn[Zt++] = Sa, Zn[Zt++] = ei, _a = t.id, Sa = t.overflow, ei = e;
  }
  var ln = null, nt = null, Xe = !1, La = null, Kn = !1, fs = Error(o(519));
  function ti(e) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw tr(hn(t, e)), fs;
  }
  function fl(e) {
    var t = e.stateNode, n = e.type, l = e.memoizedProps;
    switch (t[$t] = e, t[xn] = l, n) {
      case "dialog":
        Qe("cancel", t), Qe("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Qe("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < js.length; n++)
          Qe(js[n], t);
        break;
      case "source":
        Qe("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Qe("error", t), Qe("load", t);
        break;
      case "details":
        Qe("toggle", t);
        break;
      case "input":
        Qe("invalid", t), xr(
          t,
          l.value,
          l.defaultValue,
          l.checked,
          l.defaultChecked,
          l.type,
          l.name,
          !0
        );
        break;
      case "select":
        Qe("invalid", t);
        break;
      case "textarea":
        Qe("invalid", t), Yl(t, l.value, l.defaultValue, l.children);
    }
    n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || l.suppressHydrationWarning === !0 || ov(t.textContent, n) ? (l.popover != null && (Qe("beforetoggle", t), Qe("toggle", t)), l.onScroll != null && Qe("scroll", t), l.onScrollEnd != null && Qe("scrollend", t), l.onClick != null && (t.onclick = cn), t = !0) : t = !1, t || ti(e, !0);
  }
  function ni(e) {
    for (ln = e.return; ln; )
      switch (ln.tag) {
        case 5:
        case 31:
        case 13:
          Kn = !1;
          return;
        case 27:
        case 3:
          Kn = !0;
          return;
        default:
          ln = ln.return;
      }
  }
  function dl(e) {
    if (e !== ln) return !1;
    if (!Xe) return ni(e), Xe = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || mh(e.type, e.memoizedProps)), n = !n), n && nt && ti(e), ni(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      nt = gv(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      nt = gv(e);
    } else
      t === 27 ? (t = nt, Tl(e.type) ? (e = _h, _h = null, nt = e) : nt = t) : nt = ln ? Oa(e.stateNode.nextSibling) : null;
    return !0;
  }
  function bi() {
    nt = ln = null, Xe = !1;
  }
  function ds() {
    var e = La;
    return e !== null && (ta === null ? ta = e : ta.push.apply(
      ta,
      e
    ), La = null), e;
  }
  function tr(e) {
    La === null ? La = [e] : La.push(e);
  }
  var hs = O(null), _i = null, Ha = null;
  function ai(e, t, n) {
    ee(hs, t._currentValue), t._currentValue = n;
  }
  function Ea(e) {
    e._currentValue = hs.current, Y(hs);
  }
  function ps(e, t, n) {
    for (; e !== null; ) {
      var l = e.alternate;
      if ((e.childLanes & t) !== t ? (e.childLanes |= t, l !== null && (l.childLanes |= t)) : l !== null && (l.childLanes & t) !== t && (l.childLanes |= t), e === n) break;
      e = e.return;
    }
  }
  function qr(e, t, n, l) {
    var u = e.child;
    for (u !== null && (u.return = e); u !== null; ) {
      var f = u.dependencies;
      if (f !== null) {
        var g = u.child;
        f = f.firstContext;
        e: for (; f !== null; ) {
          var _ = f;
          f = u;
          for (var w = 0; w < t.length; w++)
            if (_.context === t[w]) {
              f.lanes |= n, _ = f.alternate, _ !== null && (_.lanes |= n), ps(
                f.return,
                n,
                e
              ), l || (g = null);
              break e;
            }
          f = _.next;
        }
      } else if (u.tag === 18) {
        if (g = u.return, g === null) throw Error(o(341));
        g.lanes |= n, f = g.alternate, f !== null && (f.lanes |= n), ps(g, n, e), g = null;
      } else g = u.child;
      if (g !== null) g.return = u;
      else
        for (g = u; g !== null; ) {
          if (g === e) {
            g = null;
            break;
          }
          if (u = g.sibling, u !== null) {
            u.return = g.return, g = u;
            break;
          }
          g = g.return;
        }
      u = g;
    }
  }
  function ii(e, t, n, l) {
    e = null;
    for (var u = t, f = !1; u !== null; ) {
      if (!f) {
        if ((u.flags & 524288) !== 0) f = !0;
        else if ((u.flags & 262144) !== 0) break;
      }
      if (u.tag === 10) {
        var g = u.alternate;
        if (g === null) throw Error(o(387));
        if (g = g.memoizedProps, g !== null) {
          var _ = u.type;
          _n(u.pendingProps.value, g.value) || (e !== null ? e.push(_) : e = [_]);
        }
      } else if (u === he.current) {
        if (g = u.alternate, g === null) throw Error(o(387));
        g.memoizedState.memoizedState !== u.memoizedState.memoizedState && (e !== null ? e.push(Us) : e = [Us]);
      }
      u = u.return;
    }
    e !== null && qr(
      t,
      e,
      n,
      l
    ), t.flags |= 262144;
  }
  function nr(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!_n(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function kn(e) {
    _i = e, Ha = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Kt(e) {
    return ms(_i, e);
  }
  function hl(e, t) {
    return _i === null && kn(e), ms(e, t);
  }
  function ms(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, Ha === null) {
      if (e === null) throw Error(o(308));
      Ha = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else Ha = Ha.next = t;
    return n;
  }
  var gs = typeof AbortController < "u" ? AbortController : function() {
    var e = [], t = this.signal = {
      aborted: !1,
      addEventListener: function(n, l) {
        e.push(l);
      }
    };
    this.abort = function() {
      t.aborted = !0, e.forEach(function(n) {
        return n();
      });
    };
  }, Wu = a.unstable_scheduleCallback, vs = a.unstable_NormalPriority, qt = {
    $$typeof: X,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function Va() {
    return {
      controller: new gs(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Jn(e) {
    e.refCount--, e.refCount === 0 && Wu(vs, function() {
      e.controller.abort();
    });
  }
  var ar = null, ys = 0, pl = 0, ml = null;
  function vd(e, t) {
    if (ar === null) {
      var n = ar = [];
      ys = 0, pl = rh(), ml = {
        status: "pending",
        value: void 0,
        then: function(l) {
          n.push(l);
        }
      };
    }
    return ys++, t.then(Pu, Pu), t;
  }
  function Pu() {
    if (--ys === 0 && ar !== null) {
      ml !== null && (ml.status = "fulfilled");
      var e = ar;
      ar = null, pl = 0, ml = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function yd(e, t) {
    var n = [], l = {
      status: "pending",
      value: null,
      reason: null,
      then: function(u) {
        n.push(u);
      }
    };
    return e.then(
      function() {
        l.status = "fulfilled", l.value = t;
        for (var u = 0; u < n.length; u++) (0, n[u])(t);
      },
      function(u) {
        for (l.status = "rejected", l.reason = u, u = 0; u < n.length; u++)
          (0, n[u])(void 0);
      }
    ), l;
  }
  var ec = k.S;
  k.S = function(e, t) {
    Dg = sn(), typeof t == "object" && t !== null && typeof t.then == "function" && vd(e, t), ec !== null && ec(e, t);
  };
  var li = O(null);
  function gl() {
    var e = li.current;
    return e !== null ? e : Et.pooledCache;
  }
  function Si(e, t) {
    t === null ? ee(li, li.current) : ee(li, t.pool);
  }
  function tc() {
    var e = gl();
    return e === null ? null : { parent: qt._currentValue, pool: e };
  }
  var vl = Error(o(460)), Ei = Error(o(474)), b = Error(o(542)), c = { then: function() {
  } };
  function p(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function E(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(cn, cn), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, te(e), e;
      default:
        if (typeof t.status == "string") t.then(cn, cn);
        else {
          if (e = Et, e !== null && 100 < e.shellSuspendCounter)
            throw Error(o(482));
          e = t, e.status = "pending", e.then(
            function(l) {
              if (t.status === "pending") {
                var u = t;
                u.status = "fulfilled", u.value = l;
              }
            },
            function(l) {
              if (t.status === "pending") {
                var u = t;
                u.status = "rejected", u.reason = l;
              }
            }
          );
        }
        switch (t.status) {
          case "fulfilled":
            return t.value;
          case "rejected":
            throw e = t.reason, te(e), e;
        }
        throw z = t, vl;
    }
  }
  function D(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (z = n, vl) : n;
    }
  }
  var z = null;
  function F() {
    if (z === null) throw Error(o(459));
    var e = z;
    return z = null, e;
  }
  function te(e) {
    if (e === vl || e === b)
      throw Error(o(483));
  }
  var re = null, fe = 0;
  function de(e) {
    var t = fe;
    return fe += 1, re === null && (re = []), E(re, e, t);
  }
  function se(e, t) {
    t = t.props.ref, e.ref = t !== void 0 ? t : null;
  }
  function De(e, t) {
    throw t.$$typeof === A ? Error(o(525)) : (e = Object.prototype.toString.call(t), Error(
      o(
        31,
        e === "[object Object]" ? "object with keys {" + Object.keys(t).join(", ") + "}" : e
      )
    ));
  }
  function Oe(e) {
    function t(V, M) {
      if (e) {
        var $ = V.deletions;
        $ === null ? (V.deletions = [M], V.flags |= 16) : $.push(M);
      }
    }
    function n(V, M) {
      if (!e) return null;
      for (; M !== null; )
        t(V, M), M = M.sibling;
      return null;
    }
    function l(V) {
      for (var M = /* @__PURE__ */ new Map(); V !== null; )
        V.key !== null ? M.set(V.key, V) : M.set(V.index, V), V = V.sibling;
      return M;
    }
    function u(V, M) {
      return V = Na(V, M), V.index = 0, V.sibling = null, V;
    }
    function f(V, M, $) {
      return V.index = $, e ? ($ = V.alternate, $ !== null ? ($ = $.index, $ < M ? (V.flags |= 67108866, M) : $) : (V.flags |= 67108866, M)) : (V.flags |= 1048576, M);
    }
    function g(V) {
      return e && V.alternate === null && (V.flags |= 67108866), V;
    }
    function _(V, M, $, J) {
      return M === null || M.tag !== 6 ? (M = cl($, V.mode, J), M.return = V, M) : (M = u(M, $), M.return = V, M);
    }
    function w(V, M, $, J) {
      var _e = $.type;
      return _e === N ? K(
        V,
        M,
        $.props.children,
        J,
        $.key
      ) : M !== null && (M.elementType === _e || typeof _e == "object" && _e !== null && _e.$$typeof === oe && D(_e) === M.type) ? (M = u(M, $.props), se(M, $), M.return = V, M) : (M = Br(
        $.type,
        $.key,
        $.props,
        null,
        V.mode,
        J
      ), se(M, $), M.return = V, M);
    }
    function q(V, M, $, J) {
      return M === null || M.tag !== 4 || M.stateNode.containerInfo !== $.containerInfo || M.stateNode.implementation !== $.implementation ? (M = $r($, V.mode, J), M.return = V, M) : (M = u(M, $.children || []), M.return = V, M);
    }
    function K(V, M, $, J, _e) {
      return M === null || M.tag !== 7 ? (M = ja(
        $,
        V.mode,
        J,
        _e
      ), M.return = V, M) : (M = u(M, $), M.return = V, M);
    }
    function P(V, M, $) {
      if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
        return M = cl(
          "" + M,
          V.mode,
          $
        ), M.return = V, M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case R:
            return $ = Br(
              M.type,
              M.key,
              M.props,
              null,
              V.mode,
              $
            ), se($, M), $.return = V, $;
          case L:
            return M = $r(
              M,
              V.mode,
              $
            ), M.return = V, M;
          case oe:
            return M = D(M), P(V, M, $);
        }
        if (Ue(M) || Ve(M))
          return M = ja(
            M,
            V.mode,
            $,
            null
          ), M.return = V, M;
        if (typeof M.then == "function")
          return P(V, de(M), $);
        if (M.$$typeof === X)
          return P(
            V,
            hl(V, M),
            $
          );
        De(V, M);
      }
      return null;
    }
    function G(V, M, $, J) {
      var _e = M !== null ? M.key : null;
      if (typeof $ == "string" && $ !== "" || typeof $ == "number" || typeof $ == "bigint")
        return _e !== null ? null : _(V, M, "" + $, J);
      if (typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case R:
            return $.key === _e ? w(V, M, $, J) : null;
          case L:
            return $.key === _e ? q(V, M, $, J) : null;
          case oe:
            return $ = D($), G(V, M, $, J);
        }
        if (Ue($) || Ve($))
          return _e !== null ? null : K(V, M, $, J, null);
        if (typeof $.then == "function")
          return G(
            V,
            M,
            de($),
            J
          );
        if ($.$$typeof === X)
          return G(
            V,
            M,
            hl(V, $),
            J
          );
        De(V, $);
      }
      return null;
    }
    function I(V, M, $, J, _e) {
      if (typeof J == "string" && J !== "" || typeof J == "number" || typeof J == "bigint")
        return V = V.get($) || null, _(M, V, "" + J, _e);
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case R:
            return V = V.get(
              J.key === null ? $ : J.key
            ) || null, w(M, V, J, _e);
          case L:
            return V = V.get(
              J.key === null ? $ : J.key
            ) || null, q(M, V, J, _e);
          case oe:
            return J = D(J), I(
              V,
              M,
              $,
              J,
              _e
            );
        }
        if (Ue(J) || Ve(J))
          return V = V.get($) || null, K(M, V, J, _e, null);
        if (typeof J.then == "function")
          return I(
            V,
            M,
            $,
            de(J),
            _e
          );
        if (J.$$typeof === X)
          return I(
            V,
            M,
            $,
            hl(M, J),
            _e
          );
        De(M, J);
      }
      return null;
    }
    function pe(V, M, $, J) {
      for (var _e = null, it = null, me = M, qe = M = 0, Ke = null; me !== null && qe < $.length; qe++) {
        me.index > qe ? (Ke = me, me = null) : Ke = me.sibling;
        var lt = G(
          V,
          me,
          $[qe],
          J
        );
        if (lt === null) {
          me === null && (me = Ke);
          break;
        }
        e && me && lt.alternate === null && t(V, me), M = f(lt, M, qe), it === null ? _e = lt : it.sibling = lt, it = lt, me = Ke;
      }
      if (qe === $.length)
        return n(V, me), Xe && za(V, qe), _e;
      if (me === null) {
        for (; qe < $.length; qe++)
          me = P(V, $[qe], J), me !== null && (M = f(
            me,
            M,
            qe
          ), it === null ? _e = me : it.sibling = me, it = me);
        return Xe && za(V, qe), _e;
      }
      for (me = l(me); qe < $.length; qe++)
        Ke = I(
          me,
          V,
          qe,
          $[qe],
          J
        ), Ke !== null && (e && Ke.alternate !== null && me.delete(
          Ke.key === null ? qe : Ke.key
        ), M = f(
          Ke,
          M,
          qe
        ), it === null ? _e = Ke : it.sibling = Ke, it = Ke);
      return e && me.forEach(function(Dl) {
        return t(V, Dl);
      }), Xe && za(V, qe), _e;
    }
    function Te(V, M, $, J) {
      if ($ == null) throw Error(o(151));
      for (var _e = null, it = null, me = M, qe = M = 0, Ke = null, lt = $.next(); me !== null && !lt.done; qe++, lt = $.next()) {
        me.index > qe ? (Ke = me, me = null) : Ke = me.sibling;
        var Dl = G(V, me, lt.value, J);
        if (Dl === null) {
          me === null && (me = Ke);
          break;
        }
        e && me && Dl.alternate === null && t(V, me), M = f(Dl, M, qe), it === null ? _e = Dl : it.sibling = Dl, it = Dl, me = Ke;
      }
      if (lt.done)
        return n(V, me), Xe && za(V, qe), _e;
      if (me === null) {
        for (; !lt.done; qe++, lt = $.next())
          lt = P(V, lt.value, J), lt !== null && (M = f(lt, M, qe), it === null ? _e = lt : it.sibling = lt, it = lt);
        return Xe && za(V, qe), _e;
      }
      for (me = l(me); !lt.done; qe++, lt = $.next())
        lt = I(me, V, qe, lt.value, J), lt !== null && (e && lt.alternate !== null && me.delete(lt.key === null ? qe : lt.key), M = f(lt, M, qe), it === null ? _e = lt : it.sibling = lt, it = lt);
      return e && me.forEach(function(G_) {
        return t(V, G_);
      }), Xe && za(V, qe), _e;
    }
    function bt(V, M, $, J) {
      if (typeof $ == "object" && $ !== null && $.type === N && $.key === null && ($ = $.props.children), typeof $ == "object" && $ !== null) {
        switch ($.$$typeof) {
          case R:
            e: {
              for (var _e = $.key; M !== null; ) {
                if (M.key === _e) {
                  if (_e = $.type, _e === N) {
                    if (M.tag === 7) {
                      n(
                        V,
                        M.sibling
                      ), J = u(
                        M,
                        $.props.children
                      ), J.return = V, V = J;
                      break e;
                    }
                  } else if (M.elementType === _e || typeof _e == "object" && _e !== null && _e.$$typeof === oe && D(_e) === M.type) {
                    n(
                      V,
                      M.sibling
                    ), J = u(M, $.props), se(J, $), J.return = V, V = J;
                    break e;
                  }
                  n(V, M);
                  break;
                } else t(V, M);
                M = M.sibling;
              }
              $.type === N ? (J = ja(
                $.props.children,
                V.mode,
                J,
                $.key
              ), J.return = V, V = J) : (J = Br(
                $.type,
                $.key,
                $.props,
                null,
                V.mode,
                J
              ), se(J, $), J.return = V, V = J);
            }
            return g(V);
          case L:
            e: {
              for (_e = $.key; M !== null; ) {
                if (M.key === _e)
                  if (M.tag === 4 && M.stateNode.containerInfo === $.containerInfo && M.stateNode.implementation === $.implementation) {
                    n(
                      V,
                      M.sibling
                    ), J = u(M, $.children || []), J.return = V, V = J;
                    break e;
                  } else {
                    n(V, M);
                    break;
                  }
                else t(V, M);
                M = M.sibling;
              }
              J = $r($, V.mode, J), J.return = V, V = J;
            }
            return g(V);
          case oe:
            return $ = D($), bt(
              V,
              M,
              $,
              J
            );
        }
        if (Ue($))
          return pe(
            V,
            M,
            $,
            J
          );
        if (Ve($)) {
          if (_e = Ve($), typeof _e != "function") throw Error(o(150));
          return $ = _e.call($), Te(
            V,
            M,
            $,
            J
          );
        }
        if (typeof $.then == "function")
          return bt(
            V,
            M,
            de($),
            J
          );
        if ($.$$typeof === X)
          return bt(
            V,
            M,
            hl(V, $),
            J
          );
        De(V, $);
      }
      return typeof $ == "string" && $ !== "" || typeof $ == "number" || typeof $ == "bigint" ? ($ = "" + $, M !== null && M.tag === 6 ? (n(V, M.sibling), J = u(M, $), J.return = V, V = J) : (n(V, M), J = cl($, V.mode, J), J.return = V, V = J), g(V)) : n(V, M);
    }
    return function(V, M, $, J) {
      try {
        fe = 0;
        var _e = bt(
          V,
          M,
          $,
          J
        );
        return re = null, _e;
      } catch (me) {
        if (me === vl || me === b) throw me;
        var it = $n(29, me, null, V.mode);
        return it.lanes = J, it.return = V, it;
      } finally {
      }
    };
  }
  var xe = Oe(!0), Me = Oe(!1), Ce = !1;
  function at(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function ct(e, t) {
    e = e.updateQueue, t.updateQueue === e && (t.updateQueue = {
      baseState: e.baseState,
      firstBaseUpdate: e.firstBaseUpdate,
      lastBaseUpdate: e.lastBaseUpdate,
      shared: e.shared,
      callbacks: null
    });
  }
  function Re(e) {
    return { lane: e, tag: 0, payload: null, callback: null, next: null };
  }
  function Ye(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (rt & 2) !== 0) {
      var u = l.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t, t = Ur(e), rs(e, null, n), t;
    }
    return Vr(e, l, t, n), Ur(e);
  }
  function Ne(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, hu(e, n);
    }
  }
  function Ie(e, t) {
    var n = e.updateQueue, l = e.alternate;
    if (l !== null && (l = l.updateQueue, n === l)) {
      var u = null, f = null;
      if (n = n.firstBaseUpdate, n !== null) {
        do {
          var g = {
            lane: n.lane,
            tag: n.tag,
            payload: n.payload,
            callback: null,
            next: null
          };
          f === null ? u = f = g : f = f.next = g, n = n.next;
        } while (n !== null);
        f === null ? u = f = t : f = f.next = t;
      } else u = f = t;
      n = {
        baseState: l.baseState,
        firstBaseUpdate: u,
        lastBaseUpdate: f,
        shared: l.shared,
        callbacks: l.callbacks
      }, e.updateQueue = n;
      return;
    }
    e = n.lastBaseUpdate, e === null ? n.firstBaseUpdate = t : e.next = t, n.lastBaseUpdate = t;
  }
  var Pe = !1;
  function We() {
    if (Pe) {
      var e = ml;
      if (e !== null) throw e;
    }
  }
  function Je(e, t, n, l) {
    Pe = !1;
    var u = e.updateQueue;
    Ce = !1;
    var f = u.firstBaseUpdate, g = u.lastBaseUpdate, _ = u.shared.pending;
    if (_ !== null) {
      u.shared.pending = null;
      var w = _, q = w.next;
      w.next = null, g === null ? f = q : g.next = q, g = w;
      var K = e.alternate;
      K !== null && (K = K.updateQueue, _ = K.lastBaseUpdate, _ !== g && (_ === null ? K.firstBaseUpdate = q : _.next = q, K.lastBaseUpdate = w));
    }
    if (f !== null) {
      var P = u.baseState;
      g = 0, K = q = w = null, _ = f;
      do {
        var G = _.lane & -536870913, I = G !== _.lane;
        if (I ? (Ze & G) === G : (l & G) === G) {
          G !== 0 && G === pl && (Pe = !0), K !== null && (K = K.next = {
            lane: 0,
            tag: _.tag,
            payload: _.payload,
            callback: null,
            next: null
          });
          e: {
            var pe = e, Te = _;
            G = t;
            var bt = n;
            switch (Te.tag) {
              case 1:
                if (pe = Te.payload, typeof pe == "function") {
                  P = pe.call(bt, P, G);
                  break e;
                }
                P = pe;
                break e;
              case 3:
                pe.flags = pe.flags & -65537 | 128;
              case 0:
                if (pe = Te.payload, G = typeof pe == "function" ? pe.call(bt, P, G) : pe, G == null) break e;
                P = x({}, P, G);
                break e;
              case 2:
                Ce = !0;
            }
          }
          G = _.callback, G !== null && (e.flags |= 64, I && (e.flags |= 8192), I = u.callbacks, I === null ? u.callbacks = [G] : I.push(G));
        } else
          I = {
            lane: G,
            tag: _.tag,
            payload: _.payload,
            callback: _.callback,
            next: null
          }, K === null ? (q = K = I, w = P) : K = K.next = I, g |= G;
        if (_ = _.next, _ === null) {
          if (_ = u.shared.pending, _ === null)
            break;
          I = _, _ = I.next, I.next = null, u.lastBaseUpdate = I, u.shared.pending = null;
        }
      } while (!0);
      K === null && (w = P), u.baseState = w, u.firstBaseUpdate = q, u.lastBaseUpdate = K, f === null && (u.shared.lanes = 0), Sl |= g, e.lanes = g, e.memoizedState = P;
    }
  }
  function Nt(e, t) {
    if (typeof e != "function")
      throw Error(o(191, e));
    e.call(t);
  }
  function wn(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        Nt(n[e], t);
  }
  var pn = O(null), Jt = O(0);
  function qn(e, t) {
    e = ji, ee(Jt, e), ee(pn, t), ji = e | t.baseLanes;
  }
  function Mn() {
    ee(Jt, ji), ee(pn, pn.current);
  }
  function Tt() {
    ji = Jt.current, Y(pn), Y(Jt);
  }
  var jt = O(null), Ut = null;
  function Yn(e) {
    var t = e.alternate;
    ee(dt, dt.current & 1), ee(jt, e), Ut === null && (t === null || pn.current !== null || t.memoizedState !== null) && (Ut = e);
  }
  function Yt(e) {
    ee(dt, dt.current), ee(jt, e), Ut === null && (Ut = e);
  }
  function ft(e) {
    e.tag === 22 ? (ee(dt, dt.current), ee(jt, e), Ut === null && (Ut = e)) : zt();
  }
  function zt() {
    ee(dt, dt.current), ee(jt, jt.current);
  }
  function At(e) {
    Y(jt), Ut === e && (Ut = null), Y(dt);
  }
  var dt = O(0);
  function Ci(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || yh(n) || bh(n)))
          return t;
      } else if (t.tag === 19 && (t.memoizedProps.revealOrder === "forwards" || t.memoizedProps.revealOrder === "backwards" || t.memoizedProps.revealOrder === "unstable_legacy-backwards" || t.memoizedProps.revealOrder === "together")) {
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
  var Ca = 0, ze = null, et = null, Gt = null, Yr = !1, ri = !1, Oi = !1, ir = 0, lr = 0, xi = null, nc = 0;
  function Lt() {
    throw Error(o(321));
  }
  function bs(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!_n(e[n], t[n])) return !1;
    return !0;
  }
  function Ua(e, t, n, l, u, f) {
    return Ca = f, ze = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, k.H = e === null || e.memoizedState === null ? qm : Md, Oi = !1, f = n(l, u), Oi = !1, ri && (f = _s(
      t,
      n,
      l,
      u
    )), rr(e), f;
  }
  function rr(e) {
    k.H = Es;
    var t = et !== null && et.next !== null;
    if (Ca = 0, Gt = et = ze = null, Yr = !1, lr = 0, xi = null, t) throw Error(o(300));
    e === null || Wt || (e = e.dependencies, e !== null && nr(e) && (Wt = !0));
  }
  function _s(e, t, n, l) {
    ze = e;
    var u = 0;
    do {
      if (ri && (xi = null), lr = 0, ri = !1, 25 <= u) throw Error(o(301));
      if (u += 1, Gt = et = null, e.updateQueue != null) {
        var f = e.updateQueue;
        f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
      }
      k.H = Ym, f = t(n, l);
    } while (ri);
    return f;
  }
  function ac() {
    var e = k.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? sr(t) : t, e = e.useState()[0], (et !== null ? et.memoizedState : null) !== e && (ze.flags |= 1024), t;
  }
  function or() {
    var e = ir !== 0;
    return ir = 0, e;
  }
  function Gr(e, t, n) {
    t.updateQueue = e.updateQueue, t.flags &= -2053, e.lanes &= ~n;
  }
  function Xr(e) {
    if (Yr) {
      for (e = e.memoizedState; e !== null; ) {
        var t = e.queue;
        t !== null && (t.pending = null), e = e.next;
      }
      Yr = !1;
    }
    Ca = 0, Gt = et = ze = null, ri = !1, lr = ir = 0, xi = null;
  }
  function mn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Gt === null ? ze.memoizedState = Gt = e : Gt = Gt.next = e, Gt;
  }
  function Ht() {
    if (et === null) {
      var e = ze.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = et.next;
    var t = Gt === null ? ze.memoizedState : Gt.next;
    if (t !== null)
      Gt = t, et = e;
    else {
      if (e === null)
        throw ze.alternate === null ? Error(o(467)) : Error(o(310));
      et = e, e = {
        memoizedState: et.memoizedState,
        baseState: et.baseState,
        baseQueue: et.baseQueue,
        queue: et.queue,
        next: null
      }, Gt === null ? ze.memoizedState = Gt = e : Gt = Gt.next = e;
    }
    return Gt;
  }
  function Ir() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function sr(e) {
    var t = lr;
    return lr += 1, xi === null && (xi = []), e = E(xi, e, t), t = ze, (Gt === null ? t.memoizedState : Gt.next) === null && (t = t.alternate, k.H = t === null || t.memoizedState === null ? qm : Md), e;
  }
  function yl(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return sr(e);
      if (e.$$typeof === X) return Kt(e);
    }
    throw Error(o(438, String(e)));
  }
  function Fr(e) {
    var t = null, n = ze.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var l = ze.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = Ir(), ze.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++)
        n[l] = je;
    return t.index++, n;
  }
  function Ti(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ic(e) {
    var t = Ht();
    return bd(t, et, e);
  }
  function bd(e, t, n) {
    var l = e.queue;
    if (l === null) throw Error(o(311));
    l.lastRenderedReducer = n;
    var u = e.baseQueue, f = l.pending;
    if (f !== null) {
      if (u !== null) {
        var g = u.next;
        u.next = f.next, f.next = g;
      }
      t.baseQueue = u = f, l.pending = null;
    }
    if (f = e.baseState, u === null) e.memoizedState = f;
    else {
      t = u.next;
      var _ = g = null, w = null, q = t, K = !1;
      do {
        var P = q.lane & -536870913;
        if (P !== q.lane ? (Ze & P) === P : (Ca & P) === P) {
          var G = q.revertLane;
          if (G === 0)
            w !== null && (w = w.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null
            }), P === pl && (K = !0);
          else if ((Ca & G) === G) {
            q = q.next, G === pl && (K = !0);
            continue;
          } else
            P = {
              lane: 0,
              revertLane: q.revertLane,
              gesture: null,
              action: q.action,
              hasEagerState: q.hasEagerState,
              eagerState: q.eagerState,
              next: null
            }, w === null ? (_ = w = P, g = f) : w = w.next = P, ze.lanes |= G, Sl |= G;
          P = q.action, Oi && n(f, P), f = q.hasEagerState ? q.eagerState : n(f, P);
        } else
          G = {
            lane: P,
            revertLane: q.revertLane,
            gesture: q.gesture,
            action: q.action,
            hasEagerState: q.hasEagerState,
            eagerState: q.eagerState,
            next: null
          }, w === null ? (_ = w = G, g = f) : w = w.next = G, ze.lanes |= P, Sl |= P;
        q = q.next;
      } while (q !== null && q !== t);
      if (w === null ? g = f : w.next = _, !_n(f, e.memoizedState) && (Wt = !0, K && (n = ml, n !== null)))
        throw n;
      e.memoizedState = f, e.baseState = g, e.baseQueue = w, l.lastRenderedState = f;
    }
    return u === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function _d(e) {
    var t = Ht(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch, u = n.pending, f = t.memoizedState;
    if (u !== null) {
      n.pending = null;
      var g = u = u.next;
      do
        f = e(f, g.action), g = g.next;
      while (g !== u);
      _n(f, t.memoizedState) || (Wt = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), n.lastRenderedState = f;
    }
    return [f, l];
  }
  function sm(e, t, n) {
    var l = ze, u = Ht(), f = Xe;
    if (f) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else n = t();
    var g = !_n(
      (et || u).memoizedState,
      n
    );
    if (g && (u.memoizedState = n, Wt = !0), u = u.queue, Cd(fm.bind(null, l, u, e), [
      e
    ]), u.getSnapshot !== t || g || Gt !== null && Gt.memoizedState.tag & 1) {
      if (l.flags |= 2048, Qr(
        9,
        { destroy: void 0 },
        cm.bind(
          null,
          l,
          u,
          n,
          t
        ),
        null
      ), Et === null) throw Error(o(349));
      f || (Ca & 127) !== 0 || um(l, t, n);
    }
    return n;
  }
  function um(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = ze.updateQueue, t === null ? (t = Ir(), ze.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function cm(e, t, n, l) {
    t.value = n, t.getSnapshot = l, dm(t) && hm(e);
  }
  function fm(e, t, n) {
    return n(function() {
      dm(t) && hm(e);
    });
  }
  function dm(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !_n(e, n);
    } catch {
      return !0;
    }
  }
  function hm(e) {
    var t = Sn(e, 2);
    t !== null && na(t, e, 2);
  }
  function Sd(e) {
    var t = mn();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), Oi) {
        ha(!0);
        try {
          n();
        } finally {
          ha(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Ti,
      lastRenderedState: e
    }, t;
  }
  function pm(e, t, n, l) {
    return e.baseState = n, bd(
      e,
      et,
      typeof l == "function" ? l : Ti
    );
  }
  function H1(e, t, n, l, u) {
    if (oc(e)) throw Error(o(485));
    if (e = t.action, e !== null) {
      var f = {
        payload: u,
        action: e,
        next: null,
        isTransition: !0,
        status: "pending",
        value: null,
        reason: null,
        listeners: [],
        then: function(g) {
          f.listeners.push(g);
        }
      };
      k.T !== null ? n(!0) : f.isTransition = !1, l(f), n = t.pending, n === null ? (f.next = t.pending = f, mm(t, f)) : (f.next = n.next, t.pending = n.next = f);
    }
  }
  function mm(e, t) {
    var n = t.action, l = t.payload, u = e.state;
    if (t.isTransition) {
      var f = k.T, g = {};
      k.T = g;
      try {
        var _ = n(u, l), w = k.S;
        w !== null && w(g, _), gm(e, t, _);
      } catch (q) {
        Ed(e, t, q);
      } finally {
        f !== null && g.types !== null && (f.types = g.types), k.T = f;
      }
    } else
      try {
        f = n(u, l), gm(e, t, f);
      } catch (q) {
        Ed(e, t, q);
      }
  }
  function gm(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(l) {
        vm(e, t, l);
      },
      function(l) {
        return Ed(e, t, l);
      }
    ) : vm(e, t, n);
  }
  function vm(e, t, n) {
    t.status = "fulfilled", t.value = n, ym(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, mm(e, n)));
  }
  function Ed(e, t, n) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = n, ym(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function ym(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function bm(e, t) {
    return t;
  }
  function _m(e, t) {
    if (Xe) {
      var n = Et.formState;
      if (n !== null) {
        e: {
          var l = ze;
          if (Xe) {
            if (nt) {
              t: {
                for (var u = nt, f = Kn; u.nodeType !== 8; ) {
                  if (!f) {
                    u = null;
                    break t;
                  }
                  if (u = Oa(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break t;
                  }
                }
                f = u.data, u = f === "F!" || f === "F" ? u : null;
              }
              if (u) {
                nt = Oa(
                  u.nextSibling
                ), l = u.data === "F!";
                break e;
              }
            }
            ti(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return n = mn(), n.memoizedState = n.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: bm,
      lastRenderedState: t
    }, n.queue = l, n = Bm.bind(
      null,
      ze,
      l
    ), l.dispatch = n, l = Sd(!1), f = wd.bind(
      null,
      ze,
      !1,
      l.queue
    ), l = mn(), u = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = u, n = H1.bind(
      null,
      ze,
      u,
      f,
      n
    ), u.dispatch = n, l.memoizedState = e, [t, n, !1];
  }
  function Sm(e) {
    var t = Ht();
    return Em(t, et, e);
  }
  function Em(e, t, n) {
    if (t = bd(
      e,
      t,
      bm
    )[0], e = ic(Ti)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = sr(t);
      } catch (g) {
        throw g === vl ? b : g;
      }
    else l = t;
    t = Ht();
    var u = t.queue, f = u.dispatch;
    return n !== t.memoizedState && (ze.flags |= 2048, Qr(
      9,
      { destroy: void 0 },
      V1.bind(null, u, n),
      null
    )), [l, f, e];
  }
  function V1(e, t) {
    e.action = t;
  }
  function Cm(e) {
    var t = Ht(), n = et;
    if (n !== null)
      return Em(t, n, e);
    Ht(), t = t.memoizedState, n = Ht();
    var l = n.queue.dispatch;
    return n.memoizedState = e, [t, l, !1];
  }
  function Qr(e, t, n, l) {
    return e = { tag: e, create: n, deps: l, inst: t, next: null }, t = ze.updateQueue, t === null && (t = Ir(), ze.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (l = n.next, n.next = e, e.next = l, t.lastEffect = e), e;
  }
  function Om() {
    return Ht().memoizedState;
  }
  function lc(e, t, n, l) {
    var u = mn();
    ze.flags |= e, u.memoizedState = Qr(
      1 | t,
      { destroy: void 0 },
      n,
      l === void 0 ? null : l
    );
  }
  function rc(e, t, n, l) {
    var u = Ht();
    l = l === void 0 ? null : l;
    var f = u.memoizedState.inst;
    et !== null && l !== null && bs(l, et.memoizedState.deps) ? u.memoizedState = Qr(t, f, n, l) : (ze.flags |= e, u.memoizedState = Qr(
      1 | t,
      f,
      n,
      l
    ));
  }
  function xm(e, t) {
    lc(8390656, 8, e, t);
  }
  function Cd(e, t) {
    rc(2048, 8, e, t);
  }
  function U1(e) {
    ze.flags |= 4;
    var t = ze.updateQueue;
    if (t === null)
      t = Ir(), ze.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function Tm(e) {
    var t = Ht().memoizedState;
    return U1({ ref: t, nextImpl: e }), function() {
      if ((rt & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Am(e, t) {
    return rc(4, 2, e, t);
  }
  function wm(e, t) {
    return rc(4, 4, e, t);
  }
  function Mm(e, t) {
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
  function Rm(e, t, n) {
    n = n != null ? n.concat([e]) : null, rc(4, 4, Mm.bind(null, t, e), n);
  }
  function Od() {
  }
  function Dm(e, t) {
    var n = Ht();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && bs(t, l[1]) ? l[0] : (n.memoizedState = [e, t], e);
  }
  function Nm(e, t) {
    var n = Ht();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && bs(t, l[1]))
      return l[0];
    if (l = e(), Oi) {
      ha(!0);
      try {
        e();
      } finally {
        ha(!1);
      }
    }
    return n.memoizedState = [l, t], l;
  }
  function xd(e, t, n) {
    return n === void 0 || (Ca & 1073741824) !== 0 && (Ze & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = jg(), ze.lanes |= e, Sl |= e, n);
  }
  function jm(e, t, n, l) {
    return _n(n, t) ? n : pn.current !== null ? (e = xd(e, n, l), _n(e, t) || (Wt = !0), e) : (Ca & 42) === 0 || (Ca & 1073741824) !== 0 && (Ze & 261930) === 0 ? (Wt = !0, e.memoizedState = n) : (e = jg(), ze.lanes |= e, Sl |= e, t);
  }
  function zm(e, t, n, l, u) {
    var f = ae.p;
    ae.p = f !== 0 && 8 > f ? f : 8;
    var g = k.T, _ = {};
    k.T = _, wd(e, !1, t, n);
    try {
      var w = u(), q = k.S;
      if (q !== null && q(_, w), w !== null && typeof w == "object" && typeof w.then == "function") {
        var K = yd(
          w,
          l
        );
        Ss(
          e,
          t,
          K,
          ca(e)
        );
      } else
        Ss(
          e,
          t,
          l,
          ca(e)
        );
    } catch (P) {
      Ss(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: P },
        ca()
      );
    } finally {
      ae.p = f, g !== null && _.types !== null && (g.types = _.types), k.T = g;
    }
  }
  function B1() {
  }
  function Td(e, t, n, l) {
    if (e.tag !== 5) throw Error(o(476));
    var u = Lm(e).queue;
    zm(
      e,
      u,
      t,
      le,
      n === null ? B1 : function() {
        return Hm(e), n(l);
      }
    );
  }
  function Lm(e) {
    var t = e.memoizedState;
    if (t !== null) return t;
    t = {
      memoizedState: le,
      baseState: le,
      baseQueue: null,
      queue: {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: Ti,
        lastRenderedState: le
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
        lastRenderedReducer: Ti,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Hm(e) {
    var t = Lm(e);
    t.next === null && (t = e.alternate.memoizedState), Ss(
      e,
      t.next.queue,
      {},
      ca()
    );
  }
  function Ad() {
    return Kt(Us);
  }
  function Vm() {
    return Ht().memoizedState;
  }
  function Um() {
    return Ht().memoizedState;
  }
  function $1(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = ca();
          e = Re(n);
          var l = Ye(t, e, n);
          l !== null && (na(l, t, n), Ne(l, t, n)), t = { cache: Va() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function k1(e, t, n) {
    var l = ca();
    n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, oc(e) ? $m(t, n) : (n = ls(e, t, n, l), n !== null && (na(n, e, l), km(n, t, l)));
  }
  function Bm(e, t, n) {
    var l = ca();
    Ss(e, t, n, l);
  }
  function Ss(e, t, n, l) {
    var u = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (oc(e)) $m(t, u);
    else {
      var f = e.alternate;
      if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null))
        try {
          var g = t.lastRenderedState, _ = f(g, n);
          if (u.hasEagerState = !0, u.eagerState = _, _n(_, g))
            return Vr(e, t, u, 0), Et === null && Hr(), !1;
        } catch {
        } finally {
        }
      if (n = ls(e, t, u, l), n !== null)
        return na(n, e, l), km(n, t, l), !0;
    }
    return !1;
  }
  function wd(e, t, n, l) {
    if (l = {
      lane: 2,
      revertLane: rh(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, oc(e)) {
      if (t) throw Error(o(479));
    } else
      t = ls(
        e,
        n,
        l,
        2
      ), t !== null && na(t, e, 2);
  }
  function oc(e) {
    var t = e.alternate;
    return e === ze || t !== null && t === ze;
  }
  function $m(e, t) {
    ri = Yr = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function km(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, hu(e, n);
    }
  }
  var Es = {
    readContext: Kt,
    use: yl,
    useCallback: Lt,
    useContext: Lt,
    useEffect: Lt,
    useImperativeHandle: Lt,
    useLayoutEffect: Lt,
    useInsertionEffect: Lt,
    useMemo: Lt,
    useReducer: Lt,
    useRef: Lt,
    useState: Lt,
    useDebugValue: Lt,
    useDeferredValue: Lt,
    useTransition: Lt,
    useSyncExternalStore: Lt,
    useId: Lt,
    useHostTransitionStatus: Lt,
    useFormState: Lt,
    useActionState: Lt,
    useOptimistic: Lt,
    useMemoCache: Lt,
    useCacheRefresh: Lt
  };
  Es.useEffectEvent = Lt;
  var qm = {
    readContext: Kt,
    use: yl,
    useCallback: function(e, t) {
      return mn().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Kt,
    useEffect: xm,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, lc(
        4194308,
        4,
        Mm.bind(null, t, e),
        n
      );
    },
    useLayoutEffect: function(e, t) {
      return lc(4194308, 4, e, t);
    },
    useInsertionEffect: function(e, t) {
      lc(4, 2, e, t);
    },
    useMemo: function(e, t) {
      var n = mn();
      t = t === void 0 ? null : t;
      var l = e();
      if (Oi) {
        ha(!0);
        try {
          e();
        } finally {
          ha(!1);
        }
      }
      return n.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, n) {
      var l = mn();
      if (n !== void 0) {
        var u = n(t);
        if (Oi) {
          ha(!0);
          try {
            n(t);
          } finally {
            ha(!1);
          }
        }
      } else u = t;
      return l.memoizedState = l.baseState = u, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      }, l.queue = e, e = e.dispatch = k1.bind(
        null,
        ze,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = mn();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Sd(e);
      var t = e.queue, n = Bm.bind(null, ze, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: Od,
    useDeferredValue: function(e, t) {
      var n = mn();
      return xd(n, e, t);
    },
    useTransition: function() {
      var e = Sd(!1);
      return e = zm.bind(
        null,
        ze,
        e.queue,
        !0,
        !1
      ), mn().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var l = ze, u = mn();
      if (Xe) {
        if (n === void 0)
          throw Error(o(407));
        n = n();
      } else {
        if (n = t(), Et === null)
          throw Error(o(349));
        (Ze & 127) !== 0 || um(l, t, n);
      }
      u.memoizedState = n;
      var f = { value: n, getSnapshot: t };
      return u.queue = f, xm(fm.bind(null, l, f, e), [
        e
      ]), l.flags |= 2048, Qr(
        9,
        { destroy: void 0 },
        cm.bind(
          null,
          l,
          f,
          n,
          t
        ),
        null
      ), n;
    },
    useId: function() {
      var e = mn(), t = Et.identifierPrefix;
      if (Xe) {
        var n = Sa, l = _a;
        n = (l & ~(1 << 32 - jn(l) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = ir++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = nc++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: Ad,
    useFormState: _m,
    useActionState: _m,
    useOptimistic: function(e) {
      var t = mn();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = wd.bind(
        null,
        ze,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Fr,
    useCacheRefresh: function() {
      return mn().memoizedState = $1.bind(
        null,
        ze
      );
    },
    useEffectEvent: function(e) {
      var t = mn(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((rt & 2) !== 0)
          throw Error(o(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, Md = {
    readContext: Kt,
    use: yl,
    useCallback: Dm,
    useContext: Kt,
    useEffect: Cd,
    useImperativeHandle: Rm,
    useInsertionEffect: Am,
    useLayoutEffect: wm,
    useMemo: Nm,
    useReducer: ic,
    useRef: Om,
    useState: function() {
      return ic(Ti);
    },
    useDebugValue: Od,
    useDeferredValue: function(e, t) {
      var n = Ht();
      return jm(
        n,
        et.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = ic(Ti)[0], t = Ht().memoizedState;
      return [
        typeof e == "boolean" ? e : sr(e),
        t
      ];
    },
    useSyncExternalStore: sm,
    useId: Vm,
    useHostTransitionStatus: Ad,
    useFormState: Sm,
    useActionState: Sm,
    useOptimistic: function(e, t) {
      var n = Ht();
      return pm(n, et, e, t);
    },
    useMemoCache: Fr,
    useCacheRefresh: Um
  };
  Md.useEffectEvent = Tm;
  var Ym = {
    readContext: Kt,
    use: yl,
    useCallback: Dm,
    useContext: Kt,
    useEffect: Cd,
    useImperativeHandle: Rm,
    useInsertionEffect: Am,
    useLayoutEffect: wm,
    useMemo: Nm,
    useReducer: _d,
    useRef: Om,
    useState: function() {
      return _d(Ti);
    },
    useDebugValue: Od,
    useDeferredValue: function(e, t) {
      var n = Ht();
      return et === null ? xd(n, e, t) : jm(
        n,
        et.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = _d(Ti)[0], t = Ht().memoizedState;
      return [
        typeof e == "boolean" ? e : sr(e),
        t
      ];
    },
    useSyncExternalStore: sm,
    useId: Vm,
    useHostTransitionStatus: Ad,
    useFormState: Cm,
    useActionState: Cm,
    useOptimistic: function(e, t) {
      var n = Ht();
      return et !== null ? pm(n, et, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Fr,
    useCacheRefresh: Um
  };
  Ym.useEffectEvent = Tm;
  function Rd(e, t, n, l) {
    t = e.memoizedState, n = n(l, t), n = n == null ? t : x({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Dd = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var l = ca(), u = Re(l);
      u.payload = t, n != null && (u.callback = n), t = Ye(e, u, l), t !== null && (na(t, e, l), Ne(t, e, l));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var l = ca(), u = Re(l);
      u.tag = 1, u.payload = t, n != null && (u.callback = n), t = Ye(e, u, l), t !== null && (na(t, e, l), Ne(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = ca(), l = Re(n);
      l.tag = 2, t != null && (l.callback = t), t = Ye(e, l, n), t !== null && (na(t, e, n), Ne(t, e, n));
    }
  };
  function Gm(e, t, n, l, u, f, g) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, f, g) : t.prototype && t.prototype.isPureReactComponent ? !dn(n, l) || !dn(u, f) : !0;
  }
  function Xm(e, t, n, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, l), t.state !== e && Dd.enqueueReplaceState(t, t.state, null);
  }
  function ur(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var l in t)
        l !== "ref" && (n[l] = t[l]);
    }
    if (e = e.defaultProps) {
      n === t && (n = x({}, n));
      for (var u in e)
        n[u] === void 0 && (n[u] = e[u]);
    }
    return n;
  }
  function Im(e) {
    Jl(e);
  }
  function Fm(e) {
    console.error(e);
  }
  function Qm(e) {
    Jl(e);
  }
  function sc(e, t) {
    try {
      var n = e.onUncaughtError;
      n(t.value, { componentStack: t.stack });
    } catch (l) {
      setTimeout(function() {
        throw l;
      });
    }
  }
  function Zm(e, t, n) {
    try {
      var l = e.onCaughtError;
      l(n.value, {
        componentStack: n.stack,
        errorBoundary: t.tag === 1 ? t.stateNode : null
      });
    } catch (u) {
      setTimeout(function() {
        throw u;
      });
    }
  }
  function Nd(e, t, n) {
    return n = Re(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      sc(e, t);
    }, n;
  }
  function Km(e) {
    return e = Re(e), e.tag = 3, e;
  }
  function Jm(e, t, n, l) {
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var f = l.value;
      e.payload = function() {
        return u(f);
      }, e.callback = function() {
        Zm(t, n, l);
      };
    }
    var g = n.stateNode;
    g !== null && typeof g.componentDidCatch == "function" && (e.callback = function() {
      Zm(t, n, l), typeof u != "function" && (El === null ? El = /* @__PURE__ */ new Set([this]) : El.add(this));
      var _ = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: _ !== null ? _ : ""
      });
    });
  }
  function q1(e, t, n, l, u) {
    if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = n.alternate, t !== null && ii(
        t,
        n,
        u,
        !0
      ), n = jt.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return Ut === null ? _c() : n.alternate === null && Xt === 0 && (Xt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = u, l === c ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), ah(e, l, u)), !1;
          case 22:
            return n.flags |= 65536, l === c ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : n.add(l)), ah(e, l, u)), !1;
        }
        throw Error(o(435, n.tag));
      }
      return ah(e, l, u), _c(), !1;
    }
    if (Xe)
      return t = jt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, l !== fs && (e = Error(o(422), { cause: l }), tr(hn(e, n)))) : (l !== fs && (t = Error(o(423), {
        cause: l
      }), tr(
        hn(t, n)
      )), e = e.current.alternate, e.flags |= 65536, u &= -u, e.lanes |= u, l = hn(l, n), u = Nd(
        e.stateNode,
        l,
        u
      ), Ie(e, u), Xt !== 4 && (Xt = 2)), !1;
    var f = Error(o(520), { cause: l });
    if (f = hn(f, n), Rs === null ? Rs = [f] : Rs.push(f), Xt !== 4 && (Xt = 2), t === null) return !0;
    l = hn(l, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = u & -u, n.lanes |= e, e = Nd(n.stateNode, l, e), Ie(n, e), !1;
        case 1:
          if (t = n.type, f = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (El === null || !El.has(f))))
            return n.flags |= 65536, u &= -u, n.lanes |= u, u = Km(u), Jm(
              u,
              e,
              n,
              l
            ), Ie(n, u), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var jd = Error(o(461)), Wt = !1;
  function En(e, t, n, l) {
    t.child = e === null ? Me(t, null, n, l) : xe(
      t,
      e.child,
      n,
      l
    );
  }
  function Wm(e, t, n, l, u) {
    n = n.render;
    var f = t.ref;
    if ("ref" in l) {
      var g = {};
      for (var _ in l)
        _ !== "ref" && (g[_] = l[_]);
    } else g = l;
    return kn(t), l = Ua(
      e,
      t,
      n,
      g,
      f,
      u
    ), _ = or(), e !== null && !Wt ? (Gr(e, t, u), Ai(e, t, u)) : (Xe && _ && er(t), t.flags |= 1, En(e, t, l, u), t.child);
  }
  function Pm(e, t, n, l, u) {
    if (e === null) {
      var f = n.type;
      return typeof f == "function" && !os(f) && f.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = f, eg(
        e,
        t,
        f,
        l,
        u
      )) : (e = Br(
        n.type,
        null,
        l,
        t,
        t.mode,
        u
      ), e.ref = t.ref, e.return = t, t.child = e);
    }
    if (f = e.child, !kd(e, u)) {
      var g = f.memoizedProps;
      if (n = n.compare, n = n !== null ? n : dn, n(g, l) && e.ref === t.ref)
        return Ai(e, t, u);
    }
    return t.flags |= 1, e = Na(f, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function eg(e, t, n, l, u) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (dn(f, l) && e.ref === t.ref)
        if (Wt = !1, t.pendingProps = l = f, kd(e, u))
          (e.flags & 131072) !== 0 && (Wt = !0);
        else
          return t.lanes = e.lanes, Ai(e, t, u);
    }
    return zd(
      e,
      t,
      n,
      l,
      u
    );
  }
  function tg(e, t, n, l) {
    var u = l.children, f = e !== null ? e.memoizedState : null;
    if (e === null && t.stateNode === null && (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), l.mode === "hidden") {
      if ((t.flags & 128) !== 0) {
        if (f = f !== null ? f.baseLanes | n : n, e !== null) {
          for (l = t.child = e.child, u = 0; l !== null; )
            u = u | l.lanes | l.childLanes, l = l.sibling;
          l = u & ~f;
        } else l = 0, t.child = null;
        return ng(
          e,
          t,
          f,
          n,
          l
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && Si(
          t,
          f !== null ? f.cachePool : null
        ), f !== null ? qn(t, f) : Mn(), ft(t);
      else
        return l = t.lanes = 536870912, ng(
          e,
          t,
          f !== null ? f.baseLanes | n : n,
          n,
          l
        );
    } else
      f !== null ? (Si(t, f.cachePool), qn(t, f), zt(), t.memoizedState = null) : (e !== null && Si(t, null), Mn(), zt());
    return En(e, t, u, n), t.child;
  }
  function Cs(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function ng(e, t, n, l, u) {
    var f = gl();
    return f = f === null ? null : { parent: qt._currentValue, pool: f }, t.memoizedState = {
      baseLanes: n,
      cachePool: f
    }, e !== null && Si(t, null), Mn(), ft(t), e !== null && ii(e, t, l, !0), t.childLanes = u, null;
  }
  function uc(e, t) {
    return t = fc(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function ag(e, t, n) {
    return xe(t, e.child, null, n), e = uc(t, t.pendingProps), e.flags |= 2, At(t), t.memoizedState = null, e;
  }
  function Y1(e, t, n) {
    var l = t.pendingProps, u = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Xe) {
        if (l.mode === "hidden")
          return e = uc(t, l), t.lanes = 536870912, Cs(null, e);
        if (Yt(t), (e = nt) ? (e = mv(
          e,
          Kn
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: ei !== null ? { id: _a, overflow: Sa } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Ju(e), n.return = t, t.child = n, ln = t, nt = null)) : e = null, e === null) throw ti(t);
        return t.lanes = 536870912, null;
      }
      return uc(t, l);
    }
    var f = e.memoizedState;
    if (f !== null) {
      var g = f.dehydrated;
      if (Yt(t), u)
        if (t.flags & 256)
          t.flags &= -257, t = ag(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (Wt || ii(e, t, n, !1), u = (n & e.childLanes) !== 0, Wt || u) {
        if (l = Et, l !== null && (g = pu(l, n), g !== 0 && g !== f.retryLane))
          throw f.retryLane = g, Sn(e, g), na(l, e, g), jd;
        _c(), t = ag(
          e,
          t,
          n
        );
      } else
        e = f.treeContext, nt = Oa(g.nextSibling), ln = t, Xe = !0, La = null, Kn = !1, e !== null && cs(t, e), t = uc(t, l), t.flags |= 4096;
      return t;
    }
    return e = Na(e.child, {
      mode: l.mode,
      children: l.children
    }), e.ref = t.ref, t.child = e, e.return = t, e;
  }
  function cc(e, t) {
    var n = t.ref;
    if (n === null)
      e !== null && e.ref !== null && (t.flags |= 4194816);
    else {
      if (typeof n != "function" && typeof n != "object")
        throw Error(o(284));
      (e === null || e.ref !== n) && (t.flags |= 4194816);
    }
  }
  function zd(e, t, n, l, u) {
    return kn(t), n = Ua(
      e,
      t,
      n,
      l,
      void 0,
      u
    ), l = or(), e !== null && !Wt ? (Gr(e, t, u), Ai(e, t, u)) : (Xe && l && er(t), t.flags |= 1, En(e, t, n, u), t.child);
  }
  function ig(e, t, n, l, u, f) {
    return kn(t), t.updateQueue = null, n = _s(
      t,
      l,
      n,
      u
    ), rr(e), l = or(), e !== null && !Wt ? (Gr(e, t, f), Ai(e, t, f)) : (Xe && l && er(t), t.flags |= 1, En(e, t, n, f), t.child);
  }
  function lg(e, t, n, l, u) {
    if (kn(t), t.stateNode === null) {
      var f = ul, g = n.contextType;
      typeof g == "object" && g !== null && (f = Kt(g)), f = new n(l, f), t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = Dd, t.stateNode = f, f._reactInternals = t, f = t.stateNode, f.props = l, f.state = t.memoizedState, f.refs = {}, at(t), g = n.contextType, f.context = typeof g == "object" && g !== null ? Kt(g) : ul, f.state = t.memoizedState, g = n.getDerivedStateFromProps, typeof g == "function" && (Rd(
        t,
        n,
        g,
        l
      ), f.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (g = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), g !== f.state && Dd.enqueueReplaceState(f, f.state, null), Je(t, l, f, u), We(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      f = t.stateNode;
      var _ = t.memoizedProps, w = ur(n, _);
      f.props = w;
      var q = f.context, K = n.contextType;
      g = ul, typeof K == "object" && K !== null && (g = Kt(K));
      var P = n.getDerivedStateFromProps;
      K = typeof P == "function" || typeof f.getSnapshotBeforeUpdate == "function", _ = t.pendingProps !== _, K || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (_ || q !== g) && Xm(
        t,
        f,
        l,
        g
      ), Ce = !1;
      var G = t.memoizedState;
      f.state = G, Je(t, l, f, u), We(), q = t.memoizedState, _ || G !== q || Ce ? (typeof P == "function" && (Rd(
        t,
        n,
        P,
        l
      ), q = t.memoizedState), (w = Ce || Gm(
        t,
        n,
        w,
        l,
        G,
        q,
        g
      )) ? (K || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = q), f.props = l, f.state = q, f.context = g, l = w) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      f = t.stateNode, ct(e, t), g = t.memoizedProps, K = ur(n, g), f.props = K, P = t.pendingProps, G = f.context, q = n.contextType, w = ul, typeof q == "object" && q !== null && (w = Kt(q)), _ = n.getDerivedStateFromProps, (q = typeof _ == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (g !== P || G !== w) && Xm(
        t,
        f,
        l,
        w
      ), Ce = !1, G = t.memoizedState, f.state = G, Je(t, l, f, u), We();
      var I = t.memoizedState;
      g !== P || G !== I || Ce || e !== null && e.dependencies !== null && nr(e.dependencies) ? (typeof _ == "function" && (Rd(
        t,
        n,
        _,
        l
      ), I = t.memoizedState), (K = Ce || Gm(
        t,
        n,
        K,
        l,
        G,
        I,
        w
      ) || e !== null && e.dependencies !== null && nr(e.dependencies)) ? (q || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(l, I, w), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
        l,
        I,
        w
      )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || g === e.memoizedProps && G === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && G === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = I), f.props = l, f.state = I, f.context = w, l = K) : (typeof f.componentDidUpdate != "function" || g === e.memoizedProps && G === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && G === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return f = l, cc(e, t), l = (t.flags & 128) !== 0, f || l ? (f = t.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : f.render(), t.flags |= 1, e !== null && l ? (t.child = xe(
      t,
      e.child,
      null,
      u
    ), t.child = xe(
      t,
      null,
      n,
      u
    )) : En(e, t, n, u), t.memoizedState = f.state, e = t.child) : e = Ai(
      e,
      t,
      u
    ), e;
  }
  function rg(e, t, n, l) {
    return bi(), t.flags |= 256, En(e, t, n, l), t.child;
  }
  var Ld = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Hd(e) {
    return { baseLanes: e, cachePool: tc() };
  }
  function Vd(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= ua), e;
  }
  function og(e, t, n) {
    var l = t.pendingProps, u = !1, f = (t.flags & 128) !== 0, g;
    if ((g = f) || (g = e !== null && e.memoizedState === null ? !1 : (dt.current & 2) !== 0), g && (u = !0, t.flags &= -129), g = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Xe) {
        if (u ? Yn(t) : zt(), (e = nt) ? (e = mv(
          e,
          Kn
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: ei !== null ? { id: _a, overflow: Sa } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Ju(e), n.return = t, t.child = n, ln = t, nt = null)) : e = null, e === null) throw ti(t);
        return bh(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var _ = l.children;
      return l = l.fallback, u ? (zt(), u = t.mode, _ = fc(
        { mode: "hidden", children: _ },
        u
      ), l = ja(
        l,
        u,
        n,
        null
      ), _.return = t, l.return = t, _.sibling = l, t.child = _, l = t.child, l.memoizedState = Hd(n), l.childLanes = Vd(
        e,
        g,
        n
      ), t.memoizedState = Ld, Cs(null, l)) : (Yn(t), Ud(t, _));
    }
    var w = e.memoizedState;
    if (w !== null && (_ = w.dehydrated, _ !== null)) {
      if (f)
        t.flags & 256 ? (Yn(t), t.flags &= -257, t = Bd(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (zt(), t.child = e.child, t.flags |= 128, t = null) : (zt(), _ = l.fallback, u = t.mode, l = fc(
          { mode: "visible", children: l.children },
          u
        ), _ = ja(
          _,
          u,
          n,
          null
        ), _.flags |= 2, l.return = t, _.return = t, l.sibling = _, t.child = l, xe(
          t,
          e.child,
          null,
          n
        ), l = t.child, l.memoizedState = Hd(n), l.childLanes = Vd(
          e,
          g,
          n
        ), t.memoizedState = Ld, t = Cs(null, l));
      else if (Yn(t), bh(_)) {
        if (g = _.nextSibling && _.nextSibling.dataset, g) var q = g.dgst;
        g = q, l = Error(o(419)), l.stack = "", l.digest = g, tr({ value: l, source: null, stack: null }), t = Bd(
          e,
          t,
          n
        );
      } else if (Wt || ii(e, t, n, !1), g = (n & e.childLanes) !== 0, Wt || g) {
        if (g = Et, g !== null && (l = pu(g, n), l !== 0 && l !== w.retryLane))
          throw w.retryLane = l, Sn(e, l), na(g, e, l), jd;
        yh(_) || _c(), t = Bd(
          e,
          t,
          n
        );
      } else
        yh(_) ? (t.flags |= 192, t.child = e.child, t = null) : (e = w.treeContext, nt = Oa(
          _.nextSibling
        ), ln = t, Xe = !0, La = null, Kn = !1, e !== null && cs(t, e), t = Ud(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return u ? (zt(), _ = l.fallback, u = t.mode, w = e.child, q = w.sibling, l = Na(w, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = w.subtreeFlags & 65011712, q !== null ? _ = Na(
      q,
      _
    ) : (_ = ja(
      _,
      u,
      n,
      null
    ), _.flags |= 2), _.return = t, l.return = t, l.sibling = _, t.child = l, Cs(null, l), l = t.child, _ = e.child.memoizedState, _ === null ? _ = Hd(n) : (u = _.cachePool, u !== null ? (w = qt._currentValue, u = u.parent !== w ? { parent: w, pool: w } : u) : u = tc(), _ = {
      baseLanes: _.baseLanes | n,
      cachePool: u
    }), l.memoizedState = _, l.childLanes = Vd(
      e,
      g,
      n
    ), t.memoizedState = Ld, Cs(e.child, l)) : (Yn(t), n = e.child, e = n.sibling, n = Na(n, {
      mode: "visible",
      children: l.children
    }), n.return = t, n.sibling = null, e !== null && (g = t.deletions, g === null ? (t.deletions = [e], t.flags |= 16) : g.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function Ud(e, t) {
    return t = fc(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function fc(e, t) {
    return e = $n(22, e, null, t), e.lanes = 0, e;
  }
  function Bd(e, t, n) {
    return xe(t, e.child, null, n), e = Ud(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function sg(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), ps(e.return, t, n);
  }
  function $d(e, t, n, l, u, f) {
    var g = e.memoizedState;
    g === null ? e.memoizedState = {
      isBackwards: t,
      rendering: null,
      renderingStartTime: 0,
      last: l,
      tail: n,
      tailMode: u,
      treeForkCount: f
    } : (g.isBackwards = t, g.rendering = null, g.renderingStartTime = 0, g.last = l, g.tail = n, g.tailMode = u, g.treeForkCount = f);
  }
  function ug(e, t, n) {
    var l = t.pendingProps, u = l.revealOrder, f = l.tail;
    l = l.children;
    var g = dt.current, _ = (g & 2) !== 0;
    if (_ ? (g = g & 1 | 2, t.flags |= 128) : g &= 1, ee(dt, g), En(e, t, l, n), l = Xe ? Wl : 0, !_ && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && sg(e, n, t);
        else if (e.tag === 19)
          sg(e, n, t);
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
    switch (u) {
      case "forwards":
        for (n = t.child, u = null; n !== null; )
          e = n.alternate, e !== null && Ci(e) === null && (u = n), n = n.sibling;
        n = u, n === null ? (u = t.child, t.child = null) : (u = n.sibling, n.sibling = null), $d(
          t,
          !1,
          u,
          n,
          f,
          l
        );
        break;
      case "backwards":
      case "unstable_legacy-backwards":
        for (n = null, u = t.child, t.child = null; u !== null; ) {
          if (e = u.alternate, e !== null && Ci(e) === null) {
            t.child = u;
            break;
          }
          e = u.sibling, u.sibling = n, n = u, u = e;
        }
        $d(
          t,
          !0,
          n,
          null,
          f,
          l
        );
        break;
      case "together":
        $d(
          t,
          !1,
          null,
          null,
          void 0,
          l
        );
        break;
      default:
        t.memoizedState = null;
    }
    return t.child;
  }
  function Ai(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), Sl |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (ii(
          e,
          t,
          n,
          !1
        ), (n & t.childLanes) === 0)
          return null;
      } else return null;
    if (e !== null && t.child !== e.child)
      throw Error(o(153));
    if (t.child !== null) {
      for (e = t.child, n = Na(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = Na(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function kd(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && nr(e)));
  }
  function G1(e, t, n) {
    switch (t.tag) {
      case 3:
        Le(t, t.stateNode.containerInfo), ai(t, qt, e.memoizedState.cache), bi();
        break;
      case 27:
      case 5:
        _t(t);
        break;
      case 4:
        Le(t, t.stateNode.containerInfo);
        break;
      case 10:
        ai(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, Yt(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (Yn(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? og(e, t, n) : (Yn(t), e = Ai(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        Yn(t);
        break;
      case 19:
        var u = (e.flags & 128) !== 0;
        if (l = (n & t.childLanes) !== 0, l || (ii(
          e,
          t,
          n,
          !1
        ), l = (n & t.childLanes) !== 0), u) {
          if (l)
            return ug(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), ee(dt, dt.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, tg(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        ai(t, qt, e.memoizedState.cache);
    }
    return Ai(e, t, n);
  }
  function cg(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Wt = !0;
      else {
        if (!kd(e, n) && (t.flags & 128) === 0)
          return Wt = !1, G1(
            e,
            t,
            n
          );
        Wt = (e.flags & 131072) !== 0;
      }
    else
      Wt = !1, Xe && (t.flags & 1048576) !== 0 && Pl(t, Wl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = D(t.elementType), t.type = e, typeof e == "function")
            os(e) ? (l = ur(e, l), t.tag = 1, t = lg(
              null,
              t,
              e,
              l,
              n
            )) : (t.tag = 0, t = zd(
              null,
              t,
              e,
              l,
              n
            ));
          else {
            if (e != null) {
              var u = e.$$typeof;
              if (u === W) {
                t.tag = 11, t = Wm(
                  null,
                  t,
                  e,
                  l,
                  n
                );
                break e;
              } else if (u === B) {
                t.tag = 14, t = Pm(
                  null,
                  t,
                  e,
                  l,
                  n
                );
                break e;
              }
            }
            throw t = tt(e) || e, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return zd(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return l = t.type, u = ur(
          l,
          t.pendingProps
        ), lg(
          e,
          t,
          l,
          u,
          n
        );
      case 3:
        e: {
          if (Le(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(o(387));
          l = t.pendingProps;
          var f = t.memoizedState;
          u = f.element, ct(e, t), Je(t, l, null, n);
          var g = t.memoizedState;
          if (l = g.cache, ai(t, qt, l), l !== f.cache && qr(
            t,
            [qt],
            n,
            !0
          ), We(), l = g.element, f.isDehydrated)
            if (f = {
              element: l,
              isDehydrated: !1,
              cache: g.cache
            }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
              t = rg(
                e,
                t,
                l,
                n
              );
              break e;
            } else if (l !== u) {
              u = hn(
                Error(o(424)),
                t
              ), tr(u), t = rg(
                e,
                t,
                l,
                n
              );
              break e;
            } else {
              switch (e = t.stateNode.containerInfo, e.nodeType) {
                case 9:
                  e = e.body;
                  break;
                default:
                  e = e.nodeName === "HTML" ? e.ownerDocument.body : e;
              }
              for (nt = Oa(e.firstChild), ln = t, Xe = !0, La = null, Kn = !0, n = Me(
                t,
                null,
                l,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
            }
          else {
            if (bi(), l === u) {
              t = Ai(
                e,
                t,
                n
              );
              break e;
            }
            En(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return cc(e, t), e === null ? (n = Sv(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : Xe || (n = t.type, e = t.pendingProps, l = Ac(
          ue.current
        ).createElement(n), l[$t] = t, l[xn] = e, Cn(l, n, e), Mt(l), t.stateNode = l) : t.memoizedState = Sv(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return _t(t), e === null && Xe && (l = t.stateNode = yv(
          t.type,
          t.pendingProps,
          ue.current
        ), ln = t, Kn = !0, u = nt, Tl(t.type) ? (_h = u, nt = Oa(l.firstChild)) : nt = u), En(
          e,
          t,
          t.pendingProps.children,
          n
        ), cc(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Xe && ((u = l = nt) && (l = __(
          l,
          t.type,
          t.pendingProps,
          Kn
        ), l !== null ? (t.stateNode = l, ln = t, nt = Oa(l.firstChild), Kn = !1, u = !0) : u = !1), u || ti(t)), _t(t), u = t.type, f = t.pendingProps, g = e !== null ? e.memoizedProps : null, l = f.children, mh(u, f) ? l = null : g !== null && mh(u, g) && (t.flags |= 32), t.memoizedState !== null && (u = Ua(
          e,
          t,
          ac,
          null,
          null,
          n
        ), Us._currentValue = u), cc(e, t), En(e, t, l, n), t.child;
      case 6:
        return e === null && Xe && ((e = n = nt) && (n = S_(
          n,
          t.pendingProps,
          Kn
        ), n !== null ? (t.stateNode = n, ln = t, nt = null, e = !0) : e = !1), e || ti(t)), null;
      case 13:
        return og(e, t, n);
      case 4:
        return Le(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = xe(
          t,
          null,
          l,
          n
        ) : En(e, t, l, n), t.child;
      case 11:
        return Wm(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return En(
          e,
          t,
          t.pendingProps,
          n
        ), t.child;
      case 8:
        return En(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return En(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return l = t.pendingProps, ai(t, t.type, l.value), En(e, t, l.children, n), t.child;
      case 9:
        return u = t.type._context, l = t.pendingProps.children, kn(t), u = Kt(u), l = l(u), t.flags |= 1, En(e, t, l, n), t.child;
      case 14:
        return Pm(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return eg(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return ug(e, t, n);
      case 31:
        return Y1(e, t, n);
      case 22:
        return tg(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return kn(t), l = Kt(qt), e === null ? (u = gl(), u === null && (u = Et, f = Va(), u.pooledCache = f, f.refCount++, f !== null && (u.pooledCacheLanes |= n), u = f), t.memoizedState = { parent: l, cache: u }, at(t), ai(t, qt, u)) : ((e.lanes & n) !== 0 && (ct(e, t), Je(t, null, null, n), We()), u = e.memoizedState, f = t.memoizedState, u.parent !== l ? (u = { parent: l, cache: l }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), ai(t, qt, l)) : (l = f.cache, ai(t, qt, l), l !== u.cache && qr(
          t,
          [qt],
          n,
          !0
        ))), En(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 29:
        throw t.pendingProps;
    }
    throw Error(o(156, t.tag));
  }
  function wi(e) {
    e.flags |= 4;
  }
  function qd(e, t, n, l, u) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (u & 335544128) === u)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Vg()) e.flags |= 8192;
        else
          throw z = c, Ei;
    } else e.flags &= -16777217;
  }
  function fg(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !Tv(t))
      if (Vg()) e.flags |= 8192;
      else
        throw z = c, Ei;
  }
  function dc(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? du() : 536870912, e.lanes |= t, Wr |= t);
  }
  function Os(e, t) {
    if (!Xe)
      switch (e.tailMode) {
        case "hidden":
          t = e.tail;
          for (var n = null; t !== null; )
            t.alternate !== null && (n = t), t = t.sibling;
          n === null ? e.tail = null : n.sibling = null;
          break;
        case "collapsed":
          n = e.tail;
          for (var l = null; n !== null; )
            n.alternate !== null && (l = n), n = n.sibling;
          l === null ? t || e.tail === null ? e.tail = null : e.tail.sibling = null : l.sibling = null;
      }
  }
  function Rt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, l = 0;
    if (t)
      for (var u = e.child; u !== null; )
        n |= u.lanes | u.childLanes, l |= u.subtreeFlags & 65011712, l |= u.flags & 65011712, u.return = e, u = u.sibling;
    else
      for (u = e.child; u !== null; )
        n |= u.lanes | u.childLanes, l |= u.subtreeFlags, l |= u.flags, u.return = e, u = u.sibling;
    return e.subtreeFlags |= l, e.childLanes = n, t;
  }
  function X1(e, t, n) {
    var l = t.pendingProps;
    switch (us(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Rt(t), null;
      case 1:
        return Rt(t), null;
      case 3:
        return n = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), Ea(qt), ne(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (dl(t) ? wi(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, ds())), Rt(t), null;
      case 26:
        var u = t.type, f = t.memoizedState;
        return e === null ? (wi(t), f !== null ? (Rt(t), fg(t, f)) : (Rt(t), qd(
          t,
          u,
          null,
          l,
          n
        ))) : f ? f !== e.memoizedState ? (wi(t), Rt(t), fg(t, f)) : (Rt(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && wi(t), Rt(t), qd(
          t,
          u,
          e,
          l,
          n
        )), null;
      case 27:
        if (Ct(t), n = ue.current, u = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && wi(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Rt(t), null;
          }
          e = ie.current, dl(t) ? fl(t) : (e = yv(u, l, n), t.stateNode = e, wi(t));
        }
        return Rt(t), null;
      case 5:
        if (Ct(t), u = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && wi(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Rt(t), null;
          }
          if (f = ie.current, dl(t))
            fl(t);
          else {
            var g = Ac(
              ue.current
            );
            switch (f) {
              case 1:
                f = g.createElementNS(
                  "http://www.w3.org/2000/svg",
                  u
                );
                break;
              case 2:
                f = g.createElementNS(
                  "http://www.w3.org/1998/Math/MathML",
                  u
                );
                break;
              default:
                switch (u) {
                  case "svg":
                    f = g.createElementNS(
                      "http://www.w3.org/2000/svg",
                      u
                    );
                    break;
                  case "math":
                    f = g.createElementNS(
                      "http://www.w3.org/1998/Math/MathML",
                      u
                    );
                    break;
                  case "script":
                    f = g.createElement("div"), f.innerHTML = "<script><\/script>", f = f.removeChild(
                      f.firstChild
                    );
                    break;
                  case "select":
                    f = typeof l.is == "string" ? g.createElement("select", {
                      is: l.is
                    }) : g.createElement("select"), l.multiple ? f.multiple = !0 : l.size && (f.size = l.size);
                    break;
                  default:
                    f = typeof l.is == "string" ? g.createElement(u, { is: l.is }) : g.createElement(u);
                }
            }
            f[$t] = t, f[xn] = l;
            e: for (g = t.child; g !== null; ) {
              if (g.tag === 5 || g.tag === 6)
                f.appendChild(g.stateNode);
              else if (g.tag !== 4 && g.tag !== 27 && g.child !== null) {
                g.child.return = g, g = g.child;
                continue;
              }
              if (g === t) break e;
              for (; g.sibling === null; ) {
                if (g.return === null || g.return === t)
                  break e;
                g = g.return;
              }
              g.sibling.return = g.return, g = g.sibling;
            }
            t.stateNode = f;
            e: switch (Cn(f, u, l), u) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                l = !!l.autoFocus;
                break e;
              case "img":
                l = !0;
                break e;
              default:
                l = !1;
            }
            l && wi(t);
          }
        }
        return Rt(t), qd(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && wi(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(o(166));
          if (e = ue.current, dl(t)) {
            if (e = t.stateNode, n = t.memoizedProps, l = null, u = ln, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  l = u.memoizedProps;
              }
            e[$t] = t, e = !!(e.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || ov(e.nodeValue, n)), e || ti(t, !0);
          } else
            e = Ac(e).createTextNode(
              l
            ), e[$t] = t, t.stateNode = e;
        }
        return Rt(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = dl(t), n !== null) {
            if (e === null) {
              if (!l) throw Error(o(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(557));
              e[$t] = t;
            } else
              bi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Rt(t), e = !1;
          } else
            n = ds(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (At(t), t) : (At(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return Rt(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (u = dl(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(o(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
              u[$t] = t;
            } else
              bi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Rt(t), u = !1;
          } else
            u = ds(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return t.flags & 256 ? (At(t), t) : (At(t), null);
        }
        return At(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = l !== null, e = e !== null && e.memoizedState !== null, n && (l = t.child, u = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (u = l.alternate.memoizedState.cachePool.pool), f = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (f = l.memoizedState.cachePool.pool), f !== u && (l.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), dc(t, t.updateQueue), Rt(t), null);
      case 4:
        return ne(), e === null && ch(t.stateNode.containerInfo), Rt(t), null;
      case 10:
        return Ea(t.type), Rt(t), null;
      case 19:
        if (Y(dt), l = t.memoizedState, l === null) return Rt(t), null;
        if (u = (t.flags & 128) !== 0, f = l.rendering, f === null)
          if (u) Os(l, !1);
          else {
            if (Xt !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (f = Ci(e), f !== null) {
                  for (t.flags |= 128, Os(l, !1), e = f.updateQueue, t.updateQueue = e, dc(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    Ku(n, e), n = n.sibling;
                  return ee(
                    dt,
                    dt.current & 1 | 2
                  ), Xe && za(t, l.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && sn() > vc && (t.flags |= 128, u = !0, Os(l, !1), t.lanes = 4194304);
          }
        else {
          if (!u)
            if (e = Ci(f), e !== null) {
              if (t.flags |= 128, u = !0, e = e.updateQueue, t.updateQueue = e, dc(t, e), Os(l, !0), l.tail === null && l.tailMode === "hidden" && !f.alternate && !Xe)
                return Rt(t), null;
            } else
              2 * sn() - l.renderingStartTime > vc && n !== 536870912 && (t.flags |= 128, u = !0, Os(l, !1), t.lanes = 4194304);
          l.isBackwards ? (f.sibling = t.child, t.child = f) : (e = l.last, e !== null ? e.sibling = f : t.child = f, l.last = f);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = sn(), e.sibling = null, n = dt.current, ee(
          dt,
          u ? n & 1 | 2 : n & 1
        ), Xe && za(t, l.treeForkCount), e) : (Rt(t), null);
      case 22:
      case 23:
        return At(t), Tt(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Rt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Rt(t), n = t.updateQueue, n !== null && dc(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== n && (t.flags |= 2048), e !== null && Y(li), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), Ea(qt), Rt(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function I1(e, t) {
    switch (us(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return Ea(qt), ne(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Ct(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (At(t), t.alternate === null)
            throw Error(o(340));
          bi();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (At(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          bi();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return Y(dt), null;
      case 4:
        return ne(), null;
      case 10:
        return Ea(t.type), null;
      case 22:
      case 23:
        return At(t), Tt(), e !== null && Y(li), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return Ea(qt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function dg(e, t) {
    switch (us(t), t.tag) {
      case 3:
        Ea(qt), ne();
        break;
      case 26:
      case 27:
      case 5:
        Ct(t);
        break;
      case 4:
        ne();
        break;
      case 31:
        t.memoizedState !== null && At(t);
        break;
      case 13:
        At(t);
        break;
      case 19:
        Y(dt);
        break;
      case 10:
        Ea(t.type);
        break;
      case 22:
      case 23:
        At(t), Tt(), e !== null && Y(li);
        break;
      case 24:
        Ea(qt);
    }
  }
  function xs(e, t) {
    try {
      var n = t.updateQueue, l = n !== null ? n.lastEffect : null;
      if (l !== null) {
        var u = l.next;
        n = u;
        do {
          if ((n.tag & e) === e) {
            l = void 0;
            var f = n.create, g = n.inst;
            l = f(), g.destroy = l;
          }
          n = n.next;
        } while (n !== u);
      }
    } catch (_) {
      vt(t, t.return, _);
    }
  }
  function bl(e, t, n) {
    try {
      var l = t.updateQueue, u = l !== null ? l.lastEffect : null;
      if (u !== null) {
        var f = u.next;
        l = f;
        do {
          if ((l.tag & e) === e) {
            var g = l.inst, _ = g.destroy;
            if (_ !== void 0) {
              g.destroy = void 0, u = t;
              var w = n, q = _;
              try {
                q();
              } catch (K) {
                vt(
                  u,
                  w,
                  K
                );
              }
            }
          }
          l = l.next;
        } while (l !== f);
      }
    } catch (K) {
      vt(t, t.return, K);
    }
  }
  function hg(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        wn(t, n);
      } catch (l) {
        vt(e, e.return, l);
      }
    }
  }
  function pg(e, t, n) {
    n.props = ur(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (l) {
      vt(e, t, l);
    }
  }
  function Ts(e, t) {
    try {
      var n = e.ref;
      if (n !== null) {
        switch (e.tag) {
          case 26:
          case 27:
          case 5:
            var l = e.stateNode;
            break;
          case 30:
            l = e.stateNode;
            break;
          default:
            l = e.stateNode;
        }
        typeof n == "function" ? e.refCleanup = n(l) : n.current = l;
      }
    } catch (u) {
      vt(e, t, u);
    }
  }
  function oi(e, t) {
    var n = e.ref, l = e.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (u) {
          vt(e, t, u);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (u) {
          vt(e, t, u);
        }
      else n.current = null;
  }
  function mg(e) {
    var t = e.type, n = e.memoizedProps, l = e.stateNode;
    try {
      e: switch (t) {
        case "button":
        case "input":
        case "select":
        case "textarea":
          n.autoFocus && l.focus();
          break e;
        case "img":
          n.src ? l.src = n.src : n.srcSet && (l.srcset = n.srcSet);
      }
    } catch (u) {
      vt(e, e.return, u);
    }
  }
  function Yd(e, t, n) {
    try {
      var l = e.stateNode;
      p_(l, e.type, n, t), l[xn] = t;
    } catch (u) {
      vt(e, e.return, u);
    }
  }
  function gg(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && Tl(e.type) || e.tag === 4;
  }
  function Gd(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || gg(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && Tl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Xd(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = cn));
    else if (l !== 4 && (l === 27 && Tl(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (Xd(e, t, n), e = e.sibling; e !== null; )
        Xd(e, t, n), e = e.sibling;
  }
  function hc(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (l !== 4 && (l === 27 && Tl(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (hc(e, t, n), e = e.sibling; e !== null; )
        hc(e, t, n), e = e.sibling;
  }
  function vg(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var l = e.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      Cn(t, l, n), t[$t] = e, t[xn] = n;
    } catch (f) {
      vt(e, e.return, f);
    }
  }
  var Mi = !1, Pt = !1, Id = !1, yg = typeof WeakSet == "function" ? WeakSet : Set, gn = null;
  function F1(e, t) {
    if (e = e.containerInfo, hh = zc, e = Zo(e), Ko(e)) {
      if ("selectionStart" in e)
        var n = {
          start: e.selectionStart,
          end: e.selectionEnd
        };
      else
        e: {
          n = (n = e.ownerDocument) && n.defaultView || window;
          var l = n.getSelection && n.getSelection();
          if (l && l.rangeCount !== 0) {
            n = l.anchorNode;
            var u = l.anchorOffset, f = l.focusNode;
            l = l.focusOffset;
            try {
              n.nodeType, f.nodeType;
            } catch {
              n = null;
              break e;
            }
            var g = 0, _ = -1, w = -1, q = 0, K = 0, P = e, G = null;
            t: for (; ; ) {
              for (var I; P !== n || u !== 0 && P.nodeType !== 3 || (_ = g + u), P !== f || l !== 0 && P.nodeType !== 3 || (w = g + l), P.nodeType === 3 && (g += P.nodeValue.length), (I = P.firstChild) !== null; )
                G = P, P = I;
              for (; ; ) {
                if (P === e) break t;
                if (G === n && ++q === u && (_ = g), G === f && ++K === l && (w = g), (I = P.nextSibling) !== null) break;
                P = G, G = P.parentNode;
              }
              P = I;
            }
            n = _ === -1 || w === -1 ? null : { start: _, end: w };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (ph = { focusedElem: e, selectionRange: n }, zc = !1, gn = t; gn !== null; )
      if (t = gn, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, gn = e;
      else
        for (; gn !== null; ) {
          switch (t = gn, f = t.alternate, e = t.flags, t.tag) {
            case 0:
              if ((e & 4) !== 0 && (e = t.updateQueue, e = e !== null ? e.events : null, e !== null))
                for (n = 0; n < e.length; n++)
                  u = e[n], u.ref.impl = u.nextImpl;
              break;
            case 11:
            case 15:
              break;
            case 1:
              if ((e & 1024) !== 0 && f !== null) {
                e = void 0, n = t, u = f.memoizedProps, f = f.memoizedState, l = n.stateNode;
                try {
                  var pe = ur(
                    n.type,
                    u
                  );
                  e = l.getSnapshotBeforeUpdate(
                    pe,
                    f
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (Te) {
                  vt(
                    n,
                    n.return,
                    Te
                  );
                }
              }
              break;
            case 3:
              if ((e & 1024) !== 0) {
                if (e = t.stateNode.containerInfo, n = e.nodeType, n === 9)
                  vh(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      vh(e);
                      break;
                    default:
                      e.textContent = "";
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
            default:
              if ((e & 1024) !== 0) throw Error(o(163));
          }
          if (e = t.sibling, e !== null) {
            e.return = t.return, gn = e;
            break;
          }
          gn = t.return;
        }
  }
  function bg(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Di(e, n), l & 4 && xs(5, n);
        break;
      case 1:
        if (Di(e, n), l & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (g) {
              vt(n, n.return, g);
            }
          else {
            var u = ur(
              n.type,
              t.memoizedProps
            );
            t = t.memoizedState;
            try {
              e.componentDidUpdate(
                u,
                t,
                e.__reactInternalSnapshotBeforeUpdate
              );
            } catch (g) {
              vt(
                n,
                n.return,
                g
              );
            }
          }
        l & 64 && hg(n), l & 512 && Ts(n, n.return);
        break;
      case 3:
        if (Di(e, n), l & 64 && (e = n.updateQueue, e !== null)) {
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
            wn(e, t);
          } catch (g) {
            vt(n, n.return, g);
          }
        }
        break;
      case 27:
        t === null && l & 4 && vg(n);
      case 26:
      case 5:
        Di(e, n), t === null && l & 4 && mg(n), l & 512 && Ts(n, n.return);
        break;
      case 12:
        Di(e, n);
        break;
      case 31:
        Di(e, n), l & 4 && Eg(e, n);
        break;
      case 13:
        Di(e, n), l & 4 && Cg(e, n), l & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = n_.bind(
          null,
          n
        ), E_(e, n))));
        break;
      case 22:
        if (l = n.memoizedState !== null || Mi, !l) {
          t = t !== null && t.memoizedState !== null || Pt, u = Mi;
          var f = Pt;
          Mi = l, (Pt = t) && !f ? Ni(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : Di(e, n), Mi = u, Pt = f;
        }
        break;
      case 30:
        break;
      default:
        Di(e, n);
    }
  }
  function _g(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, _g(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && yn(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Vt = null, Wn = !1;
  function Ri(e, t, n) {
    for (n = n.child; n !== null; )
      Sg(e, t, n), n = n.sibling;
  }
  function Sg(e, t, n) {
    if (Nn && typeof Nn.onCommitFiberUnmount == "function")
      try {
        Nn.onCommitFiberUnmount(Xa, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Pt || oi(n, t), Ri(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Pt || oi(n, t);
        var l = Vt, u = Wn;
        Tl(n.type) && (Vt = n.stateNode, Wn = !1), Ri(
          e,
          t,
          n
        ), Ls(n.stateNode), Vt = l, Wn = u;
        break;
      case 5:
        Pt || oi(n, t);
      case 6:
        if (l = Vt, u = Wn, Vt = null, Ri(
          e,
          t,
          n
        ), Vt = l, Wn = u, Vt !== null)
          if (Wn)
            try {
              (Vt.nodeType === 9 ? Vt.body : Vt.nodeName === "HTML" ? Vt.ownerDocument.body : Vt).removeChild(n.stateNode);
            } catch (f) {
              vt(
                n,
                t,
                f
              );
            }
          else
            try {
              Vt.removeChild(n.stateNode);
            } catch (f) {
              vt(
                n,
                t,
                f
              );
            }
        break;
      case 18:
        Vt !== null && (Wn ? (e = Vt, hv(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), ro(e)) : hv(Vt, n.stateNode));
        break;
      case 4:
        l = Vt, u = Wn, Vt = n.stateNode.containerInfo, Wn = !0, Ri(
          e,
          t,
          n
        ), Vt = l, Wn = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        bl(2, n, t), Pt || bl(4, n, t), Ri(
          e,
          t,
          n
        );
        break;
      case 1:
        Pt || (oi(n, t), l = n.stateNode, typeof l.componentWillUnmount == "function" && pg(
          n,
          t,
          l
        )), Ri(
          e,
          t,
          n
        );
        break;
      case 21:
        Ri(
          e,
          t,
          n
        );
        break;
      case 22:
        Pt = (l = Pt) || n.memoizedState !== null, Ri(
          e,
          t,
          n
        ), Pt = l;
        break;
      default:
        Ri(
          e,
          t,
          n
        );
    }
  }
  function Eg(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        ro(e);
      } catch (n) {
        vt(t, t.return, n);
      }
    }
  }
  function Cg(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        ro(e);
      } catch (n) {
        vt(t, t.return, n);
      }
  }
  function Q1(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new yg()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new yg()), t;
      default:
        throw Error(o(435, e.tag));
    }
  }
  function pc(e, t) {
    var n = Q1(e);
    t.forEach(function(l) {
      if (!n.has(l)) {
        n.add(l);
        var u = a_.bind(null, e, l);
        l.then(u, u);
      }
    });
  }
  function Pn(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var u = n[l], f = e, g = t, _ = g;
        e: for (; _ !== null; ) {
          switch (_.tag) {
            case 27:
              if (Tl(_.type)) {
                Vt = _.stateNode, Wn = !1;
                break e;
              }
              break;
            case 5:
              Vt = _.stateNode, Wn = !1;
              break e;
            case 3:
            case 4:
              Vt = _.stateNode.containerInfo, Wn = !0;
              break e;
          }
          _ = _.return;
        }
        if (Vt === null) throw Error(o(160));
        Sg(f, g, u), Vt = null, Wn = !1, f = u.alternate, f !== null && (f.return = null), u.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Og(t, e), t = t.sibling;
  }
  var Ba = null;
  function Og(e, t) {
    var n = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Pn(t, e), ea(e), l & 4 && (bl(3, e, e.return), xs(3, e), bl(5, e, e.return));
        break;
      case 1:
        Pn(t, e), ea(e), l & 512 && (Pt || n === null || oi(n, n.return)), l & 64 && Mi && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
        break;
      case 26:
        var u = Ba;
        if (Pn(t, e), ea(e), l & 512 && (Pt || n === null || oi(n, n.return)), l & 4) {
          var f = n !== null ? n.memoizedState : null;
          if (l = e.memoizedState, n === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, n = e.memoizedProps, u = u.ownerDocument || u;
                  t: switch (l) {
                    case "title":
                      f = u.getElementsByTagName("title")[0], (!f || f[an] || f[$t] || f.namespaceURI === "http://www.w3.org/2000/svg" || f.hasAttribute("itemprop")) && (f = u.createElement(l), u.head.insertBefore(
                        f,
                        u.querySelector("head > title")
                      )), Cn(f, l, n), f[$t] = e, Mt(f), l = f;
                      break e;
                    case "link":
                      var g = Ov(
                        "link",
                        "href",
                        u
                      ).get(l + (n.href || ""));
                      if (g) {
                        for (var _ = 0; _ < g.length; _++)
                          if (f = g[_], f.getAttribute("href") === (n.href == null || n.href === "" ? null : n.href) && f.getAttribute("rel") === (n.rel == null ? null : n.rel) && f.getAttribute("title") === (n.title == null ? null : n.title) && f.getAttribute("crossorigin") === (n.crossOrigin == null ? null : n.crossOrigin)) {
                            g.splice(_, 1);
                            break t;
                          }
                      }
                      f = u.createElement(l), Cn(f, l, n), u.head.appendChild(f);
                      break;
                    case "meta":
                      if (g = Ov(
                        "meta",
                        "content",
                        u
                      ).get(l + (n.content || ""))) {
                        for (_ = 0; _ < g.length; _++)
                          if (f = g[_], f.getAttribute("content") === (n.content == null ? null : "" + n.content) && f.getAttribute("name") === (n.name == null ? null : n.name) && f.getAttribute("property") === (n.property == null ? null : n.property) && f.getAttribute("http-equiv") === (n.httpEquiv == null ? null : n.httpEquiv) && f.getAttribute("charset") === (n.charSet == null ? null : n.charSet)) {
                            g.splice(_, 1);
                            break t;
                          }
                      }
                      f = u.createElement(l), Cn(f, l, n), u.head.appendChild(f);
                      break;
                    default:
                      throw Error(o(468, l));
                  }
                  f[$t] = e, Mt(f), l = f;
                }
                e.stateNode = l;
              } else
                xv(
                  u,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Cv(
                u,
                l,
                e.memoizedProps
              );
          else
            f !== l ? (f === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : f.count--, l === null ? xv(
              u,
              e.type,
              e.stateNode
            ) : Cv(
              u,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && Yd(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        Pn(t, e), ea(e), l & 512 && (Pt || n === null || oi(n, n.return)), n !== null && l & 4 && Yd(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (Pn(t, e), ea(e), l & 512 && (Pt || n === null || oi(n, n.return)), e.flags & 32) {
          u = e.stateNode;
          try {
            la(u, "");
          } catch (pe) {
            vt(e, e.return, pe);
          }
        }
        l & 4 && e.stateNode != null && (u = e.memoizedProps, Yd(
          e,
          u,
          n !== null ? n.memoizedProps : u
        )), l & 1024 && (Id = !0);
        break;
      case 6:
        if (Pn(t, e), ea(e), l & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          l = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = l;
          } catch (pe) {
            vt(e, e.return, pe);
          }
        }
        break;
      case 3:
        if (Rc = null, u = Ba, Ba = wc(t.containerInfo), Pn(t, e), Ba = u, ea(e), l & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            ro(t.containerInfo);
          } catch (pe) {
            vt(e, e.return, pe);
          }
        Id && (Id = !1, xg(e));
        break;
      case 4:
        l = Ba, Ba = wc(
          e.stateNode.containerInfo
        ), Pn(t, e), ea(e), Ba = l;
        break;
      case 12:
        Pn(t, e), ea(e);
        break;
      case 31:
        Pn(t, e), ea(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, pc(e, l)));
        break;
      case 13:
        Pn(t, e), ea(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (gc = sn()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, pc(e, l)));
        break;
      case 22:
        u = e.memoizedState !== null;
        var w = n !== null && n.memoizedState !== null, q = Mi, K = Pt;
        if (Mi = q || u, Pt = K || w, Pn(t, e), Pt = K, Mi = q, ea(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (n === null || w || Mi || Pt || cr(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                w = n = t;
                try {
                  if (f = w.stateNode, u)
                    g = f.style, typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none";
                  else {
                    _ = w.stateNode;
                    var P = w.memoizedProps.style, G = P != null && P.hasOwnProperty("display") ? P.display : null;
                    _.style.display = G == null || typeof G == "boolean" ? "" : ("" + G).trim();
                  }
                } catch (pe) {
                  vt(w, w.return, pe);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                w = t;
                try {
                  w.stateNode.nodeValue = u ? "" : w.memoizedProps;
                } catch (pe) {
                  vt(w, w.return, pe);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                w = t;
                try {
                  var I = w.stateNode;
                  u ? pv(I, !0) : pv(w.stateNode, !1);
                } catch (pe) {
                  vt(w, w.return, pe);
                }
              }
            } else if ((t.tag !== 22 && t.tag !== 23 || t.memoizedState === null || t === e) && t.child !== null) {
              t.child.return = t, t = t.child;
              continue;
            }
            if (t === e) break e;
            for (; t.sibling === null; ) {
              if (t.return === null || t.return === e) break e;
              n === t && (n = null), t = t.return;
            }
            n === t && (n = null), t.sibling.return = t.return, t = t.sibling;
          }
        l & 4 && (l = e.updateQueue, l !== null && (n = l.retryQueue, n !== null && (l.retryQueue = null, pc(e, n))));
        break;
      case 19:
        Pn(t, e), ea(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, pc(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Pn(t, e), ea(e);
    }
  }
  function ea(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, l = e.return; l !== null; ) {
          if (gg(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(o(160));
        switch (n.tag) {
          case 27:
            var u = n.stateNode, f = Gd(e);
            hc(e, f, u);
            break;
          case 5:
            var g = n.stateNode;
            n.flags & 32 && (la(g, ""), n.flags &= -33);
            var _ = Gd(e);
            hc(e, _, g);
            break;
          case 3:
          case 4:
            var w = n.stateNode.containerInfo, q = Gd(e);
            Xd(
              e,
              q,
              w
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (K) {
        vt(e, e.return, K);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function xg(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        xg(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Di(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        bg(e, t.alternate, t), t = t.sibling;
  }
  function cr(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          bl(4, t, t.return), cr(t);
          break;
        case 1:
          oi(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && pg(
            t,
            t.return,
            n
          ), cr(t);
          break;
        case 27:
          Ls(t.stateNode);
        case 26:
        case 5:
          oi(t, t.return), cr(t);
          break;
        case 22:
          t.memoizedState === null && cr(t);
          break;
        case 30:
          cr(t);
          break;
        default:
          cr(t);
      }
      e = e.sibling;
    }
  }
  function Ni(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, u = e, f = t, g = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Ni(
            u,
            f,
            n
          ), xs(4, f);
          break;
        case 1:
          if (Ni(
            u,
            f,
            n
          ), l = f, u = l.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (q) {
              vt(l, l.return, q);
            }
          if (l = f, u = l.updateQueue, u !== null) {
            var _ = l.stateNode;
            try {
              var w = u.shared.hiddenCallbacks;
              if (w !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < w.length; u++)
                  Nt(w[u], _);
            } catch (q) {
              vt(l, l.return, q);
            }
          }
          n && g & 64 && hg(f), Ts(f, f.return);
          break;
        case 27:
          vg(f);
        case 26:
        case 5:
          Ni(
            u,
            f,
            n
          ), n && l === null && g & 4 && mg(f), Ts(f, f.return);
          break;
        case 12:
          Ni(
            u,
            f,
            n
          );
          break;
        case 31:
          Ni(
            u,
            f,
            n
          ), n && g & 4 && Eg(u, f);
          break;
        case 13:
          Ni(
            u,
            f,
            n
          ), n && g & 4 && Cg(u, f);
          break;
        case 22:
          f.memoizedState === null && Ni(
            u,
            f,
            n
          ), Ts(f, f.return);
          break;
        case 30:
          break;
        default:
          Ni(
            u,
            f,
            n
          );
      }
      t = t.sibling;
    }
  }
  function Fd(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Jn(n));
  }
  function Qd(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Jn(e));
  }
  function $a(e, t, n, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        Tg(
          e,
          t,
          n,
          l
        ), t = t.sibling;
  }
  function Tg(e, t, n, l) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        $a(
          e,
          t,
          n,
          l
        ), u & 2048 && xs(9, t);
        break;
      case 1:
        $a(
          e,
          t,
          n,
          l
        );
        break;
      case 3:
        $a(
          e,
          t,
          n,
          l
        ), u & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Jn(e)));
        break;
      case 12:
        if (u & 2048) {
          $a(
            e,
            t,
            n,
            l
          ), e = t.stateNode;
          try {
            var f = t.memoizedProps, g = f.id, _ = f.onPostCommit;
            typeof _ == "function" && _(
              g,
              t.alternate === null ? "mount" : "update",
              e.passiveEffectDuration,
              -0
            );
          } catch (w) {
            vt(t, t.return, w);
          }
        } else
          $a(
            e,
            t,
            n,
            l
          );
        break;
      case 31:
        $a(
          e,
          t,
          n,
          l
        );
        break;
      case 13:
        $a(
          e,
          t,
          n,
          l
        );
        break;
      case 23:
        break;
      case 22:
        f = t.stateNode, g = t.alternate, t.memoizedState !== null ? f._visibility & 2 ? $a(
          e,
          t,
          n,
          l
        ) : As(e, t) : f._visibility & 2 ? $a(
          e,
          t,
          n,
          l
        ) : (f._visibility |= 2, Zr(
          e,
          t,
          n,
          l,
          (t.subtreeFlags & 10256) !== 0 || !1
        )), u & 2048 && Fd(g, t);
        break;
      case 24:
        $a(
          e,
          t,
          n,
          l
        ), u & 2048 && Qd(t.alternate, t);
        break;
      default:
        $a(
          e,
          t,
          n,
          l
        );
    }
  }
  function Zr(e, t, n, l, u) {
    for (u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var f = e, g = t, _ = n, w = l, q = g.flags;
      switch (g.tag) {
        case 0:
        case 11:
        case 15:
          Zr(
            f,
            g,
            _,
            w,
            u
          ), xs(8, g);
          break;
        case 23:
          break;
        case 22:
          var K = g.stateNode;
          g.memoizedState !== null ? K._visibility & 2 ? Zr(
            f,
            g,
            _,
            w,
            u
          ) : As(
            f,
            g
          ) : (K._visibility |= 2, Zr(
            f,
            g,
            _,
            w,
            u
          )), u && q & 2048 && Fd(
            g.alternate,
            g
          );
          break;
        case 24:
          Zr(
            f,
            g,
            _,
            w,
            u
          ), u && q & 2048 && Qd(g.alternate, g);
          break;
        default:
          Zr(
            f,
            g,
            _,
            w,
            u
          );
      }
      t = t.sibling;
    }
  }
  function As(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, l = t, u = l.flags;
        switch (l.tag) {
          case 22:
            As(n, l), u & 2048 && Fd(
              l.alternate,
              l
            );
            break;
          case 24:
            As(n, l), u & 2048 && Qd(l.alternate, l);
            break;
          default:
            As(n, l);
        }
        t = t.sibling;
      }
  }
  var ws = 8192;
  function Kr(e, t, n) {
    if (e.subtreeFlags & ws)
      for (e = e.child; e !== null; )
        Ag(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function Ag(e, t, n) {
    switch (e.tag) {
      case 26:
        Kr(
          e,
          t,
          n
        ), e.flags & ws && e.memoizedState !== null && z_(
          n,
          Ba,
          e.memoizedState,
          e.memoizedProps
        );
        break;
      case 5:
        Kr(
          e,
          t,
          n
        );
        break;
      case 3:
      case 4:
        var l = Ba;
        Ba = wc(e.stateNode.containerInfo), Kr(
          e,
          t,
          n
        ), Ba = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = ws, ws = 16777216, Kr(
          e,
          t,
          n
        ), ws = l) : Kr(
          e,
          t,
          n
        ));
        break;
      default:
        Kr(
          e,
          t,
          n
        );
    }
  }
  function wg(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Ms(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          gn = l, Rg(
            l,
            e
          );
        }
      wg(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Mg(e), e = e.sibling;
  }
  function Mg(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Ms(e), e.flags & 2048 && bl(9, e, e.return);
        break;
      case 3:
        Ms(e);
        break;
      case 12:
        Ms(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, mc(e)) : Ms(e);
        break;
      default:
        Ms(e);
    }
  }
  function mc(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          gn = l, Rg(
            l,
            e
          );
        }
      wg(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          bl(8, t, t.return), mc(t);
          break;
        case 22:
          n = t.stateNode, n._visibility & 2 && (n._visibility &= -3, mc(t));
          break;
        default:
          mc(t);
      }
      e = e.sibling;
    }
  }
  function Rg(e, t) {
    for (; gn !== null; ) {
      var n = gn;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          bl(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Jn(n.memoizedState.cache);
      }
      if (l = n.child, l !== null) l.return = n, gn = l;
      else
        e: for (n = e; gn !== null; ) {
          l = gn;
          var u = l.sibling, f = l.return;
          if (_g(l), l === n) {
            gn = null;
            break e;
          }
          if (u !== null) {
            u.return = f, gn = u;
            break e;
          }
          gn = f;
        }
    }
  }
  var Z1 = {
    getCacheForType: function(e) {
      var t = Kt(qt), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return Kt(qt).controller.signal;
    }
  }, K1 = typeof WeakMap == "function" ? WeakMap : Map, rt = 0, Et = null, Fe = null, Ze = 0, gt = 0, sa = null, _l = !1, Jr = !1, Zd = !1, ji = 0, Xt = 0, Sl = 0, fr = 0, Kd = 0, ua = 0, Wr = 0, Rs = null, ta = null, Jd = !1, gc = 0, Dg = 0, vc = 1 / 0, yc = null, El = null, rn = 0, Cl = null, Pr = null, zi = 0, Wd = 0, Pd = null, Ng = null, Ds = 0, eh = null;
  function ca() {
    return (rt & 2) !== 0 && Ze !== 0 ? Ze & -Ze : k.T !== null ? rh() : mu();
  }
  function jg() {
    if (ua === 0)
      if ((Ze & 536870912) === 0 || Xe) {
        var e = _r;
        _r <<= 1, (_r & 3932160) === 0 && (_r = 262144), ua = e;
      } else ua = 536870912;
    return e = jt.current, e !== null && (e.flags |= 32), ua;
  }
  function na(e, t, n) {
    (e === Et && (gt === 2 || gt === 9) || e.cancelPendingCommit !== null) && (eo(e, 0), Ol(
      e,
      Ze,
      ua,
      !1
    )), Bl(e, n), ((rt & 2) === 0 || e !== Et) && (e === Et && ((rt & 2) === 0 && (fr |= n), Xt === 4 && Ol(
      e,
      Ze,
      ua,
      !1
    )), si(e));
  }
  function zg(e, t, n) {
    if ((rt & 6) !== 0) throw Error(o(327));
    var l = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Xi(e, t), u = l ? P1(e, t) : nh(e, t, !0), f = l;
    do {
      if (u === 0) {
        Jr && !l && Ol(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, f && !J1(n)) {
          u = nh(e, t, !1), f = !1;
          continue;
        }
        if (u === 2) {
          if (f = t, e.errorRecoveryDisabledLanes & f)
            var g = 0;
          else
            g = e.pendingLanes & -536870913, g = g !== 0 ? g : g & 536870912 ? 536870912 : 0;
          if (g !== 0) {
            t = g;
            e: {
              var _ = e;
              u = Rs;
              var w = _.current.memoizedState.isDehydrated;
              if (w && (eo(_, g).flags |= 256), g = nh(
                _,
                g,
                !1
              ), g !== 2) {
                if (Zd && !w) {
                  _.errorRecoveryDisabledLanes |= f, fr |= f, u = 4;
                  break e;
                }
                f = ta, ta = u, f !== null && (ta === null ? ta = f : ta.push.apply(
                  ta,
                  f
                ));
              }
              u = g;
            }
            if (f = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          eo(e, 0), Ol(e, t, 0, !0);
          break;
        }
        e: {
          switch (l = e, f = u, f) {
            case 0:
            case 1:
              throw Error(o(345));
            case 4:
              if ((t & 4194048) !== t) break;
            case 6:
              Ol(
                l,
                t,
                ua,
                !_l
              );
              break e;
            case 2:
              ta = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (u = gc + 300 - sn(), 10 < u)) {
            if (Ol(
              l,
              t,
              ua,
              !_l
            ), Ul(l, 0, !0) !== 0) break e;
            zi = t, l.timeoutHandle = fv(
              Lg.bind(
                null,
                l,
                n,
                ta,
                yc,
                Jd,
                t,
                ua,
                fr,
                Wr,
                _l,
                f,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break e;
          }
          Lg(
            l,
            n,
            ta,
            yc,
            Jd,
            t,
            ua,
            fr,
            Wr,
            _l,
            f,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    si(e);
  }
  function Lg(e, t, n, l, u, f, g, _, w, q, K, P, G, I) {
    if (e.timeoutHandle = -1, P = t.subtreeFlags, P & 8192 || (P & 16785408) === 16785408) {
      P = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: cn
      }, Ag(
        t,
        f,
        P
      );
      var pe = (f & 62914560) === f ? gc - sn() : (f & 4194048) === f ? Dg - sn() : 0;
      if (pe = L_(
        P,
        pe
      ), pe !== null) {
        zi = f, e.cancelPendingCommit = pe(
          Yg.bind(
            null,
            e,
            t,
            f,
            n,
            l,
            u,
            g,
            _,
            w,
            K,
            P,
            null,
            G,
            I
          )
        ), Ol(e, f, g, !q);
        return;
      }
    }
    Yg(
      e,
      t,
      f,
      n,
      l,
      u,
      g,
      _,
      w
    );
  }
  function J1(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var l = 0; l < n.length; l++) {
          var u = n[l], f = u.getSnapshot;
          u = u.value;
          try {
            if (!_n(f(), u)) return !1;
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
  function Ol(e, t, n, l) {
    t &= ~Kd, t &= ~fr, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var u = t; 0 < u; ) {
      var f = 31 - jn(u), g = 1 << f;
      l[f] = -1, u &= ~g;
    }
    n !== 0 && Fi(e, n, t);
  }
  function bc() {
    return (rt & 6) === 0 ? (Ns(0), !1) : !0;
  }
  function th() {
    if (Fe !== null) {
      if (gt === 0)
        var e = Fe.return;
      else
        e = Fe, Ha = _i = null, Xr(e), re = null, fe = 0, e = Fe;
      for (; e !== null; )
        dg(e.alternate, e), e = e.return;
      Fe = null;
    }
  }
  function eo(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, v_(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), zi = 0, th(), Et = e, Fe = n = Na(e.current, null), Ze = t, gt = 0, sa = null, _l = !1, Jr = Xi(e, t), Zd = !1, Wr = ua = Kd = fr = Sl = Xt = 0, ta = Rs = null, Jd = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var u = 31 - jn(l), f = 1 << u;
        t |= e[u], l &= ~f;
      }
    return ji = t, Hr(), n;
  }
  function Hg(e, t) {
    ze = null, k.H = Es, t === vl || t === b ? (t = F(), gt = 3) : t === Ei ? (t = F(), gt = 4) : gt = t === jd ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, sa = t, Fe === null && (Xt = 1, sc(
      e,
      hn(t, e.current)
    ));
  }
  function Vg() {
    var e = jt.current;
    return e === null ? !0 : (Ze & 4194048) === Ze ? Ut === null : (Ze & 62914560) === Ze || (Ze & 536870912) !== 0 ? e === Ut : !1;
  }
  function Ug() {
    var e = k.H;
    return k.H = Es, e === null ? Es : e;
  }
  function Bg() {
    var e = k.A;
    return k.A = Z1, e;
  }
  function _c() {
    Xt = 4, _l || (Ze & 4194048) !== Ze && jt.current !== null || (Jr = !0), (Sl & 134217727) === 0 && (fr & 134217727) === 0 || Et === null || Ol(
      Et,
      Ze,
      ua,
      !1
    );
  }
  function nh(e, t, n) {
    var l = rt;
    rt |= 2;
    var u = Ug(), f = Bg();
    (Et !== e || Ze !== t) && (yc = null, eo(e, t)), t = !1;
    var g = Xt;
    e: do
      try {
        if (gt !== 0 && Fe !== null) {
          var _ = Fe, w = sa;
          switch (gt) {
            case 8:
              th(), g = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              jt.current === null && (t = !0);
              var q = gt;
              if (gt = 0, sa = null, to(e, _, w, q), n && Jr) {
                g = 0;
                break e;
              }
              break;
            default:
              q = gt, gt = 0, sa = null, to(e, _, w, q);
          }
        }
        W1(), g = Xt;
        break;
      } catch (K) {
        Hg(e, K);
      }
    while (!0);
    return t && e.shellSuspendCounter++, Ha = _i = null, rt = l, k.H = u, k.A = f, Fe === null && (Et = null, Ze = 0, Hr()), g;
  }
  function W1() {
    for (; Fe !== null; ) $g(Fe);
  }
  function P1(e, t) {
    var n = rt;
    rt |= 2;
    var l = Ug(), u = Bg();
    Et !== e || Ze !== t ? (yc = null, vc = sn() + 500, eo(e, t)) : Jr = Xi(
      e,
      t
    );
    e: do
      try {
        if (gt !== 0 && Fe !== null) {
          t = Fe;
          var f = sa;
          t: switch (gt) {
            case 1:
              gt = 0, sa = null, to(e, t, f, 1);
              break;
            case 2:
            case 9:
              if (p(f)) {
                gt = 0, sa = null, kg(t);
                break;
              }
              t = function() {
                gt !== 2 && gt !== 9 || Et !== e || (gt = 7), si(e);
              }, f.then(t, t);
              break e;
            case 3:
              gt = 7;
              break e;
            case 4:
              gt = 5;
              break e;
            case 7:
              p(f) ? (gt = 0, sa = null, kg(t)) : (gt = 0, sa = null, to(e, t, f, 7));
              break;
            case 5:
              var g = null;
              switch (Fe.tag) {
                case 26:
                  g = Fe.memoizedState;
                case 5:
                case 27:
                  var _ = Fe;
                  if (g ? Tv(g) : _.stateNode.complete) {
                    gt = 0, sa = null;
                    var w = _.sibling;
                    if (w !== null) Fe = w;
                    else {
                      var q = _.return;
                      q !== null ? (Fe = q, Sc(q)) : Fe = null;
                    }
                    break t;
                  }
              }
              gt = 0, sa = null, to(e, t, f, 5);
              break;
            case 6:
              gt = 0, sa = null, to(e, t, f, 6);
              break;
            case 8:
              th(), Xt = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        e_();
        break;
      } catch (K) {
        Hg(e, K);
      }
    while (!0);
    return Ha = _i = null, k.H = l, k.A = u, rt = n, Fe !== null ? 0 : (Et = null, Ze = 0, Hr(), Xt);
  }
  function e_() {
    for (; Fe !== null && !xo(); )
      $g(Fe);
  }
  function $g(e) {
    var t = cg(e.alternate, e, ji);
    e.memoizedProps = e.pendingProps, t === null ? Sc(e) : Fe = t;
  }
  function kg(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = ig(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Ze
        );
        break;
      case 11:
        t = ig(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Ze
        );
        break;
      case 5:
        Xr(t);
      default:
        dg(n, t), t = Fe = Ku(t, ji), t = cg(n, t, ji);
    }
    e.memoizedProps = e.pendingProps, t === null ? Sc(e) : Fe = t;
  }
  function to(e, t, n, l) {
    Ha = _i = null, Xr(t), re = null, fe = 0;
    var u = t.return;
    try {
      if (q1(
        e,
        u,
        t,
        n,
        Ze
      )) {
        Xt = 1, sc(
          e,
          hn(n, e.current)
        ), Fe = null;
        return;
      }
    } catch (f) {
      if (u !== null) throw Fe = u, f;
      Xt = 1, sc(
        e,
        hn(n, e.current)
      ), Fe = null;
      return;
    }
    t.flags & 32768 ? (Xe || l === 1 ? e = !0 : Jr || (Ze & 536870912) !== 0 ? e = !1 : (_l = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = jt.current, l !== null && l.tag === 13 && (l.flags |= 16384))), qg(t, e)) : Sc(t);
  }
  function Sc(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        qg(
          t,
          _l
        );
        return;
      }
      e = t.return;
      var n = X1(
        t.alternate,
        t,
        ji
      );
      if (n !== null) {
        Fe = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        Fe = t;
        return;
      }
      Fe = t = e;
    } while (t !== null);
    Xt === 0 && (Xt = 5);
  }
  function qg(e, t) {
    do {
      var n = I1(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, Fe = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        Fe = e;
        return;
      }
      Fe = e = n;
    } while (e !== null);
    Xt = 6, Fe = null;
  }
  function Yg(e, t, n, l, u, f, g, _, w) {
    e.cancelPendingCommit = null;
    do
      Ec();
    while (rn !== 0);
    if ((rt & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (f = t.lanes | t.childLanes, f |= is, Ii(
        e,
        n,
        f,
        g,
        _,
        w
      ), e === Et && (Fe = Et = null, Ze = 0), Pr = t, Cl = e, zi = n, Wd = f, Pd = u, Ng = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, i_(pi, function() {
        return Qg(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = k.T, k.T = null, u = ae.p, ae.p = 2, g = rt, rt |= 4;
        try {
          F1(e, t, n);
        } finally {
          rt = g, ae.p = u, k.T = l;
        }
      }
      rn = 1, Gg(), Xg(), Ig();
    }
  }
  function Gg() {
    if (rn === 1) {
      rn = 0;
      var e = Cl, t = Pr, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = k.T, k.T = null;
        var l = ae.p;
        ae.p = 2;
        var u = rt;
        rt |= 4;
        try {
          Og(t, e);
          var f = ph, g = Zo(e.containerInfo), _ = f.focusedElem, w = f.selectionRange;
          if (g !== _ && _ && _.ownerDocument && Qo(
            _.ownerDocument.documentElement,
            _
          )) {
            if (w !== null && Ko(_)) {
              var q = w.start, K = w.end;
              if (K === void 0 && (K = q), "selectionStart" in _)
                _.selectionStart = q, _.selectionEnd = Math.min(
                  K,
                  _.value.length
                );
              else {
                var P = _.ownerDocument || document, G = P && P.defaultView || window;
                if (G.getSelection) {
                  var I = G.getSelection(), pe = _.textContent.length, Te = Math.min(w.start, pe), bt = w.end === void 0 ? Te : Math.min(w.end, pe);
                  !I.extend && Te > bt && (g = bt, bt = Te, Te = g);
                  var V = Yu(
                    _,
                    Te
                  ), M = Yu(
                    _,
                    bt
                  );
                  if (V && M && (I.rangeCount !== 1 || I.anchorNode !== V.node || I.anchorOffset !== V.offset || I.focusNode !== M.node || I.focusOffset !== M.offset)) {
                    var $ = P.createRange();
                    $.setStart(V.node, V.offset), I.removeAllRanges(), Te > bt ? (I.addRange($), I.extend(M.node, M.offset)) : ($.setEnd(M.node, M.offset), I.addRange($));
                  }
                }
              }
            }
            for (P = [], I = _; I = I.parentNode; )
              I.nodeType === 1 && P.push({
                element: I,
                left: I.scrollLeft,
                top: I.scrollTop
              });
            for (typeof _.focus == "function" && _.focus(), _ = 0; _ < P.length; _++) {
              var J = P[_];
              J.element.scrollLeft = J.left, J.element.scrollTop = J.top;
            }
          }
          zc = !!hh, ph = hh = null;
        } finally {
          rt = u, ae.p = l, k.T = n;
        }
      }
      e.current = t, rn = 2;
    }
  }
  function Xg() {
    if (rn === 2) {
      rn = 0;
      var e = Cl, t = Pr, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = k.T, k.T = null;
        var l = ae.p;
        ae.p = 2;
        var u = rt;
        rt |= 4;
        try {
          bg(e, t.alternate, t);
        } finally {
          rt = u, ae.p = l, k.T = n;
        }
      }
      rn = 3;
    }
  }
  function Ig() {
    if (rn === 4 || rn === 3) {
      rn = 0, To();
      var e = Cl, t = Pr, n = zi, l = Ng;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? rn = 5 : (rn = 0, Pr = Cl = null, Fg(e, e.pendingLanes));
      var u = e.pendingLanes;
      if (u === 0 && (El = null), Mo(n), t = t.stateNode, Nn && typeof Nn.onCommitFiberRoot == "function")
        try {
          Nn.onCommitFiberRoot(
            Xa,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        t = k.T, u = ae.p, ae.p = 2, k.T = null;
        try {
          for (var f = e.onRecoverableError, g = 0; g < l.length; g++) {
            var _ = l[g];
            f(_.value, {
              componentStack: _.stack
            });
          }
        } finally {
          k.T = t, ae.p = u;
        }
      }
      (zi & 3) !== 0 && Ec(), si(e), u = e.pendingLanes, (n & 261930) !== 0 && (u & 42) !== 0 ? e === eh ? Ds++ : (Ds = 0, eh = e) : Ds = 0, Ns(0);
    }
  }
  function Fg(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Jn(t)));
  }
  function Ec() {
    return Gg(), Xg(), Ig(), Qg();
  }
  function Qg() {
    if (rn !== 5) return !1;
    var e = Cl, t = Wd;
    Wd = 0;
    var n = Mo(zi), l = k.T, u = ae.p;
    try {
      ae.p = 32 > n ? 32 : n, k.T = null, n = Pd, Pd = null;
      var f = Cl, g = zi;
      if (rn = 0, Pr = Cl = null, zi = 0, (rt & 6) !== 0) throw Error(o(331));
      var _ = rt;
      if (rt |= 4, Mg(f.current), Tg(
        f,
        f.current,
        g,
        n
      ), rt = _, Ns(0, !1), Nn && typeof Nn.onPostCommitFiberRoot == "function")
        try {
          Nn.onPostCommitFiberRoot(Xa, f);
        } catch {
        }
      return !0;
    } finally {
      ae.p = u, k.T = l, Fg(e, t);
    }
  }
  function Zg(e, t, n) {
    t = hn(n, t), t = Nd(e.stateNode, t, 2), e = Ye(e, t, 2), e !== null && (Bl(e, 2), si(e));
  }
  function vt(e, t, n) {
    if (e.tag === 3)
      Zg(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Zg(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (El === null || !El.has(l))) {
            e = hn(n, e), n = Km(2), l = Ye(t, n, 2), l !== null && (Jm(
              n,
              l,
              t,
              e
            ), Bl(l, 2), si(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function ah(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new K1();
      var u = /* @__PURE__ */ new Set();
      l.set(t, u);
    } else
      u = l.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), l.set(t, u));
    u.has(n) || (Zd = !0, u.add(n), e = t_.bind(null, e, t, n), t.then(e, e));
  }
  function t_(e, t, n) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, Et === e && (Ze & n) === n && (Xt === 4 || Xt === 3 && (Ze & 62914560) === Ze && 300 > sn() - gc ? (rt & 2) === 0 && eo(e, 0) : Kd |= n, Wr === Ze && (Wr = 0)), si(e);
  }
  function Kg(e, t) {
    t === 0 && (t = du()), e = Sn(e, t), e !== null && (Bl(e, t), si(e));
  }
  function n_(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Kg(e, n);
  }
  function a_(e, t) {
    var n = 0;
    switch (e.tag) {
      case 31:
      case 13:
        var l = e.stateNode, u = e.memoizedState;
        u !== null && (n = u.retryLane);
        break;
      case 19:
        l = e.stateNode;
        break;
      case 22:
        l = e.stateNode._retryCache;
        break;
      default:
        throw Error(o(314));
    }
    l !== null && l.delete(t), Kg(e, n);
  }
  function i_(e, t) {
    return Ll(e, t);
  }
  var Cc = null, no = null, ih = !1, Oc = !1, lh = !1, xl = 0;
  function si(e) {
    e !== no && e.next === null && (no === null ? Cc = no = e : no = no.next = e), Oc = !0, ih || (ih = !0, r_());
  }
  function Ns(e, t) {
    if (!lh && Oc) {
      lh = !0;
      do
        for (var n = !1, l = Cc; l !== null; ) {
          if (e !== 0) {
            var u = l.pendingLanes;
            if (u === 0) var f = 0;
            else {
              var g = l.suspendedLanes, _ = l.pingedLanes;
              f = (1 << 31 - jn(42 | e) + 1) - 1, f &= u & ~(g & ~_), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
            }
            f !== 0 && (n = !0, ev(l, f));
          } else
            f = Ze, f = Ul(
              l,
              l === Et ? f : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (f & 3) === 0 || Xi(l, f) || (n = !0, ev(l, f));
          l = l.next;
        }
      while (n);
      lh = !1;
    }
  }
  function l_() {
    Jg();
  }
  function Jg() {
    Oc = ih = !1;
    var e = 0;
    xl !== 0 && g_() && (e = xl);
    for (var t = sn(), n = null, l = Cc; l !== null; ) {
      var u = l.next, f = Wg(l, t);
      f === 0 ? (l.next = null, n === null ? Cc = u : n.next = u, u === null && (no = n)) : (n = l, (e !== 0 || (f & 3) !== 0) && (Oc = !0)), l = u;
    }
    rn !== 0 && rn !== 5 || Ns(e), xl !== 0 && (xl = 0);
  }
  function Wg(e, t) {
    for (var n = e.suspendedLanes, l = e.pingedLanes, u = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
      var g = 31 - jn(f), _ = 1 << g, w = u[g];
      w === -1 ? ((_ & n) === 0 || (_ & l) !== 0) && (u[g] = Wf(_, t)) : w <= t && (e.expiredLanes |= _), f &= ~_;
    }
    if (t = Et, n = Ze, n = Ul(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, n === 0 || e === t && (gt === 2 || gt === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && Hl(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || Xi(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (l !== null && Hl(l), Mo(n)) {
        case 2:
        case 8:
          n = da;
          break;
        case 32:
          n = pi;
          break;
        case 268435456:
          n = qi;
          break;
        default:
          n = pi;
      }
      return l = Pg.bind(null, e), n = Ll(n, l), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return l !== null && l !== null && Hl(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function Pg(e, t) {
    if (rn !== 0 && rn !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (Ec() && e.callbackNode !== n)
      return null;
    var l = Ze;
    return l = Ul(
      e,
      e === Et ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (zg(e, l, t), Wg(e, sn()), e.callbackNode != null && e.callbackNode === n ? Pg.bind(null, e) : null);
  }
  function ev(e, t) {
    if (Ec()) return null;
    zg(e, t, !0);
  }
  function r_() {
    y_(function() {
      (rt & 6) !== 0 ? Ll(
        Be,
        l_
      ) : Jg();
    });
  }
  function rh() {
    if (xl === 0) {
      var e = pl;
      e === 0 && (e = br, br <<= 1, (br & 261888) === 0 && (br = 256)), xl = e;
    }
    return xl;
  }
  function tv(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Tr("" + e);
  }
  function nv(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function o_(e, t, n, l, u) {
    if (t === "submit" && n && n.stateNode === u) {
      var f = tv(
        (u[xn] || null).action
      ), g = l.submitter;
      g && (t = (t = g[xn] || null) ? tv(t.formAction) : g.getAttribute("formAction"), t !== null && (f = t, g = null));
      var _ = new tl(
        "action",
        "action",
        null,
        l,
        u
      );
      e.push({
        event: _,
        listeners: [
          {
            instance: null,
            listener: function() {
              if (l.defaultPrevented) {
                if (xl !== 0) {
                  var w = g ? nv(u, g) : new FormData(u);
                  Td(
                    n,
                    {
                      pending: !0,
                      data: w,
                      method: u.method,
                      action: f
                    },
                    null,
                    w
                  );
                }
              } else
                typeof f == "function" && (_.preventDefault(), w = g ? nv(u, g) : new FormData(u), Td(
                  n,
                  {
                    pending: !0,
                    data: w,
                    method: u.method,
                    action: f
                  },
                  f,
                  w
                ));
            },
            currentTarget: u
          }
        ]
      });
    }
  }
  for (var oh = 0; oh < as.length; oh++) {
    var sh = as[oh], s_ = sh.toLowerCase(), u_ = sh[0].toUpperCase() + sh.slice(1);
    oa(
      s_,
      "on" + u_
    );
  }
  oa(ba, "onAnimationEnd"), oa(ts, "onAnimationIteration"), oa(Xu, "onAnimationStart"), oa("dblclick", "onDoubleClick"), oa("focusin", "onFocus"), oa("focusout", "onBlur"), oa(Iu, "onTransitionRun"), oa(Fu, "onTransitionStart"), oa(Qu, "onTransitionCancel"), oa(ns, "onTransitionEnd"), mi("onMouseEnter", ["mouseout", "mouseover"]), mi("onMouseLeave", ["mouseout", "mouseover"]), mi("onPointerEnter", ["pointerout", "pointerover"]), mi("onPointerLeave", ["pointerout", "pointerover"]), Fn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Fn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Fn("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Fn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Fn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Fn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var js = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), c_ = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(js)
  );
  function av(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n], u = l.event;
      l = l.listeners;
      e: {
        var f = void 0;
        if (t)
          for (var g = l.length - 1; 0 <= g; g--) {
            var _ = l[g], w = _.instance, q = _.currentTarget;
            if (_ = _.listener, w !== f && u.isPropagationStopped())
              break e;
            f = _, u.currentTarget = q;
            try {
              f(u);
            } catch (K) {
              Jl(K);
            }
            u.currentTarget = null, f = w;
          }
        else
          for (g = 0; g < l.length; g++) {
            if (_ = l[g], w = _.instance, q = _.currentTarget, _ = _.listener, w !== f && u.isPropagationStopped())
              break e;
            f = _, u.currentTarget = q;
            try {
              f(u);
            } catch (K) {
              Jl(K);
            }
            u.currentTarget = null, f = w;
          }
      }
    }
  }
  function Qe(e, t) {
    var n = t[Ro];
    n === void 0 && (n = t[Ro] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    n.has(l) || (iv(t, e, 2, !1), n.add(l));
  }
  function uh(e, t, n) {
    var l = 0;
    t && (l |= 4), iv(
      n,
      e,
      l,
      t
    );
  }
  var xc = "_reactListening" + Math.random().toString(36).slice(2);
  function ch(e) {
    if (!e[xc]) {
      e[xc] = !0, Do.forEach(function(n) {
        n !== "selectionchange" && (c_.has(n) || uh(n, !1, e), uh(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[xc] || (t[xc] = !0, uh("selectionchange", !1, t));
    }
  }
  function iv(e, t, n, l) {
    switch (jv(t)) {
      case 2:
        var u = U_;
        break;
      case 8:
        u = B_;
        break;
      default:
        u = xh;
    }
    n = u.bind(
      null,
      t,
      n,
      e
    ), u = void 0, !Bo || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), l ? u !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: u
    }) : e.addEventListener(t, n, !0) : u !== void 0 ? e.addEventListener(t, n, {
      passive: u
    }) : e.addEventListener(t, n, !1);
  }
  function fh(e, t, n, l, u) {
    var f = l;
    if ((t & 1) === 0 && (t & 2) === 0 && l !== null)
      e: for (; ; ) {
        if (l === null) return;
        var g = l.tag;
        if (g === 3 || g === 4) {
          var _ = l.stateNode.containerInfo;
          if (_ === u) break;
          if (g === 4)
            for (g = l.return; g !== null; ) {
              var w = g.tag;
              if ((w === 3 || w === 4) && g.stateNode.containerInfo === u)
                return;
              g = g.return;
            }
          for (; _ !== null; ) {
            if (g = kt(_), g === null) return;
            if (w = g.tag, w === 5 || w === 6 || w === 26 || w === 27) {
              l = f = g;
              continue e;
            }
            _ = _.parentNode;
          }
        }
        l = l.return;
      }
    Uo(function() {
      var q = f, K = Ar(n), P = [];
      e: {
        var G = Zu.get(e);
        if (G !== void 0) {
          var I = tl, pe = e;
          switch (e) {
            case "keypress":
              if (vi(n) === 0) break e;
            case "keydown":
            case "keyup":
              I = wu;
              break;
            case "focusin":
              pe = "focus", I = Dr;
              break;
            case "focusout":
              pe = "blur", I = Dr;
              break;
            case "beforeblur":
            case "afterblur":
              I = Dr;
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
              I = _u;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              I = Eu;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              I = Mu;
              break;
            case ba:
            case ts:
            case Xu:
              I = ko;
              break;
            case ns:
              I = rd;
              break;
            case "scroll":
            case "scrollend":
              I = Xl;
              break;
            case "wheel":
              I = sd;
              break;
            case "copy":
            case "cut":
            case "paste":
              I = ed;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              I = jr;
              break;
            case "toggle":
            case "beforetoggle":
              I = Du;
          }
          var Te = (t & 4) !== 0, bt = !Te && (e === "scroll" || e === "scrollend"), V = Te ? G !== null ? G + "Capture" : null : G;
          Te = [];
          for (var M = q, $; M !== null; ) {
            var J = M;
            if ($ = J.stateNode, J = J.tag, J !== 5 && J !== 26 && J !== 27 || $ === null || V === null || (J = Ji(M, V), J != null && Te.push(
              zs(M, J, $)
            )), bt) break;
            M = M.return;
          }
          0 < Te.length && (G = new I(
            G,
            pe,
            null,
            n,
            K
          ), P.push({ event: G, listeners: Te }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (G = e === "mouseover" || e === "pointerover", I = e === "mouseout" || e === "pointerout", G && n !== Zi && (pe = n.relatedTarget || n.fromElement) && (kt(pe) || pe[Ia]))
            break e;
          if ((I || G) && (G = K.window === K ? K : (G = K.ownerDocument) ? G.defaultView || G.parentWindow : window, I ? (pe = n.relatedTarget || n.toElement, I = q, pe = pe ? kt(pe) : null, pe !== null && (bt = d(pe), Te = pe.tag, pe !== bt || Te !== 5 && Te !== 27 && Te !== 6) && (pe = null)) : (I = null, pe = q), I !== pe)) {
            if (Te = _u, J = "onMouseLeave", V = "onMouseEnter", M = "mouse", (e === "pointerout" || e === "pointerover") && (Te = jr, J = "onPointerLeave", V = "onPointerEnter", M = "pointer"), bt = I == null ? G : ma(I), $ = pe == null ? G : ma(pe), G = new Te(
              J,
              M + "leave",
              I,
              n,
              K
            ), G.target = bt, G.relatedTarget = $, J = null, kt(K) === q && (Te = new Te(
              V,
              M + "enter",
              pe,
              n,
              K
            ), Te.target = $, Te.relatedTarget = bt, J = Te), bt = J, I && pe)
              t: {
                for (Te = f_, V = I, M = pe, $ = 0, J = V; J; J = Te(J))
                  $++;
                J = 0;
                for (var _e = M; _e; _e = Te(_e))
                  J++;
                for (; 0 < $ - J; )
                  V = Te(V), $--;
                for (; 0 < J - $; )
                  M = Te(M), J--;
                for (; $--; ) {
                  if (V === M || M !== null && V === M.alternate) {
                    Te = V;
                    break t;
                  }
                  V = Te(V), M = Te(M);
                }
                Te = null;
              }
            else Te = null;
            I !== null && lv(
              P,
              G,
              I,
              Te,
              !1
            ), pe !== null && bt !== null && lv(
              P,
              bt,
              pe,
              Te,
              !0
            );
          }
        }
        e: {
          if (G = q ? ma(q) : window, I = G.nodeName && G.nodeName.toLowerCase(), I === "select" || I === "input" && G.type === "file")
            var it = Go;
          else if (Qn(G))
            if (Zl)
              it = Lr;
            else {
              it = Bu;
              var me = Uu;
            }
          else
            I = G.nodeName, !I || I.toLowerCase() !== "input" || G.type !== "checkbox" && G.type !== "radio" ? q && Gl(q.elementType) && (it = Go) : it = $u;
          if (it && (it = it(e, q))) {
            Yo(
              P,
              it,
              n,
              K
            );
            break e;
          }
          me && me(e, G, q), e === "focusout" && q && G.type === "number" && q.memoizedProps.value != null && ql(G, "number", G.value);
        }
        switch (me = q ? ma(q) : window, e) {
          case "focusin":
            (Qn(me) || me.contentEditable === "true") && (ol = me, Jo = q, Kl = null);
            break;
          case "focusout":
            Kl = Jo = ol = null;
            break;
          case "mousedown":
            Wo = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Wo = !1, Po(P, n, K);
            break;
          case "selectionchange":
            if (md) break;
          case "keydown":
          case "keyup":
            Po(P, n, K);
        }
        var qe;
        if (Za)
          e: {
            switch (e) {
              case "compositionstart":
                var Ke = "onCompositionStart";
                break e;
              case "compositionend":
                Ke = "onCompositionEnd";
                break e;
              case "compositionupdate":
                Ke = "onCompositionUpdate";
                break e;
            }
            Ke = void 0;
          }
        else
          il ? zu(e, n) && (Ke = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (Ke = "onCompositionStart");
        Ke && (Ql && n.locale !== "ko" && (il || Ke !== "onCompositionStart" ? Ke === "onCompositionEnd" && il && (qe = bu()) : (ya = K, Pi = "value" in ya ? ya.value : ya.textContent, il = !0)), me = Tc(q, Ke), 0 < me.length && (Ke = new qo(
          Ke,
          e,
          null,
          n,
          K
        ), P.push({ event: Ke, listeners: me }), qe ? Ke.data = qe : (qe = Lu(n), qe !== null && (Ke.data = qe)))), (qe = cd ? fd(e, n) : dd(e, n)) && (Ke = Tc(q, "onBeforeInput"), 0 < Ke.length && (me = new qo(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          K
        ), P.push({
          event: me,
          listeners: Ke
        }), me.data = qe)), o_(
          P,
          e,
          q,
          n,
          K
        );
      }
      av(P, t);
    });
  }
  function zs(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Tc(e, t) {
    for (var n = t + "Capture", l = []; e !== null; ) {
      var u = e, f = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || f === null || (u = Ji(e, n), u != null && l.unshift(
        zs(e, u, f)
      ), u = Ji(e, t), u != null && l.push(
        zs(e, u, f)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function f_(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function lv(e, t, n, l, u) {
    for (var f = t._reactName, g = []; n !== null && n !== l; ) {
      var _ = n, w = _.alternate, q = _.stateNode;
      if (_ = _.tag, w !== null && w === l) break;
      _ !== 5 && _ !== 26 && _ !== 27 || q === null || (w = q, u ? (q = Ji(n, f), q != null && g.unshift(
        zs(n, q, w)
      )) : u || (q = Ji(n, f), q != null && g.push(
        zs(n, q, w)
      ))), n = n.return;
    }
    g.length !== 0 && e.push({ event: t, listeners: g });
  }
  var d_ = /\r\n?/g, h_ = /\u0000|\uFFFD/g;
  function rv(e) {
    return (typeof e == "string" ? e : "" + e).replace(d_, `
`).replace(h_, "");
  }
  function ov(e, t) {
    return t = rv(t), rv(e) === t;
  }
  function yt(e, t, n, l, u, f) {
    switch (n) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || la(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && la(e, "" + l);
        break;
      case "className":
        kl(e, "class", l);
        break;
      case "tabIndex":
        kl(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        kl(e, n, l);
        break;
      case "style":
        gi(e, l, f);
        break;
      case "data":
        if (t !== "object") {
          kl(e, "data", l);
          break;
        }
      case "src":
      case "href":
        if (l === "" && (t !== "a" || n !== "href")) {
          e.removeAttribute(n);
          break;
        }
        if (l == null || typeof l == "function" || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        l = Tr("" + l), e.setAttribute(n, l);
        break;
      case "action":
      case "formAction":
        if (typeof l == "function") {
          e.setAttribute(
            n,
            "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
          );
          break;
        } else
          typeof f == "function" && (n === "formAction" ? (t !== "input" && yt(e, t, "name", u.name, u, null), yt(
            e,
            t,
            "formEncType",
            u.formEncType,
            u,
            null
          ), yt(
            e,
            t,
            "formMethod",
            u.formMethod,
            u,
            null
          ), yt(
            e,
            t,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (yt(e, t, "encType", u.encType, u, null), yt(e, t, "method", u.method, u, null), yt(e, t, "target", u.target, u, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        l = Tr("" + l), e.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (e.onclick = cn);
        break;
      case "onScroll":
        l != null && Qe("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Qe("scrollend", e);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(o(61));
          if (n = l.__html, n != null) {
            if (u.children != null) throw Error(o(60));
            e.innerHTML = n;
          }
        }
        break;
      case "multiple":
        e.multiple = l && typeof l != "function" && typeof l != "symbol";
        break;
      case "muted":
        e.muted = l && typeof l != "function" && typeof l != "symbol";
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
        if (l == null || typeof l == "function" || typeof l == "boolean" || typeof l == "symbol") {
          e.removeAttribute("xlink:href");
          break;
        }
        n = Tr("" + l), e.setAttributeNS(
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
        l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, "" + l) : e.removeAttribute(n);
        break;
      case "inert":
      case "allowFullScreen":
      case "async":
      case "autoPlay":
      case "controls":
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
        l && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, "") : e.removeAttribute(n);
        break;
      case "capture":
      case "download":
        l === !0 ? e.setAttribute(n, "") : l !== !1 && l != null && typeof l != "function" && typeof l != "symbol" ? e.setAttribute(n, l) : e.removeAttribute(n);
        break;
      case "cols":
      case "rows":
      case "size":
      case "span":
        l != null && typeof l != "function" && typeof l != "symbol" && !isNaN(l) && 1 <= l ? e.setAttribute(n, l) : e.removeAttribute(n);
        break;
      case "rowSpan":
      case "start":
        l == null || typeof l == "function" || typeof l == "symbol" || isNaN(l) ? e.removeAttribute(n) : e.setAttribute(n, l);
        break;
      case "popover":
        Qe("beforetoggle", e), Qe("toggle", e), $l(e, "popover", l);
        break;
      case "xlinkActuate":
        ga(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        ga(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        ga(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        ga(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        ga(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        ga(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        ga(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        ga(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        ga(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        $l(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = yu.get(n) || n, $l(e, n, l));
    }
  }
  function dh(e, t, n, l, u, f) {
    switch (n) {
      case "style":
        gi(e, l, f);
        break;
      case "dangerouslySetInnerHTML":
        if (l != null) {
          if (typeof l != "object" || !("__html" in l))
            throw Error(o(61));
          if (n = l.__html, n != null) {
            if (u.children != null) throw Error(o(60));
            e.innerHTML = n;
          }
        }
        break;
      case "children":
        typeof l == "string" ? la(e, l) : (typeof l == "number" || typeof l == "bigint") && la(e, "" + l);
        break;
      case "onScroll":
        l != null && Qe("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Qe("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = cn);
        break;
      case "suppressContentEditableWarning":
      case "suppressHydrationWarning":
      case "innerHTML":
      case "ref":
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        if (!Er.hasOwnProperty(n))
          e: {
            if (n[0] === "o" && n[1] === "n" && (u = n.endsWith("Capture"), t = n.slice(2, u ? n.length - 7 : void 0), f = e[xn] || null, f = f != null ? f[n] : null, typeof f == "function" && e.removeEventListener(t, f, u), typeof l == "function")) {
              typeof f != "function" && f !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, l, u);
              break e;
            }
            n in e ? e[n] = l : l === !0 ? e.setAttribute(n, "") : $l(e, n, l);
          }
    }
  }
  function Cn(e, t, n) {
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
        Qe("error", e), Qe("load", e);
        var l = !1, u = !1, f;
        for (f in n)
          if (n.hasOwnProperty(f)) {
            var g = n[f];
            if (g != null)
              switch (f) {
                case "src":
                  l = !0;
                  break;
                case "srcSet":
                  u = !0;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  throw Error(o(137, t));
                default:
                  yt(e, t, f, g, n, null);
              }
          }
        u && yt(e, t, "srcSet", n.srcSet, n, null), l && yt(e, t, "src", n.src, n, null);
        return;
      case "input":
        Qe("invalid", e);
        var _ = f = g = u = null, w = null, q = null;
        for (l in n)
          if (n.hasOwnProperty(l)) {
            var K = n[l];
            if (K != null)
              switch (l) {
                case "name":
                  u = K;
                  break;
                case "type":
                  g = K;
                  break;
                case "checked":
                  w = K;
                  break;
                case "defaultChecked":
                  q = K;
                  break;
                case "value":
                  f = K;
                  break;
                case "defaultValue":
                  _ = K;
                  break;
                case "children":
                case "dangerouslySetInnerHTML":
                  if (K != null)
                    throw Error(o(137, t));
                  break;
                default:
                  yt(e, t, l, K, n, null);
              }
          }
        xr(
          e,
          f,
          _,
          w,
          q,
          g,
          u,
          !1
        );
        return;
      case "select":
        Qe("invalid", e), l = g = f = null;
        for (u in n)
          if (n.hasOwnProperty(u) && (_ = n[u], _ != null))
            switch (u) {
              case "value":
                f = _;
                break;
              case "defaultValue":
                g = _;
                break;
              case "multiple":
                l = _;
              default:
                yt(e, t, u, _, n, null);
            }
        t = f, n = g, e.multiple = !!l, t != null ? bn(e, !!l, t, !1) : n != null && bn(e, !!l, n, !0);
        return;
      case "textarea":
        Qe("invalid", e), f = u = l = null;
        for (g in n)
          if (n.hasOwnProperty(g) && (_ = n[g], _ != null))
            switch (g) {
              case "value":
                l = _;
                break;
              case "defaultValue":
                u = _;
                break;
              case "children":
                f = _;
                break;
              case "dangerouslySetInnerHTML":
                if (_ != null) throw Error(o(91));
                break;
              default:
                yt(e, t, g, _, n, null);
            }
        Yl(e, l, u, f);
        return;
      case "option":
        for (w in n)
          if (n.hasOwnProperty(w) && (l = n[w], l != null))
            switch (w) {
              case "selected":
                e.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                yt(e, t, w, l, n, null);
            }
        return;
      case "dialog":
        Qe("beforetoggle", e), Qe("toggle", e), Qe("cancel", e), Qe("close", e);
        break;
      case "iframe":
      case "object":
        Qe("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < js.length; l++)
          Qe(js[l], e);
        break;
      case "image":
        Qe("error", e), Qe("load", e);
        break;
      case "details":
        Qe("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Qe("error", e), Qe("load", e);
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
        for (q in n)
          if (n.hasOwnProperty(q) && (l = n[q], l != null))
            switch (q) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                yt(e, t, q, l, n, null);
            }
        return;
      default:
        if (Gl(t)) {
          for (K in n)
            n.hasOwnProperty(K) && (l = n[K], l !== void 0 && dh(
              e,
              t,
              K,
              l,
              n,
              void 0
            ));
          return;
        }
    }
    for (_ in n)
      n.hasOwnProperty(_) && (l = n[_], l != null && yt(e, t, _, l, n, null));
  }
  function p_(e, t, n, l) {
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
        var u = null, f = null, g = null, _ = null, w = null, q = null, K = null;
        for (I in n) {
          var P = n[I];
          if (n.hasOwnProperty(I) && P != null)
            switch (I) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                w = P;
              default:
                l.hasOwnProperty(I) || yt(e, t, I, null, l, P);
            }
        }
        for (var G in l) {
          var I = l[G];
          if (P = n[G], l.hasOwnProperty(G) && (I != null || P != null))
            switch (G) {
              case "type":
                f = I;
                break;
              case "name":
                u = I;
                break;
              case "checked":
                q = I;
                break;
              case "defaultChecked":
                K = I;
                break;
              case "value":
                g = I;
                break;
              case "defaultValue":
                _ = I;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (I != null)
                  throw Error(o(137, t));
                break;
              default:
                I !== P && yt(
                  e,
                  t,
                  G,
                  I,
                  l,
                  P
                );
            }
        }
        Tn(
          e,
          g,
          _,
          w,
          q,
          K,
          f,
          u
        );
        return;
      case "select":
        I = g = _ = G = null;
        for (f in n)
          if (w = n[f], n.hasOwnProperty(f) && w != null)
            switch (f) {
              case "value":
                break;
              case "multiple":
                I = w;
              default:
                l.hasOwnProperty(f) || yt(
                  e,
                  t,
                  f,
                  null,
                  l,
                  w
                );
            }
        for (u in l)
          if (f = l[u], w = n[u], l.hasOwnProperty(u) && (f != null || w != null))
            switch (u) {
              case "value":
                G = f;
                break;
              case "defaultValue":
                _ = f;
                break;
              case "multiple":
                g = f;
              default:
                f !== w && yt(
                  e,
                  t,
                  u,
                  f,
                  l,
                  w
                );
            }
        t = _, n = g, l = I, G != null ? bn(e, !!n, G, !1) : !!l != !!n && (t != null ? bn(e, !!n, t, !0) : bn(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        I = G = null;
        for (_ in n)
          if (u = n[_], n.hasOwnProperty(_) && u != null && !l.hasOwnProperty(_))
            switch (_) {
              case "value":
                break;
              case "children":
                break;
              default:
                yt(e, t, _, null, l, u);
            }
        for (g in l)
          if (u = l[g], f = n[g], l.hasOwnProperty(g) && (u != null || f != null))
            switch (g) {
              case "value":
                G = u;
                break;
              case "defaultValue":
                I = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(o(91));
                break;
              default:
                u !== f && yt(e, t, g, u, l, f);
            }
        Fa(e, G, I);
        return;
      case "option":
        for (var pe in n)
          if (G = n[pe], n.hasOwnProperty(pe) && G != null && !l.hasOwnProperty(pe))
            switch (pe) {
              case "selected":
                e.selected = !1;
                break;
              default:
                yt(
                  e,
                  t,
                  pe,
                  null,
                  l,
                  G
                );
            }
        for (w in l)
          if (G = l[w], I = n[w], l.hasOwnProperty(w) && G !== I && (G != null || I != null))
            switch (w) {
              case "selected":
                e.selected = G && typeof G != "function" && typeof G != "symbol";
                break;
              default:
                yt(
                  e,
                  t,
                  w,
                  G,
                  l,
                  I
                );
            }
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
        for (var Te in n)
          G = n[Te], n.hasOwnProperty(Te) && G != null && !l.hasOwnProperty(Te) && yt(e, t, Te, null, l, G);
        for (q in l)
          if (G = l[q], I = n[q], l.hasOwnProperty(q) && G !== I && (G != null || I != null))
            switch (q) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (G != null)
                  throw Error(o(137, t));
                break;
              default:
                yt(
                  e,
                  t,
                  q,
                  G,
                  l,
                  I
                );
            }
        return;
      default:
        if (Gl(t)) {
          for (var bt in n)
            G = n[bt], n.hasOwnProperty(bt) && G !== void 0 && !l.hasOwnProperty(bt) && dh(
              e,
              t,
              bt,
              void 0,
              l,
              G
            );
          for (K in l)
            G = l[K], I = n[K], !l.hasOwnProperty(K) || G === I || G === void 0 && I === void 0 || dh(
              e,
              t,
              K,
              G,
              l,
              I
            );
          return;
        }
    }
    for (var V in n)
      G = n[V], n.hasOwnProperty(V) && G != null && !l.hasOwnProperty(V) && yt(e, t, V, null, l, G);
    for (P in l)
      G = l[P], I = n[P], !l.hasOwnProperty(P) || G === I || G == null && I == null || yt(e, t, P, G, l, I);
  }
  function sv(e) {
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
  function m_() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), l = 0; l < n.length; l++) {
        var u = n[l], f = u.transferSize, g = u.initiatorType, _ = u.duration;
        if (f && _ && sv(g)) {
          for (g = 0, _ = u.responseEnd, l += 1; l < n.length; l++) {
            var w = n[l], q = w.startTime;
            if (q > _) break;
            var K = w.transferSize, P = w.initiatorType;
            K && sv(P) && (w = w.responseEnd, g += K * (w < _ ? 1 : (_ - q) / (w - q)));
          }
          if (--l, t += 8 * (f + g) / (u.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var hh = null, ph = null;
  function Ac(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function uv(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function cv(e, t) {
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
  function mh(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var gh = null;
  function g_() {
    var e = window.event;
    return e && e.type === "popstate" ? e === gh ? !1 : (gh = e, !0) : (gh = null, !1);
  }
  var fv = typeof setTimeout == "function" ? setTimeout : void 0, v_ = typeof clearTimeout == "function" ? clearTimeout : void 0, dv = typeof Promise == "function" ? Promise : void 0, y_ = typeof queueMicrotask == "function" ? queueMicrotask : typeof dv < "u" ? function(e) {
    return dv.resolve(null).then(e).catch(b_);
  } : fv;
  function b_(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function Tl(e) {
    return e === "head";
  }
  function hv(e, t) {
    var n = t, l = 0;
    do {
      var u = n.nextSibling;
      if (e.removeChild(n), u && u.nodeType === 8)
        if (n = u.data, n === "/$" || n === "/&") {
          if (l === 0) {
            e.removeChild(u), ro(t);
            return;
          }
          l--;
        } else if (n === "$" || n === "$?" || n === "$~" || n === "$!" || n === "&")
          l++;
        else if (n === "html")
          Ls(e.ownerDocument.documentElement);
        else if (n === "head") {
          n = e.ownerDocument.head, Ls(n);
          for (var f = n.firstChild; f; ) {
            var g = f.nextSibling, _ = f.nodeName;
            f[an] || _ === "SCRIPT" || _ === "STYLE" || _ === "LINK" && f.rel.toLowerCase() === "stylesheet" || n.removeChild(f), f = g;
          }
        } else
          n === "body" && Ls(e.ownerDocument.body);
      n = u;
    } while (n);
    ro(t);
  }
  function pv(e, t) {
    var n = e;
    e = 0;
    do {
      var l = n.nextSibling;
      if (n.nodeType === 1 ? t ? (n._stashedDisplay = n.style.display, n.style.display = "none") : (n.style.display = n._stashedDisplay || "", n.getAttribute("style") === "" && n.removeAttribute("style")) : n.nodeType === 3 && (t ? (n._stashedText = n.nodeValue, n.nodeValue = "") : n.nodeValue = n._stashedText || ""), l && l.nodeType === 8)
        if (n = l.data, n === "/$") {
          if (e === 0) break;
          e--;
        } else
          n !== "$" && n !== "$?" && n !== "$~" && n !== "$!" || e++;
      n = l;
    } while (n);
  }
  function vh(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          vh(n), yn(n);
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
  function __(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var u = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[an])
          switch (t) {
            case "meta":
              if (!e.hasAttribute("itemprop")) break;
              return e;
            case "link":
              if (f = e.getAttribute("rel"), f === "stylesheet" && e.hasAttribute("data-precedence"))
                break;
              if (f !== u.rel || e.getAttribute("href") !== (u.href == null || u.href === "" ? null : u.href) || e.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin) || e.getAttribute("title") !== (u.title == null ? null : u.title))
                break;
              return e;
            case "style":
              if (e.hasAttribute("data-precedence")) break;
              return e;
            case "script":
              if (f = e.getAttribute("src"), (f !== (u.src == null ? null : u.src) || e.getAttribute("type") !== (u.type == null ? null : u.type) || e.getAttribute("crossorigin") !== (u.crossOrigin == null ? null : u.crossOrigin)) && f && e.hasAttribute("async") && !e.hasAttribute("itemprop"))
                break;
              return e;
            default:
              return e;
          }
      } else if (t === "input" && e.type === "hidden") {
        var f = u.name == null ? null : "" + u.name;
        if (u.type === "hidden" && e.getAttribute("name") === f)
          return e;
      } else return e;
      if (e = Oa(e.nextSibling), e === null) break;
    }
    return null;
  }
  function S_(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Oa(e.nextSibling), e === null)) return null;
    return e;
  }
  function mv(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Oa(e.nextSibling), e === null)) return null;
    return e;
  }
  function yh(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function bh(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function E_(e, t) {
    var n = e.ownerDocument;
    if (e.data === "$~") e._reactRetry = t;
    else if (e.data !== "$?" || n.readyState !== "loading")
      t();
    else {
      var l = function() {
        t(), n.removeEventListener("DOMContentLoaded", l);
      };
      n.addEventListener("DOMContentLoaded", l), e._reactRetry = l;
    }
  }
  function Oa(e) {
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
  var _h = null;
  function gv(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0)
            return Oa(e.nextSibling);
          t--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function vv(e) {
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
  function yv(e, t, n) {
    switch (t = Ac(n), e) {
      case "html":
        if (e = t.documentElement, !e) throw Error(o(452));
        return e;
      case "head":
        if (e = t.head, !e) throw Error(o(453));
        return e;
      case "body":
        if (e = t.body, !e) throw Error(o(454));
        return e;
      default:
        throw Error(o(451));
    }
  }
  function Ls(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    yn(e);
  }
  var xa = /* @__PURE__ */ new Map(), bv = /* @__PURE__ */ new Set();
  function wc(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var Li = ae.d;
  ae.d = {
    f: C_,
    r: O_,
    D: x_,
    C: T_,
    L: A_,
    m: w_,
    X: R_,
    S: M_,
    M: D_
  };
  function C_() {
    var e = Li.f(), t = bc();
    return e || t;
  }
  function O_(e) {
    var t = wa(e);
    t !== null && t.tag === 5 && t.type === "form" ? Hm(t) : Li.r(e);
  }
  var ao = typeof document > "u" ? null : document;
  function _v(e, t, n) {
    var l = ao;
    if (l && typeof t == "string" && t) {
      var u = Qt(t);
      u = 'link[rel="' + e + '"][href="' + u + '"]', typeof n == "string" && (u += '[crossorigin="' + n + '"]'), bv.has(u) || (bv.add(u), e = { rel: e, crossOrigin: n, href: t }, l.querySelector(u) === null && (t = l.createElement("link"), Cn(t, "link", e), Mt(t), l.head.appendChild(t)));
    }
  }
  function x_(e) {
    Li.D(e), _v("dns-prefetch", e, null);
  }
  function T_(e, t) {
    Li.C(e, t), _v("preconnect", e, t);
  }
  function A_(e, t, n) {
    Li.L(e, t, n);
    var l = ao;
    if (l && e && t) {
      var u = 'link[rel="preload"][as="' + Qt(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (u += '[imagesrcset="' + Qt(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (u += '[imagesizes="' + Qt(
        n.imageSizes
      ) + '"]')) : u += '[href="' + Qt(e) + '"]';
      var f = u;
      switch (t) {
        case "style":
          f = io(e);
          break;
        case "script":
          f = lo(e);
      }
      xa.has(f) || (e = x(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), xa.set(f, e), l.querySelector(u) !== null || t === "style" && l.querySelector(Hs(f)) || t === "script" && l.querySelector(Vs(f)) || (t = l.createElement("link"), Cn(t, "link", e), Mt(t), l.head.appendChild(t)));
    }
  }
  function w_(e, t) {
    Li.m(e, t);
    var n = ao;
    if (n && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + Qt(l) + '"][href="' + Qt(e) + '"]', f = u;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = lo(e);
      }
      if (!xa.has(f) && (e = x({ rel: "modulepreload", href: e }, t), xa.set(f, e), n.querySelector(u) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Vs(f)))
              return;
        }
        l = n.createElement("link"), Cn(l, "link", e), Mt(l), n.head.appendChild(l);
      }
    }
  }
  function M_(e, t, n) {
    Li.S(e, t, n);
    var l = ao;
    if (l && e) {
      var u = In(l).hoistableStyles, f = io(e);
      t = t || "default";
      var g = u.get(f);
      if (!g) {
        var _ = { loading: 0, preload: null };
        if (g = l.querySelector(
          Hs(f)
        ))
          _.loading = 5;
        else {
          e = x(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = xa.get(f)) && Sh(e, n);
          var w = g = l.createElement("link");
          Mt(w), Cn(w, "link", e), w._p = new Promise(function(q, K) {
            w.onload = q, w.onerror = K;
          }), w.addEventListener("load", function() {
            _.loading |= 1;
          }), w.addEventListener("error", function() {
            _.loading |= 2;
          }), _.loading |= 4, Mc(g, t, l);
        }
        g = {
          type: "stylesheet",
          instance: g,
          count: 1,
          state: _
        }, u.set(f, g);
      }
    }
  }
  function R_(e, t) {
    Li.X(e, t);
    var n = ao;
    if (n && e) {
      var l = In(n).hoistableScripts, u = lo(e), f = l.get(u);
      f || (f = n.querySelector(Vs(u)), f || (e = x({ src: e, async: !0 }, t), (t = xa.get(u)) && Eh(e, t), f = n.createElement("script"), Mt(f), Cn(f, "link", e), n.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, l.set(u, f));
    }
  }
  function D_(e, t) {
    Li.M(e, t);
    var n = ao;
    if (n && e) {
      var l = In(n).hoistableScripts, u = lo(e), f = l.get(u);
      f || (f = n.querySelector(Vs(u)), f || (e = x({ src: e, async: !0, type: "module" }, t), (t = xa.get(u)) && Eh(e, t), f = n.createElement("script"), Mt(f), Cn(f, "link", e), n.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, l.set(u, f));
    }
  }
  function Sv(e, t, n, l) {
    var u = (u = ue.current) ? wc(u) : null;
    if (!u) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = io(n.href), n = In(
          u
        ).hoistableStyles, l = n.get(t), l || (l = {
          type: "style",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      case "link":
        if (n.rel === "stylesheet" && typeof n.href == "string" && typeof n.precedence == "string") {
          e = io(n.href);
          var f = In(
            u
          ).hoistableStyles, g = f.get(e);
          if (g || (u = u.ownerDocument || u, g = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, f.set(e, g), (f = u.querySelector(
            Hs(e)
          )) && !f._p && (g.instance = f, g.state.loading = 5), xa.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, xa.set(e, n), f || N_(
            u,
            e,
            n,
            g.state
          ))), t && l === null)
            throw Error(o(528, ""));
          return g;
        }
        if (t && l !== null)
          throw Error(o(529, ""));
        return null;
      case "script":
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = lo(n), n = In(
          u
        ).hoistableScripts, l = n.get(t), l || (l = {
          type: "script",
          instance: null,
          count: 0,
          state: null
        }, n.set(t, l)), l) : { type: "void", instance: null, count: 0, state: null };
      default:
        throw Error(o(444, e));
    }
  }
  function io(e) {
    return 'href="' + Qt(e) + '"';
  }
  function Hs(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function Ev(e) {
    return x({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function N_(e, t, n, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), Cn(t, "link", n), Mt(t), e.head.appendChild(t));
  }
  function lo(e) {
    return '[src="' + Qt(e) + '"]';
  }
  function Vs(e) {
    return "script[async]" + e;
  }
  function Cv(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + Qt(n.href) + '"]'
          );
          if (l)
            return t.instance = l, Mt(l), l;
          var u = x({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), Mt(l), Cn(l, "style", u), Mc(l, n.precedence, e), t.instance = l;
        case "stylesheet":
          u = io(n.href);
          var f = e.querySelector(
            Hs(u)
          );
          if (f)
            return t.state.loading |= 4, t.instance = f, Mt(f), f;
          l = Ev(n), (u = xa.get(u)) && Sh(l, u), f = (e.ownerDocument || e).createElement("link"), Mt(f);
          var g = f;
          return g._p = new Promise(function(_, w) {
            g.onload = _, g.onerror = w;
          }), Cn(f, "link", l), t.state.loading |= 4, Mc(f, n.precedence, e), t.instance = f;
        case "script":
          return f = lo(n.src), (u = e.querySelector(
            Vs(f)
          )) ? (t.instance = u, Mt(u), u) : (l = n, (u = xa.get(f)) && (l = x({}, n), Eh(l, u)), e = e.ownerDocument || e, u = e.createElement("script"), Mt(u), Cn(u, "link", l), e.head.appendChild(u), t.instance = u);
        case "void":
          return null;
        default:
          throw Error(o(443, t.type));
      }
    else
      t.type === "stylesheet" && (t.state.loading & 4) === 0 && (l = t.instance, t.state.loading |= 4, Mc(l, n.precedence, e));
    return t.instance;
  }
  function Mc(e, t, n) {
    for (var l = n.querySelectorAll(
      'link[rel="stylesheet"][data-precedence],style[data-precedence]'
    ), u = l.length ? l[l.length - 1] : null, f = u, g = 0; g < l.length; g++) {
      var _ = l[g];
      if (_.dataset.precedence === t) f = _;
      else if (f !== u) break;
    }
    f ? f.parentNode.insertBefore(e, f.nextSibling) : (t = n.nodeType === 9 ? n.head : n, t.insertBefore(e, t.firstChild));
  }
  function Sh(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Eh(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Rc = null;
  function Ov(e, t, n) {
    if (Rc === null) {
      var l = /* @__PURE__ */ new Map(), u = Rc = /* @__PURE__ */ new Map();
      u.set(n, l);
    } else
      u = Rc, l = u.get(n), l || (l = /* @__PURE__ */ new Map(), u.set(n, l));
    if (l.has(e)) return l;
    for (l.set(e, null), n = n.getElementsByTagName(e), u = 0; u < n.length; u++) {
      var f = n[u];
      if (!(f[an] || f[$t] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== "http://www.w3.org/2000/svg") {
        var g = f.getAttribute(t) || "";
        g = e + g;
        var _ = l.get(g);
        _ ? _.push(f) : l.set(g, [f]);
      }
    }
    return l;
  }
  function xv(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function j_(e, t, n) {
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
        switch (t.rel) {
          case "stylesheet":
            return e = t.disabled, typeof t.precedence == "string" && e == null;
          default:
            return !0;
        }
      case "script":
        if (t.async && typeof t.async != "function" && typeof t.async != "symbol" && !t.onLoad && !t.onError && t.src && typeof t.src == "string")
          return !0;
    }
    return !1;
  }
  function Tv(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function z_(e, t, n, l) {
    if (n.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var u = io(l.href), f = t.querySelector(
          Hs(u)
        );
        if (f) {
          t = f._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Dc.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = f, Mt(f);
          return;
        }
        f = t.ownerDocument || t, l = Ev(l), (u = xa.get(u)) && Sh(l, u), f = f.createElement("link"), Mt(f);
        var g = f;
        g._p = new Promise(function(_, w) {
          g.onload = _, g.onerror = w;
        }), Cn(f, "link", l), n.instance = f;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Dc.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var Ch = 0;
  function L_(e, t) {
    return e.stylesheets && e.count === 0 && jc(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var l = setTimeout(function() {
        if (e.stylesheets && jc(e, e.stylesheets), e.unsuspend) {
          var f = e.unsuspend;
          e.unsuspend = null, f();
        }
      }, 6e4 + t);
      0 < e.imgBytes && Ch === 0 && (Ch = 62500 * m_());
      var u = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && jc(e, e.stylesheets), e.unsuspend)) {
            var f = e.unsuspend;
            e.unsuspend = null, f();
          }
        },
        (e.imgBytes > Ch ? 50 : 800) + t
      );
      return e.unsuspend = n, function() {
        e.unsuspend = null, clearTimeout(l), clearTimeout(u);
      };
    } : null;
  }
  function Dc() {
    if (this.count--, this.count === 0 && (this.imgCount === 0 || !this.waitingForImages)) {
      if (this.stylesheets) jc(this, this.stylesheets);
      else if (this.unsuspend) {
        var e = this.unsuspend;
        this.unsuspend = null, e();
      }
    }
  }
  var Nc = null;
  function jc(e, t) {
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Nc = /* @__PURE__ */ new Map(), t.forEach(H_, e), Nc = null, Dc.call(e));
  }
  function H_(e, t) {
    if (!(t.state.loading & 4)) {
      var n = Nc.get(e);
      if (n) var l = n.get(null);
      else {
        n = /* @__PURE__ */ new Map(), Nc.set(e, n);
        for (var u = e.querySelectorAll(
          "link[data-precedence],style[data-precedence]"
        ), f = 0; f < u.length; f++) {
          var g = u[f];
          (g.nodeName === "LINK" || g.getAttribute("media") !== "not all") && (n.set(g.dataset.precedence, g), l = g);
        }
        l && n.set(null, l);
      }
      u = t.instance, g = u.getAttribute("data-precedence"), f = n.get(g) || l, f === l && n.set(null, u), n.set(g, u), this.count++, l = Dc.bind(this), u.addEventListener("load", l), u.addEventListener("error", l), f ? f.parentNode.insertBefore(u, f.nextSibling) : (e = e.nodeType === 9 ? e.head : e, e.insertBefore(u, e.firstChild)), t.state.loading |= 4;
    }
  }
  var Us = {
    $$typeof: X,
    Provider: null,
    Consumer: null,
    _currentValue: le,
    _currentValue2: le,
    _threadCount: 0
  };
  function V_(e, t, n, l, u, f, g, _, w) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = Ao(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = Ao(0), this.hiddenUpdates = Ao(null), this.identifierPrefix = l, this.onUncaughtError = u, this.onCaughtError = f, this.onRecoverableError = g, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = w, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Av(e, t, n, l, u, f, g, _, w, q, K, P) {
    return e = new V_(
      e,
      t,
      n,
      g,
      w,
      q,
      K,
      P,
      _
    ), t = 1, f === !0 && (t |= 24), f = $n(3, null, null, t), e.current = f, f.stateNode = e, t = Va(), t.refCount++, e.pooledCache = t, t.refCount++, f.memoizedState = {
      element: l,
      isDehydrated: n,
      cache: t
    }, at(f), e;
  }
  function wv(e) {
    return e ? (e = ul, e) : ul;
  }
  function Mv(e, t, n, l, u, f) {
    u = wv(u), l.context === null ? l.context = u : l.pendingContext = u, l = Re(t), l.payload = { element: n }, f = f === void 0 ? null : f, f !== null && (l.callback = f), n = Ye(e, l, t), n !== null && (na(n, e, t), Ne(n, e, t));
  }
  function Rv(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Oh(e, t) {
    Rv(e, t), (e = e.alternate) && Rv(e, t);
  }
  function Dv(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = Sn(e, 67108864);
      t !== null && na(t, e, 67108864), Oh(e, 67108864);
    }
  }
  function Nv(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = ca();
      t = wo(t);
      var n = Sn(e, t);
      n !== null && na(n, e, t), Oh(e, t);
    }
  }
  var zc = !0;
  function U_(e, t, n, l) {
    var u = k.T;
    k.T = null;
    var f = ae.p;
    try {
      ae.p = 2, xh(e, t, n, l);
    } finally {
      ae.p = f, k.T = u;
    }
  }
  function B_(e, t, n, l) {
    var u = k.T;
    k.T = null;
    var f = ae.p;
    try {
      ae.p = 8, xh(e, t, n, l);
    } finally {
      ae.p = f, k.T = u;
    }
  }
  function xh(e, t, n, l) {
    if (zc) {
      var u = Th(l);
      if (u === null)
        fh(
          e,
          t,
          l,
          Lc,
          n
        ), zv(e, l);
      else if (k_(
        u,
        e,
        t,
        n,
        l
      ))
        l.stopPropagation();
      else if (zv(e, l), t & 4 && -1 < $_.indexOf(e)) {
        for (; u !== null; ) {
          var f = wa(u);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                  var g = pa(f.pendingLanes);
                  if (g !== 0) {
                    var _ = f;
                    for (_.pendingLanes |= 2, _.entangledLanes |= 2; g; ) {
                      var w = 1 << 31 - jn(g);
                      _.entanglements[1] |= w, g &= ~w;
                    }
                    si(f), (rt & 6) === 0 && (vc = sn() + 500, Ns(0));
                  }
                }
                break;
              case 31:
              case 13:
                _ = Sn(f, 2), _ !== null && na(_, f, 2), bc(), Oh(f, 2);
            }
          if (f = Th(l), f === null && fh(
            e,
            t,
            l,
            Lc,
            n
          ), f === u) break;
          u = f;
        }
        u !== null && l.stopPropagation();
      } else
        fh(
          e,
          t,
          l,
          null,
          n
        );
    }
  }
  function Th(e) {
    return e = Ar(e), Ah(e);
  }
  var Lc = null;
  function Ah(e) {
    if (Lc = null, e = kt(e), e !== null) {
      var t = d(e);
      if (t === null) e = null;
      else {
        var n = t.tag;
        if (n === 13) {
          if (e = h(t), e !== null) return e;
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
    return Lc = e, null;
  }
  function jv(e) {
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
      case "resize":
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
      case "scroll":
      case "touchmove":
      case "wheel":
      case "mouseenter":
      case "mouseleave":
      case "pointerenter":
      case "pointerleave":
        return 8;
      case "message":
        switch (ki()) {
          case Be:
            return 2;
          case da:
            return 8;
          case pi:
          case Qf:
            return 32;
          case qi:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var wh = !1, Al = null, wl = null, Ml = null, Bs = /* @__PURE__ */ new Map(), $s = /* @__PURE__ */ new Map(), Rl = [], $_ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function zv(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Al = null;
        break;
      case "dragenter":
      case "dragleave":
        wl = null;
        break;
      case "mouseover":
      case "mouseout":
        Ml = null;
        break;
      case "pointerover":
      case "pointerout":
        Bs.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        $s.delete(t.pointerId);
    }
  }
  function ks(e, t, n, l, u, f) {
    return e === null || e.nativeEvent !== f ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: l,
      nativeEvent: f,
      targetContainers: [u]
    }, t !== null && (t = wa(t), t !== null && Dv(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), e);
  }
  function k_(e, t, n, l, u) {
    switch (t) {
      case "focusin":
        return Al = ks(
          Al,
          e,
          t,
          n,
          l,
          u
        ), !0;
      case "dragenter":
        return wl = ks(
          wl,
          e,
          t,
          n,
          l,
          u
        ), !0;
      case "mouseover":
        return Ml = ks(
          Ml,
          e,
          t,
          n,
          l,
          u
        ), !0;
      case "pointerover":
        var f = u.pointerId;
        return Bs.set(
          f,
          ks(
            Bs.get(f) || null,
            e,
            t,
            n,
            l,
            u
          )
        ), !0;
      case "gotpointercapture":
        return f = u.pointerId, $s.set(
          f,
          ks(
            $s.get(f) || null,
            e,
            t,
            n,
            l,
            u
          )
        ), !0;
    }
    return !1;
  }
  function Lv(e) {
    var t = kt(e.target);
    if (t !== null) {
      var n = d(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = h(n), t !== null) {
            e.blockedOn = t, Sr(e.priority, function() {
              Nv(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = y(n), t !== null) {
            e.blockedOn = t, Sr(e.priority, function() {
              Nv(n);
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
  function Hc(e) {
    if (e.blockedOn !== null) return !1;
    for (var t = e.targetContainers; 0 < t.length; ) {
      var n = Th(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(
          n.type,
          n
        );
        Zi = l, n.target.dispatchEvent(l), Zi = null;
      } else
        return t = wa(n), t !== null && Dv(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Hv(e, t, n) {
    Hc(e) && n.delete(t);
  }
  function q_() {
    wh = !1, Al !== null && Hc(Al) && (Al = null), wl !== null && Hc(wl) && (wl = null), Ml !== null && Hc(Ml) && (Ml = null), Bs.forEach(Hv), $s.forEach(Hv);
  }
  function Vc(e, t) {
    e.blockedOn === t && (e.blockedOn = null, wh || (wh = !0, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      q_
    )));
  }
  var Uc = null;
  function Vv(e) {
    Uc !== e && (Uc = e, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      function() {
        Uc === e && (Uc = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], l = e[t + 1], u = e[t + 2];
          if (typeof l != "function") {
            if (Ah(l || n) === null)
              continue;
            break;
          }
          var f = wa(n);
          f !== null && (e.splice(t, 3), t -= 3, Td(
            f,
            {
              pending: !0,
              data: u,
              method: n.method,
              action: l
            },
            l,
            u
          ));
        }
      }
    ));
  }
  function ro(e) {
    function t(w) {
      return Vc(w, e);
    }
    Al !== null && Vc(Al, e), wl !== null && Vc(wl, e), Ml !== null && Vc(Ml, e), Bs.forEach(t), $s.forEach(t);
    for (var n = 0; n < Rl.length; n++) {
      var l = Rl[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < Rl.length && (n = Rl[0], n.blockedOn === null); )
      Lv(n), n.blockedOn === null && Rl.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (l = 0; l < n.length; l += 3) {
        var u = n[l], f = n[l + 1], g = u[xn] || null;
        if (typeof f == "function")
          g || Vv(n);
        else if (g) {
          var _ = null;
          if (f && f.hasAttribute("formAction")) {
            if (u = f, g = f[xn] || null)
              _ = g.formAction;
            else if (Ah(u) !== null) continue;
          } else _ = g.action;
          typeof _ == "function" ? n[l + 1] = _ : (n.splice(l, 3), l -= 3), Vv(n);
        }
      }
  }
  function Uv() {
    function e(f) {
      f.canIntercept && f.info === "react-transition" && f.intercept({
        handler: function() {
          return new Promise(function(g) {
            return u = g;
          });
        },
        focusReset: "manual",
        scroll: "manual"
      });
    }
    function t() {
      u !== null && (u(), u = null), l || setTimeout(n, 20);
    }
    function n() {
      if (!l && !navigation.transition) {
        var f = navigation.currentEntry;
        f && f.url != null && navigation.navigate(f.url, {
          state: f.getState(),
          info: "react-transition",
          history: "replace"
        });
      }
    }
    if (typeof navigation == "object") {
      var l = !1, u = null;
      return navigation.addEventListener("navigate", e), navigation.addEventListener("navigatesuccess", t), navigation.addEventListener("navigateerror", t), setTimeout(n, 100), function() {
        l = !0, navigation.removeEventListener("navigate", e), navigation.removeEventListener("navigatesuccess", t), navigation.removeEventListener("navigateerror", t), u !== null && (u(), u = null);
      };
    }
  }
  function Mh(e) {
    this._internalRoot = e;
  }
  Bc.prototype.render = Mh.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var n = t.current, l = ca();
    Mv(n, l, e, t, null, null);
  }, Bc.prototype.unmount = Mh.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Mv(e.current, 2, null, e, null, null), bc(), t[Ia] = null;
    }
  };
  function Bc(e) {
    this._internalRoot = e;
  }
  Bc.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = mu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < Rl.length && t !== 0 && t < Rl[n].priority; n++) ;
      Rl.splice(n, 0, e), n === 0 && Lv(e);
    }
  };
  var Bv = i.version;
  if (Bv !== "19.2.0")
    throw Error(
      o(
        527,
        Bv,
        "19.2.0"
      )
    );
  ae.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = v(t), e = e !== null ? C(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var Y_ = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: k,
    reconcilerVersion: "19.2.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var $c = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!$c.isDisabled && $c.supportsFiber)
      try {
        Xa = $c.inject(
          Y_
        ), Nn = $c;
      } catch {
      }
  }
  return Ys.createRoot = function(e, t) {
    if (!s(e)) throw Error(o(299));
    var n = !1, l = "", u = Im, f = Fm, g = Qm;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (g = t.onRecoverableError)), t = Av(
      e,
      1,
      !1,
      null,
      null,
      n,
      l,
      null,
      u,
      f,
      g,
      Uv
    ), e[Ia] = t.current, ch(e), new Mh(t);
  }, Ys.hydrateRoot = function(e, t, n) {
    if (!s(e)) throw Error(o(299));
    var l = !1, u = "", f = Im, g = Fm, _ = Qm, w = null;
    return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onUncaughtError !== void 0 && (f = n.onUncaughtError), n.onCaughtError !== void 0 && (g = n.onCaughtError), n.onRecoverableError !== void 0 && (_ = n.onRecoverableError), n.formState !== void 0 && (w = n.formState)), t = Av(
      e,
      1,
      !0,
      t,
      n ?? null,
      l,
      u,
      w,
      f,
      g,
      _,
      Uv
    ), t.context = wv(null), n = t.current, l = ca(), l = wo(l), u = Re(l), u.callback = null, Ye(n, u, l), n = l, t.current.lanes = n, Bl(t, n), si(t), e[Ia] = t.current, ch(e), new Bc(t);
  }, Ys.version = "19.2.0", Ys;
}
var Kv;
function P_() {
  if (Kv) return Nh.exports;
  Kv = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return a(), Nh.exports = W_(), Nh.exports;
}
var eS = P_(), Pc = { exports: {} };
/*!
  * Bootstrap v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
var tS = Pc.exports, Jv;
function nS() {
  return Jv || (Jv = 1, (function(a, i) {
    (function(r, o) {
      a.exports = o();
    })(tS, function() {
      const r = /* @__PURE__ */ new Map(), o = { set(b, c, p) {
        r.has(b) || r.set(b, /* @__PURE__ */ new Map());
        const E = r.get(b);
        E.has(c) || E.size === 0 ? E.set(c, p) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(E.keys())[0]}.`);
      }, get: (b, c) => r.has(b) && r.get(b).get(c) || null, remove(b, c) {
        if (!r.has(b)) return;
        const p = r.get(b);
        p.delete(c), p.size === 0 && r.delete(b);
      } }, s = "transitionend", d = (b) => (b && window.CSS && window.CSS.escape && (b = b.replace(/#([^\s"#']+)/g, (c, p) => `#${CSS.escape(p)}`)), b), h = (b) => b == null ? `${b}` : Object.prototype.toString.call(b).match(/\s([a-z]+)/i)[1].toLowerCase(), y = (b) => {
        b.dispatchEvent(new Event(s));
      }, m = (b) => !(!b || typeof b != "object") && (b.jquery !== void 0 && (b = b[0]), b.nodeType !== void 0), v = (b) => m(b) ? b.jquery ? b[0] : b : typeof b == "string" && b.length > 0 ? document.querySelector(d(b)) : null, C = (b) => {
        if (!m(b) || b.getClientRects().length === 0) return !1;
        const c = getComputedStyle(b).getPropertyValue("visibility") === "visible", p = b.closest("details:not([open])");
        if (!p) return c;
        if (p !== b) {
          const E = b.closest("summary");
          if (E && E.parentNode !== p || E === null) return !1;
        }
        return c;
      }, x = (b) => !b || b.nodeType !== Node.ELEMENT_NODE || !!b.classList.contains("disabled") || (b.disabled !== void 0 ? b.disabled : b.hasAttribute("disabled") && b.getAttribute("disabled") !== "false"), A = (b) => {
        if (!document.documentElement.attachShadow) return null;
        if (typeof b.getRootNode == "function") {
          const c = b.getRootNode();
          return c instanceof ShadowRoot ? c : null;
        }
        return b instanceof ShadowRoot ? b : b.parentNode ? A(b.parentNode) : null;
      }, R = () => {
      }, L = (b) => {
        b.offsetHeight;
      }, N = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, j = [], H = () => document.documentElement.dir === "rtl", Q = (b) => {
        var c;
        c = () => {
          const p = N();
          if (p) {
            const E = b.NAME, D = p.fn[E];
            p.fn[E] = b.jQueryInterface, p.fn[E].Constructor = b, p.fn[E].noConflict = () => (p.fn[E] = D, b.jQueryInterface);
          }
        }, document.readyState === "loading" ? (j.length || document.addEventListener("DOMContentLoaded", () => {
          for (const p of j) p();
        }), j.push(c)) : c();
      }, X = (b, c = [], p = b) => typeof b == "function" ? b.call(...c) : p, W = (b, c, p = !0) => {
        if (!p) return void X(b);
        const E = ((F) => {
          if (!F) return 0;
          let { transitionDuration: te, transitionDelay: re } = window.getComputedStyle(F);
          const fe = Number.parseFloat(te), de = Number.parseFloat(re);
          return fe || de ? (te = te.split(",")[0], re = re.split(",")[0], 1e3 * (Number.parseFloat(te) + Number.parseFloat(re))) : 0;
        })(c) + 5;
        let D = !1;
        const z = ({ target: F }) => {
          F === c && (D = !0, c.removeEventListener(s, z), X(b));
        };
        c.addEventListener(s, z), setTimeout(() => {
          D || y(c);
        }, E);
      }, U = (b, c, p, E) => {
        const D = b.length;
        let z = b.indexOf(c);
        return z === -1 ? !p && E ? b[D - 1] : b[0] : (z += p ? 1 : -1, E && (z = (z + D) % D), b[Math.max(0, Math.min(z, D - 1))]);
      }, Z = /[^.]*(?=\..*)\.|.*/, B = /\..*/, oe = /::\d+$/, we = {};
      let je = 1;
      const ke = { mouseenter: "mouseover", mouseleave: "mouseout" }, Ve = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
      function ut(b, c) {
        return c && `${c}::${je++}` || b.uidEvent || je++;
      }
      function tt(b) {
        const c = ut(b);
        return b.uidEvent = c, we[c] = we[c] || {}, we[c];
      }
      function Ue(b, c, p = null) {
        return Object.values(b).find((E) => E.callable === c && E.delegationSelector === p);
      }
      function k(b, c, p) {
        const E = typeof c == "string", D = E ? p : c || p;
        let z = Ee(b);
        return Ve.has(z) || (z = b), [E, D, z];
      }
      function ae(b, c, p, E, D) {
        if (typeof c != "string" || !b) return;
        let [z, F, te] = k(c, p, E);
        c in ke && (F = ((xe) => function(Me) {
          if (!Me.relatedTarget || Me.relatedTarget !== Me.delegateTarget && !Me.delegateTarget.contains(Me.relatedTarget)) return xe.call(this, Me);
        })(F));
        const re = tt(b), fe = re[te] || (re[te] = {}), de = Ue(fe, F, z ? p : null);
        if (de) return void (de.oneOff = de.oneOff && D);
        const se = ut(F, c.replace(Z, "")), De = z ? /* @__PURE__ */ (function(Oe, xe, Me) {
          return function Ce(at) {
            const ct = Oe.querySelectorAll(xe);
            for (let { target: Re } = at; Re && Re !== this; Re = Re.parentNode) for (const Ye of ct) if (Ye === Re) return Y(at, { delegateTarget: Re }), Ce.oneOff && O.off(Oe, at.type, xe, Me), Me.apply(Re, [at]);
          };
        })(b, p, F) : /* @__PURE__ */ (function(Oe, xe) {
          return function Me(Ce) {
            return Y(Ce, { delegateTarget: Oe }), Me.oneOff && O.off(Oe, Ce.type, xe), xe.apply(Oe, [Ce]);
          };
        })(b, F);
        De.delegationSelector = z ? p : null, De.callable = F, De.oneOff = D, De.uidEvent = se, fe[se] = De, b.addEventListener(te, De, z);
      }
      function le(b, c, p, E, D) {
        const z = Ue(c[p], E, D);
        z && (b.removeEventListener(p, z, !!D), delete c[p][z.uidEvent]);
      }
      function be(b, c, p, E) {
        const D = c[p] || {};
        for (const [z, F] of Object.entries(D)) z.includes(E) && le(b, c, p, F.callable, F.delegationSelector);
      }
      function Ee(b) {
        return b = b.replace(B, ""), ke[b] || b;
      }
      const O = { on(b, c, p, E) {
        ae(b, c, p, E, !1);
      }, one(b, c, p, E) {
        ae(b, c, p, E, !0);
      }, off(b, c, p, E) {
        if (typeof c != "string" || !b) return;
        const [D, z, F] = k(c, p, E), te = F !== c, re = tt(b), fe = re[F] || {}, de = c.startsWith(".");
        if (z === void 0) {
          if (de) for (const se of Object.keys(re)) be(b, re, se, c.slice(1));
          for (const [se, De] of Object.entries(fe)) {
            const Oe = se.replace(oe, "");
            te && !c.includes(Oe) || le(b, re, F, De.callable, De.delegationSelector);
          }
        } else {
          if (!Object.keys(fe).length) return;
          le(b, re, F, z, D ? p : null);
        }
      }, trigger(b, c, p) {
        if (typeof c != "string" || !b) return null;
        const E = N();
        let D = null, z = !0, F = !0, te = !1;
        c !== Ee(c) && E && (D = E.Event(c, p), E(b).trigger(D), z = !D.isPropagationStopped(), F = !D.isImmediatePropagationStopped(), te = D.isDefaultPrevented());
        const re = Y(new Event(c, { bubbles: z, cancelable: !0 }), p);
        return te && re.preventDefault(), F && b.dispatchEvent(re), re.defaultPrevented && D && D.preventDefault(), re;
      } };
      function Y(b, c = {}) {
        for (const [p, E] of Object.entries(c)) try {
          b[p] = E;
        } catch {
          Object.defineProperty(b, p, { configurable: !0, get: () => E });
        }
        return b;
      }
      function ee(b) {
        if (b === "true") return !0;
        if (b === "false") return !1;
        if (b === Number(b).toString()) return Number(b);
        if (b === "" || b === "null") return null;
        if (typeof b != "string") return b;
        try {
          return JSON.parse(decodeURIComponent(b));
        } catch {
          return b;
        }
      }
      function ie(b) {
        return b.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);
      }
      const ce = { setDataAttribute(b, c, p) {
        b.setAttribute(`data-bs-${ie(c)}`, p);
      }, removeDataAttribute(b, c) {
        b.removeAttribute(`data-bs-${ie(c)}`);
      }, getDataAttributes(b) {
        if (!b) return {};
        const c = {}, p = Object.keys(b.dataset).filter((E) => E.startsWith("bs") && !E.startsWith("bsConfig"));
        for (const E of p) {
          let D = E.replace(/^bs/, "");
          D = D.charAt(0).toLowerCase() + D.slice(1), c[D] = ee(b.dataset[E]);
        }
        return c;
      }, getDataAttribute: (b, c) => ee(b.getAttribute(`data-bs-${ie(c)}`)) };
      class ue {
        static get Default() {
          return {};
        }
        static get DefaultType() {
          return {};
        }
        static get NAME() {
          throw new Error('You have to implement the static method "NAME", for each component!');
        }
        _getConfig(c) {
          return c = this._mergeConfigObj(c), c = this._configAfterMerge(c), this._typeCheckConfig(c), c;
        }
        _configAfterMerge(c) {
          return c;
        }
        _mergeConfigObj(c, p) {
          const E = m(p) ? ce.getDataAttribute(p, "config") : {};
          return { ...this.constructor.Default, ...typeof E == "object" ? E : {}, ...m(p) ? ce.getDataAttributes(p) : {}, ...typeof c == "object" ? c : {} };
        }
        _typeCheckConfig(c, p = this.constructor.DefaultType) {
          for (const [E, D] of Object.entries(p)) {
            const z = c[E], F = m(z) ? "element" : h(z);
            if (!new RegExp(D).test(F)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${E}" provided type "${F}" but expected type "${D}".`);
          }
        }
      }
      class he extends ue {
        constructor(c, p) {
          super(), (c = v(c)) && (this._element = c, this._config = this._getConfig(p), o.set(this._element, this.constructor.DATA_KEY, this));
        }
        dispose() {
          o.remove(this._element, this.constructor.DATA_KEY), O.off(this._element, this.constructor.EVENT_KEY);
          for (const c of Object.getOwnPropertyNames(this)) this[c] = null;
        }
        _queueCallback(c, p, E = !0) {
          W(c, p, E);
        }
        _getConfig(c) {
          return c = this._mergeConfigObj(c, this._element), c = this._configAfterMerge(c), this._typeCheckConfig(c), c;
        }
        static getInstance(c) {
          return o.get(v(c), this.DATA_KEY);
        }
        static getOrCreateInstance(c, p = {}) {
          return this.getInstance(c) || new this(c, typeof p == "object" ? p : null);
        }
        static get VERSION() {
          return "5.3.8";
        }
        static get DATA_KEY() {
          return `bs.${this.NAME}`;
        }
        static get EVENT_KEY() {
          return `.${this.DATA_KEY}`;
        }
        static eventName(c) {
          return `${c}${this.EVENT_KEY}`;
        }
      }
      const Le = (b) => {
        let c = b.getAttribute("data-bs-target");
        if (!c || c === "#") {
          let p = b.getAttribute("href");
          if (!p || !p.includes("#") && !p.startsWith(".")) return null;
          p.includes("#") && !p.startsWith("#") && (p = `#${p.split("#")[1]}`), c = p && p !== "#" ? p.trim() : null;
        }
        return c ? c.split(",").map((p) => d(p)).join(",") : null;
      }, ne = { find: (b, c = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(c, b)), findOne: (b, c = document.documentElement) => Element.prototype.querySelector.call(c, b), children: (b, c) => [].concat(...b.children).filter((p) => p.matches(c)), parents(b, c) {
        const p = [];
        let E = b.parentNode.closest(c);
        for (; E; ) p.push(E), E = E.parentNode.closest(c);
        return p;
      }, prev(b, c) {
        let p = b.previousElementSibling;
        for (; p; ) {
          if (p.matches(c)) return [p];
          p = p.previousElementSibling;
        }
        return [];
      }, next(b, c) {
        let p = b.nextElementSibling;
        for (; p; ) {
          if (p.matches(c)) return [p];
          p = p.nextElementSibling;
        }
        return [];
      }, focusableChildren(b) {
        const c = ["a", "button", "input", "textarea", "select", "details", "[tabindex]", '[contenteditable="true"]'].map((p) => `${p}:not([tabindex^="-"])`).join(",");
        return this.find(c, b).filter((p) => !x(p) && C(p));
      }, getSelectorFromElement(b) {
        const c = Le(b);
        return c && ne.findOne(c) ? c : null;
      }, getElementFromSelector(b) {
        const c = Le(b);
        return c ? ne.findOne(c) : null;
      }, getMultipleElementsFromSelector(b) {
        const c = Le(b);
        return c ? ne.find(c) : [];
      } }, _t = (b, c = "hide") => {
        const p = `click.dismiss${b.EVENT_KEY}`, E = b.NAME;
        O.on(document, p, `[data-bs-dismiss="${E}"]`, function(D) {
          if (["A", "AREA"].includes(this.tagName) && D.preventDefault(), x(this)) return;
          const z = ne.getElementFromSelector(this) || this.closest(`.${E}`);
          b.getOrCreateInstance(z)[c]();
        });
      }, Ct = ".bs.alert", Ot = `close${Ct}`, Xn = `closed${Ct}`;
      class xt extends he {
        static get NAME() {
          return "alert";
        }
        close() {
          if (O.trigger(this._element, Ot).defaultPrevented) return;
          this._element.classList.remove("show");
          const c = this._element.classList.contains("fade");
          this._queueCallback(() => this._destroyElement(), this._element, c);
        }
        _destroyElement() {
          this._element.remove(), O.trigger(this._element, Xn), this.dispose();
        }
        static jQueryInterface(c) {
          return this.each(function() {
            const p = xt.getOrCreateInstance(this);
            if (typeof c == "string") {
              if (p[c] === void 0 || c.startsWith("_") || c === "constructor") throw new TypeError(`No method named "${c}"`);
              p[c](this);
            }
          });
        }
      }
      _t(xt, "close"), Q(xt);
      const ye = '[data-bs-toggle="button"]';
      class Bt extends he {
        static get NAME() {
          return "button";
        }
        toggle() {
          this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
        }
        static jQueryInterface(c) {
          return this.each(function() {
            const p = Bt.getOrCreateInstance(this);
            c === "toggle" && p[c]();
          });
        }
      }
      O.on(document, "click.bs.button.data-api", ye, (b) => {
        b.preventDefault();
        const c = b.target.closest(ye);
        Bt.getOrCreateInstance(c).toggle();
      }), Q(Bt);
      const St = ".bs.swipe", wt = `touchstart${St}`, on = `touchmove${St}`, Ll = `touchend${St}`, Hl = `pointerdown${St}`, xo = `pointerup${St}`, To = { endCallback: null, leftCallback: null, rightCallback: null }, sn = { endCallback: "(function|null)", leftCallback: "(function|null)", rightCallback: "(function|null)" };
      class ki extends ue {
        constructor(c, p) {
          super(), this._element = c, c && ki.isSupported() && (this._config = this._getConfig(p), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
        }
        static get Default() {
          return To;
        }
        static get DefaultType() {
          return sn;
        }
        static get NAME() {
          return "swipe";
        }
        dispose() {
          O.off(this._element, St);
        }
        _start(c) {
          this._supportPointerEvents ? this._eventIsPointerPenTouch(c) && (this._deltaX = c.clientX) : this._deltaX = c.touches[0].clientX;
        }
        _end(c) {
          this._eventIsPointerPenTouch(c) && (this._deltaX = c.clientX - this._deltaX), this._handleSwipe(), X(this._config.endCallback);
        }
        _move(c) {
          this._deltaX = c.touches && c.touches.length > 1 ? 0 : c.touches[0].clientX - this._deltaX;
        }
        _handleSwipe() {
          const c = Math.abs(this._deltaX);
          if (c <= 40) return;
          const p = c / this._deltaX;
          this._deltaX = 0, p && X(p > 0 ? this._config.rightCallback : this._config.leftCallback);
        }
        _initEvents() {
          this._supportPointerEvents ? (O.on(this._element, Hl, (c) => this._start(c)), O.on(this._element, xo, (c) => this._end(c)), this._element.classList.add("pointer-event")) : (O.on(this._element, wt, (c) => this._start(c)), O.on(this._element, on, (c) => this._move(c)), O.on(this._element, Ll, (c) => this._end(c)));
        }
        _eventIsPointerPenTouch(c) {
          return this._supportPointerEvents && (c.pointerType === "pen" || c.pointerType === "touch");
        }
        static isSupported() {
          return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
        }
      }
      const Be = ".bs.carousel", da = ".data-api", pi = "ArrowLeft", Qf = "ArrowRight", qi = "next", Yi = "prev", Gi = "left", Xa = "right", Nn = `slide${Be}`, ha = `slid${Be}`, jn = `keydown${Be}`, Zf = `mouseenter${Be}`, Kf = `mouseleave${Be}`, Jf = `dragstart${Be}`, br = `load${Be}${da}`, _r = `click${Be}${da}`, Vl = "carousel", pa = "active", Ul = ".active", Xi = ".carousel-item", Wf = Ul + Xi, du = { [pi]: Xa, [Qf]: Gi }, Ao = { interval: 5e3, keyboard: !0, pause: "hover", ride: !1, touch: !0, wrap: !0 }, Bl = { interval: "(number|boolean)", keyboard: "boolean", pause: "(string|boolean)", ride: "(boolean|string)", touch: "boolean", wrap: "boolean" };
      class Ii extends he {
        constructor(c, p) {
          super(c, p), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = ne.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === Vl && this.cycle();
        }
        static get Default() {
          return Ao;
        }
        static get DefaultType() {
          return Bl;
        }
        static get NAME() {
          return "carousel";
        }
        next() {
          this._slide(qi);
        }
        nextWhenVisible() {
          !document.hidden && C(this._element) && this.next();
        }
        prev() {
          this._slide(Yi);
        }
        pause() {
          this._isSliding && y(this._element), this._clearInterval();
        }
        cycle() {
          this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
        }
        _maybeEnableCycle() {
          this._config.ride && (this._isSliding ? O.one(this._element, ha, () => this.cycle()) : this.cycle());
        }
        to(c) {
          const p = this._getItems();
          if (c > p.length - 1 || c < 0) return;
          if (this._isSliding) return void O.one(this._element, ha, () => this.to(c));
          const E = this._getItemIndex(this._getActive());
          if (E === c) return;
          const D = c > E ? qi : Yi;
          this._slide(D, p[c]);
        }
        dispose() {
          this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
        }
        _configAfterMerge(c) {
          return c.defaultInterval = c.interval, c;
        }
        _addEventListeners() {
          this._config.keyboard && O.on(this._element, jn, (c) => this._keydown(c)), this._config.pause === "hover" && (O.on(this._element, Zf, () => this.pause()), O.on(this._element, Kf, () => this._maybeEnableCycle())), this._config.touch && ki.isSupported() && this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
          for (const p of ne.find(".carousel-item img", this._element)) O.on(p, Jf, (E) => E.preventDefault());
          const c = { leftCallback: () => this._slide(this._directionToOrder(Gi)), rightCallback: () => this._slide(this._directionToOrder(Xa)), endCallback: () => {
            this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval));
          } };
          this._swipeHelper = new ki(this._element, c);
        }
        _keydown(c) {
          if (/input|textarea/i.test(c.target.tagName)) return;
          const p = du[c.key];
          p && (c.preventDefault(), this._slide(this._directionToOrder(p)));
        }
        _getItemIndex(c) {
          return this._getItems().indexOf(c);
        }
        _setActiveIndicatorElement(c) {
          if (!this._indicatorsElement) return;
          const p = ne.findOne(Ul, this._indicatorsElement);
          p.classList.remove(pa), p.removeAttribute("aria-current");
          const E = ne.findOne(`[data-bs-slide-to="${c}"]`, this._indicatorsElement);
          E && (E.classList.add(pa), E.setAttribute("aria-current", "true"));
        }
        _updateInterval() {
          const c = this._activeElement || this._getActive();
          if (!c) return;
          const p = Number.parseInt(c.getAttribute("data-bs-interval"), 10);
          this._config.interval = p || this._config.defaultInterval;
        }
        _slide(c, p = null) {
          if (this._isSliding) return;
          const E = this._getActive(), D = c === qi, z = p || U(this._getItems(), E, D, this._config.wrap);
          if (z === E) return;
          const F = this._getItemIndex(z), te = (se) => O.trigger(this._element, se, { relatedTarget: z, direction: this._orderToDirection(c), from: this._getItemIndex(E), to: F });
          if (te(Nn).defaultPrevented || !E || !z) return;
          const re = !!this._interval;
          this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(F), this._activeElement = z;
          const fe = D ? "carousel-item-start" : "carousel-item-end", de = D ? "carousel-item-next" : "carousel-item-prev";
          z.classList.add(de), L(z), E.classList.add(fe), z.classList.add(fe), this._queueCallback(() => {
            z.classList.remove(fe, de), z.classList.add(pa), E.classList.remove(pa, de, fe), this._isSliding = !1, te(ha);
          }, E, this._isAnimated()), re && this.cycle();
        }
        _isAnimated() {
          return this._element.classList.contains("slide");
        }
        _getActive() {
          return ne.findOne(Wf, this._element);
        }
        _getItems() {
          return ne.find(Xi, this._element);
        }
        _clearInterval() {
          this._interval && (clearInterval(this._interval), this._interval = null);
        }
        _directionToOrder(c) {
          return H() ? c === Gi ? Yi : qi : c === Gi ? qi : Yi;
        }
        _orderToDirection(c) {
          return H() ? c === Yi ? Gi : Xa : c === Yi ? Xa : Gi;
        }
        static jQueryInterface(c) {
          return this.each(function() {
            const p = Ii.getOrCreateInstance(this, c);
            if (typeof c != "number") {
              if (typeof c == "string") {
                if (p[c] === void 0 || c.startsWith("_") || c === "constructor") throw new TypeError(`No method named "${c}"`);
                p[c]();
              }
            } else p.to(c);
          });
        }
      }
      O.on(document, _r, "[data-bs-slide], [data-bs-slide-to]", function(b) {
        const c = ne.getElementFromSelector(this);
        if (!c || !c.classList.contains(Vl)) return;
        b.preventDefault();
        const p = Ii.getOrCreateInstance(c), E = this.getAttribute("data-bs-slide-to");
        return E ? (p.to(E), void p._maybeEnableCycle()) : ce.getDataAttribute(this, "slide") === "next" ? (p.next(), void p._maybeEnableCycle()) : (p.prev(), void p._maybeEnableCycle());
      }), O.on(window, br, () => {
        const b = ne.find('[data-bs-ride="carousel"]');
        for (const c of b) Ii.getOrCreateInstance(c);
      }), Q(Ii);
      const Fi = ".bs.collapse", hu = `show${Fi}`, pu = `shown${Fi}`, wo = `hide${Fi}`, Mo = `hidden${Fi}`, mu = `click${Fi}.data-api`, Sr = "show", zn = "collapse", $t = "collapsing", xn = `:scope .${zn} .${zn}`, Ia = '[data-bs-toggle="collapse"]', Ro = { parent: null, toggle: !0 }, Pf = { parent: "(null|element)", toggle: "boolean" };
      class Qi extends he {
        constructor(c, p) {
          super(c, p), this._isTransitioning = !1, this._triggerArray = [];
          const E = ne.find(Ia);
          for (const D of E) {
            const z = ne.getSelectorFromElement(D), F = ne.find(z).filter((te) => te === this._element);
            z !== null && F.length && this._triggerArray.push(D);
          }
          this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
        }
        static get Default() {
          return Ro;
        }
        static get DefaultType() {
          return Pf;
        }
        static get NAME() {
          return "collapse";
        }
        toggle() {
          this._isShown() ? this.hide() : this.show();
        }
        show() {
          if (this._isTransitioning || this._isShown()) return;
          let c = [];
          if (this._config.parent && (c = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((D) => D !== this._element).map((D) => Qi.getOrCreateInstance(D, { toggle: !1 }))), c.length && c[0]._isTransitioning || O.trigger(this._element, hu).defaultPrevented) return;
          for (const D of c) D.hide();
          const p = this._getDimension();
          this._element.classList.remove(zn), this._element.classList.add($t), this._element.style[p] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
          const E = `scroll${p[0].toUpperCase() + p.slice(1)}`;
          this._queueCallback(() => {
            this._isTransitioning = !1, this._element.classList.remove($t), this._element.classList.add(zn, Sr), this._element.style[p] = "", O.trigger(this._element, pu);
          }, this._element, !0), this._element.style[p] = `${this._element[E]}px`;
        }
        hide() {
          if (this._isTransitioning || !this._isShown() || O.trigger(this._element, wo).defaultPrevented) return;
          const c = this._getDimension();
          this._element.style[c] = `${this._element.getBoundingClientRect()[c]}px`, L(this._element), this._element.classList.add($t), this._element.classList.remove(zn, Sr);
          for (const p of this._triggerArray) {
            const E = ne.getElementFromSelector(p);
            E && !this._isShown(E) && this._addAriaAndCollapsedClass([p], !1);
          }
          this._isTransitioning = !0, this._element.style[c] = "", this._queueCallback(() => {
            this._isTransitioning = !1, this._element.classList.remove($t), this._element.classList.add(zn), O.trigger(this._element, Mo);
          }, this._element, !0);
        }
        _isShown(c = this._element) {
          return c.classList.contains(Sr);
        }
        _configAfterMerge(c) {
          return c.toggle = !!c.toggle, c.parent = v(c.parent), c;
        }
        _getDimension() {
          return this._element.classList.contains("collapse-horizontal") ? "width" : "height";
        }
        _initializeChildren() {
          if (!this._config.parent) return;
          const c = this._getFirstLevelChildren(Ia);
          for (const p of c) {
            const E = ne.getElementFromSelector(p);
            E && this._addAriaAndCollapsedClass([p], this._isShown(E));
          }
        }
        _getFirstLevelChildren(c) {
          const p = ne.find(xn, this._config.parent);
          return ne.find(c, this._config.parent).filter((E) => !p.includes(E));
        }
        _addAriaAndCollapsedClass(c, p) {
          if (c.length) for (const E of c) E.classList.toggle("collapsed", !p), E.setAttribute("aria-expanded", p);
        }
        static jQueryInterface(c) {
          const p = {};
          return typeof c == "string" && /show|hide/.test(c) && (p.toggle = !1), this.each(function() {
            const E = Qi.getOrCreateInstance(this, p);
            if (typeof c == "string") {
              if (E[c] === void 0) throw new TypeError(`No method named "${c}"`);
              E[c]();
            }
          });
        }
      }
      O.on(document, mu, Ia, function(b) {
        (b.target.tagName === "A" || b.delegateTarget && b.delegateTarget.tagName === "A") && b.preventDefault();
        for (const c of ne.getMultipleElementsFromSelector(this)) Qi.getOrCreateInstance(c, { toggle: !1 }).toggle();
      }), Q(Qi);
      var un = "top", an = "bottom", yn = "right", kt = "left", wa = "auto", ma = [un, an, yn, kt], In = "start", Mt = "end", Do = "clippingParents", Er = "viewport", Fn = "popper", mi = "reference", No = ma.reduce(function(b, c) {
        return b.concat([c + "-" + In, c + "-" + Mt]);
      }, []), Cr = [].concat(ma, [wa]).reduce(function(b, c) {
        return b.concat([c, c + "-" + In, c + "-" + Mt]);
      }, []), jo = "beforeRead", gu = "read", $l = "afterRead", kl = "beforeMain", ga = "main", Ln = "afterMain", zo = "beforeWrite", vu = "write", Or = "afterWrite", Lo = [jo, gu, $l, kl, ga, Ln, zo, vu, Or];
      function Hn(b) {
        return b ? (b.nodeName || "").toLowerCase() : null;
      }
      function Vn(b) {
        if (b == null) return window;
        if (b.toString() !== "[object Window]") {
          var c = b.ownerDocument;
          return c && c.defaultView || window;
        }
        return b;
      }
      function Qt(b) {
        return b instanceof Vn(b).Element || b instanceof Element;
      }
      function Tn(b) {
        return b instanceof Vn(b).HTMLElement || b instanceof HTMLElement;
      }
      function xr(b) {
        return typeof ShadowRoot < "u" && (b instanceof Vn(b).ShadowRoot || b instanceof ShadowRoot);
      }
      const ql = { name: "applyStyles", enabled: !0, phase: "write", fn: function(b) {
        var c = b.state;
        Object.keys(c.elements).forEach(function(p) {
          var E = c.styles[p] || {}, D = c.attributes[p] || {}, z = c.elements[p];
          Tn(z) && Hn(z) && (Object.assign(z.style, E), Object.keys(D).forEach(function(F) {
            var te = D[F];
            te === !1 ? z.removeAttribute(F) : z.setAttribute(F, te === !0 ? "" : te);
          }));
        });
      }, effect: function(b) {
        var c = b.state, p = { popper: { position: c.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
        return Object.assign(c.elements.popper.style, p.popper), c.styles = p, c.elements.arrow && Object.assign(c.elements.arrow.style, p.arrow), function() {
          Object.keys(c.elements).forEach(function(E) {
            var D = c.elements[E], z = c.attributes[E] || {}, F = Object.keys(c.styles.hasOwnProperty(E) ? c.styles[E] : p[E]).reduce(function(te, re) {
              return te[re] = "", te;
            }, {});
            Tn(D) && Hn(D) && (Object.assign(D.style, F), Object.keys(z).forEach(function(te) {
              D.removeAttribute(te);
            }));
          });
        };
      }, requires: ["computeStyles"] };
      function bn(b) {
        return b.split("-")[0];
      }
      var Fa = Math.max, Yl = Math.min, la = Math.round;
      function Ho() {
        var b = navigator.userAgentData;
        return b != null && b.brands && Array.isArray(b.brands) ? b.brands.map(function(c) {
          return c.brand + "/" + c.version;
        }).join(" ") : navigator.userAgent;
      }
      function Vo() {
        return !/^((?!chrome|android).)*safari/i.test(Ho());
      }
      function gi(b, c, p) {
        c === void 0 && (c = !1), p === void 0 && (p = !1);
        var E = b.getBoundingClientRect(), D = 1, z = 1;
        c && Tn(b) && (D = b.offsetWidth > 0 && la(E.width) / b.offsetWidth || 1, z = b.offsetHeight > 0 && la(E.height) / b.offsetHeight || 1);
        var F = (Qt(b) ? Vn(b) : window).visualViewport, te = !Vo() && p, re = (E.left + (te && F ? F.offsetLeft : 0)) / D, fe = (E.top + (te && F ? F.offsetTop : 0)) / z, de = E.width / D, se = E.height / z;
        return { width: de, height: se, top: fe, right: re + de, bottom: fe + se, left: re, x: re, y: fe };
      }
      function Gl(b) {
        var c = gi(b), p = b.offsetWidth, E = b.offsetHeight;
        return Math.abs(c.width - p) <= 1 && (p = c.width), Math.abs(c.height - E) <= 1 && (E = c.height), { x: b.offsetLeft, y: b.offsetTop, width: p, height: E };
      }
      function yu(b, c) {
        var p = c.getRootNode && c.getRootNode();
        if (b.contains(c)) return !0;
        if (p && xr(p)) {
          var E = c;
          do {
            if (E && b.isSameNode(E)) return !0;
            E = E.parentNode || E.host;
          } while (E);
        }
        return !1;
      }
      function Ma(b) {
        return Vn(b).getComputedStyle(b);
      }
      function Tr(b) {
        return ["table", "td", "th"].indexOf(Hn(b)) >= 0;
      }
      function cn(b) {
        return ((Qt(b) ? b.ownerDocument : b.document) || window.document).documentElement;
      }
      function Zi(b) {
        return Hn(b) === "html" ? b : b.assignedSlot || b.parentNode || (xr(b) ? b.host : null) || cn(b);
      }
      function Ar(b) {
        return Tn(b) && Ma(b).position !== "fixed" ? b.offsetParent : null;
      }
      function va(b) {
        for (var c = Vn(b), p = Ar(b); p && Tr(p) && Ma(p).position === "static"; ) p = Ar(p);
        return p && (Hn(p) === "html" || Hn(p) === "body" && Ma(p).position === "static") ? c : p || (function(E) {
          var D = /firefox/i.test(Ho());
          if (/Trident/i.test(Ho()) && Tn(E) && Ma(E).position === "fixed") return null;
          var z = Zi(E);
          for (xr(z) && (z = z.host); Tn(z) && ["html", "body"].indexOf(Hn(z)) < 0; ) {
            var F = Ma(z);
            if (F.transform !== "none" || F.perspective !== "none" || F.contain === "paint" || ["transform", "perspective"].indexOf(F.willChange) !== -1 || D && F.willChange === "filter" || D && F.filter && F.filter !== "none") return z;
            z = z.parentNode;
          }
          return null;
        })(b) || c;
      }
      function Qa(b) {
        return ["top", "bottom"].indexOf(b) >= 0 ? "x" : "y";
      }
      function Ki(b, c, p) {
        return Fa(b, Yl(c, p));
      }
      function wr(b) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, b);
      }
      function Uo(b, c) {
        return c.reduce(function(p, E) {
          return p[E] = b, p;
        }, {});
      }
      const Ji = { name: "arrow", enabled: !0, phase: "main", fn: function(b) {
        var c, p = b.state, E = b.name, D = b.options, z = p.elements.arrow, F = p.modifiersData.popperOffsets, te = bn(p.placement), re = Qa(te), fe = [kt, yn].indexOf(te) >= 0 ? "height" : "width";
        if (z && F) {
          var de = (function(We, Je) {
            return wr(typeof (We = typeof We == "function" ? We(Object.assign({}, Je.rects, { placement: Je.placement })) : We) != "number" ? We : Uo(We, ma));
          })(D.padding, p), se = Gl(z), De = re === "y" ? un : kt, Oe = re === "y" ? an : yn, xe = p.rects.reference[fe] + p.rects.reference[re] - F[re] - p.rects.popper[fe], Me = F[re] - p.rects.reference[re], Ce = va(z), at = Ce ? re === "y" ? Ce.clientHeight || 0 : Ce.clientWidth || 0 : 0, ct = xe / 2 - Me / 2, Re = de[De], Ye = at - se[fe] - de[Oe], Ne = at / 2 - se[fe] / 2 + ct, Ie = Ki(Re, Ne, Ye), Pe = re;
          p.modifiersData[E] = ((c = {})[Pe] = Ie, c.centerOffset = Ie - Ne, c);
        }
      }, effect: function(b) {
        var c = b.state, p = b.options.element, E = p === void 0 ? "[data-popper-arrow]" : p;
        E != null && (typeof E != "string" || (E = c.elements.popper.querySelector(E))) && yu(c.elements.popper, E) && (c.elements.arrow = E);
      }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
      function An(b) {
        return b.split("-")[1];
      }
      var Bo = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function Wi(b) {
        var c, p = b.popper, E = b.popperRect, D = b.placement, z = b.variation, F = b.offsets, te = b.position, re = b.gpuAcceleration, fe = b.adaptive, de = b.roundOffsets, se = b.isFixed, De = F.x, Oe = De === void 0 ? 0 : De, xe = F.y, Me = xe === void 0 ? 0 : xe, Ce = typeof de == "function" ? de({ x: Oe, y: Me }) : { x: Oe, y: Me };
        Oe = Ce.x, Me = Ce.y;
        var at = F.hasOwnProperty("x"), ct = F.hasOwnProperty("y"), Re = kt, Ye = un, Ne = window;
        if (fe) {
          var Ie = va(p), Pe = "clientHeight", We = "clientWidth";
          Ie === Vn(p) && Ma(Ie = cn(p)).position !== "static" && te === "absolute" && (Pe = "scrollHeight", We = "scrollWidth"), (D === un || (D === kt || D === yn) && z === Mt) && (Ye = an, Me -= (se && Ie === Ne && Ne.visualViewport ? Ne.visualViewport.height : Ie[Pe]) - E.height, Me *= re ? 1 : -1), D !== kt && (D !== un && D !== an || z !== Mt) || (Re = yn, Oe -= (se && Ie === Ne && Ne.visualViewport ? Ne.visualViewport.width : Ie[We]) - E.width, Oe *= re ? 1 : -1);
        }
        var Je, Nt = Object.assign({ position: te }, fe && Bo), wn = de === !0 ? (function(pn, Jt) {
          var qn = pn.x, Mn = pn.y, Tt = Jt.devicePixelRatio || 1;
          return { x: la(qn * Tt) / Tt || 0, y: la(Mn * Tt) / Tt || 0 };
        })({ x: Oe, y: Me }, Vn(p)) : { x: Oe, y: Me };
        return Oe = wn.x, Me = wn.y, re ? Object.assign({}, Nt, ((Je = {})[Ye] = ct ? "0" : "", Je[Re] = at ? "0" : "", Je.transform = (Ne.devicePixelRatio || 1) <= 1 ? "translate(" + Oe + "px, " + Me + "px)" : "translate3d(" + Oe + "px, " + Me + "px, 0)", Je)) : Object.assign({}, Nt, ((c = {})[Ye] = ct ? Me + "px" : "", c[Re] = at ? Oe + "px" : "", c.transform = "", c));
      }
      const ya = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: function(b) {
        var c = b.state, p = b.options, E = p.gpuAcceleration, D = E === void 0 || E, z = p.adaptive, F = z === void 0 || z, te = p.roundOffsets, re = te === void 0 || te, fe = { placement: bn(c.placement), variation: An(c.placement), popper: c.elements.popper, popperRect: c.rects.popper, gpuAcceleration: D, isFixed: c.options.strategy === "fixed" };
        c.modifiersData.popperOffsets != null && (c.styles.popper = Object.assign({}, c.styles.popper, Wi(Object.assign({}, fe, { offsets: c.modifiersData.popperOffsets, position: c.options.strategy, adaptive: F, roundOffsets: re })))), c.modifiersData.arrow != null && (c.styles.arrow = Object.assign({}, c.styles.arrow, Wi(Object.assign({}, fe, { offsets: c.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: re })))), c.attributes.popper = Object.assign({}, c.attributes.popper, { "data-popper-placement": c.placement });
      }, data: {} };
      var Pi = { passive: !0 };
      const el = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
      }, effect: function(b) {
        var c = b.state, p = b.instance, E = b.options, D = E.scroll, z = D === void 0 || D, F = E.resize, te = F === void 0 || F, re = Vn(c.elements.popper), fe = [].concat(c.scrollParents.reference, c.scrollParents.popper);
        return z && fe.forEach(function(de) {
          de.addEventListener("scroll", p.update, Pi);
        }), te && re.addEventListener("resize", p.update, Pi), function() {
          z && fe.forEach(function(de) {
            de.removeEventListener("scroll", p.update, Pi);
          }), te && re.removeEventListener("resize", p.update, Pi);
        };
      }, data: {} };
      var bu = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function vi(b) {
        return b.replace(/left|right|bottom|top/g, function(c) {
          return bu[c];
        });
      }
      var Mr = { start: "end", end: "start" };
      function $o(b) {
        return b.replace(/start|end/g, function(c) {
          return Mr[c];
        });
      }
      function fn(b) {
        var c = Vn(b);
        return { scrollLeft: c.pageXOffset, scrollTop: c.pageYOffset };
      }
      function Ra(b) {
        return gi(cn(b)).left + fn(b).scrollLeft;
      }
      function tl(b) {
        var c = Ma(b), p = c.overflow, E = c.overflowX, D = c.overflowY;
        return /auto|scroll|overlay|hidden/.test(p + D + E);
      }
      function nl(b) {
        return ["html", "body", "#document"].indexOf(Hn(b)) >= 0 ? b.ownerDocument.body : Tn(b) && tl(b) ? b : nl(Zi(b));
      }
      function Xl(b, c) {
        var p;
        c === void 0 && (c = []);
        var E = nl(b), D = E === ((p = b.ownerDocument) == null ? void 0 : p.body), z = Vn(E), F = D ? [z].concat(z.visualViewport || [], tl(E) ? E : []) : E, te = c.concat(F);
        return D ? te : te.concat(Xl(Zi(F)));
      }
      function Il(b) {
        return Object.assign({}, b, { left: b.x, top: b.y, right: b.x + b.width, bottom: b.y + b.height });
      }
      function Rr(b, c, p) {
        return c === Er ? Il((function(E, D) {
          var z = Vn(E), F = cn(E), te = z.visualViewport, re = F.clientWidth, fe = F.clientHeight, de = 0, se = 0;
          if (te) {
            re = te.width, fe = te.height;
            var De = Vo();
            (De || !De && D === "fixed") && (de = te.offsetLeft, se = te.offsetTop);
          }
          return { width: re, height: fe, x: de + Ra(E), y: se };
        })(b, p)) : Qt(c) ? (function(E, D) {
          var z = gi(E, !1, D === "fixed");
          return z.top = z.top + E.clientTop, z.left = z.left + E.clientLeft, z.bottom = z.top + E.clientHeight, z.right = z.left + E.clientWidth, z.width = E.clientWidth, z.height = E.clientHeight, z.x = z.left, z.y = z.top, z;
        })(c, p) : Il((function(E) {
          var D, z = cn(E), F = fn(E), te = (D = E.ownerDocument) == null ? void 0 : D.body, re = Fa(z.scrollWidth, z.clientWidth, te ? te.scrollWidth : 0, te ? te.clientWidth : 0), fe = Fa(z.scrollHeight, z.clientHeight, te ? te.scrollHeight : 0, te ? te.clientHeight : 0), de = -F.scrollLeft + Ra(E), se = -F.scrollTop;
          return Ma(te || z).direction === "rtl" && (de += Fa(z.clientWidth, te ? te.clientWidth : 0) - re), { width: re, height: fe, x: de, y: se };
        })(cn(b)));
      }
      function al(b) {
        var c, p = b.reference, E = b.element, D = b.placement, z = D ? bn(D) : null, F = D ? An(D) : null, te = p.x + p.width / 2 - E.width / 2, re = p.y + p.height / 2 - E.height / 2;
        switch (z) {
          case un:
            c = { x: te, y: p.y - E.height };
            break;
          case an:
            c = { x: te, y: p.y + p.height };
            break;
          case yn:
            c = { x: p.x + p.width, y: re };
            break;
          case kt:
            c = { x: p.x - E.width, y: re };
            break;
          default:
            c = { x: p.x, y: p.y };
        }
        var fe = z ? Qa(z) : null;
        if (fe != null) {
          var de = fe === "y" ? "height" : "width";
          switch (F) {
            case In:
              c[fe] = c[fe] - (p[de] / 2 - E[de] / 2);
              break;
            case Mt:
              c[fe] = c[fe] + (p[de] / 2 - E[de] / 2);
          }
        }
        return c;
      }
      function Da(b, c) {
        c === void 0 && (c = {});
        var p = c, E = p.placement, D = E === void 0 ? b.placement : E, z = p.strategy, F = z === void 0 ? b.strategy : z, te = p.boundary, re = te === void 0 ? Do : te, fe = p.rootBoundary, de = fe === void 0 ? Er : fe, se = p.elementContext, De = se === void 0 ? Fn : se, Oe = p.altBoundary, xe = Oe !== void 0 && Oe, Me = p.padding, Ce = Me === void 0 ? 0 : Me, at = wr(typeof Ce != "number" ? Ce : Uo(Ce, ma)), ct = De === Fn ? mi : Fn, Re = b.rects.popper, Ye = b.elements[xe ? ct : De], Ne = (function(Jt, qn, Mn, Tt) {
          var jt = qn === "clippingParents" ? (function(ft) {
            var zt = Xl(Zi(ft)), At = ["absolute", "fixed"].indexOf(Ma(ft).position) >= 0 && Tn(ft) ? va(ft) : ft;
            return Qt(At) ? zt.filter(function(dt) {
              return Qt(dt) && yu(dt, At) && Hn(dt) !== "body";
            }) : [];
          })(Jt) : [].concat(qn), Ut = [].concat(jt, [Mn]), Yn = Ut[0], Yt = Ut.reduce(function(ft, zt) {
            var At = Rr(Jt, zt, Tt);
            return ft.top = Fa(At.top, ft.top), ft.right = Yl(At.right, ft.right), ft.bottom = Yl(At.bottom, ft.bottom), ft.left = Fa(At.left, ft.left), ft;
          }, Rr(Jt, Yn, Tt));
          return Yt.width = Yt.right - Yt.left, Yt.height = Yt.bottom - Yt.top, Yt.x = Yt.left, Yt.y = Yt.top, Yt;
        })(Qt(Ye) ? Ye : Ye.contextElement || cn(b.elements.popper), re, de, F), Ie = gi(b.elements.reference), Pe = al({ reference: Ie, element: Re, placement: D }), We = Il(Object.assign({}, Re, Pe)), Je = De === Fn ? We : Ie, Nt = { top: Ne.top - Je.top + at.top, bottom: Je.bottom - Ne.bottom + at.bottom, left: Ne.left - Je.left + at.left, right: Je.right - Ne.right + at.right }, wn = b.modifiersData.offset;
        if (De === Fn && wn) {
          var pn = wn[D];
          Object.keys(Nt).forEach(function(Jt) {
            var qn = [yn, an].indexOf(Jt) >= 0 ? 1 : -1, Mn = [un, an].indexOf(Jt) >= 0 ? "y" : "x";
            Nt[Jt] += pn[Mn] * qn;
          });
        }
        return Nt;
      }
      function _u(b, c) {
        c === void 0 && (c = {});
        var p = c, E = p.placement, D = p.boundary, z = p.rootBoundary, F = p.padding, te = p.flipVariations, re = p.allowedAutoPlacements, fe = re === void 0 ? Cr : re, de = An(E), se = de ? te ? No : No.filter(function(xe) {
          return An(xe) === de;
        }) : ma, De = se.filter(function(xe) {
          return fe.indexOf(xe) >= 0;
        });
        De.length === 0 && (De = se);
        var Oe = De.reduce(function(xe, Me) {
          return xe[Me] = Da(b, { placement: Me, boundary: D, rootBoundary: z, padding: F })[bn(Me)], xe;
        }, {});
        return Object.keys(Oe).sort(function(xe, Me) {
          return Oe[xe] - Oe[Me];
        });
      }
      const Su = { name: "flip", enabled: !0, phase: "main", fn: function(b) {
        var c = b.state, p = b.options, E = b.name;
        if (!c.modifiersData[E]._skip) {
          for (var D = p.mainAxis, z = D === void 0 || D, F = p.altAxis, te = F === void 0 || F, re = p.fallbackPlacements, fe = p.padding, de = p.boundary, se = p.rootBoundary, De = p.altBoundary, Oe = p.flipVariations, xe = Oe === void 0 || Oe, Me = p.allowedAutoPlacements, Ce = c.options.placement, at = bn(Ce), ct = re || (at !== Ce && xe ? (function(ft) {
            if (bn(ft) === wa) return [];
            var zt = vi(ft);
            return [$o(ft), zt, $o(zt)];
          })(Ce) : [vi(Ce)]), Re = [Ce].concat(ct).reduce(function(ft, zt) {
            return ft.concat(bn(zt) === wa ? _u(c, { placement: zt, boundary: de, rootBoundary: se, padding: fe, flipVariations: xe, allowedAutoPlacements: Me }) : zt);
          }, []), Ye = c.rects.reference, Ne = c.rects.popper, Ie = /* @__PURE__ */ new Map(), Pe = !0, We = Re[0], Je = 0; Je < Re.length; Je++) {
            var Nt = Re[Je], wn = bn(Nt), pn = An(Nt) === In, Jt = [un, an].indexOf(wn) >= 0, qn = Jt ? "width" : "height", Mn = Da(c, { placement: Nt, boundary: de, rootBoundary: se, altBoundary: De, padding: fe }), Tt = Jt ? pn ? yn : kt : pn ? an : un;
            Ye[qn] > Ne[qn] && (Tt = vi(Tt));
            var jt = vi(Tt), Ut = [];
            if (z && Ut.push(Mn[wn] <= 0), te && Ut.push(Mn[Tt] <= 0, Mn[jt] <= 0), Ut.every(function(ft) {
              return ft;
            })) {
              We = Nt, Pe = !1;
              break;
            }
            Ie.set(Nt, Ut);
          }
          if (Pe) for (var Yn = function(ft) {
            var zt = Re.find(function(At) {
              var dt = Ie.get(At);
              if (dt) return dt.slice(0, ft).every(function(Ci) {
                return Ci;
              });
            });
            if (zt) return We = zt, "break";
          }, Yt = xe ? 3 : 1; Yt > 0 && Yn(Yt) !== "break"; Yt--) ;
          c.placement !== We && (c.modifiersData[E]._skip = !0, c.placement = We, c.reset = !0);
        }
      }, requiresIfExists: ["offset"], data: { _skip: !1 } };
      function Eu(b, c, p) {
        return p === void 0 && (p = { x: 0, y: 0 }), { top: b.top - c.height - p.y, right: b.right - c.width + p.x, bottom: b.bottom - c.height + p.y, left: b.left - c.width - p.x };
      }
      function Cu(b) {
        return [un, yn, an, kt].some(function(c) {
          return b[c] >= 0;
        });
      }
      const Dr = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: function(b) {
        var c = b.state, p = b.name, E = c.rects.reference, D = c.rects.popper, z = c.modifiersData.preventOverflow, F = Da(c, { elementContext: "reference" }), te = Da(c, { altBoundary: !0 }), re = Eu(F, E), fe = Eu(te, D, z), de = Cu(re), se = Cu(fe);
        c.modifiersData[p] = { referenceClippingOffsets: re, popperEscapeOffsets: fe, isReferenceHidden: de, hasPopperEscaped: se }, c.attributes.popper = Object.assign({}, c.attributes.popper, { "data-popper-reference-hidden": de, "data-popper-escaped": se });
      } }, Ou = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: function(b) {
        var c = b.state, p = b.options, E = b.name, D = p.offset, z = D === void 0 ? [0, 0] : D, F = Cr.reduce(function(de, se) {
          return de[se] = (function(De, Oe, xe) {
            var Me = bn(De), Ce = [kt, un].indexOf(Me) >= 0 ? -1 : 1, at = typeof xe == "function" ? xe(Object.assign({}, Oe, { placement: De })) : xe, ct = at[0], Re = at[1];
            return ct = ct || 0, Re = (Re || 0) * Ce, [kt, yn].indexOf(Me) >= 0 ? { x: Re, y: ct } : { x: ct, y: Re };
          })(se, c.rects, z), de;
        }, {}), te = F[c.placement], re = te.x, fe = te.y;
        c.modifiersData.popperOffsets != null && (c.modifiersData.popperOffsets.x += re, c.modifiersData.popperOffsets.y += fe), c.modifiersData[E] = F;
      } }, ko = { name: "popperOffsets", enabled: !0, phase: "read", fn: function(b) {
        var c = b.state, p = b.name;
        c.modifiersData[p] = al({ reference: c.rects.reference, element: c.rects.popper, placement: c.placement });
      }, data: {} }, xu = { name: "preventOverflow", enabled: !0, phase: "main", fn: function(b) {
        var c = b.state, p = b.options, E = b.name, D = p.mainAxis, z = D === void 0 || D, F = p.altAxis, te = F !== void 0 && F, re = p.boundary, fe = p.rootBoundary, de = p.altBoundary, se = p.padding, De = p.tether, Oe = De === void 0 || De, xe = p.tetherOffset, Me = xe === void 0 ? 0 : xe, Ce = Da(c, { boundary: re, rootBoundary: fe, padding: se, altBoundary: de }), at = bn(c.placement), ct = An(c.placement), Re = !ct, Ye = Qa(at), Ne = Ye === "x" ? "y" : "x", Ie = c.modifiersData.popperOffsets, Pe = c.rects.reference, We = c.rects.popper, Je = typeof Me == "function" ? Me(Object.assign({}, c.rects, { placement: c.placement })) : Me, Nt = typeof Je == "number" ? { mainAxis: Je, altAxis: Je } : Object.assign({ mainAxis: 0, altAxis: 0 }, Je), wn = c.modifiersData.offset ? c.modifiersData.offset[c.placement] : null, pn = { x: 0, y: 0 };
        if (Ie) {
          if (z) {
            var Jt, qn = Ye === "y" ? un : kt, Mn = Ye === "y" ? an : yn, Tt = Ye === "y" ? "height" : "width", jt = Ie[Ye], Ut = jt + Ce[qn], Yn = jt - Ce[Mn], Yt = Oe ? -We[Tt] / 2 : 0, ft = ct === In ? Pe[Tt] : We[Tt], zt = ct === In ? -We[Tt] : -Pe[Tt], At = c.elements.arrow, dt = Oe && At ? Gl(At) : { width: 0, height: 0 }, Ci = c.modifiersData["arrow#persistent"] ? c.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 }, Ca = Ci[qn], ze = Ci[Mn], et = Ki(0, Pe[Tt], dt[Tt]), Gt = Re ? Pe[Tt] / 2 - Yt - et - Ca - Nt.mainAxis : ft - et - Ca - Nt.mainAxis, Yr = Re ? -Pe[Tt] / 2 + Yt + et + ze + Nt.mainAxis : zt + et + ze + Nt.mainAxis, ri = c.elements.arrow && va(c.elements.arrow), Oi = ri ? Ye === "y" ? ri.clientTop || 0 : ri.clientLeft || 0 : 0, ir = (Jt = wn?.[Ye]) != null ? Jt : 0, lr = jt + Yr - ir, xi = Ki(Oe ? Yl(Ut, jt + Gt - ir - Oi) : Ut, jt, Oe ? Fa(Yn, lr) : Yn);
            Ie[Ye] = xi, pn[Ye] = xi - jt;
          }
          if (te) {
            var nc, Lt = Ye === "x" ? un : kt, bs = Ye === "x" ? an : yn, Ua = Ie[Ne], rr = Ne === "y" ? "height" : "width", _s = Ua + Ce[Lt], ac = Ua - Ce[bs], or = [un, kt].indexOf(at) !== -1, Gr = (nc = wn?.[Ne]) != null ? nc : 0, Xr = or ? _s : Ua - Pe[rr] - We[rr] - Gr + Nt.altAxis, mn = or ? Ua + Pe[rr] + We[rr] - Gr - Nt.altAxis : ac, Ht = Oe && or ? (function(Ir, sr, yl) {
              var Fr = Ki(Ir, sr, yl);
              return Fr > yl ? yl : Fr;
            })(Xr, Ua, mn) : Ki(Oe ? Xr : _s, Ua, Oe ? mn : ac);
            Ie[Ne] = Ht, pn[Ne] = Ht - Ua;
          }
          c.modifiersData[E] = pn;
        }
      }, requiresIfExists: ["offset"] };
      function ed(b, c, p) {
        p === void 0 && (p = !1);
        var E, D, z = Tn(c), F = Tn(c) && (function(se) {
          var De = se.getBoundingClientRect(), Oe = la(De.width) / se.offsetWidth || 1, xe = la(De.height) / se.offsetHeight || 1;
          return Oe !== 1 || xe !== 1;
        })(c), te = cn(c), re = gi(b, F, p), fe = { scrollLeft: 0, scrollTop: 0 }, de = { x: 0, y: 0 };
        return (z || !z && !p) && ((Hn(c) !== "body" || tl(te)) && (fe = (E = c) !== Vn(E) && Tn(E) ? { scrollLeft: (D = E).scrollLeft, scrollTop: D.scrollTop } : fn(E)), Tn(c) ? ((de = gi(c, !0)).x += c.clientLeft, de.y += c.clientTop) : te && (de.x = Ra(te))), { x: re.left + fe.scrollLeft - de.x, y: re.top + fe.scrollTop - de.y, width: re.width, height: re.height };
      }
      function td(b) {
        var c = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Set(), E = [];
        function D(z) {
          p.add(z.name), [].concat(z.requires || [], z.requiresIfExists || []).forEach(function(F) {
            if (!p.has(F)) {
              var te = c.get(F);
              te && D(te);
            }
          }), E.push(z);
        }
        return b.forEach(function(z) {
          c.set(z.name, z);
        }), b.forEach(function(z) {
          p.has(z.name) || D(z);
        }), E;
      }
      var qo = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function Tu() {
        for (var b = arguments.length, c = new Array(b), p = 0; p < b; p++) c[p] = arguments[p];
        return !c.some(function(E) {
          return !(E && typeof E.getBoundingClientRect == "function");
        });
      }
      function Nr(b) {
        b === void 0 && (b = {});
        var c = b, p = c.defaultModifiers, E = p === void 0 ? [] : p, D = c.defaultOptions, z = D === void 0 ? qo : D;
        return function(F, te, re) {
          re === void 0 && (re = z);
          var fe, de, se = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, qo, z), modifiersData: {}, elements: { reference: F, popper: te }, attributes: {}, styles: {} }, De = [], Oe = !1, xe = { state: se, setOptions: function(Ce) {
            var at = typeof Ce == "function" ? Ce(se.options) : Ce;
            Me(), se.options = Object.assign({}, z, se.options, at), se.scrollParents = { reference: Qt(F) ? Xl(F) : F.contextElement ? Xl(F.contextElement) : [], popper: Xl(te) };
            var ct, Re, Ye = (function(Ne) {
              var Ie = td(Ne);
              return Lo.reduce(function(Pe, We) {
                return Pe.concat(Ie.filter(function(Je) {
                  return Je.phase === We;
                }));
              }, []);
            })((ct = [].concat(E, se.options.modifiers), Re = ct.reduce(function(Ne, Ie) {
              var Pe = Ne[Ie.name];
              return Ne[Ie.name] = Pe ? Object.assign({}, Pe, Ie, { options: Object.assign({}, Pe.options, Ie.options), data: Object.assign({}, Pe.data, Ie.data) }) : Ie, Ne;
            }, {}), Object.keys(Re).map(function(Ne) {
              return Re[Ne];
            })));
            return se.orderedModifiers = Ye.filter(function(Ne) {
              return Ne.enabled;
            }), se.orderedModifiers.forEach(function(Ne) {
              var Ie = Ne.name, Pe = Ne.options, We = Pe === void 0 ? {} : Pe, Je = Ne.effect;
              if (typeof Je == "function") {
                var Nt = Je({ state: se, name: Ie, instance: xe, options: We });
                De.push(Nt || function() {
                });
              }
            }), xe.update();
          }, forceUpdate: function() {
            if (!Oe) {
              var Ce = se.elements, at = Ce.reference, ct = Ce.popper;
              if (Tu(at, ct)) {
                se.rects = { reference: ed(at, va(ct), se.options.strategy === "fixed"), popper: Gl(ct) }, se.reset = !1, se.placement = se.options.placement, se.orderedModifiers.forEach(function(Je) {
                  return se.modifiersData[Je.name] = Object.assign({}, Je.data);
                });
                for (var Re = 0; Re < se.orderedModifiers.length; Re++) if (se.reset !== !0) {
                  var Ye = se.orderedModifiers[Re], Ne = Ye.fn, Ie = Ye.options, Pe = Ie === void 0 ? {} : Ie, We = Ye.name;
                  typeof Ne == "function" && (se = Ne({ state: se, options: Pe, name: We, instance: xe }) || se);
                } else se.reset = !1, Re = -1;
              }
            }
          }, update: (fe = function() {
            return new Promise(function(Ce) {
              xe.forceUpdate(), Ce(se);
            });
          }, function() {
            return de || (de = new Promise(function(Ce) {
              Promise.resolve().then(function() {
                de = void 0, Ce(fe());
              });
            })), de;
          }), destroy: function() {
            Me(), Oe = !0;
          } };
          if (!Tu(F, te)) return xe;
          function Me() {
            De.forEach(function(Ce) {
              return Ce();
            }), De = [];
          }
          return xe.setOptions(re).then(function(Ce) {
            !Oe && re.onFirstUpdate && re.onFirstUpdate(Ce);
          }), xe;
        };
      }
      var nd = Nr(), ad = Nr({ defaultModifiers: [el, ko, ya, ql] }), Fl = Nr({ defaultModifiers: [el, ko, ya, ql, Ou, Su, xu, Ji, Dr] });
      const Au = Object.freeze(Object.defineProperty({ __proto__: null, afterMain: Ln, afterRead: $l, afterWrite: Or, applyStyles: ql, arrow: Ji, auto: wa, basePlacements: ma, beforeMain: kl, beforeRead: jo, beforeWrite: zo, bottom: an, clippingParents: Do, computeStyles: ya, createPopper: Fl, createPopperBase: nd, createPopperLite: ad, detectOverflow: Da, end: Mt, eventListeners: el, flip: Su, hide: Dr, left: kt, main: ga, modifierPhases: Lo, offset: Ou, placements: Cr, popper: Fn, popperGenerator: Nr, popperOffsets: ko, preventOverflow: xu, read: gu, reference: mi, right: yn, start: In, top: un, variationPlacements: No, viewport: Er, write: vu }, Symbol.toStringTag, { value: "Module" })), wu = "dropdown", yi = ".bs.dropdown", jr = ".data-api", id = "ArrowUp", Mu = "ArrowDown", ld = `hide${yi}`, rd = `hidden${yi}`, od = `show${yi}`, sd = `shown${yi}`, Ru = `click${yi}${jr}`, Du = `keydown${yi}${jr}`, ud = `keyup${yi}${jr}`, Za = "show", ra = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', cd = `${ra}.${Za}`, Ql = ".dropdown-menu", Nu = H() ? "top-end" : "top-start", ju = H() ? "top-start" : "top-end", zu = H() ? "bottom-end" : "bottom-start", Lu = H() ? "bottom-start" : "bottom-end", il = H() ? "left-start" : "right-start", fd = H() ? "right-start" : "left-start", dd = { autoClose: !0, boundary: "clippingParents", display: "dynamic", offset: [0, 2], popperConfig: null, reference: "toggle" }, hd = { autoClose: "(boolean|string)", boundary: "(string|element)", display: "string", offset: "(array|string|function)", popperConfig: "(null|object|function)", reference: "(string|element|object)" };
      class Qn extends he {
        constructor(c, p) {
          super(c, p), this._popper = null, this._parent = this._element.parentNode, this._menu = ne.next(this._element, Ql)[0] || ne.prev(this._element, Ql)[0] || ne.findOne(Ql, this._parent), this._inNavbar = this._detectNavbar();
        }
        static get Default() {
          return dd;
        }
        static get DefaultType() {
          return hd;
        }
        static get NAME() {
          return wu;
        }
        toggle() {
          return this._isShown() ? this.hide() : this.show();
        }
        show() {
          if (x(this._element) || this._isShown()) return;
          const c = { relatedTarget: this._element };
          if (!O.trigger(this._element, od, c).defaultPrevented) {
            if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) for (const p of [].concat(...document.body.children)) O.on(p, "mouseover", R);
            this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Za), this._element.classList.add(Za), O.trigger(this._element, sd, c);
          }
        }
        hide() {
          if (x(this._element) || !this._isShown()) return;
          const c = { relatedTarget: this._element };
          this._completeHide(c);
        }
        dispose() {
          this._popper && this._popper.destroy(), super.dispose();
        }
        update() {
          this._inNavbar = this._detectNavbar(), this._popper && this._popper.update();
        }
        _completeHide(c) {
          if (!O.trigger(this._element, ld, c).defaultPrevented) {
            if ("ontouchstart" in document.documentElement) for (const p of [].concat(...document.body.children)) O.off(p, "mouseover", R);
            this._popper && this._popper.destroy(), this._menu.classList.remove(Za), this._element.classList.remove(Za), this._element.setAttribute("aria-expanded", "false"), ce.removeDataAttribute(this._menu, "popper"), O.trigger(this._element, rd, c);
          }
        }
        _getConfig(c) {
          if (typeof (c = super._getConfig(c)).reference == "object" && !m(c.reference) && typeof c.reference.getBoundingClientRect != "function") throw new TypeError(`${wu.toUpperCase()}: Option "reference" provided type "object" without a required "getBoundingClientRect" method.`);
          return c;
        }
        _createPopper() {
          if (Au === void 0) throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org/docs/v2/)");
          let c = this._element;
          this._config.reference === "parent" ? c = this._parent : m(this._config.reference) ? c = v(this._config.reference) : typeof this._config.reference == "object" && (c = this._config.reference);
          const p = this._getPopperConfig();
          this._popper = Fl(c, this._menu, p);
        }
        _isShown() {
          return this._menu.classList.contains(Za);
        }
        _getPlacement() {
          const c = this._parent;
          if (c.classList.contains("dropend")) return il;
          if (c.classList.contains("dropstart")) return fd;
          if (c.classList.contains("dropup-center")) return "top";
          if (c.classList.contains("dropdown-center")) return "bottom";
          const p = getComputedStyle(this._menu).getPropertyValue("--bs-position").trim() === "end";
          return c.classList.contains("dropup") ? p ? ju : Nu : p ? Lu : zu;
        }
        _detectNavbar() {
          return this._element.closest(".navbar") !== null;
        }
        _getOffset() {
          const { offset: c } = this._config;
          return typeof c == "string" ? c.split(",").map((p) => Number.parseInt(p, 10)) : typeof c == "function" ? (p) => c(p, this._element) : c;
        }
        _getPopperConfig() {
          const c = { placement: this._getPlacement(), modifiers: [{ name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "offset", options: { offset: this._getOffset() } }] };
          return (this._inNavbar || this._config.display === "static") && (ce.setDataAttribute(this._menu, "popper", "static"), c.modifiers = [{ name: "applyStyles", enabled: !1 }]), { ...c, ...X(this._config.popperConfig, [void 0, c]) };
        }
        _selectMenuItem({ key: c, target: p }) {
          const E = ne.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((D) => C(D));
          E.length && U(E, p, c === Mu, !E.includes(p)).focus();
        }
        static jQueryInterface(c) {
          return this.each(function() {
            const p = Qn.getOrCreateInstance(this, c);
            if (typeof c == "string") {
              if (p[c] === void 0) throw new TypeError(`No method named "${c}"`);
              p[c]();
            }
          });
        }
        static clearMenus(c) {
          if (c.button === 2 || c.type === "keyup" && c.key !== "Tab") return;
          const p = ne.find(cd);
          for (const E of p) {
            const D = Qn.getInstance(E);
            if (!D || D._config.autoClose === !1) continue;
            const z = c.composedPath(), F = z.includes(D._menu);
            if (z.includes(D._element) || D._config.autoClose === "inside" && !F || D._config.autoClose === "outside" && F || D._menu.contains(c.target) && (c.type === "keyup" && c.key === "Tab" || /input|select|option|textarea|form/i.test(c.target.tagName))) continue;
            const te = { relatedTarget: D._element };
            c.type === "click" && (te.clickEvent = c), D._completeHide(te);
          }
        }
        static dataApiKeydownHandler(c) {
          const p = /input|textarea/i.test(c.target.tagName), E = c.key === "Escape", D = [id, Mu].includes(c.key);
          if (!D && !E || p && !E) return;
          c.preventDefault();
          const z = this.matches(ra) ? this : ne.prev(this, ra)[0] || ne.next(this, ra)[0] || ne.findOne(ra, c.delegateTarget.parentNode), F = Qn.getOrCreateInstance(z);
          if (D) return c.stopPropagation(), F.show(), void F._selectMenuItem(c);
          F._isShown() && (c.stopPropagation(), F.hide(), z.focus());
        }
      }
      O.on(document, Du, ra, Qn.dataApiKeydownHandler), O.on(document, Du, Ql, Qn.dataApiKeydownHandler), O.on(document, Ru, Qn.clearMenus), O.on(document, ud, Qn.clearMenus), O.on(document, Ru, ra, function(b) {
        b.preventDefault(), Qn.getOrCreateInstance(this).toggle();
      }), Q(Qn);
      const Yo = "backdrop", ll = "show", rl = `mousedown.bs.${Yo}`, pd = { className: "modal-backdrop", clickCallback: null, isAnimated: !1, isVisible: !0, rootElement: "body" }, zr = { className: "string", clickCallback: "(function|null)", isAnimated: "boolean", isVisible: "boolean", rootElement: "(element|string)" };
      class Go extends ue {
        constructor(c) {
          super(), this._config = this._getConfig(c), this._isAppended = !1, this._element = null;
        }
        static get Default() {
          return pd;
        }
        static get DefaultType() {
          return zr;
        }
        static get NAME() {
          return Yo;
        }
        show(c) {
          if (!this._config.isVisible) return void X(c);
          this._append();
          const p = this._getElement();
          this._config.isAnimated && L(p), p.classList.add(ll), this._emulateAnimation(() => {
            X(c);
          });
        }
        hide(c) {
          this._config.isVisible ? (this._getElement().classList.remove(ll), this._emulateAnimation(() => {
            this.dispose(), X(c);
          })) : X(c);
        }
        dispose() {
          this._isAppended && (O.off(this._element, rl), this._element.remove(), this._isAppended = !1);
        }
        _getElement() {
          if (!this._element) {
            const c = document.createElement("div");
            c.className = this._config.className, this._config.isAnimated && c.classList.add("fade"), this._element = c;
          }
          return this._element;
        }
        _configAfterMerge(c) {
          return c.rootElement = v(c.rootElement), c;
        }
        _append() {
          if (this._isAppended) return;
          const c = this._getElement();
          this._config.rootElement.append(c), O.on(c, rl, () => {
            X(this._config.clickCallback);
          }), this._isAppended = !0;
        }
        _emulateAnimation(c) {
          W(c, this._getElement(), this._config.isAnimated);
        }
      }
      const Zl = ".bs.focustrap", Xo = `focusin${Zl}`, Io = `keydown.tab${Zl}`, Fo = "backward", Hu = { autofocus: !0, trapElement: null }, Vu = { autofocus: "boolean", trapElement: "element" };
      class Uu extends ue {
        constructor(c) {
          super(), this._config = this._getConfig(c), this._isActive = !1, this._lastTabNavDirection = null;
        }
        static get Default() {
          return Hu;
        }
        static get DefaultType() {
          return Vu;
        }
        static get NAME() {
          return "focustrap";
        }
        activate() {
          this._isActive || (this._config.autofocus && this._config.trapElement.focus(), O.off(document, Zl), O.on(document, Xo, (c) => this._handleFocusin(c)), O.on(document, Io, (c) => this._handleKeydown(c)), this._isActive = !0);
        }
        deactivate() {
          this._isActive && (this._isActive = !1, O.off(document, Zl));
        }
        _handleFocusin(c) {
          const { trapElement: p } = this._config;
          if (c.target === document || c.target === p || p.contains(c.target)) return;
          const E = ne.focusableChildren(p);
          E.length === 0 ? p.focus() : this._lastTabNavDirection === Fo ? E[E.length - 1].focus() : E[0].focus();
        }
        _handleKeydown(c) {
          c.key === "Tab" && (this._lastTabNavDirection = c.shiftKey ? Fo : "forward");
        }
      }
      const Bu = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", $u = ".sticky-top", Lr = "padding-right", ku = "margin-right";
      class _n {
        constructor() {
          this._element = document.body;
        }
        getWidth() {
          const c = document.documentElement.clientWidth;
          return Math.abs(window.innerWidth - c);
        }
        hide() {
          const c = this.getWidth();
          this._disableOverFlow(), this._setElementAttributes(this._element, Lr, (p) => p + c), this._setElementAttributes(Bu, Lr, (p) => p + c), this._setElementAttributes($u, ku, (p) => p - c);
        }
        reset() {
          this._resetElementAttributes(this._element, "overflow"), this._resetElementAttributes(this._element, Lr), this._resetElementAttributes(Bu, Lr), this._resetElementAttributes($u, ku);
        }
        isOverflowing() {
          return this.getWidth() > 0;
        }
        _disableOverFlow() {
          this._saveInitialAttribute(this._element, "overflow"), this._element.style.overflow = "hidden";
        }
        _setElementAttributes(c, p, E) {
          const D = this.getWidth();
          this._applyManipulationCallback(c, (z) => {
            if (z !== this._element && window.innerWidth > z.clientWidth + D) return;
            this._saveInitialAttribute(z, p);
            const F = window.getComputedStyle(z).getPropertyValue(p);
            z.style.setProperty(p, `${E(Number.parseFloat(F))}px`);
          });
        }
        _saveInitialAttribute(c, p) {
          const E = c.style.getPropertyValue(p);
          E && ce.setDataAttribute(c, p, E);
        }
        _resetElementAttributes(c, p) {
          this._applyManipulationCallback(c, (E) => {
            const D = ce.getDataAttribute(E, p);
            D !== null ? (ce.removeDataAttribute(E, p), E.style.setProperty(p, D)) : E.style.removeProperty(p);
          });
        }
        _applyManipulationCallback(c, p) {
          if (m(c)) p(c);
          else for (const E of ne.find(c, this._element)) p(E);
        }
      }
      const dn = ".bs.modal", qu = `hide${dn}`, Yu = `hidePrevented${dn}`, Qo = `hidden${dn}`, Zo = `show${dn}`, Ko = `shown${dn}`, md = `resize${dn}`, ol = `click.dismiss${dn}`, Jo = `mousedown.dismiss${dn}`, Kl = `keydown.dismiss${dn}`, Wo = `click${dn}.data-api`, Po = "modal-open", Ka = "show", Ja = "modal-static", es = { backdrop: !0, focus: !0, keyboard: !0 }, Gu = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
      class Un extends he {
        constructor(c, p) {
          super(c, p), this._dialog = ne.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new _n(), this._addEventListeners();
        }
        static get Default() {
          return es;
        }
        static get DefaultType() {
          return Gu;
        }
        static get NAME() {
          return "modal";
        }
        toggle(c) {
          return this._isShown ? this.hide() : this.show(c);
        }
        show(c) {
          this._isShown || this._isTransitioning || O.trigger(this._element, Zo, { relatedTarget: c }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(Po), this._adjustDialog(), this._backdrop.show(() => this._showElement(c)));
        }
        hide() {
          this._isShown && !this._isTransitioning && (O.trigger(this._element, qu).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(Ka), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated())));
        }
        dispose() {
          O.off(window, dn), O.off(this._dialog, dn), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        handleUpdate() {
          this._adjustDialog();
        }
        _initializeBackDrop() {
          return new Go({ isVisible: !!this._config.backdrop, isAnimated: this._isAnimated() });
        }
        _initializeFocusTrap() {
          return new Uu({ trapElement: this._element });
        }
        _showElement(c) {
          document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
          const p = ne.findOne(".modal-body", this._dialog);
          p && (p.scrollTop = 0), L(this._element), this._element.classList.add(Ka), this._queueCallback(() => {
            this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, O.trigger(this._element, Ko, { relatedTarget: c });
          }, this._dialog, this._isAnimated());
        }
        _addEventListeners() {
          O.on(this._element, Kl, (c) => {
            c.key === "Escape" && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition());
          }), O.on(window, md, () => {
            this._isShown && !this._isTransitioning && this._adjustDialog();
          }), O.on(this._element, Jo, (c) => {
            O.one(this._element, ol, (p) => {
              this._element === c.target && this._element === p.target && (this._config.backdrop !== "static" ? this._config.backdrop && this.hide() : this._triggerBackdropTransition());
            });
          });
        }
        _hideModal() {
          this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
            document.body.classList.remove(Po), this._resetAdjustments(), this._scrollBar.reset(), O.trigger(this._element, Qo);
          });
        }
        _isAnimated() {
          return this._element.classList.contains("fade");
        }
        _triggerBackdropTransition() {
          if (O.trigger(this._element, Yu).defaultPrevented) return;
          const c = this._element.scrollHeight > document.documentElement.clientHeight, p = this._element.style.overflowY;
          p === "hidden" || this._element.classList.contains(Ja) || (c || (this._element.style.overflowY = "hidden"), this._element.classList.add(Ja), this._queueCallback(() => {
            this._element.classList.remove(Ja), this._queueCallback(() => {
              this._element.style.overflowY = p;
            }, this._dialog);
          }, this._dialog), this._element.focus());
        }
        _adjustDialog() {
          const c = this._element.scrollHeight > document.documentElement.clientHeight, p = this._scrollBar.getWidth(), E = p > 0;
          if (E && !c) {
            const D = H() ? "paddingLeft" : "paddingRight";
            this._element.style[D] = `${p}px`;
          }
          if (!E && c) {
            const D = H() ? "paddingRight" : "paddingLeft";
            this._element.style[D] = `${p}px`;
          }
        }
        _resetAdjustments() {
          this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
        }
        static jQueryInterface(c, p) {
          return this.each(function() {
            const E = Un.getOrCreateInstance(this, c);
            if (typeof c == "string") {
              if (E[c] === void 0) throw new TypeError(`No method named "${c}"`);
              E[c](p);
            }
          });
        }
      }
      O.on(document, Wo, '[data-bs-toggle="modal"]', function(b) {
        const c = ne.getElementFromSelector(this);
        ["A", "AREA"].includes(this.tagName) && b.preventDefault(), O.one(c, Zo, (E) => {
          E.defaultPrevented || O.one(c, Qo, () => {
            C(this) && this.focus();
          });
        });
        const p = ne.findOne(".modal.show");
        p && Un.getInstance(p).hide(), Un.getOrCreateInstance(c).toggle(this);
      }), _t(Un), Q(Un);
      const ba = ".bs.offcanvas", ts = ".data-api", Xu = `load${ba}${ts}`, Iu = "show", Fu = "showing", Qu = "hiding", ns = ".offcanvas.show", Zu = `show${ba}`, as = `shown${ba}`, oa = `hide${ba}`, Jl = `hidePrevented${ba}`, Bn = `hidden${ba}`, sl = `resize${ba}`, is = `click${ba}${ts}`, Hr = `keydown.dismiss${ba}`, Vr = { backdrop: !0, keyboard: !0, scroll: !1 }, ls = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };
      class Sn extends he {
        constructor(c, p) {
          super(c, p), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
        }
        static get Default() {
          return Vr;
        }
        static get DefaultType() {
          return ls;
        }
        static get NAME() {
          return "offcanvas";
        }
        toggle(c) {
          return this._isShown ? this.hide() : this.show(c);
        }
        show(c) {
          this._isShown || O.trigger(this._element, Zu, { relatedTarget: c }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || new _n().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Fu), this._queueCallback(() => {
            this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(Iu), this._element.classList.remove(Fu), O.trigger(this._element, as, { relatedTarget: c });
          }, this._element, !0));
        }
        hide() {
          this._isShown && (O.trigger(this._element, oa).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(Qu), this._backdrop.hide(), this._queueCallback(() => {
            this._element.classList.remove(Iu, Qu), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new _n().reset(), O.trigger(this._element, Bn);
          }, this._element, !0)));
        }
        dispose() {
          this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        _initializeBackDrop() {
          const c = !!this._config.backdrop;
          return new Go({ className: "offcanvas-backdrop", isVisible: c, isAnimated: !0, rootElement: this._element.parentNode, clickCallback: c ? () => {
            this._config.backdrop !== "static" ? this.hide() : O.trigger(this._element, Jl);
          } : null });
        }
        _initializeFocusTrap() {
          return new Uu({ trapElement: this._element });
        }
        _addEventListeners() {
          O.on(this._element, Hr, (c) => {
            c.key === "Escape" && (this._config.keyboard ? this.hide() : O.trigger(this._element, Jl));
          });
        }
        static jQueryInterface(c) {
          return this.each(function() {
            const p = Sn.getOrCreateInstance(this, c);
            if (typeof c == "string") {
              if (p[c] === void 0 || c.startsWith("_") || c === "constructor") throw new TypeError(`No method named "${c}"`);
              p[c](this);
            }
          });
        }
      }
      O.on(document, is, '[data-bs-toggle="offcanvas"]', function(b) {
        const c = ne.getElementFromSelector(this);
        if (["A", "AREA"].includes(this.tagName) && b.preventDefault(), x(this)) return;
        O.one(c, Bn, () => {
          C(this) && this.focus();
        });
        const p = ne.findOne(ns);
        p && p !== c && Sn.getInstance(p).hide(), Sn.getOrCreateInstance(c).toggle(this);
      }), O.on(window, Xu, () => {
        for (const b of ne.find(ns)) Sn.getOrCreateInstance(b).show();
      }), O.on(window, sl, () => {
        for (const b of ne.find("[aria-modal][class*=show][class*=offcanvas-]")) getComputedStyle(b).position !== "fixed" && Sn.getOrCreateInstance(b).hide();
      }), _t(Sn), Q(Sn);
      const rs = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], dd: [], div: [], dl: [], dt: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, Ur = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), ul = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, gd = (b, c) => {
        const p = b.nodeName.toLowerCase();
        return c.includes(p) ? !Ur.has(p) || !!ul.test(b.nodeValue) : c.filter((E) => E instanceof RegExp).some((E) => E.test(p));
      }, $n = { allowList: rs, content: {}, extraClass: "", html: !1, sanitize: !0, sanitizeFn: null, template: "<div></div>" }, os = { allowList: "object", content: "object", extraClass: "(string|function)", html: "boolean", sanitize: "boolean", sanitizeFn: "(null|function)", template: "string" }, Na = { entry: "(string|element|function|null)", selector: "(string|element)" };
      class Ku extends ue {
        constructor(c) {
          super(), this._config = this._getConfig(c);
        }
        static get Default() {
          return $n;
        }
        static get DefaultType() {
          return os;
        }
        static get NAME() {
          return "TemplateFactory";
        }
        getContent() {
          return Object.values(this._config.content).map((c) => this._resolvePossibleFunction(c)).filter(Boolean);
        }
        hasContent() {
          return this.getContent().length > 0;
        }
        changeContent(c) {
          return this._checkContent(c), this._config.content = { ...this._config.content, ...c }, this;
        }
        toHtml() {
          const c = document.createElement("div");
          c.innerHTML = this._maybeSanitize(this._config.template);
          for (const [D, z] of Object.entries(this._config.content)) this._setContent(c, z, D);
          const p = c.children[0], E = this._resolvePossibleFunction(this._config.extraClass);
          return E && p.classList.add(...E.split(" ")), p;
        }
        _typeCheckConfig(c) {
          super._typeCheckConfig(c), this._checkContent(c.content);
        }
        _checkContent(c) {
          for (const [p, E] of Object.entries(c)) super._typeCheckConfig({ selector: p, entry: E }, Na);
        }
        _setContent(c, p, E) {
          const D = ne.findOne(E, c);
          D && ((p = this._resolvePossibleFunction(p)) ? m(p) ? this._putElementInTemplate(v(p), D) : this._config.html ? D.innerHTML = this._maybeSanitize(p) : D.textContent = p : D.remove());
        }
        _maybeSanitize(c) {
          return this._config.sanitize ? (function(p, E, D) {
            if (!p.length) return p;
            if (D && typeof D == "function") return D(p);
            const z = new window.DOMParser().parseFromString(p, "text/html"), F = [].concat(...z.body.querySelectorAll("*"));
            for (const te of F) {
              const re = te.nodeName.toLowerCase();
              if (!Object.keys(E).includes(re)) {
                te.remove();
                continue;
              }
              const fe = [].concat(...te.attributes), de = [].concat(E["*"] || [], E[re] || []);
              for (const se of fe) gd(se, de) || te.removeAttribute(se.nodeName);
            }
            return z.body.innerHTML;
          })(c, this._config.allowList, this._config.sanitizeFn) : c;
        }
        _resolvePossibleFunction(c) {
          return X(c, [void 0, this]);
        }
        _putElementInTemplate(c, p) {
          if (this._config.html) return p.innerHTML = "", void p.append(c);
          p.textContent = c.textContent;
        }
      }
      const Br = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), ja = "fade", cl = "show", Ju = ".tooltip-inner", $r = ".modal", ss = "hide.bs.modal", hn = "hover", Wa = "focus", Pa = "click", kr = { AUTO: "auto", TOP: "top", RIGHT: H() ? "left" : "right", BOTTOM: "bottom", LEFT: H() ? "right" : "left" }, Wl = { allowList: rs, animation: !0, boundary: "clippingParents", container: !1, customClass: "", delay: 0, fallbackPlacements: ["top", "right", "bottom", "left"], html: !1, offset: [0, 6], placement: "top", popperConfig: null, sanitize: !0, sanitizeFn: null, selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', title: "", trigger: "hover focus" }, Zn = { allowList: "object", animation: "boolean", boundary: "(string|element)", container: "(string|element|boolean)", customClass: "(string|function)", delay: "(number|object)", fallbackPlacements: "array", html: "boolean", offset: "(array|string|function)", placement: "(string|function)", popperConfig: "(null|object|function)", sanitize: "boolean", sanitizeFn: "(null|function)", selector: "(string|boolean)", template: "string", title: "(string|element|function)", trigger: "string" };
      class Zt extends he {
        constructor(c, p) {
          if (Au === void 0) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");
          super(c, p), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
        }
        static get Default() {
          return Wl;
        }
        static get DefaultType() {
          return Zn;
        }
        static get NAME() {
          return "tooltip";
        }
        enable() {
          this._isEnabled = !0;
        }
        disable() {
          this._isEnabled = !1;
        }
        toggleEnabled() {
          this._isEnabled = !this._isEnabled;
        }
        toggle() {
          this._isEnabled && (this._isShown() ? this._leave() : this._enter());
        }
        dispose() {
          clearTimeout(this._timeout), O.off(this._element.closest($r), ss, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
        }
        show() {
          if (this._element.style.display === "none") throw new Error("Please use show on visible elements");
          if (!this._isWithContent() || !this._isEnabled) return;
          const c = O.trigger(this._element, this.constructor.eventName("show")), p = (A(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
          if (c.defaultPrevented || !p) return;
          this._disposePopper();
          const E = this._getTipElement();
          this._element.setAttribute("aria-describedby", E.getAttribute("id"));
          const { container: D } = this._config;
          if (this._element.ownerDocument.documentElement.contains(this.tip) || (D.append(E), O.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(E), E.classList.add(cl), "ontouchstart" in document.documentElement) for (const z of [].concat(...document.body.children)) O.on(z, "mouseover", R);
          this._queueCallback(() => {
            O.trigger(this._element, this.constructor.eventName("shown")), this._isHovered === !1 && this._leave(), this._isHovered = !1;
          }, this.tip, this._isAnimated());
        }
        hide() {
          if (this._isShown() && !O.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
            if (this._getTipElement().classList.remove(cl), "ontouchstart" in document.documentElement) for (const c of [].concat(...document.body.children)) O.off(c, "mouseover", R);
            this._activeTrigger[Pa] = !1, this._activeTrigger[Wa] = !1, this._activeTrigger[hn] = !1, this._isHovered = null, this._queueCallback(() => {
              this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), O.trigger(this._element, this.constructor.eventName("hidden")));
            }, this.tip, this._isAnimated());
          }
        }
        update() {
          this._popper && this._popper.update();
        }
        _isWithContent() {
          return !!this._getTitle();
        }
        _getTipElement() {
          return this.tip || (this.tip = this._createTipElement(this._newContent || this._getContentForTemplate())), this.tip;
        }
        _createTipElement(c) {
          const p = this._getTemplateFactory(c).toHtml();
          if (!p) return null;
          p.classList.remove(ja, cl), p.classList.add(`bs-${this.constructor.NAME}-auto`);
          const E = ((D) => {
            do
              D += Math.floor(1e6 * Math.random());
            while (document.getElementById(D));
            return D;
          })(this.constructor.NAME).toString();
          return p.setAttribute("id", E), this._isAnimated() && p.classList.add(ja), p;
        }
        setContent(c) {
          this._newContent = c, this._isShown() && (this._disposePopper(), this.show());
        }
        _getTemplateFactory(c) {
          return this._templateFactory ? this._templateFactory.changeContent(c) : this._templateFactory = new Ku({ ...this._config, content: c, extraClass: this._resolvePossibleFunction(this._config.customClass) }), this._templateFactory;
        }
        _getContentForTemplate() {
          return { [Ju]: this._getTitle() };
        }
        _getTitle() {
          return this._resolvePossibleFunction(this._config.title) || this._element.getAttribute("data-bs-original-title");
        }
        _initializeOnDelegatedTarget(c) {
          return this.constructor.getOrCreateInstance(c.delegateTarget, this._getDelegateConfig());
        }
        _isAnimated() {
          return this._config.animation || this.tip && this.tip.classList.contains(ja);
        }
        _isShown() {
          return this.tip && this.tip.classList.contains(cl);
        }
        _createPopper(c) {
          const p = X(this._config.placement, [this, c, this._element]), E = kr[p.toUpperCase()];
          return Fl(this._element, c, this._getPopperConfig(E));
        }
        _getOffset() {
          const { offset: c } = this._config;
          return typeof c == "string" ? c.split(",").map((p) => Number.parseInt(p, 10)) : typeof c == "function" ? (p) => c(p, this._element) : c;
        }
        _resolvePossibleFunction(c) {
          return X(c, [this._element, this._element]);
        }
        _getPopperConfig(c) {
          const p = { placement: c, modifiers: [{ name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } }, { name: "offset", options: { offset: this._getOffset() } }, { name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } }, { name: "preSetPlacement", enabled: !0, phase: "beforeMain", fn: (E) => {
            this._getTipElement().setAttribute("data-popper-placement", E.state.placement);
          } }] };
          return { ...p, ...X(this._config.popperConfig, [void 0, p]) };
        }
        _setListeners() {
          const c = this._config.trigger.split(" ");
          for (const p of c) if (p === "click") O.on(this._element, this.constructor.eventName("click"), this._config.selector, (E) => {
            const D = this._initializeOnDelegatedTarget(E);
            D._activeTrigger[Pa] = !(D._isShown() && D._activeTrigger[Pa]), D.toggle();
          });
          else if (p !== "manual") {
            const E = p === hn ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"), D = p === hn ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
            O.on(this._element, E, this._config.selector, (z) => {
              const F = this._initializeOnDelegatedTarget(z);
              F._activeTrigger[z.type === "focusin" ? Wa : hn] = !0, F._enter();
            }), O.on(this._element, D, this._config.selector, (z) => {
              const F = this._initializeOnDelegatedTarget(z);
              F._activeTrigger[z.type === "focusout" ? Wa : hn] = F._element.contains(z.relatedTarget), F._leave();
            });
          }
          this._hideModalHandler = () => {
            this._element && this.hide();
          }, O.on(this._element.closest($r), ss, this._hideModalHandler);
        }
        _fixTitle() {
          const c = this._element.getAttribute("title");
          c && (this._element.getAttribute("aria-label") || this._element.textContent.trim() || this._element.setAttribute("aria-label", c), this._element.setAttribute("data-bs-original-title", c), this._element.removeAttribute("title"));
        }
        _enter() {
          this._isShown() || this._isHovered ? this._isHovered = !0 : (this._isHovered = !0, this._setTimeout(() => {
            this._isHovered && this.show();
          }, this._config.delay.show));
        }
        _leave() {
          this._isWithActiveTrigger() || (this._isHovered = !1, this._setTimeout(() => {
            this._isHovered || this.hide();
          }, this._config.delay.hide));
        }
        _setTimeout(c, p) {
          clearTimeout(this._timeout), this._timeout = setTimeout(c, p);
        }
        _isWithActiveTrigger() {
          return Object.values(this._activeTrigger).includes(!0);
        }
        _getConfig(c) {
          const p = ce.getDataAttributes(this._element);
          for (const E of Object.keys(p)) Br.has(E) && delete p[E];
          return c = { ...p, ...typeof c == "object" && c ? c : {} }, c = this._mergeConfigObj(c), c = this._configAfterMerge(c), this._typeCheckConfig(c), c;
        }
        _configAfterMerge(c) {
          return c.container = c.container === !1 ? document.body : v(c.container), typeof c.delay == "number" && (c.delay = { show: c.delay, hide: c.delay }), typeof c.title == "number" && (c.title = c.title.toString()), typeof c.content == "number" && (c.content = c.content.toString()), c;
        }
        _getDelegateConfig() {
          const c = {};
          for (const [p, E] of Object.entries(this._config)) this.constructor.Default[p] !== E && (c[p] = E);
          return c.selector = !1, c.trigger = "manual", c;
        }
        _disposePopper() {
          this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
        }
        static jQueryInterface(c) {
          return this.each(function() {
            const p = Zt.getOrCreateInstance(this, c);
            if (typeof c == "string") {
              if (p[c] === void 0) throw new TypeError(`No method named "${c}"`);
              p[c]();
            }
          });
        }
      }
      Q(Zt);
      const ei = ".popover-header", _a = ".popover-body", Sa = { ...Zt.Default, content: "", offset: [0, 8], placement: "right", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>', trigger: "click" }, za = { ...Zt.DefaultType, content: "(null|string|element|function)" };
      class Pl extends Zt {
        static get Default() {
          return Sa;
        }
        static get DefaultType() {
          return za;
        }
        static get NAME() {
          return "popover";
        }
        _isWithContent() {
          return this._getTitle() || this._getContent();
        }
        _getContentForTemplate() {
          return { [ei]: this._getTitle(), [_a]: this._getContent() };
        }
        _getContent() {
          return this._resolvePossibleFunction(this._config.content);
        }
        static jQueryInterface(c) {
          return this.each(function() {
            const p = Pl.getOrCreateInstance(this, c);
            if (typeof c == "string") {
              if (p[c] === void 0) throw new TypeError(`No method named "${c}"`);
              p[c]();
            }
          });
        }
      }
      Q(Pl);
      const er = ".bs.scrollspy", us = `activate${er}`, cs = `click${er}`, ln = `load${er}.data-api`, nt = "active", Xe = "[href]", La = ".nav-link", Kn = `${La}, .nav-item > ${La}, .list-group-item`, fs = { offset: null, rootMargin: "0px 0px -25%", smoothScroll: !1, target: null, threshold: [0.1, 0.5, 1] }, ti = { offset: "(number|null)", rootMargin: "string", smoothScroll: "boolean", target: "element", threshold: "array" };
      class fl extends he {
        constructor(c, p) {
          super(c, p), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }, this.refresh();
        }
        static get Default() {
          return fs;
        }
        static get DefaultType() {
          return ti;
        }
        static get NAME() {
          return "scrollspy";
        }
        refresh() {
          this._initializeTargetsAndObservables(), this._maybeEnableSmoothScroll(), this._observer ? this._observer.disconnect() : this._observer = this._getNewObserver();
          for (const c of this._observableSections.values()) this._observer.observe(c);
        }
        dispose() {
          this._observer.disconnect(), super.dispose();
        }
        _configAfterMerge(c) {
          return c.target = v(c.target) || document.body, c.rootMargin = c.offset ? `${c.offset}px 0px -30%` : c.rootMargin, typeof c.threshold == "string" && (c.threshold = c.threshold.split(",").map((p) => Number.parseFloat(p))), c;
        }
        _maybeEnableSmoothScroll() {
          this._config.smoothScroll && (O.off(this._config.target, cs), O.on(this._config.target, cs, Xe, (c) => {
            const p = this._observableSections.get(c.target.hash);
            if (p) {
              c.preventDefault();
              const E = this._rootElement || window, D = p.offsetTop - this._element.offsetTop;
              if (E.scrollTo) return void E.scrollTo({ top: D, behavior: "smooth" });
              E.scrollTop = D;
            }
          }));
        }
        _getNewObserver() {
          const c = { root: this._rootElement, threshold: this._config.threshold, rootMargin: this._config.rootMargin };
          return new IntersectionObserver((p) => this._observerCallback(p), c);
        }
        _observerCallback(c) {
          const p = (F) => this._targetLinks.get(`#${F.target.id}`), E = (F) => {
            this._previousScrollData.visibleEntryTop = F.target.offsetTop, this._process(p(F));
          }, D = (this._rootElement || document.documentElement).scrollTop, z = D >= this._previousScrollData.parentScrollTop;
          this._previousScrollData.parentScrollTop = D;
          for (const F of c) {
            if (!F.isIntersecting) {
              this._activeTarget = null, this._clearActiveClass(p(F));
              continue;
            }
            const te = F.target.offsetTop >= this._previousScrollData.visibleEntryTop;
            if (z && te) {
              if (E(F), !D) return;
            } else z || te || E(F);
          }
        }
        _initializeTargetsAndObservables() {
          this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
          const c = ne.find(Xe, this._config.target);
          for (const p of c) {
            if (!p.hash || x(p)) continue;
            const E = ne.findOne(decodeURI(p.hash), this._element);
            C(E) && (this._targetLinks.set(decodeURI(p.hash), p), this._observableSections.set(p.hash, E));
          }
        }
        _process(c) {
          this._activeTarget !== c && (this._clearActiveClass(this._config.target), this._activeTarget = c, c.classList.add(nt), this._activateParents(c), O.trigger(this._element, us, { relatedTarget: c }));
        }
        _activateParents(c) {
          if (c.classList.contains("dropdown-item")) ne.findOne(".dropdown-toggle", c.closest(".dropdown")).classList.add(nt);
          else for (const p of ne.parents(c, ".nav, .list-group")) for (const E of ne.prev(p, Kn)) E.classList.add(nt);
        }
        _clearActiveClass(c) {
          c.classList.remove(nt);
          const p = ne.find(`${Xe}.${nt}`, c);
          for (const E of p) E.classList.remove(nt);
        }
        static jQueryInterface(c) {
          return this.each(function() {
            const p = fl.getOrCreateInstance(this, c);
            if (typeof c == "string") {
              if (p[c] === void 0 || c.startsWith("_") || c === "constructor") throw new TypeError(`No method named "${c}"`);
              p[c]();
            }
          });
        }
      }
      O.on(window, ln, () => {
        for (const b of ne.find('[data-bs-spy="scroll"]')) fl.getOrCreateInstance(b);
      }), Q(fl);
      const ni = ".bs.tab", dl = `hide${ni}`, bi = `hidden${ni}`, ds = `show${ni}`, tr = `shown${ni}`, hs = `click${ni}`, _i = `keydown${ni}`, Ha = `load${ni}`, ai = "ArrowLeft", Ea = "ArrowRight", ps = "ArrowUp", qr = "ArrowDown", ii = "Home", nr = "End", kn = "active", Kt = "fade", hl = "show", ms = ".dropdown-toggle", gs = `:not(${ms})`, Wu = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', vs = `.nav-link${gs}, .list-group-item${gs}, [role="tab"]${gs}, ${Wu}`, qt = `.${kn}[data-bs-toggle="tab"], .${kn}[data-bs-toggle="pill"], .${kn}[data-bs-toggle="list"]`;
      class Va extends he {
        constructor(c) {
          super(c), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), O.on(this._element, _i, (p) => this._keydown(p)));
        }
        static get NAME() {
          return "tab";
        }
        show() {
          const c = this._element;
          if (this._elemIsActive(c)) return;
          const p = this._getActiveElem(), E = p ? O.trigger(p, dl, { relatedTarget: c }) : null;
          O.trigger(c, ds, { relatedTarget: p }).defaultPrevented || E && E.defaultPrevented || (this._deactivate(p, c), this._activate(c, p));
        }
        _activate(c, p) {
          c && (c.classList.add(kn), this._activate(ne.getElementFromSelector(c)), this._queueCallback(() => {
            c.getAttribute("role") === "tab" ? (c.removeAttribute("tabindex"), c.setAttribute("aria-selected", !0), this._toggleDropDown(c, !0), O.trigger(c, tr, { relatedTarget: p })) : c.classList.add(hl);
          }, c, c.classList.contains(Kt)));
        }
        _deactivate(c, p) {
          c && (c.classList.remove(kn), c.blur(), this._deactivate(ne.getElementFromSelector(c)), this._queueCallback(() => {
            c.getAttribute("role") === "tab" ? (c.setAttribute("aria-selected", !1), c.setAttribute("tabindex", "-1"), this._toggleDropDown(c, !1), O.trigger(c, bi, { relatedTarget: p })) : c.classList.remove(hl);
          }, c, c.classList.contains(Kt)));
        }
        _keydown(c) {
          if (![ai, Ea, ps, qr, ii, nr].includes(c.key)) return;
          c.stopPropagation(), c.preventDefault();
          const p = this._getChildren().filter((D) => !x(D));
          let E;
          if ([ii, nr].includes(c.key)) E = p[c.key === ii ? 0 : p.length - 1];
          else {
            const D = [Ea, qr].includes(c.key);
            E = U(p, c.target, D, !0);
          }
          E && (E.focus({ preventScroll: !0 }), Va.getOrCreateInstance(E).show());
        }
        _getChildren() {
          return ne.find(vs, this._parent);
        }
        _getActiveElem() {
          return this._getChildren().find((c) => this._elemIsActive(c)) || null;
        }
        _setInitialAttributes(c, p) {
          this._setAttributeIfNotExists(c, "role", "tablist");
          for (const E of p) this._setInitialAttributesOnChild(E);
        }
        _setInitialAttributesOnChild(c) {
          c = this._getInnerElement(c);
          const p = this._elemIsActive(c), E = this._getOuterElement(c);
          c.setAttribute("aria-selected", p), E !== c && this._setAttributeIfNotExists(E, "role", "presentation"), p || c.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(c, "role", "tab"), this._setInitialAttributesOnTargetPanel(c);
        }
        _setInitialAttributesOnTargetPanel(c) {
          const p = ne.getElementFromSelector(c);
          p && (this._setAttributeIfNotExists(p, "role", "tabpanel"), c.id && this._setAttributeIfNotExists(p, "aria-labelledby", `${c.id}`));
        }
        _toggleDropDown(c, p) {
          const E = this._getOuterElement(c);
          if (!E.classList.contains("dropdown")) return;
          const D = (z, F) => {
            const te = ne.findOne(z, E);
            te && te.classList.toggle(F, p);
          };
          D(ms, kn), D(".dropdown-menu", hl), E.setAttribute("aria-expanded", p);
        }
        _setAttributeIfNotExists(c, p, E) {
          c.hasAttribute(p) || c.setAttribute(p, E);
        }
        _elemIsActive(c) {
          return c.classList.contains(kn);
        }
        _getInnerElement(c) {
          return c.matches(vs) ? c : ne.findOne(vs, c);
        }
        _getOuterElement(c) {
          return c.closest(".nav-item, .list-group-item") || c;
        }
        static jQueryInterface(c) {
          return this.each(function() {
            const p = Va.getOrCreateInstance(this);
            if (typeof c == "string") {
              if (p[c] === void 0 || c.startsWith("_") || c === "constructor") throw new TypeError(`No method named "${c}"`);
              p[c]();
            }
          });
        }
      }
      O.on(document, hs, Wu, function(b) {
        ["A", "AREA"].includes(this.tagName) && b.preventDefault(), x(this) || Va.getOrCreateInstance(this).show();
      }), O.on(window, Ha, () => {
        for (const b of ne.find(qt)) Va.getOrCreateInstance(b);
      }), Q(Va);
      const Jn = ".bs.toast", ar = `mouseover${Jn}`, ys = `mouseout${Jn}`, pl = `focusin${Jn}`, ml = `focusout${Jn}`, vd = `hide${Jn}`, Pu = `hidden${Jn}`, yd = `show${Jn}`, ec = `shown${Jn}`, li = "hide", gl = "show", Si = "showing", tc = { animation: "boolean", autohide: "boolean", delay: "number" }, vl = { animation: !0, autohide: !0, delay: 5e3 };
      class Ei extends he {
        constructor(c, p) {
          super(c, p), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
        }
        static get Default() {
          return vl;
        }
        static get DefaultType() {
          return tc;
        }
        static get NAME() {
          return "toast";
        }
        show() {
          O.trigger(this._element, yd).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(li), L(this._element), this._element.classList.add(gl, Si), this._queueCallback(() => {
            this._element.classList.remove(Si), O.trigger(this._element, ec), this._maybeScheduleHide();
          }, this._element, this._config.animation));
        }
        hide() {
          this.isShown() && (O.trigger(this._element, vd).defaultPrevented || (this._element.classList.add(Si), this._queueCallback(() => {
            this._element.classList.add(li), this._element.classList.remove(Si, gl), O.trigger(this._element, Pu);
          }, this._element, this._config.animation)));
        }
        dispose() {
          this._clearTimeout(), this.isShown() && this._element.classList.remove(gl), super.dispose();
        }
        isShown() {
          return this._element.classList.contains(gl);
        }
        _maybeScheduleHide() {
          this._config.autohide && (this._hasMouseInteraction || this._hasKeyboardInteraction || (this._timeout = setTimeout(() => {
            this.hide();
          }, this._config.delay)));
        }
        _onInteraction(c, p) {
          switch (c.type) {
            case "mouseover":
            case "mouseout":
              this._hasMouseInteraction = p;
              break;
            case "focusin":
            case "focusout":
              this._hasKeyboardInteraction = p;
          }
          if (p) return void this._clearTimeout();
          const E = c.relatedTarget;
          this._element === E || this._element.contains(E) || this._maybeScheduleHide();
        }
        _setListeners() {
          O.on(this._element, ar, (c) => this._onInteraction(c, !0)), O.on(this._element, ys, (c) => this._onInteraction(c, !1)), O.on(this._element, pl, (c) => this._onInteraction(c, !0)), O.on(this._element, ml, (c) => this._onInteraction(c, !1));
        }
        _clearTimeout() {
          clearTimeout(this._timeout), this._timeout = null;
        }
        static jQueryInterface(c) {
          return this.each(function() {
            const p = Ei.getOrCreateInstance(this, c);
            if (typeof c == "string") {
              if (p[c] === void 0) throw new TypeError(`No method named "${c}"`);
              p[c](this);
            }
          });
        }
      }
      return _t(Ei), Q(Ei), { Alert: xt, Button: Bt, Carousel: Ii, Collapse: Qi, Dropdown: Qn, Modal: Un, Offcanvas: Sn, Popover: Pl, ScrollSpy: fl, Tab: Va, Toast: Ei, Tooltip: Zt };
    });
  })(Pc)), Pc.exports;
}
nS();
var Hh = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var Wv;
function aS() {
  return Wv || (Wv = 1, (function(a) {
    (function() {
      var i = {}.hasOwnProperty;
      function r() {
        for (var d = "", h = 0; h < arguments.length; h++) {
          var y = arguments[h];
          y && (d = s(d, o(y)));
        }
        return d;
      }
      function o(d) {
        if (typeof d == "string" || typeof d == "number")
          return d;
        if (typeof d != "object")
          return "";
        if (Array.isArray(d))
          return r.apply(null, d);
        if (d.toString !== Object.prototype.toString && !d.toString.toString().includes("[native code]"))
          return d.toString();
        var h = "";
        for (var y in d)
          i.call(d, y) && d[y] && (h = s(h, y));
        return h;
      }
      function s(d, h) {
        return h ? d ? d + " " + h : d + h : d;
      }
      a.exports ? (r.default = r, a.exports = r) : window.classNames = r;
    })();
  })(Hh)), Hh.exports;
}
var iS = aS();
const Ae = /* @__PURE__ */ Af(iS);
function ve() {
  return ve = Object.assign ? Object.assign.bind() : function(a) {
    for (var i = 1; i < arguments.length; i++) {
      var r = arguments[i];
      for (var o in r) ({}).hasOwnProperty.call(r, o) && (a[o] = r[o]);
    }
    return a;
  }, ve.apply(null, arguments);
}
function Mf(a, i) {
  if (a == null) return {};
  var r = {};
  for (var o in a) if ({}.hasOwnProperty.call(a, o)) {
    if (i.indexOf(o) !== -1) continue;
    r[o] = a[o];
  }
  return r;
}
function Pv(a) {
  return "default" + a.charAt(0).toUpperCase() + a.substr(1);
}
function lS(a) {
  var i = rS(a, "string");
  return typeof i == "symbol" ? i : String(i);
}
function rS(a, i) {
  if (typeof a != "object" || a === null) return a;
  var r = a[Symbol.toPrimitive];
  if (r !== void 0) {
    var o = r.call(a, i);
    if (typeof o != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(a);
}
function oS(a, i, r) {
  var o = S.useRef(a !== void 0), s = S.useState(i), d = s[0], h = s[1], y = a !== void 0, m = o.current;
  return o.current = y, !y && m && d !== i && h(i), [y ? a : d, S.useCallback(function(v) {
    for (var C = arguments.length, x = new Array(C > 1 ? C - 1 : 0), A = 1; A < C; A++)
      x[A - 1] = arguments[A];
    r && r.apply(void 0, [v].concat(x)), h(v);
  }, [r])];
}
function sS(a, i) {
  return Object.keys(i).reduce(function(r, o) {
    var s, d = r, h = d[Pv(o)], y = d[o], m = Mf(d, [Pv(o), o].map(lS)), v = i[o], C = oS(y, h, a[v]), x = C[0], A = C[1];
    return ve({}, m, (s = {}, s[o] = x, s[v] = A, s));
  }, a);
}
function cf(a, i) {
  return cf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, cf(a, i);
}
function hb(a, i) {
  a.prototype = Object.create(i.prototype), a.prototype.constructor = a, cf(a, i);
}
const uS = ["xxl", "xl", "lg", "md", "sm", "xs"], cS = "xs", iu = /* @__PURE__ */ S.createContext({
  prefixes: {},
  breakpoints: uS,
  minBreakpoint: cS
}), {
  Consumer: ww,
  Provider: Mw
} = iu;
function $e(a, i) {
  const {
    prefixes: r
  } = S.useContext(iu);
  return a || r[i] || i;
}
function fS() {
  const {
    breakpoints: a
  } = S.useContext(iu);
  return a;
}
function dS() {
  const {
    minBreakpoint: a
  } = S.useContext(iu);
  return a;
}
function hS() {
  const {
    dir: a
  } = S.useContext(iu);
  return a === "rtl";
}
function Rf(a) {
  return a && a.ownerDocument || document;
}
function pS(a) {
  var i = Rf(a);
  return i && i.defaultView || window;
}
function mS(a, i) {
  return pS(a).getComputedStyle(a, i);
}
var gS = /([A-Z])/g;
function vS(a) {
  return a.replace(gS, "-$1").toLowerCase();
}
var yS = /^ms-/;
function kc(a) {
  return vS(a).replace(yS, "-ms-");
}
var bS = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function _S(a) {
  return !!(a && bS.test(a));
}
function Vi(a, i) {
  var r = "", o = "";
  if (typeof i == "string")
    return a.style.getPropertyValue(kc(i)) || mS(a).getPropertyValue(kc(i));
  Object.keys(i).forEach(function(s) {
    var d = i[s];
    !d && d !== 0 ? a.style.removeProperty(kc(s)) : _S(s) ? o += s + "(" + d + ") " : r += kc(s) + ": " + d + ";";
  }), o && (r += "transform: " + o + ";"), a.style.cssText += ";" + r;
}
var Vh = { exports: {} }, Uh, ey;
function SS() {
  if (ey) return Uh;
  ey = 1;
  var a = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Uh = a, Uh;
}
var Bh, ty;
function ES() {
  if (ty) return Bh;
  ty = 1;
  var a = /* @__PURE__ */ SS();
  function i() {
  }
  function r() {
  }
  return r.resetWarningCache = i, Bh = function() {
    function o(h, y, m, v, C, x) {
      if (x !== a) {
        var A = new Error(
          "Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types"
        );
        throw A.name = "Invariant Violation", A;
      }
    }
    o.isRequired = o;
    function s() {
      return o;
    }
    var d = {
      array: o,
      bigint: o,
      bool: o,
      func: o,
      number: o,
      object: o,
      string: o,
      symbol: o,
      any: o,
      arrayOf: s,
      element: o,
      elementType: o,
      instanceOf: s,
      node: o,
      objectOf: s,
      oneOf: s,
      oneOfType: s,
      shape: s,
      exact: s,
      checkPropTypes: r,
      resetWarningCache: i
    };
    return d.PropTypes = d, d;
  }, Bh;
}
var ny;
function CS() {
  return ny || (ny = 1, Vh.exports = /* @__PURE__ */ ES()()), Vh.exports;
}
var OS = /* @__PURE__ */ CS();
const Ui = /* @__PURE__ */ Af(OS);
var pb = db();
const ho = /* @__PURE__ */ Af(pb), ay = {
  disabled: !1
}, ff = It.createContext(null);
var xS = function(i) {
  return i.scrollTop;
}, Fs = "unmounted", jl = "exited", ui = "entering", zl = "entered", Ws = "exiting", Ga = /* @__PURE__ */ (function(a) {
  hb(i, a);
  function i(o, s) {
    var d;
    d = a.call(this, o, s) || this;
    var h = s, y = h && !h.isMounting ? o.enter : o.appear, m;
    return d.appearStatus = null, o.in ? y ? (m = jl, d.appearStatus = ui) : m = zl : o.unmountOnExit || o.mountOnEnter ? m = Fs : m = jl, d.state = {
      status: m
    }, d.nextCallback = null, d;
  }
  i.getDerivedStateFromProps = function(s, d) {
    var h = s.in;
    return h && d.status === Fs ? {
      status: jl
    } : null;
  };
  var r = i.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(s) {
    var d = null;
    if (s !== this.props) {
      var h = this.state.status;
      this.props.in ? h !== ui && h !== zl && (d = ui) : (h === ui || h === zl) && (d = Ws);
    }
    this.updateStatus(!1, d);
  }, r.componentWillUnmount = function() {
    this.cancelNextCallback();
  }, r.getTimeouts = function() {
    var s = this.props.timeout, d, h, y;
    return d = h = y = s, s != null && typeof s != "number" && (d = s.exit, h = s.enter, y = s.appear !== void 0 ? s.appear : h), {
      exit: d,
      enter: h,
      appear: y
    };
  }, r.updateStatus = function(s, d) {
    if (s === void 0 && (s = !1), d !== null)
      if (this.cancelNextCallback(), d === ui) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var h = this.props.nodeRef ? this.props.nodeRef.current : ho.findDOMNode(this);
          h && xS(h);
        }
        this.performEnter(s);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === jl && this.setState({
      status: Fs
    });
  }, r.performEnter = function(s) {
    var d = this, h = this.props.enter, y = this.context ? this.context.isMounting : s, m = this.props.nodeRef ? [y] : [ho.findDOMNode(this), y], v = m[0], C = m[1], x = this.getTimeouts(), A = y ? x.appear : x.enter;
    if (!s && !h || ay.disabled) {
      this.safeSetState({
        status: zl
      }, function() {
        d.props.onEntered(v);
      });
      return;
    }
    this.props.onEnter(v, C), this.safeSetState({
      status: ui
    }, function() {
      d.props.onEntering(v, C), d.onTransitionEnd(A, function() {
        d.safeSetState({
          status: zl
        }, function() {
          d.props.onEntered(v, C);
        });
      });
    });
  }, r.performExit = function() {
    var s = this, d = this.props.exit, h = this.getTimeouts(), y = this.props.nodeRef ? void 0 : ho.findDOMNode(this);
    if (!d || ay.disabled) {
      this.safeSetState({
        status: jl
      }, function() {
        s.props.onExited(y);
      });
      return;
    }
    this.props.onExit(y), this.safeSetState({
      status: Ws
    }, function() {
      s.props.onExiting(y), s.onTransitionEnd(h.exit, function() {
        s.safeSetState({
          status: jl
        }, function() {
          s.props.onExited(y);
        });
      });
    });
  }, r.cancelNextCallback = function() {
    this.nextCallback !== null && (this.nextCallback.cancel(), this.nextCallback = null);
  }, r.safeSetState = function(s, d) {
    d = this.setNextCallback(d), this.setState(s, d);
  }, r.setNextCallback = function(s) {
    var d = this, h = !0;
    return this.nextCallback = function(y) {
      h && (h = !1, d.nextCallback = null, s(y));
    }, this.nextCallback.cancel = function() {
      h = !1;
    }, this.nextCallback;
  }, r.onTransitionEnd = function(s, d) {
    this.setNextCallback(d);
    var h = this.props.nodeRef ? this.props.nodeRef.current : ho.findDOMNode(this), y = s == null && !this.props.addEndListener;
    if (!h || y) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var m = this.props.nodeRef ? [this.nextCallback] : [h, this.nextCallback], v = m[0], C = m[1];
      this.props.addEndListener(v, C);
    }
    s != null && setTimeout(this.nextCallback, s);
  }, r.render = function() {
    var s = this.state.status;
    if (s === Fs)
      return null;
    var d = this.props, h = d.children;
    d.in, d.mountOnEnter, d.unmountOnExit, d.appear, d.enter, d.exit, d.timeout, d.addEndListener, d.onEnter, d.onEntering, d.onEntered, d.onExit, d.onExiting, d.onExited, d.nodeRef;
    var y = Mf(d, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ It.createElement(ff.Provider, {
        value: null
      }, typeof h == "function" ? h(s, y) : It.cloneElement(It.Children.only(h), y))
    );
  }, i;
})(It.Component);
Ga.contextType = ff;
Ga.propTypes = {};
function oo() {
}
Ga.defaultProps = {
  in: !1,
  mountOnEnter: !1,
  unmountOnExit: !1,
  appear: !1,
  enter: !0,
  exit: !0,
  onEnter: oo,
  onEntering: oo,
  onEntered: oo,
  onExit: oo,
  onExiting: oo,
  onExited: oo
};
Ga.UNMOUNTED = Fs;
Ga.EXITED = jl;
Ga.ENTERING = ui;
Ga.ENTERED = zl;
Ga.EXITING = Ws;
function TS(a) {
  return a.code === "Escape" || a.keyCode === 27;
}
function AS() {
  const a = S.version.split(".");
  return {
    major: +a[0],
    minor: +a[1],
    patch: +a[2]
  };
}
function lu(a) {
  if (!a || typeof a == "function")
    return null;
  const {
    major: i
  } = AS();
  return i >= 19 ? a.props.ref : a.ref;
}
const Eo = !!(typeof window < "u" && window.document && window.document.createElement);
var hp = !1, pp = !1;
try {
  var $h = {
    get passive() {
      return hp = !0;
    },
    get once() {
      return pp = hp = !0;
    }
  };
  Eo && (window.addEventListener("test", $h, $h), window.removeEventListener("test", $h, !0));
} catch {
}
function mb(a, i, r, o) {
  if (o && typeof o != "boolean" && !pp) {
    var s = o.once, d = o.capture, h = r;
    !pp && s && (h = r.__once || function y(m) {
      this.removeEventListener(i, y, d), r.call(this, m);
    }, r.__once = h), a.addEventListener(i, h, hp ? o : d);
  }
  a.addEventListener(i, r, o);
}
function mp(a, i, r, o) {
  var s = o && typeof o != "boolean" ? o.capture : o;
  a.removeEventListener(i, r, s), r.__once && a.removeEventListener(i, r.__once, s);
}
function df(a, i, r, o) {
  return mb(a, i, r, o), function() {
    mp(a, i, r, o);
  };
}
function wS(a, i, r, o) {
  if (o === void 0 && (o = !0), a) {
    var s = document.createEvent("HTMLEvents");
    s.initEvent(i, r, o), a.dispatchEvent(s);
  }
}
function MS(a) {
  var i = Vi(a, "transitionDuration") || "", r = i.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(i) * r;
}
function RS(a, i, r) {
  r === void 0 && (r = 5);
  var o = !1, s = setTimeout(function() {
    o || wS(a, "transitionend", !0);
  }, i + r), d = df(a, "transitionend", function() {
    o = !0;
  }, {
    once: !0
  });
  return function() {
    clearTimeout(s), d();
  };
}
function gb(a, i, r, o) {
  r == null && (r = MS(a) || 0);
  var s = RS(a, r, o), d = df(a, "transitionend", i);
  return function() {
    s(), d();
  };
}
function iy(a, i) {
  const r = Vi(a, i) || "", o = r.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(r) * o;
}
function vb(a, i) {
  const r = iy(a, "transitionDuration"), o = iy(a, "transitionDelay"), s = gb(a, (d) => {
    d.target === a && (s(), i(d));
  }, r + o);
}
function Gs(...a) {
  return a.filter((i) => i != null).reduce((i, r) => {
    if (typeof r != "function")
      throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
    return i === null ? r : function(...s) {
      i.apply(this, s), r.apply(this, s);
    };
  }, null);
}
function yb(a) {
  a.offsetHeight;
}
const ly = (a) => !a || typeof a == "function" ? a : (i) => {
  a.current = i;
};
function DS(a, i) {
  const r = ly(a), o = ly(i);
  return (s) => {
    r && r(s), o && o(s);
  };
}
function bb(a, i) {
  return S.useMemo(() => DS(a, i), [a, i]);
}
function NS(a) {
  return a && "setState" in a ? ho.findDOMNode(a) : a ?? null;
}
const jp = /* @__PURE__ */ It.forwardRef(({
  onEnter: a,
  onEntering: i,
  onEntered: r,
  onExit: o,
  onExiting: s,
  onExited: d,
  addEndListener: h,
  children: y,
  childRef: m,
  ...v
}, C) => {
  const x = S.useRef(null), A = bb(x, m), R = (Z) => {
    A(NS(Z));
  }, L = (Z) => (B) => {
    Z && x.current && Z(x.current, B);
  }, N = S.useCallback(L(a), [a]), j = S.useCallback(L(i), [i]), H = S.useCallback(L(r), [r]), Q = S.useCallback(L(o), [o]), X = S.useCallback(L(s), [s]), W = S.useCallback(L(d), [d]), U = S.useCallback(L(h), [h]);
  return /* @__PURE__ */ T.jsx(Ga, {
    ref: C,
    ...v,
    onEnter: N,
    onEntered: H,
    onEntering: j,
    onExit: Q,
    onExited: W,
    onExiting: X,
    addEndListener: U,
    nodeRef: x,
    children: typeof y == "function" ? (Z, B) => (
      // TODO: Types for RTG missing innerProps, so need to cast.
      y(Z, {
        ...B,
        ref: R
      })
    ) : /* @__PURE__ */ It.cloneElement(y, {
      ref: R
    })
  });
});
jp.displayName = "TransitionWrapper";
const jS = {
  height: ["marginTop", "marginBottom"],
  width: ["marginLeft", "marginRight"]
};
function zS(a, i) {
  const r = `offset${a[0].toUpperCase()}${a.slice(1)}`, o = i[r], s = jS[a];
  return o + // @ts-expect-error TODO
  parseInt(Vi(i, s[0]), 10) + // @ts-expect-error TODO
  parseInt(Vi(i, s[1]), 10);
}
const LS = {
  [jl]: "collapse",
  [Ws]: "collapsing",
  [ui]: "collapsing",
  [zl]: "collapse show"
}, _b = /* @__PURE__ */ It.forwardRef(({
  onEnter: a,
  onEntering: i,
  onEntered: r,
  onExit: o,
  onExiting: s,
  className: d,
  children: h,
  dimension: y = "height",
  in: m = !1,
  timeout: v = 300,
  mountOnEnter: C = !1,
  unmountOnExit: x = !1,
  appear: A = !1,
  getDimensionValue: R = zS,
  ...L
}, N) => {
  const j = typeof y == "function" ? y() : y, H = S.useMemo(() => Gs((Z) => {
    Z.style[j] = "0";
  }, a), [j, a]), Q = S.useMemo(() => Gs((Z) => {
    const B = `scroll${j[0].toUpperCase()}${j.slice(1)}`;
    Z.style[j] = `${Z[B]}px`;
  }, i), [j, i]), X = S.useMemo(() => Gs((Z) => {
    Z.style[j] = null;
  }, r), [j, r]), W = S.useMemo(() => Gs((Z) => {
    Z.style[j] = `${R(j, Z)}px`, yb(Z);
  }, o), [o, R, j]), U = S.useMemo(() => Gs((Z) => {
    Z.style[j] = null;
  }, s), [j, s]);
  return /* @__PURE__ */ T.jsx(jp, {
    ref: N,
    addEndListener: vb,
    ...L,
    "aria-expanded": L.role ? m : null,
    onEnter: H,
    onEntering: Q,
    onEntered: X,
    onExit: W,
    onExiting: U,
    childRef: lu(h),
    in: m,
    timeout: v,
    mountOnEnter: C,
    unmountOnExit: x,
    appear: A,
    children: (Z, B) => /* @__PURE__ */ It.cloneElement(h, {
      ...B,
      className: Ae(d, h.props.className, LS[Z], j === "width" && "collapse-horizontal")
    })
  });
});
_b.displayName = "Collapse";
function Sb(a, i) {
  return Array.isArray(a) ? a.includes(i) : a === i;
}
const ru = /* @__PURE__ */ S.createContext({});
ru.displayName = "AccordionContext";
const zp = /* @__PURE__ */ S.forwardRef(({
  as: a = "div",
  bsPrefix: i,
  className: r,
  children: o,
  eventKey: s,
  ...d
}, h) => {
  const {
    activeEventKey: y
  } = S.useContext(ru);
  return i = $e(i, "accordion-collapse"), /* @__PURE__ */ T.jsx(_b, {
    ref: h,
    in: Sb(y, s),
    ...d,
    className: Ae(r, i),
    children: /* @__PURE__ */ T.jsx(a, {
      children: S.Children.only(o)
    })
  });
});
zp.displayName = "AccordionCollapse";
const Df = /* @__PURE__ */ S.createContext({
  eventKey: ""
});
Df.displayName = "AccordionItemContext";
const Eb = /* @__PURE__ */ S.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: a = "div",
  bsPrefix: i,
  className: r,
  onEnter: o,
  onEntering: s,
  onEntered: d,
  onExit: h,
  onExiting: y,
  onExited: m,
  ...v
}, C) => {
  i = $e(i, "accordion-body");
  const {
    eventKey: x
  } = S.useContext(Df);
  return /* @__PURE__ */ T.jsx(zp, {
    eventKey: x,
    onEnter: o,
    onEntering: s,
    onEntered: d,
    onExit: h,
    onExiting: y,
    onExited: m,
    children: /* @__PURE__ */ T.jsx(a, {
      ref: C,
      ...v,
      className: Ae(r, i)
    })
  });
});
Eb.displayName = "AccordionBody";
function HS(a, i) {
  const {
    activeEventKey: r,
    onSelect: o,
    alwaysOpen: s
  } = S.useContext(ru);
  return (d) => {
    let h = a === r ? null : a;
    s && (Array.isArray(r) ? r.includes(a) ? h = r.filter((y) => y !== a) : h = [...r, a] : h = [a]), o?.(h, d), i?.(d);
  };
}
const Lp = /* @__PURE__ */ S.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: a = "button",
  bsPrefix: i,
  className: r,
  onClick: o,
  ...s
}, d) => {
  i = $e(i, "accordion-button");
  const {
    eventKey: h
  } = S.useContext(Df), y = HS(h, o), {
    activeEventKey: m
  } = S.useContext(ru);
  return a === "button" && (s.type = "button"), /* @__PURE__ */ T.jsx(a, {
    ref: d,
    onClick: y,
    ...s,
    "aria-expanded": Array.isArray(m) ? m.includes(h) : h === m,
    className: Ae(r, i, !Sb(m, h) && "collapsed")
  });
});
Lp.displayName = "AccordionButton";
const Cb = /* @__PURE__ */ S.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: a = "h2",
  "aria-controls": i,
  bsPrefix: r,
  className: o,
  children: s,
  onClick: d,
  ...h
}, y) => (r = $e(r, "accordion-header"), /* @__PURE__ */ T.jsx(a, {
  ref: y,
  ...h,
  className: Ae(o, r),
  children: /* @__PURE__ */ T.jsx(Lp, {
    onClick: d,
    "aria-controls": i,
    children: s
  })
})));
Cb.displayName = "AccordionHeader";
const Ob = /* @__PURE__ */ S.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: a = "div",
  bsPrefix: i,
  className: r,
  eventKey: o,
  ...s
}, d) => {
  i = $e(i, "accordion-item");
  const h = S.useMemo(() => ({
    eventKey: o
  }), [o]);
  return /* @__PURE__ */ T.jsx(Df.Provider, {
    value: h,
    children: /* @__PURE__ */ T.jsx(a, {
      ref: d,
      ...s,
      className: Ae(r, i)
    })
  });
});
Ob.displayName = "AccordionItem";
const xb = /* @__PURE__ */ S.forwardRef((a, i) => {
  const {
    // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
    as: r = "div",
    activeKey: o,
    bsPrefix: s,
    className: d,
    onSelect: h,
    flush: y,
    alwaysOpen: m,
    ...v
  } = sS(a, {
    activeKey: "onSelect"
  }), C = $e(s, "accordion"), x = S.useMemo(() => ({
    activeEventKey: o,
    onSelect: h,
    alwaysOpen: m
  }), [o, h, m]);
  return /* @__PURE__ */ T.jsx(ru.Provider, {
    value: x,
    children: /* @__PURE__ */ T.jsx(r, {
      ref: i,
      ...v,
      className: Ae(d, C, y && `${C}-flush`)
    })
  });
});
xb.displayName = "Accordion";
const qc = Object.assign(xb, {
  Button: Lp,
  Collapse: zp,
  Item: Ob,
  Header: Cb,
  Body: Eb
});
function VS(a) {
  const i = S.useRef(a);
  return S.useEffect(() => {
    i.current = a;
  }, [a]), i;
}
function hf(a) {
  const i = VS(a);
  return S.useCallback(function(...r) {
    return i.current && i.current(...r);
  }, [i]);
}
const Hp = ((a) => (
  // eslint-disable-next-line react/display-name
  /* @__PURE__ */ S.forwardRef((i, r) => /* @__PURE__ */ T.jsx("div", {
    ...i,
    ref: r,
    className: Ae(i.className, a)
  }))
));
function US(a) {
  const i = S.useRef(a);
  return S.useEffect(() => {
    i.current = a;
  }, [a]), i;
}
function dr(a) {
  const i = US(a);
  return S.useCallback(function(...r) {
    return i.current && i.current(...r);
  }, [i]);
}
function BS() {
  const a = S.useRef(!0), i = S.useRef(() => a.current);
  return S.useEffect(() => (a.current = !0, () => {
    a.current = !1;
  }), []), i.current;
}
function $S(a) {
  const i = S.useRef(null);
  return S.useEffect(() => {
    i.current = a;
  }), i.current;
}
const kS = typeof global < "u" && // @ts-ignore
global.navigator && // @ts-ignore
global.navigator.product === "ReactNative", qS = typeof document < "u", ry = qS || kS ? S.useLayoutEffect : S.useEffect, YS = ["as", "disabled"];
function GS(a, i) {
  if (a == null) return {};
  var r = {};
  for (var o in a) if ({}.hasOwnProperty.call(a, o)) {
    if (i.indexOf(o) >= 0) continue;
    r[o] = a[o];
  }
  return r;
}
function XS(a) {
  return !a || a.trim() === "#";
}
function Tb({
  tagName: a,
  disabled: i,
  href: r,
  target: o,
  rel: s,
  role: d,
  onClick: h,
  tabIndex: y = 0,
  type: m
}) {
  a || (r != null || o != null || s != null ? a = "a" : a = "button");
  const v = {
    tagName: a
  };
  if (a === "button")
    return [{
      type: m || "button",
      disabled: i
    }, v];
  const C = (A) => {
    if ((i || a === "a" && XS(r)) && A.preventDefault(), i) {
      A.stopPropagation();
      return;
    }
    h?.(A);
  }, x = (A) => {
    A.key === " " && (A.preventDefault(), C(A));
  };
  return a === "a" && (r || (r = "#"), i && (r = void 0)), [{
    role: d ?? "button",
    // explicitly undefined so that it overrides the props disabled in a spread
    // e.g. <Tag {...props} {...hookProps} />
    disabled: void 0,
    tabIndex: i ? void 0 : y,
    href: r,
    target: a === "a" ? o : void 0,
    "aria-disabled": i || void 0,
    rel: a === "a" ? s : void 0,
    onClick: C,
    onKeyDown: x
  }, v];
}
const IS = /* @__PURE__ */ S.forwardRef((a, i) => {
  let {
    as: r,
    disabled: o
  } = a, s = GS(a, YS);
  const [d, {
    tagName: h
  }] = Tb(Object.assign({
    tagName: r,
    disabled: o
  }, s));
  return /* @__PURE__ */ T.jsx(h, Object.assign({}, s, d, {
    ref: i
  }));
});
IS.displayName = "Button";
const FS = {
  [ui]: "show",
  [zl]: "show"
}, Nf = /* @__PURE__ */ S.forwardRef(({
  className: a,
  children: i,
  transitionClasses: r = {},
  onEnter: o,
  ...s
}, d) => {
  const h = {
    in: !1,
    timeout: 300,
    mountOnEnter: !1,
    unmountOnExit: !1,
    appear: !1,
    ...s
  }, y = S.useCallback((m, v) => {
    yb(m), o?.(m, v);
  }, [o]);
  return /* @__PURE__ */ T.jsx(jp, {
    ref: d,
    addEndListener: vb,
    ...h,
    onEnter: y,
    childRef: lu(i),
    children: (m, v) => /* @__PURE__ */ S.cloneElement(i, {
      ...v,
      className: Ae("fade", a, i.props.className, FS[m], r[m])
    })
  });
});
Nf.displayName = "Fade";
const QS = {
  /** An accessible label indicating the relevant information about the Close Button. */
  "aria-label": Ui.string,
  /** A callback fired after the Close Button is clicked. */
  onClick: Ui.func,
  /**
   * Render different color variant for the button.
   *
   * Omitting this will render the default dark color.
   */
  variant: Ui.oneOf(["white"])
}, jf = /* @__PURE__ */ S.forwardRef(({
  className: a,
  variant: i,
  "aria-label": r = "Close",
  ...o
}, s) => /* @__PURE__ */ T.jsx("button", {
  ref: s,
  type: "button",
  className: Ae("btn-close", i && `btn-close-${i}`, a),
  "aria-label": r,
  ...o
}));
jf.displayName = "CloseButton";
jf.propTypes = QS;
const Qs = /* @__PURE__ */ S.forwardRef(({
  as: a,
  bsPrefix: i,
  variant: r = "primary",
  size: o,
  active: s = !1,
  disabled: d = !1,
  className: h,
  ...y
}, m) => {
  const v = $e(i, "btn"), [C, {
    tagName: x
  }] = Tb({
    tagName: a,
    disabled: d,
    ...y
  }), A = x;
  return /* @__PURE__ */ T.jsx(A, {
    ...C,
    ...y,
    ref: m,
    disabled: d,
    className: Ae(h, v, s && "active", r && `${v}-${r}`, o && `${v}-${o}`, y.href && d && "disabled")
  });
});
Qs.displayName = "Button";
const Vp = /* @__PURE__ */ S.forwardRef(({
  className: a,
  bsPrefix: i,
  as: r = "div",
  ...o
}, s) => (i = $e(i, "card-body"), /* @__PURE__ */ T.jsx(r, {
  ref: s,
  className: Ae(a, i),
  ...o
})));
Vp.displayName = "CardBody";
const Ab = /* @__PURE__ */ S.forwardRef(({
  className: a,
  bsPrefix: i,
  as: r = "div",
  ...o
}, s) => (i = $e(i, "card-footer"), /* @__PURE__ */ T.jsx(r, {
  ref: s,
  className: Ae(a, i),
  ...o
})));
Ab.displayName = "CardFooter";
const wb = /* @__PURE__ */ S.createContext(null);
wb.displayName = "CardHeaderContext";
const Mb = /* @__PURE__ */ S.forwardRef(({
  bsPrefix: a,
  className: i,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: r = "div",
  ...o
}, s) => {
  const d = $e(a, "card-header"), h = S.useMemo(() => ({
    cardHeaderBsPrefix: d
  }), [d]);
  return /* @__PURE__ */ T.jsx(wb.Provider, {
    value: h,
    children: /* @__PURE__ */ T.jsx(r, {
      ref: s,
      ...o,
      className: Ae(i, d)
    })
  });
});
Mb.displayName = "CardHeader";
const Rb = /* @__PURE__ */ S.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    bsPrefix: a,
    className: i,
    variant: r,
    as: o = "img",
    ...s
  }, d) => {
    const h = $e(a, "card-img");
    return /* @__PURE__ */ T.jsx(o, {
      ref: d,
      className: Ae(r ? `${h}-${r}` : h, i),
      ...s
    });
  }
);
Rb.displayName = "CardImg";
const Db = /* @__PURE__ */ S.forwardRef(({
  className: a,
  bsPrefix: i,
  as: r = "div",
  ...o
}, s) => (i = $e(i, "card-img-overlay"), /* @__PURE__ */ T.jsx(r, {
  ref: s,
  className: Ae(a, i),
  ...o
})));
Db.displayName = "CardImgOverlay";
const Nb = /* @__PURE__ */ S.forwardRef(({
  className: a,
  bsPrefix: i,
  as: r = "a",
  ...o
}, s) => (i = $e(i, "card-link"), /* @__PURE__ */ T.jsx(r, {
  ref: s,
  className: Ae(a, i),
  ...o
})));
Nb.displayName = "CardLink";
const ZS = Hp("h6"), jb = /* @__PURE__ */ S.forwardRef(({
  className: a,
  bsPrefix: i,
  as: r = ZS,
  ...o
}, s) => (i = $e(i, "card-subtitle"), /* @__PURE__ */ T.jsx(r, {
  ref: s,
  className: Ae(a, i),
  ...o
})));
jb.displayName = "CardSubtitle";
const zb = /* @__PURE__ */ S.forwardRef(({
  className: a,
  bsPrefix: i,
  as: r = "p",
  ...o
}, s) => (i = $e(i, "card-text"), /* @__PURE__ */ T.jsx(r, {
  ref: s,
  className: Ae(a, i),
  ...o
})));
zb.displayName = "CardText";
const KS = Hp("h5"), Lb = /* @__PURE__ */ S.forwardRef(({
  className: a,
  bsPrefix: i,
  as: r = KS,
  ...o
}, s) => (i = $e(i, "card-title"), /* @__PURE__ */ T.jsx(r, {
  ref: s,
  className: Ae(a, i),
  ...o
})));
Lb.displayName = "CardTitle";
const Hb = /* @__PURE__ */ S.forwardRef(({
  bsPrefix: a,
  className: i,
  bg: r,
  text: o,
  border: s,
  body: d = !1,
  children: h,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: y = "div",
  ...m
}, v) => {
  const C = $e(a, "card");
  return /* @__PURE__ */ T.jsx(y, {
    ref: v,
    ...m,
    className: Ae(i, C, r && `bg-${r}`, o && `text-${o}`, s && `border-${s}`),
    children: d ? /* @__PURE__ */ T.jsx(Vp, {
      children: h
    }) : h
  });
});
Hb.displayName = "Card";
const en = Object.assign(Hb, {
  Img: Rb,
  Title: Lb,
  Subtitle: jb,
  Body: Vp,
  Link: Nb,
  Text: zb,
  Header: Mb,
  Footer: Ab,
  ImgOverlay: Db
});
function JS() {
  const a = S.useRef(!0), i = S.useRef(() => a.current);
  return S.useEffect(() => (a.current = !0, () => {
    a.current = !1;
  }), []), i.current;
}
function WS(a) {
  const i = S.useRef(a);
  return i.current = a, i;
}
function Vb(a) {
  const i = WS(a);
  S.useEffect(() => () => i.current(), []);
}
const gp = 2 ** 31 - 1;
function Ub(a, i, r) {
  const o = r - Date.now();
  a.current = o <= gp ? setTimeout(i, o) : setTimeout(() => Ub(a, i, r), gp);
}
function PS() {
  const a = JS(), i = S.useRef();
  return Vb(() => clearTimeout(i.current)), S.useMemo(() => {
    const r = () => clearTimeout(i.current);
    function o(s, d = 0) {
      a() && (r(), d <= gp ? i.current = setTimeout(s, d) : Ub(i, s, Date.now() + d));
    }
    return {
      set: o,
      clear: r,
      handleRef: i
    };
  }, []);
}
function eE(a, i) {
  let r = 0;
  return S.Children.map(a, (o) => /* @__PURE__ */ S.isValidElement(o) ? i(o, r++) : o);
}
function tE(a, i) {
  return S.Children.toArray(a).some((r) => /* @__PURE__ */ S.isValidElement(r) && r.type === i);
}
function nE({
  as: a,
  bsPrefix: i,
  className: r,
  ...o
}) {
  i = $e(i, "col");
  const s = fS(), d = dS(), h = [], y = [];
  return s.forEach((m) => {
    const v = o[m];
    delete o[m];
    let C, x, A;
    typeof v == "object" && v != null ? {
      span: C,
      offset: x,
      order: A
    } = v : C = v;
    const R = m !== d ? `-${m}` : "";
    C && h.push(C === !0 ? `${i}${R}` : `${i}${R}-${C}`), A != null && y.push(`order${R}-${A}`), x != null && y.push(`offset${R}-${x}`);
  }), [{
    ...o,
    className: Ae(r, ...h, ...y)
  }, {
    as: a,
    bsPrefix: i,
    spans: h
  }];
}
const Bb = /* @__PURE__ */ S.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  (a, i) => {
    const [{
      className: r,
      ...o
    }, {
      as: s = "div",
      bsPrefix: d,
      spans: h
    }] = nE(a);
    return /* @__PURE__ */ T.jsx(s, {
      ...o,
      ref: i,
      className: Ae(r, !h.length && d)
    });
  }
);
Bb.displayName = "Col";
var aE = Function.prototype.bind.call(Function.prototype.call, [].slice);
function so(a, i) {
  return aE(a.querySelectorAll(i));
}
function oy(a, i) {
  if (a.contains) return a.contains(i);
  if (a.compareDocumentPosition) return a === i || !!(a.compareDocumentPosition(i) & 16);
}
const iE = "data-rr-ui-";
function lE(a) {
  return `${iE}${a}`;
}
const $b = /* @__PURE__ */ S.createContext(Eo ? window : void 0);
$b.Provider;
function Up() {
  return S.useContext($b);
}
const kb = /* @__PURE__ */ S.createContext(null);
kb.displayName = "InputGroupContext";
const rE = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: Ui.string,
  /** Display feedback as a tooltip. */
  tooltip: Ui.bool,
  as: Ui.elementType
}, zf = /* @__PURE__ */ S.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    as: a = "div",
    className: i,
    type: r = "valid",
    tooltip: o = !1,
    ...s
  }, d) => /* @__PURE__ */ T.jsx(a, {
    ...s,
    ref: d,
    className: Ae(i, `${r}-${o ? "tooltip" : "feedback"}`)
  })
);
zf.displayName = "Feedback";
zf.propTypes = rE;
const Bi = /* @__PURE__ */ S.createContext({}), ou = /* @__PURE__ */ S.forwardRef(({
  id: a,
  bsPrefix: i,
  className: r,
  type: o = "checkbox",
  isValid: s = !1,
  isInvalid: d = !1,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: h = "input",
  ...y
}, m) => {
  const {
    controlId: v
  } = S.useContext(Bi);
  return i = $e(i, "form-check-input"), /* @__PURE__ */ T.jsx(h, {
    ...y,
    ref: m,
    type: o,
    id: a || v,
    className: Ae(r, i, s && "is-valid", d && "is-invalid")
  });
});
ou.displayName = "FormCheckInput";
const pf = /* @__PURE__ */ S.forwardRef(({
  bsPrefix: a,
  className: i,
  htmlFor: r,
  ...o
}, s) => {
  const {
    controlId: d
  } = S.useContext(Bi);
  return a = $e(a, "form-check-label"), /* @__PURE__ */ T.jsx("label", {
    ...o,
    ref: s,
    htmlFor: r || d,
    className: Ae(i, a)
  });
});
pf.displayName = "FormCheckLabel";
const qb = /* @__PURE__ */ S.forwardRef(({
  id: a,
  bsPrefix: i,
  bsSwitchPrefix: r,
  inline: o = !1,
  reverse: s = !1,
  disabled: d = !1,
  isValid: h = !1,
  isInvalid: y = !1,
  feedbackTooltip: m = !1,
  feedback: v,
  feedbackType: C,
  className: x,
  style: A,
  title: R = "",
  type: L = "checkbox",
  label: N,
  children: j,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: H = "input",
  ...Q
}, X) => {
  i = $e(i, "form-check"), r = $e(r, "form-switch");
  const {
    controlId: W
  } = S.useContext(Bi), U = S.useMemo(() => ({
    controlId: a || W
  }), [W, a]), Z = !j && N != null && N !== !1 || tE(j, pf), B = /* @__PURE__ */ T.jsx(ou, {
    ...Q,
    type: L === "switch" ? "checkbox" : L,
    ref: X,
    isValid: h,
    isInvalid: y,
    disabled: d,
    as: H
  });
  return /* @__PURE__ */ T.jsx(Bi.Provider, {
    value: U,
    children: /* @__PURE__ */ T.jsx("div", {
      style: A,
      className: Ae(x, Z && i, o && `${i}-inline`, s && `${i}-reverse`, L === "switch" && r),
      children: j || /* @__PURE__ */ T.jsxs(T.Fragment, {
        children: [B, Z && /* @__PURE__ */ T.jsx(pf, {
          title: R,
          children: N
        }), v && /* @__PURE__ */ T.jsx(zf, {
          type: C,
          tooltip: m,
          children: v
        })]
      })
    })
  });
});
qb.displayName = "FormCheck";
const mf = Object.assign(qb, {
  Input: ou,
  Label: pf
}), Yb = /* @__PURE__ */ S.forwardRef(({
  bsPrefix: a,
  type: i,
  size: r,
  htmlSize: o,
  id: s,
  className: d,
  isValid: h = !1,
  isInvalid: y = !1,
  plaintext: m,
  readOnly: v,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: C = "input",
  ...x
}, A) => {
  const {
    controlId: R
  } = S.useContext(Bi);
  return a = $e(a, "form-control"), /* @__PURE__ */ T.jsx(C, {
    ...x,
    type: i,
    size: o,
    ref: A,
    readOnly: v,
    id: s || R,
    className: Ae(d, m ? `${a}-plaintext` : a, r && `${a}-${r}`, i === "color" && `${a}-color`, h && "is-valid", y && "is-invalid")
  });
});
Yb.displayName = "FormControl";
const oE = Object.assign(Yb, {
  Feedback: zf
}), Gb = /* @__PURE__ */ S.forwardRef(({
  className: a,
  bsPrefix: i,
  as: r = "div",
  ...o
}, s) => (i = $e(i, "form-floating"), /* @__PURE__ */ T.jsx(r, {
  ref: s,
  className: Ae(a, i),
  ...o
})));
Gb.displayName = "FormFloating";
const Bp = /* @__PURE__ */ S.forwardRef(({
  controlId: a,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: i = "div",
  ...r
}, o) => {
  const s = S.useMemo(() => ({
    controlId: a
  }), [a]);
  return /* @__PURE__ */ T.jsx(Bi.Provider, {
    value: s,
    children: /* @__PURE__ */ T.jsx(i, {
      ...r,
      ref: o
    })
  });
});
Bp.displayName = "FormGroup";
const Xb = /* @__PURE__ */ S.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: a = "label",
  bsPrefix: i,
  column: r = !1,
  visuallyHidden: o = !1,
  className: s,
  htmlFor: d,
  ...h
}, y) => {
  const {
    controlId: m
  } = S.useContext(Bi);
  i = $e(i, "form-label");
  let v = "col-form-label";
  typeof r == "string" && (v = `${v} ${v}-${r}`);
  const C = Ae(s, i, o && "visually-hidden", r && v);
  return d = d || m, r ? /* @__PURE__ */ T.jsx(Bb, {
    ref: y,
    as: "label",
    className: C,
    htmlFor: d,
    ...h
  }) : /* @__PURE__ */ T.jsx(a, {
    ref: y,
    className: C,
    htmlFor: d,
    ...h
  });
});
Xb.displayName = "FormLabel";
const Ib = /* @__PURE__ */ S.forwardRef(({
  bsPrefix: a,
  className: i,
  id: r,
  ...o
}, s) => {
  const {
    controlId: d
  } = S.useContext(Bi);
  return a = $e(a, "form-range"), /* @__PURE__ */ T.jsx("input", {
    ...o,
    type: "range",
    ref: s,
    className: Ae(i, a),
    id: r || d
  });
});
Ib.displayName = "FormRange";
const Fb = /* @__PURE__ */ S.forwardRef(({
  bsPrefix: a,
  size: i,
  htmlSize: r,
  className: o,
  isValid: s = !1,
  isInvalid: d = !1,
  id: h,
  ...y
}, m) => {
  const {
    controlId: v
  } = S.useContext(Bi);
  return a = $e(a, "form-select"), /* @__PURE__ */ T.jsx("select", {
    ...y,
    size: r,
    ref: m,
    className: Ae(o, a, i && `${a}-${i}`, s && "is-valid", d && "is-invalid"),
    id: h || v
  });
});
Fb.displayName = "FormSelect";
const Qb = /* @__PURE__ */ S.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    bsPrefix: a,
    className: i,
    as: r = "small",
    muted: o,
    ...s
  }, d) => (a = $e(a, "form-text"), /* @__PURE__ */ T.jsx(r, {
    ...s,
    ref: d,
    className: Ae(i, a, o && "text-muted")
  }))
);
Qb.displayName = "FormText";
const Zb = /* @__PURE__ */ S.forwardRef((a, i) => /* @__PURE__ */ T.jsx(mf, {
  ...a,
  ref: i,
  type: "switch"
}));
Zb.displayName = "Switch";
const sE = Object.assign(Zb, {
  Input: mf.Input,
  Label: mf.Label
}), Kb = /* @__PURE__ */ S.forwardRef(({
  bsPrefix: a,
  className: i,
  children: r,
  controlId: o,
  label: s,
  ...d
}, h) => (a = $e(a, "form-floating"), /* @__PURE__ */ T.jsxs(Bp, {
  ref: h,
  className: Ae(i, a),
  controlId: o,
  ...d,
  children: [r, /* @__PURE__ */ T.jsx("label", {
    htmlFor: o,
    children: s
  })]
})));
Kb.displayName = "FloatingLabel";
const uE = {
  /**
   * The Form `ref` will be forwarded to the underlying element,
   * which means, unless it's rendered `as` a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias ref
   */
  _ref: Ui.any,
  /**
   * Mark a form as having been validated. Setting it to `true` will
   * toggle any validation styles on the forms elements.
   */
  validated: Ui.bool,
  as: Ui.elementType
}, $p = /* @__PURE__ */ S.forwardRef(({
  className: a,
  validated: i,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: r = "form",
  ...o
}, s) => /* @__PURE__ */ T.jsx(r, {
  ...o,
  ref: s,
  className: Ae(a, i && "was-validated")
}));
$p.displayName = "Form";
$p.propTypes = uE;
const ht = Object.assign($p, {
  Group: Bp,
  Control: oE,
  Floating: Gb,
  Check: mf,
  Switch: sE,
  Label: Xb,
  Text: Qb,
  Range: Ib,
  Select: Fb,
  FloatingLabel: Kb
}), Lf = /* @__PURE__ */ S.forwardRef(({
  className: a,
  bsPrefix: i,
  as: r = "span",
  ...o
}, s) => (i = $e(i, "input-group-text"), /* @__PURE__ */ T.jsx(r, {
  ref: s,
  className: Ae(a, i),
  ...o
})));
Lf.displayName = "InputGroupText";
const cE = (a) => /* @__PURE__ */ T.jsx(Lf, {
  children: /* @__PURE__ */ T.jsx(ou, {
    type: "checkbox",
    ...a
  })
}), fE = (a) => /* @__PURE__ */ T.jsx(Lf, {
  children: /* @__PURE__ */ T.jsx(ou, {
    type: "radio",
    ...a
  })
}), Jb = /* @__PURE__ */ S.forwardRef(({
  bsPrefix: a,
  size: i,
  hasValidation: r,
  className: o,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: s = "div",
  ...d
}, h) => {
  a = $e(a, "input-group");
  const y = S.useMemo(() => ({}), []);
  return /* @__PURE__ */ T.jsx(kb.Provider, {
    value: y,
    children: /* @__PURE__ */ T.jsx(s, {
      ref: h,
      ...d,
      className: Ae(o, a, i && `${a}-${i}`, r && "has-validation")
    })
  });
});
Jb.displayName = "InputGroup";
const Yc = Object.assign(Jb, {
  Text: Lf,
  Radio: fE,
  Checkbox: cE
}), sy = (a) => !a || typeof a == "function" ? a : (i) => {
  a.current = i;
};
function dE(a, i) {
  const r = sy(a), o = sy(i);
  return (s) => {
    r && r(s), o && o(s);
  };
}
function kp(a, i) {
  return S.useMemo(() => dE(a, i), [a, i]);
}
var Gc;
function uy(a) {
  if ((!Gc && Gc !== 0 || a) && Eo) {
    var i = document.createElement("div");
    i.style.position = "absolute", i.style.top = "-9999px", i.style.width = "50px", i.style.height = "50px", i.style.overflow = "scroll", document.body.appendChild(i), Gc = i.offsetWidth - i.clientWidth, document.body.removeChild(i);
  }
  return Gc;
}
function hE() {
  return S.useState(null);
}
function kh(a) {
  a === void 0 && (a = Rf());
  try {
    var i = a.activeElement;
    return !i || !i.nodeName ? null : i;
  } catch {
    return a.body;
  }
}
function pE(a) {
  const i = S.useRef(a);
  return i.current = a, i;
}
function mE(a) {
  const i = pE(a);
  S.useEffect(() => () => i.current(), []);
}
function gE(a = document) {
  const i = a.defaultView;
  return Math.abs(i.innerWidth - a.documentElement.clientWidth);
}
const cy = lE("modal-open");
class qp {
  constructor({
    ownerDocument: i,
    handleContainerOverflow: r = !0,
    isRTL: o = !1
  } = {}) {
    this.handleContainerOverflow = r, this.isRTL = o, this.modals = [], this.ownerDocument = i;
  }
  getScrollbarWidth() {
    return gE(this.ownerDocument);
  }
  getElement() {
    return (this.ownerDocument || document).body;
  }
  setModalAttributes(i) {
  }
  removeModalAttributes(i) {
  }
  setContainerStyle(i) {
    const r = {
      overflow: "hidden"
    }, o = this.isRTL ? "paddingLeft" : "paddingRight", s = this.getElement();
    i.style = {
      overflow: s.style.overflow,
      [o]: s.style[o]
    }, i.scrollBarWidth && (r[o] = `${parseInt(Vi(s, o) || "0", 10) + i.scrollBarWidth}px`), s.setAttribute(cy, ""), Vi(s, r);
  }
  reset() {
    [...this.modals].forEach((i) => this.remove(i));
  }
  removeContainerStyle(i) {
    const r = this.getElement();
    r.removeAttribute(cy), Object.assign(r.style, i.style);
  }
  add(i) {
    let r = this.modals.indexOf(i);
    return r !== -1 || (r = this.modals.length, this.modals.push(i), this.setModalAttributes(i), r !== 0) || (this.state = {
      scrollBarWidth: this.getScrollbarWidth(),
      style: {}
    }, this.handleContainerOverflow && this.setContainerStyle(this.state)), r;
  }
  remove(i) {
    const r = this.modals.indexOf(i);
    r !== -1 && (this.modals.splice(r, 1), !this.modals.length && this.handleContainerOverflow && this.removeContainerStyle(this.state), this.removeModalAttributes(i));
  }
  isTopModal(i) {
    return !!this.modals.length && this.modals[this.modals.length - 1] === i;
  }
}
const qh = (a, i) => Eo ? a == null ? (i || Rf()).body : (typeof a == "function" && (a = a()), a && "current" in a && (a = a.current), a && ("nodeType" in a || a.getBoundingClientRect) ? a : null) : null;
function vE(a, i) {
  const r = Up(), [o, s] = S.useState(() => qh(a, r?.document));
  if (!o) {
    const d = qh(a);
    d && s(d);
  }
  return S.useEffect(() => {
  }, [i, o]), S.useEffect(() => {
    const d = qh(a);
    d !== o && s(d);
  }, [a, o]), o;
}
function yE({
  children: a,
  in: i,
  onExited: r,
  mountOnEnter: o,
  unmountOnExit: s
}) {
  const d = S.useRef(null), h = S.useRef(i), y = dr(r);
  S.useEffect(() => {
    i ? h.current = !0 : y(d.current);
  }, [i, y]);
  const m = kp(d, lu(a)), v = /* @__PURE__ */ S.cloneElement(a, {
    ref: m
  });
  return i ? v : s || !h.current && o ? null : v;
}
const bE = ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "addEndListener", "children"];
function _E(a, i) {
  if (a == null) return {};
  var r = {};
  for (var o in a) if ({}.hasOwnProperty.call(a, o)) {
    if (i.indexOf(o) >= 0) continue;
    r[o] = a[o];
  }
  return r;
}
function SE(a) {
  let {
    onEnter: i,
    onEntering: r,
    onEntered: o,
    onExit: s,
    onExiting: d,
    onExited: h,
    addEndListener: y,
    children: m
  } = a, v = _E(a, bE);
  const C = S.useRef(null), x = kp(C, lu(m)), A = (W) => (U) => {
    W && C.current && W(C.current, U);
  }, R = S.useCallback(A(i), [i]), L = S.useCallback(A(r), [r]), N = S.useCallback(A(o), [o]), j = S.useCallback(A(s), [s]), H = S.useCallback(A(d), [d]), Q = S.useCallback(A(h), [h]), X = S.useCallback(A(y), [y]);
  return Object.assign({}, v, {
    nodeRef: C
  }, i && {
    onEnter: R
  }, r && {
    onEntering: L
  }, o && {
    onEntered: N
  }, s && {
    onExit: j
  }, d && {
    onExiting: H
  }, h && {
    onExited: Q
  }, y && {
    addEndListener: X
  }, {
    children: typeof m == "function" ? (W, U) => (
      // TODO: Types for RTG missing innerProps, so need to cast.
      m(W, Object.assign({}, U, {
        ref: x
      }))
    ) : /* @__PURE__ */ S.cloneElement(m, {
      ref: x
    })
  });
}
const EE = ["component"];
function CE(a, i) {
  if (a == null) return {};
  var r = {};
  for (var o in a) if ({}.hasOwnProperty.call(a, o)) {
    if (i.indexOf(o) >= 0) continue;
    r[o] = a[o];
  }
  return r;
}
const OE = /* @__PURE__ */ S.forwardRef((a, i) => {
  let {
    component: r
  } = a, o = CE(a, EE);
  const s = SE(o);
  return /* @__PURE__ */ T.jsx(r, Object.assign({
    ref: i
  }, s));
});
function xE({
  in: a,
  onTransition: i
}) {
  const r = S.useRef(null), o = S.useRef(!0), s = dr(i);
  return ry(() => {
    if (!r.current)
      return;
    let d = !1;
    return s({
      in: a,
      element: r.current,
      initial: o.current,
      isStale: () => d
    }), () => {
      d = !0;
    };
  }, [a, s]), ry(() => (o.current = !1, () => {
    o.current = !0;
  }), []), r;
}
function TE({
  children: a,
  in: i,
  onExited: r,
  onEntered: o,
  transition: s
}) {
  const [d, h] = S.useState(!i);
  i && d && h(!1);
  const y = xE({
    in: !!i,
    onTransition: (v) => {
      const C = () => {
        v.isStale() || (v.in ? o?.(v.element, v.initial) : (h(!0), r?.(v.element)));
      };
      Promise.resolve(s(v)).then(C, (x) => {
        throw v.in || h(!0), x;
      });
    }
  }), m = kp(y, lu(a));
  return d && !i ? null : /* @__PURE__ */ S.cloneElement(a, {
    ref: m
  });
}
function fy(a, i, r) {
  return a ? /* @__PURE__ */ T.jsx(OE, Object.assign({}, r, {
    component: a
  })) : i ? /* @__PURE__ */ T.jsx(TE, Object.assign({}, r, {
    transition: i
  })) : /* @__PURE__ */ T.jsx(yE, Object.assign({}, r));
}
const AE = ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "runTransition", "backdropTransition", "runBackdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"];
function wE(a, i) {
  if (a == null) return {};
  var r = {};
  for (var o in a) if ({}.hasOwnProperty.call(a, o)) {
    if (i.indexOf(o) >= 0) continue;
    r[o] = a[o];
  }
  return r;
}
let Yh;
function ME(a) {
  return Yh || (Yh = new qp({
    ownerDocument: a?.document
  })), Yh;
}
function RE(a) {
  const i = Up(), r = a || ME(i), o = S.useRef({
    dialog: null,
    backdrop: null
  });
  return Object.assign(o.current, {
    add: () => r.add(o.current),
    remove: () => r.remove(o.current),
    isTopModal: () => r.isTopModal(o.current),
    setDialogRef: S.useCallback((s) => {
      o.current.dialog = s;
    }, []),
    setBackdropRef: S.useCallback((s) => {
      o.current.backdrop = s;
    }, [])
  });
}
const Wb = /* @__PURE__ */ S.forwardRef((a, i) => {
  let {
    show: r = !1,
    role: o = "dialog",
    className: s,
    style: d,
    children: h,
    backdrop: y = !0,
    keyboard: m = !0,
    onBackdropClick: v,
    onEscapeKeyDown: C,
    transition: x,
    runTransition: A,
    backdropTransition: R,
    runBackdropTransition: L,
    autoFocus: N = !0,
    enforceFocus: j = !0,
    restoreFocus: H = !0,
    restoreFocusOptions: Q,
    renderDialog: X,
    renderBackdrop: W = (ye) => /* @__PURE__ */ T.jsx("div", Object.assign({}, ye)),
    manager: U,
    container: Z,
    onShow: B,
    onHide: oe = () => {
    },
    onExit: we,
    onExited: je,
    onExiting: ke,
    onEnter: Ve,
    onEntering: ut,
    onEntered: tt
  } = a, Ue = wE(a, AE);
  const k = Up(), ae = vE(Z), le = RE(U), be = BS(), Ee = $S(r), [O, Y] = S.useState(!r), ee = S.useRef(null);
  S.useImperativeHandle(i, () => le, [le]), Eo && !Ee && r && (ee.current = kh(k?.document)), r && O && Y(!1);
  const ie = dr(() => {
    if (le.add(), _t.current = df(document, "keydown", Le), ne.current = df(
      document,
      "focus",
      // the timeout is necessary b/c this will run before the new modal is mounted
      // and so steals focus from it
      () => setTimeout(ue),
      !0
    ), B && B(), N) {
      var ye, Bt;
      const St = kh((ye = (Bt = le.dialog) == null ? void 0 : Bt.ownerDocument) != null ? ye : k?.document);
      le.dialog && St && !oy(le.dialog, St) && (ee.current = St, le.dialog.focus());
    }
  }), ce = dr(() => {
    if (le.remove(), _t.current == null || _t.current(), ne.current == null || ne.current(), H) {
      var ye;
      (ye = ee.current) == null || ye.focus == null || ye.focus(Q), ee.current = null;
    }
  });
  S.useEffect(() => {
    !r || !ae || ie();
  }, [
    r,
    ae,
    /* should never change: */
    ie
  ]), S.useEffect(() => {
    O && ce();
  }, [O, ce]), mE(() => {
    ce();
  });
  const ue = dr(() => {
    if (!j || !be() || !le.isTopModal())
      return;
    const ye = kh(k?.document);
    le.dialog && ye && !oy(le.dialog, ye) && le.dialog.focus();
  }), he = dr((ye) => {
    ye.target === ye.currentTarget && (v?.(ye), y === !0 && oe());
  }), Le = dr((ye) => {
    m && TS(ye) && le.isTopModal() && (C?.(ye), ye.defaultPrevented || oe());
  }), ne = S.useRef(), _t = S.useRef(), Ct = (...ye) => {
    Y(!0), je?.(...ye);
  };
  if (!ae)
    return null;
  const Ot = Object.assign({
    role: o,
    ref: le.setDialogRef,
    // apparently only works on the dialog role element
    "aria-modal": o === "dialog" ? !0 : void 0
  }, Ue, {
    style: d,
    className: s,
    tabIndex: -1
  });
  let Xn = X ? X(Ot) : /* @__PURE__ */ T.jsx("div", Object.assign({}, Ot, {
    children: /* @__PURE__ */ S.cloneElement(h, {
      role: "document"
    })
  }));
  Xn = fy(x, A, {
    unmountOnExit: !0,
    mountOnEnter: !0,
    appear: !0,
    in: !!r,
    onExit: we,
    onExiting: ke,
    onExited: Ct,
    onEnter: Ve,
    onEntering: ut,
    onEntered: tt,
    children: Xn
  });
  let xt = null;
  return y && (xt = W({
    ref: le.setBackdropRef,
    onClick: he
  }), xt = fy(R, L, {
    in: !!r,
    appear: !0,
    mountOnEnter: !0,
    unmountOnExit: !0,
    children: xt
  })), /* @__PURE__ */ T.jsx(T.Fragment, {
    children: /* @__PURE__ */ ho.createPortal(/* @__PURE__ */ T.jsxs(T.Fragment, {
      children: [xt, Xn]
    }), ae)
  });
});
Wb.displayName = "Modal";
const DE = Object.assign(Wb, {
  Manager: qp
});
function NE(a, i) {
  return a.classList ? a.classList.contains(i) : (" " + (a.className.baseVal || a.className) + " ").indexOf(" " + i + " ") !== -1;
}
function jE(a, i) {
  a.classList ? a.classList.add(i) : NE(a, i) || (typeof a.className == "string" ? a.className = a.className + " " + i : a.setAttribute("class", (a.className && a.className.baseVal || "") + " " + i));
}
function dy(a, i) {
  return a.replace(new RegExp("(^|\\s)" + i + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function zE(a, i) {
  a.classList ? a.classList.remove(i) : typeof a.className == "string" ? a.className = dy(a.className, i) : a.setAttribute("class", dy(a.className && a.className.baseVal || "", i));
}
const uo = {
  FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  STICKY_CONTENT: ".sticky-top",
  NAVBAR_TOGGLER: ".navbar-toggler"
};
class LE extends qp {
  adjustAndStore(i, r, o) {
    const s = r.style[i];
    r.dataset[i] = s, Vi(r, {
      [i]: `${parseFloat(Vi(r, i)) + o}px`
    });
  }
  restore(i, r) {
    const o = r.dataset[i];
    o !== void 0 && (delete r.dataset[i], Vi(r, {
      [i]: o
    }));
  }
  setContainerStyle(i) {
    super.setContainerStyle(i);
    const r = this.getElement();
    if (jE(r, "modal-open"), !i.scrollBarWidth) return;
    const o = this.isRTL ? "paddingLeft" : "paddingRight", s = this.isRTL ? "marginLeft" : "marginRight";
    so(r, uo.FIXED_CONTENT).forEach((d) => this.adjustAndStore(o, d, i.scrollBarWidth)), so(r, uo.STICKY_CONTENT).forEach((d) => this.adjustAndStore(s, d, -i.scrollBarWidth)), so(r, uo.NAVBAR_TOGGLER).forEach((d) => this.adjustAndStore(s, d, i.scrollBarWidth));
  }
  removeContainerStyle(i) {
    super.removeContainerStyle(i);
    const r = this.getElement();
    zE(r, "modal-open");
    const o = this.isRTL ? "paddingLeft" : "paddingRight", s = this.isRTL ? "marginLeft" : "marginRight";
    so(r, uo.FIXED_CONTENT).forEach((d) => this.restore(o, d)), so(r, uo.STICKY_CONTENT).forEach((d) => this.restore(s, d)), so(r, uo.NAVBAR_TOGGLER).forEach((d) => this.restore(s, d));
  }
}
let Gh;
function HE(a) {
  return Gh || (Gh = new LE(a)), Gh;
}
const Pb = /* @__PURE__ */ S.forwardRef(({
  className: a,
  bsPrefix: i,
  as: r = "div",
  ...o
}, s) => (i = $e(i, "modal-body"), /* @__PURE__ */ T.jsx(r, {
  ref: s,
  className: Ae(a, i),
  ...o
})));
Pb.displayName = "ModalBody";
const e0 = /* @__PURE__ */ S.createContext({
  onHide() {
  }
}), Yp = /* @__PURE__ */ S.forwardRef(({
  bsPrefix: a,
  className: i,
  contentClassName: r,
  centered: o,
  size: s,
  fullscreen: d,
  children: h,
  scrollable: y,
  ...m
}, v) => {
  a = $e(a, "modal");
  const C = `${a}-dialog`, x = typeof d == "string" ? `${a}-fullscreen-${d}` : `${a}-fullscreen`;
  return /* @__PURE__ */ T.jsx("div", {
    ...m,
    ref: v,
    className: Ae(C, i, s && `${a}-${s}`, o && `${C}-centered`, y && `${C}-scrollable`, d && x),
    children: /* @__PURE__ */ T.jsx("div", {
      className: Ae(`${a}-content`, r),
      children: h
    })
  });
});
Yp.displayName = "ModalDialog";
const t0 = /* @__PURE__ */ S.forwardRef(({
  className: a,
  bsPrefix: i,
  as: r = "div",
  ...o
}, s) => (i = $e(i, "modal-footer"), /* @__PURE__ */ T.jsx(r, {
  ref: s,
  className: Ae(a, i),
  ...o
})));
t0.displayName = "ModalFooter";
const n0 = /* @__PURE__ */ S.forwardRef(({
  closeLabel: a = "Close",
  closeVariant: i,
  closeButton: r = !1,
  onHide: o,
  children: s,
  ...d
}, h) => {
  const y = S.useContext(e0), m = hf(() => {
    y?.onHide(), o?.();
  });
  return /* @__PURE__ */ T.jsxs("div", {
    ref: h,
    ...d,
    children: [s, r && /* @__PURE__ */ T.jsx(jf, {
      "aria-label": a,
      variant: i,
      onClick: m
    })]
  });
});
n0.displayName = "AbstractModalHeader";
const a0 = /* @__PURE__ */ S.forwardRef(({
  bsPrefix: a,
  className: i,
  closeLabel: r = "Close",
  closeButton: o = !1,
  ...s
}, d) => (a = $e(a, "modal-header"), /* @__PURE__ */ T.jsx(n0, {
  ref: d,
  ...s,
  className: Ae(i, a),
  closeLabel: r,
  closeButton: o
})));
a0.displayName = "ModalHeader";
const VE = Hp("h4"), i0 = /* @__PURE__ */ S.forwardRef(({
  className: a,
  bsPrefix: i,
  as: r = VE,
  ...o
}, s) => (i = $e(i, "modal-title"), /* @__PURE__ */ T.jsx(r, {
  ref: s,
  className: Ae(a, i),
  ...o
})));
i0.displayName = "ModalTitle";
function UE(a) {
  return /* @__PURE__ */ T.jsx(Nf, {
    ...a,
    timeout: null
  });
}
function BE(a) {
  return /* @__PURE__ */ T.jsx(Nf, {
    ...a,
    timeout: null
  });
}
const l0 = /* @__PURE__ */ S.forwardRef(({
  bsPrefix: a,
  className: i,
  style: r,
  dialogClassName: o,
  contentClassName: s,
  children: d,
  dialogAs: h = Yp,
  "data-bs-theme": y,
  "aria-labelledby": m,
  "aria-describedby": v,
  "aria-label": C,
  /* BaseModal props */
  show: x = !1,
  animation: A = !0,
  backdrop: R = !0,
  keyboard: L = !0,
  onEscapeKeyDown: N,
  onShow: j,
  onHide: H,
  container: Q,
  autoFocus: X = !0,
  enforceFocus: W = !0,
  restoreFocus: U = !0,
  restoreFocusOptions: Z,
  onEntered: B,
  onExit: oe,
  onExiting: we,
  onEnter: je,
  onEntering: ke,
  onExited: Ve,
  backdropClassName: ut,
  manager: tt,
  ...Ue
}, k) => {
  const [ae, le] = S.useState({}), [be, Ee] = S.useState(!1), O = S.useRef(!1), Y = S.useRef(!1), ee = S.useRef(null), [ie, ce] = hE(), ue = bb(k, ce), he = hf(H), Le = hS();
  a = $e(a, "modal");
  const ne = S.useMemo(() => ({
    onHide: he
  }), [he]);
  function _t() {
    return tt || HE({
      isRTL: Le
    });
  }
  function Ct(Be) {
    if (!Eo) return;
    const da = _t().getScrollbarWidth() > 0, pi = Be.scrollHeight > Rf(Be).documentElement.clientHeight;
    le({
      paddingRight: da && !pi ? uy() : void 0,
      paddingLeft: !da && pi ? uy() : void 0
    });
  }
  const Ot = hf(() => {
    ie && Ct(ie.dialog);
  });
  Vb(() => {
    mp(window, "resize", Ot), ee.current == null || ee.current();
  });
  const Xn = () => {
    O.current = !0;
  }, xt = (Be) => {
    O.current && ie && Be.target === ie.dialog && (Y.current = !0), O.current = !1;
  }, ye = () => {
    Ee(!0), ee.current = gb(ie.dialog, () => {
      Ee(!1);
    });
  }, Bt = (Be) => {
    Be.target === Be.currentTarget && ye();
  }, St = (Be) => {
    if (R === "static") {
      Bt(Be);
      return;
    }
    if (Y.current || Be.target !== Be.currentTarget) {
      Y.current = !1;
      return;
    }
    H?.();
  }, wt = (Be) => {
    L ? N?.(Be) : (Be.preventDefault(), R === "static" && ye());
  }, on = (Be, da) => {
    Be && Ct(Be), je?.(Be, da);
  }, Ll = (Be) => {
    ee.current == null || ee.current(), oe?.(Be);
  }, Hl = (Be, da) => {
    ke?.(Be, da), mb(window, "resize", Ot);
  }, xo = (Be) => {
    Be && (Be.style.display = ""), Ve?.(Be), mp(window, "resize", Ot);
  }, To = S.useCallback((Be) => /* @__PURE__ */ T.jsx("div", {
    ...Be,
    className: Ae(`${a}-backdrop`, ut, !A && "show")
  }), [A, ut, a]), sn = {
    ...r,
    ...ae
  };
  sn.display = "block";
  const ki = (Be) => /* @__PURE__ */ T.jsx("div", {
    role: "dialog",
    ...Be,
    style: sn,
    className: Ae(i, a, be && `${a}-static`, !A && "show"),
    onClick: R ? St : void 0,
    onMouseUp: xt,
    "data-bs-theme": y,
    "aria-label": C,
    "aria-labelledby": m,
    "aria-describedby": v,
    children: /* @__PURE__ */ T.jsx(h, {
      ...Ue,
      onMouseDown: Xn,
      className: o,
      contentClassName: s,
      children: d
    })
  });
  return /* @__PURE__ */ T.jsx(e0.Provider, {
    value: ne,
    children: /* @__PURE__ */ T.jsx(DE, {
      show: x,
      ref: ue,
      backdrop: R,
      container: Q,
      keyboard: !0,
      autoFocus: X,
      enforceFocus: W,
      restoreFocus: U,
      restoreFocusOptions: Z,
      onEscapeKeyDown: wt,
      onShow: j,
      onHide: H,
      onEnter: on,
      onEntering: Hl,
      onEntered: B,
      onExit: Ll,
      onExiting: we,
      onExited: xo,
      manager: _t(),
      transition: A ? UE : void 0,
      backdropTransition: A ? BE : void 0,
      renderBackdrop: To,
      renderDialog: ki
    })
  });
});
l0.displayName = "Modal";
const ka = Object.assign(l0, {
  Body: Pb,
  Header: a0,
  Title: i0,
  Footer: t0,
  Dialog: Yp,
  TRANSITION_DURATION: 300,
  BACKDROP_TRANSITION_DURATION: 150
}), hy = 1e3;
function $E(a, i, r) {
  const o = (a - i) / (r - i) * 100;
  return Math.round(o * hy) / hy;
}
function py({
  min: a,
  now: i,
  max: r,
  label: o,
  visuallyHidden: s,
  striped: d,
  animated: h,
  className: y,
  style: m,
  variant: v,
  bsPrefix: C,
  ...x
}, A) {
  return /* @__PURE__ */ T.jsx("div", {
    ref: A,
    ...x,
    role: "progressbar",
    className: Ae(y, `${C}-bar`, {
      [`bg-${v}`]: v,
      [`${C}-bar-animated`]: h,
      [`${C}-bar-striped`]: h || d
    }),
    style: {
      width: `${$E(i, a, r)}%`,
      ...m
    },
    "aria-valuenow": i,
    "aria-valuemin": a,
    "aria-valuemax": r,
    children: s ? /* @__PURE__ */ T.jsx("span", {
      className: "visually-hidden",
      children: o
    }) : o
  });
}
const r0 = /* @__PURE__ */ S.forwardRef(({
  isChild: a = !1,
  ...i
}, r) => {
  const o = {
    min: 0,
    max: 100,
    animated: !1,
    visuallyHidden: !1,
    striped: !1,
    ...i
  };
  if (o.bsPrefix = $e(o.bsPrefix, "progress"), a)
    return py(o, r);
  const {
    min: s,
    now: d,
    max: h,
    label: y,
    visuallyHidden: m,
    striped: v,
    animated: C,
    bsPrefix: x,
    variant: A,
    className: R,
    children: L,
    ...N
  } = o;
  return /* @__PURE__ */ T.jsx("div", {
    ref: r,
    ...N,
    className: Ae(R, x),
    children: L ? eE(L, (j) => /* @__PURE__ */ S.cloneElement(j, {
      isChild: !0
    })) : py({
      min: s,
      now: d,
      max: h,
      label: y,
      visuallyHidden: m,
      striped: v,
      animated: C,
      bsPrefix: x,
      variant: A
    }, r)
  });
});
r0.displayName = "ProgressBar";
const kE = {
  [ui]: "showing",
  [Ws]: "showing show"
}, o0 = /* @__PURE__ */ S.forwardRef((a, i) => /* @__PURE__ */ T.jsx(Nf, {
  ...a,
  ref: i,
  transitionClasses: kE
}));
o0.displayName = "ToastFade";
const s0 = /* @__PURE__ */ S.createContext({
  onClose() {
  }
}), u0 = /* @__PURE__ */ S.forwardRef(({
  bsPrefix: a,
  closeLabel: i = "Close",
  closeVariant: r,
  closeButton: o = !0,
  className: s,
  children: d,
  ...h
}, y) => {
  a = $e(a, "toast-header");
  const m = S.useContext(s0), v = hf((C) => {
    m == null || m.onClose == null || m.onClose(C);
  });
  return /* @__PURE__ */ T.jsxs("div", {
    ref: y,
    ...h,
    className: Ae(a, s),
    children: [d, o && /* @__PURE__ */ T.jsx(jf, {
      "aria-label": i,
      variant: r,
      onClick: v,
      "data-dismiss": "toast"
    })]
  });
});
u0.displayName = "ToastHeader";
const c0 = /* @__PURE__ */ S.forwardRef(({
  className: a,
  bsPrefix: i,
  as: r = "div",
  ...o
}, s) => (i = $e(i, "toast-body"), /* @__PURE__ */ T.jsx(r, {
  ref: s,
  className: Ae(a, i),
  ...o
})));
c0.displayName = "ToastBody";
const f0 = /* @__PURE__ */ S.forwardRef(({
  bsPrefix: a,
  className: i,
  transition: r = o0,
  show: o = !0,
  animation: s = !0,
  delay: d = 5e3,
  autohide: h = !1,
  onClose: y,
  onEntered: m,
  onExit: v,
  onExiting: C,
  onEnter: x,
  onEntering: A,
  onExited: R,
  bg: L,
  ...N
}, j) => {
  a = $e(a, "toast");
  const H = S.useRef(d), Q = S.useRef(y);
  S.useEffect(() => {
    H.current = d, Q.current = y;
  }, [d, y]);
  const X = PS(), W = !!(h && o), U = S.useCallback(() => {
    W && (Q.current == null || Q.current());
  }, [W]);
  S.useEffect(() => {
    X.set(U, H.current);
  }, [X, U]);
  const Z = S.useMemo(() => ({
    onClose: y
  }), [y]), B = !!(r && s), oe = /* @__PURE__ */ T.jsx("div", {
    ...N,
    ref: j,
    className: Ae(a, i, L && `bg-${L}`, !B && (o ? "show" : "hide")),
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true"
  });
  return /* @__PURE__ */ T.jsx(s0.Provider, {
    value: Z,
    children: B && r ? /* @__PURE__ */ T.jsx(r, {
      in: o,
      onEnter: x,
      onEntering: A,
      onEntered: m,
      onExit: v,
      onExiting: C,
      onExited: R,
      unmountOnExit: !0,
      children: oe
    }) : oe
  });
});
f0.displayName = "Toast";
const Xh = Object.assign(f0, {
  Body: c0,
  Header: u0
}), qE = {
  "top-start": "top-0 start-0",
  "top-center": "top-0 start-50 translate-middle-x",
  "top-end": "top-0 end-0",
  "middle-start": "top-50 start-0 translate-middle-y",
  "middle-center": "top-50 start-50 translate-middle",
  "middle-end": "top-50 end-0 translate-middle-y",
  "bottom-start": "bottom-0 start-0",
  "bottom-center": "bottom-0 start-50 translate-middle-x",
  "bottom-end": "bottom-0 end-0"
}, d0 = /* @__PURE__ */ S.forwardRef(({
  bsPrefix: a,
  position: i,
  containerPosition: r,
  className: o,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: s = "div",
  ...d
}, h) => (a = $e(a, "toast-container"), /* @__PURE__ */ T.jsx(s, {
  ref: h,
  ...d,
  className: Ae(a, i && qE[i], r && `position-${r}`, o)
})));
d0.displayName = "ToastContainer";
function vr(a) {
  "@babel/helpers - typeof";
  return vr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
    return typeof i;
  } : function(i) {
    return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
  }, vr(a);
}
function YE(a, i) {
  if (vr(a) != "object" || !a) return a;
  var r = a[Symbol.toPrimitive];
  if (r !== void 0) {
    var o = r.call(a, i);
    if (vr(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (i === "string" ? String : Number)(a);
}
function h0(a) {
  var i = YE(a, "string");
  return vr(i) == "symbol" ? i : i + "";
}
function Zs(a, i, r) {
  return (i = h0(i)) in a ? Object.defineProperty(a, i, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : a[i] = r, a;
}
function my(a, i) {
  var r = Object.keys(a);
  if (Object.getOwnPropertySymbols) {
    var o = Object.getOwnPropertySymbols(a);
    i && (o = o.filter(function(s) {
      return Object.getOwnPropertyDescriptor(a, s).enumerable;
    })), r.push.apply(r, o);
  }
  return r;
}
function ge(a) {
  for (var i = 1; i < arguments.length; i++) {
    var r = arguments[i] != null ? arguments[i] : {};
    i % 2 ? my(Object(r), !0).forEach(function(o) {
      Zs(a, o, r[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(r)) : my(Object(r)).forEach(function(o) {
      Object.defineProperty(a, o, Object.getOwnPropertyDescriptor(r, o));
    });
  }
  return a;
}
function GE(a) {
  if (Array.isArray(a)) return a;
}
function XE(a, i) {
  var r = a == null ? null : typeof Symbol < "u" && a[Symbol.iterator] || a["@@iterator"];
  if (r != null) {
    var o, s, d, h, y = [], m = !0, v = !1;
    try {
      if (d = (r = r.call(a)).next, i === 0) {
        if (Object(r) !== r) return;
        m = !1;
      } else for (; !(m = (o = d.call(r)).done) && (y.push(o.value), y.length !== i); m = !0) ;
    } catch (C) {
      v = !0, s = C;
    } finally {
      try {
        if (!m && r.return != null && (h = r.return(), Object(h) !== h)) return;
      } finally {
        if (v) throw s;
      }
    }
    return y;
  }
}
function vp(a, i) {
  (i == null || i > a.length) && (i = a.length);
  for (var r = 0, o = Array(i); r < i; r++) o[r] = a[r];
  return o;
}
function p0(a, i) {
  if (a) {
    if (typeof a == "string") return vp(a, i);
    var r = {}.toString.call(a).slice(8, -1);
    return r === "Object" && a.constructor && (r = a.constructor.name), r === "Map" || r === "Set" ? Array.from(a) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? vp(a, i) : void 0;
  }
}
function IE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ta(a, i) {
  return GE(a) || XE(a, i) || p0(a, i) || IE();
}
function Gn(a, i) {
  if (a == null) return {};
  var r, o, s = Mf(a, i);
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(a);
    for (o = 0; o < d.length; o++) r = d[o], i.indexOf(r) === -1 && {}.propertyIsEnumerable.call(a, r) && (s[r] = a[r]);
  }
  return s;
}
var FE = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function QE(a) {
  var i = a.defaultInputValue, r = i === void 0 ? "" : i, o = a.defaultMenuIsOpen, s = o === void 0 ? !1 : o, d = a.defaultValue, h = d === void 0 ? null : d, y = a.inputValue, m = a.menuIsOpen, v = a.onChange, C = a.onInputChange, x = a.onMenuClose, A = a.onMenuOpen, R = a.value, L = Gn(a, FE), N = S.useState(y !== void 0 ? y : r), j = Ta(N, 2), H = j[0], Q = j[1], X = S.useState(m !== void 0 ? m : s), W = Ta(X, 2), U = W[0], Z = W[1], B = S.useState(R !== void 0 ? R : h), oe = Ta(B, 2), we = oe[0], je = oe[1], ke = S.useCallback(function(le, be) {
    typeof v == "function" && v(le, be), je(le);
  }, [v]), Ve = S.useCallback(function(le, be) {
    var Ee;
    typeof C == "function" && (Ee = C(le, be)), Q(Ee !== void 0 ? Ee : le);
  }, [C]), ut = S.useCallback(function() {
    typeof A == "function" && A(), Z(!0);
  }, [A]), tt = S.useCallback(function() {
    typeof x == "function" && x(), Z(!1);
  }, [x]), Ue = y !== void 0 ? y : H, k = m !== void 0 ? m : U, ae = R !== void 0 ? R : we;
  return ge(ge({}, L), {}, {
    inputValue: Ue,
    menuIsOpen: k,
    onChange: ke,
    onInputChange: Ve,
    onMenuClose: tt,
    onMenuOpen: ut,
    value: ae
  });
}
function ZE(a, i) {
  if (!(a instanceof i)) throw new TypeError("Cannot call a class as a function");
}
function gy(a, i) {
  for (var r = 0; r < i.length; r++) {
    var o = i[r];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(a, h0(o.key), o);
  }
}
function KE(a, i, r) {
  return i && gy(a.prototype, i), r && gy(a, r), Object.defineProperty(a, "prototype", {
    writable: !1
  }), a;
}
function JE(a, i) {
  if (typeof i != "function" && i !== null) throw new TypeError("Super expression must either be null or a function");
  a.prototype = Object.create(i && i.prototype, {
    constructor: {
      value: a,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(a, "prototype", {
    writable: !1
  }), i && cf(a, i);
}
function gf(a) {
  return gf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function(i) {
    return i.__proto__ || Object.getPrototypeOf(i);
  }, gf(a);
}
function m0() {
  try {
    var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (m0 = function() {
    return !!a;
  })();
}
function g0(a) {
  if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a;
}
function WE(a, i) {
  if (i && (vr(i) == "object" || typeof i == "function")) return i;
  if (i !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return g0(a);
}
function PE(a) {
  var i = m0();
  return function() {
    var r, o = gf(a);
    if (i) {
      var s = gf(this).constructor;
      r = Reflect.construct(o, arguments, s);
    } else r = o.apply(this, arguments);
    return WE(this, r);
  };
}
function eC(a) {
  if (Array.isArray(a)) return vp(a);
}
function tC(a) {
  if (typeof Symbol < "u" && a[Symbol.iterator] != null || a["@@iterator"] != null) return Array.from(a);
}
function nC() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Gp(a) {
  return eC(a) || tC(a) || p0(a) || nC();
}
function aC(a) {
  if (a.sheet)
    return a.sheet;
  for (var i = 0; i < document.styleSheets.length; i++)
    if (document.styleSheets[i].ownerNode === a)
      return document.styleSheets[i];
}
function iC(a) {
  var i = document.createElement("style");
  return i.setAttribute("data-emotion", a.key), a.nonce !== void 0 && i.setAttribute("nonce", a.nonce), i.appendChild(document.createTextNode("")), i.setAttribute("data-s", ""), i;
}
var lC = /* @__PURE__ */ (function() {
  function a(r) {
    var o = this;
    this._insertTag = function(s) {
      var d;
      o.tags.length === 0 ? o.insertionPoint ? d = o.insertionPoint.nextSibling : o.prepend ? d = o.container.firstChild : d = o.before : d = o.tags[o.tags.length - 1].nextSibling, o.container.insertBefore(s, d), o.tags.push(s);
    }, this.isSpeedy = r.speedy === void 0 ? !0 : r.speedy, this.tags = [], this.ctr = 0, this.nonce = r.nonce, this.key = r.key, this.container = r.container, this.prepend = r.prepend, this.insertionPoint = r.insertionPoint, this.before = null;
  }
  var i = a.prototype;
  return i.hydrate = function(o) {
    o.forEach(this._insertTag);
  }, i.insert = function(o) {
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(iC(this));
    var s = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var d = aC(s);
      try {
        d.insertRule(o, d.cssRules.length);
      } catch {
      }
    } else
      s.appendChild(document.createTextNode(o));
    this.ctr++;
  }, i.flush = function() {
    this.tags.forEach(function(o) {
      var s;
      return (s = o.parentNode) == null ? void 0 : s.removeChild(o);
    }), this.tags = [], this.ctr = 0;
  }, a;
})(), Dn = "-ms-", vf = "-moz-", ot = "-webkit-", v0 = "comm", Xp = "rule", Ip = "decl", rC = "@import", y0 = "@keyframes", oC = "@layer", sC = Math.abs, Hf = String.fromCharCode, uC = Object.assign;
function cC(a, i) {
  return On(a, 0) ^ 45 ? (((i << 2 ^ On(a, 0)) << 2 ^ On(a, 1)) << 2 ^ On(a, 2)) << 2 ^ On(a, 3) : 0;
}
function b0(a) {
  return a.trim();
}
function fC(a, i) {
  return (a = i.exec(a)) ? a[0] : a;
}
function st(a, i, r) {
  return a.replace(i, r);
}
function yp(a, i) {
  return a.indexOf(i);
}
function On(a, i) {
  return a.charCodeAt(i) | 0;
}
function Ps(a, i, r) {
  return a.slice(i, r);
}
function ci(a) {
  return a.length;
}
function Fp(a) {
  return a.length;
}
function Xc(a, i) {
  return i.push(a), a;
}
function dC(a, i) {
  return a.map(i).join("");
}
var Vf = 1, go = 1, _0 = 0, ia = 0, tn = 0, Co = "";
function Uf(a, i, r, o, s, d, h) {
  return { value: a, root: i, parent: r, type: o, props: s, children: d, line: Vf, column: go, length: h, return: "" };
}
function Xs(a, i) {
  return uC(Uf("", null, null, "", null, null, 0), a, { length: -a.length }, i);
}
function hC() {
  return tn;
}
function pC() {
  return tn = ia > 0 ? On(Co, --ia) : 0, go--, tn === 10 && (go = 1, Vf--), tn;
}
function fa() {
  return tn = ia < _0 ? On(Co, ia++) : 0, go++, tn === 10 && (go = 1, Vf++), tn;
}
function hi() {
  return On(Co, ia);
}
function ef() {
  return ia;
}
function su(a, i) {
  return Ps(Co, a, i);
}
function eu(a) {
  switch (a) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function S0(a) {
  return Vf = go = 1, _0 = ci(Co = a), ia = 0, [];
}
function E0(a) {
  return Co = "", a;
}
function tf(a) {
  return b0(su(ia - 1, bp(a === 91 ? a + 2 : a === 40 ? a + 1 : a)));
}
function mC(a) {
  for (; (tn = hi()) && tn < 33; )
    fa();
  return eu(a) > 2 || eu(tn) > 3 ? "" : " ";
}
function gC(a, i) {
  for (; --i && fa() && !(tn < 48 || tn > 102 || tn > 57 && tn < 65 || tn > 70 && tn < 97); )
    ;
  return su(a, ef() + (i < 6 && hi() == 32 && fa() == 32));
}
function bp(a) {
  for (; fa(); )
    switch (tn) {
      // ] ) " '
      case a:
        return ia;
      // " '
      case 34:
      case 39:
        a !== 34 && a !== 39 && bp(tn);
        break;
      // (
      case 40:
        a === 41 && bp(a);
        break;
      // \
      case 92:
        fa();
        break;
    }
  return ia;
}
function vC(a, i) {
  for (; fa() && a + tn !== 57; )
    if (a + tn === 84 && hi() === 47)
      break;
  return "/*" + su(i, ia - 1) + "*" + Hf(a === 47 ? a : fa());
}
function yC(a) {
  for (; !eu(hi()); )
    fa();
  return su(a, ia);
}
function bC(a) {
  return E0(nf("", null, null, null, [""], a = S0(a), 0, [0], a));
}
function nf(a, i, r, o, s, d, h, y, m) {
  for (var v = 0, C = 0, x = h, A = 0, R = 0, L = 0, N = 1, j = 1, H = 1, Q = 0, X = "", W = s, U = d, Z = o, B = X; j; )
    switch (L = Q, Q = fa()) {
      // (
      case 40:
        if (L != 108 && On(B, x - 1) == 58) {
          yp(B += st(tf(Q), "&", "&\f"), "&\f") != -1 && (H = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        B += tf(Q);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        B += mC(L);
        break;
      // \
      case 92:
        B += gC(ef() - 1, 7);
        continue;
      // /
      case 47:
        switch (hi()) {
          case 42:
          case 47:
            Xc(_C(vC(fa(), ef()), i, r), m);
            break;
          default:
            B += "/";
        }
        break;
      // {
      case 123 * N:
        y[v++] = ci(B) * H;
      // } ; \0
      case 125 * N:
      case 59:
      case 0:
        switch (Q) {
          // \0 }
          case 0:
          case 125:
            j = 0;
          // ;
          case 59 + C:
            H == -1 && (B = st(B, /\f/g, "")), R > 0 && ci(B) - x && Xc(R > 32 ? yy(B + ";", o, r, x - 1) : yy(st(B, " ", "") + ";", o, r, x - 2), m);
            break;
          // @ ;
          case 59:
            B += ";";
          // { rule/at-rule
          default:
            if (Xc(Z = vy(B, i, r, v, C, s, y, X, W = [], U = [], x), d), Q === 123)
              if (C === 0)
                nf(B, i, Z, Z, W, d, x, y, U);
              else
                switch (A === 99 && On(B, 3) === 110 ? 100 : A) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    nf(a, Z, Z, o && Xc(vy(a, Z, Z, 0, 0, s, y, X, s, W = [], x), U), s, U, x, y, o ? W : U);
                    break;
                  default:
                    nf(B, Z, Z, Z, [""], U, 0, y, U);
                }
        }
        v = C = R = 0, N = H = 1, X = B = "", x = h;
        break;
      // :
      case 58:
        x = 1 + ci(B), R = L;
      default:
        if (N < 1) {
          if (Q == 123)
            --N;
          else if (Q == 125 && N++ == 0 && pC() == 125)
            continue;
        }
        switch (B += Hf(Q), Q * N) {
          // &
          case 38:
            H = C > 0 ? 1 : (B += "\f", -1);
            break;
          // ,
          case 44:
            y[v++] = (ci(B) - 1) * H, H = 1;
            break;
          // @
          case 64:
            hi() === 45 && (B += tf(fa())), A = hi(), C = x = ci(X = B += yC(ef())), Q++;
            break;
          // -
          case 45:
            L === 45 && ci(B) == 2 && (N = 0);
        }
    }
  return d;
}
function vy(a, i, r, o, s, d, h, y, m, v, C) {
  for (var x = s - 1, A = s === 0 ? d : [""], R = Fp(A), L = 0, N = 0, j = 0; L < o; ++L)
    for (var H = 0, Q = Ps(a, x + 1, x = sC(N = h[L])), X = a; H < R; ++H)
      (X = b0(N > 0 ? A[H] + " " + Q : st(Q, /&\f/g, A[H]))) && (m[j++] = X);
  return Uf(a, i, r, s === 0 ? Xp : y, m, v, C);
}
function _C(a, i, r) {
  return Uf(a, i, r, v0, Hf(hC()), Ps(a, 2, -2), 0);
}
function yy(a, i, r, o) {
  return Uf(a, i, r, Ip, Ps(a, 0, o), Ps(a, o + 1, -1), o);
}
function mo(a, i) {
  for (var r = "", o = Fp(a), s = 0; s < o; s++)
    r += i(a[s], s, a, i) || "";
  return r;
}
function SC(a, i, r, o) {
  switch (a.type) {
    case oC:
      if (a.children.length) break;
    case rC:
    case Ip:
      return a.return = a.return || a.value;
    case v0:
      return "";
    case y0:
      return a.return = a.value + "{" + mo(a.children, o) + "}";
    case Xp:
      a.value = a.props.join(",");
  }
  return ci(r = mo(a.children, o)) ? a.return = a.value + "{" + r + "}" : "";
}
function EC(a) {
  var i = Fp(a);
  return function(r, o, s, d) {
    for (var h = "", y = 0; y < i; y++)
      h += a[y](r, o, s, d) || "";
    return h;
  };
}
function CC(a) {
  return function(i) {
    i.root || (i = i.return) && a(i);
  };
}
function OC(a) {
  var i = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return i[r] === void 0 && (i[r] = a(r)), i[r];
  };
}
var xC = function(i, r, o) {
  for (var s = 0, d = 0; s = d, d = hi(), s === 38 && d === 12 && (r[o] = 1), !eu(d); )
    fa();
  return su(i, ia);
}, TC = function(i, r) {
  var o = -1, s = 44;
  do
    switch (eu(s)) {
      case 0:
        s === 38 && hi() === 12 && (r[o] = 1), i[o] += xC(ia - 1, r, o);
        break;
      case 2:
        i[o] += tf(s);
        break;
      case 4:
        if (s === 44) {
          i[++o] = hi() === 58 ? "&\f" : "", r[o] = i[o].length;
          break;
        }
      // fallthrough
      default:
        i[o] += Hf(s);
    }
  while (s = fa());
  return i;
}, AC = function(i, r) {
  return E0(TC(S0(i), r));
}, by = /* @__PURE__ */ new WeakMap(), wC = function(i) {
  if (!(i.type !== "rule" || !i.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  i.length < 1)) {
    for (var r = i.value, o = i.parent, s = i.column === o.column && i.line === o.line; o.type !== "rule"; )
      if (o = o.parent, !o) return;
    if (!(i.props.length === 1 && r.charCodeAt(0) !== 58 && !by.get(o)) && !s) {
      by.set(i, !0);
      for (var d = [], h = AC(r, d), y = o.props, m = 0, v = 0; m < h.length; m++)
        for (var C = 0; C < y.length; C++, v++)
          i.props[v] = d[m] ? h[m].replace(/&\f/g, y[C]) : y[C] + " " + h[m];
    }
  }
}, MC = function(i) {
  if (i.type === "decl") {
    var r = i.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (i.return = "", i.value = "");
  }
};
function C0(a, i) {
  switch (cC(a, i)) {
    // color-adjust
    case 5103:
      return ot + "print-" + a + a;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return ot + a + a;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ot + a + vf + a + Dn + a + a;
    // flex, flex-direction
    case 6828:
    case 4268:
      return ot + a + Dn + a + a;
    // order
    case 6165:
      return ot + a + Dn + "flex-" + a + a;
    // align-items
    case 5187:
      return ot + a + st(a, /(\w+).+(:[^]+)/, ot + "box-$1$2" + Dn + "flex-$1$2") + a;
    // align-self
    case 5443:
      return ot + a + Dn + "flex-item-" + st(a, /flex-|-self/, "") + a;
    // align-content
    case 4675:
      return ot + a + Dn + "flex-line-pack" + st(a, /align-content|flex-|-self/, "") + a;
    // flex-shrink
    case 5548:
      return ot + a + Dn + st(a, "shrink", "negative") + a;
    // flex-basis
    case 5292:
      return ot + a + Dn + st(a, "basis", "preferred-size") + a;
    // flex-grow
    case 6060:
      return ot + "box-" + st(a, "-grow", "") + ot + a + Dn + st(a, "grow", "positive") + a;
    // transition
    case 4554:
      return ot + st(a, /([^-])(transform)/g, "$1" + ot + "$2") + a;
    // cursor
    case 6187:
      return st(st(st(a, /(zoom-|grab)/, ot + "$1"), /(image-set)/, ot + "$1"), a, "") + a;
    // background, background-image
    case 5495:
    case 3959:
      return st(a, /(image-set\([^]*)/, ot + "$1$`$1");
    // justify-content
    case 4968:
      return st(st(a, /(.+:)(flex-)?(.*)/, ot + "box-pack:$3" + Dn + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ot + a + a;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return st(a, /(.+)-inline(.+)/, ot + "$1$2") + a;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (ci(a) - 1 - i > 6) switch (On(a, i + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (On(a, i + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return st(a, /(.+:)(.+)-([^]+)/, "$1" + ot + "$2-$3$1" + vf + (On(a, i + 3) == 108 ? "$3" : "$2-$3")) + a;
        // (s)tretch
        case 115:
          return ~yp(a, "stretch") ? C0(st(a, "stretch", "fill-available"), i) + a : a;
      }
      break;
    // position: sticky
    case 4949:
      if (On(a, i + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (On(a, ci(a) - 3 - (~yp(a, "!important") && 10))) {
        // stic(k)y
        case 107:
          return st(a, ":", ":" + ot) + a;
        // (inline-)?fl(e)x
        case 101:
          return st(a, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ot + (On(a, 14) === 45 ? "inline-" : "") + "box$3$1" + ot + "$2$3$1" + Dn + "$2box$3") + a;
      }
      break;
    // writing-mode
    case 5936:
      switch (On(a, i + 11)) {
        // vertical-l(r)
        case 114:
          return ot + a + Dn + st(a, /[svh]\w+-[tblr]{2}/, "tb") + a;
        // vertical-r(l)
        case 108:
          return ot + a + Dn + st(a, /[svh]\w+-[tblr]{2}/, "tb-rl") + a;
        // horizontal(-)tb
        case 45:
          return ot + a + Dn + st(a, /[svh]\w+-[tblr]{2}/, "lr") + a;
      }
      return ot + a + Dn + a + a;
  }
  return a;
}
var RC = function(i, r, o, s) {
  if (i.length > -1 && !i.return) switch (i.type) {
    case Ip:
      i.return = C0(i.value, i.length);
      break;
    case y0:
      return mo([Xs(i, {
        value: st(i.value, "@", "@" + ot)
      })], s);
    case Xp:
      if (i.length) return dC(i.props, function(d) {
        switch (fC(d, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return mo([Xs(i, {
              props: [st(d, /:(read-\w+)/, ":" + vf + "$1")]
            })], s);
          // :placeholder
          case "::placeholder":
            return mo([Xs(i, {
              props: [st(d, /:(plac\w+)/, ":" + ot + "input-$1")]
            }), Xs(i, {
              props: [st(d, /:(plac\w+)/, ":" + vf + "$1")]
            }), Xs(i, {
              props: [st(d, /:(plac\w+)/, Dn + "input-$1")]
            })], s);
        }
        return "";
      });
  }
}, DC = [RC], NC = function(i) {
  var r = i.key;
  if (r === "css") {
    var o = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(o, function(N) {
      var j = N.getAttribute("data-emotion");
      j.indexOf(" ") !== -1 && (document.head.appendChild(N), N.setAttribute("data-s", ""));
    });
  }
  var s = i.stylisPlugins || DC, d = {}, h, y = [];
  h = i.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(N) {
      for (var j = N.getAttribute("data-emotion").split(" "), H = 1; H < j.length; H++)
        d[j[H]] = !0;
      y.push(N);
    }
  );
  var m, v = [wC, MC];
  {
    var C, x = [SC, CC(function(N) {
      C.insert(N);
    })], A = EC(v.concat(s, x)), R = function(j) {
      return mo(bC(j), A);
    };
    m = function(j, H, Q, X) {
      C = Q, R(j ? j + "{" + H.styles + "}" : H.styles), X && (L.inserted[H.name] = !0);
    };
  }
  var L = {
    key: r,
    sheet: new lC({
      key: r,
      container: h,
      nonce: i.nonce,
      speedy: i.speedy,
      prepend: i.prepend,
      insertionPoint: i.insertionPoint
    }),
    nonce: i.nonce,
    inserted: d,
    registered: {},
    insert: m
  };
  return L.sheet.hydrate(y), L;
}, Ih = { exports: {} }, pt = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var _y;
function jC() {
  if (_y) return pt;
  _y = 1;
  var a = typeof Symbol == "function" && Symbol.for, i = a ? Symbol.for("react.element") : 60103, r = a ? Symbol.for("react.portal") : 60106, o = a ? Symbol.for("react.fragment") : 60107, s = a ? Symbol.for("react.strict_mode") : 60108, d = a ? Symbol.for("react.profiler") : 60114, h = a ? Symbol.for("react.provider") : 60109, y = a ? Symbol.for("react.context") : 60110, m = a ? Symbol.for("react.async_mode") : 60111, v = a ? Symbol.for("react.concurrent_mode") : 60111, C = a ? Symbol.for("react.forward_ref") : 60112, x = a ? Symbol.for("react.suspense") : 60113, A = a ? Symbol.for("react.suspense_list") : 60120, R = a ? Symbol.for("react.memo") : 60115, L = a ? Symbol.for("react.lazy") : 60116, N = a ? Symbol.for("react.block") : 60121, j = a ? Symbol.for("react.fundamental") : 60117, H = a ? Symbol.for("react.responder") : 60118, Q = a ? Symbol.for("react.scope") : 60119;
  function X(U) {
    if (typeof U == "object" && U !== null) {
      var Z = U.$$typeof;
      switch (Z) {
        case i:
          switch (U = U.type, U) {
            case m:
            case v:
            case o:
            case d:
            case s:
            case x:
              return U;
            default:
              switch (U = U && U.$$typeof, U) {
                case y:
                case C:
                case L:
                case R:
                case h:
                  return U;
                default:
                  return Z;
              }
          }
        case r:
          return Z;
      }
    }
  }
  function W(U) {
    return X(U) === v;
  }
  return pt.AsyncMode = m, pt.ConcurrentMode = v, pt.ContextConsumer = y, pt.ContextProvider = h, pt.Element = i, pt.ForwardRef = C, pt.Fragment = o, pt.Lazy = L, pt.Memo = R, pt.Portal = r, pt.Profiler = d, pt.StrictMode = s, pt.Suspense = x, pt.isAsyncMode = function(U) {
    return W(U) || X(U) === m;
  }, pt.isConcurrentMode = W, pt.isContextConsumer = function(U) {
    return X(U) === y;
  }, pt.isContextProvider = function(U) {
    return X(U) === h;
  }, pt.isElement = function(U) {
    return typeof U == "object" && U !== null && U.$$typeof === i;
  }, pt.isForwardRef = function(U) {
    return X(U) === C;
  }, pt.isFragment = function(U) {
    return X(U) === o;
  }, pt.isLazy = function(U) {
    return X(U) === L;
  }, pt.isMemo = function(U) {
    return X(U) === R;
  }, pt.isPortal = function(U) {
    return X(U) === r;
  }, pt.isProfiler = function(U) {
    return X(U) === d;
  }, pt.isStrictMode = function(U) {
    return X(U) === s;
  }, pt.isSuspense = function(U) {
    return X(U) === x;
  }, pt.isValidElementType = function(U) {
    return typeof U == "string" || typeof U == "function" || U === o || U === v || U === d || U === s || U === x || U === A || typeof U == "object" && U !== null && (U.$$typeof === L || U.$$typeof === R || U.$$typeof === h || U.$$typeof === y || U.$$typeof === C || U.$$typeof === j || U.$$typeof === H || U.$$typeof === Q || U.$$typeof === N);
  }, pt.typeOf = X, pt;
}
var Sy;
function zC() {
  return Sy || (Sy = 1, Ih.exports = jC()), Ih.exports;
}
var Fh, Ey;
function LC() {
  if (Ey) return Fh;
  Ey = 1;
  var a = zC(), i = {
    childContextTypes: !0,
    contextType: !0,
    contextTypes: !0,
    defaultProps: !0,
    displayName: !0,
    getDefaultProps: !0,
    getDerivedStateFromError: !0,
    getDerivedStateFromProps: !0,
    mixins: !0,
    propTypes: !0,
    type: !0
  }, r = {
    name: !0,
    length: !0,
    prototype: !0,
    caller: !0,
    callee: !0,
    arguments: !0,
    arity: !0
  }, o = {
    $$typeof: !0,
    render: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0
  }, s = {
    $$typeof: !0,
    compare: !0,
    defaultProps: !0,
    displayName: !0,
    propTypes: !0,
    type: !0
  }, d = {};
  d[a.ForwardRef] = o, d[a.Memo] = s;
  function h(L) {
    return a.isMemo(L) ? s : d[L.$$typeof] || i;
  }
  var y = Object.defineProperty, m = Object.getOwnPropertyNames, v = Object.getOwnPropertySymbols, C = Object.getOwnPropertyDescriptor, x = Object.getPrototypeOf, A = Object.prototype;
  function R(L, N, j) {
    if (typeof N != "string") {
      if (A) {
        var H = x(N);
        H && H !== A && R(L, H, j);
      }
      var Q = m(N);
      v && (Q = Q.concat(v(N)));
      for (var X = h(L), W = h(N), U = 0; U < Q.length; ++U) {
        var Z = Q[U];
        if (!r[Z] && !(j && j[Z]) && !(W && W[Z]) && !(X && X[Z])) {
          var B = C(N, Z);
          try {
            y(L, Z, B);
          } catch {
          }
        }
      }
    }
    return L;
  }
  return Fh = R, Fh;
}
LC();
var HC = !0;
function VC(a, i, r) {
  var o = "";
  return r.split(" ").forEach(function(s) {
    a[s] !== void 0 ? i.push(a[s] + ";") : s && (o += s + " ");
  }), o;
}
var O0 = function(i, r, o) {
  var s = i.key + "-" + r.name;
  // we only need to add the styles to the registered cache if the
  // class name could be used further down
  // the tree but if it's a string tag, we know it won't
  // so we don't have to add it to registered cache.
  // this improves memory usage since we can avoid storing the whole style string
  (o === !1 || // we need to always store it if we're in compat mode and
  // in node since emotion-server relies on whether a style is in
  // the registered cache to know whether a style is global or not
  // also, note that this check will be dead code eliminated in the browser
  HC === !1) && i.registered[s] === void 0 && (i.registered[s] = r.styles);
}, UC = function(i, r, o) {
  O0(i, r, o);
  var s = i.key + "-" + r.name;
  if (i.inserted[r.name] === void 0) {
    var d = r;
    do
      i.insert(r === d ? "." + s : "", d, i.sheet, !0), d = d.next;
    while (d !== void 0);
  }
};
function BC(a) {
  for (var i = 0, r, o = 0, s = a.length; s >= 4; ++o, s -= 4)
    r = a.charCodeAt(o) & 255 | (a.charCodeAt(++o) & 255) << 8 | (a.charCodeAt(++o) & 255) << 16 | (a.charCodeAt(++o) & 255) << 24, r = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16), r ^= /* k >>> r: */
    r >>> 24, i = /* Math.imul(k, m): */
    (r & 65535) * 1540483477 + ((r >>> 16) * 59797 << 16) ^ /* Math.imul(h, m): */
    (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16);
  switch (s) {
    case 3:
      i ^= (a.charCodeAt(o + 2) & 255) << 16;
    case 2:
      i ^= (a.charCodeAt(o + 1) & 255) << 8;
    case 1:
      i ^= a.charCodeAt(o) & 255, i = /* Math.imul(h, m): */
      (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16);
  }
  return i ^= i >>> 13, i = /* Math.imul(h, m): */
  (i & 65535) * 1540483477 + ((i >>> 16) * 59797 << 16), ((i ^ i >>> 15) >>> 0).toString(36);
}
var $C = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  scale: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, kC = /[A-Z]|^ms/g, qC = /_EMO_([^_]+?)_([^]*?)_EMO_/g, x0 = function(i) {
  return i.charCodeAt(1) === 45;
}, Cy = function(i) {
  return i != null && typeof i != "boolean";
}, Qh = /* @__PURE__ */ OC(function(a) {
  return x0(a) ? a : a.replace(kC, "-$&").toLowerCase();
}), Oy = function(i, r) {
  switch (i) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(qC, function(o, s, d) {
          return fi = {
            name: s,
            styles: d,
            next: fi
          }, s;
        });
  }
  return $C[i] !== 1 && !x0(i) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function tu(a, i, r) {
  if (r == null)
    return "";
  var o = r;
  if (o.__emotion_styles !== void 0)
    return o;
  switch (typeof r) {
    case "boolean":
      return "";
    case "object": {
      var s = r;
      if (s.anim === 1)
        return fi = {
          name: s.name,
          styles: s.styles,
          next: fi
        }, s.name;
      var d = r;
      if (d.styles !== void 0) {
        var h = d.next;
        if (h !== void 0)
          for (; h !== void 0; )
            fi = {
              name: h.name,
              styles: h.styles,
              next: fi
            }, h = h.next;
        var y = d.styles + ";";
        return y;
      }
      return YC(a, i, r);
    }
    case "function": {
      if (a !== void 0) {
        var m = fi, v = r(a);
        return fi = m, tu(a, i, v);
      }
      break;
    }
  }
  var C = r;
  return C;
}
function YC(a, i, r) {
  var o = "";
  if (Array.isArray(r))
    for (var s = 0; s < r.length; s++)
      o += tu(a, i, r[s]) + ";";
  else
    for (var d in r) {
      var h = r[d];
      if (typeof h != "object") {
        var y = h;
        Cy(y) && (o += Qh(d) + ":" + Oy(d, y) + ";");
      } else if (Array.isArray(h) && typeof h[0] == "string" && i == null)
        for (var m = 0; m < h.length; m++)
          Cy(h[m]) && (o += Qh(d) + ":" + Oy(d, h[m]) + ";");
      else {
        var v = tu(a, i, h);
        switch (d) {
          case "animation":
          case "animationName": {
            o += Qh(d) + ":" + v + ";";
            break;
          }
          default:
            o += d + "{" + v + "}";
        }
      }
    }
  return o;
}
var xy = /label:\s*([^\s;{]+)\s*(;|$)/g, fi;
function T0(a, i, r) {
  if (a.length === 1 && typeof a[0] == "object" && a[0] !== null && a[0].styles !== void 0)
    return a[0];
  var o = !0, s = "";
  fi = void 0;
  var d = a[0];
  if (d == null || d.raw === void 0)
    o = !1, s += tu(r, i, d);
  else {
    var h = d;
    s += h[0];
  }
  for (var y = 1; y < a.length; y++)
    if (s += tu(r, i, a[y]), o) {
      var m = d;
      s += m[y];
    }
  xy.lastIndex = 0;
  for (var v = "", C; (C = xy.exec(s)) !== null; )
    v += "-" + C[1];
  var x = BC(s) + v;
  return {
    name: x,
    styles: s,
    next: fi
  };
}
var GC = function(i) {
  return i();
}, XC = Gv.useInsertionEffect ? Gv.useInsertionEffect : !1, IC = XC || GC, A0 = /* @__PURE__ */ S.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ NC({
    key: "css"
  }) : null
);
A0.Provider;
var FC = function(i) {
  return /* @__PURE__ */ S.forwardRef(function(r, o) {
    var s = S.useContext(A0);
    return i(r, s, o);
  });
}, QC = /* @__PURE__ */ S.createContext({}), Qp = {}.hasOwnProperty, _p = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", ZC = function(i, r) {
  var o = {};
  for (var s in r)
    Qp.call(r, s) && (o[s] = r[s]);
  return o[_p] = i, o;
}, KC = function(i) {
  var r = i.cache, o = i.serialized, s = i.isStringTag;
  return O0(r, o, s), IC(function() {
    return UC(r, o, s);
  }), null;
}, JC = /* @__PURE__ */ FC(function(a, i, r) {
  var o = a.css;
  typeof o == "string" && i.registered[o] !== void 0 && (o = i.registered[o]);
  var s = a[_p], d = [o], h = "";
  typeof a.className == "string" ? h = VC(i.registered, d, a.className) : a.className != null && (h = a.className + " ");
  var y = T0(d, void 0, S.useContext(QC));
  h += i.key + "-" + y.name;
  var m = {};
  for (var v in a)
    Qp.call(a, v) && v !== "css" && v !== _p && (m[v] = a[v]);
  return m.className = h, r && (m.ref = r), /* @__PURE__ */ S.createElement(S.Fragment, null, /* @__PURE__ */ S.createElement(KC, {
    cache: i,
    serialized: y,
    isStringTag: typeof s == "string"
  }), /* @__PURE__ */ S.createElement(s, m));
}), WC = JC, Se = function(i, r) {
  var o = arguments;
  if (r == null || !Qp.call(r, "css"))
    return S.createElement.apply(void 0, o);
  var s = o.length, d = new Array(s);
  d[0] = WC, d[1] = ZC(i, r);
  for (var h = 2; h < s; h++)
    d[h] = o[h];
  return S.createElement.apply(null, d);
};
(function(a) {
  var i;
  i || (i = a.JSX || (a.JSX = {}));
})(Se || (Se = {}));
function Zp() {
  for (var a = arguments.length, i = new Array(a), r = 0; r < a; r++)
    i[r] = arguments[r];
  return T0(i);
}
function PC() {
  var a = Zp.apply(void 0, arguments), i = "animation-" + a.name;
  return {
    name: i,
    styles: "@keyframes " + i + "{" + a.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
function eO(a, i) {
  return i || (i = a.slice(0)), Object.freeze(Object.defineProperties(a, {
    raw: {
      value: Object.freeze(i)
    }
  }));
}
const tO = Math.min, nO = Math.max, yf = Math.round, Ic = Math.floor, bf = (a) => ({
  x: a,
  y: a
});
function aO(a) {
  const {
    x: i,
    y: r,
    width: o,
    height: s
  } = a;
  return {
    width: o,
    height: s,
    top: r,
    left: i,
    right: i + o,
    bottom: r + s,
    x: i,
    y: r
  };
}
function Bf() {
  return typeof window < "u";
}
function w0(a) {
  return R0(a) ? (a.nodeName || "").toLowerCase() : "#document";
}
function $i(a) {
  var i;
  return (a == null || (i = a.ownerDocument) == null ? void 0 : i.defaultView) || window;
}
function M0(a) {
  var i;
  return (i = (R0(a) ? a.ownerDocument : a.document) || window.document) == null ? void 0 : i.documentElement;
}
function R0(a) {
  return Bf() ? a instanceof Node || a instanceof $i(a).Node : !1;
}
function iO(a) {
  return Bf() ? a instanceof Element || a instanceof $i(a).Element : !1;
}
function Kp(a) {
  return Bf() ? a instanceof HTMLElement || a instanceof $i(a).HTMLElement : !1;
}
function Ty(a) {
  return !Bf() || typeof ShadowRoot > "u" ? !1 : a instanceof ShadowRoot || a instanceof $i(a).ShadowRoot;
}
const lO = /* @__PURE__ */ new Set(["inline", "contents"]);
function D0(a) {
  const {
    overflow: i,
    overflowX: r,
    overflowY: o,
    display: s
  } = Jp(a);
  return /auto|scroll|overlay|hidden|clip/.test(i + o + r) && !lO.has(s);
}
function rO() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const oO = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function sO(a) {
  return oO.has(w0(a));
}
function Jp(a) {
  return $i(a).getComputedStyle(a);
}
function uO(a) {
  if (w0(a) === "html")
    return a;
  const i = (
    // Step into the shadow DOM of the parent of a slotted node.
    a.assignedSlot || // DOM Element detected.
    a.parentNode || // ShadowRoot detected.
    Ty(a) && a.host || // Fallback.
    M0(a)
  );
  return Ty(i) ? i.host : i;
}
function N0(a) {
  const i = uO(a);
  return sO(i) ? a.ownerDocument ? a.ownerDocument.body : a.body : Kp(i) && D0(i) ? i : N0(i);
}
function _f(a, i, r) {
  var o;
  i === void 0 && (i = []), r === void 0 && (r = !0);
  const s = N0(a), d = s === ((o = a.ownerDocument) == null ? void 0 : o.body), h = $i(s);
  if (d) {
    const y = Sp(h);
    return i.concat(h, h.visualViewport || [], D0(s) ? s : [], y && r ? _f(y) : []);
  }
  return i.concat(s, _f(s, [], r));
}
function Sp(a) {
  return a.parent && Object.getPrototypeOf(a.parent) ? a.frameElement : null;
}
function cO(a) {
  const i = Jp(a);
  let r = parseFloat(i.width) || 0, o = parseFloat(i.height) || 0;
  const s = Kp(a), d = s ? a.offsetWidth : r, h = s ? a.offsetHeight : o, y = yf(r) !== d || yf(o) !== h;
  return y && (r = d, o = h), {
    width: r,
    height: o,
    $: y
  };
}
function Wp(a) {
  return iO(a) ? a : a.contextElement;
}
function Ay(a) {
  const i = Wp(a);
  if (!Kp(i))
    return bf(1);
  const r = i.getBoundingClientRect(), {
    width: o,
    height: s,
    $: d
  } = cO(i);
  let h = (d ? yf(r.width) : r.width) / o, y = (d ? yf(r.height) : r.height) / s;
  return (!h || !Number.isFinite(h)) && (h = 1), (!y || !Number.isFinite(y)) && (y = 1), {
    x: h,
    y
  };
}
const fO = /* @__PURE__ */ bf(0);
function dO(a) {
  const i = $i(a);
  return !rO() || !i.visualViewport ? fO : {
    x: i.visualViewport.offsetLeft,
    y: i.visualViewport.offsetTop
  };
}
function hO(a, i, r) {
  return !1;
}
function wy(a, i, r, o) {
  i === void 0 && (i = !1);
  const s = a.getBoundingClientRect(), d = Wp(a);
  let h = bf(1);
  i && (h = Ay(a));
  const y = hO() ? dO(d) : bf(0);
  let m = (s.left + y.x) / h.x, v = (s.top + y.y) / h.y, C = s.width / h.x, x = s.height / h.y;
  if (d) {
    const A = $i(d), R = o;
    let L = A, N = Sp(L);
    for (; N && o && R !== L; ) {
      const j = Ay(N), H = N.getBoundingClientRect(), Q = Jp(N), X = H.left + (N.clientLeft + parseFloat(Q.paddingLeft)) * j.x, W = H.top + (N.clientTop + parseFloat(Q.paddingTop)) * j.y;
      m *= j.x, v *= j.y, C *= j.x, x *= j.y, m += X, v += W, L = $i(N), N = Sp(L);
    }
  }
  return aO({
    width: C,
    height: x,
    x: m,
    y: v
  });
}
function j0(a, i) {
  return a.x === i.x && a.y === i.y && a.width === i.width && a.height === i.height;
}
function pO(a, i) {
  let r = null, o;
  const s = M0(a);
  function d() {
    var y;
    clearTimeout(o), (y = r) == null || y.disconnect(), r = null;
  }
  function h(y, m) {
    y === void 0 && (y = !1), m === void 0 && (m = 1), d();
    const v = a.getBoundingClientRect(), {
      left: C,
      top: x,
      width: A,
      height: R
    } = v;
    if (y || i(), !A || !R)
      return;
    const L = Ic(x), N = Ic(s.clientWidth - (C + A)), j = Ic(s.clientHeight - (x + R)), H = Ic(C), X = {
      rootMargin: -L + "px " + -N + "px " + -j + "px " + -H + "px",
      threshold: nO(0, tO(1, m)) || 1
    };
    let W = !0;
    function U(Z) {
      const B = Z[0].intersectionRatio;
      if (B !== m) {
        if (!W)
          return h();
        B ? h(!1, B) : o = setTimeout(() => {
          h(!1, 1e-7);
        }, 1e3);
      }
      B === 1 && !j0(v, a.getBoundingClientRect()) && h(), W = !1;
    }
    try {
      r = new IntersectionObserver(U, {
        ...X,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(U, X);
    }
    r.observe(a);
  }
  return h(!0), d;
}
function mO(a, i, r, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: d = !0,
    elementResize: h = typeof ResizeObserver == "function",
    layoutShift: y = typeof IntersectionObserver == "function",
    animationFrame: m = !1
  } = o, v = Wp(a), C = s || d ? [...v ? _f(v) : [], ..._f(i)] : [];
  C.forEach((H) => {
    s && H.addEventListener("scroll", r, {
      passive: !0
    }), d && H.addEventListener("resize", r);
  });
  const x = v && y ? pO(v, r) : null;
  let A = -1, R = null;
  h && (R = new ResizeObserver((H) => {
    let [Q] = H;
    Q && Q.target === v && R && (R.unobserve(i), cancelAnimationFrame(A), A = requestAnimationFrame(() => {
      var X;
      (X = R) == null || X.observe(i);
    })), r();
  }), v && !m && R.observe(v), R.observe(i));
  let L, N = m ? wy(a) : null;
  m && j();
  function j() {
    const H = wy(a);
    N && !j0(N, H) && r(), N = H, L = requestAnimationFrame(j);
  }
  return r(), () => {
    var H;
    C.forEach((Q) => {
      s && Q.removeEventListener("scroll", r), d && Q.removeEventListener("resize", r);
    }), x?.(), (H = R) == null || H.disconnect(), R = null, m && cancelAnimationFrame(L);
  };
}
var Ep = S.useLayoutEffect, gO = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"], Sf = function() {
};
function vO(a, i) {
  return i ? i[0] === "-" ? a + i : a + "__" + i : a;
}
function yO(a, i) {
  for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), s = 2; s < r; s++)
    o[s - 2] = arguments[s];
  var d = [].concat(o);
  if (i && a)
    for (var h in i)
      i.hasOwnProperty(h) && i[h] && d.push("".concat(vO(a, h)));
  return d.filter(function(y) {
    return y;
  }).map(function(y) {
    return String(y).trim();
  }).join(" ");
}
var My = function(i) {
  return AO(i) ? i.filter(Boolean) : vr(i) === "object" && i !== null ? [i] : [];
}, z0 = function(i) {
  i.className, i.clearValue, i.cx, i.getStyles, i.getClassNames, i.getValue, i.hasValue, i.isMulti, i.isRtl, i.options, i.selectOption, i.selectProps, i.setValue, i.theme;
  var r = Gn(i, gO);
  return ge({}, r);
}, Ft = function(i, r, o) {
  var s = i.cx, d = i.getStyles, h = i.getClassNames, y = i.className;
  return {
    css: d(r, i),
    className: s(o ?? {}, h(r, i), y)
  };
};
function $f(a) {
  return [document.documentElement, document.body, window].indexOf(a) > -1;
}
function bO(a) {
  return $f(a) ? window.innerHeight : a.clientHeight;
}
function L0(a) {
  return $f(a) ? window.pageYOffset : a.scrollTop;
}
function Ef(a, i) {
  if ($f(a)) {
    window.scrollTo(0, i);
    return;
  }
  a.scrollTop = i;
}
function _O(a) {
  var i = getComputedStyle(a), r = i.position === "absolute", o = /(auto|scroll)/;
  if (i.position === "fixed") return document.documentElement;
  for (var s = a; s = s.parentElement; )
    if (i = getComputedStyle(s), !(r && i.position === "static") && o.test(i.overflow + i.overflowY + i.overflowX))
      return s;
  return document.documentElement;
}
function SO(a, i, r, o) {
  return r * ((a = a / o - 1) * a * a + 1) + i;
}
function Fc(a, i) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Sf, s = L0(a), d = i - s, h = 10, y = 0;
  function m() {
    y += h;
    var v = SO(y, s, d, r);
    Ef(a, v), y < r ? window.requestAnimationFrame(m) : o(a);
  }
  m();
}
function Ry(a, i) {
  var r = a.getBoundingClientRect(), o = i.getBoundingClientRect(), s = i.offsetHeight / 3;
  o.bottom + s > r.bottom ? Ef(a, Math.min(i.offsetTop + i.clientHeight - a.offsetHeight + s, a.scrollHeight)) : o.top - s < r.top && Ef(a, Math.max(i.offsetTop - s, 0));
}
function EO(a) {
  var i = a.getBoundingClientRect();
  return {
    bottom: i.bottom,
    height: i.height,
    left: i.left,
    right: i.right,
    top: i.top,
    width: i.width
  };
}
function Dy() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function CO() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch {
    return !1;
  }
}
var H0 = !1, OO = {
  get passive() {
    return H0 = !0;
  }
}, Qc = typeof window < "u" ? window : {};
Qc.addEventListener && Qc.removeEventListener && (Qc.addEventListener("p", Sf, OO), Qc.removeEventListener("p", Sf, !1));
var xO = H0;
function TO(a) {
  return a != null;
}
function AO(a) {
  return Array.isArray(a);
}
function Zc(a, i, r) {
  return a ? i : r;
}
var wO = function(i) {
  for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
    o[s - 1] = arguments[s];
  var d = Object.entries(i).filter(function(h) {
    var y = Ta(h, 1), m = y[0];
    return !o.includes(m);
  });
  return d.reduce(function(h, y) {
    var m = Ta(y, 2), v = m[0], C = m[1];
    return h[v] = C, h;
  }, {});
}, MO = ["children", "innerProps"], RO = ["children", "innerProps"];
function DO(a) {
  var i = a.maxHeight, r = a.menuEl, o = a.minHeight, s = a.placement, d = a.shouldScroll, h = a.isFixedPosition, y = a.controlHeight, m = _O(r), v = {
    placement: "bottom",
    maxHeight: i
  };
  if (!r || !r.offsetParent) return v;
  var C = m.getBoundingClientRect(), x = C.height, A = r.getBoundingClientRect(), R = A.bottom, L = A.height, N = A.top, j = r.offsetParent.getBoundingClientRect(), H = j.top, Q = h ? window.innerHeight : bO(m), X = L0(m), W = parseInt(getComputedStyle(r).marginBottom, 10), U = parseInt(getComputedStyle(r).marginTop, 10), Z = H - U, B = Q - N, oe = Z + X, we = x - X - N, je = R - Q + X + W, ke = X + N - U, Ve = 160;
  switch (s) {
    case "auto":
    case "bottom":
      if (B >= L)
        return {
          placement: "bottom",
          maxHeight: i
        };
      if (we >= L && !h)
        return d && Fc(m, je, Ve), {
          placement: "bottom",
          maxHeight: i
        };
      if (!h && we >= o || h && B >= o) {
        d && Fc(m, je, Ve);
        var ut = h ? B - W : we - W;
        return {
          placement: "bottom",
          maxHeight: ut
        };
      }
      if (s === "auto" || h) {
        var tt = i, Ue = h ? Z : oe;
        return Ue >= o && (tt = Math.min(Ue - W - y, i)), {
          placement: "top",
          maxHeight: tt
        };
      }
      if (s === "bottom")
        return d && Ef(m, je), {
          placement: "bottom",
          maxHeight: i
        };
      break;
    case "top":
      if (Z >= L)
        return {
          placement: "top",
          maxHeight: i
        };
      if (oe >= L && !h)
        return d && Fc(m, ke, Ve), {
          placement: "top",
          maxHeight: i
        };
      if (!h && oe >= o || h && Z >= o) {
        var k = i;
        return (!h && oe >= o || h && Z >= o) && (k = h ? Z - U : oe - U), d && Fc(m, ke, Ve), {
          placement: "top",
          maxHeight: k
        };
      }
      return {
        placement: "bottom",
        maxHeight: i
      };
    default:
      throw new Error('Invalid placement provided "'.concat(s, '".'));
  }
  return v;
}
function NO(a) {
  var i = {
    bottom: "top",
    top: "bottom"
  };
  return a ? i[a] : "bottom";
}
var V0 = function(i) {
  return i === "auto" ? "bottom" : i;
}, jO = function(i, r) {
  var o, s = i.placement, d = i.theme, h = d.borderRadius, y = d.spacing, m = d.colors;
  return ge((o = {
    label: "menu"
  }, Zs(o, NO(s), "100%"), Zs(o, "position", "absolute"), Zs(o, "width", "100%"), Zs(o, "zIndex", 1), o), r ? {} : {
    backgroundColor: m.neutral0,
    borderRadius: h,
    boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
    marginBottom: y.menuGutter,
    marginTop: y.menuGutter
  });
}, U0 = /* @__PURE__ */ S.createContext(null), zO = function(i) {
  var r = i.children, o = i.minMenuHeight, s = i.maxMenuHeight, d = i.menuPlacement, h = i.menuPosition, y = i.menuShouldScrollIntoView, m = i.theme, v = S.useContext(U0) || {}, C = v.setPortalPlacement, x = S.useRef(null), A = S.useState(s), R = Ta(A, 2), L = R[0], N = R[1], j = S.useState(null), H = Ta(j, 2), Q = H[0], X = H[1], W = m.spacing.controlHeight;
  return Ep(function() {
    var U = x.current;
    if (U) {
      var Z = h === "fixed", B = y && !Z, oe = DO({
        maxHeight: s,
        menuEl: U,
        minHeight: o,
        placement: d,
        shouldScroll: B,
        isFixedPosition: Z,
        controlHeight: W
      });
      N(oe.maxHeight), X(oe.placement), C?.(oe.placement);
    }
  }, [s, d, h, y, o, C, W]), r({
    ref: x,
    placerProps: ge(ge({}, i), {}, {
      placement: Q || V0(d),
      maxHeight: L
    })
  });
}, LO = function(i) {
  var r = i.children, o = i.innerRef, s = i.innerProps;
  return Se("div", ve({}, Ft(i, "menu", {
    menu: !0
  }), {
    ref: o
  }, s), r);
}, HO = LO, VO = function(i, r) {
  var o = i.maxHeight, s = i.theme.spacing.baseUnit;
  return ge({
    maxHeight: o,
    overflowY: "auto",
    position: "relative",
    // required for offset[Height, Top] > keyboard scroll
    WebkitOverflowScrolling: "touch"
  }, r ? {} : {
    paddingBottom: s,
    paddingTop: s
  });
}, UO = function(i) {
  var r = i.children, o = i.innerProps, s = i.innerRef, d = i.isMulti;
  return Se("div", ve({}, Ft(i, "menuList", {
    "menu-list": !0,
    "menu-list--is-multi": d
  }), {
    ref: s
  }, o), r);
}, B0 = function(i, r) {
  var o = i.theme, s = o.spacing.baseUnit, d = o.colors;
  return ge({
    textAlign: "center"
  }, r ? {} : {
    color: d.neutral40,
    padding: "".concat(s * 2, "px ").concat(s * 3, "px")
  });
}, BO = B0, $O = B0, kO = function(i) {
  var r = i.children, o = r === void 0 ? "No options" : r, s = i.innerProps, d = Gn(i, MO);
  return Se("div", ve({}, Ft(ge(ge({}, d), {}, {
    children: o,
    innerProps: s
  }), "noOptionsMessage", {
    "menu-notice": !0,
    "menu-notice--no-options": !0
  }), s), o);
}, qO = function(i) {
  var r = i.children, o = r === void 0 ? "Loading..." : r, s = i.innerProps, d = Gn(i, RO);
  return Se("div", ve({}, Ft(ge(ge({}, d), {}, {
    children: o,
    innerProps: s
  }), "loadingMessage", {
    "menu-notice": !0,
    "menu-notice--loading": !0
  }), s), o);
}, YO = function(i) {
  var r = i.rect, o = i.offset, s = i.position;
  return {
    left: r.left,
    position: s,
    top: o,
    width: r.width,
    zIndex: 1
  };
}, GO = function(i) {
  var r = i.appendTo, o = i.children, s = i.controlElement, d = i.innerProps, h = i.menuPlacement, y = i.menuPosition, m = S.useRef(null), v = S.useRef(null), C = S.useState(V0(h)), x = Ta(C, 2), A = x[0], R = x[1], L = S.useMemo(function() {
    return {
      setPortalPlacement: R
    };
  }, []), N = S.useState(null), j = Ta(N, 2), H = j[0], Q = j[1], X = S.useCallback(function() {
    if (s) {
      var B = EO(s), oe = y === "fixed" ? 0 : window.pageYOffset, we = B[A] + oe;
      (we !== H?.offset || B.left !== H?.rect.left || B.width !== H?.rect.width) && Q({
        offset: we,
        rect: B
      });
    }
  }, [s, y, A, H?.offset, H?.rect.left, H?.rect.width]);
  Ep(function() {
    X();
  }, [X]);
  var W = S.useCallback(function() {
    typeof v.current == "function" && (v.current(), v.current = null), s && m.current && (v.current = mO(s, m.current, X, {
      elementResize: "ResizeObserver" in window
    }));
  }, [s, X]);
  Ep(function() {
    W();
  }, [W]);
  var U = S.useCallback(function(B) {
    m.current = B, W();
  }, [W]);
  if (!r && y !== "fixed" || !H) return null;
  var Z = Se("div", ve({
    ref: U
  }, Ft(ge(ge({}, i), {}, {
    offset: H.offset,
    position: y,
    rect: H.rect
  }), "menuPortal", {
    "menu-portal": !0
  }), d), o);
  return Se(U0.Provider, {
    value: L
  }, r ? /* @__PURE__ */ pb.createPortal(Z, r) : Z);
}, XO = function(i) {
  var r = i.isDisabled, o = i.isRtl;
  return {
    label: "container",
    direction: o ? "rtl" : void 0,
    pointerEvents: r ? "none" : void 0,
    // cancel mouse events when disabled
    position: "relative"
  };
}, IO = function(i) {
  var r = i.children, o = i.innerProps, s = i.isDisabled, d = i.isRtl;
  return Se("div", ve({}, Ft(i, "container", {
    "--is-disabled": s,
    "--is-rtl": d
  }), o), r);
}, FO = function(i, r) {
  var o = i.theme.spacing, s = i.isMulti, d = i.hasValue, h = i.selectProps.controlShouldRenderValue;
  return ge({
    alignItems: "center",
    display: s && d && h ? "flex" : "grid",
    flex: 1,
    flexWrap: "wrap",
    WebkitOverflowScrolling: "touch",
    position: "relative",
    overflow: "hidden"
  }, r ? {} : {
    padding: "".concat(o.baseUnit / 2, "px ").concat(o.baseUnit * 2, "px")
  });
}, QO = function(i) {
  var r = i.children, o = i.innerProps, s = i.isMulti, d = i.hasValue;
  return Se("div", ve({}, Ft(i, "valueContainer", {
    "value-container": !0,
    "value-container--is-multi": s,
    "value-container--has-value": d
  }), o), r);
}, ZO = function() {
  return {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexShrink: 0
  };
}, KO = function(i) {
  var r = i.children, o = i.innerProps;
  return Se("div", ve({}, Ft(i, "indicatorsContainer", {
    indicators: !0
  }), o), r);
}, Ny, JO = ["size"], WO = ["innerProps", "isRtl", "size"], PO = {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
}, $0 = function(i) {
  var r = i.size, o = Gn(i, JO);
  return Se("svg", ve({
    height: r,
    width: r,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: PO
  }, o));
}, Pp = function(i) {
  return Se($0, ve({
    size: 20
  }, i), Se("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
}, k0 = function(i) {
  return Se($0, ve({
    size: 20
  }, i), Se("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}, q0 = function(i, r) {
  var o = i.isFocused, s = i.theme, d = s.spacing.baseUnit, h = s.colors;
  return ge({
    label: "indicatorContainer",
    display: "flex",
    transition: "color 150ms"
  }, r ? {} : {
    color: o ? h.neutral60 : h.neutral20,
    padding: d * 2,
    ":hover": {
      color: o ? h.neutral80 : h.neutral40
    }
  });
}, ex = q0, tx = function(i) {
  var r = i.children, o = i.innerProps;
  return Se("div", ve({}, Ft(i, "dropdownIndicator", {
    indicator: !0,
    "dropdown-indicator": !0
  }), o), r || Se(k0, null));
}, nx = q0, ax = function(i) {
  var r = i.children, o = i.innerProps;
  return Se("div", ve({}, Ft(i, "clearIndicator", {
    indicator: !0,
    "clear-indicator": !0
  }), o), r || Se(Pp, null));
}, ix = function(i, r) {
  var o = i.isDisabled, s = i.theme, d = s.spacing.baseUnit, h = s.colors;
  return ge({
    label: "indicatorSeparator",
    alignSelf: "stretch",
    width: 1
  }, r ? {} : {
    backgroundColor: o ? h.neutral10 : h.neutral20,
    marginBottom: d * 2,
    marginTop: d * 2
  });
}, lx = function(i) {
  var r = i.innerProps;
  return Se("span", ve({}, r, Ft(i, "indicatorSeparator", {
    "indicator-separator": !0
  })));
}, rx = PC(Ny || (Ny = eO([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))), ox = function(i, r) {
  var o = i.isFocused, s = i.size, d = i.theme, h = d.colors, y = d.spacing.baseUnit;
  return ge({
    label: "loadingIndicator",
    display: "flex",
    transition: "color 150ms",
    alignSelf: "center",
    fontSize: s,
    lineHeight: 1,
    marginRight: s,
    textAlign: "center",
    verticalAlign: "middle"
  }, r ? {} : {
    color: o ? h.neutral60 : h.neutral20,
    padding: y * 2
  });
}, Zh = function(i) {
  var r = i.delay, o = i.offset;
  return Se("span", {
    css: /* @__PURE__ */ Zp({
      animation: "".concat(rx, " 1s ease-in-out ").concat(r, "ms infinite;"),
      backgroundColor: "currentColor",
      borderRadius: "1em",
      display: "inline-block",
      marginLeft: o ? "1em" : void 0,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    }, "", "")
  });
}, sx = function(i) {
  var r = i.innerProps, o = i.isRtl, s = i.size, d = s === void 0 ? 4 : s, h = Gn(i, WO);
  return Se("div", ve({}, Ft(ge(ge({}, h), {}, {
    innerProps: r,
    isRtl: o,
    size: d
  }), "loadingIndicator", {
    indicator: !0,
    "loading-indicator": !0
  }), r), Se(Zh, {
    delay: 0,
    offset: o
  }), Se(Zh, {
    delay: 160,
    offset: !0
  }), Se(Zh, {
    delay: 320,
    offset: !o
  }));
}, ux = function(i, r) {
  var o = i.isDisabled, s = i.isFocused, d = i.theme, h = d.colors, y = d.borderRadius, m = d.spacing;
  return ge({
    label: "control",
    alignItems: "center",
    cursor: "default",
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    minHeight: m.controlHeight,
    outline: "0 !important",
    position: "relative",
    transition: "all 100ms"
  }, r ? {} : {
    backgroundColor: o ? h.neutral5 : h.neutral0,
    borderColor: o ? h.neutral10 : s ? h.primary : h.neutral20,
    borderRadius: y,
    borderStyle: "solid",
    borderWidth: 1,
    boxShadow: s ? "0 0 0 1px ".concat(h.primary) : void 0,
    "&:hover": {
      borderColor: s ? h.primary : h.neutral30
    }
  });
}, cx = function(i) {
  var r = i.children, o = i.isDisabled, s = i.isFocused, d = i.innerRef, h = i.innerProps, y = i.menuIsOpen;
  return Se("div", ve({
    ref: d
  }, Ft(i, "control", {
    control: !0,
    "control--is-disabled": o,
    "control--is-focused": s,
    "control--menu-is-open": y
  }), h, {
    "aria-disabled": o || void 0
  }), r);
}, fx = cx, dx = ["data"], hx = function(i, r) {
  var o = i.theme.spacing;
  return r ? {} : {
    paddingBottom: o.baseUnit * 2,
    paddingTop: o.baseUnit * 2
  };
}, px = function(i) {
  var r = i.children, o = i.cx, s = i.getStyles, d = i.getClassNames, h = i.Heading, y = i.headingProps, m = i.innerProps, v = i.label, C = i.theme, x = i.selectProps;
  return Se("div", ve({}, Ft(i, "group", {
    group: !0
  }), m), Se(h, ve({}, y, {
    selectProps: x,
    theme: C,
    getStyles: s,
    getClassNames: d,
    cx: o
  }), v), Se("div", null, r));
}, mx = function(i, r) {
  var o = i.theme, s = o.colors, d = o.spacing;
  return ge({
    label: "group",
    cursor: "default",
    display: "block"
  }, r ? {} : {
    color: s.neutral40,
    fontSize: "75%",
    fontWeight: 500,
    marginBottom: "0.25em",
    paddingLeft: d.baseUnit * 3,
    paddingRight: d.baseUnit * 3,
    textTransform: "uppercase"
  });
}, gx = function(i) {
  var r = z0(i);
  r.data;
  var o = Gn(r, dx);
  return Se("div", ve({}, Ft(i, "groupHeading", {
    "group-heading": !0
  }), o));
}, vx = px, yx = ["innerRef", "isDisabled", "isHidden", "inputClassName"], bx = function(i, r) {
  var o = i.isDisabled, s = i.value, d = i.theme, h = d.spacing, y = d.colors;
  return ge(ge({
    visibility: o ? "hidden" : "visible",
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: s ? "translateZ(0)" : ""
  }, _x), r ? {} : {
    margin: h.baseUnit / 2,
    paddingBottom: h.baseUnit / 2,
    paddingTop: h.baseUnit / 2,
    color: y.neutral80
  });
}, Y0 = {
  gridArea: "1 / 2",
  font: "inherit",
  minWidth: "2px",
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
}, _x = {
  flex: "1 1 auto",
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: "0 min-content",
  "&:after": ge({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, Y0)
}, Sx = function(i) {
  return ge({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: i ? 0 : 1,
    width: "100%"
  }, Y0);
}, Ex = function(i) {
  var r = i.cx, o = i.value, s = z0(i), d = s.innerRef, h = s.isDisabled, y = s.isHidden, m = s.inputClassName, v = Gn(s, yx);
  return Se("div", ve({}, Ft(i, "input", {
    "input-container": !0
  }), {
    "data-value": o || ""
  }), Se("input", ve({
    className: r({
      input: !0
    }, m),
    ref: d,
    style: Sx(y),
    disabled: h
  }, v)));
}, Cx = Ex, Ox = function(i, r) {
  var o = i.theme, s = o.spacing, d = o.borderRadius, h = o.colors;
  return ge({
    label: "multiValue",
    display: "flex",
    minWidth: 0
  }, r ? {} : {
    backgroundColor: h.neutral10,
    borderRadius: d / 2,
    margin: s.baseUnit / 2
  });
}, xx = function(i, r) {
  var o = i.theme, s = o.borderRadius, d = o.colors, h = i.cropWithEllipsis;
  return ge({
    overflow: "hidden",
    textOverflow: h || h === void 0 ? "ellipsis" : void 0,
    whiteSpace: "nowrap"
  }, r ? {} : {
    borderRadius: s / 2,
    color: d.neutral80,
    fontSize: "85%",
    padding: 3,
    paddingLeft: 6
  });
}, Tx = function(i, r) {
  var o = i.theme, s = o.spacing, d = o.borderRadius, h = o.colors, y = i.isFocused;
  return ge({
    alignItems: "center",
    display: "flex"
  }, r ? {} : {
    borderRadius: d / 2,
    backgroundColor: y ? h.dangerLight : void 0,
    paddingLeft: s.baseUnit,
    paddingRight: s.baseUnit,
    ":hover": {
      backgroundColor: h.dangerLight,
      color: h.danger
    }
  });
}, G0 = function(i) {
  var r = i.children, o = i.innerProps;
  return Se("div", o, r);
}, Ax = G0, wx = G0;
function Mx(a) {
  var i = a.children, r = a.innerProps;
  return Se("div", ve({
    role: "button"
  }, r), i || Se(Pp, {
    size: 14
  }));
}
var Rx = function(i) {
  var r = i.children, o = i.components, s = i.data, d = i.innerProps, h = i.isDisabled, y = i.removeProps, m = i.selectProps, v = o.Container, C = o.Label, x = o.Remove;
  return Se(v, {
    data: s,
    innerProps: ge(ge({}, Ft(i, "multiValue", {
      "multi-value": !0,
      "multi-value--is-disabled": h
    })), d),
    selectProps: m
  }, Se(C, {
    data: s,
    innerProps: ge({}, Ft(i, "multiValueLabel", {
      "multi-value__label": !0
    })),
    selectProps: m
  }, r), Se(x, {
    data: s,
    innerProps: ge(ge({}, Ft(i, "multiValueRemove", {
      "multi-value__remove": !0
    })), {}, {
      "aria-label": "Remove ".concat(r || "option")
    }, y),
    selectProps: m
  }));
}, Dx = Rx, Nx = function(i, r) {
  var o = i.isDisabled, s = i.isFocused, d = i.isSelected, h = i.theme, y = h.spacing, m = h.colors;
  return ge({
    label: "option",
    cursor: "default",
    display: "block",
    fontSize: "inherit",
    width: "100%",
    userSelect: "none",
    WebkitTapHighlightColor: "rgba(0, 0, 0, 0)"
  }, r ? {} : {
    backgroundColor: d ? m.primary : s ? m.primary25 : "transparent",
    color: o ? m.neutral20 : d ? m.neutral0 : "inherit",
    padding: "".concat(y.baseUnit * 2, "px ").concat(y.baseUnit * 3, "px"),
    // provide some affordance on touch devices
    ":active": {
      backgroundColor: o ? void 0 : d ? m.primary : m.primary50
    }
  });
}, jx = function(i) {
  var r = i.children, o = i.isDisabled, s = i.isFocused, d = i.isSelected, h = i.innerRef, y = i.innerProps;
  return Se("div", ve({}, Ft(i, "option", {
    option: !0,
    "option--is-disabled": o,
    "option--is-focused": s,
    "option--is-selected": d
  }), {
    ref: h,
    "aria-disabled": o
  }, y), r);
}, zx = jx, Lx = function(i, r) {
  var o = i.theme, s = o.spacing, d = o.colors;
  return ge({
    label: "placeholder",
    gridArea: "1 / 1 / 2 / 3"
  }, r ? {} : {
    color: d.neutral50,
    marginLeft: s.baseUnit / 2,
    marginRight: s.baseUnit / 2
  });
}, Hx = function(i) {
  var r = i.children, o = i.innerProps;
  return Se("div", ve({}, Ft(i, "placeholder", {
    placeholder: !0
  }), o), r);
}, Vx = Hx, Ux = function(i, r) {
  var o = i.isDisabled, s = i.theme, d = s.spacing, h = s.colors;
  return ge({
    label: "singleValue",
    gridArea: "1 / 1 / 2 / 3",
    maxWidth: "100%",
    overflow: "hidden",
    textOverflow: "ellipsis",
    whiteSpace: "nowrap"
  }, r ? {} : {
    color: o ? h.neutral40 : h.neutral80,
    marginLeft: d.baseUnit / 2,
    marginRight: d.baseUnit / 2
  });
}, Bx = function(i) {
  var r = i.children, o = i.isDisabled, s = i.innerProps;
  return Se("div", ve({}, Ft(i, "singleValue", {
    "single-value": !0,
    "single-value--is-disabled": o
  }), s), r);
}, $x = Bx, kx = {
  ClearIndicator: ax,
  Control: fx,
  DropdownIndicator: tx,
  DownChevron: k0,
  CrossIcon: Pp,
  Group: vx,
  GroupHeading: gx,
  IndicatorsContainer: KO,
  IndicatorSeparator: lx,
  Input: Cx,
  LoadingIndicator: sx,
  Menu: HO,
  MenuList: UO,
  MenuPortal: GO,
  LoadingMessage: qO,
  NoOptionsMessage: kO,
  MultiValue: Dx,
  MultiValueContainer: Ax,
  MultiValueLabel: wx,
  MultiValueRemove: Mx,
  Option: zx,
  Placeholder: Vx,
  SelectContainer: IO,
  SingleValue: $x,
  ValueContainer: QO
}, X0 = function(i) {
  return ge(ge({}, kx), i.components);
}, jy = Number.isNaN || function(i) {
  return typeof i == "number" && i !== i;
};
function qx(a, i) {
  return !!(a === i || jy(a) && jy(i));
}
function Yx(a, i) {
  if (a.length !== i.length)
    return !1;
  for (var r = 0; r < a.length; r++)
    if (!qx(a[r], i[r]))
      return !1;
  return !0;
}
function I0(a, i) {
  i === void 0 && (i = Yx);
  var r = null;
  function o() {
    for (var s = [], d = 0; d < arguments.length; d++)
      s[d] = arguments[d];
    if (r && r.lastThis === this && i(s, r.lastArgs))
      return r.lastResult;
    var h = a.apply(this, s);
    return r = {
      lastResult: h,
      lastArgs: s,
      lastThis: this
    }, h;
  }
  return o.clear = function() {
    r = null;
  }, o;
}
var Gx = {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
}, Xx = function(i) {
  return Se("span", ve({
    css: Gx
  }, i));
}, zy = Xx, Ix = {
  guidance: function(i) {
    var r = i.isSearchable, o = i.isMulti, s = i.tabSelectsValue, d = i.context, h = i.isInitialFocus;
    switch (d) {
      case "menu":
        return "Use Up and Down to choose options, press Enter to select the currently focused option, press Escape to exit the menu".concat(s ? ", press Tab to select the option and exit the menu" : "", ".");
      case "input":
        return h ? "".concat(i["aria-label"] || "Select", " is focused ").concat(r ? ",type to refine list" : "", ", press Down to open the menu, ").concat(o ? " press left to focus selected values" : "") : "";
      case "value":
        return "Use left and right to toggle between focused values, press Backspace to remove the currently focused value";
      default:
        return "";
    }
  },
  onChange: function(i) {
    var r = i.action, o = i.label, s = o === void 0 ? "" : o, d = i.labels, h = i.isDisabled;
    switch (r) {
      case "deselect-option":
      case "pop-value":
      case "remove-value":
        return "option ".concat(s, ", deselected.");
      case "clear":
        return "All selected options have been cleared.";
      case "initial-input-focus":
        return "option".concat(d.length > 1 ? "s" : "", " ").concat(d.join(","), ", selected.");
      case "select-option":
        return h ? "option ".concat(s, " is disabled. Select another option.") : "option ".concat(s, ", selected.");
      default:
        return "";
    }
  },
  onFocus: function(i) {
    var r = i.context, o = i.focused, s = i.options, d = i.label, h = d === void 0 ? "" : d, y = i.selectValue, m = i.isDisabled, v = i.isSelected, C = i.isAppleDevice, x = function(N, j) {
      return N && N.length ? "".concat(N.indexOf(j) + 1, " of ").concat(N.length) : "";
    };
    if (r === "value" && y)
      return "value ".concat(h, " focused, ").concat(x(y, o), ".");
    if (r === "menu" && C) {
      var A = m ? " disabled" : "", R = "".concat(v ? " selected" : "").concat(A);
      return "".concat(h).concat(R, ", ").concat(x(s, o), ".");
    }
    return "";
  },
  onFilter: function(i) {
    var r = i.inputValue, o = i.resultsMessage;
    return "".concat(o).concat(r ? " for search term " + r : "", ".");
  }
}, Fx = function(i) {
  var r = i.ariaSelection, o = i.focusedOption, s = i.focusedValue, d = i.focusableOptions, h = i.isFocused, y = i.selectValue, m = i.selectProps, v = i.id, C = i.isAppleDevice, x = m.ariaLiveMessages, A = m.getOptionLabel, R = m.inputValue, L = m.isMulti, N = m.isOptionDisabled, j = m.isSearchable, H = m.menuIsOpen, Q = m.options, X = m.screenReaderStatus, W = m.tabSelectsValue, U = m.isLoading, Z = m["aria-label"], B = m["aria-live"], oe = S.useMemo(function() {
    return ge(ge({}, Ix), x || {});
  }, [x]), we = S.useMemo(function() {
    var Ue = "";
    if (r && oe.onChange) {
      var k = r.option, ae = r.options, le = r.removedValue, be = r.removedValues, Ee = r.value, O = function(Le) {
        return Array.isArray(Le) ? null : Le;
      }, Y = le || k || O(Ee), ee = Y ? A(Y) : "", ie = ae || be || void 0, ce = ie ? ie.map(A) : [], ue = ge({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: Y && N(Y, y),
        label: ee,
        labels: ce
      }, r);
      Ue = oe.onChange(ue);
    }
    return Ue;
  }, [r, oe, N, y, A]), je = S.useMemo(function() {
    var Ue = "", k = o || s, ae = !!(o && y && y.includes(o));
    if (k && oe.onFocus) {
      var le = {
        focused: k,
        label: A(k),
        isDisabled: N(k, y),
        isSelected: ae,
        options: d,
        context: k === o ? "menu" : "value",
        selectValue: y,
        isAppleDevice: C
      };
      Ue = oe.onFocus(le);
    }
    return Ue;
  }, [o, s, A, N, oe, d, y, C]), ke = S.useMemo(function() {
    var Ue = "";
    if (H && Q.length && !U && oe.onFilter) {
      var k = X({
        count: d.length
      });
      Ue = oe.onFilter({
        inputValue: R,
        resultsMessage: k
      });
    }
    return Ue;
  }, [d, R, H, oe, Q, X, U]), Ve = r?.action === "initial-input-focus", ut = S.useMemo(function() {
    var Ue = "";
    if (oe.guidance) {
      var k = s ? "value" : H ? "menu" : "input";
      Ue = oe.guidance({
        "aria-label": Z,
        context: k,
        isDisabled: o && N(o, y),
        isMulti: L,
        isSearchable: j,
        tabSelectsValue: W,
        isInitialFocus: Ve
      });
    }
    return Ue;
  }, [Z, o, s, L, N, j, H, oe, y, W, Ve]), tt = Se(S.Fragment, null, Se("span", {
    id: "aria-selection"
  }, we), Se("span", {
    id: "aria-focused"
  }, je), Se("span", {
    id: "aria-results"
  }, ke), Se("span", {
    id: "aria-guidance"
  }, ut));
  return Se(S.Fragment, null, Se(zy, {
    id: v
  }, Ve && tt), Se(zy, {
    "aria-live": B,
    "aria-atomic": "false",
    "aria-relevant": "additions text",
    role: "log"
  }, h && !Ve && tt));
}, Qx = Fx, Cp = [{
  base: "A",
  letters: "AⒶＡÀÁÂẦẤẪẨÃĀĂẰẮẴẲȦǠÄǞẢÅǺǍȀȂẠẬẶḀĄȺⱯ"
}, {
  base: "AA",
  letters: "Ꜳ"
}, {
  base: "AE",
  letters: "ÆǼǢ"
}, {
  base: "AO",
  letters: "Ꜵ"
}, {
  base: "AU",
  letters: "Ꜷ"
}, {
  base: "AV",
  letters: "ꜸꜺ"
}, {
  base: "AY",
  letters: "Ꜽ"
}, {
  base: "B",
  letters: "BⒷＢḂḄḆɃƂƁ"
}, {
  base: "C",
  letters: "CⒸＣĆĈĊČÇḈƇȻꜾ"
}, {
  base: "D",
  letters: "DⒹＤḊĎḌḐḒḎĐƋƊƉꝹ"
}, {
  base: "DZ",
  letters: "ǱǄ"
}, {
  base: "Dz",
  letters: "ǲǅ"
}, {
  base: "E",
  letters: "EⒺＥÈÉÊỀẾỄỂẼĒḔḖĔĖËẺĚȄȆẸỆȨḜĘḘḚƐƎ"
}, {
  base: "F",
  letters: "FⒻＦḞƑꝻ"
}, {
  base: "G",
  letters: "GⒼＧǴĜḠĞĠǦĢǤƓꞠꝽꝾ"
}, {
  base: "H",
  letters: "HⒽＨĤḢḦȞḤḨḪĦⱧⱵꞍ"
}, {
  base: "I",
  letters: "IⒾＩÌÍÎĨĪĬİÏḮỈǏȈȊỊĮḬƗ"
}, {
  base: "J",
  letters: "JⒿＪĴɈ"
}, {
  base: "K",
  letters: "KⓀＫḰǨḲĶḴƘⱩꝀꝂꝄꞢ"
}, {
  base: "L",
  letters: "LⓁＬĿĹĽḶḸĻḼḺŁȽⱢⱠꝈꝆꞀ"
}, {
  base: "LJ",
  letters: "Ǉ"
}, {
  base: "Lj",
  letters: "ǈ"
}, {
  base: "M",
  letters: "MⓂＭḾṀṂⱮƜ"
}, {
  base: "N",
  letters: "NⓃＮǸŃÑṄŇṆŅṊṈȠƝꞐꞤ"
}, {
  base: "NJ",
  letters: "Ǌ"
}, {
  base: "Nj",
  letters: "ǋ"
}, {
  base: "O",
  letters: "OⓄＯÒÓÔỒỐỖỔÕṌȬṎŌṐṒŎȮȰÖȪỎŐǑȌȎƠỜỚỠỞỢỌỘǪǬØǾƆƟꝊꝌ"
}, {
  base: "OI",
  letters: "Ƣ"
}, {
  base: "OO",
  letters: "Ꝏ"
}, {
  base: "OU",
  letters: "Ȣ"
}, {
  base: "P",
  letters: "PⓅＰṔṖƤⱣꝐꝒꝔ"
}, {
  base: "Q",
  letters: "QⓆＱꝖꝘɊ"
}, {
  base: "R",
  letters: "RⓇＲŔṘŘȐȒṚṜŖṞɌⱤꝚꞦꞂ"
}, {
  base: "S",
  letters: "SⓈＳẞŚṤŜṠŠṦṢṨȘŞⱾꞨꞄ"
}, {
  base: "T",
  letters: "TⓉＴṪŤṬȚŢṰṮŦƬƮȾꞆ"
}, {
  base: "TZ",
  letters: "Ꜩ"
}, {
  base: "U",
  letters: "UⓊＵÙÚÛŨṸŪṺŬÜǛǗǕǙỦŮŰǓȔȖƯỪỨỮỬỰỤṲŲṶṴɄ"
}, {
  base: "V",
  letters: "VⓋＶṼṾƲꝞɅ"
}, {
  base: "VY",
  letters: "Ꝡ"
}, {
  base: "W",
  letters: "WⓌＷẀẂŴẆẄẈⱲ"
}, {
  base: "X",
  letters: "XⓍＸẊẌ"
}, {
  base: "Y",
  letters: "YⓎＹỲÝŶỸȲẎŸỶỴƳɎỾ"
}, {
  base: "Z",
  letters: "ZⓏＺŹẐŻŽẒẔƵȤⱿⱫꝢ"
}, {
  base: "a",
  letters: "aⓐａẚàáâầấẫẩãāăằắẵẳȧǡäǟảåǻǎȁȃạậặḁąⱥɐ"
}, {
  base: "aa",
  letters: "ꜳ"
}, {
  base: "ae",
  letters: "æǽǣ"
}, {
  base: "ao",
  letters: "ꜵ"
}, {
  base: "au",
  letters: "ꜷ"
}, {
  base: "av",
  letters: "ꜹꜻ"
}, {
  base: "ay",
  letters: "ꜽ"
}, {
  base: "b",
  letters: "bⓑｂḃḅḇƀƃɓ"
}, {
  base: "c",
  letters: "cⓒｃćĉċčçḉƈȼꜿↄ"
}, {
  base: "d",
  letters: "dⓓｄḋďḍḑḓḏđƌɖɗꝺ"
}, {
  base: "dz",
  letters: "ǳǆ"
}, {
  base: "e",
  letters: "eⓔｅèéêềếễểẽēḕḗĕėëẻěȅȇẹệȩḝęḙḛɇɛǝ"
}, {
  base: "f",
  letters: "fⓕｆḟƒꝼ"
}, {
  base: "g",
  letters: "gⓖｇǵĝḡğġǧģǥɠꞡᵹꝿ"
}, {
  base: "h",
  letters: "hⓗｈĥḣḧȟḥḩḫẖħⱨⱶɥ"
}, {
  base: "hv",
  letters: "ƕ"
}, {
  base: "i",
  letters: "iⓘｉìíîĩīĭïḯỉǐȉȋịįḭɨı"
}, {
  base: "j",
  letters: "jⓙｊĵǰɉ"
}, {
  base: "k",
  letters: "kⓚｋḱǩḳķḵƙⱪꝁꝃꝅꞣ"
}, {
  base: "l",
  letters: "lⓛｌŀĺľḷḹļḽḻſłƚɫⱡꝉꞁꝇ"
}, {
  base: "lj",
  letters: "ǉ"
}, {
  base: "m",
  letters: "mⓜｍḿṁṃɱɯ"
}, {
  base: "n",
  letters: "nⓝｎǹńñṅňṇņṋṉƞɲŉꞑꞥ"
}, {
  base: "nj",
  letters: "ǌ"
}, {
  base: "o",
  letters: "oⓞｏòóôồốỗổõṍȭṏōṑṓŏȯȱöȫỏőǒȍȏơờớỡởợọộǫǭøǿɔꝋꝍɵ"
}, {
  base: "oi",
  letters: "ƣ"
}, {
  base: "ou",
  letters: "ȣ"
}, {
  base: "oo",
  letters: "ꝏ"
}, {
  base: "p",
  letters: "pⓟｐṕṗƥᵽꝑꝓꝕ"
}, {
  base: "q",
  letters: "qⓠｑɋꝗꝙ"
}, {
  base: "r",
  letters: "rⓡｒŕṙřȑȓṛṝŗṟɍɽꝛꞧꞃ"
}, {
  base: "s",
  letters: "sⓢｓßśṥŝṡšṧṣṩșşȿꞩꞅẛ"
}, {
  base: "t",
  letters: "tⓣｔṫẗťṭțţṱṯŧƭʈⱦꞇ"
}, {
  base: "tz",
  letters: "ꜩ"
}, {
  base: "u",
  letters: "uⓤｕùúûũṹūṻŭüǜǘǖǚủůűǔȕȗưừứữửựụṳųṷṵʉ"
}, {
  base: "v",
  letters: "vⓥｖṽṿʋꝟʌ"
}, {
  base: "vy",
  letters: "ꝡ"
}, {
  base: "w",
  letters: "wⓦｗẁẃŵẇẅẘẉⱳ"
}, {
  base: "x",
  letters: "xⓧｘẋẍ"
}, {
  base: "y",
  letters: "yⓨｙỳýŷỹȳẏÿỷẙỵƴɏỿ"
}, {
  base: "z",
  letters: "zⓩｚźẑżžẓẕƶȥɀⱬꝣ"
}], Zx = new RegExp("[" + Cp.map(function(a) {
  return a.letters;
}).join("") + "]", "g"), F0 = {};
for (var Kh = 0; Kh < Cp.length; Kh++)
  for (var Jh = Cp[Kh], Wh = 0; Wh < Jh.letters.length; Wh++)
    F0[Jh.letters[Wh]] = Jh.base;
var Q0 = function(i) {
  return i.replace(Zx, function(r) {
    return F0[r];
  });
}, Kx = I0(Q0), Ly = function(i) {
  return i.replace(/^\s+|\s+$/g, "");
}, Jx = function(i) {
  return "".concat(i.label, " ").concat(i.value);
}, Wx = function(i) {
  return function(r, o) {
    if (r.data.__isNew__) return !0;
    var s = ge({
      ignoreCase: !0,
      ignoreAccents: !0,
      stringify: Jx,
      trim: !0,
      matchFrom: "any"
    }, i), d = s.ignoreCase, h = s.ignoreAccents, y = s.stringify, m = s.trim, v = s.matchFrom, C = m ? Ly(o) : o, x = m ? Ly(y(r)) : y(r);
    return d && (C = C.toLowerCase(), x = x.toLowerCase()), h && (C = Kx(C), x = Q0(x)), v === "start" ? x.substr(0, C.length) === C : x.indexOf(C) > -1;
  };
}, Px = ["innerRef"];
function eT(a) {
  var i = a.innerRef, r = Gn(a, Px), o = wO(r, "onExited", "in", "enter", "exit", "appear");
  return Se("input", ve({
    ref: i
  }, o, {
    css: /* @__PURE__ */ Zp({
      label: "dummyInput",
      // get rid of any default styles
      background: 0,
      border: 0,
      // important! this hides the flashing cursor
      caretColor: "transparent",
      fontSize: "inherit",
      gridArea: "1 / 1 / 2 / 3",
      outline: 0,
      padding: 0,
      // important! without `width` browsers won't allow focus
      width: 1,
      // remove cursor on desktop
      color: "transparent",
      // remove cursor on mobile whilst maintaining "scroll into view" behaviour
      left: -100,
      opacity: 0,
      position: "relative",
      transform: "scale(.01)"
    }, "", "")
  }));
}
var tT = function(i) {
  i.cancelable && i.preventDefault(), i.stopPropagation();
};
function nT(a) {
  var i = a.isEnabled, r = a.onBottomArrive, o = a.onBottomLeave, s = a.onTopArrive, d = a.onTopLeave, h = S.useRef(!1), y = S.useRef(!1), m = S.useRef(0), v = S.useRef(null), C = S.useCallback(function(j, H) {
    if (v.current !== null) {
      var Q = v.current, X = Q.scrollTop, W = Q.scrollHeight, U = Q.clientHeight, Z = v.current, B = H > 0, oe = W - U - X, we = !1;
      oe > H && h.current && (o && o(j), h.current = !1), B && y.current && (d && d(j), y.current = !1), B && H > oe ? (r && !h.current && r(j), Z.scrollTop = W, we = !0, h.current = !0) : !B && -H > X && (s && !y.current && s(j), Z.scrollTop = 0, we = !0, y.current = !0), we && tT(j);
    }
  }, [r, o, s, d]), x = S.useCallback(function(j) {
    C(j, j.deltaY);
  }, [C]), A = S.useCallback(function(j) {
    m.current = j.changedTouches[0].clientY;
  }, []), R = S.useCallback(function(j) {
    var H = m.current - j.changedTouches[0].clientY;
    C(j, H);
  }, [C]), L = S.useCallback(function(j) {
    if (j) {
      var H = xO ? {
        passive: !1
      } : !1;
      j.addEventListener("wheel", x, H), j.addEventListener("touchstart", A, H), j.addEventListener("touchmove", R, H);
    }
  }, [R, A, x]), N = S.useCallback(function(j) {
    j && (j.removeEventListener("wheel", x, !1), j.removeEventListener("touchstart", A, !1), j.removeEventListener("touchmove", R, !1));
  }, [R, A, x]);
  return S.useEffect(function() {
    if (i) {
      var j = v.current;
      return L(j), function() {
        N(j);
      };
    }
  }, [i, L, N]), function(j) {
    v.current = j;
  };
}
var Hy = ["boxSizing", "height", "overflow", "paddingRight", "position"], Vy = {
  boxSizing: "border-box",
  // account for possible declaration `width: 100%;` on body
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function Uy(a) {
  a.cancelable && a.preventDefault();
}
function By(a) {
  a.stopPropagation();
}
function $y() {
  var a = this.scrollTop, i = this.scrollHeight, r = a + this.offsetHeight;
  a === 0 ? this.scrollTop = 1 : r === i && (this.scrollTop = a - 1);
}
function ky() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var qy = !!(typeof window < "u" && window.document && window.document.createElement), Is = 0, co = {
  capture: !1,
  passive: !1
};
function aT(a) {
  var i = a.isEnabled, r = a.accountForScrollbars, o = r === void 0 ? !0 : r, s = S.useRef({}), d = S.useRef(null), h = S.useCallback(function(m) {
    if (qy) {
      var v = document.body, C = v && v.style;
      if (o && Hy.forEach(function(L) {
        var N = C && C[L];
        s.current[L] = N;
      }), o && Is < 1) {
        var x = parseInt(s.current.paddingRight, 10) || 0, A = document.body ? document.body.clientWidth : 0, R = window.innerWidth - A + x || 0;
        Object.keys(Vy).forEach(function(L) {
          var N = Vy[L];
          C && (C[L] = N);
        }), C && (C.paddingRight = "".concat(R, "px"));
      }
      v && ky() && (v.addEventListener("touchmove", Uy, co), m && (m.addEventListener("touchstart", $y, co), m.addEventListener("touchmove", By, co))), Is += 1;
    }
  }, [o]), y = S.useCallback(function(m) {
    if (qy) {
      var v = document.body, C = v && v.style;
      Is = Math.max(Is - 1, 0), o && Is < 1 && Hy.forEach(function(x) {
        var A = s.current[x];
        C && (C[x] = A);
      }), v && ky() && (v.removeEventListener("touchmove", Uy, co), m && (m.removeEventListener("touchstart", $y, co), m.removeEventListener("touchmove", By, co)));
    }
  }, [o]);
  return S.useEffect(function() {
    if (i) {
      var m = d.current;
      return h(m), function() {
        y(m);
      };
    }
  }, [i, h, y]), function(m) {
    d.current = m;
  };
}
var iT = function(i) {
  var r = i.target;
  return r.ownerDocument.activeElement && r.ownerDocument.activeElement.blur();
}, lT = {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
};
function rT(a) {
  var i = a.children, r = a.lockEnabled, o = a.captureEnabled, s = o === void 0 ? !0 : o, d = a.onBottomArrive, h = a.onBottomLeave, y = a.onTopArrive, m = a.onTopLeave, v = nT({
    isEnabled: s,
    onBottomArrive: d,
    onBottomLeave: h,
    onTopArrive: y,
    onTopLeave: m
  }), C = aT({
    isEnabled: r
  }), x = function(R) {
    v(R), C(R);
  };
  return Se(S.Fragment, null, r && Se("div", {
    onClick: iT,
    css: lT
  }), i(x));
}
var oT = {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
}, sT = function(i) {
  var r = i.name, o = i.onFocus;
  return Se("input", {
    required: !0,
    name: r,
    tabIndex: -1,
    "aria-hidden": "true",
    onFocus: o,
    css: oT,
    value: "",
    onChange: function() {
    }
  });
}, uT = sT;
function em(a) {
  var i;
  return typeof window < "u" && window.navigator != null ? a.test(((i = window.navigator.userAgentData) === null || i === void 0 ? void 0 : i.platform) || window.navigator.platform) : !1;
}
function cT() {
  return em(/^iPhone/i);
}
function Z0() {
  return em(/^Mac/i);
}
function fT() {
  return em(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  Z0() && navigator.maxTouchPoints > 1;
}
function dT() {
  return cT() || fT();
}
function hT() {
  return Z0() || dT();
}
var pT = function(i) {
  return i.label;
}, mT = function(i) {
  return i.label;
}, gT = function(i) {
  return i.value;
}, vT = function(i) {
  return !!i.isDisabled;
}, yT = {
  clearIndicator: nx,
  container: XO,
  control: ux,
  dropdownIndicator: ex,
  group: hx,
  groupHeading: mx,
  indicatorsContainer: ZO,
  indicatorSeparator: ix,
  input: bx,
  loadingIndicator: ox,
  loadingMessage: $O,
  menu: jO,
  menuList: VO,
  menuPortal: YO,
  multiValue: Ox,
  multiValueLabel: xx,
  multiValueRemove: Tx,
  noOptionsMessage: BO,
  option: Nx,
  placeholder: Lx,
  singleValue: Ux,
  valueContainer: FO
}, bT = {
  primary: "#2684FF",
  primary75: "#4C9AFF",
  primary50: "#B2D4FF",
  primary25: "#DEEBFF",
  danger: "#DE350B",
  dangerLight: "#FFBDAD",
  neutral0: "hsl(0, 0%, 100%)",
  neutral5: "hsl(0, 0%, 95%)",
  neutral10: "hsl(0, 0%, 90%)",
  neutral20: "hsl(0, 0%, 80%)",
  neutral30: "hsl(0, 0%, 70%)",
  neutral40: "hsl(0, 0%, 60%)",
  neutral50: "hsl(0, 0%, 50%)",
  neutral60: "hsl(0, 0%, 40%)",
  neutral70: "hsl(0, 0%, 30%)",
  neutral80: "hsl(0, 0%, 20%)",
  neutral90: "hsl(0, 0%, 10%)"
}, _T = 4, K0 = 4, ST = 38, ET = K0 * 2, CT = {
  baseUnit: K0,
  controlHeight: ST,
  menuGutter: ET
}, Ph = {
  borderRadius: _T,
  colors: bT,
  spacing: CT
}, OT = {
  "aria-live": "polite",
  backspaceRemovesValue: !0,
  blurInputOnSelect: Dy(),
  captureMenuScroll: !Dy(),
  classNames: {},
  closeMenuOnSelect: !0,
  closeMenuOnScroll: !1,
  components: {},
  controlShouldRenderValue: !0,
  escapeClearsValue: !1,
  filterOption: Wx(),
  formatGroupLabel: pT,
  getOptionLabel: mT,
  getOptionValue: gT,
  isDisabled: !1,
  isLoading: !1,
  isMulti: !1,
  isRtl: !1,
  isSearchable: !0,
  isOptionDisabled: vT,
  loadingMessage: function() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: !1,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: !1,
  menuShouldScrollIntoView: !CO(),
  noOptionsMessage: function() {
    return "No options";
  },
  openMenuOnFocus: !1,
  openMenuOnClick: !0,
  options: [],
  pageSize: 5,
  placeholder: "Select...",
  screenReaderStatus: function(i) {
    var r = i.count;
    return "".concat(r, " result").concat(r !== 1 ? "s" : "", " available");
  },
  styles: {},
  tabIndex: 0,
  tabSelectsValue: !0,
  unstyled: !1
};
function Yy(a, i, r, o) {
  var s = P0(a, i, r), d = e1(a, i, r), h = W0(a, i), y = Cf(a, i);
  return {
    type: "option",
    data: i,
    isDisabled: s,
    isSelected: d,
    label: h,
    value: y,
    index: o
  };
}
function af(a, i) {
  return a.options.map(function(r, o) {
    if ("options" in r) {
      var s = r.options.map(function(h, y) {
        return Yy(a, h, i, y);
      }).filter(function(h) {
        return Xy(a, h);
      });
      return s.length > 0 ? {
        type: "group",
        data: r,
        options: s,
        index: o
      } : void 0;
    }
    var d = Yy(a, r, i, o);
    return Xy(a, d) ? d : void 0;
  }).filter(TO);
}
function J0(a) {
  return a.reduce(function(i, r) {
    return r.type === "group" ? i.push.apply(i, Gp(r.options.map(function(o) {
      return o.data;
    }))) : i.push(r.data), i;
  }, []);
}
function Gy(a, i) {
  return a.reduce(function(r, o) {
    return o.type === "group" ? r.push.apply(r, Gp(o.options.map(function(s) {
      return {
        data: s.data,
        id: "".concat(i, "-").concat(o.index, "-").concat(s.index)
      };
    }))) : r.push({
      data: o.data,
      id: "".concat(i, "-").concat(o.index)
    }), r;
  }, []);
}
function xT(a, i) {
  return J0(af(a, i));
}
function Xy(a, i) {
  var r = a.inputValue, o = r === void 0 ? "" : r, s = i.data, d = i.isSelected, h = i.label, y = i.value;
  return (!n1(a) || !d) && t1(a, {
    label: h,
    value: y,
    data: s
  }, o);
}
function TT(a, i) {
  var r = a.focusedValue, o = a.selectValue, s = o.indexOf(r);
  if (s > -1) {
    var d = i.indexOf(r);
    if (d > -1)
      return r;
    if (s < i.length)
      return i[s];
  }
  return null;
}
function AT(a, i) {
  var r = a.focusedOption;
  return r && i.indexOf(r) > -1 ? r : i[0];
}
var ep = function(i, r) {
  var o, s = (o = i.find(function(d) {
    return d.data === r;
  })) === null || o === void 0 ? void 0 : o.id;
  return s || null;
}, W0 = function(i, r) {
  return i.getOptionLabel(r);
}, Cf = function(i, r) {
  return i.getOptionValue(r);
};
function P0(a, i, r) {
  return typeof a.isOptionDisabled == "function" ? a.isOptionDisabled(i, r) : !1;
}
function e1(a, i, r) {
  if (r.indexOf(i) > -1) return !0;
  if (typeof a.isOptionSelected == "function")
    return a.isOptionSelected(i, r);
  var o = Cf(a, i);
  return r.some(function(s) {
    return Cf(a, s) === o;
  });
}
function t1(a, i, r) {
  return a.filterOption ? a.filterOption(i, r) : !0;
}
var n1 = function(i) {
  var r = i.hideSelectedOptions, o = i.isMulti;
  return r === void 0 ? o : r;
}, wT = 1, a1 = /* @__PURE__ */ (function(a) {
  JE(r, a);
  var i = PE(r);
  function r(o) {
    var s;
    if (ZE(this, r), s = i.call(this, o), s.state = {
      ariaSelection: null,
      focusedOption: null,
      focusedOptionId: null,
      focusableOptionsWithIds: [],
      focusedValue: null,
      inputIsHidden: !1,
      isFocused: !1,
      selectValue: [],
      clearFocusValueOnUpdate: !1,
      prevWasFocused: !1,
      inputIsHiddenAfterUpdate: void 0,
      prevProps: void 0,
      instancePrefix: "",
      isAppleDevice: !1
    }, s.blockOptionHover = !1, s.isComposing = !1, s.commonProps = void 0, s.initialTouchX = 0, s.initialTouchY = 0, s.openAfterFocus = !1, s.scrollToFocusedOptionOnUpdate = !1, s.userIsDragging = void 0, s.controlRef = null, s.getControlRef = function(m) {
      s.controlRef = m;
    }, s.focusedOptionRef = null, s.getFocusedOptionRef = function(m) {
      s.focusedOptionRef = m;
    }, s.menuListRef = null, s.getMenuListRef = function(m) {
      s.menuListRef = m;
    }, s.inputRef = null, s.getInputRef = function(m) {
      s.inputRef = m;
    }, s.focus = s.focusInput, s.blur = s.blurInput, s.onChange = function(m, v) {
      var C = s.props, x = C.onChange, A = C.name;
      v.name = A, s.ariaOnChange(m, v), x(m, v);
    }, s.setValue = function(m, v, C) {
      var x = s.props, A = x.closeMenuOnSelect, R = x.isMulti, L = x.inputValue;
      s.onInputChange("", {
        action: "set-value",
        prevInputValue: L
      }), A && (s.setState({
        inputIsHiddenAfterUpdate: !R
      }), s.onMenuClose()), s.setState({
        clearFocusValueOnUpdate: !0
      }), s.onChange(m, {
        action: v,
        option: C
      });
    }, s.selectOption = function(m) {
      var v = s.props, C = v.blurInputOnSelect, x = v.isMulti, A = v.name, R = s.state.selectValue, L = x && s.isOptionSelected(m, R), N = s.isOptionDisabled(m, R);
      if (L) {
        var j = s.getOptionValue(m);
        s.setValue(R.filter(function(H) {
          return s.getOptionValue(H) !== j;
        }), "deselect-option", m);
      } else if (!N)
        x ? s.setValue([].concat(Gp(R), [m]), "select-option", m) : s.setValue(m, "select-option");
      else {
        s.ariaOnChange(m, {
          action: "select-option",
          option: m,
          name: A
        });
        return;
      }
      C && s.blurInput();
    }, s.removeValue = function(m) {
      var v = s.props.isMulti, C = s.state.selectValue, x = s.getOptionValue(m), A = C.filter(function(L) {
        return s.getOptionValue(L) !== x;
      }), R = Zc(v, A, A[0] || null);
      s.onChange(R, {
        action: "remove-value",
        removedValue: m
      }), s.focusInput();
    }, s.clearValue = function() {
      var m = s.state.selectValue;
      s.onChange(Zc(s.props.isMulti, [], null), {
        action: "clear",
        removedValues: m
      });
    }, s.popValue = function() {
      var m = s.props.isMulti, v = s.state.selectValue, C = v[v.length - 1], x = v.slice(0, v.length - 1), A = Zc(m, x, x[0] || null);
      C && s.onChange(A, {
        action: "pop-value",
        removedValue: C
      });
    }, s.getFocusedOptionId = function(m) {
      return ep(s.state.focusableOptionsWithIds, m);
    }, s.getFocusableOptionsWithIds = function() {
      return Gy(af(s.props, s.state.selectValue), s.getElementId("option"));
    }, s.getValue = function() {
      return s.state.selectValue;
    }, s.cx = function() {
      for (var m = arguments.length, v = new Array(m), C = 0; C < m; C++)
        v[C] = arguments[C];
      return yO.apply(void 0, [s.props.classNamePrefix].concat(v));
    }, s.getOptionLabel = function(m) {
      return W0(s.props, m);
    }, s.getOptionValue = function(m) {
      return Cf(s.props, m);
    }, s.getStyles = function(m, v) {
      var C = s.props.unstyled, x = yT[m](v, C);
      x.boxSizing = "border-box";
      var A = s.props.styles[m];
      return A ? A(x, v) : x;
    }, s.getClassNames = function(m, v) {
      var C, x;
      return (C = (x = s.props.classNames)[m]) === null || C === void 0 ? void 0 : C.call(x, v);
    }, s.getElementId = function(m) {
      return "".concat(s.state.instancePrefix, "-").concat(m);
    }, s.getComponents = function() {
      return X0(s.props);
    }, s.buildCategorizedOptions = function() {
      return af(s.props, s.state.selectValue);
    }, s.getCategorizedOptions = function() {
      return s.props.menuIsOpen ? s.buildCategorizedOptions() : [];
    }, s.buildFocusableOptions = function() {
      return J0(s.buildCategorizedOptions());
    }, s.getFocusableOptions = function() {
      return s.props.menuIsOpen ? s.buildFocusableOptions() : [];
    }, s.ariaOnChange = function(m, v) {
      s.setState({
        ariaSelection: ge({
          value: m
        }, v)
      });
    }, s.onMenuMouseDown = function(m) {
      m.button === 0 && (m.stopPropagation(), m.preventDefault(), s.focusInput());
    }, s.onMenuMouseMove = function(m) {
      s.blockOptionHover = !1;
    }, s.onControlMouseDown = function(m) {
      if (!m.defaultPrevented) {
        var v = s.props.openMenuOnClick;
        s.state.isFocused ? s.props.menuIsOpen ? m.target.tagName !== "INPUT" && m.target.tagName !== "TEXTAREA" && s.onMenuClose() : v && s.openMenu("first") : (v && (s.openAfterFocus = !0), s.focusInput()), m.target.tagName !== "INPUT" && m.target.tagName !== "TEXTAREA" && m.preventDefault();
      }
    }, s.onDropdownIndicatorMouseDown = function(m) {
      if (!(m && m.type === "mousedown" && m.button !== 0) && !s.props.isDisabled) {
        var v = s.props, C = v.isMulti, x = v.menuIsOpen;
        s.focusInput(), x ? (s.setState({
          inputIsHiddenAfterUpdate: !C
        }), s.onMenuClose()) : s.openMenu("first"), m.preventDefault();
      }
    }, s.onClearIndicatorMouseDown = function(m) {
      m && m.type === "mousedown" && m.button !== 0 || (s.clearValue(), m.preventDefault(), s.openAfterFocus = !1, m.type === "touchend" ? s.focusInput() : setTimeout(function() {
        return s.focusInput();
      }));
    }, s.onScroll = function(m) {
      typeof s.props.closeMenuOnScroll == "boolean" ? m.target instanceof HTMLElement && $f(m.target) && s.props.onMenuClose() : typeof s.props.closeMenuOnScroll == "function" && s.props.closeMenuOnScroll(m) && s.props.onMenuClose();
    }, s.onCompositionStart = function() {
      s.isComposing = !0;
    }, s.onCompositionEnd = function() {
      s.isComposing = !1;
    }, s.onTouchStart = function(m) {
      var v = m.touches, C = v && v.item(0);
      C && (s.initialTouchX = C.clientX, s.initialTouchY = C.clientY, s.userIsDragging = !1);
    }, s.onTouchMove = function(m) {
      var v = m.touches, C = v && v.item(0);
      if (C) {
        var x = Math.abs(C.clientX - s.initialTouchX), A = Math.abs(C.clientY - s.initialTouchY), R = 5;
        s.userIsDragging = x > R || A > R;
      }
    }, s.onTouchEnd = function(m) {
      s.userIsDragging || (s.controlRef && !s.controlRef.contains(m.target) && s.menuListRef && !s.menuListRef.contains(m.target) && s.blurInput(), s.initialTouchX = 0, s.initialTouchY = 0);
    }, s.onControlTouchEnd = function(m) {
      s.userIsDragging || s.onControlMouseDown(m);
    }, s.onClearIndicatorTouchEnd = function(m) {
      s.userIsDragging || s.onClearIndicatorMouseDown(m);
    }, s.onDropdownIndicatorTouchEnd = function(m) {
      s.userIsDragging || s.onDropdownIndicatorMouseDown(m);
    }, s.handleInputChange = function(m) {
      var v = s.props.inputValue, C = m.currentTarget.value;
      s.setState({
        inputIsHiddenAfterUpdate: !1
      }), s.onInputChange(C, {
        action: "input-change",
        prevInputValue: v
      }), s.props.menuIsOpen || s.onMenuOpen();
    }, s.onInputFocus = function(m) {
      s.props.onFocus && s.props.onFocus(m), s.setState({
        inputIsHiddenAfterUpdate: !1,
        isFocused: !0
      }), (s.openAfterFocus || s.props.openMenuOnFocus) && s.openMenu("first"), s.openAfterFocus = !1;
    }, s.onInputBlur = function(m) {
      var v = s.props.inputValue;
      if (s.menuListRef && s.menuListRef.contains(document.activeElement)) {
        s.inputRef.focus();
        return;
      }
      s.props.onBlur && s.props.onBlur(m), s.onInputChange("", {
        action: "input-blur",
        prevInputValue: v
      }), s.onMenuClose(), s.setState({
        focusedValue: null,
        isFocused: !1
      });
    }, s.onOptionHover = function(m) {
      if (!(s.blockOptionHover || s.state.focusedOption === m)) {
        var v = s.getFocusableOptions(), C = v.indexOf(m);
        s.setState({
          focusedOption: m,
          focusedOptionId: C > -1 ? s.getFocusedOptionId(m) : null
        });
      }
    }, s.shouldHideSelectedOptions = function() {
      return n1(s.props);
    }, s.onValueInputFocus = function(m) {
      m.preventDefault(), m.stopPropagation(), s.focus();
    }, s.onKeyDown = function(m) {
      var v = s.props, C = v.isMulti, x = v.backspaceRemovesValue, A = v.escapeClearsValue, R = v.inputValue, L = v.isClearable, N = v.isDisabled, j = v.menuIsOpen, H = v.onKeyDown, Q = v.tabSelectsValue, X = v.openMenuOnFocus, W = s.state, U = W.focusedOption, Z = W.focusedValue, B = W.selectValue;
      if (!N && !(typeof H == "function" && (H(m), m.defaultPrevented))) {
        switch (s.blockOptionHover = !0, m.key) {
          case "ArrowLeft":
            if (!C || R) return;
            s.focusValue("previous");
            break;
          case "ArrowRight":
            if (!C || R) return;
            s.focusValue("next");
            break;
          case "Delete":
          case "Backspace":
            if (R) return;
            if (Z)
              s.removeValue(Z);
            else {
              if (!x) return;
              C ? s.popValue() : L && s.clearValue();
            }
            break;
          case "Tab":
            if (s.isComposing || m.shiftKey || !j || !Q || !U || // don't capture the event if the menu opens on focus and the focused
            // option is already selected; it breaks the flow of navigation
            X && s.isOptionSelected(U, B))
              return;
            s.selectOption(U);
            break;
          case "Enter":
            if (m.keyCode === 229)
              break;
            if (j) {
              if (!U || s.isComposing) return;
              s.selectOption(U);
              break;
            }
            return;
          case "Escape":
            j ? (s.setState({
              inputIsHiddenAfterUpdate: !1
            }), s.onInputChange("", {
              action: "menu-close",
              prevInputValue: R
            }), s.onMenuClose()) : L && A && s.clearValue();
            break;
          case " ":
            if (R)
              return;
            if (!j) {
              s.openMenu("first");
              break;
            }
            if (!U) return;
            s.selectOption(U);
            break;
          case "ArrowUp":
            j ? s.focusOption("up") : s.openMenu("last");
            break;
          case "ArrowDown":
            j ? s.focusOption("down") : s.openMenu("first");
            break;
          case "PageUp":
            if (!j) return;
            s.focusOption("pageup");
            break;
          case "PageDown":
            if (!j) return;
            s.focusOption("pagedown");
            break;
          case "Home":
            if (!j) return;
            s.focusOption("first");
            break;
          case "End":
            if (!j) return;
            s.focusOption("last");
            break;
          default:
            return;
        }
        m.preventDefault();
      }
    }, s.state.instancePrefix = "react-select-" + (s.props.instanceId || ++wT), s.state.selectValue = My(o.value), o.menuIsOpen && s.state.selectValue.length) {
      var d = s.getFocusableOptionsWithIds(), h = s.buildFocusableOptions(), y = h.indexOf(s.state.selectValue[0]);
      s.state.focusableOptionsWithIds = d, s.state.focusedOption = h[y], s.state.focusedOptionId = ep(d, h[y]);
    }
    return s;
  }
  return KE(r, [{
    key: "componentDidMount",
    value: function() {
      this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && Ry(this.menuListRef, this.focusedOptionRef), hT() && this.setState({
        isAppleDevice: !0
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function(s) {
      var d = this.props, h = d.isDisabled, y = d.menuIsOpen, m = this.state.isFocused;
      // ensure focus is restored correctly when the control becomes enabled
      (m && !h && s.isDisabled || // ensure focus is on the Input when the menu opens
      m && y && !s.menuIsOpen) && this.focusInput(), m && h && !s.isDisabled ? this.setState({
        isFocused: !1
      }, this.onMenuClose) : !m && !h && s.isDisabled && this.inputRef === document.activeElement && this.setState({
        isFocused: !0
      }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (Ry(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1);
    }
  }, {
    key: "componentWillUnmount",
    value: function() {
      this.stopListeningComposition(), this.stopListeningToTouch(), document.removeEventListener("scroll", this.onScroll, !0);
    }
    // ==============================
    // Consumer Handlers
    // ==============================
  }, {
    key: "onMenuOpen",
    value: function() {
      this.props.onMenuOpen();
    }
  }, {
    key: "onMenuClose",
    value: function() {
      this.onInputChange("", {
        action: "menu-close",
        prevInputValue: this.props.inputValue
      }), this.props.onMenuClose();
    }
  }, {
    key: "onInputChange",
    value: function(s, d) {
      this.props.onInputChange(s, d);
    }
    // ==============================
    // Methods
    // ==============================
  }, {
    key: "focusInput",
    value: function() {
      this.inputRef && this.inputRef.focus();
    }
  }, {
    key: "blurInput",
    value: function() {
      this.inputRef && this.inputRef.blur();
    }
    // aliased for consumers
  }, {
    key: "openMenu",
    value: function(s) {
      var d = this, h = this.state, y = h.selectValue, m = h.isFocused, v = this.buildFocusableOptions(), C = s === "first" ? 0 : v.length - 1;
      if (!this.props.isMulti) {
        var x = v.indexOf(y[0]);
        x > -1 && (C = x);
      }
      this.scrollToFocusedOptionOnUpdate = !(m && this.menuListRef), this.setState({
        inputIsHiddenAfterUpdate: !1,
        focusedValue: null,
        focusedOption: v[C],
        focusedOptionId: this.getFocusedOptionId(v[C])
      }, function() {
        return d.onMenuOpen();
      });
    }
  }, {
    key: "focusValue",
    value: function(s) {
      var d = this.state, h = d.selectValue, y = d.focusedValue;
      if (this.props.isMulti) {
        this.setState({
          focusedOption: null
        });
        var m = h.indexOf(y);
        y || (m = -1);
        var v = h.length - 1, C = -1;
        if (h.length) {
          switch (s) {
            case "previous":
              m === 0 ? C = 0 : m === -1 ? C = v : C = m - 1;
              break;
            case "next":
              m > -1 && m < v && (C = m + 1);
              break;
          }
          this.setState({
            inputIsHidden: C !== -1,
            focusedValue: h[C]
          });
        }
      }
    }
  }, {
    key: "focusOption",
    value: function() {
      var s = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "first", d = this.props.pageSize, h = this.state.focusedOption, y = this.getFocusableOptions();
      if (y.length) {
        var m = 0, v = y.indexOf(h);
        h || (v = -1), s === "up" ? m = v > 0 ? v - 1 : y.length - 1 : s === "down" ? m = (v + 1) % y.length : s === "pageup" ? (m = v - d, m < 0 && (m = 0)) : s === "pagedown" ? (m = v + d, m > y.length - 1 && (m = y.length - 1)) : s === "last" && (m = y.length - 1), this.scrollToFocusedOptionOnUpdate = !0, this.setState({
          focusedOption: y[m],
          focusedValue: null,
          focusedOptionId: this.getFocusedOptionId(y[m])
        });
      }
    }
  }, {
    key: "getTheme",
    value: (
      // ==============================
      // Getters
      // ==============================
      (function() {
        return this.props.theme ? typeof this.props.theme == "function" ? this.props.theme(Ph) : ge(ge({}, Ph), this.props.theme) : Ph;
      })
    )
  }, {
    key: "getCommonProps",
    value: function() {
      var s = this.clearValue, d = this.cx, h = this.getStyles, y = this.getClassNames, m = this.getValue, v = this.selectOption, C = this.setValue, x = this.props, A = x.isMulti, R = x.isRtl, L = x.options, N = this.hasValue();
      return {
        clearValue: s,
        cx: d,
        getStyles: h,
        getClassNames: y,
        getValue: m,
        hasValue: N,
        isMulti: A,
        isRtl: R,
        options: L,
        selectOption: v,
        selectProps: x,
        setValue: C,
        theme: this.getTheme()
      };
    }
  }, {
    key: "hasValue",
    value: function() {
      var s = this.state.selectValue;
      return s.length > 0;
    }
  }, {
    key: "hasOptions",
    value: function() {
      return !!this.getFocusableOptions().length;
    }
  }, {
    key: "isClearable",
    value: function() {
      var s = this.props, d = s.isClearable, h = s.isMulti;
      return d === void 0 ? h : d;
    }
  }, {
    key: "isOptionDisabled",
    value: function(s, d) {
      return P0(this.props, s, d);
    }
  }, {
    key: "isOptionSelected",
    value: function(s, d) {
      return e1(this.props, s, d);
    }
  }, {
    key: "filterOption",
    value: function(s, d) {
      return t1(this.props, s, d);
    }
  }, {
    key: "formatOptionLabel",
    value: function(s, d) {
      if (typeof this.props.formatOptionLabel == "function") {
        var h = this.props.inputValue, y = this.state.selectValue;
        return this.props.formatOptionLabel(s, {
          context: d,
          inputValue: h,
          selectValue: y
        });
      } else
        return this.getOptionLabel(s);
    }
  }, {
    key: "formatGroupLabel",
    value: function(s) {
      return this.props.formatGroupLabel(s);
    }
    // ==============================
    // Mouse Handlers
    // ==============================
  }, {
    key: "startListeningComposition",
    value: (
      // ==============================
      // Composition Handlers
      // ==============================
      (function() {
        document && document.addEventListener && (document.addEventListener("compositionstart", this.onCompositionStart, !1), document.addEventListener("compositionend", this.onCompositionEnd, !1));
      })
    )
  }, {
    key: "stopListeningComposition",
    value: function() {
      document && document.removeEventListener && (document.removeEventListener("compositionstart", this.onCompositionStart), document.removeEventListener("compositionend", this.onCompositionEnd));
    }
  }, {
    key: "startListeningToTouch",
    value: (
      // ==============================
      // Touch Handlers
      // ==============================
      (function() {
        document && document.addEventListener && (document.addEventListener("touchstart", this.onTouchStart, !1), document.addEventListener("touchmove", this.onTouchMove, !1), document.addEventListener("touchend", this.onTouchEnd, !1));
      })
    )
  }, {
    key: "stopListeningToTouch",
    value: function() {
      document && document.removeEventListener && (document.removeEventListener("touchstart", this.onTouchStart), document.removeEventListener("touchmove", this.onTouchMove), document.removeEventListener("touchend", this.onTouchEnd));
    }
  }, {
    key: "renderInput",
    value: (
      // ==============================
      // Renderers
      // ==============================
      (function() {
        var s = this.props, d = s.isDisabled, h = s.isSearchable, y = s.inputId, m = s.inputValue, v = s.tabIndex, C = s.form, x = s.menuIsOpen, A = s.required, R = this.getComponents(), L = R.Input, N = this.state, j = N.inputIsHidden, H = N.ariaSelection, Q = this.commonProps, X = y || this.getElementId("input"), W = ge(ge(ge({
          "aria-autocomplete": "list",
          "aria-expanded": x,
          "aria-haspopup": !0,
          "aria-errormessage": this.props["aria-errormessage"],
          "aria-invalid": this.props["aria-invalid"],
          "aria-label": this.props["aria-label"],
          "aria-labelledby": this.props["aria-labelledby"],
          "aria-required": A,
          role: "combobox",
          "aria-activedescendant": this.state.isAppleDevice ? void 0 : this.state.focusedOptionId || ""
        }, x && {
          "aria-controls": this.getElementId("listbox")
        }), !h && {
          "aria-readonly": !0
        }), this.hasValue() ? H?.action === "initial-input-focus" && {
          "aria-describedby": this.getElementId("live-region")
        } : {
          "aria-describedby": this.getElementId("placeholder")
        });
        return h ? /* @__PURE__ */ S.createElement(L, ve({}, Q, {
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          id: X,
          innerRef: this.getInputRef,
          isDisabled: d,
          isHidden: j,
          onBlur: this.onInputBlur,
          onChange: this.handleInputChange,
          onFocus: this.onInputFocus,
          spellCheck: "false",
          tabIndex: v,
          form: C,
          type: "text",
          value: m
        }, W)) : /* @__PURE__ */ S.createElement(eT, ve({
          id: X,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: Sf,
          onFocus: this.onInputFocus,
          disabled: d,
          tabIndex: v,
          inputMode: "none",
          form: C,
          value: ""
        }, W));
      })
    )
  }, {
    key: "renderPlaceholderOrValue",
    value: function() {
      var s = this, d = this.getComponents(), h = d.MultiValue, y = d.MultiValueContainer, m = d.MultiValueLabel, v = d.MultiValueRemove, C = d.SingleValue, x = d.Placeholder, A = this.commonProps, R = this.props, L = R.controlShouldRenderValue, N = R.isDisabled, j = R.isMulti, H = R.inputValue, Q = R.placeholder, X = this.state, W = X.selectValue, U = X.focusedValue, Z = X.isFocused;
      if (!this.hasValue() || !L)
        return H ? null : /* @__PURE__ */ S.createElement(x, ve({}, A, {
          key: "placeholder",
          isDisabled: N,
          isFocused: Z,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), Q);
      if (j)
        return W.map(function(oe, we) {
          var je = oe === U, ke = "".concat(s.getOptionLabel(oe), "-").concat(s.getOptionValue(oe));
          return /* @__PURE__ */ S.createElement(h, ve({}, A, {
            components: {
              Container: y,
              Label: m,
              Remove: v
            },
            isFocused: je,
            isDisabled: N,
            key: ke,
            index: we,
            removeProps: {
              onClick: function() {
                return s.removeValue(oe);
              },
              onTouchEnd: function() {
                return s.removeValue(oe);
              },
              onMouseDown: function(ut) {
                ut.preventDefault();
              }
            },
            data: oe
          }), s.formatOptionLabel(oe, "value"));
        });
      if (H)
        return null;
      var B = W[0];
      return /* @__PURE__ */ S.createElement(C, ve({}, A, {
        data: B,
        isDisabled: N
      }), this.formatOptionLabel(B, "value"));
    }
  }, {
    key: "renderClearIndicator",
    value: function() {
      var s = this.getComponents(), d = s.ClearIndicator, h = this.commonProps, y = this.props, m = y.isDisabled, v = y.isLoading, C = this.state.isFocused;
      if (!this.isClearable() || !d || m || !this.hasValue() || v)
        return null;
      var x = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ S.createElement(d, ve({}, h, {
        innerProps: x,
        isFocused: C
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function() {
      var s = this.getComponents(), d = s.LoadingIndicator, h = this.commonProps, y = this.props, m = y.isDisabled, v = y.isLoading, C = this.state.isFocused;
      if (!d || !v) return null;
      var x = {
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ S.createElement(d, ve({}, h, {
        innerProps: x,
        isDisabled: m,
        isFocused: C
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function() {
      var s = this.getComponents(), d = s.DropdownIndicator, h = s.IndicatorSeparator;
      if (!d || !h) return null;
      var y = this.commonProps, m = this.props.isDisabled, v = this.state.isFocused;
      return /* @__PURE__ */ S.createElement(h, ve({}, y, {
        isDisabled: m,
        isFocused: v
      }));
    }
  }, {
    key: "renderDropdownIndicator",
    value: function() {
      var s = this.getComponents(), d = s.DropdownIndicator;
      if (!d) return null;
      var h = this.commonProps, y = this.props.isDisabled, m = this.state.isFocused, v = {
        onMouseDown: this.onDropdownIndicatorMouseDown,
        onTouchEnd: this.onDropdownIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ S.createElement(d, ve({}, h, {
        innerProps: v,
        isDisabled: y,
        isFocused: m
      }));
    }
  }, {
    key: "renderMenu",
    value: function() {
      var s = this, d = this.getComponents(), h = d.Group, y = d.GroupHeading, m = d.Menu, v = d.MenuList, C = d.MenuPortal, x = d.LoadingMessage, A = d.NoOptionsMessage, R = d.Option, L = this.commonProps, N = this.state.focusedOption, j = this.props, H = j.captureMenuScroll, Q = j.inputValue, X = j.isLoading, W = j.loadingMessage, U = j.minMenuHeight, Z = j.maxMenuHeight, B = j.menuIsOpen, oe = j.menuPlacement, we = j.menuPosition, je = j.menuPortalTarget, ke = j.menuShouldBlockScroll, Ve = j.menuShouldScrollIntoView, ut = j.noOptionsMessage, tt = j.onMenuScrollToTop, Ue = j.onMenuScrollToBottom;
      if (!B) return null;
      var k = function(ee, ie) {
        var ce = ee.type, ue = ee.data, he = ee.isDisabled, Le = ee.isSelected, ne = ee.label, _t = ee.value, Ct = N === ue, Ot = he ? void 0 : function() {
          return s.onOptionHover(ue);
        }, Xn = he ? void 0 : function() {
          return s.selectOption(ue);
        }, xt = "".concat(s.getElementId("option"), "-").concat(ie), ye = {
          id: xt,
          onClick: Xn,
          onMouseMove: Ot,
          onMouseOver: Ot,
          tabIndex: -1,
          role: "option",
          "aria-selected": s.state.isAppleDevice ? void 0 : Le
          // is not supported on Apple devices
        };
        return /* @__PURE__ */ S.createElement(R, ve({}, L, {
          innerProps: ye,
          data: ue,
          isDisabled: he,
          isSelected: Le,
          key: xt,
          label: ne,
          type: ce,
          value: _t,
          isFocused: Ct,
          innerRef: Ct ? s.getFocusedOptionRef : void 0
        }), s.formatOptionLabel(ee.data, "menu"));
      }, ae;
      if (this.hasOptions())
        ae = this.getCategorizedOptions().map(function(Y) {
          if (Y.type === "group") {
            var ee = Y.data, ie = Y.options, ce = Y.index, ue = "".concat(s.getElementId("group"), "-").concat(ce), he = "".concat(ue, "-heading");
            return /* @__PURE__ */ S.createElement(h, ve({}, L, {
              key: ue,
              data: ee,
              options: ie,
              Heading: y,
              headingProps: {
                id: he,
                data: Y.data
              },
              label: s.formatGroupLabel(Y.data)
            }), Y.options.map(function(Le) {
              return k(Le, "".concat(ce, "-").concat(Le.index));
            }));
          } else if (Y.type === "option")
            return k(Y, "".concat(Y.index));
        });
      else if (X) {
        var le = W({
          inputValue: Q
        });
        if (le === null) return null;
        ae = /* @__PURE__ */ S.createElement(x, L, le);
      } else {
        var be = ut({
          inputValue: Q
        });
        if (be === null) return null;
        ae = /* @__PURE__ */ S.createElement(A, L, be);
      }
      var Ee = {
        minMenuHeight: U,
        maxMenuHeight: Z,
        menuPlacement: oe,
        menuPosition: we,
        menuShouldScrollIntoView: Ve
      }, O = /* @__PURE__ */ S.createElement(zO, ve({}, L, Ee), function(Y) {
        var ee = Y.ref, ie = Y.placerProps, ce = ie.placement, ue = ie.maxHeight;
        return /* @__PURE__ */ S.createElement(m, ve({}, L, Ee, {
          innerRef: ee,
          innerProps: {
            onMouseDown: s.onMenuMouseDown,
            onMouseMove: s.onMenuMouseMove
          },
          isLoading: X,
          placement: ce
        }), /* @__PURE__ */ S.createElement(rT, {
          captureEnabled: H,
          onTopArrive: tt,
          onBottomArrive: Ue,
          lockEnabled: ke
        }, function(he) {
          return /* @__PURE__ */ S.createElement(v, ve({}, L, {
            innerRef: function(ne) {
              s.getMenuListRef(ne), he(ne);
            },
            innerProps: {
              role: "listbox",
              "aria-multiselectable": L.isMulti,
              id: s.getElementId("listbox")
            },
            isLoading: X,
            maxHeight: ue,
            focusedOption: N
          }), ae);
        }));
      });
      return je || we === "fixed" ? /* @__PURE__ */ S.createElement(C, ve({}, L, {
        appendTo: je,
        controlElement: this.controlRef,
        menuPlacement: oe,
        menuPosition: we
      }), O) : O;
    }
  }, {
    key: "renderFormField",
    value: function() {
      var s = this, d = this.props, h = d.delimiter, y = d.isDisabled, m = d.isMulti, v = d.name, C = d.required, x = this.state.selectValue;
      if (C && !this.hasValue() && !y)
        return /* @__PURE__ */ S.createElement(uT, {
          name: v,
          onFocus: this.onValueInputFocus
        });
      if (!(!v || y))
        if (m)
          if (h) {
            var A = x.map(function(N) {
              return s.getOptionValue(N);
            }).join(h);
            return /* @__PURE__ */ S.createElement("input", {
              name: v,
              type: "hidden",
              value: A
            });
          } else {
            var R = x.length > 0 ? x.map(function(N, j) {
              return /* @__PURE__ */ S.createElement("input", {
                key: "i-".concat(j),
                name: v,
                type: "hidden",
                value: s.getOptionValue(N)
              });
            }) : /* @__PURE__ */ S.createElement("input", {
              name: v,
              type: "hidden",
              value: ""
            });
            return /* @__PURE__ */ S.createElement("div", null, R);
          }
        else {
          var L = x[0] ? this.getOptionValue(x[0]) : "";
          return /* @__PURE__ */ S.createElement("input", {
            name: v,
            type: "hidden",
            value: L
          });
        }
    }
  }, {
    key: "renderLiveRegion",
    value: function() {
      var s = this.commonProps, d = this.state, h = d.ariaSelection, y = d.focusedOption, m = d.focusedValue, v = d.isFocused, C = d.selectValue, x = this.getFocusableOptions();
      return /* @__PURE__ */ S.createElement(Qx, ve({}, s, {
        id: this.getElementId("live-region"),
        ariaSelection: h,
        focusedOption: y,
        focusedValue: m,
        isFocused: v,
        selectValue: C,
        focusableOptions: x,
        isAppleDevice: this.state.isAppleDevice
      }));
    }
  }, {
    key: "render",
    value: function() {
      var s = this.getComponents(), d = s.Control, h = s.IndicatorsContainer, y = s.SelectContainer, m = s.ValueContainer, v = this.props, C = v.className, x = v.id, A = v.isDisabled, R = v.menuIsOpen, L = this.state.isFocused, N = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */ S.createElement(y, ve({}, N, {
        className: C,
        innerProps: {
          id: x,
          onKeyDown: this.onKeyDown
        },
        isDisabled: A,
        isFocused: L
      }), this.renderLiveRegion(), /* @__PURE__ */ S.createElement(d, ve({}, N, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: A,
        isFocused: L,
        menuIsOpen: R
      }), /* @__PURE__ */ S.createElement(m, ve({}, N, {
        isDisabled: A
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ S.createElement(h, ve({}, N, {
        isDisabled: A
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(s, d) {
      var h = d.prevProps, y = d.clearFocusValueOnUpdate, m = d.inputIsHiddenAfterUpdate, v = d.ariaSelection, C = d.isFocused, x = d.prevWasFocused, A = d.instancePrefix, R = s.options, L = s.value, N = s.menuIsOpen, j = s.inputValue, H = s.isMulti, Q = My(L), X = {};
      if (h && (L !== h.value || R !== h.options || N !== h.menuIsOpen || j !== h.inputValue)) {
        var W = N ? xT(s, Q) : [], U = N ? Gy(af(s, Q), "".concat(A, "-option")) : [], Z = y ? TT(d, Q) : null, B = AT(d, W), oe = ep(U, B);
        X = {
          selectValue: Q,
          focusedOption: B,
          focusedOptionId: oe,
          focusableOptionsWithIds: U,
          focusedValue: Z,
          clearFocusValueOnUpdate: !1
        };
      }
      var we = m != null && s !== h ? {
        inputIsHidden: m,
        inputIsHiddenAfterUpdate: void 0
      } : {}, je = v, ke = C && x;
      return C && !ke && (je = {
        value: Zc(H, Q, Q[0] || null),
        options: Q,
        action: "initial-input-focus"
      }, ke = !x), v?.action === "initial-input-focus" && (je = null), ge(ge(ge({}, X), we), {}, {
        prevProps: s,
        ariaSelection: je,
        prevWasFocused: ke
      });
    }
  }]), r;
})(S.Component);
a1.defaultProps = OT;
var MT = /* @__PURE__ */ S.forwardRef(function(a, i) {
  var r = QE(a);
  return /* @__PURE__ */ S.createElement(a1, ve({
    ref: i
  }, r));
}), Iy = MT;
function tm(a, i) {
  var r = function(d) {
    return i && S.isValidElement(d) ? i(d) : d;
  }, o = /* @__PURE__ */ Object.create(null);
  return a && S.Children.map(a, function(s) {
    return s;
  }).forEach(function(s) {
    o[s.key] = r(s);
  }), o;
}
function RT(a, i) {
  a = a || {}, i = i || {};
  function r(C) {
    return C in i ? i[C] : a[C];
  }
  var o = /* @__PURE__ */ Object.create(null), s = [];
  for (var d in a)
    d in i ? s.length && (o[d] = s, s = []) : s.push(d);
  var h, y = {};
  for (var m in i) {
    if (o[m])
      for (h = 0; h < o[m].length; h++) {
        var v = o[m][h];
        y[o[m][h]] = r(v);
      }
    y[m] = r(m);
  }
  for (h = 0; h < s.length; h++)
    y[s[h]] = r(s[h]);
  return y;
}
function hr(a, i, r) {
  return r[i] != null ? r[i] : a.props[i];
}
function DT(a, i) {
  return tm(a.children, function(r) {
    return S.cloneElement(r, {
      onExited: i.bind(null, r),
      in: !0,
      appear: hr(r, "appear", a),
      enter: hr(r, "enter", a),
      exit: hr(r, "exit", a)
    });
  });
}
function NT(a, i, r) {
  var o = tm(a.children), s = RT(i, o);
  return Object.keys(s).forEach(function(d) {
    var h = s[d];
    if (S.isValidElement(h)) {
      var y = d in i, m = d in o, v = i[d], C = S.isValidElement(v) && !v.props.in;
      m && (!y || C) ? s[d] = S.cloneElement(h, {
        onExited: r.bind(null, h),
        in: !0,
        exit: hr(h, "exit", a),
        enter: hr(h, "enter", a)
      }) : !m && y && !C ? s[d] = S.cloneElement(h, {
        in: !1
      }) : m && y && S.isValidElement(v) && (s[d] = S.cloneElement(h, {
        onExited: r.bind(null, h),
        in: v.props.in,
        exit: hr(h, "exit", a),
        enter: hr(h, "enter", a)
      }));
    }
  }), s;
}
var jT = Object.values || function(a) {
  return Object.keys(a).map(function(i) {
    return a[i];
  });
}, zT = {
  component: "div",
  childFactory: function(i) {
    return i;
  }
}, kf = /* @__PURE__ */ (function(a) {
  hb(i, a);
  function i(o, s) {
    var d;
    d = a.call(this, o, s) || this;
    var h = d.handleExited.bind(g0(d));
    return d.state = {
      contextValue: {
        isMounting: !0
      },
      handleExited: h,
      firstRender: !0
    }, d;
  }
  var r = i.prototype;
  return r.componentDidMount = function() {
    this.mounted = !0, this.setState({
      contextValue: {
        isMounting: !1
      }
    });
  }, r.componentWillUnmount = function() {
    this.mounted = !1;
  }, i.getDerivedStateFromProps = function(s, d) {
    var h = d.children, y = d.handleExited, m = d.firstRender;
    return {
      children: m ? DT(s, y) : NT(s, h, y),
      firstRender: !1
    };
  }, r.handleExited = function(s, d) {
    var h = tm(this.props.children);
    s.key in h || (s.props.onExited && s.props.onExited(d), this.mounted && this.setState(function(y) {
      var m = ve({}, y.children);
      return delete m[s.key], {
        children: m
      };
    }));
  }, r.render = function() {
    var s = this.props, d = s.component, h = s.childFactory, y = Mf(s, ["component", "childFactory"]), m = this.state.contextValue, v = jT(this.state.children).map(h);
    return delete y.appear, delete y.enter, delete y.exit, d === null ? /* @__PURE__ */ It.createElement(ff.Provider, {
      value: m
    }, v) : /* @__PURE__ */ It.createElement(ff.Provider, {
      value: m
    }, /* @__PURE__ */ It.createElement(d, y, v));
  }, i;
})(It.Component);
kf.propTypes = {};
kf.defaultProps = zT;
var LT = ["in", "onExited", "appear", "enter", "exit"], HT = function(i) {
  return function(r) {
    r.in, r.onExited, r.appear, r.enter, r.exit;
    var o = Gn(r, LT);
    return /* @__PURE__ */ S.createElement(i, o);
  };
}, VT = HT, UT = ["component", "duration", "in", "onExited"], i1 = function(i) {
  var r = i.component, o = i.duration, s = o === void 0 ? 1 : o, d = i.in;
  i.onExited;
  var h = Gn(i, UT), y = S.useRef(null), m = {
    entering: {
      opacity: 0
    },
    entered: {
      opacity: 1,
      transition: "opacity ".concat(s, "ms")
    },
    exiting: {
      opacity: 0
    },
    exited: {
      opacity: 0
    }
  };
  return /* @__PURE__ */ S.createElement(Ga, {
    mountOnEnter: !0,
    unmountOnExit: !0,
    in: d,
    timeout: s,
    nodeRef: y
  }, function(v) {
    var C = {
      style: ge({}, m[v]),
      ref: y
    };
    return /* @__PURE__ */ S.createElement(r, ve({
      innerProps: C
    }, h));
  });
}, Op = 260, BT = function(i) {
  var r = i.children, o = i.in, s = i.onExited, d = S.useRef(null), h = S.useState("auto"), y = Ta(h, 2), m = y[0], v = y[1];
  S.useEffect(function() {
    var x = d.current;
    if (x) {
      var A = window.requestAnimationFrame(function() {
        return v(x.getBoundingClientRect().width);
      });
      return function() {
        return window.cancelAnimationFrame(A);
      };
    }
  }, []);
  var C = function(A) {
    switch (A) {
      default:
        return {
          width: m
        };
      case "exiting":
        return {
          width: 0,
          transition: "width ".concat(Op, "ms ease-out")
        };
      case "exited":
        return {
          width: 0
        };
    }
  };
  return /* @__PURE__ */ S.createElement(Ga, {
    enter: !1,
    mountOnEnter: !0,
    unmountOnExit: !0,
    in: o,
    onExited: function() {
      var A = d.current;
      A && s?.(A);
    },
    timeout: Op,
    nodeRef: d
  }, function(x) {
    return /* @__PURE__ */ S.createElement("div", {
      ref: d,
      style: ge({
        overflow: "hidden",
        whiteSpace: "nowrap"
      }, C(x))
    }, r);
  });
}, $T = ["in", "onExited"], kT = function(i) {
  return function(r) {
    var o = r.in, s = r.onExited, d = Gn(r, $T);
    return /* @__PURE__ */ S.createElement(BT, {
      in: o,
      onExited: s
    }, /* @__PURE__ */ S.createElement(i, ve({
      cropWithEllipsis: o
    }, d)));
  };
}, qT = kT, YT = function(i) {
  return function(r) {
    return /* @__PURE__ */ S.createElement(i1, ve({
      component: i,
      duration: r.isMulti ? Op : 1
    }, r));
  };
}, GT = YT, XT = function(i) {
  return function(r) {
    return /* @__PURE__ */ S.createElement(i1, ve({
      component: i
    }, r));
  };
}, IT = XT, FT = ["component"], QT = ["children"], ZT = function(i) {
  return function(r) {
    return r.isMulti ? /* @__PURE__ */ S.createElement(KT, ve({
      component: i
    }, r)) : /* @__PURE__ */ S.createElement(kf, ve({
      component: i
    }, r));
  };
}, KT = function(i) {
  var r = i.component, o = Gn(i, FT), s = JT(o);
  return /* @__PURE__ */ S.createElement(kf, ve({
    component: r
  }, s));
}, JT = function(i) {
  var r = i.children, o = Gn(i, QT), s = o.isMulti, d = o.hasValue, h = o.innerProps, y = o.selectProps, m = y.components, v = y.controlShouldRenderValue, C = S.useState(s && v && d), x = Ta(C, 2), A = x[0], R = x[1], L = S.useState(!1), N = Ta(L, 2), j = N[0], H = N[1];
  S.useEffect(function() {
    d && !A && R(!0);
  }, [d, A]), S.useEffect(function() {
    j && !d && A && R(!1), H(!1);
  }, [j, d, A]);
  var Q = function() {
    return H(!0);
  }, X = function(B) {
    if (s && /* @__PURE__ */ S.isValidElement(B)) {
      if (B.type === m.MultiValue)
        return /* @__PURE__ */ S.cloneElement(B, {
          onExited: Q
        });
      if (B.type === m.Placeholder && A)
        return null;
    }
    return B;
  }, W = ge(ge({}, h), {}, {
    style: ge(ge({}, h?.style), {}, {
      display: s && d || A ? "flex" : "grid"
    })
  }), U = ge(ge({}, o), {}, {
    innerProps: W,
    children: S.Children.toArray(r).map(X)
  });
  return U;
}, WT = ZT, PT = ["Input", "MultiValue", "Placeholder", "SingleValue", "ValueContainer"], l1 = function() {
  var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = X0({
    components: i
  }), o = r.Input, s = r.MultiValue, d = r.Placeholder, h = r.SingleValue, y = r.ValueContainer, m = Gn(r, PT);
  return ge({
    Input: VT(o),
    MultiValue: qT(s),
    Placeholder: GT(d),
    SingleValue: IT(h),
    ValueContainer: WT(y)
  }, m);
}, uu = l1();
uu.Input;
uu.MultiValue;
uu.Placeholder;
uu.SingleValue;
uu.ValueContainer;
var eA = I0(l1), aa = function() {
  return aa = Object.assign || function(i) {
    for (var r, o = 1, s = arguments.length; o < s; o++) {
      r = arguments[o];
      for (var d in r) Object.prototype.hasOwnProperty.call(r, d) && (i[d] = r[d]);
    }
    return i;
  }, aa.apply(this, arguments);
};
function nu(a, i, r) {
  if (r || arguments.length === 2) for (var o = 0, s = i.length, d; o < s; o++)
    (d || !(o in i)) && (d || (d = Array.prototype.slice.call(i, 0, o)), d[o] = i[o]);
  return a.concat(d || Array.prototype.slice.call(i));
}
var Dt = "-ms-", Js = "-moz-", mt = "-webkit-", r1 = "comm", qf = "rule", nm = "decl", tA = "@import", o1 = "@keyframes", nA = "@layer", s1 = Math.abs, am = String.fromCharCode, xp = Object.assign;
function aA(a, i) {
  return vn(a, 0) ^ 45 ? (((i << 2 ^ vn(a, 0)) << 2 ^ vn(a, 1)) << 2 ^ vn(a, 2)) << 2 ^ vn(a, 3) : 0;
}
function u1(a) {
  return a.trim();
}
function Hi(a, i) {
  return (a = i.exec(a)) ? a[0] : a;
}
function Ge(a, i, r) {
  return a.replace(i, r);
}
function lf(a, i, r) {
  return a.indexOf(i, r);
}
function vn(a, i) {
  return a.charCodeAt(i) | 0;
}
function vo(a, i, r) {
  return a.slice(i, r);
}
function di(a) {
  return a.length;
}
function c1(a) {
  return a.length;
}
function Ks(a, i) {
  return i.push(a), a;
}
function iA(a, i) {
  return a.map(i).join("");
}
function Fy(a, i) {
  return a.filter(function(r) {
    return !Hi(r, i);
  });
}
var Yf = 1, yo = 1, f1 = 0, Aa = 0, nn = 0, Oo = "";
function Gf(a, i, r, o, s, d, h, y) {
  return { value: a, root: i, parent: r, type: o, props: s, children: d, line: Yf, column: yo, length: h, return: "", siblings: y };
}
function Nl(a, i) {
  return xp(Gf("", null, null, "", null, null, 0, a.siblings), a, { length: -a.length }, i);
}
function fo(a) {
  for (; a.root; )
    a = Nl(a.root, { children: [a] });
  Ks(a, a.siblings);
}
function lA() {
  return nn;
}
function rA() {
  return nn = Aa > 0 ? vn(Oo, --Aa) : 0, yo--, nn === 10 && (yo = 1, Yf--), nn;
}
function Ya() {
  return nn = Aa < f1 ? vn(Oo, Aa++) : 0, yo++, nn === 10 && (yo = 1, Yf++), nn;
}
function mr() {
  return vn(Oo, Aa);
}
function rf() {
  return Aa;
}
function Xf(a, i) {
  return vo(Oo, a, i);
}
function Tp(a) {
  switch (a) {
    // \0 \t \n \r \s whitespace token
    case 0:
    case 9:
    case 10:
    case 13:
    case 32:
      return 5;
    // ! + , / > @ ~ isolate token
    case 33:
    case 43:
    case 44:
    case 47:
    case 62:
    case 64:
    case 126:
    // ; { } breakpoint token
    case 59:
    case 123:
    case 125:
      return 4;
    // : accompanied token
    case 58:
      return 3;
    // " ' ( [ opening delimit token
    case 34:
    case 39:
    case 40:
    case 91:
      return 2;
    // ) ] closing delimit token
    case 41:
    case 93:
      return 1;
  }
  return 0;
}
function oA(a) {
  return Yf = yo = 1, f1 = di(Oo = a), Aa = 0, [];
}
function sA(a) {
  return Oo = "", a;
}
function tp(a) {
  return u1(Xf(Aa - 1, Ap(a === 91 ? a + 2 : a === 40 ? a + 1 : a)));
}
function uA(a) {
  for (; (nn = mr()) && nn < 33; )
    Ya();
  return Tp(a) > 2 || Tp(nn) > 3 ? "" : " ";
}
function cA(a, i) {
  for (; --i && Ya() && !(nn < 48 || nn > 102 || nn > 57 && nn < 65 || nn > 70 && nn < 97); )
    ;
  return Xf(a, rf() + (i < 6 && mr() == 32 && Ya() == 32));
}
function Ap(a) {
  for (; Ya(); )
    switch (nn) {
      // ] ) " '
      case a:
        return Aa;
      // " '
      case 34:
      case 39:
        a !== 34 && a !== 39 && Ap(nn);
        break;
      // (
      case 40:
        a === 41 && Ap(a);
        break;
      // \
      case 92:
        Ya();
        break;
    }
  return Aa;
}
function fA(a, i) {
  for (; Ya() && a + nn !== 57; )
    if (a + nn === 84 && mr() === 47)
      break;
  return "/*" + Xf(i, Aa - 1) + "*" + am(a === 47 ? a : Ya());
}
function dA(a) {
  for (; !Tp(mr()); )
    Ya();
  return Xf(a, Aa);
}
function hA(a) {
  return sA(of("", null, null, null, [""], a = oA(a), 0, [0], a));
}
function of(a, i, r, o, s, d, h, y, m) {
  for (var v = 0, C = 0, x = h, A = 0, R = 0, L = 0, N = 1, j = 1, H = 1, Q = 0, X = "", W = s, U = d, Z = o, B = X; j; )
    switch (L = Q, Q = Ya()) {
      // (
      case 40:
        if (L != 108 && vn(B, x - 1) == 58) {
          lf(B += Ge(tp(Q), "&", "&\f"), "&\f", s1(v ? y[v - 1] : 0)) != -1 && (H = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        B += tp(Q);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        B += uA(L);
        break;
      // \
      case 92:
        B += cA(rf() - 1, 7);
        continue;
      // /
      case 47:
        switch (mr()) {
          case 42:
          case 47:
            Ks(pA(fA(Ya(), rf()), i, r, m), m);
            break;
          default:
            B += "/";
        }
        break;
      // {
      case 123 * N:
        y[v++] = di(B) * H;
      // } ; \0
      case 125 * N:
      case 59:
      case 0:
        switch (Q) {
          // \0 }
          case 0:
          case 125:
            j = 0;
          // ;
          case 59 + C:
            H == -1 && (B = Ge(B, /\f/g, "")), R > 0 && di(B) - x && Ks(R > 32 ? Zy(B + ";", o, r, x - 1, m) : Zy(Ge(B, " ", "") + ";", o, r, x - 2, m), m);
            break;
          // @ ;
          case 59:
            B += ";";
          // { rule/at-rule
          default:
            if (Ks(Z = Qy(B, i, r, v, C, s, y, X, W = [], U = [], x, d), d), Q === 123)
              if (C === 0)
                of(B, i, Z, Z, W, d, x, y, U);
              else
                switch (A === 99 && vn(B, 3) === 110 ? 100 : A) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    of(a, Z, Z, o && Ks(Qy(a, Z, Z, 0, 0, s, y, X, s, W = [], x, U), U), s, U, x, y, o ? W : U);
                    break;
                  default:
                    of(B, Z, Z, Z, [""], U, 0, y, U);
                }
        }
        v = C = R = 0, N = H = 1, X = B = "", x = h;
        break;
      // :
      case 58:
        x = 1 + di(B), R = L;
      default:
        if (N < 1) {
          if (Q == 123)
            --N;
          else if (Q == 125 && N++ == 0 && rA() == 125)
            continue;
        }
        switch (B += am(Q), Q * N) {
          // &
          case 38:
            H = C > 0 ? 1 : (B += "\f", -1);
            break;
          // ,
          case 44:
            y[v++] = (di(B) - 1) * H, H = 1;
            break;
          // @
          case 64:
            mr() === 45 && (B += tp(Ya())), A = mr(), C = x = di(X = B += dA(rf())), Q++;
            break;
          // -
          case 45:
            L === 45 && di(B) == 2 && (N = 0);
        }
    }
  return d;
}
function Qy(a, i, r, o, s, d, h, y, m, v, C, x) {
  for (var A = s - 1, R = s === 0 ? d : [""], L = c1(R), N = 0, j = 0, H = 0; N < o; ++N)
    for (var Q = 0, X = vo(a, A + 1, A = s1(j = h[N])), W = a; Q < L; ++Q)
      (W = u1(j > 0 ? R[Q] + " " + X : Ge(X, /&\f/g, R[Q]))) && (m[H++] = W);
  return Gf(a, i, r, s === 0 ? qf : y, m, v, C, x);
}
function pA(a, i, r, o) {
  return Gf(a, i, r, r1, am(lA()), vo(a, 2, -2), 0, o);
}
function Zy(a, i, r, o, s) {
  return Gf(a, i, r, nm, vo(a, 0, o), vo(a, o + 1, -1), o, s);
}
function d1(a, i, r) {
  switch (aA(a, i)) {
    // color-adjust
    case 5103:
      return mt + "print-" + a + a;
    // animation, animation-(delay|direction|duration|fill-mode|iteration-count|name|play-state|timing-function)
    case 5737:
    case 4201:
    case 3177:
    case 3433:
    case 1641:
    case 4457:
    case 2921:
    // text-decoration, filter, clip-path, backface-visibility, column, box-decoration-break
    case 5572:
    case 6356:
    case 5844:
    case 3191:
    case 6645:
    case 3005:
    // mask, mask-image, mask-(mode|clip|size), mask-(repeat|origin), mask-position, mask-composite,
    case 6391:
    case 5879:
    case 5623:
    case 6135:
    case 4599:
    case 4855:
    // background-clip, columns, column-(count|fill|gap|rule|rule-color|rule-style|rule-width|span|width)
    case 4215:
    case 6389:
    case 5109:
    case 5365:
    case 5621:
    case 3829:
      return mt + a + a;
    // tab-size
    case 4789:
      return Js + a + a;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return mt + a + Js + a + Dt + a + a;
    // writing-mode
    case 5936:
      switch (vn(a, i + 11)) {
        // vertical-l(r)
        case 114:
          return mt + a + Dt + Ge(a, /[svh]\w+-[tblr]{2}/, "tb") + a;
        // vertical-r(l)
        case 108:
          return mt + a + Dt + Ge(a, /[svh]\w+-[tblr]{2}/, "tb-rl") + a;
        // horizontal(-)tb
        case 45:
          return mt + a + Dt + Ge(a, /[svh]\w+-[tblr]{2}/, "lr") + a;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return mt + a + Dt + a + a;
    // order
    case 6165:
      return mt + a + Dt + "flex-" + a + a;
    // align-items
    case 5187:
      return mt + a + Ge(a, /(\w+).+(:[^]+)/, mt + "box-$1$2" + Dt + "flex-$1$2") + a;
    // align-self
    case 5443:
      return mt + a + Dt + "flex-item-" + Ge(a, /flex-|-self/g, "") + (Hi(a, /flex-|baseline/) ? "" : Dt + "grid-row-" + Ge(a, /flex-|-self/g, "")) + a;
    // align-content
    case 4675:
      return mt + a + Dt + "flex-line-pack" + Ge(a, /align-content|flex-|-self/g, "") + a;
    // flex-shrink
    case 5548:
      return mt + a + Dt + Ge(a, "shrink", "negative") + a;
    // flex-basis
    case 5292:
      return mt + a + Dt + Ge(a, "basis", "preferred-size") + a;
    // flex-grow
    case 6060:
      return mt + "box-" + Ge(a, "-grow", "") + mt + a + Dt + Ge(a, "grow", "positive") + a;
    // transition
    case 4554:
      return mt + Ge(a, /([^-])(transform)/g, "$1" + mt + "$2") + a;
    // cursor
    case 6187:
      return Ge(Ge(Ge(a, /(zoom-|grab)/, mt + "$1"), /(image-set)/, mt + "$1"), a, "") + a;
    // background, background-image
    case 5495:
    case 3959:
      return Ge(a, /(image-set\([^]*)/, mt + "$1$`$1");
    // justify-content
    case 4968:
      return Ge(Ge(a, /(.+:)(flex-)?(.*)/, mt + "box-pack:$3" + Dt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + mt + a + a;
    // justify-self
    case 4200:
      if (!Hi(a, /flex-|baseline/)) return Dt + "grid-column-align" + vo(a, i) + a;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return Dt + Ge(a, "template-", "") + a;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return r && r.some(function(o, s) {
        return i = s, Hi(o.props, /grid-\w+-end/);
      }) ? ~lf(a + (r = r[i].value), "span", 0) ? a : Dt + Ge(a, "-start", "") + a + Dt + "grid-row-span:" + (~lf(r, "span", 0) ? Hi(r, /\d+/) : +Hi(r, /\d+/) - +Hi(a, /\d+/)) + ";" : Dt + Ge(a, "-start", "") + a;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return r && r.some(function(o) {
        return Hi(o.props, /grid-\w+-start/);
      }) ? a : Dt + Ge(Ge(a, "-end", "-span"), "span ", "") + a;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Ge(a, /(.+)-inline(.+)/, mt + "$1$2") + a;
    // (min|max)?(width|height|inline-size|block-size)
    case 8116:
    case 7059:
    case 5753:
    case 5535:
    case 5445:
    case 5701:
    case 4933:
    case 4677:
    case 5533:
    case 5789:
    case 5021:
    case 4765:
      if (di(a) - 1 - i > 6)
        switch (vn(a, i + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (vn(a, i + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return Ge(a, /(.+:)(.+)-([^]+)/, "$1" + mt + "$2-$3$1" + Js + (vn(a, i + 3) == 108 ? "$3" : "$2-$3")) + a;
          // (s)tretch
          case 115:
            return ~lf(a, "stretch", 0) ? d1(Ge(a, "stretch", "fill-available"), i, r) + a : a;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return Ge(a, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(o, s, d, h, y, m, v) {
        return Dt + s + ":" + d + v + (h ? Dt + s + "-span:" + (y ? m : +m - +d) + v : "") + a;
      });
    // position: sticky
    case 4949:
      if (vn(a, i + 6) === 121)
        return Ge(a, ":", ":" + mt) + a;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (vn(a, vn(a, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return Ge(a, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + mt + (vn(a, 14) === 45 ? "inline-" : "") + "box$3$1" + mt + "$2$3$1" + Dt + "$2box$3") + a;
        // (inline-)?gri(d)
        case 100:
          return Ge(a, ":", ":" + Dt) + a;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return Ge(a, "scroll-", "scroll-snap-") + a;
  }
  return a;
}
function Of(a, i) {
  for (var r = "", o = 0; o < a.length; o++)
    r += i(a[o], o, a, i) || "";
  return r;
}
function mA(a, i, r, o) {
  switch (a.type) {
    case nA:
      if (a.children.length) break;
    case tA:
    case nm:
      return a.return = a.return || a.value;
    case r1:
      return "";
    case o1:
      return a.return = a.value + "{" + Of(a.children, o) + "}";
    case qf:
      if (!di(a.value = a.props.join(","))) return "";
  }
  return di(r = Of(a.children, o)) ? a.return = a.value + "{" + r + "}" : "";
}
function gA(a) {
  var i = c1(a);
  return function(r, o, s, d) {
    for (var h = "", y = 0; y < i; y++)
      h += a[y](r, o, s, d) || "";
    return h;
  };
}
function vA(a) {
  return function(i) {
    i.root || (i = i.return) && a(i);
  };
}
function yA(a, i, r, o) {
  if (a.length > -1 && !a.return)
    switch (a.type) {
      case nm:
        a.return = d1(a.value, a.length, r);
        return;
      case o1:
        return Of([Nl(a, { value: Ge(a.value, "@", "@" + mt) })], o);
      case qf:
        if (a.length)
          return iA(r = a.props, function(s) {
            switch (Hi(s, o = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                fo(Nl(a, { props: [Ge(s, /:(read-\w+)/, ":" + Js + "$1")] })), fo(Nl(a, { props: [s] })), xp(a, { props: Fy(r, o) });
                break;
              // :placeholder
              case "::placeholder":
                fo(Nl(a, { props: [Ge(s, /:(plac\w+)/, ":" + mt + "input-$1")] })), fo(Nl(a, { props: [Ge(s, /:(plac\w+)/, ":" + Js + "$1")] })), fo(Nl(a, { props: [Ge(s, /:(plac\w+)/, Dt + "input-$1")] })), fo(Nl(a, { props: [s] })), xp(a, { props: Fy(r, o) });
                break;
            }
            return "";
          });
    }
}
var bA = {
  animationIterationCount: 1,
  aspectRatio: 1,
  borderImageOutset: 1,
  borderImageSlice: 1,
  borderImageWidth: 1,
  boxFlex: 1,
  boxFlexGroup: 1,
  boxOrdinalGroup: 1,
  columnCount: 1,
  columns: 1,
  flex: 1,
  flexGrow: 1,
  flexPositive: 1,
  flexShrink: 1,
  flexNegative: 1,
  flexOrder: 1,
  gridRow: 1,
  gridRowEnd: 1,
  gridRowSpan: 1,
  gridRowStart: 1,
  gridColumn: 1,
  gridColumnEnd: 1,
  gridColumnSpan: 1,
  gridColumnStart: 1,
  msGridRow: 1,
  msGridRowSpan: 1,
  msGridColumn: 1,
  msGridColumnSpan: 1,
  fontWeight: 1,
  lineHeight: 1,
  opacity: 1,
  order: 1,
  orphans: 1,
  tabSize: 1,
  widows: 1,
  zIndex: 1,
  zoom: 1,
  WebkitLineClamp: 1,
  // SVG-related properties
  fillOpacity: 1,
  floodOpacity: 1,
  stopOpacity: 1,
  strokeDasharray: 1,
  strokeDashoffset: 1,
  strokeMiterlimit: 1,
  strokeOpacity: 1,
  strokeWidth: 1
}, bo = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", h1 = "active", p1 = "data-styled-version", If = "6.1.19", im = `/*!sc*/
`, xf = typeof window < "u" && typeof document < "u", _A = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" && process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY), Ff = Object.freeze([]), _o = Object.freeze({});
function SA(a, i, r) {
  return r === void 0 && (r = _o), a.theme !== r.theme && a.theme || i || r.theme;
}
var m1 = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), EA = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, CA = /(^-|-$)/g;
function Ky(a) {
  return a.replace(EA, "-").replace(CA, "");
}
var OA = /(a)(d)/gi, Kc = 52, Jy = function(a) {
  return String.fromCharCode(a + (a > 25 ? 39 : 97));
};
function wp(a) {
  var i, r = "";
  for (i = Math.abs(a); i > Kc; i = i / Kc | 0) r = Jy(i % Kc) + r;
  return (Jy(i % Kc) + r).replace(OA, "$1-$2");
}
var np, g1 = 5381, po = function(a, i) {
  for (var r = i.length; r; ) a = 33 * a ^ i.charCodeAt(--r);
  return a;
}, v1 = function(a) {
  return po(g1, a);
};
function y1(a) {
  return wp(v1(a) >>> 0);
}
function xA(a) {
  return a.displayName || a.name || "Component";
}
function ap(a) {
  return typeof a == "string" && !0;
}
var b1 = typeof Symbol == "function" && Symbol.for, _1 = b1 ? Symbol.for("react.memo") : 60115, TA = b1 ? Symbol.for("react.forward_ref") : 60112, AA = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, wA = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, S1 = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, MA = ((np = {})[TA] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, np[_1] = S1, np);
function Wy(a) {
  return ("type" in (i = a) && i.type.$$typeof) === _1 ? S1 : "$$typeof" in a ? MA[a.$$typeof] : AA;
  var i;
}
var RA = Object.defineProperty, DA = Object.getOwnPropertyNames, Py = Object.getOwnPropertySymbols, NA = Object.getOwnPropertyDescriptor, jA = Object.getPrototypeOf, eb = Object.prototype;
function E1(a, i, r) {
  if (typeof i != "string") {
    if (eb) {
      var o = jA(i);
      o && o !== eb && E1(a, o, r);
    }
    var s = DA(i);
    Py && (s = s.concat(Py(i)));
    for (var d = Wy(a), h = Wy(i), y = 0; y < s.length; ++y) {
      var m = s[y];
      if (!(m in wA || r && r[m] || h && m in h || d && m in d)) {
        var v = NA(i, m);
        try {
          RA(a, m, v);
        } catch {
        }
      }
    }
  }
  return a;
}
function So(a) {
  return typeof a == "function";
}
function lm(a) {
  return typeof a == "object" && "styledComponentId" in a;
}
function pr(a, i) {
  return a && i ? "".concat(a, " ").concat(i) : a || i || "";
}
function Mp(a, i) {
  if (a.length === 0) return "";
  for (var r = a[0], o = 1; o < a.length; o++) r += a[o];
  return r;
}
function au(a) {
  return a !== null && typeof a == "object" && a.constructor.name === Object.name && !("props" in a && a.$$typeof);
}
function Rp(a, i, r) {
  if (r === void 0 && (r = !1), !r && !au(a) && !Array.isArray(a)) return i;
  if (Array.isArray(i)) for (var o = 0; o < i.length; o++) a[o] = Rp(a[o], i[o]);
  else if (au(i)) for (var o in i) a[o] = Rp(a[o], i[o]);
  return a;
}
function rm(a, i) {
  Object.defineProperty(a, "toString", { value: i });
}
function cu(a) {
  for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
  return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a, " for more information.").concat(i.length > 0 ? " Args: ".concat(i.join(", ")) : ""));
}
var zA = (function() {
  function a(i) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = i;
  }
  return a.prototype.indexOfGroup = function(i) {
    for (var r = 0, o = 0; o < i; o++) r += this.groupSizes[o];
    return r;
  }, a.prototype.insertRules = function(i, r) {
    if (i >= this.groupSizes.length) {
      for (var o = this.groupSizes, s = o.length, d = s; i >= d; ) if ((d <<= 1) < 0) throw cu(16, "".concat(i));
      this.groupSizes = new Uint32Array(d), this.groupSizes.set(o), this.length = d;
      for (var h = s; h < d; h++) this.groupSizes[h] = 0;
    }
    for (var y = this.indexOfGroup(i + 1), m = (h = 0, r.length); h < m; h++) this.tag.insertRule(y, r[h]) && (this.groupSizes[i]++, y++);
  }, a.prototype.clearGroup = function(i) {
    if (i < this.length) {
      var r = this.groupSizes[i], o = this.indexOfGroup(i), s = o + r;
      this.groupSizes[i] = 0;
      for (var d = o; d < s; d++) this.tag.deleteRule(o);
    }
  }, a.prototype.getGroup = function(i) {
    var r = "";
    if (i >= this.length || this.groupSizes[i] === 0) return r;
    for (var o = this.groupSizes[i], s = this.indexOfGroup(i), d = s + o, h = s; h < d; h++) r += "".concat(this.tag.getRule(h)).concat(im);
    return r;
  }, a;
})(), sf = /* @__PURE__ */ new Map(), Tf = /* @__PURE__ */ new Map(), uf = 1, Jc = function(a) {
  if (sf.has(a)) return sf.get(a);
  for (; Tf.has(uf); ) uf++;
  var i = uf++;
  return sf.set(a, i), Tf.set(i, a), i;
}, LA = function(a, i) {
  uf = i + 1, sf.set(a, i), Tf.set(i, a);
}, HA = "style[".concat(bo, "][").concat(p1, '="').concat(If, '"]'), VA = new RegExp("^".concat(bo, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), UA = function(a, i, r) {
  for (var o, s = r.split(","), d = 0, h = s.length; d < h; d++) (o = s[d]) && a.registerName(i, o);
}, BA = function(a, i) {
  for (var r, o = ((r = i.textContent) !== null && r !== void 0 ? r : "").split(im), s = [], d = 0, h = o.length; d < h; d++) {
    var y = o[d].trim();
    if (y) {
      var m = y.match(VA);
      if (m) {
        var v = 0 | parseInt(m[1], 10), C = m[2];
        v !== 0 && (LA(C, v), UA(a, C, m[3]), a.getTag().insertRules(v, s)), s.length = 0;
      } else s.push(y);
    }
  }
}, tb = function(a) {
  for (var i = document.querySelectorAll(HA), r = 0, o = i.length; r < o; r++) {
    var s = i[r];
    s && s.getAttribute(bo) !== h1 && (BA(a, s), s.parentNode && s.parentNode.removeChild(s));
  }
};
function $A() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var C1 = function(a) {
  var i = document.head, r = a || i, o = document.createElement("style"), s = (function(y) {
    var m = Array.from(y.querySelectorAll("style[".concat(bo, "]")));
    return m[m.length - 1];
  })(r), d = s !== void 0 ? s.nextSibling : null;
  o.setAttribute(bo, h1), o.setAttribute(p1, If);
  var h = $A();
  return h && o.setAttribute("nonce", h), r.insertBefore(o, d), o;
}, kA = (function() {
  function a(i) {
    this.element = C1(i), this.element.appendChild(document.createTextNode("")), this.sheet = (function(r) {
      if (r.sheet) return r.sheet;
      for (var o = document.styleSheets, s = 0, d = o.length; s < d; s++) {
        var h = o[s];
        if (h.ownerNode === r) return h;
      }
      throw cu(17);
    })(this.element), this.length = 0;
  }
  return a.prototype.insertRule = function(i, r) {
    try {
      return this.sheet.insertRule(r, i), this.length++, !0;
    } catch {
      return !1;
    }
  }, a.prototype.deleteRule = function(i) {
    this.sheet.deleteRule(i), this.length--;
  }, a.prototype.getRule = function(i) {
    var r = this.sheet.cssRules[i];
    return r && r.cssText ? r.cssText : "";
  }, a;
})(), qA = (function() {
  function a(i) {
    this.element = C1(i), this.nodes = this.element.childNodes, this.length = 0;
  }
  return a.prototype.insertRule = function(i, r) {
    if (i <= this.length && i >= 0) {
      var o = document.createTextNode(r);
      return this.element.insertBefore(o, this.nodes[i] || null), this.length++, !0;
    }
    return !1;
  }, a.prototype.deleteRule = function(i) {
    this.element.removeChild(this.nodes[i]), this.length--;
  }, a.prototype.getRule = function(i) {
    return i < this.length ? this.nodes[i].textContent : "";
  }, a;
})(), YA = (function() {
  function a(i) {
    this.rules = [], this.length = 0;
  }
  return a.prototype.insertRule = function(i, r) {
    return i <= this.length && (this.rules.splice(i, 0, r), this.length++, !0);
  }, a.prototype.deleteRule = function(i) {
    this.rules.splice(i, 1), this.length--;
  }, a.prototype.getRule = function(i) {
    return i < this.length ? this.rules[i] : "";
  }, a;
})(), nb = xf, GA = { isServer: !xf, useCSSOMInjection: !_A }, O1 = (function() {
  function a(i, r, o) {
    i === void 0 && (i = _o), r === void 0 && (r = {});
    var s = this;
    this.options = aa(aa({}, GA), i), this.gs = r, this.names = new Map(o), this.server = !!i.isServer, !this.server && xf && nb && (nb = !1, tb(this)), rm(this, function() {
      return (function(d) {
        for (var h = d.getTag(), y = h.length, m = "", v = function(x) {
          var A = (function(H) {
            return Tf.get(H);
          })(x);
          if (A === void 0) return "continue";
          var R = d.names.get(A), L = h.getGroup(x);
          if (R === void 0 || !R.size || L.length === 0) return "continue";
          var N = "".concat(bo, ".g").concat(x, '[id="').concat(A, '"]'), j = "";
          R !== void 0 && R.forEach(function(H) {
            H.length > 0 && (j += "".concat(H, ","));
          }), m += "".concat(L).concat(N, '{content:"').concat(j, '"}').concat(im);
        }, C = 0; C < y; C++) v(C);
        return m;
      })(s);
    });
  }
  return a.registerId = function(i) {
    return Jc(i);
  }, a.prototype.rehydrate = function() {
    !this.server && xf && tb(this);
  }, a.prototype.reconstructWithOptions = function(i, r) {
    return r === void 0 && (r = !0), new a(aa(aa({}, this.options), i), this.gs, r && this.names || void 0);
  }, a.prototype.allocateGSInstance = function(i) {
    return this.gs[i] = (this.gs[i] || 0) + 1;
  }, a.prototype.getTag = function() {
    return this.tag || (this.tag = (i = (function(r) {
      var o = r.useCSSOMInjection, s = r.target;
      return r.isServer ? new YA(s) : o ? new kA(s) : new qA(s);
    })(this.options), new zA(i)));
    var i;
  }, a.prototype.hasNameForId = function(i, r) {
    return this.names.has(i) && this.names.get(i).has(r);
  }, a.prototype.registerName = function(i, r) {
    if (Jc(i), this.names.has(i)) this.names.get(i).add(r);
    else {
      var o = /* @__PURE__ */ new Set();
      o.add(r), this.names.set(i, o);
    }
  }, a.prototype.insertRules = function(i, r, o) {
    this.registerName(i, r), this.getTag().insertRules(Jc(i), o);
  }, a.prototype.clearNames = function(i) {
    this.names.has(i) && this.names.get(i).clear();
  }, a.prototype.clearRules = function(i) {
    this.getTag().clearGroup(Jc(i)), this.clearNames(i);
  }, a.prototype.clearTag = function() {
    this.tag = void 0;
  }, a;
})(), XA = /&/g, IA = /^\s*\/\/.*$/gm;
function x1(a, i) {
  return a.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(i, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(i, " ")), r.props = r.props.map(function(o) {
      return "".concat(i, " ").concat(o);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = x1(r.children, i)), r;
  });
}
function FA(a) {
  var i, r, o, s = _o, d = s.options, h = d === void 0 ? _o : d, y = s.plugins, m = y === void 0 ? Ff : y, v = function(A, R, L) {
    return L.startsWith(r) && L.endsWith(r) && L.replaceAll(r, "").length > 0 ? ".".concat(i) : A;
  }, C = m.slice();
  C.push(function(A) {
    A.type === qf && A.value.includes("&") && (A.props[0] = A.props[0].replace(XA, r).replace(o, v));
  }), h.prefix && C.push(yA), C.push(mA);
  var x = function(A, R, L, N) {
    R === void 0 && (R = ""), L === void 0 && (L = ""), N === void 0 && (N = "&"), i = N, r = R, o = new RegExp("\\".concat(r, "\\b"), "g");
    var j = A.replace(IA, ""), H = hA(L || R ? "".concat(L, " ").concat(R, " { ").concat(j, " }") : j);
    h.namespace && (H = x1(H, h.namespace));
    var Q = [];
    return Of(H, gA(C.concat(vA(function(X) {
      return Q.push(X);
    })))), Q;
  };
  return x.hash = m.length ? m.reduce(function(A, R) {
    return R.name || cu(15), po(A, R.name);
  }, g1).toString() : "", x;
}
var QA = new O1(), Dp = FA(), T1 = It.createContext({ shouldForwardProp: void 0, styleSheet: QA, stylis: Dp });
T1.Consumer;
It.createContext(void 0);
function ab() {
  return S.useContext(T1);
}
var A1 = (function() {
  function a(i, r) {
    var o = this;
    this.inject = function(s, d) {
      d === void 0 && (d = Dp);
      var h = o.name + d.hash;
      s.hasNameForId(o.id, h) || s.insertRules(o.id, h, d(o.rules, h, "@keyframes"));
    }, this.name = i, this.id = "sc-keyframes-".concat(i), this.rules = r, rm(this, function() {
      throw cu(12, String(o.name));
    });
  }
  return a.prototype.getName = function(i) {
    return i === void 0 && (i = Dp), this.name + i.hash;
  }, a;
})(), ZA = function(a) {
  return a >= "A" && a <= "Z";
};
function ib(a) {
  for (var i = "", r = 0; r < a.length; r++) {
    var o = a[r];
    if (r === 1 && o === "-" && a[0] === "-") return a;
    ZA(o) ? i += "-" + o.toLowerCase() : i += o;
  }
  return i.startsWith("ms-") ? "-" + i : i;
}
var w1 = function(a) {
  return a == null || a === !1 || a === "";
}, M1 = function(a) {
  var i, r, o = [];
  for (var s in a) {
    var d = a[s];
    a.hasOwnProperty(s) && !w1(d) && (Array.isArray(d) && d.isCss || So(d) ? o.push("".concat(ib(s), ":"), d, ";") : au(d) ? o.push.apply(o, nu(nu(["".concat(s, " {")], M1(d), !1), ["}"], !1)) : o.push("".concat(ib(s), ": ").concat((i = s, (r = d) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || i in bA || i.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return o;
};
function gr(a, i, r, o) {
  if (w1(a)) return [];
  if (lm(a)) return [".".concat(a.styledComponentId)];
  if (So(a)) {
    if (!So(d = a) || d.prototype && d.prototype.isReactComponent || !i) return [a];
    var s = a(i);
    return gr(s, i, r, o);
  }
  var d;
  return a instanceof A1 ? r ? (a.inject(r, o), [a.getName(o)]) : [a] : au(a) ? M1(a) : Array.isArray(a) ? Array.prototype.concat.apply(Ff, a.map(function(h) {
    return gr(h, i, r, o);
  })) : [a.toString()];
}
function KA(a) {
  for (var i = 0; i < a.length; i += 1) {
    var r = a[i];
    if (So(r) && !lm(r)) return !1;
  }
  return !0;
}
var JA = v1(If), WA = (function() {
  function a(i, r, o) {
    this.rules = i, this.staticRulesId = "", this.isStatic = (o === void 0 || o.isStatic) && KA(i), this.componentId = r, this.baseHash = po(JA, r), this.baseStyle = o, O1.registerId(r);
  }
  return a.prototype.generateAndInjectStyles = function(i, r, o) {
    var s = this.baseStyle ? this.baseStyle.generateAndInjectStyles(i, r, o) : "";
    if (this.isStatic && !o.hash) if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId)) s = pr(s, this.staticRulesId);
    else {
      var d = Mp(gr(this.rules, i, r, o)), h = wp(po(this.baseHash, d) >>> 0);
      if (!r.hasNameForId(this.componentId, h)) {
        var y = o(d, ".".concat(h), void 0, this.componentId);
        r.insertRules(this.componentId, h, y);
      }
      s = pr(s, h), this.staticRulesId = h;
    }
    else {
      for (var m = po(this.baseHash, o.hash), v = "", C = 0; C < this.rules.length; C++) {
        var x = this.rules[C];
        if (typeof x == "string") v += x;
        else if (x) {
          var A = Mp(gr(x, i, r, o));
          m = po(m, A + C), v += A;
        }
      }
      if (v) {
        var R = wp(m >>> 0);
        r.hasNameForId(this.componentId, R) || r.insertRules(this.componentId, R, o(v, ".".concat(R), void 0, this.componentId)), s = pr(s, R);
      }
    }
    return s;
  }, a;
})(), R1 = It.createContext(void 0);
R1.Consumer;
var ip = {};
function PA(a, i, r) {
  var o = lm(a), s = a, d = !ap(a), h = i.attrs, y = h === void 0 ? Ff : h, m = i.componentId, v = m === void 0 ? (function(W, U) {
    var Z = typeof W != "string" ? "sc" : Ky(W);
    ip[Z] = (ip[Z] || 0) + 1;
    var B = "".concat(Z, "-").concat(y1(If + Z + ip[Z]));
    return U ? "".concat(U, "-").concat(B) : B;
  })(i.displayName, i.parentComponentId) : m, C = i.displayName, x = C === void 0 ? (function(W) {
    return ap(W) ? "styled.".concat(W) : "Styled(".concat(xA(W), ")");
  })(a) : C, A = i.displayName && i.componentId ? "".concat(Ky(i.displayName), "-").concat(i.componentId) : i.componentId || v, R = o && s.attrs ? s.attrs.concat(y).filter(Boolean) : y, L = i.shouldForwardProp;
  if (o && s.shouldForwardProp) {
    var N = s.shouldForwardProp;
    if (i.shouldForwardProp) {
      var j = i.shouldForwardProp;
      L = function(W, U) {
        return N(W, U) && j(W, U);
      };
    } else L = N;
  }
  var H = new WA(r, A, o ? s.componentStyle : void 0);
  function Q(W, U) {
    return (function(Z, B, oe) {
      var we = Z.attrs, je = Z.componentStyle, ke = Z.defaultProps, Ve = Z.foldedComponentIds, ut = Z.styledComponentId, tt = Z.target, Ue = It.useContext(R1), k = ab(), ae = Z.shouldForwardProp || k.shouldForwardProp, le = SA(B, Ue, ke) || _o, be = (function(ce, ue, he) {
        for (var Le, ne = aa(aa({}, ue), { className: void 0, theme: he }), _t = 0; _t < ce.length; _t += 1) {
          var Ct = So(Le = ce[_t]) ? Le(ne) : Le;
          for (var Ot in Ct) ne[Ot] = Ot === "className" ? pr(ne[Ot], Ct[Ot]) : Ot === "style" ? aa(aa({}, ne[Ot]), Ct[Ot]) : Ct[Ot];
        }
        return ue.className && (ne.className = pr(ne.className, ue.className)), ne;
      })(we, B, le), Ee = be.as || tt, O = {};
      for (var Y in be) be[Y] === void 0 || Y[0] === "$" || Y === "as" || Y === "theme" && be.theme === le || (Y === "forwardedAs" ? O.as = be.forwardedAs : ae && !ae(Y, Ee) || (O[Y] = be[Y]));
      var ee = (function(ce, ue) {
        var he = ab(), Le = ce.generateAndInjectStyles(ue, he.styleSheet, he.stylis);
        return Le;
      })(je, be), ie = pr(Ve, ut);
      return ee && (ie += " " + ee), be.className && (ie += " " + be.className), O[ap(Ee) && !m1.has(Ee) ? "class" : "className"] = ie, oe && (O.ref = oe), S.createElement(Ee, O);
    })(X, W, U);
  }
  Q.displayName = x;
  var X = It.forwardRef(Q);
  return X.attrs = R, X.componentStyle = H, X.displayName = x, X.shouldForwardProp = L, X.foldedComponentIds = o ? pr(s.foldedComponentIds, s.styledComponentId) : "", X.styledComponentId = A, X.target = o ? s.target : a, Object.defineProperty(X, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(W) {
    this._foldedDefaultProps = o ? (function(U) {
      for (var Z = [], B = 1; B < arguments.length; B++) Z[B - 1] = arguments[B];
      for (var oe = 0, we = Z; oe < we.length; oe++) Rp(U, we[oe], !0);
      return U;
    })({}, s.defaultProps, W) : W;
  } }), rm(X, function() {
    return ".".concat(X.styledComponentId);
  }), d && E1(X, a, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), X;
}
function lb(a, i) {
  for (var r = [a[0]], o = 0, s = i.length; o < s; o += 1) r.push(i[o], a[o + 1]);
  return r;
}
var rb = function(a) {
  return Object.assign(a, { isCss: !0 });
};
function D1(a) {
  for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
  if (So(a) || au(a)) return rb(gr(lb(Ff, nu([a], i, !0))));
  var o = a;
  return i.length === 0 && o.length === 1 && typeof o[0] == "string" ? gr(o) : rb(gr(lb(o, i)));
}
function Np(a, i, r) {
  if (r === void 0 && (r = _o), !i) throw cu(1, i);
  var o = function(s) {
    for (var d = [], h = 1; h < arguments.length; h++) d[h - 1] = arguments[h];
    return a(i, r, D1.apply(void 0, nu([s], d, !1)));
  };
  return o.attrs = function(s) {
    return Np(a, i, aa(aa({}, r), { attrs: Array.prototype.concat(r.attrs, s).filter(Boolean) }));
  }, o.withConfig = function(s) {
    return Np(a, i, aa(aa({}, r), s));
  }, o;
}
var N1 = function(a) {
  return Np(PA, a);
}, yr = N1;
m1.forEach(function(a) {
  yr[a] = N1(a);
});
function om(a) {
  for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
  var o = Mp(D1.apply(void 0, nu([a], i, !1))), s = y1(o);
  return new A1(s, o);
}
var ew = {
  aliceblue: "f0f8ff",
  antiquewhite: "faebd7",
  aqua: "0ff",
  aquamarine: "7fffd4",
  azure: "f0ffff",
  beige: "f5f5dc",
  bisque: "ffe4c4",
  black: "000",
  blanchedalmond: "ffebcd",
  blue: "00f",
  blueviolet: "8a2be2",
  brown: "a52a2a",
  burlywood: "deb887",
  burntsienna: "ea7e5d",
  cadetblue: "5f9ea0",
  chartreuse: "7fff00",
  chocolate: "d2691e",
  coral: "ff7f50",
  cornflowerblue: "6495ed",
  cornsilk: "fff8dc",
  crimson: "dc143c",
  cyan: "0ff",
  darkblue: "00008b",
  darkcyan: "008b8b",
  darkgoldenrod: "b8860b",
  darkgray: "a9a9a9",
  darkgreen: "006400",
  darkgrey: "a9a9a9",
  darkkhaki: "bdb76b",
  darkmagenta: "8b008b",
  darkolivegreen: "556b2f",
  darkorange: "ff8c00",
  darkorchid: "9932cc",
  darkred: "8b0000",
  darksalmon: "e9967a",
  darkseagreen: "8fbc8f",
  darkslateblue: "483d8b",
  darkslategray: "2f4f4f",
  darkslategrey: "2f4f4f",
  darkturquoise: "00ced1",
  darkviolet: "9400d3",
  deeppink: "ff1493",
  deepskyblue: "00bfff",
  dimgray: "696969",
  dimgrey: "696969",
  dodgerblue: "1e90ff",
  firebrick: "b22222",
  floralwhite: "fffaf0",
  forestgreen: "228b22",
  fuchsia: "f0f",
  gainsboro: "dcdcdc",
  ghostwhite: "f8f8ff",
  gold: "ffd700",
  goldenrod: "daa520",
  gray: "808080",
  green: "008000",
  greenyellow: "adff2f",
  grey: "808080",
  honeydew: "f0fff0",
  hotpink: "ff69b4",
  indianred: "cd5c5c",
  indigo: "4b0082",
  ivory: "fffff0",
  khaki: "f0e68c",
  lavender: "e6e6fa",
  lavenderblush: "fff0f5",
  lawngreen: "7cfc00",
  lemonchiffon: "fffacd",
  lightblue: "add8e6",
  lightcoral: "f08080",
  lightcyan: "e0ffff",
  lightgoldenrodyellow: "fafad2",
  lightgray: "d3d3d3",
  lightgreen: "90ee90",
  lightgrey: "d3d3d3",
  lightpink: "ffb6c1",
  lightsalmon: "ffa07a",
  lightseagreen: "20b2aa",
  lightskyblue: "87cefa",
  lightslategray: "789",
  lightslategrey: "789",
  lightsteelblue: "b0c4de",
  lightyellow: "ffffe0",
  lime: "0f0",
  limegreen: "32cd32",
  linen: "faf0e6",
  magenta: "f0f",
  maroon: "800000",
  mediumaquamarine: "66cdaa",
  mediumblue: "0000cd",
  mediumorchid: "ba55d3",
  mediumpurple: "9370db",
  mediumseagreen: "3cb371",
  mediumslateblue: "7b68ee",
  mediumspringgreen: "00fa9a",
  mediumturquoise: "48d1cc",
  mediumvioletred: "c71585",
  midnightblue: "191970",
  mintcream: "f5fffa",
  mistyrose: "ffe4e1",
  moccasin: "ffe4b5",
  navajowhite: "ffdead",
  navy: "000080",
  oldlace: "fdf5e6",
  olive: "808000",
  olivedrab: "6b8e23",
  orange: "ffa500",
  orangered: "ff4500",
  orchid: "da70d6",
  palegoldenrod: "eee8aa",
  palegreen: "98fb98",
  paleturquoise: "afeeee",
  palevioletred: "db7093",
  papayawhip: "ffefd5",
  peachpuff: "ffdab9",
  peru: "cd853f",
  pink: "ffc0cb",
  plum: "dda0dd",
  powderblue: "b0e0e6",
  purple: "800080",
  rebeccapurple: "663399",
  red: "f00",
  rosybrown: "bc8f8f",
  royalblue: "4169e1",
  saddlebrown: "8b4513",
  salmon: "fa8072",
  sandybrown: "f4a460",
  seagreen: "2e8b57",
  seashell: "fff5ee",
  sienna: "a0522d",
  silver: "c0c0c0",
  skyblue: "87ceeb",
  slateblue: "6a5acd",
  slategray: "708090",
  slategrey: "708090",
  snow: "fffafa",
  springgreen: "00ff7f",
  steelblue: "4682b4",
  tan: "d2b48c",
  teal: "008080",
  thistle: "d8bfd8",
  tomato: "ff6347",
  turquoise: "40e0d0",
  violet: "ee82ee",
  wheat: "f5deb3",
  white: "fff",
  whitesmoke: "f5f5f5",
  yellow: "ff0",
  yellowgreen: "9acd32"
};
tw(ew);
function tw(a) {
  var i = {};
  for (var r in a)
    a.hasOwnProperty(r) && (i[a[r]] = r);
  return i;
}
var nw = "#4fa94d", ob = { "aria-busy": !0, role: "progressbar" }, aw = yr.div`
  display: ${(a) => a.$visible ? "flex" : "none"};
`, iw = "http://www.w3.org/2000/svg", qa = 242.776657104492, lw = 1.6, rw = om`
12.5% {
  stroke-dasharray: ${qa * 0.14}px, ${qa}px;
  stroke-dashoffset: -${qa * 0.11}px;
}
43.75% {
  stroke-dasharray: ${qa * 0.35}px, ${qa}px;
  stroke-dashoffset: -${qa * 0.35}px;
}
100% {
  stroke-dasharray: ${qa * 0.01}px, ${qa}px;
  stroke-dashoffset: -${qa * 0.99}px;
}
`;
yr.path`
  stroke-dasharray: ${qa * 0.01}px, ${qa};
  stroke-dashoffset: 0;
  animation: ${rw} ${lw}s linear infinite;
`;
var ow = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330], sw = om`
to {
   transform: rotate(360deg);
 }
`, uw = yr.svg`
  animation: ${sw} ${(a) => String(a.$animationDuration).endsWith("s") ? String(a.$animationDuration) : `${a.$animationDuration}s`} steps(12, end) infinite;
`, cw = yr.polyline`
  stroke-width: ${(a) => `${a.$strokeWidth}px`};
  stroke-linecap: round;

  &:nth-child(12n + 0) {
    stroke-opacity: 0.08;
  }

  &:nth-child(12n + 1) {
    stroke-opacity: 0.17;
  }

  &:nth-child(12n + 2) {
    stroke-opacity: 0.25;
  }

  &:nth-child(12n + 3) {
    stroke-opacity: 0.33;
  }

  &:nth-child(12n + 4) {
    stroke-opacity: 0.42;
  }

  &:nth-child(12n + 5) {
    stroke-opacity: 0.5;
  }

  &:nth-child(12n + 6) {
    stroke-opacity: 0.58;
  }

  &:nth-child(12n + 7) {
    stroke-opacity: 0.66;
  }

  &:nth-child(12n + 8) {
    stroke-opacity: 0.75;
  }

  &:nth-child(12n + 9) {
    stroke-opacity: 0.83;
  }

  &:nth-child(12n + 11) {
    stroke-opacity: 0.92;
  }
`, fw = ({ height: a = 96, width: i = 96, color: r = nw, strokeWidth: o = 5, animationDuration: s = 0.75, strokeColor: d, visible: h = !0, ariaLabel: y = "rotating-lines-loading", wrapperStyle: m, wrapperClass: v }) => {
  let C = S.useCallback(() => ow.map((x) => It.createElement(cw, { key: x, points: "24,12 24,4", $strokeWidth: o, transform: `rotate(${x}, 24, 24)` })), [o]);
  return h ? It.createElement(aw, { style: m, $visible: h, className: v, "aria-label": y, "data-testid": "rotating-lines-loading", ...ob }, It.createElement(uw, { xmlns: iw, viewBox: "0 0 48 48", width: i, height: a, stroke: d ?? r, $animationDuration: s, speed: String(s), "aria-label": y, "data-testid": "rotating-lines-svg", ...ob }, C())) : null;
}, dw = om`
to {
   stroke-dashoffset: 136;
 }
`;
yr.polygon`
  stroke-dasharray: 17;
  animation: ${dw} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;
yr.svg`
  transform-origin: 50% 65%;
`;
function hw() {
  const a = [];
  let i = 0;
  return document.querySelectorAll(".user-list .user-item").forEach((r) => {
    const o = r.querySelectorAll(".mark .badge__item");
    if (o[0]) {
      i++;
      const s = Number(o[0].textContent.replace(/\s+/g, ""));
      a[s] ? a[s].push(s) : a[s] = [s];
    }
  }), /* @__PURE__ */ T.jsxs("div", { className: "fst-italic text-center", children: [
    /* @__PURE__ */ T.jsxs("div", { className: "fw-bold", children: [
      "Учнів у класі: ",
      i
    ] }),
    a && /* @__PURE__ */ T.jsx("ul", { children: Object.entries(a).map(([r, o]) => /* @__PURE__ */ T.jsxs("li", { children: [
      "Оцінка: ",
      /* @__PURE__ */ T.jsx("b", { children: r }),
      " — Кількість: ",
      /* @__PURE__ */ T.jsx("span", { className: "fw-bold", children: o.length })
    ] }, r)) })
  ] });
}
var lp = { exports: {} }, rp = {};
/**
 * @license React
 * react-compiler-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var sb;
function pw() {
  if (sb) return rp;
  sb = 1;
  var a = wf().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  return rp.c = function(i) {
    return a.H.useMemoCache(i);
  }, rp;
}
var ub;
function mw() {
  return ub || (ub = 1, lp.exports = pw()), lp.exports;
}
var fu = mw();
function op(a) {
  const i = fu.c(3), {
    children: r
  } = a;
  let o;
  i[0] === Symbol.for("react.memo_cache_sentinel") ? (o = /* @__PURE__ */ T.jsx(qc.Header, { children: /* @__PURE__ */ T.jsx("span", { className: "fw-bold", children: "Опис" }) }), i[0] = o) : o = i[0];
  let s;
  return i[1] !== r ? (s = /* @__PURE__ */ T.jsx(qc, { className: "mt-3", children: /* @__PURE__ */ T.jsxs(qc.Item, { eventKey: "0", children: [
    o,
    /* @__PURE__ */ T.jsx(qc.Body, { children: /* @__PURE__ */ T.jsx("div", { className: "fst-italic", children: r }) })
  ] }) }), i[1] = r, i[2] = s) : s = i[2], s;
}
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const gw = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), vw = (a) => a.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (i, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), cb = (a) => {
  const i = vw(a);
  return i.charAt(0).toUpperCase() + i.slice(1);
}, j1 = (...a) => a.filter((i, r, o) => !!i && i.trim() !== "" && o.indexOf(i) === r).join(" ").trim(), yw = (a) => {
  for (const i in a)
    if (i.startsWith("aria-") || i === "role" || i === "title")
      return !0;
};
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
var bw = {
  xmlns: "http://www.w3.org/2000/svg",
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 2,
  strokeLinecap: "round",
  strokeLinejoin: "round"
};
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const _w = S.forwardRef(
  ({
    color: a = "currentColor",
    size: i = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: d,
    iconNode: h,
    ...y
  }, m) => S.createElement(
    "svg",
    {
      ref: m,
      ...bw,
      width: i,
      height: i,
      stroke: a,
      strokeWidth: o ? Number(r) * 24 / Number(i) : r,
      className: j1("lucide", s),
      ...!d && !yw(y) && { "aria-hidden": "true" },
      ...y
    },
    [
      ...h.map(([v, C]) => S.createElement(v, C)),
      ...Array.isArray(d) ? d : [d]
    ]
  )
);
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Sw = (a, i) => {
  const r = S.forwardRef(
    ({ className: o, ...s }, d) => S.createElement(_w, {
      ref: d,
      iconNode: i,
      className: j1(
        `lucide-${gw(cb(a))}`,
        `lucide-${a}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = cb(a), r;
};
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const Ew = [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
], z1 = Sw("bot", Ew);
function sp() {
  const a = fu.c(1);
  let i;
  return a[0] === Symbol.for("react.memo_cache_sentinel") ? (i = /* @__PURE__ */ T.jsx(ka.Header, { className: "justify-content-center", closeButton: !0, children: /* @__PURE__ */ T.jsx(ka.Title, { as: "h5", children: /* @__PURE__ */ T.jsxs("div", { className: "d-flex gap-1", children: [
    /* @__PURE__ */ T.jsx(z1, {}),
    " Human Automator"
  ] }) }) }), a[0] = i) : i = a[0], i;
}
const L1 = () => {
  const a = [...document.querySelectorAll(".gradebook-container__table2-outlet .gradebook-container__table2-row")], i = [...document.querySelectorAll(".gradebook-container__table .gradebook-container__table2-row .gradebook-narrow__cell.smart-cell")], r = (A) => A.querySelector(".badge__item--no-border"), o = (A) => {
    const R = r(A)?.innerText.trim();
    return R ? Number(R) : null;
  }, s = (A) => A.querySelector(".gradebook__ng-universal-rating-comments"), d = (A) => A.querySelector(".pseudo-button--color-red"), h = (A) => A.querySelectorAll(".gradebook-narrow__cell.smart-cell"), y = (A) => A.querySelector(".bem-user__name").innerText.trim();
  return {
    rows: a,
    cells: i,
    cellsNarrow: h,
    cellAbsent: d,
    rating: o,
    ratingComment: s,
    studentName: y,
    students: () => {
      const A = [];
      for (const R of a) {
        const L = y(R);
        A.push({
          value: L,
          label: L
        });
      }
      return A;
    },
    fillPercent: (A) => {
      const R = [], L = [];
      if (A && A.length > 0) {
        for (const N of a)
          if (A.find((j) => j.value === y(N)))
            for (const j of [...h(N)])
              s(j) && !d(j) && o(j) && R.push(j), s(j) && !d(j) && !o(j) && L.push(j);
      } else
        for (const N of i)
          s(N) && !d(N) && r(N) && R.push(N), s(N) && !d(N) && !o(N) && L.push(N);
      return Math.round(R.length / (R.length + L.length) * 100);
    },
    toolPanel: (A) => {
      const R = document.querySelector(".gradebook-page__tool-panel");
      A ? R?.classList.add("d-none") : R?.classList.remove("d-none");
    },
    cellRemoveSelected: (A, R) => {
      if (R) {
        A ? R.classList.add("remove-smart-cell-selected") : R.classList.remove("remove-smart-cell-selected");
        return;
      }
      const L = document.querySelectorAll(".gradebook-narrow__cell.smart-cell");
      A ? L.forEach((N) => {
        N.classList.add("remove-smart-cell-selected");
      }) : L.forEach((N) => {
        N.classList.remove("remove-smart-cell-selected");
      });
    }
  };
}, Cw = () => {
  const a = fu.c(5), [i, r] = S.useState(""), o = i === "set_rating", s = i === "delete_rating", d = i === "count_rating";
  let h;
  return a[0] !== i || a[1] !== d || a[2] !== s || a[3] !== o ? (h = {
    action: i,
    setAction: r,
    isSetRating: o,
    isDeleteRating: s,
    isCountRating: d
  }, a[0] = i, a[1] = d, a[2] = s, a[3] = o, a[4] = h) : h = a[4], h;
}, Ow = (a, i) => (a = Math.ceil(a), i = Math.floor(i), Math.floor(Math.random() * (i - a + 1)) + a), xw = (a) => {
  for (let i = a.length - 1; i > 0; i--) {
    const r = Math.floor(Math.random() * (i + 1));
    [a[i], a[r]] = [a[r], a[i]];
  }
  return a;
}, up = () => {
  const a = new window.AudioContext(), i = a.createOscillator();
  i.type = "sine", i.frequency.setValueAtTime(600, a.currentTime), i.connect(a.destination), i.start(), i.stop(a.currentTime + 0.2);
}, cp = 6, fp = 1, Wc = 12, dp = {
  OUTER_TIMEOUT: 1e3,
  INNER_TIMEOUT: 300,
  APPROVAL_DELAY: 500
}, Tw = () => {
  const a = fu.c(8), [i, r] = S.useState(!1), o = S.useRef(!1), {
    cellRemoveSelected: s
  } = L1();
  let d, h;
  a[0] !== i ? (d = () => {
    o.current = i;
  }, h = [i], a[0] = i, a[1] = d, a[2] = h) : (d = a[1], h = a[2]), S.useEffect(d, h);
  let y;
  a[3] !== s ? (y = async (C) => {
    const {
      cell: x,
      minRating: A,
      maxRating: R,
      remove: L
    } = C;
    return new Promise((N) => {
      setTimeout(() => {
        if (!o.current) {
          N();
          return;
        }
        s(!1, x), x.click(), x.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }), setTimeout(() => {
          if (!o.current) {
            N();
            return;
          }
          const j = document.querySelector(".mark-group__input-container input.mark-group__input");
          A && R && (j.value = String(Ow(A, R))), L && (j.value = ""), j.dispatchEvent(new Event("input", {
            bubbles: !0
          })), setTimeout(() => {
            if (!o.current) {
              N();
              return;
            }
            const H = document.querySelector(".mark-group .mark-buttons button .clickable");
            H && H.click(), N();
          }, dp.APPROVAL_DELAY);
        }, dp.INNER_TIMEOUT);
      }, dp.OUTER_TIMEOUT);
    });
  }, a[3] = s, a[4] = y) : y = a[4];
  const m = y;
  let v;
  return a[5] !== i || a[6] !== m ? (v = {
    isProcessing: i,
    setIsProcessing: r,
    processItem: m,
    isProcessingRef: o
  }, a[5] = i, a[6] = m, a[7] = v) : v = a[7], v;
};
function fb(a) {
  const i = fu.c(7), {
    children: r,
    show: o,
    onClose: s
  } = a;
  let d;
  i[0] === Symbol.for("react.memo_cache_sentinel") ? (d = /* @__PURE__ */ T.jsx(Xh.Header, { className: "text-white justify-content-center", closeButton: !0, children: /* @__PURE__ */ T.jsxs("strong", { className: "d-flex align-items-center gap-1", children: [
    /* @__PURE__ */ T.jsx(z1, {}),
    " Human Automator"
  ] }) }), i[0] = d) : d = i[0];
  let h;
  i[1] !== r ? (h = /* @__PURE__ */ T.jsx(Xh.Body, { className: "text-white fw-bold text-center", children: r }), i[1] = r, i[2] = h) : h = i[2];
  let y;
  return i[3] !== s || i[4] !== o || i[5] !== h ? (y = /* @__PURE__ */ T.jsx(d0, { position: "top-end", className: "p-3", children: /* @__PURE__ */ T.jsxs(Xh, { onClose: s, show: o, delay: 1e4, autohide: !0, bg: "danger", children: [
    d,
    h
  ] }) }), i[3] = s, i[4] = o, i[5] = h, i[6] = y) : y = i[6], y;
}
function Aw() {
  const a = eA(), {
    action: i,
    setAction: r,
    isSetRating: o,
    isDeleteRating: s,
    isCountRating: d
  } = Cw(), {
    isProcessing: h,
    setIsProcessing: y,
    processItem: m,
    isProcessingRef: v
  } = Tw(), {
    rows: C,
    cells: x,
    cellsNarrow: A,
    cellAbsent: R,
    rating: L,
    ratingComment: N,
    studentName: j,
    students: H,
    fillPercent: Q,
    toolPanel: X,
    cellRemoveSelected: W
  } = L1(), U = S.useMemo(() => H(), [H]), [Z, B] = S.useState(!1), [oe, we] = S.useState(void 0), [je, ke] = S.useState(!1), [Ve, ut] = S.useState(0), [tt, Ue] = S.useState(0), [k, ae] = S.useState(0), [le, be] = S.useState(!1), [Ee, O] = S.useState(""), [Y, ee] = S.useState(""), [ie, ce] = S.useState(0), [ue, he] = S.useState(0), [Le, ne] = S.useState("");
  S.useEffect(() => {
    he(Q(oe));
  }, [Q, oe]), S.useEffect(() => {
    v.current = h;
  }, [h, v]), S.useEffect(() => {
    switch (i) {
      case "set_rating":
        r("set_rating");
        break;
      case "delete_rating":
        r("delete_rating");
        break;
      case "count_rating":
        r("count_rating");
        break;
      default:
        r("");
    }
  }, [i, r]);
  const _t = () => {
    r(""), we(void 0), ke(!1), y(!1), ut(0), Ue(0), O(""), ee(""), ce(0), he(Q()), X(!1), W(!1);
  }, Ct = () => window.location.reload(), Ot = () => {
    ke(!1), y(!1), X(!1), W(!1), ne("stop");
  }, Xn = async (ye) => {
    if (ye.preventDefault(), X(!0), W(!0), o) {
      if (Ve > tt) {
        O("Мінімальна оцінка не може бути більшою за максимальну");
        return;
      }
      if (ie <= ue) {
        ee("Максимальний відсоток заповнення не може бути меншим або рівним поточному");
        return;
      }
      ke(!0), y(!0);
      const Bt = [];
      if (oe) {
        for (const St of C)
          if (oe.find((wt) => wt.value === j(St)))
            for (const wt of [...A(St)])
              N(wt) && !R(wt) && !L(wt) && Bt.push(wt);
      } else
        for (const St of x)
          N(St) && !R(St) && !L(St) && Bt.push(St);
      for (const St of xw(Bt)) {
        await m({
          cell: St,
          minRating: Ve,
          maxRating: tt
        });
        const wt = Q(oe);
        if (he(wt), !v.current) {
          ne("stop"), _t();
          return;
        }
        if (wt >= ie)
          break;
      }
      ne("done"), up();
    }
    if (s) {
      ke(!0), y(!0);
      const Bt = [], St = (wt) => {
        for (const on of [...A(wt)])
          le ? N(on) && !R(on) && L(on) && Bt.push(on) : N(on) && !R(on) && k === L(on) && Bt.push(on);
      };
      if (oe)
        for (const wt of C)
          oe.find((on) => on.value === j(wt)) && St(wt);
      else
        for (const wt of C)
          St(wt);
      for (const wt of Bt)
        if (await m({
          cell: wt,
          remove: !0
        }), he(Q(oe)), !v.current) {
          _t(), ne("stop");
          return;
        }
      ne("done"), up();
    }
    d && (ke(!0), y(!0), B(!0), ne("done"), up()), _t();
  }, xt = S.useCallback((ye) => {
    we(ye), ee("");
  }, []);
  return Z ? /* @__PURE__ */ T.jsx(T.Fragment, { children: /* @__PURE__ */ T.jsxs(ka, { show: !0, onHide: Ct, centered: !0, children: [
    /* @__PURE__ */ T.jsx(sp, {}),
    /* @__PURE__ */ T.jsx(ka.Body, { children: /* @__PURE__ */ T.jsx(en, { children: /* @__PURE__ */ T.jsx(en.Body, { children: /* @__PURE__ */ T.jsx(hw, {}) }) }) }),
    /* @__PURE__ */ T.jsx(ka.Footer, { children: /* @__PURE__ */ T.jsx(Qs, { variant: "danger", onClick: Ct, children: "Закрити" }) })
  ] }) }) : h ? /* @__PURE__ */ T.jsx(T.Fragment, { children: /* @__PURE__ */ T.jsxs(ka, { show: !0, onHide: Ct, centered: !0, children: [
    /* @__PURE__ */ T.jsx(sp, {}),
    /* @__PURE__ */ T.jsxs(ka.Body, { children: [
      /* @__PURE__ */ T.jsx(r0, { now: s ? 100 - ue : ue, max: s ? 100 - ie : ie, variant: "success", animated: !0 }, ue),
      /* @__PURE__ */ T.jsxs("div", { className: "d-flex gap-1 mt-3 mb-0 justify-content-center align-items-center", children: [
        /* @__PURE__ */ T.jsx(fw, { color: "black", strokeWidth: "5", animationDuration: "0.75", height: "24", width: "24" }),
        /* @__PURE__ */ T.jsxs("div", { children: [
          "Обробка ...",
          " ",
          /* @__PURE__ */ T.jsxs("span", { className: "fw-bold", children: [
            s ? 100 - ue : ue,
            "%"
          ] }),
          ie < 100 && ie > 0 && /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
            " ",
            "із ",
            /* @__PURE__ */ T.jsxs("span", { className: "fw-bold", children: [
              ie,
              "%"
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ T.jsx(ka.Footer, { children: /* @__PURE__ */ T.jsx(Qs, { variant: "danger", onClick: Ot, children: "Зупинити" }) })
  ] }) }) : /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
    Le == "stop" && /* @__PURE__ */ T.jsx(fb, { show: !!Le, onClose: () => ne(""), children: "Операцію було скасовано!" }),
    Le == "done" && /* @__PURE__ */ T.jsx(fb, { show: !!Le, onClose: () => ne(""), children: "Операцію було успішно завершено!" }),
    /* @__PURE__ */ T.jsx(ka, { show: !0, onHide: Ct, centered: !0, children: /* @__PURE__ */ T.jsxs(ht, { onSubmit: Xn, children: [
      /* @__PURE__ */ T.jsx(sp, {}),
      /* @__PURE__ */ T.jsxs(ka.Body, { children: [
        /* @__PURE__ */ T.jsx(en, { children: /* @__PURE__ */ T.jsxs(en.Body, { children: [
          /* @__PURE__ */ T.jsx(ht.Label, { className: "fw-bold", children: "Дія" }),
          /* @__PURE__ */ T.jsx(ht.Check, { type: "switch", label: "Проставити учням оцінки", onChange: (ye) => ye.target.checked ? r("set_rating") : r(""), checked: o, disabled: je }),
          /* @__PURE__ */ T.jsx(ht.Check, { type: "switch", label: "Видалити учням оцінки", onChange: (ye) => ye.target.checked ? r("delete_rating") : r(""), checked: s, disabled: je }),
          /* @__PURE__ */ T.jsx(ht.Check, { type: "switch", label: "Показати яких і скільки оцінок", onChange: (ye) => ye.target.checked ? r("count_rating") : r(""), checked: d, disabled: je })
        ] }) }),
        o && /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
          /* @__PURE__ */ T.jsxs(op, { children: [
            /* @__PURE__ */ T.jsxs("p", { children: [
              /* @__PURE__ */ T.jsx("span", { className: "fw-bold", children: "Проставити учням оцінки" }),
              " — Дозволяє заповнити",
              " ",
              /* @__PURE__ */ T.jsx("span", { className: "fw-bold", children: "НЕ" }),
              " виставлені оцінки на цій сторінці для обраних учнів."
            ] }),
            /* @__PURE__ */ T.jsx("p", { children: "Можна обрати, які оцінки ставити (від мінімальної до максимальної), також можна обрати бажаний відсоток заповнення від загальної кількості оцінок." }),
            /* @__PURE__ */ T.jsxs("p", { children: [
              "Оцінки будь виставлені у ",
              /* @__PURE__ */ T.jsx("span", { className: "fw-bold", children: "випадковому" }),
              " порядку."
            ] })
          ] }),
          /* @__PURE__ */ T.jsx(en, { className: "mt-3", children: /* @__PURE__ */ T.jsxs(en.Body, { children: [
            /* @__PURE__ */ T.jsx(ht.Label, { className: "fw-bold", children: "Оберіть учнів" }),
            /* @__PURE__ */ T.jsx(Iy, { className: "mb-2", placeholder: "Оберіть учнів", options: U, onChange: (ye) => xt(ye), isMulti: !0, closeMenuOnSelect: !1, components: a, isDisabled: je }),
            /* @__PURE__ */ T.jsxs(ht.Text, { children: [
              /* @__PURE__ */ T.jsx("span", { className: "fw-bold", children: "Оберіть учнів" }),
              " яким бажаєте виставити оцінки, або яким ",
              /* @__PURE__ */ T.jsx("span", { className: "fw-bold", children: "НЕ" }),
              " ставити оцінки."
            ] })
          ] }) }),
          /* @__PURE__ */ T.jsx(en, { className: "mt-3", children: /* @__PURE__ */ T.jsx(en.Body, { children: /* @__PURE__ */ T.jsxs(ht.Group, { children: [
            /* @__PURE__ */ T.jsx(ht.Label, { className: "fw-bold", children: "Мінімальна оцінка" }),
            /* @__PURE__ */ T.jsxs(Yc, { className: "mb-2", children: [
              /* @__PURE__ */ T.jsx(ht.Control, { type: "number", min: fp, max: Wc, placeholder: "Введіть мінімальну оцінку", required: !0, disabled: je, isInvalid: !!Ee, onChange: (ye) => {
                ut(Number(ye.target.value)), O("");
              } }),
              /* @__PURE__ */ T.jsx(ht.Control.Feedback, { type: "invalid", children: Ee })
            ] }),
            /* @__PURE__ */ T.jsxs(ht.Text, { children: [
              /* @__PURE__ */ T.jsx("span", { className: "fw-bold", children: "Мінімальна оцінка" }),
              ", яку бажаєте поставити, наприклад, ",
              /* @__PURE__ */ T.jsx("span", { className: "fw-bold", children: cp })
            ] })
          ] }) }) }),
          /* @__PURE__ */ T.jsx(en, { className: "mt-3", children: /* @__PURE__ */ T.jsx(en.Body, { children: /* @__PURE__ */ T.jsxs(ht.Group, { children: [
            /* @__PURE__ */ T.jsx(ht.Label, { className: "fw-bold", children: "Максимальна оцінка" }),
            /* @__PURE__ */ T.jsxs(Yc, { className: "mb-2", children: [
              /* @__PURE__ */ T.jsx(ht.Control, { type: "number", min: fp, max: Wc, placeholder: "Введіть максимальну оцінку", required: !0, disabled: je, isInvalid: !!Ee, onChange: (ye) => {
                Ue(Number(ye.target.value)), O("");
              } }),
              /* @__PURE__ */ T.jsx(ht.Control.Feedback, { type: "invalid", children: Ee })
            ] }),
            /* @__PURE__ */ T.jsxs(ht.Text, { children: [
              /* @__PURE__ */ T.jsx("span", { className: "fw-bold", children: "Максимальна оцінка" }),
              ", яку бажаєте поставити, наприклад, ",
              /* @__PURE__ */ T.jsx("span", { className: "fw-bold", children: Wc })
            ] })
          ] }) }) }),
          /* @__PURE__ */ T.jsx(en, { className: "mt-3", children: /* @__PURE__ */ T.jsx(en.Body, { children: /* @__PURE__ */ T.jsxs(ht.Group, { children: [
            /* @__PURE__ */ T.jsx(ht.Label, { className: "fw-bold", children: "Максимальний відсоток заповнення" }),
            /* @__PURE__ */ T.jsxs(Yc, { className: "mb-2", children: [
              /* @__PURE__ */ T.jsx(ht.Control, { type: "number", min: ue, max: "100", placeholder: "Введіть максимальний відсоток заповнення", required: !0, disabled: je, isInvalid: !!Y, defaultValue: ue, onChange: (ye) => {
                ce(Number(ye.target.value)), ee("");
              } }, ue),
              /* @__PURE__ */ T.jsx(ht.Control.Feedback, { type: "invalid", children: Y })
            ] }),
            /* @__PURE__ */ T.jsxs(ht.Text, { children: [
              /* @__PURE__ */ T.jsx("span", { className: "fw-bold", children: "Максимальний відсоток заповнення" }),
              " оцінок, наприклад, зараз є заповнення на",
              " ",
              /* @__PURE__ */ T.jsxs("span", { className: "fw-bold", children: [
                ue,
                "%"
              ] }),
              oe && oe.length > 0 && /* @__PURE__ */ T.jsx(T.Fragment, { children: " для обраних учнів" })
            ] })
          ] }) }) })
        ] }),
        s && /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
          /* @__PURE__ */ T.jsxs(op, { children: [
            /* @__PURE__ */ T.jsxs("p", { children: [
              /* @__PURE__ */ T.jsx("span", { className: "fw-bold", children: "Видалити учням оцінки " }),
              " — Дозволяє видалити виставлені оцінки на цій сторінці для обраних учнів."
            ] }),
            /* @__PURE__ */ T.jsxs("p", { children: [
              "Можна обрати, які саме оцінки треба видалити, наприклад, тільки",
              " ",
              /* @__PURE__ */ T.jsx("span", { className: "fw-bold", children: cp })
            ] })
          ] }),
          /* @__PURE__ */ T.jsx(en, { className: "mt-3", children: /* @__PURE__ */ T.jsxs(en.Body, { children: [
            /* @__PURE__ */ T.jsx(ht.Label, { className: "fw-bold", children: "Оберіть учнів" }),
            /* @__PURE__ */ T.jsx(Iy, { className: "mb-2", placeholder: "Оберіть учнів", options: U, onChange: (ye) => xt(ye), isMulti: !0, closeMenuOnSelect: !1, components: a, isDisabled: je }),
            /* @__PURE__ */ T.jsxs(ht.Text, { children: [
              /* @__PURE__ */ T.jsxs("p", { children: [
                /* @__PURE__ */ T.jsx("span", { className: "fw-bold", children: "Оберіть учнів" }),
                ", яким бажаєте видалити оцінки"
              ] }),
              /* @__PURE__ */ T.jsxs("p", { children: [
                "Якщо ",
                /* @__PURE__ */ T.jsx("span", { className: "fw-bold", children: "НЕ" }),
                " буде обрано жодного учня то, оцінки буде видалено ",
                /* @__PURE__ */ T.jsx("span", { className: "fw-bold", children: "усім учням" })
              ] })
            ] })
          ] }) }),
          !le && /* @__PURE__ */ T.jsx(en, { className: "mt-3", children: /* @__PURE__ */ T.jsx(en.Body, { children: /* @__PURE__ */ T.jsxs(ht.Group, { children: [
            /* @__PURE__ */ T.jsx(ht.Label, { className: "fw-bold", children: "Оцінка" }),
            /* @__PURE__ */ T.jsx(Yc, { className: "mb-2", children: /* @__PURE__ */ T.jsx(ht.Control, { type: "number", min: fp, max: Wc, placeholder: "Введіть оцінку яку бажаєте видалити", required: !0, disabled: je, onChange: (ye) => {
              ae(Number(ye.target.value));
            } }) }),
            /* @__PURE__ */ T.jsxs(ht.Text, { children: [
              /* @__PURE__ */ T.jsx("span", { className: "fw-bold", children: "Оцінка" }),
              ", яку бажаєте видалити, наприклад,",
              " ",
              /* @__PURE__ */ T.jsx("span", { className: "fw-bold", children: cp })
            ] })
          ] }) }) }),
          /* @__PURE__ */ T.jsx(en, { className: "mt-3", children: /* @__PURE__ */ T.jsxs(en.Body, { children: [
            /* @__PURE__ */ T.jsx(ht.Check, { className: "mb-2", type: "switch", label: "Видалити всі оцінки", onChange: (ye) => be(ye.target.checked), defaultValue: le ? "true" : "false", disabled: je }),
            /* @__PURE__ */ T.jsxs(ht.Text, { children: [
              "Буде видалено ",
              /* @__PURE__ */ T.jsx("span", { className: "fw-bold", children: "усі оцінки" })
            ] })
          ] }) })
        ] }),
        d && /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
          /* @__PURE__ */ T.jsxs(op, { children: [
            /* @__PURE__ */ T.jsxs("p", { children: [
              /* @__PURE__ */ T.jsx("b", { children: "Показати яких і скільки оцінок" }),
              " — Дозволяє показати яких і скільки оцінок у класі."
            ] }),
            /* @__PURE__ */ T.jsxs("p", { children: [
              "Треба перейти на сторінку ",
              /* @__PURE__ */ T.jsx("b", { children: "І" }),
              " або ",
              /* @__PURE__ */ T.jsx("b", { children: "ІІ" }),
              " семестру:"
            ] }),
            /* @__PURE__ */ T.jsx("hr", {}),
            /* @__PURE__ */ T.jsxs("ul", { children: [
              /* @__PURE__ */ T.jsx("li", { children: /* @__PURE__ */ T.jsx("b", { children: "Простори" }) }),
              /* @__PURE__ */ T.jsx("li", { children: /* @__PURE__ */ T.jsx("b", { children: "Підсумкове [обрати потрібний клас]" }) }),
              /* @__PURE__ */ T.jsx("li", { children: /* @__PURE__ */ T.jsx("b", { children: "І / ІІ семестр" }) })
            ] })
          ] }),
          /* @__PURE__ */ T.jsx(en, { className: "mt-3", children: /* @__PURE__ */ T.jsx(en.Body, { children: /* @__PURE__ */ T.jsxs("div", { className: "fst-italic", children: [
            "Щоб подивитися результат, виконайте умови, які зазначені в",
            " ",
            /* @__PURE__ */ T.jsx("span", { className: "fw-bold", children: "Описі" }),
            ", і потім натисніть кнопку",
            " ",
            /* @__PURE__ */ T.jsx("span", { className: "fw-bold", children: "Почати" })
          ] }) }) })
        ] })
      ] }),
      /* @__PURE__ */ T.jsxs(ka.Footer, { className: "justify-content-between", children: [
        /* @__PURE__ */ T.jsx(Qs, { variant: "danger", onClick: Ct, children: "Закрити" }),
        /* @__PURE__ */ T.jsx(Qs, { disabled: i === "", variant: "primary", type: "submit", children: "Почати" })
      ] })
    ] }) })
  ] });
}
eS.createRoot(document.getElementById("app")).render(/* @__PURE__ */ T.jsx(S.StrictMode, { children: /* @__PURE__ */ T.jsx(Aw, {}) }));
