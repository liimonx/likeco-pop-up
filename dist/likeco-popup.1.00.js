!function(e){var t={};function n(o){if(t[o])return t[o].exports;var i=t[o]={i:o,l:!1,exports:{}};return e[o].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);document.createElement("div");var o=document.defaultView,i=o&&o.getComputedStyle?function(e){return o.getComputedStyle(e,null)}:function(e){return e.currentStyle};var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var o=t[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,o.key,o)}}return function(t,n,o){return n&&e(t.prototype,n),o&&e(t,o),t}}();!function(e,t){var n=function(){function t(e,n,o){for(var i in function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),this.elmcall=e,this.elements=document.querySelectorAll(this.elmcall),this.options={},this.bol=o,t.defaults)this.options[i]=t.defaults[i];for(i in n)this.options[i]=n[i];this.int()}return r(t,[{key:"_creatElements",value:function(){var e=document.createElement("div");e.classList.add("likco_modal_conatiner");var t=document.createElement("h2");t.innerHTML=this.options.title;var n=document.createElement("p");n.innerHTML=this.options.msg;var o=document.createElement("a");o.setAttribute("href",""+this.options.suggestlink.link),o.innerHTML=this.options.suggestlink.text,[t,n,o].forEach(function(t){return e.appendChild(t)}),this.modalConatiner=e}},{key:"_appendElement",value:function(e){0==this.appended&&(document.querySelector("body").appendChild(this.modalConatiner),this._modalPosition(e),this.appended=!0)}},{key:"_removeElement",value:function(){this.appended&&(document.querySelector("body").removeChild(this.modalConatiner),this.appended=0)}},{key:"_modalPosition",value:function(e){var t=e.clientY,n=e.clientX,o=i(this.modalConatiner).height.split(".")[0].match(/\d/g).join(""),r=i(this.modalConatiner).paddingTop.match(/\d/g).join(""),l=i(this.modalConatiner).paddingBottom.match(/\d/g).join(""),a=Number(o)+Number(r)+Number(l);e.clientY>a?t-=a:t=e.clientY+30,function(e,t){for(var n in t)e.style[n]=t[n]}(this.modalConatiner,{top:t+"px",left:n+"px"})}},{key:"_scrollToRemove",value:function(){var e=this;document.querySelector(this.options.scrollContainer).addEventListener("scroll",function(){e._removeElement()})}},{key:"_bodyCLickToRemove",value:function(){var t=this;e.addEventListener("click",function(e){var n=function(e){for(var t=void 0,n=arguments,o=n.length,i=void 0;o>1&&e.length;)for(t=n[--o];-1!==(i=e.indexOf(t));)e.splice(i,1);return e}(t.elmcall.split(""),".").toString().replace(/,/g,""),o=e.target.parentNode.classList[0],i=e.target.classList[0];1==t.appended&&"likco_modal_conatiner"!==o&&"likco_modal_conatiner"!==i&&o!==n&&i!==n&&t._removeElement()})}},{key:"_toogle",value:function(){var e=this;this.elements.forEach(function(t){return t.addEventListener("click",function(t){1==e.options.toggle?0==e.appended?e._appendElement(t):e._removeElement():e._appendElement(t)})})}},{key:"_creat",value:function(){this._creatElements(),this.appended=0,this._toogle(),this._bodyCLickToRemove(),this._scrollToRemove()}},{key:"int",value:function(){1==this.bol&&this._creat()}}]),t}();n.defaults={scrollContainer:"body",title:"Opps!",msg:"You don't have permission to access",suggestlink:{text:"visit this link",link:"#"},toggle:!0},e.likeCO=n}(window);t.default=likeCO}]);
//# sourceMappingURL=likeco-popup.1.00.js.map