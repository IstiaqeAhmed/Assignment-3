//github.com/IstiaqeAhmed/Assignment-3

//kilometerToMeter
function kilometerToMeter(distance) {
  if (distance > 0) {
    var kilometer = 0;
    kilometer = distance * 1000;
    return kilometer;
  } else {
    return "write your correct number";
  }
}

//budgetCalculator
function budgetCalculator(clockQuantity, mobileQuantity, laptopQuantity) {
  if (clockQuantity > 0 || mobileQuantity > 0 || laptopQuantity > 0) {
    var costOfClock = clockQuantity * 50;
    var costOfMobile = mobileQuantity * 100;
    var costOfLaptop = laptopQuantity * 500;
    var amountOfBudget = costOfClock + costOfMobile + costOfLaptop;
    return amountOfBudget;
  }

  // Zero or Negetive item can not be buy
  else if (clockQuantity <= 0 && mobileQuantity <= 0 && laptopQuantity <= 0) {
    return "without product you can not give price ";
  }
}
//hotelCost
function hotelCost(stayInHotel) {
  if (stayInHotel <= 0) {
    return "You do not have to pay";
  }
  var dailyCost = 0;
  if (stayInHotel == 0) {
    console.log("not stay in hotel");
  }
  if (stayInHotel <= 10) {
    dailyCost = stayInHotel * 100;
  } else if (stayInHotel <= 20) {
    var firstPart = 10 * 100;
    var remaining = stayInHotel - 10;
    var secondPart = remaining * 80;
    dailyCost = firstPart + secondPart;
  } else {
    var firstPart = 10 * 100;
    var secondPart = 10 * 80;
    var remaining = stayInHotel - 20;
    var thirdPart = remaining * 50;
    dailyCost = firstPart + secondPart + thirdPart;
  }
  return dailyCost;
}
var count = hotelCost(0);
console.log(count);

//megaFriend
function megaFriend(name) {
  var longestName = "";

  name.findIndex(function (bigName) {
    if (bigName.length > longestName.length) {
      longestName = bigName;
    }
  });

  return longestName;
}
