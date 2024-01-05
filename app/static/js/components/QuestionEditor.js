import { ContextListQuestion } from "../context/contextListQuestion.js";
import { ListRadioItem } from "./ListRadioInput.js";
import { ListCheckBoxInput } from "./ListCheckBoxInput.js";
import { TextAreaInput } from "./TextAreaInput.js";

export const TYPE_QUESTION = {
  MULTIPLE_OPTION: "multiple-option",
  OPEN_RESPONSE: "open-response",
  CHECK_BOX: "check-box",
};

export class QuestionEditor extends HTMLElement {
  dataQuestion() {
    const { answers, lengthAnswers } =
      this.answersContainer.children[0].dataAnswer();
    return {
      id: null,
      questionValue: this.questionData.questionValue,
      typeQuestion: this.questionData.typeQuestion,
      answers,
      lengthAnswers,
    };
  }

  questionData = {
    id: null,
    questionValue: "",
    typeQuestion: TYPE_QUESTION.MULTIPLE_OPTION,
    answers: [],
    lengthAnswers: null,
  };

  isGenerate = false;

  setDataQuestion({ id, questionValue, typeQuestion, answers, lengthAnswers }) {
    this.questionData.id = id;
    this.questionData.questionValue = questionValue;
    this.questionData.typeQuestion = typeQuestion;
    this.questionData.answers = answers;
    this.questionData.lengthAnswers = lengthAnswers;
    this.isGenerate = true;
  }

  generateQuestion() {
    //this.question.value = this.questionData.questionValue;
    this.selected.value = this.questionData.typeQuestion;
    this.answersContainer.innerHTML = "";
    if (this.questionData.typeQuestion === TYPE_QUESTION.MULTIPLE_OPTION) {
      const newListRadioItem = new ListRadioItem();
      newListRadioItem.setDataAnswer(this.questionData.answers);
      this.answersContainer.append(newListRadioItem);
    } else if (this.questionData.typeQuestion === TYPE_QUESTION.OPEN_RESPONSE) {
      const newTextAreaInput = new TextAreaInput();
      newTextAreaInput.length = this.questionData.lengthAnswers;
      this.answersContainer.append(newTextAreaInput);
    } else if (this.questionData.typeQuestion === TYPE_QUESTION.CHECK_BOX) {
      console.log(this.questionData.answers);
      const newListCheckBoxInput = new ListCheckBoxInput();
      newListCheckBoxInput.setDataAnswer(this.questionData.answers);
      this.answersContainer.append(newListCheckBoxInput);
    }
    //this.d.typeQuestion = this.questionData.typeQuestion;
  }

  //questionValue = "";
  //typeQuestion = TYPE_QUESTION.MULTIPLE_OPTION;

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  handleInputQuestion(e) {
    this.questionData.questionValue = e.target.value;
  }

  handleOnSelect(e) {
    //console.log(e.target.value);
    this.answersContainer.innerHTML = "";
    if (e.target.value === TYPE_QUESTION.MULTIPLE_OPTION) {
      this.answersContainer.append(new ListRadioItem());
    } else if (e.target.value === TYPE_QUESTION.OPEN_RESPONSE) {
      this.answersContainer.append(new TextAreaInput());
    } else if (e.target.value === TYPE_QUESTION.CHECK_BOX) {
      this.answersContainer.append(new ListCheckBoxInput());
    }
    this.questionData.typeQuestion = e.target.value;
  }

  deleteQuestion() {
    if (ContextListQuestion.countQuestion == 1) {
      return;
    }
    ContextListQuestion.resCountQuestion();
    //console.log(ContextListQuestion.countQuestion);
    this.remove();
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = /* html */ `
        <style>
          @import "/static/css/Global.css";
          @import "/static/css/QuestionEditor.css";
        </style>
        <article>
          <div>
            <input id="question" type="text" placeholder="Escribe tu pregunta" value="${this.questionData.questionValue}">
            <select id="typeQuestion">
                <option value="${TYPE_QUESTION.MULTIPLE_OPTION}">Opción multiple</option>
                <option value="${TYPE_QUESTION.OPEN_RESPONSE}">Respuesta abierta</option>
                <option value="${TYPE_QUESTION.CHECK_BOX}">Casilla de verificación</option>
            </select>
          </div>
          <section id="answersContainer">
            <list-radio-input ></list-radio-input>          
          </section>
          <section class="btn-section-button">
            <button class="btn" type="button">Eliminar</button>
          </section>
        </article>
    `;
    this.question = this.shadowRoot.querySelector("#question");
    this.selected = this.shadowRoot.querySelector("select");
    this.answersContainer = this.shadowRoot.querySelector("#answersContainer");
    this.button = this.shadowRoot.querySelector("button");
    this.selected.addEventListener("change", this.handleOnSelect.bind(this));
    this.button.addEventListener("click", this.deleteQuestion.bind(this));
    this.question.addEventListener(
      "input",
      this.handleInputQuestion.bind(this)
    );

    if (this.isGenerate) {
      this.generateQuestion();
    }
  }

  disconnectedCallback() {
    this.selected.removeEventListener("change", this.handleOnSelect.bind(this));
    this.button.removeEventListener("click", this.deleteQuestion.bind(this));
    this.question.removeEventListener(
      "input",
      this.handleInputQuestion.bind(this)
    );
  }
}
