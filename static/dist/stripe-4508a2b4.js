const f=document.querySelector("#stripe_public_key"),v=document.querySelector("#client_secret"),b=document.querySelector("#card-element"),e=document.querySelector("#payment-form"),_=f.textContent.trim().slice(1,-1),l=v.textContent.trim().slice(1,-1),i=Stripe(_),h=i.elements(),S={base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#201d1d"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}},t=h.create("card",{style:S});t.mount(b);t.addEventListener("change",r=>{let n=document.getElementById("card-errors");if(r.error){let o=`<span>${r.error.message}</span>`;n.innerHTML=o}else n.textContent=""});e.addEventListener("submit",async function(r){var c;r.preventDefault(),t.update({disabled:!0}),document.querySelector("#submit-button").disabled=!0;const n=!!(((c=document.querySelector("#id-save-info"))==null?void 0:c.checked)??!1),o=document.querySelector('[name="csrfmiddlewaretoken"]').value,d={csrfmiddlewaretoken:o,client_secret:l,save_info:n},u="/checkout/cache_checkout_data/",m={name:e.full_name.value.trim(),phone:e.phone_number.value.trim(),email:e.email.value.trim(),address:{line1:e.street_address1.value.trim(),line2:e.street_address2.value.trim(),city:e.town_or_city.value.trim(),country:e.country.value.trim(),state:e.county.value.trim()}},y={name:e.full_name.value.trim(),phone:e.phone_number.value.trim(),address:{line1:e.street_address1.value.trim(),line2:e.street_address2.value.trim(),city:e.town_or_city.value.trim(),country:e.country.value.trim(),postal_code:e.postcode.value.trim(),state:e.county.value.trim()}};try{await fetch(u,{method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":o},body:JSON.stringify(d)}).then(a=>{a.ok?i.confirmCardPayment(l,{payment_method:{card:t,billing_details:m},shipping:y}).then(s=>{if(s.error){const p=document.getElementById("card-errors");p.textContent=s.error.message,t.update({disabled:!1}),document.querySelector("#submit-button").disabled=!1}else s.paymentIntent.status==="succeeded"&&(document.querySelector("#submit-button").disabled=!1,e.submit())}):(console.log("No response"),location.reload())})}catch(a){console.log(a)}});
