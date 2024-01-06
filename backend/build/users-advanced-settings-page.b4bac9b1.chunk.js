"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[9460],{93084:(A,f,t)=>{t.r(f),t.d(f,{default:()=>G});var e=t(67294),o=t(14087),p=t(185),h=t(53979),y=t(49066),S=t(29728),l=t(41580),v=t(11047),g=t(75515),x=t(11276),O=t(67819),E=t(40619),a=t(82562),n=t(30422),i=t(85018),d=t(41054),r=t(86896),c=t(88767),B=t(84419),s=t(42722);const T=async()=>{const{get:u}=(0,n.tg)(),{data:M}=await u((0,s.Gc)("advanced"));return M},R=u=>{const{put:M}=(0,n.tg)();return M((0,s.Gc)("advanced"),u)},z=[{intlLabel:{id:(0,s.OB)("EditForm.inputToggle.label.email"),defaultMessage:"One account per email address"},description:{id:(0,s.OB)("EditForm.inputToggle.description.email"),defaultMessage:"Disallow the user to create multiple accounts using the same email address with different authentication providers."},name:"unique_email",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,s.OB)("EditForm.inputToggle.label.sign-up"),defaultMessage:"Enable sign-ups"},description:{id:(0,s.OB)("EditForm.inputToggle.description.sign-up"),defaultMessage:"When disabled (OFF), the registration process is forbidden. No one can subscribe anymore no matter the used provider."},name:"allow_register",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,s.OB)("EditForm.inputToggle.label.email-reset-password"),defaultMessage:"Reset password page"},description:{id:(0,s.OB)("EditForm.inputToggle.description.email-reset-password"),defaultMessage:"URL of your application's reset password page."},placeholder:{id:(0,s.OB)("EditForm.inputToggle.placeholder.email-reset-password"),defaultMessage:"ex: https://youtfrontend.com/reset-password"},name:"email_reset_password",type:"text",size:{col:6,xs:12}},{intlLabel:{id:(0,s.OB)("EditForm.inputToggle.label.email-confirmation"),defaultMessage:"Enable email confirmation"},description:{id:(0,s.OB)("EditForm.inputToggle.description.email-confirmation"),defaultMessage:"When enabled (ON), new registered users receive a confirmation email."},name:"email_confirmation",type:"bool",size:{col:12,xs:12}},{intlLabel:{id:(0,s.OB)("EditForm.inputToggle.label.email-confirmation-redirection"),defaultMessage:"Redirection url"},description:{id:(0,s.OB)("EditForm.inputToggle.description.email-confirmation-redirection"),defaultMessage:"After you confirmed your email, choose where you will be redirected."},placeholder:{id:(0,s.OB)("EditForm.inputToggle.placeholder.email-confirmation-redirection"),defaultMessage:"ex: https://youtfrontend.com/email-confirmation"},name:"email_confirmation_redirection",type:"text",size:{col:6,xs:12}}];var L=t(87561);const C=new RegExp("(^$)|((.+:\\/\\/.*)(d*)\\/?(.*))"),U=L.Ry().shape({email_confirmation_redirection:L.nK().when("email_confirmation",{is:!0,then:L.Z_().matches(C).required(),otherwise:L.Z_().nullable()}),email_reset_password:L.Z_(n.I0.string).matches(C,n.I0.regex).nullable()}),W=()=>e.createElement(n.O4,{permissions:B._.readAdvancedSettings},e.createElement(N,null)),N=()=>{const{formatMessage:u}=(0,r.Z)(),M=(0,n.lm)(),{lockApp:H,unlockApp:F}=(0,n.o1)(),{notifyStatus:K}=(0,o.G)(),$=(0,c.useQueryClient)();(0,n.go)();const{isLoading:Q,allowedActions:{canUpdate:D}}=(0,n.ss)({update:B._.updateAdvancedSettings}),{status:X,data:I}=(0,c.useQuery)("advanced",()=>T(),{onSuccess(){K(u({id:(0,s.OB)("Form.advancedSettings.data.loaded"),defaultMessage:"Advanced settings data has been loaded"}))},onError(){M({type:"warning",message:{id:(0,s.OB)("notification.error"),defaultMessage:"An error occured"}})}}),J=Q||X!=="success",Z=(0,c.useMutation)(b=>R(b),{async onSuccess(){await $.invalidateQueries("advanced"),M({type:"success",message:{id:(0,s.OB)("notification.success.saved"),defaultMessage:"Saved"}}),F()},onError(){M({type:"warning",message:{id:(0,s.OB)("notification.error"),defaultMessage:"An error occured"}}),F()},refetchActive:!0}),{isLoading:V}=Z,Y=async b=>{H();const j=b.email_confirmation?b.email_confirmation_redirection:"";await Z.mutateAsync({...b,email_confirmation_redirection:j})};return J?e.createElement(p.o,{"aria-busy":"true"},e.createElement(n.SL,{name:u({id:(0,s.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),e.createElement(h.T,{title:u({id:(0,s.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),e.createElement(y.D,null,e.createElement(n.dO,null))):e.createElement(p.o,{"aria-busy":V},e.createElement(n.SL,{name:u({id:(0,s.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"})}),e.createElement(d.J9,{onSubmit:Y,initialValues:I.settings,validateOnChange:!1,validationSchema:U,enableReinitialize:!0},({errors:b,values:j,handleChange:w,isSubmitting:k,dirty:q})=>e.createElement(n.l0,null,e.createElement(h.T,{title:u({id:(0,s.OB)("HeaderNav.link.advancedSettings"),defaultMessage:"Advanced Settings"}),primaryAction:e.createElement(S.z,{loading:k,type:"submit",disabled:D?!q:!D,startIcon:e.createElement(i.Z,null),size:"S"},u({id:"global.save",defaultMessage:"Save"}))}),e.createElement(y.D,null,e.createElement(l.x,{background:"neutral0",hasRadius:!0,shadow:"filterShadow",paddingTop:6,paddingBottom:6,paddingLeft:7,paddingRight:7},e.createElement(v.k,{direction:"column",alignItems:"stretch",gap:4},e.createElement(g.Z,{variant:"delta",as:"h2"},u({id:"global.settings",defaultMessage:"Settings"})),e.createElement(x.r,{gap:6},e.createElement(O.P,{col:6,s:12},e.createElement(E.P,{label:u({id:(0,s.OB)("EditForm.inputSelect.label.role"),defaultMessage:"Default role for authenticated users"}),value:j.default_role,hint:u({id:(0,s.OB)("EditForm.inputSelect.description.role"),defaultMessage:"It will attach the new authenticated user to the selected role."}),onChange:m=>w({target:{name:"default_role",value:m}})},I.roles.map(m=>e.createElement(a.W,{key:m.type,value:m.type},m.name)))),z.map(m=>{let P=j[m.name];return P||(P=m.type==="bool"?!1:""),e.createElement(O.P,{key:m.name,...m.size},e.createElement(n.jm,{...m,value:P,error:b[m.name],disabled:m.name==="email_confirmation_redirection"&&j.email_confirmation===!1,onChange:w}))}))))))))},G=W},42722:(A,f,t)=>{t.d(f,{YX:()=>h,Gc:()=>l,OB:()=>v.Z});var e=t(41609),o=t.n(e);const h=g=>Object.keys(g).reduce((x,O)=>{const E=g[O].controllers,a=Object.keys(E).reduce((n,i)=>(o()(E[i])||(n[i]=E[i]),n),{});return o()(a)||(x[O]={controllers:a}),x},{});var y=t(83086);const l=g=>`/${y.Z}/${g}`;var v=t(97961)},49066:(A,f,t)=>{t.d(f,{D:()=>p});var e=t(85893),o=t(41580);const p=({children:h})=>(0,e.jsx)(o.x,{paddingLeft:10,paddingRight:10,children:h})},53979:(A,f,t)=>{t.d(f,{A:()=>E,T:()=>x});var e=t(85893),o=t(67294),p=t(88972);const h=a=>{const n=(0,o.useRef)(null),[i,d]=(0,o.useState)(!0),r=([c])=>{d(c.isIntersecting)};return(0,o.useEffect)(()=>{const c=n.current,B=new IntersectionObserver(r,a);return c&&B.observe(n.current),()=>{c&&B.disconnect()}},[n,a]),[n,i]};var y=t(79698);const S=(a,n)=>{const i=(0,y.W)(n);(0,o.useLayoutEffect)(()=>{const d=new ResizeObserver(i);return Array.isArray(a)?a.forEach(r=>{r.current&&d.observe(r.current)}):a.current&&d.observe(a.current),()=>{d.disconnect()}},[a,i])};var l=t(41580),v=t(11047),g=t(75515);const x=a=>{const n=(0,o.useRef)(null),[i,d]=(0,o.useState)(null),[r,c]=h({root:null,rootMargin:"0px",threshold:0});return S(r,()=>{r.current&&d(r.current.getBoundingClientRect())}),(0,o.useEffect)(()=>{n.current&&d(n.current.getBoundingClientRect())},[n]),(0,e.jsxs)(e.Fragment,{children:[(0,e.jsx)("div",{style:{height:i?.height},ref:r,children:c&&(0,e.jsx)(E,{ref:n,...a})}),!c&&(0,e.jsx)(E,{...a,sticky:!0,width:i?.width})]})};x.displayName="HeaderLayout";const O=(0,p.ZP)(l.x)`
  width: ${({width:a})=>a?`${a/16}rem`:void 0};
  z-index: ${({theme:a})=>a.zIndices[1]};
