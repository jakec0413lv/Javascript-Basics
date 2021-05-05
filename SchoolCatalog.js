class School {
    constructor(name, level, numberOfStudents){
        this._name = name;
        this._level = level;
        this._numberOfStudents = numberOfStudents;
    }

    get name(){
        return this._name;
    }

    get level(){
        return this._level;
    }

    get numberOfStudents(){
        return this._numberOfStudents;
    }

    set numberOfStudents(num){
        if(typeof(num) == Number){
            this._numberOfStudents = num;
        }else{
            console.log('Invalid input: numberOfStudents must be set to a Number.')
        }
        
    }

    quickFacts(){
        console.log(`${this._name} educates ${this._numberOfStudents} students at the ${this._level} school level.`)
    }

    static pickSubstituteTeacher(substituteTeachers){
        let index = Math.floor(Math.random() * substituteTeachers.length);
        return substituteTeachers[index]
    }
}

class PrimarySchool extends School{
    constructor(name, numberOfStudents, pickUpPolicy){
        super(name, 'primary', numberOfStudents);
        this._pickUpPolicy = pickUpPolicy;
    }

    get pickUpPolicy(){
        return this._pickUpPolicy;
    }
}

class HighSchool extends School{
    constructor(name, nunberOfStudents, sportsTeams){
        super(name, 'high', nunberOfStudents);
        this._sportsTeams = sportsTeams;
    }

    get sportsTeams(){
        console.log(this._sportsTeams)
    }
}

lorraineHansbury = new PrimarySchool('Lorraine Hansbury', 514, 'Students must be picked up by a parent, guardian, or a family member over the age of 13.');

lorraineHansbury.quickFacts();
console.log(School.pickSubstituteTeacher(['Jamal Crawford', 'Lou Williams', 'J. R. Smith', 'James Harden', 'Jason Terry', 'Manu Ginobli']));

alSmith = new HighSchool('Al E. Smith', 415, ['Baseball', 'Basketball', 'Volleyball', 'Track and Field'] );

alSmith.sportsTeams;