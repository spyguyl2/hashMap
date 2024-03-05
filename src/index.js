import './style.css';
import './meyerReset.css';
import newList from './linkedList';

const createHashTable = () => {
  let fullBuckets = 0;
  let capacity = 16;
  let loadFactor = .75;
  let buckets = initializeBuckets();

  function set(key, value) {
    const index = hash(key);
    testIndex(index);
    const bucket = buckets[index];
    if (!bucket.getHead()) {
      bucket.prepend(key, value);
      fullBuckets++;
    }
    else {
      let currentNode = bucket.getHead();
      while (currentNode.nextNode || currentNode) {
        if (currentNode.key === key) return currentNode.value = value;
        currentNode = currentNode.nextNode;
      }
      bucket.prepend(key, value);
    }
  }

  function get(key) {
    const index = hash(key);
    testIndex(index);
    const bucket = buckets[index];
    if (bucket.contains(key)) {
      let currentNode = bucket.getHead();
      while (currentNode || currentNode.nextNode) {
        if (currentNode.key === key) return currentNode.value;
        currentNode = currentNode.nextNode;
      }
      return null;
    }
    else return null;
  }

  function has(key) {
    return get(key) === null ? false : true;
  }

  function remove(key) {
    const index = getIndexFromKey(key);
    const bucket = buckets[index];
    const currentNode = bucket.getHead();
    //if the head is the key and its next node is null. We can just make the head null to remove it.

    //if the next node is the key, we check its nextNode. If that node is null, we're done. Remove it.
    //else we take a temp copy of THAT nodes nextNode and assign to the first node.nextNode
    let previousNode = currentNode;
    let tempNext;
    while (currentNode.nextNode) {
      if(previousNode.nextNode === key) {
        if(currentNode.nextNode !== null) {
          tempNext = currentNode.nextNode;
          currentNode.nextNode = null;
          previousNode.nextNode = tempNext;
          return true;
        }
      }
      previousNode = currentNode;
      currentNode = currentNode.nextNode;
    }
    return false;
  }
  

 
  function getIndexFromKey(key) {
    return testIndex(hash(key));
  }

  function length() {

  }

  function clear() {
    
  }

  function keys() {

  }

  function values() {

  }

  function entries() {

  }

  function hash(key) {
    let hashCode = 0;
       
    const primeNumber = 31;
    for (let i = 0; i < key.length; i++) {
      hashCode = primeNumber * hashCode + key.charCodeAt(i);
      hashCode = hashCode % capacity;
    }
 
    return hashCode;
  }
  //WIP. still need it to copy things over.
  function growBuckets() {
    capacity = capacity * 2;
    initializeBuckets();
  }

  function initializeBuckets() {
    let buckets = [];
    for (let i  = 0; i < capacity; i++) {
      buckets.push(newList());
    }
    return buckets;
  }

  //TOP self limitation function to prevent accessing an index out of range.
  //Must be included whenever accessing a bucket with an index (hash code).
  function testIndex(index) {
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
  }
  return {set, hash, buckets, get, has, remove, length, clear, keys, values, entries}
}


let testTable = createHashTable();
testTable.set('john', 'smith');
testTable.set('Migh', 'kawk');
testTable.set('johbobn', 'shmittyweberjemenmenjensen');
testTable.set('bob', 'howdy ho, neighbor');
testTable.clear();
console.log(testTable.buckets);



for (let i = 0; i < testTable.buckets.length; i++) {
  const element = testTable.buckets[i];
  if(element.getSize() > 0) console.log("I'm " + element.toString());
}

