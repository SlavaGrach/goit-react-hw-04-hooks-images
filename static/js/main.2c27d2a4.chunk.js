(this["webpackJsonpgoit-react-hw-04-hooks-images"]=this["webpackJsonpgoit-react-hw-04-hooks-images"]||[]).push([[0],{31:function(e,t,n){},33:function(e,t,n){},76:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(9),c=n.n(i),o=(n(31),n(5)),s=n.n(o),p=n(13),l=n(8),d=n(6),u=(n(33),n(14)),b=(n(34),n(3));var x=Object(b.a)("header",{target:"e1jej2491"})({name:"1ssw7nl",styles:"top:0;left:0;position:sticky;z-index:1100;display:flex;justify-content:center;align-items:center;min-height:64px;padding-right:24px;padding-left:24px;padding-top:12px;padding-bottom:12px;color:#fff;background-color:#3f51b5;box-shadow:0px 2px 4px -1px rgba(0, 0, 0, 0.2),0px 4px 5px 0px rgba(0, 0, 0, 0.14),0px 1px 10px 0px rgba(0, 0, 0, 0.12)"}),g=Object(b.a)("form",{target:"e1jej2490"})({name:"g5xafe",styles:'display:flex;align-items:center;width:100%;max-width:600px;background-color:#fff;border-radius:3px;overflow:hidden;& button{display:inline-block;width:48px;height:48px;border:0;background-image:url("https://image.flaticon.com/icons/svg/149/149852.svg");background-size:40%;background-repeat:no-repeat;background-position:center;opacity:0.6;transition:opacity 250ms cubic-bezier(0.4, 0, 0.2, 1);cursor:pointer;outline:none;}& button:hover{opacity:1;}& span{position:absolute;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;clip-path:inset(50%);border:0;}& input{display:inline-block;width:100%;font:inherit;font-size:20px;border:none;outline:none;padding-left:4px;padding-right:4px;}&input::placeholder{font:inherit;font-size:18px;}'}),h=n(1),f=function(e){var t=e.onSubmit;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(x,{children:Object(h.jsxs)(g,{onSubmit:function(e){e.preventDefault();var n=e.target.elements.imageName.value.trim();n&&t(n)},children:[Object(h.jsx)("button",{type:"submit",children:Object(h.jsx)("span",{children:"Search"})}),Object(h.jsx)("input",{type:"text",name:"imageName",autoComplete:"off",autoFocus:!0,placeholder:"Search images and photos"})]})})})},j=n(24),m=n(25),O=n(11),v=n.n(O);v.a.defaults.baseURL="https://pixabay.com/api/";var w=function(){function e(){Object(j.a)(this,e)}return Object(m.a)(e,null,[{key:"getImages",value:function(){var e=Object(l.a)(s.a.mark((function e(t,n){var a,r,i;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return"6482848-443bdcc87ab7c743d3374b0c5",a="?q=".concat(t,"&page=").concat(n,"&key=").concat("6482848-443bdcc87ab7c743d3374b0c5","&image_type=photo&orientation=horizontal&per_page=12"),e.next=4,v.a.get(a);case 4:return r=e.sent,i=r.data,e.abrupt("return",i.hits);case 7:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}()}]),e}();var y=Object(b.a)("li",{target:"e1f02xps0"})({name:"12uiiq6",styles:"border-radius:2px;box-shadow:0px 1px 3px 0px rgba(0, 0, 0, 0.2),0px 1px 1px 0px rgba(0, 0, 0, 0.14),0px 2px 1px -1px rgba(0, 0, 0, 0.12);& img{width:100%;height:260px;object-fit:cover;transition:transform 250ms cubic-bezier(0.4, 0, 0.2, 1);}& img:hover{transform:scale(1.03);cursor:zoom-in;}"}),k=function(e){var t=e.src,n=e.alt,a=e.largeImageURL,r=e.onSelect;return Object(h.jsx)(y,{onClick:function(){r(a)},children:Object(h.jsx)("img",{src:t,alt:n})})};var S=Object(b.a)("ul",{target:"ehfmf380"})({name:"1bhb8yv",styles:"display:grid;max-width:calc(100vw - 48px);grid-template-columns:repeat(auto-fill, minmax(320px, 1fr));grid-gap:16px;margin-top:0;margin-bottom:0;padding:0;list-style:none;margin-left:auto;margin-right:auto"}),z=function(e){var t=e.images,n=e.onSelect;return Object(h.jsx)("div",{children:Object(h.jsx)(S,{children:t.map((function(e){var t=e.id,a=e.webformatURL,r=e.tags,i=e.largeImageURL;return Object(h.jsx)(k,{onSelect:n,src:a,alt:r,largeImageURL:i},t)}))})})};var E=Object(b.a)("button",{target:"e122mgko0"})({name:"129wpx6",styles:"padding:8px 16px;border-radius:2px;background-color:#3f51b5;transition:all 250ms cubic-bezier(0.4, 0, 0.2, 1);text-align:center;display:inline-block;color:#fff;border:0;text-decoration:none;cursor:pointer;font-family:inherit;font-size:18px;line-height:24px;font-style:normal;font-weight:500;min-width:180px;box-shadow:0px 3px 1px -2px rgba(0, 0, 0, 0.2),0px 2px 2px 0px rgba(0, 0, 0, 0.14),0px 1px 5px 0px rgba(0, 0, 0, 0.12);&:hover,&:focus{background-color:#303f9f;}"}),I=function(e){var t=e.onClick;return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(E,{onClick:t,children:"Load more"})})},L=n(26),C=n.n(L);var F=Object(b.a)("div",{target:"e1v3peak0"})({name:"jcrpws",styles:"display:block;margin:0 auto;align-items:center;padding-top:150px"}),N=function(){return Object(h.jsx)(h.Fragment,{children:Object(h.jsx)(F,{children:Object(h.jsx)(C.a,{type:"Oval",color:"#3f51b5",height:100,width:100,timeout:2e3})})})};var R=Object(b.a)("div",{target:"e1d9azhh1"})({name:"8i9ttg",styles:"position:fixed;top:0;left:0;width:100vw;height:100vh;display:flex;justify-content:center;align-items:center;background-color:rgba(0, 0, 0, 0.8);z-index:1200"}),U=Object(b.a)("div",{target:"e1d9azhh0"})({name:"sve88p",styles:"max-width:calc(100vw - 48px);max-height:calc(100vh - 24px)"}),M=function(e){var t=e.src,n=e.closeModal;return Object(h.jsx)(R,{onClick:n,children:Object(h.jsx)(U,{children:Object(h.jsx)("img",{src:t,alt:""})})})};function q(){var e=Object(a.useState)(null),t=Object(d.a)(e,2),n=t[0],r=t[1],i=Object(a.useState)([]),c=Object(d.a)(i,2),o=c[0],b=c[1],x=Object(a.useState)(1),g=Object(d.a)(x,2),j=g[0],m=g[1],O=Object(a.useState)("idle"),v=Object(d.a)(O,2),y=v[0],k=v[1],S=Object(a.useState)(null),E=Object(d.a)(S,2),L=E[0],C=E[1];Object(a.useEffect)((function(){n&&(k("pending"),function(){var e=Object(l.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,w.getImages(n,j);case 3:if((t=e.sent).length){e.next=6;break}throw new Error;case 6:k("resolved"),b((function(e){return[].concat(Object(p.a)(e),Object(p.a)(t))})),window.scrollTo({top:document.documentElement.scrollHeight,behavior:"smooth"}),e.next=15;break;case 11:e.prev=11,e.t0=e.catch(0),k("rejected"),u.b.warning("Not Found any images by query: ".concat(n));case 15:case"end":return e.stop()}}),e,null,[[0,11]])})));return function(){return e.apply(this,arguments)}}()())}),[n,j]),Object(a.useEffect)((function(){L&&window.addEventListener("keydown",F)}),[L]);var F=function(e){"Escape"===e.key&&C(null)};return Object(h.jsxs)("div",{className:"App",children:[Object(h.jsx)(f,{onSubmit:function(e){r(null),b([]),m(1),k("idle"),r(e)}}),"pending"===y&&Object(h.jsx)(N,{}),Object(h.jsx)(z,{images:o,onSelect:function(e){C(e)}}),L&&Object(h.jsx)(M,{closeModal:function(e){"IMG"!==e.target.nodeName&&C(null)},src:L}),o.length>0&&Object(h.jsx)(I,{onClick:function(){m((function(e){return e+1}))}}),Object(h.jsx)(u.a,{})]})}c.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(q,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.2c27d2a4.chunk.js.map