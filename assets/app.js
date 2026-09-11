import {config} from './config.js';
const toggle=document.querySelector('.menu-toggle');
const nav=document.querySelector('#main-nav');
toggle?.addEventListener('click',()=>{const open=toggle.getAttribute('aria-expanded')!=='true';toggle.setAttribute('aria-expanded',String(open));toggle.setAttribute('aria-label',open?'Cerrar menú':'Abrir menú');nav.classList.toggle('open',open);});
document.addEventListener('keydown',e=>{if(e.key==='Escape'&&nav?.classList.contains('open')){nav.classList.remove('open');toggle.setAttribute('aria-expanded','false');toggle.focus();}});
if(document.querySelector('[data-academy]'))import('./academy.js').catch(()=>{document.querySelector('[data-academy]').innerHTML='<div class="notice">No pudimos cargar esta sección. Actualizá la página para volver a intentar.</div>';});
if(/^\d{10,15}$/.test(config.whatsapp)){
 for(const link of document.querySelectorAll('a[href^="/contacto/?mensaje="]')){const text=new URL(link.href).searchParams.get('mensaje');link.href='https://wa.me/'+config.whatsapp+'?text='+encodeURIComponent(text);link.target='_blank';link.rel='noopener noreferrer';}
 const primary=document.querySelector('[data-contact-primary]');if(primary){const a=document.createElement('a');a.className='button';a.href='https://wa.me/'+config.whatsapp+'?text='+encodeURIComponent(new URLSearchParams(location.search).get('mensaje')||'Hola, Irene. Quisiera hacerte una consulta.');a.textContent='Escribile a Irene por WhatsApp ↗';a.target='_blank';a.rel='noopener noreferrer';primary.replaceChildren(a);}
}
