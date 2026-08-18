// universe
import { mcuData } from "../universe/mcuData";
import { dcuData } from "../universe/dcuData";
import { dceuData } from "../universe/dceuData";
import { monsterVerseData } from "../universe/monsterVerseData";
import { starWarsData } from "../universe/starWarsData";
import { theConjuringData } from "../universe/theConjuringData";
import { xmenData } from "../universe/xmenData";

// webseries
import { breakingBadUniverseData } from "../webseries/breakingBadUniverseData";
import { darkData } from "../webseries/darkData";
import { fromData } from "../webseries/fromData";
import { gameOfThronesData } from "../webseries/gameOfThronesData";
import { peakyBlindersData } from "../webseries/peakyBlindersData";
import { strangerThingsData } from "../webseries/strangerThingsData";
import { vikingsData } from "../webseries/vikingsData";

// duology 
import { bladeRunnerData } from "../duology/bladeRunnerData";
import { jackReacherData } from "../duology/jackReacherData";
import { killBillData } from "../duology/killBillData";
import { sherlockHolmesData } from "../duology/sherlockHolmesData";
import { theRaidData } from "../duology/theRaidData";
import { topGunData } from "../duology/topGunData";

// triology
import { beforeTriologyData } from "../triology/beforeTrilogyData";
import { chroniclesOfNarniaData } from "../triology/chroniclesOfNarniaData";
import { equalizerData } from "../triology/equalizerData";
import { mazeRunnerData } from "../triology/mazeRunnerData";
import { millenniumTrilogyData } from "../triology/millenniumTrilogyData";
import { darkKnightTrilogyData } from "../triology/theDarkKnightData";

// tetralogy
import { badBoysData } from "../tetralogy/badBoysData";
import { expandablesData } from "../tetralogy/expandablesData";
import { matrixData } from "../tetralogy/theMatrix";


// franchise
import { alienData } from "../franchise/alienData";
import { fastAndFuriousData } from "../franchise/fastAndFuriousData";
import { harryPotterData } from "../franchise/harryPotterData";
import { jamesBondData } from "../franchise/jamesBondData";
import { johnWickData } from "../franchise/johnWickData";
import { jurassicParkData } from "../franchise/jurassicParkData";
import { lordOfTheRingsData } from "../franchise/lordOfTheRingsData";
import { madMaxData } from "../franchise/madMaxData";
import { missionImpossibleData } from "../franchise/missionImpossibleData";
import { piratesOfTheCaribbeanData } from "../franchise/piratesOfTheCaribbeanData";
import { planetOfTheApesData } from "../franchise/planetOfTheApesData";
import { predatorData } from "../franchise/predatorData";
import { rockyCreedData } from "../franchise/rockyCreedData";
import { starTrekData } from "../franchise/starTrekData";
import { terminatorData } from "../franchise/terminatorData";
import { theHungerGamesData } from "../franchise/theHungerGamesData";
import { transformersData } from "../franchise/transformersData";

