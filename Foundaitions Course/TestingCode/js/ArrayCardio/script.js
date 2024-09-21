const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 }
];

const people = [
    'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry',
    'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 
    'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 
    'Benn, Tony', 'Bennington, Chester', 'Bennett, Silas', 'Bentsen, Lloyd', 
    'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 
    'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 
    'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 
    'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 
    'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 
    'Blair, Robert', 'Blair, Tony', 'Blake, William'
];

//Array of people born in 16hundreds

// // // const fifteen = inventors.filter(function(inventor){
const fifteen = inventors.filter(inventor => inventor.year >= 1500 && inventor.year < 1600);
//      if(inventor.year >= 1500 && inventor.year < 1600){
//          return true;
//      } 
// });

// console.table(fifteen);

//Array of fullNames
const fullNames =  inventors.map(inventor => inventor.first +" "+ inventor.last);
// console.log(fullNames);

//Sort by birthday
const ordered = inventors.sort(function(a, b){
    if(a.year > b.year){
        return 1;
    }else{
        return -1;
    }
});

// console.table(ordered);

//How many years did inventors live?
const totalYears = inventors.reduce((total, inventor) => total + (inventor.passed - inventor.year),0);

console.log(totalYears);

//Sort inventors by years lived
const orderedYearsLived = inventors.sort(function(a,b){
    if((a.passed - a.year) > (b.passed - b.year)){
        return -1;
    }else{
        return 1;
    }
});

console.table(orderedYearsLived);

// Create list of Boulevards in Paris that contain "de" anywhere in the name - https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
// const category = document.querySelector(".mw-category");
// const links = Array.from(category.querySelectorAll("a"));

// const de = links
//     .map(link => link.textContent)
//     .filter(streetName => streetName.includes("de"));

//Sort People alphabeticly by last name
const alpha = people.sort(function(lastOne, nextOne){
    
    const [aLast, aFirst] = lastOne.split(", ");
    const [bLast, bFirst] = nextOne.split(", ");
    return aLast > bLast ? 1 : -1;
});
console.log(alpha);

// 8. Reduce Excersise
const data = ["c"]