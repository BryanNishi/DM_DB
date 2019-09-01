const router = require("express").Router();
const GeneratorController = require("../../controllers/GeneratorContoller");

// Matches with "/api/fail"
router.route("/")
  .get(GeneratorController.getFail)

module.exports = router;
