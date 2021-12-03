//https://www.hackerrank.com/challenges/breaking-best-and-worst-records

function breakingRecords(scores) {
  var min = scores[0];
  var max = scores[0];
  var maxbreak = 0;
  var minbreak = 0;
  scores.map(function (el) {
    if (el > max) {
      max = el;
      maxbreak++;
    } else if (el < min) {
      min = el;
      minbreak++;
    }
  });
  return [maxbreak, minbreak];
}

breakingRecords([3, 4, 21, 36, 10, 28, 35, 5, 24, 42]);
