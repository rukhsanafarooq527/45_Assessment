"use strict";
// 3.  Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase, and titlecase.
let PersonName = "Zainab and Umer";
// Lowercase
console.log("Lowercase:", PersonName.toLowerCase());
// Uppercase
console.log("Uppercase:", PersonName.toUpperCase());
// Titlecase
console.log("Titlecase:", PersonName.replace(/\b\w/g, (char) => char.toUpperCase()));
