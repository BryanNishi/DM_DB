const router = require("express").Router();
const GeneratorController = require("../../controllers/GeneratorContoller");

// Matches with "/api/trap"
router.route("/")
  .get(GeneratorController.getTrap)

module.exports = router;
