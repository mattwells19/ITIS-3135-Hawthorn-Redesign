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

  // Because the navbar is consistent througout each webpage, we can inject the HTML
  // from here. That way if a change is needed, we can make the change here and have 
  // it applied everywhere.

  nav.innerHTML = `
    <h2 class="block-title">
      <a href="index.html" title="" class="active-trail">
        Freshman Learning Community
      </a>
    </h2>
    <ul>
      <a href="index.html"><li>Overview</li></a>
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
    <!-- Validation Links -->
    <div style="text-align: center;">
      <a href="https://validator.w3.org/check?uri=referer">Validate HTML</a>
      <a href="https://jigsaw.w3.org/css-validator/check/referer">Validate CSS</a>
    </div>
`;

  $("#prospective-nav-menu").click(() => handleNavMenuClick("prospective"));
  $("#current-nav-menu").click(() => handleNavMenuClick("current"));


})