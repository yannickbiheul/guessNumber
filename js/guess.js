let form = document.querySelector("form");
let input = document.getElementById("inputGuess");
let resultat = document.getElementById("resultat");
let boutonRestart = document.getElementById("restart");
let essai = 1;
let random = Math.floor(Math.random() * 100);

form.addEventListener("submit", function(e) {
    e.preventDefault();
    let inputGuess = Number(input.value);
    input.value = "";
    if (inputGuess === random) {
        resultat.style.color = "var(--green)";
        resultat.textContent = "Essai n° " + essai + " : " + inputGuess + " ! Bravo, vous avez trouvé !";
        boutonRestart.style.opacity = "1";
        boutonRestart.style.cursor = "pointer";
    } else {
        if (essai > 10) {
            resultat.style.color = "var(--red)";
            resultat.textContent = "Essai n° " + essai + " : " + inputGuess + " : GAME OVER";
        } else {
            if (inputGuess < random) {
                resultat.style.color = "var(--red)";
                resultat.textContent = "Essai n° " + essai + " : " + inputGuess + " : C'est plus !";
                essai++;
            } else {
                resultat.style.color = "var(--red)";
                resultat.textContent = "Essai n° " + essai + " : " + inputGuess + " : C'est moins !";
                essai++;
            }
            
        }
    }
})

boutonRestart.addEventListener("click", function(e) {
    e.preventDefault();
    window.location.reload();
})
