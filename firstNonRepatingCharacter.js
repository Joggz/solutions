function firstNonRepeatingCharacter(string) {
  // Write your code here.
  // 	 keeps track of how many time a character occurs
  let stringObj = {};
  let listofNonRepeated = [];
  // 	convert argument to another data type
  let convertedString = string.split("");

  for (char of convertedString) {
    if (!stringObj.hasOwnProperty(char)) {
      stringObj[char] = 1;
    } else {
      stringObj[char] = stringObj[char] + 1;
    }
  }
  let newArray = Object.values(stringObj);

  for (let i in string) {
    if (stringObj[string[i]] === 1) {
      listofNonRepeated.push(i);
    }
  }

  return listofNonRepeated.length ? parseInt(listofNonRepeated[0]) : -1;
}
