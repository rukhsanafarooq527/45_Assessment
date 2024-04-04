// More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:
// • Tests for equality and inequality with strings

// • Tests using the lower case function

// • Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

// • Tests using "and" and "or" operators

// • Test whether an item is in a array

// • Test whether an item is not in a array


// • Tests for equality and inequality with strings.
let fruite : string = "Mango and Cherries"
console.log("Tests for equality :");
console.log(fruite ==  "Mango and Cherries");
console.log(fruite  ==  "Onion and Tomato ");

// • Tests using the lower case function
console.log(" Testing with lower case function :");
console.log("Apple".toLowerCase() == "apple");
console.log("Apple".toLowerCase() == "Apple");

// • Numerical tests 
console.log("Numeric tests");
console.log(5 > 3);
console.log(5 < 3);

// • Tests using "and" and "or" operators
console.log("Tests using and and or operators ;");
if ("Apple" && "Banana"){
    console.log(true);
}else{
    console.log(false); 
}
if("Apple" || "Banana"){
    console.log(true);
}else{
    console.log(false);};

// • Test whether an item is in a array
let FruitesName : string [] = ["Apple","Mango","Banana","Orangr","Grapes"]
console.log("Is Mango  in fruie");
console.log(FruitesName.includes("Mango"));

// • Test whether an item is not in a array
let FrName : string [] = ["Apple","Mango","Banana","Orangr","Grapes"]
console.log("Is Cherries  in fruie :");
console.log(FrName.includes("Chehrries"));
