var UM_search_bar =
    '<div style="background-color: #000; text-align: right; min-height: 24px; padding: 10px 15px 6px 15px;" id="topbanner">' +
    '<a href="http://www.umass.edu"><img class="img-responsive UM_logo" src="assets/img/UM.png" alt="" /></a>' +
    '<form style="margin: -4px 0 0 0; padding: 0" onsubmit="if (this.q.value==\'Search UMass Amherst\') return false;" name="gs" method="get" action="http://googlebox.oit.umass.edu/search">' +
    "<div>" +
    '<label for="q" style="display:inline-block;">' +
    '<input type="text" onblur="if (this.value==\'\') this.value=\'Search UMass Amherst\'" onfocus="if (this.value==\'Search UMass Amherst\') this.value=\'\'" value="Search UMass Amherst" id="q" name="q" size="18" style="display:inline-block;font-size: 9px; font-family: Verdana, sans-serif; padding-left: 2px;margin:0 5px 0 0;">' +
    "</label>" +
    '<input type="submit" style="display:inline-block; vertical-align:center; font-size: 9px; height: 19px;margin-top:0; font-family: Verdana, sans-serif;" value="Go" name="sa">' +
    '<input type="hidden" value="default_collection" name="site">' +
    '<input type="hidden" value="default_frontend" name="client">' +
    '<input type="hidden" value="default_frontend" name="proxystylesheet">' +
    '<input type="hidden" value="xml_no_dtd" name="output">' +
    "</div>" +
    "</form>" +
    "</div>";

document.write(UM_search_bar);
