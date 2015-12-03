/**
 * For saying hello to anybody in the world
 *
 * @module VD/widgets/hello
 *
 * @param {String} name - Your name which defaults to "John Doe"
 * @returns {Object} return - list of public functions
 */
VD.widgets.hello = function(name) {

  /** {String} helloTxt - Hello text which just says "hello" */
  var helloTxt = 'Hello';

  /** {String} name  - sets name from parameter */
  name = name || 'John Doe';

  /**
   * For saying hello to anybody in the world
   *
   * @function say
   * @param {String} other - Somebody else or object
   * @returns {String} return - sentence saying hello to txt with you your name
   */
  var say = function(other) {
    return name + ' says ' + helloTxt + ' ' + other;
  };

  return {
    say: say
  }
};