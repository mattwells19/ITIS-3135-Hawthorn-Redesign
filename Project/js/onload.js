// Dynamically add breadcrumbs and activeTab so that we don't have to in HTML

window.onload = () => {
  addBreadcrumbs();
  addActiveTab();
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

var addBreadcrumbs = () => {
  var { activePage, activeSection } = getCurrentPageandSection();
  bread = document.getElementById("breadcrumbs");
  var homeCrumb = `<li><a class="active-trail" href="Overview.html">Home</a></li>`;
  var lcCrumb = `<li><a class="active-trail" href="Overview.html">Freshman Learning Community</a></li>`;
  var sectionCrumb = activeSection
    ? `<li class="active">${activeSection[0].toUpperCase() +
    activeSection.slice(1)} Students</li>`
    : "";
  var pageCrumb = `<li class="active">${activePage}</li>`;
  bread.innerHTML = `${homeCrumb + lcCrumb + sectionCrumb + pageCrumb}`;
};

var addActiveTab = () => {
  var { activePage, activeSection } = getCurrentPageandSection();

  $("#side-navbar li").each((i, item) => {
    if ($(item).first().text() === activePage) {
      $(item).addClass("active");
      var activeUl = $(item).closest("ul");
      activeUl.addClass("open");
      activeUl.prev().css("border-left", "solid 5px #004525");
      $(`.menu-arrow.${activeSection}`).css("transform", "rotate(-180deg)");
    }
  })
};
