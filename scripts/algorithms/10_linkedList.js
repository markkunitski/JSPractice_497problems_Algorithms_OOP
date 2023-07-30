class LinkedList {
    constructor() {
        this.size = 0
        this.root = null
    }
    add(value) {
        if (this.size === 0) {
            this.root = new Node(value)
            this.size += 1
            return true
        }
        let node = this.root
        while (node.next) {
            node = node.next
        }
        let newNode = new Node(value)
        node.next = newNode
        this.size += 1
    }
    getSize(){
       console.log(this.size) 
    }
    print(){
        let result =[]
        let node = this.root
        while(node){
            result.push(node.value)
            node = node.next
        }
        console.log(result) 
    }
}
class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}
const List = new LinkedList()
List.add(5)
List.add(1)
List.add(2)
List.add(3)
List.add(4)
List.add(6)
List.add(8)

List.getSize()