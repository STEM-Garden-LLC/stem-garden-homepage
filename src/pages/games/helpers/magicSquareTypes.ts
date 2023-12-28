export type MovelistType = string

export enum PlayersEnum {
  playerOne = 'Player One',
  playerTwo = 'Player Two'
}

export enum PlayModeEnum {
  humanVsHuman = 'humanVsHuman',
  humanVsBot = 'humanVsBot',
  humanVsCoach = 'humanVsCoach'
}

export enum CardClaimStatusEnum {
  playerOne = 'playerOne',
  playerTwo = 'playerTwo',
  unclaimed = 'unclaimed'
}

export enum FifteenGameColorsEnum {
  playerOne = '#eed022',   // yellow
  playerTwo = '#3311ff',   // blue
  isInWin = '#009900',   // green
  // unclaimed = 'unclaimed' // use context
}

export enum GameStatusEnum {
  playerOneWins = 'Player One Wins',
  playerTwoWins = 'Player Two Wins',
  draw = 'It\'s a Draw',
  playerOneToMove = 'Player One\'s Turn',
  playerTwoToMove = 'Player Two\'s Turn',
  // gameOver        = 'Game Over'
}

export enum GameOutcomesEnum {
  playerOneWins = 'Player One Wins',
  playerTwoWins = 'Player Two Wins',
  draw = 'It\'s a Draw',
}

export enum CardId {
  _1 = 1, 
  _2,
  _3,
  _4,
  _5,
  _6,
  _7,
  _8,
  _9
}

export enum DifficultyModes {
  easy = 'easy',
  medium = 'medium',
  hard = 'hard'
}