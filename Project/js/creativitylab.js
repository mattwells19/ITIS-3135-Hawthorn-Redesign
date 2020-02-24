var images = [
  "images/CreativityLab/Prints/print1.jpg",
  "images/CreativityLab/Prints/print2.jpg",
  "images/CreativityLab/Prints/print3.jpg"
];

var handleLeftClick = () => {
  var img_index = images.indexOf($("#slideshow-img").attr("src"));

  if (img_index === 0) img_index = images.length - 1;
  else img_index = img_index - 1;

  $("#slideshow-img").attr("src", images[img_index]);
};

var handleRightClick = () => {
  var img_index = images.indexOf($("#slideshow-img").attr("src"));

  if (img_index === images.length - 1) img_index = 0;
  else img_index = img_index + 1;

  $("#slideshow-img").attr("src", images[img_index]);
};

document.getElementById("slideshow-left").onclick = handleLeftClick;
document.getElementById("slideshow-right").onclick = handleRightClick;
