import { MathQuestionObject, InputTypeEnum } from "../connectFourTypes"

export const sampleQuestion: MathQuestionObject = {
  vars: [1,2],
  correctAnswer: 3,
  instruction: "Add",
  questionFormat: "%s + %s = _}",
  inputType: InputTypeEnum.textField,
  choices: []
}
