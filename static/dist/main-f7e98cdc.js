const d=document.querySelector("#toggle-nav-sidebar"),t=document.querySelector("#menu-content"),o=t.querySelector("button"),u=document.querySelectorAll(".desktop-nav-menu"),a=document.querySelector("#toggle-search-form"),r=document.querySelector("#search-container"),b=r.querySelector('button[type="reset"]'),n=(e,s,l,c)=>{e.setAttribute("aria-expanded",l),s.setAttribute("aria-hidden",c)},i=(e,s,l)=>{e.classList[l](s)};d.addEventListener("click",()=>{i(t,"open","toggle"),n(d,t,"true","false"),n(o,t,"true","false")});o.addEventListener("click",()=>{i(t,"open","toggle"),n(d,t,"false","true"),n(o,t,"false","true")});u.forEach(e=>{e.addEventListener("mouseover",()=>{n(e,e.nextElementSibling,"true","false"),i(e.nextElementSibling,"open","add")}),e.addEventListener("mouseleave",()=>{n(e,e.nextElementSibling,"false","true"),i(e.nextElementSibling,"open","remove")}),e.nextElementSibling.addEventListener("mouseenter",()=>{n(e,e.nextElementSibling,"true","false"),i(e.nextElementSibling,"open","add")}),e.nextElementSibling.addEventListener("mouseleave",()=>{n(e,e.nextElementSibling,"false","true"),i(e.nextElementSibling,"open","remove")})});window.addEventListener("resize",()=>{window.innerWidth>1024&&(t.classList.remove("open"),t.setAttribute("aria-hidden","true"),o.setAttribute("aria-expanded","false"))});a.addEventListener("click",()=>{r.classList.toggle("open");const e=a.getAttribute("aria-expanded"),s=r.getAttribute("aria-hidden");a.setAttribute("aria-expanded",e==="true"?"false":"true"),r.setAttribute("aria-hidden",s==="true"?"false":"true"),r.querySelector("input").focus()});b.addEventListener("click",()=>{r.classList.toggle("open"),r.setAttribute("aria-hidden","true"),a.setAttribute("aria-expanded","false")});
