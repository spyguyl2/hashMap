export default function LinkedList () {

    let head = null;
    let size = 0;

    const hasHead = () => head === null ? false : true;

    const append = (value) => {
        if (hasHead()) {
            let currentNode = head;
            while (currentNode.nextNode) {
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = createNode(value);
        }
        else head = createNode(value);
        size++;
    }

    const prepend = (value) => {
        head = createNode(value, head);
        size++;
    }

    const getSize = () => size;

    const getHead = () => {
        if (hasHead()) return head;
        else console.log('This linked list is empty!');
    }

    const tail = () => {
        if (hasHead()) {
            let currentNode = head;
            while (currentNode.nextNode) {
                currentNode = currentNode.nextNode;
            }
            return currentNode;
        }
        else console.log('This linked list is empty!');
    }

    const at = (index) => {
        if (index < size) {
            let currentIndex = 0;
            let currentNode = head;
            while (currentNode.nextNode && currentIndex !== index) {
                currentNode = currentNode.nextNode;
                currentIndex++;
            }
            return currentNode
        }
        else console.log('That index does not exist.');
    }

    const pop = () => {
            if (hasHead()) {
                if (head.nextNode === null) return head = null;
                let previousNode;
                let currentNode = head;
                while (currentNode.nextNode) {
                    previousNode = currentNode;
                    currentNode = currentNode.nextNode;
                }
                previousNode.nextNode = null;
                size--;
            }
            else console.log('This list is already empty!');
    }

    const contains = (value) => {
        if (hasHead()) {
            let currentNode = head;
            console.log(currentNode.value);
            if (currentNode.value === value) return true;
            while (currentNode.nextNode) {
                if (currentNode.value === value) return true;
                else currentNode = currentNode.nextNode;
            }
            if (currentNode.value === value) return true;
            else return false;
        }
        else return false;
    }

    const find = (value) => {
        if (hasHead()) {
            if (head.value === value) return 0;
            let index = 0;
            let currentNode = head;
            while (currentNode.nextNode) {
                if (currentNode.value === value) return index;
                currentNode = currentNode.nextNode;
                index++;
            }
            if (currentNode.value === value) return index;
            else return null;
        }
        else console.log('This list is empty!');
    }

    const toString = () => {
        if (hasHead(head)) {
            console.log(`Current Size: ${getSize()}`)
            let currentNode = head;
            while(currentNode) {
                console.log(`${currentNode.value} -> `);
                currentNode = currentNode.nextNode;
            }
            console.log('null');
        }
        else console.log('This list is empty.');
    }

    return {append, prepend, size, getHead, tail, at, pop, contains, find, toString};
}

const createNode = (key = null, value = null, nextNode = null) => {

    return {key, value, nextNode};
}