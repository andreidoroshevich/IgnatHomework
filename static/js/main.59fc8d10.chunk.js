(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports={message:"Message_message__sRu4M",photo:"Message_photo__23hp4",content:"Message_content__2x1ba",time:"Message_time__2TvEA",name:"Message_name__1obba"}},,function(e,t,a){e.exports={main:"Affairs_main__1fk-J",name:"Affairs_name__Q_dNZ",priority:"Affairs_priority__3uZzh"}},function(e,t,a){e.exports={superInput:"SuperInputText_superInput__1Bi2t",errorInput:"SuperInputText_errorInput__2S2zw",error:"SuperInputText_error__2IFFT"}},function(e,t,a){e.exports={blue:"HW4_blue__3U_Rs",column:"HW4_column__QA1tK",testSpanError:"HW4_testSpanError__kR9dd"}},function(e,t,a){e.exports={default:"SuperButton_default__32aR4",red:"SuperButton_red__3wtRU"}},function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__2dvbq",spanClassName:"SuperCheckbox_spanClassName__2LoKx"}},,,function(e,t,a){e.exports={App:"App_App__c46DS",hwheader:"App_hwheader__33gbO"}},function(e,t,a){e.exports={someClass:"Greeting_someClass__1TrDC",error:"Greeting_error__1YGdS"}},function(e,t,a){e.exports={editableSpan:"SuperEditableSpan_editableSpan__2v2Lc"}},,function(e,t,a){e.exports=a(27)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(15),c=a.n(l),o=(a(25),a(16)),u=a.n(o),i=a(2),s=a(5);a(26);var m=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"slideMenu",onClick:function(){l(!a)}},"Navbar"),r.a.createElement("div",{className:a?"navBar active":"navBar"},r.a.createElement("div",null,r.a.createElement(s.b,{className:function(e){return e.isActive?"active":"navBarItem"},to:"/PreJunior"},"PreJunior")),r.a.createElement("div",null,r.a.createElement(s.b,{className:function(e){return e.isActive?"active":"navBarItem"},to:"/Junior"},"Junior")),r.a.createElement("div",null,r.a.createElement(s.b,{className:function(e){return e.isActive?"active":"navBarItem"},to:"/JuniorPlus"},"JuniorPlus"))))},d=a(7),E=a.n(d);var p=function(e){return r.a.createElement("div",{className:E.a.message},r.a.createElement("div",{className:E.a.photo},r.a.createElement("img",{src:e.avatar})),r.a.createElement("div",{className:E.a.content},r.a.createElement("div",{className:E.a.name},e.name),r.a.createElement("div",null,e.message),r.a.createElement("div",{className:E.a.time},e.time)))},v="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",f="Andrei",h="npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",b="20:00";var _=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(p,{avatar:v,name:f,message:h,time:b}),r.a.createElement("hr",null),r.a.createElement("hr",null))},g=a(9),C=a.n(g);var k=function(e){return r.a.createElement("div",{className:C.a.main},r.a.createElement("div",{className:C.a.name},e.affair.name),r.a.createElement("div",{className:C.a.priority},e.affair.priority),r.a.createElement("button",{onClick:function(){return t=e.affair._id,void e.deleteAffairCallback(t);var t}},"X"))};var N=function(e){var t=e.data.map((function(t){return r.a.createElement(k,{key:t._id,affair:t,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,t,r.a.createElement("button",{onClick:function(){return t="all",void e.setFilter(t);var t}},"All"),r.a.createElement("button",{onClick:function(){return t="high",void e.setFilter(t);var t}},"High"),r.a.createElement("button",{onClick:function(){return t="middle",void e.setFilter(t);var t}},"Middle"),r.a.createElement("button",{onClick:function(){return t="low",void e.setFilter(t);var t}},"Low"))},O=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var S=function(){var e=Object(n.useState)(O),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("all"),o=Object(i.a)(c,2),u=o[0],s=o[1],m=function(e,t){return"all"===t?e:"low"===t?e.filter((function(e){return"low"===e.priority})):"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):e}(a,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(N,{data:m,setFilter:s,deleteAffairCallback:function(e){return l(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},j=a(19),x=a(17),y=a.n(x),w=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?y.a.error:"";return r.a.createElement("div",null,r.a.createElement("input",{value:t,onChange:a,className:o,onKeyPress:function(e){"Enter"===e.key&&n()}}),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",{className:"counter"},c),r.a.createElement("div",null,l))},A=function(e){var t=e.users,a=e.addUserCallback,l=Object(n.useState)(""),c=Object(i.a)(l,2),o=c[0],u=c[1],s=Object(n.useState)(""),m=Object(i.a)(s,2),d=m[0],E=m[1],p=t.length;return r.a.createElement(w,{name:o,setNameCallback:function(e){u(e.currentTarget.value)},addUser:function(){o?(a(o),alert("Hello ".concat(o,"!")),E(""),u("")):(alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0435 \u0438\u043c\u044f"),E("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0435 \u0438\u043c\u044f"))},error:d,totalUsers:p})},I=a(29);var J=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(A,{users:a,addUserCallback:function(e){l([{name:e,_id:Object(I.a)()}].concat(Object(j.a)(a)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},T=a(4),B=a(10),F=a.n(B),P=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],M=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=(e.onKeyPress,e.onEnter,e.error),l=e.className,c=e.spanClassName,o=Object(T.a)(e,P),u="".concat(F.a.error," ").concat(c||""),i=n?"".concat(F.a.errorInput," ").concat(l):"".concat(F.a.superInput);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},className:i},o)),n&&r.a.createElement("span",{className:u},n))},U=a(11),W=a.n(U),H=a(12),R=a.n(H),D=["red","className"],K=function(e){var t=e.red,a=e.className,n=Object(T.a)(e,D),l="".concat(t?R.a.red:R.a.default," ").concat(a);return r.a.createElement("button",Object.assign({className:l},n))},G=a(13),L=a.n(G),Z=["type","onChange","onChangeChecked","className","spanClassName","children"],q=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(T.a)(e,Z),o="".concat(L.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e.currentTarget.checked),t&&t(e)},className:o},c)),l&&r.a.createElement("span",{className:L.a.spanClassName},l))};var z=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1],c=a?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},u=Object(n.useState)(!1),s=Object(i.a)(u,2),m=s[0],d=s[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:W.a.column},r.a.createElement(M,{value:a,onChangeText:l,onEnter:o,error:c}),r.a.createElement(M,{className:W.a.blue}),r.a.createElement(K,null,"default"),r.a.createElement(K,{red:!0,onClick:o},"delete "),r.a.createElement(K,{disabled:!0},"disabled"),r.a.createElement(q,{checked:m,onChangeChecked:d},"some text "),r.a.createElement(q,{checked:m,onChange:function(e){return d(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},Q=a(18),X=a.n(Q),Y=["autoFocus","onBlur","onEnter","spanProps"],$=["children","onDoubleClick","className"],V=function(e){e.autoFocus;var t=e.onBlur,a=e.onEnter,l=e.spanProps,c=Object(T.a)(e,Y),o=Object(n.useState)(!1),u=Object(i.a)(o,2),s=u[0],m=u[1],d=l||{},E=d.children,p=d.onDoubleClick,v=d.className,f=Object(T.a)(d,$),h="".concat(X.a.editableSpan," ").concat(v);return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(M,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),t&&t(e)},onEnter:function(){m(!1),a&&a()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),p&&p(e)},className:h},f),E||c.value))};function ee(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}function te(e,t){var a=t,n=localStorage.getItem(e);return null!==n&&(a=JSON.parse(n)),a}ee("test",{x:"A",y:1});te("test",{x:"",y:0});var ae=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement("span",{className:"s.pencil"},r.a.createElement("img",{src:"https://cdn-icons-png.flaticon.com/512/124/124738.png"})),r.a.createElement(V,{value:a,onChangeText:l,spanProps:{children:a?void 0:"enter text..."}})),r.a.createElement(K,{onClick:function(){ee("editable-span-value",a)}},"save"),r.a.createElement(K,{onClick:function(){l(te("editable-span-value",a))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var ne=function(){return r.a.createElement("div",null,r.a.createElement(_,null),r.a.createElement(S,null),r.a.createElement(J,null),r.a.createElement(z,null),r.a.createElement(ae,null))};var re=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"notfound"},"404"),r.a.createElement("div",null,"Page not found!"))},le=a(1);var ce=function(){return r.a.createElement("div",null)};var oe=function(){return r.a.createElement("div",null)},ue="/PreJunior",ie="/Junior",se="/JuniorPlus";var me=function(){return r.a.createElement("div",null,r.a.createElement(le.d,null,r.a.createElement(le.b,{path:"/",element:r.a.createElement(le.a,{to:ue})}),r.a.createElement(le.b,{path:ue,element:r.a.createElement(ne,null)}),r.a.createElement(le.b,{path:ie,element:r.a.createElement(ce,null)}),r.a.createElement(le.b,{path:se,element:r.a.createElement(oe,null)}),"// add routes",r.a.createElement(le.b,{path:"/*",element:r.a.createElement(re,null)})))};var de=function(){return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(m,null),r.a.createElement(me,null)))};var Ee=function(){return r.a.createElement("div",{className:u.a.App},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(de,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ee,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[20,1,2]]]);
//# sourceMappingURL=main.59fc8d10.chunk.js.map