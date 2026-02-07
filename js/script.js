document.addEventListener("DOMContentLoaded", function() {
  const buttons = document.querySelectorAll(".open-modal-btn");

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

    window.addEventListener("click", (e) => {
      if (e.target === modal) {
        modal.style.display = "none";
        modal.setAttribute("hidden", "");
        document.body.style.overflow = "auto";
      }
    });
  });
});
