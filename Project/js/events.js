$(function () {
    var url = window.location.href;
    const urlParts = url.split("/");
    $.ajax({
        type: "get",
        url: url.replace(urlParts[urlParts.length - 1], "data/events.json"),
        timeout: 10000,
        error: function (xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function (data) {
            for (const event of data.events) {
                $("#events").append(getEventContent(event));
            }
        }
    });
})

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