$(function () {

    // preload the image for each link
    // set up the event handlers for each link
    var images = [];
    var captions = [];
    $("a").each((i, val) => {
        images.push($('<img>').attr({
            src: val.href,
            id: "image",
        }));
        captions.push(val.title);
        $(val).click((evt) => handleLinkClick(evt, i));
    });

    // Click event callback
    function handleLinkClick(evt, i) {
        evt.preventDefault();
        $("#image").replaceWith(images[i]);
        $("#caption").text(captions[i]);
    };

    $("a:eq(1)").focus()

}); // end ready