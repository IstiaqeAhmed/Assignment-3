//https://github.com/IstiaqeAhmed/Assignment-3
function hotelCost(stayInHotel){
    var dailyCost = 0;
    if(stayInHotel<=10){
        dailyCost = stayInHotel * 100;
    }
    else if(stayInHotel<=20){
        var firstPart = 10 * 100;
        var remaining = stayInHotel - 10;
        var secondPart = remaining * 80;
        dailyCost = firstPart + secondPart;
    }
    else{
        var firstPart = 10*100;
        var secondPart = 10 * 80;
        var remaining = stayInHotel - 20;
        var thirdPart = remaining * 50;
        dailyCost = firstPart + secondPart + thirdPart;
    }
    return dailyCost;
}
var count = hotelCost(25);
console.log(count)