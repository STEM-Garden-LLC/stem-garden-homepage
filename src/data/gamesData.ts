import { PictureCardProps } from '../@types/Cards'
import { ColorsEnum } from '../@types/Colors'
import { TextColorEnum } from "../@types/TypographyProps";
import { LinkTypeEnum } from '../@types/Links'

import { navData } from './navigationData';

// IMAGES
import { 
  connect_four_screenshot,
  tic_tac_toe_screenshot,
  fifteen_game_screenshot,
  under_construction
} from '../../assets/math-games'
// } from '@assets/math-games' // Not Working

const connect_four_description = "The classic game with a twist. Each time you select a column to drop a chip in you will be presented with a math question. Answer it correctly or your turn will be skipped!"
const tic_tac_toe_description = "Play the most underestimated strategy game of all time with a coach that will help you see its true depth. Tic Tac Toe serves as a wonderful tool for introducing kids to mathematical proof, tree diagrams, symmetry, and counting techniqes. "
const fifteen_game_description = "Two players go head to head trying to collect a set of three cards that add up to 15. This game is a fantastic tool for building mental addition skills. For advanced players it has connections to combinations, permutations, and magic squares."




export const gamesData = [
  {
    title: 'The 15 Game',
    imageUrl: fifteen_game_screenshot,
    linkTo: '/games/fifteen-game',
    // linkType: LinkTypeEnum;
    // onClick?: Function;
    // textColor?: TextColorEnum.white
  },
  {
    title: 'The 15 Game',
    imageUrl: 'test',
    linkTo: '/games/the-15-game/*',
  }
]