export const contentRegistry = {
    alien: {
    title: "Alien Franchise",
    subtitle: "Movie Franchise",
    contentId: "alien",
    content: alienData,
  },

  harrypotter: {
    title: "Harry Potter",
    subtitle: "Movie Franchise",
    contentId: "harrypotter",
    content: harryPotterData,
  },
  johnwick: {
    title: "John Wick",
    subtitle: "Movie Franchise",
    contentId: "johnwick",
    content: johnWickData,
  },

  jurassicpark: {
    title: "Jurassic Park",
    subtitle: "Movie Franchise",
    contentId: "jurassicpark",
    content: jurassicParkData,
  },
  mcu: {
  title: "Marvel Cinematic Universe",
  subtitle: "Cinematic Universe",
  contentId: "mcu",
  content: mcuData,
},
dceu: {
  title: "DC Extended Universe",
  subtitle: "Cinematic Universe",
  contentId: "dceu",
  content: dceuData,
},

dcu: {
  title: "DCU Universe",
  subtitle: "Cinematic Universe",
  contentId: "dcu",
  content: dcuData,
},

starwars: {
  title: "Star Wars",
  subtitle: "Cinematic Universe",
  contentId: "starwars",
  content: starWarsData,
},

theconjuring: {
  title: "The Conjuring Universe",
  subtitle: "Cinematic Universe",
  contentId: "theconjuring",
  content: theConjuringData,
},

monsterverse: {
  title: "MonsterVerse",
  subtitle: "Cinematic Universe",
  contentId: "monsterverse",
  content: monsterVerseData,
},

xmen: {
  title: "X-Men Universe",
  subtitle: "Cinematic Universe",
  contentId: "xmen",
  content: xmenData,
},
bladerunner: {
  title: "Blade Runner",
  subtitle: "Movie Duology",
  contentId: "bladerunner",
  content: bladeRunnerData,
},
jackreacher: {
  title: "Jack Reacher",
  subtitle: "Movie Duology",
  contentId: "jackreacher",
  content: jackReacherData,
},

killbill: {
  title: "Kill Bill",
  subtitle: "Movie Duology",
  contentId: "killbill",
  content: killBillData,
},

sherlockholmes: {
  title: "Sherlock Holmes",
  subtitle: "Movie Duology",
  contentId: "sherlockholmes",
  content: sherlockHolmesData,
},

theraid: {
  title: "The Raid",
  subtitle: "Movie Duology",
  contentId: "theraid",
  content: theRaidData,
},

topgun: {
  title: "Top Gun",
  subtitle: "Movie Duology",
  contentId: "topgun",
  content: topGunData,
},
johnwick: {
  title: "John Wick",
  subtitle: "Movie Franchise",
  contentId: "johnwick",
  content: johnWickData,
},

jurassicpark: {
  title: "Jurassic Park",
  subtitle: "Movie Franchise",
  contentId: "jurassicpark",
  content: jurassicParkData,
},

lordoftherings: {
  title: "The Lord of the Rings",
  subtitle: "Movie Franchise",
  contentId: "lordoftherings",
  content: lordOfTheRingsData,
},

fastandfurious: {
  title: "Fast & Furious",
  subtitle: "Movie Franchise",
  contentId: "fastandfurious",
  content: fastAndFuriousData,
},

jamesbond: {
  title: "James Bond",
  subtitle: "Movie Franchise",
  contentId: "jamesbond",
  content: jamesBondData,
},

missionimpossible: {
  title: "Mission Impossible",
  subtitle: "Movie Franchise",
  contentId: "missionimpossible",
  content: missionImpossibleData,
},

piratesofthecaribbean: {
  title: "Pirates Of The Caribbean",
  subtitle: "Movie Franchise",
  contentId: "piratesofthecaribbean",
  content: piratesOfTheCaribbeanData,
},

planetoftheapes: {
  title: "Planet Of The Apes",
  subtitle: "Movie Franchise",
  contentId: "planetoftheapes",
  content: planetOfTheApesData,
},

thehungergames: {
  title: "The Hunger Games",
  subtitle: "Movie Franchise",
  contentId: "thehungergames",
  content: theHungerGamesData,
},

predator: {
  title: "Predator",
  subtitle: "Movie Franchise",
  contentId: "predator",
  content: predatorData,
},

terminator: {
  title: "Terminator",
  subtitle: "Movie Franchise",
  contentId: "terminator",
  content: terminatorData,
},

startrek: {
  title: "Star Trek",
  subtitle: "Movie Franchise",
  contentId: "startrek",
  content: starTrekData,
},

rockycreed: {
  title: "Rocky / Creed",
  subtitle: "Movie Franchise",
  contentId: "rockycreed",
  content: rockyCreedData,
},

madmax: {
  title: "Mad Max",
  subtitle: "Movie Franchise",
  contentId: "madmax",
  content: madMaxData,
},

transformers: {
  title: "Transformers",
  subtitle: "Movie Franchise",
  contentId: "transformers",
  content: transformersData,
},
before: {
  title: "Before Trilogy",
  subtitle: "Trilogy",
  contentId: "before",
  content: beforeTriologyData,
},

chroniclesofnarnia: {
  title: "Chronicles Of Narnia",
  subtitle: "Trilogy",
  contentId: "chroniclesofnarnia",
  content: chroniclesOfNarniaData,
},

equalizer: {
  title: "The Equalizer",
  subtitle: "Trilogy",
  contentId: "equalizer",
  content: equalizerData,
},

mazerunner: {
  title: "Maze Runner",
  subtitle: "Trilogy",
  contentId: "mazerunner",
  content: mazeRunnerData,
},

millennium: {
  title: "Millennium Trilogy",
  subtitle: "Trilogy",
  contentId: "millennium",
  content: millenniumTrilogyData,
},

thedarkknight: {
  title: "The Dark Knight Trilogy",
  subtitle: "Trilogy",
  contentId: "thedarkknight",
  content: darkKnightTrilogyData,
},
badboys: {
  title: "Bad Boys",
  subtitle: "Tetralogy",
  contentId: "badboys",
  content: badBoysData,
},

expendables: {
  title: "The Expendables",
  subtitle: "Tetralogy",
  contentId: "expendables",
  content: expandablesData,
},

thematrix: {
  title: "The Matrix",
  subtitle: "Tetralogy",
  contentId: "thematrix",
  content: matrixData,
},
breakingbad: {
  title: "Breaking Bad",
  subtitle: "TV / Web Series",
  contentId: "breakingbad",
  content: breakingBadUniverseData,
},

gameofthrones: {
  title: "Game Of Thrones",
  subtitle: "TV / Web Series",
  contentId: "gameofthrones",
  content: gameOfThronesData,
},

vikings: {
  title: "Vikings",
  subtitle: "TV / Web Series",
  contentId: "vikings",
  content: vikingsData,
},

dark: {
  title: "Dark",
  subtitle: "TV / Web Series",
  contentId: "dark",
  content: darkData,
},

from: {
  title: "From",
  subtitle: "TV / Web Series",
  contentId: "from",
  content: fromData,
},

strangerthings: {
  title: "Stranger Things",
  subtitle: "TV / Web Series",
  contentId: "strangerthings",
  content: strangerThingsData,
},

peakyblinders: {
  title: "Peaky Blinders",
  subtitle: "TV / Web Series",
  contentId: "peakyblinders",
  content: peakyBlindersData,
},
};
