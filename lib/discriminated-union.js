"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const area = (shape) => {
    switch (shape.type) {
        case "square":
            return shape.size * shape.size;
        case "rectangle":
            return shape.width * shape.height;
    }
};
area({ size: 5, type: "square" });
area({ width: 4, height: 5, type: "rectangle" });
