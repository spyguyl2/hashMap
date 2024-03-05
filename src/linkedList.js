export default function LinkedList () {

    let head = null;
    let size = 0;

    const hasHead = () => head === null ? false : true;

    const append = (key, value) => {
        if (hasHead()) {
            let currentNode = head;
            while (currentNode.nextNode) {
                currentNode = currentNode.nextNode;
            }
            currentNode.nextNode = createNode(key, value);
            size++;
        }
        else {
            head = createNode(key, value);
            size++;
        }
    }

    const prepend = (key, value) => {
        head = createNode(key, value, head);
        size++;
    }

    const getSize = () => size;

    const getHead = () => {
        if (hasHead()) return head;
        else return false;
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

    const contains = (key) => {
        if (hasHead()) {
            let currentNode = head;
            if (currentNode.key === key) return true;
            while (currentNode.nextNode) {
                if (currentNode.key === key) return true;
                else currentNode = currentNode.nextNode;
            }
            if (currentNode.key === key) return true;
            else return false;
        }
        else return false;
    }

    const find = (key) => {
        if (hasHead()) {
            let index = 0;
            let currentNode = head;
            while (currentNode.nextNode) {
                if (currentNode.key === key) return index;
                currentNode = currentNode.nextNode;
                index++;
            }
            if (currentNode.key === key) return index;
            else return null;
        }
        else return null;
    }

    const toString = () => {
        if (hasHead(head)) {
            console.log(`Current Size: ${getSize()}`)
            let currentNode = head;
            while(currentNode) {
                console.log(`Key: ${currentNode.key} Value: ${currentNode.value} -> `);
                currentNode = currentNode.nextNode;
            }
            console.log('null');
        }
        else console.log('This list is empty.');
    }

    const removeAt = (index) => {
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

    return {append, prepend, getSize, getHead, tail, at, pop, contains, find, toString, removeAt};
}

const createNode = (key = null, value = null, nextNode = null) => {

    return {key, value, nextNode};
}