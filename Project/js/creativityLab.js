$(function () {
    // URL for student work photos from Flickr
    const url =
        "https://api.flickr.com/services/feeds/photos_public.gne?id=187976205@N06&format=json&jsoncallback=?";

    // Get the images
    $.getJSON(url, function (data) {
        $("#slideshow-content").html(""); // clear contents just to be sure
        $.each(data.items, function (i, item) {
            // add images to section
            $("#slideshow-content").append(`<img alt="${item.title}" src=${item.media.m} width=600 />`);
        });

        // This adds the plugin to the page. We have to load the script AFTER we add the images or it will not
        // implement the slideshow correctly.
        $("#prints-section").append(
            `<!-- JQuery Fotorama Plugin -->
        <!-- https://fotorama.io/ -->
        <link href="https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.css" rel="stylesheet">
        <script src="https://cdnjs.cloudflare.com/ajax/libs/fotorama/4.6.4/fotorama.js"></script>
        <!-- End plugin -->`
        );
    });
})