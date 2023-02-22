"use strict";
class Person {
    constructor(name, surname) {
        this.name = name;
        this.surname = surname;
        this.hi = () => {
            return `I am ${this.name} ${this.surname}`;
        };
    }
}
const person = new Person("John", "Doe");
