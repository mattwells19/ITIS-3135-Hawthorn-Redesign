function handleHoursClick(element) {
  if (element.className.includes("open")) {
    element.className = element.className.replace(" open", "");
  } else {
    element.className += " open";
  }
}
