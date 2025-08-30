(()=>{var i={init:function(){let a=document.querySelectorAll(".article-content div.highlight"),e="Copy",d="Copied!";a.forEach(n=>{let t=document.createElement("button");t.innerHTML=e,t.classList.add("copyCodeButton"),n.appendChild(t);let o=n.querySelector("code[data-lang]");o&&t.addEventListener("click",()=>{navigator.clipboard.writeText(o.textContent).then(()=>{t.textContent=d,setTimeout(()=>{t.textContent=e},1e3)}).catch(c=>{alert(c),console.log("Something went wrong",c)})})})}};window.addEventListener("load",()=>{setTimeout(function(){i.init()},0)})(window).Stack=i;})();
/*!
*   Hugo Theme Stack - Simplified Version
*   Only includes code block copy functionality
*/
