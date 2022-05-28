export enum Methods {
    PreOrder = 'preOrder',
    InOrder = 'inOrder',
    PostOrder = 'postOrder'
}

interface SearchProps {
    callback: (data: Node) => void;
    method: Methods;
}

interface OrderProps {
    node?: Node | null;
    callback?: (data: Node) => void;
}

export class Node {
    value: number;
    left: Node | null;
    right: Node | null;

    constructor(value: number) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

export class BinaryTree {
    root: Node | null;
    constructor() {
        this.root = null;
    }

    addNode(value: number) {
        const newNode = new Node(value);
        if (!this.root) {
            this.root = newNode;
            return;
        }

        // go down through all the nodes and compare incoming value and parent node value
        let currentNode = this.root;
        while (currentNode) {
            // if new value < parent value - go left
            if (newNode.value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return;
                }
                currentNode = currentNode.left;
            } else {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return;
                }
                currentNode = currentNode.right;
            }
        }
    }

    preOrder({ node, callback }: OrderProps) {
        if (!node) {
            return;
        }

        if (callback) {
            callback(node);
        }

        // рекурсия вниз влево
        this.preOrder({node: node.left, callback })
        this.preOrder({node: node.right, callback })
    }

    inOrder({ node, callback }: OrderProps) {

    }

    postOrder({ node, callback }: OrderProps) {

    }

    // обход дерева в глубину
    traverseDepthFirstSearch({ callback, method }: SearchProps) {
        if (method === Methods.PreOrder) {
            return this.preOrder({ node: this.root, callback })
        }

        if (method === Methods.InOrder) {
            return this.inOrder({ node: this.root, callback })
        }

        if (method === Methods.PostOrder) {
            return this.postOrder({ node: this.root, callback })
        }
    }

    // обход дерева в ширину
    traverseBreadthFirstSearch() {

    }
}