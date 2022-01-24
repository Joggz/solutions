function runLengthEncoding(string) {
  // Write your code here.
  let count = 1;

  let runLengthEncodingArray = [];

  for (let i = 1; i < string.length; i++) {
    const curr = string[i];
    const prev = string[i - 1];

    if (curr !== prev || count === 9) {
      runLengthEncodingArray.push(count.toString());
      runLengthEncodingArray.push(prev);
      count = 0;
    }

    count++;
  }
  runLengthEncodingArray.push(count.toString());
  runLengthEncodingArray.push(string[string.length - 1]);

  return runLengthEncodingArray.join("");
}

// Do not edit the line below.
exports.runLengthEncoding = runLengthEncoding;
