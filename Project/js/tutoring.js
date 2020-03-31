$(function() {
  $(".tutor-hours").click(event => {
    $(event.currentTarget).toggleClass("open");
  });

  $(".about-tutoring").on("click", "a", (e) => {
    e.preventDefault();
    $(e.target.hash).animatescroll({scrollSpeed:100,easing:'easeOutQuint'});
  });
});
