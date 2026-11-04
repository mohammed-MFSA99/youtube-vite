document.addEventListener("DOMContentLoaded", () => {
  const removeButtons = document.querySelectorAll(".remove");

  removeButtons.forEach((item) => {
    item.addEventListener("click", (event) => {
      event.preventDefault();
      event.stopPropagation();
      const card = item.closest(".card");
      if (card) {
        card.classList.add("removing");
        setTimeout(() => {
          card.remove();
        }, 350);
      }
    });
  });
});
