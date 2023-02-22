"use strict";
class Queue {
    constructor() {
        this.data = [];
        this.push = (item) => this.data.push(item);
        this.pop = () => this.data.shift();
        this.toString = () => this.data.toString();
    }
}
const queue = new Queue();
queue.push(2);
queue.push(4);
console.log(queue.toString());
