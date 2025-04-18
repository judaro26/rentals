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
      en: "Spacious backyard with BBQ area",
      es: "Amplio patio trasero con zona de barbacoa"
    }
  ],
  studio: [
    {
      src: 'images/studio1.jpg',
      en: "Studio - 1 Bed / 1 Bath - $1200/mo",
      es: "Estudio - 1 Habitación / 1 Baño - $1200/mes"
    },
    {
      src: 'images/studio2.jpg',
      en: "Cozy and modern design",
      es: "Diseño acogedor y moderno"
    }
  ]
};

let language = localStorage.getItem("lang");
let currentSlide = 0;
let currentType = 'main';

window.onload = () => {
  if (!language) {
    document.getElementById("languageModal").style.display = "flex";
  } else {
    document.getElementById("mainPage").classList.remove("hidden");
  }
};

function setLanguage(lang) {
  language = lang;
  localStorage.setItem("lang", lang);
  document.getElementById("languageModal").style.display = "none";
  document.getElementById("mainPage").classList.remove("hidden");
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

  document.getElementById('mainHouseBtn').textContent = mainText;
  document.getElementById('studioBtn').textContent = studioText;
}

function nextSlide() {
  if (currentSlide < slides[currentType].length - 1) {
    currentSlide++;
    showSlide();
  }
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
