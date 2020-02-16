var panels = Array.from(document.getElementsByClassName("panel-heading"));

panels.forEach((panel, index) => {
  var extra = document.getElementById(`collapse-1-${index}`);
  extra.style.maxHeight = "0px";
  panel.onclick = () => {
    if (extra.style.maxHeight === "0px") {
      extra.style.maxHeight = "500px";
    } else {
      extra.style.maxHeight = "0px";
    }
  };
});
