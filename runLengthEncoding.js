function runLengthEncoding(string) {
  // Write your code here.
  //   pass 14 test out of 15, figuring out TF why it fails test 9
  let count = 1;
  //   let runLengthEncodingObj = {};
  let runLengthEncodingArray = [];
  let n;
  for (char in string) {
    if (
      string[char] === string[parseInt(char) + 1] &&
      string[parseInt(char) + 1] === string[char]
    ) {
      count++;
      if (count == 9) {
        n = count + string[char];
        count = 0;
        runLengthEncodingArray.push(n);
      }
      // console.log(count, n)
    } else {
      n = count + string[char];
      // console.log(n)
      count = 1;
      runLengthEncodingArray.push(n);
    }
  }
  console.log(runLengthEncodingArray);
  return runLengthEncodingArray.join("");
}

// Do not edit the line below.
exports.runLengthEncoding = runLengthEncoding;