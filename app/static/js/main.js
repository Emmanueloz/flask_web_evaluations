import { ContextListQuestion } from "./context/contextListQuestion.js";
import { QuestionEditor } from "./components/QuestionEditor.js";
import { generateEvaluation, evaluation } from "./generateEvaluation.js";
import { id } from "./elements.js";

import {
  titleValue,
  listQuestion,
  btnAddQuestion,
  btnSave,
} from "./elements.js";

if (id.value !== "") {
  generateEvaluation(evaluation);
  console.log("editar");
}
// Evento para agregar un nuevo editor de pregunta
btnAddQuestion.addEventListener("click", () => {
  const question = new QuestionEditor();
  ContextListQuestion.sumCountQuestion();
  listQuestion.append(question);
});

// botón de lógica para guardar los datos
btnSave.addEventListener("click", () => {
  evaluation.questions = [];
  for (const [key, value] of Object.entries(listQuestion.children)) {
    if (value.id === "dataEvaluation") {
      continue;
    }
    const objectQuestion = value.dataQuestion();
    objectQuestion.id = key;
    evaluation.title = titleValue.value;
    evaluation.questions.push(objectQuestion);
  }

  console.log(evaluation);
});
