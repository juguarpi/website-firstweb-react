(this.webpackJsonpfrontend_firstweb=this.webpackJsonpfrontend_firstweb||[]).push([[0],{12:function(e,t,n){},13:function(e,t,n){},15:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var s=n(1),a=n.n(s),r=n(7),i=n.n(r),c=(n(12),n(2)),o=n(3),l=n(5),u=n(4),d=(n(13),n(0)),h=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={},e.increaseCounter=function(t){var n=Object.assign({},t);n.score=t.score+1,(0,e.props.updateCounter)(t,n)},e.decreaseCounter=function(t){var n=Object.assign({},t);n.score=t.score-1,(0,e.props.updateCounter)(t,n)},e.deleteCounter=function(t){(0,e.props.updateCounter)(t,"delete")},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props.counter;return Object(d.jsxs)("div",{children:[Object(d.jsxs)("h2",{className:"d-inline",children:[" ",t.score," "]}),Object(d.jsx)("button",{onClick:function(){return e.increaseCounter(t)},children:"Increase "}),Object(d.jsx)("button",{onClick:function(){return e.decreaseCounter(t)},children:" Decrease "}),Object(d.jsx)("button",{onClick:function(){return e.deleteCounter(t)},children:" Delete"})]})}}]),n}(s.Component),j=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={},e.updateCounter=function(t,n){var s=e.props.setCounters;fetch("http://localhost:3001/updatecounter",{method:"PUT",headers:{"Content-Type":"application/json"},body:JSON.stringify({counter:t,newCounter:n})}).then((function(e){if(404===e.status||401===e.status)throw Error;if(202===e.status)return e.json()})).then((function(){return s()})).catch((function(e){return console.log("ERROR3 updateCounter",e)}))},e.addCounter=function(){var t={email:e.props.email};e.updateCounter(t,"add")},e.resetCounters=function(){var t={email:e.props.email};e.updateCounter(t,"reset")},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this,t=this.props.counters;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"CounterList"}),Object(d.jsx)("button",{onClick:function(){return e.addCounter()},children:" AddNew Counter "}),Object(d.jsx)("button",{onClick:function(){return e.resetCounters()},children:" Reset Counters "}),t.map((function(t){return Object(d.jsx)(h,{counter:t,updateCounter:e.updateCounter})}))]})}}]),n}(s.Component),b=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={},e}return Object(o.a)(n,[{key:"render",value:function(){var e=this.props,t=e.signinStatusChange,n=e.routeChange,s=e.signinStatus,a=e.route,r=e.name,i=e.counters,c=0;if(i.length>0){c=i.map((function(e){return e.score})).reduce((function(e,t){return e+t}))}return Object(d.jsx)("div",{className:"bg-info container align-middle",style:{height:40},children:Object(d.jsxs)("div",{className:"row",children:[Object(d.jsx)("div",{className:"col-sm",href:"#",children:Object(d.jsx)("h3",{className:"d-inline",children:"COUNTER"})}),Object(d.jsxs)("div",{className:"col-sm text-right align-middle h6",children:[s?Object(d.jsxs)(d.Fragment,{children:[Object(d.jsxs)("div",{className:"d-inline",children:[" ",r," \u2002 "]}),Object(d.jsxs)("button",{type:"button",className:"btn btn-primary",children:["Counters ",Object(d.jsxs)("span",{className:"badge badge-light",children:[" ",i.length]})]}),Object(d.jsxs)("button",{type:"button",className:"btn btn-info",children:["Scores ",Object(d.jsx)("span",{className:"badge badge-light",children:c})]})," "]}):"","register"===a?Object(d.jsx)("a",{onClick:function(e){e.preventDefault(),console.log("called onclick"),n("sign"),t("signout")},className:"badge badge-light",children:"SIGN IN"}):"",s?Object(d.jsx)("a",{onClick:function(e){e.preventDefault(),console.log("called onclick"),n("sign"),t("signout")},className:"badge badge-light",children:"SIGN OUT"}):"",Object(d.jsx)("a",{onClick:function(e){e.preventDefault(),console.log("called onclick"),n("register"),t("signout")},className:"badge badge-light",children:"REGISTER"})]})]})})}}]),n}(s.Component),m=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={registrationMessage:""},e}return Object(o.a)(n,[{key:"register",value:function(){var e=this,t=document.getElementById("inputNameR").value,n=document.getElementById("inputEmailR").value,s=document.getElementById("inputPasswordR").value;fetch("http://localhost:3001/register",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({name:t,email:n,password:s})}).then((function(e){return e.json()})).then((function(t){return e.setState({registrationMessage:t})}))}},{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{className:"text-center m-5",children:Object(d.jsxs)("form",{className:"form-signin border border-success rounded shadow-lg",children:[Object(d.jsx)("h1",{className:"h3 mb-3 font-weight-normal",children:"Please Register"}),Object(d.jsxs)("div",{className:"text-danger",children:[" ",this.state.registrationMessage," "]}),Object(d.jsx)("label",{className:"sr-only",children:"Email address"}),Object(d.jsx)("input",{type:"name",id:"inputNameR",className:"form-control",placeholder:"Name"}),Object(d.jsx)("label",{className:"sr-only",children:"Email address"}),Object(d.jsx)("input",{type:"email",id:"inputEmailR",className:"form-control",placeholder:"Email address"}),Object(d.jsx)("label",{className:"sr-only",children:"Password"}),Object(d.jsx)("input",{type:"password",id:"inputPasswordR",className:"form-control",placeholder:"Password"}),Object(d.jsx)("button",{onClick:function(t){t.preventDefault(),e.register()},className:"btn btn-lg btn-primary btn-block",type:"submit",children:"Register"})]})})}}]),n}(s.Component),g=(n(15),function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={signInMessage:""},e}return Object(o.a)(n,[{key:"sign",value:function(){var e=this,t=this.props,n=t.signinStatusChange,s=t.setNameEmail,a=t.setCounters,r=document.getElementById("inputEmailS").value,i=document.getElementById("inputPasswordS").value;fetch("http://localhost:3001/signin",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:r,password:i})}).then((function(t){if(200!=t.status)t.json().then((function(t){e.setState({signInMessage:t})})).then((function(){throw Error}));else if(200===t.status)return t.json()})).then((function(e){s(e[0].name,e[0].email)})).then((function(){a(),n("signin")})).catch((function(e){return console.log("ERROR1",e)}))}},{key:"render",value:function(){var e=this;return Object(d.jsx)("div",{className:"text-center m-5",children:Object(d.jsxs)("form",{className:"form-signin border border-success rounded shadow-lg",children:[Object(d.jsx)("h1",{className:"h3 mb-3 font-weight-normal",children:"Please sign-in"}),Object(d.jsxs)("div",{className:"text-danger",children:[" ",this.state.signInMessage," "]}),Object(d.jsx)("label",{className:"sr-only",children:"Email address"}),Object(d.jsx)("input",{type:"email",id:"inputEmailS",className:"form-control",placeholder:"Email address"}),Object(d.jsx)("label",{className:"sr-only",children:"Password"}),Object(d.jsx)("input",{type:"password",id:"inputPasswordS",className:"form-control",placeholder:"Password"}),Object(d.jsx)("button",{onClick:function(t){t.preventDefault(),e.sign()},className:"btn btn-lg btn-primary btn-block",type:"submit",children:"Sign in"})]})})}}]),n}(s.Component)),p=function(e){Object(l.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(c.a)(this,n);for(var s=arguments.length,a=new Array(s),r=0;r<s;r++)a[r]=arguments[r];return(e=t.call.apply(t,[this].concat(a))).state={signinStatus:!1,route:"sign",name:"",email:"",counters:[]},e.routeChange=function(t){console.log("Route Change called"),"sign"===t?e.setState({route:"sign"}):"register"===t&&e.setState({route:"register"})},e.signinStatusChange=function(t){"signin"===t?e.setState({signinStatus:!0}):"signout"===t&&e.setState({signinStatus:!1})},e.setNameEmail=function(t,n){e.setState({name:t,email:n})},e.setCounters=function(){fetch("http://localhost:3001/getcounters",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e.state.email})}).then((function(e){if(404===e.status||401===e.status)throw Error;if(200===e.status)return e.json()})).then((function(t){e.setState({counters:t})})).catch((function(e){return console.log("ERROR2",e)}))},e}return Object(o.a)(n,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App container",children:[Object(d.jsx)(b,{routeChange:this.routeChange,signinStatusChange:this.signinStatusChange,signinStatus:this.state.signinStatus,route:this.state.route,name:this.state.name,counters:this.state.counters}),"register"===this.state.route?Object(d.jsx)(m,{}):this.state.signinStatus?Object(d.jsx)(j,{email:this.state.email,counters:this.state.counters,setCounters:this.setCounters}):Object(d.jsx)(g,{signinStatusChange:this.signinStatusChange,setNameEmail:this.setNameEmail,setCounters:this.setCounters})]})}}]),n}(s.Component);n(16);i.a.render(Object(d.jsx)(a.a.StrictMode,{children:Object(d.jsx)(p,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.32666349.chunk.js.map