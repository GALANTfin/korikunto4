document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".open-modal-btn");
  const preloadImages = (sources) => {
    sources.forEach((src) => {
      const image = new Image();
      image.src = src;
    });
  };

  const backgroundSources = (document.body.dataset.preloadImages || "")
    .split(",")
    .map((src) => src.trim())
    .filter(Boolean);

  if (backgroundSources.length > 0) {
    preloadImages(backgroundSources);
  }

  const preloadModalImages = () => {
    const sources = Array.from(document.querySelectorAll(".modal img"))
      .map((img) => img.getAttribute("src"))
      .filter(Boolean);

    preloadImages(sources);
  };

  if ("requestIdleCallback" in window) {
    window.requestIdleCallback(preloadModalImages, { timeout: 2000 });
  } else {
    window.setTimeout(preloadModalImages, 1000);
  }

  buttons.forEach(btn => {
    const modalId = btn.getAttribute("data-modal");
    const modal = document.getElementById(modalId);
    const close = modal.querySelector(".close");

    btn.addEventListener("click", () => {
      modal.removeAttribute("hidden");
      modal.style.display = "block";
      document.body.style.overflow = "hidden";
    });

    close.addEventListener("click", () => {
      modal.style.display = "none";
      modal.setAttribute("hidden", "");
      document.body.style.overflow = "auto";
    });

modal.addEventListener("click", (e) => {
      if (!modal.querySelector(".modal-content").contains(e.target)) {
        modal.style.display = "none";
        modal.setAttribute("hidden", "");
        document.body.style.overflow = "auto";
      }
    });
  });
});
