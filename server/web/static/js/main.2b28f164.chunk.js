(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{163:function(e,a,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},164:function(e,a,n){},237:function(e,a,n){e.exports=n(282)},282:function(e,a,n){"use strict";n.r(a);var t=n(0),r=n.n(t),l=n(21),i=n.n(l),c=n(11),o=n(15),m=(n(163),n(164),n(329)),u=n(337),d=n(335),s=n(13),b=n(16),p=n(29),g=n(319),f=n(323),E=n(322),v=n(318),O=n(320),j=n(321),y=n(218),h=n(284),$=n(333),x=n(334),S=n(325),C=n(156),P=n.n(C),w=n(316),N=n(317);n(315);Object(w.a)((function(e){return{footer:{backgroundColor:e.palette.background.paper,padding:e.spacing(6,0)}}}));var k=n(332),R=n(336),I=n(157),T=n(122),W=n(3),B=Object(w.a)((function(e){return{margin:{margin:e.spacing(1)},table:{minWidth:450},title:{flexGrow:1},menuButton:{marginRight:e.spacing(2)}}}));function D(e){var a=B();return r.a.createElement(v.a,{component:y.a},r.a.createElement(g.a,{className:a.table,"aria-label":"simple table",size:"small"},r.a.createElement(O.a,null,r.a.createElement(j.a,null,r.a.createElement(E.a,null,"ID"),r.a.createElement(E.a,{align:"right"},"\u73a9\u5bb6"),r.a.createElement(E.a,{align:"right"},"\u89d2\u8272"),r.a.createElement(E.a,{align:"right"},"\u4e0a\u7dda"))),r.a.createElement(f.a,null,e.data.map((function(e){return r.a.createElement(j.a,{key:e.id},r.a.createElement(E.a,{component:"th",scope:"row"},e.id),r.a.createElement(E.a,{align:"right"},e.name),r.a.createElement(E.a,{align:"right"},e.roleName),r.a.createElement(E.a,{align:"right"},r.a.createElement("span",{style:{color:e.isEmpty?"gray":"lightgreen",transition:"all .3s ease",fontSize:"24px",marginRight:"10px"}},"\u25cf")))})))))}function G(){var e=Object(o.a)(["\n  {\n    roles {\n      id\n      name\n      number\n    }\n    players {\n      id\n      name\n      roleName\n      isEmpty\n    }\n  }\n"]);return G=function(){return e},e}Object(s.b)(G());var z=Object(w.a)((function(e){return{margin:{margin:e.spacing(1)},table:{minWidth:450},title:{flexGrow:1},menuButton:{marginRight:e.spacing(2)}}}));function L(e){var a=z(),n=function(e){var a=0,n=[];return e.forEach((function(e){var t=e.number;t&&(a+=t,n.push(e))})),{total:a,data:n}}(e.data),t=n.total,l=n.data;return r.a.createElement(v.a,{component:y.a},r.a.createElement(g.a,{className:a.table,"aria-label":"simple table",size:"small"},r.a.createElement(O.a,null,r.a.createElement(j.a,null,r.a.createElement(E.a,null,"\u89d2\u8272"),r.a.createElement(E.a,{align:"right"},"\u4eba\u6578"))),r.a.createElement(f.a,null,l.map((function(e){return r.a.createElement(r.a.Fragment,{key:e.name},r.a.createElement(j.a,{key:e.name},r.a.createElement(E.a,{component:"th",scope:"row"},e.name),r.a.createElement(E.a,{align:"right"},e.number)),e.players?r.a.createElement(j.a,{align:"left"},e.players.map((function(e,a){return r.a.createElement("div",{style:{fontSize:22,marginLeft:45},key:a},"".concat(e.id," : ").concat(e.name))}))):null)})),r.a.createElement(j.a,null,r.a.createElement(E.a,{align:"right"},"\u7e3d\u4eba\u6578"),r.a.createElement(E.a,{align:"right"},t)))))}function U(e){var a=e.variables,n=e.query,t=e.pollInterval,l=Object(b.b)(n,{fetchPolicy:"network-only",variables:a}),i=l.loading,c=(l.error,l.data),o=l.startPolling,m=l.stopPolling;if(r.a.useEffect((function(){return o(t),m}),[]),i)return r.a.createElement("div",null,"Loading");var u=e.parseData(c);return console.log(u,a,n,c),r.a.createElement(L,{data:u})}var q=n(338),F=n(328),V=n(12),A=n(326),M=n(50),J=n.n(M),Y=n(214),H=n.n(Y),K=n(213),Q=n.n(K),X=n(52),Z=n.n(X);function _(){var e=Object(o.a)(["\n  {\n    roles {\n      id\n      name\n      \n    }\n    \n  }\n"]);return _=function(){return e},e}var ee=Object(s.b)(_()),ae=Object(w.a)((function(e){return{margin:{margin:e.spacing(1)},table:{minWidth:250},title:{flexGrow:1},menuButton:{marginRight:e.spacing(2)}}}));function ne(e){var a,n=ae(),t=r.a.useState(-1),l=Object(c.a)(t,2),i=l[0],o=l[1],m=r.a.useState(0),s=Object(c.a)(m,2),p=s[0],g=s[1],f=Object(b.b)(ee),E=f.loading,v=(f.error,f.data);return E?r.a.createElement("div",null,"Loading"):(console.log(v),r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(u.a,{id:"combo-box-demo",options:v.roles.filter((function(e){return e.id>0})),getOptionLabel:function(e){return e.name},style:{width:300},onChange:function(e,a){o(a.id)},renderInput:function(e){return r.a.createElement(d.a,Object.assign({},e,{label:"\u89d2\u8272",variant:"outlined",margin:"dense"}))}}),r.a.createElement(d.a,{id:"standard-basic",label:"\u4eba\u6578",variant:"outlined",className:n.margin,margin:"dense",type:"number",value:p,onChange:function(e){return g(e.target.value)}}),r.a.createElement("div",{style:{marginTop:5}},r.a.createElement(A.a,(a={size:"medium",color:"secondary","aria-label":"add"},Object(V.a)(a,"size","small"),Object(V.a)(a,"onClick",(function(){e.updateRoleNumber({id:i,number:parseInt(p)})})),a),r.a.createElement(Z.a,null)))))}var te=n(25),re=n(340),le=n(341),ie="card",ce={border:"1px dashed gray",padding:"0.5rem 1rem",marginBottom:".5rem",backgroundColor:"white",cursor:"move"},oe=function(e){var a=e.id,n=e.text,l=e.index,i=e.moveCard,o=Object(t.useRef)(null),m=Object(re.a)({accept:ie,hover:function(e,a){if(o.current){var n=e.index,t=l;if(n!==t){var r=o.current.getBoundingClientRect(),c=(r.bottom-r.top)/2,m=a.getClientOffset().y-r.top;n<t&&m<c||n>t&&m>c||(i(n,t),e.index=t)}}}}),u=Object(c.a)(m,2)[1],d=Object(le.a)({item:{type:ie,id:a,index:l},collect:function(e){return{isDragging:e.isDragging()}}}),s=Object(c.a)(d,2),b=s[0].isDragging?0:1;return(0,s[1])(u(o)),r.a.createElement("div",{ref:o,style:Object(T.a)({},ce,{opacity:b})},n)},me=n(212),ue=n.n(me),de={width:400},se=function(e){var a=Object(t.useState)(Object(te.a)(e.data)),n=Object(c.a)(a,2),l=n[0],i=n[1],o=Object(t.useCallback)((function(a,n){var t=l[a],r=ue()(l,{$splice:[[a,1],[n,0,t]]});i(r),e.onUpdate(r)}),[l]);return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{style:de},l.map((function(e,a){return function(e,a){return r.a.createElement(oe,{key:e.id,index:a,id:e.id,text:e.text,moveCard:o})}(e,a)}))))},be=n(327),pe=n(217);function ge(){var e=Object(o.a)(["\n  mutation UpdateRolePriority($name: String!, $ids: [Int]!) {\n    updateTemplateRolePriority(name: $name, ids: $ids)\n  }\n"]);return ge=function(){return e},e}function fe(){var e=Object(o.a)(["\n  mutation UpdateRule($name: String!, $description: String!) {\n    updateTemplateDescription(name: $name, description: $description)\n  }\n"]);return fe=function(){return e},e}function Ee(){var e=Object(o.a)(["\n  mutation UpdateTempl($roleId: Int!, $number: Int!, $name: String!) {\n    updateTemplateRole(name: $name, number: $number, roleId: $roleId)\n  }\n"]);return Ee=function(){return e},e}function ve(){var e=Object(o.a)(["\n  query GetTemplate($name: String!) {\n    template(name: $name) {\n      roles {\n        name\n        number\n        id\n      }\n      description\n    }\n  }\n"]);return ve=function(){return e},e}var Oe=Object(s.b)(ve()),je=Object(s.b)(Ee()),ye=Object(s.b)(fe()),he=Object(s.b)(ge());function $e(e){var a=e.children,n=e.value,t=e.index,l=Object(W.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:n!==t,id:"full-width-tabpanel-".concat(t),"aria-labelledby":"full-width-tab-".concat(t)},l),n===t&&r.a.createElement(R.a,{p:3},a))}var xe=function(e){var a=[];return e.forEach((function(e){var n=e.name,t=e.id;a.push({id:t,text:n})})),a};function Se(e){var a=e.name,n=r.a.useState([]),t=Object(c.a)(n,2),l=t[0],i=t[1],o=r.a.useState([]),m=Object(c.a)(o,2),u=m[0],d=m[1],s=r.a.useState(!1),p=Object(c.a)(s,2),g=(p[0],p[1],Object(b.b)(Oe,{fetchPolicy:"network-only",notifyOnNetworkStatusChange:!0,variables:{name:a},onCompleted:function(e){console.log("complete",e);var a=xe(e.template.roles);i(a.map((function(e){return e.id}))),d(a.map((function(e){return e.id})))}})),f=g.loading,E=(g.error,g.data),v=g.refetch,O=Object(b.a)(he,{onCompleted:function(){v()}}),j=Object(c.a)(O,2),y=j[0],h=j[1];if(f||h.loading)return r.a.createElement("div",null,"Loading");console.log(E,u,l);var $=xe(E.template.roles);return r.a.createElement(be.a,{backend:pe.a},r.a.createElement(S.a,{"aria-label":"delete",onClick:function(){y({variables:{name:a,ids:l}})},color:u.toString()===l.toString()?"primary":"secondary"},r.a.createElement(Z.a,null)),r.a.createElement(se,{data:$,onUpdate:function(e){console.log("update view"),i(e.map((function(e){return e.id})))}}))}function Ce(e){var a=e.name,n=Object(b.a)(je),t=Object(c.a)(n,1)[0];return r.a.useEffect((function(){return console.log("mount"+a),function(){console.log("umount"+a)}}),[]),r.a.createElement("div",null,r.a.createElement(h.a,{variant:"h2",gutterBottom:!0},a),r.a.createElement(ne,{updateRoleNumber:function(e){var n=e.id,r=e.number;console.log(n,a),t({variables:{roleId:n,name:a,number:r}})}}),r.a.createElement(U,{query:Oe,variables:{name:a},parseData:function(e){return console.log(e),e.template.roles},pollInterval:500}))}function Pe(e){var a=r.a.useState(e.value),n=Object(c.a)(a,2),t=n[0],l=n[1];return r.a.createElement("div",null,r.a.createElement(S.a,{"aria-label":"delete",onClick:function(){e.updateRule({variables:{description:t,name:e.name}})},color:t===e.value?"primary":"secondary"},r.a.createElement(Z.a,null)),r.a.createElement(d.a,{id:"outlined-multiline-static",multiline:!0,rows:4,fullWidth:!0,value:t,variant:"outlined",onChange:function(e){return l(e.target.value)}}))}function we(e){var a=e.name,n=Object(b.b)(Oe,{variables:{name:a}}),t=n.loading,l=(n.error,n.data),i=n.refetch,o=Object(b.a)(ye,{onCompleted:function(){i()}}),m=Object(c.a)(o,2),u=m[0];m[1];return t?r.a.createElement("div",null,"Loading"):r.a.createElement(Pe,{value:l.template.description,updateRule:u,name:a})}function Ne(e){var a=e.name,n=r.a.useState(0),t=Object(c.a)(n,2),l=t[0],i=t[1];return console.log(a),r.a.createElement(y.a,{square:!0},r.a.createElement(q.a,{value:l,indicatorColor:"primary",textColor:"primary",onChange:function(e,a){i(a)},"aria-label":"disabled tabs example"},r.a.createElement(F.a,{label:"\u89d2\u8272"}),r.a.createElement(F.a,{label:"\u898f\u5247"}),r.a.createElement(F.a,{label:"\u9ed1\u591c\u9806\u5e8f"})),r.a.createElement($e,{value:l,index:0},r.a.createElement(Ce,{name:a})),r.a.createElement($e,{value:l,index:1},r.a.createElement(we,{name:a})),r.a.createElement($e,{value:l,index:2},r.a.createElement(Se,{name:a})))}var ke=n(339);function Re(){var e=Object(o.a)(["\n  mutation EnableTemplate($name: String!) {\n    enableTemplate(name: $name)\n  }\n"]);return Re=function(){return e},e}function Ie(){var e=Object(o.a)(["\n  mutation DeleteTemplate($name: String!) {\n    deleteTemplate(name: $name)\n  }\n"]);return Ie=function(){return e},e}function Te(){var e=Object(o.a)(["\n  mutation addTemplate($name: String!) {\n    addNewTemplate(name: $name)\n  }\n"]);return Te=function(){return e},e}function We(){var e=Object(o.a)(["\n  {\n    templates {\n      isEnabled\n      name\n    }\n  }\n"]);return We=function(){return e},e}var Be=Object(w.a)((function(e){return{margin:{margin:e.spacing(1)},table:{minWidth:250},title:{flexGrow:1},menuButton:{marginRight:e.spacing(2)}}})),De=Object(s.b)(We()),Ge=Object(s.b)(Te()),ze=Object(s.b)(Ie()),Le=Object(s.b)(Re());function Ue(e){var a=Be();return r.a.createElement(v.a,{component:y.a},r.a.createElement(g.a,{className:a.table,"aria-label":"simple table",size:"small"},r.a.createElement(O.a,null,r.a.createElement(j.a,null,r.a.createElement(E.a,null,"\u9078\u64c7"),r.a.createElement(E.a,{align:"left"},"\u904a\u6232\u6a21\u5f0f"),r.a.createElement(E.a,{align:"right"},r.a.createElement("div",{style:{marginRight:10}},"\u7de8\u8f2f")),r.a.createElement(E.a,{align:"right"},r.a.createElement("div",{style:{marginRight:10}},"\u522a\u9664")))),r.a.createElement(f.a,null,e.data.map((function(a){return r.a.createElement(j.a,{key:a.name},r.a.createElement(E.a,null,r.a.createElement(ke.a,{onChange:function(n){n.target.checked&&e.onSelect(a.name)},color:"primary",inputProps:{"aria-label":"secondary checkbox"},checked:a.isEnabled})),r.a.createElement(E.a,{align:"left"},a.name),r.a.createElement(E.a,{align:"right"},r.a.createElement(S.a,{"aria-label":"delete",onClick:function(){console.log(a.name),e.onEdit(a.name)}},r.a.createElement(Q.a,null))),r.a.createElement(E.a,{align:"right"},r.a.createElement(S.a,{"aria-label":"delete",onClick:function(){e.onDelete(a.name)},disabled:a.isEnabled},r.a.createElement(H.a,null))))})))))}function qe(e){var a,n=Be(),t=Object(b.a)(Ge),l=Object(c.a)(t,1)[0],i=Object(b.a)(ze),o=Object(c.a)(i,1)[0],m=r.a.useState(""),u=Object(c.a)(m,2),s=u[0],p=u[1],g=r.a.useState(!1),f=Object(c.a)(g,2),E=f[0],v=f[1],O=Object(b.b)(De,{}),j=O.loading,y=(O.error,O.data),h=O.stopPolling,$=O.startPolling,x=(O.called,Object(b.a)(Le,{onCompleted:function(){v(!0),$(500),setTimeout((function(){v(!1)}),2e3)}})),S=Object(c.a)(x,2),C=S[0],P=S[1];return r.a.useEffect((function(){return $(500),h}),[]),j||j||P.loading||E?r.a.createElement("div",null,"Loading"):r.a.createElement("div",null,r.a.createElement("div",{style:{display:"flex",justifyContent:"center"}},r.a.createElement(d.a,{id:"standard-basic",label:"\u6a21\u5f0f\u540d\u7a31",variant:"outlined",className:n.margin,margin:"dense",value:s,onChange:function(e){return p(e.target.value)}}),r.a.createElement("div",{style:{marginTop:5}},r.a.createElement(A.a,(a={size:"medium",color:"secondary","aria-label":"add"},Object(V.a)(a,"size","small"),Object(V.a)(a,"onClick",(function(){l({variables:{name:s}})})),a),r.a.createElement(J.a,null)))),r.a.createElement(N.a,{maxWidth:"sm"},r.a.createElement(Ue,{data:y.templates,onEdit:function(a){e.setEditName(a)},onSelect:function(e){C({variables:{name:e}}),h()},onDelete:function(e){o({variables:{name:e}})}})))}function Fe(){Be();var e=r.a.useState(""),a=Object(c.a)(e,2),n=(a[0],a[1],r.a.useState("")),t=Object(c.a)(n,2),l=t[0],i=t[1],o=Object(b.a)(Ge),u=(Object(c.a)(o,1)[0],Object(b.a)(ze)),d=(Object(c.a)(u,1)[0],r.a.useState(!1)),s=Object(c.a)(d,2);s[0],s[1];return l?r.a.createElement("div",null,r.a.createElement(R.a,{display:"flex"},r.a.createElement(m.a,{variant:"contained",color:"secondary",onClick:function(){i("")}},"\u9000\u51fa")),r.a.createElement(Ne,{name:l})):r.a.createElement(qe,{setEditName:function(e){i(e)}})}function Ve(){var e=Object(o.a)(["\n  {\n    enabledTemplate {\n      name\n      description\n      roles {\n        name\n        id\n        number\n      }\n    }\n  }\n"]);return Ve=function(){return e},e}var Ae=Object(s.b)(Ve());function Me(e){var a=Object(b.b)(Ae,{fetchPolicy:"network-only"}),n=a.loading,t=(a.error,a.data);if(n)return r.a.createElement("div",null,"Loading");var l=t.enabledTemplate,i=l.name,c=l.description,o=l.roles;return console.log(t.enabledTemplate),r.a.createElement("div",null,r.a.createElement(h.a,{variant:"h2",gutterBottom:!0},i),r.a.createElement(d.a,{id:"outlined-multiline-static",multiline:!0,rows:4,fullWidth:!0,value:c,variant:"outlined",label:"\u898f\u5247",disabled:!0}),r.a.createElement(L,{data:o}))}var Je=n(91);function Ye(){var e=Object(o.a)(["\n  mutation RemoveAllPlayer {\n    removeAllPlayer\n  }\n"]);return Ye=function(){return e},e}function He(){var e=Object(o.a)(["\n  mutation GenerateTemplatePlayer {\n    generateTemplatePlayer\n  }\n"]);return He=function(){return e},e}function Ke(){var e=Object(o.a)(["\n  mutation GenerateTemplateRole {\n    generateTemplateRole\n  }\n"]);return Ke=function(){return e},e}function Qe(){var e=Object(o.a)(["\n  mutation GenerateRole {\n    generateRole\n  }\n"]);return Qe=function(){return e},e}function Xe(){var e=Object(o.a)(["\n  mutation UpdatePlayerName($id: Int!, $name: String!) {\n    updatePlayerName(id: $id, name: $name)\n  }\n"]);return Xe=function(){return e},e}function Ze(){var e=Object(o.a)(["\n  mutation UpdatePlayerPass($id: Int!, $pass: String!) {\n    updatePlayerPass(id: $id, pass: $pass) {\n      isValid\n      name\n    }\n  }\n"]);return Ze=function(){return e},e}function _e(){var e=Object(o.a)(["\n  mutation UpdateRoleNumber($id: Int!, $number: Int!) {\n    updateRoleNumber(id: $id, number: $number)\n  }\n"]);return _e=function(){return e},e}function ea(){var e=Object(o.a)(["\n  query GetPlayer($id: Int!, $pass: String!) {\n    player(id: $id, pass: $pass) {\n      id\n      name\n      roleName\n    }\n    players {\n      id\n      name\n    }\n  }\n"]);return ea=function(){return e},e}function aa(){var e=Object(o.a)(["\n  query GetPlayer($id: Int!, $pass: String!) {\n    player(id: $id, pass: $pass) {\n      id\n      name\n    }\n  }\n"]);return aa=function(){return e},e}function na(){var e=Object(o.a)(["\n  {\n    enabledTemplate {\n      name\n      description\n      roles {\n        name\n        id\n        number\n      }\n    }\n    players {\n      id\n      name\n      roleName\n    }\n  }\n"]);return na=function(){return e},e}function ta(){var e=Object(o.a)(["\n  {\n    players {\n      id\n      name\n      roleName\n      isEmpty\n    }\n  }\n"]);return ta=function(){return e},e}function ra(){var e=Object(o.a)(["\n  {\n    players {\n      id\n      name\n      isEmpty\n    }\n  }\n"]);return ra=function(){return e},e}Object(s.b)(ra());var la=Object(s.b)(ta()),ia=Object(s.b)(na()),ca=(Object(s.b)(aa()),Object(s.b)(ea()),Object(s.b)(_e()),Object(s.b)(Ze()),Object(s.b)(Xe())),oa=(Object(s.b)(Qe()),Object(s.b)(Ke())),ma=Object(s.b)(He()),ua=Object(s.b)(Ye()),da=Object(w.a)((function(e){return{margin:{margin:e.spacing(1)},table:{minWidth:250},title:{flexGrow:1},menuButton:{marginRight:e.spacing(2)}}}));function sa(e){var a=e.children,n=e.value,t=e.index,l=Object(W.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:n!==t,id:"full-width-tabpanel-".concat(t),"aria-labelledby":"full-width-tab-".concat(t)},l),n===t&&r.a.createElement(R.a,{p:3},a))}function ba(e){return r.a.createElement(U,{query:ia,variables:{},parseData:function(e){var a={};e.players.forEach((function(e){var n=e.roleName,t=e.name,r=e.id;a[n]?a[n].push({name:t||"",id:r}):a[n]=[{name:t||"",id:r}]})),console.log(a);var n=[];return e.enabledTemplate.roles.forEach((function(e){console.log("r",e);var t=e.name;n.push(Object(T.a)({},e,{players:a[t]}))})),console.log(n),n},pollInterval:500})}function pa(e){da();var a=Object(b.a)(oa),n=Object(c.a)(a,1)[0],t=Object(b.a)(ma),l=Object(c.a)(t,1)[0],i=Object(b.a)(ua),o=Object(c.a)(i,1)[0],u=Object(Je.a)(e.name,500),s=Object(c.a)(u,2),p=s[0],g=s[1],f=r.a.useState(e.name||""),E=Object(c.a)(f,2),v=E[0],O=E[1],j=Object(b.a)(ca),y=Object(c.a)(j,2),h=y[0],$=y[1].called;return r.a.useEffect((function(){p&&(p!==e.name||$)&&h({variables:{id:0,name:p}})}),[p]),e.isPlayerMode?r.a.createElement("div",{style:{}},r.a.createElement(R.a,{display:"flex"},r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(){n()}},"\u7522\u751f\u89d2\u8272"),r.a.createElement(m.a,{variant:"contained",color:"secondary",onClick:function(){o()}},"\u522a\u9664\u73a9\u5bb6")),r.a.createElement(R.a,{display:"flex"},r.a.createElement(d.a,{id:"standard-basic",label:"\u59d3\u540d",variant:"outlined",margin:"dense",value:v,onChange:function(e){g(e.target.value),O(e.target.value)}})),r.a.createElement(D,{data:e.players})):r.a.createElement("div",{style:{}},r.a.createElement(R.a,{display:"flex"},r.a.createElement(m.a,{variant:"contained",color:"primary",onClick:function(){l()}},"\u52a0\u5165\u73a9\u5bb6")),r.a.createElement(Me,null))}function ga(e){var a=r.a.useState(0),n=Object(c.a)(a,2),t=n[0],l=n[1],i=Object(b.b)(la,{pollInterval:500}),o=i.loading,m=(i.error,i.data);if(o)return r.a.createElement("div",null,"Loading");var u=e.id,d=e.pass,s=e.name,p=m.players.length>1;return r.a.createElement(y.a,{elevation:3},r.a.createElement(q.a,{value:t,indicatorColor:"primary",textColor:"primary",onChange:function(e,a){l(a)},"aria-label":"disabled tabs example",variant:"fullWidth"},r.a.createElement(F.a,{label:"\u904a\u6232"}),r.a.createElement(F.a,{label:p?"\u9ed1\u591c\u8996\u91ce":"\u6a21\u5f0f\u9078\u64c7"}),p&&r.a.createElement(F.a,{label:"\u6a21\u5f0f"})),r.a.createElement(sa,{value:t,index:0},r.a.createElement(pa,{isPlayerMode:p,id:u,pass:d,name:s,players:m.players})),r.a.createElement(sa,{value:t,index:1},p?r.a.createElement(ba,null):r.a.createElement(Fe,null)),!p&&r.a.createElement(sa,{value:t,index:2},r.a.createElement(Me,null)))}var fa=n(330),Ea=n(331);function va(){var e=Object(o.a)(["\n  mutation UpdatePlayerName($id: Int!, $name: String!) {\n    updatePlayerName(id: $id, name: $name)\n  }\n"]);return va=function(){return e},e}function Oa(){var e=Object(o.a)(["\n  mutation UpdatePlayerPass($id: Int!, $pass: String!) {\n    updatePlayerPass(id: $id, pass: $pass) {\n      isValid\n      name\n    }\n  }\n"]);return Oa=function(){return e},e}function ja(){var e=Object(o.a)(["\n  mutation UpdateRoleNumber($id: Int!, $number: Int!) {\n    updateRoleNumber(id: $id, number: $number)\n  }\n"]);return ja=function(){return e},e}function ya(){var e=Object(o.a)(["\n  query GetPlayer($id: Int!, $pass: String!) {\n    player(id: $id, pass: $pass) {\n      id\n      name\n      roleName\n    }\n    players {\n      id\n      name\n      isEmpty\n    }\n  }\n"]);return ya=function(){return e},e}function ha(){var e=Object(o.a)(["\n  {\n   \n    players {\n      id\n      name\n      roleName\n      isEmpty\n    }\n  }\n"]);return ha=function(){return e},e}new s.a({uri:"/graphql"});var $a=Object(w.a)((function(e){return{margin:{},table:{minWidth:450},title:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},submit:{margin:e.spacing(3,0,2)},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)}}})),xa=(Object(s.b)(ha()),Object(s.b)(ya())),Sa=(Object(s.b)(ja()),Object(s.b)(Oa()),Object(s.b)(va()));function Ca(e){var a=e.children,n=e.value,t=e.index,l=Object(W.a)(e,["children","value","index"]);return r.a.createElement("div",Object.assign({role:"tabpanel",hidden:n!==t,id:"full-width-tabpanel-".concat(t),"aria-labelledby":"full-width-tab-".concat(t)},l),n===t&&r.a.createElement(R.a,{p:3},a))}function Pa(e){var a=$a();return r.a.createElement(v.a,{component:y.a},r.a.createElement(g.a,{className:a.table,"aria-label":"simple table",size:"small"},r.a.createElement(O.a,null,r.a.createElement(j.a,null,r.a.createElement(E.a,null,"ID"),r.a.createElement(E.a,{align:"right"},"\u73a9\u5bb6"),r.a.createElement(E.a,{align:"right"},"\u4e0a\u7dda"))),r.a.createElement(f.a,null,e.data.map((function(e){return r.a.createElement(j.a,{key:e.id},r.a.createElement(E.a,{component:"th",scope:"row"},e.id),r.a.createElement(E.a,{align:"right"},e.name),r.a.createElement(E.a,{align:"right"},r.a.createElement("span",{style:{color:e.isEmpty?"gray":"lightgreen",transition:"all .3s ease",fontSize:"24px",marginRight:"10px"}},"\u25cf")))})))))}function wa(e){var a=$a(),n=Object(b.b)(xa,{fetchPolicy:"network-only",variables:{id:e.id,pass:e.pass},pollInterval:500}),t=n.loading,l=(n.error,n.data);console.log(e);var i=Object(Je.a)(e.name,500),o=Object(c.a)(i,2),m=o[0],u=o[1],s=r.a.useState(e.name),p=Object(c.a)(s,2),g=p[0],f=p[1],E=Object(b.a)(Sa),v=Object(c.a)(E,2),O=v[0],j=v[1].called;if(r.a.useEffect((function(){m&&(m!==e.name||j)&&O({variables:{id:e.id,name:m}})}),[m]),t)return r.a.createElement("div",null,"Loading");var y=l.player,$=(y.id,y.name,y.roleName);return r.a.createElement(r.a.Fragment,null,r.a.createElement(R.a,{display:"flex"},r.a.createElement(d.a,{id:"standard-basic",label:"\u59d3\u540d",variant:"outlined",className:a.margin,margin:"dense",value:g,onChange:function(e){u(e.target.value),f(e.target.value)}})),r.a.createElement(fa.a,{className:a.root},r.a.createElement(Ea.a,null,r.a.createElement(h.a,{variant:"h1",component:"h1"},$))),r.a.createElement(Pa,{data:l.players}))}function Na(e){var a=e.id,n=e.pass,t=e.name,l=r.a.useState(0),i=Object(c.a)(l,2),o=i[0],m=i[1];return r.a.createElement(y.a,{elevation:3},r.a.createElement(q.a,{value:o,indicatorColor:"primary",textColor:"primary",onChange:function(e,a){m(a)},"aria-label":"disabled tabs example",variant:"fullWidth"},r.a.createElement(F.a,{label:"\u73a9\u5bb6"}),r.a.createElement(F.a,{label:"\u6a21\u5f0f"})),r.a.createElement(Ca,{value:o,index:0},r.a.createElement(wa,{id:a,pass:n,name:t})),r.a.createElement(Ca,{value:o,index:1},r.a.createElement(Me,null)))}function ka(){var e=Object(o.a)(["\n  mutation UpdatePlayerPass($id: Int!, $pass: String!) {\n    updatePlayerPass(id: $id, pass: $pass) {\n      isValid\n      name\n    }\n  }\n"]);return ka=function(){return e},e}function Ra(){var e=Object(o.a)(["\n  {\n    players {\n      id\n      name\n      isEmpty\n    }\n  }\n"]);return Ra=function(){return e},e}var Ia=new s.a({uri:"/graphql",connectToDevTools:!0}),Ta=Object(w.a)((function(e){return{margin:{},table:{minWidth:450},title:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},submit:{margin:e.spacing(3,0,2)},container:{paddingTop:e.spacing(4),paddingBottom:e.spacing(4)}}})),Wa=Object(s.b)(Ra()),Ba=Object(s.b)(ka());function Da(){return r.a.createElement(h.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",(new Date).getFullYear())}function Ga(){var e=Ta(),a=r.a.useState(-1),n=Object(c.a)(a,2),t=n[0],l=n[1],i=r.a.useState(""),o=Object(c.a)(i,2),s=o[0],p=o[1],g=Object(b.b)(Wa),f=g.loading,E=(g.error,g.data),v=Object(b.a)(Ba),O=Object(c.a)(v,2),j=O[0],y=O[1],C=r.a.useState(!1),w=Object(c.a)(C,2),T=w[0],W=w[1];return f||y.loading?r.a.createElement("div",null,"Loading"):y.called&&y.data.updatePlayerPass.isValid&&T?r.a.createElement(r.a.Fragment,null,r.a.createElement(k.a,null),r.a.createElement(N.a,{maxWidth:"sm"},r.a.createElement($.a,{position:"absolute"},r.a.createElement(x.a,null,r.a.createElement(S.a,{edge:"start",className:e.menuButton,color:"inherit","aria-label":"menu"},r.a.createElement(P.a,null)),r.a.createElement(h.a,{variant:"h6",className:e.title},"\u5c0f\u72fc\u72fc"),r.a.createElement(m.a,{variant:"contained",color:"secondary",onClick:function(){W(!1)}},"\u9000\u51fa"))),r.a.createElement("div",{style:{marginTop:100}},0===t?r.a.createElement(ga,{id:t,pass:s,name:y.data.updatePlayerPass.name}):r.a.createElement(Na,{id:t,pass:s,name:y.data.updatePlayerPass.name})),r.a.createElement(R.a,{pt:4},r.a.createElement(Da,null)))):r.a.createElement(N.a,{component:"main",maxWidth:"xs"},r.a.createElement(k.a,null),r.a.createElement("div",{style:{marginTop:"20%"}},r.a.createElement(I.a,{round:!0,src:"wolf-login.png"}),r.a.createElement(u.a,{fullWidth:!0,id:"combo-box-demo",className:e.margin,options:E.players,getOptionLabel:function(e){return"\u73a9\u5bb6 ".concat(e.id)},renderOption:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("span",{style:{color:e.isEmpty?"gray":"lightgreen",transition:"all .3s ease",fontSize:"24px",marginRight:"10px"}},"\u25cf")," \u73a9\u5bb6 ".concat(e.id))},onChange:function(e,a){l(a.id)},renderInput:function(e){return r.a.createElement(d.a,Object.assign({},e,{label:"\u73a9\u5bb6",variant:"outlined",margin:"dense"}))}}),r.a.createElement(d.a,{fullWidth:!0,id:"standard-basic",label:"\u5bc6\u78bc",variant:"outlined",className:e.margin,margin:"dense",onChange:function(e){return p(e.target.value)},value:s}),r.a.createElement(m.a,{type:"submit",fullWidth:!0,variant:"contained",color:"primary",className:e.submit,onClick:function(){j({variables:{id:t,pass:s}}),W(!0)}},"\u767b\u5165")),r.a.createElement(R.a,{mt:8},r.a.createElement(Da,null)))}var za=function(){return r.a.createElement("div",{className:"App"},r.a.createElement(p.a,{client:Ia},r.a.createElement(Ga,null)))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(za,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[237,1,2]]]);
//# sourceMappingURL=main.2b28f164.chunk.js.map