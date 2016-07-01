/**
 * You'll be given an array of integer that represent a chart. Array index
 * is an x coordinate, and array value is a y coordinate. Your job is to
 * determine all the peaks in the graph. Peak is a point where previous value
 * and next value (if both exist) is lower than the point itself.
 *
 * Sample input: [1, 3, 5, 2, 3, 2, 5, 1]
 * Sample output: [5, 3, 5] // 3 peaks
 * Visualization:
 *
 * |     p1          p3
 * |     .           .
 * |    / \    p2   / \
 * |   .   \   .   /   \
 * |  /     \./ \./     \
 * | /                   \
 * |_______________________
 *
 * @param Array.<number> input
 * @return Array.<number> output
 */

module.exports = function peakPoint(chart) {
  var peaks = [];
  for (var a= 0; a< chart.length; a++) {
  	if (a == 0) {
  		if(chart[a] > chart[a+1]) peaks.push(chart[a]);
  	}
  	else if (a +1  == chart.length) {
  		if(chart[a] > chart[a-1]) peaks.push(chart[a]);	
  	} else {
  		if(chart[a] > chart[a+1] && chart[a] > chart[a-1])  {
       peaks.push(chart[a]); 
      }
  	}
  }


  return peaks;
};

