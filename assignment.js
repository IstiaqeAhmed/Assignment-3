//https://github.com/IstiaqeAhmed/Assignment-3

// function kilometerToMeter(distance){
    
//    if(distance > 0){
//     var kilometer = 0;
//     kilometer = distance * 1000;
//     return kilometer;
//    }
//    else{
//       "error number" ;
//    }
// }

// var count = kilometerToMeter(5);
// console.log(count)

 function budgetCalculator(watch,mobile,laptop){
    var budget = 0;
    if(budget==watch){
        var budget;
        budget = watch * 50;
    }
    else if(budget==mobile){
        var budget = mobile * 100;
        budget = (mobile * 100) + (watch * 50);
    }
   else if(budget==laptop){
    var budget = laptop * 500;
    budget = (mobile * 100) + (watch * 50) + (laptop * 500);
   }
    return budget;
}
var count = budgetCalculator(3, 2, 1);
console.log(count)




// function hotelCost(stayInHotel){
//     var dailyCost = 0;
//     if(stayInHotel<=10){
//         dailyCost = stayInHotel * 100;
//     }
//     else if(stayInHotel<=20){
//         var firstPart = 10 * 100;
//         var remaining = stayInHotel - 10;
//         var secondPart = remaining * 80;
//         dailyCost = firstPart + secondPart;
//     }
//     else{
//         var firstPart = 10*100;
//         var secondPart = 10 * 80;
//         var remaining = stayInHotel - 20;
//         var thirdPart = remaining * 50;
//         dailyCost = firstPart + secondPart + thirdPart;
//     }
//     return dailyCost;
// }
// var count = hotelCost(25);
// console.log(count)

   function  megaFriend (name){
    var max = name[0].length;
    var max = name[0].length;
    name.index(v => max = Math.max(max, v.length));
    result = name.filter(v => v.length == max);
    return result;
   }
   var name = ["siam", "monir", "sakib", "karimmohhh" , "sia" , "fia" , "istiaqeyuytiyt"];
   var output = megaFriend(name);
   console.log(output);
 

    
  


