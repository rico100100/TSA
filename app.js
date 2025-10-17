(function () {
  const cfg = (window.__INDEX_CONFIG__||{});
  const OWNER = cfg.owner || "rico100100";
  const REPO  = cfg.repo  || "TSA";
  const BRANCH= cfg.branch|| "main";
  const TITLES_URL = cfg.titlesUrl || null;
  const USE_PAGE_TITLE = !!cfg.usePageTitle;

  const API = `https://api.github.com/repos/${OWNER}/${REPO}/git/trees/${BRANCH}?recursive=1`;

  const menu = document.getElementById('menuList');
  const empty = document.getElementById('emptyState');

  let TitlesMap = {};

  function friendlyName(p){
    const base = p.split('/').pop();
    return base.replace(/[-_]/g,' ').replace(/\.[^.]+$/,'')
      .replace(/\b([a-záéíóúñ])([a-záéíóúñ]*)/gi,(m,a,b)=>a.toUpperCase()+b.toLowerCase());
  }

  const hrefFor = {
    dir: (path) => (path.replace(/\/+$/,'') + '/'),
    file: (path) => path
  };

  function renderItems(items){
    menu.innerHTML = "";
    if(!items.length){
      empty.hidden = false;
      return;
    }
    const frag = document.createDocumentFragment();
    items.forEach(it=>{
      const li = document.createElement('li');
      li.dataset.path = it.path;
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

  function titleFor(it){
    const key1 = it.path;            // "carpeta" o "ruta/pagina.html"
    const key2 = it.type === 'dir' ? (it.path.replace(/\/+$/,'') + '/') : it.href; // "carpeta/"
    return TitlesMap[key1] || TitlesMap[key2] || it.title;
  }

  function mergeTitlesFromJson(items){
    items.forEach(it => { it.title = titleFor(it); });
  }

  function fetchJSON(url){
    return fetch(url, {cache:'no-store'})
      .then(r => r.ok ? r.json() : {})
      .catch(() => ({}));
  }

  function fetchPageTitle(href){
    return fetch(href, {cache:'no-store'})
      .then(r => r.ok ? r.text() : '')
      .then(html => {
        if(!html) return null;
        const metaMatch = html.match(/<meta[^>]*name=["']menu-title["'][^>]*content=["']([^"']+)["'][^>]*>/i);
        if (metaMatch && metaMatch[1]) return metaMatch[1].trim();
        const titleMatch = html.match(/<title[^>]*>([^<]+)<\/title>/i);
        if (titleMatch && titleMatch[1]) return titleMatch[1].trim();
        return null;
      })
      .catch(() => null);
  }

  function enrichTitlesFromPages(items){
    if (!USE_PAGE_TITLE) return;
    // Limitar concurrencia para no saturar
    const queue = items.slice();
    const CONC = 6;
    const running = new Set();
    function runNext(){
      if(!queue.length) return Promise.all([...running]);
      while(running.size < CONC && queue.length){
        const it = queue.shift();
        const p = fetchPageTitle(it.href).then(title => {
          if(title){
            it.title = title;
            const li = menu.querySelector(`li[data-path="${CSS.escape(it.path)}"] .title`);
            if(li) li.textContent = title;
          }
        }).finally(()=> running.delete(p));
        running.add(p);
      }
      return Promise.race(running).then(runNext);
    }
    return runNext();
  }

  (async function init(){
    // Cargar mapa de títulos si existe
    if (TITLES_URL) {
      TitlesMap = await fetchJSON(TITLES_URL);
    }

    // Obtener árbol
    let data;
    try{
      const r = await fetch(API, {headers:{'Accept':'application/vnd.github+json'}});
      if(!r.ok) throw new Error('GitHub API error: ' + r.status);
      data = await r.json();
    }catch(err){
      empty.hidden = false;
      empty.textContent = `No se pudo cargar el índice (${err.message}).`;
      return;
    }

    const tree = data.tree || [];
    const allPaths = new Set(tree.map(e => e.path));

    const indexDirs = new Set(
      [...allPaths]
        .filter(p => /\/index\.html?$/i.test(p))
        .map(p => p.replace(/\/index\.html?$/i, ''))
    );

    const htmlFiles = tree
      .filter(e => e.type === 'blob' && /\.(html?)$/i.test(e.path) && !/\/?index\.html?$/i.test(e.path))
      .map(e => e.path);

    const items = [];
    indexDirs.forEach(dir => {
      items.push({
        type: 'dir',
        path: dir,
        title: friendlyName(dir),
        href: hrefFor.dir(dir)
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

    items.sort((a,b)=> a.path.localeCompare(b.path));

    // Aplicar títulos personalizados del JSON (si hay)
    mergeTitlesFromJson(items);

    // Pintar
    renderItems(items);

    // Enriquecer desde el contenido de las páginas (opcional)
    enrichTitlesFromPages(items);
  })();
})();
