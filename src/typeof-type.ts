const data = {
  name: "john",
  surname: "doe",
  age: 20,
  birth: "Poland",
};

type Person = typeof data;

const processing = (person: Person & { fullName: string }) => {
  return {
    ...person,
    fullName: `${person.name} ${person.surname}`,
  };
};

export {};