`,E=o.forwardRef(({navigationAction:a,primaryAction:n,secondaryAction:i,subtitle:d,title:r,sticky:c,width:B,...s},T)=>{const R=typeof d=="string";return c?(0,e.jsx)(O,{paddingLeft:6,paddingRight:6,paddingTop:3,paddingBottom:3,position:"fixed",top:0,right:0,background:"neutral0",shadow:"tableShadow",width:B,"data-strapi-header-sticky":!0,children:(0,e.jsxs)(v.k,{justifyContent:"space-between",children:[(0,e.jsxs)(v.k,{children:[a&&(0,e.jsx)(l.x,{paddingRight:3,children:a}),(0,e.jsxs)(l.x,{children:[(0,e.jsx)(g.Z,{variant:"beta",as:"h1",...s,children:r}),R?(0,e.jsx)(g.Z,{variant:"pi",textColor:"neutral600",children:d}):d]}),i?(0,e.jsx)(l.x,{paddingLeft:4,children:i}):null]}),(0,e.jsx)(v.k,{children:n?(0,e.jsx)(l.x,{paddingLeft:2,children:n}):void 0})]})}):(0,e.jsxs)(l.x,{ref:T,paddingLeft:10,paddingRight:10,paddingBottom:8,paddingTop:a?6:8,background:"neutral100","data-strapi-header":!0,children:[a?(0,e.jsx)(l.x,{paddingBottom:2,children:a}):null,(0,e.jsxs)(v.k,{justifyContent:"space-between",children:[(0,e.jsxs)(v.k,{minWidth:0,children:[(0,e.jsx)(g.Z,{as:"h1",variant:"alpha",...s,children:r}),i?(0,e.jsx)(l.x,{paddingLeft:4,children:i}):null]}),n]}),R?(0,e.jsx)(g.Z,{variant:"epsilon",textColor:"neutral600",as:"p",children:d}):d]})})},185:(A,f,t)=>{t.d(f,{o:()=>y});var e=t(85893),o=t(88972),p=t(41580);const h=(0,o.ZP)(p.x)`
  // To prevent global outline on focus visible to force an outline when Main is focused
  &:focus-visible {
    outline: none;
  }
`,y=({labelledBy:S="main-content-title",...l})=>(0,e.jsx)(h,{"aria-labelledby":S,as:"main",id:"main-content",tabIndex:-1,...l})}}]);
