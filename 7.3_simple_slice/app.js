const fruits = ["Banana", "Orange", "Lemon",
"Apple", "Mango"];

 let noOrangeLemonArr = fruits.slice(0, fruits.indexOf("Orange")).concat((fruits.slice(fruits.indexOf("Lemon")+1)))
 
console.log(noOrangeLemonArr)