import './style.css';
import './meyerReset.css';

//TOP self limitation function to prevent accessing an index out or range.
//Must be included whenever accessing a bucket with an index.
//function is WIP. Probably just include the snippet where it's needed first.
function testIndex(index) {
  if (index < 0 || index >= buckets.length) {
    throw new Error("Trying to access index out of bound");
  }
}




class HashMap {
    hash(key) {
        let hashCode = 0;
            
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
      
        return hashCode;
      }

}
let test = new HashMap();
let testCode = test.hash('Lim');
console.log(testCode);