(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{4378:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return S}});var s=r(5893),n=r(7294),a=r(9008),o=function(e){var t=e.title,r=e.container,o=e.children;return(0,s.jsxs)(n.Fragment,{children:[(0,s.jsx)(a.default,{children:(0,s.jsx)("title",{children:t})}),r?(0,s.jsx)("div",{className:"container",children:o}):o]})};o.defaultProps={title:"CR-TEST",container:!0};var u=o,c=r(6265),i=r(618),l=r.n(i),p=r(809),m=r.n(p),f=r(2447),h=r(5609),d=r(4206),g=r.n(d),_=r(9249),v=r(6940);r(4727);function x(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,s)}return r}function j(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?x(Object(r),!0).forEach((function(t){(0,c.Z)(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):x(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}var y=function(){var e=(0,v.I0)(),t=(0,n.useState)({author:"",message:""}),r=t[0],a=t[1];(0,n.useEffect)((function(){a(j(j({},r),{},{message:localStorage.getItem("message")?String(localStorage.getItem("message")):"",author:localStorage.getItem("author")?String(localStorage.getItem("author")):""}))}),[]);var o=function(t){var r;t.author=t.author.trim(),t.message=t.message.trim(),function(e){var t=e.author,r=e.message,s=[];if(t&&r)t.match(/^[\s\w]+$/)||s.push("Author: Latin, number and underscore symbols are allowed");else{var n="";!t&&(n+="Author; "),!r&&(n+="Message; "),s.push("Field are empty: ".concat(n))}return r.match(/(?:(?:https?):\/\/)/)&&s.push("Author: HTTP(S) links are not allowed"),0!==s.length&&s.map((function(e){return _.Am.error(e)})),0===s.length}(t)&&(e((r=t,function(){var e=(0,f.Z)(m().mark((function e(t){var s,n;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:h.OU}),e.prev=1,e.next=4,g().post("http://localhost:5000/api/posts",r);case 4:return e.next=6,g().get("http://localhost:5000/api/posts");case 6:s=e.sent,n=s.data,t({type:h.Vy,payload:n}),_.Am.success("Message send"),e.next=16;break;case 12:e.prev=12,e.t0=e.catch(1),t({type:h.Ck,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message}),_.Am.error(e.t0.response.data.message);case 16:case"end":return e.stop()}}),e,null,[[1,12]])})));return function(t){return e.apply(this,arguments)}}())),a(j(j({},t),{},{message:""})),localStorage.setItem("message",""))},u=function(e){a(j(j({},r),{},(0,c.Z)({},e.target.name,e.target.value))),localStorage.setItem(e.target.name,e.target.value)},i=function(e){13===e.keyCode&&e.ctrlKey&&o(r)};return(0,s.jsxs)("div",{className:l().form,children:[(0,s.jsx)("span",{className:l().formHeader,children:"Guestbook form"}),(0,s.jsxs)("div",{className:l().formInputGroup,children:[(0,s.jsx)("span",{children:"Author:"}),(0,s.jsx)("input",{type:"text",name:"author",value:r.author,onChange:u,onKeyDown:i})]}),(0,s.jsxs)("div",{className:l().formInputGroup,children:[(0,s.jsx)("span",{children:"Message:"}),(0,s.jsx)("textarea",{rows:6,name:"message",value:r.message,onChange:u,onKeyDown:i})]}),(0,s.jsx)("button",{className:l().btn,onClick:function(){return o(r)},children:"Send"}),(0,s.jsx)(_.Ix,{hideProgressBar:!0,closeOnClick:!0,draggable:!1,autoClose:3e3})]})},I=r(1583),b=r.n(I),O=r(3998),w=r.n(O),G=function(e){var t=e.author,r=e.message;return console.log("rendered ".concat(t," ").concat(r)),(0,s.jsxs)("div",{className:w().listItem,children:[(0,s.jsxs)("span",{className:w().ListItemAuthor,children:["Author: ",t]}),(0,s.jsx)("p",{className:w().ListItemMessage,children:r})]})},k=(0,n.memo)(G),N=(0,v.$j)((function(e){return{posts:e.posts.posts}}))((function(e){var t=e.posts;return(0,s.jsxs)("div",{className:b().listGroup,children:[(0,s.jsx)("span",{className:b().listGroupHeader,children:"Latest posts"}),t.map((function(e){return(0,s.jsx)(k,{author:e.author,message:e.message},e._id)}))]})})),S=function(){var e=(0,v.I0)();return(0,n.useEffect)((function(){e(function(){var e=(0,f.Z)(m().mark((function e(t){var r,s;return m().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t({type:h.OU}),e.prev=1,e.next=4,g().get("http://localhost:5000/api/posts");case 4:r=e.sent,s=r.data,t({type:h.Vy,payload:s}),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t({type:h.Ck,payload:e.t0.response&&e.t0.response.data.message?e.t0.response.data.message:e.t0.message});case 12:case"end":return e.stop()}}),e,null,[[1,9]])})));return function(t){return e.apply(this,arguments)}}())}),[]),(0,s.jsxs)(u,{title:"Guest book",children:[(0,s.jsx)(y,{}),(0,s.jsx)(N,{})]})}},5609:function(e,t,r){"use strict";r.d(t,{F9:function(){return s},OU:function(){return n},Vy:function(){return a},Ck:function(){return o}});var s="ADD_NEW_POST",n="START_REQUEST",a="LOADING_DATA",o="POST_FAIL"},5301:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r(4378)}])},618:function(e){e.exports={form:"FormGroup_form__12yOj",formHeader:"FormGroup_formHeader__zH2v4",formInputGroup:"FormGroup_formInputGroup__1BxTy",btn:"FormGroup_btn__3QVI8"}},1583:function(e){e.exports={listGroup:"ListGroup_listGroup__3mZ6c",listGroupHeader:"ListGroup_listGroupHeader__1psx3"}},3998:function(e){e.exports={listItem:"ListItem_listItem__1PP2s",listItemAuthor:"ListItem_listItemAuthor__1nT28",ListItemMessage:"ListItem_ListItemMessage__3xKvC"}}},function(e){e.O(0,[774,351,494,14],(function(){return t=5301,e(e.s=t);var t}));var t=e.O();_N_E=t}]);