"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.area = void 0;
const area = (shape) => {
    switch (shape.type) {
        case "rectangle":
            return shape.height * shape.width;
        case "square":
            return shape.size * shape.size;
        case "circle":
            return Math.PI * shape.radius ** 2;
    }
    // exhaustiveness never variable
    const _ensureAllCasesAreHandled = shape;
    return _ensureAllCasesAreHandled;
};
exports.area = area;
