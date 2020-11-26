/* becode/javascript
 *
 * /06-dom/11-change-event-input-one/script.js - 6.11: événement change (1)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let field = document.getElementById("pass-one");
    let characters;
    let count = document.getElementById("counter");
    field.maxLength = "10";

    field.addEventListener("keyup", function () {
        characters = field.value.length;
        count.innerHTML = `${characters}/10`;

    });
    // your code here

})();
