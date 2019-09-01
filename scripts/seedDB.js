const mongoose = require("mongoose");
const db = require("../models");

// Empties the db collections and inserts the names below
//To SEED Heroku/mLab, run in the root folder: '$ heroku run node scripts/seedDB.js'
// To SEED Local run '$ node seedDB.js' from the scripts folder containing the seed.js file.

mongoose.connect(
  process.env.MONGODB_URI ||
  "mongodb://localhost/DMDB"
);

//**********************Inn Name Collection */
const innSeed = [{
  adj: [
    "Happy",
    "Sad",
    "Old",
    "New",
    "Jousting",
    "Salty",
    "Crusty",
    "Fighting",
    "Kneeling",
    "Sticky",
    "Starving",
    "Timid",
    "Plesant",
    "New",
    "Faded",
    "Plain",
    "Nifty",
    "Shattered",
    "Enchanted",
    "White",
    "Black",
    "Red",
    "Brown",
    "Ancient",
    "Dusty",
    "Odd",
    "Cunning",
    "Flying",
    "Fine",
  ],

  noun: [
    "Artist",
    "Apostle",
    "Beast",
    "Knight",
    "Beggar",
    "Fighter",
    "Fool",
    "Raccoon",
    "Lion",
    "Stone",
    "Eagle",
    "Fox",
    "Throne",
    "Boulder",
    "Steed",
    "Chicken",
    "Traveler",
    "Raven",
    "Demon",
    "Serpent",
  ],

  type: [
    "Inn",
    "Tavern",
    "Pub",
    "Bar"
  ]
}];


