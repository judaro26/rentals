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

let currentSection = null;
let previousSection = null;

function showSection(sectionId) {
  if (currentSection !== sectionId) {
    previousSection = currentSection;
    currentSection = sectionId;
  }

  document.querySelectorAll('section').forEach(sec => sec.classList.add('hidden'));
  const target = document.getElementById(sectionId);
  if (target) {
    target.classList.remove('hidden');
  }
}

let language = localStorage.getItem("lang");
let currentSlide = 0;
let currentType = 'main';

function openSlideshow(type) {
  currentType = type;
  currentSlide = 0;
  showSlide();
  // Hide the property selection screen
  document.getElementById("mainPage").classList.add("hidden");
  // Show the slideshow screen
  showSection("slideshow");
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

function setLanguage(lang) {
  language = lang;
  localStorage.setItem("lang", lang);
  document.getElementById("languageModal").classList.add("hidden");
  document.getElementById("viewImagesBtn").textContent = lang === "es" ? "Ver Imágenes" : "View Images";
  document.getElementById("applyNowBtn").textContent = lang === "es" ? "Solicitar Ahora" : "Apply Now";
  document.getElementById("formTitle").textContent = lang === "es" ? "Solicitud de Alquiler" : "Rental Application";
  document.getElementById("promptTitle").textContent = lang === "es" ? "¿Qué te gustaría hacer?" : "What would you like to do?";
  showSection("promptScreen");
}

function goToGallery() {
  showSection("mainPage");
}

function goToApplication() {
  showSection("applicationForm");
}

function goBack() {
  if (previousSection) {
    showSection(previousSection);
  } else {
    showSection("promptScreen");
  }
}

function openSlideshow(type) {
  currentType = type;
  currentSlide = 0;
  updateSlide();
  showSection("slideshow");
}

function updateSlide() {
  const slide = slides[currentType][currentSlide];
  document.getElementById("slideImage").src = slide.src;
  document.getElementById("slideCaption").textContent = slide[language];
}

function nextSlide() {
  currentSlide = (currentSlide + 1) % slides[currentType].length;
  updateSlide();
}

function prevSlide() {
  currentSlide = (currentSlide - 1 + slides[currentType].length) % slides[currentType].length;
  updateSlide();
}

window.onload = () => {
  if (!language) {
    showSection("languageModal");
  } else {
    setLanguage(language);
  }
};

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



function goBack() {
  // Hide all main screens
  document.getElementById("promptScreen").classList.add("hidden");
  document.getElementById("applicationForm")?.classList.add("hidden");
  document.getElementById("galleryScreen")?.classList.add("hidden");

  // Show the modal
  document.getElementById("languageModal").style.display = "flex";
}
