let count = 0
class BinaryTree {
    constructor() {
        this.root = null
    }
    add(value) {
        if (!this.root) {
            this.root = new TreeNode(value)
        } else {
            let node = this.root
            let newNode = new TreeNode(value)
            while (node) {
                count++
                
                if (node.value < value) {
                    if (!node.right) {
                        break
                    }
                    node = node.right
                } else {
                    if (!node.left) {
                        break
                    }
                    node = node.left
                    
                }
            }
            if (value > node.value) {
                node.right = newNode
            } else {
                node.left = newNode
            }
        }
    }
    print(root = this.root) {
        if (!root) {
            return true
        }
        console.log(root.value)
        this.print(root.left)
        this.print(root.right)
    }


}
class TreeNode {
    constructor(value) {
        this.value = value
        this.right = null
        this.left = null
    }
}
const tree = new BinaryTree()

tree.add(5)
tree.add(2)
tree.add(6)
tree.add(2)
tree.add(1)
tree.print()


