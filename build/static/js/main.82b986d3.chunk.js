(this["webpackJsonpservice-portal"]=this["webpackJsonpservice-portal"]||[]).push([[0],{100:function(e,t,n){},109:function(e,t,n){},180:function(e,t,n){},206:function(e,t,n){},214:function(e,t){},216:function(e,t){},227:function(e,t){},229:function(e,t){},255:function(e,t){},257:function(e,t){},258:function(e,t){},263:function(e,t){},265:function(e,t){},284:function(e,t){},296:function(e,t){},299:function(e,t){},302:function(e,t,n){},303:function(e,t,n){},330:function(e,t,n){},331:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),o=n(37),i=n.n(o),r=(n(180),n(14)),s=n(31),l=n(10),d=n(11),j=n(15),h=n(13),u=n(12),m=(n(100),n(30)),b=n.n(m),p=n(0),x=n(57),f=!1;function O(){document.getElementById("password").value==document.getElementById("confirm_password").value?(document.getElementById("message").style.color="green",document.getElementById("message").innerHTML="matching"):(document.getElementById("message").style.color="red",document.getElementById("message").innerHTML="not matching")}var g=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={fullName:"",email:"",phoneNo:"",gender:"",occupation:"",location:"",password:"",experience:""},e.changeFullName=e.changeFullName.bind(Object(j.a)(e)),e.changeEmail=e.changeEmail.bind(Object(j.a)(e)),e.changeGender=e.changeGender.bind(Object(j.a)(e)),e.changeOccupation=e.changeOccupation.bind(Object(j.a)(e)),e.changeLocation=e.changeLocation.bind(Object(j.a)(e)),e.changePassword=e.changePassword.bind(Object(j.a)(e)),e.changePhoneNo=e.changePhoneNo.bind(Object(j.a)(e)),e.changeExperience=e.changeExperience.bind(Object(j.a)(e)),e.onSubmit=e.onSubmit.bind(Object(j.a)(e)),e}return Object(d.a)(n,[{key:"changeFullName",value:function(e){this.setState({fullName:e.target.value})}},{key:"changeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"changeGender",value:function(e){this.setState({gender:e.target.value})}},{key:"changeOccupation",value:function(e){this.setState({occupation:e.target.value})}},{key:"changeLocation",value:function(e){this.setState({location:e.target.value})}},{key:"changePassword",value:function(e){this.setState({password:e.target.value})}},{key:"changePhoneNo",value:function(e){this.setState({phoneNo:e.target.value})}},{key:"changeExperience",value:function(e){this.setState({experience:e.target.value})}},{key:"onSubmit",value:function(e){if("matching"==document.getElementById("message").innerHTML){e.preventDefault();var t={fullName:document.getElementById("fullName").value,email:document.getElementById("email").value,phoneNo:document.getElementById("phoneNo").value,gender:document.getElementById("gender").value,occupation:document.getElementById("occupation").value,location:document.getElementById("location").value,password:document.getElementById("password").value,experience:document.getElementById("experience").value};""!=t.fullName&&""!=t.email&&""!=t.phoneNo&&""!=t.gender&&""!=t.occupation&&""!=t.location&&""!=t.password&&""!=t.experience||(f=!0),console.log(f),console.log(t.fullName+t.email+t.phoneNo+t.gender+t.occupation+t.location+t.password+t.experience),f?x.fire({title:"error",text:"Don't leave empty!!",icon:"error",confirmButtonText:"retry"}).then((function(e){e.isConfirmed&&window.location.replace("/regpageseeker")})):b.a.post("/app/signupProfessional",t).then((function(e){200==e.status&&x.fire({title:"success",text:"success",icon:"success",confirmButtonText:"ok"}).then((function(e){e.isConfirmed&&window.location.replace("/loginProfessional")}))})),this.setState({fullName:"",email:"",phoneNo:"",gender:"",occupation:"",location:"",password:"",experience:""})}}},{key:"render",value:function(){var e=this;return Object(p.jsx)("header",{className:"background",children:Object(p.jsx)("div",{className:"division",children:Object(p.jsxs)("form",{className:"container",children:[Object(p.jsx)("p",{className:"grey-text",children:"Registration"}),Object(p.jsx)("label",{htmlFor:"defaultFormContactNameEx",className:"grey-text",children:"Your name :"}),Object(p.jsx)("input",{type:"text",id:"fullName",className:"form-control",placeholder:"full name",onChange:this.changeFullName,value:this.state.fullName}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{htmlFor:"defaultFormContactEmailEx",className:"grey-text",children:"Your email :"}),Object(p.jsx)("input",{type:"email",id:"email",className:"form-control",placeholder:"(eg: rahul@gmail.com)",onChange:this.changeEmail,value:this.state.email}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{htmlFor:"phone no",className:"grey-text",children:"Phone no :"}),Object(p.jsx)("input",{type:"tel",id:"phoneNo",pattern:"[0-9]{10}",className:"form-control",placeholder:"10-digit number",onChange:this.changePhoneNo,value:this.state.phoneNo}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{htmlFor:"gender",className:"gender",children:"Gender :"}),"\xa0\xa0",Object(p.jsxs)("select",{name:"gender",id:"gender",className:"dropdown",placeholder:"gender",onChange:this.changeGender,value:this.state.gender,children:[Object(p.jsx)("option",{value:"male",placeholder:"gender",children:"male"}),Object(p.jsx)("option",{value:"female",children:"female"}),Object(p.jsx)("option",{value:"other",children:"other"})]}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{for:"occupation",className:"grey-text",children:"Occupation :"}),Object(p.jsxs)("select",{name:"occupation",id:"occupation",className:"dropdown",onChange:this.changeOccupation,value:this.state.occupation,children:[Object(p.jsx)("option",{value:"carpenter",children:"carpenter"}),Object(p.jsx)("option",{value:"tutor",children:"tutor"}),Object(p.jsx)("option",{value:"other",children:"other"})]}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{for:"location",className:"grey-text",children:"Location :"}),Object(p.jsxs)("select",{name:"location",id:"location",className:"dropdown",onChange:this.changeLocation,value:this.state.location,children:[Object(p.jsx)("option",{value:"mumbai",children:"mumbai"}),Object(p.jsx)("option",{value:"hyderabad",children:"hyderabad"}),Object(p.jsx)("option",{value:"delhi",children:"delhi"}),Object(p.jsx)("option",{value:"other",children:"other"})]}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{htmlFor:"defaultExperience",className:"grey-text",children:"Password :"}),Object(p.jsx)("input",{type:"password",name:"password",id:"password",className:"form-control",placeholder:"password",onChange:this.changePassword,value:this.state.password}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{htmlFor:"defaultExperience",className:"grey-text",children:"Confirm Password :"}),Object(p.jsx)("input",{type:"password",name:"confirm_password",id:"confirm_password",onChange:O,className:"form-control",placeholder:"same as password"}),Object(p.jsx)("span",{id:"message"}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{htmlFor:"defaultFormContactMessageEx",className:"grey-text",children:"Experience :"}),Object(p.jsx)("textarea",{type:"text",id:"experience",className:"form-control",rows:"2",placeholder:"brief bio",onChange:this.changeExperience,value:this.state.experience}),Object(p.jsx)("br",{}),Object(p.jsx)(r.b,{render:function(t){var n;t.history;return Object(p.jsx)("button",(n={value:"Submit",className:"signup"},Object(s.a)(n,"value","Submit"),Object(s.a)(n,"onClick",e.onSubmit),Object(s.a)(n,"children","sign-up"),n))}})]})})})}}]),n}(a.Component),v=n(57),y=!1;function N(){document.getElementById("password").value==document.getElementById("confirm_password").value?(document.getElementById("message").style.color="green",document.getElementById("message").innerHTML="matching"):(document.getElementById("message").style.color="red",document.getElementById("message").innerHTML="not matching")}var w=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).state={fullName:"",email:"",phoneNo:"",gender:"",password:""},e.changeFullName=e.changeFullName.bind(Object(j.a)(e)).non,e.changeEmail=e.changeEmail.bind(Object(j.a)(e)),e.changeGender=e.changeGender.bind(Object(j.a)(e)),e.changePassword=e.changePassword.bind(Object(j.a)(e)),e.changePhoneNo=e.changePhoneNo.bind(Object(j.a)(e)),e.onSubmit=e.onSubmit.bind(Object(j.a)(e)),e}return Object(d.a)(n,[{key:"changeFullName",value:function(e){this.setState({fullName:e.target.value})}},{key:"changeEmail",value:function(e){this.setState({email:e.target.value})}},{key:"changeGender",value:function(e){this.setState({gender:e.target.value})}},{key:"changePassword",value:function(e){this.setState({password:e.target.value})}},{key:"changePhoneNo",value:function(e){this.setState({phoneNo:e.target.value})}},{key:"onSubmit",value:function(e){if("matching"==document.getElementById("message").innerHTML){e.preventDefault();var t={fullName:document.getElementById("fullName").value,email:document.getElementById("email").value,phoneNo:document.getElementById("phoneNo").value,gender:document.getElementById("gender").value,password:document.getElementById("password").value};""!=t.fullName&&""!=t.email&&""!=t.phoneNo&&""!=t.gender&&""!=t.password||(y=!0),console.log(y),y?v.fire({title:"error",text:"Don't leave empty!!",icon:"error",confirmButtonText:"retry"}).then((function(e){e.isConfirmed&&window.location.replace("/regpagegiver")})):b.a.post("/app/signupCustomer",t).then((function(e){200==e.status&&v.fire({title:"success",text:"success",icon:"success",confirmButtonText:"ok"}).then((function(e){e.isConfirmed&&window.location.replace("/loginCustomer")}))})),this.setState({fullName:"",email:"",phoneNo:"",gender:"",password:""})}}},{key:"render",value:function(){var e=this;return Object(p.jsx)("header",{className:"background",children:Object(p.jsxs)("form",{className:"container",children:[Object(p.jsx)("p",{className:"grey-text",children:"Registration"}),Object(p.jsx)("label",{htmlFor:"defaultFormContactNameEx",className:"grey-text",children:"Your name :"}),Object(p.jsx)("input",{type:"text",id:"fullName",className:"form-control",placeholder:"full name"}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{htmlFor:"defaultFormContactEmailEx",className:"grey-text",children:"Your email :"}),Object(p.jsx)("input",{type:"email",id:"email",className:"form-control",placeholder:"(eg: rahul@gmail.com)"}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{htmlFor:"phone no",className:"grey-text",children:"Phone no :"}),Object(p.jsx)("input",{id:"phoneNo",type:"tel",pattern:"[0-9]{10}",className:"form-control",placeholder:"10-digit number"}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{htmlFor:"gender",className:"grey-text",children:"Gender :"}),"\xa0\xa0",Object(p.jsxs)("select",{name:"gender",id:"gender",className:"dropdown",placeholder:"gender",children:[Object(p.jsx)("option",{value:"male",placeholder:"gender",children:"male"}),Object(p.jsx)("option",{value:"female",children:"female"}),Object(p.jsx)("option",{value:"other",children:"other"})]}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{htmlFor:"defaultExperience",className:"grey-text",children:"Password :"}),Object(p.jsx)("input",{type:"password",name:"password",id:"password",onChange:N,className:"form-control",placeholder:"password"}),Object(p.jsx)("br",{}),Object(p.jsx)("label",{htmlFor:"defaultExperience",className:"grey-text",children:"Confirm pass :"}),Object(p.jsx)("input",{type:"password",name:"confirm_password",id:"confirm_password",onChange:N,className:"form-control",placeholder:"same as password"}),Object(p.jsx)("span",{id:"message"}),Object(p.jsx)("br",{}),Object(p.jsx)(r.b,{render:function(t){var n;t.history;return Object(p.jsx)("button",(n={value:"Submit",className:"signup"},Object(s.a)(n,"value","Submit"),Object(s.a)(n,"onClick",e.onSubmit),Object(s.a)(n,"children","signup"),n))}})]})})}}]),n}(a.Component),k=(n(206),function(){return Object(p.jsx)("div",{children:Object(p.jsxs)("div",{className:"container-opt",children:[Object(p.jsx)("h1",{style:{color:"gray"},children:" Login as"}),Object(p.jsxs)("div",{className:"button",children:[Object(p.jsx)(r.b,{render:function(e){var t=e.history;return Object(p.jsx)("button",{className:"btn1",onClick:function(){t.push("/loginProfessional")},children:"PROFESSIONAL"})}}),Object(p.jsx)(r.b,{render:function(e){var t=e.history;return Object(p.jsx)("button",{className:"btn2",onClick:function(){t.push("/loginCustomer")},children:"CUSTOMER"})}})]})]})})}),C=function(){return Object(p.jsx)("h1",{children:" error page!!! "})},E=n(20),I=(n(109),n(57)),S=(n(207),function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"sign",value:function(){b.a.get("/app/signupProfessional",{params:{loginEmail:document.getElementById("email").value,loginPassword:document.getElementById("password").value}},{withCredentials:!0}).then((function(e){console.log(e.data),document.cookie="jwt="+e.data+";max-age=86400000","-1"==e.data?I.fire({title:"wrongPass!",text:"Wrong password",icon:"error",confirmButtonText:"retry"}):"-2"==e.data?I.fire({title:"Error!",text:"User dosen't exist",icon:"error",confirmButtonText:"retry"}):null!=e.data&&I.fire({title:"success",text:"success",icon:"success",confirmButtonText:"ok"}).then((function(e){e.isConfirmed&&window.location.replace("/profHome")}))}))}},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"container-login",children:[Object(p.jsx)("h1",{className:"text",children:"Email"}),Object(p.jsx)("input",{type:"text",id:"email",className:"box",placeholder:"email"}),Object(p.jsx)("h1",{className:"text",children:"password"}),Object(p.jsx)("input",{id:"password",type:"password",className:"box",placeholder:"password"}),Object(p.jsxs)("p",{className:"text-account",children:["Dont have a account? ",Object(p.jsx)(E.b,{to:"/regpageseeker",children:"click here "})]}),Object(p.jsx)(r.b,{render:function(t){t.history;return Object(p.jsx)("button",{className:"signin",onClick:e.sign,children:"sign-in"})}})]})}}]),n}(a.Component)),P=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"openNav",value:function(){document.getElementById("mySidebar").style.width="250px",document.getElementById("main").style.marginLeft="250px"}},{key:"closeNav",value:function(){document.getElementById("mySidebar").style.width="0",document.getElementById("main").style.marginLeft="0"}},{key:"Logout",value:function(){document.cookie="jwt=;max-age=0"}},{key:"render",value:function(){return Object(p.jsxs)("div",{children:[Object(p.jsxs)("div",{className:"topnav",children:[Object(p.jsx)("a",{className:"active",href:"/",onClick:this.Logout,children:"Logout"}),Object(p.jsx)("a",{to:"/news",children:"News"}),Object(p.jsx)("a",{href:"#contact",children:"Contact"}),Object(p.jsx)("a",{href:"#about",children:"About"})]}),Object(p.jsxs)("div",{id:"mySidebar",className:"sidebar",children:[Object(p.jsx)("a",{href:"javascript:void(0)",className:"closebtn",onClick:this.closeNav,children:"\xd7"}),Object(p.jsx)("a",{href:"#",children:"About"}),Object(p.jsx)("a",{href:"#",children:"Services"}),Object(p.jsx)("a",{href:"#",children:"Clients"}),Object(p.jsx)("a",{href:"#",children:"Contact"})]}),Object(p.jsxs)("div",{id:"main",children:[Object(p.jsx)("button",{className:"openbtn",onClick:this.openNav,children:"\u2630"}),Object(p.jsxs)("form",{children:[Object(p.jsx)("p",{children:"isjfiowjviwvmkwvomeiorvjmeroivje"}),Object(p.jsx)("p",{children:"ksefoiewmfnoiewjvmweopigvmew"})]})]})]})}}]),n}(a.Component),B=(Object(r.g)(P),n(34)),F=n(98),L=n(174),H=(n(302),n(303),n(168));var T,D,R,A,G=function(e){var t=e.items.map((function(t){return Object(p.jsx)("div",{className:"list",children:Object(p.jsxs)("p",{children:[t.text,Object(p.jsx)("span",{children:Object(p.jsx)(H.a,{className:"Faicons",icon:"trash",onClick:function(){return e.deleteItem(t.key)}})})]})},t.key)}));return Object(p.jsx)("div",{children:t})},z=n(41),M=n(173),U=n(7),J=n(8),Y=(n(27),J.a.div(T||(T=Object(U.a)(["   \n    position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */\n    left:5px;\n    top:78px;\n    height: 100%;\n    width: 75px;     /* Set the width of the sidebar */\n    z-index: 1;      /* Stay on top of everything */\n    top: 3.4em;      /* Stay at the top */\n    background-color: #222; /* Black */\n    overflow-x: hidden;     /* Disable horizontal scroll */\n    padding-top: 10px;\n"])))),_=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).onItemClick=function(e){a.setState({activePath:e})},a.state={activePath:e.location.pathname,items:[{path:"/Home",name:"Home",css:"fa fa-fw fa-home",key:1},{path:"/Search",name:"Search",css:"fa fa-fw fa-search",key:3},{path:"/History",name:"History",css:"fa fa-fw fa-clock",key:2}]},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.items,a=t.activePath;return Object(p.jsx)(Y,{children:n.map((function(t){return Object(p.jsx)(K,{path:t.path,name:t.name,css:t.css,onItemClick:e.onItemClick,active:t.path===a},t.key)}))})}}]),n}(c.a.Component),V=Object(r.g)(_),W=J.a.div(D||(D=Object(U.a)(["\n    height: 70px;\n    width: 75px; /* width must be same size as NavBar to center */\n    text-align: center; /* Aligns <a> inside of NavIcon div */\n    margin-bottom: 0;   /* Puts space between NavItems */\n    color: ",";\n    a {\n        font-size: 2.7em;\n        color: ",";\n        :hover {\n            opacity: 0.7;\n            text-decoration: none; /* Gets rid of underlining of icons */\n        }  \n    }\n"])),(function(e){return e.active?"#00ffff":"white"}),(function(e){return e.active?"#00ffff":"white"})),K=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).handleClick=function(){var t=e.props,n=t.path;(0,t.onItemClick)(n)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.active;return Object(p.jsx)(W,{active:e,children:Object(p.jsx)(E.b,{to:this.props.path,className:this.props.css,onClick:this.handleClick,children:Object(p.jsx)(q,{})})})}}]),n}(c.a.Component),q=J.a.div(R||(R=Object(U.a)(["\n\n"]))),Q=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsx)(V,{})}}]),n}(c.a.Component),X=n(333),Z=n(334),$=J.a.div(A||(A=Object(U.a)(["\n  .navbar { background-color: #222; position : fixed; top:0; right:0; left:0; }\n  a, .navbar-nav, .navbar-light .nav-link {\n    color: #ff9900;\n    &:hover { color: white; }\n  }\n  .navbar-brand {\n    font-size: 1.4em;\n    color: #ff9900;\n    &:hover { color: white; }\n  }\n  .form-center {\n    position: absolute !important;\n    left: 25%;\n    right: 25%;\n  }\n"]))),ee=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"Logout",value:function(){document.cookie="jwt=;max-age=0"}},{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsx)($,{children:Object(p.jsxs)(X.a,{expand:"lg",children:[Object(p.jsx)(X.a.Brand,{href:"/Home",children:"Customer DashBoard"}),Object(p.jsx)(X.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsx)(X.a.Collapse,{id:"basic-navbar-nav",children:Object(p.jsxs)(Z.a,{className:"ml-auto",children:[Object(p.jsx)(Z.a.Item,{children:Object(p.jsx)(Z.a.Link,{href:"/Home",children:"Home"})}),Object(p.jsx)(Z.a.Item,{children:Object(p.jsx)(Z.a.Link,{href:"/About",children:"About"})}),Object(p.jsx)(Z.a.Item,{children:Object(p.jsx)(Z.a.Link,{href:"/Profile",children:"My Profile"})}),Object(p.jsx)(Z.a.Item,{children:Object(p.jsx)(Z.a.Link,{href:"/",onClick:this.Logout,children:"Logout"})})]})})]})})})}}]),n}(a.Component);z.b.add(M.a);var te,ne,ae=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).state={items:[],currentItem:{text:"",key:""}},a.handleInput=a.handleInput.bind(Object(j.a)(a)),a.addItem=a.addItem.bind(Object(j.a)(a)),a.deleteItem=a.deleteItem.bind(Object(j.a)(a)),a}return Object(d.a)(n,[{key:"handleInput",value:function(e){this.setState({currentItem:{text:e.target.value,key:Date.now()}})}},{key:"addItem",value:function(e){e.preventDefault();var t=this.state.currentItem;if(""!==t.text){var n=[].concat(Object(L.a)(this.state.items),[t]);this.setState({items:n,currentItem:{text:"",key:""}})}}},{key:"deleteItem",value:function(e){var t=this.state.items.filter((function(t){return t.key!==e}));this.setState({items:t})}},{key:"render",value:function(){return Object(p.jsxs)("div",{className:"Home",children:[Object(p.jsx)(ee,{}),Object(p.jsx)(Q,{}),Object(p.jsx)("header",{children:Object(p.jsxs)("form",{id:"to-do-form",onSubmit:this.addItem,children:[Object(p.jsx)("label",{htmlFor:"location",className:"location",children:"Location :"}),"\xa0\xa0",Object(p.jsxs)("select",{name:"location",id:"location",className:"dropdown",placeholder:"location",onChange:this.changeGender,value:this.state.location,children:[Object(p.jsx)("option",{value:"Hyderabad",placeholder:"location",children:"Hyderabad"}),Object(p.jsx)("option",{value:"Delhi",children:"Delhi"}),Object(p.jsx)("option",{value:"Chennai",children:"Chennai"})]}),Object(p.jsx)("label",{htmlFor:"profession",className:"profession",children:"Profession :"}),"\xa0\xa0",Object(p.jsxs)("select",{name:"profession",id:"profession",className:"dropdown",placeholder:"profession",onChange:this.changeGender,value:this.state.gender,children:[Object(p.jsx)("option",{value:"Carpenter",placeholder:"profession",children:"Carpenter"}),Object(p.jsx)("option",{value:"Electrician",children:"Electrician"}),Object(p.jsx)("option",{value:"other",children:"other"})]}),Object(p.jsx)("input",{type:"text",placeholder:"Enter Text",value:this.state.currentItem.text,onChange:this.handleInput}),Object(p.jsx)("button",{type:"submit",children:"Add Post"})]})}),Object(p.jsx)(G,{items:this.state.items,deleteItem:this.deleteItem})]})}}]),n}(a.Component),ce=n(308),oe=(n(327).config(),document.cookie.split("=")[1]);function ie(e){var t=e.component,n=Object(F.a)(e,["component"]),a=!1;return oe?ce.verify(oe,"thisisakeyforthejwtandisaccessedatthebackendonly",(function(e,t){a=!e&&"customer"==t.type})):a=!1,Object(p.jsx)(r.b,Object(B.a)(Object(B.a)({},n),{},{render:function(e){return a?Object(p.jsx)(t,Object(B.a)({},e)):Object(p.jsx)(r.a,{to:{pathname:"/",state:e.location}})}}))}function re(e){var t=e.component,n=Object(F.a)(e,["component"]),a=!1;return oe?ce.verify(oe,"thisisakeyforthejwtandisaccessedatthebackendonly",(function(e,t){a=!e&&"professional"==t.type})):a=!1,Object(p.jsx)(r.b,Object(B.a)(Object(B.a)({},n),{},{render:function(e){return a?Object(p.jsx)(t,Object(B.a)({},e)):Object(p.jsx)(r.a,{to:{pathname:"/",state:e.location}})}}))}J.a.div(te||(te=Object(U.a)(["\n  display: grid;\n  grid-gap: 10px;\n  margin-top: 1em;\n  margin-left: 6em;\n  margin-right: 6em;\n  grid-template-columns: repeat(12, 1fr);\n  grid-auto-rows: minmax(25px, auto);\n"]))),J.a.div(ne||(ne=Object(U.a)(["\nmargin-top: 1em;\nmargin-left: 6em;\nmargin-right: 6em;\n\n"])));var se,le,de,je=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(ee,{}),Object(p.jsx)(Q,{}),Object(p.jsx)("h2",{children:"USER HISTORY"}),Object(p.jsx)("p",{children:"TRFDHHJD"})]})},he=J.a.div(se||(se=Object(U.a)(["\n  .navbar { background-color: #222; position : fixed; top:0; right:0; left:0; }\n  a, .navbar-nav, .navbar-light .nav-link {\n    color: #ff9900;\n    &:hover { color: white; }\n  }\n  .navbar-brand {\n    font-size: 1.4em;\n    color: #ff9900;\n    &:hover { color: white; }\n  }\n  .form-center {\n    position: absolute !important;\n    left: 25%;\n    right: 25%;\n  }\n"]))),ue=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"Logout",value:function(){document.cookie="jwt=;max-age=0"}},{key:"render",value:function(){return Object(p.jsx)("div",{children:Object(p.jsx)(he,{children:Object(p.jsxs)(X.a,{expand:"lg",children:[Object(p.jsx)(X.a.Brand,{href:"/ProfHome",children:"Professional DashBoard"}),Object(p.jsx)(X.a.Toggle,{"aria-controls":"basic-navbar-nav"}),Object(p.jsx)(X.a.Collapse,{id:"basic-navbar-nav",children:Object(p.jsxs)(Z.a,{className:"ml-auto",children:[Object(p.jsx)(Z.a.Item,{children:Object(p.jsx)(Z.a.Link,{href:"/ProfHome",children:"Home"})}),Object(p.jsx)(Z.a.Item,{children:Object(p.jsx)(Z.a.Link,{href:"/ProfAbout",children:"About"})}),Object(p.jsx)(Z.a.Item,{children:Object(p.jsx)(Z.a.Link,{href:"/ProfProfile",children:"My Profile"})}),Object(p.jsx)(Z.a.Item,{children:Object(p.jsx)(Z.a.Link,{href:"/",onClick:this.Logout,children:"Logout"})})]})})]})})})}}]),n}(a.Component),me=(J.a.div(le||(le=Object(U.a)(["\n  display: grid;\n  grid-gap: 10px;\n  margin-top: 1em;\n  margin-left: 6em;\n  margin-right: 6em;\n  grid-template-columns: repeat(12, 1fr);\n  grid-auto-rows: minmax(25px, auto);\n"]))),J.a.div(de||(de=Object(U.a)(["\nmargin-top: 1em;\nmargin-left: 6em;\nmargin-right: 6em;\n\n"])))),be=function(){return Object(p.jsxs)(me,{children:[Object(p.jsx)(ue,{}),Object(p.jsx)(Q,{}),Object(p.jsx)("h2",{children:"USER PROFILE"}),Object(p.jsx)("p",{children:"TRFDHHJDSAFGAG"})]})},pe=n(56),xe=n(46);n(330);function fe(){var e=Object(a.useState)([]),t=Object(pe.a)(e,2),n=t[0],c=t[1],o=Object(a.useState)(!1),i=Object(pe.a)(o,2),r=i[0],s=i[1],l=Object(a.useState)(""),d=Object(pe.a)(l,2),j=d[0],h=d[1],u=Object(a.useState)([]),m=Object(pe.a)(u,2),x=m[0],f=m[1];return Object(a.useEffect)((function(){s(!0),b.a.get("/professionals/all").then((function(e){c(e.data),s(!1)})).catch((function(e){console.log(e)}))}),[]),Object(a.useEffect)((function(){f(n.filter((function(e){return e.occupation.includes(j.toLowerCase())})))}),[j,n]),r?Object(p.jsx)("p",{children:"Loading Occupations..."}):Object(p.jsxs)("div",{className:"Search",children:[Object(p.jsx)("h1",{children:"List of professionals"}),Object(p.jsx)("input",{type:"text",placeholder:"Search by Occupation...",onChange:function(e){return h(e.target.value)}}),x.map((function(e,t){return Object(p.jsx)(Oe,Object(B.a)({},e),t)}))]})}var Oe=function(e){var t=e.occupation,n=e.fullName,a=e.phoneNo;return Object(p.jsx)(p.Fragment,{children:Object(p.jsx)("div",{className:"ml-5 mt-3",children:Object(p.jsx)(xe.a,{style:{width:"14rem"},children:Object(p.jsxs)(xe.a.Body,{children:[Object(p.jsx)(xe.a.Title,{style:{color:"black"},children:n}),Object(p.jsx)(xe.a.Subtitle,{className:"mb-2 text-muted",children:t}),Object(p.jsx)(xe.a.Text,{style:{color:"black"},children:Object(p.jsxs)("small",{children:[a," "]})})]})})})})},ge=document.getElementById("root");i.a.render(Object(p.jsx)(fe,{}),ge);var ve,ye,Ne=fe;J.a.div(ve||(ve=Object(U.a)(["\n  display: grid;\n  grid-gap: 10px;\n  margin-top: 1em;\n  margin-left: 6em;\n  margin-right: 6em;\n  grid-template-columns: repeat(12, 1fr);\n  grid-auto-rows: minmax(25px, auto);\n"]))),J.a.div(ye||(ye=Object(U.a)(["\nmargin-top: 1em;\nmargin-left: 6em;\nmargin-right: 6em;\n"])));var we,ke,Ce,Ee,Ie,Se,Pe,Be,Fe=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(ee,{}),Object(p.jsx)(Ne,{}),Object(p.jsx)(Q,{})]})},Le=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(ee,{}),Object(p.jsx)(Q,{}),Object(p.jsx)("h2",{children:"ABOUT THIS WEBSITE"}),Object(p.jsx)("p",{children:"THIS PORTAL'S OBJECTIVE IS TO CONNECTED SERVICE SEEKERS AND SERVICE PROVIDERS KEWLLL"})]})},He=J.a.div(we||(we=Object(U.a)(["   \n    position: fixed;     /* Fixed Sidebar (stay in place on scroll and position relative to viewport) */\n    left:5px;\n    top:78px;\n    height: 100%;\n    width: 75px;     /* Set the width of the sidebar */\n    z-index: 1;      /* Stay on top of everything */\n    top: 3.4em;      /* Stay at the top */\n    background-color: #222; /* Black */\n    overflow-x: hidden;     /* Disable horizontal scroll */\n    padding-top: 10px;\n"]))),Te=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(e){var a;return Object(l.a)(this,n),(a=t.call(this,e)).onItemClick=function(e){a.setState({activePath:e})},a.state={activePath:e.location.pathname,items:[{path:"/ProfHome",name:"ProfHome",css:"fa fa-fw fa-home",key:1},{path:"/ProfHistory",name:"ProfHistory",css:"fa fa-fw fa-clock",key:2}]},a}return Object(d.a)(n,[{key:"render",value:function(){var e=this,t=this.state,n=t.items,a=t.activePath;return Object(p.jsx)(He,{children:n.map((function(t){return Object(p.jsx)(Ae,{path:t.path,name:t.name,css:t.css,onItemClick:e.onItemClick,active:t.path===a},t.key)}))})}}]),n}(c.a.Component),De=Object(r.g)(Te),Re=J.a.div(ke||(ke=Object(U.a)(["\n    height: 70px;\n    width: 75px; /* width must be same size as NavBar to center */\n    text-align: center; /* Aligns <a> inside of NavIcon div */\n    margin-bottom: 0;   /* Puts space between NavItems */\n    color: ",";\n    a {\n        font-size: 2.7em;\n        color: ",";\n        :hover {\n            opacity: 0.7;\n            text-decoration: none; /* Gets rid of underlining of icons */\n        }  \n    }\n"])),(function(e){return e.active?"#00ffff":"white"}),(function(e){return e.active?"#00ffff":"white"})),Ae=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,c=new Array(a),o=0;o<a;o++)c[o]=arguments[o];return(e=t.call.apply(t,[this].concat(c))).handleClick=function(){var t=e.props,n=t.path;(0,t.onItemClick)(n)},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this.props.active;return Object(p.jsx)(Re,{active:e,children:Object(p.jsx)(E.b,{to:this.props.path,className:this.props.css,onClick:this.handleClick,children:Object(p.jsx)(Ge,{})})})}}]),n}(c.a.Component),Ge=J.a.div(Ce||(Ce=Object(U.a)(["\n\n"]))),ze=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"render",value:function(){return Object(p.jsx)(De,{})}}]),n}(c.a.Component),Me=function(){return Object(p.jsxs)("div",{children:[Object(p.jsx)(ue,{}),Object(p.jsx)(ze,{}),Object(p.jsx)("h2",{children:"aboutY professional"}),Object(p.jsx)("p",{children:"TRFDHHJD"})]})},Ue=(J.a.div(Ee||(Ee=Object(U.a)(["\n  display: grid;\n  grid-gap: 200px;\n  margin-top: 1em;\n  margin-left: 6em;\n  margin-right: 6em;\n  grid-template-columns: repeat(12, 1fr);\n  grid-auto-rows: minmax(25px, auto);\n"]))),function(e){return Object(p.jsxs)("div",{children:[Object(p.jsx)(ue,{}),Object(p.jsx)(ze,{}),Object(p.jsx)("h2",{children:"CURRENT POSTS OF PROFESSIONAL"})]})}),Je=(J.a.div(Ie||(Ie=Object(U.a)(["\n  display: grid;\n  grid-gap: 10px;\n  margin-top: 1em;\n  margin-left: 6em;\n  margin-right: 6em;\n  grid-template-columns: repeat(12, 1fr);\n  grid-auto-rows: minmax(25px, auto);\n"]))),J.a.div(Se||(Se=Object(U.a)(["\nalign-text=center;\n\n"])))),Ye=function(){return Object(p.jsx)("div",{children:Object(p.jsxs)(Je,{children:[Object(p.jsx)(ue,{}),Object(p.jsx)(ze,{}),Object(p.jsx)("h2",{children:"USER HISTORY professional"}),Object(p.jsx)("p",{children:"TRFDHHJD"})]})})},_e=(J.a.div(Pe||(Pe=Object(U.a)(["\n  display: grid;\n  grid-gap: 10px;\n  margin-top: 1em;\n  margin-left: 6em;\n  margin-right: 6em;\n  grid-template-columns: repeat(12, 1fr);\n  grid-auto-rows: minmax(25px, auto);\n"]))),J.a.div(Be||(Be=Object(U.a)(["\nmargin-top: 1em;\nmargin-left: 6em;\nmargin-right: 6em;\n\n"])))),Ve=function(){return Object(p.jsxs)(_e,{children:[Object(p.jsx)(ue,{}),Object(p.jsx)(ze,{}),Object(p.jsx)("h2",{children:"USER PROFILE professional"}),Object(p.jsx)("p",{children:"professional profile"})]})},We=n(57),Ke=function(e){Object(h.a)(n,e);var t=Object(u.a)(n);function n(){return Object(l.a)(this,n),t.apply(this,arguments)}return Object(d.a)(n,[{key:"sign",value:function(){b.a.get("/app/signupCustomer",{params:{loginEmail:document.getElementById("email").value,loginPassword:document.getElementById("password").value}},{withCredentials:!0}).then((function(e){document.cookie="jwt="+e.data+";max-age=86400000","-1"==e.data?We.fire({title:"wrongPass!",text:"Wrong password",icon:"error",confirmButtonText:"retry"}):"-2"==e.data?We.fire({title:"Error!",text:"User dosen't exist",icon:"error",confirmButtonText:"retry"}):null!=e.data&&We.fire({title:"success",text:"success",icon:"success",confirmButtonText:"ok"}).then((function(e){e.isConfirmed&&window.location.replace("/Home")}))}))}},{key:"render",value:function(){var e=this;return Object(p.jsxs)("div",{className:"container-login",children:[Object(p.jsx)("h1",{className:"text",children:"Email"}),Object(p.jsx)("input",{type:"text",id:"email",className:"box",placeholder:"email"}),Object(p.jsx)("h1",{className:"text",children:"password"}),Object(p.jsx)("input",{id:"password",type:"password",className:"box",placeholder:"password"}),Object(p.jsxs)("p",{className:"text-account",children:["Dont have a account? ",Object(p.jsx)(E.b,{to:"/regpagegiver",children:"click here "})]}),Object(p.jsx)(r.b,{render:function(t){t.history;return Object(p.jsx)("button",{className:"signin",onClick:e.sign,children:"sign-in"})}})]})}}]),n}(a.Component);var qe=function(){return Object(p.jsx)("div",{className:"App",children:Object(p.jsx)("header",{className:"App-header",children:Object(p.jsxs)(r.d,{children:[Object(p.jsx)(r.b,{exact:!0,path:"/",component:k}),Object(p.jsx)(r.b,{exact:!0,path:"/loginProfessional",component:S}),Object(p.jsx)(r.b,{exact:!0,path:"/loginCustomer",component:Ke}),Object(p.jsx)(r.b,{exact:!0,path:"/regpageseeker",component:g}),Object(p.jsx)(r.b,{exact:!0,path:"/regpagegiver",component:w}),Object(p.jsx)(ie,{exact:!0,path:"/Home",component:ae}),Object(p.jsx)(ie,{exact:!0,path:"/history",component:je}),Object(p.jsx)(ie,{exact:!0,path:"/profile",component:be}),Object(p.jsx)(ie,{exact:!0,path:"/about",component:Le}),Object(p.jsx)(ie,{exact:!0,path:"/Search",component:Fe}),Object(p.jsx)(re,{exact:!0,path:"/ProfHistory",component:Ye}),Object(p.jsx)(re,{exact:!0,path:"/ProfHome",component:Ue}),Object(p.jsx)(re,{exact:!0,path:"/ProfProfile",component:Ve}),Object(p.jsx)(re,{exact:!0,path:"/ProfAbout",component:Me}),Object(p.jsx)(r.b,{component:C})]})})})},Qe=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,335)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,i=t.getTTFB;n(e),a(e),c(e),o(e),i(e)}))};i.a.render(Object(p.jsx)(E.a,{children:Object(p.jsx)(qe,{})}),document.getElementById("root")),Qe()}},[[331,1,2]]]);
//# sourceMappingURL=main.82b986d3.chunk.js.map