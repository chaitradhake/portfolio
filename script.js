document.addEventListener('DOMContentLoaded', () => {
  // 1. Entrance Animations on Scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('opacity-100', 'translate-y-0');
        entry.target.classList.remove('opacity-0', 'translate-y-10');
      }
    });
  }, observerOptions);

  document.querySelectorAll('section').forEach(section => {
    if (!section.classList.contains('hero-section')) {
      section.style.transition = 'all 1s ease';
      section.classList.add('opacity-0', 'translate-y-10');
      // Add custom styles for initial animation state if not already handled
      section.style.opacity = '0';
      section.style.transform = 'translateY(40px)';
      observer.observe(section);
    }
  });

  // Inject animation helper styles dynamically
  const style = document.createElement('style');
  style.innerHTML = `
    .opacity-100 { opacity: 1 !important; }
    .translate-y-0 { transform: translateY(0) !important; }
    .opacity-0 { opacity: 0; }
    .translate-y-10 { transform: translateY(40px); }
  `;
  document.head.appendChild(style);

  // 2. Navigation Link Highlighting on Scroll (Throttled using requestAnimationFrame)
  let isScrolling = false;
  window.addEventListener('scroll', () => {
    if (!isScrolling) {
      window.requestAnimationFrame(() => {
        const sections = ['about', 'skills', 'experience', 'projects', 'certificates', 'education', 'contact'];
        const navLinks = document.querySelectorAll('.nav-links a');
        
        let current = 'about';
        sections.forEach(sectionId => {
          const section = document.getElementById(sectionId);
          if (section) {
            const sectionTop = section.offsetTop;
            if (window.pageYOffset >= sectionTop - 150) {
              current = sectionId;
            }
          }
        });

        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
          }
        });
        isScrolling = false;
      });
      isScrolling = true;
    }
  });

  // 3. Contact Form Interaction Simulation
  const contactForm = document.getElementById('contact-form');
  const formCard = document.querySelector('.contact-form-card');
  
  if (contactForm && formCard) {
    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();
      
      const nameVal = document.getElementById('name').value.trim();
      const emailVal = document.getElementById('email').value.trim();
      const messageVal = document.getElementById('message').value.trim();
      
      if (!nameVal || !emailVal || !messageVal) {
        alert('Please fill in all required fields.');
        return;
      }
        await sendToTelegram(nameVal, emailVal, messageVal);

      // Display Success Message
      formCard.innerHTML = `
        <div class="success-message">
          <span class="material-symbols-outlined success-icon" style="font-size: 64px; color: var(--color-secondary); margin-bottom: 16px;">check_circle</span>
          <h3 style="font-family: var(--font-headline); font-size: 24px; color: var(--color-primary); margin-bottom: 8px;">Message Sent Successfully!</h3>
          <p style="font-family: var(--font-body); font-size: 15px; color: var(--color-on-surface-variant);">Thank you for reaching out, Chaitra will get back to you soon.</p>
        </div>
      `;
    });
  }
});


async function sendToTelegram(name, email, message) {
  const response = await fetch("/api/contact", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      name: name,
      email: email,
      message: message,
    }),
  });

  return response.ok;
}