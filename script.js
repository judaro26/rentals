const properties = {
  stockton: {
    main: {
      title: { en: "Main House", es: "Casa Principal" },
      description: { en: "2 Bed / 1 Bath - $1950/mo", es: "2 Habitaciones / 1 Baño - $1950/mes" },
      images: [
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
        }
      ]
    },
    studio: {
      title: { en: "Studio", es: "Estudio" },
      description: { en: "1 Bed / 1 Bath - $950/mo", es: "1 Habitación / 1 Baño - $950/mes" },
      images: [
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
        }
      ]
    }
  },
  fairfield: {
    // Example property - add more as needed
    apartment: {
      title: { en: "Fairfield Apartment", es: "Apartamento de Fairfield" },
      description: { en: "3 Bed / 2 Bath - $2500/mo", es: "3 Habitaciones / 2 Baños - $2500/mes" },
      images: [
        { src: 'images/fairfield/apartment1.jpg', en: "Fairfield Apartment - Living Room", es: "Apartamento de Fairfield - Sala de estar" },
        { src: 'images/fairfield/apartment2.jpg', en: "Fairfield Apartment - Kitchen", es: "Apartamento de Fairfield - Cocina" }
      ]
    }
  }
};

// State variables
let currentLocation = null;
let currentSection = null;
let previousSection = null;
let language = localStorage.getItem("lang") || 'en';
let currentSlide = 0;
let currentProperty = null;

// Initialize the page
window.onload = () => {
  initializePage();
};

function initializePage() {
  document.querySelectorAll('section').forEach(sec => {
    sec.classList.add('hidden');
  });
  document.getElementById("languageModal").style.display = "none";
  
  if (!localStorage.getItem("lang")) {
    showLanguageModal();
  } else {
    showLocationScreen();
  }
}

function showLanguageModal() {
  document.querySelectorAll('section').forEach(sec => {
    sec.classList.add('hidden');
  });
  document.getElementById("languageModal").style.display = "flex";
}

function showLocationScreen() {
  document.querySelectorAll('section').forEach(sec => {
    sec.classList.add('hidden');
  });
  document.getElementById("languageModal").style.display = "none";
  document.getElementById("locationScreen").classList.remove("hidden");
  updateLabels();
}

function setLanguage(lang) {
  language = lang;
  localStorage.setItem("lang", lang);
  showLocationScreen();
}

function selectLocation(location) {
  currentLocation = location;
  document.getElementById("locationScreen").classList.add("hidden");
  
  if (location === 'stockton') {
    document.getElementById("promptScreen").classList.remove("hidden");
  } else {
    showPropertiesForLocation(location);
  }
  
  updateLabels();
}

function showPropertiesForLocation(location) {
  document.querySelectorAll('section').forEach(sec => {
    sec.classList.add('hidden');
  });
  
  let propertiesScreen = document.getElementById("dynamicPropertiesScreen");
  
  if (!propertiesScreen) {
    propertiesScreen = document.createElement('div');
    propertiesScreen.id = 'dynamicPropertiesScreen';
    document.body.appendChild(propertiesScreen);
  }
  
  propertiesScreen.innerHTML = `
    <div class="container">
      <h2>${language === 'es' ? 'Propiedades en' : 'Properties in'} ${location.charAt(0).toUpperCase() + location.slice(1)}</h2>
      <div class="property-cards" id="${location}Properties"></div>
      <button class="back-btn" onclick="goBackToLocation()">
        <i class="fas fa-arrow-left"></i> ${language === 'es' ? 'Volver a ubicaciones' : 'Back to locations'}
      </button>
    </div>
  `;
  
  const propertiesGrid = document.getElementById(`${location}Properties`);
  const locationProperties = properties[location];
  
  for (const [propertyId, property] of Object.entries(locationProperties)) {
    const propertyCard = document.createElement('div');
    propertyCard.className = 'property-card';
    propertyCard.innerHTML = `
      <div class="property-img" style="background-image: url('${property.images[0].src}');"></div>
      <div class="property-info">
        <h3>${property.title[language]}</h3>
        <p>${property.description[language]}</p>
        <div class="property-actions">
          <button class="view-btn" onclick="viewPropertyGallery('${location}', '${propertyId}')">
            <i class="fas fa-images"></i> ${language === 'es' ? 'Ver Imágenes' : 'View Images'}
          </button>
          <button class="apply-btn" onclick="applyForProperty('${location}', '${propertyId}')">
            <i class="fas fa-file-signature"></i> ${language === 'es' ? 'Aplicar' : 'Apply'}
          </button>
        </div>
      </div>
    `;
    propertiesGrid.appendChild(propertyCard);
  }
  
  propertiesScreen.classList.remove('hidden');
}

function viewPropertyGallery(location, propertyId) {
  currentLocation = location;
  currentProperty = propertyId;
  currentSlide = 0;
  
  document.getElementById("mainPage")?.classList.add("hidden");
  document.getElementById("dynamicPropertiesScreen")?.classList.add("hidden");
  
  showSlide(location, propertyId);
  document.getElementById("slideshow").classList.remove("hidden");
}

