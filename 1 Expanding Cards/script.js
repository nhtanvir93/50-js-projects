const panels = document.querySelectorAll(".panel");

panels.forEach((panel) => {
  panel.addEventListener("click", (event) => {
    const oldActivePanel = document.querySelector(".panel.active");
    oldActivePanel.classList.remove("active");

    event.currentTarget.classList.add("active");
  });
});
