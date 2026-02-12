// js/app.js

function renderEntities() {
  const container = document.getElementById("entities-container");
  if (!container || !Array.isArray(entities)) return;

  entities.forEach(entity => {
    const card = document.createElement("div");
    card.className = "entity-card";

    // hlavička
    const categoryText = Array.isArray(entity.category)
      ? entity.category.join(", ")
      : entity.category || "";

    card.innerHTML = `
      <h2>${entity.name}</h2>
      <span class="label">${entity.label}</span>
      ${
        categoryText
          ? `<span class="category">Kategorie: ${categoryText}</span>`
          : ""
      }
    `;

    // mřížka obrázků
    if (Array.isArray(entity.images) && entity.images.length > 0) {
      const imagesGrid = document.createElement("div");
      imagesGrid.className = "images-grid";

      entity.images.forEach(img => {
        if (!img || !img.url) return;
        const imgEl = document.createElement("img");
        imgEl.src = img.url;
        imgEl.alt = img.alt || entity.name;
        imagesGrid.appendChild(imgEl);
      });

      card.appendChild(imagesGrid);
    }

    // odkazy (performance + music)
    const links = document.createElement("p");
    links.innerHTML = `
      ${
        entity.performanceUrl
          ? `<a href="${entity.performanceUrl}" target="_blank" rel="noopener noreferrer">Ukázka z vystoupení</a>`
          : ""
      }
      ${
        entity.performanceUrl && entity.musicUrl ? " | " : ""
      }
      ${
        entity.musicUrl
          ? `<a href="${entity.musicUrl}" target="_blank" rel="noopener noreferrer">Ukázka z hudební tvorby</a>`
          : ""
      }
    `;
    card.appendChild(links);

    // komentář (volitelný)
    if (entity.comment && entity.comment.content) {
      const comment = document.createElement("div");
      comment.className = "comment";
      comment.innerHTML = `
        <strong>${entity.comment.author || "Komentář"}:</strong>
        <span>${entity.comment.content}</span>
      `;
      card.appendChild(comment);
    }

    container.appendChild(card);
  });
}

renderEntities();
