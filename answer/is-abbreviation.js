/**
 * Given two string, check if the second string is a possible abbreviation
 * of the first string. Every words in source string must have a partial
 * abbreviation, and the partial abbreviation should not have any jump in
 * characters (British can be partially abbreviated into Brit or Br but not Brish)
 *
 * Sample input source: "British exit"
 * Sample input abbr: "Brexit"
 * Sample output: true // Br..... exit
 *
 * Sample input source: "British exit"
 * Sample input abbr: "Brishit"
 * Sample output: false // Bri..sh ..it
 *                             ^- char jump
 *
 * @param String source
 * @param String abbr
 * @return Boolean
 */
function checkAt(currentSource, currentAbb, fullAbb) {
	var count =0;
	var temp;
	while(true) {			
		if (currentSource.indexOf(currentAbb.substr(0, count+1)) == -1 || (count+1) == currentSource.length) {
			var index = currentSource.indexOf(currentAbb[count-1])+1;
			return {
				count: count,
				abb: currentAbb.substr(index),
				lastAbb: fullAbb.substr(fullAbb.indexOf(currentAbb)-1)
			}
		}
		count++;	
	}
}

module.exports = function isAbbreviation(source, abb) {
	source = source.toLowerCase();
	abb = abb.toLowerCase();
	var fullAbb = abb;
	var sourceSplited = source.split(' ');
	var maxSource = sourceSplited.length;
	
	var temp;
	var isLastAbb = true;
	var lastCount = 0;
	var lastAbb = ''
	for (var a =0; a< maxSource; a++){
		temp = checkAt(sourceSplited[a], abb, fullAbb);		
		if (temp.count !=0) {
			lastCount = temp.count;
			lastAbb = abb;	
		}
		abb = temp.abb;
		if (temp.count !=0) {
			lastCount = temp.count;

		}
		if (temp.count == 0 || temp.abb == '' ) {
			if (temp.lastAbb != '' && isLastAbb && a != 0 ) {
				a = a-1;
				isLastAbb = false;
				abb = temp.lastAbb;
			} else {
				return false;	
			}				
		} else {
			isLastAbb = true;	
		}
		
	}
		return true;				
}	


