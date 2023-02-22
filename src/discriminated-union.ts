type Square = {
  type: "square";
  size: number;
};

type Rectangle = {
  type: "rectangle";
  width: number;
  height: number;
};

type Shape = Square | Rectangle;

const area = (shape: Shape) => {
  switch (shape.type) {
    case "square":
      return shape.size * shape.size;
    case "rectangle":
      return shape.width * shape.height;
  }
};

area({ size: 5, type: "square" });
area({ width: 4, height: 5, type: "rectangle" });

export { Square, Rectangle, Shape };
