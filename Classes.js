/*Classes

Constructor:

class Dog {
    constructor(name){
        this._name = name;
        this._behavior = 0;
    }
}
- Used to intialize objects of the class and assign parameters


Instance
 const halley = new Dog("Halley") -- Creates new dog and passes name Halley
 console.log(halley.name) -- Output "Halley"

 **Note keyword new!!

Methods:
****Note: Methods do NOT ahve commas in between them

Inheritance:

class Cat extends Animal {
    constructor(name, usesLitter){
        super(name);
        this._usesLitter = usesLitter;
    }
}

Keywords:
- "extends" makes the methods of the animal class available inside the cat class
- "super" calls the constructor of the parent class, setting necessary parameters

Note: ** super must be on the first line!!


Static Methods:
- Static methods cannot be accesses by members of the class.

*/

class Media {
    constructor(title){
        this._title = title;
        this._ratings = [];
        this._isCheckedOut = false;
    }

    get title(){
        return this._title;
    }

    get isCheckedOut(){
        return this._isCheckedOut;
    }

    get ratings(){
        return this._ratings;
    }

    set isCheckedOut(bool){
        this._isCheckedOut = bool;
    }

    toggleCheckoutStatus(){
        this._isCheckedOut = !(this._isCheckedOut);
    }

    getAverageRating(){
        const reducer = (accumulator, currentValue) => accumulator + currentValue;
        return this._ratings.reduce(reducer) / this._ratings.length;
    }

    addRating(rating){
        this._ratings.push(rating)
    }
}

class Book extends Media{
    constructor(author, pages, title){
        super(title);
        this._author = author;
        this._pages = pages;
    }

    get author(){
        return this._author;
    }

    get pages(){
        return this._pages;
    }
}

class Movie extends Media{
    constructor(director, title, runTime){
        super(title);
        this._director = director;
        this._runTime = runTime;
    }

    get director() {
        return this._director;
    }

    get runTime() {
        return this._runTime;
    }
}

const historyOfEverything = new Book('Bill Bryson', 'A Short History of Nearly Everything', 544)

historyOfEverything.toggleCheckoutStatus();

console.log(historyOfEverything.isCheckedOut);

historyOfEverything.addRating(4);
historyOfEverything.addRating(5)
historyOfEverything.addRating(5)

console.log(historyOfEverything.getAverageRating())

const speed = new Movie('Jan de Bont', 'Speed', 116);

speed.toggleCheckoutStatus();

console.log(speed.isCheckedOut);

speed.addRating(1);
speed.addRating(1)
speed.addRating(5)

console.log(speed.getAverageRating())