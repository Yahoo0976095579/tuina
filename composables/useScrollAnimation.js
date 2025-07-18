export const useScrollAnimation = () => {
  let gsap = null;
  let ScrollTrigger = null;

  // 初始化 GSAP 和 ScrollTrigger
  const initGSAP = async () => {
    if (!process.client) return;

    try {
      const { gsap: gsapModule } = await import("gsap");
      const { ScrollTrigger: scrollTriggerModule } = await import(
        "gsap/ScrollTrigger"
      );

      gsap = gsapModule;
      ScrollTrigger = scrollTriggerModule;

      gsap.registerPlugin(ScrollTrigger);

      // 關閉警告（僅開發環境）
      gsap.config({
        nullTargetWarn: false,
        trialWarn: false,
      });
    } catch (error) {
      console.warn("GSAP 載入失敗:", error);
    }
  };

  const initHeroAnimations = async () => {
    if (!process.client) return;

    await initGSAP();
    if (!gsap) return;

    const heroContent = document.querySelector(".hero-content");
    if (heroContent) {
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

  const initServicesAnimations = async () => {
    if (!process.client) return;

    await initGSAP();
    if (!gsap) return;

    // 等待 DOM 完全載入
    await new Promise((resolve) => {
      if (document.readyState === "complete") {
        resolve();
      } else {
        window.addEventListener("load", resolve, { once: true });
      }
    });

    // 額外等待確保元素已渲染
    await new Promise((resolve) => setTimeout(resolve, 100));

    // 檢查元素是否存在
    const serviceCards = document.querySelectorAll(".service-card");

    if (serviceCards.length > 0) {
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

  const initAboutAnimations = async () => {
    if (!process.client) return;

    await initGSAP();
    if (!gsap) return;

    const aboutContent = document.querySelector(".about-content");
    const aboutImage = document.querySelector(".about-image");

    if (aboutContent) {
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
    }

    if (aboutImage) {
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

  const initFloatingCircleAnimation = async () => {
    if (!process.client) return;

    await initGSAP();
    if (!gsap) return;

    // 等待 DOM 完全載入
    await new Promise((resolve) => {
      if (document.readyState === "complete") {
        resolve();
      } else {
        window.addEventListener("load", resolve, { once: true });
      }
    });

    // 額外等待確保元素已渲染
    await new Promise((resolve) => setTimeout(resolve, 100));

    const floatingCircles = document.querySelectorAll(".floating-circle");

    if (floatingCircles.length > 0) {
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
