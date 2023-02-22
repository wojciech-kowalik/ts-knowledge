import { Point2D } from "./structural-typing";

type Point3D = Point2D & {
  y: number;
};

type Person = {
  name: string;
};

type Phone = {
  phone: string;
};

type Email = {
  email: string;
};

type Details = Person & Phone & Email;

const stringify = (values: Details) => {
  return `${values.email} ${values.name} ${values.phone}`;
};

export { stringify };
