const router = require("express").Router();
const GeneratorController = require("../../controllers/GeneratorContoller");

// Matches with "/api/long"
router.route("/")
  .get(GeneratorController.getLongRest)

module.exports = router;
