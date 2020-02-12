window.onload = () => {
  document.getElementById(
    "headerCampusResourcesBtn"
  ).onclick = handleCampusResourcesClick;
  document.getElementById("footerExtra").onclick = handleFooterClick;
  handleFooterClick();
};

var handleFooterClick = () => {
  var footerExtra = document.getElementById("collapseOne");
  if (footerExtra.className.includes(" expanded")) {
    footerExtra.className = footerExtra.className.replace(" expanded", "");
  } else {
    footerExtra.className += " expanded";
    setTimeout(() => window.scrollTo(0, document.body.scrollHeight), 200);
  }
};

const handleCampusResourcesClick = () => {
  var section = document.getElementById("headerCampusResourcesSection");
  if (section.style.display === "block") section.style.display = "none";
  else section.style.display = "block";
};
