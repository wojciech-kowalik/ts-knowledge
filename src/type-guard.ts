// use case for implementation in code

import { Square, Rectangle, Shape } from "./discriminated-union";

const isSquare = (shape: Shape): shape is Square => {
  return "size" in shape;
};

const isRectangle = (shape: Shape): shape is Rectangle => {
  return "width" in shape;
};

const area = (shape: Shape) => {
  if (isSquare(shape)) {
    return shape.size * shape.size;
  }

  if (isRectangle(shape)) {
    return shape.height * shape.width;
  }

  const _ensure: never = shape;
};
