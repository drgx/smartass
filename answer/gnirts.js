/**
 * Given a string, return a reversed version of it
 *
 * Sample input: 'moardake'
 * Sample output: 'ekadraom'
 *
 * @param String input
 * @return String output
 */

module.exports = function gnirts(string) {
	var result='';
	for (var a = string.length-1;  0 <= a; a--) {
		result+=string[a];
	}
  return result;
};
