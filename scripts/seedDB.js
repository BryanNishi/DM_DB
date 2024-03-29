const mongoose = require("mongoose");
const db = require("../models");

// Empties the db collections and inserts the names below
//To SEED Heroku/mLab, run in the root folder: '$ heroku run node scripts/seedDB.js'
// To SEED Local run '$ node seedDB.js' from the scripts folder containing the seed.js file.

mongoose.connect(
  "mongodb+srv://dmdb_1:dmdbpass@dmdb-jgido.gcp.mongodb.net/dmdb?retryWrites=true&w=majority" ||
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
      'Roll a Constitution Saving Throw DC15 or the strain of your attack causes you to pull a muscle in your upper body. You have disadvantage on attacks/checks requiring upper body strength until you have completed a long rest, or received magical healing.',
      'Roll a Constitution Saving Throw DC15 or the strain of combat causes you to pull a muscle in your lower body. You have disadvantage on attacks/checks that require lower body strength, until you have completed a long rest, or received magical healing.',
      'Either through fear, excitement or simply needing to go, you soil yourself.',
      'You lose your combat footing, exposing yourself to your target. Your target has advantage on their first attack roll against you next round.',
      'You lose your grip as you attack. Roll a DC 10 Dexterity Check, on failure you drop your weapon at your feet.',
      'Melee: You lunge past an enemy exposing yourself to his attack. Ranged: Your missile startles your allies near your target. Melee: Enemy you were attacking is able to use their reaction to perform and attack of opportunity. Ranged: the target can perform an opportunity attack on any ally within melee range.',
      'player’s armor becomes unfastened, reducing its AC bonus by 1 until a movement action is taken to fasten it',
      'player’s coin purse becomes unfastened and spills 1d20 of coins.',
      "You don't realize you're in battle. You must take an action to re-ready your weapon, any enemies within range get a opportunity attack.",
      'You hit yourself, take half damage roll.',
      'You thought you saw your dad; so you wave. Target gets opportunity attack.',
      'Your enemies pity your failure, and walk away. No one gets any experience, or any treasure. Wounds and used items, still remain however.',
      'The opponent slaps you. No damage, except for your pride.',
      'Your character yells out "Aw cmon dice, roll higher." No one knows why and odd looks are traded.',
      'You are teleported to the nearest tavern. The bartender doesnt say anything and just hands you a drink.',
      'BEES! Everyone in the battle takes 1d4 of damage.',
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
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


//**********************Chests Collection */
const chestSeed = [
  {
    style: [
      "Crude",
      "Standard",
      "Fancy",
      "Elven",
      "Bejeweled",
      "Draconic",
      "Dwarven",
      "Pirate",
      "Creepy",
      "Heavy Duty",
    ],
    material: [
      "Old, rotting wood",
      "Sturdy Wood",
      "Iron",
      "Steel",
      "Bone",
      "Obsidian",
      "Glass",
      "Ice",
      "Silver",
      "Gold",
    ],
    trim: [
      "Iron",
      "Steel",
      "Brass",
      "Silver",
      "Gold",
      "Bronze",
      "Ebony",
      "Leather",
      "Wood",
      "Mithril",
      "Adamantite",
      "Dragon Leather",
    ],
    decor: [
      "Artistic Scrollwork",
      "Tree Pattern",
      "Dwarven Runes",
      "Elvish Script",
      "Lion emblem",
      "Carving of a Dragon",
      "Decorative skull",
      "Glowing Crystals",
      "Mystic Sigils",
      "Staring Eyes",
      "Claw-like feet",
      "Bas-relief of a battle",
    ],
    trap: [
      "Poison Dart",
      "Arrow",
      "Small explosion",
      "Alarm",
      "Pit trap",
      "Boulder Trap",
      "Heavy Blade",
      "Spears",
      "Water fills room",
      "Sand fills room",
      "Poison gas",
      "Random Spell",
    ],
    lock: [
      "Padlock",
      "Internal mechanism",
      "Combination",
      "Puzzle Lock",
      "Password",
      "Hidden lock mechanism",
    ],
    key: [
      "Hidden in same room",
      "Plain sight",
      "On guardian",
      "Another room",
      "Held by owner",
      "Lost",
    ],
  }
];

db.Chest
  .deleteMany({}) //clear out the collection
  .then(() => db.Chest.collection.insertMany(chestSeed)) //re-insert seed
  .then(data => {
    console.log(data.result.n + " Chest records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


//**********************Road Encounters Collection */
const encounterSeed = [
  {
    encounter: [
      "Funeral procession complete with priests/clerics",
      "Noble in carriage with guards",
      "Recently wounded folks with tales of bandits that have stolen their stuff",
      "Armed people just taking a break (might look like bandits. Good to use on bridges).",
      "A brass dragon that really wants to talk to you and will bury you in the ground if you try to leave (see sleep gas)",
      "Bard singing stories. Asks party if they have any stories for him.",
      "Pottery merchant.",
      "Jeweler traveling with wares and guards",
      "A tipped over wagon with goods and people missing",
      "Old senile wo/man on the side of the road",
      "A troop of Halflings heading to their new home",
      "A cleric/priest preaching the end of days who tries to get the party to confess their sins and repent!",
      "Messenger galloping down the road on a horse shouting “make way, make way!”",
      "A hedge knight and their squire",
      "Soldiers in formation lead by a knight marching down the road.",
      "Traveling merchant selling perfumes, balms, ointments, oils, and “healing potions.” Potions might take a while to kick in he says. Totally not magical",
      "A set of cowboys herding their cows or pigs",
      "Mule drawn wagon with dwarven traders carrying stone and metal goods for trade. Armed with breastplates and warhammers.",
      "Wagon travelers stopped on the side of the road making food and resting.",
      "A pair of hunter bringing home their kill which hangs from a pole between them.",
      "Deer, boar, squirrels, rabbits, pheasants, etc.",
      "Blood in the ground. The scene of a recent battle, but with not people or bodies.",
      "A body hung from a tree with a sign on it warning passers by... From local government to keep bandits in line OR from bandits to keep locals in line",
      "A pre-wedding party drinking and traveling on their way to the ceremony.",
      "A furtive person offering to sell the party narcotics",
      "A parent teaching their offspring to ride a horse.",
      "Beggars",
      "People competing in a footrace between towns",
      "A dual between two fighters.",
      "A lone escaped cow.",
      "Traveling Circus",
      "Lost, crying children",
      "A dead warrior, propped up against a tree. His foe dead before him.",
      "A slave merchant with guards and slaves in tow",
      "An exotic animal trader looking to buy or sell. Has guards and exotic wild animals",
      "An evangelical cleric preaching the good word of Martha / Astair (or other good / lawful gods)",
      "Traveling wizard on waggon pulled by donkeys",
      "Group of pilgrims",
      "Gnomes with a partially disassembled waggon arguing over the proper way to fix it.",
      "An amorous couple off the road whose sounds of enjoyment can be heard",
      "Prospectors",
      "Silent monks / nuns",
      "Another group of adventurers peacefully walking down the road",
      "Fighter / Cleric / Wizard / Thief",
      "Fighter / Fighter / Cleric / Thief",
      "Fighter / Wizard / Wizard / Thief",
      "Fighter / Fighter / Fighter / Cleric",
      "Fighter / Cleric / Cleric",
      "Mirror of party",
      "A prisoner being escorted by a knight / armed man",
      "A naked man who has gambled away his clothes. Surprisingly well spoken.",
      "A leper ",
      "Someone who dropped a wedding ring and is scouring the road for it.",
      "Soldiers of local government asking people to pay an actual toll (not bandits!). Have a man in shackles next to them.",
      "Traveling blind man with a scimitar.",
      "Single female elf walking alone",
      "Traveling glass blower with guards",
      "Beekeeper resting on the side of the road with his bee boxes in a cart.",
      "Person / People re building a small bridge over a creek / stream",
      "Traveling alchemist from far far away",
      "A hunter who asks you to be quiet because “it’s close”",
      "Traveling magician",
      "Tax collector moving down the road with their enforcers ",
      "Person gone mad with the heat frantically digging a hole in the middle of the road.",
      "Insane person begging for punishment",
      "Local teenagers high as a kite on mushrooms / drugs / alcohol",
      "Berry pickers",
      "Gambling stall",
      "Fallen tree blocking the road, but no ambush.",
      "Traveling cheese vendor",
      "Rehearsing dancers/actors in a field getting it right before they show up in town.",
      "Bounty hunter armed to the teeth. Asks the party if they’ve seen who s/he’s looking for. Has a really bad sketch of their target.",
      "Traveling fortune teller",
      "Nobles out on a fox hunting party",
      "Runaway slave",
      "Mail carrier & single escort",
      "Traffic jam of waggons trying to get past a block in the road",
      "Dead courier",
      "Survivor(s) from a caravan attack",
      "Traveling diplomat and armed escort",
      "Tea house with people resting",
      "A waterhole + another thing from this list",
      "Traveling wine merchant",
      "A painter drawing a lovely landscape",
      "Priests/Clerics preaching against dwarves (or other subrace)",
      "Lonely traveler who joins the party and walks along with them",
      "Roadside tavern",
      "A festival set up off the road with merchant stalls, music, dancing, art, drinking, etc.",
      "Someone who recognizes the party and is a fan of their work! Wants to hear their stories.",
      "Military patrol that asks if the party has seen anything unusual.",
      "Lone paladin cleansing the land of evil",
      "Someone selling jewelry at a heavy discount on the side of the road. A thief fencing his stolen goods.",
      "Roadside altar / temple",
      "Peasants moving grain by the wagon load",
      "Peasants moving fruits / veggies",
      "Traveling foreigner who doesn’t speak the language asking for directions to town. (Subrace that doesn’t speak common? Gnome / Halfling?)",
      "Horse with a saddle but no rider",
      "A man burying some bodies on the side of the road / old graves on the side of the road.",
      "Roadside brothel (has bouncers)",
      "Bones littering the ground off the road. The site of a battle from ages ago.",
      "Sudden rainstorm the party must take shelter from",
      "People napping on the side of the road.",
      "Herd of animals wandering about without an owner. Cows/sheep/goats/pigs.",
      "Tarred and feathered person",
      "A person stuck in a pit trap on the road.",
      "Deserters from some armed force. They are well armed but dejected and keep to themselves. ",
      "Mercenary group that’s recently been hired and moving on to their new job.",
    ]
  }
];

db.Encounter
  .deleteMany({}) //clear out the collection
  .then(() => db.Encounter.collection.insertMany(encounterSeed)) //re-insert seed
  .then(data => {
    console.log(data.result.n + " Encounter records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


//**********************Long Rest Encounters Collection */
const longRestSeed = [
  {
    longRest: [
      "Restless night. Do not gain any benefits from the long rest. roll to determine a party member which this happens to.",
      "A small rodent wanders through your camp it seems to be begging you for food.",
      "A PC starts talking in their sleep.",
      "You hear an owl hooting, but cannot spot its den nearby.",
      "A ghost appears and asks you for a favor.",
      "You start to nod off. Roll CON to stay awake.",
      "You get really hungry. Tomorrows rations are looking delicious",
      "You get wrapped up in your own thoughts, reflecting upon decisions made in your past.",
      "You hear a couple chatting and laughing as they walk by in the night.",
      "You spot some glowing mushrooms just outside of camp.",
      "A fire starts nearby. The Player can see an orange glow to the sky and embers permeating into the sky.",
      "Raccoons (or some other rodent) come in and eat all your rations. They also stooled in your favorite spare set of clothes.",
      "Random player gets stung by scorpion/wasp/mosquito 1 damage.",
      "Camped out on a sink hole. Roll a d20. On a 17 or above, the sinkhole gives way. The sinkhole could lead to an abandoned mine or other facility. Could also be a simple hole.",
      "You smell something cooking. There is a nearby goblin camp and they are roasting a pig on a spit. They don't notice the player unless they are particularly careless.",
      "The night has been particularly cold, there is a random small, sleeping creature wrapped up in the corner of one of the PC's tents in order to stay warm and dry.",
      "A bird (Or other small animal) shows up at the camp and refuses to leave.",
      "Slept on a small rock, root or stick. Have a tender spot or sore back for 1d4 hours.",
      "Spider/scorpion/rodent crawled into boot. Do a perception check before putting boots on unless they knock the boots out first",
      "A herd of (fill in random animal) rush toward the campsite. Clearly spooked by something nearby.",
      "A vicious storm begins to brew in the area. Raging winds and torrential rain begin to fall.",
      "A nearby fire flickers green for a moment, then subsides. Magic? Perhaps.",
      "Far off, very far off, someone screams",
      "Silence. Oppressive silence. Is that a good omen? You hope it is...",
      "A rumble of thunder. The sky is restless.",
      "Something lies in the dirt face down. Looks like it's been there a while. Could be a book, or a shoe, or a bounty note ... you decide.",
      "A predator (appropriate to environment) lurks nearby. It's watching you intently.",
      "You wet the bed (no damage, you just smell awful the next day)",
      "A PC has a nightmare and wakes up screaming. Then they go right back to sleep.",
      "A madman is heard nearby, jabbering: 'He is angry, He demands me to please Him!'",
      "A sleeping party member has bad gas. roll CON or wake up annoyed.",
      "A small native animal approaches. If the PCs are kind to it, it reveals itself to be a wildshaped druid, and casts a beneficial spell. If they are unkind it reveals itself to be a druid and casts a detrimental spell. It then leaves.",
      "Everyone's shoes are filled to the brim with dirt. All Party Members deny doing it.",
      "A pixie has replaced all your water with wine.",
      "A pack of wolves is heard howling at the moon nearby, a few minutes later they are heard much farther away.",
      "A brown bear (or a large creature native to the environment) walks into camp, trying to sniff out the player's rations.",
      "A foraging party of chaotic evil bipedals (2 orcs for example) find your camp, but they see you on watch and decide that it would not be wise to try anything. they wander off. (maybe have the player at watch roll intimidation)",
      "You hear the sounds of a wounded animal in a trap. roll a d20, if it crits then the animal is magical and intelligent and may offer compensation for its release. (can let it out or dine on it yourselves, can ignore it, can search for the hunter who placed the trap).",
      "Two cultists carrying a bonded sacrifice pass near enough to your camp that you may hear them. if freed, the sacrifice will run away immediately.",
      "Another adventuring party's camp has settled near by and you can hear their merry celebration over their last adventure. Could potentially trade goods with the nearby party.",
      "A meteor lands nearby",
      "A group of 1d4 wild boar attempt to eat all your food items. Player on watch can potentially lure them away.",
      "A solemn procession of hooded figures carrying lanterns pass nearby.",
      "A friendly giant approaches your camp, asking for directions.",
      "In the morning, before leaving, you notice a valuable item is missing. roll WIS to remember where you left it.",
      "Allergens are particularly bad this night, roll CON or wake up in a coughing, sneezing, red eyed fit. Disadvantage on perception for the following day.",
      "You receive a message through courier or Sending.",
      "A wizard teleports into your camp, he is very flustered. He will reward the PC's if they assist him in some way",
      "a PC won't stop snoring. other players roll CON or are woken up and cannot get back to sleep due to the snoring. Disadvantage on ability checks for 1d4 hours in the morning.",
      "the party has a group dream and the artifact they acquired in it appears when they wake up. A demon is having a little fun. The artifact is likely cursed in some way, you decide...",
      "dream of eating some delicious chicken, only to be awoken by a chicken sitting on them.",
      "You hear a cry from nearby. Upon investigation you find a 1 year old child whose parents were killed by an owlbear (or another environment appropriate creature). The child is hungry and cold.",
      "a small mammal absconds with [1d4] coins, or a mundane small object in the PCs possession.",
      "a cursory check shows the PCs' waterskins have some gross looking growth in it, rendering the water within rancid and undrinkable",
      "you see a shooting star.",
      "a group of priests walks past your camp offering their blessing and prayers for a night at your fire.",
      "A dense fog rolls in and persists through the early morning (disadvantage on perception for 1d4 hours).",
      "A stranger approaches the campsite, making no effort of stealth. They are kind and will comply if the awake PC asks them to remove their weapons. They reveal themselves to be a vampire, in dire need of blood. They ask for a donation, but will walk away disappointed if the player refuses.",
      "Succubus appears to the player, and offers a great time with no strings attached. If the player agrees, she gleefully pulls out a chessboard and asks if they want to be the white or black pieces.",
      "The night has been particularly hot and humid, all PC's that can sweat wake up sticky and smelly",
      "The night has been particularly dry, you wake up with cracked, bleeding lips and a dry thirst.",
      "The night has been particularly wet, the PC's clothes are now all sodden with cold mud.",
      "You find a pseudo-dragon rummaging around the groups treasury, if questioned he'll claim to be a real dragon cursed with being very, very small.",
      "a neglected and beaten mule will wake the party up with it's pained bleating. Deal with it, and you can go back to sleep.",
      "During the middle of the rest, a strange goblin approaches the camp. He is looking for directions to the nearest city. If helped, players can find him in the city to which they pointed him off to. He might even give them a reward.",
      "Crickets chirp incessantly. Their chirping reminds you of an old song you once heard. That song gets stuck in your head.",
      "the fire dies out. It is pitch dark. (get more wood? perhaps leads to something interesting happening, you could reroll on this table to determine what happens while you search for firewood)",
      "A player accidentally slept on top of their arm. That player has -2 to dex rolls for 1d4 hours in the morning.",
      "A snake is found coiled near the camp. If approached it slithers quickly away leaving a nest of 2d4+2 red eggs. They act as a healing potion if added to food.",
      "A puppy, looking to play, wakes the party in the night. A child comes to collect it in the morning and leaves a copper for the brave heroes.",
      " A mysterious stranger comes to the camp and asks to stay the night. Leaves a gilded box of fine tobacco/tea/coffee beans/hard candies when they leave at dawn",
      "A threatening note is stabbed into a nearby tree with a peculiar knife.",
      "Kids are hiding nearby throwing pebbles into the camp.",
      "some mischievous fay/sprite has managed to somehow extend your slumber. You over-sleep by 2d4 hours.",
      "It is a full moon (DM can initiate something based on this or just leave it like nothing happened)",
      "You can hear very distant and faint music",
      "An insect falls into a players mouth while they sleep.",
      "Random PC awakes to find a trinket beneath their backpack (roll from trinket list).",
      "As your party awakens (party member with highest passive perception) sees a glimmer beneath a tree. Upon further inspection he/she finds a skeletal hand clutching 1d4 electrum coins + 5d10 silver pieces.",
      "While packing up, a bird (or bat) does his business on (Random pc) in plain sight of everyone.",
      "A random pc accidentally slept on a poisonous plant (appropriate to the environment) and now has a rash for 1d4 hours.",
      "The night was excessively cold. As a result of the frost, it will take 1 complete action to unsheath weapons using scabbards for 1d8 hours.",
      "You meet a group of adventurers coming the other way. They are friendly and share information. In the morning both groups discover an item of value seems to be missing from their belongings. A mischievous NPC is likely at work here.",
      "Over the course of several hours dozens of large predators begin to gather at the edges of the camp, they aren't hostile but they bar you from leaving. Eventually a druid appears and demands to know why you desecrated a previous location.",
      "your PCs share tales of their homelands or valiant deeds (perhaps embellishing to a degree) - perhaps someone reveals a major background point - inspiration for whichever PC did the best (subjective) job roleplaying.",
      "Lightning strikes a nearby graveyard (1d8 zombies begin to wander within it).",
      "A witch casts sleep on the PC on watch. She leaves a mysterious bottle of liquid on the ground and leaves. the liquid is magically made to look extremely enticing, but have a detrimental effect upon being drunk.",
      "One of the PCs has a lucid dream, the dream begins with the PC waking up in the party's camp and having an urge to wander off. This dream may offer insight into what challenge the party will face, it could also just be nonsense dictated by the PC who has control in the lucid dream. He/she wakes up at the DM's discretion.",
      "A traveling merchant appears when the party wakes up (sells any useful adventuring supplies that the PC may have forgotten to purchase before leaving the city).",
      "A group of 1d4 bandits raid the camp at night, all PCs wake up and must defend themselves. However, right before combat begins a horn is blown and the bandits retreat. I wonder why?",
      "You get a restful sleep and restore one additional hit die in the morning.",
      "At the very edge of your vision, you think you see a unicorn passing through.",
      "There are tremors in the middle of the night. If camped out near structures, awake and make a Dex save or take damage from falling structures (the tremors wake them before the structure falls, no disadvantage). Similarly if camped in a forest then maybe a tree falls, make a dex saving throw.",
      "A large piece of fruit falls on [roll for party member's head]. If their are no trees in site, the most likely culprit is a bird who dropped the fruit it was carrying (feel free to make a monty python joke). The source of the falling fruit could also be a child's prank or something similar. You decide.",
      "A random PC catches a cold, disadvantage on ability checks for 4d6 hours.",
      "A single bard approaches the party and offers them some strong spirits and good stories in exchange for a nights company.",
      "The Sunrise is particularly beautiful. If a party member is on watch at the time, they gain inspiration.",
      "An NPC explains you're not allowed to camp here, and demands 2d4 silver from the party.",
      "A dragon flies overhead. It seems that it did not spot you. Lucky.",
      "A gemstone falls from the sky. What is it worth, you wonder? And where did it come from?",
    ]
  }
];

db.LongRest
  .deleteMany({}) //clear out the collection
  .then(() => db.LongRest.collection.insertMany(longRestSeed)) //re-insert seed
  .then(data => {
    console.log(data.result.n + " Long Rest records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


//**********************Magic Item Collection */
const magicItemSeed = [
  {
    minor: [
      { Name: "Test", Notes: "Testing Notes" },
    ],
    armor: [
      { Name: "Adamantine Armor", Rarity: "Uncommon", Notes: "Medium or heavy, but not hide. This suit of armor is reinforced with adamantine, one of the hardest substances in existence. While you're wearing it, any critical hit against you becomes a normal hit.", Source: "dmg pg.150" },
      { Name: "Mariner's Armor", Rarity: "Uncommon", Notes: "None", Source: "dmg pg 181" },
      { Name: "Mithral Armor", Rarity: "Uncommon", Notes: "medium or heavy, but not hide", Source: "dmg pg. 182" },
      { Name: "Sentinel Shield", Rarity: "Uncommon", Notes: "Shield", Source: "dmg pg.199" },
      { Name: "Shield, +1", Rarity: "Uncommon", Notes: "Shield", Source: "dmg pg.200" },
      // "Armor of Resistance	Armor	Rare	yes		dmg 152",
      // "Armor of Vulnerability	Armor	Rare	yes	plate	dmg 152",
      // "Armor, +1	Armor	Rare			dmg 152",
      // "Arrow - catching Shield	Armor	Rare	yes	shield	dmg 152",
      // "Elven Chain	Armor	Rare		chain shirt	dmg 168",
      // "Glamoured Studded Leather	Armor	Rare		studded leather	dmg 172",
      // "Shield of Missile Attraction	Armor	Rare	yes	shield	dmg 200",
      // "Shield, +2	Armor	Rare		shield	dmg 200",
      // "Animated Shield	Armor	Very Rare	yes	shield	dmg 151",
      // "Armor, +2	Armor	Very Rare			dmg 152",
      // "Demon Armor	Armor	Very Rare	yes	plate	dmg 165",
      // "Dragon Scale Mail	Armor	Very Rare	yes	scale mail	dmg 165",
      // "Dwarven Plate	Armor	Very Rare		plate	dmg 167",
      // "Shield, +3	Armor	Very Rare		shield	dmg 200",
      // "Spellguard Shield	Armor	Very Rare	yes	shield	dmg 201",
      // "Armor of Invulnerability	Armor	Legendary	yes	plate	dmg 152",
      // "Armor, +3	Armor	Legendary			dmg 152",
      // "Efreeti Chain	Armor	Legendary	yes	chain mail	dmg 167",
      // "Plate Armor of Etherealness	Armor	Legendary	yes	plate	dmg 185",
    ],
    potion: [
      { Name: "Test", Rarity: "Uncommon", Notes: "Testing Notes", Source: "dmg pg.150" },
    ],
    ring: [
      { Name: "Test", Rarity: "Uncommon", Notes: "Testing Notes", Source: "dmg pg.150" },
    ],
    rod: [
      { Name: "Test", Rarity: "Uncommon", Notes: "Testing Notes", Source: "dmg pg.150" },
    ],
    scroll: [
      { Name: "Test", Rarity: "Uncommon", Notes: "Testing Notes", Source: "dmg pg.150" },
    ],
    staff: [
      { Name: "Test", Rarity: "Uncommon", Notes: "Testing Notes", Source: "dmg pg.150" },
    ],
    weapon: [
      { Name: "Test", Rarity: "Uncommon", Notes: "Testing Notes", Source: "dmg pg.150" },
    ],
  }
];

db.MagicItem
  .deleteMany({}) //clear out the collection
  .then(() => db.MagicItem.collection.insertMany(magicItemSeed)) //re-insert seed
  .then(data => {
    console.log(data.result.n + " Magic Item records inserted!");
    // process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });


//**********************Minor Magic Collection */
const minorMagicSeed = [
  {
    minorItem: [
      "Wooden Spoon. Carved with rune for 'food'. When tapped on an inert organic or semi-organic material (wood, dirt) it turns that stuff into edible foodstuffs, although it will be mushy and unpalatable.",
      "Amulet of Hope. Shines as bright as a candle, but only when there are no other light sources. Light points back towards dungeon entrance, vaguely. Hums reassuringly when clutched, and warms your hand.",
      "Orphan's Top. Cannot be spun if there are any invisible undead nearby.",
      "Ring of the Adventurous Limb. If worn on a hand, the entire arm will vanish. It will return after 24 hours have elapsed. Roll a d10: 1 - tattoo on arm, 2 - arm injured, 3 - gained a ring, probably a wedding ring, 4 - ring missing, 5-10 - nothing special. It will have a similar effect on legs.",
      "Dust of De-Appearance. Can make things invisible, but wears off if the object moves, is moved, or even wiggles a bit. Best used on inanimate objects or people who can hold really, really, still.",
      "Paired Scrolls. Whatever is written on one appears on the other. Give players a 3x5 card to write on, to limit how much they can write.",
      "Statuette of Baal. Can be fed gold to grow larger, adding to its. Starts out the size of a gold coin. Becomes more complex as it grows larger, adds features and companions. If grown to the size of 100,000 gp, golden tablet reveals great secret. (Does not create or destroy gold, just absorbs it.) If grown to 1,000,000 gp, it will come alive and try to take over the world.",
      "Book of Epic Boredom. When reading, save vs sleep.",
      "Black Cigarette. When smoked, it creates a huge cloud of smoke and allows the smoker to see through smoke and fog. Can be smoked for 5 minutes (or 5 one-minute segments).",
      "Colorthief's Brush. This paintbrush has a needle on the back. If you prick something, you steal all the color from it, but can later paint with those same brilliant colors (stored in the brush, controlled by imagination). If a book is pricked, it will steal the words. The book can then be reconstructed, but it takes a few days of writing for it to be recovered.",
      "Sleeping Draught. Sleep TWICE AS HARD for four hours. You get a full night's rest, but cannot be woken up. Unwilling targets get a save.",
      "Love Potion.",
      "Exploserous Carnelian. When activated, begins to glow hotter and hotter. Explodes like a stick of dynamite after 1d2+2 rounds",
      "Mighty Acorn. When thrown on the ground, immediately grows into a 20' oak.",
      "Mechanical Torchbearer. Follows the associated amulet, or whoever is wearing it. Can hold 6 torches, and relight a new one as the old one burns out. Looks like a mechanical spider, 5' in diameter.",
      "Penguin tokens (1d6). Summons an 80 lb emperor penguin. On land, cannot do anything except waddle to where you direct. In water, can attack as a 1 HD creature. Is destroyed/killed if it takes any damage. Reverts to a small (1 inch) wooden token after 1 minute.",
      "Saint's Bones. About the size of a cigar box. Contains mandible + some carpals. Will rattle ominously when a lie is uttered nearby.",
      "Amber Comb. Any lightning attack within 10' is diverted to the comb instead. If the comb takes 6 or more damage (it is not immune to lightning), it shatters.",
      "Chewed Bone. When chewed, it fills the air with the smell of delicious fresh meat. This is strong enough to mask other odors.",
      "Bottle of Light. When swung overhead (a small chain is attached for this purpose) the bottle absorbs ambient light. Later, the bottle can be unstoppered to allow the light back out again. Can hold up to 5 rounds of light. Special properties of light are preserved: moonlight can induce lycanthropy, for example.",
      "Silver silk handkerchief. 3' on a side. On the command word, it becomes as hard as thick steel. A second command word reverts.",
      "Silver silk rope. As above, except a rope. 25'.",
      "Goggles of the Clown. When worn, everything looks like a clown, and speaks in a mocking, clowning voice. It is very difficult to tell people apart. You can barely tell a knight apart from his horse (which appears as a four-legged clown). In combat, you must make a Wisdom check every round or lose track of which clown is which. On the upside, you are immune to the beauty of nymphs and the ugliness of catoblepas.",
      "Vial of Nightshade. When drunk, it puts the body into a deep coma and ejects the spirit. You can now roam around, incorporeal, until you return to your body. There is a 1-in-6 chance each hour that some mishap befalls you (body possessed by outsider, soul lost forever, etc). Coma lasts for 1d3 days.",
      "Grinning Amulet. Anyone who laughs--even a snicker--near this amulet must make a save or laugh uncontrollably for the next minute. Careful, it's contagious--if a player laughs during this, so does their character.",
      "Trollwax. Tacky and unpalatable. Anything that tastes it must succeed on a check, or be so disgusted that it cannot taste it again. (Takes a week to fully leave the tongue.)",
      "Cheater's Coin. When flipped, it will give whatever result the owner wishes. This is not limited to heads/tails--it can also give results of king, dragon, treasury, pilgrims, etc.",
      "Boots of Independence. When you remove these boots and fail to restrain them (put them in a pack, etc) they will walk back the way they came, all the way back to where you first put them on, with more-or-less the same cadence and sounds. If you walked in a loop somewhere along the line, the boots will get stuck in the loop and repeat.",
      "Tiny tree. Produces three fat apples every day (enough to feed 1 person). Must be watered with 1 cup of blood each day, or it will die. If dead, can be revived with water. Probably found dead/in a chest.",
      "Skeleton gourd. This gourd has a peephole. Anyone holding the gourd up to their face and looking into the peephole will be paralyzed while their brain is filled with visions of dancing skeletons.",
      "Ring of Petrification. Putting this ring on will turn a person to stone, except for the ring. Someone else can remove the ring, and thereby return them to flesh.",
      "Party Book. This book creates audible illusions imitating a party. The state of the party depends on the page the book is opened to. If the book is turned to page 1, you'll hear a couple people setting up silverware. Middle of the book, raucous carousing. Near the end, mostly snores and a few people taking shots.",
      "Quiet Bell. This 2 inch tall silver bell prevents all sound within 1 foot.",
      "Palette of All Colors. Contains 7 mundane palettes (ROYGBIV) and 1 color that is invisible to humans. If the invisible color is painted on a wall, it allows people to see through it. Can paint up to a 3' diameter spot, or 10 3 inch peepholes. Penetrates no more than 6 inches. Getting it on someone's face blinds them.",
      "Slimming Cone. When touched to a creature, it instantly and harmless sucks out all the excess fat from them, ejecting it onto the floor in a big mass.",
      "Grass Whistle. When blown, roll for a random encounter. If the location has no encounter table (some cities, maybe), the PCs will meet someone interesting who wants something.",
      "Naiad-hair Ring. 50% cursed. When worn, PC treats all water as if it had the consistency of a gas. (Don't fall off a boat.) Water is still unbreathable.",
      "Ring of Swimming. Wearer treats air as if it had the consistency of water. You can 'fly' by swimming through the air, but the air is too thick to breath. Other water penalties also apply.",
      "Belt of Cat Imprisonment. When laid on the ground, felines are compelled to sit in the center of it. As charm.",
      "Endless Boots. Cannot stop walking. Will never tire from walking. Cannot run. Walk walk walk.",
      "Spike of Woodland Suicides. Sort of like a hunter's trap. When left in the woods, wild animals will come and impale themselves on it. A verdant forest yield 1d10 rations worth per day, but must be moved daily. Fey will fucking hate you, though.",
      "Salt Block. Any food you carry will never spoil. Doesn't have to be on your person. Applies to a captain and his ship's cargo, for example.",
      "Log of Alarum. This 300 lb log protects those who sleep with their heads against it. If they would be attacked in their sleep, the log has a 90% chance of waking them up (by making bird song).",
      "Demonic Muffin. When eaten, reverses your gravity for 1d6 minutes.",
      "Everice. Never melts.",
      "Chest of the Mundane. Anything placed inside it is covered with an illusion that makes it look worthless and boring. Currently holding 3 peridots worth 10gp each.",
      "Boots of Devouring. Cursed. As soon as you put one on your foot it starts fucking eating you like a garbage disposal. Feeding it lots of booze causes it to vomit out everything in its stomache (which may include some treasure).",
      "Fox-in-a-Bag. Sleeps all the time. As soon as it touches the ground, it will run around like crazy. Dex 18, AC as plate because of high Dexterity + foxy nature. If you pick it up (good luck) it will fall back asleep.",
      "Feather of Bravado. When placed in a hat, it points in the direction of the nearest deadly foe capable of killing the PCs. When placed in the bottom of one's shoe, allows them to run slightly faster.",
      "Gossip Cookies. Each one contains either a random rumor from the most relevant rumor table or 'You will be killed by [random monster from most relevant random encounter table]'. 50% chance of each.",
      "A small silver figurine that, when given away, will return to your pocket after 1d6 minutes. The only way to permanently get rid of it is for the recipient to similarly give it away before the 1d6 minutes expire. (Alternatively, the original owner could die.) Yes, this is great for scamming people. Apparent value: 1d100 silver.",
      "A rock that, when thrown, always hits its target. Always. Cannot do anything that you couldn't conceivably do with a really lucky throw.",
      "A saddle that turns any animal into a horse when it is strapped on. The horse cannot remove the saddle on its own. Currently owned by a bounty hunter who is fond of riding his bounties back to town.",
      "A key that can unlock any door, but cannot be removed from the mechanism until the door is relocked.",
      "A mug that points the way to the nearest tavern when it is balanced on its edge.",
      "An egg cup that can hatch any egg that is placed atop it.",
      "A ring that gives the wearer a magnificent mustache/beard, depending on which finger it is worn on. The left ring finger, for example, always yields a Van Dyke.",
      "A ring that makes your eyeball pop out. This is not a problem, and you can continue to see through the eye just fine, like a spy-eye. Reversible if the ring is removed.",
      "A ring that makes you invisible, but not your equipment or clothing.",
      "An umbrella that allows you float downwards at 60'/round when open, negating fall damage.",
      "Chicken Arrows (1d6). On a hit, target must save vs fear (first arrow only). If sat upon like an egg, quickly turns into an adult chicken. Fletched with white feathers.",
      "Bag of Infinite Manure. Useful for campfires.",
      "Wand of Necromantic Cooking. Can enchant a corpse or cut of meat to cut, prepare, marinate, and cook itself. A slaughtered pig will seek out gravy to roll around in. Sausages will jump into the saucepan, and then seek out your plate when cooked.",
      "Omnidress. Can turn into any type of dress (can even imitate leather armor, but not metal).",
      "Indelible Pen. Can write on anything. Writing is permanent. Works 1d6 times.",
      "Ring that makes the wearer appear to be dead and rotten.",
      "Scones (1d6). When broken in half, it erupts into 1d100 scones (10 scones = food for a day). Alternatively, it can be eaten to restore 1d6 HP.",
      "Wooden hand. 1/day, can turn into a living-but-disembodied hand for 1 hour. Will obey your commands for the duration. Str 1, can climb most walls. Int 6, can see normally, but cannot speak.",
      "Locket. Woman's face inside the amulet always looks towards Meltheria.",
      "Box of paired snails. When one snail dies, so does its mate. Normally used to send very crude, binary messages. There are 1d6 pairs of snails. Feed them leaves.",
      "Hungry coin. Cursed. Will attempt to eat other coins that it comes into contact with. Eats 100 coins an hour.",
      "Armor of Glamour. Looks like a fancy dinner suit. Is actually a suit of plate mail.",
      "Ring of Good Omen. The first time you fail a save against a curse or other magic, the ring breaks and you instead make your save.",
      "Prayer of the Seal. When this sheet of paper is attached to a door or portal, it become locked (until the paper is removed or destroyed.)",
      "Boots of the Aristocrat. When you click them together, your clothes become clean, your skin becomes perfumed, and your hair is styled.",
      "Cursed matches (1d6). When lit, the match does not ignite. Instead, whatever the PC is looking at catches fire. (Tiny match-sized fire. Does no damage unless allowed to progress.)",
      "Preservative jar. Anything placed in this jar enters stasis. Cannot hold anything bigger than a toad. Currently holds a toad.",
      "Library Box. When a non-magical book is placed inside it, another of the same type will be found there the next day.",
      "Monocle of Entropy. If you stare at something long enough, it will fall over. 1 round for a candlestick, 1 hour for a sleeping cow, 1 day for a small tree, 1 year for a cottage or large tree, 100 years for a castle. Must be within 100'.",
      "Girdle of Masculinity/Femininity. Non-cursed because that's way more fun.",
      "Stick of the Titan. Hits for 2d8, then breaks.",
      "Singing frog. Knows 1d6 songs. Good for a free round of drinks in pretty much any bar you walk in to, with only a 20% chance that someone will try to steal it from you at the end of the night.",
      "Perpetual motion machine. Utterly unremarkable in a world filled with magic, but still cool.",
      "Seed of Moon Ice. If dropped in a body of water, will 'freeze' an area up to 20' diameter. If swallowed, you die. If touched, save or die. Leaves awesomely frozen corpses that are not cold to the touch and never thaw.",
      "Small broom. When activated, will attempt to clean the dirtiest thing nearby.",
      "Black cat, winged. When you tap it on the nose, it enters stasis. (This is why you found it in a treasure chest.)",
      "Blindfold of the Spirits. When worn, you can attack incorporeal things as if they weren't. Also, you're blind.",
      "Night's Black Windchimes. 25% chance of alerting you when you would be attacked during the night. If one of the 1d6+1 chimes is broken in half, a refreshing (but also quite cold) breeze blows through the area.",
      "Dust of Vermicide. When thrown, does 1 damage to everything in a 5' diameter area. Alternatively, does 2d6 damage against a swarm.",
      "Sovereign Glue.",
      "Universal Solvent.",
      "Goblin cloak. Invisible while in shadowy areas, but stinks like a mound of goblin shit.",
      "Miser's Flute. When played, all unsecured coins in 20' will leap up and roll after you. They will follow you as long as you play, and as fast as normal running speed. Uphill is fine, stairs are not.",
      "Donkey Legs. These wooden donkey legs can be attached to anything (but are not strong enough to carry literally anything). Once attached, the thing will follow you around like a loyal donkey. For example, you can attach them to a heavy statue and then have it walk itself out of the dungeon. Donkey legs are as strong as two donkeys!",
      "Giant's Ochre. Anything painted with this pigment will double in size. Washes off easily with water or sweat. (If you paint yourself, it'll wash off after 1d6 rounds of sweaty combat).",
      "Mask of the Jester. Anyone seeing it for the first time must save vs charm or be compelled to attack the wearer.",
      "Eye of Zin. If this jewel is pressed into the forehead, the wearer's eyes turn jet black, they gain darkvision, and they are blinded by even small amounts of light (a nearby torch will blind them, for example).",
      "Metal Eye Mask. Wearing this mask obscures you normal vision, but allows you to see from above, sort of like an orbital satellite's view. At sea level, you can see an area 200' in diameter, centered on the mask.",
      "Pink Bead. When smashed on the ground, immediately turns into a huge mountain of fluffy bubbles, similar in consistency to a mass of fused marshmallows. Can cushion a fall or block a hallway or something. 10' in diameter, can be cut through with 6 slashing attacks, lasts 1d6 minutes.",
      "Animate rope with the personality of a loyal dog. 50'. Must be taught knots the way a dog must be taught tricks.",
    ]
  }
];

db.MinorItem
  .deleteMany({}) //clear out the collection
  .then(() => db.MinorItem.collection.insertMany(minorMagicSeed)) //re-insert seed
  .then(data => {
    console.log(data.result.n + " Minor Magic Item records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

