/*******************************************
    Iteration 1.1 | Tongue Twister
*******************************************/
const s1 = "Fred";
const s2 = "fed";
const s3 = "Ted";
const s4 = "bread";
const s5 = "and";

// Concatenate the string variables into one new string
const allTogether = (`We all together ${s1}, ${s2}, ${s3}, ${s4}, ${s5}`);

// Print out the concatenated string
console.log(allTogether);



/*******************************************
    Iteration 1.2 | Camel Tail
*******************************************/
const part1 = "java";
const part2 = "script";

// Convert the last letter of part1 and part2 to uppercase and concatenate the strings
let i, j= 0;
i = part1.length-1;
j = part2.length -1;
console.log (i,j);
const lastUppercased1 = part1.slice(0,3) + part1[i].toUpperCase();
const lastUppercased2 = part2.slice(0,5) + part2[j].toUpperCase();
// Print the cameLtaiL-formatted string
const lastUppercased = (`Hello, ${lastUppercased1}, ${lastUppercased2}`);
console.log (lastUppercased);




/*******************************************
    Iteration 2.1 | Calculate Tip
*******************************************/
const billTotal = 100;

// Calculate the tip (15% of the bill total)
const tip = billTotal*0.15;

// Print out the tipAmount
console.log(tip);



/*******************************************
    Iteration 2.2 | Generate Random Number
*******************************************/

// Generate a random integer between 1 and 10 (inclusive)

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//grab a randdom index from the students
const aRandomNumber = Math.floor(Math.random() * numbers.length); 

// Print the generated random number
console.log("here is the number betwween 1 and 10 ", aRandomNumber);



/*******************************************
    Iteration 3.1 | Booleans
*******************************************/

const a = true;
const b = false;

// Try and guess the output of the below expressions first and write your answers down:
const expression1 = a && b; //false

const expression2 = a || b; //true

const expression3 = !a && b; //false

const expression4 = !(a && b);  //false

const expression5 = !a || !b; //true

const expression6 = !(a || b); //true

const expression7 = a && a; //true