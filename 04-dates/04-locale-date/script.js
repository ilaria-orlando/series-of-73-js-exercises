/* becode/javascript
 *
 * /04-dates/04-locale-date/script.js - 4.4: date textuelle
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    // to change the content of a tag: document.getElementById("element-id").innerHTML = "new-value"
    let date = new Date;
    let today =  ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let curDay = today[date.getDay()];
    let curDate = date.getDate();
    let month = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let curMonth = month[date.getMonth()];
    let year = date.getFullYear();

    document.getElementById("target").innerHTML = "Today's date is " + curDay + " " + curDate + " " + curMonth + " " + year;


})();
