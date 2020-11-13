/* becode/javascript
 *
 * /06-objects/01-generate-object/script.js - 6.1: générer un object
 *
 * coded by leny@BeCode
 * started at 08/05/2019
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(() => {
    let ilaria = {
        lastName : "Orlando",
        firstName : "Ilaria",
        Age : 29,
        City : "Ghent",
        Country : "Belgium",
    }


    document.getElementById("run").addEventListener("click", function(){
        console.log(`My name is ${ilaria.firstName} ${ilaria.lastName}, I'm ${ilaria.Age} years old and I live in ${ilaria.City}, ${ilaria.Country}.`);
    });

})();
