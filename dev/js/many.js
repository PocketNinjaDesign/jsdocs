

/**
 * Many script, basically just contains many functions for
 * testing in this jsDocs
 *
 * @module VD/widgets/many
 *
 * @param {String} manyName - Name of the many but not of the few
 * @param {Object} dropdown - Dropdown object for accessing dropdown features
 * @param {Object} tooltip - Tooltip object for accessing tooltip features
 * @param {Array} eggPlant - List of eggplants that people have
 * @param {String} sausageDog - Name of the worlds smallest sausage dog
 * @param {Number} cucumber - Cucumber number
 * @returns {Object} return - list of public functions
 */
VD.widgets.world = function(manyName, dropdown, tooltip, eggPlant, sausageDog, cucumber) {

  /**
   * @type {String}
   * @constant
   * */
  var CONSTANT_TEXT = "I_AM_CONSTANT_TEXT";

  /**
   * name - sets to worldName
   * @var {String} name
   */
  var name = manyName;

  /**
   * crazy - sets to worldName
   * @var {Boolean} crazy
   */
  var crazy = true;

  /**
   * eggplantList - A list of eggplant names
   * @var {Array} eggplantList
   */
  var eggplantList = eggPlant || [];

  /**
   * options - Many options
   * @var {Object} options
   */
  var options = {};

  /**
   * Sleeping state of sausage dog
   * @var {Boolean} sausageDogAwake
   */
  var sausageDogAwake = false;

  /**
   * Returns name
   *
   * @function getName
   * @returns {String} return - the world name
   *
   */
  var getName = function() {
    return name;
  };

  /**
   * Sets crazy state of the world
   *
   * @function setCrazy
   * @param {Boolean} [bCrazy=false] - For setting to crazy or not
   */
  var setCrazy = function(bCrazy) {
    crazy = bCrazy || false;
  };

  /**
   * Returns the options available
   *
   * @function getOptions
   * @returns {Object} return - List of options
   */
  var getOptions = function() {
    return options;
  };

  /**
   * Sets the sausage dogs sleep state
   *
   * @function setDogsSleepState
   * @param {Boolean} state - For setting to sleeping or not
   */
  var setDogsSleepState = function(state) {
    sausageDogAwake = state || false;
  };

  /**
   * Adds 100 to any given value
   *
   * @function add100
   * @param {Number} num - For setting to sleeping or not
   *
   * @example
   * add100(3000);
   * // 3100
   */
  var add100 = function(num) {
    return num + 100;
  };

  /**
   * Returns the list of eggplants
   *
   * @function getEggPlantList
   * @returns {Array} return - List of eggplants
   */
  var getEggPlantList = function() {
    return eggplantList;
  };

  return {
    getName: getName,
    setCrazy: setCrazy,
    getOptions: getOptions,
    setDogsSleepState: setDogsSleepState,
    add100: add100,
    getEggPlantList: getEggPlantList
  }
};