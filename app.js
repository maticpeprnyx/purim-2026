let currentFilter = 'all';

function renderEntities(filteredEntities = entities) {
  const container = document.getElementById("entities-container");
  if (!container) return;

  // vymaž staré karty
  container.innerHTML = "";

  // seřaď a renderuj
  const sorted = [...filteredEntities].sort((a, b) =>
    (a.name || "").localeCompare(b.name || "", "cs", { sensitivity: "base" })
  );

  sorted.forEach((entity) => {
    // ... stejný kód pro vytvoření card jako dřív, BEZ category span ...
    
    // hlavička (bez category!)
    const title = document.createElement("h2");
    title.textContent = entity.name || "";
    card.appendChild(title);

    const labelEl = document.createElement("span");
    labelEl.className = "label";
    labelEl.textContent = entity.label || "";
    card.appendChild(labelEl);

    // ... zbytek kódu (obrázky, odkazy, komentář) beze změny ...

    container.appendChild(card);
  });
}

// filtr handler
function setFilter(category) {
  currentFilter = category;
  
  // aktualizuj tlačítka
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.category === category);
  });

  // filtruj data
  let filtered;
  if (category === 'all') {
    filtered = entities;
  } else {
    filtered = entities.filter(entity => 
      entity.category === category || 
      (Array.isArray(entity.category) && entity.category.includes(category))
    );
  }

  renderEntities(filtered);
}

// inicializace
document.addEventListener('DOMContentLoaded', () => {
  // vytvoř dynamická tlačítka z kategorií v datech
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
