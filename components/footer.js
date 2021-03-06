$(function () {

        // This component is used to apply the footer to each page as it is the same everywhere
        // The customer stated that the footer has to be the same as per the Universities restrictions
        // which means I can't really modify any of the code here. I added some JQuery so that the 
        // expand footer works. Other than that this is what the school says has to be in there.

        document.getElementById("footer").innerHTML = `
<footer class="footer" id="accordian" style="margin-top: 100px">
<div class="panel panel-default">
    <!-- color bar for footer heading -->
    <div class="heading-wrapper">
        <div class="panel-heading container">
            <div class="panel-title">
                <a id="footerExtra" class="accordion-toggle collapsed" data-toggle="collapse" data-parent="#accordion"
                    href="#collapseOne">Additional Campus Resources</a>
            </div>
            <div class="pull-right">
                <a href="https://www.uncc.edu"><img
                        src="https://osds.uncc.edu/sites/all/themes/uncc_epsilon/logo.png"
                        alt="UNC Charlotte Logo" title="UNC Charlotte Logo"></a>
            </div>
        </div>
    </div> <!-- end heading wrapper -->
    <div id="collapseOne" class="container panel-body expanded">
        <!-- Footer left column -->
        <div class="col-sm-4" id="footer-campus-links">
            <h2>Campus Links</h2>
            <ul>
                <li><a href="https://emergency.uncc.edu" target="_blank"
                        title="Alerts and Advisories at UNC Charlotte">Alerts</a></li>
                <li><a href="https://jobs.uncc.edu" title="Jobs at UNC Charlotte">Jobs</a></li>
                <li><a href="https://www.uncc.edu/makeagift" title="Make a gift to UNC Charlotte">Make a
                        Gift</a></li>
                <li><a href="https://maps.uncc.edu" title="Directions to UNC Charlotte">Maps /
                        Directions</a>
                </li>
                <li><a href="https://accessibility.uncc.edu"
                        title="Accessibility resources at UNC Charlotte" style="vertical-align: top;"><i
                            class="fa fa-wheelchair" aria-hidden="true"></i>
                        Accessibility</a></li>
            </ul>
        </div>
        <!-- Footer center column -->
        <div class="col-sm-4" id="footer-links">
            <h2>Resources</h2>
            <ul>
                <li><a href="https://www.uncc.edu/gateway/alumni-friends" target="_blank"
                        title="Alumni and Friends"> Alumni &amp; Friends</a></li>
                <li><a href="https://www.uncc.edu/gateway/faculty-staff" title="Faculty and Staff">Faculty
                        &amp;
                        Staff</a></li>
                <li><a href="https://www.uncc.edu/gateway/prospective-students"
                        title="Prospective Students">Prospective Students</a></li>
                <li><a href="https://www.uncc.edu/gateway/community" title="Community">Community</a></li>
                <li><a href="https://www.uncc.edu/gateway/current-students" title="Current Students">
                        Current
                        Students</a></li>
                <li><a href="https://www.uncc.edu/gateway/parents-family" title="Parents and Family">
                        Parents
                        and Family</a></li>
            </ul>
        </div>
        <!-- Footer right column -->
        <div class="col-sm-4" id="footer-social">
            <h2>Stay In Touch</h2>
            <div class="social-container">
                <a href="//www.facebook.com/UNCCharlotte" target="_blank"><span class="fa fa-facebook"
                        title="Facebook"></span><span class="sr-only">facebook</span></a>
                <a href="//www.instagram.com/unccharlotte/" target="_blank"><span class="fa fa-instagram"
                        title="Instagram"></span><span class="sr-only">instagram</span></a>
                <a href="//www.flickr.com/photos/stakeyourclaim/sets/" target="_blank"><span
                        class="fa fa-flickr" title="Flickr"></span><span class="sr-only">flickr</span></a>
                <a href="//www.linkedin.com/company/unc-charlotte" target="_blank"><span
                        class="fa fa-linkedin" title="LinkedIn"></span><span
                        class="sr-only">linkedin</span></a>
                <a href="//twitter.com/UNCCharlotte" target="_blank"><span class="fa fa-twitter"
                        title="Twitter"></span><span class="sr-only">twitter</span></a>
                <a href="//www.youtube.com/user/unccharlottevideo" target="_blank"><span
                        class="fa fa-youtube-play" title="YouTube"></span><span
                        class="sr-only">youtube</span></a>
                <a href="//maps.uncc.edu" target="_blank"><span class="fa fa-map-marker"
                        title="Maps"></span><span class="sr-only">maps</span></a><br />
                <p class="small"><a href="https://www.uncc.edu" title="www.uncc.edu">The University of North
                        Carolina at Charlotte</a><br />9201 University City Blvd, Charlotte, NC
                    28223-0001<br />704-687-8622</p>
                <em class="small">&copy; 2020 UNC Charlotte | All Rights Reserved <br /> <a
                        href="https://www.uncc.edu/contact" title="Contact Us">Contact Us</a> | <a
                        href="https://legal.uncc.edu/termsofuse" title="Terms of Use">Terms of Use</a> | <a
                        href="https://legal.uncc.edu/policies" title="University Policy"> University
                        Policies</a></em>
            </div>
        </div>
</div>
<!--/#footer-container -->
</footer>
`;

        var handleFooterClick = () => {
                $("#collapseOne").toggle("blind", 500);
        };

        document.getElementById("footerExtra").onclick = handleFooterClick;

        // Start the footer open and close after load.
        // This allows the href="#collapseOne" to scroll the page correctly.
        handleFooterClick();
});
