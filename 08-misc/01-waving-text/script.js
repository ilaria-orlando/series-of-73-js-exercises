/* becode/javascript
 *
 * /07-misc/01-waving-text/script.js - 7.1: effet vague
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let target = document.getElementById("target");
    let characters = target.innerText;
    let letters = characters.split("");
    let fontSize = [];
    let totalText = [];

    for(i = 0; i < 10; i++){
        let size = Math.floor(Math.random() * 50);
        if (size < 10){
            size = size + Math.floor(Math.random() * 30);
        }
        if (size === 0){
            size = size + 8;
        }
        fontSize.push(size + "px");
    }

    inWaves = () => {
        target.innerText = " ";
        letters.forEach( (letter) => {
            let i = Math.floor(Math.random () * 10);
            let span = '<span style = "fontsize:' + fontSize[i] + ';">' + letter + '</span>'
            totalText.push(span);
        });
    }

    inWaves();

    console.log(totalText);

    target.innerHTML = totalText.join("");



})();
