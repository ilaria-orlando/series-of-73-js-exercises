/* becode/javascript
 *
 * /01-base/04-asv-confirm/script.js - 1.4: ASV avec confirmation
 *
 * coded by leny@BeCode
 * started at 26/10/2018
 */

// NOTE: don't focus on the existing code structure for now.
// You will have time to focus on it later.

(function() {

    let age = prompt("What is your age?");
    let ageconfirm = confirm("Are you " + age + " years old?");
    if (!ageconfirm){
        age = prompt("What is your age?");
    }
    console.log("age");
    console.log(age);

    let gender = prompt("What is your gender?");
    let genderconfirm = confirm("Are you a " + gender + "?");
    if (!genderconfirm){
        gender = prompt("What is your gender");
    }
    console.log("gender");
    console.log(gender);

    let town = prompt("In which town do you live?");
    let townconfirm = confirm("Do you live in " + town + "?");
    if (!townconfirm){
        town = prompt("In which town do you life?");
    }
    console.log("town");
    console.log(town);

    let result = age + gender + town;
    let resultconfirm = confirm("Are you a " + age + " years old " + gender + " living in " + town + " ?");
    if (resultconfirm){
        alert("Thank you!");
    }
    else{
        location.reload();
    }




})();