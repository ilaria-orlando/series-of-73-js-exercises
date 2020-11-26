/* becode/javascript
 *
 * /06-dom/12-change-event-input-two/script.js - 6.12: événement change (2)
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let field = document.getElementById("pass-one");
    let validity = document.getElementById("validity");
    let input;
    let numbercheck;

    field.addEventListener("input", function () {
        input = field.value
        numbercheck = input.match(/(\d)/g);

        if (input.length >= 8 && numbercheck.length >= 2){
            validity.innerHTML = "Ok";
        }else{
            validity.innerHTML = "Not Ok";
        }

    });

})();
