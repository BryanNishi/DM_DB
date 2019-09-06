const router = require("express").Router();
const GeneratorController = require("../../controllers/GeneratorContoller");

// Matches with "/api/chest"
router.route("/")
  .get(GeneratorController.getChest)

module.exports = router;
