let simplyText: `Hello ${string}`;
simplyText = "Hello world";
// simplyText = "World" => Type '"World"' is not assignable to type '`Hello ${string}`'

type CSSValue = number | `${string}px` | `${string}em` | `${string}pt`;
type Size = "small" | "medium" | "large";
type Color = "primary" | "secondary";
type Style = `${Size}-${Color}`; // combination of types

const style = (value: CSSValue) =>
  typeof value === "number" ? `${value}px` : value;

style(20);
style("12px");
// style("12hj") => Argument of type '"12hj"' is not assignable to parameter of type 'CSSValue'

const apply = (style: Style) => {};
apply("small-primary");
// apply("sss") => Argument of type '"sss"' is not assignable to parameter of type '"small-primary" | "small-secondary" | "medium-primary" | "medium-secondary" | "large-primary" | "large-secondary"'
