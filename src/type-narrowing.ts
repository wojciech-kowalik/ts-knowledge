// type narrowing for primitives

const padLeft = (value: string, padding: string | number) => {
  if (typeof padding === "number") {
    return Array(padding + 1).join(" ") + value;
  }
  if (typeof padding === "string") {
    return padding + value;
  }

  throw new Error("Available padding types are string and number");
};

padLeft("test", 4);
padLeft("test", "---");

// type narrowing for objects

class Cat {
  meow() {
    console.log("meow");
  }
}

class Dog {
  bark() {
    console.log("bark");
  }
}

type Animal = Cat | Dog;

const speak = (animal: Animal) => {
  if (animal instanceof Cat) {
    animal.meow();
  }
  if (animal instanceof Dog) {
    animal.bark();
  }
};
