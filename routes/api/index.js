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
const userRoutes = require("./user");


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
//User Route
router.use("/user", userRoutes);


module.exports = router;
