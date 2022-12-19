const { input } = require("./input.js");

const outcomeMap = new Map();
outcomeMap.set("A X", 4);
outcomeMap.set("A Y", 8);
outcomeMap.set("A Z", 3);
outcomeMap.set("B X", 1);
outcomeMap.set("B Y", 5);
outcomeMap.set("B Z", 9);
outcomeMap.set("C X", 7);
outcomeMap.set("C Y", 2);
outcomeMap.set("C Z", 6);

let totalScore = input.reduce((currentTotal, round) => {
    return currentTotal + outcomeMap.get(round);
}, 0);
console.log(
    "My total score would be " +
        totalScore +
        " if everything goes exactly according to the strategy guide."
);
