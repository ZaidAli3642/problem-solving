class Node {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable {
  constructor(size) {
    this.size = size;
    this.bucket = new Array(size);
  }

  hash(key) {
    return key % this.size;
  }

  put(key, value) {
    const index = this.hash(key);

    if (!this.bucket[index]) return (this.bucket[index] = new Node(key, value));

    let currentNode = this.bucket[index];

    while (currentNode.next) {
      if (currentNode.key === key) {
        currentNode.value = value;
        return;
      }

      currentNode = currentNode.next;
    }

    if (currentNode.key === key) {
      currentNode.value = value;
    } else {
      currentNode.next = new Node(key, value);
    }
  }

  get(key) {
    const index = this.hash(key);

    if (!this.bucket[index]) return undefined;

    let currentNode = this.bucket[index];

    while (currentNode) {
      if (currentNode.key === key) return currentNode.value;

      currentNode = currentNode.next;
    }

    return null;
  }

  remove(key) {
    const index = this.hash(key);

    let currentNode = this.bucket[index];
    if (currentNode === null) this.bucket[index] = 0;

    let prevNode = null;
    while (currentNode) {
      if (currentNode.key === key) {
        if (!prevNode) {
          this.bucket[index] = currentNode.next;
        } else {
          prevNode.next = currentNode.next;
        }

        return currentNode.value;
      }

      prevNode = currentNode;
      currentNode = currentNode.next;
    }

    return null;
  }

  show(index) {
    let currentNode = this.bucket[index];

    while (currentNode !== null) {
      console.log(currentNode.value);

      currentNode = currentNode.next;
    }
  }
}

const hashmap = new HashTable(5);

hashmap.put(6, 10);
hashmap.put(11, 11);
hashmap.put(16, 12);
hashmap.put(21, 22);
hashmap.put(6, 23);
hashmap.put(2, 20);
hashmap.put(3, 30);

console.log(hashmap.remove(16));
console.log(hashmap.remove(11));
console.log(hashmap.remove(2));
console.log(hashmap.get(2));
