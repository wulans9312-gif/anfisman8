document.addEventListener('DOMContentLoaded', () => {

  // Navigation Logic
  const btnEksplorasi = document.getElementById('btnEksplorasi');
  const btnDaftarPustaka = document.getElementById('btnDaftarPustaka');
  const btnKembaliHero = document.getElementById('btnKembaliHero');

  const petaPembelajaran = document.getElementById('petaPembelajaran');
  const daftarPustaka = document.getElementById('daftarPustaka');

  btnEksplorasi.addEventListener('click', () => {
    showSection(petaPembelajaran);
  });

  btnDaftarPustaka.addEventListener('click', () => {
    showSection(daftarPustaka);
  });

  btnKembaliHero.addEventListener('click', () => {
    hideSection(daftarPustaka);
    hideSection(petaPembelajaran);
  });

  function showSection(section) {
    section.classList.remove('hidden');
    section.classList.remove('zoom-out-active');
    section.classList.add('zoom-in-active');
    section.scrollIntoView({ behavior: 'smooth' });
  }

  function hideSection(section) {
    section.classList.remove('zoom-in-active');
    section.classList.add('zoom-out-active');
    setTimeout(() => {
      section.classList.add('hidden');
    }, 300);
  }

  // 9 Module Navigation
  const moduleBtns = document.querySelectorAll('.module-btn');
  const moduleContents = document.querySelectorAll('.module-content');

  moduleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetId = btn.getAttribute('data-target');

      moduleBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      moduleContents.forEach(content => {
        if (content.id === targetId) {
          content.classList.remove('hidden');
          content.classList.remove('zoom-out-active');
          content.classList.add('zoom-in-active');
        } else {
          content.classList.add('hidden');
        }
      });
    });
  });

  // Accordion & Nested Button Smooth Expand/Collapse Logic
  const accordionHeads = document.querySelectorAll('.accordion-head');
  accordionHeads.forEach(head => {
    head.addEventListener('click', () => {
      const body = head.nextElementSibling;
      toggleSmooth(body);
    });
  });

  // Nested Buttons Click Handlers
  const nestButtons = document.querySelectorAll('[data-nest]');
  nestButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      const nestId = btn.getAttribute('data-nest');
      const targetElement = document.getElementById(nestId);

      if (targetElement) {
        const siblingDescs = btn.parentElement.parentElement.querySelectorAll('.nest-desc');
        siblingDescs.forEach(desc => {
          if (desc.id !== nestId) {
            desc.classList.add('hidden');
          }
        });

        toggleSmooth(targetElement);
      }
    });
  });

  // Helper function for Smooth Zoom In / Zoom Out Toggle
  function toggleSmooth(element) {
    if (element.classList.contains('hidden')) {
      element.classList.remove('hidden');
      element.classList.remove('zoom-out-active');
      element.classList.add('zoom-in-active');
    } else {
      element.classList.remove('zoom-in-active');
      element.classList.add('zoom-out-active');
      setTimeout(() => {
        element.classList.add('hidden');
      }, 300);
    }
  }

  // Summary & Suggestion Button
  const btnSimpulanSaran = document.getElementById('btnSimpulanSaran');
  const boxSimpulanSaran = document.getElementById('boxSimpulanSaran');

  btnSimpulanSaran.addEventListener('click', () => {
    toggleSmooth(boxSimpulanSaran);
  });

});