$(function() {
  $(".panel-heading").each((index, panel) => {
    panel.onclick = () => $(`#collapse-1-${index}`).toggle("blind", 500);
  });
});
