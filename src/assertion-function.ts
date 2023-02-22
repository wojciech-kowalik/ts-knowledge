// use case for testing purpose

type Person = {
  name: string;
  dateOfBirth?: Date;
};

function assert(condition: unknown, message: string): asserts condition {
  if (!condition) throw new Error(message);
}

function dateAssert(value: unknown): asserts value is Date {
  if (value instanceof Date) return;
  else throw new Error("Date type required");
}

function load(withNull: boolean) {
  if (withNull) return null;
  return { name: "John" } as Person;
}

const maybePerson = load(true);

assert(maybePerson != null, "Person required");
maybePerson; // Person

dateAssert(maybePerson.dateOfBirth);
maybePerson.dateOfBirth.getDate(); // Date

export {};
