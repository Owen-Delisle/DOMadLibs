(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{19:function(e,t,a){e.exports=a.p+"static/media/DOMadLipsIcon.e03b30ed.png"},21:function(e,t,a){e.exports=a(33)},26:function(e,t,a){},27:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(16),c=a.n(r),i=(a(26),a(5)),l=a(6),s=a(10),d=a(7),u=a(9),h=(a(27),a(17)),m=a(2);var p=a(8),g="word:updateWord";a(32);var b=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={word:"",wordToChange:""},a.handleChange=a.handleChange.bind(Object(m.a)(a)),a.handleSubmit=a.handleSubmit.bind(Object(m.a)(a)),a.onUpdateWord=a.onUpdateWord.bind(Object(m.a)(a)),a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"sendData",value:function(){var e,t=this;e=function(e){chrome.runtime.sendMessage({tabId:e.id,msg:{word:t.props.word},type:"formsend"})},chrome.tabs.query({active:!0,currentWindow:!0},function(t){e(t[0])})}},{key:"handleSubmit",value:function(){this.sendData()}},{key:"onUpdateWord",value:function(){this.sendData(),this.props.onUpdateWord(this.state.word,this.state.wordToChange)}},{key:"handleChange",value:function(e){this.setState(Object(h.a)({},e.target.name,e.target.value))}},{key:"render",value:function(){return o.a.createElement("form",{className:"Form"},o.a.createElement("h3",null,"Change"),o.a.createElement("input",{type:"text",name:"word",onChange:this.handleChange}),o.a.createElement("h3",null,"To"),o.a.createElement("input",{type:"text",name:"wordToChange",onChange:this.handleChange}),o.a.createElement("br",null),o.a.createElement("h2",{onClick:this.onUpdateWord},"ADD"),o.a.createElement("h2",{onClick:function(){return function(){try{localStorage.clear()}catch(e){console.log("ERROR from local storage save state",e)}}()}},"RESET"))}}]),t}(n.Component),f={onUpdateWord:function(e,t){return{type:g,payload:{word:e,wordToChange:t}}}},w=Object(p.b)(function(e){return{word:e.word}},f)(b),v=a(19),O=a.n(v),E=function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(s.a)(this,Object(d.a)(t).call(this,e))).state={subWords:!1},a}return Object(u.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement("header",{className:"App-header"},o.a.createElement("h1",{className:"App-title"},o.a.createElement("img",{className:"Image",src:O.a}),"DOMadLibs"),o.a.createElement(w,null)))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var y=a(4),j=a(20);var C=Object(y.b)({word:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0,a=t.type,n=t.payload;switch(a){case g:return[].concat(Object(j.a)(e),[{word:n.word,wordToChange:n.wordToChange}]);default:return e}}}),k=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return void console.log("LOAD ERR",t)}}(),S=Object(y.c)(C,k);S.subscribe(function(){!function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(a){console.log("ERROR from local storage save state",a)}}(S.getState())}),c.a.render(o.a.createElement(p.a,{store:S},o.a.createElement(E,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[21,1,2]]]);
//# sourceMappingURL=main.cd96cac0.chunk.js.map