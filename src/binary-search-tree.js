const { NotImplementedError } = require("../extensions/index.js");

const { Node } = require("../extensions/list-tree.js");

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */

class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addDataIntoTree(this.rootNode, data);
    function addDataIntoTree(node, data) {
      if (!node) {
        return new Node(data);
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        node.left = addDataIntoTree(node.left, data);
      } else {
        node.right = addDataIntoTree(node.right, data);
      }
      return node;
    }
  }

  has(data) {
    return searchDataInTree(this.rootNode, data);
    function searchDataInTree(node, data) {
      if (!node) {
        return false;
      }
      if (node.data === data) {
        return true;
      }
      if (data < node.data) {
        return searchDataInTree(node.left, data);
      } else {
        return searchDataInTree(node.right, data);
      }
    }
  }

  find(data) {
    return findDataInTree(this.rootNode, data);
    function findDataInTree(node, data) {
      if (!node) {
        return null;
      }
      if (node.data === data) {
        return node;
      }
      if (data < node.data) {
        return findDataInTree(node.left, data);
      } else {
        return findDataInTree(node.right, data);
      }
    }
  }

  remove(data) {
    this.rootNode = removeNodeFromTree(this.rootNode, data);
    function removeNodeFromTree(node, data) {
      if (!node) {
        return null;
      }
      if (data < node.data) {
        node.left = removeNodeFromTree(node.left, data);
        return node;
      } else if (data > node.data) {
        node.right = removeNodeFromTree(node.right, data);
        return node;
      } else {
        if (!node.left && !node.right) {
          return null;
        }
        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }
        let minFromRight = node.right;
        while (minFromRight.left) {
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;
        node.right = removeNodeFromTree(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
    if (!this.rootNode) {
      return;
    }
    let node = this.rootNode;
    while (node.left) {
      node = node.left;
    }
    return node.data;
  }

  max() {
    if (!this.rootNode) {
      return;
    }
    let node = this.rootNode;
    while (node.right) {
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree,
};
