(this["webpackJsonpconvert-number-bases"]=this["webpackJsonpconvert-number-bases"]||[]).push([[0],{13:function(e,n,t){},14:function(e,n,t){},15:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(7),s=t.n(o),c=(t(13),t(2)),i=t(3),u=t(1),l=t(5),h=t(4),b=(t(14),function(e){Object(l.a)(t,e);var n=Object(h.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=n.call(this,e)).handleChange=a.handleChange.bind(Object(u.a)(a)),a}return Object(i.a)(t,[{key:"handleChange",value:function(e){var n=+e.target.value,t=function(e,n){return console.log(e,n,e%10<n),e%10<n}(n,this.props.base)?parseInt(n,this.props.base):this.props.number;this.props.onChange(t)}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("label",null,"Base ",this.props.base),r.a.createElement("input",{value:(e=this.props.number,n=this.props.base,e.toString(n)),onChange:this.handleChange}));var e,n}}]),t}(r.a.Component)),m=function(e){Object(l.a)(t,e);var n=Object(h.a)(t);function t(e){var a;return Object(c.a)(this,t),(a=n.call(this,e)).state={number:0},a.handleChange=a.handleChange.bind(Object(u.a)(a)),a}return Object(i.a)(t,[{key:"handleChange",value:function(e){this.setState({number:e})}},{key:"render",value:function(){var e=this,n=[2,8,10].map((function(n,t){return r.a.createElement(b,{number:e.state.number,onChange:e.handleChange,base:n,key:t})}));return r.a.createElement("div",null,n)}}]),t}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(m,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,n,t){e.exports=t(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.26d2d8b1.chunk.js.map