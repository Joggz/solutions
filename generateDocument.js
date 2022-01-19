function generateDocument(characters, document) {
  // Write your code here.
  let characterObj = {};
  // 	if this word exists in the world of English
  //  keeps track of previous characters
  let canBeGenerated = [];
  for (char in characters) {
    if (!characterObj.hasOwnProperty(characters[char])) {
      characterObj[characters[char]] = 1;
    } else {
      characterObj[characters[char]] = characterObj[characters[char]] + 1;
    }
  }

  for (char2 in document) {
    if (
      !characterObj.hasOwnProperty(document[char2]) ||
      characterObj[document[char2]] === 0
    ) {
      canBeGenerated.push(false);
      //   return false
    } else {
      if (characterObj[document[char2]] >= 0) {
        characterObj[document[char2]] = characterObj[document[char2]] - 1;
        canBeGenerated.push(true);
      }
    }
  }

  let check = (el) => el == true;

  generatedOrNot = canBeGenerated.every(check); // 0(n)
  // return true;
  return canBeGenerated;
}
