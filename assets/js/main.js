document.querySelectorAll('[data-year]').forEach(el=>el.textContent=new Date().getFullYear());
const form=document.querySelector('#contact-form');
if(form){form.addEventListener('submit',e=>{e.preventDefault();const d=new FormData(form);const subject=encodeURIComponent('Ashrayam project inquiry: '+d.get('service'));const body=encodeURIComponent(`Name: ${d.get('name')}\nEmail: ${d.get('email')}\nCompany: ${d.get('company')}\nService: ${d.get('service')}\n\nProject details:\n${d.get('details')}`);window.location.href=`mailto:CONTACT_EMAIL_HERE?subject=${subject}&body=${body}`;});}
