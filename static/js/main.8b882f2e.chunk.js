(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,,function(e,a,t){e.exports={message:"Message_message__sRu4M",photo:"Message_photo__23hp4",content:"Message_content__2x1ba",time:"Message_time__2TvEA",name:"Message_name__1obba"}},,function(e,a,t){e.exports={main:"Affairs_main__1fk-J",name:"Affairs_name__Q_dNZ",priority:"Affairs_priority__3uZzh"}},function(e,a,t){e.exports={superInput:"SuperInputText_superInput__1Bi2t",errorInput:"SuperInputText_errorInput__2S2zw",error:"SuperInputText_error__2IFFT"}},function(e,a,t){e.exports={blue:"HW4_blue__3U_Rs",column:"HW4_column__QA1tK",testSpanError:"HW4_testSpanError__kR9dd"}},function(e,a,t){e.exports={default:"SuperButton_default__32aR4",red:"SuperButton_red__3wtRU"}},function(e,a,t){e.exports={checkbox:"SuperCheckbox_checkbox__2dvbq",spanClassName:"SuperCheckbox_spanClassName__2LoKx"}},,,function(e,a,t){e.exports={App:"App_App__c46DS"}},function(e,a,t){e.exports={someClass:"Greeting_someClass__1TrDC",error:"Greeting_error__1YGdS"}},,function(e,a,t){e.exports=t(26)},,,,,function(e,a,t){},function(e,a,t){},function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(15),c=t.n(l),o=(t(24),t(16)),u=t.n(o),i=t(2),m=t(4);t(25);var s=function(){var e=Object(n.useState)(!1),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"slideMenu",onClick:function(){l(!t)}},"Navbar"),r.a.createElement("div",{className:t?"navBar active":"navBar"},r.a.createElement("div",{className:"navBarItem"}," ",r.a.createElement(m.b,{to:"/PreJunior"},"PreJunior")),r.a.createElement("div",{className:"navBarItem"},r.a.createElement(m.b,{to:"/Junior"},"Junior")),r.a.createElement("div",{className:"navBarItem"},r.a.createElement(m.b,{to:"/JuniorPlus"},"JuniorPlus"))))},d=t(7),E=t.n(d);var p=function(e){return r.a.createElement("div",{className:E.a.message},r.a.createElement("div",{className:E.a.photo},r.a.createElement("img",{src:e.avatar})),r.a.createElement("div",{className:E.a.content},r.a.createElement("div",{className:E.a.name},e.name),r.a.createElement("div",null,e.message),r.a.createElement("div",{className:E.a.time},e.time)))},f="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",v="Andrei",h="npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",_="20:00";var b=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(p,{avatar:f,name:v,message:h,time:_}),r.a.createElement("hr",null),r.a.createElement("hr",null))},g=t(9),C=t.n(g);var k=function(e){return r.a.createElement("div",{className:C.a.main},r.a.createElement("div",{className:C.a.name},e.affair.name),r.a.createElement("div",{className:C.a.priority},e.affair.priority),r.a.createElement("button",{onClick:function(){return a=e.affair._id,void e.deleteAffairCallback(a);var a}},"X"))};var N=function(e){var a=e.data.map((function(a){return r.a.createElement(k,{key:a._id,affair:a,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,a,r.a.createElement("button",{onClick:function(){return a="all",void e.setFilter(a);var a}},"All"),r.a.createElement("button",{onClick:function(){return a="high",void e.setFilter(a);var a}},"High"),r.a.createElement("button",{onClick:function(){return a="middle",void e.setFilter(a);var a}},"Middle"),r.a.createElement("button",{onClick:function(){return a="low",void e.setFilter(a);var a}},"Low"))},O=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var j=function(){var e=Object(n.useState)(O),a=Object(i.a)(e,2),t=a[0],l=a[1],c=Object(n.useState)("all"),o=Object(i.a)(c,2),u=o[0],m=o[1],s=function(e,a){return"all"===a?e:"low"===a?e.filter((function(e){return"low"===e.priority})):"high"===a?e.filter((function(e){return"high"===e.priority})):"middle"===a?e.filter((function(e){return"middle"===e.priority})):e}(t,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(N,{data:s,setFilter:m,deleteAffairCallback:function(e){return l(function(e,a){return e.filter((function(e){return e._id!==a}))}(t,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},x=t(18),y=t(17),S=t.n(y),w=function(e){var a=e.name,t=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?S.a.error:"";return r.a.createElement("div",null,r.a.createElement("input",{value:a,onChange:t,className:o,onKeyPress:function(e){"Enter"===e.key&&n()}}),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",{className:"counter"},c),r.a.createElement("div",null,l))},A=function(e){var a=e.users,t=e.addUserCallback,l=Object(n.useState)(""),c=Object(i.a)(l,2),o=c[0],u=c[1],m=Object(n.useState)(""),s=Object(i.a)(m,2),d=s[0],E=s[1],p=a.length;return r.a.createElement(w,{name:o,setNameCallback:function(e){u(e.currentTarget.value)},addUser:function(){o?(t(o),alert("Hello ".concat(o,"!")),E(""),u("")):(alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0435 \u0438\u043c\u044f"),E("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0435 \u0438\u043c\u044f"))},error:d,totalUsers:p})},I=t(28);var T=function(){var e=Object(n.useState)([]),a=Object(i.a)(e,2),t=a[0],l=a[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(A,{users:t,addUserCallback:function(e){l([{name:e,_id:Object(I.a)()}].concat(Object(x.a)(t)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},J=t(6),B=t(10),P=t.n(B),F=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],M=function(e){e.type;var a=e.onChange,t=e.onChangeText,n=(e.onKeyPress,e.onEnter,e.error),l=e.className,c=e.spanClassName,o=Object(J.a)(e,F),u="".concat(P.a.error," ").concat(c||""),i=n?"".concat(P.a.errorInput," ").concat(l):"".concat(P.a.superInput);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){a&&a(e),t&&t(e.currentTarget.value)},className:i},o)),n&&r.a.createElement("span",{className:u},n))},U=t(11),W=t.n(U),H=t(12),R=t.n(H),K=["red","className"],G=function(e){var a=e.red,t=e.className,n=Object(J.a)(e,K),l="".concat(a?R.a.red:R.a.default," ").concat(t);return r.a.createElement("button",Object.assign({className:l},n))},Z=t(13),q=t.n(Z),z=["type","onChange","onChangeChecked","className","spanClassName","children"],D=function(e){e.type;var a=e.onChange,t=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(J.a)(e,z),o="".concat(q.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){t&&t(e.currentTarget.checked),a&&a(e)},className:o},c)),l&&r.a.createElement("span",{className:q.a.spanClassName},l))};var L=function(){var e=Object(n.useState)(""),a=Object(i.a)(e,2),t=a[0],l=a[1],c=t?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(t)},u=Object(n.useState)(!1),m=Object(i.a)(u,2),s=m[0],d=m[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:W.a.column},r.a.createElement(M,{value:t,onChangeText:l,onEnter:o,error:c}),r.a.createElement(M,{className:W.a.blue}),r.a.createElement(G,null,"default"),r.a.createElement(G,{red:!0,onClick:o},"delete "),r.a.createElement(G,{disabled:!0},"disabled"),r.a.createElement(D,{checked:s,onChangeChecked:d},"some text "),r.a.createElement(D,{checked:s,onChange:function(e){return d(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))};var Q=function(){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(j,null),r.a.createElement(T,null),r.a.createElement(L,null))};var X=function(){return r.a.createElement("div",null,r.a.createElement("div",null,"404"),r.a.createElement("div",null,"Page not found!"),r.a.createElement("div",null,"\u2014\u0e05/\u1420.\u032b .\u141f\\\u0e05\u2014"))},Y=t(1);var $=function(){return r.a.createElement("div",null)};var V=function(){return r.a.createElement("div",null)},ee="/PreJunior",ae="/Junior",te="/JuniorPlus";var ne=function(){return r.a.createElement("div",null,r.a.createElement(Y.d,null,r.a.createElement(Y.b,{path:"/",element:r.a.createElement(Y.a,{to:ee})}),r.a.createElement(Y.b,{path:ee,element:r.a.createElement(Q,null)}),r.a.createElement(Y.b,{path:ae,element:r.a.createElement($,null)}),r.a.createElement(Y.b,{path:te,element:r.a.createElement(V,null)}),"// add routes",r.a.createElement(Y.b,{path:"/*",element:r.a.createElement(X,null)})))};var re=function(){return r.a.createElement("div",null,r.a.createElement(m.a,null,r.a.createElement(s,null),r.a.createElement(ne,null)))};var le=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(re,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(le,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[19,1,2]]]);
//# sourceMappingURL=main.8b882f2e.chunk.js.map