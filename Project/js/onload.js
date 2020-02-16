window.onload = () => {
  document.getElementById(
    "headerCampusResourcesBtn"
  ).onclick = handleCampusResourcesClick;
  document.getElementById("footerExtra").onclick = handleFooterClick;
  addBreadcrumbs();
  addNav();
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

var handleCampusResourcesClick = () => {
  var section = document.getElementById("headerCampusResourcesSection");
  if (section.style.display === "block") section.style.display = "none";
  else section.style.display = "block";
};

var getCurrentPageandSection = () => {
  var pageText = document.getElementsByClassName("page-header")[0].firstChild
    .nodeValue;
  var activePage;
  var activeSection;

  if (pageText === "Freshman Learning Community") {
    activePage = "Overview";
  } else if (pageText === "Creativity Lab") {
    activePage = "Creativity Lab";
    activeSection = "current";
  } else if (pageText === "Announcements and Events") {
    activePage = "Announcements/Events";
    activeSection = "current";
  } else if (pageText === "Tutoring") {
    activePage = "Tutoring";
    activeSection = "current";
  } else if (pageText === "How to Apply") {
    activePage = "How to Apply";
    activeSection = "prospective";
  } else if (pageText === "Testimonials") {
    activePage = "Testimonials";
    activeSection = "prospective";
  } else if (pageText === "Frequently Asked Questions") {
    activePage = "FAQ";
    activeSection = "prospective";
  } else if (pageText === "Parents") {
    activePage = "Parents";
  }
  return { activePage, activeSection };
};

var addNav = () => {
  var nav = document.getElementById("side-navbar");

  nav.innerHTML = `
    <h2 class="block-title">
      <a href="Overview.html" title="" class="active-trail">
        Freshman Learning Community
      </a>
    </h2>
    <ul>
      <a href="Overview.html"><li style="margin-top: 2px;">Overview</li></a>
      <li onclick="handleNavMenuClick('current')">
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
      <li onclick="handleNavMenuClick('prospective')">
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

  addActiveTab(nav);
};

var addBreadcrumbs = () => {
  var { activePage, activeSection } = getCurrentPageandSection();
  bread = document.getElementById("breadcrumbs");
  var homeCrumb = `<li><a class="active-trail href="Overview.html">Home</a></li>`;
  var lcCrumb = `<li><a class="active-trail href="Overview.html">Freshman Learning Community</a></li>`;
  var sectionCrumb = activeSection
    ? `<li class="active">${activeSection[0].toUpperCase() +
        activeSection.slice(1)} Students</li>`
    : "";
  var pageCrumb = `<li class="active">${activePage}</li>`;
  bread.innerHTML = `${homeCrumb + lcCrumb + sectionCrumb + pageCrumb}`;
};

var addActiveTab = nav => {
  var { activePage, activeSection } = getCurrentPageandSection();

  var tabs = Array.from(nav.getElementsByTagName("li"));
  var arrow = nav.getElementsByClassName(`menu-arrow ${activeSection}`)[0];

  tabs.forEach(element => {
    if (element.firstChild.nodeValue === activePage) {
      element.className += "active";
      if (activeSection) {
        var menu = element.parentNode.parentNode;
        menu.className += " open";
        arrow.style.transform = "rotate(-180deg)";
      }
    }
  });
};
