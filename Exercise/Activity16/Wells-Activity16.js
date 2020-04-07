$(document).ready(function () {
    const url =
        "https://api.flickr.com/services/feeds/photos_public.gne?id=82407828@N07&format=json&jsoncallback=?&tags=vectacorpbuilding";

    $.getJSON(url, function (data) {
        $("#new_building").html("");
        $.each(data.items, function (i, item) {
            $("#new_building").append(`
                <a href=${item.media.m} data-title="${item.title}" data-lightbox="buildings">
                    <img src=${item.media.m} alt="${item.title}" Picture" />
                </a>
            `);
        });
    });
});