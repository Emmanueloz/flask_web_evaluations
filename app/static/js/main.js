import { ContextListQuestion } from "./context/contextListQuestion.js";
import { QuestionEditor } from "./components/QuestionEditor.js";
import { generateEvaluation, evaluation_json } from "./generateEvaluation.js";
import { id, selectIdTeacher } from "./elements.js";
import {
  addEvaluation,
  getEvaluation,
  updateEvaluation,
} from "./services/evaluation.js";

import {
  titleValue,
  listQuestion,
  btnAddQuestion,
  btnSave,
} from "./elements.js";

if (id.value !== "") {
  getEvaluation(id.value)
    .then((data) => {
      if (!data.result) {
        throw new Error("Network response was not ok");
      }

      const evaluation = data.result;
      console.log(evaluation);
      btnSave.textContent = "Editar";
      generateEvaluation(evaluation);
    })
    .catch((error) => console.error(error));

  console.log("editar");
}
// Evento para agregar un nuevo editor de pregunta
btnAddQuestion.addEventListener("click", () => {
  const question = new QuestionEditor();
  ContextListQuestion.sumCountQuestion();
  listQuestion.append(question);
});

const saveEvaluation = () => {
  evaluation_json.questions = [];
  for (const [key, value] of Object.entries(listQuestion.children)) {
    if (value.id === "dataEvaluation") {
      continue;
    }
    const objectQuestion = value.dataQuestion();
    objectQuestion.id = key;
    evaluation_json.title = titleValue.value;
    evaluation_json.questions.push(objectQuestion);
  }

  const evaluation = {
    id_teacher: selectIdTeacher.value,
    evaluation_json,
  };

  console.log(JSON.stringify(evaluation));
  if (id.value !== "") {
    evaluation.id = id.value;
    console.log("editar");
    updateEvaluation(evaluation)
      .then((data) => {
        console.log(data); // Puedes manejar la respuesta aquí
        document.location.href = "/evaluation";
      })
      .catch((error) => {
        console.error(
          "There has been a problem with your fetch operation:",
          error
        );
      });
    return;
  }
  addEvaluation(evaluation)
    .then((data) => {
      console.log(data.result);
      document.location.href = "/evaluation";
    })
    .catch((error) => console.error(error));
};

// botón de lógica para guardar los datos
btnSave.addEventListener("click", () => {
  saveEvaluation();
});
