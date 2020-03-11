$(function () {


    document.getElementById("header").innerHTML = `
<div id="skip-link">
<a href="#main-content" class="element-invisible element-focusable">Skip to main content</a>
</div>
<header id="header-nav" role="banner" class="navbar navbar-default">
<div class="container">
    <div id="branding-bar" class="navbar-header">
        <div id="top_header_menu" class="navbar-collapse collapse">
            <div id="print_inner">
                <ul class="menu nav">
                    <li class="first leaf">
                        <a href="https://www.uncc.edu/gateway/alumni-friends" title="">Alumni &amp; Friends</a>
                    </li>
                    <li class="leaf">
                        <a href="https://www.uncc.edu/gateway/community" title="">Community</a>
                    </li>
                    <li class="leaf">
                        <a href="https://www.uncc.edu/gateway/current-students" title="">Current Students</a>
                    </li>
                    <li class="leaf">
                        <a href="https://www.uncc.edu/gateway/faculty-staff" title="">Faculty &amp; Staff</a>
                    </li>
                    <li class="leaf">
                        <a href="https://www.uncc.edu/gateway/parents-family" title="">Parents &amp; Family</a>
                    </li>
                    <li class="last leaf"><a href="https://www.uncc.edu/gateway/prospective-students"
                            title="">Prospective Students</a></li>
                </ul>
            </div>
        </div>
        <div class="search dropdown">
            <button id="headerCampusResourcesBtn" class="btn btn-primary dropdown-toggle" type="button" aria-label="Dropdown"
                data-toggle="dropdown">
                Campus Resources <span class="glyphicon glyphicon-plus-sign"></span></button>
            <div id="headerCampusResourcesSection" class="dropdown-menu uncc-dropdown-menu">
                <div class="container-fluid">
                    <!-- Icons -->
                    <div class="container">
                        <ul class="nav-icons nav-list list-inline">
                            <li>
                                <h3><a href="https://my.uncc.edu"><i class="fa fa-lock" aria-hidden="true"></i>
                                        My UNC Charlotte</a></h3>
                            </li>
                            <li>
                                <h3><a href="https://directory.uncc.edu"><i class="fa fa-users"
                                            aria-hidden="true"></i>Directory</a></h3>
                            </li>
                            <li>
                                <h3><a href="https://campusevents.uncc.edu"><i class="fa fa-calendar"
                                            aria-hidden="true"></i>Campus Events</a></h3>
                            </li>
                            <li>
                                <h3><a href="https://library.uncc.edu"><i class="fa fa-book"
                                            aria-hidden="true"></i>Library</a></h3>
                            </li>
                        </ul>
                        <ul class="campus-nav nav-list list-inline">
                            <li>
                                <h3>Prospective Students</h3>
                                <ul>
                                    <li><a href="https://www.uncc.edu/landing/about-us">About UNC Charlotte</a>
                                    </li>
                                    <li><a href="https://www.uncc.edu/landing/campus-life">Campus Life</a></li>
                                    <li><a href="https://admissions.uncc.edu">Admissions</a></li>
                                    <li><a href="https://gradadmissions.uncc.edu">Graduate Admissions</a></li>
                                </ul>
                            </li>
                            <li>
                                <h3>Faculty and Staff</h3>
                                <ul>
                                    <li><a href="https://hr.uncc.edu">Human Resources</a></li>
                                    <li><a href="https://aux.uncc.edu">Auxiliary Services</a></li>
                                    <li><a href="https://inside.uncc.edu">Inside UNC Charlotte</a></li>
                                    <li><a href="https://provost.uncc.edu">Academic Affairs</a></li>
                                </ul>
                            </li>
                            <li>
                                <h3>Current Students</h3>
                                <ul>
                                    <li><a href="http://www.charlotte49ers.com">Athletics</a></li>
                                    <li><a href="https://finaid.uncc.edu">Financial Aid</a></li>
                                    <li><a href="https://advising.uncc.edu">Advising</a></li>
                                    <li><a href="https://studenthealth.uncc.edu">Student Health Center</a></li>
                                </ul>
                            </li>
                            <li>
                                <h3>Alumni and Friends</h3>
                                <ul>
                                    <li><a href="https://alumni.uncc.edu/">Alumni Association</a></li>
                                    <li><a href="https://advancement.uncc.edu">Advancement</a></li>
                                    <li><a href="https://foundation.uncc.edu">Foundation</a></li>
                                    <li><a href="https://www.uncc.edu/makeagift">Make a Gift</a></li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                    <!-- /.dropdown-menu -->
                </div>
                <!-- /.container-fluid -->
            </div>
            <form
                onsubmit="var searchbox = document.getElementById('utility-search-input'); if (searchbox.value == 'Keyword / Search' || searchbox.value == '') { searchbox.value=''; searchbox.focus(); return false; } var new_q = 'site:' + window.location.hostname + ' ' + searchbox.value; searchbox.value=new_q;"
                class="navbar-form navbar-right" id="utility-search" role="search"
                action="https://search.uncc.edu" method="GET">
                <div class="input-group stylish-input-group">
                    <input type="text" aria-label="Site Search" id="utility-search-input"
                        onclick="if (this.value == 'Keyword / Search') { this.value = ''; }"
                        class="form-control" placeholder="site search" name="q">
                    <span class="input-group-addon">
                        <button type="submit" aria-label="Search" class="btn btn-default">
                            <span class="glyphicon glyphicon-search" title="Search" aria-hidden="true"></span>
                        </button>
                    </span>
                </div>
            </form>
        </div> <!-- /.search -->
    </div>
</div>
<div id="header-gradient">
    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-collapse">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
    </button>
    <div class="container site-title">

        <a class="logo pull-left" href="https://www.uncc.edu" title="UNC Charlotte Home">
            <img src="https://osds.uncc.edu/sites/all/themes/uncc_epsilon/logo.png" alt="UNC Charlotte logo" />
        </a>
        <!-- Print site title -->
        <div id="title-with-subbrand">
            <div><a class="name navbar-brand with-subbrand" href="https://osds.uncc.edu" title="Home">The Office of Student
                    Development and Success</a></div><a class="subbrand" href="https://engr.uncc.edu"
                title="The William States Lee College of Engineering">The William States Lee College of
                Engineering</a>
        </div> <!-- Print social media icons -->
        <div id="header-social-icons" class="social-icons">
            <ul class="social-icon-list">
                <li><a href="https://www.facebook.com/UNCCEngageME/" title="Facebook" target="_blank"><span
                            class="fa fa-facebook aria-hidden=" true"></span><span
                            class="sr-only">Facebook</span></a></li>
                <li><a href="https://twitter.com/UNCC_EngageMe" title="Twitter" target="_blank"><span
                            class="fa fa-twitter aria-hidden=" true"></span><span
                            class="sr-only">Twitter</span></a></li>
            </ul>
        </div>
    </div>
    <div id="navigation">
        <!-- Full width border -->
        <div class="container">
            <div class="navbar-collapse collapse" id="main-nav-collapse">
                <nav role="navigation">
                    <ul class="menu nav navbar-nav">
                        <li class="first expanded dropdown"><a href="https://osds.uncc.edu/engage-me/3" data-target="#"
                                class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Engage ME!
                                <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li class="first leaf"><a href="https://osds.uncc.edu/engage-me/about-engage-me">About Engage ME!</a>
                                </li>
                                <li class="leaf"><a
                                        href="https://osds.uncc.edu/engage-me/first-year/useful-links-freshmen-engineering-students"
                                        title="Useful Links for Freshman Engineering Students">Useful Links for
                                        Freshman Engineering Students</a></li>
                                <li class="leaf"><a href="https://osds.uncc.edu/engage-me/resources-support"
                                        title="Resources and Support">Resources and Support</a></li>
                                <li class="leaf"><a href="https://osds.uncc.edu/engage-me/student-success-strategies">Student Success
                                        Strategies</a></li>
                                <li class="last leaf"><a href="https://osds.uncc.edu/directory-list/engage-me%21" title="">Contact
                                        Us</a></li>
                            </ul>
                        </li>
                        <li class="expanded active-trail active dropdown"><a href="https://osds.uncc.edu/freshman-learning-community"
                                title="" class="active-trail dropdown-toggle" data-target="#"
                                data-toggle="dropdown" data-hover="dropdown">Freshman Learning Community <span
                                    class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li class="first leaf active-trail active active"><a
                                        href="Overview.html"
                                        class="active-trail active-trail active">Overview</a></li>
                                <li class="collapsed"><a
                                        href="Overview.html">Current
                                        Students</a></li>
                                <li class="collapsed"><a
                                        href="Overview.html">Prospective
                                        Students</a></li>
                                <li class="leaf"><a href="Overview.html">For Parents</a>
                                </li>
                                <li class="leaf"><a href="https://osds.uncc.edu/freshman-learning-community/forms">Forms</a></li>
                                <li class="last leaf"><a href="https://osds.uncc.edu/directory-list/freshman-learning-community"
                                        title="">Contact Us</a></li>
                            </ul>
                        </li>
                        <li class="expanded dropdown"><a href="https://osds.uncc.edu/leadership-academy" title="" data-target="#"
                                class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">Leadership
                                Academy <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li class="first collapsed"><a href="https://osds.uncc.edu/leadership-academy/about">About</a></li>
                                <li class="collapsed"><a href="https://osds.uncc.edu/leadership-academy/industry-support">Industry
                                        Support</a></li>
                                <li class="collapsed"><a
                                        href="https://osds.uncc.edu/leadership-academy/testimonials">Testimonials</a></li>
                                <li class="collapsed"><a href="https://osds.uncc.edu/leadership-academy/apply-academy">Apply to the
                                        Academy</a></li>
                                <li class="last leaf"><a href="https://osds.uncc.edu/directory-list/leadership-academy"
                                        title="">Contact Us</a></li>
                            </ul>
                        </li>
                        <li class="expanded dropdown"><a href="https://osds.uncc.edu/maps-program" title="" data-target="#"
                                class="dropdown-toggle" data-toggle="dropdown" data-hover="dropdown">MAPS
                                Program <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li class="first leaf"><a href="https://osds.uncc.edu/maps-program/mission" title="">Mission</a></li>
                                <li class="leaf"><a href="https://osds.uncc.edu/maps-program/transition-coaching" title="">Transition
                                        Coaching</a></li>
                                <li class="leaf"><a href="https://osds.uncc.edu/maps-program/supplemental-instruction">Peer Assisted
                                        Learning</a></li>
                                <li class="leaf"><a href="https://osds.uncc.edu/maps-program/leadership-opportunities">Leadership
                                        Opportunities</a></li>
                                <li class="leaf"><a href="https://osds.uncc.edu/maps-program/student-resources">Student Resources</a>
                                </li>
                                <li class="leaf"><a href="https://osds.uncc.edu/maps-program/student-organizations" title="">Student
                                        Organizations</a></li>
                                <li class="leaf"><a href="https://osds.uncc.edu/maps-program/maps-program-brochure">MAPS Program
                                        Brochure</a></li>
                                <li class="last leaf"><a href="https://osds.uncc.edu/directory-list/maps-program" title="">Contact
                                        Us</a></li>
                            </ul>
                        </li>
                        <li class="expanded dropdown"><a href="https://osds.uncc.edu/we-engage"
                                title="Program for Women in Engineering, Engineering Technology, and Construction Management"
                                data-target="#" class="dropdown-toggle" data-toggle="dropdown"
                                data-hover="dropdown">WE Engage! <span class="caret"></span></a>
                            <ul class="dropdown-menu">
                                <li class="first last leaf"><a href="https://osds.uncc.edu/we-engage/about-we-engage"
                                        title="About the Women in Engineering, Engineering Technology, and Construction Management Program">About
                                        WE Engage!</a></li>
                            </ul>
                        </li>
                        <li class="last leaf"><a href="https://osds.uncc.edu/directory-box/faculty-and-staff" title="">Faculty and
                                Staff</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </div>
</div>
</header>
`;

    var handleCampusResourcesClick = () => {
        $(`#headerCampusResourcesSection`).toggle("blind", 500);
    };

    document.getElementById(
        "headerCampusResourcesBtn"
    ).onclick = handleCampusResourcesClick;


});
