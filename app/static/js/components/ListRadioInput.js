import { BaseListInput } from "./BaseListInput.js";
export class ListRadioItem extends BaseListInput {
  constructor() {
    super("radio");
    this.countInput = 0;
  }
}
