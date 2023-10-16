function recursiveCount(num = 0) {
  console.log(num);
  num >= 9 ? null : recursiveCount(++num);
}

if (require.main === module) {
  recursiveCount();
}

module.exports = recursiveCount;

// OPTIONAL
// Please add your pseudocode to this file
// And a written explanation of your solution
