// Not modifying the FAQ page at all. Just adding some JQuery so that it works
// as expected
$(function () {
  $(".panel-heading").each((index, panel) => {
    panel.onclick = () => $(`#collapse-1-${index}`).toggle("blind", 500);
  });
});
