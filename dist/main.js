(()=>{"use strict";const e=e=>{let t=e.target.value;if(t=t.replace(/\s+/g," ").trim(),t=t.replace(/-+/g,"-"),t=t.replace(/\++/g,"+"),"-"===t[0]&&(t=t.slice(1)),"-"===t[t.length-1]&&(t=t.slice(0,t.length-1)),"form2-name"===e.target.id||"form1-name"===e.target.id||"form3-name"===e.target.id){let e=t.split(" ");t="",e[0]&&e.forEach((e=>{e=e[0].toUpperCase()+e.slice(1).toLowerCase(),t+=e+" "}))}e.target.value=t.trim()};(e=>{let t,o=document.querySelector("#timer-hours"),l=document.querySelector("#timer-minutes"),n=document.querySelector("#timer-seconds");const a=e=>e<10?"0"+e:e,r=()=>{const e=(()=>{const e=(new Date("25 june 2021").getTime()-(new Date).getTime())/1e3,t=Math.floor(e%60),o=Math.floor(e/60%60);return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:o,seconds:t}})();if(o.textContent=a(e.hours),l.textContent=a(e.minutes),n.textContent=a(e.seconds),e.timeRemaining>0){if(t)return;t=setInterval(r,1e3)}else clearInterval(setInterval(r,1e3)),o.textContent="00",l.textContent="00",n.textContent="00"};r()})(),(()=>{const e=document.querySelector(".menu"),t=document.querySelector("menu"),o=()=>{t.classList.toggle("active-menu")};e.addEventListener("click",o),t.addEventListener("click",(e=>{e.target.closest("a")&&o()}))})(),(()=>{const e=document.querySelector(".popup"),t=(document.querySelector(".popup-close"),document.querySelectorAll(".popup-btn")),o=document.querySelector(".popup-content"),l=()=>{if(document.documentElement.clientWidth>768){o.style.top="-80%",e.style.display="block";for(let e=1;e<=90;e++){const t=e;setTimeout((()=>{o.style.top=`${-80+t}%`}),3*t)}}else e.style.display="block"},n=()=>{if(document.documentElement.clientWidth>768){for(let e=1;e<=180;e++){const t=e;setTimeout((()=>{o.style.top=10-t*t/360+"%"}),2*t)}setTimeout((()=>{e.style.display="none",o.style.top="10%"}),540)}else e.style.display="none"};t.forEach((e=>{e.addEventListener("click",l)})),e.addEventListener("click",(e=>{let t=e.target;t.classList.contains("popup-close")?n():(t=t.closest(".popup-content"),t||n())}))})(),(()=>{const e=document.querySelector(".service-header"),t=e.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{let l=e.target;l=l.closest(".service-header-tab"),l&&t.forEach(((e,n)=>{e===l&&(e=>{for(let l=0;l<o.length;l++)e===l?(t[l].classList.add("active"),o[l].classList.remove("d-none")):(t[l].classList.remove("active"),o[l].classList.add("d-none"))})(n)}))}))})(),(()=>{const e=document.querySelectorAll(".portfolio-item"),t=(document.querySelectorAll(".portfolio-btn"),document.querySelector(".portfolio-content")),o=document.querySelector(".portfolio-dots"),l=[];for(let t=0;t<e.length;t++){const e=document.createElement("li");e.classList.add("dot"),o.append(e),l[t]=e}let n,a=0;l[0].classList.add("dot-active");const r=(e,t,o)=>{e[t].classList.remove(o)},c=(e,t,o)=>{e[t].classList.add(o)},s=()=>{r(e,a,"portfolio-item-active"),r(l,a,"dot-active"),a++,a>=e.length&&(a=0),c(e,a,"portfolio-item-active"),c(l,a,"dot-active")},u=(e=3e3)=>{n=setInterval(s,e)};t.addEventListener("click",(t=>{t.preventDefault();let o=t.target;o.matches("#arrow-right, #arrow-left, .dot")&&(r(e,a,"portfolio-item-active"),r(l,a,"dot-active"),o.matches("#arrow-right")?a++:o.matches("#arrow-left")?a--:o.matches(".dot")&&l.forEach(((e,t)=>{e===o&&(a=t)})),a>=e.length&&(a=0),a<0&&(a=e.length-1),c(e,a,"portfolio-item-active"),c(l,a,"dot-active"))})),t.addEventListener("mouseover",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(n)})),t.addEventListener("mouseout",(e=>{(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&u()})),u(1500)})(),(()=>{const e=document.querySelectorAll(".command__photo");e.forEach((e=>{e.addEventListener("mouseenter",(t=>{const o=e.getAttribute("src");t.target.src=t.target.dataset.img,t.target.dataset.img=o}))})),e.forEach((e=>{e.addEventListener("mouseleave",(t=>{const o=e.getAttribute("src");t.target.src=t.target.dataset.img,t.target.dataset.img=o}))}))})(),document.querySelectorAll(".calc-item").forEach((e=>{"SELECT"!==e.tagName&&e.addEventListener("input",(()=>{e.value=e.value.replace(/\D/g,"")}))})),(()=>{const t=document.getElementById("form1-name"),o=document.getElementById("form2-name"),l=document.getElementById("form3-name"),n=document.getElementById("form2-message"),a=e=>{e.addEventListener("input",(()=>{e.value=e.value.replace(/[^а-яё|\s|-]/gi,"")}))};a(t),a(o),a(l),t.addEventListener("blur",e),o.addEventListener("blur",e),l.addEventListener("blur",e),n.addEventListener("input",(()=>{n.value=n.value.replace(/[^а-яё|0-9|\s|,|.|!|?]/gi,"")}))})(),document.querySelectorAll(".form-email").forEach((e=>{e.addEventListener("input",(()=>{e.value.trim(),e.value=e.value.replace(/[^a-z|@|_|\.|!|~|*|'|-]/gi,""),e.value=e.value.replace(/\.+/g,"."),e.value=e.value.replace(/\@+/g,"@");for(let t=0;t<e.value.length;t++)if("@"===e.value[t]){let t=e.value.split("@");for(let e=0;e<t[1].length;e++)if("."===t[1][e]){const e=t[1].split(".");e[2]&&(e[1]=e[1]+e[2]),t[1]=e[0]+"."+e[1].replace(/\./g,"")}e.value=t[0]+"@"+t[1].replace(/@/g,"")}"."===e.value[0]&&(e.value=e.value.slice(1))}))})),(()=>{const t=document.getElementById("form1-phone"),o=document.getElementById("form2-phone"),l=document.getElementById("form3-phone"),n=t=>{t.addEventListener("input",(()=>{t.value=t.value.replace(/[^0-9|+]/g,""),t.value&&(t.value=t.value[0]+t.value.slice(1).replace(/\+/g,""),"+"===t.value[0]&&t.value.length>12&&(alert("Необходимо ввести корректную длину номера"),t.value=t.value.slice(0,t.value.length-1)),"+"!==t.value[0]&&t.value.length>11&&(alert("Необходимо ввести корректную длину номера"),t.value=t.value.slice(0,t.value.length-1)))})),t.addEventListener("blur",e)};n(t),n(o),n(l)})(),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),l=document.querySelector(".calc-square"),n=document.querySelector(".calc-day"),a=document.querySelector(".calc-count"),r=document.getElementById("total");t.addEventListener("change",(t=>{const c=t.target;(c.matches(".calc-type")||c.matches(".calc-square")||c.matches(".calc-day")||c.matches(".calc-count"))&&(()=>{let t=0,c=1,s=1;const u=o.options[o.selectedIndex].value,i=+l.value;a.value>1&&(c+=(a.value-1)/10),n.value&&n.value<5?s*=2:n.value&&n.value<10&&(s*=1.5),u&&i&&(t=e*u*i*c*s),r.textContent=t})()}))})(100),(()=>{const e=document.getElementById("form1"),t=document.getElementById("form2"),o=document.getElementById("form3"),l=document.createElement("div");l.style.cssText="\n    font-size: 2rem;\n    color: white;";const n=(e,t)=>{e.preventDefault();const o=t.querySelector(".form-phone").value;if("+"===o[0]&&o.length<8)return void alert("Необходимо ввести корректную длину номера");if("+"!==o[0]&&o.length<7)return void alert("Необходимо ввести корректную длину номера");const n=new FormData(t);var a;t.appendChild(l),l.textContent="Загрузка...",t.querySelectorAll("input").forEach((e=>{e.value=""})),(a=n,fetch("./server.php",{method:"POST",headers:{"Content-Type":"multipart/form-data"},body:a})).then((e=>{if(200!==e.status)throw new Error("network status is not 200");l.textContent="Спасибо! Мы скоро с вами свяжемся!",setTimeout((()=>{l.remove()}),3e3)})).catch((e=>{l.textContent="Что-то пошло не так...",setTimeout((()=>{l.remove()}),3e3)}))};e.addEventListener("submit",(t=>{n(t,e)})),t.addEventListener("submit",(e=>{n(e,t)})),o.addEventListener("submit",(e=>{n(e,o)}))})()})();