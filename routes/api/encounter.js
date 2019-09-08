const router = require("express").Router();
const GeneratorController = require("../../controllers/GeneratorContoller");

// Matches with "/api/encounter"
router.route("/")
  .get(GeneratorController.getEncounter)

module.exports = router;
