(this["webpackJsonpsimple-react-homeworks"]=this["webpackJsonpsimple-react-homeworks"]||[]).push([[0],{19:function(e,t,a){e.exports={message:"Message_message__sRu4M",photo:"Message_photo__23hp4",content:"Message_content__2x1ba",time:"Message_time__2TvEA",name:"Message_name__1obba"}},20:function(e,t,a){},27:function(e,t,a){e.exports={main:"Affairs_main__1fk-J",name:"Affairs_name__Q_dNZ",priority:"Affairs_priority__3uZzh"}},28:function(e,t,a){e.exports={superInput:"SuperInputText_superInput__1Bi2t",errorInput:"SuperInputText_errorInput__2S2zw",error:"SuperInputText_error__2IFFT"}},29:function(e,t,a){e.exports={preloader:"hw10_preloader__SJoRH",button:"hw10_button__3JV31",img:"hw10_img__3OUAM"}},30:function(e,t,a){e.exports={grey:"HW12_grey__BN5sW","dark-text":"HW12_dark-text__2w6yK",red:"HW12_red__3BY7T","red-text":"HW12_red-text__EfnYo",some:"HW12_some__1SH6l","some-text":"HW12_some-text__2CZ0K",yellow:"HW12_yellow__3jh3-",lightBlue:"HW12_lightBlue__yH8QH",radio:"HW12_radio__3Mvqr"}},34:function(e,t,a){e.exports={blue:"HW4_blue__3U_Rs",column:"HW4_column__QA1tK",testSpanError:"HW4_testSpanError__kR9dd"}},35:function(e,t,a){e.exports={default:"SuperButton_default__32aR4",red:"SuperButton_red__3wtRU"}},36:function(e,t,a){e.exports={checkbox:"SuperCheckbox_checkbox__2dvbq",spanClassName:"SuperCheckbox_spanClassName__2LoKx"}},4:function(e,t,a){e.exports={App:"styles_App__MosbA",timer:"styles_timer__3xyqB",date:"styles_date__oW6aa",button:"styles_button__2G9dc",start:"styles_start__1d3dS",stop:"styles_stop__U2xSn",buttonContainer:"styles_buttonContainer__g6hPE",clock:"styles_clock__1Zqad",hour_hand:"styles_hour_hand__1Inb5",min_hand:"styles_min_hand__3JoRE",sec_hand:"styles_sec_hand__2esZe",twelve:"styles_twelve__EZuM6",one:"styles_one__1dSAp",eleven:"styles_eleven__7Jz8F",two:"styles_two__1A5PE",three:"styles_three__2x91n",four:"styles_four__1a-kg",five:"styles_five__FYcOp",six:"styles_six__157vO",seven:"styles_seven__3w1HS",eight:"styles_eight__3fKV0",nine:"styles_nine__Mxh3w",ten:"styles_ten__pwOSp",hw9:"styles_hw9__D4wd6",analogButtonContainer:"styles_analogButtonContainer__NGNkg"}},49:function(e,t,a){e.exports={App:"App_App__c46DS",hwheader:"App_hwheader__33gbO"}},50:function(e,t,a){e.exports={someClass:"Greeting_someClass__1TrDC",error:"Greeting_error__1YGdS"}},51:function(e,t,a){e.exports={editableSpan:"SuperEditableSpan_editableSpan__2v2Lc"}},54:function(e,t,a){e.exports={range:"SuperRange_range__1HwKD"}},62:function(e,t,a){e.exports=a(98)},67:function(e,t,a){},68:function(e,t,a){},9:function(e,t,a){e.exports={container:"style_container__1Xbnq",button:"style_button__2jjfJ",requestData:"style_requestData__yMOen",requestBlock:"style_requestBlock__W-rbP",inputText:"style_inputText__1CCYw",checkBox:"style_checkBox__OR0fa"}},98:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(16),c=a.n(l),o=(a(67),a(49)),s=a.n(o),u=a(2),i=a(14);a(68);var m=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],l=t[1];return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:"slideMenu",onClick:function(){l(!a)}},r.a.createElement("div",null)),r.a.createElement("div",{className:a?"navBar active":"navBar"},r.a.createElement("div",null,r.a.createElement(i.b,{className:function(e){return e.isActive?"active":"navBarItem"},to:"/PreJunior"},"PreJunior")),r.a.createElement("div",null,r.a.createElement(i.b,{className:function(e){return e.isActive?"active":"navBarItem"},to:"/Junior"},"Junior")),r.a.createElement("div",null,r.a.createElement(i.b,{className:function(e){return e.isActive?"active":"navBarItem"},to:"/JuniorPlus"},"JuniorPlus"))))},d=a(19),E=a.n(d);var _=function(e){return r.a.createElement("div",{className:E.a.message},r.a.createElement("div",{className:E.a.photo},r.a.createElement("img",{src:e.avatar})),r.a.createElement("div",{className:E.a.content},r.a.createElement("div",{className:E.a.name},e.name),r.a.createElement("div",null,e.message),r.a.createElement("div",{className:E.a.time},e.time)))},p="https://sun9-74.userapi.com/Ph-WiuOtF985il9AvN9JqiCWedmHtSGSSTXrSA/ltEB2Z2-YO4.jpg",h="Andrei",v="npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b?",f="20:00";var g=function(){return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 1",r.a.createElement(_,{avatar:p,name:h,message:v,time:f}),r.a.createElement("hr",null),r.a.createElement("hr",null))},b=a(27),y=a.n(b);var C=function(e){return r.a.createElement("div",{className:y.a.main},r.a.createElement("div",{className:y.a.name},e.affair.name),r.a.createElement("div",{className:y.a.priority},e.affair.priority),r.a.createElement("button",{onClick:function(){return t=e.affair._id,void e.deleteAffairCallback(t);var t}},"X"))};var N=function(e){var t=e.data.map((function(t){return r.a.createElement(C,{key:t._id,affair:t,deleteAffairCallback:e.deleteAffairCallback})}));return r.a.createElement("div",null,t,r.a.createElement("button",{onClick:function(){return t="all",void e.setFilter(t);var t}},"All"),r.a.createElement("button",{onClick:function(){return t="high",void e.setFilter(t);var t}},"High"),r.a.createElement("button",{onClick:function(){return t="middle",void e.setFilter(t);var t}},"Middle"),r.a.createElement("button",{onClick:function(){return t="low",void e.setFilter(t);var t}},"Low"))},k=[{_id:1,name:"React",priority:"high"},{_id:2,name:"anime",priority:"low"},{_id:3,name:"games",priority:"low"},{_id:4,name:"work",priority:"high"},{_id:5,name:"html & css",priority:"middle"}];var O=function(){var e=Object(n.useState)(k),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)("all"),o=Object(u.a)(c,2),s=o[0],i=o[1],m=function(e,t){return"all"===t?e:"low"===t?e.filter((function(e){return"low"===e.priority})):"high"===t?e.filter((function(e){return"high"===e.priority})):"middle"===t?e.filter((function(e){return"middle"===e.priority})):e}(a,s);return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 2",r.a.createElement(N,{data:m,setFilter:i,deleteAffairCallback:function(e){return l(function(e,t){return e.filter((function(e){return e._id!==t}))}(a,e))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},w=a(12),j=a(50),x=a.n(j),S=function(e){var t=e.name,a=e.setNameCallback,n=e.addUser,l=e.error,c=e.totalUsers,o=l?x.a.error:"";return r.a.createElement("div",null,r.a.createElement("input",{value:t,onChange:a,className:o,onKeyPress:function(e){"Enter"===e.key&&n()}}),r.a.createElement("button",{onClick:n},"add"),r.a.createElement("span",{className:"counter"},c),r.a.createElement("div",null,l))},A=function(e){var t=e.users,a=e.addUserCallback,l=Object(n.useState)(""),c=Object(u.a)(l,2),o=c[0],s=c[1],i=Object(n.useState)(""),m=Object(u.a)(i,2),d=m[0],E=m[1],_=t.length;return r.a.createElement(S,{name:o,setNameCallback:function(e){s(e.currentTarget.value)},addUser:function(){o?(a(o),alert("Hello ".concat(o,"!")),E(""),s("")):(alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0435 \u0438\u043c\u044f"),E("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0441\u0432\u043e\u0435 \u0438\u043c\u044f"))},error:d,totalUsers:_})},B=a(111);var H=function(){var e=Object(n.useState)([]),t=Object(u.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 3",r.a.createElement(A,{users:a,addUserCallback:function(e){l([{name:e,_id:Object(B.a)()}].concat(Object(w.a)(a)))}}),r.a.createElement("hr",null),r.a.createElement("hr",null))},T=a(7),I=a(28),M=a.n(I),F=["type","onChange","onChangeText","onKeyPress","onEnter","error","className","spanClassName"],J=function(e){e.type;var t=e.onChange,a=e.onChangeText,n=(e.onKeyPress,e.onEnter,e.error),l=e.className,c=e.spanClassName,o=Object(T.a)(e,F),s="".concat(M.a.error," ").concat(c||""),u=n?"".concat(M.a.errorInput," ").concat(l):"".concat(M.a.superInput);return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"text",onChange:function(e){t&&t(e),a&&a(e.currentTarget.value)},className:u},o)),n&&r.a.createElement("span",{className:s},n))},W=a(34),D=a.n(W),R=a(35),P=a.n(R),L=["red","className"],U=function(e){var t=e.red,a=e.className,n=Object(T.a)(e,L),l="".concat(t?P.a.red:P.a.default," ").concat(a);return r.a.createElement("button",Object.assign({className:l},n))},q=a(36),G=a.n(q),Z=["type","onChange","onChangeChecked","className","spanClassName","children"],K=function(e){e.type;var t=e.onChange,a=e.onChangeChecked,n=e.className,l=(e.spanClassName,e.children),c=Object(T.a)(e,Z),o="".concat(G.a.checkbox," ").concat(n||"");return r.a.createElement("label",null,r.a.createElement("input",Object.assign({type:"checkbox",onChange:function(e){a&&a(e.currentTarget.checked),t&&t(e)},className:o},c)),l&&r.a.createElement("span",{className:G.a.spanClassName},l))};var Y=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],l=t[1],c=a?"":"error",o=function(){c?alert("\u0432\u0432\u0435\u0434\u0438\u0442\u0435 \u0442\u0435\u043a\u0441\u0442..."):alert(a)},s=Object(n.useState)(!1),i=Object(u.a)(s,2),m=i[0],d=i[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 4",r.a.createElement("div",{className:D.a.column},r.a.createElement(J,{value:a,onChangeText:l,onEnter:o,error:c}),r.a.createElement(J,{className:D.a.blue}),r.a.createElement(U,null,"default"),r.a.createElement(U,{red:!0,onClick:o},"delete "),r.a.createElement(U,{disabled:!0},"disabled"),r.a.createElement(K,{checked:m,onChangeChecked:d},"some text "),r.a.createElement(K,{checked:m,onChange:function(e){return d(e.currentTarget.checked)}})),r.a.createElement("hr",null),r.a.createElement("hr",null))},z=a(51),Q=a.n(z),X=["autoFocus","onBlur","onEnter","spanProps"],V=["children","onDoubleClick","className"],$=function(e){e.autoFocus;var t=e.onBlur,a=e.onEnter,l=e.spanProps,c=Object(T.a)(e,X),o=Object(n.useState)(!1),s=Object(u.a)(o,2),i=s[0],m=s[1],d=l||{},E=d.children,_=d.onDoubleClick,p=d.className,h=Object(T.a)(d,V),v="".concat(Q.a.editableSpan," ").concat(p);return r.a.createElement(r.a.Fragment,null,i?r.a.createElement(J,Object.assign({autoFocus:!0,onBlur:function(e){m(!1),t&&t(e)},onEnter:function(){m(!1),a&&a()}},c)):r.a.createElement("span",Object.assign({onDoubleClick:function(e){m(!0),_&&_(e)},className:v},h),E||c.value))};function ee(e,t){var a=JSON.stringify(t);localStorage.setItem(e,a)}function te(e,t){var a=t,n=localStorage.getItem(e);return null!==n&&(a=JSON.parse(n)),a}ee("test",{x:"A",y:1});te("test",{x:"",y:0});var ae=function(){var e=Object(n.useState)(""),t=Object(u.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 6",r.a.createElement("div",null,r.a.createElement("span",{className:"s.pencil"},r.a.createElement("img",{src:"https://cdn-icons-png.flaticon.com/512/124/124738.png"})),r.a.createElement($,{value:a,onChangeText:l,spanProps:{children:a?void 0:"enter text..."}})),r.a.createElement(U,{onClick:function(){ee("editable-span-value",a)}},"save"),r.a.createElement(U,{onClick:function(){l(te("editable-span-value",a))}},"restore"),r.a.createElement("hr",null),r.a.createElement("hr",null))};var ne=function(){return r.a.createElement("div",null,r.a.createElement(g,null),r.a.createElement(O,null),r.a.createElement(H,null),r.a.createElement(Y,null),r.a.createElement(ae,null))};var re=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"notfound"},"404"),r.a.createElement("div",null,"Page not found!"))},le=a(3),ce=["options","onChange","onChangeOption"],oe=function(e){var t=e.options,a=(e.onChange,e.onChangeOption),n=Object(T.a)(e,ce),l=t?t.map((function(e,t){return r.a.createElement("option",{value:e,key:t},e)})):[];return r.a.createElement("select",Object.assign({onChange:function(e){a&&a(e.currentTarget.value)}},n),l)},se=["type","name","options","value","onChange","onChangeOption"],ue=function(e){e.type;var t=e.name,a=e.options,n=e.value,l=(e.onChange,e.onChangeOption),c=(Object(T.a)(e,se),function(e){l&&l(e.currentTarget.value)}),o=a?a.map((function(e,a){return r.a.createElement("label",{key:t+"-"+a},r.a.createElement("input",{type:"radio",onChange:c,value:e,checked:n===e,name:t}),e)})):[];return r.a.createElement(r.a.Fragment,null,o)},ie=["x","y","z"];var me=function(){var e=Object(n.useState)(ie[0]),t=Object(u.a)(e,2),a=t[0],l=t[1];return r.a.createElement("div",{style:{margin:"10px"}},r.a.createElement("hr",null),"homeworks 7",r.a.createElement("div",null,r.a.createElement(oe,{style:{width:"50px",height:"20px",backgroundColor:"lightskyblue",margin:"5px",borderRadius:"2px",border:"1px solid blue",color:"darkgreenred"},options:ie,value:a,onChangeOption:l})),r.a.createElement("div",null,r.a.createElement(ue,{name:"radio",options:ie,value:a,onChangeOption:l})),r.a.createElement("hr",null),r.a.createElement("hr",null))},de=function(e,t){switch(t.type){case"sort":return"up"===t.payload?Object(w.a)(e.sort((function(e,t){return e.name.toUpperCase()<=t.name.toUpperCase()?-1:1}))):"down"===t.payload?Object(w.a)(e.sort((function(e,t){return t.name.toUpperCase()<=e.name.toUpperCase()?-1:1}))):e;case"check":return Object(w.a)(e.filter((function(e){return e.age>t.payload})));default:return e}},Ee=a(20),_e=a.n(Ee),pe=[{_id:0,name:"\u041a\u043e\u0442",age:3},{_id:1,name:"\u0410\u043b\u0435\u043a\u0441\u0430\u043d\u0434\u0440",age:66},{_id:2,name:"\u041a\u043e\u043b\u044f",age:16},{_id:3,name:"\u0412\u0438\u043a\u0442\u043e\u0440",age:44},{_id:4,name:"\u0414\u043c\u0438\u0442\u0440\u0438\u0439",age:40},{_id:5,name:"\u0418\u0440\u0438\u043d\u0430",age:55}];var he=function(){var e=Object(n.useState)(pe),t=Object(u.a)(e,2),a=t[0],l=t[1],c=a.map((function(e){return r.a.createElement("div",{key:e._id},r.a.createElement("table",{className:_e.a.table},r.a.createElement("tr",{className:_e.a.tr},r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.age))))}));return r.a.createElement("div",null,"homeworks 8",c,r.a.createElement("div",null,r.a.createElement(U,{className:_e.a.button,onClick:function(){return l(de(pe,{type:"sort",payload:"up"}))}},"sort up"),r.a.createElement(U,{className:_e.a.button,onClick:function(){return l(de(pe,{type:"sort",payload:"down"}))}},"sort down"),r.a.createElement(U,{className:_e.a.button,onClick:function(){return l(de(pe,{type:"check",payload:18}))}},"check 18")),r.a.createElement("hr",null))},ve=a(4),fe=a.n(ve);var ge=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(new Date),o=Object(u.a)(c,2),s=o[0],i=o[1],m=Object(n.useState)(!1),d=Object(u.a)(m,2),E=d[0],_=d[1],p=function(){clearInterval(a)},h=function(e){return e<10?"0"+e:e},v=h(s.getHours())+":"+h(s.getMinutes())+":"+h(s.getSeconds()),f=h(s.getDate())+"."+h(s.getMonth()+1)+"."+s.getFullYear();return r.a.createElement("div",null,r.a.createElement("div",{className:fe.a.timer,onMouseEnter:function(){_(!0)},onMouseLeave:function(){_(!1)}},v),E&&r.a.createElement("div",{className:fe.a.date},f),r.a.createElement("div",{className:fe.a.buttonContainer},r.a.createElement(U,{className:"".concat(fe.a.button," ").concat(fe.a.start),onClick:function(){p();var e=window.setInterval((function(){i(new Date)}),1e3);l(e)}},"start"),r.a.createElement(U,{className:"".concat(fe.a.button," ").concat(fe.a.stop),onClick:p},"stop")))},be=function(e){var t=Object(n.useState)(new Date),a=Object(u.a)(t,2),l=a[0],c=a[1],o=Object(n.useState)(0),s=Object(u.a)(o,2),i=s[0],m=s[1],d=function(){clearInterval(i)};return r.a.createElement("div",{className:fe.a.clock},r.a.createElement("div",{className:fe.a.hour_hand,style:{transform:"rotateZ(".concat(30*l.getHours(),"deg)")}}),r.a.createElement("div",{className:fe.a.min_hand,style:{transform:"rotateZ(".concat(6*l.getMinutes(),"deg)")}}),r.a.createElement("div",{className:fe.a.sec_hand,style:{transform:"rotateZ(".concat(6*l.getSeconds(),"deg)")}}),r.a.createElement("span",{className:fe.a.twelve},"12"),r.a.createElement("span",{className:fe.a.one},"1"),r.a.createElement("span",{className:fe.a.two},"2"),r.a.createElement("span",{className:fe.a.three},"3"),r.a.createElement("span",{className:fe.a.four},"4"),r.a.createElement("span",{className:fe.a.five},"5"),r.a.createElement("span",{className:fe.a.six}," 6"),r.a.createElement("span",{className:fe.a.seven},"7"),r.a.createElement("span",{className:fe.a.eight},"8"),r.a.createElement("span",{className:fe.a.nine},"9"),r.a.createElement("span",{className:fe.a.ten},"10"),r.a.createElement("span",{className:fe.a.eleven},"11"),r.a.createElement("div",{className:fe.a.analogButtonContainer},r.a.createElement(U,{className:"".concat(fe.a.button," ").concat(fe.a.start),onClick:function(){d();var e=window.setInterval((function(){c(new Date)}),1e3);m(e)}},"start"),r.a.createElement(U,{className:"".concat(fe.a.button," ").concat(fe.a.stop),onClick:d},"stop")))};var ye=function(){return r.a.createElement("div",{className:fe.a.hw9},r.a.createElement("hr",null),"homeworks 9",r.a.createElement(ge,null),r.a.createElement("hr",null),r.a.createElement("div",null,r.a.createElement(be,null)),r.a.createElement("hr",null))},Ce=a(11),Ne=a(18),ke={isLoading:!1},Oe=function(e){return{type:"LOADING",isLoading:e}},we=a(29),je=a.n(we);var xe=function(){var e=Object(Ce.c)((function(e){return e.isLoading.isLoading})),t=Object(Ce.b)();return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 10",e?r.a.createElement("div",{className:je.a.preloader},r.a.createElement("img",{alt:"pencil",className:je.a.img,src:"http://www.vintage-hostel.com/wp-content/uploads/2017/01/loading5.gif"})):r.a.createElement("div",null,r.a.createElement(U,{className:je.a.button,onClick:function(){t(Oe(!0)),window.setInterval((function(){t(Oe(!1))}),2e3)}},"set loading...")),r.a.createElement("hr",null),r.a.createElement("hr",null))},Se=a(54),Ae=a.n(Se),Be=["type","onChange","onChangeRange","className"],He=function(e){e.type;var t=e.onChange,a=e.onChangeRange,n=e.className,l=Object(T.a)(e,Be),c="".concat(Ae.a.range," ").concat(n||"");return r.a.createElement(r.a.Fragment,null,r.a.createElement("input",Object.assign({type:"range",onChange:function(e){t&&t(e),a&&a(+e.currentTarget.value)},className:c},l)))},Te=a(110),Ie=function(e){var t=e.onChangeRange,a=e.value;return r.a.createElement(r.a.Fragment,null,r.a.createElement(Te.a,{value:a,"aria-labelledby":"range-slider",style:{width:"200px"},onChange:function(e,a){t&&t(a)},valueLabelDisplay:"auto"}))};var Me=function(){var e=Object(n.useState)(0),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(100),o=Object(u.a)(c,2),s=o[0],i=o[1],m=function(e){Array.isArray(e)?(l(e[0]),i(e[1])):l(e)};return r.a.createElement("div",null,r.a.createElement("hr",null),"homeworks 11",r.a.createElement("div",null,r.a.createElement("span",null,a),r.a.createElement(He,{value:a,onChangeRange:m})),r.a.createElement("div",null,r.a.createElement("span",null,a),r.a.createElement(Ie,{value:[a,s],onChangeRange:m}),r.a.createElement("span",null,s)),r.a.createElement("hr",null),r.a.createElement("hr",null))},Fe=a(30),Je=a.n(Fe),We={theme:"some"},De=["some","grey","red","yellow","lightBlue"];var Re=function(){var e=Object(Ce.c)((function(e){return e.themes.theme})),t=Object(Ce.b)();return r.a.createElement("div",{className:Je.a[e]},r.a.createElement("hr",null),r.a.createElement("div",{className:Je.a[e+"-text"]},"homeworks 12"),r.a.createElement("div",{className:Je.a.radio},r.a.createElement(ue,{value:e,options:De,onChangeOption:function(e){return t(function(e){return{type:"CHANGE_THEME",theme:e}}(e))}})),r.a.createElement("hr",null))};var Pe=function(){return r.a.createElement("div",null,r.a.createElement(me,null),r.a.createElement(he,null),r.a.createElement(ye,null),r.a.createElement(xe,null),r.a.createElement(Me,null),r.a.createElement(Re,null))},Le=a(9),Ue=a.n(Le),qe=a(59),Ge=a.n(qe).a.create({baseURL:"https://neko-cafe-back.herokuapp.com/"}),Ze=function(e){return Ge.post("auth/test",{success:e})},Ke=function(){var e=Object(n.useState)(!1),t=Object(u.a)(e,2),a=t[0],l=t[1],c=Object(n.useState)(""),o=Object(u.a)(c,2),s=o[0],i=o[1];return r.a.createElement("div",{className:Ue.a.container},r.a.createElement(U,{className:Ue.a.button,onClick:function(){Ze(a).then((function(e){i(e.data.info)})).catch((function(e){e.response?i(e.response.data.errorText):i(e.message)}))}},"Make Request"),r.a.createElement("div",{className:Ue.a.requestBlock},r.a.createElement(K,{className:Ue.a.checkBox,checked:a,onChange:function(e){l(e.currentTarget.checked)}}),r.a.createElement("div",{className:Ue.a.inputText},"Checked for success request")),r.a.createElement("h1",{className:Ue.a.requestData},s))};function Ye(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",{className:Ue.a.container},"Homework 13"),r.a.createElement(Ke,null))}var ze=function(){return r.a.createElement("div",null,r.a.createElement(Ye,null))},Qe="/PreJunior",Xe="/Junior",Ve="/JuniorPlus";var $e=function(){return r.a.createElement("div",null,r.a.createElement(le.d,null,r.a.createElement(le.b,{path:"/",element:r.a.createElement(le.a,{to:Qe})}),r.a.createElement(le.b,{path:Qe,element:r.a.createElement(ne,null)}),r.a.createElement(le.b,{path:Xe,element:r.a.createElement(Pe,null)}),r.a.createElement(le.b,{path:Ve,element:r.a.createElement(ze,null)}),"// add routes",r.a.createElement(le.b,{path:"/*",element:r.a.createElement(re,null)})))};var et=function(){return r.a.createElement("div",null,r.a.createElement(i.a,null,r.a.createElement(m,null),r.a.createElement($e,null)))};var tt=function(){return r.a.createElement("div",{className:s.a.App,style:{margin:"10px"}},r.a.createElement("div",null,"react homeworks:"),r.a.createElement(et,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var at=a(38),nt=Object(at.a)({isLoading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ke,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOADING":return Object(Ne.a)(Object(Ne.a)({},e),{},{isLoading:t.isLoading});default:return e}},themes:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_THEME":return Object(Ne.a)(Object(Ne.a)({},e),{},{theme:t.theme});default:return e}}}),rt=Object(at.b)(nt),lt=rt;window.store=rt,c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(Ce.a,{store:lt},r.a.createElement(tt,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[62,1,2]]]);
//# sourceMappingURL=main.d09cccb6.chunk.js.map