(this.webpackJsonpreactapp=this.webpackJsonpreactapp||[]).push([[0],{18:function(e){e.exports=JSON.parse('{"domain":"sal22.eu.auth0.com","clientId":"nFhh6O8C5uKDIzRnaIFXK3NaeiEkZHhT","audience":"https://sal/api","useRefreshToken":true}')},21:function(e,t,n){e.exports=n.p+"static/media/down-arrow.a5a584e6.svg"},32:function(e,t,n){e.exports=n.p+"static/media/logo.ab947aeb.svg"},33:function(e,t,n){e.exports=n.p+"static/media/alert.4bb2ea72.svg"},34:function(e,t,n){e.exports=n.p+"static/media/question-mark.f9e1c18a.svg"},36:function(e,t,n){e.exports=n(51)},41:function(e,t,n){},51:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"auth0",(function(){return ge})),n.d(a,"questions",(function(){return _e})),n.d(a,"users",(function(){return be})),n.d(a,"answers",(function(){return we})),n.d(a,"search",(function(){return Oe}));var r,s=n(0),i=n.n(s),c=n(19),o=n.n(c),u=(n(41),n(18)),l=n(8),d=Object(l.a)(),E=n(24),m=n.n(E),p=n(29);!function(e){e.INIT_AUTH0_REQUEST="INIT_AUTH0_REQUEST",e.INIT_AUTH0_SUCCESS="INIT_AUTH0_SUCCESS",e.INIT_AUTH0_ERROR="INIT_AUTH0_ERROR"}(r||(r={}));var S=r,g=n(30);function f(){return{type:S.INIT_AUTH0_REQUEST}}function U(e){return{type:S.INIT_AUTH0_SUCCESS,payload:e}}function _(e){return{type:S.INIT_AUTH0_ERROR,error:e}}function h(e){window.history.replaceState({},document.title,window.location.pathname)}var b,v=n(7);!function(e){e.USER_REQUEST="USER_REQUEST",e.USER_SUCCESS="USER_SUCCESS",e.USER_FAILURE="USER_FAILURE"}(b||(b={}));var w=n(4);var T=Symbol("Call API"),O=function(){return function(e){return function(t){var n=t[T];if("undefined"===typeof n)return e(t);var a=n.endpoint,r=n.token,s=n.types,i=n.config,c=void 0===i?{}:i,o=Object(w.a)(s,3),u=o[0],l=o[1],d=o[2];return e({type:u}),function(e,t,n){return n&&(t.headers?Object.assign(t.headers,{Authorization:"Bearer ".concat(n)}):Object.assign(t,{headers:{Authorization:"Bearer ".concat(n)}})),fetch(""+e,t).then((function(e){return e.json().then((function(t){return{data:t,response:e}}))})).then((function(e){var t=e.data;return e.response.ok?t:Promise.reject(t)}))}(a,c,r).then((function(t){return e({receivedAt:Date.now(),payload:t,type:l})})).catch((function(t){return e({error:t.message,type:d})}))}}};function A(e){return function(t,n){return n().users.entities.get(e)||!e?null:t(function(e){return Object(v.a)({},T,{endpoint:"/api/users/".concat(e),types:[b.USER_REQUEST,b.USER_SUCCESS,b.USER_FAILURE]})}(e))}}var y,C,R=n(3),N=n(2),Q=n(6);function j(e){return function(t,n){return n().answers.entities.get(e)||!e?null:t(function(e){return Object(v.a)({},T,{endpoint:"/api/answers/".concat(e),types:[C.ANSWER_REQUEST,C.ANSWER_SUCCESS,C.ANSWER_FAILURE]})}(e))}}!function(e){e.QUESTIONS_REQUEST="QUESTIONS_REQUEST",e.QUESTIONS_SUCCESS="QUESTIONS_SUCCESS",e.QUESTIONS_FAILURE="QUESTIONS_FAILURE",e.QUESTION_REQUEST="QUESTION_REQUEST",e.QUESTION_SUCCESS="QUESTION_SUCCESS",e.QUESTION_FAILURE="QUESTION_FAILURE",e.Q_DELETE_REQUEST="Q_DELETE_REQUEST",e.Q_DELETE_SUCCESS="Q_DELETE_SUCCESS",e.Q_DELETE_FAILURE="Q_DELETE_FAILURE",e.Q_POST_REQUEST="Q_POST_REQUEST",e.Q_POST_SUCCESS="Q_POST_SUCCESS",e.Q_POST_FAILURE="Q_POST_FAILURE",e.Q_BA_REQUEST="Q_BA_REQUEST",e.Q_BA_SUCCESS="Q_BA_SUCCESS",e.Q_BA_FAILURE="Q_BA_FAILURE"}(y||(y={})),function(e){e.ANSWER_REQUEST="ANSWER_REQUEST",e.ANSWER_SUCCESS="ANSWER_SUCCESS",e.ANSWER_FAILURE="ANSWER_FAILURE",e.A_DELETE_REQUEST="A_DELETE_REQUEST",e.A_DELETE_SUCCESS="A_DELETE_SUCCESS",e.A_DELETE_FAILURE="A_DELETE_FAILURE",e.A_POST_REQUEST="A_POST_REQUEST",e.A_POST_SUCCESS="A_POST_SUCCESS",e.A_POST_FAILURE="A_POST_FAILURE"}(C||(C={}));var I=n(32),k=n.n(I),L=n(33),F=n.n(L),q=n(34),x=n.n(q),P=function(e){var t=e.src,n=e.size,a=e.info;return i.a.createElement("div",{className:"avatar-".concat(n)},i.a.createElement("div",{className:"avatar-img"},i.a.createElement("img",{src:t,alt:a?a.name+" image":"avatar image"})),a&&i.a.createElement("p",{className:"avatar-info"},a.name,a.role&&i.a.createElement(i.a.Fragment,null,i.a.createElement("br",null),i.a.createElement("small",{className:"text-muted"},a.role))))};P.defaultProps={size:"md"};var D=P,M=function(e){var t=e.btnContent,n=e.dropdownClass,a=e.btnClass,r=e.children,c=e.useDropdown,o=Object(s.useState)(!1),u=Object(w.a)(o,2),l=u[0],d=u[1];if(c){var E=Object(w.a)(c,2);l=E[0],d=E[1]}var m=Object(s.useRef)(null);function p(){d(!1)}return Object(s.useEffect)((function(){function e(e){e.stopPropagation();27===e.keyCode&&p()}function t(e){var t;e.stopPropagation();var n=e.target;n===m.current||(null===(t=m.current)||void 0===t?void 0:t.contains(n))||p()}return document.addEventListener("click",t,!1),document.addEventListener("keydown",e,!1),function(){document.removeEventListener("click",t,!1),document.removeEventListener("keydown",e,!1)}}),[]),i.a.createElement("div",{ref:m,className:n?n+" dropdown":"dropdown"},i.a.createElement("button",{className:a?a+" btn":"btn","aria-haspopup":"true","aria-expanded":l,onClick:function(e){l?p():d(!0)}},t),i.a.createElement("div",{className:l?"dropdown-menu show":"dropdown-menu","aria-labelledby":"dropdownMenuLink"},s.Children.map(r,(function(e){if(e&&e.props)return Object(s.cloneElement)(e,{className:e.props.className?e.props.className+" dropdown-item":"dropdown-item"})}))))},B=n(11);function H(e){var t;var n,a="loading...";return e.user&&(a=(n=e.user).user_metadata?n.user_metadata.firstname+" "+n.user_metadata.lastname:n.name),i.a.createElement("ul",{className:"navbar-nav"},i.a.createElement("li",{className:"nav-item"},i.a.createElement("button",{className:"nav-btn btn",onClick:function(){window.alert("Alerts not implemented yet, Stay tuned!")}},i.a.createElement("img",{src:F.a,alt:"alert-icon",className:"icon"}))),i.a.createElement("li",{className:"nav-item"},i.a.createElement("button",{className:"nav-btn btn"},i.a.createElement("img",{src:x.a,alt:"question-mark-icon",className:"icon"}))),i.a.createElement("li",{className:"nav-item",style:{marginRight:"-7px"}},i.a.createElement(M,{btnContent:i.a.createElement(D,{src:(null===(t=n)||void 0===t?void 0:t.picture)||"",size:"sm"}),btnClass:"avatar-btn"},i.a.createElement("button",{onClick:e.goToProfile,style:{textTransform:"capitalize"}},a),i.a.createElement("button",{onClick:e.logout},"Logout"))))}var W=Object(R.b)((function(e){return{auth0:e.auth0.client,isAuthenticated:e.auth0.isAuthenticated,currentUser:e.auth0.currentUser,isFetching:e.users.isFetching,users:e.users.entities}}),{})((function(e){var t=Object(N.e)(),n=Object(s.useState)(""),a=Object(w.a)(n,2),r=a[0],c=a[1];return i.a.createElement("nav",{className:"navbar navbar-primary navbar-dark"},i.a.createElement(B.a,{to:"/",className:"navbar-brand logo"},i.a.createElement("img",{className:"logo-img",src:k.a,width:"30",height:"30",alt:"sal logo",loading:"lazy"}),i.a.createElement("span",{className:"logo-slogan"},"any question...")),i.a.createElement("form",{className:"form-inline navbar-search",onSubmit:function(e){if(e.preventDefault(),!r)return null;t.push("/search?term=".concat(r))}},i.a.createElement("input",{className:"form-control mr-sm-2",type:"search",placeholder:"Search","aria-label":"Search",value:r,onChange:function(e){c(e.currentTarget.value)}})),!e.isAuthenticated&&i.a.createElement("button",{className:"btn btn-link-light",onClick:function(){e.auth0.loginWithRedirect({})},style:{paddingRight:"10px",paddingLeft:"10px",marginRight:"-10px"}},"Sign In"),e.isAuthenticated&&i.a.createElement(H,{user:e.users.get(e.currentUser)||null,logout:function(){e.auth0.logout({returnTo:window.location.origin})},goToProfile:function(){window.alert("Users profile page is not here yet, Stay tuned!")}}))})),z=n(21),J=n.n(z);var V={deleteQuestion:function(e,t){return e?Object(v.a)({},T,{endpoint:"/api/questions/".concat(e),token:t,types:[y.Q_DELETE_REQUEST,y.Q_DELETE_SUCCESS,y.Q_DELETE_FAILURE],config:{method:"DELETE"}}):null}},K=Object(R.b)((function(e){return{token:e.auth0.accessToken,currentUser:e.auth0.currentUser,users:e.users.entities}}),V)((function(e){var t=e.users.get(e.question.user_id),n="loading...",a="loading...";t&&(a=t.user_metadata?t.user_metadata.firstname+" "+t.user_metadata.lastname:t.name,n=t.user_metadata?t.user_metadata.job:"software engineer");var r=e.currentUser===e.question.user_id,s=new Date(e.question.created_at);return i.a.createElement("div",{className:"card ask",style:e.style},i.a.createElement("div",{className:"card-header"},i.a.createElement(D,{src:(null===t||void 0===t?void 0:t.picture)||"",info:{name:a,role:n}}),i.a.createElement("div",{className:"card-header-metadata"},i.a.createElement("p",{className:"content"},i.a.createElement("small",null,s.toLocaleDateString(),i.a.createElement("br",null),i.a.createElement("span",{className:"text-muted"},e.question.answers.length?1===e.question.answers.length?"1 answer":"".concat(e.question.answers.length," answers"):"No answers yet"))),i.a.createElement(M,{btnContent:i.a.createElement("img",{className:"icon",src:J.a,alt:"down-arrow icon"})},i.a.createElement(B.a,{to:"/questions/".concat(e.question.id)},"View question"),!r&&i.a.createElement("button",{onClick:function(){alert("Unfortunately, this action is not implemented yet!")}},"Report this question"),r&&i.a.createElement("button",{onClick:function(){e.deleteQuestion(e.question.id,e.token)}},"Delete Question"),r&&i.a.createElement("button",{onClick:function(){alert("Unfortunately, this action is not implemented yet!")}},"Update Question")))),i.a.createElement("div",{className:"card-body"},i.a.createElement("p",{className:"card-text"},e.question.content)))}));var X=function(e){var t=e.className;return i.a.createElement("div",{className:t},i.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 60 60","aria-labelledby":"spinner-title",role:"graphic",className:"spinner"},i.a.createElement("title",{id:"spinner-title"},"Loading..."),i.a.createElement("circle",{className:"spinner-circle",cx:"30",cy:"30",r:"24"}),i.a.createElement("circle",{className:"spinner-semi-circle",cx:"30",cy:"30",r:"24"})))};function Y(e){var t=Object(s.useState)(!1),n=Object(w.a)(t,2),a=n[0],r=n[1];Object(s.useEffect)((function(){e.isUpdatingQuestion||r(!1)}),[e.isUpdatingQuestion]);var c=Object(s.useState)(!1),o=Object(w.a)(c,2),u=o[0],l=o[1];var d=e.users.get(e.answer.user_id),E="loading...",m="loading...";d&&(m=d.user_metadata?d.user_metadata.firstname+" "+d.user_metadata.lastname:d.name,E=d.user_metadata?d.user_metadata.job:"software engineer");var p=e.currentUser===e.answer.user_id,S=e.currentUser===e.questionUserId,g=new Date(e.answer.created_at),f=e.bestAnswer===e.answer.id;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"card-header"},i.a.createElement(D,{src:(null===d||void 0===d?void 0:d.picture)||"",info:{name:m,role:E}}),i.a.createElement("div",{className:"card-header-metadata"},i.a.createElement("p",{className:"content"},i.a.createElement("small",null,g.toLocaleDateString(),i.a.createElement("br",null),i.a.createElement("span",{className:"text-muted"},a?"loading...":f?"Accepted by user":"Most recent"))),i.a.createElement(M,{useDropdown:[u,l],btnContent:i.a.createElement("img",{className:"icon",src:J.a,alt:"down-arrow icon"})},!p&&i.a.createElement("button",{onClick:function(){alert("Unfortunately, this action is not implemented yet!")}},"Report this answer"),S&&i.a.createElement("button",{onClick:function(){e.selectBestAnswer(e.answer.question_id,e.answer.id,e.token),r(!0),l(!1)}},"Select best answer"),p&&i.a.createElement("button",{onClick:function(){alert("Unfortunately, this action is not implemented yet!")}},"Update answer"),p&&i.a.createElement("button",{onClick:function(){e.deleteAnswer(e.answer.id,e.token)}},"Delete answer")))),i.a.createElement("div",{className:"card-body"},i.a.createElement("p",{className:"card-text"},e.answer.content)))}var Z={selectBestAnswer:function(e,t,n){return Object(v.a)({},T,{endpoint:"/api/questions/".concat(e),token:n,types:[y.Q_BA_REQUEST,y.Q_BA_SUCCESS,y.Q_BA_FAILURE],config:{method:"PATCH",body:JSON.stringify({answer:t}),headers:{"Content-Type":"application/json"}}})},deleteAnswer:function(e,t){return Object(v.a)({},T,{endpoint:"/api/answers/".concat(e),token:t,types:[C.A_DELETE_REQUEST,C.A_DELETE_SUCCESS,C.ANSWER_FAILURE],config:{method:"DELETE"}})},postAnswer:function(e,t,n){return Object(v.a)({},T,{endpoint:"/api/questions/".concat(e,"/answers"),token:n,types:[C.A_POST_REQUEST,C.A_POST_SUCCESS,C.A_POST_FAILURE],config:{method:"POST",body:JSON.stringify({content:t}),headers:{"Content-Type":"application/json"}}})}},$=Object(R.b)((function(e){return{token:e.auth0.accessToken,currentUser:e.auth0.currentUser,users:e.users.entities,isPostingAnswer:e.answers.isPosting}}),Z)((function(e){var t=Object(s.useState)(!1),n=Object(w.a)(t,2),a=n[0],r=n[1],c=Object(s.useState)(""),o=Object(w.a)(c,2),u=o[0],l=o[1],d=Object(s.useState)(!1),E=Object(w.a)(d,2),m=E[0],p=E[1];Object(s.useEffect)((function(){e.isPostingAnswer||p(!1)}),[e.isPostingAnswer]);var S=null;return e.answers&&(S=e.answers.map((function(t){return i.a.createElement(s.Fragment,{key:Math.random().toString(16).slice(2)},i.a.createElement("hr",null),!t&&i.a.createElement("div",{className:"spinner-container",style:{height:"60px"}},i.a.createElement(X,{className:"spinner-sm spinner-centered"})),t&&i.a.createElement(Y,{answer:t,users:e.users,currentUser:e.currentUser,bestAnswer:e.bestAnswer,questionUserId:e.questionUserId,selectBestAnswer:e.selectBestAnswer,token:e.token,deleteAnswer:e.deleteAnswer,isUpdatingQuestion:e.isUpdatingQuestion}))}))),i.a.createElement("div",{className:"card answer"},!S&&i.a.createElement(i.a.Fragment,null,(!e.answer&&e.answerExists||m)&&i.a.createElement("div",{className:"spinner-container",style:{height:"60px"}},i.a.createElement(X,{className:"spinner-sm spinner-centered"})),e.answer&&i.a.createElement(Y,{answer:e.answer,users:e.users,currentUser:e.currentUser,bestAnswer:e.bestAnswer,questionUserId:e.questionUserId,selectBestAnswer:e.selectBestAnswer,token:e.token,deleteAnswer:e.deleteAnswer,isUpdatingQuestion:e.isUpdatingQuestion}),e.answerExists&&i.a.createElement("hr",null)),i.a.createElement("div",{className:"answer-cta-section"},i.a.createElement("button",{className:"btn btn-link",onClick:function(){r(!0)}},"Write an answer"),e.answerExists&&!S&&i.a.createElement(B.a,{to:"/questions/".concat(e.questionId),className:"btn btn-link"},"View all answers")),a&&i.a.createElement(i.a.Fragment,null,i.a.createElement("hr",null),i.a.createElement("form",{action:"",className:"answer-form",onSubmit:function(t){t.preventDefault(),e.postAnswer(e.questionId,u,e.token),l(""),r(!1),p(!0)}},i.a.createElement("div",{className:"form-group"},i.a.createElement("textarea",{name:"",id:"",rows:3,className:"form-control",value:u,onChange:function(e){l(e.currentTarget.value)}})),i.a.createElement("button",{type:"submit",className:"btn btn-primary",disabled:""===u},"Submit"),i.a.createElement("button",{type:"button",className:"btn btn-secondary",onClick:function(){if(""!==u&&!window.confirm("Discard what you have typed?"))return;l(""),r(!1)}},"Cancel"))),S&&i.a.createElement(i.a.Fragment,null,m&&i.a.createElement("div",{className:"spinner-container",style:{height:"60px"}},i.a.createElement(X,{className:"spinner-sm spinner-centered"})),S))}));var G={postQuestion:function(e,t){return Object(v.a)({},T,{endpoint:"/api/questions",token:t,types:[y.Q_POST_REQUEST,y.Q_POST_SUCCESS,y.Q_POST_FAILURE],config:{method:"POST",body:JSON.stringify({content:e}),headers:{"Content-Type":"application/json"}}})}},ee=Object(R.b)((function(e){return{token:e.auth0.accessToken,currentUser:e.auth0.currentUser,users:e.users.entities}}),G)((function(e){var t=Object(s.useState)(!1),n=Object(w.a)(t,2),a=n[0],r=n[1],c=Object(s.useState)(""),o=Object(w.a)(c,2),u=o[0],l=o[1];function d(){r(!1)}var E=e.users.get(e.currentUser);return i.a.createElement(i.a.Fragment,null,a&&i.a.createElement("div",{className:"q-form-backdrop"}),i.a.createElement("form",{action:"",onFocus:function(){r(!0)},onBlur:d,onSubmit:function(t){t.preventDefault(),e.postQuestion(u,e.token),l(""),d()},className:"question-form ".concat(a?"focus":""),style:e.style},i.a.createElement("div",{className:"backdrop"}),i.a.createElement("div",{className:"group"},i.a.createElement(D,{src:(null===E||void 0===E?void 0:E.picture)||""}),i.a.createElement("textarea",{placeholder:"Sal about anything...",rows:3,value:u,onChange:function(e){l(e.currentTarget.value)}})),(a||u)&&i.a.createElement(i.a.Fragment,null,i.a.createElement("hr",null),i.a.createElement("button",{type:"submit",className:"btn btn-link",disabled:""===u},"Submit"),i.a.createElement("button",{type:"button",className:"btn btn-link",onClick:function(){l(""),r(!1)}},"Cancel"))))}));var te=function(){return i.a.createElement("header",{className:"page-header"},i.a.createElement("div",{className:"container"},i.a.createElement(W,null)))};var ne=function(e){return i.a.createElement("footer",{className:"page-footer"},i.a.createElement("div",{className:"container"},i.a.createElement("p",{className:"copyrights"},"Designed & Developed by ",i.a.createElement("a",{href:"https://www.linkedin.com/in/ahmedhrayyan/"},"Ahmed Hamed"))))};var ae={loadQuestions:function(){return function(e,t){var n=t().questions||{},a=n.nextPageUrl,r=void 0===a?"/api/questions":a,s=n.pageCount;if(!((void 0===s?0:s)>0)||r)return e(function(e){return Object(v.a)({},T,{endpoint:e,types:[y.QUESTIONS_REQUEST,y.QUESTIONS_SUCCESS,y.QUESTIONS_FAILURE]})}(r))}},loadUser:A,loadAnswer:j},re=Object(R.b)((function(e){return{currentUser:e.auth0.currentUser,questions:e.questions.entities,nextPageUrl:e.questions.nextPageUrl,isFetchingQuestions:e.questions.isFetching,isPostingQuestion:e.questions.isPosting,isUpdatingQuestion:e.questions.isUpdating,users:e.users.entities,answers:e.answers.entities}}),ae)((function(e){Object(s.useEffect)((function(){e.questions.size<20&&e.loadQuestions(),document.title="Sal - The best QA engine?"}),[]);var t=Object(s.useRef)(new Set);Object(s.useEffect)((function(){var n,a=Object(Q.a)(e.questions.values());try{for(a.s();!(n=a.n()).done;){var r=n.value;t.current.has(r.user_id)||r.user_id===e.currentUser||(e.loadUser(r.user_id),t.current.add(r.user_id)),e.loadAnswer(r.best_answer||r.answers[0])}}catch(s){a.e(s)}finally{a.f()}}),[e.questions]),Object(s.useEffect)((function(){var n,a=Object(Q.a)(e.answers.values());try{for(a.s();!(n=a.n()).done;){var r=n.value;t.current.has(r.user_id)||r.user_id===e.currentUser||(e.loadUser(r.user_id),t.current.add(r.user_id))}}catch(s){a.e(s)}finally{a.f()}}),[e.answers]);var n,a=[],r=Object(Q.a)(e.questions.values());try{for(r.s();!(n=r.n()).done;){var c=n.value;a.push(i.a.createElement("div",{key:c.id},i.a.createElement(K,{key:c.id,style:{margin:"50px 7px 0"},question:c}),i.a.createElement($,{bestAnswer:c.best_answer,answerExists:c.answers.length>0,answer:e.answers.get(c.best_answer||c.answers[0]),questionId:c.id,questionUserId:c.user_id,isUpdatingQuestion:e.isUpdatingQuestion})))}}catch(u){r.e(u)}finally{r.f()}var o=e.isFetchingQuestions&&0===e.questions.size||e.isPostingQuestion;return i.a.createElement("div",{className:"content-container",style:{marginBottom:"50px"}},i.a.createElement(ee,{style:{marginTop:"50px"}}),o&&i.a.createElement("div",{className:"spinner-container",style:{height:"180px"}},i.a.createElement(X,{className:"spinner-sm spinner-centered"})),a,e.nextPageUrl&&i.a.createElement("div",{style:{textAlign:"center",marginTop:"30px"},onClick:function(){e.loadQuestions()}},i.a.createElement("button",{className:"btn btn-link"},"Load More")))}));var se,ie={loadQuestion:function(e){return function(t,n){return n().questions.entities.get(e)||!e?null:t(function(e){return Object(v.a)({},T,{endpoint:"/api/questions/".concat(e),types:[y.QUESTION_REQUEST,y.QUESTION_SUCCESS,y.QUESTION_FAILURE]})}(e))}},loadAnswer:j},ce=Object(R.b)((function(e){return{questions:e.questions.entities,isUpdatingQuestion:e.questions.isUpdating,answers:e.answers.entities}}),ie)((function(e){var t=Object(N.e)(),n=Object(N.g)().questionId;Object(s.useEffect)((function(){e.loadQuestion(parseInt(n))}),[]),Object(s.useEffect)((function(){var t=e.questions.get(parseInt(n));if(t){var a,r=Object(Q.a)(t.answers);try{for(r.s();!(a=r.n()).done;){var s=a.value;e.loadAnswer(s)}}catch(i){r.e(i)}finally{r.f()}document.title="Sal - "+t.content.slice(0,24)+"..."}}),[e.questions]);var a=e.questions.get(parseInt(n));if(!a)return i.a.createElement("div",{className:"spinner-container",style:{height:"180px"}},i.a.createElement(X,{className:"spinner-sm spinner-centered"}));var r,c=[],o=Object(Q.a)(a.answers);try{for(o.s();!(r=o.n()).done;){var u=r.value;u===a.best_answer?c.unshift(e.answers.get(u)):c.push(e.answers.get(u))}}catch(l){o.e(l)}finally{o.f()}return i.a.createElement("div",{className:"content-container",style:{marginBottom:"50px"}},i.a.createElement("button",{className:"btn btn-link",style:{padding:"14px 7px",color:"#323130"},onClick:function(){return t.goBack()}},"<\xa0 Back"),i.a.createElement(K,{style:{margin:"0px 7px 0"},question:a}),i.a.createElement($,{questionId:a.id,questionUserId:a.user_id,isUpdatingQuestion:e.isUpdatingQuestion,answerExists:a.answers.length>0,bestAnswer:a.best_answer,answers:c}))}));function oe(e,t){return Object(v.a)({},T,{endpoint:t,types:[se.SEARCH_REQUEST,se.SEARCH_SUCCESS,se.SEARCH_FAILURE],config:{method:"POST",body:JSON.stringify({search:e}),headers:{"Content-Type":"application/json"}}})}!function(e){e.SEARCH_REQUEST="SEARCH_REQUEST",e.SEARCH_SUCCESS="SEARCH_SUCCESS",e.SEARCH_FAILURE="SEARCH_FAILURE"}(se||(se={}));var ue={loadSearch:function(e){return function(t,n){var a=n().search||{},r=a.searchTerm,s=a.nextPageUrl,i=void 0===s?"/api/search":s,c=a.pageCount,o=void 0===c?0:c;return null!==r&&r!==e?t(oe(e,"/api/search")):o>0&&!i?null:t(oe(e,i))}},loadUser:A},le=[{path:"/",component:re,exact:!0},{path:"/questions/:questionId",component:ce,exact:!0},{path:"/search",component:Object(R.b)((function(e){return{currentUser:e.auth0.currentUser,questions:e.search.entities,isFetchingQuestions:e.search.isFetching,nextPageUrl:e.search.nextPageUrl}}),ue)((function(e){var t=Object(N.f)().search,n=new URLSearchParams(t);Object(s.useEffect)((function(){n.get("term")&&(e.loadSearch(n.get("term")),document.title="Sal - search for "+n.get("term"))}),[t]);var a=Object(s.useRef)(new Set);if(Object(s.useEffect)((function(){var t,n=Object(Q.a)(e.questions.values());try{for(n.s();!(t=n.n()).done;){var r=t.value;a.current.has(r.user_id)||r.user_id===e.currentUser||(e.loadUser(r.user_id),a.current.add(r.user_id))}}catch(s){n.e(s)}finally{n.f()}}),[e.questions]),!n.get("term"))return i.a.createElement("div",{className:"content-container"},i.a.createElement("h1",null,"You've searched for nothing!"));var r,c=[],o=Object(Q.a)(e.questions.values());try{for(o.s();!(r=o.n()).done;){var u=r.value;c.push(i.a.createElement("div",{key:u.id},i.a.createElement(K,{key:u.id,style:{margin:"50px 7px 0"},question:u}),i.a.createElement("div",{className:"card answer"},i.a.createElement("div",{className:"answer-cta-section"},i.a.createElement(B.a,{to:"/questions/".concat(u.id),className:"btn btn-link"},"View Question")))))}}catch(d){o.e(d)}finally{o.f()}var l=e.isFetchingQuestions&&0===e.questions.size;return i.a.createElement("div",{className:"content-container",style:{marginBottom:"50px"}},l&&i.a.createElement("div",{className:"spinner-container",style:{height:"180px"}},i.a.createElement(X,{className:"spinner-sm spinner-centered"})),c,e.nextPageUrl&&i.a.createElement("div",{style:{textAlign:"center",marginTop:"30px"},onClick:function(){e.loadSearch(n.get("term"))}},i.a.createElement("button",{className:"btn btn-link"},"Load More")))})),exact:!0}];var de={initAuth0:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h;return function(n){n(f()),Object(g.a)(e).then(function(){var e=Object(p.a)(m.a.mark((function e(a){var r,s,i,c;return m.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!window.location.search.includes("code=")||!window.location.search.includes("state=")){e.next=5;break}return e.next=3,a.handleRedirectCallback();case 3:r=e.sent,t(r);case 5:return e.next=7,a.isAuthenticated();case 7:if(s=e.sent,i=null,c=null,!s){e.next=14;break}return e.next=12,a.getTokenSilently();case 12:i=e.sent,c=JSON.parse(atob(i.split(".")[1])).sub;case 14:n(U({auth0Client:a,isAuthenticated:s,accessToken:i,currentUser:c}));case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()).catch((function(e){n(_(e.message))}))}},loadUser:A},Ee=Object(R.b)((function(e){return{isLoading:e.auth0.isLoading,isAuthenticated:e.auth0.isAuthenticated,currentUser:e.auth0.currentUser}}),de)((function(e){return Object(s.useEffect)((function(){e.initAuth0({domain:u.domain,client_id:u.clientId,audience:u.audience,redirect_uri:window.location.origin,useRefreshToken:u.useRefreshToken},(function(e){d.push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}))}),[]),Object(s.useEffect)((function(){e.isAuthenticated&&e.loadUser(e.currentUser)}),[e.isAuthenticated]),e.isLoading?i.a.createElement("div",{className:"app"},i.a.createElement(X,{className:"spinner spinner-centered"})):i.a.createElement(N.b,{history:d},i.a.createElement(te,null),e.isAuthenticated&&i.a.createElement("div",null,le.map((function(e){return i.a.createElement(N.a,Object.assign({key:e.path},e))}))),i.a.createElement(ne,null))}));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var me=n(35),pe=n(14),Se={isLoading:!0,errorMessage:null,accessToken:null,isAuthenticated:!1,currentUser:null,client:null};var ge=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Se,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S.INIT_AUTH0_REQUEST:return Object.assign({},e,{isLoading:!0});case S.INIT_AUTH0_SUCCESS:return Object.assign({},e,{isLoading:!1,client:t.payload.auth0Client,isAuthenticated:t.payload.isAuthenticated,accessToken:t.payload.accessToken,currentUser:t.payload.currentUser});case S.INIT_AUTH0_ERROR:return Object.assign({},e,{isLoading:!1,errorMessage:t.error});default:return e}},fe=n(22),Ue={isFetching:!1,isPosting:!1,isUpdating:!1,errorMessage:null,pageCount:0,entities:new Map};var _e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ue,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y.QUESTIONS_REQUEST:return Object.assign({},e,{isFetching:!0});case y.QUESTIONS_SUCCESS:var n,a=new Map(e.entities),r=Object(Q.a)(t.payload.questions);try{for(r.s();!(n=r.n()).done;){var s=n.value;a.set(s.id,s)}}catch(p){r.e(p)}finally{r.f()}return Object.assign({},e,{isFetching:!1,entities:a,nextPageUrl:t.payload.next_path,noOfQuestions:t.payload.no_of_questions,lastUpdated:t.receivedAt,pageCount:e.pageCount+1});case y.QUESTIONS_FAILURE:return Object.assign({},e,{errorMessage:t.error,isFetching:!1});case y.QUESTION_REQUEST:return Object.assign({},e,{isFetching:!0});case y.QUESTION_SUCCESS:var i=new Map(e.entities);return i.set(t.payload.question.id,t.payload.question),Object.assign({},e,{isFetching:!1,entities:i,lastUpdated:t.receivedAt});case y.QUESTION_FAILURE:return Object.assign({},e,{errorMessage:t.error,isFetching:!1});case y.Q_DELETE_REQUEST:return Object.assign({},e,{isFetching:!0});case y.Q_DELETE_SUCCESS:var c=new Map(e.entities);return c.delete(t.payload.del_id),Object.assign({},e,{entities:c,isFetching:!1});case y.Q_DELETE_FAILURE:return Object.assign({},e,{isFetching:!1,errorMessage:t.error});case y.Q_POST_REQUEST:return Object.assign({},e,{isPosting:!0});case y.Q_POST_SUCCESS:var o=new Map([[t.payload.created.id,t.payload.created]].concat(Object(fe.a)(e.entities)));return Object.assign({},e,{isPosting:!1,entities:o});case y.Q_POST_FAILURE:return Object.assign({},e,{isPosting:!1,errorMessage:t.error});case y.Q_BA_REQUEST:return Object.assign({},e,{isUpdating:!0});case y.Q_BA_SUCCESS:var u=new Map(e.entities);return u.set(t.payload.patched.id,t.payload.patched),Object.assign({},e,{isUpdating:!1,entities:u});case y.Q_BA_FAILURE:return Object.assign({},e,{isUpdating:!1,errorMessage:t.error});case C.A_DELETE_SUCCESS:var l=new Map(e.entities),d=l.get(t.payload.question_id);return d.answers=d.answers.filter((function(e){return e!==t.payload.del_id})),d.best_answer===t.payload.del_id&&(d.best_answer=null),Object.assign({entities:l});case C.A_POST_SUCCESS:var E=new Map(e.entities),m=E.get(t.payload.created.question_id);return m.answers.unshift(t.payload.created.id),Object.assign({entities:E});default:return e}},he={isFetching:!1,errorMessage:null,entities:new Map};var be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:he,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case b.USER_REQUEST:return Object.assign({},e,{isFetching:!0});case b.USER_SUCCESS:var n=new Map(e.entities);return n.set(t.payload.user.user_id,t.payload.user),Object.assign({},e,{isFetching:!1,entities:n,lastUpdated:t.receivedAt});case b.USER_FAILURE:return Object.assign({},e,{errorMessage:t.error,isFetching:!1});default:return e}},ve={isFetching:!1,isPosting:!1,errorMessage:null,entities:new Map};var we=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case C.ANSWER_REQUEST:return Object.assign({},e,{isFetching:!0});case C.ANSWER_SUCCESS:var n=new Map(e.entities);return n.set(t.payload.answer.id,t.payload.answer),Object.assign({},e,{isFetching:!1,entities:n,lastUpdated:t.receivedAt});case C.ANSWER_FAILURE:return Object.assign({},e,{errorMessage:t.error,isFetching:!1});case C.A_DELETE_REQUEST:return Object.assign({},e,{isFetching:!0});case C.A_DELETE_SUCCESS:var a=new Map(e.entities);return a.delete(t.payload.del_id),Object.assign({},e,{entities:a,isFetching:!1});case C.A_DELETE_FAILURE:return Object.assign({},e,{isFetching:!1,errorMessage:t.error});case C.A_POST_REQUEST:return Object.assign({},e,{isPosting:!0});case C.A_POST_SUCCESS:var r=new Map([[t.payload.created.id,t.payload.created]].concat(Object(fe.a)(e.entities)));return Object.assign({},e,{isPosting:!1,entities:r});case C.A_POST_FAILURE:return Object.assign({},e,{isPosting:!1,errorMessage:t.error});default:return e}},Te={isFetching:!1,errorMessage:null,searchTerm:null,pageCount:0,entities:new Map};var Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Te,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case se.SEARCH_REQUEST:return Object.assign({},e,{isFetching:!0});case se.SEARCH_SUCCESS:var n;n=e.searchTerm&&e.searchTerm!==t.payload.search_term?new Map:new Map(e.entities);var a,r=Object(Q.a)(t.payload.questions);try{for(r.s();!(a=r.n()).done;){var s=a.value;n.set(s.id,s)}}catch(i){r.e(i)}finally{r.f()}return Object.assign({},e,{isFetching:!1,entities:n,nextPageUrl:t.payload.next_path,noOfQuestions:t.payload.no_of_questions,lastUpdated:t.receivedAt,pageCount:e.pageCount+1,searchTerm:t.payload.search_term});case se.SEARCH_FAILURE:return Object.assign({},e,{errorMessage:t.error,isFetching:!1});default:return e}},Ae=Object(pe.d)(Object(pe.c)(a),Object(pe.a)(O,me.a));o.a.render(i.a.createElement(i.a.StrictMode,null,i.a.createElement(R.a,{store:Ae},i.a.createElement(Ee,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[36,1,2]]]);
//# sourceMappingURL=main.4c174e6d.chunk.js.map