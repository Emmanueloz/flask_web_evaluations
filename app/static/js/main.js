import { ContextListQuestion } from "./context/contextListQuestion.js";
import { QuestionEditor } from "./components/QuestionEditor.js";
import { generateEvaluation, evaluation_json } from "./generateEvaluation.js";
import { id, selectIdTeacher } from "./elements.js";

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

  console.log(evaluation);
});
