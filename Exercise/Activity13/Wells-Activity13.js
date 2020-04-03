$(document).ready(function () {

    const url = "https://webpages.uncc.edu/mwells21/Exercise/Activity13";
    function handleNavClick(title) {
        $.getJSON(`${url}/json_files/${title}.json`, (resp_data) => {
            const data = resp_data.speakers[0];
            $("main h1").text(data.title);
            $("main h2").text(data.month);
            $("main h3").text(data.speaker);
            $("main img").attr("src", data.image);
            $("main p").text(data.text);
        });
    }

    $.each($("nav a"), function (i, item) {
        $(item).on("click", () => handleNavClick(item.title));
    })
}); // end ready