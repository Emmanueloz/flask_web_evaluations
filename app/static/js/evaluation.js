import { getAllEvaluation } from "./services/evaluation.js";
import { CardEvaluation } from "./components/CardEvaluation.js";
customElements.define("card-evaluation", CardEvaluation);
const containerEvaluation = document.getElementById("containerEvaluation");

getAllEvaluation()
  .then((data) => {
    // verificar que el objeto data tiene la propiedad status y la propiedad result
    if (data.status === "ok" && data.result) {
      // verificar que la propiedad result es un array
      if (Array.isArray(data.result)) {
        // recorrer el array

        data.result.forEach((evaluation) => {
          // crear un elemento HTML
          const cardEvaluation = new CardEvaluation(
            evaluation.title,
            evaluation.teacher,
            evaluation.id
          );
          containerEvaluation.appendChild(cardEvaluation);
        });
      }
    }
  })
  .catch((error) => console.error(error));
