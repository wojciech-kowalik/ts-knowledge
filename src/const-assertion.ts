// set proper immutable const object
// const person = <const>{
//     name: "John",
//     surname: "Doe",
//     age: 20,
//   };
const person = {
  name: "John",
  surname: "Doe",
  age: 20,
} as const;

//person.age = 5 error because object is read only

const layout = (settings: {
  align: "left" | "right" | "center";
  padding: number;
}) => {
  return settings;
};

// if we only wants to set one value
// const defaultConfiguration = {
//     align: "left" as const,
//     padding: 10,
//   } ;

const defaultConfiguration = {
  align: "left",
  padding: 10,
} as const;

layout(defaultConfiguration);

export {};
