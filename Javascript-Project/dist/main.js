!function(){"use strict";var e;e=class{constructor(e){this.ele=e,this.ele.innerHTML="<h1>It's ALIVE!!!</h1>",this.handleClick=this.handleClick.bind(this),this.ele.addEventListener("click",this.handleClick)}handleClick(){this.ele.children[0].innerText="Ouch!"}},document.addEventListener("DOMContentLoaded",(()=>{const n=document.getElementById("main");new e(n),console.log("hello world")}))}();
//# sourceMappingURL=main.js.map