const router = require("express").Router();
const GeneratorController = require("../../controllers/GeneratorContoller");

// Matches with "/api/magic"
router.route("/")
  .get(GeneratorController.getMagicItems)

module.exports = router;
