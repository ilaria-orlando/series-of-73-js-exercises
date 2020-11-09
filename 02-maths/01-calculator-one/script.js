/* becode/javascript
 *
 * /02-maths/01-calculator-one/script.js - 2.1: calculatrice
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    // to get the value of an input: document.getElementById("element-id").value
    var one = document.getElementById("op-one");
    var two = document.getElementById("op-two");



    document.getElementById("addition").addEventListener("click", function() {
        var a = parseFloat(one.value);
        var b = parseFloat(two.value);
        alert(a + b);
    });

    document.getElementById("substraction").addEventListener("click", function() {
        var a = parseFloat(one.value);
        var b = parseFloat(two.value);
        alert(a - b);

    });

    document.getElementById("multiplication").addEventListener("click", function() {
        var a = parseFloat(one.value);
        var b = parseFloat(two.value);
        alert(a * b);
    });

    document.getElementById("division").addEventListener("click", function() {
        var a = parseFloat(one.value);
        var b = parseFloat(two.value);
        alert(a / b);
    });
})();
