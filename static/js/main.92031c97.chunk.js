(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports={timer:"styles_timer__3xyqB",date:"styles_date__oW6aa",button:"styles_button__2G9dc",start:"styles_start__1d3dS",stop:"styles_stop__U2xSn",buttoncontainer:"styles_buttoncontainer__va1ng"}},,,function(e,t,a){e.exports={message:"Message_message__sRu4M",photo:"Message_photo__23hp4",content:"Message_content__2x1ba",time:"Message_time__2TvEA",name:"Message_name__1obba"}},function(e,t,a){},,,,function(e,t,a){e.exports={main:"Affairs_main__1fk-J",name:"Affairs_name__Q_dNZ",priority:"Affairs_priority__3uZzh"}},function(e,t,a){e.exports={superInput:"SuperInputText_superInput__1Bi2t",errorInput:"SuperInputText_errorInput__2S2zw",error:"SuperInputText_error__2IFFT"}},function(e,t,a){e.exports={preloader:"hw10_preloader__SJoRH",button:"hw10_button__3JV31",img:"hw10_img__3OUAM"}},,function(e,t,a){e.exports={blue:"HW4_blue__3U_Rs",column:"HW4_column__QA1tK",testSpanError:"HW4_testSpanError__kR9dd"}},function(e,t,a){e.exports={default:"SuperButton_default__32aR4",red:"SuperButton_red__3wtRU"}},function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__2dvbq",spanClassName:"SuperCheckbox_spanClassName__2LoKx"}},,,,,function(e,t,a){e.exports={App:"App_App__c46DS",hwheader:"App_hwheader__33gbO"}},function(e,t,a){e.exports={someClass:"Greeting_someClass__1TrDC",error:"Greeting_error__1YGdS"}},function(e,t,a){e.exports={editableSpan:"SuperEditableSpan_editableSpan__2v2Lc"}},,,function(e,t,a){e.exports=a(42)},,,,,function(e,t,a){},function(e,t,a){},,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(13),c=a.n(l),o=(a(35),a(25)),u=a.n(o),i=a(2),s=a(7);a(36);var m=function(){var e=Object(n.useState)(!1),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{className:"slideMenu",onClick:function(){l(!a)}},"Navbar"),r.a.createElement("div",{className:a?"navBar active":"navBar"},r.a.createElement("div",null,r.a.createElement(s.b,{className:function(e){return e.isActive?"active":"navBarItem"},to:"/PreJunior"},"PreJunior")),r.a.createElement("div",null,r.a.createElement(s.b,{className:function(e){return e.isActive?"active":"navBarItem"},to:"/Junior"},"Junior")),r.a.createElement("div",null,r.a.createElement(s.b,{className:function(e){return e.isActive?"active":"navBarItem"},to:"/JuniorPlus"},"JuniorPlus"))))},d=a(9),p=a.n(d);var E=function(e){return r.a.createElement("div",{className:p.a.message},r.a.createElement("div",{className:p.a.photo},r.a.createElement("img",{src:e.avatar})),r.a.createElement("div",{className:p.a.content},r.a.createElement("div",{className:p.a.name},e.name),r.a.createElement("div",null,e.message),r.a.createElement("div",{className:p.a.time},e.time)))},v="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",g="Andrei",h="npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",f="20:00";var b=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(E,{avatar:v,name:g,message:h,time:f}),r.a.createElement("hr",null),r.a.createElement("hr",null))},_=a(14),C=a.n(_);var k=function(e){return r.a.createElement("div",{className:C.a.main},r.a.createElement("div",{className:C.a.name},e.affair.name),r.a.createElement("div",{className:C.a.priority},e.affair.priority),r.a.createElement("button",{onClick:function(){return t=e.affair._id,void e.deleteAffairCallback(t);var t}},"X"))};var O=function(e){var t=e.data.map((function(t){return r.a.createElement(k,{key:t._id,affair:t,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,t,r.a.createElement("button",{onClick:function(){return t="all",void e.setFilter(t);var t}},"All"),r.a.createElement("button",{onClick:function(){return t="high",void e.setFilter(t);var t}},"High"),r.a.createElement("button",{onClick:function(){return t="middle",void e.setFilter(t);var t}},"Middle"),r.a.createElement("button",{onClick:function(){return t="low",void e.setFilter(t);var t}},"Low"))},N=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var y=function(){var e=Object(n.useState)(N),t=Object(i.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("all"),o=Object(i.a)(c,2),u=o[0],s=o[1],m=function(e,t){return"all"===t?e:"low"===t?e.filter((function(e){return"low"===e.priority})):"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):e}(a,u);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(O,{data:m,setFilter:s,deleteAffairCallback:function(e){return l(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},j=a(5),w=a(26),S=a.n(w),x=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?S.a.error:"";return r.a.createElement("div",null,r.a.createElement("input",{value:t,onChange:a,className:o,onKeyPress:function(e){"Enter"===e.key&&n()}}),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",{className:"counter"},c),r.a.createElement("div",null,l))},A=function(e){var t=e.users,a=e.addUserCallback,l=Object(n.useState)(""),c=Object(i.a)(l,2),o=c[0],u=c[1],s=Object(n.useState)(""),m=Object(i.a)(s,2),d=m[0],p=m[1],E=t.length;return r.a.createElement(x,{name:o,setNameCallback:function(e){u(e.currentTarget.value)},addUser:function(){o?(a(o),alert("Hello ".concat(o,"!")),p(""),u("")):(alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0435 \u0438\u043c\u044f"),p("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0435 \u0438\u043c\u044f"))},error:d,totalUsers:E})},M=a(44);var I=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(A,{users:a,addUserCallback:function(e){l([{name:e,_id:Object(M.a)()}].concat(Object(j.a)(a)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},F=a(4),J=a(15),T=a.n(J),B=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],P=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=(e.onKeyPress,e.onEnter,e.error),l=e.className,c=e.spanClassName,o=Object(F.a)(e,B),u="".concat(T.a.error," ").concat(c||""),i=n?"".concat(T.a.errorInput," ").concat(l):"".concat(T.a.superInput);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},className:i},o)),n&&r.a.createElement("span",{className:u},n))},H=a(18),U=a.n(H),D=a(19),L=a.n(D),R=["red","className"],W=function(e){var t=e.red,a=e.className,n=Object(F.a)(e,R),l="".concat(t?L.a.red:L.a.default," ").concat(a);return r.a.createElement("button",Object.assign({className:l},n))},G=a(20),K=a.n(G),Y=["type","onChange","onChangeChecked","className","spanClassName","children"],q=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(F.a)(e,Y),o="".concat(K.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e.currentTarget.checked),t&&t(e)},className:o},c)),l&&r.a.createElement("span",{className:K.a.spanClassName},l))};var z=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1],c=a?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},u=Object(n.useState)(!1),s=Object(i.a)(u,2),m=s[0],d=s[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:U.a.column},r.a.createElement(P,{value:a,onChangeText:l,onEnter:o,error:c}),r.a.createElement(P,{className:U.a.blue}),r.a.createElement(W,null,"default"),r.a.createElement(W,{red:!0,onClick:o},"delete "),r.a.createElement(W,{disabled:!0},"disabled"),r.a.createElement(q,{checked:m,onChangeChecked:d},"some text "),r.a.createElement(q,{checked:m,onChange:function(e){return d(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},Z=a(27),Q=a.n(Z),X=["autoFocus","onBlur","onEnter","spanProps"],V=["children","onDoubleClick","className"],$=function(e){e.autoFocus;var t=e.onBlur,a=e.onEnter,l=e.spanProps,c=Object(F.a)(e,X),o=Object(n.useState)(!1),u=Object(i.a)(o,2),s=u[0],m=u[1],d=l||{},p=d.children,E=d.onDoubleClick,v=d.className,g=Object(F.a)(d,V),h="".concat(Q.a.editableSpan," ").concat(v);return r.a.createElement(r.a.Fragment,null,s?r.a.createElement(P,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),t&&t(e)},onEnter:function(){m(!1),a&&a()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),E&&E(e)},className:h},g),p||c.value))};function ee(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}function te(e,t){var a=t,n=localStorage.getItem(e);return null!==n&&(a=JSON.parse(n)),a}ee("test",{x:"A",y:1});te("test",{x:"",y:0});var ae=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement("span",{className:"s.pencil"},r.a.createElement("img",{src:"https://cdn-icons-png.flaticon.com/512/124/124738.png"})),r.a.createElement($,{value:a,onChangeText:l,spanProps:{children:a?void 0:"enter text..."}})),r.a.createElement(W,{onClick:function(){ee("editable-span-value",a)}},"save"),r.a.createElement(W,{onClick:function(){l(te("editable-span-value",a))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var ne=function(){return r.a.createElement("div",null,r.a.createElement(b,null),r.a.createElement(y,null),r.a.createElement(I,null),r.a.createElement(z,null),r.a.createElement(ae,null))};var re=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"notfound"},"404"),r.a.createElement("div",null,"Page not found!"))},le=a(1),ce=["options","onChange","onChangeOption"],oe=function(e){var t=e.options,a=(e.onChange,e.onChangeOption),n=Object(F.a)(e,ce),l=t?t.map((function(e,t){return r.a.createElement("option",{value:e,key:t},e)})):[];return r.a.createElement("select",Object.assign({onChange:function(e){a&&a(e.currentTarget.value)}},n),l)},ue=["type","name","options","value","onChange","onChangeOption"],ie=function(e){e.type;var t=e.name,a=e.options,n=e.value,l=(e.onChange,e.onChangeOption),c=(Object(F.a)(e,ue),function(e){l&&l(e.currentTarget.value)}),o=a?a.map((function(e,a){return r.a.createElement("label",{key:t+"-"+a},r.a.createElement("input",{type:"radio",onChange:c,value:e,checked:n===e,name:t}),e)})):[];return r.a.createElement(r.a.Fragment,null,o)},se=["x","y","z"];var me=function(){var e=Object(n.useState)(se[0]),t=Object(i.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",{style:{margin:"10px"}},r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(oe,{style:{width:"50px",height:"20px",backgroundColor:"lightskyblue",margin:"5px",borderRadius:"2px",border:"1px solid blue",color:"darkgreenred"},options:se,value:a,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(ie,{name:"radio",options:se,value:a,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},de=function(e,t){switch(t.type){case"sort":return"up"===t.payload?Object(j.a)(e.sort((function(e,t){return e.name.toUpperCase()<=t.name.toUpperCase()?-1:1}))):"down"===t.payload?Object(j.a)(e.sort((function(e,t){return t.name.toUpperCase()<=e.name.toUpperCase()?-1:1}))):e;case"check":return Object(j.a)(e.filter((function(e){return e.age>t.payload})));default:return e}},pe=a(10),Ee=a.n(pe),ve=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var ge=function(){var e=Object(n.useState)(ve),t=Object(i.a)(e,2),a=t[0],l=t[1],c=a.map((function(e){return r.a.createElement("div",{key:e._id},r.a.createElement("table",{className:Ee.a.table},r.a.createElement("tr",{className:Ee.a.tr},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.age))))}));return r.a.createElement("div",null,"homeworks 8",c,r.a.createElement("div",null,r.a.createElement(W,{className:Ee.a.button,onClick:function(){return l(de(ve,{type:"sort",payload:"up"}))}},"sort up"),r.a.createElement(W,{className:Ee.a.button,onClick:function(){return l(de(ve,{type:"sort",payload:"down"}))}},"sort down"),r.a.createElement(W,{className:Ee.a.button,onClick:function(){return l(de(ve,{type:"check",payload:18}))}},"check 18")),r.a.createElement("hr",null))},he=a(6),fe=a.n(he);var be=function(){var e,t,a=Object(n.useState)(0),l=Object(i.a)(a,2),c=l[0],o=l[1],u=Object(n.useState)(new Date),s=Object(i.a)(u,2),m=s[0],d=s[1],p=Object(n.useState)(!1),E=Object(i.a)(p,2),v=E[0],g=E[1],h=function(){clearInterval(c)};return e=m.getHours()<10&&m.getMinutes()<10&&m.getSeconds()?"0"+m.getHours()+":0"+m.getMinutes()+":0"+m.getSeconds():m.getHours()<10?"0"+m.getHours()+":"+m.getMinutes()+":"+m.getSeconds():m.getMinutes()<10?m.getHours()+":0"+m.getMinutes()+":"+m.getSeconds():m.getSeconds()<10?m.getHours()+":"+m.getMinutes()+":0"+m.getSeconds():m.getHours()+":"+m.getMinutes()+":"+m.getSeconds(),t=m.getMonth()<10?"0"+m.getDate()+".0"+(m.getMonth()+1)+"."+m.getFullYear():m.getDate()<10?"0"+m.getDate()+"."+(m.getMonth()+1)+"."+m.getFullYear():m.getDate()+"."+(m.getMonth()+1)+"."+m.getFullYear(),r.a.createElement("div",null,r.a.createElement("div",{className:fe.a.timer,onMouseEnter:function(){g(!0)},onMouseLeave:function(){g(!1)}},e),v&&r.a.createElement("div",{className:fe.a.date},t),r.a.createElement("div",{className:fe.a.buttoncontainer},r.a.createElement(W,{className:"".concat(fe.a.button," ").concat(fe.a.start),onClick:function(){h();var e=window.setInterval((function(){d(new Date)}),1e3);o(e)}},"start"),r.a.createElement(W,{className:"".concat(fe.a.button," ").concat(fe.a.stop),onClick:h},"stop")))};var _e=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 9",r.a.createElement(be,null),r.a.createElement("hr",null),r.a.createElement("hr",null))},Ce=a(12),ke=a(23),Oe={isLoading:!1},Ne=function(e){return{type:"LOADING",isLoading:e}},ye=a(16),je=a.n(ye);var we=function(){var e=Object(Ce.c)((function(e){return e.isLoading.isLoading})),t=Object(Ce.b)();return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 10",e?r.a.createElement("div",{className:je.a.preloader},r.a.createElement("img",{className:je.a.img,src:"http://www.vintage-hostel.com/wp-content/uploads/2017/01/loading5.gif"})):r.a.createElement("div",null,r.a.createElement(W,{className:je.a.button,onClick:function(){t(Ne(!0)),window.setInterval((function(){t(Ne(!1))}),4e3)}},"set loading...")),r.a.createElement("hr",null),r.a.createElement("hr",null))};var Se=function(){return r.a.createElement("div",null,r.a.createElement(me,null),r.a.createElement(ge,null),r.a.createElement(_e,null),r.a.createElement(we,null))};var xe=function(){return r.a.createElement("div",null,"JuniorPlus")},Ae="/PreJunior",Me="/Junior",Ie="/JuniorPlus";var Fe=function(){return r.a.createElement("div",null,r.a.createElement(le.d,null,r.a.createElement(le.b,{path:"/",element:r.a.createElement(le.a,{to:Ae})}),r.a.createElement(le.b,{path:Ae,element:r.a.createElement(ne,null)}),r.a.createElement(le.b,{path:Me,element:r.a.createElement(Se,null)}),r.a.createElement(le.b,{path:Ie,element:r.a.createElement(xe,null)}),"// add routes",r.a.createElement(le.b,{path:"/*",element:r.a.createElement(re,null)})))};var Je=function(){return r.a.createElement("div",null,r.a.createElement(s.a,null,r.a.createElement(m,null),r.a.createElement(Fe,null)))};var Te=function(){return r.a.createElement("div",{className:u.a.App,style:{margin:"10px"}},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(Je,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Be=a(22),Pe=Object(Be.a)({isLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Oe,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING":return Object(ke.a)(Object(ke.a)({},e),{},{isLoading:t.isLoading});default:return e}}}),He=Object(Be.b)(Pe),Ue=He;window.store=He,c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ce.a,{store:Ue},r.a.createElement(Te,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[30,1,2]]]);
//# sourceMappingURL=main.92031c97.chunk.js.map