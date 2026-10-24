// Petit test JavaScript pour vérifier que le fichier est bien chargé.
const testButton = document.querySelector("#testButton");
const message = document.querySelector("#message");
const year = document.querySelector("#year");

year.textContent = new Date().getFullYear();

testButton.addEventListener("click", () => {
  message.textContent = "Succès ! JavaScript fonctionne correctement 🎉";
});
