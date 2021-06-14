(()=>{"use strict";const e=function(e){var t=e.target.value;if("-"===(t=(t=(t=t.replace(/\s+/g," ").trim()).replace(/-+/g,"-")).replace(/\++/g,"+"))[0]&&(t=t.slice(1)),"-"===t[t.length-1]&&(t=t.slice(0,t.length-1)),"form2-name"===e.target.id||"form1-name"===e.target.id||"form3-name"===e.target.id){var n=t.split(" ");t="",n[0]&&n.forEach((function(e){e=e[0].toUpperCase()+e.slice(1).toLowerCase(),t+=e+" "}))}e.target.value=t.trim()};var t,n,o,a,r,c,l,u,i,s,d,m,v,f,g,p,h,y,E,L,q,S,b,I,C,w;b=document.querySelector("#timer-hours"),I=document.querySelector("#timer-minutes"),C=document.querySelector("#timer-seconds"),w=function(e){return e<10?"0"+e:e},function e(){var t,n,o,a=(t=(new Date("25 june 2021").getTime()-(new Date).getTime())/1e3,n=Math.floor(t%60),o=Math.floor(t/60%60),{timeRemaining:t,hours:Math.floor(t/60/60),minutes:o,seconds:n});if(b.textContent=w(a.hours),I.textContent=w(a.minutes),C.textContent=w(a.seconds),a.timeRemaining>0){if(S)return;S=setInterval(e,1e3)}else clearInterval(setInterval(e,1e3)),b.textContent="00",I.textContent="00",C.textContent="00"}(),E=document.querySelector(".menu"),L=document.querySelector("menu"),q=function(){L.classList.toggle("active-menu")},E.addEventListener("click",q),L.addEventListener("click",(function(e){e.target.closest("a")&&q()})),f=document.querySelector(".popup"),document.querySelector(".popup-close"),g=document.querySelectorAll(".popup-btn"),p=document.querySelector(".popup-content"),h=function(){if(document.documentElement.clientWidth>768){p.style.top="-80%",f.style.display="block";for(var e=function(e){var t=e;setTimeout((function(){p.style.top="".concat(-80+t,"%")}),3*t)},t=1;t<=90;t++)e(t)}else f.style.display="block"},y=function(){if(document.documentElement.clientWidth>768){for(var e=function(e){var t=e;setTimeout((function(){p.style.top="".concat(10-t*t/360,"%")}),2*t)},t=1;t<=180;t++)e(t);setTimeout((function(){f.style.display="none",p.style.top="10%"}),540)}else f.style.display="none"},g.forEach((function(e){e.addEventListener("click",h)})),f.addEventListener("click",(function(e){var t=e.target;t.classList.contains("popup-close")?y():(t=t.closest(".popup-content"))||y()})),d=document.querySelector(".service-header"),m=d.querySelectorAll(".service-header-tab"),v=document.querySelectorAll(".service-tab"),d.addEventListener("click",(function(e){var t=e.target;(t=t.closest(".service-header-tab"))&&m.forEach((function(e,n){e===t&&function(e){for(var t=0;t<v.length;t++)e===t?(m[t].classList.add("active"),v[t].classList.remove("d-none")):(m[t].classList.remove("active"),v[t].classList.add("d-none"))}(n)}))})),function(){for(var e=document.querySelectorAll(".portfolio-item"),t=(document.querySelectorAll(".portfolio-btn"),document.querySelector(".portfolio-content")),n=document.querySelector(".portfolio-dots"),o=[],a=0;a<e.length;a++){var r=document.createElement("li");r.classList.add("dot"),n.append(r),o[a]=r}var c,l=0;o[0].classList.add("dot-active");var u=function(e,t,n){e[t].classList.remove(n)},i=function(e,t,n){e[t].classList.add(n)},s=function(){u(e,l,"portfolio-item-active"),u(o,l,"dot-active"),++l>=e.length&&(l=0),i(e,l,"portfolio-item-active"),i(o,l,"dot-active")},d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;c=setInterval(s,e)};t.addEventListener("click",(function(t){t.preventDefault();var n=t.target;n.matches("#arrow-right, #arrow-left, .dot")&&(u(e,l,"portfolio-item-active"),u(o,l,"dot-active"),n.matches("#arrow-right")?l++:n.matches("#arrow-left")?l--:n.matches(".dot")&&o.forEach((function(e,t){e===n&&(l=t)})),l>=e.length&&(l=0),l<0&&(l=e.length-1),i(e,l,"portfolio-item-active"),i(o,l,"dot-active"))})),t.addEventListener("mouseover",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&clearInterval(c)})),t.addEventListener("mouseout",(function(e){(e.target.matches(".portfolio-btn")||e.target.matches(".dot"))&&d()})),d(1500)}(),(s=document.querySelectorAll(".command__photo")).forEach((function(e){e.addEventListener("mouseenter",(function(t){var n=e.getAttribute("src");t.target.src=t.target.dataset.img,t.target.dataset.img=n}))})),s.forEach((function(e){e.addEventListener("mouseleave",(function(t){var n=e.getAttribute("src");t.target.src=t.target.dataset.img,t.target.dataset.img=n}))})),document.querySelectorAll(".calc-item").forEach((function(e){"SELECT"!==e.tagName&&e.addEventListener("input",(function(){e.value=e.value.replace(/\D/g,"")}))})),r=document.getElementById("form1-name"),c=document.getElementById("form2-name"),l=document.getElementById("form3-name"),u=document.getElementById("form2-message"),(i=function(e){e.addEventListener("input",(function(){e.value=e.value.replace(/[^а-яё|\s|-]/gi,"")}))})(r),i(c),i(l),r.addEventListener("blur",e),c.addEventListener("blur",e),l.addEventListener("blur",e),u.addEventListener("input",(function(){u.value=u.value.replace(/[^а-яё|0-9|\s|,|.|!|?]/gi,"")})),document.querySelectorAll(".form-email").forEach((function(e){e.addEventListener("input",(function(){e.value.trim(),e.value=e.value.replace(/[^a-z|@|_|\.|!|~|*|'|-]/gi,""),e.value=e.value.replace(/\.+/g,"."),e.value=e.value.replace(/\@+/g,"@");for(var t=0;t<e.value.length;t++)if("@"===e.value[t]){for(var n=e.value.split("@"),o=0;o<n[1].length;o++)if("."===n[1][o]){var a=n[1].split(".");a[2]&&(a[1]=a[1]+a[2]),n[1]=a[0]+"."+a[1].replace(/\./g,"")}e.value=n[0]+"@"+n[1].replace(/@/g,"")}"."===e.value[0]&&(e.value=e.value.slice(1))}))})),t=document.getElementById("form1-phone"),n=document.getElementById("form2-phone"),o=document.getElementById("form3-phone"),(a=function(t){t.addEventListener("input",(function(){t.value=t.value.replace(/[^0-9|+]/g,""),t.value&&(t.value=t.value[0]+t.value.slice(1).replace(/\+/g,""),"+"===t.value[0]&&t.value.length>12&&(alert("Необходимо ввести корректную длину номера"),t.value=t.value.slice(0,t.value.length-1)),"+"!==t.value[0]&&t.value.length>11&&(alert("Необходимо ввести корректную длину номера"),t.value=t.value.slice(0,t.value.length-1)))})),t.addEventListener("blur",e)})(t),a(n),a(o),function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:100,t=document.querySelector(".calc-block"),n=document.querySelector(".calc-type"),o=document.querySelector(".calc-square"),a=document.querySelector(".calc-day"),r=document.querySelector(".calc-count"),c=document.getElementById("total"),l=function(){var t=0,l=1,u=1,i=n.options[n.selectedIndex].value,s=+o.value;r.value>1&&(l+=(r.value-1)/10),a.value&&a.value<5?u*=2:a.value&&a.value<10&&(u*=1.5),i&&s&&(t=e*i*s*l*u),c.textContent=Math.floor(t)};t.addEventListener("change",(function(e){var t=e.target;(t.matches(".calc-type")||t.matches(".calc-square")||t.matches(".calc-day")||t.matches(".calc-count"))&&l()}))}(100),function(){var e=document.getElementById("form1"),t=document.getElementById("form2"),n=document.getElementById("form3"),o=document.createElement("div");o.style.cssText="\n    font-size: 2rem;\n    color: white;";var a=function(e,t){e.preventDefault();var n=t.querySelector(".form-phone").value,a=t.querySelector(".form-email").value,r=t.querySelector(".form-name").value;if(n&&r&&a)if("+"===n[0]&&n.length<8)alert("Необходимо ввести корректную длину номера");else if("+"!==n[0]&&n.length<7)alert("Необходимо ввести корректную длину номера");else{var c,l=new FormData(t);t.appendChild(o),o.textContent="Загрузка...",t.querySelectorAll("input").forEach((function(e){e.value=""})),(c=l,fetch("./server.php",{method:"POST",headers:{"Content-Type":"multipart/form-data"},body:c})).then((function(e){if(200!==e.status)throw new Error("network status is not 200");o.textContent="Спасибо! Мы скоро с вами свяжемся!",setTimeout((function(){o.remove()}),3e3)})).catch((function(e){o.textContent="Что-то пошло не так...",setTimeout((function(){o.remove()}),3e3)}))}else alert("Необходимо заполнить все поля")};e.addEventListener("submit",(function(t){a(t,e)})),t.addEventListener("submit",(function(e){a(e,t)})),n.addEventListener("submit",(function(e){a(e,n)}))}()})();