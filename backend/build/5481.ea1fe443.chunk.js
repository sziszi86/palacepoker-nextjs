"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[5481],{7761:(C,r,t)=>{t.d(r,{pl:()=>h,aY:()=>U,q5:()=>g.q});var i=t(67294),n=t(30422),l=t(25804),u=t(18172);const T={data:[],isLoading:!0},A=(s,a)=>(0,u.ZP)(s,e=>{switch(a.type){case"GET_DATA_SUCCEEDED":{e.data=a.data,e.isLoading=!1;break}case"GET_DATA_ERROR":{e.isLoading=!1;break}default:return e}}),h=({ssoEnabled:s})=>{const[a,e]=(0,i.useReducer)(A,T),E=(0,n.lm)(),{get:m}=(0,n.kY)();return(0,i.useEffect)(()=>{(async()=>{try{if(!s){e({type:"GET_DATA_SUCCEEDED",data:[]});return}const{data:c}=await m((0,l.IF)("providers"));e({type:"GET_DATA_SUCCEEDED",data:c})}catch(c){console.error(c),e({type:"GET_DATA_ERROR"}),E({type:"warning",message:{id:"notification.error"}})}})()},[m,s,E]),a};var d=t(14293),I=t.n(d),f=t(86896),P=t(16550),g=t(71926);const R="strapi-notification-seat-limit",y="https://cloud.strapi.io/profile/billing",M="https://strapi.io/billing/request-seats",U=()=>{const{formatMessage:s}=(0,f.Z)();let{license:a,isError:e,isLoading:E}=(0,g.q)();const m=(0,n.lm)(),{pathname:L}=(0,P.TH)(),{enforcementUserCount:c,permittedSeats:v,licenseLimitStatus:o,isHostedOnStrapiCloud:D}=a;(0,i.useEffect)(()=>{if(e||E)return;const N=!I()(v)&&!window.sessionStorage.getItem(`${R}-${L}`)&&(o==="AT_LIMIT"||o==="OVER_LIMIT");let p;o==="OVER_LIMIT"?p="warning":o==="AT_LIMIT"&&(p="softWarning"),N&&m({type:p,message:s({id:"notification.ee.warning.over-.message",defaultMessage:"Add seats to {licenseLimitStatus, select, OVER_LIMIT {invite} other {re-enable}} Users. If you already did it but it's not reflected in Strapi yet, make sure to restart your app."},{licenseLimitStatus:o}),title:s({id:"notification.ee.warning.at-seat-limit.title",defaultMessage:"{licenseLimitStatus, select, OVER_LIMIT {Over} other {At}} seat limit ({enforcementUserCount}/{permittedSeats})"},{licenseLimitStatus:o,enforcementUserCount:c,permittedSeats:v}),link:{url:D?y:M,label:s({id:"notification.ee.warning.seat-limit.link",defaultMessage:"{isHostedOnStrapiCloud, select, true {ADD SEATS} other {CONTACT SALES}}"},{isHostedOnStrapiCloud:D})},blockTransition:!0,onClose(){window.sessionStorage.setItem(`${R}-${L}`,!0)}})},[m,a,L,s,E,v,o,c,D,e])}},71926:(C,r,t)=>{t.d(r,{q:()=>u});var i=t(67294),n=t(30422),l=t(88767);function u({enabled:T}={enabled:!0}){const{get:S}=(0,n.kY)(),{data:A,isError:O,isLoading:h}=(0,l.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:f}}=await S("/admin/license-limit-information");return f},{enabled:T}),d=A??{},I=i.useCallback(f=>(d?.features??[]).find(g=>g.name===f)?.options??{},[d?.features]);return{license:d,getFeature:I,isError:O,isLoading:h}}},17403:(C,r,t)=>{t.r(r),t.d(r,{UserListPageEE:()=>u});var i=t(67294),n=t(61611),l=t(7761);function u(){return(0,l.aY)(),i.createElement(n.W,null)}}}]);
