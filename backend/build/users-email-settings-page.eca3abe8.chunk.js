"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[8418],{84210:(U,y,t)=>{t.r(y),t.d(y,{default:()=>oe});var e=t(67294),r=t(14087),x=t(185),T=t(53979),j=t(49066),a=t(30422),d=t(86896),v=t(88767),g=t(84419),n=t(42722),L=t(42866),M=t(24969),l=t(59946),i=t(11276),s=t(67819),m=t(61467),c=t(36856),f=t(29728),Z=t(63321),I=t(36773),S=t(41054),A=t(45697),u=t.n(A),R=t(87561);const Y=R.Ry().shape({options:R.Ry().shape({from:R.Ry().shape({name:R.Z_().required(a.I0.required),email:R.Z_().email(a.I0.email).required(a.I0.required)}).required(),response_email:R.Z_().email(a.I0.email),object:R.Z_().required(a.I0.required),message:R.Z_().required(a.I0.required)}).required(a.I0.required)}),W=({template:o,onToggle:p,onSubmit:E})=>{const{formatMessage:h}=(0,d.Z)();return e.createElement(L.P,{onClose:p,labelledBy:`${h({id:(0,n.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${h({id:(0,n.OB)(o.display),defaultMessage:o.display})}`},e.createElement(M.x,null,e.createElement(Z.O,{label:`${h({id:(0,n.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})}, ${h({id:(0,n.OB)(o.display),defaultMessage:o.display})}`},e.createElement(I.$,null,h({id:(0,n.OB)("PopUpForm.header.edit.email-templates"),defaultMessage:"Edit email template"})),e.createElement(I.$,{isCurrent:!0},h({id:(0,n.OB)(o.display),defaultMessage:o.display})))),e.createElement(S.J9,{onSubmit:E,initialValues:o,validateOnChange:!1,validationSchema:Y,enableReinitialize:!0},({errors:O,values:P,handleChange:b,isSubmitting:$})=>e.createElement(a.l0,null,e.createElement(l.f,null,e.createElement(i.r,{gap:5},e.createElement(s.P,{col:6,s:12},e.createElement(a.jm,{intlLabel:{id:(0,n.OB)("PopUpForm.Email.options.from.name.label"),defaultMessage:"Shipper name"},name:"options.from.name",onChange:b,value:P.options.from.name,error:O?.options?.from?.name,type:"text"})),e.createElement(s.P,{col:6,s:12},e.createElement(a.jm,{intlLabel:{id:(0,n.OB)("PopUpForm.Email.options.from.email.label"),defaultMessage:"Shipper email"},name:"options.from.email",onChange:b,value:P.options.from.email,error:O?.options?.from?.email,type:"text"})),e.createElement(s.P,{col:6,s:12},e.createElement(a.jm,{intlLabel:{id:(0,n.OB)("PopUpForm.Email.options.response_email.label"),defaultMessage:"Response email"},name:"options.response_email",onChange:b,value:P.options.response_email,error:O?.options?.response_email,type:"text"})),e.createElement(s.P,{col:6,s:12},e.createElement(a.jm,{intlLabel:{id:(0,n.OB)("PopUpForm.Email.options.object.label"),defaultMessage:"Subject"},name:"options.object",onChange:b,value:P.options.object,error:O?.options?.object,type:"text"})),e.createElement(s.P,{col:12,s:12},e.createElement(m.g,{label:h({id:(0,n.OB)("PopUpForm.Email.options.message.label"),defaultMessage:"Message"}),id:"options.message",onChange:b,value:P.options.message,error:O?.options?.message&&h({id:O.options.message,defaultMessage:O.options.message})})))),e.createElement(c.m,{startActions:e.createElement(f.z,{onClick:p,variant:"tertiary"},"Cancel"),endActions:e.createElement(f.z,{loading:$,type:"submit"},"Finish")}))))};W.propTypes={template:u().shape({display:u().string,icon:u().string,options:u().shape({from:u().shape({name:u().string,email:u().string}),message:u().string,object:u().string,response_email:u().string})}).isRequired,onSubmit:u().func.isRequired,onToggle:u().func.isRequired};const w=W;var k=t(38939),q=t(8060),F=t(79031),B=t(37909),N=t(63237),D=t(75515),_=t(15234),z=t(52624),G=t(12028),ee=t(30815),K=t(4585),te=t(85018);const J=({canUpdate:o,onEditClick:p})=>{const{formatMessage:E}=(0,d.Z)();return e.createElement(k.i,{colCount:3,rowCount:3},e.createElement(q.h,null,e.createElement(F.Tr,null,e.createElement(B.Th,{width:"1%"},e.createElement(N.T,null,E({id:(0,n.OB)("Email.template.table.icon.label"),defaultMessage:"icon"}))),e.createElement(B.Th,null,e.createElement(D.Z,{variant:"sigma",textColor:"neutral600"},E({id:(0,n.OB)("Email.template.table.name.label"),defaultMessage:"name"}))),e.createElement(B.Th,{width:"1%"},e.createElement(N.T,null,E({id:(0,n.OB)("Email.template.table.action.label"),defaultMessage:"action"}))))),e.createElement(_.p,null,e.createElement(F.Tr,{...(0,a.X7)({fn:()=>p("reset_password")})},e.createElement(B.Td,null,e.createElement(z.J,null,e.createElement(ee.Z,{"aria-label":E({id:"global.reset-password",defaultMessage:"Reset password"})}))),e.createElement(B.Td,null,e.createElement(D.Z,null,E({id:"global.reset-password",defaultMessage:"Reset password"}))),e.createElement(B.Td,{...a.UW},e.createElement(G.h,{onClick:()=>p("reset_password"),label:E({id:(0,n.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:o&&e.createElement(K.Z,null)}))),e.createElement(F.Tr,{...(0,a.X7)({fn:()=>p("email_confirmation")})},e.createElement(B.Td,null,e.createElement(z.J,null,e.createElement(te.Z,{"aria-label":E({id:(0,n.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"})}))),e.createElement(B.Td,null,e.createElement(D.Z,null,E({id:(0,n.OB)("Email.template.email_confirmation"),defaultMessage:"Email address confirmation"}))),e.createElement(B.Td,{...a.UW},e.createElement(G.h,{onClick:()=>p("email_confirmation"),label:E({id:(0,n.OB)("Email.template.form.edit.label"),defaultMessage:"Edit a template"}),noBorder:!0,icon:o&&e.createElement(K.Z,null)})))))};J.propTypes={canUpdate:u().bool.isRequired,onEditClick:u().func.isRequired};const ae=J,ne=async()=>{const{get:o}=(0,a.tg)(),{data:p}=await o((0,n.Gc)("email-templates"));return p},le=o=>{const{put:p}=(0,a.tg)();return p((0,n.Gc)("email-templates"),o)},se=()=>e.createElement(a.O4,{permissions:g._.readEmailTemplates},e.createElement(ie,null)),ie=()=>{const{formatMessage:o}=(0,d.Z)(),{trackUsage:p}=(0,a.rS)(),{notifyStatus:E}=(0,r.G)(),h=(0,a.lm)(),{lockApp:O,unlockApp:P}=(0,a.o1)(),b=(0,e.useRef)(p),$=(0,v.useQueryClient)();(0,a.go)();const[re,de]=(0,e.useState)(!1),[Q,me]=(0,e.useState)(null),{isLoading:ce,allowedActions:{canUpdate:ue}}=(0,a.ss)({update:g._.updateEmailTemplates}),{status:pe,data:X}=(0,v.useQuery)("email-templates",()=>ne(),{onSuccess(){E(o({id:(0,n.OB)("Email.template.data.loaded"),defaultMessage:"Email templates has been loaded"}))},onError(){h({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}})}}),Ee=ce||pe!=="success",H=()=>{de(C=>!C)},ge=C=>{me(C),H()},V=(0,v.useMutation)(C=>le({"email-templates":C}),{async onSuccess(){await $.invalidateQueries("email-templates"),h({type:"success",message:{id:"notification.success.saved",defaultMessage:"Saved"}}),b.current("didEditEmailTemplates"),P(),H()},onError(){h({type:"warning",message:{id:"notification.error",defaultMessage:"An error occured"}}),P()},refetchActive:!0}),{isLoading:fe}=V,he=C=>{O(),b.current("willEditEmailTemplates");const ve={...X,[Q]:C};V.mutate(ve)};return Ee?e.createElement(x.o,{"aria-busy":"true"},e.createElement(a.SL,{name:o({id:(0,n.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(T.T,{title:o({id:(0,n.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(j.D,null,e.createElement(a.dO,null))):e.createElement(x.o,{"aria-busy":fe},e.createElement(a.SL,{name:o({id:(0,n.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(T.T,{title:o({id:(0,n.OB)("HeaderNav.link.emailTemplates"),defaultMessage:"Email templates"})}),e.createElement(j.D,null,e.createElement(ae,{onEditClick:ge,canUpdate:ue}),re&&e.createElement(w,{template:X[Q],onToggle:H,onSubmit:he})))},oe=se},42722:(U,y,t)=>{t.d(y,{YX:()=>T,Gc:()=>d,OB:()=>v.Z});var e=t(41609),r=t.n(e);const T=g=>Object.keys(g).reduce((n,L)=>{const M=g[L].controllers,l=Object.keys(M).reduce((i,s)=>(r()(M[s])||(i[s]=M[s]),i),{});return r()(l)||(n[L]={controllers:l}),n},{});var j=t(83086);const d=g=>`/${j.Z}/${g}`;var v=t(97961)},49066:(U,y,t)=>{t.d(y,{D:()=>x});var e=t(85893),r=t(41580);const x=({children:T})=>(0,e.jsx)(r.x,{paddingLeft:10,paddingRight:10,children:T})},53979:(U,y,t)=>{t.d(y,{A:()=>M,T:()=>n});var e=t(85893),r=t(67294),x=t(88972);const T=l=>{const i=(0,r.useRef)(null),[s,m]=(0,r.useState)(!0),c=([f])=>{m(f.isIntersecting)};return(0,r.useEffect)(()=>{const f=i.current,Z=new IntersectionObserver(c,l);return f&&Z.observe(i.current),()=>{f&&Z.disconnect()}},[i,l]),[i,s]};var j=t(79698);const a=(l,i)=>{const s=(0,j.W)(i);(0,r.useLayoutEffect)(()=>{const m=new ResizeObserver(s);return Array.isArray(l)?l.forEach(c=>{c.current&&m.observe(c.current)}):l.current&&m.observe(l.current),()=>{m.disconnect()}},[l,s])};var d=t(41580),v=t(11047),g=t(75515);const n=l=>{const i=(0,r.useRef)(null),[s,m]=(0,r.useState)(null),[c,f]=T({root:null,rootMargin:"0px",threshold:0});return a(c,()=>{c.current&&m(c.current.getBoundingClientRect())}),(0,r.useEffect)(()=>{i.current&&m(i.current.getBoundingClientRect())},[i]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:s?.height},ref:c,children:f&&(0,e.jsx)(M,{ref:i,...l})}),!f&&(0,e.jsx)(M,{...l,sticky:!0,width:s?.width})]})};n.displayName="HeaderLayout";const L=(0,x.ZP)(d.x)`
  width: ${({width:l})=>l?`${l/16}rem`:void 0};
  z-index: ${({theme:l})=>l.zIndices[1]};
`,M=r.forwardRef(({navigationAction:l,primaryAction:i,secondaryAction:s,subtitle:m,title:c,sticky:f,width:Z,...I},S)=>{const A=typeof m=="string";return f?(0,e.jsx)(L,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:Z,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(v.k,{justifyContent:"space-between",children:[(0,e.jsxs)(v.k,{children:[l&&(0,e.jsx)(d.x,{paddingRight:3,children:l}),(0,e.jsxs)(d.x,{children:[(0,e.jsx)(g.Z,{variant:"beta",as:"h1",...I,children:c}),A?(0,e.jsx)(g.Z,{variant:"pi",textColor:"neutral600",children:m}):m]}),s?(0,e.jsx)(d.x,{paddingLeft:4,children:s}):null]}),(0,e.jsx)(v.k,{children:i?(0,e.jsx)(d.x,{paddingLeft:2,children:i}):void 0})]})}):(0,e.jsxs)(d.x,{ref:S,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:l?6:8,background:"neutral100","data-strapi-header":!0,children:[l?(0,e.jsx)(d.x,{paddingBottom:2,children:l}):null,(0,e.jsxs)(v.k,{justifyContent:"space-between",children:[(0,e.jsxs)(v.k,{minWidth:0,children:[(0,e.jsx)(g.Z,{as:"h1",variant:"alpha",...I,children:c}),s?(0,e.jsx)(d.x,{paddingLeft:4,children:s}):null]}),i]}),A?(0,e.jsx)(g.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:m}):m]})})},185:(U,y,t)=>{t.d(y,{o:()=>j});var e=t(85893),r=t(88972),x=t(41580);const T=(0,r.ZP)(x.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,j=({labelledBy:a="main-content-title",...d})=>(0,e.jsx)(T,{"aria-labelledby":a,as:"main",id:"main-content",tabIndex:-1,...d})}}]);