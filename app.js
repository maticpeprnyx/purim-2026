let currentFilter = 'all';

function renderEntities(filteredEntities = entities) {
  const container = document.getElementById("entities-container");
  container.innerHTML = "";

  const sorted = [...filteredEntities].sort((a, b) =>
    (a.name || "").localeCompare(b.name || "", "cs", { sensitivity: "base" })
  );

  sorted.forEach((entity) => {
    const card = document.createElement("div");
    card.className = "entity-card";

    const title = document.createElement("h2");
    title.textContent = entity.name || "";
    card.appendChild(title);

    const labelEl = document.createElement("span");
    labelEl.className = "label";
    labelEl.textContent = entity.label || "";
    card.appendChild(labelEl);

    // obrázky
    if (Array.isArray(entity.images) && entity.images.length) {

      const imagesGrid = document.createElement("div");
      imagesGrid.className = "images-grid";

      entity.images.forEach((img) => {
        const wrapper = document.createElement("div");
        wrapper.className = "image-with-label";

        const imgEl = document.createElement("img");
        imgEl.src = img.url;
        imgEl.alt = img.alt || "";

        const label = document.createElement("div");
        label.className = "image-label";
        label.textContent = img.alt || "";

        wrapper.appendChild(imgEl);  // image first
        wrapper.appendChild(label);  // then label below

        imagesGrid.appendChild(wrapper);
      });


      card.appendChild(imagesGrid);
    }


    // odkazy
    const linksP = document.createElement("p");
    if (entity.performanceUrl) {
      const perfLink = document.createElement("a");
      perfLink.href = entity.performanceUrl;
      perfLink.target = "_blank";
      perfLink.rel = "noopener noreferrer";
      perfLink.textContent = "Ukázka z vystoupení";
      linksP.appendChild(perfLink);
    }
    if (entity.musicUrl) {
      if (linksP.children.length) linksP.append(" ");
      const musicLink = document.createElement("a");
      musicLink.href = entity.musicUrl;
      musicLink.target = "_blank";
      musicLink.rel = "noopener noreferrer";
      musicLink.textContent = "Ukázka z hudební tvorby";
      linksP.appendChild(musicLink);
    }
    if (linksP.children.length) card.appendChild(linksP);

    // komentář
if (entity.comment?.content) {
  const comment = document.createElement("div");
  comment.className = "comment";
  comment.innerHTML = `${entity.comment.author} komentář: ${entity.comment.content}`;
  card.appendChild(comment);
}

    container.appendChild(card);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  // tlačítka
  const categories = [...new Set(entities.flatMap(e =>
    Array.isArray(e.category) ? e.category : [e.category]
  ).filter(Boolean))];

  const filterDiv = document.getElementById('filter-buttons');
  filterDiv.innerHTML = '<button data-category="all" class="filter-btn active">Vše</button>';

  categories.forEach(cat => {
    const btn = document.createElement('button');
    btn.dataset.category = cat;
    btn.className = 'filter-btn';
    btn.textContent = cat;
    btn.onclick = () => setFilter(cat);
    filterDiv.appendChild(btn);
  });

  document.querySelector('[data-category="all"]').onclick = () => setFilter('all');
  renderEntities();
});


function setFilter(category) {
  currentFilter = category;
  document.querySelectorAll('.filter-btn').forEach(btn =>
    btn.classList.toggle('active', btn.dataset.category === category)
  );

  let filtered = category === 'all' ? entities :
    entities.filter(entity =>
      entity.category === category ||
      (Array.isArray(entity.category) && entity.category.includes(category))
    );

  renderEntities(filtered);
}
