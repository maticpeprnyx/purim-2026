// js/app.js
function renderEntities() {
  const container = document.getElementById("entities-container");

  entities.forEach(entity => {
    const card = document.createElement("div");
    card.className = "entity-card";

    // hlavička
    card.innerHTML = `
      <h2>${entity.name}</h2>
      <span class="label">${entity.label}</span>
      <span class="category">${entity.category}</span>
    `;

    // mřížka obrázků (3 sloupce, flex-wrap)
    const imagesGrid = document.createElement("div");
    imagesGrid.className = "images-grid";
    entity.images.forEach(img => {
      const imgEl = document.createElement("img");
      imgEl.src = img.url;
      imgEl.alt = img.alt;
      imagesGrid.appendChild(imgEl);
    });
    card.appendChild(imagesGrid);

    // odkazy
    card.innerHTML += `
      <p>
        <a href="${entity.performanceUrl}">Ukázka z vystoupení</a> |
        <a href="${entity.musicUrl}">Ukázka z hudební tvorby</a>
      </p>
    `;

    // komentář (volitelný)
    if (entity.comment && entity.comment.content) {
      const comment = document.createElement("div");
      comment.className = "comment";
      comment.innerHTML = `
        <strong>${entity.comment.author}:</strong>
        <span>${entity.comment.content}</span>
      `;
      card.appendChild(comment);
    }

    container.appendChild(card);
  });
}

renderEntities();
