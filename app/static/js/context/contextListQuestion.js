class ContextListQuestion {
  static countQuestion = 1;
  static sumCountQuestion() {
    ContextListQuestion.countQuestion++;
  }
  static resCountQuestion() {
    ContextListQuestion.countQuestion--;
  }
}

export { ContextListQuestion };
