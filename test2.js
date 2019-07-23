
function test2(n) {
  if ((isNaN(parseInt(n))) || (n <= 0)) {
    console.log("The ticket number must be a positive integer.")
    return false;
  }

  if ((n.length % 2) != 0) {
    console.log("The ticket number must be  an even number of digits.");
    return false;
  }

  if ((n <= 10) || (n > 106)) {
    console.log("The ticket number must be greater than or equal to 10 and less than 106.");
    return false;
  }

  let firstHalf = n.substring(0, n.length / 2);
  let secondHalf = n.substring((n.length / 2), n.length);

  let firstHalfSum = 0;
  for (let index1 = 0; index1 < firstHalf.length; index1++) {
    let end1 = index1 + 1;
    firstHalfSum += parseInt(firstHalf.substring(index1, end1));
  }

  let secondHalfSum = 0;
  for (let index2 = 0; index2 < secondHalf.length; index2++) {
    let end2 = index2 + 1;
    secondHalfSum += parseInt(secondHalf.substring(index2, end2));
  }

  if (firstHalfSum !== secondHalfSum) {
    return false;
  }

  return true;
}

console.log("88 is a lucky ticket number? " + test2("88"));