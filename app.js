function renderEntities() {
  const container = document.getElementById("entities-container");
  if (!container || !Array.isArray(entities)) return;

  // seřadit podle jména
  const sorted = [...entities].sort((a, b) =>
    (a.name || "").localeCompare(b.name || "", "cs", { sensitivity: "base" })
  );

  sorted.forEach((entity) => {
    const card = document.createElement("div");
    card.className = "entity-card";

    // hlavička
    const title = document.createElement("h2");
    title.textContent = entity.name || "";
    card.appendChild(title);

    const labelEl = document.createElement("span");
    labelEl.className = "label";
    labelEl.textContent = entity.label || "";
    card.appendChild(labelEl);

    const categoryEl = document.createElement("span");
    categoryEl.className = "category";
    categoryEl.textContent = entity.category || "";
    card.appendChild(categoryEl);

    // obrázky – tři do řádku, flex-wrap
    if (Array.isArray(entity.images) && entity.images.length) {
      const imagesGrid = document.createElement("div");
      imagesGrid.className = "images-grid";

      entity.images.forEach((img) => {
        const imgEl = document.createElement("img");
        imgEl.src = img.url;
        imgEl.alt = img.alt || "";
        imagesGrid.appendChild(imgEl);
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
      if (linksP.childNodes.length) {
        linksP.append(" ");
      }
      const musicLink = document.createElement("a");
      musicLink.href = entity.musicUrl;
      musicLink.target = "_blank";
      musicLink.rel = "noopener noreferrer";
      musicLink.textContent = "Ukázka z hudební tvorby";
      linksP.appendChild(musicLink);
    }

    if (linksP.childNodes.length) {
      card.appendChild(linksP);
    }

    // komentář – volitelný
    if (entity.comment && entity.comment.content) {
      const comment = document.createElement("div");
      comment.className = "comment";

      const author = document.createElement("strong");
      author.textContent = entity.comment.author || "";
      comment.appendChild(author);

      const text = document.createElement("span");
      text.textContent = " " + entity.comment.content;
      comment.appendChild(text);

      card.appendChild(comment);
    }

    container.appendChild(card);
  });
}

renderEntities();
