$(document).ready(function () {

	// Preload images and captions
	var images = [];
	var captions = [];
	$("li > a").each((i, val) => {
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

		// Do not animate if you clicked the same thumbnail again
		if ($("#image").attr("src") === images[i][0].src) return;

		$("#caption, p").fadeOut(2000, () => {
			$("#image").replaceWith(images[i]);
			$("#caption").text(captions[i]);
		})
			.fadeIn(2000)
			.delay(2000)
			.animate({
				fontSize: "1.5em",
			});
	};

	$("a:first").focus();

}); // end ready