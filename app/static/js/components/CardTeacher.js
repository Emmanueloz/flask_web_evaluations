export class CardTeacher extends HTMLElement {
  constructor(name, subject, id) {
    super();
    this.name = name;
    this.subject = subject;
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
                    <a href="/teacher/edit/${this.id}">
                    <h2>${this.name}</h2>  
                    </a>
                    <div>
                    <p>Subject: ${this.subject}</p>
                    </div>
                    <div>
                    <a href="/teacher/delete/${this.id}">
                        Eliminar
                    </a>
                    </div>
                </div>
            `;
  }
}