function showSlide(location, propertyId) {
  const container = document.getElementById("slidesContainer");
  const property = properties[location][propertyId];
  const slide = property.images[currentSlide];
  
  container.innerHTML = `
    <img src="${slide.src}" alt="${slide[language]}">
    <div class="caption">${property.title[language]} - ${slide[language]}</div>
    <div class="slide-nav">
      ${currentSlide > 0 ? `<button class="slide-btn" onclick="prevSlide()"><i class="fas fa-chevron-left"></i> ${language === 'es' ? 'Anterior' : 'Previous'}</button>` : ''}
      <span class="slide-counter">${currentSlide + 1} / ${property.images.length}</span>
      ${currentSlide < property.images.length - 1 ? `<button class="slide-btn" onclick="nextSlide()">${language === 'es' ? 'Siguiente' : 'Next'} <i class="fas fa-chevron-right"></i></button>` : ''}
    </div>
    <button class="back-btn" onclick="goBackFromSlideshow()">
      <i class="fas fa-arrow-left"></i> ${language === 'es' ? 'Volver a propiedades' : 'Back to properties'}
    </button>
  `;
}

function nextSlide() {
  const property = properties[currentLocation][currentProperty];
  if (currentSlide < property.images.length - 1) {
    currentSlide++;
    showSlide(currentLocation, currentProperty);
  }
}

function prevSlide() {
  if (currentSlide > 0) {
    currentSlide--;
    showSlide(currentLocation, currentProperty);
  }
}

function goBackFromSlideshow() {
  document.getElementById("slideshow").classList.add("hidden");
  
  if (currentLocation === 'stockton') {
    document.getElementById("mainPage").classList.remove("hidden");
  } else {
    showPropertiesForLocation(currentLocation);
  }
}

function applyForProperty(location, propertyId) {
  currentProperty = propertyId;
  document.getElementById("dynamicPropertiesScreen").classList.add("hidden");
  document.getElementById("applicationForm").classList.remove("hidden");
  updateLabels();
  
  const propertySelect = document.getElementById("propertyType");
  if (propertySelect) {
    propertySelect.value = propertyId;
  }
}

function goBackToLocation() {
  document.getElementById("dynamicPropertiesScreen").classList.add("hidden");
  document.getElementById("locationScreen").classList.remove("hidden");
}

function goToGallery() {
  document.getElementById('promptScreen').classList.add('hidden');
  document.getElementById('mainPage').classList.remove('hidden');
  updateLabels();
}

function goToApplication() {
  document.getElementById("promptScreen").classList.add("hidden");
  document.getElementById("applicationForm").classList.remove("hidden");
  updateLabels();
}

function showPromptScreen() {
  document.querySelectorAll('section').forEach(sec => {
    sec.classList.add('hidden');
  });
  document.getElementById("promptScreen").classList.remove("hidden");
  updateLabels();
}

function updateLabels() {
  const translations = {
    en: {
      locationTitle: "Select Location",
      stockton: "Stockton, CA",
      fairfield: "Fairfield, CA",
      promptTitle: "What would you like to do?",
      viewImages: "View Images",
      applyNow: "Apply Now",
      formTitle: "Rental Application",
      fullName: "Full Name",
      email: "Email Address",
      phone: "Phone Number",
      employer: "Current Employer",
      jobTitle: "Job Title",
      income: "Monthly Income",
      submitBtn: "Submit Application"
    },
    es: {
      locationTitle: "Seleccione Ubicación",
      stockton: "Stockton, CA",
      fairfield: "Fairfield, CA",
      promptTitle: "¿Qué te gustaría hacer?",
      viewImages: "Ver Imágenes",
      applyNow: "Aplicar Ahora",
      formTitle: "Solicitud de Alquiler",
      fullName: "Nombre Completo",
      email: "Correo Electrónico",
      phone: "Número de Teléfono",
      employer: "Empleador Actual",
      jobTitle: "Título del Trabajo",
      income: "Ingresos Mensuales",
      submitBtn: "Enviar Solicitud"
    }
  };

  const lang = translations[language] || translations.en;
  
  for (const [key, value] of Object.entries(lang)) {
    const elements = document.querySelectorAll(`[id="${key}"]`);
    elements.forEach(el => {
      if (el.tagName === 'INPUT' && el.type !== 'submit') {
        el.placeholder = value;
      } else {
        el.textContent = value;
      }
    });
  }

  if (document.getElementById('mainHouseBtn') && properties.stockton.main) {
    document.getElementById('mainHouseBtn').textContent = properties.stockton.main.title[language];
    document.querySelector('#mainPage .property-card:nth-child(1) p').textContent = properties.stockton.main.description[language];
  }
  
  if (document.getElementById('studioBtn') && properties.stockton.studio) {
    document.getElementById('studioBtn').textContent = properties.stockton.studio.title[language];
    document.querySelector('#mainPage .property-card:nth-child(2) p').textContent = properties.stockton.studio.description[language];
  }
}

document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('rentalApplication');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();
      alert(language === 'es' ? 
        'Solicitud enviada con éxito. Nos pondremos en contacto con usted pronto.' : 
        'Application submitted successfully. We will contact you soon.');
      this.reset();
      if (currentLocation === 'stockton') {
        showPromptScreen();
      } else {
        showPropertiesForLocation(currentLocation);
      }
    });
  }

  document.querySelectorAll('input[name="pets"]').forEach(radio => {
    radio.addEventListener('change', function() {
      document.getElementById('petDetails').style.display = 
        this.value === 'yes' ? 'block' : 'none';
    });
  });
});
