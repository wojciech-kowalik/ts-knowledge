type Person = {
  name: string;
  surname: string;
  age: number;
};

function prop<K extends Person, V extends keyof K>(obj: K, key: V) {
  return obj[key];
}

// extends adding constrain to the type
// extends keyof to constrain a type that is the property of another object

prop({ name: "John", surname: "Doe", age: 20 }, "name");

function fullName<T extends Person>(obj: T): T & { fullName: string } {
  return {
    ...obj,
    fullName: `${obj.name} ${obj.surname}`,
  };
}

const john = fullName({ name: "John", surname: "Doe", age: 20 });
john.fullName;

export {};
