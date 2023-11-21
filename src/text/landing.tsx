// ASSETS
import {
  banana_bunch
} from '../assets/what-we-grow/banana'
import { 
  fig_harvest
} from '../assets/what-we-grow/fig'

const landing_page_text = {
  our_story_summary_1: "Established in 2016, the STEM garden got its start as two very polluted vacant lots in New Orleans' upper ninth ward. For the first six years the garden was best described as an off-grid urban homestead. I lived there in gradually increasing comfort while working as a school teacher. Piece by piece, as I could afford materials and find the free time, I built a toolshed, an outdoor kitchen and shower, and two tiny house trailers equipped with DIY solar power and rainwater catchment systems.",
  our_story_summary_2: "After removing all the broken glass, car parts, rotting couches, and other trash from the lots I began the never ending process of enriching the soil by adding organic matter. To date I have brought in and composted over 400 cubic yards horse manure and yard waste which, spread over the 6000 square foot garden, amounts to a layer over 20 inches thick!",
  our_story_summary_3: "For the first four years the STEM Garden was totally off grid and had no monthly bills in spite of being situated in the middle of the city. In 2019, when I decided to learn web development, I got an internet connection but it wasn't until 2022 that we finally got connected to the electrical grid.",
  our_story_summary_4: "As the STEM Garden's exciting transformation continues we are looking to build a community of gardeners and teachers and to expand our mutual-aid efforts. If you want to learn how the farm works, help facilitate our youth chess club, or use the space to offer classes to the community, please reach out! We are always accepting volunteers and are hoping to hire a part-time garden manager this summer.",
  what_we_grow: "Over the years we've tried to grow a very wide variety of crops, far too many to name, and most of them didn't work out. The approach to gardening that we take at the STEM Garden emphasizes caring for the soil actively but the plants not so much. We grow the things that experience has taught us thrive in this location with a minimal amount of hands on care. Click on a crop below for details, prices, and availability."
}

const our_story_paragraphs = [
  "Established in 2016, the STEM garden got its start as two very polluted vacant lots in New Orleans' upper ninth ward. For the first six years the garden was best described as an off-grid urban homestead. I lived there in gradually increasing comfort while working as a school teacher. Piece by piece, as I could afford materials and find the free time, I built a toolshed, an outdoor kitchen and shower, and two tiny house trailers equipped with DIY solar power and rainwater catchment systems.",
  "After removing all the broken glass, car parts, rotting couches, and other trash from the lots I began the never ending process of enriching the soil by adding organic matter. To date, I have brought in and over 400 cubic yards horse manure and yard waste. Spread over the 6000 square foot garden that amounts to a layer over 20 inches thick fresh! However, now it's fully composted, there's been no noticible change in elevation.",
  "For the first four years the STEM Garden was totally off grid and had no monthly bills in spite of being situated in the middle of the city. In 2019, when I decided to learn web development, I got an internet connection but it wasn't until 2022 that the garden finally got a permanent connection to the electrical grid.",
  "As the STEM Garden's exciting transformation continues we are looking to build a community of gardeners and teachers and to expand our mutual-aid efforts. If you want to learn how the farm works, help facilitate our youth chess club, or use the space to offer classes to the community, please reach out! We are always accepting volunteers and are hoping to hire a part-time garden manager this summer.",
]

const crops = [
  {
    name: 'none_selected',
    text: 'test',
    imageUrls: [
      fig_harvest
    ]
  },
  {
    name: 'fig',
    text: 'Figs are available throughout the summer. They are pollinated by wasps, not bees or butterflies. We sell the fruit, fresh and frozen, as well as rooted cuttings for those who want to grow their own fig trees.',
    imageUrls: [
      fig_harvest
    ]
  },
  {
    name: 'papaya',
    text: 'Ripe papaya are a beautiful deep orange color but they can also be shredded and made into a salad while still green. Most papaya sold at grocery stores in the U.S. are picked prematurely to improve shelf-life, but as a result they never fully ripen. I leave the fruits on the trees until they are ready to eat. This way they get much sweeter and develop a more interesting flavor. Papaya is a key ingredient in my homegrown fruit smoothies. I sell them green, ripe, or frozen in quart bags.',
    imageUrls: [
      fig_harvest
    ]
  },
  {
    name: 'turmeric',
    text: 'Native to India, Turmeric is very happy with the climate in New Orleans. It commands a high price per pound while still being a relatively low maintenance crop. Its broad leaves help shade out weeds and other competition and unlike the fruits we grow, which need picked daily when they are in season, turmeric only requires a few days of hands-on work each year. I sell turmeric flowers for use in salads in July. Freshly dug turmeric is available year round but it keeps best when harvested at the end of the dry season. Each October, I dig up all the turmeric, break apart the big root clusters. I replant about 20% of the rhizomes the same day and make the rest available for sale.',
    imageUrls: [
      fig_harvest
    ]
  },
  {
    name: 'banana',
    text: 'The side of the garden facing Galvez Street is protected by a wall of banana "trees", which are actually a very watery herb with no woody parts. They are actually cousins of turmeric and ginger and behave more like a grass than a tree from a grower\'s perspective. The juicy stalks are made up of tightly clustered leaves and even thick ones can be easily cut with a machete. Cut stalks will regrow, but each stalk will only bear fruit once. The root cluster survives and sends up new stalks, called "pups" to replace those that reach maturity and die. While blooming, one of the bright red leaves of the "bell" opens each day to reveal a row of flowers that will turn into a "hand" of bananas. Once the trees set fruit it takes approximately 100 sunny days to ripen.',
    price: 'Check out our Instagram to know when fresh bananas are available. They sell for $1.50 per pound fresh. When they are very abundant we peel and freeze them for making smoothies. Frozen they are $3.00 per pound.',
    imageUrls: [
      banana_bunch
    ]
  },
  {
    name: 'loquat',
    text: 'Not related to Cumquats! Loquats are also known as Japanese plums or "Misbeliefs" because the fruit ripens so early in the year you almost wouldn\'t believe it! Loquats bloom in November, December and January, providing an excellent food source for honey bees during an otherwise scarce time of year. By late February the trees are covered in delicious fruit. They can be found all over New Orleans, being a popular ornamental tree in landscapes. I sell the fruit whole and my partner makes a delicious sorbet from the rest.',
    imageUrls: [
      fig_harvest
    ]
  },
  {
    name: 'cucumber',
    text: 'test',
    imageUrls: [
      fig_harvest
    ]
  },
  {
    name: 'beans',
    text: 'test',
    imageUrls: [
      fig_harvest
    ]
  },
  {
    name: 'berries',
    text: 'test',
    imageUrls: [
      fig_harvest
    ]
  },
  {
    name: 'other',
    text: 'test',
    imageUrls: [
      fig_harvest
    ]
  },
]


export { landing_page_text, our_story_paragraphs, crops }
