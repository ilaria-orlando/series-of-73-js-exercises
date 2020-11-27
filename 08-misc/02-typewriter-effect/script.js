/* becode/javascript
 *
 * /07-misc/02-typewriter-effect/script.js - 7.2: effet machine à écrire
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let target = document.getElementById("target");
    let characters = target.innerText;
    let letters = [...characters];
    let interval = 250;


    typewriter = () => {
        target.innerText = " ";
        letters.forEach( (letter, index) => {
            setTimeout(() =>{
                target.insertAdjacentText("beforeend", letter)}, index * interval[i]);
         //interval = setInterval(target.insertAdjacentText("beforeend", letter), r)   ;
        })
    }

    typewriter();

})();
