"use strict";(self.webpackChunkmr_education_system=self.webpackChunkmr_education_system||[]).push([[8248],{83102:(e,t,s)=>{s.r(t),s.d(t,{default:()=>ue});var l=s(65043),i=s(36546),n=s(24056),r=s(85865),a=s(96446),o=s(11906),d=s(34535),c=s(63336),x=s(68903),m=s(39336),u=s(53193),h=s(67784),p=s(47196),j=s(94281),g=s(95540),f=s(63471),A=s(70579);const b=e=>{let{onDrop:t,files:s,onRemoveThumbnail:l,imgIcon:i,uploadMetadata:n}=e;const{getRootProps:a,getInputProps:o,isDragActive:d,inputRef:c}=(0,j.VB)({onDrop:t,accept:{...null===n||void 0===n?void 0:n.mimeType},multiple:!1}),x={dropzone:{...null!==s&&void 0!==s&&s.src?{padding:"10px"}:{padding:"20px"}}};return(0,A.jsxs)("div",{style:x.dropzone,className:"relative h-[208px] cursor-pointer bg-transparent flex justify-center items-center rounded-md",children:[(0,A.jsx)("svg",{className:"absolute top-0 left-0 w-full h-full",children:(0,A.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"none",stroke:"white",strokeDasharray:"9 9",strokeWidth:"2",rx:"10",ry:"10"})}),(0,A.jsx)("div",{className:"relative z-10 w-full h-full flex justify-center items-center",children:null!==s&&void 0!==s&&s.src?(0,A.jsxs)(A.Fragment,{children:[(0,A.jsx)("img",{src:null===s||void 0===s?void 0:s.src,className:"drop-img"}),(0,A.jsxs)("div",{className:"alter-section",children:[(0,A.jsx)("span",{onClick:()=>{},children:(0,A.jsxs)("div",{...a(),className:"h-full",children:[(0,A.jsx)("input",{...o()}),(0,A.jsx)(g.A,{})]})}),(0,A.jsx)("span",{onClick:l,children:(0,A.jsx)(f.A,{style:{marginLeft:"3px"}})})]})]}):(0,A.jsxs)("div",{...a(),className:"h-full w-full flex justify-center items-center",children:[(0,A.jsx)("input",{...o()}),d?(0,A.jsx)("p",{children:"Drop the files here..."}):(0,A.jsxs)("div",{className:"flex flex-col items-center justify-center h-full",children:[i,(0,A.jsx)("p",{children:(0,A.jsx)(r.A,{variant:"thumbnailContentPlaceholder",children:null===n||void 0===n?void 0:n.title})}),(0,A.jsx)(r.A,{variant:"thumbnailContentPlaceholder",children:null===n||void 0===n?void 0:n.description})]})]})})]})};var v=s(77977),y=s(80726),w=s.n(y);const C=()=>{const[e,t]=(0,l.useState)("");return(0,A.jsxs)("div",{children:[(0,A.jsx)(v.CKEditor,{editor:w(),data:e,onChange:(e,s)=>{const l=s.getData();t(l)},config:{toolbar:["bold","italic","link","bulletedList","numberedList","uploadImage","undo","redo","fontColor","fontBackgroundColor"],toolbarLocation:"bottom"},style:{minHeight:"90px"}}),(0,A.jsx)("div",{style:{marginTop:"20px"},children:(0,A.jsx)("div",{dangerouslySetInnerHTML:{__html:e}})})]})};var k=s(97352);const N=e=>{let{title:t,details:s}=e;return(0,A.jsxs)("div",{className:"relative flex flex-col items-start gap-3 w-full",children:[(0,A.jsx)("div",{className:"absolute w-1 h-7 left-0 top-[2px] bg-[#F6B336] rounded-full"}),(0,A.jsx)("h6",{className:"text-3xl font-bold dark:text-orange ml-2",children:t}),(0,A.jsx)(r.A,{variant:"addCourseSubtitle",className:"!mb-5",children:s})]})};var S=s(5945),B=s.n(S),D=s(60184);const I=e=>{let{onDrop:t,isUpload:s}=e;const{getRootProps:l,getInputProps:i,isDragActive:n,inputRef:a}=(0,j.VB)({onDrop:t,accept:{"video/*":[".mp4",".mpeg"]},multiple:!1});return(0,A.jsxs)("div",{className:"relative h-[208px] cursor-pointer bg-transparent flex justify-center items-center rounded-md",children:[(0,A.jsx)("svg",{className:"absolute top-0 left-0 w-full h-full",children:(0,A.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"none",stroke:"white",strokeDasharray:"9 9",strokeWidth:"2",rx:"6",ry:"6"})}),(0,A.jsx)("div",{className:"relative z-10 w-full h-full flex justify-center items-center",children:s?(0,A.jsx)(B(),{url:"http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/BigBuckBunny.mp4",playing:!0,controls:!0,width:"100%",height:"100%"}):(0,A.jsxs)("div",{...l(),className:"h-full w-full flex justify-center items-center",children:[(0,A.jsx)("input",{...i()}),n?(0,A.jsx)("p",{children:"Drop the files here..."}):(0,A.jsxs)("div",{className:"flex flex-col items-center justify-center h-full",children:[(0,A.jsx)(D.gSK,{size:30,style:{marginBottom:"20px"}}),(0,A.jsx)("p",{children:(0,A.jsx)(r.A,{variant:"thumbnailContentPlaceholder",children:"Upload Thumbnail Video"})}),(0,A.jsx)(r.A,{variant:"thumbnailContentPlaceholder",children:"Max File Size 50 MB"})]})]})})]})},M=(0,d.Ay)(a.A)((e=>{let{theme:t}=e;return{overflowY:"auto",maxHeight:"80vh",padding:t.spacing(2)}})),F=(0,d.Ay)(c.A)((e=>{let{theme:t}=e;return{backgroundColor:"dark"===t.palette.mode?"#1A2027":"transparent",...t.typography.body2,padding:t.spacing(1),textAlign:"center",color:"#F6B336"}}));const V=function(e){let{submitRef:t,files:s,setFiles:i,isUpload:n,setUpload:r,title:o,setTitle:d,setVideoUpload:c,isVideoUpload:j}=e;console.log(t,"submitRef");const g=(0,l.useCallback)((e=>{const t=[...s];t[0]={file:e[0],src:URL.createObjectURL(e[0])},console.log(t,"filesTemp"),i(t),r(!0)}),[s]),f=(0,l.useCallback)((e=>{const t=[...s];t[1]={file:e[0],src:URL.createObjectURL(e[0])},console.log(t),i(t),c(!0)}),[s]);return(0,A.jsxs)(M,{children:[(0,A.jsx)(N,{title:"Thumbnail",details:"Select or upload a picture that shows what's in your video. A good thumbnail stands out and draws viewers' attention."}),(0,A.jsx)(a.A,{sx:{flexGrow:1},children:(0,A.jsxs)(x.Ay,{container:!0,spacing:2,children:[(0,A.jsx)(x.Ay,{item:!0,xs:6,children:(0,A.jsx)(F,{children:(0,A.jsx)(b,{onDrop:g,files:null===s||void 0===s?void 0:s[0],onRemoveThumbnail:()=>{const e=[...s];e[0]={file:{},src:""},i(e)},imgIcon:(0,A.jsx)(p.EK7,{size:40,style:{marginBottom:"20px"}}),uploadMetadata:{title:"Upload Thumbnail",mimeType:[".pdf"],description:"Max File Size 50 MB"}})})}),(0,A.jsx)(x.Ay,{item:!0,xs:6,children:(0,A.jsx)(F,{children:(0,A.jsx)(I,{onDrop:f,isUpload:j})})})]})}),(0,A.jsx)(m.A,{sx:{background:e=>e.color.border_color,marginTop:"10px"}}),(0,A.jsx)(x.Ay,{container:!0,mt:2,children:(0,A.jsx)(x.Ay,{item:!0,xs:12,children:(0,A.jsxs)(F,{children:[(0,A.jsxs)("p",{className:"text-white text-left",children:["Title ",(0,A.jsx)("span",{className:"text-red-600",children:"*"})]}),(0,A.jsx)(u.A,{fullWidth:!0,sx:{m:1},children:(0,A.jsx)(h.A,{className:"w-4/12",variant:"outlined",placeholder:"Enter title",value:o,onChange:e=>{d(e.target.value)},fullWidth:!0,InputProps:{sx:{height:"2.5rem !important",background:k.A.secondary__fill__dark,border:"none",borderRadius:"0.375rem"}}})})]})})}),(0,A.jsx)(x.Ay,{container:!0,mt:2,mb:6,children:(0,A.jsx)(x.Ay,{item:!0,xs:12,children:(0,A.jsxs)(F,{children:[(0,A.jsxs)("p",{className:"text-white text-left",children:["Description ",(0,A.jsx)("span",{className:"text-red-600",children:"*"})]}),(0,A.jsx)(u.A,{fullWidth:!0,sx:{m:1},children:(0,A.jsx)(C,{})})]})})})]})};var T=s(26240),U=s(66423);const z=e=>{let{title:t,onSubmit:s}=e;return(0,A.jsxs)("div",{className:"relative h-[208px] cursor-pointer bg-transparent flex justify-center items-center rounded-md",onClick:s,children:[(0,A.jsx)("svg",{className:"absolute top-0 left-0 w-full h-full",children:(0,A.jsx)("rect",{x:"0",y:"0",width:"100%",height:"100%",fill:"none",stroke:"white",strokeDasharray:"9 9",strokeWidth:"2",rx:"6",ry:"6"})}),(0,A.jsxs)("div",{className:"relative z-10 flex justify-center flex-col items-center",children:[(0,A.jsx)(U.In,{icon:"material-symbols:add-circle-rounded",fontSize:40,style:{marginBottom:"20px"}}),(0,A.jsx)("p",{children:(0,A.jsx)(r.A,{variant:"materialAddContentPlaceholder",children:t})})]})]})},R={file:{},url:""},L=()=>({generateVideoCard:e=>Array(e).fill(R)}),P=(0,d.Ay)(c.A)((e=>{let{theme:t}=e;return{backgroundColor:"dark"===t.palette.mode?"#1A2027":"transparent",...t.typography.body2,padding:t.spacing(1),textAlign:"center",color:"#F6B336"}})),_=()=>{(0,T.A)();const e=L(),[t,s]=(0,l.useState)(e.generateVideoCard(3));return console.log("video",t),(0,A.jsxs)(a.A,{sx:{flexGrow:1},children:[(0,A.jsx)(N,{title:"Videos"}),(0,A.jsxs)(x.Ay,{container:!0,spacing:2,children:[t.map(((e,t)=>(0,A.jsx)(x.Ay,{item:!0,xs:6,md:4,children:(0,A.jsx)(P,{children:(0,A.jsx)(I,{})})},t))),(0,A.jsx)(x.Ay,{item:!0,xs:6,md:4,children:(0,A.jsx)(P,{children:(0,A.jsx)(z,{title:"Add Video",onSubmit:()=>{s((t=>[...t,...e.generateVideoCard(1)]))}})})})]})]})},W=(0,d.Ay)(c.A)((e=>{let{theme:t}=e;return{backgroundColor:"dark"===t.palette.mode?"#1A2027":"transparent",...t.typography.body2,padding:t.spacing(1),textAlign:"center",color:"#F6B336"}})),E=()=>{(0,T.A)();const e=L(),[t,s]=(0,l.useState)(e.generateVideoCard(3));return(0,A.jsxs)(a.A,{sx:{flexGrow:1},children:[(0,A.jsx)(N,{title:"Images"}),(0,A.jsxs)(x.Ay,{container:!0,spacing:2,children:[t.map(((e,t)=>(0,A.jsx)(x.Ay,{item:!0,xs:6,md:4,children:(0,A.jsx)(W,{children:(0,A.jsx)(b,{imgIcon:(0,A.jsx)(U.In,{icon:"grommet-icons:document-upload",fontSize:30,style:{marginBottom:"20px"}}),uploadMetadata:{title:"Upload Image",mimeType:[".png",".jpg",".jpeg",".gif"],description:"Max File Size 2 MB"}})})},t))),(0,A.jsx)(x.Ay,{item:!0,xs:6,md:4,children:(0,A.jsx)(W,{children:(0,A.jsx)(z,{title:"Add Image",onSubmit:()=>{s((t=>[...t,...e.generateVideoCard(1)]))}})})})]})]})};const Q=(0,s(46060).A)(c.A)((e=>{let{theme:t}=e;return{backgroundColor:"dark"===t.palette.mode?"#1A2027":"transparent",...t.typography.body2,padding:t.spacing(1),textAlign:"center",color:"#F6B336"}}));function G(){const e=L(),[t,s]=(0,l.useState)(e.generateVideoCard(3));return(0,A.jsxs)("div",{children:[(0,A.jsx)(N,{title:"Documents"}),(0,A.jsxs)(x.Ay,{container:!0,spacing:2,children:[t.map(((e,t)=>(0,A.jsx)(x.Ay,{item:!0,xs:6,md:4,children:(0,A.jsx)(Q,{children:(0,A.jsx)(b,{imgIcon:(0,A.jsx)(U.In,{icon:"grommet-icons:document-upload",fontSize:30,style:{marginBottom:"20px"}}),uploadMetadata:{title:"Upload 3D Model",mimeType:[".pdf"],description:"Max File Size 50 MB"}})})},t))),(0,A.jsx)(x.Ay,{item:!0,xs:6,md:4,children:(0,A.jsx)(Q,{children:(0,A.jsx)(z,{title:"Add Document",onSubmit:()=>{s((t=>[...t,...e.generateVideoCard(1)]))}})})})]})]})}const H=(0,d.Ay)(c.A)((e=>{let{theme:t}=e;return{backgroundColor:"dark"===t.palette.mode?"#1A2027":"transparent",...t.typography.body2,padding:t.spacing(1),textAlign:"center",color:"#F6B336"}})),K=()=>{const e=L(),[t,s]=(0,l.useState)(e.generateVideoCard(3));(0,T.A)();return(0,A.jsxs)("div",{children:[(0,A.jsx)(N,{title:"Documents"}),(0,A.jsxs)(x.Ay,{container:!0,spacing:2,children:[t.map(((e,t)=>(0,A.jsx)(x.Ay,{item:!0,xs:6,md:4,children:(0,A.jsx)(H,{children:(0,A.jsx)(b,{imgIcon:(0,A.jsx)(U.In,{icon:"grommet-icons:document-upload",fontSize:30,style:{marginBottom:"20px"}}),uploadMetadata:{title:"Upload Course",mimeType:[".pdf"],description:"Max File Size 15 MB"}})})},t))),(0,A.jsx)(x.Ay,{item:!0,xs:6,md:4,children:(0,A.jsx)(H,{children:(0,A.jsx)(z,{title:"Add Document",onSubmit:()=>{s((t=>[...t,...e.generateVideoCard(1)]))}})})})]})]})},O=(0,d.Ay)(c.A)((e=>{let{theme:t}=e;return{backgroundColor:"dark"===t.palette.mode?"#1A2027":"transparent",...t.typography.body2,padding:t.spacing(2),textAlign:"center",color:"#F6B336"}})),Y=()=>{(0,T.A)();const e=L(),[t,s]=(0,l.useState)(e.generateVideoCard(3));return(0,A.jsxs)("div",{children:[(0,A.jsx)(N,{title:"Question Bank"}),(0,A.jsxs)(x.Ay,{container:!0,spacing:2,children:[t.map(((e,t)=>(0,A.jsx)(x.Ay,{item:!0,xs:6,md:4,children:(0,A.jsx)(O,{children:(0,A.jsx)(b,{imgIcon:(0,A.jsx)(U.In,{icon:"grommet-icons:document-upload",fontSize:30,style:{marginBottom:"20px"}}),uploadMetadata:{title:"Upload Question Bank",mimeType:[".pdf"],description:"Max File Size 50 MB"}})})},t))),(0,A.jsx)(x.Ay,{item:!0,xs:6,md:4,children:(0,A.jsx)(O,{children:(0,A.jsx)(z,{title:"Add Document",onSubmit:()=>{s((t=>[...t,...e.generateVideoCard(1)]))}})})})]})]})};var q=s(57842),J=s(13766),X=s(86605),Z=s(40710),$=s(21337);const ee=s.p+"static/media/course.7ae28ad58737984e6730.png",te={backgroundColor:"#0A1931",color:"white",borderRadius:"10px","& .MuiAccordionSummary-root":{borderBottom:"1px solid white"},"& .MuiAccordionDetails-root":{borderTop:"1px solid white"}};function se(){return(0,A.jsxs)("div",{children:[(0,A.jsxs)(J.A,{sx:te,defaultExpanded:!0,children:[(0,A.jsx)(X.A,{expandIcon:(0,A.jsx)($.A,{style:{color:"white"}}),"aria-controls":"panel1-content",id:"panel1-header",children:(0,A.jsxs)("div",{className:"relative flex flex-col items-start  w-full ",children:[(0,A.jsx)("div",{className:"absolute w-1 h-7 left-0 top-0 bg-[#F6B336] rounded-full"}),(0,A.jsx)("p",{className:"dark:text-orange ml-2",children:"Basic Details"})]})}),(0,A.jsxs)(Z.A,{children:[(0,A.jsxs)("div",{className:"relative flex flex-row items-start justify-between w-full",children:[(0,A.jsx)("img",{src:ee,alt:"img-1",height:"150px",width:"250px"}),(0,A.jsx)("img",{src:ee,alt:"img-2",height:"150px",width:"250px"})]}),(0,A.jsx)("h6",{className:"mt-1",children:"STD - 10 Bharat No Varsho"}),(0,A.jsx)("p",{className:"mt-1",children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})]})]}),(0,A.jsxs)(J.A,{sx:te,children:[(0,A.jsx)(X.A,{expandIcon:(0,A.jsx)($.A,{style:{color:"white"}}),"aria-controls":"panel2-content",id:"panel2-header",children:(0,A.jsxs)("div",{className:"relative flex flex-col items-start  w-full ",children:[(0,A.jsx)("div",{className:"absolute w-1 h-7 left-0 top-0 bg-[#F6B336] rounded-full"}),(0,A.jsx)("p",{className:"dark:text-orange ml-2",children:"Courses"})]})}),(0,A.jsx)(Z.A,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})]}),(0,A.jsxs)(J.A,{sx:te,children:[(0,A.jsx)(X.A,{expandIcon:(0,A.jsx)($.A,{style:{color:"white"}}),"aria-controls":"panel4-content",id:"panel4-header",children:(0,A.jsxs)("div",{className:"relative flex flex-col items-start  w-full ",children:[(0,A.jsx)("div",{className:"absolute w-1 h-7 left-0 top-0 bg-[#F6B336] rounded-full"}),(0,A.jsx)("p",{className:"dark:text-orange ml-2",children:"Courses"})]})}),(0,A.jsx)(Z.A,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})]}),(0,A.jsxs)(J.A,{sx:te,children:[(0,A.jsx)(X.A,{expandIcon:(0,A.jsx)($.A,{style:{color:"white"}}),"aria-controls":"panel5-content",id:"panel5-header",children:(0,A.jsxs)("div",{className:"relative flex flex-col items-start  w-full ",children:[(0,A.jsx)("div",{className:"absolute w-1 h-7 left-0 top-0 bg-[#F6B336] rounded-full"}),(0,A.jsx)("p",{className:"dark:text-orange ml-2",children:"Question Bank"})]})}),(0,A.jsx)(Z.A,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})]}),(0,A.jsxs)(J.A,{sx:te,children:[(0,A.jsx)(X.A,{expandIcon:(0,A.jsx)($.A,{style:{color:"white"}}),"aria-controls":"panel5-content",id:"panel5-header",children:(0,A.jsxs)("div",{className:"relative flex flex-col items-start  w-full ",children:[(0,A.jsx)("div",{className:"absolute w-1 h-7 left-0 top-0 bg-[#F6B336] rounded-full"}),(0,A.jsx)("p",{className:"dark:text-orange ml-2",children:"3D Models"})]})}),(0,A.jsx)(Z.A,{children:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."})]})]})}var le=s(24836),ie=s(90035),ne=s(26600),re=s(17392),ae=s(35316),oe=s(74802);const de=l.forwardRef((function(e,t){return(0,A.jsx)(le.A,{direction:"up",ref:t,...e})})),ce=e=>{const{open:t,handleClose:s}=e;return(0,A.jsx)(l.Fragment,{children:(0,A.jsxs)(ie.A,{open:t,TransitionComponent:de,keepMounted:!0,onClose:s,"aria-describedby":"alert-dialog-slide-description",children:[(0,A.jsxs)(ne.A,{sx:{padding:"10px 0"},children:[(0,A.jsx)(r.A,{sx:{color:"white"},children:"Preview"}),(0,A.jsx)(re.A,{"aria-label":"close",onClick:s,sx:{position:"absolute",right:8,top:8,color:"white"},children:(0,A.jsx)(oe.A,{})})]}),(0,A.jsx)(ae.A,{children:(0,A.jsx)(se,{})})]})})};function xe(e){const{children:t,value:s,index:l,...i}=e;return(0,A.jsx)("div",{role:"tabpanel",hidden:s!==l,id:"simple-tabpanel-".concat(l),"aria-labelledby":"simple-tab-".concat(l),...i,children:s===l&&(0,A.jsx)(a.A,{sx:{p:3},children:(0,A.jsx)(r.A,{children:t})})})}function me(e){return{id:"simple-tab-".concat(e),"aria-controls":"simple-tabpanel-".concat(e)}}function ue(){const[e,t]=(0,l.useState)(0),[s,d]=(0,l.useState)([{file:{},src:""},{file:{},src:""}]),[c,x]=(0,l.useState)({files:{},src:""}),[m,u]=(0,l.useState)({files:{},src:""}),[h,p]=(0,l.useState)(!1),[j,g]=(0,l.useState)(!1),[f,b]=(0,l.useState)(""),[v,y]=(0,l.useState)({}),[w,C]=(0,l.useState)(""),[k,N]=(0,l.useState)(!1),[S,B]=(0,l.useState)(!1),D=(0,l.useRef)();return(0,A.jsxs)(A.Fragment,{children:[(0,A.jsxs)(a.A,{sx:{width:"100%"},children:[(0,A.jsxs)("div",{className:"flex justify-start items-center ml-7",children:[(0,A.jsx)("div",{className:"h-1 w-7 bg-primary rotate-90"}),(0,A.jsx)(r.A,{variant:"h5",children:"Content"})]}),(0,A.jsxs)("div",{className:" p-8",children:[(0,A.jsx)(a.A,{sx:{borderBottom:1,borderColor:"divider"},children:(0,A.jsxs)(i.A,{value:e,onChange:(e,s)=>{t(s)},textColor:"primary",indicatorColor:"secondary",variant:"scrollable","aria-label":"basic tabs example",children:[(0,A.jsx)(n.A,{label:"Basic Details",...me(0)}),(0,A.jsx)(n.A,{label:"Videos",...me(1)}),(0,A.jsx)(n.A,{label:"Images",...me(2)}),(0,A.jsx)(n.A,{label:"Documents Content",...me(3)}),(0,A.jsx)(n.A,{label:"Question Bank Content",...me(4)}),(0,A.jsx)(n.A,{label:"3D Models",...me(5)})]})}),(0,A.jsxs)("div",{className:"border-[0.6px] border-dropdown__border rounded-md",children:[(0,A.jsx)(xe,{value:e,index:0,children:(0,A.jsx)(V,{submitRef:D,files:s,setFiles:d,isUpload:h,setUpload:p,title:f,setTitle:b,setVideoUpload:g,isVideoUpload:j})}),(0,A.jsx)(xe,{value:e,index:1,children:(0,A.jsx)(_,{})}),(0,A.jsx)(xe,{value:e,index:2,children:(0,A.jsx)(E,{})}),(0,A.jsx)(xe,{value:e,index:3,children:(0,A.jsx)(K,{})}),(0,A.jsx)(xe,{value:e,index:4,children:(0,A.jsx)(Y,{})}),(0,A.jsx)(xe,{value:e,index:5,children:(0,A.jsx)(G,{})})]})]}),(0,A.jsxs)("div",{className:e>0?"flex justify-between mt-4":"flex justify-end mt-4",children:[e>0&&(0,A.jsxs)(o.A,{variant:"outline-add-button",onClick:()=>{e>0&&t(e-1)},children:[(0,A.jsx)("img",{src:q.A,style:{marginRight:"1rem",transform:"rotate(180deg)"}}),"Previous"]}),(0,A.jsxs)(o.A,{variant:"outline-add-button",onClick:()=>(e<5&&t(e+1),void(5===e&&B(!0))),children:[5===e?"Preview":"Next",(0,A.jsx)("img",{src:q.A,style:{marginLeft:"1rem"}})]})]})]}),(0,A.jsx)(ce,{handleClose:()=>B(!1),open:S})]})}}}]);
//# sourceMappingURL=8248.c5b79075.chunk.js.map