import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

export function initAnimations() {
  // Initialize animations immediately
  initScrollAnimations();
  initStackedCardsAnimation();
  initHeaderScrollEffect();
}

function initScrollAnimations() {
  const fadeUpElements = document.querySelectorAll('.animate-on-scroll.fade-up');
  const fadeInElements = document.querySelectorAll('.animate-on-scroll.fade-in');
  const slideUpElements = document.querySelectorAll('.animate-on-scroll.slide-up');
  
  // Batch animations for better performance
  gsap.set([...fadeUpElements, ...fadeInElements, ...slideUpElements], { opacity: 0 });
  
  fadeUpElements.forEach(element => {
    gsap.fromTo(element, 
      { opacity: 0, y: 50 }, 
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: element,
          start: 'top 80%',
          toggleActions: 'play none none none'
        }
      }
    );
  });
  
  fadeInElements.forEach(element => {
    gsap.to(element, {
      opacity: 1,
      duration: 1,
      scrollTrigger: {
        trigger: element,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  });
  
  slideUpElements.forEach(element => {
    gsap.fromTo(element, 
      { opacity: 0, y: 100 }, 
      {
        opacity: 1,
        y: 0,
        duration: 0.8,
        scrollTrigger: {
          trigger: element,
          start: 'top 85%',
          toggleActions: 'play none none none'
        }
      }
    );
  });
}

function initStackedCardsAnimation() {
  const projectCards = document.querySelectorAll('.project-card');
  
  if (projectCards.length === 0) return;
  
  gsap.set(projectCards, { y: 50, opacity: 0 });
  
  projectCards.forEach((card, index) => {
    const translateY = index * -10;
    const delay = index * 0.1;
    
    ScrollTrigger.create({
      trigger: card,
      start: 'top 85%',
      onEnter: () => {
        gsap.to(card, {
          y: translateY,
          opacity: 1,
          duration: 0.6,
          delay: delay,
          ease: 'power2.out'
        });
      },
      once: true
    });
  });
}

function initHeaderScrollEffect() {
  const header = document.querySelector('.header');
  
  if (!header) return;
  
  ScrollTrigger.create({
    start: 'top -80',
    onUpdate: self => {
      requestAnimationFrame(() => {
        if (self.direction === -1) {
          header.classList.remove('hidden');
        } else if (self.direction === 1 && self.scrollY > 150) {
          header.classList.add('hidden');
        }
      });
    }
  });
  
  ScrollTrigger.create({
    start: 'top -80',
    end: 99999,
    onUpdate: self => {
      requestAnimationFrame(() => {
        if (self.scrollY > 50) {
          header.classList.add('scrolled');
        } else {
          header.classList.remove('scrolled');
        }
      });
    }
  });
}