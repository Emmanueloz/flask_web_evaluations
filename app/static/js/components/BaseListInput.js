import { InputItem } from "./InputItem.js";

export class BaseListInput extends HTMLElement {
  constructor(type) {
    super();
    this.attachShadow({ mode: "open" });
    this.type = type;
  }
  countInput = 0;
  answers = [];

  dataAnswer() {
    this.answers = [];
    for (const item of this.list.children) {
      this.answers.push(item.inputValue);
    }
    return {
      answers: this.answers,
      lengthAnswers: null,
    };
  }

  isGenerate = false;
  /**
   *
   * @param {Array<string>} answers
   */
  setDataAnswer(answers) {
    this.answers = answers;
    this.isGenerate = true;
    console.log(this.countInput);
  }

  generateAnswer() {
    this.answers.forEach((value) => {
      this.addInput(value);
    });
  }

  handleEvent(event) {
    if (event.type === "click") {
      this.addInput();
    }
  }

  sumCountInput() {
    this.countInput++;
    //console.log(this.countInput);
  }

  resCountInput() {
    this.countInput--;
    //console.log(this.countInput);
  }

  addInput(inputValue = "Opción") {
    //console.log(this.countInput);
    this.sumCountInput();
    const newInputItem = new InputItem(this, this.type);
    newInputItem.inputValue = inputValue;
    this.list.append(newInputItem);
  }

  connectedCallback() {
    this.shadowRoot.innerHTML = /* html */ `
      <style>
        @import "../../css/Global.css";
        @import "../../css/BaseListInput.css";
      </style>
      <section id="${this.id}">
        <ul id="list">
        </ul>
        <div>
          <button class="btn" >Agregar</button>
        </div>
      </section> 
    `;

    this.button = this.shadowRoot.querySelector("button");
    this.button.addEventListener("click", this);
    this.list = this.shadowRoot.querySelector("#list");
    if (this.isGenerate) {
      this.generateAnswer();
    } else {
      this.addInput();
    }
  }

  disconnectedCallback() {
    this.button.removeEventListener("click", this);
  }
}
