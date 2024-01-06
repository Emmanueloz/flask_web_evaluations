export class CardEvaluation extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const title = this.getAttribute("title");
    const id = this.getAttribute("id");
    const teacher = this.getAttribute("teacher");

    this.shadowRoot.innerHTML = /*html*/ `
            <style>
                /* Add your custom styles here */
            </style>
            <div class="card">
                <a href="/evaluation/edit/${id}">
                  <h2>${title}</h2>
                  <p>ID: ${id}</p>
                  <div>
                    <p>Teacher: ${teacher?.name}</p>
                    <p>Subject: ${teacher?.subject}</p>
                  </div>
                </a>
            </div>
        `;
  }
}
