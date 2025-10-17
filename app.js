(function () {
  const cfg = (window.__INDEX_CONFIG__||{});
  const OWNER = cfg.owner || "rico100100";
  const REPO  = cfg.repo  || "TSA";
  const BRANCH= cfg.branch|| "main";

  const API = `https://api.github.com/repos/${OWNER}/${REPO}/git/trees/${BRANCH}?recursive=1`;

  const menu = document.getElementById('menuList');
  const empty = document.getElementById('emptyState');

  function friendlyName(p){
    const base = p.split('/').pop();
    return base.replace(/[-_]/g,' ').replace(/\.[^.]+$/,'')
      .replace(/\b([a-záéíóúñ])([a-záéíóúñ]*)/gi,(m,a,b)=>a.toUpperCase()+b.toLowerCase());
  }

  // Relativa para GitHub Pages
  const hrefFor = {
    dir: (path) => (path.replace(/\/+$/,'') + '/'),
    file: (path) => path
  };

  function renderItems(items){
    if(!items.length){
      empty.hidden = false;
      return;
    }
    const frag = document.createDocumentFragment();
    items.forEach(it=>{
      const li = document.createElement('li');
      const a  = document.createElement('a');
      a.href   = it.href;
      a.setAttribute('aria-label', `Abrir ${it.title}`);

      const badge = document.createElement('span');
      badge.className = 'badge';
      badge.textContent = it.type === 'dir' ? 'Carpeta' : 'Página';

      const title = document.createElement('span');
      title.className = 'title';
      title.textContent = it.title;

      const path = document.createElement('span');
      path.className = 'path';
      path.textContent = it.path;

      a.appendChild(badge);
      a.appendChild(title);
      a.appendChild(path);
      li.appendChild(a);
      frag.appendChild(li);
    });
    menu.appendChild(frag);
  }

  fetch(API, {headers:{'Accept':'application/vnd.github+json'}})
    .then(r=>{
      if(!r.ok) throw new Error('GitHub API error: ' + r.status);
      return r.json();
    })
    .then(data=>{
      const tree = data.tree || [];

      // set de rutas para comprobar existencia de index.*
      const allPaths = new Set(tree.map(e => e.path));

      // 1) Directorios con index.html o index.htm
      const indexDirs = new Set(
        [...allPaths]
          .filter(p => /\/index\.html?$/i.test(p))
          .map(p => p.replace(/\/index\.html?$/i, ''))
      );

      // 2) Archivos .html/.htm (excluimos index.* para evitar duplicados)
      const htmlFiles = tree
        .filter(e => e.type === 'blob' && /\.(html?)$/i.test(e.path) && !/\/?index\.html?$/i.test(e.path))
        .map(e => e.path);

      // Montamos lista final SOLO con lo publicable como página web
      const items = [];

      indexDirs.forEach(dir => {
        const path = dir; // ruta relativa
        items.push({
          type: 'dir',
          path,
          title: friendlyName(dir),
          href: hrefFor.dir(path)
        });
      });

      htmlFiles.forEach(path => {
        items.push({
          type: 'file',
          path,
          title: friendlyName(path),
          href: hrefFor.file(path)
        });
      });

      // Orden alfabético por ruta
      items.sort((a,b)=> a.path.localeCompare(b.path));

      renderItems(items);
    })
    .catch(err=>{
      empty.hidden = false;
      empty.textContent = `No se pudo cargar el índice (${err.message}).`;
    });
})();
