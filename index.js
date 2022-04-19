function isPalindrome(word) {
  let newString = ''
  for(const char of word) {
    newString = char + newString
  }
  if(newString === word) {
    return true
  } else {
    return false
  }
}

/* 
1.create a variable with an empty string
2.iterate through give string(word) 
3. add each char to the beginning of the "empty" string variable
4. run an if else statement
5. if given word === new variable, return true
6. else return false
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
