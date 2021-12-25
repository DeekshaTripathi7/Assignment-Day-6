// Write a “person” class to hold all the details.

class Person {
    constructor(first, last, age, gender, occupation, hobby){
        this.name = {
            first : first,
            last : last
        };
        this.age = age;
        this.gender = gender;
        this.occupation = occupation;
        this.hobby = hobby;
        this.introduce = function (){
            console.log(`Hi, My name is ${this.name.first} ${this.name.last}.
            I am ${this.age} years old and I am ${this.occupation}. I like ${this.hobby[0]} and ${this.hobby[1]}`);
        }
    };
}

let person1 = new Person('Deeksha', 'Tripathi', 26, 'Female', 'Developer', ['dancing','reading']);
let person2 = new Person('Sherlock', 'Holmes', 30, 'Male','Detective',['playing violin','solving mystries']);

person1.introduce();
person2.introduce();

// write a class to calculate uber price.

class Calc {
    constructor(distance){
        this.distance = distance;
    }
    
        getPrice(){
            let basePrice = 50;
            let total = basePrice * this.distance;
            return total;
        };
    
}

class UberXL extends Calc {
    constructor(car, distance){
        
        super(distance);
        this.car = car;
        
    }
        rideDetal() {
            console.log(`Total fair for ${this.car} for distance traveled ${this.distance} is ${this.getPrice()}`)
        }        
    
}

let ride1 = new UberXL("Honda", 25);

ride1.rideDetal();
