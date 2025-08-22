// js/main.js
// Entry point: wait for DOM and then load & render battery sections
document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('sections');

  try {
    const response = await fetch('data/sections.json');
    if (!response.ok) {
      throw new Error(`HTTP ${response.status} - ${response.statusText}`);
    }
    const sections = await response.json();

    // clear loading message
    container.innerHTML = '';

    sections.forEach(sec => {
      // create section wrapper
      const sectionEl = document.createElement('section');
      sectionEl.id = sec.id;
      sectionEl.classList.add('section');

      // title
      const h2 = document.createElement('h2');
      h2.textContent = sec.title;
      sectionEl.appendChild(h2);

      // image (if provided)
      if (sec.imageUrl) {
        const img = document.createElement('img');
        img.src = sec.imageUrl;
        img.alt = sec.title;
        img.classList.add('section-image');
        sectionEl.appendChild(img);
      }

      // description
      const desc = document.createElement('p');
      desc.textContent = sec.description;
      sectionEl.appendChild(desc);

      // specs table
      const specsTable = document.createElement('table');
      specsTable.classList.add('section-specs');
      const tbody = document.createElement('tbody');

      // list of keys to skip in the generic table
      const skipKeys = ['id', 'title', 'description', 'features', 'imageUrl'];
      Object.keys(sec).forEach(key => {
        if (skipKeys.includes(key)) return;
        const value = sec[key];

        // normalize array values
        const cellText = Array.isArray(value) ? value.join(', ') : value;

        const row = document.createElement('tr');
        const th = document.createElement('th');
        th.textContent = toLabel(key);
        const td = document.createElement('td');
        td.textContent = cellText;

        row.appendChild(th);
        row.appendChild(td);
        tbody.appendChild(row);
      });

      specsTable.appendChild(tbody);
      sectionEl.appendChild(specsTable);

      // feature list
      if (Array.isArray(sec.features) && sec.features.length > 0) {
        const featHeading = document.createElement('h3');
        featHeading.textContent = 'Key Features';
        sectionEl.appendChild(featHeading);

        const ul = document.createElement('ul');
        ul.classList.add('section-features');
        sec.features.forEach(item => {
          const li = document.createElement('li');
          li.textContent = item;
          ul.appendChild(li);
        });
        sectionEl.appendChild(ul);
      }

      container.appendChild(sectionEl);
    });
  } catch (err) {
    console.error('Failed to load sections:', err);
    container.innerHTML = '<p class="error">Unable to load data. Please try again later.</p>';
  }
});


// helper: convert camelCase or snake_case to Title Case labels
function toLabel(key) {
  // replace underscores with spaces, split camelCase, capitalize words
  return key
    .replace(/[_\-]/g, ' ')
    .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
    .replace(/\b\w/g, ch => ch.toUpperCase());
}
