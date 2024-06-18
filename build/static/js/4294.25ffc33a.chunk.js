"use strict";(self.webpackChunkmr_education_system=self.webpackChunkmr_education_system||[]).push([[4294],{54294:(e,r,t)=>{t.r(r),t.d(r,{default:()=>D});var a=t(65043),o=t(60184),s=t(12110),l=t(26494),n=t(98587),i=t(58168),c=t(58387),d=t(68606),m=t(44350),p=t(34535),g=t(59662),x=t(70579);const u=(0,g.A)((0,x.jsx)("path",{d:"M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"}),"Person");var f=t(57056),h=t(32400);function y(e){return(0,h.Ay)("MuiAvatar",e)}(0,f.A)("MuiAvatar",["root","colorDefault","circular","rounded","square","img","fallback"]);var b=t(4162);const v=["alt","children","className","component","slots","slotProps","imgProps","sizes","src","srcSet","variant"],A=(0,m.h)("MuiAvatar"),j=(0,p.Ay)("div",{name:"MuiAvatar",slot:"Root",overridesResolver:(e,r)=>{const{ownerState:t}=e;return[r.root,r[t.variant],t.colorDefault&&r.colorDefault]}})((e=>{let{theme:r}=e;return{position:"relative",display:"flex",alignItems:"center",justifyContent:"center",flexShrink:0,width:40,height:40,fontFamily:r.typography.fontFamily,fontSize:r.typography.pxToRem(20),lineHeight:1,borderRadius:"50%",overflow:"hidden",userSelect:"none",variants:[{props:{variant:"rounded"},style:{borderRadius:(r.vars||r).shape.borderRadius}},{props:{variant:"square"},style:{borderRadius:0}},{props:{colorDefault:!0},style:(0,i.A)({color:(r.vars||r).palette.background.default},r.vars?{backgroundColor:r.vars.palette.Avatar.defaultBg}:(0,i.A)({backgroundColor:r.palette.grey[400]},r.applyStyles("dark",{backgroundColor:r.palette.grey[600]})))}]}})),S=(0,p.Ay)("img",{name:"MuiAvatar",slot:"Img",overridesResolver:(e,r)=>r.img})({width:"100%",height:"100%",textAlign:"center",objectFit:"cover",color:"transparent",textIndent:1e4}),N=(0,p.Ay)(u,{name:"MuiAvatar",slot:"Fallback",overridesResolver:(e,r)=>r.fallback})({width:"75%",height:"75%"});const w=a.forwardRef((function(e,r){const t=A({props:e,name:"MuiAvatar"}),{alt:o,children:s,className:l,component:m="div",slots:p={},slotProps:g={},imgProps:u,sizes:f,src:h,srcSet:w,variant:C="circular"}=t,k=(0,n.A)(t,v);let R=null;const P=function(e){let{crossOrigin:r,referrerPolicy:t,src:o,srcSet:s}=e;const[l,n]=a.useState(!1);return a.useEffect((()=>{if(!o&&!s)return;n(!1);let e=!0;const a=new Image;return a.onload=()=>{e&&n("loaded")},a.onerror=()=>{e&&n("error")},a.crossOrigin=r,a.referrerPolicy=t,a.src=o,s&&(a.srcset=s),()=>{e=!1}}),[r,t,o,s]),l}((0,i.A)({},u,{src:h,srcSet:w})),F=h||w,B=F&&"error"!==P,D=(0,i.A)({},t,{colorDefault:!B,component:m,variant:C}),I=(e=>{const{classes:r,variant:t,colorDefault:a}=e,o={root:["root",t,a&&"colorDefault"],img:["img"],fallback:["fallback"]};return(0,d.A)(o,y,r)})(D),[z,Z]=(0,b.A)("img",{className:I.img,elementType:S,externalForwardedProps:{slots:p,slotProps:{img:(0,i.A)({},u,g.img)}},additionalProps:{alt:o,src:h,srcSet:w,sizes:f},ownerState:D});return R=B?(0,x.jsx)(z,(0,i.A)({},Z)):s||0===s?s:F&&o?o[0]:(0,x.jsx)(N,{ownerState:D,className:I.fallback}),(0,x.jsx)(j,(0,i.A)({as:m,ownerState:D,className:(0,c.A)(I.root,l),ref:r},k,{children:R}))}));var C=t(85865),k=t(17392),R=t(73216);const P=e=>{let{name:r,email:t,phone:a,image:n,classes:i,subjects:c}=e;const d=(0,R.Zp)();return(0,x.jsx)(s.A,{style:{backgroundColor:"#0B1739",color:"white",borderRadius:"10px",border:"1px solid rgba(255, 255, 255, 0.1)"},className:"p-0 w-full shadow-lg",children:(0,x.jsxs)(l.A,{className:"flex flex-col items-start p-6 gap-3",children:[(0,x.jsxs)("div",{className:"flex items-center mb-4 w-full",children:[(0,x.jsx)(w,{alt:r,src:n,style:{width:"80px",height:"80px"},className:"mr-4"}),(0,x.jsxs)("div",{className:"flex-1",children:[(0,x.jsx)(C.A,{variant:"h6",className:"font-helvetica",children:r}),(0,x.jsx)(C.A,{variant:"body2",className:"text-gray-400 font-helvetica text-sm",children:t}),(0,x.jsx)(C.A,{variant:"body2",className:"text-gray-400 font-helvetica text-sm",children:a})]}),(0,x.jsx)(k.A,{onClick:()=>{d("/staffInformation")},className:"text-white",children:(0,x.jsx)(o.Ny1,{style:{fontSize:"1.2em",color:"white"}})})]}),(0,x.jsxs)("div",{className:"w-full flex items-center gap-2 mb-2",children:[(0,x.jsx)(C.A,{variant:"body2",className:"text-gray-400 font-helvetica text-sm",children:"Primary Class -"}),(0,x.jsx)("div",{className:"flex flex-wrap gap-1",children:i.map(((e,r)=>(0,x.jsx)("span",{style:{backgroundColor:"rgba(54, 199, 195, 0.2)",color:"#36C7C3"},className:"px-2 py-1 rounded-full font-helvetica",children:e},r)))})]}),(0,x.jsx)("div",{className:"w-full flex flex-wrap gap-1 mt-2",children:c.map(((e,r)=>(0,x.jsx)("span",{style:{backgroundColor:"rgba(54, 199, 108, 0.2)",color:"#36C76C"},className:"px-2 py-1 rounded-full font-helvetica",children:e},r)))})]})})},F=()=>{const e=(0,R.Zp)();return(0,x.jsxs)("div",{style:{width:"100%",height:"104px",borderRadius:"12px",border:"0.6px solid #343B4F",opacity:"1",backgroundColor:"#0B1739",display:"flex",alignItems:"center",justifyContent:"space-between",color:"white",margin:"0 auto",padding:"20px 30px",boxSizing:"border-box"},children:[(0,x.jsxs)("div",{style:{display:"flex",alignItems:"center",flex:1},children:[(0,x.jsx)("input",{type:"text",placeholder:"Search Name, Enrollment, Standard",style:{width:"332px",backgroundColor:"#081028",color:"#fff",borderRadius:"5px",padding:"10px",marginRight:"20px"}}),(0,x.jsx)("select",{style:{backgroundColor:"#081028",color:"#fff",border:"1px solid #343B4F",borderRadius:"5px",padding:"10px",marginRight:"20px"},children:(0,x.jsx)("option",{children:"Select STD"})}),(0,x.jsx)("select",{style:{backgroundColor:"#081028",color:"#fff",border:"1px solid #343B4F",borderRadius:"5px",padding:"10px",marginRight:"20px"},children:(0,x.jsx)("option",{children:"Select City"})}),(0,x.jsxs)("button",{style:{backgroundColor:"transparent",color:"#fff",border:"1px solid #343B4F",borderRadius:"5px",padding:"10px",display:"flex",alignItems:"center"},children:[(0,x.jsx)("span",{style:{marginRight:"5px"},children:"\u2715"})," Clear All"]})]}),(0,x.jsxs)("button",{onClick:()=>{e("/addStaff")},style:{backgroundColor:"#fff",color:"#0B1739",border:"1px solid #343B4F",borderRadius:"5px",padding:"10px",display:"flex",alignItems:"center"},children:[(0,x.jsx)(o.NPy,{style:{marginRight:"5px"}})," Add Staff"]})]})},B=[{name:"Chirag Gondaliya",email:"abcorg@gmail.com",number:"+91 6353264115",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTISlGKcE78vh9ZCADuYZ7ZKi15wgU2pydPA&s",icon:(0,x.jsx)(o.Ny1,{style:{fontSize:"1.2em"}}),standardName:"Standard",standard:"10th",enrollment:"45675467",enrollmentName:"enrollment"},{name:"Namya Gondaliya",email:"abcorg2@gmail.com",number:"+91 6353264116",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTISlGKcE78vh9ZCADuYZ7ZKi15wgU2pydPA&s",icon:(0,x.jsx)(o.Ny1,{style:{fontSize:"1.2em"}}),standardName:"Standard",standard:"9th",enrollment:"45675468",enrollmentName:"enrollment"},{name:"John Doe",email:"johndoe@gmail.com",number:"+91 6353264117",image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTISlGKcE78vh9ZCADuYZ7ZKi15wgU2pydPA&s",icon:(0,x.jsx)(o.Ny1,{style:{fontSize:"1.2em"}}),standardName:"Standard",standard:"11th",enrollment:"45675469",enrollmentName:"enrollment"}],D=()=>(0,x.jsxs)("div",{className:" min-h-screen p-10",children:[(0,x.jsx)(F,{}),(0,x.jsx)("div",{className:"grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-10",children:B.map(((e,r)=>(0,x.jsx)(P,{name:e.name,email:e.email,phone:e.number,image:e.image,classes:["5B","5B","5B"],subjects:["Social Science","Social Science","Social Science"]},r)))})]})},4162:(e,r,t)=>{t.d(r,{A:()=>p});var a=t(58168),o=t(98587),s=t(47042),l=t(4430),n=t(18413),i=t(62205);const c=["className","elementType","ownerState","externalForwardedProps","getSlotOwnerState","internalForwardedProps"],d=["component","slots","slotProps"],m=["component"];function p(e,r){const{className:t,elementType:p,ownerState:g,externalForwardedProps:x,getSlotOwnerState:u,internalForwardedProps:f}=r,h=(0,o.A)(r,c),{component:y,slots:b={[e]:void 0},slotProps:v={[e]:void 0}}=x,A=(0,o.A)(x,d),j=b[e]||p,S=(0,l.Y)(v[e],g),N=(0,n.p)((0,a.A)({className:t},h,{externalForwardedProps:"root"===e?A:void 0,externalSlotProps:S})),{props:{component:w},internalRef:C}=N,k=(0,o.A)(N.props,m),R=(0,s.A)(C,null==S?void 0:S.ref,r.ref),P=u?u(k):{},F=(0,a.A)({},g,P),B="root"===e?w||y:w,D=(0,i.X)(j,(0,a.A)({},"root"===e&&!y&&!b[e]&&f,"root"!==e&&!b[e]&&f,k,B&&{as:B},{ref:R}),F);return Object.keys(P).forEach((e=>{delete D[e]})),[j,D]}},44350:(e,r,t)=>{t.d(r,{h:()=>o});var a=t(72876);function o(e){return a.A}}}]);
//# sourceMappingURL=4294.25ffc33a.chunk.js.map