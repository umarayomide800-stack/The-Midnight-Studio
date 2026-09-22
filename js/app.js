const menuToggle = document.querySelector('[data-menu-toggle]');
const navigation = document.querySelector('[data-navigation]');
const header = document.querySelector('[data-header]');
const yearElement = document.querySelector('[data-current-year]');
const revealElements = document.querySelectorAll('.reveal');
const bookingForm = document.querySelector('[data-booking-form]');
const requestDate = document.querySelector('[data-request-date]');
const toast = document.querySelector('[data-toast]');
const toastClose = document.querySelector('[data-toast-close]');

if (yearElement) {
  yearElement.textContent = new Date().getFullYear();
}

if (requestDate) {
  requestDate.min = new Date().toISOString().split('T')[0];
}

if (menuToggle && navigation) {
  menuToggle.addEventListener('click', () => {
    const isOpen = navigation.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  navigation.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      navigation.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

const closeToast = () => {
  if (toast) {
    toast.classList.remove('is-visible');
    toast.setAttribute('aria-hidden', 'true');
  }
};

if (bookingForm) {
  bookingForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const status = bookingForm.querySelector('[data-form-status]');

    if (!bookingForm.checkValidity()) {
      bookingForm.reportValidity();
      return;
    }

    if (status) {
      status.textContent = 'Your request is ready to review.';
    }

    bookingForm.reset();
    if (toast) {
      toast.classList.add('is-visible');
      toast.setAttribute('aria-hidden', 'false');
    }
  });
}

if (toastClose) {
  toastClose.addEventListener('click', closeToast);
}

const updateHeaderState = () => {
  if (header) {
    header.classList.toggle('is-scrolled', window.scrollY > 24);
  }
};

window.addEventListener('scroll', updateHeaderState, { passive: true });
updateHeaderState();

if ('IntersectionObserver' in window) {
  const revealObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.14 });

  revealElements.forEach((element) => revealObserver.observe(element));
} else {
  revealElements.forEach((element) => element.classList.add('is-visible'));
}
