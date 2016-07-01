/**
 * Given two date object, check if the second date is the next day of the first
 * date.
 *
 * Sample input 1: Date(17 Jan 2016 15:00:00)
 * Sample input 2: Date(19 Jan 2016 10:00:00)
 * Sample output: false // 2 day after
 *
 * @param Date date1
 * @param Date date2
 * @return Boolean
 */

module.exports = function isTomorrow(date1, date2) {
	date1.setHours(0);
	date1.setMinutes(0);
	date1.setSeconds(0);
	var tommorow = new Date(date1.setDate(date1.getDate()+1));
	if (date1.getFullYear() == date2.getFullYear() && date1.getMonth() == date2.getMonth() && date1.getDate() == date2.getDate()) {
		return true;
	}
  return false;
};
