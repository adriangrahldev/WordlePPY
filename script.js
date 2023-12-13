var error = document.querySelector("#error");
var grid = document.getElementById("grid");
var intentosSpan = document.querySelector(".counter span");
var worldInput = document.querySelector("#worldInput");

gameOverDiv = document.querySelector(".gameOver");
winDiv = document.querySelector(".win");

let palabra = "APPLE";
let intentos = 6;

function comprobar() {
  var filaNueva = document.createElement("div");
  filaNueva.setAttribute("id", "row");

  let palabra_usuario = worldInput.value;
  if (intentos > 0) {
    if (palabra == palabra_usuario) {
      win();
    } else {
      if (palabra_usuario.length == 5) {
        palabra_usuario = palabra_usuario.toUpperCase();
        for (let i = 0; i < 5; i++) {
          let colNueva = document.createElement("div");
          colNueva.setAttribute("id", "col");
          const letra = palabra_usuario[i];
          console.log(letra);
          if (palabra.includes(letra)) {
            if (letra === palabra[i]) {
              colNueva.classList.add("green");
            } else {
              colNueva.classList.add("yellow");
            }
          } else {
            colNueva.classList.add("gray");
          }
          colNueva.innerText = letra;
          filaNueva.appendChild(colNueva);
        }
        grid.appendChild(filaNueva);
        intentos--;
        intentosSpan.innerText = intentos;
        error.innerHTML = "";
      } else {
        console.log("Debe ingresar una palabra de 5 letras.");
        error.innerHTML = "Debe ingresar una palabra de 5 letras.";
      }
      if (intentos === 0) {
        gameOver();
      }
    }

}
  worldInput.value = "";
}

function gameOver() {
  gameOverDiv.style.display = "block";
  worldInput.disabled = true;
}
function win() {
    winDiv.style.display = "block";
    worldInput.disabled = true;
}

function reset() {
    intentos = 6;
    grid.innerHTML = "";
    gameOverDiv.style.display = "none";
    winDiv.style.display = "none";
    intentosSpan.innerText = intentos;
    worldInput.disabled = false;

}
