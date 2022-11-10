/*! Moneda*/
const moneda = document.querySelector(".moneda");
const time = 2;
let juego = document.getElementById("jugar");
let ganancia = 0;
let perdida = 0;
let contador = 0;
let total = 0;
let apuesta = 0;
let sello = 0;
let cara = 0;
juego.addEventListener("click", lanzamiento);
function lanzamiento() {
  /*Inicio Moneda*/
  moneda.style.transition = "";
  moneda.style.transform = `translateY(400px) rotateX(0deg) rotateY(0deg) rotateZ(0deg)`;

  setTimeout(() => {
    moneda.style.transition = `transform ${time}s`;
    const random = Math.floor(Math.random() * 2 + 1);
    contador++;
    let s = document.querySelector(".seleccion");
    let m = document.getElementById("monto");
    console.log(random);
    let seleccion = parseInt(s.value);

    console.log(seleccion);
    let monto = parseInt(m.value);

    if ((random == 1 && seleccion == 1) || (random == 1 && seleccion == 2)) {
      moneda.style.transform = `translateY(400px) rotateX(3600deg) rotateY(3600deg) rotateZ(3600deg)`;
      // moneda.style.transform = `translateY(400px) rotateX(3600deg) rotateY(3600deg) rotateZ(3600deg)`;
      setTimeout(function () {
        if (random === seleccion) {
          total += monto * 2;
          alert(
            `La seleccion de la maquina es sello, ha ganado ${
              monto * 2
            }, el monto que tiene en total es: ${total}`
          );
        } else {
          total -= monto;
          alert(
            `La seleccion de la maquina es sello , ha perdido ${monto}, el monto que tiene en total es: ${total}`
          );
        }
      }, 2000);
      sello++;
    } else if (
      (random == 2 && seleccion == 2) || (random == 2 && seleccion == 1)
    ) {
      moneda.style.transform = `translateY(400px) rotateX(3600deg) rotateY(1980deg) rotateZ(3600deg)`;

      setTimeout(function () {
        if (random === seleccion) {
          total += monto * 2;
          alert(
            `La seleccion de la maquina es cara, ha ganado ${
              monto * 2
            }, el monto que tiene en total es: ${total}`
          );
        } else {
          total -= monto;
          alert(
            `La seleccion de la maquina es cara, ha perdido ${monto}, el monto que tiene en total es: ${total}`
          );
        }
      }, 2000);
      cara++;
    }

    setTimeout(actualizarPC, 2000);
  }, time * 10);
}

function actualizarPC() {
  document.querySelector(".dinero").textContent = `Dinero: ${total}`;
  document.querySelector(
    ".cantidad_veces"
  ).textContent = `Veces jugadas: ${contador}`;
}

function finalizar() {
  alert(
    `El resumen de la partida fue: Veces jugadas: ${cont}, total de dinero acomulado durante la partida: ${total}`
  ).then((result) => {
    window.location.href = "index.html";
  });
}

let finalizarJuego = document.querySelector(".finalizar");

finalizarJuego.addEventListener("click", finalizar);
