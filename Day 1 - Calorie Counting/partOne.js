const { input } = require("./input.js");

let elfCalorieArray = [];
input.forEach((elf, i) => {
    let calorieTotal = 0;
    let calorieArray = elf.split("\n");
    calorieArray.forEach((calorie) => {
        calorieTotal += +calorie;
    });
    elfCalorieArray[i] = calorieTotal;
});
console.log(
    "The elf who is carrying the most calories has " +
        Math.max(...elfCalorieArray) +
        " calories in total."
);
