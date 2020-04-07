$(document).ready(function () {
    $.ajax({
        type: "get",
        url: "team.json",
        beforeSend: function () {
            $("#team").html("Loading...");
        },
        timeout: 10000,
        error: function (xhr, status, error) {
            alert("Error: " + xhr.status + " - " + error);
        },
        dataType: "json",
        success: function (data) {
            $("#team").html("");
            for (const member of data.teammembers) {
                $("#team").append(`
                    <img src=${member.image} alt="${member.first_name} Picture" />
                    <h2>${member.first_name}</h2>
                    <h3>${member.title}</h3>
                    <p>${member.bio}</p>
                `);
            }
        }
    });
});