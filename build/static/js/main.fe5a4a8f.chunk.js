(this.webpackJsonpytapp=this.webpackJsonpytapp||[]).push([[0],{13:function(t,e,a){t.exports={"yt-list":"list_yt-list__T-XLv","list-box":"list_list-box__2Nobe","pagenation-list":"list_pagenation-list__2VILe",prev:"list_prev__1lSHQ",next:"list_next__2tU_i",loading:"list_loading__3TTe7",select:"list_select__FJ8Py"}},15:function(t,e,a){t.exports={"yt-card":"card_yt-card__3lBbi",hidden:"card_hidden__2BJZH","yt-img":"card_yt-img__1zhdr","yt-length":"card_yt-length__17qLQ","yt-title":"card_yt-title__2e9_v","yt-description":"card_yt-description__2qBa5"}},19:function(t,e,a){t.exports={"nav-box":"navbar_nav-box__XKLSV",active:"navbar_active__fswpj"}},20:function(t,e,a){t.exports={"yt-list":"savelist_yt-list__7cWvg","list-box":"savelist_list-box__20Y5w","no-save":"savelist_no-save__1E-RZ",loading:"savelist_loading__1YIE-","pagenation-list":"savelist_pagenation-list__32cup"}},26:function(t,e,a){t.exports={save:"save_save__2bHDa",active:"save_active__oV0Nu"}},27:function(t,e,a){t.exports={"page-btn":"btn_page-btn__1YYX2",active:"btn_active__1a-GD"}},32:function(t,e,a){t.exports={box:"content_box__3EpF_"}},33:function(t,e,a){t.exports={app:"app_app__Ur5CA"}},38:function(t,e,a){},45:function(t,e,a){"use strict";a.r(e);var n=a(1),i=a.n(n),c=a(30),s=a.n(c),l=a(11),r=a(12),o=a(2),d=a.n(o),j=(a(38),a(8)),u=a(3),b=a(19),_=a.n(b),v=a(0),p=function(){var t,e=Object(u.h)().pathname,a=Object(n.useContext)(ct).ytList,i=(a=void 0===a?{}:a).yt_list,c="/ajtaiwan/play/".concat(null===(t=(void 0===i?[]:i)[0])||void 0===t?void 0:t.id);return Object(v.jsxs)("div",{className:d()(_.a["nav-box"]),children:[Object(v.jsxs)(l.b,{className:d()(Object(j.a)({},_.a.active,e.includes("list"))),to:"/ajtaiwan/list/1",children:[Object(v.jsx)("i",{className:"fas fa-list"})," \u4e3b\u9801"]}),Object(v.jsxs)(l.b,{className:d()(Object(j.a)({},_.a.active,e.includes("save"))),to:"/ajtaiwan/save",children:[Object(v.jsx)("i",{className:"far fa-bookmark"})," \u6536\u85cf"]}),Object(v.jsxs)(l.b,{className:d()(Object(j.a)({},_.a.active,e.includes("play"))),to:c,children:[Object(v.jsx)("i",{className:"far fa-play-circle"})," \u64ad\u653e"]})]})},x=a(10),f=Math.ceil(100/12),O=a(15),h=a.n(O),m=a(26),g=a.n(m),y=function(t){var e=t.id,a=Object(n.useContext)(ct).dispatch,i=localStorage.getItem("save_str")||"",c=Object(n.useState)(i.includes(e)),s=Object(r.a)(c,2),l=s[0],o=s[1];return Object(v.jsx)("div",{onClick:function(t){t.stopPropagation(),function(){var t=l?localStorage.getItem("save_str").split(", ").filter((function(t){return!t.includes(e)})).join(", "):"".concat(localStorage.getItem("save_str"),", ").concat(e);localStorage.setItem("save_str",t),a({type:"Set_Save_Str",payload:{save_str:t}})}(),alert(l?"\u5df2\u79fb\u9664\u6536\u85cf":"\u5df2\u6536\u85cf"),o((function(t){return!t}))},className:d()(g.a.save,Object(j.a)({},g.a.active,l)),children:Object(v.jsx)("i",{className:"fas fa-bookmark"})})},w=function(t,e){var a=t.indexOf(e);return a<0?"00":isNaN(t.charAt(a-2))?"0"+t.charAt(a-1):t.charAt(a-2)+t.charAt(a-1)},N=function(t){var e=w(t,"H");return"00"===e?e="":e+=":",e+w(t,"M")+":"+w(t,"S")},S=function(t){return"".concat(t.slice(0,60),"...")},k=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=t.id,a=t.snippet,n=(a=void 0===a?{}:a).description,i=a.title,c=a.thumbnails,s=(c=void 0===c?{}:c).standard,l=(s=void 0===s?{}:s).url,r=t.contentDetails,o=(r=void 0===r?{}:r).duration,j=t.hidden,b=Object(u.g)(),_=function(){b.push("/ajtaiwan/play/".concat(e))};return j?Object(v.jsx)("li",{style:{opacity:0,pointerEvents:"none"},onClick:_,className:d()(h.a["yt-card"])}):Object(v.jsxs)("li",{onClick:_,className:d()(h.a["yt-card"]),children:[Object(v.jsxs)("div",{className:h.a["yt-img"],children:[Object(v.jsx)("img",{alt:i,src:l}),Object(v.jsx)("div",{className:h.a["yt-length"],children:N(o)}),Object(v.jsx)(y,{id:e})]}),Object(v.jsx)("div",{className:h.a["yt-title"],children:i}),Object(v.jsx)("div",{className:h.a["yt-description"],children:S(n)})]})},C=a(27),T=a.n(C),A=function(t){var e=t.page,a=Object(u.i)().page,n=Object(u.g)();return Object(v.jsx)("li",{onClick:function(){n.push("/ajtaiwan/list/".concat(e))},className:d()(T.a["page-btn"],Object(j.a)({},T.a.active,Number(a)===Number(e))),children:e})},L=a(13),E=a.n(L),I=function(t){return window.innerWidth<=768?t.length%2:window.innerWidth<=1080&&window.innerWidth>768?3-t.length%3:void 0},W=function(){var t=Object(u.i)().page,e=Object(u.g)(),a=Object(n.useContext)(ct).ytList,i=a.yt_list,c=a.loading,s=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=Object(u.i)().page,a=Object(u.g)(),n=Number(e)+1,i=Number(e)-1,c=function(){n>f?alert("\u6700\u5f8c\u4e00\u9801\u56c9!"):a.push("/ajtaiwan/list/".concat(n))},s=function(){i<1?alert("\u5df2\u7d93\u5728\u7b2c\u4e00\u9801\u56c9!"):a.push("/ajtaiwan/list/".concat(i))};return[t.slice(12*(e-1),12*e),c,s]}(i),l=Object(r.a)(s,3),o=l[0],j=l[1],b=l[2],_=Object(n.useRef)(null);return Object(n.useEffect)((function(){_.current&&_.current.scrollTo({top:0,behavior:"smooth"})}),[t]),c?Object(v.jsx)("div",{className:d()(E.a.loading),children:"\u62ff\u53d6\u8cc7\u6599\u4e2d..."}):o.length?Object(v.jsxs)("div",{ref:_,className:d()(E.a["list-box"]),children:[Object(v.jsxs)("ul",{className:d()(E.a["yt-list"]),children:[o.map((function(t){return Object(v.jsx)(k,Object(x.a)({},t),t.snippet.title)})),window.innerWidth<=1080&&window.innerWidth>=768?Object(v.jsx)(v.Fragment,{children:Array(I(o)).fill().map((function(t,e){return Object(v.jsx)(k,{hidden:!0},"index-".concat(e+1))}))}):null]}),Object(v.jsxs)("ul",{className:d()(E.a["pagenation-list"]),children:[Object(v.jsx)("li",{onClick:b,className:d()(E.a.prev),children:Object(v.jsx)("i",{className:"fas fa-arrow-left"})}),window.innerWidth<768?Object(v.jsx)(v.Fragment,{children:Object(v.jsx)("select",{className:E.a.select,value:Number(t),onChange:function(t){e.push("/ajtaiwan/list/".concat(t.target.value))},children:Array(f).fill().map((function(t,e){return Object(v.jsx)("option",{value:e+1,children:e+1},"index-".concat(e+1))}))})}):Object(v.jsx)(v.Fragment,{children:Array(f).fill().map((function(t,e){return Object(v.jsx)(A,{page:e+1},"index-".concat(e+1))}))}),Object(v.jsx)("li",{onClick:j,className:d()(E.a.next),children:Object(v.jsx)("i",{className:"fas fa-arrow-right"})})]})]}):Object(v.jsx)(u.a,{to:"/ajtaiwan/list/1"})},D=a(32),F=a.n(D),P=a(16),Y=[],B="https://www.googleapis.com/youtube/v3/videos?key=".concat("AIzaSyBXSoOKDWX6gkytt-MZe6vkKfprwTJmCC4","&chart=mostPopular&maxResults=").concat(50,"&part=snippet%2CcontentDetails"),M=Math.ceil(2),R=0,J=function(){var t=Object(n.useContext)(ct).dispatch,e=function t(e){fetch(e).then((function(t){return t.json()})).then((function(e){if(Y=[].concat(Object(P.a)(Y),Object(P.a)(e.items)),(R+=1)!==M)return t("".concat(B,"&pageToken=").concat(e.nextPageToken));a()}))},a=function(){t({type:"Set_YT_Loading",payload:{loading:!1}}),t({type:"Set_YT_List",payload:{yt_list:Y}}),t({type:"Set_Save_Str",payload:{save_str:localStorage.getItem("save_str")||""}})};return Object(n.useEffect)((function(){t({type:"Set_YT_Loading",payload:{loading:!0}}),e(B)}),[]),null},H=a(20),U=a.n(H),X=function(){var t=Object(n.useContext)(ct).ytList,e=t.yt_list,a=t.save_str,i=t.loading,c=e.filter((function(t){var e=t.id;return a.includes(e)}));return i?Object(v.jsx)("div",{className:d()(U.a.loading),children:"\u62ff\u53d6\u8cc7\u6599\u4e2d..."}):c.length?Object(v.jsx)("div",{className:d()(U.a["list-box"]),children:Object(v.jsxs)("ul",{className:d()(U.a["yt-list"]),children:[c.map((function(t){return Object(v.jsx)(k,Object(x.a)({},t),t.snippet.title)})),window.innerWidth<=1080&&window.innerWidth>=768?Object(v.jsx)(v.Fragment,{children:Array(I(c)).fill().map((function(t,e){return Object(v.jsx)(k,{hidden:!0},"index-".concat(e+1))}))}):null]})}):Object(v.jsx)("div",{className:d()(U.a["no-save"]),children:"\u5c1a\u672a\u6709\u4efb\u4f55\u6536\u85cf\u5594!"})},Z=a(28),K=a.n(Z),V=a(7),Q=a.n(V),q=a.p+"static/media/ad.93e44888.jpg",z=null;var G=function(){var t,e,a=Object(u.g)(),i=new K.a,c=n.useRef(null),s=n.useContext(ct).ytList,l=s.yt_list,o=s.loading,b=Object(u.i)().id,_=l.filter((function(t){return t.id===b}))[0],p=l.findIndex((function(t){return t.id===b})),x=null===(t=l[p+1])||void 0===t?void 0:t.id,f=null===(e=l[p-1])||void 0===e?void 0:e.id;n.useEffect((function(){c.current&&(i.attachMedia(c.current),i.on(K.a.Events.MEDIA_ATTACHED,(function(){i.loadSource("https://bitdash-a.akamaihd.net/content/sintel/hls/playlist.m3u8")})))}),[b]);var O=n.useState(!1),h=Object(r.a)(O,2),m=h[0],g=h[1],y=function(t){g(t)},w=function(t){a.push("/ajtaiwan/play/".concat(t))};return o||!l.length?Object(v.jsx)("div",{className:d()(Q.a["loading-box"]),children:"\u62ff\u53d6\u8cc7\u6599\u4e2d..."}):_?Object(v.jsxs)("div",{className:d()(Q.a["video-box"]),children:[Object(v.jsxs)("div",{className:d()(Q.a.video),children:[Object(v.jsx)("video",{onPause:function(){z=setTimeout((function(){y(!0)}),500)},onPlay:function(){y(!1),clearTimeout(z),z=null},ref:c,autoPlay:!0,muted:!0,loop:!0,playsInline:!0,controls:!0}),Object(v.jsxs)("div",{className:d()(Q.a["ad-box"],Object(j.a)({},Q.a.active,m)),children:[Object(v.jsx)("a",{href:"https://www.pinkoi.com/product/W6VrGiks?_currency=TWD&utm_source=Google-TW-MKT&utm_medium=p-con-shopping-na&utm_campaign=gsa&gclid=Cj0KCQiA7YyCBhD_ARIsALkj54rE6bwrTij5lPjgwU5F8VL9gB4DT2EIkdEMJhUZPLJn6ksWXksdfEYaAlS7EALw_wcB",target:"_blank",rel:"nofollow noopener noreferrer",children:Object(v.jsx)("img",{src:q,alt:"pinkoi ad img"})}),Object(v.jsx)("div",{onClick:function(){y(!1)},className:d()(Q.a.close),children:Object(v.jsx)("i",{className:"far fa-times-circle"})})]}),Object(v.jsx)("div",{onClick:function(){f?w(f):alert("\u9019\u662f\u7b2c\u4e00\u90e8\u5f71\u7247\u5594!")},className:d()(Q.a["arrow-video"],Q.a["prev-video"]),children:Object(v.jsx)("i",{className:"fas fa-arrow-left"})}),Object(v.jsx)("div",{onClick:function(){x?w(x):alert("\u9019\u662f\u6700\u5f8c\u4e00\u90e8\u5f71\u7247\u5594!")},className:d()(Q.a["arrow-video"],Q.a["next-video"]),children:Object(v.jsx)("i",{className:"fas fa-arrow-right"})})]}),Object(v.jsx)("div",{className:d()(Q.a.title),children:_.snippet.title}),Object(v.jsx)("div",{className:d()(Q.a.description),children:_.snippet.description})]}):(alert("\u6c92\u6709\u9019\u90e8\u5f71\u7247\u5594"),Object(v.jsx)(u.a,{to:"/ajtaiwan/list/1"}))},$=function(){return J(),Object(v.jsx)("div",{className:d()(F.a.box),children:Object(v.jsxs)(u.d,{children:[Object(v.jsx)(u.b,{path:"/ajtaiwan/save",children:Object(v.jsx)(X,{})}),Object(v.jsx)(u.b,{path:"/ajtaiwan/play/:id",children:Object(v.jsx)(G,{})}),Object(v.jsx)(u.b,{path:"/ajtaiwan/list/:page",children:Object(v.jsx)(W,{})}),Object(v.jsx)(u.b,{path:"*",render:function(){return Object(v.jsx)(u.a,{to:"/ajtaiwan/list/1"})}})]})})},tt=a(33),et=a.n(tt),at={loading:!1,yt_list:[],save_str:""};function nt(t,e){var a=e.payload,n=(a=void 0===a?{}:a).loading,i=a.yt_list,c=void 0===i?[]:i,s=a.save_str;switch(e.type){case"Set_YT_Loading":return Object(x.a)(Object(x.a)({},t),{},{loading:n});case"Set_YT_List":return Object(x.a)(Object(x.a)({},t),{},{yt_list:[].concat(Object(P.a)(t.yt_list),Object(P.a)(c))});case"Set_Save_Str":return Object(x.a)(Object(x.a)({},t),{},{save_str:s});case"Reset_Tab_Content":return at;default:return t}}var it,ct=i.a.createContext({});var st=0;var lt=function(){var t,e=Object(n.useReducer)(nt,at),a=Object(r.a)(e,2),i=a[0],c=a[1];return Object(n.useEffect)((function(){var t=function(){clearInterval(it),it=null};it=setInterval((function(){(st+=1)>20&&t();var e=document.querySelector('img[alt="www.000webhost.com"]');e&&(t(),e.remove())}),300)}),[]),Object(v.jsx)(ct.Provider,{value:{ytList:i,dispatch:(t=[c],function(e){for(var a=0;a<t.length;a++)t[a](e)})},children:Object(v.jsxs)("div",{className:d()(et.a.app),children:[Object(v.jsx)(p,{}),Object(v.jsx)($,{})]})})},rt=function(t){t&&t instanceof Function&&a.e(3).then(a.bind(null,46)).then((function(e){var a=e.getCLS,n=e.getFID,i=e.getFCP,c=e.getLCP,s=e.getTTFB;a(t),n(t),i(t),c(t),s(t)}))};s.a.render(Object(v.jsx)(l.a,{children:Object(v.jsx)(lt,{})}),document.getElementById("root")),rt()},7:function(t,e,a){t.exports={"video-box":"player_video-box__3xWQZ",video:"player_video__3sRcU","ad-box":"player_ad-box__3D2Np",active:"player_active__1p3Es",close:"player_close__3zHFU",title:"player_title__2ycAg",description:"player_description__2AyfS","loading-box":"player_loading-box__1nYZl","arrow-video":"player_arrow-video__4cn3v","prev-video":"player_prev-video__71gw_","next-video":"player_next-video__BIlsO"}}},[[45,1,2]]]);
//# sourceMappingURL=main.fe5a4a8f.chunk.js.map