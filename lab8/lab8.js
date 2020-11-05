String.prototype.filter = function(words) {
    return this.split(' ').filter(i => words.indexOf(i) < 0).join(" ");
}

console.log("This house is not nice!".filter(['not']));

Array.prototype.bubbleSort = function() {
    do {
        var swapped = false;
        for (let i=0; i < this.length-1; i++) {
            if (this[i] > this[i+1]) {
                let temp = this[i];
                this[i] = this[i+1];
                this[i+1] = temp;
                swapped = true;
            }
        }
    } while (swapped);
    return this;
}
let array = [6,4,0, 3,-2,1];
console.log(array.bubbleSort());

function Person(name) {
    this.name = name;
}

const Teacher = new Person("Mary");
Person.prototype.teach = function(subject) {
    console.log(this.name + " is now teaching "+subject);
}

Teacher.teach("WAP");

const Person2 = {
    name: ''
}

const teacher2 = Object.create(Person2);
teacher2.name = 'Mary';
teacher2.teach = function(subject) {
    console.log(this.name + " is now teaching "+ subject);
}


teacher2.teach("WAP");

function Person3() {
    this.name = '';
    this.age = 0;
}

Person3.prototype.greeting = function(){
    console.log("Greetings, my name is "+this.name + " and I am "+this.age+" years old") ;
}

Person3.prototype.salute = function() {
    console.log("Good morning!, and in case I dont see you,good afternoon, good evening and good night!");
}

const student2 = new Person3();
student2.major = "WAP";
student2.name = "Mary";
student2.age = 1;
student2.greeting = function(){
    console.log("Hey, my name is "+this.name+" and I am studying "+ this.major);
}
student2.greeting();
student2.salute();

const professor2 = new Person3("Talemwa M.", 2);
professor2.department = "Argiro";
professor2.salute = function() {
    console.log("Good day,my name is "+this.name+" and I am in the "+this.department+" department")
}
professor2.greeting();
professor2.salute();

const Person4 = {
    name: "",
    age: 0,
    greeting: function() {
        console.log("Greetings, my name is "+this.name + " and I am "+this.age+" years old") ;
    },
    salute: function() {
        console.log("Good morning!, and in case I dont see you,good afternoon, good evening and good night!");
    }
}

const student = Object.create(Person4);
student.major = "WAP";
student.name = "Mary T";
student.age = 1;
student.greeting = function(){
    console.log("Hey, my name is "+this.name+" and I am studying "+ this.major);
}
student.greeting();
student.salute();

const professor = Object.create(Person4);
professor.department = "Argiro";
professor.name = "Talemwa M";
professor.age = 2;
professor.salute = function() {
    console.log("Good day,my name is "+this.name+" and I am in the "+this.department+" department")
}
professor.greeting();
professor.salute();