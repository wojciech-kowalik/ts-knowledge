"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const isSquare = (shape) => {
    return "size" in shape;
};
const isRectangle = (shape) => {
    return "width" in shape;
};
const area = (shape) => {
    if (isSquare(shape)) {
        return shape.size * shape.size;
    }
    if (isRectangle(shape)) {
        return shape.height * shape.width;
    }
    const _ensure = shape;
};
