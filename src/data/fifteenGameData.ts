const fifteenGameData : any = {
  description: {
    heading: '',
    paragraphs: [
      'A turn-based two-player strategy game. Traditionally played with a set of cards numbered one through nine, players take turns claiming one card at a time.',  'The goal is to be first to collect a set of three cards that adds up to exactly fifteen. You may collect more than three cards, but only subsets of three count as winning sets. If all nine cards are claimed with neither player making a winning set the game ends a draw.',
    ]
  },
  general: {
    heading: 'General',
    paragraphs: [
      'This game truly stands out for having something to offer students at a very wide range of levels of math expertise. Each round only takes takes a few minutes to play, making it ideal for a brain-break activity during class. If you want to set up a bracket and have a class-wide or school-wide championship tournament, I recommend the free tool available at Bracket HQ.',
    ]
  },
  elementarySchool: {
    heading: 'Elementary: Mental Math and Thinking Out Loud',
    paragraphs: [
      'The Fifteen Game is a fun way to build automaticity at mentally computing sums and differences within 20. Even for students who have mastered basic addition, trying to formulate strategies that involve offense and defense will push them. With repeated play they start to recognize patterns that make the game easier to play.', 
      'How many different ways could you win if you go first and take the 5? How many pairs are there that add up to 10? Find all the ways you could win if your opponent goes first and takes the 5. What do they have in common? Be sure to get kids talking! Thinking out loud is a valuable life skill that games like this are excellent tools for teaching. Keep playing against the bot in "Easy" mode until you win half of your games and never lose.',
    ]
  },
  middleSchool: {
    heading: 'Middle School: Combinations and Permutations',
    paragraphs: [
      'How many different three card combinations are there that sum to 15? How many different three card combinations are there total? What are the sums of all the other sets? Would this game be fun to play with a different target number than 15?',
      'How many different orders are there that the players could claim the nine cards? Can you see why that question is actually quite difficult to answer? Can you come up with a simple approach that establishes a good estimate, an upper or lower bound?'
    ]
  },
  highSchool: {
    heading: 'High School: Similarity Beneath the Surface & Rigorous Proof',
    paragraphs: [
      'One of the things that makes math such a powerful tool it\'s ability to draw our attention to those situations in life when our current problem can be solved by reusing a solution that to some other seemingly unrelated problem. The logic behind Fifteen Game is actually identical to another game you already know. If you can figure out what other game it is the same as you will find that it makes the Fifteen game much easier to play well.',
      'Play this game many times and you may notice that in Easy and Medium modes you can sometimes win but in Hard mode you never do, regardless of whether you go first or let the bot. Is that just because you haven\'t mastered the best strategy yet? Or is it because it\'s impossible? Try drawing a tree-diagram of all the possible move orders that shows that if neither player makes a "mistake" the game always ends in a draw. While you\'re at it you will need to come up with a very clear definition of the word mistake. You will save yourself a lot of work if you figure out what familiar game the Fifteen Game is identical to because doing so will allow you to ignore variations that are symmetrical. For instance, does it make any difference if you start the game by choosing 1 or 9 or are these two moves basically the same? What about 3 or 7?'
    ]
  },
}

export default fifteenGameData;