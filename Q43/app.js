"use strict";
// let magicians: string[] = ["Magician_1"Unchanged Magicians: Start with your work from Exercise 40. Call the function make_great() with a copy of the array of magicians’ names. Because the original array will be unchanged, return the new array and store it in a separate array. Call show_magicians() with each array to show that you have one array of the original names and one array with the Great added to each magician’s name., "Magician_2", "Magician_3", "Magician_4", "Magician_5"];
let magicians = ["Magician_1", "Magician_2", "Magician_3", "Magician_4", "Magician_5"];
function make_great(magicians) {
    let greatMagicians = [];
    magicians.forEach(magician => {
        greatMagicians.push("Great " + magician);
    });
    return greatMagicians;
}
function show_magicians(magicians) {
    magicians.forEach(magician => {
        console.log(magician);
    });
}
// Original magicians
console.log("Original Magicians:");
show_magicians(magicians);
// Magicians made great
console.log("\nMagicians Made Great:");
let greatMagicians = make_great([...magicians]); // Creating a copy of the original array
show_magicians(greatMagicians);
