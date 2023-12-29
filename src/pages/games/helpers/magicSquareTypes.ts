////////////////////
//    SETTINGS    //
////////////////////

export enum PlayModeEnum {
  playerOneGoesFirst = 'Player One Goes First',  // Human Vs. Human
  playerTwoGoesFirst = 'Player Two Goes First',  // Human Vs. Human
  humanGoesFirst = 'Human Goes First',           // Human Vs. Bot
  botGoesFirst = 'Bot Goes First',               // Human Vs. Bot
  playWithCoach = 'Coaching Mode'
}
export enum DifficultyModesEnum {
  easy = 'easy',
  medium = 'medium',
  hard = 'hard'
}

////////////////////
//    CONSTANTS   //
////////////////////

export type MovelistType = string

export enum PlayersEnum {
  playerOne = 'Player One',
  playerTwo = 'Player Two'
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
  transparent = 'rgba(0,0,0,0)',  
  // unclaimed = 'unclaimed' // use context
}

export enum GameStatusEnum {
  firstPlayerWins = 'First Player Wins!',
  secondPlayerWins = 'Second Player Wins!',
  draw = 'It\'s a Draw.',
  firstPlayerToMove = 'First Player\'s Turn.',
  secondPlayerToMove = 'Second Player\'s Turn.',
}

export enum OutcomesEnum {
  firstPlayerWins = 'Player One Wins!',
  secondPlayerWins = 'Player Two Wins!',
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
