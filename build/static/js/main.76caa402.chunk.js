(this.webpackJsonptasker=this.webpackJsonptasker||[]).push([[0],{14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n.n(c),o=n(7),a=n.n(o),s=(n(14),n(6)),d=n(9),l=n(2),i=n(0),j=function(e){var t=e.text,n=e.color,c=e.onAdd;return Object(i.jsx)("div",{children:Object(i.jsx)("button",{style:{backgroundColor:n},onClick:c,className:"btn",children:t})})},u=function(e){var t=e.title,n=e.onAdd,c=e.showAdd;return Object(i.jsxs)("header",{className:"header",children:[Object(i.jsx)("h1",{children:t}),Object(i.jsx)(j,{text:c?"Close":"Add",color:c?"red":"#1ed760",onAdd:n})]})},b=n(8),h=function(e){var t=e.task,n=e.onDelete,c=e.onToggle;return Object(i.jsx)(i.Fragment,{children:Object(i.jsxs)("div",{className:"task ".concat(t.reminder?"reminder":""),onDoubleClick:function(){return c(t.id)},children:[Object(i.jsx)("h4",{children:t.text}),Object(i.jsx)(b.a,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)}})]})})},O=function(e){var t=e.tasks,n=e.onDelete,c=e.onToggle;return Object(i.jsx)(i.Fragment,{children:t.map((function(e,t){return Object(i.jsx)(h,{task:e,onDelete:n,onToggle:c},t*Math.random())}))})},m=function(e){var t=e.addNewTask,n=Object(c.useState)(""),r=Object(l.a)(n,2),o=r[0],a=r[1],s=Object(c.useState)(!1),d=Object(l.a)(s,2),j=d[0],u=d[1];return Object(i.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault(),o?(t(o,j),console.log("form submitted"),a(""),u(!1)):alert("Add a Task")},children:[Object(i.jsxs)("div",{className:"form-control",children:[Object(i.jsx)("label",{children:"Task"}),Object(i.jsx)("input",{type:"text",placeholder:"Add a Task",value:o,onChange:function(e){return a(e.target.value)}})]}),Object(i.jsxs)("div",{className:"form-control form-control-check",children:[Object(i.jsx)("label",{children:"Set Reminder"}),Object(i.jsx)("input",{type:"checkbox",checked:j,value:j,onChange:function(e){return u(e.currentTarget.checked)}})]}),Object(i.jsx)("input",{type:"submit",value:"Save Task",className:"btn btn-block"})]})};var x=function(){var e=Object(c.useState)(!1),t=Object(l.a)(e,2),n=t[0],r=t[1],o=Object(c.useState)([]),a=Object(l.a)(o,2),j=a[0],b=a[1];return 0===n.length&&r(!n),Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(u,{title:"Tasks",onAdd:function(){return r(!n)},showAdd:n}),n&&Object(i.jsx)(m,{addNewTask:function(e,t){console.log("task-added");var n=j.length*Math.random();b([].concat(Object(d.a)(j),[{id:n,text:e,reminder:t}]))}}),j.length>0?Object(i.jsx)(O,{tasks:j,onDelete:function(e){b(j.filter((function(t){return t.id!==e}))),console.log("task-deleted",e)},onToggle:function(e){b(j.map((function(t){return t.id===e?Object(s.a)(Object(s.a)({},t),{},{reminder:!t.reminder}):t}))),console.log("reminder-altered")}}):"No Tasks Yet"]})};a.a.render(Object(i.jsx)(r.a.StrictMode,{children:Object(i.jsx)(x,{})}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.76caa402.chunk.js.map