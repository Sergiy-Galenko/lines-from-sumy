const map = L.map('map').setView([50.9, 34.8], 8);

L.tileLayer(
  'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
  }
).addTo(map);

const legend = L.control({ position: 'bottomright' });
legend.onAdd = function(map) {
  const div = L.DomUtil.create('div', 'legend');
  div.innerHTML = `
    <h4>Легенда</h4>
    <div class="legend-item">
      <div class="legend-icon" style="background-image: url('https://upload.wikimedia.org/wikipedia/commons/1/17/Panteleimon_Kulish.jpg')"></div>
      <span>Письменник</span>
    </div>
    <div class="legend-item">
      <i class="fas fa-video" style="color: #ff6b6b; font-size: 20px; margin-right: 8px;"></i>
      <span>Є відеоматеріали</span>
    </div>
  `;
  return div;
};
legend.addTo(map);

const literaryPlaces = [
  { 
    name: 'Пантелеймон Куліш', 
    place: 'Вороніж', 
    coords: [51.767687, 33.4643645], 
    portraitUrl: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Panteleimon_Kulish.jpg',
    description: 'Видатний український письменник, поет, перекладач. Автор першого фонетичного правопису української мови.'
  },
  { 
    name: 'Яків Щоголев', 
    place: 'Охтирка', 
    coords: [50.2819, 34.8990], 
    portraitUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/2f/%D0%AF%D0%BA%D1%96%D0%B2_%D0%A9%D0%BE%D0%B3%D0%BE%D0%BB%D1%96%D0%B2.jpg', 
    videoUrl: 'https://drive.google.com/file/d/1p--yXddc0CNQZbBexvAcOsmt4Oh3XLe7/preview',
    description: 'Український поет-лірик, представник романтизму. Автор збірки "Ворскло".'
  },
  { 
    name: 'Іван Багряний', 
    place: 'Охтирка', 
    coords: [50.3220, 34.8750], 
    portraitUrl: 'https://folio.com.ua/system/artists/photos/000/000/194/large/31bagryaniy2.jpg?1673624296',
    description: 'Український письменник, публіцист, політичний діяч. Автор роману "Тигролови".'
  },
  { 
    name: 'Павло Грабовський', 
    place: 'с. Грабовське', 
    coords: [50.7001265, 35.4510695], 
    portraitUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e2/%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE_%D0%93%D1%80%D0%B0%D0%B1%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_2.jpg/640px-%D0%9F%D0%B0%D0%B2%D0%BB%D0%BE_%D0%93%D1%80%D0%B0%D0%B1%D0%BE%D0%B2%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_2.jpg',
    description: 'Поет-демократ, перекладач, діяч революційного руху. Автор збірок "З півночі", "Пролісок".'
  },
  { 
    name: 'Олександр Олесь', 
    place: 'Білопілля', 
    coords: [51.14611, 34.30528], 
    portraitUrl: 'https://diaspora.com.ua/wp-content/uploads/2023/09/oleksandr_oles_uvan_archive.jpg',
    description: 'Видатний український поет-лірик, драматург. Батько відомого письменника Олеся Гончара.'
  },
  { 
    name: 'Пилип Капельгородський', 
    place: 'с. Городище', 
    coords: [50.92815, 34.00852], 
    portraitUrl: 'https://upload.wikimedia.org/wikipedia/commons/7/79/%D0%9A%D0%B0%D0%BF%D0%B5%D0%BB%D1%8C%D0%B3%D0%BE%D1%80%D0%BE%D0%B4%D1%81%D1%8C%D0%BA%D0%B8%D0%B9_%D0%9F.jpg', 
    videoUrl: 'https://drive.google.com/file/d/1WSdtccG7EDNkhqOB2V6h2SAgy5VRBeWj/preview',
    description: 'Український поет, прозаїк, драматург. Один із засновників української радянської літератури.'
  },
  { 
    name: 'Борис Антоненко-Давидович', 
    place: 'Ромни', 
    coords: [50.7354, 33.4808], 
    portraitUrl: 'https://uinp.gov.ua/storage/app/public/uploads/2019-08-05/13/jdK1564999491yPt.jpeg',
    description: 'Український письменник, мовознавець, перекладач. Автор роману "Записки нетяги".'
  },
  { 
    name: 'Панас Кочура', 
    place: 'Кролевець', 
    coords: [51.5529, 33.3825], 
    portraitUrl: 'https://upload.wikimedia.org/wikipedia/uk/a/a9/%D0%91%D0%B5%D1%80%D0%BA%D1%96%D0%B2%D1%86%D1%96_016.jpg',
    description: 'Письменник, фольклорист, автор історичних романів та оповідань.'
  },
  { 
    name: 'Павло Ключина', 
    place: 'с. Великий Самбір', 
    coords: [51.05722, 33.13611], 
    portraitUrl: 'https://day.kyiv.ua/sites/default/files/main/articles/11092014/13klychina.jpg',
    description: 'Український поет, перекладач, журналіст. Автор збірок "Поезії", "Осінні дзвони".'
  },
  { 
    name: 'Дмитро Білоус', 
    place: 'с. Курмани', 
    coords: [50.83028, 33.78750], 
    portraitUrl: 'https://esu.com.ua/images/article_images/B/Bilous%20Dmitro%20Grigorovich.jpg',
    description: 'Поет, перекладач, педагог. Один із засновників української дитячої літератури.'
  },
  { 
    name: 'Остап Вишня', 
    place: 'с. Грунь', 
    coords: [50.23778, 34.60250], 
    portraitUrl: 'https://knu.ua/tpl/img/photo-osobystosti/foto-vyshnja.jpg',
    description: 'Класик української гумору та сатири. Автор знаменитих "Усмішок".'
  },
  { 
    name: 'Микола Хвильовий', 
    place: 'Тростянець', 
    coords: [50.48, 34.970], 
    portraitUrl: 'https://nlu.org.ua/storage/tinymce_pic/2023121312061923.jpg', 
    videoUrl: 'https://drive.google.com/file/d/1qvHp3nzduKToQDOhwLgdyQ7OM-8b3tS6/preview',
    description: 'Видатний український письменник, поет, публіцист. Лідер літературного угруповання "ВАПЛІТЕ".'
  }
];

