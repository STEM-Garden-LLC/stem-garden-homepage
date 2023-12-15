// ASSETS

import {
  blue_bike_clipart, 
  weighing_pumpkins,
  two_passing_trains,
  rapunzels_hair,
  teenagers_ages,
  the_bent_bamboo,
  gauss_addition,
  weavers_apprentice,
  pile_of_tennis_balls,
  pirate_division,
  lockers,
  calendar,
  pentagon_coloring,
  mixing_purple_paint,
  leaning_ladder,
  monks_and_bread,
  marksmans_choice,
  goat_on_a_rope,
  brahmaguptas_egg_puzzle,
  increasing_the_average,
  buying_horses,
  finding_a_fake,
  false_alarm_virus,
  cookie_jar,
  doorway_diagonal,
  ant,
  lawn_mower,
  hens_for_the_village,
  carrot_harvest,
} from '@assets/math-puzzles'

// TYPES
import { PuzzleCardProps } from '../@types/Cards';


export type PuzzleTag = 'combinations' 
| 'logic' 
| "fractions"
| "sequences"
| "permutations"
| "tree graph"
| "percents"
| "probability"
| "circles"
| "area"
| "distance"
| "nets"
| "pythagorean theorem"
| "algebra"
| "classic puzzles"
| "factoring"
| "perfect squares"
| "quadratics"
| "triangle numbers"
| "arithmetic series"
| "multiplication"
| "classic puzzles"
| "linear system"
| "unit rates"
| "symmetry"
| "modular arithmetic"
| "chinese remainder theorem"
| "linear diophantine"
| "averages"
| "linear systems"




