// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
  // Language Switcher
  const languageBtn = document.getElementById("languageBtn");
  let currentLanguage = "en"; // Default language is English

  // Text content for both languages
  const translations = {
    en: {
      // Hero section
      heroTitle: "CAMPOENI",
      heroSubtitle: "Tradition in Every Taste",
      heroText: "From the heart of Aceh to your world. We bring authentic Acehnese flavors through premium raw ingredients harvested, dried, and packaged with care.",
      heroButton: "Explore Our Products",

      // About section
      aboutTitle: "About Us",
      aboutSubtitle: "A Story Told Through Taste",
      aboutHeading: "Rooted in Tradition, Grown for the World",
      aboutText1:
        "Campoeni was founded in 2019 in Banda Aceh with a simple but powerful mission: to bring the true taste of Aceh to the global table. We are not just a supplier — we are storytellers of flavor, preserving culinary heritage through raw ingredients harvested, dried, and packaged with care.",
      aboutText2: "From the hands of local farmers and home artisans, every product we offer holds the soul of our land. Our community is our strength — and our products are living proof of that culture.",
      aboutFeaturesTitle: "What We Stand For:",
      aboutFeature1: "Authentic ingredients sourced from Acehnese soil",
      aboutFeature2: "Traditional processing, modern packaging",
      aboutFeature3: "Export-grade quality",
      aboutFeature4: "Empowering local communities",
      aboutText3: "Campoeni brings not only products, but a sense of place and story — from village kitchens to global markets.",

      // Products section
      productsTitle: "OUR PRODUCTS",
      productsSubtitle: "From Acehnese Soil to Global Shelves",
      product1Title: "Raw Melinjo Chips",
      product1Desc: "Sliced and sun-dried melinjo chips (uncooked), made from fresh melinjo fruit. Ideal for snack manufacturers, culinary businesses, and wholesalers.",
      product2Title: "Gayo Arabica Coffee",
      product2Desc: "Sourced from the highlands of Gayo, Central Aceh — known for its unique floral aroma and smooth body.",
      product3Title: "Palm Sugar",
      product3Desc: "A natural sweetener derived from the sap of Arenga pinnata (aren tree), traditionally processed and sun-dried by Acehnese artisans.",
      product4Title: "Asam Sunti",
      product4Desc: "A rare fermented spice made from bilimbi fruit, sun-dried and naturally processed — a flavor cornerstone in Acehnese cuisine.",
      orderNow: "Order Now",

      // Why Choose Us section
      whyChooseTitle: "Why Choose Campoeni?",
      whyChooseSubtitle: "What makes our products special",

      // Contact section
      contactTitle: "Contact Us",
      contactSubtitle: "Let's Talk!",
      contactText: "Interested in our products or partnership? Reach out to us today.",

      // Footer
      footerTagline: '"Tradition in Every Taste"',
      footerText: "From the heart of Aceh — to your world.",
      copyright: "© 2025 Campoeni. All Rights Reserved.",
      quickLinks: "Quick Links",
      ourProducts: "Our Products",
      contactInfo: "Contact Information",
      followUs: "Follow Us",
    },
    my: {
      // Hero section
      heroTitle: "CAMPOENI",
      heroSubtitle: "Tradisi Dalam Setiap Rasa",
      heroText: "Dari hati Aceh ke dunia anda. Kami membawa rasa asli Aceh melalui bahan mentah premium yang dituai, dikeringkan, dan dibungkus dengan teliti.",
      heroButton: "Jelajahi Produk Kami",

      // About section
      aboutTitle: "Tentang Kami",
      aboutSubtitle: "Sebuah Kisah Dalam Setiap Rasa",
      aboutHeading: "Berakar dari Tradisi, Dibawa ke Dunia",
      aboutText1:
        "Campoeni ditubuhkan pada tahun 2019 di Banda Aceh dengan satu misi yang jelas dan bermakna: membawa rasa sebenar dari bumi Aceh ke meja dunia. Kami bukan sekadar pembekal — kami adalah penjaga warisan rasa, mengekalkan khazanah kulinari melalui bahan mentah yang dituai, dikeringkan dan dibungkus dengan teliti.",
      aboutText2: "Daripada tangan petani kampung dan pengusaha kecil, setiap produk kami membawa jiwa tanah kami. Komuniti adalah kekuatan kami — dan produk kami adalah bukti hidup warisan budaya Aceh.",
      aboutFeaturesTitle: "Apa yang Kami Junjung:",
      aboutFeature1: "Bahan asli dari bumi Aceh",
      aboutFeature2: "Pemprosesan tradisional, pembungkusan moden",
      aboutFeature3: "Kualiti bertaraf eksport",
      aboutFeature4: "Memperkasa komuniti tempatan",
      aboutText3: "Campoeni bukan sekadar menjual produk — kami menjual cerita dan rasa asal dari kampung ke pasaran global.",

      // Products section
      productsTitle: "PRODUK KAMI",
      productsSubtitle: "Dari Tanah Aceh ke Rak Dunia",
      product1Title: "Keripik Melinjo Mentah",
      product1Desc: "Keripik melinjo yang dihiris dan dijemur matahari (belum digoreng), dibuat daripada buah melinjo segar. Sesuai untuk pengilang makanan ringan, perniagaan kulinari, dan pemborong.",
      product2Title: "Kopi Arabika Gayo",
      product2Desc: "Diambil dari tanah tinggi Gayo, Aceh Tengah — terkenal dengan aroma floral dan rasa yang lembut.",
      product3Title: "Gula Aren",
      product3Desc: "Pemanis semula jadi yang dihasilkan daripada nira pokok aren (Arenga pinnata), diproses secara tradisional dan dijemur oleh pengusaha tempatan di Aceh.",
      product4Title: "Asam Sunti",
      product4Desc: "Rempah istimewa Aceh yang diperbuat daripada belimbing buluh yang diperam dan dijemur secara tradisional — perasa penting dalam masakan Aceh.",
      orderNow: "Pesan Sekarang",

      // Why Choose Us section
      whyChooseTitle: "Mengapa Pilih Campoeni?",
      whyChooseSubtitle: "Apa yang membuat produk kami istimewa",

      // Contact section
      contactTitle: "Hubungi Kami",
      contactSubtitle: "Mari Berbincang!",
      contactText: "Berminat dengan produk kami atau ingin bekerjasama? Hubungi kami hari ini.",

      // Footer
      footerTagline: '"Tradisi Dalam Setiap Rasa"',
      footerText: "Dari bumi Aceh — untuk dunia.",
      copyright: "© 2025 Campoeni. Hak Cipta Terpelihara.",
      quickLinks: "Pautan Pantas",
      ourProducts: "Produk Kami",
      contactInfo: "Maklumat Hubungan",
      followUs: "Ikuti Kami",
    },
  };

  // Function to switch language
  function switchLanguage() {
    if (currentLanguage === "en") {
      currentLanguage = "my";
      languageBtn.textContent = "MY";
      updateContent("my");
    } else {
      currentLanguage = "en";
      languageBtn.textContent = "EN";
      updateContent("en");
    }
  }

  // Function to update content based on selected language
  function updateContent(lang) {
    const content = translations[lang];

    // Update Hero Section
    document.querySelector(".hero-content h2").textContent = content.heroTitle;
    document.querySelector(".hero-content h3").textContent = content.heroSubtitle;
    document.querySelector(".hero-content p").textContent = content.heroText;
    document.querySelector(".hero-content .btn-primary").textContent = content.heroButton;

    // Update About Section
    document.querySelector("#about .section-header h2").textContent = content.aboutTitle;
    document.querySelector("#about .section-header h3").textContent = content.aboutSubtitle;
    document.querySelector(".about-text h4").textContent = content.aboutHeading;

    const aboutParagraphs = document.querySelectorAll(".about-text p");
    if (aboutParagraphs.length >= 3) {
      aboutParagraphs[0].textContent = content.aboutText1;
      aboutParagraphs[1].textContent = content.aboutText2;
      aboutParagraphs[2].textContent = content.aboutText3;
    }

    document.querySelectorAll(".about-text h4")[1].textContent = content.aboutFeaturesTitle;

    const aboutFeatures = document.querySelectorAll(".about-features li");
    if (aboutFeatures.length >= 4) {
      aboutFeatures[0].textContent = content.aboutFeature1;
      aboutFeatures[1].textContent = content.aboutFeature2;
      aboutFeatures[2].textContent = content.aboutFeature3;
      aboutFeatures[3].textContent = content.aboutFeature4;
    }

    // Update Products Section
    document.querySelector("#products .section-header h2").textContent = content.productsTitle;
    document.querySelector("#products .section-header h3").textContent = content.productsSubtitle;

    // Update product cards
    const productCards = document.querySelectorAll(".product-card");
    if (productCards.length >= 4) {
      // Product 1 - Melinjo
      productCards[0].querySelector("h3").textContent = content.product1Title;
      productCards[0].querySelector("p").textContent = content.product1Desc;
      productCards[0].querySelector(".btn-secondary").textContent = content.orderNow;

      // Product 2 - Coffee
      productCards[1].querySelector("h3").textContent = content.product2Title;
      productCards[1].querySelector("p").textContent = content.product2Desc;
      productCards[1].querySelector(".btn-secondary").textContent = content.orderNow;

      // Product 3 - Palm Sugar
      productCards[2].querySelector("h3").textContent = content.product3Title;
      productCards[2].querySelector("p").textContent = content.product3Desc;
      productCards[2].querySelector(".btn-secondary").textContent = content.orderNow;

      // Product 4 - Asam Sunti
      productCards[3].querySelector("h3").textContent = content.product4Title;
      productCards[3].querySelector("p").textContent = content.product4Desc;
      productCards[3].querySelector(".btn-secondary").textContent = content.orderNow;
    }

    // Update Why Choose Us Section
    document.querySelector("#why-choose .section-header h2").textContent = content.whyChooseTitle;
    document.querySelector("#why-choose .section-header p").textContent = content.whyChooseSubtitle;

    // Update Contact Section
    document.querySelector("#contact .section-header h2").textContent = content.contactTitle;
    document.querySelector("#contact .section-header h3").textContent = content.contactSubtitle;
    document.querySelector("#contact .section-header p").textContent = content.contactText;

    // Update Footer
    document.querySelector(".footer-logo p").textContent = content.footerTagline;
    document.querySelectorAll(".footer-logo p")[1].textContent = content.footerText;
    document.querySelector(".footer-bottom p").textContent = content.copyright;

    // Update footer headings
    const footerHeadings = document.querySelectorAll(".footer-content h3");
    if (footerHeadings.length >= 4) {
      footerHeadings[0].textContent = content.quickLinks;
      footerHeadings[1].textContent = content.ourProducts;
      footerHeadings[2].textContent = content.contactInfo;
      footerHeadings[3].textContent = content.followUs;
    }
  }

  // Add click event to language button
  if (languageBtn) {
    languageBtn.addEventListener("click", switchLanguage);
  }

  // Gallery Slider Functionality
  const gallerySlider = document.querySelector(".gallery-slider");
  const gallerySlides = document.querySelectorAll(".gallery-slide");
  const galleryPrev = document.querySelector(".gallery-prev");
  const galleryNext = document.querySelector(".gallery-next");
  const galleryDots = document.querySelector(".gallery-dots");

  if (gallerySlider && gallerySlides.length > 0) {
    let currentSlide = 0;
    let slideInterval;
    const slideCount = gallerySlides.length;

    // Create dots for navigation
    for (let i = 0; i < slideCount; i++) {
      const dot = document.createElement("div");
      dot.classList.add("gallery-dot");
      if (i === 0) dot.classList.add("active");
      dot.addEventListener("click", () => {
        goToSlide(i);
        resetInterval();
      });
      galleryDots.appendChild(dot);
    }

    // Function to go to a specific slide
    function goToSlide(slideIndex) {
      if (window.innerWidth <= 576) {
        // Only for mobile view
        currentSlide = slideIndex;
        updateSlider();
        updateDots();
      }
    }

    // Update slider position
    function updateSlider() {
      if (window.innerWidth <= 576) {
        // Only for mobile view
        const slideWidth = gallerySlides[0].offsetWidth;
        gallerySlider.scrollTo({
          left: currentSlide * slideWidth,
          behavior: "smooth",
        });
      }
    }

    // Update active dot
    function updateDots() {
      const dots = document.querySelectorAll(".gallery-dot");
      dots.forEach((dot, index) => {
        if (index === currentSlide) {
          dot.classList.add("active");
        } else {
          dot.classList.remove("active");
        }
      });
    }

    // Next slide function
    function nextSlide() {
      if (window.innerWidth <= 576) {
        // Only for mobile view
        currentSlide = (currentSlide + 1) % slideCount;
        updateSlider();
        updateDots();
      }
    }

    // Previous slide function
    function prevSlide() {
      if (window.innerWidth <= 576) {
        // Only for mobile view
        currentSlide = (currentSlide - 1 + slideCount) % slideCount;
        updateSlider();
        updateDots();
      }
    }

    // Start automatic slideshow
    function startSlideshow() {
      if (window.innerWidth <= 576) {
        // Only for mobile view
        slideInterval = setInterval(nextSlide, 8000); // Change slide every 8 seconds
      }
    }

    // Reset interval when manually changing slides
    function resetInterval() {
      clearInterval(slideInterval);
      startSlideshow();
    }

    // Event listeners for navigation buttons
    if (galleryPrev) {
      galleryPrev.addEventListener("click", () => {
        prevSlide();
        resetInterval();
      });
    }

    if (galleryNext) {
      galleryNext.addEventListener("click", () => {
        nextSlide();
        resetInterval();
      });
    }

    // Handle swipe gestures for mobile
    let touchStartX = 0;
    let touchEndX = 0;

    gallerySlider.addEventListener(
      "touchstart",
      (e) => {
        touchStartX = e.changedTouches[0].screenX;
      },
      { passive: true }
    );

    gallerySlider.addEventListener(
      "touchend",
      (e) => {
        touchEndX = e.changedTouches[0].screenX;
        handleSwipe();
      },
      { passive: true }
    );

    function handleSwipe() {
      if (window.innerWidth <= 576) {
        // Only for mobile view
        const swipeThreshold = 50; // Minimum distance for swipe
        if (touchEndX < touchStartX - swipeThreshold) {
          // Swipe left - next slide
          nextSlide();
          resetInterval();
        } else if (touchEndX > touchStartX + swipeThreshold) {
          // Swipe right - previous slide
          prevSlide();
          resetInterval();
        }
      }
    }

    // Check window size and start slideshow if on mobile
    function checkWindowSize() {
      if (window.innerWidth <= 576) {
        startSlideshow();
      } else {
        clearInterval(slideInterval);
      }
    }

    // Initialize slider
    checkWindowSize();

    // Update on window resize
    window.addEventListener("resize", checkWindowSize);
  }

  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navList = document.querySelector(".nav-list");

  if (mobileMenuBtn) {
    mobileMenuBtn.addEventListener("click", function () {
      navList.classList.toggle("active");
      // Change icon
      const icon = this.querySelector("i");
      if (icon.classList.contains("fa-bars")) {
        icon.classList.remove("fa-bars");
        icon.classList.add("fa-times");
      } else {
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });
  }

  // Close mobile menu when clicking outside
  document.addEventListener("click", function (event) {
    if (navList && navList.classList.contains("active") && !event.target.closest(".nav") && !event.target.closest(".mobile-menu-btn")) {
      navList.classList.remove("active");
      const icon = mobileMenuBtn.querySelector("i");
      icon.classList.remove("fa-times");
      icon.classList.add("fa-bars");
    }
  });

  // Close mobile menu when clicking on a nav link
  const navLinks = document.querySelectorAll(".nav-list a");
  navLinks.forEach((link) => {
    link.addEventListener("click", function () {
      if (navList && navList.classList.contains("active")) {
        navList.classList.remove("active");
        const icon = mobileMenuBtn.querySelector("i");
        icon.classList.remove("fa-times");
        icon.classList.add("fa-bars");
      }
    });
  });

  // Sticky Header
  const header = document.querySelector(".header");
  const heroSection = document.querySelector(".hero");

  if (header && heroSection) {
    const heroHeight = heroSection.offsetHeight;

    window.addEventListener("scroll", function () {
      if (window.scrollY > 100) {
        header.classList.add("sticky");
      } else {
        header.classList.remove("sticky");
      }
    });
  }

  // Active Navigation Link on Scroll
  const sections = document.querySelectorAll("section[id]");

  function highlightNavLink() {
    const scrollY = window.pageYOffset;

    sections.forEach((section) => {
      const sectionHeight = section.offsetHeight;
      const sectionTop = section.offsetTop - 100;
      const sectionId = section.getAttribute("id");

      try {
        const navLink = document.querySelector(".nav-list a[href*='#" + sectionId + "']");
        if (navLink) {
          if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            navLink.classList.add("active");
          } else {
            navLink.classList.remove("active");
          }
        }
      } catch (error) {
        console.log("Error highlighting nav link for section: " + sectionId);
      }
    });
  }

  window.addEventListener("scroll", highlightNavLink);

  // Smooth Scroll with faster animation
  const smoothScroll = function (target, duration) {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition - 80; // Offset for header
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return (c / 2) * t * t + b;
      t--;
      return (-c / 2) * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  };

  // Apply smooth scroll to all anchor links with faster animation
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", function (e) {
      if (this.getAttribute("href") !== "#") {
        e.preventDefault();
        const target = this.getAttribute("href");
        smoothScroll(target, 300); // Faster animation (300ms instead of 1000ms)
      }
    });
  });

  // Form Submission
  const contactForm = document.querySelector(".contact-form form");

  if (contactForm) {
    contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      // Here you would normally send the form data to a server
      // For demo purposes, we'll just show an alert
      alert("Terima kasih! Pesan Anda telah dikirim.");
      this.reset();
    });
  }

  // Animation on Scroll (Simple Version)
  function revealOnScroll() {
    const elements = document.querySelectorAll(".factory-item, .advantage-item, .brand-item, .product");
    const windowHeight = window.innerHeight;

    elements.forEach((element) => {
      const elementTop = element.getBoundingClientRect().top;

      if (elementTop < windowHeight - 100) {
        element.classList.add("revealed");
      }
    });
  }

  window.addEventListener("scroll", revealOnScroll);
  revealOnScroll(); // Initial check on page load

  // Animate Stats
  const statNumbers = document.querySelectorAll(".stat-number");
  let statsAnimated = false;

  function animateStats() {
    if (statsAnimated) return;

    const statsSection = document.querySelector(".stats");
    if (!statsSection) return;

    const statsSectionTop = statsSection.offsetTop;
    const statsSectionHeight = statsSection.offsetHeight;
    const windowHeight = window.innerHeight;
    const scrollY = window.pageYOffset;

    if (scrollY > statsSectionTop - windowHeight + 200 && scrollY < statsSectionTop + statsSectionHeight) {
      statNumbers.forEach((statNumber) => {
        const target = parseInt(statNumber.getAttribute("data-count"));
        if (isNaN(target)) return;

        const duration = 2000; // 2 seconds
        const increment = target / (duration / 20); // Update every 20ms
        let current = 0;

        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            statNumber.textContent = target;
            clearInterval(timer);
          } else {
            statNumber.textContent = Math.floor(current);
          }
        }, 20);
      });

      statsAnimated = true;
    }
  }

  // Call once on page load
  animateStats();

  // And also on scroll
  window.addEventListener("scroll", animateStats);
});

// WhatsApp Form Integration
function sendToWhatsApp(event) {
  event.preventDefault();

  // Get form values
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const phone = document.getElementById("phone").value;
  const product = document.getElementById("product").value;
  const message = document.getElementById("message").value;

  // Format the message for WhatsApp
  let whatsappMessage = `*New Inquiry from Campoeni Website*%0A%0A`;
  whatsappMessage += `*Name:* ${name}%0A`;
  whatsappMessage += `*Email:* ${email}%0A`;
  whatsappMessage += `*Phone:* ${phone}%0A`;
  whatsappMessage += `*Product:* ${product}%0A`;
  whatsappMessage += `*Message:* ${message}%0A`;

  // WhatsApp phone number (international format without + symbol)
  const phoneNumber = "6281269088444"; // Replace with your actual WhatsApp number

  // Create WhatsApp URL
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;

  // Show confirmation before redirecting
  if (confirm("You will be redirected to WhatsApp to complete your inquiry. Continue?")) {
    // Open WhatsApp in a new tab
    window.open(whatsappURL, "_blank");

    // Reset the form
    document.getElementById("whatsappForm").reset();
  }
}
