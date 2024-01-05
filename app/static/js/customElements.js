import { QuestionEditor } from "./components/QuestionEditor.js";
import { InputItem } from "./components/InputItem.js";
import { ListRadioItem } from "./components/ListRadioInput.js";
import { ListCheckBoxInput } from "./components/ListCheckBoxInput.js";
import { TextAreaInput } from "./components/TextAreaInput.js";

// Definición de custom elements
customElements.define("radio-input", InputItem);
customElements.define("text-area-input", TextAreaInput);
customElements.define("list-radio-input", ListRadioItem);
customElements.define("list-checkbox-input", ListCheckBoxInput);
customElements.define("question-editor", QuestionEditor);
