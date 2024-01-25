export enum ViewEnum {
  welcome = 'welcome',
  settings = 'settings',
  playGame = 'playGame',
}

export enum PlayersEnum {
  playerOne = 'Player One',
  playerTwo = 'Player Two',
  unclaimed = 'Unclaimed'
}

export enum ColorsEnum {
  playerOne = '#d50000',        // red
  playerTwo = '#ffea00',        // yellow
  unclaimed = 'rgba(0,0,0,0)',  // transparent
  board     = '#0039cb'         // blue
}

export enum GameStatusEnum {
  playerOnesTurn = 'Player One\'s Turn', 
  playerTwosTurn = 'Player Two\'s Turn', 
  playerOneWins = 'Player One Wins!', 
  playerTwoWins = 'Player Two Wins!', 
  gameOverDraw = 'Game Over. Draw.'
}


export enum QuestionTypesEnum {
  addTwoSingleDigitNumbers = "Add Single Digit Numbers",
  addSingleDigitToDoubleDigit = "Add Single and Double Digit Numbers",
  addTwoDoubleDigitNumbers = "Add Double Digit Numbers",
}

// Various ways players may be asked to enter answers
export enum InputTypeEnum {
  textField = "Text Field: string",
  compareMagnitude = "ButtonSet < = >",
  multipleChoice = "ButtonSet: string or number",
  trueOrFalse = "ButtonSet: boolean"
  // Question type that asks for three expressions if A = B only, A = C only, B = C only, A = B = C, or None Are Equal.
}

export enum TimeLimitTypesEnum {
  noTimeLimit = "No Time Limit",
  fiveSecondsPerQuestion = "Five Seconds per Question",
  tenSecondsPerQuestion = "Ten Seconds per Question",
  fiveMinutesForTheGame = "Five Minutes per Player for the Whole Game",
  tenMinutesForTheGame = "Ten Minutes per Player for the Whole Game",
}


export type GameBoardProps = {
  movelist: number[],
  gameStatus: GameStatusEnum,
  handleColumnClick: Function
}


export type ColumnProps = {
  index: number,
  // chips: PlayersEnum[],
  movelist: MovelistType
  gameStatus: GameStatusEnum,
  handleColumnClick: Function,
  gameIsOver: boolean,
}

export type HeaderRowProps = {
  gameStatus: GameStatusEnum
}

export type MathQuestionObject = {
  vars: number[],
  correctAnswer: number,
  instruction: string,
  questionFormat: string,
  inputType: InputTypeEnum,
  choices: string[]
}

export type QuestionModalProps = {
  open: boolean,
  question?: MathQuestionObject,
  // handleAnswerSubmit: Function,
  borderColor: ColorsEnum
}

export type AnswerInputComponentProps = {
  inputType: InputTypeEnum,
  question: MathQuestionObject,
  handleAnswerSubmit: Function,
}


export type MovelistType = number[]