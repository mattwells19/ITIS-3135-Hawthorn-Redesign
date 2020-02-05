function handleNavMenuClick(menu) {
  if ($(`.${menu}-menu.open`).length > 0) {
    $(`.${menu}-menu`).removeClass("open");
    $(`.menu-arrow.${menu}`).css("transform", "rotate(0deg)");
  } else {
    $(`.${menu}-menu`).addClass("open");
    $(`.menu-arrow.${menu}`).css("transform", "rotate(-180deg)");
  }
}
