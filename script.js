const pages = [ 'home', 'services', 'about', 'blog', 'contact' ];
function route() {
  const p = (location.hash.replace('#/', '') || 'home'); const id = pages.includes(p) ? p : 'home';
  document.querySelectorAll('.page').forEach(s => s.classList.toggle('on', s.id === id));
  document.querySelectorAll('nav a').forEach(a => a.classList.toggle('on', a.dataset.p === id));
  window.scrollTo(0, 0); document.title = (id === 'home' ? '' : id[ 0 ].toUpperCase() + id.slice(1) + ' | ') + 'Nail room by Tina Geres'
}
addEventListener('hashchange', route); route();
document.getElementById('f').addEventListener('submit', e => { e.preventDefault(); e.target.reset(); document.getElementById('ok').style.display = 'block' });
