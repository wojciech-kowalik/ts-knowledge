import { Shape } from "./discriminated-union";

type Circle = { type: "circle"; radius: number };
type ShapeExtended = Shape | Circle;

const area = (shape: ShapeExtended) => {
  switch (shape.type) {
    case "rectangle":
      return shape.height * shape.width;
    case "square":
      return shape.size * shape.size;
    case "circle":
      return Math.PI * shape.radius ** 2;
  }
  // exhaustiveness never variable
  const _ensureAllCasesAreHandled: never = shape;
  return _ensureAllCasesAreHandled;
};

export { area };
