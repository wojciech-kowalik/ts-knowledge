"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const handle = (request) => {
    return {
        body: request.body,
        json: request.json,
    };
};
