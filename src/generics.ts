class Queue<T> {
  private data: T[] = [];
  push = (item: T) => this.data.push(item);
  pop = (): T | undefined => this.data.shift();
  toString = () => this.data.toString();
}

const queue = new Queue<number>();
queue.push(2);
queue.push(4);

console.log(queue.toString());
