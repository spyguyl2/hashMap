import './style.css';
import './meyerReset.css';
import newList from './linkedList';



const createHashTable = () => {
  let capacity = 16;
  let loadFactor = .75;
  let buckets = initializeBuckets();
  
  function set(key, value) {
    const index = hash(key);
    testIndex(index);
    buckets[index].append(value)
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

  function growBuckets() {
    capacity = capacity * 2;
    initializeBuckets();
  }

  function initializeBuckets() {
    let buckets = [];
    for (let i  = 0; i < capacity; i++) {
      buckets.push(newList);
    }
    return buckets;
  }

  //TOP self limitation function to prevent accessing an index out of range.
  //Must be included whenever accessing a bucket with an index.
  function testIndex(index) {
    if (index < 0 || index >= buckets.length) {
      throw new Error("Trying to access index out of bound");
    }
  }
  return {set, hash}
}


let testTable = createHashTable();
testTable.set('john', 'smith');