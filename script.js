const menuToggle = document.getElementById('menuToggle');
const navLinks = document.getElementById('navLinks');
const contactDetails = {
  phone: '', // Example: '+639XXXXXXXXX'
  facebook: '', // Example: 'https://www.facebook.com/your.profile'
  instagram: '' // Example: 'https://www.instagram.com/your.profile'
};

const setMenuOpen = open => {
  navLinks.classList.toggle('open', open);
  menuToggle.setAttribute('aria-expanded', String(open));
};

menuToggle.addEventListener('click', () => {
  setMenuOpen(menuToggle.getAttribute('aria-expanded') !== 'true');
});
navLinks.querySelectorAll('a').forEach(link => link.addEventListener('click', () => setMenuOpen(false)));
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
    setMenuOpen(false);
    menuToggle.focus();
  }
});

const projectFilters = document.querySelectorAll('.filter-button');
const projectCards = document.querySelectorAll('.project-card[data-category]');
const projectStatus = document.getElementById('projectStatus');

projectFilters.forEach(button => {
  button.addEventListener('click', () => {
    const filter = button.dataset.filter;
    let visibleCount = 0;

    projectFilters.forEach(filterButton => {
      const isActive = filterButton === button;
      filterButton.classList.toggle('active', isActive);
      filterButton.setAttribute('aria-pressed', String(isActive));
    });

    projectCards.forEach(card => {
      const isVisible = filter === 'all' || card.dataset.category === filter;
      card.hidden = !isVisible;
      if (isVisible) visibleCount += 1;
    });

    projectStatus.textContent = `Showing ${visibleCount} project ${visibleCount === 1 ? 'concept' : 'concepts'}.`;
  });
});

const contactForm = document.getElementById('contactForm');
const contactStatus = document.getElementById('contactStatus');
const emailDraftLink = document.getElementById('emailDraftLink');

contactForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!contactForm.reportValidity()) return;

  const formData = new FormData(contactForm);
  const name = formData.get('name').toString().trim();
  const senderEmail = formData.get('email').toString().trim();
  const message = formData.get('message').toString().trim();
  const subject = `Portfolio inquiry from ${name}`;
  const body = `Name: ${name}\nEmail: ${senderEmail}\n\n${message}`;

  emailDraftLink.href = `mailto:arvynamucay@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  emailDraftLink.hidden = false;
  contactStatus.textContent = 'Your message is ready. Open the email draft to review and send it.';
});

const copyEmailButton = document.getElementById('copyEmail');
const copyStatus = document.getElementById('copyStatus');

copyEmailButton.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText('arvynamucay@gmail.com');
    copyStatus.textContent = 'Email address copied.';
  } catch {
    copyStatus.textContent = 'Clipboard access is unavailable. You can select the email address above.';
  }
});

const directContact = document.getElementById('directContact');
const contactSetupStatus = document.getElementById('contactSetupStatus');
const contactSetupErrors = [];
let hasContactOption = false;

const setSocialContact = (value, platform) => {
  if (!value.trim()) return;

  let url;
  try {
    url = new URL(value.trim());
  } catch {
    contactSetupErrors.push(`${platform} must be a complete HTTPS profile URL.`);
    return;
  }

  const allowedHosts = platform === 'Facebook' ? ['facebook.com', 'www.facebook.com', 'm.facebook.com'] : ['instagram.com', 'www.instagram.com'];
  if (url.protocol !== 'https:' || !allowedHosts.includes(url.hostname.toLowerCase())) {
    contactSetupErrors.push(`${platform} must use a public ${platform === 'Facebook' ? 'facebook.com' : 'instagram.com'} HTTPS profile URL.`);
    return;
  }

  const link = document.getElementById(`${platform.toLowerCase()}ContactLink`);
  link.href = url.href;
  link.hidden = false;
  hasContactOption = true;
};

if (contactDetails.phone.trim()) {
  const phoneHref = contactDetails.phone.replace(/[^\d+]/g, '');
  if (/^\+?\d{7,15}$/.test(phoneHref)) {
    document.getElementById('phoneContactLink').href = `tel:${phoneHref}`;
    document.getElementById('phoneContactLabel').textContent = contactDetails.phone.trim();
    document.getElementById('phoneContactLink').hidden = false;
    hasContactOption = true;
  } else {
    contactSetupErrors.push('Phone must include 7–15 digits and may start with +. Use an international format, such as +639XXXXXXXXX.');
  }
}

setSocialContact(contactDetails.facebook, 'Facebook');
setSocialContact(contactDetails.instagram, 'Instagram');

if (hasContactOption || contactSetupErrors.length) {
  directContact.hidden = false;
}
if (contactSetupErrors.length) {
  contactSetupStatus.textContent = contactSetupErrors.join(' ');
  console.error(`Portfolio contact setup: ${contactSetupErrors.join(' ')}`);
}

document.getElementById('year').textContent = new Date().getFullYear();