const router = require("express").Router();
const GeneratorController = require("../../controllers/GeneratorContoller");

// Matches with "/api/city"
router.route('/')
.get(GeneratorController.getCity)

module.exports = router;
