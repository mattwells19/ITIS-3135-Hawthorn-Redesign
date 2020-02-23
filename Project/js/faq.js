var panels = Array.from(document.getElementsByClassName("panel-heading"));

panels.forEach((panel, index) => {
  panel.onclick = () => $(`#collapse-1-${index}`).toggle("blind", 500);
});
