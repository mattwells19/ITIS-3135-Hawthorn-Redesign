$(function () {
  // I know I can just use toggle, but leaving it branched out like this
  // because of the style that needs to be applied to the arrows.
  function handleNavMenuClick(menu) {
    if ($(`.${menu}-menu.open`).length > 0) {
      $(`.${menu}-menu`).removeClass("open");
      $(`.menu-arrow.${menu}`).css("transform", "rotate(0deg)");
    } else {
      $(`.${menu}-menu`).addClass("open");
      $(`.menu-arrow.${menu}`).css("transform", "rotate(-180deg)");
    }
  }

  var nav = document.getElementById("side-navbar");

  nav.innerHTML = `
    <h2 class="block-title">
      <a href="Overview.html" title="" class="active-trail">
        Freshman Learning Community
      </a>
    </h2>
    <ul>
      <a href="Overview.html"><li style="margin-top: 2px;">Overview</li></a>
      <li id="current-nav-menu">
        Current Students
        <img
          class="menu-arrow current"
          src="icons/down-arrow.svg"
          alt="menu arrow"
        />
      </li>
      <ul class="nav-sub-menu current-menu">
        <a href="CreativityLab.html"
          ><li>Creativity Lab</li></a
        >
        <a href="AnnouncementsEvents.html"
          ><li>Announcements/Events</li></a
        >
        <a href="Tutoring.html"
          ><li>Tutoring</li></a
        >
      </ul>
      <li id="prospective-nav-menu">
        Prospective Students
        <img
          class="menu-arrow prospective"
          src="icons/down-arrow.svg"
          alt="menu arrow"
        />
      </li>
      <ul class="nav-sub-menu prospective-menu">
        <a href="HowToApply.html"><li>How to Apply</li></a>
        <a href="Testimonials.html"><li>Testimonials</li></a>
        <a href="FAQ.html"><li>FAQ</li></a>
      </ul>
      <a href="Parents.html"><li>Parents</li></a>
    </ul>
`;

  $("#prospective-nav-menu").click(() => handleNavMenuClick("prospective"));
  $("#current-nav-menu").click(() => handleNavMenuClick("current"));


})