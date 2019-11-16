function status() {
    let openText = `<div class="d-flex d-lg-flex justify-content-center align-items-center justify-content-lg-center align-items-lg-center" style="height: 4em; margin-bottom: 16px; border-radius: 1em; background: rgb(13,212,11); background: linear-gradient(135deg, rgba(13,212,11,1) 0%, rgba(86,209,11,1) 100%);"><h3 style="color: #37434d;font-weight: bold;margin-bottom: 0px;">OPEN</h3></div>`;

    let closedText = `<div class="d-flex d-lg-flex justify-content-center align-items-center justify-content-lg-center align-items-lg-center" style="height: 4em; margin-bottom: 16px; border-radius: 1em; background: rgb(13,212,11); background: linear-gradient(135deg, rgba(13,212,11,1) 0%, rgba(86,209,11,1) 100%);"><h3 style="color: #37434d;font-weight: bold;margin-bottom: 0px;">CLOSED</h3></div>`;

    var lrc_open = true;
    var summer_hours = false; // If true, changes the OPEN/CLOSED sign to our summer hours M-F, 9-5.

    var date = new Date();
    var day_of_week = date.getDay(); // Sunday --> 0, Monday --> 1, ..., Saturday --> 6.
    var hour = date.getHours();
    var minute = date.getMinutes();

    if (summer_hours) {
        /* Close on Saturday and Sunday */
        if (day_of_week == 6 || day_of_week == 0) {
            lrc_open = false;
        }

        /* Close if not between 9-5 */
        if (hour < 9 || hour >= 17) {
            lrc_open = false;
        }
    } else {
        /* Close on Saturday */
        if (day_of_week == 6) {
            lrc_open = false;
        } else {
            /* 	Sunday   	3:00pm - 10:00pm
			Monday - Thursday   	1:00pm - 10:00pm
			Friday   	4:00pm - 10:00pm */
            if (day_of_week == 0) {
                if (hour < 15 || hour >= 22) {
                    lrc_open = false;
                }
            } else if (day_of_week == 5) {
                if (hour < 13 || hour >= 16) {
                    lrc_open = false;
                }
            } else if (hour < 13 || hour >= 22) {
                lrc_open = false;
            }
        }
    }
    console.log(date);

    console.log("hello");

    lrc_open = false;

    if (lrc_open) {
        document.getElementById(".open-close-sign").innerHTML = openText;
    } else {
        document.getElementById(".open-close-sign").innerHTML = closedText;
    }
}
