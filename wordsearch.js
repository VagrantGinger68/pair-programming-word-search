const wordSearch = (letters, word) => {
  const verticalJoin = [];

  const horizontalJoin = letters.map((ls) => ls.join(""));
  for (let l of horizontalJoin) {
    if (l.includes(word)) {
      return true;
    }
  }
  for (let col = 0; col < letters.length; col++) {
    let tempCol = "";
    for (let row = 0; row < letters[col].length; row++) {
      tempCol += letters[row][col];
    }
    verticalJoin.push(tempCol);
  }
  for (let letter of verticalJoin) {
    if (letter.includes(word)) {
      return true;
    }
  }
  return false;
};

module.exports = wordSearch;