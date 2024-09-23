import {Node} from './node.js';

export class LinkedList {
    constructor() {
      this.listHead = null;
      this.length = 0;
    }
  
    append(value) {
      const addedNode = new Node(value);
      if (this.listHead === null) {
        this.listHead = addedNode;
      } else {
        let temp = this.listHead;
        while (temp.nextNode !== null) {
          temp = temp.nextNode;
        }
        temp.nextNode = addedNode;
      }
      this.length++;
    }

    prepend(value) {
        const addedNode = new Node(value);
        addedNode.nextNode = this.listHead;
        this.listHead = addedNode;
        this.length++;
    }
  
    size() {
      return this.length;
    }
  
    head() {
      return this.listHead;
    }

    tail() {
        let temp = this.listHead;
        while (temp.nextNode != null) temp = temp.nextNode;
        return temp;
      }

      at(index) {
        if (index >= this.length || index < 0) {
            return 'Index out of bounds';
        }
        let temp = this.listHead;
        for (let i = 0; i < index ; i++) {
            temp = temp.nextNode;
        }
        return temp;
      }

      pop() {
        if (this.listHead === null) {
            return ('List is currently empty.')
        }
         if (this.listHead.nextNode === null) {
            this.listHead = null;
         } else {
        let temp = this.listHead;
        while (temp.nextNode.nextNode !== null) {
            temp = temp.nextNode;
        }
        temp.nextNode = null;
      }
      this.length--;
    }

    contains(value) {
        if (this.listHead === null) {
            return 'List is currently empty.';
        } 
        
        let temp = this.listHead;
        while (temp !== null) {
            if (temp.value === value) {
                return true;
            }
            temp = temp.nextNode; 
        }list.insertAt("squirrel", 3);
        list.removeAt(4);
        list.pop();
        console.log(list.toString());
        console.log(list.size());
        console.log(list.tail());
        console.log(list.find('snake'))
        
    
        return false;
    }

    find(value) {
        if (this.listHead === null) {
            return 'List is currently empty.';
        } 
        let counter = 0;
        let temp = this.listHead;

        while (temp !== null) {
            if (temp.value === value) {
                return counter;
            } 
                temp = temp.nextNode;
                counter++;
            
        }
        return null;
    }

    toString() {
        if (this.listHead === null) {
            return 'List is currently empty.';
        } 
        let string = '';

        let temp = this.listHead;
        while (temp !== null) {
            string += `( ${temp.value} ) -> `;
            temp = temp.nextNode;
        }
        string += 'null';

        return string;
    }

    insertAt(value, index) {
        if (index > this.length || index < 0) {
            return 'Index out of bounds';
        }
        const addedNode = new Node(value);
        if (index === 0) {
            addedNode.nextNode = this.listHead;
            this.listHead = addedNode;
        } else {
            let temp = this.at(index - 1); 
            addedNode.nextNode = temp.nextNode; 
            temp.nextNode = addedNode; 
        }
        
        this.length++; 
    }

    removeAt(index) {
        if (index > this.length || index < 0) {
            return 'Index out of bounds';
        }

        if (index === 0) {
            this.listHead = this.listHead.nextNode;
        } else {
        const temp = this.at(index - 1);
        temp.nextNode = temp.nextNode.nextNode;
        }
        this.length--;
    }

    
  }

 