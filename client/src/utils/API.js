import axios from "axios";

export default {
  getMonster: function (monsters) {
    return axios.get("http://www.dnd5eapi.co/api/monsters/" + monsters);
  },

  getNextPage: function(next){
    return axios.get(next);
  },

  getSpell: function (spells) {
    return axios.get("http://www.dnd5eapi.co/api/spells/" + spells);
  },
  getClass: function (classes) {
    return axios.get("http://www.dnd5eapi.co/api/classes/" + classes);
  },
  getStartingEquipment: function (classIndex) {
    return axios.get("http://www.dnd5eapi.co/api/startingequipment/" + classIndex)
  },
  getfeature: function (features) {
    return axios.get("http://www.dnd5eapi.co/api/features/" + features);
  },
  getInn: function () {
    return axios.get("/api/inn");
  },
  getLand: function () {
    return axios.get("/api/land");
  },
  getDungeon: function () {
    return axios.get("/api/dungeon");
  },
  getTreasure: function () {
    return axios.get("/api/treasure");
  },
  getName: function () {
    return axios.get("/api/name");
  },
  getWeapon: function () {
    return axios.get("/api/weapon");
  },
  getCity: function () {
    return axios.get("/api/city");
  },
  getFail: function () {
    return axios.get("/api/fail");
  },
  getTrap: function () {
    return axios.get("/api/trap");
  },
  getCombat: function () {
    return axios.get("/api/combat");
  },
  getEncounter: function () {
    return axios.get("/api/encounter");
  },
  getEnvironment: function () {
    return axios.get("/api/environment");
  },
  getMinor: function () {
    return axios.get("/api/minor");
  },
  getHook: function () {
    return axios.get("/api/hook");
  },
  getLongRest: function () {
    return axios.get("/api/long");
  },
  getLoot: function () {
    return axios.get("/api/loot");
  },
  getMagicItems: function () {
    return axios.get("/api/magic");
  },
  getRumors: function () {
    return axios.get("/api/rumors");
  },
  getChest: function () {
    return axios.get("/api/chest");
  },
 
};

