type Person = {
  name: string;
  age: number;
};

type Dictionary = {
  [key: string]: Person;
};

const data: Dictionary = {
  john: { name: "John", age: 20 },
};

data["john"] = { name: "John", age: 30 };
