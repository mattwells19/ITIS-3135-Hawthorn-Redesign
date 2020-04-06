$(function () {
  // Handles the opening and closing of the hours tab for each tutor
  $(".tutor-hours").click(event => {
    $(event.currentTarget).toggleClass("open");
  });

  // Uses the animatescroll JQuery plugin when a tutor link is clicked
  $(".about-tutoring").on("click", "li a", (e) => {
    e.preventDefault();
    $(e.target.hash).animatescroll({ scrollSpeed: 100, easing: 'easeOutQuint' });
  });
});
