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
let language = localStorage.getItem("lang");
let currentSlide = 0;
let currentType = 'main';

// Initialize the page with everything hidden except language modal if needed
function initializePage() {
  // Hide all sections initially
  document.querySelectorAll('section').forEach(sec => {
    sec.classList.add('hidden');
  });
  
  // Hide the language modal initially
  document.getElementById("languageModal").style.display = "none";
  
  // Check if language is set
  if (!language) {
    showLanguageModal();
  } else {
    showPromptScreen();
  }
}

function showLanguageModal() {
  // Hide everything and show only language modal
  document.querySelectorAll('section').forEach(sec => {
    sec.classList.add('hidden');
  });
  document.getElementById("languageModal").style.display = "flex";
}

function showPromptScreen() {
  // Hide everything and show only prompt screen
  document.querySelectorAll('section').forEach(sec => {
    sec.classList.add('hidden');
  });
  document.getElementById("languageModal").style.display = "none";
  document.getElementById("promptScreen").classList.remove("hidden");
  updateLabels();
}

function setLanguage(lang) {
  language = lang;
  localStorage.setItem("lang", lang);
  showPromptScreen();
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
      ${currentSlide > 0 ? `<button onclick="prevSlide()">${language === 'es' ? 'Anterior' : 'Previous'}</button>` : ''}
      ${currentSlide < slides[currentType].length - 1 ? `<button onclick="nextSlide()">${language === 'es' ? 'Siguiente' : 'Next'}</button>` : ''}
    </div>
    <button onclick="goBackToGallery()" style="margin-top: 20px;">${language === 'es' ? 'Volver a la galería' : 'Back to Gallery'}</button>
  `;
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

function updateLabels() {
  const translations = {
    en: {
      mainHouse: 'Main House',
      studio: 'Studio',
      promptTitle: 'What would you like to do?',
      viewImages: 'View Images',
      apply: 'Apply for this Property',
      formTitle: 'Rental Application',
      back: 'Back',
      previous: 'Previous',
      next: 'Next',
      backToGallery: 'Back to Gallery'
    },
    es: {
      mainHouse: 'Casa Principal',
      studio: 'Estudio',
      promptTitle: '¿Qué te gustaría hacer?',
      viewImages: 'Ver Imágenes',
      apply: 'Solicitar esta Propiedad',
      formTitle: 'Solicitud de Alquiler',
      back: 'Atrás',
      previous: 'Anterior',
      next: 'Siguiente',
      backToGallery: 'Volver a la galería'
    }
  };

  const lang = translations[language] || translations.en;
  
  if (document.getElementById('mainHouseBtn')) {
    document.getElementById('mainHouseBtn').textContent = lang.mainHouse;
  }
  if (document.getElementById('studioBtn')) {
    document.getElementById('studioBtn').textContent = lang.studio;
  }
  if (document.getElementById('promptTitle')) {
    document.getElementById('promptTitle').textContent = lang.promptTitle;
  }
  if (document.getElementById('viewImagesBtn')) {
    document.getElementById('viewImagesBtn').textContent = lang.viewImages;
  }
  if (document.getElementById('applyNowBtn')) {
    document.getElementById('applyNowBtn').textContent = lang.apply;
  }
  if (document.getElementById('formTitle')) {
    document.getElementById('formTitle').textContent = lang.formTitle;
  }
}

function goBackToGallery() {
  document.getElementById("slideshow").classList.add("hidden");
  document.getElementById("mainPage").classList.remove("hidden");
}

function goBack() {
  // Hide all screens and show language modal
  document.querySelectorAll('section').forEach(sec => {
    sec.classList.add('hidden');
  });
  showLanguageModal();
}


// Add to your existing script.js
document.addEventListener('DOMContentLoaded', function() {
    // Show/hide pet details based on selection
    document.querySelectorAll('input[name="pets"]').forEach(radio => {
        radio.addEventListener('change', function() {
            document.getElementById('petDetails').style.display = 
                this.value === 'yes' ? 'block' : 'none';
        });
    });

    // Form submission handler
    document.getElementById('rentalApplication').addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Here you would typically send the form data to your server
        // For now, we'll just show an alert
        alert(language === 'es' ? 
            'Solicitud enviada con éxito. Nos pondremos en contacto con usted pronto.' : 
            'Application submitted successfully. We will contact you soon.');
        
        // Reset form and go back to prompt screen
        this.reset();
        showPromptScreen();
    });

    // Update form labels when language changes
    window.updateLabels = function() {
        const translations = {
            en: {
                personalInfoTitle: "Personal Information",
                employmentTitle: "Employment Information",
                rentalHistoryTitle: "Rental History",
                vehicleTitle: "Vehicle Information",
                emergencyContactTitle: "Emergency Contact",
                additionalInfoTitle: "Additional Information",
                termsTitle: "Terms & Conditions",
                incomeProofLabel: "Proof of Income (Check all that apply)",
                evictionLabel: "Have you ever been evicted?",
                petsLabel: "Will you have pets?",
                smokingLabel: "Do you smoke?",
                submitBtn: "Submit Application"
            },
            es: {
                personalInfoTitle: "Información Personal",
                employmentTitle: "Información de Empleo",
                rentalHistoryTitle: "Historial de Alquiler",
                vehicleTitle: "Información del Vehículo",
                emergencyContactTitle: "Contacto de Emergencia",
                additionalInfoTitle: "Información Adicional",
                termsTitle: "Términos y Condiciones",
                incomeProofLabel: "Comprobante de Ingresos (Marque todo lo que corresponda)",
                evictionLabel: "¿Alguna vez ha sido desalojado?",
                petsLabel: "¿Tendrá mascotas?",
                smokingLabel: "¿Fuma usted?",
                submitBtn: "Enviar Solicitud"
            }
        };

        const lang = translations[language] || translations.en;
        
        // Update all labels
        for (const [key, value] of Object.entries(lang)) {
            const element = document.getElementById(key);
            if (element) element.textContent = value;
        }

        // Update submit button text
        const submitBtn = document.getElementById('submitApplicationBtn');
        if (submitBtn) {
            submitBtn.innerHTML = `<i class="fas fa-paper-plane"></i> ${lang.submitBtn}`;
        }
    };
});

// Initialize the page when loaded
window.onload = initializePage;
