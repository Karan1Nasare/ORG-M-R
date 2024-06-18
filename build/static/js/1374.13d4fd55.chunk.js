"use strict";(self.webpackChunkmr_education_system=self.webpackChunkmr_education_system||[]).push([[1374],{61374:(e,t,s)=>{s.r(t),s.d(t,{default:()=>m});var a=s(65043),n=s(27285),l=s(34625),r=s(3805),o=s(22963),i=s.n(o),d=s(70579);i().setAppElement("#root");const c=e=>{let{isOpen:t,onRequestClose:s,event:a,handleEventInput:n,addNewEvent:l}=e;return(0,d.jsxs)(i(),{isOpen:t,onRequestClose:s,contentLabel:"Add Event",className:"ReactModal__Content",overlayClassName:"ReactModal__Overlay",children:[(0,d.jsx)("h2",{className:"text-2xl mb-4 text-white",children:"Add / Edit Event"}),(0,d.jsxs)("form",{className:"space-y-4",children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("label",{className:"block text-sm font-medium text-white",children:"Event Title"}),(0,d.jsx)("input",{type:"text",name:"title",value:a.title,onChange:n,className:"mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-800 text-white"})]}),(0,d.jsxs)("div",{className:"flex space-x-4",children:[(0,d.jsxs)("label",{className:"inline-flex items-center",children:[(0,d.jsx)("input",{type:"radio",name:"color",value:"success",checked:"success"===a.color,onChange:n,className:"form-radio text-success"}),(0,d.jsx)("span",{className:"ml-2 text-white",children:"Success"})]}),(0,d.jsxs)("label",{className:"inline-flex items-center",children:[(0,d.jsx)("input",{type:"radio",name:"color",value:"danger",checked:"danger"===a.color,onChange:n,className:"form-radio text-danger"}),(0,d.jsx)("span",{className:"ml-2 text-white",children:"Danger"})]}),(0,d.jsxs)("label",{className:"inline-flex items-center",children:[(0,d.jsx)("input",{type:"radio",name:"color",value:"primary",checked:"primary"===a.color,onChange:n,className:"form-radio text-primary"}),(0,d.jsx)("span",{className:"ml-2 text-white",children:"Primary"})]}),(0,d.jsxs)("label",{className:"inline-flex items-center",children:[(0,d.jsx)("input",{type:"radio",name:"color",value:"warning",checked:"warning"===a.color,onChange:n,className:"form-radio text-warning"}),(0,d.jsx)("span",{className:"ml-2 text-white",children:"Warning"})]})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("label",{className:"block text-sm font-medium text-white",children:"Enter Start Date"}),(0,d.jsx)("input",{type:"datetime-local",name:"start",value:a.start,onChange:n,className:"mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-800 text-white"})]}),(0,d.jsxs)("div",{children:[(0,d.jsx)("label",{className:"block text-sm font-medium text-white",children:"Enter End Date"}),(0,d.jsx)("input",{type:"datetime-local",name:"end",value:a.end,onChange:n,className:"mt-1 p-2 block w-full shadow-sm sm:text-sm border-gray-300 rounded-md bg-gray-800 text-white"})]}),(0,d.jsxs)("div",{className:"flex justify-end space-x-4",children:[(0,d.jsx)("button",{type:"button",onClick:s,className:"bg-gray-700 hover:bg-gray-600 text-white font-bold py-2 px-4 rounded",children:"Close"}),(0,d.jsx)("button",{type:"button",onClick:l,className:"bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded",children:"Add Event"})]})]})]})},x=()=>{const[e,t]=(0,a.useState)(!1),[s,o]=(0,a.useState)({title:"",start:"",end:"",color:"success"}),[i,x]=(0,a.useState)([{title:"Event Conference",start:"2024-03-01",end:"2024-03-02",backgroundColor:"#FF6692",textColor:"#0B1739"},{title:"Seminar #4",start:"2024-03-05",end:"2024-03-07",backgroundColor:"#36C76C",textColor:"#FFFFFF"},{title:"Meeting #5",start:"2024-03-08T16:00:00",backgroundColor:"#FFD648",textColor:"#0A2540"},{title:"Seminar #6",start:"2024-03-10",backgroundColor:"#343B4F",textColor:"#FFFFFF"},{title:"Meeting 3",start:"2024-03-11T10:30:00",backgroundColor:"#3D33FF",textColor:"#EFF4FA"},{title:"Meetup",start:"2024-03-11T12:00:00",backgroundColor:"#FF6692",textColor:"#081028"},{title:"Submission",start:"2024-03-11T14:30:00",backgroundColor:"#FFD648",textColor:"#0B1739"},{title:"Attend event",start:"2024-03-12T07:00:00",backgroundColor:"#36C76C",textColor:"#FFFFFF"},{title:"Submission #1",start:"2024-03-15T16:00:00",backgroundColor:"#F49B36",textColor:"#0A2540"},{title:"Project Submission",start:"2024-03-27",backgroundColor:"#3D33FF",textColor:"#EFF4FA"}]),m=()=>t(!1);return(0,d.jsxs)("div",{className:"p-4 bg1-bg1 text-light rounded-lg",children:[(0,d.jsx)(n.A,{plugins:[l.A,r.A],initialView:"dayGridMonth",headerToolbar:{left:"prev,next addEventButton",center:"title",right:"dayGridMonth,timeGridWeek,timeGridDay"},customButtons:{addEventButton:{text:"Add Event",click:()=>t(!0)}},events:i,eventContent:e=>(0,d.jsxs)("div",{style:{backgroundColor:e.backgroundColor,color:e.event.extendedProps.textColor,padding:"2px 4px",borderRadius:"4px"},children:[(0,d.jsx)("b",{children:e.timeText}),(0,d.jsx)("i",{children:e.event.title}),console.log(e)]})}),(0,d.jsx)(c,{isOpen:e,onRequestClose:m,event:s,handleEventInput:e=>{const{name:t,value:a}=e.target;o({...s,[t]:a})},addNewEvent:()=>{x([...i,{...s,backgroundColor:{success:"#36C76C",danger:"#FF6692",primary:"#3D33FF",warning:"#FFD648"}[s.color],textColor:"#FFFFFF"}]),o({title:"",start:"",end:"",color:"success"}),m()}})]})},m=()=>(0,d.jsxs)("div",{children:[(0,d.jsx)("h1",{className:"text-left text-white text-3xl mb-6",children:"Event Management"}),(0,d.jsx)("div",{className:"bg-secondary__fill p-4 rounded-xl border border-gray-700 w-auto h-auto",children:(0,d.jsx)(x,{})})]})}}]);
//# sourceMappingURL=1374.13d4fd55.chunk.js.map