(this.webpackJsonpspotf4=this.webpackJsonpspotf4||[]).push([[0],{26:function(t,n,e){t.exports=e(49)},31:function(t,n,e){},49:function(t,n,e){"use strict";e.r(n);var a=e(0),r=e.n(a),o=e(21),i=e.n(o),l=(e(31),e(2)),c=e(4),s=e(5),u=e(7),d=e(8),f=e(6),p=e.n(f),h=e(3);function m(){var t=Object(l.a)(['\nwidth: 30%;\n  z-index: 1;\n  position: relative;\n  font-size: inherit;\n  font-family: inherit;\n  color: white;\n  padding: 0.5em 1em;\n  outline: none;\n  border: none;\n  background-color: hsl(236, 32%, 26%);\n  overflow: hidden;\n  cursor: pointer;\n\n  ::after {\n    content: "";\n    z-index: -1;\n    background-color: hsla(0, 0%, 100%, 0.2);\n    position: absolute;\n    top: -50%;\n    bottom: -50%;\n    width: 1.25em;\n    transform: translate3d(-525%, 0, 0) rotate(35deg);\n  }\n\n  :hover::after {\n    transition: transform 0.45s ease-in-out;\n    transform: translate3d(200%, 0, 0) rotate(35deg);\n  }\n']);return m=function(){return t},t}function g(){var t=Object(l.a)([" \n    border-radius: 5px;\n    border: 1px solid black;\n    margin: 10px;\n    padding: 5px 2px;\n"]);return g=function(){return t},t}function b(){var t=Object(l.a)(["\n    display: flex;\n    flex-direction: column;    \n    width: 33vw;\n    margin:100px;\n    border: 1px double black;\n    padding: 30px;\n"]);return b=function(){return t},t}var v=function(t){Object(d.a)(e,t);var n=Object(u.a)(e);function e(t){var a;return Object(c.a)(this,e),(a=n.call(this,t)).onchangePlaylist=function(t){a.setState({inputPlaylist:t.target.value})},a.createPlaylists=function(){var t={name:a.state.inputPlaylist};p.a.post("".concat("https://us-central1-future-apis.cloudfunctions.net/spotifour","/playlists"),t,{headers:{auth:"Erika-Hamilton"}}).then((function(t){console.log("Playlist Criada")})).catch((function(){console.log("Erro")}))},a.state={inputPlaylist:""},a}return Object(s.a)(e,[{key:"render",value:function(){return r.a.createElement(y,null,r.a.createElement("div",null,r.a.createElement("label",{for:"nome"},"Playlist: "),r.a.createElement(P,{type:"text",name:"nome",onChange:this.onchangePlaylist,value:this.state.inputPlaylist})),r.a.createElement(x,{onClick:this.createPlaylist},"Salvar"))}}]),e}(r.a.Component),y=h.a.div(b()),P=h.a.input(g()),x=h.a.button(m()),E=v;function w(){var t=Object(l.a)([" \n   width: 30%;\n   margin-bottom: 10px;\n   padding-bottom: 5px;\n  border-bottom: 1px solid black;\n  display: flex;\n  justify-content: space-between;\n  color:black;\n"]);return w=function(){return t},t}function j(){var t=Object(l.a)([" \n  color: red;\n  cursor:pointer\n  font-size: 20px;\n "]);return j=function(){return t},t}function k(){var t=Object(l.a)(["\n  display:flex\n  flex-direction: column;\n  margin:100px;\n  padding: 30px;\n"]);return k=function(){return t},t}var O=function(t){Object(d.a)(e,t);var n=Object(u.a)(e);function e(t){var a;return Object(c.a)(this,e),(a=n.call(this,t)).searchPlaylist=function(){p.a.get("https://us-central1-future-apis.cloudfunctions.net/spotifour/playlists",{headers:{auth:"Erika-Hamilton"}}).then((function(t){var n=t.data.result.list;a.setState({listaPlaylists:n})})).catch((function(t){console.log(t),a.setState({errorMessage:"Erro em acrescentar"})}))},a.deletePlaylist=function(t){window.confirm("Tem certeza de que deseja deletar essa playlist?")?p.a.delete("".concat("https://us-central1-future-apis.cloudfunctions.net/spotifour","/playlists/").concat(t),{headers:{"api-token":"Erika-Hamilton"}}).then((function(t){window.alert("Usu\xe1rio deletado!")})).catch((function(t){a.setState({errorMessage:"Erro"})})):window.alert("Playlist Deletada")},a.state={listaPlaylist:[],errorMessage:void 0},a}return Object(s.a)(e,[{key:"componentDidMount",value:function(){this.searchPlaylist()}},{key:"render",value:function(){var t=this;return r.a.createElement(C,null,r.a.createElement("h2",null,"Suas Playlist: "),r.a.createElement("ul",null,this.state.listaPlaylist.map((function(n){return r.a.createElement(z,null,r.a.createElement("span",null,n.name),r.a.createElement(S,{onClick:function(){return t.deletePlaylist(n.id)}}," X "))}))))}}]),e}(r.a.Component),C=h.a.div(k()),S=h.a.button(j()),z=h.a.li(w()),M=O;function H(){var t=Object(l.a)(["\n  display: grid;\n  justify-items: center;\n  gap: 20px;\n"]);return H=function(){return t},t}var B=function(t){Object(d.a)(e,t);var n=Object(u.a)(e);function e(t){var a;return Object(c.a)(this,e),(a=n.call(this,t)).changeComponent=function(){switch(a.state.changePage){case 0:return r.a.createElement(E,null);case 1:return r.a.createElement(M,null);default:return r.a.createElement(E,null)}},a.nextPage=function(){a.setState({changePage:0!=a.state.changePage?0:1})},a.state={changePage:0},a}return Object(s.a)(e,[{key:"render",value:function(){var t=this,n=this.changeComponent();return r.a.createElement("div",null,r.a.createElement("button",{onClick:function(n){n.target.focus(),t.nextPage()}},0!=this.state.changePage?"Playlists":"Criar Playlist"),n)}}]),e}(r.a.Component),D=(h.a.div(H()),B);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(D,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()})).catch((function(t){console.error(t.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.ac2fa8cb.chunk.js.map