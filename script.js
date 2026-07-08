const buttons = document.querySelectorAll(".tab-button");
const panels = document.querySelectorAll(".panel");

function switchTab(tabId) {
  buttons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.tab === tabId);
  });

  panels.forEach((panel) => {
    const isActive = panel.id === tabId;
    panel.classList.toggle("is-active", isActive);
    panel.hidden = !isActive;
  });
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    switchTab(button.dataset.tab);
  });
});
