const router = require("express").Router();
const GeneratorController = require("../../controllers/GeneratorContoller");

// Matches with "/api/weapon"
router.route("/")
  .get(GeneratorController.getWeapon)

module.exports = router;
