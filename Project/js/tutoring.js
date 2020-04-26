$(function () {

  // had some troubles with URLs so I do some fancy string parsing
  // to make sure we load the data correctly
  var url = window.location.href;
  const urlParts = url.split("/");

  // Get data from tutors file
  $.ajax({
    type: "get",
    url: url.replace(urlParts[urlParts.length - 1], "data/tutors.json"),
    timeout: 10000,
    error: function (xhr, status, error) {
      alert("Error: " + xhr.status + " - " + error);
    },
    dataType: "json",
    success: function (data) {
      for (const tutor of data.tutors) {
        // tutors section will have a card added for each tutor
        $("#tutors").append(getTutorCard(tutor));
        // tutored classes is the section that has links for each tutored class
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

// Take boilerplate tutor card and add necessary information
// I realize I could use a loop for hours and location but 
// considering the number of days won't change (there will always
// be 7 days) there isn't much harm in leaving it like this
const getTutorCard = (tutorData) => {
  return `<!-- Beginning of tutor card -->
<div class="tutor-card" id="${tutorData.id}">
  <img src="${tutorData.image}" alt="${tutorData.class} tutor" height=300 />
  <div class="tutor-card-text-container">
    <h3>${tutorData.name}</h3>
    <h4>${tutorData.class}</h4>
    <div>
      <strong>Email:</strong>
      <a href="mailto:${tutorData.email}">
        ${tutorData.email}
      </a>
    </div>
    <div>
      <strong>About the tutor:</strong>
      <p>
        ${tutorData.bio}
      </p>
    </div>
  </div>
  <div class="tutor-hours">
    <span id="arrow">&#8249;</span>
    <table>
      <caption>Hours and Locations</caption>
      <thead>
        <tr>
          <th scope="col" id="day_of_week">Day</th>
          <th scope="col" id="work_hours">Hours</th>
          <th scope="col" id="work_locations">Location</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td headers="day_of_week">Monday</td>
          <td headers="work_hours">${tutorData.hours_location.monday.hours}</td>
          <td headers="work_locations">${tutorData.hours_location.monday.location}</td>
        </tr>
        <tr>
          <td headers="day_of_week">Tuesday</td>
          <td headers="work_hours">${tutorData.hours_location.tuesday.hours}</td>
          <td headers="work_locations">${tutorData.hours_location.tuesday.location}</td>
        </tr>
        <tr>
          <td headers="day_of_week">Wednesday</td>
          <td headers="work_hours">${tutorData.hours_location.wednesday.hours}</td>
          <td headers="work_locations">${tutorData.hours_location.wednesday.location}</td>
        </tr>
        <tr>
          <td headers="day_of_week">Thursday</td>
          <td headers="work_hours">${tutorData.hours_location.thursday.hours}</td>
          <td headers="work_locations">${tutorData.hours_location.thursday.location}</td>
        </tr>
        <tr>
          <td headers="day_of_week">Friday</td>
          <td headers="work_hours">${tutorData.hours_location.friday.hours}</td>
          <td headers="work_locations">${tutorData.hours_location.friday.location}</td>
        </tr>
      </tbody>
    </table>
  </div>
</div>
<!-- End of tutor card -->`
}
