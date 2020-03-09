$(function () {

    // preload the image for each link
    // set up the event handlers for each link
    $("a").each((i, val) => {
        $('<img/>')[0].src = val.href
        $(val).click(handleLinkClick);
    });

    // Click event callback
    function handleLinkClick(evt) {
        evt.preventDefault();
        $("#image").attr("src", evt.target.href);
        $("#caption").text(evt.target.title);
    };

    $("a:eq(1)").focus()

}); // end ready