$(function () {

  // Get data from events file
  $.ajax({
    type: "get",
    url: "/data/events.json",
    timeout: 10000,
    error: function (xhr, status, error) {
      alert("Error: " + xhr.status + " - " + error);
    },
    dataType: "json",
    success: function (data) {
      for (const event of data.events) {
        // Add each event
        $("#events").append(getEventContent(event));
      }
    }
  });

  // Add Calendar plugin
  $('#ImportantDatesCalendar').monthly({
    mode: 'event',
    xmlUrl: 'data/importantDates.xml'
  });

})

// Extract to a function to make things cleaner. Same thing from HTML just in string form
const getEventContent = (event) => {
  return `<div class="event-container">
    <div class="event-content">
      <h3>${event.event_name}</h3>
      <h4>${event.ra_names}</h4>
      <strong>Event Details:</strong>
      <p>
        ${event.event_details}
      </p>
    </div>
    <img src="${event.image}" alt="${event.event_name}" />
  </div>`
}