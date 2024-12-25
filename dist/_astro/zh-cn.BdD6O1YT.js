import{c as D,g}from"./_commonjsHelpers.Cpj98o6Y.js";import{a as k}from"./formatDate.pVbpn-Zf.js";var T={exports:{}};(function(h,H){(function(o,d){h.exports=d()})(D,function(){return function(o,d,i){o=o||{};var e=d.prototype,t={future:"in %s",past:"%s ago",s:"a few seconds",m:"a minute",mm:"%d minutes",h:"an hour",hh:"%d hours",d:"a day",dd:"%d days",M:"a month",MM:"%d months",y:"a year",yy:"%d years"};function m(r,a,l,Y){return e.fromToBase(r,a,l,Y)}i.en.relativeTime=t,e.fromToBase=function(r,a,l,Y,x){for(var c,f,p,M=l.$locale().relativeTime||t,y=o.thresholds||[{l:"s",r:44,d:"second"},{l:"m",r:89},{l:"mm",r:44,d:"minute"},{l:"h",r:89},{l:"hh",r:21,d:"hour"},{l:"d",r:35},{l:"dd",r:25,d:"day"},{l:"M",r:45},{l:"MM",r:10,d:"month"},{l:"y",r:17},{l:"yy",d:"year"}],w=y.length,_=0;_<w;_+=1){var s=y[_];s.d&&(c=Y?i(r).diff(l,s.d,!0):l.diff(r,s.d,!0));var u=(o.rounding||Math.round)(Math.abs(c));if(p=c>0,u<=s.r||!s.r){u<=1&&_>0&&(s=y[_-1]);var v=M[s.l];x&&(u=x(""+u)),f=typeof v=="string"?v.replace("%d",u):v(u,a,s.l,p);break}}if(a)return f;var L=p?M.future:M.past;return typeof L=="function"?L(f):L.replace("%s",f)},e.to=function(r,a){return m(r,a,this,!0)},e.from=function(r,a){return m(r,a,this)};var n=function(r){return r.$u?i.utc():i()};e.toNow=function(r){return this.to(n(this),r)},e.fromNow=function(r){return this.from(n(this),r)}}})})(T);var S=T.exports;const $=g(S);var b={exports:{}};(function(h,H){(function(o,d){h.exports=d(k)})(D,function(o){function d(t){return t&&typeof t=="object"&&"default"in t?t:{default:t}}var i=d(o),e={name:"zh-cn",weekdays:"星期日_星期一_星期二_星期三_星期四_星期五_星期六".split("_"),weekdaysShort:"周日_周一_周二_周三_周四_周五_周六".split("_"),weekdaysMin:"日_一_二_三_四_五_六".split("_"),months:"一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月".split("_"),monthsShort:"1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月".split("_"),ordinal:function(t,m){return m==="W"?t+"周":t+"日"},weekStart:1,yearStart:4,formats:{LT:"HH:mm",LTS:"HH:mm:ss",L:"YYYY/MM/DD",LL:"YYYY年M月D日",LLL:"YYYY年M月D日Ah点mm分",LLLL:"YYYY年M月D日ddddAh点mm分",l:"YYYY/M/D",ll:"YYYY年M月D日",lll:"YYYY年M月D日 HH:mm",llll:"YYYY年M月D日dddd HH:mm"},relativeTime:{future:"%s内",past:"%s前",s:"几秒",m:"1 分钟",mm:"%d 分钟",h:"1 小时",hh:"%d 小时",d:"1 天",dd:"%d 天",M:"1 个月",MM:"%d 个月",y:"1 年",yy:"%d 年"},meridiem:function(t,m){var n=100*t+m;return n<600?"凌晨":n<900?"早上":n<1100?"上午":n<1300?"中午":n<1800?"下午":"晚上"}};return i.default.locale(e,null,!0),e})})(b);export{$ as r};
