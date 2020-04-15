$(function () {
  var url = window.location.href;
  const urlParts = url.split("/");
  $.ajax({
    type: "get",
    url: url.replace(urlParts[urlParts.length - 1], "data/tutors.json"),
    timeout: 10000,
    error: function (xhr, status, error) {
      alert("Error: " + xhr.status + " - " + error);
    },
    dataType: "json",
    success: function (data) {
      $("#tutored-classes").html("");
      $("#tutors").html("")
      for (const tutor of data.tutors) {
        $("#tutors").append(getTutorCard(tutor));
        $("#tutored-classes").append(getClassItem(tutor));
      }



      // Handles the opening and closing of the hours tab for each tutor
      $(".tutor-hours").click(event => {
        $(event.currentTarget).toggleClass("open");
      });

      // Uses the animatescroll JQuery plugin when a tutor link is clicked
      $(".about-tutoring").on("click", "li a", (e) => {
        e.preventDefault();
        $(e.target.hash).animatescroll({ scrollSpeed: 100, easing: 'easeOutQuint' });
      });
    }
  });
});

const getClassItem = (tutorData) => {
  return `<li><a href="#${tutorData.id}">${tutorData.class}</a></li>`;
}

const getTutorCard = (tutorData) => {
  return `<!-- Beginning of tutor card -->
<div class="tutor-card" id="${tutorData.id}">
<img src="${tutorData.image}" alt="${tutorData.class} tutor" height=300 />
<div class="tutor-card-text-container">
  <h3>${tutorData.name}</h3>
  <h4>${tutorData.class}</h4>
  <br />
  <strong>About the tutor:</strong>
  <p>
    ${tutorData.bio}
  </p>
</div>
<div class="tutor-hours">
  <img src="icons/down-arrow.svg" alt="show-menu" />
  <div class="hours-content">
    <h2 class="block-title">Hours and Locations</h2>
    <div class="operation-hours">
      <ul class="days">
        <li>Monday</li>
        <li>Tuesday</li>
        <li>Wednesday</li>
        <li>Thursday</li>
        <li>Friday</li>
        <li>Saturday</li>
        <li>Sunday</li>
      </ul>
      <ul class="times">
        <li>${tutorData.hours_location.monday.hours}</li>
        <li>${tutorData.hours_location.tuesday.hours}</li>
        <li>${tutorData.hours_location.wednesday.hours}</li>
        <li>${tutorData.hours_location.thursday.hours}</li>
        <li>${tutorData.hours_location.friday.hours}</li>
        <li>${tutorData.hours_location.saturday.hours}</li>
        <li>${tutorData.hours_location.sunday.hours}</li>
      </ul>
      <ul class="location">
      <li>${tutorData.hours_location.monday.location}</li>
      <li>${tutorData.hours_location.tuesday.location}</li>
      <li>${tutorData.hours_location.wednesday.location}</li>
      <li>${tutorData.hours_location.thursday.location}</li>
      <li>${tutorData.hours_location.friday.location}</li>
      <li>${tutorData.hours_location.saturday.location}</li>
      <li>${tutorData.hours_location.sunday.location}</li>
      </ul>
    </div>
  </div>
</div>
</div>
<!-- End of tutor card -->`
}
