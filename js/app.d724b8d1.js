(function(t){function e(e){for(var a,r,o=e[0],c=e[1],l=e[2],d=0,v=[];d<o.length;d++)r=o[d],i[r]&&v.push(i[r][0]),i[r]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(v.length)v.shift()();return s.push.apply(s,l||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],a=!0,o=1;o<n.length;o++){var c=n[o];0!==i[c]&&(a=!1)}a&&(s.splice(e--,1),t=r(r.s=n[0]))}return t}var a={},i={app:0},s=[];function r(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=t,r.c=a,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(n,a,function(e){return t[e]}.bind(null,a));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],c=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=c;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var a=n("c21b"),i=n.n(a);i.a},1426:function(t,e,n){},"1c49":function(t,e,n){t.exports=n.p+"img/linkedin_svg.787768c6.svg"},"1e0d":function(t,e,n){},"2bd6":function(t,e,n){},"30ca":function(t,e,n){},"348e":function(t,e,n){"use strict";var a=n("9564"),i=n.n(a);i.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var a=n("2b0e"),i=n("8c4f"),s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("top-nav"),n("transition",{attrs:{name:"slide-fade"}},[n("router-view")],1)],1)},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"top-nav"},[n("nav-link",{attrs:{href:"/",name:"Home"}}),n("nav-link",{attrs:{href:"/about",name:"About"}}),n("nav-link",{attrs:{href:"/work",name:"Work"}})],1)},c=[],l=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"nav-el",class:{active:t.isActive},attrs:{href:t.href},on:{click:t.go}},[n("router-link",{attrs:{to:t.href}},[t._v(t._s(t.name))])],1)},u=[],d={name:"NavLink",props:{href:{type:String,required:!0},name:{type:String,required:!0}},data:function(){return{isActive:this.$route.path==this.href}},computed:{},methods:{go:function(){return!1}},watch:{$route:function(t){this.isActive=t.path==this.href}}},v=d,p=(n("61ad"),n("2877")),f=Object(p["a"])(v,l,u,!1,null,"15ba2020",null);f.options.__file="NavLink.vue";var h=f.exports,m={name:"TopNav",components:{NavLink:h},props:{},data:function(){return{}}},b=m,g=(n("b4ee"),Object(p["a"])(b,o,c,!1,null,"29db8d0c",null));g.options.__file="TopNav.vue";var _=g.exports,C=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",[n("header",[n("div",{attrs:{id:t.divId}})])])},y=[],w=n("9393");n("8615"),n("f751"),n("ac6a");function k(t,e){var n=document.createElement("template");return n.id=e,t=t.trim(),n.innerHTML=t,n}function j(t){setTimeout(function(){x(t)},100)}function x(t){var e={random:function(t,e){return Math.random()*(e-t)+t},arrayRandom:function(t){return t[Math.floor(Math.random()*t.length)]},interpolate:function(t,e,n){return t*(1-n)+e*n},rangePosition:function(t,e,n){return(n-t)/(e-t)},clamp:function(t,e,n){return Math.max(Math.min(t,n),e)},queryArray:function(t,e){return e||(e=document.body),Array.prototype.slice.call(e.querySelectorAll(t))},ready:function(t){"complete"==document.readyState?t():document.addEventListener("DOMContentLoaded",t)}},n=matchMedia("(prefers-reduced-motion)").matches,a=function(t,e){return d.forEach(function(n){if(t[n]+=e[n],!(Math.abs(t[n])<360)){var a=Math.max(t[n],360),i=360==a?Math.abs(t[n]):360;t[n]=a-i}})},i=function(t){return t>u+30},s=!1,r='\n                        <div class="cube">\n                            <div class="shadow"></div>\n                            <div class="sides">\n                                <div class="back"></div>\n                                <div class="top"></div>\n                                <div class="left"></div>\n                                <div class="front"></div>\n                                <div class="right"></div>\n                                <div class="bottom"></div>\n                            </div>\n                        </div>\n                    ',o=k(r,"cube-template"),c=document.getElementById("header-hero-"+t),l=function(){return c.getBoundingClientRect().width},u=l();window.addEventListener("resize",function(){return u=l()});var d=["x","y"],v={blue:{color:[31,119,250],shading:[160,190,218]},navy:{color:[55,58,70],shading:[255,255,255]},grey:{color:[191,196,202],shading:[255,255,255]},lightGrey:{color:[219,221,224],shading:[255,255,255]},white:{color:[255,255,255],shading:[160,190,218]}},p=function(t){var e=t.cube,n=t.size,a=t.left,i=t.top;Object.assign(e.style,{width:"".concat(n,"px"),height:"".concat(n,"px"),left:"".concat(a,"px"),top:"".concat(i,"px")}),Object.assign(e.querySelector(".shadow").style,{filter:"blur(".concat(Math.round(.6*n),"px)"),opacity:Math.min(n/120,.4)})},f=function(t){var n=document.importNode(o.content,!0),a=n.querySelector(".cube"),i={x:0,y:0},s=d.reduce(function(n,a){var i=t>h.m?.3:.6;return n[a]=e.random(-i,i),n},{}),r=e.queryArray(".sides div",a).reduce(function(t,e){return t[e.className]={side:e,hidden:!1,rotate:{x:0,y:0}},t},{});return r.top.rotate.x=90,r.bottom.rotate.x=-90,r.left.rotate.y=-90,r.right.rotate.y=90,r.back.rotate.y=-180,{fragment:n,cube:a,state:i,speed:s,sides:Object.values(r)}},h={xs:15,s:25,m:40,l:100,xl:120},m=[{tint:v.blue,size:h.xs,left:0,top:0}].map(function(t){return Object.assign(f(t.size),t)});m.forEach(p);var b=function(t,e){return d.reduce(function(n,a){return n[a]=Math.abs(t[a]+e[a]),n},{})},g=function(t,e,n){var a=n.x?"Z":"Y",i=n.x>0?-1:1;return"\n      rotateX(".concat(t.x+n.x,"deg)\n      rotate").concat(a,"(").concat(i*(t.y+n.y),"deg)\n      translateZ(").concat(e/2,"px)\n    ")},_=function(t,n,a){var i=d.reduce(function(t,e){var n=a[e],i=n/180;return t[e]=n>180?Math.abs(2-i):i,t},{});if(n.x)i.y=0;else{var s=a.x;s>90&&s<270&&d.forEach(function(t){return i[t]=1-i[t]})}var r=(i.x+i.y)/2,o=function(n,a){return Math.round(e.interpolate(n,t.shading[a],r))},c=t.color.map(o),l=Object(w["a"])(c,3),u=l[0],v=l[1],p=l[2];return"rgb(".concat(u,", ").concat(v,", ").concat(p,")")},C=function(t,e,n){return t?e>90&&e<270:e<90?n>90&&n<270:e<270?n<90:n>90&&n<270},y=function(t){var e=t.state,n=t.speed,r=t.size,o=t.tint,c=t.sides,l=t.left;if(!s&&!i(l)){var u=function(t){var n=t.side,a=t.rotate,i=t.hidden,s=b(e,a);C(a.x,s.x,s.y)?i||(n.hidden=!0,t.hidden=!0):(i&&(n.hidden=!1,t.hidden=!1),n.style.transform=g(e,r,a),n.style.backgroundColor=_(o,a,s))};a(e,n),c.forEach(u)}},j=function t(){m.forEach(y),n||requestAnimationFrame(t)},x=document.createElement("div");x.className="cubes",m.forEach(function(t){var e=t.fragment;return x.appendChild(e)});var S=function(){j(),c.appendChild(x)};"requestIdleCallback"in window?requestIdleCallback(S):S()}var S={name:"Cube",props:{colour:{type:String,required:!0},id:{type:String,required:!0}},data:function(){return{divId:"header-hero-"+this.id}},created:function(){console.log("cube component instance created"),j(this.id)}},E=S,A=(n("8f4d"),Object(p["a"])(E,C,y,!1,null,"1b5a324a",null));A.options.__file="Cube.vue";var M=A.exports,O={name:"app",components:{TopNav:_,Cube:M},data:function(){return{}}},T=O,I=(n("034f"),Object(p["a"])(T,s,r,!1,null,null,null));I.options.__file="App.vue";var N=I.exports,q=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page home"},[n("div",{staticClass:"container"},[n("div",{staticClass:"row"},[t._m(0),n("div",{staticClass:"six columns"},[n("HeroName")],1),t._m(1)]),t._m(2),n("div",{staticClass:"row cta cta-button"},[n("div",{staticClass:"three columns cta-button"},[n("router-link",{staticClass:"button more",attrs:{to:"/about"}},[t._v("More")])],1)]),n("div",{staticClass:"row cta-button",staticStyle:{"margin-top":"5px"}},[n("div",{staticClass:"three columns cube-button"},[n("Cube",{attrs:{colour:"About",id:"heroname"}})],1)])])])},$=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"three columns"},[n("span",{staticStyle:{color:"white"}},[t._v(".")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"three columns"},[n("span",{staticStyle:{color:"white"}},[t._v(".")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row blurb"},[n("div",{staticClass:"three columns"},[n("span",{staticStyle:{color:"white"}},[t._v(".")])]),n("div",{staticClass:"six columns"},[n("div",{staticClass:"text"},[t._v("\n                    Hello world! I'm a software developer who was raised in the frozen depths of Northern Ontario. I obtained an undergraduate degree in computer science from Laurentian University. Since graduating, I've decided to remain in the North spending my days building software. When not working on side projects, I can be found in the gym or cheering for the Toronto Raptors.\n                ")])]),n("div",{staticClass:"three columns"},[n("span",{staticStyle:{color:"white"}},[t._v(".")])])])}],L=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},P=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hero-name"},[n("div",{staticClass:"name"},[n("h1",{staticClass:"first-name"},[n("span",{staticClass:"blue-font"},[t._v("B")]),n("span",{staticClass:"navy-font"},[t._v("L")]),n("span",{staticClass:"navy-font"},[t._v("A")]),n("span",{staticClass:"navy-font"},[t._v("K")]),n("span",{staticClass:"navy-font"},[t._v("E")])]),n("h1",{staticClass:"last-name"},[n("span",{staticClass:"blue-font"},[t._v("Q")]),n("span",{staticClass:"navy-font"},[t._v("U")]),n("span",{staticClass:"navy-font"},[t._v("E")]),n("span",{staticClass:"navy-font"},[t._v("B")]),n("span",{staticClass:"navy-font"},[t._v("E")]),n("span",{staticClass:"navy-font"},[t._v("C")])])])])}],H={components:{Cube:M},name:"HeroName",props:{},data:function(){return{}}},W=H,Q=(n("7cac"),Object(p["a"])(W,L,P,!1,null,"13f873fb",null));Q.options.__file="HeroName.vue";var B=Q.exports,J={name:"Home",props:{},components:{HeroName:B,Cube:M}},z=J,V=(n("ac09"),Object(p["a"])(z,q,$,!1,null,"9e555d4c",null));V.options.__file="Home.vue";var R=V.exports,D=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page about"},[n("div",{staticClass:"container"},[t._m(0),t._m(1),n("div",{staticClass:"row skills"},[n("div",{staticClass:"one-half column"},[n("div",{staticClass:"skills pulled"},[n("h1",[t._v("Skills")]),n("Cube",{attrs:{colour:"About",id:"skills"}}),n("ul",[t._v("Vue.js")]),n("ul",[t._v("AngularJS")]),n("ul",[t._v("C#")]),n("ul",[t._v(".NET")]),n("ul",[t._v("Node.js")]),n("ul",[t._v("SQL")])],1)]),n("div",{staticClass:"one-half column"},[n("div",{staticClass:"experiences pulled"},[n("h1",[t._v("Experiences")]),n("Cube",{attrs:{colour:"About",id:"experiences"}}),n("ul",[t._v("\n                        .NET Application development including ASP.NET Core, WPF, and Windows Forms with Dapper and Entity Framework ORMs.\n                    ")]),n("ul",[t._v("Web development with Vue.js, AngularJS, JQuery, Javascript, HTML, CSS, and Bootstrap.")]),n("ul",[t._v("Database development with SQL Server and reporting using SQL Server Reporting Services and SAP's BusinessObjects Web Intelligence.")])],1)])]),t._m(2)])])},F=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row top"},[a("div",{staticClass:"six columns"},[a("h1",{staticClass:"title"},[t._v("About")]),a("h1",{staticClass:"name"},[t._v("Blake Quebec")]),a("div",{staticClass:"contact"},[a("h6",{staticClass:"email"},[t._v("blake.quebec@gmail.com")]),a("div",[a("a",{attrs:{href:"https://www.linkedin.com/in/blake-quebec-4984a67b/",target:"_blank"}},[a("img",{staticClass:"linkedin",attrs:{src:n("1c49")}})])])])]),a("div",{staticClass:"six columns profile-container"},[a("img",{staticClass:"profile",attrs:{src:n("58c6"),alt:"Avatar"}})])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"twelve column"},[n("h2",{staticClass:"job-title"},[t._v("Software Developer")]),n("div",{staticClass:"blurb"},[n("p",[t._v("\n                        My passion is building software that brings you value; whether it be a tool that helps you do your job, saves you time, or gives insight into your data.\n                        Software is something that should help make your life easier. \n                        Working primarily on projects in the mining industry, a common requirement I encounter is the need to bring older processes to the digital era. \n                        Instead of capturing data in excel or using pen-and-paper, I have built solutions where data is captured using digital forms and fed into dashboards, reports, and web applications that allow users to analyze the data, study trends, and view metrics.\n                    ")]),n("p",[t._v("\n                        I have lead the development of software projects consisting of web applications (AngularJS, JQuery, Javascript, ASP.NET), desktop software (.NET Stack), reporting and business intelligence (SQL Server Reporting Services, Business Objects), and database architecture (SQL Server). \n                        I have also worked with customers to gather their expectations and their software requirements, define project scope, and plan development sprints.\n                    ")])])])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"footer"},[n("p",[t._v("Layout composed with "),n("a",{attrs:{href:"http://getskeleton.com/"}},[t._v("Skeleton.css")])])])}],U={name:"About",props:{},components:{Cube:M}},Y=U,Z=(n("348e"),Object(p["a"])(Y,D,F,!1,null,"6d7d6220",null));Z.options.__file="About.vue";var G=Z.exports,K=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page work"},[n("div",{staticClass:"container"},[n("div",{staticClass:"title-container"},[n("h1",{staticClass:"title"},[t._v("Work")]),n("Cube",{attrs:{colour:"About",id:"work"}})],1),n("link",{attrs:{rel:"stylesheet",href:"https://cdn.rawgit.com/konpa/devicon/df6431e323547add1b4cf45992913f15286456d3/devicon.min.css"}}),t._m(0),t._m(1)])])},X=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"one-third column project"},[n("div",{staticClass:"heading project-title navy-font"},[t._v("Personal Website")]),n("div",{staticClass:"link navy-font"},[n("a",{attrs:{href:"https://github.com/blakeqd/website",target:"_blank"}},[t._v("View code")])]),n("div",{staticClass:"heading dev-icon"},[n("i",{staticClass:"devicon-vuejs-plain-wordmark colored"})]),t._v("\n                A personal website I put together to showcase who I am. You are on this site right now! I used this project as a learning experience for the javascript framework Vue.js.\n            ")]),n("div",{staticClass:"one-third column project"},[n("div",{staticClass:"heading project-title navy-font"},[t._v("Money Mgmt")]),n("div",{staticClass:"link in-dev navy-font"},[t._v("In progress")]),n("div",{staticClass:"heading dev-icon"},[n("i",{staticClass:"devicon-vuejs-plain-wordmark colored"}),n("i",{staticClass:"devicon-nodejs-plain colored"})]),t._v("\n                Dashboard for viewing your monthly budget. Currently in development, being built with Vue.js, Node.js (Express) and Sequelize.\n            ")]),n("div",{staticClass:"one-third column project"},[n("div",{staticClass:"heading project-title navy-font"},[t._v("Innisfil Health Partners")]),n("div",{staticClass:"link navy-font"},[n("a",{attrs:{href:"http://innhealth.ca",target:"_blank"}},[t._v("View project")])]),n("div",{staticClass:"heading dev-icon"},[n("i",{staticClass:"devicon-jquery-plain-wordmark colored"}),n("i",{staticClass:"devicon-bootstrap-plain-wordmark colored"})]),t._v("\n                \n                A landing page where you can find details about a new health centre in Innisfil. Created using the Bootstrap CSS framework, jQuery, and HTML.\n            ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"row"},[n("div",{staticClass:"one-third column project"},[n("div",{staticClass:"heading project-title navy-font"},[t._v("Tic Tac Toe")]),n("div",{staticClass:"link navy-font"},[n("a",{attrs:{href:"https://github.com/blakeqd/react-tic-tac-toe",target:"_blank"}},[t._v("View code")])]),n("div",{staticClass:"heading dev-icon"},[n("i",{staticClass:"devicon-react-original-wordmark"}),n("i",{staticClass:"devicon-typescript-plain colored"})]),t._v("\n\n                Simple Tic Tac Toe game created using React and TypeScript.\n            ")]),n("div",{staticClass:"one-third column project"},[n("div",{staticClass:"heading project-title navy-font"},[t._v("Steganographic Communication")]),n("div",{staticClass:"link navy-font"},[n("a",{attrs:{href:"https://github.com/blakeqd/steganographic-communication",target:"_blank"}},[t._v("View code")])]),n("div",{staticClass:"heading dev-icon"},[n("i",{staticClass:"devicon-java-plain-wordmark colored"})]),t._v("\n\n                My undergraduate thesis project. I built an Android app which allowed users to embed messages in images using steganographic methods.\n            ")])])}],tt={name:"Work",props:{},components:{Cube:M}},et=tt,nt=(n("f84e"),Object(p["a"])(et,K,X,!1,null,"51ee5388",null));nt.options.__file="Work.vue";var at=nt.exports;n("3934"),n("bc34"),n("4eeb"),a["a"].config.productionTip=!1,a["a"].use(i["a"]);var it=[{path:"/",component:R},{path:"/about",component:G},{path:"/work",component:at}],st=new i["a"]({routes:it});new a["a"]({router:st,render:function(t){return t(N)}}).$mount("#app")},"58c6":function(t,e,n){t.exports=n.p+"img/blake.505d2632.jpg"},"61ad":function(t,e,n){"use strict";var a=n("1e0d"),i=n.n(a);i.a},"7b50":function(t,e,n){},"7cac":function(t,e,n){"use strict";var a=n("2bd6"),i=n.n(a);i.a},"8f4d":function(t,e,n){"use strict";var a=n("99c1"),i=n.n(a);i.a},9564:function(t,e,n){},"99c1":function(t,e,n){},ac09:function(t,e,n){"use strict";var a=n("1426"),i=n.n(a);i.a},b4ee:function(t,e,n){"use strict";var a=n("30ca"),i=n.n(a);i.a},c21b:function(t,e,n){},f84e:function(t,e,n){"use strict";var a=n("7b50"),i=n.n(a);i.a}});
//# sourceMappingURL=app.d724b8d1.js.map