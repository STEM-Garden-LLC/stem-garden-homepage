// ASSETS

import { 
  fig_harvest,
  figs_in_colander,
  figs_on_tree,
  figs_on_tree_green,
  fig_missing_bite,
  fig_tree,
  buckets_of_figs,
  figs_in_freezer_bags,
  figs_sliced_for_dehydrator,
} from '../assets/what-we-grow/fig'

import {
  papaya_halved,
  papaya_pile,
  papaya_tree_with_green_fruit,
  papaya_tree_with_ripe_fruit,
  papaya_in_freezer_bags,
  guatemalan_neighbors_get_papaya,
  papaya_leaf
} from '../assets/what-we-grow/papaya'

import {
  turmeric_root,
  turmeric_harvest,
  turmeric_flower,
  turmeric_leaves,
  turmeric_replanting
} from '../assets/what-we-grow/turmeric'

import {
  dwarf_cavendish_bunch,
  banana_flower,
  banana_green_bunch,
  holding_burrows,
  banana_hands,
} from '../assets/what-we-grow/banana'

import { 
  loquat_pile,
  loquat_blossom,
  loquats_on_tree,
  kaylee_and_loquat_pile
} from '../assets/what-we-grow/loquat'

import { 
  cucumber_pile,
  tomato_cuke_harvest,
  cucumber_varieties,
  cucumber_baby
} from '../assets/what-we-grow/cucumbers'

import { 
  elderberries_in_bowl,
  elderberries_pile,
  elderberries_up_close,
  elderberry_jam
} from '../assets/what-we-grow/berries'

// Other

import { 
  beans,
  carrots,
  limes,
  radishes,
  guavas_on_tree,
  squash_blossoms,
  malabar_spinach,
  mustard_greens,
  collards
} from '../assets/what-we-grow'

export const whatWeGrowData = [
  {
    name: 'none_selected',
    text: "Over the years we've tried to grow a very wide variety of crops, far too many to name, and most of them didn't work out. The approach to gardening that we take at the STEM Garden emphasizes caring for the soil actively but the plants not so much. We grow the things that experience has taught us thrive in this location with a minimal amount of hands on care. Select one of the crops above for more details, prices, and availability.",
    imageUrls: []
  },
  {
    name: 'fig',
    text: 'Figs are available throughout the summer. They are pollinated by wasps, not bees or butterflies. We sell the fruit, fresh and frozen, as well as rooted cuttings for those who want to grow their own fig trees.',
    imageUrls: [
      fig_harvest,
      figs_in_colander,
      figs_on_tree,
      figs_on_tree_green,
      fig_missing_bite,
      fig_tree,
      buckets_of_figs,
      figs_in_freezer_bags,
      figs_sliced_for_dehydrator
    ]
  },
  {
    name: 'papaya',
    text: 'Ripe papaya are a beautiful deep orange color but they can also be shredded and made into a salad while still green. Most papaya sold at grocery stores in the U.S. are picked prematurely to improve shelf-life, but as a result they never fully ripen. I leave the fruits on the trees until they are ready to eat. This way they get much sweeter and develop a more interesting flavor. Papaya is a key ingredient in my homegrown fruit smoothies. I sell them green, ripe, or frozen in quart bags.',
    imageUrls: [
      papaya_pile,
      papaya_halved,
      papaya_tree_with_ripe_fruit,
      papaya_tree_with_green_fruit,
      papaya_in_freezer_bags,
      guatemalan_neighbors_get_papaya,
      papaya_leaf
    ]
  },
  {
    name: 'turmeric',
    text: 'Native to India, Turmeric is very happy with the climate in New Orleans. It commands a high price per pound while still being a relatively low maintenance crop. Its broad leaves help shade out weeds and other competition and unlike the fruits we grow, which need picked daily when they are in season, turmeric only requires a few days of hands-on work each year. I sell turmeric flowers for use in salads in July. Freshly dug turmeric is available year round but it keeps best when harvested at the end of the dry season. Each October, I dig up all the turmeric, break apart the big root clusters. I replant about 20% of the rhizomes the same day and make the rest available for sale.',
    imageUrls: [
      turmeric_harvest,
      turmeric_flower,
      turmeric_root,
      turmeric_leaves,
      turmeric_replanting
    ]
  },
  {
    name: 'banana',
    text: 'The side of the garden facing North Galvez Street is protected by a wall of banana "trees", which are actually a very watery herb with no woody parts. They are actually cousins of turmeric and ginger and behave more like a grass than a tree from a grower\'s perspective. The juicy stalks are made up of tightly clustered leaves and even thick ones can be easily cut with a machete. Cut stalks will regrow, but each stalk will only bear fruit once. The root cluster survives and sends up new stalks, called "pups" to replace those that reach maturity and die. While blooming, one of the bright red leaves of the "bell" opens each day to reveal a row of flowers that will turn into a "hand" of bananas. Once the trees set fruit it takes approximately 100 sunny days to ripen.',
    price: 'Check out our Instagram to know when fresh bananas are available. They sell for $1.50 per pound fresh. When they are very abundant we peel and freeze them for making smoothies. Frozen they are $3.00 per pound.',
    imageUrls: [
      dwarf_cavendish_bunch,
      banana_flower,
      banana_green_bunch,
      holding_burrows,
      banana_hands,
    ]
  },
  {
    name: 'loquat',
    text: 'Not related to Cumquats! Loquats are also known as Japanese plums or "Misbeliefs" because the fruit ripens so early in the year you almost wouldn\'t believe it! Loquats bloom in November, December and January, providing an excellent food source for honey bees during an otherwise scarce time of year. By late February the trees are covered in delicious fruit. They can be found all over New Orleans, being a popular ornamental tree in landscapes. I sell the fruit whole and my partner makes a delicious sorbet from the rest.',
    imageUrls: [
      loquat_pile,
      loquat_blossom,
      loquats_on_tree,
      kaylee_and_loquat_pile
    ]
  },
  {
    name: 'cucumber',
    text: 'Out of all the classic annual garden veggies, cucumbers thrive in this soil and climate. The vines grow so quickly. Training them to spread evenly on the trellises is one of my favorite tasks in the garden. We also grow loofah gourds, which are closely related to cucumbers. They are edible and are popular in Vietnamese cuisine but they are probably better known for the spongy material they produce when allowed to mature fully and dry out.',
    imageUrls: [
      cucumber_pile,
      tomato_cuke_harvest,
      cucumber_varieties,
      cucumber_baby
    ]
  },
  {
    name: 'berries',
    text: 'test',
    imageUrls: [
      elderberries_up_close,
      elderberries_in_bowl,
      elderberries_pile,
      elderberry_jam
    ]
  },
  {
    name: 'other',
    text: 'test',
    imageUrls: [
      malabar_spinach,
      mustard_greens,
      beans,
      carrots,
      limes,
      radishes,
      guavas_on_tree,
      squash_blossoms,
      collards
    ]
  },
]

