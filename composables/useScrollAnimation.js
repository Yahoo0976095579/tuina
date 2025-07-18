import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

export const useScrollAnimation = () => {
  if (process.client) {
    gsap.registerPlugin(ScrollTrigger);
  }

  const initHeroAnimations = () => {
    if (process.client) {
      gsap.fromTo(
        ".hero-content",
        {
          opacity: 0,
          y: 50,
        },
        {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: "power2.out",
          delay: 0.5,
        }
      );
    }
  };

  const initServicesAnimations = () => {
    if (process.client) {
      gsap.fromTo(
        ".service-card",
        {
          opacity: 0,
          y: 60,
          scale: 0.8,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          stagger: 0.3,
          ease: "power3.out",
          scrollTrigger: {
            trigger: "#services",
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  };

  const initAboutAnimations = () => {
    if (process.client) {
      gsap.fromTo(
        ".about-content",
        {
          opacity: 0,
          x: -50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      gsap.fromTo(
        ".about-image",
        {
          opacity: 0,
          x: 50,
        },
        {
          opacity: 1,
          x: 0,
          duration: 1,
          ease: "power2.out",
          scrollTrigger: {
            trigger: "#about",
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );
    }
  };

  const initFloatingCircleAnimation = () => {
    if (process.client) {
      gsap.to(".floating-circle", {
        y: -20,
        duration: 3,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 0.5,
      });
    }
  };

  return {
    initHeroAnimations,
    initServicesAnimations,
    initAboutAnimations,
    initFloatingCircleAnimation,
  };
};