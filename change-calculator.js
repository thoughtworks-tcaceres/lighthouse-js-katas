let calculateChange = function(total, cash) {
  // Your code here
  var change = {};
  var remainingMoney = cash - total;

  // twentyDollar 2000
  // tenDollar 1000
  // fiveDollar 500
  // twoDollar 200
  // oneDollar 100
  // quarter 25
  // dime 10
  // nickel 5
  // penny 1
  if (Math.floor(remainingMoney / 2000) > 0) {
    change.twentyDollar = Math.floor(remainingMoney / 2000);
    remainingMoney = remainingMoney - 2000 * change.twentyDollar;
  }
  if (Math.floor(remainingMoney / 1000) > 0) {
    change.tenDollar = Math.floor(remainingMoney / 1000);
    remainingMoney = remainingMoney - 1000 * change.tenDollar;
  }
  if (Math.floor(remainingMoney / 500) > 0) {
    change.fiveDollar = Math.floor(remainingMoney / 500);
    remainingMoney = remainingMoney - 500 * change.fiveDollar;
  }
  if (Math.floor(remainingMoney / 200) > 0) {
    change.twoDollar = Math.floor(remainingMoney / 200);
    remainingMoney = remainingMoney - 200 * change.twoDollar;
  }
  if (Math.floor(remainingMoney / 100) > 0) {
    change.oneDollar = Math.floor(remainingMoney / 100);
    remainingMoney = remainingMoney - 100 * change.oneDollar;
  }
  if (Math.floor(remainingMoney / 25) > 0) {
    change.quarter = Math.floor(remainingMoney / 25);
    remainingMoney = remainingMoney - 25 * change.quarter;
  }
  if (Math.floor(remainingMoney / 10) > 0) {
    change.dime = Math.floor(remainingMoney / 10);
    remainingMoney = remainingMoney - 10 * change.dime;
  }
  if (Math.floor(remainingMoney / 5) > 0) {
    change.nickel = Math.floor(remainingMoney / 5);
    remainingMoney = remainingMoney - 5 * change.nickel;
  }
  if (remainingMoney > 0) {
    change.penny = remainingMoney;
    remainingMoney = remainingMoney - change.penny;
  }

  return change;
};

console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));
