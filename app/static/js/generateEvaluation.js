import { titleValue, listQuestion } from "./elements.js";
import { ContextListQuestion } from "./context/contextListQuestion.js";
import { QuestionEditor } from "./components/QuestionEditor.js";

/*
{
  id: 0,
  questionValue: "Pregunta 1",
  typeQuestion: TYPE_QUESTION.OPEN_RESPONSE,
  answers: null,
  lengthAnswers: 300,
},
 */
export const evaluation = {
  title: "Titulo",
  questions: [],
};

/**
 * Genera una evaluación con el título y las preguntas proporcionadas.
 *
 * @param {Object} options - Las opciones para generar la evaluación.
 * @param {string} options.title - El título de la evaluación.
 * @param {Array} options.questions - La lista de preguntas de la evaluación.
 */
export const generateEvaluation = ({ title, questions }) => {
  titleValue.value = title;
  if (questions.length === 0) {
    return;
  }
  ContextListQuestion.countQuestion = questions.length;
  listQuestion.innerHTML = "";
  questions.forEach((value) => {
    const newQuestionEditor = new QuestionEditor();
    newQuestionEditor.setDataQuestion(value);
    listQuestion.append(newQuestionEditor);
  });
};
