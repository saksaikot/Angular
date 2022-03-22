class Queue<T> {
  private data: T[] = [];

  add(item: T) {
    this.data.push(item);
  }
  remove() {
    this.data.shift();
  }
}

const nameQueue = new Queue<string>();
nameQueue.add("Rahim");
nameQueue.add("karim");

const numberQueue = new Queue<number>();
numberQueue.add(5);
numberQueue.add(10);
