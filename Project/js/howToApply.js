$(function () {
    // had some troubles with URLs so I do some fancy string parsing
    // to make sure we load the data correctly
    var url = window.location.href;
    const urlParts = url.split("/");
    // Get data from tourEvents file
    $.ajax({
        type: "get",
        url: url.replace(urlParts[urlParts.length - 1], "data/tourEvents.json"),
        timeout: 10000,
        error: function (xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function (data) {
            for (const event of data.tourEvents) {
                $("#tourEvents").append(getEventContent(event));
            }
        }
    });

    // Using the JQuery UI Button and adding the btn1 class
    $(".custom_button").button({
        classes: { "ui-button": "btn1" }
    })
})

// The number of events and dates for each event varies
// so we use some loops to make our lives easier at the expense
// of readability
const getEventContent = (event) => {
    // Events are apart of an unordered list so that's why we start
    // and end with a <li> tag. Dates are a part of their own unordered
    // list
    var content = `<li>${event.name}<ul>`;

    for (date of event.dates) {
        content += `<li>${date}</li>`
    }

    content += `</ul></li>`
    return content;
}