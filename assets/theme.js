(function(){
  var root=document.documentElement;
  function get(){try{return localStorage.getItem('theme')}catch(e){return null}}
  function set(t,save){root.setAttribute('data-theme',t);if(save){try{localStorage.setItem('theme',t)}catch(e){}}
    var b=document.getElementById('themeToggle');if(b){b.setAttribute('aria-checked',t==='dark');b.title=t==='dark'?'切換為淺色':'切換為深色'}}
  var cur=get()||'light';
  function mount(){
    if(document.getElementById('themeToggle'))return;
    var cta=document.querySelector('header .pill.coral,.nav .pill.coral');if(!cta)return;
    var b=document.createElement('button');b.type='button';b.id='themeToggle';b.className='theme-toggle';b.setAttribute('role','switch');b.setAttribute('aria-label','深色模式');
    b.innerHTML='<span class="knob"><svg class="sun" viewBox="0 0 24 24" fill="none" stroke="#FF9F0A" stroke-width="2.2" stroke-linecap="round"><circle cx="12" cy="12" r="4.2" fill="#FF9F0A"/><path d="M12 2.5v2.2M12 19.3v2.2M2.5 12h2.2M19.3 12h2.2M5.3 5.3l1.6 1.6M17.1 17.1l1.6 1.6M18.7 5.3l-1.6 1.6M6.9 17.1l-1.6 1.6"/></svg><svg class="moon" viewBox="0 0 24 24"><path d="M20 14.5A8.5 8.5 0 1 1 9.5 4a7 7 0 0 0 10.5 10.5z" fill="#FFB020"/></svg></span>';
    b.addEventListener('click',function(){set(root.getAttribute('data-theme')==='dark'?'light':'dark',true)});
    cta.parentNode.insertBefore(b,cta.nextSibling);
    set(root.getAttribute('data-theme')||cur,false);
  }
  set(cur,false);
  if(document.readyState==='loading')document.addEventListener('DOMContentLoaded',mount);else mount();
})();
