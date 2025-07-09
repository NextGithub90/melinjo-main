// Wait for DOM to load
document.addEventListener("DOMContentLoaded", function () {
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
