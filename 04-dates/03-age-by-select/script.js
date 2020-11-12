/* becode/javascript
 *
 * /04-dates/03-age-by-select/script.js - 4.3: calculateur d'âge
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

document.getElementById("run").addEventListener("click", function(){
    let year = parseInt(document.getElementById("dob-year").value);
    let date = new Date();
    let curyear = date.getFullYear();
    let age = curyear - year;

    document.getElementById("target").innerHTML = "Are You " + age + " years old?";


});
