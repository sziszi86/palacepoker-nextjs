"use strict";(self.webpackChunkbackend=self.webpackChunkbackend||[]).push([[5013],{71926:(C,o,t)=>{t.d(o,{q:()=>l});var e=t(67294),r=t(30422),s=t(88767);function l({enabled:E}={enabled:!0}){const{get:_}=(0,r.kY)(),{data:c,isError:n,isLoading:m}=(0,s.useQuery)(["ee","license-limit-info"],async()=>{const{data:{data:i}}=await _("/admin/license-limit-information");return i},{enabled:E}),a=c??{},g=e.useCallback(i=>(a?.features??[]).find(L=>L.name===i)?.options??{},[a?.features]);return{license:a,getFeature:g,isError:n,isLoading:m}}},65013:(C,o,t)=>{t.r(o),t.d(o,{AdminSeatInfoEE:()=>f});var e=t(67294),r=t(67819),s=t(75515),l=t(11047),E=t(84495),_=t(52624),c=t(36182),n=t(30422),m=t(51277),a=t(17772),g=t(86896),i=t(86706),M=t(36364),L=t(71926);const p="https://cloud.strapi.io/profile/billing",I="https://strapi.io/billing/request-seats",f=()=>{const{formatMessage:d}=(0,g.Z)(),A=(0,i.v9)(M._),{isLoading:O,allowedActions:{canRead:v,canCreate:R,canUpdate:U,canDelete:B}}=(0,n.ss)(A.settings.users),{license:{licenseLimitStatus:T,enforcementUserCount:D,permittedSeats:u,isHostedOnStrapiCloud:P},isError:W,isLoading:h}=(0,L.q)({enabled:!O&&v&&R&&U&&B});return W||(O||h)||!u?null:e.createElement(r.P,{col:6,s:12},e.createElement(s.Z,{variant:"sigma",textColor:"neutral600"},d({id:"Settings.application.admin-seats",defaultMessage:"Admin seats"})),e.createElement(l.k,{gap:2},e.createElement(l.k,null,e.createElement(s.Z,{as:"p"},d({id:"Settings.application.ee.admin-seats.count",defaultMessage:"<text>{enforcementUserCount}</text>/{permittedSeats}"},{permittedSeats:u,enforcementUserCount:D,text:K=>e.createElement(s.Z,{fontWeight:"semiBold",textColor:D>u?"danger500":null},K)}))),T==="OVER_LIMIT"&&e.createElement(E.u,{description:d({id:"Settings.application.ee.admin-seats.at-limit-tooltip",defaultMessage:"At limit: add seats to invite more users"})},e.createElement(_.J,{width:`${(0,n.Q1)(14)}rem`,height:`${(0,n.Q1)(14)}rem`,color:"danger500",as:m.Z}))),e.createElement(c.r,{href:P?p:I,isExternal:!0,endIcon:e.createElement(a.Z,null)},d({id:"Settings.application.ee.admin-seats.add-seats",defaultMessage:"{isHostedOnStrapiCloud, select, true {Add seats} other {Contact sales}}"},{isHostedOnStrapiCloud:P})))}}}]);