db.Inn
  .deleteMany({}) //clear out the collection
  .then(() => db.Inn.collection.insertMany(innSeed)) //re-insert seed
  .then(data => {
    console.log(data.result.n + " Inn records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

//**********************Land Name Collection */
const landSeed = [
  {
    adj: [
      "Wandering",
      "Barren",
      "Crusty",
      "Carrion",
      "Callous",
      "Creaky",
      "Twisted",
      "Dusty",
      "Damned",
      "Evergreen",
      "Erie",
      "Great",
      "Grand",
      "Hollow",
      "Jagged",
      "Lonley",
      "Lost",
      "Withered",
      "Grim",
      "Mossy",
      "Retched",
      "Rusty",
      "Burning"
    ],

    noun: [
      "Swamp",
      "Mountains",
      "Sea",
      "Ocean",
      "Forrest",
      "Plains",
      "Highlands",
      "Mines",
      "Caves",
      "Archipeligo",
      "Islands",
      "River",
      "Peaks",
      "Route",
      "Road",
      "Highway",
      "Path"
    ]
  }
];



db.Land
  .deleteMany({}) //clear out the collection
  .then(() => db.Land.collection.insertMany(landSeed)) //re-insert seed
  .then(data => {
    console.log(data.result.n + " Land records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


//**********************Dungeon Collection */
const dungeonSeed = [
  {
    direction: [
      "Upstairs",
      "Downstairs",
      "North",
      "East",
      "South",
      "West"
    ],

    element: [
      "Small Store-room",
      "Large Store-room",
      "Narrow Hallway",
      "Wide Hallway",
      "Long Hallway",
      "Short Hallway",
      "Small Barracks",
      "Large Barracks",
      "Armory",
      "Throne Room",
      "Galley",
      "Larder",
      "Dead End"
    ],

    description: [
      "Well-Lit",
      "Poorly-Lit",
      "Unlit",
      "Cold",
      "Hot",
      "Drafty",
      "Musty"
    ]
  }
];



db.Dungeon
  .deleteMany({}) //clear out the collection
  .then(() => db.Dungeon.collection.insertMany(dungeonSeed)) //re-insert seed
  .then(data => {
    console.log(data.result.n + " Dungeon records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


//**********************Treasure Collection */
const treasureSeed = [
  {
    gemstones: {
      tenGP: [
        "Azurite",

      ],
      fiftyGP: [
        "Bloodstone",
      ],
      hundredGP: [
        "Amber"
      ],
      fiveHundredGP: [
        "Alexandrite"
      ],
      thousandGP: [
        "Black Opal"
      ],
      fiveThousandGP: [
        "Black Sapphire"
      ]
    }
  },

  {
    coins: {
      idividual: [

      ],

      hoard: [

      ]
    },
  },

];



db.Treasure
  .deleteMany({}) //clear out the collection
  .then(() => db.Treasure.collection.insertMany(treasureSeed)) //re-insert seed
  .then(data => {
    console.log(data.result.n + " Treasure records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


//**********************Name Collection */
const nameSeed = [
  {
    Dragonborn: {
      male: ["Andujar", "Armagan", "Armek", "Arzan", "Axaran", "Belaxarim", "Brevarr", "Djemidor", "Draxan", "Fayal", "Grax", "Iojad", "Inzul", "Khiraj", "Kreytzen", "Lejek", "Mar", "Nazir", "Nedam", "Nevek", "Ravaran", "Razaan", "Sarax", "Sarram", "Savaxis", "Siangar", "Sirizan", "Sunan", "Szuran", "Tajan", "Tamajon", "Tenahn", "Toxal", "Tzegyr", "Vantajar", "Vharkus", "Xafiq", "Zarkhil"],
      female: ["Artana", "Kalas", "Khagra", "Leytra", "Myrka", "Naya", "Sarcha", "Shirren", "Sirivistra", "Sufana", "Tamara", "Vrumadi", "Zovra", "Arizita", "Xyrinn", "Sosira", "Koqorel", "Nyszita", "Welsifaeth", "Dabith", "Irlywyn", "Nashann", "Zofkira"]
    },
    Dwarf: {
      male: ["Agaro", "Arnan", "Auxlan", "Avamir", "Baelnar", "Balfam", "Bariken", "Borkûl", "Darkûl", "Dolmen", "Dyrnar", "Erag", "Ezegan", "Ferrek", "Garmûl", "Glint", "Ghorvas", "Grimmalk", "Haeltar", "Halagmar", "Halzar", "Hlant", "Korlag", "Krag", "Krim", "Kurman", "Lurtrum", "Malagar", "Mardam", "Maulnar", "Melgar", "Morak", "Orobok", "Rogath", "Roken", "Rozag", "Sabakzar", "Sharak", "Smethykk", "Swargar", "Thorbalt", "Thorin", "Tredigar", "Vabûl", "Vistrum", "Wolvar"],
      female: ["Beyla", "Fenryl", "Grenenzel", "Krystolari", "Lokara", "Lurka", "Marnia", "Praxana", "Rokel", "Roksana", "Thurlfara", "Vauldra", "Veklani", "Vronwe", "Zebel", "Kathvia", "Ranmyl", "Nissyl", "Katnia", "Artin", "Baermora", "Redmera", "Belgwyn", "Brynbera", "Redryl"]
    },
    Elf: {
      male: ["Alarcion", "Alathar", "Ariandar", "Arromar", "Borel", "Bvachan", "Carydion", "Elgoth", "Farlien", "Ferel", "Gaerlan", "Iafalior", "Kaelthorn", "Laethan", "Leliar", "Leodor", "Lorak", "Lorifir", "Morian", "Oleran", "Rylef", "Savian", "Seylas", "Tevior", "Veyas"],
      female: ["Aryllan", "Atalya", "Ayrthwil", "Irva", "Lyfalia", "Ronefel", "Thirya", "Velene", "Venefiq", "Zereni", "Olajyre", "Miaroris", "Yllalee", "Origwyn", "Syltris", "Xyrbanise", "Krisxisys", "Liakalyn", "Zylfiel", "Chaemys"]
    },
    Gnome: {
      male: ["Alston", "Alvyn", "Boddynock", "Brocc", "Burgell", "Dimble", "Eldon", "Erky", "Fonkin", "Frug", "Gerbo", "Gimble", "Glim", "Jebeddo", "Kellen", "Namfoodle", "Orryn", "Roondar", "Seebo", "Sindri", "Warryn", "Wrenn", "Zook"],
      female: ["Bimpnottin", "Breena", "Caramip", "Carlin", "Donella", "Duvamil", "Ella", "Ellyjobell", "Ellywick", "Lilli", "Loopmottin", "Lorilla", "Mardnab", "Nissa", "Nyx", "Oda", "Orla", "Roywyn", "Shamil", "Tana", "Waywocket", "Zanna"]
    },
    Half_Elf: {
      male: ["Aseir", "Bardeid", "Haseid", "Khemed", "Mehmen", "Sudeiman", "Zasheir", "Darvin", "Dorn", "Evendur", "Gorstag", "Grim", "Helm", "Malark", "Morn", "Randal", "Stedd", "Bor", "Fodel", "Glar", "Grigor", "Igan", "Ivor", "Kosef", "Mival", "Orel", "Pavel", "Sergor"],
      female: ["Atala", "Ceidil", "Hama", "Jasmal", "Meilil", "Seipora", "Yasheira", "Zasheida", "Arveene", "Esvele", "Jhessail", "Kerri", "Lureene", "Miri", "Rowan", "Shandri", "Tessele", "Alethra", "Kara", "Katernin", "Mara", "Natali", "Olma", "Tana", "Zora"]
    },
    Half_Orc: {
      male: ["Dench", "Feng", "Gell", "Henk", "Holg", "Imsh", "Keth", "Krusk", "Mhurren", "Ront", "Shump", "Thokk", "Mogudurk", "Trukamak", "Belorash", "Ullogall", "Zasebur", "Asadark", "Ukegar", "Zavid", "Sorubak", "Brakumash"],
      female: ["Baggi", "Emen", "Engong", "Kansif", "Myev", "Neega", "Ovak", "Ownka", "Shautha", "Sutha", "Vola", "Volen", "Yevelda", "Rasagur", "Zenogri", "Goranir", "Kerugh", "Garud", "Puyizira", "Rahkone", "Rohkemar", "Lagirook", "Tamume"]
    },
    Halfling: {
      male: ["Alton", "Ander", "Cade", "Corrin", "Eldon", "Errich", "Finnan", "Garret", "Lindal", "Lyle", "Merric", "Milo", "Osborn", "Perrin", "Reed", "Roscoe", "Wellby", "Arthan", "Carvin", "Corby", "Cullen", "Egen", "Ernest", "Gedi", "Heron", "Jeryl", "Keffen", "Kylem", "Kynt", "Leskyn", "Neff", "Orne", "Quarrel", "Rabbit", "Rilkin", "Snakebait", "Tarfen", "Titch", "Tuck", "Whim"],
      female: ["Caliope", "Emily", "Piper", "Rixi", "Sabretha", "Teg", "Tilly", "Toira", "Vexia", "Vil", "Vzani", "Zanthe", "Ziza", "Andry", "Bree", "Callie", "Cora", "Euphemia", "Jillian", "Kithri", "Lavinia", "Lidda", "Merla", "Nedda", "Paela", "Portia", "Seraphina", "Shaena", "Trym", "Vani", "Verna"]
    },
    Human: {
      male: ["StrAnlow", "Arando", "Bram", "Cale", "Dalkon", "Daylen", "Dodd", "Dungarth", "Dyrk", "Eandro", "Falken", "Feck", "Fenton", "Gryphero", "Hagar", "Jeras", "Krynt", "Lavant", "Leyten", "Madian", "Malfier", "Markus", "Meklan", "Namen", "Navaren", "Nerle", "Nilus", "Ningyan", "Norris", "Quentin", "Semil", "Sevenson", "Steveren", "Talfen", "Tamond", "Taran", "Tavon", "Tegan", "Vanan", "Vincenting"],
      female: ["Azura", "Brey", "Hallan", "Kasaki", "Lorelei", "Mirabel", "Pharana", "Remora", "Rosalyn", "Sachil", "Saidi", "Tanika", "Tura", "Tylsa", "Vencia", "Xandrilla", "Shezinol", "Zepel", "Luzulsi", "Elsul", "Tenni", "Nah", "Holgoge", "Lolgoy", "Ivory", "Lizhiphe", "Chesa"]
    },
    Tiefling: {
      male: ["Akmenos", "Amnon", "Barakas", "Damakos", "Ekemon", "Iados", "Kairon", "Leucis", "Melech", "Mordai", "Morthos", "Pelaios", "Skamos", "Therai", "Arkrut", "Kaiichar", "Akxus", "Gumus", "Skathus", "Kilakas", "Kilxik", "Skaxes", "Aetron", "Aetron", "Xarilius"],
      female: ["Akta", "Anakis", "Bryseis", "Criella", "Damaia", "Ea", "Kallista", "Lerissa", "Makaria", "Nemeia", "Orianna", "Phelaia", "Rieta", "Levnirith", "Afspira", "Yucyra", "Grigrea", "Mithlaia", "Orilies", "Diseis", "Afwure", "Nithza", "Shahala", "Sarrissa"]
    }
  }
];

db.Name
  .deleteMany({}) //clear out the collection
  .then(() => db.Name.collection.insertMany(nameSeed)) //re-insert seed
  .then(data => {
    console.log(data.result.n + " Name records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

//**********************Weapon Name Collection */
const weaponSeed = [
  {
    name: [
      "Oracle",
      "Darkness",
      "Harbinger",
      "Thunderstorm",
      "Reaver",
      "Relentless",
      "Hurricanne",
      "Devotion",
      "Ivory",
      "Spellbinder",
      "Stormrage",
      "Blight",
      "Daughtbane",
      "Wizardsbane",
      "Lifebinder",
      "Desolation",
      "Mercy",
      "Windweaver",
      "Earthshadow",
      "Soulkeeper",
      "Silversoul",
      "Lightbane",
      "Midnight",
      "Dawn's Light",
      "Crucifier",
      "Netherbane",
      "Father's Hope",
      "Journey's End",
      "Starlight",
      "Willbreaker",
      "Kindness",
      "Chancellor",
      "Frostward",
      "Eclipse",
      "Amnesia",
      "Stardust",
      "Silverglow",
      "Dreamshadow",
      "Shadowfeather",
    ]
  }
];



db.Weapon
  .deleteMany({}) //clear out the collection
  .then(() => db.Weapon.collection.insertMany(weaponSeed)) //re-insert seed
  .then(data => {
    console.log(data.result.n + " Weapon records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


//**********************City/Town Name Collection */
const citySeed = [
  {
    city: [
      "Cragbell",
      "Oldfall",
      "Clearreach",
      "Cavespell",
      "Grasscliff",
      'Swiftpost',
      "Dirtshade",
      "Highlight",
      "Lostvein",
      "Westband",
      'Crystalmeadow',
      'Laststorm',
      'Sunmount',
      'Basintide',
      'Bearfair',
      'Bayguard',
      'Darkmond',
      'Spiritharbor',
      'Darkbay',
      'Spiritrock',
      'Freyside',
      'Dragonkeep',
      'Deadhallow',
      'Oakenreach',
      'Dawnyard',
      'Iceguard',
      'Sleethost',
      'Dewstall',
      'Hollowshire',
      'Dirtwood',
      'Midfort',
      'Pinefort',
      'Dragonspell',
      'Clayhost',
      'Wildhost',
      'Southbarrow',
      'Rageburgh',
      'Eastvault',
      'Basinrock',
      'Coldcross',
    ]
  }
];



db.City
  .deleteMany({}) //clear out the collection
  .then(() => db.City.collection.insertMany(citySeed)) //re-insert seed
  .then(data => {
    console.log(data.result.n + " city records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


//**********************Fail Collection */
const failSeed = [
  {
    fail: [
      'You overextend yourself going for the kill. Your opponent gains advantage on their next attack roll.',
      'Your weapon gets stuck in your opponent’s shield, armour, hide, or else in a tree or wall, or the ground. Roll a Strength check to see if you can free it using a bonus action. The DC is 8 + your strength modifier.',
      'You lose your footing. Roll Dexterity / Acrobatics check (DC15) or fall prone. Your turn has ended and melee attacks have advantage on you',
      'Roll a Constitution Saving Throw DC15 or the strain of your attack causes you to pull a muscle in your upper body. You have disadvantage in attack rolls and ability checks requiring upper body strength until you have completed three long rests, or received magical healing.',
      'Roll a Constitution Saving Throw DC15 or the strain of combat causes you to pull a muscle in your leg. Your movement is halved, and you lose your dex modifier to AC and initiative, and you have disadvantage on any ability checks that require lower body strength, until you have completed three long rests, or received magical healing.',
      'Either through fear, excitement or simply needing to go, you soil yourself.',
      'You lose your combat footing, exposing yourself to your target. Your target has advantage on their first attack roll against you next round.',
      'You lose your grip as you attack. Roll a DC 10 Dexterity Check, on failure you drop your weapon at your feet.',
      'Melee: You lunge past an enemy exposing yourself to his attack. Ranged: Your missile startles your allies near your target. Melee: Enemy you were attacking is able to use their reaction to perform and attack of opportunity. Ranged: the target can perform an opportunity attack on any ally within melee range.',
      'player’s armor becomes unfastened, reducing its AC bonus by 1 until a movement action is taken to fasten it',
      'player’s coin purse becomes unfastened and spills a number of coins determined by DM',
      "You don't realize you're in battle. You must take an action to re-ready your weapon, any enemies within range get a opportunity attack.",
      'You hit yourself, take half damage roll.',
      'You thought you saw your dad, so you wave. Enemy gets opportunity attack.',
      'Your enemies pity your failure, and walk away. No one gets any experience, or any treasure. Wounds and used items, still remain however.',
      'The opponent smacks you. No damage, except for your pride.',
      'Your character yells out "I think my dice are faulty". No one knows why and odd looks are traded.',
      'You are teleported to the nearest tavern. The bartender doesnt say anything and just hands you a drink. On the house.',
      'BEES! everyone on in the battle takes 1d4 of damage.',
      'You step on the upturned tines of a rake and get whacked in the face by the handle for 1d4.',
      'The sky opens, unleashing a torrential rain, only on you.',
    ]
  }
];

db.Fail
  .deleteMany({}) //clear out the collection
  .then(() => db.Fail.collection.insertMany(failSeed)) //re-insert seed
  .then(data => {
    console.log(data.result.n + " Fail records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });



//**********************Traps Collection */
const trapsSeed = [
  {
    traps: [
      "Trip wire",
      "Pressure plate",
      "Opening a door",
      'Lifting the lid on a chest',
      'Grabbing a certain rung of a ladder',
      'Removing an object from it’s resting place',
      'Touching anything in the room, including the floor',
      'Breaking the beam of a light source',
      'Disturbing a source of water in the room',
      'Pulling on a suspicious looking rope hanging from the ceiling',
      'An arcane rune on the floor',
      'Arcane markings around a door frame',
      'A pillar that has a low hum to it',
      'A jeweled eye that scans the room',
      'Stone statue that has glowing red eyes',
      'A mysterious green fog that rolls around the base of the room',
      'A very dimly lit candle that could be extinguished with the faintest breath',
      'A phrase scrawled on the wall that activates when said out loud',
      'Failing to cast any spell on a dull crystal floating in the center of the room',
      'Lighting a rather inviting looking torch in the center of the room',
    ],
    tripped: [
      'A torch is lit in another room, alerting enemies',
      'A door in another room closes, hiding a secret passage',
      'Chests in the dungeon lock up',
      'A dangerous enemy is freed that could normally be avoided',
      'All other traps that have already been triggered get reset',
      'All lights are extinguished',
      'Golems begin patrolling the dungeon',
      'All doors in the dungeon lock themselves',
      'An alarm bell begins ringing alerting all enemies of the party',
      'Another more sinister trap is set in another room',
      'A low hum is heard',
      'A very unnatural light begins glowing brightly from an unknown source',
      'Any runes in the room begin glowing a bright red',
      'The room suddenly drops drastically in temperature',
      'The room gets uncomfortably hot',
      'A soft hiss is heard',
      'A fizzling sound is heard',
      'A high pitched hum rings out',
      'A crackling of energy is heard through the room',
      'Silence',
      'Gears can be heard grinding from inside the walls',
      'A low boom is heard that echoes out through the dungeon',
      'A high pitched whirring can be heard',
      'Various ticking sounds are heard',
      'A quick release of steam followed by a bang',
      'A low rumbling that shakes the room for a moment',
      'A single click',
      'The sound of chains sliding across stone',
      'A thumping sound that starts slow and begins picking up speed',
    ],
    hazard: [
      'The floor opens downward into a 40 foot pit',
      'From unseen slits in the wall, poisoned needles fly out',
      'A wall opens revealing a golem to ambush the party',
      'A large log swings down from the ceiling',
      'The parts of the dungeon begin collapsing, blocking off areas',
      'Vents on the ceiling begin emptying noxious fumes into the room',
      'A large blade swings horizontally across the room attempting to decapitate',
      'The room begins filling with water after the doors slam shut',
      'The walls slowly begin closing inwards',
      'A large rolling boulder drops from the ceiling towards the party',
      'Sleep is cast on the room',
      'Victim must resist being petrified',
      'A fireball explodes throughout the room',
      'All surfaces of the room begin to become too hot to touch (Effectively heat metal)',
      'Fumes begin materializing as if stinking cloud was cast',
      'A wall of lightning races towards the victim and any others in its way',
      'All people in the room have blindness cast on them',
      'The victim is sent to the astral plane for one minute',
      'Everything in the room begins to levitate, no save',
      'The spell Confusion is cast on everyone',
    ],
    disarm: [
      'A shallow gutter runs along the far wall, with a loose brick restricting the flow of water through it',
      'What appears to be a keyhole is discover behind a loose stone',
      'A rusted and jammed lever is found beneath a discarded pile of clothing',
      'A row of fake-emerald buttons on the wall, covered in cobwebs',
      'Three stones are arranged in a circle on a lead pressure plate',
      'A painting of an octopus is found in a far corner, three of its arms appear depressible',
      'A foot-long strip of iron is set into the ceiling, with a small magnet at one end',
      'A small wooden door opens to a panel filled with strange metal gears',
      'Three tiny brass levers in a hand-sized hole in the floor',
      'A moldy rope lies on the floor, leading to a pulley lost in the shadows of the ceiling',
      'Four keyhole sized openings along the bottom of a door',
      'A magical rune glows red when touched',
      'A small statuette of an elephant lies beside a small stone pedestal',
      'A loose block in the ceiling appears to be hooked to a chain above',
      'Three counterweights hang on ropes just inside the door',
      'A camouflaged metal door on one wall conceals a copper lever',
      'A magic mouth appears and demands a password',
      'Magic runes spell out “Erase Me” with Read Magic',
      'A statue of a wizened sage has moveable arms',
      'An abandoned bottle contains a key matching a concealed hole in the wall',
      'A loose brick has fallen out of the wall and must be replaced',
      'A ghostly apparition appears and demands a song be sung to him',
      'A pulley disarms the trap, but the rope is missing',
      'A empty gourd hangs from a hook on the wall and must be filled with water',
      'Three couplets of an old poem are scrawled on the wall; the missing couplet must be recited aloud',
      "A Riddle: As time moves, so it creates. The lessons learned, and the ways of fate. I am each one, and yet still more. All you've known, seen and done before. Tell me, what am I? Answer: Knowledge",
      "A Riddle:  You can see me in water, but I am never wet. What am I? Answer: Reflection",
      "A Riddle: What goes up a hill faster than it goes down a hill? Answer: Fire",
      "A Riddle: When you make a hole in me, I have fewer holes. What am I? Answer: A Net",
      "A Riddle: What begins and has no end, and ends all things that begin? Answer: Death",
      "A Riddle: I cannot be measured until I am done, oh but how you will miss me once I am gone. Answer: Lifespan/Time",
      "A Riddle: Brothers and sisters, I have none. But that man's father is my father's son. Who is he? Answer: My Son",
      "A Riddle: Iron roof, glass walls, burns and burns but never falls. What am I? Answer: Lantern",
      "A Riddle: I grow as I eat, but die when I drink, what am I? Answer: Fire",
      "A Riddle: It cannot be seen, it cannot be felt, Cannot be heard, cannot be smelt, Lies behind stars and under hills, And empty holes it fills. Comes first follows after, Ends life, kills laughter. Answer: Darkness",
      "A Riddle: Alive without breath, as cold as death, never thirsty, always drinking, all in mail, but never clinking. Answer: A Fish",
      "A Riddle: In my arms I keep the dead, my presence keeps families fed. I am the base of mortal life. I am the scene of all their strife. Answer: Earth/Ground",
      "A Riddle: A slave I've been and shall remain. To a cruel mistress I'm tied with invisible chains. Yet I always put on the same brave face. She keeps me her prisoner, but leaves me some space. What am I? Answer: The Moon",
      "A Riddle: To keep me, I must be given. If I am not kept, I am broken Answer: A Promise",
      "A Riddle: I do not breathe, but I run and jump. I do not eat, but I swim and stretch. I do not drink, but I sleep and stand. I do not think, but I grow and play. I do not see, but you see me everyday. Answer: A Leg",
    ]
  }
];

db.Trap
  .deleteMany({}) //clear out the collection
  .then(() => db.Trap.collection.insertMany(trapsSeed)) //re-insert seed
  .then(data => {
    console.log(data.result.n + " Traps records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });