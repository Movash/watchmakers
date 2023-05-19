(() => {
  const mobileMenu = document.querySelector('[js-mob-menu]');
  const openMenuBtn = document.querySelector('[js-open-menu]');
  const closeMenuBtn = document.querySelector('[js-close-menu]');

  const toggleMenu = () => {
    const isMenuOpen =
      openMenuBtn.getAttribute('aria-expanded') === 'true' || false;
    openMenuBtn.setAttribute('aria-expanded', !isMenuOpen);
    mobileMenu.classList.toggle('is-open');
  };

  openMenuBtn.addEventListener('click', toggleMenu);
  closeMenuBtn.addEventListener('click', toggleMenu);

  // Close the mobile menu on wider screens if the device orientation changes
  window.matchMedia('(min-width: 768px)').addEventListener('change', e => {
    if (!e.matches) return;
    mobileMenu.classList.remove('is-open');
    openMenuBtn.setAttribute('aria-expanded', false);
  });

  // Add event listener for all anchor links on the page
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', event => {
      // Check if the mobile menu is open
      if (mobileMenu.classList.contains('is-open')) {
        // Close the mobile menu
        toggleMenu();
      }
    });
  });
})();
