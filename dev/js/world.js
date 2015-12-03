

/**
 * For looking at our world
 *
 * @module VD/widgets/world
 *
 * @param {String} worldName - Name of world defaults to "Earth"
 * @returns {Object} return - list of public functions
 */
VD.widgets.world = function(worldName) {
  /**
   * name - sets to worldName
   * @var {String} name
   */
  var name = worldName || 'Earth';

  /**
   * State for world being crazy
   * @var {Boolean} crazy
   */
  var crazy = false;

  /**
   * Sets crazy state of the world
   *
   * @function isCrazy
   * @param {Boolean} bCrazy - For setting to crazy or not
   */
  var isCrazy = function(bCrazy) {
    crazy = bCrazy || false;
  };

  /**
   * Sets crazy state of the world
   *
   * @function getWorldName
   * @returns {String} return - Returns the name of the world
   */
  var getWorldName = function() {
    return name;
  };

  return {
    isCrazy: isCrazy,
    getWorldName: getWorldName
  }
};