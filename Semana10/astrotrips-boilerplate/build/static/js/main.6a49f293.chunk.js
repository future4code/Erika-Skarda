(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{145:function(e,n,t){e.exports=t.p+"static/media/plutao.69615cf6.jpg"},235:function(e,n,t){e.exports=t(384)},379:function(e,n,t){e.exports=t.p+"static/media/logo.64b65f0e.png"},380:function(e,n,t){e.exports=t.p+"static/media/marte.b8252334.jpg"},381:function(e,n,t){e.exports=t.p+"static/media/jupiter.08d1b3a3.jpg"},382:function(e,n,t){e.exports=t.p+"static/media/netuno.1152e527.png"},384:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(23),i=t.n(o),c=t(11),l=t(19),u=t(148),s=t(31),p=t(20),m=t(149),d=t.n(m),f=Object(s.createMuiTheme)({palette:{primary:d.a}}),h=t(25),g=t(69),b=t(33),O=t(26),v=t(27),y=t(29),j=t(28),w=t(30),E=t(21),x=t(36),T=t.n(x),k=t(18),S=t.n(k),C=t(12),D=t(65),P=t.n(D),L=t(153),_=t.n(L),I=t(152),A=t.n(I),q=t(66),H=t.n(q),F=t(22),N=t.n(F),M=t(38),z=t(39),B=t.n(z);function R(){var e=Object(c.a)(["\n  height:100vh;\n  width:100vw;\n  display:flex;\n  flex-direction:column;\n  justify-content:center;\n  align-items:center;\n \n"]);return R=function(){return e},e}function X(){var e=Object(c.a)(["\n  width: 30vw;\n  display:flex;\n  flex-direction:column;\n  padding:10px;\n  box-shadow: 3px 3px 4px #006064;\n\n  :hover{\n  box-shadow: 4px 4px 5px #006064;\n  }\n"]);return X=function(){return e},e}function V(){var e=Object(c.a)(["\n \n  gap: 12px;\n  place-content: center;\n  background: radial-gradient(circle, rgba(174,233,238,1) 0%, rgba(100,125,212,1) 100%);\n  display: flex;\n  flex-direction: column;\n"]);return V=function(){return e},e}var Y=C.b.form(V()),Z=Object(C.b)(p.b)(X()),J=C.b.div(R()),U=function(e){function n(e){var t;return Object(O.a)(this,n),(t=Object(y.a)(this,Object(j.a)(n).call(this,e))).handleFieldChange=function(e){t.setState(Object(b.a)({},e.target.name,e.target.value))},t.handleOnSubmit=function(e){e.preventDefault();var n=t.state,a=n.email,r=n.password;t.props.login(a,r),t.setState({email:"",password:""})},t.handleOnclickShowPassword=function(){t.setState(function(e){return{showPassword:!e.showPassword}})},t.state={email:"",password:"",showPassword:!1},t}return Object(w.a)(n,e),Object(v.a)(n,[{key:"render",value:function(){var e=this.state,n=e.email,t=e.password,a=e.showPassword;this.props.goToHome;return r.a.createElement(J,null,r.a.createElement(Z,null,r.a.createElement(Y,{onSubmit:this.handleOnSubmit},r.a.createElement(T.a,{onChange:this.handleFieldChange,required:!0,name:"email",type:"email",label:"E-mail",value:n,style:{margin:"10px"}}),r.a.createElement(T.a,{onChange:this.handleFieldChange,id:"outlined-adornment-password",name:"password",type:a?"text":"password",label:"Senha",value:t,style:{margin:"10px"},required:!0,InputProps:{endAdornment:r.a.createElement(P.a,{position:"end"},r.a.createElement(H.a,{"aria-label":"Toggle password visibility",onClick:this.handleOnclickShowPassword},a?r.a.createElement(A.a,null):r.a.createElement(_.a,null)))}}),r.a.createElement(S.a,{type:"submit"},"Login"))))}}]),n}(a.Component),$=Object(l.c)(null,function(e){return{goToHome:function(){return e(Object(E.e)(Xe.home))},goToListTripPage:function(){return e(Object(E.e)(Xe.list))},login:function(n,t){return e(function(e,n){return function(){var t=Object(M.a)(N.a.mark(function t(a){var r,o;return N.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return r={email:e,password:n},t.prev=1,t.next=4,B.a.post("".concat("https://us-central1-missao-newton.cloudfunctions.net/futureX/erika","/login"),r);case 4:o=t.sent,localStorage.setItem("token",o.data.token),a(Object(E.f)(Xe.list)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(1),window.alert("Dados incorretos!!!");case 12:case"end":return t.stop()}},t,null,[[1,9]])}));return function(e){return t.apply(this,arguments)}}()}(n,t))}}})(U),Q="https://us-central1-missao-newton.cloudfunctions.net/futureX/erika",G=function(){return function(){var e=Object(M.a)(N.a.mark(function e(n,t){var a;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,B.a.get("".concat(Q,"/trips"));case 2:a=e.sent,n({type:"SET_ALL_TRIPS",payload:{allTrips:a.data.trips}});case 4:case"end":return e.stop()}},e)}));return function(n,t){return e.apply(this,arguments)}}()};function K(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,a)}return t}function W(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?K(t,!0).forEach(function(n){Object(b.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):K(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}function ee(){var e=Object(c.a)(["\n  display: grid;\n  grid-auto-flow: row;\n  grid-gap: 20px;\n  justify-content: center;\n  align-items: center;\n"]);return ee=function(){return e},e}var ne=C.b.form(ee()),te=[{name:"name",placeholder:"Descreva",type:"text",label:"name",required:!0,title:"No m\xednimo 5 letras",pattern:"[A-Za-z \xe3\xe9\xc1\xe1\xea\xf5\xd5\xca\xed\xcd\xe7\xc7\xda\xfa\xfc\xdc]{5,}"},{name:"date",placeholder:"Data",type:"date",label:"Data",required:!0,title:"Data deve ser uma data no futuro",pattern:"(0[1-9]|1[012])[- /.](0[1-9]|[12][0-9]|3[01])[- /.](19|20)dd"},{name:"description",placeholder:"Description",type:"text",label:"Descritption",required:!0,title:"No m\xednimo 30 letras",pattern:"^[a-z]+${30,}"},{name:"duration",placeholder:"Duration in days",type:"number",label:"Duration in days",required:!0,title:"No m\xednimo 50 dias",pattern:"((^[5-9][0-9]?[0-9]$))"}],ae=function(e){function n(){var e,t;Object(O.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(y.a)(this,(e=Object(j.a)(n)).call.apply(e,[this].concat(r)))).state={form:{selectPlanet:"Escolha o planeta"}},t.componentDidMount=function(){null===window.localStorage.getItem("token")&&t.props.goToLogin()},t.handleOnChangeForm=function(e){var n=e.target,a=n.name,r=n.value;t.setState({form:W({},t.state.form,Object(b.a)({},a,r))})},t.handleOnSubmit=function(e){e.preventDefault(),t.props.createTrip(t.state.form,t.state.token),console.log(t.state.form)},t.handleOnChangeSelect=function(e){t.setState({form:W({},t.state.form,{selectPlanet:e.target.value})})},t}return Object(w.a)(n,e),Object(v.a)(n,[{key:"render",value:function(){var e=this,n=this.props,t=n.goToHome,o=n.goBack;return r.a.createElement(a.Fragment,null,r.a.createElement(ne,{onSubmit:this.handleOnSubmit},te.map(function(n){return r.a.createElement("div",{key:n.name},r.a.createElement("label",{htmlFor:n.name},n.name,": "),r.a.createElement(T.a,{name:n.name,placeholder:n.placeholder,type:n.type,value:e.state.form[n.name]||"",required:n.required,onChange:e.handleOnChangeForm,inputProps:n.pattern}))}),r.a.createElement("select",{required:!0,onChange:this.handleOnChangeSelect},r.a.createElement("option",null,"Escolha o planeta"),["Merc\xfario","V\xeanus","Terra","Marte","J\xfapiter","Saturno","Urano","Netuno","Plut\xe3o"].map(function(e){return r.a.createElement("option",{key:e,value:e},e)})),r.a.createElement(S.a,{type:"submit"},"Submit")),r.a.createElement("button",{onClick:t},"HomePage"),r.a.createElement("button",{onClick:o},"Voltar"))}}]),n}(a.Component),re=Object(l.c)(null,function(e){return{goToHome:function(){return e(Object(E.e)(Xe.home))},goBack:function(){return e(Object(E.c)())},createTrip:function(n,t){return e((a=n,function(){var e=Object(M.a)(N.a.mark(function e(n,t){var r;return N.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return r={headers:{auth:window.localStorage.getItem("token"),"Content-Type":"application/json"}},e.prev=1,e.next=4,B.a.post("".concat(Q,"/trips"),a,r);case 4:window.alert("Viagem criada"),n(Object(E.e)(Xe.list)),e.next=12;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0),window.alert("Viagem n\xe3o criada");case 12:case"end":return e.stop()}},e,null,[[1,8]])}));return function(n,t){return e.apply(this,arguments)}}()));var a},goToLogin:function(){return e(Object(E.f)(Xe.login))}}})(ae),oe=t(154);function ie(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,a)}return t}function ce(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?ie(t,!0).forEach(function(n){Object(b.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):ie(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var le=[{name:"name",placeholder:"Name",type:"text",label:"name",required:!0,title:"M\xednimo 3 letras",pattern:"[A-Za-z \xe3\xe9\xc1\xe1\xea\xf5\xd5\xca\xed\xcd\xe7\xc7\xda\xfa\xfc\xdc]{3,}"},{name:"age",placeholder:"Age",type:"number",label:"Age",required:!0,title:"Idade m\xednima \xe9 18",pattern:" min: 18 "},{name:"applicationText",placeholder:"porque sou um bom candidato(a)?",type:"text",label:"Application Text",required:!0,title:"[A-Za-z ]{30, }",pattern:"No m\xednimo 30 caracteres"},{name:"profession",placeholder:"Qual sua profiss\xe3o?",type:"text",label:"Profession",required:!0,title:"[A-Za-z ]{10, }",pattern:"No m\xednimo 10 caracteres"}],ue=function(e){function n(e){var t;return Object(O.a)(this,n),(t=Object(y.a)(this,Object(j.a)(n).call(this,e))).componentDidMount=function(){t.props.fetchAllTrips()},t.handleOnChangeForm=function(e){var n=e.target,a=n.name,r=n.value;t.state({form:ce({},t.state.form,Object(b.a)({},a,r))})},t.handleOnSubmit=function(e){e.preventDefault(),console.log(t.state.form),t.props.applyToTrip(t.state.form),t.props.applyToTrip(t.state.idTrip)},t.handleOnChangeSelect=function(e){t.setState({idTrip:e.target.value})},t.state={form:{country:"",value:"Escolha seu destino"},idTrip:""},t}return Object(w.a)(n,e),Object(v.a)(n,[{key:"selectCountry",value:function(e){this.setState({country:e})}},{key:"render",value:function(){var e=this,n=this.props.goToHome,t=this.state.country;return console.log(this.props.allTrips),r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.handleOnSubmit},le.map(function(n){return r.a.createElement("div",{key:n.name},r.a.createElement("label",{htmlFor:n.name},n.name,": "),r.a.createElement(T.a,{name:n.name,placeholder:n.placeholder,type:n.type,value:e.state.form[n.name]||"",required:n.required,onChange:e.handleOnChangeForm,inputProps:n.pattern}))}),r.a.createElement(oe.a,{value:t,onChange:function(n){return e.selectCountry(n)}}),r.a.createElement("select",{required:!0,onChange:this.handleOnChangeSelect},r.a.createElement("option",null,"Escolha seu destino"),this.props.allTrips.map(function(e){return r.a.createElement("option",{key:e.id,value:e.id},e.name," \ud83d\ude80 ",e.planet)})),r.a.createElement(S.a,{type:"submit"},"Submit")),r.a.createElement(S.a,{onClick:n},"HomePage"))}}]),n}(r.a.Component),se=Object(l.c)(function(e){return{allTrips:e.trips.allTrips}},function(e){return{goToHome:function(){return e(Object(E.e)(Xe.home))},fetchAllTrips:function(){return e(G())},applyToTrip:function(n,t){return e(function(e,n){return function(){var t=Object(M.a)(N.a.mark(function t(a,r){var o;return N.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return o={form:e},t.prev=1,t.next=4,B.a.post("https://us-central1-missao-newton.cloudfunctions.net/futureX/erika/trips/".concat(n,"/apply"),o);case 4:window.alert("Recebemos seu formul\xe1rio astronauta"),t.next=10;break;case 7:t.prev=7,t.t0=t.catch(1),window.alert("Algo deu errado com sua inscri\xe7\xe3o");case 10:case"end":return t.stop()}},t,null,[[1,7]])}));return function(e,n){return t.apply(this,arguments)}}()}(n,t))}}})(ue),pe=t(155),me=t.n(pe);function de(){var e=Object(c.a)(["\n  position: relative;\n  width: 2em;\n  height: 2em;\n  border: 3px solid #3cefff;\n  overflow: hidden;\n  animation: spin 3s ease infinite;\n}\n\n::before {\n  content: '';\n  position: absolute;\n  top: -3px;\n  left: -3px;\n  width: 2em;\n  height: 2em;\n  background-color: hsla(185, 100%, 62%, 0.75);\n  transform-origin: center bottom;\n  transform: scaleY(1);\n  animation: fill 3s linear infinite;\n}\n\n@keyframes spin {\n  50%,\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes fill {\n  25%,\n  50% {\n    transform: scaleY(0);\n  }\n  100% {\n    transform: scaleY(1);\n  }\n\n"]);return de=function(){return e},e}function fe(){var e=Object(c.a)(["\n    padding-top: 25px;\n    \n\n     ul {\n        display: grid;\n        grid-template-columns: repeat(3, 1fr);\n        grid-gap: 20px;\n        list-style-type: none;\n\n             > li {\n                display: flex;\n                flex-direction: column;\n                justify-content: space-between;\n                background: radial-gradient(circle, rgba(174,233,238,1) 0%, rgba(100,125,212,1) 100%);\n                border-radius: 4px;\n                padding: 20px;\n\n\n            Button {\n                margin-top: 15px;\n            }\n        }\n      \n                Button {\n          z-index: 1;\n          font-size: inherit;\n          font-family: inherit;\n          color: white;\n          padding: 0.5em 1em;\n          outline: none;\n          border: none;\n          background-color: hsl(236, 32%, 26%);\n        }\n\n        button:hover {\n          cursor: pointer;\n          animation: jelly 0.5s;\n        }\n\n        @keyframes jelly {\n          0%,\n          100% {\n            transform: scale(1, 1);\n          }\n          25% {\n            transform: scale(0.9, 1.1);\n          }\n          50% {\n            transform: scale(1.1, 0.9);\n          }\n          75% {\n            transform: scale(0.95, 1.05);\n          }\n        }\n\n        } \n    \n"]);return fe=function(){return e},e}function he(){var e=Object(c.a)(["\n    min-height: 90vh;\n    max-height: 100%;\n    \n    color: black;\n    padding: 0 18px;\n\n     > Button {\n        float: right;\n        margin: 40px 20px; \n    }\n\n    > h1 {\n        padding-top: 100px;\n        color: white;\n        text-align: center;\n    } \n"]);return he=function(){return e},e}var ge=C.b.div(he()),be=C.b.main(fe()),Oe=C.b.div(de()),ve=function(e){function n(e){var t;return Object(O.a)(this,n),(t=Object(y.a)(this,Object(j.a)(n).call(this,e))).componentDidMount=function(){var e=window.localStorage.getItem("token");null!==e&&e?t.props.fetchAllTrips():t.props.goToLogin()},t.handleLogout=function(){localStorage.clear(),t.props.goToLogin()},t.handleDetails=function(e){t.props.setTripChoosen(e),t.props.goToDetails()},t.handleDelete=function(e){t.props.setTripChoosen(e),t.props.deleteTrip(e)},t.state={},t}return Object(w.a)(n,e),Object(v.a)(n,[{key:"render",value:function(){var e=this,n=this.props,t=n.goToCreate,a=n.allTrips,o=null!==window.localStorage.getItem("token");return console.log(a),r.a.createElement(ge,null,r.a.createElement(S.a,{variant:"contained",onClick:t},"Create Trip"),o&&r.a.createElement(S.a,{variant:"contained",onClick:this.handleLogout},"Logout"),r.a.createElement("h1",null,"Lista de viagens"),r.a.createElement(be,null,r.a.createElement("ul",null,a?a.map(function(n){return r.a.createElement("li",{key:n.id},r.a.createElement(p.e,{component:"p"},r.a.createElement("strong",null,"Trip: "),n.name,r.a.createElement(me.a,{onCLick:function(){e.handleDelete(n.id)}})),r.a.createElement(p.e,{component:"p"},r.a.createElement("strong",null,"Planet: "),n.planet),r.a.createElement(p.e,{component:"p"},r.a.createElement("strong",null,"Description: "),n.description),r.a.createElement(p.e,{component:"p"},r.a.createElement("strong",null,"Duration: "),n.durationInDays),r.a.createElement(p.e,{component:"p"},r.a.createElement("strong",null,"Data: "),n.date," + days"),r.a.createElement(S.a,{variant:"contained",onClick:function(){e.handleDetails(n.id)}},"Details"))}):r.a.createElement(Oe,null))))}}]),n}(r.a.Component),ye=Object(l.c)(function(e){return{allTrips:e.trips.allTrips}},function(e){return{goToCreate:function(){return e(Object(E.e)(Xe.create))},goToDetails:function(){return e(Object(E.e)(Xe.details))},goToLogin:function(){return e(Object(E.f)(Xe.login))},deleteTrip:function(n){return e(function(e){return function(){var n=Object(M.a)(N.a.mark(function n(t,a){return N.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,B.a.delete("".concat(Q,"/trips/").concat(e),{headers:{auth:window.localStorage.getItem("token"),"Content-Type":"application/json"}});case 2:n.sent;case 3:case"end":return n.stop()}},n)}));return function(e,t){return n.apply(this,arguments)}}()}(n))},setTripChoosen:function(n){return e(function(e){return{type:"SET_TRIP_CHOOSEN_ID",payload:{id:e}}}(n))},fetchAllTrips:function(){return e(G())}}})(ve);function je(){var e=Object(c.a)(["\n  position: relative;\n  width: 10em;\n  height: 10em;\n  border: 3px solid #3cefff;\n  overflow: hidden;\n  animation: spin 3s ease infinite;\n  position: relative;\n  left:50vw;\n top: 40vh;\n}\n\n::before {\n  content: '';\n  position: absolute;\n  top: -3px;\n  left: -3px;\n  width: 10em;\n  height: 10em;\n  background-color: hsla(185, 100%, 62%, 0.75);\n  transform-origin: center bottom;\n  transform: scaleY(1);\n  animation: fill 3s linear infinite;\n}\n\n@keyframes spin {\n  50%,\n  100% {\n    transform: rotate(360deg);\n  }\n}\n\n@keyframes fill {\n  25%,\n  50% {\n    transform: scaleY(0);\n  }\n  100% {\n    transform: scaleY(1);\n  }\n\n"]);return je=function(){return e},e}function we(){var e=Object(c.a)(["\nbackground: white;\n"]);return we=function(){return e},e}var Ee=C.b.div(we()),xe=function(e){function n(){var e,t;Object(O.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(y.a)(this,(e=Object(j.a)(n)).call.apply(e,[this].concat(r)))).componentDidMount=function(){var e=window.localStorage.getItem("token");null!==e&&e?t.props.getTripDetail(t.props.id,e):t.props.goToLogin()},t.handleLogout=function(){localStorage.clear(),t.props.goToLogin()},t}return Object(w.a)(n,e),Object(v.a)(n,[{key:"render",value:function(){var e=this.props,n=e.goToHome,t=e.details,a=e.id,o=e.goBack,i=null!==window.localStorage.getItem("token");return console.log(t),r.a.createElement(Ee,null,i&&r.a.createElement(S.a,{variant:"contained",onClick:this.handleLogout},"Logout"),r.a.createElement(S.a,{variant:"contained",onClick:n},"HomePage"),r.a.createElement(S.a,{variant:"contained",onClick:o},"List Trip"),r.a.createElement(p.e,{component:"h1"},"Details"),r.a.createElement(p.e,{component:"p"},r.a.createElement("strong",null,"Trip:"),t.name),r.a.createElement(p.e,{component:"p"},r.a.createElement("strong",null,"Planet: "),t.planet),r.a.createElement(p.d,null),r.a.createElement(p.e,{component:"h3"},"Candidate:"),a.candidates?a.candidates.map(function(e){return r.a.createElement(p.b,{key:e.id},r.a.createElement(p.a,{alt:"Marvin",src:"../../img/Marvin.png"}))}):r.a.createElement(Te,null))}}]),n}(r.a.Component),Te=C.b.div(je()),ke=Object(l.c)(function(e){return{allTrips:e.trips.allTrips,details:e.trips.details,id:e.trips.id}},function(e){return{goToHome:function(){return e(Object(E.e)(Xe.home))},goBack:function(){return e(Object(E.c)())},getTripDetail:function(n){return e(function(e){return function(){var n=Object(M.a)(N.a.mark(function n(t,a){var r;return N.a.wrap(function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,B.a.get("".concat(Q,"/trip/").concat(e),{headers:{auth:window.localStorage.getItem("token"),"Content-Type":"application/json"}});case 2:r=n.sent,t({type:"SET_ALL_DETAILS",payload:{details:r.data.trip}}),console.log(r.data.trip);case 5:case"end":return n.stop()}},n)}));return function(e,t){return n.apply(this,arguments)}}()}(n))}}})(xe);function Se(){var e=Object(c.a)(["\n    height: 100px;\n    width: 100px;\n"]);return Se=function(){return e},e}function Ce(){var e=Object(c.a)(["\n   \n    height: 800px;\n    max-width: 1000px;\n    /* min-width: 100%; */\n    margin: 10px auto;\n    overflow: hidden;   \n    figure.slider-principal {\n        position: relative;\n        width: 500%;\n        height: 500%;\n        margin: 0;\n        left: 0;\n        animation: 20s slider infinite;\n    }\n    figure.slider-principal img {\n        width: 20%;\n        height: 60vh;\n        float: left;\n        background-size: cover;\n       \n    }\n    @keyframes slider {\n        0% { left: 0;}\n        20% { left: 0;}\n        25% { left: -100%;}\n        45% {left: -100%;}\n        50% { left: -200%;}\n        70% {left: -200%;}\n        75% {left: -300%;}\n        95% {left: -300%;}\n        100% {left: -400%}\n    }\n"]);return Ce=function(){return e},e}function De(){var e=Object(c.a)(["\n height: 100%; \n border-radius: 5px;\n cursor: pointer;\n"]);return De=function(){return e},e}function Pe(){var e=Object(c.a)(["\nheight: 100%;\n"]);return Pe=function(){return e},e}function Le(){var e=Object(c.a)(["\n  width: 70vw;\n  display: flex;\n  justify-content: space-between; \n  height: 100%;\n  @media screen and (max-width: 320px)  {\n  display: flex;\n  flex-direction: column;\n}\n"]);return Le=function(){return e},e}function _e(){var e=Object(c.a)(["\nwidth: 30vw;\ndisplay: flex;\njustify-content: space-between; \nalign-items: center;\n@media screen and (max-width: 320px)  {\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  margin-top: 2px; \n}\n"]);return _e=function(){return e},e}function Ie(){var e=Object(c.a)(["\n  display: flex;\n  justify-content: space-around;\n  align-items: center;\n  max-width: 100vw;\n  height: 10vh;\n  padding: 4px;\n  /* background: transparent; */\n  background-color:blue;\n  color:white;\n"]);return Ie=function(){return e},e}var Ae=C.b.div(Ie()),qe=C.b.div(_e()),He=C.b.div(Le()),Fe=C.b.div(Pe()),Ne=C.b.img(De()),Me=C.b.div(Ce()),ze=C.b.img(Se()),Be=function(e){function n(){var e,t;Object(O.a)(this,n);for(var a=arguments.length,r=new Array(a),o=0;o<a;o++)r[o]=arguments[o];return(t=Object(y.a)(this,(e=Object(j.a)(n)).call.apply(e,[this].concat(r)))).state={},t}return Object(w.a)(n,e),Object(v.a)(n,[{key:"render",value:function(){var e=this.props,n=e.goToLogin,o=e.goToForm,i=e.goToHome;return r.a.createElement(a.Fragment,null,r.a.createElement(Ae,null,r.a.createElement(He,null,r.a.createElement(Fe,null,r.a.createElement(Ne,{src:t(379)})),r.a.createElement(qe,null,r.a.createElement(S.a,{onClick:i},"Home"),r.a.createElement(S.a,{onClick:n},"Login"),r.a.createElement(S.a,{onClick:o},"Formul\xe1rio")))),r.a.createElement(Me,null,r.a.createElement("figure",{className:"slider-principal"},r.a.createElement(ze,{src:t(380)}),r.a.createElement(ze,{src:t(381)}),r.a.createElement(ze,{src:t(382)}),r.a.createElement(ze,{src:t(145)}),r.a.createElement(ze,{src:t(145)}))))}}]),n}(a.Component),Re=Object(l.c)(null,function(e){return{goToLogin:function(){return e(Object(E.e)(Xe.login))},goToForm:function(){return e(Object(E.e)(Xe.form))},goToHome:function(){return e(Object(E.e)(Xe.home))}}})(Be),Xe={home:"/",form:"/form",login:"/login",create:"/create",list:"/list",details:"/details"};var Ve=Object(l.c)()(function(e){return r.a.createElement(h.a,{history:e.history},r.a.createElement(g.c,null,r.a.createElement(g.a,{exact:!0,path:Xe.home,component:Re}),r.a.createElement(g.a,{exact:!0,path:Xe.create,component:re}),r.a.createElement(g.a,{exact:!0,path:Xe.login,component:$}),r.a.createElement(g.a,{exact:!0,path:Xe.form,component:se}),r.a.createElement(g.a,{exact:!0,path:Xe.list,component:ye}),r.a.createElement(g.a,{exact:!0,path:Xe.details,component:ke})))}),Ye=t(35),Ze=t(44);function Je(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter(function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable})),t.push.apply(t,a)}return t}function Ue(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?Je(t,!0).forEach(function(n){Object(b.a)(e,n,t[n])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):Je(t).forEach(function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))})}return e}var $e={allTrips:[],details:[],id:""},Qe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:$e,n=arguments.length>1?arguments[1]:void 0;switch(n.type){case"SET_ALL_TRIPS":return Ue({},e,{allTrips:n.payload.allTrips});case"SET_ALL_DETAILS'":return Ue({},e,{details:n.payload.details});case"SET_TRIP_CHOOSEN_ID":return Ue({},e,{id:n.payload.id});default:return e}},Ge=t(146);function Ke(){var e=Object(c.a)(['\n  body {\n    background-image: url("https://i2.wp.com/socientifica.com.br/wp-content/uploads/2018/01/estrelas.jpg?fit=1600%2C800&ssl=1");\n  }\n']);return Ke=function(){return e},e}var We,en=Object(C.a)(Ke()),nn=Object(Ye.a)(),tn=[Object(Ze.a)(Object(Ge.a)(nn),u.a),window.__REDUX_DEVTOOLS_EXTENSION__?window.__REDUX_DEVTOOLS_EXTENSION__():function(e){return e}],an=Object(Ze.e)((We=nn,Object(Ze.c)({router:Object(h.b)(We),trips:Qe})),Ze.d.apply(void 0,tn)),rn=function(){return r.a.createElement(l.a,{store:an},r.a.createElement(s.MuiThemeProvider,{theme:f},r.a.createElement(p.c,null),r.a.createElement(en,null),r.a.createElement(Ve,{history:nn})))},on=document.getElementById("root");i.a.render(r.a.createElement(rn,null),on)}},[[235,1,2]]]);
//# sourceMappingURL=main.6a49f293.chunk.js.map