/*
Arrays:
- Storing data within a list
- Initialized:
    - let arrayName = [item1, item2, item3] (Can we initialized empty - [])
-Access members using index
    - arrayName[1] = item2
-Update in place using index;
    -arrayName[1] = newItem;
-Contents of a const array can be changes, but cannot be assigned to an entirely new array

Properties:
 - .length returns number of items within the array

Methods:
- arrayName.push(item) - adds item to end of list
- arrayName.pop() - removes item from the end of list
- arrayName.slice() - makes shallow copy of array (***Non mutating ***)
- Array Method Documentation:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

Nested Arrays:
- Arrays can store other arrays
- Ex Arr =  [[1], [2,3]] => Arr[1] = [2,3]

Objects:
- let spaceship = {
    'Fuel Type' (key) : 'diesel' (value),
    color: 'silver'
};

Bracket Notation:
- spaceship['Fuel Type] (accesses Fuel Type member of spaceship object)
- MUST use bracket notation when accessing keys that have numbers, spaces, or special characters

***** AVOID USING ARROW FUNCTIONS WHEN USING 'this' IN A METHOD !!!

Object Factory Functions:

const monsterFactory = (name, age) => {
    return {
        name: name,
        age:, age
    }
}

Shorthand version!
const monsterFactory = (name, age) => {
    return {
        name,
        age
    }
}

DeStructured Assignment:
const residence = vampire.residence;
console.log(residence); //Prints transylvania

const { residence } = vampire;
console.log(residence); //Prints Transylvania

-This is known as destructured assignment
-It can also be used to grab nested properties within an object

Object Related Documentation:
https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object#Methods

*/

//Meal Creator ([Utilizing Objects, Getters/Setters & Arrays])

const menu = {
    _courses: {
      appetizers: [],
      mains: [],
      desserts: []
    },
    //Getters and Setters
    get appetizers(){
      return this._courses.appetizers;
    },
    set appetizers(appIn){
      this._courses.appetizers = appIn;
    },
    get mains(){
      return this._courses.mains;
    },
    set mains(mainIn){
      this._courses.mains = mainIn;
    },
    get desserts() {
      return this._courses.desserts;
    },
    set desserts(dessertIn){
      this._courses.desserts = dessertIn;
    },
    get courses() {
      //Utilizes getter functions
      return {
        appetizers: this.appetizers,
        mains: this.mains,
        desserts: this.desserts
      }
    },
    addDishToCourse(courseName, dishName, dishPrice){
      let dish = {
        name: dishName,
        price: dishPrice
      }
      this._courses[courseName].push(dish);
    },
    getRandomDishFromCourse(courseName){
      let dishes = this._courses[courseName];
      let rand = Math.floor(Math.random() * dishes.length);
      return dishes[rand];
    },
    generateRandomMeal() {
      let appetizer = this.getRandomDishFromCourse("appetizers");
      let main = this.getRandomDishFromCourse("mains");
      let dessert = this.getRandomDishFromCourse("desserts");
      let price = appetizer.price + main.price + dessert.price;
      return `Appetizer: ${appetizer.name}, Main: ${main.name}, Dessert: ${dessert.name}, Total Price: \$${price}.00`
    }
  }
  
  //Populate Course Arrays
  
  menu.addDishToCourse("appetizers", "Nachos", 5);
  menu.addDishToCourse("appetizers", "Poke Bowl", 9);
  menu.addDishToCourse("appetizers", "Wings", 8);
  
  menu.addDishToCourse("mains", "Steak", 22);
  menu.addDishToCourse("mains", "Ahi Tuna", 19);
  menu.addDishToCourse("mains", "Chicken", 17);
  
  menu.addDishToCourse("desserts", "Lemon Cake", 8);
  menu.addDishToCourse("desserts", "Flan", 6);
  menu.addDishToCourse("desserts", "Chocolate Lava Cake", 7);
  
  //Generate meal
  console.log(menu.generateRandomMeal())