const authorList = document.getElementById('author-list');
literaryPlaces.forEach(author => {
  const authorEl = document.createElement('div');
  authorEl.className = 'author-item';
  authorEl.dataset.name = author.name;
  
  authorEl.innerHTML = `
    <div class="author-name">${author.name}</div>
    <div class="author-place">
      <i class="fas fa-map-marker-alt"></i> ${author.place}
      ${author.videoUrl ? '<span class="video-indicator"><i class="fas fa-video"></i> Відео</span>' : ''}
    </div>
  `;
  
  authorEl.addEventListener('click', () => {
    const marker = markers.find(m => m.author.name === author.name);
    if (marker) {
      map.setView(marker.marker.getLatLng(), 12);
      marker.marker.openPopup();
      highlightMarker(marker.marker);
    }
  });
  
  authorList.appendChild(authorEl);
});

const searchInput = document.getElementById('search');
searchInput.addEventListener('input', (e) => {
  const searchTerm = e.target.value.toLowerCase();
  const authorItems = document.querySelectorAll('.author-item');
  
  authorItems.forEach(item => {
    const name = item.dataset.name.toLowerCase();
    if (name.includes(searchTerm)) {
      item.style.display = 'block';
    } else {
      item.style.display = 'none';
    }
  });
});

const markers = [];
const customIcon = L.Icon.extend({
  options: {
    iconSize: [60, 60],
    iconAnchor: [30, 60],
    popupAnchor: [0, -60],
    className: 'portrait-icon'
  }
});

literaryPlaces.forEach(item => {
  const icon = new customIcon({ iconUrl: item.portraitUrl });
  
  const marker = L.marker(item.coords, { icon }).addTo(map);
  
  let popupContent = `
    <div style="max-width: 300px; padding: 10px;">
      <h3 style="margin-top: 0; color: #b21f1f;">${item.name}</h3>
      <p><i class="fas fa-map-marker-alt"></i> <b>Місце:</b> ${item.place}</p>
      <p>${item.description}</p>
  `;
  
  if (item.videoUrl) {
    popupContent += `
      <div style="margin-top: 15px;">
        <iframe src="${item.videoUrl}" width="280" height="158" 
                style="border-radius: 8px;" allowfullscreen></iframe>
      </div>
    `;
  }
  
  popupContent += `</div>`;
  
  marker.bindPopup(popupContent, { maxWidth: 350 });
  marker.bindTooltip(item.name, { direction: 'top', offset: [0, -10] });
  
  marker.on('click', () => {
    highlightMarker(marker);
  });
  
  markers.push({ marker, author: item });
});

function highlightMarker(marker) {
  document.querySelectorAll('.portrait-icon').forEach(icon => {
    icon.classList.remove('highlighted');
  });
  
  const iconElement = marker._icon;
  if (iconElement) {
    iconElement.classList.add('highlighted');
    
    const authorName = markers.find(m => m.marker === marker).author.name;
    const authorItem = document.querySelector(`.author-item[data-name="${authorName}"]`);
    if (authorItem) {
      authorItem.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }
}

map.on('zoomend', () => {
  const currentZoom = map.getZoom();
  const scale = Math.min(1.5, Math.max(0.7, currentZoom / 8));
  document.querySelectorAll('.portrait-icon').forEach(img => {
    img.style.width = `${Math.round(60 * scale)}px`;
    img.style.height = `${Math.round(60 * scale)}px`;
  });
}); 