import './style.css';
import './meyerReset.css';
import LinkedList from './linkedList';

//TOP self limitation function to prevent accessing an index out or range.
//Must be included whenever accessing a bucket with an index.
//function is WIP. Probably just include the snippet where it's needed first.
function testIndex(index) {
  if (index < 0 || index >= buckets.length) {
    throw new Error("Trying to access index out of bound");
  }
}




class HashMap {
  capacity = 16;
  loadFactor = .75;
  buckets = Array.from({length: this.capacity});

  hash(key) {
      let hashCode = 0;
          
      const primeNumber = 31;
      for (let i = 0; i < key.length; i++) {
        hashCode = primeNumber * hashCode + key.charCodeAt(i);
        hashCode = hashCode % this.capacity;
      }
    
      return hashCode;
    }

  set(key, value) {
    const index = hash(key);
    const bucket = this.buckets[index];
    if (bucket === null) 
      bucket = [key, value];
    else if (bucket.key === key)
      bucket.value = value;
   // else need to make a linked listz
  }

}

let test = new HashMap();

let testList = new LinkedList();

