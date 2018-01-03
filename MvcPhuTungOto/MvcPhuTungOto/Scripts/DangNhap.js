﻿/*! jQuery Migrate v1.1.1 | (c) 2005, 2013 jQuery Foundation, Inc. and other contributors | jquery.org/license */
jQuery.migrateMute === void 0 && (jQuery.migrateMute = !0), function (e, t, n) { function r(n) { o[n] || (o[n] = !0, e.migrateWarnings.push(n), t.console && console.warn && !e.migrateMute && (console.warn("JQMIGRATE: " + n), e.migrateTrace && console.trace && console.trace())) } function a(t, a, o, i) { if (Object.defineProperty) try { return Object.defineProperty(t, a, { configurable: !0, enumerable: !0, get: function () { return r(i), o }, set: function (e) { r(i), o = e } }), n } catch (s) { } e._definePropertyBroken = !0, t[a] = o } var o = {}; e.migrateWarnings = [], !e.migrateMute && t.console && console.log && console.log("JQMIGRATE: Logging is active"), e.migrateTrace === n && (e.migrateTrace = !0), e.migrateReset = function () { o = {}, e.migrateWarnings.length = 0 }, "BackCompat" === document.compatMode && r("jQuery is not compatible with Quirks Mode"); var i = e("<input/>", { size: 1 }).attr("size") && e.attrFn, s = e.attr, u = e.attrHooks.value && e.attrHooks.value.get || function () { return null }, c = e.attrHooks.value && e.attrHooks.value.set || function () { return n }, l = /^(?:input|button)$/i, d = /^[238]$/, p = /^(?:autofocus|autoplay|async|checked|controls|defer|disabled|hidden|loop|multiple|open|readonly|required|scoped|selected)$/i, f = /^(?:checked|selected)$/i; a(e, "attrFn", i || {}, "jQuery.attrFn is deprecated"), e.attr = function (t, a, o, u) { var c = a.toLowerCase(), g = t && t.nodeType; return u && (4 > s.length && r("jQuery.fn.attr( props, pass ) is deprecated"), t && !d.test(g) && (i ? a in i : e.isFunction(e.fn[a]))) ? e(t)[a](o) : ("type" === a && o !== n && l.test(t.nodeName) && t.parentNode && r("Can't change the 'type' of an input or button in IE 6/7/8"), !e.attrHooks[c] && p.test(c) && (e.attrHooks[c] = { get: function (t, r) { var a, o = e.prop(t, r); return o === !0 || "boolean" != typeof o && (a = t.getAttributeNode(r)) && a.nodeValue !== !1 ? r.toLowerCase() : n }, set: function (t, n, r) { var a; return n === !1 ? e.removeAttr(t, r) : (a = e.propFix[r] || r, a in t && (t[a] = !0), t.setAttribute(r, r.toLowerCase())), r } }, f.test(c) && r("jQuery.fn.attr('" + c + "') may use property instead of attribute")), s.call(e, t, a, o)) }, e.attrHooks.value = { get: function (e, t) { var n = (e.nodeName || "").toLowerCase(); return "button" === n ? u.apply(this, arguments) : ("input" !== n && "option" !== n && r("jQuery.fn.attr('value') no longer gets properties"), t in e ? e.value : null) }, set: function (e, t) { var a = (e.nodeName || "").toLowerCase(); return "button" === a ? c.apply(this, arguments) : ("input" !== a && "option" !== a && r("jQuery.fn.attr('value', val) no longer sets properties"), e.value = t, n) } }; var g, h, v = e.fn.init, m = e.parseJSON, y = /^(?:[^<]*(<[\w\W]+>)[^>]*|#([\w\-]*))$/; e.fn.init = function (t, n, a) { var o; return t && "string" == typeof t && !e.isPlainObject(n) && (o = y.exec(t)) && o[1] && ("<" !== t.charAt(0) && r("$(html) HTML strings must start with '<' character"), n && n.context && (n = n.context), e.parseHTML) ? v.call(this, e.parseHTML(e.trim(t), n, !0), n, a) : v.apply(this, arguments) }, e.fn.init.prototype = e.fn, e.parseJSON = function (e) { return e || null === e ? m.apply(this, arguments) : (r("jQuery.parseJSON requires a valid JSON string"), null) }, e.uaMatch = function (e) { e = e.toLowerCase(); var t = /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version|)[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 > e.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e) || []; return { browser: t[1] || "", version: t[2] || "0" } }, e.browser || (g = e.uaMatch(navigator.userAgent), h = {}, g.browser && (h[g.browser] = !0, h.version = g.version), h.chrome ? h.webkit = !0 : h.webkit && (h.safari = !0), e.browser = h), a(e, "browser", e.browser, "jQuery.browser is deprecated"), e.sub = function () { function t(e, n) { return new t.fn.init(e, n) } e.extend(!0, t, this), t.superclass = this, t.fn = t.prototype = this(), t.fn.constructor = t, t.sub = this.sub, t.fn.init = function (r, a) { return a && a instanceof e && !(a instanceof t) && (a = t(a)), e.fn.init.call(this, r, a, n) }, t.fn.init.prototype = t.fn; var n = t(document); return r("jQuery.sub() is deprecated"), t }, e.ajaxSetup({ converters: { "text json": e.parseJSON } }); var b = e.fn.data; e.fn.data = function (t) { var a, o, i = this[0]; return !i || "events" !== t || 1 !== arguments.length || (a = e.data(i, t), o = e._data(i, t), a !== n && a !== o || o === n) ? b.apply(this, arguments) : (r("Use of jQuery.fn.data('events') is deprecated"), o) }; var j = /\/(java|ecma)script/i, w = e.fn.andSelf || e.fn.addBack; e.fn.andSelf = function () { return r("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), w.apply(this, arguments) }, e.clean || (e.clean = function (t, a, o, i) { a = a || document, a = !a.nodeType && a[0] || a, a = a.ownerDocument || a, r("jQuery.clean() is deprecated"); var s, u, c, l, d = []; if (e.merge(d, e.buildFragment(t, a).childNodes), o) for (c = function (e) { return !e.type || j.test(e.type) ? i ? i.push(e.parentNode ? e.parentNode.removeChild(e) : e) : o.appendChild(e) : n }, s = 0; null != (u = d[s]) ; s++) e.nodeName(u, "script") && c(u) || (o.appendChild(u), u.getElementsByTagName !== n && (l = e.grep(e.merge([], u.getElementsByTagName("script")), c), d.splice.apply(d, [s + 1, 0].concat(l)), s += l.length)); return d }); var Q = e.event.add, x = e.event.remove, k = e.event.trigger, N = e.fn.toggle, C = e.fn.live, S = e.fn.die, T = "ajaxStart|ajaxStop|ajaxSend|ajaxComplete|ajaxError|ajaxSuccess", M = RegExp("\\b(?:" + T + ")\\b"), H = /(?:^|\s)hover(\.\S+|)\b/, A = function (t) { return "string" != typeof t || e.event.special.hover ? t : (H.test(t) && r("'hover' pseudo-event is deprecated, use 'mouseenter mouseleave'"), t && t.replace(H, "mouseenter$1 mouseleave$1")) }; e.event.props && "attrChange" !== e.event.props[0] && e.event.props.unshift("attrChange", "attrName", "relatedNode", "srcElement"), e.event.dispatch && a(e.event, "handle", e.event.dispatch, "jQuery.event.handle is undocumented and deprecated"), e.event.add = function (e, t, n, a, o) { e !== document && M.test(t) && r("AJAX events should be attached to document: " + t), Q.call(this, e, A(t || ""), n, a, o) }, e.event.remove = function (e, t, n, r, a) { x.call(this, e, A(t) || "", n, r, a) }, e.fn.error = function () { var e = Array.prototype.slice.call(arguments, 0); return r("jQuery.fn.error() is deprecated"), e.splice(0, 0, "error"), arguments.length ? this.bind.apply(this, e) : (this.triggerHandler.apply(this, e), this) }, e.fn.toggle = function (t, n) { if (!e.isFunction(t) || !e.isFunction(n)) return N.apply(this, arguments); r("jQuery.fn.toggle(handler, handler...) is deprecated"); var a = arguments, o = t.guid || e.guid++, i = 0, s = function (n) { var r = (e._data(this, "lastToggle" + t.guid) || 0) % i; return e._data(this, "lastToggle" + t.guid, r + 1), n.preventDefault(), a[r].apply(this, arguments) || !1 }; for (s.guid = o; a.length > i;) a[i++].guid = o; return this.click(s) }, e.fn.live = function (t, n, a) { return r("jQuery.fn.live() is deprecated"), C ? C.apply(this, arguments) : (e(this.context).on(t, this.selector, n, a), this) }, e.fn.die = function (t, n) { return r("jQuery.fn.die() is deprecated"), S ? S.apply(this, arguments) : (e(this.context).off(t, this.selector || "**", n), this) }, e.event.trigger = function (e, t, n, a) { return n || M.test(e) || r("Global events are undocumented and deprecated"), k.call(this, e, t, n || document, a) }, e.each(T.split("|"), function (t, n) { e.event.special[n] = { setup: function () { var t = this; return t !== document && (e.event.add(document, n + "." + e.guid, function () { e.event.trigger(n, null, t, !0) }), e._data(this, n, e.guid++)), !1 }, teardown: function () { return this !== document && e.event.remove(document, n + "." + e._data(this, n)), !1 } } }) }(jQuery, window);

/*
 jQuery Tools dev - The missing UI library for the Web

 dateinput/dateinput.js
 overlay/overlay.js
 overlay/overlay.apple.js
 rangeinput/rangeinput.js
 scrollable/scrollable.js
 scrollable/scrollable.autoscroll.js
 scrollable/scrollable.navigator.js
 tabs/tabs.js
 toolbox/toolbox.expose.js
 toolbox/toolbox.history.js
 toolbox/toolbox.mousewheel.js
 tooltip/tooltip.js
 tooltip/tooltip.slide.js

 NO COPYRIGHTS OR LICENSES. DO WHAT YOU LIKE.

 http://flowplayer.org/tools/

 jquery.event.wheel.js - rev 1
 Copyright (c) 2008, Three Dub Media (http://threedubmedia.com)
 Liscensed under the MIT License (MIT-LICENSE.txt)
 http://www.opensource.org/licenses/mit-license.php
 Created: 2008-07-01 | Updated: 2008-07-14

 -----

*/
(function (a, u) {
    function n(a, b) { a = "" + a; for (b = b || 2; a.length < b;) a = "0" + a; return a } function f(a, b, c, d) { var g = b.getDate(), e = b.getDay(), k = b.getMonth(), f = b.getFullYear(), g = { d: g, dd: n(g), ddd: m[d].shortDays[e], dddd: m[d].days[e], m: k + 1, mm: n(k + 1), mmm: m[d].shortMonths[k], mmmm: m[d].months[k], yy: String(f).slice(2), yyyy: f }; a = h[a](c, b, g, d); return q.html(a).html() } function d(a) { return parseInt(a, 10) } function c(a, b) { return a.getFullYear() === b.getFullYear() && a.getMonth() == b.getMonth() && a.getDate() == b.getDate() } function b(a) {
        if (a !==
        u) { if (a.constructor == Date) return a; if ("string" == typeof a) { var b = a.split("-"); if (3 == b.length) return new Date(d(b[0]), d(b[1]) - 1, d(b[2])); if (!/^-?\d+$/.test(a)) return; a = d(a) } b = new Date; b.setDate(b.getDate() + a); return b }
    } function e(e, h) {
        function k(b, c, d) {
            e.attr("readonly") ? l.hide(d) : (C = b, K = b.getFullYear(), M = b.getMonth(), L = b.getDate(), d || (d = a.Event("api")), "click" != d.type || a.browser.msie || e.focus(), d.type = "beforeChange", N.trigger(d, [b]), d.isDefaultPrevented() || (e.val(f(c.formatter, b, c.format, c.lang)),
            d.type = "change", N.trigger(d), e.data("date", b), l.hide(d)))
        } function v(b) {
            b.type = "onShow"; N.trigger(b); a(document).on("keydown.d", function (b) {
                if (b.ctrlKey) return !0; var c = b.keyCode; if (8 == c || 46 == c) return e.val(""), l.hide(b); if (27 == c || 9 == c) return l.hide(b); if (0 <= a(r).index(c)) {
                    if (!F) return l.show(b), b.preventDefault(); var d = a("#" + p.weeks + " a"), h = a("." + p.focus), g = d.index(h); h.removeClass(p.focus); if (74 == c || 40 == c) g += 7; else if (75 == c || 38 == c) g -= 7; else if (76 == c || 39 == c) g += 1; else if (72 == c || 37 == c) g -= 1; 41 < g ? (l.addMonth(),
                    h = a("#" + p.weeks + " a:eq(" + (g - 42) + ")")) : 0 > g ? (l.addMonth(-1), h = a("#" + p.weeks + " a:eq(" + (g + 42) + ")")) : h = d.eq(g); h.addClass(p.focus); return b.preventDefault()
                } if (34 == c) return l.addMonth(); if (33 == c) return l.addMonth(-1); if (36 == c) return l.today(); 13 == c && (a(b.target).is("select") || a("." + p.focus).click()); return 0 <= a([16, 17, 18, 9]).index(c)
            }); a(document).on("click.d", function (b) { var c = b.target; c.id == p.root || a(c).parents("#" + p.root).length || (c == e[0] || x && c == x[0]) || l.hide(b) })
        } var l = this, q = new Date, t = q.getFullYear(),
        p = h.css, n = m[h.lang], w = a("#" + p.root), E = w.find("#" + p.title), x, G, H, K, M, L, C = e.attr("data-value") || h.value || e.val(), z = e.attr("min") || h.min, D = e.attr("max") || h.max, F, O; 0 === z && (z = "0"); C = b(C) || q; z = b(z || new Date(t + h.yearRange[0], 1, 1)); D = b(D || new Date(t + h.yearRange[1] + 1, 1, -1)); if (!n) throw "Dateinput: invalid language: " + h.lang; "date" == e.attr("type") && (O = e.clone(), t = O.wrap("<div/>").parent().html(), t = a(t.replace(/type/i, "type=text data-orig-type")), h.value && t.val(h.value), e.replaceWith(t), e = t); e.addClass(p.input);
        var N = e.add(l); if (!w.length) {
            w = a("<div><div><a/><div/><a/></div><div><div/><div/></div></div>").hide().css({ position: "absolute" }).attr("id", p.root); w.children().eq(0).attr("id", p.head).end().eq(1).attr("id", p.body).children().eq(0).attr("id", p.days).end().eq(1).attr("id", p.weeks).end().end().end().find("a").eq(0).attr("id", p.prev).end().eq(1).attr("id", p.next); E = w.find("#" + p.head).find("div").attr("id", p.title); if (h.selectors) {
                var I = a("<select/>").attr("id", p.month), J = a("<select/>").attr("id", p.year);
                E.html(I.add(J))
            } for (var t = w.find("#" + p.days), R = 0; 7 > R; R++) t.append(a("<span/>").text(n.shortDays[(R + h.firstDay) % 7])); a("body").append(w)
        } h.trigger && (x = a("<a/>").attr("href", "#").addClass(p.trigger).click(function (a) { h.toggle ? l.toggle() : l.show(); return a.preventDefault() }).insertAfter(e)); var P = w.find("#" + p.weeks), J = w.find("#" + p.year), I = w.find("#" + p.month); a.extend(l, {
            show: function (b) {
                if (!e.attr("disabled") && !F && (b = a.Event(), b.type = "onBeforeShow", N.trigger(b), !b.isDefaultPrevented())) {
                    a.each(g, function () { this.hide() });
                    F = !0; I.off("change").change(function () { l.setValue(d(J.val()), d(a(this).val())) }); J.off("change").change(function () { l.setValue(d(a(this).val()), d(I.val())) }); G = w.find("#" + p.prev).off("click").click(function (a) { G.hasClass(p.disabled) || l.addMonth(-1); return !1 }); H = w.find("#" + p.next).off("click").click(function (a) { H.hasClass(p.disabled) || l.addMonth(); return !1 }); l.setValue(C); var c = e.offset(); /iPad/i.test(navigator.userAgent) && (c.top -= a(window).scrollTop()); w.css({
                        top: c.top + e.outerHeight(!0) + h.offset[0],
                        left: c.left + h.offset[1]
                    }); h.speed ? w.show(h.speed, function () { v(b) }) : (w.show(), v(b)); return l
                }
            }, setValue: function (g, e, v) {
                var f = -1 <= d(e) ? new Date(d(g), d(e), d(v == u || isNaN(v) ? 1 : v)) : g || C; f < z ? f = z : f > D && (f = D); "string" == typeof g && (f = b(g)); g = f.getFullYear(); e = f.getMonth(); v = f.getDate(); -1 == e ? (e = 11, g--) : 12 == e && (e = 0, g++); if (!F) return k(f, h), l; M = e; K = g; L = v; v = (new Date(g, e, 1 - h.firstDay)).getDay(); var s = (new Date(g, e + 1, 0)).getDate(), r = (new Date(g, e - 1 + 1, 0)).getDate(), t; if (h.selectors) {
                    I.empty(); a.each(n.months, function (b,
                    c) { z < new Date(g, b + 1, 1) && D > new Date(g, b, 0) && I.append(a("<option/>").html(c).attr("value", b)) }); J.empty(); for (var f = q.getFullYear(), m = f + h.yearRange[0]; m < f + h.yearRange[1]; m++) z < new Date(m + 1, 0, 1) && D > new Date(m, 0, 0) && J.append(a("<option/>").text(m)); I.val(e); J.val(g)
                } else E.html(n.months[e] + " " + g); P.empty(); G.add(H).removeClass(p.disabled); for (var m = v ? 0 : -7, w, x; m < (v ? 42 : 35) ; m++) w = a("<a/>"), 0 === m % 7 && (t = a("<div/>").addClass(p.week), P.append(t)), m < v ? (w.addClass(p.off), x = r - v + m + 1, f = new Date(g, e - 1, x)) : m >= v + s ?
                (w.addClass(p.off), x = m - s - v + 1, f = new Date(g, e + 1, x)) : (x = m - v + 1, f = new Date(g, e, x), c(C, f) ? w.attr("id", p.current).addClass(p.focus) : c(q, f) && w.attr("id", p.today)), z && f < z && w.add(G).addClass(p.disabled), D && f > D && w.add(H).addClass(p.disabled), w.attr("href", "#" + x).text(x).data("date", f), t.append(w); P.find("a").click(function (b) { var c = a(this); c.hasClass(p.disabled) || (a("#" + p.current).removeAttr("id"), c.attr("id", p.current), k(c.data("date"), h, b)); return !1 }); p.sunday && P.find("." + p.week).each(function () {
                    var b = h.firstDay ?
                    7 - h.firstDay : 0; a(this).children().slice(b, b + 1).addClass(p.sunday)
                }); return l
            }, setMin: function (a, c) { z = b(a); c && C < z && l.setValue(z); return l }, setMax: function (a, c) { D = b(a); c && C > D && l.setValue(D); return l }, today: function () { return l.setValue(q) }, addDay: function (a) { return this.setValue(K, M, L + (a || 1)) }, addMonth: function (a) { a = M + (a || 1); var b = (new Date(K, a + 1, 0)).getDate(); return this.setValue(K, a, L <= b ? L : b) }, addYear: function (a) { return this.setValue(K + (a || 1), M, L) }, destroy: function () {
                e.add(document).off("click.d keydown.d");
                w.add(x).remove(); e.removeData("dateinput").removeClass(p.input); O && e.replaceWith(O)
            }, hide: function (b) { if (F) { b = a.Event(); b.type = "onHide"; N.trigger(b); if (b.isDefaultPrevented()) return; a(document).off("click.d keydown.d"); w.hide(); F = !1 } return l }, toggle: function () { return l.isOpen() ? l.hide() : l.show() }, getConf: function () { return h }, getInput: function () { return e }, getCalendar: function () { return w }, getValue: function (a) { return a ? f(h.formatter, C, a, h.lang) : C }, isOpen: function () { return F }
        }); a.each(["onBeforeShow",
        "onShow", "change", "onHide"], function (b, c) { if (a.isFunction(h[c])) a(l).on(c, h[c]); l[c] = function (b) { if (b) a(l).on(c, b); return l } }); h.editable || e.on("focus.d click.d", l.show).keydown(function (b) { var c = b.keyCode; if (!F && 0 <= a(r).index(c)) return l.show(b), b.preventDefault(); 8 != c && 46 != c || e.val(""); return b.shiftKey || b.ctrlKey || b.altKey || 9 == c ? !0 : b.preventDefault() }); b(e.val()) && k(C, h)
    } a.tools = a.tools || { version: "1.2.8-dev" }; var g = [], h = {}, k, r = [75, 76, 38, 39, 74, 72, 40, 37], m = {}; k = a.tools.dateinput = {
        conf: {
            format: "mm/dd/yy",
            formatter: "default", selectors: !1, yearRange: [-5, 5], lang: "en", offset: [0, 0], speed: 0, firstDay: 0, min: u, max: u, trigger: 0, toggle: 0, editable: 0, css: { prefix: "cal", input: "date", root: 0, head: 0, title: 0, prev: 0, next: 0, month: 0, year: 0, days: 0, body: 0, weeks: 0, today: 0, current: 0, week: 0, off: 0, sunday: 0, focus: 0, disabled: 0, trigger: 0 }
        }, addFormatter: function (a, b) { h[a] = b }, localize: function (b, c) { a.each(c, function (a, b) { c[a] = b.split(",") }); m[b] = c }
    }; k.localize("en", {
        months: "January,February,March,April,May,June,July,August,September,October,November,December",
        shortMonths: "Jan,Feb,Mar,Apr,May,Jun,Jul,Aug,Sep,Oct,Nov,Dec", days: "Sunday,Monday,Tuesday,Wednesday,Thursday,Friday,Saturday", shortDays: "Sun,Mon,Tue,Wed,Thu,Fri,Sat"
    }); var q = a("<a/>"); k.addFormatter("default", function (a, b, c, d) { return a.replace(/d{1,4}|m{1,4}|yy(?:yy)?|"[^"]*"|'[^']*'/g, function (a) { return a in c ? c[a] : a }) }); k.addFormatter("prefixed", function (a, b, c, d) { return a.replace(/%(d{1,4}|m{1,4}|yy(?:yy)?|"[^"]*"|'[^']*')/g, function (a, b) { return b in c ? c[b] : a }) }); a.expr[":"].date = function (b) {
        var c =
        b.getAttribute("type"); return c && "date" == c || !!a(b).data("dateinput")
    }; a.fn.dateinput = function (b) { if (this.data("dateinput")) return this; b = a.extend(!0, {}, k.conf, b); a.each(b.css, function (a, c) { c || "prefix" == a || (b.css[a] = (b.css.prefix || "") + (c || a)) }); var c; this.each(function () { var d = new e(a(this), b); g.push(d); d = d.getInput().data("dateinput", d); c = c ? c.add(d) : d }); return c ? c : this }
})(jQuery);
(function (a) {
    function u(d, c) {
        var b = this, e = d.add(b), g = a(window), h, k, r, m = a.tools.expose && (c.mask || c.expose), q = Math.random().toString().slice(10); m && ("string" == typeof m && (m = { color: m }), m.closeOnClick = m.closeOnEsc = !1); var s = c.target || d.attr("rel"); k = s ? a(s) : d; if (!k.length) throw "Could not find Overlay: " + s; d && -1 == d.index(k) && d.click(function (a) { b.load(a); return a.preventDefault() }); a.extend(b, {
            load: function (d) {
                if (b.isOpened()) return b; var h = f[c.effect]; if (!h) throw 'Overlay: cannot find effect : "' + c.effect +
                '"'; c.oneInstance && a.each(n, function () { this.close(d) }); d = d || a.Event(); d.type = "onBeforeLoad"; e.trigger(d); if (d.isDefaultPrevented()) return b; r = !0; m && a(k).expose(m); var v = c.top, l = c.left, s = k.outerWidth(!0), t = k.outerHeight(!0); "string" == typeof v && (v = "center" == v ? Math.max((g.height() - t) / 2, 0) : parseInt(v, 10) / 100 * g.height()); "center" == l && (l = Math.max((g.width() - s) / 2, 0)); h[0].call(b, { top: v, left: l }, function () { r && (d.type = "onLoad", e.trigger(d)) }); if (m && c.closeOnClick) a.mask.getMask().one("click", b.close); if (c.closeOnClick) a(document).on("click." +
                q, function (c) { a(c.target).parents(k).length || b.close(c) }); if (c.closeOnEsc) a(document).on("keydown." + q, function (a) { 27 == a.keyCode && b.close(a) }); return b
            }, close: function (d) { if (!b.isOpened()) return b; d = a.Event(); d.type = "onBeforeClose"; e.trigger(d); if (!d.isDefaultPrevented()) return r = !1, f[c.effect][1].call(b, function () { d.type = "onClose"; e.trigger(d) }), a(document).off("click." + q + " keydown." + q), m && a.mask.close(), b }, getOverlay: function () { return k }, getTrigger: function () { return d }, getClosers: function () { return h },
            isOpened: function () { return r }, getConf: function () { return c }
        }); a.each(["onBeforeLoad", "onStart", "onLoad", "onBeforeClose", "onClose"], function (d, g) { if (a.isFunction(c[g])) a(b).on(g, c[g]); b[g] = function (c) { if (c) a(b).on(g, c); return b } }); h = k.find(c.close || ".close"); h.length || c.close || (h = a('<a class="close"></a>'), k.prepend(h)); h.click(function (a) { b.close(a) }); c.load && b.load()
    } a.tools = a.tools || { version: "1.2.8-dev" }; a.tools.overlay = {
        addEffect: function (a, c, b) { f[a] = [c, b] }, conf: {
            close: null, closeOnClick: !0, closeOnEsc: !0,
            closeSpeed: "fast", effect: "default", fixed: !a.browser.msie || 6 < a.browser.version, left: "center", load: !1, mask: null, oneInstance: !0, speed: "normal", target: null, top: "10%"
        }
    }; var n = [], f = {}; a.tools.overlay.addEffect("default", function (d, c) { var b = this.getConf(), e = a(window); b.fixed || (d.top += e.scrollTop(), d.left += e.scrollLeft()); d.position = b.fixed ? "fixed" : "absolute"; this.getOverlay().css(d).fadeIn(b.speed, c) }, function (a) { this.getOverlay().fadeOut(this.getConf().closeSpeed, a) }); a.fn.overlay = function (d) {
        var c = this.data("overlay");
        if (c) return c; a.isFunction(d) && (d = { onBeforeLoad: d }); d = a.extend(!0, {}, a.tools.overlay.conf, d); this.each(function () { c = new u(a(this), d); n.push(c); a(this).data("overlay", c) }); return d.api ? c : this
    }
})(jQuery);
(function (a) {
    function u(a) { var c = a.offset(); return { top: c.top + a.height() / 2, left: c.left + a.width() / 2 } } var n = a.tools.overlay, f = a(window); a.extend(n.conf, { start: { top: null, left: null }, fadeInSpeed: "fast", zIndex: 9999 }); n.addEffect("apple", function (d, c) {
        var b = this.getOverlay(), e = this.getConf(), g = this.getTrigger(), h = this, k = b.outerWidth(!0), r = b.data("img"), m = e.fixed ? "fixed" : "absolute"; if (!r) {
            r = b.css("backgroundImage"); if (!r) throw "background-image CSS property not set for overlay"; r = r.slice(r.indexOf("(") + 1, r.indexOf(")")).replace(/\"/g,
            ""); b.css("backgroundImage", "none"); r = a('<img src="' + r + '"/>'); r.css({ border: 0, display: "none" }).width(k); a("body").append(r); b.data("img", r)
        } var q = e.start.top || Math.round(f.height() / 2), s = e.start.left || Math.round(f.width() / 2); g && (g = u(g), q = g.top, s = g.left); e.fixed ? (q -= f.scrollTop(), s -= f.scrollLeft()) : (d.top += f.scrollTop(), d.left += f.scrollLeft()); r.css({ position: "absolute", top: q, left: s, width: 0, zIndex: e.zIndex }).show(); d.position = m; b.css(d); r.animate({ top: d.top, left: d.left, width: k }, e.speed, function () {
            b.css("zIndex",
            e.zIndex + 1).fadeIn(e.fadeInSpeed, function () { h.isOpened() && !a(this).index(b) ? c.call() : b.hide() })
        }).css("position", m)
    }, function (d) { var c = this.getOverlay().hide(), b = this.getConf(), e = this.getTrigger(), c = c.data("img"), g = { top: b.start.top, left: b.start.left, width: 0 }; e && a.extend(g, u(e)); b.fixed && c.css({ position: "absolute" }).animate({ top: "+=" + f.scrollTop(), left: "+=" + f.scrollLeft() }, 0); c.animate(g, b.closeSpeed, d) })
})(jQuery);
(function (a) {
    function u(a, b) { var c = Math.pow(10, b); return Math.round(a * c) / c } function n(a, b) { var c = parseInt(a.css(b), 10); return c ? c : (c = a[0].currentStyle) && c.width && parseInt(c.width, 10) } function f(a) { return (a = a.data("events")) && a.onSlide } function d(b, c) {
        function d(a, e, f, l) {
            void 0 === f ? f = e / B * Q : l && (f -= c.min); w && (f = Math.round(f / w) * w); if (void 0 === e || w) e = f * B / Q; if (isNaN(f)) return q; e = Math.max(0, Math.min(e, B)); f = e / B * Q; if (l || !A) f += c.min; A && (l ? e = B - e : f = c.max - f); f = u(f, E); var k = "click" == a.type; if (H && (void 0 !== v &&
            !k) && (a.type = "onSlide", G.trigger(a, [f, e]), a.isDefaultPrevented())) return q; l = k ? c.speed : 0; k = k ? function () { a.type = "change"; G.trigger(a, [f]) } : null; A ? (t.animate({ top: e }, l, k), c.progress && p.animate({ height: B - e + t.height() / 2 }, l)) : (t.animate({ left: e }, l, k), c.progress && p.animate({ width: e + t.width() / 2 }, l)); v = f; b.val(f); return q
        } function e() { (A = c.vertical || n(y, "height") > n(y, "width")) ? (B = n(y, "height") - n(t, "height"), l = y.offset().top + B) : (B = n(y, "width") - n(t, "width"), l = y.offset().left) } function m() {
            e(); q.setValue(void 0 !==
            c.value ? c.value : c.min)
        } var q = this, s = c.css, y = a("<div><div/><a href='#'/></div>").data("rangeinput", q), A, v, l, B; b.before(y); var t = y.addClass(s.slider).find("a").addClass(s.handle), p = y.find("div").addClass(s.progress); a.each(["min", "max", "step", "value"], function (a, d) { var e = b.attr(d); parseFloat(e) && (c[d] = parseFloat(e, 10)) }); var Q = c.max - c.min, w = "any" == c.step ? 0 : c.step, E = c.precision; void 0 === E && (E = w.toString().split("."), E = 2 === E.length ? E[1].length : 0); if ("range" == b.attr("type")) {
            var x = b.clone().wrap("<div/>").parent().html(),
            x = a(x.replace(/type/i, "type=text data-orig-type")); x.val(c.value); b.replaceWith(x); b = x
        } b.addClass(s.input); var G = a(q).add(b), H = !0; a.extend(q, {
            getValue: function () { return v }, setValue: function (b, c) { e(); return d(c || a.Event("api"), void 0, b, !0) }, getConf: function () { return c }, getProgress: function () { return p }, getHandle: function () { return t }, getInput: function () { return b }, step: function (b, d) { d = d || a.Event(); q.setValue(v + ("any" == c.step ? 1 : c.step) * (b || 1), d) }, stepUp: function (a) { return q.step(a || 1) }, stepDown: function (a) {
                return q.step(-a ||
                -1)
            }
        }); a.each(["onSlide", "change"], function (b, d) { if (a.isFunction(c[d])) a(q).on(d, c[d]); q[d] = function (b) { if (b) a(q).on(d, b); return q } }); t.drag({ drag: !1 }).on("dragStart", function () { e(); H = f(a(q)) || f(b) }).on("drag", function (a, c, e) { if (b.is(":disabled")) return !1; d(a, A ? c : e) }).on("dragEnd", function (a) { a.isDefaultPrevented() || (a.type = "change", G.trigger(a, [v])) }).click(function (a) { return a.preventDefault() }); y.click(function (a) {
            if (b.is(":disabled") || a.target == t[0]) return a.preventDefault(); e(); var c = A ? t.height() /
            2 : t.width() / 2; d(a, A ? B - l - c + a.pageY : a.pageX - l - c)
        }); c.keyboard && b.keydown(function (c) { if (!b.attr("readonly")) { var d = c.keyCode, e = -1 != a([75, 76, 38, 33, 39]).index(d), h = -1 != a([74, 72, 40, 34, 37]).index(d); if ((e || h) && !(c.shiftKey || c.altKey || c.ctrlKey)) return e ? q.step(33 == d ? 10 : 1, c) : h && q.step(34 == d ? -10 : -1, c), c.preventDefault() } }); b.blur(function (b) { var c = a(this).val(); c !== v && q.setValue(c, b) }); a.extend(b[0], { stepUp: q.stepUp, stepDown: q.stepDown }); m(); B || a(window).load(m)
    } a.tools = a.tools || { version: "1.2.8-dev" }; var c;
    c = a.tools.rangeinput = { conf: { min: 0, max: 100, step: "any", steps: 0, value: 0, precision: void 0, vertical: 0, keyboard: !0, progress: !1, speed: 100, css: { input: "range", slider: "slider", progress: "progress", handle: "handle" } } }; var b, e; a.fn.drag = function (c) {
        document.ondragstart = function () { return !1 }; c = a.extend({ x: !0, y: !0, drag: !0 }, c); b = b || a(document).on("mousedown mouseup", function (d) {
            var f = a(d.target); if ("mousedown" == d.type && f.data("drag")) {
                var r = f.position(), m = d.pageX - r.left, q = d.pageY - r.top, s = !0; b.on("mousemove.drag", function (a) {
                    var b =
                    a.pageX - m; a = a.pageY - q; var d = {}; c.x && (d.left = b); c.y && (d.top = a); s && (f.trigger("dragStart"), s = !1); c.drag && f.css(d); f.trigger("drag", [a, b]); e = f
                }); d.preventDefault()
            } else try { e && e.trigger("dragEnd") } finally { b.off("mousemove.drag"), e = null }
        }); return this.data("drag", !0)
    }; a.expr[":"].range = function (b) { var c = b.getAttribute("type"); return c && "range" == c || !!a(b).filter("input").data("rangeinput") }; a.fn.rangeinput = function (b) {
        if (this.data("rangeinput")) return this; b = a.extend(!0, {}, c.conf, b); var e; this.each(function () {
            var c =
            new d(a(this), a.extend(!0, {}, b)), c = c.getInput().data("rangeinput", c); e = e ? e.add(c) : c
        }); return e ? e : this
    }
})(jQuery);
(function (a) {
    function u(d, c) { var b = a(c); return 2 > b.length ? b : d.parent().find(c) } function n(d, c) {
        var b = this, e = d.add(b), g = d.children(), h = 0, k = c.vertical; f || (f = b); 1 < g.length && (g = a(c.items, d)); 1 < c.size && (c.circular = !1); a.extend(b, {
            getConf: function () { return c }, getIndex: function () { return h }, getSize: function () { return b.getItems().size() }, getNaviButtons: function () { return q.add(s) }, getRoot: function () { return d }, getItemWrap: function () { return g }, getItems: function () { return g.find(c.item).not("." + c.clonedClass) },
            getCircularClones: function () { return g.find(c.item).filter("." + c.clonedClass) }, move: function (a, c) { return b.seekTo(h + a, c) }, next: function (a) { return b.move(c.size, a) }, prev: function (a) { return b.move(-c.size, a) }, begin: function (a) { return b.seekTo(0, a) }, end: function (a) { return b.seekTo(b.getSize() - 1, a) }, focus: function () { return f = b }, addItem: function (d) {
                d = a(d); c.circular ? (g.children().last().before(d), b.getCircularClones().first().replaceWith(d.clone().addClass(c.clonedClass))) : (g.append(d), s.removeClass("disabled"));
                e.trigger("onAddItem", [d]); return b
            }, removeItem: function (a) { e.trigger("onRemoveItem", [a]); var d = b.getItems(), g; a.jquery ? b.getItems().index(g) : (g = 1 * a, a = b.getItems().eq(g)); c.circular ? (a.remove(), d = b.getItems(), a = b.getCircularClones(), a.first().replaceWith(d.last().clone().addClass("cloned")), a.last().replaceWith(d.first().clone().addClass("cloned"))) : (a.remove(), b.getItems()); h >= b.getSize() && (h -= 1, b.move(1)); return b }, seekTo: function (d, l, q) {
                d.jquery || (d *= 1); if (c.circular && 0 === d && -1 == h && 0 !== l || !c.circular &&
                0 > d || d > b.getSize() || -1 > d) return b; var m = d; d.jquery ? d = b.getItems().index(d) : m = b.getItems().eq(d); var s = a.Event("onBeforeSeek"); if (!q && (e.trigger(s, [d, l]), s.isDefaultPrevented() || !m.length)) return b; m = k ? { top: -m.position().top } : { left: -m.position().left }; h = d; f = b; void 0 === l && (l = c.speed); g.animate(m, l, c.easing, q || function () { e.trigger("onSeek", [d]) }); return b
            }
        }); a.each(["onBeforeSeek", "onSeek", "onAddItem", "onRemoveItem"], function (d, e) {
            if (a.isFunction(c[e])) a(b).on(e, c[e]); b[e] = function (c) {
                if (c) a(b).on(e,
                c); return b
            }
        }); if (c.circular) {
            var r = b.getItems().slice(-1).clone().prependTo(g), m = b.getItems().eq(1).clone().appendTo(g); r.add(m).addClass(c.clonedClass); b.onBeforeSeek(function (a, c, d) { if (!a.isDefaultPrevented()) { var e = b.getCircularClones(); if (-1 == c) return b.seekTo(e.first(), d, function () { b.end(0) }), a.preventDefault(); c == b.getSize() && b.seekTo(e.last(), d, function () { b.begin(0) }) } }); r = d.parents().add(d).filter(function () { if ("none" === a(this).css("display")) return !0 }); r.length ? (r.show(), b.seekTo(0, 0, function () { }),
            r.hide()) : b.seekTo(0, 0, function () { })
        } var q = u(d, c.prev).click(function (a) { a.stopPropagation(); b.prev() }), s = u(d, c.next).click(function (a) { a.stopPropagation(); b.next() }); c.circular || (b.onBeforeSeek(function (a, d) { setTimeout(function () { a.isDefaultPrevented() || (q.toggleClass(c.disabledClass, 0 >= d), s.toggleClass(c.disabledClass, d >= b.getSize() - 1)) }, 1) }), c.initialIndex || q.addClass(c.disabledClass)); 2 > b.getSize() && q.add(s).addClass(c.disabledClass); c.mousewheel && a.fn.mousewheel && d.mousewheel(function (a, d) {
            if (c.mousewheel) return b.move(0 >
            d ? 1 : -1, c.wheelSpeed || 50), !1
        }); if (c.touch) { var n, A; g[0].ontouchstart = function (a) { a = a.touches[0]; n = a.clientX; A = a.clientY }; g[0].ontouchmove = function (a) { if (1 == a.touches.length && !g.is(":animated")) { var c = a.touches[0], d = n - c.clientX, c = A - c.clientY; b[k && 0 < c || !k && 0 < d ? "next" : "prev"](); a.preventDefault() } } } if (c.keyboard) a(document).on("keydown.scrollable", function (d) {
            if (!(!c.keyboard || (d.altKey || d.ctrlKey || d.metaKey || a(d.target).is(":input")) || "static" != c.keyboard && f != b)) {
                var e = d.keyCode; if (k && (38 == e || 40 == e)) return b.move(38 ==
                e ? -1 : 1), d.preventDefault(); if (!k && (37 == e || 39 == e)) return b.move(37 == e ? -1 : 1), d.preventDefault()
            }
        }); c.initialIndex && b.seekTo(c.initialIndex, 0, function () { })
    } a.tools = a.tools || { version: "1.2.8-dev" }; a.tools.scrollable = { conf: { activeClass: "active", circular: !1, clonedClass: "cloned", disabledClass: "disabled", easing: "swing", initialIndex: 0, item: "> *", items: ".items", keyboard: !0, mousewheel: !1, next: ".next", prev: ".prev", size: 1, speed: 400, vertical: !1, touch: !0, wheelSpeed: 0 } }; var f; a.fn.scrollable = function (d) {
        var c = this.data("scrollable");
        if (c) return c; d = a.extend({}, a.tools.scrollable.conf, d); this.each(function () { c = new n(a(this), d); a(this).data("scrollable", c) }); return d.api ? c : this
    }
})(jQuery);
(function (a) {
    var u = a.tools.scrollable; u.autoscroll = { conf: { autoplay: !0, interval: 3E3, autopause: !0 } }; a.fn.autoscroll = function (n) {
        "number" == typeof n && (n = { interval: n }); var f = a.extend({}, u.autoscroll.conf, n), d; this.each(function () {
            function c() { g && clearTimeout(g); g = setTimeout(function () { b.next() }, f.interval) } var b = a(this).data("scrollable"), e = b.getRoot(), g, h = !1; b && (d = b); b.play = function () { g || (h = !1, e.on("onSeek", c), c()) }; b.hoverPlay = function () { h || b.play() }; b.pause = function () {
                g = clearTimeout(g); e.off("onSeek",
                c)
            }; b.resume = function () { h || b.play() }; b.stop = function () { h = !0; b.pause() }; f.autopause && e.add(b.getNaviButtons()).hover(b.pause, b.resume); f.autoplay && b.play(); b.onRemoveItem(function (a, c) { 2 >= b.getSize() && b.stop() })
        }); return f.api ? d : this
    }
})(jQuery);
(function (a) {
    function u(f, d) { var c = a(d); return 2 > c.length ? c : f.parent().find(d) } var n = a.tools.scrollable; n.navigator = { conf: { navi: ".navi", naviItem: null, activeClass: "active", indexed: !1, idPrefix: null, history: !1 } }; a.fn.navigator = function (f) {
        "string" == typeof f && (f = { navi: f }); f = a.extend({}, n.navigator.conf, f); var d; this.each(function () {
            function c() { return g.find(f.naviItem || "> *") } function b(b) {
                var c = a("<" + (f.naviItem || "a") + "/>").click(function (c) {
                    a(this); e.seekTo(b); c.preventDefault(); n && history.pushState({ i: b },
                    "")
                }); 0 === b && c.addClass(k); f.indexed && c.text(b + 1); f.idPrefix && c.attr("id", f.idPrefix + b); return c.appendTo(g)
            } var e = a(this).data("scrollable"), g = f.navi.jquery ? f.navi : u(e.getRoot(), f.navi), h = e.getNaviButtons(), k = f.activeClass, n = f.history && !!history.pushState, m = e.getConf().size; e && (d = e); e.getNaviButtons = function () { return h.add(g) }; n && (history.pushState({ i: 0 }, ""), a(window).on("popstate", function (a) { (a = a.originalEvent.state) && e.seekTo(a.i) })); c().length ? c().click(function (b) {
                a(this); var d = c().index(this);
                e.seekTo(d); b.preventDefault(); n && history.pushState({ i: d }, "")
            }) : a.each(e.getItems(), function (a) { 0 == a % m && b(a) }); e.onBeforeSeek(function (a, b) { setTimeout(function () { if (!a.isDefaultPrevented()) { var d = b / m; c().eq(d).length && c().removeClass(k).eq(d).addClass(k) } }, 1) }); e.onAddItem(function (a, c) { var d = e.getItems().index(c); 0 == d % m && b(d) }); e.onRemoveItem(function (a, b) { var d = e.getItems().index(b); c().eq(d).remove(); c().removeClass(k).eq(d < e.getSize() - 1 ? d : 0).addClass(k) })
        }); return f.api ? d : this
    }
})(jQuery);
(function (a) {
    function u(c, b, d) {
        var g = this, f = c.add(this), k = c.find(d.tabs), r = b.jquery ? b : c.children(b), m; k.length || (k = c.children()); r.length || (r = c.parent().find(b)); r.length || (r = a(b)); a.extend(this, {
            click: function (b, s) {
                var r = k.eq(b), u = !c.data("tabs"); "string" == typeof b && b.replace("#", "") && (r = k.filter('[href*="' + b.replace("#", "") + '"]'), b = Math.max(k.index(r), 0)); if (d.rotate) { var v = k.length - 1; if (0 > b) return g.click(v, s); if (b > v) return g.click(0, s) } if (!r.length) { if (0 <= m) return g; b = d.initialIndex; r = k.eq(b) } if (b ===
                m) return g; s = s || a.Event(); s.type = "onBeforeClick"; f.trigger(s, [b]); if (!s.isDefaultPrevented()) return n[u ? d.initialEffect && d.effect || "default" : d.effect].call(g, b, function () { m = b; s.type = "onClick"; f.trigger(s, [b]) }), k.removeClass(d.current), r.addClass(d.current), g
            }, getConf: function () { return d }, getTabs: function () { return k }, getPanes: function () { return r }, getCurrentPane: function () { return r.eq(m) }, getCurrentTab: function () { return k.eq(m) }, getIndex: function () { return m }, next: function () { return g.click(m + 1) }, prev: function () {
                return g.click(m -
                1)
            }, destroy: function () { k.off(d.event).removeClass(d.current); r.find('a[href^="#"]').off("click.T"); return g }
        }); a.each(["onBeforeClick", "onClick"], function (b, c) { if (a.isFunction(d[c])) a(g).on(c, d[c]); g[c] = function (b) { if (b) a(g).on(c, b); return g } }); d.history && a.fn.history && (a.tools.history.init(k), d.event = "history"); k.each(function (b) { a(this).on(d.event, function (a) { g.click(b, a); return a.preventDefault() }) }); r.find('a[href^="#"]').on("click.T", function (b) { g.click(a(this).attr("href"), b) }); location.hash &&
        "a" == d.tabs && c.find('[href="' + location.hash.replace('"', "") + '"]').length ? g.click(location.hash) : (0 === d.initialIndex || 0 < d.initialIndex) && g.click(d.initialIndex)
    } a.tools = a.tools || { version: "1.2.8-dev" }; a.tools.tabs = { conf: { tabs: "a", current: "current", onBeforeClick: null, onClick: null, effect: "default", initialEffect: !1, initialIndex: 0, event: "click", rotate: !1, slideUpSpeed: 400, slideDownSpeed: 400, history: !1 }, addEffect: function (a, b) { n[a] = b } }; var n = {
        "default": function (a, b) { this.getPanes().hide().eq(a).show(); b.call() },
        fade: function (a, b) { var d = this.getConf(), g = d.fadeOutSpeed, f = this.getPanes(); g ? f.fadeOut(g) : f.hide(); f.eq(a).fadeIn(d.fadeInSpeed, b) }, slide: function (a, b) { var d = this.getConf(); this.getPanes().slideUp(d.slideUpSpeed); this.getPanes().eq(a).slideDown(d.slideDownSpeed, b) }, ajax: function (a, b) { this.getPanes().eq(0).load(this.getTabs().eq(a).attr("href"), b) }
    }, f, d; a.tools.tabs.addEffect("horizontal", function (c, b) {
        if (!f) {
            var e = this.getPanes().eq(c), g = this.getCurrentPane(); d || (d = this.getPanes().eq(0).width());
            f = !0; e.show(); g.animate({ width: 0 }, { step: function (a) { e.css("width", d - a) }, complete: function () { a(this).hide(); b.call(); f = !1 } }); g.length || (b.call(), f = !1)
        }
    }); a.fn.tabs = function (c, b) { var d = this.data("tabs"); d && (d.destroy(), this.removeData("tabs")); a.isFunction(b) && (b = { onBeforeClick: b }); b = a.extend({}, a.tools.tabs.conf, b); this.each(function () { d = new u(a(this), c, b); a(this).data("tabs", d) }); return b.api ? d : this }
})(jQuery);
(function (a) {
    function u() { if (a.browser.msie) { var b = a(document).height(), c = a(window).height(); return [window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth, 20 > b - c ? c : b] } return [a(document).width(), a(document).height()] } function n(b) { if (b) return b.call(a.mask) } a.tools = a.tools || { version: "1.2.8-dev" }; var f; f = a.tools.expose = {
        conf: {
            maskId: "exposeMask", loadSpeed: "slow", closeSpeed: "fast", closeOnClick: !0, closeOnEsc: !0, zIndex: 9998, opacity: 0.8, startOpacity: 0, color: "#fff", onLoad: null,
            onClose: null
        }
    }; var d, c, b, e, g; a.mask = {
        load: function (h, k) {
            if (b) return this; "string" == typeof h && (h = { color: h }); h = h || e; e = h = a.extend(a.extend({}, f.conf), h); d = a("#" + h.maskId); d.length || (d = a("<div/>").attr("id", h.maskId), a("body").append(d)); var r = u(); d.css({ position: "absolute", top: 0, left: 0, width: r[0], height: r[1], display: "none", opacity: h.startOpacity, zIndex: h.zIndex }); h.color && d.css("backgroundColor", h.color); if (!1 === n(h.onBeforeLoad)) return this; if (h.closeOnEsc) a(document).on("keydown.mask", function (b) {
                27 ==
                b.keyCode && a.mask.close(b)
            }); if (h.closeOnClick) d.on("click.mask", function (b) { a.mask.close(b) }); a(window).on("resize.mask", function () { a.mask.fit() }); k && k.length && (g = k.eq(0).css("zIndex"), a.each(k, function () { var b = a(this); /relative|absolute|fixed/i.test(b.css("position")) || b.css("position", "relative") }), c = k.css({ zIndex: Math.max(h.zIndex + 1, "auto" == g ? 0 : g) })); d.css({ display: "block" }).fadeTo(h.loadSpeed, h.opacity, function () { a.mask.fit(); n(h.onLoad); b = "full" }); b = !0; return this
        }, close: function () {
            if (b) {
                if (!1 ===
                n(e.onBeforeClose)) return this; d.fadeOut(e.closeSpeed, function () { c && c.css({ zIndex: g }); b = !1; n(e.onClose) }); a(document).off("keydown.mask"); d.off("click.mask"); a(window).off("resize.mask")
            } return this
        }, fit: function () { if (b) { var a = d.css("display"); d.css("display", "none"); var c = u(); d.css({ display: a, width: c[0], height: c[1] }) } }, getMask: function () { return d }, isLoaded: function (a) { return a ? "full" == b : b }, getConf: function () { return e }, getExposed: function () { return c }
    }; a.fn.mask = function (b) { a.mask.load(b); return this };
    a.fn.expose = function (b) { a.mask.load(b, this); return this }
})(jQuery);
(function (a) {
    function u(a) { if (a) { var c = f.contentWindow.document; c.open().close(); c.location.hash = a } } var n, f, d, c; a.tools = a.tools || { version: "1.2.8-dev" }; a.tools.history = {
        init: function (b) {
            c || (a.browser.msie && "8" > a.browser.version ? f || (f = a("<iframe/>").attr("src", "javascript:false;").hide().get(0), a("body").append(f), setInterval(function () { var b = f.contentWindow.document.location.hash; n !== b && a(window).trigger("hash", b) }, 100), u(location.hash || "#")) : setInterval(function () {
                var b = location.hash; b !== n && a(window).trigger("hash",
                b)
            }, 100), d = d ? d.add(b) : b, b.click(function (b) { var c = a(this).attr("href"); f && u(c); if ("#" != c.slice(0, 1)) return location.href = "#" + c, b.preventDefault() }), c = !0)
        }
    }; a(window).on("hash", function (b, c) { c ? d.filter(function () { var b = a(this).attr("href"); return b == c || b == c.replace("#", "") }).trigger("history", [c]) : d.eq(0).trigger("history", [c]); n = c }); a.fn.history = function (b) { a.tools.history.init(this); return this.on("history", b) }
})(jQuery);
(function (a) {
    function u(f) { switch (f.type) { case "mousemove": return a.extend(f.data, { clientX: f.clientX, clientY: f.clientY, pageX: f.pageX, pageY: f.pageY }); case "DOMMouseScroll": a.extend(f, f.data); f.delta = -f.detail / 3; break; case "mousewheel": f.delta = f.wheelDelta / 120 } f.type = "wheel"; return a.event.handle.call(this, f, f.delta) } a.fn.mousewheel = function (a) { return this[a ? "on" : "trigger"]("wheel", a) }; a.event.special.wheel = { setup: function () { a.event.add(this, n, u, {}) }, teardown: function () { a.event.remove(this, n, u) } }; var n =
    a.browser.mozilla ? "DOMMouseScroll" + ("1.9" > a.browser.version ? " mousemove" : "") : "mousewheel"
})(jQuery);
(function (a) {
    function u(d, c, b) { var e = b.relative ? d.position().top : d.offset().top, g = b.relative ? d.position().left : d.offset().left, f = b.position[0], e = e - (c.outerHeight() - b.offset[0]), g = g + (d.outerWidth() + b.offset[1]); /iPad/i.test(navigator.userAgent) && (e -= a(window).scrollTop()); var k = c.outerHeight() + d.outerHeight(); "center" == f && (e += k / 2); "bottom" == f && (e += k); f = b.position[1]; d = c.outerWidth() + d.outerWidth(); "center" == f && (g -= d / 2); "left" == f && (g -= d); return { top: e, left: g } } function n(d, c) {
        var b = this, e = d.add(b), g,
        h = 0, k = 0, n = d.attr("title"), m = d.attr("data-tooltip"), q = f[c.effect], s, y = d.is(":input"), A = y && d.is(":checkbox, :radio, select, :button, :submit"), v = d.attr("type"), l = c.events[v] || c.events[y ? A ? "widget" : "input" : "def"]; if (!q) throw 'Nonexistent effect "' + c.effect + '"'; l = l.split(/,\s*/); if (2 != l.length) throw "Tooltip: bad events configuration for " + v; d.on(l[0], function (a) { clearTimeout(h); c.predelay ? k = setTimeout(function () { b.show(a) }, c.predelay) : b.show(a) }).on(l[1], function (a) {
            clearTimeout(k); c.delay ? h = setTimeout(function () { b.hide(a) },
            c.delay) : b.hide(a)
        }); n && c.cancelDefault && (d.removeAttr("title"), d.data("title", n)); a.extend(b, {
            show: function (f) {
                if (!g && (m ? g = a(m) : c.tip ? g = a(c.tip).eq(0) : n ? g = a(c.layout).addClass(c.tipClass).appendTo(document.body).hide().append(n) : (g = d.find("." + c.tipClass), g.length || (g = d.next()), g.length || (g = d.parent().next())), !g.length)) throw "Cannot find tooltip for " + d; if (b.isShown()) return b; g.stop(!0, !0); var t = u(d, g, c); c.tip && g.html(d.data("title")); f = a.Event(); f.type = "onBeforeShow"; e.trigger(f, [t]); if (f.isDefaultPrevented()) return b;
                t = u(d, g, c); g.css({ position: "absolute", top: t.top, left: t.left }); s = !0; q[0].call(b, function () { f.type = "onShow"; s = "full"; e.trigger(f) }); t = c.events.tooltip.split(/,\s*/); if (!g.data("__set")) { g.off(t[0]).on(t[0], function () { clearTimeout(h); clearTimeout(k) }); if (t[1] && !d.is("input:not(:checkbox, :radio), textarea")) g.off(t[1]).on(t[1], function (a) { a.relatedTarget != d[0] && d.trigger(l[1].split(" ")[0]) }); c.tip || g.data("__set", !0) } return b
            }, hide: function (d) {
                if (!g || !b.isShown()) return b; d = a.Event(); d.type = "onBeforeHide";
                e.trigger(d); if (!d.isDefaultPrevented()) return s = !1, f[c.effect][1].call(b, function () { d.type = "onHide"; e.trigger(d) }), b
            }, isShown: function (a) { return a ? "full" == s : s }, getConf: function () { return c }, getTip: function () { return g }, getTrigger: function () { return d }
        }); a.each(["onHide", "onBeforeShow", "onShow", "onBeforeHide"], function (d, e) { if (a.isFunction(c[e])) a(b).on(e, c[e]); b[e] = function (c) { if (c) a(b).on(e, c); return b } })
    } a.tools = a.tools || { version: "1.2.8-dev" }; a.tools.tooltip = {
        conf: {
            effect: "toggle", fadeOutSpeed: "fast",
            predelay: 0, delay: 30, opacity: 1, tip: 0, fadeIE: !1, position: ["top", "center"], offset: [0, 0], relative: !1, cancelDefault: !0, events: { def: "mouseenter,mouseleave", input: "focus,blur", widget: "focus mouseenter,blur mouseleave", tooltip: "mouseenter,mouseleave" }, layout: "<div/>", tipClass: "tooltip"
        }, addEffect: function (a, c, b) { f[a] = [c, b] }
    }; var f = {
        toggle: [function (a) { var c = this.getConf(), b = this.getTip(), c = c.opacity; 1 > c && b.css({ opacity: c }); b.show(); a.call() }, function (a) { this.getTip().hide(); a.call() }], fade: [function (d) {
            var c =
            this.getConf(); !a.browser.msie || c.fadeIE ? this.getTip().fadeTo(c.fadeInSpeed, c.opacity, d) : (this.getTip().show(), d())
        }, function (d) { var c = this.getConf(); !a.browser.msie || c.fadeIE ? this.getTip().fadeOut(c.fadeOutSpeed, d) : (this.getTip().hide(), d()) }]
    }; a.fn.tooltip = function (d) { d = a.extend(!0, {}, a.tools.tooltip.conf, d); "string" == typeof d.position && (d.position = d.position.split(/,?\s/)); this.each(function () { a(this).data("tooltip") || (api = new n(a(this), d), a(this).data("tooltip", api)) }); return d.api ? api : this }
})(jQuery);
(function (a) {
    var u = a.tools.tooltip; a.extend(u.conf, { direction: "up", bounce: !1, slideOffset: 10, slideInSpeed: 200, slideOutSpeed: 200, slideFade: !a.browser.msie }); var n = { up: ["-", "top"], down: ["+", "top"], left: ["-", "left"], right: ["+", "left"] }; u.addEffect("slide", function (a) { var d = this.getConf(), c = this.getTip(), b = d.slideFade ? { opacity: d.opacity } : {}, e = n[d.direction] || n.up; b[e[1]] = e[0] + "=" + d.slideOffset; d.slideFade && c.css({ opacity: 0 }); c.show().animate(b, d.slideInSpeed, a) }, function (f) {
        var d = this.getConf(), c = d.slideOffset,
        b = d.slideFade ? { opacity: 0 } : {}, e = n[d.direction] || n.up, g = "" + e[0]; d.bounce && (g = "+" == g ? "-" : "+"); b[e[1]] = g + "=" + c; this.getTip().animate(b, d.slideOutSpeed, function () { a(this).hide(); f.call() })
    })
})(jQuery);

/**
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 *
 * Open source under the BSD License.
 *
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 *
 * TERMS OF USE - EASING EQUATIONS
 *
 * Open source under the BSD License.
 *
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 *
 * Redistribution and use in source and binary forms, with or without modification,
 * are permitted provided that the following conditions are met:
 *
 * Redistributions of source code must retain the above copyright notice, this list of
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list
 * of conditions and the following disclaimer in the documentation and/or other materials
 * provided with the distribution.
 *
 * Neither the name of the author nor the names of contributors may be used to endorse
 * or promote products derived from this software without specific prior written permission.
 *
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED
 * OF THE POSSIBILITY OF SUCH DAMAGE.
 *
*/
jQuery.easing.jswing = jQuery.easing.swing; jQuery.extend(jQuery.easing, { def: "easeOutQuad", swing: function (e, f, a, h, g) { return jQuery.easing[jQuery.easing.def](e, f, a, h, g) }, easeInQuad: function (e, f, a, h, g) { return h * (f /= g) * f + a }, easeOutQuad: function (e, f, a, h, g) { return -h * (f /= g) * (f - 2) + a }, easeInOutQuad: function (e, f, a, h, g) { if ((f /= g / 2) < 1) { return h / 2 * f * f + a } return -h / 2 * ((--f) * (f - 2) - 1) + a }, easeInCubic: function (e, f, a, h, g) { return h * (f /= g) * f * f + a }, easeOutCubic: function (e, f, a, h, g) { return h * ((f = f / g - 1) * f * f + 1) + a }, easeInOutCubic: function (e, f, a, h, g) { if ((f /= g / 2) < 1) { return h / 2 * f * f * f + a } return h / 2 * ((f -= 2) * f * f + 2) + a }, easeInQuart: function (e, f, a, h, g) { return h * (f /= g) * f * f * f + a }, easeOutQuart: function (e, f, a, h, g) { return -h * ((f = f / g - 1) * f * f * f - 1) + a }, easeInOutQuart: function (e, f, a, h, g) { if ((f /= g / 2) < 1) { return h / 2 * f * f * f * f + a } return -h / 2 * ((f -= 2) * f * f * f - 2) + a }, easeInQuint: function (e, f, a, h, g) { return h * (f /= g) * f * f * f * f + a }, easeOutQuint: function (e, f, a, h, g) { return h * ((f = f / g - 1) * f * f * f * f + 1) + a }, easeInOutQuint: function (e, f, a, h, g) { if ((f /= g / 2) < 1) { return h / 2 * f * f * f * f * f + a } return h / 2 * ((f -= 2) * f * f * f * f + 2) + a }, easeInSine: function (e, f, a, h, g) { return -h * Math.cos(f / g * (Math.PI / 2)) + h + a }, easeOutSine: function (e, f, a, h, g) { return h * Math.sin(f / g * (Math.PI / 2)) + a }, easeInOutSine: function (e, f, a, h, g) { return -h / 2 * (Math.cos(Math.PI * f / g) - 1) + a }, easeInExpo: function (e, f, a, h, g) { return (f == 0) ? a : h * Math.pow(2, 10 * (f / g - 1)) + a }, easeOutExpo: function (e, f, a, h, g) { return (f == g) ? a + h : h * (-Math.pow(2, -10 * f / g) + 1) + a }, easeInOutExpo: function (e, f, a, h, g) { if (f == 0) { return a } if (f == g) { return a + h } if ((f /= g / 2) < 1) { return h / 2 * Math.pow(2, 10 * (f - 1)) + a } return h / 2 * (-Math.pow(2, -10 * --f) + 2) + a }, easeInCirc: function (e, f, a, h, g) { return -h * (Math.sqrt(1 - (f /= g) * f) - 1) + a }, easeOutCirc: function (e, f, a, h, g) { return h * Math.sqrt(1 - (f = f / g - 1) * f) + a }, easeInOutCirc: function (e, f, a, h, g) { if ((f /= g / 2) < 1) { return -h / 2 * (Math.sqrt(1 - f * f) - 1) + a } return h / 2 * (Math.sqrt(1 - (f -= 2) * f) + 1) + a }, easeInElastic: function (f, h, e, l, k) { var i = 1.70158; var j = 0; var g = l; if (h == 0) { return e } if ((h /= k) == 1) { return e + l } if (!j) { j = k * 0.3 } if (g < Math.abs(l)) { g = l; var i = j / 4 } else { var i = j / (2 * Math.PI) * Math.asin(l / g) } return -(g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e }, easeOutElastic: function (f, h, e, l, k) { var i = 1.70158; var j = 0; var g = l; if (h == 0) { return e } if ((h /= k) == 1) { return e + l } if (!j) { j = k * 0.3 } if (g < Math.abs(l)) { g = l; var i = j / 4 } else { var i = j / (2 * Math.PI) * Math.asin(l / g) } return g * Math.pow(2, -10 * h) * Math.sin((h * k - i) * (2 * Math.PI) / j) + l + e }, easeInOutElastic: function (f, h, e, l, k) { var i = 1.70158; var j = 0; var g = l; if (h == 0) { return e } if ((h /= k / 2) == 2) { return e + l } if (!j) { j = k * (0.3 * 1.5) } if (g < Math.abs(l)) { g = l; var i = j / 4 } else { var i = j / (2 * Math.PI) * Math.asin(l / g) } if (h < 1) { return -0.5 * (g * Math.pow(2, 10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j)) + e } return g * Math.pow(2, -10 * (h -= 1)) * Math.sin((h * k - i) * (2 * Math.PI) / j) * 0.5 + l + e }, easeInBack: function (e, f, a, i, h, g) { if (g == undefined) { g = 1.70158 } return i * (f /= h) * f * ((g + 1) * f - g) + a }, easeOutBack: function (e, f, a, i, h, g) { if (g == undefined) { g = 1.70158 } return i * ((f = f / h - 1) * f * ((g + 1) * f + g) + 1) + a }, easeInOutBack: function (e, f, a, i, h, g) { if (g == undefined) { g = 1.70158 } if ((f /= h / 2) < 1) { return i / 2 * (f * f * (((g *= (1.525)) + 1) * f - g)) + a } return i / 2 * ((f -= 2) * f * (((g *= (1.525)) + 1) * f + g) + 2) + a }, easeInBounce: function (e, f, a, h, g) { return h - jQuery.easing.easeOutBounce(e, g - f, 0, h, g) + a }, easeOutBounce: function (e, f, a, h, g) { if ((f /= g) < (1 / 2.75)) { return h * (7.5625 * f * f) + a } else { if (f < (2 / 2.75)) { return h * (7.5625 * (f -= (1.5 / 2.75)) * f + 0.75) + a } else { if (f < (2.5 / 2.75)) { return h * (7.5625 * (f -= (2.25 / 2.75)) * f + 0.9375) + a } else { return h * (7.5625 * (f -= (2.625 / 2.75)) * f + 0.984375) + a } } } }, easeInOutBounce: function (e, f, a, h, g) { if (f < g / 2) { return jQuery.easing.easeInBounce(e, f * 2, 0, h, g) * 0.5 + a } return jQuery.easing.easeOutBounce(e, f * 2 - g, 0, h, g) * 0.5 + h * 0.5 + a } });

/**
* hoverIntent r5 // 2007.03.27 // jQuery 1.1.2+
* <http://cherne.net/brian/resources/jquery.hoverIntent.html>
*
* @param  f  onMouseOver function || An object with configuration options
* @param  g  onMouseOut function  || Nothing (use configuration options object)
* @author    Brian Cherne <brian@cherne.net>
*/
(function ($) { $.fn.hoverIntent = function (f, g) { var cfg = { sensitivity: 7, interval: 100, timeout: 0 }; cfg = $.extend(cfg, g ? { over: f, out: g } : f); var cX, cY, pX, pY; var track = function (ev) { cX = ev.pageX; cY = ev.pageY; }; var compare = function (ev, ob) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); if ((Math.abs(pX - cX) + Math.abs(pY - cY)) < cfg.sensitivity) { $(ob).unbind("mousemove", track); ob.hoverIntent_s = 1; return cfg.over.apply(ob, [ev]); } else { pX = cX; pY = cY; ob.hoverIntent_t = setTimeout(function () { compare(ev, ob); }, cfg.interval); } }; var delay = function (ev, ob) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); ob.hoverIntent_s = 0; return cfg.out.apply(ob, [ev]); }; var handleHover = function (e) { var p = (e.type == "mouseover" ? e.fromElement : e.toElement) || e.relatedTarget; while (p && p != this) { try { p = p.parentNode; } catch (e) { p = this; } } if (p == this) { return false; } var ev = jQuery.extend({}, e); var ob = this; if (ob.hoverIntent_t) { ob.hoverIntent_t = clearTimeout(ob.hoverIntent_t); } if (e.type == "mouseover") { pX = ev.pageX; pY = ev.pageY; $(ob).bind("mousemove", track); if (ob.hoverIntent_s != 1) { ob.hoverIntent_t = setTimeout(function () { compare(ev, ob); }, cfg.interval); } } else { $(ob).unbind("mousemove", track); if (ob.hoverIntent_s == 1) { ob.hoverIntent_t = setTimeout(function () { delay(ev, ob); }, cfg.timeout); } } }; return this.mouseover(handleHover).mouseout(handleHover); }; })(jQuery);

