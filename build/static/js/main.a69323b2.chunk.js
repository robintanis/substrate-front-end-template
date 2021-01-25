(this["webpackJsonpsubstrate-front-end-template"]=this["webpackJsonpsubstrate-front-end-template"]||[]).push([[0],{1204:function(e){e.exports=JSON.parse('{"PROVIDER_SOCKET":"wss://dev-node.substrate.dev"}')},1213:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(105),l=a.n(c),u=a(25),o=a(1238),i=a(1227),s=a(1240),m=a(1236),p=a(1228),E=a(1225),f=(a(578),a(18)),d=a.n(f),b=a(30),v=a(26),O=a(368),y=a.n(O),h=a(554),j=a.n(h),g=a(369),S=a(229),C=a(306),k=a.n(C),R=a(557),w=a(1204),x=["REACT_APP_PROVIDER_SOCKET","REACT_APP_DEVELOPMENT_KEYRING"].reduce((function(e,t){return void 0!==Object({NODE_ENV:"production",PUBLIC_URL:"/substrate-front-end-template",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0})[t]&&(e[t.slice(10)]=Object({NODE_ENV:"production",PUBLIC_URL:"/substrate-front-end-template",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0})[t]),e}),{}),N=Object(v.a)(Object(v.a)(Object(v.a)({},R),w),x),T=j.a.parse(window.location.search).rpc||N.PROVIDER_SOCKET;console.log("Connected socket: ".concat(T));var P={socket:T,jsonrpc:Object(v.a)(Object(v.a)({},y.a),N.RPC),types:N.CUSTOM_TYPES,keyring:null,keyringState:null,api:null,apiError:null,apiState:null},A=function(e,t){switch(t.type){case"CONNECT_INIT":return Object(v.a)(Object(v.a)({},e),{},{apiState:"CONNECT_INIT"});case"CONNECT":return Object(v.a)(Object(v.a)({},e),{},{api:t.payload,apiState:"CONNECTING"});case"CONNECT_SUCCESS":return Object(v.a)(Object(v.a)({},e),{},{apiState:"READY"});case"CONNECT_ERROR":return Object(v.a)(Object(v.a)({},e),{},{apiState:"ERROR",apiError:t.payload});case"LOAD_KEYRING":return Object(v.a)(Object(v.a)({},e),{},{keyringState:"LOADING"});case"SET_KEYRING":return Object(v.a)(Object(v.a)({},e),{},{keyring:t.payload,keyringState:"READY"});case"KEYRING_ERROR":return Object(v.a)(Object(v.a)({},e),{},{keyring:null,keyringState:"ERROR"});default:throw new Error("Unknown type: ".concat(t.type))}},I=!1,D=r.a.createContext(),_=function(e){var t=Object(v.a)({},P);["socket","types"].forEach((function(a){t[a]="undefined"===typeof e[a]?t[a]:e[a]}));var a=Object(n.useReducer)(A,t),c=Object(u.a)(a,2),l=c[0],o=c[1];return function(e,t){var a=e.apiState,n=e.socket,r=e.jsonrpc,c=e.types;if(!a){t({type:"CONNECT_INIT"});var l=new g.WsProvider(n),u=new g.ApiPromise({provider:l,types:c,rpc:r});u.on("connected",(function(){t({type:"CONNECT",payload:u}),u.isReady.then((function(e){return t({type:"CONNECT_SUCCESS"})}))})),u.on("ready",(function(){return t({type:"CONNECT_SUCCESS"})})),u.on("error",(function(e){return t({type:"CONNECT_ERROR",payload:e})}))}}(l,o),function(e,t){var a=function(){var e=Object(b.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:"LOAD_KEYRING"}),e.prev=1,e.next=4,Object(S.web3Enable)(N.APP_NAME);case 4:return e.next=6,Object(S.web3Accounts)();case 6:a=(a=e.sent).map((function(e){var t=e.address,a=e.meta;return{address:t,meta:Object(v.a)(Object(v.a)({},a),{},{name:"".concat(a.name," (").concat(a.source,")")})}})),k.a.loadAll({isDevelopment:N.DEVELOPMENT_KEYRING},a),t({type:"SET_KEYRING",payload:k.a}),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),console.error(e.t0),t({type:"KEYRING_ERROR"});case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(){return e.apply(this,arguments)}}();if(!e.keyringState){if(I)return t({type:"SET_KEYRING",payload:k.a});I=!0,a()}}(l,o),r.a.createElement(D.Provider,{value:l},e.children)},F=function(){return Object(v.a)({},Object(n.useContext)(D))},M={paramConversion:{num:["Compact<Balance>","BalanceOf","u8","u16","u32","u64","u128","i8","i16","i32","i64","i128"]}},U=a(73),G=a(1214);function Y(e){var t=e.accountPair,a=void 0===t?null:t,c=e.label,l=e.setStatus,o=e.color,i=void 0===o?"blue":o,s=e.style,m=void 0===s?null:s,p=e.type,E=void 0===p?"QUERY":p,f=e.attrs,O=void 0===f?null:f,y=e.disabled,h=void 0!==y&&y,j=F().api,g=Object(n.useState)(null),C=Object(u.a)(g,2),k=C[0],R=C[1],w=Object(n.useState)(null),x=Object(u.a)(w,2),N=x[0],T=x[1],P=O.palletRpc,A=O.callable,I=O.inputParams,D=O.paramFields,_=function(){return"SUDO-TX"===E},Y=function(){return"UNCHECKED-SUDO-TX"===E};Object(n.useEffect)((function(){Object(b.a)(d.a.mark((function e(){var t;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(j){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,j.query.sudo.key();case 4:(t=e.sent).isEmpty?T(null):T(t.toString());case 6:case"end":return e.stop()}}),e)})))()}),[j]);var V,H=function(){var e=Object(b.a)(d.a.mark((function e(){var t,n,r,c,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(t=a.address,n=a.meta,r=n.source,!n.isInjected){e.next=9;break}return e.next=4,Object(S.web3FromSource)(r);case 4:l=e.sent,c=t,j.setSigner(l.signer),e.next=10;break;case 9:c=a;case 10:return e.abrupt("return",c);case 11:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),K=function(e){var t=e.status;return t.isFinalized?l("\ud83d\ude09 Finalized. Block hash: ".concat(t.asFinalized.toString())):l("Current transaction status: ".concat(t.type))},B=function(e){return l("\ud83d\ude1e Transaction Failed: ".concat(e.toString()))},q=function(){var e=Object(b.a)(d.a.mark((function e(){var t,a,n,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H();case 2:a=e.sent,n=ee(D,I),r=n?j.tx.sudo.sudo((t=j.tx[P])[A].apply(t,Object(U.a)(n))):j.tx.sudo.sudo(j.tx[P][A]()),c=r.signAndSend(a,K).catch(B),R((function(){return c}));case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),X=function(){var e=Object(b.a)(d.a.mark((function e(){var t,a,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H();case 2:a=e.sent,n=j.tx.sudo.sudoUncheckedWeight((t=j.tx[P])[A].apply(t,Object(U.a)(I)),0),r=n.signAndSend(a,K).catch(B),R((function(){return r}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),z=function(){var e=Object(b.a)(d.a.mark((function e(){var t,a,n,r,c;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,H();case 2:return a=e.sent,n=ee(D,I),r=n?(t=j.tx[P])[A].apply(t,Object(U.a)(n)):j.tx[P][A](),e.next=7,r.signAndSend(a,K).catch(B);case 7:c=e.sent,R((function(){return c}));case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),W=function(){var e=Object(b.a)(d.a.mark((function e(){var t,a,n,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=ee(D,I),n=a?(t=j.tx[P])[A].apply(t,Object(U.a)(a)):j.tx[P][A](),e.next=4,n.send(K).catch(B);case 4:r=e.sent,R((function(){return r}));case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),L=function(e){return e.isNone?l("None"):l(e.toString())},Q=function(){var e=Object(b.a)(d.a.mark((function e(){var t,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=ee(D,I),e.next=3,(t=j.query[P])[A].apply(t,Object(U.a)(a).concat([L]));case 3:n=e.sent,R((function(){return n}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),J=function(){var e=Object(b.a)(d.a.mark((function e(){var t,a,n;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=ee(D,I,{emptyAsNull:!1}),e.next=3,(t=j.rpc[P])[A].apply(t,Object(U.a)(a).concat([L]));case 3:n=e.sent,R((function(){return n}));case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),Z=function(){var e=j.consts[P][A];e.isNone?l("None"):l(e.toString())},$=function(){var e=Object(b.a)(d.a.mark((function e(){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:k&&(k(),R(null)),l("Sending..."),_()&&q()||Y()&&X()||"SIGNED-TX"===E&&z()||"UNSIGNED-TX"===E&&W()||"QUERY"===E&&Q()||"RPC"===E&&J()||"CONSTANT"===E&&Z();case 3:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),ee=function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{emptyAsNull:!0},n=t.map((function(e){return"object"===typeof e&&null!==e&&"string"===typeof e.value?e.value.trim():"string"===typeof e?e.trim():e})),r=e.map((function(e,t){return Object(v.a)(Object(v.a)({},e),{},{value:n[t]||null})}));return r.reduce((function(e,t){var n=t.type,r=void 0===n?"string":n,c=t.value;if(null==c||""===c)return a.emptyAsNull?[].concat(Object(U.a)(e),[null]):e;var l=c;return r.indexOf("Vec<")>=0?(l=(l=l.split(",").map((function(e){return e.trim()}))).map((function(e){return te(r)?e.indexOf(".")>=0?Number.parseFloat(e):Number.parseInt(e):e})),[].concat(Object(U.a)(e),[l])):(te(r)&&(l=l.indexOf(".")>=0?Number.parseFloat(l):Number.parseInt(l)),[].concat(Object(U.a)(e),[l]))}),[])},te=function(e){return M.paramConversion.num.some((function(t){return e.indexOf(t)>=0}))};return r.a.createElement(G.a,{basic:!0,color:i,style:m,type:"submit",onClick:$,disabled:h||!P||!A||!(0===D.length||D.every((function(e,t){var a=I[t];if(e.optional)return!0;if(null==a)return!1;var n="object"===typeof a?a.value:a;return null!==n&&""!==n})))||(_()||Y())&&(V=a,!(N&&V&&V.address===N))},c)}function V(e){return r.a.createElement(G.a.Group,null,r.a.createElement(Y,Object.assign({label:"Unsigned",type:"UNSIGNED-TX",color:"grey"},e)),r.a.createElement(G.a.Or,null),r.a.createElement(Y,Object.assign({label:"Signed",type:"SIGNED-TX",color:"blue"},e)),r.a.createElement(G.a.Or,null),r.a.createElement(Y,Object.assign({label:"SUDO",type:"SUDO-TX",color:"red"},e)))}function H(e){var t=F(),n=t.api,r=t.apiState,c=t.keyring,l=t.keyringState;return"READY"===r&&(window.api=n),"READY"===l&&(window.keyring=c),window.util=a(4),window.utilCrypto=a(45),null}var K=a(293),B=a(1230),q=a(561),X=a(1229),z=a(232),W=a(156);function L(e){var t=F().keyring,a=e.setAccountAddress,c=Object(n.useState)(""),l=Object(u.a)(c,2),o=l[0],i=l[1],s=t.getPairs().map((function(e){return{key:e.address,value:e.address,text:e.meta.name.toUpperCase(),icon:"user"}})),m=s.length>0?s[0].value:"";Object(n.useEffect)((function(){a(m),i(m)}),[a,m]);return r.a.createElement(B.a,{attached:"top",tabular:!0,style:{backgroundColor:"#fff",borderColor:"#fff",paddingTop:"1em",paddingBottom:"1em"}},r.a.createElement(E.a,null,r.a.createElement(B.a.Menu,null,r.a.createElement(q.a,{src:"".concat("/substrate-front-end-template","/assets/substrate-logo.png"),size:"mini"})),r.a.createElement(B.a.Menu,{style:{margin:"0 auto"}},r.a.createElement("button",{onClick:function(){console.log("Switch pagina consument")},href:"#"},"ConsumentenPagina"),r.a.createElement("button",{onClick:function(){console.log("Switch pagina: bedrijven")},href:"#"},"BedrijvenPagina")),r.a.createElement(B.a.Menu,{position:"right",style:{alignItems:"center"}},o?null:r.a.createElement("span",null,"Add your account with the"," ",r.a.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:"https://github.com/polkadot-js/extension"},"Polkadot JS Extension")),r.a.createElement(K.CopyToClipboard,{text:o},r.a.createElement(G.a,{basic:!0,circular:!0,size:"large",icon:"user",color:o?"green":"red"})),r.a.createElement(X.a,{search:!0,selection:!0,clearable:!0,placeholder:"Select an account",options:s,onChange:function(e,t){var n;n=t.value,a(n),i(n)},value:o}),r.a.createElement(Q,{accountSelected:o}))))}function Q(e){var t=e.accountSelected,a=F().api,c=Object(n.useState)(0),l=Object(u.a)(c,2),o=l[0],i=l[1];return Object(n.useEffect)((function(){var e;return t&&a.query.system.account(t,(function(e){i(e.data.free.toHuman())})).then((function(t){e=t})).catch(console.error),function(){return e&&e()}}),[a,t]),t?r.a.createElement(z.a,{pointing:"left"},r.a.createElement(W.a,{name:"money",color:"green"}),o):null}function J(e){var t=F(),a=t.api;return t.keyring.getPairs&&a.query?r.a.createElement(L,e):null}var Z=a(87),$=a(1233);function ee(e){var t=F(),a=t.api,c=t.keyring,l=c.getPairs(),o=Object(n.useState)({}),i=Object(u.a)(o,2),m=i[0],p=i[1];return Object(n.useEffect)((function(){var e=c.getPairs().map((function(e){return e.address})),t=null;return a.query.system.account.multi(e,(function(t){var a=e.reduce((function(e,a,n){return Object(v.a)(Object(v.a)({},e),{},Object(Z.a)({},a,t[n].data.free.toHuman()))}),{});p(a)})).then((function(e){t=e})).catch(console.error),function(){return t&&t()}}),[a,c,p]),r.a.createElement(s.a.Column,null,r.a.createElement("h1",null,"Balances"),r.a.createElement($.a,{celled:!0,striped:!0,size:"small"},r.a.createElement($.a.Body,null,l.map((function(e){return r.a.createElement($.a.Row,{key:e.address},r.a.createElement($.a.Cell,{width:3,textAlign:"right"},e.meta.name),r.a.createElement($.a.Cell,{width:10},r.a.createElement("span",{style:{display:"inline-block",minWidth:"31em"}},e.address),r.a.createElement(K.CopyToClipboard,{text:e.address},r.a.createElement(G.a,{basic:!0,circular:!0,compact:!0,size:"mini",color:"blue",icon:"copy outline"}))),r.a.createElement($.a.Cell,{width:3},m&&m[e.address]&&m[e.address]))})))))}var te=a(1235),ae=a(1237);function ne(e){var t=F().api,a=e.finalized,c=Object(n.useState)(0),l=Object(u.a)(c,2),o=l[0],i=l[1],m=Object(n.useState)(0),p=Object(u.a)(m,2),E=p[0],f=p[1],d=a?t.derive.chain.bestNumberFinalized:t.derive.chain.bestNumber;Object(n.useEffect)((function(){var e=null;return d((function(e){i(e.toNumber()),f(0)})).then((function(t){e=t})).catch(console.error),function(){return e&&e()}}),[d]);var b=function(){f((function(e){return e+1}))};return Object(n.useEffect)((function(){var e=setInterval(b,1e3);return function(){return clearInterval(e)}}),[]),r.a.createElement(s.a.Column,null,r.a.createElement(te.a,null,r.a.createElement(te.a.Content,{textAlign:"center"},r.a.createElement(ae.a,{label:(a?"Finalized":"Current")+" Block",value:o})),r.a.createElement(te.a.Content,{extra:!0},r.a.createElement(W.a,{name:"time"})," ",E)))}function re(e){var t=F().api;return t.derive&&t.derive.chain&&t.derive.chain.bestNumber&&t.derive.chain.bestNumberFinalized?r.a.createElement(ne,e):null}var ce=a(1232),le=['system:ExtrinsicSuccess:: (phase={"ApplyExtrinsic":0})','system:ExtrinsicSuccess:: (phase={"ApplyExtrinsic":1})'];function ue(e){var t=F().api,a=Object(n.useState)([]),c=Object(u.a)(a,2),l=c[0],o=c[1];Object(n.useEffect)((function(){var e=null;return function(){var a=Object(b.a)(d.a.mark((function a(){return d.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,t.query.system.events((function(e){e.forEach((function(e){var t=e.event,a=e.phase,n=t.typeDef,r="".concat(t.section,":").concat(t.method,":: (phase=").concat(a.toString(),")");if(!le.includes(r)){var c=t.data.map((function(e,t){return"".concat(n[t].type,": ").concat(e.toString())}));o((function(e){return[{icon:"bell",summary:"".concat(r,"-").concat(e.length),extraText:t.meta.documentation.join(", ").toString(),content:c.join(", ")}].concat(Object(U.a)(e))}))}}))}));case 2:e=a.sent;case 3:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}()(),function(){return e&&e()}}),[t.query.system]);var i=e.feedMaxHeight,m=void 0===i?250:i;return r.a.createElement(s.a.Column,{width:8},r.a.createElement("h1",{style:{float:"left"}},"Events"),r.a.createElement(G.a,{basic:!0,circular:!0,size:"mini",color:"grey",floated:"right",icon:"erase",onClick:function(e){return o([])}}),r.a.createElement(ce.a,{style:{clear:"both",overflow:"auto",maxHeight:m},events:l}))}function oe(e){var t=F().api;return t.query&&t.query.system&&t.query.system.events?r.a.createElement(ue,e):null}var ie=a(1231),se=a(1226),me=function(e){return e.type.toString().startsWith("Option<")};function pe(e){var t=F(),a=t.api,c=t.jsonrpc,l=e.accountPair,o=Object(n.useState)(null),i=Object(u.a)(o,2),m=i[0],p=i[1],E=Object(n.useState)("EXTRINSIC"),f=Object(u.a)(E,2),d=f[0],b=f[1],O=Object(n.useState)([]),y=Object(u.a)(O,2),h=y[0],j=y[1],g=Object(n.useState)([]),S=Object(u.a)(g,2),C=S[0],k=S[1],R=Object(n.useState)([]),w=Object(u.a)(R,2),x=w[0],N=w[1],T={palletRpc:"",callable:"",inputParams:[]},P=Object(n.useState)(T),A=Object(u.a)(P,2),I=A[0],D=A[1],_=I.palletRpc,M=I.callable,G=I.inputParams,Y=function(e,t){return"QUERY"===t?e.query:"EXTRINSIC"===t?e.tx:"RPC"===t?e.rpc:e.consts};Object(n.useEffect)((function(){if(a){var e=Y(a,d),t=Object.keys(e).sort().filter((function(t){return Object.keys(e[t]).length>0})).map((function(e){return{key:e,value:e,text:e}}));j(t)}}),[a,d]),Object(n.useEffect)((function(){if(a&&""!==_){var e=Object.keys(Y(a,d)[_]).sort().map((function(e){return{key:e,value:e,text:e}}));k(e)}}),[a,d,_]),Object(n.useEffect)((function(){if(a&&""!==_&&""!==M){var e=[];if("QUERY"===d){var t=a.query[_][M].meta.type;t.isPlain||(t.isMap?e=[{name:t.asMap.key.toString(),type:t.asMap.key.toString(),optional:!1}]:t.isDoubleMap&&(e=[{name:t.asDoubleMap.key1.toString(),type:t.asDoubleMap.key1.toString(),optional:!1},{name:t.asDoubleMap.key2.toString(),type:t.asDoubleMap.key2.toString(),optional:!1}]))}else if("EXTRINSIC"===d){var n=a.tx[_][M].meta.args;n&&n.length>0&&(e=n.map((function(e){return{name:e.name.toString(),type:e.type.toString(),optional:me(e)}})))}else if("RPC"===d){var r=[];c[_]&&c[_][M]&&(r=c[_][M].params),r.length>0&&(e=r.map((function(e){return{name:e.name,type:e.type,optional:e.isOptional||!1}})))}else"CONSTANT"===d&&(e=[]);N(e)}else N([])}),[a,d,_,M]);var V=function(e,t){D((function(e){var a,n=t.state,r=t.value;if("object"===typeof n){var c=n.ind,l=n.paramField.type,u=Object(U.a)(e.inputParams);u[c]={type:l,value:r},a=Object(v.a)(Object(v.a)({},e),{},{inputParams:u})}else if("palletRpc"===n){var o;a=Object(v.a)(Object(v.a)({},e),{},(o={},Object(Z.a)(o,n,r),Object(Z.a)(o,"callable",""),Object(Z.a)(o,"inputParams",[]),o))}else if("callable"===n){var i;a=Object(v.a)(Object(v.a)({},e),{},(i={},Object(Z.a)(i,n,r),Object(Z.a)(i,"inputParams",[]),i))}return a}))},H=function(e,t){b(t.value),D(T)},K=function(e){return"RPC"===e?"Optional Parameter":"Leaving this field as blank will submit a NONE value"};return r.a.createElement(s.a.Column,{width:8},r.a.createElement("h1",null,"Pallet Interactor"),r.a.createElement(ie.a,null,r.a.createElement(ie.a.Group,{style:{overflowX:"auto"},inline:!0},r.a.createElement("label",null,"Interaction Type"),r.a.createElement(ie.a.Radio,{label:"Extrinsic",name:"interxType",value:"EXTRINSIC",checked:"EXTRINSIC"===d,onChange:H}),r.a.createElement(ie.a.Radio,{label:"Query",name:"interxType",value:"QUERY",checked:"QUERY"===d,onChange:H}),r.a.createElement(ie.a.Radio,{label:"RPC",name:"interxType",value:"RPC",checked:"RPC"===d,onChange:H}),r.a.createElement(ie.a.Radio,{label:"Constant",name:"interxType",value:"CONSTANT",checked:"CONSTANT"===d,onChange:H})),r.a.createElement(ie.a.Field,null,r.a.createElement(X.a,{placeholder:"Pallets / RPC",fluid:!0,label:"Pallet / RPC",onChange:V,search:!0,selection:!0,state:"palletRpc",value:_,options:h})),r.a.createElement(ie.a.Field,null,r.a.createElement(X.a,{placeholder:"Callables",fluid:!0,label:"Callable",onChange:V,search:!0,selection:!0,state:"callable",value:M,options:C})),x.map((function(e,t){return r.a.createElement(ie.a.Field,{key:"".concat(e.name,"-").concat(e.type)},r.a.createElement(se.a,{placeholder:e.type,fluid:!0,type:"text",label:e.name,state:{ind:t,paramField:e},value:G[t]?G[t].value:"",onChange:V}),e.optional?r.a.createElement(z.a,{basic:!0,pointing:!0,color:"teal",content:K(d)}):null)})),r.a.createElement(ie.a.Field,{style:{textAlign:"center"}},r.a.createElement(Ee,{accountPair:l,setStatus:p,attrs:{interxType:d,palletRpc:_,callable:M,inputParams:G,paramFields:x}})),r.a.createElement("div",{style:{overflowWrap:"break-word"}},m)))}function Ee(e){var t=e.attrs.interxType;return"QUERY"===t?r.a.createElement(Y,Object.assign({label:"Query",type:"QUERY",color:"blue"},e)):"EXTRINSIC"===t?r.a.createElement(V,e):"RPC"===t||"CONSTANT"===t?r.a.createElement(Y,Object.assign({label:"Submit",type:t,color:"blue"},e)):void 0}function fe(e){return F().api.tx?r.a.createElement(pe,e):null}var de=a(1234);function be(e){var t=F().api,a=Object(n.useState)({data:null,version:null}),c=Object(u.a)(a,2),l=c[0],o=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(b.a)(d.a.mark((function e(){var a;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.rpc.state.getMetadata();case 3:a=e.sent,o({data:a,version:a.version}),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.error(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(){return e.apply(this,arguments)}})()()}),[t.rpc.state]),r.a.createElement(s.a.Column,null,r.a.createElement(te.a,null,r.a.createElement(te.a.Content,null,r.a.createElement(te.a.Header,null,"Metadata"),r.a.createElement(te.a.Meta,null,r.a.createElement("span",null,"v",l.version))),r.a.createElement(te.a.Content,{extra:!0},r.a.createElement(de.a,{trigger:r.a.createElement(G.a,null,"Show Metadata")},r.a.createElement(de.a.Header,null,"Runtime Metadata"),r.a.createElement(de.a.Content,{scrolling:!0},r.a.createElement(de.a.Description,null,r.a.createElement("pre",null,r.a.createElement("code",null,JSON.stringify(l.data,null,2)))))))))}function ve(e){var t=F().api;return t.rpc&&t.rpc.state&&t.rpc.state.getMetadata?r.a.createElement(be,e):null}function Oe(e){var t=F().api,a=Object(n.useState)({}),c=Object(u.a)(a,2),l=c[0],o=c[1];return Object(n.useEffect)((function(){(function(){var e=Object(b.a)(d.a.mark((function e(){var a,n,r,c,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([t.rpc.system.chain(),t.rpc.system.name(),t.rpc.system.version()]);case 3:a=e.sent,n=Object(u.a)(a,3),r=n[0],c=n[1],l=n[2],o({chain:r,nodeName:c,nodeVersion:l}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()()}),[t.rpc.system]),r.a.createElement(s.a.Column,null,r.a.createElement(te.a,null,r.a.createElement(te.a.Content,null,r.a.createElement(te.a.Header,null,l.nodeName),r.a.createElement(te.a.Meta,null,r.a.createElement("span",null,l.chain)),r.a.createElement(te.a.Description,null,"Built using the"," ",r.a.createElement("a",{href:"https://github.com/substrate-developer-hub/substrate-front-end-template"},"Substrate Front End Template"))),r.a.createElement(te.a.Content,{extra:!0},r.a.createElement(W.a,{name:"setting"}),"v",l.nodeVersion)))}function ye(e){var t=F().api;return t.rpc&&t.rpc.system&&t.rpc.system.chain&&t.rpc.system.name&&t.rpc.system.version?r.a.createElement(Oe,e):null}var he=a(198);function je(e){var t=F().api,a=Object(n.useState)({}),c=Object(u.a)(a,2),o=c[0],i=c[1];Object(n.useEffect)((function(){(function(){var e=Object(b.a)(d.a.mark((function e(){var a,n,r,c,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,Promise.all([t.rpc.system.chain(),t.rpc.system.name(),t.rpc.system.version()]);case 3:a=e.sent,n=Object(u.a)(a,3),r=n[0],c=n[1],l=n[2],i({chain:r,nodeName:c,nodeVersion:l}),e.next=14;break;case 11:e.prev=11,e.t0=e.catch(0),console.error(e.t0);case 14:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}})()()}),[t.rpc.system]);var m=F().keyring.getPairs().map((function(e){return{key:e.address,value:e.address,text:e.meta.name.toUpperCase(),icon:"user"}})),p=["block1","block2","block3","block4"],E=[],f=["ALICE","ALICE_STASH","BOB","BOB_STASH"],v=["CHARLIE","DAVE"],O=["EVE","FERDIE"],y=new Array;(function(e){var t=g(e.account);return f.includes(t)})(e)?(y.length=0,y=["Productie vaccin","Goedkeuring vaccin","Klaar voor levering"]):function(e){var t=g(e.account);return v.includes(t)}(e)?(y.length=0,y=["Ophalen vaccin","Opgeslagen in opslagruimte","Opleveren vaccin aan apotheek"]):function(e){var t=g(e.account);return O.includes(t)}(e)&&(y.length=0,y=["Ontvangst vaccin","Klaarmaken vaccin","Vaccinatie bij mensen"]);var h=[],j=null;function g(e){var t=m.filter((function(t){return t.value===e}))[0];if(void 0!==t)return t.text}function S(e){j=e,console.log("Block selected: ",j),l.a.render("Geselecteerde vaccin: "+j,document.getElementById("selectedBlock"))}var C,k=Object(he.a)(p.entries());try{var R=function(){var e=Object(u.a)(C.value,2),t=e[0],a=e[1];E.push(r.a.createElement("li",{key:t},r.a.createElement("a",{onClick:function(){return S(a)}},a)))};for(k.s();!(C=k.n()).done;)R()}catch(I){k.e(I)}finally{k.f()}var w,x=Object(he.a)(y.entries());try{for(x.s();!(w=x.n()).done;){var N=Object(u.a)(w.value,2),T=N[0],P=N[1];h.push(r.a.createElement("option",{key:T,value:P},P))}}catch(I){x.e(I)}finally{x.f()}var A={width:"100%"};return r.a.createElement(s.a,{stackable:!0,columns:"equal"},r.a.createElement(s.a.Column,{style:A},r.a.createElement(te.a,{style:{width:"100%"}},r.a.createElement(te.a.Content,null,r.a.createElement(te.a.Header,null,"Vaccin blockchain"),r.a.createElement(te.a.Meta,null,r.a.createElement("span",null,"Druk op de knop op een nieuw vaccin te genereren.")),r.a.createElement(te.a.Description,null,r.a.createElement("button",{onClick:function(){return function(){console.log("Genereer een vaccin..."),E.length=0,p.push("NieuwVaccin"+(new Date).toISOString());var e,t=Object(he.a)(p.entries());try{var a=function(){var t=Object(u.a)(e.value,2),a=t[0],n=t[1];E.push(r.a.createElement("li",{key:a},r.a.createElement("a",{onClick:function(){return S(n)}},n)))};for(t.s();!(e=t.n()).done;)a()}catch(I){t.e(I)}finally{t.f()}l.a.render(E,document.getElementById("blocksHtml"))}()}},"Genereer vaccin"))),r.a.createElement(te.a.Content,{id:"selectedBlock"},"Geselecteerde vaccin: er is geen vaccin geselecteerd."),r.a.createElement(te.a.Content,{extra:!0},r.a.createElement(W.a,{name:"setting"}),"v",o.nodeVersion))),r.a.createElement(s.a,{style:A},r.a.createElement(s.a.Column,{style:{width:"66%"}},r.a.createElement(te.a,{style:{width:"100%"}},r.a.createElement(te.a.Content,null,r.a.createElement("div",{style:{width:"45%",float:"left"}},r.a.createElement(te.a.Header,null,"Vaccins"),r.a.createElement(te.a.Meta,null,r.a.createElement("span",null,"Selecteer een vaccin en voer een actie uit.")),r.a.createElement(te.a.Description,null,r.a.createElement("div",null,r.a.createElement("p",null,"Hieronder een lijst met alle vaccins:"),r.a.createElement("ul",{id:"blocksHtml"},E)))),r.a.createElement("div",{style:{width:"45%",float:"right"}},r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("select",{id:"dropdownactions",name:"actions"},h),r.a.createElement("button",{onClick:function(){console.log("Voer actie uit...")}},"Actie uitvoeren"))),r.a.createElement(te.a.Content,{extra:!0},r.a.createElement(W.a,{name:"setting"}),"v",o.nodeVersion))),r.a.createElement(s.a.Column,{style:{width:"33%"}},r.a.createElement(te.a,{style:{width:"100%"}},r.a.createElement(te.a.Content,null,r.a.createElement(te.a.Header,null,"Geschiedenis"),r.a.createElement(te.a.Meta,null,r.a.createElement("span",null,"Selecteer hiernaast een vaccin om de geschiedenis te zien.")),r.a.createElement(te.a.Description,null,"Hier komt de geschiedenis van een vaccin te staan.")),r.a.createElement(te.a.Content,{extra:!0},r.a.createElement(W.a,{name:"setting"}),"v",o.nodeVersion)))))}function ge(e){var t=F().api;return t.rpc&&t.rpc.system&&t.rpc.system.chain&&t.rpc.system.name&&t.rpc.system.version?r.a.createElement(je,e):null}function Se(e){var t=F().api,a=e.accountPair,c=Object(n.useState)(""),l=Object(u.a)(c,2),o=l[0],i=l[1],m=Object(n.useState)(0),p=Object(u.a)(m,2),E=p[0],f=p[1],d=Object(n.useState)(0),b=Object(u.a)(d,2),v=b[0],O=b[1];return Object(n.useEffect)((function(){var e;return t.query.templateModule.something((function(e){e.isNone?f("<None>"):f(e.unwrap().toNumber())})).then((function(t){e=t})).catch(console.error),function(){return e&&e()}}),[t.query.templateModule]),r.a.createElement(s.a.Column,{width:8},r.a.createElement("h1",null,"Template Module"),r.a.createElement(te.a,{centered:!0},r.a.createElement(te.a.Content,{textAlign:"center"},r.a.createElement(ae.a,{label:"Current Value",value:E}))),r.a.createElement(ie.a,null,r.a.createElement(ie.a.Field,null,r.a.createElement(se.a,{label:"New Value",state:"newValue",type:"number",onChange:function(e,t){var a=t.value;return O(a)}})),r.a.createElement(ie.a.Field,{style:{textAlign:"center"}},r.a.createElement(Y,{accountPair:a,label:"Store Something",type:"SIGNED-TX",setStatus:i,attrs:{palletRpc:"templateModule",callable:"doSomething",inputParams:[v],paramFields:[!0]}})),r.a.createElement("div",{style:{overflowWrap:"break-word"}},o)))}function Ce(e){var t=F().api;return t.query.templateModule&&t.query.templateModule.something?r.a.createElement(Se,e):null}function ke(e){var t=Object(n.useState)(null),a=Object(u.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)({addressTo:null,amount:0}),i=Object(u.a)(o,2),m=i[0],p=i[1],E=e.accountPair,f=function(e,t){return p((function(e){return Object(v.a)(Object(v.a)({},e),{},Object(Z.a)({},t.state,t.value))}))},d=m.addressTo,b=m.amount;return r.a.createElement(s.a.Column,{width:8},r.a.createElement("h1",null,"Transfer"),r.a.createElement(ie.a,null,r.a.createElement(ie.a.Field,null,r.a.createElement(z.a,{basic:!0,color:"teal"},r.a.createElement(W.a,{name:"hand point right"}),"1 Unit = 1000000000000")),r.a.createElement(ie.a.Field,null,"Transfer more than the existential amount for account with 0 balance"),r.a.createElement(ie.a.Field,null,r.a.createElement(se.a,{fluid:!0,label:"To",type:"text",placeholder:"address",state:"addressTo",onChange:f})),r.a.createElement(ie.a.Field,null,r.a.createElement(se.a,{fluid:!0,label:"Amount",type:"number",state:"amount",onChange:f})),r.a.createElement(ie.a.Field,{style:{textAlign:"center"}},r.a.createElement(Y,{accountPair:E,label:"Submit",type:"SIGNED-TX",setStatus:l,attrs:{palletRpc:"balances",callable:"transfer",inputParams:[d,b],paramFields:[!0,!0]}})),r.a.createElement("div",{style:{overflowWrap:"break-word"}},c)))}function Re(e){var t=Object(n.useState)(""),a=Object(u.a)(t,2),c=a[0],l=a[1],o=Object(n.useState)({}),i=Object(u.a)(o,2),m=i[0],p=i[1],E=e.accountPair,f=function(e){var t=new FileReader;t.onloadend=function(e){var a,n=(a=t.result,Array.from(new Uint8Array(a)).map((function(e){return e.toString(16).padStart(2,"0")})).join(""));p("0x".concat(n))},t.readAsArrayBuffer(e)};return r.a.createElement(s.a.Column,{width:8},r.a.createElement("h1",null,"Upgrade Runtime"),r.a.createElement(ie.a,null,r.a.createElement(ie.a.Field,null,r.a.createElement(se.a,{type:"file",id:"file",label:"Wasm File",accept:".wasm",onChange:function(e){return f(e.target.files[0])}})),r.a.createElement(ie.a.Field,{style:{textAlign:"center"}},r.a.createElement(Y,{accountPair:E,label:"Upgrade",type:"UNCHECKED-SUDO-TX",setStatus:l,attrs:{palletRpc:"system",callable:"setCode",inputParams:[m],paramFields:[!0]}})),r.a.createElement("div",{style:{overflowWrap:"break-word"}},c)))}function we(){var e,t=Object(n.useState)(null),a=Object(u.a)(t,2),c=a[0],l=a[1],f=F(),d=f.apiState,b=f.keyring,v=f.keyringState,O=f.apiError,y=c&&"READY"===v&&b.getPair(c),h=function(e){return r.a.createElement(o.a,{active:!0},r.a.createElement(i.a,{size:"small"},e))};if("ERROR"===d)return e=O,r.a.createElement(s.a,{centered:!0,columns:2,padded:!0},r.a.createElement(s.a.Column,null,r.a.createElement(m.a,{negative:!0,compact:!0,floating:!0,header:"Error Connecting to Substrate",content:"".concat(e)})));if("READY"!==d)return h("Connecting to Substrate");if("READY"!==v)return h("Loading accounts (please review any extension's authorization)");var j=Object(n.createRef)();return r.a.createElement("div",{ref:j},r.a.createElement(p.a,{context:j},r.a.createElement(J,{setAccountAddress:l})),r.a.createElement(E.a,null,r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement(s.a,{stackable:!0,columns:"equal"},r.a.createElement(s.a.Row,{stretched:!0},r.a.createElement(ge,{account:c}))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("p",null,"Dit laten we nog even staan. Wellicht nog hergebruiken, anders weggooien voor Assesment."),r.a.createElement(s.a,{stackable:!0,columns:"equal"},r.a.createElement(s.a.Row,{stretched:!0},r.a.createElement(ye,null),r.a.createElement(ve,null),r.a.createElement(re,null),r.a.createElement(re,{finalized:!0})),r.a.createElement(s.a.Row,{stretched:!0},r.a.createElement(ee,null)),r.a.createElement(s.a.Row,null,r.a.createElement(ke,{accountPair:y}),r.a.createElement(Re,{accountPair:y})),r.a.createElement(s.a.Row,null,r.a.createElement(fe,{accountPair:y}),r.a.createElement(oe,null)),r.a.createElement(s.a.Row,null,r.a.createElement(Ce,{accountPair:y})))),r.a.createElement(H,null))}function xe(){return r.a.createElement(_,null,r.a.createElement(we,null))}l.a.render(r.a.createElement(xe,null),document.getElementById("root"))},557:function(e){e.exports=JSON.parse('{"APP_NAME":"substrate-front-end-tutorial","DEVELOPMENT_KEYRING":true,"RPC":{}}')},573:function(e,t,a){e.exports=a(1213)},646:function(e,t){},698:function(e,t){},700:function(e,t){},710:function(e,t){},712:function(e,t){},738:function(e,t){},740:function(e,t){},741:function(e,t){},746:function(e,t){},748:function(e,t){},755:function(e,t){},757:function(e,t){},776:function(e,t){},788:function(e,t){},791:function(e,t){},811:function(e,t){}},[[573,1,2]]]);
//# sourceMappingURL=main.a69323b2.chunk.js.map