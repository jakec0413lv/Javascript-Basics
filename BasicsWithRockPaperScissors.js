/*Javascripts "print" function:

console.log(x) [Where x can be anything]

Ex:
console.log(5) -> Prints "5" on the console

Data Types:

- 7 Fundamental Data Types
    - Number
    - String
    - Boolean
    - Null
    - Undefined
    - Symbol
    - Object

-Arithmetic Operators:  
    - + Add
    - - Subtract
    - * Multiply
    - / Divide
    - % Remainder

- String Concatentation:
    console.log('Hello' + 'World) prints HelloWorld
    ***Remember to add necessary spaces

- Properties:
    - Data types have various properties, for example for string x,
    x.length returns the number of characters in that string
    - '.' is known as the dot operator and allows for access

-Methods:
    -Performable actions usable by appending the dot operator, the name of the method
    and accompanying parentheses
    -E.g. 'example string'.methodName()
    -String Method Documentation found here:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String
    -Math Object Documentation found here:
    https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math

Variables:
    -Initialized var myName = 'Jake' [Pre ES6]
    -Initialized let nyName = 'Jake' [ES6]
        -Can be initilized without assigning a value
        -This will give it a value of undefined
    -Key word 'const' allows to intialize variables that cannot be reassigned
        -Constant variables must be assigned a value when declared

String Interpolation:
    -Insertion of variables into string using template literals
    - Ex: `Example String ${exampleVariable}.`

typeof Operator:
    console.log(typeof exampleVariable) 
    -returns string if string, number if number, etc

Comparison Operators:
    - <, >, <= , >=, === (equal to), !== (not equal to)

Ternary Operator:
    -Simplifies if-else statements
    -Condition ? Result if True : Result if False

Functions:
    -Contain function keyword, function name, and parameters
    - function functionName(Parameters){

    }
    - Default Parameters
    function sayHello(name = "Stranger"){

    }

    -Also declare function expressions
    - Ex: const calculateArea = function (width, height){
        return width * height
    }  
    -calculateArea(width,height) [Function Call]

    -Arrow Functions
    const rectangleArea = (width, height) => {
        return width * height;
    }
    -Note: functions with only a single parameter do not require parentheses
    However, zero or multiple do
    -A function with a single line does not need curly braces and will automatically (implicitly) return
    the value evaluated
*/

const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'paper' || userInput === 'scissors' || userInput === 'bomb'){
      return userInput;
    } else{
      console.log('Invalid input!');
    }
  }
  
  const getComputerChoice = () =>{
    let num = Math.floor(Math.random() * 3);
    if(num === 0){
      return 'rock';
    } else if(num === 1){
      return 'paper';
    } else{
      return 'scissors';
    }
  }
  
  const determineWinner = (userChoice, computerChoice) =>{
    if(userChoice === 'bomb'){
      return 'You won!'
    }
    if(userChoice === computerChoice){
      return('Tie!')
    }
    if(userChoice === 'rock'){
      if(computerChoice === 'paper'){
        return 'You lost!'
      } else{
        return 'You won!'
      }
    }
      if(userChoice === 'scissors'){
        if(computerChoice === 'paper'){
          return 'You won!';
       } else{
        return 'You lost!';
      }
    }
      if(userChoice === 'paper'){
        if(computerChoice === 'rock'){
          return 'You won!';
       } else{
        return 'You lost!';
      }
    }
  }
  
  const playGame = () => {
    let userChoice = getUserChoice('bomb');
      console.log(userChoice);
    let computerChoice = getComputerChoice();
      console.log(computerChoice);
    console.log(determineWinner(userChoice, computerChoice))
  }
  
  playGame();
  

