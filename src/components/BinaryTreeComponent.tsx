import React from 'react';
import { BinaryTree, Methods } from '../utils/functions/binary-tree';
import { log } from 'util';

export const BinaryTreeComponent = () => {
    const myTree = new BinaryTree();
    myTree.addNode(8);
    myTree.addNode(11);
    myTree.addNode(5);
    myTree.addNode(12);
    myTree.addNode(10);
    myTree.addNode(4);
    myTree.addNode(16);
    myTree.addNode(7);
    myTree.addNode(1);
    myTree.addNode(22);
    myTree.traverseDepthFirstSearch({
        method: Methods.PreOrder,
        callback: (node) => console.log(node.value)
    })
    console.log(myTree);
    return <></>
};