$(function () {
  // had some troubles with URLs so I do some fancy string parsing
  // to make sure we load the data correctly
  var url = window.location.href;
  const urlParts = url.split("/");
  // Get data from testimonials file
  $.ajax({
    type: "get",
    url: url.replace(urlParts[urlParts.length - 1], "data/testimonials.json"),
    timeout: 10000,
    error: function (xhr, status, error) {
      alert("Error: " + xhr.status + " - " + error);
    },
    dataType: "json",
    success: function (data) {
      for (const test of data.testimonials) {
        // fill the testimonials section with each testimonial
        $("#testimonials").append(getTestimonialCard(test));
      }
    }
  });
})

// Take basic boilerplate testimonial and add necessary information
// to be added to the DOM
const getTestimonialCard = (testData) => {
  return `<!-- Beginning of testimonial card -->
    <div class="testimonial-card">
      <img src="${testData.image}" alt="Testimonial Image" height=300 />
      <div class="testimonial-card-content">
        <h3>${testData.name}</h3>
        <h4>${testData.year}, ${testData.major}</h4>
        <br />
        <strong>What they had to say:</strong>
        <p>
          ${testData.message}
        </p>
      </div>
    </div>
    <!-- End of testimonial card -->`
}