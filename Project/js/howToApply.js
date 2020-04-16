$(function () {
    var url = window.location.href;
    const urlParts = url.split("/");
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

const getEventContent = (event) => {
    var content = `<li>${event.name}<ul>`;

    for (date of event.dates) {
        content += `<li>${date}</li>`
    }

    content += `</ul></li>`
    return content;
}