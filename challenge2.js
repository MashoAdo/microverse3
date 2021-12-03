//https://www.hackerrank.com/challenges/beautiful-days-at-the-movies

function beautifulDays(i, j, k) {
  // Write your code here
  var count = 0;
  while (i <= j) {
    var temp = i;
    var digit = 0;
    var reverse = 0;

    while (temp) {
      digit = temp % 10; 
      reverse = reverse * 10 + digit; 
      temp = (temp / 10) | 0; 
    }

    console.log(i, reverse);
    var diff = Math.abs(i - reverse);
    if (diff % k == 0) count++;
    i++;
  }
  return count;
}

beautifulDays(20, 23, 6);
