/* jshint esversion: 11, asi: true */ const v=document.querySelector("#stripe_public_key"),h=document.querySelector("#client_secret"),_=document.querySelector("#card-element"),e=document.querySelector("#payment-form"),c=document.getElementById("process-order"),b=v.textContent.trim().slice(1,-1),i=h.textContent.trim().slice(1,-1),d=Stripe(b),S=d.elements(),g={base:{color:"#32325d",fontFamily:'"Helvetica Neue", Helvetica, sans-serif',fontSmoothing:"antialiased",fontSize:"16px","::placeholder":{color:"#201d1d"}},invalid:{color:"#fa755a",iconColor:"#fa755a"}},t=S.create("card",{style:g});t.mount(_);t.addEventListener("change",o=>{let r=document.getElementById("card-errors");if(o.error){let n=`<span>${o.error.message}</span>`;r.innerHTML=n}else r.textContent=""});e.addEventListener("submit",async function(o){var l;o.preventDefault(),t.update({disabled:!0}),c.showModal();const r=!!(((l=document.querySelector("#id-save-info"))==null?void 0:l.checked)??!1),n=document.querySelector('[name="csrfmiddlewaretoken"]').value,m={csrfmiddlewaretoken:n,client_secret:i,save_info:r},u="/checkout/cache-checkout-data/",y={name:e.full_name.value.trim(),phone:e.phone_number.value.trim(),email:e.email.value.trim(),address:{line1:e.street_address1.value.trim(),line2:e.street_address2.value.trim(),city:e.town_or_city.value.trim(),country:e.country.value.trim(),state:e.county.value.trim()}},p={name:e.full_name.value.trim(),phone:e.phone_number.value.trim(),address:{line1:e.street_address1.value.trim(),line2:e.street_address2.value.trim(),city:e.town_or_city.value.trim(),country:e.country.value.trim(),postal_code:e.postcode.value.trim(),state:e.county.value.trim()}};try{await fetch(u,{method:"POST",headers:{"Content-Type":"application/json","X-CSRFToken":n},body:JSON.stringify(m)}).then(a=>{a.ok?d.confirmCardPayment(i,{payment_method:{card:t,billing_details:y},shipping:p}).then(s=>{if(s.error){const f=document.getElementById("card-errors");f.textContent=s.error.message,t.update({disabled:!1}),document.querySelector("#submit-button").disabled=!1,c.close()}else s.paymentIntent.status==="succeeded"&&(document.querySelector("#submit-button").disabled=!1,c.close(),e.submit())}):location.reload()})}catch(a){console.log(a)}});
