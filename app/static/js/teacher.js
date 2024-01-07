import { getAllTeacher } from "./services/teacher.js";
import { CardTeacher } from "./components/CardTeacher.js";

customElements.define("card-teacher", CardTeacher);

const containerTeacher = document.getElementById("containerTeacher");

getAllTeacher().then((data) => {
  // verificar que el objeto data tiene la propiedad status y la propiedad result
  if (data.status === "ok" && data.result) {
    // verificar que la propiedad result es un array
    if (Array.isArray(data.result)) {
      // recorrer el array

      data.result.forEach((teacher) => {
        // crear un elemento HTML
        const cardTeacher = new CardTeacher(
          teacher.name,
          teacher.subject,
          teacher.id
        );
        containerTeacher.appendChild(cardTeacher);
      });
    }
  }
});
