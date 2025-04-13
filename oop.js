//Clase person
class Person { 
    constructor(name, age, genre) {
        this.name = name;
        this.age = age;
        this.genre = genre;
    }
        obtDetails() {
          console.log(`Name: ${this.name}`);
          console.log(`Edad: ${this.age}`);
          console.log(`Genero: ${this.genre}`);  

        }     
}

const person1 = new Person("Laura", 30, "Femenino");
person1.obtDetails()

//Clase student

class student extends Person(name, age, genre, course, group) {
constructor(name, age, genre, course, group){
  this.course = course
  this.group = group
}
register(){
  console.log(`${this.name}, ${this.course}, ${this.group}`)
}
}

const student = new student ('Pedro', 28, 'Fisica', 'B2')
estudiante.register()

//clase Teacher
class teacher extends Person (name, age, genre, asignature, level){
  constructor(name, age, genre, asignature, level){
    this.asignature = asignature
    this.level = level
  }
  assign() {
    console.log(`${this.name}, ${this.asignature}, ${this.level}`)
  }
}

const student = new student ('Martha', 'Lengua', 3)