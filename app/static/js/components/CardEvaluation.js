export class CardEvaluation extends HTMLElement {
  constructor(title, teacher, id) {
    super();
    this.title = title;
    this.teacher = teacher;
    this.id = id;
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    this.shadowRoot.innerHTML = /*html*/ `
            <style>
                /* Add your custom styles here */
            </style>
            <div class="card">
                <a href="/evaluation/edit/${this.id}">
                  <h2>${this.title}</h2>  
                </a>
                <div>
                  <p>Teacher: ${this.teacher?.name}</p>
                  <p>Subject: ${this.teacher?.subject}</p>
                </div>
                <div>
                  <a href="/evaluation/delete/${this.id}">
                    Eliminar
                  </a>
                </div>
            </div>
        `;
  }
}