/*
 * jQuery Color Animations
 * Copyright 2007 John Resig
 * Released under the MIT and GPL licenses.
 */
(function (d) { d.each(["backgroundColor", "borderBottomColor", "borderLeftColor", "borderRightColor", "borderTopColor", "color", "outlineColor"], function (f, e) { d.fx.step[e] = function (g) { if (g.state == 0) { g.start = c(g.elem, e); g.end = b(g.end) } g.elem.style[e] = "rgb(" + [Math.max(Math.min(parseInt((g.pos * (g.end[0] - g.start[0])) + g.start[0]), 255), 0), Math.max(Math.min(parseInt((g.pos * (g.end[1] - g.start[1])) + g.start[1]), 255), 0), Math.max(Math.min(parseInt((g.pos * (g.end[2] - g.start[2])) + g.start[2]), 255), 0)].join(",") + ")" } }); function b(f) { var e; if (f && f.constructor == Array && f.length == 3) { return f } if (e = /rgb\(\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*,\s*([0-9]{1,3})\s*\)/.exec(f)) { return [parseInt(e[1]), parseInt(e[2]), parseInt(e[3])] } if (e = /rgb\(\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*,\s*([0-9]+(?:\.[0-9]+)?)\%\s*\)/.exec(f)) { return [parseFloat(e[1]) * 2.55, parseFloat(e[2]) * 2.55, parseFloat(e[3]) * 2.55] } if (e = /#([a-fA-F0-9]{2})([a-fA-F0-9]{2})([a-fA-F0-9]{2})/.exec(f)) { return [parseInt(e[1], 16), parseInt(e[2], 16), parseInt(e[3], 16)] } if (e = /#([a-fA-F0-9])([a-fA-F0-9])([a-fA-F0-9])/.exec(f)) { return [parseInt(e[1] + e[1], 16), parseInt(e[2] + e[2], 16), parseInt(e[3] + e[3], 16)] } return a[d.trim(f).toLowerCase()] } function c(g, e) { var f; do { f = d.curCSS(g, e); if (f != "" && f != "transparent" || d.nodeName(g, "body")) { break } e = "backgroundColor" } while (g = g.parentNode); return b(f) } var a = { aqua: [0, 255, 255], azure: [240, 255, 255], beige: [245, 245, 220], black: [0, 0, 0], blue: [0, 0, 255], brown: [165, 42, 42], cyan: [0, 255, 255], darkblue: [0, 0, 139], darkcyan: [0, 139, 139], darkgrey: [169, 169, 169], darkgreen: [0, 100, 0], darkkhaki: [189, 183, 107], darkmagenta: [139, 0, 139], darkolivegreen: [85, 107, 47], darkorange: [255, 140, 0], darkorchid: [153, 50, 204], darkred: [139, 0, 0], darksalmon: [233, 150, 122], darkviolet: [148, 0, 211], fuchsia: [255, 0, 255], gold: [255, 215, 0], green: [0, 128, 0], indigo: [75, 0, 130], khaki: [240, 230, 140], lightblue: [173, 216, 230], lightcyan: [224, 255, 255], lightgreen: [144, 238, 144], lightgrey: [211, 211, 211], lightpink: [255, 182, 193], lightyellow: [255, 255, 224], lime: [0, 255, 0], magenta: [255, 0, 255], maroon: [128, 0, 0], navy: [0, 0, 128], olive: [128, 128, 0], orange: [255, 165, 0], pink: [255, 192, 203], purple: [128, 0, 128], violet: [128, 0, 128], red: [255, 0, 0], silver: [192, 192, 192], white: [255, 255, 255], yellow: [255, 255, 0] } })(jQuery);

/*
 * XenForo xenforo.min.js
 * Copyright 2010-2013 XenForo Ltd.
 * Released under the XenForo License Agreement: http://xenforo.com/license-agreement
 */
var XenForo = {}; jQuery === void 0 && (jQuery = $ = {}); $.tools === void 0 && console.error("jQuery Tools is not loaded."); (function (c) { var h, i = 0; if (!c.console) c.console = {}; if (c.console.log && !c.console.debug) c.console.debug = c.console.log; h = "assert,clear,count,debug,dir,dirxml,error,getFirebugElement,group,groupCollapsed,groupEnd,info,log,notifyFirebug,profile,profileEnd,time,timeEnd,trace,warn".split(","); for (i = 0; i < h.length; ++i) c.console[h[i]] || (c.console[h[i]] = function () { }) })(window);
(function (c, h, i) {
    var t = function () { var a; try { a = !!("ontouchstart" in h) } catch (b) { a = navigator.userAgent.indexOf("webOS") != -1 } return function () { return a } }(), o = c("html"); o.addClass("hasJs"); t() && o.addClass("Touch"); i.createElement("abbr"); if (/webkit.*mobile/i.test(navigator.userAgent)) XenForo._isWebkitMobile = !0; jQuery.fn._jQueryToolsOverlay = jQuery.fn.overlay; jQuery.extend(!0, {
        context: function (a, b) { if (typeof b == "string") var c = a, a = a[b], b = c; return function () { return a.apply(b, arguments) } }, setCookie: function (a,
        b, c) { console.log("Set cookie %s=%s", a, b); i.cookie = XenForo._cookieConfig.prefix + a + "=" + encodeURIComponent(b) + (c === void 0 ? "" : ";expires=" + c.toGMTString()) + (XenForo._cookieConfig.path ? ";path=" + XenForo._cookieConfig.path : "") + (XenForo._cookieConfig.domain ? ";domain=" + XenForo._cookieConfig.domain : ""); return b }, getCookie: function (a) { return (a = RegExp("(^| )" + XenForo._cookieConfig.prefix + a + "=([^;]+)(;|$)").exec(i.cookie)) ? decodeURIComponent(a[2]) : null }, deleteCookie: function (a) {
            console.info("Delete cookie %s",
            a); i.cookie = XenForo._cookieConfig.prefix + a + "=" + (XenForo._cookieConfig.path ? "; path=" + XenForo._cookieConfig.path : "") + (XenForo._cookieConfig.domain ? "; domain=" + XenForo._cookieConfig.domain : "") + "; expires=Thu, 01-Jan-70 00:00:01 GMT"; return null
        }
    }); jQuery.fn.extend({
        xfActivate: function () { return XenForo.activate(this) }, dataOrDefault: function (a, b) { var c = this.data(a); return c === void 0 ? b : c }, strval: function () { return String(this.val()).replace(/\s+$/g, "") }, fieldName: function () {
            return this.data("fieldname") ||
            this.attr("name")
        }, fieldValue: function () { switch (this.attr("type")) { case "checkbox": return c('input:checkbox[name="' + this.fieldName() + '"]:checked', this.context.form).val(); case "radio": return c('input:radio[name="' + this.fieldName() + '"]:checked', this.context.form).val(); default: return this.val() } }, _jqSerialize: c.fn.serialize, serialize: function () { c("textarea.BbCodeWysiwygEditor").each(function () { var a = c(this).data("XenForo.BbCodeWysiwygEditor"); a && a.syncEditor() }); return this._jqSerialize() }, _jqSerializeArray: c.fn.serializeArray,
        serializeArray: function () { c("textarea.BbCodeWysiwygEditor").each(function () { var a = c(this).data("XenForo.BbCodeWysiwygEditor"); a && a.syncEditor() }); return this._jqSerializeArray() }, coords: function (a, b) {
            var c, e, f, g, j, h = this.is(":hidden"); h && (e = this.css("visibility"), f = this.css("display"), this.css({ visibility: "hidden", display: "block" })); switch (a) { case "inner": g = "innerWidth"; j = "innerHeight"; break; case "outer": g = "outerWidth"; j = "outerHeight"; break; default: g = "width", j = "height" } switch (b) {
                case "position": b =
                "position"; break; default: b = "offset"
            } c = this[b](); c.width = this[g](); c.height = this[j](); h && this.css({ display: f, visibility: e }); return c
        }, uniqueId: function () { this.attr("id") || this.attr("id", "XenForoUniq" + XenForo._uniqueIdCounter++); return this }, xfFadeIn: function (a, b) { return this.fadeIn(a, function () { c(this).ieOpacityFix(b) }) }, xfFadeOut: function (a, b) { return this.fadeOut(a, b) }, xfShow: function (a, b) { return this.show(a, function () { c(this).ieOpacityFix(b) }) }, xfHide: function (a, b) { return this.hide(a, b) }, xfSlideDown: function (a,
        b) { return this.slideDown(a, function () { c(this).ieOpacityFix(b) }) }, xfSlideUp: function (a, b) { return this.slideUp(a, b) }, xfFadeDown: function (a, b) { this.filter(":hidden").xfHide().css("opacity", 0); a = a || XenForo.speed.normal; return this.xfSlideDown(XenForo.speed.fast).animate({ opacity: 1 }, a, function () { c(this).ieOpacityFix(b) }) }, xfFadeUp: function (a, b, c, e) { return this.animate({ opacity: 0 }, a).slideUp({ duration: a ? c || XenForo.speed.slow : 0, easing: e || "easeOutBounce", complete: b }) }, xfInsert: function (a, b, d, e, f) {
            a == "replaceAll" &&
            c(b).xfFadeUp(e); this.addClass("__XenForoActivator").css("display", "none")[a || "appendTo"](b).xfActivate()[d || "xfFadeDown"](e, f); return this
        }, xfRemove: function (a, b, d, e) { return this[a || "xfFadeUp"](XenForo.speed.normal, function () { c(this).empty().remove(); c.isFunction(b) && b() }, d, e) }, _xfSlideWrapper: function (a) { this.data("slidewrapper") || this.data("slidewrapper", this.wrap('<div class="_swOuter"><div class="_swInner" /></div>').closest("div._swOuter").css("overflow", "hidden")); if (a) try { return this.data("slidewrapper").height() } catch (b) { return 0 } return this.data("slidewrapper") },
        xfSlideIn: function (a, b, c) { var e = this._xfSlideWrapper().css("height", "auto"), f = 0; e.find("div._swInner").css("margin", "auto"); f = this.show(0).outerHeight(); e.css("height", 0).animate({ height: f }, a, b, function () { e.css("height", "") }).find("div._swInner").css("marginTop", f * -1).animate({ marginTop: 0 }, a, b, c); return this }, xfSlideOut: function (a, b, c) { var e = this.outerHeight(); this._xfSlideWrapper().animate({ height: 0 }, a, b).find("div._swInner").animate({ marginTop: e * -1 }, a, b, c); return this }, ieOpacityFix: function (a) {
            c.support.opacity ||
            (this.css("filter", ""), this.attr("style", this.attr("style").replace(/filter:\s*;/i, ""))); c.isFunction(a) && a.apply(this); return this
        }, overlay: function (a) { return XenForo.isTouchBrowser() ? this._jQueryToolsOverlay(c.extend(!0, a, { speed: 0, loadSpeed: 0 })) : this._jQueryToolsOverlay(a) }
    }); c.tools.overlay.addEffect("slideDownContentFade", function (a, b) {
        var d = this.getOverlay(), e = this.getConf(); d.find(".content").css("opacity", 0); this.getConf().fixed ? a.position = "fixed" : (a.position = "absolute", a.top += c(h).scrollTop(),
        a.left += c(h).scrollLeft()); d.css(a).xfSlideDown(XenForo.speed.fast, function () { d.find(".content").animate({ opacity: 1 }, e.speed, function () { c(this).ieOpacityFix(b) }) })
    }, function (a) { var b = this.getOverlay(); b.find(".content").animate({ opacity: 0 }, this.getConf().speed, function () { b.xfSlideUp(XenForo.speed.fast, a) }) }); c.tools.overlay.addEffect("slideDown", function (a, b) {
        this.getConf().fixed ? a.position = "fixed" : (a.position = "absolute", a.top += c(h).scrollTop(), a.left += c(h).scrollLeft()); this.getOverlay().css(a).xfSlideDown(this.getConf().speed,
        b)
    }, function (a) { this.getOverlay().hide(0, a) }); c.extend(XenForo, {
        _OverlayCache: {}, _AjaxProgress: !1, ajaxBaseHref: "", _uniqueIdCounter: 0, _overlayConfig: {}, _loadedScripts: {}, _cookieConfig: { path: "/", domain: "", prefix: "xf_" }, _hasFocus: !0, serverTimeInfo: {}, visitor: {}, _pageLoadTime: (new Date).getTime() / 1E3, _jsVersion: "", _csrfToken: "", _csrfRefreshUrl: "", speed: { xxfast: 50, xfast: 100, fast: 200, normal: 400, slow: 600 }, _animationSpeedMultiplier: 1, _enableOverlays: !0, _enableAjaxSubmit: !0, _lightBoxUniversal: !1, phrases: {},
        init: function () {
            var a = new Date, b = function () { XenForo._hasFocus = !0; c(i).triggerHandler("XenForoWindowFocus") }, d = function () { XenForo._hasFocus = !1; c(i).triggerHandler("XenForoWindowBlur") }, e = c("html"); c.browser.msie ? c(i).bind({ focusin: b, focusout: d }) : c(h).bind({ focus: b, blur: d, load: XenForo.chromeAutoFillFix }); c(h).on("resize", function () { XenForo.checkQuoteSizing(c(i)) }); XenForo.setAnimationSpeed(XenForo._animationSpeedMultiplier); XenForo._TimestampRefresh = new XenForo.TimestampRefresh; XenForo.prepareIgnoredContent();
            XenForo.AjaxProgress(); XenForo.activate(i); c(i).on("click", ".bbCodeQuote .quoteContainer .quoteExpand", function () { c(this).closest(".quoteContainer").toggleClass("expanded") }); if (!e.hasClass("NoResponsive")) {
                XenForo.updateVisibleBreadcrumbs(); XenForo.updateVisibleNavigationTabs(); XenForo.updateVisibleNavigationLinks(); var f, g = e.width(); c(h).on("resize orientationchange load", function (a) {
                    !f && !(a.type != "load" && e.width() == g) && (g = e.width(), f = setTimeout(function () {
                        f = 0; XenForo.updateVisibleBreadcrumbs();
                        XenForo.updateVisibleNavigationTabs(); XenForo.updateVisibleNavigationLinks()
                    }, 20))
                }); c(i).on("click", ".breadcrumb .placeholder", function () { c(this).closest(".breadcrumb").addClass("showAll"); XenForo.updateVisibleBreadcrumbs() })
            } XenForo._CsrfRefresh = new XenForo.CsrfRefresh; "autofocus" in i.createElement("input") || c("input[autofocus], textarea[autofocus], select[autofocus]").first().focus(); XenForo.tweetButtonInit(); XenForo.plusoneButtonInit(); console.info("XenForo.init() %dms. jQuery %s/%s", new Date -
            a, c().jquery, c.tools.version); c("#ManualDeferredTrigger").length && setTimeout(XenForo.manualDeferredHandler, 100); c("html.RunDeferred").length && setTimeout(XenForo.runAutoDeferred, 100)
        }, runAutoDeferred: function () { XenForo.ajax("deferred.php", {}, function (a) { a && a.moreDeferred && setTimeout(XenForo.runAutoDeferred, 100) }, { error: !1, global: !1 }) }, prepareIgnoredContent: function () {
            var a = c("a.DisplayIgnoredContent"), b = {}, d = []; a.length && (c(".ignored").each(function () { var a = c(this).data("author"); a && (b[a] = !0) }), c.each(b,
            function (a) { d.push(a) }), d.length && (a.attr("title", XenForo.phrases.show_hidden_content_by_x.replace(/\{names\}/, d.join(", "))), a.parent().show()))
        }, loadJs: function (a, b, d) { try { var e = i.createElement("script"); e.async = !0; if (d) try { e.innerHTML = d } catch (f) { } c(e).load(b); e.src = a; i.getElementsByTagName("head")[0].appendChild(e) } catch (g) { } }, tweetButtonInit: function () { c("a.twitter-share-button").length && XenForo.loadJs("https://platform.twitter.com/widgets.js") }, plusoneButtonInit: function () {
            if (c(i).find("div.g-plusone").length) {
                var a =
                c("html").attr("lang"); if (a) h.___gcfg = { lang: a }; XenForo.loadJs("https://apis.google.com/js/plusone.js")
            }
        }, chromeAutoFillFix: function () { if (c.browser.webkit && navigator.userAgent.toLowerCase().indexOf("chrome") >= 0) { var a = c("input:-webkit-autofill"); a.length && (console.group("Chrome AutoFill Fix"), a.each(function (a) { console.debug("%d\t%o", a + 1, this); var a = c(this).val(), d = c(this).attr("name"); c(this).after(this.outerHTML).remove(); c("input[name=" + d + "]").val(a) }), console.groupEnd()) } }, updateVisibleBreadcrumbs: function () {
            c(".breadcrumb").each(function () {
                var a =
                this, b = c(a); b.find(".placeholder").remove(); var d = b.find(".crust"); d.show(); b.css("height", ""); var e = a.offsetHeight; b.css("height", "auto"); if (a.offsetHeight <= e) b.css("height", ""); else {
                    var f = null; d.each(function () { var b = c(this); if (b.is(".selectedTabCrumb, :last-child")) return !0; b.hide(); f = b; return a.offsetHeight > e }); if (f) {
                        d = c('<span class="crust placeholder"><a class="crumb" href="javascript:"><span>...</span></a><span class="arrow"><span>&gt;</span></span></span>'); f.after(d); if (a.offsetHeight > e) {
                            var g =
                            f.prevAll(".crust:not(.selectedTabCrumb, :last-child)").last(); g.length && g.hide()
                        } a.offsetHeight > e && (g = f.nextAll(".crust:not(.placeholder, .selectedTabCrumb, :last-child)").first(), g.length && (g.hide(), g.after(d))); a.offsetHeight <= e && b.css("height", "")
                    } else b.css("height", "")
                }
            })
        }, updateVisibleNavigationTabs: function () {
            var a = c("#navigation").find(".navTabs"); if (a.length) {
                var b = a.coords(), d = a.find(".publicTabs"), e = d.find("> .navTab"), f = a.find(".visitorTabs"), g = f.find("> .navTab"), j = c("#VisitorExtraMenu_Counter"),
                h, i = e.filter(".navigationHiddenTabs"); e.show(); i.hide(); g.show(); j.addClass("ResponsiveOnly"); if (!a.is(".showAll")) {
                    h = a.width() - f.width(); var a = function () {
                        var a = e.filter(":not(.selected, .navigationHiddenTabs)"), b = c("<ul />"), f = 0, g = !1; c.each(a.get().reverse(), function () {
                            var a = c(this); if (l(d.coords(), !0)) b.prepend(c("<li />").html(a.find(".navLink").clone())), a.hide(), f++; else return f ? (i.show(), l(d.coords(), !0) && (b.prepend(c("<li />").html(a.find(".navLink").clone())), a.hide(), f++), c("#NavigationHiddenMenu").html(b).xfActivate(),
                            g = !0) : i.hide(), !1
                        }); f && !g && (i.show(), c("#NavigationHiddenMenu").html(b).xfActivate())
                    }, l = function (a, c) { return a.top >= b.top + b.height || a.height >= b.height * 2 ? !0 : c && a.width > h ? !0 : !1 }; f.length ? l(f.coords()) && (a(), l(f.coords()) && (g.hide(), g.filter(".account, .selected").show(), j.removeClass("ResponsiveOnly"))) : l(d.coords()) && a()
                }
            }
        }, updateVisibleNavigationLinks: function () {
            var a = c("#navigation").find(".navTab.selected .blockLinksList"); if (a.length) {
                var b = a.find("> li"), d = a.offset(), e = b.filter(".navigationHidden");
                b.show(); e.hide(); if (!a.is(".showAll")) {
                    var f = [], g = b.filter(":not(.navigationHidden)").last(), j = 0, h = !1, i; if (g.length) {
                        do if (i = g.coords(), i.top > d.top + i.height) i = b.eq(j), i.hide(), f.push(i), j++, h || (h = !0, e.length ? e.show() : (e = c('<li class="navigationHidden Popup PopupControl PopupClosed"><a rel="Menu" class="NoPopupGadget">...</a><div class="Menu blockLinksList primaryContent" id="NavigationLinksHiddenMenu"></div></li>'), a.append(e), new XenForo.PopupMenu(e))); else break; while (j < b.length); if (h) {
                            j < b.length &&
                            (a = e.coords(), a.top > d.top + a.height && (i = b.eq(j), i.hide(), f.push(i))); var l = c("<ul />"); c(f).each(function () { l.append(c("<li />").html(c(this).find("a").clone())) }); c("#NavigationLinksHiddenMenu").html(l).xfActivate()
                        }
                    }
                }
            }
        }, register: function (a, b, d) { if (typeof b == "string") var e = b, b = function () { XenForo.create(e, this) }; c(i).bind(d || "XenForoActivateHtml", function (d) { c(d.element).find(a).each(b) }) }, create: function (a, b) {
            var d = c(b), e = h, f = a.split("."), g; for (g = 0; g < f.length; g++) e = e[f[g]]; if (typeof e != "function") return console.error("%s is not a function.",
            a); d.data(a) || d.data(a, new e(d)); return d.data(a)
        }, activate: function (a) {
            var b = c(a); console.group("XenForo.activate(%o)", a); b.trigger("XenForoActivate").removeClass("__XenForoActivator"); b.find("noscript").empty().remove(); XenForo._TimestampRefresh.refresh(a, !0); c(i).trigger({ element: a, type: "XenForoActivateHtml" }).trigger({ element: a, type: "XenForoActivatePopups" }).trigger({ element: a, type: "XenForoActivationComplete" }); var d = b.find("form.AutoSubmit:first"); d.length && (c(i).trigger("PseudoAjaxStart"), d.submit(),
            d.find('input[type="submit"], input[type="reset"]').hide()); XenForo.checkQuoteSizing(b); console.groupEnd(); return a
        }, checkQuoteSizing: function (a) { a.find(".bbCodeQuote .quoteContainer").each(function () { var a = this, d = 0, e = function () { var f = c(a), g = f.find(".quote")[0]; g && (g.scrollHeight == 0 || g.offsetHeight == 0 ? d < 2E3 && (setTimeout(e, d), d += 100) : g.scrollHeight > g.offsetHeight + 1 ? f.find(".quoteExpand").addClass("quoteCut") : f.find(".quoteExpand").removeClass("quoteCut")) }; e(); c(this).find("img").one("load", e) }) },
        ajaxDataPush: function (a, b, c) { !a || typeof a == "string" ? (a = String(a), a += "&" + encodeURIComponent(b) + "=" + encodeURIComponent(c)) : a[0] !== void 0 ? a.push({ name: b, value: c }) : a[b] = c; return a }, ajax: function (a, b, d, e) {
            if (!a) return console.error("No URL specified for XenForo.ajax()"); a = XenForo.canonicalizeUrl(a, XenForo.ajaxBaseHref); b = XenForo.ajaxDataPush(b, "_xfRequestUri", h.location.pathname + h.location.search); b = XenForo.ajaxDataPush(b, "_xfNoRedirect", 1); XenForo._csrfToken && (b = XenForo.ajaxDataPush(b, "_xfToken", XenForo._csrfToken));
            var f = function (a, b) {
                typeof a == "object" && (typeof a._visitor_conversationsUnread != "undefined" && (XenForo.balloonCounterUpdate(c("#ConversationsMenu_Counter"), a._visitor_conversationsUnread), XenForo.balloonCounterUpdate(c("#AlertsMenu_Counter"), a._visitor_alertsUnread), XenForo.balloonCounterUpdate(c("#VisitorExtraMenu_ConversationsCounter"), a._visitor_conversationsUnread), XenForo.balloonCounterUpdate(c("#VisitorExtraMenu_AlertsCounter"), a._visitor_alertsUnread), XenForo.balloonCounterUpdate(c("#VisitorExtraMenu_Counter"),
                (parseInt(a._visitor_conversationsUnread, 10) + parseInt(a._visitor_alertsUnread, 10) || 0).toString())), a._manualDeferred ? XenForo.manualDeferredHandler() : a._autoDeferred && XenForo.runAutoDeferred()); c(i).trigger({ type: "XFAjaxSuccess", ajaxData: a, textStatus: b }); d.call(null, a, b)
            }, e = c.extend(!0, {
                data: b, url: a, success: f, type: "POST", dataType: "json", error: function (a, b, d) { if (a.readyState != 0) try { f.call(null, c.parseJSON(a.responseText), b) } catch (e) { XenForo.handleServerError(a, b, d) } }, headers: { "X-Ajax-Referer": i.URL },
                timeout: 3E4
            }, e); if (!e.data._xfResponseType) switch (e.dataType) { case "html": case "json": case "xml": e.data = XenForo.ajaxDataPush(e.data, "_xfResponseType", e.dataType) } return c.ajax(e)
        }, balloonCounterUpdate: function (a, b) {
            if (a.length) {
                var d = a.find("span.Total"), e = d.text(); d.text(b); !b || b == "0" ? a.fadeOut("fast", function () { a.addClass("Zero").css("display", "") }) : a.fadeIn("fast", function () {
                    a.removeClass("Zero").css("display", ""); var d = parseInt(e.replace(/[^\d]/, ""), 10), d = parseInt(b.replace(/[^\d]/, ""), 10) - d;
                    if (d > 0 && a.data("text")) { var g = a.closest(".Popup"), j = g.data("XenForo.PopupMenu"), d = c("<a />").css("cursor", "pointer").html(a.data("text").replace(/%d/, d)).click(function () { if (g.is(":visible") && j) j.$clicker.trigger("click"); else if (g.find("a[href]").length) h.location = XenForo.canonicalizeUrl(g.find("a[href]").attr("href")); return !1 }); j && !j.menuVisible && j.resetLoader(); XenForo.stackAlert(d, 1E4, a) }
                })
            }
        }, _manualDeferUrl: "", _manualDeferOverlay: !1, _manualDeferXhr: !1, manualDeferredHandler: function () {
            if (XenForo._manualDeferUrl &&
            !XenForo._manualDeferOverlay) {
                var a = XenForo.phrases.processing || "Processing", a = c('<div id="ManualDeferOverlay" class="xenOverlay"><h2 class="titleBar">' + a + '... <a class="CancelDeferred button" data-cancelling="' + (XenForo.phrases.cancelling || "Cancelling") + '..." style="display:none">' + (XenForo.phrases.cancel || "Cancel") + '</a></h2><span class="processingText">' + a + '...</span><span class="close"></span></div>'); a.find(".CancelDeferred").click(function (a) {
                    a.preventDefault(); c.setCookie("cancel_defer", "1");
                    c(this).text(c(this).data("cancelling"))
                }); a.appendTo("body").overlay(c.extend(!0, { mask: { color: "white", opacity: 0.6, loadSpeed: XenForo.speed.normal, closeSpeed: XenForo.speed.fast }, closeOnClick: !1, closeOnEsc: !1, oneInstance: !1 }, XenForo._overlayConfig, { top: "20%" })); a.overlay().load(); XenForo._manualDeferOverlay = a; c(i).trigger("PseudoAjaxStart"); var b = function () {
                    XenForo._manualDeferOverlay.overlay().close(); c("#ManualDeferOverlay").remove(); XenForo._manualDeferOverlay = !1; XenForo._manualDeferXhr = !1; c(i).trigger("PseudoAjaxStop");
                    c(i).trigger("ManualDeferComplete")
                }, d = function () { XenForo._manualDeferXhr = XenForo.ajax(XenForo._manualDeferUrl, { execute: 1 }, function (a) { if (a && a.continueProcessing) { setTimeout(d, 0); XenForo._manualDeferOverlay.find("span").text(a.status); var c = XenForo._manualDeferOverlay.find(".CancelDeferred"); a.canCancel ? c.show() : c.hide() } else b() }).fail(b) }; d()
            }
        }, handleServerError: function (a, b) {
            switch (b) {
                case "abort": return !1; case "timeout": return XenForo.alert(XenForo.phrases.server_did_not_respond_in_time_try_again,
                XenForo.phrases.following_error_occurred + ":"), !1; case "parsererror": return console.error("PHP " + a.responseText), XenForo.alert("The server responded with an error. The error message is in the JavaScript console."), !1; case "notmodified": case "error": if (!a || !a.responseText) return !1
            } var d = a.getResponseHeader("Content-Type"), e = !1, f; if (d) switch (d.split(";")[0]) {
                case "application/json": e = "json"; break; case "text/html": e = "html"; break; default: a.responseText.substr(0, 1) == "{" ? e = "json" : a.responseText.substr(0,
                9) == "<!DOCTYPE" && (e = "html")
            } if (e == "json" && a.responseText.substr(0, 1) == "{") { try { f = c.parseJSON(a.responseText) } catch (g) { } f ? XenForo.hasResponseError(f, a.status) : XenForo.alert(a.responseText, XenForo.phrases.following_error_occurred + ":") } else XenForo.alert(a.responseText, XenForo.phrases.following_error_occurred + ":"); return !1
        }, hasResponseError: function (a) {
            if (typeof a != "object") return XenForo.alert("Response not JSON!"), !0; if (a.errorTemplateHtml) return new XenForo.ExtLoader(a, function () {
                var b = XenForo.alert(a.errorTemplateHtml,
                XenForo.phrases.following_error_occurred + ":"); b && (b.find("div.errorDetails").removeClass("baseHtml"), a.errorOverlayType && b.closest(".errorOverlay").removeClass("errorOverlay").addClass(a.errorOverlayType))
            }), a.error || !0; else if (a.error !== void 0) { if (typeof a.error === "object") { for (var b in a.error) break; a.error = a.error[b] } XenForo.alert(a.error + "\n" + (a.traceHtml !== void 0 ? '<ol class="traceHtml">\n' + a.traceHtml + "</ol>" : ""), XenForo.phrases.following_error_occurred + ":"); return a.error } else return a.status ==
            "ok" && a.message ? (XenForo.alert(a.message, "", 4E3), !0) : !1
        }, hasTemplateHtml: function (a, b) { b = b || "templateHtml"; return !a[b] ? !1 : typeof a[b].search == "function" ? a[b].search(/\S+/) !== -1 : !0 }, createOverlay: function (a, b, d) {
            var e = null, f = null, g = null, f = /<script[^>]*>([\s\S]*?)<\/script>/ig, j, g = []; if (b instanceof jQuery && b.is(".xenOverlay")) e = b.appendTo("body"), f = b; else {
                if (typeof b == "string") { for (; j = f.exec(b) ;) g.push(j[1]); b = b.replace(f, "") } f = c(b); f.is(".NoAutoHeader") || d && d.title && c('<h2 class="heading h1" />').html(d.title).prependTo(f);
                f.is(".formOverlay") && f.find(".submitUnit").length && (f.find(".submitUnit :reset").length || f.find(".submitUnit .button:last").after(c('<input type="reset" class="button OverlayCloser" />').val(XenForo.phrases.cancel)).after(" ")); e = c('<div class="xenOverlay __XenForoActivator" />').appendTo("body").addClass(c(b).data("overlayclass")).append(f); if (g.length) for (b = 0; b < g.length; b++) c.globalEval(g[b]); e.xfActivate()
            } if (d && (d.effect && e.addClass(d.effect + "Effect"), d.className && (e.addClass(d.className), delete d.className),
            d.noCache)) d.onClose = function () { this.getOverlay().empty().remove() }; e.find(".OverlayCloser").length == 0 && e.prepend('<a class="close OverlayCloser"></a>'); e.find(".OverlayCloser").click(function (a) { a.stopPropagation() }); a = a || e; b = !(c.browser.msie && c.browser.version <= 6 || XenForo.isTouchBrowser() || c(h).width() <= 600); f.is(".NoFixedOverlay") && (b = !1); a.overlay(c.extend(!0, {
                target: e, oneInstance: !0, close: ".OverlayCloser", speed: XenForo.speed.normal, closeSpeed: XenForo.speed.fast, mask: {
                    color: "white", opacity: 0.6,
                    loadSpeed: XenForo.speed.normal, closeSpeed: XenForo.speed.fast
                }, fixed: b
            }, XenForo._overlayConfig, d)); a.bind({
                onBeforeLoad: function () { c(i).triggerHandler("OverlayOpening") }, onLoad: function () {
                    var b = c(this).data("overlay"), d = b.getOverlay(), e = d.find(".OverlayScroller").get(0), f = null; e && setTimeout(function () { e.scrollIntoView(!0) }, 0); var g = d.find("form").find("input[autofocus], textarea[autofocus], select[autofocus]").first(); g.length ? g.focus() : d.find("form").find("input:not([type=hidden]), textarea, select, button, .submitUnit a.button").first().focus();
                    b.getConf().closeOnResize && (f = function () { console.info("Window resize, close overlay!"); b.close() }, c(h).one("resize", f), a.one("onClose", function () { c(h).unbind("resize", f) })); c(i).triggerHandler("OverlayOpened")
                }, onBeforeClose: function (a) { e.find(".Popup").each(function () { var b = c(this).data("XenForo.PopupMenu"); b.hideMenu && b.hideMenu(a, !0) }) }
            }); g = a.data("overlay"); e.data("overlay", g); return g
        }, alert: function (a, b, d, e) {
            var a = String(a || "Unspecified error"), f = a.replace(/[^a-z0-9_]/gi, "_") + parseInt(d), g;
            XenForo._OverlayCache[f] === void 0 && (d ? (g = c('<div class="xenOverlay timedMessage"><div class="content baseHtml">' + a + '<span class="close"></span></div></div>'), XenForo._OverlayCache[f] = g.appendTo("body").overlay({ top: 0, effect: "slideDownContentFade", speed: XenForo.speed.normal, oneInstance: !1, onBeforeClose: e ? e : null }).data("overlay")) : (g = c('<div class="errorOverlay"><a class="close OverlayCloser"></a><h2 class="heading">' + (b || XenForo.phrases.following_error_occurred) + '</h2><div class="baseHtml errorDetails"></div></div>'),
            g.find("div.errorDetails").html(a), XenForo._OverlayCache[f] = XenForo.createOverlay(null, g, { onLoad: function () { var a = c("input:button.close, button.close", i.getElementById(f)).get(0); a && a.focus() }, onClose: e ? e : null }))); XenForo._OverlayCache[f].load(); d && setTimeout('XenForo._OverlayCache["' + f + '"].close()', d); return g
        }, stackAlert: function (a, b, d) {
            function e() { f.xfFadeUp(XenForo.speed.slow, function () { c(this).empty().remove(); g.children().length || g.hide() }) } var f = c('<li class="stackAlert DismissParent"><div class="stackAlertContent"><span class="helper"></span><a class="DismissCtrl"></a></div></li>'),
            g = c("#StackAlerts"); g.length || (g = c('<ul id="StackAlerts"></ul>').appendTo("body")); a instanceof jQuery == !1 && (a = c("<span>" + a + "</span>")); a.appendTo(f.find("div.stackAlertContent")); f.hide().prependTo(g.show()).fadeIn(XenForo.speed.normal, function () { b > 0 && setTimeout(e, b) }); f.find("a").click(function () { d && d.length && d.get(0).scrollIntoView(!0); e() })
        }, setAnimationSpeed: function (a) {
            var b, d, e; for (e in XenForo.speed) d = XenForo.speed[e], c.browser.msie ? (b = d <= 100 ? 2 : d > 800 ? 1 : 1 + 100 / d, XenForo.speed[e] = d * a * b) : XenForo.speed[e] =
            d * a
        }, uniqueId: function (a) { return a ? c(a).uniqueId().attr("id") : "XenForoUniq" + XenForo._uniqueIdCounter++ }, redirect: function (a) { a = XenForo.canonicalizeUrl(a); if (a == h.location.href) h.location.reload(); else { h.location = a; var a = a.split("#"), b = h.location.href.split("#"); a[1] && a[0] == b[0] && h.location.reload() } }, canonicalizeUrl: function (a, b) { return a.indexOf("/") == 0 ? a : a.match(/^https?:|ftp:|mailto:/i) ? a : (b || (b = XenForo.baseUrl()), typeof b != "string" && (b = ""), b + a) }, _baseUrl: !1, baseUrl: function () {
            if (XenForo._baseUrl ===
            !1) { var a = i.createElement("a"); a.href = ""; XenForo._baseUrl = a.href; if (!c("base").length) XenForo._baseUrl = XenForo._baseUrl.replace(/\?.*$/, "").replace(/\/[^\/]*$/, "/") } return XenForo._baseUrl
        }, trailingSlash: function (a) { a.substr(-1) != "/" && (a += "/"); return a }, regexQuote: function (a) { return (a + "").replace(/([\\\.\+\*\?\[\^\]\$\(\)\{\}\=\!<>\|\:])/g, "\\$1") }, htmlspecialchars: function (a) { return (a || "").replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;") }, isRTL: function () {
            if (XenForo.RTL ===
            void 0) { var a = c("html").attr("dir"); XenForo.RTL = a && a.toUpperCase() == "RTL" ? !0 : !1 } return XenForo.RTL
        }, switchStringRTL: function (a) { XenForo.isRTL() && (a = a.replace(/left/i, "l_e_f_t"), a = a.replace(/right/i, "left"), a = a.replace("l_e_f_t", "right")); return a }, switchOffsetRTL: function (a) { XenForo.isRTL() && !isNaN(a[1]) && (a[1] *= -1); return a }, isListTag: function (a) { return a.tagName == "ul" || a.tagName == "ol" }, isNumeric: function (a) { return !isNaN(a) && a - 0 == a && a.length > 0 }, isPositive: function (a) {
            switch (String(a).toLowerCase()) {
                case "on": case "yes": case "true": case "1": return !0;
                default: return !1
            }
        }, ucfirst: function (a) { return a.charAt(0).toUpperCase() + a.substr(1) }, updateUserAvatars: function (a, b, d) { console.log("Replacing visitor avatars on page: %o", b); c.each(b, function (b, f) { var g = ".Av" + a + b + (d ? "" : ":not(.AvatarCropControl)"); c(g).find("img").attr("src", f); c(g).find("span.img").css("background-image", "url(" + f + ")") }) }, getEditorInForm: function (a, b) {
            var d = c(a), e = d.find("textarea.MessageEditor" + (b || "")).first(); return e.length ? e.prop("disabled") ? d.find(".bbCodeEditorContainer textarea" +
            (b || "")) : e.data("redactor") ? e.data("redactor") : e : !1
        }, getPageScrollTagName: function () { return c.browser.webkit ? "body" : "html" }, isTouchBrowser: t, scriptLoader: {
            loadScript: function (a, b, d) {
                if (XenForo._loadedScripts[a] === void 0) {
                    if (/tiny_mce[a-zA-Z0-9_-]*\.js/.test(a)) { var e = "", f = XenForo.baseUrl(); /_(src|dev)\.js/g.test(a); (p = a.indexOf("?")) != -1 && a.substring(p + 1); e = a.substring(0, a.lastIndexOf("/")); f && e.indexOf("://") == -1 && e.indexOf("/") !== 0 && (e = f + e) } c.ajax({
                        type: "GET", url: a, cache: !0, dataType: "script", error: d,
                        success: function () { XenForo._loadedScripts[a] = !0; b.call() }
                    })
                } else b.call()
            }, loadCss: function (a, b, d, e) {
                var f = []; c.each(a, function (a, b) { XenForo._loadedScripts[b] || f.push(b) }); f.length ? (a = b.replace("__sentinel__", f.join(",")), a = XenForo.canonicalizeUrl(a, XenForo.ajaxBaseHref), c.ajax({
                    type: "GET", url: a, cache: !0, dataType: "text", error: e, success: function (a) {
                        c.each(f, function (a, b) { console.log("Loaded css %d, %s", a, b); XenForo._loadedScripts[b] = !0 }); var b = XenForo.baseUrl(); b && (a = a.replace(/(url\(("|')?)([^"')]+)(("|')?\))/gi,
                        function (a, c, d, e, f) { e.match(/^(https?:|\/)/i) || (e = b + e); return c + e + f })); c("<style>" + a + "</style>").appendTo("head"); d.call()
                    }
                })) : d.call()
            }
        }
    }); XenForo.ExtLoader = function (a, b, c) { this.__construct(a, b, c) }; XenForo.ExtLoader.prototype = {
        __construct: function (a, b, d) {
            this.success = b; this.failure = d; this.totalFetched = 0; this.data = a; var e = d = b = 0; if (a.css && !c.isEmptyObject(a.css.stylesheets)) { if (!a.css.urlTemplate) return console.warn("Unable to load CSS without a urlTemplate being provided."); d = 1 } if (a.js) b = a.js.length;
            this.totalExt = d + b; if (!this.totalExt) return this.callSuccess(); if (b) for (e = 0; e < b; e++) XenForo.scriptLoader.loadScript(a.js[e], c.context(this, "successCount"), c.context(this, "callFailure")); d && XenForo.scriptLoader.loadCss(a.css.stylesheets, a.css.urlTemplate, c.context(this, "successCount"), c.context(this, "callFailure"))
        }, callSuccess: function () { typeof this.success == "function" && this.success(this.data) }, callFailure: function (a, b) {
            if (!this.failed) typeof this.failure == "function" ? this.failure(this.data) : console.warn("ExtLoader Failure %s %s",
            b, a.status), this.failed = !0
        }, successCount: function () { this.totalFetched++; this.totalFetched >= this.totalExt && this.callSuccess() }
    }; XenForo._TimestampRefresh = null; XenForo.TimestampRefresh = function () { this.__construct() }; XenForo.TimestampRefresh.prototype = {
        __construct: function () { this.active = this.activate(); c(i).bind("XenForoWindowFocus", c.context(this, "focus")) }, focus: function () { this.active || this.activate(!0) }, activate: function (a) {
            a && this.refresh(); return this.active = h.setInterval(c.context(this, "refresh"),
            6E4)
        }, deactivate: function () { h.clearInterval(this.active); return this.active = !1 }, refresh: function (a, b) {
            if (!XenForo._hasFocus && !b) return this.deactivate(); if (!(c.browser.msie && c.browser.version <= 6)) {
                var d = c("abbr.DateTime[data-time]", a), e = (new Date).getTime() / 1E3 - XenForo._pageLoadTime, f = XenForo.serverTimeInfo.now, g = XenForo.serverTimeInfo.today, h = XenForo.serverTimeInfo.todayDow, i, r, l, k, m, n, s; f + e > g + 86400 && (i = Math.floor((f + e - g) / 86400), g += i * 86400, h = (h + i) % 7); i = g - 86400; r = g - 518400; var o = XenForo.isRTL() ? "\u200f" :
                ""; for (l = 0; l < d.length; l++) k = c(d[l]), k.attr("title") || k.attr("title", k.text()), n = parseInt(k.data("diff"), 10), m = parseInt(k.data("time"), 10), s = m + n, s > f + e && (s = Math.floor(f + e)), n = f - s + n + e, n < 0 || (n <= 60 ? k.text(XenForo.phrases.a_moment_ago) : n <= 120 ? k.text(XenForo.phrases.one_minute_ago) : n < 3600 ? k.text(XenForo.phrases.x_minutes_ago.replace(/%minutes%/, Math.floor(n / 60))) : m > g ? k.text(XenForo.phrases.today_at_x.replace(/%time%/, k.attr("data-timestring"))) : m > i ? k.text(XenForo.phrases.yesterday_at_x.replace(/%time%/,
                k.attr("data-timestring"))) : m > r ? (m = h - Math.ceil((g - m) / 86400), m < 0 && (m += 7), k.text(o + XenForo.phrases.day_x_at_time_y.replace("%day%", XenForo.phrases["day" + m]).replace(/%time%/, k.attr("data-timestring")))) : k.text(o + k.attr("data-datestring")))
            }
        }
    }; XenForo.CsrfRefresh = function () { this.__construct() }; XenForo.CsrfRefresh.prototype = {
        __construct: function () { this.activate(); c(i).bind("XenForoWindowFocus", c.context(this, "focus")) }, focus: function () { this.active || this.activate(!0) }, activate: function (a) {
            a && this.refresh();
            return this.active = h.setInterval(c.context(this, "refresh"), 3E6)
        }, deactivate: function () { h.clearInterval(this.active); this.active = !1 }, refresh: function () {
            XenForo._csrfRefreshUrl && (XenForo._hasFocus ? XenForo.ajax(XenForo._csrfRefreshUrl, "", function (a) { if (!a || a.csrfToken === void 0) return !1; var b = c("input[name=_xfToken]").val(a.csrfToken); XenForo._csrfToken = a.csrfToken; b.length && console.log("XenForo CSRF token updated in %d places (%s)", b.length, a.csrfToken); c(i).trigger({ type: "CSRFRefresh", ajaxData: a }) },
            { error: !1, global: !1 }) : this.deactivate())
        }
    }; XenForo._PopupMenuActiveGroup = null; XenForo.PopupMenu = function (a) { this.__construct(a) }; XenForo.PopupMenu.prototype = {
        __construct: function (a) {
            this.$container = a; this.$menu = this.$container.find(".Menu").appendTo("body"); this.menuVisible = !1; if (!this.$menu.length) return console.warn("Unable to find menu for Popup %o", this.$container), !1; this.$menu.id = XenForo.uniqueId(this.$menu); this.contentSrc = this.$menu.data("contentsrc"); this.contentDest = this.$menu.data("contentdest");
            this.unreadDisplayTimeout = this.loading = null; this.newlyOpened = !1; this.$clicker = a.find('[rel="Menu"]').first().click(c.context(this, "controlClick")); XenForo.isTouchBrowser() || this.$clicker.mouseover(c.context(this, "controlHover")).hoverIntent({ sensitivity: 1, interval: 100, timeout: 0, over: c.context(this, "controlHoverIntent"), out: function () { } }); this.$control = this.addPopupGadget(this.$clicker); this.popupGroup = this.$control.closest("[data-popupgroup]").data("popupgroup")
        }, addPopupGadget: function (a) {
            !a.hasClass("NoPopupGadget") &&
            !a.hasClass("SplitCtrl") && a.append('<span class="arrowWidget" />'); var b = a.closest(".PopupControl"); b.length && (a = b.addClass("PopupContainerControl")); a.addClass("PopupControl"); return a
        }, controlClick: function (a) {
            console.debug("%o control clicked. NewlyOpened: %s, Animated: %s", this.$control, this.newlyOpened, this.$menu.is(":animated")); if (!this.newlyOpened && !this.$menu.is(":animated")) if (console.info("control: %o", this.$control), this.$menu.is(":hidden")) this.showMenu(a, !1); else if (this.$clicker.attr("href") &&
            !XenForo.isPositive(this.$clicker.data("closemenu"))) return console.warn("Following hyperlink from %o", this.$clicker), !0; else this.hideMenu(a, !1); else console.debug("Click on control of newly-opened or animating menu, ignored"); a.preventDefault(); a.target.blur(); return !1
        }, controlHover: function (a) { if (this.popupGroup != null && this.popupGroup == this.getActiveGroup()) return this.showMenu(a, !0), !1 }, controlHoverIntent: function (a) { var b = !1; this.$clicker.hasClass("SplitCtrl") && (b = !0); this.showMenu(a, b) }, showMenu: function (a,
        b) {
            if (this.$menu.is(":visible")) return !1; var d = new c.Event("PopupMenuShow"); d.$menu = this.$menu; d.instant = b; c(i).trigger(d); if (d.isDefaultPrevented()) return !1; this.menuVisible = !0; this.setMenuPosition("showMenu"); this.$menu.hasClass("BottomControl") && (b = !0); if (this.contentSrc && !this.loading) this.loading = XenForo.ajax(this.contentSrc, "", c.context(this, "loadSuccess"), { type: "GET" }), this.$menu.find(".Progress").addClass("InProgress"), b = !0; this.setActiveGroup(); this.$control.addClass("PopupOpen").removeClass("PopupClosed");
            this.$menu.stop().xfSlideDown(b ? 0 : XenForo.speed.xfast, c.context(this, "menuShown")); if (!this.menuEventsInitialized) {
                c(i).bind({ PopupMenuShow: c.context(this, "hideIfOther") }); XenForo._isWebkitMobile ? c(i.body.children).click(c.context(this, "hideMenu")) : c(i).click(c.context(this, "hideMenu")); var e = c("html"), f = this, g = [e.width(), e.height()]; c(h).bind({ resize: function (a) { var b = e.width(), c = e.height(); if (b != g[0] || c != g[1]) g[0] = b, g[1] = c, f._hideMenu(a) } }); this.$menu.delegate("a", "click", c.context(this, "menuLinkClick"));
                this.$menu.delegate(".MenuCloser", "click", c.context(this, "hideMenu")); this.menuEventsInitialized = !0
            }
        }, hideMenu: function (a, b) { this.$menu.is(":visible") && this.triggersMenuHide(a) && this._hideMenu(a, !b) }, _hideMenu: function (a, b) { this.menuVisible = !1; this.setActiveGroup(null); this.$menu.hasClass("BottomControl") && (b = !1); clearTimeout(this.unreadDisplayTimeout); this.$menu.find(".Unread").stop(); this.$menu.xfSlideUp(b ? XenForo.speed.xfast : 0, c.context(this, "menuHidden")) }, menuShown: function () {
            var a = this.$menu.data("contentsrc") ?
            !1 : !0, b = null; this.$control.addClass("PopupOpen").removeClass("PopupClosed"); this.newlyOpened = !0; setTimeout(c.context(function () { this.newlyOpened = !1 }, this), 50); this.$menu.trigger("ShowComplete", [a]); this.setMenuPosition("menuShown"); this.highlightUnreadContent(); b = this.$menu.find("input[type=text], input[type=search], textarea, select").first(); b.length && !b.data("nofocus") && b.select()
        }, menuHidden: function () { this.$control.removeClass("PopupOpen").addClass("PopupClosed"); this.$menu.trigger("MenuHidden") },
        hideIfOther: function (a) { a.$menu.prop(c.expando) != this.$menu.prop(c.expando) && this.hideMenu(a, a.instant) }, triggersMenuHide: function (a) { var b = c(a.target); return a.ctrlKey || a.shiftKey || a.altKey ? !1 : a.which > 1 ? !1 : b.is(".MenuCloser") ? !0 : b.is("a[href]") && !a.isDefaultPrevented() ? !0 : a.target === i || !b.closest("#" + this.$menu.id).length ? !0 : !1 }, setMenuPosition: function () {
            var a, b, d, e, f; b = this.$control.coords("outer"); this.$menu.css("position", "").removeData("position"); for (a = this.$control; a && a.length && a.get(0) !=
            i;) { if (a.css("position") == "fixed") { b.top -= c(h).scrollTop(); b.left -= c(h).scrollLeft(); this.$menu.css("position", "fixed").data("position", "fixed"); break } a = a.parent() } this.$control.removeClass("BottomControl"); this.$menu.removeClass("BottomControl").css({ left: b.left, top: b.top + b.height - 1 }); a = this.$menu.coords("outer"); e = c("#content .pageContent"); d = e.length ? e.coords("outer") : c("body").coords("outer"); f = c(h); e = f.scrollTop(); var g = f.scrollLeft(), j = f.width(); if (XenForo.isRTL() || a.left + a.width > d.left + d.width) d =
            Math.max(0, b.left + b.width - a.width), d > g && this.$menu.css("left", d); parseInt(this.$menu.css("left"), 10) + a.width > j + g && this.$menu.css("left", 0); a.top + a.height > f.height() + e && (a = b.top - a.height, a > e && (this.$control.addClass("BottomControl"), this.$menu.addClass("BottomControl"), this.$menu.css("top", b.top - this.$menu.outerHeight())))
        }, loadSuccess: function (a) {
            if (XenForo.hasResponseError(a) || !XenForo.hasTemplateHtml(a)) return !1; this.$menu.trigger("LoadComplete"); a = c(a.templateHtml); if (!this.contentDest) console.warn("Menu content destination not specified, using this.$menu."),
            this.contentDest = this.$menu; console.info("Content destination: %o", this.contentDest); var b = this; a.xfInsert(this.$menu.data("insertfn") || "appendTo", this.contentDest, "slideDown", 0, function () { b.$menu.css("min-width", "199px"); setTimeout(function () { b.$menu.css("min-width", "") }, 0); b.menuShown() }); this.$menu.find(".Progress").removeClass("InProgress")
        }, resetLoader: function () { this.contentDest && this.loading && (delete this.loading, c(this.contentDest).empty(), this.$menu.find(".Progress").addClass("InProgress")) },
        menuLinkClick: function (a) { this.hideMenu(a, !0) }, setActiveGroup: function (a) { return XenForo._PopupMenuActiveGroup = a === void 0 ? this.popupGroup : a }, getActiveGroup: function () { return XenForo._PopupMenuActiveGroup }, highlightUnreadContent: function () {
            var a = this.$menu.find(".Unread"), b = null, d = null; if (a.length && (b = a.data("defaultbackground"))) a.css("backgroundColor", null), this.unreadDisplayTimeout = setTimeout(c.context(function () {
                (d = this.$menu.data("removecounter")) && XenForo.balloonCounterUpdate(c(d), 0); a.animate({ backgroundColor: b },
                2E3, c.context(function () { a.removeClass("Unread"); this.$menu.trigger("UnreadDisplayComplete") }, this))
            }, this), 1E3)
        }
    }; XenForo.AjaxProgress = function () {
        var a = null, b = function () { c(".Progress, .xenForm .ctrlUnit.submitUnit dt").addClass("InProgress"); a || (a = c('<div id="AjaxProgress" class="xenOverlay"><div class="content"><span class="close" /></div></div>').appendTo("body").overlay({ top: 0, speed: XenForo.speed.fast, oneInstance: !1, closeOnClick: !1, closeOnEsc: !1 }).data("overlay")); a.load() }, d = function () {
            c(".Progress, .xenForm .ctrlUnit.submitUnit dt").removeClass("InProgress");
            a && a.isOpened() && a.close()
        }; c(i).bind({ ajaxStart: function () { XenForo._AjaxProgress = !0; b() }, ajaxStop: function () { XenForo._AjaxProgress = !1; d() }, PseudoAjaxStart: function () { b() }, PseudoAjaxStop: function () { d() } }); c.browser.msie && c.browser.version < 7 && c(i).bind("scroll", function () { a && a.isOpened() && !a.getConf().fixed && a.getOverlay().css("top", a.getConf().top + c(h).scrollTop()) })
    }; XenForo.PageNav = function (a) { this.__construct(a) }; XenForo.PageNav.prototype = {
        __construct: function (a) {
            if (XenForo.isRTL()) return !1; var b =
            a.find(".scrollable"); if (!b.length) return !1; console.info("PageNav %o", a); this.start = parseInt(a.data("start")); this.page = parseInt(a.data("page")); this.end = parseInt(a.data("end")); this.last = parseInt(a.data("last")); this.range = parseInt(a.data("range")); this.size = this.range * 2 + 1; this.baseurl = a.data("baseurl"); this.sentinel = a.data("sentinel"); b.scrollable({ speed: XenForo.speed.slow, easing: "easeOutBounce", keyboard: !1, prev: "#nullPrev", next: "#nullNext", touch: !1 }); this.api = b.data("scrollable").onBeforeSeek(c.context(this,
            "beforeSeek")); this.$prevButton = a.find(".PageNavPrev").click(c.context(this, "prevPage")); this.$nextButton = a.find(".PageNavNext").click(c.context(this, "nextPage")); this.setControlVisibility(this.api.getIndex(), 0)
        }, prevPage: function () { if (this.api.getIndex() == 0 && this.start > 2) { for (var a = 0, b = Math.max(2, this.start - this.size), a = this.start - 1; a >= b; a--) this.prepend(a); this.start = b } this.api.seekTo(Math.max(this.api.getIndex() - this.size, 0)) }, nextPage: function () {
            if (this.api.getIndex() + 1 + 2 * this.size > this.api.getSize() &&
            this.end < this.last - 1) { for (var a = 0, b = Math.min(this.last - 1, this.end + this.size), a = this.end + 1; a <= b; a++) this.append(a); this.end = b } this.api.seekTo(Math.min(this.api.getSize() - this.size, this.api.getIndex() + this.size))
        }, prepend: function (a) { this.buildPageLink(a).prependTo(this.api.getItemWrap()); this.api.next(0) }, append: function (a) { this.buildPageLink(a).appendTo(this.api.getItemWrap()) }, buildPageLink: function (a) { return c("<a />", { href: this.buildPageUrl(a), text: a, "class": a > 999 ? "gt999" : "" }) }, buildPageUrl: function (a) {
            return this.baseurl.replace(this.sentinel,
            a).replace(escape(this.sentinel), a)
        }, beforeSeek: function (a, b) { this.setControlVisibility(b, XenForo.speed.fast) }, setControlVisibility: function (a, b) { a == 0 && this.start <= 2 ? this.$prevButton.hide(b) : this.$prevButton.show(b); this.api.getSize() - this.size <= a && this.end >= this.last - 1 ? this.$nextButton.hide(b) : this.$nextButton.show(b) }
    }; XenForo.ToggleTrigger = function (a) { this.__construct(a) }; XenForo.ToggleTrigger.prototype = {
        __construct: function (a) {
            this.$trigger = a; this.targetVisible = this.loaded = !1; this.$target = null;
            if (a.data("target")) { var b = a.closest(".ToggleTriggerAnchor"); b.length || (b = c("body")); b = b.find(a.data("target")); if (b.length) { this.$target = b; var d = b.data("toggle-class"); this.targetVisible = d ? b.hasClass(d) : b.is(":visible") } } (!a.data("only-if-hidden") || !XenForo.isPositive(a.data("only-if-hidden")) || !this.targetVisible) && a.click(c.context(this, "toggle"))
        }, toggle: function (a) {
            a.preventDefault(); if (!(this.$trigger.data("toggle-if-pointer") && XenForo.isPositive(this.$trigger.data("toggle-if-pointer")) && this.$trigger.css("cursor") !==
            "pointer")) this.$target ? (this.hideSelfIfNeeded(), a = this.$target.data("toggle-class"), this.targetVisible ? a ? this.$target.removeClass(a) : this.$target.xfFadeUp() : a ? this.$target.addClass(a) : this.$target.xfFadeDown(), this.targetVisible = !this.targetVisible) : this.load()
        }, hideSelfIfNeeded: function () { var a = this.$trigger.data("hide"); if (!a) return !1; if (a == "self") a = this.$trigger; else { var b = this.$trigger.closest(".ToggleTriggerAnchor"); b.length || (b = c("body")); a = b.find(a) } a.xfFadeUp() }, load: function () {
            if (!this.loading &&
            this.$trigger.attr("href")) {
                var a = this, b = c(this.$trigger.data("position")); if (!b.length && (b = this.$trigger.closest(".ToggleTriggerAnchor"), !b.length)) return console.warn("Could not match toggle target position selector %s", this.$trigger.data("position")), !1; var d = this.$trigger.data("position-method") || "insertAfter"; this.loading = !0; XenForo.ajax(this.$trigger.attr("href"), {}, function (e) {
                    a.loading = !1; if (XenForo.hasResponseError(e)) return !1; if (e._redirectStatus && e._redirectTarget) {
                        var f = function () { XenForo.redirect(e._redirectTarget) };
                        if (XenForo._manualDeferOverlay) c(i).one("ManualDeferComplete", f); else f(); return !1
                    } if (!e.templateHtml) return !1; new XenForo.ExtLoader(e, function (e) { a.$target = c(e.templateHtml); a.$target.xfInsert(d, b); a.targetVisible = !0; a.hideSelfIfNeeded() })
                })
            }
        }
    }; XenForo.OverlayTrigger = function (a, b) { this.__construct(a, b) }; XenForo.OverlayTrigger.prototype = {
        __construct: function (a, b) { this.$trigger = a.click(c.context(this, "show")); this.options = b }, show: function (a) {
            var b = this.$trigger.closest(".xenOverlay").data("overlay"),
            d, e = this.$trigger.is(".username, .avatar"); if (!parseInt(XenForo._enableOverlays)) if (this.$trigger.attr("href")) return !0; else if (this.$trigger.data("href")) { if (this.$trigger.closest(".AttachmentUploader, #AttachmentUploader").length == 0) return XenForo.redirect(this.$trigger.data("href")), !1 } else return console.warn("No alternative action found for OverlayTrigger %o", this.$trigger), !0; if (e && this.$trigger.hasClass("NoOverlay")) return !0; if (a.ctrlKey || a.shiftKey || a.altKey) return !0; if (a.which > 1) return !0;
            if (this.options && this.options.onBeforeTrigger && (d = c.Event(), d.clickEvent = a, this.options.onBeforeTrigger(d), d.isDefaultPrevented())) return; a.preventDefault(); if (b && b.isOpened()) { var f = this; b.getTrigger().one("onClose", function (a) { setTimeout(function () { f.show(a) }, 0) }); b.getConf().mask.closeSpeed = 0; b.close() } else {
                if (!this.OverlayLoader) {
                    b = typeof this.options == "object" ? this.options : {}; b = c.extend(b, this.$trigger.data("overlayoptions")); d = this.$trigger.data("cacheoverlay"); if (d !== void 0) XenForo.isPositive(d) ?
                    d = !0 : (d = !1, b.onClose = c.context(this, "deCache")); else if (this.$trigger.is("input:submit")) d = !1, b.onClose = c.context(this, "deCache"); if (e && !this.$trigger.hasClass("OverlayTrigger")) !this.$trigger.data("cardurl") && this.$trigger.attr("href") && (e = this.$trigger.attr("href").replace(/#.*$/, ""), e += e.indexOf("?") >= 0 ? "&card=1" : "?card=1", this.$trigger.data("cardurl", e)), d = !0, b.speed = XenForo.speed.fast; this.OverlayLoader = new XenForo.OverlayLoader(this.$trigger, d, b); this.OverlayLoader.load(); a.preventDefault();
                    return !0
                } this.OverlayLoader.show()
            }
        }, deCache: function () { this.OverlayLoader && this.OverlayLoader.overlay && (console.info("DeCache %o", this.OverlayLoader.overlay.getOverlay()), this.OverlayLoader.overlay.getTrigger().removeData("overlay"), this.OverlayLoader.overlay.getOverlay().empty().remove()); delete this.OverlayLoader }
    }; XenForo.LightBoxTrigger = function (a) {
        new XenForo.OverlayTrigger(a.data("cacheoverlay", 1), {
            top: 15, speed: 1, closeSpeed: 0, closeOnResize: !0, mask: {
                color: "rgb(0,0,0)", opacity: 0.6, loadSpeed: 0,
                closeSpeed: 0
            }, onBeforeTrigger: function (a) { c(h).height() < 500 && a.preventDefault() }, onBeforeLoad: function () { if (typeof XenForo.LightBox == "function") { if (XenForo._LightBoxObj === void 0) XenForo._LightBoxObj = new XenForo.LightBox(this, "*[data-author]"); var b = parseInt(XenForo._lightBoxUniversal) ? c("body") : a.closest("*[data-author]"); console.info("Opening LightBox for %o using %s", b, "*[data-author]"); XenForo._LightBoxObj.setThumbStrip(b); XenForo._LightBoxObj.setImage(this.getTrigger().find("img:first")); c(i).triggerHandler("LightBoxOpening") } return !0 },
            onLoad: function () { XenForo._LightBoxObj.setDimensions(!0); XenForo._LightBoxObj.bindNav(); return !0 }, onClose: function () { XenForo._LightBoxObj.setImage(); XenForo._LightBoxObj.unbindNav(); return !0 }
        })
    }; XenForo.OverlayLoaderCache = {}; XenForo.OverlayLoader = function (a, b, c) { this.__construct(a, c, b) }; XenForo.OverlayLoader.prototype = {
        __construct: function (a, b, c) { this.$trigger = a; this.cache = c; this.options = b }, load: function (a) {
            if (this.$trigger.is("input:submit")) {
                if (this.cache = !1, !this.xhr) {
                    var a = this.$trigger.closest("form"),
                    b = a.serializeArray(); b.push({ name: this.$trigger.attr("name"), value: this.$trigger.attr("value") }); this.xhr = XenForo.ajax(a.attr("action"), b, c.context(this, "loadSuccess"))
                }
            } else {
                this.href = this.$trigger.data("cardurl") || this.$trigger.data("href") || this.$trigger.attr("href"); if (!this.href) return console.warn("No overlay href found for control %o", this.$trigger), !1; console.info("OverlayLoader for %s", this.href); this.callback = a; if (this.cache && XenForo.OverlayLoaderCache[this.href]) this.createOverlay(XenForo.OverlayLoaderCache[this.href]);
                else if (!this.xhr) this.xhr = XenForo.ajax(this.href, "", c.context(this, "loadSuccess"), { type: "GET" })
            }
        }, loadSuccess: function (a) { delete this.xhr; if (XenForo.hasResponseError(a)) return !1; if (a._redirectStatus && a._redirectTarget) { var b = function () { XenForo.redirect(a._redirectTarget) }; if (XenForo._manualDeferOverlay) c(i).one("ManualDeferComplete", b); else b(); return !1 } this.options.title = a.h1 || a.title; new XenForo.ExtLoader(a, c.context(this, "createOverlay")) }, createOverlay: function (a) {
            this.overlay = XenForo.createOverlay(this.$trigger,
            a && a.templateHtml ? a.templateHtml : a, this.options); this.cache && (XenForo.OverlayLoaderCache[this.href] = this.overlay.getOverlay()); typeof this.callback == "function" && this.callback(); this.show()
        }, show: function () { this.overlay ? this.overlay.load() : (console.warn("Attempted to call XenForo.OverlayLoader.show() for %s before overlay is created", this.href), this.load(this.callback)) }
    }; XenForo.LoginBar = function (a) {
        var b = c("#login").appendTo(a.find(".pageContent")), d = function (d) {
            d.preventDefault(); XenForo.chromeAutoFillFix(b);
            b.xfSlideIn(XenForo.speed.slow, "easeOutBack", function () { c("#LoginControl").select(); a.expose(c.extend(XenForo._overlayConfig.mask, { loadSpeed: XenForo.speed.slow, onBeforeLoad: function () { b.css("outline", "0px solid black") }, onLoad: function () { b.css("outline", "") }, onBeforeClose: function () { e(!1, !0); return !0 } })) })
        }, e = function (a, d) { a && a.target.blur(); b.xfSlideOut(XenForo.speed.fast); !d && c.mask && c.mask.close() }; c('label[for="LoginControl"]').click(function (a) {
            c(this).closest("#login").length == 0 && (a.preventDefault(),
            b._xfSlideWrapper(!0) ? e(a) : (c(XenForo.getPageScrollTagName()).scrollTop(0), d(a)))
        }); a.delegate('input[name="register"]', "click", function () { var a = b.find("input.button.primary"), c = b.find('input[name="register"]:checked').val(); b.find("input.button.primary").val(c == "1" ? a.data("signupphrase") : a.data("loginphrase")) }); a.delegate(".close", "click", e)
    }; XenForo.QuickSearch = function (a) {
        var b = 0; c("#QuickSearchPlaceholder").click(function (a) {
            a.preventDefault(); setTimeout(function () {
                c("#QuickSearch").addClass("show");
                c("#QuickSearchPlaceholder").addClass("hide"); c("#QuickSearchQuery").focus()
            }, 0)
        }); c("#QuickSearchQuery").focus(function () {
            b++; console.log("Show quick search menu (%s)", b); b == 1 && c.browser.msie && c.browser.version < 9 && a.find("input").keydown(function (a) { if (a.keyCode == 13) return c(this).parents("form").submit(), !1 }); if (b == 1) c(XenForo._isWebkitMobile ? i.body.children : i).on("click", function (b) {
                c(b.target).closest("#QuickSearch").length || (console.log("Hide quick search menu"), c("#QuickSearch").removeClass("show"),
                c("#QuickSearchPlaceholder").removeClass("hide"), a.find(".secondaryControls").slideUp(XenForo.speed.xfast, function () { a.removeClass("active"); c.browser.msie && (c("body").css("zoom", 1), setTimeout(function () { c("body").css("zoom", "") }, 100)) }))
            }); a.addClass("active"); a.find(".secondaryControls").slideDown(0)
        })
    }; XenForo.configureTooltipRtl = function (a) { if (a.offset !== void 0) a.offset = XenForo.switchOffsetRTL(a.offset); if (a.position !== void 0) a.position = XenForo.switchStringRTL(a.position); return a }; XenForo.Tooltip =
    function (a) {
        var b = String(a.data("tipclass") || ""), c = /(\s|^)flipped(\s|$)/.test(b), e = parseInt(a.data("offsety"), 10) || -6, f = a.is(":visible") ? a.innerWidth() : 0, g = parseInt(a.data("offsetx"), 10) || 0, h = g + f * (c ? 1 : -1), i = XenForo.htmlspecialchars(a.attr("title")), r = null; if (f <= 0) var l = !1, r = function () { if (!l) { var b = a.innerWidth(); if (!(b <= 0)) l = !0, h = g + b * (c ? 1 : -1), a.data("tooltip").getConf().offset = XenForo.switchOffsetRTL([e, h]) } }; a.attr("title", i).tooltip(XenForo.configureTooltipRtl({
            delay: 0, position: a.data("position") ||
            "top " + (c ? "left" : "right"), offset: [e, h], tipClass: "xenTooltip " + b, layout: '<div><span class="arrow" /></div>', onBeforeShow: r
        }))
    }; XenForo.StatusTooltip = function (a) { if (a.attr("title")) { var b = XenForo.htmlspecialchars(a.attr("title")); a.attr("title", b).tooltip(XenForo.configureTooltipRtl({ effect: "slide", slideOffset: 30, position: "bottom right", offset: [10, 10], tipClass: "xenTooltip statusTip", layout: '<div><span class="arrow" /></div>' })) } }; XenForo.NodeDescriptionTooltip = function (a) {
        var b = a.data("description");
        if (b && c(b).length) {
            var d = c(b).addClass("xenTooltip nodeDescriptionTip").appendTo("body").append('<span class="arrow" />'); a.tooltip(XenForo.configureTooltipRtl({
                effect: "slide", slideOffset: 30, offset: [30, 10], slideInSpeed: XenForo.speed.xfast, slideOutSpeed: 50 * XenForo._animationSpeedMultiplier, predelay: 250, position: "bottom right", tip: b, onBeforeShow: function () {
                    if (!a.data("tooltip-shown")) {
                        if (c(h).width() < 600) {
                            var b = a.data("tooltip").getConf(); b.slideOffset = 0; b.effect = "toggle"; b.offset = [20, -a.width()]; b.position =
                            ["top", "right"]; d.addClass("arrowBottom")
                        } a.data("tooltip-shown", !0)
                    } console.log(a.data("tooltip").getConf())
                }
            })); a.click(function () { c(this).data("tooltip").hide() })
        }
    }; XenForo.AccountMenu = function (a) { a.find(".submitUnit").hide(); a.find(".StatusEditor").focus(function () { a.is(":visible") && a.find(".submitUnit").show() }) }; XenForo.FollowLink = function (a) {
        a.click(function (b) {
            b.preventDefault(); a.get(0).blur(); XenForo.ajax(a.attr("href"), { _xfConfirm: 1 }, function (b) {
                if (XenForo.hasResponseError(b)) return !1;
                a.xfFadeOut(XenForo.speed.fast, function () { a.attr("href", b.linkUrl).html(b.linkPhrase).xfFadeIn(XenForo.speed.fast) })
            })
        })
    }; XenForo.AttributionLink = function (a) {
        a.click(function (a) {
            if (c(this.hash).length) {
                try { var d = this.hash, e = c(this.hash).offset().top, f = XenForo.getPageScrollTagName(); "pushState" in h.history && h.history.pushState({}, "", h.location.toString().replace(/#.*$/, "") + d); c(f).animate({ scrollTop: e }, XenForo.speed.normal, "easeOutBack", function () { if (!h.history.pushState) h.location.hash = d }) } catch (g) {
                    h.location.hash =
                    this.hash
                } a.preventDefault()
            }
        })
    }; XenForo.ClickProxy = function (a) { a.click(function () { c(a.attr("rel")).click(); if (!a.data("allowdefault")) return !1 }) }; XenForo.ReCaptcha = function (a) { this.__construct(a) }; XenForo.ReCaptcha.prototype = {
        __construct: function (a) {
            XenForo.ReCaptcha.instance && XenForo.ReCaptcha.instance.remove(); XenForo.ReCaptcha.instance = this; if (this.publicKey = a.data("publickey")) a.siblings("noscript").remove(), a.uniqueId(), this.$captcha = a, this.type = "image", a.find(".ReCaptchaReload").click(c.context(this,
            "reload")), a.find(".ReCaptchaSwitch").click(c.context(this, "switchType")), this.load(), c(h).unload(c.context(this, "remove")), a.closest("form.AutoValidator").bind({ AutoValidationDataReceived: c.context(this, "reload") })
        }, load: function () { if (h.Recaptcha) this.create(); else { var a = c.context(this, "create"), b = c.browser.msie && c.browser.version <= 6 ? 250 : 0; c.getScript("//www.google.com/recaptcha/api/js/recaptcha_ajax.js", function () { setTimeout(a, b) }) } }, create: function () {
            var a = this.$captcha; h.Recaptcha.create(this.publicKey,
            a.attr("id"), { theme: "custom", callback: function () { a.show(); c("#ReCaptchaLoading").remove(); c("#recaptcha_challenge_field").val(h.Recaptcha.get_challenge()) } })
        }, reload: function (a) { h.Recaptcha && (c(a.target).is("form") || a.preventDefault(), h.Recaptcha.reload()) }, switchType: function (a) { a.preventDefault(); this.type = this.type == "image" ? "audio" : "image"; h.Recaptcha.switch_type(this.type) }, remove: function () { this.$captcha.empty().remove(); h.Recaptcha && h.Recaptcha.destroy() }
    }; XenForo.ReCaptcha.instance = null; XenForo.Captcha =
    function (a) { a.closest("form").one("AutoValidationError", function () { a.fadeTo(XenForo.speed.fast, 0.5); XenForo.ajax(a.data("source"), {}, function (b) { if (XenForo.hasResponseError(b)) return !1; XenForo.hasTemplateHtml(b) && a.xfFadeOut(XenForo.speed.xfast, function () { c(b.templateHtml).xfInsert("replaceAll", a, "xfFadeIn", XenForo.speed.xfast) }) }) }) }; XenForo.BbCodeImage = function (a) { this.__construct(a) }; XenForo.BbCodeImage.prototype = {
        __construct: function (a) {
            this.$image = a; this.actualWidth = 0; if (!a.closest("a").length &&
            (a.attr("title", XenForo.phrases.click_image_show_full_size_version || "Show full size").click(c.context(this, "toggleFullSize")), XenForo.isTouchBrowser() || this.$image.tooltip(XenForo.configureTooltipRtl({ effect: "slide", slideOffset: 30, position: "top center", offset: [45, 0], tipClass: "xenTooltip bbCodeImageTip", onBeforeShow: c.context(this, "isResized"), onShow: c.context(this, "addTipClick") })), !this.getImageWidth())) { var b = a.attr("src"); a.bind({ load: c.context(this, "getImageWidth") }); a.attr("src", b) }
        }, getImageWidth: function () {
            this.$image.css({
                "max-width": "none",
                "max-height": "none"
            }); this.actualWidth = this.$image.width(); this.$image.css({ "max-width": "", "max-height": "" }); return this.actualWidth
        }, toggleFullSize: function (a) {
            var b = this.$image.width(), d, e, f, g = h.navigator.userAgent.match(/Android|iOS|iPhone|iPad|Mobile Safari/i) ? 0 : XenForo.speed.normal; if (this.actualWidth > b) {
                d = this.$image.offset(); e = this.actualWidth / b; if (XenForo.isRTL()) d.right = c("html").width() - d.left - b, d.left = "auto"; f = c("<img />", { src: this.$image.attr("src") }).addClass("bbCodeImageFullSize").css("width",
                b).css(d).click(function () { c(this).remove(); c(XenForo.getPageScrollTagName()).scrollLeft(0).scrollTop(d.top) }).appendTo("body").animate({ width: this.actualWidth }, g, "easeInOutQuart"); c(i).one("OverlayOpening", function () { f.remove() }); a.target == this.$image.get(0) ? (b = d.left + (a.pageX - d.left) * e - c(h).width() / 2, a = d.top + (a.pageY - d.top) * e - c(h).height() / 2) : (b = d.left + this.actualWidth / 2 - c(h).width() / 2, a = d.top + this.$image.height() * e / 2 - c(h).height() / 2); c(XenForo.getPageScrollTagName()).animate({ scrollLeft: b, scrollTop: a },
                g, "easeInOutQuart", c.context(function () { var a = this.$image.data("tooltip"); a && a.hide() }, this))
            }
        }, isResized: function () { var a = this.$image.width(); if (!a) return !1; if (this.getImageWidth() <= a) return !1 }, addTipClick: function () { if (!this.tipClickAdded) c(this.$image.data("tooltip").getTip()).click(c.context(this, "toggleFullSize")), this.tipClickAdded = !0 }
    }; XenForo.Tabs = function (a) { this.__construct(a) }; XenForo.Tabs.prototype = {
        __construct: function (a) {
            this.$tabContainer = a; this.$panes = c(a.data("panes")); var b = a.find("a");
            b.length || (b = a.children()); var d = b.filter(".active"), e = 0; d.length && b.each(function () { if (this == d.get(0)) return !1; e++ }); if (h.location.hash.length > 1) { var f = h.location.hash.substr(1), g = -1, i = !1; this.$panes.each(function () { g++; return c(this).attr("id") === f ? (i = !0, !1) : !0 }); i && (e = g) } a.tabs(this.$panes, { current: "active", history: !1, initialIndex: e, onBeforeClick: c.context(this, "onBeforeClick") }); this.api = a.data("tabs")
        }, getCurrentTab: function () { return this.api.getIndex() }, click: function (a) { this.api.click(a) },
        onBeforeClick: function (a, b) {
            this.$tabContainer.children().each(function (a) { b == a ? c(this).addClass("active") : c(this).removeClass("active") }); var d = c(this.$panes.get(b)), e = d.data("loadurl"); e && (d.data("loadurl", ""), XenForo.ajax(e, {}, function (a) {
                if (XenForo.hasTemplateHtml(a) || XenForo.hasTemplateHtml(a, "message")) new XenForo.ExtLoader(a, function (a) { var b; a.templateHtml ? b = c(a.templateHtml) : a.message && (b = c('<div class="section" />').html(a.message)); d.html(""); b && b.xfInsert("appendTo", d, "xfFadeIn", 0) });
                else if (XenForo.hasResponseError(a)) return !1
            }, { type: "GET" }))
        }
    }; XenForo.LikeLink = function (a) {
        a.click(function (a) {
            a.preventDefault(); var d = c(this); XenForo.ajax(this.href, {}, function (a) {
                if (XenForo.hasResponseError(a)) return !1; d.stop(!0, !0); a.term && (d.find(".LikeLabel").html(a.term), a.cssClasses && c.each(a.cssClasses, function (a, b) { d[b == "+" ? "addClass" : "removeClass"](a) })); if (a.templateHtml === "") c(d.data("container")).xfFadeUp(XenForo.speed.fast, function () { c(this).empty().xfFadeDown(0) }); else {
                    var b = c(d.data("container")),
                    g = b.find(".LikeText"), h = c(a.templateHtml); g.length ? g.xfFadeOut(50, function () { var a = this.parentNode; c(this).remove(); h.find(".LikeText").xfInsert("appendTo", a, "xfFadeIn", 50) }) : new XenForo.ExtLoader(a, function () { h.xfInsert("appendTo", b) })
                }
            })
        })
    }; XenForo.Facebook = {
        initialized: !1, appId: "", fbUid: 0, authResponse: {}, locale: "en-US", init: function () {
            XenForo.Facebook.initialized = !0; c(i.body).append(c('<div id="fb-root" />')); FB.init({
                appId: XenForo.Facebook.appId, xfbml: !0, oauth: !0, channelUrl: XenForo.canonicalizeUrl("fb_channel.php?l=" +
                XenForo.Facebook.locale)
            }); FB.Event.subscribe("auth.sessionChange", XenForo.Facebook.sessionChange); FB.getLoginStatus(XenForo.Facebook.sessionChange); XenForo.visitor.user_id && c(i).delegate("a.LogOut:not(.OverlayTrigger)", "click", XenForo.Facebook.eLogOutClick)
        }, start: function () { var a = c.getCookie("fbUid"); if (a && a.length) XenForo.Facebook.fbUid = parseInt(a, 10); (XenForo.Facebook.forceInit || XenForo.Facebook.appId && XenForo.Facebook.fbUid) && XenForo.Facebook.load() }, load: function () {
            XenForo.Facebook.locale = c("html").attr("lang").replace("-",
            "_"); if (!XenForo.Facebook.locale) XenForo.Facebook.locale = "en_US"; var a = i.createElement("script"); XenForo.Facebook.locale.replace("-", "_"); a.src = "//connect.facebook.net/" + XenForo.Facebook.locale + "/all.js"; a.async = !0; h.fbAsyncInit = XenForo.Facebook.init; i.getElementsByTagName("head")[0].appendChild(a)
        }, sessionChange: function (a) {
            if (XenForo.Facebook.fbUid) {
                var b = a.authResponse, a = XenForo.visitor; (XenForo.Facebook.authResponse = b) && !a.user_id ? (XenForo.alert(XenForo.phrases.logging_in + "...", "", 8E3), setTimeout(function () {
                    XenForo.redirect("index.php?register/facebook&t=" +
                    escape(b.accessToken) + "&redirect=" + escape(h.location))
                }, 250)) : !b && a.user_id && XenForo.Facebook.logout()
            }
        }, logout: function () { var a = c("a.LogOut:not(.OverlayTrigger)").attr("href"); a || (a = "index.php?logout/&_xfToken=" + XenForo._csrfToken); a += (a.indexOf("?") >= 0 ? "&" : "?") + "redirect=" + escape(h.location); XenForo.redirect(a) }, eLogOutClick: function () { if (XenForo.Facebook.authResponse && XenForo.Facebook.authResponse.userID) return FB.logout(XenForo.Facebook.logout), !1 }
    }; XenForo.Prompt = function (a) { this.__construct(a) };
    XenForo.Prompt.prototype = "placeholder" in i.createElement("input") ? { __construct: function (a) { this.$input = a }, isEmpty: function () { return this.$input.strval() === "" }, val: function (a, b) { return a === void 0 ? this.$input.val() : (b && this.$input.focus(), this.$input.val(a)) } } : {
        __construct: function (a) {
            console.log("Emulating placeholder behaviour for %o", a); this.placeholder = a.attr("placeholder"); this.$input = a.bind({ focus: c.context(this, "setValueMode"), blur: c.context(this, "setPromptMode") }); this.$input.closest("form").bind({
                submit: c.context(this,
                "eFormSubmit"), AutoValidationBeforeSubmit: c.context(this, "eFormSubmit"), AutoValidationComplete: c.context(this, "eFormSubmitted")
            }); this.setPromptMode()
        }, isEmpty: function () { var a = this.$input.val(); return a === "" || a == this.placeholder }, setPromptMode: function () { this.isEmpty() && this.$input.val(this.placeholder).addClass("prompt") }, setValueMode: function () { this.isEmpty() && this.$input.val("").removeClass("prompt").select() }, val: function (a, b) {
            if (a === void 0) return this.isEmpty() ? "" : this.$input.val(); else a ===
            "" ? (this.$input.val(""), b === void 0 && this.setPromptMode()) : (this.setValueMode(), this.$input.val(a))
        }, eFormSubmit: function () { this.isEmpty() && this.$input.val(""); return !0 }, eFormSubmitted: function () { this.setPromptMode() }
    }; XenForo.SpinBox = function (a) { this.__construct(a) }; XenForo.SpinBox.prototype = {
        __construct: function (a) {
            var b; if (a.attr("step") === void 0) console.warn("ERROR: No data-step attribute specified for spinbox."); else {
                this.parameters = { step: null, min: null, max: null }; for (b in this.parameters) a.attr(b) ===
                void 0 ? delete this.parameters[b] : this.parameters[b] = parseFloat(a.attr(b)); a.width(); b = c('<input type="button" class="button spinBoxButton up" value="+" data-plusminus="+" tabindex="-1" />').insertAfter(a).focus(c.context(this, "eFocusButton")).click(c.context(this, "eClickButton")).mousedown(c.context(this, "eMousedownButton")).mouseup(c.context(this, "eMouseupButton")); c('<input type="button" class="button spinBoxButton down" value="-" data-plusminus="-" tabindex="-1" />').insertAfter(b).focus(c.context(this,
                "eFocusButton")).click(c.context(this, "eClickButton")).mousedown(c.context(this, "eMousedownButton")).mouseup(c.context(this, "eMouseupButton")); this.$input = a.attr("autocomplete", "off").blur(c.context(this, "eBlurInput")).keyup(c.context(this, "eKeyupInput")); this.$input.closest("form").bind("submit", c.context(this, "eBlurInput")); this.$input.val(this.constrain(this.getValue()))
            }
        }, getValue: function () {
            var a = parseFloat(this.$input.val()), a = isNaN(a) ? parseFloat(this.$input.val().replace(/[^0-9.]/g, "")) : a;
            return isNaN(a) ? 0 : a
        }, constrain: function (a) { return this.parameters.min !== void 0 && a < this.parameters.min ? (console.warn("Minimum value for SpinBox = %s\n %o", this.parameters.min, this.$input), this.parameters.min) : this.parameters.max !== void 0 && a > this.parameters.max ? (console.warn("Maximum value for SpinBox = %s\n %o", this.parameters.max, this.$input), this.parameters.max) : a }, stepValue: function (a) {
            if (this.$input.prop("readonly")) return !1; var b = this.getValue(), c = b % this.parameters.step, a = a == "+"; b -= c; if (!c || a &&
            c > 0 || !a && c < 0) b += this.parameters.step * (a ? 1 : -1); this.$input.val(this.constrain(b)); this.$input.triggerHandler("change")
        }, eBlurInput: function () { this.$input.val(this.constrain(this.getValue())) }, eKeyupInput: function (a) { switch (a.which) { case 38: return this.stepValue("+"), this.$input.select(), !1; case 40: return this.stepValue("-"), this.$input.select(), !1 } }, eFocusButton: function () { return !1 }, eClickButton: function (a) { this.stepValue(c(a.target).data("plusminus")); this.$input.focus(); this.$input.select() }, eMousedownButton: function (a) {
            this.eMouseupButton(a);
            this.holdTimeout = setTimeout(c.context(function () { this.holdInterval = setInterval(c.context(function () { this.stepValue(a.target.value) }, this), 75) }, this), 500)
        }, eMouseupButton: function () { clearTimeout(this.holdTimeout); clearInterval(this.holdInterval) }
    }; XenForo.Disabler = function (a) {
        var b = function (b, e) {
            var f = d.find("input, select, textarea, button, .inputWrapper"), h = e ? 0 : XenForo.speed.fast, i = function () { d.find("input, select, textarea").first().focus().select() }; a.is(":checked:enabled") ? (d.removeAttr("disabled").removeClass("disabled").trigger("DisablerDisabled"),
            f.removeAttr("disabled").removeClass("disabled"), a.hasClass("Hider") ? d.xfFadeDown(h, e ? null : i) : e || i.call()) : (a.hasClass("Hider") && d.xfFadeUp(h, null, XenForo.speed.fast, "easeInBack"), d.prop("disabled", !0).addClass("disabled").trigger("DisablerEnabled"), f.prop("disabled", !0).addClass("disabled").each(function (a, b) { var d = c(b), e = d.data("disabled"); e !== null && typeof e != "undefined" && d.val(e) }))
        }, d = c("#" + a.attr("id") + "_Disabler"), e = a.closest("form"), f = function () { setTimeout(b, 0) }; a.is(":radio") ? e.find('input:radio[name="' +
        a.fieldName() + '"]').click(f) : a.click(f); e.bind("reset", b); b(null, !0); d.find("label, input, select, textarea").click(function () { a.is(":checked") || (a.prop("checked", !0), b()) }); this.setStatus = b
    }; XenForo.CheckAll = function (a) {
        if (a.is(":checkbox")) {
            var b = a.data("target") ? c(a.data("target")) : !1; if (!b || !b.length) b = a.closest("form"); var d = function () { var c = a.data("filter"); return c ? b.find(c).filter("input:checkbox") : b.find("input:checkbox") }, e = function () {
                var b = d(), e = b.length > 0; b.each(function () {
                    if (c(this).is(a)) return !0;
                    if (!c(this).prop("checked")) return e = !1
                }); a.prop("checked", e)
            }; e(); b.on("click", "input:checkbox", function (b) { b = c(b.target); b.is(a) || (!a.data("filter") || b.closest(a.data("filter")).length) && e() }); a.click(function (a) { d().prop("checked", a.target.checked) })
        } else a.click(function () { var b = a.data("target"); b && c(b).prop("checked", !0) })
    }; XenForo.AutoChecker = function (a) {
        a.click(function () {
            if (this.checked) {
                var b = null; c.each({ check: !0, uncheck: !1 }, function (d, e) {
                    (b = a.data(d)) && c(b).each(function () {
                        this.checked =
                        e; var a = c(this).data("XenForo.Disabler"); typeof a == "object" && a.setStatus()
                    })
                })
            }
        })
    }; XenForo.ToggleButton = function (a) {
        var b, d = function () { b[e.is(":checked") ? "addClass" : "removeClass"]("checked") }, e = a.hide().find("input:checkbox, input:radio").first(), f = a.closest("ul, ol").bind("toggleButtonClick", d); !e.length && a.attr("for") && (e = c("#" + a.attr("for"))); b = c("<a />").text(a.attr("title") || a.text()).insertBefore(a).attr({ "class": "button " + a.attr("class"), title: a.text() }).click(function () {
            e.click(); f.length ?
            f.triggerHandler("toggleButtonClick") : d(); return !1
        }); a.closest("form").bind("reset", function () { setTimeout(d, 100) }); d()
    }; XenForo.AutoInlineUploader = function (a) {
        a.find("input:file").each(function () {
            var b = c(this).change(function (e) {
                c(e.target).val() != "" && (c('<iframe src="about:blank" style="display:none; background-color: white" name="AutoInlineUploader"></iframe>').insertAfter(c(e.target)).load(function (e) {
                    var g = c(e.target), e = g.contents().text(), h = null; if (!e) return !1; c(i).trigger("PseudoAjaxStop");
                    d.clone(!0).replaceAll(b); setTimeout(function () { g.remove() }, 500); try { e = c.parseJSON(e), console.info("Inline file upload completed successfully. Data: %o", e) } catch (q) { return console.error(e), !1 } if (XenForo.hasResponseError(e)) return !1; c("input:submit", this.$form).removeAttr("disabled"); h = new c.Event("AutoInlineUploadComplete"); h.$form = a; h.ajaxData = e; a.trigger(h); console.log(e); !h.isDefaultPrevented() && e.message && XenForo.alert(e.message, "", 2500)
                }), e = c('<span><input type="hidden" name="_xfNoRedirect" value="1" /><input type="hidden" name="_xfResponseType" value="json-text" /><input type="hidden" name="_xfUploader" value="1" /></span>').appendTo(a),
                a.attr("target", "AutoInlineUploader").submit().trigger("AutoInlineUploadStart"), e.remove(), c(i).trigger("PseudoAjaxStart"), a.find("input:submit").prop("disabled", !0))
            }), d = b.clone(!0)
        })
    }; XenForo.MultiSubmitFix = function (a) {
        var b = function () { c(h).unbind("unload", b); a.trigger("EnableSubmitButtons").find("input:submit, input.PreviewButton, input.DisableOnSubmit").removeClass("disabled").removeAttr("disabled") }, d = function () {
            setTimeout(function () {
                c.browser.webkit || c(h).bind("unload", b); a.trigger("DisableSubmitButtons").find("input:submit, input.PreviewButton, input.DisableOnSubmit").prop("disabled",
                !0).addClass("disabled")
            }, 0); setTimeout(b, 5E3)
        }; a.data("MultiSubmitEnable", b).data("MultiSubmitDisable", d).submit(d); return b
    }; XenForo.SubmitOnChange = function (a) { if (a.is("label") && (a = a.find("input:radio, input:checkbox"), !a.length)) return; a.click(function (a) { clearTimeout(a.target.form.submitTimeout); a.target.form.submitTimeout = setTimeout(function () { c(a.target).closest("form").submit() }, 500) }) }; XenForo.AutoValidator = function (a) { this.__construct(a) }; XenForo.AutoValidator.prototype = {
        __construct: function (a) {
            this.$form =
            a.bind({ submit: c.context(this, "ajaxSave"), reset: c.context(this, "formReset"), BbCodeWysiwygEditorAutoSave: c.context(this, "editorAutoSave") }); this.$form.find('input[type="submit"]').click(c.context(this, "setClickedSubmit")); this.fieldValidatorUrl = this.$form.data("fieldvalidatorurl"); this.optInMode = this.$form.data("optinout") || "optOut"; this.ajaxSubmit = XenForo.isPositive(this.$form.data("normalsubmit")) ? !1 : !0; this.submitPending = !1; this.fieldValidationTimeouts = {}; this.fieldValidationRequests = {}
        }, getExistingDataKey: function () {
            var a =
            this.$form.find("input.ExistingDataKey, select.ExistingDataKey, textarea.ExistingDataKey, button.ExistingDataKey").val(); a === void 0 && (a = this.$form.data("existingdatakey"), a === void 0 && (a = "")); return a
        }, formReset: function () { var a = this.$form.data("exiturl"); a && XenForo.redirect(a) }, setClickedSubmit: function (a) { this.$form.data("clickedsubmitbutton", a.target) }, editorAutoSave: function (a) { this.submitPending && a.preventDefault() }, ajaxSave: function (a) {
            if (!this.ajaxSubmit || !XenForo._enableAjaxSubmit) return !0;
            this.abortPendingFieldValidation(); var b = this.$form.data("clickedsubmitbutton"), d, e = c.Event("AutoValidationBeforeSubmit"); e.formAction = this.$form.attr("action"); e.clickedSubmitButton = b; e.preventSubmit = !1; e.ajaxOptions = {}; this.$form.trigger(e); this.$form.removeData("clickedSubmitButton"); if (e.preventSubmit) return !1; else if (!e.isDefaultPrevented()) d = this.$form.serializeArray(), b && (b = c(b), b.attr("name") && d.push({ name: b.attr("name"), value: b.attr("value") })), this.submitPending = !0, XenForo.ajax(e.formAction,
            d, c.context(this, "ajaxSaveResponse"), e.ajaxOptions), a.preventDefault()
        }, ajaxSaveResponse: function (a, b) {
            this.submitPending = !1; if (!a) return console.warn("No ajax data returned."), !1; var d, e, f; d = c.Event("AutoValidationDataReceived"); d.ajaxData = a; d.textStatus = b; d.validationError = []; console.group("Event: %s", d.type); this.$form.trigger(d); console.groupEnd(); if (d.isDefaultPrevented()) return !1; if (!this.validates(d)) {
                e = c.Event("AutoValidationError"); e.ajaxData = a; e.textStatus = b; e.validationError = d.validationError;
                console.group("Event: %s", e.type); this.$form.trigger(e); console.groupEnd(); if (e.isDefaultPrevented()) return !1; this.$form.closest(".xenOverlay").length && this.$form.closest(".xenOverlay").data("overlay").close(); if (a.errorTemplateHtml) new XenForo.ExtLoader(a, function () { var b = XenForo.alert(a.errorTemplateHtml, XenForo.phrases.following_error_occurred + ":"); b && (b.find("div.errorDetails").removeClass("baseHtml"), a.errorOverlayType && b.closest(".errorOverlay").removeClass("errorOverlay").addClass(a.errorOverlayType)) });
                else if (a.templateHtml) setTimeout(c.context(function () { this.$error = XenForo.createOverlay(null, this.prepareError(a.templateHtml)).load() }, this), 250); else if (a.error !== void 0) { if (typeof a.error === "object") { for (var g in a.error) break; a.error = a.error[g] } XenForo.alert(a.error + "\n" + (a.traceHtml !== void 0 ? '<ol class="traceHtml">\n' + a.traceHtml + "</ol>" : ""), XenForo.phrases.following_error_occurred + ":") } return !1
            } e = c.Event("AutoValidationComplete"); e.ajaxData = a; e.textStatus = b; e.$form = this.$form; console.group("Event: %s",
            e.type); this.$form.trigger(e); console.groupEnd(); if (e.isDefaultPrevented()) return !1; this.$form.parents(".xenOverlay").length && (this.$form.parents(".xenOverlay").data("overlay").close(), a.linkPhrase && (f = this.$form.parents(".xenOverlay").data("overlay").getTrigger(), f.xfFadeOut(XenForo.speed.fast, function () { a.linkUrl && f.is("a") && f.attr("href", a.linkUrl); f.text(a.linkPhrase).xfFadeIn(XenForo.speed.fast) }))); if (a.message) XenForo.alert(a.message, "", 4E3); else {
                if (a._redirectMessage == "") return this.submitPending =
                !0, this.redirect(a._redirectTarget); this.submitPending = !0; XenForo.alert(a._redirectMessage, "", 1E3, c.context(function () { this.redirect(a._redirectTarget) }, this))
            }
        }, validates: function (a) { return c.isEmptyObject(a.validationErrors) && !a.ajaxData.error }, prepareError: function (a) { o = c(a); o.find("label").each(function (a, d) { var e = c("#" + c(d).attr("for")).closest(".ctrlUnit").find("dt > label"); e.length && c(d).prepend(e.text() + "<br />") }); return o }, redirect: function (a) {
            if (XenForo.isPositive(this.$form.data("redirect")) ||
            !parseInt(XenForo._enableOverlays)) { var b = new c.Event("AutoValidationRedirect"); b.redirectTarget = a; this.$form.trigger(b); if (!b.isDefaultPrevented() && b.redirectTarget) { b = function () { XenForo.redirect(a) }; if (XenForo._manualDeferOverlay) c(i).one("ManualDeferComplete", b); else b(); return !0 } } return !1
        }, setFieldValidationTimeout: function (a, b) { if (!this.hasFieldValidator(a)) return !1; console.log("setTimeout %s", a); this.clearFieldValidationTimeout(a); this.fieldValidationTimeouts[a] = setTimeout(b, 250) }, clearFieldValidationTimeout: function (a) {
            this.fieldValidationTimeouts[a] &&
            (console.log("Clear field validation timeout: %s", a), clearTimeout(this.fieldValidationTimeouts[a]), delete this.fieldValidationTimeouts[a])
        }, startFieldValidationRequest: function (a, b, c) { if (!this.hasFieldValidator(a)) return !1; this.abortFieldValidationRequest(a); this.fieldValidationRequests[a] = XenForo.ajax(this.fieldValidatorUrl, { name: a, value: b.fieldValue(), existingDataKey: this.getExistingDataKey() }, c, { global: !1 }) }, abortFieldValidationRequest: function (a) {
            this.fieldValidationRequests[a] && (console.log("Abort field validation request: %s",
            a), this.fieldValidationRequests[a].abort(), delete this.fieldValidationRequests[a])
        }, abortPendingFieldValidation: function () { c.each(this.fieldValidationTimeouts, c.context(this, "clearFieldValidationTimeout")); c.each(this.fieldValidationRequests, c.context(this, "abortFieldValidationRequest")) }, hasFieldValidator: function () { return this.fieldValidatorUrl ? !0 : !1 }
    }; XenForo.AutoValidatorControl = function (a) { this.__construct(a) }; XenForo.AutoValidatorControl.prototype = {
        __construct: function (a) {
            this.$form = a.closest("form.AutoValidator").bind({
                AutoValidationDataReceived: c.context(this,
                "handleFormValidation")
            }); this.$input = a.bind({ change: c.context(this, "change"), AutoValidationError: c.context(this, "showError"), AutoValidationPass: c.context(this, "hideError") }); this.name = a.data("validatorname") || a.attr("name"); this.autoValidate = a.hasClass("NoAutoValidate") ? !1 : !0
        }, change: function () { this.autoValidate && this.$form.data("XenForo.AutoValidator").setFieldValidationTimeout(this.name, c.context(this, "validate")) }, validate: function () {
            this.autoValidate && this.$form.data("XenForo.AutoValidator").startFieldValidationRequest(this.name,
            this.$input, c.context(this, "handleValidation"))
        }, handleValidation: function (a) { return a && a.error && a.error.hasOwnProperty(this.name) ? (this.$input.trigger({ type: "AutoValidationError", errorMessage: a.error[this.name] }), !1) : (this.$input.trigger("AutoValidationPass"), !0) }, showError: function (a) { console.warn("%s: %s", this.name, a.errorMessage); this.positionError(this.fetchError(a.errorMessage).css("display", "inline-block")) }, hideError: function () { console.info("%s: Okay", this.name); this.$error && this.fetchError().hide() },
        fetchError: function (a) { if (!this.$error) this.$error = c('<label for="' + this.$input.attr("id") + '" class="formValidationInlineError">WHoops</label>').insertAfter(this.$input); a && this.$error.html(a).xfActivate(); return this.$error }, positionError: function (a) {
            a.removeClass("inlineError"); var b = this.$input.coords("outer", "position"), d = this.$input.coords("outer"), e = c(h), f = a.outerWidth(), g = { top: b.top }; XenForo.isRTL() ? (g.left = b.left - f - 10, d = d.left - f - 10 > 0) : (d = d.left + d.width + 10 + f < e.width() + e.scrollLeft(), g.left =
            b.left + b.width + 10); d ? a.css(g) : a.addClass("inlineError")
        }, handleFormValidation: function (a) { this.handleValidation(a.ajaxData, a.textStatus) || a.validationError.push(this.name) }
    }; XenForo.isAutoValidatorField = function (a) { var b; b = c(a.form); if (!b.hasClass("AutoValidator")) return !1; if (b = b.data("XenForo.AutoValidator")) switch (a = c(a), b.optInMode) { case "OptIn": return a.hasClass("OptIn") || a.closest(".ctrlUnit").hasClass("OptIn"); default: return !a.hasClass("OptOut") && !a.closest(".ctrlUnit").hasClass("OptOut") } return !1 };
    XenForo.PreviewForm = function (a) {
        var b = a.data("previewurl"); b ? a.find(".PreviewButton").click(function () {
            XenForo.ajax(b, a.serialize(), function (b) {
                if (XenForo.hasResponseError(b) || !XenForo.hasTemplateHtml(b)) return !1; new XenForo.ExtLoader(b, function (b) {
                    var d = a.find(".PreviewContainer").first(); d.length ? d.xfFadeOut(XenForo.speed.fast, function () { d.html(b.templateHtml).xfActivate() }) : d = c("<div />", { "class": "PreviewContainer" }).hide().html(b.templateHtml).xfActivate().prependTo(a); d.xfFadeIn(XenForo.speed.fast);
                    d.get(0).scrollIntoView(!0)
                })
            })
        }) : console.warn("PreviewForm has no data-previewUrl: %o", a)
    }; XenForo.LiveTitle = function (a) {
        var b = a.closest(".formOverlay").find("h2.h1"), d; b.length || (b = c("h1").first()); console.info("Title Element: %o", b); b.data("originalhtml", b.html()); d = function (d) { a.trigger("LiveTitleSet", [d]); b.html(d === "" ? b.data("originalhtml") : a.data("livetitletemplate").replace(/%s/, c("<div />").text(d).html())) }; a.hasClass("prompt") || d(a.strval()); a.bind("keyup focus", function () { d(a.strval()) }).closest("form").bind("reset",
        function () { d("") })
    }; XenForo.TextareaElastic = function (a) { this.__construct(a) }; XenForo.TextareaElastic.prototype = {
        __construct: function (a) { this.$input = a; this.curHeight = 0; a.bind("keyup focus", c.context(this, "recalculate")); a.bind("paste", c.context(this, "paste")); a.val() !== "" && this.recalculate() }, recalculate: function () {
            var a = this.$input, b = a.get(0), d, e; if (a.val() === "") a.css({ "overflow-y": "hidden", height: "" }), this.curHeight = 0; else if (b.clientWidth) {
                if (!this.minHeight) {
                    this.minHeight = (this.borderBox = a.css("-moz-box-sizing") ==
                    "border-box" || a.css("box-sizing") == "border-box") ? a.outerHeight() : b.clientHeight; if (!this.minHeight) return; this.maxHeight = parseInt(a.css("max-height"), 10); this.spacing = this.borderBox ? a.outerHeight() - a.innerHeight() : 0
                } if (!this.$clone) this.$clone = c("<textarea />").css({
                    position: "absolute", left: XenForo.isRTL() ? "9999em" : "-9999em", visibility: "hidden", width: b.clientWidth, height: "1px", "font-size": a.css("font-size"), "font-family": a.css("font-family"), "font-weight": a.css("font-weight"), "line-height": a.css("line-height"),
                    "word-wrap": a.css("word-wrap")
                }).attr("tabindex", -1).val(" "), this.$clone.appendTo(i.body), this.lineHeight = this.$clone.get(0).scrollHeight; this.$clone.val(a.val()); b = this.$clone.get(0); d = Math.max(this.minHeight, b.scrollHeight + this.lineHeight + this.spacing); if (d < this.maxHeight) {
                    if (this.curHeight != d) {
                        b = a.get(0); if (this.curHeight == this.maxHeight && b.setSelectionRange) e = b.selectionStart; a.css({ "overflow-y": "hidden", height: d + "px" }); if (this.curHeight == this.maxHeight && b.setSelectionRange) try {
                            b.setSelectionRange(e,
                            e)
                        } catch (f) { } this.curHeight = d
                    }
                } else if (this.curHeight != this.maxHeight) { b = a.get(0); if (b.setSelectionRange) e = b.selectionStart; a.css({ "overflow-y": "auto", height: this.maxHeight + "px" }); if (b.setSelectionRange) try { b.setSelectionRange(e, e) } catch (g) { } this.curHeight = this.maxHeight }
            }
        }, paste: function () { setTimeout(c.context(this, "recalculate"), 100) }
    }; XenForo.AutoTimeZone = function (a) {
        var b = new Date, d = new Date(b.getFullYear(), 0, 1), b = new Date(b.getFullYear(), 5, 1), d = Math.round(d.getTimezoneOffset()), b = Math.round(b.getTimezoneOffset());
        return c.browser.opera ? !1 : XenForo.AutoTimeZone.map[d + "," + b] ? (a.val(XenForo.AutoTimeZone.map[d + "," + b]), !0) : !1
    }; XenForo.AutoTimeZone.map = {
        "660,660": "Pacific/Midway", "600,600": "Pacific/Honolulu", "570,570": "Pacific/Marquesas", "540,480": "America/Anchorage", "480,420": "America/Los_Angeles", "420,360": "America/Denver", "420,420": "America/Phoenix", "360,300": "America/Chicago", "360,360": "America/Belize", "300,240": "America/New_York", "300,300": "America/Bogota", "270,270": "America/Caracas", "240,180": "America/Halifax",
        "180,240": "America/Cuiaba", "240,240": "America/La_Paz", "210,150": "America/St_Johns", "180,180": "America/Argentina/Buenos_Aires", "120,180": "America/Sao_Paulo", "180,120": "America/Miquelon", "120,120": "America/Noronha", "60,60": "Atlantic/Cape_Verde", "60,0": "Atlantic/Azores", "0,-60": "Europe/London", "0,0": "Atlantic/Reykjavik", "-60,-120": "Europe/Amsterdam", "-60,-60": "Africa/Algiers", "-120,-60": "Africa/Windhoek", "-120,-180": "Europe/Athens", "-120,-120": "Africa/Johannesburg", "-180,-240": "Africa/Nairobi", "-180,-180": "Africa/Nairobi",
        "-210,-270": "Asia/Tehran", "-240,-240": "Europe/Moscow", "-240,-300": "Asia/Yerevan", "-270,-270": "Asia/Kabul", "-300,-360": "Asia/Yekaterinburg", "-300,-300": "Asia/Tashkent", "-330,-330": "Asia/Kolkata", "-345,-345": "Asia/Kathmandu", "-360,-360": "Asia/Dhaka", "-360,-420": "Asia/Novosibirsk", "-390,-390": "Asia/Rangoon", "-420,-420": "Asia/Bangkok", "-420,-480": "Asia/Krasnoyarsk", "-480,-480": "Asia/Hong_Kong", "-480,-540": "Asia/Irkutsk", "-540,-540": "Asia/Tokyo", "-540,-600": "Asia/Yakutsk", "-630,-570": "Australia/Adelaide",
        "-570,-570": "Australia/Darwin", "-660,-600": "Australia/Sydney", "-600,-660": "Asia/Vladivostok", "-660,-720": "Asia/Magadan", "-690,-690": "Pacific/Norfolk", "-660,-720": "Asia/Anadyr", "-780,-720": "Pacific/Auckland", "-825,-765": "Pacific/Chatham", "-780,-780": "Pacific/Tongatapu", "-840,-840": "Pacific/Kiritimati"
    }; XenForo.DatePicker = function (a) {
        XenForo.DatePicker.$root || c.tools.dateinput.localize("_f", { months: XenForo.phrases._months, shortMonths: "1,2,3,4,5,6,7,8,9,10,11,12", days: "s,m,t,w,t,f,s", shortDays: XenForo.phrases._daysShort });
        var b = a.dateinput({ lang: "_f", format: "yyyy-mm-dd", speed: 0, yearRange: [-100, 5], onShow: function () { var a = XenForo.DatePicker.$root, e = b.offset(), f = 0; a.css({ top: e.top + b.outerHeight({ margins: !0 }), left: e.left }); b.parents().each(function (a, b) { var d = parseInt(c(b).css("z-index"), 10); d > f && (f = d) }); a.css("z-index", f + 1E3) } }); b.addClass(a.attr("class")); a.attr("id") && b.attr("id", a.attr("id")); if (!XenForo.DatePicker.$root) XenForo.DatePicker.$root = c("#calroot").appendTo(i.body), c("#calprev").html(XenForo.isRTL() ? "&rarr;" :
        "&larr;").prop("unselectable", !0), c("#calnext").html(XenForo.isRTL() ? "&larr;" : "&rarr;").prop("unselectable", !0)
    }; XenForo.DatePicker.$root = null; XenForo.AutoComplete = function (a) { this.__construct(a) }; XenForo.AutoComplete.prototype = {
        __construct: function (a) {
            this.$input = a; this.url = a.data("acurl") || XenForo.AutoComplete.getDefaultUrl(); this.extraFields = a.data("acextrafields"); var b = { multiple: a.hasClass("AcSingle") ? !1 : ",", minLength: 2, queryKey: "q", extraParams: {}, jsonContainer: "results", autoSubmit: XenForo.isPositive(a.data("autosubmit")) };
            a.data("acoptions") && (b = c.extend(b, a.data("acoptions"))); if (b.autoSubmit) b.multiple = !1; this.multiple = b.multiple; this.minLength = b.minLength; this.queryKey = b.queryKey; this.extraParams = b.extraParams; this.jsonContainer = b.jsonContainer; this.autoSubmit = b.autoSubmit; this.loadVal = ""; this.results = new XenForo.AutoCompleteResults({ onInsert: c.context(this, "addValue") }); a.attr("autocomplete", "off").keydown(c.context(this, "keystroke")).keypress(c.context(this, "operaKeyPress")).blur(c.context(this, "blur")); a.closest("form").submit(c.context(this,
            "hideResults"))
        }, keystroke: function (a) { var b = !0; switch (a.keyCode || a.charCode) { case 40: this.results.selectResult(1); break; case 38: this.results.selectResult(-1); break; case 27: this.results.hideResults(); break; case 13: this.results.isVisible() ? this.results.insertSelectedResult() : b = !1; break; default: b = !1, this.loadTimer && clearTimeout(this.loadTimer), this.loadTimer = setTimeout(c.context(this, "load"), 200), this.results.hideResults() } b && a.preventDefault(); this.preventKey = b }, operaKeyPress: function (a) {
            c.browser.opera &&
            this.preventKey && a.preventDefault()
        }, blur: function () { clearTimeout(this.loadTimer); setTimeout(c.context(this, "hideResults"), 250); if (this.xhr) this.xhr.abort(), this.xhr = !1 }, load: function () {
            var a = this.loadVal, b = this.extraParams; this.loadTimer && clearTimeout(this.loadTimer); this.loadVal = this.getPartialValue(); if (this.loadVal == "") this.hideResults(); else if (this.loadVal != a && !(this.loadVal.length < this.minLength)) b[this.queryKey] = this.loadVal, this.extraFields != "" && c(this.extraFields).each(function () {
                b[this.name] =
                c(this).val()
            }), this.xhr && this.xhr.abort(), this.xhr = XenForo.ajax(this.url, b, c.context(this, "showResults"), { global: !1, error: !1 })
        }, hideResults: function () { this.results.hideResults() }, showResults: function (a) { if (this.xhr) this.xhr = !1; this.jsonContainer && a && (a = a[this.jsonContainer]); this.results.showResults(this.getPartialValue(), a, this.$input) }, addValue: function (a) {
            if (this.multiple) { var b = this.getFullValues(); a != "" && (b.length && (a = " " + a), b.push(a + this.multiple + " ")); this.$input.val(b.join(this.multiple)) } else this.$input.val(a);
            this.$input.trigger("AutoComplete", { inserted: a, current: this.$input.val() }); this.autoSubmit ? this.$input.closest("form").submit() : this.$input.focus()
        }, getFullValues: function () { var a = this.$input.val(); return a == "" ? [] : this.multiple ? (splitPos = a.lastIndexOf(this.multiple), splitPos == -1 ? [] : (a = a.substr(0, splitPos), a.split(this.multiple))) : [a] }, getPartialValue: function () {
            var a = this.$input.val(), b; return this.multiple ? (b = a.lastIndexOf(this.multiple), b == -1 ? c.trim(a) : c.trim(a.substr(b + this.multiple.length))) :
            c.trim(a)
        }
    }; XenForo.AutoComplete.getDefaultUrl = function () { if (XenForo.AutoComplete.defaultUrl === null) XenForo.AutoComplete.defaultUrl = c("html").hasClass("Admin") ? "admin.php?users/search-name&_xfResponseType=json" : "index.php?members/find&_xfResponseType=json"; return XenForo.AutoComplete.defaultUrl }; XenForo.AutoComplete.defaultUrl = null; XenForo.AutoCompleteResults = function (a) { this.__construct(a) }; XenForo.AutoCompleteResults.prototype = {
        __construct: function (a) {
            this.options = c.extend({ onInsert: !1 }, a); this.selectedResult =
            0; this.resizeBound = this.resultsVisible = this.$results = !1
        }, isVisible: function () { return this.resultsVisible }, hideResults: function () { this.resultsVisible = !1; this.$results && this.$results.hide() }, showResults: function (a, b, d, e) {
            var f = 0, g, j, q; if (b) {
                this.resultsVisible = !1; this.$results ? this.$results.hide().empty() : (this.$results = c("<ul />").css({ position: "absolute", display: "none" }).addClass("autoCompleteList").appendTo(i.body), d.parents().each(function (a, b) {
                    var d = c(b), d = parseInt(d.css("z-index"), 10); d > f && (f =
                    d)
                }), this.$results.css("z-index", f + 1E3)); a = RegExp("(" + XenForo.regexQuote(a) + ")", "i"); for (g in b) b.hasOwnProperty(g) && (j = b[g], q = c("<li />").css("cursor", "pointer").attr("unselectable", "on").data("autocomplete", g).click(c.context(this, "resultClick")).mouseenter(c.context(this, "resultMouseEnter")), typeof j == "string" ? q.html(XenForo.htmlspecialchars(j).replace(a, "<strong>$1</strong>")) : q.html(j.username.replace(a, "<strong>$1</strong>")).prepend(c('<img class="autoCompleteAvatar" />').attr("src", j.avatar)),
                q.appendTo(this.$results)); if (this.$results.children().length) { this.selectResult(0, !0); this.resizeBound || c(h).bind("resize", c.context(this, "hideResults")); if (!e && (b = d.offset(), e = { top: b.top + d.outerHeight(), left: b.left }, XenForo.isRTL())) e.right = c("html").width() - b.left - d.outerWidth(), e.left = "auto"; this.$results.css(e).show(); this.resultsVisible = !0 }
            } else this.hideResults()
        }, resultClick: function (a) { a.stopPropagation(); this.insertResult(c(a.currentTarget).data("autocomplete")); this.hideResults() }, resultMouseEnter: function (a) {
            this.selectResult(c(a.currentTarget).index(),
            !0)
        }, selectResult: function (a, b) { var d, e; if (this.$results && (b ? this.selectedResult = a : this.selectedResult += a, d = this.selectedResult, e = this.$results.children(), e.each(function (a) { a == d ? c(this).addClass("selected") : c(this).removeClass("selected") }), d < 0 || d >= e.length)) this.selectedResult = -1 }, insertSelectedResult: function () {
            var a, b = !1; if (!this.resultsVisible) return !1; if (this.selectedResult >= 0 && (a = this.$results.children().get(this.selectedResult))) this.insertResult(c(a).data("autocomplete")), b = !0; this.hideResults();
            return b
        }, insertResult: function (a) { if (this.options.onInsert) this.options.onInsert(a) }
    }; XenForo.AutoSelect = function (a) { a.bind("focus", function () { setTimeout(function () { a.select() }, 50) }) }; XenForo.StatusEditor = function (a) { this.__construct(a) }; XenForo.StatusEditor.prototype = {
        __construct: function (a) {
            this.$input = a.keyup(c.context(this, "update")).keydown(c.context(this, "preventNewline")); this.$counter = c(this.$input.data("statuseditorcounter")); if (!this.$counter.length) this.$counter = c("<span />").insertAfter(this.$input);
            this.$counter.addClass("statusEditorCounter").text("0"); this.$form = this.$input.closest("form").bind({ AutoValidationComplete: c.context(this, "saveStatus") }); this.charLimit = 140; this.charCount = 0; this.update()
        }, update: function () { var a = this.$input.val(); this.$input.attr("placeholder") && this.$input.attr("placeholder") == a ? this.setCounterValue(this.charLimit, a.length) : this.setCounterValue(this.charLimit - a.length, a.length) }, setCounterValue: function (a, b) {
            a < 0 ? (this.$counter.addClass("error"), this.$counter.removeClass("warning")) :
            a <= this.charLimit - 130 ? (this.$counter.removeClass("error"), this.$counter.addClass("warning")) : (this.$counter.removeClass("error"), this.$counter.removeClass("warning")); this.$counter.text(a); this.charCount = b || this.$input.val().length
        }, preventNewline: function (a) { if (a.which == 13) return a.preventDefault(), c(this.$input.get(0).form).submit(), !1 }, saveStatus: function (a) { this.$input.val(""); this.update(a); a.ajaxData && a.ajaxData.status !== void 0 && c(".CurrentStatus").text(a.ajaxData.status) }
    }; c.tools.tooltip.addEffect("PreviewTooltip",
    function () { var a = this.getTrigger().offset(), b = this.getConf(), d = { top: "auto", bottom: c(h).height() - a.top + b.offset[0] }, e = c(h).width() < 480; if (XenForo.isRTL()) d.right = c("html").width() - this.getTrigger().outerWidth() - a.left - b.offset[1], d.left = "auto"; else if (d.left = a.left + b.offset[1], e) d.left = Math.min(50, d.left); this.getTip().css(d).xfFadeIn(XenForo.speed.normal) }, function () { this.getTip().xfFadeOut(XenForo.speed.fast) }); XenForo._PreviewTooltipCache = {}; XenForo.PreviewTooltip = function (a) {
        var b, d, e; parseInt(XenForo._enableOverlays) &&
        ((d = a.data("previewurl")) ? (a.find("[title]").andSelf().attr("title", ""), a.bind({
            mouseenter: function () {
                b || (e = setTimeout(function () {
                    if (!b) {
                        b = !0; var e = c("#PreviewTooltip"), g; e.length ? (console.log("Setup preview tooltip for %s", d), g = e.clone().removeAttr("id").addClass("xenPreviewTooltip").appendTo(i.body), XenForo._PreviewTooltipCache[d] || XenForo.ajax(d, {}, function (a) {
                            XenForo.hasTemplateHtml(a) ? (XenForo._PreviewTooltipCache[d] = a.templateHtml, c(a.templateHtml).xfInsert("replaceAll", g.find(".PreviewContents"))) :
                            g.remove()
                        }, { type: "GET", error: !1, global: !1 }), a.tooltip(XenForo.configureTooltipRtl({ predelay: 500, delay: 0, effect: "PreviewTooltip", fadeInSpeed: "normal", fadeOutSpeed: "fast", tip: g, position: "bottom left", offset: [10, -15] })), a.data("tooltip").show(0), XenForo._PreviewTooltipCache[d] && c(XenForo._PreviewTooltipCache[d]).xfInsert("replaceAll", g.find(".PreviewContents"), "show", 0)) : console.error("Unable to find #PreviewTooltip")
                    }
                }, 800))
            }, mouseleave: function () { b ? a.data("tooltip") && a.data("tooltip").hide() : e && clearTimeout(e) },
            mousedown: function () { e && clearTimeout(e); a.data("tooltip") && a.data("tooltip").hide() }
        })) : console.warn("Preview tooltip has no preview: %o", a))
    }; XenForo.PopupItemLink = function (a) { var b = a.find(".PopupItemLink").first().attr("href"); b && a.addClass("PopupItemLinkActive").click(function (a) { c(a.target).is("a") || XenForo.redirect(b) }) }; XenForo.Loader = function (a) {
        var b = function (d) {
            var e = a.attr("href") || a.data("href"), f = a.data("target"); e && c(f).length && (d.preventDefault(), XenForo.ajax(e, {}, function (d, e) {
                if (XenForo.hasResponseError(d)) return !1;
                var h = new c.Event("ContentLoaded"); h.ajaxData = d; h.textStatus = e; a.trigger(h); h.isDefaultPrevented() || d.templateHtml && new XenForo.ExtLoader(d, function () { var e = a.data("method"); typeof c.fn[e] != "function" && (e = "appendTo"); e == "replaceAll" ? c(d.templateHtml).xfInsert(e, f, "show", 0) : c(d.templateHtml).xfInsert(e, f); a.data("unlink") !== !1 && a.removeAttr("href").removeData("href").unbind("click", b) })
            }))
        }; a.bind("click", b)
    }; XenForo.FieldAdder = function (a) {
        c(a.data("source")).filter(".PollNonJsInput").remove(); a.click(function () {
            var b =
            c(a.data("source")), d = a.data("maxfields"), e = null; console.log("source.length %s, maxfields %s", b.length, d); if (b.length && (!d || b.length < d)) e = b.last().clone(), e.find('input:not([type="button"], [type="submit"])').val("").prop("disabled", !0), a.trigger({ type: "FieldAdderClone", clone: e }), e.xfInsert("insertAfter", b.last(), !1, !1, function () { var b = e.find("input"); b.prop("disabled", !1); b.first().focus().select(); d && c(a.data("source")).length >= d && a.xfRemove() })
        })
    }; XenForo.ReadToggle = function (a) {
        a.click(function (b) {
            b.preventDefault();
            var d = null, e = null, f = a.data("counter"); d == null && (e = a.closest(".discussionListItem").andSelf().toggleClass("unread"), d = XenForo.ajax(a.attr("href"), { _xfConfirm: 1 }, function (b) {
                d = null; if (XenForo.hasResponseError(b)) return !1; if (typeof b.unread != "undefined") e[b.unread ? "addClass" : "removeClass"]("unread"); if (f && typeof b.counterFormatted != "undefined") { var h = c(f), i = h.find("span.Total"); i.length ? i.text(b.counterFormatted) : h.text(b.counterFormatted) } typeof b.actionPhrase != "undefined" && (a.text() != "" && a.html(b.actionPhrase),
                a.attr("title") && a.attr("title", b.actionPhrase)); XenForo.alert(b._redirectMessage, "", 1E3)
            }))
        })
    }; XenForo.Notices = function (a) {
        a.show(); var b; a.hasClass("PanelScroller") && (b = XenForo.PanelScroller(a.find(".PanelContainer"), { scrollable: { speed: a.dataOrDefault("speed", 400) * XenForo._animationSpeedMultiplier, vertical: XenForo.isPositive(a.data("vertical")), keyboard: !1, touch: !1, prev: ".NoticePrev", next: ".NoticeNext" }, autoscroll: { interval: a.dataOrDefault("interval", 2E3) } })) && b.getItems().length > 1 && c(i).bind({
            XenForoWindowBlur: function () { b.stop() },
            XenForoWindowFocus: function () { b.play() }
        }); a.delegate("a.DismissCtrl", "click", function (d) { d.preventDefault(); var e = c(this), f = e.closest(".Notice"), g = f.parent(); e.data("tooltip") && e.data("tooltip").hide(); b ? (b.removeItem(f), b.getItems().length || a.xfFadeUp()) : f.xfFadeUp(function () { f.remove(); g.find(".Notice").length || a.xfFadeUp() }); e.data("xhr") || e.data("xhr", XenForo.ajax(e.attr("href"), { _xfConfirm: 1 }, function (a) { e.removeData("xhr"); if (XenForo.hasResponseError(a)) return !1 })) })
    }; XenForo.PanelScroller =
    function (a, b) {
        function d() { var b = 0; a.find(".Panels > *").css({ width: a.innerWidth(), height: "auto" }).each(function () { b = Math.max(c(this).outerHeight(), b) }).andSelf().css("height", b); var d = a.data("scrollable"); d && d.seekTo(d.getIndex(), 0) } var e = a.find(".Panels > *"); if (e.length < 2) return a.find(".Panels").css("position", "static"), !1; e.find("script").remove(); b = c.extend(!0, { scrollable: { circular: !0, items: ".Panels" }, navigator: { navi: ".Nav", naviItem: "a", activeClass: "current" }, autoscroll: { interval: 3E3 } }, b); a.css("overflow",
        "hidden"); b.scrollable.vertical || a.css("height", "auto").find(".Panels").css("width", "20000em").find(".panel").css("float", XenForo.isRTL() ? "right" : "left"); c(h).bind("load resize", d); c(".mainContent").bind("XenForoResize", d); d(); a.scrollable(b.scrollable).navigator(b.navigator); e.length > 1 && a.autoscroll(b.autoscroll); return a.data("scrollable")
    }; XenForo.DisplayIgnoredContent = function (a) {
        var b, d, e, f; a.preventDefault(); c("a.DisplayIgnoredContent").hide(); c("#ignoredUserCss").empty().remove(); if (i.styleSheets) for (a =
        0; a < i.styleSheets.length; a++) { d = i.styleSheets[a]; try { e = d.cssRules ? d.cssRules : d.rules } catch (g) { e = !1 } if (e) for (b = 0; b < e.length; b++) f = e[b], f.selectorText && f.selectorText.toLowerCase() == ".ignored" && (d.deleteRule ? d.deleteRule(b) : d.removeRule(b)) } c(".ignored").removeClass("ignored")
    }; c("html").hasClass("Public") && c(function () {
        c("body").delegate("a.DisplayIgnoredContent", "click", XenForo.DisplayIgnoredContent); if (h.location.hash) {
            var a = c(h.location.hash.replace(/[^\w_#-]/g, "")); a.hasClass("ignored") && (a.removeClass("ignored"),
            a.get(0).scrollIntoView(!0))
        }
    }); XenForo.SquareThumbs = function (a) { var b = a.data("thumb-height") || 44, d = a.data("thumb-selector") || "a.SquareThumb"; console.info("XenForo.SquareThumbs: %o", a); a = a.find(d).addClass("SquareThumb").children("img"); d = function () { var a = c(this), d = a.width(), g = a.height(); d && g && (g > d ? (a.css("width", b), a.css("top", (a.height() - b) / 2 * -1)) : (a.css("height", b), a.css("left", (a.width() - b) / 2 * -1))) }; a.load(d); a.each(d) }; XenForo.register("a.OverlayTrigger, input.OverlayTrigger, button.OverlayTrigger, label.OverlayTrigger, a.username, a.avatar",
    "XenForo.OverlayTrigger"); XenForo.register(".ToggleTrigger", "XenForo.ToggleTrigger"); XenForo.isTouchBrowser() || (XenForo.register(".Tooltip", "XenForo.Tooltip"), XenForo.register("a.StatusTooltip", "XenForo.StatusTooltip"), XenForo.register(".PreviewTooltip", "XenForo.PreviewTooltip")); XenForo.register("a.LbTrigger", "XenForo.LightBoxTrigger"); XenForo.register(".ClickProxy", "XenForo.ClickProxy"); XenForo.register(".Popup", "XenForo.PopupMenu", "XenForoActivatePopups"); XenForo.register(".PageNav", "XenForo.PageNav");
    XenForo.register(".Tabs", "XenForo.Tabs"); XenForo.register(".SquareThumbs", "XenForo.SquareThumbs"); XenForo.register("form.xenForm", "XenForo.MultiSubmitFix"); XenForo.register("input.CheckAll, a.CheckAll, label.CheckAll", "XenForo.CheckAll"); XenForo.register("input.AutoChecker", "XenForo.AutoChecker"); XenForo.register("label.ToggleButton", "XenForo.ToggleButton"); XenForo.register("form.AutoInlineUploader", "XenForo.AutoInlineUploader"); XenForo.register("form.AutoValidator", "XenForo.AutoValidator"); XenForo.register("select.AutoTimeZone",
    "XenForo.AutoTimeZone"); XenForo.register("a.Loader, input.Loader", "XenForo.Loader"); var v = "step" in i.createElement("input"); XenForo.register("input, textarea", function () {
        var a = c(this); switch (a.attr("type")) { case "hidden": case "submit": return; case "checkbox": case "radio": a.hasClass("SubmitOnChange") && XenForo.create("XenForo.SubmitOnChange", this); return } if (a.attr("type") == "number" && v) this.type = "text", a.addClass("SpinBox number"); a.hasClass("SpinBox") && XenForo.create("XenForo.SpinBox", this); a.hasClass("Prompt") &&
        (console.error("input.Prompt[title] is now deprecated. Please replace any instances with input[placeholder] and remove the Prompt class."), a.attr({ placeholder: a.attr("title"), title: "" })); a.attr("placeholder") && XenForo.create("XenForo.Prompt", this); a.data("livetitletemplate") && XenForo.create("XenForo.LiveTitle", this); a.is(":date") && XenForo.create("XenForo.DatePicker", this); a.hasClass("AutoComplete") && XenForo.create("XenForo.AutoComplete", this); a.hasClass("AutoSelect") && XenForo.create("XenForo.AutoSelect",
        this); XenForo.isAutoValidatorField(this) && XenForo.create("XenForo.AutoValidatorControl", this); a.is("textarea.StatusEditor") && XenForo.create("XenForo.StatusEditor", this); a.is("textarea.Elastic") && (XenForo.isTouchBrowser() ? (!a.attr("rows") || a.attr("rows") <= 2) && a.attr("rows", 6) : XenForo.create("XenForo.TextareaElastic", this))
    }); XenForo.register("form.Preview", "XenForo.PreviewForm"); XenForo.register("a.FieldAdder, input.FieldAdder", "XenForo.FieldAdder"); XenForo.register("a.ReadToggle", "XenForo.ReadToggle");
    c("html").hasClass("Public") && (XenForo.register("#loginBar", "XenForo.LoginBar"), XenForo.register("#QuickSearch", "XenForo.QuickSearch"), XenForo.register("a.AttributionLink", "XenForo.AttributionLink"), XenForo.register("#ReCaptcha", "XenForo.ReCaptcha"), XenForo.register("#Captcha", "XenForo.Captcha"), XenForo.register("img.bbCodeImage", "XenForo.BbCodeImage"), XenForo.register("a.LikeLink", "XenForo.LikeLink"), XenForo.isTouchBrowser() || XenForo.register("h3.nodeTitle a", "XenForo.NodeDescriptionTooltip"), XenForo.register("#AccountMenu",
    "XenForo.AccountMenu"), XenForo.register("a.FollowLink", "XenForo.FollowLink"), XenForo.register("li.PopupItemLink", "XenForo.PopupItemLink"), XenForo.register("#Notices", "XenForo.Notices")); XenForo.register("input:checkbox.Disabler, input:radio.Disabler", "XenForo.Disabler"); var u = !1; c(h).on("load", function () { if (!u && h.location.hash) { var a = h.location.hash.replace(/[:.#\s\[\]]/g, ""), a = c("#" + a); a.length && a.get(0).scrollIntoView(!0) } }); c(function () {
        XenForo.Facebook.start(); XenForo.init(); if (h.location.hash) c(h).one("scroll",
        function () { u = !0 })
    })
})(jQuery, this, document);