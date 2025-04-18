const slides = {
  main: [
    {
      src: 'images/main1.jpg',
      en: "Main House - 2 Bed / 1 Bath - $1950/mo",
      es: "Casa Principal - 2 Habitaciones / 1 Baños - $1950/mes"
    },
        {
      src: 'images/main2.jpg',
      en: "Main House - 2 Bed / 1 Bath - $1950/mo",
      es: "Casa Principal - 2 Habitaciones / 1 Baños - $1950/mes"
    },
      {
      src: 'images/main3.jpg',
      en: "Main House - 2 Bed / 1 Bath - $1950/mo",
      es: "Casa Principal - 2 Habitaciones / 1 Baños - $1950/mes"
    },
    {
      src: 'images/main4.jpg',
      en: "Main House - 2 Bed / 1 Bath - $1950/mo",
      es: "Casa Principal - 2 Habitaciones / 1 Baños - $1950/mes"
    },
    {
      src: 'images/main5.jpg',
      en: "Main House - 2 Bed / 1 Bath - $1950/mo",
      es: "Casa Principal - 2 Habitaciones / 1 Baños - $1950/mes"
    },
    {
      src: 'images/main6.jpg',
      en: "Main House - 2 Bed / 1 Bath - $1950/mo",
      es: "Casa Principal - 2 Habitaciones / 1 Baños - $1950/mes"
    },
    {
      src: 'images/main7.jpg',
      en: "Main House - 2 Bed / 1 Bath - $1950/mo",
      es: "Casa Principal - 2 Habitaciones / 1 Baños - $1950/mes"
    },
    {
      src: 'images/main8.jpg',
      en: "Main House - 2 Bed / 1 Bath - $1950/mo",
      es: "Casa Principal - 2 Habitaciones / 1 Baños - $1950/mes"
    },
    {
      src: 'images/main9.jpg',
      en: "Main House - 2 Bed / 1 Bath - $1950/mo",
      es: "Casa Principal - 2 Habitaciones / 1 Baños - $1950/mes"
    },
    {
      src: 'images/main10.jpg',
      en: "Main House - 2 Bed / 1 Bath - $1950/mo",
      es: "Casa Principal - 2 Habitaciones / 1 Baños - $1950/mes"
    },
  ],
  studio: [
    {
      src: 'images/studio1.jpg',
      en: "Studio - 1 Bed / 1 Bath - $950/mo",
      es: "Estudio - 1 Habitación / 1 Baño - $950/mes"
    },
    {
      src: 'images/studio2.jpg',
      en: "Studio - 1 Bed / 1 Bath - $950/mo",
      es: "Estudio - 1 Habitación / 1 Baño - $950/mes"
    },
    {
      src: 'images/studio3.jpg',
      en: "Studio - 1 Bed / 1 Bath - $950/mo",
      es: "Estudio - 1 Habitación / 1 Baño - $950/mes"
    },
    {
      src: 'images/studio4.jpg',
      en: "Studio - 1 Bed / 1 Bath - $950/mo",
      es: "Estudio - 1 Habitación / 1 Baño - $950/mes"
    },
    {
      src: 'images/studio5.jpg',
      en: "Studio - 1 Bed / 1 Bath - $950/mo",
      es: "Estudio - 1 Habitación / 1 Baño - $950/mes"
    },
    {
      src: 'images/studio6.jpg',
      en: "Studio - 1 Bed / 1 Bath - $950/mo",
      es: "Estudio - 1 Habitación / 1 Baño - $950/mes"
    },
    {
      src: 'images/studio7.jpg',
      en: "Studio - 1 Bed / 1 Bath - $950/mo",
      es: "Estudio - 1 Habitación / 1 Baño - $950/mes"
    },
    {
      src: 'images/studio8.jpg',
      en: "Studio - 1 Bed / 1 Bath - $950/mo",
      es: "Estudio - 1 Habitación / 1 Baño - $950/mes"
    },
    {
      src: 'images/studio9.jpg',
      en: "Studio - 1 Bed / 1 Bath - $950/mo",
      es: "Estudio - 1 Habitación / 1 Baño - $950/mes"
    },
    {
      src: 'images/studio10.jpg',
      en: "Studio - 1 Bed / 1 Bath - $950/mo",
      es: "Estudio - 1 Habitación / 1 Baño - $950/mes"
    },
  ]
};

let previousSection = null;

function showSection(sectionId) {
  document.querySelectorAll('section').forEach(sec => sec.classList.add('hidden'));
  const target = document.getElementById(sectionId);
  if (!target) return;
  target.classList.remove('hidden');
  previousSection = currentSection;
  currentSection = sectionId;
}

let language = localStorage.getItem("lang");
let currentSlide = 0;
let currentType = 'main';

window.onload = () => {
  if (!language) {
    document.getElementById("languageModal").style.display = "flex";
  } else {
    document.getElementById("promptScreen").classList.remove("hidden");
    updateLabels();
  }
};

function setLanguage(lang) {
  language = lang;
  localStorage.setItem("lang", lang);
  document.getElementById("languageModal").style.display = "none";
  document.getElementById("promptScreen").classList.remove("hidden");
  updateLabels();
}
function goToGallery() {
  document.getElementById("promptScreen").classList.add("hidden");
  document.getElementById("mainPage").classList.remove("hidden");
  updateLabels();
}

function goToApplication() {
  document.getElementById("promptScreen").classList.add("hidden");
  document.getElementById("applicationForm").classList.remove("hidden");
  updateLabels();
}

function openSlideshow(type) {
  currentType = type;
  currentSlide = 0;
  showSlide();
  document.getElementById("mainPage").classList.add("hidden");
  document.getElementById("slideshow").classList.remove("hidden");
}

function showSlide() {
  const container = document.getElementById("slidesContainer");
  const slide = slides[currentType][currentSlide];
  container.innerHTML = `
    <img src="${slide.src}" alt="Slide Image">
    <div class="caption">${slide[language]}</div>
    <div style="text-align: center; margin-top: 10px;">
      ${currentSlide > 0 ? '<button onclick="prevSlide()">Previous</button>' : ''}
      ${currentSlide < slides[currentType].length - 1 ? '<button onclick="nextSlide()">Next</button>' : ''}
    </div>
  `;
}

function updateLabels() {
  const mainText = language === 'es' ? 'Casa Principal' : 'Main House';
  const studioText = language === 'es' ? 'Estudio' : 'Studio';
  const promptTitle = language === 'es' ? '¿Qué te gustaría hacer?' : 'What would you like to do?';
  const viewImages = language === 'es' ? 'Ver Imágenes' : 'View Images';
  const applyText = language === 'es' ? 'Solicitar esta Propiedad' : 'Apply for this Property';
  const formTitle = language === 'es' ? 'Solicitud de Alquiler' : 'Rental Application';

  document.getElementById('mainHouseBtn').textContent = mainText;
  document.getElementById('studioBtn').textContent = studioText;
  document.getElementById('promptTitle').textContent = promptTitle;
  document.getElementById('viewImagesBtn').textContent = viewImages;
  document.getElementById('applyNowBtn').textContent = applyText;
  document.getElementById('formTitle').textContent = formTitle;
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide();
  }
}

function goBack() {
  document.getElementById("slideshow").classList.add("hidden");
  document.getElementById("mainPage").classList.remove("hidden");
}
