export class TextAreaInput extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  length = 100;

  handleEvent(event) {
    if (event.type === "input") {
      this.handleOnInput(event);
    }
  }

  handleOnInput(e) {
    //console.log(e.target.value);
    this.length = e.target.value;
  }

  dataAnswer() {
    return {
      answers: null,
      lengthAnswers: this.length,
    };
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = /*html*/ `
    <style>
      @import "../../css/BaseListInput.css";
      @import "../../css/TextAreaInput.css";
    </style>
    <textarea id="" disabled>Respuesta</textarea>
    <div class="btn-section-button" >
    <label>
      Tamaño de la respuesta
      <input type="number" value="${this.length}"  min="50" max="500">
    </label>
    </div>
    `;

    this.input = this.shadowRoot.querySelector("input");
    this.input.addEventListener("input", this);
  }
  disconnectedCallback() {
    this.input.removeEventListener("input", this);
  }
}
