﻿if (typeof window.op_calendar == "undefined" || !window.op_calendar) { window.op_calendar = { isFestMode: false, isMonthMode: false } } (function () { var X = window.op_calendar; document.writeln("<style>#cal{width:450px;border:1px solid #c3d9ff;font-size:12px;margin:10px}#cal #top{height:29px;line-height:29px;background:#e7eef8;color:#003784;padding-left:20px;_padding-top:5px;}#cal #top select{font-size:12px;height:19px;line-height:19px;}#cal #top #top_cal,#cal #top #top_fest{display:inline-block;width:300px;white-space:nowrap}#cal #top #top_fest{font-size:14px;}#cal #top #s_fest{display:inline-block;width:115px;text-align:right;padding-right:15px;}#cal #fest_desc{height:24px;line-height:24px;padding-left:20px;color:#999;border-bottom:1px solid #ddd;}#cal ul#wk{margin:0;padding:0;height:25px}#cal ul#wk li{float:left;width:60px;text-align:center;line-height:25px;list-style:none}#cal ul#wk li b{font-weight:normal;color:#c60b02}#cal #cm{clear:left;border-top:1px solid #ddd;position:relative}#cal #cm .cell{position:absolute;width:60px;height:36px;text-align:center;}#cal #cm .cell .so{font:bold 16px arial;}#cal #cm .fa{background:url(http://www.baidu.com/aladdin/img/wannianli/bdop_calendar.png) no-repeat scroll -65px center transparent;width:55px;height:20px;line-height:20px;color:#fff;padding:8px 0px;font-size:14px;font-weight:bold;}#cal #cm .fc{width:16px;height:38px;_height:39px;text-align:center;writing-mode:tb-rl;color:#fff;position:absolute;}#cal #cm .fr{background:#ffb997;}#cal #cm .fw{background:#9cf;}#cal #bm{border-top:1px dotted #ddd;text-align:right;height:24px;line-height:24px;padding:0 15px 0 0;*padding-top:4px;}#cal #bm #hlink{color:7977ce}#cal #bm #bcal{font-size:12px;width:65px;height:20px;display:inline-block;line-height:20px;cursor:pointer;text-align:center;text-decoration:none;color:#000;background:url(http://www.baidu.com/aladdin/img/wannianli/bdop_calendar.png) no-repeat scroll 0px 0px transparent;}#cal #fd{display:none;position:absolute;border:1px solid #dddddf;background:#feffcd;padding:10px;line-height:21px;width:150px;_width:170px;}#cal #fd b{font-weight:normal;color:#c60a00}</style>"); document.writeln(['<div id="cal"><div id="top"><span id="top_cal"', X.isFestMode ? ' style="display:none;"' : "", '>公元&nbsp;<select></select>&nbsp;年&nbsp;<select></select>&nbsp;月&nbsp;&nbsp;&nbsp;&nbsp;农历<span></span>年&nbsp;[&nbsp;<span></span>年&nbsp;]</span><span id="top_fest"', !X.isFestMode ? ' style="display:none;"' : "", ">", X.isFestMode && X.festival[X.currentFest - 1].title, '</span><span id="s_fest"', !X.festival ? ' style="display:none"' : "", '><select></select></span></div><div id="fest_desc"', !X.isFestMode ? ' style="display:none;"' : "", ">", X.isFestMode && X.festival[X.currentFest - 1].desc, '</div><ul id="wk"><li><b>日</b></li><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li><b>六</b></li></ul><div id="cm"></div><div id="bm"><a target="_blank" id="hlink" onmousedown="return c({\'fm\':\'alop\',\'title\':this.innerHTML,\'url\':this.href,\'p1\':al_c(this),\'p2\':1})" href="javascript:void(0)"', X.isFestMode ? ' style="display:none;"' : "", '>历史上的今天</a><a id="bcal" title="点击后跳转回日历"', !X.isFestMode ? ' style="display:none;"' : "", ">回到日历</a></div></div>"].join("")); var W = navigator.userAgent.indexOf("MSIE") != -1 && !window.opera; function P(C) { return document.getElementById(C) } function V(C) { return document.createElement(C) } var T = [19416, 19168, 42352, 21717, 53856, 55632, 91476, 22176, 39632, 21970, 19168, 42422, 42192, 53840, 119381, 46400, 54944, 44450, 38320, 84343, 18800, 42160, 46261, 27216, 27968, 109396, 11104, 38256, 21234, 18800, 25958, 54432, 59984, 28309, 23248, 11104, 100067, 37600, 116951, 51536, 54432, 120998, 46416, 22176, 107956, 9680, 37584, 53938, 43344, 46423, 27808, 46416, 86869, 19872, 42416, 83315, 21168, 43432, 59728, 27296, 44710, 43856, 19296, 43748, 42352, 21088, 62051, 55632, 23383, 22176, 38608, 19925, 19152, 42192, 54484, 53840, 54616, 46400, 46752, 103846, 38320, 18864, 43380, 42160, 45690, 27216, 27968, 44870, 43872, 38256, 19189, 18800, 25776, 29859, 59984, 27480, 21952, 43872, 38613, 37600, 51552, 55636, 54432, 55888, 30034, 22176, 43959, 9680, 37584, 51893, 43344, 46240, 47780, 44368, 21977, 19360, 42416, 86390, 21168, 43312, 31060, 27296, 44368, 23378, 19296, 42726, 42208, 53856, 60005, 54576, 23200, 30371, 38608, 19415, 19152, 42192, 118966, 53840, 54560, 56645, 46496, 22224, 21938, 18864, 42359, 42160, 43600, 111189, 27936, 44448, 84835]; var Q = ((new Date()).getTimezoneOffset() + 480) * 60000, O = Q >= 0 ? Q : 0; var L = "甲乙丙丁戊己庚辛壬癸"; var J = "子丑寅卯辰巳午未申酉戌亥"; var S = "鼠牛虎兔龙蛇马羊猴鸡狗猪"; var M = ["小寒", "大寒", "立春", "雨水", "惊蛰", "春分", "清明", "谷雨", "立夏", "小满", "芒种", "夏至", "小暑", "大暑", "立秋", "处暑", "白露", "秋分", "寒露", "霜降", "立冬", "小雪", "大雪", "冬至"]; var B = [0, 21208, 43467, 63836, 85337, 107014, 128867, 150921, 173149, 195551, 218072, 240693, 263343, 285989, 308563, 331033, 353350, 375494, 397447, 419210, 440795, 462224, 483532, 504758]; var A = "日一二三四五六七八九十"; var F = ["正", "二", "三", "四", "五", "六", "七", "八", "九", "十", "十一", "腊"]; var D = "初十廿卅"; var a = { "0101": "*1元旦节", "0214": "情人节", "0305": "学雷锋纪念日", "0308": "妇女节", "0312": "植树节", "0315": "消费者权益日", "0401": "愚人节", "0501": "*1劳动节", "0504": "青年节", "0601": "国际儿童节", "0701": "中国共产党诞辰", "0801": "建军节", "0910": "教师节", "1001": "*3国庆节", "1224": "平安夜", "1225": "圣诞节" }; var Y = { "0101": "*2春节", "0115": "元宵节", "0505": "*1端午节", "0815": "*1中秋节", "0909": "重阳节", "1208": "腊八节", "0100": "除夕" }; var c = "元旦节除夕春节清明节劳动节端午节中秋节国庆节"; var K = { "20071229": ["", "", "", "", 0], "20071231": ["", "", "", "", 1], "20080202": ["", "", "", "", -2], "20080211": ["", "", "", "", 2], "20080502": ["", "", "", "", 1], "20080504": ["青年节", "", "", "青年节", 0], "20080609": ["", "", "", "", 1], "20080915": ["", "", "", "", 1], "20080927": ["", "", "", "", -2], "20080929": ["", "", "", "", 2], "20090102": ["", "", "", "", 1], "20090104": ["", "", "", "", 0], "20090124": ["", "", "", "", 0], "20090128": ["", "", "", "", 3], "20090201": ["", "", "", "", 0], "20090406": ["", "", "", "", 1], "20090529": ["", "", "", "", 1], "20090531": ["", "", "", "", 0], "20090927": ["", "", "", "", 0], "20091005": ["", "", "", "", 4], "20091010": ["", "", "", "", 0], "20100216": ["", "", "", "", 4], "20100220": ["", "", "", "", -2], "20100503": ["", "", "", "", 1], "20100612": ["", "", "", "", -2], "20100614": ["", "", "", "", 2], "20100807": ["", "", "立秋", "立秋", 0], "20100808": ["", "", "", "廿八", 0], "20100919": ["", "", "", "", 0], "20100923": ["", "", "秋分", "秋分", 2], "20100925": ["", "", "", "", -2], "20101004": ["", "", "", "", 4], "20101009": ["", "", "", "", 0], "20110103": ["", "", "", "", 1], "20110130": ["", "", "", "", -1], "20110202": ["", "", "", "", 1], "20110207": ["", "", "", "", 2], "20110212": ["", "", "", "", -1], "20110402": ["", "", "", "", -1], "20110404": ["", "", "", "", 1], "20110502": ["", "", "", "", 1], "20110606": ["", "", "", "", 1], "20111004": ["", "", "", "", 4], "20111008": ["", "", "", "", -2] }; function Z(e) { function j(q, p) { var o = new Date((31556925974.7 * (q - 1900) + B[p] * 60000) + Date.UTC(1900, 0, 6, 2, 5)); return (o.getUTCDate()) } function k(q) { var o, p = 348; for (o = 32768; o > 8; o >>= 1) { p += (T[q - 1900] & o) ? 1 : 0 } return (p + i(q)) } function h(o) { return (L.charAt(o % 10) + J.charAt(o % 12)) } function i(o) { if (n(o)) { return ((T[o - 1900] & 65536) ? 30 : 29) } else { return (0) } } function n(o) { return (T[o - 1900] & 15) } function l(p, o) { return ((T[p - 1900] & (65536 >> o)) ? 30 : 29) } m(e, "M"); function C(s) { var q, p = 0, o = 0; var r = new Date(1900, 0, 31); var t = ((s - r) + O) / 86400000; this.dayCyl = t + 40; this.monCyl = 14; for (q = 1900; q < 2050 && t > 0; q++) { o = k(q); t -= o; this.monCyl += 12 } if (t < 0) { t += o; q--; this.monCyl -= 12 } this.year = q; this.yearCyl = q - 1864; p = n(q); this.isLeap = false; for (q = 1; q < 13 && t > 0; q++) { if (p > 0 && q == (p + 1) && this.isLeap == false) { --q; this.isLeap = true; o = i(this.year) } else { o = l(this.year, q) } if (this.isLeap == true && q == (p + 1)) { this.isLeap = false } t -= o; if (this.isLeap == false) { this.monCyl++ } } if (t == 0 && p > 0 && q == p + 1) { if (this.isLeap) { this.isLeap = false } else { this.isLeap = true; --q; --this.monCyl } } if (t < 0) { t += o; --q; --this.monCyl } this.month = q; this.day = t + 1 } function G(o) { return o < 10 ? "0" + o : o } function m(p, q) { var o = p; return q.replace(/dd?d?d?|MM?M?M?|yy?y?y?/g, function (r) { switch (r) { case "yyyy": var s = "000" + o.getFullYear(); return s.substring(s.length - 4); case "dd": return G(o.getDate()); case "d": return o.getDate().toString(); case "MM": return G((o.getMonth() + 1)); case "M": return o.getMonth() + 1 } }) } function g(p, o) { var q; switch (o) { case 10: q = "初十"; break; case 20: q = "二十"; break; case 30: q = "三十"; break; default: q = D.charAt(Math.floor(o / 10)); q += A.charAt(o % 10) } return (q) } this.date = e; this.isToday = false; this.solarYear = m(e, "yyyy"); this.solarMonth = m(e, "M"); this.solarDate = m(e, "d"); this.solarWeekDay = e.getDay(); this.solarWeekDayInChinese = "星期" + A.charAt(this.solarWeekDay); var d = new C(e); this.lunarYear = d.year; this.shengxiao = S.charAt((this.lunarYear - 4) % 12); this.lunarMonth = d.month; this.lunarIsLeapMonth = d.isLeap; this.lunarMonthInChinese = this.lunarIsLeapMonth ? "闰" + F[d.month - 1] : F[d.month - 1]; this.lunarDate = Math.floor(d.day); this.showInLunar = this.lunarDateInChinese = g(this.lunarMonth, this.lunarDate); if (this.lunarDate == 1) { this.showInLunar = this.lunarMonthInChinese + "月" } this.ganzhiYear = h(d.yearCyl); this.ganzhiMonth = h(d.monCyl); this.ganzhiDate = h(d.dayCyl++); this.solarFestival = ""; this.lunarFestival = ""; this.jieqi = ""; this.restDays = 0; if (this.solarWeekDay == 0 || this.solarWeekDay == 6) { this.restDays = 1 } if (j(this.solarYear, (this.solarMonth - 1) * 2) == m(e, "d")) { this.showInLunar = this.jieqi = M[(this.solarMonth - 1) * 2] } if (j(this.solarYear, (this.solarMonth - 1) * 2 + 1) == m(e, "d")) { this.showInLunar = this.jieqi = M[(this.solarMonth - 1) * 2 + 1] } if (this.showInLunar == "清明") { this.showInLunar = this.jieqi = "清明节"; this.restDays = 1 } this.solarFestival = a[m(e, "MM") + m(e, "dd")] || ""; if (/\*(\d)/.test(this.solarFestival)) { this.restDays = parseInt(RegExp.$1); this.solarFestival = this.solarFestival.replace(/\*\d/, "") } this.showInLunar = this.solarFestival ? this.solarFestival : this.showInLunar; this.lunarFestival = Y[this.lunarIsLeapMonth ? "00" : G(this.lunarMonth) + G(this.lunarDate)] || ""; if (/\*(\d)/.test(this.lunarFestival)) { this.restDays = (this.restDays > parseInt(RegExp.$1)) ? this.restDays : parseInt(RegExp.$1); this.lunarFestival = this.lunarFestival.replace(/\*\d/, "") } if (this.lunarMonth == 12 && this.lunarDate == l(this.lunarYear, 12)) { this.lunarFestival = Y["0100"]; this.restDays = 1 } this.showInLunar = this.lunarFestival ? this.lunarFestival : this.showInLunar; this.showInLunar = (this.showInLunar.length > 5) ? this.showInLunar.substr(0, 4) + "..." : this.showInLunar; var f = K[[this.solarYear, m(e, "MM"), m(e, "dd")].join("")]; if (f) { this.solarFestival = f[0] || ""; this.lunarFestival = f[1] || ""; this.jieqi = f[2] || ""; this.showInLunar = f[3] || this.showInLunar; this.restDays = f[4] || 0 } } var U = (function () { var d = {}; function e(g) { return (((g % 4 === 0) && (g % 100 !== 0)) || (g % 400 === 0)) } function G(g, h) { return [31, (e(g) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31][h] } function C(h, i) { var g = new Date(h.solarYear, h.solarMonth - 1, h.solarDate); g.setDate(g.getDate() + i); return g } function f(k, r) { d.lines = 0; d.dateArray = []; var o = 0; var p = (X.isFestMode && k) || new Z(new Date(k.solarYear, k.solarMonth - 1, 1)); var h = (X.isFestMode && (new Z(C(r, 1)))) || new Z(new Date(k.solarYear, k.solarMonth, 1)); var t = (h.date - p.date) / 86400000; var m = p.solarWeekDay, g = 0; if (X.isFestMode) { if (k.solarMonth != r.solarMonth) { g = 7 } else { if (k.solarWeekDay == 0) { m = 7 } } } var l = m + g + t; d.lines = Math.ceil(l / 7); var n = new Z(new Date()); for (var j = 0; j < l; j++) { if (o == 0) { o = p.restDays } p.isRestDay = o > 0 ? true : false; if (m-- > 0) { d.dateArray[j] = null; continue } if (X.isFestMode && k.solarMonth != p.solarMonth && g > 0) { g--; d.dateArray[j] = null; continue } if (!X.isFestMode && p.solarYear == n.solarYear && p.solarMonth == n.solarMonth && p.solarDate == n.solarDate) { p.isToday = true } d.dateArray[j] = p; p = new Z(C(p, 1)); if (o > 0) { o-- } else { if (o < 0) { o++ } } } if (X.isFestMode) { if (k.solarMonth == r.solarMonth) { d.dateArray[0] = { showMonth: true, solarMonth: k.solarMonth + "月" } } else { var s = new Date(r.solarYear, r.solarMonth - 1, 1), q = s.getDay(); if (q === 0) { q = 7 } d.dateArray[(s - k.date) / 86400000 + (k.solarWeekDay + 7 - q)] = { showMonth: true, solarMonth: r.solarMonth + "月" } } } } return { init: function (g, h) { f(g, h) }, getJson: function () { return d } } })(); var b = (function () { var C = P("top"), o = P("top_cal"), j = C.getElementsByTagName("SELECT"), l = j[0], G = j[1], e = o.getElementsByTagName("SPAN"), k = e[0], p = e[1], g = j[2], q = P("bcal"), t = P("top_fest"), f = P("fest_desc"), n = P("hlink"); function s(v) { l[v.solarYear - 1901].selected = true; G[v.solarMonth - 1].selected = true; var u = X.currentFest || 0; if (g[u]) { g[u].selected = true } k.innerHTML = v.ganzhiYear; p.innerHTML = v.shengxiao } function d() { var w = l.value; var u = G.value; var v = new Z(new Date(w, u - 1, 1)); U.init(v); R.draw(); if (this == l) { v = new Z(new Date(w, 3, 1)); k.innerHTML = v.ganzhiYear; p.innerHTML = v.shengxiao } } function m() { X.currentFest = parseInt(g.value); if (X.currentFest == 0) { return false } X.isFestMode = true; var u = X.festival[X.currentFest - 1]; t.innerHTML = u.title; o.style.display = "none"; t.style.display = "inline-block"; f.innerHTML = u.desc; f.style.display = "block"; n.style.display = "none"; q.style.display = "inline-block"; U.init(new Z(new Date(u.showStartDay)), new Z(new Date(u.showEndDay))); R.draw() } function h() { X.isFestMode = false; X.currentFest = 0; t.style.display = "none"; f.style.display = "none"; o.style.display = "inline-block"; q.style.display = "none"; n.style.display = "inline-block"; var u = new Z(new Date()); s(u); U.init(u); R.draw() } function i(w, AA) { var u = document.createDocumentFragment(), AC = document.createDocumentFragment(), AB = document.createDocumentFragment(); for (var y = 1901; y < 2050; y++) { var x = V("OPTION"); x.value = y; x.innerHTML = y; if (y == w) { x.selected = "selected" } u.appendChild(x) } l.appendChild(u); for (var y = 1; y < 13; y++) { var x = V("OPTION"); x.value = y; x.innerHTML = y; if (y == AA) { x.selected = "selected" } AC.appendChild(x) } G.appendChild(AC); l.onchange = d; G.onchange = d; if (X.festival) { var x = V("OPTION"), z = (X.festival[1] && ((new Date(X.festival[1].showEndDay)).getFullYear())) || w; x.value = 0; x.innerHTML = z + "年放假安排"; AB.appendChild(x); for (var y = 0, v = X.festival.length; y < v; y++) { if (X.festival[y]) { var x = V("OPTION"); x.value = y + 1; x.innerHTML = X.festival[y].key; if (X.currentFest == (y + 1)) { x.selected = "selected" } AB.appendChild(x) } } g.appendChild(AB); g.onchange = m } } function r(u) { i(u.solarYear, u.solarMonth); k.innerHTML = u.ganzhiYear; p.innerHTML = u.shengxiao; q.onclick = h } return { init: function (u) { r(u) }, reset: function (u) { s(u) } } })(); var R = (function () { var G = P("cm"); function C(t) { var y = U.getJson(); var n = y.dateArray; G.style.height = y.lines * 40 + 2 + "px"; G.innerHTML = ""; var g = document.createDocumentFragment(); var x = n.length; for (var v = 0; v < x; v++) { var u = n[v]; if (u == null) { continue } var e = V("DIV"), q, w = (v % 7) * 60, s = Math.floor(v / 7) * 40 + 2; e.className = "cell"; if (t) { if (t.solarDate === u.solarDate) { e.style.cssText = "border:1px solid #a5b9da;background:#c1d9ff" } } else { if (u.isToday) { e.style.cssText = "border:1px solid #a5b9da;background:#c1d9ff" } } if (u.showMonth && u.solarMonth) { e.className = "cell fa"; e.innerHTML = u.solarMonth } else { var m = V("DIV"); m.className = "so"; if (!X.isFestMode) { m.style.color = (u.isRestDay) ? "#c60b02" : "#313131" } else { m.style.color = (u.isRestDay) ? "#f4cecc" : "#d6d6d6" } m.innerHTML = u.solarDate; e.appendChild(m); var z = V("DIV"); z.style.color = (!X.isFestMode) ? "#666" : "#e0e0e0"; z.innerHTML = u.showInLunar; e.appendChild(z); if (X.isFestMode) { var p = (v == 0) ? null : n[v - 1], l = (v == x - 1) ? null : n[v + 1]; if ((u.solarWeekDay == 0 || u.solarWeekDay == 6) && !u.isRestDay) { e.style.cssText = "border:1px solid #9cf;background:#d7ebff"; m.style.color = "#313131"; z.style.color = "#666"; if (!p || p.isRestDay || p.solarWeekDay != 6) { q = V("DIV"); q.className = "fc fw"; q.innerHTML = "上班"; q.style.left = w + "px"; q.style.top = s + "px"; var j = u.showInLunar.length; if (j >= 3) { if (u.solarWeekDay != 0) { q.style.left = W ? (w - 8) + "px" : (w - 5) + "px" } if (j > 3) { z.innerHTML = u.showInLunar.substr(0, 3) } if (u.solarWeekDay == 0) { z.style.paddingLeft = "10px" } } if (u.solarWeekDay == 6) { e.style.borderLeft = "0px none" } } } if (u.isRestDay) { var o = false, h = false, d = false; if (u.solarWeekDay != 0 && u.solarWeekDay != 6) { o = true } else { if (u.solarWeekDay == 0) { var k; if (l && l.isRestDay || c.indexOf(u.showInLunar) != -1 || (p && c.indexOf(p.showInLunar) != -1) || ((k = (v > 1) ? n[v - 2] : null) && k.isRestDay)) { o = true; h = true } } else { if (u.solarWeekDay == 6) { var r = (v > x - 3) ? null : n[v + 2]; if (!r && l && l.showMonth && ((v + 9) < x)) { r = n[v + 8] } if ((p && p.isRestDay) || c.indexOf(u.showInLunar) != -1 || (l && c.indexOf(l.showInLunar) != -1) || (r && r.isRestDay)) { o = true; d = true } } } } if (o) { e.style.cssText = "border-top:1px solid #ffb997;border-bottom:1px solid #ffb997;background:#ffdece"; m.style.color = "#c60b02"; z.style.color = "#666"; if (h) { e.style.borderLeft = "1px solid #ffb997" } if (d) { e.style.borderRight = "1px solid #ffb997" } if (!p || !p.isRestDay) { e.style.borderLeft = "1px solid #ffb997"; q = V("DIV"); q.className = "fc fr"; q.innerHTML = "放假"; q.style.left = w + "px"; q.style.top = s + "px"; var j = u.showInLunar.length; if (j >= 3) { if (u.solarWeekDay != 0) { q.style.left = W ? (w - 8) + "px" : (w - 5) + "px" } if (j > 3) { z.innerHTML = u.showInLunar.substr(0, 3) } if (u.solarWeekDay == 0) { z.style.paddingLeft = "10px" } } if (u.solarWeekDay == 6) { e.style.borderLeft = "0px none" } } if (!l || !l.isRestDay) { e.style.borderRight = "1px solid #ffb997" } } } } e.onmouseover = (function (i) { return function (AA) { E.show({ dateIndex: i, cell: this }) } })(v); e.onmouseout = function () { E.hide() } } e.style.left = w + "px"; e.style.top = s + "px"; g.appendChild(e); if (q) { g.appendChild(q) } } G.appendChild(g); var f = V("DIV"); f.id = "fd"; G.appendChild(f); E.init(f) } return { draw: function (d) { C(d) } } })(); var E = (function () { var C; function e(m, i) { if (arguments.length > 1) { var h = /([.*+?^=!:${}()|[\]\/\\])/g, f = "{".replace(h, "\\$1"), j = "}".replace(h, "\\$1"); var g = new RegExp("#" + f + "([^" + f + j + "]+)" + j, "g"); if (typeof (i) == "object") { return m.replace(g, function (k, n) { var l = i[n]; return typeof (l) == "undefined" ? "" : l }) } } return m } function G(h) { var g = U.getJson().dateArray[h.dateIndex]; var f = h.cell; var i = "#{solarYear}&nbsp;年&nbsp;#{solarMonth}&nbsp;月&nbsp;#{solarDate}&nbsp;日&nbsp;#{solarWeekDayInChinese}"; i += "<br><b>农历&nbsp;#{lunarMonthInChinese}月#{lunarDateInChinese}</b>"; i += "<br>#{ganzhiYear}年&nbsp;#{ganzhiMonth}月&nbsp;#{ganzhiDate}日"; if (g.solarFestival || g.lunarFestival || g.jieqi) { i += "<br><b>#{lunarFestival} #{solarFestival} #{jieqi}</b>" } C.innerHTML = e(i, g); C.style.top = f.offsetTop + f.offsetHeight - 5 + "px"; C.style.left = f.offsetLeft + f.offsetWidth - 5 + "px"; C.style.display = "block" } function d() { C.style.display = "none" } return { show: function (f) { G(f) }, hide: function () { d() }, init: function (f) { C = f } } })(); var H = (function () { var G = P("hlink"); function C(d) { G.href = "http://www.lssdjt.com/?word=" + d.solarMonth + "%D4%C2" + d.solarDate + "%C8%D5&pic=1" } return { setLink: function (d) { C(d) } } })(); var N = new Z(new Date()); var I = (function () { if (X.year && X.month) { var G = X.day || 1, C = new Date([X.year, X.month, G].join("/")); if ((C.toString().toLowerCase() !== "invalid date") && (Object.prototype.toString.apply(C).toLowerCase() === "[object date]")) { return new Z(C) } else { return N } } else { if (X.isFestMode) { return new Z(new Date(X.festival[X.currentFest - 1].showStartDay)) } else { return N } } })(); b.init(I); if (W && window.attachEvent) { window.attachEvent("onload", function () { b.reset(I) }) } if (X.isFestMode) { U.init(I, new Z(new Date(X.festival[X.currentFest - 1].showEndDay))); R.draw() } else { if (X.isMonthMode) { U.init(I); R.draw() } else { U.init(I); R.draw(I) } } H.setLink(N) })();