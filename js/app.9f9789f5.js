(function(t){function a(a){for(var e,n,r=a[0],o=a[1],c=a[2],u=0,A=[];u<r.length;u++)n=r[u],Object.prototype.hasOwnProperty.call(i,n)&&i[n]&&A.push(i[n][0]),i[n]=0;for(e in o)Object.prototype.hasOwnProperty.call(o,e)&&(t[e]=o[e]);d&&d(a);while(A.length)A.shift()();return l.push.apply(l,c||[]),s()}function s(){for(var t,a=0;a<l.length;a++){for(var s=l[a],e=!0,r=1;r<s.length;r++){var o=s[r];0!==i[o]&&(e=!1)}e&&(l.splice(a--,1),t=n(n.s=s[0]))}return t}var e={},i={app:0},l=[];function n(a){if(e[a])return e[a].exports;var s=e[a]={i:a,l:!1,exports:{}};return t[a].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=t,n.c=e,n.d=function(t,a,s){n.o(t,a)||Object.defineProperty(t,a,{enumerable:!0,get:s})},n.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,a){if(1&a&&(t=n(t)),8&a)return t;if(4&a&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&a&&"string"!=typeof t)for(var e in t)n.d(s,e,function(a){return t[a]}.bind(null,e));return s},n.n=function(t){var a=t&&t.__esModule?function(){return t["default"]}:function(){return t};return n.d(a,"a",a),a},n.o=function(t,a){return Object.prototype.hasOwnProperty.call(t,a)},n.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=a,r=r.slice();for(var c=0;c<r.length;c++)a(r[c]);var d=o;l.push([0,"chunk-vendors"]),s()})({0:function(t,a,s){t.exports=s("56d7")},"034f":function(t,a,s){"use strict";var e=s("85ec"),i=s.n(e);i.a},"49ec":function(t,a){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAQAAAAAYLlVAAAABGdBTUEAALGPC/xhBQAAACBjSFJNAAB6JgAAgIQAAPoAAACA6AAAdTAAAOpgAAA6mAAAF3CculE8AAAAAmJLR0QAAKqNIzIAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAAHdElNRQfjCxwNNxcqF6waAAAEY0lEQVRo3t2Zz28bRRTHP7bbqk4l20lEJVoSJFI1RBX/QZtcojYSokolSOBSpQLSHsoJJA4VKurZB5BQJQg90SBKGqIKhZw4IBUOVXNplLZCmBY75Hea2qlUq9QZDh5P1ruzu97ZRZZ47+D1vH3v+2Z25s28NxCGTrHAAoOhbISgBI8RCDZJNMeB/QjJ+82NxJvje+MODPCQPENGtofJ85AT4RxcQiAo06WReX+CLsoIBIvhxqcoIaY00hYqCATPadFIp6RmkVgYF7Kql/0a6RgCwZcaSb/Sy4aBhzQr0tCcpicxjnJUoxVjTmqtkA7nAIyqvrzasE6P0hkNCw8JZhEISgH6kqGEQHA7mhDVwVWm6Q2k08s03/CS/4umMzTOIbp5kTRQZIn75NiOorf+lOQdJtlQX7nG61xnmOR/C97OJR45oK28wae0mhkfYJkiWdepFuNd1j3Ba7zGGddPmyZLiWVdgH6gVu6oZu6mmWgIvMY3aHPYSDCqosqfTgcKFvVZOupkL3M/ELxAcI/OOhudcjlXOe90YEhuHlW+WgdfCAxfBbG68K1FUuYt3ffpUhuIYFq1thn0vsZ3ySg7P6nWKe3eKqmfOQQlFXZi3PCEWOWJp/wHNR37KCGY025qttneQ0r9e8/F8DwXeI09wG4ue7owomyl6Aka+Nq0C2+RkbqTVJJnnmOUCQZqpUsag7c4YHsrxT+eY3DRFD6piXq3HKefdr7zmYob7DVz4G3N4O/0PsPH/MYS2w2sBrNDLZMeE2qgwbBc5e9N4OOOHW9ehegBngeKB2sm+cdhh5kLavCD9L7Kh9xgdgEJte7LPFWSbse7P8rfc7QH7k43f6jnpJqUJSpwSqaYAkGFMRUqztr6sM0eKfk1cP8F70vdGFdkNiEQbDIIC7ZXa8fsjxwBpUYrBg58KHV7be2FOMJl0OztLewGoJ0Xgk8oV6sizgc8Vn8rfMVN+fzE9uo+PidJistGB9mS/L3J11RU6ybnARK0SrYeKd/QDOQzn6Drzq9bLCcVnmfWcNgQKuAydKc4a5HBr7sHIvcItc0vBt9aTz+7Jy1eIfJ6ZA5MmKklNfmP2Qfw2I69RuApX0TS/88om6q2RjARl4OWKGIcsRxKz4R24LSyleKIfxCrHsu36FPuTIaC35l+fWzhcyzXJyat3DOGn7cM/4xqdUlMhl1Ts07yRvD5ugxz3CIp606J1m35tq24coA7geHv2pLTDr/k9IEU6dPzFNcCwU9pyhTW9DzndOC4b4FihNUGF95p3ChNliJLHMeIMlz0iY7rfBK+NOlNexliQhOg1rjGm8FzIPMy3St0c5AUUGKB38khDG35UifjzKjQ1Bj1McO4rdBjSGal2i0EgtkoSrVNLlbvlOvvaMv1xzimbY+sXO99YXEFgWBMI4nowiIuy+5NvLJZlJuH+aXV32Hg4QQ5/tKXFX0vLofIkzMNuo3Q/+PmNAwl2EQgeNSsy2sYpECBk2FM/AvPjuoddMy30gAAACV0RVh0ZGF0ZTpjcmVhdGUAMjAxOS0xMS0yOFQxMzo1NToyMyswMDowMAXOXscAAAAldEVYdGRhdGU6bW9kaWZ5ADIwMTktMTEtMjhUMTM6NTU6MjMrMDA6MDB0k+Z7AAAAGXRFWHRTb2Z0d2FyZQB3d3cuaW5rc2NhcGUub3Jnm+48GgAAAABJRU5ErkJggg=="},"56d7":function(t,a,s){"use strict";s.r(a);s("e260"),s("e6cf"),s("cca6"),s("a79d");var e=s("2b0e"),i=function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div",{attrs:{id:"app"}},[s("loading-screen",{attrs:{"is-loading":t.isLoading}}),s("Portfolio")],1)},l=[],n=function(){var t=this,a=t.$createElement;t._self._c;return t._m(0)},r=[function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("div")}],o=s("ee5a"),c=(s("1c36"),{props:["isLoading"],watch:{isLoading:{handler:function(t){t?this.open():this.close()},immediate:!0}},methods:{open:function(){this.pleaseWaitInstance||(this.pleaseWaitInstance=Object(o["pleaseWait"])({logo:"https://www.haikudon.com/wp-content/themes/videogamephoto/images/ads8.png",backgroundColor:"#FFFFFF",loadingHtml:'<div class="spinner"> <div class="cube1"></div> <div class="cube2"></div> </div>'}))},close:function(){null!=this.pleaseWaitInstance&&(this.pleaseWaitInstance.finish(),this.pleaseWaitInstance=null)}}}),d=c,u=(s("74ae"),s("2877")),A=Object(u["a"])(d,n,r,!1,null,null,null),h=A.exports,m=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",[t._m(0),e("div",[e("section",{staticClass:"hero"},[e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container"},[e("h3",{staticClass:"judul-top"},[t._v("About Me")]),e("br"),t._m(1),e("h3",{staticClass:"judul-top"},[t._v("Everything's About me")]),e("br"),e("div",{staticClass:"columns"},[e("div",{staticClass:"column"},[!0===t.darkMode?e("span",{staticClass:"tag is-dark"},[e("h3",{staticClass:"judul-skill"},[t._v("Back End")])]):e("span",{staticClass:"tag is-light"},[e("h3",{staticClass:"judul-skill"},[t._v("Back End")])]),e("h4",{staticClass:"item-skill"},[t._v("> PHP")]),e("h4",{staticClass:"item-skill"},[t._v("> NodeJS")])]),e("div",{staticClass:"column"},[!0===t.darkMode?e("span",{staticClass:"tag is-dark"},[e("h3",{staticClass:"judul-skill"},[t._v("Front End")])]):e("span",{staticClass:"tag is-light"},[e("h3",{staticClass:"judul-skill"},[t._v("Front End")])]),e("h4",{staticClass:"item-skill"},[t._v("> VueJS")])]),e("div",{staticClass:"column"},[!0===t.darkMode?e("span",{staticClass:"tag is-dark"},[e("h3",{staticClass:"judul-skill"},[t._v("Mobile")])]):e("span",{staticClass:"tag is-light"},[e("h3",{staticClass:"judul-skill"},[t._v("Mobile")])]),e("h4",{staticClass:"item-skill"},[t._v("> Flutter (iOS & Android)")])]),e("div",{staticClass:"column"},[!0===t.darkMode?e("span",{staticClass:"tag is-dark"},[e("h3",{staticClass:"judul-skill"},[t._v("My OS")])]):e("span",{staticClass:"tag is-light"},[e("h3",{staticClass:"judul-skill"},[t._v("My OS")])]),e("h4",{staticClass:"item-skill"},[t._v("> Linux")]),e("h4",{staticClass:"item-skill"},[t._v("> Windows")]),e("h4",{staticClass:"item-skill"},[t._v("> MacOS")])])]),e("h3",{staticClass:"judul-top"},[t._v("Hire Me")]),e("br"),e("a",{staticStyle:{"margin-right":"10px"},attrs:{href:"https://id.linkedin.com/in/helmy-agta-al-fatah-028895186"}},[!0===t.darkMode?e("span",{staticClass:"tag is-dark"},[e("h3",{staticClass:"judul-skill"},[t._v("LinkedIn")])]):e("span",{staticClass:"tag is-light"},[e("h3",{staticClass:"judul-skill"},[t._v("LinkedIn")])])]),e("a",{staticStyle:{"margin-right":"10px"},attrs:{href:"https://github.com/xzagta"}},[!0===t.darkMode?e("span",{staticClass:"tag is-dark"},[e("h3",{staticClass:"judul-skill"},[t._v("GitHub")])]):e("span",{staticClass:"tag is-light"},[e("h3",{staticClass:"judul-skill"},[t._v("GitHub")])])]),e("a",{attrs:{href:"mailto:helmibaran20@gmail.com"}},[!0===t.darkMode?e("span",{staticClass:"tag is-dark"},[e("h3",{staticClass:"judul-skill"},[t._v("helmibaran20@gmail.com")])]):e("span",{staticClass:"tag is-light"},[e("h3",{staticClass:"judul-skill"},[t._v("helmibaran20@gmail.com")])])])])])])]),t._m(2),e("a",{staticClass:"float",attrs:{href:"#"}},[e("div",{staticClass:"my-float"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.darkMode,expression:"darkMode"}],staticClass:"theme-switch",attrs:{type:"checkbox",id:"theme-switch"},domProps:{checked:Array.isArray(t.darkMode)?t._i(t.darkMode,null)>-1:t.darkMode},on:{change:function(a){var s=t.darkMode,e=a.target,i=!!e.checked;if(Array.isArray(s)){var l=null,n=t._i(s,l);e.checked?n<0&&(t.darkMode=s.concat([l])):n>-1&&(t.darkMode=s.slice(0,n).concat(s.slice(n+1)))}else t.darkMode=i}}}),e("label",{attrs:{for:"theme-switch"}},[!0===t.darkMode?e("span",[e("img",{attrs:{alt:"logo",src:s("5dd5"),width:"40"}})]):e("span",[e("img",{attrs:{alt:"logo",src:s("49ec"),width:"40"}})])])])])])},g=[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"hero dynamic-color is-fullheight"},[e("div",{staticClass:"hero-head"},[e("header",{staticClass:"navbar"},[e("div",{staticClass:"container"},[e("div",{staticClass:"navbar-brand"},[e("a",{staticClass:"navbar-item"},[e("img",{attrs:{src:s("70bc"),alt:"Logo"}})]),e("a",{staticClass:"navbar-burger",attrs:{role:"button","aria-label":"menu","aria-expanded":"false"}},[e("span",{attrs:{"aria-hidden":"true"}}),e("span",{attrs:{"aria-hidden":"true"}}),e("span",{attrs:{"aria-hidden":"true"}})])]),e("div",{staticClass:"navbar-menu",attrs:{id:"navbarMenuHeroC"}})])])]),e("div",{staticClass:"hero-body"},[e("div",{staticClass:"container has-text-centered"},[e("h1",{staticClass:"title is-1 judul"},[t._v("Hello, I' Am")]),e("h2",{staticClass:"subtitle judul"},[t._v("Helmy Agta Al Fatah ;")])])])])},function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"columns is-centered"},[e("div",{staticClass:"column is-6"},[e("div",{staticClass:"content"},[e("div",{staticClass:"columns is-flex is-centered"},[e("figure",{staticClass:"image is-128x128"},[e("img",{attrs:{src:s("9f2c"),alt:"logo"}})])]),e("p",[t._v(" Hi, My name is "),e("strong",[t._v("Helmy Agta Al Fatah")]),t._v(", I'm 19 years old boy. i learn coding from 15 years old, always say thank you about someone was teach me, and help me too. I'm junior full stack developer. and i'll still grow up to be advance proggramer, IT is my passion, everythings about it i love it; ")])])])])},function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("footer",{staticClass:"footer"},[s("div",{staticClass:"content has-text-centered"},[s("p",[t._v("Made With ❤ by Helmy Agta Al Fatah")])])])}],p={data:function(){return{darkMode:!1}},mounted:function(){document.title="Helmy Agta";var t=document.body;t.classList.add("app-background");var a=document.documentElement,s=localStorage.getItem("theme");"dark"===s?(a.setAttribute("theme","dark"),this.darkMode=!0):(a.setAttribute("theme","light"),this.darkMode=!1)},watch:{darkMode:function(){var t=document.documentElement;this.darkMode?(localStorage.setItem("theme","dark"),t.setAttribute("theme","dark")):(localStorage.setItem("theme","light"),t.setAttribute("theme","light"))}}},f=p,v=(s("a31f"),Object(u["a"])(f,m,g,!1,null,null,null)),C=v.exports,b={name:"App",components:{Portfolio:C,"loading-screen":h},data:function(){return{isLoading:!0}},mounted:function(){var t=this;setTimeout((function(){t.isLoading=!1}),4e3)}},k=b,V=(s("034f"),Object(u["a"])(k,i,l,!1,null,null,null)),M=V.exports,y=s("289d");s("5abe"),s("bf3b");e["a"].config.productionTip=!1,e["a"].use(y["a"]),new e["a"]({render:function(t){return t(M)}}).$mount("#app")},"5c5b":function(t,a,s){},"5dd5":function(t,a){t.exports="data:image/png;base64,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"},"70bc":function(t,a,s){t.exports=s.p+"img/boy.d7fd9e0b.png"},"74ae":function(t,a,s){"use strict";var e=s("b4ad"),i=s.n(e);i.a},"85ec":function(t,a,s){},"9f2c":function(t,a,s){t.exports=s.p+"img/me.beeb0fa7.png"},a31f:function(t,a,s){"use strict";var e=s("5c5b"),i=s.n(e);i.a},b4ad:function(t,a,s){},bf3b:function(t,a,s){}});
//# sourceMappingURL=app.9f9789f5.js.map