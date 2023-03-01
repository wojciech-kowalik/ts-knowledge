// set generic constraint to check if lookup type exists
type MessageOf<T> = T extends { message: unknown } ? T["message"] : never;

interface Email {
  message: string;
}

interface Calculate {
  sum(): number;
}

type EmailMessageContents = MessageOf<Email>; // string
type CalculateContents = MessageOf<Calculate>; // never

// check if value is not empty by using constraint and type never
type NoEmpty<T> = T extends null | undefined ? never : T;

type Value = NoEmpty<string | null>;
type NoValue = NoEmpty<null>;
