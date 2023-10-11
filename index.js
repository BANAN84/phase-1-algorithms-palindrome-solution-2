function isPalindrome(word) {
  // Write your algorithm here
  // creat a loop to go through each elemnt in the array until the middle
  for ( let i=0; i< word.length/2; i++) {
    
    let j= word.length -1 -i;
    if (word[i] == word[j]){
       return true;
    } 
    else { return false  ;}
  }
   
}

/* 
  Add your pseudocode here 
  convert the word into an array 
  make a loop to go through each elemnt in the array until the middle
  compare first letter with the last one and the second one 
  with the elemetn before the last one ...etc
  return true if thy match and return false if they dont 

*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
    /* diana => flase 
     mom => true */
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
