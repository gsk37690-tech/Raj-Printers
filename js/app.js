/**
 * RAJ PRINTERS - MAIN APPLICATION JAVASCRIPT LOGIC
 * Dynamic rendering, WhatsApp pre-fills, mobile drawer & enquiry form handler
 */

document.addEventListener('DOMContentLoaded', () => {
  const config = window.SITE_CONFIG || {};

  // --------------------------------------------------
  // 1. DYNAMIC SERVICES GRID RENDERING
  // --------------------------------------------------
  const servicesGrid = document.getElementById('servicesGrid');

  function renderServices(filter = 'all') {
    if (!servicesGrid || !config.SERVICES) return;

    servicesGrid.innerHTML = '';
    const filteredServices = config.SERVICES.filter(service => {
      if (!service.enabled) return false;
      if (filter === 'all') return true;
      return service.category === filter;
    });

    if (filteredServices.length === 0) {
      servicesGrid.innerHTML = `<p class="text-center" style="grid-column: 1/-1; color: var(--clr-text-muted);">No services available in this category.</p>`;
      return;
    }

    filteredServices.forEach(service => {
      const waUrl = config.getWhatsAppUrl ? config.getWhatsAppUrl(service.title) : '#';

      const card = document.createElement('div');
      card.className = 'service-card';
      card.innerHTML = `
        <div class="service-thumb">
          <img src="${service.image}" alt="${service.title} - Raj Printers Samayapuram" loading="lazy">
          ${service.popular ? `<span class="popular-badge">Popular</span>` : ''}
        </div>
        <div class="service-content">
          <h3 class="service-title">${service.title}</h3>
          <p class="service-desc">${service.shortDesc}</p>
          <div class="service-card-footer">
            <a href="${waUrl}" target="_blank" class="btn btn-whatsapp btn-sm" aria-label="Enquire about ${service.title} on WhatsApp">
              <i class="fa-brands fa-whatsapp"></i> Enquiry
            </a>
            <a href="#contact" onclick="preselectService('${service.title}')" class="btn btn-outline btn-sm" aria-label="Get custom quote for ${service.title}">
              Quote
            </a>
          </div>
        </div>
      `;
      servicesGrid.appendChild(card);
    });
  }

  // Initial render
  renderServices('all');

  // Service Filter Buttons Event Handler
  const filterBtns = document.querySelectorAll('.tab-btn');
  filterBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
      filterBtns.forEach(b => b.classList.remove('active'));
      e.target.classList.add('active');
      const filterValue = e.target.getAttribute('data-filter');
      renderServices(filterValue);
    });
  });

  // Helper function to preselect service in contact form dropdown
  window.preselectService = function(serviceTitle) {
    const select = document.getElementById('printService');
    if (select) {
      for (let i = 0; i < select.options.length; i++) {
        if (select.options[i].text.includes(serviceTitle) || select.options[i].value.includes(serviceTitle)) {
          select.selectedIndex = i;
          break;
        }
      }
    }
  };

  // --------------------------------------------------
  // 2. CONTACT / ENQUIRY FORM WHATSAPP WORKFLOW
  // --------------------------------------------------
  const enquiryForm = document.getElementById('enquiryForm');
  if (enquiryForm) {
    enquiryForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('custName').value.trim();
      const phone = document.getElementById('custPhone').value.trim();
      const service = document.getElementById('printService').value;
      const qty = document.getElementById('printQty').value.trim();
      const msg = document.getElementById('custMsg').value.trim();

      if (!name || !phone) {
        alert('Please provide your name and phone number.');
        return;
      }

      // Build structured WhatsApp message
      let waMessage = `*NEW PRINT ENQUIRY - RAJ PRINTERS WEBSITE*\n\n`;
      waMessage += `*Name:* ${name}\n`;
      waMessage += `*Phone:* ${phone}\n`;
      waMessage += `*Service Needed:* ${service}\n`;
      if (qty) waMessage += `*Quantity:* ${qty}\n`;
      if (msg) waMessage += `*Details/Message:* ${msg}\n`;

      const targetWaNumber = config.WHATSAPP_NUMBER || "917010564303";
      const finalUrl = `https://wa.me/${targetWaNumber}?text=${encodeURIComponent(waMessage)}`;

      // Open WhatsApp in new window/app
      window.open(finalUrl, '_blank');
    });
  }

  // --------------------------------------------------
  // 3. MOBILE MENU & DRAWER TOGGLE LOGIC
  // --------------------------------------------------
  const mobileToggle = document.getElementById('mobileToggle');
  const mobileDrawer = document.getElementById('mobileDrawer');
  const drawerBackdrop = document.getElementById('drawerBackdrop');
  const mobileNavLinks = document.querySelectorAll('.mobile-nav-link');

  function openDrawer() {
    mobileDrawer?.classList.add('open');
    drawerBackdrop?.classList.add('open');
    mobileToggle?.setAttribute('aria-expanded', 'true');
  }

  function closeDrawer() {
    mobileDrawer?.classList.remove('open');
    drawerBackdrop?.classList.remove('open');
    mobileToggle?.setAttribute('aria-expanded', 'false');
  }

  if (mobileToggle) {
    mobileToggle.addEventListener('click', () => {
      const isOpen = mobileDrawer.classList.contains('open');
      if (isOpen) {
        closeDrawer();
      } else {
        openDrawer();
      }
    });
  }

  if (drawerBackdrop) {
    drawerBackdrop.addEventListener('click', closeDrawer);
  }

  mobileNavLinks.forEach(link => {
    link.addEventListener('click', closeDrawer);
  });

  // --------------------------------------------------
  // 4. HEADER STICKY SHADOW ON SCROLL & ACTIVE LINK
  // --------------------------------------------------
  const header = document.getElementById('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 20) {
      header?.classList.add('scrolled');
      if (header) header.style.boxShadow = '0 4px 20px rgba(15, 23, 42, 0.12)';
    } else {
      header?.classList.remove('scrolled');
      if (header) header.style.boxShadow = 'none';
    }

    // Active Navigation Highlight
    const sections = document.querySelectorAll('section[id]');
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
      const sectionHeight = current.offsetHeight;
      const sectionTop = current.offsetTop - 120;
      const sectionId = current.getAttribute('id');
      const navLink = document.querySelector(`.nav-menu a[href*=${sectionId}]`);

      if (navLink) {
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          navLink.classList.add('active');
        } else {
          navLink.classList.remove('active');
        }
      }
    });
  });

  // --------------------------------------------------
  // 5. UPDATE FOOTER YEAR
  // --------------------------------------------------
  const yearSpan = document.getElementById('year');
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
