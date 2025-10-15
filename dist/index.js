function Y_(a, i) {
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
var Dh = { exports: {} }, Ys = {};
/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var qv;
function G_() {
  if (qv) return Ys;
  qv = 1;
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
  return Ys.Fragment = i, Ys.jsx = r, Ys.jsxs = r, Ys;
}
var Yv;
function X_() {
  return Yv || (Yv = 1, Dh.exports = G_()), Dh.exports;
}
var T = X_(), Nh = { exports: {} }, Le = {};
/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Gv;
function I_() {
  if (Gv) return Le;
  Gv = 1;
  var a = Symbol.for("react.transitional.element"), i = Symbol.for("react.portal"), r = Symbol.for("react.fragment"), o = Symbol.for("react.strict_mode"), s = Symbol.for("react.profiler"), d = Symbol.for("react.consumer"), h = Symbol.for("react.context"), y = Symbol.for("react.forward_ref"), m = Symbol.for("react.suspense"), v = Symbol.for("react.memo"), S = Symbol.for("react.lazy"), O = Symbol.for("react.activity"), A = Symbol.iterator;
  function D(x) {
    return x === null || typeof x != "object" ? null : (x = A && x[A] || x["@@iterator"], typeof x == "function" ? x : null);
  }
  var N = {
    isMounted: function() {
      return !1;
    },
    enqueueForceUpdate: function() {
    },
    enqueueReplaceState: function() {
    },
    enqueueSetState: function() {
    }
  }, L = Object.assign, z = {};
  function V(x, k, te) {
    this.props = x, this.context = k, this.refs = z, this.updater = te || N;
  }
  V.prototype.isReactComponent = {}, V.prototype.setState = function(x, k) {
    if (typeof x != "object" && typeof x != "function" && x != null)
      throw Error(
        "takes an object of state variables to update or a function which returns an object of state variables."
      );
    this.updater.enqueueSetState(this, x, k, "setState");
  }, V.prototype.forceUpdate = function(x) {
    this.updater.enqueueForceUpdate(this, x, "forceUpdate");
  };
  function Z() {
  }
  Z.prototype = V.prototype;
  function X(x, k, te) {
    this.props = x, this.context = k, this.refs = z, this.updater = te || N;
  }
  var P = X.prototype = new Z();
  P.constructor = X, L(P, V.prototype), P.isPureReactComponent = !0;
  var B = Array.isArray;
  function I() {
  }
  var U = { H: null, A: null, T: null, S: null }, oe = Object.prototype.hasOwnProperty;
  function Ee(x, k, te) {
    var ae = te.ref;
    return {
      $$typeof: a,
      type: x,
      key: k,
      ref: ae !== void 0 ? ae : null,
      props: te
    };
  }
  function Fe(x, k) {
    return Ee(x.type, k, x.props);
  }
  function Ie(x) {
    return typeof x == "object" && x !== null && x.$$typeof === a;
  }
  function He(x) {
    var k = { "=": "=0", ":": "=2" };
    return "$" + x.replace(/[=:]/g, function(te) {
      return k[te];
    });
  }
  var dt = /\/+/g;
  function it(x, k) {
    return typeof x == "object" && x !== null && x.key != null ? He("" + x.key) : k.toString(36);
  }
  function $e(x) {
    switch (x.status) {
      case "fulfilled":
        return x.value;
      case "rejected":
        throw x.reason;
      default:
        switch (typeof x.status == "string" ? x.then(I, I) : (x.status = "pending", x.then(
          function(k) {
            x.status === "pending" && (x.status = "fulfilled", x.value = k);
          },
          function(k) {
            x.status === "pending" && (x.status = "rejected", x.reason = k);
          }
        )), x.status) {
          case "fulfilled":
            return x.value;
          case "rejected":
            throw x.reason;
        }
    }
    throw x;
  }
  function $(x, k, te, ae, ue) {
    var fe = typeof x;
    (fe === "undefined" || fe === "boolean") && (x = null);
    var de = !1;
    if (x === null) de = !0;
    else
      switch (fe) {
        case "bigint":
        case "string":
        case "number":
          de = !0;
          break;
        case "object":
          switch (x.$$typeof) {
            case a:
            case i:
              de = !0;
              break;
            case S:
              return de = x._init, $(
                de(x._payload),
                k,
                te,
                ae,
                ue
              );
          }
      }
    if (de)
      return ue = ue(x), de = ae === "" ? "." + it(x, 0) : ae, B(ue) ? (te = "", de != null && (te = de.replace(dt, "$&/") + "/"), $(ue, k, te, "", function(At) {
        return At;
      })) : ue != null && (Ie(ue) && (ue = Fe(
        ue,
        te + (ue.key == null || x && x.key === ue.key ? "" : ("" + ue.key).replace(
          dt,
          "$&/"
        ) + "/") + de
      )), k.push(ue)), 1;
    de = 0;
    var Ve = ae === "" ? "." : ae + ":";
    if (B(x))
      for (var ie = 0; ie < x.length; ie++)
        ae = x[ie], fe = Ve + it(ae, ie), de += $(
          ae,
          k,
          te,
          fe,
          ue
        );
    else if (ie = D(x), typeof ie == "function")
      for (x = ie.call(x), ie = 0; !(ae = x.next()).done; )
        ae = ae.value, fe = Ve + it(ae, ie++), de += $(
          ae,
          k,
          te,
          fe,
          ue
        );
    else if (fe === "object") {
      if (typeof x.then == "function")
        return $(
          $e(x),
          k,
          te,
          ae,
          ue
        );
      throw k = String(x), Error(
        "Objects are not valid as a React child (found: " + (k === "[object Object]" ? "object with keys {" + Object.keys(x).join(", ") + "}" : k) + "). If you meant to render a collection of children, use an array instead."
      );
    }
    return de;
  }
  function ne(x, k, te) {
    if (x == null) return x;
    var ae = [], ue = 0;
    return $(x, ae, "", "", function(fe) {
      return k.call(te, fe, ue++);
    }), ae;
  }
  function le(x) {
    if (x._status === -1) {
      var k = x._result;
      k = k(), k.then(
        function(te) {
          (x._status === 0 || x._status === -1) && (x._status = 1, x._result = te);
        },
        function(te) {
          (x._status === 0 || x._status === -1) && (x._status = 2, x._result = te);
        }
      ), x._status === -1 && (x._status = 0, x._result = k);
    }
    if (x._status === 1) return x._result.default;
    throw x._result;
  }
  var ye = typeof reportError == "function" ? reportError : function(x) {
    if (typeof window == "object" && typeof window.ErrorEvent == "function") {
      var k = new window.ErrorEvent("error", {
        bubbles: !0,
        cancelable: !0,
        message: typeof x == "object" && x !== null && typeof x.message == "string" ? String(x.message) : String(x),
        error: x
      });
      if (!window.dispatchEvent(k)) return;
    } else if (typeof process == "object" && typeof process.emit == "function") {
      process.emit("uncaughtException", x);
      return;
    }
    console.error(x);
  }, Ce = {
    map: ne,
    forEach: function(x, k, te) {
      ne(
        x,
        function() {
          k.apply(this, arguments);
        },
        te
      );
    },
    count: function(x) {
      var k = 0;
      return ne(x, function() {
        k++;
      }), k;
    },
    toArray: function(x) {
      return ne(x, function(k) {
        return k;
      }) || [];
    },
    only: function(x) {
      if (!Ie(x))
        throw Error(
          "React.Children.only expected to receive a single React element child."
        );
      return x;
    }
  };
  return Le.Activity = O, Le.Children = Ce, Le.Component = V, Le.Fragment = r, Le.Profiler = s, Le.PureComponent = X, Le.StrictMode = o, Le.Suspense = m, Le.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = U, Le.__COMPILER_RUNTIME = {
    __proto__: null,
    c: function(x) {
      return U.H.useMemoCache(x);
    }
  }, Le.cache = function(x) {
    return function() {
      return x.apply(null, arguments);
    };
  }, Le.cacheSignal = function() {
    return null;
  }, Le.cloneElement = function(x, k, te) {
    if (x == null)
      throw Error(
        "The argument must be a React element, but you passed " + x + "."
      );
    var ae = L({}, x.props), ue = x.key;
    if (k != null)
      for (fe in k.key !== void 0 && (ue = "" + k.key), k)
        !oe.call(k, fe) || fe === "key" || fe === "__self" || fe === "__source" || fe === "ref" && k.ref === void 0 || (ae[fe] = k[fe]);
    var fe = arguments.length - 2;
    if (fe === 1) ae.children = te;
    else if (1 < fe) {
      for (var de = Array(fe), Ve = 0; Ve < fe; Ve++)
        de[Ve] = arguments[Ve + 2];
      ae.children = de;
    }
    return Ee(x.type, ue, ae);
  }, Le.createContext = function(x) {
    return x = {
      $$typeof: h,
      _currentValue: x,
      _currentValue2: x,
      _threadCount: 0,
      Provider: null,
      Consumer: null
    }, x.Provider = x, x.Consumer = {
      $$typeof: d,
      _context: x
    }, x;
  }, Le.createElement = function(x, k, te) {
    var ae, ue = {}, fe = null;
    if (k != null)
      for (ae in k.key !== void 0 && (fe = "" + k.key), k)
        oe.call(k, ae) && ae !== "key" && ae !== "__self" && ae !== "__source" && (ue[ae] = k[ae]);
    var de = arguments.length - 2;
    if (de === 1) ue.children = te;
    else if (1 < de) {
      for (var Ve = Array(de), ie = 0; ie < de; ie++)
        Ve[ie] = arguments[ie + 2];
      ue.children = Ve;
    }
    if (x && x.defaultProps)
      for (ae in de = x.defaultProps, de)
        ue[ae] === void 0 && (ue[ae] = de[ae]);
    return Ee(x, fe, ue);
  }, Le.createRef = function() {
    return { current: null };
  }, Le.forwardRef = function(x) {
    return { $$typeof: y, render: x };
  }, Le.isValidElement = Ie, Le.lazy = function(x) {
    return {
      $$typeof: S,
      _payload: { _status: -1, _result: x },
      _init: le
    };
  }, Le.memo = function(x, k) {
    return {
      $$typeof: v,
      type: x,
      compare: k === void 0 ? null : k
    };
  }, Le.startTransition = function(x) {
    var k = U.T, te = {};
    U.T = te;
    try {
      var ae = x(), ue = U.S;
      ue !== null && ue(te, ae), typeof ae == "object" && ae !== null && typeof ae.then == "function" && ae.then(I, ye);
    } catch (fe) {
      ye(fe);
    } finally {
      k !== null && te.types !== null && (k.types = te.types), U.T = k;
    }
  }, Le.unstable_useCacheRefresh = function() {
    return U.H.useCacheRefresh();
  }, Le.use = function(x) {
    return U.H.use(x);
  }, Le.useActionState = function(x, k, te) {
    return U.H.useActionState(x, k, te);
  }, Le.useCallback = function(x, k) {
    return U.H.useCallback(x, k);
  }, Le.useContext = function(x) {
    return U.H.useContext(x);
  }, Le.useDebugValue = function() {
  }, Le.useDeferredValue = function(x, k) {
    return U.H.useDeferredValue(x, k);
  }, Le.useEffect = function(x, k) {
    return U.H.useEffect(x, k);
  }, Le.useEffectEvent = function(x) {
    return U.H.useEffectEvent(x);
  }, Le.useId = function() {
    return U.H.useId();
  }, Le.useImperativeHandle = function(x, k, te) {
    return U.H.useImperativeHandle(x, k, te);
  }, Le.useInsertionEffect = function(x, k) {
    return U.H.useInsertionEffect(x, k);
  }, Le.useLayoutEffect = function(x, k) {
    return U.H.useLayoutEffect(x, k);
  }, Le.useMemo = function(x, k) {
    return U.H.useMemo(x, k);
  }, Le.useOptimistic = function(x, k) {
    return U.H.useOptimistic(x, k);
  }, Le.useReducer = function(x, k, te) {
    return U.H.useReducer(x, k, te);
  }, Le.useRef = function(x) {
    return U.H.useRef(x);
  }, Le.useState = function(x) {
    return U.H.useState(x);
  }, Le.useSyncExternalStore = function(x, k, te) {
    return U.H.useSyncExternalStore(
      x,
      k,
      te
    );
  }, Le.useTransition = function() {
    return U.H.useTransition();
  }, Le.version = "19.2.0", Le;
}
var Xv;
function wf() {
  return Xv || (Xv = 1, Nh.exports = I_()), Nh.exports;
}
var E = wf();
const Xt = /* @__PURE__ */ Af(E), Iv = /* @__PURE__ */ Y_({
  __proto__: null,
  default: Xt
}, [E]);
var jh = { exports: {} }, Gs = {}, zh = { exports: {} }, Lh = {};
/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Fv;
function F_() {
  return Fv || (Fv = 1, (function(a) {
    function i($, ne) {
      var le = $.length;
      $.push(ne);
      e: for (; 0 < le; ) {
        var ye = le - 1 >>> 1, Ce = $[ye];
        if (0 < s(Ce, ne))
          $[ye] = ne, $[le] = Ce, le = ye;
        else break e;
      }
    }
    function r($) {
      return $.length === 0 ? null : $[0];
    }
    function o($) {
      if ($.length === 0) return null;
      var ne = $[0], le = $.pop();
      if (le !== ne) {
        $[0] = le;
        e: for (var ye = 0, Ce = $.length, x = Ce >>> 1; ye < x; ) {
          var k = 2 * (ye + 1) - 1, te = $[k], ae = k + 1, ue = $[ae];
          if (0 > s(te, le))
            ae < Ce && 0 > s(ue, te) ? ($[ye] = ue, $[ae] = le, ye = ae) : ($[ye] = te, $[k] = le, ye = k);
          else if (ae < Ce && 0 > s(ue, le))
            $[ye] = ue, $[ae] = le, ye = ae;
          else break e;
        }
      }
      return ne;
    }
    function s($, ne) {
      var le = $.sortIndex - ne.sortIndex;
      return le !== 0 ? le : $.id - ne.id;
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
    var m = [], v = [], S = 1, O = null, A = 3, D = !1, N = !1, L = !1, z = !1, V = typeof setTimeout == "function" ? setTimeout : null, Z = typeof clearTimeout == "function" ? clearTimeout : null, X = typeof setImmediate < "u" ? setImmediate : null;
    function P($) {
      for (var ne = r(v); ne !== null; ) {
        if (ne.callback === null) o(v);
        else if (ne.startTime <= $)
          o(v), ne.sortIndex = ne.expirationTime, i(m, ne);
        else break;
        ne = r(v);
      }
    }
    function B($) {
      if (L = !1, P($), !N)
        if (r(m) !== null)
          N = !0, I || (I = !0, He());
        else {
          var ne = r(v);
          ne !== null && $e(B, ne.startTime - $);
        }
    }
    var I = !1, U = -1, oe = 5, Ee = -1;
    function Fe() {
      return z ? !0 : !(a.unstable_now() - Ee < oe);
    }
    function Ie() {
      if (z = !1, I) {
        var $ = a.unstable_now();
        Ee = $;
        var ne = !0;
        try {
          e: {
            N = !1, L && (L = !1, Z(U), U = -1), D = !0;
            var le = A;
            try {
              t: {
                for (P($), O = r(m); O !== null && !(O.expirationTime > $ && Fe()); ) {
                  var ye = O.callback;
                  if (typeof ye == "function") {
                    O.callback = null, A = O.priorityLevel;
                    var Ce = ye(
                      O.expirationTime <= $
                    );
                    if ($ = a.unstable_now(), typeof Ce == "function") {
                      O.callback = Ce, P($), ne = !0;
                      break t;
                    }
                    O === r(m) && o(m), P($);
                  } else o(m);
                  O = r(m);
                }
                if (O !== null) ne = !0;
                else {
                  var x = r(v);
                  x !== null && $e(
                    B,
                    x.startTime - $
                  ), ne = !1;
                }
              }
              break e;
            } finally {
              O = null, A = le, D = !1;
            }
            ne = void 0;
          }
        } finally {
          ne ? He() : I = !1;
        }
      }
    }
    var He;
    if (typeof X == "function")
      He = function() {
        X(Ie);
      };
    else if (typeof MessageChannel < "u") {
      var dt = new MessageChannel(), it = dt.port2;
      dt.port1.onmessage = Ie, He = function() {
        it.postMessage(null);
      };
    } else
      He = function() {
        V(Ie, 0);
      };
    function $e($, ne) {
      U = V(function() {
        $(a.unstable_now());
      }, ne);
    }
    a.unstable_IdlePriority = 5, a.unstable_ImmediatePriority = 1, a.unstable_LowPriority = 4, a.unstable_NormalPriority = 3, a.unstable_Profiling = null, a.unstable_UserBlockingPriority = 2, a.unstable_cancelCallback = function($) {
      $.callback = null;
    }, a.unstable_forceFrameRate = function($) {
      0 > $ || 125 < $ ? console.error(
        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
      ) : oe = 0 < $ ? Math.floor(1e3 / $) : 5;
    }, a.unstable_getCurrentPriorityLevel = function() {
      return A;
    }, a.unstable_next = function($) {
      switch (A) {
        case 1:
        case 2:
        case 3:
          var ne = 3;
          break;
        default:
          ne = A;
      }
      var le = A;
      A = ne;
      try {
        return $();
      } finally {
        A = le;
      }
    }, a.unstable_requestPaint = function() {
      z = !0;
    }, a.unstable_runWithPriority = function($, ne) {
      switch ($) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          $ = 3;
      }
      var le = A;
      A = $;
      try {
        return ne();
      } finally {
        A = le;
      }
    }, a.unstable_scheduleCallback = function($, ne, le) {
      var ye = a.unstable_now();
      switch (typeof le == "object" && le !== null ? (le = le.delay, le = typeof le == "number" && 0 < le ? ye + le : ye) : le = ye, $) {
        case 1:
          var Ce = -1;
          break;
        case 2:
          Ce = 250;
          break;
        case 5:
          Ce = 1073741823;
          break;
        case 4:
          Ce = 1e4;
          break;
        default:
          Ce = 5e3;
      }
      return Ce = le + Ce, $ = {
        id: S++,
        callback: ne,
        priorityLevel: $,
        startTime: le,
        expirationTime: Ce,
        sortIndex: -1
      }, le > ye ? ($.sortIndex = le, i(v, $), r(m) === null && $ === r(v) && (L ? (Z(U), U = -1) : L = !0, $e(B, le - ye))) : ($.sortIndex = Ce, i(m, $), N || D || (N = !0, I || (I = !0, He()))), $;
    }, a.unstable_shouldYield = Fe, a.unstable_wrapCallback = function($) {
      var ne = A;
      return function() {
        var le = A;
        A = ne;
        try {
          return $.apply(this, arguments);
        } finally {
          A = le;
        }
      };
    };
  })(Lh)), Lh;
}
var Qv;
function Q_() {
  return Qv || (Qv = 1, zh.exports = F_()), zh.exports;
}
var Hh = { exports: {} }, wn = {};
/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Zv;
function Z_() {
  if (Zv) return wn;
  Zv = 1;
  var a = wf();
  function i(m) {
    var v = "https://react.dev/errors/" + m;
    if (1 < arguments.length) {
      v += "?args[]=" + encodeURIComponent(arguments[1]);
      for (var S = 2; S < arguments.length; S++)
        v += "&args[]=" + encodeURIComponent(arguments[S]);
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
  function d(m, v, S) {
    var O = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
    return {
      $$typeof: s,
      key: O == null ? null : "" + O,
      children: m,
      containerInfo: v,
      implementation: S
    };
  }
  var h = a.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  function y(m, v) {
    if (m === "font") return "";
    if (typeof v == "string")
      return v === "use-credentials" ? v : "";
  }
  return wn.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE = o, wn.createPortal = function(m, v) {
    var S = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
    if (!v || v.nodeType !== 1 && v.nodeType !== 9 && v.nodeType !== 11)
      throw Error(i(299));
    return d(m, v, null, S);
  }, wn.flushSync = function(m) {
    var v = h.T, S = o.p;
    try {
      if (h.T = null, o.p = 2, m) return m();
    } finally {
      h.T = v, o.p = S, o.d.f();
    }
  }, wn.preconnect = function(m, v) {
    typeof m == "string" && (v ? (v = v.crossOrigin, v = typeof v == "string" ? v === "use-credentials" ? v : "" : void 0) : v = null, o.d.C(m, v));
  }, wn.prefetchDNS = function(m) {
    typeof m == "string" && o.d.D(m);
  }, wn.preinit = function(m, v) {
    if (typeof m == "string" && v && typeof v.as == "string") {
      var S = v.as, O = y(S, v.crossOrigin), A = typeof v.integrity == "string" ? v.integrity : void 0, D = typeof v.fetchPriority == "string" ? v.fetchPriority : void 0;
      S === "style" ? o.d.S(
        m,
        typeof v.precedence == "string" ? v.precedence : void 0,
        {
          crossOrigin: O,
          integrity: A,
          fetchPriority: D
        }
      ) : S === "script" && o.d.X(m, {
        crossOrigin: O,
        integrity: A,
        fetchPriority: D,
        nonce: typeof v.nonce == "string" ? v.nonce : void 0
      });
    }
  }, wn.preinitModule = function(m, v) {
    if (typeof m == "string")
      if (typeof v == "object" && v !== null) {
        if (v.as == null || v.as === "script") {
          var S = y(
            v.as,
            v.crossOrigin
          );
          o.d.M(m, {
            crossOrigin: S,
            integrity: typeof v.integrity == "string" ? v.integrity : void 0,
            nonce: typeof v.nonce == "string" ? v.nonce : void 0
          });
        }
      } else v == null && o.d.M(m);
  }, wn.preload = function(m, v) {
    if (typeof m == "string" && typeof v == "object" && v !== null && typeof v.as == "string") {
      var S = v.as, O = y(S, v.crossOrigin);
      o.d.L(m, S, {
        crossOrigin: O,
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
  }, wn.preloadModule = function(m, v) {
    if (typeof m == "string")
      if (v) {
        var S = y(v.as, v.crossOrigin);
        o.d.m(m, {
          as: typeof v.as == "string" && v.as !== "script" ? v.as : void 0,
          crossOrigin: S,
          integrity: typeof v.integrity == "string" ? v.integrity : void 0
        });
      } else o.d.m(m);
  }, wn.requestFormReset = function(m) {
    o.d.r(m);
  }, wn.unstable_batchedUpdates = function(m, v) {
    return m(v);
  }, wn.useFormState = function(m, v, S) {
    return h.H.useFormState(m, v, S);
  }, wn.useFormStatus = function() {
    return h.H.useHostTransitionStatus();
  }, wn.version = "19.2.0", wn;
}
var Kv;
function hb() {
  if (Kv) return Hh.exports;
  Kv = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return a(), Hh.exports = Z_(), Hh.exports;
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
var Jv;
function K_() {
  if (Jv) return Gs;
  Jv = 1;
  var a = Q_(), i = wf(), r = hb();
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
  function S(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e;
    for (e = e.child; e !== null; ) {
      if (t = S(e), t !== null) return t;
      e = e.sibling;
    }
    return null;
  }
  var O = Object.assign, A = Symbol.for("react.element"), D = Symbol.for("react.transitional.element"), N = Symbol.for("react.portal"), L = Symbol.for("react.fragment"), z = Symbol.for("react.strict_mode"), V = Symbol.for("react.profiler"), Z = Symbol.for("react.consumer"), X = Symbol.for("react.context"), P = Symbol.for("react.forward_ref"), B = Symbol.for("react.suspense"), I = Symbol.for("react.suspense_list"), U = Symbol.for("react.memo"), oe = Symbol.for("react.lazy"), Ee = Symbol.for("react.activity"), Fe = Symbol.for("react.memo_cache_sentinel"), Ie = Symbol.iterator;
  function He(e) {
    return e === null || typeof e != "object" ? null : (e = Ie && e[Ie] || e["@@iterator"], typeof e == "function" ? e : null);
  }
  var dt = Symbol.for("react.client.reference");
  function it(e) {
    if (e == null) return null;
    if (typeof e == "function")
      return e.$$typeof === dt ? null : e.displayName || e.name || null;
    if (typeof e == "string") return e;
    switch (e) {
      case L:
        return "Fragment";
      case V:
        return "Profiler";
      case z:
        return "StrictMode";
      case B:
        return "Suspense";
      case I:
        return "SuspenseList";
      case Ee:
        return "Activity";
    }
    if (typeof e == "object")
      switch (e.$$typeof) {
        case N:
          return "Portal";
        case X:
          return e.displayName || "Context";
        case Z:
          return (e._context.displayName || "Context") + ".Consumer";
        case P:
          var t = e.render;
          return e = e.displayName, e || (e = t.displayName || t.name || "", e = e !== "" ? "ForwardRef(" + e + ")" : "ForwardRef"), e;
        case U:
          return t = e.displayName || null, t !== null ? t : it(e.type) || "Memo";
        case oe:
          t = e._payload, e = e._init;
          try {
            return it(e(t));
          } catch {
          }
      }
    return null;
  }
  var $e = Array.isArray, $ = i.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, ne = r.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE, le = {
    pending: !1,
    data: null,
    method: null,
    action: null
  }, ye = [], Ce = -1;
  function x(e) {
    return { current: e };
  }
  function k(e) {
    0 > Ce || (e.current = ye[Ce], ye[Ce] = null, Ce--);
  }
  function te(e, t) {
    Ce++, ye[Ce] = e.current, e.current = t;
  }
  var ae = x(null), ue = x(null), fe = x(null), de = x(null);
  function Ve(e, t) {
    switch (te(fe, t), te(ue, e), te(ae, null), t.nodeType) {
      case 9:
      case 11:
        e = (e = t.documentElement) && (e = e.namespaceURI) ? fv(e) : 0;
        break;
      default:
        if (e = t.tagName, t = t.namespaceURI)
          t = fv(t), e = dv(t, e);
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
    k(ae), te(ae, e);
  }
  function ie() {
    k(ae), k(ue), k(fe);
  }
  function At(e) {
    e.memoizedState !== null && te(de, e);
    var t = ae.current, n = dv(t, e.type);
    t !== n && (te(ue, e), te(ae, n));
  }
  function Ut(e) {
    ue.current === e && (k(ae), k(ue)), de.current === e && (k(de), Bs._currentValue = le);
  }
  var Ct, Ke;
  function et(e) {
    if (Ct === void 0)
      try {
        throw Error();
      } catch (n) {
        var t = n.stack.trim().match(/\n( *(at )?)/);
        Ct = t && t[1] || "", Ke = -1 < n.stack.indexOf(`
    at`) ? " (<anonymous>)" : -1 < n.stack.indexOf("@") ? "@unknown:0:0" : "";
      }
    return `
` + Ct + e + Ke;
  }
  var we = !1;
  function ze(e, t) {
    if (!e || we) return "";
    we = !0;
    var n = Error.prepareStackTrace;
    Error.prepareStackTrace = void 0;
    try {
      var l = {
        DetermineComponentFrameRoot: function() {
          try {
            if (t) {
              var W = function() {
                throw Error();
              };
              if (Object.defineProperty(W.prototype, "props", {
                set: function() {
                  throw Error();
                }
              }), typeof Reflect == "object" && Reflect.construct) {
                try {
                  Reflect.construct(W, []);
                } catch (F) {
                  var G = F;
                }
                Reflect.construct(e, [], W);
              } else {
                try {
                  W.call();
                } catch (F) {
                  G = F;
                }
                e.call(W.prototype);
              }
            } else {
              try {
                throw Error();
              } catch (F) {
                G = F;
              }
              (W = e()) && typeof W.catch == "function" && W.catch(function() {
              });
            }
          } catch (F) {
            if (F && G && typeof F.stack == "string")
              return [F.stack, G.stack];
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
`), Y = _.split(`
`);
        for (u = l = 0; l < w.length && !w[l].includes("DetermineComponentFrameRoot"); )
          l++;
        for (; u < Y.length && !Y[u].includes(
          "DetermineComponentFrameRoot"
        ); )
          u++;
        if (l === w.length || u === Y.length)
          for (l = w.length - 1, u = Y.length - 1; 1 <= l && 0 <= u && w[l] !== Y[u]; )
            u--;
        for (; 1 <= l && 0 <= u; l--, u--)
          if (w[l] !== Y[u]) {
            if (l !== 1 || u !== 1)
              do
                if (l--, u--, 0 > u || w[l] !== Y[u]) {
                  var K = `
` + w[l].replace(" at new ", " at ");
                  return e.displayName && K.includes("<anonymous>") && (K = K.replace("<anonymous>", e.displayName)), K;
                }
              while (1 <= l && 0 <= u);
            break;
          }
      }
    } finally {
      we = !1, Error.prepareStackTrace = n;
    }
    return (n = e ? e.displayName || e.name : "") ? et(n) : "";
  }
  function Yn(e, t) {
    switch (e.tag) {
      case 26:
      case 27:
      case 5:
        return et(e.type);
      case 16:
        return et("Lazy");
      case 13:
        return e.child !== t && t !== null ? et("Suspense Fallback") : et("Suspense");
      case 19:
        return et("SuspenseList");
      case 0:
      case 15:
        return ze(e.type, !1);
      case 11:
        return ze(e.type.render, !1);
      case 1:
        return ze(e.type, !0);
      case 31:
        return et("Activity");
      default:
        return "";
    }
  }
  function yr(e) {
    try {
      var t = "", n = null;
      do
        t += Yn(e, n), n = e, e = e.return;
      while (e);
      return t;
    } catch (l) {
      return `
Error generating stack: ` + l.message + `
` + l.stack;
    }
  }
  var jl = Object.prototype.hasOwnProperty, zl = a.unstable_scheduleCallback, Ll = a.unstable_cancelCallback, To = a.unstable_shouldYield, Ao = a.unstable_requestPaint, rn = a.unstable_now, Bi = a.unstable_getCurrentPriorityLevel, Ue = a.unstable_ImmediatePriority, ca = a.unstable_UserBlockingPriority, di = a.unstable_NormalPriority, Zf = a.unstable_LowPriority, $i = a.unstable_IdlePriority, ki = a.log, qi = a.unstable_setDisableYieldValue, Ya = null, Rn = null;
  function fa(e) {
    if (typeof ki == "function" && qi(e), Rn && typeof Rn.setStrictMode == "function")
      try {
        Rn.setStrictMode(Ya, e);
      } catch {
      }
  }
  var Dn = Math.clz32 ? Math.clz32 : Wf, Kf = Math.log, Jf = Math.LN2;
  function Wf(e) {
    return e >>>= 0, e === 0 ? 32 : 31 - (Kf(e) / Jf | 0) | 0;
  }
  var br = 256, _r = 262144, Hl = 4194304;
  function da(e) {
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
  function Vl(e, t, n) {
    var l = e.pendingLanes;
    if (l === 0) return 0;
    var u = 0, f = e.suspendedLanes, g = e.pingedLanes;
    e = e.warmLanes;
    var _ = l & 134217727;
    return _ !== 0 ? (l = _ & ~f, l !== 0 ? u = da(l) : (g &= _, g !== 0 ? u = da(g) : n || (n = _ & ~e, n !== 0 && (u = da(n))))) : (_ = l & ~f, _ !== 0 ? u = da(_) : g !== 0 ? u = da(g) : n || (n = l & ~e, n !== 0 && (u = da(n)))), u === 0 ? 0 : t !== 0 && t !== u && (t & f) === 0 && (f = u & -u, n = t & -t, f >= n || f === 32 && (n & 4194048) !== 0) ? t : u;
  }
  function Yi(e, t) {
    return (e.pendingLanes & ~(e.suspendedLanes & ~e.pingedLanes) & t) === 0;
  }
  function Pf(e, t) {
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
    var e = Hl;
    return Hl <<= 1, (Hl & 62914560) === 0 && (Hl = 4194304), e;
  }
  function wo(e) {
    for (var t = [], n = 0; 31 > n; n++) t.push(e);
    return t;
  }
  function Ul(e, t) {
    e.pendingLanes |= t, t !== 268435456 && (e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0);
  }
  function Gi(e, t, n, l, u, f) {
    var g = e.pendingLanes;
    e.pendingLanes = n, e.suspendedLanes = 0, e.pingedLanes = 0, e.warmLanes = 0, e.expiredLanes &= n, e.entangledLanes &= n, e.errorRecoveryDisabledLanes &= n, e.shellSuspendCounter = 0;
    var _ = e.entanglements, w = e.expirationTimes, Y = e.hiddenUpdates;
    for (n = g & ~n; 0 < n; ) {
      var K = 31 - Dn(n), W = 1 << K;
      _[K] = 0, w[K] = -1;
      var G = Y[K];
      if (G !== null)
        for (Y[K] = null, K = 0; K < G.length; K++) {
          var F = G[K];
          F !== null && (F.lane &= -536870913);
        }
      n &= ~W;
    }
    l !== 0 && Xi(e, l, 0), f !== 0 && u === 0 && e.tag !== 0 && (e.suspendedLanes |= f & ~(g & ~t));
  }
  function Xi(e, t, n) {
    e.pendingLanes |= t, e.suspendedLanes &= ~t;
    var l = 31 - Dn(t);
    e.entangledLanes |= t, e.entanglements[l] = e.entanglements[l] | 1073741824 | n & 261930;
  }
  function hu(e, t) {
    var n = e.entangledLanes |= t;
    for (e = e.entanglements; n; ) {
      var l = 31 - Dn(n), u = 1 << l;
      u & t | e[l] & t && (e[l] |= t), n &= ~u;
    }
  }
  function pu(e, t) {
    var n = t & -t;
    return n = (n & 42) !== 0 ? 1 : Mo(n), (n & (e.suspendedLanes | t)) !== 0 ? 0 : n;
  }
  function Mo(e) {
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
  function Ro(e) {
    return e &= -e, 2 < e ? 8 < e ? (e & 134217727) !== 0 ? 32 : 268435456 : 8 : 2;
  }
  function mu() {
    var e = ne.p;
    return e !== 0 ? e : (e = window.event, e === void 0 ? 32 : Lv(e.type));
  }
  function Sr(e, t) {
    var n = ne.p;
    try {
      return ne.p = e, t();
    } finally {
      ne.p = n;
    }
  }
  var Nn = Math.random().toString(36).slice(2), Bt = "__reactFiber$" + Nn, Cn = "__reactProps$" + Nn, Ga = "__reactContainer$" + Nn, Do = "__reactEvents$" + Nn, ed = "__reactListeners$" + Nn, Ii = "__reactHandles$" + Nn, on = "__reactResources$" + Nn, nn = "__reactMarker$" + Nn;
  function gn(e) {
    delete e[Bt], delete e[Cn], delete e[Do], delete e[ed], delete e[Ii];
  }
  function $t(e) {
    var t = e[Bt];
    if (t) return t;
    for (var n = e.parentNode; n; ) {
      if (t = n[Ga] || n[Bt]) {
        if (n = t.alternate, t.child !== null || n !== null && n.child !== null)
          for (e = bv(e); e !== null; ) {
            if (n = e[Bt]) return n;
            e = bv(e);
          }
        return t;
      }
      e = n, n = e.parentNode;
    }
    return null;
  }
  function Ta(e) {
    if (e = e[Bt] || e[Ga]) {
      var t = e.tag;
      if (t === 5 || t === 6 || t === 13 || t === 31 || t === 26 || t === 27 || t === 3)
        return e;
    }
    return null;
  }
  function ha(e) {
    var t = e.tag;
    if (t === 5 || t === 26 || t === 27 || t === 6) return e.stateNode;
    throw Error(o(33));
  }
  function Gn(e) {
    var t = e[on];
    return t || (t = e[on] = { hoistableStyles: /* @__PURE__ */ new Map(), hoistableScripts: /* @__PURE__ */ new Map() }), t;
  }
  function wt(e) {
    e[nn] = !0;
  }
  var No = /* @__PURE__ */ new Set(), Er = {};
  function Xn(e, t) {
    hi(e, t), hi(e + "Capture", t);
  }
  function hi(e, t) {
    for (Er[e] = t, e = 0; e < t.length; e++)
      No.add(t[e]);
  }
  var jo = RegExp(
    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
  ), Cr = {}, zo = {};
  function gu(e) {
    return jl.call(zo, e) ? !0 : jl.call(Cr, e) ? !1 : jo.test(e) ? zo[e] = !0 : (Cr[e] = !0, !1);
  }
  function Bl(e, t, n) {
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
  function $l(e, t, n) {
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
  function pa(e, t, n, l) {
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
  function jn(e) {
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
  function Lo(e) {
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
  function xr(e) {
    if (!e._valueTracker) {
      var t = Lo(e) ? "checked" : "value";
      e._valueTracker = vu(
        e,
        t,
        "" + e[t]
      );
    }
  }
  function Ho(e) {
    if (!e) return !1;
    var t = e._valueTracker;
    if (!t) return !0;
    var n = t.getValue(), l = "";
    return e && (l = Lo(e) ? e.checked ? "true" : "false" : e.value), e = l, e !== n ? (t.setValue(e), !0) : !1;
  }
  function zn(e) {
    if (e = e || (typeof document < "u" ? document : void 0), typeof e > "u") return null;
    try {
      return e.activeElement || e.body;
    } catch {
      return e.body;
    }
  }
  var Ln = /[\n"\\]/g;
  function Ft(e) {
    return e.replace(
      Ln,
      function(t) {
        return "\\" + t.charCodeAt(0).toString(16) + " ";
      }
    );
  }
  function xn(e, t, n, l, u, f, g, _) {
    e.name = "", g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" ? e.type = g : e.removeAttribute("type"), t != null ? g === "number" ? (t === 0 && e.value === "" || e.value != t) && (e.value = "" + jn(t)) : e.value !== "" + jn(t) && (e.value = "" + jn(t)) : g !== "submit" && g !== "reset" || e.removeAttribute("value"), t != null ? kl(e, g, jn(t)) : n != null ? kl(e, g, jn(n)) : l != null && e.removeAttribute("value"), u == null && f != null && (e.defaultChecked = !!f), u != null && (e.checked = u && typeof u != "function" && typeof u != "symbol"), _ != null && typeof _ != "function" && typeof _ != "symbol" && typeof _ != "boolean" ? e.name = "" + jn(_) : e.removeAttribute("name");
  }
  function Or(e, t, n, l, u, f, g, _) {
    if (f != null && typeof f != "function" && typeof f != "symbol" && typeof f != "boolean" && (e.type = f), t != null || n != null) {
      if (!(f !== "submit" && f !== "reset" || t != null)) {
        xr(e);
        return;
      }
      n = n != null ? "" + jn(n) : "", t = t != null ? "" + jn(t) : n, _ || t === e.value || (e.value = t), e.defaultValue = t;
    }
    l = l ?? u, l = typeof l != "function" && typeof l != "symbol" && !!l, e.checked = _ ? e.checked : !!l, e.defaultChecked = !!l, g != null && typeof g != "function" && typeof g != "symbol" && typeof g != "boolean" && (e.name = g), xr(e);
  }
  function kl(e, t, n) {
    t === "number" && zn(e.ownerDocument) === e || e.defaultValue === "" + n || (e.defaultValue = "" + n);
  }
  function vn(e, t, n, l) {
    if (e = e.options, t) {
      t = {};
      for (var u = 0; u < n.length; u++)
        t["$" + n[u]] = !0;
      for (n = 0; n < e.length; n++)
        u = t.hasOwnProperty("$" + e[n].value), e[n].selected !== u && (e[n].selected = u), u && l && (e[n].defaultSelected = !0);
    } else {
      for (n = "" + jn(n), t = null, u = 0; u < e.length; u++) {
        if (e[u].value === n) {
          e[u].selected = !0, l && (e[u].defaultSelected = !0);
          return;
        }
        t !== null || e[u].disabled || (t = e[u]);
      }
      t !== null && (t.selected = !0);
    }
  }
  function Xa(e, t, n) {
    if (t != null && (t = "" + jn(t), t !== e.value && (e.value = t), n == null)) {
      e.defaultValue !== t && (e.defaultValue = t);
      return;
    }
    e.defaultValue = n != null ? "" + jn(n) : "";
  }
  function ql(e, t, n, l) {
    if (t == null) {
      if (l != null) {
        if (n != null) throw Error(o(92));
        if ($e(l)) {
          if (1 < l.length) throw Error(o(93));
          l = l[0];
        }
        n = l;
      }
      n == null && (n = ""), t = n;
    }
    n = jn(t), e.defaultValue = n, l = e.textContent, l === n && l !== "" && l !== null && (e.value = l), xr(e);
  }
  function aa(e, t) {
    if (t) {
      var n = e.firstChild;
      if (n && n === e.lastChild && n.nodeType === 3) {
        n.nodeValue = t;
        return;
      }
    }
    e.textContent = t;
  }
  var Vo = new Set(
    "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
      " "
    )
  );
  function Uo(e, t, n) {
    var l = t.indexOf("--") === 0;
    n == null || typeof n == "boolean" || n === "" ? l ? e.setProperty(t, "") : t === "float" ? e.cssFloat = "" : e[t] = "" : l ? e.setProperty(t, n) : typeof n != "number" || n === 0 || Vo.has(t) ? t === "float" ? e.cssFloat = n : e[t] = ("" + n).trim() : e[t] = n + "px";
  }
  function pi(e, t, n) {
    if (t != null && typeof t != "object")
      throw Error(o(62));
    if (e = e.style, n != null) {
      for (var l in n)
        !n.hasOwnProperty(l) || t != null && t.hasOwnProperty(l) || (l.indexOf("--") === 0 ? e.setProperty(l, "") : l === "float" ? e.cssFloat = "" : e[l] = "");
      for (var u in t)
        l = t[u], t.hasOwnProperty(u) && n[u] !== l && Uo(e, u, l);
    } else
      for (var f in t)
        t.hasOwnProperty(f) && Uo(e, f, t[f]);
  }
  function Yl(e) {
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
  ]), Aa = /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
  function Tr(e) {
    return Aa.test("" + e) ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')" : e;
  }
  function sn() {
  }
  var Fi = null;
  function Ar(e) {
    return e = e.target || e.srcElement || window, e.correspondingUseElement && (e = e.correspondingUseElement), e.nodeType === 3 ? e.parentNode : e;
  }
  var ma = null, Ia = null;
  function Qi(e) {
    var t = Ta(e);
    if (t && (e = t.stateNode)) {
      var n = e[Cn] || null;
      e: switch (e = t.stateNode, t.type) {
        case "input":
          if (xn(
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
              'input[name="' + Ft(
                "" + t
              ) + '"][type="radio"]'
            ), t = 0; t < n.length; t++) {
              var l = n[t];
              if (l !== e && l.form === e.form) {
                var u = l[Cn] || null;
                if (!u) throw Error(o(90));
                xn(
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
              l = n[t], l.form === e.form && Ho(l);
          }
          break e;
        case "textarea":
          Xa(e, n.value, n.defaultValue);
          break e;
        case "select":
          t = n.value, t != null && vn(e, !!n.multiple, t, !1);
      }
    }
  }
  var wr = !1;
  function Bo(e, t, n) {
    if (wr) return e(t, n);
    wr = !0;
    try {
      var l = e(t);
      return l;
    } finally {
      if (wr = !1, (ma !== null || Ia !== null) && (bc(), ma && (t = ma, e = Ia, Ia = ma = null, Qi(t), e)))
        for (t = 0; t < e.length; t++) Qi(e[t]);
    }
  }
  function Zi(e, t) {
    var n = e.stateNode;
    if (n === null) return null;
    var l = n[Cn] || null;
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
  var On = !(typeof window > "u" || typeof window.document > "u" || typeof window.document.createElement > "u"), $o = !1;
  if (On)
    try {
      var Ki = {};
      Object.defineProperty(Ki, "passive", {
        get: function() {
          $o = !0;
        }
      }), window.addEventListener("test", Ki, Ki), window.removeEventListener("test", Ki, Ki);
    } catch {
      $o = !1;
    }
  var ga = null, Ji = null, Wi = null;
  function bu() {
    if (Wi) return Wi;
    var e, t = Ji, n = t.length, l, u = "value" in ga ? ga.value : ga.textContent, f = u.length;
    for (e = 0; e < n && t[e] === u[e]; e++) ;
    var g = n - e;
    for (l = 1; l <= g && t[n - l] === u[f - l]; l++) ;
    return Wi = u.slice(e, 1 < l ? 1 - l : void 0);
  }
  function mi(e) {
    var t = e.keyCode;
    return "charCode" in e ? (e = e.charCode, e === 0 && t === 13 && (e = 13)) : e = t, e === 10 && (e = 13), 32 <= e || e === 13 ? e : 0;
  }
  function Mr() {
    return !0;
  }
  function ko() {
    return !1;
  }
  function un(e) {
    function t(n, l, u, f, g) {
      this._reactName = n, this._targetInst = u, this.type = l, this.nativeEvent = f, this.target = g, this.currentTarget = null;
      for (var _ in e)
        e.hasOwnProperty(_) && (n = e[_], this[_] = n ? n(f) : f[_]);
      return this.isDefaultPrevented = (f.defaultPrevented != null ? f.defaultPrevented : f.returnValue === !1) ? Mr : ko, this.isPropagationStopped = ko, this;
    }
    return O(t.prototype, {
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
  var wa = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function(e) {
      return e.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0
  }, Pi = un(wa), el = O({}, wa, { view: 0, detail: 0 }), Gl = un(el), Xl, Rr, tl, Ma = O({}, el, {
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
    getModifierState: Il,
    button: 0,
    buttons: 0,
    relatedTarget: function(e) {
      return e.relatedTarget === void 0 ? e.fromElement === e.srcElement ? e.toElement : e.fromElement : e.relatedTarget;
    },
    movementX: function(e) {
      return "movementX" in e ? e.movementX : (e !== tl && (tl && e.type === "mousemove" ? (Xl = e.screenX - tl.screenX, Rr = e.screenY - tl.screenY) : Rr = Xl = 0, tl = e), Xl);
    },
    movementY: function(e) {
      return "movementY" in e ? e.movementY : Rr;
    }
  }), _u = un(Ma), Su = O({}, Ma, { dataTransfer: 0 }), Eu = un(Su), Cu = O({}, el, { relatedTarget: 0 }), Dr = un(Cu), xu = O({}, wa, {
    animationName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), qo = un(xu), Ou = O({}, wa, {
    clipboardData: function(e) {
      return "clipboardData" in e ? e.clipboardData : window.clipboardData;
    }
  }), td = un(Ou), nd = O({}, wa, { data: 0 }), Yo = un(nd), Tu = {
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
  }, ad = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey"
  };
  function id(e) {
    var t = this.nativeEvent;
    return t.getModifierState ? t.getModifierState(e) : (e = ad[e]) ? !!t[e] : !1;
  }
  function Il() {
    return id;
  }
  var Au = O({}, el, {
    key: function(e) {
      if (e.key) {
        var t = Tu[e.key] || e.key;
        if (t !== "Unidentified") return t;
      }
      return e.type === "keypress" ? (e = mi(e), e === 13 ? "Enter" : String.fromCharCode(e)) : e.type === "keydown" || e.type === "keyup" ? Nr[e.keyCode] || "Unidentified" : "";
    },
    code: 0,
    location: 0,
    ctrlKey: 0,
    shiftKey: 0,
    altKey: 0,
    metaKey: 0,
    repeat: 0,
    locale: 0,
    getModifierState: Il,
    charCode: function(e) {
      return e.type === "keypress" ? mi(e) : 0;
    },
    keyCode: function(e) {
      return e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    },
    which: function(e) {
      return e.type === "keypress" ? mi(e) : e.type === "keydown" || e.type === "keyup" ? e.keyCode : 0;
    }
  }), wu = un(Au), gi = O({}, Ma, {
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
  }), jr = un(gi), ld = O({}, el, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Il
  }), Mu = un(ld), rd = O({}, wa, {
    propertyName: 0,
    elapsedTime: 0,
    pseudoElement: 0
  }), od = un(rd), sd = O({}, Ma, {
    deltaX: function(e) {
      return "deltaX" in e ? e.deltaX : "wheelDeltaX" in e ? -e.wheelDeltaX : 0;
    },
    deltaY: function(e) {
      return "deltaY" in e ? e.deltaY : "wheelDeltaY" in e ? -e.wheelDeltaY : "wheelDelta" in e ? -e.wheelDelta : 0;
    },
    deltaZ: 0,
    deltaMode: 0
  }), ud = un(sd), Ru = O({}, wa, {
    newState: 0,
    oldState: 0
  }), Du = un(Ru), cd = [9, 13, 27, 32], Fa = On && "CompositionEvent" in window, ia = null;
  On && "documentMode" in document && (ia = document.documentMode);
  var fd = On && "TextEvent" in window && !ia, Fl = On && (!Fa || ia && 8 < ia && 11 >= ia), Nu = " ", ju = !1;
  function zu(e, t) {
    switch (e) {
      case "keyup":
        return cd.indexOf(t.keyCode) !== -1;
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
  var nl = !1;
  function dd(e, t) {
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
  function hd(e, t) {
    if (nl)
      return e === "compositionend" || !Fa && zu(e, t) ? (e = bu(), Wi = Ji = ga = null, nl = !1, e) : null;
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
        return Fl && t.locale !== "ko" ? null : t.data;
      default:
        return null;
    }
  }
  var pd = {
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
  function In(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t === "input" ? !!pd[e.type] : t === "textarea";
  }
  function Go(e, t, n, l) {
    ma ? Ia ? Ia.push(l) : Ia = [l] : ma = l, t = Tc(t, "onChange"), 0 < t.length && (n = new Pi(
      "onChange",
      "change",
      null,
      n,
      l
    ), e.push({ event: n, listeners: t }));
  }
  var al = null, il = null;
  function md(e) {
    lv(e, 0);
  }
  function zr(e) {
    var t = ha(e);
    if (Ho(t)) return e;
  }
  function Xo(e, t) {
    if (e === "change") return t;
  }
  var Ql = !1;
  if (On) {
    var Io;
    if (On) {
      var Fo = "oninput" in document;
      if (!Fo) {
        var Qo = document.createElement("div");
        Qo.setAttribute("oninput", "return;"), Fo = typeof Qo.oninput == "function";
      }
      Io = Fo;
    } else Io = !1;
    Ql = Io && (!document.documentMode || 9 < document.documentMode);
  }
  function Hu() {
    al && (al.detachEvent("onpropertychange", Vu), il = al = null);
  }
  function Vu(e) {
    if (e.propertyName === "value" && zr(il)) {
      var t = [];
      Go(
        t,
        il,
        e,
        Ar(e)
      ), Bo(md, t);
    }
  }
  function Uu(e, t, n) {
    e === "focusin" ? (Hu(), al = t, il = n, al.attachEvent("onpropertychange", Vu)) : e === "focusout" && Hu();
  }
  function Bu(e) {
    if (e === "selectionchange" || e === "keyup" || e === "keydown")
      return zr(il);
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
  var yn = typeof Object.is == "function" ? Object.is : ku;
  function cn(e, t) {
    if (yn(e, t)) return !0;
    if (typeof e != "object" || e === null || typeof t != "object" || t === null)
      return !1;
    var n = Object.keys(e), l = Object.keys(t);
    if (n.length !== l.length) return !1;
    for (l = 0; l < n.length; l++) {
      var u = n[l];
      if (!jl.call(t, u) || !yn(e[u], t[u]))
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
  function Zo(e, t) {
    return e && t ? e === t ? !0 : e && e.nodeType === 3 ? !1 : t && t.nodeType === 3 ? Zo(e, t.parentNode) : "contains" in e ? e.contains(t) : e.compareDocumentPosition ? !!(e.compareDocumentPosition(t) & 16) : !1 : !1;
  }
  function Ko(e) {
    e = e != null && e.ownerDocument != null && e.ownerDocument.defaultView != null ? e.ownerDocument.defaultView : window;
    for (var t = zn(e.document); t instanceof e.HTMLIFrameElement; ) {
      try {
        var n = typeof t.contentWindow.location.href == "string";
      } catch {
        n = !1;
      }
      if (n) e = t.contentWindow;
      else break;
      t = zn(e.document);
    }
    return t;
  }
  function Jo(e) {
    var t = e && e.nodeName && e.nodeName.toLowerCase();
    return t && (t === "input" && (e.type === "text" || e.type === "search" || e.type === "tel" || e.type === "url" || e.type === "password") || t === "textarea" || e.contentEditable === "true");
  }
  var gd = On && "documentMode" in document && 11 >= document.documentMode, ll = null, Wo = null, Zl = null, Po = !1;
  function es(e, t, n) {
    var l = n.window === n ? n.document : n.nodeType === 9 ? n : n.ownerDocument;
    Po || ll == null || ll !== zn(l) || (l = ll, "selectionStart" in l && Jo(l) ? l = { start: l.selectionStart, end: l.selectionEnd } : (l = (l.ownerDocument && l.ownerDocument.defaultView || window).getSelection(), l = {
      anchorNode: l.anchorNode,
      anchorOffset: l.anchorOffset,
      focusNode: l.focusNode,
      focusOffset: l.focusOffset
    }), Zl && cn(Zl, l) || (Zl = l, l = Tc(Wo, "onSelect"), 0 < l.length && (t = new Pi(
      "onSelect",
      "select",
      null,
      t,
      n
    ), e.push({ event: t, listeners: l }), t.target = ll)));
  }
  function Qa(e, t) {
    var n = {};
    return n[e.toLowerCase()] = t.toLowerCase(), n["Webkit" + e] = "webkit" + t, n["Moz" + e] = "moz" + t, n;
  }
  var Za = {
    animationend: Qa("Animation", "AnimationEnd"),
    animationiteration: Qa("Animation", "AnimationIteration"),
    animationstart: Qa("Animation", "AnimationStart"),
    transitionrun: Qa("Transition", "TransitionRun"),
    transitionstart: Qa("Transition", "TransitionStart"),
    transitioncancel: Qa("Transition", "TransitionCancel"),
    transitionend: Qa("Transition", "TransitionEnd")
  }, ts = {}, Gu = {};
  On && (Gu = document.createElement("div").style, "AnimationEvent" in window || (delete Za.animationend.animation, delete Za.animationiteration.animation, delete Za.animationstart.animation), "TransitionEvent" in window || delete Za.transitionend.transition);
  function Hn(e) {
    if (ts[e]) return ts[e];
    if (!Za[e]) return e;
    var t = Za[e], n;
    for (n in t)
      if (t.hasOwnProperty(n) && n in Gu)
        return ts[e] = t[n];
    return e;
  }
  var va = Hn("animationend"), ns = Hn("animationiteration"), Xu = Hn("animationstart"), Iu = Hn("transitionrun"), Fu = Hn("transitionstart"), Qu = Hn("transitioncancel"), as = Hn("transitionend"), Zu = /* @__PURE__ */ new Map(), is = "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
    " "
  );
  is.push("scrollEnd");
  function la(e, t) {
    Zu.set(e, t), Xn(t, [e]);
  }
  var Kl = typeof reportError == "function" ? reportError : function(e) {
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
  }, Vn = [], rl = 0, ls = 0;
  function Hr() {
    for (var e = rl, t = ls = rl = 0; t < e; ) {
      var n = Vn[t];
      Vn[t++] = null;
      var l = Vn[t];
      Vn[t++] = null;
      var u = Vn[t];
      Vn[t++] = null;
      var f = Vn[t];
      if (Vn[t++] = null, l !== null && u !== null) {
        var g = l.pending;
        g === null ? u.next = u : (u.next = g.next, g.next = u), l.pending = u;
      }
      f !== 0 && os(n, u, f);
    }
  }
  function Vr(e, t, n, l) {
    Vn[rl++] = e, Vn[rl++] = t, Vn[rl++] = n, Vn[rl++] = l, ls |= l, e.lanes |= l, e = e.alternate, e !== null && (e.lanes |= l);
  }
  function rs(e, t, n, l) {
    return Vr(e, t, n, l), Ur(e);
  }
  function bn(e, t) {
    return Vr(e, null, null, t), Ur(e);
  }
  function os(e, t, n) {
    e.lanes |= n;
    var l = e.alternate;
    l !== null && (l.lanes |= n);
    for (var u = !1, f = e.return; f !== null; )
      f.childLanes |= n, l = f.alternate, l !== null && (l.childLanes |= n), f.tag === 22 && (e = f.stateNode, e === null || e._visibility & 1 || (u = !0)), e = f, f = f.return;
    return e.tag === 3 ? (f = e.stateNode, u && t !== null && (u = 31 - Dn(n), e = f.hiddenUpdates, l = e[u], l === null ? e[u] = [t] : l.push(t), t.lane = n | 536870912), f) : null;
  }
  function Ur(e) {
    if (50 < Ns)
      throw Ns = 0, th = null, Error(o(185));
    for (var t = e.return; t !== null; )
      e = t, t = e.return;
    return e.tag === 3 ? e.stateNode : null;
  }
  var ol = {};
  function vd(e, t, n, l) {
    this.tag = e, this.key = n, this.sibling = this.child = this.return = this.stateNode = this.type = this.elementType = null, this.index = 0, this.refCleanup = this.ref = null, this.pendingProps = t, this.dependencies = this.memoizedState = this.updateQueue = this.memoizedProps = null, this.mode = l, this.subtreeFlags = this.flags = 0, this.deletions = null, this.childLanes = this.lanes = 0, this.alternate = null;
  }
  function Un(e, t, n, l) {
    return new vd(e, t, n, l);
  }
  function ss(e) {
    return e = e.prototype, !(!e || !e.isReactComponent);
  }
  function Ra(e, t) {
    var n = e.alternate;
    return n === null ? (n = Un(
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
    if (l = e, typeof e == "function") ss(e) && (g = 1);
    else if (typeof e == "string")
      g = D_(
        e,
        n,
        ae.current
      ) ? 26 : e === "html" || e === "head" || e === "body" ? 27 : 5;
    else
      e: switch (e) {
        case Ee:
          return e = Un(31, n, t, u), e.elementType = Ee, e.lanes = f, e;
        case L:
          return Da(n.children, u, f, t);
        case z:
          g = 8, u |= 24;
          break;
        case V:
          return e = Un(12, n, t, u | 2), e.elementType = V, e.lanes = f, e;
        case B:
          return e = Un(13, n, t, u), e.elementType = B, e.lanes = f, e;
        case I:
          return e = Un(19, n, t, u), e.elementType = I, e.lanes = f, e;
        default:
          if (typeof e == "object" && e !== null)
            switch (e.$$typeof) {
              case X:
                g = 10;
                break e;
              case Z:
                g = 9;
                break e;
              case P:
                g = 11;
                break e;
              case U:
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
    return t = Un(g, n, t, u), t.elementType = e, t.type = l, t.lanes = f, t;
  }
  function Da(e, t, n, l) {
    return e = Un(7, e, l, t), e.lanes = n, e;
  }
  function sl(e, t, n) {
    return e = Un(6, e, null, t), e.lanes = n, e;
  }
  function Ju(e) {
    var t = Un(18, null, null, 0);
    return t.stateNode = e, t;
  }
  function $r(e, t, n) {
    return t = Un(
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
  var us = /* @__PURE__ */ new WeakMap();
  function fn(e, t) {
    if (typeof e == "object" && e !== null) {
      var n = us.get(e);
      return n !== void 0 ? n : (t = {
        value: e,
        source: t,
        stack: yr(t)
      }, us.set(e, t), t);
    }
    return {
      value: e,
      source: t,
      stack: yr(t)
    };
  }
  var Ka = [], Ja = 0, kr = null, Jl = 0, Fn = [], Qt = 0, Wa = null, ya = 1, ba = "";
  function Na(e, t) {
    Ka[Ja++] = Jl, Ka[Ja++] = kr, kr = e, Jl = t;
  }
  function Wl(e, t, n) {
    Fn[Qt++] = ya, Fn[Qt++] = ba, Fn[Qt++] = Wa, Wa = e;
    var l = ya;
    e = ba;
    var u = 32 - Dn(l) - 1;
    l &= ~(1 << u), n += 1;
    var f = 32 - Dn(t) + u;
    if (30 < f) {
      var g = u - u % 5;
      f = (l & (1 << g) - 1).toString(32), l >>= g, u -= g, ya = 1 << 32 - Dn(t) + u | n << u | l, ba = f + e;
    } else
      ya = 1 << f | n << u | l, ba = e;
  }
  function Pl(e) {
    e.return !== null && (Na(e, 1), Wl(e, 1, 0));
  }
  function cs(e) {
    for (; e === kr; )
      kr = Ka[--Ja], Ka[Ja] = null, Jl = Ka[--Ja], Ka[Ja] = null;
    for (; e === Wa; )
      Wa = Fn[--Qt], Fn[Qt] = null, ba = Fn[--Qt], Fn[Qt] = null, ya = Fn[--Qt], Fn[Qt] = null;
  }
  function fs(e, t) {
    Fn[Qt++] = ya, Fn[Qt++] = ba, Fn[Qt++] = Wa, ya = t.id, ba = t.overflow, Wa = e;
  }
  var an = null, lt = null, Ge = !1, ja = null, Qn = !1, ds = Error(o(519));
  function Pa(e) {
    var t = Error(
      o(
        418,
        1 < arguments.length && arguments[1] !== void 0 && arguments[1] ? "text" : "HTML",
        ""
      )
    );
    throw er(fn(t, e)), ds;
  }
  function ul(e) {
    var t = e.stateNode, n = e.type, l = e.memoizedProps;
    switch (t[Bt] = e, t[Cn] = l, n) {
      case "dialog":
        Ze("cancel", t), Ze("close", t);
        break;
      case "iframe":
      case "object":
      case "embed":
        Ze("load", t);
        break;
      case "video":
      case "audio":
        for (n = 0; n < zs.length; n++)
          Ze(zs[n], t);
        break;
      case "source":
        Ze("error", t);
        break;
      case "img":
      case "image":
      case "link":
        Ze("error", t), Ze("load", t);
        break;
      case "details":
        Ze("toggle", t);
        break;
      case "input":
        Ze("invalid", t), Or(
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
        Ze("invalid", t);
        break;
      case "textarea":
        Ze("invalid", t), ql(t, l.value, l.defaultValue, l.children);
    }
    n = l.children, typeof n != "string" && typeof n != "number" && typeof n != "bigint" || t.textContent === "" + n || l.suppressHydrationWarning === !0 || uv(t.textContent, n) ? (l.popover != null && (Ze("beforetoggle", t), Ze("toggle", t)), l.onScroll != null && Ze("scroll", t), l.onScrollEnd != null && Ze("scrollend", t), l.onClick != null && (t.onclick = sn), t = !0) : t = !1, t || Pa(e, !0);
  }
  function ei(e) {
    for (an = e.return; an; )
      switch (an.tag) {
        case 5:
        case 31:
        case 13:
          Qn = !1;
          return;
        case 27:
        case 3:
          Qn = !0;
          return;
        default:
          an = an.return;
      }
  }
  function cl(e) {
    if (e !== an) return !1;
    if (!Ge) return ei(e), Ge = !0, !1;
    var t = e.tag, n;
    if ((n = t !== 3 && t !== 27) && ((n = t === 5) && (n = e.type, n = !(n !== "form" && n !== "button") || gh(e.type, e.memoizedProps)), n = !n), n && lt && Pa(e), ei(e), t === 13) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      lt = yv(e);
    } else if (t === 31) {
      if (e = e.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(317));
      lt = yv(e);
    } else
      t === 27 ? (t = lt, xl(e.type) ? (e = Sh, Sh = null, lt = e) : lt = t) : lt = an ? Ea(e.stateNode.nextSibling) : null;
    return !0;
  }
  function vi() {
    lt = an = null, Ge = !1;
  }
  function hs() {
    var e = ja;
    return e !== null && (Pn === null ? Pn = e : Pn.push.apply(
      Pn,
      e
    ), ja = null), e;
  }
  function er(e) {
    ja === null ? ja = [e] : ja.push(e);
  }
  var ps = x(null), yi = null, za = null;
  function ti(e, t, n) {
    te(ps, t._currentValue), t._currentValue = n;
  }
  function _a(e) {
    e._currentValue = ps.current, k(ps);
  }
  function ms(e, t, n) {
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
              f.lanes |= n, _ = f.alternate, _ !== null && (_.lanes |= n), ms(
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
        g.lanes |= n, f = g.alternate, f !== null && (f.lanes |= n), ms(g, n, e), g = null;
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
  function ni(e, t, n, l) {
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
          yn(u.pendingProps.value, g.value) || (e !== null ? e.push(_) : e = [_]);
        }
      } else if (u === de.current) {
        if (g = u.alternate, g === null) throw Error(o(387));
        g.memoizedState.memoizedState !== u.memoizedState.memoizedState && (e !== null ? e.push(Bs) : e = [Bs]);
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
  function tr(e) {
    for (e = e.firstContext; e !== null; ) {
      if (!yn(
        e.context._currentValue,
        e.memoizedValue
      ))
        return !0;
      e = e.next;
    }
    return !1;
  }
  function Bn(e) {
    yi = e, za = null, e = e.dependencies, e !== null && (e.firstContext = null);
  }
  function Zt(e) {
    return gs(yi, e);
  }
  function fl(e, t) {
    return yi === null && Bn(e), gs(e, t);
  }
  function gs(e, t) {
    var n = t._currentValue;
    if (t = { context: t, memoizedValue: n, next: null }, za === null) {
      if (e === null) throw Error(o(308));
      za = t, e.dependencies = { lanes: 0, firstContext: t }, e.flags |= 524288;
    } else za = za.next = t;
    return n;
  }
  var vs = typeof AbortController < "u" ? AbortController : function() {
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
  }, Wu = a.unstable_scheduleCallback, ys = a.unstable_NormalPriority, kt = {
    $$typeof: X,
    Consumer: null,
    Provider: null,
    _currentValue: null,
    _currentValue2: null,
    _threadCount: 0
  };
  function La() {
    return {
      controller: new vs(),
      data: /* @__PURE__ */ new Map(),
      refCount: 0
    };
  }
  function Zn(e) {
    e.refCount--, e.refCount === 0 && Wu(ys, function() {
      e.controller.abort();
    });
  }
  var nr = null, bs = 0, dl = 0, hl = null;
  function yd(e, t) {
    if (nr === null) {
      var n = nr = [];
      bs = 0, dl = oh(), hl = {
        status: "pending",
        value: void 0,
        then: function(l) {
          n.push(l);
        }
      };
    }
    return bs++, t.then(Pu, Pu), t;
  }
  function Pu() {
    if (--bs === 0 && nr !== null) {
      hl !== null && (hl.status = "fulfilled");
      var e = nr;
      nr = null, dl = 0, hl = null;
      for (var t = 0; t < e.length; t++) (0, e[t])();
    }
  }
  function bd(e, t) {
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
  var ec = $.S;
  $.S = function(e, t) {
    jg = rn(), typeof t == "object" && t !== null && typeof t.then == "function" && yd(e, t), ec !== null && ec(e, t);
  };
  var ai = x(null);
  function pl() {
    var e = ai.current;
    return e !== null ? e : xt.pooledCache;
  }
  function bi(e, t) {
    t === null ? te(ai, ai.current) : te(ai, t.pool);
  }
  function tc() {
    var e = pl();
    return e === null ? null : { parent: kt._currentValue, pool: e };
  }
  var ml = Error(o(460)), _i = Error(o(474)), b = Error(o(542)), c = { then: function() {
  } };
  function p(e) {
    return e = e.status, e === "fulfilled" || e === "rejected";
  }
  function C(e, t, n) {
    switch (n = e[n], n === void 0 ? e.push(t) : n !== t && (t.then(sn, sn), t = n), t.status) {
      case "fulfilled":
        return t.value;
      case "rejected":
        throw e = t.reason, ee(e), e;
      default:
        if (typeof t.status == "string") t.then(sn, sn);
        else {
          if (e = xt, e !== null && 100 < e.shellSuspendCounter)
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
            throw e = t.reason, ee(e), e;
        }
        throw j = t, ml;
    }
  }
  function R(e) {
    try {
      var t = e._init;
      return t(e._payload);
    } catch (n) {
      throw n !== null && typeof n == "object" && typeof n.then == "function" ? (j = n, ml) : n;
    }
  }
  var j = null;
  function Q() {
    if (j === null) throw Error(o(459));
    var e = j;
    return j = null, e;
  }
  function ee(e) {
    if (e === ml || e === b)
      throw Error(o(483));
  }
  var re = null, ce = 0;
  function he(e) {
    var t = ce;
    return ce += 1, re === null && (re = []), C(re, e, t);
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
  function xe(e) {
    function t(H, M) {
      if (e) {
        var q = H.deletions;
        q === null ? (H.deletions = [M], H.flags |= 16) : q.push(M);
      }
    }
    function n(H, M) {
      if (!e) return null;
      for (; M !== null; )
        t(H, M), M = M.sibling;
      return null;
    }
    function l(H) {
      for (var M = /* @__PURE__ */ new Map(); H !== null; )
        H.key !== null ? M.set(H.key, H) : M.set(H.index, H), H = H.sibling;
      return M;
    }
    function u(H, M) {
      return H = Ra(H, M), H.index = 0, H.sibling = null, H;
    }
    function f(H, M, q) {
      return H.index = q, e ? (q = H.alternate, q !== null ? (q = q.index, q < M ? (H.flags |= 67108866, M) : q) : (H.flags |= 67108866, M)) : (H.flags |= 1048576, M);
    }
    function g(H) {
      return e && H.alternate === null && (H.flags |= 67108866), H;
    }
    function _(H, M, q, J) {
      return M === null || M.tag !== 6 ? (M = sl(q, H.mode, J), M.return = H, M) : (M = u(M, q), M.return = H, M);
    }
    function w(H, M, q, J) {
      var be = q.type;
      return be === L ? K(
        H,
        M,
        q.props.children,
        J,
        q.key
      ) : M !== null && (M.elementType === be || typeof be == "object" && be !== null && be.$$typeof === oe && R(be) === M.type) ? (M = u(M, q.props), se(M, q), M.return = H, M) : (M = Br(
        q.type,
        q.key,
        q.props,
        null,
        H.mode,
        J
      ), se(M, q), M.return = H, M);
    }
    function Y(H, M, q, J) {
      return M === null || M.tag !== 4 || M.stateNode.containerInfo !== q.containerInfo || M.stateNode.implementation !== q.implementation ? (M = $r(q, H.mode, J), M.return = H, M) : (M = u(M, q.children || []), M.return = H, M);
    }
    function K(H, M, q, J, be) {
      return M === null || M.tag !== 7 ? (M = Da(
        q,
        H.mode,
        J,
        be
      ), M.return = H, M) : (M = u(M, q), M.return = H, M);
    }
    function W(H, M, q) {
      if (typeof M == "string" && M !== "" || typeof M == "number" || typeof M == "bigint")
        return M = sl(
          "" + M,
          H.mode,
          q
        ), M.return = H, M;
      if (typeof M == "object" && M !== null) {
        switch (M.$$typeof) {
          case D:
            return q = Br(
              M.type,
              M.key,
              M.props,
              null,
              H.mode,
              q
            ), se(q, M), q.return = H, q;
          case N:
            return M = $r(
              M,
              H.mode,
              q
            ), M.return = H, M;
          case oe:
            return M = R(M), W(H, M, q);
        }
        if ($e(M) || He(M))
          return M = Da(
            M,
            H.mode,
            q,
            null
          ), M.return = H, M;
        if (typeof M.then == "function")
          return W(H, he(M), q);
        if (M.$$typeof === X)
          return W(
            H,
            fl(H, M),
            q
          );
        De(H, M);
      }
      return null;
    }
    function G(H, M, q, J) {
      var be = M !== null ? M.key : null;
      if (typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint")
        return be !== null ? null : _(H, M, "" + q, J);
      if (typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case D:
            return q.key === be ? w(H, M, q, J) : null;
          case N:
            return q.key === be ? Y(H, M, q, J) : null;
          case oe:
            return q = R(q), G(H, M, q, J);
        }
        if ($e(q) || He(q))
          return be !== null ? null : K(H, M, q, J, null);
        if (typeof q.then == "function")
          return G(
            H,
            M,
            he(q),
            J
          );
        if (q.$$typeof === X)
          return G(
            H,
            M,
            fl(H, q),
            J
          );
        De(H, q);
      }
      return null;
    }
    function F(H, M, q, J, be) {
      if (typeof J == "string" && J !== "" || typeof J == "number" || typeof J == "bigint")
        return H = H.get(q) || null, _(M, H, "" + J, be);
      if (typeof J == "object" && J !== null) {
        switch (J.$$typeof) {
          case D:
            return H = H.get(
              J.key === null ? q : J.key
            ) || null, w(M, H, J, be);
          case N:
            return H = H.get(
              J.key === null ? q : J.key
            ) || null, Y(M, H, J, be);
          case oe:
            return J = R(J), F(
              H,
              M,
              q,
              J,
              be
            );
        }
        if ($e(J) || He(J))
          return H = H.get(q) || null, K(M, H, J, be, null);
        if (typeof J.then == "function")
          return F(
            H,
            M,
            q,
            he(J),
            be
          );
        if (J.$$typeof === X)
          return F(
            H,
            M,
            q,
            fl(M, J),
            be
          );
        De(M, J);
      }
      return null;
    }
    function pe(H, M, q, J) {
      for (var be = null, ot = null, me = M, ke = M = 0, We = null; me !== null && ke < q.length; ke++) {
        me.index > ke ? (We = me, me = null) : We = me.sibling;
        var st = G(
          H,
          me,
          q[ke],
          J
        );
        if (st === null) {
          me === null && (me = We);
          break;
        }
        e && me && st.alternate === null && t(H, me), M = f(st, M, ke), ot === null ? be = st : ot.sibling = st, ot = st, me = We;
      }
      if (ke === q.length)
        return n(H, me), Ge && Na(H, ke), be;
      if (me === null) {
        for (; ke < q.length; ke++)
          me = W(H, q[ke], J), me !== null && (M = f(
            me,
            M,
            ke
          ), ot === null ? be = me : ot.sibling = me, ot = me);
        return Ge && Na(H, ke), be;
      }
      for (me = l(me); ke < q.length; ke++)
        We = F(
          me,
          H,
          ke,
          q[ke],
          J
        ), We !== null && (e && We.alternate !== null && me.delete(
          We.key === null ? ke : We.key
        ), M = f(
          We,
          M,
          ke
        ), ot === null ? be = We : ot.sibling = We, ot = We);
      return e && me.forEach(function(Ml) {
        return t(H, Ml);
      }), Ge && Na(H, ke), be;
    }
    function Te(H, M, q, J) {
      if (q == null) throw Error(o(151));
      for (var be = null, ot = null, me = M, ke = M = 0, We = null, st = q.next(); me !== null && !st.done; ke++, st = q.next()) {
        me.index > ke ? (We = me, me = null) : We = me.sibling;
        var Ml = G(H, me, st.value, J);
        if (Ml === null) {
          me === null && (me = We);
          break;
        }
        e && me && Ml.alternate === null && t(H, me), M = f(Ml, M, ke), ot === null ? be = Ml : ot.sibling = Ml, ot = Ml, me = We;
      }
      if (st.done)
        return n(H, me), Ge && Na(H, ke), be;
      if (me === null) {
        for (; !st.done; ke++, st = q.next())
          st = W(H, st.value, J), st !== null && (M = f(st, M, ke), ot === null ? be = st : ot.sibling = st, ot = st);
        return Ge && Na(H, ke), be;
      }
      for (me = l(me); !st.done; ke++, st = q.next())
        st = F(me, H, ke, st.value, J), st !== null && (e && st.alternate !== null && me.delete(st.key === null ? ke : st.key), M = f(st, M, ke), ot === null ? be = st : ot.sibling = st, ot = st);
      return e && me.forEach(function(q_) {
        return t(H, q_);
      }), Ge && Na(H, ke), be;
    }
    function Et(H, M, q, J) {
      if (typeof q == "object" && q !== null && q.type === L && q.key === null && (q = q.props.children), typeof q == "object" && q !== null) {
        switch (q.$$typeof) {
          case D:
            e: {
              for (var be = q.key; M !== null; ) {
                if (M.key === be) {
                  if (be = q.type, be === L) {
                    if (M.tag === 7) {
                      n(
                        H,
                        M.sibling
                      ), J = u(
                        M,
                        q.props.children
                      ), J.return = H, H = J;
                      break e;
                    }
                  } else if (M.elementType === be || typeof be == "object" && be !== null && be.$$typeof === oe && R(be) === M.type) {
                    n(
                      H,
                      M.sibling
                    ), J = u(M, q.props), se(J, q), J.return = H, H = J;
                    break e;
                  }
                  n(H, M);
                  break;
                } else t(H, M);
                M = M.sibling;
              }
              q.type === L ? (J = Da(
                q.props.children,
                H.mode,
                J,
                q.key
              ), J.return = H, H = J) : (J = Br(
                q.type,
                q.key,
                q.props,
                null,
                H.mode,
                J
              ), se(J, q), J.return = H, H = J);
            }
            return g(H);
          case N:
            e: {
              for (be = q.key; M !== null; ) {
                if (M.key === be)
                  if (M.tag === 4 && M.stateNode.containerInfo === q.containerInfo && M.stateNode.implementation === q.implementation) {
                    n(
                      H,
                      M.sibling
                    ), J = u(M, q.children || []), J.return = H, H = J;
                    break e;
                  } else {
                    n(H, M);
                    break;
                  }
                else t(H, M);
                M = M.sibling;
              }
              J = $r(q, H.mode, J), J.return = H, H = J;
            }
            return g(H);
          case oe:
            return q = R(q), Et(
              H,
              M,
              q,
              J
            );
        }
        if ($e(q))
          return pe(
            H,
            M,
            q,
            J
          );
        if (He(q)) {
          if (be = He(q), typeof be != "function") throw Error(o(150));
          return q = be.call(q), Te(
            H,
            M,
            q,
            J
          );
        }
        if (typeof q.then == "function")
          return Et(
            H,
            M,
            he(q),
            J
          );
        if (q.$$typeof === X)
          return Et(
            H,
            M,
            fl(H, q),
            J
          );
        De(H, q);
      }
      return typeof q == "string" && q !== "" || typeof q == "number" || typeof q == "bigint" ? (q = "" + q, M !== null && M.tag === 6 ? (n(H, M.sibling), J = u(M, q), J.return = H, H = J) : (n(H, M), J = sl(q, H.mode, J), J.return = H, H = J), g(H)) : n(H, M);
    }
    return function(H, M, q, J) {
      try {
        ce = 0;
        var be = Et(
          H,
          M,
          q,
          J
        );
        return re = null, be;
      } catch (me) {
        if (me === ml || me === b) throw me;
        var ot = Un(29, me, null, H.mode);
        return ot.lanes = J, ot.return = H, ot;
      } finally {
      }
    };
  }
  var Oe = xe(!0), Me = xe(!1), Se = !1;
  function rt(e) {
    e.updateQueue = {
      baseState: e.memoizedState,
      firstBaseUpdate: null,
      lastBaseUpdate: null,
      shared: { pending: null, lanes: 0, hiddenCallbacks: null },
      callbacks: null
    };
  }
  function ht(e, t) {
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
  function qe(e, t, n) {
    var l = e.updateQueue;
    if (l === null) return null;
    if (l = l.shared, (ut & 2) !== 0) {
      var u = l.pending;
      return u === null ? t.next = t : (t.next = u.next, u.next = t), l.pending = t, t = Ur(e), os(e, null, n), t;
    }
    return Vr(e, l, t, n), Ur(e);
  }
  function Ne(e, t, n) {
    if (t = t.updateQueue, t !== null && (t = t.shared, (n & 4194048) !== 0)) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, hu(e, n);
    }
  }
  function Xe(e, t) {
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
  var nt = !1;
  function tt() {
    if (nt) {
      var e = hl;
      if (e !== null) throw e;
    }
  }
  function Pe(e, t, n, l) {
    nt = !1;
    var u = e.updateQueue;
    Se = !1;
    var f = u.firstBaseUpdate, g = u.lastBaseUpdate, _ = u.shared.pending;
    if (_ !== null) {
      u.shared.pending = null;
      var w = _, Y = w.next;
      w.next = null, g === null ? f = Y : g.next = Y, g = w;
      var K = e.alternate;
      K !== null && (K = K.updateQueue, _ = K.lastBaseUpdate, _ !== g && (_ === null ? K.firstBaseUpdate = Y : _.next = Y, K.lastBaseUpdate = w));
    }
    if (f !== null) {
      var W = u.baseState;
      g = 0, K = Y = w = null, _ = f;
      do {
        var G = _.lane & -536870913, F = G !== _.lane;
        if (F ? (Je & G) === G : (l & G) === G) {
          G !== 0 && G === dl && (nt = !0), K !== null && (K = K.next = {
            lane: 0,
            tag: _.tag,
            payload: _.payload,
            callback: null,
            next: null
          });
          e: {
            var pe = e, Te = _;
            G = t;
            var Et = n;
            switch (Te.tag) {
              case 1:
                if (pe = Te.payload, typeof pe == "function") {
                  W = pe.call(Et, W, G);
                  break e;
                }
                W = pe;
                break e;
              case 3:
                pe.flags = pe.flags & -65537 | 128;
              case 0:
                if (pe = Te.payload, G = typeof pe == "function" ? pe.call(Et, W, G) : pe, G == null) break e;
                W = O({}, W, G);
                break e;
              case 2:
                Se = !0;
            }
          }
          G = _.callback, G !== null && (e.flags |= 64, F && (e.flags |= 8192), F = u.callbacks, F === null ? u.callbacks = [G] : F.push(G));
        } else
          F = {
            lane: G,
            tag: _.tag,
            payload: _.payload,
            callback: _.callback,
            next: null
          }, K === null ? (Y = K = F, w = W) : K = K.next = F, g |= G;
        if (_ = _.next, _ === null) {
          if (_ = u.shared.pending, _ === null)
            break;
          F = _, _ = F.next, F.next = null, u.lastBaseUpdate = F, u.shared.pending = null;
        }
      } while (!0);
      K === null && (w = W), u.baseState = w, u.firstBaseUpdate = Y, u.lastBaseUpdate = K, f === null && (u.shared.lanes = 0), bl |= g, e.lanes = g, e.memoizedState = W;
    }
  }
  function Dt(e, t) {
    if (typeof e != "function")
      throw Error(o(191, e));
    e.call(t);
  }
  function Tn(e, t) {
    var n = e.callbacks;
    if (n !== null)
      for (e.callbacks = null, e = 0; e < n.length; e++)
        Dt(n[e], t);
  }
  var dn = x(null), Kt = x(0);
  function $n(e, t) {
    e = Di, te(Kt, e), te(dn, t), Di = e | t.baseLanes;
  }
  function An() {
    te(Kt, Di), te(dn, dn.current);
  }
  function Ot() {
    Di = Kt.current, k(dn), k(Kt);
  }
  var Nt = x(null), Vt = null;
  function kn(e) {
    var t = e.alternate;
    te(mt, mt.current & 1), te(Nt, e), Vt === null && (t === null || dn.current !== null || t.memoizedState !== null) && (Vt = e);
  }
  function qt(e) {
    te(mt, mt.current), te(Nt, e), Vt === null && (Vt = e);
  }
  function pt(e) {
    e.tag === 22 ? (te(mt, mt.current), te(Nt, e), Vt === null && (Vt = e)) : jt();
  }
  function jt() {
    te(mt, mt.current), te(Nt, Nt.current);
  }
  function Tt(e) {
    k(Nt), Vt === e && (Vt = null), k(mt);
  }
  var mt = x(0);
  function Si(e) {
    for (var t = e; t !== null; ) {
      if (t.tag === 13) {
        var n = t.memoizedState;
        if (n !== null && (n = n.dehydrated, n === null || bh(n) || _h(n)))
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
  var Sa = 0, je = null, at = null, Yt = null, Yr = !1, ii = !1, Ei = !1, ar = 0, ir = 0, Ci = null, nc = 0;
  function zt() {
    throw Error(o(321));
  }
  function _s(e, t) {
    if (t === null) return !1;
    for (var n = 0; n < t.length && n < e.length; n++)
      if (!yn(e[n], t[n])) return !1;
    return !0;
  }
  function Ha(e, t, n, l, u, f) {
    return Sa = f, je = t, t.memoizedState = null, t.updateQueue = null, t.lanes = 0, $.H = e === null || e.memoizedState === null ? Gm : Rd, Ei = !1, f = n(l, u), Ei = !1, ii && (f = Ss(
      t,
      n,
      l,
      u
    )), lr(e), f;
  }
  function lr(e) {
    $.H = Cs;
    var t = at !== null && at.next !== null;
    if (Sa = 0, Yt = at = je = null, Yr = !1, ir = 0, Ci = null, t) throw Error(o(300));
    e === null || Jt || (e = e.dependencies, e !== null && tr(e) && (Jt = !0));
  }
  function Ss(e, t, n, l) {
    je = e;
    var u = 0;
    do {
      if (ii && (Ci = null), ir = 0, ii = !1, 25 <= u) throw Error(o(301));
      if (u += 1, Yt = at = null, e.updateQueue != null) {
        var f = e.updateQueue;
        f.lastEffect = null, f.events = null, f.stores = null, f.memoCache != null && (f.memoCache.index = 0);
      }
      $.H = Xm, f = t(n, l);
    } while (ii);
    return f;
  }
  function ac() {
    var e = $.H, t = e.useState()[0];
    return t = typeof t.then == "function" ? or(t) : t, e = e.useState()[0], (at !== null ? at.memoizedState : null) !== e && (je.flags |= 1024), t;
  }
  function rr() {
    var e = ar !== 0;
    return ar = 0, e;
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
    Sa = 0, Yt = at = je = null, ii = !1, ir = ar = 0, Ci = null;
  }
  function hn() {
    var e = {
      memoizedState: null,
      baseState: null,
      baseQueue: null,
      queue: null,
      next: null
    };
    return Yt === null ? je.memoizedState = Yt = e : Yt = Yt.next = e, Yt;
  }
  function Lt() {
    if (at === null) {
      var e = je.alternate;
      e = e !== null ? e.memoizedState : null;
    } else e = at.next;
    var t = Yt === null ? je.memoizedState : Yt.next;
    if (t !== null)
      Yt = t, at = e;
    else {
      if (e === null)
        throw je.alternate === null ? Error(o(467)) : Error(o(310));
      at = e, e = {
        memoizedState: at.memoizedState,
        baseState: at.baseState,
        baseQueue: at.baseQueue,
        queue: at.queue,
        next: null
      }, Yt === null ? je.memoizedState = Yt = e : Yt = Yt.next = e;
    }
    return Yt;
  }
  function Ir() {
    return { lastEffect: null, events: null, stores: null, memoCache: null };
  }
  function or(e) {
    var t = ir;
    return ir += 1, Ci === null && (Ci = []), e = C(Ci, e, t), t = je, (Yt === null ? t.memoizedState : Yt.next) === null && (t = t.alternate, $.H = t === null || t.memoizedState === null ? Gm : Rd), e;
  }
  function gl(e) {
    if (e !== null && typeof e == "object") {
      if (typeof e.then == "function") return or(e);
      if (e.$$typeof === X) return Zt(e);
    }
    throw Error(o(438, String(e)));
  }
  function Fr(e) {
    var t = null, n = je.updateQueue;
    if (n !== null && (t = n.memoCache), t == null) {
      var l = je.alternate;
      l !== null && (l = l.updateQueue, l !== null && (l = l.memoCache, l != null && (t = {
        data: l.data.map(function(u) {
          return u.slice();
        }),
        index: 0
      })));
    }
    if (t == null && (t = { data: [], index: 0 }), n === null && (n = Ir(), je.updateQueue = n), n.memoCache = t, n = t.data[t.index], n === void 0)
      for (n = t.data[t.index] = Array(e), l = 0; l < e; l++)
        n[l] = Fe;
    return t.index++, n;
  }
  function xi(e, t) {
    return typeof t == "function" ? t(e) : t;
  }
  function ic(e) {
    var t = Lt();
    return _d(t, at, e);
  }
  function _d(e, t, n) {
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
      var _ = g = null, w = null, Y = t, K = !1;
      do {
        var W = Y.lane & -536870913;
        if (W !== Y.lane ? (Je & W) === W : (Sa & W) === W) {
          var G = Y.revertLane;
          if (G === 0)
            w !== null && (w = w.next = {
              lane: 0,
              revertLane: 0,
              gesture: null,
              action: Y.action,
              hasEagerState: Y.hasEagerState,
              eagerState: Y.eagerState,
              next: null
            }), W === dl && (K = !0);
          else if ((Sa & G) === G) {
            Y = Y.next, G === dl && (K = !0);
            continue;
          } else
            W = {
              lane: 0,
              revertLane: Y.revertLane,
              gesture: null,
              action: Y.action,
              hasEagerState: Y.hasEagerState,
              eagerState: Y.eagerState,
              next: null
            }, w === null ? (_ = w = W, g = f) : w = w.next = W, je.lanes |= G, bl |= G;
          W = Y.action, Ei && n(f, W), f = Y.hasEagerState ? Y.eagerState : n(f, W);
        } else
          G = {
            lane: W,
            revertLane: Y.revertLane,
            gesture: Y.gesture,
            action: Y.action,
            hasEagerState: Y.hasEagerState,
            eagerState: Y.eagerState,
            next: null
          }, w === null ? (_ = w = G, g = f) : w = w.next = G, je.lanes |= W, bl |= W;
        Y = Y.next;
      } while (Y !== null && Y !== t);
      if (w === null ? g = f : w.next = _, !yn(f, e.memoizedState) && (Jt = !0, K && (n = hl, n !== null)))
        throw n;
      e.memoizedState = f, e.baseState = g, e.baseQueue = w, l.lastRenderedState = f;
    }
    return u === null && (l.lanes = 0), [e.memoizedState, l.dispatch];
  }
  function Sd(e) {
    var t = Lt(), n = t.queue;
    if (n === null) throw Error(o(311));
    n.lastRenderedReducer = e;
    var l = n.dispatch, u = n.pending, f = t.memoizedState;
    if (u !== null) {
      n.pending = null;
      var g = u = u.next;
      do
        f = e(f, g.action), g = g.next;
      while (g !== u);
      yn(f, t.memoizedState) || (Jt = !0), t.memoizedState = f, t.baseQueue === null && (t.baseState = f), n.lastRenderedState = f;
    }
    return [f, l];
  }
  function cm(e, t, n) {
    var l = je, u = Lt(), f = Ge;
    if (f) {
      if (n === void 0) throw Error(o(407));
      n = n();
    } else n = t();
    var g = !yn(
      (at || u).memoizedState,
      n
    );
    if (g && (u.memoizedState = n, Jt = !0), u = u.queue, xd(hm.bind(null, l, u, e), [
      e
    ]), u.getSnapshot !== t || g || Yt !== null && Yt.memoizedState.tag & 1) {
      if (l.flags |= 2048, Qr(
        9,
        { destroy: void 0 },
        dm.bind(
          null,
          l,
          u,
          n,
          t
        ),
        null
      ), xt === null) throw Error(o(349));
      f || (Sa & 127) !== 0 || fm(l, t, n);
    }
    return n;
  }
  function fm(e, t, n) {
    e.flags |= 16384, e = { getSnapshot: t, value: n }, t = je.updateQueue, t === null ? (t = Ir(), je.updateQueue = t, t.stores = [e]) : (n = t.stores, n === null ? t.stores = [e] : n.push(e));
  }
  function dm(e, t, n, l) {
    t.value = n, t.getSnapshot = l, pm(t) && mm(e);
  }
  function hm(e, t, n) {
    return n(function() {
      pm(t) && mm(e);
    });
  }
  function pm(e) {
    var t = e.getSnapshot;
    e = e.value;
    try {
      var n = t();
      return !yn(e, n);
    } catch {
      return !0;
    }
  }
  function mm(e) {
    var t = bn(e, 2);
    t !== null && ea(t, e, 2);
  }
  function Ed(e) {
    var t = hn();
    if (typeof e == "function") {
      var n = e;
      if (e = n(), Ei) {
        fa(!0);
        try {
          n();
        } finally {
          fa(!1);
        }
      }
    }
    return t.memoizedState = t.baseState = e, t.queue = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: xi,
      lastRenderedState: e
    }, t;
  }
  function gm(e, t, n, l) {
    return e.baseState = n, _d(
      e,
      at,
      typeof l == "function" ? l : xi
    );
  }
  function z1(e, t, n, l, u) {
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
      $.T !== null ? n(!0) : f.isTransition = !1, l(f), n = t.pending, n === null ? (f.next = t.pending = f, vm(t, f)) : (f.next = n.next, t.pending = n.next = f);
    }
  }
  function vm(e, t) {
    var n = t.action, l = t.payload, u = e.state;
    if (t.isTransition) {
      var f = $.T, g = {};
      $.T = g;
      try {
        var _ = n(u, l), w = $.S;
        w !== null && w(g, _), ym(e, t, _);
      } catch (Y) {
        Cd(e, t, Y);
      } finally {
        f !== null && g.types !== null && (f.types = g.types), $.T = f;
      }
    } else
      try {
        f = n(u, l), ym(e, t, f);
      } catch (Y) {
        Cd(e, t, Y);
      }
  }
  function ym(e, t, n) {
    n !== null && typeof n == "object" && typeof n.then == "function" ? n.then(
      function(l) {
        bm(e, t, l);
      },
      function(l) {
        return Cd(e, t, l);
      }
    ) : bm(e, t, n);
  }
  function bm(e, t, n) {
    t.status = "fulfilled", t.value = n, _m(t), e.state = n, t = e.pending, t !== null && (n = t.next, n === t ? e.pending = null : (n = n.next, t.next = n, vm(e, n)));
  }
  function Cd(e, t, n) {
    var l = e.pending;
    if (e.pending = null, l !== null) {
      l = l.next;
      do
        t.status = "rejected", t.reason = n, _m(t), t = t.next;
      while (t !== l);
    }
    e.action = null;
  }
  function _m(e) {
    e = e.listeners;
    for (var t = 0; t < e.length; t++) (0, e[t])();
  }
  function Sm(e, t) {
    return t;
  }
  function Em(e, t) {
    if (Ge) {
      var n = xt.formState;
      if (n !== null) {
        e: {
          var l = je;
          if (Ge) {
            if (lt) {
              t: {
                for (var u = lt, f = Qn; u.nodeType !== 8; ) {
                  if (!f) {
                    u = null;
                    break t;
                  }
                  if (u = Ea(
                    u.nextSibling
                  ), u === null) {
                    u = null;
                    break t;
                  }
                }
                f = u.data, u = f === "F!" || f === "F" ? u : null;
              }
              if (u) {
                lt = Ea(
                  u.nextSibling
                ), l = u.data === "F!";
                break e;
              }
            }
            Pa(l);
          }
          l = !1;
        }
        l && (t = n[0]);
      }
    }
    return n = hn(), n.memoizedState = n.baseState = t, l = {
      pending: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: Sm,
      lastRenderedState: t
    }, n.queue = l, n = km.bind(
      null,
      je,
      l
    ), l.dispatch = n, l = Ed(!1), f = Md.bind(
      null,
      je,
      !1,
      l.queue
    ), l = hn(), u = {
      state: t,
      dispatch: null,
      action: e,
      pending: null
    }, l.queue = u, n = z1.bind(
      null,
      je,
      u,
      f,
      n
    ), u.dispatch = n, l.memoizedState = e, [t, n, !1];
  }
  function Cm(e) {
    var t = Lt();
    return xm(t, at, e);
  }
  function xm(e, t, n) {
    if (t = _d(
      e,
      t,
      Sm
    )[0], e = ic(xi)[0], typeof t == "object" && t !== null && typeof t.then == "function")
      try {
        var l = or(t);
      } catch (g) {
        throw g === ml ? b : g;
      }
    else l = t;
    t = Lt();
    var u = t.queue, f = u.dispatch;
    return n !== t.memoizedState && (je.flags |= 2048, Qr(
      9,
      { destroy: void 0 },
      L1.bind(null, u, n),
      null
    )), [l, f, e];
  }
  function L1(e, t) {
    e.action = t;
  }
  function Om(e) {
    var t = Lt(), n = at;
    if (n !== null)
      return xm(t, n, e);
    Lt(), t = t.memoizedState, n = Lt();
    var l = n.queue.dispatch;
    return n.memoizedState = e, [t, l, !1];
  }
  function Qr(e, t, n, l) {
    return e = { tag: e, create: n, deps: l, inst: t, next: null }, t = je.updateQueue, t === null && (t = Ir(), je.updateQueue = t), n = t.lastEffect, n === null ? t.lastEffect = e.next = e : (l = n.next, n.next = e, e.next = l, t.lastEffect = e), e;
  }
  function Tm() {
    return Lt().memoizedState;
  }
  function lc(e, t, n, l) {
    var u = hn();
    je.flags |= e, u.memoizedState = Qr(
      1 | t,
      { destroy: void 0 },
      n,
      l === void 0 ? null : l
    );
  }
  function rc(e, t, n, l) {
    var u = Lt();
    l = l === void 0 ? null : l;
    var f = u.memoizedState.inst;
    at !== null && l !== null && _s(l, at.memoizedState.deps) ? u.memoizedState = Qr(t, f, n, l) : (je.flags |= e, u.memoizedState = Qr(
      1 | t,
      f,
      n,
      l
    ));
  }
  function Am(e, t) {
    lc(8390656, 8, e, t);
  }
  function xd(e, t) {
    rc(2048, 8, e, t);
  }
  function H1(e) {
    je.flags |= 4;
    var t = je.updateQueue;
    if (t === null)
      t = Ir(), je.updateQueue = t, t.events = [e];
    else {
      var n = t.events;
      n === null ? t.events = [e] : n.push(e);
    }
  }
  function wm(e) {
    var t = Lt().memoizedState;
    return H1({ ref: t, nextImpl: e }), function() {
      if ((ut & 2) !== 0) throw Error(o(440));
      return t.impl.apply(void 0, arguments);
    };
  }
  function Mm(e, t) {
    return rc(4, 2, e, t);
  }
  function Rm(e, t) {
    return rc(4, 4, e, t);
  }
  function Dm(e, t) {
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
  function Nm(e, t, n) {
    n = n != null ? n.concat([e]) : null, rc(4, 4, Dm.bind(null, t, e), n);
  }
  function Od() {
  }
  function jm(e, t) {
    var n = Lt();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    return t !== null && _s(t, l[1]) ? l[0] : (n.memoizedState = [e, t], e);
  }
  function zm(e, t) {
    var n = Lt();
    t = t === void 0 ? null : t;
    var l = n.memoizedState;
    if (t !== null && _s(t, l[1]))
      return l[0];
    if (l = e(), Ei) {
      fa(!0);
      try {
        e();
      } finally {
        fa(!1);
      }
    }
    return n.memoizedState = [l, t], l;
  }
  function Td(e, t, n) {
    return n === void 0 || (Sa & 1073741824) !== 0 && (Je & 261930) === 0 ? e.memoizedState = t : (e.memoizedState = n, e = Lg(), je.lanes |= e, bl |= e, n);
  }
  function Lm(e, t, n, l) {
    return yn(n, t) ? n : dn.current !== null ? (e = Td(e, n, l), yn(e, t) || (Jt = !0), e) : (Sa & 42) === 0 || (Sa & 1073741824) !== 0 && (Je & 261930) === 0 ? (Jt = !0, e.memoizedState = n) : (e = Lg(), je.lanes |= e, bl |= e, t);
  }
  function Hm(e, t, n, l, u) {
    var f = ne.p;
    ne.p = f !== 0 && 8 > f ? f : 8;
    var g = $.T, _ = {};
    $.T = _, Md(e, !1, t, n);
    try {
      var w = u(), Y = $.S;
      if (Y !== null && Y(_, w), w !== null && typeof w == "object" && typeof w.then == "function") {
        var K = bd(
          w,
          l
        );
        Es(
          e,
          t,
          K,
          sa(e)
        );
      } else
        Es(
          e,
          t,
          l,
          sa(e)
        );
    } catch (W) {
      Es(
        e,
        t,
        { then: function() {
        }, status: "rejected", reason: W },
        sa()
      );
    } finally {
      ne.p = f, g !== null && _.types !== null && (g.types = _.types), $.T = g;
    }
  }
  function V1() {
  }
  function Ad(e, t, n, l) {
    if (e.tag !== 5) throw Error(o(476));
    var u = Vm(e).queue;
    Hm(
      e,
      u,
      t,
      le,
      n === null ? V1 : function() {
        return Um(e), n(l);
      }
    );
  }
  function Vm(e) {
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
        lastRenderedReducer: xi,
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
        lastRenderedReducer: xi,
        lastRenderedState: n
      },
      next: null
    }, e.memoizedState = t, e = e.alternate, e !== null && (e.memoizedState = t), t;
  }
  function Um(e) {
    var t = Vm(e);
    t.next === null && (t = e.alternate.memoizedState), Es(
      e,
      t.next.queue,
      {},
      sa()
    );
  }
  function wd() {
    return Zt(Bs);
  }
  function Bm() {
    return Lt().memoizedState;
  }
  function $m() {
    return Lt().memoizedState;
  }
  function U1(e) {
    for (var t = e.return; t !== null; ) {
      switch (t.tag) {
        case 24:
        case 3:
          var n = sa();
          e = Re(n);
          var l = qe(t, e, n);
          l !== null && (ea(l, t, n), Ne(l, t, n)), t = { cache: La() }, e.payload = t;
          return;
      }
      t = t.return;
    }
  }
  function B1(e, t, n) {
    var l = sa();
    n = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, oc(e) ? qm(t, n) : (n = rs(e, t, n, l), n !== null && (ea(n, e, l), Ym(n, t, l)));
  }
  function km(e, t, n) {
    var l = sa();
    Es(e, t, n, l);
  }
  function Es(e, t, n, l) {
    var u = {
      lane: l,
      revertLane: 0,
      gesture: null,
      action: n,
      hasEagerState: !1,
      eagerState: null,
      next: null
    };
    if (oc(e)) qm(t, u);
    else {
      var f = e.alternate;
      if (e.lanes === 0 && (f === null || f.lanes === 0) && (f = t.lastRenderedReducer, f !== null))
        try {
          var g = t.lastRenderedState, _ = f(g, n);
          if (u.hasEagerState = !0, u.eagerState = _, yn(_, g))
            return Vr(e, t, u, 0), xt === null && Hr(), !1;
        } catch {
        } finally {
        }
      if (n = rs(e, t, u, l), n !== null)
        return ea(n, e, l), Ym(n, t, l), !0;
    }
    return !1;
  }
  function Md(e, t, n, l) {
    if (l = {
      lane: 2,
      revertLane: oh(),
      gesture: null,
      action: l,
      hasEagerState: !1,
      eagerState: null,
      next: null
    }, oc(e)) {
      if (t) throw Error(o(479));
    } else
      t = rs(
        e,
        n,
        l,
        2
      ), t !== null && ea(t, e, 2);
  }
  function oc(e) {
    var t = e.alternate;
    return e === je || t !== null && t === je;
  }
  function qm(e, t) {
    ii = Yr = !0;
    var n = e.pending;
    n === null ? t.next = t : (t.next = n.next, n.next = t), e.pending = t;
  }
  function Ym(e, t, n) {
    if ((n & 4194048) !== 0) {
      var l = t.lanes;
      l &= e.pendingLanes, n |= l, t.lanes = n, hu(e, n);
    }
  }
  var Cs = {
    readContext: Zt,
    use: gl,
    useCallback: zt,
    useContext: zt,
    useEffect: zt,
    useImperativeHandle: zt,
    useLayoutEffect: zt,
    useInsertionEffect: zt,
    useMemo: zt,
    useReducer: zt,
    useRef: zt,
    useState: zt,
    useDebugValue: zt,
    useDeferredValue: zt,
    useTransition: zt,
    useSyncExternalStore: zt,
    useId: zt,
    useHostTransitionStatus: zt,
    useFormState: zt,
    useActionState: zt,
    useOptimistic: zt,
    useMemoCache: zt,
    useCacheRefresh: zt
  };
  Cs.useEffectEvent = zt;
  var Gm = {
    readContext: Zt,
    use: gl,
    useCallback: function(e, t) {
      return hn().memoizedState = [
        e,
        t === void 0 ? null : t
      ], e;
    },
    useContext: Zt,
    useEffect: Am,
    useImperativeHandle: function(e, t, n) {
      n = n != null ? n.concat([e]) : null, lc(
        4194308,
        4,
        Dm.bind(null, t, e),
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
      var n = hn();
      t = t === void 0 ? null : t;
      var l = e();
      if (Ei) {
        fa(!0);
        try {
          e();
        } finally {
          fa(!1);
        }
      }
      return n.memoizedState = [l, t], l;
    },
    useReducer: function(e, t, n) {
      var l = hn();
      if (n !== void 0) {
        var u = n(t);
        if (Ei) {
          fa(!0);
          try {
            n(t);
          } finally {
            fa(!1);
          }
        }
      } else u = t;
      return l.memoizedState = l.baseState = u, e = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: e,
        lastRenderedState: u
      }, l.queue = e, e = e.dispatch = B1.bind(
        null,
        je,
        e
      ), [l.memoizedState, e];
    },
    useRef: function(e) {
      var t = hn();
      return e = { current: e }, t.memoizedState = e;
    },
    useState: function(e) {
      e = Ed(e);
      var t = e.queue, n = km.bind(null, je, t);
      return t.dispatch = n, [e.memoizedState, n];
    },
    useDebugValue: Od,
    useDeferredValue: function(e, t) {
      var n = hn();
      return Td(n, e, t);
    },
    useTransition: function() {
      var e = Ed(!1);
      return e = Hm.bind(
        null,
        je,
        e.queue,
        !0,
        !1
      ), hn().memoizedState = e, [!1, e];
    },
    useSyncExternalStore: function(e, t, n) {
      var l = je, u = hn();
      if (Ge) {
        if (n === void 0)
          throw Error(o(407));
        n = n();
      } else {
        if (n = t(), xt === null)
          throw Error(o(349));
        (Je & 127) !== 0 || fm(l, t, n);
      }
      u.memoizedState = n;
      var f = { value: n, getSnapshot: t };
      return u.queue = f, Am(hm.bind(null, l, f, e), [
        e
      ]), l.flags |= 2048, Qr(
        9,
        { destroy: void 0 },
        dm.bind(
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
      var e = hn(), t = xt.identifierPrefix;
      if (Ge) {
        var n = ba, l = ya;
        n = (l & ~(1 << 32 - Dn(l) - 1)).toString(32) + n, t = "_" + t + "R_" + n, n = ar++, 0 < n && (t += "H" + n.toString(32)), t += "_";
      } else
        n = nc++, t = "_" + t + "r_" + n.toString(32) + "_";
      return e.memoizedState = t;
    },
    useHostTransitionStatus: wd,
    useFormState: Em,
    useActionState: Em,
    useOptimistic: function(e) {
      var t = hn();
      t.memoizedState = t.baseState = e;
      var n = {
        pending: null,
        lanes: 0,
        dispatch: null,
        lastRenderedReducer: null,
        lastRenderedState: null
      };
      return t.queue = n, t = Md.bind(
        null,
        je,
        !0,
        n
      ), n.dispatch = t, [e, t];
    },
    useMemoCache: Fr,
    useCacheRefresh: function() {
      return hn().memoizedState = U1.bind(
        null,
        je
      );
    },
    useEffectEvent: function(e) {
      var t = hn(), n = { impl: e };
      return t.memoizedState = n, function() {
        if ((ut & 2) !== 0)
          throw Error(o(440));
        return n.impl.apply(void 0, arguments);
      };
    }
  }, Rd = {
    readContext: Zt,
    use: gl,
    useCallback: jm,
    useContext: Zt,
    useEffect: xd,
    useImperativeHandle: Nm,
    useInsertionEffect: Mm,
    useLayoutEffect: Rm,
    useMemo: zm,
    useReducer: ic,
    useRef: Tm,
    useState: function() {
      return ic(xi);
    },
    useDebugValue: Od,
    useDeferredValue: function(e, t) {
      var n = Lt();
      return Lm(
        n,
        at.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = ic(xi)[0], t = Lt().memoizedState;
      return [
        typeof e == "boolean" ? e : or(e),
        t
      ];
    },
    useSyncExternalStore: cm,
    useId: Bm,
    useHostTransitionStatus: wd,
    useFormState: Cm,
    useActionState: Cm,
    useOptimistic: function(e, t) {
      var n = Lt();
      return gm(n, at, e, t);
    },
    useMemoCache: Fr,
    useCacheRefresh: $m
  };
  Rd.useEffectEvent = wm;
  var Xm = {
    readContext: Zt,
    use: gl,
    useCallback: jm,
    useContext: Zt,
    useEffect: xd,
    useImperativeHandle: Nm,
    useInsertionEffect: Mm,
    useLayoutEffect: Rm,
    useMemo: zm,
    useReducer: Sd,
    useRef: Tm,
    useState: function() {
      return Sd(xi);
    },
    useDebugValue: Od,
    useDeferredValue: function(e, t) {
      var n = Lt();
      return at === null ? Td(n, e, t) : Lm(
        n,
        at.memoizedState,
        e,
        t
      );
    },
    useTransition: function() {
      var e = Sd(xi)[0], t = Lt().memoizedState;
      return [
        typeof e == "boolean" ? e : or(e),
        t
      ];
    },
    useSyncExternalStore: cm,
    useId: Bm,
    useHostTransitionStatus: wd,
    useFormState: Om,
    useActionState: Om,
    useOptimistic: function(e, t) {
      var n = Lt();
      return at !== null ? gm(n, at, e, t) : (n.baseState = e, [e, n.queue.dispatch]);
    },
    useMemoCache: Fr,
    useCacheRefresh: $m
  };
  Xm.useEffectEvent = wm;
  function Dd(e, t, n, l) {
    t = e.memoizedState, n = n(l, t), n = n == null ? t : O({}, t, n), e.memoizedState = n, e.lanes === 0 && (e.updateQueue.baseState = n);
  }
  var Nd = {
    enqueueSetState: function(e, t, n) {
      e = e._reactInternals;
      var l = sa(), u = Re(l);
      u.payload = t, n != null && (u.callback = n), t = qe(e, u, l), t !== null && (ea(t, e, l), Ne(t, e, l));
    },
    enqueueReplaceState: function(e, t, n) {
      e = e._reactInternals;
      var l = sa(), u = Re(l);
      u.tag = 1, u.payload = t, n != null && (u.callback = n), t = qe(e, u, l), t !== null && (ea(t, e, l), Ne(t, e, l));
    },
    enqueueForceUpdate: function(e, t) {
      e = e._reactInternals;
      var n = sa(), l = Re(n);
      l.tag = 2, t != null && (l.callback = t), t = qe(e, l, n), t !== null && (ea(t, e, n), Ne(t, e, n));
    }
  };
  function Im(e, t, n, l, u, f, g) {
    return e = e.stateNode, typeof e.shouldComponentUpdate == "function" ? e.shouldComponentUpdate(l, f, g) : t.prototype && t.prototype.isPureReactComponent ? !cn(n, l) || !cn(u, f) : !0;
  }
  function Fm(e, t, n, l) {
    e = t.state, typeof t.componentWillReceiveProps == "function" && t.componentWillReceiveProps(n, l), typeof t.UNSAFE_componentWillReceiveProps == "function" && t.UNSAFE_componentWillReceiveProps(n, l), t.state !== e && Nd.enqueueReplaceState(t, t.state, null);
  }
  function sr(e, t) {
    var n = t;
    if ("ref" in t) {
      n = {};
      for (var l in t)
        l !== "ref" && (n[l] = t[l]);
    }
    if (e = e.defaultProps) {
      n === t && (n = O({}, n));
      for (var u in e)
        n[u] === void 0 && (n[u] = e[u]);
    }
    return n;
  }
  function Qm(e) {
    Kl(e);
  }
  function Zm(e) {
    console.error(e);
  }
  function Km(e) {
    Kl(e);
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
  function Jm(e, t, n) {
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
  function jd(e, t, n) {
    return n = Re(n), n.tag = 3, n.payload = { element: null }, n.callback = function() {
      sc(e, t);
    }, n;
  }
  function Wm(e) {
    return e = Re(e), e.tag = 3, e;
  }
  function Pm(e, t, n, l) {
    var u = n.type.getDerivedStateFromError;
    if (typeof u == "function") {
      var f = l.value;
      e.payload = function() {
        return u(f);
      }, e.callback = function() {
        Jm(t, n, l);
      };
    }
    var g = n.stateNode;
    g !== null && typeof g.componentDidCatch == "function" && (e.callback = function() {
      Jm(t, n, l), typeof u != "function" && (_l === null ? _l = /* @__PURE__ */ new Set([this]) : _l.add(this));
      var _ = l.stack;
      this.componentDidCatch(l.value, {
        componentStack: _ !== null ? _ : ""
      });
    });
  }
  function $1(e, t, n, l, u) {
    if (n.flags |= 32768, l !== null && typeof l == "object" && typeof l.then == "function") {
      if (t = n.alternate, t !== null && ni(
        t,
        n,
        u,
        !0
      ), n = Nt.current, n !== null) {
        switch (n.tag) {
          case 31:
          case 13:
            return Vt === null ? _c() : n.alternate === null && Gt === 0 && (Gt = 3), n.flags &= -257, n.flags |= 65536, n.lanes = u, l === c ? n.flags |= 16384 : (t = n.updateQueue, t === null ? n.updateQueue = /* @__PURE__ */ new Set([l]) : t.add(l), ih(e, l, u)), !1;
          case 22:
            return n.flags |= 65536, l === c ? n.flags |= 16384 : (t = n.updateQueue, t === null ? (t = {
              transitions: null,
              markerInstances: null,
              retryQueue: /* @__PURE__ */ new Set([l])
            }, n.updateQueue = t) : (n = t.retryQueue, n === null ? t.retryQueue = /* @__PURE__ */ new Set([l]) : n.add(l)), ih(e, l, u)), !1;
        }
        throw Error(o(435, n.tag));
      }
      return ih(e, l, u), _c(), !1;
    }
    if (Ge)
      return t = Nt.current, t !== null ? ((t.flags & 65536) === 0 && (t.flags |= 256), t.flags |= 65536, t.lanes = u, l !== ds && (e = Error(o(422), { cause: l }), er(fn(e, n)))) : (l !== ds && (t = Error(o(423), {
        cause: l
      }), er(
        fn(t, n)
      )), e = e.current.alternate, e.flags |= 65536, u &= -u, e.lanes |= u, l = fn(l, n), u = jd(
        e.stateNode,
        l,
        u
      ), Xe(e, u), Gt !== 4 && (Gt = 2)), !1;
    var f = Error(o(520), { cause: l });
    if (f = fn(f, n), Ds === null ? Ds = [f] : Ds.push(f), Gt !== 4 && (Gt = 2), t === null) return !0;
    l = fn(l, n), n = t;
    do {
      switch (n.tag) {
        case 3:
          return n.flags |= 65536, e = u & -u, n.lanes |= e, e = jd(n.stateNode, l, e), Xe(n, e), !1;
        case 1:
          if (t = n.type, f = n.stateNode, (n.flags & 128) === 0 && (typeof t.getDerivedStateFromError == "function" || f !== null && typeof f.componentDidCatch == "function" && (_l === null || !_l.has(f))))
            return n.flags |= 65536, u &= -u, n.lanes |= u, u = Wm(u), Pm(
              u,
              e,
              n,
              l
            ), Xe(n, u), !1;
      }
      n = n.return;
    } while (n !== null);
    return !1;
  }
  var zd = Error(o(461)), Jt = !1;
  function _n(e, t, n, l) {
    t.child = e === null ? Me(t, null, n, l) : Oe(
      t,
      e.child,
      n,
      l
    );
  }
  function eg(e, t, n, l, u) {
    n = n.render;
    var f = t.ref;
    if ("ref" in l) {
      var g = {};
      for (var _ in l)
        _ !== "ref" && (g[_] = l[_]);
    } else g = l;
    return Bn(t), l = Ha(
      e,
      t,
      n,
      g,
      f,
      u
    ), _ = rr(), e !== null && !Jt ? (Gr(e, t, u), Oi(e, t, u)) : (Ge && _ && Pl(t), t.flags |= 1, _n(e, t, l, u), t.child);
  }
  function tg(e, t, n, l, u) {
    if (e === null) {
      var f = n.type;
      return typeof f == "function" && !ss(f) && f.defaultProps === void 0 && n.compare === null ? (t.tag = 15, t.type = f, ng(
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
    if (f = e.child, !qd(e, u)) {
      var g = f.memoizedProps;
      if (n = n.compare, n = n !== null ? n : cn, n(g, l) && e.ref === t.ref)
        return Oi(e, t, u);
    }
    return t.flags |= 1, e = Ra(f, l), e.ref = t.ref, e.return = t, t.child = e;
  }
  function ng(e, t, n, l, u) {
    if (e !== null) {
      var f = e.memoizedProps;
      if (cn(f, l) && e.ref === t.ref)
        if (Jt = !1, t.pendingProps = l = f, qd(e, u))
          (e.flags & 131072) !== 0 && (Jt = !0);
        else
          return t.lanes = e.lanes, Oi(e, t, u);
    }
    return Ld(
      e,
      t,
      n,
      l,
      u
    );
  }
  function ag(e, t, n, l) {
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
        return ig(
          e,
          t,
          f,
          n,
          l
        );
      }
      if ((n & 536870912) !== 0)
        t.memoizedState = { baseLanes: 0, cachePool: null }, e !== null && bi(
          t,
          f !== null ? f.cachePool : null
        ), f !== null ? $n(t, f) : An(), pt(t);
      else
        return l = t.lanes = 536870912, ig(
          e,
          t,
          f !== null ? f.baseLanes | n : n,
          n,
          l
        );
    } else
      f !== null ? (bi(t, f.cachePool), $n(t, f), jt(), t.memoizedState = null) : (e !== null && bi(t, null), An(), jt());
    return _n(e, t, u, n), t.child;
  }
  function xs(e, t) {
    return e !== null && e.tag === 22 || t.stateNode !== null || (t.stateNode = {
      _visibility: 1,
      _pendingMarkers: null,
      _retryCache: null,
      _transitions: null
    }), t.sibling;
  }
  function ig(e, t, n, l, u) {
    var f = pl();
    return f = f === null ? null : { parent: kt._currentValue, pool: f }, t.memoizedState = {
      baseLanes: n,
      cachePool: f
    }, e !== null && bi(t, null), An(), pt(t), e !== null && ni(e, t, l, !0), t.childLanes = u, null;
  }
  function uc(e, t) {
    return t = fc(
      { mode: t.mode, children: t.children },
      e.mode
    ), t.ref = e.ref, e.child = t, t.return = e, t;
  }
  function lg(e, t, n) {
    return Oe(t, e.child, null, n), e = uc(t, t.pendingProps), e.flags |= 2, Tt(t), t.memoizedState = null, e;
  }
  function k1(e, t, n) {
    var l = t.pendingProps, u = (t.flags & 128) !== 0;
    if (t.flags &= -129, e === null) {
      if (Ge) {
        if (l.mode === "hidden")
          return e = uc(t, l), t.lanes = 536870912, xs(null, e);
        if (qt(t), (e = lt) ? (e = vv(
          e,
          Qn
        ), e = e !== null && e.data === "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Wa !== null ? { id: ya, overflow: ba } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Ju(e), n.return = t, t.child = n, an = t, lt = null)) : e = null, e === null) throw Pa(t);
        return t.lanes = 536870912, null;
      }
      return uc(t, l);
    }
    var f = e.memoizedState;
    if (f !== null) {
      var g = f.dehydrated;
      if (qt(t), u)
        if (t.flags & 256)
          t.flags &= -257, t = lg(
            e,
            t,
            n
          );
        else if (t.memoizedState !== null)
          t.child = e.child, t.flags |= 128, t = null;
        else throw Error(o(558));
      else if (Jt || ni(e, t, n, !1), u = (n & e.childLanes) !== 0, Jt || u) {
        if (l = xt, l !== null && (g = pu(l, n), g !== 0 && g !== f.retryLane))
          throw f.retryLane = g, bn(e, g), ea(l, e, g), zd;
        _c(), t = lg(
          e,
          t,
          n
        );
      } else
        e = f.treeContext, lt = Ea(g.nextSibling), an = t, Ge = !0, ja = null, Qn = !1, e !== null && fs(t, e), t = uc(t, l), t.flags |= 4096;
      return t;
    }
    return e = Ra(e.child, {
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
  function Ld(e, t, n, l, u) {
    return Bn(t), n = Ha(
      e,
      t,
      n,
      l,
      void 0,
      u
    ), l = rr(), e !== null && !Jt ? (Gr(e, t, u), Oi(e, t, u)) : (Ge && l && Pl(t), t.flags |= 1, _n(e, t, n, u), t.child);
  }
  function rg(e, t, n, l, u, f) {
    return Bn(t), t.updateQueue = null, n = Ss(
      t,
      l,
      n,
      u
    ), lr(e), l = rr(), e !== null && !Jt ? (Gr(e, t, f), Oi(e, t, f)) : (Ge && l && Pl(t), t.flags |= 1, _n(e, t, n, f), t.child);
  }
  function og(e, t, n, l, u) {
    if (Bn(t), t.stateNode === null) {
      var f = ol, g = n.contextType;
      typeof g == "object" && g !== null && (f = Zt(g)), f = new n(l, f), t.memoizedState = f.state !== null && f.state !== void 0 ? f.state : null, f.updater = Nd, t.stateNode = f, f._reactInternals = t, f = t.stateNode, f.props = l, f.state = t.memoizedState, f.refs = {}, rt(t), g = n.contextType, f.context = typeof g == "object" && g !== null ? Zt(g) : ol, f.state = t.memoizedState, g = n.getDerivedStateFromProps, typeof g == "function" && (Dd(
        t,
        n,
        g,
        l
      ), f.state = t.memoizedState), typeof n.getDerivedStateFromProps == "function" || typeof f.getSnapshotBeforeUpdate == "function" || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (g = f.state, typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount(), g !== f.state && Nd.enqueueReplaceState(f, f.state, null), Pe(t, l, f, u), tt(), f.state = t.memoizedState), typeof f.componentDidMount == "function" && (t.flags |= 4194308), l = !0;
    } else if (e === null) {
      f = t.stateNode;
      var _ = t.memoizedProps, w = sr(n, _);
      f.props = w;
      var Y = f.context, K = n.contextType;
      g = ol, typeof K == "object" && K !== null && (g = Zt(K));
      var W = n.getDerivedStateFromProps;
      K = typeof W == "function" || typeof f.getSnapshotBeforeUpdate == "function", _ = t.pendingProps !== _, K || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (_ || Y !== g) && Fm(
        t,
        f,
        l,
        g
      ), Se = !1;
      var G = t.memoizedState;
      f.state = G, Pe(t, l, f, u), tt(), Y = t.memoizedState, _ || G !== Y || Se ? (typeof W == "function" && (Dd(
        t,
        n,
        W,
        l
      ), Y = t.memoizedState), (w = Se || Im(
        t,
        n,
        w,
        l,
        G,
        Y,
        g
      )) ? (K || typeof f.UNSAFE_componentWillMount != "function" && typeof f.componentWillMount != "function" || (typeof f.componentWillMount == "function" && f.componentWillMount(), typeof f.UNSAFE_componentWillMount == "function" && f.UNSAFE_componentWillMount()), typeof f.componentDidMount == "function" && (t.flags |= 4194308)) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), t.memoizedProps = l, t.memoizedState = Y), f.props = l, f.state = Y, f.context = g, l = w) : (typeof f.componentDidMount == "function" && (t.flags |= 4194308), l = !1);
    } else {
      f = t.stateNode, ht(e, t), g = t.memoizedProps, K = sr(n, g), f.props = K, W = t.pendingProps, G = f.context, Y = n.contextType, w = ol, typeof Y == "object" && Y !== null && (w = Zt(Y)), _ = n.getDerivedStateFromProps, (Y = typeof _ == "function" || typeof f.getSnapshotBeforeUpdate == "function") || typeof f.UNSAFE_componentWillReceiveProps != "function" && typeof f.componentWillReceiveProps != "function" || (g !== W || G !== w) && Fm(
        t,
        f,
        l,
        w
      ), Se = !1, G = t.memoizedState, f.state = G, Pe(t, l, f, u), tt();
      var F = t.memoizedState;
      g !== W || G !== F || Se || e !== null && e.dependencies !== null && tr(e.dependencies) ? (typeof _ == "function" && (Dd(
        t,
        n,
        _,
        l
      ), F = t.memoizedState), (K = Se || Im(
        t,
        n,
        K,
        l,
        G,
        F,
        w
      ) || e !== null && e.dependencies !== null && tr(e.dependencies)) ? (Y || typeof f.UNSAFE_componentWillUpdate != "function" && typeof f.componentWillUpdate != "function" || (typeof f.componentWillUpdate == "function" && f.componentWillUpdate(l, F, w), typeof f.UNSAFE_componentWillUpdate == "function" && f.UNSAFE_componentWillUpdate(
        l,
        F,
        w
      )), typeof f.componentDidUpdate == "function" && (t.flags |= 4), typeof f.getSnapshotBeforeUpdate == "function" && (t.flags |= 1024)) : (typeof f.componentDidUpdate != "function" || g === e.memoizedProps && G === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && G === e.memoizedState || (t.flags |= 1024), t.memoizedProps = l, t.memoizedState = F), f.props = l, f.state = F, f.context = w, l = K) : (typeof f.componentDidUpdate != "function" || g === e.memoizedProps && G === e.memoizedState || (t.flags |= 4), typeof f.getSnapshotBeforeUpdate != "function" || g === e.memoizedProps && G === e.memoizedState || (t.flags |= 1024), l = !1);
    }
    return f = l, cc(e, t), l = (t.flags & 128) !== 0, f || l ? (f = t.stateNode, n = l && typeof n.getDerivedStateFromError != "function" ? null : f.render(), t.flags |= 1, e !== null && l ? (t.child = Oe(
      t,
      e.child,
      null,
      u
    ), t.child = Oe(
      t,
      null,
      n,
      u
    )) : _n(e, t, n, u), t.memoizedState = f.state, e = t.child) : e = Oi(
      e,
      t,
      u
    ), e;
  }
  function sg(e, t, n, l) {
    return vi(), t.flags |= 256, _n(e, t, n, l), t.child;
  }
  var Hd = {
    dehydrated: null,
    treeContext: null,
    retryLane: 0,
    hydrationErrors: null
  };
  function Vd(e) {
    return { baseLanes: e, cachePool: tc() };
  }
  function Ud(e, t, n) {
    return e = e !== null ? e.childLanes & ~n : 0, t && (e |= oa), e;
  }
  function ug(e, t, n) {
    var l = t.pendingProps, u = !1, f = (t.flags & 128) !== 0, g;
    if ((g = f) || (g = e !== null && e.memoizedState === null ? !1 : (mt.current & 2) !== 0), g && (u = !0, t.flags &= -129), g = (t.flags & 32) !== 0, t.flags &= -33, e === null) {
      if (Ge) {
        if (u ? kn(t) : jt(), (e = lt) ? (e = vv(
          e,
          Qn
        ), e = e !== null && e.data !== "&" ? e : null, e !== null && (t.memoizedState = {
          dehydrated: e,
          treeContext: Wa !== null ? { id: ya, overflow: ba } : null,
          retryLane: 536870912,
          hydrationErrors: null
        }, n = Ju(e), n.return = t, t.child = n, an = t, lt = null)) : e = null, e === null) throw Pa(t);
        return _h(e) ? t.lanes = 32 : t.lanes = 536870912, null;
      }
      var _ = l.children;
      return l = l.fallback, u ? (jt(), u = t.mode, _ = fc(
        { mode: "hidden", children: _ },
        u
      ), l = Da(
        l,
        u,
        n,
        null
      ), _.return = t, l.return = t, _.sibling = l, t.child = _, l = t.child, l.memoizedState = Vd(n), l.childLanes = Ud(
        e,
        g,
        n
      ), t.memoizedState = Hd, xs(null, l)) : (kn(t), Bd(t, _));
    }
    var w = e.memoizedState;
    if (w !== null && (_ = w.dehydrated, _ !== null)) {
      if (f)
        t.flags & 256 ? (kn(t), t.flags &= -257, t = $d(
          e,
          t,
          n
        )) : t.memoizedState !== null ? (jt(), t.child = e.child, t.flags |= 128, t = null) : (jt(), _ = l.fallback, u = t.mode, l = fc(
          { mode: "visible", children: l.children },
          u
        ), _ = Da(
          _,
          u,
          n,
          null
        ), _.flags |= 2, l.return = t, _.return = t, l.sibling = _, t.child = l, Oe(
          t,
          e.child,
          null,
          n
        ), l = t.child, l.memoizedState = Vd(n), l.childLanes = Ud(
          e,
          g,
          n
        ), t.memoizedState = Hd, t = xs(null, l));
      else if (kn(t), _h(_)) {
        if (g = _.nextSibling && _.nextSibling.dataset, g) var Y = g.dgst;
        g = Y, l = Error(o(419)), l.stack = "", l.digest = g, er({ value: l, source: null, stack: null }), t = $d(
          e,
          t,
          n
        );
      } else if (Jt || ni(e, t, n, !1), g = (n & e.childLanes) !== 0, Jt || g) {
        if (g = xt, g !== null && (l = pu(g, n), l !== 0 && l !== w.retryLane))
          throw w.retryLane = l, bn(e, l), ea(g, e, l), zd;
        bh(_) || _c(), t = $d(
          e,
          t,
          n
        );
      } else
        bh(_) ? (t.flags |= 192, t.child = e.child, t = null) : (e = w.treeContext, lt = Ea(
          _.nextSibling
        ), an = t, Ge = !0, ja = null, Qn = !1, e !== null && fs(t, e), t = Bd(
          t,
          l.children
        ), t.flags |= 4096);
      return t;
    }
    return u ? (jt(), _ = l.fallback, u = t.mode, w = e.child, Y = w.sibling, l = Ra(w, {
      mode: "hidden",
      children: l.children
    }), l.subtreeFlags = w.subtreeFlags & 65011712, Y !== null ? _ = Ra(
      Y,
      _
    ) : (_ = Da(
      _,
      u,
      n,
      null
    ), _.flags |= 2), _.return = t, l.return = t, l.sibling = _, t.child = l, xs(null, l), l = t.child, _ = e.child.memoizedState, _ === null ? _ = Vd(n) : (u = _.cachePool, u !== null ? (w = kt._currentValue, u = u.parent !== w ? { parent: w, pool: w } : u) : u = tc(), _ = {
      baseLanes: _.baseLanes | n,
      cachePool: u
    }), l.memoizedState = _, l.childLanes = Ud(
      e,
      g,
      n
    ), t.memoizedState = Hd, xs(e.child, l)) : (kn(t), n = e.child, e = n.sibling, n = Ra(n, {
      mode: "visible",
      children: l.children
    }), n.return = t, n.sibling = null, e !== null && (g = t.deletions, g === null ? (t.deletions = [e], t.flags |= 16) : g.push(e)), t.child = n, t.memoizedState = null, n);
  }
  function Bd(e, t) {
    return t = fc(
      { mode: "visible", children: t },
      e.mode
    ), t.return = e, e.child = t;
  }
  function fc(e, t) {
    return e = Un(22, e, null, t), e.lanes = 0, e;
  }
  function $d(e, t, n) {
    return Oe(t, e.child, null, n), e = Bd(
      t,
      t.pendingProps.children
    ), e.flags |= 2, t.memoizedState = null, e;
  }
  function cg(e, t, n) {
    e.lanes |= t;
    var l = e.alternate;
    l !== null && (l.lanes |= t), ms(e.return, t, n);
  }
  function kd(e, t, n, l, u, f) {
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
  function fg(e, t, n) {
    var l = t.pendingProps, u = l.revealOrder, f = l.tail;
    l = l.children;
    var g = mt.current, _ = (g & 2) !== 0;
    if (_ ? (g = g & 1 | 2, t.flags |= 128) : g &= 1, te(mt, g), _n(e, t, l, n), l = Ge ? Jl : 0, !_ && e !== null && (e.flags & 128) !== 0)
      e: for (e = t.child; e !== null; ) {
        if (e.tag === 13)
          e.memoizedState !== null && cg(e, n, t);
        else if (e.tag === 19)
          cg(e, n, t);
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
          e = n.alternate, e !== null && Si(e) === null && (u = n), n = n.sibling;
        n = u, n === null ? (u = t.child, t.child = null) : (u = n.sibling, n.sibling = null), kd(
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
          if (e = u.alternate, e !== null && Si(e) === null) {
            t.child = u;
            break;
          }
          e = u.sibling, u.sibling = n, n = u, u = e;
        }
        kd(
          t,
          !0,
          n,
          null,
          f,
          l
        );
        break;
      case "together":
        kd(
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
  function Oi(e, t, n) {
    if (e !== null && (t.dependencies = e.dependencies), bl |= t.lanes, (n & t.childLanes) === 0)
      if (e !== null) {
        if (ni(
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
      for (e = t.child, n = Ra(e, e.pendingProps), t.child = n, n.return = t; e.sibling !== null; )
        e = e.sibling, n = n.sibling = Ra(e, e.pendingProps), n.return = t;
      n.sibling = null;
    }
    return t.child;
  }
  function qd(e, t) {
    return (e.lanes & t) !== 0 ? !0 : (e = e.dependencies, !!(e !== null && tr(e)));
  }
  function q1(e, t, n) {
    switch (t.tag) {
      case 3:
        Ve(t, t.stateNode.containerInfo), ti(t, kt, e.memoizedState.cache), vi();
        break;
      case 27:
      case 5:
        At(t);
        break;
      case 4:
        Ve(t, t.stateNode.containerInfo);
        break;
      case 10:
        ti(
          t,
          t.type,
          t.memoizedProps.value
        );
        break;
      case 31:
        if (t.memoizedState !== null)
          return t.flags |= 128, qt(t), null;
        break;
      case 13:
        var l = t.memoizedState;
        if (l !== null)
          return l.dehydrated !== null ? (kn(t), t.flags |= 128, null) : (n & t.child.childLanes) !== 0 ? ug(e, t, n) : (kn(t), e = Oi(
            e,
            t,
            n
          ), e !== null ? e.sibling : null);
        kn(t);
        break;
      case 19:
        var u = (e.flags & 128) !== 0;
        if (l = (n & t.childLanes) !== 0, l || (ni(
          e,
          t,
          n,
          !1
        ), l = (n & t.childLanes) !== 0), u) {
          if (l)
            return fg(
              e,
              t,
              n
            );
          t.flags |= 128;
        }
        if (u = t.memoizedState, u !== null && (u.rendering = null, u.tail = null, u.lastEffect = null), te(mt, mt.current), l) break;
        return null;
      case 22:
        return t.lanes = 0, ag(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        ti(t, kt, e.memoizedState.cache);
    }
    return Oi(e, t, n);
  }
  function dg(e, t, n) {
    if (e !== null)
      if (e.memoizedProps !== t.pendingProps)
        Jt = !0;
      else {
        if (!qd(e, n) && (t.flags & 128) === 0)
          return Jt = !1, q1(
            e,
            t,
            n
          );
        Jt = (e.flags & 131072) !== 0;
      }
    else
      Jt = !1, Ge && (t.flags & 1048576) !== 0 && Wl(t, Jl, t.index);
    switch (t.lanes = 0, t.tag) {
      case 16:
        e: {
          var l = t.pendingProps;
          if (e = R(t.elementType), t.type = e, typeof e == "function")
            ss(e) ? (l = sr(e, l), t.tag = 1, t = og(
              null,
              t,
              e,
              l,
              n
            )) : (t.tag = 0, t = Ld(
              null,
              t,
              e,
              l,
              n
            ));
          else {
            if (e != null) {
              var u = e.$$typeof;
              if (u === P) {
                t.tag = 11, t = eg(
                  null,
                  t,
                  e,
                  l,
                  n
                );
                break e;
              } else if (u === U) {
                t.tag = 14, t = tg(
                  null,
                  t,
                  e,
                  l,
                  n
                );
                break e;
              }
            }
            throw t = it(e) || e, Error(o(306, t, ""));
          }
        }
        return t;
      case 0:
        return Ld(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 1:
        return l = t.type, u = sr(
          l,
          t.pendingProps
        ), og(
          e,
          t,
          l,
          u,
          n
        );
      case 3:
        e: {
          if (Ve(
            t,
            t.stateNode.containerInfo
          ), e === null) throw Error(o(387));
          l = t.pendingProps;
          var f = t.memoizedState;
          u = f.element, ht(e, t), Pe(t, l, null, n);
          var g = t.memoizedState;
          if (l = g.cache, ti(t, kt, l), l !== f.cache && qr(
            t,
            [kt],
            n,
            !0
          ), tt(), l = g.element, f.isDehydrated)
            if (f = {
              element: l,
              isDehydrated: !1,
              cache: g.cache
            }, t.updateQueue.baseState = f, t.memoizedState = f, t.flags & 256) {
              t = sg(
                e,
                t,
                l,
                n
              );
              break e;
            } else if (l !== u) {
              u = fn(
                Error(o(424)),
                t
              ), er(u), t = sg(
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
              for (lt = Ea(e.firstChild), an = t, Ge = !0, ja = null, Qn = !0, n = Me(
                t,
                null,
                l,
                n
              ), t.child = n; n; )
                n.flags = n.flags & -3 | 4096, n = n.sibling;
            }
          else {
            if (vi(), l === u) {
              t = Oi(
                e,
                t,
                n
              );
              break e;
            }
            _n(e, t, l, n);
          }
          t = t.child;
        }
        return t;
      case 26:
        return cc(e, t), e === null ? (n = Cv(
          t.type,
          null,
          t.pendingProps,
          null
        )) ? t.memoizedState = n : Ge || (n = t.type, e = t.pendingProps, l = Ac(
          fe.current
        ).createElement(n), l[Bt] = t, l[Cn] = e, Sn(l, n, e), wt(l), t.stateNode = l) : t.memoizedState = Cv(
          t.type,
          e.memoizedProps,
          t.pendingProps,
          e.memoizedState
        ), null;
      case 27:
        return At(t), e === null && Ge && (l = t.stateNode = _v(
          t.type,
          t.pendingProps,
          fe.current
        ), an = t, Qn = !0, u = lt, xl(t.type) ? (Sh = u, lt = Ea(l.firstChild)) : lt = u), _n(
          e,
          t,
          t.pendingProps.children,
          n
        ), cc(e, t), e === null && (t.flags |= 4194304), t.child;
      case 5:
        return e === null && Ge && ((u = l = lt) && (l = y_(
          l,
          t.type,
          t.pendingProps,
          Qn
        ), l !== null ? (t.stateNode = l, an = t, lt = Ea(l.firstChild), Qn = !1, u = !0) : u = !1), u || Pa(t)), At(t), u = t.type, f = t.pendingProps, g = e !== null ? e.memoizedProps : null, l = f.children, gh(u, f) ? l = null : g !== null && gh(u, g) && (t.flags |= 32), t.memoizedState !== null && (u = Ha(
          e,
          t,
          ac,
          null,
          null,
          n
        ), Bs._currentValue = u), cc(e, t), _n(e, t, l, n), t.child;
      case 6:
        return e === null && Ge && ((e = n = lt) && (n = b_(
          n,
          t.pendingProps,
          Qn
        ), n !== null ? (t.stateNode = n, an = t, lt = null, e = !0) : e = !1), e || Pa(t)), null;
      case 13:
        return ug(e, t, n);
      case 4:
        return Ve(
          t,
          t.stateNode.containerInfo
        ), l = t.pendingProps, e === null ? t.child = Oe(
          t,
          null,
          l,
          n
        ) : _n(e, t, l, n), t.child;
      case 11:
        return eg(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 7:
        return _n(
          e,
          t,
          t.pendingProps,
          n
        ), t.child;
      case 8:
        return _n(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 12:
        return _n(
          e,
          t,
          t.pendingProps.children,
          n
        ), t.child;
      case 10:
        return l = t.pendingProps, ti(t, t.type, l.value), _n(e, t, l.children, n), t.child;
      case 9:
        return u = t.type._context, l = t.pendingProps.children, Bn(t), u = Zt(u), l = l(u), t.flags |= 1, _n(e, t, l, n), t.child;
      case 14:
        return tg(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 15:
        return ng(
          e,
          t,
          t.type,
          t.pendingProps,
          n
        );
      case 19:
        return fg(e, t, n);
      case 31:
        return k1(e, t, n);
      case 22:
        return ag(
          e,
          t,
          n,
          t.pendingProps
        );
      case 24:
        return Bn(t), l = Zt(kt), e === null ? (u = pl(), u === null && (u = xt, f = La(), u.pooledCache = f, f.refCount++, f !== null && (u.pooledCacheLanes |= n), u = f), t.memoizedState = { parent: l, cache: u }, rt(t), ti(t, kt, u)) : ((e.lanes & n) !== 0 && (ht(e, t), Pe(t, null, null, n), tt()), u = e.memoizedState, f = t.memoizedState, u.parent !== l ? (u = { parent: l, cache: l }, t.memoizedState = u, t.lanes === 0 && (t.memoizedState = t.updateQueue.baseState = u), ti(t, kt, l)) : (l = f.cache, ti(t, kt, l), l !== u.cache && qr(
          t,
          [kt],
          n,
          !0
        ))), _n(
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
  function Ti(e) {
    e.flags |= 4;
  }
  function Yd(e, t, n, l, u) {
    if ((t = (e.mode & 32) !== 0) && (t = !1), t) {
      if (e.flags |= 16777216, (u & 335544128) === u)
        if (e.stateNode.complete) e.flags |= 8192;
        else if (Bg()) e.flags |= 8192;
        else
          throw j = c, _i;
    } else e.flags &= -16777217;
  }
  function hg(e, t) {
    if (t.type !== "stylesheet" || (t.state.loading & 4) !== 0)
      e.flags &= -16777217;
    else if (e.flags |= 16777216, !wv(t))
      if (Bg()) e.flags |= 8192;
      else
        throw j = c, _i;
  }
  function dc(e, t) {
    t !== null && (e.flags |= 4), e.flags & 16384 && (t = e.tag !== 22 ? du() : 536870912, e.lanes |= t, Wr |= t);
  }
  function Os(e, t) {
    if (!Ge)
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
  function Mt(e) {
    var t = e.alternate !== null && e.alternate.child === e.child, n = 0, l = 0;
    if (t)
      for (var u = e.child; u !== null; )
        n |= u.lanes | u.childLanes, l |= u.subtreeFlags & 65011712, l |= u.flags & 65011712, u.return = e, u = u.sibling;
    else
      for (u = e.child; u !== null; )
        n |= u.lanes | u.childLanes, l |= u.subtreeFlags, l |= u.flags, u.return = e, u = u.sibling;
    return e.subtreeFlags |= l, e.childLanes = n, t;
  }
  function Y1(e, t, n) {
    var l = t.pendingProps;
    switch (cs(t), t.tag) {
      case 16:
      case 15:
      case 0:
      case 11:
      case 7:
      case 8:
      case 12:
      case 9:
      case 14:
        return Mt(t), null;
      case 1:
        return Mt(t), null;
      case 3:
        return n = t.stateNode, l = null, e !== null && (l = e.memoizedState.cache), t.memoizedState.cache !== l && (t.flags |= 2048), _a(kt), ie(), n.pendingContext && (n.context = n.pendingContext, n.pendingContext = null), (e === null || e.child === null) && (cl(t) ? Ti(t) : e === null || e.memoizedState.isDehydrated && (t.flags & 256) === 0 || (t.flags |= 1024, hs())), Mt(t), null;
      case 26:
        var u = t.type, f = t.memoizedState;
        return e === null ? (Ti(t), f !== null ? (Mt(t), hg(t, f)) : (Mt(t), Yd(
          t,
          u,
          null,
          l,
          n
        ))) : f ? f !== e.memoizedState ? (Ti(t), Mt(t), hg(t, f)) : (Mt(t), t.flags &= -16777217) : (e = e.memoizedProps, e !== l && Ti(t), Mt(t), Yd(
          t,
          u,
          e,
          l,
          n
        )), null;
      case 27:
        if (Ut(t), n = fe.current, u = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && Ti(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Mt(t), null;
          }
          e = ae.current, cl(t) ? ul(t) : (e = _v(u, l, n), t.stateNode = e, Ti(t));
        }
        return Mt(t), null;
      case 5:
        if (Ut(t), u = t.type, e !== null && t.stateNode != null)
          e.memoizedProps !== l && Ti(t);
        else {
          if (!l) {
            if (t.stateNode === null)
              throw Error(o(166));
            return Mt(t), null;
          }
          if (f = ae.current, cl(t))
            ul(t);
          else {
            var g = Ac(
              fe.current
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
            f[Bt] = t, f[Cn] = l;
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
            e: switch (Sn(f, u, l), u) {
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
            l && Ti(t);
          }
        }
        return Mt(t), Yd(
          t,
          t.type,
          e === null ? null : e.memoizedProps,
          t.pendingProps,
          n
        ), null;
      case 6:
        if (e && t.stateNode != null)
          e.memoizedProps !== l && Ti(t);
        else {
          if (typeof l != "string" && t.stateNode === null)
            throw Error(o(166));
          if (e = fe.current, cl(t)) {
            if (e = t.stateNode, n = t.memoizedProps, l = null, u = an, u !== null)
              switch (u.tag) {
                case 27:
                case 5:
                  l = u.memoizedProps;
              }
            e[Bt] = t, e = !!(e.nodeValue === n || l !== null && l.suppressHydrationWarning === !0 || uv(e.nodeValue, n)), e || Pa(t, !0);
          } else
            e = Ac(e).createTextNode(
              l
            ), e[Bt] = t, t.stateNode = e;
        }
        return Mt(t), null;
      case 31:
        if (n = t.memoizedState, e === null || e.memoizedState !== null) {
          if (l = cl(t), n !== null) {
            if (e === null) {
              if (!l) throw Error(o(318));
              if (e = t.memoizedState, e = e !== null ? e.dehydrated : null, !e) throw Error(o(557));
              e[Bt] = t;
            } else
              vi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Mt(t), e = !1;
          } else
            n = hs(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = n), e = !0;
          if (!e)
            return t.flags & 256 ? (Tt(t), t) : (Tt(t), null);
          if ((t.flags & 128) !== 0)
            throw Error(o(558));
        }
        return Mt(t), null;
      case 13:
        if (l = t.memoizedState, e === null || e.memoizedState !== null && e.memoizedState.dehydrated !== null) {
          if (u = cl(t), l !== null && l.dehydrated !== null) {
            if (e === null) {
              if (!u) throw Error(o(318));
              if (u = t.memoizedState, u = u !== null ? u.dehydrated : null, !u) throw Error(o(317));
              u[Bt] = t;
            } else
              vi(), (t.flags & 128) === 0 && (t.memoizedState = null), t.flags |= 4;
            Mt(t), u = !1;
          } else
            u = hs(), e !== null && e.memoizedState !== null && (e.memoizedState.hydrationErrors = u), u = !0;
          if (!u)
            return t.flags & 256 ? (Tt(t), t) : (Tt(t), null);
        }
        return Tt(t), (t.flags & 128) !== 0 ? (t.lanes = n, t) : (n = l !== null, e = e !== null && e.memoizedState !== null, n && (l = t.child, u = null, l.alternate !== null && l.alternate.memoizedState !== null && l.alternate.memoizedState.cachePool !== null && (u = l.alternate.memoizedState.cachePool.pool), f = null, l.memoizedState !== null && l.memoizedState.cachePool !== null && (f = l.memoizedState.cachePool.pool), f !== u && (l.flags |= 2048)), n !== e && n && (t.child.flags |= 8192), dc(t, t.updateQueue), Mt(t), null);
      case 4:
        return ie(), e === null && fh(t.stateNode.containerInfo), Mt(t), null;
      case 10:
        return _a(t.type), Mt(t), null;
      case 19:
        if (k(mt), l = t.memoizedState, l === null) return Mt(t), null;
        if (u = (t.flags & 128) !== 0, f = l.rendering, f === null)
          if (u) Os(l, !1);
          else {
            if (Gt !== 0 || e !== null && (e.flags & 128) !== 0)
              for (e = t.child; e !== null; ) {
                if (f = Si(e), f !== null) {
                  for (t.flags |= 128, Os(l, !1), e = f.updateQueue, t.updateQueue = e, dc(t, e), t.subtreeFlags = 0, e = n, n = t.child; n !== null; )
                    Ku(n, e), n = n.sibling;
                  return te(
                    mt,
                    mt.current & 1 | 2
                  ), Ge && Na(t, l.treeForkCount), t.child;
                }
                e = e.sibling;
              }
            l.tail !== null && rn() > vc && (t.flags |= 128, u = !0, Os(l, !1), t.lanes = 4194304);
          }
        else {
          if (!u)
            if (e = Si(f), e !== null) {
              if (t.flags |= 128, u = !0, e = e.updateQueue, t.updateQueue = e, dc(t, e), Os(l, !0), l.tail === null && l.tailMode === "hidden" && !f.alternate && !Ge)
                return Mt(t), null;
            } else
              2 * rn() - l.renderingStartTime > vc && n !== 536870912 && (t.flags |= 128, u = !0, Os(l, !1), t.lanes = 4194304);
          l.isBackwards ? (f.sibling = t.child, t.child = f) : (e = l.last, e !== null ? e.sibling = f : t.child = f, l.last = f);
        }
        return l.tail !== null ? (e = l.tail, l.rendering = e, l.tail = e.sibling, l.renderingStartTime = rn(), e.sibling = null, n = mt.current, te(
          mt,
          u ? n & 1 | 2 : n & 1
        ), Ge && Na(t, l.treeForkCount), e) : (Mt(t), null);
      case 22:
      case 23:
        return Tt(t), Ot(), l = t.memoizedState !== null, e !== null ? e.memoizedState !== null !== l && (t.flags |= 8192) : l && (t.flags |= 8192), l ? (n & 536870912) !== 0 && (t.flags & 128) === 0 && (Mt(t), t.subtreeFlags & 6 && (t.flags |= 8192)) : Mt(t), n = t.updateQueue, n !== null && dc(t, n.retryQueue), n = null, e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), l = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (l = t.memoizedState.cachePool.pool), l !== n && (t.flags |= 2048), e !== null && k(ai), null;
      case 24:
        return n = null, e !== null && (n = e.memoizedState.cache), t.memoizedState.cache !== n && (t.flags |= 2048), _a(kt), Mt(t), null;
      case 25:
        return null;
      case 30:
        return null;
    }
    throw Error(o(156, t.tag));
  }
  function G1(e, t) {
    switch (cs(t), t.tag) {
      case 1:
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 3:
        return _a(kt), ie(), e = t.flags, (e & 65536) !== 0 && (e & 128) === 0 ? (t.flags = e & -65537 | 128, t) : null;
      case 26:
      case 27:
      case 5:
        return Ut(t), null;
      case 31:
        if (t.memoizedState !== null) {
          if (Tt(t), t.alternate === null)
            throw Error(o(340));
          vi();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 13:
        if (Tt(t), e = t.memoizedState, e !== null && e.dehydrated !== null) {
          if (t.alternate === null)
            throw Error(o(340));
          vi();
        }
        return e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 19:
        return k(mt), null;
      case 4:
        return ie(), null;
      case 10:
        return _a(t.type), null;
      case 22:
      case 23:
        return Tt(t), Ot(), e !== null && k(ai), e = t.flags, e & 65536 ? (t.flags = e & -65537 | 128, t) : null;
      case 24:
        return _a(kt), null;
      case 25:
        return null;
      default:
        return null;
    }
  }
  function pg(e, t) {
    switch (cs(t), t.tag) {
      case 3:
        _a(kt), ie();
        break;
      case 26:
      case 27:
      case 5:
        Ut(t);
        break;
      case 4:
        ie();
        break;
      case 31:
        t.memoizedState !== null && Tt(t);
        break;
      case 13:
        Tt(t);
        break;
      case 19:
        k(mt);
        break;
      case 10:
        _a(t.type);
        break;
      case 22:
      case 23:
        Tt(t), Ot(), e !== null && k(ai);
        break;
      case 24:
        _a(kt);
    }
  }
  function Ts(e, t) {
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
      _t(t, t.return, _);
    }
  }
  function vl(e, t, n) {
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
              var w = n, Y = _;
              try {
                Y();
              } catch (K) {
                _t(
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
      _t(t, t.return, K);
    }
  }
  function mg(e) {
    var t = e.updateQueue;
    if (t !== null) {
      var n = e.stateNode;
      try {
        Tn(t, n);
      } catch (l) {
        _t(e, e.return, l);
      }
    }
  }
  function gg(e, t, n) {
    n.props = sr(
      e.type,
      e.memoizedProps
    ), n.state = e.memoizedState;
    try {
      n.componentWillUnmount();
    } catch (l) {
      _t(e, t, l);
    }
  }
  function As(e, t) {
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
      _t(e, t, u);
    }
  }
  function li(e, t) {
    var n = e.ref, l = e.refCleanup;
    if (n !== null)
      if (typeof l == "function")
        try {
          l();
        } catch (u) {
          _t(e, t, u);
        } finally {
          e.refCleanup = null, e = e.alternate, e != null && (e.refCleanup = null);
        }
      else if (typeof n == "function")
        try {
          n(null);
        } catch (u) {
          _t(e, t, u);
        }
      else n.current = null;
  }
  function vg(e) {
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
      _t(e, e.return, u);
    }
  }
  function Gd(e, t, n) {
    try {
      var l = e.stateNode;
      d_(l, e.type, n, t), l[Cn] = t;
    } catch (u) {
      _t(e, e.return, u);
    }
  }
  function yg(e) {
    return e.tag === 5 || e.tag === 3 || e.tag === 26 || e.tag === 27 && xl(e.type) || e.tag === 4;
  }
  function Xd(e) {
    e: for (; ; ) {
      for (; e.sibling === null; ) {
        if (e.return === null || yg(e.return)) return null;
        e = e.return;
      }
      for (e.sibling.return = e.return, e = e.sibling; e.tag !== 5 && e.tag !== 6 && e.tag !== 18; ) {
        if (e.tag === 27 && xl(e.type) || e.flags & 2 || e.child === null || e.tag === 4) continue e;
        e.child.return = e, e = e.child;
      }
      if (!(e.flags & 2)) return e.stateNode;
    }
  }
  function Id(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? (n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n).insertBefore(e, t) : (t = n.nodeType === 9 ? n.body : n.nodeName === "HTML" ? n.ownerDocument.body : n, t.appendChild(e), n = n._reactRootContainer, n != null || t.onclick !== null || (t.onclick = sn));
    else if (l !== 4 && (l === 27 && xl(e.type) && (n = e.stateNode, t = null), e = e.child, e !== null))
      for (Id(e, t, n), e = e.sibling; e !== null; )
        Id(e, t, n), e = e.sibling;
  }
  function hc(e, t, n) {
    var l = e.tag;
    if (l === 5 || l === 6)
      e = e.stateNode, t ? n.insertBefore(e, t) : n.appendChild(e);
    else if (l !== 4 && (l === 27 && xl(e.type) && (n = e.stateNode), e = e.child, e !== null))
      for (hc(e, t, n), e = e.sibling; e !== null; )
        hc(e, t, n), e = e.sibling;
  }
  function bg(e) {
    var t = e.stateNode, n = e.memoizedProps;
    try {
      for (var l = e.type, u = t.attributes; u.length; )
        t.removeAttributeNode(u[0]);
      Sn(t, l, n), t[Bt] = e, t[Cn] = n;
    } catch (f) {
      _t(e, e.return, f);
    }
  }
  var Ai = !1, Wt = !1, Fd = !1, _g = typeof WeakSet == "function" ? WeakSet : Set, pn = null;
  function X1(e, t) {
    if (e = e.containerInfo, ph = zc, e = Ko(e), Jo(e)) {
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
            var g = 0, _ = -1, w = -1, Y = 0, K = 0, W = e, G = null;
            t: for (; ; ) {
              for (var F; W !== n || u !== 0 && W.nodeType !== 3 || (_ = g + u), W !== f || l !== 0 && W.nodeType !== 3 || (w = g + l), W.nodeType === 3 && (g += W.nodeValue.length), (F = W.firstChild) !== null; )
                G = W, W = F;
              for (; ; ) {
                if (W === e) break t;
                if (G === n && ++Y === u && (_ = g), G === f && ++K === l && (w = g), (F = W.nextSibling) !== null) break;
                W = G, G = W.parentNode;
              }
              W = F;
            }
            n = _ === -1 || w === -1 ? null : { start: _, end: w };
          } else n = null;
        }
      n = n || { start: 0, end: 0 };
    } else n = null;
    for (mh = { focusedElem: e, selectionRange: n }, zc = !1, pn = t; pn !== null; )
      if (t = pn, e = t.child, (t.subtreeFlags & 1028) !== 0 && e !== null)
        e.return = t, pn = e;
      else
        for (; pn !== null; ) {
          switch (t = pn, f = t.alternate, e = t.flags, t.tag) {
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
                  var pe = sr(
                    n.type,
                    u
                  );
                  e = l.getSnapshotBeforeUpdate(
                    pe,
                    f
                  ), l.__reactInternalSnapshotBeforeUpdate = e;
                } catch (Te) {
                  _t(
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
                  yh(e);
                else if (n === 1)
                  switch (e.nodeName) {
                    case "HEAD":
                    case "HTML":
                    case "BODY":
                      yh(e);
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
            e.return = t.return, pn = e;
            break;
          }
          pn = t.return;
        }
  }
  function Sg(e, t, n) {
    var l = n.flags;
    switch (n.tag) {
      case 0:
      case 11:
      case 15:
        Mi(e, n), l & 4 && Ts(5, n);
        break;
      case 1:
        if (Mi(e, n), l & 4)
          if (e = n.stateNode, t === null)
            try {
              e.componentDidMount();
            } catch (g) {
              _t(n, n.return, g);
            }
          else {
            var u = sr(
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
              _t(
                n,
                n.return,
                g
              );
            }
          }
        l & 64 && mg(n), l & 512 && As(n, n.return);
        break;
      case 3:
        if (Mi(e, n), l & 64 && (e = n.updateQueue, e !== null)) {
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
            Tn(e, t);
          } catch (g) {
            _t(n, n.return, g);
          }
        }
        break;
      case 27:
        t === null && l & 4 && bg(n);
      case 26:
      case 5:
        Mi(e, n), t === null && l & 4 && vg(n), l & 512 && As(n, n.return);
        break;
      case 12:
        Mi(e, n);
        break;
      case 31:
        Mi(e, n), l & 4 && xg(e, n);
        break;
      case 13:
        Mi(e, n), l & 4 && Og(e, n), l & 64 && (e = n.memoizedState, e !== null && (e = e.dehydrated, e !== null && (n = e_.bind(
          null,
          n
        ), __(e, n))));
        break;
      case 22:
        if (l = n.memoizedState !== null || Ai, !l) {
          t = t !== null && t.memoizedState !== null || Wt, u = Ai;
          var f = Wt;
          Ai = l, (Wt = t) && !f ? Ri(
            e,
            n,
            (n.subtreeFlags & 8772) !== 0
          ) : Mi(e, n), Ai = u, Wt = f;
        }
        break;
      case 30:
        break;
      default:
        Mi(e, n);
    }
  }
  function Eg(e) {
    var t = e.alternate;
    t !== null && (e.alternate = null, Eg(t)), e.child = null, e.deletions = null, e.sibling = null, e.tag === 5 && (t = e.stateNode, t !== null && gn(t)), e.stateNode = null, e.return = null, e.dependencies = null, e.memoizedProps = null, e.memoizedState = null, e.pendingProps = null, e.stateNode = null, e.updateQueue = null;
  }
  var Ht = null, Kn = !1;
  function wi(e, t, n) {
    for (n = n.child; n !== null; )
      Cg(e, t, n), n = n.sibling;
  }
  function Cg(e, t, n) {
    if (Rn && typeof Rn.onCommitFiberUnmount == "function")
      try {
        Rn.onCommitFiberUnmount(Ya, n);
      } catch {
      }
    switch (n.tag) {
      case 26:
        Wt || li(n, t), wi(
          e,
          t,
          n
        ), n.memoizedState ? n.memoizedState.count-- : n.stateNode && (n = n.stateNode, n.parentNode.removeChild(n));
        break;
      case 27:
        Wt || li(n, t);
        var l = Ht, u = Kn;
        xl(n.type) && (Ht = n.stateNode, Kn = !1), wi(
          e,
          t,
          n
        ), Hs(n.stateNode), Ht = l, Kn = u;
        break;
      case 5:
        Wt || li(n, t);
      case 6:
        if (l = Ht, u = Kn, Ht = null, wi(
          e,
          t,
          n
        ), Ht = l, Kn = u, Ht !== null)
          if (Kn)
            try {
              (Ht.nodeType === 9 ? Ht.body : Ht.nodeName === "HTML" ? Ht.ownerDocument.body : Ht).removeChild(n.stateNode);
            } catch (f) {
              _t(
                n,
                t,
                f
              );
            }
          else
            try {
              Ht.removeChild(n.stateNode);
            } catch (f) {
              _t(
                n,
                t,
                f
              );
            }
        break;
      case 18:
        Ht !== null && (Kn ? (e = Ht, mv(
          e.nodeType === 9 ? e.body : e.nodeName === "HTML" ? e.ownerDocument.body : e,
          n.stateNode
        ), ro(e)) : mv(Ht, n.stateNode));
        break;
      case 4:
        l = Ht, u = Kn, Ht = n.stateNode.containerInfo, Kn = !0, wi(
          e,
          t,
          n
        ), Ht = l, Kn = u;
        break;
      case 0:
      case 11:
      case 14:
      case 15:
        vl(2, n, t), Wt || vl(4, n, t), wi(
          e,
          t,
          n
        );
        break;
      case 1:
        Wt || (li(n, t), l = n.stateNode, typeof l.componentWillUnmount == "function" && gg(
          n,
          t,
          l
        )), wi(
          e,
          t,
          n
        );
        break;
      case 21:
        wi(
          e,
          t,
          n
        );
        break;
      case 22:
        Wt = (l = Wt) || n.memoizedState !== null, wi(
          e,
          t,
          n
        ), Wt = l;
        break;
      default:
        wi(
          e,
          t,
          n
        );
    }
  }
  function xg(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null))) {
      e = e.dehydrated;
      try {
        ro(e);
      } catch (n) {
        _t(t, t.return, n);
      }
    }
  }
  function Og(e, t) {
    if (t.memoizedState === null && (e = t.alternate, e !== null && (e = e.memoizedState, e !== null && (e = e.dehydrated, e !== null))))
      try {
        ro(e);
      } catch (n) {
        _t(t, t.return, n);
      }
  }
  function I1(e) {
    switch (e.tag) {
      case 31:
      case 13:
      case 19:
        var t = e.stateNode;
        return t === null && (t = e.stateNode = new _g()), t;
      case 22:
        return e = e.stateNode, t = e._retryCache, t === null && (t = e._retryCache = new _g()), t;
      default:
        throw Error(o(435, e.tag));
    }
  }
  function pc(e, t) {
    var n = I1(e);
    t.forEach(function(l) {
      if (!n.has(l)) {
        n.add(l);
        var u = t_.bind(null, e, l);
        l.then(u, u);
      }
    });
  }
  function Jn(e, t) {
    var n = t.deletions;
    if (n !== null)
      for (var l = 0; l < n.length; l++) {
        var u = n[l], f = e, g = t, _ = g;
        e: for (; _ !== null; ) {
          switch (_.tag) {
            case 27:
              if (xl(_.type)) {
                Ht = _.stateNode, Kn = !1;
                break e;
              }
              break;
            case 5:
              Ht = _.stateNode, Kn = !1;
              break e;
            case 3:
            case 4:
              Ht = _.stateNode.containerInfo, Kn = !0;
              break e;
          }
          _ = _.return;
        }
        if (Ht === null) throw Error(o(160));
        Cg(f, g, u), Ht = null, Kn = !1, f = u.alternate, f !== null && (f.return = null), u.return = null;
      }
    if (t.subtreeFlags & 13886)
      for (t = t.child; t !== null; )
        Tg(t, e), t = t.sibling;
  }
  var Va = null;
  function Tg(e, t) {
    var n = e.alternate, l = e.flags;
    switch (e.tag) {
      case 0:
      case 11:
      case 14:
      case 15:
        Jn(t, e), Wn(e), l & 4 && (vl(3, e, e.return), Ts(3, e), vl(5, e, e.return));
        break;
      case 1:
        Jn(t, e), Wn(e), l & 512 && (Wt || n === null || li(n, n.return)), l & 64 && Ai && (e = e.updateQueue, e !== null && (l = e.callbacks, l !== null && (n = e.shared.hiddenCallbacks, e.shared.hiddenCallbacks = n === null ? l : n.concat(l))));
        break;
      case 26:
        var u = Va;
        if (Jn(t, e), Wn(e), l & 512 && (Wt || n === null || li(n, n.return)), l & 4) {
          var f = n !== null ? n.memoizedState : null;
          if (l = e.memoizedState, n === null)
            if (l === null)
              if (e.stateNode === null) {
                e: {
                  l = e.type, n = e.memoizedProps, u = u.ownerDocument || u;
                  t: switch (l) {
                    case "title":
                      f = u.getElementsByTagName("title")[0], (!f || f[nn] || f[Bt] || f.namespaceURI === "http://www.w3.org/2000/svg" || f.hasAttribute("itemprop")) && (f = u.createElement(l), u.head.insertBefore(
                        f,
                        u.querySelector("head > title")
                      )), Sn(f, l, n), f[Bt] = e, wt(f), l = f;
                      break e;
                    case "link":
                      var g = Tv(
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
                      f = u.createElement(l), Sn(f, l, n), u.head.appendChild(f);
                      break;
                    case "meta":
                      if (g = Tv(
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
                      f = u.createElement(l), Sn(f, l, n), u.head.appendChild(f);
                      break;
                    default:
                      throw Error(o(468, l));
                  }
                  f[Bt] = e, wt(f), l = f;
                }
                e.stateNode = l;
              } else
                Av(
                  u,
                  e.type,
                  e.stateNode
                );
            else
              e.stateNode = Ov(
                u,
                l,
                e.memoizedProps
              );
          else
            f !== l ? (f === null ? n.stateNode !== null && (n = n.stateNode, n.parentNode.removeChild(n)) : f.count--, l === null ? Av(
              u,
              e.type,
              e.stateNode
            ) : Ov(
              u,
              l,
              e.memoizedProps
            )) : l === null && e.stateNode !== null && Gd(
              e,
              e.memoizedProps,
              n.memoizedProps
            );
        }
        break;
      case 27:
        Jn(t, e), Wn(e), l & 512 && (Wt || n === null || li(n, n.return)), n !== null && l & 4 && Gd(
          e,
          e.memoizedProps,
          n.memoizedProps
        );
        break;
      case 5:
        if (Jn(t, e), Wn(e), l & 512 && (Wt || n === null || li(n, n.return)), e.flags & 32) {
          u = e.stateNode;
          try {
            aa(u, "");
          } catch (pe) {
            _t(e, e.return, pe);
          }
        }
        l & 4 && e.stateNode != null && (u = e.memoizedProps, Gd(
          e,
          u,
          n !== null ? n.memoizedProps : u
        )), l & 1024 && (Fd = !0);
        break;
      case 6:
        if (Jn(t, e), Wn(e), l & 4) {
          if (e.stateNode === null)
            throw Error(o(162));
          l = e.memoizedProps, n = e.stateNode;
          try {
            n.nodeValue = l;
          } catch (pe) {
            _t(e, e.return, pe);
          }
        }
        break;
      case 3:
        if (Rc = null, u = Va, Va = wc(t.containerInfo), Jn(t, e), Va = u, Wn(e), l & 4 && n !== null && n.memoizedState.isDehydrated)
          try {
            ro(t.containerInfo);
          } catch (pe) {
            _t(e, e.return, pe);
          }
        Fd && (Fd = !1, Ag(e));
        break;
      case 4:
        l = Va, Va = wc(
          e.stateNode.containerInfo
        ), Jn(t, e), Wn(e), Va = l;
        break;
      case 12:
        Jn(t, e), Wn(e);
        break;
      case 31:
        Jn(t, e), Wn(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, pc(e, l)));
        break;
      case 13:
        Jn(t, e), Wn(e), e.child.flags & 8192 && e.memoizedState !== null != (n !== null && n.memoizedState !== null) && (gc = rn()), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, pc(e, l)));
        break;
      case 22:
        u = e.memoizedState !== null;
        var w = n !== null && n.memoizedState !== null, Y = Ai, K = Wt;
        if (Ai = Y || u, Wt = K || w, Jn(t, e), Wt = K, Ai = Y, Wn(e), l & 8192)
          e: for (t = e.stateNode, t._visibility = u ? t._visibility & -2 : t._visibility | 1, u && (n === null || w || Ai || Wt || ur(e)), n = null, t = e; ; ) {
            if (t.tag === 5 || t.tag === 26) {
              if (n === null) {
                w = n = t;
                try {
                  if (f = w.stateNode, u)
                    g = f.style, typeof g.setProperty == "function" ? g.setProperty("display", "none", "important") : g.display = "none";
                  else {
                    _ = w.stateNode;
                    var W = w.memoizedProps.style, G = W != null && W.hasOwnProperty("display") ? W.display : null;
                    _.style.display = G == null || typeof G == "boolean" ? "" : ("" + G).trim();
                  }
                } catch (pe) {
                  _t(w, w.return, pe);
                }
              }
            } else if (t.tag === 6) {
              if (n === null) {
                w = t;
                try {
                  w.stateNode.nodeValue = u ? "" : w.memoizedProps;
                } catch (pe) {
                  _t(w, w.return, pe);
                }
              }
            } else if (t.tag === 18) {
              if (n === null) {
                w = t;
                try {
                  var F = w.stateNode;
                  u ? gv(F, !0) : gv(w.stateNode, !1);
                } catch (pe) {
                  _t(w, w.return, pe);
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
        Jn(t, e), Wn(e), l & 4 && (l = e.updateQueue, l !== null && (e.updateQueue = null, pc(e, l)));
        break;
      case 30:
        break;
      case 21:
        break;
      default:
        Jn(t, e), Wn(e);
    }
  }
  function Wn(e) {
    var t = e.flags;
    if (t & 2) {
      try {
        for (var n, l = e.return; l !== null; ) {
          if (yg(l)) {
            n = l;
            break;
          }
          l = l.return;
        }
        if (n == null) throw Error(o(160));
        switch (n.tag) {
          case 27:
            var u = n.stateNode, f = Xd(e);
            hc(e, f, u);
            break;
          case 5:
            var g = n.stateNode;
            n.flags & 32 && (aa(g, ""), n.flags &= -33);
            var _ = Xd(e);
            hc(e, _, g);
            break;
          case 3:
          case 4:
            var w = n.stateNode.containerInfo, Y = Xd(e);
            Id(
              e,
              Y,
              w
            );
            break;
          default:
            throw Error(o(161));
        }
      } catch (K) {
        _t(e, e.return, K);
      }
      e.flags &= -3;
    }
    t & 4096 && (e.flags &= -4097);
  }
  function Ag(e) {
    if (e.subtreeFlags & 1024)
      for (e = e.child; e !== null; ) {
        var t = e;
        Ag(t), t.tag === 5 && t.flags & 1024 && t.stateNode.reset(), e = e.sibling;
      }
  }
  function Mi(e, t) {
    if (t.subtreeFlags & 8772)
      for (t = t.child; t !== null; )
        Sg(e, t.alternate, t), t = t.sibling;
  }
  function ur(e) {
    for (e = e.child; e !== null; ) {
      var t = e;
      switch (t.tag) {
        case 0:
        case 11:
        case 14:
        case 15:
          vl(4, t, t.return), ur(t);
          break;
        case 1:
          li(t, t.return);
          var n = t.stateNode;
          typeof n.componentWillUnmount == "function" && gg(
            t,
            t.return,
            n
          ), ur(t);
          break;
        case 27:
          Hs(t.stateNode);
        case 26:
        case 5:
          li(t, t.return), ur(t);
          break;
        case 22:
          t.memoizedState === null && ur(t);
          break;
        case 30:
          ur(t);
          break;
        default:
          ur(t);
      }
      e = e.sibling;
    }
  }
  function Ri(e, t, n) {
    for (n = n && (t.subtreeFlags & 8772) !== 0, t = t.child; t !== null; ) {
      var l = t.alternate, u = e, f = t, g = f.flags;
      switch (f.tag) {
        case 0:
        case 11:
        case 15:
          Ri(
            u,
            f,
            n
          ), Ts(4, f);
          break;
        case 1:
          if (Ri(
            u,
            f,
            n
          ), l = f, u = l.stateNode, typeof u.componentDidMount == "function")
            try {
              u.componentDidMount();
            } catch (Y) {
              _t(l, l.return, Y);
            }
          if (l = f, u = l.updateQueue, u !== null) {
            var _ = l.stateNode;
            try {
              var w = u.shared.hiddenCallbacks;
              if (w !== null)
                for (u.shared.hiddenCallbacks = null, u = 0; u < w.length; u++)
                  Dt(w[u], _);
            } catch (Y) {
              _t(l, l.return, Y);
            }
          }
          n && g & 64 && mg(f), As(f, f.return);
          break;
        case 27:
          bg(f);
        case 26:
        case 5:
          Ri(
            u,
            f,
            n
          ), n && l === null && g & 4 && vg(f), As(f, f.return);
          break;
        case 12:
          Ri(
            u,
            f,
            n
          );
          break;
        case 31:
          Ri(
            u,
            f,
            n
          ), n && g & 4 && xg(u, f);
          break;
        case 13:
          Ri(
            u,
            f,
            n
          ), n && g & 4 && Og(u, f);
          break;
        case 22:
          f.memoizedState === null && Ri(
            u,
            f,
            n
          ), As(f, f.return);
          break;
        case 30:
          break;
        default:
          Ri(
            u,
            f,
            n
          );
      }
      t = t.sibling;
    }
  }
  function Qd(e, t) {
    var n = null;
    e !== null && e.memoizedState !== null && e.memoizedState.cachePool !== null && (n = e.memoizedState.cachePool.pool), e = null, t.memoizedState !== null && t.memoizedState.cachePool !== null && (e = t.memoizedState.cachePool.pool), e !== n && (e != null && e.refCount++, n != null && Zn(n));
  }
  function Zd(e, t) {
    e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Zn(e));
  }
  function Ua(e, t, n, l) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; )
        wg(
          e,
          t,
          n,
          l
        ), t = t.sibling;
  }
  function wg(e, t, n, l) {
    var u = t.flags;
    switch (t.tag) {
      case 0:
      case 11:
      case 15:
        Ua(
          e,
          t,
          n,
          l
        ), u & 2048 && Ts(9, t);
        break;
      case 1:
        Ua(
          e,
          t,
          n,
          l
        );
        break;
      case 3:
        Ua(
          e,
          t,
          n,
          l
        ), u & 2048 && (e = null, t.alternate !== null && (e = t.alternate.memoizedState.cache), t = t.memoizedState.cache, t !== e && (t.refCount++, e != null && Zn(e)));
        break;
      case 12:
        if (u & 2048) {
          Ua(
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
            _t(t, t.return, w);
          }
        } else
          Ua(
            e,
            t,
            n,
            l
          );
        break;
      case 31:
        Ua(
          e,
          t,
          n,
          l
        );
        break;
      case 13:
        Ua(
          e,
          t,
          n,
          l
        );
        break;
      case 23:
        break;
      case 22:
        f = t.stateNode, g = t.alternate, t.memoizedState !== null ? f._visibility & 2 ? Ua(
          e,
          t,
          n,
          l
        ) : ws(e, t) : f._visibility & 2 ? Ua(
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
        )), u & 2048 && Qd(g, t);
        break;
      case 24:
        Ua(
          e,
          t,
          n,
          l
        ), u & 2048 && Zd(t.alternate, t);
        break;
      default:
        Ua(
          e,
          t,
          n,
          l
        );
    }
  }
  function Zr(e, t, n, l, u) {
    for (u = u && ((t.subtreeFlags & 10256) !== 0 || !1), t = t.child; t !== null; ) {
      var f = e, g = t, _ = n, w = l, Y = g.flags;
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
          ), Ts(8, g);
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
          ) : ws(
            f,
            g
          ) : (K._visibility |= 2, Zr(
            f,
            g,
            _,
            w,
            u
          )), u && Y & 2048 && Qd(
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
          ), u && Y & 2048 && Zd(g.alternate, g);
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
  function ws(e, t) {
    if (t.subtreeFlags & 10256)
      for (t = t.child; t !== null; ) {
        var n = e, l = t, u = l.flags;
        switch (l.tag) {
          case 22:
            ws(n, l), u & 2048 && Qd(
              l.alternate,
              l
            );
            break;
          case 24:
            ws(n, l), u & 2048 && Zd(l.alternate, l);
            break;
          default:
            ws(n, l);
        }
        t = t.sibling;
      }
  }
  var Ms = 8192;
  function Kr(e, t, n) {
    if (e.subtreeFlags & Ms)
      for (e = e.child; e !== null; )
        Mg(
          e,
          t,
          n
        ), e = e.sibling;
  }
  function Mg(e, t, n) {
    switch (e.tag) {
      case 26:
        Kr(
          e,
          t,
          n
        ), e.flags & Ms && e.memoizedState !== null && N_(
          n,
          Va,
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
        var l = Va;
        Va = wc(e.stateNode.containerInfo), Kr(
          e,
          t,
          n
        ), Va = l;
        break;
      case 22:
        e.memoizedState === null && (l = e.alternate, l !== null && l.memoizedState !== null ? (l = Ms, Ms = 16777216, Kr(
          e,
          t,
          n
        ), Ms = l) : Kr(
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
  function Rg(e) {
    var t = e.alternate;
    if (t !== null && (e = t.child, e !== null)) {
      t.child = null;
      do
        t = e.sibling, e.sibling = null, e = t;
      while (e !== null);
    }
  }
  function Rs(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          pn = l, Ng(
            l,
            e
          );
        }
      Rg(e);
    }
    if (e.subtreeFlags & 10256)
      for (e = e.child; e !== null; )
        Dg(e), e = e.sibling;
  }
  function Dg(e) {
    switch (e.tag) {
      case 0:
      case 11:
      case 15:
        Rs(e), e.flags & 2048 && vl(9, e, e.return);
        break;
      case 3:
        Rs(e);
        break;
      case 12:
        Rs(e);
        break;
      case 22:
        var t = e.stateNode;
        e.memoizedState !== null && t._visibility & 2 && (e.return === null || e.return.tag !== 13) ? (t._visibility &= -3, mc(e)) : Rs(e);
        break;
      default:
        Rs(e);
    }
  }
  function mc(e) {
    var t = e.deletions;
    if ((e.flags & 16) !== 0) {
      if (t !== null)
        for (var n = 0; n < t.length; n++) {
          var l = t[n];
          pn = l, Ng(
            l,
            e
          );
        }
      Rg(e);
    }
    for (e = e.child; e !== null; ) {
      switch (t = e, t.tag) {
        case 0:
        case 11:
        case 15:
          vl(8, t, t.return), mc(t);
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
  function Ng(e, t) {
    for (; pn !== null; ) {
      var n = pn;
      switch (n.tag) {
        case 0:
        case 11:
        case 15:
          vl(8, n, t);
          break;
        case 23:
        case 22:
          if (n.memoizedState !== null && n.memoizedState.cachePool !== null) {
            var l = n.memoizedState.cachePool.pool;
            l != null && l.refCount++;
          }
          break;
        case 24:
          Zn(n.memoizedState.cache);
      }
      if (l = n.child, l !== null) l.return = n, pn = l;
      else
        e: for (n = e; pn !== null; ) {
          l = pn;
          var u = l.sibling, f = l.return;
          if (Eg(l), l === n) {
            pn = null;
            break e;
          }
          if (u !== null) {
            u.return = f, pn = u;
            break e;
          }
          pn = f;
        }
    }
  }
  var F1 = {
    getCacheForType: function(e) {
      var t = Zt(kt), n = t.data.get(e);
      return n === void 0 && (n = e(), t.data.set(e, n)), n;
    },
    cacheSignal: function() {
      return Zt(kt).controller.signal;
    }
  }, Q1 = typeof WeakMap == "function" ? WeakMap : Map, ut = 0, xt = null, Qe = null, Je = 0, bt = 0, ra = null, yl = !1, Jr = !1, Kd = !1, Di = 0, Gt = 0, bl = 0, cr = 0, Jd = 0, oa = 0, Wr = 0, Ds = null, Pn = null, Wd = !1, gc = 0, jg = 0, vc = 1 / 0, yc = null, _l = null, ln = 0, Sl = null, Pr = null, Ni = 0, Pd = 0, eh = null, zg = null, Ns = 0, th = null;
  function sa() {
    return (ut & 2) !== 0 && Je !== 0 ? Je & -Je : $.T !== null ? oh() : mu();
  }
  function Lg() {
    if (oa === 0)
      if ((Je & 536870912) === 0 || Ge) {
        var e = _r;
        _r <<= 1, (_r & 3932160) === 0 && (_r = 262144), oa = e;
      } else oa = 536870912;
    return e = Nt.current, e !== null && (e.flags |= 32), oa;
  }
  function ea(e, t, n) {
    (e === xt && (bt === 2 || bt === 9) || e.cancelPendingCommit !== null) && (eo(e, 0), El(
      e,
      Je,
      oa,
      !1
    )), Ul(e, n), ((ut & 2) === 0 || e !== xt) && (e === xt && ((ut & 2) === 0 && (cr |= n), Gt === 4 && El(
      e,
      Je,
      oa,
      !1
    )), ri(e));
  }
  function Hg(e, t, n) {
    if ((ut & 6) !== 0) throw Error(o(327));
    var l = !n && (t & 127) === 0 && (t & e.expiredLanes) === 0 || Yi(e, t), u = l ? J1(e, t) : ah(e, t, !0), f = l;
    do {
      if (u === 0) {
        Jr && !l && El(e, t, 0, !1);
        break;
      } else {
        if (n = e.current.alternate, f && !Z1(n)) {
          u = ah(e, t, !1), f = !1;
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
              u = Ds;
              var w = _.current.memoizedState.isDehydrated;
              if (w && (eo(_, g).flags |= 256), g = ah(
                _,
                g,
                !1
              ), g !== 2) {
                if (Kd && !w) {
                  _.errorRecoveryDisabledLanes |= f, cr |= f, u = 4;
                  break e;
                }
                f = Pn, Pn = u, f !== null && (Pn === null ? Pn = f : Pn.push.apply(
                  Pn,
                  f
                ));
              }
              u = g;
            }
            if (f = !1, u !== 2) continue;
          }
        }
        if (u === 1) {
          eo(e, 0), El(e, t, 0, !0);
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
              El(
                l,
                t,
                oa,
                !yl
              );
              break e;
            case 2:
              Pn = null;
              break;
            case 3:
            case 5:
              break;
            default:
              throw Error(o(329));
          }
          if ((t & 62914560) === t && (u = gc + 300 - rn(), 10 < u)) {
            if (El(
              l,
              t,
              oa,
              !yl
            ), Vl(l, 0, !0) !== 0) break e;
            Ni = t, l.timeoutHandle = hv(
              Vg.bind(
                null,
                l,
                n,
                Pn,
                yc,
                Wd,
                t,
                oa,
                cr,
                Wr,
                yl,
                f,
                "Throttled",
                -0,
                0
              ),
              u
            );
            break e;
          }
          Vg(
            l,
            n,
            Pn,
            yc,
            Wd,
            t,
            oa,
            cr,
            Wr,
            yl,
            f,
            null,
            -0,
            0
          );
        }
      }
      break;
    } while (!0);
    ri(e);
  }
  function Vg(e, t, n, l, u, f, g, _, w, Y, K, W, G, F) {
    if (e.timeoutHandle = -1, W = t.subtreeFlags, W & 8192 || (W & 16785408) === 16785408) {
      W = {
        stylesheets: null,
        count: 0,
        imgCount: 0,
        imgBytes: 0,
        suspenseyImages: [],
        waitingForImages: !0,
        waitingForViewTransition: !1,
        unsuspend: sn
      }, Mg(
        t,
        f,
        W
      );
      var pe = (f & 62914560) === f ? gc - rn() : (f & 4194048) === f ? jg - rn() : 0;
      if (pe = j_(
        W,
        pe
      ), pe !== null) {
        Ni = f, e.cancelPendingCommit = pe(
          Xg.bind(
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
            W,
            null,
            G,
            F
          )
        ), El(e, f, g, !Y);
        return;
      }
    }
    Xg(
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
  function Z1(e) {
    for (var t = e; ; ) {
      var n = t.tag;
      if ((n === 0 || n === 11 || n === 15) && t.flags & 16384 && (n = t.updateQueue, n !== null && (n = n.stores, n !== null)))
        for (var l = 0; l < n.length; l++) {
          var u = n[l], f = u.getSnapshot;
          u = u.value;
          try {
            if (!yn(f(), u)) return !1;
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
  function El(e, t, n, l) {
    t &= ~Jd, t &= ~cr, e.suspendedLanes |= t, e.pingedLanes &= ~t, l && (e.warmLanes |= t), l = e.expirationTimes;
    for (var u = t; 0 < u; ) {
      var f = 31 - Dn(u), g = 1 << f;
      l[f] = -1, u &= ~g;
    }
    n !== 0 && Xi(e, n, t);
  }
  function bc() {
    return (ut & 6) === 0 ? (js(0), !1) : !0;
  }
  function nh() {
    if (Qe !== null) {
      if (bt === 0)
        var e = Qe.return;
      else
        e = Qe, za = yi = null, Xr(e), re = null, ce = 0, e = Qe;
      for (; e !== null; )
        pg(e.alternate, e), e = e.return;
      Qe = null;
    }
  }
  function eo(e, t) {
    var n = e.timeoutHandle;
    n !== -1 && (e.timeoutHandle = -1, m_(n)), n = e.cancelPendingCommit, n !== null && (e.cancelPendingCommit = null, n()), Ni = 0, nh(), xt = e, Qe = n = Ra(e.current, null), Je = t, bt = 0, ra = null, yl = !1, Jr = Yi(e, t), Kd = !1, Wr = oa = Jd = cr = bl = Gt = 0, Pn = Ds = null, Wd = !1, (t & 8) !== 0 && (t |= t & 32);
    var l = e.entangledLanes;
    if (l !== 0)
      for (e = e.entanglements, l &= t; 0 < l; ) {
        var u = 31 - Dn(l), f = 1 << u;
        t |= e[u], l &= ~f;
      }
    return Di = t, Hr(), n;
  }
  function Ug(e, t) {
    je = null, $.H = Cs, t === ml || t === b ? (t = Q(), bt = 3) : t === _i ? (t = Q(), bt = 4) : bt = t === zd ? 8 : t !== null && typeof t == "object" && typeof t.then == "function" ? 6 : 1, ra = t, Qe === null && (Gt = 1, sc(
      e,
      fn(t, e.current)
    ));
  }
  function Bg() {
    var e = Nt.current;
    return e === null ? !0 : (Je & 4194048) === Je ? Vt === null : (Je & 62914560) === Je || (Je & 536870912) !== 0 ? e === Vt : !1;
  }
  function $g() {
    var e = $.H;
    return $.H = Cs, e === null ? Cs : e;
  }
  function kg() {
    var e = $.A;
    return $.A = F1, e;
  }
  function _c() {
    Gt = 4, yl || (Je & 4194048) !== Je && Nt.current !== null || (Jr = !0), (bl & 134217727) === 0 && (cr & 134217727) === 0 || xt === null || El(
      xt,
      Je,
      oa,
      !1
    );
  }
  function ah(e, t, n) {
    var l = ut;
    ut |= 2;
    var u = $g(), f = kg();
    (xt !== e || Je !== t) && (yc = null, eo(e, t)), t = !1;
    var g = Gt;
    e: do
      try {
        if (bt !== 0 && Qe !== null) {
          var _ = Qe, w = ra;
          switch (bt) {
            case 8:
              nh(), g = 6;
              break e;
            case 3:
            case 2:
            case 9:
            case 6:
              Nt.current === null && (t = !0);
              var Y = bt;
              if (bt = 0, ra = null, to(e, _, w, Y), n && Jr) {
                g = 0;
                break e;
              }
              break;
            default:
              Y = bt, bt = 0, ra = null, to(e, _, w, Y);
          }
        }
        K1(), g = Gt;
        break;
      } catch (K) {
        Ug(e, K);
      }
    while (!0);
    return t && e.shellSuspendCounter++, za = yi = null, ut = l, $.H = u, $.A = f, Qe === null && (xt = null, Je = 0, Hr()), g;
  }
  function K1() {
    for (; Qe !== null; ) qg(Qe);
  }
  function J1(e, t) {
    var n = ut;
    ut |= 2;
    var l = $g(), u = kg();
    xt !== e || Je !== t ? (yc = null, vc = rn() + 500, eo(e, t)) : Jr = Yi(
      e,
      t
    );
    e: do
      try {
        if (bt !== 0 && Qe !== null) {
          t = Qe;
          var f = ra;
          t: switch (bt) {
            case 1:
              bt = 0, ra = null, to(e, t, f, 1);
              break;
            case 2:
            case 9:
              if (p(f)) {
                bt = 0, ra = null, Yg(t);
                break;
              }
              t = function() {
                bt !== 2 && bt !== 9 || xt !== e || (bt = 7), ri(e);
              }, f.then(t, t);
              break e;
            case 3:
              bt = 7;
              break e;
            case 4:
              bt = 5;
              break e;
            case 7:
              p(f) ? (bt = 0, ra = null, Yg(t)) : (bt = 0, ra = null, to(e, t, f, 7));
              break;
            case 5:
              var g = null;
              switch (Qe.tag) {
                case 26:
                  g = Qe.memoizedState;
                case 5:
                case 27:
                  var _ = Qe;
                  if (g ? wv(g) : _.stateNode.complete) {
                    bt = 0, ra = null;
                    var w = _.sibling;
                    if (w !== null) Qe = w;
                    else {
                      var Y = _.return;
                      Y !== null ? (Qe = Y, Sc(Y)) : Qe = null;
                    }
                    break t;
                  }
              }
              bt = 0, ra = null, to(e, t, f, 5);
              break;
            case 6:
              bt = 0, ra = null, to(e, t, f, 6);
              break;
            case 8:
              nh(), Gt = 6;
              break e;
            default:
              throw Error(o(462));
          }
        }
        W1();
        break;
      } catch (K) {
        Ug(e, K);
      }
    while (!0);
    return za = yi = null, $.H = l, $.A = u, ut = n, Qe !== null ? 0 : (xt = null, Je = 0, Hr(), Gt);
  }
  function W1() {
    for (; Qe !== null && !To(); )
      qg(Qe);
  }
  function qg(e) {
    var t = dg(e.alternate, e, Di);
    e.memoizedProps = e.pendingProps, t === null ? Sc(e) : Qe = t;
  }
  function Yg(e) {
    var t = e, n = t.alternate;
    switch (t.tag) {
      case 15:
      case 0:
        t = rg(
          n,
          t,
          t.pendingProps,
          t.type,
          void 0,
          Je
        );
        break;
      case 11:
        t = rg(
          n,
          t,
          t.pendingProps,
          t.type.render,
          t.ref,
          Je
        );
        break;
      case 5:
        Xr(t);
      default:
        pg(n, t), t = Qe = Ku(t, Di), t = dg(n, t, Di);
    }
    e.memoizedProps = e.pendingProps, t === null ? Sc(e) : Qe = t;
  }
  function to(e, t, n, l) {
    za = yi = null, Xr(t), re = null, ce = 0;
    var u = t.return;
    try {
      if ($1(
        e,
        u,
        t,
        n,
        Je
      )) {
        Gt = 1, sc(
          e,
          fn(n, e.current)
        ), Qe = null;
        return;
      }
    } catch (f) {
      if (u !== null) throw Qe = u, f;
      Gt = 1, sc(
        e,
        fn(n, e.current)
      ), Qe = null;
      return;
    }
    t.flags & 32768 ? (Ge || l === 1 ? e = !0 : Jr || (Je & 536870912) !== 0 ? e = !1 : (yl = e = !0, (l === 2 || l === 9 || l === 3 || l === 6) && (l = Nt.current, l !== null && l.tag === 13 && (l.flags |= 16384))), Gg(t, e)) : Sc(t);
  }
  function Sc(e) {
    var t = e;
    do {
      if ((t.flags & 32768) !== 0) {
        Gg(
          t,
          yl
        );
        return;
      }
      e = t.return;
      var n = Y1(
        t.alternate,
        t,
        Di
      );
      if (n !== null) {
        Qe = n;
        return;
      }
      if (t = t.sibling, t !== null) {
        Qe = t;
        return;
      }
      Qe = t = e;
    } while (t !== null);
    Gt === 0 && (Gt = 5);
  }
  function Gg(e, t) {
    do {
      var n = G1(e.alternate, e);
      if (n !== null) {
        n.flags &= 32767, Qe = n;
        return;
      }
      if (n = e.return, n !== null && (n.flags |= 32768, n.subtreeFlags = 0, n.deletions = null), !t && (e = e.sibling, e !== null)) {
        Qe = e;
        return;
      }
      Qe = e = n;
    } while (e !== null);
    Gt = 6, Qe = null;
  }
  function Xg(e, t, n, l, u, f, g, _, w) {
    e.cancelPendingCommit = null;
    do
      Ec();
    while (ln !== 0);
    if ((ut & 6) !== 0) throw Error(o(327));
    if (t !== null) {
      if (t === e.current) throw Error(o(177));
      if (f = t.lanes | t.childLanes, f |= ls, Gi(
        e,
        n,
        f,
        g,
        _,
        w
      ), e === xt && (Qe = xt = null, Je = 0), Pr = t, Sl = e, Ni = n, Pd = f, eh = u, zg = l, (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? (e.callbackNode = null, e.callbackPriority = 0, n_(di, function() {
        return Kg(), null;
      })) : (e.callbackNode = null, e.callbackPriority = 0), l = (t.flags & 13878) !== 0, (t.subtreeFlags & 13878) !== 0 || l) {
        l = $.T, $.T = null, u = ne.p, ne.p = 2, g = ut, ut |= 4;
        try {
          X1(e, t, n);
        } finally {
          ut = g, ne.p = u, $.T = l;
        }
      }
      ln = 1, Ig(), Fg(), Qg();
    }
  }
  function Ig() {
    if (ln === 1) {
      ln = 0;
      var e = Sl, t = Pr, n = (t.flags & 13878) !== 0;
      if ((t.subtreeFlags & 13878) !== 0 || n) {
        n = $.T, $.T = null;
        var l = ne.p;
        ne.p = 2;
        var u = ut;
        ut |= 4;
        try {
          Tg(t, e);
          var f = mh, g = Ko(e.containerInfo), _ = f.focusedElem, w = f.selectionRange;
          if (g !== _ && _ && _.ownerDocument && Zo(
            _.ownerDocument.documentElement,
            _
          )) {
            if (w !== null && Jo(_)) {
              var Y = w.start, K = w.end;
              if (K === void 0 && (K = Y), "selectionStart" in _)
                _.selectionStart = Y, _.selectionEnd = Math.min(
                  K,
                  _.value.length
                );
              else {
                var W = _.ownerDocument || document, G = W && W.defaultView || window;
                if (G.getSelection) {
                  var F = G.getSelection(), pe = _.textContent.length, Te = Math.min(w.start, pe), Et = w.end === void 0 ? Te : Math.min(w.end, pe);
                  !F.extend && Te > Et && (g = Et, Et = Te, Te = g);
                  var H = Yu(
                    _,
                    Te
                  ), M = Yu(
                    _,
                    Et
                  );
                  if (H && M && (F.rangeCount !== 1 || F.anchorNode !== H.node || F.anchorOffset !== H.offset || F.focusNode !== M.node || F.focusOffset !== M.offset)) {
                    var q = W.createRange();
                    q.setStart(H.node, H.offset), F.removeAllRanges(), Te > Et ? (F.addRange(q), F.extend(M.node, M.offset)) : (q.setEnd(M.node, M.offset), F.addRange(q));
                  }
                }
              }
            }
            for (W = [], F = _; F = F.parentNode; )
              F.nodeType === 1 && W.push({
                element: F,
                left: F.scrollLeft,
                top: F.scrollTop
              });
            for (typeof _.focus == "function" && _.focus(), _ = 0; _ < W.length; _++) {
              var J = W[_];
              J.element.scrollLeft = J.left, J.element.scrollTop = J.top;
            }
          }
          zc = !!ph, mh = ph = null;
        } finally {
          ut = u, ne.p = l, $.T = n;
        }
      }
      e.current = t, ln = 2;
    }
  }
  function Fg() {
    if (ln === 2) {
      ln = 0;
      var e = Sl, t = Pr, n = (t.flags & 8772) !== 0;
      if ((t.subtreeFlags & 8772) !== 0 || n) {
        n = $.T, $.T = null;
        var l = ne.p;
        ne.p = 2;
        var u = ut;
        ut |= 4;
        try {
          Sg(e, t.alternate, t);
        } finally {
          ut = u, ne.p = l, $.T = n;
        }
      }
      ln = 3;
    }
  }
  function Qg() {
    if (ln === 4 || ln === 3) {
      ln = 0, Ao();
      var e = Sl, t = Pr, n = Ni, l = zg;
      (t.subtreeFlags & 10256) !== 0 || (t.flags & 10256) !== 0 ? ln = 5 : (ln = 0, Pr = Sl = null, Zg(e, e.pendingLanes));
      var u = e.pendingLanes;
      if (u === 0 && (_l = null), Ro(n), t = t.stateNode, Rn && typeof Rn.onCommitFiberRoot == "function")
        try {
          Rn.onCommitFiberRoot(
            Ya,
            t,
            void 0,
            (t.current.flags & 128) === 128
          );
        } catch {
        }
      if (l !== null) {
        t = $.T, u = ne.p, ne.p = 2, $.T = null;
        try {
          for (var f = e.onRecoverableError, g = 0; g < l.length; g++) {
            var _ = l[g];
            f(_.value, {
              componentStack: _.stack
            });
          }
        } finally {
          $.T = t, ne.p = u;
        }
      }
      (Ni & 3) !== 0 && Ec(), ri(e), u = e.pendingLanes, (n & 261930) !== 0 && (u & 42) !== 0 ? e === th ? Ns++ : (Ns = 0, th = e) : Ns = 0, js(0);
    }
  }
  function Zg(e, t) {
    (e.pooledCacheLanes &= t) === 0 && (t = e.pooledCache, t != null && (e.pooledCache = null, Zn(t)));
  }
  function Ec() {
    return Ig(), Fg(), Qg(), Kg();
  }
  function Kg() {
    if (ln !== 5) return !1;
    var e = Sl, t = Pd;
    Pd = 0;
    var n = Ro(Ni), l = $.T, u = ne.p;
    try {
      ne.p = 32 > n ? 32 : n, $.T = null, n = eh, eh = null;
      var f = Sl, g = Ni;
      if (ln = 0, Pr = Sl = null, Ni = 0, (ut & 6) !== 0) throw Error(o(331));
      var _ = ut;
      if (ut |= 4, Dg(f.current), wg(
        f,
        f.current,
        g,
        n
      ), ut = _, js(0, !1), Rn && typeof Rn.onPostCommitFiberRoot == "function")
        try {
          Rn.onPostCommitFiberRoot(Ya, f);
        } catch {
        }
      return !0;
    } finally {
      ne.p = u, $.T = l, Zg(e, t);
    }
  }
  function Jg(e, t, n) {
    t = fn(n, t), t = jd(e.stateNode, t, 2), e = qe(e, t, 2), e !== null && (Ul(e, 2), ri(e));
  }
  function _t(e, t, n) {
    if (e.tag === 3)
      Jg(e, e, n);
    else
      for (; t !== null; ) {
        if (t.tag === 3) {
          Jg(
            t,
            e,
            n
          );
          break;
        } else if (t.tag === 1) {
          var l = t.stateNode;
          if (typeof t.type.getDerivedStateFromError == "function" || typeof l.componentDidCatch == "function" && (_l === null || !_l.has(l))) {
            e = fn(n, e), n = Wm(2), l = qe(t, n, 2), l !== null && (Pm(
              n,
              l,
              t,
              e
            ), Ul(l, 2), ri(l));
            break;
          }
        }
        t = t.return;
      }
  }
  function ih(e, t, n) {
    var l = e.pingCache;
    if (l === null) {
      l = e.pingCache = new Q1();
      var u = /* @__PURE__ */ new Set();
      l.set(t, u);
    } else
      u = l.get(t), u === void 0 && (u = /* @__PURE__ */ new Set(), l.set(t, u));
    u.has(n) || (Kd = !0, u.add(n), e = P1.bind(null, e, t, n), t.then(e, e));
  }
  function P1(e, t, n) {
    var l = e.pingCache;
    l !== null && l.delete(t), e.pingedLanes |= e.suspendedLanes & n, e.warmLanes &= ~n, xt === e && (Je & n) === n && (Gt === 4 || Gt === 3 && (Je & 62914560) === Je && 300 > rn() - gc ? (ut & 2) === 0 && eo(e, 0) : Jd |= n, Wr === Je && (Wr = 0)), ri(e);
  }
  function Wg(e, t) {
    t === 0 && (t = du()), e = bn(e, t), e !== null && (Ul(e, t), ri(e));
  }
  function e_(e) {
    var t = e.memoizedState, n = 0;
    t !== null && (n = t.retryLane), Wg(e, n);
  }
  function t_(e, t) {
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
    l !== null && l.delete(t), Wg(e, n);
  }
  function n_(e, t) {
    return zl(e, t);
  }
  var Cc = null, no = null, lh = !1, xc = !1, rh = !1, Cl = 0;
  function ri(e) {
    e !== no && e.next === null && (no === null ? Cc = no = e : no = no.next = e), xc = !0, lh || (lh = !0, i_());
  }
  function js(e, t) {
    if (!rh && xc) {
      rh = !0;
      do
        for (var n = !1, l = Cc; l !== null; ) {
          if (e !== 0) {
            var u = l.pendingLanes;
            if (u === 0) var f = 0;
            else {
              var g = l.suspendedLanes, _ = l.pingedLanes;
              f = (1 << 31 - Dn(42 | e) + 1) - 1, f &= u & ~(g & ~_), f = f & 201326741 ? f & 201326741 | 1 : f ? f | 2 : 0;
            }
            f !== 0 && (n = !0, nv(l, f));
          } else
            f = Je, f = Vl(
              l,
              l === xt ? f : 0,
              l.cancelPendingCommit !== null || l.timeoutHandle !== -1
            ), (f & 3) === 0 || Yi(l, f) || (n = !0, nv(l, f));
          l = l.next;
        }
      while (n);
      rh = !1;
    }
  }
  function a_() {
    Pg();
  }
  function Pg() {
    xc = lh = !1;
    var e = 0;
    Cl !== 0 && p_() && (e = Cl);
    for (var t = rn(), n = null, l = Cc; l !== null; ) {
      var u = l.next, f = ev(l, t);
      f === 0 ? (l.next = null, n === null ? Cc = u : n.next = u, u === null && (no = n)) : (n = l, (e !== 0 || (f & 3) !== 0) && (xc = !0)), l = u;
    }
    ln !== 0 && ln !== 5 || js(e), Cl !== 0 && (Cl = 0);
  }
  function ev(e, t) {
    for (var n = e.suspendedLanes, l = e.pingedLanes, u = e.expirationTimes, f = e.pendingLanes & -62914561; 0 < f; ) {
      var g = 31 - Dn(f), _ = 1 << g, w = u[g];
      w === -1 ? ((_ & n) === 0 || (_ & l) !== 0) && (u[g] = Pf(_, t)) : w <= t && (e.expiredLanes |= _), f &= ~_;
    }
    if (t = xt, n = Je, n = Vl(
      e,
      e === t ? n : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l = e.callbackNode, n === 0 || e === t && (bt === 2 || bt === 9) || e.cancelPendingCommit !== null)
      return l !== null && l !== null && Ll(l), e.callbackNode = null, e.callbackPriority = 0;
    if ((n & 3) === 0 || Yi(e, n)) {
      if (t = n & -n, t === e.callbackPriority) return t;
      switch (l !== null && Ll(l), Ro(n)) {
        case 2:
        case 8:
          n = ca;
          break;
        case 32:
          n = di;
          break;
        case 268435456:
          n = $i;
          break;
        default:
          n = di;
      }
      return l = tv.bind(null, e), n = zl(n, l), e.callbackPriority = t, e.callbackNode = n, t;
    }
    return l !== null && l !== null && Ll(l), e.callbackPriority = 2, e.callbackNode = null, 2;
  }
  function tv(e, t) {
    if (ln !== 0 && ln !== 5)
      return e.callbackNode = null, e.callbackPriority = 0, null;
    var n = e.callbackNode;
    if (Ec() && e.callbackNode !== n)
      return null;
    var l = Je;
    return l = Vl(
      e,
      e === xt ? l : 0,
      e.cancelPendingCommit !== null || e.timeoutHandle !== -1
    ), l === 0 ? null : (Hg(e, l, t), ev(e, rn()), e.callbackNode != null && e.callbackNode === n ? tv.bind(null, e) : null);
  }
  function nv(e, t) {
    if (Ec()) return null;
    Hg(e, t, !0);
  }
  function i_() {
    g_(function() {
      (ut & 6) !== 0 ? zl(
        Ue,
        a_
      ) : Pg();
    });
  }
  function oh() {
    if (Cl === 0) {
      var e = dl;
      e === 0 && (e = br, br <<= 1, (br & 261888) === 0 && (br = 256)), Cl = e;
    }
    return Cl;
  }
  function av(e) {
    return e == null || typeof e == "symbol" || typeof e == "boolean" ? null : typeof e == "function" ? e : Tr("" + e);
  }
  function iv(e, t) {
    var n = t.ownerDocument.createElement("input");
    return n.name = t.name, n.value = t.value, e.id && n.setAttribute("form", e.id), t.parentNode.insertBefore(n, t), e = new FormData(e), n.parentNode.removeChild(n), e;
  }
  function l_(e, t, n, l, u) {
    if (t === "submit" && n && n.stateNode === u) {
      var f = av(
        (u[Cn] || null).action
      ), g = l.submitter;
      g && (t = (t = g[Cn] || null) ? av(t.formAction) : g.getAttribute("formAction"), t !== null && (f = t, g = null));
      var _ = new Pi(
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
                if (Cl !== 0) {
                  var w = g ? iv(u, g) : new FormData(u);
                  Ad(
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
                typeof f == "function" && (_.preventDefault(), w = g ? iv(u, g) : new FormData(u), Ad(
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
  for (var sh = 0; sh < is.length; sh++) {
    var uh = is[sh], r_ = uh.toLowerCase(), o_ = uh[0].toUpperCase() + uh.slice(1);
    la(
      r_,
      "on" + o_
    );
  }
  la(va, "onAnimationEnd"), la(ns, "onAnimationIteration"), la(Xu, "onAnimationStart"), la("dblclick", "onDoubleClick"), la("focusin", "onFocus"), la("focusout", "onBlur"), la(Iu, "onTransitionRun"), la(Fu, "onTransitionStart"), la(Qu, "onTransitionCancel"), la(as, "onTransitionEnd"), hi("onMouseEnter", ["mouseout", "mouseover"]), hi("onMouseLeave", ["mouseout", "mouseover"]), hi("onPointerEnter", ["pointerout", "pointerover"]), hi("onPointerLeave", ["pointerout", "pointerover"]), Xn(
    "onChange",
    "change click focusin focusout input keydown keyup selectionchange".split(" ")
  ), Xn(
    "onSelect",
    "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
      " "
    )
  ), Xn("onBeforeInput", [
    "compositionend",
    "keypress",
    "textInput",
    "paste"
  ]), Xn(
    "onCompositionEnd",
    "compositionend focusout keydown keypress keyup mousedown".split(" ")
  ), Xn(
    "onCompositionStart",
    "compositionstart focusout keydown keypress keyup mousedown".split(" ")
  ), Xn(
    "onCompositionUpdate",
    "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
  );
  var zs = "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
    " "
  ), s_ = new Set(
    "beforetoggle cancel close invalid load scroll scrollend toggle".split(" ").concat(zs)
  );
  function lv(e, t) {
    t = (t & 4) !== 0;
    for (var n = 0; n < e.length; n++) {
      var l = e[n], u = l.event;
      l = l.listeners;
      e: {
        var f = void 0;
        if (t)
          for (var g = l.length - 1; 0 <= g; g--) {
            var _ = l[g], w = _.instance, Y = _.currentTarget;
            if (_ = _.listener, w !== f && u.isPropagationStopped())
              break e;
            f = _, u.currentTarget = Y;
            try {
              f(u);
            } catch (K) {
              Kl(K);
            }
            u.currentTarget = null, f = w;
          }
        else
          for (g = 0; g < l.length; g++) {
            if (_ = l[g], w = _.instance, Y = _.currentTarget, _ = _.listener, w !== f && u.isPropagationStopped())
              break e;
            f = _, u.currentTarget = Y;
            try {
              f(u);
            } catch (K) {
              Kl(K);
            }
            u.currentTarget = null, f = w;
          }
      }
    }
  }
  function Ze(e, t) {
    var n = t[Do];
    n === void 0 && (n = t[Do] = /* @__PURE__ */ new Set());
    var l = e + "__bubble";
    n.has(l) || (rv(t, e, 2, !1), n.add(l));
  }
  function ch(e, t, n) {
    var l = 0;
    t && (l |= 4), rv(
      n,
      e,
      l,
      t
    );
  }
  var Oc = "_reactListening" + Math.random().toString(36).slice(2);
  function fh(e) {
    if (!e[Oc]) {
      e[Oc] = !0, No.forEach(function(n) {
        n !== "selectionchange" && (s_.has(n) || ch(n, !1, e), ch(n, !0, e));
      });
      var t = e.nodeType === 9 ? e : e.ownerDocument;
      t === null || t[Oc] || (t[Oc] = !0, ch("selectionchange", !1, t));
    }
  }
  function rv(e, t, n, l) {
    switch (Lv(t)) {
      case 2:
        var u = H_;
        break;
      case 8:
        u = V_;
        break;
      default:
        u = Th;
    }
    n = u.bind(
      null,
      t,
      n,
      e
    ), u = void 0, !$o || t !== "touchstart" && t !== "touchmove" && t !== "wheel" || (u = !0), l ? u !== void 0 ? e.addEventListener(t, n, {
      capture: !0,
      passive: u
    }) : e.addEventListener(t, n, !0) : u !== void 0 ? e.addEventListener(t, n, {
      passive: u
    }) : e.addEventListener(t, n, !1);
  }
  function dh(e, t, n, l, u) {
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
            if (g = $t(_), g === null) return;
            if (w = g.tag, w === 5 || w === 6 || w === 26 || w === 27) {
              l = f = g;
              continue e;
            }
            _ = _.parentNode;
          }
        }
        l = l.return;
      }
    Bo(function() {
      var Y = f, K = Ar(n), W = [];
      e: {
        var G = Zu.get(e);
        if (G !== void 0) {
          var F = Pi, pe = e;
          switch (e) {
            case "keypress":
              if (mi(n) === 0) break e;
            case "keydown":
            case "keyup":
              F = wu;
              break;
            case "focusin":
              pe = "focus", F = Dr;
              break;
            case "focusout":
              pe = "blur", F = Dr;
              break;
            case "beforeblur":
            case "afterblur":
              F = Dr;
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
              F = _u;
              break;
            case "drag":
            case "dragend":
            case "dragenter":
            case "dragexit":
            case "dragleave":
            case "dragover":
            case "dragstart":
            case "drop":
              F = Eu;
              break;
            case "touchcancel":
            case "touchend":
            case "touchmove":
            case "touchstart":
              F = Mu;
              break;
            case va:
            case ns:
            case Xu:
              F = qo;
              break;
            case as:
              F = od;
              break;
            case "scroll":
            case "scrollend":
              F = Gl;
              break;
            case "wheel":
              F = ud;
              break;
            case "copy":
            case "cut":
            case "paste":
              F = td;
              break;
            case "gotpointercapture":
            case "lostpointercapture":
            case "pointercancel":
            case "pointerdown":
            case "pointermove":
            case "pointerout":
            case "pointerover":
            case "pointerup":
              F = jr;
              break;
            case "toggle":
            case "beforetoggle":
              F = Du;
          }
          var Te = (t & 4) !== 0, Et = !Te && (e === "scroll" || e === "scrollend"), H = Te ? G !== null ? G + "Capture" : null : G;
          Te = [];
          for (var M = Y, q; M !== null; ) {
            var J = M;
            if (q = J.stateNode, J = J.tag, J !== 5 && J !== 26 && J !== 27 || q === null || H === null || (J = Zi(M, H), J != null && Te.push(
              Ls(M, J, q)
            )), Et) break;
            M = M.return;
          }
          0 < Te.length && (G = new F(
            G,
            pe,
            null,
            n,
            K
          ), W.push({ event: G, listeners: Te }));
        }
      }
      if ((t & 7) === 0) {
        e: {
          if (G = e === "mouseover" || e === "pointerover", F = e === "mouseout" || e === "pointerout", G && n !== Fi && (pe = n.relatedTarget || n.fromElement) && ($t(pe) || pe[Ga]))
            break e;
          if ((F || G) && (G = K.window === K ? K : (G = K.ownerDocument) ? G.defaultView || G.parentWindow : window, F ? (pe = n.relatedTarget || n.toElement, F = Y, pe = pe ? $t(pe) : null, pe !== null && (Et = d(pe), Te = pe.tag, pe !== Et || Te !== 5 && Te !== 27 && Te !== 6) && (pe = null)) : (F = null, pe = Y), F !== pe)) {
            if (Te = _u, J = "onMouseLeave", H = "onMouseEnter", M = "mouse", (e === "pointerout" || e === "pointerover") && (Te = jr, J = "onPointerLeave", H = "onPointerEnter", M = "pointer"), Et = F == null ? G : ha(F), q = pe == null ? G : ha(pe), G = new Te(
              J,
              M + "leave",
              F,
              n,
              K
            ), G.target = Et, G.relatedTarget = q, J = null, $t(K) === Y && (Te = new Te(
              H,
              M + "enter",
              pe,
              n,
              K
            ), Te.target = q, Te.relatedTarget = Et, J = Te), Et = J, F && pe)
              t: {
                for (Te = u_, H = F, M = pe, q = 0, J = H; J; J = Te(J))
                  q++;
                J = 0;
                for (var be = M; be; be = Te(be))
                  J++;
                for (; 0 < q - J; )
                  H = Te(H), q--;
                for (; 0 < J - q; )
                  M = Te(M), J--;
                for (; q--; ) {
                  if (H === M || M !== null && H === M.alternate) {
                    Te = H;
                    break t;
                  }
                  H = Te(H), M = Te(M);
                }
                Te = null;
              }
            else Te = null;
            F !== null && ov(
              W,
              G,
              F,
              Te,
              !1
            ), pe !== null && Et !== null && ov(
              W,
              Et,
              pe,
              Te,
              !0
            );
          }
        }
        e: {
          if (G = Y ? ha(Y) : window, F = G.nodeName && G.nodeName.toLowerCase(), F === "select" || F === "input" && G.type === "file")
            var ot = Xo;
          else if (In(G))
            if (Ql)
              ot = Lr;
            else {
              ot = Bu;
              var me = Uu;
            }
          else
            F = G.nodeName, !F || F.toLowerCase() !== "input" || G.type !== "checkbox" && G.type !== "radio" ? Y && Yl(Y.elementType) && (ot = Xo) : ot = $u;
          if (ot && (ot = ot(e, Y))) {
            Go(
              W,
              ot,
              n,
              K
            );
            break e;
          }
          me && me(e, G, Y), e === "focusout" && Y && G.type === "number" && Y.memoizedProps.value != null && kl(G, "number", G.value);
        }
        switch (me = Y ? ha(Y) : window, e) {
          case "focusin":
            (In(me) || me.contentEditable === "true") && (ll = me, Wo = Y, Zl = null);
            break;
          case "focusout":
            Zl = Wo = ll = null;
            break;
          case "mousedown":
            Po = !0;
            break;
          case "contextmenu":
          case "mouseup":
          case "dragend":
            Po = !1, es(W, n, K);
            break;
          case "selectionchange":
            if (gd) break;
          case "keydown":
          case "keyup":
            es(W, n, K);
        }
        var ke;
        if (Fa)
          e: {
            switch (e) {
              case "compositionstart":
                var We = "onCompositionStart";
                break e;
              case "compositionend":
                We = "onCompositionEnd";
                break e;
              case "compositionupdate":
                We = "onCompositionUpdate";
                break e;
            }
            We = void 0;
          }
        else
          nl ? zu(e, n) && (We = "onCompositionEnd") : e === "keydown" && n.keyCode === 229 && (We = "onCompositionStart");
        We && (Fl && n.locale !== "ko" && (nl || We !== "onCompositionStart" ? We === "onCompositionEnd" && nl && (ke = bu()) : (ga = K, Ji = "value" in ga ? ga.value : ga.textContent, nl = !0)), me = Tc(Y, We), 0 < me.length && (We = new Yo(
          We,
          e,
          null,
          n,
          K
        ), W.push({ event: We, listeners: me }), ke ? We.data = ke : (ke = Lu(n), ke !== null && (We.data = ke)))), (ke = fd ? dd(e, n) : hd(e, n)) && (We = Tc(Y, "onBeforeInput"), 0 < We.length && (me = new Yo(
          "onBeforeInput",
          "beforeinput",
          null,
          n,
          K
        ), W.push({
          event: me,
          listeners: We
        }), me.data = ke)), l_(
          W,
          e,
          Y,
          n,
          K
        );
      }
      lv(W, t);
    });
  }
  function Ls(e, t, n) {
    return {
      instance: e,
      listener: t,
      currentTarget: n
    };
  }
  function Tc(e, t) {
    for (var n = t + "Capture", l = []; e !== null; ) {
      var u = e, f = u.stateNode;
      if (u = u.tag, u !== 5 && u !== 26 && u !== 27 || f === null || (u = Zi(e, n), u != null && l.unshift(
        Ls(e, u, f)
      ), u = Zi(e, t), u != null && l.push(
        Ls(e, u, f)
      )), e.tag === 3) return l;
      e = e.return;
    }
    return [];
  }
  function u_(e) {
    if (e === null) return null;
    do
      e = e.return;
    while (e && e.tag !== 5 && e.tag !== 27);
    return e || null;
  }
  function ov(e, t, n, l, u) {
    for (var f = t._reactName, g = []; n !== null && n !== l; ) {
      var _ = n, w = _.alternate, Y = _.stateNode;
      if (_ = _.tag, w !== null && w === l) break;
      _ !== 5 && _ !== 26 && _ !== 27 || Y === null || (w = Y, u ? (Y = Zi(n, f), Y != null && g.unshift(
        Ls(n, Y, w)
      )) : u || (Y = Zi(n, f), Y != null && g.push(
        Ls(n, Y, w)
      ))), n = n.return;
    }
    g.length !== 0 && e.push({ event: t, listeners: g });
  }
  var c_ = /\r\n?/g, f_ = /\u0000|\uFFFD/g;
  function sv(e) {
    return (typeof e == "string" ? e : "" + e).replace(c_, `
`).replace(f_, "");
  }
  function uv(e, t) {
    return t = sv(t), sv(e) === t;
  }
  function St(e, t, n, l, u, f) {
    switch (n) {
      case "children":
        typeof l == "string" ? t === "body" || t === "textarea" && l === "" || aa(e, l) : (typeof l == "number" || typeof l == "bigint") && t !== "body" && aa(e, "" + l);
        break;
      case "className":
        $l(e, "class", l);
        break;
      case "tabIndex":
        $l(e, "tabindex", l);
        break;
      case "dir":
      case "role":
      case "viewBox":
      case "width":
      case "height":
        $l(e, n, l);
        break;
      case "style":
        pi(e, l, f);
        break;
      case "data":
        if (t !== "object") {
          $l(e, "data", l);
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
          typeof f == "function" && (n === "formAction" ? (t !== "input" && St(e, t, "name", u.name, u, null), St(
            e,
            t,
            "formEncType",
            u.formEncType,
            u,
            null
          ), St(
            e,
            t,
            "formMethod",
            u.formMethod,
            u,
            null
          ), St(
            e,
            t,
            "formTarget",
            u.formTarget,
            u,
            null
          )) : (St(e, t, "encType", u.encType, u, null), St(e, t, "method", u.method, u, null), St(e, t, "target", u.target, u, null)));
        if (l == null || typeof l == "symbol" || typeof l == "boolean") {
          e.removeAttribute(n);
          break;
        }
        l = Tr("" + l), e.setAttribute(n, l);
        break;
      case "onClick":
        l != null && (e.onclick = sn);
        break;
      case "onScroll":
        l != null && Ze("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Ze("scrollend", e);
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
        Ze("beforetoggle", e), Ze("toggle", e), Bl(e, "popover", l);
        break;
      case "xlinkActuate":
        pa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:actuate",
          l
        );
        break;
      case "xlinkArcrole":
        pa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:arcrole",
          l
        );
        break;
      case "xlinkRole":
        pa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:role",
          l
        );
        break;
      case "xlinkShow":
        pa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:show",
          l
        );
        break;
      case "xlinkTitle":
        pa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:title",
          l
        );
        break;
      case "xlinkType":
        pa(
          e,
          "http://www.w3.org/1999/xlink",
          "xlink:type",
          l
        );
        break;
      case "xmlBase":
        pa(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:base",
          l
        );
        break;
      case "xmlLang":
        pa(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:lang",
          l
        );
        break;
      case "xmlSpace":
        pa(
          e,
          "http://www.w3.org/XML/1998/namespace",
          "xml:space",
          l
        );
        break;
      case "is":
        Bl(e, "is", l);
        break;
      case "innerText":
      case "textContent":
        break;
      default:
        (!(2 < n.length) || n[0] !== "o" && n[0] !== "O" || n[1] !== "n" && n[1] !== "N") && (n = yu.get(n) || n, Bl(e, n, l));
    }
  }
  function hh(e, t, n, l, u, f) {
    switch (n) {
      case "style":
        pi(e, l, f);
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
        typeof l == "string" ? aa(e, l) : (typeof l == "number" || typeof l == "bigint") && aa(e, "" + l);
        break;
      case "onScroll":
        l != null && Ze("scroll", e);
        break;
      case "onScrollEnd":
        l != null && Ze("scrollend", e);
        break;
      case "onClick":
        l != null && (e.onclick = sn);
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
            if (n[0] === "o" && n[1] === "n" && (u = n.endsWith("Capture"), t = n.slice(2, u ? n.length - 7 : void 0), f = e[Cn] || null, f = f != null ? f[n] : null, typeof f == "function" && e.removeEventListener(t, f, u), typeof l == "function")) {
              typeof f != "function" && f !== null && (n in e ? e[n] = null : e.hasAttribute(n) && e.removeAttribute(n)), e.addEventListener(t, l, u);
              break e;
            }
            n in e ? e[n] = l : l === !0 ? e.setAttribute(n, "") : Bl(e, n, l);
          }
    }
  }
  function Sn(e, t, n) {
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
        Ze("error", e), Ze("load", e);
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
                  St(e, t, f, g, n, null);
              }
          }
        u && St(e, t, "srcSet", n.srcSet, n, null), l && St(e, t, "src", n.src, n, null);
        return;
      case "input":
        Ze("invalid", e);
        var _ = f = g = u = null, w = null, Y = null;
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
                  Y = K;
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
                  St(e, t, l, K, n, null);
              }
          }
        Or(
          e,
          f,
          _,
          w,
          Y,
          g,
          u,
          !1
        );
        return;
      case "select":
        Ze("invalid", e), l = g = f = null;
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
                St(e, t, u, _, n, null);
            }
        t = f, n = g, e.multiple = !!l, t != null ? vn(e, !!l, t, !1) : n != null && vn(e, !!l, n, !0);
        return;
      case "textarea":
        Ze("invalid", e), f = u = l = null;
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
                St(e, t, g, _, n, null);
            }
        ql(e, l, u, f);
        return;
      case "option":
        for (w in n)
          if (n.hasOwnProperty(w) && (l = n[w], l != null))
            switch (w) {
              case "selected":
                e.selected = l && typeof l != "function" && typeof l != "symbol";
                break;
              default:
                St(e, t, w, l, n, null);
            }
        return;
      case "dialog":
        Ze("beforetoggle", e), Ze("toggle", e), Ze("cancel", e), Ze("close", e);
        break;
      case "iframe":
      case "object":
        Ze("load", e);
        break;
      case "video":
      case "audio":
        for (l = 0; l < zs.length; l++)
          Ze(zs[l], e);
        break;
      case "image":
        Ze("error", e), Ze("load", e);
        break;
      case "details":
        Ze("toggle", e);
        break;
      case "embed":
      case "source":
      case "link":
        Ze("error", e), Ze("load", e);
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
        for (Y in n)
          if (n.hasOwnProperty(Y) && (l = n[Y], l != null))
            switch (Y) {
              case "children":
              case "dangerouslySetInnerHTML":
                throw Error(o(137, t));
              default:
                St(e, t, Y, l, n, null);
            }
        return;
      default:
        if (Yl(t)) {
          for (K in n)
            n.hasOwnProperty(K) && (l = n[K], l !== void 0 && hh(
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
      n.hasOwnProperty(_) && (l = n[_], l != null && St(e, t, _, l, n, null));
  }
  function d_(e, t, n, l) {
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
        var u = null, f = null, g = null, _ = null, w = null, Y = null, K = null;
        for (F in n) {
          var W = n[F];
          if (n.hasOwnProperty(F) && W != null)
            switch (F) {
              case "checked":
                break;
              case "value":
                break;
              case "defaultValue":
                w = W;
              default:
                l.hasOwnProperty(F) || St(e, t, F, null, l, W);
            }
        }
        for (var G in l) {
          var F = l[G];
          if (W = n[G], l.hasOwnProperty(G) && (F != null || W != null))
            switch (G) {
              case "type":
                f = F;
                break;
              case "name":
                u = F;
                break;
              case "checked":
                Y = F;
                break;
              case "defaultChecked":
                K = F;
                break;
              case "value":
                g = F;
                break;
              case "defaultValue":
                _ = F;
                break;
              case "children":
              case "dangerouslySetInnerHTML":
                if (F != null)
                  throw Error(o(137, t));
                break;
              default:
                F !== W && St(
                  e,
                  t,
                  G,
                  F,
                  l,
                  W
                );
            }
        }
        xn(
          e,
          g,
          _,
          w,
          Y,
          K,
          f,
          u
        );
        return;
      case "select":
        F = g = _ = G = null;
        for (f in n)
          if (w = n[f], n.hasOwnProperty(f) && w != null)
            switch (f) {
              case "value":
                break;
              case "multiple":
                F = w;
              default:
                l.hasOwnProperty(f) || St(
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
                f !== w && St(
                  e,
                  t,
                  u,
                  f,
                  l,
                  w
                );
            }
        t = _, n = g, l = F, G != null ? vn(e, !!n, G, !1) : !!l != !!n && (t != null ? vn(e, !!n, t, !0) : vn(e, !!n, n ? [] : "", !1));
        return;
      case "textarea":
        F = G = null;
        for (_ in n)
          if (u = n[_], n.hasOwnProperty(_) && u != null && !l.hasOwnProperty(_))
            switch (_) {
              case "value":
                break;
              case "children":
                break;
              default:
                St(e, t, _, null, l, u);
            }
        for (g in l)
          if (u = l[g], f = n[g], l.hasOwnProperty(g) && (u != null || f != null))
            switch (g) {
              case "value":
                G = u;
                break;
              case "defaultValue":
                F = u;
                break;
              case "children":
                break;
              case "dangerouslySetInnerHTML":
                if (u != null) throw Error(o(91));
                break;
              default:
                u !== f && St(e, t, g, u, l, f);
            }
        Xa(e, G, F);
        return;
      case "option":
        for (var pe in n)
          if (G = n[pe], n.hasOwnProperty(pe) && G != null && !l.hasOwnProperty(pe))
            switch (pe) {
              case "selected":
                e.selected = !1;
                break;
              default:
                St(
                  e,
                  t,
                  pe,
                  null,
                  l,
                  G
                );
            }
        for (w in l)
          if (G = l[w], F = n[w], l.hasOwnProperty(w) && G !== F && (G != null || F != null))
            switch (w) {
              case "selected":
                e.selected = G && typeof G != "function" && typeof G != "symbol";
                break;
              default:
                St(
                  e,
                  t,
                  w,
                  G,
                  l,
                  F
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
          G = n[Te], n.hasOwnProperty(Te) && G != null && !l.hasOwnProperty(Te) && St(e, t, Te, null, l, G);
        for (Y in l)
          if (G = l[Y], F = n[Y], l.hasOwnProperty(Y) && G !== F && (G != null || F != null))
            switch (Y) {
              case "children":
              case "dangerouslySetInnerHTML":
                if (G != null)
                  throw Error(o(137, t));
                break;
              default:
                St(
                  e,
                  t,
                  Y,
                  G,
                  l,
                  F
                );
            }
        return;
      default:
        if (Yl(t)) {
          for (var Et in n)
            G = n[Et], n.hasOwnProperty(Et) && G !== void 0 && !l.hasOwnProperty(Et) && hh(
              e,
              t,
              Et,
              void 0,
              l,
              G
            );
          for (K in l)
            G = l[K], F = n[K], !l.hasOwnProperty(K) || G === F || G === void 0 && F === void 0 || hh(
              e,
              t,
              K,
              G,
              l,
              F
            );
          return;
        }
    }
    for (var H in n)
      G = n[H], n.hasOwnProperty(H) && G != null && !l.hasOwnProperty(H) && St(e, t, H, null, l, G);
    for (W in l)
      G = l[W], F = n[W], !l.hasOwnProperty(W) || G === F || G == null && F == null || St(e, t, W, G, l, F);
  }
  function cv(e) {
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
  function h_() {
    if (typeof performance.getEntriesByType == "function") {
      for (var e = 0, t = 0, n = performance.getEntriesByType("resource"), l = 0; l < n.length; l++) {
        var u = n[l], f = u.transferSize, g = u.initiatorType, _ = u.duration;
        if (f && _ && cv(g)) {
          for (g = 0, _ = u.responseEnd, l += 1; l < n.length; l++) {
            var w = n[l], Y = w.startTime;
            if (Y > _) break;
            var K = w.transferSize, W = w.initiatorType;
            K && cv(W) && (w = w.responseEnd, g += K * (w < _ ? 1 : (_ - Y) / (w - Y)));
          }
          if (--l, t += 8 * (f + g) / (u.duration / 1e3), e++, 10 < e) break;
        }
      }
      if (0 < e) return t / e / 1e6;
    }
    return navigator.connection && (e = navigator.connection.downlink, typeof e == "number") ? e : 5;
  }
  var ph = null, mh = null;
  function Ac(e) {
    return e.nodeType === 9 ? e : e.ownerDocument;
  }
  function fv(e) {
    switch (e) {
      case "http://www.w3.org/2000/svg":
        return 1;
      case "http://www.w3.org/1998/Math/MathML":
        return 2;
      default:
        return 0;
    }
  }
  function dv(e, t) {
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
  function gh(e, t) {
    return e === "textarea" || e === "noscript" || typeof t.children == "string" || typeof t.children == "number" || typeof t.children == "bigint" || typeof t.dangerouslySetInnerHTML == "object" && t.dangerouslySetInnerHTML !== null && t.dangerouslySetInnerHTML.__html != null;
  }
  var vh = null;
  function p_() {
    var e = window.event;
    return e && e.type === "popstate" ? e === vh ? !1 : (vh = e, !0) : (vh = null, !1);
  }
  var hv = typeof setTimeout == "function" ? setTimeout : void 0, m_ = typeof clearTimeout == "function" ? clearTimeout : void 0, pv = typeof Promise == "function" ? Promise : void 0, g_ = typeof queueMicrotask == "function" ? queueMicrotask : typeof pv < "u" ? function(e) {
    return pv.resolve(null).then(e).catch(v_);
  } : hv;
  function v_(e) {
    setTimeout(function() {
      throw e;
    });
  }
  function xl(e) {
    return e === "head";
  }
  function mv(e, t) {
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
          Hs(e.ownerDocument.documentElement);
        else if (n === "head") {
          n = e.ownerDocument.head, Hs(n);
          for (var f = n.firstChild; f; ) {
            var g = f.nextSibling, _ = f.nodeName;
            f[nn] || _ === "SCRIPT" || _ === "STYLE" || _ === "LINK" && f.rel.toLowerCase() === "stylesheet" || n.removeChild(f), f = g;
          }
        } else
          n === "body" && Hs(e.ownerDocument.body);
      n = u;
    } while (n);
    ro(t);
  }
  function gv(e, t) {
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
  function yh(e) {
    var t = e.firstChild;
    for (t && t.nodeType === 10 && (t = t.nextSibling); t; ) {
      var n = t;
      switch (t = t.nextSibling, n.nodeName) {
        case "HTML":
        case "HEAD":
        case "BODY":
          yh(n), gn(n);
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
  function y_(e, t, n, l) {
    for (; e.nodeType === 1; ) {
      var u = n;
      if (e.nodeName.toLowerCase() !== t.toLowerCase()) {
        if (!l && (e.nodeName !== "INPUT" || e.type !== "hidden"))
          break;
      } else if (l) {
        if (!e[nn])
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
      if (e = Ea(e.nextSibling), e === null) break;
    }
    return null;
  }
  function b_(e, t, n) {
    if (t === "") return null;
    for (; e.nodeType !== 3; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !n || (e = Ea(e.nextSibling), e === null)) return null;
    return e;
  }
  function vv(e, t) {
    for (; e.nodeType !== 8; )
      if ((e.nodeType !== 1 || e.nodeName !== "INPUT" || e.type !== "hidden") && !t || (e = Ea(e.nextSibling), e === null)) return null;
    return e;
  }
  function bh(e) {
    return e.data === "$?" || e.data === "$~";
  }
  function _h(e) {
    return e.data === "$!" || e.data === "$?" && e.ownerDocument.readyState !== "loading";
  }
  function __(e, t) {
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
  function Ea(e) {
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
  var Sh = null;
  function yv(e) {
    e = e.nextSibling;
    for (var t = 0; e; ) {
      if (e.nodeType === 8) {
        var n = e.data;
        if (n === "/$" || n === "/&") {
          if (t === 0)
            return Ea(e.nextSibling);
          t--;
        } else
          n !== "$" && n !== "$!" && n !== "$?" && n !== "$~" && n !== "&" || t++;
      }
      e = e.nextSibling;
    }
    return null;
  }
  function bv(e) {
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
  function _v(e, t, n) {
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
  function Hs(e) {
    for (var t = e.attributes; t.length; )
      e.removeAttributeNode(t[0]);
    gn(e);
  }
  var Ca = /* @__PURE__ */ new Map(), Sv = /* @__PURE__ */ new Set();
  function wc(e) {
    return typeof e.getRootNode == "function" ? e.getRootNode() : e.nodeType === 9 ? e : e.ownerDocument;
  }
  var ji = ne.d;
  ne.d = {
    f: S_,
    r: E_,
    D: C_,
    C: x_,
    L: O_,
    m: T_,
    X: w_,
    S: A_,
    M: M_
  };
  function S_() {
    var e = ji.f(), t = bc();
    return e || t;
  }
  function E_(e) {
    var t = Ta(e);
    t !== null && t.tag === 5 && t.type === "form" ? Um(t) : ji.r(e);
  }
  var ao = typeof document > "u" ? null : document;
  function Ev(e, t, n) {
    var l = ao;
    if (l && typeof t == "string" && t) {
      var u = Ft(t);
      u = 'link[rel="' + e + '"][href="' + u + '"]', typeof n == "string" && (u += '[crossorigin="' + n + '"]'), Sv.has(u) || (Sv.add(u), e = { rel: e, crossOrigin: n, href: t }, l.querySelector(u) === null && (t = l.createElement("link"), Sn(t, "link", e), wt(t), l.head.appendChild(t)));
    }
  }
  function C_(e) {
    ji.D(e), Ev("dns-prefetch", e, null);
  }
  function x_(e, t) {
    ji.C(e, t), Ev("preconnect", e, t);
  }
  function O_(e, t, n) {
    ji.L(e, t, n);
    var l = ao;
    if (l && e && t) {
      var u = 'link[rel="preload"][as="' + Ft(t) + '"]';
      t === "image" && n && n.imageSrcSet ? (u += '[imagesrcset="' + Ft(
        n.imageSrcSet
      ) + '"]', typeof n.imageSizes == "string" && (u += '[imagesizes="' + Ft(
        n.imageSizes
      ) + '"]')) : u += '[href="' + Ft(e) + '"]';
      var f = u;
      switch (t) {
        case "style":
          f = io(e);
          break;
        case "script":
          f = lo(e);
      }
      Ca.has(f) || (e = O(
        {
          rel: "preload",
          href: t === "image" && n && n.imageSrcSet ? void 0 : e,
          as: t
        },
        n
      ), Ca.set(f, e), l.querySelector(u) !== null || t === "style" && l.querySelector(Vs(f)) || t === "script" && l.querySelector(Us(f)) || (t = l.createElement("link"), Sn(t, "link", e), wt(t), l.head.appendChild(t)));
    }
  }
  function T_(e, t) {
    ji.m(e, t);
    var n = ao;
    if (n && e) {
      var l = t && typeof t.as == "string" ? t.as : "script", u = 'link[rel="modulepreload"][as="' + Ft(l) + '"][href="' + Ft(e) + '"]', f = u;
      switch (l) {
        case "audioworklet":
        case "paintworklet":
        case "serviceworker":
        case "sharedworker":
        case "worker":
        case "script":
          f = lo(e);
      }
      if (!Ca.has(f) && (e = O({ rel: "modulepreload", href: e }, t), Ca.set(f, e), n.querySelector(u) === null)) {
        switch (l) {
          case "audioworklet":
          case "paintworklet":
          case "serviceworker":
          case "sharedworker":
          case "worker":
          case "script":
            if (n.querySelector(Us(f)))
              return;
        }
        l = n.createElement("link"), Sn(l, "link", e), wt(l), n.head.appendChild(l);
      }
    }
  }
  function A_(e, t, n) {
    ji.S(e, t, n);
    var l = ao;
    if (l && e) {
      var u = Gn(l).hoistableStyles, f = io(e);
      t = t || "default";
      var g = u.get(f);
      if (!g) {
        var _ = { loading: 0, preload: null };
        if (g = l.querySelector(
          Vs(f)
        ))
          _.loading = 5;
        else {
          e = O(
            { rel: "stylesheet", href: e, "data-precedence": t },
            n
          ), (n = Ca.get(f)) && Eh(e, n);
          var w = g = l.createElement("link");
          wt(w), Sn(w, "link", e), w._p = new Promise(function(Y, K) {
            w.onload = Y, w.onerror = K;
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
  function w_(e, t) {
    ji.X(e, t);
    var n = ao;
    if (n && e) {
      var l = Gn(n).hoistableScripts, u = lo(e), f = l.get(u);
      f || (f = n.querySelector(Us(u)), f || (e = O({ src: e, async: !0 }, t), (t = Ca.get(u)) && Ch(e, t), f = n.createElement("script"), wt(f), Sn(f, "link", e), n.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, l.set(u, f));
    }
  }
  function M_(e, t) {
    ji.M(e, t);
    var n = ao;
    if (n && e) {
      var l = Gn(n).hoistableScripts, u = lo(e), f = l.get(u);
      f || (f = n.querySelector(Us(u)), f || (e = O({ src: e, async: !0, type: "module" }, t), (t = Ca.get(u)) && Ch(e, t), f = n.createElement("script"), wt(f), Sn(f, "link", e), n.head.appendChild(f)), f = {
        type: "script",
        instance: f,
        count: 1,
        state: null
      }, l.set(u, f));
    }
  }
  function Cv(e, t, n, l) {
    var u = (u = fe.current) ? wc(u) : null;
    if (!u) throw Error(o(446));
    switch (e) {
      case "meta":
      case "title":
        return null;
      case "style":
        return typeof n.precedence == "string" && typeof n.href == "string" ? (t = io(n.href), n = Gn(
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
          var f = Gn(
            u
          ).hoistableStyles, g = f.get(e);
          if (g || (u = u.ownerDocument || u, g = {
            type: "stylesheet",
            instance: null,
            count: 0,
            state: { loading: 0, preload: null }
          }, f.set(e, g), (f = u.querySelector(
            Vs(e)
          )) && !f._p && (g.instance = f, g.state.loading = 5), Ca.has(e) || (n = {
            rel: "preload",
            as: "style",
            href: n.href,
            crossOrigin: n.crossOrigin,
            integrity: n.integrity,
            media: n.media,
            hrefLang: n.hrefLang,
            referrerPolicy: n.referrerPolicy
          }, Ca.set(e, n), f || R_(
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
        return t = n.async, n = n.src, typeof n == "string" && t && typeof t != "function" && typeof t != "symbol" ? (t = lo(n), n = Gn(
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
    return 'href="' + Ft(e) + '"';
  }
  function Vs(e) {
    return 'link[rel="stylesheet"][' + e + "]";
  }
  function xv(e) {
    return O({}, e, {
      "data-precedence": e.precedence,
      precedence: null
    });
  }
  function R_(e, t, n, l) {
    e.querySelector('link[rel="preload"][as="style"][' + t + "]") ? l.loading = 1 : (t = e.createElement("link"), l.preload = t, t.addEventListener("load", function() {
      return l.loading |= 1;
    }), t.addEventListener("error", function() {
      return l.loading |= 2;
    }), Sn(t, "link", n), wt(t), e.head.appendChild(t));
  }
  function lo(e) {
    return '[src="' + Ft(e) + '"]';
  }
  function Us(e) {
    return "script[async]" + e;
  }
  function Ov(e, t, n) {
    if (t.count++, t.instance === null)
      switch (t.type) {
        case "style":
          var l = e.querySelector(
            'style[data-href~="' + Ft(n.href) + '"]'
          );
          if (l)
            return t.instance = l, wt(l), l;
          var u = O({}, n, {
            "data-href": n.href,
            "data-precedence": n.precedence,
            href: null,
            precedence: null
          });
          return l = (e.ownerDocument || e).createElement(
            "style"
          ), wt(l), Sn(l, "style", u), Mc(l, n.precedence, e), t.instance = l;
        case "stylesheet":
          u = io(n.href);
          var f = e.querySelector(
            Vs(u)
          );
          if (f)
            return t.state.loading |= 4, t.instance = f, wt(f), f;
          l = xv(n), (u = Ca.get(u)) && Eh(l, u), f = (e.ownerDocument || e).createElement("link"), wt(f);
          var g = f;
          return g._p = new Promise(function(_, w) {
            g.onload = _, g.onerror = w;
          }), Sn(f, "link", l), t.state.loading |= 4, Mc(f, n.precedence, e), t.instance = f;
        case "script":
          return f = lo(n.src), (u = e.querySelector(
            Us(f)
          )) ? (t.instance = u, wt(u), u) : (l = n, (u = Ca.get(f)) && (l = O({}, n), Ch(l, u)), e = e.ownerDocument || e, u = e.createElement("script"), wt(u), Sn(u, "link", l), e.head.appendChild(u), t.instance = u);
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
  function Eh(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.title == null && (e.title = t.title);
  }
  function Ch(e, t) {
    e.crossOrigin == null && (e.crossOrigin = t.crossOrigin), e.referrerPolicy == null && (e.referrerPolicy = t.referrerPolicy), e.integrity == null && (e.integrity = t.integrity);
  }
  var Rc = null;
  function Tv(e, t, n) {
    if (Rc === null) {
      var l = /* @__PURE__ */ new Map(), u = Rc = /* @__PURE__ */ new Map();
      u.set(n, l);
    } else
      u = Rc, l = u.get(n), l || (l = /* @__PURE__ */ new Map(), u.set(n, l));
    if (l.has(e)) return l;
    for (l.set(e, null), n = n.getElementsByTagName(e), u = 0; u < n.length; u++) {
      var f = n[u];
      if (!(f[nn] || f[Bt] || e === "link" && f.getAttribute("rel") === "stylesheet") && f.namespaceURI !== "http://www.w3.org/2000/svg") {
        var g = f.getAttribute(t) || "";
        g = e + g;
        var _ = l.get(g);
        _ ? _.push(f) : l.set(g, [f]);
      }
    }
    return l;
  }
  function Av(e, t, n) {
    e = e.ownerDocument || e, e.head.insertBefore(
      n,
      t === "title" ? e.querySelector("head > title") : null
    );
  }
  function D_(e, t, n) {
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
  function wv(e) {
    return !(e.type === "stylesheet" && (e.state.loading & 3) === 0);
  }
  function N_(e, t, n, l) {
    if (n.type === "stylesheet" && (typeof l.media != "string" || matchMedia(l.media).matches !== !1) && (n.state.loading & 4) === 0) {
      if (n.instance === null) {
        var u = io(l.href), f = t.querySelector(
          Vs(u)
        );
        if (f) {
          t = f._p, t !== null && typeof t == "object" && typeof t.then == "function" && (e.count++, e = Dc.bind(e), t.then(e, e)), n.state.loading |= 4, n.instance = f, wt(f);
          return;
        }
        f = t.ownerDocument || t, l = xv(l), (u = Ca.get(u)) && Eh(l, u), f = f.createElement("link"), wt(f);
        var g = f;
        g._p = new Promise(function(_, w) {
          g.onload = _, g.onerror = w;
        }), Sn(f, "link", l), n.instance = f;
      }
      e.stylesheets === null && (e.stylesheets = /* @__PURE__ */ new Map()), e.stylesheets.set(n, t), (t = n.state.preload) && (n.state.loading & 3) === 0 && (e.count++, n = Dc.bind(e), t.addEventListener("load", n), t.addEventListener("error", n));
    }
  }
  var xh = 0;
  function j_(e, t) {
    return e.stylesheets && e.count === 0 && jc(e, e.stylesheets), 0 < e.count || 0 < e.imgCount ? function(n) {
      var l = setTimeout(function() {
        if (e.stylesheets && jc(e, e.stylesheets), e.unsuspend) {
          var f = e.unsuspend;
          e.unsuspend = null, f();
        }
      }, 6e4 + t);
      0 < e.imgBytes && xh === 0 && (xh = 62500 * h_());
      var u = setTimeout(
        function() {
          if (e.waitingForImages = !1, e.count === 0 && (e.stylesheets && jc(e, e.stylesheets), e.unsuspend)) {
            var f = e.unsuspend;
            e.unsuspend = null, f();
          }
        },
        (e.imgBytes > xh ? 50 : 800) + t
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
    e.stylesheets = null, e.unsuspend !== null && (e.count++, Nc = /* @__PURE__ */ new Map(), t.forEach(z_, e), Nc = null, Dc.call(e));
  }
  function z_(e, t) {
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
  var Bs = {
    $$typeof: X,
    Provider: null,
    Consumer: null,
    _currentValue: le,
    _currentValue2: le,
    _threadCount: 0
  };
  function L_(e, t, n, l, u, f, g, _, w) {
    this.tag = 1, this.containerInfo = e, this.pingCache = this.current = this.pendingChildren = null, this.timeoutHandle = -1, this.callbackNode = this.next = this.pendingContext = this.context = this.cancelPendingCommit = null, this.callbackPriority = 0, this.expirationTimes = wo(-1), this.entangledLanes = this.shellSuspendCounter = this.errorRecoveryDisabledLanes = this.expiredLanes = this.warmLanes = this.pingedLanes = this.suspendedLanes = this.pendingLanes = 0, this.entanglements = wo(0), this.hiddenUpdates = wo(null), this.identifierPrefix = l, this.onUncaughtError = u, this.onCaughtError = f, this.onRecoverableError = g, this.pooledCache = null, this.pooledCacheLanes = 0, this.formState = w, this.incompleteTransitions = /* @__PURE__ */ new Map();
  }
  function Mv(e, t, n, l, u, f, g, _, w, Y, K, W) {
    return e = new L_(
      e,
      t,
      n,
      g,
      w,
      Y,
      K,
      W,
      _
    ), t = 1, f === !0 && (t |= 24), f = Un(3, null, null, t), e.current = f, f.stateNode = e, t = La(), t.refCount++, e.pooledCache = t, t.refCount++, f.memoizedState = {
      element: l,
      isDehydrated: n,
      cache: t
    }, rt(f), e;
  }
  function Rv(e) {
    return e ? (e = ol, e) : ol;
  }
  function Dv(e, t, n, l, u, f) {
    u = Rv(u), l.context === null ? l.context = u : l.pendingContext = u, l = Re(t), l.payload = { element: n }, f = f === void 0 ? null : f, f !== null && (l.callback = f), n = qe(e, l, t), n !== null && (ea(n, e, t), Ne(n, e, t));
  }
  function Nv(e, t) {
    if (e = e.memoizedState, e !== null && e.dehydrated !== null) {
      var n = e.retryLane;
      e.retryLane = n !== 0 && n < t ? n : t;
    }
  }
  function Oh(e, t) {
    Nv(e, t), (e = e.alternate) && Nv(e, t);
  }
  function jv(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = bn(e, 67108864);
      t !== null && ea(t, e, 67108864), Oh(e, 67108864);
    }
  }
  function zv(e) {
    if (e.tag === 13 || e.tag === 31) {
      var t = sa();
      t = Mo(t);
      var n = bn(e, t);
      n !== null && ea(n, e, t), Oh(e, t);
    }
  }
  var zc = !0;
  function H_(e, t, n, l) {
    var u = $.T;
    $.T = null;
    var f = ne.p;
    try {
      ne.p = 2, Th(e, t, n, l);
    } finally {
      ne.p = f, $.T = u;
    }
  }
  function V_(e, t, n, l) {
    var u = $.T;
    $.T = null;
    var f = ne.p;
    try {
      ne.p = 8, Th(e, t, n, l);
    } finally {
      ne.p = f, $.T = u;
    }
  }
  function Th(e, t, n, l) {
    if (zc) {
      var u = Ah(l);
      if (u === null)
        dh(
          e,
          t,
          l,
          Lc,
          n
        ), Hv(e, l);
      else if (B_(
        u,
        e,
        t,
        n,
        l
      ))
        l.stopPropagation();
      else if (Hv(e, l), t & 4 && -1 < U_.indexOf(e)) {
        for (; u !== null; ) {
          var f = Ta(u);
          if (f !== null)
            switch (f.tag) {
              case 3:
                if (f = f.stateNode, f.current.memoizedState.isDehydrated) {
                  var g = da(f.pendingLanes);
                  if (g !== 0) {
                    var _ = f;
                    for (_.pendingLanes |= 2, _.entangledLanes |= 2; g; ) {
                      var w = 1 << 31 - Dn(g);
                      _.entanglements[1] |= w, g &= ~w;
                    }
                    ri(f), (ut & 6) === 0 && (vc = rn() + 500, js(0));
                  }
                }
                break;
              case 31:
              case 13:
                _ = bn(f, 2), _ !== null && ea(_, f, 2), bc(), Oh(f, 2);
            }
          if (f = Ah(l), f === null && dh(
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
        dh(
          e,
          t,
          l,
          null,
          n
        );
    }
  }
  function Ah(e) {
    return e = Ar(e), wh(e);
  }
  var Lc = null;
  function wh(e) {
    if (Lc = null, e = $t(e), e !== null) {
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
  function Lv(e) {
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
        switch (Bi()) {
          case Ue:
            return 2;
          case ca:
            return 8;
          case di:
          case Zf:
            return 32;
          case $i:
            return 268435456;
          default:
            return 32;
        }
      default:
        return 32;
    }
  }
  var Mh = !1, Ol = null, Tl = null, Al = null, $s = /* @__PURE__ */ new Map(), ks = /* @__PURE__ */ new Map(), wl = [], U_ = "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
    " "
  );
  function Hv(e, t) {
    switch (e) {
      case "focusin":
      case "focusout":
        Ol = null;
        break;
      case "dragenter":
      case "dragleave":
        Tl = null;
        break;
      case "mouseover":
      case "mouseout":
        Al = null;
        break;
      case "pointerover":
      case "pointerout":
        $s.delete(t.pointerId);
        break;
      case "gotpointercapture":
      case "lostpointercapture":
        ks.delete(t.pointerId);
    }
  }
  function qs(e, t, n, l, u, f) {
    return e === null || e.nativeEvent !== f ? (e = {
      blockedOn: t,
      domEventName: n,
      eventSystemFlags: l,
      nativeEvent: f,
      targetContainers: [u]
    }, t !== null && (t = Ta(t), t !== null && jv(t)), e) : (e.eventSystemFlags |= l, t = e.targetContainers, u !== null && t.indexOf(u) === -1 && t.push(u), e);
  }
  function B_(e, t, n, l, u) {
    switch (t) {
      case "focusin":
        return Ol = qs(
          Ol,
          e,
          t,
          n,
          l,
          u
        ), !0;
      case "dragenter":
        return Tl = qs(
          Tl,
          e,
          t,
          n,
          l,
          u
        ), !0;
      case "mouseover":
        return Al = qs(
          Al,
          e,
          t,
          n,
          l,
          u
        ), !0;
      case "pointerover":
        var f = u.pointerId;
        return $s.set(
          f,
          qs(
            $s.get(f) || null,
            e,
            t,
            n,
            l,
            u
          )
        ), !0;
      case "gotpointercapture":
        return f = u.pointerId, ks.set(
          f,
          qs(
            ks.get(f) || null,
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
  function Vv(e) {
    var t = $t(e.target);
    if (t !== null) {
      var n = d(t);
      if (n !== null) {
        if (t = n.tag, t === 13) {
          if (t = h(n), t !== null) {
            e.blockedOn = t, Sr(e.priority, function() {
              zv(n);
            });
            return;
          }
        } else if (t === 31) {
          if (t = y(n), t !== null) {
            e.blockedOn = t, Sr(e.priority, function() {
              zv(n);
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
      var n = Ah(e.nativeEvent);
      if (n === null) {
        n = e.nativeEvent;
        var l = new n.constructor(
          n.type,
          n
        );
        Fi = l, n.target.dispatchEvent(l), Fi = null;
      } else
        return t = Ta(n), t !== null && jv(t), e.blockedOn = n, !1;
      t.shift();
    }
    return !0;
  }
  function Uv(e, t, n) {
    Hc(e) && n.delete(t);
  }
  function $_() {
    Mh = !1, Ol !== null && Hc(Ol) && (Ol = null), Tl !== null && Hc(Tl) && (Tl = null), Al !== null && Hc(Al) && (Al = null), $s.forEach(Uv), ks.forEach(Uv);
  }
  function Vc(e, t) {
    e.blockedOn === t && (e.blockedOn = null, Mh || (Mh = !0, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      $_
    )));
  }
  var Uc = null;
  function Bv(e) {
    Uc !== e && (Uc = e, a.unstable_scheduleCallback(
      a.unstable_NormalPriority,
      function() {
        Uc === e && (Uc = null);
        for (var t = 0; t < e.length; t += 3) {
          var n = e[t], l = e[t + 1], u = e[t + 2];
          if (typeof l != "function") {
            if (wh(l || n) === null)
              continue;
            break;
          }
          var f = Ta(n);
          f !== null && (e.splice(t, 3), t -= 3, Ad(
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
    Ol !== null && Vc(Ol, e), Tl !== null && Vc(Tl, e), Al !== null && Vc(Al, e), $s.forEach(t), ks.forEach(t);
    for (var n = 0; n < wl.length; n++) {
      var l = wl[n];
      l.blockedOn === e && (l.blockedOn = null);
    }
    for (; 0 < wl.length && (n = wl[0], n.blockedOn === null); )
      Vv(n), n.blockedOn === null && wl.shift();
    if (n = (e.ownerDocument || e).$$reactFormReplay, n != null)
      for (l = 0; l < n.length; l += 3) {
        var u = n[l], f = n[l + 1], g = u[Cn] || null;
        if (typeof f == "function")
          g || Bv(n);
        else if (g) {
          var _ = null;
          if (f && f.hasAttribute("formAction")) {
            if (u = f, g = f[Cn] || null)
              _ = g.formAction;
            else if (wh(u) !== null) continue;
          } else _ = g.action;
          typeof _ == "function" ? n[l + 1] = _ : (n.splice(l, 3), l -= 3), Bv(n);
        }
      }
  }
  function $v() {
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
  function Rh(e) {
    this._internalRoot = e;
  }
  Bc.prototype.render = Rh.prototype.render = function(e) {
    var t = this._internalRoot;
    if (t === null) throw Error(o(409));
    var n = t.current, l = sa();
    Dv(n, l, e, t, null, null);
  }, Bc.prototype.unmount = Rh.prototype.unmount = function() {
    var e = this._internalRoot;
    if (e !== null) {
      this._internalRoot = null;
      var t = e.containerInfo;
      Dv(e.current, 2, null, e, null, null), bc(), t[Ga] = null;
    }
  };
  function Bc(e) {
    this._internalRoot = e;
  }
  Bc.prototype.unstable_scheduleHydration = function(e) {
    if (e) {
      var t = mu();
      e = { blockedOn: null, target: e, priority: t };
      for (var n = 0; n < wl.length && t !== 0 && t < wl[n].priority; n++) ;
      wl.splice(n, 0, e), n === 0 && Vv(e);
    }
  };
  var kv = i.version;
  if (kv !== "19.2.0")
    throw Error(
      o(
        527,
        kv,
        "19.2.0"
      )
    );
  ne.findDOMNode = function(e) {
    var t = e._reactInternals;
    if (t === void 0)
      throw typeof e.render == "function" ? Error(o(188)) : (e = Object.keys(e).join(","), Error(o(268, e)));
    return e = v(t), e = e !== null ? S(e) : null, e = e === null ? null : e.stateNode, e;
  };
  var k_ = {
    bundleType: 0,
    version: "19.2.0",
    rendererPackageName: "react-dom",
    currentDispatcherRef: $,
    reconcilerVersion: "19.2.0"
  };
  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
    var $c = __REACT_DEVTOOLS_GLOBAL_HOOK__;
    if (!$c.isDisabled && $c.supportsFiber)
      try {
        Ya = $c.inject(
          k_
        ), Rn = $c;
      } catch {
      }
  }
  return Gs.createRoot = function(e, t) {
    if (!s(e)) throw Error(o(299));
    var n = !1, l = "", u = Qm, f = Zm, g = Km;
    return t != null && (t.unstable_strictMode === !0 && (n = !0), t.identifierPrefix !== void 0 && (l = t.identifierPrefix), t.onUncaughtError !== void 0 && (u = t.onUncaughtError), t.onCaughtError !== void 0 && (f = t.onCaughtError), t.onRecoverableError !== void 0 && (g = t.onRecoverableError)), t = Mv(
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
      $v
    ), e[Ga] = t.current, fh(e), new Rh(t);
  }, Gs.hydrateRoot = function(e, t, n) {
    if (!s(e)) throw Error(o(299));
    var l = !1, u = "", f = Qm, g = Zm, _ = Km, w = null;
    return n != null && (n.unstable_strictMode === !0 && (l = !0), n.identifierPrefix !== void 0 && (u = n.identifierPrefix), n.onUncaughtError !== void 0 && (f = n.onUncaughtError), n.onCaughtError !== void 0 && (g = n.onCaughtError), n.onRecoverableError !== void 0 && (_ = n.onRecoverableError), n.formState !== void 0 && (w = n.formState)), t = Mv(
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
      $v
    ), t.context = Rv(null), n = t.current, l = sa(), l = Mo(l), u = Re(l), u.callback = null, qe(n, u, l), n = l, t.current.lanes = n, Ul(t, n), ri(t), e[Ga] = t.current, fh(e), new Bc(t);
  }, Gs.version = "19.2.0", Gs;
}
var Wv;
function J_() {
  if (Wv) return jh.exports;
  Wv = 1;
  function a() {
    if (!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"))
      try {
        __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(a);
      } catch (i) {
        console.error(i);
      }
  }
  return a(), jh.exports = K_(), jh.exports;
}
var W_ = J_(), Pc = { exports: {} };
/*!
  * Bootstrap v5.3.8 (https://getbootstrap.com/)
  * Copyright 2011-2025 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
var P_ = Pc.exports, Pv;
function eS() {
  return Pv || (Pv = 1, (function(a, i) {
    (function(r, o) {
      a.exports = o();
    })(P_, function() {
      const r = /* @__PURE__ */ new Map(), o = { set(b, c, p) {
        r.has(b) || r.set(b, /* @__PURE__ */ new Map());
        const C = r.get(b);
        C.has(c) || C.size === 0 ? C.set(c, p) : console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(C.keys())[0]}.`);
      }, get: (b, c) => r.has(b) && r.get(b).get(c) || null, remove(b, c) {
        if (!r.has(b)) return;
        const p = r.get(b);
        p.delete(c), p.size === 0 && r.delete(b);
      } }, s = "transitionend", d = (b) => (b && window.CSS && window.CSS.escape && (b = b.replace(/#([^\s"#']+)/g, (c, p) => `#${CSS.escape(p)}`)), b), h = (b) => b == null ? `${b}` : Object.prototype.toString.call(b).match(/\s([a-z]+)/i)[1].toLowerCase(), y = (b) => {
        b.dispatchEvent(new Event(s));
      }, m = (b) => !(!b || typeof b != "object") && (b.jquery !== void 0 && (b = b[0]), b.nodeType !== void 0), v = (b) => m(b) ? b.jquery ? b[0] : b : typeof b == "string" && b.length > 0 ? document.querySelector(d(b)) : null, S = (b) => {
        if (!m(b) || b.getClientRects().length === 0) return !1;
        const c = getComputedStyle(b).getPropertyValue("visibility") === "visible", p = b.closest("details:not([open])");
        if (!p) return c;
        if (p !== b) {
          const C = b.closest("summary");
          if (C && C.parentNode !== p || C === null) return !1;
        }
        return c;
      }, O = (b) => !b || b.nodeType !== Node.ELEMENT_NODE || !!b.classList.contains("disabled") || (b.disabled !== void 0 ? b.disabled : b.hasAttribute("disabled") && b.getAttribute("disabled") !== "false"), A = (b) => {
        if (!document.documentElement.attachShadow) return null;
        if (typeof b.getRootNode == "function") {
          const c = b.getRootNode();
          return c instanceof ShadowRoot ? c : null;
        }
        return b instanceof ShadowRoot ? b : b.parentNode ? A(b.parentNode) : null;
      }, D = () => {
      }, N = (b) => {
        b.offsetHeight;
      }, L = () => window.jQuery && !document.body.hasAttribute("data-bs-no-jquery") ? window.jQuery : null, z = [], V = () => document.documentElement.dir === "rtl", Z = (b) => {
        var c;
        c = () => {
          const p = L();
          if (p) {
            const C = b.NAME, R = p.fn[C];
            p.fn[C] = b.jQueryInterface, p.fn[C].Constructor = b, p.fn[C].noConflict = () => (p.fn[C] = R, b.jQueryInterface);
          }
        }, document.readyState === "loading" ? (z.length || document.addEventListener("DOMContentLoaded", () => {
          for (const p of z) p();
        }), z.push(c)) : c();
      }, X = (b, c = [], p = b) => typeof b == "function" ? b.call(...c) : p, P = (b, c, p = !0) => {
        if (!p) return void X(b);
        const C = ((Q) => {
          if (!Q) return 0;
          let { transitionDuration: ee, transitionDelay: re } = window.getComputedStyle(Q);
          const ce = Number.parseFloat(ee), he = Number.parseFloat(re);
          return ce || he ? (ee = ee.split(",")[0], re = re.split(",")[0], 1e3 * (Number.parseFloat(ee) + Number.parseFloat(re))) : 0;
        })(c) + 5;
        let R = !1;
        const j = ({ target: Q }) => {
          Q === c && (R = !0, c.removeEventListener(s, j), X(b));
        };
        c.addEventListener(s, j), setTimeout(() => {
          R || y(c);
        }, C);
      }, B = (b, c, p, C) => {
        const R = b.length;
        let j = b.indexOf(c);
        return j === -1 ? !p && C ? b[R - 1] : b[0] : (j += p ? 1 : -1, C && (j = (j + R) % R), b[Math.max(0, Math.min(j, R - 1))]);
      }, I = /[^.]*(?=\..*)\.|.*/, U = /\..*/, oe = /::\d+$/, Ee = {};
      let Fe = 1;
      const Ie = { mouseenter: "mouseover", mouseleave: "mouseout" }, He = /* @__PURE__ */ new Set(["click", "dblclick", "mouseup", "mousedown", "contextmenu", "mousewheel", "DOMMouseScroll", "mouseover", "mouseout", "mousemove", "selectstart", "selectend", "keydown", "keypress", "keyup", "orientationchange", "touchstart", "touchmove", "touchend", "touchcancel", "pointerdown", "pointermove", "pointerup", "pointerleave", "pointercancel", "gesturestart", "gesturechange", "gestureend", "focus", "blur", "change", "reset", "select", "submit", "focusin", "focusout", "load", "unload", "beforeunload", "resize", "move", "DOMContentLoaded", "readystatechange", "error", "abort", "scroll"]);
      function dt(b, c) {
        return c && `${c}::${Fe++}` || b.uidEvent || Fe++;
      }
      function it(b) {
        const c = dt(b);
        return b.uidEvent = c, Ee[c] = Ee[c] || {}, Ee[c];
      }
      function $e(b, c, p = null) {
        return Object.values(b).find((C) => C.callable === c && C.delegationSelector === p);
      }
      function $(b, c, p) {
        const C = typeof c == "string", R = C ? p : c || p;
        let j = Ce(b);
        return He.has(j) || (j = b), [C, R, j];
      }
      function ne(b, c, p, C, R) {
        if (typeof c != "string" || !b) return;
        let [j, Q, ee] = $(c, p, C);
        c in Ie && (Q = ((Oe) => function(Me) {
          if (!Me.relatedTarget || Me.relatedTarget !== Me.delegateTarget && !Me.delegateTarget.contains(Me.relatedTarget)) return Oe.call(this, Me);
        })(Q));
        const re = it(b), ce = re[ee] || (re[ee] = {}), he = $e(ce, Q, j ? p : null);
        if (he) return void (he.oneOff = he.oneOff && R);
        const se = dt(Q, c.replace(I, "")), De = j ? /* @__PURE__ */ (function(xe, Oe, Me) {
          return function Se(rt) {
            const ht = xe.querySelectorAll(Oe);
            for (let { target: Re } = rt; Re && Re !== this; Re = Re.parentNode) for (const qe of ht) if (qe === Re) return k(rt, { delegateTarget: Re }), Se.oneOff && x.off(xe, rt.type, Oe, Me), Me.apply(Re, [rt]);
          };
        })(b, p, Q) : /* @__PURE__ */ (function(xe, Oe) {
          return function Me(Se) {
            return k(Se, { delegateTarget: xe }), Me.oneOff && x.off(xe, Se.type, Oe), Oe.apply(xe, [Se]);
          };
        })(b, Q);
        De.delegationSelector = j ? p : null, De.callable = Q, De.oneOff = R, De.uidEvent = se, ce[se] = De, b.addEventListener(ee, De, j);
      }
      function le(b, c, p, C, R) {
        const j = $e(c[p], C, R);
        j && (b.removeEventListener(p, j, !!R), delete c[p][j.uidEvent]);
      }
      function ye(b, c, p, C) {
        const R = c[p] || {};
        for (const [j, Q] of Object.entries(R)) j.includes(C) && le(b, c, p, Q.callable, Q.delegationSelector);
      }
      function Ce(b) {
        return b = b.replace(U, ""), Ie[b] || b;
      }
      const x = { on(b, c, p, C) {
        ne(b, c, p, C, !1);
      }, one(b, c, p, C) {
        ne(b, c, p, C, !0);
      }, off(b, c, p, C) {
        if (typeof c != "string" || !b) return;
        const [R, j, Q] = $(c, p, C), ee = Q !== c, re = it(b), ce = re[Q] || {}, he = c.startsWith(".");
        if (j === void 0) {
          if (he) for (const se of Object.keys(re)) ye(b, re, se, c.slice(1));
          for (const [se, De] of Object.entries(ce)) {
            const xe = se.replace(oe, "");
            ee && !c.includes(xe) || le(b, re, Q, De.callable, De.delegationSelector);
          }
        } else {
          if (!Object.keys(ce).length) return;
          le(b, re, Q, j, R ? p : null);
        }
      }, trigger(b, c, p) {
        if (typeof c != "string" || !b) return null;
        const C = L();
        let R = null, j = !0, Q = !0, ee = !1;
        c !== Ce(c) && C && (R = C.Event(c, p), C(b).trigger(R), j = !R.isPropagationStopped(), Q = !R.isImmediatePropagationStopped(), ee = R.isDefaultPrevented());
        const re = k(new Event(c, { bubbles: j, cancelable: !0 }), p);
        return ee && re.preventDefault(), Q && b.dispatchEvent(re), re.defaultPrevented && R && R.preventDefault(), re;
      } };
      function k(b, c = {}) {
        for (const [p, C] of Object.entries(c)) try {
          b[p] = C;
        } catch {
          Object.defineProperty(b, p, { configurable: !0, get: () => C });
        }
        return b;
      }
      function te(b) {
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
      function ae(b) {
        return b.replace(/[A-Z]/g, (c) => `-${c.toLowerCase()}`);
      }
      const ue = { setDataAttribute(b, c, p) {
        b.setAttribute(`data-bs-${ae(c)}`, p);
      }, removeDataAttribute(b, c) {
        b.removeAttribute(`data-bs-${ae(c)}`);
      }, getDataAttributes(b) {
        if (!b) return {};
        const c = {}, p = Object.keys(b.dataset).filter((C) => C.startsWith("bs") && !C.startsWith("bsConfig"));
        for (const C of p) {
          let R = C.replace(/^bs/, "");
          R = R.charAt(0).toLowerCase() + R.slice(1), c[R] = te(b.dataset[C]);
        }
        return c;
      }, getDataAttribute: (b, c) => te(b.getAttribute(`data-bs-${ae(c)}`)) };
      class fe {
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
          const C = m(p) ? ue.getDataAttribute(p, "config") : {};
          return { ...this.constructor.Default, ...typeof C == "object" ? C : {}, ...m(p) ? ue.getDataAttributes(p) : {}, ...typeof c == "object" ? c : {} };
        }
        _typeCheckConfig(c, p = this.constructor.DefaultType) {
          for (const [C, R] of Object.entries(p)) {
            const j = c[C], Q = m(j) ? "element" : h(j);
            if (!new RegExp(R).test(Q)) throw new TypeError(`${this.constructor.NAME.toUpperCase()}: Option "${C}" provided type "${Q}" but expected type "${R}".`);
          }
        }
      }
      class de extends fe {
        constructor(c, p) {
          super(), (c = v(c)) && (this._element = c, this._config = this._getConfig(p), o.set(this._element, this.constructor.DATA_KEY, this));
        }
        dispose() {
          o.remove(this._element, this.constructor.DATA_KEY), x.off(this._element, this.constructor.EVENT_KEY);
          for (const c of Object.getOwnPropertyNames(this)) this[c] = null;
        }
        _queueCallback(c, p, C = !0) {
          P(c, p, C);
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
      const Ve = (b) => {
        let c = b.getAttribute("data-bs-target");
        if (!c || c === "#") {
          let p = b.getAttribute("href");
          if (!p || !p.includes("#") && !p.startsWith(".")) return null;
          p.includes("#") && !p.startsWith("#") && (p = `#${p.split("#")[1]}`), c = p && p !== "#" ? p.trim() : null;
        }
        return c ? c.split(",").map((p) => d(p)).join(",") : null;
      }, ie = { find: (b, c = document.documentElement) => [].concat(...Element.prototype.querySelectorAll.call(c, b)), findOne: (b, c = document.documentElement) => Element.prototype.querySelector.call(c, b), children: (b, c) => [].concat(...b.children).filter((p) => p.matches(c)), parents(b, c) {
        const p = [];
        let C = b.parentNode.closest(c);
        for (; C; ) p.push(C), C = C.parentNode.closest(c);
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
        return this.find(c, b).filter((p) => !O(p) && S(p));
      }, getSelectorFromElement(b) {
        const c = Ve(b);
        return c && ie.findOne(c) ? c : null;
      }, getElementFromSelector(b) {
        const c = Ve(b);
        return c ? ie.findOne(c) : null;
      }, getMultipleElementsFromSelector(b) {
        const c = Ve(b);
        return c ? ie.find(c) : [];
      } }, At = (b, c = "hide") => {
        const p = `click.dismiss${b.EVENT_KEY}`, C = b.NAME;
        x.on(document, p, `[data-bs-dismiss="${C}"]`, function(R) {
          if (["A", "AREA"].includes(this.tagName) && R.preventDefault(), O(this)) return;
          const j = ie.getElementFromSelector(this) || this.closest(`.${C}`);
          b.getOrCreateInstance(j)[c]();
        });
      }, Ut = ".bs.alert", Ct = `close${Ut}`, Ke = `closed${Ut}`;
      class et extends de {
        static get NAME() {
          return "alert";
        }
        close() {
          if (x.trigger(this._element, Ct).defaultPrevented) return;
          this._element.classList.remove("show");
          const c = this._element.classList.contains("fade");
          this._queueCallback(() => this._destroyElement(), this._element, c);
        }
        _destroyElement() {
          this._element.remove(), x.trigger(this._element, Ke), this.dispose();
        }
        static jQueryInterface(c) {
          return this.each(function() {
            const p = et.getOrCreateInstance(this);
            if (typeof c == "string") {
              if (p[c] === void 0 || c.startsWith("_") || c === "constructor") throw new TypeError(`No method named "${c}"`);
              p[c](this);
            }
          });
        }
      }
      At(et, "close"), Z(et);
      const we = '[data-bs-toggle="button"]';
      class ze extends de {
        static get NAME() {
          return "button";
        }
        toggle() {
          this._element.setAttribute("aria-pressed", this._element.classList.toggle("active"));
        }
        static jQueryInterface(c) {
          return this.each(function() {
            const p = ze.getOrCreateInstance(this);
            c === "toggle" && p[c]();
          });
        }
      }
      x.on(document, "click.bs.button.data-api", we, (b) => {
        b.preventDefault();
        const c = b.target.closest(we);
        ze.getOrCreateInstance(c).toggle();
      }), Z(ze);
      const Yn = ".bs.swipe", yr = `touchstart${Yn}`, jl = `touchmove${Yn}`, zl = `touchend${Yn}`, Ll = `pointerdown${Yn}`, To = `pointerup${Yn}`, Ao = { endCallback: null, leftCallback: null, rightCallback: null }, rn = { endCallback: "(function|null)", leftCallback: "(function|null)", rightCallback: "(function|null)" };
      class Bi extends fe {
        constructor(c, p) {
          super(), this._element = c, c && Bi.isSupported() && (this._config = this._getConfig(p), this._deltaX = 0, this._supportPointerEvents = !!window.PointerEvent, this._initEvents());
        }
        static get Default() {
          return Ao;
        }
        static get DefaultType() {
          return rn;
        }
        static get NAME() {
          return "swipe";
        }
        dispose() {
          x.off(this._element, Yn);
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
          this._supportPointerEvents ? (x.on(this._element, Ll, (c) => this._start(c)), x.on(this._element, To, (c) => this._end(c)), this._element.classList.add("pointer-event")) : (x.on(this._element, yr, (c) => this._start(c)), x.on(this._element, jl, (c) => this._move(c)), x.on(this._element, zl, (c) => this._end(c)));
        }
        _eventIsPointerPenTouch(c) {
          return this._supportPointerEvents && (c.pointerType === "pen" || c.pointerType === "touch");
        }
        static isSupported() {
          return "ontouchstart" in document.documentElement || navigator.maxTouchPoints > 0;
        }
      }
      const Ue = ".bs.carousel", ca = ".data-api", di = "ArrowLeft", Zf = "ArrowRight", $i = "next", ki = "prev", qi = "left", Ya = "right", Rn = `slide${Ue}`, fa = `slid${Ue}`, Dn = `keydown${Ue}`, Kf = `mouseenter${Ue}`, Jf = `mouseleave${Ue}`, Wf = `dragstart${Ue}`, br = `load${Ue}${ca}`, _r = `click${Ue}${ca}`, Hl = "carousel", da = "active", Vl = ".active", Yi = ".carousel-item", Pf = Vl + Yi, du = { [di]: Ya, [Zf]: qi }, wo = { interval: 5e3, keyboard: !0, pause: "hover", ride: !1, touch: !0, wrap: !0 }, Ul = { interval: "(number|boolean)", keyboard: "boolean", pause: "(string|boolean)", ride: "(boolean|string)", touch: "boolean", wrap: "boolean" };
      class Gi extends de {
        constructor(c, p) {
          super(c, p), this._interval = null, this._activeElement = null, this._isSliding = !1, this.touchTimeout = null, this._swipeHelper = null, this._indicatorsElement = ie.findOne(".carousel-indicators", this._element), this._addEventListeners(), this._config.ride === Hl && this.cycle();
        }
        static get Default() {
          return wo;
        }
        static get DefaultType() {
          return Ul;
        }
        static get NAME() {
          return "carousel";
        }
        next() {
          this._slide($i);
        }
        nextWhenVisible() {
          !document.hidden && S(this._element) && this.next();
        }
        prev() {
          this._slide(ki);
        }
        pause() {
          this._isSliding && y(this._element), this._clearInterval();
        }
        cycle() {
          this._clearInterval(), this._updateInterval(), this._interval = setInterval(() => this.nextWhenVisible(), this._config.interval);
        }
        _maybeEnableCycle() {
          this._config.ride && (this._isSliding ? x.one(this._element, fa, () => this.cycle()) : this.cycle());
        }
        to(c) {
          const p = this._getItems();
          if (c > p.length - 1 || c < 0) return;
          if (this._isSliding) return void x.one(this._element, fa, () => this.to(c));
          const C = this._getItemIndex(this._getActive());
          if (C === c) return;
          const R = c > C ? $i : ki;
          this._slide(R, p[c]);
        }
        dispose() {
          this._swipeHelper && this._swipeHelper.dispose(), super.dispose();
        }
        _configAfterMerge(c) {
          return c.defaultInterval = c.interval, c;
        }
        _addEventListeners() {
          this._config.keyboard && x.on(this._element, Dn, (c) => this._keydown(c)), this._config.pause === "hover" && (x.on(this._element, Kf, () => this.pause()), x.on(this._element, Jf, () => this._maybeEnableCycle())), this._config.touch && Bi.isSupported() && this._addTouchEventListeners();
        }
        _addTouchEventListeners() {
          for (const p of ie.find(".carousel-item img", this._element)) x.on(p, Wf, (C) => C.preventDefault());
          const c = { leftCallback: () => this._slide(this._directionToOrder(qi)), rightCallback: () => this._slide(this._directionToOrder(Ya)), endCallback: () => {
            this._config.pause === "hover" && (this.pause(), this.touchTimeout && clearTimeout(this.touchTimeout), this.touchTimeout = setTimeout(() => this._maybeEnableCycle(), 500 + this._config.interval));
          } };
          this._swipeHelper = new Bi(this._element, c);
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
          const p = ie.findOne(Vl, this._indicatorsElement);
          p.classList.remove(da), p.removeAttribute("aria-current");
          const C = ie.findOne(`[data-bs-slide-to="${c}"]`, this._indicatorsElement);
          C && (C.classList.add(da), C.setAttribute("aria-current", "true"));
        }
        _updateInterval() {
          const c = this._activeElement || this._getActive();
          if (!c) return;
          const p = Number.parseInt(c.getAttribute("data-bs-interval"), 10);
          this._config.interval = p || this._config.defaultInterval;
        }
        _slide(c, p = null) {
          if (this._isSliding) return;
          const C = this._getActive(), R = c === $i, j = p || B(this._getItems(), C, R, this._config.wrap);
          if (j === C) return;
          const Q = this._getItemIndex(j), ee = (se) => x.trigger(this._element, se, { relatedTarget: j, direction: this._orderToDirection(c), from: this._getItemIndex(C), to: Q });
          if (ee(Rn).defaultPrevented || !C || !j) return;
          const re = !!this._interval;
          this.pause(), this._isSliding = !0, this._setActiveIndicatorElement(Q), this._activeElement = j;
          const ce = R ? "carousel-item-start" : "carousel-item-end", he = R ? "carousel-item-next" : "carousel-item-prev";
          j.classList.add(he), N(j), C.classList.add(ce), j.classList.add(ce), this._queueCallback(() => {
            j.classList.remove(ce, he), j.classList.add(da), C.classList.remove(da, he, ce), this._isSliding = !1, ee(fa);
          }, C, this._isAnimated()), re && this.cycle();
        }
        _isAnimated() {
          return this._element.classList.contains("slide");
        }
        _getActive() {
          return ie.findOne(Pf, this._element);
        }
        _getItems() {
          return ie.find(Yi, this._element);
        }
        _clearInterval() {
          this._interval && (clearInterval(this._interval), this._interval = null);
        }
        _directionToOrder(c) {
          return V() ? c === qi ? ki : $i : c === qi ? $i : ki;
        }
        _orderToDirection(c) {
          return V() ? c === ki ? qi : Ya : c === ki ? Ya : qi;
        }
        static jQueryInterface(c) {
          return this.each(function() {
            const p = Gi.getOrCreateInstance(this, c);
            if (typeof c != "number") {
              if (typeof c == "string") {
                if (p[c] === void 0 || c.startsWith("_") || c === "constructor") throw new TypeError(`No method named "${c}"`);
                p[c]();
              }
            } else p.to(c);
          });
        }
      }
      x.on(document, _r, "[data-bs-slide], [data-bs-slide-to]", function(b) {
        const c = ie.getElementFromSelector(this);
        if (!c || !c.classList.contains(Hl)) return;
        b.preventDefault();
        const p = Gi.getOrCreateInstance(c), C = this.getAttribute("data-bs-slide-to");
        return C ? (p.to(C), void p._maybeEnableCycle()) : ue.getDataAttribute(this, "slide") === "next" ? (p.next(), void p._maybeEnableCycle()) : (p.prev(), void p._maybeEnableCycle());
      }), x.on(window, br, () => {
        const b = ie.find('[data-bs-ride="carousel"]');
        for (const c of b) Gi.getOrCreateInstance(c);
      }), Z(Gi);
      const Xi = ".bs.collapse", hu = `show${Xi}`, pu = `shown${Xi}`, Mo = `hide${Xi}`, Ro = `hidden${Xi}`, mu = `click${Xi}.data-api`, Sr = "show", Nn = "collapse", Bt = "collapsing", Cn = `:scope .${Nn} .${Nn}`, Ga = '[data-bs-toggle="collapse"]', Do = { parent: null, toggle: !0 }, ed = { parent: "(null|element)", toggle: "boolean" };
      class Ii extends de {
        constructor(c, p) {
          super(c, p), this._isTransitioning = !1, this._triggerArray = [];
          const C = ie.find(Ga);
          for (const R of C) {
            const j = ie.getSelectorFromElement(R), Q = ie.find(j).filter((ee) => ee === this._element);
            j !== null && Q.length && this._triggerArray.push(R);
          }
          this._initializeChildren(), this._config.parent || this._addAriaAndCollapsedClass(this._triggerArray, this._isShown()), this._config.toggle && this.toggle();
        }
        static get Default() {
          return Do;
        }
        static get DefaultType() {
          return ed;
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
          if (this._config.parent && (c = this._getFirstLevelChildren(".collapse.show, .collapse.collapsing").filter((R) => R !== this._element).map((R) => Ii.getOrCreateInstance(R, { toggle: !1 }))), c.length && c[0]._isTransitioning || x.trigger(this._element, hu).defaultPrevented) return;
          for (const R of c) R.hide();
          const p = this._getDimension();
          this._element.classList.remove(Nn), this._element.classList.add(Bt), this._element.style[p] = 0, this._addAriaAndCollapsedClass(this._triggerArray, !0), this._isTransitioning = !0;
          const C = `scroll${p[0].toUpperCase() + p.slice(1)}`;
          this._queueCallback(() => {
            this._isTransitioning = !1, this._element.classList.remove(Bt), this._element.classList.add(Nn, Sr), this._element.style[p] = "", x.trigger(this._element, pu);
          }, this._element, !0), this._element.style[p] = `${this._element[C]}px`;
        }
        hide() {
          if (this._isTransitioning || !this._isShown() || x.trigger(this._element, Mo).defaultPrevented) return;
          const c = this._getDimension();
          this._element.style[c] = `${this._element.getBoundingClientRect()[c]}px`, N(this._element), this._element.classList.add(Bt), this._element.classList.remove(Nn, Sr);
          for (const p of this._triggerArray) {
            const C = ie.getElementFromSelector(p);
            C && !this._isShown(C) && this._addAriaAndCollapsedClass([p], !1);
          }
          this._isTransitioning = !0, this._element.style[c] = "", this._queueCallback(() => {
            this._isTransitioning = !1, this._element.classList.remove(Bt), this._element.classList.add(Nn), x.trigger(this._element, Ro);
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
          const c = this._getFirstLevelChildren(Ga);
          for (const p of c) {
            const C = ie.getElementFromSelector(p);
            C && this._addAriaAndCollapsedClass([p], this._isShown(C));
          }
        }
        _getFirstLevelChildren(c) {
          const p = ie.find(Cn, this._config.parent);
          return ie.find(c, this._config.parent).filter((C) => !p.includes(C));
        }
        _addAriaAndCollapsedClass(c, p) {
          if (c.length) for (const C of c) C.classList.toggle("collapsed", !p), C.setAttribute("aria-expanded", p);
        }
        static jQueryInterface(c) {
          const p = {};
          return typeof c == "string" && /show|hide/.test(c) && (p.toggle = !1), this.each(function() {
            const C = Ii.getOrCreateInstance(this, p);
            if (typeof c == "string") {
              if (C[c] === void 0) throw new TypeError(`No method named "${c}"`);
              C[c]();
            }
          });
        }
      }
      x.on(document, mu, Ga, function(b) {
        (b.target.tagName === "A" || b.delegateTarget && b.delegateTarget.tagName === "A") && b.preventDefault();
        for (const c of ie.getMultipleElementsFromSelector(this)) Ii.getOrCreateInstance(c, { toggle: !1 }).toggle();
      }), Z(Ii);
      var on = "top", nn = "bottom", gn = "right", $t = "left", Ta = "auto", ha = [on, nn, gn, $t], Gn = "start", wt = "end", No = "clippingParents", Er = "viewport", Xn = "popper", hi = "reference", jo = ha.reduce(function(b, c) {
        return b.concat([c + "-" + Gn, c + "-" + wt]);
      }, []), Cr = [].concat(ha, [Ta]).reduce(function(b, c) {
        return b.concat([c, c + "-" + Gn, c + "-" + wt]);
      }, []), zo = "beforeRead", gu = "read", Bl = "afterRead", $l = "beforeMain", pa = "main", jn = "afterMain", Lo = "beforeWrite", vu = "write", xr = "afterWrite", Ho = [zo, gu, Bl, $l, pa, jn, Lo, vu, xr];
      function zn(b) {
        return b ? (b.nodeName || "").toLowerCase() : null;
      }
      function Ln(b) {
        if (b == null) return window;
        if (b.toString() !== "[object Window]") {
          var c = b.ownerDocument;
          return c && c.defaultView || window;
        }
        return b;
      }
      function Ft(b) {
        return b instanceof Ln(b).Element || b instanceof Element;
      }
      function xn(b) {
        return b instanceof Ln(b).HTMLElement || b instanceof HTMLElement;
      }
      function Or(b) {
        return typeof ShadowRoot < "u" && (b instanceof Ln(b).ShadowRoot || b instanceof ShadowRoot);
      }
      const kl = { name: "applyStyles", enabled: !0, phase: "write", fn: function(b) {
        var c = b.state;
        Object.keys(c.elements).forEach(function(p) {
          var C = c.styles[p] || {}, R = c.attributes[p] || {}, j = c.elements[p];
          xn(j) && zn(j) && (Object.assign(j.style, C), Object.keys(R).forEach(function(Q) {
            var ee = R[Q];
            ee === !1 ? j.removeAttribute(Q) : j.setAttribute(Q, ee === !0 ? "" : ee);
          }));
        });
      }, effect: function(b) {
        var c = b.state, p = { popper: { position: c.options.strategy, left: "0", top: "0", margin: "0" }, arrow: { position: "absolute" }, reference: {} };
        return Object.assign(c.elements.popper.style, p.popper), c.styles = p, c.elements.arrow && Object.assign(c.elements.arrow.style, p.arrow), function() {
          Object.keys(c.elements).forEach(function(C) {
            var R = c.elements[C], j = c.attributes[C] || {}, Q = Object.keys(c.styles.hasOwnProperty(C) ? c.styles[C] : p[C]).reduce(function(ee, re) {
              return ee[re] = "", ee;
            }, {});
            xn(R) && zn(R) && (Object.assign(R.style, Q), Object.keys(j).forEach(function(ee) {
              R.removeAttribute(ee);
            }));
          });
        };
      }, requires: ["computeStyles"] };
      function vn(b) {
        return b.split("-")[0];
      }
      var Xa = Math.max, ql = Math.min, aa = Math.round;
      function Vo() {
        var b = navigator.userAgentData;
        return b != null && b.brands && Array.isArray(b.brands) ? b.brands.map(function(c) {
          return c.brand + "/" + c.version;
        }).join(" ") : navigator.userAgent;
      }
      function Uo() {
        return !/^((?!chrome|android).)*safari/i.test(Vo());
      }
      function pi(b, c, p) {
        c === void 0 && (c = !1), p === void 0 && (p = !1);
        var C = b.getBoundingClientRect(), R = 1, j = 1;
        c && xn(b) && (R = b.offsetWidth > 0 && aa(C.width) / b.offsetWidth || 1, j = b.offsetHeight > 0 && aa(C.height) / b.offsetHeight || 1);
        var Q = (Ft(b) ? Ln(b) : window).visualViewport, ee = !Uo() && p, re = (C.left + (ee && Q ? Q.offsetLeft : 0)) / R, ce = (C.top + (ee && Q ? Q.offsetTop : 0)) / j, he = C.width / R, se = C.height / j;
        return { width: he, height: se, top: ce, right: re + he, bottom: ce + se, left: re, x: re, y: ce };
      }
      function Yl(b) {
        var c = pi(b), p = b.offsetWidth, C = b.offsetHeight;
        return Math.abs(c.width - p) <= 1 && (p = c.width), Math.abs(c.height - C) <= 1 && (C = c.height), { x: b.offsetLeft, y: b.offsetTop, width: p, height: C };
      }
      function yu(b, c) {
        var p = c.getRootNode && c.getRootNode();
        if (b.contains(c)) return !0;
        if (p && Or(p)) {
          var C = c;
          do {
            if (C && b.isSameNode(C)) return !0;
            C = C.parentNode || C.host;
          } while (C);
        }
        return !1;
      }
      function Aa(b) {
        return Ln(b).getComputedStyle(b);
      }
      function Tr(b) {
        return ["table", "td", "th"].indexOf(zn(b)) >= 0;
      }
      function sn(b) {
        return ((Ft(b) ? b.ownerDocument : b.document) || window.document).documentElement;
      }
      function Fi(b) {
        return zn(b) === "html" ? b : b.assignedSlot || b.parentNode || (Or(b) ? b.host : null) || sn(b);
      }
      function Ar(b) {
        return xn(b) && Aa(b).position !== "fixed" ? b.offsetParent : null;
      }
      function ma(b) {
        for (var c = Ln(b), p = Ar(b); p && Tr(p) && Aa(p).position === "static"; ) p = Ar(p);
        return p && (zn(p) === "html" || zn(p) === "body" && Aa(p).position === "static") ? c : p || (function(C) {
          var R = /firefox/i.test(Vo());
          if (/Trident/i.test(Vo()) && xn(C) && Aa(C).position === "fixed") return null;
          var j = Fi(C);
          for (Or(j) && (j = j.host); xn(j) && ["html", "body"].indexOf(zn(j)) < 0; ) {
            var Q = Aa(j);
            if (Q.transform !== "none" || Q.perspective !== "none" || Q.contain === "paint" || ["transform", "perspective"].indexOf(Q.willChange) !== -1 || R && Q.willChange === "filter" || R && Q.filter && Q.filter !== "none") return j;
            j = j.parentNode;
          }
          return null;
        })(b) || c;
      }
      function Ia(b) {
        return ["top", "bottom"].indexOf(b) >= 0 ? "x" : "y";
      }
      function Qi(b, c, p) {
        return Xa(b, ql(c, p));
      }
      function wr(b) {
        return Object.assign({}, { top: 0, right: 0, bottom: 0, left: 0 }, b);
      }
      function Bo(b, c) {
        return c.reduce(function(p, C) {
          return p[C] = b, p;
        }, {});
      }
      const Zi = { name: "arrow", enabled: !0, phase: "main", fn: function(b) {
        var c, p = b.state, C = b.name, R = b.options, j = p.elements.arrow, Q = p.modifiersData.popperOffsets, ee = vn(p.placement), re = Ia(ee), ce = [$t, gn].indexOf(ee) >= 0 ? "height" : "width";
        if (j && Q) {
          var he = (function(tt, Pe) {
            return wr(typeof (tt = typeof tt == "function" ? tt(Object.assign({}, Pe.rects, { placement: Pe.placement })) : tt) != "number" ? tt : Bo(tt, ha));
          })(R.padding, p), se = Yl(j), De = re === "y" ? on : $t, xe = re === "y" ? nn : gn, Oe = p.rects.reference[ce] + p.rects.reference[re] - Q[re] - p.rects.popper[ce], Me = Q[re] - p.rects.reference[re], Se = ma(j), rt = Se ? re === "y" ? Se.clientHeight || 0 : Se.clientWidth || 0 : 0, ht = Oe / 2 - Me / 2, Re = he[De], qe = rt - se[ce] - he[xe], Ne = rt / 2 - se[ce] / 2 + ht, Xe = Qi(Re, Ne, qe), nt = re;
          p.modifiersData[C] = ((c = {})[nt] = Xe, c.centerOffset = Xe - Ne, c);
        }
      }, effect: function(b) {
        var c = b.state, p = b.options.element, C = p === void 0 ? "[data-popper-arrow]" : p;
        C != null && (typeof C != "string" || (C = c.elements.popper.querySelector(C))) && yu(c.elements.popper, C) && (c.elements.arrow = C);
      }, requires: ["popperOffsets"], requiresIfExists: ["preventOverflow"] };
      function On(b) {
        return b.split("-")[1];
      }
      var $o = { top: "auto", right: "auto", bottom: "auto", left: "auto" };
      function Ki(b) {
        var c, p = b.popper, C = b.popperRect, R = b.placement, j = b.variation, Q = b.offsets, ee = b.position, re = b.gpuAcceleration, ce = b.adaptive, he = b.roundOffsets, se = b.isFixed, De = Q.x, xe = De === void 0 ? 0 : De, Oe = Q.y, Me = Oe === void 0 ? 0 : Oe, Se = typeof he == "function" ? he({ x: xe, y: Me }) : { x: xe, y: Me };
        xe = Se.x, Me = Se.y;
        var rt = Q.hasOwnProperty("x"), ht = Q.hasOwnProperty("y"), Re = $t, qe = on, Ne = window;
        if (ce) {
          var Xe = ma(p), nt = "clientHeight", tt = "clientWidth";
          Xe === Ln(p) && Aa(Xe = sn(p)).position !== "static" && ee === "absolute" && (nt = "scrollHeight", tt = "scrollWidth"), (R === on || (R === $t || R === gn) && j === wt) && (qe = nn, Me -= (se && Xe === Ne && Ne.visualViewport ? Ne.visualViewport.height : Xe[nt]) - C.height, Me *= re ? 1 : -1), R !== $t && (R !== on && R !== nn || j !== wt) || (Re = gn, xe -= (se && Xe === Ne && Ne.visualViewport ? Ne.visualViewport.width : Xe[tt]) - C.width, xe *= re ? 1 : -1);
        }
        var Pe, Dt = Object.assign({ position: ee }, ce && $o), Tn = he === !0 ? (function(dn, Kt) {
          var $n = dn.x, An = dn.y, Ot = Kt.devicePixelRatio || 1;
          return { x: aa($n * Ot) / Ot || 0, y: aa(An * Ot) / Ot || 0 };
        })({ x: xe, y: Me }, Ln(p)) : { x: xe, y: Me };
        return xe = Tn.x, Me = Tn.y, re ? Object.assign({}, Dt, ((Pe = {})[qe] = ht ? "0" : "", Pe[Re] = rt ? "0" : "", Pe.transform = (Ne.devicePixelRatio || 1) <= 1 ? "translate(" + xe + "px, " + Me + "px)" : "translate3d(" + xe + "px, " + Me + "px, 0)", Pe)) : Object.assign({}, Dt, ((c = {})[qe] = ht ? Me + "px" : "", c[Re] = rt ? xe + "px" : "", c.transform = "", c));
      }
      const ga = { name: "computeStyles", enabled: !0, phase: "beforeWrite", fn: function(b) {
        var c = b.state, p = b.options, C = p.gpuAcceleration, R = C === void 0 || C, j = p.adaptive, Q = j === void 0 || j, ee = p.roundOffsets, re = ee === void 0 || ee, ce = { placement: vn(c.placement), variation: On(c.placement), popper: c.elements.popper, popperRect: c.rects.popper, gpuAcceleration: R, isFixed: c.options.strategy === "fixed" };
        c.modifiersData.popperOffsets != null && (c.styles.popper = Object.assign({}, c.styles.popper, Ki(Object.assign({}, ce, { offsets: c.modifiersData.popperOffsets, position: c.options.strategy, adaptive: Q, roundOffsets: re })))), c.modifiersData.arrow != null && (c.styles.arrow = Object.assign({}, c.styles.arrow, Ki(Object.assign({}, ce, { offsets: c.modifiersData.arrow, position: "absolute", adaptive: !1, roundOffsets: re })))), c.attributes.popper = Object.assign({}, c.attributes.popper, { "data-popper-placement": c.placement });
      }, data: {} };
      var Ji = { passive: !0 };
      const Wi = { name: "eventListeners", enabled: !0, phase: "write", fn: function() {
      }, effect: function(b) {
        var c = b.state, p = b.instance, C = b.options, R = C.scroll, j = R === void 0 || R, Q = C.resize, ee = Q === void 0 || Q, re = Ln(c.elements.popper), ce = [].concat(c.scrollParents.reference, c.scrollParents.popper);
        return j && ce.forEach(function(he) {
          he.addEventListener("scroll", p.update, Ji);
        }), ee && re.addEventListener("resize", p.update, Ji), function() {
          j && ce.forEach(function(he) {
            he.removeEventListener("scroll", p.update, Ji);
          }), ee && re.removeEventListener("resize", p.update, Ji);
        };
      }, data: {} };
      var bu = { left: "right", right: "left", bottom: "top", top: "bottom" };
      function mi(b) {
        return b.replace(/left|right|bottom|top/g, function(c) {
          return bu[c];
        });
      }
      var Mr = { start: "end", end: "start" };
      function ko(b) {
        return b.replace(/start|end/g, function(c) {
          return Mr[c];
        });
      }
      function un(b) {
        var c = Ln(b);
        return { scrollLeft: c.pageXOffset, scrollTop: c.pageYOffset };
      }
      function wa(b) {
        return pi(sn(b)).left + un(b).scrollLeft;
      }
      function Pi(b) {
        var c = Aa(b), p = c.overflow, C = c.overflowX, R = c.overflowY;
        return /auto|scroll|overlay|hidden/.test(p + R + C);
      }
      function el(b) {
        return ["html", "body", "#document"].indexOf(zn(b)) >= 0 ? b.ownerDocument.body : xn(b) && Pi(b) ? b : el(Fi(b));
      }
      function Gl(b, c) {
        var p;
        c === void 0 && (c = []);
        var C = el(b), R = C === ((p = b.ownerDocument) == null ? void 0 : p.body), j = Ln(C), Q = R ? [j].concat(j.visualViewport || [], Pi(C) ? C : []) : C, ee = c.concat(Q);
        return R ? ee : ee.concat(Gl(Fi(Q)));
      }
      function Xl(b) {
        return Object.assign({}, b, { left: b.x, top: b.y, right: b.x + b.width, bottom: b.y + b.height });
      }
      function Rr(b, c, p) {
        return c === Er ? Xl((function(C, R) {
          var j = Ln(C), Q = sn(C), ee = j.visualViewport, re = Q.clientWidth, ce = Q.clientHeight, he = 0, se = 0;
          if (ee) {
            re = ee.width, ce = ee.height;
            var De = Uo();
            (De || !De && R === "fixed") && (he = ee.offsetLeft, se = ee.offsetTop);
          }
          return { width: re, height: ce, x: he + wa(C), y: se };
        })(b, p)) : Ft(c) ? (function(C, R) {
          var j = pi(C, !1, R === "fixed");
          return j.top = j.top + C.clientTop, j.left = j.left + C.clientLeft, j.bottom = j.top + C.clientHeight, j.right = j.left + C.clientWidth, j.width = C.clientWidth, j.height = C.clientHeight, j.x = j.left, j.y = j.top, j;
        })(c, p) : Xl((function(C) {
          var R, j = sn(C), Q = un(C), ee = (R = C.ownerDocument) == null ? void 0 : R.body, re = Xa(j.scrollWidth, j.clientWidth, ee ? ee.scrollWidth : 0, ee ? ee.clientWidth : 0), ce = Xa(j.scrollHeight, j.clientHeight, ee ? ee.scrollHeight : 0, ee ? ee.clientHeight : 0), he = -Q.scrollLeft + wa(C), se = -Q.scrollTop;
          return Aa(ee || j).direction === "rtl" && (he += Xa(j.clientWidth, ee ? ee.clientWidth : 0) - re), { width: re, height: ce, x: he, y: se };
        })(sn(b)));
      }
      function tl(b) {
        var c, p = b.reference, C = b.element, R = b.placement, j = R ? vn(R) : null, Q = R ? On(R) : null, ee = p.x + p.width / 2 - C.width / 2, re = p.y + p.height / 2 - C.height / 2;
        switch (j) {
          case on:
            c = { x: ee, y: p.y - C.height };
            break;
          case nn:
            c = { x: ee, y: p.y + p.height };
            break;
          case gn:
            c = { x: p.x + p.width, y: re };
            break;
          case $t:
            c = { x: p.x - C.width, y: re };
            break;
          default:
            c = { x: p.x, y: p.y };
        }
        var ce = j ? Ia(j) : null;
        if (ce != null) {
          var he = ce === "y" ? "height" : "width";
          switch (Q) {
            case Gn:
              c[ce] = c[ce] - (p[he] / 2 - C[he] / 2);
              break;
            case wt:
              c[ce] = c[ce] + (p[he] / 2 - C[he] / 2);
          }
        }
        return c;
      }
      function Ma(b, c) {
        c === void 0 && (c = {});
        var p = c, C = p.placement, R = C === void 0 ? b.placement : C, j = p.strategy, Q = j === void 0 ? b.strategy : j, ee = p.boundary, re = ee === void 0 ? No : ee, ce = p.rootBoundary, he = ce === void 0 ? Er : ce, se = p.elementContext, De = se === void 0 ? Xn : se, xe = p.altBoundary, Oe = xe !== void 0 && xe, Me = p.padding, Se = Me === void 0 ? 0 : Me, rt = wr(typeof Se != "number" ? Se : Bo(Se, ha)), ht = De === Xn ? hi : Xn, Re = b.rects.popper, qe = b.elements[Oe ? ht : De], Ne = (function(Kt, $n, An, Ot) {
          var Nt = $n === "clippingParents" ? (function(pt) {
            var jt = Gl(Fi(pt)), Tt = ["absolute", "fixed"].indexOf(Aa(pt).position) >= 0 && xn(pt) ? ma(pt) : pt;
            return Ft(Tt) ? jt.filter(function(mt) {
              return Ft(mt) && yu(mt, Tt) && zn(mt) !== "body";
            }) : [];
          })(Kt) : [].concat($n), Vt = [].concat(Nt, [An]), kn = Vt[0], qt = Vt.reduce(function(pt, jt) {
            var Tt = Rr(Kt, jt, Ot);
            return pt.top = Xa(Tt.top, pt.top), pt.right = ql(Tt.right, pt.right), pt.bottom = ql(Tt.bottom, pt.bottom), pt.left = Xa(Tt.left, pt.left), pt;
          }, Rr(Kt, kn, Ot));
          return qt.width = qt.right - qt.left, qt.height = qt.bottom - qt.top, qt.x = qt.left, qt.y = qt.top, qt;
        })(Ft(qe) ? qe : qe.contextElement || sn(b.elements.popper), re, he, Q), Xe = pi(b.elements.reference), nt = tl({ reference: Xe, element: Re, placement: R }), tt = Xl(Object.assign({}, Re, nt)), Pe = De === Xn ? tt : Xe, Dt = { top: Ne.top - Pe.top + rt.top, bottom: Pe.bottom - Ne.bottom + rt.bottom, left: Ne.left - Pe.left + rt.left, right: Pe.right - Ne.right + rt.right }, Tn = b.modifiersData.offset;
        if (De === Xn && Tn) {
          var dn = Tn[R];
          Object.keys(Dt).forEach(function(Kt) {
            var $n = [gn, nn].indexOf(Kt) >= 0 ? 1 : -1, An = [on, nn].indexOf(Kt) >= 0 ? "y" : "x";
            Dt[Kt] += dn[An] * $n;
          });
        }
        return Dt;
      }
      function _u(b, c) {
        c === void 0 && (c = {});
        var p = c, C = p.placement, R = p.boundary, j = p.rootBoundary, Q = p.padding, ee = p.flipVariations, re = p.allowedAutoPlacements, ce = re === void 0 ? Cr : re, he = On(C), se = he ? ee ? jo : jo.filter(function(Oe) {
          return On(Oe) === he;
        }) : ha, De = se.filter(function(Oe) {
          return ce.indexOf(Oe) >= 0;
        });
        De.length === 0 && (De = se);
        var xe = De.reduce(function(Oe, Me) {
          return Oe[Me] = Ma(b, { placement: Me, boundary: R, rootBoundary: j, padding: Q })[vn(Me)], Oe;
        }, {});
        return Object.keys(xe).sort(function(Oe, Me) {
          return xe[Oe] - xe[Me];
        });
      }
      const Su = { name: "flip", enabled: !0, phase: "main", fn: function(b) {
        var c = b.state, p = b.options, C = b.name;
        if (!c.modifiersData[C]._skip) {
          for (var R = p.mainAxis, j = R === void 0 || R, Q = p.altAxis, ee = Q === void 0 || Q, re = p.fallbackPlacements, ce = p.padding, he = p.boundary, se = p.rootBoundary, De = p.altBoundary, xe = p.flipVariations, Oe = xe === void 0 || xe, Me = p.allowedAutoPlacements, Se = c.options.placement, rt = vn(Se), ht = re || (rt !== Se && Oe ? (function(pt) {
            if (vn(pt) === Ta) return [];
            var jt = mi(pt);
            return [ko(pt), jt, ko(jt)];
          })(Se) : [mi(Se)]), Re = [Se].concat(ht).reduce(function(pt, jt) {
            return pt.concat(vn(jt) === Ta ? _u(c, { placement: jt, boundary: he, rootBoundary: se, padding: ce, flipVariations: Oe, allowedAutoPlacements: Me }) : jt);
          }, []), qe = c.rects.reference, Ne = c.rects.popper, Xe = /* @__PURE__ */ new Map(), nt = !0, tt = Re[0], Pe = 0; Pe < Re.length; Pe++) {
            var Dt = Re[Pe], Tn = vn(Dt), dn = On(Dt) === Gn, Kt = [on, nn].indexOf(Tn) >= 0, $n = Kt ? "width" : "height", An = Ma(c, { placement: Dt, boundary: he, rootBoundary: se, altBoundary: De, padding: ce }), Ot = Kt ? dn ? gn : $t : dn ? nn : on;
            qe[$n] > Ne[$n] && (Ot = mi(Ot));
            var Nt = mi(Ot), Vt = [];
            if (j && Vt.push(An[Tn] <= 0), ee && Vt.push(An[Ot] <= 0, An[Nt] <= 0), Vt.every(function(pt) {
              return pt;
            })) {
              tt = Dt, nt = !1;
              break;
            }
            Xe.set(Dt, Vt);
          }
          if (nt) for (var kn = function(pt) {
            var jt = Re.find(function(Tt) {
              var mt = Xe.get(Tt);
              if (mt) return mt.slice(0, pt).every(function(Si) {
                return Si;
              });
            });
            if (jt) return tt = jt, "break";
          }, qt = Oe ? 3 : 1; qt > 0 && kn(qt) !== "break"; qt--) ;
          c.placement !== tt && (c.modifiersData[C]._skip = !0, c.placement = tt, c.reset = !0);
        }
      }, requiresIfExists: ["offset"], data: { _skip: !1 } };
      function Eu(b, c, p) {
        return p === void 0 && (p = { x: 0, y: 0 }), { top: b.top - c.height - p.y, right: b.right - c.width + p.x, bottom: b.bottom - c.height + p.y, left: b.left - c.width - p.x };
      }
      function Cu(b) {
        return [on, gn, nn, $t].some(function(c) {
          return b[c] >= 0;
        });
      }
      const Dr = { name: "hide", enabled: !0, phase: "main", requiresIfExists: ["preventOverflow"], fn: function(b) {
        var c = b.state, p = b.name, C = c.rects.reference, R = c.rects.popper, j = c.modifiersData.preventOverflow, Q = Ma(c, { elementContext: "reference" }), ee = Ma(c, { altBoundary: !0 }), re = Eu(Q, C), ce = Eu(ee, R, j), he = Cu(re), se = Cu(ce);
        c.modifiersData[p] = { referenceClippingOffsets: re, popperEscapeOffsets: ce, isReferenceHidden: he, hasPopperEscaped: se }, c.attributes.popper = Object.assign({}, c.attributes.popper, { "data-popper-reference-hidden": he, "data-popper-escaped": se });
      } }, xu = { name: "offset", enabled: !0, phase: "main", requires: ["popperOffsets"], fn: function(b) {
        var c = b.state, p = b.options, C = b.name, R = p.offset, j = R === void 0 ? [0, 0] : R, Q = Cr.reduce(function(he, se) {
          return he[se] = (function(De, xe, Oe) {
            var Me = vn(De), Se = [$t, on].indexOf(Me) >= 0 ? -1 : 1, rt = typeof Oe == "function" ? Oe(Object.assign({}, xe, { placement: De })) : Oe, ht = rt[0], Re = rt[1];
            return ht = ht || 0, Re = (Re || 0) * Se, [$t, gn].indexOf(Me) >= 0 ? { x: Re, y: ht } : { x: ht, y: Re };
          })(se, c.rects, j), he;
        }, {}), ee = Q[c.placement], re = ee.x, ce = ee.y;
        c.modifiersData.popperOffsets != null && (c.modifiersData.popperOffsets.x += re, c.modifiersData.popperOffsets.y += ce), c.modifiersData[C] = Q;
      } }, qo = { name: "popperOffsets", enabled: !0, phase: "read", fn: function(b) {
        var c = b.state, p = b.name;
        c.modifiersData[p] = tl({ reference: c.rects.reference, element: c.rects.popper, placement: c.placement });
      }, data: {} }, Ou = { name: "preventOverflow", enabled: !0, phase: "main", fn: function(b) {
        var c = b.state, p = b.options, C = b.name, R = p.mainAxis, j = R === void 0 || R, Q = p.altAxis, ee = Q !== void 0 && Q, re = p.boundary, ce = p.rootBoundary, he = p.altBoundary, se = p.padding, De = p.tether, xe = De === void 0 || De, Oe = p.tetherOffset, Me = Oe === void 0 ? 0 : Oe, Se = Ma(c, { boundary: re, rootBoundary: ce, padding: se, altBoundary: he }), rt = vn(c.placement), ht = On(c.placement), Re = !ht, qe = Ia(rt), Ne = qe === "x" ? "y" : "x", Xe = c.modifiersData.popperOffsets, nt = c.rects.reference, tt = c.rects.popper, Pe = typeof Me == "function" ? Me(Object.assign({}, c.rects, { placement: c.placement })) : Me, Dt = typeof Pe == "number" ? { mainAxis: Pe, altAxis: Pe } : Object.assign({ mainAxis: 0, altAxis: 0 }, Pe), Tn = c.modifiersData.offset ? c.modifiersData.offset[c.placement] : null, dn = { x: 0, y: 0 };
        if (Xe) {
          if (j) {
            var Kt, $n = qe === "y" ? on : $t, An = qe === "y" ? nn : gn, Ot = qe === "y" ? "height" : "width", Nt = Xe[qe], Vt = Nt + Se[$n], kn = Nt - Se[An], qt = xe ? -tt[Ot] / 2 : 0, pt = ht === Gn ? nt[Ot] : tt[Ot], jt = ht === Gn ? -tt[Ot] : -nt[Ot], Tt = c.elements.arrow, mt = xe && Tt ? Yl(Tt) : { width: 0, height: 0 }, Si = c.modifiersData["arrow#persistent"] ? c.modifiersData["arrow#persistent"].padding : { top: 0, right: 0, bottom: 0, left: 0 }, Sa = Si[$n], je = Si[An], at = Qi(0, nt[Ot], mt[Ot]), Yt = Re ? nt[Ot] / 2 - qt - at - Sa - Dt.mainAxis : pt - at - Sa - Dt.mainAxis, Yr = Re ? -nt[Ot] / 2 + qt + at + je + Dt.mainAxis : jt + at + je + Dt.mainAxis, ii = c.elements.arrow && ma(c.elements.arrow), Ei = ii ? qe === "y" ? ii.clientTop || 0 : ii.clientLeft || 0 : 0, ar = (Kt = Tn?.[qe]) != null ? Kt : 0, ir = Nt + Yr - ar, Ci = Qi(xe ? ql(Vt, Nt + Yt - ar - Ei) : Vt, Nt, xe ? Xa(kn, ir) : kn);
            Xe[qe] = Ci, dn[qe] = Ci - Nt;
          }
          if (ee) {
            var nc, zt = qe === "x" ? on : $t, _s = qe === "x" ? nn : gn, Ha = Xe[Ne], lr = Ne === "y" ? "height" : "width", Ss = Ha + Se[zt], ac = Ha - Se[_s], rr = [on, $t].indexOf(rt) !== -1, Gr = (nc = Tn?.[Ne]) != null ? nc : 0, Xr = rr ? Ss : Ha - nt[lr] - tt[lr] - Gr + Dt.altAxis, hn = rr ? Ha + nt[lr] + tt[lr] - Gr - Dt.altAxis : ac, Lt = xe && rr ? (function(Ir, or, gl) {
              var Fr = Qi(Ir, or, gl);
              return Fr > gl ? gl : Fr;
            })(Xr, Ha, hn) : Qi(xe ? Xr : Ss, Ha, xe ? hn : ac);
            Xe[Ne] = Lt, dn[Ne] = Lt - Ha;
          }
          c.modifiersData[C] = dn;
        }
      }, requiresIfExists: ["offset"] };
      function td(b, c, p) {
        p === void 0 && (p = !1);
        var C, R, j = xn(c), Q = xn(c) && (function(se) {
          var De = se.getBoundingClientRect(), xe = aa(De.width) / se.offsetWidth || 1, Oe = aa(De.height) / se.offsetHeight || 1;
          return xe !== 1 || Oe !== 1;
        })(c), ee = sn(c), re = pi(b, Q, p), ce = { scrollLeft: 0, scrollTop: 0 }, he = { x: 0, y: 0 };
        return (j || !j && !p) && ((zn(c) !== "body" || Pi(ee)) && (ce = (C = c) !== Ln(C) && xn(C) ? { scrollLeft: (R = C).scrollLeft, scrollTop: R.scrollTop } : un(C)), xn(c) ? ((he = pi(c, !0)).x += c.clientLeft, he.y += c.clientTop) : ee && (he.x = wa(ee))), { x: re.left + ce.scrollLeft - he.x, y: re.top + ce.scrollTop - he.y, width: re.width, height: re.height };
      }
      function nd(b) {
        var c = /* @__PURE__ */ new Map(), p = /* @__PURE__ */ new Set(), C = [];
        function R(j) {
          p.add(j.name), [].concat(j.requires || [], j.requiresIfExists || []).forEach(function(Q) {
            if (!p.has(Q)) {
              var ee = c.get(Q);
              ee && R(ee);
            }
          }), C.push(j);
        }
        return b.forEach(function(j) {
          c.set(j.name, j);
        }), b.forEach(function(j) {
          p.has(j.name) || R(j);
        }), C;
      }
      var Yo = { placement: "bottom", modifiers: [], strategy: "absolute" };
      function Tu() {
        for (var b = arguments.length, c = new Array(b), p = 0; p < b; p++) c[p] = arguments[p];
        return !c.some(function(C) {
          return !(C && typeof C.getBoundingClientRect == "function");
        });
      }
      function Nr(b) {
        b === void 0 && (b = {});
        var c = b, p = c.defaultModifiers, C = p === void 0 ? [] : p, R = c.defaultOptions, j = R === void 0 ? Yo : R;
        return function(Q, ee, re) {
          re === void 0 && (re = j);
          var ce, he, se = { placement: "bottom", orderedModifiers: [], options: Object.assign({}, Yo, j), modifiersData: {}, elements: { reference: Q, popper: ee }, attributes: {}, styles: {} }, De = [], xe = !1, Oe = { state: se, setOptions: function(Se) {
            var rt = typeof Se == "function" ? Se(se.options) : Se;
            Me(), se.options = Object.assign({}, j, se.options, rt), se.scrollParents = { reference: Ft(Q) ? Gl(Q) : Q.contextElement ? Gl(Q.contextElement) : [], popper: Gl(ee) };
            var ht, Re, qe = (function(Ne) {
              var Xe = nd(Ne);
              return Ho.reduce(function(nt, tt) {
                return nt.concat(Xe.filter(function(Pe) {
                  return Pe.phase === tt;
                }));
              }, []);
            })((ht = [].concat(C, se.options.modifiers), Re = ht.reduce(function(Ne, Xe) {
              var nt = Ne[Xe.name];
              return Ne[Xe.name] = nt ? Object.assign({}, nt, Xe, { options: Object.assign({}, nt.options, Xe.options), data: Object.assign({}, nt.data, Xe.data) }) : Xe, Ne;
            }, {}), Object.keys(Re).map(function(Ne) {
              return Re[Ne];
            })));
            return se.orderedModifiers = qe.filter(function(Ne) {
              return Ne.enabled;
            }), se.orderedModifiers.forEach(function(Ne) {
              var Xe = Ne.name, nt = Ne.options, tt = nt === void 0 ? {} : nt, Pe = Ne.effect;
              if (typeof Pe == "function") {
                var Dt = Pe({ state: se, name: Xe, instance: Oe, options: tt });
                De.push(Dt || function() {
                });
              }
            }), Oe.update();
          }, forceUpdate: function() {
            if (!xe) {
              var Se = se.elements, rt = Se.reference, ht = Se.popper;
              if (Tu(rt, ht)) {
                se.rects = { reference: td(rt, ma(ht), se.options.strategy === "fixed"), popper: Yl(ht) }, se.reset = !1, se.placement = se.options.placement, se.orderedModifiers.forEach(function(Pe) {
                  return se.modifiersData[Pe.name] = Object.assign({}, Pe.data);
                });
                for (var Re = 0; Re < se.orderedModifiers.length; Re++) if (se.reset !== !0) {
                  var qe = se.orderedModifiers[Re], Ne = qe.fn, Xe = qe.options, nt = Xe === void 0 ? {} : Xe, tt = qe.name;
                  typeof Ne == "function" && (se = Ne({ state: se, options: nt, name: tt, instance: Oe }) || se);
                } else se.reset = !1, Re = -1;
              }
            }
          }, update: (ce = function() {
            return new Promise(function(Se) {
              Oe.forceUpdate(), Se(se);
            });
          }, function() {
            return he || (he = new Promise(function(Se) {
              Promise.resolve().then(function() {
                he = void 0, Se(ce());
              });
            })), he;
          }), destroy: function() {
            Me(), xe = !0;
          } };
          if (!Tu(Q, ee)) return Oe;
          function Me() {
            De.forEach(function(Se) {
              return Se();
            }), De = [];
          }
          return Oe.setOptions(re).then(function(Se) {
            !xe && re.onFirstUpdate && re.onFirstUpdate(Se);
          }), Oe;
        };
      }
      var ad = Nr(), id = Nr({ defaultModifiers: [Wi, qo, ga, kl] }), Il = Nr({ defaultModifiers: [Wi, qo, ga, kl, xu, Su, Ou, Zi, Dr] });
      const Au = Object.freeze(Object.defineProperty({ __proto__: null, afterMain: jn, afterRead: Bl, afterWrite: xr, applyStyles: kl, arrow: Zi, auto: Ta, basePlacements: ha, beforeMain: $l, beforeRead: zo, beforeWrite: Lo, bottom: nn, clippingParents: No, computeStyles: ga, createPopper: Il, createPopperBase: ad, createPopperLite: id, detectOverflow: Ma, end: wt, eventListeners: Wi, flip: Su, hide: Dr, left: $t, main: pa, modifierPhases: Ho, offset: xu, placements: Cr, popper: Xn, popperGenerator: Nr, popperOffsets: qo, preventOverflow: Ou, read: gu, reference: hi, right: gn, start: Gn, top: on, variationPlacements: jo, viewport: Er, write: vu }, Symbol.toStringTag, { value: "Module" })), wu = "dropdown", gi = ".bs.dropdown", jr = ".data-api", ld = "ArrowUp", Mu = "ArrowDown", rd = `hide${gi}`, od = `hidden${gi}`, sd = `show${gi}`, ud = `shown${gi}`, Ru = `click${gi}${jr}`, Du = `keydown${gi}${jr}`, cd = `keyup${gi}${jr}`, Fa = "show", ia = '[data-bs-toggle="dropdown"]:not(.disabled):not(:disabled)', fd = `${ia}.${Fa}`, Fl = ".dropdown-menu", Nu = V() ? "top-end" : "top-start", ju = V() ? "top-start" : "top-end", zu = V() ? "bottom-end" : "bottom-start", Lu = V() ? "bottom-start" : "bottom-end", nl = V() ? "left-start" : "right-start", dd = V() ? "right-start" : "left-start", hd = { autoClose: !0, boundary: "clippingParents", display: "dynamic", offset: [0, 2], popperConfig: null, reference: "toggle" }, pd = { autoClose: "(boolean|string)", boundary: "(string|element)", display: "string", offset: "(array|string|function)", popperConfig: "(null|object|function)", reference: "(string|element|object)" };
      class In extends de {
        constructor(c, p) {
          super(c, p), this._popper = null, this._parent = this._element.parentNode, this._menu = ie.next(this._element, Fl)[0] || ie.prev(this._element, Fl)[0] || ie.findOne(Fl, this._parent), this._inNavbar = this._detectNavbar();
        }
        static get Default() {
          return hd;
        }
        static get DefaultType() {
          return pd;
        }
        static get NAME() {
          return wu;
        }
        toggle() {
          return this._isShown() ? this.hide() : this.show();
        }
        show() {
          if (O(this._element) || this._isShown()) return;
          const c = { relatedTarget: this._element };
          if (!x.trigger(this._element, sd, c).defaultPrevented) {
            if (this._createPopper(), "ontouchstart" in document.documentElement && !this._parent.closest(".navbar-nav")) for (const p of [].concat(...document.body.children)) x.on(p, "mouseover", D);
            this._element.focus(), this._element.setAttribute("aria-expanded", !0), this._menu.classList.add(Fa), this._element.classList.add(Fa), x.trigger(this._element, ud, c);
          }
        }
        hide() {
          if (O(this._element) || !this._isShown()) return;
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
          if (!x.trigger(this._element, rd, c).defaultPrevented) {
            if ("ontouchstart" in document.documentElement) for (const p of [].concat(...document.body.children)) x.off(p, "mouseover", D);
            this._popper && this._popper.destroy(), this._menu.classList.remove(Fa), this._element.classList.remove(Fa), this._element.setAttribute("aria-expanded", "false"), ue.removeDataAttribute(this._menu, "popper"), x.trigger(this._element, od, c);
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
          this._popper = Il(c, this._menu, p);
        }
        _isShown() {
          return this._menu.classList.contains(Fa);
        }
        _getPlacement() {
          const c = this._parent;
          if (c.classList.contains("dropend")) return nl;
          if (c.classList.contains("dropstart")) return dd;
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
          return (this._inNavbar || this._config.display === "static") && (ue.setDataAttribute(this._menu, "popper", "static"), c.modifiers = [{ name: "applyStyles", enabled: !1 }]), { ...c, ...X(this._config.popperConfig, [void 0, c]) };
        }
        _selectMenuItem({ key: c, target: p }) {
          const C = ie.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)", this._menu).filter((R) => S(R));
          C.length && B(C, p, c === Mu, !C.includes(p)).focus();
        }
        static jQueryInterface(c) {
          return this.each(function() {
            const p = In.getOrCreateInstance(this, c);
            if (typeof c == "string") {
              if (p[c] === void 0) throw new TypeError(`No method named "${c}"`);
              p[c]();
            }
          });
        }
        static clearMenus(c) {
          if (c.button === 2 || c.type === "keyup" && c.key !== "Tab") return;
          const p = ie.find(fd);
          for (const C of p) {
            const R = In.getInstance(C);
            if (!R || R._config.autoClose === !1) continue;
            const j = c.composedPath(), Q = j.includes(R._menu);
            if (j.includes(R._element) || R._config.autoClose === "inside" && !Q || R._config.autoClose === "outside" && Q || R._menu.contains(c.target) && (c.type === "keyup" && c.key === "Tab" || /input|select|option|textarea|form/i.test(c.target.tagName))) continue;
            const ee = { relatedTarget: R._element };
            c.type === "click" && (ee.clickEvent = c), R._completeHide(ee);
          }
        }
        static dataApiKeydownHandler(c) {
          const p = /input|textarea/i.test(c.target.tagName), C = c.key === "Escape", R = [ld, Mu].includes(c.key);
          if (!R && !C || p && !C) return;
          c.preventDefault();
          const j = this.matches(ia) ? this : ie.prev(this, ia)[0] || ie.next(this, ia)[0] || ie.findOne(ia, c.delegateTarget.parentNode), Q = In.getOrCreateInstance(j);
          if (R) return c.stopPropagation(), Q.show(), void Q._selectMenuItem(c);
          Q._isShown() && (c.stopPropagation(), Q.hide(), j.focus());
        }
      }
      x.on(document, Du, ia, In.dataApiKeydownHandler), x.on(document, Du, Fl, In.dataApiKeydownHandler), x.on(document, Ru, In.clearMenus), x.on(document, cd, In.clearMenus), x.on(document, Ru, ia, function(b) {
        b.preventDefault(), In.getOrCreateInstance(this).toggle();
      }), Z(In);
      const Go = "backdrop", al = "show", il = `mousedown.bs.${Go}`, md = { className: "modal-backdrop", clickCallback: null, isAnimated: !1, isVisible: !0, rootElement: "body" }, zr = { className: "string", clickCallback: "(function|null)", isAnimated: "boolean", isVisible: "boolean", rootElement: "(element|string)" };
      class Xo extends fe {
        constructor(c) {
          super(), this._config = this._getConfig(c), this._isAppended = !1, this._element = null;
        }
        static get Default() {
          return md;
        }
        static get DefaultType() {
          return zr;
        }
        static get NAME() {
          return Go;
        }
        show(c) {
          if (!this._config.isVisible) return void X(c);
          this._append();
          const p = this._getElement();
          this._config.isAnimated && N(p), p.classList.add(al), this._emulateAnimation(() => {
            X(c);
          });
        }
        hide(c) {
          this._config.isVisible ? (this._getElement().classList.remove(al), this._emulateAnimation(() => {
            this.dispose(), X(c);
          })) : X(c);
        }
        dispose() {
          this._isAppended && (x.off(this._element, il), this._element.remove(), this._isAppended = !1);
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
          this._config.rootElement.append(c), x.on(c, il, () => {
            X(this._config.clickCallback);
          }), this._isAppended = !0;
        }
        _emulateAnimation(c) {
          P(c, this._getElement(), this._config.isAnimated);
        }
      }
      const Ql = ".bs.focustrap", Io = `focusin${Ql}`, Fo = `keydown.tab${Ql}`, Qo = "backward", Hu = { autofocus: !0, trapElement: null }, Vu = { autofocus: "boolean", trapElement: "element" };
      class Uu extends fe {
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
          this._isActive || (this._config.autofocus && this._config.trapElement.focus(), x.off(document, Ql), x.on(document, Io, (c) => this._handleFocusin(c)), x.on(document, Fo, (c) => this._handleKeydown(c)), this._isActive = !0);
        }
        deactivate() {
          this._isActive && (this._isActive = !1, x.off(document, Ql));
        }
        _handleFocusin(c) {
          const { trapElement: p } = this._config;
          if (c.target === document || c.target === p || p.contains(c.target)) return;
          const C = ie.focusableChildren(p);
          C.length === 0 ? p.focus() : this._lastTabNavDirection === Qo ? C[C.length - 1].focus() : C[0].focus();
        }
        _handleKeydown(c) {
          c.key === "Tab" && (this._lastTabNavDirection = c.shiftKey ? Qo : "forward");
        }
      }
      const Bu = ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top", $u = ".sticky-top", Lr = "padding-right", ku = "margin-right";
      class yn {
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
        _setElementAttributes(c, p, C) {
          const R = this.getWidth();
          this._applyManipulationCallback(c, (j) => {
            if (j !== this._element && window.innerWidth > j.clientWidth + R) return;
            this._saveInitialAttribute(j, p);
            const Q = window.getComputedStyle(j).getPropertyValue(p);
            j.style.setProperty(p, `${C(Number.parseFloat(Q))}px`);
          });
        }
        _saveInitialAttribute(c, p) {
          const C = c.style.getPropertyValue(p);
          C && ue.setDataAttribute(c, p, C);
        }
        _resetElementAttributes(c, p) {
          this._applyManipulationCallback(c, (C) => {
            const R = ue.getDataAttribute(C, p);
            R !== null ? (ue.removeDataAttribute(C, p), C.style.setProperty(p, R)) : C.style.removeProperty(p);
          });
        }
        _applyManipulationCallback(c, p) {
          if (m(c)) p(c);
          else for (const C of ie.find(c, this._element)) p(C);
        }
      }
      const cn = ".bs.modal", qu = `hide${cn}`, Yu = `hidePrevented${cn}`, Zo = `hidden${cn}`, Ko = `show${cn}`, Jo = `shown${cn}`, gd = `resize${cn}`, ll = `click.dismiss${cn}`, Wo = `mousedown.dismiss${cn}`, Zl = `keydown.dismiss${cn}`, Po = `click${cn}.data-api`, es = "modal-open", Qa = "show", Za = "modal-static", ts = { backdrop: !0, focus: !0, keyboard: !0 }, Gu = { backdrop: "(boolean|string)", focus: "boolean", keyboard: "boolean" };
      class Hn extends de {
        constructor(c, p) {
          super(c, p), this._dialog = ie.findOne(".modal-dialog", this._element), this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._isShown = !1, this._isTransitioning = !1, this._scrollBar = new yn(), this._addEventListeners();
        }
        static get Default() {
          return ts;
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
          this._isShown || this._isTransitioning || x.trigger(this._element, Ko, { relatedTarget: c }).defaultPrevented || (this._isShown = !0, this._isTransitioning = !0, this._scrollBar.hide(), document.body.classList.add(es), this._adjustDialog(), this._backdrop.show(() => this._showElement(c)));
        }
        hide() {
          this._isShown && !this._isTransitioning && (x.trigger(this._element, qu).defaultPrevented || (this._isShown = !1, this._isTransitioning = !0, this._focustrap.deactivate(), this._element.classList.remove(Qa), this._queueCallback(() => this._hideModal(), this._element, this._isAnimated())));
        }
        dispose() {
          x.off(window, cn), x.off(this._dialog, cn), this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        handleUpdate() {
          this._adjustDialog();
        }
        _initializeBackDrop() {
          return new Xo({ isVisible: !!this._config.backdrop, isAnimated: this._isAnimated() });
        }
        _initializeFocusTrap() {
          return new Uu({ trapElement: this._element });
        }
        _showElement(c) {
          document.body.contains(this._element) || document.body.append(this._element), this._element.style.display = "block", this._element.removeAttribute("aria-hidden"), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.scrollTop = 0;
          const p = ie.findOne(".modal-body", this._dialog);
          p && (p.scrollTop = 0), N(this._element), this._element.classList.add(Qa), this._queueCallback(() => {
            this._config.focus && this._focustrap.activate(), this._isTransitioning = !1, x.trigger(this._element, Jo, { relatedTarget: c });
          }, this._dialog, this._isAnimated());
        }
        _addEventListeners() {
          x.on(this._element, Zl, (c) => {
            c.key === "Escape" && (this._config.keyboard ? this.hide() : this._triggerBackdropTransition());
          }), x.on(window, gd, () => {
            this._isShown && !this._isTransitioning && this._adjustDialog();
          }), x.on(this._element, Wo, (c) => {
            x.one(this._element, ll, (p) => {
              this._element === c.target && this._element === p.target && (this._config.backdrop !== "static" ? this._config.backdrop && this.hide() : this._triggerBackdropTransition());
            });
          });
        }
        _hideModal() {
          this._element.style.display = "none", this._element.setAttribute("aria-hidden", !0), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._isTransitioning = !1, this._backdrop.hide(() => {
            document.body.classList.remove(es), this._resetAdjustments(), this._scrollBar.reset(), x.trigger(this._element, Zo);
          });
        }
        _isAnimated() {
          return this._element.classList.contains("fade");
        }
        _triggerBackdropTransition() {
          if (x.trigger(this._element, Yu).defaultPrevented) return;
          const c = this._element.scrollHeight > document.documentElement.clientHeight, p = this._element.style.overflowY;
          p === "hidden" || this._element.classList.contains(Za) || (c || (this._element.style.overflowY = "hidden"), this._element.classList.add(Za), this._queueCallback(() => {
            this._element.classList.remove(Za), this._queueCallback(() => {
              this._element.style.overflowY = p;
            }, this._dialog);
          }, this._dialog), this._element.focus());
        }
        _adjustDialog() {
          const c = this._element.scrollHeight > document.documentElement.clientHeight, p = this._scrollBar.getWidth(), C = p > 0;
          if (C && !c) {
            const R = V() ? "paddingLeft" : "paddingRight";
            this._element.style[R] = `${p}px`;
          }
          if (!C && c) {
            const R = V() ? "paddingRight" : "paddingLeft";
            this._element.style[R] = `${p}px`;
          }
        }
        _resetAdjustments() {
          this._element.style.paddingLeft = "", this._element.style.paddingRight = "";
        }
        static jQueryInterface(c, p) {
          return this.each(function() {
            const C = Hn.getOrCreateInstance(this, c);
            if (typeof c == "string") {
              if (C[c] === void 0) throw new TypeError(`No method named "${c}"`);
              C[c](p);
            }
          });
        }
      }
      x.on(document, Po, '[data-bs-toggle="modal"]', function(b) {
        const c = ie.getElementFromSelector(this);
        ["A", "AREA"].includes(this.tagName) && b.preventDefault(), x.one(c, Ko, (C) => {
          C.defaultPrevented || x.one(c, Zo, () => {
            S(this) && this.focus();
          });
        });
        const p = ie.findOne(".modal.show");
        p && Hn.getInstance(p).hide(), Hn.getOrCreateInstance(c).toggle(this);
      }), At(Hn), Z(Hn);
      const va = ".bs.offcanvas", ns = ".data-api", Xu = `load${va}${ns}`, Iu = "show", Fu = "showing", Qu = "hiding", as = ".offcanvas.show", Zu = `show${va}`, is = `shown${va}`, la = `hide${va}`, Kl = `hidePrevented${va}`, Vn = `hidden${va}`, rl = `resize${va}`, ls = `click${va}${ns}`, Hr = `keydown.dismiss${va}`, Vr = { backdrop: !0, keyboard: !0, scroll: !1 }, rs = { backdrop: "(boolean|string)", keyboard: "boolean", scroll: "boolean" };
      class bn extends de {
        constructor(c, p) {
          super(c, p), this._isShown = !1, this._backdrop = this._initializeBackDrop(), this._focustrap = this._initializeFocusTrap(), this._addEventListeners();
        }
        static get Default() {
          return Vr;
        }
        static get DefaultType() {
          return rs;
        }
        static get NAME() {
          return "offcanvas";
        }
        toggle(c) {
          return this._isShown ? this.hide() : this.show(c);
        }
        show(c) {
          this._isShown || x.trigger(this._element, Zu, { relatedTarget: c }).defaultPrevented || (this._isShown = !0, this._backdrop.show(), this._config.scroll || new yn().hide(), this._element.setAttribute("aria-modal", !0), this._element.setAttribute("role", "dialog"), this._element.classList.add(Fu), this._queueCallback(() => {
            this._config.scroll && !this._config.backdrop || this._focustrap.activate(), this._element.classList.add(Iu), this._element.classList.remove(Fu), x.trigger(this._element, is, { relatedTarget: c });
          }, this._element, !0));
        }
        hide() {
          this._isShown && (x.trigger(this._element, la).defaultPrevented || (this._focustrap.deactivate(), this._element.blur(), this._isShown = !1, this._element.classList.add(Qu), this._backdrop.hide(), this._queueCallback(() => {
            this._element.classList.remove(Iu, Qu), this._element.removeAttribute("aria-modal"), this._element.removeAttribute("role"), this._config.scroll || new yn().reset(), x.trigger(this._element, Vn);
          }, this._element, !0)));
        }
        dispose() {
          this._backdrop.dispose(), this._focustrap.deactivate(), super.dispose();
        }
        _initializeBackDrop() {
          const c = !!this._config.backdrop;
          return new Xo({ className: "offcanvas-backdrop", isVisible: c, isAnimated: !0, rootElement: this._element.parentNode, clickCallback: c ? () => {
            this._config.backdrop !== "static" ? this.hide() : x.trigger(this._element, Kl);
          } : null });
        }
        _initializeFocusTrap() {
          return new Uu({ trapElement: this._element });
        }
        _addEventListeners() {
          x.on(this._element, Hr, (c) => {
            c.key === "Escape" && (this._config.keyboard ? this.hide() : x.trigger(this._element, Kl));
          });
        }
        static jQueryInterface(c) {
          return this.each(function() {
            const p = bn.getOrCreateInstance(this, c);
            if (typeof c == "string") {
              if (p[c] === void 0 || c.startsWith("_") || c === "constructor") throw new TypeError(`No method named "${c}"`);
              p[c](this);
            }
          });
        }
      }
      x.on(document, ls, '[data-bs-toggle="offcanvas"]', function(b) {
        const c = ie.getElementFromSelector(this);
        if (["A", "AREA"].includes(this.tagName) && b.preventDefault(), O(this)) return;
        x.one(c, Vn, () => {
          S(this) && this.focus();
        });
        const p = ie.findOne(as);
        p && p !== c && bn.getInstance(p).hide(), bn.getOrCreateInstance(c).toggle(this);
      }), x.on(window, Xu, () => {
        for (const b of ie.find(as)) bn.getOrCreateInstance(b).show();
      }), x.on(window, rl, () => {
        for (const b of ie.find("[aria-modal][class*=show][class*=offcanvas-]")) getComputedStyle(b).position !== "fixed" && bn.getOrCreateInstance(b).hide();
      }), At(bn), Z(bn);
      const os = { "*": ["class", "dir", "id", "lang", "role", /^aria-[\w-]*$/i], a: ["target", "href", "title", "rel"], area: [], b: [], br: [], col: [], code: [], dd: [], div: [], dl: [], dt: [], em: [], hr: [], h1: [], h2: [], h3: [], h4: [], h5: [], h6: [], i: [], img: ["src", "srcset", "alt", "title", "width", "height"], li: [], ol: [], p: [], pre: [], s: [], small: [], span: [], sub: [], sup: [], strong: [], u: [], ul: [] }, Ur = /* @__PURE__ */ new Set(["background", "cite", "href", "itemtype", "longdesc", "poster", "src", "xlink:href"]), ol = /^(?!javascript:)(?:[a-z0-9+.-]+:|[^&:/?#]*(?:[/?#]|$))/i, vd = (b, c) => {
        const p = b.nodeName.toLowerCase();
        return c.includes(p) ? !Ur.has(p) || !!ol.test(b.nodeValue) : c.filter((C) => C instanceof RegExp).some((C) => C.test(p));
      }, Un = { allowList: os, content: {}, extraClass: "", html: !1, sanitize: !0, sanitizeFn: null, template: "<div></div>" }, ss = { allowList: "object", content: "object", extraClass: "(string|function)", html: "boolean", sanitize: "boolean", sanitizeFn: "(null|function)", template: "string" }, Ra = { entry: "(string|element|function|null)", selector: "(string|element)" };
      class Ku extends fe {
        constructor(c) {
          super(), this._config = this._getConfig(c);
        }
        static get Default() {
          return Un;
        }
        static get DefaultType() {
          return ss;
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
          for (const [R, j] of Object.entries(this._config.content)) this._setContent(c, j, R);
          const p = c.children[0], C = this._resolvePossibleFunction(this._config.extraClass);
          return C && p.classList.add(...C.split(" ")), p;
        }
        _typeCheckConfig(c) {
          super._typeCheckConfig(c), this._checkContent(c.content);
        }
        _checkContent(c) {
          for (const [p, C] of Object.entries(c)) super._typeCheckConfig({ selector: p, entry: C }, Ra);
        }
        _setContent(c, p, C) {
          const R = ie.findOne(C, c);
          R && ((p = this._resolvePossibleFunction(p)) ? m(p) ? this._putElementInTemplate(v(p), R) : this._config.html ? R.innerHTML = this._maybeSanitize(p) : R.textContent = p : R.remove());
        }
        _maybeSanitize(c) {
          return this._config.sanitize ? (function(p, C, R) {
            if (!p.length) return p;
            if (R && typeof R == "function") return R(p);
            const j = new window.DOMParser().parseFromString(p, "text/html"), Q = [].concat(...j.body.querySelectorAll("*"));
            for (const ee of Q) {
              const re = ee.nodeName.toLowerCase();
              if (!Object.keys(C).includes(re)) {
                ee.remove();
                continue;
              }
              const ce = [].concat(...ee.attributes), he = [].concat(C["*"] || [], C[re] || []);
              for (const se of ce) vd(se, he) || ee.removeAttribute(se.nodeName);
            }
            return j.body.innerHTML;
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
      const Br = /* @__PURE__ */ new Set(["sanitize", "allowList", "sanitizeFn"]), Da = "fade", sl = "show", Ju = ".tooltip-inner", $r = ".modal", us = "hide.bs.modal", fn = "hover", Ka = "focus", Ja = "click", kr = { AUTO: "auto", TOP: "top", RIGHT: V() ? "left" : "right", BOTTOM: "bottom", LEFT: V() ? "right" : "left" }, Jl = { allowList: os, animation: !0, boundary: "clippingParents", container: !1, customClass: "", delay: 0, fallbackPlacements: ["top", "right", "bottom", "left"], html: !1, offset: [0, 6], placement: "top", popperConfig: null, sanitize: !0, sanitizeFn: null, selector: !1, template: '<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>', title: "", trigger: "hover focus" }, Fn = { allowList: "object", animation: "boolean", boundary: "(string|element)", container: "(string|element|boolean)", customClass: "(string|function)", delay: "(number|object)", fallbackPlacements: "array", html: "boolean", offset: "(array|string|function)", placement: "(string|function)", popperConfig: "(null|object|function)", sanitize: "boolean", sanitizeFn: "(null|function)", selector: "(string|boolean)", template: "string", title: "(string|element|function)", trigger: "string" };
      class Qt extends de {
        constructor(c, p) {
          if (Au === void 0) throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org/docs/v2/)");
          super(c, p), this._isEnabled = !0, this._timeout = 0, this._isHovered = null, this._activeTrigger = {}, this._popper = null, this._templateFactory = null, this._newContent = null, this.tip = null, this._setListeners(), this._config.selector || this._fixTitle();
        }
        static get Default() {
          return Jl;
        }
        static get DefaultType() {
          return Fn;
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
          clearTimeout(this._timeout), x.off(this._element.closest($r), us, this._hideModalHandler), this._element.getAttribute("data-bs-original-title") && this._element.setAttribute("title", this._element.getAttribute("data-bs-original-title")), this._disposePopper(), super.dispose();
        }
        show() {
          if (this._element.style.display === "none") throw new Error("Please use show on visible elements");
          if (!this._isWithContent() || !this._isEnabled) return;
          const c = x.trigger(this._element, this.constructor.eventName("show")), p = (A(this._element) || this._element.ownerDocument.documentElement).contains(this._element);
          if (c.defaultPrevented || !p) return;
          this._disposePopper();
          const C = this._getTipElement();
          this._element.setAttribute("aria-describedby", C.getAttribute("id"));
          const { container: R } = this._config;
          if (this._element.ownerDocument.documentElement.contains(this.tip) || (R.append(C), x.trigger(this._element, this.constructor.eventName("inserted"))), this._popper = this._createPopper(C), C.classList.add(sl), "ontouchstart" in document.documentElement) for (const j of [].concat(...document.body.children)) x.on(j, "mouseover", D);
          this._queueCallback(() => {
            x.trigger(this._element, this.constructor.eventName("shown")), this._isHovered === !1 && this._leave(), this._isHovered = !1;
          }, this.tip, this._isAnimated());
        }
        hide() {
          if (this._isShown() && !x.trigger(this._element, this.constructor.eventName("hide")).defaultPrevented) {
            if (this._getTipElement().classList.remove(sl), "ontouchstart" in document.documentElement) for (const c of [].concat(...document.body.children)) x.off(c, "mouseover", D);
            this._activeTrigger[Ja] = !1, this._activeTrigger[Ka] = !1, this._activeTrigger[fn] = !1, this._isHovered = null, this._queueCallback(() => {
              this._isWithActiveTrigger() || (this._isHovered || this._disposePopper(), this._element.removeAttribute("aria-describedby"), x.trigger(this._element, this.constructor.eventName("hidden")));
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
          p.classList.remove(Da, sl), p.classList.add(`bs-${this.constructor.NAME}-auto`);
          const C = ((R) => {
            do
              R += Math.floor(1e6 * Math.random());
            while (document.getElementById(R));
            return R;
          })(this.constructor.NAME).toString();
          return p.setAttribute("id", C), this._isAnimated() && p.classList.add(Da), p;
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
          return this._config.animation || this.tip && this.tip.classList.contains(Da);
        }
        _isShown() {
          return this.tip && this.tip.classList.contains(sl);
        }
        _createPopper(c) {
          const p = X(this._config.placement, [this, c, this._element]), C = kr[p.toUpperCase()];
          return Il(this._element, c, this._getPopperConfig(C));
        }
        _getOffset() {
          const { offset: c } = this._config;
          return typeof c == "string" ? c.split(",").map((p) => Number.parseInt(p, 10)) : typeof c == "function" ? (p) => c(p, this._element) : c;
        }
        _resolvePossibleFunction(c) {
          return X(c, [this._element, this._element]);
        }
        _getPopperConfig(c) {
          const p = { placement: c, modifiers: [{ name: "flip", options: { fallbackPlacements: this._config.fallbackPlacements } }, { name: "offset", options: { offset: this._getOffset() } }, { name: "preventOverflow", options: { boundary: this._config.boundary } }, { name: "arrow", options: { element: `.${this.constructor.NAME}-arrow` } }, { name: "preSetPlacement", enabled: !0, phase: "beforeMain", fn: (C) => {
            this._getTipElement().setAttribute("data-popper-placement", C.state.placement);
          } }] };
          return { ...p, ...X(this._config.popperConfig, [void 0, p]) };
        }
        _setListeners() {
          const c = this._config.trigger.split(" ");
          for (const p of c) if (p === "click") x.on(this._element, this.constructor.eventName("click"), this._config.selector, (C) => {
            const R = this._initializeOnDelegatedTarget(C);
            R._activeTrigger[Ja] = !(R._isShown() && R._activeTrigger[Ja]), R.toggle();
          });
          else if (p !== "manual") {
            const C = p === fn ? this.constructor.eventName("mouseenter") : this.constructor.eventName("focusin"), R = p === fn ? this.constructor.eventName("mouseleave") : this.constructor.eventName("focusout");
            x.on(this._element, C, this._config.selector, (j) => {
              const Q = this._initializeOnDelegatedTarget(j);
              Q._activeTrigger[j.type === "focusin" ? Ka : fn] = !0, Q._enter();
            }), x.on(this._element, R, this._config.selector, (j) => {
              const Q = this._initializeOnDelegatedTarget(j);
              Q._activeTrigger[j.type === "focusout" ? Ka : fn] = Q._element.contains(j.relatedTarget), Q._leave();
            });
          }
          this._hideModalHandler = () => {
            this._element && this.hide();
          }, x.on(this._element.closest($r), us, this._hideModalHandler);
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
          const p = ue.getDataAttributes(this._element);
          for (const C of Object.keys(p)) Br.has(C) && delete p[C];
          return c = { ...p, ...typeof c == "object" && c ? c : {} }, c = this._mergeConfigObj(c), c = this._configAfterMerge(c), this._typeCheckConfig(c), c;
        }
        _configAfterMerge(c) {
          return c.container = c.container === !1 ? document.body : v(c.container), typeof c.delay == "number" && (c.delay = { show: c.delay, hide: c.delay }), typeof c.title == "number" && (c.title = c.title.toString()), typeof c.content == "number" && (c.content = c.content.toString()), c;
        }
        _getDelegateConfig() {
          const c = {};
          for (const [p, C] of Object.entries(this._config)) this.constructor.Default[p] !== C && (c[p] = C);
          return c.selector = !1, c.trigger = "manual", c;
        }
        _disposePopper() {
          this._popper && (this._popper.destroy(), this._popper = null), this.tip && (this.tip.remove(), this.tip = null);
        }
        static jQueryInterface(c) {
          return this.each(function() {
            const p = Qt.getOrCreateInstance(this, c);
            if (typeof c == "string") {
              if (p[c] === void 0) throw new TypeError(`No method named "${c}"`);
              p[c]();
            }
          });
        }
      }
      Z(Qt);
      const Wa = ".popover-header", ya = ".popover-body", ba = { ...Qt.Default, content: "", offset: [0, 8], placement: "right", template: '<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>', trigger: "click" }, Na = { ...Qt.DefaultType, content: "(null|string|element|function)" };
      class Wl extends Qt {
        static get Default() {
          return ba;
        }
        static get DefaultType() {
          return Na;
        }
        static get NAME() {
          return "popover";
        }
        _isWithContent() {
          return this._getTitle() || this._getContent();
        }
        _getContentForTemplate() {
          return { [Wa]: this._getTitle(), [ya]: this._getContent() };
        }
        _getContent() {
          return this._resolvePossibleFunction(this._config.content);
        }
        static jQueryInterface(c) {
          return this.each(function() {
            const p = Wl.getOrCreateInstance(this, c);
            if (typeof c == "string") {
              if (p[c] === void 0) throw new TypeError(`No method named "${c}"`);
              p[c]();
            }
          });
        }
      }
      Z(Wl);
      const Pl = ".bs.scrollspy", cs = `activate${Pl}`, fs = `click${Pl}`, an = `load${Pl}.data-api`, lt = "active", Ge = "[href]", ja = ".nav-link", Qn = `${ja}, .nav-item > ${ja}, .list-group-item`, ds = { offset: null, rootMargin: "0px 0px -25%", smoothScroll: !1, target: null, threshold: [0.1, 0.5, 1] }, Pa = { offset: "(number|null)", rootMargin: "string", smoothScroll: "boolean", target: "element", threshold: "array" };
      class ul extends de {
        constructor(c, p) {
          super(c, p), this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map(), this._rootElement = getComputedStyle(this._element).overflowY === "visible" ? null : this._element, this._activeTarget = null, this._observer = null, this._previousScrollData = { visibleEntryTop: 0, parentScrollTop: 0 }, this.refresh();
        }
        static get Default() {
          return ds;
        }
        static get DefaultType() {
          return Pa;
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
          this._config.smoothScroll && (x.off(this._config.target, fs), x.on(this._config.target, fs, Ge, (c) => {
            const p = this._observableSections.get(c.target.hash);
            if (p) {
              c.preventDefault();
              const C = this._rootElement || window, R = p.offsetTop - this._element.offsetTop;
              if (C.scrollTo) return void C.scrollTo({ top: R, behavior: "smooth" });
              C.scrollTop = R;
            }
          }));
        }
        _getNewObserver() {
          const c = { root: this._rootElement, threshold: this._config.threshold, rootMargin: this._config.rootMargin };
          return new IntersectionObserver((p) => this._observerCallback(p), c);
        }
        _observerCallback(c) {
          const p = (Q) => this._targetLinks.get(`#${Q.target.id}`), C = (Q) => {
            this._previousScrollData.visibleEntryTop = Q.target.offsetTop, this._process(p(Q));
          }, R = (this._rootElement || document.documentElement).scrollTop, j = R >= this._previousScrollData.parentScrollTop;
          this._previousScrollData.parentScrollTop = R;
          for (const Q of c) {
            if (!Q.isIntersecting) {
              this._activeTarget = null, this._clearActiveClass(p(Q));
              continue;
            }
            const ee = Q.target.offsetTop >= this._previousScrollData.visibleEntryTop;
            if (j && ee) {
              if (C(Q), !R) return;
            } else j || ee || C(Q);
          }
        }
        _initializeTargetsAndObservables() {
          this._targetLinks = /* @__PURE__ */ new Map(), this._observableSections = /* @__PURE__ */ new Map();
          const c = ie.find(Ge, this._config.target);
          for (const p of c) {
            if (!p.hash || O(p)) continue;
            const C = ie.findOne(decodeURI(p.hash), this._element);
            S(C) && (this._targetLinks.set(decodeURI(p.hash), p), this._observableSections.set(p.hash, C));
          }
        }
        _process(c) {
          this._activeTarget !== c && (this._clearActiveClass(this._config.target), this._activeTarget = c, c.classList.add(lt), this._activateParents(c), x.trigger(this._element, cs, { relatedTarget: c }));
        }
        _activateParents(c) {
          if (c.classList.contains("dropdown-item")) ie.findOne(".dropdown-toggle", c.closest(".dropdown")).classList.add(lt);
          else for (const p of ie.parents(c, ".nav, .list-group")) for (const C of ie.prev(p, Qn)) C.classList.add(lt);
        }
        _clearActiveClass(c) {
          c.classList.remove(lt);
          const p = ie.find(`${Ge}.${lt}`, c);
          for (const C of p) C.classList.remove(lt);
        }
        static jQueryInterface(c) {
          return this.each(function() {
            const p = ul.getOrCreateInstance(this, c);
            if (typeof c == "string") {
              if (p[c] === void 0 || c.startsWith("_") || c === "constructor") throw new TypeError(`No method named "${c}"`);
              p[c]();
            }
          });
        }
      }
      x.on(window, an, () => {
        for (const b of ie.find('[data-bs-spy="scroll"]')) ul.getOrCreateInstance(b);
      }), Z(ul);
      const ei = ".bs.tab", cl = `hide${ei}`, vi = `hidden${ei}`, hs = `show${ei}`, er = `shown${ei}`, ps = `click${ei}`, yi = `keydown${ei}`, za = `load${ei}`, ti = "ArrowLeft", _a = "ArrowRight", ms = "ArrowUp", qr = "ArrowDown", ni = "Home", tr = "End", Bn = "active", Zt = "fade", fl = "show", gs = ".dropdown-toggle", vs = `:not(${gs})`, Wu = '[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]', ys = `.nav-link${vs}, .list-group-item${vs}, [role="tab"]${vs}, ${Wu}`, kt = `.${Bn}[data-bs-toggle="tab"], .${Bn}[data-bs-toggle="pill"], .${Bn}[data-bs-toggle="list"]`;
      class La extends de {
        constructor(c) {
          super(c), this._parent = this._element.closest('.list-group, .nav, [role="tablist"]'), this._parent && (this._setInitialAttributes(this._parent, this._getChildren()), x.on(this._element, yi, (p) => this._keydown(p)));
        }
        static get NAME() {
          return "tab";
        }
        show() {
          const c = this._element;
          if (this._elemIsActive(c)) return;
          const p = this._getActiveElem(), C = p ? x.trigger(p, cl, { relatedTarget: c }) : null;
          x.trigger(c, hs, { relatedTarget: p }).defaultPrevented || C && C.defaultPrevented || (this._deactivate(p, c), this._activate(c, p));
        }
        _activate(c, p) {
          c && (c.classList.add(Bn), this._activate(ie.getElementFromSelector(c)), this._queueCallback(() => {
            c.getAttribute("role") === "tab" ? (c.removeAttribute("tabindex"), c.setAttribute("aria-selected", !0), this._toggleDropDown(c, !0), x.trigger(c, er, { relatedTarget: p })) : c.classList.add(fl);
          }, c, c.classList.contains(Zt)));
        }
        _deactivate(c, p) {
          c && (c.classList.remove(Bn), c.blur(), this._deactivate(ie.getElementFromSelector(c)), this._queueCallback(() => {
            c.getAttribute("role") === "tab" ? (c.setAttribute("aria-selected", !1), c.setAttribute("tabindex", "-1"), this._toggleDropDown(c, !1), x.trigger(c, vi, { relatedTarget: p })) : c.classList.remove(fl);
          }, c, c.classList.contains(Zt)));
        }
        _keydown(c) {
          if (![ti, _a, ms, qr, ni, tr].includes(c.key)) return;
          c.stopPropagation(), c.preventDefault();
          const p = this._getChildren().filter((R) => !O(R));
          let C;
          if ([ni, tr].includes(c.key)) C = p[c.key === ni ? 0 : p.length - 1];
          else {
            const R = [_a, qr].includes(c.key);
            C = B(p, c.target, R, !0);
          }
          C && (C.focus({ preventScroll: !0 }), La.getOrCreateInstance(C).show());
        }
        _getChildren() {
          return ie.find(ys, this._parent);
        }
        _getActiveElem() {
          return this._getChildren().find((c) => this._elemIsActive(c)) || null;
        }
        _setInitialAttributes(c, p) {
          this._setAttributeIfNotExists(c, "role", "tablist");
          for (const C of p) this._setInitialAttributesOnChild(C);
        }
        _setInitialAttributesOnChild(c) {
          c = this._getInnerElement(c);
          const p = this._elemIsActive(c), C = this._getOuterElement(c);
          c.setAttribute("aria-selected", p), C !== c && this._setAttributeIfNotExists(C, "role", "presentation"), p || c.setAttribute("tabindex", "-1"), this._setAttributeIfNotExists(c, "role", "tab"), this._setInitialAttributesOnTargetPanel(c);
        }
        _setInitialAttributesOnTargetPanel(c) {
          const p = ie.getElementFromSelector(c);
          p && (this._setAttributeIfNotExists(p, "role", "tabpanel"), c.id && this._setAttributeIfNotExists(p, "aria-labelledby", `${c.id}`));
        }
        _toggleDropDown(c, p) {
          const C = this._getOuterElement(c);
          if (!C.classList.contains("dropdown")) return;
          const R = (j, Q) => {
            const ee = ie.findOne(j, C);
            ee && ee.classList.toggle(Q, p);
          };
          R(gs, Bn), R(".dropdown-menu", fl), C.setAttribute("aria-expanded", p);
        }
        _setAttributeIfNotExists(c, p, C) {
          c.hasAttribute(p) || c.setAttribute(p, C);
        }
        _elemIsActive(c) {
          return c.classList.contains(Bn);
        }
        _getInnerElement(c) {
          return c.matches(ys) ? c : ie.findOne(ys, c);
        }
        _getOuterElement(c) {
          return c.closest(".nav-item, .list-group-item") || c;
        }
        static jQueryInterface(c) {
          return this.each(function() {
            const p = La.getOrCreateInstance(this);
            if (typeof c == "string") {
              if (p[c] === void 0 || c.startsWith("_") || c === "constructor") throw new TypeError(`No method named "${c}"`);
              p[c]();
            }
          });
        }
      }
      x.on(document, ps, Wu, function(b) {
        ["A", "AREA"].includes(this.tagName) && b.preventDefault(), O(this) || La.getOrCreateInstance(this).show();
      }), x.on(window, za, () => {
        for (const b of ie.find(kt)) La.getOrCreateInstance(b);
      }), Z(La);
      const Zn = ".bs.toast", nr = `mouseover${Zn}`, bs = `mouseout${Zn}`, dl = `focusin${Zn}`, hl = `focusout${Zn}`, yd = `hide${Zn}`, Pu = `hidden${Zn}`, bd = `show${Zn}`, ec = `shown${Zn}`, ai = "hide", pl = "show", bi = "showing", tc = { animation: "boolean", autohide: "boolean", delay: "number" }, ml = { animation: !0, autohide: !0, delay: 5e3 };
      class _i extends de {
        constructor(c, p) {
          super(c, p), this._timeout = null, this._hasMouseInteraction = !1, this._hasKeyboardInteraction = !1, this._setListeners();
        }
        static get Default() {
          return ml;
        }
        static get DefaultType() {
          return tc;
        }
        static get NAME() {
          return "toast";
        }
        show() {
          x.trigger(this._element, bd).defaultPrevented || (this._clearTimeout(), this._config.animation && this._element.classList.add("fade"), this._element.classList.remove(ai), N(this._element), this._element.classList.add(pl, bi), this._queueCallback(() => {
            this._element.classList.remove(bi), x.trigger(this._element, ec), this._maybeScheduleHide();
          }, this._element, this._config.animation));
        }
        hide() {
          this.isShown() && (x.trigger(this._element, yd).defaultPrevented || (this._element.classList.add(bi), this._queueCallback(() => {
            this._element.classList.add(ai), this._element.classList.remove(bi, pl), x.trigger(this._element, Pu);
          }, this._element, this._config.animation)));
        }
        dispose() {
          this._clearTimeout(), this.isShown() && this._element.classList.remove(pl), super.dispose();
        }
        isShown() {
          return this._element.classList.contains(pl);
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
          const C = c.relatedTarget;
          this._element === C || this._element.contains(C) || this._maybeScheduleHide();
        }
        _setListeners() {
          x.on(this._element, nr, (c) => this._onInteraction(c, !0)), x.on(this._element, bs, (c) => this._onInteraction(c, !1)), x.on(this._element, dl, (c) => this._onInteraction(c, !0)), x.on(this._element, hl, (c) => this._onInteraction(c, !1));
        }
        _clearTimeout() {
          clearTimeout(this._timeout), this._timeout = null;
        }
        static jQueryInterface(c) {
          return this.each(function() {
            const p = _i.getOrCreateInstance(this, c);
            if (typeof c == "string") {
              if (p[c] === void 0) throw new TypeError(`No method named "${c}"`);
              p[c](this);
            }
          });
        }
      }
      return At(_i), Z(_i), { Alert: et, Button: ze, Carousel: Gi, Collapse: Ii, Dropdown: In, Modal: Hn, Offcanvas: bn, Popover: Wl, ScrollSpy: ul, Tab: La, Toast: _i, Tooltip: Qt };
    });
  })(Pc)), Pc.exports;
}
eS();
var Vh = { exports: {} };
/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
var ey;
function tS() {
  return ey || (ey = 1, (function(a) {
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
  })(Vh)), Vh.exports;
}
var nS = tS();
const Ae = /* @__PURE__ */ Af(nS);
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
function ty(a) {
  return "default" + a.charAt(0).toUpperCase() + a.substr(1);
}
function aS(a) {
  var i = iS(a, "string");
  return typeof i == "symbol" ? i : String(i);
}
function iS(a, i) {
  if (typeof a != "object" || a === null) return a;
  var r = a[Symbol.toPrimitive];
  if (r !== void 0) {
    var o = r.call(a, i);
    if (typeof o != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return String(a);
}
function lS(a, i, r) {
  var o = E.useRef(a !== void 0), s = E.useState(i), d = s[0], h = s[1], y = a !== void 0, m = o.current;
  return o.current = y, !y && m && d !== i && h(i), [y ? a : d, E.useCallback(function(v) {
    for (var S = arguments.length, O = new Array(S > 1 ? S - 1 : 0), A = 1; A < S; A++)
      O[A - 1] = arguments[A];
    r && r.apply(void 0, [v].concat(O)), h(v);
  }, [r])];
}
function rS(a, i) {
  return Object.keys(i).reduce(function(r, o) {
    var s, d = r, h = d[ty(o)], y = d[o], m = Mf(d, [ty(o), o].map(aS)), v = i[o], S = lS(y, h, a[v]), O = S[0], A = S[1];
    return ve({}, m, (s = {}, s[o] = O, s[v] = A, s));
  }, a);
}
function cf(a, i) {
  return cf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function(r, o) {
    return r.__proto__ = o, r;
  }, cf(a, i);
}
function pb(a, i) {
  a.prototype = Object.create(i.prototype), a.prototype.constructor = a, cf(a, i);
}
const oS = ["xxl", "xl", "lg", "md", "sm", "xs"], sS = "xs", lu = /* @__PURE__ */ E.createContext({
  prefixes: {},
  breakpoints: oS,
  minBreakpoint: sS
}), {
  Consumer: Aw,
  Provider: ww
} = lu;
function Be(a, i) {
  const {
    prefixes: r
  } = E.useContext(lu);
  return a || r[i] || i;
}
function uS() {
  const {
    breakpoints: a
  } = E.useContext(lu);
  return a;
}
function cS() {
  const {
    minBreakpoint: a
  } = E.useContext(lu);
  return a;
}
function fS() {
  const {
    dir: a
  } = E.useContext(lu);
  return a === "rtl";
}
function Rf(a) {
  return a && a.ownerDocument || document;
}
function dS(a) {
  var i = Rf(a);
  return i && i.defaultView || window;
}
function hS(a, i) {
  return dS(a).getComputedStyle(a, i);
}
var pS = /([A-Z])/g;
function mS(a) {
  return a.replace(pS, "-$1").toLowerCase();
}
var gS = /^ms-/;
function kc(a) {
  return mS(a).replace(gS, "-ms-");
}
var vS = /^((translate|rotate|scale)(X|Y|Z|3d)?|matrix(3d)?|perspective|skew(X|Y)?)$/i;
function yS(a) {
  return !!(a && vS.test(a));
}
function Li(a, i) {
  var r = "", o = "";
  if (typeof i == "string")
    return a.style.getPropertyValue(kc(i)) || hS(a).getPropertyValue(kc(i));
  Object.keys(i).forEach(function(s) {
    var d = i[s];
    !d && d !== 0 ? a.style.removeProperty(kc(s)) : yS(s) ? o += s + "(" + d + ") " : r += kc(s) + ": " + d + ";";
  }), o && (r += "transform: " + o + ";"), a.style.cssText += ";" + r;
}
var Uh = { exports: {} }, Bh, ny;
function bS() {
  if (ny) return Bh;
  ny = 1;
  var a = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED";
  return Bh = a, Bh;
}
var $h, ay;
function _S() {
  if (ay) return $h;
  ay = 1;
  var a = /* @__PURE__ */ bS();
  function i() {
  }
  function r() {
  }
  return r.resetWarningCache = i, $h = function() {
    function o(h, y, m, v, S, O) {
      if (O !== a) {
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
  }, $h;
}
var iy;
function SS() {
  return iy || (iy = 1, Uh.exports = /* @__PURE__ */ _S()()), Uh.exports;
}
var ES = /* @__PURE__ */ SS();
const Hi = /* @__PURE__ */ Af(ES);
var mb = hb();
const po = /* @__PURE__ */ Af(mb), ly = {
  disabled: !1
}, ff = Xt.createContext(null);
var CS = function(i) {
  return i.scrollTop;
}, Qs = "unmounted", Dl = "exited", oi = "entering", Nl = "entered", Ps = "exiting", qa = /* @__PURE__ */ (function(a) {
  pb(i, a);
  function i(o, s) {
    var d;
    d = a.call(this, o, s) || this;
    var h = s, y = h && !h.isMounting ? o.enter : o.appear, m;
    return d.appearStatus = null, o.in ? y ? (m = Dl, d.appearStatus = oi) : m = Nl : o.unmountOnExit || o.mountOnEnter ? m = Qs : m = Dl, d.state = {
      status: m
    }, d.nextCallback = null, d;
  }
  i.getDerivedStateFromProps = function(s, d) {
    var h = s.in;
    return h && d.status === Qs ? {
      status: Dl
    } : null;
  };
  var r = i.prototype;
  return r.componentDidMount = function() {
    this.updateStatus(!0, this.appearStatus);
  }, r.componentDidUpdate = function(s) {
    var d = null;
    if (s !== this.props) {
      var h = this.state.status;
      this.props.in ? h !== oi && h !== Nl && (d = oi) : (h === oi || h === Nl) && (d = Ps);
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
      if (this.cancelNextCallback(), d === oi) {
        if (this.props.unmountOnExit || this.props.mountOnEnter) {
          var h = this.props.nodeRef ? this.props.nodeRef.current : po.findDOMNode(this);
          h && CS(h);
        }
        this.performEnter(s);
      } else
        this.performExit();
    else this.props.unmountOnExit && this.state.status === Dl && this.setState({
      status: Qs
    });
  }, r.performEnter = function(s) {
    var d = this, h = this.props.enter, y = this.context ? this.context.isMounting : s, m = this.props.nodeRef ? [y] : [po.findDOMNode(this), y], v = m[0], S = m[1], O = this.getTimeouts(), A = y ? O.appear : O.enter;
    if (!s && !h || ly.disabled) {
      this.safeSetState({
        status: Nl
      }, function() {
        d.props.onEntered(v);
      });
      return;
    }
    this.props.onEnter(v, S), this.safeSetState({
      status: oi
    }, function() {
      d.props.onEntering(v, S), d.onTransitionEnd(A, function() {
        d.safeSetState({
          status: Nl
        }, function() {
          d.props.onEntered(v, S);
        });
      });
    });
  }, r.performExit = function() {
    var s = this, d = this.props.exit, h = this.getTimeouts(), y = this.props.nodeRef ? void 0 : po.findDOMNode(this);
    if (!d || ly.disabled) {
      this.safeSetState({
        status: Dl
      }, function() {
        s.props.onExited(y);
      });
      return;
    }
    this.props.onExit(y), this.safeSetState({
      status: Ps
    }, function() {
      s.props.onExiting(y), s.onTransitionEnd(h.exit, function() {
        s.safeSetState({
          status: Dl
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
    var h = this.props.nodeRef ? this.props.nodeRef.current : po.findDOMNode(this), y = s == null && !this.props.addEndListener;
    if (!h || y) {
      setTimeout(this.nextCallback, 0);
      return;
    }
    if (this.props.addEndListener) {
      var m = this.props.nodeRef ? [this.nextCallback] : [h, this.nextCallback], v = m[0], S = m[1];
      this.props.addEndListener(v, S);
    }
    s != null && setTimeout(this.nextCallback, s);
  }, r.render = function() {
    var s = this.state.status;
    if (s === Qs)
      return null;
    var d = this.props, h = d.children;
    d.in, d.mountOnEnter, d.unmountOnExit, d.appear, d.enter, d.exit, d.timeout, d.addEndListener, d.onEnter, d.onEntering, d.onEntered, d.onExit, d.onExiting, d.onExited, d.nodeRef;
    var y = Mf(d, ["children", "in", "mountOnEnter", "unmountOnExit", "appear", "enter", "exit", "timeout", "addEndListener", "onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "nodeRef"]);
    return (
      // allows for nested Transitions
      /* @__PURE__ */ Xt.createElement(ff.Provider, {
        value: null
      }, typeof h == "function" ? h(s, y) : Xt.cloneElement(Xt.Children.only(h), y))
    );
  }, i;
})(Xt.Component);
qa.contextType = ff;
qa.propTypes = {};
function oo() {
}
qa.defaultProps = {
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
qa.UNMOUNTED = Qs;
qa.EXITED = Dl;
qa.ENTERING = oi;
qa.ENTERED = Nl;
qa.EXITING = Ps;
function xS(a) {
  return a.code === "Escape" || a.keyCode === 27;
}
function OS() {
  const a = E.version.split(".");
  return {
    major: +a[0],
    minor: +a[1],
    patch: +a[2]
  };
}
function ru(a) {
  if (!a || typeof a == "function")
    return null;
  const {
    major: i
  } = OS();
  return i >= 19 ? a.props.ref : a.ref;
}
const Co = !!(typeof window < "u" && window.document && window.document.createElement);
var hp = !1, pp = !1;
try {
  var kh = {
    get passive() {
      return hp = !0;
    },
    get once() {
      return pp = hp = !0;
    }
  };
  Co && (window.addEventListener("test", kh, kh), window.removeEventListener("test", kh, !0));
} catch {
}
function gb(a, i, r, o) {
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
  return gb(a, i, r, o), function() {
    mp(a, i, r, o);
  };
}
function TS(a, i, r, o) {
  if (o === void 0 && (o = !0), a) {
    var s = document.createEvent("HTMLEvents");
    s.initEvent(i, r, o), a.dispatchEvent(s);
  }
}
function AS(a) {
  var i = Li(a, "transitionDuration") || "", r = i.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(i) * r;
}
function wS(a, i, r) {
  r === void 0 && (r = 5);
  var o = !1, s = setTimeout(function() {
    o || TS(a, "transitionend", !0);
  }, i + r), d = df(a, "transitionend", function() {
    o = !0;
  }, {
    once: !0
  });
  return function() {
    clearTimeout(s), d();
  };
}
function vb(a, i, r, o) {
  r == null && (r = AS(a) || 0);
  var s = wS(a, r, o), d = df(a, "transitionend", i);
  return function() {
    s(), d();
  };
}
function ry(a, i) {
  const r = Li(a, i) || "", o = r.indexOf("ms") === -1 ? 1e3 : 1;
  return parseFloat(r) * o;
}
function yb(a, i) {
  const r = ry(a, "transitionDuration"), o = ry(a, "transitionDelay"), s = vb(a, (d) => {
    d.target === a && (s(), i(d));
  }, r + o);
}
function Xs(...a) {
  return a.filter((i) => i != null).reduce((i, r) => {
    if (typeof r != "function")
      throw new Error("Invalid Argument Type, must only provide functions, undefined, or null.");
    return i === null ? r : function(...s) {
      i.apply(this, s), r.apply(this, s);
    };
  }, null);
}
function bb(a) {
  a.offsetHeight;
}
const oy = (a) => !a || typeof a == "function" ? a : (i) => {
  a.current = i;
};
function MS(a, i) {
  const r = oy(a), o = oy(i);
  return (s) => {
    r && r(s), o && o(s);
  };
}
function _b(a, i) {
  return E.useMemo(() => MS(a, i), [a, i]);
}
function RS(a) {
  return a && "setState" in a ? po.findDOMNode(a) : a ?? null;
}
const Lp = /* @__PURE__ */ Xt.forwardRef(({
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
}, S) => {
  const O = E.useRef(null), A = _b(O, m), D = (I) => {
    A(RS(I));
  }, N = (I) => (U) => {
    I && O.current && I(O.current, U);
  }, L = E.useCallback(N(a), [a]), z = E.useCallback(N(i), [i]), V = E.useCallback(N(r), [r]), Z = E.useCallback(N(o), [o]), X = E.useCallback(N(s), [s]), P = E.useCallback(N(d), [d]), B = E.useCallback(N(h), [h]);
  return /* @__PURE__ */ T.jsx(qa, {
    ref: S,
    ...v,
    onEnter: L,
    onEntered: V,
    onEntering: z,
    onExit: Z,
    onExited: P,
    onExiting: X,
    addEndListener: B,
    nodeRef: O,
    children: typeof y == "function" ? (I, U) => (
      // TODO: Types for RTG missing innerProps, so need to cast.
      y(I, {
        ...U,
        ref: D
      })
    ) : /* @__PURE__ */ Xt.cloneElement(y, {
      ref: D
    })
  });
});
Lp.displayName = "TransitionWrapper";
const DS = {
  height: ["marginTop", "marginBottom"],
  width: ["marginLeft", "marginRight"]
};
function NS(a, i) {
  const r = `offset${a[0].toUpperCase()}${a.slice(1)}`, o = i[r], s = DS[a];
  return o + // @ts-expect-error TODO
  parseInt(Li(i, s[0]), 10) + // @ts-expect-error TODO
  parseInt(Li(i, s[1]), 10);
}
const jS = {
  [Dl]: "collapse",
  [Ps]: "collapsing",
  [oi]: "collapsing",
  [Nl]: "collapse show"
}, Sb = /* @__PURE__ */ Xt.forwardRef(({
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
  mountOnEnter: S = !1,
  unmountOnExit: O = !1,
  appear: A = !1,
  getDimensionValue: D = NS,
  ...N
}, L) => {
  const z = typeof y == "function" ? y() : y, V = E.useMemo(() => Xs((I) => {
    I.style[z] = "0";
  }, a), [z, a]), Z = E.useMemo(() => Xs((I) => {
    const U = `scroll${z[0].toUpperCase()}${z.slice(1)}`;
    I.style[z] = `${I[U]}px`;
  }, i), [z, i]), X = E.useMemo(() => Xs((I) => {
    I.style[z] = null;
  }, r), [z, r]), P = E.useMemo(() => Xs((I) => {
    I.style[z] = `${D(z, I)}px`, bb(I);
  }, o), [o, D, z]), B = E.useMemo(() => Xs((I) => {
    I.style[z] = null;
  }, s), [z, s]);
  return /* @__PURE__ */ T.jsx(Lp, {
    ref: L,
    addEndListener: yb,
    ...N,
    "aria-expanded": N.role ? m : null,
    onEnter: V,
    onEntering: Z,
    onEntered: X,
    onExit: P,
    onExiting: B,
    childRef: ru(h),
    in: m,
    timeout: v,
    mountOnEnter: S,
    unmountOnExit: O,
    appear: A,
    children: (I, U) => /* @__PURE__ */ Xt.cloneElement(h, {
      ...U,
      className: Ae(d, h.props.className, jS[I], z === "width" && "collapse-horizontal")
    })
  });
});
Sb.displayName = "Collapse";
function Eb(a, i) {
  return Array.isArray(a) ? a.includes(i) : a === i;
}
const ou = /* @__PURE__ */ E.createContext({});
ou.displayName = "AccordionContext";
const Hp = /* @__PURE__ */ E.forwardRef(({
  as: a = "div",
  bsPrefix: i,
  className: r,
  children: o,
  eventKey: s,
  ...d
}, h) => {
  const {
    activeEventKey: y
  } = E.useContext(ou);
  return i = Be(i, "accordion-collapse"), /* @__PURE__ */ T.jsx(Sb, {
    ref: h,
    in: Eb(y, s),
    ...d,
    className: Ae(r, i),
    children: /* @__PURE__ */ T.jsx(a, {
      children: E.Children.only(o)
    })
  });
});
Hp.displayName = "AccordionCollapse";
const Df = /* @__PURE__ */ E.createContext({
  eventKey: ""
});
Df.displayName = "AccordionItemContext";
const Cb = /* @__PURE__ */ E.forwardRef(({
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
}, S) => {
  i = Be(i, "accordion-body");
  const {
    eventKey: O
  } = E.useContext(Df);
  return /* @__PURE__ */ T.jsx(Hp, {
    eventKey: O,
    onEnter: o,
    onEntering: s,
    onEntered: d,
    onExit: h,
    onExiting: y,
    onExited: m,
    children: /* @__PURE__ */ T.jsx(a, {
      ref: S,
      ...v,
      className: Ae(r, i)
    })
  });
});
Cb.displayName = "AccordionBody";
function zS(a, i) {
  const {
    activeEventKey: r,
    onSelect: o,
    alwaysOpen: s
  } = E.useContext(ou);
  return (d) => {
    let h = a === r ? null : a;
    s && (Array.isArray(r) ? r.includes(a) ? h = r.filter((y) => y !== a) : h = [...r, a] : h = [a]), o?.(h, d), i?.(d);
  };
}
const Vp = /* @__PURE__ */ E.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: a = "button",
  bsPrefix: i,
  className: r,
  onClick: o,
  ...s
}, d) => {
  i = Be(i, "accordion-button");
  const {
    eventKey: h
  } = E.useContext(Df), y = zS(h, o), {
    activeEventKey: m
  } = E.useContext(ou);
  return a === "button" && (s.type = "button"), /* @__PURE__ */ T.jsx(a, {
    ref: d,
    onClick: y,
    ...s,
    "aria-expanded": Array.isArray(m) ? m.includes(h) : h === m,
    className: Ae(r, i, !Eb(m, h) && "collapsed")
  });
});
Vp.displayName = "AccordionButton";
const xb = /* @__PURE__ */ E.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: a = "h2",
  "aria-controls": i,
  bsPrefix: r,
  className: o,
  children: s,
  onClick: d,
  ...h
}, y) => (r = Be(r, "accordion-header"), /* @__PURE__ */ T.jsx(a, {
  ref: y,
  ...h,
  className: Ae(o, r),
  children: /* @__PURE__ */ T.jsx(Vp, {
    onClick: d,
    "aria-controls": i,
    children: s
  })
})));
xb.displayName = "AccordionHeader";
const Ob = /* @__PURE__ */ E.forwardRef(({
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: a = "div",
  bsPrefix: i,
  className: r,
  eventKey: o,
  ...s
}, d) => {
  i = Be(i, "accordion-item");
  const h = E.useMemo(() => ({
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
const Tb = /* @__PURE__ */ E.forwardRef((a, i) => {
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
  } = rS(a, {
    activeKey: "onSelect"
  }), S = Be(s, "accordion"), O = E.useMemo(() => ({
    activeEventKey: o,
    onSelect: h,
    alwaysOpen: m
  }), [o, h, m]);
  return /* @__PURE__ */ T.jsx(ou.Provider, {
    value: O,
    children: /* @__PURE__ */ T.jsx(r, {
      ref: i,
      ...v,
      className: Ae(d, S, y && `${S}-flush`)
    })
  });
});
Tb.displayName = "Accordion";
const qc = Object.assign(Tb, {
  Button: Vp,
  Collapse: Hp,
  Item: Ob,
  Header: xb,
  Body: Cb
});
function LS(a) {
  const i = E.useRef(a);
  return E.useEffect(() => {
    i.current = a;
  }, [a]), i;
}
function hf(a) {
  const i = LS(a);
  return E.useCallback(function(...r) {
    return i.current && i.current(...r);
  }, [i]);
}
const Up = ((a) => (
  // eslint-disable-next-line react/display-name
  /* @__PURE__ */ E.forwardRef((i, r) => /* @__PURE__ */ T.jsx("div", {
    ...i,
    ref: r,
    className: Ae(i.className, a)
  }))
));
function HS(a) {
  const i = E.useRef(a);
  return E.useEffect(() => {
    i.current = a;
  }, [a]), i;
}
function fr(a) {
  const i = HS(a);
  return E.useCallback(function(...r) {
    return i.current && i.current(...r);
  }, [i]);
}
function VS() {
  const a = E.useRef(!0), i = E.useRef(() => a.current);
  return E.useEffect(() => (a.current = !0, () => {
    a.current = !1;
  }), []), i.current;
}
function US(a) {
  const i = E.useRef(null);
  return E.useEffect(() => {
    i.current = a;
  }), i.current;
}
const BS = typeof global < "u" && // @ts-ignore
global.navigator && // @ts-ignore
global.navigator.product === "ReactNative", $S = typeof document < "u", sy = $S || BS ? E.useLayoutEffect : E.useEffect, kS = ["as", "disabled"];
function qS(a, i) {
  if (a == null) return {};
  var r = {};
  for (var o in a) if ({}.hasOwnProperty.call(a, o)) {
    if (i.indexOf(o) >= 0) continue;
    r[o] = a[o];
  }
  return r;
}
function YS(a) {
  return !a || a.trim() === "#";
}
function Ab({
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
  const S = (A) => {
    if ((i || a === "a" && YS(r)) && A.preventDefault(), i) {
      A.stopPropagation();
      return;
    }
    h?.(A);
  }, O = (A) => {
    A.key === " " && (A.preventDefault(), S(A));
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
    onClick: S,
    onKeyDown: O
  }, v];
}
const GS = /* @__PURE__ */ E.forwardRef((a, i) => {
  let {
    as: r,
    disabled: o
  } = a, s = qS(a, kS);
  const [d, {
    tagName: h
  }] = Ab(Object.assign({
    tagName: r,
    disabled: o
  }, s));
  return /* @__PURE__ */ T.jsx(h, Object.assign({}, s, d, {
    ref: i
  }));
});
GS.displayName = "Button";
const XS = {
  [oi]: "show",
  [Nl]: "show"
}, Nf = /* @__PURE__ */ E.forwardRef(({
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
  }, y = E.useCallback((m, v) => {
    bb(m), o?.(m, v);
  }, [o]);
  return /* @__PURE__ */ T.jsx(Lp, {
    ref: d,
    addEndListener: yb,
    ...h,
    onEnter: y,
    childRef: ru(i),
    children: (m, v) => /* @__PURE__ */ E.cloneElement(i, {
      ...v,
      className: Ae("fade", a, i.props.className, XS[m], r[m])
    })
  });
});
Nf.displayName = "Fade";
const IS = {
  /** An accessible label indicating the relevant information about the Close Button. */
  "aria-label": Hi.string,
  /** A callback fired after the Close Button is clicked. */
  onClick: Hi.func,
  /**
   * Render different color variant for the button.
   *
   * Omitting this will render the default dark color.
   */
  variant: Hi.oneOf(["white"])
}, jf = /* @__PURE__ */ E.forwardRef(({
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
jf.propTypes = IS;
const Zs = /* @__PURE__ */ E.forwardRef(({
  as: a,
  bsPrefix: i,
  variant: r = "primary",
  size: o,
  active: s = !1,
  disabled: d = !1,
  className: h,
  ...y
}, m) => {
  const v = Be(i, "btn"), [S, {
    tagName: O
  }] = Ab({
    tagName: a,
    disabled: d,
    ...y
  }), A = O;
  return /* @__PURE__ */ T.jsx(A, {
    ...S,
    ...y,
    ref: m,
    disabled: d,
    className: Ae(h, v, s && "active", r && `${v}-${r}`, o && `${v}-${o}`, y.href && d && "disabled")
  });
});
Zs.displayName = "Button";
const Bp = /* @__PURE__ */ E.forwardRef(({
  className: a,
  bsPrefix: i,
  as: r = "div",
  ...o
}, s) => (i = Be(i, "card-body"), /* @__PURE__ */ T.jsx(r, {
  ref: s,
  className: Ae(a, i),
  ...o
})));
Bp.displayName = "CardBody";
const wb = /* @__PURE__ */ E.forwardRef(({
  className: a,
  bsPrefix: i,
  as: r = "div",
  ...o
}, s) => (i = Be(i, "card-footer"), /* @__PURE__ */ T.jsx(r, {
  ref: s,
  className: Ae(a, i),
  ...o
})));
wb.displayName = "CardFooter";
const Mb = /* @__PURE__ */ E.createContext(null);
Mb.displayName = "CardHeaderContext";
const Rb = /* @__PURE__ */ E.forwardRef(({
  bsPrefix: a,
  className: i,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: r = "div",
  ...o
}, s) => {
  const d = Be(a, "card-header"), h = E.useMemo(() => ({
    cardHeaderBsPrefix: d
  }), [d]);
  return /* @__PURE__ */ T.jsx(Mb.Provider, {
    value: h,
    children: /* @__PURE__ */ T.jsx(r, {
      ref: s,
      ...o,
      className: Ae(i, d)
    })
  });
});
Rb.displayName = "CardHeader";
const Db = /* @__PURE__ */ E.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    bsPrefix: a,
    className: i,
    variant: r,
    as: o = "img",
    ...s
  }, d) => {
    const h = Be(a, "card-img");
    return /* @__PURE__ */ T.jsx(o, {
      ref: d,
      className: Ae(r ? `${h}-${r}` : h, i),
      ...s
    });
  }
);
Db.displayName = "CardImg";
const Nb = /* @__PURE__ */ E.forwardRef(({
  className: a,
  bsPrefix: i,
  as: r = "div",
  ...o
}, s) => (i = Be(i, "card-img-overlay"), /* @__PURE__ */ T.jsx(r, {
  ref: s,
  className: Ae(a, i),
  ...o
})));
Nb.displayName = "CardImgOverlay";
const jb = /* @__PURE__ */ E.forwardRef(({
  className: a,
  bsPrefix: i,
  as: r = "a",
  ...o
}, s) => (i = Be(i, "card-link"), /* @__PURE__ */ T.jsx(r, {
  ref: s,
  className: Ae(a, i),
  ...o
})));
jb.displayName = "CardLink";
const FS = Up("h6"), zb = /* @__PURE__ */ E.forwardRef(({
  className: a,
  bsPrefix: i,
  as: r = FS,
  ...o
}, s) => (i = Be(i, "card-subtitle"), /* @__PURE__ */ T.jsx(r, {
  ref: s,
  className: Ae(a, i),
  ...o
})));
zb.displayName = "CardSubtitle";
const Lb = /* @__PURE__ */ E.forwardRef(({
  className: a,
  bsPrefix: i,
  as: r = "p",
  ...o
}, s) => (i = Be(i, "card-text"), /* @__PURE__ */ T.jsx(r, {
  ref: s,
  className: Ae(a, i),
  ...o
})));
Lb.displayName = "CardText";
const QS = Up("h5"), Hb = /* @__PURE__ */ E.forwardRef(({
  className: a,
  bsPrefix: i,
  as: r = QS,
  ...o
}, s) => (i = Be(i, "card-title"), /* @__PURE__ */ T.jsx(r, {
  ref: s,
  className: Ae(a, i),
  ...o
})));
Hb.displayName = "CardTitle";
const Vb = /* @__PURE__ */ E.forwardRef(({
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
  const S = Be(a, "card");
  return /* @__PURE__ */ T.jsx(y, {
    ref: v,
    ...m,
    className: Ae(i, S, r && `bg-${r}`, o && `text-${o}`, s && `border-${s}`),
    children: d ? /* @__PURE__ */ T.jsx(Bp, {
      children: h
    }) : h
  });
});
Vb.displayName = "Card";
const Pt = Object.assign(Vb, {
  Img: Db,
  Title: Hb,
  Subtitle: zb,
  Body: Bp,
  Link: jb,
  Text: Lb,
  Header: Rb,
  Footer: wb,
  ImgOverlay: Nb
});
function ZS() {
  const a = E.useRef(!0), i = E.useRef(() => a.current);
  return E.useEffect(() => (a.current = !0, () => {
    a.current = !1;
  }), []), i.current;
}
function KS(a) {
  const i = E.useRef(a);
  return i.current = a, i;
}
function Ub(a) {
  const i = KS(a);
  E.useEffect(() => () => i.current(), []);
}
const gp = 2 ** 31 - 1;
function Bb(a, i, r) {
  const o = r - Date.now();
  a.current = o <= gp ? setTimeout(i, o) : setTimeout(() => Bb(a, i, r), gp);
}
function JS() {
  const a = ZS(), i = E.useRef();
  return Ub(() => clearTimeout(i.current)), E.useMemo(() => {
    const r = () => clearTimeout(i.current);
    function o(s, d = 0) {
      a() && (r(), d <= gp ? i.current = setTimeout(s, d) : Bb(i, s, Date.now() + d));
    }
    return {
      set: o,
      clear: r,
      handleRef: i
    };
  }, []);
}
function WS(a, i) {
  let r = 0;
  return E.Children.map(a, (o) => /* @__PURE__ */ E.isValidElement(o) ? i(o, r++) : o);
}
function PS(a, i) {
  return E.Children.toArray(a).some((r) => /* @__PURE__ */ E.isValidElement(r) && r.type === i);
}
function eE({
  as: a,
  bsPrefix: i,
  className: r,
  ...o
}) {
  i = Be(i, "col");
  const s = uS(), d = cS(), h = [], y = [];
  return s.forEach((m) => {
    const v = o[m];
    delete o[m];
    let S, O, A;
    typeof v == "object" && v != null ? {
      span: S,
      offset: O,
      order: A
    } = v : S = v;
    const D = m !== d ? `-${m}` : "";
    S && h.push(S === !0 ? `${i}${D}` : `${i}${D}-${S}`), A != null && y.push(`order${D}-${A}`), O != null && y.push(`offset${D}-${O}`);
  }), [{
    ...o,
    className: Ae(r, ...h, ...y)
  }, {
    as: a,
    bsPrefix: i,
    spans: h
  }];
}
const $b = /* @__PURE__ */ E.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  (a, i) => {
    const [{
      className: r,
      ...o
    }, {
      as: s = "div",
      bsPrefix: d,
      spans: h
    }] = eE(a);
    return /* @__PURE__ */ T.jsx(s, {
      ...o,
      ref: i,
      className: Ae(r, !h.length && d)
    });
  }
);
$b.displayName = "Col";
var tE = Function.prototype.bind.call(Function.prototype.call, [].slice);
function so(a, i) {
  return tE(a.querySelectorAll(i));
}
function uy(a, i) {
  if (a.contains) return a.contains(i);
  if (a.compareDocumentPosition) return a === i || !!(a.compareDocumentPosition(i) & 16);
}
const nE = "data-rr-ui-";
function aE(a) {
  return `${nE}${a}`;
}
const kb = /* @__PURE__ */ E.createContext(Co ? window : void 0);
kb.Provider;
function $p() {
  return E.useContext(kb);
}
const qb = /* @__PURE__ */ E.createContext(null);
qb.displayName = "InputGroupContext";
const iE = {
  /**
   * Specify whether the feedback is for valid or invalid fields
   *
   * @type {('valid'|'invalid')}
   */
  type: Hi.string,
  /** Display feedback as a tooltip. */
  tooltip: Hi.bool,
  as: Hi.elementType
}, zf = /* @__PURE__ */ E.forwardRef(
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
zf.propTypes = iE;
const Vi = /* @__PURE__ */ E.createContext({}), su = /* @__PURE__ */ E.forwardRef(({
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
  } = E.useContext(Vi);
  return i = Be(i, "form-check-input"), /* @__PURE__ */ T.jsx(h, {
    ...y,
    ref: m,
    type: o,
    id: a || v,
    className: Ae(r, i, s && "is-valid", d && "is-invalid")
  });
});
su.displayName = "FormCheckInput";
const pf = /* @__PURE__ */ E.forwardRef(({
  bsPrefix: a,
  className: i,
  htmlFor: r,
  ...o
}, s) => {
  const {
    controlId: d
  } = E.useContext(Vi);
  return a = Be(a, "form-check-label"), /* @__PURE__ */ T.jsx("label", {
    ...o,
    ref: s,
    htmlFor: r || d,
    className: Ae(i, a)
  });
});
pf.displayName = "FormCheckLabel";
const Yb = /* @__PURE__ */ E.forwardRef(({
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
  feedbackType: S,
  className: O,
  style: A,
  title: D = "",
  type: N = "checkbox",
  label: L,
  children: z,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: V = "input",
  ...Z
}, X) => {
  i = Be(i, "form-check"), r = Be(r, "form-switch");
  const {
    controlId: P
  } = E.useContext(Vi), B = E.useMemo(() => ({
    controlId: a || P
  }), [P, a]), I = !z && L != null && L !== !1 || PS(z, pf), U = /* @__PURE__ */ T.jsx(su, {
    ...Z,
    type: N === "switch" ? "checkbox" : N,
    ref: X,
    isValid: h,
    isInvalid: y,
    disabled: d,
    as: V
  });
  return /* @__PURE__ */ T.jsx(Vi.Provider, {
    value: B,
    children: /* @__PURE__ */ T.jsx("div", {
      style: A,
      className: Ae(O, I && i, o && `${i}-inline`, s && `${i}-reverse`, N === "switch" && r),
      children: z || /* @__PURE__ */ T.jsxs(T.Fragment, {
        children: [U, I && /* @__PURE__ */ T.jsx(pf, {
          title: D,
          children: L
        }), v && /* @__PURE__ */ T.jsx(zf, {
          type: S,
          tooltip: m,
          children: v
        })]
      })
    })
  });
});
Yb.displayName = "FormCheck";
const mf = Object.assign(Yb, {
  Input: su,
  Label: pf
}), Gb = /* @__PURE__ */ E.forwardRef(({
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
  as: S = "input",
  ...O
}, A) => {
  const {
    controlId: D
  } = E.useContext(Vi);
  return a = Be(a, "form-control"), /* @__PURE__ */ T.jsx(S, {
    ...O,
    type: i,
    size: o,
    ref: A,
    readOnly: v,
    id: s || D,
    className: Ae(d, m ? `${a}-plaintext` : a, r && `${a}-${r}`, i === "color" && `${a}-color`, h && "is-valid", y && "is-invalid")
  });
});
Gb.displayName = "FormControl";
const lE = Object.assign(Gb, {
  Feedback: zf
}), Xb = /* @__PURE__ */ E.forwardRef(({
  className: a,
  bsPrefix: i,
  as: r = "div",
  ...o
}, s) => (i = Be(i, "form-floating"), /* @__PURE__ */ T.jsx(r, {
  ref: s,
  className: Ae(a, i),
  ...o
})));
Xb.displayName = "FormFloating";
const kp = /* @__PURE__ */ E.forwardRef(({
  controlId: a,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: i = "div",
  ...r
}, o) => {
  const s = E.useMemo(() => ({
    controlId: a
  }), [a]);
  return /* @__PURE__ */ T.jsx(Vi.Provider, {
    value: s,
    children: /* @__PURE__ */ T.jsx(i, {
      ...r,
      ref: o
    })
  });
});
kp.displayName = "FormGroup";
const Ib = /* @__PURE__ */ E.forwardRef(({
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
  } = E.useContext(Vi);
  i = Be(i, "form-label");
  let v = "col-form-label";
  typeof r == "string" && (v = `${v} ${v}-${r}`);
  const S = Ae(s, i, o && "visually-hidden", r && v);
  return d = d || m, r ? /* @__PURE__ */ T.jsx($b, {
    ref: y,
    as: "label",
    className: S,
    htmlFor: d,
    ...h
  }) : /* @__PURE__ */ T.jsx(a, {
    ref: y,
    className: S,
    htmlFor: d,
    ...h
  });
});
Ib.displayName = "FormLabel";
const Fb = /* @__PURE__ */ E.forwardRef(({
  bsPrefix: a,
  className: i,
  id: r,
  ...o
}, s) => {
  const {
    controlId: d
  } = E.useContext(Vi);
  return a = Be(a, "form-range"), /* @__PURE__ */ T.jsx("input", {
    ...o,
    type: "range",
    ref: s,
    className: Ae(i, a),
    id: r || d
  });
});
Fb.displayName = "FormRange";
const Qb = /* @__PURE__ */ E.forwardRef(({
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
  } = E.useContext(Vi);
  return a = Be(a, "form-select"), /* @__PURE__ */ T.jsx("select", {
    ...y,
    size: r,
    ref: m,
    className: Ae(o, a, i && `${a}-${i}`, s && "is-valid", d && "is-invalid"),
    id: h || v
  });
});
Qb.displayName = "FormSelect";
const Zb = /* @__PURE__ */ E.forwardRef(
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  ({
    bsPrefix: a,
    className: i,
    as: r = "small",
    muted: o,
    ...s
  }, d) => (a = Be(a, "form-text"), /* @__PURE__ */ T.jsx(r, {
    ...s,
    ref: d,
    className: Ae(i, a, o && "text-muted")
  }))
);
Zb.displayName = "FormText";
const Kb = /* @__PURE__ */ E.forwardRef((a, i) => /* @__PURE__ */ T.jsx(mf, {
  ...a,
  ref: i,
  type: "switch"
}));
Kb.displayName = "Switch";
const rE = Object.assign(Kb, {
  Input: mf.Input,
  Label: mf.Label
}), Jb = /* @__PURE__ */ E.forwardRef(({
  bsPrefix: a,
  className: i,
  children: r,
  controlId: o,
  label: s,
  ...d
}, h) => (a = Be(a, "form-floating"), /* @__PURE__ */ T.jsxs(kp, {
  ref: h,
  className: Ae(i, a),
  controlId: o,
  ...d,
  children: [r, /* @__PURE__ */ T.jsx("label", {
    htmlFor: o,
    children: s
  })]
})));
Jb.displayName = "FloatingLabel";
const oE = {
  /**
   * The Form `ref` will be forwarded to the underlying element,
   * which means, unless it's rendered `as` a composite component,
   * it will be a DOM node, when resolved.
   *
   * @type {ReactRef}
   * @alias ref
   */
  _ref: Hi.any,
  /**
   * Mark a form as having been validated. Setting it to `true` will
   * toggle any validation styles on the forms elements.
   */
  validated: Hi.bool,
  as: Hi.elementType
}, qp = /* @__PURE__ */ E.forwardRef(({
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
qp.displayName = "Form";
qp.propTypes = oE;
const gt = Object.assign(qp, {
  Group: kp,
  Control: lE,
  Floating: Xb,
  Check: mf,
  Switch: rE,
  Label: Ib,
  Text: Zb,
  Range: Fb,
  Select: Qb,
  FloatingLabel: Jb
}), Lf = /* @__PURE__ */ E.forwardRef(({
  className: a,
  bsPrefix: i,
  as: r = "span",
  ...o
}, s) => (i = Be(i, "input-group-text"), /* @__PURE__ */ T.jsx(r, {
  ref: s,
  className: Ae(a, i),
  ...o
})));
Lf.displayName = "InputGroupText";
const sE = (a) => /* @__PURE__ */ T.jsx(Lf, {
  children: /* @__PURE__ */ T.jsx(su, {
    type: "checkbox",
    ...a
  })
}), uE = (a) => /* @__PURE__ */ T.jsx(Lf, {
  children: /* @__PURE__ */ T.jsx(su, {
    type: "radio",
    ...a
  })
}), Wb = /* @__PURE__ */ E.forwardRef(({
  bsPrefix: a,
  size: i,
  hasValidation: r,
  className: o,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: s = "div",
  ...d
}, h) => {
  a = Be(a, "input-group");
  const y = E.useMemo(() => ({}), []);
  return /* @__PURE__ */ T.jsx(qb.Provider, {
    value: y,
    children: /* @__PURE__ */ T.jsx(s, {
      ref: h,
      ...d,
      className: Ae(o, a, i && `${a}-${i}`, r && "has-validation")
    })
  });
});
Wb.displayName = "InputGroup";
const Yc = Object.assign(Wb, {
  Text: Lf,
  Radio: uE,
  Checkbox: sE
}), cy = (a) => !a || typeof a == "function" ? a : (i) => {
  a.current = i;
};
function cE(a, i) {
  const r = cy(a), o = cy(i);
  return (s) => {
    r && r(s), o && o(s);
  };
}
function Yp(a, i) {
  return E.useMemo(() => cE(a, i), [a, i]);
}
var Gc;
function fy(a) {
  if ((!Gc && Gc !== 0 || a) && Co) {
    var i = document.createElement("div");
    i.style.position = "absolute", i.style.top = "-9999px", i.style.width = "50px", i.style.height = "50px", i.style.overflow = "scroll", document.body.appendChild(i), Gc = i.offsetWidth - i.clientWidth, document.body.removeChild(i);
  }
  return Gc;
}
function fE() {
  return E.useState(null);
}
function qh(a) {
  a === void 0 && (a = Rf());
  try {
    var i = a.activeElement;
    return !i || !i.nodeName ? null : i;
  } catch {
    return a.body;
  }
}
function dE(a) {
  const i = E.useRef(a);
  return i.current = a, i;
}
function hE(a) {
  const i = dE(a);
  E.useEffect(() => () => i.current(), []);
}
function pE(a = document) {
  const i = a.defaultView;
  return Math.abs(i.innerWidth - a.documentElement.clientWidth);
}
const dy = aE("modal-open");
class Gp {
  constructor({
    ownerDocument: i,
    handleContainerOverflow: r = !0,
    isRTL: o = !1
  } = {}) {
    this.handleContainerOverflow = r, this.isRTL = o, this.modals = [], this.ownerDocument = i;
  }
  getScrollbarWidth() {
    return pE(this.ownerDocument);
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
    }, i.scrollBarWidth && (r[o] = `${parseInt(Li(s, o) || "0", 10) + i.scrollBarWidth}px`), s.setAttribute(dy, ""), Li(s, r);
  }
  reset() {
    [...this.modals].forEach((i) => this.remove(i));
  }
  removeContainerStyle(i) {
    const r = this.getElement();
    r.removeAttribute(dy), Object.assign(r.style, i.style);
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
const Yh = (a, i) => Co ? a == null ? (i || Rf()).body : (typeof a == "function" && (a = a()), a && "current" in a && (a = a.current), a && ("nodeType" in a || a.getBoundingClientRect) ? a : null) : null;
function mE(a, i) {
  const r = $p(), [o, s] = E.useState(() => Yh(a, r?.document));
  if (!o) {
    const d = Yh(a);
    d && s(d);
  }
  return E.useEffect(() => {
  }, [i, o]), E.useEffect(() => {
    const d = Yh(a);
    d !== o && s(d);
  }, [a, o]), o;
}
function gE({
  children: a,
  in: i,
  onExited: r,
  mountOnEnter: o,
  unmountOnExit: s
}) {
  const d = E.useRef(null), h = E.useRef(i), y = fr(r);
  E.useEffect(() => {
    i ? h.current = !0 : y(d.current);
  }, [i, y]);
  const m = Yp(d, ru(a)), v = /* @__PURE__ */ E.cloneElement(a, {
    ref: m
  });
  return i ? v : s || !h.current && o ? null : v;
}
const vE = ["onEnter", "onEntering", "onEntered", "onExit", "onExiting", "onExited", "addEndListener", "children"];
function yE(a, i) {
  if (a == null) return {};
  var r = {};
  for (var o in a) if ({}.hasOwnProperty.call(a, o)) {
    if (i.indexOf(o) >= 0) continue;
    r[o] = a[o];
  }
  return r;
}
function bE(a) {
  let {
    onEnter: i,
    onEntering: r,
    onEntered: o,
    onExit: s,
    onExiting: d,
    onExited: h,
    addEndListener: y,
    children: m
  } = a, v = yE(a, vE);
  const S = E.useRef(null), O = Yp(S, ru(m)), A = (P) => (B) => {
    P && S.current && P(S.current, B);
  }, D = E.useCallback(A(i), [i]), N = E.useCallback(A(r), [r]), L = E.useCallback(A(o), [o]), z = E.useCallback(A(s), [s]), V = E.useCallback(A(d), [d]), Z = E.useCallback(A(h), [h]), X = E.useCallback(A(y), [y]);
  return Object.assign({}, v, {
    nodeRef: S
  }, i && {
    onEnter: D
  }, r && {
    onEntering: N
  }, o && {
    onEntered: L
  }, s && {
    onExit: z
  }, d && {
    onExiting: V
  }, h && {
    onExited: Z
  }, y && {
    addEndListener: X
  }, {
    children: typeof m == "function" ? (P, B) => (
      // TODO: Types for RTG missing innerProps, so need to cast.
      m(P, Object.assign({}, B, {
        ref: O
      }))
    ) : /* @__PURE__ */ E.cloneElement(m, {
      ref: O
    })
  });
}
const _E = ["component"];
function SE(a, i) {
  if (a == null) return {};
  var r = {};
  for (var o in a) if ({}.hasOwnProperty.call(a, o)) {
    if (i.indexOf(o) >= 0) continue;
    r[o] = a[o];
  }
  return r;
}
const EE = /* @__PURE__ */ E.forwardRef((a, i) => {
  let {
    component: r
  } = a, o = SE(a, _E);
  const s = bE(o);
  return /* @__PURE__ */ T.jsx(r, Object.assign({
    ref: i
  }, s));
});
function CE({
  in: a,
  onTransition: i
}) {
  const r = E.useRef(null), o = E.useRef(!0), s = fr(i);
  return sy(() => {
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
  }, [a, s]), sy(() => (o.current = !1, () => {
    o.current = !0;
  }), []), r;
}
function xE({
  children: a,
  in: i,
  onExited: r,
  onEntered: o,
  transition: s
}) {
  const [d, h] = E.useState(!i);
  i && d && h(!1);
  const y = CE({
    in: !!i,
    onTransition: (v) => {
      const S = () => {
        v.isStale() || (v.in ? o?.(v.element, v.initial) : (h(!0), r?.(v.element)));
      };
      Promise.resolve(s(v)).then(S, (O) => {
        throw v.in || h(!0), O;
      });
    }
  }), m = Yp(y, ru(a));
  return d && !i ? null : /* @__PURE__ */ E.cloneElement(a, {
    ref: m
  });
}
function hy(a, i, r) {
  return a ? /* @__PURE__ */ T.jsx(EE, Object.assign({}, r, {
    component: a
  })) : i ? /* @__PURE__ */ T.jsx(xE, Object.assign({}, r, {
    transition: i
  })) : /* @__PURE__ */ T.jsx(gE, Object.assign({}, r));
}
const OE = ["show", "role", "className", "style", "children", "backdrop", "keyboard", "onBackdropClick", "onEscapeKeyDown", "transition", "runTransition", "backdropTransition", "runBackdropTransition", "autoFocus", "enforceFocus", "restoreFocus", "restoreFocusOptions", "renderDialog", "renderBackdrop", "manager", "container", "onShow", "onHide", "onExit", "onExited", "onExiting", "onEnter", "onEntering", "onEntered"];
function TE(a, i) {
  if (a == null) return {};
  var r = {};
  for (var o in a) if ({}.hasOwnProperty.call(a, o)) {
    if (i.indexOf(o) >= 0) continue;
    r[o] = a[o];
  }
  return r;
}
let Gh;
function AE(a) {
  return Gh || (Gh = new Gp({
    ownerDocument: a?.document
  })), Gh;
}
function wE(a) {
  const i = $p(), r = a || AE(i), o = E.useRef({
    dialog: null,
    backdrop: null
  });
  return Object.assign(o.current, {
    add: () => r.add(o.current),
    remove: () => r.remove(o.current),
    isTopModal: () => r.isTopModal(o.current),
    setDialogRef: E.useCallback((s) => {
      o.current.dialog = s;
    }, []),
    setBackdropRef: E.useCallback((s) => {
      o.current.backdrop = s;
    }, [])
  });
}
const Pb = /* @__PURE__ */ E.forwardRef((a, i) => {
  let {
    show: r = !1,
    role: o = "dialog",
    className: s,
    style: d,
    children: h,
    backdrop: y = !0,
    keyboard: m = !0,
    onBackdropClick: v,
    onEscapeKeyDown: S,
    transition: O,
    runTransition: A,
    backdropTransition: D,
    runBackdropTransition: N,
    autoFocus: L = !0,
    enforceFocus: z = !0,
    restoreFocus: V = !0,
    restoreFocusOptions: Z,
    renderDialog: X,
    renderBackdrop: P = (we) => /* @__PURE__ */ T.jsx("div", Object.assign({}, we)),
    manager: B,
    container: I,
    onShow: U,
    onHide: oe = () => {
    },
    onExit: Ee,
    onExited: Fe,
    onExiting: Ie,
    onEnter: He,
    onEntering: dt,
    onEntered: it
  } = a, $e = TE(a, OE);
  const $ = $p(), ne = mE(I), le = wE(B), ye = VS(), Ce = US(r), [x, k] = E.useState(!r), te = E.useRef(null);
  E.useImperativeHandle(i, () => le, [le]), Co && !Ce && r && (te.current = qh($?.document)), r && x && k(!1);
  const ae = fr(() => {
    if (le.add(), At.current = df(document, "keydown", Ve), ie.current = df(
      document,
      "focus",
      // the timeout is necessary b/c this will run before the new modal is mounted
      // and so steals focus from it
      () => setTimeout(fe),
      !0
    ), U && U(), L) {
      var we, ze;
      const Yn = qh((we = (ze = le.dialog) == null ? void 0 : ze.ownerDocument) != null ? we : $?.document);
      le.dialog && Yn && !uy(le.dialog, Yn) && (te.current = Yn, le.dialog.focus());
    }
  }), ue = fr(() => {
    if (le.remove(), At.current == null || At.current(), ie.current == null || ie.current(), V) {
      var we;
      (we = te.current) == null || we.focus == null || we.focus(Z), te.current = null;
    }
  });
  E.useEffect(() => {
    !r || !ne || ae();
  }, [
    r,
    ne,
    /* should never change: */
    ae
  ]), E.useEffect(() => {
    x && ue();
  }, [x, ue]), hE(() => {
    ue();
  });
  const fe = fr(() => {
    if (!z || !ye() || !le.isTopModal())
      return;
    const we = qh($?.document);
    le.dialog && we && !uy(le.dialog, we) && le.dialog.focus();
  }), de = fr((we) => {
    we.target === we.currentTarget && (v?.(we), y === !0 && oe());
  }), Ve = fr((we) => {
    m && xS(we) && le.isTopModal() && (S?.(we), we.defaultPrevented || oe());
  }), ie = E.useRef(), At = E.useRef(), Ut = (...we) => {
    k(!0), Fe?.(...we);
  };
  if (!ne)
    return null;
  const Ct = Object.assign({
    role: o,
    ref: le.setDialogRef,
    // apparently only works on the dialog role element
    "aria-modal": o === "dialog" ? !0 : void 0
  }, $e, {
    style: d,
    className: s,
    tabIndex: -1
  });
  let Ke = X ? X(Ct) : /* @__PURE__ */ T.jsx("div", Object.assign({}, Ct, {
    children: /* @__PURE__ */ E.cloneElement(h, {
      role: "document"
    })
  }));
  Ke = hy(O, A, {
    unmountOnExit: !0,
    mountOnEnter: !0,
    appear: !0,
    in: !!r,
    onExit: Ee,
    onExiting: Ie,
    onExited: Ut,
    onEnter: He,
    onEntering: dt,
    onEntered: it,
    children: Ke
  });
  let et = null;
  return y && (et = P({
    ref: le.setBackdropRef,
    onClick: de
  }), et = hy(D, N, {
    in: !!r,
    appear: !0,
    mountOnEnter: !0,
    unmountOnExit: !0,
    children: et
  })), /* @__PURE__ */ T.jsx(T.Fragment, {
    children: /* @__PURE__ */ po.createPortal(/* @__PURE__ */ T.jsxs(T.Fragment, {
      children: [et, Ke]
    }), ne)
  });
});
Pb.displayName = "Modal";
const ME = Object.assign(Pb, {
  Manager: Gp
});
function RE(a, i) {
  return a.classList ? a.classList.contains(i) : (" " + (a.className.baseVal || a.className) + " ").indexOf(" " + i + " ") !== -1;
}
function DE(a, i) {
  a.classList ? a.classList.add(i) : RE(a, i) || (typeof a.className == "string" ? a.className = a.className + " " + i : a.setAttribute("class", (a.className && a.className.baseVal || "") + " " + i));
}
function py(a, i) {
  return a.replace(new RegExp("(^|\\s)" + i + "(?:\\s|$)", "g"), "$1").replace(/\s+/g, " ").replace(/^\s*|\s*$/g, "");
}
function NE(a, i) {
  a.classList ? a.classList.remove(i) : typeof a.className == "string" ? a.className = py(a.className, i) : a.setAttribute("class", py(a.className && a.className.baseVal || "", i));
}
const uo = {
  FIXED_CONTENT: ".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",
  STICKY_CONTENT: ".sticky-top",
  NAVBAR_TOGGLER: ".navbar-toggler"
};
class jE extends Gp {
  adjustAndStore(i, r, o) {
    const s = r.style[i];
    r.dataset[i] = s, Li(r, {
      [i]: `${parseFloat(Li(r, i)) + o}px`
    });
  }
  restore(i, r) {
    const o = r.dataset[i];
    o !== void 0 && (delete r.dataset[i], Li(r, {
      [i]: o
    }));
  }
  setContainerStyle(i) {
    super.setContainerStyle(i);
    const r = this.getElement();
    if (DE(r, "modal-open"), !i.scrollBarWidth) return;
    const o = this.isRTL ? "paddingLeft" : "paddingRight", s = this.isRTL ? "marginLeft" : "marginRight";
    so(r, uo.FIXED_CONTENT).forEach((d) => this.adjustAndStore(o, d, i.scrollBarWidth)), so(r, uo.STICKY_CONTENT).forEach((d) => this.adjustAndStore(s, d, -i.scrollBarWidth)), so(r, uo.NAVBAR_TOGGLER).forEach((d) => this.adjustAndStore(s, d, i.scrollBarWidth));
  }
  removeContainerStyle(i) {
    super.removeContainerStyle(i);
    const r = this.getElement();
    NE(r, "modal-open");
    const o = this.isRTL ? "paddingLeft" : "paddingRight", s = this.isRTL ? "marginLeft" : "marginRight";
    so(r, uo.FIXED_CONTENT).forEach((d) => this.restore(o, d)), so(r, uo.STICKY_CONTENT).forEach((d) => this.restore(s, d)), so(r, uo.NAVBAR_TOGGLER).forEach((d) => this.restore(s, d));
  }
}
let Xh;
function zE(a) {
  return Xh || (Xh = new jE(a)), Xh;
}
const e0 = /* @__PURE__ */ E.forwardRef(({
  className: a,
  bsPrefix: i,
  as: r = "div",
  ...o
}, s) => (i = Be(i, "modal-body"), /* @__PURE__ */ T.jsx(r, {
  ref: s,
  className: Ae(a, i),
  ...o
})));
e0.displayName = "ModalBody";
const t0 = /* @__PURE__ */ E.createContext({
  onHide() {
  }
}), Xp = /* @__PURE__ */ E.forwardRef(({
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
  a = Be(a, "modal");
  const S = `${a}-dialog`, O = typeof d == "string" ? `${a}-fullscreen-${d}` : `${a}-fullscreen`;
  return /* @__PURE__ */ T.jsx("div", {
    ...m,
    ref: v,
    className: Ae(S, i, s && `${a}-${s}`, o && `${S}-centered`, y && `${S}-scrollable`, d && O),
    children: /* @__PURE__ */ T.jsx("div", {
      className: Ae(`${a}-content`, r),
      children: h
    })
  });
});
Xp.displayName = "ModalDialog";
const n0 = /* @__PURE__ */ E.forwardRef(({
  className: a,
  bsPrefix: i,
  as: r = "div",
  ...o
}, s) => (i = Be(i, "modal-footer"), /* @__PURE__ */ T.jsx(r, {
  ref: s,
  className: Ae(a, i),
  ...o
})));
n0.displayName = "ModalFooter";
const a0 = /* @__PURE__ */ E.forwardRef(({
  closeLabel: a = "Close",
  closeVariant: i,
  closeButton: r = !1,
  onHide: o,
  children: s,
  ...d
}, h) => {
  const y = E.useContext(t0), m = hf(() => {
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
a0.displayName = "AbstractModalHeader";
const i0 = /* @__PURE__ */ E.forwardRef(({
  bsPrefix: a,
  className: i,
  closeLabel: r = "Close",
  closeButton: o = !1,
  ...s
}, d) => (a = Be(a, "modal-header"), /* @__PURE__ */ T.jsx(a0, {
  ref: d,
  ...s,
  className: Ae(i, a),
  closeLabel: r,
  closeButton: o
})));
i0.displayName = "ModalHeader";
const LE = Up("h4"), l0 = /* @__PURE__ */ E.forwardRef(({
  className: a,
  bsPrefix: i,
  as: r = LE,
  ...o
}, s) => (i = Be(i, "modal-title"), /* @__PURE__ */ T.jsx(r, {
  ref: s,
  className: Ae(a, i),
  ...o
})));
l0.displayName = "ModalTitle";
function HE(a) {
  return /* @__PURE__ */ T.jsx(Nf, {
    ...a,
    timeout: null
  });
}
function VE(a) {
  return /* @__PURE__ */ T.jsx(Nf, {
    ...a,
    timeout: null
  });
}
const r0 = /* @__PURE__ */ E.forwardRef(({
  bsPrefix: a,
  className: i,
  style: r,
  dialogClassName: o,
  contentClassName: s,
  children: d,
  dialogAs: h = Xp,
  "data-bs-theme": y,
  "aria-labelledby": m,
  "aria-describedby": v,
  "aria-label": S,
  /* BaseModal props */
  show: O = !1,
  animation: A = !0,
  backdrop: D = !0,
  keyboard: N = !0,
  onEscapeKeyDown: L,
  onShow: z,
  onHide: V,
  container: Z,
  autoFocus: X = !0,
  enforceFocus: P = !0,
  restoreFocus: B = !0,
  restoreFocusOptions: I,
  onEntered: U,
  onExit: oe,
  onExiting: Ee,
  onEnter: Fe,
  onEntering: Ie,
  onExited: He,
  backdropClassName: dt,
  manager: it,
  ...$e
}, $) => {
  const [ne, le] = E.useState({}), [ye, Ce] = E.useState(!1), x = E.useRef(!1), k = E.useRef(!1), te = E.useRef(null), [ae, ue] = fE(), fe = _b($, ue), de = hf(V), Ve = fS();
  a = Be(a, "modal");
  const ie = E.useMemo(() => ({
    onHide: de
  }), [de]);
  function At() {
    return it || zE({
      isRTL: Ve
    });
  }
  function Ut(Ue) {
    if (!Co) return;
    const ca = At().getScrollbarWidth() > 0, di = Ue.scrollHeight > Rf(Ue).documentElement.clientHeight;
    le({
      paddingRight: ca && !di ? fy() : void 0,
      paddingLeft: !ca && di ? fy() : void 0
    });
  }
  const Ct = hf(() => {
    ae && Ut(ae.dialog);
  });
  Ub(() => {
    mp(window, "resize", Ct), te.current == null || te.current();
  });
  const Ke = () => {
    x.current = !0;
  }, et = (Ue) => {
    x.current && ae && Ue.target === ae.dialog && (k.current = !0), x.current = !1;
  }, we = () => {
    Ce(!0), te.current = vb(ae.dialog, () => {
      Ce(!1);
    });
  }, ze = (Ue) => {
    Ue.target === Ue.currentTarget && we();
  }, Yn = (Ue) => {
    if (D === "static") {
      ze(Ue);
      return;
    }
    if (k.current || Ue.target !== Ue.currentTarget) {
      k.current = !1;
      return;
    }
    V?.();
  }, yr = (Ue) => {
    N ? L?.(Ue) : (Ue.preventDefault(), D === "static" && we());
  }, jl = (Ue, ca) => {
    Ue && Ut(Ue), Fe?.(Ue, ca);
  }, zl = (Ue) => {
    te.current == null || te.current(), oe?.(Ue);
  }, Ll = (Ue, ca) => {
    Ie?.(Ue, ca), gb(window, "resize", Ct);
  }, To = (Ue) => {
    Ue && (Ue.style.display = ""), He?.(Ue), mp(window, "resize", Ct);
  }, Ao = E.useCallback((Ue) => /* @__PURE__ */ T.jsx("div", {
    ...Ue,
    className: Ae(`${a}-backdrop`, dt, !A && "show")
  }), [A, dt, a]), rn = {
    ...r,
    ...ne
  };
  rn.display = "block";
  const Bi = (Ue) => /* @__PURE__ */ T.jsx("div", {
    role: "dialog",
    ...Ue,
    style: rn,
    className: Ae(i, a, ye && `${a}-static`, !A && "show"),
    onClick: D ? Yn : void 0,
    onMouseUp: et,
    "data-bs-theme": y,
    "aria-label": S,
    "aria-labelledby": m,
    "aria-describedby": v,
    children: /* @__PURE__ */ T.jsx(h, {
      ...$e,
      onMouseDown: Ke,
      className: o,
      contentClassName: s,
      children: d
    })
  });
  return /* @__PURE__ */ T.jsx(t0.Provider, {
    value: ie,
    children: /* @__PURE__ */ T.jsx(ME, {
      show: O,
      ref: fe,
      backdrop: D,
      container: Z,
      keyboard: !0,
      autoFocus: X,
      enforceFocus: P,
      restoreFocus: B,
      restoreFocusOptions: I,
      onEscapeKeyDown: yr,
      onShow: z,
      onHide: V,
      onEnter: jl,
      onEntering: Ll,
      onEntered: U,
      onExit: zl,
      onExiting: Ee,
      onExited: To,
      manager: At(),
      transition: A ? HE : void 0,
      backdropTransition: A ? VE : void 0,
      renderBackdrop: Ao,
      renderDialog: Bi
    })
  });
});
r0.displayName = "Modal";
const Ba = Object.assign(r0, {
  Body: e0,
  Header: i0,
  Title: l0,
  Footer: n0,
  Dialog: Xp,
  TRANSITION_DURATION: 300,
  BACKDROP_TRANSITION_DURATION: 150
}), my = 1e3;
function UE(a, i, r) {
  const o = (a - i) / (r - i) * 100;
  return Math.round(o * my) / my;
}
function gy({
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
  bsPrefix: S,
  ...O
}, A) {
  return /* @__PURE__ */ T.jsx("div", {
    ref: A,
    ...O,
    role: "progressbar",
    className: Ae(y, `${S}-bar`, {
      [`bg-${v}`]: v,
      [`${S}-bar-animated`]: h,
      [`${S}-bar-striped`]: h || d
    }),
    style: {
      width: `${UE(i, a, r)}%`,
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
const o0 = /* @__PURE__ */ E.forwardRef(({
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
  if (o.bsPrefix = Be(o.bsPrefix, "progress"), a)
    return gy(o, r);
  const {
    min: s,
    now: d,
    max: h,
    label: y,
    visuallyHidden: m,
    striped: v,
    animated: S,
    bsPrefix: O,
    variant: A,
    className: D,
    children: N,
    ...L
  } = o;
  return /* @__PURE__ */ T.jsx("div", {
    ref: r,
    ...L,
    className: Ae(D, O),
    children: N ? WS(N, (z) => /* @__PURE__ */ E.cloneElement(z, {
      isChild: !0
    })) : gy({
      min: s,
      now: d,
      max: h,
      label: y,
      visuallyHidden: m,
      striped: v,
      animated: S,
      bsPrefix: O,
      variant: A
    }, r)
  });
});
o0.displayName = "ProgressBar";
const BE = {
  [oi]: "showing",
  [Ps]: "showing show"
}, s0 = /* @__PURE__ */ E.forwardRef((a, i) => /* @__PURE__ */ T.jsx(Nf, {
  ...a,
  ref: i,
  transitionClasses: BE
}));
s0.displayName = "ToastFade";
const u0 = /* @__PURE__ */ E.createContext({
  onClose() {
  }
}), c0 = /* @__PURE__ */ E.forwardRef(({
  bsPrefix: a,
  closeLabel: i = "Close",
  closeVariant: r,
  closeButton: o = !0,
  className: s,
  children: d,
  ...h
}, y) => {
  a = Be(a, "toast-header");
  const m = E.useContext(u0), v = hf((S) => {
    m == null || m.onClose == null || m.onClose(S);
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
c0.displayName = "ToastHeader";
const f0 = /* @__PURE__ */ E.forwardRef(({
  className: a,
  bsPrefix: i,
  as: r = "div",
  ...o
}, s) => (i = Be(i, "toast-body"), /* @__PURE__ */ T.jsx(r, {
  ref: s,
  className: Ae(a, i),
  ...o
})));
f0.displayName = "ToastBody";
const d0 = /* @__PURE__ */ E.forwardRef(({
  bsPrefix: a,
  className: i,
  transition: r = s0,
  show: o = !0,
  animation: s = !0,
  delay: d = 5e3,
  autohide: h = !1,
  onClose: y,
  onEntered: m,
  onExit: v,
  onExiting: S,
  onEnter: O,
  onEntering: A,
  onExited: D,
  bg: N,
  ...L
}, z) => {
  a = Be(a, "toast");
  const V = E.useRef(d), Z = E.useRef(y);
  E.useEffect(() => {
    V.current = d, Z.current = y;
  }, [d, y]);
  const X = JS(), P = !!(h && o), B = E.useCallback(() => {
    P && (Z.current == null || Z.current());
  }, [P]);
  E.useEffect(() => {
    X.set(B, V.current);
  }, [X, B]);
  const I = E.useMemo(() => ({
    onClose: y
  }), [y]), U = !!(r && s), oe = /* @__PURE__ */ T.jsx("div", {
    ...L,
    ref: z,
    className: Ae(a, i, N && `bg-${N}`, !U && (o ? "show" : "hide")),
    role: "alert",
    "aria-live": "assertive",
    "aria-atomic": "true"
  });
  return /* @__PURE__ */ T.jsx(u0.Provider, {
    value: I,
    children: U && r ? /* @__PURE__ */ T.jsx(r, {
      in: o,
      onEnter: O,
      onEntering: A,
      onEntered: m,
      onExit: v,
      onExiting: S,
      onExited: D,
      unmountOnExit: !0,
      children: oe
    }) : oe
  });
});
d0.displayName = "Toast";
const co = Object.assign(d0, {
  Body: f0,
  Header: c0
}), $E = {
  "top-start": "top-0 start-0",
  "top-center": "top-0 start-50 translate-middle-x",
  "top-end": "top-0 end-0",
  "middle-start": "top-50 start-0 translate-middle-y",
  "middle-center": "top-50 start-50 translate-middle",
  "middle-end": "top-50 end-0 translate-middle-y",
  "bottom-start": "bottom-0 start-0",
  "bottom-center": "bottom-0 start-50 translate-middle-x",
  "bottom-end": "bottom-0 end-0"
}, vp = /* @__PURE__ */ E.forwardRef(({
  bsPrefix: a,
  position: i,
  containerPosition: r,
  className: o,
  // Need to define the default "as" during prop destructuring to be compatible with styled-components github.com/react-bootstrap/react-bootstrap/issues/3595
  as: s = "div",
  ...d
}, h) => (a = Be(a, "toast-container"), /* @__PURE__ */ T.jsx(s, {
  ref: h,
  ...d,
  className: Ae(a, i && $E[i], r && `position-${r}`, o)
})));
vp.displayName = "ToastContainer";
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const kE = (a) => a.replace(/([a-z0-9])([A-Z])/g, "$1-$2").toLowerCase(), qE = (a) => a.replace(
  /^([A-Z])|[\s-_]+(\w)/g,
  (i, r, o) => o ? o.toUpperCase() : r.toLowerCase()
), vy = (a) => {
  const i = qE(a);
  return i.charAt(0).toUpperCase() + i.slice(1);
}, h0 = (...a) => a.filter((i, r, o) => !!i && i.trim() !== "" && o.indexOf(i) === r).join(" ").trim(), YE = (a) => {
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
var GE = {
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
const XE = E.forwardRef(
  ({
    color: a = "currentColor",
    size: i = 24,
    strokeWidth: r = 2,
    absoluteStrokeWidth: o,
    className: s = "",
    children: d,
    iconNode: h,
    ...y
  }, m) => E.createElement(
    "svg",
    {
      ref: m,
      ...GE,
      width: i,
      height: i,
      stroke: a,
      strokeWidth: o ? Number(r) * 24 / Number(i) : r,
      className: h0("lucide", s),
      ...!d && !YE(y) && { "aria-hidden": "true" },
      ...y
    },
    [
      ...h.map(([v, S]) => E.createElement(v, S)),
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
const IE = (a, i) => {
  const r = E.forwardRef(
    ({ className: o, ...s }, d) => E.createElement(XE, {
      ref: d,
      iconNode: i,
      className: h0(
        `lucide-${kE(vy(a))}`,
        `lucide-${a}`,
        o
      ),
      ...s
    })
  );
  return r.displayName = vy(a), r;
};
/**
 * @license lucide-react v0.545.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */
const FE = [
  ["path", { d: "M12 8V4H8", key: "hb8ula" }],
  ["rect", { width: "16", height: "12", x: "4", y: "8", rx: "2", key: "enze0r" }],
  ["path", { d: "M2 14h2", key: "vft8re" }],
  ["path", { d: "M20 14h2", key: "4cs60a" }],
  ["path", { d: "M15 13v2", key: "1xurst" }],
  ["path", { d: "M9 13v2", key: "rq6x2g" }]
], yp = IE("bot", FE);
function gr(a) {
  "@babel/helpers - typeof";
  return gr = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(i) {
    return typeof i;
  } : function(i) {
    return i && typeof Symbol == "function" && i.constructor === Symbol && i !== Symbol.prototype ? "symbol" : typeof i;
  }, gr(a);
}
function QE(a, i) {
  if (gr(a) != "object" || !a) return a;
  var r = a[Symbol.toPrimitive];
  if (r !== void 0) {
    var o = r.call(a, i);
    if (gr(o) != "object") return o;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return (i === "string" ? String : Number)(a);
}
function p0(a) {
  var i = QE(a, "string");
  return gr(i) == "symbol" ? i : i + "";
}
function Ks(a, i, r) {
  return (i = p0(i)) in a ? Object.defineProperty(a, i, {
    value: r,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : a[i] = r, a;
}
function yy(a, i) {
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
    i % 2 ? yy(Object(r), !0).forEach(function(o) {
      Ks(a, o, r[o]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(a, Object.getOwnPropertyDescriptors(r)) : yy(Object(r)).forEach(function(o) {
      Object.defineProperty(a, o, Object.getOwnPropertyDescriptor(r, o));
    });
  }
  return a;
}
function ZE(a) {
  if (Array.isArray(a)) return a;
}
function KE(a, i) {
  var r = a == null ? null : typeof Symbol < "u" && a[Symbol.iterator] || a["@@iterator"];
  if (r != null) {
    var o, s, d, h, y = [], m = !0, v = !1;
    try {
      if (d = (r = r.call(a)).next, i === 0) {
        if (Object(r) !== r) return;
        m = !1;
      } else for (; !(m = (o = d.call(r)).done) && (y.push(o.value), y.length !== i); m = !0) ;
    } catch (S) {
      v = !0, s = S;
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
function bp(a, i) {
  (i == null || i > a.length) && (i = a.length);
  for (var r = 0, o = Array(i); r < i; r++) o[r] = a[r];
  return o;
}
function m0(a, i) {
  if (a) {
    if (typeof a == "string") return bp(a, i);
    var r = {}.toString.call(a).slice(8, -1);
    return r === "Object" && a.constructor && (r = a.constructor.name), r === "Map" || r === "Set" ? Array.from(a) : r === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r) ? bp(a, i) : void 0;
  }
}
function JE() {
  throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function xa(a, i) {
  return ZE(a) || KE(a, i) || m0(a, i) || JE();
}
function qn(a, i) {
  if (a == null) return {};
  var r, o, s = Mf(a, i);
  if (Object.getOwnPropertySymbols) {
    var d = Object.getOwnPropertySymbols(a);
    for (o = 0; o < d.length; o++) r = d[o], i.indexOf(r) === -1 && {}.propertyIsEnumerable.call(a, r) && (s[r] = a[r]);
  }
  return s;
}
var WE = ["defaultInputValue", "defaultMenuIsOpen", "defaultValue", "inputValue", "menuIsOpen", "onChange", "onInputChange", "onMenuClose", "onMenuOpen", "value"];
function PE(a) {
  var i = a.defaultInputValue, r = i === void 0 ? "" : i, o = a.defaultMenuIsOpen, s = o === void 0 ? !1 : o, d = a.defaultValue, h = d === void 0 ? null : d, y = a.inputValue, m = a.menuIsOpen, v = a.onChange, S = a.onInputChange, O = a.onMenuClose, A = a.onMenuOpen, D = a.value, N = qn(a, WE), L = E.useState(y !== void 0 ? y : r), z = xa(L, 2), V = z[0], Z = z[1], X = E.useState(m !== void 0 ? m : s), P = xa(X, 2), B = P[0], I = P[1], U = E.useState(D !== void 0 ? D : h), oe = xa(U, 2), Ee = oe[0], Fe = oe[1], Ie = E.useCallback(function(le, ye) {
    typeof v == "function" && v(le, ye), Fe(le);
  }, [v]), He = E.useCallback(function(le, ye) {
    var Ce;
    typeof S == "function" && (Ce = S(le, ye)), Z(Ce !== void 0 ? Ce : le);
  }, [S]), dt = E.useCallback(function() {
    typeof A == "function" && A(), I(!0);
  }, [A]), it = E.useCallback(function() {
    typeof O == "function" && O(), I(!1);
  }, [O]), $e = y !== void 0 ? y : V, $ = m !== void 0 ? m : B, ne = D !== void 0 ? D : Ee;
  return ge(ge({}, N), {}, {
    inputValue: $e,
    menuIsOpen: $,
    onChange: Ie,
    onInputChange: He,
    onMenuClose: it,
    onMenuOpen: dt,
    value: ne
  });
}
function eC(a, i) {
  if (!(a instanceof i)) throw new TypeError("Cannot call a class as a function");
}
function by(a, i) {
  for (var r = 0; r < i.length; r++) {
    var o = i[r];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(a, p0(o.key), o);
  }
}
function tC(a, i, r) {
  return i && by(a.prototype, i), r && by(a, r), Object.defineProperty(a, "prototype", {
    writable: !1
  }), a;
}
function nC(a, i) {
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
function g0() {
  try {
    var a = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function() {
    }));
  } catch {
  }
  return (g0 = function() {
    return !!a;
  })();
}
function v0(a) {
  if (a === void 0) throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  return a;
}
function aC(a, i) {
  if (i && (gr(i) == "object" || typeof i == "function")) return i;
  if (i !== void 0) throw new TypeError("Derived constructors may only return object or undefined");
  return v0(a);
}
function iC(a) {
  var i = g0();
  return function() {
    var r, o = gf(a);
    if (i) {
      var s = gf(this).constructor;
      r = Reflect.construct(o, arguments, s);
    } else r = o.apply(this, arguments);
    return aC(this, r);
  };
}
function lC(a) {
  if (Array.isArray(a)) return bp(a);
}
function rC(a) {
  if (typeof Symbol < "u" && a[Symbol.iterator] != null || a["@@iterator"] != null) return Array.from(a);
}
function oC() {
  throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
}
function Ip(a) {
  return lC(a) || rC(a) || m0(a) || oC();
}
function sC(a) {
  if (a.sheet)
    return a.sheet;
  for (var i = 0; i < document.styleSheets.length; i++)
    if (document.styleSheets[i].ownerNode === a)
      return document.styleSheets[i];
}
function uC(a) {
  var i = document.createElement("style");
  return i.setAttribute("data-emotion", a.key), a.nonce !== void 0 && i.setAttribute("nonce", a.nonce), i.appendChild(document.createTextNode("")), i.setAttribute("data-s", ""), i;
}
var cC = /* @__PURE__ */ (function() {
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
    this.ctr % (this.isSpeedy ? 65e3 : 1) === 0 && this._insertTag(uC(this));
    var s = this.tags[this.tags.length - 1];
    if (this.isSpeedy) {
      var d = sC(s);
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
})(), Mn = "-ms-", vf = "-moz-", ct = "-webkit-", y0 = "comm", Fp = "rule", Qp = "decl", fC = "@import", b0 = "@keyframes", dC = "@layer", hC = Math.abs, Hf = String.fromCharCode, pC = Object.assign;
function mC(a, i) {
  return En(a, 0) ^ 45 ? (((i << 2 ^ En(a, 0)) << 2 ^ En(a, 1)) << 2 ^ En(a, 2)) << 2 ^ En(a, 3) : 0;
}
function _0(a) {
  return a.trim();
}
function gC(a, i) {
  return (a = i.exec(a)) ? a[0] : a;
}
function ft(a, i, r) {
  return a.replace(i, r);
}
function _p(a, i) {
  return a.indexOf(i);
}
function En(a, i) {
  return a.charCodeAt(i) | 0;
}
function eu(a, i, r) {
  return a.slice(i, r);
}
function si(a) {
  return a.length;
}
function Zp(a) {
  return a.length;
}
function Xc(a, i) {
  return i.push(a), a;
}
function vC(a, i) {
  return a.map(i).join("");
}
var Vf = 1, vo = 1, S0 = 0, na = 0, en = 0, xo = "";
function Uf(a, i, r, o, s, d, h) {
  return { value: a, root: i, parent: r, type: o, props: s, children: d, line: Vf, column: vo, length: h, return: "" };
}
function Is(a, i) {
  return pC(Uf("", null, null, "", null, null, 0), a, { length: -a.length }, i);
}
function yC() {
  return en;
}
function bC() {
  return en = na > 0 ? En(xo, --na) : 0, vo--, en === 10 && (vo = 1, Vf--), en;
}
function ua() {
  return en = na < S0 ? En(xo, na++) : 0, vo++, en === 10 && (vo = 1, Vf++), en;
}
function fi() {
  return En(xo, na);
}
function ef() {
  return na;
}
function uu(a, i) {
  return eu(xo, a, i);
}
function tu(a) {
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
function E0(a) {
  return Vf = vo = 1, S0 = si(xo = a), na = 0, [];
}
function C0(a) {
  return xo = "", a;
}
function tf(a) {
  return _0(uu(na - 1, Sp(a === 91 ? a + 2 : a === 40 ? a + 1 : a)));
}
function _C(a) {
  for (; (en = fi()) && en < 33; )
    ua();
  return tu(a) > 2 || tu(en) > 3 ? "" : " ";
}
function SC(a, i) {
  for (; --i && ua() && !(en < 48 || en > 102 || en > 57 && en < 65 || en > 70 && en < 97); )
    ;
  return uu(a, ef() + (i < 6 && fi() == 32 && ua() == 32));
}
function Sp(a) {
  for (; ua(); )
    switch (en) {
      // ] ) " '
      case a:
        return na;
      // " '
      case 34:
      case 39:
        a !== 34 && a !== 39 && Sp(en);
        break;
      // (
      case 40:
        a === 41 && Sp(a);
        break;
      // \
      case 92:
        ua();
        break;
    }
  return na;
}
function EC(a, i) {
  for (; ua() && a + en !== 57; )
    if (a + en === 84 && fi() === 47)
      break;
  return "/*" + uu(i, na - 1) + "*" + Hf(a === 47 ? a : ua());
}
function CC(a) {
  for (; !tu(fi()); )
    ua();
  return uu(a, na);
}
function xC(a) {
  return C0(nf("", null, null, null, [""], a = E0(a), 0, [0], a));
}
function nf(a, i, r, o, s, d, h, y, m) {
  for (var v = 0, S = 0, O = h, A = 0, D = 0, N = 0, L = 1, z = 1, V = 1, Z = 0, X = "", P = s, B = d, I = o, U = X; z; )
    switch (N = Z, Z = ua()) {
      // (
      case 40:
        if (N != 108 && En(U, O - 1) == 58) {
          _p(U += ft(tf(Z), "&", "&\f"), "&\f") != -1 && (V = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        U += tf(Z);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        U += _C(N);
        break;
      // \
      case 92:
        U += SC(ef() - 1, 7);
        continue;
      // /
      case 47:
        switch (fi()) {
          case 42:
          case 47:
            Xc(OC(EC(ua(), ef()), i, r), m);
            break;
          default:
            U += "/";
        }
        break;
      // {
      case 123 * L:
        y[v++] = si(U) * V;
      // } ; \0
      case 125 * L:
      case 59:
      case 0:
        switch (Z) {
          // \0 }
          case 0:
          case 125:
            z = 0;
          // ;
          case 59 + S:
            V == -1 && (U = ft(U, /\f/g, "")), D > 0 && si(U) - O && Xc(D > 32 ? Sy(U + ";", o, r, O - 1) : Sy(ft(U, " ", "") + ";", o, r, O - 2), m);
            break;
          // @ ;
          case 59:
            U += ";";
          // { rule/at-rule
          default:
            if (Xc(I = _y(U, i, r, v, S, s, y, X, P = [], B = [], O), d), Z === 123)
              if (S === 0)
                nf(U, i, I, I, P, d, O, y, B);
              else
                switch (A === 99 && En(U, 3) === 110 ? 100 : A) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    nf(a, I, I, o && Xc(_y(a, I, I, 0, 0, s, y, X, s, P = [], O), B), s, B, O, y, o ? P : B);
                    break;
                  default:
                    nf(U, I, I, I, [""], B, 0, y, B);
                }
        }
        v = S = D = 0, L = V = 1, X = U = "", O = h;
        break;
      // :
      case 58:
        O = 1 + si(U), D = N;
      default:
        if (L < 1) {
          if (Z == 123)
            --L;
          else if (Z == 125 && L++ == 0 && bC() == 125)
            continue;
        }
        switch (U += Hf(Z), Z * L) {
          // &
          case 38:
            V = S > 0 ? 1 : (U += "\f", -1);
            break;
          // ,
          case 44:
            y[v++] = (si(U) - 1) * V, V = 1;
            break;
          // @
          case 64:
            fi() === 45 && (U += tf(ua())), A = fi(), S = O = si(X = U += CC(ef())), Z++;
            break;
          // -
          case 45:
            N === 45 && si(U) == 2 && (L = 0);
        }
    }
  return d;
}
function _y(a, i, r, o, s, d, h, y, m, v, S) {
  for (var O = s - 1, A = s === 0 ? d : [""], D = Zp(A), N = 0, L = 0, z = 0; N < o; ++N)
    for (var V = 0, Z = eu(a, O + 1, O = hC(L = h[N])), X = a; V < D; ++V)
      (X = _0(L > 0 ? A[V] + " " + Z : ft(Z, /&\f/g, A[V]))) && (m[z++] = X);
  return Uf(a, i, r, s === 0 ? Fp : y, m, v, S);
}
function OC(a, i, r) {
  return Uf(a, i, r, y0, Hf(yC()), eu(a, 2, -2), 0);
}
function Sy(a, i, r, o) {
  return Uf(a, i, r, Qp, eu(a, 0, o), eu(a, o + 1, -1), o);
}
function go(a, i) {
  for (var r = "", o = Zp(a), s = 0; s < o; s++)
    r += i(a[s], s, a, i) || "";
  return r;
}
function TC(a, i, r, o) {
  switch (a.type) {
    case dC:
      if (a.children.length) break;
    case fC:
    case Qp:
      return a.return = a.return || a.value;
    case y0:
      return "";
    case b0:
      return a.return = a.value + "{" + go(a.children, o) + "}";
    case Fp:
      a.value = a.props.join(",");
  }
  return si(r = go(a.children, o)) ? a.return = a.value + "{" + r + "}" : "";
}
function AC(a) {
  var i = Zp(a);
  return function(r, o, s, d) {
    for (var h = "", y = 0; y < i; y++)
      h += a[y](r, o, s, d) || "";
    return h;
  };
}
function wC(a) {
  return function(i) {
    i.root || (i = i.return) && a(i);
  };
}
function MC(a) {
  var i = /* @__PURE__ */ Object.create(null);
  return function(r) {
    return i[r] === void 0 && (i[r] = a(r)), i[r];
  };
}
var RC = function(i, r, o) {
  for (var s = 0, d = 0; s = d, d = fi(), s === 38 && d === 12 && (r[o] = 1), !tu(d); )
    ua();
  return uu(i, na);
}, DC = function(i, r) {
  var o = -1, s = 44;
  do
    switch (tu(s)) {
      case 0:
        s === 38 && fi() === 12 && (r[o] = 1), i[o] += RC(na - 1, r, o);
        break;
      case 2:
        i[o] += tf(s);
        break;
      case 4:
        if (s === 44) {
          i[++o] = fi() === 58 ? "&\f" : "", r[o] = i[o].length;
          break;
        }
      // fallthrough
      default:
        i[o] += Hf(s);
    }
  while (s = ua());
  return i;
}, NC = function(i, r) {
  return C0(DC(E0(i), r));
}, Ey = /* @__PURE__ */ new WeakMap(), jC = function(i) {
  if (!(i.type !== "rule" || !i.parent || // positive .length indicates that this rule contains pseudo
  // negative .length indicates that this rule has been already prefixed
  i.length < 1)) {
    for (var r = i.value, o = i.parent, s = i.column === o.column && i.line === o.line; o.type !== "rule"; )
      if (o = o.parent, !o) return;
    if (!(i.props.length === 1 && r.charCodeAt(0) !== 58 && !Ey.get(o)) && !s) {
      Ey.set(i, !0);
      for (var d = [], h = NC(r, d), y = o.props, m = 0, v = 0; m < h.length; m++)
        for (var S = 0; S < y.length; S++, v++)
          i.props[v] = d[m] ? h[m].replace(/&\f/g, y[S]) : y[S] + " " + h[m];
    }
  }
}, zC = function(i) {
  if (i.type === "decl") {
    var r = i.value;
    // charcode for l
    r.charCodeAt(0) === 108 && // charcode for b
    r.charCodeAt(2) === 98 && (i.return = "", i.value = "");
  }
};
function x0(a, i) {
  switch (mC(a, i)) {
    // color-adjust
    case 5103:
      return ct + "print-" + a + a;
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
      return ct + a + a;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return ct + a + vf + a + Mn + a + a;
    // flex, flex-direction
    case 6828:
    case 4268:
      return ct + a + Mn + a + a;
    // order
    case 6165:
      return ct + a + Mn + "flex-" + a + a;
    // align-items
    case 5187:
      return ct + a + ft(a, /(\w+).+(:[^]+)/, ct + "box-$1$2" + Mn + "flex-$1$2") + a;
    // align-self
    case 5443:
      return ct + a + Mn + "flex-item-" + ft(a, /flex-|-self/, "") + a;
    // align-content
    case 4675:
      return ct + a + Mn + "flex-line-pack" + ft(a, /align-content|flex-|-self/, "") + a;
    // flex-shrink
    case 5548:
      return ct + a + Mn + ft(a, "shrink", "negative") + a;
    // flex-basis
    case 5292:
      return ct + a + Mn + ft(a, "basis", "preferred-size") + a;
    // flex-grow
    case 6060:
      return ct + "box-" + ft(a, "-grow", "") + ct + a + Mn + ft(a, "grow", "positive") + a;
    // transition
    case 4554:
      return ct + ft(a, /([^-])(transform)/g, "$1" + ct + "$2") + a;
    // cursor
    case 6187:
      return ft(ft(ft(a, /(zoom-|grab)/, ct + "$1"), /(image-set)/, ct + "$1"), a, "") + a;
    // background, background-image
    case 5495:
    case 3959:
      return ft(a, /(image-set\([^]*)/, ct + "$1$`$1");
    // justify-content
    case 4968:
      return ft(ft(a, /(.+:)(flex-)?(.*)/, ct + "box-pack:$3" + Mn + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + ct + a + a;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return ft(a, /(.+)-inline(.+)/, ct + "$1$2") + a;
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
      if (si(a) - 1 - i > 6) switch (En(a, i + 1)) {
        // (m)ax-content, (m)in-content
        case 109:
          if (En(a, i + 4) !== 45) break;
        // (f)ill-available, (f)it-content
        case 102:
          return ft(a, /(.+:)(.+)-([^]+)/, "$1" + ct + "$2-$3$1" + vf + (En(a, i + 3) == 108 ? "$3" : "$2-$3")) + a;
        // (s)tretch
        case 115:
          return ~_p(a, "stretch") ? x0(ft(a, "stretch", "fill-available"), i) + a : a;
      }
      break;
    // position: sticky
    case 4949:
      if (En(a, i + 1) !== 115) break;
    // display: (flex|inline-flex)
    case 6444:
      switch (En(a, si(a) - 3 - (~_p(a, "!important") && 10))) {
        // stic(k)y
        case 107:
          return ft(a, ":", ":" + ct) + a;
        // (inline-)?fl(e)x
        case 101:
          return ft(a, /(.+:)([^;!]+)(;|!.+)?/, "$1" + ct + (En(a, 14) === 45 ? "inline-" : "") + "box$3$1" + ct + "$2$3$1" + Mn + "$2box$3") + a;
      }
      break;
    // writing-mode
    case 5936:
      switch (En(a, i + 11)) {
        // vertical-l(r)
        case 114:
          return ct + a + Mn + ft(a, /[svh]\w+-[tblr]{2}/, "tb") + a;
        // vertical-r(l)
        case 108:
          return ct + a + Mn + ft(a, /[svh]\w+-[tblr]{2}/, "tb-rl") + a;
        // horizontal(-)tb
        case 45:
          return ct + a + Mn + ft(a, /[svh]\w+-[tblr]{2}/, "lr") + a;
      }
      return ct + a + Mn + a + a;
  }
  return a;
}
var LC = function(i, r, o, s) {
  if (i.length > -1 && !i.return) switch (i.type) {
    case Qp:
      i.return = x0(i.value, i.length);
      break;
    case b0:
      return go([Is(i, {
        value: ft(i.value, "@", "@" + ct)
      })], s);
    case Fp:
      if (i.length) return vC(i.props, function(d) {
        switch (gC(d, /(::plac\w+|:read-\w+)/)) {
          // :read-(only|write)
          case ":read-only":
          case ":read-write":
            return go([Is(i, {
              props: [ft(d, /:(read-\w+)/, ":" + vf + "$1")]
            })], s);
          // :placeholder
          case "::placeholder":
            return go([Is(i, {
              props: [ft(d, /:(plac\w+)/, ":" + ct + "input-$1")]
            }), Is(i, {
              props: [ft(d, /:(plac\w+)/, ":" + vf + "$1")]
            }), Is(i, {
              props: [ft(d, /:(plac\w+)/, Mn + "input-$1")]
            })], s);
        }
        return "";
      });
  }
}, HC = [LC], VC = function(i) {
  var r = i.key;
  if (r === "css") {
    var o = document.querySelectorAll("style[data-emotion]:not([data-s])");
    Array.prototype.forEach.call(o, function(L) {
      var z = L.getAttribute("data-emotion");
      z.indexOf(" ") !== -1 && (document.head.appendChild(L), L.setAttribute("data-s", ""));
    });
  }
  var s = i.stylisPlugins || HC, d = {}, h, y = [];
  h = i.container || document.head, Array.prototype.forEach.call(
    // this means we will ignore elements which don't have a space in them which
    // means that the style elements we're looking at are only Emotion 11 server-rendered style elements
    document.querySelectorAll('style[data-emotion^="' + r + ' "]'),
    function(L) {
      for (var z = L.getAttribute("data-emotion").split(" "), V = 1; V < z.length; V++)
        d[z[V]] = !0;
      y.push(L);
    }
  );
  var m, v = [jC, zC];
  {
    var S, O = [TC, wC(function(L) {
      S.insert(L);
    })], A = AC(v.concat(s, O)), D = function(z) {
      return go(xC(z), A);
    };
    m = function(z, V, Z, X) {
      S = Z, D(z ? z + "{" + V.styles + "}" : V.styles), X && (N.inserted[V.name] = !0);
    };
  }
  var N = {
    key: r,
    sheet: new cC({
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
  return N.sheet.hydrate(y), N;
}, Ih = { exports: {} }, vt = {};
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var Cy;
function UC() {
  if (Cy) return vt;
  Cy = 1;
  var a = typeof Symbol == "function" && Symbol.for, i = a ? Symbol.for("react.element") : 60103, r = a ? Symbol.for("react.portal") : 60106, o = a ? Symbol.for("react.fragment") : 60107, s = a ? Symbol.for("react.strict_mode") : 60108, d = a ? Symbol.for("react.profiler") : 60114, h = a ? Symbol.for("react.provider") : 60109, y = a ? Symbol.for("react.context") : 60110, m = a ? Symbol.for("react.async_mode") : 60111, v = a ? Symbol.for("react.concurrent_mode") : 60111, S = a ? Symbol.for("react.forward_ref") : 60112, O = a ? Symbol.for("react.suspense") : 60113, A = a ? Symbol.for("react.suspense_list") : 60120, D = a ? Symbol.for("react.memo") : 60115, N = a ? Symbol.for("react.lazy") : 60116, L = a ? Symbol.for("react.block") : 60121, z = a ? Symbol.for("react.fundamental") : 60117, V = a ? Symbol.for("react.responder") : 60118, Z = a ? Symbol.for("react.scope") : 60119;
  function X(B) {
    if (typeof B == "object" && B !== null) {
      var I = B.$$typeof;
      switch (I) {
        case i:
          switch (B = B.type, B) {
            case m:
            case v:
            case o:
            case d:
            case s:
            case O:
              return B;
            default:
              switch (B = B && B.$$typeof, B) {
                case y:
                case S:
                case N:
                case D:
                case h:
                  return B;
                default:
                  return I;
              }
          }
        case r:
          return I;
      }
    }
  }
  function P(B) {
    return X(B) === v;
  }
  return vt.AsyncMode = m, vt.ConcurrentMode = v, vt.ContextConsumer = y, vt.ContextProvider = h, vt.Element = i, vt.ForwardRef = S, vt.Fragment = o, vt.Lazy = N, vt.Memo = D, vt.Portal = r, vt.Profiler = d, vt.StrictMode = s, vt.Suspense = O, vt.isAsyncMode = function(B) {
    return P(B) || X(B) === m;
  }, vt.isConcurrentMode = P, vt.isContextConsumer = function(B) {
    return X(B) === y;
  }, vt.isContextProvider = function(B) {
    return X(B) === h;
  }, vt.isElement = function(B) {
    return typeof B == "object" && B !== null && B.$$typeof === i;
  }, vt.isForwardRef = function(B) {
    return X(B) === S;
  }, vt.isFragment = function(B) {
    return X(B) === o;
  }, vt.isLazy = function(B) {
    return X(B) === N;
  }, vt.isMemo = function(B) {
    return X(B) === D;
  }, vt.isPortal = function(B) {
    return X(B) === r;
  }, vt.isProfiler = function(B) {
    return X(B) === d;
  }, vt.isStrictMode = function(B) {
    return X(B) === s;
  }, vt.isSuspense = function(B) {
    return X(B) === O;
  }, vt.isValidElementType = function(B) {
    return typeof B == "string" || typeof B == "function" || B === o || B === v || B === d || B === s || B === O || B === A || typeof B == "object" && B !== null && (B.$$typeof === N || B.$$typeof === D || B.$$typeof === h || B.$$typeof === y || B.$$typeof === S || B.$$typeof === z || B.$$typeof === V || B.$$typeof === Z || B.$$typeof === L);
  }, vt.typeOf = X, vt;
}
var xy;
function BC() {
  return xy || (xy = 1, Ih.exports = UC()), Ih.exports;
}
var Fh, Oy;
function $C() {
  if (Oy) return Fh;
  Oy = 1;
  var a = BC(), i = {
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
  function h(N) {
    return a.isMemo(N) ? s : d[N.$$typeof] || i;
  }
  var y = Object.defineProperty, m = Object.getOwnPropertyNames, v = Object.getOwnPropertySymbols, S = Object.getOwnPropertyDescriptor, O = Object.getPrototypeOf, A = Object.prototype;
  function D(N, L, z) {
    if (typeof L != "string") {
      if (A) {
        var V = O(L);
        V && V !== A && D(N, V, z);
      }
      var Z = m(L);
      v && (Z = Z.concat(v(L)));
      for (var X = h(N), P = h(L), B = 0; B < Z.length; ++B) {
        var I = Z[B];
        if (!r[I] && !(z && z[I]) && !(P && P[I]) && !(X && X[I])) {
          var U = S(L, I);
          try {
            y(N, I, U);
          } catch {
          }
        }
      }
    }
    return N;
  }
  return Fh = D, Fh;
}
$C();
var kC = !0;
function qC(a, i, r) {
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
  kC === !1) && i.registered[s] === void 0 && (i.registered[s] = r.styles);
}, YC = function(i, r, o) {
  O0(i, r, o);
  var s = i.key + "-" + r.name;
  if (i.inserted[r.name] === void 0) {
    var d = r;
    do
      i.insert(r === d ? "." + s : "", d, i.sheet, !0), d = d.next;
    while (d !== void 0);
  }
};
function GC(a) {
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
var XC = {
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
}, IC = /[A-Z]|^ms/g, FC = /_EMO_([^_]+?)_([^]*?)_EMO_/g, T0 = function(i) {
  return i.charCodeAt(1) === 45;
}, Ty = function(i) {
  return i != null && typeof i != "boolean";
}, Qh = /* @__PURE__ */ MC(function(a) {
  return T0(a) ? a : a.replace(IC, "-$&").toLowerCase();
}), Ay = function(i, r) {
  switch (i) {
    case "animation":
    case "animationName":
      if (typeof r == "string")
        return r.replace(FC, function(o, s, d) {
          return ui = {
            name: s,
            styles: d,
            next: ui
          }, s;
        });
  }
  return XC[i] !== 1 && !T0(i) && typeof r == "number" && r !== 0 ? r + "px" : r;
};
function nu(a, i, r) {
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
        return ui = {
          name: s.name,
          styles: s.styles,
          next: ui
        }, s.name;
      var d = r;
      if (d.styles !== void 0) {
        var h = d.next;
        if (h !== void 0)
          for (; h !== void 0; )
            ui = {
              name: h.name,
              styles: h.styles,
              next: ui
            }, h = h.next;
        var y = d.styles + ";";
        return y;
      }
      return QC(a, i, r);
    }
    case "function": {
      if (a !== void 0) {
        var m = ui, v = r(a);
        return ui = m, nu(a, i, v);
      }
      break;
    }
  }
  var S = r;
  return S;
}
function QC(a, i, r) {
  var o = "";
  if (Array.isArray(r))
    for (var s = 0; s < r.length; s++)
      o += nu(a, i, r[s]) + ";";
  else
    for (var d in r) {
      var h = r[d];
      if (typeof h != "object") {
        var y = h;
        Ty(y) && (o += Qh(d) + ":" + Ay(d, y) + ";");
      } else if (Array.isArray(h) && typeof h[0] == "string" && i == null)
        for (var m = 0; m < h.length; m++)
          Ty(h[m]) && (o += Qh(d) + ":" + Ay(d, h[m]) + ";");
      else {
        var v = nu(a, i, h);
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
var wy = /label:\s*([^\s;{]+)\s*(;|$)/g, ui;
function A0(a, i, r) {
  if (a.length === 1 && typeof a[0] == "object" && a[0] !== null && a[0].styles !== void 0)
    return a[0];
  var o = !0, s = "";
  ui = void 0;
  var d = a[0];
  if (d == null || d.raw === void 0)
    o = !1, s += nu(r, i, d);
  else {
    var h = d;
    s += h[0];
  }
  for (var y = 1; y < a.length; y++)
    if (s += nu(r, i, a[y]), o) {
      var m = d;
      s += m[y];
    }
  wy.lastIndex = 0;
  for (var v = "", S; (S = wy.exec(s)) !== null; )
    v += "-" + S[1];
  var O = GC(s) + v;
  return {
    name: O,
    styles: s,
    next: ui
  };
}
var ZC = function(i) {
  return i();
}, KC = Iv.useInsertionEffect ? Iv.useInsertionEffect : !1, JC = KC || ZC, w0 = /* @__PURE__ */ E.createContext(
  // we're doing this to avoid preconstruct's dead code elimination in this one case
  // because this module is primarily intended for the browser and node
  // but it's also required in react native and similar environments sometimes
  // and we could have a special build just for that
  // but this is much easier and the native packages
  // might use a different theme context in the future anyway
  typeof HTMLElement < "u" ? /* @__PURE__ */ VC({
    key: "css"
  }) : null
);
w0.Provider;
var WC = function(i) {
  return /* @__PURE__ */ E.forwardRef(function(r, o) {
    var s = E.useContext(w0);
    return i(r, s, o);
  });
}, PC = /* @__PURE__ */ E.createContext({}), Kp = {}.hasOwnProperty, Ep = "__EMOTION_TYPE_PLEASE_DO_NOT_USE__", ex = function(i, r) {
  var o = {};
  for (var s in r)
    Kp.call(r, s) && (o[s] = r[s]);
  return o[Ep] = i, o;
}, tx = function(i) {
  var r = i.cache, o = i.serialized, s = i.isStringTag;
  return O0(r, o, s), JC(function() {
    return YC(r, o, s);
  }), null;
}, nx = /* @__PURE__ */ WC(function(a, i, r) {
  var o = a.css;
  typeof o == "string" && i.registered[o] !== void 0 && (o = i.registered[o]);
  var s = a[Ep], d = [o], h = "";
  typeof a.className == "string" ? h = qC(i.registered, d, a.className) : a.className != null && (h = a.className + " ");
  var y = A0(d, void 0, E.useContext(PC));
  h += i.key + "-" + y.name;
  var m = {};
  for (var v in a)
    Kp.call(a, v) && v !== "css" && v !== Ep && (m[v] = a[v]);
  return m.className = h, r && (m.ref = r), /* @__PURE__ */ E.createElement(E.Fragment, null, /* @__PURE__ */ E.createElement(tx, {
    cache: i,
    serialized: y,
    isStringTag: typeof s == "string"
  }), /* @__PURE__ */ E.createElement(s, m));
}), ax = nx, _e = function(i, r) {
  var o = arguments;
  if (r == null || !Kp.call(r, "css"))
    return E.createElement.apply(void 0, o);
  var s = o.length, d = new Array(s);
  d[0] = ax, d[1] = ex(i, r);
  for (var h = 2; h < s; h++)
    d[h] = o[h];
  return E.createElement.apply(null, d);
};
(function(a) {
  var i;
  i || (i = a.JSX || (a.JSX = {}));
})(_e || (_e = {}));
function Jp() {
  for (var a = arguments.length, i = new Array(a), r = 0; r < a; r++)
    i[r] = arguments[r];
  return A0(i);
}
function ix() {
  var a = Jp.apply(void 0, arguments), i = "animation-" + a.name;
  return {
    name: i,
    styles: "@keyframes " + i + "{" + a.styles + "}",
    anim: 1,
    toString: function() {
      return "_EMO_" + this.name + "_" + this.styles + "_EMO_";
    }
  };
}
function lx(a, i) {
  return i || (i = a.slice(0)), Object.freeze(Object.defineProperties(a, {
    raw: {
      value: Object.freeze(i)
    }
  }));
}
const rx = Math.min, ox = Math.max, yf = Math.round, Ic = Math.floor, bf = (a) => ({
  x: a,
  y: a
});
function sx(a) {
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
function M0(a) {
  return D0(a) ? (a.nodeName || "").toLowerCase() : "#document";
}
function Ui(a) {
  var i;
  return (a == null || (i = a.ownerDocument) == null ? void 0 : i.defaultView) || window;
}
function R0(a) {
  var i;
  return (i = (D0(a) ? a.ownerDocument : a.document) || window.document) == null ? void 0 : i.documentElement;
}
function D0(a) {
  return Bf() ? a instanceof Node || a instanceof Ui(a).Node : !1;
}
function ux(a) {
  return Bf() ? a instanceof Element || a instanceof Ui(a).Element : !1;
}
function Wp(a) {
  return Bf() ? a instanceof HTMLElement || a instanceof Ui(a).HTMLElement : !1;
}
function My(a) {
  return !Bf() || typeof ShadowRoot > "u" ? !1 : a instanceof ShadowRoot || a instanceof Ui(a).ShadowRoot;
}
const cx = /* @__PURE__ */ new Set(["inline", "contents"]);
function N0(a) {
  const {
    overflow: i,
    overflowX: r,
    overflowY: o,
    display: s
  } = Pp(a);
  return /auto|scroll|overlay|hidden|clip/.test(i + o + r) && !cx.has(s);
}
function fx() {
  return typeof CSS > "u" || !CSS.supports ? !1 : CSS.supports("-webkit-backdrop-filter", "none");
}
const dx = /* @__PURE__ */ new Set(["html", "body", "#document"]);
function hx(a) {
  return dx.has(M0(a));
}
function Pp(a) {
  return Ui(a).getComputedStyle(a);
}
function px(a) {
  if (M0(a) === "html")
    return a;
  const i = (
    // Step into the shadow DOM of the parent of a slotted node.
    a.assignedSlot || // DOM Element detected.
    a.parentNode || // ShadowRoot detected.
    My(a) && a.host || // Fallback.
    R0(a)
  );
  return My(i) ? i.host : i;
}
function j0(a) {
  const i = px(a);
  return hx(i) ? a.ownerDocument ? a.ownerDocument.body : a.body : Wp(i) && N0(i) ? i : j0(i);
}
function _f(a, i, r) {
  var o;
  i === void 0 && (i = []), r === void 0 && (r = !0);
  const s = j0(a), d = s === ((o = a.ownerDocument) == null ? void 0 : o.body), h = Ui(s);
  if (d) {
    const y = Cp(h);
    return i.concat(h, h.visualViewport || [], N0(s) ? s : [], y && r ? _f(y) : []);
  }
  return i.concat(s, _f(s, [], r));
}
function Cp(a) {
  return a.parent && Object.getPrototypeOf(a.parent) ? a.frameElement : null;
}
function mx(a) {
  const i = Pp(a);
  let r = parseFloat(i.width) || 0, o = parseFloat(i.height) || 0;
  const s = Wp(a), d = s ? a.offsetWidth : r, h = s ? a.offsetHeight : o, y = yf(r) !== d || yf(o) !== h;
  return y && (r = d, o = h), {
    width: r,
    height: o,
    $: y
  };
}
function em(a) {
  return ux(a) ? a : a.contextElement;
}
function Ry(a) {
  const i = em(a);
  if (!Wp(i))
    return bf(1);
  const r = i.getBoundingClientRect(), {
    width: o,
    height: s,
    $: d
  } = mx(i);
  let h = (d ? yf(r.width) : r.width) / o, y = (d ? yf(r.height) : r.height) / s;
  return (!h || !Number.isFinite(h)) && (h = 1), (!y || !Number.isFinite(y)) && (y = 1), {
    x: h,
    y
  };
}
const gx = /* @__PURE__ */ bf(0);
function vx(a) {
  const i = Ui(a);
  return !fx() || !i.visualViewport ? gx : {
    x: i.visualViewport.offsetLeft,
    y: i.visualViewport.offsetTop
  };
}
function yx(a, i, r) {
  return !1;
}
function Dy(a, i, r, o) {
  i === void 0 && (i = !1);
  const s = a.getBoundingClientRect(), d = em(a);
  let h = bf(1);
  i && (h = Ry(a));
  const y = yx() ? vx(d) : bf(0);
  let m = (s.left + y.x) / h.x, v = (s.top + y.y) / h.y, S = s.width / h.x, O = s.height / h.y;
  if (d) {
    const A = Ui(d), D = o;
    let N = A, L = Cp(N);
    for (; L && o && D !== N; ) {
      const z = Ry(L), V = L.getBoundingClientRect(), Z = Pp(L), X = V.left + (L.clientLeft + parseFloat(Z.paddingLeft)) * z.x, P = V.top + (L.clientTop + parseFloat(Z.paddingTop)) * z.y;
      m *= z.x, v *= z.y, S *= z.x, O *= z.y, m += X, v += P, N = Ui(L), L = Cp(N);
    }
  }
  return sx({
    width: S,
    height: O,
    x: m,
    y: v
  });
}
function z0(a, i) {
  return a.x === i.x && a.y === i.y && a.width === i.width && a.height === i.height;
}
function bx(a, i) {
  let r = null, o;
  const s = R0(a);
  function d() {
    var y;
    clearTimeout(o), (y = r) == null || y.disconnect(), r = null;
  }
  function h(y, m) {
    y === void 0 && (y = !1), m === void 0 && (m = 1), d();
    const v = a.getBoundingClientRect(), {
      left: S,
      top: O,
      width: A,
      height: D
    } = v;
    if (y || i(), !A || !D)
      return;
    const N = Ic(O), L = Ic(s.clientWidth - (S + A)), z = Ic(s.clientHeight - (O + D)), V = Ic(S), X = {
      rootMargin: -N + "px " + -L + "px " + -z + "px " + -V + "px",
      threshold: ox(0, rx(1, m)) || 1
    };
    let P = !0;
    function B(I) {
      const U = I[0].intersectionRatio;
      if (U !== m) {
        if (!P)
          return h();
        U ? h(!1, U) : o = setTimeout(() => {
          h(!1, 1e-7);
        }, 1e3);
      }
      U === 1 && !z0(v, a.getBoundingClientRect()) && h(), P = !1;
    }
    try {
      r = new IntersectionObserver(B, {
        ...X,
        // Handle <iframe>s
        root: s.ownerDocument
      });
    } catch {
      r = new IntersectionObserver(B, X);
    }
    r.observe(a);
  }
  return h(!0), d;
}
function _x(a, i, r, o) {
  o === void 0 && (o = {});
  const {
    ancestorScroll: s = !0,
    ancestorResize: d = !0,
    elementResize: h = typeof ResizeObserver == "function",
    layoutShift: y = typeof IntersectionObserver == "function",
    animationFrame: m = !1
  } = o, v = em(a), S = s || d ? [...v ? _f(v) : [], ..._f(i)] : [];
  S.forEach((V) => {
    s && V.addEventListener("scroll", r, {
      passive: !0
    }), d && V.addEventListener("resize", r);
  });
  const O = v && y ? bx(v, r) : null;
  let A = -1, D = null;
  h && (D = new ResizeObserver((V) => {
    let [Z] = V;
    Z && Z.target === v && D && (D.unobserve(i), cancelAnimationFrame(A), A = requestAnimationFrame(() => {
      var X;
      (X = D) == null || X.observe(i);
    })), r();
  }), v && !m && D.observe(v), D.observe(i));
  let N, L = m ? Dy(a) : null;
  m && z();
  function z() {
    const V = Dy(a);
    L && !z0(L, V) && r(), L = V, N = requestAnimationFrame(z);
  }
  return r(), () => {
    var V;
    S.forEach((Z) => {
      s && Z.removeEventListener("scroll", r), d && Z.removeEventListener("resize", r);
    }), O?.(), (V = D) == null || V.disconnect(), D = null, m && cancelAnimationFrame(N);
  };
}
var xp = E.useLayoutEffect, Sx = ["className", "clearValue", "cx", "getStyles", "getClassNames", "getValue", "hasValue", "isMulti", "isRtl", "options", "selectOption", "selectProps", "setValue", "theme"], Sf = function() {
};
function Ex(a, i) {
  return i ? i[0] === "-" ? a + i : a + "__" + i : a;
}
function Cx(a, i) {
  for (var r = arguments.length, o = new Array(r > 2 ? r - 2 : 0), s = 2; s < r; s++)
    o[s - 2] = arguments[s];
  var d = [].concat(o);
  if (i && a)
    for (var h in i)
      i.hasOwnProperty(h) && i[h] && d.push("".concat(Ex(a, h)));
  return d.filter(function(y) {
    return y;
  }).map(function(y) {
    return String(y).trim();
  }).join(" ");
}
var Ny = function(i) {
  return Nx(i) ? i.filter(Boolean) : gr(i) === "object" && i !== null ? [i] : [];
}, L0 = function(i) {
  i.className, i.clearValue, i.cx, i.getStyles, i.getClassNames, i.getValue, i.hasValue, i.isMulti, i.isRtl, i.options, i.selectOption, i.selectProps, i.setValue, i.theme;
  var r = qn(i, Sx);
  return ge({}, r);
}, It = function(i, r, o) {
  var s = i.cx, d = i.getStyles, h = i.getClassNames, y = i.className;
  return {
    css: d(r, i),
    className: s(o ?? {}, h(r, i), y)
  };
};
function $f(a) {
  return [document.documentElement, document.body, window].indexOf(a) > -1;
}
function xx(a) {
  return $f(a) ? window.innerHeight : a.clientHeight;
}
function H0(a) {
  return $f(a) ? window.pageYOffset : a.scrollTop;
}
function Ef(a, i) {
  if ($f(a)) {
    window.scrollTo(0, i);
    return;
  }
  a.scrollTop = i;
}
function Ox(a) {
  var i = getComputedStyle(a), r = i.position === "absolute", o = /(auto|scroll)/;
  if (i.position === "fixed") return document.documentElement;
  for (var s = a; s = s.parentElement; )
    if (i = getComputedStyle(s), !(r && i.position === "static") && o.test(i.overflow + i.overflowY + i.overflowX))
      return s;
  return document.documentElement;
}
function Tx(a, i, r, o) {
  return r * ((a = a / o - 1) * a * a + 1) + i;
}
function Fc(a, i) {
  var r = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 200, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : Sf, s = H0(a), d = i - s, h = 10, y = 0;
  function m() {
    y += h;
    var v = Tx(y, s, d, r);
    Ef(a, v), y < r ? window.requestAnimationFrame(m) : o(a);
  }
  m();
}
function jy(a, i) {
  var r = a.getBoundingClientRect(), o = i.getBoundingClientRect(), s = i.offsetHeight / 3;
  o.bottom + s > r.bottom ? Ef(a, Math.min(i.offsetTop + i.clientHeight - a.offsetHeight + s, a.scrollHeight)) : o.top - s < r.top && Ef(a, Math.max(i.offsetTop - s, 0));
}
function Ax(a) {
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
function zy() {
  try {
    return document.createEvent("TouchEvent"), !0;
  } catch {
    return !1;
  }
}
function wx() {
  try {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  } catch {
    return !1;
  }
}
var V0 = !1, Mx = {
  get passive() {
    return V0 = !0;
  }
}, Qc = typeof window < "u" ? window : {};
Qc.addEventListener && Qc.removeEventListener && (Qc.addEventListener("p", Sf, Mx), Qc.removeEventListener("p", Sf, !1));
var Rx = V0;
function Dx(a) {
  return a != null;
}
function Nx(a) {
  return Array.isArray(a);
}
function Zc(a, i, r) {
  return a ? i : r;
}
var jx = function(i) {
  for (var r = arguments.length, o = new Array(r > 1 ? r - 1 : 0), s = 1; s < r; s++)
    o[s - 1] = arguments[s];
  var d = Object.entries(i).filter(function(h) {
    var y = xa(h, 1), m = y[0];
    return !o.includes(m);
  });
  return d.reduce(function(h, y) {
    var m = xa(y, 2), v = m[0], S = m[1];
    return h[v] = S, h;
  }, {});
}, zx = ["children", "innerProps"], Lx = ["children", "innerProps"];
function Hx(a) {
  var i = a.maxHeight, r = a.menuEl, o = a.minHeight, s = a.placement, d = a.shouldScroll, h = a.isFixedPosition, y = a.controlHeight, m = Ox(r), v = {
    placement: "bottom",
    maxHeight: i
  };
  if (!r || !r.offsetParent) return v;
  var S = m.getBoundingClientRect(), O = S.height, A = r.getBoundingClientRect(), D = A.bottom, N = A.height, L = A.top, z = r.offsetParent.getBoundingClientRect(), V = z.top, Z = h ? window.innerHeight : xx(m), X = H0(m), P = parseInt(getComputedStyle(r).marginBottom, 10), B = parseInt(getComputedStyle(r).marginTop, 10), I = V - B, U = Z - L, oe = I + X, Ee = O - X - L, Fe = D - Z + X + P, Ie = X + L - B, He = 160;
  switch (s) {
    case "auto":
    case "bottom":
      if (U >= N)
        return {
          placement: "bottom",
          maxHeight: i
        };
      if (Ee >= N && !h)
        return d && Fc(m, Fe, He), {
          placement: "bottom",
          maxHeight: i
        };
      if (!h && Ee >= o || h && U >= o) {
        d && Fc(m, Fe, He);
        var dt = h ? U - P : Ee - P;
        return {
          placement: "bottom",
          maxHeight: dt
        };
      }
      if (s === "auto" || h) {
        var it = i, $e = h ? I : oe;
        return $e >= o && (it = Math.min($e - P - y, i)), {
          placement: "top",
          maxHeight: it
        };
      }
      if (s === "bottom")
        return d && Ef(m, Fe), {
          placement: "bottom",
          maxHeight: i
        };
      break;
    case "top":
      if (I >= N)
        return {
          placement: "top",
          maxHeight: i
        };
      if (oe >= N && !h)
        return d && Fc(m, Ie, He), {
          placement: "top",
          maxHeight: i
        };
      if (!h && oe >= o || h && I >= o) {
        var $ = i;
        return (!h && oe >= o || h && I >= o) && ($ = h ? I - B : oe - B), d && Fc(m, Ie, He), {
          placement: "top",
          maxHeight: $
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
function Vx(a) {
  var i = {
    bottom: "top",
    top: "bottom"
  };
  return a ? i[a] : "bottom";
}
var U0 = function(i) {
  return i === "auto" ? "bottom" : i;
}, Ux = function(i, r) {
  var o, s = i.placement, d = i.theme, h = d.borderRadius, y = d.spacing, m = d.colors;
  return ge((o = {
    label: "menu"
  }, Ks(o, Vx(s), "100%"), Ks(o, "position", "absolute"), Ks(o, "width", "100%"), Ks(o, "zIndex", 1), o), r ? {} : {
    backgroundColor: m.neutral0,
    borderRadius: h,
    boxShadow: "0 0 0 1px hsla(0, 0%, 0%, 0.1), 0 4px 11px hsla(0, 0%, 0%, 0.1)",
    marginBottom: y.menuGutter,
    marginTop: y.menuGutter
  });
}, B0 = /* @__PURE__ */ E.createContext(null), Bx = function(i) {
  var r = i.children, o = i.minMenuHeight, s = i.maxMenuHeight, d = i.menuPlacement, h = i.menuPosition, y = i.menuShouldScrollIntoView, m = i.theme, v = E.useContext(B0) || {}, S = v.setPortalPlacement, O = E.useRef(null), A = E.useState(s), D = xa(A, 2), N = D[0], L = D[1], z = E.useState(null), V = xa(z, 2), Z = V[0], X = V[1], P = m.spacing.controlHeight;
  return xp(function() {
    var B = O.current;
    if (B) {
      var I = h === "fixed", U = y && !I, oe = Hx({
        maxHeight: s,
        menuEl: B,
        minHeight: o,
        placement: d,
        shouldScroll: U,
        isFixedPosition: I,
        controlHeight: P
      });
      L(oe.maxHeight), X(oe.placement), S?.(oe.placement);
    }
  }, [s, d, h, y, o, S, P]), r({
    ref: O,
    placerProps: ge(ge({}, i), {}, {
      placement: Z || U0(d),
      maxHeight: N
    })
  });
}, $x = function(i) {
  var r = i.children, o = i.innerRef, s = i.innerProps;
  return _e("div", ve({}, It(i, "menu", {
    menu: !0
  }), {
    ref: o
  }, s), r);
}, kx = $x, qx = function(i, r) {
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
}, Yx = function(i) {
  var r = i.children, o = i.innerProps, s = i.innerRef, d = i.isMulti;
  return _e("div", ve({}, It(i, "menuList", {
    "menu-list": !0,
    "menu-list--is-multi": d
  }), {
    ref: s
  }, o), r);
}, $0 = function(i, r) {
  var o = i.theme, s = o.spacing.baseUnit, d = o.colors;
  return ge({
    textAlign: "center"
  }, r ? {} : {
    color: d.neutral40,
    padding: "".concat(s * 2, "px ").concat(s * 3, "px")
  });
}, Gx = $0, Xx = $0, Ix = function(i) {
  var r = i.children, o = r === void 0 ? "No options" : r, s = i.innerProps, d = qn(i, zx);
  return _e("div", ve({}, It(ge(ge({}, d), {}, {
    children: o,
    innerProps: s
  }), "noOptionsMessage", {
    "menu-notice": !0,
    "menu-notice--no-options": !0
  }), s), o);
}, Fx = function(i) {
  var r = i.children, o = r === void 0 ? "Loading..." : r, s = i.innerProps, d = qn(i, Lx);
  return _e("div", ve({}, It(ge(ge({}, d), {}, {
    children: o,
    innerProps: s
  }), "loadingMessage", {
    "menu-notice": !0,
    "menu-notice--loading": !0
  }), s), o);
}, Qx = function(i) {
  var r = i.rect, o = i.offset, s = i.position;
  return {
    left: r.left,
    position: s,
    top: o,
    width: r.width,
    zIndex: 1
  };
}, Zx = function(i) {
  var r = i.appendTo, o = i.children, s = i.controlElement, d = i.innerProps, h = i.menuPlacement, y = i.menuPosition, m = E.useRef(null), v = E.useRef(null), S = E.useState(U0(h)), O = xa(S, 2), A = O[0], D = O[1], N = E.useMemo(function() {
    return {
      setPortalPlacement: D
    };
  }, []), L = E.useState(null), z = xa(L, 2), V = z[0], Z = z[1], X = E.useCallback(function() {
    if (s) {
      var U = Ax(s), oe = y === "fixed" ? 0 : window.pageYOffset, Ee = U[A] + oe;
      (Ee !== V?.offset || U.left !== V?.rect.left || U.width !== V?.rect.width) && Z({
        offset: Ee,
        rect: U
      });
    }
  }, [s, y, A, V?.offset, V?.rect.left, V?.rect.width]);
  xp(function() {
    X();
  }, [X]);
  var P = E.useCallback(function() {
    typeof v.current == "function" && (v.current(), v.current = null), s && m.current && (v.current = _x(s, m.current, X, {
      elementResize: "ResizeObserver" in window
    }));
  }, [s, X]);
  xp(function() {
    P();
  }, [P]);
  var B = E.useCallback(function(U) {
    m.current = U, P();
  }, [P]);
  if (!r && y !== "fixed" || !V) return null;
  var I = _e("div", ve({
    ref: B
  }, It(ge(ge({}, i), {}, {
    offset: V.offset,
    position: y,
    rect: V.rect
  }), "menuPortal", {
    "menu-portal": !0
  }), d), o);
  return _e(B0.Provider, {
    value: N
  }, r ? /* @__PURE__ */ mb.createPortal(I, r) : I);
}, Kx = function(i) {
  var r = i.isDisabled, o = i.isRtl;
  return {
    label: "container",
    direction: o ? "rtl" : void 0,
    pointerEvents: r ? "none" : void 0,
    // cancel mouse events when disabled
    position: "relative"
  };
}, Jx = function(i) {
  var r = i.children, o = i.innerProps, s = i.isDisabled, d = i.isRtl;
  return _e("div", ve({}, It(i, "container", {
    "--is-disabled": s,
    "--is-rtl": d
  }), o), r);
}, Wx = function(i, r) {
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
}, Px = function(i) {
  var r = i.children, o = i.innerProps, s = i.isMulti, d = i.hasValue;
  return _e("div", ve({}, It(i, "valueContainer", {
    "value-container": !0,
    "value-container--is-multi": s,
    "value-container--has-value": d
  }), o), r);
}, eO = function() {
  return {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexShrink: 0
  };
}, tO = function(i) {
  var r = i.children, o = i.innerProps;
  return _e("div", ve({}, It(i, "indicatorsContainer", {
    indicators: !0
  }), o), r);
}, Ly, nO = ["size"], aO = ["innerProps", "isRtl", "size"], iO = {
  name: "8mmkcg",
  styles: "display:inline-block;fill:currentColor;line-height:1;stroke:currentColor;stroke-width:0"
}, k0 = function(i) {
  var r = i.size, o = qn(i, nO);
  return _e("svg", ve({
    height: r,
    width: r,
    viewBox: "0 0 20 20",
    "aria-hidden": "true",
    focusable: "false",
    css: iO
  }, o));
}, tm = function(i) {
  return _e(k0, ve({
    size: 20
  }, i), _e("path", {
    d: "M14.348 14.849c-0.469 0.469-1.229 0.469-1.697 0l-2.651-3.030-2.651 3.029c-0.469 0.469-1.229 0.469-1.697 0-0.469-0.469-0.469-1.229 0-1.697l2.758-3.15-2.759-3.152c-0.469-0.469-0.469-1.228 0-1.697s1.228-0.469 1.697 0l2.652 3.031 2.651-3.031c0.469-0.469 1.228-0.469 1.697 0s0.469 1.229 0 1.697l-2.758 3.152 2.758 3.15c0.469 0.469 0.469 1.229 0 1.698z"
  }));
}, q0 = function(i) {
  return _e(k0, ve({
    size: 20
  }, i), _e("path", {
    d: "M4.516 7.548c0.436-0.446 1.043-0.481 1.576 0l3.908 3.747 3.908-3.747c0.533-0.481 1.141-0.446 1.574 0 0.436 0.445 0.408 1.197 0 1.615-0.406 0.418-4.695 4.502-4.695 4.502-0.217 0.223-0.502 0.335-0.787 0.335s-0.57-0.112-0.789-0.335c0 0-4.287-4.084-4.695-4.502s-0.436-1.17 0-1.615z"
  }));
}, Y0 = function(i, r) {
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
}, lO = Y0, rO = function(i) {
  var r = i.children, o = i.innerProps;
  return _e("div", ve({}, It(i, "dropdownIndicator", {
    indicator: !0,
    "dropdown-indicator": !0
  }), o), r || _e(q0, null));
}, oO = Y0, sO = function(i) {
  var r = i.children, o = i.innerProps;
  return _e("div", ve({}, It(i, "clearIndicator", {
    indicator: !0,
    "clear-indicator": !0
  }), o), r || _e(tm, null));
}, uO = function(i, r) {
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
}, cO = function(i) {
  var r = i.innerProps;
  return _e("span", ve({}, r, It(i, "indicatorSeparator", {
    "indicator-separator": !0
  })));
}, fO = ix(Ly || (Ly = lx([`
  0%, 80%, 100% { opacity: 0; }
  40% { opacity: 1; }
`]))), dO = function(i, r) {
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
  return _e("span", {
    css: /* @__PURE__ */ Jp({
      animation: "".concat(fO, " 1s ease-in-out ").concat(r, "ms infinite;"),
      backgroundColor: "currentColor",
      borderRadius: "1em",
      display: "inline-block",
      marginLeft: o ? "1em" : void 0,
      height: "1em",
      verticalAlign: "top",
      width: "1em"
    }, "", "")
  });
}, hO = function(i) {
  var r = i.innerProps, o = i.isRtl, s = i.size, d = s === void 0 ? 4 : s, h = qn(i, aO);
  return _e("div", ve({}, It(ge(ge({}, h), {}, {
    innerProps: r,
    isRtl: o,
    size: d
  }), "loadingIndicator", {
    indicator: !0,
    "loading-indicator": !0
  }), r), _e(Zh, {
    delay: 0,
    offset: o
  }), _e(Zh, {
    delay: 160,
    offset: !0
  }), _e(Zh, {
    delay: 320,
    offset: !o
  }));
}, pO = function(i, r) {
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
}, mO = function(i) {
  var r = i.children, o = i.isDisabled, s = i.isFocused, d = i.innerRef, h = i.innerProps, y = i.menuIsOpen;
  return _e("div", ve({
    ref: d
  }, It(i, "control", {
    control: !0,
    "control--is-disabled": o,
    "control--is-focused": s,
    "control--menu-is-open": y
  }), h, {
    "aria-disabled": o || void 0
  }), r);
}, gO = mO, vO = ["data"], yO = function(i, r) {
  var o = i.theme.spacing;
  return r ? {} : {
    paddingBottom: o.baseUnit * 2,
    paddingTop: o.baseUnit * 2
  };
}, bO = function(i) {
  var r = i.children, o = i.cx, s = i.getStyles, d = i.getClassNames, h = i.Heading, y = i.headingProps, m = i.innerProps, v = i.label, S = i.theme, O = i.selectProps;
  return _e("div", ve({}, It(i, "group", {
    group: !0
  }), m), _e(h, ve({}, y, {
    selectProps: O,
    theme: S,
    getStyles: s,
    getClassNames: d,
    cx: o
  }), v), _e("div", null, r));
}, _O = function(i, r) {
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
}, SO = function(i) {
  var r = L0(i);
  r.data;
  var o = qn(r, vO);
  return _e("div", ve({}, It(i, "groupHeading", {
    "group-heading": !0
  }), o));
}, EO = bO, CO = ["innerRef", "isDisabled", "isHidden", "inputClassName"], xO = function(i, r) {
  var o = i.isDisabled, s = i.value, d = i.theme, h = d.spacing, y = d.colors;
  return ge(ge({
    visibility: o ? "hidden" : "visible",
    // force css to recompute when value change due to @emotion bug.
    // We can remove it whenever the bug is fixed.
    transform: s ? "translateZ(0)" : ""
  }, OO), r ? {} : {
    margin: h.baseUnit / 2,
    paddingBottom: h.baseUnit / 2,
    paddingTop: h.baseUnit / 2,
    color: y.neutral80
  });
}, G0 = {
  gridArea: "1 / 2",
  font: "inherit",
  minWidth: "2px",
  border: 0,
  margin: 0,
  outline: 0,
  padding: 0
}, OO = {
  flex: "1 1 auto",
  display: "inline-grid",
  gridArea: "1 / 1 / 2 / 3",
  gridTemplateColumns: "0 min-content",
  "&:after": ge({
    content: 'attr(data-value) " "',
    visibility: "hidden",
    whiteSpace: "pre"
  }, G0)
}, TO = function(i) {
  return ge({
    label: "input",
    color: "inherit",
    background: 0,
    opacity: i ? 0 : 1,
    width: "100%"
  }, G0);
}, AO = function(i) {
  var r = i.cx, o = i.value, s = L0(i), d = s.innerRef, h = s.isDisabled, y = s.isHidden, m = s.inputClassName, v = qn(s, CO);
  return _e("div", ve({}, It(i, "input", {
    "input-container": !0
  }), {
    "data-value": o || ""
  }), _e("input", ve({
    className: r({
      input: !0
    }, m),
    ref: d,
    style: TO(y),
    disabled: h
  }, v)));
}, wO = AO, MO = function(i, r) {
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
}, RO = function(i, r) {
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
}, DO = function(i, r) {
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
}, X0 = function(i) {
  var r = i.children, o = i.innerProps;
  return _e("div", o, r);
}, NO = X0, jO = X0;
function zO(a) {
  var i = a.children, r = a.innerProps;
  return _e("div", ve({
    role: "button"
  }, r), i || _e(tm, {
    size: 14
  }));
}
var LO = function(i) {
  var r = i.children, o = i.components, s = i.data, d = i.innerProps, h = i.isDisabled, y = i.removeProps, m = i.selectProps, v = o.Container, S = o.Label, O = o.Remove;
  return _e(v, {
    data: s,
    innerProps: ge(ge({}, It(i, "multiValue", {
      "multi-value": !0,
      "multi-value--is-disabled": h
    })), d),
    selectProps: m
  }, _e(S, {
    data: s,
    innerProps: ge({}, It(i, "multiValueLabel", {
      "multi-value__label": !0
    })),
    selectProps: m
  }, r), _e(O, {
    data: s,
    innerProps: ge(ge({}, It(i, "multiValueRemove", {
      "multi-value__remove": !0
    })), {}, {
      "aria-label": "Remove ".concat(r || "option")
    }, y),
    selectProps: m
  }));
}, HO = LO, VO = function(i, r) {
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
}, UO = function(i) {
  var r = i.children, o = i.isDisabled, s = i.isFocused, d = i.isSelected, h = i.innerRef, y = i.innerProps;
  return _e("div", ve({}, It(i, "option", {
    option: !0,
    "option--is-disabled": o,
    "option--is-focused": s,
    "option--is-selected": d
  }), {
    ref: h,
    "aria-disabled": o
  }, y), r);
}, BO = UO, $O = function(i, r) {
  var o = i.theme, s = o.spacing, d = o.colors;
  return ge({
    label: "placeholder",
    gridArea: "1 / 1 / 2 / 3"
  }, r ? {} : {
    color: d.neutral50,
    marginLeft: s.baseUnit / 2,
    marginRight: s.baseUnit / 2
  });
}, kO = function(i) {
  var r = i.children, o = i.innerProps;
  return _e("div", ve({}, It(i, "placeholder", {
    placeholder: !0
  }), o), r);
}, qO = kO, YO = function(i, r) {
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
}, GO = function(i) {
  var r = i.children, o = i.isDisabled, s = i.innerProps;
  return _e("div", ve({}, It(i, "singleValue", {
    "single-value": !0,
    "single-value--is-disabled": o
  }), s), r);
}, XO = GO, IO = {
  ClearIndicator: sO,
  Control: gO,
  DropdownIndicator: rO,
  DownChevron: q0,
  CrossIcon: tm,
  Group: EO,
  GroupHeading: SO,
  IndicatorsContainer: tO,
  IndicatorSeparator: cO,
  Input: wO,
  LoadingIndicator: hO,
  Menu: kx,
  MenuList: Yx,
  MenuPortal: Zx,
  LoadingMessage: Fx,
  NoOptionsMessage: Ix,
  MultiValue: HO,
  MultiValueContainer: NO,
  MultiValueLabel: jO,
  MultiValueRemove: zO,
  Option: BO,
  Placeholder: qO,
  SelectContainer: Jx,
  SingleValue: XO,
  ValueContainer: Px
}, I0 = function(i) {
  return ge(ge({}, IO), i.components);
}, Hy = Number.isNaN || function(i) {
  return typeof i == "number" && i !== i;
};
function FO(a, i) {
  return !!(a === i || Hy(a) && Hy(i));
}
function QO(a, i) {
  if (a.length !== i.length)
    return !1;
  for (var r = 0; r < a.length; r++)
    if (!FO(a[r], i[r]))
      return !1;
  return !0;
}
function F0(a, i) {
  i === void 0 && (i = QO);
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
var ZO = {
  name: "7pg0cj-a11yText",
  styles: "label:a11yText;z-index:9999;border:0;clip:rect(1px, 1px, 1px, 1px);height:1px;width:1px;position:absolute;overflow:hidden;padding:0;white-space:nowrap"
}, KO = function(i) {
  return _e("span", ve({
    css: ZO
  }, i));
}, Vy = KO, JO = {
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
    var r = i.context, o = i.focused, s = i.options, d = i.label, h = d === void 0 ? "" : d, y = i.selectValue, m = i.isDisabled, v = i.isSelected, S = i.isAppleDevice, O = function(L, z) {
      return L && L.length ? "".concat(L.indexOf(z) + 1, " of ").concat(L.length) : "";
    };
    if (r === "value" && y)
      return "value ".concat(h, " focused, ").concat(O(y, o), ".");
    if (r === "menu" && S) {
      var A = m ? " disabled" : "", D = "".concat(v ? " selected" : "").concat(A);
      return "".concat(h).concat(D, ", ").concat(O(s, o), ".");
    }
    return "";
  },
  onFilter: function(i) {
    var r = i.inputValue, o = i.resultsMessage;
    return "".concat(o).concat(r ? " for search term " + r : "", ".");
  }
}, WO = function(i) {
  var r = i.ariaSelection, o = i.focusedOption, s = i.focusedValue, d = i.focusableOptions, h = i.isFocused, y = i.selectValue, m = i.selectProps, v = i.id, S = i.isAppleDevice, O = m.ariaLiveMessages, A = m.getOptionLabel, D = m.inputValue, N = m.isMulti, L = m.isOptionDisabled, z = m.isSearchable, V = m.menuIsOpen, Z = m.options, X = m.screenReaderStatus, P = m.tabSelectsValue, B = m.isLoading, I = m["aria-label"], U = m["aria-live"], oe = E.useMemo(function() {
    return ge(ge({}, JO), O || {});
  }, [O]), Ee = E.useMemo(function() {
    var $e = "";
    if (r && oe.onChange) {
      var $ = r.option, ne = r.options, le = r.removedValue, ye = r.removedValues, Ce = r.value, x = function(Ve) {
        return Array.isArray(Ve) ? null : Ve;
      }, k = le || $ || x(Ce), te = k ? A(k) : "", ae = ne || ye || void 0, ue = ae ? ae.map(A) : [], fe = ge({
        // multiSelected items are usually items that have already been selected
        // or set by the user as a default value so we assume they are not disabled
        isDisabled: k && L(k, y),
        label: te,
        labels: ue
      }, r);
      $e = oe.onChange(fe);
    }
    return $e;
  }, [r, oe, L, y, A]), Fe = E.useMemo(function() {
    var $e = "", $ = o || s, ne = !!(o && y && y.includes(o));
    if ($ && oe.onFocus) {
      var le = {
        focused: $,
        label: A($),
        isDisabled: L($, y),
        isSelected: ne,
        options: d,
        context: $ === o ? "menu" : "value",
        selectValue: y,
        isAppleDevice: S
      };
      $e = oe.onFocus(le);
    }
    return $e;
  }, [o, s, A, L, oe, d, y, S]), Ie = E.useMemo(function() {
    var $e = "";
    if (V && Z.length && !B && oe.onFilter) {
      var $ = X({
        count: d.length
      });
      $e = oe.onFilter({
        inputValue: D,
        resultsMessage: $
      });
    }
    return $e;
  }, [d, D, V, oe, Z, X, B]), He = r?.action === "initial-input-focus", dt = E.useMemo(function() {
    var $e = "";
    if (oe.guidance) {
      var $ = s ? "value" : V ? "menu" : "input";
      $e = oe.guidance({
        "aria-label": I,
        context: $,
        isDisabled: o && L(o, y),
        isMulti: N,
        isSearchable: z,
        tabSelectsValue: P,
        isInitialFocus: He
      });
    }
    return $e;
  }, [I, o, s, N, L, z, V, oe, y, P, He]), it = _e(E.Fragment, null, _e("span", {
    id: "aria-selection"
  }, Ee), _e("span", {
    id: "aria-focused"
  }, Fe), _e("span", {
    id: "aria-results"
  }, Ie), _e("span", {
    id: "aria-guidance"
  }, dt));
  return _e(E.Fragment, null, _e(Vy, {
    id: v
  }, He && it), _e(Vy, {
    "aria-live": U,
    "aria-atomic": "false",
    "aria-relevant": "additions text",
    role: "log"
  }, h && !He && it));
}, PO = WO, Op = [{
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
}], eT = new RegExp("[" + Op.map(function(a) {
  return a.letters;
}).join("") + "]", "g"), Q0 = {};
for (var Kh = 0; Kh < Op.length; Kh++)
  for (var Jh = Op[Kh], Wh = 0; Wh < Jh.letters.length; Wh++)
    Q0[Jh.letters[Wh]] = Jh.base;
var Z0 = function(i) {
  return i.replace(eT, function(r) {
    return Q0[r];
  });
}, tT = F0(Z0), Uy = function(i) {
  return i.replace(/^\s+|\s+$/g, "");
}, nT = function(i) {
  return "".concat(i.label, " ").concat(i.value);
}, aT = function(i) {
  return function(r, o) {
    if (r.data.__isNew__) return !0;
    var s = ge({
      ignoreCase: !0,
      ignoreAccents: !0,
      stringify: nT,
      trim: !0,
      matchFrom: "any"
    }, i), d = s.ignoreCase, h = s.ignoreAccents, y = s.stringify, m = s.trim, v = s.matchFrom, S = m ? Uy(o) : o, O = m ? Uy(y(r)) : y(r);
    return d && (S = S.toLowerCase(), O = O.toLowerCase()), h && (S = tT(S), O = Z0(O)), v === "start" ? O.substr(0, S.length) === S : O.indexOf(S) > -1;
  };
}, iT = ["innerRef"];
function lT(a) {
  var i = a.innerRef, r = qn(a, iT), o = jx(r, "onExited", "in", "enter", "exit", "appear");
  return _e("input", ve({
    ref: i
  }, o, {
    css: /* @__PURE__ */ Jp({
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
var rT = function(i) {
  i.cancelable && i.preventDefault(), i.stopPropagation();
};
function oT(a) {
  var i = a.isEnabled, r = a.onBottomArrive, o = a.onBottomLeave, s = a.onTopArrive, d = a.onTopLeave, h = E.useRef(!1), y = E.useRef(!1), m = E.useRef(0), v = E.useRef(null), S = E.useCallback(function(z, V) {
    if (v.current !== null) {
      var Z = v.current, X = Z.scrollTop, P = Z.scrollHeight, B = Z.clientHeight, I = v.current, U = V > 0, oe = P - B - X, Ee = !1;
      oe > V && h.current && (o && o(z), h.current = !1), U && y.current && (d && d(z), y.current = !1), U && V > oe ? (r && !h.current && r(z), I.scrollTop = P, Ee = !0, h.current = !0) : !U && -V > X && (s && !y.current && s(z), I.scrollTop = 0, Ee = !0, y.current = !0), Ee && rT(z);
    }
  }, [r, o, s, d]), O = E.useCallback(function(z) {
    S(z, z.deltaY);
  }, [S]), A = E.useCallback(function(z) {
    m.current = z.changedTouches[0].clientY;
  }, []), D = E.useCallback(function(z) {
    var V = m.current - z.changedTouches[0].clientY;
    S(z, V);
  }, [S]), N = E.useCallback(function(z) {
    if (z) {
      var V = Rx ? {
        passive: !1
      } : !1;
      z.addEventListener("wheel", O, V), z.addEventListener("touchstart", A, V), z.addEventListener("touchmove", D, V);
    }
  }, [D, A, O]), L = E.useCallback(function(z) {
    z && (z.removeEventListener("wheel", O, !1), z.removeEventListener("touchstart", A, !1), z.removeEventListener("touchmove", D, !1));
  }, [D, A, O]);
  return E.useEffect(function() {
    if (i) {
      var z = v.current;
      return N(z), function() {
        L(z);
      };
    }
  }, [i, N, L]), function(z) {
    v.current = z;
  };
}
var By = ["boxSizing", "height", "overflow", "paddingRight", "position"], $y = {
  boxSizing: "border-box",
  // account for possible declaration `width: 100%;` on body
  overflow: "hidden",
  position: "relative",
  height: "100%"
};
function ky(a) {
  a.cancelable && a.preventDefault();
}
function qy(a) {
  a.stopPropagation();
}
function Yy() {
  var a = this.scrollTop, i = this.scrollHeight, r = a + this.offsetHeight;
  a === 0 ? this.scrollTop = 1 : r === i && (this.scrollTop = a - 1);
}
function Gy() {
  return "ontouchstart" in window || navigator.maxTouchPoints;
}
var Xy = !!(typeof window < "u" && window.document && window.document.createElement), Fs = 0, fo = {
  capture: !1,
  passive: !1
};
function sT(a) {
  var i = a.isEnabled, r = a.accountForScrollbars, o = r === void 0 ? !0 : r, s = E.useRef({}), d = E.useRef(null), h = E.useCallback(function(m) {
    if (Xy) {
      var v = document.body, S = v && v.style;
      if (o && By.forEach(function(N) {
        var L = S && S[N];
        s.current[N] = L;
      }), o && Fs < 1) {
        var O = parseInt(s.current.paddingRight, 10) || 0, A = document.body ? document.body.clientWidth : 0, D = window.innerWidth - A + O || 0;
        Object.keys($y).forEach(function(N) {
          var L = $y[N];
          S && (S[N] = L);
        }), S && (S.paddingRight = "".concat(D, "px"));
      }
      v && Gy() && (v.addEventListener("touchmove", ky, fo), m && (m.addEventListener("touchstart", Yy, fo), m.addEventListener("touchmove", qy, fo))), Fs += 1;
    }
  }, [o]), y = E.useCallback(function(m) {
    if (Xy) {
      var v = document.body, S = v && v.style;
      Fs = Math.max(Fs - 1, 0), o && Fs < 1 && By.forEach(function(O) {
        var A = s.current[O];
        S && (S[O] = A);
      }), v && Gy() && (v.removeEventListener("touchmove", ky, fo), m && (m.removeEventListener("touchstart", Yy, fo), m.removeEventListener("touchmove", qy, fo)));
    }
  }, [o]);
  return E.useEffect(function() {
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
var uT = function(i) {
  var r = i.target;
  return r.ownerDocument.activeElement && r.ownerDocument.activeElement.blur();
}, cT = {
  name: "1kfdb0e",
  styles: "position:fixed;left:0;bottom:0;right:0;top:0"
};
function fT(a) {
  var i = a.children, r = a.lockEnabled, o = a.captureEnabled, s = o === void 0 ? !0 : o, d = a.onBottomArrive, h = a.onBottomLeave, y = a.onTopArrive, m = a.onTopLeave, v = oT({
    isEnabled: s,
    onBottomArrive: d,
    onBottomLeave: h,
    onTopArrive: y,
    onTopLeave: m
  }), S = sT({
    isEnabled: r
  }), O = function(D) {
    v(D), S(D);
  };
  return _e(E.Fragment, null, r && _e("div", {
    onClick: uT,
    css: cT
  }), i(O));
}
var dT = {
  name: "1a0ro4n-requiredInput",
  styles: "label:requiredInput;opacity:0;pointer-events:none;position:absolute;bottom:0;left:0;right:0;width:100%"
}, hT = function(i) {
  var r = i.name, o = i.onFocus;
  return _e("input", {
    required: !0,
    name: r,
    tabIndex: -1,
    "aria-hidden": "true",
    onFocus: o,
    css: dT,
    value: "",
    onChange: function() {
    }
  });
}, pT = hT;
function nm(a) {
  var i;
  return typeof window < "u" && window.navigator != null ? a.test(((i = window.navigator.userAgentData) === null || i === void 0 ? void 0 : i.platform) || window.navigator.platform) : !1;
}
function mT() {
  return nm(/^iPhone/i);
}
function K0() {
  return nm(/^Mac/i);
}
function gT() {
  return nm(/^iPad/i) || // iPadOS 13 lies and says it's a Mac, but we can distinguish by detecting touch support.
  K0() && navigator.maxTouchPoints > 1;
}
function vT() {
  return mT() || gT();
}
function yT() {
  return K0() || vT();
}
var bT = function(i) {
  return i.label;
}, _T = function(i) {
  return i.label;
}, ST = function(i) {
  return i.value;
}, ET = function(i) {
  return !!i.isDisabled;
}, CT = {
  clearIndicator: oO,
  container: Kx,
  control: pO,
  dropdownIndicator: lO,
  group: yO,
  groupHeading: _O,
  indicatorsContainer: eO,
  indicatorSeparator: uO,
  input: xO,
  loadingIndicator: dO,
  loadingMessage: Xx,
  menu: Ux,
  menuList: qx,
  menuPortal: Qx,
  multiValue: MO,
  multiValueLabel: RO,
  multiValueRemove: DO,
  noOptionsMessage: Gx,
  option: VO,
  placeholder: $O,
  singleValue: YO,
  valueContainer: Wx
}, xT = {
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
}, OT = 4, J0 = 4, TT = 38, AT = J0 * 2, wT = {
  baseUnit: J0,
  controlHeight: TT,
  menuGutter: AT
}, Ph = {
  borderRadius: OT,
  colors: xT,
  spacing: wT
}, MT = {
  "aria-live": "polite",
  backspaceRemovesValue: !0,
  blurInputOnSelect: zy(),
  captureMenuScroll: !zy(),
  classNames: {},
  closeMenuOnSelect: !0,
  closeMenuOnScroll: !1,
  components: {},
  controlShouldRenderValue: !0,
  escapeClearsValue: !1,
  filterOption: aT(),
  formatGroupLabel: bT,
  getOptionLabel: _T,
  getOptionValue: ST,
  isDisabled: !1,
  isLoading: !1,
  isMulti: !1,
  isRtl: !1,
  isSearchable: !0,
  isOptionDisabled: ET,
  loadingMessage: function() {
    return "Loading...";
  },
  maxMenuHeight: 300,
  minMenuHeight: 140,
  menuIsOpen: !1,
  menuPlacement: "bottom",
  menuPosition: "absolute",
  menuShouldBlockScroll: !1,
  menuShouldScrollIntoView: !wx(),
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
function Iy(a, i, r, o) {
  var s = e1(a, i, r), d = t1(a, i, r), h = P0(a, i), y = Cf(a, i);
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
        return Iy(a, h, i, y);
      }).filter(function(h) {
        return Qy(a, h);
      });
      return s.length > 0 ? {
        type: "group",
        data: r,
        options: s,
        index: o
      } : void 0;
    }
    var d = Iy(a, r, i, o);
    return Qy(a, d) ? d : void 0;
  }).filter(Dx);
}
function W0(a) {
  return a.reduce(function(i, r) {
    return r.type === "group" ? i.push.apply(i, Ip(r.options.map(function(o) {
      return o.data;
    }))) : i.push(r.data), i;
  }, []);
}
function Fy(a, i) {
  return a.reduce(function(r, o) {
    return o.type === "group" ? r.push.apply(r, Ip(o.options.map(function(s) {
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
function RT(a, i) {
  return W0(af(a, i));
}
function Qy(a, i) {
  var r = a.inputValue, o = r === void 0 ? "" : r, s = i.data, d = i.isSelected, h = i.label, y = i.value;
  return (!a1(a) || !d) && n1(a, {
    label: h,
    value: y,
    data: s
  }, o);
}
function DT(a, i) {
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
function NT(a, i) {
  var r = a.focusedOption;
  return r && i.indexOf(r) > -1 ? r : i[0];
}
var ep = function(i, r) {
  var o, s = (o = i.find(function(d) {
    return d.data === r;
  })) === null || o === void 0 ? void 0 : o.id;
  return s || null;
}, P0 = function(i, r) {
  return i.getOptionLabel(r);
}, Cf = function(i, r) {
  return i.getOptionValue(r);
};
function e1(a, i, r) {
  return typeof a.isOptionDisabled == "function" ? a.isOptionDisabled(i, r) : !1;
}
function t1(a, i, r) {
  if (r.indexOf(i) > -1) return !0;
  if (typeof a.isOptionSelected == "function")
    return a.isOptionSelected(i, r);
  var o = Cf(a, i);
  return r.some(function(s) {
    return Cf(a, s) === o;
  });
}
function n1(a, i, r) {
  return a.filterOption ? a.filterOption(i, r) : !0;
}
var a1 = function(i) {
  var r = i.hideSelectedOptions, o = i.isMulti;
  return r === void 0 ? o : r;
}, jT = 1, i1 = /* @__PURE__ */ (function(a) {
  nC(r, a);
  var i = iC(r);
  function r(o) {
    var s;
    if (eC(this, r), s = i.call(this, o), s.state = {
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
      var S = s.props, O = S.onChange, A = S.name;
      v.name = A, s.ariaOnChange(m, v), O(m, v);
    }, s.setValue = function(m, v, S) {
      var O = s.props, A = O.closeMenuOnSelect, D = O.isMulti, N = O.inputValue;
      s.onInputChange("", {
        action: "set-value",
        prevInputValue: N
      }), A && (s.setState({
        inputIsHiddenAfterUpdate: !D
      }), s.onMenuClose()), s.setState({
        clearFocusValueOnUpdate: !0
      }), s.onChange(m, {
        action: v,
        option: S
      });
    }, s.selectOption = function(m) {
      var v = s.props, S = v.blurInputOnSelect, O = v.isMulti, A = v.name, D = s.state.selectValue, N = O && s.isOptionSelected(m, D), L = s.isOptionDisabled(m, D);
      if (N) {
        var z = s.getOptionValue(m);
        s.setValue(D.filter(function(V) {
          return s.getOptionValue(V) !== z;
        }), "deselect-option", m);
      } else if (!L)
        O ? s.setValue([].concat(Ip(D), [m]), "select-option", m) : s.setValue(m, "select-option");
      else {
        s.ariaOnChange(m, {
          action: "select-option",
          option: m,
          name: A
        });
        return;
      }
      S && s.blurInput();
    }, s.removeValue = function(m) {
      var v = s.props.isMulti, S = s.state.selectValue, O = s.getOptionValue(m), A = S.filter(function(N) {
        return s.getOptionValue(N) !== O;
      }), D = Zc(v, A, A[0] || null);
      s.onChange(D, {
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
      var m = s.props.isMulti, v = s.state.selectValue, S = v[v.length - 1], O = v.slice(0, v.length - 1), A = Zc(m, O, O[0] || null);
      S && s.onChange(A, {
        action: "pop-value",
        removedValue: S
      });
    }, s.getFocusedOptionId = function(m) {
      return ep(s.state.focusableOptionsWithIds, m);
    }, s.getFocusableOptionsWithIds = function() {
      return Fy(af(s.props, s.state.selectValue), s.getElementId("option"));
    }, s.getValue = function() {
      return s.state.selectValue;
    }, s.cx = function() {
      for (var m = arguments.length, v = new Array(m), S = 0; S < m; S++)
        v[S] = arguments[S];
      return Cx.apply(void 0, [s.props.classNamePrefix].concat(v));
    }, s.getOptionLabel = function(m) {
      return P0(s.props, m);
    }, s.getOptionValue = function(m) {
      return Cf(s.props, m);
    }, s.getStyles = function(m, v) {
      var S = s.props.unstyled, O = CT[m](v, S);
      O.boxSizing = "border-box";
      var A = s.props.styles[m];
      return A ? A(O, v) : O;
    }, s.getClassNames = function(m, v) {
      var S, O;
      return (S = (O = s.props.classNames)[m]) === null || S === void 0 ? void 0 : S.call(O, v);
    }, s.getElementId = function(m) {
      return "".concat(s.state.instancePrefix, "-").concat(m);
    }, s.getComponents = function() {
      return I0(s.props);
    }, s.buildCategorizedOptions = function() {
      return af(s.props, s.state.selectValue);
    }, s.getCategorizedOptions = function() {
      return s.props.menuIsOpen ? s.buildCategorizedOptions() : [];
    }, s.buildFocusableOptions = function() {
      return W0(s.buildCategorizedOptions());
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
        var v = s.props, S = v.isMulti, O = v.menuIsOpen;
        s.focusInput(), O ? (s.setState({
          inputIsHiddenAfterUpdate: !S
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
      var v = m.touches, S = v && v.item(0);
      S && (s.initialTouchX = S.clientX, s.initialTouchY = S.clientY, s.userIsDragging = !1);
    }, s.onTouchMove = function(m) {
      var v = m.touches, S = v && v.item(0);
      if (S) {
        var O = Math.abs(S.clientX - s.initialTouchX), A = Math.abs(S.clientY - s.initialTouchY), D = 5;
        s.userIsDragging = O > D || A > D;
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
      var v = s.props.inputValue, S = m.currentTarget.value;
      s.setState({
        inputIsHiddenAfterUpdate: !1
      }), s.onInputChange(S, {
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
        var v = s.getFocusableOptions(), S = v.indexOf(m);
        s.setState({
          focusedOption: m,
          focusedOptionId: S > -1 ? s.getFocusedOptionId(m) : null
        });
      }
    }, s.shouldHideSelectedOptions = function() {
      return a1(s.props);
    }, s.onValueInputFocus = function(m) {
      m.preventDefault(), m.stopPropagation(), s.focus();
    }, s.onKeyDown = function(m) {
      var v = s.props, S = v.isMulti, O = v.backspaceRemovesValue, A = v.escapeClearsValue, D = v.inputValue, N = v.isClearable, L = v.isDisabled, z = v.menuIsOpen, V = v.onKeyDown, Z = v.tabSelectsValue, X = v.openMenuOnFocus, P = s.state, B = P.focusedOption, I = P.focusedValue, U = P.selectValue;
      if (!L && !(typeof V == "function" && (V(m), m.defaultPrevented))) {
        switch (s.blockOptionHover = !0, m.key) {
          case "ArrowLeft":
            if (!S || D) return;
            s.focusValue("previous");
            break;
          case "ArrowRight":
            if (!S || D) return;
            s.focusValue("next");
            break;
          case "Delete":
          case "Backspace":
            if (D) return;
            if (I)
              s.removeValue(I);
            else {
              if (!O) return;
              S ? s.popValue() : N && s.clearValue();
            }
            break;
          case "Tab":
            if (s.isComposing || m.shiftKey || !z || !Z || !B || // don't capture the event if the menu opens on focus and the focused
            // option is already selected; it breaks the flow of navigation
            X && s.isOptionSelected(B, U))
              return;
            s.selectOption(B);
            break;
          case "Enter":
            if (m.keyCode === 229)
              break;
            if (z) {
              if (!B || s.isComposing) return;
              s.selectOption(B);
              break;
            }
            return;
          case "Escape":
            z ? (s.setState({
              inputIsHiddenAfterUpdate: !1
            }), s.onInputChange("", {
              action: "menu-close",
              prevInputValue: D
            }), s.onMenuClose()) : N && A && s.clearValue();
            break;
          case " ":
            if (D)
              return;
            if (!z) {
              s.openMenu("first");
              break;
            }
            if (!B) return;
            s.selectOption(B);
            break;
          case "ArrowUp":
            z ? s.focusOption("up") : s.openMenu("last");
            break;
          case "ArrowDown":
            z ? s.focusOption("down") : s.openMenu("first");
            break;
          case "PageUp":
            if (!z) return;
            s.focusOption("pageup");
            break;
          case "PageDown":
            if (!z) return;
            s.focusOption("pagedown");
            break;
          case "Home":
            if (!z) return;
            s.focusOption("first");
            break;
          case "End":
            if (!z) return;
            s.focusOption("last");
            break;
          default:
            return;
        }
        m.preventDefault();
      }
    }, s.state.instancePrefix = "react-select-" + (s.props.instanceId || ++jT), s.state.selectValue = Ny(o.value), o.menuIsOpen && s.state.selectValue.length) {
      var d = s.getFocusableOptionsWithIds(), h = s.buildFocusableOptions(), y = h.indexOf(s.state.selectValue[0]);
      s.state.focusableOptionsWithIds = d, s.state.focusedOption = h[y], s.state.focusedOptionId = ep(d, h[y]);
    }
    return s;
  }
  return tC(r, [{
    key: "componentDidMount",
    value: function() {
      this.startListeningComposition(), this.startListeningToTouch(), this.props.closeMenuOnScroll && document && document.addEventListener && document.addEventListener("scroll", this.onScroll, !0), this.props.autoFocus && this.focusInput(), this.props.menuIsOpen && this.state.focusedOption && this.menuListRef && this.focusedOptionRef && jy(this.menuListRef, this.focusedOptionRef), yT() && this.setState({
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
      }), this.menuListRef && this.focusedOptionRef && this.scrollToFocusedOptionOnUpdate && (jy(this.menuListRef, this.focusedOptionRef), this.scrollToFocusedOptionOnUpdate = !1);
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
      var d = this, h = this.state, y = h.selectValue, m = h.isFocused, v = this.buildFocusableOptions(), S = s === "first" ? 0 : v.length - 1;
      if (!this.props.isMulti) {
        var O = v.indexOf(y[0]);
        O > -1 && (S = O);
      }
      this.scrollToFocusedOptionOnUpdate = !(m && this.menuListRef), this.setState({
        inputIsHiddenAfterUpdate: !1,
        focusedValue: null,
        focusedOption: v[S],
        focusedOptionId: this.getFocusedOptionId(v[S])
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
        var v = h.length - 1, S = -1;
        if (h.length) {
          switch (s) {
            case "previous":
              m === 0 ? S = 0 : m === -1 ? S = v : S = m - 1;
              break;
            case "next":
              m > -1 && m < v && (S = m + 1);
              break;
          }
          this.setState({
            inputIsHidden: S !== -1,
            focusedValue: h[S]
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
      var s = this.clearValue, d = this.cx, h = this.getStyles, y = this.getClassNames, m = this.getValue, v = this.selectOption, S = this.setValue, O = this.props, A = O.isMulti, D = O.isRtl, N = O.options, L = this.hasValue();
      return {
        clearValue: s,
        cx: d,
        getStyles: h,
        getClassNames: y,
        getValue: m,
        hasValue: L,
        isMulti: A,
        isRtl: D,
        options: N,
        selectOption: v,
        selectProps: O,
        setValue: S,
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
      return e1(this.props, s, d);
    }
  }, {
    key: "isOptionSelected",
    value: function(s, d) {
      return t1(this.props, s, d);
    }
  }, {
    key: "filterOption",
    value: function(s, d) {
      return n1(this.props, s, d);
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
        var s = this.props, d = s.isDisabled, h = s.isSearchable, y = s.inputId, m = s.inputValue, v = s.tabIndex, S = s.form, O = s.menuIsOpen, A = s.required, D = this.getComponents(), N = D.Input, L = this.state, z = L.inputIsHidden, V = L.ariaSelection, Z = this.commonProps, X = y || this.getElementId("input"), P = ge(ge(ge({
          "aria-autocomplete": "list",
          "aria-expanded": O,
          "aria-haspopup": !0,
          "aria-errormessage": this.props["aria-errormessage"],
          "aria-invalid": this.props["aria-invalid"],
          "aria-label": this.props["aria-label"],
          "aria-labelledby": this.props["aria-labelledby"],
          "aria-required": A,
          role: "combobox",
          "aria-activedescendant": this.state.isAppleDevice ? void 0 : this.state.focusedOptionId || ""
        }, O && {
          "aria-controls": this.getElementId("listbox")
        }), !h && {
          "aria-readonly": !0
        }), this.hasValue() ? V?.action === "initial-input-focus" && {
          "aria-describedby": this.getElementId("live-region")
        } : {
          "aria-describedby": this.getElementId("placeholder")
        });
        return h ? /* @__PURE__ */ E.createElement(N, ve({}, Z, {
          autoCapitalize: "none",
          autoComplete: "off",
          autoCorrect: "off",
          id: X,
          innerRef: this.getInputRef,
          isDisabled: d,
          isHidden: z,
          onBlur: this.onInputBlur,
          onChange: this.handleInputChange,
          onFocus: this.onInputFocus,
          spellCheck: "false",
          tabIndex: v,
          form: S,
          type: "text",
          value: m
        }, P)) : /* @__PURE__ */ E.createElement(lT, ve({
          id: X,
          innerRef: this.getInputRef,
          onBlur: this.onInputBlur,
          onChange: Sf,
          onFocus: this.onInputFocus,
          disabled: d,
          tabIndex: v,
          inputMode: "none",
          form: S,
          value: ""
        }, P));
      })
    )
  }, {
    key: "renderPlaceholderOrValue",
    value: function() {
      var s = this, d = this.getComponents(), h = d.MultiValue, y = d.MultiValueContainer, m = d.MultiValueLabel, v = d.MultiValueRemove, S = d.SingleValue, O = d.Placeholder, A = this.commonProps, D = this.props, N = D.controlShouldRenderValue, L = D.isDisabled, z = D.isMulti, V = D.inputValue, Z = D.placeholder, X = this.state, P = X.selectValue, B = X.focusedValue, I = X.isFocused;
      if (!this.hasValue() || !N)
        return V ? null : /* @__PURE__ */ E.createElement(O, ve({}, A, {
          key: "placeholder",
          isDisabled: L,
          isFocused: I,
          innerProps: {
            id: this.getElementId("placeholder")
          }
        }), Z);
      if (z)
        return P.map(function(oe, Ee) {
          var Fe = oe === B, Ie = "".concat(s.getOptionLabel(oe), "-").concat(s.getOptionValue(oe));
          return /* @__PURE__ */ E.createElement(h, ve({}, A, {
            components: {
              Container: y,
              Label: m,
              Remove: v
            },
            isFocused: Fe,
            isDisabled: L,
            key: Ie,
            index: Ee,
            removeProps: {
              onClick: function() {
                return s.removeValue(oe);
              },
              onTouchEnd: function() {
                return s.removeValue(oe);
              },
              onMouseDown: function(dt) {
                dt.preventDefault();
              }
            },
            data: oe
          }), s.formatOptionLabel(oe, "value"));
        });
      if (V)
        return null;
      var U = P[0];
      return /* @__PURE__ */ E.createElement(S, ve({}, A, {
        data: U,
        isDisabled: L
      }), this.formatOptionLabel(U, "value"));
    }
  }, {
    key: "renderClearIndicator",
    value: function() {
      var s = this.getComponents(), d = s.ClearIndicator, h = this.commonProps, y = this.props, m = y.isDisabled, v = y.isLoading, S = this.state.isFocused;
      if (!this.isClearable() || !d || m || !this.hasValue() || v)
        return null;
      var O = {
        onMouseDown: this.onClearIndicatorMouseDown,
        onTouchEnd: this.onClearIndicatorTouchEnd,
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ E.createElement(d, ve({}, h, {
        innerProps: O,
        isFocused: S
      }));
    }
  }, {
    key: "renderLoadingIndicator",
    value: function() {
      var s = this.getComponents(), d = s.LoadingIndicator, h = this.commonProps, y = this.props, m = y.isDisabled, v = y.isLoading, S = this.state.isFocused;
      if (!d || !v) return null;
      var O = {
        "aria-hidden": "true"
      };
      return /* @__PURE__ */ E.createElement(d, ve({}, h, {
        innerProps: O,
        isDisabled: m,
        isFocused: S
      }));
    }
  }, {
    key: "renderIndicatorSeparator",
    value: function() {
      var s = this.getComponents(), d = s.DropdownIndicator, h = s.IndicatorSeparator;
      if (!d || !h) return null;
      var y = this.commonProps, m = this.props.isDisabled, v = this.state.isFocused;
      return /* @__PURE__ */ E.createElement(h, ve({}, y, {
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
      return /* @__PURE__ */ E.createElement(d, ve({}, h, {
        innerProps: v,
        isDisabled: y,
        isFocused: m
      }));
    }
  }, {
    key: "renderMenu",
    value: function() {
      var s = this, d = this.getComponents(), h = d.Group, y = d.GroupHeading, m = d.Menu, v = d.MenuList, S = d.MenuPortal, O = d.LoadingMessage, A = d.NoOptionsMessage, D = d.Option, N = this.commonProps, L = this.state.focusedOption, z = this.props, V = z.captureMenuScroll, Z = z.inputValue, X = z.isLoading, P = z.loadingMessage, B = z.minMenuHeight, I = z.maxMenuHeight, U = z.menuIsOpen, oe = z.menuPlacement, Ee = z.menuPosition, Fe = z.menuPortalTarget, Ie = z.menuShouldBlockScroll, He = z.menuShouldScrollIntoView, dt = z.noOptionsMessage, it = z.onMenuScrollToTop, $e = z.onMenuScrollToBottom;
      if (!U) return null;
      var $ = function(te, ae) {
        var ue = te.type, fe = te.data, de = te.isDisabled, Ve = te.isSelected, ie = te.label, At = te.value, Ut = L === fe, Ct = de ? void 0 : function() {
          return s.onOptionHover(fe);
        }, Ke = de ? void 0 : function() {
          return s.selectOption(fe);
        }, et = "".concat(s.getElementId("option"), "-").concat(ae), we = {
          id: et,
          onClick: Ke,
          onMouseMove: Ct,
          onMouseOver: Ct,
          tabIndex: -1,
          role: "option",
          "aria-selected": s.state.isAppleDevice ? void 0 : Ve
          // is not supported on Apple devices
        };
        return /* @__PURE__ */ E.createElement(D, ve({}, N, {
          innerProps: we,
          data: fe,
          isDisabled: de,
          isSelected: Ve,
          key: et,
          label: ie,
          type: ue,
          value: At,
          isFocused: Ut,
          innerRef: Ut ? s.getFocusedOptionRef : void 0
        }), s.formatOptionLabel(te.data, "menu"));
      }, ne;
      if (this.hasOptions())
        ne = this.getCategorizedOptions().map(function(k) {
          if (k.type === "group") {
            var te = k.data, ae = k.options, ue = k.index, fe = "".concat(s.getElementId("group"), "-").concat(ue), de = "".concat(fe, "-heading");
            return /* @__PURE__ */ E.createElement(h, ve({}, N, {
              key: fe,
              data: te,
              options: ae,
              Heading: y,
              headingProps: {
                id: de,
                data: k.data
              },
              label: s.formatGroupLabel(k.data)
            }), k.options.map(function(Ve) {
              return $(Ve, "".concat(ue, "-").concat(Ve.index));
            }));
          } else if (k.type === "option")
            return $(k, "".concat(k.index));
        });
      else if (X) {
        var le = P({
          inputValue: Z
        });
        if (le === null) return null;
        ne = /* @__PURE__ */ E.createElement(O, N, le);
      } else {
        var ye = dt({
          inputValue: Z
        });
        if (ye === null) return null;
        ne = /* @__PURE__ */ E.createElement(A, N, ye);
      }
      var Ce = {
        minMenuHeight: B,
        maxMenuHeight: I,
        menuPlacement: oe,
        menuPosition: Ee,
        menuShouldScrollIntoView: He
      }, x = /* @__PURE__ */ E.createElement(Bx, ve({}, N, Ce), function(k) {
        var te = k.ref, ae = k.placerProps, ue = ae.placement, fe = ae.maxHeight;
        return /* @__PURE__ */ E.createElement(m, ve({}, N, Ce, {
          innerRef: te,
          innerProps: {
            onMouseDown: s.onMenuMouseDown,
            onMouseMove: s.onMenuMouseMove
          },
          isLoading: X,
          placement: ue
        }), /* @__PURE__ */ E.createElement(fT, {
          captureEnabled: V,
          onTopArrive: it,
          onBottomArrive: $e,
          lockEnabled: Ie
        }, function(de) {
          return /* @__PURE__ */ E.createElement(v, ve({}, N, {
            innerRef: function(ie) {
              s.getMenuListRef(ie), de(ie);
            },
            innerProps: {
              role: "listbox",
              "aria-multiselectable": N.isMulti,
              id: s.getElementId("listbox")
            },
            isLoading: X,
            maxHeight: fe,
            focusedOption: L
          }), ne);
        }));
      });
      return Fe || Ee === "fixed" ? /* @__PURE__ */ E.createElement(S, ve({}, N, {
        appendTo: Fe,
        controlElement: this.controlRef,
        menuPlacement: oe,
        menuPosition: Ee
      }), x) : x;
    }
  }, {
    key: "renderFormField",
    value: function() {
      var s = this, d = this.props, h = d.delimiter, y = d.isDisabled, m = d.isMulti, v = d.name, S = d.required, O = this.state.selectValue;
      if (S && !this.hasValue() && !y)
        return /* @__PURE__ */ E.createElement(pT, {
          name: v,
          onFocus: this.onValueInputFocus
        });
      if (!(!v || y))
        if (m)
          if (h) {
            var A = O.map(function(L) {
              return s.getOptionValue(L);
            }).join(h);
            return /* @__PURE__ */ E.createElement("input", {
              name: v,
              type: "hidden",
              value: A
            });
          } else {
            var D = O.length > 0 ? O.map(function(L, z) {
              return /* @__PURE__ */ E.createElement("input", {
                key: "i-".concat(z),
                name: v,
                type: "hidden",
                value: s.getOptionValue(L)
              });
            }) : /* @__PURE__ */ E.createElement("input", {
              name: v,
              type: "hidden",
              value: ""
            });
            return /* @__PURE__ */ E.createElement("div", null, D);
          }
        else {
          var N = O[0] ? this.getOptionValue(O[0]) : "";
          return /* @__PURE__ */ E.createElement("input", {
            name: v,
            type: "hidden",
            value: N
          });
        }
    }
  }, {
    key: "renderLiveRegion",
    value: function() {
      var s = this.commonProps, d = this.state, h = d.ariaSelection, y = d.focusedOption, m = d.focusedValue, v = d.isFocused, S = d.selectValue, O = this.getFocusableOptions();
      return /* @__PURE__ */ E.createElement(PO, ve({}, s, {
        id: this.getElementId("live-region"),
        ariaSelection: h,
        focusedOption: y,
        focusedValue: m,
        isFocused: v,
        selectValue: S,
        focusableOptions: O,
        isAppleDevice: this.state.isAppleDevice
      }));
    }
  }, {
    key: "render",
    value: function() {
      var s = this.getComponents(), d = s.Control, h = s.IndicatorsContainer, y = s.SelectContainer, m = s.ValueContainer, v = this.props, S = v.className, O = v.id, A = v.isDisabled, D = v.menuIsOpen, N = this.state.isFocused, L = this.commonProps = this.getCommonProps();
      return /* @__PURE__ */ E.createElement(y, ve({}, L, {
        className: S,
        innerProps: {
          id: O,
          onKeyDown: this.onKeyDown
        },
        isDisabled: A,
        isFocused: N
      }), this.renderLiveRegion(), /* @__PURE__ */ E.createElement(d, ve({}, L, {
        innerRef: this.getControlRef,
        innerProps: {
          onMouseDown: this.onControlMouseDown,
          onTouchEnd: this.onControlTouchEnd
        },
        isDisabled: A,
        isFocused: N,
        menuIsOpen: D
      }), /* @__PURE__ */ E.createElement(m, ve({}, L, {
        isDisabled: A
      }), this.renderPlaceholderOrValue(), this.renderInput()), /* @__PURE__ */ E.createElement(h, ve({}, L, {
        isDisabled: A
      }), this.renderClearIndicator(), this.renderLoadingIndicator(), this.renderIndicatorSeparator(), this.renderDropdownIndicator())), this.renderMenu(), this.renderFormField());
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function(s, d) {
      var h = d.prevProps, y = d.clearFocusValueOnUpdate, m = d.inputIsHiddenAfterUpdate, v = d.ariaSelection, S = d.isFocused, O = d.prevWasFocused, A = d.instancePrefix, D = s.options, N = s.value, L = s.menuIsOpen, z = s.inputValue, V = s.isMulti, Z = Ny(N), X = {};
      if (h && (N !== h.value || D !== h.options || L !== h.menuIsOpen || z !== h.inputValue)) {
        var P = L ? RT(s, Z) : [], B = L ? Fy(af(s, Z), "".concat(A, "-option")) : [], I = y ? DT(d, Z) : null, U = NT(d, P), oe = ep(B, U);
        X = {
          selectValue: Z,
          focusedOption: U,
          focusedOptionId: oe,
          focusableOptionsWithIds: B,
          focusedValue: I,
          clearFocusValueOnUpdate: !1
        };
      }
      var Ee = m != null && s !== h ? {
        inputIsHidden: m,
        inputIsHiddenAfterUpdate: void 0
      } : {}, Fe = v, Ie = S && O;
      return S && !Ie && (Fe = {
        value: Zc(V, Z, Z[0] || null),
        options: Z,
        action: "initial-input-focus"
      }, Ie = !O), v?.action === "initial-input-focus" && (Fe = null), ge(ge(ge({}, X), Ee), {}, {
        prevProps: s,
        ariaSelection: Fe,
        prevWasFocused: Ie
      });
    }
  }]), r;
})(E.Component);
i1.defaultProps = MT;
var zT = /* @__PURE__ */ E.forwardRef(function(a, i) {
  var r = PE(a);
  return /* @__PURE__ */ E.createElement(i1, ve({
    ref: i
  }, r));
}), Zy = zT;
function am(a, i) {
  var r = function(d) {
    return i && E.isValidElement(d) ? i(d) : d;
  }, o = /* @__PURE__ */ Object.create(null);
  return a && E.Children.map(a, function(s) {
    return s;
  }).forEach(function(s) {
    o[s.key] = r(s);
  }), o;
}
function LT(a, i) {
  a = a || {}, i = i || {};
  function r(S) {
    return S in i ? i[S] : a[S];
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
function dr(a, i, r) {
  return r[i] != null ? r[i] : a.props[i];
}
function HT(a, i) {
  return am(a.children, function(r) {
    return E.cloneElement(r, {
      onExited: i.bind(null, r),
      in: !0,
      appear: dr(r, "appear", a),
      enter: dr(r, "enter", a),
      exit: dr(r, "exit", a)
    });
  });
}
function VT(a, i, r) {
  var o = am(a.children), s = LT(i, o);
  return Object.keys(s).forEach(function(d) {
    var h = s[d];
    if (E.isValidElement(h)) {
      var y = d in i, m = d in o, v = i[d], S = E.isValidElement(v) && !v.props.in;
      m && (!y || S) ? s[d] = E.cloneElement(h, {
        onExited: r.bind(null, h),
        in: !0,
        exit: dr(h, "exit", a),
        enter: dr(h, "enter", a)
      }) : !m && y && !S ? s[d] = E.cloneElement(h, {
        in: !1
      }) : m && y && E.isValidElement(v) && (s[d] = E.cloneElement(h, {
        onExited: r.bind(null, h),
        in: v.props.in,
        exit: dr(h, "exit", a),
        enter: dr(h, "enter", a)
      }));
    }
  }), s;
}
var UT = Object.values || function(a) {
  return Object.keys(a).map(function(i) {
    return a[i];
  });
}, BT = {
  component: "div",
  childFactory: function(i) {
    return i;
  }
}, kf = /* @__PURE__ */ (function(a) {
  pb(i, a);
  function i(o, s) {
    var d;
    d = a.call(this, o, s) || this;
    var h = d.handleExited.bind(v0(d));
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
      children: m ? HT(s, y) : VT(s, h, y),
      firstRender: !1
    };
  }, r.handleExited = function(s, d) {
    var h = am(this.props.children);
    s.key in h || (s.props.onExited && s.props.onExited(d), this.mounted && this.setState(function(y) {
      var m = ve({}, y.children);
      return delete m[s.key], {
        children: m
      };
    }));
  }, r.render = function() {
    var s = this.props, d = s.component, h = s.childFactory, y = Mf(s, ["component", "childFactory"]), m = this.state.contextValue, v = UT(this.state.children).map(h);
    return delete y.appear, delete y.enter, delete y.exit, d === null ? /* @__PURE__ */ Xt.createElement(ff.Provider, {
      value: m
    }, v) : /* @__PURE__ */ Xt.createElement(ff.Provider, {
      value: m
    }, /* @__PURE__ */ Xt.createElement(d, y, v));
  }, i;
})(Xt.Component);
kf.propTypes = {};
kf.defaultProps = BT;
var $T = ["in", "onExited", "appear", "enter", "exit"], kT = function(i) {
  return function(r) {
    r.in, r.onExited, r.appear, r.enter, r.exit;
    var o = qn(r, $T);
    return /* @__PURE__ */ E.createElement(i, o);
  };
}, qT = kT, YT = ["component", "duration", "in", "onExited"], l1 = function(i) {
  var r = i.component, o = i.duration, s = o === void 0 ? 1 : o, d = i.in;
  i.onExited;
  var h = qn(i, YT), y = E.useRef(null), m = {
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
  return /* @__PURE__ */ E.createElement(qa, {
    mountOnEnter: !0,
    unmountOnExit: !0,
    in: d,
    timeout: s,
    nodeRef: y
  }, function(v) {
    var S = {
      style: ge({}, m[v]),
      ref: y
    };
    return /* @__PURE__ */ E.createElement(r, ve({
      innerProps: S
    }, h));
  });
}, Tp = 260, GT = function(i) {
  var r = i.children, o = i.in, s = i.onExited, d = E.useRef(null), h = E.useState("auto"), y = xa(h, 2), m = y[0], v = y[1];
  E.useEffect(function() {
    var O = d.current;
    if (O) {
      var A = window.requestAnimationFrame(function() {
        return v(O.getBoundingClientRect().width);
      });
      return function() {
        return window.cancelAnimationFrame(A);
      };
    }
  }, []);
  var S = function(A) {
    switch (A) {
      default:
        return {
          width: m
        };
      case "exiting":
        return {
          width: 0,
          transition: "width ".concat(Tp, "ms ease-out")
        };
      case "exited":
        return {
          width: 0
        };
    }
  };
  return /* @__PURE__ */ E.createElement(qa, {
    enter: !1,
    mountOnEnter: !0,
    unmountOnExit: !0,
    in: o,
    onExited: function() {
      var A = d.current;
      A && s?.(A);
    },
    timeout: Tp,
    nodeRef: d
  }, function(O) {
    return /* @__PURE__ */ E.createElement("div", {
      ref: d,
      style: ge({
        overflow: "hidden",
        whiteSpace: "nowrap"
      }, S(O))
    }, r);
  });
}, XT = ["in", "onExited"], IT = function(i) {
  return function(r) {
    var o = r.in, s = r.onExited, d = qn(r, XT);
    return /* @__PURE__ */ E.createElement(GT, {
      in: o,
      onExited: s
    }, /* @__PURE__ */ E.createElement(i, ve({
      cropWithEllipsis: o
    }, d)));
  };
}, FT = IT, QT = function(i) {
  return function(r) {
    return /* @__PURE__ */ E.createElement(l1, ve({
      component: i,
      duration: r.isMulti ? Tp : 1
    }, r));
  };
}, ZT = QT, KT = function(i) {
  return function(r) {
    return /* @__PURE__ */ E.createElement(l1, ve({
      component: i
    }, r));
  };
}, JT = KT, WT = ["component"], PT = ["children"], eA = function(i) {
  return function(r) {
    return r.isMulti ? /* @__PURE__ */ E.createElement(tA, ve({
      component: i
    }, r)) : /* @__PURE__ */ E.createElement(kf, ve({
      component: i
    }, r));
  };
}, tA = function(i) {
  var r = i.component, o = qn(i, WT), s = nA(o);
  return /* @__PURE__ */ E.createElement(kf, ve({
    component: r
  }, s));
}, nA = function(i) {
  var r = i.children, o = qn(i, PT), s = o.isMulti, d = o.hasValue, h = o.innerProps, y = o.selectProps, m = y.components, v = y.controlShouldRenderValue, S = E.useState(s && v && d), O = xa(S, 2), A = O[0], D = O[1], N = E.useState(!1), L = xa(N, 2), z = L[0], V = L[1];
  E.useEffect(function() {
    d && !A && D(!0);
  }, [d, A]), E.useEffect(function() {
    z && !d && A && D(!1), V(!1);
  }, [z, d, A]);
  var Z = function() {
    return V(!0);
  }, X = function(U) {
    if (s && /* @__PURE__ */ E.isValidElement(U)) {
      if (U.type === m.MultiValue)
        return /* @__PURE__ */ E.cloneElement(U, {
          onExited: Z
        });
      if (U.type === m.Placeholder && A)
        return null;
    }
    return U;
  }, P = ge(ge({}, h), {}, {
    style: ge(ge({}, h?.style), {}, {
      display: s && d || A ? "flex" : "grid"
    })
  }), B = ge(ge({}, o), {}, {
    innerProps: P,
    children: E.Children.toArray(r).map(X)
  });
  return B;
}, aA = eA, iA = ["Input", "MultiValue", "Placeholder", "SingleValue", "ValueContainer"], r1 = function() {
  var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}, r = I0({
    components: i
  }), o = r.Input, s = r.MultiValue, d = r.Placeholder, h = r.SingleValue, y = r.ValueContainer, m = qn(r, iA);
  return ge({
    Input: qT(o),
    MultiValue: FT(s),
    Placeholder: ZT(d),
    SingleValue: JT(h),
    ValueContainer: aA(y)
  }, m);
}, cu = r1();
cu.Input;
cu.MultiValue;
cu.Placeholder;
cu.SingleValue;
cu.ValueContainer;
var lA = F0(r1), ta = function() {
  return ta = Object.assign || function(i) {
    for (var r, o = 1, s = arguments.length; o < s; o++) {
      r = arguments[o];
      for (var d in r) Object.prototype.hasOwnProperty.call(r, d) && (i[d] = r[d]);
    }
    return i;
  }, ta.apply(this, arguments);
};
function au(a, i, r) {
  if (r || arguments.length === 2) for (var o = 0, s = i.length, d; o < s; o++)
    (d || !(o in i)) && (d || (d = Array.prototype.slice.call(i, 0, o)), d[o] = i[o]);
  return a.concat(d || Array.prototype.slice.call(i));
}
var Rt = "-ms-", Ws = "-moz-", yt = "-webkit-", o1 = "comm", qf = "rule", im = "decl", rA = "@import", s1 = "@keyframes", oA = "@layer", u1 = Math.abs, lm = String.fromCharCode, Ap = Object.assign;
function sA(a, i) {
  return mn(a, 0) ^ 45 ? (((i << 2 ^ mn(a, 0)) << 2 ^ mn(a, 1)) << 2 ^ mn(a, 2)) << 2 ^ mn(a, 3) : 0;
}
function c1(a) {
  return a.trim();
}
function zi(a, i) {
  return (a = i.exec(a)) ? a[0] : a;
}
function Ye(a, i, r) {
  return a.replace(i, r);
}
function lf(a, i, r) {
  return a.indexOf(i, r);
}
function mn(a, i) {
  return a.charCodeAt(i) | 0;
}
function yo(a, i, r) {
  return a.slice(i, r);
}
function ci(a) {
  return a.length;
}
function f1(a) {
  return a.length;
}
function Js(a, i) {
  return i.push(a), a;
}
function uA(a, i) {
  return a.map(i).join("");
}
function Ky(a, i) {
  return a.filter(function(r) {
    return !zi(r, i);
  });
}
var Yf = 1, bo = 1, d1 = 0, Oa = 0, tn = 0, Oo = "";
function Gf(a, i, r, o, s, d, h, y) {
  return { value: a, root: i, parent: r, type: o, props: s, children: d, line: Yf, column: bo, length: h, return: "", siblings: y };
}
function Rl(a, i) {
  return Ap(Gf("", null, null, "", null, null, 0, a.siblings), a, { length: -a.length }, i);
}
function ho(a) {
  for (; a.root; )
    a = Rl(a.root, { children: [a] });
  Js(a, a.siblings);
}
function cA() {
  return tn;
}
function fA() {
  return tn = Oa > 0 ? mn(Oo, --Oa) : 0, bo--, tn === 10 && (bo = 1, Yf--), tn;
}
function ka() {
  return tn = Oa < d1 ? mn(Oo, Oa++) : 0, bo++, tn === 10 && (bo = 1, Yf++), tn;
}
function pr() {
  return mn(Oo, Oa);
}
function rf() {
  return Oa;
}
function Xf(a, i) {
  return yo(Oo, a, i);
}
function wp(a) {
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
function dA(a) {
  return Yf = bo = 1, d1 = ci(Oo = a), Oa = 0, [];
}
function hA(a) {
  return Oo = "", a;
}
function tp(a) {
  return c1(Xf(Oa - 1, Mp(a === 91 ? a + 2 : a === 40 ? a + 1 : a)));
}
function pA(a) {
  for (; (tn = pr()) && tn < 33; )
    ka();
  return wp(a) > 2 || wp(tn) > 3 ? "" : " ";
}
function mA(a, i) {
  for (; --i && ka() && !(tn < 48 || tn > 102 || tn > 57 && tn < 65 || tn > 70 && tn < 97); )
    ;
  return Xf(a, rf() + (i < 6 && pr() == 32 && ka() == 32));
}
function Mp(a) {
  for (; ka(); )
    switch (tn) {
      // ] ) " '
      case a:
        return Oa;
      // " '
      case 34:
      case 39:
        a !== 34 && a !== 39 && Mp(tn);
        break;
      // (
      case 40:
        a === 41 && Mp(a);
        break;
      // \
      case 92:
        ka();
        break;
    }
  return Oa;
}
function gA(a, i) {
  for (; ka() && a + tn !== 57; )
    if (a + tn === 84 && pr() === 47)
      break;
  return "/*" + Xf(i, Oa - 1) + "*" + lm(a === 47 ? a : ka());
}
function vA(a) {
  for (; !wp(pr()); )
    ka();
  return Xf(a, Oa);
}
function yA(a) {
  return hA(of("", null, null, null, [""], a = dA(a), 0, [0], a));
}
function of(a, i, r, o, s, d, h, y, m) {
  for (var v = 0, S = 0, O = h, A = 0, D = 0, N = 0, L = 1, z = 1, V = 1, Z = 0, X = "", P = s, B = d, I = o, U = X; z; )
    switch (N = Z, Z = ka()) {
      // (
      case 40:
        if (N != 108 && mn(U, O - 1) == 58) {
          lf(U += Ye(tp(Z), "&", "&\f"), "&\f", u1(v ? y[v - 1] : 0)) != -1 && (V = -1);
          break;
        }
      // " ' [
      case 34:
      case 39:
      case 91:
        U += tp(Z);
        break;
      // \t \n \r \s
      case 9:
      case 10:
      case 13:
      case 32:
        U += pA(N);
        break;
      // \
      case 92:
        U += mA(rf() - 1, 7);
        continue;
      // /
      case 47:
        switch (pr()) {
          case 42:
          case 47:
            Js(bA(gA(ka(), rf()), i, r, m), m);
            break;
          default:
            U += "/";
        }
        break;
      // {
      case 123 * L:
        y[v++] = ci(U) * V;
      // } ; \0
      case 125 * L:
      case 59:
      case 0:
        switch (Z) {
          // \0 }
          case 0:
          case 125:
            z = 0;
          // ;
          case 59 + S:
            V == -1 && (U = Ye(U, /\f/g, "")), D > 0 && ci(U) - O && Js(D > 32 ? Wy(U + ";", o, r, O - 1, m) : Wy(Ye(U, " ", "") + ";", o, r, O - 2, m), m);
            break;
          // @ ;
          case 59:
            U += ";";
          // { rule/at-rule
          default:
            if (Js(I = Jy(U, i, r, v, S, s, y, X, P = [], B = [], O, d), d), Z === 123)
              if (S === 0)
                of(U, i, I, I, P, d, O, y, B);
              else
                switch (A === 99 && mn(U, 3) === 110 ? 100 : A) {
                  // d l m s
                  case 100:
                  case 108:
                  case 109:
                  case 115:
                    of(a, I, I, o && Js(Jy(a, I, I, 0, 0, s, y, X, s, P = [], O, B), B), s, B, O, y, o ? P : B);
                    break;
                  default:
                    of(U, I, I, I, [""], B, 0, y, B);
                }
        }
        v = S = D = 0, L = V = 1, X = U = "", O = h;
        break;
      // :
      case 58:
        O = 1 + ci(U), D = N;
      default:
        if (L < 1) {
          if (Z == 123)
            --L;
          else if (Z == 125 && L++ == 0 && fA() == 125)
            continue;
        }
        switch (U += lm(Z), Z * L) {
          // &
          case 38:
            V = S > 0 ? 1 : (U += "\f", -1);
            break;
          // ,
          case 44:
            y[v++] = (ci(U) - 1) * V, V = 1;
            break;
          // @
          case 64:
            pr() === 45 && (U += tp(ka())), A = pr(), S = O = ci(X = U += vA(rf())), Z++;
            break;
          // -
          case 45:
            N === 45 && ci(U) == 2 && (L = 0);
        }
    }
  return d;
}
function Jy(a, i, r, o, s, d, h, y, m, v, S, O) {
  for (var A = s - 1, D = s === 0 ? d : [""], N = f1(D), L = 0, z = 0, V = 0; L < o; ++L)
    for (var Z = 0, X = yo(a, A + 1, A = u1(z = h[L])), P = a; Z < N; ++Z)
      (P = c1(z > 0 ? D[Z] + " " + X : Ye(X, /&\f/g, D[Z]))) && (m[V++] = P);
  return Gf(a, i, r, s === 0 ? qf : y, m, v, S, O);
}
function bA(a, i, r, o) {
  return Gf(a, i, r, o1, lm(cA()), yo(a, 2, -2), 0, o);
}
function Wy(a, i, r, o, s) {
  return Gf(a, i, r, im, yo(a, 0, o), yo(a, o + 1, -1), o, s);
}
function h1(a, i, r) {
  switch (sA(a, i)) {
    // color-adjust
    case 5103:
      return yt + "print-" + a + a;
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
      return yt + a + a;
    // tab-size
    case 4789:
      return Ws + a + a;
    // appearance, user-select, transform, hyphens, text-size-adjust
    case 5349:
    case 4246:
    case 4810:
    case 6968:
    case 2756:
      return yt + a + Ws + a + Rt + a + a;
    // writing-mode
    case 5936:
      switch (mn(a, i + 11)) {
        // vertical-l(r)
        case 114:
          return yt + a + Rt + Ye(a, /[svh]\w+-[tblr]{2}/, "tb") + a;
        // vertical-r(l)
        case 108:
          return yt + a + Rt + Ye(a, /[svh]\w+-[tblr]{2}/, "tb-rl") + a;
        // horizontal(-)tb
        case 45:
          return yt + a + Rt + Ye(a, /[svh]\w+-[tblr]{2}/, "lr") + a;
      }
    // flex, flex-direction, scroll-snap-type, writing-mode
    case 6828:
    case 4268:
    case 2903:
      return yt + a + Rt + a + a;
    // order
    case 6165:
      return yt + a + Rt + "flex-" + a + a;
    // align-items
    case 5187:
      return yt + a + Ye(a, /(\w+).+(:[^]+)/, yt + "box-$1$2" + Rt + "flex-$1$2") + a;
    // align-self
    case 5443:
      return yt + a + Rt + "flex-item-" + Ye(a, /flex-|-self/g, "") + (zi(a, /flex-|baseline/) ? "" : Rt + "grid-row-" + Ye(a, /flex-|-self/g, "")) + a;
    // align-content
    case 4675:
      return yt + a + Rt + "flex-line-pack" + Ye(a, /align-content|flex-|-self/g, "") + a;
    // flex-shrink
    case 5548:
      return yt + a + Rt + Ye(a, "shrink", "negative") + a;
    // flex-basis
    case 5292:
      return yt + a + Rt + Ye(a, "basis", "preferred-size") + a;
    // flex-grow
    case 6060:
      return yt + "box-" + Ye(a, "-grow", "") + yt + a + Rt + Ye(a, "grow", "positive") + a;
    // transition
    case 4554:
      return yt + Ye(a, /([^-])(transform)/g, "$1" + yt + "$2") + a;
    // cursor
    case 6187:
      return Ye(Ye(Ye(a, /(zoom-|grab)/, yt + "$1"), /(image-set)/, yt + "$1"), a, "") + a;
    // background, background-image
    case 5495:
    case 3959:
      return Ye(a, /(image-set\([^]*)/, yt + "$1$`$1");
    // justify-content
    case 4968:
      return Ye(Ye(a, /(.+:)(flex-)?(.*)/, yt + "box-pack:$3" + Rt + "flex-pack:$3"), /s.+-b[^;]+/, "justify") + yt + a + a;
    // justify-self
    case 4200:
      if (!zi(a, /flex-|baseline/)) return Rt + "grid-column-align" + yo(a, i) + a;
      break;
    // grid-template-(columns|rows)
    case 2592:
    case 3360:
      return Rt + Ye(a, "template-", "") + a;
    // grid-(row|column)-start
    case 4384:
    case 3616:
      return r && r.some(function(o, s) {
        return i = s, zi(o.props, /grid-\w+-end/);
      }) ? ~lf(a + (r = r[i].value), "span", 0) ? a : Rt + Ye(a, "-start", "") + a + Rt + "grid-row-span:" + (~lf(r, "span", 0) ? zi(r, /\d+/) : +zi(r, /\d+/) - +zi(a, /\d+/)) + ";" : Rt + Ye(a, "-start", "") + a;
    // grid-(row|column)-end
    case 4896:
    case 4128:
      return r && r.some(function(o) {
        return zi(o.props, /grid-\w+-start/);
      }) ? a : Rt + Ye(Ye(a, "-end", "-span"), "span ", "") + a;
    // (margin|padding)-inline-(start|end)
    case 4095:
    case 3583:
    case 4068:
    case 2532:
      return Ye(a, /(.+)-inline(.+)/, yt + "$1$2") + a;
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
      if (ci(a) - 1 - i > 6)
        switch (mn(a, i + 1)) {
          // (m)ax-content, (m)in-content
          case 109:
            if (mn(a, i + 4) !== 45)
              break;
          // (f)ill-available, (f)it-content
          case 102:
            return Ye(a, /(.+:)(.+)-([^]+)/, "$1" + yt + "$2-$3$1" + Ws + (mn(a, i + 3) == 108 ? "$3" : "$2-$3")) + a;
          // (s)tretch
          case 115:
            return ~lf(a, "stretch", 0) ? h1(Ye(a, "stretch", "fill-available"), i, r) + a : a;
        }
      break;
    // grid-(column|row)
    case 5152:
    case 5920:
      return Ye(a, /(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/, function(o, s, d, h, y, m, v) {
        return Rt + s + ":" + d + v + (h ? Rt + s + "-span:" + (y ? m : +m - +d) + v : "") + a;
      });
    // position: sticky
    case 4949:
      if (mn(a, i + 6) === 121)
        return Ye(a, ":", ":" + yt) + a;
      break;
    // display: (flex|inline-flex|grid|inline-grid)
    case 6444:
      switch (mn(a, mn(a, 14) === 45 ? 18 : 11)) {
        // (inline-)?fle(x)
        case 120:
          return Ye(a, /(.+:)([^;\s!]+)(;|(\s+)?!.+)?/, "$1" + yt + (mn(a, 14) === 45 ? "inline-" : "") + "box$3$1" + yt + "$2$3$1" + Rt + "$2box$3") + a;
        // (inline-)?gri(d)
        case 100:
          return Ye(a, ":", ":" + Rt) + a;
      }
      break;
    // scroll-margin, scroll-margin-(top|right|bottom|left)
    case 5719:
    case 2647:
    case 2135:
    case 3927:
    case 2391:
      return Ye(a, "scroll-", "scroll-snap-") + a;
  }
  return a;
}
function xf(a, i) {
  for (var r = "", o = 0; o < a.length; o++)
    r += i(a[o], o, a, i) || "";
  return r;
}
function _A(a, i, r, o) {
  switch (a.type) {
    case oA:
      if (a.children.length) break;
    case rA:
    case im:
      return a.return = a.return || a.value;
    case o1:
      return "";
    case s1:
      return a.return = a.value + "{" + xf(a.children, o) + "}";
    case qf:
      if (!ci(a.value = a.props.join(","))) return "";
  }
  return ci(r = xf(a.children, o)) ? a.return = a.value + "{" + r + "}" : "";
}
function SA(a) {
  var i = f1(a);
  return function(r, o, s, d) {
    for (var h = "", y = 0; y < i; y++)
      h += a[y](r, o, s, d) || "";
    return h;
  };
}
function EA(a) {
  return function(i) {
    i.root || (i = i.return) && a(i);
  };
}
function CA(a, i, r, o) {
  if (a.length > -1 && !a.return)
    switch (a.type) {
      case im:
        a.return = h1(a.value, a.length, r);
        return;
      case s1:
        return xf([Rl(a, { value: Ye(a.value, "@", "@" + yt) })], o);
      case qf:
        if (a.length)
          return uA(r = a.props, function(s) {
            switch (zi(s, o = /(::plac\w+|:read-\w+)/)) {
              // :read-(only|write)
              case ":read-only":
              case ":read-write":
                ho(Rl(a, { props: [Ye(s, /:(read-\w+)/, ":" + Ws + "$1")] })), ho(Rl(a, { props: [s] })), Ap(a, { props: Ky(r, o) });
                break;
              // :placeholder
              case "::placeholder":
                ho(Rl(a, { props: [Ye(s, /:(plac\w+)/, ":" + yt + "input-$1")] })), ho(Rl(a, { props: [Ye(s, /:(plac\w+)/, ":" + Ws + "$1")] })), ho(Rl(a, { props: [Ye(s, /:(plac\w+)/, Rt + "input-$1")] })), ho(Rl(a, { props: [s] })), Ap(a, { props: Ky(r, o) });
                break;
            }
            return "";
          });
    }
}
var xA = {
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
}, _o = typeof process < "u" && process.env !== void 0 && (process.env.REACT_APP_SC_ATTR || process.env.SC_ATTR) || "data-styled", p1 = "active", m1 = "data-styled-version", If = "6.1.19", rm = `/*!sc*/
`, Of = typeof window < "u" && typeof document < "u", OA = !!(typeof SC_DISABLE_SPEEDY == "boolean" ? SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== void 0 && process.env.REACT_APP_SC_DISABLE_SPEEDY !== "" ? process.env.REACT_APP_SC_DISABLE_SPEEDY !== "false" && process.env.REACT_APP_SC_DISABLE_SPEEDY : typeof process < "u" && process.env !== void 0 && process.env.SC_DISABLE_SPEEDY !== void 0 && process.env.SC_DISABLE_SPEEDY !== "" && process.env.SC_DISABLE_SPEEDY !== "false" && process.env.SC_DISABLE_SPEEDY), Ff = Object.freeze([]), So = Object.freeze({});
function TA(a, i, r) {
  return r === void 0 && (r = So), a.theme !== r.theme && a.theme || i || r.theme;
}
var g1 = /* @__PURE__ */ new Set(["a", "abbr", "address", "area", "article", "aside", "audio", "b", "base", "bdi", "bdo", "big", "blockquote", "body", "br", "button", "canvas", "caption", "cite", "code", "col", "colgroup", "data", "datalist", "dd", "del", "details", "dfn", "dialog", "div", "dl", "dt", "em", "embed", "fieldset", "figcaption", "figure", "footer", "form", "h1", "h2", "h3", "h4", "h5", "h6", "header", "hgroup", "hr", "html", "i", "iframe", "img", "input", "ins", "kbd", "keygen", "label", "legend", "li", "link", "main", "map", "mark", "menu", "menuitem", "meta", "meter", "nav", "noscript", "object", "ol", "optgroup", "option", "output", "p", "param", "picture", "pre", "progress", "q", "rp", "rt", "ruby", "s", "samp", "script", "section", "select", "small", "source", "span", "strong", "style", "sub", "summary", "sup", "table", "tbody", "td", "textarea", "tfoot", "th", "thead", "time", "tr", "track", "u", "ul", "use", "var", "video", "wbr", "circle", "clipPath", "defs", "ellipse", "foreignObject", "g", "image", "line", "linearGradient", "marker", "mask", "path", "pattern", "polygon", "polyline", "radialGradient", "rect", "stop", "svg", "text", "tspan"]), AA = /[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g, wA = /(^-|-$)/g;
function Py(a) {
  return a.replace(AA, "-").replace(wA, "");
}
var MA = /(a)(d)/gi, Kc = 52, eb = function(a) {
  return String.fromCharCode(a + (a > 25 ? 39 : 97));
};
function Rp(a) {
  var i, r = "";
  for (i = Math.abs(a); i > Kc; i = i / Kc | 0) r = eb(i % Kc) + r;
  return (eb(i % Kc) + r).replace(MA, "$1-$2");
}
var np, v1 = 5381, mo = function(a, i) {
  for (var r = i.length; r; ) a = 33 * a ^ i.charCodeAt(--r);
  return a;
}, y1 = function(a) {
  return mo(v1, a);
};
function b1(a) {
  return Rp(y1(a) >>> 0);
}
function RA(a) {
  return a.displayName || a.name || "Component";
}
function ap(a) {
  return typeof a == "string" && !0;
}
var _1 = typeof Symbol == "function" && Symbol.for, S1 = _1 ? Symbol.for("react.memo") : 60115, DA = _1 ? Symbol.for("react.forward_ref") : 60112, NA = { childContextTypes: !0, contextType: !0, contextTypes: !0, defaultProps: !0, displayName: !0, getDefaultProps: !0, getDerivedStateFromError: !0, getDerivedStateFromProps: !0, mixins: !0, propTypes: !0, type: !0 }, jA = { name: !0, length: !0, prototype: !0, caller: !0, callee: !0, arguments: !0, arity: !0 }, E1 = { $$typeof: !0, compare: !0, defaultProps: !0, displayName: !0, propTypes: !0, type: !0 }, zA = ((np = {})[DA] = { $$typeof: !0, render: !0, defaultProps: !0, displayName: !0, propTypes: !0 }, np[S1] = E1, np);
function tb(a) {
  return ("type" in (i = a) && i.type.$$typeof) === S1 ? E1 : "$$typeof" in a ? zA[a.$$typeof] : NA;
  var i;
}
var LA = Object.defineProperty, HA = Object.getOwnPropertyNames, nb = Object.getOwnPropertySymbols, VA = Object.getOwnPropertyDescriptor, UA = Object.getPrototypeOf, ab = Object.prototype;
function C1(a, i, r) {
  if (typeof i != "string") {
    if (ab) {
      var o = UA(i);
      o && o !== ab && C1(a, o, r);
    }
    var s = HA(i);
    nb && (s = s.concat(nb(i)));
    for (var d = tb(a), h = tb(i), y = 0; y < s.length; ++y) {
      var m = s[y];
      if (!(m in jA || r && r[m] || h && m in h || d && m in d)) {
        var v = VA(i, m);
        try {
          LA(a, m, v);
        } catch {
        }
      }
    }
  }
  return a;
}
function Eo(a) {
  return typeof a == "function";
}
function om(a) {
  return typeof a == "object" && "styledComponentId" in a;
}
function hr(a, i) {
  return a && i ? "".concat(a, " ").concat(i) : a || i || "";
}
function Dp(a, i) {
  if (a.length === 0) return "";
  for (var r = a[0], o = 1; o < a.length; o++) r += a[o];
  return r;
}
function iu(a) {
  return a !== null && typeof a == "object" && a.constructor.name === Object.name && !("props" in a && a.$$typeof);
}
function Np(a, i, r) {
  if (r === void 0 && (r = !1), !r && !iu(a) && !Array.isArray(a)) return i;
  if (Array.isArray(i)) for (var o = 0; o < i.length; o++) a[o] = Np(a[o], i[o]);
  else if (iu(i)) for (var o in i) a[o] = Np(a[o], i[o]);
  return a;
}
function sm(a, i) {
  Object.defineProperty(a, "toString", { value: i });
}
function fu(a) {
  for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
  return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(a, " for more information.").concat(i.length > 0 ? " Args: ".concat(i.join(", ")) : ""));
}
var BA = (function() {
  function a(i) {
    this.groupSizes = new Uint32Array(512), this.length = 512, this.tag = i;
  }
  return a.prototype.indexOfGroup = function(i) {
    for (var r = 0, o = 0; o < i; o++) r += this.groupSizes[o];
    return r;
  }, a.prototype.insertRules = function(i, r) {
    if (i >= this.groupSizes.length) {
      for (var o = this.groupSizes, s = o.length, d = s; i >= d; ) if ((d <<= 1) < 0) throw fu(16, "".concat(i));
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
    for (var o = this.groupSizes[i], s = this.indexOfGroup(i), d = s + o, h = s; h < d; h++) r += "".concat(this.tag.getRule(h)).concat(rm);
    return r;
  }, a;
})(), sf = /* @__PURE__ */ new Map(), Tf = /* @__PURE__ */ new Map(), uf = 1, Jc = function(a) {
  if (sf.has(a)) return sf.get(a);
  for (; Tf.has(uf); ) uf++;
  var i = uf++;
  return sf.set(a, i), Tf.set(i, a), i;
}, $A = function(a, i) {
  uf = i + 1, sf.set(a, i), Tf.set(i, a);
}, kA = "style[".concat(_o, "][").concat(m1, '="').concat(If, '"]'), qA = new RegExp("^".concat(_o, '\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')), YA = function(a, i, r) {
  for (var o, s = r.split(","), d = 0, h = s.length; d < h; d++) (o = s[d]) && a.registerName(i, o);
}, GA = function(a, i) {
  for (var r, o = ((r = i.textContent) !== null && r !== void 0 ? r : "").split(rm), s = [], d = 0, h = o.length; d < h; d++) {
    var y = o[d].trim();
    if (y) {
      var m = y.match(qA);
      if (m) {
        var v = 0 | parseInt(m[1], 10), S = m[2];
        v !== 0 && ($A(S, v), YA(a, S, m[3]), a.getTag().insertRules(v, s)), s.length = 0;
      } else s.push(y);
    }
  }
}, ib = function(a) {
  for (var i = document.querySelectorAll(kA), r = 0, o = i.length; r < o; r++) {
    var s = i[r];
    s && s.getAttribute(_o) !== p1 && (GA(a, s), s.parentNode && s.parentNode.removeChild(s));
  }
};
function XA() {
  return typeof __webpack_nonce__ < "u" ? __webpack_nonce__ : null;
}
var x1 = function(a) {
  var i = document.head, r = a || i, o = document.createElement("style"), s = (function(y) {
    var m = Array.from(y.querySelectorAll("style[".concat(_o, "]")));
    return m[m.length - 1];
  })(r), d = s !== void 0 ? s.nextSibling : null;
  o.setAttribute(_o, p1), o.setAttribute(m1, If);
  var h = XA();
  return h && o.setAttribute("nonce", h), r.insertBefore(o, d), o;
}, IA = (function() {
  function a(i) {
    this.element = x1(i), this.element.appendChild(document.createTextNode("")), this.sheet = (function(r) {
      if (r.sheet) return r.sheet;
      for (var o = document.styleSheets, s = 0, d = o.length; s < d; s++) {
        var h = o[s];
        if (h.ownerNode === r) return h;
      }
      throw fu(17);
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
})(), FA = (function() {
  function a(i) {
    this.element = x1(i), this.nodes = this.element.childNodes, this.length = 0;
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
})(), QA = (function() {
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
})(), lb = Of, ZA = { isServer: !Of, useCSSOMInjection: !OA }, O1 = (function() {
  function a(i, r, o) {
    i === void 0 && (i = So), r === void 0 && (r = {});
    var s = this;
    this.options = ta(ta({}, ZA), i), this.gs = r, this.names = new Map(o), this.server = !!i.isServer, !this.server && Of && lb && (lb = !1, ib(this)), sm(this, function() {
      return (function(d) {
        for (var h = d.getTag(), y = h.length, m = "", v = function(O) {
          var A = (function(V) {
            return Tf.get(V);
          })(O);
          if (A === void 0) return "continue";
          var D = d.names.get(A), N = h.getGroup(O);
          if (D === void 0 || !D.size || N.length === 0) return "continue";
          var L = "".concat(_o, ".g").concat(O, '[id="').concat(A, '"]'), z = "";
          D !== void 0 && D.forEach(function(V) {
            V.length > 0 && (z += "".concat(V, ","));
          }), m += "".concat(N).concat(L, '{content:"').concat(z, '"}').concat(rm);
        }, S = 0; S < y; S++) v(S);
        return m;
      })(s);
    });
  }
  return a.registerId = function(i) {
    return Jc(i);
  }, a.prototype.rehydrate = function() {
    !this.server && Of && ib(this);
  }, a.prototype.reconstructWithOptions = function(i, r) {
    return r === void 0 && (r = !0), new a(ta(ta({}, this.options), i), this.gs, r && this.names || void 0);
  }, a.prototype.allocateGSInstance = function(i) {
    return this.gs[i] = (this.gs[i] || 0) + 1;
  }, a.prototype.getTag = function() {
    return this.tag || (this.tag = (i = (function(r) {
      var o = r.useCSSOMInjection, s = r.target;
      return r.isServer ? new QA(s) : o ? new IA(s) : new FA(s);
    })(this.options), new BA(i)));
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
})(), KA = /&/g, JA = /^\s*\/\/.*$/gm;
function T1(a, i) {
  return a.map(function(r) {
    return r.type === "rule" && (r.value = "".concat(i, " ").concat(r.value), r.value = r.value.replaceAll(",", ",".concat(i, " ")), r.props = r.props.map(function(o) {
      return "".concat(i, " ").concat(o);
    })), Array.isArray(r.children) && r.type !== "@keyframes" && (r.children = T1(r.children, i)), r;
  });
}
function WA(a) {
  var i, r, o, s = So, d = s.options, h = d === void 0 ? So : d, y = s.plugins, m = y === void 0 ? Ff : y, v = function(A, D, N) {
    return N.startsWith(r) && N.endsWith(r) && N.replaceAll(r, "").length > 0 ? ".".concat(i) : A;
  }, S = m.slice();
  S.push(function(A) {
    A.type === qf && A.value.includes("&") && (A.props[0] = A.props[0].replace(KA, r).replace(o, v));
  }), h.prefix && S.push(CA), S.push(_A);
  var O = function(A, D, N, L) {
    D === void 0 && (D = ""), N === void 0 && (N = ""), L === void 0 && (L = "&"), i = L, r = D, o = new RegExp("\\".concat(r, "\\b"), "g");
    var z = A.replace(JA, ""), V = yA(N || D ? "".concat(N, " ").concat(D, " { ").concat(z, " }") : z);
    h.namespace && (V = T1(V, h.namespace));
    var Z = [];
    return xf(V, SA(S.concat(EA(function(X) {
      return Z.push(X);
    })))), Z;
  };
  return O.hash = m.length ? m.reduce(function(A, D) {
    return D.name || fu(15), mo(A, D.name);
  }, v1).toString() : "", O;
}
var PA = new O1(), jp = WA(), A1 = Xt.createContext({ shouldForwardProp: void 0, styleSheet: PA, stylis: jp });
A1.Consumer;
Xt.createContext(void 0);
function rb() {
  return E.useContext(A1);
}
var w1 = (function() {
  function a(i, r) {
    var o = this;
    this.inject = function(s, d) {
      d === void 0 && (d = jp);
      var h = o.name + d.hash;
      s.hasNameForId(o.id, h) || s.insertRules(o.id, h, d(o.rules, h, "@keyframes"));
    }, this.name = i, this.id = "sc-keyframes-".concat(i), this.rules = r, sm(this, function() {
      throw fu(12, String(o.name));
    });
  }
  return a.prototype.getName = function(i) {
    return i === void 0 && (i = jp), this.name + i.hash;
  }, a;
})(), ew = function(a) {
  return a >= "A" && a <= "Z";
};
function ob(a) {
  for (var i = "", r = 0; r < a.length; r++) {
    var o = a[r];
    if (r === 1 && o === "-" && a[0] === "-") return a;
    ew(o) ? i += "-" + o.toLowerCase() : i += o;
  }
  return i.startsWith("ms-") ? "-" + i : i;
}
var M1 = function(a) {
  return a == null || a === !1 || a === "";
}, R1 = function(a) {
  var i, r, o = [];
  for (var s in a) {
    var d = a[s];
    a.hasOwnProperty(s) && !M1(d) && (Array.isArray(d) && d.isCss || Eo(d) ? o.push("".concat(ob(s), ":"), d, ";") : iu(d) ? o.push.apply(o, au(au(["".concat(s, " {")], R1(d), !1), ["}"], !1)) : o.push("".concat(ob(s), ": ").concat((i = s, (r = d) == null || typeof r == "boolean" || r === "" ? "" : typeof r != "number" || r === 0 || i in xA || i.startsWith("--") ? String(r).trim() : "".concat(r, "px")), ";")));
  }
  return o;
};
function mr(a, i, r, o) {
  if (M1(a)) return [];
  if (om(a)) return [".".concat(a.styledComponentId)];
  if (Eo(a)) {
    if (!Eo(d = a) || d.prototype && d.prototype.isReactComponent || !i) return [a];
    var s = a(i);
    return mr(s, i, r, o);
  }
  var d;
  return a instanceof w1 ? r ? (a.inject(r, o), [a.getName(o)]) : [a] : iu(a) ? R1(a) : Array.isArray(a) ? Array.prototype.concat.apply(Ff, a.map(function(h) {
    return mr(h, i, r, o);
  })) : [a.toString()];
}
function tw(a) {
  for (var i = 0; i < a.length; i += 1) {
    var r = a[i];
    if (Eo(r) && !om(r)) return !1;
  }
  return !0;
}
var nw = y1(If), aw = (function() {
  function a(i, r, o) {
    this.rules = i, this.staticRulesId = "", this.isStatic = (o === void 0 || o.isStatic) && tw(i), this.componentId = r, this.baseHash = mo(nw, r), this.baseStyle = o, O1.registerId(r);
  }
  return a.prototype.generateAndInjectStyles = function(i, r, o) {
    var s = this.baseStyle ? this.baseStyle.generateAndInjectStyles(i, r, o) : "";
    if (this.isStatic && !o.hash) if (this.staticRulesId && r.hasNameForId(this.componentId, this.staticRulesId)) s = hr(s, this.staticRulesId);
    else {
      var d = Dp(mr(this.rules, i, r, o)), h = Rp(mo(this.baseHash, d) >>> 0);
      if (!r.hasNameForId(this.componentId, h)) {
        var y = o(d, ".".concat(h), void 0, this.componentId);
        r.insertRules(this.componentId, h, y);
      }
      s = hr(s, h), this.staticRulesId = h;
    }
    else {
      for (var m = mo(this.baseHash, o.hash), v = "", S = 0; S < this.rules.length; S++) {
        var O = this.rules[S];
        if (typeof O == "string") v += O;
        else if (O) {
          var A = Dp(mr(O, i, r, o));
          m = mo(m, A + S), v += A;
        }
      }
      if (v) {
        var D = Rp(m >>> 0);
        r.hasNameForId(this.componentId, D) || r.insertRules(this.componentId, D, o(v, ".".concat(D), void 0, this.componentId)), s = hr(s, D);
      }
    }
    return s;
  }, a;
})(), D1 = Xt.createContext(void 0);
D1.Consumer;
var ip = {};
function iw(a, i, r) {
  var o = om(a), s = a, d = !ap(a), h = i.attrs, y = h === void 0 ? Ff : h, m = i.componentId, v = m === void 0 ? (function(P, B) {
    var I = typeof P != "string" ? "sc" : Py(P);
    ip[I] = (ip[I] || 0) + 1;
    var U = "".concat(I, "-").concat(b1(If + I + ip[I]));
    return B ? "".concat(B, "-").concat(U) : U;
  })(i.displayName, i.parentComponentId) : m, S = i.displayName, O = S === void 0 ? (function(P) {
    return ap(P) ? "styled.".concat(P) : "Styled(".concat(RA(P), ")");
  })(a) : S, A = i.displayName && i.componentId ? "".concat(Py(i.displayName), "-").concat(i.componentId) : i.componentId || v, D = o && s.attrs ? s.attrs.concat(y).filter(Boolean) : y, N = i.shouldForwardProp;
  if (o && s.shouldForwardProp) {
    var L = s.shouldForwardProp;
    if (i.shouldForwardProp) {
      var z = i.shouldForwardProp;
      N = function(P, B) {
        return L(P, B) && z(P, B);
      };
    } else N = L;
  }
  var V = new aw(r, A, o ? s.componentStyle : void 0);
  function Z(P, B) {
    return (function(I, U, oe) {
      var Ee = I.attrs, Fe = I.componentStyle, Ie = I.defaultProps, He = I.foldedComponentIds, dt = I.styledComponentId, it = I.target, $e = Xt.useContext(D1), $ = rb(), ne = I.shouldForwardProp || $.shouldForwardProp, le = TA(U, $e, Ie) || So, ye = (function(ue, fe, de) {
        for (var Ve, ie = ta(ta({}, fe), { className: void 0, theme: de }), At = 0; At < ue.length; At += 1) {
          var Ut = Eo(Ve = ue[At]) ? Ve(ie) : Ve;
          for (var Ct in Ut) ie[Ct] = Ct === "className" ? hr(ie[Ct], Ut[Ct]) : Ct === "style" ? ta(ta({}, ie[Ct]), Ut[Ct]) : Ut[Ct];
        }
        return fe.className && (ie.className = hr(ie.className, fe.className)), ie;
      })(Ee, U, le), Ce = ye.as || it, x = {};
      for (var k in ye) ye[k] === void 0 || k[0] === "$" || k === "as" || k === "theme" && ye.theme === le || (k === "forwardedAs" ? x.as = ye.forwardedAs : ne && !ne(k, Ce) || (x[k] = ye[k]));
      var te = (function(ue, fe) {
        var de = rb(), Ve = ue.generateAndInjectStyles(fe, de.styleSheet, de.stylis);
        return Ve;
      })(Fe, ye), ae = hr(He, dt);
      return te && (ae += " " + te), ye.className && (ae += " " + ye.className), x[ap(Ce) && !g1.has(Ce) ? "class" : "className"] = ae, oe && (x.ref = oe), E.createElement(Ce, x);
    })(X, P, B);
  }
  Z.displayName = O;
  var X = Xt.forwardRef(Z);
  return X.attrs = D, X.componentStyle = V, X.displayName = O, X.shouldForwardProp = N, X.foldedComponentIds = o ? hr(s.foldedComponentIds, s.styledComponentId) : "", X.styledComponentId = A, X.target = o ? s.target : a, Object.defineProperty(X, "defaultProps", { get: function() {
    return this._foldedDefaultProps;
  }, set: function(P) {
    this._foldedDefaultProps = o ? (function(B) {
      for (var I = [], U = 1; U < arguments.length; U++) I[U - 1] = arguments[U];
      for (var oe = 0, Ee = I; oe < Ee.length; oe++) Np(B, Ee[oe], !0);
      return B;
    })({}, s.defaultProps, P) : P;
  } }), sm(X, function() {
    return ".".concat(X.styledComponentId);
  }), d && C1(X, a, { attrs: !0, componentStyle: !0, displayName: !0, foldedComponentIds: !0, shouldForwardProp: !0, styledComponentId: !0, target: !0 }), X;
}
function sb(a, i) {
  for (var r = [a[0]], o = 0, s = i.length; o < s; o += 1) r.push(i[o], a[o + 1]);
  return r;
}
var ub = function(a) {
  return Object.assign(a, { isCss: !0 });
};
function N1(a) {
  for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
  if (Eo(a) || iu(a)) return ub(mr(sb(Ff, au([a], i, !0))));
  var o = a;
  return i.length === 0 && o.length === 1 && typeof o[0] == "string" ? mr(o) : ub(mr(sb(o, i)));
}
function zp(a, i, r) {
  if (r === void 0 && (r = So), !i) throw fu(1, i);
  var o = function(s) {
    for (var d = [], h = 1; h < arguments.length; h++) d[h - 1] = arguments[h];
    return a(i, r, N1.apply(void 0, au([s], d, !1)));
  };
  return o.attrs = function(s) {
    return zp(a, i, ta(ta({}, r), { attrs: Array.prototype.concat(r.attrs, s).filter(Boolean) }));
  }, o.withConfig = function(s) {
    return zp(a, i, ta(ta({}, r), s));
  }, o;
}
var j1 = function(a) {
  return zp(iw, a);
}, vr = j1;
g1.forEach(function(a) {
  vr[a] = j1(a);
});
function um(a) {
  for (var i = [], r = 1; r < arguments.length; r++) i[r - 1] = arguments[r];
  var o = Dp(N1.apply(void 0, au([a], i, !1))), s = b1(o);
  return new w1(s, o);
}
var lw = {
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
rw(lw);
function rw(a) {
  var i = {};
  for (var r in a)
    a.hasOwnProperty(r) && (i[a[r]] = r);
  return i;
}
var ow = "#4fa94d", cb = { "aria-busy": !0, role: "progressbar" }, sw = vr.div`
  display: ${(a) => a.$visible ? "flex" : "none"};
`, uw = "http://www.w3.org/2000/svg", $a = 242.776657104492, cw = 1.6, fw = um`
12.5% {
  stroke-dasharray: ${$a * 0.14}px, ${$a}px;
  stroke-dashoffset: -${$a * 0.11}px;
}
43.75% {
  stroke-dasharray: ${$a * 0.35}px, ${$a}px;
  stroke-dashoffset: -${$a * 0.35}px;
}
100% {
  stroke-dasharray: ${$a * 0.01}px, ${$a}px;
  stroke-dashoffset: -${$a * 0.99}px;
}
`;
vr.path`
  stroke-dasharray: ${$a * 0.01}px, ${$a};
  stroke-dashoffset: 0;
  animation: ${fw} ${cw}s linear infinite;
`;
var dw = [0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330], hw = um`
to {
   transform: rotate(360deg);
 }
`, pw = vr.svg`
  animation: ${hw} ${(a) => String(a.$animationDuration).endsWith("s") ? String(a.$animationDuration) : `${a.$animationDuration}s`} steps(12, end) infinite;
`, mw = vr.polyline`
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
`, gw = ({ height: a = 96, width: i = 96, color: r = ow, strokeWidth: o = 5, animationDuration: s = 0.75, strokeColor: d, visible: h = !0, ariaLabel: y = "rotating-lines-loading", wrapperStyle: m, wrapperClass: v }) => {
  let S = E.useCallback(() => dw.map((O) => Xt.createElement(mw, { key: O, points: "24,12 24,4", $strokeWidth: o, transform: `rotate(${O}, 24, 24)` })), [o]);
  return h ? Xt.createElement(sw, { style: m, $visible: h, className: v, "aria-label": y, "data-testid": "rotating-lines-loading", ...cb }, Xt.createElement(pw, { xmlns: uw, viewBox: "0 0 48 48", width: i, height: a, stroke: d ?? r, $animationDuration: s, speed: String(s), "aria-label": y, "data-testid": "rotating-lines-svg", ...cb }, S())) : null;
}, vw = um`
to {
   stroke-dashoffset: 136;
 }
`;
vr.polygon`
  stroke-dasharray: 17;
  animation: ${vw} 2.5s cubic-bezier(0.35, 0.04, 0.63, 0.95) infinite;
`;
vr.svg`
  transform-origin: 50% 65%;
`;
function yw() {
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
var fb;
function bw() {
  if (fb) return rp;
  fb = 1;
  var a = wf().__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
  return rp.c = function(i) {
    return a.H.useMemoCache(i);
  }, rp;
}
var db;
function _w() {
  return db || (db = 1, lp.exports = bw()), lp.exports;
}
var Qf = _w();
function op(a) {
  const i = Qf.c(3), {
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
function sp() {
  const a = Qf.c(1);
  let i;
  return a[0] === Symbol.for("react.memo_cache_sentinel") ? (i = /* @__PURE__ */ T.jsx(Ba.Header, { className: "justify-content-center", closeButton: !0, children: /* @__PURE__ */ T.jsx(Ba.Title, { as: "h5", children: /* @__PURE__ */ T.jsxs("div", { className: "d-flex gap-1", children: [
    /* @__PURE__ */ T.jsx(yp, {}),
    " Human Automator"
  ] }) }) }), a[0] = i) : i = a[0], i;
}
const Sw = () => {
  const a = [...document.querySelectorAll(".gradebook-container__table2-outlet .gradebook-container__table2-row")], i = [...document.querySelectorAll(".gradebook-container__table .gradebook-container__table2-row .gradebook-narrow__cell.smart-cell")], r = (S) => S.querySelector(".badge__item--no-border"), o = (S) => {
    const O = r(S)?.innerText.trim();
    return O ? Number(O) : null;
  }, s = (S) => S.querySelector(".gradebook__ng-universal-rating-comments"), d = (S) => S.querySelector(".pseudo-button--color-red"), h = (S) => S.querySelectorAll(".gradebook-narrow__cell.smart-cell"), y = (S) => S.querySelector(".bem-user__name").innerText.trim();
  return {
    rows: a,
    cells: i,
    cellsNarrow: h,
    cellAbsent: d,
    rating: o,
    ratingComment: s,
    studentName: y,
    students: () => {
      const S = [];
      for (const O of a) {
        const A = y(O);
        S.push({
          value: A,
          label: A
        });
      }
      return S;
    },
    fillPercent: (S) => {
      const O = [], A = [];
      if (S && S.length > 0) {
        for (const D of a)
          if (S.find((N) => N.value === y(D)))
            for (const N of [...h(D)])
              s(N) && !d(N) && o(N) && O.push(N), s(N) && !d(N) && !o(N) && A.push(N);
      } else
        for (const D of i)
          s(D) && !d(D) && r(D) && O.push(D), s(D) && !d(D) && !o(D) && A.push(D);
      return Math.round(O.length / (O.length + A.length) * 100);
    }
  };
}, Ew = () => {
  const a = Qf.c(5), [i, r] = E.useState(""), o = i === "set_rating", s = i === "delete_rating", d = i === "count_rating";
  let h;
  return a[0] !== i || a[1] !== d || a[2] !== s || a[3] !== o ? (h = {
    action: i,
    setAction: r,
    isSetRating: o,
    isDeleteRating: s,
    isCountRating: d
  }, a[0] = i, a[1] = d, a[2] = s, a[3] = o, a[4] = h) : h = a[4], h;
}, Cw = (a, i) => (a = Math.ceil(a), i = Math.floor(i), Math.floor(Math.random() * (i - a + 1)) + a), xw = (a) => {
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
}, Ow = () => {
  const a = Qf.c(6), [i, r] = E.useState(!1), o = E.useRef(!1);
  let s, d;
  a[0] !== i ? (s = () => {
    o.current = i;
  }, d = [i], a[0] = i, a[1] = s, a[2] = d) : (s = a[1], d = a[2]), E.useEffect(s, d);
  let h;
  a[3] === Symbol.for("react.memo_cache_sentinel") ? (h = async (v) => {
    const {
      item: S,
      minRating: O,
      maxRating: A,
      remove: D
    } = v;
    return new Promise((N) => {
      setTimeout(() => {
        if (!o.current) {
          N();
          return;
        }
        S.click(), S.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "nearest"
        }), setTimeout(() => {
          if (!o.current) {
            N();
            return;
          }
          const L = document.querySelector(".mark-group__input-container input.mark-group__input");
          O && A && (L.value = String(Cw(O, A))), D && (L.value = ""), L.dispatchEvent(new Event("input", {
            bubbles: !0
          })), setTimeout(() => {
            if (!o.current) {
              N();
              return;
            }
            const z = document.querySelector(".mark-group .mark-buttons button .clickable");
            z && z.click(), N();
          }, dp.APPROVAL_DELAY);
        }, dp.INNER_TIMEOUT);
      }, dp.OUTER_TIMEOUT);
    });
  }, a[3] = h) : h = a[3];
  const y = h;
  let m;
  return a[4] !== i ? (m = {
    isProcessing: i,
    setIsProcessing: r,
    processItem: y,
    isProcessingRef: o
  }, a[4] = i, a[5] = m) : m = a[5], m;
};
function Tw() {
  const a = lA(), {
    action: i,
    setAction: r,
    isSetRating: o,
    isDeleteRating: s,
    isCountRating: d
  } = Ew(), {
    isProcessing: h,
    setIsProcessing: y,
    processItem: m,
    isProcessingRef: v
  } = Ow(), {
    rows: S,
    cells: O,
    cellsNarrow: A,
    cellAbsent: D,
    rating: N,
    ratingComment: L,
    studentName: z,
    students: V,
    fillPercent: Z
  } = Sw(), X = E.useMemo(() => V(), [V]), [P, B] = E.useState(!1), [I, U] = E.useState(void 0), [oe, Ee] = E.useState(!1), [Fe, Ie] = E.useState(0), [He, dt] = E.useState(0), [it, $e] = E.useState(0), [$, ne] = E.useState(!1), [le, ye] = E.useState(""), [Ce, x] = E.useState(""), [k, te] = E.useState(0), [ae, ue] = E.useState(0), [fe, de] = E.useState("");
  E.useEffect(() => {
    ue(Z(I));
  }, [Z, I]), E.useEffect(() => {
    v.current = h;
  }, [h, v]), E.useEffect(() => {
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
  const Ve = () => {
    r(""), U(void 0), Ee(!1), y(!1), Ie(0), dt(0), ye(""), x(""), te(0), ue(Z());
  }, ie = () => window.location.reload(), At = () => {
    Ee(!1), y(!1), de("stop");
  }, Ut = async (Ke) => {
    if (Ke.preventDefault(), o) {
      if (Fe > He) {
        ye("Мінімальна оцінка не може бути більшою за максимальну");
        return;
      }
      if (k <= ae) {
        x("Максимальний відсоток заповнення не може бути меншим або рівним поточному");
        return;
      }
      Ee(!0), y(!0);
      const et = [];
      if (I) {
        for (const we of S)
          if (I.find((ze) => ze.value === z(we)))
            for (const ze of [...A(we)])
              L(ze) && !D(ze) && !N(ze) && et.push(ze);
      } else
        for (const we of O)
          L(we) && !D(we) && !N(we) && et.push(we);
      for (const we of xw(et)) {
        await m({
          item: we,
          minRating: Fe,
          maxRating: He
        });
        const ze = Z(I);
        if (ue(ze), !v.current) {
          de("stop"), Ve();
          return;
        }
        if (ze >= k)
          break;
      }
      de("done"), up();
    }
    if (s) {
      Ee(!0), y(!0);
      const et = [];
      if (I) {
        for (const we of S)
          if (I.find((ze) => ze.value === z(we)))
            for (const ze of [...A(we)])
              $ ? L(ze) && !D(ze) && N(ze) && et.push(ze) : L(ze) && !D(ze) && it === N(ze) && et.push(ze);
      } else
        for (const we of et)
          for (const ze of [...A(we)])
            $ ? L(ze) && !D(ze) && N(ze) && et.push(ze) : L(ze) && !D(ze) && it === N(ze) && et.push(ze);
      for (const we of et)
        if (await m({
          item: we,
          remove: !0
        }), ue(Z(I)), !v.current) {
          Ve(), de("stop");
          return;
        }
      de("done"), up();
    }
    d && (Ee(!0), y(!0), B(!0), de("done"), up()), Ve();
  }, Ct = E.useCallback((Ke) => {
    U(Ke), x("");
  }, []);
  return P ? /* @__PURE__ */ T.jsx(T.Fragment, { children: /* @__PURE__ */ T.jsxs(Ba, { show: !0, onHide: ie, centered: !0, children: [
    /* @__PURE__ */ T.jsx(sp, {}),
    /* @__PURE__ */ T.jsx(Ba.Body, { children: /* @__PURE__ */ T.jsx(Pt, { children: /* @__PURE__ */ T.jsx(Pt.Body, { children: /* @__PURE__ */ T.jsx(yw, {}) }) }) }),
    /* @__PURE__ */ T.jsx(Ba.Footer, { children: /* @__PURE__ */ T.jsx(Zs, { variant: "danger", onClick: ie, children: "Закрити" }) })
  ] }) }) : h ? /* @__PURE__ */ T.jsx(T.Fragment, { children: /* @__PURE__ */ T.jsxs(Ba, { show: !0, onHide: ie, centered: !0, children: [
    /* @__PURE__ */ T.jsx(sp, {}),
    /* @__PURE__ */ T.jsxs(Ba.Body, { children: [
      /* @__PURE__ */ T.jsx(o0, { now: s ? 100 - ae : ae, max: s ? 100 - k : k, variant: "success", animated: !0 }, ae),
      /* @__PURE__ */ T.jsxs("div", { className: "d-flex gap-1 mt-3 mb-0 justify-content-center align-items-center", children: [
        /* @__PURE__ */ T.jsx(gw, { color: "black", strokeWidth: "5", animationDuration: "0.75", height: "24", width: "24" }),
        /* @__PURE__ */ T.jsxs("div", { children: [
          "Обробка ...",
          " ",
          /* @__PURE__ */ T.jsxs("span", { className: "fw-bold", children: [
            s ? 100 - ae : ae,
            "%"
          ] }),
          k < 100 && k > 0 && /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
            " ",
            "із ",
            /* @__PURE__ */ T.jsxs("span", { className: "fw-bold", children: [
              k,
              "%"
            ] })
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ T.jsx(Ba.Footer, { children: /* @__PURE__ */ T.jsx(Zs, { variant: "danger", onClick: At, children: "Зупинити" }) })
  ] }) }) : /* @__PURE__ */ T.jsxs(T.Fragment, { children: [
    fe == "stop" && /* @__PURE__ */ T.jsx(vp, { position: "top-end", className: "p-3", children: /* @__PURE__ */ T.jsxs(co, { onClose: () => de(""), show: !!fe, delay: 1e4, autohide: !0, bg: "danger", children: [
      /* @__PURE__ */ T.jsx(co.Header, { className: "text-white justify-content-center", closeButton: !0, children: /* @__PURE__ */ T.jsxs("strong", { className: "d-flex align-items-center gap-1", children: [
        /* @__PURE__ */ T.jsx(yp, {}),
        " Human Automator"
      ] }) }),
      /* @__PURE__ */ T.jsx(co.Body, { className: "text-white fw-bold text-center", children: "Операцію було скасовано!" })
    ] }) }),
    fe == "done" && /* @__PURE__ */ T.jsx(vp, { position: "top-end", className: "p-3", children: /* @__PURE__ */ T.jsxs(co, { onClose: () => de(""), show: !!fe, delay: 1e4, autohide: !0, bg: "success", children: [
      /* @__PURE__ */ T.jsx(co.Header, { className: "text-white justify-content-center", closeButton: !0, children: /* @__PURE__ */ T.jsxs("strong", { className: "d-flex align-items-center gap-1", children: [
        /* @__PURE__ */ T.jsx(yp, {}),
        " Human Automator"
      ] }) }),
      /* @__PURE__ */ T.jsx(co.Body, { className: "text-white fw-bold text-center", children: "Операцію було успішно завершено!" })
    ] }) }),
    /* @__PURE__ */ T.jsx(Ba, { show: !0, onHide: ie, centered: !0, children: /* @__PURE__ */ T.jsxs(gt, { onSubmit: Ut, children: [
      /* @__PURE__ */ T.jsx(sp, {}),
      /* @__PURE__ */ T.jsxs(Ba.Body, { children: [
        /* @__PURE__ */ T.jsx(Pt, { children: /* @__PURE__ */ T.jsxs(Pt.Body, { children: [
          /* @__PURE__ */ T.jsx(gt.Label, { className: "fw-bold", children: "Дія" }),
          /* @__PURE__ */ T.jsx(gt.Check, { type: "switch", label: "Проставити учням оцінки", onChange: (Ke) => Ke.target.checked ? r("set_rating") : r(""), checked: o, disabled: oe }),
          /* @__PURE__ */ T.jsx(gt.Check, { type: "switch", label: "Видалити учням оцінки", onChange: (Ke) => Ke.target.checked ? r("delete_rating") : r(""), checked: s, disabled: oe }),
          /* @__PURE__ */ T.jsx(gt.Check, { type: "switch", label: "Показати яких і скільки оцінок", onChange: (Ke) => Ke.target.checked ? r("count_rating") : r(""), checked: d, disabled: oe })
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
          /* @__PURE__ */ T.jsx(Pt, { className: "mt-3", children: /* @__PURE__ */ T.jsxs(Pt.Body, { children: [
            /* @__PURE__ */ T.jsx(gt.Label, { className: "fw-bold", children: "Оберіть учнів" }),
            /* @__PURE__ */ T.jsx(Zy, { className: "mb-2", placeholder: "Оберіть учнів", options: X, onChange: (Ke) => Ct(Ke), isMulti: !0, closeMenuOnSelect: !1, components: a, isDisabled: oe }),
            /* @__PURE__ */ T.jsxs(gt.Text, { children: [
              /* @__PURE__ */ T.jsx("span", { className: "fw-bold", children: "Оберіть учнів" }),
              " яким бажаєте виставити оцінки, або яким ",
              /* @__PURE__ */ T.jsx("span", { className: "fw-bold", children: "НЕ" }),
              " ставити оцінки."
            ] })
          ] }) }),
          /* @__PURE__ */ T.jsx(Pt, { className: "mt-3", children: /* @__PURE__ */ T.jsx(Pt.Body, { children: /* @__PURE__ */ T.jsxs(gt.Group, { children: [
            /* @__PURE__ */ T.jsx(gt.Label, { className: "fw-bold", children: "Мінімальна оцінка" }),
            /* @__PURE__ */ T.jsxs(Yc, { className: "mb-2", children: [
              /* @__PURE__ */ T.jsx(gt.Control, { type: "number", min: fp, max: Wc, placeholder: "Введіть мінімальну оцінку", required: !0, disabled: oe, isInvalid: !!le, onChange: (Ke) => {
                Ie(Number(Ke.target.value)), ye("");
              } }),
              /* @__PURE__ */ T.jsx(gt.Control.Feedback, { type: "invalid", children: le })
            ] }),
            /* @__PURE__ */ T.jsxs(gt.Text, { children: [
              /* @__PURE__ */ T.jsx("span", { className: "fw-bold", children: "Мінімальна оцінка" }),
              ", яку бажаєте поставити, наприклад, ",
              /* @__PURE__ */ T.jsx("span", { className: "fw-bold", children: cp })
            ] })
          ] }) }) }),
          /* @__PURE__ */ T.jsx(Pt, { className: "mt-3", children: /* @__PURE__ */ T.jsx(Pt.Body, { children: /* @__PURE__ */ T.jsxs(gt.Group, { children: [
            /* @__PURE__ */ T.jsx(gt.Label, { className: "fw-bold", children: "Максимальна оцінка" }),
            /* @__PURE__ */ T.jsxs(Yc, { className: "mb-2", children: [
              /* @__PURE__ */ T.jsx(gt.Control, { type: "number", min: fp, max: Wc, placeholder: "Введіть максимальну оцінку", required: !0, disabled: oe, isInvalid: !!le, onChange: (Ke) => {
                dt(Number(Ke.target.value)), ye("");
              } }),
              /* @__PURE__ */ T.jsx(gt.Control.Feedback, { type: "invalid", children: le })
            ] }),
            /* @__PURE__ */ T.jsxs(gt.Text, { children: [
              /* @__PURE__ */ T.jsx("span", { className: "fw-bold", children: "Максимальна оцінка" }),
              ", яку бажаєте поставити, наприклад, ",
              /* @__PURE__ */ T.jsx("span", { className: "fw-bold", children: Wc })
            ] })
          ] }) }) }),
          /* @__PURE__ */ T.jsx(Pt, { className: "mt-3", children: /* @__PURE__ */ T.jsx(Pt.Body, { children: /* @__PURE__ */ T.jsxs(gt.Group, { children: [
            /* @__PURE__ */ T.jsx(gt.Label, { className: "fw-bold", children: "Максимальний відсоток заповнення" }),
            /* @__PURE__ */ T.jsxs(Yc, { className: "mb-2", children: [
              /* @__PURE__ */ T.jsx(gt.Control, { type: "number", min: ae, max: "100", placeholder: "Введіть максимальний відсоток заповнення", required: !0, disabled: oe, isInvalid: !!Ce, defaultValue: ae, onChange: (Ke) => {
                te(Number(Ke.target.value)), x("");
              } }, ae),
              /* @__PURE__ */ T.jsx(gt.Control.Feedback, { type: "invalid", children: Ce })
            ] }),
            /* @__PURE__ */ T.jsxs(gt.Text, { children: [
              /* @__PURE__ */ T.jsx("span", { className: "fw-bold", children: "Максимальний відсоток заповнення" }),
              " оцінок, наприклад, зараз є заповнення на",
              " ",
              /* @__PURE__ */ T.jsxs("span", { className: "fw-bold", children: [
                ae,
                "%"
              ] }),
              I && I.length > 0 && /* @__PURE__ */ T.jsx(T.Fragment, { children: " для обраних учнів" })
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
          /* @__PURE__ */ T.jsx(Pt, { className: "mt-3", children: /* @__PURE__ */ T.jsxs(Pt.Body, { children: [
            /* @__PURE__ */ T.jsx(gt.Label, { className: "fw-bold", children: "Оберіть учнів" }),
            /* @__PURE__ */ T.jsx(Zy, { className: "mb-2", placeholder: "Оберіть учнів", options: X, onChange: (Ke) => Ct(Ke), isMulti: !0, closeMenuOnSelect: !1, components: a, isDisabled: oe }),
            /* @__PURE__ */ T.jsxs(gt.Text, { children: [
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
          !$ && /* @__PURE__ */ T.jsx(Pt, { className: "mt-3", children: /* @__PURE__ */ T.jsx(Pt.Body, { children: /* @__PURE__ */ T.jsxs(gt.Group, { children: [
            /* @__PURE__ */ T.jsx(gt.Label, { className: "fw-bold", children: "Оцінка" }),
            /* @__PURE__ */ T.jsx(Yc, { className: "mb-2", children: /* @__PURE__ */ T.jsx(gt.Control, { type: "number", min: fp, max: Wc, placeholder: "Введіть оцінку яку бажаєте видалити", required: !0, disabled: oe, onChange: (Ke) => {
              $e(Number(Ke.target.value));
            } }) }),
            /* @__PURE__ */ T.jsxs(gt.Text, { children: [
              /* @__PURE__ */ T.jsx("span", { className: "fw-bold", children: "Оцінка" }),
              ", яку бажаєте видалити, наприклад,",
              " ",
              /* @__PURE__ */ T.jsx("span", { className: "fw-bold", children: cp })
            ] })
          ] }) }) }),
          /* @__PURE__ */ T.jsx(Pt, { className: "mt-3", children: /* @__PURE__ */ T.jsxs(Pt.Body, { children: [
            /* @__PURE__ */ T.jsx(gt.Check, { className: "mb-2", type: "switch", label: "Видалити всі оцінки", onChange: (Ke) => ne(Ke.target.checked), defaultValue: $ ? "true" : "false", disabled: oe }),
            /* @__PURE__ */ T.jsxs(gt.Text, { children: [
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
          /* @__PURE__ */ T.jsx(Pt, { className: "mt-3", children: /* @__PURE__ */ T.jsx(Pt.Body, { children: /* @__PURE__ */ T.jsxs("div", { className: "fst-italic", children: [
            "Щоб подивитися результат, виконайте умови, які зазначені в",
            " ",
            /* @__PURE__ */ T.jsx("span", { className: "fw-bold", children: "Описі" }),
            ", і потім натисніть кнопку",
            " ",
            /* @__PURE__ */ T.jsx("span", { className: "fw-bold", children: "Почати" })
          ] }) }) })
        ] })
      ] }),
      /* @__PURE__ */ T.jsxs(Ba.Footer, { className: "justify-content-between", children: [
        /* @__PURE__ */ T.jsx(Zs, { variant: "danger", onClick: ie, children: "Закрити" }),
        /* @__PURE__ */ T.jsx(Zs, { disabled: i === "", variant: "primary", type: "submit", children: "Почати" })
      ] })
    ] }) })
  ] });
}
W_.createRoot(document.getElementById("app")).render(/* @__PURE__ */ T.jsx(E.StrictMode, { children: /* @__PURE__ */ T.jsx(Tw, {}) }));
