document.addEventListener("DOMContentLoaded", () => {
  const header = document.getElementById("siteHeader");
  const navToggle = document.querySelector(".nav-toggle");
  const navGroup = document.getElementById("primaryNav");
  const revealItems = document.querySelectorAll(".reveal");
  const counterNodes = document.querySelectorAll("[data-counter]");

  const setScrolledState = () => {
    if (!header) {
      return;
    }

    header.classList.toggle("is-scrolled", window.scrollY > 24);
  };

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.18,
      rootMargin: "0px 0px -8% 0px",
    },
  );

  revealItems.forEach((item) => revealObserver.observe(item));

  const countUp = (element, target) => {
    const duration = 1400;
    const start = performance.now();
    const initial = 0;

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const value = Math.floor(initial + (target - initial) * eased);
      element.textContent =
        target >= 1000 ? value.toLocaleString() : String(value);

      if (progress < 1) {
        requestAnimationFrame(tick);
      }
    };

    requestAnimationFrame(tick);
  };

  const counterObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        const target = Number(entry.target.getAttribute("data-counter"));
        if (Number.isFinite(target) && !entry.target.dataset.counted) {
          entry.target.dataset.counted = "true";
          countUp(entry.target, target);
        }

        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.5,
    },
  );

  counterNodes.forEach((node) => counterObserver.observe(node));

  if (navToggle && navGroup) {
    navToggle.addEventListener("click", () => {
      const isOpen = navGroup.classList.toggle("is-open");
      navToggle.setAttribute("aria-expanded", String(isOpen));
    });

    navGroup.querySelectorAll("a").forEach((link) => {
      link.addEventListener("click", () => {
        if (window.innerWidth <= 820) {
          navGroup.classList.remove("is-open");
          navToggle.setAttribute("aria-expanded", "false");
        }
      });
    });
  }

  window.addEventListener("scroll", setScrolledState, { passive: true });
  window.addEventListener("load", setScrolledState, { once: true });
  setScrolledState();

  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (event) => {
      const targetId = anchor.getAttribute("href");
      if (!targetId || targetId === "#") {
        return;
      }

      const target = document.querySelector(targetId);
      if (!target) {
        return;
      }

      event.preventDefault();
      const offset = header ? header.getBoundingClientRect().height + 24 : 24;
      const top = window.scrollY + target.getBoundingClientRect().top - offset;
      window.scrollTo({ top, behavior: "smooth" });
    });
  });
});
