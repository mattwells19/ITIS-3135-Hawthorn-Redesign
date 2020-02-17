var panels = Array.from(document.getElementsByClassName("panel-heading"));

panels.forEach((panel, index) => {
  var extra = document.getElementById(`collapse-1-${index}`);
  extra.style.height = "0px";
  panel.onclick = () => {
    if (extra.style.height === "0px") {
      extra.style.height = "16rem";
    } else {
      extra.style.height = "0px";
    }
  };
});
