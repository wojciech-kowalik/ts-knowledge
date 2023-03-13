type Point = {
  x: number;
  y: number;
  z?: number;
};

// implementation of builtin mapped type
type Readonly<T> = {
  readonly [Item in keyof T]: T[Item];
};

// implementation of builtin mapped type and modifier "?"
type Partial<T> = {
  [Item in keyof T]?: T[Item];
};

// implementation of builtin mapped type and modifier "-?"
type Required<T> = {
  [Item in keyof T]-?: T[Item]; // -? remove optional by modifier
};

const center2D: Readonly<Point> = { x: 0, y: 0 };
const center3D: Readonly<Required<Point>> = { x: 0, y: 0, z: 0 };
//center2D.x = 10 => Cannot assign to 'x' because it is a read-only property.
center3D.x;

class State<T> {
  constructor(public current: T) {}
  public update(next: Partial<T>) {
    return { ...this.current, ...next };
  }
}

const state = new State<Point>({ x: 0, y: 0 });
state.update({ y: 20 });

export {};
