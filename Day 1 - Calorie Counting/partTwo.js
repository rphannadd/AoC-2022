const { input } = require("./input.js");

let elfCalorieArray = [];
let topThreeCalorieTotal = 0;
input.forEach((elf, i) => {
    let calorieTotal = 0;
    let calorieArray = elf.split("\n");
    calorieArray.forEach((calorie) => {
        calorieTotal += +calorie;
    });
    elfCalorieArray[i] = calorieTotal;
});
for (let i = 1; i <= 3; i++) {
    let maxValue = Math.max(...elfCalorieArray);
    topThreeCalorieTotal += +maxValue;
    let index = elfCalorieArray.indexOf(maxValue);
    elfCalorieArray.splice(index, 1);
}
console.log(
    "The top three elves are carrying " +
        topThreeCalorieTotal +
        " calories in total."
);
