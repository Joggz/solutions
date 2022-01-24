function runLengthEncoding(string) {
  // Write your code here.
  //   pass 14 test out of 15, figuring out TF why it fails test 9
  let count = 1;
  //   let runLengthEncodingObj = {};
  let runLengthEncodingArray = [];
  let n;
  for (let i = 1; i < string.length; i++) {
    const curr = string[i];
    const prev = string[i - 1];
    //  two base case

    if (curr !== prev || count === 9) {
      runLengthEncodingArray.push(count.toString());
      runLengthEncodingArray.push(prev);
      count = 0;
    }
    // increment  count till one of the condition is met
    //  repeat.
    count++;

    // if (
    //   string[char] === string[parseInt(char) + 1] &&
    //   string[parseInt(char) + 1] === string[char]
    // ) {
    //   count++;
    //   if (count == 9) {
    //     n = count + string[char];
    //     count = 0;
    //     runLengthEncodingArray.push(n);
    //   }
    //   // console.log(count, n)
    // } else {
    //   n = count + string[char];
    //   // console.log(n)
    //   count = 1;
    //   runLengthEncodingArray.push(n);
    // }
  }
  runLengthEncodingArray.push(count.toString());
  runLengthEncodingArray.push(string[string.length - 1]);

  console.log(runLengthEncodingArray);
  return runLengthEncodingArray.join("");
}

console.log(runLengthEncoding("AAAAAAAAAAAAABBCCCCDD"));
// Do not edit the line below.
exports.runLengthEncoding = runLengthEncoding;
