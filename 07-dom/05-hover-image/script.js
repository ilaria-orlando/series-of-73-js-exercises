/* becode/javascript
 *
 * /06-dom/05-hover-image/script.js - 6.5: survol d'image
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {
    let imgTag = document.getElementsByTagName("img")[0];
    let oriSrc = imgTag.getAttribute("src");
    let hover = imgTag.getAttribute("data-hover");

    console.log(oriSrc);

    imgTag.addEventListener("mouseover", function () {
        imgTag.src = hover;
    });

    imgTag.addEventListener("mouseleave", function () {
        imgTag.src = oriSrc;
    });

})();
