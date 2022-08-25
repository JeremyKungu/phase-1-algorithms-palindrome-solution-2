function isPalindrome(word) {
  // Write your algorithm here
  let length = word.length;
  
  for (let i = 0; i < length / 2; i++) {
    const j = length - 1 - i;

    if(word[i] !== word[j]) {
      return false;
    }
  }
  return true;
}

isPalindrome("racecar");

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
