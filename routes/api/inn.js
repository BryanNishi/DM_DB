const express = require('express');
const router = express.Router();
const GeneratorController = require("../../controllers/GeneratorContoller");


// Matches with "/api/inn"
router.route("/").get(GeneratorController.getInn)

// router.get('/', GeneratorController.getInn);

module.exports = router;
