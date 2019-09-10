const db = require("../models");


module.exports = {
  // Gets all Inn Names
  getInn: function (req, res) {
    db.Inn
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //get all land names
  getLand: function (req, res) {
    db.Land
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //get all dungeon names
  getDungeon: function (req, res) {
    db.Dungeon
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //get all treasure
  getTreasure: function (req, res) {
    db.Treasure
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //get all names
  getName: function (req, res) {
    db.Name
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //get all weapons
  getWeapon: function (req, res) {
    db.Weapon
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  //get all city/towns
  getCity: function (req, res) {
    db.City
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //get all fails
  getFail: function (req, res) {
    db.Fail
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //get all traps
  getTrap: function (req, res) {
    db.Trap
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //get all chests
  getChest: function (req, res) {
    db.Chest
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //get all encounters
  getEncounter: function (req, res) {
    db.Encounter
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //get all long rests
  getLongRest: function (req, res) {
    db.LongRest
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //get all magic items
  getMagicItems: function (req, res) {
    db.MagicItem
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //get all minor magic items
  getMinorItems: function (req, res) {
    db.MinorItem
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  //get user data
  getUsers: function (req, res) {
    db.User
      .find(req.query)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  postUser: function (req, res) {
    db.User.create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }

};
