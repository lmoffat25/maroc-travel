main = () => {
    open_menu();
    handle_qa();
    smooth_scroll_and_offset();
}

smooth_scroll_and_offset = () => {
  const links = document.querySelectorAll('a[href^="#"]'); // Sélectionne tous les liens avec des ancres
  const offset = 100; // Décalage en pixels (arrêtera 100px avant l'élément)

  links.forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault(); // Empêche le comportement par défaut du lien
      const targetId = this.getAttribute('href').substring(1); // Récupère l'ID cible
      const targetElement = document.getElementById(targetId);

      if (targetElement) {
        const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
        const offsetPosition = elementPosition - offset;

        // Scroll avec comportement lisse
        window.scrollTo({
          top: offsetPosition,
          behavior: 'smooth'
        });
      }
    });
  });
}

handle_qa = () => {
  const faqQuestions = document.querySelectorAll('.faq-question');

  faqQuestions.forEach((question) => {
    const title = question.querySelector('.faq-question__title');

    // Ajoute un gestionnaire d'événement pour le clic
    title.addEventListener('click', () => {
      // Ajoute/retire la classe "is-open" pour afficher/masquer le contenu
      question.classList.toggle('is-open');

      // Si vous voulez fermer les autres questions, ajoutez ceci :
      faqQuestions.forEach((otherQuestion) => {
        if (otherQuestion !== question) {
          otherQuestion.classList.remove('is-open');
        }
      });
    });
  });
}


open_menu = () => {
// Sélectionne le bouton toggle
  const toggle = document.querySelector('.menu-navigation__toggle');
  
  // Sélectionne la navigation
  const menuNavigation = document.querySelector('.menu-navigation');
  
  if (toggle && menuNavigation) {
    toggle.addEventListener('click', () => {
      // Ajoute ou enlève la classe 'open'
      menuNavigation.classList.toggle('open');
    });
  } else {
    console.error('Élément .menu-navigation__toggle ou .menu-navigation non trouvé.');
  }
}


document.addEventListener('DOMContentLoaded', () => {
    main();
});