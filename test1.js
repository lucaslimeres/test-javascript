
function test1(s1, s2) {
  s1 = s1.toLowerCase();
  s2 = s2.toLowerCase();

  if ((!onlyLetters(s1)) || (!onlyLetters(s2))) {
    console.log("The strings must be consist of latin letters a-z.")
    return 0;
  }

  if ((s1.length <= 1) || (s1.length >= 15)) {
    console.log("The string must be longer than 1 and less than 15 characters.");
    return 0;
  }

  if ((s2.length <= 1) || (s2.length >= 15)) {
    console.log("The string must be longer than 1 and less than 15 characters.");
    return 0;
  }

  let response = 0;
  const arrS1 = [];

  for (index1 = 0; index1 < s1.length; index1++) {
    let end1 = index1 + 1;
    const s1Char = s1.substring(index1, end1);

    let keyChar = arrS1.indexOf(s1Char);
    let countChar = 1;
    while (keyChar != -1) {
      countChar++;
      keyChar = arrS1.indexOf(s1Char, keyChar + 1);
    }

    for (index2 = 0; index2 < s2.length; index2++) {
      let end2 = index2 + 1;
      const s2Char = s2.substring(index2, end2);

      if (s1Char == s2Char) {
        countChar--;
      }

      if (countChar == 0) {
        response++;
        break;
      }
    }

    arrS1.push(s1Char);
  }

  return response;
}

function onlyLetters(text) {
  let er = /^[a-záàâãéèêíïóôõöúçñ ]+$/;
  return (er.test(text));
}

console.log("Strings have " + test1('AABCC', 'ADCAA') + " common characters");