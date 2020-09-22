let form = document.querySelector("form");
let input = document.getElementById("inputGuess");
let resultat = document.getElementById("resultat");

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let inputGuess = input.value;
    resultat.textContent = "Vous avez tapé " + inputGuess;
    input.value = "";
})