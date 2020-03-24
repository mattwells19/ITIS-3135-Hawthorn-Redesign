/**
 * Library: https://github.com/daneden/animate.css
 * Function provided from link as well
 */
function animateCSS(element, animationName, options, callback) {
  const node = document.querySelector(element)
  node.classList.add('animated', animationName, options)

  function handleAnimationEnd() {
      node.classList.remove('animated', animationName, options)
      node.removeEventListener('animationend', handleAnimationEnd)

      if (typeof callback === 'function') callback()
  }

  node.addEventListener('animationend', handleAnimationEnd)
}

var images = [
  "images/CreativityLab/Prints/3DPrint1.jpg",
  "images/CreativityLab/Prints/3DPrint2.jpg",
  "images/CreativityLab/Prints/3DPrint_IronMan.jpg",
  "images/CreativityLab/Prints/3DPrint_Shark.jpg",
  "images/CreativityLab/Prints/Laser1.jpg",
  "images/CreativityLab/Prints/Laser2.jpg"
];

var imageElements = [];

var handleLeftClick = () => {
  var img_index = images.indexOf($("#slideshow-img").attr("src"));

  if (img_index === 0) img_index = images.length - 1;
  else img_index = img_index - 1;

  animateCSS("#slideshow-img", "slideOutLeft", "faster", () => {
    $("#slideshow-img").replaceWith(imageElements[img_index]);
    animateCSS("#slideshow-img", "slideInRight", "faster");
  });
};

var handleRightClick = () => {
  var img_index = images.indexOf($("#slideshow-img").attr("src"));

  if (img_index === images.length - 1) img_index = 0;
  else img_index = img_index + 1;

  animateCSS("#slideshow-img", "slideOutRight", "faster", () => {
    $("#slideshow-img").replaceWith(imageElements[img_index]);
    animateCSS("#slideshow-img", "slideInLeft", "faster");
  });

};

$(function () {
  images.forEach(img => {
    imageElements.push(
      $("<img>").attr({
        src: img,
        id: "slideshow-img",
        alt: "Slideshow Image",
        width: "600px"
      })
    );
  });

  $("#slideshow-left").click(handleLeftClick);
  $("#slideshow-right").click(handleRightClick);
});
