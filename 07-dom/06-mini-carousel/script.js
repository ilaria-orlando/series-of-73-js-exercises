/* becode/javascript
 *
 * /06-dom/06-mini-carousel/script.js - 6.6: mini carousel
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let button = document.getElementById("next");
    let img = document.getElementsByTagName("img") [0];
    let i = 0;
    let newSrc;

    var gallery= [
        "../../_shared/img/bell.svg",
        "../../_shared/img/clock.svg",
        "../../_shared/img/compass.svg",
        "../../_shared/img/lemon.svg",
        "../../_shared/img/map.svg",
    ];


    button.addEventListener("click", function () {
        i ++;
        newSrc = gallery[i];
        img.src = newSrc;
        if (i === gallery.length){
            i = 0;
            img.src = gallery[0];
        }
    });

})();
