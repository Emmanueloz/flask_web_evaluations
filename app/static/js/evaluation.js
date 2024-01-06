import { getAllEvaluation } from "./services/evaluation.js";
import { CardEvaluation } from "./components/CardEvaluation.js";

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
          console.log(evaluation.teacher);
          const cardEvaluation = new CardEvaluation();
          cardEvaluation.id = evaluation.id;
          cardEvaluation.title = evaluation.title;
          cardEvaluation.teacher = evaluation.teacher;
          containerEvaluation.appendChild(cardEvaluation);
        });
      }
    }
  })
  .catch((error) => console.error(error));
