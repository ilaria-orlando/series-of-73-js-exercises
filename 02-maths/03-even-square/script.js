/* becode/javascript
 *
 * /02-maths/03-even-square/script.js - 2.3: carrés des pairs
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let numbers =['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21'];


    document.getElementById("run").addEventListener("click", function() {
            let randomnumber = numbers [Math.floor(Math.random()*numbers.length)];
            let randomsquare = Math.sqrt(randomnumber);
            alert("Square root of " + randomnumber + " is " + randomsquare);


    });

})();
