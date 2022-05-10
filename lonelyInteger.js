// Hackerrank solution lonely Integer
// Javascript solution

function lonelyInteger(a) {
  return a.reduce((x, y) => x ^ y, 0)
}