const puzzlesData : PuzzleCardProps[]  = [
  {
    title: "Weighing Pumpkins",
    tags: ["combinations", "logic"],
    imageUrl: weighing_pumpkins,
    googleDriveFileId: "1hvuTFY07ifH0mVaDQigGGByZfPDz1qpiVv-jLPYdobQ",
  },{
    title: "The Weaver's Apprentice",
    tags: ["fractions", "sequences"],
    imageUrl: weavers_apprentice,
    googleDriveFileId: "1Dpy2zvJ7p0yOtDQSHx5oe_Eq9gmODGIns0P9HaQLAeM",
  },{
    title: "The Archer's Choice",
    tags: ["permutations", "tree graph"],
    imageUrl: marksmans_choice,
    googleDriveFileId: "1GQZYTRwHXQMwpuxShL-_xw3G0eXqReEAEVxAKG7ADUk",
  },{
    title: "False Positive",
    tags: ["percents", "probability"],
    imageUrl: false_alarm_virus,
    googleDriveFileId: "1KeVREpLQs8E35LJ0VRvrvZwhaotZFWtWvnva9JG8C3Y",
  },{
    title: "Goat On A Rope",
    tags: ["circles", "area"],
    imageUrl: goat_on_a_rope,
    googleDriveFileId: "1hgHbDiItoqi7RavAcyxI_QQqZoGy1N8117IdAZR5wvE",
  },{
    title: "The Ant's Path",
    tags: ["distance", "nets"],
    imageUrl: ant,
    googleDriveFileId: "1vN9HIDnY_J5peVk4Dpublxz-xlRQm9iKzk1mg61ZA2c",
  },{
    title: "The Leaning Ladders",
    tags: ["pythagorean theorem", "algebra"],
    imageUrl: leaning_ladder,
    googleDriveFileId: "1jn3nlytLoW8lb3Qa82JjlqntJlvV7kB1a04sNJUJSk8",
  },{
    title: "The Great Locker Experiment",
    tags: ["classic puzzles", "factoring", "perfect squares"],
    imageUrl: lockers,
    googleDriveFileId: "19gtGCCHNCs_CmF6KV5rTuOP4uN91fzs2YGU51L_uIs0",
  },{
    title: "Pentagon Coloring",
    tags: ["symmetry", "combinations"],
    imageUrl: pentagon_coloring,
    googleDriveFileId: "1ORHBHEMj8E4U-Q6VNQVTsmGk7ZwcYUnmooKYC9JdFn4",
  },{
    title: "Pile of Tennis Balls",
    tags: ["triangle numbers", "sequences"],
    imageUrl: pile_of_tennis_balls,
    googleDriveFileId: "1Z4pO73QqW0SFAO7feThKXpdA6i08q4x-UpiZBxVEaUg",
  },{
    title: "Rapunzel's Hair",
    tags: ["pythagorean theorem", "algebra"],
    imageUrl: rapunzels_hair,
    googleDriveFileId: "1MIkJgd-X4azvNmnph0OWiTKgUQPZruPgaNLRcMn4yFw",
  },{
    title: "Doorway Diagonal",
    tags: ["pythagorean theorem", "quadratics"],
    imageUrl: doorway_diagonal,
    googleDriveFileId: "1DRYOiyXSn27zdu2IUy0m1BwrdbgvWmiiF0WpnxIGJDY",
  },{
    title: "Cheap Lawn Mowing",
    tags: ["linear system", "unit rates"],
    imageUrl: lawn_mower,
    googleDriveFileId: "13-SpyBxTxTRVBfsHy2SkYD2H7GrKXX9N2Hy2jClrO-c",
  },{
    title: "Two Passing Trains",
    tags: ["unit rates"],
    imageUrl: two_passing_trains,
    googleDriveFileId: "1-omjYqigNHESmIy-GnypDg2ZE-nYkfpa08beceN1MeA",
  },{
    title: "The Paperboy Payback",
    tags: ["linear system", "fractions"],
    imageUrl: calendar,
    googleDriveFileId: "1e2v59VBYTxX_J2YUMMUuB9K9L7j_RYpsrLAVRfUyQhs",
  },{
    title: "The Bent Bamboo",
    tags: ["pythagorean theorem"],
    imageUrl: the_bent_bamboo,
    googleDriveFileId: "1e4TkLGaNRSBoRRiDe9OEtflZb182kCWWPkIOai4gsWU",
    source: "Crest of the Peacock",
  },{
    title: "Teenagers' Ages",
    tags: ["factoring"],
    imageUrl: teenagers_ages,
    googleDriveFileId: "1R6I-ssJ53ggdXZGv8xmkL2wUDGUyzEQT4OaL4T-tYnA",
    source: "",
  },{
    title: "Monks and Bread",
    tags: ["fractions", "logic"],
    imageUrl: monks_and_bread,
    googleDriveFileId: "1ZfwWnZaTutMyBHWPF3DbIuu7HkVlhbw0H1E5-0l8iDk",
    source: "Car Talk",
  },{
    title: "Mixing Purple Paint",
    tags: ["fractions", "logic"],
    imageUrl: mixing_purple_paint,
    googleDriveFileId: "1FjItYRVTvRdtqGA0MJchYHal0m8v7FaFivaWVr7c_Xw",
    source: "",
  },{
    title: "Hens for the Village",
    tags: ["linear system", "algebra"],
    imageUrl: hens_for_the_village,
    googleDriveFileId: "1h-owfEnRP7Q2SYQhM1Bh5Q41TTjIPajLfbRPC25FT3c",
    source: "Crest of the Peacock",
  },{
    title: "Gauss's Addition",
    tags: ["triangle numbers", "arithmetic series", "multiplication", "classic puzzles"],
    imageUrl: gauss_addition,
    googleDriveFileId: "10Jn5A5dfMs_COafvNh5ZdUPYe2CtbKmxX612mWx7nmg",
    source: "",
  },{
    title: "Finding a Fake",
    tags: ["classic puzzles", "logic"],
    imageUrl: finding_a_fake,
    googleDriveFileId: "1AgAWZ_0ouagOrh2V2AXw0h6Z1vD00zeYiQ-3Tv8dLs0",
    source: "",
  },{
    title: "Pirate Division",
    tags: ["chinese remainder theorem", "modular arithmetic"],
    imageUrl: pirate_division,
    googleDriveFileId: "1cVVici0uFMhZ8wsJwVPGxZh48y2lurDyP_je_uTNFqM",
    source: "Number Theory Through Inquiry",
  },{
    title: "Increasing the Average",
    tags: ["unit rates", "averages"],
    imageUrl: increasing_the_average,
    googleDriveFileId: "1ggHW27RO_J4f3-DsQaJR-nkwqy1lcnqkufXRx-iP4iI",
    source: "The Moscow Puzzles",
  },{
    title: "Cookie Jar",
    tags: ["fractions", "algebra"],
    imageUrl: cookie_jar,
    googleDriveFileId: "1Z9xC7G8jiZ09GxkiyLu11NI8UP4dgh9uy86voJVqxLw",
    source: "Dr. Thatcher",
  },{
    title: "Carrot Harvest",
    tags: ["area", "factoring"],
    imageUrl: carrot_harvest,
    googleDriveFileId: "10dNsSARBYtMN5sbuh4QYuadq0FMw29plj-cZ2JTZZ68",
    source: "Dr. Klein",
  },{
    title: "Buying Horses and Oxen",
    tags: ["linear systems", "modular arithmetic", "linear diophantine"],
    imageUrl: buying_horses,
    googleDriveFileId: "1i1qjHg0dr2sEwOv3RCGV-b8vqgToD6HmS8IeV2KDcU4",
    source: "Crest of the Peacock",
  },{
    title: "Brahmagupta's Egg Puzzle",
    tags: ["modular arithmetic", "chinese remainder theorem"],
    imageUrl: brahmaguptas_egg_puzzle,
    googleDriveFileId: "1aMGXxmK4F-5S3SWJeHNgY7TRjREfdwcPDyh3O8zZ1io",
    source: "Number Theory Through Inquiry",
  },
]

export default puzzlesData;