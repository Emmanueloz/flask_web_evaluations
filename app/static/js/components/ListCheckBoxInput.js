import { BaseListInput } from "./BaseListInput.js";

export class ListCheckBoxInput extends BaseListInput {
  constructor() {
    super("checkbox");
    this.countInput = 0;
  }
}
