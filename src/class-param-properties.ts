class Person {
  constructor(public name: string, public surname: string) {}
  hi = () => {
    return `I am ${this.name} ${this.surname}`;
  };
}

const person = new Person("John", "Doe");
