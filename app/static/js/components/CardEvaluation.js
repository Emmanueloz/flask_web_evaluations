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
                <h2>${title}</h2>
                <p>ID: ${id}</p>
                <p>Teacher: ${teacher}</p>
            </div>
        `;
  }
}
