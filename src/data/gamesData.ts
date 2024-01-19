import { GameCardProps } from '../@types/Cards'

// IMAGES
import { 
  connect_four_screenshot,
  // tic_tac_toe_screenshot,
  fifteen_game_screenshot,
  under_construction
} from '@assets/math-games'
// } from '@assets/math-games' // Not Working


const gamesData : GameCardProps[] = [
  {
    title: "The Fifteen Game",
    linkTo: "/games/the-15-game",
    imageUrl: fifteen_game_screenshot,
    disabled: false,
    description: [
      "I first learned this game while teaching at a Waldorf School but it has ancient roots and something to offer students of all levels of mathematical experience.",
      "In the Fifteen Game, two players go head to head trying to collect a set of three cards that add up to 15. It is a fantastic tool for building mental addition skills. For advanced players it has connections to combinations, permutations, and magic squares."]
  },
  {
    title: "Math Fact Connect Four",
    linkTo: "/games/connect-four",
    imageUrl: connect_four_screenshot,
    disabled: false,
    description: [
      "The classic game of four-in-a-row with a twist: Each time you select a column to drop a chip in you will be presented with a math question. Answer it correctly or your turn will be skipped!",
      "This game includes the option to select a type of arithmetic question from several different difficulty levels, making ideal to use again and again as students improve their skills."
    ],
  },
  // {
  //   title: "Tic Tac Toe Coach",
  //   linkTo: "/games/tic-tac-toe",
  //   imageUrl: tic_tac_toe_screenshot,
  //   disabled: false,
  //   description: [
  //     "The game of Tic Tac Toe presents fantastic but often overlooked opportunities for introducing students to mathematical ideas including tree diagrams, symmetry, and rigorous proof. It is both popular and simple, accessible to very young kids while still having enough depth to be interesting to adults.",
  //     "This is your chance to play against a master coach who will pose questions leading you to insight in any position. If you get stumped or want to check your answer the coach will show you which of the possible moves lead to wins, losses, and draws."
  //   ]
  // },
  {
    title: "Classic Nim",
    linkTo: "the-15-game",
    imageUrl: under_construction,
    disabled: true,
    description: [
      "In Nim, players take turns removing stones from one of a few piles until one player or the other is forced to take the last stone, losing the game when they do so.",
      "There is a very interesting trick for mastering this game which is based on binary numbers. This trick is commonly used with an advanced form of finger counting. Most people think you can only use the fingers of one hand to count up to five but once you know this trick you'll see one hand can take you all the way to 31!"
    ]
  },
  // {
  //   title: "The Thirty Four Game",
  //   linkTo: "the-34-game",
  //   imageUrl: fifteen_game_screenshot,
  //   disabled: false,
  //   description: ["Two players go head to head trying to collect a set of four cards that add up to 34. You can adjust the maximum number of cards each player can have at once and whether they choose the card to discard or use a FIFO discard policy."]
  // },
]

export default gamesData;