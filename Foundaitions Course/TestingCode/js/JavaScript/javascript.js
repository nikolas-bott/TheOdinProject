const string = "The revolution will not be televised.";
console.log(string);

const badString = string;
console.log(badString);

const single = 'Single quotes';
const double = "Double quotes";
const backtick = `Backtick`;

console.log(single);
console.log(double);
console.log(backtick);

const one = "Hello, ";
const two = "how are you?";
const joined = `${one}${two}`

console.log(joined);

const greeting = "Hello";
const name = "Chris";

console.log(greeting + ", " + name);
console.log(`${greeting}, ${name}`)

const song = "Fight the Youth";
const score = 9;
const highScore = 10;
const output = `I like the song ${song}. I gave it a score of ${(score / highScore)*100}%.`

console.log(output);

const newLine = `One day you finally knew
 what you had to do, and began,`;
 
 console.log(newLine);

const goodQuotes1 = 'She said "I think so!"';
const goodQoutes2 = `She said "I'm not going in there!"`

console.log(goodQuotes1 + " - " + goodQoutes2);

const bigmouth = 'I\'ve got no right to take my place...';
console.log(bigmouth);

const name1 = "Front ";
const number = 242;

console.log(name1 +number);

const myString = "123";
const myNum = Number(myString);

console.log(typeof myNum);

const myNum2 = 123;
const myString2 = String(myNum2);

console.log(typeof myString2)
