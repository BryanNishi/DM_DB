const router = require("express").Router();
const innRoutes = require("./inn");
const landRoutes = require("./land");
const dungeonRoutes = require("./dungeon");
const treasureRoutes = require("./treasure");
const nameRoutes = require("./name");
const weaponRoutes = require("./weapon");
const cityRoutes = require("./city");
const failRoutes = require("./fail");
const trapRoutes = require("./trap");
const chestRoutes = require("./chest");
const encounterRoutes = require("./encounter");
const longRestRoutes = require("./long");
const magicItemRoutes = require("./magic");
const minorItemRoutes = require("./minor");


//Inn Route
router.use("/inn", innRoutes);
//Land Route
router.use("/land", landRoutes);
//Dungeon Route
router.use("/dungeon", dungeonRoutes);
//Treasure Route
router.use("/treasure", treasureRoutes);
//Name Route
router.use("/name", nameRoutes);
//Weapon Route
router.use("/weapon", weaponRoutes);
//City Route
router.use("/city", cityRoutes);
//Fail Route
router.use("/fail", failRoutes);
//Trap Route
router.use("/trap", trapRoutes);
//Chest Route
router.use("/chest", chestRoutes);
//Encounter Route
router.use("/encounter", encounterRoutes);
//Long Rest Route
router.use("/long", longRestRoutes);
//Magic Item Route
router.use("/magic", magicItemRoutes);
//Minor Magic Item Route
router.use("/minor", minorItemRoutes);


module.exports = router;
