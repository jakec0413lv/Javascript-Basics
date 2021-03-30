/*
Higher Order Functions:
- A higher order function is a function that either accepts functions as parameters,
returns a function, or both
-A function that gets passed in as a parameter is known as a "callback function"

Introduction to Iterators:
- .forEach() - Executes same code for each element of an array
Ex:

const fruits = ['mango', 'papaya', 'pineapple', 'apple'];


fruits.forEach(fruit => {
  console.log('I want to eat a ' + fruit)
}) 

Prints:
I want to eat a mango
I want to eat a papaya ... etc

- .map() - takes an argument of a callback function and returns a new array
- Major difference between map and forEach is that .map() returns a new array!

const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];


const secretMessage = animals.map(animal => {
  return animal[0];
})

console.log(secretMessage.join('')); //Prints HelloWorld

const bigNumbers = [100, 200, 300, 400, 500];

// Create the smallNumbers array below
const smallNumbers = bigNumbers.map(number => {
  return number / 100;
})

console.log(smallNumbers); //Prints [1, 2, 3, 4, 5]

-.filter() - removes elements from array based on a condition

const randomNumbers = [375, 200, 3.14, 7, 13, 852];

// Call .filter() on randomNumbers below
const smallNumbers = randomNumbers.filter(number => {
  return number < 250 //Condition: Number < 250
})

console.log(smallNumbers); Prints [200, 3.`14, 7, 13]

-.findIndex() 
- returns index of first elements that evaluates to true in the callback function

const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => {
  return animal === 'elephant'
})

const startsWithS = animals.findIndex(animal => {
  return animal[0] === 's'
})

console.log(foundAnimal); //Prints 7
console.log(startsWithS); //Prints 3 (seal)

- .reduce() returns a single value after iterating through elements of an array
- .reduce(callBackFunction, intial value for accumulator)

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
})

console.log(newSum) //Prints 16

const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 10)

console.log(newSum) //Prints 26 since initial value is 10

Documentation on Array Iterators:

https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

Article on Array Methods:
https://www.digitalocean.com/community/tutorials/how-to-use-array-methods-in-javascript-iteration-methods

*/

let story = 'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ['really', 'very', 'basically'];

let unnecessaryWords = ['extremely', 'literally', 'actually' ];

let storyWords = story.split(" ");
console.log(storyWords.length);

//Remove unnecessary words

const betterWords = storyWords.filter(word => {
  for(let i = 0; i < unnecessaryWords.length; i++){
    if(word === unnecessaryWords[i]){
      return false;
    }
  }
  return true;
})

let wordCount = betterWords.length;
let overusedCount = 0;

//Count overused Words
betterWords.forEach(word => {
  for(let i = 0; i < overusedWords.length; i++){
    if(word === overusedWords[i]){
      overusedCount++;
    }
  }
}
)

let sentenceCount = 0;
//Count Sentences by checking for periods or exclamation points

betterWords.forEach(word => {
  if(word.indexOf('.') != -1 || word.indexOf('!') != -1){
    sentenceCount++;
  }
})

console.log(sentenceCount)
 //Display function
 
display = (wordCount, overUsedCount, sentenceCount) => {
  console.log(`Word Count: ${wordCount}`);
  console.log(`Overused Count: ${overUsedCount}`);
  console.log(`Sentence Count: ${sentenceCount}`);
}

display(wordCount, overusedCount, sentenceCount);