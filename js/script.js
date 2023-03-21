// **MILESTONE 2**
// Adesso rimuoviamo tutto il markup statico e inseriamo tutte le immagini dinamicamente servendoci dell'array fornito e un semplice ciclo for che concatena un template literal.
// Tutte le immagini saranno nascoste, tranne la prima, che avrà una classe specifica che la renderà visibile.
// Al termine di questa fase ci ritroveremo con lo stesso slider stilato nella milestone 1, ma costruito dinamicamente attraverso JavaScript.

// 1 creo in maniera dinamica le immagini
const imgArrey = [
  "img/01.jpg",
  "img/02.jpg",
  "img/03.jpg",
  "img/04.jpg",
  "img/05.jpg",
];

const containerImg = document.querySelector(".img-slider");
console.log(containerImg);

for (i = 0; i < imgArrey.length; i++) {
  const currentImg = imgArrey[i];

  const sliderImg = `<div class="cont-img">
      <img src=${currentImg} alt="" /></div>`;

  containerImg.innerHTML += sliderImg;
}

// rendiamo visibile la prima immagine
const divContimg = document.getElementsByClassName("cont-img");
console.log(divContimg);
// gli aggiungo la classe e lo rendo visibile
let activeClassIndex = 0;
divContimg[activeClassIndex].classList.add("active");

// RENDO LE IMMAGINI SCORREVOLI CON L'ATTESA DEI SECONDI

// gestisco il "click" sulla freccia in basso
const belowBtn = document.querySelector(".arrow-below");
belowBtn.addEventListener("click", function () {
  if (activeClassIndex < divContimg.length - 1) {
    // rimuovere dalla foto attuale "active"
    divContimg[activeClassIndex].classList.remove("active");

    // incremento ( ++ )
    activeClassIndex++;

    // aggiungo active a quella successiva e creo un loop infinito.
    console.log("activi", activeClassIndex);
    if (activeClassIndex === imgArrey.length - 1) {
      activeClassIndex = 0;
    }
    divContimg[activeClassIndex].classList.add("active");
  }
});

// gestisco il click sulla freccia in alto, facendo lo stesso procedimento ma nel senso inverso.
const aboveBtn = document.querySelector(".arrow-above");
aboveBtn.addEventListener("click", function () {
  // rimuovere, nuovamente, dalla foto attuale active
  divContimg[activeClassIndex].classList.remove("active");

  // se active è 0 parto dall'ultimo elemento dell'array, altrimenti decremento
  if (activeClassIndex === 0) {
    activeClassIndex = imgArrey.length - 1;
  } else {
    activeClassIndex--;
  }

  // aggiungo active a quella successiva e creo un loop infinito.
  divContimg[activeClassIndex].classList.add("active");
});
